/**
 * Mixins-2.ts — TypeScript bridge: dom.ts mixins <-> Custom Attributes.
 * Save/rename this attachment from Mixins-2.ts.txt to src/mixin/Mixins.ts,
 * or update all imports to src/mixin/Mixins-2.ts. Do not run the old Mixins.ts
 * observers concurrently with this replacement: the old implementation does
 * not know about source leases and can duplicate lifecycle calls.
 *
 * Sources used: the Mixins.ts, custom-attributes.js and declarations supplied
 * with the request; the Custom Attributes proposal/polyfill linked there.
 * The Observer/Store/Behavior/style imports below are the APIs visible in the
 * supplied Mixins.ts; their latest repository implementations were not fetched.
 *
 * Requirements: TypeScript 5.x, target ES2021+, lib DOM + DOM.Iterable + ES2021.
 * This module contains executable TypeScript, not JavaScript with declarations.
 * Public types have distinct names to avoid clashes with the supplied .d.ts.
 * Use getCustomAttributes()/getCustomAttributeBase() for typed access, or keep
 * the supplied Custom Attributes global declarations in your project.
 *
 * Compatibility boundaries (this is not a claim of standards conformance):
 * - MutationObserver lifecycle delivery is asynchronous; call flushMixins()
 *   for explicit reconciliation, or await settleMixins() in tests.
 * - The fallback patches only the current realm, only upgrades null-namespace
 *   attributes on HTML elements, and cannot find pre-existing closed shadows.
 * - Scoped registries, explicit null registries, Attr subclasses, upgrade(),
 *   initialize(), attribute-node replacement, adoption, and moveBefore() where
 *   already implemented by the browser are supported. moveBefore itself is
 *   NOT polyfilled. Historical transient connect/disconnect states inside one
 *   MutationObserver batch cannot be reconstructed in every case.
 * - No Promise.withResolvers dependency. Existing Custom Attributes support
 *   is reused, never deliberately overwritten. A partial API is rejected.
 * - Registrations are strong by design. FinalizationRegistry cannot delete
 *   an object strongly retained in a name Map; unregisterMixin is explicit.
 * - Native/external registry timing and scope rules remain that registry's
 *   responsibility. Install its polyfill BEFORE importing this module if used.
 * - Module-owned observers/roots have application lifetime. removeRoot()
 *   stops the mixin observer; the installed global attribute polyfill has no
 *   uninstall operation. Imports themselves must be SSR-safe for SSR usage.
 *
 * Example (after importing this module in a browser):
 *
 * const click = new DOMMixin();
 * click.connect = (ref, _self, related) => {
 *   const element = ref.deref();
 *   if (!element) return;
 *   const handler = () => console.log(related.attribute?.value);
 *   element.addEventListener('click', handler);
 *   return () => element.removeEventListener('click', handler);
 * };
 * registerCrossMixin('click', click, { attributeName: 'x-click' });
 * // <button data-mixin="click" x-click="hello"> has ONE click connection.
 * // Removing either source alone does not disconnect the remaining source.
 *
 * const merged = mergeMixins('combined', click, otherMixin);
 * mixinToCustomAttribute('x-combined', merged);
 *
 * const Base = getCustomAttributeBase();
 * class TitleAttribute extends Base {
 *   connectedCallback() {
 *     this.ownerElement?.setAttribute('title', this.value);
 *   }
 *   attributeChangedCallback(_old: string | null, value: string | null) {
 *     if (value !== null) this.ownerElement?.setAttribute('title', value);
 *   }
 * }
 * customAttributeToMixin('title', TitleAttribute, {
 *   attributeName: 'x-title', value: 'From data-mixin'
 * });
 * // <div data-mixin="title"> materializes a real x-title Attr instance.
 *
 * Verification recipe (not executed when this file was generated):
 * 1. Register a mixin counting connect/disconnect, attach an element with both
 *    sources, await settleMixins(): connect === 1.
 * 2. Remove data-mixin only, await: disconnect === 0.
 * 3. Remove x-click too, await: disconnect === 1.
 * 4. Reinsert a removed subtree: one new connection, no leaked event listener.
 * 5. Replace its Attr node; test rapid a->b->c values and scoped shadow roots.
 */

import { observeAttributeBySelector, observeBySelector } from './Observer';
import { observeStyleTree } from '@fest-lib/style-lib';
import { getStoresOfElement, namedStoreMaps } from './Store';
import { boundBehaviors } from './Behavior';

export type Cleanup = () => void;
export type Root = Document | DocumentFragment | Element;
export type MixinSource = object | symbol;
export interface Related {
    storeSet: ReturnType<typeof getStoresOfElement>;
    mixinSet: WeakSet<Mixin> | undefined;
    behaviorSet: unknown;
    attribute?: Attr;
    attributes: ReadonlySet<Attr>;
    value?: string;
    signal?: AbortSignal;
}
export interface Mixin {
    readonly name?: string;
    connect?(element: WeakRef<Element>, self: Mixin, related: Related): unknown;
    disconnect?(element: WeakRef<Element>, self: Mixin, related: Related): unknown;
    attributeChangedCallback?(element: WeakRef<Element>, self: Mixin,
        related: Related, oldValue: string | null, newValue: string | null): unknown;
    adoptedCallback?(element: WeakRef<Element>, self: Mixin, related: Related,
        oldDocument: Document, newDocument: Document): unknown;
    connectedMoveCallback?(element: WeakRef<Element>, self: Mixin, related: Related): unknown;
}
export interface DomCustomAttribute extends Attr {
    connectedCallback?(): void;
    disconnectedCallback?(): void;
    connectedMoveCallback?(): void;
    adoptedCallback?(oldDocument: Document, newDocument: Document): void;
    attributeChangedCallback?(oldValue: string | null, newValue: string | null): void;
}
export interface DomCustomAttributeConstructor {
    new (): DomCustomAttribute;
    readonly prototype: DomCustomAttribute;
}
export interface DomCustomAttributeRegistry {
    define(name: string, constructor: DomCustomAttributeConstructor): void;
    get(name: string): DomCustomAttributeConstructor | undefined;
    getName(constructor: DomCustomAttributeConstructor): string | null;
    whenDefined(name: string): Promise<DomCustomAttributeConstructor>;
    upgrade(root: Node): void;
    initialize(root: Node): void;
}
export interface DomCustomAttributeRegistryConstructor {
    new (): DomCustomAttributeRegistry;
    readonly prototype: DomCustomAttributeRegistry;
}
export interface AttributeOptions {
    customAttributeRegistry?: DomCustomAttributeRegistry | null;
}
export interface BridgeOptions {
    registry?: DomCustomAttributeRegistry;
    attributeName?: string;
}

// Dynamic access is restricted to the DOM/global patch boundary, where native
// overloaded methods and experimental API dictionaries are not in lib.dom.d.ts.
type Dynamic = Record<PropertyKey, any>;
const globals = globalThis as unknown as Dynamic;
function shared<T>(key: string, create: () => T): T {
    const symbol = Symbol.for(key);
    return (globals[symbol] ??= create()) as T;
}
function hasDOM(): boolean {
    return typeof document !== 'undefined' && typeof Element !== 'undefined' &&
        typeof Attr !== 'undefined' && typeof MutationObserver !== 'undefined';
}
function requireDOM(): void {
    if (!hasDOM()) throw new Error('Custom Attributes require a browser DOM.');
}
function report(error: unknown): void {
    const fn = globals.reportError;
    if (typeof fn === 'function') fn.call(globalThis, error);
    else console.error(error);
}
function safe<T>(callback: () => T): T | undefined {
    try { return callback(); } catch (error) { report(error); return undefined; }
}
function domError(message: string, name: string): DOMException {
    return new DOMException(message, name);
}
export function isValidCustomAttributeName(name: string): boolean {
    return /^[a-z][^A-Z\t\n\f\r \0/=>]*$/.test(name) && name.includes('-') &&
        !/^(aria-|data-|xml|xlink)/.test(name) &&
        name !== 'accept-charset' && name !== 'http-equiv';
}
function assertAttributeName(name: string): void {
    if (!isValidCustomAttributeName(name)) {
        throw domError(`Invalid custom attribute name: ${name}`, 'SyntaxError');
    }
}
function isElement(node: Node): node is Element { return node.nodeType === 1; }
function isHTML(element: Element): boolean {
    return element.namespaceURI === 'http://www.w3.org/1999/xhtml';
}
function isShadow(node: Node): node is ShadowRoot {
    // nodeType + host avoids an instanceof check against a foreign Node class.
    return node.nodeType === 11 && 'host' in node;
}

/* ------------------------------------------------------------------------- *
 * Shared mixin state. The four original dom.ts symbols are preserved.
 * ------------------------------------------------------------------------- */
export const boundMixinSet = shared('dom.ts@boundMixinSet',
    () => new WeakMap<Element, WeakSet<Mixin>>());
export const mixinElements = shared('dom.ts@mixinElements',
    () => new WeakMap<Mixin, WeakSet<Element>>());
export const mixinRegistry = shared('dom.ts@mixinRegistry', () => new Map<string, Mixin>());
export const mixinNamespace = shared('dom.ts@mixinNamespace', () => new WeakMap<Mixin, string>());
interface Binding {
    sources: Set<MixinSource>;
    connected: boolean;
    document: Document;
    cleanup?: Cleanup;
    controller?: AbortController;
    lastAttribute?: Attr;
    reconciling: boolean;
    dirty: boolean;
}
interface RootWatch { observer: MutationObserver; disposers: Cleanup[]; }
interface Engine {
    bindings: WeakMap<Element, Map<Mixin, Binding>>;
    roots: Set<Root>;
    watches: Map<Root, RootWatch>;
    pending: Set<Element>;
    queued: boolean;
    dataSource: symbol;
    manualSource: symbol;
    closedShadows: WeakMap<Element, ShadowRoot>;
    processing: boolean;
}
const engine = shared<Engine>('dom.ts@mixins2.engine', () => ({
    bindings: new WeakMap(), roots: new Set(), watches: new Map(),
    pending: new Set(), queued: false, dataSource: Symbol('data-mixin'),
    manualSource: Symbol('manual'), closedShadows: new WeakMap(), processing: false
}));
export const roots = engine.roots;
function shadowOf(element: Element): ShadowRoot | null {
    return element.shadowRoot ?? engine.closedShadows.get(element) ?? null;
}
function* elementsIn(root: Node): Generator<Element> {
    const stack: Node[] = [root];
    while (stack.length) {
        const node = stack.pop()!;
        if (isElement(node)) yield node;
        for (let child = node.lastChild; child; child = child.previousSibling) stack.push(child);
        if (isElement(node)) {
            const shadow = shadowOf(node);
            if (shadow) stack.push(shadow);
        }
    }
}
function* lightElementsIn(root: Node): Generator<Element> {
    const stack: Node[] = [root];
    while (stack.length) {
        const node = stack.pop()!;
        if (isElement(node)) yield node;
        for (let child = node.lastChild; child; child = child.previousSibling) stack.push(child);
    }
}
function attributesFor(binding?: Binding): Set<Attr> {
    const result = new Set<Attr>();
    for (const source of binding?.sources ?? []) {
        if (typeof source === 'object' && (source as { nodeType?: number }).nodeType === 2) {
            result.add(source as Attr);
        }
    }
    return result;
}
export function getElementRelated(element: Element, mixin?: Mixin, attribute?: Attr): Related {
    const binding = mixin ? engine.bindings.get(element)?.get(mixin) : undefined;
    const attributes = attributesFor(binding);
    attribute ??= attributes.values().next().value ?? binding?.lastAttribute;
    return {
        storeSet: getStoresOfElement(namedStoreMaps, element),
        mixinSet: boundMixinSet.get(element),
        behaviorSet: boundBehaviors.get(element),
        attribute, attributes, value: attribute?.value, signal: binding?.controller?.signal
    };
}
function bindingFor(element: Element, mixin: Mixin): Binding {
    let map = engine.bindings.get(element);
    if (!map) engine.bindings.set(element, map = new Map());
    let binding = map.get(mixin);
    if (!binding) map.set(mixin, binding = {
        sources: new Set(), connected: false, document: element.ownerDocument,
        reconciling: false, dirty: false
    });
    return binding;
}
function callMixin(element: Element, mixin: Mixin, name: keyof Mixin,
    attribute?: Attr, ...extra: unknown[]): unknown {
    const callback = mixin[name];
    if (typeof callback !== 'function') return;
    return safe(() => Reflect.apply(callback, mixin,
        [new WeakRef(element), mixin, getElementRelated(element, mixin, attribute), ...extra]));
}
function reconcileBinding(element: Element, mixin: Mixin, binding: Binding): void {
    if (binding.reconciling) { binding.dirty = true; return; }
    binding.reconciling = true;
    try {
        // Lifecycle code is allowed to change its own leases. Set state BEFORE
        // callbacks and repeat until stable, bounded to avoid synchronous loops.
        for (let turn = 0; turn < 32; turn++) {
            binding.dirty = false;
            const oldDocument = binding.document;
            binding.document = element.ownerDocument;
            if (oldDocument !== binding.document) {
                callMixin(element, mixin, 'adoptedCallback', undefined, oldDocument, binding.document);
            }
            const wanted = binding.sources.size > 0 && element.isConnected;
            if (wanted !== binding.connected) {
                binding.connected = wanted;
                let set = boundMixinSet.get(element);
                if (!set) boundMixinSet.set(element, set = new WeakSet());
                let elements = mixinElements.get(mixin);
                if (!elements) mixinElements.set(mixin, elements = new WeakSet());
                if (wanted) {
                    set.add(mixin); elements.add(element);
                    binding.controller = new AbortController();
                    const cleanup = callMixin(element, mixin, 'connect');
                    if (typeof cleanup === 'function') binding.cleanup = cleanup as Cleanup;
                } else {
                    set.delete(mixin); elements.delete(element);
                    const cleanup = binding.cleanup;
                    binding.cleanup = undefined;
                    safe(() => binding.controller?.abort());
                    if (cleanup) safe(cleanup);
                    callMixin(element, mixin, 'disconnect');
                    binding.controller = undefined;
                }
            }
            if (!binding.dirty) break;
            if (turn === 31) {
                report(new Error('A mixin repeatedly changed its own binding during lifecycle delivery.'));
                enqueue(element);
            }
        }
    } finally { binding.reconciling = false; }
    if (!binding.sources.size && !binding.connected) {
        engine.bindings.get(element)?.delete(mixin);
    }
}
function acquire(element: Element, mixin: Mixin, source: MixinSource): void {
    const binding = bindingFor(element, mixin);
    binding.sources.add(source);
    if (typeof source === 'object' && (source as { nodeType?: number }).nodeType === 2) {
        binding.lastAttribute = source as Attr;
    }
    reconcileBinding(element, mixin, binding);
}
function release(element: Element, mixin: Mixin, source: MixinSource): void {
    const binding = engine.bindings.get(element)?.get(mixin);
    if (!binding) return;
    binding.sources.delete(source);
    reconcileBinding(element, mixin, binding);
}
function enqueue(element: Element): void {
    engine.pending.add(element);
    if (!engine.queued) {
        engine.queued = true;
        queueMicrotask(() => {
            engine.queued = false;
            drainPending();
        });
    }
}
function drainPending(): void {
    if (engine.processing) return;
    engine.processing = true;
    try {
        const pending = [...engine.pending];
        engine.pending.clear();
        for (const element of pending) safe(() => updateAllMixins(element));
    } finally { engine.processing = false; }
}
function dataNames(element: Element): Set<string> {
    return new Set((element.getAttribute('data-mixin') ?? '').split(/\s+/).filter(Boolean));
}
function writeDataNames(element: Element, names: Set<string>): void {
    const next = [...names].join(' ');
    if (next) {
        if (element.getAttribute('data-mixin') !== next) element.setAttribute('data-mixin', next);
    } else if (element.hasAttribute('data-mixin')) element.removeAttribute('data-mixin');
}
export function updateAllMixins(element: Element): Element {
    const selected = new Set<Mixin>();
    for (const name of dataNames(element)) {
        const mixin = mixinRegistry.get(name);
        if (mixin) selected.add(mixin);
    }
    // Reconcile REMOVED names too. Iterating only current names was a bug in
    // the supplied implementation: it never disconnected removed mixins.
    for (const [mixin, binding] of [...(engine.bindings.get(element) ?? [])]) {
        if (binding.sources.has(engine.dataSource) && !selected.has(mixin)) {
            release(element, mixin, engine.dataSource);
        }
    }
    for (const mixin of selected) acquire(element, mixin, engine.dataSource);
    for (const [mixin, binding] of [...(engine.bindings.get(element) ?? [])]) {
        reconcileBinding(element, mixin, binding);
    }
    return element;
}
export function updateMixinAttributes(element: Element, mixin: Mixin | string): Element {
    // Full reconciliation is intentional: it preserves other active sources.
    void mixin;
    return updateAllMixins(element);
}
export function updateMixinAttributesAll(elements: Iterable<Element>, mixin?: Mixin | string): void {
    for (const element of elements) {
        if (mixin) updateMixinAttributes(element, mixin); else updateAllMixins(element);
    }
}
export function updateMixinAttributesAllInRoots(mixin?: Mixin | string): void {
    for (const root of roots) updateMixinAttributesAll(elementsIn(root), mixin);
}
export function bindMixins(element: Element, mixin: Mixin, mixSet?: WeakSet<Mixin>): Element {
    if (mixSet && !boundMixinSet.has(element)) boundMixinSet.set(element, mixSet);
    const name = mixinNamespace.get(mixin) ?? mixin.name;
    if (name) { const names = dataNames(element); names.add(name); writeDataNames(element, names); }
    acquire(element, mixin, engine.manualSource);
    updateAllMixins(element);
    return element;
}
export function unbindMixins(element: Element, mixin: Mixin, reflect = true): Element {
    if (reflect) {
        const name = mixinNamespace.get(mixin) ?? mixin.name;
        if (name) { const names = dataNames(element); names.delete(name); writeDataNames(element, names); }
    }
    release(element, mixin, engine.manualSource);
    return updateAllMixins(element);
}
export function reflectMixins(element: Element | null | undefined,
    mixins?: Iterable<Mixin> | Map<unknown, Mixin>): Element | null | undefined {
    if (!element) return element;
    const values: Iterable<Mixin> = mixins instanceof Map ? mixins.values() : mixins ?? [];
    for (const mixin of values) bindMixins(element, mixin);
    return element;
}
export function registerMixin(name: string, mixin: Mixin): Mixin {
    const key = name.trim();
    if (!key || /\s/.test(key)) throw new TypeError('Mixin name must be a non-empty token.');
    if (!mixin || (typeof mixin !== 'object' && typeof mixin !== 'function')) {
        throw new TypeError('Mixin must be an object.');
    }
    const existing = mixinRegistry.get(key); // @ts-ignore
    if (existing && existing !== mixin) { console.error(`Mixin name already registered: ${key}`); return; };//throw new Error(`Mixin name already registered: ${key}`);
    const previousName = mixinNamespace.get(mixin);
    if (previousName && previousName !== key) throw new Error(`Mixin already named: ${previousName}`);
    mixinRegistry.set(key, mixin); mixinNamespace.set(mixin, key);
    // Defer initial upgrades until subclass constructors/field initializers end.
    for (const root of roots) for (const element of elementsIn(root)) enqueue(element);
    return mixin;
}
export function unregisterMixin(name: string): boolean {
    const mixin = mixinRegistry.get(name);
    if (!mixin) return false;
    mixinRegistry.delete(name);
    if (mixinNamespace.get(mixin) === name) mixinNamespace.delete(mixin);
    for (const root of roots) for (const element of elementsIn(root)) enqueue(element);
    // This removes the data-mixin registration, NOT native attribute definitions
    // (registries have no undefine) and NOT explicit/manual/merged source leases.
    return true;
}
// Kept for source compatibility; no ineffective automatic registration occurs.
export const nameRegistryF = shared('dom.ts@mixins2.nameRegistryF', () =>
    typeof FinalizationRegistry === 'undefined' ? undefined :
        new FinalizationRegistry<string>(() => { /* explicit unregisterMixin only */ }));

function captureDisposer(result: unknown, list: Cleanup[]): void {
    // The supplied Observer signatures do not describe their return type.
    // Accept only a genuine cleanup function; do not guess an object protocol.
    if (typeof result === 'function') list.push(result as Cleanup);
}
function reconcileTreeSoon(root: Node): void {
    for (const element of elementsIn(root)) {
        const shadow = shadowOf(element);
        if (shadow && !roots.has(shadow)) addRoot(shadow);
        enqueue(element);
    }
}
function handleRootRecords(records: MutationRecord[]): void {
    for (const record of records) {
        if (record.type === 'attributes' && isElement(record.target)) enqueue(record.target);
        if (record.type === 'childList') {
            for (const node of record.addedNodes) reconcileTreeSoon(node);
            for (const node of record.removedNodes) reconcileTreeSoon(node);
        }
    }
}
export function addRoot(root: Root | null = typeof document !== 'undefined' ? document : null): Root | undefined {
    if (!root) return;
    requireDOM();
    if (roots.has(root)) return root;
    roots.add(root);
    const disposers: Cleanup[] = [];
    const observer = new MutationObserver(handleRootRecords);
    engine.watches.set(root, { observer, disposers });
    observer.observe(root, { childList: true, subtree: true, attributes: true });
    // Reuse the actual dom.ts helpers. The supplemental observer above is
    // required for removed subtrees, nesting, and non-data custom attributes.
    captureDisposer(observeAttributeBySelector(root, '*', 'data-mixin',
        (mutation: MutationRecord) => {
            if (isElement(mutation.target)) enqueue(mutation.target);
        }), disposers);
    captureDisposer(observeBySelector(root, '[data-mixin]',
        (mutation: MutationRecord) => {
            for (const node of mutation.addedNodes) reconcileTreeSoon(node);
            for (const node of mutation.removedNodes) reconcileTreeSoon(node);
        }), disposers);
    captureDisposer(observeStyleTree(root), disposers);
    polyfillState.runtime?.observeRoot(root);
    reconcileTreeSoon(root);
    return root;
}
export function removeRoot(root: Root): boolean {
    const watch = engine.watches.get(root);
    if (watch) {
        watch.observer.disconnect();
        for (const dispose of watch.disposers) safe(dispose);
        engine.watches.delete(root);
    }
    return roots.delete(root);
}
export class DOMMixin implements Mixin {
    constructor(name: string | null = null) { if (name) registerMixin(name, this); }
    connect(_element: WeakRef<Element>, _self: Mixin, _related: Related): unknown { return this; }
    disconnect(_element: WeakRef<Element>, _self: Mixin, _related: Related): unknown { return this; }
    storeForElement(element: Element): unknown { return namedStoreMaps.get(this.name ?? '')?.get(element); }
    relatedForElement(element: Element): Related { return getElementRelated(element, this); }
    get elements(): WeakSet<Element> | undefined { return mixinElements.get(this); }
    get storage(): unknown { return namedStoreMaps.get(this.name ?? ''); }
    get name(): string | undefined { return mixinNamespace.get(this); }
}

/* ------------------------------------------------------------------------- *
 * Current-realm Custom Attributes polyfill, adapted from the supplied source.
 * ------------------------------------------------------------------------- */
interface AttributeDefinition {
    name: string;
    constructor: DomCustomAttributeConstructor;
    callbacks: Partial<Record<Lifecycle, Function>>;
    stack: Array<Attr | symbol>;
}
type Lifecycle = 'connectedCallback' | 'disconnectedCallback' | 'connectedMoveCallback' |
    'adoptedCallback' | 'attributeChangedCallback';
interface AttributeEntry {
    state: 'precustomized' | 'custom' | 'failed';
    definition: AttributeDefinition | null;
    connected: boolean;
    document: Document;
}
interface RegistryInternals {
    scoped: boolean;
    byName: Map<string, AttributeDefinition>;
    byConstructor: Map<DomCustomAttributeConstructor, AttributeDefinition>;
    running: boolean;
    pending: Map<string, { promise: Promise<DomCustomAttributeConstructor>;
        resolve: (constructor: DomCustomAttributeConstructor) => void }>;
    documents: Set<Document>;
}
interface PolyfillRuntime {
    registry: DomCustomAttributeRegistry;
    Registry: DomCustomAttributeRegistryConstructor;
    observeRoot(root: Node): void;
    flush(): void;
}
interface PolyfillState { runtime?: PolyfillRuntime; }
const polyfillState = shared<PolyfillState>('dom.ts@mixins2.attributePolyfill', () => ({}));
export function isSupported(): boolean {
    return typeof globals.CustomAttributeRegistry === 'function' &&
        globals.customAttributes != null && typeof globals.customAttributes.define === 'function';
}
export function isPolyfilled(): boolean {
    // Positive identification only; Function#toString is not a native detector.
    return !!polyfillState.runtime && globals.CustomAttributeRegistry === polyfillState.runtime.Registry;
}
export function apply(): DomCustomAttributeRegistry {
    requireDOM();
    if (isSupported()) return globals.customAttributes as DomCustomAttributeRegistry;
    if (globals.CustomAttributeRegistry != null || globals.customAttributes != null) {
        throw new Error('A partial Custom Attributes API is installed; refusing to overwrite it.');
    }
    const runtime = installAttributePolyfill();
    polyfillState.runtime = runtime;
    // Link roots after publication; observeRoot -> addRoot recursion is guarded.
    for (const root of roots) runtime.observeRoot(root);
    addRoot(document);
    return runtime.registry;
}
export function getCustomAttributes(): DomCustomAttributeRegistry { return apply(); }
export function createCustomAttributeRegistry(): DomCustomAttributeRegistry {
    apply();
    return new (globals.CustomAttributeRegistry as DomCustomAttributeRegistryConstructor)();
}
export function getCustomAttributeBase(): DomCustomAttributeConstructor {
    apply();
    // Attr itself is an illegal constructor. Subclass this returned base.
    return globals.Attr as DomCustomAttributeConstructor;
}
export function createCustomAttribute(name: string,
    options: { document?: Document; registry?: DomCustomAttributeRegistry | null } = {}): DomCustomAttribute {
    apply();
    const doc = options.document ?? document;
    return (doc.createAttribute as unknown as
        (name: string, options?: AttributeOptions) => DomCustomAttribute).call(doc, name,
            { customAttributeRegistry: options.registry });
}
function installAttributePolyfill(): PolyfillRuntime {
    const NativeAttr = globals.Attr as typeof Attr;
    const docProto = Document.prototype as unknown as Dynamic;
    const elProto = Element.prototype as unknown as Dynamic;
    const nativeCreateAttribute = docProto.createAttribute;
    const nativeCreateAttributeNS = docProto.createAttributeNS;
    const nativeCreateElement = docProto.createElement;
    const nativeCreateElementNS = docProto.createElementNS;
    const nativeImportNode = docProto.importNode;
    const nativeAttachShadow = elProto.attachShadow;
    const attributeDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'attributes')!;
    const nativeAttributes = attributeDescriptor.get!;
    const ALREADY = Symbol('already constructed');
    const callbackNames: Lifecycle[] = ['connectedCallback', 'disconnectedCallback',
        'connectedMoveCallback', 'adoptedCallback', 'attributeChangedCallback'];
    const internals = new WeakMap<DomCustomAttributeRegistry, RegistryInternals>();
    const registries = new WeakMap<Node, DomCustomAttributeRegistry | null>();
    const registryDocuments = new WeakMap<Node, Document | null>();
    const entries = new WeakMap<Attr, AttributeEntry>();
    const tracked = new WeakMap<Element, Map<string, Attr>>();
    const active = new Map<DomCustomAttributeConstructor, DomCustomAttributeRegistry>();
    const attributeMaps = new WeakMap<NamedNodeMap, Element>();
    const observedRoots = new WeakSet<Node>();
    const localObservers = new WeakMap<Element, MutationObserver>();
    let constructingGlobal = false;
    let globalRegistry: Registry;
    function self(registry: DomCustomAttributeRegistry): RegistryInternals {
        const value = internals.get(registry);
        if (!value) throw new TypeError('Illegal invocation');
        return value;
    }
    function nodeDocument(node: Node): Document {
        return node.nodeType === 9 ? node as Document : node.ownerDocument!;
    }
    function setRegistry(node: Node, registry: DomCustomAttributeRegistry | null): void {
        registries.set(node, registry); registryDocuments.set(node, node.ownerDocument);
    }
    function globalOf(registry: DomCustomAttributeRegistry | null): DomCustomAttributeRegistry | null {
        return registry && !self(registry).scoped ? registry : null;
    }
    function exclusiveFragment(node: Node): boolean { return node.nodeType === 11 && !isShadow(node); }
    function registryOf(node: Node): DomCustomAttributeRegistry | null {
        if (node.nodeType === 9) return registries.get(node) ?? null;
        if (registries.has(node)) {
            const registry = registries.get(node)!;
            if (registryDocuments.get(node) === node.ownerDocument || (registry && self(registry).scoped)) {
                return registry;
            }
            const parent = node.parentNode;
            const adopted = globalOf(!isElement(node) || registry || !parent || exclusiveFragment(parent)
                ? registryOf(node.ownerDocument!) : registryOf(parent));
            setRegistry(node, adopted); return adopted;
        }
        let registry: DomCustomAttributeRegistry | null = null;
        if (isElement(node)) {
            const parent = node.parentNode;
            registry = parent && !exclusiveFragment(parent)
                ? registryOf(parent) : node.ownerDocument === document ? globalRegistry : null;
        } else if (isShadow(node)) registry = node.ownerDocument === document ? globalRegistry : null;
        if (registry) setRegistry(node, registry);
        return registry;
    }
    function lookup(registry: DomCustomAttributeRegistry | null,
        namespace: string | null, name: string): AttributeDefinition | undefined {
        return registry && namespace === null ? self(registry).byName.get(name) : undefined;
    }
    function registryOption(options: unknown, nullable: boolean): DomCustomAttributeRegistry | null | undefined {
        if (typeof options !== 'object' || options === null) return undefined;
        const registry = (options as AttributeOptions).customAttributeRegistry;
        if (registry === undefined || (nullable && registry === null)) return registry;
        if (registry === null || !internals.has(registry)) {
            throw new TypeError(`customAttributeRegistry must be a registry${nullable ? ' or null' : ''}`);
        }
        return registry;
    }
    function checkRegistry(registry: DomCustomAttributeRegistry | null | undefined, doc: Document): void {
        if (registry && !self(registry).scoped && registryOf(doc) !== registry) {
            throw domError('A global registry can only be used with its own document.', 'NotSupportedError');
        }
    }
    function invoke(attribute: Attr, name: Lifecycle, args: unknown[] = []): void {
        const definition = entries.get(attribute)?.definition;
        if (!definition) return;
        const callback = definition.callbacks[name];
        if (!callback && name === 'connectedMoveCallback') {
            invoke(attribute, 'disconnectedCallback'); invoke(attribute, 'connectedCallback'); return;
        }
        if (callback) safe(() => Reflect.apply(callback, attribute, args));
    }
    function connect(attribute: Attr, entry: AttributeEntry): void {
        if (entry.connected) return;
        entry.connected = true; invoke(attribute, 'connectedCallback');
    }
    function disconnect(attribute: Attr, entry: AttributeEntry): void {
        if (!entry.connected) return;
        entry.connected = false; invoke(attribute, 'disconnectedCallback');
    }
    function adopt(attribute: Attr, entry: AttributeEntry, doc: Document): void {
        const old = entry.document;
        if (old !== doc) { entry.document = doc; invoke(attribute, 'adoptedCallback', [old, doc]); }
    }
    function track(element: Element, attribute: Attr): void {
        let map = tracked.get(element);
        if (!map) tracked.set(element, map = new Map());
        map.set(attribute.localName, attribute);
        // Root observers suffice in observed trees. A local observer is needed
        // for detached upgraded elements; keep it in a WeakMap, not a global MO.
        if (observedRoots.has(element.getRootNode())) {
            localObservers.get(element)?.disconnect(); localObservers.delete(element);
        } else if (!localObservers.has(element)) {
            const local = new MutationObserver(processRecords);
            local.observe(element, { attributes: true, attributeOldValue: true });
            localObservers.set(element, local);
        }
    }
    function untrack(element: Element, attribute: Attr): void {
        const map = tracked.get(element);
        if (map?.get(attribute.localName) === attribute) map.delete(attribute.localName);
        if (map && !map.size) {
            tracked.delete(element);
            localObservers.get(element)?.disconnect(); localObservers.delete(element);
        }
    }
    function runConstructor(attribute: Attr, definition: AttributeDefinition,
        registry: DomCustomAttributeRegistry, check?: () => void): void {
        const C = definition.constructor;
        const previous = active.get(C);
        definition.stack.push(attribute); active.set(C, registry);
        try {
            if (new C() !== attribute) throw new TypeError('Constructor returned a different attribute.');
            check?.();
        } finally {
            if (previous) active.set(C, previous); else active.delete(C);
            definition.stack.pop();
        }
    }
    function construct(attribute: Attr, definition: AttributeDefinition, registry: DomCustomAttributeRegistry): void {
        const { ownerDocument, localName, namespaceURI, prefix } = attribute;
        const entry: AttributeEntry = { state: 'custom', definition, connected: false, document: ownerDocument };
        entries.set(attribute, entry);
        try {
            runConstructor(attribute, definition, registry, () => {
                if (attribute.ownerElement !== null || attribute.ownerDocument !== ownerDocument ||
                    attribute.localName !== localName || attribute.namespaceURI !== namespaceURI ||
                    attribute.prefix !== prefix || attribute.value !== '') {
                    throw domError('An attribute constructor must leave the Attr unattached and empty.', 'NotSupportedError');
                }
            });
        } catch (error) { entry.state = 'failed'; entry.definition = null; report(error); }
    }
    function upgrade(attribute: Attr, definition: AttributeDefinition,
        registry: DomCustomAttributeRegistry, value: string): void {
        if (entries.has(attribute) || !attribute.ownerElement) return;
        const entry: AttributeEntry = { state: 'precustomized', definition,
            connected: false, document: attribute.ownerElement.ownerDocument };
        entries.set(attribute, entry);
        try { runConstructor(attribute, definition, registry); }
        catch (error) { entry.state = 'failed'; entry.definition = null; report(error); return; }
        entry.state = 'custom';
        const element = attribute.ownerElement;
        // The constructor may have detached its attribute. Do not dereference null.
        if (!element) return;
        track(element, attribute);
        invoke(attribute, 'attributeChangedCallback', [null, value]);
        if (attribute.ownerElement === element && element.isConnected) connect(attribute, entry);
    }
    function tryUpgrade(attribute: Attr, value = attribute.value): void {
        const element = attribute.ownerElement;
        if (!element || !isHTML(element) || entries.has(attribute)) return;
        const registry = registryOf(element);
        const definition = lookup(registry, attribute.namespaceURI, attribute.localName);
        if (registry && definition) upgrade(attribute, definition, registry, value);
    }
    interface AttributeRecord {
        type: 'attributes'; target: Element; attributeName: string;
        attributeNamespace: string | null; oldValue: string | null;
    }
    type RecordLike = MutationRecord | AttributeRecord;
    class Batch {
        history = new Map<Element, Map<string, Array<{ index: number; oldValue: string | null }>>>();
        position = 0;
        constructor(records: readonly RecordLike[]) {
            records.forEach((record, index) => {
                if (record.type !== 'attributes' || record.attributeNamespace !== null ||
                    !record.attributeName || !isElement(record.target)) return;
                let byName = this.history.get(record.target);
                if (!byName) this.history.set(record.target, byName = new Map());
                let list = byName.get(record.attributeName);
                if (!list) byName.set(record.attributeName, list = []);
                list.push({ index, oldValue: record.oldValue });
            });
        }
        later(element: Element, name: string): Array<{ index: number; oldValue: string | null }> {
            return (this.history.get(element)?.get(name) ?? []).filter(item => item.index > this.position);
        }
        valueAfter(element: Element, name: string): string | null {
            const later = this.later(element, name);
            return later.length ? later[0]!.oldValue : element.getAttributeNS(null, name);
        }
        addedLater(element: Element, name: string): boolean {
            return this.later(element, name).some(item => item.oldValue === null);
        }
        tree(root: Node): void {
            // Also handles DocumentFragments and shadow roots, not only Elements.
            for (const element of elementsIn(root)) {
                const shadow = shadowOf(element);
                if (shadow && !observedRoots.has(shadow)) observeRoot(shadow);
                this.element(element);
            }
        }
        element(element: Element): void {
            if (!isHTML(element)) return;
            for (const attribute of Array.from(nativeAttributes.call(element) as NamedNodeMap)) {
                const name = attribute.localName;
                if (attribute.namespaceURI !== null || this.addedLater(element, name)) continue;
                const entry = entries.get(attribute);
                if (!entry) {
                    if (element.isConnected) tryUpgrade(attribute, this.valueAfter(element, name) ?? attribute.value);
                    continue;
                }
                if (entry.state !== 'custom') continue;
                if (tracked.get(element)?.get(name) !== attribute) {
                    track(element, attribute); adopt(attribute, entry, element.ownerDocument);
                    invoke(attribute, 'attributeChangedCallback', [null, this.valueAfter(element, name) ?? attribute.value]);
                } else { track(element, attribute); adopt(attribute, entry, element.ownerDocument); }
                if (attribute.ownerElement !== element) continue;
                if (element.isConnected) connect(attribute, entry); else disconnect(attribute, entry);
            }
        }
        attribute(element: Element, name: string, oldValue: string | null): void {
            if (!isHTML(element)) return;
            const previous = tracked.get(element)?.get(name);
            const current = element.getAttributeNodeNS(null, name);
            if (previous && previous === current) {
                invoke(previous, 'attributeChangedCallback', [oldValue, this.valueAfter(element, name)]); return;
            }
            if (previous) {
                untrack(element, previous);
                const entry = entries.get(previous)!;
                invoke(previous, 'attributeChangedCallback', [oldValue, null]);
                disconnect(previous, entry);
            }
            if (!current || this.addedLater(element, name)) return;
            const value = this.valueAfter(element, name);
            const entry = entries.get(current);
            if (!entry) { tryUpgrade(current, value ?? current.value); return; }
            if (entry.state !== 'custom') return;
            track(element, current); adopt(current, entry, element.ownerDocument);
            invoke(current, 'attributeChangedCallback', [null, value]);
            if (current.ownerElement === element && element.isConnected) connect(current, entry);
        }
        run(records: readonly RecordLike[]): void {
            records.forEach((record, index) => {
                this.position = index;
                if (record.type === 'childList') {
                    for (const node of record.addedNodes) this.tree(node);
                    for (const node of record.removedNodes) this.tree(node);
                } else if (record.type === 'attributes' && record.attributeNamespace === null &&
                    record.attributeName && isElement(record.target)) {
                    this.attribute(record.target, record.attributeName, record.oldValue);
                }
            });
        }
    }
    function processRecords(records: readonly RecordLike[]): void { new Batch(records).run(records); }
    const observer = new MutationObserver(processRecords);
    function observeRoot(root: Node): void {
        if (observedRoots.has(root)) return;
        observedRoots.add(root);
        observer.observe(root, { childList: true, subtree: true, attributes: true, attributeOldValue: true });
        if (root.nodeType === 9 || root.nodeType === 11 || isElement(root)) addRoot(root as Root);
    }
    function flush(): void {
        const records = observer.takeRecords();
        if (records.length) processRecords(records);
        // Detached local observers are intentionally not globally enumerable.
    }
    class Registry implements DomCustomAttributeRegistry {
        constructor() {
            internals.set(this, { scoped: !constructingGlobal, byName: new Map(),
                byConstructor: new Map(), running: false, pending: new Map(), documents: new Set() });
        }
        define(name: string, constructor: DomCustomAttributeConstructor): void {
            const state = self(this);
            if (typeof constructor !== 'function') throw new TypeError('constructor must be constructible');
            try { Reflect.construct(String, [], constructor); }
            catch { throw new TypeError('constructor must be constructible'); }
            name = String(name); assertAttributeName(name);
            if (state.byName.has(name) || state.byConstructor.has(constructor)) {
                throw domError('Name or constructor already registered.', 'NotSupportedError');
            }
            if (state.running) throw domError('Nested define() is not supported.', 'NotSupportedError');
            state.running = true;
            const callbacks: AttributeDefinition['callbacks'] = {};
            try {
                const prototype = constructor.prototype;
                if (!prototype || (typeof prototype !== 'object' && typeof prototype !== 'function')) {
                    throw new TypeError('constructor.prototype must be an object');
                }
                for (const name of callbackNames) {
                    const callback = prototype[name];
                    if (callback !== undefined && typeof callback !== 'function') {
                        throw new TypeError(`${name} must be a function`);
                    }
                    if (callback) callbacks[name] = callback;
                }
            } finally { state.running = false; }
            const definition: AttributeDefinition = { name, constructor, callbacks, stack: [] };
            state.byName.set(name, definition); state.byConstructor.set(constructor, definition);
            flush();
            for (const doc of new Set([document, ...state.documents])) {
                for (const element of elementsIn(doc)) {
                    const shadow = shadowOf(element);
                    if (shadow) observeRoot(shadow);
                    const attribute = element.getAttributeNodeNS(null, name);
                    if (attribute && isHTML(element) && registryOf(element) === this) {
                        upgrade(attribute, definition, this, attribute.value);
                    }
                }
            }
            const pending = state.pending.get(name);
            if (pending) { state.pending.delete(name); pending.resolve(constructor); }
        }
        get(name: string): DomCustomAttributeConstructor | undefined {
            return self(this).byName.get(String(name))?.constructor;
        }
        getName(constructor: DomCustomAttributeConstructor): string | null {
            if (typeof constructor !== 'function') throw new TypeError('constructor must be a function');
            return self(this).byConstructor.get(constructor)?.name ?? null;
        }
        whenDefined(name: string): Promise<DomCustomAttributeConstructor> {
            const state = self(this); name = String(name);
            if (!isValidCustomAttributeName(name)) {
                return Promise.reject(domError(`Invalid custom attribute name: ${name}`, 'SyntaxError'));
            }
            const definition = state.byName.get(name);
            if (definition) return Promise.resolve(definition.constructor);
            let pending = state.pending.get(name);
            if (!pending) {
                let resolve!: (constructor: DomCustomAttributeConstructor) => void;
                const promise = new Promise<DomCustomAttributeConstructor>(r => { resolve = r; });
                state.pending.set(name, pending = { promise, resolve });
            }
            return pending.promise;
        }
        upgrade(root: Node): void {
            self(this);
            if (!(root instanceof Node)) throw new TypeError('root must be a current-realm Node');
            flush();
            for (const element of elementsIn(root)) {
                if (registryOf(element) !== this) continue;
                for (const attribute of Array.from(nativeAttributes.call(element) as NamedNodeMap)) tryUpgrade(attribute);
            }
        }
        initialize(root: Node): void {
            const state = self(this);
            if (!(root instanceof Node)) throw new TypeError('root must be a current-realm Node');
            flush();
            const isDocument = root.nodeType === 9;
            if (!state.scoped && (isDocument || registryOf(nodeDocument(root)) !== this)) {
                throw domError('A global registry can only initialize its own document nodes.', 'NotSupportedError');
            }
            if ((isDocument || isShadow(root)) && !registryOf(root)) setRegistry(root, this);
            const doc = nodeDocument(root);
            if (state.scoped) state.documents.add(doc);
            observeRoot(doc); observeRoot(root);
            for (const element of lightElementsIn(root)) {
                if (!registryOf(element)) setRegistry(element, this);
                if (registryOf(element) !== this) continue;
                for (const attribute of Array.from(nativeAttributes.call(element) as NamedNodeMap)) tryUpgrade(attribute);
            }
        }
    }
    for (const key of ['define', 'get', 'getName', 'whenDefined', 'upgrade', 'initialize']) {
        Object.defineProperty(Registry.prototype, key, {
            ...Object.getOwnPropertyDescriptor(Registry.prototype, key), enumerable: true
        });
    }
    Object.defineProperty(Registry.prototype, Symbol.toStringTag,
        { value: 'CustomAttributeRegistry', configurable: true });
    constructingGlobal = true; globalRegistry = new Registry(); constructingGlobal = false;
    registries.set(document, globalRegistry);
    function Attribute(this: Attr): Attr {
        const C = new.target as unknown as DomCustomAttributeConstructor | undefined;
        if (!C || (C as unknown) === Attribute) throw new TypeError('Illegal Attr constructor');
        const registry = active.get(C) ?? globalRegistry;
        const definition = self(registry).byConstructor.get(C);
        if (!definition) throw new TypeError('Class is not a defined custom attribute.');
        const prototype = C.prototype ?? NativeAttr.prototype;
        const stack = definition.stack;
        if (!stack.length) {
            const attribute = nativeCreateAttribute.call(document, definition.name) as Attr;
            Object.setPrototypeOf(attribute, prototype);
            entries.set(attribute, { state: 'custom', definition, connected: false, document });
            return attribute;
        }
        const attribute = stack[stack.length - 1]!;
        if (attribute === ALREADY || typeof attribute === 'symbol') throw new TypeError('Attr already constructed');
        Object.setPrototypeOf(attribute, prototype); stack[stack.length - 1] = ALREADY;
        return attribute;
    }
    Object.defineProperty(Attribute, 'prototype', { value: NativeAttr.prototype, writable: false });
    Object.setPrototypeOf(Attribute, Object.getPrototypeOf(NativeAttr));
    Object.defineProperty(NativeAttr.prototype, 'constructor',
        { value: Attribute, writable: true, configurable: true });
    globals.Attr = Attribute; globals.CustomAttributeRegistry = Registry;
    Object.defineProperty(globalThis, 'customAttributes',
        { get: () => globalRegistry, enumerable: true, configurable: true });
    for (const prototype of [Element.prototype, ShadowRoot.prototype, Document.prototype]) {
        Object.defineProperty(prototype, 'customAttributeRegistry', {
            get(this: Node) { return registryOf(this); }, enumerable: true, configurable: true
        });
    }
    function create(doc: Document, attribute: Attr,
        registry: DomCustomAttributeRegistry | null | undefined): Attr {
        if (registry === undefined) registry = registryOf(doc);
        const definition = lookup(registry, attribute.namespaceURI, attribute.localName);
        if (registry && definition) construct(attribute, definition, registry);
        return attribute;
    }
    docProto.createAttribute = function(this: Document, name: string, options: unknown = {}): Attr {
        const registry = registryOption(options, true); checkRegistry(registry, this);
        return create(this, nativeCreateAttribute.call(this, name), registry);
    };
    docProto.createAttributeNS = function(this: Document, namespace: string | null,
        name: string, options: unknown = {}): Attr {
        const registry = registryOption(options, true); checkRegistry(registry, this);
        return create(this, nativeCreateAttributeNS.call(this, namespace, name), registry);
    };
    docProto.createElement = function(this: Document, name: string, options?: unknown): Element {
        const registry = registryOption(options, true); checkRegistry(registry, this);
        const element = nativeCreateElement.call(this, name, options) as Element;
        setRegistry(element, registry === undefined ? registryOf(this) : registry); return element;
    };
    docProto.createElementNS = function(this: Document, namespace: string | null,
        name: string, options?: unknown): Element {
        const registry = registryOption(options, true); checkRegistry(registry, this);
        const element = nativeCreateElementNS.call(this, namespace, name, options) as Element;
        setRegistry(element, registry === undefined ? registryOf(this) : registry); return element;
    };
    docProto.importNode = function(this: Document, node: Node,
        options: boolean | { deep?: boolean; customAttributeRegistry?: DomCustomAttributeRegistry } = false): Node {
        const registry = registryOption(options, false); checkRegistry(registry, this);
        // Do not pass an experimental dictionary to a legacy boolean parameter:
        // an object would accidentally make shallow imports deep.
        const deep = typeof options === 'boolean' ? options : Boolean(options.deep);
        const copy = nativeImportNode.call(this, node, deep) as Node;
        const fallback = registry ?? registryOf(this);
        const global = globalOf(registryOf(this));
        const sources = [...lightElementsIn(node)];
        [...lightElementsIn(copy)].forEach((element, i) => {
            const chosen = (sources[i] && registryOf(sources[i]!)) || fallback;
            setRegistry(element, chosen && !self(chosen).scoped ? global : chosen);
        });
        return copy;
    };
    elProto.attachShadow = function(this: Element, init: ShadowRootInit & AttributeOptions): ShadowRoot {
        const registry = registryOption(init, true); checkRegistry(registry, this.ownerDocument);
        const shadow = nativeAttachShadow.call(this, init) as ShadowRoot;
        setRegistry(shadow, registry === undefined ? registryOf(this.ownerDocument) : registry);
        if (shadow.mode === 'closed') engine.closedShadows.set(this, shadow);
        observeRoot(shadow); return shadow;
    };
    for (const prototype of [Element.prototype, Document.prototype, DocumentFragment.prototype]) {
        const dynamic = prototype as unknown as Dynamic;
        const native = dynamic.moveBefore;
        if (typeof native !== 'function') continue;
        dynamic.moveBefore = function(this: Node, node: Node, child: Node | null): unknown {
            const connectedBefore = node.isConnected;
            const oldDocument = nodeDocument(node);
            const result = native.call(this, node, child);
            if (connectedBefore && node.isConnected && oldDocument === nodeDocument(node)) {
                for (const element of elementsIn(node)) {
                    for (const attribute of Array.from(nativeAttributes.call(element) as NamedNodeMap)) {
                        const entry = entries.get(attribute);
                        if (entry?.state === 'custom' && entry.connected) invoke(attribute, 'connectedMoveCallback');
                    }
                }
            }
            return result;
        };
    }
    function checkAttachable(element: Element, attribute: Attr): void {
        if (entries.get(attribute)?.definition && !isHTML(element)) {
            throw domError('Custom attributes are supported only on HTML elements.', 'NotSupportedError');
        }
    }
    function attached(element: Element, attribute: Attr, old: Attr | null): void {
        if (old === attribute || tracked.has(element) || observedRoots.has(element.getRootNode())) return;
        processRecords([{ type: 'attributes', target: element, attributeName: attribute.localName,
            attributeNamespace: attribute.namespaceURI, oldValue: old?.value ?? null }]);
    }
    Object.defineProperty(Element.prototype, 'attributes', {
        ...attributeDescriptor,
        get(this: Element): NamedNodeMap {
            const map = nativeAttributes.call(this) as NamedNodeMap;
            attributeMaps.set(map, this); return map;
        }
    });
    for (const name of ['setAttributeNode', 'setAttributeNodeNS']) {
        const native = elProto[name];
        elProto[name] = function(this: Element, attribute: Attr): Attr | null {
            checkAttachable(this, attribute);
            const old = native.call(this, attribute) as Attr | null;
            attached(this, attribute, old); return old;
        };
    }
    const mapProto = NamedNodeMap.prototype as unknown as Dynamic;
    for (const name of ['setNamedItem', 'setNamedItemNS']) {
        const native = mapProto[name];
        mapProto[name] = function(this: NamedNodeMap, attribute: Attr): Attr | null {
            const element = attributeMaps.get(this);
            if (element) checkAttachable(element, attribute);
            const old = native.call(this, attribute) as Attr | null;
            if (element) attached(element, attribute, old); return old;
        };
    }
    // Publish before initial observation, so addRoot can find this runtime.
    const runtime: PolyfillRuntime = { registry: globalRegistry, Registry, observeRoot, flush };
    polyfillState.runtime = runtime;
    observeRoot(document);
    for (const element of elementsIn(document)) {
        const shadow = shadowOf(element);
        if (shadow) observeRoot(shadow);
    }
    return runtime;
}

/* ------------------------------------------------------------------------- *
 * Bidirectional adapters and lifecycle-aware merge (not Object.assign).
 * ------------------------------------------------------------------------- */
interface BridgeCache {
    byRegistry: WeakMap<DomCustomAttributeRegistry, Map<string,
        { mixin: Mixin; constructor: DomCustomAttributeConstructor }>>;
    fromAttribute: WeakMap<DomCustomAttributeRegistry, Map<string,
        { constructor: DomCustomAttributeConstructor; mixin: Mixin }>>;
}
const bridges = shared<BridgeCache>('dom.ts@mixins2.bridges', () =>
    ({ byRegistry: new WeakMap(), fromAttribute: new WeakMap() }));
export function mixinToCustomAttribute(attributeName: string, mixin: Mixin,
    options: Pick<BridgeOptions, 'registry'> = {}): DomCustomAttributeConstructor {
    assertAttributeName(attributeName);
    const registry = options.registry ?? getCustomAttributes();
    let cache = bridges.byRegistry.get(registry);
    if (!cache) bridges.byRegistry.set(registry, cache = new Map());
    const previous = cache.get(attributeName);
    if (previous) {
        if (previous.mixin !== mixin) throw new Error(`Attribute bridge conflict: ${attributeName}`);
        return previous.constructor;
    }
    if (registry.get(attributeName)) throw new Error(`Attribute already defined: ${attributeName}`);
    const Base = getCustomAttributeBase();
    // An Attr loses ownerElement on removal. Remember the last owner weakly so
    // removal callbacks can release the correct element's lease.
    const owners = new WeakMap<Attr, WeakRef<Element>>();
    function owner(attribute: Attr): Element | undefined {
        const previousOwner = owners.get(attribute)?.deref();
        const current = attribute.ownerElement;
        if (current) {
            // The SAME Attr can move between elements within one mutation batch.
            // Release its former owner's lease before acquiring its new owner.
            if (previousOwner && previousOwner !== current) {
                release(previousOwner, mixin, attribute);
            }
            owners.set(attribute, new WeakRef(current));
            return current;
        }
        return previousOwner;
    }
    class MixinAttribute extends Base {
        connectedCallback(): void {
            const element = owner(this);
            if (element && this.ownerElement === element) acquire(element, mixin, this);
        }
        disconnectedCallback(): void {
            const element = owner(this);
            if (!element) return;
            if (!this.ownerElement) release(element, mixin, this);
            else {
                const binding = engine.bindings.get(element)?.get(mixin);
                if (binding) reconcileBinding(element, mixin, binding);
            }
        }
        attributeChangedCallback(oldValue: string | null, newValue: string | null): void {
            const element = owner(this);
            if (!element) return;
            if (newValue !== null && this.ownerElement === element) acquire(element, mixin, this);
            callMixin(element, mixin, 'attributeChangedCallback', this, oldValue, newValue);
            if (newValue === null) release(element, mixin, this);
        }
        adoptedCallback(_oldDocument: Document, _newDocument: Document): void {
            const element = owner(this);
            const binding = element && engine.bindings.get(element)?.get(mixin);
            if (element && binding) reconcileBinding(element, mixin, binding);
        }
        connectedMoveCallback(): void {
            const element = owner(this);
            if (element) callMixin(element, mixin, 'connectedMoveCallback', this);
        }
    }
    registry.define(attributeName, MixinAttribute);
    cache.set(attributeName, { mixin, constructor: MixinAttribute });
    return MixinAttribute;
}
export function registerCrossMixin(name: string, mixin: Mixin,
    options: BridgeOptions = {}): { mixin: Mixin; attribute: DomCustomAttributeConstructor } {
    const attributeName = options.attributeName ?? name;
    // Validate before mutating the name registry.
    assertAttributeName(attributeName);
    const registry = options.registry ?? getCustomAttributes();
    const cached = bridges.byRegistry.get(registry)?.get(attributeName);
    if (registry.get(attributeName) && (!cached || cached.mixin !== mixin)) {
        throw new Error(`Attribute already defined: ${attributeName}`);
    }
    registerMixin(name, mixin);
    return { mixin, attribute: mixinToCustomAttribute(attributeName, mixin, { registry }) };
}
export interface AttributeMixinOptions extends BridgeOptions {
    value?: string | ((element: Element) => string);
}
export function customAttributeToMixin(name: string, constructor: DomCustomAttributeConstructor,
    options: AttributeMixinOptions = {}): Mixin {
    const attributeName = options.attributeName ?? name;
    assertAttributeName(attributeName);
    const registry = options.registry ?? getCustomAttributes();
    let cache = bridges.fromAttribute.get(registry);
    if (!cache) bridges.fromAttribute.set(registry, cache = new Map());
    const cached = cache.get(attributeName) as any;
    if (cached) {
        if (cached.constructor !== constructor) throw new Error(`Attribute adapter conflict: ${attributeName}`);
        if (mixinNamespace.get((cached as any)?.mixin) !== name) throw new Error('Adapter already has another mixin name.');
        return (cached as any)?.mixin;
    }
    const existing = registry.get(attributeName);
    if (existing && existing !== constructor) throw new Error(`Attribute already defined: ${attributeName}`);
    const mixin: Mixin = {
        connect(ref): Cleanup | undefined {
            const element = ref.deref();
            if (!element || !isHTML(element)) return;
            const selectedRegistry = (element as unknown as
                { customAttributeRegistry?: DomCustomAttributeRegistry | null }).customAttributeRegistry;
            if (selectedRegistry !== registry) {
                throw new Error(`The element's registry does not own ${attributeName}; initialize its scope first.`);
            }
            registry.upgrade(element);
            // Preserve an author-owned existing attribute and its value.
            if (element.hasAttributeNS(null, attributeName)) return;
            const attribute = createCustomAttribute(attributeName,
                { document: element.ownerDocument, registry });
            attribute.value = typeof options.value === 'function'
                ? options.value(element) : options.value ?? '';
            element.setAttributeNode(attribute);
            // Only remove the exact Attr created by this connection. Do not
            // remove a replacement node or an attribute supplied by the author.
            return () => {
                if (element.getAttributeNodeNS(null, attributeName) === attribute) {
                    element.removeAttributeNode(attribute);
                }
            };
        }
    };
    // Validate the mixin registration BEFORE defining an irreversible attribute.
    const named = mixinRegistry.get(name.trim());
    if (named && named !== mixin) throw new Error(`Mixin name already registered: ${name}`);
    if (!name.trim() || /\s/.test(name.trim())) throw new TypeError('Invalid mixin name.');
    if (!existing) registry.define(attributeName, constructor);
    registerMixin(name, mixin);
    cache.set(attributeName, { constructor, mixin });
    return mixin;
}
export function mergeMixins(name: string | null, ...input: readonly Mixin[]): Mixin {
    const parts = [...new Set(input)];
    for (const part of parts) {
        if (!part || (typeof part !== 'object' && typeof part !== 'function')) {
            throw new TypeError('mergeMixins expects mixin objects.');
        }
    }
    const leases = new WeakMap<Element, object>();
    const merged: Mixin = {
        connect(ref): Cleanup | undefined {
            const element = ref.deref();
            if (!element) return;
            const lease = {};
            leases.set(element, lease);
            for (const part of parts) acquire(element, part, lease);
            // Reverse teardown order, exactly once per connection. Shared parts
            // stay active if selected by another merge/attribute/data token.
            return () => {
                for (let i = parts.length - 1; i >= 0; i--) release(element, parts[i]!, lease);
                if (leases.get(element) === lease) leases.delete(element);
            };
        },
        attributeChangedCallback(ref, _self, related, oldValue, newValue): void {
            const element = ref.deref();
            if (!element) return;
            for (const part of parts) {
                callMixin(element, part, 'attributeChangedCallback', related.attribute, oldValue, newValue);
            }
        },
        connectedMoveCallback(ref, _self, related): void {
            const element = ref.deref();
            if (!element) return;
            for (const part of parts) callMixin(element, part, 'connectedMoveCallback', related.attribute);
        }
        // Adoption is NOT forwarded here: each constituent binding reconciles
        // its own document. Forwarding would deliver duplicate adopted calls.
    };
    if (name) registerMixin(name, merged);
    return merged;
}
export function flushMixins(): void {
    if (!hasDOM()) return;
    polyfillState.runtime?.flush();
    for (const { observer } of engine.watches.values()) handleRootRecords(observer.takeRecords());
    drainPending();
    // Reflect changes made by lifecycle code back into mixin selection.
    for (const root of roots) for (const element of elementsIn(root)) updateAllMixins(element);
    polyfillState.runtime?.flush();
    drainPending();
}
export async function settleMixins(): Promise<void> {
    // Also gives external/native registries and detached local observers a turn.
    for (let i = 0; i < 4; i++) { await Promise.resolve(); flushMixins(); }
}

// Browser auto-install preserves the old automatic addRoot(document) behavior.
// Core globals are guarded; external dependency SSR behavior is not controlled.
if (hasDOM()) { apply(); addRoot(document); }

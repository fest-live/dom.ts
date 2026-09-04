import { $avoidTrigger as j, camelToKebab as xe, cvt_cs_to_os as de, hasValue as O, isArrayOrIterable as je, isVal as Oe, isValueUnit as We, kebabToCamel as Se, normalizeGridLayout as He, normalizePrimitive as ae, resolveLocalPointToGridCell as Re } from "@fest-lib/core";
import { appear as Fe, decorHide as Be, decorShow as _e, disappear as Ie, observeStyleTree as $e, setStyleProperty as T } from "@fest-lib/style-lib";
export * from "@fest-lib/style-lib";
var Ze = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), le = globalThis[Ze] ??= /* @__PURE__ */ new Set();
[
  {
    name: "--screen-width",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--screen-height",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--visual-width",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--visual-height",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--clip-ampl",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--clip-freq",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--avail-width",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--avail-height",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--pixel-ratio",
    syntax: "<number>",
    inherits: !0,
    initialValue: "1"
  },
  {
    name: "--percent",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--percent-x",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--percent-y",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--scroll-left",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--scroll-top",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--drag-x",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--drag-y",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--resize-x",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--resize-y",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--shift-x",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--shift-y",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--cs-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cs-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cs-p-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cs-p-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--os-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--os-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--rv-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--rv-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cell-x",
    syntax: "<integer>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cell-y",
    syntax: "<integer>",
    inherits: !1,
    initialValue: "0"
  }
].forEach((e) => {
  if (typeof CSS > "u" || typeof CSS?.registerProperty != "function") return;
  const t = String(e?.name || "").trim();
  if (!(!t || le.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      le.add(t);
    }
});
var Tt = () => {
}, Nt = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, Vt = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, qe = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), fe = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(qe()), 0), De = (e) => e?.offsetParent ?? e?.host, Pt = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = De(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && t.push(n);
  }
  return t;
}, Lt = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, Ke = () => {
  const e = {
    canceled: !1,
    rAFs: /* @__PURE__ */ new Set(),
    last: null,
    cancel() {
      return this.canceled = !0, cancelAnimationFrame(this.last), this;
    },
    shedule(t) {
      return this.rAFs.add(t), this;
    }
  };
  return (async () => {
    for (; !e?.canceled; )
      await Promise.all((e?.rAFs?.values?.() ?? [])?.map?.((t) => Promise.try(t)?.catch?.(console.warn.bind(console)))), e.rAFs?.clear?.(), typeof requestAnimationFrame < "u" ? await new Promise((t) => {
        e.last = requestAnimationFrame(t);
      }) : await new Promise((t) => {
        setTimeout(t, 16);
      });
  })(), e;
}, jt = (e = Ke()) => (t) => e.shedule(t), Ot = typeof document < "u" ? document?.documentElement : null, Wt = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, r]) => {
      const i = e.getAttribute(n);
      r == null ? e.removeAttribute(n) : r != i && e.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, Ht = (e, t = {}) => Array.from(Object.entries(t)).map(([n, r]) => {
  r == null ? e.removeAttribute(n) : e.setAttribute(n, r ?? e.getAttribute(n));
}), Xe = /* @__PURE__ */ new Map(), Rt = (e, t = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return fe(async () => {
    if (!(!e || typeof e != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((i) => setTimeout(i, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => fe(i, t)), new Promise((i) => setTimeout(i, t))]);
      r.cancel = () => {
      };
    }
  }, t), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    Xe.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var F = /* @__PURE__ */ Symbol("@border-box-width"), B = /* @__PURE__ */ Symbol("@border-box-height"), _ = /* @__PURE__ */ Symbol("@content-box-width"), I = /* @__PURE__ */ Symbol("@content-box-height"), he = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), Ft = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !pe.has(e)) {
    e[_] = e.clientWidth, e[I] = e.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const o = i.contentBoxSize[0];
        o && (e[_] = Math.min(o.inlineSize, e.clientWidth), e[I] = Math.min(o.blockSize, e.clientHeight), t?.(e));
      }
    });
    pe.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, Bt = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !he.has(e)) {
    e[F] = e.offsetWidth, e[B] = e.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const o = i.borderBoxSize[0];
        o && (e[F] = Math.min(o.inlineSize, e.offsetWidth), e[B] = Math.min(o.blockSize, e.offsetHeight), t?.(e));
      }
    });
    he.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, _t = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), It = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, $t = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, Zt = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, qt = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, Dt = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", Kt = `^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, Xt = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), r, i = ""; e && (r = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, Yt = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, Ut = (e, t) => {
  const n = typeof t == "string" ? t.trim() : "";
  if (!n || !e) return e ?? null;
  try {
    return e.querySelector(n) ?? (e.matches(n) ? e : null);
  } catch {
    return null;
  }
}, D = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, Ee = {};
function p(e, t, n, r = Ee) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function me(e, t, n, r = Ee) {
  e?.removeEventListener?.(t, n, r);
}
var Jt = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? p(e, n, ...r) : p(e, n, r))), Gt = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([r, i]) => ((je(i) ? [...i] : i) ?? [])?.map?.((o) => p(e, r, o)));
  }
}, Qt = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? me(e, n, ...r) : me(e, n, r))), en = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, tn = (e, t, n) => {
  if (t == null || !(t instanceof Node) && t?.element == null) return !1;
  if (e == t || (e?.element ?? e) == (t?.element ?? t)) return !0;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const r = n.composedPath(), i = e?.element ?? e, o = t?.element ?? t;
    if (r.includes(i) && r.includes(o)) {
      const s = r.indexOf(i), a = r.indexOf(o);
      if (a >= 0 && s >= 0 && a < s) return !0;
    }
  }
  return !!(e?.contains?.(t?.element ?? t) || e?.getRootNode({ composed: !0 })?.host == (t?.element ?? t));
}, U = (e, t, n) => {
  const r = typeof t == "string" ? t.trim() : "";
  if (!r) return e ?? null;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const a = n.composedPath();
    for (const l of a) if (l instanceof HTMLElement || l instanceof Element) try {
      if (l.matches?.(r)) return l;
    } catch {
    }
  }
  let i = null, o = null, s = null;
  try {
    i = e?.matches?.(r) ? e : null;
    const a = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host;
    o = a?.matches?.(r) ? a : null, s = e?.closest?.(r) ?? i?.closest?.(r) ?? o?.closest?.(r) ?? null;
  } catch {
  }
  return i ?? s ?? o;
}, nn = (e, t) => !!U(e, t), rn = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === e || D(r, e), o = e.matches(":hover");
  if (!i && !o && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!U(e, t);
      {
        const s = i ? r : e.querySelector(":hover") || e, a = !!U(s, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || a;
      }
    } else if (t instanceof HTMLElement)
      return n === "parent" ? D(e, t) || !1 : D(t, e) || !1;
  }
  return !0;
}, on = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, Ye = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Ue = globalThis[Ye] ??= /* @__PURE__ */ new WeakMap(), Je = (e = document.documentElement) => Ue.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), an = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), sn = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : Je(e)) || 1, J = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, A = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, cn = (e, t = null) => {
  const n = J(e) || 1, r = e?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, o = t ?? (A(e) || 0), s = typeof window < "u" ? window.visualViewport : null, a = [((s?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((s?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [l, h] = de([i.left, i.top], a, o), [d, m] = de([i.right, i.bottom], a, o), [f, u] = o == 0 || o == 3 ? [l, d] : [d, l], [c, g] = o == 0 || o == 1 ? [h, m] : [m, h], [w, Le] = o % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: f,
    top: c,
    right: u,
    bottom: g,
    width: w,
    height: Le
  };
}, un = (e, t = null) => (t ?? A(e)) % 2 ? e[B] ?? e?.clientHeight : e[F] ?? e?.clientWidth, dn = (e, t = null) => (t ?? A(e)) % 2 ? e[F] ?? e?.clientWidth : e[B] ?? e?.clientHeight, ln = (e, t = null) => (t ?? A(e)) % 2 ? e[I] ?? e?.clientHeight : e[_] ?? e?.clientWidth, fn = (e, t = null) => (t ?? A(e)) % 2 ? e[_] ?? e?.clientWidth : e[I] ?? e?.clientHeight, Ge = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), S = 80, G = 0, ge = !1, ve = !1, Me = () => {
  try {
    return globalThis.navigator?.virtualKeyboard ?? null;
  } catch {
    return null;
  }
}, Q = () => {
  const e = Me();
  if (e)
    try {
      e.overlaysContent !== !0 && (e.overlaysContent = !0);
    } catch {
    }
}, se = (e) => {
  if (!e || !(e instanceof HTMLElement)) return !1;
  if (e.isContentEditable) return !0;
  const t = e.tagName;
  if (t === "TEXTAREA" || t === "SELECT") return !0;
  if (t !== "INPUT") return !1;
  const n = String(e.type || "text").toLowerCase();
  return ![
    "button",
    "checkbox",
    "radio",
    "file",
    "submit",
    "reset",
    "image",
    "range",
    "color",
    "hidden"
  ].includes(n);
}, be = "", x = 0, b = 0, ye = (e, t, n = 0, r = 0) => {
  const i = Math.max(0, Number(e) || 0), o = Math.max(0, Number(t) || 0), s = Number(n) || 0, a = Number(r) || 0;
  return {
    left: s,
    top: a,
    right: s + i,
    bottom: a + o,
    width: i,
    height: o
  };
}, hn = () => {
  if (typeof window > "u") return ye(0, 0);
  const e = typeof document < "u" ? document.documentElement : null;
  return ye(Number(e?.clientWidth) || Number(window.innerWidth) || 0, Number(e?.clientHeight) || Number(window.innerHeight) || 0);
}, ke = () => {
  if (typeof window > "u") return {
    width: 0,
    height: 0,
    keyboard: 0
  };
  const e = window.visualViewport, t = Number(window.innerWidth) || 0, n = Number(window.innerHeight) || 0, r = Number(e?.width) || 0, i = Number(e?.height) || 0, o = Number(e?.offsetTop) || 0, s = Number(Me()?.boundingBox?.height) || 0, a = n > 0 && i > 0 ? n - i - o : 0, l = G;
  let h = l >= S ? l : s >= S ? s : a >= S ? a : 0;
  const d = Math.max(t, r), m = Math.max(n, i + o, h > 0 ? i + h : 0), f = typeof matchMedia < "u" && matchMedia("(orientation: landscape)")?.matches ? "l" : "p";
  f !== be && (be = f, x = 0, b = 0);
  const u = b > 0 && b - m >= S;
  if (h < S && u) {
    const c = Math.max(0, b - m, b - (i + o));
    c >= S && (h = c);
  }
  return h > 0 || se(document.activeElement) || u ? (x = Math.max(d, x), b = Math.max(m, b)) : (x = d, b = m), {
    width: x || d,
    height: b || m,
    keyboard: h
  };
}, we = () => {
  typeof window > "u" || ke().keyboard <= 0 && !se(document.activeElement) || (window.scrollY || document.documentElement.scrollTop || document.body?.scrollTop) && window.scrollTo(0, 0);
}, Ae = () => {
  Q();
  const e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, n = ke(), r = {
    "--vv-width": `${t?.width ?? (typeof window < "u" ? window.innerWidth : 0)}px`,
    "--vv-height": `${t?.height ?? (typeof window < "u" ? window.innerHeight : 0)}px`,
    "--vv-offset-left": `${t?.offsetLeft ?? 0}px`,
    "--vv-offset-top": `${t?.offsetTop ?? 0}px`,
    "--vv-scale": String(t?.scale ?? 1),
    "--lv-width": `${n.width}px`,
    "--lv-height": `${n.height}px`,
    "--keyboard-overlay-height": `${n.keyboard}px`,
    "--virtual-keyboard-height": `${n.keyboard}px`
  };
  if (typeof document < "u" && document.documentElement.toggleAttribute("data-vk-open", n.keyboard > 0), typeof screen < "u") {
    const i = screen?.availWidth + "px", o = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? o : i,
      "--avail-height": e ? i : o,
      "--view-height": `${n.height || Math.min(screen?.availHeight, window?.innerHeight) || 0}px`,
      "--pixel-ratio": String(devicePixelRatio || 1),
      ...r
    };
  }
  return {
    "--screen-width": "0px",
    "--screen-height": "0px",
    "--avail-width": "0px",
    "--avail-height": "0px",
    "--view-height": `${n.height}px`,
    "--pixel-ratio": "1",
    ...r
  };
}, ee = Ae(), pn = [[":root, :host, :scope", ee]], Qe = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, te = (e) => {
  const t = document.documentElement;
  Object.assign(ee, Ae()), Object.entries(ee).forEach(([n, r]) => {
    const i = t?.style?.getPropertyValue(n);
    (!i || i != r) && t?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, et = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, H = { passive: !0 }, ne = () => {
  if (ge || typeof globalThis > "u") return;
  const e = globalThis.Capacitor, t = e?.Plugins?.Keyboard;
  if (!t?.addListener || typeof e.isNativePlatform == "function" && !e.isNativePlatform()) return;
  ge = !0;
  try {
    t.setScroll?.({ isDisabled: !0 });
  } catch {
  }
  try {
    t.setResizeMode?.({ mode: "none" });
  } catch {
  }
  const n = (i) => {
    const o = Number(i?.keyboardHeight) || 0;
    o > 0 && (G = o), te();
  }, r = () => {
    G = 0, te();
  };
  t.addListener("keyboardWillShow", n), t.addListener("keyboardDidShow", n), t.addListener("keyboardWillHide", r), t.addListener("keyboardDidHide", r);
}, mn = () => {
  ve || typeof window > "u" || (ve = !0, ne(), ze(() => {
  }));
}, ze = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      te(), e(), t = !1;
    }), t = !0);
  }, r = [];
  return ne(), r.push(p(navigator?.virtualKeyboard, "geometrychange", n, H)), r.push(p(window?.visualViewport, "scroll", () => {
    we(), n();
  }, H)), r.push(p(window?.visualViewport, "resize", n, H)), r.push(p(screen?.orientation, "change", n)), r.push(p(window, "resize", n)), r.push(p(document?.documentElement, "fullscreenchange", n)), r.push(p(document, "DOMContentLoaded", n)), r.push(p(matchMedia("(orientation: portrait)"), "change", n)), r.push(p(matchMedia("(orientation: landscape)"), "change", n)), r.push(p(document, "focusin", () => {
    ne(), Q(), se(document.activeElement) && (x = Math.max(x, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0), b = Math.max(b, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0)), we(), n();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(document, "focusout", n, H)), Q(), n(), Ge(() => n(), 100), () => r.forEach((i) => i());
}, gn = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), ze(() => {
      const t = Qe?.[et()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
}, k = new OffscreenCanvas(1, 1).getContext("2d"), Ce = (e, t) => {
  const n = getComputedStyle(e, "");
  if (t && n) {
    const r = n.getPropertyValue("font-weight") || "normal", i = n.getPropertyValue("font-size") || "16px", o = n.getPropertyValue("font-family") || "Times New Roman", s = n.getPropertyValue("font-stretch") || "normal";
    try {
      t.fontStretch = s.includes("%") ? "normal" : s;
    } catch {
    }
    try {
      t.letterSpacing = n.getPropertyValue("letter-spacing") || "normal";
    } catch {
    }
    try {
      t.fontKerning = n.getPropertyValue("font-kerning") || "auto";
    } catch {
    }
    try {
      t.fontVariantCaps = n.getPropertyValue("font-variant-caps") || "normal";
    } catch {
    }
    try {
      t.font = `${r} ${i} ${o}`;
    } catch {
    }
  }
}, tt = (e, t) => {
  if (k) {
    Ce(t, k);
    try {
      return k.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, vn = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return tt(t, e);
}, nt = (e, t) => {
  const n = e?.value || "";
  if (k) {
    Ce(e, k);
    let r = 0;
    for (let i = 0; i < n.length; i++) {
      if (r = k.measureText(n.slice(0, i))?.width, r == null) return n.length;
      if (r != null && r >= t[0]) return Math.max(i - 1, 0);
    }
  }
  return n.length;
}, bn = (e, t) => {
  const n = e.getBoundingClientRect(), r = [t[0] - n.left / J(), t[1] - n.top / J()];
  return nt(e, r);
}, rt = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = He(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, yn = (e, t, n, r = "floor") => {
  if (!e) return [0, 0];
  const i = e.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const o = rt(e, n?.layout), s = A(e), a = globalThis.getComputedStyle?.(e), l = parseFloat(a?.paddingLeft) || 0, h = parseFloat(a?.paddingTop) || 0, d = parseFloat(a?.paddingRight) || 0, m = parseFloat(a?.paddingBottom) || 0, f = Math.max(1, (i.width || e.clientWidth || 1) - l - d), u = Math.max(1, (i.height || e.clientHeight || 1) - h - m), c = [(t?.[0] || 0) - i.left - l, (t?.[1] || 0) - i.top - h];
  return Re(c, [f, u], o, s, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, wn = (e) => Fe(e, _e), xn = (e) => Ie(e, Be), Sn = (e = 100, t = 0.05, n = 8) => {
  const r = [];
  for (let a = 0; a < e; a++) r.push(a / e);
  const i = (a) => `calc(${a}rad * pi * 2)`, o = (a) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(a)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, s = (a) => [`calc(calc(0.5 + calc(cos(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((a) => s(a).join(" ")).join(", ")})`
  };
}, it = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), z = globalThis[it] ??= /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), C = globalThis[ot] ??= /* @__PURE__ */ new WeakMap(), W = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), q = (e, t = "*") => typeof e != "string" ? t : e.trim() || t, N = (e, t) => {
  if (!e || typeof e.querySelectorAll != "function") return [];
  const n = q(t, "");
  if (!n) return [];
  try {
    return Array.from(e.querySelectorAll(n) || []);
  } catch {
    return [];
  }
}, re = (e, t) => {
  if (!e || typeof e.matches != "function") return !1;
  const n = q(t, "");
  if (!n) return !1;
  try {
    return !!e.matches(n);
  } catch {
    return !1;
  }
}, En = (e, t) => {
  if (!C.has(e = W(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.contentBoxSize) {
        const s = o.contentBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, r), C.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "content-box" });
  }
  return C.get(e)?.push?.(t), { disconnect: () => C.get(e)?.splice?.(C.get(e)?.indexOf(t) || -1, 1) };
}, Mn = (e, t) => {
  if (!z.has(e = W(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.borderBoxSize) {
        const s = o.borderBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, r), z.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "border-box" });
  }
  return z.get(e)?.push?.(t), { disconnect: () => z.get(e)?.splice?.(z.get(e)?.indexOf(t) || -1, 1) };
}, kn = (e, t, n) => {
  if (typeof e?.selector == "string") return Te(e, e?.selector, t, n);
  const r = new Set((t.split(",") || [t]).map((o) => o.trim())), i = new MutationObserver((o, s) => {
    for (const a of o) a.attributeName && r.has(a.attributeName) && n(a, s);
  });
  return (e?.element ?? e) instanceof Node && i.observe(e = W(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((o) => n({
    target: e,
    type: "attributes",
    attributeName: o,
    oldValue: e?.getAttribute?.(o)
  }, i)), i;
}, Te = (e, t, n, r) => {
  const i = q(t), o = new Set([...n.split(",") || [n]].map((a) => a.trim())), s = new MutationObserver((a, l) => {
    for (const h of a) if (h.type == "childList") {
      const d = Array.from(h.addedNodes) || [], m = Array.from(h.removedNodes) || [];
      d.push(...Array.from(h.addedNodes || []).flatMap((f) => N(f, i))), m.push(...Array.from(h.removedNodes || []).flatMap((f) => N(f, i))), [...new Set(d)].filter((f) => re(f, i))?.map?.((f) => {
        o.forEach((u) => {
          r({
            target: f,
            type: "attributes",
            attributeName: u,
            oldValue: f?.getAttribute?.(u)
          }, l);
        });
      });
    } else re(h.target, i) && h.attributeName && o.has(h.attributeName) && r(h, l);
  });
  return s.observe(e = W(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...o],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), N(e, i).map((a) => o.forEach((l) => r({
    target: a,
    type: "attributes",
    attributeName: l,
    oldValue: a?.getAttribute?.(l)
  }, s))), s;
}, at = (e, t = "*", n = (r, i) => {
}) => {
  const r = q(t), i = (u) => {
    const c = Array.from(u || []) || [];
    return c.push(...Array.from(u || []).flatMap((g) => N(g, r))), [...Array.from(new Set(c).values())].filter((g) => re(g, r));
  };
  let o = null;
  const s = (u) => {
    const c = o?.deref?.(), g = i(u.addedNodes), w = i(u.removedNodes);
    (g.length > 0 || w.length > 0) && n?.({
      type: u.type,
      target: u.target,
      attributeName: u.attributeName,
      attributeNamespace: u.attributeNamespace,
      nextSibling: u.nextSibling,
      oldValue: u.oldValue,
      previousSibling: u.previousSibling,
      addedNodes: g,
      removedNodes: w
    }, c);
  }, a = (u) => {
    s({
      addedNodes: [u?.target].filter((c) => !!c),
      removedNodes: [u?.relatedTarget].filter((c) => !!c),
      type: "childList",
      target: u?.currentTarget
    });
  }, l = (u) => {
    s({
      addedNodes: [u?.relatedTarget].filter((c) => !!c),
      removedNodes: [u?.target].filter((c) => !!c),
      type: "childList",
      target: u?.currentTarget
    });
  }, h = (u) => {
    s({
      addedNodes: [u?.target].filter((c) => !!c),
      removedNodes: [u?.relatedTarget || document?.activeElement].filter((c) => !!c),
      type: "childList",
      target: u?.currentTarget
    });
  }, d = {
    passive: !0,
    capture: !1
  };
  if (r?.includes?.(":hover") && r?.includes?.(":active"))
    return e.addEventListener("pointerover", a, d), e.addEventListener("pointerout", l, d), e.addEventListener("pointerdown", a, d), e.addEventListener("pointerup", l, d), e.addEventListener("pointercancel", l, d), { disconnect: () => {
      e.removeEventListener("pointerover", a, d), e.removeEventListener("pointerout", l, d), e.removeEventListener("pointerdown", a, d), e.removeEventListener("pointerup", l, d), e.removeEventListener("pointercancel", l, d);
    } };
  if (r?.includes?.(":hover"))
    return e.addEventListener("pointerover", a, d), e.addEventListener("pointerout", l, d), { disconnect: () => {
      e.removeEventListener("pointerover", a, d), e.removeEventListener("pointerout", l, d);
    } };
  if (r?.includes?.(":active"))
    return e.addEventListener("pointerdown", a, d), e.addEventListener("pointerup", l, d), e.addEventListener("pointercancel", l, d), { disconnect: () => {
      e.removeEventListener("pointerdown", a, d), e.removeEventListener("pointerup", l, d), e.removeEventListener("pointercancel", l, d);
    } };
  if (r?.includes?.(":focus") && r?.includes?.(":focus-within") && r?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", a, d), e.addEventListener("focusout", l, d), e.addEventListener("click", h, d), { disconnect: () => {
      e.removeEventListener("focusin", a, d), e.removeEventListener("focusout", l, d), e.removeEventListener("click", h, d);
    } };
  const m = new MutationObserver((u, c) => {
    for (const g of u) g.type == "childList" && s(g);
  });
  o = new WeakRef(m), (e?.element ?? e) instanceof Node && m.observe(e = W(e), {
    childList: !0,
    subtree: !0
  });
  const f = N(e, r);
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, m), m;
}, Ne = /* @__PURE__ */ new WeakMap(), st = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), An = (e, t) => {
  if (e) {
    if (t) {
      const n = Ne.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((r) => st(e, n, r));
    }
    return e;
  }
}, ct = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), P = globalThis[ct] ??= /* @__PURE__ */ new Map(), ut = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, dt = (e) => (typeof e == "object" || typeof e == "function") && e != null, lt = (e, t, n) => {
  if (!dt(e) && e != null) return e;
  let r = P.get(t);
  return r || (r = /* @__PURE__ */ new WeakMap(), P.set(t, r)), !r.has(e) && e != null && r.set(e, n), e;
}, zn = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, r] of t.entries()) lt(e, n, r);
    return e;
  }
}, Cn = (e, t) => {
  if (e) {
    if (t) {
      const n = y?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      y?.has?.(e) || y?.set?.(e, n), [...t?.values?.() || []].map((r) => ft(e, r, n));
    }
    return e;
  }
}, V = (e) => ({
  storeSet: ut(P, e),
  mixinSet: y?.get?.(e),
  behaviorSet: Ne?.get?.(e)
}), ft = (e, t, n) => {
  const r = new WeakRef(e);
  return n ||= y?.get?.(e), n?.has?.(t) || (n?.add?.(t), M?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((i) => !!i).join(" ")), t?.connect?.(r, t, V(e))), e;
}, ht = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), y = globalThis[ht] ??= /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), M = globalThis[pt] ??= /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), L = globalThis[mt] ??= /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), $ = globalThis[gt] ??= /* @__PURE__ */ new WeakMap(), Ve = (e, t) => {
  typeof t == "string" && (t = L?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((s) => L?.get?.(s)).filter((s) => !!s)), i = y?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  M?.has?.(t) || M?.set?.(t, /* @__PURE__ */ new WeakSet()), y?.has?.(e) || y?.set?.(e, i);
  const o = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(o, t, V(e)), (r.has(t) || !M?.get?.(t)?.has?.(e)) && (t?.connect?.(o, t, V(e)), n.add($?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((s) => !!s).join(" "))), M?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(o, t, V(e))));
}, ie = /* @__PURE__ */ new Set(), vt = (e = typeof document < "u" ? document : null) => {
  if (e)
    return ie?.has?.(e) || (ie?.add?.(e), Te(e, "*", "data-mixin", (t) => oe(t.target)), at(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && oe(n);
    }), $e(e)), e;
}, oe = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => L?.get?.(n)).filter((n) => !!n))].map?.((n) => Ve(e, n));
}, bt = (e, t) => {
  e.forEach((n) => t ? Ve(n, t) : oe(n));
}, yt = (e) => {
  for (const t of ie) bt(t?.querySelectorAll?.("[data-mixin]"), e);
}, wt = new FinalizationRegistry((e) => {
  L?.delete?.(e);
}), xt = (e, t) => {
  if (!$?.has?.(t)) {
    const n = e?.trim?.();
    n && ($?.set?.(t, n), L?.set?.(n, t), wt?.register?.(t, n), yt(t));
  }
};
vt(typeof document < "u" ? document : null);
var ce = class {
  constructor(e = null) {
    e && xt(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return P.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return V(e);
  }
  get elements() {
    return M?.get?.(this);
  }
  get storage() {
    return P?.get?.(this.name || "");
  }
  get name() {
    return $?.get?.(this);
  }
}, Tn = (e, t, n) => {
  const r = n;
  O(n) && (n = n.value);
  const i = (n = ae(n)) != null && n !== !1;
  return j(r, () => {
    e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, Nn = (e, t, n) => {
  if (!(t = typeof t == "string" ? Se(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const r = n;
  return O(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && j(r, () => {
    n != null ? e[t] = n : delete e[t];
  }), e;
}, Vn = (e, t, n) => {
  const r = e?.dataset;
  if (!t || !e || !r) return e;
  const i = n;
  return O(n) && (n = n?.value), t = Se(t), r?.[t] === (n = ae(n)) || (n == null || n === !1 ? delete r[t] : j(i, () => {
    typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
  })), e;
}, St = (e, t) => e.style.removeProperty(xe(t)), Pn = (e, t, n) => {
  const r = e?.style;
  return !t || typeof t != "string" || !e || !r || j(n, () => {
    Oe(n) || O(n) || We(n) ? T(e, t, n) : n == null && St(e, t);
  }), e;
}, Ln = (e, t, n) => {
  if (!t || !e) return e;
  const r = n;
  return O(n) && (n = n.value), t = xe(t), e?.getAttribute?.(t) === (n = ae(n)) || j(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
};
function K(e, t) {
  const n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x, t.x), o = Math.max(e.y, t.y);
  return {
    left: n,
    top: r,
    right: i,
    bottom: o,
    width: i - n,
    height: o - r
  };
}
var R = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, X = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, Y = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Et = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), Z = globalThis[Et] ??= /* @__PURE__ */ new WeakMap(), v = (e, t, n) => {
  const r = Z.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), Z.set(e, r);
}, ue = (e, t) => {
  const n = Z.get(e), r = n?.get(t);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(t), n.size === 0 && Z.delete(e);
  }
}, E = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, Pe = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, Mt = class extends ce {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:var(--z-max, 9999);box-sizing:border-box;border:1px dashed color-mix(in oklab, var(--color-primary, #5a7fff) 70%, transparent);background:color-mix(in oklab, var(--color-primary, #5a7fff) 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let i = !1, o = {
      x: 0,
      y: 0
    }, s = {
      x: 0,
      y: 0
    };
    const a = (c) => {
      const g = t.getBoundingClientRect();
      return {
        x: c.clientX - g.left,
        y: c.clientY - g.top
      };
    }, l = () => {
      const c = K(o, s);
      if (c.width < 1 && c.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${c.left}px`, n.style.top = `${c.top}px`, n.style.width = `${c.width}px`, n.style.height = `${c.height}px`;
    }, h = (c) => {
      c.button === 0 && (c.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (c.target === t || t.contains(c.target)) && (i = !0, o = a(c), s = { ...o }, t.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(R.start, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          host: t
        }
      })), l()));
    }, d = (c) => {
      if (!i) return;
      s = a(c), l();
      const g = K(o, s);
      t.dispatchEvent(new CustomEvent(R.move, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          box: g,
          host: t
        }
      }));
    }, m = (c) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(c.pointerId);
      } catch {
      }
      const g = K(o, s);
      t.dispatchEvent(new CustomEvent(R.end, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          box: g,
          host: t
        }
      }));
    }, f = (c) => {
      i && m(c);
    }, u = (c) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(R.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return v(t, "ui-junction-select", () => {
      n.remove();
    }), v(t, "ui-junction-select", p(t, "pointerdown", h)), v(t, "ui-junction-select", p(t, "pointermove", d)), v(t, "ui-junction-select", p(t, "pointerup", f)), v(t, "ui-junction-select", p(t, "pointercancel", u)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ue(t, "ui-junction-select"), this;
  }
}, kt = class extends ce {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    T(t, "--jx-drag-x", E(t, "--jx-drag-x")), T(t, "--jx-drag-y", E(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = Pe(t, "data-junction-drag-handle", t);
    let i = !1, o = 0, s = 0, a = 0, l = 0;
    const h = (f) => {
      f.button === 0 && (f.target !== r && !r.contains(f.target) || (i = !0, o = f.clientX, s = f.clientY, a = E(t, "--jx-drag-x"), l = E(t, "--jx-drag-y"), r.setPointerCapture(f.pointerId), t.dispatchEvent(new CustomEvent(X.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: f.clientX,
          clientY: f.clientY,
          baseX: a,
          baseY: l
        }
      }))));
    }, d = (f) => {
      if (!i) return;
      const u = f.clientX - o, c = f.clientY - s, g = a + u, w = l + c;
      T(t, "--jx-drag-x", g), T(t, "--jx-drag-y", w), t.dispatchEvent(new CustomEvent(X.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: u,
          dy: c,
          x: g,
          y: w
        }
      }));
    }, m = (f) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(f.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(X.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: E(t, "--jx-drag-x"),
            y: E(t, "--jx-drag-y")
          }
        }));
      }
    };
    return v(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), v(t, "ui-junction-drag", p(r, "pointerdown", h)), v(t, "ui-junction-drag", p(r, "pointermove", d)), v(t, "ui-junction-drag", p(r, "pointerup", m)), v(t, "ui-junction-drag", p(r, "pointercancel", m)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ue(t, "ui-junction-drag"), this;
  }
}, At = class extends ce {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Pe(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, o = 0, s = 0, a = 0;
    const l = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), h = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), d = (u) => {
      u.button === 0 && (u.target !== n && !n.contains(u.target) || (r = !0, i = u.clientX, o = u.clientY, s = t.offsetWidth, a = t.offsetHeight, n.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(Y.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: s,
          height: a
        }
      }))));
    }, m = (u) => {
      if (!r) return;
      const c = Math.max(l, s + (u.clientX - i)), g = Math.max(h, a + (u.clientY - o));
      t.style.width = `${c}px`, t.style.height = `${g}px`, t.dispatchEvent(new CustomEvent(Y.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: c,
          height: g
        }
      }));
    }, f = (u) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(u.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Y.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return v(t, "ui-junction-resize", p(n, "pointerdown", d)), v(t, "ui-junction-resize", p(n, "pointermove", m)), v(t, "ui-junction-resize", p(n, "pointerup", f)), v(t, "ui-junction-resize", p(n, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ue(t, "ui-junction-resize"), this;
  }
};
new Mt();
new kt();
new At();
export {
  ce as DOMMixin,
  kt as JunctionDragMixin,
  At as JunctionResizeMixin,
  Mt as JunctionSelectMixin,
  Dt as MATCH,
  nn as MOC,
  U as MOCElement,
  jt as RAFBehavior,
  Kt as REGEX,
  Ot as ROOT,
  Sn as WavyShapedCircle,
  Tt as __exportProperties,
  le as __registeredCssProperties,
  p as addEvent,
  Jt as addEvents,
  Gt as addEventsList,
  vt as addRoot,
  xn as animateHide,
  wn as animateShow,
  ee as availSize,
  dn as bbh,
  un as bbw,
  st as bindBehavior,
  ft as bindMixins,
  lt as bindStore,
  B as borderBoxHeight,
  F as borderBoxWidth,
  Ne as boundBehaviors,
  y as boundMixinSet,
  fn as cbh,
  ln as cbw,
  an as changeZoom,
  pn as classes,
  nt as computeCaretPosition,
  bn as computeCaretPositionFromClient,
  tn as containsOrSelf,
  I as contentBoxHeight,
  _ as contentBoxWidth,
  Xt as createElementVanilla,
  ye as createFixedOverlayViewport,
  St as deleteStyleProperty,
  Vt as detectMobile,
  Bt as doBorderObserve,
  Ft as doContentObserve,
  mn as ensureViewportTracking,
  Q as ensureVirtualKeyboardOverlay,
  gn as fixOrientToScreen,
  sn as fixedClientZoom,
  Ae as getAvailSize,
  cn as getBoundingOrientRect,
  et as getCorrectOrientation,
  V as getElementRelated,
  en as getEventTarget,
  De as getOffsetParent,
  Pt as getOffsetParentChain,
  ut as getStoresOfElement,
  on as getZoom,
  Ln as handleAttribute,
  Vn as handleDataset,
  Tn as handleHidden,
  Nn as handleProperty,
  Pn as handleStyleChange,
  D as hasParent,
  It as html,
  Ut as includeSelf,
  qt as indexOf,
  Ce as initTextStyle,
  Yt as isElement,
  rn as isInFocus,
  Nt as isMobile,
  Lt as isNearlyIdentity,
  Zt as isValidParent,
  Ke as makeRAFCycle,
  vn as measureInputInFocus,
  tt as measureText,
  Z as mixinDisposers,
  M as mixinElements,
  $ as mixinNamespace,
  L as mixinRegistry,
  wt as nameRegistryF,
  P as namedStoreMaps,
  kn as observeAttribute,
  Te as observeAttributeBySelector,
  Mn as observeBorderBox,
  at as observeBySelector,
  En as observeContentBox,
  he as onBorderObserve,
  pe as onContentObserve,
  A as orientOf,
  Qe as orientationNumberMap,
  Ee as passiveOpts,
  hn as readFixedOverlayViewport,
  rt as readLauncherLayoutFromElement,
  An as reflectBehaviors,
  Cn as reflectMixins,
  zn as reflectStores,
  xt as registerMixin,
  me as removeEvent,
  Qt as removeEvents,
  yn as resolveGridCellFromClientPoint,
  ie as roots,
  Ht as setAttributes,
  Wt as setAttributesIfNull,
  $t as setChecked,
  Rt as setIdleInterval,
  Xe as throttleMap,
  J as unfixedClientZoom,
  oe as updateAllMixins,
  Ve as updateMixinAttributes,
  bt as updateMixinAttributesAll,
  yt as updateMixinAttributesAllInRoots,
  te as updateVP,
  _t as url,
  ze as whenAnyScreenChanges,
  Je as zoomOf,
  Ue as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwgfSBmcm9tIFwiQGZlc3QtbGliL2NvcmVcIjtcbmltcG9ydCB7IGFwcGVhciwgZGVjb3JIaWRlLCBkZWNvclNob3csIGRpc2FwcGVhciwgb2JzZXJ2ZVN0eWxlVHJlZSwgc2V0U3R5bGVQcm9wZXJ0eSB9IGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCI7XG5cbmV4cG9ydCAqIGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCJcblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9Qcm9wZXJ0aWVzLnRzXG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzID0gZ2xvYmFsVGhpc1tfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtZnJlcVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1waXhlbC1yYXRpb1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXlcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXhcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXlcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fVxuXS5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIENTUz8ucmVnaXN0ZXJQcm9wZXJ0eSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0Y29uc3QgbmFtZSA9IFN0cmluZyhvcHRpb25zPy5uYW1lIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFuYW1lIHx8IF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuaGFzKG5hbWUpKSByZXR1cm47XG5cdHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkob3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAoIShTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiKSkgY29uc29sZS53YXJuKGUpO1xuXHR9IGZpbmFsbHkge1xuXHRcdF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuYWRkKG5hbWUpO1xuXHR9XG59KTtcbnZhciBfX2V4cG9ydFByb3BlcnRpZXMgPSAoKSA9PiB7fTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0RldGVjdC50c1xudmFyIGlzTW9iaWxlID0gKCkgPT4ge1xuXHRsZXQgY2hlY2sgPSBuYXZpZ2F0b3I/LnVzZXJBZ2VudERhdGE/Lm1vYmlsZSB8fCBmYWxzZTtcblx0KChhKSA9PiB7XG5cdFx0aWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSBjaGVjayA9IHRydWU7XG5cdH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCBnbG9iYWxUaGlzLm9wZXJhKTtcblx0cmV0dXJuIGNoZWNrO1xufTtcbnZhciBkZXRlY3RNb2JpbGUgPSAoKSA9PiB7XG5cdHJldHVybiBbXG5cdFx0L0FuZHJvaWQvaSxcblx0XHQvd2ViT1MvaSxcblx0XHQvaVBob25lL2ksXG5cdFx0L2lQYWQvaSxcblx0XHQvaVBvZC9pLFxuXHRcdC9CbGFja0JlcnJ5L2ksXG5cdFx0L1dpbmRvd3MgUGhvbmUvaVxuXHRdLnNvbWUobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaC5iaW5kKG5hdmlnYXRvci51c2VyQWdlbnQpKSAmJiAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiBnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1V0aWxzLnRzXG52YXIgY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2sgPSAoKSA9PiAoe1xuXHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxufSk7XG52YXIgcnVuV2hlbklkbGUkMSA9IChjYiwgdGltZW91dCA9IDFlMykgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrKCkpLCAwKTtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIGVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBlbGVtZW50Py5ob3N0O1xufTtcbnZhciBnZXRPZmZzZXRQYXJlbnRDaGFpbiA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IHBhcmVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IGdldE9mZnNldFBhcmVudChjdXJyZW50KTtcblx0XHRpZiAocGFyZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxIdG1sRWxlbWVudCkgYnJlYWs7XG5cdFx0aWYgKGN1cnJlbnQgPSBwYXJlbnQpIHBhcmVudHMucHVzaChjdXJyZW50KTtcblx0fVxuXHRyZXR1cm4gcGFyZW50cztcbn07XG52YXIgaXNOZWFybHlJZGVudGl0eSA9IChtYXRyaXgsIGVwc2lsb24gPSAxZS02KSA9PiB7XG5cdHJldHVybiBNYXRoLmFicyhtYXRyaXguYSAtIDEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYikgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5jKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmQgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmUpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguZikgPCBlcHNpbG9uO1xufTtcbnZhciBtYWtlUkFGQ3ljbGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRyb2wgPSB7XG5cdFx0Y2FuY2VsZWQ6IGZhbHNlLFxuXHRcdHJBRnM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0bGFzdDogbnVsbCxcblx0XHRjYW5jZWwoKSB7XG5cdFx0XHR0aGlzLmNhbmNlbGVkID0gdHJ1ZTtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdHNoZWR1bGUoY2IpIHtcblx0XHRcdHRoaXMuckFGcy5hZGQoY2IpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHR9O1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHdoaWxlICghY29udHJvbD8uY2FuY2VsZWQpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKChjb250cm9sPy5yQUZzPy52YWx1ZXM/LigpID8/IFtdKT8ubWFwPy4oKHJBRikgPT4gUHJvbWlzZS50cnkockFGKT8uY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSkpKTtcblx0XHRcdGNvbnRyb2wuckFGcz8uY2xlYXI/LigpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRjb250cm9sLmxhc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmVzLCAxNik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pKCk7XG5cdHJldHVybiBjb250cm9sO1xufTtcbnZhciBSQUZCZWhhdmlvciA9IChzaGVkID0gbWFrZVJBRkN5Y2xlKCkpID0+IHtcblx0cmV0dXJuIChjYikgPT4gc2hlZC5zaGVkdWxlKGNiKTtcbn07XG52YXIgUk9PVCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgc2V0QXR0cmlidXRlc0lmTnVsbCA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdGlmICghYXR0cnMgfHwgdHlwZW9mIGF0dHJzICE9IFwib2JqZWN0XCIgfHwgIWVsZW1lbnQpIHJldHVybjtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRjb25zdCBvbGQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBpZiAodmFsdWUgIT0gb2xkKSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBvbGQgPT0gXCJcIiA/IHZhbHVlID8/IG9sZCA6IG9sZCA/PyB2YWx1ZSk7XG5cdH0pO1xufTtcbnZhciBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJzID0ge30pID0+IHtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA/PyBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKSk7XG5cdH0pO1xufTtcbnZhciB0aHJvdHRsZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgc2V0SWRsZUludGVydmFsID0gKGNiLCB0aW1lb3V0ID0gMWUzLCAuLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHN0YXR1cyA9IHtcblx0XHRydW5uaW5nOiB0cnVlLFxuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0c3RhdHVzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cdHJ1bldoZW5JZGxlJDEoYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghY2IgfHwgdHlwZW9mIGNiICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRcdHdoaWxlIChzdGF0dXMucnVubmluZykge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoW1Byb21pc2UudHJ5KGNiLCAuLi5hcmdzKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSkuY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFueShbbmV3IFByb21pc2UoKHIpID0+IHJ1bldoZW5JZGxlJDEociwgdGltZW91dCkpLCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCB0aW1lb3V0KSldKTtcblx0XHR9XG5cdFx0c3RhdHVzLmNhbmNlbCA9ICgpID0+IHt9O1xuXHR9LCB0aW1lb3V0KTtcblx0cmV0dXJuIHN0YXR1cz8uY2FuY2VsO1xufTtcbmlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dGhyb3R0bGVNYXAuZm9yRWFjaCgoY2IpID0+IGNiPy4oKSk7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyKSk7XG5cdH1cbn0pO1xudmFyIGJvcmRlckJveFdpZHRoID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtd2lkdGhcIik7XG52YXIgYm9yZGVyQm94SGVpZ2h0ID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtaGVpZ2h0XCIpO1xudmFyIGNvbnRlbnRCb3hXaWR0aCA9IFN5bWJvbChcIkBjb250ZW50LWJveC13aWR0aFwiKTtcbnZhciBjb250ZW50Qm94SGVpZ2h0ID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LWhlaWdodFwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZG9Db250ZW50T2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50LmNsaWVudFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50LmNsaWVudEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQ29udGVudE9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxufTtcbnZhciBkb0JvcmRlck9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5vZmZzZXRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Cb3JkZXJPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxufTtcbnZhciB1cmwgPSAodHlwZSwgLi4uc291cmNlKSA9PiB7XG5cdHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKHNvdXJjZSwgeyB0eXBlIH0pKTtcbn07XG52YXIgaHRtbCA9IChzb3VyY2UsIHR5cGUgPSBcInRleHQvaHRtbFwiKSA9PiB7XG5cdGNvbnN0IHBhcnNlZCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc291cmNlLCB0eXBlKTtcblx0cmV0dXJuIHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikgPz8gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCIqXCIpO1xufTtcbnZhciBzZXRDaGVja2VkID0gKGlucHV0LCB2YWx1ZSwgZXYpID0+IHtcblx0aWYgKHZhbHVlICE9IG51bGwgJiYgaW5wdXQuY2hlY2tlZCAhPSB2YWx1ZSkge1xuXHRcdGlmIChpbnB1dD8uW1widHlwZVwiXSA9PSBcImNoZWNrYm94XCIgfHwgaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJyYWRpb1wiICYmICFpbnB1dD8uY2hlY2tlZCkge1xuXHRcdFx0aW5wdXQ/LmNsaWNrPy4oKTtcblx0XHRcdGV2Py5wcmV2ZW50RGVmYXVsdD8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlucHV0LmNoZWNrZWQgPSAhIXZhbHVlO1xuXHRcdFx0aW5wdXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGlzVmFsaWRQYXJlbnQgPSAocGFyZW50KSA9PiB7XG5cdHJldHVybiBwYXJlbnQgIT0gbnVsbCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgSFRNTEJvZHlFbGVtZW50KSA/IHBhcmVudCA6IG51bGw7XG59O1xudmFyIGluZGV4T2YgPSAoZWxlbWVudCwgbm9kZSkgPT4ge1xuXHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IG5vZGUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50Py5jaGlsZE5vZGVzID8/IFtdKT8uaW5kZXhPZj8uKG5vZGUpID8/IC0xO1xufTtcbnZhciBNQVRDSCA9IFwiKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKVwiO1xudmFyIFJFR0VYID0gXCJeKD86KC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSl8XiMoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcLigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKil8XlxcXFxbKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSg/OihbKiR8fl5dPz0pKFtcXFwiJ10pKCg/Oig/PShcXFxcXFxcXD8pKVxcXFw4LikqPylcXFxcNik/XFxcXF1cIjtcbnZhciBjcmVhdGVFbGVtZW50VmFuaWxsYSA9IChzZWxlY3RvcikgPT4ge1xuXHRpZiAoc2VsZWN0b3IgPT0gXCI6ZnJhZ21lbnQ6XCIpIHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQuYmluZChkb2N1bWVudCk7XG5cdGZvciAodmFyIG5vZGUgPSBjcmVhdGUoXCJkaXZcIiksIG1hdGNoLCBjbGFzc05hbWUgPSBcIlwiOyBzZWxlY3RvciAmJiAobWF0Y2ggPSBzZWxlY3Rvci5tYXRjaChcIl4oPzooLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopKXxeIygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKil8XlxcXFwuKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXFsoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiKSk7KSB7XG5cdFx0aWYgKG1hdGNoWzFdKSBub2RlID0gY3JlYXRlKG1hdGNoWzFdKTtcblx0XHRpZiAobWF0Y2hbMl0pIG5vZGUuaWQgPSBtYXRjaFsyXTtcblx0XHRpZiAobWF0Y2hbM10pIGNsYXNzTmFtZSArPSBcIiBcIiArIG1hdGNoWzNdO1xuXHRcdGlmIChtYXRjaFs0XSkgbm9kZS5zZXRBdHRyaWJ1dGUobWF0Y2hbNF0sIG1hdGNoWzddIHx8IFwiXCIpO1xuXHRcdHNlbGVjdG9yID0gc2VsZWN0b3Iuc2xpY2UobWF0Y2hbMF0ubGVuZ3RoKTtcblx0fVxuXHRpZiAoY2xhc3NOYW1lKSBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZS5zbGljZSgxKTtcblx0cmV0dXJuIG5vZGU7XG59O1xudmFyIGlzRWxlbWVudCA9IChlbCkgPT4ge1xuXHRyZXR1cm4gZWwgIT0gbnVsbCAmJiAoZWwgaW5zdGFuY2VvZiBOb2RlIHx8IGVsIGluc3RhbmNlb2YgVGV4dCB8fCBlbCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBDb21tZW50IHx8IGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSA/IGVsIDogbnVsbDtcbn07XG52YXIgaW5jbHVkZVNlbGYgPSAodGFyZ2V0LCBzZWxlY3RvcikgPT4ge1xuXHRjb25zdCBzZWwgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBzZWxlY3Rvci50cmltKCkgOiBcIlwiO1xuXHRpZiAoIXNlbCB8fCAhdGFyZ2V0KSByZXR1cm4gdGFyZ2V0ID8/IG51bGw7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRhcmdldC5xdWVyeVNlbGVjdG9yKHNlbCkgPz8gKHRhcmdldC5tYXRjaGVzKHNlbCkgPyB0YXJnZXQgOiBudWxsKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgaGFzUGFyZW50ID0gKGN1cnJlbnQsIHBhcmVudCkgPT4ge1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGlmICghKGN1cnJlbnQ/LmVsZW1lbnQgPz8gY3VycmVudCkpIHJldHVybiBmYWxzZTtcblx0XHRpZiAoKGN1cnJlbnQ/LmVsZW1lbnQgPz8gY3VycmVudCkgPT09IChwYXJlbnQ/LmVsZW1lbnQgPz8gcGFyZW50KSkgcmV0dXJuIHRydWU7XG5cdFx0Y3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudCA/PyAoY3VycmVudC5wYXJlbnROb2RlID09IGN1cnJlbnQ/LmdldFJvb3ROb2RlPy4oeyBjb21wb3NlZDogdHJ1ZSB9KSA/IGN1cnJlbnQ/LmdldFJvb3ROb2RlPy4oeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA6IGN1cnJlbnQ/LnBhcmVudE5vZGUpO1xuXHR9XG59O1xudmFyIHBhc3NpdmVPcHRzID0ge307XG5mdW5jdGlvbiBhZGRFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5hZGRFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xuXHRjb25zdCB3ciA9IHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdGFyZ2V0ID09IFwiZnVuY3Rpb25cIiAmJiAhdGFyZ2V0Py5kZXJlZiA/IG5ldyBXZWFrUmVmKHRhcmdldCkgOiB0YXJnZXQ7XG5cdHJldHVybiAoKSA9PiB3cj8uZGVyZWY/LigpPy5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlRXZlbnQodGFyZ2V0LCB0eXBlLCBjYiwgb3B0cyA9IHBhc3NpdmVPcHRzKSB7XG5cdHRhcmdldD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKHR5cGUsIGNiLCBvcHRzKTtcbn1cbnZhciBhZGRFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IGFkZEV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IGFkZEV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGFkZEV2ZW50c0xpc3QgPSAoZWwsIGV2ZW50cykgPT4ge1xuXHRpZiAoZXZlbnRzKSB7XG5cdFx0bGV0IGVudHJpZXMgPSBldmVudHM7XG5cdFx0aWYgKGV2ZW50cyBpbnN0YW5jZW9mIE1hcCkgZW50cmllcyA9IFsuLi5ldmVudHMuZW50cmllcygpXTtcblx0XHRlbHNlIGVudHJpZXMgPSBbLi4uT2JqZWN0LmVudHJpZXMoZXZlbnRzKV07XG5cdFx0cmV0dXJuIGVudHJpZXMubWFwKChbbmFtZSwgbGlzdF0pID0+ICgoaXNBcnJheU9ySXRlcmFibGUobGlzdCkgPyBbLi4ubGlzdF0gOiBsaXN0KSA/PyBbXSk/Lm1hcD8uKChjYnMpID0+IHtcblx0XHRcdHJldHVybiBhZGRFdmVudChlbCwgbmFtZSwgY2JzKTtcblx0XHR9KSk7XG5cdH1cbn07XG52YXIgcmVtb3ZlRXZlbnRzID0gKHJvb3QsIGhhbmRsZXJzKSA9PiB7XG5cdHJvb3QgPSByb290IGluc3RhbmNlb2YgV2Vha1JlZiA/IHJvb3QuZGVyZWYoKSA6IHJvb3Q7XG5cdHJldHVybiBbLi4uT2JqZWN0LmVudHJpZXMoaGFuZGxlcnMpXS5tYXA/LigoW25hbWUsIGNiXSkgPT4gQXJyYXkuaXNBcnJheShjYikgPyByZW1vdmVFdmVudChyb290LCBuYW1lLCAuLi5jYikgOiByZW1vdmVFdmVudChyb290LCBuYW1lLCBjYikpO1xufTtcbnZhciBnZXRFdmVudFRhcmdldCA9IChldikgPT4ge1xuXHRpZiAoIWV2KSByZXR1cm4gbnVsbDtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBwYXRoKSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gbm9kZTtcblx0fVxuXHRjb25zdCB0YXJnZXQgPSBldj8udGFyZ2V0O1xuXHRpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgdGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuIHRhcmdldDtcblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGNvbnRhaW5zT3JTZWxmID0gKGEsIGIsIGV2KSA9PiB7XG5cdGlmIChiID09IG51bGwgfHwgIShiIGluc3RhbmNlb2YgTm9kZSkgJiYgYj8uZWxlbWVudCA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdGlmIChhID09IGIgfHwgKGE/LmVsZW1lbnQgPz8gYSkgPT0gKGI/LmVsZW1lbnQgPz8gYikpIHJldHVybiB0cnVlO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Y29uc3QgYUVsID0gYT8uZWxlbWVudCA/PyBhO1xuXHRcdGNvbnN0IGJFbCA9IGI/LmVsZW1lbnQgPz8gYjtcblx0XHRpZiAocGF0aC5pbmNsdWRlcyhhRWwpICYmIHBhdGguaW5jbHVkZXMoYkVsKSkge1xuXHRcdFx0Y29uc3QgYUluZGV4ID0gcGF0aC5pbmRleE9mKGFFbCk7XG5cdFx0XHRjb25zdCBiSW5kZXggPSBwYXRoLmluZGV4T2YoYkVsKTtcblx0XHRcdGlmIChiSW5kZXggPj0gMCAmJiBhSW5kZXggPj0gMCAmJiBiSW5kZXggPCBhSW5kZXgpIHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRpZiAoYT8uY29udGFpbnM/LihiPy5lbGVtZW50ID8/IGIpIHx8IGE/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSk/Lmhvc3QgPT0gKGI/LmVsZW1lbnQgPz8gYikpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gZmFsc2U7XG59O1xudmFyIE1PQ0VsZW1lbnQgPSAoZWxlbWVudCwgc2VsZWN0b3IsIGV2KSA9PiB7XG5cdGNvbnN0IHNlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiA/IHNlbGVjdG9yLnRyaW0oKSA6IFwiXCI7XG5cdGlmICghc2VsKSByZXR1cm4gZWxlbWVudCA/PyBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHRyeSB7XG5cdFx0XHRpZiAobm9kZS5tYXRjaGVzPy4oc2VsKSkgcmV0dXJuIG5vZGU7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cdGxldCBzZWxmID0gbnVsbDtcblx0bGV0IGhvc3RNYXRjaGVkID0gbnVsbDtcblx0bGV0IGNsb3Nlc3QgPSBudWxsO1xuXHR0cnkge1xuXHRcdHNlbGYgPSBlbGVtZW50Py5tYXRjaGVzPy4oc2VsKSA/IGVsZW1lbnQgOiBudWxsO1xuXHRcdGNvbnN0IGhvc3QgPSAoZWxlbWVudD8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSA/PyBlbGVtZW50Py5wYXJlbnRFbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pKT8uaG9zdDtcblx0XHRob3N0TWF0Y2hlZCA9IGhvc3Q/Lm1hdGNoZXM/LihzZWwpID8gaG9zdCA6IG51bGw7XG5cdFx0Y2xvc2VzdCA9IGVsZW1lbnQ/LmNsb3Nlc3Q/LihzZWwpID8/IHNlbGY/LmNsb3Nlc3Q/LihzZWwpID8/IGhvc3RNYXRjaGVkPy5jbG9zZXN0Py4oc2VsKSA/PyBudWxsO1xuXHR9IGNhdGNoIHt9XG5cdHJldHVybiBzZWxmID8/IGNsb3Nlc3QgPz8gaG9zdE1hdGNoZWQ7XG59O1xudmFyIE1PQyA9IChlbGVtZW50LCBzZWxlY3RvcikgPT4ge1xuXHRyZXR1cm4gISFNT0NFbGVtZW50KGVsZW1lbnQsIHNlbGVjdG9yKTtcbn07XG52YXIgaXNJbkZvY3VzID0gKGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50LCBkaXIgPSBcInBhcmVudFwiKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoZWxlbWVudC5jaGVja1Zpc2liaWxpdHkgJiYgIWVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5KHtcblx0XHRjaGVja09wYWNpdHk6IHRydWUsXG5cdFx0Y2hlY2tWaXNpYmlsaXR5Q1NTOiB0cnVlXG5cdH0pKSByZXR1cm4gZmFsc2U7XG5cdGlmICghZWxlbWVudC5jaGVja1Zpc2liaWxpdHkgJiYgZWxlbWVudC5vZmZzZXRQYXJlbnQgPT09IG51bGwgJiYgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiAhPT0gXCJmaXhlZFwiKSByZXR1cm4gZmFsc2U7XG5cdGxldCBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHR3aGlsZSAoYWN0aXZlICYmIGFjdGl2ZS5zaGFkb3dSb290ICYmIGFjdGl2ZS5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQpIGFjdGl2ZSA9IGFjdGl2ZS5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG5cdGNvbnN0IGlzRm9jdXNlZCA9IGFjdGl2ZSA9PT0gZWxlbWVudCB8fCBoYXNQYXJlbnQoYWN0aXZlLCBlbGVtZW50KTtcblx0Y29uc3QgaXNIb3ZlcmVkID0gZWxlbWVudC5tYXRjaGVzKFwiOmhvdmVyXCIpO1xuXHRpZiAoIWlzRm9jdXNlZCAmJiAhaXNIb3ZlcmVkICYmICFzZWxlY3Rvck9yRWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoc2VsZWN0b3JPckVsZW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIHNlbGVjdG9yT3JFbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRpZiAoZGlyID09PSBcInBhcmVudFwiKSByZXR1cm4gISFNT0NFbGVtZW50KGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50KTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSBpc0ZvY3VzZWQgPyBhY3RpdmUgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6aG92ZXJcIikgfHwgZWxlbWVudDtcblx0XHRcdFx0Y29uc3QgYWx0Q25kID0gISFNT0NFbGVtZW50KHRhcmdldCwgc2VsZWN0b3JPckVsZW1lbnQpO1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudD8ucXVlcnlTZWxlY3Rvcj8uKHNlbGVjdG9yT3JFbGVtZW50KSAhPSBudWxsIHx8IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWxlY3Rvck9yRWxlbWVudCkgfHwgYWx0Q25kO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoc2VsZWN0b3JPckVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0aWYgKGRpciA9PT0gXCJwYXJlbnRcIikgcmV0dXJuIGhhc1BhcmVudChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCkgfHwgZmFsc2U7XG5cdFx0XHRlbHNlIHJldHVybiBoYXNQYXJlbnQoc2VsZWN0b3JPckVsZW1lbnQsIGVsZW1lbnQpIHx8IGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9ab29tLnRzXG52YXIgZ2V0Wm9vbSA9ICgpID0+IHtcblx0aWYgKFwiY3VycmVudENTU1pvb21cIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY3VycmVudENTU1pvb20gfHwgMTtcblx0cmV0dXJuIHBhcnNlRmxvYXQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItLXNjYWxpbmdcIikgfHwgXCIxXCIpIHx8IDE7XG59O1xudmFyIHpvb21WYWx1ZXNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQHpvb21WYWx1ZXNcIik7XG52YXIgem9vbVZhbHVlcyA9IGdsb2JhbFRoaXNbem9vbVZhbHVlc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHpvb21PZiA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiB6b29tVmFsdWVzLmdldE9ySW5zZXJ0Q29tcHV0ZWQoZWxlbWVudCwgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IChlbGVtZW50Py5tYXRjaGVzPy4oXCIudWktb3JpZW50Ym94XCIpID8gZWxlbWVudCA6IG51bGwpIHx8IGVsZW1lbnQ/LmNsb3Nlc3Q/LihcIi51aS1vcmllbnRib3hcIikgfHwgZG9jdW1lbnQuYm9keTtcblx0XHRpZiAoY29udGFpbmVyPy56b29tKSByZXR1cm4gY29udGFpbmVyPy56b29tIHx8IDE7XG5cdFx0aWYgKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tKSByZXR1cm4gZWxlbWVudD8uY3VycmVudENTU1pvb20gfHwgMTtcblx0fSk7XG59O1xudmFyIGNoYW5nZVpvb20gPSAoc2NhbGUgPSAxKSA9PiB7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2NhbGluZ1wiLCBzY2FsZSk7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInNjYWxpbmdcIiwge1xuXHRcdGRldGFpbDogeyB6b29tOiBzY2FsZSB9LFxuXHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHR9KSk7XG5cdHJldHVybiBzY2FsZTtcbn07XG52YXIgZml4ZWRDbGllbnRab29tID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSAhPSBudWxsID8gMSA6IHpvb21PZihlbGVtZW50KSkgfHwgMTtcbn07XG52YXIgdW5maXhlZENsaWVudFpvb20gPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tID09IG51bGwgPyAxIDogZWxlbWVudD8uY3VycmVudENTU1pvb20pIHx8IDE7XG59O1xudmFyIG9yaWVudE9mID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0Y29uc3QgY29udGFpbmVyID0gKGVsZW1lbnQ/Lm1hdGNoZXM/LihcIltvcmllbnRdLCBbZGF0YS1taXhpbj1cXFwidWktb3JpZW50Ym94XFxcIl1cIikgPyBlbGVtZW50IDogbnVsbCkgfHwgZWxlbWVudD8uY2xvc2VzdD8uKFwiW29yaWVudF0sIFtkYXRhLW1peGluPVxcXCJ1aS1vcmllbnRib3hcXFwiXVwiKSB8fCBlbGVtZW50O1xuXHRpZiAoY29udGFpbmVyPy5oYXNBdHRyaWJ1dGU/LihcIm9yaWVudFwiKSkgcmV0dXJuIHBhcnNlSW50KGNvbnRhaW5lcj8uZ2V0QXR0cmlidXRlPy4oXCJvcmllbnRcIikgfHwgXCIwXCIpIHx8IDA7XG5cdGlmIChjb250YWluZXI/Lm9yaWVudCAhPSBudWxsICYmIE51bWJlci5pc0Zpbml0ZShOdW1iZXIoY29udGFpbmVyLm9yaWVudCkpKSByZXR1cm4gTnVtYmVyKGNvbnRhaW5lci5vcmllbnQpIHx8IDA7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gY29udGFpbmVyPy5zdHlsZT8uZ2V0UHJvcGVydHlWYWx1ZT8uKFwiLS1vcmllbnRcIikgfHwgKHR5cGVvZiBnZXRDb21wdXRlZFN0eWxlID09PSBcImZ1bmN0aW9uXCIgJiYgY29udGFpbmVyID8gZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoXCItLW9yaWVudFwiKSA6IFwiXCIpIHx8IFwiXCI7XG5cdFx0Y29uc3QgbiA9IHBhcnNlSW50KFN0cmluZyhyYXcpLnRyaW0oKSwgMTApO1xuXHRcdGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHJldHVybiBuO1xuXHR9IGNhdGNoIHt9XG5cdHJldHVybiAwO1xufTtcbnZhciBnZXRCb3VuZGluZ09yaWVudFJlY3QgPSAoZWxlbWVudCwgb3JpZW50ID0gbnVsbCkgPT4ge1xuXHRjb25zdCB6b29tID0gdW5maXhlZENsaWVudFpvb20oZWxlbWVudCkgfHwgMTtcblx0Y29uc3QgYm94ID0gZWxlbWVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKTtcblx0Y29uc3QgbmJ4ID0ge1xuXHRcdGxlZnQ6IGJveD8ubGVmdCAvIHpvb20sXG5cdFx0cmlnaHQ6IGJveD8ucmlnaHQgLyB6b29tLFxuXHRcdHRvcDogYm94Py50b3AgLyB6b29tLFxuXHRcdGJvdHRvbTogYm94Py5ib3R0b20gLyB6b29tLFxuXHRcdHdpZHRoOiBib3g/LndpZHRoIC8gem9vbSxcblx0XHRoZWlnaHQ6IGJveD8uaGVpZ2h0IC8gem9vbVxuXHR9O1xuXHRjb25zdCBvcl9pID0gb3JpZW50ID8/IChvcmllbnRPZihlbGVtZW50KSB8fCAwKTtcblx0Y29uc3QgdnYgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LnZpc3VhbFZpZXdwb3J0IDogbnVsbDtcblx0Y29uc3Qgc2l6ZSA9IFsoKHZ2Py53aWR0aCA/PyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/LmNsaWVudFdpZHRoID8/IHdpbmRvdy5pbm5lcldpZHRoKSB8fCAxKSAvIHpvb20sICgodnY/LmhlaWdodCA/PyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/LmNsaWVudEhlaWdodCA/PyB3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDEpIC8gem9vbV07XG5cdGNvbnN0IFtsZWZ0XywgdG9wX10gPSBjdnRfY3NfdG9fb3MoW25ieC5sZWZ0LCBuYngudG9wXSwgc2l6ZSwgb3JfaSk7XG5cdGNvbnN0IFtyaWdodF8sIGJvdHRvbV9dID0gY3Z0X2NzX3RvX29zKFtuYngucmlnaHQsIG5ieC5ib3R0b21dLCBzaXplLCBvcl9pKTtcblx0Y29uc3QgW2xlZnQsIHJpZ2h0XSA9IG9yX2kgPT0gMCB8fCBvcl9pID09IDMgPyBbbGVmdF8sIHJpZ2h0X10gOiBbcmlnaHRfLCBsZWZ0X107XG5cdGNvbnN0IFt0b3AsIGJvdHRvbV0gPSBvcl9pID09IDAgfHwgb3JfaSA9PSAxID8gW3RvcF8sIGJvdHRvbV9dIDogW2JvdHRvbV8sIHRvcF9dO1xuXHRjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBvcl9pICUgMiA/IFtuYnguaGVpZ2h0LCBuYngud2lkdGhdIDogW25ieC53aWR0aCwgbmJ4LmhlaWdodF07XG5cdHJldHVybiB7XG5cdFx0bGVmdCxcblx0XHR0b3AsXG5cdFx0cmlnaHQsXG5cdFx0Ym90dG9tLFxuXHRcdHdpZHRoLFxuXHRcdGhlaWdodFxuXHR9O1xufTtcbnZhciBiYncgPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtib3JkZXJCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQgOiBlbFtib3JkZXJCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoO1xudmFyIGJiaCA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2JvcmRlckJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGggOiBlbFtib3JkZXJCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQ7XG52YXIgY2J3ID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbY29udGVudEJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodCA6IGVsW2NvbnRlbnRCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoO1xudmFyIGNiaCA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2NvbnRlbnRCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoIDogZWxbY29udGVudEJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodDtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1ZpZXdwb3J0LnRzXG52YXIgcnVuV2hlbklkbGUgPSAoY2IsIHRpbWVvdXQgPSAxMDApID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayhjYiwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc2V0VGltZW91dCgoKSA9PiBjYih7XG5cdFx0ZGlkVGltZW91dDogZmFsc2UsXG5cdFx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxuXHR9KSwgMCk7XG59O1xudmFyIEtFWUJPQVJEX09WRVJMQVlfUFggPSA4MDtcbnZhciBjYXBhY2l0b3JLZXlib2FyZEhlaWdodCA9IDA7XG52YXIgY2FwYWNpdG9yS2V5Ym9hcmRCb3VuZCA9IGZhbHNlO1xudmFyIHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkID0gZmFsc2U7XG52YXIgdmlydHVhbEtleWJvYXJkID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBnbG9iYWxUaGlzLm5hdmlnYXRvcj8udmlydHVhbEtleWJvYXJkID8/IG51bGw7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xudmFyIGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkgPSAoKSA9PiB7XG5cdGNvbnN0IHZrID0gdmlydHVhbEtleWJvYXJkKCk7XG5cdGlmICghdmspIHJldHVybjtcblx0dHJ5IHtcblx0XHRpZiAodmsub3ZlcmxheXNDb250ZW50ICE9PSB0cnVlKSB2ay5vdmVybGF5c0NvbnRlbnQgPSB0cnVlO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGlzSW1lVGFyZ2V0ID0gKGVsKSA9PiB7XG5cdGlmICghZWwgfHwgIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHJldHVybiB0cnVlO1xuXHRjb25zdCB0YWcgPSBlbC50YWdOYW1lO1xuXHRpZiAodGFnID09PSBcIlRFWFRBUkVBXCIgfHwgdGFnID09PSBcIlNFTEVDVFwiKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHRhZyAhPT0gXCJJTlBVVFwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHR5cGUgPSBTdHJpbmcoZWwudHlwZSB8fCBcInRleHRcIikudG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuICFbXG5cdFx0XCJidXR0b25cIixcblx0XHRcImNoZWNrYm94XCIsXG5cdFx0XCJyYWRpb1wiLFxuXHRcdFwiZmlsZVwiLFxuXHRcdFwic3VibWl0XCIsXG5cdFx0XCJyZXNldFwiLFxuXHRcdFwiaW1hZ2VcIixcblx0XHRcInJhbmdlXCIsXG5cdFx0XCJjb2xvclwiLFxuXHRcdFwiaGlkZGVuXCJcblx0XS5pbmNsdWRlcyh0eXBlKTtcbn07XG52YXIgbGF5b3V0TG9ja09yaWVudCA9IFwiXCI7XG52YXIgbGF5b3V0TG9ja1cgPSAwO1xudmFyIGxheW91dExvY2tIID0gMDtcbnZhciBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCA9ICh3aWR0aCwgaGVpZ2h0LCBsZWZ0ID0gMCwgdG9wID0gMCkgPT4ge1xuXHRjb25zdCBzYWZlV2lkdGggPSBNYXRoLm1heCgwLCBOdW1iZXIod2lkdGgpIHx8IDApO1xuXHRjb25zdCBzYWZlSGVpZ2h0ID0gTWF0aC5tYXgoMCwgTnVtYmVyKGhlaWdodCkgfHwgMCk7XG5cdGNvbnN0IHNhZmVMZWZ0ID0gTnVtYmVyKGxlZnQpIHx8IDA7XG5cdGNvbnN0IHNhZmVUb3AgPSBOdW1iZXIodG9wKSB8fCAwO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IHNhZmVMZWZ0LFxuXHRcdHRvcDogc2FmZVRvcCxcblx0XHRyaWdodDogc2FmZUxlZnQgKyBzYWZlV2lkdGgsXG5cdFx0Ym90dG9tOiBzYWZlVG9wICsgc2FmZUhlaWdodCxcblx0XHR3aWR0aDogc2FmZVdpZHRoLFxuXHRcdGhlaWdodDogc2FmZUhlaWdodFxuXHR9O1xufTtcbnZhciByZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoMCwgMCk7XG5cdGNvbnN0IHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuXHRyZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoTnVtYmVyKHJvb3Q/LmNsaWVudFdpZHRoKSB8fCBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAsIE51bWJlcihyb290Py5jbGllbnRIZWlnaHQpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDApO1xufTtcbnZhciByZWFkTGF5b3V0Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge1xuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMCxcblx0XHRrZXlib2FyZDogMFxuXHR9O1xuXHRjb25zdCB2diA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblx0Y29uc3QgaW5uZXJXID0gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwO1xuXHRjb25zdCBpbm5lckggPSBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dlcgPSBOdW1iZXIodnY/LndpZHRoKSB8fCAwO1xuXHRjb25zdCB2dkggPSBOdW1iZXIodnY/LmhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZUb3AgPSBOdW1iZXIodnY/Lm9mZnNldFRvcCkgfHwgMDtcblx0Y29uc3QgdmtIID0gTnVtYmVyKHZpcnR1YWxLZXlib2FyZCgpPy5ib3VuZGluZ0JveD8uaGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dk92ZXJsYXAgPSBpbm5lckggPiAwICYmIHZ2SCA+IDAgPyBpbm5lckggLSB2dkggLSB2dlRvcCA6IDA7XG5cdGNvbnN0IGNhcEggPSBjYXBhY2l0b3JLZXlib2FyZEhlaWdodDtcblx0bGV0IGtleWJvYXJkID0gY2FwSCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYID8gY2FwSCA6IHZrSCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYID8gdmtIIDogdnZPdmVybGFwID49IEtFWUJPQVJEX09WRVJMQVlfUFggPyB2dk92ZXJsYXAgOiAwO1xuXHRjb25zdCBjYW5kaWRhdGVXID0gTWF0aC5tYXgoaW5uZXJXLCB2dlcpO1xuXHRjb25zdCBjYW5kaWRhdGVIID0gTWF0aC5tYXgoaW5uZXJILCB2dkggKyB2dlRvcCwga2V5Ym9hcmQgPiAwID8gdnZIICsga2V5Ym9hcmQgOiAwKTtcblx0Y29uc3Qgb3JpZW50ID0gdHlwZW9mIG1hdGNoTWVkaWEgIT09IFwidW5kZWZpbmVkXCIgJiYgbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyA/IFwibFwiIDogXCJwXCI7XG5cdGlmIChvcmllbnQgIT09IGxheW91dExvY2tPcmllbnQpIHtcblx0XHRsYXlvdXRMb2NrT3JpZW50ID0gb3JpZW50O1xuXHRcdGxheW91dExvY2tXID0gMDtcblx0XHRsYXlvdXRMb2NrSCA9IDA7XG5cdH1cblx0Y29uc3Qgc3VkZGVuU2hyaW5rID0gbGF5b3V0TG9ja0ggPiAwICYmIGxheW91dExvY2tIIC0gY2FuZGlkYXRlSCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYO1xuXHRpZiAoa2V5Ym9hcmQgPCBLRVlCT0FSRF9PVkVSTEFZX1BYICYmIHN1ZGRlblNocmluaykge1xuXHRcdGNvbnN0IHNocmluayA9IE1hdGgubWF4KDAsIGxheW91dExvY2tIIC0gY2FuZGlkYXRlSCwgbGF5b3V0TG9ja0ggLSAodnZIICsgdnZUb3ApKTtcblx0XHRpZiAoc2hyaW5rID49IEtFWUJPQVJEX09WRVJMQVlfUFgpIGtleWJvYXJkID0gc2hyaW5rO1xuXHR9XG5cdGlmICghKGtleWJvYXJkID4gMCB8fCBpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB8fCBzdWRkZW5TaHJpbmspKSB7XG5cdFx0bGF5b3V0TG9ja1cgPSBjYW5kaWRhdGVXO1xuXHRcdGxheW91dExvY2tIID0gY2FuZGlkYXRlSDtcblx0fSBlbHNlIHtcblx0XHRsYXlvdXRMb2NrVyA9IE1hdGgubWF4KGNhbmRpZGF0ZVcsIGxheW91dExvY2tXKTtcblx0XHRsYXlvdXRMb2NrSCA9IE1hdGgubWF4KGNhbmRpZGF0ZUgsIGxheW91dExvY2tIKTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdHdpZHRoOiBsYXlvdXRMb2NrVyB8fCBjYW5kaWRhdGVXLFxuXHRcdGhlaWdodDogbGF5b3V0TG9ja0ggfHwgY2FuZGlkYXRlSCxcblx0XHRrZXlib2FyZFxuXHR9O1xufTtcbnZhciBwaW5PdmVybGF5U2Nyb2xsID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRpZiAocmVhZExheW91dFZpZXdwb3J0KCkua2V5Ym9hcmQgPD0gMCAmJiAhaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHJldHVybjtcblx0aWYgKHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keT8uc2Nyb2xsVG9wKSB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59O1xudmFyIGdldEF2YWlsU2l6ZSA9ICgpID0+IHtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHRjb25zdCBsID0gdHlwZW9mIG1hdGNoTWVkaWEgIT0gXCJ1bmRlZmluZWRcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiBmYWxzZTtcblx0Y29uc3QgdnYgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LnZpc3VhbFZpZXdwb3J0IDogbnVsbDtcblx0Y29uc3QgbGF5b3V0ID0gcmVhZExheW91dFZpZXdwb3J0KCk7XG5cdGNvbnN0IHZ2QmxvY2sgPSB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IGAke3Z2Py53aWR0aCA/PyAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lcldpZHRoIDogMCl9cHhgLFxuXHRcdFwiLS12di1oZWlnaHRcIjogYCR7dnY/LmhlaWdodCA/PyAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IDApfXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dnY/Lm9mZnNldExlZnQgPz8gMH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC10b3BcIjogYCR7dnY/Lm9mZnNldFRvcCA/PyAwfXB4YCxcblx0XHRcIi0tdnYtc2NhbGVcIjogU3RyaW5nKHZ2Py5zY2FsZSA/PyAxKSxcblx0XHRcIi0tbHYtd2lkdGhcIjogYCR7bGF5b3V0LndpZHRofXB4YCxcblx0XHRcIi0tbHYtaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFwiLS1rZXlib2FyZC1vdmVybGF5LWhlaWdodFwiOiBgJHtsYXlvdXQua2V5Ym9hcmR9cHhgLFxuXHRcdFwiLS12aXJ0dWFsLWtleWJvYXJkLWhlaWdodFwiOiBgJHtsYXlvdXQua2V5Ym9hcmR9cHhgXG5cdH07XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC50b2dnbGVBdHRyaWJ1dGUoXCJkYXRhLXZrLW9wZW5cIiwgbGF5b3V0LmtleWJvYXJkID4gMCk7XG5cdGlmICh0eXBlb2Ygc2NyZWVuICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRjb25zdCBhdyA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIjtcblx0XHRjb25zdCBhaCA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBsID8gYWggOiBhdyxcblx0XHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogbCA/IGF3IDogYWgsXG5cdFx0XHRcIi0tdmlldy1oZWlnaHRcIjogYCR7bGF5b3V0LmhlaWdodCB8fCBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSB8fCAwfXB4YCxcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLnZ2QmxvY2tcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogXCIxXCIsXG5cdFx0Li4udnZCbG9ja1xuXHR9O1xufTtcbnZhciBhdmFpbFNpemUgPSBnZXRBdmFpbFNpemUoKTtcbnZhciBjbGFzc2VzID0gW1tcIjpyb290LCA6aG9zdCwgOnNjb3BlXCIsIGF2YWlsU2l6ZV1dO1xudmFyIG9yaWVudGF0aW9uTnVtYmVyTWFwID0ge1xuXHRcInBvcnRyYWl0LXByaW1hcnlcIjogMCxcblx0XCJsYW5kc2NhcGUtcHJpbWFyeVwiOiAxLFxuXHRcInBvcnRyYWl0LXNlY29uZGFyeVwiOiAyLFxuXHRcImxhbmRzY2FwZS1zZWNvbmRhcnlcIjogM1xufTtcbnZhciB1cGRhdGVWUCA9IChldikgPT4ge1xuXHRjb25zdCBydWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRPYmplY3QuYXNzaWduKGF2YWlsU2l6ZSwgZ2V0QXZhaWxTaXplKCkpO1xuXHRPYmplY3QuZW50cmllcyhhdmFpbFNpemUpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFZhbHVlXSkgPT4ge1xuXHRcdGNvbnN0IGV4aXN0cyA9IHJ1bGU/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKTtcblx0XHRpZiAoIWV4aXN0cyB8fCBleGlzdHMgIT0gcHJvcFZhbHVlKSBydWxlPy5zdHlsZT8uc2V0UHJvcGVydHk/Lihwcm9wTmFtZSwgcHJvcFZhbHVlIHx8IFwiXCIsIFwiXCIpO1xuXHR9KTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRhdGlvbi1zZWNvbmRhcnlcIiwgc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZT8uZW5kc1dpdGg/LihcInNlY29uZGFyeVwiKSA/IFwiMVwiIDogXCIwXCIpO1xufTtcbnZhciBnZXRDb3JyZWN0T3JpZW50YXRpb24gPSAoKSA9PiB7XG5cdGxldCBvcmllbnRhdGlvblR5cGUgPSBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlIHx8IFwicG9ydHJhaXQtcHJpbWFyeVwiO1xuXHRpZiAoIWdsb2JhbFRoaXMubWF0Y2hNZWRpYShcIigoZGlzcGxheS1tb2RlOiBmdWxsc2NyZWVuKSBvciAoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKSBvciAoZGlzcGxheS1tb2RlOiB3aW5kb3ctY29udHJvbHMtb3ZlcmxheSkpXCIpLm1hdGNoZXMpIHtcblx0XHRpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwibGFuZHNjYXBlXCIsIFwicG9ydHJhaXRcIik7XG5cdFx0ZWxzZSBpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcInBvcnRyYWl0XCIsIFwibGFuZHNjYXBlXCIpO1xuXHR9XG5cdHJldHVybiBvcmllbnRhdGlvblR5cGU7XG59O1xudmFyIHBhc3NpdmVPcHRzJDEgPSB7IHBhc3NpdmU6IHRydWUgfTtcbnZhciBiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQgPSAoKSA9PiB7XG5cdGlmIChjYXBhY2l0b3JLZXlib2FyZEJvdW5kIHx8IHR5cGVvZiBnbG9iYWxUaGlzID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdGNvbnN0IGNhcCA9IGdsb2JhbFRoaXMuQ2FwYWNpdG9yO1xuXHRjb25zdCBLZXlib2FyZCA9IGNhcD8uUGx1Z2lucz8uS2V5Ym9hcmQ7XG5cdGlmICghS2V5Ym9hcmQ/LmFkZExpc3RlbmVyKSByZXR1cm47XG5cdGlmICh0eXBlb2YgY2FwLmlzTmF0aXZlUGxhdGZvcm0gPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FwLmlzTmF0aXZlUGxhdGZvcm0oKSkgcmV0dXJuO1xuXHRjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRLZXlib2FyZC5zZXRTY3JvbGw/Lih7IGlzRGlzYWJsZWQ6IHRydWUgfSk7XG5cdH0gY2F0Y2gge31cblx0dHJ5IHtcblx0XHRLZXlib2FyZC5zZXRSZXNpemVNb2RlPy4oeyBtb2RlOiBcIm5vbmVcIiB9KTtcblx0fSBjYXRjaCB7fVxuXHRjb25zdCBvblNob3cgPSAoaW5mbykgPT4ge1xuXHRcdGNvbnN0IG5leHQgPSBOdW1iZXIoaW5mbz8ua2V5Ym9hcmRIZWlnaHQpIHx8IDA7XG5cdFx0aWYgKG5leHQgPiAwKSBjYXBhY2l0b3JLZXlib2FyZEhlaWdodCA9IG5leHQ7XG5cdFx0dXBkYXRlVlAoKTtcblx0fTtcblx0Y29uc3Qgb25IaWRlID0gKCkgPT4ge1xuXHRcdGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gMDtcblx0XHR1cGRhdGVWUCgpO1xuXHR9O1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkV2lsbFNob3dcIiwgb25TaG93KTtcblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZERpZFNob3dcIiwgb25TaG93KTtcblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZFdpbGxIaWRlXCIsIG9uSGlkZSk7XG5cdEtleWJvYXJkLmFkZExpc3RlbmVyKFwia2V5Ym9hcmREaWRIaWRlXCIsIG9uSGlkZSk7XG59O1xudmFyIGVuc3VyZVZpZXdwb3J0VHJhY2tpbmcgPSAoKSA9PiB7XG5cdGlmICh2aWV3cG9ydFRyYWNraW5nU3RhcnRlZCB8fCB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkID0gdHJ1ZTtcblx0YmluZENhcGFjaXRvcktleWJvYXJkKCk7XG5cdHdoZW5BbnlTY3JlZW5DaGFuZ2VzKCgpID0+IHt9KTtcbn07XG52YXIgd2hlbkFueVNjcmVlbkNoYW5nZXMgPSAoY2IpID0+IHtcblx0bGV0IHRpY2tpbmcgPSBmYWxzZTtcblx0Y29uc3QgdXBkYXRlID0gKCkgPT4ge1xuXHRcdGlmICghdGlja2luZykge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRcdFx0dXBkYXRlVlAoKTtcblx0XHRcdFx0Y2IoKTtcblx0XHRcdFx0dGlja2luZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0XHR0aWNraW5nID0gdHJ1ZTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBbXTtcblx0YmluZENhcGFjaXRvcktleWJvYXJkKCk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChuYXZpZ2F0b3I/LnZpcnR1YWxLZXlib2FyZCwgXCJnZW9tZXRyeWNoYW5nZVwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdz8udmlzdWFsVmlld3BvcnQsIFwic2Nyb2xsXCIsICgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdFx0dXBkYXRlKCk7XG5cdH0sIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdz8udmlzdWFsVmlld3BvcnQsIFwicmVzaXplXCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoc2NyZWVuPy5vcmllbnRhdGlvbiwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3csIFwicmVzaXplXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCwgXCJmdWxsc2NyZWVuY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKSwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCBcImNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcImZvY3VzaW5cIiwgKCkgPT4ge1xuXHRcdGJpbmRDYXBhY2l0b3JLZXlib2FyZCgpO1xuXHRcdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0XHRpZiAoaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcblx0XHRcdGxheW91dExvY2tXID0gTWF0aC5tYXgobGF5b3V0TG9ja1csIE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMCwgTnVtYmVyKHdpbmRvdy52aXN1YWxWaWV3cG9ydD8ud2lkdGgpIHx8IDApO1xuXHRcdFx0bGF5b3V0TG9ja0ggPSBNYXRoLm1heChsYXlvdXRMb2NrSCwgTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCwgTnVtYmVyKHdpbmRvdy52aXN1YWxWaWV3cG9ydD8uaGVpZ2h0KSB8fCAwKTtcblx0XHR9XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcImZvY3Vzb3V0XCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdHVwZGF0ZSgpO1xuXHRydW5XaGVuSWRsZSgoKSA9PiB1cGRhdGUoKSwgMTAwKTtcblx0cmV0dXJuICgpID0+IHVuc3Vic2NyaWJlcnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xufTtcbnZhciBmaXhPcmllbnRUb1NjcmVlbiA9IChlbGVtZW50KSA9PiB7XG5cdGlmICghZWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucz8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKSkge1xuXHRcdGVsZW1lbnQ/LmNsYXNzTGlzdD8uYWRkPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpO1xuXHRcdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcygoKSA9PiB7XG5cdFx0XHRjb25zdCBuZXh0ID0gb3JpZW50YXRpb25OdW1iZXJNYXA/LltnZXRDb3JyZWN0T3JpZW50YXRpb24oKV0gPz8gMDtcblx0XHRcdGVsZW1lbnQub3JpZW50ID0gbmV4dDtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlPy4oXCJvcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHRcdGVsZW1lbnQuc3R5bGU/LnNldFByb3BlcnR5Py4oXCItLW9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvTWVhc3VyZS50c1xudmFyIGN0eCA9IG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIGluaXRUZXh0U3R5bGUgPSAoZWxlbWVudCwgY3R4KSA9PiB7XG5cdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBcIlwiKTtcblx0aWYgKGN0eCAmJiBzdHlsZSkge1xuXHRcdGNvbnN0IGZvbnRXZWlnaHQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC13ZWlnaHRcIikgfHwgXCJub3JtYWxcIjtcblx0XHRjb25zdCBmb250U2l6ZSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikgfHwgXCIxNnB4XCI7XG5cdFx0Y29uc3QgZm9udEZhbWlseSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWZhbWlseVwiKSB8fCBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRcdGNvbnN0IGZvbnRTdHJldGNoID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc3RyZXRjaFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFN0cmV0Y2ggPSBmb250U3RyZXRjaC5pbmNsdWRlcyhcIiVcIikgPyBcIm5vcm1hbFwiIDogZm9udFN0cmV0Y2g7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmxldHRlclNwYWNpbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibGV0dGVyLXNwYWNpbmdcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udEtlcm5pbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1rZXJuaW5nXCIpIHx8IFwiYXV0b1wiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250VmFyaWFudENhcHMgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC12YXJpYW50LWNhcHNcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udCA9IGAke2ZvbnRXZWlnaHR9ICR7Zm9udFNpemV9ICR7Zm9udEZhbWlseX1gO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cbn07XG52YXIgbWVhc3VyZVRleHQgPSAodGV4dCwgZWxlbWVudCkgPT4ge1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShlbGVtZW50LCBjdHgpO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cblx0cmV0dXJuIHsgd2lkdGg6IG51bGwgfTtcbn07XG52YXIgbWVhc3VyZUlucHV0SW5Gb2N1cyA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQudmFsdWUuc2xpY2UoMCwgaW5wdXQuc2VsZWN0aW9uRW5kIHx8IDApO1xuXHRyZXR1cm4gbWVhc3VyZVRleHQodGV4dCwgaW5wdXQpO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbiA9IChpbnB1dCwgcG9pbnQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0Py52YWx1ZSB8fCBcIlwiO1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShpbnB1dCwgY3R4KTtcblx0XHRsZXQgY3VycmVudFdpZHRoID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1cnJlbnRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0LnNsaWNlKDAsIGkpKT8ud2lkdGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoID09IG51bGwpIHJldHVybiB0ZXh0Lmxlbmd0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggIT0gbnVsbCAmJiBjdXJyZW50V2lkdGggPj0gcG9pbnRbMF0pIHJldHVybiBNYXRoLm1heChpIC0gMSwgMCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0Lmxlbmd0aDtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50ID0gKGlucHV0LCBjbGllbnQpID0+IHtcblx0Y29uc3QgYm94ID0gaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IHBvaW50ID0gW2NsaWVudFswXSAtIGJveC5sZWZ0IC8gdW5maXhlZENsaWVudFpvb20oKSwgY2xpZW50WzFdIC0gYm94LnRvcCAvIHVuZml4ZWRDbGllbnRab29tKCldO1xuXHRyZXR1cm4gY29tcHV0ZUNhcmV0UG9zaXRpb24oaW5wdXQsIHBvaW50KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9MYXVuY2hlckdyaWQudHNcbnZhciByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCA9IChlbCwgbGF5b3V0T3ZlcnJpZGUpID0+IHtcblx0Y29uc3QgYyA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1jb2x1bW5zXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgciA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1yb3dzXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgYmFzZSA9IG5vcm1hbGl6ZUdyaWRMYXlvdXQobGF5b3V0T3ZlcnJpZGUgPz8gWzQsIDhdKTtcblx0cmV0dXJuIFtOdW1iZXIuaXNGaW5pdGUoYykgJiYgYyA+IDAgPyBjIDogYmFzZVswXSwgTnVtYmVyLmlzRmluaXRlKHIpICYmIHIgPiAwID8gciA6IGJhc2VbMV1dO1xufTtcbnZhciByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQgPSAoZ3JpZFN5c3RlbSwgY2xpZW50UG9pbnQsIGFyZ3MsIG1vZGUgPSBcImZsb29yXCIpID0+IHtcblx0aWYgKCFncmlkU3lzdGVtKSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCByZWN0ID0gZ3JpZFN5c3RlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRpZiAoIXJlY3QpIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IGxheW91dCA9IHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50KGdyaWRTeXN0ZW0sIGFyZ3M/LmxheW91dCk7XG5cdGNvbnN0IG9yaWVudCA9IG9yaWVudE9mKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBjcyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBwbCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdMZWZ0KSB8fCAwO1xuXHRjb25zdCBwdCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdUb3ApIHx8IDA7XG5cdGNvbnN0IHByID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1JpZ2h0KSB8fCAwO1xuXHRjb25zdCBwYiA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdCb3R0b20pIHx8IDA7XG5cdGNvbnN0IGNvbnRlbnRXID0gTWF0aC5tYXgoMSwgKHJlY3Qud2lkdGggfHwgZ3JpZFN5c3RlbS5jbGllbnRXaWR0aCB8fCAxKSAtIHBsIC0gcHIpO1xuXHRjb25zdCBjb250ZW50SCA9IE1hdGgubWF4KDEsIChyZWN0LmhlaWdodCB8fCBncmlkU3lzdGVtLmNsaWVudEhlaWdodCB8fCAxKSAtIHB0IC0gcGIpO1xuXHRjb25zdCBjc0Nvb3JkID0gWyhjbGllbnRQb2ludD8uWzBdIHx8IDApIC0gcmVjdC5sZWZ0IC0gcGwsIChjbGllbnRQb2ludD8uWzFdIHx8IDApIC0gcmVjdC50b3AgLSBwdF07XG5cdHJldHVybiByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwoY3NDb29yZCwgW2NvbnRlbnRXLCBjb250ZW50SF0sIGxheW91dCwgb3JpZW50LCB7XG5cdFx0bW9kZSxcblx0XHRyZWRpcmVjdDoge1xuXHRcdFx0aXRlbTogYXJncz8uaXRlbSxcblx0XHRcdGxpc3Q6IGFyZ3M/Lmxpc3QsXG5cdFx0XHRpdGVtczogYXJncz8uaXRlbXNcblx0XHR9XG5cdH0pO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL0FuaW1hdGlvbi50c1xudmFyIGFuaW1hdGVTaG93ID0gKHRhcmdldCkgPT4gYXBwZWFyKHRhcmdldCwgZGVjb3JTaG93KTtcbnZhciBhbmltYXRlSGlkZSA9ICh0YXJnZXQpID0+IGRpc2FwcGVhcih0YXJnZXQsIGRlY29ySGlkZSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9kZWNvci9TaGFwZS50c1xudmFyIFdhdnlTaGFwZWRDaXJjbGUgPSAoc3RlcHMgPSAxMDAsIGFtcGxpdHVkZSA9IC4wNSwgZnJlcSA9IDgpID0+IHtcblx0Y29uc3QgcG9pbnRzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHM7IGkrKykgcG9pbnRzLnB1c2goaSAvIHN0ZXBzKTtcblx0Y29uc3QgYW5nbGUgPSAoc3RlcCkgPT4ge1xuXHRcdHJldHVybiBgY2FsYygke3N0ZXB9cmFkICogcGkgKiAyKWA7XG5cdH07XG5cdGNvbnN0IHZhcmlhbnQgPSAoc3RlcCkgPT4ge1xuXHRcdHJldHVybiBgY2FsYyhjYWxjKGNvcyhjYWxjKHZhcigtLWNsaXAtZnJlcSwgOCkgKiAke2FuZ2xlKHN0ZXApfSkpICogMC41ICsgMC41KSAqIHZhcigtLWNsaXAtYW1wbGl0dWRlLCAwKSlgO1xuXHR9O1xuXHRjb25zdCBmdW5jID0gKHN0ZXApID0+IFtgY2FsYyhjYWxjKDAuNSArIGNhbGMoY29zKCR7YW5nbGUoc3RlcCl9KSAqIGNhbGMoMC41IC0gJHt2YXJpYW50KHN0ZXApfSkpKSAqIHZhcigtLWljb24tc2l6ZSwgMTAwJSkpYCwgYGNhbGMoY2FsYygwLjUgKyBjYWxjKHNpbigke2FuZ2xlKHN0ZXApfSkgKiBjYWxjKDAuNSAtICR7dmFyaWFudChzdGVwKX0pKSkgKiB2YXIoLS1pY29uLXNpemUsIDEwMCUpKWBdO1xuXHRyZXR1cm4ge1xuXHRcdFwiLS1jbGlwLWFtcGxpdHVkZVwiOiBhbXBsaXR1ZGUsXG5cdFx0XCItLWNsaXAtZnJlcVwiOiBmcmVxLFxuXHRcdFwiLS1jbGlwLXBhdGhcIjogYHBvbHlnb24oJHtwb2ludHMubWFwKChzdGVwKSA9PiB7XG5cdFx0XHRyZXR1cm4gZnVuYyhzdGVwKS5qb2luKFwiIFwiKTtcblx0XHR9KS5qb2luKFwiLCBcIil9KWBcblx0fTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9PYnNlcnZlci50c1xudmFyIG9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xudmFyIG9uQm9yZGVyT2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkJvcmRlck9ic2VydmVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkNvbnRlbnRPYnNlcnZlXCIpO1xudmFyIG9uQ29udGVudE9ic2VydmUkMSA9IGdsb2JhbFRoaXNbb25Db250ZW50T2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVud3JhcEZyb21RdWVyeSA9IChlbGVtZW50KSA9PiB7XG5cdGlmICh0eXBlb2YgZWxlbWVudD8uY3VycmVudCA9PSBcIm9iamVjdFwiKSBlbGVtZW50ID0gZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50Py5jdXJyZW50ID8/ICh0eXBlb2YgZWxlbWVudD8uc2VsZiA9PSBcIm9iamVjdFwiID8gZWxlbWVudD8uc2VsZiA6IG51bGwpID8/IGVsZW1lbnQ7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBub3JtYWxpemVTZWxlY3RvciA9IChzZWxlY3RvciwgZmFsbGJhY2sgPSBcIipcIikgPT4ge1xuXHRpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsbGJhY2s7XG5cdHJldHVybiBzZWxlY3Rvci50cmltKCkgfHwgZmFsbGJhY2s7XG59O1xudmFyIHNhZmVRdWVyeVNlbGVjdG9yQWxsID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuXHRpZiAoIWVsIHx8IHR5cGVvZiBlbC5xdWVyeVNlbGVjdG9yQWxsICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBbXTtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IsIFwiXCIpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIFtdO1xuXHR0cnkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSB8fCBbXSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBbXTtcblx0fVxufTtcbnZhciBzYWZlTWF0Y2hlcyA9IChlbCwgc2VsZWN0b3IpID0+IHtcblx0aWYgKCFlbCB8fCB0eXBlb2YgZWwubWF0Y2hlcyAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLCBcIlwiKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gISFlbC5tYXRjaGVzKHNlbCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBvYnNlcnZlQ29udGVudEJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQ29udGVudE9ic2VydmUkMS5oYXMoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSkpIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgY29udGVudEJveFNpemUgPSBlbnRyeS5jb250ZW50Qm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGNvbnRlbnRCb3hTaXplKSBjYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiPy4oY29udGVudEJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50LmNsaWVudFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50LmNsaWVudEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkNvbnRlbnRPYnNlcnZlJDEuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG5cdFx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImNvbnRlbnQtYm94XCIgfSk7XG5cdH1cblx0b25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uc3BsaWNlPy4ob25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uaW5kZXhPZihjYikgfHwgLTEsIDEpIH07XG59O1xudmFyIG9ic2VydmVCb3JkZXJCb3ggPSAoZWxlbWVudCwgY2IpID0+IHtcblx0aWYgKCFvbkJvcmRlck9ic2VydmUkMS5oYXMoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSkpIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihib3JkZXJCb3hTaXplLCBvYnNlcnZlcikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNiPy4oe1xuXHRcdFx0aW5saW5lU2l6ZTogZWxlbWVudC5vZmZzZXRXaWR0aCxcblx0XHRcdGJsb2NrU2l6ZTogZWxlbWVudC5vZmZzZXRIZWlnaHRcblx0XHR9LCBvYnNlcnZlcik7XG5cdFx0b25Cb3JkZXJPYnNlcnZlJDEuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG5cdFx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxuXHRvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnB1c2g/LihjYik7XG5cdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uc3BsaWNlPy4ob25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZSA9IChlbGVtZW50LCBhdHRyaWJ1dGUsIGNiKSA9PiB7XG5cdGlmICh0eXBlb2YgZWxlbWVudD8uc2VsZWN0b3IgPT0gXCJzdHJpbmdcIikgcmV0dXJuIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKGVsZW1lbnQsIGVsZW1lbnQ/LnNlbGVjdG9yLCBhdHRyaWJ1dGUsIGNiKTtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoKGF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV0pLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSAmJiBhdHRyaWJ1dGVMaXN0LmhhcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkgY2IobXV0YXRpb24sIG9ic2VydmVyKTtcblx0fSk7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uYXR0cmlidXRlTGlzdF1cblx0fSk7XG5cdGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0OiBlbGVtZW50LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yLCBhdHRyaWJ1dGUsIGNiKSA9PiB7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoWy4uLmF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV1dLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRjb25zdCBhZGRlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGFkZGVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdFx0cmVtb3ZlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdFx0Wy4uLm5ldyBTZXQoYWRkZWROb2RlcyldLmZpbHRlcigoZWwpID0+IHNhZmVNYXRjaGVzKGVsLCBzZWwpKT8ubWFwPy4oKHRhcmdldCkgPT4ge1xuXHRcdFx0XHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuXHRcdFx0XHRcdGNiKHtcblx0XHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHRcdFx0XHRcdH0sIG9ic2VydmVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKHNhZmVNYXRjaGVzKG11dGF0aW9uLnRhcmdldCwgc2VsKSAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlXG5cdH0pO1xuXHRzYWZlUXVlcnlTZWxlY3RvckFsbChlbGVtZW50LCBzZWwpLm1hcCgodGFyZ2V0KSA9PiBhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gY2Ioe1xuXHRcdHRhcmdldCxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcbnZhciBvYnNlcnZlQnlTZWxlY3RvciA9IChlbGVtZW50LCBzZWxlY3RvciA9IFwiKlwiLCBjYiA9IChtdXQsIG9icykgPT4ge30pID0+IHtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRjb25zdCB1bndyYXBOb2Rlc0J5U2VsZWN0b3IgPSAobm9kZXMpID0+IHtcblx0XHRjb25zdCAkbm9kZXMgPSBBcnJheS5mcm9tKG5vZGVzIHx8IFtdKSB8fCBbXTtcblx0XHQkbm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRyZXR1cm4gWy4uLkFycmF5LmZyb20obmV3IFNldCgkbm9kZXMpLnZhbHVlcygpKV0uZmlsdGVyKChlbCkgPT4gc2FmZU1hdGNoZXMoZWwsIHNlbCkpO1xuXHR9O1xuXHRsZXQgb2JSZWYgPSBudWxsO1xuXHRjb25zdCBoYW5kbGVNdXRhdGlvbiA9IChtdXRhdGlvbikgPT4ge1xuXHRcdGNvbnN0IG9ic2VydmVyID0gb2JSZWY/LmRlcmVmPy4oKTtcblx0XHRjb25zdCBhZGRlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuXHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuXHRcdGlmIChhZGRlZE5vZGVzLmxlbmd0aCA+IDAgfHwgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdFx0dHlwZTogbXV0YXRpb24udHlwZSxcblx0XHRcdHRhcmdldDogbXV0YXRpb24udGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IG11dGF0aW9uLm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IG11dGF0aW9uLm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiBtdXRhdGlvbi5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzLFxuXHRcdFx0cmVtb3ZlZE5vZGVzXG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlT3V0Q29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUZvY3VzQ2xpY2sgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBmYWN0b3JzID0ge1xuXHRcdHBhc3NpdmU6IHRydWUsXG5cdFx0Y2FwdHVyZTogZmFsc2Vcblx0fTtcblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXNcIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtdmlzaWJsZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikgaGFuZGxlTXV0YXRpb24obXV0YXRpb24pO1xuXHR9KTtcblx0b2JSZWYgPSBuZXcgV2Vha1JlZihvYnNlcnZlcik7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlXG5cdH0pO1xuXHRjb25zdCBzZWxlY3RlZCA9IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQsIHNlbCk7XG5cdGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSBjYj8uKHtcblx0XHRhZGRlZE5vZGVzOiBzZWxlY3RlZCxcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIG9ic2VydmVyKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0JlaGF2aW9yLnRzXG52YXIgYm91bmRCZWhhdmlvcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiaW5kQmVoYXZpb3IgPSAoZWxlbWVudCwgYmVoU2V0LCBiZWhhdmlvcikgPT4ge1xuXHRuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFiZWhTZXQuaGFzKGJlaGF2aW9yKSkgYmVoU2V0LmFkZChiZWhhdmlvcik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciByZWZsZWN0QmVoYXZpb3JzID0gKGVsZW1lbnQsIGJlaGF2aW9ycykgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0aWYgKGJlaGF2aW9ycykge1xuXHRcdGNvbnN0IGJlaFNldCA9IGJvdW5kQmVoYXZpb3JzLmdldE9ySW5zZXJ0KGVsZW1lbnQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuXHRcdFsuLi5iZWhhdmlvcnM/LnZhbHVlcz8uKCkgfHwgW11dLm1hcCgoZSkgPT4gYmluZEJlaGF2aW9yKGVsZW1lbnQsIGJlaFNldCwgZSkpO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL1N0b3JlLnRzXG52YXIgbmFtZWRTdG9yZU1hcHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG5hbWVkU3RvcmVNYXBzXCIpO1xudmFyIG5hbWVkU3RvcmVNYXBzID0gZ2xvYmFsVGhpc1tuYW1lZFN0b3JlTWFwc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZ2V0U3RvcmVzT2ZFbGVtZW50ID0gKG1hcCwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCBFID0gWy4uLm1hcC5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChFPy5tYXA/LigoW24sIG1dKSA9PiBbbiwgbT8uZ2V0Py4oZWxlbWVudCldKT8uZmlsdGVyPy4oKFtuLCBlXSkgPT4gISFlKSB8fCBbXSk7XG59O1xudmFyIGlzV2Vha0NvbXBhdGlibGUgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKHR5cGVvZiBlbGVtZW50ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGVsZW1lbnQgPT0gXCJmdW5jdGlvblwiKSAmJiBlbGVtZW50ICE9IG51bGw7XG59O1xudmFyIGJpbmRTdG9yZSA9IChlbGVtZW50LCBuYW1lLCBvYmopID0+IHtcblx0aWYgKCFpc1dlYWtDb21wYXRpYmxlKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgcmV0dXJuIGVsZW1lbnQ7XG5cdGxldCB3ZWFrTWFwID0gbmFtZWRTdG9yZU1hcHMuZ2V0KG5hbWUpO1xuXHRpZiAoIXdlYWtNYXApIHtcblx0XHR3ZWFrTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdFx0bmFtZWRTdG9yZU1hcHMuc2V0KG5hbWUsIHdlYWtNYXApO1xuXHR9XG5cdGlmICghd2Vha01hcC5oYXMoZWxlbWVudCkgJiYgZWxlbWVudCAhPSBudWxsKSB3ZWFrTWFwLnNldChlbGVtZW50LCBvYmopO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdFN0b3JlcyA9IChlbGVtZW50LCBzdG9yZXMpID0+IHtcblx0aWYgKCFlbGVtZW50IHx8ICFzdG9yZXMpIHJldHVybjtcblx0Zm9yIChjb25zdCBbbmFtZSwgb2JqXSBvZiBzdG9yZXMuZW50cmllcygpKSBiaW5kU3RvcmUoZWxlbWVudCwgbmFtZSwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vTWl4aW5zLnRzXG52YXIgcmVmbGVjdE1peGlucyA9IChlbGVtZW50LCBtaXhpbnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChtaXhpbnMpIHtcblx0XHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRcdGlmICghYm91bmRNaXhpblNldD8uaGFzPy4oZWxlbWVudCkpIGJvdW5kTWl4aW5TZXQ/LnNldD8uKGVsZW1lbnQsIG1peGluU2V0KTtcblx0XHRbLi4ubWl4aW5zPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRNaXhpbnMoZWxlbWVudCwgZSwgbWl4aW5TZXQpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgZ2V0RWxlbWVudFJlbGF0ZWQgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHN0b3JlU2V0OiBnZXRTdG9yZXNPZkVsZW1lbnQobmFtZWRTdG9yZU1hcHMsIGVsZW1lbnQpLFxuXHRcdG1peGluU2V0OiBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSxcblx0XHRiZWhhdmlvclNldDogYm91bmRCZWhhdmlvcnM/LmdldD8uKGVsZW1lbnQpXG5cdH07XG59O1xudmFyIGJpbmRNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW4sIG1peFNldCkgPT4ge1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0bWl4U2V0IHx8PSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KTtcblx0aWYgKCFtaXhTZXQ/Lmhhcz8uKG1peGluKSkge1xuXHRcdG1peFNldD8uYWRkPy4obWl4aW4pO1xuXHRcdG1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uYWRkPy4oZWxlbWVudCk7XG5cdFx0aWYgKG1peGluLm5hbWUpIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXSwgbWl4aW4ubmFtZV0uZmlsdGVyKChuKSA9PiAhIW4pLmpvaW4oXCIgXCIpKTtcblx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgYm91bmRNaXhpblNldFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBib3VuZE1peGluU2V0ID0gZ2xvYmFsVGhpc1tib3VuZE1peGluU2V0U3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbWl4aW5FbGVtZW50c1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5FbGVtZW50c1wiKTtcbnZhciBtaXhpbkVsZW1lbnRzID0gZ2xvYmFsVGhpc1ttaXhpbkVsZW1lbnRzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbWl4aW5SZWdpc3RyeVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5SZWdpc3RyeVwiKTtcbnZhciBtaXhpblJlZ2lzdHJ5ID0gZ2xvYmFsVGhpc1ttaXhpblJlZ2lzdHJ5U3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBtaXhpbk5hbWVzcGFjZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5OYW1lc3BhY2VcIik7XG52YXIgbWl4aW5OYW1lc3BhY2UgPSBnbG9iYWxUaGlzW21peGluTmFtZXNwYWNlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzID0gKGVsZW1lbnQsIG1peGluKSA9PiB7XG5cdGlmICh0eXBlb2YgbWl4aW4gPT0gXCJzdHJpbmdcIikgbWl4aW4gPSBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihtaXhpbik7XG5cdGNvbnN0IG5hbWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Y29uc3QgbWl4aW5zID0gbmV3IFNldChbLi4ubmFtZXNdLm1hcCgobikgPT4gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obikpLmZpbHRlcigobSkgPT4gISFtKSk7XG5cdGNvbnN0IG1peGluU2V0ID0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdGlmICghbWl4aW5FbGVtZW50cz8uaGFzPy4obWl4aW4pKSBtaXhpbkVsZW1lbnRzPy5zZXQ/LihtaXhpbiwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpO1xuXHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdGNvbnN0IHdlbCA9IG5ldyBXZWFrUmVmKGVsZW1lbnQpO1xuXHRpZiAoIW1peGluU2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRpZiAoIW1peGlucy5oYXMobWl4aW4pKSBtaXhpbj8uZGlzY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRpZiAobWl4aW5zLmhhcyhtaXhpbikgfHwgIW1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uaGFzPy4oZWxlbWVudCkpIHtcblx0XHRcdG1peGluPy5jb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdFx0bmFtZXMuYWRkKG1peGluTmFtZXNwYWNlPy5nZXQ/LihtaXhpbikpO1xuXHRcdFx0bWl4aW5TZXQ/LmFkZD8uKG1peGluKTtcblx0XHRcdGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubmFtZXNdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0fVxuXHRcdG1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uYWRkPy4oZWxlbWVudCk7XG5cdH1cblx0aWYgKG1peGluU2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRpZiAoIW1peGlucy5oYXMobWl4aW4pKSB7XG5cdFx0XHRtaXhpblNldD8uZGVsZXRlPy4obWl4aW4pO1xuXHRcdFx0bWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIHJvb3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBhZGRSb290ID0gKHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbCkgPT4ge1xuXHRpZiAoIXJvb3QpIHJldHVybjtcblx0aWYgKCFyb290cz8uaGFzPy4ocm9vdCkpIHtcblx0XHRyb290cz8uYWRkPy4ocm9vdCk7XG5cdFx0b2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3Iocm9vdCwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAobXV0YXRpb24pID0+IHVwZGF0ZUFsbE1peGlucyhtdXRhdGlvbi50YXJnZXQpKTtcblx0XHRvYnNlcnZlQnlTZWxlY3Rvcihyb290LCBcIltkYXRhLW1peGluXVwiLCAobXV0YXRpb24pID0+IHtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0b2JzZXJ2ZVN0eWxlVHJlZShyb290KTtcblx0fVxuXHRyZXR1cm4gcm9vdDtcbn07XG52YXIgdXBkYXRlQWxsTWl4aW5zID0gKGVsZW1lbnQpID0+IHtcblx0Y29uc3QgbmFtZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pO1xuXHRbLi4ubmV3IFNldChbLi4ubmFtZXNdLm1hcCgobikgPT4gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obikpLmZpbHRlcigobSkgPT4gISFtKSldLm1hcD8uKChtKSA9PiB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZWxlbWVudCwgbSkpO1xufTtcbnZhciB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwgPSAoZWxlbWVudHMsIG1peGluKSA9PiB7XG5cdGVsZW1lbnRzLmZvckVhY2goKGUpID0+IG1peGluID8gdXBkYXRlTWl4aW5BdHRyaWJ1dGVzKGUsIG1peGluKSA6IHVwZGF0ZUFsbE1peGlucyhlKSk7XG59O1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMgPSAobWl4aW4pID0+IHtcblx0Zm9yIChjb25zdCByb290IG9mIHJvb3RzKSB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwocm9vdD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBtaXhpbik7XG59O1xudmFyIG5hbWVSZWdpc3RyeUYgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGtleSkgPT4ge1xuXHRtaXhpblJlZ2lzdHJ5Py5kZWxldGU/LihrZXkpO1xufSk7XG52YXIgcmVnaXN0ZXJNaXhpbiA9IChuYW1lLCBtaXhpbikgPT4ge1xuXHRpZiAoIW1peGluTmFtZXNwYWNlPy5oYXM/LihtaXhpbikpIHtcblx0XHRjb25zdCBrZXkgPSBuYW1lPy50cmltPy4oKTtcblx0XHRpZiAoa2V5KSB7XG5cdFx0XHRtaXhpbk5hbWVzcGFjZT8uc2V0Py4obWl4aW4sIGtleSk7XG5cdFx0XHRtaXhpblJlZ2lzdHJ5Py5zZXQ/LihrZXksIG1peGluKTtcblx0XHRcdG5hbWVSZWdpc3RyeUY/LnJlZ2lzdGVyPy4obWl4aW4sIGtleSk7XG5cdFx0XHR1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzKG1peGluKTtcblx0XHR9XG5cdH1cbn07XG5hZGRSb290KHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciBET01NaXhpbiA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IobmFtZSA9IG51bGwpIHtcblx0XHRpZiAobmFtZSkgcmVnaXN0ZXJNaXhpbihuYW1lLCB0aGlzKTtcblx0fVxuXHRjb25uZWN0KHdFbGVtZW50LCB3U2VsZiwgcmVsYXRlZCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsZW1lbnQsIHdTZWxmLCByZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c3RvcmVGb3JFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gbmFtZWRTdG9yZU1hcHMuZ2V0KHRoaXMubmFtZSB8fCBcIlwiKT8uZ2V0Py4oZWxlbWVudCk7XG5cdH1cblx0cmVsYXRlZEZvckVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KTtcblx0fVxuXHRnZXQgZWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIG1peGluRWxlbWVudHM/LmdldD8uKHRoaXMpO1xuXHR9XG5cdGdldCBzdG9yYWdlKCkge1xuXHRcdHJldHVybiBuYW1lZFN0b3JlTWFwcz8uZ2V0Py4odGhpcy5uYW1lIHx8IFwiXCIpO1xuXHR9XG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBtaXhpbk5hbWVzcGFjZT8uZ2V0Py4odGhpcyk7XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9IYW5kbGVyLnRzXG52YXIgaGFuZGxlSGlkZGVuID0gKGVsZW1lbnQsIF8sIHZpc2libGUpID0+IHtcblx0Y29uc3QgJHJlZiA9IHZpc2libGU7XG5cdGlmIChoYXNWYWx1ZSh2aXNpYmxlKSkgdmlzaWJsZSA9IHZpc2libGUudmFsdWU7XG5cdGNvbnN0IGlzVmlzaWJsZSA9ICh2aXNpYmxlID0gbm9ybWFsaXplUHJpbWl0aXZlKHZpc2libGUpKSAhPSBudWxsICYmIHZpc2libGUgIT09IGZhbHNlO1xuXHQkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIGVsZW1lbnQuaGlkZGVuID0gIWlzVmlzaWJsZTtcblx0XHRlbHNlIGlmIChpc1Zpc2libGUpIGVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIik7XG5cdFx0ZWxzZSBlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIsIFwiXCIpO1xuXHR9KTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGhhbmRsZVByb3BlcnR5ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCEocHJvcCA9IHR5cGVvZiBwcm9wID09IFwic3RyaW5nXCIgPyBrZWJhYlRvQ2FtZWwocHJvcCkgOiBwcm9wKSB8fCAhZWwgfHwgW1xuXHRcdFwic3R5bGVcIixcblx0XHRcImRhdGFzZXRcIixcblx0XHRcImF0dHJpYnV0ZVN0eWxlTWFwXCIsXG5cdFx0XCJzdHlsZU1hcFwiLFxuXHRcdFwiY29tcHV0ZWRTdHlsZU1hcFwiXG5cdF0uaW5kZXhPZihwcm9wIHx8IFwiXCIpICE9IC0xKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWwudmFsdWU7XG5cdGlmIChlbD8uW3Byb3BdID09PSB2YWwpIHJldHVybiBlbDtcblx0aWYgKGVsPy5bcHJvcF0gIT09IHZhbCkgJGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHZhbCAhPSBudWxsKSBlbFtwcm9wXSA9IHZhbDtcblx0XHRlbHNlIGRlbGV0ZSBlbFtwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlRGF0YXNldCA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IGRhdGFzZXRSZWYgPSBlbD8uZGF0YXNldDtcblx0aWYgKCFwcm9wIHx8ICFlbCB8fCAhZGF0YXNldFJlZikgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsPy52YWx1ZTtcblx0cHJvcCA9IGtlYmFiVG9DYW1lbChwcm9wKTtcblx0aWYgKGRhdGFzZXRSZWY/Lltwcm9wXSA9PT0gKHZhbCA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2YWwpKSkgcmV0dXJuIGVsO1xuXHRpZiAodmFsID09IG51bGwgfHwgdmFsID09PSBmYWxzZSkgZGVsZXRlIGRhdGFzZXRSZWZbcHJvcF07XG5cdGVsc2UgJGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB2YWwgIT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsICE9IFwiZnVuY3Rpb25cIikgZGF0YXNldFJlZltwcm9wXSA9IFN0cmluZyh2YWwpO1xuXHRcdGVsc2UgZGVsZXRlIGRhdGFzZXRSZWZbcHJvcF07XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGRlbGV0ZVN0eWxlUHJvcGVydHkgPSAoZWwsIG5hbWUpID0+IGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KGNhbWVsVG9LZWJhYihuYW1lKSk7XG52YXIgaGFuZGxlU3R5bGVDaGFuZ2UgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRjb25zdCBzdHlsZVJlZiA9IGVsPy5zdHlsZTtcblx0aWYgKCFwcm9wIHx8IHR5cGVvZiBwcm9wICE9IFwic3RyaW5nXCIgfHwgIWVsIHx8ICFzdHlsZVJlZikgcmV0dXJuIGVsO1xuXHQkYXZvaWRUcmlnZ2VyKHZhbCwgKCkgPT4ge1xuXHRcdGlmIChpc1ZhbCh2YWwpIHx8IGhhc1ZhbHVlKHZhbCkgfHwgaXNWYWx1ZVVuaXQodmFsKSkgc2V0U3R5bGVQcm9wZXJ0eShlbCwgcHJvcCwgdmFsKTtcblx0XHRlbHNlIGlmICh2YWwgPT0gbnVsbCkgZGVsZXRlU3R5bGVQcm9wZXJ0eShlbCwgcHJvcCk7XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGhhbmRsZUF0dHJpYnV0ZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGlmICghcHJvcCB8fCAhZWwpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0cHJvcCA9IGNhbWVsVG9LZWJhYihwcm9wKTtcblx0aWYgKGVsPy5nZXRBdHRyaWJ1dGU/Lihwcm9wKSA9PT0gKHZhbCA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2YWwpKSkgcmV0dXJuIGVsO1xuXHQkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiICYmIHZhbCAhPSBudWxsICYmICh0eXBlb2YgdmFsID09IFwiYm9vbGVhblwiID8gdmFsID09IHRydWUgOiB0cnVlKSkgZWw/LnNldEF0dHJpYnV0ZT8uKHByb3AsIFN0cmluZyh2YWwpKTtcblx0XHRlbHNlIGVsPy5yZW1vdmVBdHRyaWJ1dGU/Lihwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9qdW5jdGlvbi90eXBlcy50c1xuZnVuY3Rpb24ganVuY3Rpb25Ub0JveChhLCBiKSB7XG5cdGNvbnN0IGxlZnQgPSBNYXRoLm1pbihhLngsIGIueCk7XG5cdGNvbnN0IHRvcCA9IE1hdGgubWluKGEueSwgYi55KTtcblx0Y29uc3QgcmlnaHQgPSBNYXRoLm1heChhLngsIGIueCk7XG5cdGNvbnN0IGJvdHRvbSA9IE1hdGgubWF4KGEueSwgYi55KTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGg6IHJpZ2h0IC0gbGVmdCxcblx0XHRoZWlnaHQ6IGJvdHRvbSAtIHRvcFxuXHR9O1xufVxudmFyIEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgSlVOQ1RJT05fRFJBR19FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgSlVOQ1RJT05fUkVTSVpFX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tcmVzaXplOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tcmVzaXplOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXJlc2l6ZTplbmRcIlxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL2p1bmN0aW9uL0p1bmN0aW9uTWl4aW5zLnRzXG52YXIgbWl4aW5EaXNwb3NlcnNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRGlzcG9zZXJzXCIpO1xudmFyIG1peGluRGlzcG9zZXJzID0gZ2xvYmFsVGhpc1ttaXhpbkRpc3Bvc2Vyc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHB1c2hEaXNwb3NhYmxlID0gKGhvc3QsIG1peGluTmFtZSwgZm4pID0+IHtcblx0Y29uc3QgbWFwID0gbWl4aW5EaXNwb3NlcnMuZ2V0KGhvc3QpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGNvbnN0IGxpc3QgPSBtYXAuZ2V0KG1peGluTmFtZSkgPz8gW107XG5cdGxpc3QucHVzaChmbik7XG5cdG1hcC5zZXQobWl4aW5OYW1lLCBsaXN0KTtcblx0bWl4aW5EaXNwb3NlcnMuc2V0KGhvc3QsIG1hcCk7XG59O1xudmFyIHJ1bkRpc3Bvc2VycyA9IChob3N0LCBtaXhpbk5hbWUpID0+IHtcblx0Y29uc3QgbWFwID0gbWl4aW5EaXNwb3NlcnMuZ2V0KGhvc3QpO1xuXHRjb25zdCBsaXN0ID0gbWFwPy5nZXQobWl4aW5OYW1lKTtcblx0aWYgKCFsaXN0KSByZXR1cm47XG5cdGZvciAoY29uc3QgZm4gb2YgbGlzdCkgdHJ5IHtcblx0XHRmbigpO1xuXHR9IGNhdGNoIHt9XG5cdG1hcC5kZWxldGUobWl4aW5OYW1lKTtcblx0aWYgKG1hcC5zaXplID09PSAwKSBtaXhpbkRpc3Bvc2Vycy5kZWxldGUoaG9zdCk7XG59O1xudmFyIHBhcnNlUHhWYXIgPSAoaG9zdCwgbmFtZSkgPT4ge1xuXHRjb25zdCByYXcgPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lihob3N0KT8uZ2V0UHJvcGVydHlWYWx1ZT8uKG5hbWUpPy50cmltPy4oKSA/PyBcIlwiO1xuXHRjb25zdCBuID0gcGFyc2VGbG9hdChyYXcpO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IDA7XG59O1xudmFyIHF1ZXJ5SGFuZGxlID0gKGhvc3QsIGF0dHIsIGZhbGxiYWNrKSA9PiB7XG5cdGNvbnN0IHNlbCA9IGhvc3QuZ2V0QXR0cmlidXRlKGF0dHIpPy50cmltKCk7XG5cdGlmICghc2VsKSByZXR1cm4gZmFsbGJhY2s7XG5cdGNvbnN0IGZvdW5kID0gaG9zdC5xdWVyeVNlbGVjdG9yKHNlbCk7XG5cdHJldHVybiBmb3VuZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZm91bmQgOiBmYWxsYmFjaztcbn07XG52YXIgSnVuY3Rpb25TZWxlY3RNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG92ZXJsYXkuY2xhc3NOYW1lID0gXCJ1aS1qdW5jdGlvbi1zZWxlY3Qtb3ZlcmxheVwiO1xuXHRcdG92ZXJsYXkuc2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1vdmVybGF5XCIsIFwiXCIpO1xuXHRcdG92ZXJsYXkuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OnZhcigtLXotbWF4LCA5OTk5KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNWE3ZmZmKSA3MCUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kOmNvbG9yLW1peChpbiBva2xhYiwgdmFyKC0tY29sb3ItcHJpbWFyeSwgIzVhN2ZmZikgMTQlLCB0cmFuc3BhcmVudCk7ZGlzcGxheTpub25lO2luc2V0OmF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowO1wiO1xuXHRcdGNvbnN0IGVuc3VyZVBvc2l0aW9uZWQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoKGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpKT8ucG9zaXRpb24gPT09IFwic3RhdGljXCIpIGhvc3Quc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fTtcblx0XHRlbnN1cmVQb3NpdGlvbmVkKCk7XG5cdFx0aG9zdC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblx0XHRsZXQgYWN0aXZlID0gZmFsc2U7XG5cdFx0bGV0IGEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0bGV0IGIgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0Y29uc3QgbG9jYWxQb2ludCA9IChldikgPT4ge1xuXHRcdFx0Y29uc3QgciA9IGhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBldi5jbGllbnRYIC0gci5sZWZ0LFxuXHRcdFx0XHR5OiBldi5jbGllbnRZIC0gci50b3Bcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBhcHBseU92ZXJsYXkgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aWYgKGJveC53aWR0aCA8IDEgJiYgYm94LmhlaWdodCA8IDEpIHtcblx0XHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdG92ZXJsYXkuc3R5bGUubGVmdCA9IGAke2JveC5sZWZ0fXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUudG9wID0gYCR7Ym94LnRvcH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLndpZHRoID0gYCR7Ym94LndpZHRofXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7Ym94LmhlaWdodH1weGA7XG5cdFx0fTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLWp1bmN0aW9uLWlnbm9yZS1zZWxlY3RdLCBbZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZV0sIFtkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVdLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKSByZXR1cm47XG5cdFx0XHRpZiAoIShldi50YXJnZXQgPT09IGhvc3QgfHwgaG9zdC5jb250YWlucyhldi50YXJnZXQpKSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdGEgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGIgPSB7IC4uLmEgfTtcblx0XHRcdGhvc3Quc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YiA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3QgZW5kID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGVuZChldik7XG5cdFx0fTtcblx0XHRjb25zdCBvbkNhbmNlbCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmNhbmNlbCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHsgaG9zdCB9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRvdmVybGF5LnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVyY2FuY2VsXCIsIG9uQ2FuY2VsKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvbkRyYWdNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpKTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXlcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpKTtcblx0XHRjb25zdCBwcmV2aW91c1RyYW5zZm9ybSA9IGhvc3Quc3R5bGUudHJhbnNmb3JtO1xuXHRcdGlmICghaG9zdC5zdHlsZS50cmFuc2Zvcm0gfHwgaG9zdC5zdHlsZS50cmFuc2Zvcm0gPT09IFwibm9uZVwiKSBob3N0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoY2FsYyh2YXIoLS1qeC1kcmFnLXgsIDApICogMXB4KSwgY2FsYyh2YXIoLS1qeC1kcmFnLXksIDApICogMXB4KSwgMClcIjtcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IGRyYWdnaW5nID0gZmFsc2U7XG5cdFx0bGV0IHN0YXJ0WCA9IDA7XG5cdFx0bGV0IHN0YXJ0WSA9IDA7XG5cdFx0bGV0IGJhc2VYID0gMDtcblx0XHRsZXQgYmFzZVkgPSAwO1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldCAhPT0gaGFuZGxlICYmICFoYW5kbGUuY29udGFpbnMoZXYudGFyZ2V0KSkgcmV0dXJuO1xuXHRcdFx0ZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0c3RhcnRYID0gZXYuY2xpZW50WDtcblx0XHRcdHN0YXJ0WSA9IGV2LmNsaWVudFk7XG5cdFx0XHRiYXNlWCA9IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKTtcblx0XHRcdGJhc2VZID0gcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpO1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0Y2xpZW50WDogZXYuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiBldi5jbGllbnRZLFxuXHRcdFx0XHRcdGJhc2VYLFxuXHRcdFx0XHRcdGJhc2VZXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFkcmFnZ2luZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgZHggPSBldi5jbGllbnRYIC0gc3RhcnRYO1xuXHRcdFx0Y29uc3QgZHkgPSBldi5jbGllbnRZIC0gc3RhcnRZO1xuXHRcdFx0Y29uc3QgbnggPSBiYXNlWCArIGR4O1xuXHRcdFx0Y29uc3QgbnkgPSBiYXNlWSArIGR5O1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy14XCIsIG54KTtcblx0XHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBueSk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRkeCxcblx0XHRcdFx0XHRkeSxcblx0XHRcdFx0XHR4OiBueCxcblx0XHRcdFx0XHR5OiBueVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR4OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIiksXG5cdFx0XHRcdFx0eTogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCAoKSA9PiB7XG5cdFx0XHRob3N0LnN0eWxlLnRyYW5zZm9ybSA9IHByZXZpb3VzVHJhbnNmb3JtO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvblJlc2l6ZU1peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0bGV0IHN4ID0gMDtcblx0XHRsZXQgc3kgPSAwO1xuXHRcdGxldCBzdyA9IDA7XG5cdFx0bGV0IHNoID0gMDtcblx0XHRjb25zdCBtaW5XID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KGhvc3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKTtcblx0XHRjb25zdCBtaW5IID0gTWF0aC5tYXgoODAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4taFwiKSB8fCBcIlwiKSB8fCA4MCk7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IHRydWU7XG5cdFx0XHRzeCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzeSA9IGV2LmNsaWVudFk7XG5cdFx0XHRzdyA9IGhvc3Qub2Zmc2V0V2lkdGg7XG5cdFx0XHRzaCA9IGhvc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogc3csXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IG53ID0gTWF0aC5tYXgobWluVywgc3cgKyAoZXYuY2xpZW50WCAtIHN4KSk7XG5cdFx0XHRjb25zdCBuaCA9IE1hdGgubWF4KG1pbkgsIHNoICsgKGV2LmNsaWVudFkgLSBzeSkpO1xuXHRcdFx0aG9zdC5zdHlsZS53aWR0aCA9IGAke253fXB4YDtcblx0XHRcdGhvc3Quc3R5bGUuaGVpZ2h0ID0gYCR7bmh9cHhgO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogbncsXG5cdFx0XHRcdFx0aGVpZ2h0OiBuaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIXJlc2l6aW5nKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBob3N0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogaG9zdC5vZmZzZXRIZWlnaHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmNhbmNlbFwiLCBvblVwKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbm5ldyBKdW5jdGlvblNlbGVjdE1peGluKCk7XG5uZXcgSnVuY3Rpb25EcmFnTWl4aW4oKTtcbm5ldyBKdW5jdGlvblJlc2l6ZU1peGluKCk7XG5cbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgRE9NTWl4aW4sIEp1bmN0aW9uRHJhZ01peGluLCBKdW5jdGlvblJlc2l6ZU1peGluLCBKdW5jdGlvblNlbGVjdE1peGluLCBNQVRDSCwgTU9DLCBNT0NFbGVtZW50LCBSQUZCZWhhdmlvciwgUkVHRVgsIFJPT1QsIFdhdnlTaGFwZWRDaXJjbGUsIF9fZXhwb3J0UHJvcGVydGllcywgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcywgYWRkRXZlbnQsIGFkZEV2ZW50cywgYWRkRXZlbnRzTGlzdCwgYWRkUm9vdCwgYW5pbWF0ZUhpZGUsIGFuaW1hdGVTaG93LCBhdmFpbFNpemUsIGJiaCwgYmJ3LCBiaW5kQmVoYXZpb3IsIGJpbmRNaXhpbnMsIGJpbmRTdG9yZSwgYm9yZGVyQm94SGVpZ2h0LCBib3JkZXJCb3hXaWR0aCwgYm91bmRCZWhhdmlvcnMsIGJvdW5kTWl4aW5TZXQsIGNiaCwgY2J3LCBjaGFuZ2Vab29tLCBjbGFzc2VzLCBjb21wdXRlQ2FyZXRQb3NpdGlvbiwgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50LCBjb250YWluc09yU2VsZiwgY29udGVudEJveEhlaWdodCwgY29udGVudEJveFdpZHRoLCBjcmVhdGVFbGVtZW50VmFuaWxsYSwgY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQsIGRlbGV0ZVN0eWxlUHJvcGVydHksIGRldGVjdE1vYmlsZSwgZG9Cb3JkZXJPYnNlcnZlLCBkb0NvbnRlbnRPYnNlcnZlLCBlbnN1cmVWaWV3cG9ydFRyYWNraW5nLCBlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5LCBmaXhPcmllbnRUb1NjcmVlbiwgZml4ZWRDbGllbnRab29tLCBnZXRBdmFpbFNpemUsIGdldEJvdW5kaW5nT3JpZW50UmVjdCwgZ2V0Q29ycmVjdE9yaWVudGF0aW9uLCBnZXRFbGVtZW50UmVsYXRlZCwgZ2V0RXZlbnRUYXJnZXQsIGdldE9mZnNldFBhcmVudCwgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4sIGdldFN0b3Jlc09mRWxlbWVudCwgZ2V0Wm9vbSwgaGFuZGxlQXR0cmlidXRlLCBoYW5kbGVEYXRhc2V0LCBoYW5kbGVIaWRkZW4sIGhhbmRsZVByb3BlcnR5LCBoYW5kbGVTdHlsZUNoYW5nZSwgaGFzUGFyZW50LCBodG1sLCBpbmNsdWRlU2VsZiwgaW5kZXhPZiwgaW5pdFRleHRTdHlsZSwgaXNFbGVtZW50LCBpc0luRm9jdXMsIGlzTW9iaWxlLCBpc05lYXJseUlkZW50aXR5LCBpc1ZhbGlkUGFyZW50LCBtYWtlUkFGQ3ljbGUsIG1lYXN1cmVJbnB1dEluRm9jdXMsIG1lYXN1cmVUZXh0LCBtaXhpbkRpc3Bvc2VycywgbWl4aW5FbGVtZW50cywgbWl4aW5OYW1lc3BhY2UsIG1peGluUmVnaXN0cnksIG5hbWVSZWdpc3RyeUYsIG5hbWVkU3RvcmVNYXBzLCBvYnNlcnZlQXR0cmlidXRlLCBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3Rvciwgb2JzZXJ2ZUJvcmRlckJveCwgb2JzZXJ2ZUJ5U2VsZWN0b3IsIG9ic2VydmVDb250ZW50Qm94LCBvbkJvcmRlck9ic2VydmUsIG9uQ29udGVudE9ic2VydmUsIG9yaWVudE9mLCBvcmllbnRhdGlvbk51bWJlck1hcCwgcGFzc2l2ZU9wdHMsIHJlYWRGaXhlZE92ZXJsYXlWaWV3cG9ydCwgcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQsIHJlZmxlY3RCZWhhdmlvcnMsIHJlZmxlY3RNaXhpbnMsIHJlZmxlY3RTdG9yZXMsIHJlZ2lzdGVyTWl4aW4sIHJlbW92ZUV2ZW50LCByZW1vdmVFdmVudHMsIHJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCwgcm9vdHMsIHNldEF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXNJZk51bGwsIHNldENoZWNrZWQsIHNldElkbGVJbnRlcnZhbCwgdGhyb3R0bGVNYXAsIHVuZml4ZWRDbGllbnRab29tLCB1cGRhdGVBbGxNaXhpbnMsIHVwZGF0ZU1peGluQXR0cmlidXRlcywgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzLCB1cGRhdGVWUCwgdXJsLCB3aGVuQW55U2NyZWVuQ2hhbmdlcywgem9vbU9mLCB6b29tVmFsdWVzIH07Il0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyxpQkFBQUEsR0FBZSxnQkFBQUMsSUFBYyxnQkFBQUMsSUFBYyxZQUFBQyxHQUFVLHFCQUFBQyxJQUFtQixTQUFBQyxJQUFPLGVBQUFDLElBQWEsZ0JBQUFDLElBQWMsdUJBQUFDLElBQXFCLHNCQUFBQyxJQUFvQiwrQkFBQUMsVUFBbUM7QUFDL0wsU0FBUyxVQUFBQyxJQUFRLGFBQUFDLElBQVcsYUFBQUMsSUFBVyxhQUFBQyxJQUFXLG9CQUFBQyxJQUFrQixvQkFBQUMsU0FBd0I7QUFFNUYsY0FBYztBQUdkLElBQUlDLEtBQWtDLHVCQUFPLElBQUksa0NBQWtDLEdBQy9FQyxLQUE0QixXQUFXRCxFQUErQixNQUFzQixvQkFBSSxJQUFJO0FBQ3hHO0FBQUEsRUFDQztBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUNELEVBQUUsUUFBUSxDQUFDRSxNQUFZO0FBQ3RCLE1BQUksT0FBTyxNQUFPLE9BQWUsT0FBTyxLQUFLLG9CQUFvQixXQUFZO0FBQzdFLFFBQU1DLElBQU8sT0FBT0QsR0FBUyxRQUFRLEVBQUUsRUFBRSxLQUFLO0FBQzlDLE1BQUksR0FBQ0MsS0FBUUYsR0FBMEIsSUFBSUUsQ0FBSTtBQUMvQyxRQUFJO0FBQ0gsVUFBSSxpQkFBaUJELENBQU87QUFBQSxJQUM3QixTQUFTRSxHQUFHO0FBQ1gsTUFBTSxPQUFPQSxHQUFHLFFBQVEsRUFBRSxFQUFFLFlBQVksTUFBTSw4QkFBNkIsUUFBUSxLQUFLQSxDQUFDO0FBQUEsSUFDMUYsVUFBRTtBQUNELE1BQUFILEdBQTBCLElBQUlFLENBQUk7QUFBQSxJQUNuQztBQUNELENBQUM7QUFDRCxJQUFJRSxLQUFxQixNQUFNO0FBQUMsR0FJNUJDLEtBQVcsTUFBTTtBQUNwQixNQUFJQyxJQUFRLFdBQVcsZUFBZSxVQUFVO0FBQ2hELFVBQUMsQ0FBQ0MsTUFBTTtBQUNQLEtBQUksc1ZBQXNWLEtBQUtBLENBQUMsS0FBSywwa0RBQTBrRCxLQUFLQSxFQUFFLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBR0QsSUFBUTtBQUFBLEVBQzk4RCxHQUFHLFVBQVUsYUFBYSxVQUFVLFVBQVUsV0FBVyxLQUFLLEdBQ3ZEQTtBQUNSLEdBQ0lFLEtBQWUsTUFDWDtBQUFBLEVBQ047QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRCxFQUFFLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFNBQVMsQ0FBQyxNQUFNLFVBQVUsa0JBQWtCLGtCQUFrQixTQUFTLG9CQUFvQixXQUFXLFdBQVcsbUJBQW1CLEVBQUUsU0FLbkxDLEtBQTZCLE9BQU87QUFBQSxFQUN2QyxZQUFZO0FBQUEsRUFDWixlQUFlLE1BQU07QUFDdEIsSUFDSUMsS0FBZ0IsQ0FBQ0MsR0FBSUMsSUFBVSxRQUM5QixPQUFPLFdBQVcsdUJBQXdCLGFBQW1CLFdBQVcsb0JBQW9CRCxHQUFJLEVBQUUsU0FBQUMsRUFBUSxDQUFDLElBQ3hHLFdBQVcsTUFBTUQsRUFBR0YsR0FBMkIsQ0FBQyxHQUFHLENBQUMsR0FFeERJLEtBQWtCLENBQUNDLE1BQ2ZBLEdBQVMsZ0JBQWdCQSxHQUFTLE1BRXRDQyxLQUF1QixDQUFDRCxNQUFZO0FBQ3ZDLFFBQU1FLElBQVUsQ0FBQztBQUNqQixNQUFJQyxJQUFVSDtBQUNkLFNBQU9HLEtBQVM7QUFDZixVQUFNQyxJQUFTTCxHQUFnQkksQ0FBTztBQUN0QyxRQUFJQyxLQUFVQSxhQUFrQixnQkFBaUI7QUFDakQsS0FBSUQsSUFBVUMsTUFBUUYsRUFBUSxLQUFLQyxDQUFPO0FBQUEsRUFDM0M7QUFDQSxTQUFPRDtBQUNSLEdBQ0lHLEtBQW1CLENBQUNDLEdBQVFDLElBQVUsU0FDbEMsS0FBSyxJQUFJRCxFQUFPLElBQUksQ0FBQyxJQUFJQyxLQUFXLEtBQUssSUFBSUQsRUFBTyxDQUFDLElBQUlDLEtBQVcsS0FBSyxJQUFJRCxFQUFPLENBQUMsSUFBSUMsS0FBVyxLQUFLLElBQUlELEVBQU8sSUFBSSxDQUFDLElBQUlDLEtBQVcsS0FBSyxJQUFJRCxFQUFPLENBQUMsSUFBSUMsS0FBVyxLQUFLLElBQUlELEVBQU8sQ0FBQyxJQUFJQyxHQUVqTUMsS0FBZSxNQUFNO0FBQ3hCLFFBQU1DLElBQVU7QUFBQSxJQUNmLFVBQVU7QUFBQSxJQUNWLE1BQXNCLG9CQUFJLElBQUk7QUFBQSxJQUM5QixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQ1Isa0JBQUssV0FBVyxJQUNoQixxQkFBcUIsS0FBSyxJQUFJLEdBQ3ZCO0FBQUEsSUFDUjtBQUFBLElBQ0EsUUFBUVosR0FBSTtBQUNYLGtCQUFLLEtBQUssSUFBSUEsQ0FBRSxHQUNUO0FBQUEsSUFDUjtBQUFBLEVBQ0Q7QUFDQSxVQUFDLFlBQVk7QUFDWixXQUFPLENBQUNZLEdBQVM7QUFDaEIsWUFBTSxRQUFRLEtBQUtBLEdBQVMsTUFBTSxTQUFTLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQ0MsTUFBUSxRQUFRLElBQUlBLENBQUcsR0FBRyxRQUFRLFFBQVEsS0FBSyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FDMUhELEVBQVEsTUFBTSxRQUFRLEdBQ2xCLE9BQU8sd0JBQXlCLE1BQWEsTUFBTSxJQUFJLFFBQVEsQ0FBQ0UsTUFBUTtBQUMzRSxRQUFBRixFQUFRLE9BQU8sc0JBQXNCRSxDQUFHO0FBQUEsTUFDekMsQ0FBQyxJQUNJLE1BQU0sSUFBSSxRQUFRLENBQUNBLE1BQVE7QUFDL0IsbUJBQVdBLEdBQUssRUFBRTtBQUFBLE1BQ25CLENBQUM7QUFBQSxFQUVILEdBQUcsR0FDSUY7QUFDUixHQUNJRyxLQUFjLENBQUNDLElBQU9MLEdBQWEsTUFDL0IsQ0FBQ1gsTUFBT2dCLEVBQUssUUFBUWhCLENBQUUsR0FFM0JpQixLQUFPLE9BQU8sV0FBWSxNQUFjLFVBQVUsa0JBQWtCLE1BQ3BFQyxLQUFzQixDQUFDZixHQUFTZ0IsSUFBUSxDQUFDLE1BQU07QUFDbEQsTUFBSSxHQUFDQSxLQUFTLE9BQU9BLEtBQVMsWUFBWSxDQUFDaEI7QUFDM0MsV0FBTyxNQUFNLEtBQUssT0FBTyxRQUFRZ0IsQ0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM1QixHQUFNNkIsQ0FBSyxNQUFNO0FBQy9ELFlBQU1DLElBQU1sQixFQUFRLGFBQWFaLENBQUk7QUFDckMsTUFBSTZCLEtBQVMsT0FBTWpCLEVBQVEsZ0JBQWdCWixDQUFJLElBQ3RDNkIsS0FBU0MsS0FBS2xCLEVBQVEsYUFBYVosR0FBTThCLEtBQU8sS0FBS0QsS0FBU0MsSUFBTUEsS0FBT0QsQ0FBSztBQUFBLElBQzFGLENBQUM7QUFDRixHQUNJRSxLQUFnQixDQUFDbkIsR0FBU2dCLElBQVEsQ0FBQyxNQUMvQixNQUFNLEtBQUssT0FBTyxRQUFRQSxDQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzVCLEdBQU02QixDQUFLLE1BQU07QUFDL0QsRUFBSUEsS0FBUyxPQUFNakIsRUFBUSxnQkFBZ0JaLENBQUksSUFDMUNZLEVBQVEsYUFBYVosR0FBTTZCLEtBQVNqQixFQUFRLGFBQWFaLENBQUksQ0FBQztBQUNwRSxDQUFDLEdBRUVnQyxLQUE4QixvQkFBSSxJQUFJLEdBQ3RDQyxLQUFrQixDQUFDeEIsR0FBSUMsSUFBVSxRQUFRd0IsTUFBUztBQUNyRCxRQUFNQyxJQUFTO0FBQUEsSUFDZCxTQUFTO0FBQUEsSUFDVCxRQUFRLE1BQU07QUFDYixNQUFBQSxFQUFPLFVBQVU7QUFBQSxJQUNsQjtBQUFBLEVBQ0Q7QUFDQSxTQUFBM0IsR0FBYyxZQUFZO0FBQ3pCLFFBQUksR0FBQ0MsS0FBTSxPQUFPQSxLQUFNLGFBQ3hCO0FBQUEsYUFBTzBCLEVBQU87QUFDYixjQUFNLFFBQVEsSUFBSSxDQUFDLFFBQVEsSUFBSTFCLEdBQUksR0FBR3lCLENBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQ0UsTUFBTSxXQUFXQSxHQUFHMUIsQ0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsUUFBUSxLQUFLLEtBQUssT0FBTyxDQUFDLEdBQzVILE1BQU0sUUFBUSxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMwQixNQUFNNUIsR0FBYzRCLEdBQUcxQixDQUFPLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQzBCLE1BQU0sV0FBV0EsR0FBRzFCLENBQU8sQ0FBQyxDQUFDLENBQUM7QUFFOUcsTUFBQXlCLEVBQU8sU0FBUyxNQUFNO0FBQUEsTUFBQztBQUFBO0FBQUEsRUFDeEIsR0FBR3pCLENBQU8sR0FDSHlCLEdBQVE7QUFDaEI7QUFDSSxPQUFPLHdCQUF5QixPQUFhLHNCQUFzQixZQUFZO0FBQ2xGO0FBQ0MsSUFBQUgsR0FBWSxRQUFRLENBQUN2QixNQUFPQSxJQUFLLENBQUMsR0FDbEMsTUFBTSxJQUFJLFFBQVEsQ0FBQzJCLE1BQU0sc0JBQXNCQSxDQUFDLENBQUM7QUFFbkQsQ0FBQztBQUNELElBQUlDLElBQWlCLHVCQUFPLG1CQUFtQixHQUMzQ0MsSUFBa0IsdUJBQU8sb0JBQW9CLEdBQzdDQyxJQUFrQix1QkFBTyxvQkFBb0IsR0FDN0NDLElBQW1CLHVCQUFPLHFCQUFxQixHQUMvQ0MsS0FBa0Msb0JBQUksUUFBUSxHQUM5Q0MsS0FBbUMsb0JBQUksUUFBUSxHQUMvQ0MsS0FBbUIsQ0FBQy9CLEdBQVNILElBQUssTUFBTTtBQUFDLE1BQU07QUFDbEQsTUFBTUcsYUFBbUIsZUFDckIsQ0FBQzhCLEdBQWlCLElBQUk5QixDQUFPLEdBQUc7QUFDbkMsSUFBQUEsRUFBUTJCLENBQWUsSUFBSTNCLEVBQVEsYUFDbkNBLEVBQVE0QixDQUFnQixJQUFJNUIsRUFBUTtBQUNwQyxVQUFNZ0MsSUFBVyxJQUFJLGVBQWUsQ0FBQ0MsTUFBWTtBQUNoRCxpQkFBV0MsS0FBU0QsRUFBUyxLQUFJQyxFQUFNLGdCQUFnQjtBQUN0RCxjQUFNQyxJQUFpQkQsRUFBTSxlQUFlLENBQUM7QUFDN0MsUUFBSUMsTUFDSG5DLEVBQVEyQixDQUFlLElBQUksS0FBSyxJQUFJUSxFQUFlLFlBQVluQyxFQUFRLFdBQVcsR0FDbEZBLEVBQVE0QixDQUFnQixJQUFJLEtBQUssSUFBSU8sRUFBZSxXQUFXbkMsRUFBUSxZQUFZLEdBQ25GSCxJQUFLRyxDQUFPO0FBQUEsTUFFZDtBQUFBLElBQ0QsQ0FBQztBQUNELElBQUE4QixHQUFpQixJQUFJOUIsR0FBU2dDLENBQVEsR0FDdENBLEVBQVMsUUFBUWhDLEdBQVMsV0FBV0EsR0FBUyxFQUFFLEtBQUssY0FBYyxDQUFDO0FBQUEsRUFDckU7QUFDRCxHQUNJb0MsS0FBa0IsQ0FBQ3BDLEdBQVNILElBQUssTUFBTTtBQUFDLE1BQU07QUFDakQsTUFBTUcsYUFBbUIsZUFDckIsQ0FBQzZCLEdBQWdCLElBQUk3QixDQUFPLEdBQUc7QUFDbEMsSUFBQUEsRUFBUXlCLENBQWMsSUFBSXpCLEVBQVEsYUFDbENBLEVBQVEwQixDQUFlLElBQUkxQixFQUFRO0FBQ25DLFVBQU1nQyxJQUFXLElBQUksZUFBZSxDQUFDQyxNQUFZO0FBQ2hELGlCQUFXQyxLQUFTRCxFQUFTLEtBQUlDLEVBQU0sZUFBZTtBQUNyRCxjQUFNRyxJQUFnQkgsRUFBTSxjQUFjLENBQUM7QUFDM0MsUUFBSUcsTUFDSHJDLEVBQVF5QixDQUFjLElBQUksS0FBSyxJQUFJWSxFQUFjLFlBQVlyQyxFQUFRLFdBQVcsR0FDaEZBLEVBQVEwQixDQUFlLElBQUksS0FBSyxJQUFJVyxFQUFjLFdBQVdyQyxFQUFRLFlBQVksR0FDakZILElBQUtHLENBQU87QUFBQSxNQUVkO0FBQUEsSUFDRCxDQUFDO0FBQ0QsSUFBQTZCLEdBQWdCLElBQUk3QixHQUFTZ0MsQ0FBUSxHQUNyQ0EsRUFBUyxRQUFRaEMsR0FBUyxXQUFXQSxHQUFTLEVBQUUsS0FBSyxhQUFhLENBQUM7QUFBQSxFQUNwRTtBQUNELEdBQ0lzQyxLQUFNLENBQUNDLE1BQVNDLE1BQ1osSUFBSSxnQkFBZ0IsSUFBSSxLQUFLQSxHQUFRLEVBQUUsTUFBQUQsRUFBSyxDQUFDLENBQUMsR0FFbERFLEtBQU8sQ0FBQ0QsR0FBUUQsSUFBTyxnQkFBZ0I7QUFDMUMsUUFBTUcsSUFBUyxJQUFJLFVBQVUsRUFBRSxnQkFBZ0JGLEdBQVFELENBQUk7QUFDM0QsU0FBT0csRUFBTyxjQUFjLFVBQVUsS0FBS0EsRUFBTyxjQUFjLEdBQUc7QUFDcEUsR0FDSUMsS0FBYSxDQUFDQyxHQUFPM0IsR0FBTzRCLE1BQU87QUFDdEMsRUFBSTVCLEtBQVMsUUFBUTJCLEVBQU0sV0FBVzNCLE1BQ2pDMkIsR0FBUSxRQUFXLGNBQWNBLEdBQVEsUUFBVyxXQUFXLENBQUNBLEdBQU8sV0FDMUVBLEdBQU8sUUFBUSxHQUNmQyxHQUFJLGlCQUFpQixNQUVyQkQsRUFBTSxVQUFVLENBQUMsQ0FBQzNCLEdBQ2xCMkIsR0FBTyxnQkFBZ0IsSUFBSSxNQUFNLFVBQVU7QUFBQSxJQUMxQyxTQUFTO0FBQUEsSUFDVCxZQUFZO0FBQUEsRUFDYixDQUFDLENBQUM7QUFHTCxHQUNJRSxLQUFnQixDQUFDMUMsTUFDYkEsS0FBVSxRQUFRQSxhQUFrQixlQUFlLEVBQUVBLGFBQWtCLG9CQUFvQkEsYUFBa0IsbUJBQW1CQSxJQUFTLE1BRTdJMkMsS0FBVSxDQUFDL0MsR0FBU2dELE1BQ25CaEQsS0FBVyxRQUFRZ0QsS0FBUSxPQUFhLEtBQ3JDLE1BQU0sS0FBS2hELEdBQVMsY0FBYyxDQUFDLENBQUMsR0FBRyxVQUFVZ0QsQ0FBSSxLQUFLLElBRTlEQyxLQUFRLGdDQUNSQyxLQUFRLHlMQUNSQyxLQUF1QixDQUFDQyxNQUFhO0FBQ3hDLE1BQUlBLEtBQVksYUFBYyxRQUFPLFNBQVMsdUJBQXVCO0FBQ3JFLFFBQU1DLElBQVMsU0FBUyxjQUFjLEtBQUssUUFBUTtBQUNuRCxXQUFTTCxJQUFPSyxFQUFPLEtBQUssR0FBR0MsR0FBT0MsSUFBWSxJQUFJSCxNQUFhRSxJQUFRRixFQUFTLE1BQU0sdUxBQXdMO0FBQ2pSLElBQUlFLEVBQU0sQ0FBQyxNQUFHTixJQUFPSyxFQUFPQyxFQUFNLENBQUMsQ0FBQyxJQUNoQ0EsRUFBTSxDQUFDLE1BQUdOLEVBQUssS0FBS00sRUFBTSxDQUFDLElBQzNCQSxFQUFNLENBQUMsTUFBR0MsS0FBYSxNQUFNRCxFQUFNLENBQUMsSUFDcENBLEVBQU0sQ0FBQyxLQUFHTixFQUFLLGFBQWFNLEVBQU0sQ0FBQyxHQUFHQSxFQUFNLENBQUMsS0FBSyxFQUFFLEdBQ3hERixJQUFXQSxFQUFTLE1BQU1FLEVBQU0sQ0FBQyxFQUFFLE1BQU07QUFFMUMsU0FBSUMsTUFBV1AsRUFBSyxZQUFZTyxFQUFVLE1BQU0sQ0FBQyxJQUMxQ1A7QUFDUixHQUNJUSxLQUFZLENBQUNDLE1BQ1RBLEtBQU0sU0FBU0EsYUFBYyxRQUFRQSxhQUFjLFFBQVFBLGFBQWMsV0FBV0EsYUFBYyxXQUFXQSxhQUFjLGVBQWVBLGFBQWMsb0JBQW9CQSxJQUFLLE1BRXJMQyxLQUFjLENBQUNDLEdBQVFQLE1BQWE7QUFDdkMsUUFBTVEsSUFBTSxPQUFPUixLQUFhLFdBQVdBLEVBQVMsS0FBSyxJQUFJO0FBQzdELE1BQUksQ0FBQ1EsS0FBTyxDQUFDRCxFQUFRLFFBQU9BLEtBQVU7QUFDdEMsTUFBSTtBQUNILFdBQU9BLEVBQU8sY0FBY0MsQ0FBRyxNQUFNRCxFQUFPLFFBQVFDLENBQUcsSUFBSUQsSUFBUztBQUFBLEVBQ3JFLFFBQVE7QUFDUCxXQUFPO0FBQUEsRUFDUjtBQUNELEdBQ0lFLElBQVksQ0FBQzFELEdBQVNDLE1BQVc7QUFDcEMsU0FBT0QsS0FBUztBQUNmLFFBQUksRUFBRUEsR0FBUyxXQUFXQSxHQUFVLFFBQU87QUFDM0MsU0FBS0EsR0FBUyxXQUFXQSxRQUFjQyxHQUFRLFdBQVdBLEdBQVMsUUFBTztBQUMxRSxJQUFBRCxJQUFVQSxFQUFRLGtCQUFrQkEsRUFBUSxjQUFjQSxHQUFTLGNBQWMsRUFBRSxVQUFVLEdBQUssQ0FBQyxJQUFJQSxHQUFTLGNBQWMsRUFBRSxVQUFVLEdBQUssQ0FBQyxHQUFHLE9BQU9BLEdBQVM7QUFBQSxFQUNwSztBQUNELEdBQ0kyRCxLQUFjLENBQUM7QUFDbkIsU0FBU0MsRUFBU0osR0FBUXBCLEdBQU0xQyxHQUFJbUUsSUFBT0YsSUFBYTtBQUN2RCxFQUFBSCxHQUFRLG1CQUFtQnBCLEdBQU0xQyxHQUFJbUUsQ0FBSTtBQUN6QyxRQUFNQyxJQUFLLE9BQU9OLEtBQVUsWUFBWSxPQUFPQSxLQUFVLGNBQWMsQ0FBQ0EsR0FBUSxRQUFRLElBQUksUUFBUUEsQ0FBTSxJQUFJQTtBQUM5RyxTQUFPLE1BQU1NLEdBQUksUUFBUSxHQUFHLHNCQUFzQjFCLEdBQU0xQyxHQUFJbUUsQ0FBSTtBQUNqRTtBQUNBLFNBQVNFLEdBQVlQLEdBQVFwQixHQUFNMUMsR0FBSW1FLElBQU9GLElBQWE7QUFDMUQsRUFBQUgsR0FBUSxzQkFBc0JwQixHQUFNMUMsR0FBSW1FLENBQUk7QUFDN0M7QUFDQSxJQUFJRyxLQUFZLENBQUNDLEdBQU1DLE9BQ3RCRCxJQUFPQSxhQUFnQixVQUFVQSxFQUFLLE1BQU0sSUFBSUEsR0FDekMsQ0FBQyxHQUFHLE9BQU8sUUFBUUMsQ0FBUSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUNqRixHQUFNUyxDQUFFLE1BQU0sTUFBTSxRQUFRQSxDQUFFLElBQUlrRSxFQUFTSyxHQUFNaEYsR0FBTSxHQUFHUyxDQUFFLElBQUlrRSxFQUFTSyxHQUFNaEYsR0FBTVMsQ0FBRSxDQUFDLElBRWxJeUUsS0FBZ0IsQ0FBQ2IsR0FBSWMsTUFBVztBQUNuQyxNQUFJQSxHQUFRO0FBQ1gsUUFBSXRDLElBQVVzQztBQUNkLFdBQUlBLGFBQWtCLE1BQUt0QyxJQUFVLENBQUMsR0FBR3NDLEVBQU8sUUFBUSxDQUFDLElBQ3BEdEMsSUFBVSxDQUFDLEdBQUcsT0FBTyxRQUFRc0MsQ0FBTSxDQUFDLEdBQ2xDdEMsRUFBUSxJQUFJLENBQUMsQ0FBQzdDLEdBQU1vRixDQUFJLFFBQVFwRyxHQUFrQm9HLENBQUksSUFBSSxDQUFDLEdBQUdBLENBQUksSUFBSUEsTUFBUyxDQUFDLElBQUksTUFBTSxDQUFDQyxNQUMxRlYsRUFBU04sR0FBSXJFLEdBQU1xRixDQUFHLENBQzdCLENBQUM7QUFBQSxFQUNIO0FBQ0QsR0FDSUMsS0FBZSxDQUFDTixHQUFNQyxPQUN6QkQsSUFBT0EsYUFBZ0IsVUFBVUEsRUFBSyxNQUFNLElBQUlBLEdBQ3pDLENBQUMsR0FBRyxPQUFPLFFBQVFDLENBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDakYsR0FBTVMsQ0FBRSxNQUFNLE1BQU0sUUFBUUEsQ0FBRSxJQUFJcUUsR0FBWUUsR0FBTWhGLEdBQU0sR0FBR1MsQ0FBRSxJQUFJcUUsR0FBWUUsR0FBTWhGLEdBQU1TLENBQUUsQ0FBQyxJQUV4SThFLEtBQWlCLENBQUM5QixNQUFPO0FBQzVCLE1BQUksQ0FBQ0EsRUFBSSxRQUFPO0FBQ2hCLE1BQUlBLEdBQUksZ0JBQWdCLE9BQU9BLEVBQUcsZ0JBQWlCLFlBQVk7QUFDOUQsVUFBTStCLElBQU8vQixFQUFHLGFBQWE7QUFDN0IsZUFBV0csS0FBUTRCLEVBQU0sS0FBSTVCLGFBQWdCLGVBQWVBLGFBQWdCLFFBQVMsUUFBT0E7QUFBQSxFQUM3RjtBQUNBLFFBQU1XLElBQVNkLEdBQUk7QUFDbkIsU0FBSWMsYUFBa0IsZUFBZUEsYUFBa0IsVUFBZ0JBLElBQ2hFO0FBQ1IsR0FDSWtCLEtBQWlCLENBQUNwRixHQUFHcUYsR0FBR2pDLE1BQU87QUFDbEMsTUFBSWlDLEtBQUssUUFBUSxFQUFFQSxhQUFhLFNBQVNBLEdBQUcsV0FBVyxLQUFNLFFBQU87QUFDcEUsTUFBSXJGLEtBQUtxRixNQUFNckYsR0FBRyxXQUFXQSxPQUFPcUYsR0FBRyxXQUFXQSxHQUFJLFFBQU87QUFDN0QsTUFBSWpDLEdBQUksZ0JBQWdCLE9BQU9BLEVBQUcsZ0JBQWlCLFlBQVk7QUFDOUQsVUFBTStCLElBQU8vQixFQUFHLGFBQWEsR0FDdkJrQyxJQUFNdEYsR0FBRyxXQUFXQSxHQUNwQnVGLElBQU1GLEdBQUcsV0FBV0E7QUFDMUIsUUFBSUYsRUFBSyxTQUFTRyxDQUFHLEtBQUtILEVBQUssU0FBU0ksQ0FBRyxHQUFHO0FBQzdDLFlBQU1DLElBQVNMLEVBQUssUUFBUUcsQ0FBRyxHQUN6QkcsSUFBU04sRUFBSyxRQUFRSSxDQUFHO0FBQy9CLFVBQUlFLEtBQVUsS0FBS0QsS0FBVSxLQUFLQyxJQUFTRCxFQUFRLFFBQU87QUFBQSxJQUMzRDtBQUFBLEVBQ0Q7QUFDQSxTQUFJLEdBQUF4RixHQUFHLFdBQVdxRixHQUFHLFdBQVdBLENBQUMsS0FBS3JGLEdBQUcsWUFBWSxFQUFFLFVBQVUsR0FBSyxDQUFDLEdBQUcsU0FBU3FGLEdBQUcsV0FBV0E7QUFFbEcsR0FDSUssSUFBYSxDQUFDbkYsR0FBU29ELEdBQVVQLE1BQU87QUFDM0MsUUFBTWUsSUFBTSxPQUFPUixLQUFhLFdBQVdBLEVBQVMsS0FBSyxJQUFJO0FBQzdELE1BQUksQ0FBQ1EsRUFBSyxRQUFPNUQsS0FBVztBQUM1QixNQUFJNkMsR0FBSSxnQkFBZ0IsT0FBT0EsRUFBRyxnQkFBaUIsWUFBWTtBQUM5RCxVQUFNK0IsSUFBTy9CLEVBQUcsYUFBYTtBQUM3QixlQUFXRyxLQUFRNEIsRUFBTSxLQUFJNUIsYUFBZ0IsZUFBZUEsYUFBZ0IsUUFBUyxLQUFJO0FBQ3hGLFVBQUlBLEVBQUssVUFBVVksQ0FBRyxFQUFHLFFBQU9aO0FBQUEsSUFDakMsUUFBUTtBQUFBLElBQUM7QUFBQSxFQUNWO0FBQ0EsTUFBSW9DLElBQU8sTUFDUEMsSUFBYyxNQUNkQyxJQUFVO0FBQ2QsTUFBSTtBQUNILElBQUFGLElBQU9wRixHQUFTLFVBQVU0RCxDQUFHLElBQUk1RCxJQUFVO0FBQzNDLFVBQU11RixLQUFRdkYsR0FBUyxZQUFZLEVBQUUsVUFBVSxHQUFLLENBQUMsS0FBS0EsR0FBUyxlQUFlLFlBQVksRUFBRSxVQUFVLEdBQUssQ0FBQyxJQUFJO0FBQ3BILElBQUFxRixJQUFjRSxHQUFNLFVBQVUzQixDQUFHLElBQUkyQixJQUFPLE1BQzVDRCxJQUFVdEYsR0FBUyxVQUFVNEQsQ0FBRyxLQUFLd0IsR0FBTSxVQUFVeEIsQ0FBRyxLQUFLeUIsR0FBYSxVQUFVekIsQ0FBRyxLQUFLO0FBQUEsRUFDN0YsUUFBUTtBQUFBLEVBQUM7QUFDVCxTQUFPd0IsS0FBUUUsS0FBV0Q7QUFDM0IsR0FDSUcsS0FBTSxDQUFDeEYsR0FBU29ELE1BQ1osQ0FBQyxDQUFDK0IsRUFBV25GLEdBQVNvRCxDQUFRLEdBRWxDcUMsS0FBWSxDQUFDekYsR0FBUzBGLEdBQW1CQyxJQUFNLGFBQWE7QUFNL0QsTUFMSSxDQUFDM0YsS0FDREEsRUFBUSxtQkFBbUIsQ0FBQ0EsRUFBUSxnQkFBZ0I7QUFBQSxJQUN2RCxjQUFjO0FBQUEsSUFDZCxvQkFBb0I7QUFBQSxFQUNyQixDQUFDLEtBQ0csQ0FBQ0EsRUFBUSxtQkFBbUJBLEVBQVEsaUJBQWlCLFFBQVFBLEVBQVEsTUFBTSxhQUFhLFFBQVMsUUFBTztBQUM1RyxNQUFJNEYsSUFBUyxTQUFTO0FBQ3RCLFNBQU9BLEtBQVVBLEVBQU8sY0FBY0EsRUFBTyxXQUFXLGdCQUFlLENBQUFBLElBQVNBLEVBQU8sV0FBVztBQUNsRyxRQUFNQyxJQUFZRCxNQUFXNUYsS0FBVzZELEVBQVUrQixHQUFRNUYsQ0FBTyxHQUMzRDhGLElBQVk5RixFQUFRLFFBQVEsUUFBUTtBQUMxQyxNQUFJLENBQUM2RixLQUFhLENBQUNDLEtBQWEsQ0FBQ0osRUFBbUIsUUFBTztBQUMzRCxNQUFJQTtBQUNILFFBQUksT0FBT0EsS0FBc0IsVUFBVTtBQUMxQyxVQUFJQyxNQUFRLFNBQVUsUUFBTyxDQUFDLENBQUNSLEVBQVduRixHQUFTMEYsQ0FBaUI7QUFDL0Q7QUFDSixjQUFNL0IsSUFBU2tDLElBQVlELElBQVM1RixFQUFRLGNBQWMsUUFBUSxLQUFLQSxHQUNqRStGLElBQVMsQ0FBQyxDQUFDWixFQUFXeEIsR0FBUStCLENBQWlCO0FBQ3JELGVBQU8xRixHQUFTLGdCQUFnQjBGLENBQWlCLEtBQUssUUFBUTFGLEdBQVMsVUFBVTBGLENBQWlCLEtBQUtLO0FBQUEsTUFDeEc7QUFBQSxJQUNELFdBQVdMLGFBQTZCO0FBQ3ZDLGFBQUlDLE1BQVEsV0FBaUI5QixFQUFVN0QsR0FBUzBGLENBQWlCLEtBQUssS0FDMUQ3QixFQUFVNkIsR0FBbUIxRixDQUFPLEtBQUs7QUFBQTtBQUd2RCxTQUFPO0FBQ1IsR0FJSWdHLEtBQVUsTUFDVCxvQkFBb0IsU0FBUyxrQkFBd0IsU0FBUyxnQkFBZ0Isa0JBQWtCLElBQzdGLFdBQVcsU0FBUyxnQkFBZ0IsTUFBTSxpQkFBaUIsV0FBVyxLQUFLLEdBQUcsS0FBSyxHQUV2RkMsS0FBbUIsdUJBQU8sSUFBSSxtQkFBbUIsR0FDakRDLEtBQWEsV0FBV0QsRUFBZ0IsTUFBc0Isb0JBQUksUUFBUSxHQUMxRUUsS0FBUyxDQUFDbkcsSUFBVSxTQUFTLG9CQUN6QmtHLEdBQVcsb0JBQW9CbEcsR0FBUyxNQUFNO0FBQ3BELFFBQU1vRyxLQUFhcEcsR0FBUyxVQUFVLGVBQWUsSUFBSUEsSUFBVSxTQUFTQSxHQUFTLFVBQVUsZUFBZSxLQUFLLFNBQVM7QUFDNUgsTUFBSW9HLEdBQVcsS0FBTSxRQUFPQSxHQUFXLFFBQVE7QUFDL0MsTUFBSXBHLEdBQVMsZUFBZ0IsUUFBT0EsR0FBUyxrQkFBa0I7QUFDaEUsQ0FBQyxHQUVFcUcsS0FBYSxDQUFDQyxJQUFRLE9BQ3pCLFNBQVMsZ0JBQWdCLE1BQU0sWUFBWSxhQUFhQSxDQUFLLEdBQzdELFNBQVMsZ0JBQWdCLGNBQWMsSUFBSSxZQUFZLFdBQVc7QUFBQSxFQUNqRSxRQUFRLEVBQUUsTUFBTUEsRUFBTTtBQUFBLEVBQ3RCLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFDYixDQUFDLENBQUMsR0FDS0EsSUFFSkMsS0FBa0IsQ0FBQ3ZHLElBQVUsU0FBUyxxQkFDakNBLEdBQVMsa0JBQWtCLE9BQU8sSUFBSW1HLEdBQU9uRyxDQUFPLE1BQU0sR0FFL0R3RyxJQUFvQixDQUFDeEcsSUFBVSxTQUFTLHFCQUNuQ0EsR0FBUyxrQkFBa0IsT0FBTyxJQUFJQSxHQUFTLG1CQUFtQixHQUV2RXlHLElBQVcsQ0FBQ3pHLElBQVUsU0FBUyxvQkFBb0I7QUFDdEQsUUFBTW9HLEtBQWFwRyxHQUFTLFVBQVUsdUNBQXlDLElBQUlBLElBQVUsU0FBU0EsR0FBUyxVQUFVLHVDQUF5QyxLQUFLQTtBQUN2SyxNQUFJb0csR0FBVyxlQUFlLFFBQVEsRUFBRyxRQUFPLFNBQVNBLEdBQVcsZUFBZSxRQUFRLEtBQUssR0FBRyxLQUFLO0FBQ3hHLE1BQUlBLEdBQVcsVUFBVSxRQUFRLE9BQU8sU0FBUyxPQUFPQSxFQUFVLE1BQU0sQ0FBQyxFQUFHLFFBQU8sT0FBT0EsRUFBVSxNQUFNLEtBQUs7QUFDL0csTUFBSTtBQUNILFVBQU1NLElBQU1OLEdBQVcsT0FBTyxtQkFBbUIsVUFBVSxNQUFNLE9BQU8sb0JBQXFCLGNBQWNBLElBQVksaUJBQWlCQSxDQUFTLEVBQUUsaUJBQWlCLFVBQVUsSUFBSSxPQUFPLElBQ25MTyxJQUFJLFNBQVMsT0FBT0QsQ0FBRyxFQUFFLEtBQUssR0FBRyxFQUFFO0FBQ3pDLFFBQUksT0FBTyxTQUFTQyxDQUFDLEVBQUcsUUFBT0E7QUFBQSxFQUNoQyxRQUFRO0FBQUEsRUFBQztBQUNULFNBQU87QUFDUixHQUNJQyxLQUF3QixDQUFDNUcsR0FBUzZHLElBQVMsU0FBUztBQUN2RCxRQUFNQyxJQUFPTixFQUFrQnhHLENBQU8sS0FBSyxHQUNyQytHLElBQU0vRyxHQUFTLHdCQUF3QixHQUN2Q2dILElBQU07QUFBQSxJQUNYLE1BQU1ELEdBQUssT0FBT0Q7QUFBQSxJQUNsQixPQUFPQyxHQUFLLFFBQVFEO0FBQUEsSUFDcEIsS0FBS0MsR0FBSyxNQUFNRDtBQUFBLElBQ2hCLFFBQVFDLEdBQUssU0FBU0Q7QUFBQSxJQUN0QixPQUFPQyxHQUFLLFFBQVFEO0FBQUEsSUFDcEIsUUFBUUMsR0FBSyxTQUFTRDtBQUFBLEVBQ3ZCLEdBQ01HLElBQU9KLE1BQVdKLEVBQVN6RyxDQUFPLEtBQUssSUFDdkNrSCxJQUFLLE9BQU8sU0FBVyxNQUFjLE9BQU8saUJBQWlCLE1BQzdEQyxJQUFPLEdBQUdELEdBQUksU0FBUyxTQUFTLGlCQUFpQixlQUFlLE9BQU8sZUFBZSxLQUFLSixLQUFRSSxHQUFJLFVBQVUsU0FBUyxpQkFBaUIsZ0JBQWdCLE9BQU8sZ0JBQWdCLEtBQUtKLENBQUksR0FDM0wsQ0FBQ00sR0FBT0MsQ0FBSSxJQUFJbkosR0FBYSxDQUFDOEksRUFBSSxNQUFNQSxFQUFJLEdBQUcsR0FBR0csR0FBTUYsQ0FBSSxHQUM1RCxDQUFDSyxHQUFRQyxDQUFPLElBQUlySixHQUFhLENBQUM4SSxFQUFJLE9BQU9BLEVBQUksTUFBTSxHQUFHRyxHQUFNRixDQUFJLEdBQ3BFLENBQUNPLEdBQU1DLENBQUssSUFBSVIsS0FBUSxLQUFLQSxLQUFRLElBQUksQ0FBQ0csR0FBT0UsQ0FBTSxJQUFJLENBQUNBLEdBQVFGLENBQUssR0FDekUsQ0FBQ00sR0FBS0MsQ0FBTSxJQUFJVixLQUFRLEtBQUtBLEtBQVEsSUFBSSxDQUFDSSxHQUFNRSxDQUFPLElBQUksQ0FBQ0EsR0FBU0YsQ0FBSSxHQUN6RSxDQUFDTyxHQUFPQyxFQUFNLElBQUlaLElBQU8sSUFBSSxDQUFDRCxFQUFJLFFBQVFBLEVBQUksS0FBSyxJQUFJLENBQUNBLEVBQUksT0FBT0EsRUFBSSxNQUFNO0FBQ25GLFNBQU87QUFBQSxJQUNOLE1BQUFRO0FBQUEsSUFDQSxLQUFBRTtBQUFBLElBQ0EsT0FBQUQ7QUFBQSxJQUNBLFFBQUFFO0FBQUEsSUFDQSxPQUFBQztBQUFBLElBQ0EsUUFBQUM7QUFBQSxFQUNEO0FBQ0QsR0FDSUMsS0FBTSxDQUFDckUsR0FBSW9ELElBQVMsVUFBVUEsS0FBVUosRUFBU2hELENBQUUsS0FBSyxJQUFJQSxFQUFHL0IsQ0FBZSxLQUFLK0IsR0FBSSxlQUFlQSxFQUFHaEMsQ0FBYyxLQUFLZ0MsR0FBSSxhQUNoSXNFLEtBQU0sQ0FBQ3RFLEdBQUlvRCxJQUFTLFVBQVVBLEtBQVVKLEVBQVNoRCxDQUFFLEtBQUssSUFBSUEsRUFBR2hDLENBQWMsS0FBS2dDLEdBQUksY0FBY0EsRUFBRy9CLENBQWUsS0FBSytCLEdBQUksY0FDL0h1RSxLQUFNLENBQUN2RSxHQUFJb0QsSUFBUyxVQUFVQSxLQUFVSixFQUFTaEQsQ0FBRSxLQUFLLElBQUlBLEVBQUc3QixDQUFnQixLQUFLNkIsR0FBSSxlQUFlQSxFQUFHOUIsQ0FBZSxLQUFLOEIsR0FBSSxhQUNsSXdFLEtBQU0sQ0FBQ3hFLEdBQUlvRCxJQUFTLFVBQVVBLEtBQVVKLEVBQVNoRCxDQUFFLEtBQUssSUFBSUEsRUFBRzlCLENBQWUsS0FBSzhCLEdBQUksY0FBY0EsRUFBRzdCLENBQWdCLEtBQUs2QixHQUFJLGNBSWpJeUUsS0FBYyxDQUFDckksR0FBSUMsSUFBVSxRQUM1QixPQUFPLFdBQVcsdUJBQXdCLGFBQW1CLFdBQVcsb0JBQW9CRCxHQUFJLEVBQUUsU0FBQUMsRUFBUSxDQUFDLElBQ3hHLFdBQVcsTUFBTUQsRUFBRztBQUFBLEVBQzFCLFlBQVk7QUFBQSxFQUNaLGVBQWUsTUFBTTtBQUN0QixDQUFDLEdBQUcsQ0FBQyxHQUVGc0ksSUFBc0IsSUFDdEJDLElBQTBCLEdBQzFCQyxLQUF5QixJQUN6QkMsS0FBMEIsSUFDMUJDLEtBQWtCLE1BQU07QUFDM0IsTUFBSTtBQUNILFdBQU8sV0FBVyxXQUFXLG1CQUFtQjtBQUFBLEVBQ2pELFFBQVE7QUFDUCxXQUFPO0FBQUEsRUFDUjtBQUNELEdBQ0lDLElBQStCLE1BQU07QUFDeEMsUUFBTUMsSUFBS0YsR0FBZ0I7QUFDM0IsTUFBS0U7QUFDTCxRQUFJO0FBQ0gsTUFBSUEsRUFBRyxvQkFBb0IsT0FBTUEsRUFBRyxrQkFBa0I7QUFBQSxJQUN2RCxRQUFRO0FBQUEsSUFBQztBQUNWLEdBQ0lDLEtBQWMsQ0FBQ2pGLE1BQU87QUFDekIsTUFBSSxDQUFDQSxLQUFNLEVBQUVBLGFBQWMsYUFBYyxRQUFPO0FBQ2hELE1BQUlBLEVBQUcsa0JBQW1CLFFBQU87QUFDakMsUUFBTWtGLElBQU1sRixFQUFHO0FBQ2YsTUFBSWtGLE1BQVEsY0FBY0EsTUFBUSxTQUFVLFFBQU87QUFDbkQsTUFBSUEsTUFBUSxRQUFTLFFBQU87QUFDNUIsUUFBTXBHLElBQU8sT0FBT2tCLEVBQUcsUUFBUSxNQUFNLEVBQUUsWUFBWTtBQUNuRCxTQUFPLENBQUM7QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRCxFQUFFLFNBQVNsQixDQUFJO0FBQ2hCLEdBQ0lxRyxLQUFtQixJQUNuQkMsSUFBYyxHQUNkQyxJQUFjLEdBQ2RDLEtBQTZCLENBQUNuQixHQUFPQyxHQUFRTCxJQUFPLEdBQUdFLElBQU0sTUFBTTtBQUN0RSxRQUFNc0IsSUFBWSxLQUFLLElBQUksR0FBRyxPQUFPcEIsQ0FBSyxLQUFLLENBQUMsR0FDMUNxQixJQUFhLEtBQUssSUFBSSxHQUFHLE9BQU9wQixDQUFNLEtBQUssQ0FBQyxHQUM1Q3FCLElBQVcsT0FBTzFCLENBQUksS0FBSyxHQUMzQjJCLElBQVUsT0FBT3pCLENBQUcsS0FBSztBQUMvQixTQUFPO0FBQUEsSUFDTixNQUFNd0I7QUFBQSxJQUNOLEtBQUtDO0FBQUEsSUFDTCxPQUFPRCxJQUFXRjtBQUFBLElBQ2xCLFFBQVFHLElBQVVGO0FBQUEsSUFDbEIsT0FBT0Q7QUFBQSxJQUNQLFFBQVFDO0FBQUEsRUFDVDtBQUNELEdBQ0lHLEtBQTJCLE1BQU07QUFDcEMsTUFBSSxPQUFPLFNBQVcsSUFBYSxRQUFPTCxHQUEyQixHQUFHLENBQUM7QUFDekUsUUFBTTNFLElBQU8sT0FBTyxXQUFhLE1BQWMsU0FBUyxrQkFBa0I7QUFDMUUsU0FBTzJFLEdBQTJCLE9BQU8zRSxHQUFNLFdBQVcsS0FBSyxPQUFPLE9BQU8sVUFBVSxLQUFLLEdBQUcsT0FBT0EsR0FBTSxZQUFZLEtBQUssT0FBTyxPQUFPLFdBQVcsS0FBSyxDQUFDO0FBQzdKLEdBQ0lpRixLQUFxQixNQUFNO0FBQzlCLE1BQUksT0FBTyxTQUFXLElBQWEsUUFBTztBQUFBLElBQ3pDLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxFQUNYO0FBQ0EsUUFBTW5DLElBQUssT0FBTyxnQkFDWm9DLElBQVMsT0FBTyxPQUFPLFVBQVUsS0FBSyxHQUN0Q0MsSUFBUyxPQUFPLE9BQU8sV0FBVyxLQUFLLEdBQ3ZDQyxJQUFNLE9BQU90QyxHQUFJLEtBQUssS0FBSyxHQUMzQnVDLElBQU0sT0FBT3ZDLEdBQUksTUFBTSxLQUFLLEdBQzVCd0MsSUFBUSxPQUFPeEMsR0FBSSxTQUFTLEtBQUssR0FDakN5QyxJQUFNLE9BQU9wQixHQUFnQixHQUFHLGFBQWEsTUFBTSxLQUFLLEdBQ3hEcUIsSUFBWUwsSUFBUyxLQUFLRSxJQUFNLElBQUlGLElBQVNFLElBQU1DLElBQVEsR0FDM0RHLElBQU96QjtBQUNiLE1BQUkwQixJQUFXRCxLQUFRMUIsSUFBc0IwQixJQUFPRixLQUFPeEIsSUFBc0J3QixJQUFNQyxLQUFhekIsSUFBc0J5QixJQUFZO0FBQ3RJLFFBQU1HLElBQWEsS0FBSyxJQUFJVCxHQUFRRSxDQUFHLEdBQ2pDUSxJQUFhLEtBQUssSUFBSVQsR0FBUUUsSUFBTUMsR0FBT0ksSUFBVyxJQUFJTCxJQUFNSyxJQUFXLENBQUMsR0FDNUVqRCxJQUFTLE9BQU8sYUFBZSxPQUFlLFdBQVcsMEJBQTBCLEdBQUcsVUFBVSxNQUFNO0FBQzVHLEVBQUlBLE1BQVcrQixPQUNkQSxLQUFtQi9CLEdBQ25CZ0MsSUFBYyxHQUNkQyxJQUFjO0FBRWYsUUFBTW1CLElBQWVuQixJQUFjLEtBQUtBLElBQWNrQixLQUFjN0I7QUFDcEUsTUFBSTJCLElBQVczQixLQUF1QjhCLEdBQWM7QUFDbkQsVUFBTUMsSUFBUyxLQUFLLElBQUksR0FBR3BCLElBQWNrQixHQUFZbEIsS0FBZVcsSUFBTUMsRUFBTTtBQUNoRixJQUFJUSxLQUFVL0IsTUFBcUIyQixJQUFXSTtBQUFBLEVBQy9DO0FBQ0EsU0FBTUosSUFBVyxLQUFLcEIsR0FBWSxTQUFTLGFBQWEsS0FBS3VCLEtBSTVEcEIsSUFBYyxLQUFLLElBQUlrQixHQUFZbEIsQ0FBVyxHQUM5Q0MsSUFBYyxLQUFLLElBQUlrQixHQUFZbEIsQ0FBVyxNQUo5Q0QsSUFBY2tCLEdBQ2RqQixJQUFja0IsSUFLUjtBQUFBLElBQ04sT0FBT25CLEtBQWVrQjtBQUFBLElBQ3RCLFFBQVFqQixLQUFla0I7QUFBQSxJQUN2QixVQUFBRjtBQUFBLEVBQ0Q7QUFDRCxHQUNJSyxLQUFtQixNQUFNO0FBQzVCLEVBQUksT0FBTyxTQUFXLE9BQ2xCZCxHQUFtQixFQUFFLFlBQVksS0FBSyxDQUFDWCxHQUFZLFNBQVMsYUFBYSxNQUN6RSxPQUFPLFdBQVcsU0FBUyxnQkFBZ0IsYUFBYSxTQUFTLE1BQU0sY0FBVyxPQUFPLFNBQVMsR0FBRyxDQUFDO0FBQzNHLEdBQ0kwQixLQUFlLE1BQU07QUFDeEIsRUFBQTVCLEVBQTZCO0FBQzdCLFFBQU02QixJQUFJLE9BQU8sYUFBYyxNQUFjLFdBQVcsMEJBQTBCLEdBQUcsVUFBVSxJQUN6Rm5ELElBQUssT0FBTyxTQUFXLE1BQWMsT0FBTyxpQkFBaUIsTUFDN0RvRCxJQUFTakIsR0FBbUIsR0FDNUJrQixJQUFVO0FBQUEsSUFDZixjQUFjLEdBQUdyRCxHQUFJLFVBQVUsT0FBTyxTQUFXLE1BQWMsT0FBTyxhQUFhLEVBQUU7QUFBQSxJQUNyRixlQUFlLEdBQUdBLEdBQUksV0FBVyxPQUFPLFNBQVcsTUFBYyxPQUFPLGNBQWMsRUFBRTtBQUFBLElBQ3hGLG9CQUFvQixHQUFHQSxHQUFJLGNBQWMsQ0FBQztBQUFBLElBQzFDLG1CQUFtQixHQUFHQSxHQUFJLGFBQWEsQ0FBQztBQUFBLElBQ3hDLGNBQWMsT0FBT0EsR0FBSSxTQUFTLENBQUM7QUFBQSxJQUNuQyxjQUFjLEdBQUdvRCxFQUFPLEtBQUs7QUFBQSxJQUM3QixlQUFlLEdBQUdBLEVBQU8sTUFBTTtBQUFBLElBQy9CLDZCQUE2QixHQUFHQSxFQUFPLFFBQVE7QUFBQSxJQUMvQyw2QkFBNkIsR0FBR0EsRUFBTyxRQUFRO0FBQUEsRUFDaEQ7QUFFQSxNQURJLE9BQU8sV0FBYSxPQUFhLFNBQVMsZ0JBQWdCLGdCQUFnQixnQkFBZ0JBLEVBQU8sV0FBVyxDQUFDLEdBQzdHLE9BQU8sU0FBVSxLQUFhO0FBQ2pDLFVBQU1FLElBQUssUUFBUSxhQUFhLE1BQzFCQyxJQUFLLFFBQVEsY0FBYztBQUNqQyxXQUFPO0FBQUEsTUFDTixrQkFBa0IsS0FBSyxJQUFJLFFBQVEsT0FBTyxRQUFRLFVBQVUsSUFBSTtBQUFBLE1BQ2hFLG1CQUFtQixLQUFLLElBQUksUUFBUSxRQUFRLFFBQVEsV0FBVyxJQUFJO0FBQUEsTUFDbkUsaUJBQWlCSixJQUFJSSxJQUFLRDtBQUFBLE1BQzFCLGtCQUFrQkgsSUFBSUcsSUFBS0M7QUFBQSxNQUMzQixpQkFBaUIsR0FBR0gsRUFBTyxVQUFVLEtBQUssSUFBSSxRQUFRLGFBQWEsUUFBUSxXQUFXLEtBQUssQ0FBQztBQUFBLE1BQzVGLGlCQUFpQixPQUFPLG9CQUFvQixDQUFDO0FBQUEsTUFDN0MsR0FBR0M7QUFBQSxJQUNKO0FBQUEsRUFDRDtBQUNBLFNBQU87QUFBQSxJQUNOLGtCQUFrQjtBQUFBLElBQ2xCLG1CQUFtQjtBQUFBLElBQ25CLGlCQUFpQjtBQUFBLElBQ2pCLGtCQUFrQjtBQUFBLElBQ2xCLGlCQUFpQixHQUFHRCxFQUFPLE1BQU07QUFBQSxJQUNqQyxpQkFBaUI7QUFBQSxJQUNqQixHQUFHQztBQUFBLEVBQ0o7QUFDRCxHQUNJRyxLQUFZTixHQUFhLEdBQ3pCTyxLQUFVLENBQUMsQ0FBQyx3QkFBd0JELEVBQVMsQ0FBQyxHQUM5Q0UsS0FBdUI7QUFBQSxFQUMxQixvQkFBb0I7QUFBQSxFQUNwQixxQkFBcUI7QUFBQSxFQUNyQixzQkFBc0I7QUFBQSxFQUN0Qix1QkFBdUI7QUFDeEIsR0FDSUMsS0FBVyxDQUFDaEksTUFBTztBQUN0QixRQUFNaUksSUFBTyxTQUFTO0FBQ3RCLFNBQU8sT0FBT0osSUFBV04sR0FBYSxDQUFDLEdBQ3ZDLE9BQU8sUUFBUU0sRUFBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDSyxHQUFVQyxDQUFTLE1BQU07QUFDNUQsVUFBTUMsSUFBU0gsR0FBTSxPQUFPLGlCQUFpQkMsQ0FBUTtBQUNyRCxLQUFJLENBQUNFLEtBQVVBLEtBQVVELE1BQVdGLEdBQU0sT0FBTyxjQUFjQyxHQUFVQyxLQUFhLElBQUksRUFBRTtBQUFBLEVBQzdGLENBQUMsR0FDRCxTQUFTLGdCQUFnQixNQUFNLFlBQVksMkJBQTJCLFFBQVEsYUFBYSxNQUFNLFdBQVcsV0FBVyxJQUFJLE1BQU0sR0FBRztBQUNySSxHQUNJRSxLQUF3QixNQUFNO0FBQ2pDLE1BQUlDLElBQWtCLFFBQVEsYUFBYSxRQUFRO0FBQ25ELFNBQUssV0FBVyxXQUFXLHVHQUF1RyxFQUFFLFlBQy9ILFdBQVcseUJBQXlCLEVBQUUsVUFBU0EsSUFBa0JBLEVBQWdCLFFBQVEsYUFBYSxVQUFVLElBQzNHLFdBQVcsMEJBQTBCLEVBQUUsWUFBU0EsSUFBa0JBLEVBQWdCLFFBQVEsWUFBWSxXQUFXLEtBRXBIQTtBQUNSLEdBQ0lDLElBQWdCLEVBQUUsU0FBUyxHQUFLLEdBQ2hDQyxLQUF3QixNQUFNO0FBQ2pDLE1BQUloRCxNQUEwQixPQUFPLGFBQWUsSUFBYTtBQUNqRSxRQUFNaUQsSUFBTSxXQUFXLFdBQ2pCQyxJQUFXRCxHQUFLLFNBQVM7QUFFL0IsTUFESSxDQUFDQyxHQUFVLGVBQ1gsT0FBT0QsRUFBSSxvQkFBcUIsY0FBYyxDQUFDQSxFQUFJLGlCQUFpQixFQUFHO0FBQzNFLEVBQUFqRCxLQUF5QjtBQUN6QixNQUFJO0FBQ0gsSUFBQWtELEVBQVMsWUFBWSxFQUFFLFlBQVksR0FBSyxDQUFDO0FBQUEsRUFDMUMsUUFBUTtBQUFBLEVBQUM7QUFDVCxNQUFJO0FBQ0gsSUFBQUEsRUFBUyxnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUFBLEVBQzFDLFFBQVE7QUFBQSxFQUFDO0FBQ1QsUUFBTUMsSUFBUyxDQUFDQyxNQUFTO0FBQ3hCLFVBQU1DLElBQU8sT0FBT0QsR0FBTSxjQUFjLEtBQUs7QUFDN0MsSUFBSUMsSUFBTyxNQUFHdEQsSUFBMEJzRCxJQUN4Q2IsR0FBUztBQUFBLEVBQ1YsR0FDTWMsSUFBUyxNQUFNO0FBQ3BCLElBQUF2RCxJQUEwQixHQUMxQnlDLEdBQVM7QUFBQSxFQUNWO0FBQ0EsRUFBQVUsRUFBUyxZQUFZLG9CQUFvQkMsQ0FBTSxHQUMvQ0QsRUFBUyxZQUFZLG1CQUFtQkMsQ0FBTSxHQUM5Q0QsRUFBUyxZQUFZLG9CQUFvQkksQ0FBTSxHQUMvQ0osRUFBUyxZQUFZLG1CQUFtQkksQ0FBTTtBQUMvQyxHQUNJQyxLQUF5QixNQUFNO0FBQ2xDLEVBQUl0RCxNQUEyQixPQUFPLFNBQVcsUUFDakRBLEtBQTBCLElBQzFCK0MsR0FBc0IsR0FDdEJRLEdBQXFCLE1BQU07QUFBQSxFQUFDLENBQUM7QUFDOUIsR0FDSUEsS0FBdUIsQ0FBQ2hNLE1BQU87QUFDbEMsTUFBSWlNLElBQVU7QUFDZCxRQUFNQyxJQUFTLE1BQU07QUFDcEIsSUFBS0QsTUFDSixzQkFBc0IsTUFBTTtBQUMzQixNQUFBakIsR0FBUyxHQUNUaEwsRUFBRyxHQUNIaU0sSUFBVTtBQUFBLElBQ1gsQ0FBQyxHQUNEQSxJQUFVO0FBQUEsRUFFWixHQUNNRSxJQUFnQixDQUFDO0FBQ3ZCLFNBQUFYLEdBQXNCLEdBQ3RCVyxFQUFjLEtBQUtqSSxFQUFTLFdBQVcsaUJBQWlCLGtCQUFrQmdJLEdBQVFYLENBQWEsQ0FBQyxHQUNoR1ksRUFBYyxLQUFLakksRUFBUyxRQUFRLGdCQUFnQixVQUFVLE1BQU07QUFDbkUsSUFBQW9HLEdBQWlCLEdBQ2pCNEIsRUFBTztBQUFBLEVBQ1IsR0FBR1gsQ0FBYSxDQUFDLEdBQ2pCWSxFQUFjLEtBQUtqSSxFQUFTLFFBQVEsZ0JBQWdCLFVBQVVnSSxHQUFRWCxDQUFhLENBQUMsR0FDcEZZLEVBQWMsS0FBS2pJLEVBQVMsUUFBUSxhQUFhLFVBQVVnSSxDQUFNLENBQUMsR0FDbEVDLEVBQWMsS0FBS2pJLEVBQVMsUUFBUSxVQUFVZ0ksQ0FBTSxDQUFDLEdBQ3JEQyxFQUFjLEtBQUtqSSxFQUFTLFVBQVUsaUJBQWlCLG9CQUFvQmdJLENBQU0sQ0FBQyxHQUNsRkMsRUFBYyxLQUFLakksRUFBUyxVQUFVLG9CQUFvQmdJLENBQU0sQ0FBQyxHQUNqRUMsRUFBYyxLQUFLakksRUFBUyxXQUFXLHlCQUF5QixHQUFHLFVBQVVnSSxDQUFNLENBQUMsR0FDcEZDLEVBQWMsS0FBS2pJLEVBQVMsV0FBVywwQkFBMEIsR0FBRyxVQUFVZ0ksQ0FBTSxDQUFDLEdBQ3JGQyxFQUFjLEtBQUtqSSxFQUFTLFVBQVUsV0FBVyxNQUFNO0FBQ3RELElBQUFzSCxHQUFzQixHQUN0QjdDLEVBQTZCLEdBQ3pCRSxHQUFZLFNBQVMsYUFBYSxNQUNyQ0csSUFBYyxLQUFLLElBQUlBLEdBQWEsT0FBTyxPQUFPLFVBQVUsS0FBSyxHQUFHLE9BQU8sT0FBTyxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsR0FDN0dDLElBQWMsS0FBSyxJQUFJQSxHQUFhLE9BQU8sT0FBTyxXQUFXLEtBQUssR0FBRyxPQUFPLE9BQU8sZ0JBQWdCLE1BQU0sS0FBSyxDQUFDLElBRWhIcUIsR0FBaUIsR0FDakI0QixFQUFPO0FBQUEsRUFDUixHQUFHO0FBQUEsSUFDRixTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsRUFDVixDQUFDLENBQUMsR0FDRkMsRUFBYyxLQUFLakksRUFBUyxVQUFVLFlBQVlnSSxHQUFRWCxDQUFhLENBQUMsR0FDeEU1QyxFQUE2QixHQUM3QnVELEVBQU8sR0FDUDdELEdBQVksTUFBTTZELEVBQU8sR0FBRyxHQUFHLEdBQ3hCLE1BQU1DLEVBQWMsUUFBUSxDQUFDQyxNQUFVQSxFQUFNLENBQUM7QUFDdEQsR0FDSUMsS0FBb0IsQ0FBQ2xNLE1BQVk7QUFDcEMsTUFBSSxDQUFDQSxHQUFTLFdBQVcsV0FBVywyQkFBMkI7QUFDOUQsV0FBQUEsR0FBUyxXQUFXLE1BQU0sMkJBQTJCLEdBQzlDNkwsR0FBcUIsTUFBTTtBQUNqQyxZQUFNSCxJQUFPZCxLQUF1Qk0sR0FBc0IsQ0FBQyxLQUFLO0FBQ2hFLE1BQUFsTCxFQUFRLFNBQVMwTCxHQUNqQjFMLEVBQVEsZUFBZSxVQUFVLE9BQU8wTCxDQUFJLENBQUMsR0FDN0MxTCxFQUFRLE9BQU8sY0FBYyxZQUFZLE9BQU8wTCxDQUFJLENBQUM7QUFBQSxJQUN0RCxDQUFDO0FBRUgsR0FJSVMsSUFBTSxJQUFJLGdCQUFnQixHQUFHLENBQUMsRUFBRSxXQUFXLElBQUksR0FDL0NDLEtBQWdCLENBQUNwTSxHQUFTbU0sTUFBUTtBQUNyQyxRQUFNRSxJQUFRLGlCQUFpQnJNLEdBQVMsRUFBRTtBQUMxQyxNQUFJbU0sS0FBT0UsR0FBTztBQUNqQixVQUFNQyxJQUFhRCxFQUFNLGlCQUFpQixhQUFhLEtBQUssVUFDdERFLElBQVdGLEVBQU0saUJBQWlCLFdBQVcsS0FBSyxRQUNsREcsSUFBYUgsRUFBTSxpQkFBaUIsYUFBYSxLQUFLLG1CQUN0REksSUFBY0osRUFBTSxpQkFBaUIsY0FBYyxLQUFLO0FBQzlELFFBQUk7QUFDSCxNQUFBRixFQUFJLGNBQWNNLEVBQVksU0FBUyxHQUFHLElBQUksV0FBV0E7QUFBQSxJQUMxRCxRQUFZO0FBQUEsSUFBQztBQUNiLFFBQUk7QUFDSCxNQUFBTixFQUFJLGdCQUFnQkUsRUFBTSxpQkFBaUIsZ0JBQWdCLEtBQUs7QUFBQSxJQUNqRSxRQUFZO0FBQUEsSUFBQztBQUNiLFFBQUk7QUFDSCxNQUFBRixFQUFJLGNBQWNFLEVBQU0saUJBQWlCLGNBQWMsS0FBSztBQUFBLElBQzdELFFBQVk7QUFBQSxJQUFDO0FBQ2IsUUFBSTtBQUNILE1BQUFGLEVBQUksa0JBQWtCRSxFQUFNLGlCQUFpQixtQkFBbUIsS0FBSztBQUFBLElBQ3RFLFFBQVk7QUFBQSxJQUFDO0FBQ2IsUUFBSTtBQUNILE1BQUFGLEVBQUksT0FBTyxHQUFHRyxDQUFVLElBQUlDLENBQVEsSUFBSUMsQ0FBVTtBQUFBLElBQ25ELFFBQVk7QUFBQSxJQUFDO0FBQUEsRUFDZDtBQUNELEdBQ0lFLEtBQWMsQ0FBQ0MsR0FBTTNNLE1BQVk7QUFDcEMsTUFBSW1NLEdBQUs7QUFDUixJQUFBQyxHQUFjcE0sR0FBU21NLENBQUc7QUFDMUIsUUFBSTtBQUNILGFBQU9BLEVBQUksWUFBWVEsQ0FBSTtBQUFBLElBQzVCLFFBQVk7QUFBQSxJQUFDO0FBQUEsRUFDZDtBQUNBLFNBQU8sRUFBRSxPQUFPLEtBQUs7QUFDdEIsR0FDSUMsS0FBc0IsQ0FBQ2hLLE1BQVU7QUFDcEMsUUFBTStKLElBQU8vSixFQUFNLE1BQU0sTUFBTSxHQUFHQSxFQUFNLGdCQUFnQixDQUFDO0FBQ3pELFNBQU84SixHQUFZQyxHQUFNL0osQ0FBSztBQUMvQixHQUNJaUssS0FBdUIsQ0FBQ2pLLEdBQU9rSyxNQUFVO0FBQzVDLFFBQU1ILElBQU8vSixHQUFPLFNBQVM7QUFDN0IsTUFBSXVKLEdBQUs7QUFDUixJQUFBQyxHQUFjeEosR0FBT3VKLENBQUc7QUFDeEIsUUFBSVksSUFBZTtBQUNuQixhQUFTLElBQUksR0FBRyxJQUFJSixFQUFLLFFBQVEsS0FBSztBQUVyQyxVQURBSSxJQUFlWixFQUFJLFlBQVlRLEVBQUssTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQzlDSSxLQUFnQixLQUFNLFFBQU9KLEVBQUs7QUFDdEMsVUFBSUksS0FBZ0IsUUFBUUEsS0FBZ0JELEVBQU0sQ0FBQyxFQUFHLFFBQU8sS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDO0FBQUEsSUFDL0U7QUFBQSxFQUNEO0FBQ0EsU0FBT0gsRUFBSztBQUNiLEdBQ0lLLEtBQWlDLENBQUNwSyxHQUFPcUssTUFBVztBQUN2RCxRQUFNbEcsSUFBTW5FLEVBQU0sc0JBQXNCLEdBQ2xDa0ssSUFBUSxDQUFDRyxFQUFPLENBQUMsSUFBSWxHLEVBQUksT0FBT1AsRUFBa0IsR0FBR3lHLEVBQU8sQ0FBQyxJQUFJbEcsRUFBSSxNQUFNUCxFQUFrQixDQUFDO0FBQ3BHLFNBQU9xRyxHQUFxQmpLLEdBQU9rSyxDQUFLO0FBQ3pDLEdBSUlJLEtBQWdDLENBQUN6SixHQUFJMEosTUFBbUI7QUFDM0QsUUFBTUMsSUFBSSxTQUFTM0osRUFBRyxhQUFhLG1CQUFtQixLQUFLLElBQUksRUFBRSxHQUMzRCxJQUFJLFNBQVNBLEVBQUcsYUFBYSxnQkFBZ0IsS0FBSyxJQUFJLEVBQUUsR0FDeEQ0SixJQUFPN08sR0FBb0IyTyxLQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pELFNBQU8sQ0FBQyxPQUFPLFNBQVNDLENBQUMsS0FBS0EsSUFBSSxJQUFJQSxJQUFJQyxFQUFLLENBQUMsR0FBRyxPQUFPLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJQSxFQUFLLENBQUMsQ0FBQztBQUM3RixHQUNJQyxLQUFpQyxDQUFDQyxHQUFZQyxHQUFhbE0sR0FBTW1NLElBQU8sWUFBWTtBQUN2RixNQUFJLENBQUNGLEVBQVksUUFBTyxDQUFDLEdBQUcsQ0FBQztBQUM3QixRQUFNRyxJQUFPSCxFQUFXLHdCQUF3QjtBQUNoRCxNQUFJLENBQUNHLEVBQU0sUUFBTyxDQUFDLEdBQUcsQ0FBQztBQUN2QixRQUFNcEQsSUFBUzRDLEdBQThCSyxHQUFZak0sR0FBTSxNQUFNLEdBQy9EdUYsSUFBU0osRUFBUzhHLENBQVUsR0FDNUJJLElBQUssV0FBVyxtQkFBbUJKLENBQVUsR0FDN0NLLElBQUssV0FBV0QsR0FBSSxXQUFXLEtBQUssR0FDcENFLElBQUssV0FBV0YsR0FBSSxVQUFVLEtBQUssR0FDbkNHLElBQUssV0FBV0gsR0FBSSxZQUFZLEtBQUssR0FDckNJLElBQUssV0FBV0osR0FBSSxhQUFhLEtBQUssR0FDdENLLElBQVcsS0FBSyxJQUFJLElBQUlOLEVBQUssU0FBU0gsRUFBVyxlQUFlLEtBQUtLLElBQUtFLENBQUUsR0FDNUVHLElBQVcsS0FBSyxJQUFJLElBQUlQLEVBQUssVUFBVUgsRUFBVyxnQkFBZ0IsS0FBS00sSUFBS0UsQ0FBRSxHQUM5RUcsSUFBVSxFQUFFVixJQUFjLENBQUMsS0FBSyxLQUFLRSxFQUFLLE9BQU9FLElBQUtKLElBQWMsQ0FBQyxLQUFLLEtBQUtFLEVBQUssTUFBTUcsQ0FBRTtBQUNsRyxTQUFPblAsR0FBNEJ3UCxHQUFTLENBQUNGLEdBQVVDLENBQVEsR0FBRzNELEdBQVF6RCxHQUFRO0FBQUEsSUFDakYsTUFBQTRHO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDVCxNQUFNbk0sR0FBTTtBQUFBLE1BQ1osTUFBTUEsR0FBTTtBQUFBLE1BQ1osT0FBT0EsR0FBTTtBQUFBLElBQ2Q7QUFBQSxFQUNELENBQUM7QUFDRixHQUlJNk0sS0FBYyxDQUFDeEssTUFBV2hGLEdBQU9nRixHQUFROUUsRUFBUyxHQUNsRHVQLEtBQWMsQ0FBQ3pLLE1BQVc3RSxHQUFVNkUsR0FBUS9FLEVBQVMsR0FJckR5UCxLQUFtQixDQUFDQyxJQUFRLEtBQUtDLElBQVksTUFBS0MsSUFBTyxNQUFNO0FBQ2xFLFFBQU1DLElBQVMsQ0FBQztBQUNoQixXQUFTQyxJQUFJLEdBQUdBLElBQUlKLEdBQU9JLElBQUssQ0FBQUQsRUFBTyxLQUFLQyxJQUFJSixDQUFLO0FBQ3JELFFBQU1LLElBQVEsQ0FBQ0MsTUFDUCxRQUFRQSxDQUFJLGlCQUVkQyxJQUFVLENBQUNELE1BQ1QsNENBQTRDRCxFQUFNQyxDQUFJLENBQUMsK0NBRXpERSxJQUFPLENBQUNGLE1BQVMsQ0FBQyw0QkFBNEJELEVBQU1DLENBQUksQ0FBQyxrQkFBa0JDLEVBQVFELENBQUksQ0FBQyxpQ0FBaUMsNEJBQTRCRCxFQUFNQyxDQUFJLENBQUMsa0JBQWtCQyxFQUFRRCxDQUFJLENBQUMsK0JBQStCO0FBQ3BPLFNBQU87QUFBQSxJQUNOLG9CQUFvQkw7QUFBQSxJQUNwQixlQUFlQztBQUFBLElBQ2YsZUFBZSxXQUFXQyxFQUFPLElBQUksQ0FBQ0csTUFDOUJFLEVBQUtGLENBQUksRUFBRSxLQUFLLEdBQUcsQ0FDMUIsRUFBRSxLQUFLLElBQUksQ0FBQztBQUFBLEVBQ2Q7QUFDRCxHQUlJRyxLQUF3Qix1QkFBTyxJQUFJLHdCQUF3QixHQUMzREMsSUFBb0IsV0FBV0QsRUFBcUIsTUFBc0Isb0JBQUksUUFBUSxHQUN0RkUsS0FBeUIsdUJBQU8sSUFBSSx5QkFBeUIsR0FDN0RDLElBQXFCLFdBQVdELEVBQXNCLE1BQXNCLG9CQUFJLFFBQVEsR0FDeEZFLElBQWtCLENBQUNuUCxPQUNsQixPQUFPQSxHQUFTLFdBQVcsYUFBVUEsSUFBVUEsR0FBUyxXQUFXQSxHQUFTLFlBQVksT0FBT0EsR0FBUyxRQUFRLFdBQVdBLEdBQVMsT0FBTyxTQUFTQSxJQUNqSkEsSUFFSm9QLElBQW9CLENBQUNoTSxHQUFVaU0sSUFBVyxRQUN6QyxPQUFPak0sS0FBYSxXQUFpQmlNLElBQ2xDak0sRUFBUyxLQUFLLEtBQUtpTSxHQUV2QkMsSUFBdUIsQ0FBQzdMLEdBQUlMLE1BQWE7QUFDNUMsTUFBSSxDQUFDSyxLQUFNLE9BQU9BLEVBQUcsb0JBQXFCLFdBQVksUUFBTyxDQUFDO0FBQzlELFFBQU1HLElBQU13TCxFQUFrQmhNLEdBQVUsRUFBRTtBQUMxQyxNQUFJLENBQUNRLEVBQUssUUFBTyxDQUFDO0FBQ2xCLE1BQUk7QUFDSCxXQUFPLE1BQU0sS0FBS0gsRUFBRyxpQkFBaUJHLENBQUcsS0FBSyxDQUFDLENBQUM7QUFBQSxFQUNqRCxRQUFRO0FBQ1AsV0FBTyxDQUFDO0FBQUEsRUFDVDtBQUNELEdBQ0kyTCxLQUFjLENBQUM5TCxHQUFJTCxNQUFhO0FBQ25DLE1BQUksQ0FBQ0ssS0FBTSxPQUFPQSxFQUFHLFdBQVksV0FBWSxRQUFPO0FBQ3BELFFBQU1HLElBQU13TCxFQUFrQmhNLEdBQVUsRUFBRTtBQUMxQyxNQUFJLENBQUNRLEVBQUssUUFBTztBQUNqQixNQUFJO0FBQ0gsV0FBTyxDQUFDLENBQUNILEVBQUcsUUFBUUcsQ0FBRztBQUFBLEVBQ3hCLFFBQVE7QUFDUCxXQUFPO0FBQUEsRUFDUjtBQUNELEdBQ0k0TCxLQUFvQixDQUFDeFAsR0FBU0gsTUFBTztBQUN4QyxNQUFJLENBQUNxUCxFQUFtQixJQUFJbFAsSUFBVW1QLEVBQWdCblAsQ0FBTyxDQUFDLEdBQUc7QUFDaEUsVUFBTXlQLElBQVksQ0FBQyxHQUNiek4sSUFBVyxJQUFJLGVBQWUsQ0FBQ0MsTUFBWTtBQUNoRCxpQkFBV0MsS0FBU0QsRUFBUyxLQUFJQyxFQUFNLGdCQUFnQjtBQUN0RCxjQUFNQyxJQUFpQkQsRUFBTSxlQUFlLENBQUM7QUFDN0MsUUFBSUMsS0FBZ0JzTixFQUFVLFFBQVEsQ0FBQzVQLE1BQU9BLElBQUtzQyxHQUFnQkgsQ0FBUSxDQUFDO0FBQUEsTUFDN0U7QUFBQSxJQUNELENBQUM7QUFDRCxJQUFBbkMsSUFBSztBQUFBLE1BQ0osWUFBWUcsRUFBUTtBQUFBLE1BQ3BCLFdBQVdBLEVBQVE7QUFBQSxJQUNwQixHQUFHZ0MsQ0FBUSxHQUNYa04sRUFBbUIsSUFBSWxQLEdBQVN5UCxDQUFTLElBQ3BDelAsR0FBUyxXQUFXQSxjQUFvQixRQUFNZ0MsRUFBUyxRQUFRaEMsR0FBUyxXQUFXQSxHQUFTLEVBQUUsS0FBSyxjQUFjLENBQUM7QUFBQSxFQUN4SDtBQUNBLFNBQUFrUCxFQUFtQixJQUFJbFAsQ0FBTyxHQUFHLE9BQU9ILENBQUUsR0FDbkMsRUFBRSxZQUFZLE1BQU1xUCxFQUFtQixJQUFJbFAsQ0FBTyxHQUFHLFNBQVNrUCxFQUFtQixJQUFJbFAsQ0FBTyxHQUFHLFFBQVFILENBQUUsS0FBSyxJQUFJLENBQUMsRUFBRTtBQUM3SCxHQUNJNlAsS0FBbUIsQ0FBQzFQLEdBQVNILE1BQU87QUFDdkMsTUFBSSxDQUFDbVAsRUFBa0IsSUFBSWhQLElBQVVtUCxFQUFnQm5QLENBQU8sQ0FBQyxHQUFHO0FBQy9ELFVBQU15UCxJQUFZLENBQUMsR0FDYnpOLElBQVcsSUFBSSxlQUFlLENBQUNDLE1BQVk7QUFDaEQsaUJBQVdDLEtBQVNELEVBQVMsS0FBSUMsRUFBTSxlQUFlO0FBQ3JELGNBQU1HLElBQWdCSCxFQUFNLGNBQWMsQ0FBQztBQUMzQyxRQUFJRyxLQUFlb04sRUFBVSxRQUFRLENBQUM1UCxNQUFPQSxJQUFLd0MsR0FBZUwsQ0FBUSxDQUFDO0FBQUEsTUFDM0U7QUFBQSxJQUNELENBQUM7QUFDRCxJQUFBbkMsSUFBSztBQUFBLE1BQ0osWUFBWUcsRUFBUTtBQUFBLE1BQ3BCLFdBQVdBLEVBQVE7QUFBQSxJQUNwQixHQUFHZ0MsQ0FBUSxHQUNYZ04sRUFBa0IsSUFBSWhQLEdBQVN5UCxDQUFTLElBQ25DelAsR0FBUyxXQUFXQSxjQUFvQixRQUFNZ0MsRUFBUyxRQUFRaEMsR0FBUyxXQUFXQSxHQUFTLEVBQUUsS0FBSyxhQUFhLENBQUM7QUFBQSxFQUN2SDtBQUNBLFNBQUFnUCxFQUFrQixJQUFJaFAsQ0FBTyxHQUFHLE9BQU9ILENBQUUsR0FDbEMsRUFBRSxZQUFZLE1BQU1tUCxFQUFrQixJQUFJaFAsQ0FBTyxHQUFHLFNBQVNnUCxFQUFrQixJQUFJaFAsQ0FBTyxHQUFHLFFBQVFILENBQUUsS0FBSyxJQUFJLENBQUMsRUFBRTtBQUMzSCxHQUNJOFAsS0FBbUIsQ0FBQzNQLEdBQVM0UCxHQUFXL1AsTUFBTztBQUNsRCxNQUFJLE9BQU9HLEdBQVMsWUFBWSxTQUFVLFFBQU82UCxHQUEyQjdQLEdBQVNBLEdBQVMsVUFBVTRQLEdBQVcvUCxDQUFFO0FBQ3JILFFBQU1pUSxJQUFnQixJQUFJLEtBQUtGLEVBQVUsTUFBTSxHQUFHLEtBQUssQ0FBQ0EsQ0FBUyxHQUFHLElBQUksQ0FBQ0csTUFBTUEsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUNsRi9OLElBQVcsSUFBSSxpQkFBaUIsQ0FBQ2dPLEdBQWNoTyxNQUFhO0FBQ2pFLGVBQVdpTyxLQUFZRCxFQUFjLENBQUlDLEVBQVMsaUJBQWlCSCxFQUFjLElBQUlHLEVBQVMsYUFBYSxLQUFHcFEsRUFBR29RLEdBQVVqTyxDQUFRO0FBQUEsRUFDcEksQ0FBQztBQUNELFVBQUtoQyxHQUFTLFdBQVdBLGNBQW9CLFFBQU1nQyxFQUFTLFFBQVFoQyxJQUFVbVAsRUFBZ0JuUCxDQUFPLEdBQUc7QUFBQSxJQUN2RyxZQUFZO0FBQUEsSUFDWixtQkFBbUI7QUFBQSxJQUNuQixpQkFBaUIsQ0FBQyxHQUFHOFAsQ0FBYTtBQUFBLEVBQ25DLENBQUMsR0FDREEsRUFBYyxRQUFRLENBQUNGLE1BQWMvUCxFQUFHO0FBQUEsSUFDdkMsUUFBUUc7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLGVBQWU0UDtBQUFBLElBQ2YsVUFBVTVQLEdBQVMsZUFBZTRQLENBQVM7QUFBQSxFQUM1QyxHQUFHNU4sQ0FBUSxDQUFDLEdBQ0xBO0FBQ1IsR0FDSTZOLEtBQTZCLENBQUM3UCxHQUFTb0QsR0FBVXdNLEdBQVcvUCxNQUFPO0FBQ3RFLFFBQU0rRCxJQUFNd0wsRUFBa0JoTSxDQUFRLEdBQ2hDME0sSUFBZ0IsSUFBSSxJQUFJLENBQUMsR0FBR0YsRUFBVSxNQUFNLEdBQUcsS0FBSyxDQUFDQSxDQUFTLENBQUMsRUFBRSxJQUFJLENBQUNHLE1BQU1BLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FDckYvTixJQUFXLElBQUksaUJBQWlCLENBQUNnTyxHQUFjaE8sTUFBYTtBQUNqRSxlQUFXaU8sS0FBWUQsRUFBYyxLQUFJQyxFQUFTLFFBQVEsYUFBYTtBQUN0RSxZQUFNQyxJQUFhLE1BQU0sS0FBS0QsRUFBUyxVQUFVLEtBQUssQ0FBQyxHQUNqREUsSUFBZSxNQUFNLEtBQUtGLEVBQVMsWUFBWSxLQUFLLENBQUM7QUFDM0QsTUFBQUMsRUFBVyxLQUFLLEdBQUcsTUFBTSxLQUFLRCxFQUFTLGNBQWMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDeE0sTUFBTzZMLEVBQXFCN0wsR0FBSUcsQ0FBRyxDQUFDLENBQUMsR0FDdkd1TSxFQUFhLEtBQUssR0FBRyxNQUFNLEtBQUtGLEVBQVMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQ3hNLE1BQU82TCxFQUFxQjdMLEdBQUlHLENBQUcsQ0FBQyxDQUFDLEdBQzNHLENBQUMsR0FBRyxJQUFJLElBQUlzTSxDQUFVLENBQUMsRUFBRSxPQUFPLENBQUN6TSxNQUFPOEwsR0FBWTlMLEdBQUlHLENBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQ0QsTUFBVztBQUNoRixRQUFBbU0sRUFBYyxRQUFRLENBQUNGLE1BQWM7QUFDcEMsVUFBQS9QLEVBQUc7QUFBQSxZQUNGLFFBQUE4RDtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sZUFBZWlNO0FBQUEsWUFDZixVQUFVak0sR0FBUSxlQUFlaU0sQ0FBUztBQUFBLFVBQzNDLEdBQUc1TixDQUFRO0FBQUEsUUFDWixDQUFDO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDRixNQUFPLENBQUl1TixHQUFZVSxFQUFTLFFBQVFyTSxDQUFHLEtBQUtxTSxFQUFTLGlCQUFpQkgsRUFBYyxJQUFJRyxFQUFTLGFBQWEsS0FBR3BRLEVBQUdvUSxHQUFVak8sQ0FBUTtBQUFBLEVBQzNJLENBQUM7QUFDRCxTQUFBQSxFQUFTLFFBQVFoQyxJQUFVbVAsRUFBZ0JuUCxDQUFPLEdBQUc7QUFBQSxJQUNwRCxtQkFBbUI7QUFBQSxJQUNuQixZQUFZO0FBQUEsSUFDWixpQkFBaUIsQ0FBQyxHQUFHOFAsQ0FBYTtBQUFBLElBQ2xDLFdBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxJQUNULGVBQWU7QUFBQSxFQUNoQixDQUFDLEdBQ0RSLEVBQXFCdFAsR0FBUzRELENBQUcsRUFBRSxJQUFJLENBQUNELE1BQVdtTSxFQUFjLFFBQVEsQ0FBQ0YsTUFBYy9QLEVBQUc7QUFBQSxJQUMxRixRQUFBOEQ7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOLGVBQWVpTTtBQUFBLElBQ2YsVUFBVWpNLEdBQVEsZUFBZWlNLENBQVM7QUFBQSxFQUMzQyxHQUFHNU4sQ0FBUSxDQUFDLENBQUMsR0FDTkE7QUFDUixHQUNJb08sS0FBb0IsQ0FBQ3BRLEdBQVNvRCxJQUFXLEtBQUt2RCxJQUFLLENBQUN3USxHQUFLQyxNQUFRO0FBQUMsTUFBTTtBQUMzRSxRQUFNMU0sSUFBTXdMLEVBQWtCaE0sQ0FBUSxHQUNoQ21OLElBQXdCLENBQUNDLE1BQVU7QUFDeEMsVUFBTUMsSUFBUyxNQUFNLEtBQUtELEtBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUMzQyxXQUFBQyxFQUFPLEtBQUssR0FBRyxNQUFNLEtBQUtELEtBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDL00sTUFBTzZMLEVBQXFCN0wsR0FBSUcsQ0FBRyxDQUFDLENBQUMsR0FDOUUsQ0FBQyxHQUFHLE1BQU0sS0FBSyxJQUFJLElBQUk2TSxDQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUNoTixNQUFPOEwsR0FBWTlMLEdBQUlHLENBQUcsQ0FBQztBQUFBLEVBQ3JGO0FBQ0EsTUFBSThNLElBQVE7QUFDWixRQUFNQyxJQUFpQixDQUFDVixNQUFhO0FBQ3BDLFVBQU1qTyxJQUFXME8sR0FBTyxRQUFRLEdBQzFCUixJQUFhSyxFQUFzQk4sRUFBUyxVQUFVLEdBQ3RERSxJQUFlSSxFQUFzQk4sRUFBUyxZQUFZO0FBQ2hFLEtBQUlDLEVBQVcsU0FBUyxLQUFLQyxFQUFhLFNBQVMsTUFBR3RRLElBQUs7QUFBQSxNQUMxRCxNQUFNb1EsRUFBUztBQUFBLE1BQ2YsUUFBUUEsRUFBUztBQUFBLE1BQ2pCLGVBQWVBLEVBQVM7QUFBQSxNQUN4QixvQkFBb0JBLEVBQVM7QUFBQSxNQUM3QixhQUFhQSxFQUFTO0FBQUEsTUFDdEIsVUFBVUEsRUFBUztBQUFBLE1BQ25CLGlCQUFpQkEsRUFBUztBQUFBLE1BQzFCLFlBQUFDO0FBQUEsTUFDQSxjQUFBQztBQUFBLElBQ0QsR0FBR25PLENBQVE7QUFBQSxFQUNaLEdBQ000TyxJQUFhLENBQUMvTixNQUFPO0FBQzFCLElBQUE4TixFQUFlO0FBQUEsTUFDZCxZQUFZLENBQUM5TixHQUFJLE1BQU0sRUFBRSxPQUFPLENBQUNZLE1BQU8sQ0FBQyxDQUFDQSxDQUFFO0FBQUEsTUFDNUMsY0FBYyxDQUFDWixHQUFJLGFBQWEsRUFBRSxPQUFPLENBQUNZLE1BQU8sQ0FBQyxDQUFDQSxDQUFFO0FBQUEsTUFDckQsTUFBTTtBQUFBLE1BQ04sUUFBUVosR0FBSTtBQUFBLElBQ2IsQ0FBQztBQUFBLEVBQ0YsR0FDTWdPLElBQWdCLENBQUNoTyxNQUFPO0FBQzdCLElBQUE4TixFQUFlO0FBQUEsTUFDZCxZQUFZLENBQUM5TixHQUFJLGFBQWEsRUFBRSxPQUFPLENBQUNZLE1BQU8sQ0FBQyxDQUFDQSxDQUFFO0FBQUEsTUFDbkQsY0FBYyxDQUFDWixHQUFJLE1BQU0sRUFBRSxPQUFPLENBQUNZLE1BQU8sQ0FBQyxDQUFDQSxDQUFFO0FBQUEsTUFDOUMsTUFBTTtBQUFBLE1BQ04sUUFBUVosR0FBSTtBQUFBLElBQ2IsQ0FBQztBQUFBLEVBQ0YsR0FDTWlPLElBQW1CLENBQUNqTyxNQUFPO0FBQ2hDLElBQUE4TixFQUFlO0FBQUEsTUFDZCxZQUFZLENBQUM5TixHQUFJLE1BQU0sRUFBRSxPQUFPLENBQUNZLE1BQU8sQ0FBQyxDQUFDQSxDQUFFO0FBQUEsTUFDNUMsY0FBYyxDQUFDWixHQUFJLGlCQUFpQixVQUFVLGFBQWEsRUFBRSxPQUFPLENBQUNZLE1BQU8sQ0FBQyxDQUFDQSxDQUFFO0FBQUEsTUFDaEYsTUFBTTtBQUFBLE1BQ04sUUFBUVosR0FBSTtBQUFBLElBQ2IsQ0FBQztBQUFBLEVBQ0YsR0FDTWtPLElBQVU7QUFBQSxJQUNmLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNWO0FBQ0EsTUFBSW5OLEdBQUssV0FBVyxRQUFRLEtBQUtBLEdBQUssV0FBVyxTQUFTO0FBQ3pELFdBQUE1RCxFQUFRLGlCQUFpQixlQUFlNFEsR0FBWUcsQ0FBTyxHQUMzRC9RLEVBQVEsaUJBQWlCLGNBQWM2USxHQUFlRSxDQUFPLEdBQzdEL1EsRUFBUSxpQkFBaUIsZUFBZTRRLEdBQVlHLENBQU8sR0FDM0QvUSxFQUFRLGlCQUFpQixhQUFhNlEsR0FBZUUsQ0FBTyxHQUM1RC9RLEVBQVEsaUJBQWlCLGlCQUFpQjZRLEdBQWVFLENBQU8sR0FDekQsRUFBRSxZQUFZLE1BQU07QUFDMUIsTUFBQS9RLEVBQVEsb0JBQW9CLGVBQWU0USxHQUFZRyxDQUFPLEdBQzlEL1EsRUFBUSxvQkFBb0IsY0FBYzZRLEdBQWVFLENBQU8sR0FDaEUvUSxFQUFRLG9CQUFvQixlQUFlNFEsR0FBWUcsQ0FBTyxHQUM5RC9RLEVBQVEsb0JBQW9CLGFBQWE2USxHQUFlRSxDQUFPLEdBQy9EL1EsRUFBUSxvQkFBb0IsaUJBQWlCNlEsR0FBZUUsQ0FBTztBQUFBLElBQ3BFLEVBQUU7QUFFSCxNQUFJbk4sR0FBSyxXQUFXLFFBQVE7QUFDM0IsV0FBQTVELEVBQVEsaUJBQWlCLGVBQWU0USxHQUFZRyxDQUFPLEdBQzNEL1EsRUFBUSxpQkFBaUIsY0FBYzZRLEdBQWVFLENBQU8sR0FDdEQsRUFBRSxZQUFZLE1BQU07QUFDMUIsTUFBQS9RLEVBQVEsb0JBQW9CLGVBQWU0USxHQUFZRyxDQUFPLEdBQzlEL1EsRUFBUSxvQkFBb0IsY0FBYzZRLEdBQWVFLENBQU87QUFBQSxJQUNqRSxFQUFFO0FBRUgsTUFBSW5OLEdBQUssV0FBVyxTQUFTO0FBQzVCLFdBQUE1RCxFQUFRLGlCQUFpQixlQUFlNFEsR0FBWUcsQ0FBTyxHQUMzRC9RLEVBQVEsaUJBQWlCLGFBQWE2USxHQUFlRSxDQUFPLEdBQzVEL1EsRUFBUSxpQkFBaUIsaUJBQWlCNlEsR0FBZUUsQ0FBTyxHQUN6RCxFQUFFLFlBQVksTUFBTTtBQUMxQixNQUFBL1EsRUFBUSxvQkFBb0IsZUFBZTRRLEdBQVlHLENBQU8sR0FDOUQvUSxFQUFRLG9CQUFvQixhQUFhNlEsR0FBZUUsQ0FBTyxHQUMvRC9RLEVBQVEsb0JBQW9CLGlCQUFpQjZRLEdBQWVFLENBQU87QUFBQSxJQUNwRSxFQUFFO0FBRUgsTUFBSW5OLEdBQUssV0FBVyxRQUFRLEtBQUtBLEdBQUssV0FBVyxlQUFlLEtBQUtBLEdBQUssV0FBVyxnQkFBZ0I7QUFDcEcsV0FBQTVELEVBQVEsaUJBQWlCLFdBQVc0USxHQUFZRyxDQUFPLEdBQ3ZEL1EsRUFBUSxpQkFBaUIsWUFBWTZRLEdBQWVFLENBQU8sR0FDM0QvUSxFQUFRLGlCQUFpQixTQUFTOFEsR0FBa0JDLENBQU8sR0FDcEQsRUFBRSxZQUFZLE1BQU07QUFDMUIsTUFBQS9RLEVBQVEsb0JBQW9CLFdBQVc0USxHQUFZRyxDQUFPLEdBQzFEL1EsRUFBUSxvQkFBb0IsWUFBWTZRLEdBQWVFLENBQU8sR0FDOUQvUSxFQUFRLG9CQUFvQixTQUFTOFEsR0FBa0JDLENBQU87QUFBQSxJQUMvRCxFQUFFO0FBRUgsUUFBTS9PLElBQVcsSUFBSSxpQkFBaUIsQ0FBQ2dPLEdBQWNoTyxNQUFhO0FBQ2pFLGVBQVdpTyxLQUFZRCxFQUFjLENBQUlDLEVBQVMsUUFBUSxlQUFhVSxFQUFlVixDQUFRO0FBQUEsRUFDL0YsQ0FBQztBQUNELEVBQUFTLElBQVEsSUFBSSxRQUFRMU8sQ0FBUSxJQUN2QmhDLEdBQVMsV0FBV0EsY0FBb0IsUUFBTWdDLEVBQVMsUUFBUWhDLElBQVVtUCxFQUFnQm5QLENBQU8sR0FBRztBQUFBLElBQ3ZHLFdBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxFQUNWLENBQUM7QUFDRCxRQUFNZ1IsSUFBVzFCLEVBQXFCdFAsR0FBUzRELENBQUc7QUFDbEQsU0FBSW9OLEVBQVMsU0FBUyxLQUFHblIsSUFBSztBQUFBLElBQzdCLFlBQVltUjtBQUFBLElBQ1osY0FBYyxDQUFDO0FBQUEsRUFDaEIsR0FBR2hQLENBQVEsR0FDSkE7QUFDUixHQUlJaVAsS0FBaUMsb0JBQUksUUFBUSxHQUM3Q0MsS0FBZSxDQUFDbFIsR0FBU21SLEdBQVFDLE9BQ3BDLElBQUksUUFBUXBSLENBQU8sR0FDZG1SLEVBQU8sSUFBSUMsQ0FBUSxLQUFHRCxFQUFPLElBQUlDLENBQVEsR0FDdkNwUixJQUVKcVIsS0FBbUIsQ0FBQ3JSLEdBQVNzUixNQUFjO0FBQzlDLE1BQUt0UixHQUNMO0FBQUEsUUFBSXNSLEdBQVc7QUFDZCxZQUFNSCxJQUFTRixHQUFlLFlBQVlqUixHQUF5QixvQkFBSSxJQUFJLENBQUM7QUFDNUUsT0FBQyxHQUFHc1IsR0FBVyxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDalMsTUFBTTZSLEdBQWFsUixHQUFTbVIsR0FBUTlSLENBQUMsQ0FBQztBQUFBLElBQzdFO0FBQ0EsV0FBT1c7QUFBQTtBQUNSLEdBSUl1UixLQUF1Qix1QkFBTyxJQUFJLHVCQUF1QixHQUN6REMsSUFBaUIsV0FBV0QsRUFBb0IsTUFBc0Isb0JBQUksSUFBSSxHQUM5RUUsS0FBcUIsQ0FBQ0MsR0FBSzFSLE1BQVk7QUFDMUMsUUFBTTJSLElBQUksQ0FBQyxHQUFHRCxFQUFJLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFDakMsU0FBTyxJQUFJLElBQUlDLEdBQUcsTUFBTSxDQUFDLENBQUNoTCxHQUFHaUwsQ0FBQyxNQUFNLENBQUNqTCxHQUFHaUwsR0FBRyxNQUFNNVIsQ0FBTyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQzJHLEdBQUd0SCxDQUFDLE1BQU0sQ0FBQyxDQUFDQSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdGLEdBQ0l3UyxLQUFtQixDQUFDN1IsT0FDZixPQUFPQSxLQUFXLFlBQVksT0FBT0EsS0FBVyxlQUFlQSxLQUFXLE1BRS9FOFIsS0FBWSxDQUFDOVIsR0FBU1osR0FBTTJTLE1BQVE7QUFDdkMsTUFBSSxDQUFDRixHQUFpQjdSLENBQU8sS0FBS0EsS0FBVyxLQUFNLFFBQU9BO0FBQzFELE1BQUlnUyxJQUFVUixFQUFlLElBQUlwUyxDQUFJO0FBQ3JDLFNBQUs0UyxNQUNKQSxJQUEwQixvQkFBSSxRQUFRLEdBQ3RDUixFQUFlLElBQUlwUyxHQUFNNFMsQ0FBTyxJQUU3QixDQUFDQSxFQUFRLElBQUloUyxDQUFPLEtBQUtBLEtBQVcsUUFBTWdTLEVBQVEsSUFBSWhTLEdBQVMrUixDQUFHLEdBQy9EL1I7QUFDUixHQUNJaVMsS0FBZ0IsQ0FBQ2pTLEdBQVNrUyxNQUFXO0FBQ3hDLE1BQUksR0FBQ2xTLEtBQVcsQ0FBQ2tTLElBQ2pCO0FBQUEsZUFBVyxDQUFDOVMsR0FBTTJTLENBQUcsS0FBS0csRUFBTyxRQUFRLEVBQUcsQ0FBQUosR0FBVTlSLEdBQVNaLEdBQU0yUyxDQUFHO0FBQ3hFLFdBQU8vUjtBQUFBO0FBQ1IsR0FJSW1TLEtBQWdCLENBQUNuUyxHQUFTb1MsTUFBVztBQUN4QyxNQUFLcFMsR0FDTDtBQUFBLFFBQUlvUyxHQUFRO0FBQ1gsWUFBTUMsSUFBV0MsR0FBZSxNQUFNdFMsQ0FBTyxLQUFxQixvQkFBSSxRQUFRO0FBQzlFLE1BQUtzUyxHQUFlLE1BQU10UyxDQUFPLEtBQUdzUyxHQUFlLE1BQU10UyxHQUFTcVMsQ0FBUSxHQUMxRSxDQUFDLEdBQUdELEdBQVEsU0FBUyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQy9TLE1BQU1rVCxHQUFXdlMsR0FBU1gsR0FBR2dULENBQVEsQ0FBQztBQUFBLElBQzFFO0FBQ0EsV0FBT3JTO0FBQUE7QUFDUixHQUNJd1MsSUFBb0IsQ0FBQ3hTLE9BQ2pCO0FBQUEsRUFDTixVQUFVeVIsR0FBbUJELEdBQWdCeFIsQ0FBTztBQUFBLEVBQ3BELFVBQVVzUyxHQUFlLE1BQU10UyxDQUFPO0FBQUEsRUFDdEMsYUFBYWlSLElBQWdCLE1BQU1qUixDQUFPO0FBQzNDLElBRUd1UyxLQUFhLENBQUN2UyxHQUFTeVMsR0FBT0MsTUFBVztBQUM1QyxRQUFNQyxJQUFNLElBQUksUUFBUTNTLENBQU87QUFDL0IsU0FBQTBTLE1BQVdKLEdBQWUsTUFBTXRTLENBQU8sR0FDbEMwUyxHQUFRLE1BQU1ELENBQUssTUFDdkJDLEdBQVEsTUFBTUQsQ0FBSyxHQUNuQkcsR0FBZSxNQUFNSCxDQUFLLEdBQUcsTUFBTXpTLENBQU8sR0FDdEN5UyxFQUFNLFFBQU16UyxHQUFTLGVBQWUsY0FBYyxDQUFDLEdBQUdBLEdBQVMsZUFBZSxZQUFZLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHeVMsRUFBTSxJQUFJLEVBQUUsT0FBTyxDQUFDOUwsTUFBTSxDQUFDLENBQUNBLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUM3SjhMLEdBQU8sVUFBVUUsR0FBS0YsR0FBT0QsRUFBa0J4UyxDQUFPLENBQUMsSUFFakRBO0FBQ1IsR0FDSTZTLEtBQXNCLHVCQUFPLElBQUksc0JBQXNCLEdBQ3ZEUCxJQUFnQixXQUFXTyxFQUFtQixNQUFzQixvQkFBSSxRQUFRLEdBQ2hGQyxLQUFzQix1QkFBTyxJQUFJLHNCQUFzQixHQUN2REYsSUFBZ0IsV0FBV0UsRUFBbUIsTUFBc0Isb0JBQUksUUFBUSxHQUNoRkMsS0FBc0IsdUJBQU8sSUFBSSxzQkFBc0IsR0FDdkRDLElBQWdCLFdBQVdELEVBQW1CLE1BQXNCLG9CQUFJLElBQUksR0FDNUVFLEtBQXVCLHVCQUFPLElBQUksdUJBQXVCLEdBQ3pEQyxJQUFpQixXQUFXRCxFQUFvQixNQUFzQixvQkFBSSxRQUFRLEdBQ2xGRSxLQUF3QixDQUFDblQsR0FBU3lTLE1BQVU7QUFDL0MsRUFBSSxPQUFPQSxLQUFTLGFBQVVBLElBQVFPLEdBQWUsTUFBTVAsQ0FBSztBQUNoRSxRQUFNVyxJQUF3QixvQkFBSSxJQUFJLENBQUMsR0FBR3BULEdBQVMsZUFBZSxZQUFZLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FDOUZvUyxJQUFTLElBQUksSUFBSSxDQUFDLEdBQUdnQixDQUFLLEVBQUUsSUFBSSxDQUFDek0sTUFBTXFNLEdBQWUsTUFBTXJNLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQ2lMLE1BQU0sQ0FBQyxDQUFDQSxDQUFDLENBQUMsR0FDbEZTLElBQVdDLEdBQWUsTUFBTXRTLENBQU8sS0FBcUIsb0JBQUksUUFBUTtBQUM5RSxFQUFLNFMsR0FBZSxNQUFNSCxDQUFLLEtBQUdHLEdBQWUsTUFBTUgsR0FBdUIsb0JBQUksUUFBUSxDQUFDLEdBQ3RGSCxHQUFlLE1BQU10UyxDQUFPLEtBQUdzUyxHQUFlLE1BQU10UyxHQUFTcVMsQ0FBUTtBQUMxRSxRQUFNTSxJQUFNLElBQUksUUFBUTNTLENBQU87QUFDL0IsRUFBS3FTLEdBQVUsTUFBTUksQ0FBSyxNQUNwQkwsRUFBTyxJQUFJSyxDQUFLLEtBQUdBLEdBQU8sYUFBYUUsR0FBS0YsR0FBT0QsRUFBa0J4UyxDQUFPLENBQUMsSUFDOUVvUyxFQUFPLElBQUlLLENBQUssS0FBSyxDQUFDRyxHQUFlLE1BQU1ILENBQUssR0FBRyxNQUFNelMsQ0FBTyxPQUNuRXlTLEdBQU8sVUFBVUUsR0FBS0YsR0FBT0QsRUFBa0J4UyxDQUFPLENBQUMsR0FDdkRvVCxFQUFNLElBQUlGLEdBQWdCLE1BQU1ULENBQUssQ0FBQyxHQUN0Q0osR0FBVSxNQUFNSSxDQUFLLEdBQ3JCelMsR0FBUyxlQUFlLGNBQWMsQ0FBQyxHQUFHb1QsQ0FBSyxFQUFFLE9BQU8sQ0FBQ3pNLE1BQU0sQ0FBQyxDQUFDQSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFFOUVpTSxHQUFlLE1BQU1ILENBQUssR0FBRyxNQUFNelMsQ0FBTyxJQUV2Q3FTLEdBQVUsTUFBTUksQ0FBSyxNQUNuQkwsRUFBTyxJQUFJSyxDQUFLLE1BQ3BCSixHQUFVLFNBQVNJLENBQUssR0FDeEJBLEdBQU8sYUFBYUUsR0FBS0YsR0FBT0QsRUFBa0J4UyxDQUFPLENBQUM7QUFHN0QsR0FDSXFULEtBQXdCLG9CQUFJLElBQUksR0FDaENDLEtBQVUsQ0FBQ2xQLElBQU8sT0FBTyxXQUFZLE1BQWMsV0FBVyxTQUFTO0FBQzFFLE1BQUtBO0FBQ0wsV0FBS2lQLElBQU8sTUFBTWpQLENBQUksTUFDckJpUCxJQUFPLE1BQU1qUCxDQUFJLEdBQ2pCeUwsR0FBMkJ6TCxHQUFNLEtBQUssY0FBYyxDQUFDNkwsTUFBYXNELEdBQWdCdEQsRUFBUyxNQUFNLENBQUMsR0FDbEdHLEdBQWtCaE0sR0FBTSxnQkFBZ0IsQ0FBQzZMLE1BQWE7QUFDckQsaUJBQVdqUSxLQUFXaVEsRUFBUyxXQUFZLENBQUlqUSxhQUFtQixlQUFhdVQsR0FBZ0J2VCxDQUFPO0FBQUEsSUFDdkcsQ0FBQyxHQUNEakIsR0FBaUJxRixDQUFJLElBRWZBO0FBQ1IsR0FDSW1QLEtBQWtCLENBQUN2VCxNQUFZO0FBQ2xDLFFBQU1vVCxJQUF3QixvQkFBSSxJQUFJLENBQUMsR0FBR3BULEdBQVMsZUFBZSxZQUFZLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDcEcsR0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUdvVCxDQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU1KLEdBQWUsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUNwQixNQUFNLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUNBLE1BQU11QixHQUFzQm5ULEdBQVM0UixDQUFDLENBQUM7QUFDL0gsR0FDSTRCLEtBQTJCLENBQUNDLEdBQVVoQixNQUFVO0FBQ25ELEVBQUFnQixFQUFTLFFBQVEsQ0FBQ3BVLE1BQU1vVCxJQUFRVSxHQUFzQjlULEdBQUdvVCxDQUFLLElBQUljLEdBQWdCbFUsQ0FBQyxDQUFDO0FBQ3JGLEdBQ0lxVSxLQUFrQyxDQUFDakIsTUFBVTtBQUNoRCxhQUFXck8sS0FBUWlQLEdBQU8sQ0FBQUcsR0FBeUJwUCxHQUFNLG1CQUFtQixjQUFjLEdBQUdxTyxDQUFLO0FBQ25HLEdBQ0lrQixLQUFnQixJQUFJLHFCQUFxQixDQUFDQyxNQUFRO0FBQ3JELEVBQUFaLEdBQWUsU0FBU1ksQ0FBRztBQUM1QixDQUFDLEdBQ0dDLEtBQWdCLENBQUN6VSxHQUFNcVQsTUFBVTtBQUNwQyxNQUFJLENBQUNTLEdBQWdCLE1BQU1ULENBQUssR0FBRztBQUNsQyxVQUFNbUIsSUFBTXhVLEdBQU0sT0FBTztBQUN6QixJQUFJd1UsTUFDSFYsR0FBZ0IsTUFBTVQsR0FBT21CLENBQUcsR0FDaENaLEdBQWUsTUFBTVksR0FBS25CLENBQUssR0FDL0JrQixJQUFlLFdBQVdsQixHQUFPbUIsQ0FBRyxHQUNwQ0YsR0FBZ0NqQixDQUFLO0FBQUEsRUFFdkM7QUFDRDtBQUNBYSxHQUFRLE9BQU8sV0FBWSxNQUFjLFdBQVcsSUFBSTtBQUN4RCxJQUFJUSxLQUFXLE1BQU07QUFBQSxFQUNwQixZQUFZMVUsSUFBTyxNQUFNO0FBQ3hCLElBQUlBLEtBQU15VSxHQUFjelUsR0FBTSxJQUFJO0FBQUEsRUFDbkM7QUFBQSxFQUNBLFFBQVEyVSxHQUFVQyxHQUFPQyxHQUFTO0FBQ2pDLFdBQU87QUFBQSxFQUNSO0FBQUEsRUFDQSxXQUFXRixHQUFVQyxHQUFPQyxHQUFTO0FBQ3BDLFdBQU87QUFBQSxFQUNSO0FBQUEsRUFDQSxnQkFBZ0JqVSxHQUFTO0FBQ3hCLFdBQU93UixFQUFlLElBQUksS0FBSyxRQUFRLEVBQUUsR0FBRyxNQUFNeFIsQ0FBTztBQUFBLEVBQzFEO0FBQUEsRUFDQSxrQkFBa0JBLEdBQVM7QUFDMUIsV0FBT3dTLEVBQWtCeFMsQ0FBTztBQUFBLEVBQ2pDO0FBQUEsRUFDQSxJQUFJLFdBQVc7QUFDZCxXQUFPNFMsR0FBZSxNQUFNLElBQUk7QUFBQSxFQUNqQztBQUFBLEVBQ0EsSUFBSSxVQUFVO0FBQ2IsV0FBT3BCLEdBQWdCLE1BQU0sS0FBSyxRQUFRLEVBQUU7QUFBQSxFQUM3QztBQUFBLEVBQ0EsSUFBSSxPQUFPO0FBQ1YsV0FBTzBCLEdBQWdCLE1BQU0sSUFBSTtBQUFBLEVBQ2xDO0FBQ0QsR0FJSWdCLEtBQWUsQ0FBQ2xVLEdBQVNtVSxHQUFHQyxNQUFZO0FBQzNDLFFBQU1DLElBQU9EO0FBQ2IsRUFBSWpXLEVBQVNpVyxDQUFPLE1BQUdBLElBQVVBLEVBQVE7QUFDekMsUUFBTUUsS0FBYUYsSUFBVTNWLEdBQW1CMlYsQ0FBTyxNQUFNLFFBQVFBLE1BQVk7QUFDakYsU0FBQXBXLEVBQWNxVyxHQUFNLE1BQU07QUFDekIsSUFBSXJVLGFBQW1CLG1CQUFrQkEsRUFBUSxTQUFTLENBQUNzVSxJQUNsREEsSUFBV3RVLEdBQVMsa0JBQWtCLGFBQWEsSUFDdkRBLEdBQVMsZUFBZSxlQUFlLEVBQUU7QUFBQSxFQUMvQyxDQUFDLEdBQ01BO0FBQ1IsR0FDSXVVLEtBQWlCLENBQUM5USxHQUFJK1EsR0FBTUMsTUFBUTtBQUN2QyxNQUFJLEVBQUVELElBQU8sT0FBT0EsS0FBUSxXQUFXalcsR0FBYWlXLENBQUksSUFBSUEsTUFBUyxDQUFDL1EsS0FBTTtBQUFBLElBQzNFO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0QsRUFBRSxRQUFRK1EsS0FBUSxFQUFFLEtBQUssR0FBSSxRQUFPL1E7QUFDcEMsUUFBTTRRLElBQU9JO0FBRWIsU0FESXRXLEVBQVNzVyxDQUFHLE1BQUdBLElBQU1BLEVBQUksUUFDekJoUixJQUFLK1EsQ0FBSSxNQUFNQyxLQUNmaFIsSUFBSytRLENBQUksTUFBTUMsS0FBS3pXLEVBQWNxVyxHQUFNLE1BQU07QUFDakQsSUFBSUksS0FBTyxPQUFNaFIsRUFBRytRLENBQUksSUFBSUMsSUFDdkIsT0FBT2hSLEVBQUcrUSxDQUFJO0FBQUEsRUFDcEIsQ0FBQyxHQUNNL1E7QUFDUixHQUNJaVIsS0FBZ0IsQ0FBQ2pSLEdBQUkrUSxHQUFNQyxNQUFRO0FBQ3RDLFFBQU1FLElBQWFsUixHQUFJO0FBQ3ZCLE1BQUksQ0FBQytRLEtBQVEsQ0FBQy9RLEtBQU0sQ0FBQ2tSLEVBQVksUUFBT2xSO0FBQ3hDLFFBQU00USxJQUFPSTtBQUdiLFNBRkl0VyxFQUFTc1csQ0FBRyxNQUFHQSxJQUFNQSxHQUFLLFFBQzlCRCxJQUFPalcsR0FBYWlXLENBQUksR0FDcEJHLElBQWFILENBQUksT0FBT0MsSUFBTWhXLEdBQW1CZ1csQ0FBRyxPQUNwREEsS0FBTyxRQUFRQSxNQUFRLEtBQU8sT0FBT0UsRUFBV0gsQ0FBSSxJQUNuRHhXLEVBQWNxVyxHQUFNLE1BQU07QUFDOUIsSUFBSSxPQUFPSSxLQUFPLFlBQVksT0FBT0EsS0FBTyxhQUFZRSxFQUFXSCxDQUFJLElBQUksT0FBT0MsQ0FBRyxJQUNoRixPQUFPRSxFQUFXSCxDQUFJO0FBQUEsRUFDNUIsQ0FBQyxJQUNNL1E7QUFDUixHQUNJbVIsS0FBc0IsQ0FBQ25SLEdBQUlyRSxNQUFTcUUsRUFBRyxNQUFNLGVBQWV4RixHQUFhbUIsQ0FBSSxDQUFDLEdBQzlFeVYsS0FBb0IsQ0FBQ3BSLEdBQUkrUSxHQUFNQyxNQUFRO0FBQzFDLFFBQU1LLElBQVdyUixHQUFJO0FBQ3JCLFNBQUksQ0FBQytRLEtBQVEsT0FBT0EsS0FBUSxZQUFZLENBQUMvUSxLQUFNLENBQUNxUixLQUNoRDlXLEVBQWN5VyxHQUFLLE1BQU07QUFDeEIsSUFBSXBXLEdBQU1vVyxDQUFHLEtBQUt0VyxFQUFTc1csQ0FBRyxLQUFLblcsR0FBWW1XLENBQUcsSUFBR3pWLEVBQWlCeUUsR0FBSStRLEdBQU1DLENBQUcsSUFDMUVBLEtBQU8sUUFBTUcsR0FBb0JuUixHQUFJK1EsQ0FBSTtBQUFBLEVBQ25ELENBQUMsR0FDTS9RO0FBQ1IsR0FDSXNSLEtBQWtCLENBQUN0UixHQUFJK1EsR0FBTUMsTUFBUTtBQUN4QyxNQUFJLENBQUNELEtBQVEsQ0FBQy9RLEVBQUksUUFBT0E7QUFDekIsUUFBTTRRLElBQU9JO0FBR2IsU0FGSXRXLEVBQVNzVyxDQUFHLE1BQUdBLElBQU1BLEVBQUksUUFDN0JELElBQU92VyxHQUFhdVcsQ0FBSSxHQUNwQi9RLEdBQUksZUFBZStRLENBQUksT0FBT0MsSUFBTWhXLEdBQW1CZ1csQ0FBRyxNQUM5RHpXLEVBQWNxVyxHQUFNLE1BQU07QUFDekIsSUFBSSxPQUFPSSxLQUFPLFlBQVksT0FBT0EsS0FBTyxjQUFjQSxLQUFPLFNBQVMsT0FBT0EsS0FBTyxhQUFZQSxLQUFPLE1BQWNoUixHQUFJLGVBQWUrUSxHQUFNLE9BQU9DLENBQUcsQ0FBQyxJQUN4SmhSLEdBQUksa0JBQWtCK1EsQ0FBSTtBQUFBLEVBQ2hDLENBQUMsR0FDTS9RO0FBQ1I7QUFJQSxTQUFTdVIsRUFBY3ZWLEdBQUdxRixHQUFHO0FBQzVCLFFBQU0wQyxJQUFPLEtBQUssSUFBSS9ILEVBQUUsR0FBR3FGLEVBQUUsQ0FBQyxHQUN4QjRDLElBQU0sS0FBSyxJQUFJakksRUFBRSxHQUFHcUYsRUFBRSxDQUFDLEdBQ3ZCMkMsSUFBUSxLQUFLLElBQUloSSxFQUFFLEdBQUdxRixFQUFFLENBQUMsR0FDekI2QyxJQUFTLEtBQUssSUFBSWxJLEVBQUUsR0FBR3FGLEVBQUUsQ0FBQztBQUNoQyxTQUFPO0FBQUEsSUFDTixNQUFBMEM7QUFBQSxJQUNBLEtBQUFFO0FBQUEsSUFDQSxPQUFBRDtBQUFBLElBQ0EsUUFBQUU7QUFBQSxJQUNBLE9BQU9GLElBQVFEO0FBQUEsSUFDZixRQUFRRyxJQUFTRDtBQUFBLEVBQ2xCO0FBQ0Q7QUFDQSxJQUFJdU4sSUFBeUI7QUFBQSxFQUM1QixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixLQUFLO0FBQUEsRUFDTCxRQUFRO0FBQ1QsR0FDSUMsSUFBdUI7QUFBQSxFQUMxQixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixLQUFLO0FBQ04sR0FDSUMsSUFBeUI7QUFBQSxFQUM1QixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixLQUFLO0FBQ04sR0FJSUMsS0FBdUIsdUJBQU8sSUFBSSx1QkFBdUIsR0FDekRDLElBQWlCLFdBQVdELEVBQW9CLE1BQXNCLG9CQUFJLFFBQVEsR0FDbEZFLElBQWlCLENBQUMvUCxHQUFNZ1EsR0FBV0MsTUFBTztBQUM3QyxRQUFNOUQsSUFBTTJELEVBQWUsSUFBSTlQLENBQUksS0FBcUIsb0JBQUksSUFBSSxHQUMxRGYsSUFBT2tOLEVBQUksSUFBSTZELENBQVMsS0FBSyxDQUFDO0FBQ3BDLEVBQUEvUSxFQUFLLEtBQUtnUixDQUFFLEdBQ1o5RCxFQUFJLElBQUk2RCxHQUFXL1EsQ0FBSSxHQUN2QjZRLEVBQWUsSUFBSTlQLEdBQU1tTSxDQUFHO0FBQzdCLEdBQ0krRCxLQUFlLENBQUNsUSxHQUFNZ1EsTUFBYztBQUN2QyxRQUFNN0QsSUFBTTJELEVBQWUsSUFBSTlQLENBQUksR0FDN0JmLElBQU9rTixHQUFLLElBQUk2RCxDQUFTO0FBQy9CLE1BQUsvUSxHQUNMO0FBQUEsZUFBV2dSLEtBQU1oUixFQUFNLEtBQUk7QUFDMUIsTUFBQWdSLEVBQUc7QUFBQSxJQUNKLFFBQVE7QUFBQSxJQUFDO0FBQ1QsSUFBQTlELEVBQUksT0FBTzZELENBQVMsR0FDaEI3RCxFQUFJLFNBQVMsS0FBRzJELEVBQWUsT0FBTzlQLENBQUk7QUFBQTtBQUMvQyxHQUNJbVEsSUFBYSxDQUFDblEsR0FBTW5HLE1BQVM7QUFDaEMsUUFBTXNILElBQU0sV0FBVyxtQkFBbUJuQixDQUFJLEdBQUcsbUJBQW1CbkcsQ0FBSSxHQUFHLE9BQU8sS0FBSyxJQUNqRnVILElBQUksV0FBV0QsQ0FBRztBQUN4QixTQUFPLE9BQU8sU0FBU0MsQ0FBQyxJQUFJQSxJQUFJO0FBQ2pDLEdBQ0lnUCxLQUFjLENBQUNwUSxHQUFNcVEsR0FBTXZHLE1BQWE7QUFDM0MsUUFBTXpMLElBQU0yQixFQUFLLGFBQWFxUSxDQUFJLEdBQUcsS0FBSztBQUMxQyxNQUFJLENBQUNoUyxFQUFLLFFBQU95TDtBQUNqQixRQUFNd0csSUFBUXRRLEVBQUssY0FBYzNCLENBQUc7QUFDcEMsU0FBT2lTLGFBQWlCLGNBQWNBLElBQVF4RztBQUMvQyxHQUNJeUcsS0FBc0IsY0FBY2hDLEdBQVM7QUFBQSxFQUNoRCxjQUFjO0FBQ2IsVUFBTSxvQkFBb0I7QUFBQSxFQUMzQjtBQUFBLEVBQ0EsUUFBUWlDLEdBQUs7QUFDWixVQUFNeFEsSUFBT3dRLEdBQUssUUFBUTtBQUMxQixRQUFJLENBQUN4USxFQUFNLFFBQU87QUFDbEIsVUFBTXlRLElBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsSUFBQUEsRUFBUSxZQUFZLDhCQUNwQkEsRUFBUSxhQUFhLHlCQUF5QixFQUFFLEdBQ2hEQSxFQUFRLE1BQU0sVUFBVSxpVEFFbEIsV0FBVyxtQkFBbUJ6USxDQUFJLEdBQUksYUFBYSxhQUFVQSxFQUFLLE1BQU0sV0FBVyxhQUd6RkEsRUFBSyxZQUFZeVEsQ0FBTztBQUN4QixRQUFJcFEsSUFBUyxJQUNUbkcsSUFBSTtBQUFBLE1BQ1AsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLElBQ0osR0FDSXFGLElBQUk7QUFBQSxNQUNQLEdBQUc7QUFBQSxNQUNILEdBQUc7QUFBQSxJQUNKO0FBQ0EsVUFBTW1SLElBQWEsQ0FBQ3BULE1BQU87QUFDMUIsWUFBTXJCLElBQUkrRCxFQUFLLHNCQUFzQjtBQUNyQyxhQUFPO0FBQUEsUUFDTixHQUFHMUMsRUFBRyxVQUFVckIsRUFBRTtBQUFBLFFBQ2xCLEdBQUdxQixFQUFHLFVBQVVyQixFQUFFO0FBQUEsTUFDbkI7QUFBQSxJQUNELEdBQ00wVSxJQUFlLE1BQU07QUFDMUIsWUFBTW5QLElBQU1pTyxFQUFjdlYsR0FBR3FGLENBQUM7QUFDOUIsVUFBSWlDLEVBQUksUUFBUSxLQUFLQSxFQUFJLFNBQVMsR0FBRztBQUNwQyxRQUFBaVAsRUFBUSxNQUFNLFVBQVU7QUFDeEI7QUFBQSxNQUNEO0FBQ0EsTUFBQUEsRUFBUSxNQUFNLFVBQVUsU0FDeEJBLEVBQVEsTUFBTSxPQUFPLEdBQUdqUCxFQUFJLElBQUksTUFDaENpUCxFQUFRLE1BQU0sTUFBTSxHQUFHalAsRUFBSSxHQUFHLE1BQzlCaVAsRUFBUSxNQUFNLFFBQVEsR0FBR2pQLEVBQUksS0FBSyxNQUNsQ2lQLEVBQVEsTUFBTSxTQUFTLEdBQUdqUCxFQUFJLE1BQU07QUFBQSxJQUNyQyxHQUNNb1AsSUFBUyxDQUFDdFQsTUFBTztBQUN0QixNQUFJQSxFQUFHLFdBQVcsTUFDZEEsRUFBRyxRQUFRLFVBQVUsK0hBQStILE1BQ2xKQSxFQUFHLFdBQVcwQyxLQUFRQSxFQUFLLFNBQVMxQyxFQUFHLE1BQU0sT0FDbkQrQyxJQUFTLElBQ1RuRyxJQUFJd1csRUFBV3BULENBQUUsR0FDakJpQyxJQUFJLEVBQUUsR0FBR3JGLEVBQUUsR0FDWDhGLEVBQUssa0JBQWtCMUMsRUFBRyxTQUFTLEdBQ25DMEMsRUFBSyxjQUFjLElBQUksWUFBWTBQLEVBQXVCLE9BQU87QUFBQSxRQUNoRSxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsVUFDUCxHQUFHLEVBQUUsR0FBR3hWLEVBQUU7QUFBQSxVQUNWLEdBQUcsRUFBRSxHQUFHcUYsRUFBRTtBQUFBLFVBQ1YsTUFBQVM7QUFBQSxRQUNEO0FBQUEsTUFDRCxDQUFDLENBQUMsR0FDRjJRLEVBQWE7QUFBQSxJQUNkLEdBQ01FLElBQVMsQ0FBQ3ZULE1BQU87QUFDdEIsVUFBSSxDQUFDK0MsRUFBUTtBQUNiLE1BQUFkLElBQUltUixFQUFXcFQsQ0FBRSxHQUNqQnFULEVBQWE7QUFDYixZQUFNblAsSUFBTWlPLEVBQWN2VixHQUFHcUYsQ0FBQztBQUM5QixNQUFBUyxFQUFLLGNBQWMsSUFBSSxZQUFZMFAsRUFBdUIsTUFBTTtBQUFBLFFBQy9ELFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxVQUNQLEdBQUcsRUFBRSxHQUFHeFYsRUFBRTtBQUFBLFVBQ1YsR0FBRyxFQUFFLEdBQUdxRixFQUFFO0FBQUEsVUFDVixLQUFBaUM7QUFBQSxVQUNBLE1BQUF4QjtBQUFBLFFBQ0Q7QUFBQSxNQUNELENBQUMsQ0FBQztBQUFBLElBQ0gsR0FDTThRLElBQU0sQ0FBQ3hULE1BQU87QUFDbkIsVUFBSSxDQUFDK0MsRUFBUTtBQUNiLE1BQUFBLElBQVM7QUFDVCxVQUFJO0FBQ0gsUUFBQUwsRUFBSyxzQkFBc0IxQyxFQUFHLFNBQVM7QUFBQSxNQUN4QyxRQUFRO0FBQUEsTUFBQztBQUNULFlBQU1rRSxJQUFNaU8sRUFBY3ZWLEdBQUdxRixDQUFDO0FBQzlCLE1BQUFTLEVBQUssY0FBYyxJQUFJLFlBQVkwUCxFQUF1QixLQUFLO0FBQUEsUUFDOUQsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFVBQ1AsR0FBRyxFQUFFLEdBQUd4VixFQUFFO0FBQUEsVUFDVixHQUFHLEVBQUUsR0FBR3FGLEVBQUU7QUFBQSxVQUNWLEtBQUFpQztBQUFBLFVBQ0EsTUFBQXhCO0FBQUEsUUFDRDtBQUFBLE1BQ0QsQ0FBQyxDQUFDO0FBQUEsSUFDSCxHQUNNK1EsSUFBTyxDQUFDelQsTUFBTztBQUNwQixNQUFLK0MsS0FDTHlRLEVBQUl4VCxDQUFFO0FBQUEsSUFDUCxHQUNNMFQsSUFBVyxDQUFDMVQsTUFBTztBQUN4QixVQUFLK0MsR0FDTDtBQUFBLFFBQUFBLElBQVMsSUFDVG9RLEVBQVEsTUFBTSxVQUFVO0FBQ3hCLFlBQUk7QUFDSCxVQUFBelEsRUFBSyxzQkFBc0IxQyxFQUFHLFNBQVM7QUFBQSxRQUN4QyxRQUFRO0FBQUEsUUFBQztBQUNULFFBQUEwQyxFQUFLLGNBQWMsSUFBSSxZQUFZMFAsRUFBdUIsUUFBUTtBQUFBLFVBQ2pFLFNBQVM7QUFBQSxVQUNULFFBQVEsRUFBRSxNQUFBMVAsRUFBSztBQUFBLFFBQ2hCLENBQUMsQ0FBQztBQUFBO0FBQUEsSUFDSDtBQUNBLFdBQUErUCxFQUFlL1AsR0FBTSxzQkFBc0IsTUFBTTtBQUNoRCxNQUFBeVEsRUFBUSxPQUFPO0FBQUEsSUFDaEIsQ0FBQyxHQUNEVixFQUFlL1AsR0FBTSxzQkFBc0J4QixFQUFTd0IsR0FBTSxlQUFlNFEsQ0FBTSxDQUFDLEdBQ2hGYixFQUFlL1AsR0FBTSxzQkFBc0J4QixFQUFTd0IsR0FBTSxlQUFlNlEsQ0FBTSxDQUFDLEdBQ2hGZCxFQUFlL1AsR0FBTSxzQkFBc0J4QixFQUFTd0IsR0FBTSxhQUFhK1EsQ0FBSSxDQUFDLEdBQzVFaEIsRUFBZS9QLEdBQU0sc0JBQXNCeEIsRUFBU3dCLEdBQU0saUJBQWlCZ1IsQ0FBUSxDQUFDLEdBQzdFO0FBQUEsRUFDUjtBQUFBLEVBQ0EsV0FBV1IsR0FBSztBQUNmLFVBQU14USxJQUFPd1EsR0FBSyxRQUFRO0FBQzFCLFdBQUl4USxLQUFNa1EsR0FBYWxRLEdBQU0sb0JBQW9CLEdBQzFDO0FBQUEsRUFDUjtBQUNELEdBQ0lpUixLQUFvQixjQUFjMUMsR0FBUztBQUFBLEVBQzlDLGNBQWM7QUFDYixVQUFNLGtCQUFrQjtBQUFBLEVBQ3pCO0FBQUEsRUFDQSxRQUFRaUMsR0FBSztBQUNaLFVBQU14USxJQUFPd1EsR0FBSyxRQUFRO0FBQzFCLFFBQUksQ0FBQ3hRLEVBQU0sUUFBTztBQUNsQixJQUFBdkcsRUFBaUJ1RyxHQUFNLGVBQWVtUSxFQUFXblEsR0FBTSxhQUFhLENBQUMsR0FDckV2RyxFQUFpQnVHLEdBQU0sZUFBZW1RLEVBQVduUSxHQUFNLGFBQWEsQ0FBQztBQUNyRSxVQUFNa1IsSUFBb0JsUixFQUFLLE1BQU07QUFDckMsS0FBSSxDQUFDQSxFQUFLLE1BQU0sYUFBYUEsRUFBSyxNQUFNLGNBQWMsWUFBUUEsRUFBSyxNQUFNLFlBQVk7QUFDckYsVUFBTW1SLElBQVNmLEdBQVlwUSxHQUFNLDZCQUE2QkEsQ0FBSTtBQUNsRSxRQUFJb1IsSUFBVyxJQUNYQyxJQUFTLEdBQ1RDLElBQVMsR0FDVEMsSUFBUSxHQUNSQyxJQUFRO0FBQ1osVUFBTVosSUFBUyxDQUFDdFQsTUFBTztBQUN0QixNQUFJQSxFQUFHLFdBQVcsTUFDZEEsRUFBRyxXQUFXNlQsS0FBVSxDQUFDQSxFQUFPLFNBQVM3VCxFQUFHLE1BQU0sTUFDdEQ4VCxJQUFXLElBQ1hDLElBQVMvVCxFQUFHLFNBQ1pnVSxJQUFTaFUsRUFBRyxTQUNaaVUsSUFBUXBCLEVBQVduUSxHQUFNLGFBQWEsR0FDdEN3UixJQUFRckIsRUFBV25RLEdBQU0sYUFBYSxHQUN0Q21SLEVBQU8sa0JBQWtCN1QsRUFBRyxTQUFTLEdBQ3JDMEMsRUFBSyxjQUFjLElBQUksWUFBWTJQLEVBQXFCLE9BQU87QUFBQSxRQUM5RCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsVUFDUCxNQUFBM1A7QUFBQSxVQUNBLFNBQVMxQyxFQUFHO0FBQUEsVUFDWixTQUFTQSxFQUFHO0FBQUEsVUFDWixPQUFBaVU7QUFBQSxVQUNBLE9BQUFDO0FBQUEsUUFDRDtBQUFBLE1BQ0QsQ0FBQyxDQUFDO0FBQUEsSUFDSCxHQUNNWCxJQUFTLENBQUN2VCxNQUFPO0FBQ3RCLFVBQUksQ0FBQzhULEVBQVU7QUFDZixZQUFNSyxJQUFLblUsRUFBRyxVQUFVK1QsR0FDbEJLLElBQUtwVSxFQUFHLFVBQVVnVSxHQUNsQkssSUFBS0osSUFBUUUsR0FDYkcsSUFBS0osSUFBUUU7QUFDbkIsTUFBQWpZLEVBQWlCdUcsR0FBTSxlQUFlMlIsQ0FBRSxHQUN4Q2xZLEVBQWlCdUcsR0FBTSxlQUFlNFIsQ0FBRSxHQUN4QzVSLEVBQUssY0FBYyxJQUFJLFlBQVkyUCxFQUFxQixNQUFNO0FBQUEsUUFDN0QsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFVBQ1AsTUFBQTNQO0FBQUEsVUFDQSxJQUFBeVI7QUFBQSxVQUNBLElBQUFDO0FBQUEsVUFDQSxHQUFHQztBQUFBLFVBQ0gsR0FBR0M7QUFBQSxRQUNKO0FBQUEsTUFDRCxDQUFDLENBQUM7QUFBQSxJQUNILEdBQ01iLElBQU8sQ0FBQ3pULE1BQU87QUFDcEIsVUFBSzhULEdBQ0w7QUFBQSxRQUFBQSxJQUFXO0FBQ1gsWUFBSTtBQUNILFVBQUFELEVBQU8sc0JBQXNCN1QsRUFBRyxTQUFTO0FBQUEsUUFDMUMsUUFBUTtBQUFBLFFBQUM7QUFDVCxRQUFBMEMsRUFBSyxjQUFjLElBQUksWUFBWTJQLEVBQXFCLEtBQUs7QUFBQSxVQUM1RCxTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsWUFDUCxNQUFBM1A7QUFBQSxZQUNBLEdBQUdtUSxFQUFXblEsR0FBTSxhQUFhO0FBQUEsWUFDakMsR0FBR21RLEVBQVduUSxHQUFNLGFBQWE7QUFBQSxVQUNsQztBQUFBLFFBQ0QsQ0FBQyxDQUFDO0FBQUE7QUFBQSxJQUNIO0FBQ0EsV0FBQStQLEVBQWUvUCxHQUFNLG9CQUFvQixNQUFNO0FBQzlDLE1BQUFBLEVBQUssTUFBTSxZQUFZa1I7QUFBQSxJQUN4QixDQUFDLEdBQ0RuQixFQUFlL1AsR0FBTSxvQkFBb0J4QixFQUFTMlMsR0FBUSxlQUFlUCxDQUFNLENBQUMsR0FDaEZiLEVBQWUvUCxHQUFNLG9CQUFvQnhCLEVBQVMyUyxHQUFRLGVBQWVOLENBQU0sQ0FBQyxHQUNoRmQsRUFBZS9QLEdBQU0sb0JBQW9CeEIsRUFBUzJTLEdBQVEsYUFBYUosQ0FBSSxDQUFDLEdBQzVFaEIsRUFBZS9QLEdBQU0sb0JBQW9CeEIsRUFBUzJTLEdBQVEsaUJBQWlCSixDQUFJLENBQUMsR0FDekU7QUFBQSxFQUNSO0FBQUEsRUFDQSxXQUFXUCxHQUFLO0FBQ2YsVUFBTXhRLElBQU93USxHQUFLLFFBQVE7QUFDMUIsV0FBSXhRLEtBQU1rUSxHQUFhbFEsR0FBTSxrQkFBa0IsR0FDeEM7QUFBQSxFQUNSO0FBQ0QsR0FDSTZSLEtBQXNCLGNBQWN0RCxHQUFTO0FBQUEsRUFDaEQsY0FBYztBQUNiLFVBQU0sb0JBQW9CO0FBQUEsRUFDM0I7QUFBQSxFQUNBLFFBQVFpQyxHQUFLO0FBQ1osVUFBTXhRLElBQU93USxHQUFLLFFBQVE7QUFDMUIsUUFBSSxDQUFDeFEsRUFBTSxRQUFPO0FBQ2xCLFVBQU1tUixJQUFTZixHQUFZcFEsR0FBTSwrQkFBK0JBLENBQUk7QUFDcEUsUUFBSThSLElBQVcsSUFDWEMsSUFBSyxHQUNMQyxJQUFLLEdBQ0xDLElBQUssR0FDTEMsSUFBSztBQUNULFVBQU1DLElBQU8sS0FBSyxJQUFJLEtBQUssV0FBV25TLEVBQUssYUFBYSw0QkFBNEIsS0FBSyxFQUFFLEtBQUssR0FBRyxHQUM3Rm9TLElBQU8sS0FBSyxJQUFJLElBQUksV0FBV3BTLEVBQUssYUFBYSw0QkFBNEIsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUMzRjRRLElBQVMsQ0FBQ3RULE1BQU87QUFDdEIsTUFBSUEsRUFBRyxXQUFXLE1BQ2RBLEVBQUcsV0FBVzZULEtBQVUsQ0FBQ0EsRUFBTyxTQUFTN1QsRUFBRyxNQUFNLE1BQ3REd1UsSUFBVyxJQUNYQyxJQUFLelUsRUFBRyxTQUNSMFUsSUFBSzFVLEVBQUcsU0FDUjJVLElBQUtqUyxFQUFLLGFBQ1ZrUyxJQUFLbFMsRUFBSyxjQUNWbVIsRUFBTyxrQkFBa0I3VCxFQUFHLFNBQVMsR0FDckMwQyxFQUFLLGNBQWMsSUFBSSxZQUFZNFAsRUFBdUIsT0FBTztBQUFBLFFBQ2hFLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxVQUNQLE1BQUE1UDtBQUFBLFVBQ0EsT0FBT2lTO0FBQUEsVUFDUCxRQUFRQztBQUFBLFFBQ1Q7QUFBQSxNQUNELENBQUMsQ0FBQztBQUFBLElBQ0gsR0FDTXJCLElBQVMsQ0FBQ3ZULE1BQU87QUFDdEIsVUFBSSxDQUFDd1UsRUFBVTtBQUNmLFlBQU1PLElBQUssS0FBSyxJQUFJRixHQUFNRixLQUFNM1UsRUFBRyxVQUFVeVUsRUFBRyxHQUMxQ08sSUFBSyxLQUFLLElBQUlGLEdBQU1GLEtBQU01VSxFQUFHLFVBQVUwVSxFQUFHO0FBQ2hELE1BQUFoUyxFQUFLLE1BQU0sUUFBUSxHQUFHcVMsQ0FBRSxNQUN4QnJTLEVBQUssTUFBTSxTQUFTLEdBQUdzUyxDQUFFLE1BQ3pCdFMsRUFBSyxjQUFjLElBQUksWUFBWTRQLEVBQXVCLE1BQU07QUFBQSxRQUMvRCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsVUFDUCxNQUFBNVA7QUFBQSxVQUNBLE9BQU9xUztBQUFBLFVBQ1AsUUFBUUM7QUFBQSxRQUNUO0FBQUEsTUFDRCxDQUFDLENBQUM7QUFBQSxJQUNILEdBQ012QixJQUFPLENBQUN6VCxNQUFPO0FBQ3BCLFVBQUt3VSxHQUNMO0FBQUEsUUFBQUEsSUFBVztBQUNYLFlBQUk7QUFDSCxVQUFBWCxFQUFPLHNCQUFzQjdULEVBQUcsU0FBUztBQUFBLFFBQzFDLFFBQVE7QUFBQSxRQUFDO0FBQ1QsUUFBQTBDLEVBQUssY0FBYyxJQUFJLFlBQVk0UCxFQUF1QixLQUFLO0FBQUEsVUFDOUQsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFlBQ1AsTUFBQTVQO0FBQUEsWUFDQSxPQUFPQSxFQUFLO0FBQUEsWUFDWixRQUFRQSxFQUFLO0FBQUEsVUFDZDtBQUFBLFFBQ0QsQ0FBQyxDQUFDO0FBQUE7QUFBQSxJQUNIO0FBQ0EsV0FBQStQLEVBQWUvUCxHQUFNLHNCQUFzQnhCLEVBQVMyUyxHQUFRLGVBQWVQLENBQU0sQ0FBQyxHQUNsRmIsRUFBZS9QLEdBQU0sc0JBQXNCeEIsRUFBUzJTLEdBQVEsZUFBZU4sQ0FBTSxDQUFDLEdBQ2xGZCxFQUFlL1AsR0FBTSxzQkFBc0J4QixFQUFTMlMsR0FBUSxhQUFhSixDQUFJLENBQUMsR0FDOUVoQixFQUFlL1AsR0FBTSxzQkFBc0J4QixFQUFTMlMsR0FBUSxpQkFBaUJKLENBQUksQ0FBQyxHQUMzRTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFdBQVdQLEdBQUs7QUFDZixVQUFNeFEsSUFBT3dRLEdBQUssUUFBUTtBQUMxQixXQUFJeFEsS0FBTWtRLEdBQWFsUSxHQUFNLG9CQUFvQixHQUMxQztBQUFBLEVBQ1I7QUFDRDtBQUNBLElBQUl1USxHQUFvQjtBQUN4QixJQUFJVSxHQUFrQjtBQUN0QixJQUFJWSxHQUFvQjsiLAogICJuYW1lcyI6IFsiJGF2b2lkVHJpZ2dlciIsICJjYW1lbFRvS2ViYWIiLCAiY3Z0X2NzX3RvX29zIiwgImhhc1ZhbHVlIiwgImlzQXJyYXlPckl0ZXJhYmxlIiwgImlzVmFsIiwgImlzVmFsdWVVbml0IiwgImtlYmFiVG9DYW1lbCIsICJub3JtYWxpemVHcmlkTGF5b3V0IiwgIm5vcm1hbGl6ZVByaW1pdGl2ZSIsICJyZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwiLCAiYXBwZWFyIiwgImRlY29ySGlkZSIsICJkZWNvclNob3ciLCAiZGlzYXBwZWFyIiwgIm9ic2VydmVTdHlsZVRyZWUiLCAic2V0U3R5bGVQcm9wZXJ0eSIsICJfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sIiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMiLCAib3B0aW9ucyIsICJuYW1lIiwgImUiLCAiX19leHBvcnRQcm9wZXJ0aWVzIiwgImlzTW9iaWxlIiwgImNoZWNrIiwgImEiLCAiZGV0ZWN0TW9iaWxlIiwgImNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrIiwgInJ1bldoZW5JZGxlJDEiLCAiY2IiLCAidGltZW91dCIsICJnZXRPZmZzZXRQYXJlbnQiLCAiZWxlbWVudCIsICJnZXRPZmZzZXRQYXJlbnRDaGFpbiIsICJwYXJlbnRzIiwgImN1cnJlbnQiLCAicGFyZW50IiwgImlzTmVhcmx5SWRlbnRpdHkiLCAibWF0cml4IiwgImVwc2lsb24iLCAibWFrZVJBRkN5Y2xlIiwgImNvbnRyb2wiLCAickFGIiwgInJlcyIsICJSQUZCZWhhdmlvciIsICJzaGVkIiwgIlJPT1QiLCAic2V0QXR0cmlidXRlc0lmTnVsbCIsICJhdHRycyIsICJ2YWx1ZSIsICJvbGQiLCAic2V0QXR0cmlidXRlcyIsICJ0aHJvdHRsZU1hcCIsICJzZXRJZGxlSW50ZXJ2YWwiLCAiYXJncyIsICJzdGF0dXMiLCAiciIsICJib3JkZXJCb3hXaWR0aCIsICJib3JkZXJCb3hIZWlnaHQiLCAiY29udGVudEJveFdpZHRoIiwgImNvbnRlbnRCb3hIZWlnaHQiLCAib25Cb3JkZXJPYnNlcnZlIiwgIm9uQ29udGVudE9ic2VydmUiLCAiZG9Db250ZW50T2JzZXJ2ZSIsICJvYnNlcnZlciIsICJlbnRyaWVzIiwgImVudHJ5IiwgImNvbnRlbnRCb3hTaXplIiwgImRvQm9yZGVyT2JzZXJ2ZSIsICJib3JkZXJCb3hTaXplIiwgInVybCIsICJ0eXBlIiwgInNvdXJjZSIsICJodG1sIiwgInBhcnNlZCIsICJzZXRDaGVja2VkIiwgImlucHV0IiwgImV2IiwgImlzVmFsaWRQYXJlbnQiLCAiaW5kZXhPZiIsICJub2RlIiwgIk1BVENIIiwgIlJFR0VYIiwgImNyZWF0ZUVsZW1lbnRWYW5pbGxhIiwgInNlbGVjdG9yIiwgImNyZWF0ZSIsICJtYXRjaCIsICJjbGFzc05hbWUiLCAiaXNFbGVtZW50IiwgImVsIiwgImluY2x1ZGVTZWxmIiwgInRhcmdldCIsICJzZWwiLCAiaGFzUGFyZW50IiwgInBhc3NpdmVPcHRzIiwgImFkZEV2ZW50IiwgIm9wdHMiLCAid3IiLCAicmVtb3ZlRXZlbnQiLCAiYWRkRXZlbnRzIiwgInJvb3QiLCAiaGFuZGxlcnMiLCAiYWRkRXZlbnRzTGlzdCIsICJldmVudHMiLCAibGlzdCIsICJjYnMiLCAicmVtb3ZlRXZlbnRzIiwgImdldEV2ZW50VGFyZ2V0IiwgInBhdGgiLCAiY29udGFpbnNPclNlbGYiLCAiYiIsICJhRWwiLCAiYkVsIiwgImFJbmRleCIsICJiSW5kZXgiLCAiTU9DRWxlbWVudCIsICJzZWxmIiwgImhvc3RNYXRjaGVkIiwgImNsb3Nlc3QiLCAiaG9zdCIsICJNT0MiLCAiaXNJbkZvY3VzIiwgInNlbGVjdG9yT3JFbGVtZW50IiwgImRpciIsICJhY3RpdmUiLCAiaXNGb2N1c2VkIiwgImlzSG92ZXJlZCIsICJhbHRDbmQiLCAiZ2V0Wm9vbSIsICJ6b29tVmFsdWVzU3ltYm9sIiwgInpvb21WYWx1ZXMiLCAiem9vbU9mIiwgImNvbnRhaW5lciIsICJjaGFuZ2Vab29tIiwgInNjYWxlIiwgImZpeGVkQ2xpZW50Wm9vbSIsICJ1bmZpeGVkQ2xpZW50Wm9vbSIsICJvcmllbnRPZiIsICJyYXciLCAibiIsICJnZXRCb3VuZGluZ09yaWVudFJlY3QiLCAib3JpZW50IiwgInpvb20iLCAiYm94IiwgIm5ieCIsICJvcl9pIiwgInZ2IiwgInNpemUiLCAibGVmdF8iLCAidG9wXyIsICJyaWdodF8iLCAiYm90dG9tXyIsICJsZWZ0IiwgInJpZ2h0IiwgInRvcCIsICJib3R0b20iLCAid2lkdGgiLCAiaGVpZ2h0IiwgImJidyIsICJiYmgiLCAiY2J3IiwgImNiaCIsICJydW5XaGVuSWRsZSIsICJLRVlCT0FSRF9PVkVSTEFZX1BYIiwgImNhcGFjaXRvcktleWJvYXJkSGVpZ2h0IiwgImNhcGFjaXRvcktleWJvYXJkQm91bmQiLCAidmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQiLCAidmlydHVhbEtleWJvYXJkIiwgImVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkiLCAidmsiLCAiaXNJbWVUYXJnZXQiLCAidGFnIiwgImxheW91dExvY2tPcmllbnQiLCAibGF5b3V0TG9ja1ciLCAibGF5b3V0TG9ja0giLCAiY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQiLCAic2FmZVdpZHRoIiwgInNhZmVIZWlnaHQiLCAic2FmZUxlZnQiLCAic2FmZVRvcCIsICJyZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQiLCAicmVhZExheW91dFZpZXdwb3J0IiwgImlubmVyVyIsICJpbm5lckgiLCAidnZXIiwgInZ2SCIsICJ2dlRvcCIsICJ2a0giLCAidnZPdmVybGFwIiwgImNhcEgiLCAia2V5Ym9hcmQiLCAiY2FuZGlkYXRlVyIsICJjYW5kaWRhdGVIIiwgInN1ZGRlblNocmluayIsICJzaHJpbmsiLCAicGluT3ZlcmxheVNjcm9sbCIsICJnZXRBdmFpbFNpemUiLCAibCIsICJsYXlvdXQiLCAidnZCbG9jayIsICJhdyIsICJhaCIsICJhdmFpbFNpemUiLCAiY2xhc3NlcyIsICJvcmllbnRhdGlvbk51bWJlck1hcCIsICJ1cGRhdGVWUCIsICJydWxlIiwgInByb3BOYW1lIiwgInByb3BWYWx1ZSIsICJleGlzdHMiLCAiZ2V0Q29ycmVjdE9yaWVudGF0aW9uIiwgIm9yaWVudGF0aW9uVHlwZSIsICJwYXNzaXZlT3B0cyQxIiwgImJpbmRDYXBhY2l0b3JLZXlib2FyZCIsICJjYXAiLCAiS2V5Ym9hcmQiLCAib25TaG93IiwgImluZm8iLCAibmV4dCIsICJvbkhpZGUiLCAiZW5zdXJlVmlld3BvcnRUcmFja2luZyIsICJ3aGVuQW55U2NyZWVuQ2hhbmdlcyIsICJ0aWNraW5nIiwgInVwZGF0ZSIsICJ1bnN1YnNjcmliZXJzIiwgInVuc3ViIiwgImZpeE9yaWVudFRvU2NyZWVuIiwgImN0eCIsICJpbml0VGV4dFN0eWxlIiwgInN0eWxlIiwgImZvbnRXZWlnaHQiLCAiZm9udFNpemUiLCAiZm9udEZhbWlseSIsICJmb250U3RyZXRjaCIsICJtZWFzdXJlVGV4dCIsICJ0ZXh0IiwgIm1lYXN1cmVJbnB1dEluRm9jdXMiLCAiY29tcHV0ZUNhcmV0UG9zaXRpb24iLCAicG9pbnQiLCAiY3VycmVudFdpZHRoIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCIsICJjbGllbnQiLCAicmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQiLCAibGF5b3V0T3ZlcnJpZGUiLCAiYyIsICJiYXNlIiwgInJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCIsICJncmlkU3lzdGVtIiwgImNsaWVudFBvaW50IiwgIm1vZGUiLCAicmVjdCIsICJjcyIsICJwbCIsICJwdCIsICJwciIsICJwYiIsICJjb250ZW50VyIsICJjb250ZW50SCIsICJjc0Nvb3JkIiwgImFuaW1hdGVTaG93IiwgImFuaW1hdGVIaWRlIiwgIldhdnlTaGFwZWRDaXJjbGUiLCAic3RlcHMiLCAiYW1wbGl0dWRlIiwgImZyZXEiLCAicG9pbnRzIiwgImkiLCAiYW5nbGUiLCAic3RlcCIsICJ2YXJpYW50IiwgImZ1bmMiLCAib25Cb3JkZXJPYnNlcnZlU3ltYm9sIiwgIm9uQm9yZGVyT2JzZXJ2ZSQxIiwgIm9uQ29udGVudE9ic2VydmVTeW1ib2wiLCAib25Db250ZW50T2JzZXJ2ZSQxIiwgInVud3JhcEZyb21RdWVyeSIsICJub3JtYWxpemVTZWxlY3RvciIsICJmYWxsYmFjayIsICJzYWZlUXVlcnlTZWxlY3RvckFsbCIsICJzYWZlTWF0Y2hlcyIsICJvYnNlcnZlQ29udGVudEJveCIsICJjYWxsYmFja3MiLCAib2JzZXJ2ZUJvcmRlckJveCIsICJvYnNlcnZlQXR0cmlidXRlIiwgImF0dHJpYnV0ZSIsICJvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvciIsICJhdHRyaWJ1dGVMaXN0IiwgInMiLCAibXV0YXRpb25MaXN0IiwgIm11dGF0aW9uIiwgImFkZGVkTm9kZXMiLCAicmVtb3ZlZE5vZGVzIiwgIm9ic2VydmVCeVNlbGVjdG9yIiwgIm11dCIsICJvYnMiLCAidW53cmFwTm9kZXNCeVNlbGVjdG9yIiwgIm5vZGVzIiwgIiRub2RlcyIsICJvYlJlZiIsICJoYW5kbGVNdXRhdGlvbiIsICJoYW5kbGVDb21lIiwgImhhbmRsZU91dENvbWUiLCAiaGFuZGxlRm9jdXNDbGljayIsICJmYWN0b3JzIiwgInNlbGVjdGVkIiwgImJvdW5kQmVoYXZpb3JzIiwgImJpbmRCZWhhdmlvciIsICJiZWhTZXQiLCAiYmVoYXZpb3IiLCAicmVmbGVjdEJlaGF2aW9ycyIsICJiZWhhdmlvcnMiLCAibmFtZWRTdG9yZU1hcHNTeW1ib2wiLCAibmFtZWRTdG9yZU1hcHMiLCAiZ2V0U3RvcmVzT2ZFbGVtZW50IiwgIm1hcCIsICJFIiwgIm0iLCAiaXNXZWFrQ29tcGF0aWJsZSIsICJiaW5kU3RvcmUiLCAib2JqIiwgIndlYWtNYXAiLCAicmVmbGVjdFN0b3JlcyIsICJzdG9yZXMiLCAicmVmbGVjdE1peGlucyIsICJtaXhpbnMiLCAibWl4aW5TZXQiLCAiYm91bmRNaXhpblNldCIsICJiaW5kTWl4aW5zIiwgImdldEVsZW1lbnRSZWxhdGVkIiwgIm1peGluIiwgIm1peFNldCIsICJ3ZWwiLCAibWl4aW5FbGVtZW50cyIsICJib3VuZE1peGluU2V0U3ltYm9sIiwgIm1peGluRWxlbWVudHNTeW1ib2wiLCAibWl4aW5SZWdpc3RyeVN5bWJvbCIsICJtaXhpblJlZ2lzdHJ5IiwgIm1peGluTmFtZXNwYWNlU3ltYm9sIiwgIm1peGluTmFtZXNwYWNlIiwgInVwZGF0ZU1peGluQXR0cmlidXRlcyIsICJuYW1lcyIsICJyb290cyIsICJhZGRSb290IiwgInVwZGF0ZUFsbE1peGlucyIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwiLCAiZWxlbWVudHMiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyIsICJuYW1lUmVnaXN0cnlGIiwgImtleSIsICJyZWdpc3Rlck1peGluIiwgIkRPTU1peGluIiwgIndFbGVtZW50IiwgIndTZWxmIiwgInJlbGF0ZWQiLCAiaGFuZGxlSGlkZGVuIiwgIl8iLCAidmlzaWJsZSIsICIkcmVmIiwgImlzVmlzaWJsZSIsICJoYW5kbGVQcm9wZXJ0eSIsICJwcm9wIiwgInZhbCIsICJoYW5kbGVEYXRhc2V0IiwgImRhdGFzZXRSZWYiLCAiZGVsZXRlU3R5bGVQcm9wZXJ0eSIsICJoYW5kbGVTdHlsZUNoYW5nZSIsICJzdHlsZVJlZiIsICJoYW5kbGVBdHRyaWJ1dGUiLCAianVuY3Rpb25Ub0JveCIsICJKVU5DVElPTl9TRUxFQ1RfRVZFTlRTIiwgIkpVTkNUSU9OX0RSQUdfRVZFTlRTIiwgIkpVTkNUSU9OX1JFU0laRV9FVkVOVFMiLCAibWl4aW5EaXNwb3NlcnNTeW1ib2wiLCAibWl4aW5EaXNwb3NlcnMiLCAicHVzaERpc3Bvc2FibGUiLCAibWl4aW5OYW1lIiwgImZuIiwgInJ1bkRpc3Bvc2VycyIsICJwYXJzZVB4VmFyIiwgInF1ZXJ5SGFuZGxlIiwgImF0dHIiLCAiZm91bmQiLCAiSnVuY3Rpb25TZWxlY3RNaXhpbiIsICJ3RWwiLCAib3ZlcmxheSIsICJsb2NhbFBvaW50IiwgImFwcGx5T3ZlcmxheSIsICJvbkRvd24iLCAib25Nb3ZlIiwgImVuZCIsICJvblVwIiwgIm9uQ2FuY2VsIiwgIkp1bmN0aW9uRHJhZ01peGluIiwgInByZXZpb3VzVHJhbnNmb3JtIiwgImhhbmRsZSIsICJkcmFnZ2luZyIsICJzdGFydFgiLCAic3RhcnRZIiwgImJhc2VYIiwgImJhc2VZIiwgImR4IiwgImR5IiwgIm54IiwgIm55IiwgIkp1bmN0aW9uUmVzaXplTWl4aW4iLCAicmVzaXppbmciLCAic3giLCAic3kiLCAic3ciLCAic2giLCAibWluVyIsICJtaW5IIiwgIm53IiwgIm5oIl0KfQo=

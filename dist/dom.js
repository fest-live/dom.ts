import { $avoidTrigger as q, camelToKebab as Xe, cvt_cs_to_os as Re, hasValue as Z, isArrayOrIterable as ht, isVal as pt, isValueUnit as mt, kebabToCamel as Ue, normalizeGridLayout as vt, normalizePrimitive as Te, resolveLocalPointToGridCell as gt } from "@fest-lib/core";
import { appear as yt, decorHide as bt, decorShow as wt, disappear as xt, observeStyleTree as St, setStyleProperty as j } from "@fest-lib/style-lib";
export * from "@fest-lib/style-lib";
var Et = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), je = globalThis[Et] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || je.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      je.add(t);
    }
});
var gn = () => {
}, yn = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, bn = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, Ct = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), Oe = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(Ct()), 0), Mt = (e) => e?.offsetParent ?? e?.host, wn = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = Mt(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && t.push(n);
  }
  return t;
}, xn = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, Nt = () => {
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
}, Sn = (e = Nt()) => (t) => e.shedule(t), En = typeof document < "u" ? document?.documentElement : null, Cn = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, r]) => {
      const i = e.getAttribute(n);
      r == null ? e.removeAttribute(n) : r != i && e.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, Mn = (e, t = {}) => Array.from(Object.entries(t)).map(([n, r]) => {
  r == null ? e.removeAttribute(n) : e.setAttribute(n, r ?? e.getAttribute(n));
}), kt = /* @__PURE__ */ new Map(), Nn = (e, t = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return Oe(async () => {
    if (!(!e || typeof e != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((i) => setTimeout(i, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => Oe(i, t)), new Promise((i) => setTimeout(i, t))]);
      r.cancel = () => {
      };
    }
  }, t), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    kt.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var ee = /* @__PURE__ */ Symbol("@border-box-width"), te = /* @__PURE__ */ Symbol("@border-box-height"), ne = /* @__PURE__ */ Symbol("@content-box-width"), re = /* @__PURE__ */ Symbol("@content-box-height"), _e = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), kn = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Be.has(e)) {
    e[ne] = e.clientWidth, e[re] = e.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const o = i.contentBoxSize[0];
        o && (e[ne] = Math.min(o.inlineSize, e.clientWidth), e[re] = Math.min(o.blockSize, e.clientHeight), t?.(e));
      }
    });
    Be.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, Tn = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !_e.has(e)) {
    e[ee] = e.offsetWidth, e[te] = e.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const o = i.borderBoxSize[0];
        o && (e[ee] = Math.min(o.inlineSize, e.offsetWidth), e[te] = Math.min(o.blockSize, e.offsetHeight), t?.(e));
      }
    });
    _e.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, An = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), Ln = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, Hn = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, Wn = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, Vn = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, X = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", zn = "^(?:" + X + ")|^#" + X + "|^\\." + X + "|^\\[" + X + `(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, Pn = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), r, i = ""; e && (r = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, Rn = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, jn = (e, t) => {
  const n = typeof t == "string" ? t.trim() : "";
  if (!n || !e) return e ?? null;
  try {
    return e.querySelector(n) ?? (e.matches(n) ? e : null);
  } catch {
    return null;
  }
}, fe = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, Je = {};
function p(e, t, n, r = Je) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function Ie(e, t, n, r = Je) {
  e?.removeEventListener?.(t, n, r);
}
var On = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? p(e, n, ...r) : p(e, n, r))), _n = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([r, i]) => ((ht(i) ? [...i] : i) ?? [])?.map?.((o) => p(e, r, o)));
  }
}, Bn = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? Ie(e, n, ...r) : Ie(e, n, r))), In = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, Fn = (e, t, n) => {
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
}, be = (e, t, n) => {
  const r = typeof t == "string" ? t.trim() : "";
  if (!r) return e ?? null;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const a = n.composedPath();
    for (const d of a) if (d instanceof HTMLElement || d instanceof Element) try {
      if (d.matches?.(r)) return d;
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
}, Dn = (e, t) => !!be(e, t), $n = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === e || fe(r, e), o = e.matches(":hover");
  if (!i && !o && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!be(e, t);
      {
        const s = i ? r : e.querySelector(":hover") || e, a = !!be(s, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || a;
      }
    } else if (t instanceof HTMLElement)
      return n === "parent" ? fe(e, t) || !1 : fe(t, e) || !1;
  }
  return !0;
}, qn = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, Tt = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), At = globalThis[Tt] ??= /* @__PURE__ */ new WeakMap(), Lt = (e = document.documentElement) => At.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), Zn = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), Kn = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : Lt(e)) || 1, we = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, H = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, Yn = (e, t = null) => {
  const n = we(e) || 1, r = e?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, o = t ?? (H(e) || 0), s = typeof window < "u" ? window.visualViewport : null, a = [((s?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((s?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [d, h] = Re([i.left, i.top], a, o), [l, v] = Re([i.right, i.bottom], a, o), [f, u] = o == 0 || o == 3 ? [d, l] : [l, d], [c, m] = o == 0 || o == 1 ? [h, v] : [v, h], [x, Y] = o % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: f,
    top: c,
    right: u,
    bottom: m,
    width: x,
    height: Y
  };
}, Xn = (e, t = null) => (t ?? H(e)) % 2 ? e[te] ?? e?.clientHeight : e[ee] ?? e?.clientWidth, Un = (e, t = null) => (t ?? H(e)) % 2 ? e[ee] ?? e?.clientWidth : e[te] ?? e?.clientHeight, Jn = (e, t = null) => (t ?? H(e)) % 2 ? e[re] ?? e?.clientHeight : e[ne] ?? e?.clientWidth, Gn = (e, t = null) => (t ?? H(e)) % 2 ? e[ne] ?? e?.clientWidth : e[re] ?? e?.clientHeight, Ge = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), E = 80, Ae = 0, Fe = !1, De = !1, $e = !1, g = null, qe = !1, he = !1, W = () => {
  try {
    if (typeof document < "u" && document.documentElement.dataset.cwspNativeShell === "capacitor") return !0;
    const e = globalThis.Capacitor;
    return typeof e?.isNativePlatform == "function" && !!e.isNativePlatform();
  } catch {
    return !1;
  }
}, Qe = () => {
  try {
    return globalThis.Capacitor?.Plugins?.CwsBridge ?? null;
  } catch {
    return null;
  }
}, Ht = (e) => {
  if (!e) return null;
  const t = Number(e.windowWidthCss) || 0, n = Number(e.windowHeightCss) || 0, r = Number(e.displayWidthCss) || t, i = Number(e.displayHeightCss) || n, o = t || r, s = n || i;
  if (o <= 0 || s <= 0) return null;
  const a = Number(e.density) || 0;
  return {
    windowWidthCss: o,
    windowHeightCss: s,
    displayWidthCss: r || o,
    displayHeightCss: i || s,
    density: a,
    densityDpi: Number(e.densityDpi) || 0,
    xdpi: Number(e.xdpi) || 0,
    ydpi: Number(e.ydpi) || 0,
    ppi: Number(e.ppi) || 0,
    scaledDensity: Number(e.scaledDensity) || a,
    fontScale: Number(e.fontScale) || (a > 0 ? (Number(e.scaledDensity) || a) / a : 1)
  };
}, et = (e) => {
  const t = Ht(e);
  if (!t) return;
  const n = g, r = !!(n && n.windowWidthCss === t.windowWidthCss && n.windowHeightCss === t.windowHeightCss && n.displayWidthCss === t.displayWidthCss && n.displayHeightCss === t.displayHeightCss && n.density === t.density && n.densityDpi === t.densityDpi && n.ppi === t.ppi && n.fontScale === t.fontScale);
  g = t, r || le();
}, tt = () => {
  if (!W()) return;
  const e = Qe();
  e && (typeof e.getDisplayMetrics == "function" ? e.getDisplayMetrics() : e.getShellInfo?.())?.then((t) => et(t)).catch(() => {
  });
}, V = () => {
  !W() || he || (he = !0, Ge(() => {
    he = !1, ie(), tt();
  }, 80));
}, ie = () => {
  if (!(qe || typeof globalThis > "u") && W() && Qe()) {
    qe = !0;
    try {
      const e = globalThis.window?.__CWS_SHELL_INFO__;
      e && et(e);
    } catch {
    }
    tt();
  }
}, nt = () => {
  try {
    return globalThis.navigator?.virtualKeyboard ?? null;
  } catch {
    return null;
  }
}, U = "interactive-widget=overlays-content", J = "viewport-fit=cover", Wt = () => {
  if (typeof document > "u") return;
  const e = document.head || document.documentElement;
  if (!e) return;
  let t = document.querySelector('meta[name="viewport"]');
  if (!t) {
    t = document.createElement("meta"), t.setAttribute("name", "viewport"), t.content = `width=device-width, initial-scale=1.0, ${J}, ${U}`, e.insertBefore(t, e.firstChild);
    return;
  }
  let n = String(t.content || "").trim();
  /interactive-widget\s*=\s*overlays-content/i.test(n) || (/interactive-widget\s*=/i.test(n) ? n = n.replace(/interactive-widget\s*=\s*[a-z-]+/i, U) : n = n ? `${n.replace(/,\s*$/, "")}, ${U}` : U), /viewport-fit\s*=\s*cover/i.test(n) || (/viewport-fit\s*=/i.test(n) ? n = n.replace(/viewport-fit\s*=\s*[a-z-]+/i, J) : n = n ? `${n.replace(/,\s*$/, "")}, ${J}` : J), n !== String(t.content || "").trim() && (t.content = n);
}, B = () => {
  Wt();
  const e = nt();
  if (e)
    try {
      e.overlaysContent !== !0 && (e.overlaysContent = !0);
    } catch {
    }
}, M = () => {
  let e = typeof document < "u" ? document.activeElement : null;
  for (; e instanceof HTMLElement && e.shadowRoot?.activeElement; ) e = e.shadowRoot.activeElement;
  return e;
}, b = (e) => {
  if (!e || !(e instanceof HTMLElement)) return !1;
  if (e.localName === "cw-raw-editor" || e.isContentEditable) return !0;
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
}, I = () => {
  try {
    const e = document.getSelection();
    return !!(e && e.rangeCount && e.isCollapsed);
  } catch {
    return !0;
  }
}, Ze = "", S = 0, w = 0, G = 0, rt = () => {
  try {
    const e = typeof screen < "u" ? String(screen.orientation?.type || "") : "";
    return e.startsWith("landscape") ? !0 : e.startsWith("portrait") ? !1 : !!(typeof matchMedia < "u" && matchMedia("(orientation: landscape)")?.matches);
  } catch {
    return !1;
  }
}, it = () => {
  let e = 0, t = 0;
  if (g)
    e = g.windowWidthCss || g.displayWidthCss, t = g.windowHeightCss || g.displayHeightCss;
  else if (typeof screen < "u") {
    const i = Number(screen.width) || 0, o = Number(screen.height) || 0, s = Number(screen.availWidth) || 0, a = Number(screen.availHeight) || 0;
    e = Math.max(e, i, s), t = Math.max(t, o, a);
  }
  if (!e && !t) return {
    width: 0,
    height: 0
  };
  const n = rt(), r = e > 0 && t > 0 && e > t;
  return n && e > 0 && t > 0 && e < t ? {
    width: t,
    height: e
  } : !n && r ? {
    width: t,
    height: e
  } : {
    width: e || t,
    height: t || e
  };
}, Vt = (e, t) => {
  const n = it(), r = typeof window < "u" && Number(window.innerWidth) || 0, i = typeof window < "u" && Number(window.innerHeight) || 0, o = typeof document < "u" ? document.documentElement : null, s = Number(o?.clientWidth) || 0, a = Number(o?.clientHeight) || 0, d = Math.max(n.width, r, s), h = Math.max(n.height, i, a);
  return {
    width: d > 0 ? Math.min(e, d) : e,
    height: h > 0 ? Math.min(t, h) : t
  };
}, Ke = (e, t, n = 0, r = 0) => {
  const i = Math.max(0, Number(e) || 0), o = Math.max(0, Number(t) || 0), s = Number(n) || 0, a = Number(r) || 0;
  return {
    left: s,
    top: a,
    right: s + i,
    bottom: a + o,
    width: i,
    height: o
  };
}, Qn = () => {
  if (typeof window > "u") return Ke(0, 0);
  const e = typeof document < "u" ? document.documentElement : null;
  return Ke(Number(e?.clientWidth) || Number(window.innerWidth) || 0, Number(e?.clientHeight) || Number(window.innerHeight) || 0);
}, ue = () => {
  if (typeof window > "u") return {
    width: 0,
    height: 0,
    keyboard: 0
  };
  const e = window.visualViewport, t = Number(window.innerWidth) || 0, n = Number(window.innerHeight) || 0, r = Number(e?.width) || 0, i = Number(e?.height) || 0, o = Number(e?.offsetTop) || 0, s = Number(nt()?.boundingBox?.height) || 0, a = n > 0 && i > 0 ? n - i - o : 0, d = Ae, h = W();
  let l = d >= E ? d : !h && s >= E ? s : !h && a >= E ? a : 0;
  const v = Math.max(t, r), f = Math.max(n, i + o, l > 0 ? i + l : 0), u = rt() ? "l" : "p";
  u !== Ze && (Ze = u, S = 0, w = 0);
  const c = S <= 0 || Math.abs(S - v) < 32, m = b(M()) || b(document.activeElement);
  let x = !1;
  try {
    x = typeof matchMedia == "function" && matchMedia("(pointer: coarse)").matches;
  } catch {
    x = !1;
  }
  const Y = !h && c && (m || x) && w > 0 && w - f >= E;
  if (l < E && Y) {
    const Pe = Math.max(0, w - f, w - (i + o));
    Pe >= E && (l = Pe);
  }
  const ze = !I();
  ze && G >= E ? l = G : l >= E ? G = l : !b(M()) && !b(document.activeElement) && (G = 0), l > 0 || b(M()) || b(document.activeElement) || Y || ze ? (S = Math.max(v, S), w = Math.max(f, w)) : (S = v, w = f);
  const N = Vt(S || v, w || f);
  S = N.width, w = N.height;
  const ft = N.height > 0 ? Math.min(l, N.height) : l;
  return {
    width: N.width,
    height: N.height,
    keyboard: ft
  };
}, Le = (e) => {
  const t = e.tagName;
  if (t === "HTML" || t === "BODY" || t === "CW-RAW-EDITOR" || t === "CW-VIEW-VIEWER" || t === "CW-MARKDOWN-VIEW-FRAME" || t === "CW-MARKDOWN-TOOLBAR-FRAME") return !0;
  const n = e.classList;
  return n.contains("app-shell") || n.contains("app-shell__viewport") || n.contains("app-shell__nav") || n.contains("env-shell-root") || n.contains("env-shell-workspace") || n.contains("env-shell-chrome") || n.contains("env-ui-window") || n.contains("env-ui-window__body") || n.contains("wf-frame") || n.contains("ui-window") || n.contains("view-viewer") || n.contains("view-viewer__toolbar") || n.contains("view-viewer__chrome") || n.contains("view-viewer__content") || n.contains("cw-view-viewer-shell") || n.contains("cw-markdown-view-frame") || n.contains("cw-view-viewer__slot-raw");
}, He = (e) => {
  if (!e) return null;
  if (e.parentElement) return e.parentElement;
  const t = e.getRootNode();
  return t instanceof ShadowRoot ? t.host : null;
}, zt = (e) => {
  if (Le(e)) return !1;
  const t = getComputedStyle(e), n = t.overflowY || t.overflowBlock;
  return n !== "auto" && n !== "scroll" ? !1 : e.scrollHeight > e.clientHeight + 1;
}, F = (e) => {
  let t = e;
  for (; t; ) {
    if (t instanceof HTMLElement && t.classList.contains("cw-raw-editor__scroll")) return t;
    if (t instanceof HTMLElement && t.localName === "cw-raw-editor") {
      const r = t.shadowRoot?.querySelector(".cw-raw-editor__scroll");
      if (r instanceof HTMLElement) return r;
    }
    const n = t.getRootNode();
    if (n instanceof ShadowRoot) {
      const r = n.querySelector(".cw-raw-editor__scroll");
      if (r instanceof HTMLElement) return r;
    }
    t = He(t);
  }
  return null;
}, xe = (e) => {
  const t = F(e);
  if (t) return t;
  let n = e;
  for (; n; ) {
    if (n instanceof HTMLElement && zt(n)) return n;
    n = He(n);
  }
  return null;
}, Pt = () => {
  try {
    const t = document.getSelection();
    if (t?.rangeCount) {
      const n = t.getRangeAt(0), r = n.getClientRects(), i = r.length ? r[r.length - 1] : n.getBoundingClientRect();
      if (i && (i.height || i.width || i.top || i.bottom)) return i;
    }
  } catch {
  }
  const e = document.activeElement;
  return e instanceof HTMLElement ? e.getBoundingClientRect() : null;
}, Rt = () => {
  const e = M();
  if (!b(e) && !b(document.activeElement) || !I()) return;
  const t = ue().keyboard, n = window.visualViewport, r = (Number(n?.height) || Number(window.innerHeight) || 0) - Math.max(8, t ? 12 : 0);
  if (r <= 0) return;
  const i = Pt();
  if (!i) return;
  const o = i.bottom - r;
  if (o <= 1) return;
  const s = xe(e) || xe(document.activeElement);
  s && (s.scrollTop += o);
}, jt = () => {
  const e = window.visualViewport;
  if (!e) return;
  const t = Number(e.offsetTop) || 0, n = Number(e.offsetLeft) || 0;
  if (!(!t && !n))
    try {
      e.scrollTo({
        left: 0,
        top: 0,
        behavior: "instant"
      });
    } catch {
      try {
        e.scrollTo?.(0, 0);
      } catch {
      }
    }
}, pe = !1, me = (e) => {
  const t = xe(e);
  let n = e;
  for (; n; )
    n instanceof HTMLElement && n !== t && Le(n) && (n.scrollTop || n.scrollLeft) && (n.scrollTop = 0, n.scrollLeft = 0), n = He(n);
}, T = () => {
  if (typeof window > "u" || pe) return;
  const e = M(), t = W(), n = !!(F(e) || F(document.activeElement)), r = ue().keyboard > 0 || b(e) || b(document.activeElement);
  if (!(!r && !t)) {
    pe = !0;
    try {
      jt(), (window.scrollX || window.scrollY) && window.scrollTo(0, 0);
      const i = document.documentElement, o = document.body;
      (i.scrollTop || i.scrollLeft) && i.scrollTo(0, 0), o && (o.scrollTop || o.scrollLeft) && o.scrollTo(0, 0), (n || r || !I()) && (me(e), me(document.activeElement)), t && document.querySelectorAll("cw-raw-editor").forEach((s) => {
        s instanceof HTMLElement && !s.hidden && me(s);
      });
    } finally {
      pe = !1;
    }
  }
}, Ye = !1, Ot = () => {
  if (Ye || typeof Element > "u") return;
  Ye = !0;
  const e = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(t) {
    const n = M();
    if ((F(this) || F(n) || b(n) && !I()) && (W() || !I())) {
      oe({ caret: !0 });
      return;
    }
    if (!(this instanceof HTMLElement && Le(this)))
      return e.call(this, t);
  };
}, oe = (e) => {
  T(), e?.caret && requestAnimationFrame(() => {
    T(), Rt();
  });
}, er = () => typeof window > "u" ? 0 : ue().keyboard, ot = () => {
  B();
  const e = typeof window < "u" ? window.visualViewport : null, t = ue(), n = {
    "--vv-width": `${e?.width ?? (typeof window < "u" ? window.innerWidth : 0)}px`,
    "--vv-height": `${e?.height ?? (typeof window < "u" ? window.innerHeight : 0)}px`,
    "--vv-offset-left": `${e?.offsetLeft ?? 0}px`,
    "--vv-offset-top": `${e?.offsetTop ?? 0}px`,
    "--vv-scale": String(e?.scale ?? 1),
    "--lv-width": `${t.width}px`,
    "--lv-height": `${t.height}px`,
    "--keyboard-overlay-height": `${t.keyboard}px`,
    "--virtual-keyboard-height": `${t.keyboard}px`
  };
  if (typeof document < "u" && document.documentElement.removeAttribute("data-vk-open"), typeof screen < "u") {
    const r = it(), i = typeof window < "u" && Number(window.innerWidth) || 0, o = typeof window < "u" && Number(window.innerHeight) || 0, s = Math.max(i, t.width), a = Math.max(o, t.height), d = !g && s > 0 && r.width > s + 64, h = !g && a > 0 && r.height > a + 64, l = d ? s : Math.max(r.width, s), v = h ? a : Math.max(r.height, a), f = l > 0 ? `${l}px` : "100lvi", u = v > 0 ? `${v}px` : "100lvb", c = g?.density || Number(devicePixelRatio) || 1, m = g ? {
      "--native-density": String(g.density || c),
      "--native-dpi": String(g.densityDpi || 0),
      "--native-ppi": String(g.ppi || 0),
      "--native-xdpi": String(g.xdpi || 0),
      "--native-ydpi": String(g.ydpi || 0),
      "--native-font-scale": String(g.fontScale || 1)
    } : {};
    return {
      "--screen-width": f,
      "--screen-height": u,
      "--avail-width": f,
      "--avail-height": u,
      "--view-height": `${t.height}px`,
      "--pixel-ratio": String(c),
      ...m,
      ...n
    };
  }
  return {
    "--screen-width": "100lvi",
    "--screen-height": "100lvb",
    "--avail-width": "100lvi",
    "--avail-height": "100lvb",
    "--view-height": `${t.height}px`,
    "--pixel-ratio": "1",
    ...n
  };
}, Se = ot(), tr = [[":root, :host, :scope", Se]], _t = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, le = (e) => {
  const t = document.documentElement;
  Object.assign(Se, ot()), Object.entries(Se).forEach(([n, r]) => {
    const i = t?.style?.getPropertyValue(n);
    (!i || i != r) && t?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, Bt = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, z = { passive: !0 }, Ee = (e) => {
  const t = Number(e) || 0;
  t > 0 && (Ae = t), le(), oe({ caret: !0 });
}, ae = () => {
  Ae = 0, le();
}, It = () => {
  if (De || typeof window > "u") return;
  De = !0;
  const e = (t) => {
    const n = t, r = n.detail, i = typeof r == "string" ? (() => {
      try {
        return JSON.parse(r)?.keyboardHeight;
      } catch {
        return 0;
      }
    })() : r?.keyboardHeight;
    Ee(n.keyboardHeight ?? i);
  };
  window.addEventListener("keyboardWillShow", e), window.addEventListener("keyboardDidShow", e), window.addEventListener("keyboardWillHide", ae), window.addEventListener("keyboardDidHide", ae);
}, Ce = () => {
  if (It(), Fe || typeof globalThis > "u") return;
  const e = globalThis.Capacitor, t = e?.Plugins?.Keyboard;
  if (t?.addListener && !(typeof e.isNativePlatform == "function" && !e.isNativePlatform())) {
    Fe = !0;
    try {
      t.setScroll?.({ isDisabled: !0 });
    } catch {
    }
    try {
      t.setResizeMode?.({ mode: "none" });
    } catch {
    }
    t.addListener("keyboardWillShow", (n) => Ee(n?.keyboardHeight)), t.addListener("keyboardDidShow", (n) => Ee(n?.keyboardHeight)), t.addListener("keyboardWillHide", ae), t.addListener("keyboardDidHide", ae);
  }
}, nr = () => {
  $e || typeof window > "u" || ($e = !0, Ce(), ie(), at(() => {
  }));
}, at = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      le(), e(), t = !1;
    }), t = !0);
  }, r = [];
  return Ce(), ie(), Ot(), r.push(p(navigator?.virtualKeyboard, "geometrychange", n, z)), r.push(p(document, "selectionchange", () => {
    T();
  }, z)), r.push(p(window?.visualViewport, "scroll", () => {
    T(), n();
  }, z)), r.push(p(window, "scroll", () => {
    T();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(document, "scroll", () => {
    T();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(window?.visualViewport, "resize", () => {
    oe({ caret: !0 }), n();
  }, z)), r.push(p(screen?.orientation, "change", () => {
    V(), n();
  })), r.push(p(window, "resize", () => {
    V(), n();
  })), r.push(p(document?.documentElement, "fullscreenchange", () => {
    V(), n();
  })), r.push(p(document, "DOMContentLoaded", n)), r.push(p(matchMedia("(orientation: portrait)"), "change", () => {
    V(), n();
  })), r.push(p(matchMedia("(orientation: landscape)"), "change", () => {
    V(), n();
  })), r.push(p(document, "focusin", () => {
    Ce(), ie(), B(), (b(M()) || b(document.activeElement)) && (S = Math.max(S, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0), w = Math.max(w, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0)), oe({ caret: !0 }), n();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(document, "focusout", n, z)), B(), n(), Ge(() => n(), 100), () => r.forEach((i) => i());
}, rr = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), at(() => {
      const t = _t?.[Bt()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
};
typeof document < "u" && (B(), document.readyState === "loading" && document.addEventListener("DOMContentLoaded", () => B(), { once: !0 }));
var L = new OffscreenCanvas(1, 1).getContext("2d"), st = (e, t) => {
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
}, Ft = (e, t) => {
  if (L) {
    st(t, L);
    try {
      return L.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, ir = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return Ft(t, e);
}, Dt = (e, t) => {
  const n = e?.value || "";
  if (L) {
    st(e, L);
    let r = 0;
    for (let i = 0; i < n.length; i++) {
      if (r = L.measureText(n.slice(0, i))?.width, r == null) return n.length;
      if (r != null && r >= t[0]) return Math.max(i - 1, 0);
    }
  }
  return n.length;
}, or = (e, t) => {
  const n = e.getBoundingClientRect(), r = [t[0] - n.left / we(), t[1] - n.top / we()];
  return Dt(e, r);
}, $t = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = vt(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, ar = (e, t, n, r = "floor") => {
  if (!e) return [0, 0];
  const i = e.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const o = $t(e, n?.layout), s = H(e), a = globalThis.getComputedStyle?.(e), d = parseFloat(a?.paddingLeft) || 0, h = parseFloat(a?.paddingTop) || 0, l = parseFloat(a?.paddingRight) || 0, v = parseFloat(a?.paddingBottom) || 0, f = Math.max(1, (i.width || e.clientWidth || 1) - d - l), u = Math.max(1, (i.height || e.clientHeight || 1) - h - v), c = [(t?.[0] || 0) - i.left - d, (t?.[1] || 0) - i.top - h];
  return gt(c, [f, u], o, s, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, sr = (e) => yt(e, wt), cr = (e) => xt(e, bt), ur = (e = 100, t = 0.05, n = 8) => {
  const r = [];
  for (let a = 0; a < e; a++) r.push(a / e);
  const i = (a) => `calc(${a}rad * pi * 2)`, o = (a) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(a)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, s = (a) => [`calc(calc(0.5 + calc(cos(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((a) => s(a).join(" ")).join(", ")})`
  };
}, qt = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), P = globalThis[qt] ??= /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), R = globalThis[Zt] ??= /* @__PURE__ */ new WeakMap(), K = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), de = (e, t = "*") => typeof e != "string" ? t : e.trim() || t, O = (e, t) => {
  if (!e || typeof e.querySelectorAll != "function") return [];
  const n = de(t, "");
  if (!n) return [];
  try {
    return Array.from(e.querySelectorAll(n) || []);
  } catch {
    return [];
  }
}, Me = (e, t) => {
  if (!e || typeof e.matches != "function") return !1;
  const n = de(t, "");
  if (!n) return !1;
  try {
    return !!e.matches(n);
  } catch {
    return !1;
  }
}, lr = (e, t) => {
  if (!R.has(e = K(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.contentBoxSize) {
        const s = o.contentBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, r), R.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "content-box" });
  }
  return R.get(e)?.push?.(t), { disconnect: () => R.get(e)?.splice?.(R.get(e)?.indexOf(t) || -1, 1) };
}, dr = (e, t) => {
  if (!P.has(e = K(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.borderBoxSize) {
        const s = o.borderBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, r), P.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "border-box" });
  }
  return P.get(e)?.push?.(t), { disconnect: () => P.get(e)?.splice?.(P.get(e)?.indexOf(t) || -1, 1) };
}, fr = (e, t, n) => {
  if (typeof e?.selector == "string") return ct(e, e?.selector, t, n);
  const r = new Set((t.split(",") || [t]).map((o) => o.trim())), i = new MutationObserver((o, s) => {
    for (const a of o) a.attributeName && r.has(a.attributeName) && n(a, s);
  });
  return (e?.element ?? e) instanceof Node && i.observe(e = K(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((o) => n({
    target: e,
    type: "attributes",
    attributeName: o,
    oldValue: e?.getAttribute?.(o)
  }, i)), i;
}, ct = (e, t, n, r) => {
  const i = de(t), o = new Set([...n.split(",") || [n]].map((a) => a.trim())), s = new MutationObserver((a, d) => {
    for (const h of a) if (h.type == "childList") {
      const l = Array.from(h.addedNodes) || [], v = Array.from(h.removedNodes) || [];
      l.push(...Array.from(h.addedNodes || []).flatMap((f) => O(f, i))), v.push(...Array.from(h.removedNodes || []).flatMap((f) => O(f, i))), [...new Set(l)].filter((f) => Me(f, i))?.map?.((f) => {
        o.forEach((u) => {
          r({
            target: f,
            type: "attributes",
            attributeName: u,
            oldValue: f?.getAttribute?.(u)
          }, d);
        });
      });
    } else Me(h.target, i) && h.attributeName && o.has(h.attributeName) && r(h, d);
  });
  return s.observe(e = K(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...o],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), O(e, i).map((a) => o.forEach((d) => r({
    target: a,
    type: "attributes",
    attributeName: d,
    oldValue: a?.getAttribute?.(d)
  }, s))), s;
}, Kt = (e, t = "*", n = (r, i) => {
}) => {
  const r = de(t), i = (u) => {
    const c = Array.from(u || []) || [];
    return c.push(...Array.from(u || []).flatMap((m) => O(m, r))), [...Array.from(new Set(c).values())].filter((m) => Me(m, r));
  };
  let o = null;
  const s = (u) => {
    const c = o?.deref?.(), m = i(u.addedNodes), x = i(u.removedNodes);
    (m.length > 0 || x.length > 0) && n?.({
      type: u.type,
      target: u.target,
      attributeName: u.attributeName,
      attributeNamespace: u.attributeNamespace,
      nextSibling: u.nextSibling,
      oldValue: u.oldValue,
      previousSibling: u.previousSibling,
      addedNodes: m,
      removedNodes: x
    }, c);
  }, a = (u) => {
    s({
      addedNodes: [u?.target].filter((c) => !!c),
      removedNodes: [u?.relatedTarget].filter((c) => !!c),
      type: "childList",
      target: u?.currentTarget
    });
  }, d = (u) => {
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
  }, l = {
    passive: !0,
    capture: !1
  };
  if (r?.includes?.(":hover") && r?.includes?.(":active"))
    return e.addEventListener("pointerover", a, l), e.addEventListener("pointerout", d, l), e.addEventListener("pointerdown", a, l), e.addEventListener("pointerup", d, l), e.addEventListener("pointercancel", d, l), { disconnect: () => {
      e.removeEventListener("pointerover", a, l), e.removeEventListener("pointerout", d, l), e.removeEventListener("pointerdown", a, l), e.removeEventListener("pointerup", d, l), e.removeEventListener("pointercancel", d, l);
    } };
  if (r?.includes?.(":hover"))
    return e.addEventListener("pointerover", a, l), e.addEventListener("pointerout", d, l), { disconnect: () => {
      e.removeEventListener("pointerover", a, l), e.removeEventListener("pointerout", d, l);
    } };
  if (r?.includes?.(":active"))
    return e.addEventListener("pointerdown", a, l), e.addEventListener("pointerup", d, l), e.addEventListener("pointercancel", d, l), { disconnect: () => {
      e.removeEventListener("pointerdown", a, l), e.removeEventListener("pointerup", d, l), e.removeEventListener("pointercancel", d, l);
    } };
  if (r?.includes?.(":focus") && r?.includes?.(":focus-within") && r?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", a, l), e.addEventListener("focusout", d, l), e.addEventListener("click", h, l), { disconnect: () => {
      e.removeEventListener("focusin", a, l), e.removeEventListener("focusout", d, l), e.removeEventListener("click", h, l);
    } };
  const v = new MutationObserver((u, c) => {
    for (const m of u) m.type == "childList" && s(m);
  });
  o = new WeakRef(v), (e?.element ?? e) instanceof Node && v.observe(e = K(e), {
    childList: !0,
    subtree: !0
  });
  const f = O(e, r);
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, v), v;
}, ut = /* @__PURE__ */ new WeakMap(), Yt = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), hr = (e, t) => {
  if (e) {
    if (t) {
      const n = ut.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((r) => Yt(e, n, r));
    }
    return e;
  }
}, Xt = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), D = globalThis[Xt] ??= /* @__PURE__ */ new Map(), Ut = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, Jt = (e) => (typeof e == "object" || typeof e == "function") && e != null, Gt = (e, t, n) => {
  if (!Jt(e) && e != null) return e;
  let r = D.get(t);
  return r || (r = /* @__PURE__ */ new WeakMap(), D.set(t, r)), !r.has(e) && e != null && r.set(e, n), e;
}, pr = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, r] of t.entries()) Gt(e, n, r);
    return e;
  }
}, mr = (e, t) => {
  if (e) {
    if (t) {
      const n = C?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      C?.has?.(e) || C?.set?.(e, n), [...t?.values?.() || []].map((r) => Qt(e, r, n));
    }
    return e;
  }
}, _ = (e) => ({
  storeSet: Ut(D, e),
  mixinSet: C?.get?.(e),
  behaviorSet: ut?.get?.(e)
}), Qt = (e, t, n) => {
  const r = new WeakRef(e);
  return n ||= C?.get?.(e), n?.has?.(t) || (n?.add?.(t), A?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((i) => !!i).join(" ")), t?.connect?.(r, t, _(e))), e;
}, en = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), C = globalThis[en] ??= /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), A = globalThis[tn] ??= /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), $ = globalThis[nn] ??= /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), se = globalThis[rn] ??= /* @__PURE__ */ new WeakMap(), lt = (e, t) => {
  typeof t == "string" && (t = $?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((s) => $?.get?.(s)).filter((s) => !!s)), i = C?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  A?.has?.(t) || A?.set?.(t, /* @__PURE__ */ new WeakSet()), C?.has?.(e) || C?.set?.(e, i);
  const o = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(o, t, _(e)), (r.has(t) || !A?.get?.(t)?.has?.(e)) && (t?.connect?.(o, t, _(e)), n.add(se?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((s) => !!s).join(" "))), A?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(o, t, _(e))));
}, Ne = /* @__PURE__ */ new Set(), on = (e = typeof document < "u" ? document : null) => {
  if (e)
    return Ne?.has?.(e) || (Ne?.add?.(e), ct(e, "*", "data-mixin", (t) => ke(t.target)), Kt(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && ke(n);
    }), St(e)), e;
}, ke = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => $?.get?.(n)).filter((n) => !!n))].map?.((n) => lt(e, n));
}, an = (e, t) => {
  e.forEach((n) => t ? lt(n, t) : ke(n));
}, sn = (e) => {
  for (const t of Ne) an(t?.querySelectorAll?.("[data-mixin]"), e);
}, cn = new FinalizationRegistry((e) => {
  $?.delete?.(e);
}), un = (e, t) => {
  if (!se?.has?.(t)) {
    const n = e?.trim?.();
    n && (se?.set?.(t, n), $?.set?.(n, t), cn?.register?.(t, n), sn(t));
  }
};
on(typeof document < "u" ? document : null);
var We = class {
  constructor(e = null) {
    e && un(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return D.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return _(e);
  }
  get elements() {
    return A?.get?.(this);
  }
  get storage() {
    return D?.get?.(this.name || "");
  }
  get name() {
    return se?.get?.(this);
  }
}, vr = (e, t, n) => {
  const r = n;
  Z(n) && (n = n.value);
  const i = (n = Te(n)) != null && n !== !1;
  return q(r, () => {
    e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, gr = (e, t, n) => {
  if (!(t = typeof t == "string" ? Ue(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const r = n;
  return Z(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && q(r, () => {
    n != null ? e[t] = n : delete e[t];
  }), e;
}, yr = (e, t, n) => {
  const r = e?.dataset;
  if (!t || !e || !r) return e;
  const i = n;
  return Z(n) && (n = n?.value), t = Ue(t), r?.[t] === (n = Te(n)) || (n == null || n === !1 ? delete r[t] : q(i, () => {
    typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
  })), e;
}, ln = (e, t) => e.style.removeProperty(Xe(t)), br = (e, t, n) => {
  const r = e?.style;
  return !t || typeof t != "string" || !e || !r || q(n, () => {
    pt(n) || Z(n) || mt(n) ? j(e, t, n) : n == null && ln(e, t);
  }), e;
}, wr = (e, t, n) => {
  if (!t || !e) return e;
  const r = n;
  return Z(n) && (n = n.value), t = Xe(t), e?.getAttribute?.(t) === (n = Te(n)) || q(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
};
function ve(e, t) {
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
var Q = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, ge = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, ye = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, dn = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), ce = globalThis[dn] ??= /* @__PURE__ */ new WeakMap(), y = (e, t, n) => {
  const r = ce.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), ce.set(e, r);
}, Ve = (e, t) => {
  const n = ce.get(e), r = n?.get(t);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(t), n.size === 0 && ce.delete(e);
  }
}, k = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, dt = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, fn = class extends We {
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
      const m = t.getBoundingClientRect();
      return {
        x: c.clientX - m.left,
        y: c.clientY - m.top
      };
    }, d = () => {
      const c = ve(o, s);
      if (c.width < 1 && c.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${c.left}px`, n.style.top = `${c.top}px`, n.style.width = `${c.width}px`, n.style.height = `${c.height}px`;
    }, h = (c) => {
      c.button === 0 && (c.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (c.target === t || t.contains(c.target)) && (i = !0, o = a(c), s = { ...o }, t.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(Q.start, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          host: t
        }
      })), d()));
    }, l = (c) => {
      if (!i) return;
      s = a(c), d();
      const m = ve(o, s);
      t.dispatchEvent(new CustomEvent(Q.move, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          box: m,
          host: t
        }
      }));
    }, v = (c) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(c.pointerId);
      } catch {
      }
      const m = ve(o, s);
      t.dispatchEvent(new CustomEvent(Q.end, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          box: m,
          host: t
        }
      }));
    }, f = (c) => {
      i && v(c);
    }, u = (c) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Q.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return y(t, "ui-junction-select", () => {
      n.remove();
    }), y(t, "ui-junction-select", p(t, "pointerdown", h)), y(t, "ui-junction-select", p(t, "pointermove", l)), y(t, "ui-junction-select", p(t, "pointerup", f)), y(t, "ui-junction-select", p(t, "pointercancel", u)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Ve(t, "ui-junction-select"), this;
  }
}, hn = class extends We {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    j(t, "--jx-drag-x", k(t, "--jx-drag-x")), j(t, "--jx-drag-y", k(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = dt(t, "data-junction-drag-handle", t);
    let i = !1, o = 0, s = 0, a = 0, d = 0;
    const h = (f) => {
      f.button === 0 && (f.target !== r && !r.contains(f.target) || (i = !0, o = f.clientX, s = f.clientY, a = k(t, "--jx-drag-x"), d = k(t, "--jx-drag-y"), r.setPointerCapture(f.pointerId), t.dispatchEvent(new CustomEvent(ge.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: f.clientX,
          clientY: f.clientY,
          baseX: a,
          baseY: d
        }
      }))));
    }, l = (f) => {
      if (!i) return;
      const u = f.clientX - o, c = f.clientY - s, m = a + u, x = d + c;
      j(t, "--jx-drag-x", m), j(t, "--jx-drag-y", x), t.dispatchEvent(new CustomEvent(ge.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: u,
          dy: c,
          x: m,
          y: x
        }
      }));
    }, v = (f) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(f.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(ge.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: k(t, "--jx-drag-x"),
            y: k(t, "--jx-drag-y")
          }
        }));
      }
    };
    return y(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), y(t, "ui-junction-drag", p(r, "pointerdown", h)), y(t, "ui-junction-drag", p(r, "pointermove", l)), y(t, "ui-junction-drag", p(r, "pointerup", v)), y(t, "ui-junction-drag", p(r, "pointercancel", v)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Ve(t, "ui-junction-drag"), this;
  }
}, pn = class extends We {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = dt(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, o = 0, s = 0, a = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), h = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), l = (u) => {
      u.button === 0 && (u.target !== n && !n.contains(u.target) || (r = !0, i = u.clientX, o = u.clientY, s = t.offsetWidth, a = t.offsetHeight, n.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(ye.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: s,
          height: a
        }
      }))));
    }, v = (u) => {
      if (!r) return;
      const c = Math.max(d, s + (u.clientX - i)), m = Math.max(h, a + (u.clientY - o));
      t.style.width = `${c}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(ye.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: c,
          height: m
        }
      }));
    }, f = (u) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(u.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(ye.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return y(t, "ui-junction-resize", p(n, "pointerdown", l)), y(t, "ui-junction-resize", p(n, "pointermove", v)), y(t, "ui-junction-resize", p(n, "pointerup", f)), y(t, "ui-junction-resize", p(n, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Ve(t, "ui-junction-resize"), this;
  }
};
new fn();
new hn();
new pn();
export {
  We as DOMMixin,
  hn as JunctionDragMixin,
  pn as JunctionResizeMixin,
  fn as JunctionSelectMixin,
  X as MATCH,
  Dn as MOC,
  be as MOCElement,
  Sn as RAFBehavior,
  zn as REGEX,
  En as ROOT,
  ur as WavyShapedCircle,
  gn as __exportProperties,
  je as __registeredCssProperties,
  p as addEvent,
  On as addEvents,
  _n as addEventsList,
  on as addRoot,
  cr as animateHide,
  sr as animateShow,
  Se as availSize,
  Un as bbh,
  Xn as bbw,
  Yt as bindBehavior,
  Qt as bindMixins,
  Gt as bindStore,
  te as borderBoxHeight,
  ee as borderBoxWidth,
  ut as boundBehaviors,
  C as boundMixinSet,
  Gn as cbh,
  Jn as cbw,
  Zn as changeZoom,
  tr as classes,
  Dt as computeCaretPosition,
  or as computeCaretPositionFromClient,
  Fn as containsOrSelf,
  re as contentBoxHeight,
  ne as contentBoxWidth,
  Pn as createElementVanilla,
  Ke as createFixedOverlayViewport,
  ln as deleteStyleProperty,
  bn as detectMobile,
  Tn as doBorderObserve,
  kn as doContentObserve,
  Wt as ensureViewportInteractiveWidgetOverlay,
  nr as ensureViewportTracking,
  B as ensureVirtualKeyboardOverlay,
  rr as fixOrientToScreen,
  Kn as fixedClientZoom,
  ot as getAvailSize,
  Yn as getBoundingOrientRect,
  Bt as getCorrectOrientation,
  _ as getElementRelated,
  In as getEventTarget,
  Mt as getOffsetParent,
  wn as getOffsetParentChain,
  Ut as getStoresOfElement,
  qn as getZoom,
  wr as handleAttribute,
  yr as handleDataset,
  vr as handleHidden,
  gr as handleProperty,
  br as handleStyleChange,
  fe as hasParent,
  Ln as html,
  jn as includeSelf,
  Vn as indexOf,
  st as initTextStyle,
  Rn as isElement,
  $n as isInFocus,
  yn as isMobile,
  xn as isNearlyIdentity,
  Wn as isValidParent,
  Nt as makeRAFCycle,
  ir as measureInputInFocus,
  Ft as measureText,
  ce as mixinDisposers,
  A as mixinElements,
  se as mixinNamespace,
  $ as mixinRegistry,
  cn as nameRegistryF,
  D as namedStoreMaps,
  fr as observeAttribute,
  ct as observeAttributeBySelector,
  dr as observeBorderBox,
  Kt as observeBySelector,
  lr as observeContentBox,
  _e as onBorderObserve,
  Be as onContentObserve,
  H as orientOf,
  _t as orientationNumberMap,
  Je as passiveOpts,
  Qn as readFixedOverlayViewport,
  $t as readLauncherLayoutFromElement,
  er as readVirtualKeyboardHeightPx,
  hr as reflectBehaviors,
  mr as reflectMixins,
  pr as reflectStores,
  un as registerMixin,
  Ie as removeEvent,
  Bn as removeEvents,
  ar as resolveGridCellFromClientPoint,
  Ne as roots,
  Mn as setAttributes,
  Cn as setAttributesIfNull,
  Hn as setChecked,
  Nn as setIdleInterval,
  kt as throttleMap,
  we as unfixedClientZoom,
  ke as updateAllMixins,
  lt as updateMixinAttributes,
  an as updateMixinAttributesAll,
  sn as updateMixinAttributesAllInRoots,
  le as updateVP,
  An as url,
  at as whenAnyScreenChanges,
  Lt as zoomOf,
  At as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwgfSBmcm9tIFwiQGZlc3QtbGliL2NvcmVcIjtcbmltcG9ydCB7IGFwcGVhciwgZGVjb3JIaWRlLCBkZWNvclNob3csIGRpc2FwcGVhciwgb2JzZXJ2ZVN0eWxlVHJlZSwgc2V0U3R5bGVQcm9wZXJ0eSB9IGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCI7XG5cbmV4cG9ydCAqIGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCJcblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9Qcm9wZXJ0aWVzLnRzXG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzID0gZ2xvYmFsVGhpc1tfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtZnJlcVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1waXhlbC1yYXRpb1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXlcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXhcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXlcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fVxuXS5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIENTUz8ucmVnaXN0ZXJQcm9wZXJ0eSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0Y29uc3QgbmFtZSA9IFN0cmluZyhvcHRpb25zPy5uYW1lIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFuYW1lIHx8IF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuaGFzKG5hbWUpKSByZXR1cm47XG5cdHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkob3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAoIShTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiKSkgY29uc29sZS53YXJuKGUpO1xuXHR9IGZpbmFsbHkge1xuXHRcdF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuYWRkKG5hbWUpO1xuXHR9XG59KTtcbnZhciBfX2V4cG9ydFByb3BlcnRpZXMgPSAoKSA9PiB7fTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0RldGVjdC50c1xudmFyIGlzTW9iaWxlID0gKCkgPT4ge1xuXHRsZXQgY2hlY2sgPSBuYXZpZ2F0b3I/LnVzZXJBZ2VudERhdGE/Lm1vYmlsZSB8fCBmYWxzZTtcblx0KChhKSA9PiB7XG5cdFx0aWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSBjaGVjayA9IHRydWU7XG5cdH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCBnbG9iYWxUaGlzLm9wZXJhKTtcblx0cmV0dXJuIGNoZWNrO1xufTtcbnZhciBkZXRlY3RNb2JpbGUgPSAoKSA9PiB7XG5cdHJldHVybiBbXG5cdFx0L0FuZHJvaWQvaSxcblx0XHQvd2ViT1MvaSxcblx0XHQvaVBob25lL2ksXG5cdFx0L2lQYWQvaSxcblx0XHQvaVBvZC9pLFxuXHRcdC9CbGFja0JlcnJ5L2ksXG5cdFx0L1dpbmRvd3MgUGhvbmUvaVxuXHRdLnNvbWUobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaC5iaW5kKG5hdmlnYXRvci51c2VyQWdlbnQpKSAmJiAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiBnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1V0aWxzLnRzXG52YXIgY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2sgPSAoKSA9PiAoe1xuXHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxufSk7XG52YXIgcnVuV2hlbklkbGUkMSA9IChjYiwgdGltZW91dCA9IDFlMykgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrKCkpLCAwKTtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIGVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBlbGVtZW50Py5ob3N0O1xufTtcbnZhciBnZXRPZmZzZXRQYXJlbnRDaGFpbiA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IHBhcmVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IGdldE9mZnNldFBhcmVudChjdXJyZW50KTtcblx0XHRpZiAocGFyZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxIdG1sRWxlbWVudCkgYnJlYWs7XG5cdFx0aWYgKGN1cnJlbnQgPSBwYXJlbnQpIHBhcmVudHMucHVzaChjdXJyZW50KTtcblx0fVxuXHRyZXR1cm4gcGFyZW50cztcbn07XG52YXIgaXNOZWFybHlJZGVudGl0eSA9IChtYXRyaXgsIGVwc2lsb24gPSAxZS02KSA9PiB7XG5cdHJldHVybiBNYXRoLmFicyhtYXRyaXguYSAtIDEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYikgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5jKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmQgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmUpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguZikgPCBlcHNpbG9uO1xufTtcbnZhciBtYWtlUkFGQ3ljbGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRyb2wgPSB7XG5cdFx0Y2FuY2VsZWQ6IGZhbHNlLFxuXHRcdHJBRnM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0bGFzdDogbnVsbCxcblx0XHRjYW5jZWwoKSB7XG5cdFx0XHR0aGlzLmNhbmNlbGVkID0gdHJ1ZTtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdHNoZWR1bGUoY2IpIHtcblx0XHRcdHRoaXMuckFGcy5hZGQoY2IpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHR9O1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHdoaWxlICghY29udHJvbD8uY2FuY2VsZWQpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKChjb250cm9sPy5yQUZzPy52YWx1ZXM/LigpID8/IFtdKT8ubWFwPy4oKHJBRikgPT4gUHJvbWlzZS50cnkockFGKT8uY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSkpKTtcblx0XHRcdGNvbnRyb2wuckFGcz8uY2xlYXI/LigpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRjb250cm9sLmxhc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmVzLCAxNik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pKCk7XG5cdHJldHVybiBjb250cm9sO1xufTtcbnZhciBSQUZCZWhhdmlvciA9IChzaGVkID0gbWFrZVJBRkN5Y2xlKCkpID0+IHtcblx0cmV0dXJuIChjYikgPT4gc2hlZC5zaGVkdWxlKGNiKTtcbn07XG52YXIgUk9PVCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgc2V0QXR0cmlidXRlc0lmTnVsbCA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdGlmICghYXR0cnMgfHwgdHlwZW9mIGF0dHJzICE9IFwib2JqZWN0XCIgfHwgIWVsZW1lbnQpIHJldHVybjtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRjb25zdCBvbGQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBpZiAodmFsdWUgIT0gb2xkKSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBvbGQgPT0gXCJcIiA/IHZhbHVlID8/IG9sZCA6IG9sZCA/PyB2YWx1ZSk7XG5cdH0pO1xufTtcbnZhciBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJzID0ge30pID0+IHtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA/PyBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKSk7XG5cdH0pO1xufTtcbnZhciB0aHJvdHRsZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgc2V0SWRsZUludGVydmFsID0gKGNiLCB0aW1lb3V0ID0gMWUzLCAuLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHN0YXR1cyA9IHtcblx0XHRydW5uaW5nOiB0cnVlLFxuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0c3RhdHVzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cdHJ1bldoZW5JZGxlJDEoYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghY2IgfHwgdHlwZW9mIGNiICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRcdHdoaWxlIChzdGF0dXMucnVubmluZykge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoW1Byb21pc2UudHJ5KGNiLCAuLi5hcmdzKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSkuY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFueShbbmV3IFByb21pc2UoKHIpID0+IHJ1bldoZW5JZGxlJDEociwgdGltZW91dCkpLCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCB0aW1lb3V0KSldKTtcblx0XHR9XG5cdFx0c3RhdHVzLmNhbmNlbCA9ICgpID0+IHt9O1xuXHR9LCB0aW1lb3V0KTtcblx0cmV0dXJuIHN0YXR1cz8uY2FuY2VsO1xufTtcbmlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dGhyb3R0bGVNYXAuZm9yRWFjaCgoY2IpID0+IGNiPy4oKSk7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyKSk7XG5cdH1cbn0pO1xudmFyIGJvcmRlckJveFdpZHRoID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtd2lkdGhcIik7XG52YXIgYm9yZGVyQm94SGVpZ2h0ID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtaGVpZ2h0XCIpO1xudmFyIGNvbnRlbnRCb3hXaWR0aCA9IFN5bWJvbChcIkBjb250ZW50LWJveC13aWR0aFwiKTtcbnZhciBjb250ZW50Qm94SGVpZ2h0ID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LWhlaWdodFwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZG9Db250ZW50T2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50LmNsaWVudFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50LmNsaWVudEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQ29udGVudE9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxufTtcbnZhciBkb0JvcmRlck9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5vZmZzZXRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Cb3JkZXJPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxufTtcbnZhciB1cmwgPSAodHlwZSwgLi4uc291cmNlKSA9PiB7XG5cdHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKHNvdXJjZSwgeyB0eXBlIH0pKTtcbn07XG52YXIgaHRtbCA9IChzb3VyY2UsIHR5cGUgPSBcInRleHQvaHRtbFwiKSA9PiB7XG5cdGNvbnN0IHBhcnNlZCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc291cmNlLCB0eXBlKTtcblx0cmV0dXJuIHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikgPz8gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCIqXCIpO1xufTtcbnZhciBzZXRDaGVja2VkID0gKGlucHV0LCB2YWx1ZSwgZXYpID0+IHtcblx0aWYgKHZhbHVlICE9IG51bGwgJiYgaW5wdXQuY2hlY2tlZCAhPSB2YWx1ZSkge1xuXHRcdGlmIChpbnB1dD8uW1widHlwZVwiXSA9PSBcImNoZWNrYm94XCIgfHwgaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJyYWRpb1wiICYmICFpbnB1dD8uY2hlY2tlZCkge1xuXHRcdFx0aW5wdXQ/LmNsaWNrPy4oKTtcblx0XHRcdGV2Py5wcmV2ZW50RGVmYXVsdD8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlucHV0LmNoZWNrZWQgPSAhIXZhbHVlO1xuXHRcdFx0aW5wdXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGlzVmFsaWRQYXJlbnQgPSAocGFyZW50KSA9PiB7XG5cdHJldHVybiBwYXJlbnQgIT0gbnVsbCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgSFRNTEJvZHlFbGVtZW50KSA/IHBhcmVudCA6IG51bGw7XG59O1xudmFyIGluZGV4T2YgPSAoZWxlbWVudCwgbm9kZSkgPT4ge1xuXHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IG5vZGUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50Py5jaGlsZE5vZGVzID8/IFtdKT8uaW5kZXhPZj8uKG5vZGUpID8/IC0xO1xufTtcbnZhciBNQVRDSCA9IFwiKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKVwiO1xudmFyIFJFR0VYID0gXCJeKD86XCIgKyBNQVRDSCArIFwiKXxeI1wiICsgTUFUQ0ggKyBcInxeXFxcXC5cIiArIE1BVENIICsgXCJ8XlxcXFxbXCIgKyBNQVRDSCArIFwiKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiO1xudmFyIGNyZWF0ZUVsZW1lbnRWYW5pbGxhID0gKHNlbGVjdG9yKSA9PiB7XG5cdGlmIChzZWxlY3RvciA9PSBcIjpmcmFnbWVudDpcIikgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0Y29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KTtcblx0Zm9yICh2YXIgbm9kZSA9IGNyZWF0ZShcImRpdlwiKSwgbWF0Y2gsIGNsYXNzTmFtZSA9IFwiXCI7IHNlbGVjdG9yICYmIChtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCIpKTspIHtcblx0XHRpZiAobWF0Y2hbMV0pIG5vZGUgPSBjcmVhdGUobWF0Y2hbMV0pO1xuXHRcdGlmIChtYXRjaFsyXSkgbm9kZS5pZCA9IG1hdGNoWzJdO1xuXHRcdGlmIChtYXRjaFszXSkgY2xhc3NOYW1lICs9IFwiIFwiICsgbWF0Y2hbM107XG5cdFx0aWYgKG1hdGNoWzRdKSBub2RlLnNldEF0dHJpYnV0ZShtYXRjaFs0XSwgbWF0Y2hbN10gfHwgXCJcIik7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuXHR9XG5cdGlmIChjbGFzc05hbWUpIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNsaWNlKDEpO1xuXHRyZXR1cm4gbm9kZTtcbn07XG52YXIgaXNFbGVtZW50ID0gKGVsKSA9PiB7XG5cdHJldHVybiBlbCAhPSBudWxsICYmIChlbCBpbnN0YW5jZW9mIE5vZGUgfHwgZWwgaW5zdGFuY2VvZiBUZXh0IHx8IGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIENvbW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gZWwgOiBudWxsO1xufTtcbnZhciBpbmNsdWRlU2VsZiA9ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB7XG5cdGNvbnN0IHNlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiA/IHNlbGVjdG9yLnRyaW0oKSA6IFwiXCI7XG5cdGlmICghc2VsIHx8ICF0YXJnZXQpIHJldHVybiB0YXJnZXQgPz8gbnVsbDtcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3Ioc2VsKSA/PyAodGFyZ2V0Lm1hdGNoZXMoc2VsKSA/IHRhcmdldCA6IG51bGwpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBoYXNQYXJlbnQgPSAoY3VycmVudCwgcGFyZW50KSA9PiB7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0aWYgKCEoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICgoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSA9PT0gKHBhcmVudD8uZWxlbWVudCA/PyBwYXJlbnQpKSByZXR1cm4gdHJ1ZTtcblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50ID8/IChjdXJyZW50LnBhcmVudE5vZGUgPT0gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pID8gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0IDogY3VycmVudD8ucGFyZW50Tm9kZSk7XG5cdH1cbn07XG52YXIgcGFzc2l2ZU9wdHMgPSB7fTtcbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG5cdGNvbnN0IHdyID0gdHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQ/LmRlcmVmID8gbmV3IFdlYWtSZWYodGFyZ2V0KSA6IHRhcmdldDtcblx0cmV0dXJuICgpID0+IHdyPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG5mdW5jdGlvbiByZW1vdmVFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxudmFyIGFkZEV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gYWRkRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogYWRkRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgYWRkRXZlbnRzTGlzdCA9IChlbCwgZXZlbnRzKSA9PiB7XG5cdGlmIChldmVudHMpIHtcblx0XHRsZXQgZW50cmllcyA9IGV2ZW50cztcblx0XHRpZiAoZXZlbnRzIGluc3RhbmNlb2YgTWFwKSBlbnRyaWVzID0gWy4uLmV2ZW50cy5lbnRyaWVzKCldO1xuXHRcdGVsc2UgZW50cmllcyA9IFsuLi5PYmplY3QuZW50cmllcyhldmVudHMpXTtcblx0XHRyZXR1cm4gZW50cmllcy5tYXAoKFtuYW1lLCBsaXN0XSkgPT4gKChpc0FycmF5T3JJdGVyYWJsZShsaXN0KSA/IFsuLi5saXN0XSA6IGxpc3QpID8/IFtdKT8ubWFwPy4oKGNicykgPT4ge1xuXHRcdFx0cmV0dXJuIGFkZEV2ZW50KGVsLCBuYW1lLCBjYnMpO1xuXHRcdH0pKTtcblx0fVxufTtcbnZhciByZW1vdmVFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGdldEV2ZW50VGFyZ2V0ID0gKGV2KSA9PiB7XG5cdGlmICghZXYpIHJldHVybiBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBub2RlO1xuXHR9XG5cdGNvbnN0IHRhcmdldCA9IGV2Py50YXJnZXQ7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gdGFyZ2V0O1xuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgY29udGFpbnNPclNlbGYgPSAoYSwgYiwgZXYpID0+IHtcblx0aWYgKGIgPT0gbnVsbCB8fCAhKGIgaW5zdGFuY2VvZiBOb2RlKSAmJiBiPy5lbGVtZW50ID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gYiB8fCAoYT8uZWxlbWVudCA/PyBhKSA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRjb25zdCBhRWwgPSBhPy5lbGVtZW50ID8/IGE7XG5cdFx0Y29uc3QgYkVsID0gYj8uZWxlbWVudCA/PyBiO1xuXHRcdGlmIChwYXRoLmluY2x1ZGVzKGFFbCkgJiYgcGF0aC5pbmNsdWRlcyhiRWwpKSB7XG5cdFx0XHRjb25zdCBhSW5kZXggPSBwYXRoLmluZGV4T2YoYUVsKTtcblx0XHRcdGNvbnN0IGJJbmRleCA9IHBhdGguaW5kZXhPZihiRWwpO1xuXHRcdFx0aWYgKGJJbmRleCA+PSAwICYmIGFJbmRleCA+PSAwICYmIGJJbmRleCA8IGFJbmRleCkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChhPy5jb250YWlucz8uKGI/LmVsZW1lbnQgPz8gYikgfHwgYT8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgTU9DRWxlbWVudCA9IChlbGVtZW50LCBzZWxlY3RvciwgZXYpID0+IHtcblx0Y29uc3Qgc2VsID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IudHJpbSgpIDogXCJcIjtcblx0aWYgKCFzZWwpIHJldHVybiBlbGVtZW50ID8/IG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgdHJ5IHtcblx0XHRcdGlmIChub2RlLm1hdGNoZXM/LihzZWwpKSByZXR1cm4gbm9kZTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblx0bGV0IHNlbGYgPSBudWxsO1xuXHRsZXQgaG9zdE1hdGNoZWQgPSBudWxsO1xuXHRsZXQgY2xvc2VzdCA9IG51bGw7XG5cdHRyeSB7XG5cdFx0c2VsZiA9IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWwpID8gZWxlbWVudCA6IG51bGw7XG5cdFx0Y29uc3QgaG9zdCA9IChlbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID8/IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkpPy5ob3N0O1xuXHRcdGhvc3RNYXRjaGVkID0gaG9zdD8ubWF0Y2hlcz8uKHNlbCkgPyBob3N0IDogbnVsbDtcblx0XHRjbG9zZXN0ID0gZWxlbWVudD8uY2xvc2VzdD8uKHNlbCkgPz8gc2VsZj8uY2xvc2VzdD8uKHNlbCkgPz8gaG9zdE1hdGNoZWQ/LmNsb3Nlc3Q/LihzZWwpID8/IG51bGw7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIHNlbGYgPz8gY2xvc2VzdCA/PyBob3N0TWF0Y2hlZDtcbn07XG52YXIgTU9DID0gKGVsZW1lbnQsIHNlbGVjdG9yKSA9PiB7XG5cdHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3IpO1xufTtcbnZhciBpc0luRm9jdXMgPSAoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQsIGRpciA9IFwicGFyZW50XCIpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiAhZWxlbWVudC5jaGVja1Zpc2liaWxpdHkoe1xuXHRcdGNoZWNrT3BhY2l0eTogdHJ1ZSxcblx0XHRjaGVja1Zpc2liaWxpdHlDU1M6IHRydWVcblx0fSkpIHJldHVybiBmYWxzZTtcblx0aWYgKCFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbCAmJiBlbGVtZW50LnN0eWxlLnBvc2l0aW9uICE9PSBcImZpeGVkXCIpIHJldHVybiBmYWxzZTtcblx0bGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdHdoaWxlIChhY3RpdmUgJiYgYWN0aXZlLnNoYWRvd1Jvb3QgJiYgYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudCkgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblx0Y29uc3QgaXNGb2N1c2VkID0gYWN0aXZlID09PSBlbGVtZW50IHx8IGhhc1BhcmVudChhY3RpdmUsIGVsZW1lbnQpO1xuXHRjb25zdCBpc0hvdmVyZWQgPSBlbGVtZW50Lm1hdGNoZXMoXCI6aG92ZXJcIik7XG5cdGlmICghaXNGb2N1c2VkICYmICFpc0hvdmVyZWQgJiYgIXNlbGVjdG9yT3JFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChzZWxlY3Rvck9yRWxlbWVudCkge1xuXHRcdGlmICh0eXBlb2Ygc2VsZWN0b3JPckVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGlzRm9jdXNlZCA/IGFjdGl2ZSA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIjpob3ZlclwiKSB8fCBlbGVtZW50O1xuXHRcdFx0XHRjb25zdCBhbHRDbmQgPSAhIU1PQ0VsZW1lbnQodGFyZ2V0LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oc2VsZWN0b3JPckVsZW1lbnQpICE9IG51bGwgfHwgZWxlbWVudD8ubWF0Y2hlcz8uKHNlbGVjdG9yT3JFbGVtZW50KSB8fCBhbHRDbmQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzZWxlY3Rvck9yRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRpZiAoZGlyID09PSBcInBhcmVudFwiKSByZXR1cm4gaGFzUGFyZW50KGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50KSB8fCBmYWxzZTtcblx0XHRcdGVsc2UgcmV0dXJuIGhhc1BhcmVudChzZWxlY3Rvck9yRWxlbWVudCwgZWxlbWVudCkgfHwgZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1pvb20udHNcbnZhciBnZXRab29tID0gKCkgPT4ge1xuXHRpZiAoXCJjdXJyZW50Q1NTWm9vbVwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHRyZXR1cm4gcGFyc2VGbG9hdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2NhbGluZ1wiKSB8fCBcIjFcIikgfHwgMTtcbn07XG52YXIgem9vbVZhbHVlc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAem9vbVZhbHVlc1wiKTtcbnZhciB6b29tVmFsdWVzID0gZ2xvYmFsVGhpc1t6b29tVmFsdWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgem9vbU9mID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHpvb21WYWx1ZXMuZ2V0T3JJbnNlcnRDb21wdXRlZChlbGVtZW50LCAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gKGVsZW1lbnQ/Lm1hdGNoZXM/LihcIi51aS1vcmllbnRib3hcIikgPyBlbGVtZW50IDogbnVsbCkgfHwgZWxlbWVudD8uY2xvc2VzdD8uKFwiLnVpLW9yaWVudGJveFwiKSB8fCBkb2N1bWVudC5ib2R5O1xuXHRcdGlmIChjb250YWluZXI/Lnpvb20pIHJldHVybiBjb250YWluZXI/Lnpvb20gfHwgMTtcblx0XHRpZiAoZWxlbWVudD8uY3VycmVudENTU1pvb20pIHJldHVybiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHR9KTtcbn07XG52YXIgY2hhbmdlWm9vbSA9IChzY2FsZSA9IDEpID0+IHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zY2FsaW5nXCIsIHNjYWxlKTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic2NhbGluZ1wiLCB7XG5cdFx0ZGV0YWlsOiB7IHpvb206IHNjYWxlIH0sXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdH0pKTtcblx0cmV0dXJuIHNjYWxlO1xufTtcbnZhciBmaXhlZENsaWVudFpvb20gPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tICE9IG51bGwgPyAxIDogem9vbU9mKGVsZW1lbnQpKSB8fCAxO1xufTtcbnZhciB1bmZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gPT0gbnVsbCA/IDEgOiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgfHwgMTtcbn07XG52YXIgb3JpZW50T2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiW29yaWVudF0sIFtkYXRhLW1peGluPVxcXCJ1aS1vcmllbnRib3hcXFwiXVwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpIHx8IGVsZW1lbnQ7XG5cdGlmIChjb250YWluZXI/Lmhhc0F0dHJpYnV0ZT8uKFwib3JpZW50XCIpKSByZXR1cm4gcGFyc2VJbnQoY29udGFpbmVyPy5nZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiKSB8fCBcIjBcIikgfHwgMDtcblx0aWYgKGNvbnRhaW5lcj8ub3JpZW50ICE9IG51bGwgJiYgTnVtYmVyLmlzRmluaXRlKE51bWJlcihjb250YWluZXIub3JpZW50KSkpIHJldHVybiBOdW1iZXIoY29udGFpbmVyLm9yaWVudCkgfHwgMDtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBjb250YWluZXI/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCItLW9yaWVudFwiKSB8fCAodHlwZW9mIGdldENvbXB1dGVkU3R5bGUgPT09IFwiZnVuY3Rpb25cIiAmJiBjb250YWluZXIgPyBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZShcIi0tb3JpZW50XCIpIDogXCJcIikgfHwgXCJcIjtcblx0XHRjb25zdCBuID0gcGFyc2VJbnQoU3RyaW5nKHJhdykudHJpbSgpLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG47XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIDA7XG59O1xudmFyIGdldEJvdW5kaW5nT3JpZW50UmVjdCA9IChlbGVtZW50LCBvcmllbnQgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHpvb20gPSB1bmZpeGVkQ2xpZW50Wm9vbShlbGVtZW50KSB8fCAxO1xuXHRjb25zdCBib3ggPSBlbGVtZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRjb25zdCBuYnggPSB7XG5cdFx0bGVmdDogYm94Py5sZWZ0IC8gem9vbSxcblx0XHRyaWdodDogYm94Py5yaWdodCAvIHpvb20sXG5cdFx0dG9wOiBib3g/LnRvcCAvIHpvb20sXG5cdFx0Ym90dG9tOiBib3g/LmJvdHRvbSAvIHpvb20sXG5cdFx0d2lkdGg6IGJveD8ud2lkdGggLyB6b29tLFxuXHRcdGhlaWdodDogYm94Py5oZWlnaHQgLyB6b29tXG5cdH07XG5cdGNvbnN0IG9yX2kgPSBvcmllbnQgPz8gKG9yaWVudE9mKGVsZW1lbnQpIHx8IDApO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBzaXplID0gWygodnY/LndpZHRoID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50V2lkdGggPz8gd2luZG93LmlubmVyV2lkdGgpIHx8IDEpIC8gem9vbSwgKCh2dj8uaGVpZ2h0ID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50SGVpZ2h0ID8/IHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMSkgLyB6b29tXTtcblx0Y29uc3QgW2xlZnRfLCB0b3BfXSA9IGN2dF9jc190b19vcyhbbmJ4LmxlZnQsIG5ieC50b3BdLCBzaXplLCBvcl9pKTtcblx0Y29uc3QgW3JpZ2h0XywgYm90dG9tX10gPSBjdnRfY3NfdG9fb3MoW25ieC5yaWdodCwgbmJ4LmJvdHRvbV0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbbGVmdCwgcmlnaHRdID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMyA/IFtsZWZ0XywgcmlnaHRfXSA6IFtyaWdodF8sIGxlZnRfXTtcblx0Y29uc3QgW3RvcCwgYm90dG9tXSA9IG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyBbdG9wXywgYm90dG9tX10gOiBbYm90dG9tXywgdG9wX107XG5cdGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IG9yX2kgJSAyID8gW25ieC5oZWlnaHQsIG5ieC53aWR0aF0gOiBbbmJ4LndpZHRoLCBuYnguaGVpZ2h0XTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGgsXG5cdFx0aGVpZ2h0XG5cdH07XG59O1xudmFyIGJidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodCA6IGVsW2JvcmRlckJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgYmJoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodDtcbnZhciBjYncgPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgY2JoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGggOiBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvVmlld3BvcnQudHNcbnZhciBydW5XaGVuSWRsZSA9IChjYiwgdGltZW91dCA9IDEwMCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKHtcblx0XHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0XHR0aW1lUmVtYWluaW5nOiAoKSA9PiAwXG5cdH0pLCAwKTtcbn07XG52YXIgS0VZQk9BUkRfT1ZFUkxBWV9QWCA9IDgwO1xudmFyIGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gMDtcbnZhciBjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gZmFsc2U7XG52YXIgd2luZG93S2V5Ym9hcmRCb3VuZCA9IGZhbHNlO1xudmFyIHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkID0gZmFsc2U7XG52YXIgbmF0aXZlRGlzcGxheSA9IG51bGw7XG52YXIgbmF0aXZlRGlzcGxheUJvdW5kID0gZmFsc2U7XG52YXIgbmF0aXZlRGlzcGxheVJlZnJlc2hRdWV1ZWQgPSBmYWxzZTtcbnZhciBpc05hdGl2ZUNhcGFjaXRvckhvc3QgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC5jd3NwTmF0aXZlU2hlbGwgPT09IFwiY2FwYWNpdG9yXCIpIHJldHVybiB0cnVlO1xuXHRcdGNvbnN0IGNhcCA9IGdsb2JhbFRoaXMuQ2FwYWNpdG9yO1xuXHRcdHJldHVybiB0eXBlb2YgY2FwPy5pc05hdGl2ZVBsYXRmb3JtID09PSBcImZ1bmN0aW9uXCIgJiYgQm9vbGVhbihjYXAuaXNOYXRpdmVQbGF0Zm9ybSgpKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHJlYWRDd3NCcmlkZ2UgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMuQ2FwYWNpdG9yPy5QbHVnaW5zPy5Dd3NCcmlkZ2UgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgcGFyc2VOYXRpdmVEaXNwbGF5ID0gKGluZm8pID0+IHtcblx0aWYgKCFpbmZvKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgd2luZG93VyA9IE51bWJlcihpbmZvLndpbmRvd1dpZHRoQ3NzKSB8fCAwO1xuXHRjb25zdCB3aW5kb3dIID0gTnVtYmVyKGluZm8ud2luZG93SGVpZ2h0Q3NzKSB8fCAwO1xuXHRjb25zdCBkaXNwbGF5VyA9IE51bWJlcihpbmZvLmRpc3BsYXlXaWR0aENzcykgfHwgd2luZG93Vztcblx0Y29uc3QgZGlzcGxheUggPSBOdW1iZXIoaW5mby5kaXNwbGF5SGVpZ2h0Q3NzKSB8fCB3aW5kb3dIO1xuXHRjb25zdCB3ID0gd2luZG93VyB8fCBkaXNwbGF5Vztcblx0Y29uc3QgaCA9IHdpbmRvd0ggfHwgZGlzcGxheUg7XG5cdGlmICh3IDw9IDAgfHwgaCA8PSAwKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgZGVuc2l0eSA9IE51bWJlcihpbmZvLmRlbnNpdHkpIHx8IDA7XG5cdHJldHVybiB7XG5cdFx0d2luZG93V2lkdGhDc3M6IHcsXG5cdFx0d2luZG93SGVpZ2h0Q3NzOiBoLFxuXHRcdGRpc3BsYXlXaWR0aENzczogZGlzcGxheVcgfHwgdyxcblx0XHRkaXNwbGF5SGVpZ2h0Q3NzOiBkaXNwbGF5SCB8fCBoLFxuXHRcdGRlbnNpdHksXG5cdFx0ZGVuc2l0eURwaTogTnVtYmVyKGluZm8uZGVuc2l0eURwaSkgfHwgMCxcblx0XHR4ZHBpOiBOdW1iZXIoaW5mby54ZHBpKSB8fCAwLFxuXHRcdHlkcGk6IE51bWJlcihpbmZvLnlkcGkpIHx8IDAsXG5cdFx0cHBpOiBOdW1iZXIoaW5mby5wcGkpIHx8IDAsXG5cdFx0c2NhbGVkRGVuc2l0eTogTnVtYmVyKGluZm8uc2NhbGVkRGVuc2l0eSkgfHwgZGVuc2l0eSxcblx0XHRmb250U2NhbGU6IE51bWJlcihpbmZvLmZvbnRTY2FsZSkgfHwgKGRlbnNpdHkgPiAwID8gKE51bWJlcihpbmZvLnNjYWxlZERlbnNpdHkpIHx8IGRlbnNpdHkpIC8gZGVuc2l0eSA6IDEpXG5cdH07XG59O1xudmFyIGFwcGx5TmF0aXZlRGlzcGxheSA9IChpbmZvKSA9PiB7XG5cdGNvbnN0IG5leHQgPSBwYXJzZU5hdGl2ZURpc3BsYXkoaW5mbyk7XG5cdGlmICghbmV4dCkgcmV0dXJuO1xuXHRjb25zdCBwcmV2ID0gbmF0aXZlRGlzcGxheTtcblx0Y29uc3Qgc2FtZSA9IEJvb2xlYW4ocHJldiAmJiBwcmV2LndpbmRvd1dpZHRoQ3NzID09PSBuZXh0LndpbmRvd1dpZHRoQ3NzICYmIHByZXYud2luZG93SGVpZ2h0Q3NzID09PSBuZXh0LndpbmRvd0hlaWdodENzcyAmJiBwcmV2LmRpc3BsYXlXaWR0aENzcyA9PT0gbmV4dC5kaXNwbGF5V2lkdGhDc3MgJiYgcHJldi5kaXNwbGF5SGVpZ2h0Q3NzID09PSBuZXh0LmRpc3BsYXlIZWlnaHRDc3MgJiYgcHJldi5kZW5zaXR5ID09PSBuZXh0LmRlbnNpdHkgJiYgcHJldi5kZW5zaXR5RHBpID09PSBuZXh0LmRlbnNpdHlEcGkgJiYgcHJldi5wcGkgPT09IG5leHQucHBpICYmIHByZXYuZm9udFNjYWxlID09PSBuZXh0LmZvbnRTY2FsZSk7XG5cdG5hdGl2ZURpc3BsYXkgPSBuZXh0O1xuXHRpZiAoIXNhbWUpIHVwZGF0ZVZQKCk7XG59O1xudmFyIHJlZnJlc2hOYXRpdmVEaXNwbGF5ID0gKCkgPT4ge1xuXHRpZiAoIWlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpKSByZXR1cm47XG5cdGNvbnN0IEJyaWRnZSA9IHJlYWRDd3NCcmlkZ2UoKTtcblx0aWYgKCFCcmlkZ2UpIHJldHVybjtcblx0KHR5cGVvZiBCcmlkZ2UuZ2V0RGlzcGxheU1ldHJpY3MgPT09IFwiZnVuY3Rpb25cIiA/IEJyaWRnZS5nZXREaXNwbGF5TWV0cmljcygpIDogQnJpZGdlLmdldFNoZWxsSW5mbz8uKCkpPy50aGVuKChpbmZvKSA9PiBhcHBseU5hdGl2ZURpc3BsYXkoaW5mbykpLmNhdGNoKCgpID0+IHt9KTtcbn07XG52YXIgcXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCA9ICgpID0+IHtcblx0aWYgKCFpc05hdGl2ZUNhcGFjaXRvckhvc3QoKSB8fCBuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCkgcmV0dXJuO1xuXHRuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCA9IHRydWU7XG5cdHJ1bldoZW5JZGxlKCgpID0+IHtcblx0XHRuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCA9IGZhbHNlO1xuXHRcdGJpbmROYXRpdmVEaXNwbGF5KCk7XG5cdFx0cmVmcmVzaE5hdGl2ZURpc3BsYXkoKTtcblx0fSwgODApO1xufTtcbnZhciBiaW5kTmF0aXZlRGlzcGxheSA9ICgpID0+IHtcblx0aWYgKG5hdGl2ZURpc3BsYXlCb3VuZCB8fCB0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRpZiAoIWlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpKSByZXR1cm47XG5cdGlmICghcmVhZEN3c0JyaWRnZSgpKSByZXR1cm47XG5cdG5hdGl2ZURpc3BsYXlCb3VuZCA9IHRydWU7XG5cdHRyeSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gZ2xvYmFsVGhpcy53aW5kb3c/Ll9fQ1dTX1NIRUxMX0lORk9fXztcblx0XHRpZiAoY2FjaGVkKSBhcHBseU5hdGl2ZURpc3BsYXkoY2FjaGVkKTtcblx0fSBjYXRjaCB7fVxuXHRyZWZyZXNoTmF0aXZlRGlzcGxheSgpO1xufTtcbnZhciB2aXJ0dWFsS2V5Ym9hcmQgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMubmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgSU5URVJBQ1RJVkVfV0lER0VUID0gXCJpbnRlcmFjdGl2ZS13aWRnZXQ9b3ZlcmxheXMtY29udGVudFwiO1xudmFyIFZJRVdQT1JUX0ZJVCA9IFwidmlld3BvcnQtZml0PWNvdmVyXCI7XG52YXIgZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRpZiAoIWhlYWQpIHJldHVybjtcblx0bGV0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPVxcXCJ2aWV3cG9ydFxcXCJdXCIpO1xuXHRpZiAoIW1ldGEpIHtcblx0XHRtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XG5cdFx0bWV0YS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidmlld3BvcnRcIik7XG5cdFx0bWV0YS5jb250ZW50ID0gYHdpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsICR7VklFV1BPUlRfRklUfSwgJHtJTlRFUkFDVElWRV9XSURHRVR9YDtcblx0XHRoZWFkLmluc2VydEJlZm9yZShtZXRhLCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybjtcblx0fVxuXHRsZXQgY29udGVudCA9IFN0cmluZyhtZXRhLmNvbnRlbnQgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoIS9pbnRlcmFjdGl2ZS13aWRnZXRcXHMqPVxccypvdmVybGF5cy1jb250ZW50L2kudGVzdChjb250ZW50KSkge1xuXHRcdGlmICgvaW50ZXJhY3RpdmUtd2lkZ2V0XFxzKj0vaS50ZXN0KGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9pbnRlcmFjdGl2ZS13aWRnZXRcXHMqPVxccypbYS16LV0rL2ksIElOVEVSQUNUSVZFX1dJREdFVCk7XG5cdFx0ZWxzZSBjb250ZW50ID0gY29udGVudCA/IGAke2NvbnRlbnQucmVwbGFjZSgvLFxccyokLywgXCJcIil9LCAke0lOVEVSQUNUSVZFX1dJREdFVH1gIDogSU5URVJBQ1RJVkVfV0lER0VUO1xuXHR9XG5cdGlmICghL3ZpZXdwb3J0LWZpdFxccyo9XFxzKmNvdmVyL2kudGVzdChjb250ZW50KSkge1xuXHRcdGlmICgvdmlld3BvcnQtZml0XFxzKj0vaS50ZXN0KGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC92aWV3cG9ydC1maXRcXHMqPVxccypbYS16LV0rL2ksIFZJRVdQT1JUX0ZJVCk7XG5cdFx0ZWxzZSBjb250ZW50ID0gY29udGVudCA/IGAke2NvbnRlbnQucmVwbGFjZSgvLFxccyokLywgXCJcIil9LCAke1ZJRVdQT1JUX0ZJVH1gIDogVklFV1BPUlRfRklUO1xuXHR9XG5cdGlmIChjb250ZW50ICE9PSBTdHJpbmcobWV0YS5jb250ZW50IHx8IFwiXCIpLnRyaW0oKSkgbWV0YS5jb250ZW50ID0gY29udGVudDtcbn07XG52YXIgZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSA9ICgpID0+IHtcblx0ZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkoKTtcblx0Y29uc3QgdmsgPSB2aXJ0dWFsS2V5Ym9hcmQoKTtcblx0aWYgKCF2aykgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGlmICh2ay5vdmVybGF5c0NvbnRlbnQgIT09IHRydWUpIHZrLm92ZXJsYXlzQ29udGVudCA9IHRydWU7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgZGVlcEFjdGl2ZUVsZW1lbnQgPSAoKSA9PiB7XG5cdGxldCBlbCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgOiBudWxsO1xuXHR3aGlsZSAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBlbC5zaGFkb3dSb290Py5hY3RpdmVFbGVtZW50KSBlbCA9IGVsLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBpc0ltZVRhcmdldCA9IChlbCkgPT4ge1xuXHRpZiAoIWVsIHx8ICEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybiBmYWxzZTtcblx0aWYgKGVsLmxvY2FsTmFtZSA9PT0gXCJjdy1yYXctZWRpdG9yXCIpIHJldHVybiB0cnVlO1xuXHRpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHJldHVybiB0cnVlO1xuXHRjb25zdCB0YWcgPSBlbC50YWdOYW1lO1xuXHRpZiAodGFnID09PSBcIlRFWFRBUkVBXCIgfHwgdGFnID09PSBcIlNFTEVDVFwiKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHRhZyAhPT0gXCJJTlBVVFwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHR5cGUgPSBTdHJpbmcoZWwudHlwZSB8fCBcInRleHRcIikudG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuICFbXG5cdFx0XCJidXR0b25cIixcblx0XHRcImNoZWNrYm94XCIsXG5cdFx0XCJyYWRpb1wiLFxuXHRcdFwiZmlsZVwiLFxuXHRcdFwic3VibWl0XCIsXG5cdFx0XCJyZXNldFwiLFxuXHRcdFwiaW1hZ2VcIixcblx0XHRcInJhbmdlXCIsXG5cdFx0XCJjb2xvclwiLFxuXHRcdFwiaGlkZGVuXCJcblx0XS5pbmNsdWRlcyh0eXBlKTtcbn07XG52YXIgaXNDb2xsYXBzZWRDYXJldCA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBzZWwgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcblx0XHRyZXR1cm4gQm9vbGVhbihzZWwgJiYgc2VsLnJhbmdlQ291bnQgJiYgc2VsLmlzQ29sbGFwc2VkKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn07XG52YXIgbGF5b3V0TG9ja09yaWVudCA9IFwiXCI7XG52YXIgbGF5b3V0TG9ja1cgPSAwO1xudmFyIGxheW91dExvY2tIID0gMDtcbnZhciBsYXN0U3RhYmxlS2V5Ym9hcmQgPSAwO1xudmFyIGlzTGFuZHNjYXBlID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHR5cGUgPSB0eXBlb2Ygc2NyZWVuICE9PSBcInVuZGVmaW5lZFwiID8gU3RyaW5nKHNjcmVlbi5vcmllbnRhdGlvbj8udHlwZSB8fCBcIlwiKSA6IFwiXCI7XG5cdFx0aWYgKHR5cGUuc3RhcnRzV2l0aChcImxhbmRzY2FwZVwiKSkgcmV0dXJuIHRydWU7XG5cdFx0aWYgKHR5cGUuc3RhcnRzV2l0aChcInBvcnRyYWl0XCIpKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIEJvb2xlYW4odHlwZW9mIG1hdGNoTWVkaWEgIT09IFwidW5kZWZpbmVkXCIgJiYgbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciByZWFkUGh5c2ljYWxTY3JlZW4gPSAoKSA9PiB7XG5cdGxldCB3ID0gMDtcblx0bGV0IGggPSAwO1xuXHRpZiAobmF0aXZlRGlzcGxheSkge1xuXHRcdHcgPSBuYXRpdmVEaXNwbGF5LndpbmRvd1dpZHRoQ3NzIHx8IG5hdGl2ZURpc3BsYXkuZGlzcGxheVdpZHRoQ3NzO1xuXHRcdGggPSBuYXRpdmVEaXNwbGF5LndpbmRvd0hlaWdodENzcyB8fCBuYXRpdmVEaXNwbGF5LmRpc3BsYXlIZWlnaHRDc3M7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHNjcmVlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGNvbnN0IHN3ID0gTnVtYmVyKHNjcmVlbi53aWR0aCkgfHwgMDtcblx0XHRjb25zdCBzaCA9IE51bWJlcihzY3JlZW4uaGVpZ2h0KSB8fCAwO1xuXHRcdGNvbnN0IGF3ID0gTnVtYmVyKHNjcmVlbi5hdmFpbFdpZHRoKSB8fCAwO1xuXHRcdGNvbnN0IGFoID0gTnVtYmVyKHNjcmVlbi5hdmFpbEhlaWdodCkgfHwgMDtcblx0XHR3ID0gTWF0aC5tYXgodywgc3csIGF3KTtcblx0XHRoID0gTWF0aC5tYXgoaCwgc2gsIGFoKTtcblx0fVxuXHRpZiAoIXcgJiYgIWgpIHJldHVybiB7XG5cdFx0d2lkdGg6IDAsXG5cdFx0aGVpZ2h0OiAwXG5cdH07XG5cdGNvbnN0IGxhbmRzY2FwZSA9IGlzTGFuZHNjYXBlKCk7XG5cdGNvbnN0IGJveExhbmRzY2FwZSA9IHcgPiAwICYmIGggPiAwICYmIHcgPiBoO1xuXHRpZiAobGFuZHNjYXBlICYmIHcgPiAwICYmIGggPiAwICYmIHcgPCBoKSByZXR1cm4ge1xuXHRcdHdpZHRoOiBoLFxuXHRcdGhlaWdodDogd1xuXHR9O1xuXHRpZiAoIWxhbmRzY2FwZSAmJiBib3hMYW5kc2NhcGUpIHJldHVybiB7XG5cdFx0d2lkdGg6IGgsXG5cdFx0aGVpZ2h0OiB3XG5cdH07XG5cdHJldHVybiB7XG5cdFx0d2lkdGg6IHcgfHwgaCxcblx0XHRoZWlnaHQ6IGggfHwgd1xuXHR9O1xufTtcbnZhciBjbGFtcFRvUGh5c2ljYWwgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuXHRjb25zdCBwaHlzID0gcmVhZFBoeXNpY2FsU2NyZWVuKCk7XG5cdGNvbnN0IGlubmVyVyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAgOiAwO1xuXHRjb25zdCBpbm5lckggPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCA6IDA7XG5cdGNvbnN0IHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuXHRjb25zdCBjbGllbnRXID0gTnVtYmVyKHJvb3Q/LmNsaWVudFdpZHRoKSB8fCAwO1xuXHRjb25zdCBjbGllbnRIID0gTnVtYmVyKHJvb3Q/LmNsaWVudEhlaWdodCkgfHwgMDtcblx0Y29uc3QgY2FwVyA9IE1hdGgubWF4KHBoeXMud2lkdGgsIGlubmVyVywgY2xpZW50Vyk7XG5cdGNvbnN0IGNhcEggPSBNYXRoLm1heChwaHlzLmhlaWdodCwgaW5uZXJILCBjbGllbnRIKTtcblx0cmV0dXJuIHtcblx0XHR3aWR0aDogY2FwVyA+IDAgPyBNYXRoLm1pbih3aWR0aCwgY2FwVykgOiB3aWR0aCxcblx0XHRoZWlnaHQ6IGNhcEggPiAwID8gTWF0aC5taW4oaGVpZ2h0LCBjYXBIKSA6IGhlaWdodFxuXHR9O1xufTtcbnZhciBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCA9ICh3aWR0aCwgaGVpZ2h0LCBsZWZ0ID0gMCwgdG9wID0gMCkgPT4ge1xuXHRjb25zdCBzYWZlV2lkdGggPSBNYXRoLm1heCgwLCBOdW1iZXIod2lkdGgpIHx8IDApO1xuXHRjb25zdCBzYWZlSGVpZ2h0ID0gTWF0aC5tYXgoMCwgTnVtYmVyKGhlaWdodCkgfHwgMCk7XG5cdGNvbnN0IHNhZmVMZWZ0ID0gTnVtYmVyKGxlZnQpIHx8IDA7XG5cdGNvbnN0IHNhZmVUb3AgPSBOdW1iZXIodG9wKSB8fCAwO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IHNhZmVMZWZ0LFxuXHRcdHRvcDogc2FmZVRvcCxcblx0XHRyaWdodDogc2FmZUxlZnQgKyBzYWZlV2lkdGgsXG5cdFx0Ym90dG9tOiBzYWZlVG9wICsgc2FmZUhlaWdodCxcblx0XHR3aWR0aDogc2FmZVdpZHRoLFxuXHRcdGhlaWdodDogc2FmZUhlaWdodFxuXHR9O1xufTtcbnZhciByZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoMCwgMCk7XG5cdGNvbnN0IHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuXHRyZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoTnVtYmVyKHJvb3Q/LmNsaWVudFdpZHRoKSB8fCBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAsIE51bWJlcihyb290Py5jbGllbnRIZWlnaHQpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDApO1xufTtcbnZhciByZWFkTGF5b3V0Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge1xuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMCxcblx0XHRrZXlib2FyZDogMFxuXHR9O1xuXHRjb25zdCB2diA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblx0Y29uc3QgaW5uZXJXID0gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwO1xuXHRjb25zdCBpbm5lckggPSBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dlcgPSBOdW1iZXIodnY/LndpZHRoKSB8fCAwO1xuXHRjb25zdCB2dkggPSBOdW1iZXIodnY/LmhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZUb3AgPSBOdW1iZXIodnY/Lm9mZnNldFRvcCkgfHwgMDtcblx0Y29uc3QgdmtIID0gTnVtYmVyKHZpcnR1YWxLZXlib2FyZCgpPy5ib3VuZGluZ0JveD8uaGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dk92ZXJsYXAgPSBpbm5lckggPiAwICYmIHZ2SCA+IDAgPyBpbm5lckggLSB2dkggLSB2dlRvcCA6IDA7XG5cdGNvbnN0IGNhcEggPSBjYXBhY2l0b3JLZXlib2FyZEhlaWdodDtcblx0Y29uc3QgbmF0aXZlQ2FwID0gaXNOYXRpdmVDYXBhY2l0b3JIb3N0KCk7XG5cdGxldCBrZXlib2FyZCA9IGNhcEggPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IGNhcEggOiAhbmF0aXZlQ2FwICYmIHZrSCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYID8gdmtIIDogIW5hdGl2ZUNhcCAmJiB2dk92ZXJsYXAgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IHZ2T3ZlcmxhcCA6IDA7XG5cdGNvbnN0IGNhbmRpZGF0ZVcgPSBNYXRoLm1heChpbm5lclcsIHZ2Vyk7XG5cdGNvbnN0IGNhbmRpZGF0ZUggPSBNYXRoLm1heChpbm5lckgsIHZ2SCArIHZ2VG9wLCBrZXlib2FyZCA+IDAgPyB2dkggKyBrZXlib2FyZCA6IDApO1xuXHRjb25zdCBvcmllbnQgPSBpc0xhbmRzY2FwZSgpID8gXCJsXCIgOiBcInBcIjtcblx0aWYgKG9yaWVudCAhPT0gbGF5b3V0TG9ja09yaWVudCkge1xuXHRcdGxheW91dExvY2tPcmllbnQgPSBvcmllbnQ7XG5cdFx0bGF5b3V0TG9ja1cgPSAwO1xuXHRcdGxheW91dExvY2tIID0gMDtcblx0fVxuXHRjb25zdCB3aWR0aFN0YWJsZSA9IGxheW91dExvY2tXIDw9IDAgfHwgTWF0aC5hYnMobGF5b3V0TG9ja1cgLSBjYW5kaWRhdGVXKSA8IDMyO1xuXHRjb25zdCBlZGl0YWJsZUZvY3VzZWQgPSBpc0ltZVRhcmdldChkZWVwQWN0aXZlRWxlbWVudCgpKSB8fCBpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblx0bGV0IGNvYXJzZVBvaW50ZXIgPSBmYWxzZTtcblx0dHJ5IHtcblx0XHRjb2Fyc2VQb2ludGVyID0gdHlwZW9mIG1hdGNoTWVkaWEgPT09IFwiZnVuY3Rpb25cIiAmJiBtYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcztcblx0fSBjYXRjaCB7XG5cdFx0Y29hcnNlUG9pbnRlciA9IGZhbHNlO1xuXHR9XG5cdGNvbnN0IHN1ZGRlblNocmluayA9ICFuYXRpdmVDYXAgJiYgd2lkdGhTdGFibGUgJiYgKGVkaXRhYmxlRm9jdXNlZCB8fCBjb2Fyc2VQb2ludGVyKSAmJiBsYXlvdXRMb2NrSCA+IDAgJiYgbGF5b3V0TG9ja0ggLSBjYW5kaWRhdGVIID49IEtFWUJPQVJEX09WRVJMQVlfUFg7XG5cdGlmIChrZXlib2FyZCA8IEtFWUJPQVJEX09WRVJMQVlfUFggJiYgc3VkZGVuU2hyaW5rKSB7XG5cdFx0Y29uc3Qgc2hyaW5rID0gTWF0aC5tYXgoMCwgbGF5b3V0TG9ja0ggLSBjYW5kaWRhdGVILCBsYXlvdXRMb2NrSCAtICh2dkggKyB2dlRvcCkpO1xuXHRcdGlmIChzaHJpbmsgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCkga2V5Ym9hcmQgPSBzaHJpbms7XG5cdH1cblx0Y29uc3QgZXhwYW5kZWRTZWxlY3Rpb24gPSAhaXNDb2xsYXBzZWRDYXJldCgpO1xuXHRpZiAoZXhwYW5kZWRTZWxlY3Rpb24gJiYgbGFzdFN0YWJsZUtleWJvYXJkID49IEtFWUJPQVJEX09WRVJMQVlfUFgpIGtleWJvYXJkID0gbGFzdFN0YWJsZUtleWJvYXJkO1xuXHRlbHNlIGlmIChrZXlib2FyZCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYKSBsYXN0U3RhYmxlS2V5Ym9hcmQgPSBrZXlib2FyZDtcblx0ZWxzZSBpZiAoIWlzSW1lVGFyZ2V0KGRlZXBBY3RpdmVFbGVtZW50KCkpICYmICFpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgbGFzdFN0YWJsZUtleWJvYXJkID0gMDtcblx0aWYgKCEoa2V5Ym9hcmQgPiAwIHx8IGlzSW1lVGFyZ2V0KGRlZXBBY3RpdmVFbGVtZW50KCkpIHx8IGlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHx8IHN1ZGRlblNocmluayB8fCBleHBhbmRlZFNlbGVjdGlvbikpIHtcblx0XHRsYXlvdXRMb2NrVyA9IGNhbmRpZGF0ZVc7XG5cdFx0bGF5b3V0TG9ja0ggPSBjYW5kaWRhdGVIO1xuXHR9IGVsc2Uge1xuXHRcdGxheW91dExvY2tXID0gTWF0aC5tYXgoY2FuZGlkYXRlVywgbGF5b3V0TG9ja1cpO1xuXHRcdGxheW91dExvY2tIID0gTWF0aC5tYXgoY2FuZGlkYXRlSCwgbGF5b3V0TG9ja0gpO1xuXHR9XG5cdGNvbnN0IGxvY2tlZCA9IGNsYW1wVG9QaHlzaWNhbChsYXlvdXRMb2NrVyB8fCBjYW5kaWRhdGVXLCBsYXlvdXRMb2NrSCB8fCBjYW5kaWRhdGVIKTtcblx0bGF5b3V0TG9ja1cgPSBsb2NrZWQud2lkdGg7XG5cdGxheW91dExvY2tIID0gbG9ja2VkLmhlaWdodDtcblx0Y29uc3Qga2IgPSBsb2NrZWQuaGVpZ2h0ID4gMCA/IE1hdGgubWluKGtleWJvYXJkLCBsb2NrZWQuaGVpZ2h0KSA6IGtleWJvYXJkO1xuXHRyZXR1cm4ge1xuXHRcdHdpZHRoOiBsb2NrZWQud2lkdGgsXG5cdFx0aGVpZ2h0OiBsb2NrZWQuaGVpZ2h0LFxuXHRcdGtleWJvYXJkOiBrYlxuXHR9O1xufTtcbnZhciBpc0ltZUNocm9tZUxvY2sgPSAoZWwpID0+IHtcblx0Y29uc3QgdGFnID0gZWwudGFnTmFtZTtcblx0aWYgKHRhZyA9PT0gXCJIVE1MXCIgfHwgdGFnID09PSBcIkJPRFlcIikgcmV0dXJuIHRydWU7XG5cdGlmICh0YWcgPT09IFwiQ1ctUkFXLUVESVRPUlwiIHx8IHRhZyA9PT0gXCJDVy1WSUVXLVZJRVdFUlwiIHx8IHRhZyA9PT0gXCJDVy1NQVJLRE9XTi1WSUVXLUZSQU1FXCIgfHwgdGFnID09PSBcIkNXLU1BUktET1dOLVRPT0xCQVItRlJBTUVcIikgcmV0dXJuIHRydWU7XG5cdGNvbnN0IGNscyA9IGVsLmNsYXNzTGlzdDtcblx0cmV0dXJuIGNscy5jb250YWlucyhcImFwcC1zaGVsbFwiKSB8fCBjbHMuY29udGFpbnMoXCJhcHAtc2hlbGxfX3ZpZXdwb3J0XCIpIHx8IGNscy5jb250YWlucyhcImFwcC1zaGVsbF9fbmF2XCIpIHx8IGNscy5jb250YWlucyhcImVudi1zaGVsbC1yb290XCIpIHx8IGNscy5jb250YWlucyhcImVudi1zaGVsbC13b3Jrc3BhY2VcIikgfHwgY2xzLmNvbnRhaW5zKFwiZW52LXNoZWxsLWNocm9tZVwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtdWktd2luZG93XCIpIHx8IGNscy5jb250YWlucyhcImVudi11aS13aW5kb3dfX2JvZHlcIikgfHwgY2xzLmNvbnRhaW5zKFwid2YtZnJhbWVcIikgfHwgY2xzLmNvbnRhaW5zKFwidWktd2luZG93XCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyXCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyX190b29sYmFyXCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyX19jaHJvbWVcIikgfHwgY2xzLmNvbnRhaW5zKFwidmlldy12aWV3ZXJfX2NvbnRlbnRcIikgfHwgY2xzLmNvbnRhaW5zKFwiY3ctdmlldy12aWV3ZXItc2hlbGxcIikgfHwgY2xzLmNvbnRhaW5zKFwiY3ctbWFya2Rvd24tdmlldy1mcmFtZVwiKSB8fCBjbHMuY29udGFpbnMoXCJjdy12aWV3LXZpZXdlcl9fc2xvdC1yYXdcIik7XG59O1xudmFyIHBhcmVudE9mID0gKGVsKSA9PiB7XG5cdGlmICghZWwpIHJldHVybiBudWxsO1xuXHRpZiAoZWwucGFyZW50RWxlbWVudCkgcmV0dXJuIGVsLnBhcmVudEVsZW1lbnQ7XG5cdGNvbnN0IHJvb3QgPSBlbC5nZXRSb290Tm9kZSgpO1xuXHRyZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290Lmhvc3QgOiBudWxsO1xufTtcbnZhciBpc1Njcm9sbHBvcnQgPSAoZWwpID0+IHtcblx0aWYgKGlzSW1lQ2hyb21lTG9jayhlbCkpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblx0Y29uc3Qgb3kgPSBzdHlsZS5vdmVyZmxvd1kgfHwgc3R5bGUub3ZlcmZsb3dCbG9jaztcblx0aWYgKG95ICE9PSBcImF1dG9cIiAmJiBveSAhPT0gXCJzY3JvbGxcIikgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gZWwuc2Nyb2xsSGVpZ2h0ID4gZWwuY2xpZW50SGVpZ2h0ICsgMTtcbn07XG52YXIgZmluZFJhd0VkaXRvclNjcm9sbHBvcnQgPSAoc3RhcnQpID0+IHtcblx0bGV0IG5vZGUgPSBzdGFydDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY3ctcmF3LWVkaXRvcl9fc2Nyb2xsXCIpKSByZXR1cm4gbm9kZTtcblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIG5vZGUubG9jYWxOYW1lID09PSBcImN3LXJhdy1lZGl0b3JcIikge1xuXHRcdFx0Y29uc3QgaW5uZXIgPSBub2RlLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoXCIuY3ctcmF3LWVkaXRvcl9fc2Nyb2xsXCIpO1xuXHRcdFx0aWYgKGlubmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHJldHVybiBpbm5lcjtcblx0XHR9XG5cdFx0Y29uc3Qgcm9vdCA9IG5vZGUuZ2V0Um9vdE5vZGUoKTtcblx0XHRpZiAocm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcblx0XHRcdGNvbnN0IGlubmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLmN3LXJhdy1lZGl0b3JfX3Njcm9sbFwiKTtcblx0XHRcdGlmIChpbm5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSByZXR1cm4gaW5uZXI7XG5cdFx0fVxuXHRcdG5vZGUgPSBwYXJlbnRPZihub2RlKTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgZmluZEltZVNjcm9sbHBvcnQgPSAoc3RhcnQpID0+IHtcblx0Y29uc3QgcmF3ID0gZmluZFJhd0VkaXRvclNjcm9sbHBvcnQoc3RhcnQpO1xuXHRpZiAocmF3KSByZXR1cm4gcmF3O1xuXHRsZXQgbm9kZSA9IHN0YXJ0O1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNTY3JvbGxwb3J0KG5vZGUpKSByZXR1cm4gbm9kZTtcblx0XHRub2RlID0gcGFyZW50T2Yobm9kZSk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xudmFyIHJlYWRDYXJldFJlY3QgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgc2VsID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0aWYgKHNlbD8ucmFuZ2VDb3VudCkge1xuXHRcdFx0Y29uc3QgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKTtcblx0XHRcdGNvbnN0IHJlY3RzID0gcmFuZ2UuZ2V0Q2xpZW50UmVjdHMoKTtcblx0XHRcdGNvbnN0IHJlY3QgPSByZWN0cy5sZW5ndGggPyByZWN0c1tyZWN0cy5sZW5ndGggLSAxXSA6IHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0aWYgKHJlY3QgJiYgKHJlY3QuaGVpZ2h0IHx8IHJlY3Qud2lkdGggfHwgcmVjdC50b3AgfHwgcmVjdC5ib3R0b20pKSByZXR1cm4gcmVjdDtcblx0XHR9XG5cdH0gY2F0Y2gge31cblx0Y29uc3QgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRyZXR1cm4gZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcbn07XG52YXIgcGluSW1lQ2FyZXRJblNjcm9sbHBvcnQgPSAoKSA9PiB7XG5cdGNvbnN0IGFjdGl2ZSA9IGRlZXBBY3RpdmVFbGVtZW50KCk7XG5cdGlmICghaXNJbWVUYXJnZXQoYWN0aXZlKSAmJiAhaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFpc0NvbGxhcHNlZENhcmV0KCkpIHJldHVybjtcblx0Y29uc3Qga2V5Ym9hcmQgPSByZWFkTGF5b3V0Vmlld3BvcnQoKS5rZXlib2FyZDtcblx0Y29uc3QgdnYgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQ7XG5cdGNvbnN0IHZpc2libGVCb3R0b20gPSAoTnVtYmVyKHZ2Py5oZWlnaHQpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDApIC0gTWF0aC5tYXgoOCwga2V5Ym9hcmQgPyAxMiA6IDApO1xuXHRpZiAodmlzaWJsZUJvdHRvbSA8PSAwKSByZXR1cm47XG5cdGNvbnN0IHJlY3QgPSByZWFkQ2FyZXRSZWN0KCk7XG5cdGlmICghcmVjdCkgcmV0dXJuO1xuXHRjb25zdCBvdmVyZmxvdyA9IHJlY3QuYm90dG9tIC0gdmlzaWJsZUJvdHRvbTtcblx0aWYgKG92ZXJmbG93IDw9IDEpIHJldHVybjtcblx0Y29uc3QgcG9ydCA9IGZpbmRJbWVTY3JvbGxwb3J0KGFjdGl2ZSkgfHwgZmluZEltZVNjcm9sbHBvcnQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cdGlmIChwb3J0KSBwb3J0LnNjcm9sbFRvcCArPSBvdmVyZmxvdztcbn07XG52YXIgcGluVmlzdWFsVmlld3BvcnQgPSAoKSA9PiB7XG5cdGNvbnN0IHZ2ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0O1xuXHRpZiAoIXZ2KSByZXR1cm47XG5cdGNvbnN0IHRvcCA9IE51bWJlcih2di5vZmZzZXRUb3ApIHx8IDA7XG5cdGNvbnN0IGxlZnQgPSBOdW1iZXIodnYub2Zmc2V0TGVmdCkgfHwgMDtcblx0aWYgKCF0b3AgJiYgIWxlZnQpIHJldHVybjtcblx0dHJ5IHtcblx0XHR2di5zY3JvbGxUbyh7XG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0dG9wOiAwLFxuXHRcdFx0YmVoYXZpb3I6IFwiaW5zdGFudFwiXG5cdFx0fSk7XG5cdH0gY2F0Y2gge1xuXHRcdHRyeSB7XG5cdFx0XHR2di5zY3JvbGxUbz8uKDAsIDApO1xuXHRcdH0gY2F0Y2gge31cblx0fVxufTtcbnZhciBvdmVybGF5UGlubmluZyA9IGZhbHNlO1xudmFyIHJlc2V0Q2hyb21lU2Nyb2xsID0gKHN0YXJ0KSA9PiB7XG5cdGNvbnN0IHBvcnQgPSBmaW5kSW1lU2Nyb2xscG9ydChzdGFydCk7XG5cdGxldCBub2RlID0gc3RhcnQ7XG5cdHdoaWxlIChub2RlKSB7XG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBub2RlICE9PSBwb3J0ICYmIGlzSW1lQ2hyb21lTG9jayhub2RlKSkge1xuXHRcdFx0aWYgKG5vZGUuc2Nyb2xsVG9wIHx8IG5vZGUuc2Nyb2xsTGVmdCkge1xuXHRcdFx0XHRub2RlLnNjcm9sbFRvcCA9IDA7XG5cdFx0XHRcdG5vZGUuc2Nyb2xsTGVmdCA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG5vZGUgPSBwYXJlbnRPZihub2RlKTtcblx0fVxufTtcbnZhciBwaW5PdmVybGF5U2Nyb2xsID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvdmVybGF5UGlubmluZykgcmV0dXJuO1xuXHRjb25zdCBhY3RpdmUgPSBkZWVwQWN0aXZlRWxlbWVudCgpO1xuXHRjb25zdCBjYXAgPSBpc05hdGl2ZUNhcGFjaXRvckhvc3QoKTtcblx0Y29uc3QgcmF3ID0gQm9vbGVhbihmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydChhY3RpdmUpIHx8IGZpbmRSYXdFZGl0b3JTY3JvbGxwb3J0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKTtcblx0Y29uc3QgaW1lID0gcmVhZExheW91dFZpZXdwb3J0KCkua2V5Ym9hcmQgPiAwIHx8IGlzSW1lVGFyZ2V0KGFjdGl2ZSkgfHwgaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cdGlmICghaW1lICYmICFjYXApIHJldHVybjtcblx0b3ZlcmxheVBpbm5pbmcgPSB0cnVlO1xuXHR0cnkge1xuXHRcdHBpblZpc3VhbFZpZXdwb3J0KCk7XG5cdFx0aWYgKHdpbmRvdy5zY3JvbGxYIHx8IHdpbmRvdy5zY3JvbGxZKSB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHRjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHRpZiAocm9vdC5zY3JvbGxUb3AgfHwgcm9vdC5zY3JvbGxMZWZ0KSByb290LnNjcm9sbFRvKDAsIDApO1xuXHRcdGlmIChib2R5ICYmIChib2R5LnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbExlZnQpKSBib2R5LnNjcm9sbFRvKDAsIDApO1xuXHRcdGlmIChyYXcgfHwgaW1lIHx8ICFpc0NvbGxhcHNlZENhcmV0KCkpIHtcblx0XHRcdHJlc2V0Q2hyb21lU2Nyb2xsKGFjdGl2ZSk7XG5cdFx0XHRyZXNldENocm9tZVNjcm9sbChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblx0XHR9XG5cdFx0aWYgKGNhcCkgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImN3LXJhdy1lZGl0b3JcIikuZm9yRWFjaCgoaG9zdCkgPT4ge1xuXHRcdFx0aWYgKGhvc3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhaG9zdC5oaWRkZW4pIHJlc2V0Q2hyb21lU2Nyb2xsKGhvc3QpO1xuXHRcdH0pO1xuXHR9IGZpbmFsbHkge1xuXHRcdG92ZXJsYXlQaW5uaW5nID0gZmFsc2U7XG5cdH1cbn07XG52YXIgc2Nyb2xsSW50b1ZpZXdQYXRjaGVkID0gZmFsc2U7XG52YXIgcGF0Y2hJbWVTY3JvbGxJbnRvVmlldyA9ICgpID0+IHtcblx0aWYgKHNjcm9sbEludG9WaWV3UGF0Y2hlZCB8fCB0eXBlb2YgRWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRzY3JvbGxJbnRvVmlld1BhdGNoZWQgPSB0cnVlO1xuXHRjb25zdCBvcmlnID0gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXc7XG5cdEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24oYXJnKSB7XG5cdFx0Y29uc3QgYWN0aXZlID0gZGVlcEFjdGl2ZUVsZW1lbnQoKTtcblx0XHRpZiAoQm9vbGVhbihmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydCh0aGlzKSB8fCBmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydChhY3RpdmUpKSB8fCBpc0ltZVRhcmdldChhY3RpdmUpICYmICFpc0NvbGxhcHNlZENhcmV0KCkpIHtcblx0XHRcdGlmIChpc05hdGl2ZUNhcGFjaXRvckhvc3QoKSB8fCAhaXNDb2xsYXBzZWRDYXJldCgpKSB7XG5cdFx0XHRcdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNJbWVDaHJvbWVMb2NrKHRoaXMpKSByZXR1cm47XG5cdFx0cmV0dXJuIG9yaWcuY2FsbCh0aGlzLCBhcmcpO1xuXHR9O1xufTtcbnZhciBwaW5JbWVDaHJvbWUgPSAob3B0cykgPT4ge1xuXHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdGlmICghb3B0cz8uY2FyZXQpIHJldHVybjtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdFx0cGluSW1lQ2FyZXRJblNjcm9sbHBvcnQoKTtcblx0fSk7XG59O1xudmFyIHJlYWRWaXJ0dWFsS2V5Ym9hcmRIZWlnaHRQeCA9ICgpID0+IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyAwIDogcmVhZExheW91dFZpZXdwb3J0KCkua2V5Ym9hcmQ7XG52YXIgZ2V0QXZhaWxTaXplID0gKCkgPT4ge1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdGNvbnN0IHZ2ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGw7XG5cdGNvbnN0IGxheW91dCA9IHJlYWRMYXlvdXRWaWV3cG9ydCgpO1xuXHRjb25zdCB2dkJsb2NrID0ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt2dj8ud2lkdGggPz8gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDApfXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3Z2Py5oZWlnaHQgPz8gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiAwKX1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IGAke3Z2Py5vZmZzZXRMZWZ0ID8/IDB9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtdG9wXCI6IGAke3Z2Py5vZmZzZXRUb3AgPz8gMH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh2dj8uc2NhbGUgPz8gMSksXG5cdFx0XCItLWx2LXdpZHRoXCI6IGAke2xheW91dC53aWR0aH1weGAsXG5cdFx0XCItLWx2LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcIi0ta2V5Ym9hcmQtb3ZlcmxheS1oZWlnaHRcIjogYCR7bGF5b3V0LmtleWJvYXJkfXB4YCxcblx0XHRcIi0tdmlydHVhbC1rZXlib2FyZC1oZWlnaHRcIjogYCR7bGF5b3V0LmtleWJvYXJkfXB4YFxuXHR9O1xuXHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS12ay1vcGVuXCIpO1xuXHRpZiAodHlwZW9mIHNjcmVlbiAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0Y29uc3QgcGh5cyA9IHJlYWRQaHlzaWNhbFNjcmVlbigpO1xuXHRcdGNvbnN0IGlubmVyVyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAgOiAwO1xuXHRcdGNvbnN0IGlubmVySCA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwIDogMDtcblx0XHRjb25zdCBwYW5lVyA9IE1hdGgubWF4KGlubmVyVywgbGF5b3V0LndpZHRoKTtcblx0XHRjb25zdCBwYW5lSCA9IE1hdGgubWF4KGlubmVySCwgbGF5b3V0LmhlaWdodCk7XG5cdFx0Y29uc3Qgd2luZG93ZWRXID0gIW5hdGl2ZURpc3BsYXkgJiYgcGFuZVcgPiAwICYmIHBoeXMud2lkdGggPiBwYW5lVyArIDY0O1xuXHRcdGNvbnN0IHdpbmRvd2VkSCA9ICFuYXRpdmVEaXNwbGF5ICYmIHBhbmVIID4gMCAmJiBwaHlzLmhlaWdodCA+IHBhbmVIICsgNjQ7XG5cdFx0Y29uc3QgY2FwVyA9IHdpbmRvd2VkVyA/IHBhbmVXIDogTWF0aC5tYXgocGh5cy53aWR0aCwgcGFuZVcpO1xuXHRcdGNvbnN0IGNhcEggPSB3aW5kb3dlZEggPyBwYW5lSCA6IE1hdGgubWF4KHBoeXMuaGVpZ2h0LCBwYW5lSCk7XG5cdFx0Y29uc3Qgc2NyZWVuVyA9IGNhcFcgPiAwID8gYCR7Y2FwV31weGAgOiBcIjEwMGx2aVwiO1xuXHRcdGNvbnN0IHNjcmVlbkggPSBjYXBIID4gMCA/IGAke2NhcEh9cHhgIDogXCIxMDBsdmJcIjtcblx0XHRjb25zdCBkZW5zaXR5ID0gbmF0aXZlRGlzcGxheT8uZGVuc2l0eSB8fCBOdW1iZXIoZGV2aWNlUGl4ZWxSYXRpbykgfHwgMTtcblx0XHRjb25zdCBuYXRpdmVTY2FsZSA9IG5hdGl2ZURpc3BsYXkgPyB7XG5cdFx0XHRcIi0tbmF0aXZlLWRlbnNpdHlcIjogU3RyaW5nKG5hdGl2ZURpc3BsYXkuZGVuc2l0eSB8fCBkZW5zaXR5KSxcblx0XHRcdFwiLS1uYXRpdmUtZHBpXCI6IFN0cmluZyhuYXRpdmVEaXNwbGF5LmRlbnNpdHlEcGkgfHwgMCksXG5cdFx0XHRcIi0tbmF0aXZlLXBwaVwiOiBTdHJpbmcobmF0aXZlRGlzcGxheS5wcGkgfHwgMCksXG5cdFx0XHRcIi0tbmF0aXZlLXhkcGlcIjogU3RyaW5nKG5hdGl2ZURpc3BsYXkueGRwaSB8fCAwKSxcblx0XHRcdFwiLS1uYXRpdmUteWRwaVwiOiBTdHJpbmcobmF0aXZlRGlzcGxheS55ZHBpIHx8IDApLFxuXHRcdFx0XCItLW5hdGl2ZS1mb250LXNjYWxlXCI6IFN0cmluZyhuYXRpdmVEaXNwbGF5LmZvbnRTY2FsZSB8fCAxKVxuXHRcdH0gOiB7fTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCItLXNjcmVlbi13aWR0aFwiOiBzY3JlZW5XLFxuXHRcdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogc2NyZWVuSCxcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBzY3JlZW5XLFxuXHRcdFx0XCItLWF2YWlsLWhlaWdodFwiOiBzY3JlZW5ILFxuXHRcdFx0XCItLXZpZXctaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFx0XCItLXBpeGVsLXJhdGlvXCI6IFN0cmluZyhkZW5zaXR5KSxcblx0XHRcdC4uLm5hdGl2ZVNjYWxlLFxuXHRcdFx0Li4udnZCbG9ja1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IFwiMTAwbHZpXCIsXG5cdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogXCIxMDBsdmJcIixcblx0XHRcIi0tYXZhaWwtd2lkdGhcIjogXCIxMDBsdmlcIixcblx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IFwiMTAwbHZiXCIsXG5cdFx0XCItLXZpZXctaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi52dkJsb2NrXG5cdH07XG59O1xudmFyIGF2YWlsU2l6ZSA9IGdldEF2YWlsU2l6ZSgpO1xudmFyIGNsYXNzZXMgPSBbW1wiOnJvb3QsIDpob3N0LCA6c2NvcGVcIiwgYXZhaWxTaXplXV07XG52YXIgb3JpZW50YXRpb25OdW1iZXJNYXAgPSB7XG5cdFwicG9ydHJhaXQtcHJpbWFyeVwiOiAwLFxuXHRcImxhbmRzY2FwZS1wcmltYXJ5XCI6IDEsXG5cdFwicG9ydHJhaXQtc2Vjb25kYXJ5XCI6IDIsXG5cdFwibGFuZHNjYXBlLXNlY29uZGFyeVwiOiAzXG59O1xudmFyIHVwZGF0ZVZQID0gKGV2KSA9PiB7XG5cdGNvbnN0IHJ1bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdE9iamVjdC5hc3NpZ24oYXZhaWxTaXplLCBnZXRBdmFpbFNpemUoKSk7XG5cdE9iamVjdC5lbnRyaWVzKGF2YWlsU2l6ZSkuZm9yRWFjaCgoW3Byb3BOYW1lLCBwcm9wVmFsdWVdKSA9PiB7XG5cdFx0Y29uc3QgZXhpc3RzID0gcnVsZT8uc3R5bGU/LmdldFByb3BlcnR5VmFsdWUocHJvcE5hbWUpO1xuXHRcdGlmICghZXhpc3RzIHx8IGV4aXN0cyAhPSBwcm9wVmFsdWUpIHJ1bGU/LnN0eWxlPy5zZXRQcm9wZXJ0eT8uKHByb3BOYW1lLCBwcm9wVmFsdWUgfHwgXCJcIiwgXCJcIik7XG5cdH0pO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLW9yaWVudGF0aW9uLXNlY29uZGFyeVwiLCBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlPy5lbmRzV2l0aD8uKFwic2Vjb25kYXJ5XCIpID8gXCIxXCIgOiBcIjBcIik7XG59O1xudmFyIGdldENvcnJlY3RPcmllbnRhdGlvbiA9ICgpID0+IHtcblx0bGV0IG9yaWVudGF0aW9uVHlwZSA9IHNjcmVlbj8ub3JpZW50YXRpb24/LnR5cGUgfHwgXCJwb3J0cmFpdC1wcmltYXJ5XCI7XG5cdGlmICghZ2xvYmFsVGhpcy5tYXRjaE1lZGlhKFwiKChkaXNwbGF5LW1vZGU6IGZ1bGxzY3JlZW4pIG9yIChkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpIG9yIChkaXNwbGF5LW1vZGU6IHdpbmRvdy1jb250cm9scy1vdmVybGF5KSlcIikubWF0Y2hlcykge1xuXHRcdGlmIChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykgb3JpZW50YXRpb25UeXBlID0gb3JpZW50YXRpb25UeXBlLnJlcGxhY2UoXCJsYW5kc2NhcGVcIiwgXCJwb3J0cmFpdFwiKTtcblx0XHRlbHNlIGlmIChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwicG9ydHJhaXRcIiwgXCJsYW5kc2NhcGVcIik7XG5cdH1cblx0cmV0dXJuIG9yaWVudGF0aW9uVHlwZTtcbn07XG52YXIgcGFzc2l2ZU9wdHMkMSA9IHsgcGFzc2l2ZTogdHJ1ZSB9O1xudmFyIGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQgPSAocmF3KSA9PiB7XG5cdGNvbnN0IG5leHQgPSBOdW1iZXIocmF3KSB8fCAwO1xuXHRpZiAobmV4dCA+IDApIGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gbmV4dDtcblx0dXBkYXRlVlAoKTtcblx0cGluSW1lQ2hyb21lKHsgY2FyZXQ6IHRydWUgfSk7XG59O1xudmFyIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQgPSAoKSA9PiB7XG5cdGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gMDtcblx0dXBkYXRlVlAoKTtcbn07XG52YXIgYmluZFdpbmRvd0tleWJvYXJkRXZlbnRzID0gKCkgPT4ge1xuXHRpZiAod2luZG93S2V5Ym9hcmRCb3VuZCB8fCB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdHdpbmRvd0tleWJvYXJkQm91bmQgPSB0cnVlO1xuXHRjb25zdCBvblNob3cgPSAoZXYpID0+IHtcblx0XHRjb25zdCBlID0gZXY7XG5cdFx0Y29uc3QgZGV0YWlsID0gZS5kZXRhaWw7XG5cdFx0Y29uc3QgZnJvbURldGFpbCA9IHR5cGVvZiBkZXRhaWwgPT09IFwic3RyaW5nXCIgPyAoKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoZGV0YWlsKT8ua2V5Ym9hcmRIZWlnaHQ7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cdFx0fSkoKSA6IGRldGFpbD8ua2V5Ym9hcmRIZWlnaHQ7XG5cdFx0YXBwbHlDYXBhY2l0b3JLZXlib2FyZEhlaWdodChlLmtleWJvYXJkSGVpZ2h0ID8/IGZyb21EZXRhaWwpO1xuXHR9O1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWJvYXJkV2lsbFNob3dcIiwgb25TaG93KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZERpZFNob3dcIiwgb25TaG93KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZFdpbGxIaWRlXCIsIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQpO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWJvYXJkRGlkSGlkZVwiLCBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KTtcbn07XG52YXIgYmluZENhcGFjaXRvcktleWJvYXJkID0gKCkgPT4ge1xuXHRiaW5kV2luZG93S2V5Ym9hcmRFdmVudHMoKTtcblx0aWYgKGNhcGFjaXRvcktleWJvYXJkQm91bmQgfHwgdHlwZW9mIGdsb2JhbFRoaXMgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgY2FwID0gZ2xvYmFsVGhpcy5DYXBhY2l0b3I7XG5cdGNvbnN0IEtleWJvYXJkID0gY2FwPy5QbHVnaW5zPy5LZXlib2FyZDtcblx0aWYgKCFLZXlib2FyZD8uYWRkTGlzdGVuZXIpIHJldHVybjtcblx0aWYgKHR5cGVvZiBjYXAuaXNOYXRpdmVQbGF0Zm9ybSA9PT0gXCJmdW5jdGlvblwiICYmICFjYXAuaXNOYXRpdmVQbGF0Zm9ybSgpKSByZXR1cm47XG5cdGNhcGFjaXRvcktleWJvYXJkQm91bmQgPSB0cnVlO1xuXHR0cnkge1xuXHRcdEtleWJvYXJkLnNldFNjcm9sbD8uKHsgaXNEaXNhYmxlZDogdHJ1ZSB9KTtcblx0fSBjYXRjaCB7fVxuXHR0cnkge1xuXHRcdEtleWJvYXJkLnNldFJlc2l6ZU1vZGU/Lih7IG1vZGU6IFwibm9uZVwiIH0pO1xuXHR9IGNhdGNoIHt9XG5cdEtleWJvYXJkLmFkZExpc3RlbmVyKFwia2V5Ym9hcmRXaWxsU2hvd1wiLCAoaW5mbykgPT4gYXBwbHlDYXBhY2l0b3JLZXlib2FyZEhlaWdodChpbmZvPy5rZXlib2FyZEhlaWdodCkpO1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkRGlkU2hvd1wiLCAoaW5mbykgPT4gYXBwbHlDYXBhY2l0b3JLZXlib2FyZEhlaWdodChpbmZvPy5rZXlib2FyZEhlaWdodCkpO1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkV2lsbEhpZGVcIiwgY2xlYXJDYXBhY2l0b3JLZXlib2FyZEhlaWdodCk7XG5cdEtleWJvYXJkLmFkZExpc3RlbmVyKFwia2V5Ym9hcmREaWRIaWRlXCIsIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQpO1xufTtcbnZhciBlbnN1cmVWaWV3cG9ydFRyYWNraW5nID0gKCkgPT4ge1xuXHRpZiAodmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHR2aWV3cG9ydFRyYWNraW5nU3RhcnRlZCA9IHRydWU7XG5cdGJpbmRDYXBhY2l0b3JLZXlib2FyZCgpO1xuXHRiaW5kTmF0aXZlRGlzcGxheSgpO1xuXHR3aGVuQW55U2NyZWVuQ2hhbmdlcygoKSA9PiB7fSk7XG59O1xudmFyIHdoZW5BbnlTY3JlZW5DaGFuZ2VzID0gKGNiKSA9PiB7XG5cdGxldCB0aWNraW5nID0gZmFsc2U7XG5cdGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcblx0XHRpZiAoIXRpY2tpbmcpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRcdHVwZGF0ZVZQKCk7XG5cdFx0XHRcdGNiKCk7XG5cdFx0XHRcdHRpY2tpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdFx0dGlja2luZyA9IHRydWU7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCB1bnN1YnNjcmliZXJzID0gW107XG5cdGJpbmRDYXBhY2l0b3JLZXlib2FyZCgpO1xuXHRiaW5kTmF0aXZlRGlzcGxheSgpO1xuXHRwYXRjaEltZVNjcm9sbEludG9WaWV3KCk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChuYXZpZ2F0b3I/LnZpcnR1YWxLZXlib2FyZCwgXCJnZW9tZXRyeWNoYW5nZVwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHR9LCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3csIFwic2Nyb2xsXCIsICgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdH0sIHtcblx0XHRjYXB0dXJlOiB0cnVlLFxuXHRcdHBhc3NpdmU6IHRydWVcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwic2Nyb2xsXCIsICgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdH0sIHtcblx0XHRjYXB0dXJlOiB0cnVlLFxuXHRcdHBhc3NpdmU6IHRydWVcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93Py52aXN1YWxWaWV3cG9ydCwgXCJyZXNpemVcIiwgKCkgPT4ge1xuXHRcdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChzY3JlZW4/Lm9yaWVudGF0aW9uLCBcImNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0cXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3csIFwicmVzaXplXCIsICgpID0+IHtcblx0XHRxdWV1ZU5hdGl2ZURpc3BsYXlSZWZyZXNoKCk7XG5cdFx0dXBkYXRlKCk7XG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQsIFwiZnVsbHNjcmVlbmNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0cXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJET01Db250ZW50TG9hZGVkXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLCBcImNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0cXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCBcImNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0cXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJmb2N1c2luXCIsICgpID0+IHtcblx0XHRiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQoKTtcblx0XHRiaW5kTmF0aXZlRGlzcGxheSgpO1xuXHRcdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0XHRpZiAoaXNJbWVUYXJnZXQoZGVlcEFjdGl2ZUVsZW1lbnQoKSkgfHwgaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcblx0XHRcdGxheW91dExvY2tXID0gTWF0aC5tYXgobGF5b3V0TG9ja1csIE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMCwgTnVtYmVyKHdpbmRvdy52aXN1YWxWaWV3cG9ydD8ud2lkdGgpIHx8IDApO1xuXHRcdFx0bGF5b3V0TG9ja0ggPSBNYXRoLm1heChsYXlvdXRMb2NrSCwgTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCwgTnVtYmVyKHdpbmRvdy52aXN1YWxWaWV3cG9ydD8uaGVpZ2h0KSB8fCAwKTtcblx0XHR9XG5cdFx0cGluSW1lQ2hyb21lKHsgY2FyZXQ6IHRydWUgfSk7XG5cdFx0dXBkYXRlKCk7XG5cdH0sIHtcblx0XHRjYXB0dXJlOiB0cnVlLFxuXHRcdHBhc3NpdmU6IHRydWVcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiZm9jdXNvdXRcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0dXBkYXRlKCk7XG5cdHJ1bldoZW5JZGxlKCgpID0+IHVwZGF0ZSgpLCAxMDApO1xuXHRyZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmVycy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG59O1xudmFyIGZpeE9yaWVudFRvU2NyZWVuID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKCFlbGVtZW50Py5jbGFzc0xpc3Q/LmNvbnRhaW5zPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpKSB7XG5cdFx0ZWxlbWVudD8uY2xhc3NMaXN0Py5hZGQ/LihcIm5hdGl2ZS1wb3J0cmFpdC1vcHRpbWl6ZWRcIik7XG5cdFx0cmV0dXJuIHdoZW5BbnlTY3JlZW5DaGFuZ2VzKCgpID0+IHtcblx0XHRcdGNvbnN0IG5leHQgPSBvcmllbnRhdGlvbk51bWJlck1hcD8uW2dldENvcnJlY3RPcmllbnRhdGlvbigpXSA/PyAwO1xuXHRcdFx0ZWxlbWVudC5vcmllbnQgPSBuZXh0O1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdFx0ZWxlbWVudC5zdHlsZT8uc2V0UHJvcGVydHk/LihcIi0tb3JpZW50XCIsIFN0cmluZyhuZXh0KSk7XG5cdFx0fSk7XG5cdH1cbn07XG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiKSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiBlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCksIHsgb25jZTogdHJ1ZSB9KTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL01lYXN1cmUudHNcbnZhciBjdHggPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEsIDEpLmdldENvbnRleHQoXCIyZFwiKTtcbnZhciBpbml0VGV4dFN0eWxlID0gKGVsZW1lbnQsIGN0eCkgPT4ge1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgXCJcIik7XG5cdGlmIChjdHggJiYgc3R5bGUpIHtcblx0XHRjb25zdCBmb250V2VpZ2h0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtd2VpZ2h0XCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0Y29uc3QgZm9udFNpemUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpIHx8IFwiMTZweFwiO1xuXHRcdGNvbnN0IGZvbnRGYW1pbHkgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1mYW1pbHlcIikgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0XHRjb25zdCBmb250U3RyZXRjaCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXN0cmV0Y2hcIikgfHwgXCJub3JtYWxcIjtcblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRTdHJldGNoID0gZm9udFN0cmV0Y2guaW5jbHVkZXMoXCIlXCIpID8gXCJub3JtYWxcIiA6IGZvbnRTdHJldGNoO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5sZXR0ZXJTcGFjaW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImxldHRlci1zcGFjaW5nXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRLZXJuaW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQta2VybmluZ1wiKSB8fCBcImF1dG9cIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFZhcmlhbnRDYXBzID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtdmFyaWFudC1jYXBzXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnQgPSBgJHtmb250V2VpZ2h0fSAke2ZvbnRTaXplfSAke2ZvbnRGYW1pbHl9YDtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG59O1xudmFyIG1lYXN1cmVUZXh0ID0gKHRleHQsIGVsZW1lbnQpID0+IHtcblx0aWYgKGN0eCkge1xuXHRcdGluaXRUZXh0U3R5bGUoZWxlbWVudCwgY3R4KTtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG5cdHJldHVybiB7IHdpZHRoOiBudWxsIH07XG59O1xudmFyIG1lYXN1cmVJbnB1dEluRm9jdXMgPSAoaW5wdXQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0LnZhbHVlLnNsaWNlKDAsIGlucHV0LnNlbGVjdGlvbkVuZCB8fCAwKTtcblx0cmV0dXJuIG1lYXN1cmVUZXh0KHRleHQsIGlucHV0KTtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb24gPSAoaW5wdXQsIHBvaW50KSA9PiB7XG5cdGNvbnN0IHRleHQgPSBpbnB1dD8udmFsdWUgfHwgXCJcIjtcblx0aWYgKGN0eCkge1xuXHRcdGluaXRUZXh0U3R5bGUoaW5wdXQsIGN0eCk7XG5cdFx0bGV0IGN1cnJlbnRXaWR0aCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjdXJyZW50V2lkdGggPSBjdHgubWVhc3VyZVRleHQodGV4dC5zbGljZSgwLCBpKSk/LndpZHRoO1xuXHRcdFx0aWYgKGN1cnJlbnRXaWR0aCA9PSBudWxsKSByZXR1cm4gdGV4dC5sZW5ndGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoICE9IG51bGwgJiYgY3VycmVudFdpZHRoID49IHBvaW50WzBdKSByZXR1cm4gTWF0aC5tYXgoaSAtIDEsIDApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGV4dC5sZW5ndGg7XG59O1xudmFyIGNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCA9IChpbnB1dCwgY2xpZW50KSA9PiB7XG5cdGNvbnN0IGJveCA9IGlucHV0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRjb25zdCBwb2ludCA9IFtjbGllbnRbMF0gLSBib3gubGVmdCAvIHVuZml4ZWRDbGllbnRab29tKCksIGNsaWVudFsxXSAtIGJveC50b3AgLyB1bmZpeGVkQ2xpZW50Wm9vbSgpXTtcblx0cmV0dXJuIGNvbXB1dGVDYXJldFBvc2l0aW9uKGlucHV0LCBwb2ludCk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvTGF1bmNoZXJHcmlkLnRzXG52YXIgcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQgPSAoZWwsIGxheW91dE92ZXJyaWRlKSA9PiB7XG5cdGNvbnN0IGMgPSBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtY29sdW1uc1wiKSB8fCBcIlwiLCAxMCk7XG5cdGNvbnN0IHIgPSBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtcm93c1wiKSB8fCBcIlwiLCAxMCk7XG5cdGNvbnN0IGJhc2UgPSBub3JtYWxpemVHcmlkTGF5b3V0KGxheW91dE92ZXJyaWRlID8/IFs0LCA4XSk7XG5cdHJldHVybiBbTnVtYmVyLmlzRmluaXRlKGMpICYmIGMgPiAwID8gYyA6IGJhc2VbMF0sIE51bWJlci5pc0Zpbml0ZShyKSAmJiByID4gMCA/IHIgOiBiYXNlWzFdXTtcbn07XG52YXIgcmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50ID0gKGdyaWRTeXN0ZW0sIGNsaWVudFBvaW50LCBhcmdzLCBtb2RlID0gXCJmbG9vclwiKSA9PiB7XG5cdGlmICghZ3JpZFN5c3RlbSkgcmV0dXJuIFswLCAwXTtcblx0Y29uc3QgcmVjdCA9IGdyaWRTeXN0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKTtcblx0aWYgKCFyZWN0KSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCBsYXlvdXQgPSByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudChncmlkU3lzdGVtLCBhcmdzPy5sYXlvdXQpO1xuXHRjb25zdCBvcmllbnQgPSBvcmllbnRPZihncmlkU3lzdGVtKTtcblx0Y29uc3QgY3MgPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/LihncmlkU3lzdGVtKTtcblx0Y29uc3QgcGwgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nTGVmdCkgfHwgMDtcblx0Y29uc3QgcHQgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nVG9wKSB8fCAwO1xuXHRjb25zdCBwciA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdSaWdodCkgfHwgMDtcblx0Y29uc3QgcGIgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nQm90dG9tKSB8fCAwO1xuXHRjb25zdCBjb250ZW50VyA9IE1hdGgubWF4KDEsIChyZWN0LndpZHRoIHx8IGdyaWRTeXN0ZW0uY2xpZW50V2lkdGggfHwgMSkgLSBwbCAtIHByKTtcblx0Y29uc3QgY29udGVudEggPSBNYXRoLm1heCgxLCAocmVjdC5oZWlnaHQgfHwgZ3JpZFN5c3RlbS5jbGllbnRIZWlnaHQgfHwgMSkgLSBwdCAtIHBiKTtcblx0Y29uc3QgY3NDb29yZCA9IFsoY2xpZW50UG9pbnQ/LlswXSB8fCAwKSAtIHJlY3QubGVmdCAtIHBsLCAoY2xpZW50UG9pbnQ/LlsxXSB8fCAwKSAtIHJlY3QudG9wIC0gcHRdO1xuXHRyZXR1cm4gcmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsKGNzQ29vcmQsIFtjb250ZW50VywgY29udGVudEhdLCBsYXlvdXQsIG9yaWVudCwge1xuXHRcdG1vZGUsXG5cdFx0cmVkaXJlY3Q6IHtcblx0XHRcdGl0ZW06IGFyZ3M/Lml0ZW0sXG5cdFx0XHRsaXN0OiBhcmdzPy5saXN0LFxuXHRcdFx0aXRlbXM6IGFyZ3M/Lml0ZW1zXG5cdFx0fVxuXHR9KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9kZWNvci9BbmltYXRpb24udHNcbnZhciBhbmltYXRlU2hvdyA9ICh0YXJnZXQpID0+IGFwcGVhcih0YXJnZXQsIGRlY29yU2hvdyk7XG52YXIgYW5pbWF0ZUhpZGUgPSAodGFyZ2V0KSA9PiBkaXNhcHBlYXIodGFyZ2V0LCBkZWNvckhpZGUpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvU2hhcGUudHNcbnZhciBXYXZ5U2hhcGVkQ2lyY2xlID0gKHN0ZXBzID0gMTAwLCBhbXBsaXR1ZGUgPSAuMDUsIGZyZXEgPSA4KSA9PiB7XG5cdGNvbnN0IHBvaW50cyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzOyBpKyspIHBvaW50cy5wdXNoKGkgLyBzdGVwcyk7XG5cdGNvbnN0IGFuZ2xlID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoJHtzdGVwfXJhZCAqIHBpICogMilgO1xuXHR9O1xuXHRjb25zdCB2YXJpYW50ID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoY2FsYyhjb3MoY2FsYyh2YXIoLS1jbGlwLWZyZXEsIDgpICogJHthbmdsZShzdGVwKX0pKSAqIDAuNSArIDAuNSkgKiB2YXIoLS1jbGlwLWFtcGxpdHVkZSwgMCkpYDtcblx0fTtcblx0Y29uc3QgZnVuYyA9IChzdGVwKSA9PiBbYGNhbGMoY2FsYygwLjUgKyBjYWxjKGNvcygke2FuZ2xlKHN0ZXApfSkgKiBjYWxjKDAuNSAtICR7dmFyaWFudChzdGVwKX0pKSkgKiB2YXIoLS1pY29uLXNpemUsIDEwMCUpKWAsIGBjYWxjKGNhbGMoMC41ICsgY2FsYyhzaW4oJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgXTtcblx0cmV0dXJuIHtcblx0XHRcIi0tY2xpcC1hbXBsaXR1ZGVcIjogYW1wbGl0dWRlLFxuXHRcdFwiLS1jbGlwLWZyZXFcIjogZnJlcSxcblx0XHRcIi0tY2xpcC1wYXRoXCI6IGBwb2x5Z29uKCR7cG9pbnRzLm1hcCgoc3RlcCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZ1bmMoc3RlcCkuam9pbihcIiBcIik7XG5cdFx0fSkuam9pbihcIiwgXCIpfSlgXG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vT2JzZXJ2ZXIudHNcbnZhciBvbkJvcmRlck9ic2VydmVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQm9yZGVyT2JzZXJ2ZVwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUkMSA9IGdsb2JhbFRoaXNbb25Cb3JkZXJPYnNlcnZlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgb25Db250ZW50T2JzZXJ2ZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAb25Db250ZW50T2JzZXJ2ZVwiKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlJDEgPSBnbG9iYWxUaGlzW29uQ29udGVudE9ic2VydmVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB1bndyYXBGcm9tUXVlcnkgPSAoZWxlbWVudCkgPT4ge1xuXHRpZiAodHlwZW9mIGVsZW1lbnQ/LmN1cnJlbnQgPT0gXCJvYmplY3RcIikgZWxlbWVudCA9IGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudD8uY3VycmVudCA/PyAodHlwZW9mIGVsZW1lbnQ/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGVsZW1lbnQ/LnNlbGYgOiBudWxsKSA/PyBlbGVtZW50O1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgbm9ybWFsaXplU2VsZWN0b3IgPSAoc2VsZWN0b3IsIGZhbGxiYWNrID0gXCIqXCIpID0+IHtcblx0aWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbGxiYWNrO1xuXHRyZXR1cm4gc2VsZWN0b3IudHJpbSgpIHx8IGZhbGxiYWNrO1xufTtcbnZhciBzYWZlUXVlcnlTZWxlY3RvckFsbCA9IChlbCwgc2VsZWN0b3IpID0+IHtcblx0aWYgKCFlbCB8fCB0eXBlb2YgZWwucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gW107XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLCBcIlwiKTtcblx0aWYgKCFzZWwpIHJldHVybiBbXTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkgfHwgW10pO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gW107XG5cdH1cbn07XG52YXIgc2FmZU1hdGNoZXMgPSAoZWwsIHNlbGVjdG9yKSA9PiB7XG5cdGlmICghZWwgfHwgdHlwZW9mIGVsLm1hdGNoZXMgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3RvciwgXCJcIik7XG5cdGlmICghc2VsKSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0cmV0dXJuICEhZWwubWF0Y2hlcyhzZWwpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgb2JzZXJ2ZUNvbnRlbnRCb3ggPSAoZWxlbWVudCwgY2IpID0+IHtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlJDEuaGFzKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCkpKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gW107XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRCb3hTaXplID0gZW50cnkuY29udGVudEJveFNpemVbMF07XG5cdFx0XHRcdGlmIChjb250ZW50Qm94U2l6ZSkgY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYj8uKGNvbnRlbnRCb3hTaXplLCBvYnNlcnZlcikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNiPy4oe1xuXHRcdFx0aW5saW5lU2l6ZTogZWxlbWVudC5jbGllbnRXaWR0aCxcblx0XHRcdGJsb2NrU2l6ZTogZWxlbWVudC5jbGllbnRIZWlnaHRcblx0XHR9LCBvYnNlcnZlcik7XG5cdFx0b25Db250ZW50T2JzZXJ2ZSQxLnNldChlbGVtZW50LCBjYWxsYmFja3MpO1xuXHRcdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJjb250ZW50LWJveFwiIH0pO1xuXHR9XG5cdG9uQ29udGVudE9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnB1c2g/LihjYik7XG5cdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IG9uQ29udGVudE9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnNwbGljZT8uKG9uQ29udGVudE9ic2VydmUkMS5nZXQoZWxlbWVudCk/LmluZGV4T2YoY2IpIHx8IC0xLCAxKSB9O1xufTtcbnZhciBvYnNlcnZlQm9yZGVyQm94ID0gKGVsZW1lbnQsIGNiKSA9PiB7XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlJDEuaGFzKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCkpKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gW107XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgYm9yZGVyQm94U2l6ZSA9IGVudHJ5LmJvcmRlckJveFNpemVbMF07XG5cdFx0XHRcdGlmIChib3JkZXJCb3hTaXplKSBjYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiPy4oYm9yZGVyQm94U2l6ZSwgb2JzZXJ2ZXIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYj8uKHtcblx0XHRcdGlubGluZVNpemU6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG5cdFx0XHRibG9ja1NpemU6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdG9uQm9yZGVyT2JzZXJ2ZSQxLnNldChlbGVtZW50LCBjYWxsYmFja3MpO1xuXHRcdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJib3JkZXItYm94XCIgfSk7XG5cdH1cblx0b25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5wdXNoPy4oY2IpO1xuXHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnNwbGljZT8uKG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uaW5kZXhPZihjYikgfHwgLTEsIDEpIH07XG59O1xudmFyIG9ic2VydmVBdHRyaWJ1dGUgPSAoZWxlbWVudCwgYXR0cmlidXRlLCBjYikgPT4ge1xuXHRpZiAodHlwZW9mIGVsZW1lbnQ/LnNlbGVjdG9yID09IFwic3RyaW5nXCIpIHJldHVybiBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvcihlbGVtZW50LCBlbGVtZW50Py5zZWxlY3RvciwgYXR0cmlidXRlLCBjYik7XG5cdGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBuZXcgU2V0KChhdHRyaWJ1dGUuc3BsaXQoXCIsXCIpIHx8IFthdHRyaWJ1dGVdKS5tYXAoKHMpID0+IHMudHJpbSgpKSk7XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgJiYgYXR0cmlidXRlTGlzdC5oYXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIGNiKG11dGF0aW9uLCBvYnNlcnZlcik7XG5cdH0pO1xuXHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCksIHtcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLmF0dHJpYnV0ZUxpc3RdXG5cdH0pO1xuXHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gY2Ioe1xuXHRcdHRhcmdldDogZWxlbWVudCxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0b2xkVmFsdWU6IGVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKGF0dHJpYnV0ZSlcblx0fSwgb2JzZXJ2ZXIpKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcbnZhciBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvciA9IChlbGVtZW50LCBzZWxlY3RvciwgYXR0cmlidXRlLCBjYikgPT4ge1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvcik7XG5cdGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBuZXcgU2V0KFsuLi5hdHRyaWJ1dGUuc3BsaXQoXCIsXCIpIHx8IFthdHRyaWJ1dGVdXS5tYXAoKHMpID0+IHMudHJpbSgpKSk7XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikge1xuXHRcdFx0Y29uc3QgYWRkZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykgfHwgW107XG5cdFx0XHRjb25zdCByZW1vdmVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcykgfHwgW107XG5cdFx0XHRhZGRlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRcdHJlbW92ZWROb2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRcdFsuLi5uZXcgU2V0KGFkZGVkTm9kZXMpXS5maWx0ZXIoKGVsKSA9PiBzYWZlTWF0Y2hlcyhlbCwgc2VsKSk/Lm1hcD8uKCh0YXJnZXQpID0+IHtcblx0XHRcdFx0YXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcblx0XHRcdFx0XHRjYih7XG5cdFx0XHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRcdFx0XHRcdG9sZFZhbHVlOiB0YXJnZXQ/LmdldEF0dHJpYnV0ZT8uKGF0dHJpYnV0ZSlcblx0XHRcdFx0XHR9LCBvYnNlcnZlcik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmIChzYWZlTWF0Y2hlcyhtdXRhdGlvbi50YXJnZXQsIHNlbCkgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSAmJiBhdHRyaWJ1dGVMaXN0LmhhcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkgY2IobXV0YXRpb24sIG9ic2VydmVyKTtcblx0fSk7XG5cdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uYXR0cmlidXRlTGlzdF0sXG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0Y2hhcmFjdGVyRGF0YTogdHJ1ZVxuXHR9KTtcblx0c2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCwgc2VsKS5tYXAoKHRhcmdldCkgPT4gYXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IGNiKHtcblx0XHR0YXJnZXQsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdG9sZFZhbHVlOiB0YXJnZXQ/LmdldEF0dHJpYnV0ZT8uKGF0dHJpYnV0ZSlcblx0fSwgb2JzZXJ2ZXIpKSk7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG52YXIgb2JzZXJ2ZUJ5U2VsZWN0b3IgPSAoZWxlbWVudCwgc2VsZWN0b3IgPSBcIipcIiwgY2IgPSAobXV0LCBvYnMpID0+IHt9KSA9PiB7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0Y29uc3QgdW53cmFwTm9kZXNCeVNlbGVjdG9yID0gKG5vZGVzKSA9PiB7XG5cdFx0Y29uc3QgJG5vZGVzID0gQXJyYXkuZnJvbShub2RlcyB8fCBbXSkgfHwgW107XG5cdFx0JG5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShub2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0cmV0dXJuIFsuLi5BcnJheS5mcm9tKG5ldyBTZXQoJG5vZGVzKS52YWx1ZXMoKSldLmZpbHRlcigoZWwpID0+IHNhZmVNYXRjaGVzKGVsLCBzZWwpKTtcblx0fTtcblx0bGV0IG9iUmVmID0gbnVsbDtcblx0Y29uc3QgaGFuZGxlTXV0YXRpb24gPSAobXV0YXRpb24pID0+IHtcblx0XHRjb25zdCBvYnNlcnZlciA9IG9iUmVmPy5kZXJlZj8uKCk7XG5cdFx0Y29uc3QgYWRkZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5hZGRlZE5vZGVzKTtcblx0XHRjb25zdCByZW1vdmVkTm9kZXMgPSB1bndyYXBOb2Rlc0J5U2VsZWN0b3IobXV0YXRpb24ucmVtb3ZlZE5vZGVzKTtcblx0XHRpZiAoYWRkZWROb2Rlcy5sZW5ndGggPiAwIHx8IHJlbW92ZWROb2Rlcy5sZW5ndGggPiAwKSBjYj8uKHtcblx0XHRcdHR5cGU6IG11dGF0aW9uLnR5cGUsXG5cdFx0XHR0YXJnZXQ6IG11dGF0aW9uLnRhcmdldCxcblx0XHRcdGF0dHJpYnV0ZU5hbWU6IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWVzcGFjZSxcblx0XHRcdG5leHRTaWJsaW5nOiBtdXRhdGlvbi5uZXh0U2libGluZyxcblx0XHRcdG9sZFZhbHVlOiBtdXRhdGlvbi5vbGRWYWx1ZSxcblx0XHRcdHByZXZpb3VzU2libGluZzogbXV0YXRpb24ucHJldmlvdXNTaWJsaW5nLFxuXHRcdFx0YWRkZWROb2Rlcyxcblx0XHRcdHJlbW92ZWROb2Rlc1xuXHRcdH0sIG9ic2VydmVyKTtcblx0fTtcblx0Y29uc3QgaGFuZGxlQ29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZU91dENvbWUgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVGb2N1c0NsaWNrID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXQgfHwgZG9jdW1lbnQ/LmFjdGl2ZUVsZW1lbnRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgZmFjdG9ycyA9IHtcblx0XHRwYXNzaXZlOiB0cnVlLFxuXHRcdGNhcHR1cmU6IGZhbHNlXG5cdH07XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1cy13aXRoaW5cIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXZpc2libGVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUZvY3VzQ2xpY2ssIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUZvY3VzQ2xpY2ssIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi50eXBlID09IFwiY2hpbGRMaXN0XCIpIGhhbmRsZU11dGF0aW9uKG11dGF0aW9uKTtcblx0fSk7XG5cdG9iUmVmID0gbmV3IFdlYWtSZWYob2JzZXJ2ZXIpO1xuXHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCksIHtcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZVxuXHR9KTtcblx0Y29uc3Qgc2VsZWN0ZWQgPSBzYWZlUXVlcnlTZWxlY3RvckFsbChlbGVtZW50LCBzZWwpO1xuXHRpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkgY2I/Lih7XG5cdFx0YWRkZWROb2Rlczogc2VsZWN0ZWQsXG5cdFx0cmVtb3ZlZE5vZGVzOiBbXVxuXHR9LCBvYnNlcnZlcik7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9CZWhhdmlvci50c1xudmFyIGJvdW5kQmVoYXZpb3JzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYmluZEJlaGF2aW9yID0gKGVsZW1lbnQsIGJlaFNldCwgYmVoYXZpb3IpID0+IHtcblx0bmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdGlmICghYmVoU2V0LmhhcyhiZWhhdmlvcikpIGJlaFNldC5hZGQoYmVoYXZpb3IpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdEJlaGF2aW9ycyA9IChlbGVtZW50LCBiZWhhdmlvcnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChiZWhhdmlvcnMpIHtcblx0XHRjb25zdCBiZWhTZXQgPSBib3VuZEJlaGF2aW9ycy5nZXRPckluc2VydChlbGVtZW50LCAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcblx0XHRbLi4uYmVoYXZpb3JzPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRCZWhhdmlvcihlbGVtZW50LCBiZWhTZXQsIGUpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9TdG9yZS50c1xudmFyIG5hbWVkU3RvcmVNYXBzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BuYW1lZFN0b3JlTWFwc1wiKTtcbnZhciBuYW1lZFN0b3JlTWFwcyA9IGdsb2JhbFRoaXNbbmFtZWRTdG9yZU1hcHNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGdldFN0b3Jlc09mRWxlbWVudCA9IChtYXAsIGVsZW1lbnQpID0+IHtcblx0Y29uc3QgRSA9IFsuLi5tYXAuZW50cmllcygpIHx8IFtdXTtcblx0cmV0dXJuIG5ldyBNYXAoRT8ubWFwPy4oKFtuLCBtXSkgPT4gW24sIG0/LmdldD8uKGVsZW1lbnQpXSk/LmZpbHRlcj8uKChbbiwgZV0pID0+ICEhZSkgfHwgW10pO1xufTtcbnZhciBpc1dlYWtDb21wYXRpYmxlID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuICh0eXBlb2YgZWxlbWVudCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBlbGVtZW50ID09IFwiZnVuY3Rpb25cIikgJiYgZWxlbWVudCAhPSBudWxsO1xufTtcbnZhciBiaW5kU3RvcmUgPSAoZWxlbWVudCwgbmFtZSwgb2JqKSA9PiB7XG5cdGlmICghaXNXZWFrQ29tcGF0aWJsZShlbGVtZW50KSAmJiBlbGVtZW50ICE9IG51bGwpIHJldHVybiBlbGVtZW50O1xuXHRsZXQgd2Vha01hcCA9IG5hbWVkU3RvcmVNYXBzLmdldChuYW1lKTtcblx0aWYgKCF3ZWFrTWFwKSB7XG5cdFx0d2Vha01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRcdG5hbWVkU3RvcmVNYXBzLnNldChuYW1lLCB3ZWFrTWFwKTtcblx0fVxuXHRpZiAoIXdlYWtNYXAuaGFzKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgd2Vha01hcC5zZXQoZWxlbWVudCwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIHJlZmxlY3RTdG9yZXMgPSAoZWxlbWVudCwgc3RvcmVzKSA9PiB7XG5cdGlmICghZWxlbWVudCB8fCAhc3RvcmVzKSByZXR1cm47XG5cdGZvciAoY29uc3QgW25hbWUsIG9ial0gb2Ygc3RvcmVzLmVudHJpZXMoKSkgYmluZFN0b3JlKGVsZW1lbnQsIG5hbWUsIG9iaik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL01peGlucy50c1xudmFyIHJlZmxlY3RNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW5zKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRpZiAobWl4aW5zKSB7XG5cdFx0Y29uc3QgbWl4aW5TZXQgPSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcblx0XHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdFx0Wy4uLm1peGlucz8udmFsdWVzPy4oKSB8fCBbXV0ubWFwKChlKSA9PiBiaW5kTWl4aW5zKGVsZW1lbnQsIGUsIG1peGluU2V0KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGdldEVsZW1lbnRSZWxhdGVkID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHtcblx0XHRzdG9yZVNldDogZ2V0U3RvcmVzT2ZFbGVtZW50KG5hbWVkU3RvcmVNYXBzLCBlbGVtZW50KSxcblx0XHRtaXhpblNldDogYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCksXG5cdFx0YmVoYXZpb3JTZXQ6IGJvdW5kQmVoYXZpb3JzPy5nZXQ/LihlbGVtZW50KVxuXHR9O1xufTtcbnZhciBiaW5kTWl4aW5zID0gKGVsZW1lbnQsIG1peGluLCBtaXhTZXQpID0+IHtcblx0Y29uc3Qgd2VsID0gbmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdG1peFNldCB8fD0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCk7XG5cdGlmICghbWl4U2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRtaXhTZXQ/LmFkZD8uKG1peGluKTtcblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHRcdGlmIChtaXhpbi5uYW1lKSBlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW10sIG1peGluLm5hbWVdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0bWl4aW4/LmNvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGJvdW5kTWl4aW5TZXRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGJvdW5kTWl4aW5TZXRcIik7XG52YXIgYm91bmRNaXhpblNldCA9IGdsb2JhbFRoaXNbYm91bmRNaXhpblNldFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluRWxlbWVudHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgbWl4aW5FbGVtZW50cyA9IGdsb2JhbFRoaXNbbWl4aW5FbGVtZW50c1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluUmVnaXN0cnlTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIik7XG52YXIgbWl4aW5SZWdpc3RyeSA9IGdsb2JhbFRoaXNbbWl4aW5SZWdpc3RyeVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgbWl4aW5OYW1lc3BhY2VTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIpO1xudmFyIG1peGluTmFtZXNwYWNlID0gZ2xvYmFsVGhpc1ttaXhpbk5hbWVzcGFjZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlcyA9IChlbGVtZW50LCBtaXhpbikgPT4ge1xuXHRpZiAodHlwZW9mIG1peGluID09IFwic3RyaW5nXCIpIG1peGluID0gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obWl4aW4pO1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdGNvbnN0IG1peGlucyA9IG5ldyBTZXQoWy4uLm5hbWVzXS5tYXAoKG4pID0+IG1peGluUmVnaXN0cnk/LmdldD8uKG4pKS5maWx0ZXIoKG0pID0+ICEhbSkpO1xuXHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRpZiAoIW1peGluRWxlbWVudHM/Lmhhcz8uKG1peGluKSkgbWl4aW5FbGVtZW50cz8uc2V0Py4obWl4aW4sIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKTtcblx0aWYgKCFib3VuZE1peGluU2V0Py5oYXM/LihlbGVtZW50KSkgYm91bmRNaXhpblNldD8uc2V0Py4oZWxlbWVudCwgbWl4aW5TZXQpO1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkgbWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0aWYgKG1peGlucy5oYXMobWl4aW4pIHx8ICFtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/Lmhhcz8uKGVsZW1lbnQpKSB7XG5cdFx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRcdG5hbWVzLmFkZChtaXhpbk5hbWVzcGFjZT8uZ2V0Py4obWl4aW4pKTtcblx0XHRcdG1peGluU2V0Py5hZGQ/LihtaXhpbik7XG5cdFx0XHRlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLm5hbWVzXS5maWx0ZXIoKG4pID0+ICEhbikuam9pbihcIiBcIikpO1xuXHRcdH1cblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHR9XG5cdGlmIChtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkge1xuXHRcdFx0bWl4aW5TZXQ/LmRlbGV0ZT8uKG1peGluKTtcblx0XHRcdG1peGluPy5kaXNjb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdH1cblx0fVxufTtcbnZhciByb290cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgYWRkUm9vdCA9IChyb290ID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKCFyb290KSByZXR1cm47XG5cdGlmICghcm9vdHM/Lmhhcz8uKHJvb3QpKSB7XG5cdFx0cm9vdHM/LmFkZD8uKHJvb3QpO1xuXHRcdG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKHJvb3QsIFwiKlwiLCBcImRhdGEtbWl4aW5cIiwgKG11dGF0aW9uKSA9PiB1cGRhdGVBbGxNaXhpbnMobXV0YXRpb24udGFyZ2V0KSk7XG5cdFx0b2JzZXJ2ZUJ5U2VsZWN0b3Iocm9vdCwgXCJbZGF0YS1taXhpbl1cIiwgKG11dGF0aW9uKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbXV0YXRpb24uYWRkZWROb2RlcykgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpO1xuXHRcdH0pO1xuXHRcdG9ic2VydmVTdHlsZVRyZWUocm9vdCk7XG5cdH1cblx0cmV0dXJuIHJvb3Q7XG59O1xudmFyIHVwZGF0ZUFsbE1peGlucyA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IG5hbWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Wy4uLm5ldyBTZXQoWy4uLm5hbWVzXS5tYXAoKG4pID0+IG1peGluUmVnaXN0cnk/LmdldD8uKG4pKS5maWx0ZXIoKG0pID0+ICEhbSkpXS5tYXA/LigobSkgPT4gdXBkYXRlTWl4aW5BdHRyaWJ1dGVzKGVsZW1lbnQsIG0pKTtcbn07XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsID0gKGVsZW1lbnRzLCBtaXhpbikgPT4ge1xuXHRlbGVtZW50cy5mb3JFYWNoKChlKSA9PiBtaXhpbiA/IHVwZGF0ZU1peGluQXR0cmlidXRlcyhlLCBtaXhpbikgOiB1cGRhdGVBbGxNaXhpbnMoZSkpO1xufTtcbnZhciB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzID0gKG1peGluKSA9PiB7XG5cdGZvciAoY29uc3Qgcm9vdCBvZiByb290cykgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsKHJvb3Q/LnF1ZXJ5U2VsZWN0b3JBbGw/LihcIltkYXRhLW1peGluXVwiKSwgbWl4aW4pO1xufTtcbnZhciBuYW1lUmVnaXN0cnlGID0gbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChrZXkpID0+IHtcblx0bWl4aW5SZWdpc3RyeT8uZGVsZXRlPy4oa2V5KTtcbn0pO1xudmFyIHJlZ2lzdGVyTWl4aW4gPSAobmFtZSwgbWl4aW4pID0+IHtcblx0aWYgKCFtaXhpbk5hbWVzcGFjZT8uaGFzPy4obWl4aW4pKSB7XG5cdFx0Y29uc3Qga2V5ID0gbmFtZT8udHJpbT8uKCk7XG5cdFx0aWYgKGtleSkge1xuXHRcdFx0bWl4aW5OYW1lc3BhY2U/LnNldD8uKG1peGluLCBrZXkpO1xuXHRcdFx0bWl4aW5SZWdpc3RyeT8uc2V0Py4oa2V5LCBtaXhpbik7XG5cdFx0XHRuYW1lUmVnaXN0cnlGPy5yZWdpc3Rlcj8uKG1peGluLCBrZXkpO1xuXHRcdFx0dXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyhtaXhpbik7XG5cdFx0fVxuXHR9XG59O1xuYWRkUm9vdCh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbCk7XG52YXIgRE9NTWl4aW4gPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKG5hbWUgPSBudWxsKSB7XG5cdFx0aWYgKG5hbWUpIHJlZ2lzdGVyTWl4aW4obmFtZSwgdGhpcyk7XG5cdH1cblx0Y29ubmVjdCh3RWxlbWVudCwgd1NlbGYsIHJlbGF0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbGVtZW50LCB3U2VsZiwgcmVsYXRlZCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHN0b3JlRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzLmdldCh0aGlzLm5hbWUgfHwgXCJcIik/LmdldD8uKGVsZW1lbnQpO1xuXHR9XG5cdHJlbGF0ZWRGb3JFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCk7XG5cdH1cblx0Z2V0IGVsZW1lbnRzKCkge1xuXHRcdHJldHVybiBtaXhpbkVsZW1lbnRzPy5nZXQ/Lih0aGlzKTtcblx0fVxuXHRnZXQgc3RvcmFnZSgpIHtcblx0XHRyZXR1cm4gbmFtZWRTdG9yZU1hcHM/LmdldD8uKHRoaXMubmFtZSB8fCBcIlwiKTtcblx0fVxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gbWl4aW5OYW1lc3BhY2U/LmdldD8uKHRoaXMpO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vSGFuZGxlci50c1xudmFyIGhhbmRsZUhpZGRlbiA9IChlbGVtZW50LCBfLCB2aXNpYmxlKSA9PiB7XG5cdGNvbnN0ICRyZWYgPSB2aXNpYmxlO1xuXHRpZiAoaGFzVmFsdWUodmlzaWJsZSkpIHZpc2libGUgPSB2aXNpYmxlLnZhbHVlO1xuXHRjb25zdCBpc1Zpc2libGUgPSAodmlzaWJsZSA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2aXNpYmxlKSkgIT0gbnVsbCAmJiB2aXNpYmxlICE9PSBmYWxzZTtcblx0JGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSBlbGVtZW50LmhpZGRlbiA9ICFpc1Zpc2libGU7XG5cdFx0ZWxzZSBpZiAoaXNWaXNpYmxlKSBlbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpO1xuXHRcdGVsc2UgZWxlbWVudD8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiLCBcIlwiKTtcblx0fSk7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBoYW5kbGVQcm9wZXJ0eSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGlmICghKHByb3AgPSB0eXBlb2YgcHJvcCA9PSBcInN0cmluZ1wiID8ga2ViYWJUb0NhbWVsKHByb3ApIDogcHJvcCkgfHwgIWVsIHx8IFtcblx0XHRcInN0eWxlXCIsXG5cdFx0XCJkYXRhc2V0XCIsXG5cdFx0XCJhdHRyaWJ1dGVTdHlsZU1hcFwiLFxuXHRcdFwic3R5bGVNYXBcIixcblx0XHRcImNvbXB1dGVkU3R5bGVNYXBcIlxuXHRdLmluZGV4T2YocHJvcCB8fCBcIlwiKSAhPSAtMSkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRpZiAoZWw/Lltwcm9wXSA9PT0gdmFsKSByZXR1cm4gZWw7XG5cdGlmIChlbD8uW3Byb3BdICE9PSB2YWwpICRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh2YWwgIT0gbnVsbCkgZWxbcHJvcF0gPSB2YWw7XG5cdFx0ZWxzZSBkZWxldGUgZWxbcHJvcF07XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGhhbmRsZURhdGFzZXQgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRjb25zdCBkYXRhc2V0UmVmID0gZWw/LmRhdGFzZXQ7XG5cdGlmICghcHJvcCB8fCAhZWwgfHwgIWRhdGFzZXRSZWYpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbD8udmFsdWU7XG5cdHByb3AgPSBrZWJhYlRvQ2FtZWwocHJvcCk7XG5cdGlmIChkYXRhc2V0UmVmPy5bcHJvcF0gPT09ICh2YWwgPSBub3JtYWxpemVQcmltaXRpdmUodmFsKSkpIHJldHVybiBlbDtcblx0aWYgKHZhbCA9PSBudWxsIHx8IHZhbCA9PT0gZmFsc2UpIGRlbGV0ZSBkYXRhc2V0UmVmW3Byb3BdO1xuXHRlbHNlICRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIpIGRhdGFzZXRSZWZbcHJvcF0gPSBTdHJpbmcodmFsKTtcblx0XHRlbHNlIGRlbGV0ZSBkYXRhc2V0UmVmW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBkZWxldGVTdHlsZVByb3BlcnR5ID0gKGVsLCBuYW1lKSA9PiBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShjYW1lbFRvS2ViYWIobmFtZSkpO1xudmFyIGhhbmRsZVN0eWxlQ2hhbmdlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbD8uc3R5bGU7XG5cdGlmICghcHJvcCB8fCB0eXBlb2YgcHJvcCAhPSBcInN0cmluZ1wiIHx8ICFlbCB8fCAhc3R5bGVSZWYpIHJldHVybiBlbDtcblx0JGF2b2lkVHJpZ2dlcih2YWwsICgpID0+IHtcblx0XHRpZiAoaXNWYWwodmFsKSB8fCBoYXNWYWx1ZSh2YWwpIHx8IGlzVmFsdWVVbml0KHZhbCkpIHNldFN0eWxlUHJvcGVydHkoZWwsIHByb3AsIHZhbCk7XG5cdFx0ZWxzZSBpZiAodmFsID09IG51bGwpIGRlbGV0ZVN0eWxlUHJvcGVydHkoZWwsIHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVBdHRyaWJ1dGUgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIXByb3AgfHwgIWVsKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWwudmFsdWU7XG5cdHByb3AgPSBjYW1lbFRvS2ViYWIocHJvcCk7XG5cdGlmIChlbD8uZ2V0QXR0cmlidXRlPy4ocHJvcCkgPT09ICh2YWwgPSBub3JtYWxpemVQcmltaXRpdmUodmFsKSkpIHJldHVybiBlbDtcblx0JGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB2YWwgIT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsICE9IFwiZnVuY3Rpb25cIiAmJiB2YWwgIT0gbnVsbCAmJiAodHlwZW9mIHZhbCA9PSBcImJvb2xlYW5cIiA/IHZhbCA9PSB0cnVlIDogdHJ1ZSkpIGVsPy5zZXRBdHRyaWJ1dGU/Lihwcm9wLCBTdHJpbmcodmFsKSk7XG5cdFx0ZWxzZSBlbD8ucmVtb3ZlQXR0cmlidXRlPy4ocHJvcCk7XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vanVuY3Rpb24vdHlwZXMudHNcbmZ1bmN0aW9uIGp1bmN0aW9uVG9Cb3goYSwgYikge1xuXHRjb25zdCBsZWZ0ID0gTWF0aC5taW4oYS54LCBiLngpO1xuXHRjb25zdCB0b3AgPSBNYXRoLm1pbihhLnksIGIueSk7XG5cdGNvbnN0IHJpZ2h0ID0gTWF0aC5tYXgoYS54LCBiLngpO1xuXHRjb25zdCBib3R0b20gPSBNYXRoLm1heChhLnksIGIueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdCxcblx0XHR0b3AsXG5cdFx0cmlnaHQsXG5cdFx0Ym90dG9tLFxuXHRcdHdpZHRoOiByaWdodCAtIGxlZnQsXG5cdFx0aGVpZ2h0OiBib3R0b20gLSB0b3Bcblx0fTtcbn1cbnZhciBKVU5DVElPTl9TRUxFQ1RfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1zZWxlY3Q6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1zZWxlY3Q6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tc2VsZWN0OmVuZFwiLFxuXHRjYW5jZWw6IFwianVuY3Rpb24tc2VsZWN0OmNhbmNlbFwiXG59O1xudmFyIEpVTkNUSU9OX0RSQUdfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1kcmFnOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tZHJhZzptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1kcmFnOmVuZFwiXG59O1xudmFyIEpVTkNUSU9OX1JFU0laRV9FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9qdW5jdGlvbi9KdW5jdGlvbk1peGlucy50c1xudmFyIG1peGluRGlzcG9zZXJzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBtaXhpbkRpc3Bvc2VycyA9IGdsb2JhbFRoaXNbbWl4aW5EaXNwb3NlcnNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBwdXNoRGlzcG9zYWJsZSA9IChob3N0LCBtaXhpbk5hbWUsIGZuKSA9PiB7XG5cdGNvbnN0IG1hcCA9IG1peGluRGlzcG9zZXJzLmdldChob3N0KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRjb25zdCBsaXN0ID0gbWFwLmdldChtaXhpbk5hbWUpID8/IFtdO1xuXHRsaXN0LnB1c2goZm4pO1xuXHRtYXAuc2V0KG1peGluTmFtZSwgbGlzdCk7XG5cdG1peGluRGlzcG9zZXJzLnNldChob3N0LCBtYXApO1xufTtcbnZhciBydW5EaXNwb3NlcnMgPSAoaG9zdCwgbWl4aW5OYW1lKSA9PiB7XG5cdGNvbnN0IG1hcCA9IG1peGluRGlzcG9zZXJzLmdldChob3N0KTtcblx0Y29uc3QgbGlzdCA9IG1hcD8uZ2V0KG1peGluTmFtZSk7XG5cdGlmICghbGlzdCkgcmV0dXJuO1xuXHRmb3IgKGNvbnN0IGZuIG9mIGxpc3QpIHRyeSB7XG5cdFx0Zm4oKTtcblx0fSBjYXRjaCB7fVxuXHRtYXAuZGVsZXRlKG1peGluTmFtZSk7XG5cdGlmIChtYXAuc2l6ZSA9PT0gMCkgbWl4aW5EaXNwb3NlcnMuZGVsZXRlKGhvc3QpO1xufTtcbnZhciBwYXJzZVB4VmFyID0gKGhvc3QsIG5hbWUpID0+IHtcblx0Y29uc3QgcmF3ID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oaG9zdCk/LmdldFByb3BlcnR5VmFsdWU/LihuYW1lKT8udHJpbT8uKCkgPz8gXCJcIjtcblx0Y29uc3QgbiA9IHBhcnNlRmxvYXQocmF3KTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiAwO1xufTtcbnZhciBxdWVyeUhhbmRsZSA9IChob3N0LCBhdHRyLCBmYWxsYmFjaykgPT4ge1xuXHRjb25zdCBzZWwgPSBob3N0LmdldEF0dHJpYnV0ZShhdHRyKT8udHJpbSgpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGZhbGxiYWNrO1xuXHRjb25zdCBmb3VuZCA9IGhvc3QucXVlcnlTZWxlY3RvcihzZWwpO1xuXHRyZXR1cm4gZm91bmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGZvdW5kIDogZmFsbGJhY2s7XG59O1xudmFyIEp1bmN0aW9uU2VsZWN0TWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRvdmVybGF5LmNsYXNzTmFtZSA9IFwidWktanVuY3Rpb24tc2VsZWN0LW92ZXJsYXlcIjtcblx0XHRvdmVybGF5LnNldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tb3ZlcmxheVwiLCBcIlwiKTtcblx0XHRvdmVybGF5LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDp2YXIoLS16LW1heCwgOTk5OSk7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoxcHggZGFzaGVkIGNvbG9yLW1peChpbiBva2xhYiwgdmFyKC0tY29sb3ItcHJpbWFyeSwgIzVhN2ZmZikgNzAlLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZDpjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLWNvbG9yLXByaW1hcnksICM1YTdmZmYpIDE0JSwgdHJhbnNwYXJlbnQpO2Rpc3BsYXk6bm9uZTtpbnNldDphdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtcIjtcblx0XHRjb25zdCBlbnN1cmVQb3NpdGlvbmVkID0gKCkgPT4ge1xuXHRcdFx0aWYgKChnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lihob3N0KSk/LnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSBob3N0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdH07XG5cdFx0ZW5zdXJlUG9zaXRpb25lZCgpO1xuXHRcdGhvc3QuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cdFx0bGV0IGFjdGl2ZSA9IGZhbHNlO1xuXHRcdGxldCBhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGxldCBiID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGNvbnN0IGxvY2FsUG9pbnQgPSAoZXYpID0+IHtcblx0XHRcdGNvbnN0IHIgPSBob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogZXYuY2xpZW50WCAtIHIubGVmdCxcblx0XHRcdFx0eTogZXYuY2xpZW50WSAtIHIudG9wXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y29uc3QgYXBwbHlPdmVybGF5ID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGlmIChib3gud2lkdGggPCAxICYmIGJveC5oZWlnaHQgPCAxKSB7XG5cdFx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHtib3gubGVmdH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLnRvcCA9IGAke2JveC50b3B9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2JveC53aWR0aH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmhlaWdodCA9IGAke2JveC5oZWlnaHR9cHhgO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1qdW5jdGlvbi1pZ25vcmUtc2VsZWN0XSwgW2RhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVdLCBbZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXSwgYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSkgcmV0dXJuO1xuXHRcdFx0aWYgKCEoZXYudGFyZ2V0ID09PSBob3N0IHx8IGhvc3QuY29udGFpbnMoZXYudGFyZ2V0KSkpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IHRydWU7XG5cdFx0XHRhID0gbG9jYWxQb2ludChldik7XG5cdFx0XHRiID0geyAuLi5hIH07XG5cdFx0XHRob3N0LnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0XHRhcHBseU92ZXJsYXkoKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGIgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGJveCxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IGVuZCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aG9zdC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGJveCxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRlbmQoZXYpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25DYW5jZWwgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aG9zdC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5jYW5jZWwsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7IGhvc3QgfVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgKCkgPT4ge1xuXHRcdFx0b3ZlcmxheS5yZW1vdmUoKTtcblx0XHR9KTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcmNhbmNlbFwiLCBvbkNhbmNlbCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG52YXIgSnVuY3Rpb25EcmFnTWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy14XCIsIHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKSk7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy15XCIsIHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKSk7XG5cdFx0Y29uc3QgcHJldmlvdXNUcmFuc2Zvcm0gPSBob3N0LnN0eWxlLnRyYW5zZm9ybTtcblx0XHRpZiAoIWhvc3Quc3R5bGUudHJhbnNmb3JtIHx8IGhvc3Quc3R5bGUudHJhbnNmb3JtID09PSBcIm5vbmVcIikgaG9zdC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tangtZHJhZy14LCAwKSAqIDFweCksIGNhbGModmFyKC0tangtZHJhZy15LCAwKSAqIDFweCksIDApXCI7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXCIsIGhvc3QpO1xuXHRcdGxldCBkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdGxldCBzdGFydFggPSAwO1xuXHRcdGxldCBzdGFydFkgPSAwO1xuXHRcdGxldCBiYXNlWCA9IDA7XG5cdFx0bGV0IGJhc2VZID0gMDtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdGRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdHN0YXJ0WCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzdGFydFkgPSBldi5jbGllbnRZO1xuXHRcdFx0YmFzZVggPSBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIik7XG5cdFx0XHRiYXNlWSA9IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKTtcblx0XHRcdGhhbmRsZS5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdGNsaWVudFg6IGV2LmNsaWVudFgsXG5cdFx0XHRcdFx0Y2xpZW50WTogZXYuY2xpZW50WSxcblx0XHRcdFx0XHRiYXNlWCxcblx0XHRcdFx0XHRiYXNlWVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghZHJhZ2dpbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IGR4ID0gZXYuY2xpZW50WCAtIHN0YXJ0WDtcblx0XHRcdGNvbnN0IGR5ID0gZXYuY2xpZW50WSAtIHN0YXJ0WTtcblx0XHRcdGNvbnN0IG54ID0gYmFzZVggKyBkeDtcblx0XHRcdGNvbnN0IG55ID0gYmFzZVkgKyBkeTtcblx0XHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteFwiLCBueCk7XG5cdFx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXlcIiwgbnkpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0ZHgsXG5cdFx0XHRcdFx0ZHksXG5cdFx0XHRcdFx0eDogbngsXG5cdFx0XHRcdFx0eTogbnlcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFkcmFnZ2luZykgcmV0dXJuO1xuXHRcdFx0ZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhhbmRsZS5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0eDogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdHk6IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0aG9zdC5zdHlsZS50cmFuc2Zvcm0gPSBwcmV2aW91c1RyYW5zZm9ybTtcblx0XHR9KTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmNhbmNlbFwiLCBvblVwKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG52YXIgSnVuY3Rpb25SZXNpemVNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IGhhbmRsZSA9IHF1ZXJ5SGFuZGxlKGhvc3QsIFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXCIsIGhvc3QpO1xuXHRcdGxldCByZXNpemluZyA9IGZhbHNlO1xuXHRcdGxldCBzeCA9IDA7XG5cdFx0bGV0IHN5ID0gMDtcblx0XHRsZXQgc3cgPSAwO1xuXHRcdGxldCBzaCA9IDA7XG5cdFx0Y29uc3QgbWluVyA9IE1hdGgubWF4KDEyMCwgcGFyc2VGbG9hdChob3N0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi13XCIpIHx8IFwiXCIpIHx8IDEyMCk7XG5cdFx0Y29uc3QgbWluSCA9IE1hdGgubWF4KDgwLCBwYXJzZUZsb2F0KGhvc3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLWhcIikgfHwgXCJcIikgfHwgODApO1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldCAhPT0gaGFuZGxlICYmICFoYW5kbGUuY29udGFpbnMoZXYudGFyZ2V0KSkgcmV0dXJuO1xuXHRcdFx0cmVzaXppbmcgPSB0cnVlO1xuXHRcdFx0c3ggPSBldi5jbGllbnRYO1xuXHRcdFx0c3kgPSBldi5jbGllbnRZO1xuXHRcdFx0c3cgPSBob3N0Lm9mZnNldFdpZHRoO1xuXHRcdFx0c2ggPSBob3N0Lm9mZnNldEhlaWdodDtcblx0XHRcdGhhbmRsZS5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IHN3LFxuXHRcdFx0XHRcdGhlaWdodDogc2hcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIXJlc2l6aW5nKSByZXR1cm47XG5cdFx0XHRjb25zdCBudyA9IE1hdGgubWF4KG1pblcsIHN3ICsgKGV2LmNsaWVudFggLSBzeCkpO1xuXHRcdFx0Y29uc3QgbmggPSBNYXRoLm1heChtaW5ILCBzaCArIChldi5jbGllbnRZIC0gc3kpKTtcblx0XHRcdGhvc3Quc3R5bGUud2lkdGggPSBgJHtud31weGA7XG5cdFx0XHRob3N0LnN0eWxlLmhlaWdodCA9IGAke25ofXB4YDtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IG53LFxuXHRcdFx0XHRcdGhlaWdodDogbmhcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFyZXNpemluZykgcmV0dXJuO1xuXHRcdFx0cmVzaXppbmcgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhhbmRsZS5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogaG9zdC5vZmZzZXRXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IGhvc3Qub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5uZXcgSnVuY3Rpb25TZWxlY3RNaXhpbigpO1xubmV3IEp1bmN0aW9uRHJhZ01peGluKCk7XG5uZXcgSnVuY3Rpb25SZXNpemVNaXhpbigpO1xuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IERPTU1peGluLCBKdW5jdGlvbkRyYWdNaXhpbiwgSnVuY3Rpb25SZXNpemVNaXhpbiwgSnVuY3Rpb25TZWxlY3RNaXhpbiwgTUFUQ0gsIE1PQywgTU9DRWxlbWVudCwgUkFGQmVoYXZpb3IsIFJFR0VYLCBST09ULCBXYXZ5U2hhcGVkQ2lyY2xlLCBfX2V4cG9ydFByb3BlcnRpZXMsIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMsIGFkZEV2ZW50LCBhZGRFdmVudHMsIGFkZEV2ZW50c0xpc3QsIGFkZFJvb3QsIGFuaW1hdGVIaWRlLCBhbmltYXRlU2hvdywgYXZhaWxTaXplLCBiYmgsIGJidywgYmluZEJlaGF2aW9yLCBiaW5kTWl4aW5zLCBiaW5kU3RvcmUsIGJvcmRlckJveEhlaWdodCwgYm9yZGVyQm94V2lkdGgsIGJvdW5kQmVoYXZpb3JzLCBib3VuZE1peGluU2V0LCBjYmgsIGNidywgY2hhbmdlWm9vbSwgY2xhc3NlcywgY29tcHV0ZUNhcmV0UG9zaXRpb24sIGNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCwgY29udGFpbnNPclNlbGYsIGNvbnRlbnRCb3hIZWlnaHQsIGNvbnRlbnRCb3hXaWR0aCwgY3JlYXRlRWxlbWVudFZhbmlsbGEsIGNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0LCBkZWxldGVTdHlsZVByb3BlcnR5LCBkZXRlY3RNb2JpbGUsIGRvQm9yZGVyT2JzZXJ2ZSwgZG9Db250ZW50T2JzZXJ2ZSwgZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXksIGVuc3VyZVZpZXdwb3J0VHJhY2tpbmcsIGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXksIGZpeE9yaWVudFRvU2NyZWVuLCBmaXhlZENsaWVudFpvb20sIGdldEF2YWlsU2l6ZSwgZ2V0Qm91bmRpbmdPcmllbnRSZWN0LCBnZXRDb3JyZWN0T3JpZW50YXRpb24sIGdldEVsZW1lbnRSZWxhdGVkLCBnZXRFdmVudFRhcmdldCwgZ2V0T2Zmc2V0UGFyZW50LCBnZXRPZmZzZXRQYXJlbnRDaGFpbiwgZ2V0U3RvcmVzT2ZFbGVtZW50LCBnZXRab29tLCBoYW5kbGVBdHRyaWJ1dGUsIGhhbmRsZURhdGFzZXQsIGhhbmRsZUhpZGRlbiwgaGFuZGxlUHJvcGVydHksIGhhbmRsZVN0eWxlQ2hhbmdlLCBoYXNQYXJlbnQsIGh0bWwsIGluY2x1ZGVTZWxmLCBpbmRleE9mLCBpbml0VGV4dFN0eWxlLCBpc0VsZW1lbnQsIGlzSW5Gb2N1cywgaXNNb2JpbGUsIGlzTmVhcmx5SWRlbnRpdHksIGlzVmFsaWRQYXJlbnQsIG1ha2VSQUZDeWNsZSwgbWVhc3VyZUlucHV0SW5Gb2N1cywgbWVhc3VyZVRleHQsIG1peGluRGlzcG9zZXJzLCBtaXhpbkVsZW1lbnRzLCBtaXhpbk5hbWVzcGFjZSwgbWl4aW5SZWdpc3RyeSwgbmFtZVJlZ2lzdHJ5RiwgbmFtZWRTdG9yZU1hcHMsIG9ic2VydmVBdHRyaWJ1dGUsIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yLCBvYnNlcnZlQm9yZGVyQm94LCBvYnNlcnZlQnlTZWxlY3Rvciwgb2JzZXJ2ZUNvbnRlbnRCb3gsIG9uQm9yZGVyT2JzZXJ2ZSwgb25Db250ZW50T2JzZXJ2ZSwgb3JpZW50T2YsIG9yaWVudGF0aW9uTnVtYmVyTWFwLCBwYXNzaXZlT3B0cywgcmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0LCByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCwgcmVhZFZpcnR1YWxLZXlib2FyZEhlaWdodFB4LCByZWZsZWN0QmVoYXZpb3JzLCByZWZsZWN0TWl4aW5zLCByZWZsZWN0U3RvcmVzLCByZWdpc3Rlck1peGluLCByZW1vdmVFdmVudCwgcmVtb3ZlRXZlbnRzLCByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQsIHJvb3RzLCBzZXRBdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzSWZOdWxsLCBzZXRDaGVja2VkLCBzZXRJZGxlSW50ZXJ2YWwsIHRocm90dGxlTWFwLCB1bmZpeGVkQ2xpZW50Wm9vbSwgdXBkYXRlQWxsTWl4aW5zLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCwgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cywgdXBkYXRlVlAsIHVybCwgd2hlbkFueVNjcmVlbkNoYW5nZXMsIHpvb21PZiwgem9vbVZhbHVlcyB9OyJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsaUJBQUFBLEdBQWUsZ0JBQUFDLElBQWMsZ0JBQUFDLElBQWMsWUFBQUMsR0FBVSxxQkFBQUMsSUFBbUIsU0FBQUMsSUFBTyxlQUFBQyxJQUFhLGdCQUFBQyxJQUFjLHVCQUFBQyxJQUFxQixzQkFBQUMsSUFBb0IsK0JBQUFDLFVBQW1DO0FBQy9MLFNBQVMsVUFBQUMsSUFBUSxhQUFBQyxJQUFXLGFBQUFDLElBQVcsYUFBQUMsSUFBVyxvQkFBQUMsSUFBa0Isb0JBQUFDLFNBQXdCO0FBRTVGLGNBQWM7QUFHZCxJQUFJQyxLQUFrQyx1QkFBTyxJQUFJLGtDQUFrQyxHQUMvRUMsS0FBNEIsV0FBV0QsRUFBK0IsTUFBc0Isb0JBQUksSUFBSTtBQUN4RztBQUFBLEVBQ0M7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FB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aUJBQWlCSixDQUFJLENBQUMsR0FDM0U7QUFBQSxFQUNSO0FBQUEsRUFDQSxXQUFXUCxHQUFLO0FBQ2YsVUFBTTlWLElBQU84VixHQUFLLFFBQVE7QUFDMUIsV0FBSTlWLEtBQU13VixHQUFheFYsR0FBTSxvQkFBb0IsR0FDMUM7QUFBQSxFQUNSO0FBQ0Q7QUFDQSxJQUFJNlYsR0FBb0I7QUFDeEIsSUFBSVUsR0FBa0I7QUFDdEIsSUFBSVksR0FBb0I7IiwKICAibmFtZXMiOiBbIiRhdm9pZFRyaWdnZXIiLCAiY2FtZWxUb0tlYmFiIiwgImN2dF9jc190b19vcyIsICJoYXNWYWx1ZSIsICJpc0FycmF5T3JJdGVyYWJsZSIsICJpc1ZhbCIsICJpc1ZhbHVlVW5pdCIsICJrZWJhYlRvQ2FtZWwiLCAibm9ybWFsaXplR3JpZExheW91dCIsICJub3JtYWxpemVQcmltaXRpdmUiLCAicmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsIiwgImFwcGVhciIsICJkZWNvckhpZGUiLCAiZGVjb3JTaG93IiwgImRpc2FwcGVhciIsICJvYnNlcnZlU3R5bGVUcmVlIiwgInNldFN0eWxlUHJvcGVydHkiLCAiX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCIsICJfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzIiwgIm9wdGlvbnMiLCAibmFtZSIsICJlIiwgIl9fZXhwb3J0UHJvcGVydGllcyIsICJpc01vYmlsZSIsICJjaGVjayIsICJhIiwgImRldGVjdE1vYmlsZSIsICJjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjayIsICJydW5XaGVuSWRsZSQxIiwgImNiIiwgInRpbWVvdXQiLCAiZ2V0T2Zmc2V0UGFyZW50IiwgImVsZW1lbnQiLCAiZ2V0T2Zmc2V0UGFyZW50Q2hhaW4iLCAicGFyZW50cyIsICJjdXJyZW50IiwgInBhcmVudCIsICJpc05lYXJseUlkZW50aXR5IiwgIm1hdHJpeCIsICJlcHNpbG9uIiwgIm1ha2VSQUZDeWNsZSIsICJjb250cm9sIiwgInJBRiIsICJyZXMiLCAiUkFGQmVoYXZpb3IiLCAic2hlZCIsICJST09UIiwgInNldEF0dHJpYnV0ZXNJZk51bGwiLCAiYXR0cnMiLCAidmFsdWUiLCAib2xkIiwgInNldEF0dHJpYnV0ZXMiLCAidGhyb3R0bGVNYXAiLCAic2V0SWRsZUludGVydmFsIiwgImFyZ3MiLCAic3RhdHVzIiwgInIiLCAiYm9yZGVyQm94V2lkdGgiLCAiYm9yZGVyQm94SGVpZ2h0IiwgImNvbnRlbnRCb3hXaWR0aCIsICJjb250ZW50Qm94SGVpZ2h0IiwgIm9uQm9yZGVyT2JzZXJ2ZSIsICJvbkNvbnRlbnRPYnNlcnZlIiwgImRvQ29udGVudE9ic2VydmUiLCAib2JzZXJ2ZXIiLCAiZW50cmllcyIsICJlbnRyeSIsICJjb250ZW50Qm94U2l6ZSIsICJkb0JvcmRlck9ic2VydmUiLCAiYm9yZGVyQm94U2l6ZSIsICJ1cmwiLCAidHlwZSIsICJzb3VyY2UiLCAiaHRtbCIsICJwYXJzZWQiLCAic2V0Q2hlY2tlZCIsICJpbnB1dCIsICJldiIsICJpc1ZhbGlkUGFyZW50IiwgImluZGV4T2YiLCAibm9kZSIsICJNQVRDSCIsICJSRUdFWCIsICJjcmVhdGVFbGVtZW50VmFuaWxsYSIsICJzZWxlY3RvciIsICJjcmVhdGUiLCAibWF0Y2giLCAiY2xhc3NOYW1lIiwgImlzRWxlbWVudCIsICJlbCIsICJpbmNsdWRlU2VsZiIsICJ0YXJnZXQiLCAic2VsIiwgImhhc1BhcmVudCIsICJwYXNzaXZlT3B0cyIsICJhZGRFdmVudCIsICJvcHRzIiwgIndyIiwgInJlbW92ZUV2ZW50IiwgImFkZEV2ZW50cyIsICJyb290IiwgImhhbmRsZXJzIiwgImFkZEV2ZW50c0xpc3QiLCAiZXZlbnRzIiwgImxpc3QiLCAiY2JzIiwgInJlbW92ZUV2ZW50cyIsICJnZXRFdmVudFRhcmdldCIsICJwYXRoIiwgImNvbnRhaW5zT3JTZWxmIiwgImIiLCAiYUVsIiwgImJFbCIsICJhSW5kZXgiLCAiYkluZGV4IiwgIk1PQ0VsZW1lbnQiLCAic2VsZiIsICJob3N0TWF0Y2hlZCIsICJjbG9zZXN0IiwgImhvc3QiLCAiTU9DIiwgImlzSW5Gb2N1cyIsICJzZWxlY3Rvck9yRWxlbWVudCIsICJkaXIiLCAiYWN0aXZlIiwgImlzRm9jdXNlZCIsICJpc0hvdmVyZWQiLCAiYWx0Q25kIiwgImdldFpvb20iLCAiem9vbVZhbHVlc1N5bWJvbCIsICJ6b29tVmFsdWVzIiwgInpvb21PZiIsICJjb250YWluZXIiLCAiY2hhbmdlWm9vbSIsICJzY2FsZSIsICJmaXhlZENsaWVudFpvb20iLCAidW5maXhlZENsaWVudFpvb20iLCAib3JpZW50T2YiLCAicmF3IiwgIm4iLCAiZ2V0Qm91bmRpbmdPcmllbnRSZWN0IiwgIm9yaWVudCIsICJ6b29tIiwgImJveCIsICJuYngiLCAib3JfaSIsICJ2diIsICJzaXplIiwgImxlZnRfIiwgInRvcF8iLCAicmlnaHRfIiwgImJvdHRvbV8iLCAibGVmdCIsICJyaWdodCIsICJ0b3AiLCAiYm90dG9tIiwgIndpZHRoIiwgImhlaWdodCIsICJiYnciLCAiYmJoIiwgImNidyIsICJjYmgiLCAicnVuV2hlbklkbGUiLCAiS0VZQk9BUkRfT1ZFUkxBWV9QWCIsICJjYXBhY2l0b3JLZXlib2FyZEhlaWdodCIsICJjYXBhY2l0b3JLZXlib2FyZEJvdW5kIiwgIndpbmRvd0tleWJvYXJkQm91bmQiLCAidmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQiLCAibmF0aXZlRGlzcGxheSIsICJuYXRpdmVEaXNwbGF5Qm91bmQiLCAibmF0aXZlRGlzcGxheVJlZnJlc2hRdWV1ZWQiLCAiaXNOYXRpdmVDYXBhY2l0b3JIb3N0IiwgImNhcCIsICJyZWFkQ3dzQnJpZGdlIiwgInBhcnNlTmF0aXZlRGlzcGxheSIsICJpbmZvIiwgIndpbmRvd1ciLCAid2luZG93SCIsICJkaXNwbGF5VyIsICJkaXNwbGF5SCIsICJ3IiwgImgiLCAiZGVuc2l0eSIsICJhcHBseU5hdGl2ZURpc3BsYXkiLCAibmV4dCIsICJwcmV2IiwgInNhbWUiLCAidXBkYXRlVlAiLCAicmVmcmVzaE5hdGl2ZURpc3BsYXkiLCAiQnJpZGdlIiwgInF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2giLCAiYmluZE5hdGl2ZURpc3BsYXkiLCAiY2FjaGVkIiwgInZpcnR1YWxLZXlib2FyZCIsICJJTlRFUkFDVElWRV9XSURHRVQiLCAiVklFV1BPUlRfRklUIiwgImVuc3VyZVZpZXdwb3J0SW50ZXJhY3RpdmVXaWRnZXRPdmVybGF5IiwgImhlYWQiLCAibWV0YSIsICJjb250ZW50IiwgImVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkiLCAidmsiLCAiZGVlcEFjdGl2ZUVsZW1lbnQiLCAiaXNJbWVUYXJnZXQiLCAidGFnIiwgImlzQ29sbGFwc2VkQ2FyZXQiLCAibGF5b3V0TG9ja09yaWVudCIsICJsYXlvdXRMb2NrVyIsICJsYXlvdXRMb2NrSCIsICJsYXN0U3RhYmxlS2V5Ym9hcmQiLCAiaXNMYW5kc2NhcGUiLCAicmVhZFBoeXNpY2FsU2NyZWVuIiwgInN3IiwgInNoIiwgImF3IiwgImFoIiwgImxhbmRzY2FwZSIsICJib3hMYW5kc2NhcGUiLCAiY2xhbXBUb1BoeXNpY2FsIiwgInBoeXMiLCAiaW5uZXJXIiwgImlubmVySCIsICJjbGllbnRXIiwgImNsaWVudEgiLCAiY2FwVyIsICJjYXBIIiwgImNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInNhZmVXaWR0aCIsICJzYWZlSGVpZ2h0IiwgInNhZmVMZWZ0IiwgInNhZmVUb3AiLCAicmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInJlYWRMYXlvdXRWaWV3cG9ydCIsICJ2dlciLCAidnZIIiwgInZ2VG9wIiwgInZrSCIsICJ2dk92ZXJsYXAiLCAibmF0aXZlQ2FwIiwgImtleWJvYXJkIiwgImNhbmRpZGF0ZVciLCAiY2FuZGlkYXRlSCIsICJ3aWR0aFN0YWJsZSIsICJlZGl0YWJsZUZvY3VzZWQiLCAiY29hcnNlUG9pbnRlciIsICJzdWRkZW5TaHJpbmsiLCAic2hyaW5rIiwgImV4cGFuZGVkU2VsZWN0aW9uIiwgImxvY2tlZCIsICJrYiIsICJpc0ltZUNocm9tZUxvY2siLCAiY2xzIiwgInBhcmVudE9mIiwgImlzU2Nyb2xscG9ydCIsICJzdHlsZSIsICJveSIsICJmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydCIsICJzdGFydCIsICJpbm5lciIsICJmaW5kSW1lU2Nyb2xscG9ydCIsICJyZWFkQ2FyZXRSZWN0IiwgInJhbmdlIiwgInJlY3RzIiwgInJlY3QiLCAicGluSW1lQ2FyZXRJblNjcm9sbHBvcnQiLCAidmlzaWJsZUJvdHRvbSIsICJvdmVyZmxvdyIsICJwb3J0IiwgInBpblZpc3VhbFZpZXdwb3J0IiwgIm92ZXJsYXlQaW5uaW5nIiwgInJlc2V0Q2hyb21lU2Nyb2xsIiwgInBpbk92ZXJsYXlTY3JvbGwiLCAiaW1lIiwgImJvZHkiLCAic2Nyb2xsSW50b1ZpZXdQYXRjaGVkIiwgInBhdGNoSW1lU2Nyb2xsSW50b1ZpZXciLCAib3JpZyIsICJhcmciLCAicGluSW1lQ2hyb21lIiwgInJlYWRWaXJ0dWFsS2V5Ym9hcmRIZWlnaHRQeCIsICJnZXRBdmFpbFNpemUiLCAibGF5b3V0IiwgInZ2QmxvY2siLCAicGFuZVciLCAicGFuZUgiLCAid2luZG93ZWRXIiwgIndpbmRvd2VkSCIsICJzY3JlZW5XIiwgInNjcmVlbkgiLCAibmF0aXZlU2NhbGUiLCAiYXZhaWxTaXplIiwgImNsYXNzZXMiLCAib3JpZW50YXRpb25OdW1iZXJNYXAiLCAicnVsZSIsICJwcm9wTmFtZSIsICJwcm9wVmFsdWUiLCAiZXhpc3RzIiwgImdldENvcnJlY3RPcmllbnRhdGlvbiIsICJvcmllbnRhdGlvblR5cGUiLCAicGFzc2l2ZU9wdHMkMSIsICJhcHBseUNhcGFjaXRvcktleWJvYXJkSGVpZ2h0IiwgImNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQiLCAiYmluZFdpbmRvd0tleWJvYXJkRXZlbnRzIiwgIm9uU2hvdyIsICJkZXRhaWwiLCAiZnJvbURldGFpbCIsICJiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQiLCAiS2V5Ym9hcmQiLCAiZW5zdXJlVmlld3BvcnRUcmFja2luZyIsICJ3aGVuQW55U2NyZWVuQ2hhbmdlcyIsICJ0aWNraW5nIiwgInVwZGF0ZSIsICJ1bnN1YnNjcmliZXJzIiwgInVuc3ViIiwgImZpeE9yaWVudFRvU2NyZWVuIiwgImN0eCIsICJpbml0VGV4dFN0eWxlIiwgImZvbnRXZWlnaHQiLCAiZm9udFNpemUiLCAiZm9udEZhbWlseSIsICJmb250U3RyZXRjaCIsICJtZWFzdXJlVGV4dCIsICJ0ZXh0IiwgIm1lYXN1cmVJbnB1dEluRm9jdXMiLCAiY29tcHV0ZUNhcmV0UG9zaXRpb24iLCAicG9pbnQiLCAiY3VycmVudFdpZHRoIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCIsICJjbGllbnQiLCAicmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQiLCAibGF5b3V0T3ZlcnJpZGUiLCAiYyIsICJiYXNlIiwgInJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCIsICJncmlkU3lzdGVtIiwgImNsaWVudFBvaW50IiwgIm1vZGUiLCAiY3MiLCAicGwiLCAicHQiLCAicHIiLCAicGIiLCAiY29udGVudFciLCAiY29udGVudEgiLCAiY3NDb29yZCIsICJhbmltYXRlU2hvdyIsICJhbmltYXRlSGlkZSIsICJXYXZ5U2hhcGVkQ2lyY2xlIiwgInN0ZXBzIiwgImFtcGxpdHVkZSIsICJmcmVxIiwgInBvaW50cyIsICJpIiwgImFuZ2xlIiwgInN0ZXAiLCAidmFyaWFudCIsICJmdW5jIiwgIm9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCIsICJvbkJvcmRlck9ic2VydmUkMSIsICJvbkNvbnRlbnRPYnNlcnZlU3ltYm9sIiwgIm9uQ29udGVudE9ic2VydmUkMSIsICJ1bndyYXBGcm9tUXVlcnkiLCAibm9ybWFsaXplU2VsZWN0b3IiLCAiZmFsbGJhY2siLCAic2FmZVF1ZXJ5U2VsZWN0b3JBbGwiLCAic2FmZU1hdGNoZXMiLCAib2JzZXJ2ZUNvbnRlbnRCb3giLCAiY2FsbGJhY2tzIiwgIm9ic2VydmVCb3JkZXJCb3giLCAib2JzZXJ2ZUF0dHJpYnV0ZSIsICJhdHRyaWJ1dGUiLCAib2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IiLCAiYXR0cmlidXRlTGlzdCIsICJzIiwgIm11dGF0aW9uTGlzdCIsICJtdXRhdGlvbiIsICJhZGRlZE5vZGVzIiwgInJlbW92ZWROb2RlcyIsICJvYnNlcnZlQnlTZWxlY3RvciIsICJtdXQiLCAib2JzIiwgInVud3JhcE5vZGVzQnlTZWxlY3RvciIsICJub2RlcyIsICIkbm9kZXMiLCAib2JSZWYiLCAiaGFuZGxlTXV0YXRpb24iLCAiaGFuZGxlQ29tZSIsICJoYW5kbGVPdXRDb21lIiwgImhhbmRsZUZvY3VzQ2xpY2siLCAiZmFjdG9ycyIsICJzZWxlY3RlZCIsICJib3VuZEJlaGF2aW9ycyIsICJiaW5kQmVoYXZpb3IiLCAiYmVoU2V0IiwgImJlaGF2aW9yIiwgInJlZmxlY3RCZWhhdmlvcnMiLCAiYmVoYXZpb3JzIiwgIm5hbWVkU3RvcmVNYXBzU3ltYm9sIiwgIm5hbWVkU3RvcmVNYXBzIiwgImdldFN0b3Jlc09mRWxlbWVudCIsICJtYXAiLCAiRSIsICJtIiwgImlzV2Vha0NvbXBhdGlibGUiLCAiYmluZFN0b3JlIiwgIm9iaiIsICJ3ZWFrTWFwIiwgInJlZmxlY3RTdG9yZXMiLCAic3RvcmVzIiwgInJlZmxlY3RNaXhpbnMiLCAibWl4aW5zIiwgIm1peGluU2V0IiwgImJvdW5kTWl4aW5TZXQiLCAiYmluZE1peGlucyIsICJnZXRFbGVtZW50UmVsYXRlZCIsICJtaXhpbiIsICJtaXhTZXQiLCAid2VsIiwgIm1peGluRWxlbWVudHMiLCAiYm91bmRNaXhpblNldFN5bWJvbCIsICJtaXhpbkVsZW1lbnRzU3ltYm9sIiwgIm1peGluUmVnaXN0cnlTeW1ib2wiLCAibWl4aW5SZWdpc3RyeSIsICJtaXhpbk5hbWVzcGFjZVN5bWJvbCIsICJtaXhpbk5hbWVzcGFjZSIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXMiLCAibmFtZXMiLCAicm9vdHMiLCAiYWRkUm9vdCIsICJ1cGRhdGVBbGxNaXhpbnMiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsIiwgImVsZW1lbnRzIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMiLCAibmFtZVJlZ2lzdHJ5RiIsICJrZXkiLCAicmVnaXN0ZXJNaXhpbiIsICJET01NaXhpbiIsICJ3RWxlbWVudCIsICJ3U2VsZiIsICJyZWxhdGVkIiwgImhhbmRsZUhpZGRlbiIsICJfIiwgInZpc2libGUiLCAiJHJlZiIsICJpc1Zpc2libGUiLCAiaGFuZGxlUHJvcGVydHkiLCAicHJvcCIsICJ2YWwiLCAiaGFuZGxlRGF0YXNldCIsICJkYXRhc2V0UmVmIiwgImRlbGV0ZVN0eWxlUHJvcGVydHkiLCAiaGFuZGxlU3R5bGVDaGFuZ2UiLCAic3R5bGVSZWYiLCAiaGFuZGxlQXR0cmlidXRlIiwgImp1bmN0aW9uVG9Cb3giLCAiSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyIsICJKVU5DVElPTl9EUkFHX0VWRU5UUyIsICJKVU5DVElPTl9SRVNJWkVfRVZFTlRTIiwgIm1peGluRGlzcG9zZXJzU3ltYm9sIiwgIm1peGluRGlzcG9zZXJzIiwgInB1c2hEaXNwb3NhYmxlIiwgIm1peGluTmFtZSIsICJmbiIsICJydW5EaXNwb3NlcnMiLCAicGFyc2VQeFZhciIsICJxdWVyeUhhbmRsZSIsICJhdHRyIiwgImZvdW5kIiwgIkp1bmN0aW9uU2VsZWN0TWl4aW4iLCAid0VsIiwgIm92ZXJsYXkiLCAibG9jYWxQb2ludCIsICJhcHBseU92ZXJsYXkiLCAib25Eb3duIiwgIm9uTW92ZSIsICJlbmQiLCAib25VcCIsICJvbkNhbmNlbCIsICJKdW5jdGlvbkRyYWdNaXhpbiIsICJwcmV2aW91c1RyYW5zZm9ybSIsICJoYW5kbGUiLCAiZHJhZ2dpbmciLCAic3RhcnRYIiwgInN0YXJ0WSIsICJiYXNlWCIsICJiYXNlWSIsICJkeCIsICJkeSIsICJueCIsICJueSIsICJKdW5jdGlvblJlc2l6ZU1peGluIiwgInJlc2l6aW5nIiwgInN4IiwgInN5IiwgIm1pblciLCAibWluSCIsICJudyIsICJuaCJdCn0K

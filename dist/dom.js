import { $avoidTrigger as P, camelToKebab as gt, cvt_cs_to_os as st, hasValue as L, isArrayOrIterable as Ct, isVal as Tt, isValueUnit as Nt, kebabToCamel as vt, normalizeGridLayout as Vt, normalizePrimitive as rt, resolveLocalPointToGridCell as jt } from "@fest-lib/core";
import { appear as Pt, decorHide as Lt, decorShow as Ot, disappear as Wt, observeStyleTree as Ht, setStyleProperty as C } from "@fest-lib/style-lib";
export * from "@fest-lib/style-lib";
var Rt = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), ct = globalThis[Rt] ??= /* @__PURE__ */ new Set();
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
].forEach((t) => {
  if (typeof CSS > "u" || typeof CSS?.registerProperty != "function") return;
  const e = String(t?.name || "").trim();
  if (!(!e || ct.has(e)))
    try {
      CSS.registerProperty(t);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      ct.add(e);
    }
});
var Ae = () => {
}, ke = () => {
  let t = navigator?.userAgentData?.mobile || !1;
  return ((e) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), t;
}, ze = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, Ft = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), ut = (t, e = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(t, { timeout: e }) : setTimeout(() => t(Ft()), 0), Bt = (t) => t?.offsetParent ?? t?.host, Ce = (t) => {
  const e = [];
  let n = t;
  for (; n; ) {
    const r = Bt(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && e.push(n);
  }
  return e;
}, Te = (t, e = 1e-6) => Math.abs(t.a - 1) < e && Math.abs(t.b) < e && Math.abs(t.c) < e && Math.abs(t.d - 1) < e && Math.abs(t.e) < e && Math.abs(t.f) < e, _t = () => {
  const t = {
    canceled: !1,
    rAFs: /* @__PURE__ */ new Set(),
    last: null,
    cancel() {
      return this.canceled = !0, cancelAnimationFrame(this.last), this;
    },
    shedule(e) {
      return this.rAFs.add(e), this;
    }
  };
  return (async () => {
    for (; !t?.canceled; )
      await Promise.all((t?.rAFs?.values?.() ?? [])?.map?.((e) => Promise.try(e)?.catch?.(console.warn.bind(console)))), t.rAFs?.clear?.(), typeof requestAnimationFrame < "u" ? await new Promise((e) => {
        t.last = requestAnimationFrame(e);
      }) : await new Promise((e) => {
        setTimeout(e, 16);
      });
  })(), t;
}, Ne = (t = _t()) => (e) => t.shedule(e), Ve = typeof document < "u" ? document?.documentElement : null, je = (t, e = {}) => {
  if (!(!e || typeof e != "object" || !t))
    return Array.from(Object.entries(e)).map(([n, r]) => {
      const i = t.getAttribute(n);
      r == null ? t.removeAttribute(n) : r != i && t.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, Pe = (t, e = {}) => Array.from(Object.entries(e)).map(([n, r]) => {
  r == null ? t.removeAttribute(n) : t.setAttribute(n, r ?? t.getAttribute(n));
}), It = /* @__PURE__ */ new Map(), Le = (t, e = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return ut(async () => {
    if (!(!t || typeof t != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(t, ...n), new Promise((i) => setTimeout(i, e))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => ut(i, e)), new Promise((i) => setTimeout(i, e))]);
      r.cancel = () => {
      };
    }
  }, e), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    It.forEach((t) => t?.()), await new Promise((t) => requestAnimationFrame(t));
});
var R = /* @__PURE__ */ Symbol("@border-box-width"), F = /* @__PURE__ */ Symbol("@border-box-height"), B = /* @__PURE__ */ Symbol("@content-box-width"), _ = /* @__PURE__ */ Symbol("@content-box-height"), lt = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), Oe = (t, e = () => {
}) => {
  if (t instanceof HTMLElement && !dt.has(t)) {
    t[B] = t.clientWidth, t[_] = t.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const o = i.contentBoxSize[0];
        o && (t[B] = Math.min(o.inlineSize, t.clientWidth), t[_] = Math.min(o.blockSize, t.clientHeight), e?.(t));
      }
    });
    dt.set(t, n), n.observe(t?.element ?? t, { box: "content-box" });
  }
}, We = (t, e = () => {
}) => {
  if (t instanceof HTMLElement && !lt.has(t)) {
    t[R] = t.offsetWidth, t[F] = t.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const o = i.borderBoxSize[0];
        o && (t[R] = Math.min(o.inlineSize, t.offsetWidth), t[F] = Math.min(o.blockSize, t.offsetHeight), e?.(t));
      }
    });
    lt.set(t, n), n.observe(t?.element ?? t, { box: "border-box" });
  }
}, He = (t, ...e) => URL.createObjectURL(new Blob(e, { type: t })), Re = (t, e = "text/html") => {
  const n = new DOMParser().parseFromString(t, e);
  return n.querySelector("template") ?? n.querySelector("*");
}, Fe = (t, e, n) => {
  e != null && t.checked != e && (t?.type == "checkbox" || t?.type == "radio" && !t?.checked ? (t?.click?.(), n?.preventDefault?.()) : (t.checked = !!e, t?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, Be = (t) => t != null && t instanceof HTMLElement && !(t instanceof DocumentFragment || t instanceof HTMLBodyElement) ? t : null, _e = (t, e) => t == null || e == null ? -1 : Array.from(t?.childNodes ?? [])?.indexOf?.(e) ?? -1, Ie = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", $e = `^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, Ze = (t) => {
  if (t == ":fragment:") return document.createDocumentFragment();
  const e = document.createElement.bind(document);
  for (var n = e("div"), r, i = ""; t && (r = t.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = e(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), t = t.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, qe = (t) => t != null && (t instanceof Node || t instanceof Text || t instanceof Element || t instanceof Comment || t instanceof HTMLElement || t instanceof DocumentFragment) ? t : null, De = (t, e) => {
  const n = typeof e == "string" ? e.trim() : "";
  if (!n || !t) return t ?? null;
  try {
    return t.querySelector(n) ?? (t.matches(n) ? t : null);
  } catch {
    return null;
  }
}, q = (t, e) => {
  for (; t; ) {
    if (!(t?.element ?? t)) return !1;
    if ((t?.element ?? t) === (e?.element ?? e)) return !0;
    t = t.parentElement ?? (t.parentNode == t?.getRootNode?.({ composed: !0 }) ? t?.getRootNode?.({ composed: !0 })?.host : t?.parentNode);
  }
}, bt = {};
function p(t, e, n, r = bt) {
  t?.addEventListener?.(e, n, r);
  const i = typeof t == "object" || typeof t == "function" && !t?.deref ? new WeakRef(t) : t;
  return () => i?.deref?.()?.removeEventListener?.(e, n, r);
}
function ft(t, e, n, r = bt) {
  t?.removeEventListener?.(e, n, r);
}
var Xe = (t, e) => (t = t instanceof WeakRef ? t.deref() : t, [...Object.entries(e)].map?.(([n, r]) => Array.isArray(r) ? p(t, n, ...r) : p(t, n, r))), Ye = (t, e) => {
  if (e) {
    let n = e;
    return e instanceof Map ? n = [...e.entries()] : n = [...Object.entries(e)], n.map(([r, i]) => ((Ct(i) ? [...i] : i) ?? [])?.map?.((o) => p(t, r, o)));
  }
}, Ue = (t, e) => (t = t instanceof WeakRef ? t.deref() : t, [...Object.entries(e)].map?.(([n, r]) => Array.isArray(r) ? ft(t, n, ...r) : ft(t, n, r))), Ke = (t) => {
  if (!t) return null;
  if (t?.composedPath && typeof t.composedPath == "function") {
    const n = t.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const e = t?.target;
  return e instanceof HTMLElement || e instanceof Element ? e : null;
}, Je = (t, e, n) => {
  if (e == null || !(e instanceof Node) && e?.element == null) return !1;
  if (t == e || (t?.element ?? t) == (e?.element ?? e)) return !0;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const r = n.composedPath(), i = t?.element ?? t, o = e?.element ?? e;
    if (r.includes(i) && r.includes(o)) {
      const s = r.indexOf(i), a = r.indexOf(o);
      if (a >= 0 && s >= 0 && a < s) return !0;
    }
  }
  return !!(t?.contains?.(e?.element ?? e) || t?.getRootNode({ composed: !0 })?.host == (e?.element ?? e));
}, K = (t, e, n) => {
  const r = typeof e == "string" ? e.trim() : "";
  if (!r) return t ?? null;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const a = n.composedPath();
    for (const l of a) if (l instanceof HTMLElement || l instanceof Element) try {
      if (l.matches?.(r)) return l;
    } catch {
    }
  }
  let i = null, o = null, s = null;
  try {
    i = t?.matches?.(r) ? t : null;
    const a = (t?.getRootNode({ composed: !0 }) ?? t?.parentElement?.getRootNode({ composed: !0 }))?.host;
    o = a?.matches?.(r) ? a : null, s = t?.closest?.(r) ?? i?.closest?.(r) ?? o?.closest?.(r) ?? null;
  } catch {
  }
  return i ?? s ?? o;
}, Ge = (t, e) => !!K(t, e), Qe = (t, e, n = "parent") => {
  if (!t || t.checkVisibility && !t.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !t.checkVisibility && t.offsetParent === null && t.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === t || q(r, t), o = t.matches(":hover");
  if (!i && !o && !e) return !1;
  if (e) {
    if (typeof e == "string") {
      if (n === "parent") return !!K(t, e);
      {
        const s = i ? r : t.querySelector(":hover") || t, a = !!K(s, e);
        return t?.querySelector?.(e) != null || t?.matches?.(e) || a;
      }
    } else if (e instanceof HTMLElement)
      return n === "parent" ? q(t, e) || !1 : q(e, t) || !1;
  }
  return !0;
}, tn = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, $t = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Zt = globalThis[$t] ??= /* @__PURE__ */ new WeakMap(), qt = (t = document.documentElement) => Zt.getOrInsertComputed(t, () => {
  const e = (t?.matches?.(".ui-orientbox") ? t : null) || t?.closest?.(".ui-orientbox") || document.body;
  if (e?.zoom) return e?.zoom || 1;
  if (t?.currentCSSZoom) return t?.currentCSSZoom || 1;
}), en = (t = 1) => (document.documentElement.style.setProperty("--scaling", t), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: t },
  bubbles: !0,
  cancelable: !0
})), t), nn = (t = document.documentElement) => (t?.currentCSSZoom != null ? 1 : qt(t)) || 1, J = (t = document.documentElement) => (t?.currentCSSZoom == null ? 1 : t?.currentCSSZoom) || 1, A = (t = document.documentElement) => {
  const e = (t?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? t : null) || t?.closest?.('[orient], [data-mixin="ui-orientbox"]') || t;
  if (e?.hasAttribute?.("orient")) return parseInt(e?.getAttribute?.("orient") || "0") || 0;
  if (e?.orient != null && Number.isFinite(Number(e.orient))) return Number(e.orient) || 0;
  try {
    const n = e?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && e ? getComputedStyle(e).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, rn = (t, e = null) => {
  const n = J(t) || 1, r = t?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, o = e ?? (A(t) || 0), s = typeof window < "u" ? window.visualViewport : null, a = [((s?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((s?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [l, h] = st([i.left, i.top], a, o), [d, g] = st([i.right, i.bottom], a, o), [f, u] = o == 0 || o == 3 ? [l, d] : [d, l], [c, m] = o == 0 || o == 1 ? [h, g] : [g, h], [w, zt] = o % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: f,
    top: c,
    right: u,
    bottom: m,
    width: w,
    height: zt
  };
}, on = (t, e = null) => (e ?? A(t)) % 2 ? t[F] ?? t?.clientHeight : t[R] ?? t?.clientWidth, an = (t, e = null) => (e ?? A(t)) % 2 ? t[R] ?? t?.clientWidth : t[F] ?? t?.clientHeight, sn = (t, e = null) => (e ?? A(t)) % 2 ? t[_] ?? t?.clientHeight : t[B] ?? t?.clientWidth, cn = (t, e = null) => (e ?? A(t)) % 2 ? t[B] ?? t?.clientWidth : t[_] ?? t?.clientHeight, Dt = (t, e = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(t, { timeout: e }) : setTimeout(() => t({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), D = 80, yt = () => {
  try {
    return globalThis.navigator?.virtualKeyboard ?? null;
  } catch {
    return null;
  }
}, G = () => {
  const t = yt();
  if (t)
    try {
      t.overlaysContent !== !0 && (t.overlaysContent = !0);
    } catch {
    }
}, it = (t) => {
  if (!t || !(t instanceof HTMLElement)) return !1;
  if (t.isContentEditable) return !0;
  const e = t.tagName;
  if (e === "TEXTAREA" || e === "SELECT") return !0;
  if (e !== "INPUT") return !1;
  const n = String(t.type || "text").toLowerCase();
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
}, ht = "", x = 0, b = 0, pt = (t, e, n = 0, r = 0) => {
  const i = Math.max(0, Number(t) || 0), o = Math.max(0, Number(e) || 0), s = Number(n) || 0, a = Number(r) || 0;
  return {
    left: s,
    top: a,
    right: s + i,
    bottom: a + o,
    width: i,
    height: o
  };
}, un = () => {
  if (typeof window > "u") return pt(0, 0);
  const t = typeof document < "u" ? document.documentElement : null;
  return pt(Number(t?.clientWidth) || Number(window.innerWidth) || 0, Number(t?.clientHeight) || Number(window.innerHeight) || 0);
}, wt = () => {
  if (typeof window > "u") return {
    width: 0,
    height: 0,
    keyboard: 0
  };
  const t = window.visualViewport, e = Number(window.innerWidth) || 0, n = Number(window.innerHeight) || 0, r = Number(t?.width) || 0, i = Number(t?.height) || 0, o = Number(t?.offsetTop) || 0, s = Number(yt()?.boundingBox?.height) || 0, a = n > 0 && i > 0 ? n - i - o : 0, l = s >= D ? s : a >= D ? a : 0, h = Math.max(e, r), d = Math.max(n, i + o, l > 0 ? i + l : 0), g = typeof matchMedia < "u" && matchMedia("(orientation: landscape)")?.matches ? "l" : "p";
  g !== ht && (ht = g, x = 0, b = 0);
  const f = b > 0 && b - d >= D;
  return l > 0 || it(document.activeElement) || f ? (x = Math.max(h, x), b = Math.max(d, b)) : (x = h, b = d), {
    width: x || h,
    height: b || d,
    keyboard: l
  };
}, mt = () => {
  typeof window > "u" || wt().keyboard <= 0 && !it(document.activeElement) || (window.scrollY || document.documentElement.scrollTop || document.body?.scrollTop) && window.scrollTo(0, 0);
}, xt = () => {
  G();
  const t = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, e = typeof window < "u" ? window.visualViewport : null, n = wt(), r = {
    "--vv-width": `${e?.width ?? (typeof window < "u" ? window.innerWidth : 0)}px`,
    "--vv-height": `${e?.height ?? (typeof window < "u" ? window.innerHeight : 0)}px`,
    "--vv-offset-left": `${e?.offsetLeft ?? 0}px`,
    "--vv-offset-top": `${e?.offsetTop ?? 0}px`,
    "--vv-scale": String(e?.scale ?? 1),
    "--lv-width": `${n.width}px`,
    "--lv-height": `${n.height}px`,
    "--keyboard-overlay-height": `${n.keyboard}px`
  };
  if (typeof document < "u" && document.documentElement.toggleAttribute("data-vk-open", n.keyboard > 0), typeof screen < "u") {
    const i = screen?.availWidth + "px", o = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": t ? o : i,
      "--avail-height": t ? i : o,
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
}, Q = xt(), ln = [[":root, :host, :scope", Q]], Xt = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, Yt = (t) => {
  const e = document.documentElement;
  Object.assign(Q, xt()), Object.entries(Q).forEach(([n, r]) => {
    const i = e?.style?.getPropertyValue(n);
    (!i || i != r) && e?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, Ut = () => {
  let t = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? t = t.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (t = t.replace("portrait", "landscape"))), t;
}, W = { passive: !0 }, Kt = (t) => {
  let e = !1;
  const n = () => {
    e || (requestAnimationFrame(() => {
      Yt(), t(), e = !1;
    }), e = !0);
  }, r = [];
  return r.push(p(navigator?.virtualKeyboard, "geometrychange", n, W)), r.push(p(window?.visualViewport, "scroll", () => {
    mt(), n();
  }, W)), r.push(p(window?.visualViewport, "resize", n, W)), r.push(p(screen?.orientation, "change", n)), r.push(p(window, "resize", n)), r.push(p(document?.documentElement, "fullscreenchange", n)), r.push(p(document, "DOMContentLoaded", n)), r.push(p(matchMedia("(orientation: portrait)"), "change", n)), r.push(p(matchMedia("(orientation: landscape)"), "change", n)), r.push(p(document, "focusin", () => {
    G(), it(document.activeElement) && (x = Math.max(x, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0), b = Math.max(b, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0)), mt(), n();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(document, "focusout", n, W)), G(), n(), Dt(() => n(), 100), () => r.forEach((i) => i());
}, dn = (t) => {
  if (!t?.classList?.contains?.("native-portrait-optimized"))
    return t?.classList?.add?.("native-portrait-optimized"), Kt(() => {
      const e = Xt?.[Ut()] ?? 0;
      t.orient = e, t.setAttribute?.("orient", String(e)), t.style?.setProperty?.("--orient", String(e));
    });
}, M = new OffscreenCanvas(1, 1).getContext("2d"), St = (t, e) => {
  const n = getComputedStyle(t, "");
  if (e && n) {
    const r = n.getPropertyValue("font-weight") || "normal", i = n.getPropertyValue("font-size") || "16px", o = n.getPropertyValue("font-family") || "Times New Roman", s = n.getPropertyValue("font-stretch") || "normal";
    try {
      e.fontStretch = s.includes("%") ? "normal" : s;
    } catch {
    }
    try {
      e.letterSpacing = n.getPropertyValue("letter-spacing") || "normal";
    } catch {
    }
    try {
      e.fontKerning = n.getPropertyValue("font-kerning") || "auto";
    } catch {
    }
    try {
      e.fontVariantCaps = n.getPropertyValue("font-variant-caps") || "normal";
    } catch {
    }
    try {
      e.font = `${r} ${i} ${o}`;
    } catch {
    }
  }
}, Jt = (t, e) => {
  if (M) {
    St(e, M);
    try {
      return M.measureText(t);
    } catch {
    }
  }
  return { width: null };
}, fn = (t) => {
  const e = t.value.slice(0, t.selectionEnd || 0);
  return Jt(e, t);
}, Gt = (t, e) => {
  const n = t?.value || "";
  if (M) {
    St(t, M);
    let r = 0;
    for (let i = 0; i < n.length; i++) {
      if (r = M.measureText(n.slice(0, i))?.width, r == null) return n.length;
      if (r != null && r >= e[0]) return Math.max(i - 1, 0);
    }
  }
  return n.length;
}, hn = (t, e) => {
  const n = t.getBoundingClientRect(), r = [e[0] - n.left / J(), e[1] - n.top / J()];
  return Gt(t, r);
}, Qt = (t, e) => {
  const n = parseInt(t.getAttribute("data-grid-columns") || "", 10), r = parseInt(t.getAttribute("data-grid-rows") || "", 10), i = Vt(e ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, pn = (t, e, n, r = "floor") => {
  if (!t) return [0, 0];
  const i = t.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const o = Qt(t, n?.layout), s = A(t), a = globalThis.getComputedStyle?.(t), l = parseFloat(a?.paddingLeft) || 0, h = parseFloat(a?.paddingTop) || 0, d = parseFloat(a?.paddingRight) || 0, g = parseFloat(a?.paddingBottom) || 0, f = Math.max(1, (i.width || t.clientWidth || 1) - l - d), u = Math.max(1, (i.height || t.clientHeight || 1) - h - g), c = [(e?.[0] || 0) - i.left - l, (e?.[1] || 0) - i.top - h];
  return jt(c, [f, u], o, s, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, mn = (t) => Pt(t, Ot), gn = (t) => Wt(t, Lt), vn = (t = 100, e = 0.05, n = 8) => {
  const r = [];
  for (let a = 0; a < t; a++) r.push(a / t);
  const i = (a) => `calc(${a}rad * pi * 2)`, o = (a) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(a)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, s = (a) => [`calc(calc(0.5 + calc(cos(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": e,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((a) => s(a).join(" ")).join(", ")})`
  };
}, te = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), k = globalThis[te] ??= /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), z = globalThis[ee] ??= /* @__PURE__ */ new WeakMap(), O = (t) => (typeof t?.current == "object" && (t = t?.element ?? t?.current ?? (typeof t?.self == "object" ? t?.self : null) ?? t), t), Z = (t, e = "*") => typeof t != "string" ? e : t.trim() || e, T = (t, e) => {
  if (!t || typeof t.querySelectorAll != "function") return [];
  const n = Z(e, "");
  if (!n) return [];
  try {
    return Array.from(t.querySelectorAll(n) || []);
  } catch {
    return [];
  }
}, tt = (t, e) => {
  if (!t || typeof t.matches != "function") return !1;
  const n = Z(e, "");
  if (!n) return !1;
  try {
    return !!t.matches(n);
  } catch {
    return !1;
  }
}, bn = (t, e) => {
  if (!z.has(t = O(t))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.contentBoxSize) {
        const s = o.contentBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    e?.({
      inlineSize: t.clientWidth,
      blockSize: t.clientHeight
    }, r), z.set(t, n), (t?.element ?? t) instanceof Node && r.observe(t?.element ?? t, { box: "content-box" });
  }
  return z.get(t)?.push?.(e), { disconnect: () => z.get(t)?.splice?.(z.get(t)?.indexOf(e) || -1, 1) };
}, yn = (t, e) => {
  if (!k.has(t = O(t))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.borderBoxSize) {
        const s = o.borderBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    e?.({
      inlineSize: t.offsetWidth,
      blockSize: t.offsetHeight
    }, r), k.set(t, n), (t?.element ?? t) instanceof Node && r.observe(t?.element ?? t, { box: "border-box" });
  }
  return k.get(t)?.push?.(e), { disconnect: () => k.get(t)?.splice?.(k.get(t)?.indexOf(e) || -1, 1) };
}, wn = (t, e, n) => {
  if (typeof t?.selector == "string") return Et(t, t?.selector, e, n);
  const r = new Set((e.split(",") || [e]).map((o) => o.trim())), i = new MutationObserver((o, s) => {
    for (const a of o) a.attributeName && r.has(a.attributeName) && n(a, s);
  });
  return (t?.element ?? t) instanceof Node && i.observe(t = O(t), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((o) => n({
    target: t,
    type: "attributes",
    attributeName: o,
    oldValue: t?.getAttribute?.(o)
  }, i)), i;
}, Et = (t, e, n, r) => {
  const i = Z(e), o = new Set([...n.split(",") || [n]].map((a) => a.trim())), s = new MutationObserver((a, l) => {
    for (const h of a) if (h.type == "childList") {
      const d = Array.from(h.addedNodes) || [], g = Array.from(h.removedNodes) || [];
      d.push(...Array.from(h.addedNodes || []).flatMap((f) => T(f, i))), g.push(...Array.from(h.removedNodes || []).flatMap((f) => T(f, i))), [...new Set(d)].filter((f) => tt(f, i))?.map?.((f) => {
        o.forEach((u) => {
          r({
            target: f,
            type: "attributes",
            attributeName: u,
            oldValue: f?.getAttribute?.(u)
          }, l);
        });
      });
    } else tt(h.target, i) && h.attributeName && o.has(h.attributeName) && r(h, l);
  });
  return s.observe(t = O(t), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...o],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), T(t, i).map((a) => o.forEach((l) => r({
    target: a,
    type: "attributes",
    attributeName: l,
    oldValue: a?.getAttribute?.(l)
  }, s))), s;
}, ne = (t, e = "*", n = (r, i) => {
}) => {
  const r = Z(e), i = (u) => {
    const c = Array.from(u || []) || [];
    return c.push(...Array.from(u || []).flatMap((m) => T(m, r))), [...Array.from(new Set(c).values())].filter((m) => tt(m, r));
  };
  let o = null;
  const s = (u) => {
    const c = o?.deref?.(), m = i(u.addedNodes), w = i(u.removedNodes);
    (m.length > 0 || w.length > 0) && n?.({
      type: u.type,
      target: u.target,
      attributeName: u.attributeName,
      attributeNamespace: u.attributeNamespace,
      nextSibling: u.nextSibling,
      oldValue: u.oldValue,
      previousSibling: u.previousSibling,
      addedNodes: m,
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
    return t.addEventListener("pointerover", a, d), t.addEventListener("pointerout", l, d), t.addEventListener("pointerdown", a, d), t.addEventListener("pointerup", l, d), t.addEventListener("pointercancel", l, d), { disconnect: () => {
      t.removeEventListener("pointerover", a, d), t.removeEventListener("pointerout", l, d), t.removeEventListener("pointerdown", a, d), t.removeEventListener("pointerup", l, d), t.removeEventListener("pointercancel", l, d);
    } };
  if (r?.includes?.(":hover"))
    return t.addEventListener("pointerover", a, d), t.addEventListener("pointerout", l, d), { disconnect: () => {
      t.removeEventListener("pointerover", a, d), t.removeEventListener("pointerout", l, d);
    } };
  if (r?.includes?.(":active"))
    return t.addEventListener("pointerdown", a, d), t.addEventListener("pointerup", l, d), t.addEventListener("pointercancel", l, d), { disconnect: () => {
      t.removeEventListener("pointerdown", a, d), t.removeEventListener("pointerup", l, d), t.removeEventListener("pointercancel", l, d);
    } };
  if (r?.includes?.(":focus") && r?.includes?.(":focus-within") && r?.includes?.(":focus-visible"))
    return t.addEventListener("focusin", a, d), t.addEventListener("focusout", l, d), t.addEventListener("click", h, d), { disconnect: () => {
      t.removeEventListener("focusin", a, d), t.removeEventListener("focusout", l, d), t.removeEventListener("click", h, d);
    } };
  const g = new MutationObserver((u, c) => {
    for (const m of u) m.type == "childList" && s(m);
  });
  o = new WeakRef(g), (t?.element ?? t) instanceof Node && g.observe(t = O(t), {
    childList: !0,
    subtree: !0
  });
  const f = T(t, r);
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, g), g;
}, Mt = /* @__PURE__ */ new WeakMap(), re = (t, e, n) => (new WeakRef(t), e.has(n) || e.add(n), t), xn = (t, e) => {
  if (t) {
    if (e) {
      const n = Mt.getOrInsert(t, /* @__PURE__ */ new Set());
      [...e?.values?.() || []].map((r) => re(t, n, r));
    }
    return t;
  }
}, ie = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), V = globalThis[ie] ??= /* @__PURE__ */ new Map(), oe = (t, e) => {
  const n = [...t.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(e)])?.filter?.(([r, i]) => !!i) || []);
}, ae = (t) => (typeof t == "object" || typeof t == "function") && t != null, se = (t, e, n) => {
  if (!ae(t) && t != null) return t;
  let r = V.get(e);
  return r || (r = /* @__PURE__ */ new WeakMap(), V.set(e, r)), !r.has(t) && t != null && r.set(t, n), t;
}, Sn = (t, e) => {
  if (!(!t || !e)) {
    for (const [n, r] of e.entries()) se(t, n, r);
    return t;
  }
}, En = (t, e) => {
  if (t) {
    if (e) {
      const n = y?.get?.(t) ?? /* @__PURE__ */ new WeakSet();
      y?.has?.(t) || y?.set?.(t, n), [...e?.values?.() || []].map((r) => ce(t, r, n));
    }
    return t;
  }
}, N = (t) => ({
  storeSet: oe(V, t),
  mixinSet: y?.get?.(t),
  behaviorSet: Mt?.get?.(t)
}), ce = (t, e, n) => {
  const r = new WeakRef(t);
  return n ||= y?.get?.(t), n?.has?.(e) || (n?.add?.(e), E?.get?.(e)?.add?.(t), e.name && t?.setAttribute?.("data-mixin", [...t?.getAttribute?.("data-mixin")?.split?.(" ") || [], e.name].filter((i) => !!i).join(" ")), e?.connect?.(r, e, N(t))), t;
}, ue = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), y = globalThis[ue] ??= /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), E = globalThis[le] ??= /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), j = globalThis[de] ??= /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), I = globalThis[fe] ??= /* @__PURE__ */ new WeakMap(), At = (t, e) => {
  typeof e == "string" && (e = j?.get?.(e));
  const n = /* @__PURE__ */ new Set([...t?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((s) => j?.get?.(s)).filter((s) => !!s)), i = y?.get?.(t) ?? /* @__PURE__ */ new WeakSet();
  E?.has?.(e) || E?.set?.(e, /* @__PURE__ */ new WeakSet()), y?.has?.(t) || y?.set?.(t, i);
  const o = new WeakRef(t);
  i?.has?.(e) || (r.has(e) || e?.disconnect?.(o, e, N(t)), (r.has(e) || !E?.get?.(e)?.has?.(t)) && (e?.connect?.(o, e, N(t)), n.add(I?.get?.(e)), i?.add?.(e), t?.setAttribute?.("data-mixin", [...n].filter((s) => !!s).join(" "))), E?.get?.(e)?.add?.(t)), i?.has?.(e) && (r.has(e) || (i?.delete?.(e), e?.disconnect?.(o, e, N(t))));
}, et = /* @__PURE__ */ new Set(), he = (t = typeof document < "u" ? document : null) => {
  if (t)
    return et?.has?.(t) || (et?.add?.(t), Et(t, "*", "data-mixin", (e) => nt(e.target)), ne(t, "[data-mixin]", (e) => {
      for (const n of e.addedNodes) n instanceof HTMLElement && nt(n);
    }), Ht(t)), t;
}, nt = (t) => {
  const e = /* @__PURE__ */ new Set([...t?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...e].map((n) => j?.get?.(n)).filter((n) => !!n))].map?.((n) => At(t, n));
}, pe = (t, e) => {
  t.forEach((n) => e ? At(n, e) : nt(n));
}, me = (t) => {
  for (const e of et) pe(e?.querySelectorAll?.("[data-mixin]"), t);
}, ge = new FinalizationRegistry((t) => {
  j?.delete?.(t);
}), ve = (t, e) => {
  if (!I?.has?.(e)) {
    const n = t?.trim?.();
    n && (I?.set?.(e, n), j?.set?.(n, e), ge?.register?.(e, n), me(e));
  }
};
he(typeof document < "u" ? document : null);
var ot = class {
  constructor(t = null) {
    t && ve(t, this);
  }
  connect(t, e, n) {
    return this;
  }
  disconnect(t, e, n) {
    return this;
  }
  storeForElement(t) {
    return V.get(this.name || "")?.get?.(t);
  }
  relatedForElement(t) {
    return N(t);
  }
  get elements() {
    return E?.get?.(this);
  }
  get storage() {
    return V?.get?.(this.name || "");
  }
  get name() {
    return I?.get?.(this);
  }
}, Mn = (t, e, n) => {
  const r = n;
  L(n) && (n = n.value);
  const i = (n = rt(n)) != null && n !== !1;
  return P(r, () => {
    t instanceof HTMLInputElement ? t.hidden = !i : i ? t?.removeAttribute?.("data-hidden") : t?.setAttribute?.("data-hidden", "");
  }), t;
}, An = (t, e, n) => {
  if (!(e = typeof e == "string" ? vt(e) : e) || !t || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(e || "") != -1) return t;
  const r = n;
  return L(n) && (n = n.value), t?.[e] === n || t?.[e] !== n && P(r, () => {
    n != null ? t[e] = n : delete t[e];
  }), t;
}, kn = (t, e, n) => {
  const r = t?.dataset;
  if (!e || !t || !r) return t;
  const i = n;
  return L(n) && (n = n?.value), e = vt(e), r?.[e] === (n = rt(n)) || (n == null || n === !1 ? delete r[e] : P(i, () => {
    typeof n != "object" && typeof n != "function" ? r[e] = String(n) : delete r[e];
  })), t;
}, be = (t, e) => t.style.removeProperty(gt(e)), zn = (t, e, n) => {
  const r = t?.style;
  return !e || typeof e != "string" || !t || !r || P(n, () => {
    Tt(n) || L(n) || Nt(n) ? C(t, e, n) : n == null && be(t, e);
  }), t;
}, Cn = (t, e, n) => {
  if (!e || !t) return t;
  const r = n;
  return L(n) && (n = n.value), e = gt(e), t?.getAttribute?.(e) === (n = rt(n)) || P(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? t?.setAttribute?.(e, String(n)) : t?.removeAttribute?.(e);
  }), t;
};
function X(t, e) {
  const n = Math.min(t.x, e.x), r = Math.min(t.y, e.y), i = Math.max(t.x, e.x), o = Math.max(t.y, e.y);
  return {
    left: n,
    top: r,
    right: i,
    bottom: o,
    width: i - n,
    height: o - r
  };
}
var H = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, Y = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, U = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, ye = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), $ = globalThis[ye] ??= /* @__PURE__ */ new WeakMap(), v = (t, e, n) => {
  const r = $.get(t) ?? /* @__PURE__ */ new Map(), i = r.get(e) ?? [];
  i.push(n), r.set(e, i), $.set(t, r);
}, at = (t, e) => {
  const n = $.get(t), r = n?.get(e);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(e), n.size === 0 && $.delete(t);
  }
}, S = (t, e) => {
  const n = globalThis.getComputedStyle?.(t)?.getPropertyValue?.(e)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, kt = (t, e, n) => {
  const r = t.getAttribute(e)?.trim();
  if (!r) return n;
  const i = t.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, we = class extends ot {
  constructor() {
    super("ui-junction-select");
  }
  connect(t) {
    const e = t?.deref?.();
    if (!e) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:var(--z-max, 9999);box-sizing:border-box;border:1px dashed color-mix(in oklab, var(--color-primary, #5a7fff) 70%, transparent);background:color-mix(in oklab, var(--color-primary, #5a7fff) 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(e)?.position === "static" && (e.style.position = "relative"), e.appendChild(n);
    let i = !1, o = {
      x: 0,
      y: 0
    }, s = {
      x: 0,
      y: 0
    };
    const a = (c) => {
      const m = e.getBoundingClientRect();
      return {
        x: c.clientX - m.left,
        y: c.clientY - m.top
      };
    }, l = () => {
      const c = X(o, s);
      if (c.width < 1 && c.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${c.left}px`, n.style.top = `${c.top}px`, n.style.width = `${c.width}px`, n.style.height = `${c.height}px`;
    }, h = (c) => {
      c.button === 0 && (c.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (c.target === e || e.contains(c.target)) && (i = !0, o = a(c), s = { ...o }, e.setPointerCapture(c.pointerId), e.dispatchEvent(new CustomEvent(H.start, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          host: e
        }
      })), l()));
    }, d = (c) => {
      if (!i) return;
      s = a(c), l();
      const m = X(o, s);
      e.dispatchEvent(new CustomEvent(H.move, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          box: m,
          host: e
        }
      }));
    }, g = (c) => {
      if (!i) return;
      i = !1;
      try {
        e.releasePointerCapture(c.pointerId);
      } catch {
      }
      const m = X(o, s);
      e.dispatchEvent(new CustomEvent(H.end, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          box: m,
          host: e
        }
      }));
    }, f = (c) => {
      i && g(c);
    }, u = (c) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          e.releasePointerCapture(c.pointerId);
        } catch {
        }
        e.dispatchEvent(new CustomEvent(H.cancel, {
          bubbles: !0,
          detail: { host: e }
        }));
      }
    };
    return v(e, "ui-junction-select", () => {
      n.remove();
    }), v(e, "ui-junction-select", p(e, "pointerdown", h)), v(e, "ui-junction-select", p(e, "pointermove", d)), v(e, "ui-junction-select", p(e, "pointerup", f)), v(e, "ui-junction-select", p(e, "pointercancel", u)), this;
  }
  disconnect(t) {
    const e = t?.deref?.();
    return e && at(e, "ui-junction-select"), this;
  }
}, xe = class extends ot {
  constructor() {
    super("ui-junction-drag");
  }
  connect(t) {
    const e = t?.deref?.();
    if (!e) return this;
    C(e, "--jx-drag-x", S(e, "--jx-drag-x")), C(e, "--jx-drag-y", S(e, "--jx-drag-y"));
    const n = e.style.transform;
    (!e.style.transform || e.style.transform === "none") && (e.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = kt(e, "data-junction-drag-handle", e);
    let i = !1, o = 0, s = 0, a = 0, l = 0;
    const h = (f) => {
      f.button === 0 && (f.target !== r && !r.contains(f.target) || (i = !0, o = f.clientX, s = f.clientY, a = S(e, "--jx-drag-x"), l = S(e, "--jx-drag-y"), r.setPointerCapture(f.pointerId), e.dispatchEvent(new CustomEvent(Y.start, {
        bubbles: !0,
        detail: {
          host: e,
          clientX: f.clientX,
          clientY: f.clientY,
          baseX: a,
          baseY: l
        }
      }))));
    }, d = (f) => {
      if (!i) return;
      const u = f.clientX - o, c = f.clientY - s, m = a + u, w = l + c;
      C(e, "--jx-drag-x", m), C(e, "--jx-drag-y", w), e.dispatchEvent(new CustomEvent(Y.move, {
        bubbles: !0,
        detail: {
          host: e,
          dx: u,
          dy: c,
          x: m,
          y: w
        }
      }));
    }, g = (f) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(f.pointerId);
        } catch {
        }
        e.dispatchEvent(new CustomEvent(Y.end, {
          bubbles: !0,
          detail: {
            host: e,
            x: S(e, "--jx-drag-x"),
            y: S(e, "--jx-drag-y")
          }
        }));
      }
    };
    return v(e, "ui-junction-drag", () => {
      e.style.transform = n;
    }), v(e, "ui-junction-drag", p(r, "pointerdown", h)), v(e, "ui-junction-drag", p(r, "pointermove", d)), v(e, "ui-junction-drag", p(r, "pointerup", g)), v(e, "ui-junction-drag", p(r, "pointercancel", g)), this;
  }
  disconnect(t) {
    const e = t?.deref?.();
    return e && at(e, "ui-junction-drag"), this;
  }
}, Se = class extends ot {
  constructor() {
    super("ui-junction-resize");
  }
  connect(t) {
    const e = t?.deref?.();
    if (!e) return this;
    const n = kt(e, "data-junction-resize-handle", e);
    let r = !1, i = 0, o = 0, s = 0, a = 0;
    const l = Math.max(120, parseFloat(e.getAttribute("data-junction-resize-min-w") || "") || 120), h = Math.max(80, parseFloat(e.getAttribute("data-junction-resize-min-h") || "") || 80), d = (u) => {
      u.button === 0 && (u.target !== n && !n.contains(u.target) || (r = !0, i = u.clientX, o = u.clientY, s = e.offsetWidth, a = e.offsetHeight, n.setPointerCapture(u.pointerId), e.dispatchEvent(new CustomEvent(U.start, {
        bubbles: !0,
        detail: {
          host: e,
          width: s,
          height: a
        }
      }))));
    }, g = (u) => {
      if (!r) return;
      const c = Math.max(l, s + (u.clientX - i)), m = Math.max(h, a + (u.clientY - o));
      e.style.width = `${c}px`, e.style.height = `${m}px`, e.dispatchEvent(new CustomEvent(U.move, {
        bubbles: !0,
        detail: {
          host: e,
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
        e.dispatchEvent(new CustomEvent(U.end, {
          bubbles: !0,
          detail: {
            host: e,
            width: e.offsetWidth,
            height: e.offsetHeight
          }
        }));
      }
    };
    return v(e, "ui-junction-resize", p(n, "pointerdown", d)), v(e, "ui-junction-resize", p(n, "pointermove", g)), v(e, "ui-junction-resize", p(n, "pointerup", f)), v(e, "ui-junction-resize", p(n, "pointercancel", f)), this;
  }
  disconnect(t) {
    const e = t?.deref?.();
    return e && at(e, "ui-junction-resize"), this;
  }
};
new we();
new xe();
new Se();
export {
  ot as DOMMixin,
  xe as JunctionDragMixin,
  Se as JunctionResizeMixin,
  we as JunctionSelectMixin,
  Ie as MATCH,
  Ge as MOC,
  K as MOCElement,
  Ne as RAFBehavior,
  $e as REGEX,
  Ve as ROOT,
  vn as WavyShapedCircle,
  Ae as __exportProperties,
  ct as __registeredCssProperties,
  p as addEvent,
  Xe as addEvents,
  Ye as addEventsList,
  he as addRoot,
  gn as animateHide,
  mn as animateShow,
  Q as availSize,
  an as bbh,
  on as bbw,
  re as bindBehavior,
  ce as bindMixins,
  se as bindStore,
  F as borderBoxHeight,
  R as borderBoxWidth,
  Mt as boundBehaviors,
  y as boundMixinSet,
  cn as cbh,
  sn as cbw,
  en as changeZoom,
  ln as classes,
  Gt as computeCaretPosition,
  hn as computeCaretPositionFromClient,
  Je as containsOrSelf,
  _ as contentBoxHeight,
  B as contentBoxWidth,
  Ze as createElementVanilla,
  pt as createFixedOverlayViewport,
  be as deleteStyleProperty,
  ze as detectMobile,
  We as doBorderObserve,
  Oe as doContentObserve,
  G as ensureVirtualKeyboardOverlay,
  dn as fixOrientToScreen,
  nn as fixedClientZoom,
  xt as getAvailSize,
  rn as getBoundingOrientRect,
  Ut as getCorrectOrientation,
  N as getElementRelated,
  Ke as getEventTarget,
  Bt as getOffsetParent,
  Ce as getOffsetParentChain,
  oe as getStoresOfElement,
  tn as getZoom,
  Cn as handleAttribute,
  kn as handleDataset,
  Mn as handleHidden,
  An as handleProperty,
  zn as handleStyleChange,
  q as hasParent,
  Re as html,
  De as includeSelf,
  _e as indexOf,
  St as initTextStyle,
  qe as isElement,
  Qe as isInFocus,
  ke as isMobile,
  Te as isNearlyIdentity,
  Be as isValidParent,
  _t as makeRAFCycle,
  fn as measureInputInFocus,
  Jt as measureText,
  $ as mixinDisposers,
  E as mixinElements,
  I as mixinNamespace,
  j as mixinRegistry,
  ge as nameRegistryF,
  V as namedStoreMaps,
  wn as observeAttribute,
  Et as observeAttributeBySelector,
  yn as observeBorderBox,
  ne as observeBySelector,
  bn as observeContentBox,
  lt as onBorderObserve,
  dt as onContentObserve,
  A as orientOf,
  Xt as orientationNumberMap,
  bt as passiveOpts,
  un as readFixedOverlayViewport,
  Qt as readLauncherLayoutFromElement,
  xn as reflectBehaviors,
  En as reflectMixins,
  Sn as reflectStores,
  ve as registerMixin,
  ft as removeEvent,
  Ue as removeEvents,
  pn as resolveGridCellFromClientPoint,
  et as roots,
  Pe as setAttributes,
  je as setAttributesIfNull,
  Fe as setChecked,
  Le as setIdleInterval,
  It as throttleMap,
  J as unfixedClientZoom,
  nt as updateAllMixins,
  At as updateMixinAttributes,
  pe as updateMixinAttributesAll,
  me as updateMixinAttributesAllInRoots,
  Yt as updateVP,
  He as url,
  Kt as whenAnyScreenChanges,
  qt as zoomOf,
  Zt as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwgfSBmcm9tIFwiQGZlc3QtbGliL2NvcmVcIjtcbmltcG9ydCB7IGFwcGVhciwgZGVjb3JIaWRlLCBkZWNvclNob3csIGRpc2FwcGVhciwgb2JzZXJ2ZVN0eWxlVHJlZSwgc2V0U3R5bGVQcm9wZXJ0eSB9IGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCI7XG5cbmV4cG9ydCAqIGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCJcblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9Qcm9wZXJ0aWVzLnRzXG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzID0gZ2xvYmFsVGhpc1tfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtZnJlcVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1waXhlbC1yYXRpb1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXlcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXhcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXlcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fVxuXS5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIENTUz8ucmVnaXN0ZXJQcm9wZXJ0eSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0Y29uc3QgbmFtZSA9IFN0cmluZyhvcHRpb25zPy5uYW1lIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFuYW1lIHx8IF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuaGFzKG5hbWUpKSByZXR1cm47XG5cdHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkob3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAoIShTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiKSkgY29uc29sZS53YXJuKGUpO1xuXHR9IGZpbmFsbHkge1xuXHRcdF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuYWRkKG5hbWUpO1xuXHR9XG59KTtcbnZhciBfX2V4cG9ydFByb3BlcnRpZXMgPSAoKSA9PiB7fTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0RldGVjdC50c1xudmFyIGlzTW9iaWxlID0gKCkgPT4ge1xuXHRsZXQgY2hlY2sgPSBuYXZpZ2F0b3I/LnVzZXJBZ2VudERhdGE/Lm1vYmlsZSB8fCBmYWxzZTtcblx0KChhKSA9PiB7XG5cdFx0aWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSBjaGVjayA9IHRydWU7XG5cdH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCBnbG9iYWxUaGlzLm9wZXJhKTtcblx0cmV0dXJuIGNoZWNrO1xufTtcbnZhciBkZXRlY3RNb2JpbGUgPSAoKSA9PiB7XG5cdHJldHVybiBbXG5cdFx0L0FuZHJvaWQvaSxcblx0XHQvd2ViT1MvaSxcblx0XHQvaVBob25lL2ksXG5cdFx0L2lQYWQvaSxcblx0XHQvaVBvZC9pLFxuXHRcdC9CbGFja0JlcnJ5L2ksXG5cdFx0L1dpbmRvd3MgUGhvbmUvaVxuXHRdLnNvbWUobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaC5iaW5kKG5hdmlnYXRvci51c2VyQWdlbnQpKSAmJiAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiBnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1V0aWxzLnRzXG52YXIgY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2sgPSAoKSA9PiAoe1xuXHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxufSk7XG52YXIgcnVuV2hlbklkbGUkMSA9IChjYiwgdGltZW91dCA9IDFlMykgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrKCkpLCAwKTtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIGVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBlbGVtZW50Py5ob3N0O1xufTtcbnZhciBnZXRPZmZzZXRQYXJlbnRDaGFpbiA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IHBhcmVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IGdldE9mZnNldFBhcmVudChjdXJyZW50KTtcblx0XHRpZiAocGFyZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxIdG1sRWxlbWVudCkgYnJlYWs7XG5cdFx0aWYgKGN1cnJlbnQgPSBwYXJlbnQpIHBhcmVudHMucHVzaChjdXJyZW50KTtcblx0fVxuXHRyZXR1cm4gcGFyZW50cztcbn07XG52YXIgaXNOZWFybHlJZGVudGl0eSA9IChtYXRyaXgsIGVwc2lsb24gPSAxZS02KSA9PiB7XG5cdHJldHVybiBNYXRoLmFicyhtYXRyaXguYSAtIDEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYikgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5jKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmQgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmUpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguZikgPCBlcHNpbG9uO1xufTtcbnZhciBtYWtlUkFGQ3ljbGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRyb2wgPSB7XG5cdFx0Y2FuY2VsZWQ6IGZhbHNlLFxuXHRcdHJBRnM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0bGFzdDogbnVsbCxcblx0XHRjYW5jZWwoKSB7XG5cdFx0XHR0aGlzLmNhbmNlbGVkID0gdHJ1ZTtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdHNoZWR1bGUoY2IpIHtcblx0XHRcdHRoaXMuckFGcy5hZGQoY2IpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHR9O1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHdoaWxlICghY29udHJvbD8uY2FuY2VsZWQpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKChjb250cm9sPy5yQUZzPy52YWx1ZXM/LigpID8/IFtdKT8ubWFwPy4oKHJBRikgPT4gUHJvbWlzZS50cnkockFGKT8uY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSkpKTtcblx0XHRcdGNvbnRyb2wuckFGcz8uY2xlYXI/LigpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRjb250cm9sLmxhc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmVzLCAxNik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pKCk7XG5cdHJldHVybiBjb250cm9sO1xufTtcbnZhciBSQUZCZWhhdmlvciA9IChzaGVkID0gbWFrZVJBRkN5Y2xlKCkpID0+IHtcblx0cmV0dXJuIChjYikgPT4gc2hlZC5zaGVkdWxlKGNiKTtcbn07XG52YXIgUk9PVCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgc2V0QXR0cmlidXRlc0lmTnVsbCA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdGlmICghYXR0cnMgfHwgdHlwZW9mIGF0dHJzICE9IFwib2JqZWN0XCIgfHwgIWVsZW1lbnQpIHJldHVybjtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRjb25zdCBvbGQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBpZiAodmFsdWUgIT0gb2xkKSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBvbGQgPT0gXCJcIiA/IHZhbHVlID8/IG9sZCA6IG9sZCA/PyB2YWx1ZSk7XG5cdH0pO1xufTtcbnZhciBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJzID0ge30pID0+IHtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA/PyBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKSk7XG5cdH0pO1xufTtcbnZhciB0aHJvdHRsZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgc2V0SWRsZUludGVydmFsID0gKGNiLCB0aW1lb3V0ID0gMWUzLCAuLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHN0YXR1cyA9IHtcblx0XHRydW5uaW5nOiB0cnVlLFxuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0c3RhdHVzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cdHJ1bldoZW5JZGxlJDEoYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghY2IgfHwgdHlwZW9mIGNiICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRcdHdoaWxlIChzdGF0dXMucnVubmluZykge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoW1Byb21pc2UudHJ5KGNiLCAuLi5hcmdzKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSkuY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFueShbbmV3IFByb21pc2UoKHIpID0+IHJ1bldoZW5JZGxlJDEociwgdGltZW91dCkpLCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCB0aW1lb3V0KSldKTtcblx0XHR9XG5cdFx0c3RhdHVzLmNhbmNlbCA9ICgpID0+IHt9O1xuXHR9LCB0aW1lb3V0KTtcblx0cmV0dXJuIHN0YXR1cz8uY2FuY2VsO1xufTtcbmlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dGhyb3R0bGVNYXAuZm9yRWFjaCgoY2IpID0+IGNiPy4oKSk7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyKSk7XG5cdH1cbn0pO1xudmFyIGJvcmRlckJveFdpZHRoID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtd2lkdGhcIik7XG52YXIgYm9yZGVyQm94SGVpZ2h0ID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtaGVpZ2h0XCIpO1xudmFyIGNvbnRlbnRCb3hXaWR0aCA9IFN5bWJvbChcIkBjb250ZW50LWJveC13aWR0aFwiKTtcbnZhciBjb250ZW50Qm94SGVpZ2h0ID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LWhlaWdodFwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZG9Db250ZW50T2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50LmNsaWVudFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50LmNsaWVudEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQ29udGVudE9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxufTtcbnZhciBkb0JvcmRlck9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5vZmZzZXRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Cb3JkZXJPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxufTtcbnZhciB1cmwgPSAodHlwZSwgLi4uc291cmNlKSA9PiB7XG5cdHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKHNvdXJjZSwgeyB0eXBlIH0pKTtcbn07XG52YXIgaHRtbCA9IChzb3VyY2UsIHR5cGUgPSBcInRleHQvaHRtbFwiKSA9PiB7XG5cdGNvbnN0IHBhcnNlZCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc291cmNlLCB0eXBlKTtcblx0cmV0dXJuIHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikgPz8gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCIqXCIpO1xufTtcbnZhciBzZXRDaGVja2VkID0gKGlucHV0LCB2YWx1ZSwgZXYpID0+IHtcblx0aWYgKHZhbHVlICE9IG51bGwgJiYgaW5wdXQuY2hlY2tlZCAhPSB2YWx1ZSkge1xuXHRcdGlmIChpbnB1dD8uW1widHlwZVwiXSA9PSBcImNoZWNrYm94XCIgfHwgaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJyYWRpb1wiICYmICFpbnB1dD8uY2hlY2tlZCkge1xuXHRcdFx0aW5wdXQ/LmNsaWNrPy4oKTtcblx0XHRcdGV2Py5wcmV2ZW50RGVmYXVsdD8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlucHV0LmNoZWNrZWQgPSAhIXZhbHVlO1xuXHRcdFx0aW5wdXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGlzVmFsaWRQYXJlbnQgPSAocGFyZW50KSA9PiB7XG5cdHJldHVybiBwYXJlbnQgIT0gbnVsbCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgSFRNTEJvZHlFbGVtZW50KSA/IHBhcmVudCA6IG51bGw7XG59O1xudmFyIGluZGV4T2YgPSAoZWxlbWVudCwgbm9kZSkgPT4ge1xuXHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IG5vZGUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50Py5jaGlsZE5vZGVzID8/IFtdKT8uaW5kZXhPZj8uKG5vZGUpID8/IC0xO1xufTtcbnZhciBNQVRDSCA9IFwiKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKVwiO1xudmFyIFJFR0VYID0gXCJeKD86KC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSl8XiMoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcLigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKil8XlxcXFxbKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSg/OihbKiR8fl5dPz0pKFtcXFwiJ10pKCg/Oig/PShcXFxcXFxcXD8pKVxcXFw4LikqPylcXFxcNik/XFxcXF1cIjtcbnZhciBjcmVhdGVFbGVtZW50VmFuaWxsYSA9IChzZWxlY3RvcikgPT4ge1xuXHRpZiAoc2VsZWN0b3IgPT0gXCI6ZnJhZ21lbnQ6XCIpIHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQuYmluZChkb2N1bWVudCk7XG5cdGZvciAodmFyIG5vZGUgPSBjcmVhdGUoXCJkaXZcIiksIG1hdGNoLCBjbGFzc05hbWUgPSBcIlwiOyBzZWxlY3RvciAmJiAobWF0Y2ggPSBzZWxlY3Rvci5tYXRjaChcIl4oPzooLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopKXxeIygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKil8XlxcXFwuKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXFsoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiKSk7KSB7XG5cdFx0aWYgKG1hdGNoWzFdKSBub2RlID0gY3JlYXRlKG1hdGNoWzFdKTtcblx0XHRpZiAobWF0Y2hbMl0pIG5vZGUuaWQgPSBtYXRjaFsyXTtcblx0XHRpZiAobWF0Y2hbM10pIGNsYXNzTmFtZSArPSBcIiBcIiArIG1hdGNoWzNdO1xuXHRcdGlmIChtYXRjaFs0XSkgbm9kZS5zZXRBdHRyaWJ1dGUobWF0Y2hbNF0sIG1hdGNoWzddIHx8IFwiXCIpO1xuXHRcdHNlbGVjdG9yID0gc2VsZWN0b3Iuc2xpY2UobWF0Y2hbMF0ubGVuZ3RoKTtcblx0fVxuXHRpZiAoY2xhc3NOYW1lKSBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZS5zbGljZSgxKTtcblx0cmV0dXJuIG5vZGU7XG59O1xudmFyIGlzRWxlbWVudCA9IChlbCkgPT4ge1xuXHRyZXR1cm4gZWwgIT0gbnVsbCAmJiAoZWwgaW5zdGFuY2VvZiBOb2RlIHx8IGVsIGluc3RhbmNlb2YgVGV4dCB8fCBlbCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBDb21tZW50IHx8IGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSA/IGVsIDogbnVsbDtcbn07XG52YXIgaW5jbHVkZVNlbGYgPSAodGFyZ2V0LCBzZWxlY3RvcikgPT4ge1xuXHRjb25zdCBzZWwgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBzZWxlY3Rvci50cmltKCkgOiBcIlwiO1xuXHRpZiAoIXNlbCB8fCAhdGFyZ2V0KSByZXR1cm4gdGFyZ2V0ID8/IG51bGw7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRhcmdldC5xdWVyeVNlbGVjdG9yKHNlbCkgPz8gKHRhcmdldC5tYXRjaGVzKHNlbCkgPyB0YXJnZXQgOiBudWxsKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgaGFzUGFyZW50ID0gKGN1cnJlbnQsIHBhcmVudCkgPT4ge1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGlmICghKGN1cnJlbnQ/LmVsZW1lbnQgPz8gY3VycmVudCkpIHJldHVybiBmYWxzZTtcblx0XHRpZiAoKGN1cnJlbnQ/LmVsZW1lbnQgPz8gY3VycmVudCkgPT09IChwYXJlbnQ/LmVsZW1lbnQgPz8gcGFyZW50KSkgcmV0dXJuIHRydWU7XG5cdFx0Y3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudCA/PyAoY3VycmVudC5wYXJlbnROb2RlID09IGN1cnJlbnQ/LmdldFJvb3ROb2RlPy4oeyBjb21wb3NlZDogdHJ1ZSB9KSA/IGN1cnJlbnQ/LmdldFJvb3ROb2RlPy4oeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA6IGN1cnJlbnQ/LnBhcmVudE5vZGUpO1xuXHR9XG59O1xudmFyIHBhc3NpdmVPcHRzID0ge307XG5mdW5jdGlvbiBhZGRFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5hZGRFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xuXHRjb25zdCB3ciA9IHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdGFyZ2V0ID09IFwiZnVuY3Rpb25cIiAmJiAhdGFyZ2V0Py5kZXJlZiA/IG5ldyBXZWFrUmVmKHRhcmdldCkgOiB0YXJnZXQ7XG5cdHJldHVybiAoKSA9PiB3cj8uZGVyZWY/LigpPy5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlRXZlbnQodGFyZ2V0LCB0eXBlLCBjYiwgb3B0cyA9IHBhc3NpdmVPcHRzKSB7XG5cdHRhcmdldD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKHR5cGUsIGNiLCBvcHRzKTtcbn1cbnZhciBhZGRFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IGFkZEV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IGFkZEV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGFkZEV2ZW50c0xpc3QgPSAoZWwsIGV2ZW50cykgPT4ge1xuXHRpZiAoZXZlbnRzKSB7XG5cdFx0bGV0IGVudHJpZXMgPSBldmVudHM7XG5cdFx0aWYgKGV2ZW50cyBpbnN0YW5jZW9mIE1hcCkgZW50cmllcyA9IFsuLi5ldmVudHMuZW50cmllcygpXTtcblx0XHRlbHNlIGVudHJpZXMgPSBbLi4uT2JqZWN0LmVudHJpZXMoZXZlbnRzKV07XG5cdFx0cmV0dXJuIGVudHJpZXMubWFwKChbbmFtZSwgbGlzdF0pID0+ICgoaXNBcnJheU9ySXRlcmFibGUobGlzdCkgPyBbLi4ubGlzdF0gOiBsaXN0KSA/PyBbXSk/Lm1hcD8uKChjYnMpID0+IHtcblx0XHRcdHJldHVybiBhZGRFdmVudChlbCwgbmFtZSwgY2JzKTtcblx0XHR9KSk7XG5cdH1cbn07XG52YXIgcmVtb3ZlRXZlbnRzID0gKHJvb3QsIGhhbmRsZXJzKSA9PiB7XG5cdHJvb3QgPSByb290IGluc3RhbmNlb2YgV2Vha1JlZiA/IHJvb3QuZGVyZWYoKSA6IHJvb3Q7XG5cdHJldHVybiBbLi4uT2JqZWN0LmVudHJpZXMoaGFuZGxlcnMpXS5tYXA/LigoW25hbWUsIGNiXSkgPT4gQXJyYXkuaXNBcnJheShjYikgPyByZW1vdmVFdmVudChyb290LCBuYW1lLCAuLi5jYikgOiByZW1vdmVFdmVudChyb290LCBuYW1lLCBjYikpO1xufTtcbnZhciBnZXRFdmVudFRhcmdldCA9IChldikgPT4ge1xuXHRpZiAoIWV2KSByZXR1cm4gbnVsbDtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBwYXRoKSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gbm9kZTtcblx0fVxuXHRjb25zdCB0YXJnZXQgPSBldj8udGFyZ2V0O1xuXHRpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgdGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuIHRhcmdldDtcblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGNvbnRhaW5zT3JTZWxmID0gKGEsIGIsIGV2KSA9PiB7XG5cdGlmIChiID09IG51bGwgfHwgIShiIGluc3RhbmNlb2YgTm9kZSkgJiYgYj8uZWxlbWVudCA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdGlmIChhID09IGIgfHwgKGE/LmVsZW1lbnQgPz8gYSkgPT0gKGI/LmVsZW1lbnQgPz8gYikpIHJldHVybiB0cnVlO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Y29uc3QgYUVsID0gYT8uZWxlbWVudCA/PyBhO1xuXHRcdGNvbnN0IGJFbCA9IGI/LmVsZW1lbnQgPz8gYjtcblx0XHRpZiAocGF0aC5pbmNsdWRlcyhhRWwpICYmIHBhdGguaW5jbHVkZXMoYkVsKSkge1xuXHRcdFx0Y29uc3QgYUluZGV4ID0gcGF0aC5pbmRleE9mKGFFbCk7XG5cdFx0XHRjb25zdCBiSW5kZXggPSBwYXRoLmluZGV4T2YoYkVsKTtcblx0XHRcdGlmIChiSW5kZXggPj0gMCAmJiBhSW5kZXggPj0gMCAmJiBiSW5kZXggPCBhSW5kZXgpIHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRpZiAoYT8uY29udGFpbnM/LihiPy5lbGVtZW50ID8/IGIpIHx8IGE/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSk/Lmhvc3QgPT0gKGI/LmVsZW1lbnQgPz8gYikpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gZmFsc2U7XG59O1xudmFyIE1PQ0VsZW1lbnQgPSAoZWxlbWVudCwgc2VsZWN0b3IsIGV2KSA9PiB7XG5cdGNvbnN0IHNlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiA/IHNlbGVjdG9yLnRyaW0oKSA6IFwiXCI7XG5cdGlmICghc2VsKSByZXR1cm4gZWxlbWVudCA/PyBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHRyeSB7XG5cdFx0XHRpZiAobm9kZS5tYXRjaGVzPy4oc2VsKSkgcmV0dXJuIG5vZGU7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cdGxldCBzZWxmID0gbnVsbDtcblx0bGV0IGhvc3RNYXRjaGVkID0gbnVsbDtcblx0bGV0IGNsb3Nlc3QgPSBudWxsO1xuXHR0cnkge1xuXHRcdHNlbGYgPSBlbGVtZW50Py5tYXRjaGVzPy4oc2VsKSA/IGVsZW1lbnQgOiBudWxsO1xuXHRcdGNvbnN0IGhvc3QgPSAoZWxlbWVudD8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSA/PyBlbGVtZW50Py5wYXJlbnRFbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pKT8uaG9zdDtcblx0XHRob3N0TWF0Y2hlZCA9IGhvc3Q/Lm1hdGNoZXM/LihzZWwpID8gaG9zdCA6IG51bGw7XG5cdFx0Y2xvc2VzdCA9IGVsZW1lbnQ/LmNsb3Nlc3Q/LihzZWwpID8/IHNlbGY/LmNsb3Nlc3Q/LihzZWwpID8/IGhvc3RNYXRjaGVkPy5jbG9zZXN0Py4oc2VsKSA/PyBudWxsO1xuXHR9IGNhdGNoIHt9XG5cdHJldHVybiBzZWxmID8/IGNsb3Nlc3QgPz8gaG9zdE1hdGNoZWQ7XG59O1xudmFyIE1PQyA9IChlbGVtZW50LCBzZWxlY3RvcikgPT4ge1xuXHRyZXR1cm4gISFNT0NFbGVtZW50KGVsZW1lbnQsIHNlbGVjdG9yKTtcbn07XG52YXIgaXNJbkZvY3VzID0gKGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50LCBkaXIgPSBcInBhcmVudFwiKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoZWxlbWVudC5jaGVja1Zpc2liaWxpdHkgJiYgIWVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5KHtcblx0XHRjaGVja09wYWNpdHk6IHRydWUsXG5cdFx0Y2hlY2tWaXNpYmlsaXR5Q1NTOiB0cnVlXG5cdH0pKSByZXR1cm4gZmFsc2U7XG5cdGlmICghZWxlbWVudC5jaGVja1Zpc2liaWxpdHkgJiYgZWxlbWVudC5vZmZzZXRQYXJlbnQgPT09IG51bGwgJiYgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiAhPT0gXCJmaXhlZFwiKSByZXR1cm4gZmFsc2U7XG5cdGxldCBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHR3aGlsZSAoYWN0aXZlICYmIGFjdGl2ZS5zaGFkb3dSb290ICYmIGFjdGl2ZS5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQpIGFjdGl2ZSA9IGFjdGl2ZS5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG5cdGNvbnN0IGlzRm9jdXNlZCA9IGFjdGl2ZSA9PT0gZWxlbWVudCB8fCBoYXNQYXJlbnQoYWN0aXZlLCBlbGVtZW50KTtcblx0Y29uc3QgaXNIb3ZlcmVkID0gZWxlbWVudC5tYXRjaGVzKFwiOmhvdmVyXCIpO1xuXHRpZiAoIWlzRm9jdXNlZCAmJiAhaXNIb3ZlcmVkICYmICFzZWxlY3Rvck9yRWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoc2VsZWN0b3JPckVsZW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIHNlbGVjdG9yT3JFbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRpZiAoZGlyID09PSBcInBhcmVudFwiKSByZXR1cm4gISFNT0NFbGVtZW50KGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50KTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSBpc0ZvY3VzZWQgPyBhY3RpdmUgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6aG92ZXJcIikgfHwgZWxlbWVudDtcblx0XHRcdFx0Y29uc3QgYWx0Q25kID0gISFNT0NFbGVtZW50KHRhcmdldCwgc2VsZWN0b3JPckVsZW1lbnQpO1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudD8ucXVlcnlTZWxlY3Rvcj8uKHNlbGVjdG9yT3JFbGVtZW50KSAhPSBudWxsIHx8IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWxlY3Rvck9yRWxlbWVudCkgfHwgYWx0Q25kO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoc2VsZWN0b3JPckVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0aWYgKGRpciA9PT0gXCJwYXJlbnRcIikgcmV0dXJuIGhhc1BhcmVudChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCkgfHwgZmFsc2U7XG5cdFx0XHRlbHNlIHJldHVybiBoYXNQYXJlbnQoc2VsZWN0b3JPckVsZW1lbnQsIGVsZW1lbnQpIHx8IGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9ab29tLnRzXG52YXIgZ2V0Wm9vbSA9ICgpID0+IHtcblx0aWYgKFwiY3VycmVudENTU1pvb21cIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY3VycmVudENTU1pvb20gfHwgMTtcblx0cmV0dXJuIHBhcnNlRmxvYXQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItLXNjYWxpbmdcIikgfHwgXCIxXCIpIHx8IDE7XG59O1xudmFyIHpvb21WYWx1ZXNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQHpvb21WYWx1ZXNcIik7XG52YXIgem9vbVZhbHVlcyA9IGdsb2JhbFRoaXNbem9vbVZhbHVlc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHpvb21PZiA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiB6b29tVmFsdWVzLmdldE9ySW5zZXJ0Q29tcHV0ZWQoZWxlbWVudCwgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IChlbGVtZW50Py5tYXRjaGVzPy4oXCIudWktb3JpZW50Ym94XCIpID8gZWxlbWVudCA6IG51bGwpIHx8IGVsZW1lbnQ/LmNsb3Nlc3Q/LihcIi51aS1vcmllbnRib3hcIikgfHwgZG9jdW1lbnQuYm9keTtcblx0XHRpZiAoY29udGFpbmVyPy56b29tKSByZXR1cm4gY29udGFpbmVyPy56b29tIHx8IDE7XG5cdFx0aWYgKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tKSByZXR1cm4gZWxlbWVudD8uY3VycmVudENTU1pvb20gfHwgMTtcblx0fSk7XG59O1xudmFyIGNoYW5nZVpvb20gPSAoc2NhbGUgPSAxKSA9PiB7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2NhbGluZ1wiLCBzY2FsZSk7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInNjYWxpbmdcIiwge1xuXHRcdGRldGFpbDogeyB6b29tOiBzY2FsZSB9LFxuXHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHR9KSk7XG5cdHJldHVybiBzY2FsZTtcbn07XG52YXIgZml4ZWRDbGllbnRab29tID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSAhPSBudWxsID8gMSA6IHpvb21PZihlbGVtZW50KSkgfHwgMTtcbn07XG52YXIgdW5maXhlZENsaWVudFpvb20gPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tID09IG51bGwgPyAxIDogZWxlbWVudD8uY3VycmVudENTU1pvb20pIHx8IDE7XG59O1xudmFyIG9yaWVudE9mID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0Y29uc3QgY29udGFpbmVyID0gKGVsZW1lbnQ/Lm1hdGNoZXM/LihcIltvcmllbnRdLCBbZGF0YS1taXhpbj1cXFwidWktb3JpZW50Ym94XFxcIl1cIikgPyBlbGVtZW50IDogbnVsbCkgfHwgZWxlbWVudD8uY2xvc2VzdD8uKFwiW29yaWVudF0sIFtkYXRhLW1peGluPVxcXCJ1aS1vcmllbnRib3hcXFwiXVwiKSB8fCBlbGVtZW50O1xuXHRpZiAoY29udGFpbmVyPy5oYXNBdHRyaWJ1dGU/LihcIm9yaWVudFwiKSkgcmV0dXJuIHBhcnNlSW50KGNvbnRhaW5lcj8uZ2V0QXR0cmlidXRlPy4oXCJvcmllbnRcIikgfHwgXCIwXCIpIHx8IDA7XG5cdGlmIChjb250YWluZXI/Lm9yaWVudCAhPSBudWxsICYmIE51bWJlci5pc0Zpbml0ZShOdW1iZXIoY29udGFpbmVyLm9yaWVudCkpKSByZXR1cm4gTnVtYmVyKGNvbnRhaW5lci5vcmllbnQpIHx8IDA7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gY29udGFpbmVyPy5zdHlsZT8uZ2V0UHJvcGVydHlWYWx1ZT8uKFwiLS1vcmllbnRcIikgfHwgKHR5cGVvZiBnZXRDb21wdXRlZFN0eWxlID09PSBcImZ1bmN0aW9uXCIgJiYgY29udGFpbmVyID8gZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoXCItLW9yaWVudFwiKSA6IFwiXCIpIHx8IFwiXCI7XG5cdFx0Y29uc3QgbiA9IHBhcnNlSW50KFN0cmluZyhyYXcpLnRyaW0oKSwgMTApO1xuXHRcdGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHJldHVybiBuO1xuXHR9IGNhdGNoIHt9XG5cdHJldHVybiAwO1xufTtcbnZhciBnZXRCb3VuZGluZ09yaWVudFJlY3QgPSAoZWxlbWVudCwgb3JpZW50ID0gbnVsbCkgPT4ge1xuXHRjb25zdCB6b29tID0gdW5maXhlZENsaWVudFpvb20oZWxlbWVudCkgfHwgMTtcblx0Y29uc3QgYm94ID0gZWxlbWVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKTtcblx0Y29uc3QgbmJ4ID0ge1xuXHRcdGxlZnQ6IGJveD8ubGVmdCAvIHpvb20sXG5cdFx0cmlnaHQ6IGJveD8ucmlnaHQgLyB6b29tLFxuXHRcdHRvcDogYm94Py50b3AgLyB6b29tLFxuXHRcdGJvdHRvbTogYm94Py5ib3R0b20gLyB6b29tLFxuXHRcdHdpZHRoOiBib3g/LndpZHRoIC8gem9vbSxcblx0XHRoZWlnaHQ6IGJveD8uaGVpZ2h0IC8gem9vbVxuXHR9O1xuXHRjb25zdCBvcl9pID0gb3JpZW50ID8/IChvcmllbnRPZihlbGVtZW50KSB8fCAwKTtcblx0Y29uc3QgdnYgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LnZpc3VhbFZpZXdwb3J0IDogbnVsbDtcblx0Y29uc3Qgc2l6ZSA9IFsoKHZ2Py53aWR0aCA/PyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/LmNsaWVudFdpZHRoID8/IHdpbmRvdy5pbm5lcldpZHRoKSB8fCAxKSAvIHpvb20sICgodnY/LmhlaWdodCA/PyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/LmNsaWVudEhlaWdodCA/PyB3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDEpIC8gem9vbV07XG5cdGNvbnN0IFtsZWZ0XywgdG9wX10gPSBjdnRfY3NfdG9fb3MoW25ieC5sZWZ0LCBuYngudG9wXSwgc2l6ZSwgb3JfaSk7XG5cdGNvbnN0IFtyaWdodF8sIGJvdHRvbV9dID0gY3Z0X2NzX3RvX29zKFtuYngucmlnaHQsIG5ieC5ib3R0b21dLCBzaXplLCBvcl9pKTtcblx0Y29uc3QgW2xlZnQsIHJpZ2h0XSA9IG9yX2kgPT0gMCB8fCBvcl9pID09IDMgPyBbbGVmdF8sIHJpZ2h0X10gOiBbcmlnaHRfLCBsZWZ0X107XG5cdGNvbnN0IFt0b3AsIGJvdHRvbV0gPSBvcl9pID09IDAgfHwgb3JfaSA9PSAxID8gW3RvcF8sIGJvdHRvbV9dIDogW2JvdHRvbV8sIHRvcF9dO1xuXHRjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBvcl9pICUgMiA/IFtuYnguaGVpZ2h0LCBuYngud2lkdGhdIDogW25ieC53aWR0aCwgbmJ4LmhlaWdodF07XG5cdHJldHVybiB7XG5cdFx0bGVmdCxcblx0XHR0b3AsXG5cdFx0cmlnaHQsXG5cdFx0Ym90dG9tLFxuXHRcdHdpZHRoLFxuXHRcdGhlaWdodFxuXHR9O1xufTtcbnZhciBiYncgPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtib3JkZXJCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQgOiBlbFtib3JkZXJCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoO1xudmFyIGJiaCA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2JvcmRlckJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGggOiBlbFtib3JkZXJCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQ7XG52YXIgY2J3ID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbY29udGVudEJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodCA6IGVsW2NvbnRlbnRCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoO1xudmFyIGNiaCA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2NvbnRlbnRCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoIDogZWxbY29udGVudEJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodDtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1ZpZXdwb3J0LnRzXG52YXIgcnVuV2hlbklkbGUgPSAoY2IsIHRpbWVvdXQgPSAxMDApID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayhjYiwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc2V0VGltZW91dCgoKSA9PiBjYih7XG5cdFx0ZGlkVGltZW91dDogZmFsc2UsXG5cdFx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxuXHR9KSwgMCk7XG59O1xudmFyIEtFWUJPQVJEX09WRVJMQVlfUFggPSA4MDtcbnZhciB2aXJ0dWFsS2V5Ym9hcmQgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMubmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSA9ICgpID0+IHtcblx0Y29uc3QgdmsgPSB2aXJ0dWFsS2V5Ym9hcmQoKTtcblx0aWYgKCF2aykgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGlmICh2ay5vdmVybGF5c0NvbnRlbnQgIT09IHRydWUpIHZrLm92ZXJsYXlzQ29udGVudCA9IHRydWU7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgaXNJbWVUYXJnZXQgPSAoZWwpID0+IHtcblx0aWYgKCFlbCB8fCAhKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbC5pc0NvbnRlbnRFZGl0YWJsZSkgcmV0dXJuIHRydWU7XG5cdGNvbnN0IHRhZyA9IGVsLnRhZ05hbWU7XG5cdGlmICh0YWcgPT09IFwiVEVYVEFSRUFcIiB8fCB0YWcgPT09IFwiU0VMRUNUXCIpIHJldHVybiB0cnVlO1xuXHRpZiAodGFnICE9PSBcIklOUFVUXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3QgdHlwZSA9IFN0cmluZyhlbC50eXBlIHx8IFwidGV4dFwiKS50b0xvd2VyQ2FzZSgpO1xuXHRyZXR1cm4gIVtcblx0XHRcImJ1dHRvblwiLFxuXHRcdFwiY2hlY2tib3hcIixcblx0XHRcInJhZGlvXCIsXG5cdFx0XCJmaWxlXCIsXG5cdFx0XCJzdWJtaXRcIixcblx0XHRcInJlc2V0XCIsXG5cdFx0XCJpbWFnZVwiLFxuXHRcdFwicmFuZ2VcIixcblx0XHRcImNvbG9yXCIsXG5cdFx0XCJoaWRkZW5cIlxuXHRdLmluY2x1ZGVzKHR5cGUpO1xufTtcbnZhciBsYXlvdXRMb2NrT3JpZW50ID0gXCJcIjtcbnZhciBsYXlvdXRMb2NrVyA9IDA7XG52YXIgbGF5b3V0TG9ja0ggPSAwO1xudmFyIGNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0ID0gKHdpZHRoLCBoZWlnaHQsIGxlZnQgPSAwLCB0b3AgPSAwKSA9PiB7XG5cdGNvbnN0IHNhZmVXaWR0aCA9IE1hdGgubWF4KDAsIE51bWJlcih3aWR0aCkgfHwgMCk7XG5cdGNvbnN0IHNhZmVIZWlnaHQgPSBNYXRoLm1heCgwLCBOdW1iZXIoaGVpZ2h0KSB8fCAwKTtcblx0Y29uc3Qgc2FmZUxlZnQgPSBOdW1iZXIobGVmdCkgfHwgMDtcblx0Y29uc3Qgc2FmZVRvcCA9IE51bWJlcih0b3ApIHx8IDA7XG5cdHJldHVybiB7XG5cdFx0bGVmdDogc2FmZUxlZnQsXG5cdFx0dG9wOiBzYWZlVG9wLFxuXHRcdHJpZ2h0OiBzYWZlTGVmdCArIHNhZmVXaWR0aCxcblx0XHRib3R0b206IHNhZmVUb3AgKyBzYWZlSGVpZ2h0LFxuXHRcdHdpZHRoOiBzYWZlV2lkdGgsXG5cdFx0aGVpZ2h0OiBzYWZlSGVpZ2h0XG5cdH07XG59O1xudmFyIHJlYWRGaXhlZE92ZXJsYXlWaWV3cG9ydCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCgwLCAwKTtcblx0Y29uc3Qgcm9vdCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG5cdHJldHVybiBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydChOdW1iZXIocm9vdD8uY2xpZW50V2lkdGgpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMCwgTnVtYmVyKHJvb3Q/LmNsaWVudEhlaWdodCkgfHwgTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCk7XG59O1xudmFyIHJlYWRMYXlvdXRWaWV3cG9ydCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB7XG5cdFx0d2lkdGg6IDAsXG5cdFx0aGVpZ2h0OiAwLFxuXHRcdGtleWJvYXJkOiAwXG5cdH07XG5cdGNvbnN0IHZ2ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0O1xuXHRjb25zdCBpbm5lclcgPSBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDA7XG5cdGNvbnN0IGlubmVySCA9IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDA7XG5cdGNvbnN0IHZ2VyA9IE51bWJlcih2dj8ud2lkdGgpIHx8IDA7XG5cdGNvbnN0IHZ2SCA9IE51bWJlcih2dj8uaGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dlRvcCA9IE51bWJlcih2dj8ub2Zmc2V0VG9wKSB8fCAwO1xuXHRjb25zdCB2a0ggPSBOdW1iZXIodmlydHVhbEtleWJvYXJkKCk/LmJvdW5kaW5nQm94Py5oZWlnaHQpIHx8IDA7XG5cdGNvbnN0IHZ2T3ZlcmxhcCA9IGlubmVySCA+IDAgJiYgdnZIID4gMCA/IGlubmVySCAtIHZ2SCAtIHZ2VG9wIDogMDtcblx0Y29uc3Qga2V5Ym9hcmQgPSB2a0ggPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IHZrSCA6IHZ2T3ZlcmxhcCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYID8gdnZPdmVybGFwIDogMDtcblx0Y29uc3QgY2FuZGlkYXRlVyA9IE1hdGgubWF4KGlubmVyVywgdnZXKTtcblx0Y29uc3QgY2FuZGlkYXRlSCA9IE1hdGgubWF4KGlubmVySCwgdnZIICsgdnZUb3AsIGtleWJvYXJkID4gMCA/IHZ2SCArIGtleWJvYXJkIDogMCk7XG5cdGNvbnN0IG9yaWVudCA9IHR5cGVvZiBtYXRjaE1lZGlhICE9PSBcInVuZGVmaW5lZFwiICYmIG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgPyBcImxcIiA6IFwicFwiO1xuXHRpZiAob3JpZW50ICE9PSBsYXlvdXRMb2NrT3JpZW50KSB7XG5cdFx0bGF5b3V0TG9ja09yaWVudCA9IG9yaWVudDtcblx0XHRsYXlvdXRMb2NrVyA9IDA7XG5cdFx0bGF5b3V0TG9ja0ggPSAwO1xuXHR9XG5cdGNvbnN0IHN1ZGRlblNocmluayA9IGxheW91dExvY2tIID4gMCAmJiBsYXlvdXRMb2NrSCAtIGNhbmRpZGF0ZUggPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWDtcblx0aWYgKCEoa2V5Ym9hcmQgPiAwIHx8IGlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHx8IHN1ZGRlblNocmluaykpIHtcblx0XHRsYXlvdXRMb2NrVyA9IGNhbmRpZGF0ZVc7XG5cdFx0bGF5b3V0TG9ja0ggPSBjYW5kaWRhdGVIO1xuXHR9IGVsc2Uge1xuXHRcdGxheW91dExvY2tXID0gTWF0aC5tYXgoY2FuZGlkYXRlVywgbGF5b3V0TG9ja1cpO1xuXHRcdGxheW91dExvY2tIID0gTWF0aC5tYXgoY2FuZGlkYXRlSCwgbGF5b3V0TG9ja0gpO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0d2lkdGg6IGxheW91dExvY2tXIHx8IGNhbmRpZGF0ZVcsXG5cdFx0aGVpZ2h0OiBsYXlvdXRMb2NrSCB8fCBjYW5kaWRhdGVILFxuXHRcdGtleWJvYXJkXG5cdH07XG59O1xudmFyIHBpbk92ZXJsYXlTY3JvbGwgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdGlmIChyZWFkTGF5b3V0Vmlld3BvcnQoKS5rZXlib2FyZCA8PSAwICYmICFpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgcmV0dXJuO1xuXHRpZiAod2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5Py5zY3JvbGxUb3ApIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbn07XG52YXIgZ2V0QXZhaWxTaXplID0gKCkgPT4ge1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdGNvbnN0IGwgPSB0eXBlb2YgbWF0Y2hNZWRpYSAhPSBcInVuZGVmaW5lZFwiID8gbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyA6IGZhbHNlO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBsYXlvdXQgPSByZWFkTGF5b3V0Vmlld3BvcnQoKTtcblx0Y29uc3QgdnZCbG9jayA9IHtcblx0XHRcIi0tdnYtd2lkdGhcIjogYCR7dnY/LndpZHRoID8/ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmlubmVyV2lkdGggOiAwKX1weGAsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiBgJHt2dj8uaGVpZ2h0ID8/ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmlubmVySGVpZ2h0IDogMCl9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtbGVmdFwiOiBgJHt2dj8ub2Zmc2V0TGVmdCA/PyAwfXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt2dj8ub2Zmc2V0VG9wID8/IDB9cHhgLFxuXHRcdFwiLS12di1zY2FsZVwiOiBTdHJpbmcodnY/LnNjYWxlID8/IDEpLFxuXHRcdFwiLS1sdi13aWR0aFwiOiBgJHtsYXlvdXQud2lkdGh9cHhgLFxuXHRcdFwiLS1sdi1oZWlnaHRcIjogYCR7bGF5b3V0LmhlaWdodH1weGAsXG5cdFx0XCItLWtleWJvYXJkLW92ZXJsYXktaGVpZ2h0XCI6IGAke2xheW91dC5rZXlib2FyZH1weGBcblx0fTtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnRvZ2dsZUF0dHJpYnV0ZShcImRhdGEtdmstb3BlblwiLCBsYXlvdXQua2V5Ym9hcmQgPiAwKTtcblx0aWYgKHR5cGVvZiBzY3JlZW4gIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGNvbnN0IGF3ID0gc2NyZWVuPy5hdmFpbFdpZHRoICsgXCJweFwiO1xuXHRcdGNvbnN0IGFoID0gc2NyZWVuPy5hdmFpbEhlaWdodCArIFwicHhcIjtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCItLXNjcmVlbi13aWR0aFwiOiBNYXRoLm1pbihzY3JlZW4/LndpZHRoLCBzY3JlZW4/LmF2YWlsV2lkdGgpICsgXCJweFwiLFxuXHRcdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogTWF0aC5taW4oc2NyZWVuPy5oZWlnaHQsIHNjcmVlbj8uYXZhaWxIZWlnaHQpICsgXCJweFwiLFxuXHRcdFx0XCItLWF2YWlsLXdpZHRoXCI6IGwgPyBhaCA6IGF3LFxuXHRcdFx0XCItLWF2YWlsLWhlaWdodFwiOiBsID8gYXcgOiBhaCxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0IHx8IE1hdGgubWluKHNjcmVlbj8uYXZhaWxIZWlnaHQsIHdpbmRvdz8uaW5uZXJIZWlnaHQpIHx8IDB9cHhgLFxuXHRcdFx0XCItLXBpeGVsLXJhdGlvXCI6IFN0cmluZyhkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLFxuXHRcdFx0Li4udnZCbG9ja1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtd2lkdGhcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXZpZXctaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi52dkJsb2NrXG5cdH07XG59O1xudmFyIGF2YWlsU2l6ZSA9IGdldEF2YWlsU2l6ZSgpO1xudmFyIGNsYXNzZXMgPSBbW1wiOnJvb3QsIDpob3N0LCA6c2NvcGVcIiwgYXZhaWxTaXplXV07XG52YXIgb3JpZW50YXRpb25OdW1iZXJNYXAgPSB7XG5cdFwicG9ydHJhaXQtcHJpbWFyeVwiOiAwLFxuXHRcImxhbmRzY2FwZS1wcmltYXJ5XCI6IDEsXG5cdFwicG9ydHJhaXQtc2Vjb25kYXJ5XCI6IDIsXG5cdFwibGFuZHNjYXBlLXNlY29uZGFyeVwiOiAzXG59O1xudmFyIHVwZGF0ZVZQID0gKGV2KSA9PiB7XG5cdGNvbnN0IHJ1bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdE9iamVjdC5hc3NpZ24oYXZhaWxTaXplLCBnZXRBdmFpbFNpemUoKSk7XG5cdE9iamVjdC5lbnRyaWVzKGF2YWlsU2l6ZSkuZm9yRWFjaCgoW3Byb3BOYW1lLCBwcm9wVmFsdWVdKSA9PiB7XG5cdFx0Y29uc3QgZXhpc3RzID0gcnVsZT8uc3R5bGU/LmdldFByb3BlcnR5VmFsdWUocHJvcE5hbWUpO1xuXHRcdGlmICghZXhpc3RzIHx8IGV4aXN0cyAhPSBwcm9wVmFsdWUpIHJ1bGU/LnN0eWxlPy5zZXRQcm9wZXJ0eT8uKHByb3BOYW1lLCBwcm9wVmFsdWUgfHwgXCJcIiwgXCJcIik7XG5cdH0pO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLW9yaWVudGF0aW9uLXNlY29uZGFyeVwiLCBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlPy5lbmRzV2l0aD8uKFwic2Vjb25kYXJ5XCIpID8gXCIxXCIgOiBcIjBcIik7XG59O1xudmFyIGdldENvcnJlY3RPcmllbnRhdGlvbiA9ICgpID0+IHtcblx0bGV0IG9yaWVudGF0aW9uVHlwZSA9IHNjcmVlbj8ub3JpZW50YXRpb24/LnR5cGUgfHwgXCJwb3J0cmFpdC1wcmltYXJ5XCI7XG5cdGlmICghZ2xvYmFsVGhpcy5tYXRjaE1lZGlhKFwiKChkaXNwbGF5LW1vZGU6IGZ1bGxzY3JlZW4pIG9yIChkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpIG9yIChkaXNwbGF5LW1vZGU6IHdpbmRvdy1jb250cm9scy1vdmVybGF5KSlcIikubWF0Y2hlcykge1xuXHRcdGlmIChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykgb3JpZW50YXRpb25UeXBlID0gb3JpZW50YXRpb25UeXBlLnJlcGxhY2UoXCJsYW5kc2NhcGVcIiwgXCJwb3J0cmFpdFwiKTtcblx0XHRlbHNlIGlmIChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwicG9ydHJhaXRcIiwgXCJsYW5kc2NhcGVcIik7XG5cdH1cblx0cmV0dXJuIG9yaWVudGF0aW9uVHlwZTtcbn07XG52YXIgcGFzc2l2ZU9wdHMkMSA9IHsgcGFzc2l2ZTogdHJ1ZSB9O1xudmFyIHdoZW5BbnlTY3JlZW5DaGFuZ2VzID0gKGNiKSA9PiB7XG5cdGxldCB0aWNraW5nID0gZmFsc2U7XG5cdGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcblx0XHRpZiAoIXRpY2tpbmcpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRcdHVwZGF0ZVZQKCk7XG5cdFx0XHRcdGNiKCk7XG5cdFx0XHRcdHRpY2tpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdFx0dGlja2luZyA9IHRydWU7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCB1bnN1YnNjcmliZXJzID0gW107XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChuYXZpZ2F0b3I/LnZpcnR1YWxLZXlib2FyZCwgXCJnZW9tZXRyeWNoYW5nZVwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdz8udmlzdWFsVmlld3BvcnQsIFwic2Nyb2xsXCIsICgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdFx0dXBkYXRlKCk7XG5cdH0sIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdz8udmlzdWFsVmlld3BvcnQsIFwicmVzaXplXCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoc2NyZWVuPy5vcmllbnRhdGlvbiwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3csIFwicmVzaXplXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCwgXCJmdWxsc2NyZWVuY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKSwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCBcImNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcImZvY3VzaW5cIiwgKCkgPT4ge1xuXHRcdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0XHRpZiAoaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcblx0XHRcdGxheW91dExvY2tXID0gTWF0aC5tYXgobGF5b3V0TG9ja1csIE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMCwgTnVtYmVyKHdpbmRvdy52aXN1YWxWaWV3cG9ydD8ud2lkdGgpIHx8IDApO1xuXHRcdFx0bGF5b3V0TG9ja0ggPSBNYXRoLm1heChsYXlvdXRMb2NrSCwgTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCwgTnVtYmVyKHdpbmRvdy52aXN1YWxWaWV3cG9ydD8uaGVpZ2h0KSB8fCAwKTtcblx0XHR9XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcImZvY3Vzb3V0XCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdHVwZGF0ZSgpO1xuXHRydW5XaGVuSWRsZSgoKSA9PiB1cGRhdGUoKSwgMTAwKTtcblx0cmV0dXJuICgpID0+IHVuc3Vic2NyaWJlcnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xufTtcbnZhciBmaXhPcmllbnRUb1NjcmVlbiA9IChlbGVtZW50KSA9PiB7XG5cdGlmICghZWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucz8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKSkge1xuXHRcdGVsZW1lbnQ/LmNsYXNzTGlzdD8uYWRkPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpO1xuXHRcdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcygoKSA9PiB7XG5cdFx0XHRjb25zdCBuZXh0ID0gb3JpZW50YXRpb25OdW1iZXJNYXA/LltnZXRDb3JyZWN0T3JpZW50YXRpb24oKV0gPz8gMDtcblx0XHRcdGVsZW1lbnQub3JpZW50ID0gbmV4dDtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlPy4oXCJvcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHRcdGVsZW1lbnQuc3R5bGU/LnNldFByb3BlcnR5Py4oXCItLW9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvTWVhc3VyZS50c1xudmFyIGN0eCA9IG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIGluaXRUZXh0U3R5bGUgPSAoZWxlbWVudCwgY3R4KSA9PiB7XG5cdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBcIlwiKTtcblx0aWYgKGN0eCAmJiBzdHlsZSkge1xuXHRcdGNvbnN0IGZvbnRXZWlnaHQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC13ZWlnaHRcIikgfHwgXCJub3JtYWxcIjtcblx0XHRjb25zdCBmb250U2l6ZSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikgfHwgXCIxNnB4XCI7XG5cdFx0Y29uc3QgZm9udEZhbWlseSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWZhbWlseVwiKSB8fCBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRcdGNvbnN0IGZvbnRTdHJldGNoID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc3RyZXRjaFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFN0cmV0Y2ggPSBmb250U3RyZXRjaC5pbmNsdWRlcyhcIiVcIikgPyBcIm5vcm1hbFwiIDogZm9udFN0cmV0Y2g7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmxldHRlclNwYWNpbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibGV0dGVyLXNwYWNpbmdcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udEtlcm5pbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1rZXJuaW5nXCIpIHx8IFwiYXV0b1wiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250VmFyaWFudENhcHMgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC12YXJpYW50LWNhcHNcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udCA9IGAke2ZvbnRXZWlnaHR9ICR7Zm9udFNpemV9ICR7Zm9udEZhbWlseX1gO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cbn07XG52YXIgbWVhc3VyZVRleHQgPSAodGV4dCwgZWxlbWVudCkgPT4ge1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShlbGVtZW50LCBjdHgpO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cblx0cmV0dXJuIHsgd2lkdGg6IG51bGwgfTtcbn07XG52YXIgbWVhc3VyZUlucHV0SW5Gb2N1cyA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQudmFsdWUuc2xpY2UoMCwgaW5wdXQuc2VsZWN0aW9uRW5kIHx8IDApO1xuXHRyZXR1cm4gbWVhc3VyZVRleHQodGV4dCwgaW5wdXQpO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbiA9IChpbnB1dCwgcG9pbnQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0Py52YWx1ZSB8fCBcIlwiO1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShpbnB1dCwgY3R4KTtcblx0XHRsZXQgY3VycmVudFdpZHRoID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1cnJlbnRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0LnNsaWNlKDAsIGkpKT8ud2lkdGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoID09IG51bGwpIHJldHVybiB0ZXh0Lmxlbmd0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggIT0gbnVsbCAmJiBjdXJyZW50V2lkdGggPj0gcG9pbnRbMF0pIHJldHVybiBNYXRoLm1heChpIC0gMSwgMCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0Lmxlbmd0aDtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50ID0gKGlucHV0LCBjbGllbnQpID0+IHtcblx0Y29uc3QgYm94ID0gaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IHBvaW50ID0gW2NsaWVudFswXSAtIGJveC5sZWZ0IC8gdW5maXhlZENsaWVudFpvb20oKSwgY2xpZW50WzFdIC0gYm94LnRvcCAvIHVuZml4ZWRDbGllbnRab29tKCldO1xuXHRyZXR1cm4gY29tcHV0ZUNhcmV0UG9zaXRpb24oaW5wdXQsIHBvaW50KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9MYXVuY2hlckdyaWQudHNcbnZhciByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCA9IChlbCwgbGF5b3V0T3ZlcnJpZGUpID0+IHtcblx0Y29uc3QgYyA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1jb2x1bW5zXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgciA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1yb3dzXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgYmFzZSA9IG5vcm1hbGl6ZUdyaWRMYXlvdXQobGF5b3V0T3ZlcnJpZGUgPz8gWzQsIDhdKTtcblx0cmV0dXJuIFtOdW1iZXIuaXNGaW5pdGUoYykgJiYgYyA+IDAgPyBjIDogYmFzZVswXSwgTnVtYmVyLmlzRmluaXRlKHIpICYmIHIgPiAwID8gciA6IGJhc2VbMV1dO1xufTtcbnZhciByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQgPSAoZ3JpZFN5c3RlbSwgY2xpZW50UG9pbnQsIGFyZ3MsIG1vZGUgPSBcImZsb29yXCIpID0+IHtcblx0aWYgKCFncmlkU3lzdGVtKSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCByZWN0ID0gZ3JpZFN5c3RlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRpZiAoIXJlY3QpIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IGxheW91dCA9IHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50KGdyaWRTeXN0ZW0sIGFyZ3M/LmxheW91dCk7XG5cdGNvbnN0IG9yaWVudCA9IG9yaWVudE9mKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBjcyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBwbCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdMZWZ0KSB8fCAwO1xuXHRjb25zdCBwdCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdUb3ApIHx8IDA7XG5cdGNvbnN0IHByID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1JpZ2h0KSB8fCAwO1xuXHRjb25zdCBwYiA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdCb3R0b20pIHx8IDA7XG5cdGNvbnN0IGNvbnRlbnRXID0gTWF0aC5tYXgoMSwgKHJlY3Qud2lkdGggfHwgZ3JpZFN5c3RlbS5jbGllbnRXaWR0aCB8fCAxKSAtIHBsIC0gcHIpO1xuXHRjb25zdCBjb250ZW50SCA9IE1hdGgubWF4KDEsIChyZWN0LmhlaWdodCB8fCBncmlkU3lzdGVtLmNsaWVudEhlaWdodCB8fCAxKSAtIHB0IC0gcGIpO1xuXHRjb25zdCBjc0Nvb3JkID0gWyhjbGllbnRQb2ludD8uWzBdIHx8IDApIC0gcmVjdC5sZWZ0IC0gcGwsIChjbGllbnRQb2ludD8uWzFdIHx8IDApIC0gcmVjdC50b3AgLSBwdF07XG5cdHJldHVybiByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwoY3NDb29yZCwgW2NvbnRlbnRXLCBjb250ZW50SF0sIGxheW91dCwgb3JpZW50LCB7XG5cdFx0bW9kZSxcblx0XHRyZWRpcmVjdDoge1xuXHRcdFx0aXRlbTogYXJncz8uaXRlbSxcblx0XHRcdGxpc3Q6IGFyZ3M/Lmxpc3QsXG5cdFx0XHRpdGVtczogYXJncz8uaXRlbXNcblx0XHR9XG5cdH0pO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL0FuaW1hdGlvbi50c1xudmFyIGFuaW1hdGVTaG93ID0gKHRhcmdldCkgPT4gYXBwZWFyKHRhcmdldCwgZGVjb3JTaG93KTtcbnZhciBhbmltYXRlSGlkZSA9ICh0YXJnZXQpID0+IGRpc2FwcGVhcih0YXJnZXQsIGRlY29ySGlkZSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9kZWNvci9TaGFwZS50c1xudmFyIFdhdnlTaGFwZWRDaXJjbGUgPSAoc3RlcHMgPSAxMDAsIGFtcGxpdHVkZSA9IC4wNSwgZnJlcSA9IDgpID0+IHtcblx0Y29uc3QgcG9pbnRzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHM7IGkrKykgcG9pbnRzLnB1c2goaSAvIHN0ZXBzKTtcblx0Y29uc3QgYW5nbGUgPSAoc3RlcCkgPT4ge1xuXHRcdHJldHVybiBgY2FsYygke3N0ZXB9cmFkICogcGkgKiAyKWA7XG5cdH07XG5cdGNvbnN0IHZhcmlhbnQgPSAoc3RlcCkgPT4ge1xuXHRcdHJldHVybiBgY2FsYyhjYWxjKGNvcyhjYWxjKHZhcigtLWNsaXAtZnJlcSwgOCkgKiAke2FuZ2xlKHN0ZXApfSkpICogMC41ICsgMC41KSAqIHZhcigtLWNsaXAtYW1wbGl0dWRlLCAwKSlgO1xuXHR9O1xuXHRjb25zdCBmdW5jID0gKHN0ZXApID0+IFtgY2FsYyhjYWxjKDAuNSArIGNhbGMoY29zKCR7YW5nbGUoc3RlcCl9KSAqIGNhbGMoMC41IC0gJHt2YXJpYW50KHN0ZXApfSkpKSAqIHZhcigtLWljb24tc2l6ZSwgMTAwJSkpYCwgYGNhbGMoY2FsYygwLjUgKyBjYWxjKHNpbigke2FuZ2xlKHN0ZXApfSkgKiBjYWxjKDAuNSAtICR7dmFyaWFudChzdGVwKX0pKSkgKiB2YXIoLS1pY29uLXNpemUsIDEwMCUpKWBdO1xuXHRyZXR1cm4ge1xuXHRcdFwiLS1jbGlwLWFtcGxpdHVkZVwiOiBhbXBsaXR1ZGUsXG5cdFx0XCItLWNsaXAtZnJlcVwiOiBmcmVxLFxuXHRcdFwiLS1jbGlwLXBhdGhcIjogYHBvbHlnb24oJHtwb2ludHMubWFwKChzdGVwKSA9PiB7XG5cdFx0XHRyZXR1cm4gZnVuYyhzdGVwKS5qb2luKFwiIFwiKTtcblx0XHR9KS5qb2luKFwiLCBcIil9KWBcblx0fTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9PYnNlcnZlci50c1xudmFyIG9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xudmFyIG9uQm9yZGVyT2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkJvcmRlck9ic2VydmVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkNvbnRlbnRPYnNlcnZlXCIpO1xudmFyIG9uQ29udGVudE9ic2VydmUkMSA9IGdsb2JhbFRoaXNbb25Db250ZW50T2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVud3JhcEZyb21RdWVyeSA9IChlbGVtZW50KSA9PiB7XG5cdGlmICh0eXBlb2YgZWxlbWVudD8uY3VycmVudCA9PSBcIm9iamVjdFwiKSBlbGVtZW50ID0gZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50Py5jdXJyZW50ID8/ICh0eXBlb2YgZWxlbWVudD8uc2VsZiA9PSBcIm9iamVjdFwiID8gZWxlbWVudD8uc2VsZiA6IG51bGwpID8/IGVsZW1lbnQ7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBub3JtYWxpemVTZWxlY3RvciA9IChzZWxlY3RvciwgZmFsbGJhY2sgPSBcIipcIikgPT4ge1xuXHRpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsbGJhY2s7XG5cdHJldHVybiBzZWxlY3Rvci50cmltKCkgfHwgZmFsbGJhY2s7XG59O1xudmFyIHNhZmVRdWVyeVNlbGVjdG9yQWxsID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuXHRpZiAoIWVsIHx8IHR5cGVvZiBlbC5xdWVyeVNlbGVjdG9yQWxsICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBbXTtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IsIFwiXCIpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIFtdO1xuXHR0cnkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSB8fCBbXSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBbXTtcblx0fVxufTtcbnZhciBzYWZlTWF0Y2hlcyA9IChlbCwgc2VsZWN0b3IpID0+IHtcblx0aWYgKCFlbCB8fCB0eXBlb2YgZWwubWF0Y2hlcyAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLCBcIlwiKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gISFlbC5tYXRjaGVzKHNlbCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBvYnNlcnZlQ29udGVudEJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQ29udGVudE9ic2VydmUkMS5oYXMoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSkpIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgY29udGVudEJveFNpemUgPSBlbnRyeS5jb250ZW50Qm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGNvbnRlbnRCb3hTaXplKSBjYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiPy4oY29udGVudEJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50LmNsaWVudFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50LmNsaWVudEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkNvbnRlbnRPYnNlcnZlJDEuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG5cdFx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImNvbnRlbnQtYm94XCIgfSk7XG5cdH1cblx0b25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uc3BsaWNlPy4ob25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uaW5kZXhPZihjYikgfHwgLTEsIDEpIH07XG59O1xudmFyIG9ic2VydmVCb3JkZXJCb3ggPSAoZWxlbWVudCwgY2IpID0+IHtcblx0aWYgKCFvbkJvcmRlck9ic2VydmUkMS5oYXMoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSkpIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihib3JkZXJCb3hTaXplLCBvYnNlcnZlcikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNiPy4oe1xuXHRcdFx0aW5saW5lU2l6ZTogZWxlbWVudC5vZmZzZXRXaWR0aCxcblx0XHRcdGJsb2NrU2l6ZTogZWxlbWVudC5vZmZzZXRIZWlnaHRcblx0XHR9LCBvYnNlcnZlcik7XG5cdFx0b25Cb3JkZXJPYnNlcnZlJDEuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG5cdFx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxuXHRvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnB1c2g/LihjYik7XG5cdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uc3BsaWNlPy4ob25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZSA9IChlbGVtZW50LCBhdHRyaWJ1dGUsIGNiKSA9PiB7XG5cdGlmICh0eXBlb2YgZWxlbWVudD8uc2VsZWN0b3IgPT0gXCJzdHJpbmdcIikgcmV0dXJuIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKGVsZW1lbnQsIGVsZW1lbnQ/LnNlbGVjdG9yLCBhdHRyaWJ1dGUsIGNiKTtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoKGF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV0pLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSAmJiBhdHRyaWJ1dGVMaXN0LmhhcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkgY2IobXV0YXRpb24sIG9ic2VydmVyKTtcblx0fSk7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uYXR0cmlidXRlTGlzdF1cblx0fSk7XG5cdGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0OiBlbGVtZW50LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yLCBhdHRyaWJ1dGUsIGNiKSA9PiB7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoWy4uLmF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV1dLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRjb25zdCBhZGRlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGFkZGVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdFx0cmVtb3ZlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdFx0Wy4uLm5ldyBTZXQoYWRkZWROb2RlcyldLmZpbHRlcigoZWwpID0+IHNhZmVNYXRjaGVzKGVsLCBzZWwpKT8ubWFwPy4oKHRhcmdldCkgPT4ge1xuXHRcdFx0XHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuXHRcdFx0XHRcdGNiKHtcblx0XHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHRcdFx0XHRcdH0sIG9ic2VydmVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKHNhZmVNYXRjaGVzKG11dGF0aW9uLnRhcmdldCwgc2VsKSAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlXG5cdH0pO1xuXHRzYWZlUXVlcnlTZWxlY3RvckFsbChlbGVtZW50LCBzZWwpLm1hcCgodGFyZ2V0KSA9PiBhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gY2Ioe1xuXHRcdHRhcmdldCxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcbnZhciBvYnNlcnZlQnlTZWxlY3RvciA9IChlbGVtZW50LCBzZWxlY3RvciA9IFwiKlwiLCBjYiA9IChtdXQsIG9icykgPT4ge30pID0+IHtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRjb25zdCB1bndyYXBOb2Rlc0J5U2VsZWN0b3IgPSAobm9kZXMpID0+IHtcblx0XHRjb25zdCAkbm9kZXMgPSBBcnJheS5mcm9tKG5vZGVzIHx8IFtdKSB8fCBbXTtcblx0XHQkbm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRyZXR1cm4gWy4uLkFycmF5LmZyb20obmV3IFNldCgkbm9kZXMpLnZhbHVlcygpKV0uZmlsdGVyKChlbCkgPT4gc2FmZU1hdGNoZXMoZWwsIHNlbCkpO1xuXHR9O1xuXHRsZXQgb2JSZWYgPSBudWxsO1xuXHRjb25zdCBoYW5kbGVNdXRhdGlvbiA9IChtdXRhdGlvbikgPT4ge1xuXHRcdGNvbnN0IG9ic2VydmVyID0gb2JSZWY/LmRlcmVmPy4oKTtcblx0XHRjb25zdCBhZGRlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuXHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuXHRcdGlmIChhZGRlZE5vZGVzLmxlbmd0aCA+IDAgfHwgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdFx0dHlwZTogbXV0YXRpb24udHlwZSxcblx0XHRcdHRhcmdldDogbXV0YXRpb24udGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IG11dGF0aW9uLm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IG11dGF0aW9uLm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiBtdXRhdGlvbi5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzLFxuXHRcdFx0cmVtb3ZlZE5vZGVzXG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlT3V0Q29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUZvY3VzQ2xpY2sgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBmYWN0b3JzID0ge1xuXHRcdHBhc3NpdmU6IHRydWUsXG5cdFx0Y2FwdHVyZTogZmFsc2Vcblx0fTtcblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXNcIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtdmlzaWJsZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikgaGFuZGxlTXV0YXRpb24obXV0YXRpb24pO1xuXHR9KTtcblx0b2JSZWYgPSBuZXcgV2Vha1JlZihvYnNlcnZlcik7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlXG5cdH0pO1xuXHRjb25zdCBzZWxlY3RlZCA9IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQsIHNlbCk7XG5cdGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSBjYj8uKHtcblx0XHRhZGRlZE5vZGVzOiBzZWxlY3RlZCxcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIG9ic2VydmVyKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0JlaGF2aW9yLnRzXG52YXIgYm91bmRCZWhhdmlvcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiaW5kQmVoYXZpb3IgPSAoZWxlbWVudCwgYmVoU2V0LCBiZWhhdmlvcikgPT4ge1xuXHRuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFiZWhTZXQuaGFzKGJlaGF2aW9yKSkgYmVoU2V0LmFkZChiZWhhdmlvcik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciByZWZsZWN0QmVoYXZpb3JzID0gKGVsZW1lbnQsIGJlaGF2aW9ycykgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0aWYgKGJlaGF2aW9ycykge1xuXHRcdGNvbnN0IGJlaFNldCA9IGJvdW5kQmVoYXZpb3JzLmdldE9ySW5zZXJ0KGVsZW1lbnQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuXHRcdFsuLi5iZWhhdmlvcnM/LnZhbHVlcz8uKCkgfHwgW11dLm1hcCgoZSkgPT4gYmluZEJlaGF2aW9yKGVsZW1lbnQsIGJlaFNldCwgZSkpO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL1N0b3JlLnRzXG52YXIgbmFtZWRTdG9yZU1hcHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG5hbWVkU3RvcmVNYXBzXCIpO1xudmFyIG5hbWVkU3RvcmVNYXBzID0gZ2xvYmFsVGhpc1tuYW1lZFN0b3JlTWFwc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZ2V0U3RvcmVzT2ZFbGVtZW50ID0gKG1hcCwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCBFID0gWy4uLm1hcC5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChFPy5tYXA/LigoW24sIG1dKSA9PiBbbiwgbT8uZ2V0Py4oZWxlbWVudCldKT8uZmlsdGVyPy4oKFtuLCBlXSkgPT4gISFlKSB8fCBbXSk7XG59O1xudmFyIGlzV2Vha0NvbXBhdGlibGUgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKHR5cGVvZiBlbGVtZW50ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGVsZW1lbnQgPT0gXCJmdW5jdGlvblwiKSAmJiBlbGVtZW50ICE9IG51bGw7XG59O1xudmFyIGJpbmRTdG9yZSA9IChlbGVtZW50LCBuYW1lLCBvYmopID0+IHtcblx0aWYgKCFpc1dlYWtDb21wYXRpYmxlKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgcmV0dXJuIGVsZW1lbnQ7XG5cdGxldCB3ZWFrTWFwID0gbmFtZWRTdG9yZU1hcHMuZ2V0KG5hbWUpO1xuXHRpZiAoIXdlYWtNYXApIHtcblx0XHR3ZWFrTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdFx0bmFtZWRTdG9yZU1hcHMuc2V0KG5hbWUsIHdlYWtNYXApO1xuXHR9XG5cdGlmICghd2Vha01hcC5oYXMoZWxlbWVudCkgJiYgZWxlbWVudCAhPSBudWxsKSB3ZWFrTWFwLnNldChlbGVtZW50LCBvYmopO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdFN0b3JlcyA9IChlbGVtZW50LCBzdG9yZXMpID0+IHtcblx0aWYgKCFlbGVtZW50IHx8ICFzdG9yZXMpIHJldHVybjtcblx0Zm9yIChjb25zdCBbbmFtZSwgb2JqXSBvZiBzdG9yZXMuZW50cmllcygpKSBiaW5kU3RvcmUoZWxlbWVudCwgbmFtZSwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vTWl4aW5zLnRzXG52YXIgcmVmbGVjdE1peGlucyA9IChlbGVtZW50LCBtaXhpbnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChtaXhpbnMpIHtcblx0XHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRcdGlmICghYm91bmRNaXhpblNldD8uaGFzPy4oZWxlbWVudCkpIGJvdW5kTWl4aW5TZXQ/LnNldD8uKGVsZW1lbnQsIG1peGluU2V0KTtcblx0XHRbLi4ubWl4aW5zPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRNaXhpbnMoZWxlbWVudCwgZSwgbWl4aW5TZXQpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgZ2V0RWxlbWVudFJlbGF0ZWQgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHN0b3JlU2V0OiBnZXRTdG9yZXNPZkVsZW1lbnQobmFtZWRTdG9yZU1hcHMsIGVsZW1lbnQpLFxuXHRcdG1peGluU2V0OiBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSxcblx0XHRiZWhhdmlvclNldDogYm91bmRCZWhhdmlvcnM/LmdldD8uKGVsZW1lbnQpXG5cdH07XG59O1xudmFyIGJpbmRNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW4sIG1peFNldCkgPT4ge1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0bWl4U2V0IHx8PSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KTtcblx0aWYgKCFtaXhTZXQ/Lmhhcz8uKG1peGluKSkge1xuXHRcdG1peFNldD8uYWRkPy4obWl4aW4pO1xuXHRcdG1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uYWRkPy4oZWxlbWVudCk7XG5cdFx0aWYgKG1peGluLm5hbWUpIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXSwgbWl4aW4ubmFtZV0uZmlsdGVyKChuKSA9PiAhIW4pLmpvaW4oXCIgXCIpKTtcblx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgYm91bmRNaXhpblNldFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBib3VuZE1peGluU2V0ID0gZ2xvYmFsVGhpc1tib3VuZE1peGluU2V0U3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbWl4aW5FbGVtZW50c1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5FbGVtZW50c1wiKTtcbnZhciBtaXhpbkVsZW1lbnRzID0gZ2xvYmFsVGhpc1ttaXhpbkVsZW1lbnRzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbWl4aW5SZWdpc3RyeVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5SZWdpc3RyeVwiKTtcbnZhciBtaXhpblJlZ2lzdHJ5ID0gZ2xvYmFsVGhpc1ttaXhpblJlZ2lzdHJ5U3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBtaXhpbk5hbWVzcGFjZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5OYW1lc3BhY2VcIik7XG52YXIgbWl4aW5OYW1lc3BhY2UgPSBnbG9iYWxUaGlzW21peGluTmFtZXNwYWNlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzID0gKGVsZW1lbnQsIG1peGluKSA9PiB7XG5cdGlmICh0eXBlb2YgbWl4aW4gPT0gXCJzdHJpbmdcIikgbWl4aW4gPSBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihtaXhpbik7XG5cdGNvbnN0IG5hbWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Y29uc3QgbWl4aW5zID0gbmV3IFNldChbLi4ubmFtZXNdLm1hcCgobikgPT4gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obikpLmZpbHRlcigobSkgPT4gISFtKSk7XG5cdGNvbnN0IG1peGluU2V0ID0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdGlmICghbWl4aW5FbGVtZW50cz8uaGFzPy4obWl4aW4pKSBtaXhpbkVsZW1lbnRzPy5zZXQ/LihtaXhpbiwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpO1xuXHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdGNvbnN0IHdlbCA9IG5ldyBXZWFrUmVmKGVsZW1lbnQpO1xuXHRpZiAoIW1peGluU2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRpZiAoIW1peGlucy5oYXMobWl4aW4pKSBtaXhpbj8uZGlzY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRpZiAobWl4aW5zLmhhcyhtaXhpbikgfHwgIW1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uaGFzPy4oZWxlbWVudCkpIHtcblx0XHRcdG1peGluPy5jb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdFx0bmFtZXMuYWRkKG1peGluTmFtZXNwYWNlPy5nZXQ/LihtaXhpbikpO1xuXHRcdFx0bWl4aW5TZXQ/LmFkZD8uKG1peGluKTtcblx0XHRcdGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubmFtZXNdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0fVxuXHRcdG1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uYWRkPy4oZWxlbWVudCk7XG5cdH1cblx0aWYgKG1peGluU2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRpZiAoIW1peGlucy5oYXMobWl4aW4pKSB7XG5cdFx0XHRtaXhpblNldD8uZGVsZXRlPy4obWl4aW4pO1xuXHRcdFx0bWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIHJvb3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBhZGRSb290ID0gKHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbCkgPT4ge1xuXHRpZiAoIXJvb3QpIHJldHVybjtcblx0aWYgKCFyb290cz8uaGFzPy4ocm9vdCkpIHtcblx0XHRyb290cz8uYWRkPy4ocm9vdCk7XG5cdFx0b2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3Iocm9vdCwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAobXV0YXRpb24pID0+IHVwZGF0ZUFsbE1peGlucyhtdXRhdGlvbi50YXJnZXQpKTtcblx0XHRvYnNlcnZlQnlTZWxlY3Rvcihyb290LCBcIltkYXRhLW1peGluXVwiLCAobXV0YXRpb24pID0+IHtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0b2JzZXJ2ZVN0eWxlVHJlZShyb290KTtcblx0fVxuXHRyZXR1cm4gcm9vdDtcbn07XG52YXIgdXBkYXRlQWxsTWl4aW5zID0gKGVsZW1lbnQpID0+IHtcblx0Y29uc3QgbmFtZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pO1xuXHRbLi4ubmV3IFNldChbLi4ubmFtZXNdLm1hcCgobikgPT4gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obikpLmZpbHRlcigobSkgPT4gISFtKSldLm1hcD8uKChtKSA9PiB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZWxlbWVudCwgbSkpO1xufTtcbnZhciB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwgPSAoZWxlbWVudHMsIG1peGluKSA9PiB7XG5cdGVsZW1lbnRzLmZvckVhY2goKGUpID0+IG1peGluID8gdXBkYXRlTWl4aW5BdHRyaWJ1dGVzKGUsIG1peGluKSA6IHVwZGF0ZUFsbE1peGlucyhlKSk7XG59O1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMgPSAobWl4aW4pID0+IHtcblx0Zm9yIChjb25zdCByb290IG9mIHJvb3RzKSB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwocm9vdD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBtaXhpbik7XG59O1xudmFyIG5hbWVSZWdpc3RyeUYgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGtleSkgPT4ge1xuXHRtaXhpblJlZ2lzdHJ5Py5kZWxldGU/LihrZXkpO1xufSk7XG52YXIgcmVnaXN0ZXJNaXhpbiA9IChuYW1lLCBtaXhpbikgPT4ge1xuXHRpZiAoIW1peGluTmFtZXNwYWNlPy5oYXM/LihtaXhpbikpIHtcblx0XHRjb25zdCBrZXkgPSBuYW1lPy50cmltPy4oKTtcblx0XHRpZiAoa2V5KSB7XG5cdFx0XHRtaXhpbk5hbWVzcGFjZT8uc2V0Py4obWl4aW4sIGtleSk7XG5cdFx0XHRtaXhpblJlZ2lzdHJ5Py5zZXQ/LihrZXksIG1peGluKTtcblx0XHRcdG5hbWVSZWdpc3RyeUY/LnJlZ2lzdGVyPy4obWl4aW4sIGtleSk7XG5cdFx0XHR1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzKG1peGluKTtcblx0XHR9XG5cdH1cbn07XG5hZGRSb290KHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciBET01NaXhpbiA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IobmFtZSA9IG51bGwpIHtcblx0XHRpZiAobmFtZSkgcmVnaXN0ZXJNaXhpbihuYW1lLCB0aGlzKTtcblx0fVxuXHRjb25uZWN0KHdFbGVtZW50LCB3U2VsZiwgcmVsYXRlZCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsZW1lbnQsIHdTZWxmLCByZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c3RvcmVGb3JFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gbmFtZWRTdG9yZU1hcHMuZ2V0KHRoaXMubmFtZSB8fCBcIlwiKT8uZ2V0Py4oZWxlbWVudCk7XG5cdH1cblx0cmVsYXRlZEZvckVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KTtcblx0fVxuXHRnZXQgZWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIG1peGluRWxlbWVudHM/LmdldD8uKHRoaXMpO1xuXHR9XG5cdGdldCBzdG9yYWdlKCkge1xuXHRcdHJldHVybiBuYW1lZFN0b3JlTWFwcz8uZ2V0Py4odGhpcy5uYW1lIHx8IFwiXCIpO1xuXHR9XG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBtaXhpbk5hbWVzcGFjZT8uZ2V0Py4odGhpcyk7XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9IYW5kbGVyLnRzXG52YXIgaGFuZGxlSGlkZGVuID0gKGVsZW1lbnQsIF8sIHZpc2libGUpID0+IHtcblx0Y29uc3QgJHJlZiA9IHZpc2libGU7XG5cdGlmIChoYXNWYWx1ZSh2aXNpYmxlKSkgdmlzaWJsZSA9IHZpc2libGUudmFsdWU7XG5cdGNvbnN0IGlzVmlzaWJsZSA9ICh2aXNpYmxlID0gbm9ybWFsaXplUHJpbWl0aXZlKHZpc2libGUpKSAhPSBudWxsICYmIHZpc2libGUgIT09IGZhbHNlO1xuXHQkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIGVsZW1lbnQuaGlkZGVuID0gIWlzVmlzaWJsZTtcblx0XHRlbHNlIGlmIChpc1Zpc2libGUpIGVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIik7XG5cdFx0ZWxzZSBlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIsIFwiXCIpO1xuXHR9KTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGhhbmRsZVByb3BlcnR5ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCEocHJvcCA9IHR5cGVvZiBwcm9wID09IFwic3RyaW5nXCIgPyBrZWJhYlRvQ2FtZWwocHJvcCkgOiBwcm9wKSB8fCAhZWwgfHwgW1xuXHRcdFwic3R5bGVcIixcblx0XHRcImRhdGFzZXRcIixcblx0XHRcImF0dHJpYnV0ZVN0eWxlTWFwXCIsXG5cdFx0XCJzdHlsZU1hcFwiLFxuXHRcdFwiY29tcHV0ZWRTdHlsZU1hcFwiXG5cdF0uaW5kZXhPZihwcm9wIHx8IFwiXCIpICE9IC0xKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWwudmFsdWU7XG5cdGlmIChlbD8uW3Byb3BdID09PSB2YWwpIHJldHVybiBlbDtcblx0aWYgKGVsPy5bcHJvcF0gIT09IHZhbCkgJGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHZhbCAhPSBudWxsKSBlbFtwcm9wXSA9IHZhbDtcblx0XHRlbHNlIGRlbGV0ZSBlbFtwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlRGF0YXNldCA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IGRhdGFzZXRSZWYgPSBlbD8uZGF0YXNldDtcblx0aWYgKCFwcm9wIHx8ICFlbCB8fCAhZGF0YXNldFJlZikgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsPy52YWx1ZTtcblx0cHJvcCA9IGtlYmFiVG9DYW1lbChwcm9wKTtcblx0aWYgKGRhdGFzZXRSZWY/Lltwcm9wXSA9PT0gKHZhbCA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2YWwpKSkgcmV0dXJuIGVsO1xuXHRpZiAodmFsID09IG51bGwgfHwgdmFsID09PSBmYWxzZSkgZGVsZXRlIGRhdGFzZXRSZWZbcHJvcF07XG5cdGVsc2UgJGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB2YWwgIT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsICE9IFwiZnVuY3Rpb25cIikgZGF0YXNldFJlZltwcm9wXSA9IFN0cmluZyh2YWwpO1xuXHRcdGVsc2UgZGVsZXRlIGRhdGFzZXRSZWZbcHJvcF07XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGRlbGV0ZVN0eWxlUHJvcGVydHkgPSAoZWwsIG5hbWUpID0+IGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KGNhbWVsVG9LZWJhYihuYW1lKSk7XG52YXIgaGFuZGxlU3R5bGVDaGFuZ2UgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRjb25zdCBzdHlsZVJlZiA9IGVsPy5zdHlsZTtcblx0aWYgKCFwcm9wIHx8IHR5cGVvZiBwcm9wICE9IFwic3RyaW5nXCIgfHwgIWVsIHx8ICFzdHlsZVJlZikgcmV0dXJuIGVsO1xuXHQkYXZvaWRUcmlnZ2VyKHZhbCwgKCkgPT4ge1xuXHRcdGlmIChpc1ZhbCh2YWwpIHx8IGhhc1ZhbHVlKHZhbCkgfHwgaXNWYWx1ZVVuaXQodmFsKSkgc2V0U3R5bGVQcm9wZXJ0eShlbCwgcHJvcCwgdmFsKTtcblx0XHRlbHNlIGlmICh2YWwgPT0gbnVsbCkgZGVsZXRlU3R5bGVQcm9wZXJ0eShlbCwgcHJvcCk7XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGhhbmRsZUF0dHJpYnV0ZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGlmICghcHJvcCB8fCAhZWwpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0cHJvcCA9IGNhbWVsVG9LZWJhYihwcm9wKTtcblx0aWYgKGVsPy5nZXRBdHRyaWJ1dGU/Lihwcm9wKSA9PT0gKHZhbCA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2YWwpKSkgcmV0dXJuIGVsO1xuXHQkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiICYmIHZhbCAhPSBudWxsICYmICh0eXBlb2YgdmFsID09IFwiYm9vbGVhblwiID8gdmFsID09IHRydWUgOiB0cnVlKSkgZWw/LnNldEF0dHJpYnV0ZT8uKHByb3AsIFN0cmluZyh2YWwpKTtcblx0XHRlbHNlIGVsPy5yZW1vdmVBdHRyaWJ1dGU/Lihwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9qdW5jdGlvbi90eXBlcy50c1xuZnVuY3Rpb24ganVuY3Rpb25Ub0JveChhLCBiKSB7XG5cdGNvbnN0IGxlZnQgPSBNYXRoLm1pbihhLngsIGIueCk7XG5cdGNvbnN0IHRvcCA9IE1hdGgubWluKGEueSwgYi55KTtcblx0Y29uc3QgcmlnaHQgPSBNYXRoLm1heChhLngsIGIueCk7XG5cdGNvbnN0IGJvdHRvbSA9IE1hdGgubWF4KGEueSwgYi55KTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGg6IHJpZ2h0IC0gbGVmdCxcblx0XHRoZWlnaHQ6IGJvdHRvbSAtIHRvcFxuXHR9O1xufVxudmFyIEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgSlVOQ1RJT05fRFJBR19FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgSlVOQ1RJT05fUkVTSVpFX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tcmVzaXplOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tcmVzaXplOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXJlc2l6ZTplbmRcIlxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL2p1bmN0aW9uL0p1bmN0aW9uTWl4aW5zLnRzXG52YXIgbWl4aW5EaXNwb3NlcnNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRGlzcG9zZXJzXCIpO1xudmFyIG1peGluRGlzcG9zZXJzID0gZ2xvYmFsVGhpc1ttaXhpbkRpc3Bvc2Vyc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHB1c2hEaXNwb3NhYmxlID0gKGhvc3QsIG1peGluTmFtZSwgZm4pID0+IHtcblx0Y29uc3QgbWFwID0gbWl4aW5EaXNwb3NlcnMuZ2V0KGhvc3QpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGNvbnN0IGxpc3QgPSBtYXAuZ2V0KG1peGluTmFtZSkgPz8gW107XG5cdGxpc3QucHVzaChmbik7XG5cdG1hcC5zZXQobWl4aW5OYW1lLCBsaXN0KTtcblx0bWl4aW5EaXNwb3NlcnMuc2V0KGhvc3QsIG1hcCk7XG59O1xudmFyIHJ1bkRpc3Bvc2VycyA9IChob3N0LCBtaXhpbk5hbWUpID0+IHtcblx0Y29uc3QgbWFwID0gbWl4aW5EaXNwb3NlcnMuZ2V0KGhvc3QpO1xuXHRjb25zdCBsaXN0ID0gbWFwPy5nZXQobWl4aW5OYW1lKTtcblx0aWYgKCFsaXN0KSByZXR1cm47XG5cdGZvciAoY29uc3QgZm4gb2YgbGlzdCkgdHJ5IHtcblx0XHRmbigpO1xuXHR9IGNhdGNoIHt9XG5cdG1hcC5kZWxldGUobWl4aW5OYW1lKTtcblx0aWYgKG1hcC5zaXplID09PSAwKSBtaXhpbkRpc3Bvc2Vycy5kZWxldGUoaG9zdCk7XG59O1xudmFyIHBhcnNlUHhWYXIgPSAoaG9zdCwgbmFtZSkgPT4ge1xuXHRjb25zdCByYXcgPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lihob3N0KT8uZ2V0UHJvcGVydHlWYWx1ZT8uKG5hbWUpPy50cmltPy4oKSA/PyBcIlwiO1xuXHRjb25zdCBuID0gcGFyc2VGbG9hdChyYXcpO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IDA7XG59O1xudmFyIHF1ZXJ5SGFuZGxlID0gKGhvc3QsIGF0dHIsIGZhbGxiYWNrKSA9PiB7XG5cdGNvbnN0IHNlbCA9IGhvc3QuZ2V0QXR0cmlidXRlKGF0dHIpPy50cmltKCk7XG5cdGlmICghc2VsKSByZXR1cm4gZmFsbGJhY2s7XG5cdGNvbnN0IGZvdW5kID0gaG9zdC5xdWVyeVNlbGVjdG9yKHNlbCk7XG5cdHJldHVybiBmb3VuZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZm91bmQgOiBmYWxsYmFjaztcbn07XG52YXIgSnVuY3Rpb25TZWxlY3RNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG92ZXJsYXkuY2xhc3NOYW1lID0gXCJ1aS1qdW5jdGlvbi1zZWxlY3Qtb3ZlcmxheVwiO1xuXHRcdG92ZXJsYXkuc2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1vdmVybGF5XCIsIFwiXCIpO1xuXHRcdG92ZXJsYXkuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OnZhcigtLXotbWF4LCA5OTk5KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNWE3ZmZmKSA3MCUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kOmNvbG9yLW1peChpbiBva2xhYiwgdmFyKC0tY29sb3ItcHJpbWFyeSwgIzVhN2ZmZikgMTQlLCB0cmFuc3BhcmVudCk7ZGlzcGxheTpub25lO2luc2V0OmF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowO1wiO1xuXHRcdGNvbnN0IGVuc3VyZVBvc2l0aW9uZWQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoKGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpKT8ucG9zaXRpb24gPT09IFwic3RhdGljXCIpIGhvc3Quc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fTtcblx0XHRlbnN1cmVQb3NpdGlvbmVkKCk7XG5cdFx0aG9zdC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblx0XHRsZXQgYWN0aXZlID0gZmFsc2U7XG5cdFx0bGV0IGEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0bGV0IGIgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0Y29uc3QgbG9jYWxQb2ludCA9IChldikgPT4ge1xuXHRcdFx0Y29uc3QgciA9IGhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBldi5jbGllbnRYIC0gci5sZWZ0LFxuXHRcdFx0XHR5OiBldi5jbGllbnRZIC0gci50b3Bcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBhcHBseU92ZXJsYXkgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aWYgKGJveC53aWR0aCA8IDEgJiYgYm94LmhlaWdodCA8IDEpIHtcblx0XHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdG92ZXJsYXkuc3R5bGUubGVmdCA9IGAke2JveC5sZWZ0fXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUudG9wID0gYCR7Ym94LnRvcH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLndpZHRoID0gYCR7Ym94LndpZHRofXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7Ym94LmhlaWdodH1weGA7XG5cdFx0fTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLWp1bmN0aW9uLWlnbm9yZS1zZWxlY3RdLCBbZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZV0sIFtkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVdLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKSByZXR1cm47XG5cdFx0XHRpZiAoIShldi50YXJnZXQgPT09IGhvc3QgfHwgaG9zdC5jb250YWlucyhldi50YXJnZXQpKSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdGEgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGIgPSB7IC4uLmEgfTtcblx0XHRcdGhvc3Quc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YiA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3QgZW5kID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGVuZChldik7XG5cdFx0fTtcblx0XHRjb25zdCBvbkNhbmNlbCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmNhbmNlbCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHsgaG9zdCB9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRvdmVybGF5LnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVyY2FuY2VsXCIsIG9uQ2FuY2VsKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvbkRyYWdNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpKTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXlcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpKTtcblx0XHRjb25zdCBwcmV2aW91c1RyYW5zZm9ybSA9IGhvc3Quc3R5bGUudHJhbnNmb3JtO1xuXHRcdGlmICghaG9zdC5zdHlsZS50cmFuc2Zvcm0gfHwgaG9zdC5zdHlsZS50cmFuc2Zvcm0gPT09IFwibm9uZVwiKSBob3N0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoY2FsYyh2YXIoLS1qeC1kcmFnLXgsIDApICogMXB4KSwgY2FsYyh2YXIoLS1qeC1kcmFnLXksIDApICogMXB4KSwgMClcIjtcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IGRyYWdnaW5nID0gZmFsc2U7XG5cdFx0bGV0IHN0YXJ0WCA9IDA7XG5cdFx0bGV0IHN0YXJ0WSA9IDA7XG5cdFx0bGV0IGJhc2VYID0gMDtcblx0XHRsZXQgYmFzZVkgPSAwO1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldCAhPT0gaGFuZGxlICYmICFoYW5kbGUuY29udGFpbnMoZXYudGFyZ2V0KSkgcmV0dXJuO1xuXHRcdFx0ZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0c3RhcnRYID0gZXYuY2xpZW50WDtcblx0XHRcdHN0YXJ0WSA9IGV2LmNsaWVudFk7XG5cdFx0XHRiYXNlWCA9IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKTtcblx0XHRcdGJhc2VZID0gcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpO1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0Y2xpZW50WDogZXYuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiBldi5jbGllbnRZLFxuXHRcdFx0XHRcdGJhc2VYLFxuXHRcdFx0XHRcdGJhc2VZXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFkcmFnZ2luZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgZHggPSBldi5jbGllbnRYIC0gc3RhcnRYO1xuXHRcdFx0Y29uc3QgZHkgPSBldi5jbGllbnRZIC0gc3RhcnRZO1xuXHRcdFx0Y29uc3QgbnggPSBiYXNlWCArIGR4O1xuXHRcdFx0Y29uc3QgbnkgPSBiYXNlWSArIGR5O1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy14XCIsIG54KTtcblx0XHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBueSk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRkeCxcblx0XHRcdFx0XHRkeSxcblx0XHRcdFx0XHR4OiBueCxcblx0XHRcdFx0XHR5OiBueVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR4OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIiksXG5cdFx0XHRcdFx0eTogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCAoKSA9PiB7XG5cdFx0XHRob3N0LnN0eWxlLnRyYW5zZm9ybSA9IHByZXZpb3VzVHJhbnNmb3JtO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvblJlc2l6ZU1peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0bGV0IHN4ID0gMDtcblx0XHRsZXQgc3kgPSAwO1xuXHRcdGxldCBzdyA9IDA7XG5cdFx0bGV0IHNoID0gMDtcblx0XHRjb25zdCBtaW5XID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KGhvc3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKTtcblx0XHRjb25zdCBtaW5IID0gTWF0aC5tYXgoODAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4taFwiKSB8fCBcIlwiKSB8fCA4MCk7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IHRydWU7XG5cdFx0XHRzeCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzeSA9IGV2LmNsaWVudFk7XG5cdFx0XHRzdyA9IGhvc3Qub2Zmc2V0V2lkdGg7XG5cdFx0XHRzaCA9IGhvc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogc3csXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IG53ID0gTWF0aC5tYXgobWluVywgc3cgKyAoZXYuY2xpZW50WCAtIHN4KSk7XG5cdFx0XHRjb25zdCBuaCA9IE1hdGgubWF4KG1pbkgsIHNoICsgKGV2LmNsaWVudFkgLSBzeSkpO1xuXHRcdFx0aG9zdC5zdHlsZS53aWR0aCA9IGAke253fXB4YDtcblx0XHRcdGhvc3Quc3R5bGUuaGVpZ2h0ID0gYCR7bmh9cHhgO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogbncsXG5cdFx0XHRcdFx0aGVpZ2h0OiBuaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIXJlc2l6aW5nKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBob3N0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogaG9zdC5vZmZzZXRIZWlnaHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmNhbmNlbFwiLCBvblVwKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbm5ldyBKdW5jdGlvblNlbGVjdE1peGluKCk7XG5uZXcgSnVuY3Rpb25EcmFnTWl4aW4oKTtcbm5ldyBKdW5jdGlvblJlc2l6ZU1peGluKCk7XG5cbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgRE9NTWl4aW4sIEp1bmN0aW9uRHJhZ01peGluLCBKdW5jdGlvblJlc2l6ZU1peGluLCBKdW5jdGlvblNlbGVjdE1peGluLCBNQVRDSCwgTU9DLCBNT0NFbGVtZW50LCBSQUZCZWhhdmlvciwgUkVHRVgsIFJPT1QsIFdhdnlTaGFwZWRDaXJjbGUsIF9fZXhwb3J0UHJvcGVydGllcywgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcywgYWRkRXZlbnQsIGFkZEV2ZW50cywgYWRkRXZlbnRzTGlzdCwgYWRkUm9vdCwgYW5pbWF0ZUhpZGUsIGFuaW1hdGVTaG93LCBhdmFpbFNpemUsIGJiaCwgYmJ3LCBiaW5kQmVoYXZpb3IsIGJpbmRNaXhpbnMsIGJpbmRTdG9yZSwgYm9yZGVyQm94SGVpZ2h0LCBib3JkZXJCb3hXaWR0aCwgYm91bmRCZWhhdmlvcnMsIGJvdW5kTWl4aW5TZXQsIGNiaCwgY2J3LCBjaGFuZ2Vab29tLCBjbGFzc2VzLCBjb21wdXRlQ2FyZXRQb3NpdGlvbiwgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50LCBjb250YWluc09yU2VsZiwgY29udGVudEJveEhlaWdodCwgY29udGVudEJveFdpZHRoLCBjcmVhdGVFbGVtZW50VmFuaWxsYSwgY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQsIGRlbGV0ZVN0eWxlUHJvcGVydHksIGRldGVjdE1vYmlsZSwgZG9Cb3JkZXJPYnNlcnZlLCBkb0NvbnRlbnRPYnNlcnZlLCBlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5LCBmaXhPcmllbnRUb1NjcmVlbiwgZml4ZWRDbGllbnRab29tLCBnZXRBdmFpbFNpemUsIGdldEJvdW5kaW5nT3JpZW50UmVjdCwgZ2V0Q29ycmVjdE9yaWVudGF0aW9uLCBnZXRFbGVtZW50UmVsYXRlZCwgZ2V0RXZlbnRUYXJnZXQsIGdldE9mZnNldFBhcmVudCwgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4sIGdldFN0b3Jlc09mRWxlbWVudCwgZ2V0Wm9vbSwgaGFuZGxlQXR0cmlidXRlLCBoYW5kbGVEYXRhc2V0LCBoYW5kbGVIaWRkZW4sIGhhbmRsZVByb3BlcnR5LCBoYW5kbGVTdHlsZUNoYW5nZSwgaGFzUGFyZW50LCBodG1sLCBpbmNsdWRlU2VsZiwgaW5kZXhPZiwgaW5pdFRleHRTdHlsZSwgaXNFbGVtZW50LCBpc0luRm9jdXMsIGlzTW9iaWxlLCBpc05lYXJseUlkZW50aXR5LCBpc1ZhbGlkUGFyZW50LCBtYWtlUkFGQ3ljbGUsIG1lYXN1cmVJbnB1dEluRm9jdXMsIG1lYXN1cmVUZXh0LCBtaXhpbkRpc3Bvc2VycywgbWl4aW5FbGVtZW50cywgbWl4aW5OYW1lc3BhY2UsIG1peGluUmVnaXN0cnksIG5hbWVSZWdpc3RyeUYsIG5hbWVkU3RvcmVNYXBzLCBvYnNlcnZlQXR0cmlidXRlLCBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3Rvciwgb2JzZXJ2ZUJvcmRlckJveCwgb2JzZXJ2ZUJ5U2VsZWN0b3IsIG9ic2VydmVDb250ZW50Qm94LCBvbkJvcmRlck9ic2VydmUsIG9uQ29udGVudE9ic2VydmUsIG9yaWVudE9mLCBvcmllbnRhdGlvbk51bWJlck1hcCwgcGFzc2l2ZU9wdHMsIHJlYWRGaXhlZE92ZXJsYXlWaWV3cG9ydCwgcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQsIHJlZmxlY3RCZWhhdmlvcnMsIHJlZmxlY3RNaXhpbnMsIHJlZmxlY3RTdG9yZXMsIHJlZ2lzdGVyTWl4aW4sIHJlbW92ZUV2ZW50LCByZW1vdmVFdmVudHMsIHJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCwgcm9vdHMsIHNldEF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXNJZk51bGwsIHNldENoZWNrZWQsIHNldElkbGVJbnRlcnZhbCwgdGhyb3R0bGVNYXAsIHVuZml4ZWRDbGllbnRab29tLCB1cGRhdGVBbGxNaXhpbnMsIHVwZGF0ZU1peGluQXR0cmlidXRlcywgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzLCB1cGRhdGVWUCwgdXJsLCB3aGVuQW55U2NyZWVuQ2hhbmdlcywgem9vbU9mLCB6b29tVmFsdWVzIH07Il0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyxpQkFBQUEsR0FBZSxnQkFBQUMsSUFBYyxnQkFBQUMsSUFBYyxZQUFBQyxHQUFVLHFCQUFBQyxJQUFtQixTQUFBQyxJQUFPLGVBQUFDLElBQWEsZ0JBQUFDLElBQWMsdUJBQUFDLElBQXFCLHNCQUFBQyxJQUFvQiwrQkFBQUMsVUFBbUM7QUFDL0wsU0FBUyxVQUFBQyxJQUFRLGFBQUFDLElBQVcsYUFBQUMsSUFBVyxhQUFBQyxJQUFXLG9CQUFBQyxJQUFrQixvQkFBQUMsU0FBd0I7QUFFNUYsY0FBYztBQUdkLElBQUlDLEtBQWtDLHVCQUFPLElBQUksa0NBQWtDLEdBQy9FQyxLQUE0QixXQUFXRCxFQUErQixNQUFzQixvQkFBSSxJQUFJO0FBQ3hHO0FBQUEsRUFDQztBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFB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USxhQUFhSixDQUFJLENBQUMsR0FDOUVoQixFQUFlblAsR0FBTSxzQkFBc0J4QixFQUFTK1IsR0FBUSxpQkFBaUJKLENBQUksQ0FBQyxHQUMzRTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFdBQVdQLEdBQUs7QUFDZixVQUFNNVAsSUFBTzRQLEdBQUssUUFBUTtBQUMxQixXQUFJNVAsS0FBTXNQLEdBQWF0UCxHQUFNLG9CQUFvQixHQUMxQztBQUFBLEVBQ1I7QUFDRDtBQUNBLElBQUkyUCxHQUFvQjtBQUN4QixJQUFJVSxHQUFrQjtBQUN0QixJQUFJWSxHQUFvQjsiLAogICJuYW1lcyI6IFsiJGF2b2lkVHJpZ2dlciIsICJjYW1lbFRvS2ViYWIiLCAiY3Z0X2NzX3RvX29zIiwgImhhc1ZhbHVlIiwgImlzQXJyYXlPckl0ZXJhYmxlIiwgImlzVmFsIiwgImlzVmFsdWVVbml0IiwgImtlYmFiVG9DYW1lbCIsICJub3JtYWxpemVHcmlkTGF5b3V0IiwgIm5vcm1hbGl6ZVByaW1pdGl2ZSIsICJyZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwiLCAiYXBwZWFyIiwgImRlY29ySGlkZSIsICJkZWNvclNob3ciLCAiZGlzYXBwZWFyIiwgIm9ic2VydmVTdHlsZVRyZWUiLCAic2V0U3R5bGVQcm9wZXJ0eSIsICJfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sIiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMiLCAib3B0aW9ucyIsICJuYW1lIiwgImUiLCAiX19leHBvcnRQcm9wZXJ0aWVzIiwgImlzTW9iaWxlIiwgImNoZWNrIiwgImEiLCAiZGV0ZWN0TW9iaWxlIiwgImNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrIiwgInJ1bldoZW5JZGxlJDEiLCAiY2IiLCAidGltZW91dCIsICJnZXRPZmZzZXRQYXJlbnQiLCAiZWxlbWVudCIsICJnZXRPZmZzZXRQYXJlbnRDaGFpbiIsICJwYXJlbnRzIiwgImN1cnJlbnQiLCAicGFyZW50IiwgImlzTmVhcmx5SWRlbnRpdHkiLCAibWF0cml4IiwgImVwc2lsb24iLCAibWFrZVJBRkN5Y2xlIiwgImNvbnRyb2wiLCAickFGIiwgInJlcyIsICJSQUZCZWhhdmlvciIsICJzaGVkIiwgIlJPT1QiLCAic2V0QXR0cmlidXRlc0lmTnVsbCIsICJhdHRycyIsICJ2YWx1ZSIsICJvbGQiLCAic2V0QXR0cmlidXRlcyIsICJ0aHJvdHRsZU1hcCIsICJzZXRJZGxlSW50ZXJ2YWwiLCAiYXJncyIsICJzdGF0dXMiLCAiciIsICJib3JkZXJCb3hXaWR0aCIsICJib3JkZXJCb3hIZWlnaHQiLCAiY29udGVudEJveFdpZHRoIiwgImNvbnRlbnRCb3hIZWlnaHQiLCAib25Cb3JkZXJPYnNlcnZlIiwgIm9uQ29udGVudE9ic2VydmUiLCAiZG9Db250ZW50T2JzZXJ2ZSIsICJvYnNlcnZlciIsICJlbnRyaWVzIiwgImVudHJ5IiwgImNvbnRlbnRCb3hTaXplIiwgImRvQm9yZGVyT2JzZXJ2ZSIsICJib3JkZXJCb3hTaXplIiwgInVybCIsICJ0eXBlIiwgInNvdXJjZSIsICJodG1sIiwgInBhcnNlZCIsICJzZXRDaGVja2VkIiwgImlucHV0IiwgImV2IiwgImlzVmFsaWRQYXJlbnQiLCAiaW5kZXhPZiIsICJub2RlIiwgIk1BVENIIiwgIlJFR0VYIiwgImNyZWF0ZUVsZW1lbnRWYW5pbGxhIiwgInNlbGVjdG9yIiwgImNyZWF0ZSIsICJtYXRjaCIsICJjbGFzc05hbWUiLCAiaXNFbGVtZW50IiwgImVsIiwgImluY2x1ZGVTZWxmIiwgInRhcmdldCIsICJzZWwiLCAiaGFzUGFyZW50IiwgInBhc3NpdmVPcHRzIiwgImFkZEV2ZW50IiwgIm9wdHMiLCAid3IiLCAicmVtb3ZlRXZlbnQiLCAiYWRkRXZlbnRzIiwgInJvb3QiLCAiaGFuZGxlcnMiLCAiYWRkRXZlbnRzTGlzdCIsICJldmVudHMiLCAibGlzdCIsICJjYnMiLCAicmVtb3ZlRXZlbnRzIiwgImdldEV2ZW50VGFyZ2V0IiwgInBhdGgiLCAiY29udGFpbnNPclNlbGYiLCAiYiIsICJhRWwiLCAiYkVsIiwgImFJbmRleCIsICJiSW5kZXgiLCAiTU9DRWxlbWVudCIsICJzZWxmIiwgImhvc3RNYXRjaGVkIiwgImNsb3Nlc3QiLCAiaG9zdCIsICJNT0MiLCAiaXNJbkZvY3VzIiwgInNlbGVjdG9yT3JFbGVtZW50IiwgImRpciIsICJhY3RpdmUiLCAiaXNGb2N1c2VkIiwgImlzSG92ZXJlZCIsICJhbHRDbmQiLCAiZ2V0Wm9vbSIsICJ6b29tVmFsdWVzU3ltYm9sIiwgInpvb21WYWx1ZXMiLCAiem9vbU9mIiwgImNvbnRhaW5lciIsICJjaGFuZ2Vab29tIiwgInNjYWxlIiwgImZpeGVkQ2xpZW50Wm9vbSIsICJ1bmZpeGVkQ2xpZW50Wm9vbSIsICJvcmllbnRPZiIsICJyYXciLCAibiIsICJnZXRCb3VuZGluZ09yaWVudFJlY3QiLCAib3JpZW50IiwgInpvb20iLCAiYm94IiwgIm5ieCIsICJvcl9pIiwgInZ2IiwgInNpemUiLCAibGVmdF8iLCAidG9wXyIsICJyaWdodF8iLCAiYm90dG9tXyIsICJsZWZ0IiwgInJpZ2h0IiwgInRvcCIsICJib3R0b20iLCAid2lkdGgiLCAiaGVpZ2h0IiwgImJidyIsICJiYmgiLCAiY2J3IiwgImNiaCIsICJydW5XaGVuSWRsZSIsICJLRVlCT0FSRF9PVkVSTEFZX1BYIiwgInZpcnR1YWxLZXlib2FyZCIsICJlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5IiwgInZrIiwgImlzSW1lVGFyZ2V0IiwgInRhZyIsICJsYXlvdXRMb2NrT3JpZW50IiwgImxheW91dExvY2tXIiwgImxheW91dExvY2tIIiwgImNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInNhZmVXaWR0aCIsICJzYWZlSGVpZ2h0IiwgInNhZmVMZWZ0IiwgInNhZmVUb3AiLCAicmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInJlYWRMYXlvdXRWaWV3cG9ydCIsICJpbm5lclciLCAiaW5uZXJIIiwgInZ2VyIsICJ2dkgiLCAidnZUb3AiLCAidmtIIiwgInZ2T3ZlcmxhcCIsICJrZXlib2FyZCIsICJjYW5kaWRhdGVXIiwgImNhbmRpZGF0ZUgiLCAic3VkZGVuU2hyaW5rIiwgInBpbk92ZXJsYXlTY3JvbGwiLCAiZ2V0QXZhaWxTaXplIiwgImwiLCAibGF5b3V0IiwgInZ2QmxvY2siLCAiYXciLCAiYWgiLCAiYXZhaWxTaXplIiwgImNsYXNzZXMiLCAib3JpZW50YXRpb25OdW1iZXJNYXAiLCAidXBkYXRlVlAiLCAicnVsZSIsICJwcm9wTmFtZSIsICJwcm9wVmFsdWUiLCAiZXhpc3RzIiwgImdldENvcnJlY3RPcmllbnRhdGlvbiIsICJvcmllbnRhdGlvblR5cGUiLCAicGFzc2l2ZU9wdHMkMSIsICJ3aGVuQW55U2NyZWVuQ2hhbmdlcyIsICJ0aWNraW5nIiwgInVwZGF0ZSIsICJ1bnN1YnNjcmliZXJzIiwgInVuc3ViIiwgImZpeE9yaWVudFRvU2NyZWVuIiwgIm5leHQiLCAiY3R4IiwgImluaXRUZXh0U3R5bGUiLCAic3R5bGUiLCAiZm9udFdlaWdodCIsICJmb250U2l6ZSIsICJmb250RmFtaWx5IiwgImZvbnRTdHJldGNoIiwgIm1lYXN1cmVUZXh0IiwgInRleHQiLCAibWVhc3VyZUlucHV0SW5Gb2N1cyIsICJjb21wdXRlQ2FyZXRQb3NpdGlvbiIsICJwb2ludCIsICJjdXJyZW50V2lkdGgiLCAiY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50IiwgImNsaWVudCIsICJyZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCIsICJsYXlvdXRPdmVycmlkZSIsICJjIiwgImJhc2UiLCAicmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50IiwgImdyaWRTeXN0ZW0iLCAiY2xpZW50UG9pbnQiLCAibW9kZSIsICJyZWN0IiwgImNzIiwgInBsIiwgInB0IiwgInByIiwgInBiIiwgImNvbnRlbnRXIiwgImNvbnRlbnRIIiwgImNzQ29vcmQiLCAiYW5pbWF0ZVNob3ciLCAiYW5pbWF0ZUhpZGUiLCAiV2F2eVNoYXBlZENpcmNsZSIsICJzdGVwcyIsICJhbXBsaXR1ZGUiLCAiZnJlcSIsICJwb2ludHMiLCAiaSIsICJhbmdsZSIsICJzdGVwIiwgInZhcmlhbnQiLCAiZnVuYyIsICJvbkJvcmRlck9ic2VydmVTeW1ib2wiLCAib25Cb3JkZXJPYnNlcnZlJDEiLCAib25Db250ZW50T2JzZXJ2ZVN5bWJvbCIsICJvbkNvbnRlbnRPYnNlcnZlJDEiLCAidW53cmFwRnJvbVF1ZXJ5IiwgIm5vcm1hbGl6ZVNlbGVjdG9yIiwgImZhbGxiYWNrIiwgInNhZmVRdWVyeVNlbGVjdG9yQWxsIiwgInNhZmVNYXRjaGVzIiwgIm9ic2VydmVDb250ZW50Qm94IiwgImNhbGxiYWNrcyIsICJvYnNlcnZlQm9yZGVyQm94IiwgIm9ic2VydmVBdHRyaWJ1dGUiLCAiYXR0cmlidXRlIiwgIm9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yIiwgImF0dHJpYnV0ZUxpc3QiLCAicyIsICJtdXRhdGlvbkxpc3QiLCAibXV0YXRpb24iLCAiYWRkZWROb2RlcyIsICJyZW1vdmVkTm9kZXMiLCAib2JzZXJ2ZUJ5U2VsZWN0b3IiLCAibXV0IiwgIm9icyIsICJ1bndyYXBOb2Rlc0J5U2VsZWN0b3IiLCAibm9kZXMiLCAiJG5vZGVzIiwgIm9iUmVmIiwgImhhbmRsZU11dGF0aW9uIiwgImhhbmRsZUNvbWUiLCAiaGFuZGxlT3V0Q29tZSIsICJoYW5kbGVGb2N1c0NsaWNrIiwgImZhY3RvcnMiLCAic2VsZWN0ZWQiLCAiYm91bmRCZWhhdmlvcnMiLCAiYmluZEJlaGF2aW9yIiwgImJlaFNldCIsICJiZWhhdmlvciIsICJyZWZsZWN0QmVoYXZpb3JzIiwgImJlaGF2aW9ycyIsICJuYW1lZFN0b3JlTWFwc1N5bWJvbCIsICJuYW1lZFN0b3JlTWFwcyIsICJnZXRTdG9yZXNPZkVsZW1lbnQiLCAibWFwIiwgIkUiLCAibSIsICJpc1dlYWtDb21wYXRpYmxlIiwgImJpbmRTdG9yZSIsICJvYmoiLCAid2Vha01hcCIsICJyZWZsZWN0U3RvcmVzIiwgInN0b3JlcyIsICJyZWZsZWN0TWl4aW5zIiwgIm1peGlucyIsICJtaXhpblNldCIsICJib3VuZE1peGluU2V0IiwgImJpbmRNaXhpbnMiLCAiZ2V0RWxlbWVudFJlbGF0ZWQiLCAibWl4aW4iLCAibWl4U2V0IiwgIndlbCIsICJtaXhpbkVsZW1lbnRzIiwgImJvdW5kTWl4aW5TZXRTeW1ib2wiLCAibWl4aW5FbGVtZW50c1N5bWJvbCIsICJtaXhpblJlZ2lzdHJ5U3ltYm9sIiwgIm1peGluUmVnaXN0cnkiLCAibWl4aW5OYW1lc3BhY2VTeW1ib2wiLCAibWl4aW5OYW1lc3BhY2UiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzIiwgIm5hbWVzIiwgInJvb3RzIiwgImFkZFJvb3QiLCAidXBkYXRlQWxsTWl4aW5zIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCIsICJlbGVtZW50cyIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzIiwgIm5hbWVSZWdpc3RyeUYiLCAia2V5IiwgInJlZ2lzdGVyTWl4aW4iLCAiRE9NTWl4aW4iLCAid0VsZW1lbnQiLCAid1NlbGYiLCAicmVsYXRlZCIsICJoYW5kbGVIaWRkZW4iLCAiXyIsICJ2aXNpYmxlIiwgIiRyZWYiLCAiaXNWaXNpYmxlIiwgImhhbmRsZVByb3BlcnR5IiwgInByb3AiLCAidmFsIiwgImhhbmRsZURhdGFzZXQiLCAiZGF0YXNldFJlZiIsICJkZWxldGVTdHlsZVByb3BlcnR5IiwgImhhbmRsZVN0eWxlQ2hhbmdlIiwgInN0eWxlUmVmIiwgImhhbmRsZUF0dHJpYnV0ZSIsICJqdW5jdGlvblRvQm94IiwgIkpVTkNUSU9OX1NFTEVDVF9FVkVOVFMiLCAiSlVOQ1RJT05fRFJBR19FVkVOVFMiLCAiSlVOQ1RJT05fUkVTSVpFX0VWRU5UUyIsICJtaXhpbkRpc3Bvc2Vyc1N5bWJvbCIsICJtaXhpbkRpc3Bvc2VycyIsICJwdXNoRGlzcG9zYWJsZSIsICJtaXhpbk5hbWUiLCAiZm4iLCAicnVuRGlzcG9zZXJzIiwgInBhcnNlUHhWYXIiLCAicXVlcnlIYW5kbGUiLCAiYXR0ciIsICJmb3VuZCIsICJKdW5jdGlvblNlbGVjdE1peGluIiwgIndFbCIsICJvdmVybGF5IiwgImxvY2FsUG9pbnQiLCAiYXBwbHlPdmVybGF5IiwgIm9uRG93biIsICJvbk1vdmUiLCAiZW5kIiwgIm9uVXAiLCAib25DYW5jZWwiLCAiSnVuY3Rpb25EcmFnTWl4aW4iLCAicHJldmlvdXNUcmFuc2Zvcm0iLCAiaGFuZGxlIiwgImRyYWdnaW5nIiwgInN0YXJ0WCIsICJzdGFydFkiLCAiYmFzZVgiLCAiYmFzZVkiLCAiZHgiLCAiZHkiLCAibngiLCAibnkiLCAiSnVuY3Rpb25SZXNpemVNaXhpbiIsICJyZXNpemluZyIsICJzeCIsICJzeSIsICJzdyIsICJzaCIsICJtaW5XIiwgIm1pbkgiLCAibnciLCAibmgiXQp9Cg==

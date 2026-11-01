import { $avoidTrigger as Ot, camelToKebab as fn, cvt_cs_to_os as Je, hasValue as Ht, isArrayOrIterable as Vn, isVal as zn, isValueUnit as jn, kebabToCamel as hn, normalizeGridLayout as Dn, normalizePrimitive as Le, resolveLocalPointToGridCell as In } from "@fest-lib/core";
import { appear as _n, decorHide as Bn, decorShow as $n, disappear as Fn, observeStyleTree as qn, setStyleProperty as Et } from "@fest-lib/style-lib";
export * from "@fest-lib/style-lib";
var Zn = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Qe = globalThis[Zn] ??= /* @__PURE__ */ new Set();
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
  if (!(!e || Qe.has(e)))
    try {
      CSS.registerProperty(t);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      Qe.add(e);
    }
});
var Ir = () => {
}, _r = () => {
  let t = navigator?.userAgentData?.mobile || !1;
  return ((e) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), t;
}, Br = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, Kn = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), tn = (t, e = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(t, { timeout: e }) : setTimeout(() => t(Kn()), 0), Un = (t) => t?.offsetParent ?? t?.host, $r = (t) => {
  const e = [];
  let n = t;
  for (; n; ) {
    const r = Un(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && e.push(n);
  }
  return e;
}, Fr = (t, e = 1e-6) => Math.abs(t.a - 1) < e && Math.abs(t.b) < e && Math.abs(t.c) < e && Math.abs(t.d - 1) < e && Math.abs(t.e) < e && Math.abs(t.f) < e, Yn = () => {
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
}, qr = (t = Yn()) => (e) => t.shedule(e), Zr = typeof document < "u" ? document?.documentElement : null, Kr = (t, e = {}) => {
  if (!(!e || typeof e != "object" || !t))
    return Array.from(Object.entries(e)).map(([n, r]) => {
      const o = t.getAttribute(n);
      r == null ? t.removeAttribute(n) : r != o && t.setAttribute(n, o == "" ? r ?? o : o ?? r);
    });
}, Ur = (t, e = {}) => Array.from(Object.entries(e)).map(([n, r]) => {
  r == null ? t.removeAttribute(n) : t.setAttribute(n, r ?? t.getAttribute(n));
}), Xn = /* @__PURE__ */ new Map(), Yr = (t, e = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return tn(async () => {
    if (!(!t || typeof t != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(t, ...n), new Promise((o) => setTimeout(o, e))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((o) => tn(o, e)), new Promise((o) => setTimeout(o, e))]);
      r.cancel = () => {
      };
    }
  }, e), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    Xn.forEach((t) => t?.()), await new Promise((t) => requestAnimationFrame(t));
});
var Ut = /* @__PURE__ */ Symbol("@border-box-width"), Yt = /* @__PURE__ */ Symbol("@border-box-height"), Xt = /* @__PURE__ */ Symbol("@content-box-width"), Gt = /* @__PURE__ */ Symbol("@content-box-height"), en = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), Xr = (t, e = () => {
}) => {
  if (t instanceof HTMLElement && !nn.has(t)) {
    t[Xt] = t.clientWidth, t[Gt] = t.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const o of r) if (o.contentBoxSize) {
        const c = o.contentBoxSize[0];
        c && (t[Xt] = Math.min(c.inlineSize, t.clientWidth), t[Gt] = Math.min(c.blockSize, t.clientHeight), e?.(t));
      }
    });
    nn.set(t, n), n.observe(t?.element ?? t, { box: "content-box" });
  }
}, Gr = (t, e = () => {
}) => {
  if (t instanceof HTMLElement && !en.has(t)) {
    t[Ut] = t.offsetWidth, t[Yt] = t.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const o of r) if (o.borderBoxSize) {
        const c = o.borderBoxSize[0];
        c && (t[Ut] = Math.min(c.inlineSize, t.offsetWidth), t[Yt] = Math.min(c.blockSize, t.offsetHeight), e?.(t));
      }
    });
    en.set(t, n), n.observe(t?.element ?? t, { box: "border-box" });
  }
}, Jr = (t, ...e) => URL.createObjectURL(new Blob(e, { type: t })), Qr = (t, e = "text/html") => {
  const n = new DOMParser().parseFromString(t, e);
  return n.querySelector("template") ?? n.querySelector("*");
}, to = (t, e, n) => {
  e != null && t.checked != e && (t?.type == "checkbox" || t?.type == "radio" && !t?.checked ? (t?.click?.(), n?.preventDefault?.()) : (t.checked = !!e, t?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, eo = (t) => t != null && t instanceof HTMLElement && !(t instanceof DocumentFragment || t instanceof HTMLBodyElement) ? t : null, no = (t, e) => t == null || e == null ? -1 : Array.from(t?.childNodes ?? [])?.indexOf?.(e) ?? -1, $t = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", ro = "^(?:" + $t + ")|^#" + $t + "|^\\." + $t + "|^\\[" + $t + `(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, oo = (t) => {
  if (t == ":fragment:") return document.createDocumentFragment();
  const e = document.createElement.bind(document);
  for (var n = e("div"), r, o = ""; t && (r = t.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = e(r[1])), r[2] && (n.id = r[2]), r[3] && (o += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), t = t.slice(r[0].length);
  return o && (n.className = o.slice(1)), n;
}, io = (t) => t != null && (t instanceof Node || t instanceof Text || t instanceof Element || t instanceof Comment || t instanceof HTMLElement || t instanceof DocumentFragment) ? t : null, so = (t, e) => {
  const n = typeof e == "string" ? e.trim() : "";
  if (!n || !t) return t ?? null;
  try {
    return t.querySelector(n) ?? (t.matches(n) ? t : null);
  } catch {
    return null;
  }
}, fe = (t, e) => {
  for (; t; ) {
    if (!(t?.element ?? t)) return !1;
    if ((t?.element ?? t) === (e?.element ?? e)) return !0;
    t = t.parentElement ?? (t.parentNode == t?.getRootNode?.({ composed: !0 }) ? t?.getRootNode?.({ composed: !0 })?.host : t?.parentNode);
  }
}, pn = {};
function S(t, e, n, r = pn) {
  t?.addEventListener?.(e, n, r);
  const o = typeof t == "object" || typeof t == "function" && !t?.deref ? new WeakRef(t) : t;
  return () => o?.deref?.()?.removeEventListener?.(e, n, r);
}
function rn(t, e, n, r = pn) {
  t?.removeEventListener?.(e, n, r);
}
var ao = (t, e) => (t = t instanceof WeakRef ? t.deref() : t, [...Object.entries(e)].map?.(([n, r]) => Array.isArray(r) ? S(t, n, ...r) : S(t, n, r))), co = (t, e) => {
  if (e) {
    let n = e;
    return e instanceof Map ? n = [...e.entries()] : n = [...Object.entries(e)], n.map(([r, o]) => ((Vn(o) ? [...o] : o) ?? [])?.map?.((c) => S(t, r, c)));
  }
}, uo = (t, e) => (t = t instanceof WeakRef ? t.deref() : t, [...Object.entries(e)].map?.(([n, r]) => Array.isArray(r) ? rn(t, n, ...r) : rn(t, n, r))), lo = (t) => {
  if (!t) return null;
  if (t?.composedPath && typeof t.composedPath == "function") {
    const n = t.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const e = t?.target;
  return e instanceof HTMLElement || e instanceof Element ? e : null;
}, fo = (t, e, n) => {
  if (e == null || !(e instanceof Node) && e?.element == null) return !1;
  if (t == e || (t?.element ?? t) == (e?.element ?? e)) return !0;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const r = n.composedPath(), o = t?.element ?? t, c = e?.element ?? e;
    if (r.includes(o) && r.includes(c)) {
      const l = r.indexOf(o), u = r.indexOf(c);
      if (u >= 0 && l >= 0 && u < l) return !0;
    }
  }
  return !!(t?.contains?.(e?.element ?? e) || t?.getRootNode({ composed: !0 })?.host == (e?.element ?? e));
}, Ee = (t, e, n) => {
  const r = typeof e == "string" ? e.trim() : "";
  if (!r) return t ?? null;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const u = n.composedPath();
    for (const f of u) if (f instanceof HTMLElement || f instanceof Element) try {
      if (f.matches?.(r)) return f;
    } catch {
    }
  }
  let o = null, c = null, l = null;
  try {
    o = t?.matches?.(r) ? t : null;
    const u = (t?.getRootNode({ composed: !0 }) ?? t?.parentElement?.getRootNode({ composed: !0 }))?.host;
    c = u?.matches?.(r) ? u : null, l = t?.closest?.(r) ?? o?.closest?.(r) ?? c?.closest?.(r) ?? null;
  } catch {
  }
  return o ?? l ?? c;
}, ho = (t, e) => !!Ee(t, e), po = (t, e, n = "parent") => {
  if (!t || t.checkVisibility && !t.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !t.checkVisibility && t.offsetParent === null && t.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const o = r === t || fe(r, t), c = t.matches(":hover");
  if (!o && !c && !e) return !1;
  if (e) {
    if (typeof e == "string") {
      if (n === "parent") return !!Ee(t, e);
      {
        const l = o ? r : t.querySelector(":hover") || t, u = !!Ee(l, e);
        return t?.querySelector?.(e) != null || t?.matches?.(e) || u;
      }
    } else if (e instanceof HTMLElement)
      return n === "parent" ? fe(t, e) || !1 : fe(e, t) || !1;
  }
  return !0;
}, mo = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, Gn = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Jn = globalThis[Gn] ??= /* @__PURE__ */ new WeakMap(), Qn = (t = document.documentElement) => Jn.getOrInsertComputed(t, () => {
  const e = (t?.matches?.(".ui-orientbox") ? t : null) || t?.closest?.(".ui-orientbox") || document.body;
  if (e?.zoom) return e?.zoom || 1;
  if (t?.currentCSSZoom) return t?.currentCSSZoom || 1;
}), go = (t = 1) => (document.documentElement.style.setProperty("--scaling", t), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: t },
  bubbles: !0,
  cancelable: !0
})), t), yo = (t = document.documentElement) => (t?.currentCSSZoom != null ? 1 : Qn(t)) || 1, Se = (t = document.documentElement) => (t?.currentCSSZoom == null ? 1 : t?.currentCSSZoom) || 1, ht = (t = document.documentElement) => {
  const e = (t?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? t : null) || t?.closest?.('[orient], [data-mixin="ui-orientbox"]') || t;
  if (e?.hasAttribute?.("orient")) return parseInt(e?.getAttribute?.("orient") || "0") || 0;
  if (e?.orient != null && Number.isFinite(Number(e.orient))) return Number(e.orient) || 0;
  try {
    const n = e?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && e ? getComputedStyle(e).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, bo = (t, e = null) => {
  const n = Se(t) || 1, r = t?.getBoundingClientRect?.(), o = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, c = e ?? (ht(t) || 0), l = typeof window < "u" ? window.visualViewport : null, u = [((l?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((l?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [f, v] = Je([o.left, o.top], u, c), [p, b] = Je([o.right, o.bottom], u, c), [g, m] = c == 0 || c == 3 ? [f, p] : [p, f], [y, x] = c == 0 || c == 1 ? [v, b] : [b, v], [C, O] = c % 2 ? [o.height, o.width] : [o.width, o.height];
  return {
    left: g,
    top: y,
    right: m,
    bottom: x,
    width: C,
    height: O
  };
}, vo = (t, e = null) => (e ?? ht(t)) % 2 ? t[Yt] ?? t?.clientHeight : t[Ut] ?? t?.clientWidth, wo = (t, e = null) => (e ?? ht(t)) % 2 ? t[Ut] ?? t?.clientWidth : t[Yt] ?? t?.clientHeight, xo = (t, e = null) => (e ?? ht(t)) % 2 ? t[Gt] ?? t?.clientHeight : t[Xt] ?? t?.clientWidth, Eo = (t, e = null) => (e ?? ht(t)) % 2 ? t[Xt] ?? t?.clientWidth : t[Gt] ?? t?.clientHeight, mn = (t, e = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(t, { timeout: e }) : setTimeout(() => t({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), U = 80, We = 0, on = !1, sn = !1, an = !1, A = null, cn = !1, he = !1, pt = () => {
  try {
    if (typeof document < "u" && document.documentElement.dataset.cwspNativeShell === "capacitor") return !0;
    const t = globalThis.Capacitor;
    return typeof t?.isNativePlatform == "function" && !!t.isNativePlatform();
  } catch {
    return !1;
  }
}, gn = () => {
  try {
    return globalThis.Capacitor?.Plugins?.CwsBridge ?? null;
  } catch {
    return null;
  }
}, tr = (t) => {
  if (!t) return null;
  const e = Number(t.windowWidthCss) || 0, n = Number(t.windowHeightCss) || 0, r = Number(t.displayWidthCss) || e, o = Number(t.displayHeightCss) || n, c = e || r, l = n || o;
  if (c <= 0 || l <= 0) return null;
  const u = Number(t.density) || 0;
  return {
    windowWidthCss: c,
    windowHeightCss: l,
    displayWidthCss: r || c,
    displayHeightCss: o || l,
    density: u,
    densityDpi: Number(t.densityDpi) || 0,
    xdpi: Number(t.xdpi) || 0,
    ydpi: Number(t.ydpi) || 0,
    ppi: Number(t.ppi) || 0,
    scaledDensity: Number(t.scaledDensity) || u,
    fontScale: Number(t.fontScale) || (u > 0 ? (Number(t.scaledDensity) || u) / u : 1)
  };
}, yn = (t) => {
  const e = tr(t);
  if (!e) return;
  const n = A, r = !!(n && n.windowWidthCss === e.windowWidthCss && n.windowHeightCss === e.windowHeightCss && n.displayWidthCss === e.displayWidthCss && n.displayHeightCss === e.displayHeightCss && n.density === e.density && n.densityDpi === e.densityDpi && n.ppi === e.ppi && n.fontScale === e.fontScale);
  A = e, r || oe();
}, bn = () => {
  if (!pt()) return;
  const t = gn();
  t && (typeof t.getDisplayMetrics == "function" ? t.getDisplayMetrics() : t.getShellInfo?.())?.then((e) => yn(e)).catch(() => {
  });
}, bt = () => {
  !pt() || he || (he = !0, mn(() => {
    he = !1, Jt(), bn();
  }, 80));
}, Jt = () => {
  if (!(cn || typeof globalThis > "u") && pt() && gn()) {
    cn = !0;
    try {
      const t = globalThis.window?.__CWS_SHELL_INFO__;
      t && yn(t);
    } catch {
    }
    bn();
  }
}, vn = () => {
  try {
    return globalThis.navigator?.virtualKeyboard ?? null;
  } catch {
    return null;
  }
}, Ft = "interactive-widget=overlays-content", qt = "viewport-fit=cover", er = () => {
  if (typeof document > "u") return;
  const t = document.head || document.documentElement;
  if (!t) return;
  let e = document.querySelector('meta[name="viewport"]');
  if (!e) {
    e = document.createElement("meta"), e.setAttribute("name", "viewport"), e.content = `width=device-width, initial-scale=1.0, ${qt}, ${Ft}`, t.moveBefore(e, t.firstChild);
    return;
  }
  let n = String(e.content || "").trim();
  /interactive-widget\s*=\s*overlays-content/i.test(n) || (/interactive-widget\s*=/i.test(n) ? n = n.replace(/interactive-widget\s*=\s*[a-z-]+/i, Ft) : n = n ? `${n.replace(/,\s*$/, "")}, ${Ft}` : Ft), /viewport-fit\s*=\s*cover/i.test(n) || (/viewport-fit\s*=/i.test(n) ? n = n.replace(/viewport-fit\s*=\s*[a-z-]+/i, qt) : n = n ? `${n.replace(/,\s*$/, "")}, ${qt}` : qt), n !== String(e.content || "").trim() && (e.content = n);
}, Mt = () => {
  er();
  const t = vn();
  if (t)
    try {
      t.overlaysContent !== !0 && (t.overlaysContent = !0);
    } catch {
    }
}, tt = () => {
  let t = typeof document < "u" ? document.activeElement : null;
  for (; t instanceof HTMLElement && t.shadowRoot?.activeElement; ) t = t.shadowRoot.activeElement;
  return t;
}, P = (t) => {
  if (!t || !(t instanceof HTMLElement)) return !1;
  if (t.localName === "cw-raw-editor" || t.isContentEditable) return !0;
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
}, kt = () => {
  try {
    const t = document.getSelection();
    return !!(t && t.rangeCount && t.isCollapsed);
  } catch {
    return !0;
  }
}, un = "", D = 0, V = 0, Zt = 0, wn = () => {
  try {
    const t = typeof screen < "u" ? String(screen.orientation?.type || "") : "";
    return t.startsWith("landscape") ? !0 : t.startsWith("portrait") ? !1 : !!(typeof matchMedia < "u" && matchMedia("(orientation: landscape)")?.matches);
  } catch {
    return !1;
  }
}, xn = () => {
  let t = 0, e = 0;
  if (A)
    t = A.windowWidthCss || A.displayWidthCss, e = A.windowHeightCss || A.displayHeightCss;
  else if (typeof screen < "u") {
    const o = Number(screen.width) || 0, c = Number(screen.height) || 0, l = Number(screen.availWidth) || 0, u = Number(screen.availHeight) || 0;
    t = Math.max(t, o, l), e = Math.max(e, c, u);
  }
  if (!t && !e) return {
    width: 0,
    height: 0
  };
  const n = wn(), r = t > 0 && e > 0 && t > e;
  return n && t > 0 && e > 0 && t < e ? {
    width: e,
    height: t
  } : !n && r ? {
    width: e,
    height: t
  } : {
    width: t || e,
    height: e || t
  };
}, nr = (t, e) => {
  const n = xn(), r = typeof window < "u" && Number(window.innerWidth) || 0, o = typeof window < "u" && Number(window.innerHeight) || 0, c = typeof document < "u" ? document.documentElement : null, l = Number(c?.clientWidth) || 0, u = Number(c?.clientHeight) || 0, f = Math.max(n.width, r, l), v = Math.max(n.height, o, u);
  return {
    width: f > 0 ? Math.min(t, f) : t,
    height: v > 0 ? Math.min(e, v) : e
  };
}, ln = (t, e, n = 0, r = 0) => {
  const o = Math.max(0, Number(t) || 0), c = Math.max(0, Number(e) || 0), l = Number(n) || 0, u = Number(r) || 0;
  return {
    left: l,
    top: u,
    right: l + o,
    bottom: u + c,
    width: o,
    height: c
  };
}, So = () => {
  if (typeof window > "u") return ln(0, 0);
  const t = typeof document < "u" ? document.documentElement : null;
  return ln(Number(t?.clientWidth) || Number(window.innerWidth) || 0, Number(t?.clientHeight) || Number(window.innerHeight) || 0);
}, re = () => {
  if (typeof window > "u") return {
    width: 0,
    height: 0,
    keyboard: 0
  };
  const t = window.visualViewport, e = Number(window.innerWidth) || 0, n = Number(window.innerHeight) || 0, r = Number(t?.width) || 0, o = Number(t?.height) || 0, c = Number(t?.offsetTop) || 0, l = Number(vn()?.boundingBox?.height) || 0, u = n > 0 && o > 0 ? n - o - c : 0, f = We, v = pt();
  let p = f >= U ? f : !v && l >= U ? l : !v && u >= U ? u : 0;
  const b = Math.max(e, r), g = Math.max(n, o + c, p > 0 ? o + p : 0), m = wn() ? "l" : "p";
  m !== un && (un = m, D = 0, V = 0);
  const y = D <= 0 || Math.abs(D - b) < 32, x = P(tt()) || P(document.activeElement);
  let C = !1;
  try {
    C = typeof matchMedia == "function" && matchMedia("(pointer: coarse)").matches;
  } catch {
    C = !1;
  }
  const O = !v && y && (x || C) && V > 0 && V - g >= U;
  if (p < U && O) {
    const $ = Math.max(0, V - g, V - (o + c));
    $ >= U && (p = $);
  }
  const q = !kt();
  q && Zt >= U ? p = Zt : p >= U ? Zt = p : !P(tt()) && !P(document.activeElement) && (Zt = 0), p > 0 || P(tt()) || P(document.activeElement) || O || q ? (D = Math.max(b, D), V = Math.max(g, V)) : (D = b, V = g);
  const B = nr(D || b, V || g);
  D = B.width, V = B.height;
  const J = B.height > 0 ? Math.min(p, B.height) : p;
  return {
    width: B.width,
    height: B.height,
    keyboard: J
  };
}, Pe = (t) => {
  const e = t.tagName;
  if (e === "HTML" || e === "BODY" || e === "CW-RAW-EDITOR" || e === "CW-VIEW-VIEWER" || e === "CW-MARKDOWN-VIEW-FRAME" || e === "CW-MARKDOWN-TOOLBAR-FRAME") return !0;
  const n = t.classList;
  return n.contains("app-shell") || n.contains("app-shell__viewport") || n.contains("app-shell__nav") || n.contains("env-shell-root") || n.contains("env-shell-workspace") || n.contains("env-shell-chrome") || n.contains("env-ui-window") || n.contains("env-ui-window__body") || n.contains("wf-frame") || n.contains("ui-window") || n.contains("view-viewer") || n.contains("view-viewer__toolbar") || n.contains("view-viewer__chrome") || n.contains("view-viewer__content") || n.contains("cw-view-viewer-shell") || n.contains("cw-markdown-view-frame") || n.contains("cw-view-viewer__slot-raw");
}, Oe = (t) => {
  if (!t) return null;
  if (t.parentElement) return t.parentElement;
  const e = t.getRootNode();
  return e instanceof ShadowRoot ? e.host : null;
}, rr = (t) => {
  if (Pe(t)) return !1;
  const e = getComputedStyle(t), n = e.overflowY || e.overflowBlock;
  return n !== "auto" && n !== "scroll" ? !1 : t.scrollHeight > t.clientHeight + 1;
}, At = (t) => {
  let e = t;
  for (; e; ) {
    if (e instanceof HTMLElement && e.classList.contains("cw-raw-editor__scroll")) return e;
    if (e instanceof HTMLElement && e.localName === "cw-raw-editor") {
      const r = e.shadowRoot?.querySelector(".cw-raw-editor__scroll");
      if (r instanceof HTMLElement) return r;
    }
    const n = e.getRootNode();
    if (n instanceof ShadowRoot) {
      const r = n.querySelector(".cw-raw-editor__scroll");
      if (r instanceof HTMLElement) return r;
    }
    e = Oe(e);
  }
  return null;
}, Ce = (t) => {
  const e = At(t);
  if (e) return e;
  let n = t;
  for (; n; ) {
    if (n instanceof HTMLElement && rr(n)) return n;
    n = Oe(n);
  }
  return null;
}, or = () => {
  try {
    const e = document.getSelection();
    if (e?.rangeCount) {
      const n = e.getRangeAt(0), r = n.getClientRects(), o = r.length ? r[r.length - 1] : n.getBoundingClientRect();
      if (o && (o.height || o.width || o.top || o.bottom)) return o;
    }
  } catch {
  }
  const t = document.activeElement;
  return t instanceof HTMLElement ? t.getBoundingClientRect() : null;
}, ir = () => {
  const t = tt();
  if (!P(t) && !P(document.activeElement) || !kt()) return;
  const e = re().keyboard, n = window.visualViewport, r = (Number(n?.height) || Number(window.innerHeight) || 0) - Math.max(8, e ? 12 : 0);
  if (r <= 0) return;
  const o = or();
  if (!o) return;
  const c = o.bottom - r;
  if (c <= 1) return;
  const l = Ce(t) || Ce(document.activeElement);
  l && (l.scrollTop += c);
}, sr = () => {
  const t = window.visualViewport;
  if (!t) return;
  const e = Number(t.offsetTop) || 0, n = Number(t.offsetLeft) || 0;
  if (!(!e && !n))
    try {
      t.scrollTo({
        left: 0,
        top: 0,
        behavior: "instant"
      });
    } catch {
      try {
        t.scrollTo?.(0, 0);
      } catch {
      }
    }
}, pe = !1, me = (t) => {
  const e = Ce(t);
  let n = t;
  for (; n; )
    n instanceof HTMLElement && n !== e && Pe(n) && (n.scrollTop || n.scrollLeft) && (n.scrollTop = 0, n.scrollLeft = 0), n = Oe(n);
}, ct = () => {
  if (typeof window > "u" || pe) return;
  const t = tt(), e = pt(), n = !!(At(t) || At(document.activeElement)), r = re().keyboard > 0 || P(t) || P(document.activeElement);
  if (!(!r && !e)) {
    pe = !0;
    try {
      sr(), (window.scrollX || window.scrollY) && window.scrollTo(0, 0);
      const o = document.documentElement, c = document.body;
      (o.scrollTop || o.scrollLeft) && o.scrollTo(0, 0), c && (c.scrollTop || c.scrollLeft) && c.scrollTo(0, 0), (n || r || !kt()) && (me(t), me(document.activeElement)), e && document.querySelectorAll("cw-raw-editor").forEach((l) => {
        l instanceof HTMLElement && !l.hidden && me(l);
      });
    } finally {
      pe = !1;
    }
  }
}, dn = !1, ar = () => {
  if (dn || typeof Element > "u") return;
  dn = !0;
  const t = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(e) {
    const n = tt();
    if ((At(this) || At(n) || P(n) && !kt()) && (pt() || !kt())) {
      Qt({ caret: !0 });
      return;
    }
    if (!(this instanceof HTMLElement && Pe(this)))
      return t.call(this, e);
  };
}, Qt = (t) => {
  ct(), t?.caret && requestAnimationFrame(() => {
    ct(), ir();
  });
}, Co = () => typeof window > "u" ? 0 : re().keyboard, En = () => {
  Mt();
  const t = typeof window < "u" ? window.visualViewport : null, e = re(), n = {
    "--vv-width": `${t?.width ?? (typeof window < "u" ? window.innerWidth : 0)}px`,
    "--vv-height": `${t?.height ?? (typeof window < "u" ? window.innerHeight : 0)}px`,
    "--vv-offset-left": `${t?.offsetLeft ?? 0}px`,
    "--vv-offset-top": `${t?.offsetTop ?? 0}px`,
    "--vv-scale": String(t?.scale ?? 1),
    "--lv-width": `${e.width}px`,
    "--lv-height": `${e.height}px`,
    "--keyboard-overlay-height": `${e.keyboard}px`,
    "--virtual-keyboard-height": `${e.keyboard}px`
  };
  if (typeof document < "u" && document.documentElement.removeAttribute("data-vk-open"), typeof screen < "u") {
    const r = xn(), o = typeof window < "u" && Number(window.innerWidth) || 0, c = typeof window < "u" && Number(window.innerHeight) || 0, l = Math.max(o, e.width), u = Math.max(c, e.height), f = !A && l > 0 && r.width > l + 64, v = !A && u > 0 && r.height > u + 64, p = f ? l : Math.max(r.width, l), b = v ? u : Math.max(r.height, u), g = p > 0 ? `${p}px` : "100lvi", m = b > 0 ? `${b}px` : "100lvb", y = A?.density || Number(devicePixelRatio) || 1, x = A ? {
      "--native-density": String(A.density || y),
      "--native-dpi": String(A.densityDpi || 0),
      "--native-ppi": String(A.ppi || 0),
      "--native-xdpi": String(A.xdpi || 0),
      "--native-ydpi": String(A.ydpi || 0),
      "--native-font-scale": String(A.fontScale || 1)
    } : {};
    return {
      "--screen-width": g,
      "--screen-height": m,
      "--avail-width": g,
      "--avail-height": m,
      "--view-height": `${e.height}px`,
      "--pixel-ratio": String(y),
      ...x,
      ...n
    };
  }
  return {
    "--screen-width": "100lvi",
    "--screen-height": "100lvb",
    "--avail-width": "100lvi",
    "--avail-height": "100lvb",
    "--view-height": `${e.height}px`,
    "--pixel-ratio": "1",
    ...n
  };
}, Ne = En(), No = [[":root, :host, :scope", Ne]], cr = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, oe = (t) => {
  const e = document.documentElement;
  Object.assign(Ne, En()), Object.entries(Ne).forEach(([n, r]) => {
    const o = e?.style?.getPropertyValue(n);
    (!o || o != r) && e?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, ur = () => {
  let t = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? t = t.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (t = t.replace("portrait", "landscape"))), t;
}, vt = { passive: !0 }, Me = (t) => {
  const e = Number(t) || 0;
  e > 0 && (We = e), oe(), Qt({ caret: !0 });
}, te = () => {
  We = 0, oe();
}, lr = () => {
  if (sn || typeof window > "u") return;
  sn = !0;
  const t = (e) => {
    const n = e, r = n.detail, o = typeof r == "string" ? (() => {
      try {
        return JSON.parse(r)?.keyboardHeight;
      } catch {
        return 0;
      }
    })() : r?.keyboardHeight;
    Me(n.keyboardHeight ?? o);
  };
  window.addEventListener("keyboardWillShow", t), window.addEventListener("keyboardDidShow", t), window.addEventListener("keyboardWillHide", te), window.addEventListener("keyboardDidHide", te);
}, ke = () => {
  if (lr(), on || typeof globalThis > "u") return;
  const t = globalThis.Capacitor, e = t?.Plugins?.Keyboard;
  if (e?.addListener && !(typeof t.isNativePlatform == "function" && !t.isNativePlatform())) {
    on = !0;
    try {
      e.setScroll?.({ isDisabled: !0 });
    } catch {
    }
    try {
      e.setResizeMode?.({ mode: "none" });
    } catch {
    }
    e.addListener("keyboardWillShow", (n) => Me(n?.keyboardHeight)), e.addListener("keyboardDidShow", (n) => Me(n?.keyboardHeight)), e.addListener("keyboardWillHide", te), e.addListener("keyboardDidHide", te);
  }
}, Mo = () => {
  an || typeof window > "u" || (an = !0, ke(), Jt(), Sn(() => {
  }));
}, Sn = (t) => {
  let e = !1;
  const n = () => {
    e || (requestAnimationFrame(() => {
      oe(), t(), e = !1;
    }), e = !0);
  }, r = [];
  return ke(), Jt(), ar(), r.push(S(navigator?.virtualKeyboard, "geometrychange", n, vt)), r.push(S(document, "selectionchange", () => {
    ct();
  }, vt)), r.push(S(window?.visualViewport, "scroll", () => {
    ct(), n();
  }, vt)), r.push(S(window, "scroll", () => {
    ct();
  }, {
    capture: !0,
    passive: !0
  })), r.push(S(document, "scroll", () => {
    ct();
  }, {
    capture: !0,
    passive: !0
  })), r.push(S(window?.visualViewport, "resize", () => {
    Qt({ caret: !0 }), n();
  }, vt)), r.push(S(screen?.orientation, "change", () => {
    bt(), n();
  })), r.push(S(window, "resize", () => {
    bt(), n();
  })), r.push(S(document?.documentElement, "fullscreenchange", () => {
    bt(), n();
  })), r.push(S(document, "DOMContentLoaded", n)), r.push(S(matchMedia("(orientation: portrait)"), "change", () => {
    bt(), n();
  })), r.push(S(matchMedia("(orientation: landscape)"), "change", () => {
    bt(), n();
  })), r.push(S(document, "focusin", () => {
    ke(), Jt(), Mt(), (P(tt()) || P(document.activeElement)) && (D = Math.max(D, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0), V = Math.max(V, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0)), Qt({ caret: !0 }), n();
  }, {
    capture: !0,
    passive: !0
  })), r.push(S(document, "focusout", n, vt)), Mt(), n(), mn(() => n(), 100), () => r.forEach((o) => o());
}, ko = (t) => {
  if (!t?.classList?.contains?.("native-portrait-optimized"))
    return t?.classList?.add?.("native-portrait-optimized"), Sn(() => {
      const e = cr?.[ur()] ?? 0;
      t.orient = e, t.setAttribute?.("orient", String(e)), t.style?.setProperty?.("--orient", String(e));
    });
};
typeof document < "u" && (Mt(), document.readyState === "loading" && document.addEventListener("DOMContentLoaded", () => Mt(), { once: !0 }));
var ut = new OffscreenCanvas(1, 1).getContext("2d"), Cn = (t, e) => {
  const n = getComputedStyle(t, "");
  if (e && n) {
    const r = n.getPropertyValue("font-weight") || "normal", o = n.getPropertyValue("font-size") || "16px", c = n.getPropertyValue("font-family") || "Times New Roman", l = n.getPropertyValue("font-stretch") || "normal";
    try {
      e.fontStretch = l.includes("%") ? "normal" : l;
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
      e.font = `${r} ${o} ${c}`;
    } catch {
    }
  }
}, dr = (t, e) => {
  if (ut) {
    Cn(e, ut);
    try {
      return ut.measureText(t);
    } catch {
    }
  }
  return { width: null };
}, Ao = (t) => {
  const e = t.value.slice(0, t.selectionEnd || 0);
  return dr(e, t);
}, fr = (t, e) => {
  const n = t?.value || "";
  if (ut) {
    Cn(t, ut);
    let r = 0;
    for (let o = 0; o < n.length; o++) {
      if (r = ut.measureText(n.slice(0, o))?.width, r == null) return n.length;
      if (r != null && r >= e[0]) return Math.max(o - 1, 0);
    }
  }
  return n.length;
}, To = (t, e) => {
  const n = t.getBoundingClientRect(), r = [e[0] - n.left / Se(), e[1] - n.top / Se()];
  return fr(t, r);
}, hr = (t, e) => {
  const n = parseInt(t.getAttribute("data-grid-columns") || "", 10), r = parseInt(t.getAttribute("data-grid-rows") || "", 10), o = Dn(e ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : o[0], Number.isFinite(r) && r > 0 ? r : o[1]];
}, Ro = (t, e, n, r = "floor") => {
  if (!t) return [0, 0];
  const o = t.getBoundingClientRect?.();
  if (!o) return [0, 0];
  const c = hr(t, n?.layout), l = ht(t), u = globalThis.getComputedStyle?.(t), f = parseFloat(u?.paddingLeft) || 0, v = parseFloat(u?.paddingTop) || 0, p = parseFloat(u?.paddingRight) || 0, b = parseFloat(u?.paddingBottom) || 0, g = Math.max(1, (o.width || t.clientWidth || 1) - f - p), m = Math.max(1, (o.height || t.clientHeight || 1) - v - b), y = [(e?.[0] || 0) - o.left - f, (e?.[1] || 0) - o.top - v];
  return In(y, [g, m], c, l, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, Lo = (t) => _n(t, $n), Wo = (t) => Fn(t, Bn), Po = (t = 100, e = 0.05, n = 8) => {
  const r = [];
  for (let u = 0; u < t; u++) r.push(u / t);
  const o = (u) => `calc(${u}rad * pi * 2)`, c = (u) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${o(u)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, l = (u) => [`calc(calc(0.5 + calc(cos(${o(u)}) * calc(0.5 - ${c(u)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${o(u)}) * calc(0.5 - ${c(u)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": e,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((u) => l(u).join(" ")).join(", ")})`
  };
}, pr = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), wt = globalThis[pr] ??= /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), xt = globalThis[mr] ??= /* @__PURE__ */ new WeakMap(), Vt = (t) => (typeof t?.current == "object" && (t = t?.element ?? t?.current ?? (typeof t?.self == "object" ? t?.self : null) ?? t), t), ie = (t, e = "*") => typeof t != "string" ? e : t.trim() || e, St = (t, e) => {
  if (!t || typeof t.querySelectorAll != "function") return [];
  const n = ie(e, "");
  if (!n) return [];
  try {
    return Array.from(t.querySelectorAll(n) || []);
  } catch {
    return [];
  }
}, Ae = (t, e) => {
  if (!t || typeof t.matches != "function") return !1;
  const n = ie(e, "");
  if (!n) return !1;
  try {
    return !!t.matches(n);
  } catch {
    return !1;
  }
}, Oo = (t, e) => {
  if (!xt.has(t = Vt(t))) {
    const n = [], r = new ResizeObserver((o) => {
      for (const c of o) if (c.contentBoxSize) {
        const l = c.contentBoxSize[0];
        l && n.forEach((u) => u?.(l, r));
      }
    });
    e?.({
      inlineSize: t.clientWidth,
      blockSize: t.clientHeight
    }, r), xt.set(t, n), (t?.element ?? t) instanceof Node && r.observe(t?.element ?? t, { box: "content-box" });
  }
  return xt.get(t)?.push?.(e), { disconnect: () => xt.get(t)?.splice?.(xt.get(t)?.indexOf(e) || -1, 1) };
}, Ho = (t, e) => {
  if (!wt.has(t = Vt(t))) {
    const n = [], r = new ResizeObserver((o) => {
      for (const c of o) if (c.borderBoxSize) {
        const l = c.borderBoxSize[0];
        l && n.forEach((u) => u?.(l, r));
      }
    });
    e?.({
      inlineSize: t.offsetWidth,
      blockSize: t.offsetHeight
    }, r), wt.set(t, n), (t?.element ?? t) instanceof Node && r.observe(t?.element ?? t, { box: "border-box" });
  }
  return wt.get(t)?.push?.(e), { disconnect: () => wt.get(t)?.splice?.(wt.get(t)?.indexOf(e) || -1, 1) };
}, Vo = (t, e, n) => {
  if (typeof t?.selector == "string") return Nn(t, t?.selector, e, n);
  const r = new Set((e.split(",") || [e]).map((c) => c.trim())), o = new MutationObserver((c, l) => {
    for (const u of c) u.attributeName && r.has(u.attributeName) && n(u, l);
  });
  return (t?.element ?? t) instanceof Node && o.observe(t = Vt(t), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((c) => n({
    target: t,
    type: "attributes",
    attributeName: c,
    oldValue: t?.getAttribute?.(c)
  }, o)), o;
}, Nn = (t, e, n, r) => {
  const o = ie(e), c = new Set([...n.split(",") || [n]].map((u) => u.trim())), l = new MutationObserver((u, f) => {
    for (const v of u) if (v.type == "childList") {
      const p = Array.from(v.addedNodes) || [], b = Array.from(v.removedNodes) || [];
      p.push(...Array.from(v.addedNodes || []).flatMap((g) => St(g, o))), b.push(...Array.from(v.removedNodes || []).flatMap((g) => St(g, o))), [...new Set(p)].filter((g) => Ae(g, o))?.map?.((g) => {
        c.forEach((m) => {
          (g?.parentNode ?? g?.host ?? g?.getRootNode?.()) && r({
            target: g,
            type: "attributes",
            attributeName: m,
            oldValue: g?.getAttribute?.(m)
          }, f);
        });
      });
    } else Ae(v.target, o) && v.attributeName && c.has(v.attributeName) && r(v, f);
  });
  return l.observe(t = Vt(t), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...c],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), St(t, o).map((u) => c.forEach((f) => r({
    target: u,
    type: "attributes",
    attributeName: f,
    oldValue: u?.getAttribute?.(f)
  }, l))), l;
}, gr = (t, e = "*", n = (r, o) => {
}) => {
  const r = ie(e), o = (m) => {
    const y = Array.from(m || []) || [];
    return y.push(...Array.from(m || []).flatMap((x) => St(x, r))), [...Array.from(new Set(y).values())].filter((x) => Ae(x, r));
  };
  let c = null;
  const l = (m) => {
    const y = c?.deref?.(), x = o(m.addedNodes), C = o(m.removedNodes);
    (x.length > 0 || C.length > 0) && n?.({
      type: m.type,
      target: m.target,
      attributeName: m.attributeName,
      attributeNamespace: m.attributeNamespace,
      nextSibling: m.nextSibling,
      oldValue: m.oldValue,
      previousSibling: m.previousSibling,
      addedNodes: x,
      removedNodes: C
    }, y);
  }, u = (m) => {
    l({
      addedNodes: [m?.target].filter((y) => !!y),
      removedNodes: [m?.relatedTarget].filter((y) => !!y),
      type: "childList",
      target: m?.currentTarget
    });
  }, f = (m) => {
    l({
      addedNodes: [m?.relatedTarget].filter((y) => !!y),
      removedNodes: [m?.target].filter((y) => !!y),
      type: "childList",
      target: m?.currentTarget
    });
  }, v = (m) => {
    l({
      addedNodes: [m?.target].filter((y) => !!y),
      removedNodes: [m?.relatedTarget || document?.activeElement].filter((y) => !!y),
      type: "childList",
      target: m?.currentTarget
    });
  }, p = {
    passive: !0,
    capture: !1
  };
  if (r?.includes?.(":hover") && r?.includes?.(":active"))
    return t.addEventListener("pointerover", u, p), t.addEventListener("pointerout", f, p), t.addEventListener("pointerdown", u, p), t.addEventListener("pointerup", f, p), t.addEventListener("pointercancel", f, p), { disconnect: () => {
      t.removeEventListener("pointerover", u, p), t.removeEventListener("pointerout", f, p), t.removeEventListener("pointerdown", u, p), t.removeEventListener("pointerup", f, p), t.removeEventListener("pointercancel", f, p);
    } };
  if (r?.includes?.(":hover"))
    return t.addEventListener("pointerover", u, p), t.addEventListener("pointerout", f, p), { disconnect: () => {
      t.removeEventListener("pointerover", u, p), t.removeEventListener("pointerout", f, p);
    } };
  if (r?.includes?.(":active"))
    return t.addEventListener("pointerdown", u, p), t.addEventListener("pointerup", f, p), t.addEventListener("pointercancel", f, p), { disconnect: () => {
      t.removeEventListener("pointerdown", u, p), t.removeEventListener("pointerup", f, p), t.removeEventListener("pointercancel", f, p);
    } };
  if (r?.includes?.(":focus") && r?.includes?.(":focus-within") && r?.includes?.(":focus-visible"))
    return t.addEventListener("focusin", u, p), t.addEventListener("focusout", f, p), t.addEventListener("click", v, p), { disconnect: () => {
      t.removeEventListener("focusin", u, p), t.removeEventListener("focusout", f, p), t.removeEventListener("click", v, p);
    } };
  const b = new MutationObserver((m, y) => {
    for (const x of m) x.type == "childList" && l(x);
  });
  c = new WeakRef(b), (t?.element ?? t) instanceof Node && b.observe(t = Vt(t), {
    childList: !0,
    subtree: !0
  });
  const g = St(t, r);
  return g.length > 0 && n?.({
    addedNodes: g,
    removedNodes: []
  }, b), b;
}, Mn = /* @__PURE__ */ new WeakMap(), yr = (t, e, n) => (new WeakRef(t), e.has(n) || e.add(n), t), zo = (t, e) => {
  if (t) {
    if (e) {
      const n = Mn.getOrInsert(t, /* @__PURE__ */ new Set());
      [...e?.values?.() || []].map((r) => yr(t, n, r));
    }
    return t;
  }
}, br = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), Tt = globalThis[br] ??= /* @__PURE__ */ new Map(), vr = (t, e) => {
  const n = [...t.entries() || []];
  return new Map(n?.map?.(([r, o]) => [r, o?.get?.(e)])?.filter?.(([r, o]) => !!o) || []);
}, wr = (t) => (typeof t == "object" || typeof t == "function") && t != null, xr = (t, e, n) => {
  if (!wr(t) && t != null) return t;
  let r = Tt.get(e);
  return r || (r = /* @__PURE__ */ new WeakMap(), Tt.set(e, r)), !r.has(t) && t != null && r.set(t, n), t;
}, jo = (t, e) => {
  if (!(!t || !e)) {
    for (const [n, r] of e.entries()) xr(t, n, r);
    return t;
  }
}, L = globalThis;
function G(t, e) {
  const n = Symbol.for(t);
  return L[n] ??= e();
}
function He() {
  return typeof document < "u" && typeof Element < "u" && typeof Attr < "u" && typeof MutationObserver < "u";
}
function kn() {
  if (!He()) throw new Error("Custom Attributes require a browser DOM.");
}
function ee(t) {
  const e = L.reportError;
  typeof e == "function" ? e.call(globalThis, t) : console.error(t);
}
function dt(t) {
  try {
    return t();
  } catch (e) {
    ee(e);
    return;
  }
}
function Y(t, e) {
  return new DOMException(t, e);
}
function An(t) {
  return /^[a-z][^A-Z\t\n\f\r \0/=>]*$/.test(t) && t.includes("-") && !/^(aria-|data-|xml|xlink)/.test(t) && t !== "accept-charset" && t !== "http-equiv";
}
function se(t) {
  if (!An(t)) throw Y(`Invalid custom attribute name: ${t}`, "SyntaxError");
}
function I(t) {
  return t.nodeType === 1;
}
function at(t) {
  return t.namespaceURI === "http://www.w3.org/1999/xhtml";
}
function ge(t) {
  return t.nodeType === 11 && "host" in t;
}
var Rt = G("dom.ts@boundMixinSet", () => /* @__PURE__ */ new WeakMap()), Te = G("dom.ts@mixinElements", () => /* @__PURE__ */ new WeakMap()), ft = G("dom.ts@mixinRegistry", () => /* @__PURE__ */ new Map()), X = G("dom.ts@mixinNamespace", () => /* @__PURE__ */ new WeakMap()), E = G("dom.ts@mixins2.engine", () => ({
  bindings: /* @__PURE__ */ new WeakMap(),
  roots: /* @__PURE__ */ new Set(),
  watches: /* @__PURE__ */ new Map(),
  pending: /* @__PURE__ */ new Set(),
  queued: !1,
  dataSource: /* @__PURE__ */ Symbol("data-mixin"),
  manualSource: /* @__PURE__ */ Symbol("manual"),
  closedShadows: /* @__PURE__ */ new WeakMap(),
  processing: !1
})), F = E.roots;
function Ct(t) {
  return t.shadowRoot ?? E.closedShadows.get(t) ?? null;
}
function* _(t) {
  const e = [t];
  for (; e.length; ) {
    const n = e.pop();
    I(n) && (yield n);
    for (let r = n.lastChild; r; r = r.previousSibling) e.push(r);
    if (I(n)) {
      const r = Ct(n);
      r && e.push(r);
    }
  }
}
function* ye(t) {
  const e = [t];
  for (; e.length; ) {
    const n = e.pop();
    I(n) && (yield n);
    for (let r = n.lastChild; r; r = r.previousSibling) e.push(r);
  }
}
function Er(t) {
  const e = /* @__PURE__ */ new Set();
  for (const n of t?.sources ?? []) typeof n == "object" && n.nodeType === 2 && e.add(n);
  return e;
}
function Tn(t, e, n) {
  const r = e ? E.bindings.get(t)?.get(e) : void 0, o = Er(r);
  return n ??= o.values().next().value ?? r?.lastAttribute, {
    storeSet: vr(Tt, t),
    mixinSet: Rt.get(t),
    behaviorSet: Mn.get(t),
    attribute: n,
    attributes: o,
    value: n?.value,
    signal: r?.controller?.signal
  };
}
function Sr(t, e) {
  let n = E.bindings.get(t);
  n || E.bindings.set(t, n = /* @__PURE__ */ new Map());
  let r = n.get(e);
  return r || n.set(e, r = {
    sources: /* @__PURE__ */ new Set(),
    connected: !1,
    document: t.ownerDocument,
    reconciling: !1,
    dirty: !1
  }), r;
}
function et(t, e, n, r, ...o) {
  const c = e[n];
  if (typeof c == "function")
    return dt(() => Reflect.apply(c, e, [
      new WeakRef(t),
      e,
      Tn(t, e, r),
      ...o
    ]));
}
function Lt(t, e, n) {
  if (n.reconciling) {
    n.dirty = !0;
    return;
  }
  n.reconciling = !0;
  try {
    for (let r = 0; r < 32; r++) {
      n.dirty = !1;
      const o = n.document;
      n.document = t.ownerDocument, o !== n.document && et(t, e, "adoptedCallback", void 0, o, n.document);
      const c = n.sources.size > 0 && t.isConnected;
      if (c !== n.connected) {
        n.connected = c;
        let l = Rt.get(t);
        l || Rt.set(t, l = /* @__PURE__ */ new WeakSet());
        let u = Te.get(e);
        if (u || Te.set(e, u = /* @__PURE__ */ new WeakSet()), c) {
          l.add(e), u.add(t), n.controller = new AbortController();
          const f = et(t, e, "connect");
          typeof f == "function" && (n.cleanup = f);
        } else {
          l.delete(e), u.delete(t);
          const f = n.cleanup;
          n.cleanup = void 0, dt(() => n.controller?.abort()), f && dt(f), et(t, e, "disconnect"), n.controller = void 0;
        }
      }
      if (!n.dirty) break;
      r === 31 && (ee(/* @__PURE__ */ new Error("A mixin repeatedly changed its own binding during lifecycle delivery.")), mt(t));
    }
  } finally {
    n.reconciling = !1;
  }
  !n.sources.size && !n.connected && E.bindings.get(t)?.delete(e);
}
function Wt(t, e, n) {
  const r = Sr(t, e);
  r.sources.add(n), typeof n == "object" && n.nodeType === 2 && (r.lastAttribute = n), Lt(t, e, r);
}
function lt(t, e, n) {
  const r = E.bindings.get(t)?.get(e);
  r && (r.sources.delete(n), Lt(t, e, r));
}
function mt(t) {
  E.pending.add(t), E.queued || (E.queued = !0, queueMicrotask(() => {
    E.queued = !1, Re();
  }));
}
function Re() {
  if (!E.processing) {
    E.processing = !0;
    try {
      const t = [...E.pending];
      E.pending.clear();
      for (const e of t) dt(() => gt(e));
    } finally {
      E.processing = !1;
    }
  }
}
function Ve(t) {
  return new Set((t.getAttribute("data-mixin") ?? "").split(/\s+/).filter(Boolean));
}
function Rn(t, e) {
  const n = [...e].join(" ");
  n ? t.getAttribute("data-mixin") !== n && t.setAttribute("data-mixin", n) : t.hasAttribute("data-mixin") && t.removeAttribute("data-mixin");
}
function gt(t) {
  const e = /* @__PURE__ */ new Set();
  for (const n of Ve(t)) {
    const r = ft.get(n);
    r && e.add(r);
  }
  for (const [n, r] of [...E.bindings.get(t) ?? []]) r.sources.has(E.dataSource) && !e.has(n) && lt(t, n, E.dataSource);
  for (const n of e) Wt(t, n, E.dataSource);
  for (const [n, r] of [...E.bindings.get(t) ?? []]) Lt(t, n, r);
  return t;
}
function Cr(t, e) {
  return gt(t);
}
function Nr(t, e) {
  for (const n of t) e ? Cr(n, e) : gt(n);
}
function Do(t) {
  for (const e of F) Nr(_(e), t);
}
function Mr(t, e, n) {
  n && !Rt.has(t) && Rt.set(t, n);
  const r = X.get(e) ?? e.name;
  if (r) {
    const o = Ve(t);
    o.add(r), Rn(t, o);
  }
  return Wt(t, e, E.manualSource), gt(t), t;
}
function Io(t, e, n = !0) {
  if (n) {
    const r = X.get(e) ?? e.name;
    if (r) {
      const o = Ve(t);
      o.delete(r), Rn(t, o);
    }
  }
  return lt(t, e, E.manualSource), gt(t);
}
function _o(t, e) {
  if (!t) return t;
  const n = e instanceof Map ? e.values() : e ?? [];
  for (const r of n) Mr(t, r);
  return t;
}
function ae(t, e) {
  const n = t.trim();
  if (!n || /\s/.test(n)) throw new TypeError("Mixin name must be a non-empty token.");
  if (!e || typeof e != "object" && typeof e != "function") throw new TypeError("Mixin must be an object.");
  const r = ft.get(n);
  if (r && r !== e) {
    console.error(`Mixin name already registered: ${n}`);
    return;
  }
  const o = X.get(e);
  if (o && o !== n) throw new Error(`Mixin already named: ${o}`);
  ft.set(n, e), X.set(e, n);
  for (const c of F) for (const l of _(c)) mt(l);
  return e;
}
function Bo(t) {
  const e = ft.get(t);
  if (!e) return !1;
  ft.delete(t), X.get(e) === t && X.delete(e);
  for (const n of F) for (const r of _(n)) mt(r);
  return !0;
}
var $o = G("dom.ts@mixins2.nameRegistryF", () => typeof FinalizationRegistry > "u" ? void 0 : new FinalizationRegistry(() => {
}));
function be(t, e) {
  typeof t == "function" && e.push(t);
}
function Nt(t) {
  for (const e of _(t)) {
    const n = Ct(e);
    n && !F.has(n) && ce(n), mt(e);
  }
}
function Ln(t) {
  for (const e of t)
    if (e.type === "attributes" && I(e.target) && mt(e.target), e.type === "childList") {
      for (const n of e.removedNodes) Nt(n);
      for (const n of e.addedNodes) Nt(n);
    }
}
function ce(t = typeof document < "u" ? document : null) {
  if (!t) return;
  if (kn(), F.has(t)) return t;
  F.add(t);
  const e = [], n = new MutationObserver(Ln);
  return E.watches.set(t, {
    observer: n,
    disposers: e
  }), n.observe(t, {
    childList: !0,
    subtree: !0,
    attributes: !0
  }), be(Nn(t, "*", "data-mixin", (r) => {
    I(r.target) && mt(r.target);
  }), e), be(gr(t, "[data-mixin]", (r) => {
    for (const o of r.removedNodes) Nt(o);
    for (const o of r.addedNodes) Nt(o);
  }), e), be(qn(t), e), nt.runtime?.observeRoot(t), Nt(t), t;
}
function Fo(t) {
  const e = E.watches.get(t);
  if (e) {
    e.observer.disconnect();
    for (const n of e.disposers) dt(n);
    E.watches.delete(t);
  }
  return F.delete(t);
}
var ze = class {
  constructor(t = null) {
    t && ae(t, this);
  }
  connect(t, e, n) {
    return this;
  }
  disconnect(t, e, n) {
    return this;
  }
  storeForElement(t) {
    return Tt.get(this.name ?? "")?.get(t);
  }
  relatedForElement(t) {
    return Tn(t, this);
  }
  get elements() {
    return Te.get(this);
  }
  get storage() {
    return Tt.get(this.name ?? "");
  }
  get name() {
    return X.get(this);
  }
}, nt = G("dom.ts@mixins2.attributePolyfill", () => ({}));
function kr() {
  return typeof L.CustomAttributeRegistry == "function" && L.customAttributes != null && typeof L.customAttributes.define == "function";
}
function qo() {
  return !!nt.runtime && L.CustomAttributeRegistry === nt.runtime.Registry;
}
function zt() {
  if (kn(), kr()) return L.customAttributes;
  if (L.CustomAttributeRegistry != null || L.customAttributes != null) throw new Error("A partial Custom Attributes API is installed; refusing to overwrite it.");
  const t = Rr();
  nt.runtime = t;
  for (const e of F) t.observeRoot(e);
  return ce(document), t.registry;
}
function je() {
  return zt();
}
function Zo() {
  return zt(), new L.CustomAttributeRegistry();
}
function Ar() {
  return zt(), L.Attr;
}
function Tr(t, e = {}) {
  zt();
  const n = e.document ?? document;
  return n.createAttribute.call(n, t, { customAttributeRegistry: e.registry });
}
function Rr() {
  const t = L.Attr, e = Document.prototype, n = Element.prototype, r = e.createAttribute, o = e.createAttributeNS, c = e.createElement, l = e.createElementNS, u = e.importNode, f = n.attachShadow, v = Object.getOwnPropertyDescriptor(Element.prototype, "attributes"), p = v.get, b = /* @__PURE__ */ Symbol("already constructed"), g = [
    "connectedCallback",
    "disconnectedCallback",
    "connectedMoveCallback",
    "adoptedCallback",
    "attributeChangedCallback"
  ], m = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakSet(), $ = /* @__PURE__ */ new WeakMap();
  let ue = !1, Q;
  function H(s) {
    const i = m.get(s);
    if (!i) throw new TypeError("Illegal invocation");
    return i;
  }
  function jt(s) {
    return s.nodeType === 9 ? s : s.ownerDocument;
  }
  function Z(s, i) {
    y.set(s, i), x.set(s, s.ownerDocument);
  }
  function Ie(s) {
    return s && !H(s).scoped ? s : null;
  }
  function _e(s) {
    return s.nodeType === 11 && !ge(s);
  }
  function M(s) {
    if (s.nodeType === 9) return y.get(s) ?? null;
    if (y.has(s)) {
      const a = y.get(s);
      if (x.get(s) === s.ownerDocument || a && H(a).scoped) return a;
      const d = s.parentNode, h = Ie(!I(s) || a || !d || _e(d) ? M(s.ownerDocument) : M(d));
      return Z(s, h), h;
    }
    let i = null;
    if (I(s)) {
      const a = s.parentNode;
      i = a && !_e(a) ? M(a) : s.ownerDocument === document ? Q : null;
    } else ge(s) && (i = s.ownerDocument === document ? Q : null);
    return i && Z(s, i), i;
  }
  function Be(s, i, a) {
    return s && i === null ? H(s).byName.get(a) : void 0;
  }
  function rt(s, i) {
    if (typeof s != "object" || s === null) return;
    const a = s.customAttributeRegistry;
    if (a === void 0 || i && a === null) return a;
    if (a === null || !m.has(a)) throw new TypeError(`customAttributeRegistry must be a registry${i ? " or null" : ""}`);
    return a;
  }
  function ot(s, i) {
    if (s && !H(s).scoped && M(i) !== s) throw Y("A global registry can only be used with its own document.", "NotSupportedError");
  }
  function z(s, i, a = []) {
    const d = C.get(s)?.definition;
    if (!d) return;
    const h = d.callbacks[i];
    if (!h && i === "connectedMoveCallback") {
      z(s, "disconnectedCallback"), z(s, "connectedCallback");
      return;
    }
    h && dt(() => Reflect.apply(h, s, a));
  }
  function le(s, i) {
    i.connected || (i.connected = !0, z(s, "connectedCallback"));
  }
  function $e(s, i) {
    i.connected && (i.connected = !1, z(s, "disconnectedCallback"));
  }
  function de(s, i, a) {
    const d = i.document;
    d !== a && (i.document = a, z(s, "adoptedCallback", [d, a]));
  }
  function Dt(s, i) {
    let a = O.get(s);
    if (a || O.set(s, a = /* @__PURE__ */ new Map()), a.set(i.localName, i), J.has(s.getRootNode()))
      $.get(s)?.disconnect(), $.delete(s);
    else if (!$.has(s)) {
      const d = new MutationObserver(_t);
      d.observe(s, {
        attributes: !0,
        attributeOldValue: !0
      }), $.set(s, d);
    }
  }
  function Pn(s, i) {
    const a = O.get(s);
    a?.get(i.localName) === i && a.delete(i.localName), a && !a.size && (O.delete(s), $.get(s)?.disconnect(), $.delete(s));
  }
  function Fe(s, i, a, d) {
    const h = i.constructor, w = q.get(h);
    i.stack.push(s), q.set(h, a);
    try {
      if (new h() !== s) throw new TypeError("Constructor returned a different attribute.");
      d?.();
    } finally {
      w ? q.set(h, w) : q.delete(h), i.stack.pop();
    }
  }
  function On(s, i, a) {
    const { ownerDocument: d, localName: h, namespaceURI: w, prefix: k } = s, N = {
      state: "custom",
      definition: i,
      connected: !1,
      document: d
    };
    C.set(s, N);
    try {
      Fe(s, i, a, () => {
        if (s.ownerElement !== null || s.ownerDocument !== d || s.localName !== h || s.namespaceURI !== w || s.prefix !== k || s.value !== "") throw Y("An attribute constructor must leave the Attr unattached and empty.", "NotSupportedError");
      });
    } catch (T) {
      N.state = "failed", N.definition = null, ee(T);
    }
  }
  function qe(s, i, a, d) {
    if (C.has(s) || !s.ownerElement) return;
    const h = {
      state: "precustomized",
      definition: i,
      connected: !1,
      document: s.ownerElement.ownerDocument
    };
    C.set(s, h);
    try {
      Fe(s, i, a);
    } catch (k) {
      h.state = "failed", h.definition = null, ee(k);
      return;
    }
    h.state = "custom";
    const w = s.ownerElement;
    w && (Dt(w, s), z(s, "attributeChangedCallback", [null, d]), s.ownerElement === w && w.isConnected && le(s, h));
  }
  function It(s, i = s.value) {
    const a = s.ownerElement;
    if (!a || !at(a) || C.has(s)) return;
    const d = M(a), h = Be(d, s.namespaceURI, s.localName);
    d && h && qe(s, h, d, i);
  }
  class Hn {
    history = /* @__PURE__ */ new Map();
    position = 0;
    constructor(i) {
      i.forEach((a, d) => {
        if (a.type !== "attributes" || a.attributeNamespace !== null || !a.attributeName || !I(a.target)) return;
        let h = this.history.get(a.target);
        h || this.history.set(a.target, h = /* @__PURE__ */ new Map());
        let w = h.get(a.attributeName);
        w || h.set(a.attributeName, w = []), w.push({
          index: d,
          oldValue: a.oldValue
        });
      });
    }
    later(i, a) {
      return (this.history.get(i)?.get(a) ?? []).filter((d) => d.index > this.position);
    }
    valueAfter(i, a) {
      const d = this.later(i, a);
      return d.length ? d[0].oldValue : i.getAttributeNS(null, a);
    }
    addedLater(i, a) {
      return this.later(i, a).some((d) => d.oldValue === null);
    }
    tree(i) {
      for (const a of _(i)) {
        const d = Ct(a);
        d && !J.has(d) && K(d), this.element(a);
      }
    }
    element(i) {
      if (at(i))
        for (const a of Array.from(p.call(i))) {
          const d = a.localName;
          if (a.namespaceURI !== null || this.addedLater(i, d)) continue;
          const h = C.get(a);
          if (!h) {
            i.isConnected && It(a, this.valueAfter(i, d) ?? a.value);
            continue;
          }
          h.state === "custom" && (O.get(i)?.get(d) !== a ? (Dt(i, a), de(a, h, i.ownerDocument), z(a, "attributeChangedCallback", [null, this.valueAfter(i, d) ?? a.value])) : (Dt(i, a), de(a, h, i.ownerDocument)), a.ownerElement === i && (i.isConnected ? le(a, h) : $e(a, h)));
        }
    }
    attribute(i, a, d) {
      if (!at(i)) return;
      const h = O.get(i)?.get(a), w = i.getAttributeNodeNS(null, a);
      if (h && h === w) {
        z(h, "attributeChangedCallback", [d, this.valueAfter(i, a)]);
        return;
      }
      if (h) {
        Pn(i, h);
        const T = C.get(h);
        z(h, "attributeChangedCallback", [d, null]), $e(h, T);
      }
      if (!w || this.addedLater(i, a)) return;
      const k = this.valueAfter(i, a), N = C.get(w);
      if (!N) {
        It(w, k ?? w.value);
        return;
      }
      N.state === "custom" && (Dt(i, w), de(w, N, i.ownerDocument), z(w, "attributeChangedCallback", [null, k]), w.ownerElement === i && i.isConnected && le(w, N));
    }
    run(i) {
      i.forEach((a, d) => {
        if (this.position = d, a.type === "childList") {
          for (const h of a.removedNodes) this.tree(h);
          for (const h of a.addedNodes) this.tree(h);
        } else a.type === "attributes" && a.attributeNamespace === null && a.attributeName && I(a.target) && this.attribute(a.target, a.attributeName, a.oldValue);
      });
    }
  }
  function _t(s) {
    new Hn(s).run(s);
  }
  const Ze = new MutationObserver(_t);
  function K(s) {
    J.has(s) || (J.add(s), Ze.observe(s, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeOldValue: !0
    }), (s.nodeType === 9 || s.nodeType === 11 || I(s)) && ce(s));
  }
  function Bt() {
    const s = Ze.takeRecords();
    s.length && _t(s);
  }
  class it {
    constructor() {
      m.set(this, {
        scoped: !ue,
        byName: /* @__PURE__ */ new Map(),
        byConstructor: /* @__PURE__ */ new Map(),
        running: !1,
        pending: /* @__PURE__ */ new Map(),
        documents: /* @__PURE__ */ new Set()
      });
    }
    define(i, a) {
      const d = H(this);
      if (typeof a != "function") throw new TypeError("constructor must be constructible");
      try {
        Reflect.construct(String, [], a);
      } catch {
        throw new TypeError("constructor must be constructible");
      }
      if (i = String(i), se(i), d.byName.has(i) || d.byConstructor.has(a)) throw Y("Name or constructor already registered.", "NotSupportedError");
      if (d.running) throw Y("Nested define() is not supported.", "NotSupportedError");
      d.running = !0;
      const h = {};
      try {
        const N = a.prototype;
        if (!N || typeof N != "object" && typeof N != "function") throw new TypeError("constructor.prototype must be an object");
        for (const T of g) {
          const W = N[T];
          if (W !== void 0 && typeof W != "function") throw new TypeError(`${T} must be a function`);
          W && (h[T] = W);
        }
      } finally {
        d.running = !1;
      }
      const w = {
        name: i,
        constructor: a,
        callbacks: h,
        stack: []
      };
      d.byName.set(i, w), d.byConstructor.set(a, w), Bt();
      for (const N of /* @__PURE__ */ new Set([document, ...d.documents])) for (const T of _(N)) {
        const W = Ct(T);
        W && K(W);
        const j = T.getAttributeNodeNS(null, i);
        j && at(T) && M(T) === this && qe(j, w, this, j.value);
      }
      const k = d.pending.get(i);
      k && (d.pending.delete(i), k.resolve(a));
    }
    get(i) {
      return H(this).byName.get(String(i))?.constructor;
    }
    getName(i) {
      if (typeof i != "function") throw new TypeError("constructor must be a function");
      return H(this).byConstructor.get(i)?.name ?? null;
    }
    whenDefined(i) {
      const a = H(this);
      if (i = String(i), !An(i)) return Promise.reject(Y(`Invalid custom attribute name: ${i}`, "SyntaxError"));
      const d = a.byName.get(i);
      if (d) return Promise.resolve(d.constructor);
      let h = a.pending.get(i);
      if (!h) {
        let w;
        const k = new Promise((N) => {
          w = N;
        });
        a.pending.set(i, h = {
          promise: k,
          resolve: w
        });
      }
      return h.promise;
    }
    upgrade(i) {
      if (H(this), !(i instanceof Node)) throw new TypeError("root must be a current-realm Node");
      Bt();
      for (const a of _(i))
        if (M(a) === this)
          for (const d of Array.from(p.call(a))) It(d);
    }
    initialize(i) {
      const a = H(this);
      if (!(i instanceof Node)) throw new TypeError("root must be a current-realm Node");
      Bt();
      const d = i.nodeType === 9;
      if (!a.scoped && (d || M(jt(i)) !== this)) throw Y("A global registry can only initialize its own document nodes.", "NotSupportedError");
      (d || ge(i)) && !M(i) && Z(i, this);
      const h = jt(i);
      a.scoped && a.documents.add(h), K(h), K(i);
      for (const w of ye(i))
        if (M(w) || Z(w, this), M(w) === this)
          for (const k of Array.from(p.call(w))) It(k);
    }
  }
  for (const s of [
    "define",
    "get",
    "getName",
    "whenDefined",
    "upgrade",
    "initialize"
  ]) Object.defineProperty(it.prototype, s, {
    ...Object.getOwnPropertyDescriptor(it.prototype, s),
    enumerable: !0
  });
  Object.defineProperty(it.prototype, Symbol.toStringTag, {
    value: "CustomAttributeRegistry",
    configurable: !0
  }), ue = !0, Q = new it(), ue = !1, y.set(document, Q);
  function yt() {
    const s = new.target;
    if (!s || s === yt) throw new TypeError("Illegal Attr constructor");
    const i = H(q.get(s) ?? Q).byConstructor.get(s);
    if (!i) throw new TypeError("Class is not a defined custom attribute.");
    const a = s.prototype ?? t.prototype, d = i.stack;
    if (!d.length) {
      const w = r.call(document, i.name);
      return Object.setPrototypeOf(w, a), C.set(w, {
        state: "custom",
        definition: i,
        connected: !1,
        document
      }), w;
    }
    const h = d[d.length - 1];
    if (h === b || typeof h == "symbol") throw new TypeError("Attr already constructed");
    return Object.setPrototypeOf(h, a), d[d.length - 1] = b, h;
  }
  Object.defineProperty(yt, "prototype", {
    value: t.prototype,
    writable: !1
  }), Object.setPrototypeOf(yt, Object.getPrototypeOf(t)), Object.defineProperty(t.prototype, "constructor", {
    value: yt,
    writable: !0,
    configurable: !0
  }), L.Attr = yt, L.CustomAttributeRegistry = it, Object.defineProperty(globalThis, "customAttributes", {
    get: () => Q,
    enumerable: !0,
    configurable: !0
  });
  for (const s of [
    Element.prototype,
    ShadowRoot.prototype,
    Document.prototype
  ]) Object.defineProperty(s, "customAttributeRegistry", {
    get() {
      return M(this);
    },
    enumerable: !0,
    configurable: !0
  });
  function Ke(s, i, a) {
    a === void 0 && (a = M(s));
    const d = Be(a, i.namespaceURI, i.localName);
    return a && d && On(i, d, a), i;
  }
  e.createAttribute = function(s, i = {}) {
    const a = rt(i, !0);
    return ot(a, this), Ke(this, r.call(this, s), a);
  }, e.createAttributeNS = function(s, i, a = {}) {
    const d = rt(a, !0);
    return ot(d, this), Ke(this, o.call(this, s, i), d);
  }, e.createElement = function(s, i) {
    const a = rt(i, !0);
    ot(a, this);
    const d = c.call(this, s, i);
    return Z(d, a === void 0 ? M(this) : a), d;
  }, e.createElementNS = function(s, i, a) {
    const d = rt(a, !0);
    ot(d, this);
    const h = l.call(this, s, i, a);
    return Z(h, d === void 0 ? M(this) : d), h;
  }, e.importNode = function(s, i = !1) {
    const a = rt(i, !1);
    ot(a, this);
    const d = typeof i == "boolean" ? i : !!i.deep, h = u.call(this, s, d), w = a ?? M(this), k = Ie(M(this)), N = [...ye(s)];
    return [...ye(h)].forEach((T, W) => {
      const j = N[W] && M(N[W]) || w;
      Z(T, j && !H(j).scoped ? k : j);
    }), h;
  }, n.attachShadow = function(s) {
    const i = rt(s, !0);
    ot(i, this.ownerDocument);
    const a = f.call(this, s);
    return Z(a, i === void 0 ? M(this.ownerDocument) : i), a.mode === "closed" && E.closedShadows.set(this, a), K(a), a;
  };
  for (const s of [
    Element.prototype,
    Document.prototype,
    DocumentFragment.prototype
  ]) {
    const i = s, a = i.moveBefore;
    typeof a == "function" && (i.moveBefore = function(d, h) {
      const w = d.isConnected, k = jt(d), N = a.call(this, d, h);
      if (w && d.isConnected && k === jt(d)) for (const T of _(d)) for (const W of Array.from(p.call(T))) {
        const j = C.get(W);
        j?.state === "custom" && j.connected && z(W, "connectedMoveCallback");
      }
      return N;
    });
  }
  function Ue(s, i) {
    if (C.get(i)?.definition && !at(s)) throw Y("Custom attributes are supported only on HTML elements.", "NotSupportedError");
  }
  function Ye(s, i, a) {
    a === i || O.has(s) || J.has(s.getRootNode()) || _t([{
      type: "attributes",
      target: s,
      attributeName: i.localName,
      attributeNamespace: i.namespaceURI,
      oldValue: a?.value ?? null
    }]);
  }
  Object.defineProperty(Element.prototype, "attributes", {
    ...v,
    get() {
      const s = p.call(this);
      return B.set(s, this), s;
    }
  });
  for (const s of ["setAttributeNode", "setAttributeNodeNS"]) {
    const i = n[s];
    n[s] = function(a) {
      Ue(this, a);
      const d = i.call(this, a);
      return Ye(this, a, d), d;
    };
  }
  const Xe = NamedNodeMap.prototype;
  for (const s of ["setNamedItem", "setNamedItemNS"]) {
    const i = Xe[s];
    Xe[s] = function(a) {
      const d = B.get(this);
      d && Ue(d, a);
      const h = i.call(this, a);
      return d && Ye(d, a, h), h;
    };
  }
  const Ge = {
    registry: Q,
    Registry: it,
    observeRoot: K,
    flush: Bt
  };
  nt.runtime = Ge, K(document);
  for (const s of _(document)) {
    const i = Ct(s);
    i && K(i);
  }
  return Ge;
}
var Pt = G("dom.ts@mixins2.bridges", () => ({
  byRegistry: /* @__PURE__ */ new WeakMap(),
  fromAttribute: /* @__PURE__ */ new WeakMap()
}));
function Lr(t, e, n = {}) {
  se(t);
  const r = n.registry ?? je();
  let o = Pt.byRegistry.get(r);
  o || Pt.byRegistry.set(r, o = /* @__PURE__ */ new Map());
  const c = o.get(t);
  if (c) {
    if (c.mixin !== e) throw new Error(`Attribute bridge conflict: ${t}`);
    return c.constructor;
  }
  if (r.get(t)) throw new Error(`Attribute already defined: ${t}`);
  const l = Ar(), u = /* @__PURE__ */ new WeakMap();
  function f(p) {
    const b = u.get(p)?.deref(), g = p.ownerElement;
    return g ? (b && b !== g && lt(b, e, p), u.set(p, new WeakRef(g)), g) : b;
  }
  class v extends l {
    connectedCallback() {
      const b = f(this);
      b && this.ownerElement === b && Wt(b, e, this);
    }
    disconnectedCallback() {
      const b = f(this);
      if (b)
        if (!this.ownerElement) lt(b, e, this);
        else {
          const g = E.bindings.get(b)?.get(e);
          g && Lt(b, e, g);
        }
    }
    attributeChangedCallback(b, g) {
      const m = f(this);
      m && (g !== null && this.ownerElement === m && Wt(m, e, this), et(m, e, "attributeChangedCallback", this, b, g), g === null && lt(m, e, this));
    }
    adoptedCallback(b, g) {
      const m = f(this), y = m && E.bindings.get(m)?.get(e);
      m && y && Lt(m, e, y);
    }
    connectedMoveCallback() {
      const b = f(this);
      b && et(b, e, "connectedMoveCallback", this);
    }
  }
  return r.define(t, v), o.set(t, {
    mixin: e,
    constructor: v
  }), v;
}
function Ko(t, e, n = {}) {
  const r = n.attributeName ?? t;
  se(r);
  const o = n.registry ?? je(), c = Pt.byRegistry.get(o)?.get(r);
  if (o.get(r) && (!c || c.mixin !== e)) throw new Error(`Attribute already defined: ${r}`);
  return ae(t, e), {
    mixin: e,
    attribute: Lr(r, e, { registry: o })
  };
}
function Uo(t, e, n = {}) {
  const r = n.attributeName ?? t;
  se(r);
  const o = n.registry ?? je();
  let c = Pt.fromAttribute.get(o);
  c || Pt.fromAttribute.set(o, c = /* @__PURE__ */ new Map());
  const l = c.get(r);
  if (l) {
    if (l.constructor !== e) throw new Error(`Attribute adapter conflict: ${r}`);
    if (X.get(l?.mixin) !== t) throw new Error("Adapter already has another mixin name.");
    return l?.mixin;
  }
  const u = o.get(r);
  if (u && u !== e) throw new Error(`Attribute already defined: ${r}`);
  const f = { connect(p) {
    const b = p.deref();
    if (!b || !at(b)) return;
    if (b.customAttributeRegistry !== o) throw new Error(`The element's registry does not own ${r}; initialize its scope first.`);
    if (o.upgrade(b), b.hasAttributeNS(null, r)) return;
    const g = Tr(r, {
      document: b.ownerDocument,
      registry: o
    });
    return g.value = typeof n.value == "function" ? n.value(b) : n.value ?? "", b.setAttributeNode(g), () => {
      b.getAttributeNodeNS(null, r) === g && b.removeAttributeNode(g);
    };
  } }, v = ft.get(t.trim());
  if (v && v !== f) throw new Error(`Mixin name already registered: ${t}`);
  if (!t.trim() || /\s/.test(t.trim())) throw new TypeError("Invalid mixin name.");
  return u || o.define(r, e), ae(t, f), c.set(r, {
    constructor: e,
    mixin: f
  }), f;
}
function Yo(t, ...e) {
  const n = [...new Set(e)];
  for (const c of n) if (!c || typeof c != "object" && typeof c != "function") throw new TypeError("mergeMixins expects mixin objects.");
  const r = /* @__PURE__ */ new WeakMap(), o = {
    connect(c) {
      const l = c.deref();
      if (!l) return;
      const u = {};
      r.set(l, u);
      for (const f of n) Wt(l, f, u);
      return () => {
        for (let f = n.length - 1; f >= 0; f--) lt(l, n[f], u);
        r.get(l) === u && r.delete(l);
      };
    },
    attributeChangedCallback(c, l, u, f, v) {
      const p = c.deref();
      if (p)
        for (const b of n) et(p, b, "attributeChangedCallback", u.attribute, f, v);
    },
    connectedMoveCallback(c, l, u) {
      const f = c.deref();
      if (f)
        for (const v of n) et(f, v, "connectedMoveCallback", u.attribute);
    }
  };
  return t && ae(t, o), o;
}
function Wr() {
  if (He()) {
    nt.runtime?.flush();
    for (const { observer: t } of E.watches.values()) Ln(t.takeRecords());
    Re();
    for (const t of F) for (const e of _(t)) gt(e);
    nt.runtime?.flush(), Re();
  }
}
async function Xo() {
  for (let t = 0; t < 4; t++)
    await Promise.resolve(), Wr();
}
He() && (zt(), ce(document));
var Go = (t, e, n) => {
  const r = n;
  Ht(n) && (n = n.value);
  const o = (n = Le(n)) != null && n !== !1;
  return Ot(r, () => {
    t instanceof HTMLInputElement ? t.hidden = !o : o ? t?.removeAttribute?.("data-hidden") : t?.setAttribute?.("data-hidden", "");
  }), t;
}, Jo = (t, e, n) => {
  if (!(e = typeof e == "string" ? hn(e) : e) || !t || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(e || "") != -1) return t;
  const r = n;
  return Ht(n) && (n = n.value), t?.[e] === n || t?.[e] !== n && Ot(r, () => {
    n != null ? t[e] = n : delete t[e];
  }), t;
}, Qo = (t, e, n) => {
  const r = t?.dataset;
  if (!e || !t || !r) return t;
  const o = n;
  return Ht(n) && (n = n?.value), e = hn(e), r?.[e] === (n = Le(n)) || (n == null || n === !1 ? delete r[e] : Ot(o, () => {
    typeof n != "object" && typeof n != "function" ? r[e] = String(n) : delete r[e];
  })), t;
}, Pr = (t, e) => t.style.removeProperty(fn(e)), ti = (t, e, n) => {
  const r = t?.style;
  return !e || typeof e != "string" || !t || !r || Ot(n, () => {
    zn(n) || Ht(n) || jn(n) ? Et(t, e, n) : n == null && Pr(t, e);
  }), t;
}, ei = (t, e, n) => {
  if (!e || !t) return t;
  const r = n;
  return Ht(n) && (n = n.value), e = fn(e), t?.getAttribute?.(e) === (n = Le(n)) || Ot(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? t?.setAttribute?.(e, String(n)) : t?.removeAttribute?.(e);
  }), t;
};
function ve(t, e) {
  const n = Math.min(t.x, e.x), r = Math.min(t.y, e.y), o = Math.max(t.x, e.x), c = Math.max(t.y, e.y);
  return {
    left: n,
    top: r,
    right: o,
    bottom: c,
    width: o - n,
    height: c - r
  };
}
var Kt = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, we = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, xe = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Or = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), ne = globalThis[Or] ??= /* @__PURE__ */ new WeakMap(), R = (t, e, n) => {
  const r = ne.get(t) ?? /* @__PURE__ */ new Map(), o = r.get(e) ?? [];
  o.push(n), r.set(e, o), ne.set(t, r);
}, De = (t, e) => {
  const n = ne.get(t), r = n?.get(e);
  if (r) {
    for (const o of r) try {
      o();
    } catch {
    }
    n.delete(e), n.size === 0 && ne.delete(t);
  }
}, st = (t, e) => {
  const n = globalThis.getComputedStyle?.(t)?.getPropertyValue?.(e)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, Wn = (t, e, n) => {
  const r = t.getAttribute(e)?.trim();
  if (!r) return n;
  const o = t.querySelector(r);
  return o instanceof HTMLElement ? o : n;
}, Hr = class extends ze {
  constructor() {
    super("ui-junction-select");
  }
  connect(t) {
    const e = t?.deref?.();
    if (!e) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:var(--z-max, 9999);box-sizing:border-box;border:1px dashed color-mix(in oklab, var(--color-primary, #5a7fff) 70%, transparent);background:color-mix(in oklab, var(--color-primary, #5a7fff) 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(e)?.position === "static" && (e.style.position = "relative"), e.appendChild(n);
    let o = !1, c = {
      x: 0,
      y: 0
    }, l = {
      x: 0,
      y: 0
    };
    const u = (y) => {
      const x = e.getBoundingClientRect();
      return {
        x: y.clientX - x.left,
        y: y.clientY - x.top
      };
    }, f = () => {
      const y = ve(c, l);
      if (y.width < 1 && y.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${y.left}px`, n.style.top = `${y.top}px`, n.style.width = `${y.width}px`, n.style.height = `${y.height}px`;
    }, v = (y) => {
      y.button === 0 && (y.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (y.target === e || e.contains(y.target)) && (o = !0, c = u(y), l = { ...c }, e.setPointerCapture(y.pointerId), e.dispatchEvent(new CustomEvent(Kt.start, {
        bubbles: !0,
        detail: {
          a: { ...c },
          b: { ...l },
          host: e
        }
      })), f()));
    }, p = (y) => {
      if (!o) return;
      l = u(y), f();
      const x = ve(c, l);
      e.dispatchEvent(new CustomEvent(Kt.move, {
        bubbles: !0,
        detail: {
          a: { ...c },
          b: { ...l },
          box: x,
          host: e
        }
      }));
    }, b = (y) => {
      if (!o) return;
      o = !1;
      try {
        e.releasePointerCapture(y.pointerId);
      } catch {
      }
      const x = ve(c, l);
      e.dispatchEvent(new CustomEvent(Kt.end, {
        bubbles: !0,
        detail: {
          a: { ...c },
          b: { ...l },
          box: x,
          host: e
        }
      }));
    }, g = (y) => {
      o && b(y);
    }, m = (y) => {
      if (o) {
        o = !1, n.style.display = "none";
        try {
          e.releasePointerCapture(y.pointerId);
        } catch {
        }
        e.dispatchEvent(new CustomEvent(Kt.cancel, {
          bubbles: !0,
          detail: { host: e }
        }));
      }
    };
    return R(e, "ui-junction-select", () => {
      n.remove();
    }), R(e, "ui-junction-select", S(e, "pointerdown", v)), R(e, "ui-junction-select", S(e, "pointermove", p)), R(e, "ui-junction-select", S(e, "pointerup", g)), R(e, "ui-junction-select", S(e, "pointercancel", m)), this;
  }
  disconnect(t) {
    const e = t?.deref?.();
    return e && De(e, "ui-junction-select"), this;
  }
}, Vr = class extends ze {
  constructor() {
    super("ui-junction-drag");
  }
  connect(t) {
    const e = t?.deref?.();
    if (!e) return this;
    Et(e, "--jx-drag-x", st(e, "--jx-drag-x")), Et(e, "--jx-drag-y", st(e, "--jx-drag-y"));
    const n = e.style.transform;
    (!e.style.transform || e.style.transform === "none") && (e.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = Wn(e, "data-junction-drag-handle", e);
    let o = !1, c = 0, l = 0, u = 0, f = 0;
    const v = (g) => {
      g.button === 0 && (g.target !== r && !r.contains(g.target) || (o = !0, c = g.clientX, l = g.clientY, u = st(e, "--jx-drag-x"), f = st(e, "--jx-drag-y"), r.setPointerCapture(g.pointerId), e.dispatchEvent(new CustomEvent(we.start, {
        bubbles: !0,
        detail: {
          host: e,
          clientX: g.clientX,
          clientY: g.clientY,
          baseX: u,
          baseY: f
        }
      }))));
    }, p = (g) => {
      if (!o) return;
      const m = g.clientX - c, y = g.clientY - l, x = u + m, C = f + y;
      Et(e, "--jx-drag-x", x), Et(e, "--jx-drag-y", C), e.dispatchEvent(new CustomEvent(we.move, {
        bubbles: !0,
        detail: {
          host: e,
          dx: m,
          dy: y,
          x,
          y: C
        }
      }));
    }, b = (g) => {
      if (o) {
        o = !1;
        try {
          r.releasePointerCapture(g.pointerId);
        } catch {
        }
        e.dispatchEvent(new CustomEvent(we.end, {
          bubbles: !0,
          detail: {
            host: e,
            x: st(e, "--jx-drag-x"),
            y: st(e, "--jx-drag-y")
          }
        }));
      }
    };
    return R(e, "ui-junction-drag", () => {
      e.style.transform = n;
    }), R(e, "ui-junction-drag", S(r, "pointerdown", v)), R(e, "ui-junction-drag", S(r, "pointermove", p)), R(e, "ui-junction-drag", S(r, "pointerup", b)), R(e, "ui-junction-drag", S(r, "pointercancel", b)), this;
  }
  disconnect(t) {
    const e = t?.deref?.();
    return e && De(e, "ui-junction-drag"), this;
  }
}, zr = class extends ze {
  constructor() {
    super("ui-junction-resize");
  }
  connect(t) {
    const e = t?.deref?.();
    if (!e) return this;
    const n = Wn(e, "data-junction-resize-handle", e);
    let r = !1, o = 0, c = 0, l = 0, u = 0;
    const f = Math.max(120, parseFloat(e.getAttribute("data-junction-resize-min-w") || "") || 120), v = Math.max(80, parseFloat(e.getAttribute("data-junction-resize-min-h") || "") || 80), p = (m) => {
      m.button === 0 && (m.target !== n && !n.contains(m.target) || (r = !0, o = m.clientX, c = m.clientY, l = e.offsetWidth, u = e.offsetHeight, n.setPointerCapture(m.pointerId), e.dispatchEvent(new CustomEvent(xe.start, {
        bubbles: !0,
        detail: {
          host: e,
          width: l,
          height: u
        }
      }))));
    }, b = (m) => {
      if (!r) return;
      const y = Math.max(f, l + (m.clientX - o)), x = Math.max(v, u + (m.clientY - c));
      e.style.width = `${y}px`, e.style.height = `${x}px`, e.dispatchEvent(new CustomEvent(xe.move, {
        bubbles: !0,
        detail: {
          host: e,
          width: y,
          height: x
        }
      }));
    }, g = (m) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(m.pointerId);
        } catch {
        }
        e.dispatchEvent(new CustomEvent(xe.end, {
          bubbles: !0,
          detail: {
            host: e,
            width: e.offsetWidth,
            height: e.offsetHeight
          }
        }));
      }
    };
    return R(e, "ui-junction-resize", S(n, "pointerdown", p)), R(e, "ui-junction-resize", S(n, "pointermove", b)), R(e, "ui-junction-resize", S(n, "pointerup", g)), R(e, "ui-junction-resize", S(n, "pointercancel", g)), this;
  }
  disconnect(t) {
    const e = t?.deref?.();
    return e && De(e, "ui-junction-resize"), this;
  }
};
new Hr();
new Vr();
new zr();
export {
  ze as DOMMixin,
  Vr as JunctionDragMixin,
  zr as JunctionResizeMixin,
  Hr as JunctionSelectMixin,
  $t as MATCH,
  ho as MOC,
  Ee as MOCElement,
  qr as RAFBehavior,
  ro as REGEX,
  Zr as ROOT,
  Po as WavyShapedCircle,
  Ir as __exportProperties,
  Qe as __registeredCssProperties,
  S as addEvent,
  ao as addEvents,
  co as addEventsList,
  ce as addRoot,
  Wo as animateHide,
  Lo as animateShow,
  zt as apply,
  Ne as availSize,
  wo as bbh,
  vo as bbw,
  yr as bindBehavior,
  Mr as bindMixins,
  xr as bindStore,
  Yt as borderBoxHeight,
  Ut as borderBoxWidth,
  Mn as boundBehaviors,
  Rt as boundMixinSet,
  Eo as cbh,
  xo as cbw,
  go as changeZoom,
  No as classes,
  fr as computeCaretPosition,
  To as computeCaretPositionFromClient,
  fo as containsOrSelf,
  Gt as contentBoxHeight,
  Xt as contentBoxWidth,
  Tr as createCustomAttribute,
  Zo as createCustomAttributeRegistry,
  oo as createElementVanilla,
  ln as createFixedOverlayViewport,
  Uo as customAttributeToMixin,
  Pr as deleteStyleProperty,
  Br as detectMobile,
  Gr as doBorderObserve,
  Xr as doContentObserve,
  er as ensureViewportInteractiveWidgetOverlay,
  Mo as ensureViewportTracking,
  Mt as ensureVirtualKeyboardOverlay,
  ko as fixOrientToScreen,
  yo as fixedClientZoom,
  Wr as flushMixins,
  En as getAvailSize,
  bo as getBoundingOrientRect,
  ur as getCorrectOrientation,
  Ar as getCustomAttributeBase,
  je as getCustomAttributes,
  Tn as getElementRelated,
  lo as getEventTarget,
  Un as getOffsetParent,
  $r as getOffsetParentChain,
  vr as getStoresOfElement,
  mo as getZoom,
  ei as handleAttribute,
  Qo as handleDataset,
  Go as handleHidden,
  Jo as handleProperty,
  ti as handleStyleChange,
  fe as hasParent,
  Qr as html,
  so as includeSelf,
  no as indexOf,
  Cn as initTextStyle,
  io as isElement,
  po as isInFocus,
  _r as isMobile,
  Fr as isNearlyIdentity,
  qo as isPolyfilled,
  kr as isSupported,
  An as isValidCustomAttributeName,
  eo as isValidParent,
  Yn as makeRAFCycle,
  Ao as measureInputInFocus,
  dr as measureText,
  Yo as mergeMixins,
  ne as mixinDisposers,
  Te as mixinElements,
  X as mixinNamespace,
  ft as mixinRegistry,
  Lr as mixinToCustomAttribute,
  $o as nameRegistryF,
  Tt as namedStoreMaps,
  Vo as observeAttribute,
  Nn as observeAttributeBySelector,
  Ho as observeBorderBox,
  gr as observeBySelector,
  Oo as observeContentBox,
  en as onBorderObserve,
  nn as onContentObserve,
  ht as orientOf,
  cr as orientationNumberMap,
  pn as passiveOpts,
  So as readFixedOverlayViewport,
  hr as readLauncherLayoutFromElement,
  Co as readVirtualKeyboardHeightPx,
  zo as reflectBehaviors,
  _o as reflectMixins,
  jo as reflectStores,
  Ko as registerCrossMixin,
  ae as registerMixin,
  rn as removeEvent,
  uo as removeEvents,
  Fo as removeRoot,
  Ro as resolveGridCellFromClientPoint,
  F as roots,
  Ur as setAttributes,
  Kr as setAttributesIfNull,
  to as setChecked,
  Yr as setIdleInterval,
  Xo as settleMixins,
  Xn as throttleMap,
  Io as unbindMixins,
  Se as unfixedClientZoom,
  Bo as unregisterMixin,
  gt as updateAllMixins,
  Cr as updateMixinAttributes,
  Nr as updateMixinAttributesAll,
  Do as updateMixinAttributesAllInRoots,
  oe as updateVP,
  Jr as url,
  Sn as whenAnyScreenChanges,
  Qn as zoomOf,
  Jn as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwgfSBmcm9tIFwiQGZlc3QtbGliL2NvcmVcIjtcbmltcG9ydCB7IGFwcGVhciwgZGVjb3JIaWRlLCBkZWNvclNob3csIGRpc2FwcGVhciwgb2JzZXJ2ZVN0eWxlVHJlZSwgc2V0U3R5bGVQcm9wZXJ0eSB9IGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCI7XG5cbmV4cG9ydCAqIGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCJcblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9Qcm9wZXJ0aWVzLnRzXG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzID0gZ2xvYmFsVGhpc1tfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtZnJlcVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1waXhlbC1yYXRpb1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXlcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXhcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXlcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fVxuXS5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIENTUz8ucmVnaXN0ZXJQcm9wZXJ0eSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0Y29uc3QgbmFtZSA9IFN0cmluZyhvcHRpb25zPy5uYW1lIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFuYW1lIHx8IF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuaGFzKG5hbWUpKSByZXR1cm47XG5cdHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkob3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAoIShTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiKSkgY29uc29sZS53YXJuKGUpO1xuXHR9IGZpbmFsbHkge1xuXHRcdF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuYWRkKG5hbWUpO1xuXHR9XG59KTtcbnZhciBfX2V4cG9ydFByb3BlcnRpZXMgPSAoKSA9PiB7fTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0RldGVjdC50c1xudmFyIGlzTW9iaWxlID0gKCkgPT4ge1xuXHRsZXQgY2hlY2sgPSBuYXZpZ2F0b3I/LnVzZXJBZ2VudERhdGE/Lm1vYmlsZSB8fCBmYWxzZTtcblx0KChhKSA9PiB7XG5cdFx0aWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSBjaGVjayA9IHRydWU7XG5cdH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCBnbG9iYWxUaGlzLm9wZXJhKTtcblx0cmV0dXJuIGNoZWNrO1xufTtcbnZhciBkZXRlY3RNb2JpbGUgPSAoKSA9PiB7XG5cdHJldHVybiBbXG5cdFx0L0FuZHJvaWQvaSxcblx0XHQvd2ViT1MvaSxcblx0XHQvaVBob25lL2ksXG5cdFx0L2lQYWQvaSxcblx0XHQvaVBvZC9pLFxuXHRcdC9CbGFja0JlcnJ5L2ksXG5cdFx0L1dpbmRvd3MgUGhvbmUvaVxuXHRdLnNvbWUobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaC5iaW5kKG5hdmlnYXRvci51c2VyQWdlbnQpKSAmJiAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiBnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1V0aWxzLnRzXG52YXIgY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2sgPSAoKSA9PiAoe1xuXHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxufSk7XG52YXIgcnVuV2hlbklkbGUkMSA9IChjYiwgdGltZW91dCA9IDFlMykgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrKCkpLCAwKTtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIGVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBlbGVtZW50Py5ob3N0O1xufTtcbnZhciBnZXRPZmZzZXRQYXJlbnRDaGFpbiA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IHBhcmVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IGdldE9mZnNldFBhcmVudChjdXJyZW50KTtcblx0XHRpZiAocGFyZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxIdG1sRWxlbWVudCkgYnJlYWs7XG5cdFx0aWYgKGN1cnJlbnQgPSBwYXJlbnQpIHBhcmVudHMucHVzaChjdXJyZW50KTtcblx0fVxuXHRyZXR1cm4gcGFyZW50cztcbn07XG52YXIgaXNOZWFybHlJZGVudGl0eSA9IChtYXRyaXgsIGVwc2lsb24gPSAxZS02KSA9PiB7XG5cdHJldHVybiBNYXRoLmFicyhtYXRyaXguYSAtIDEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYikgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5jKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmQgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmUpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguZikgPCBlcHNpbG9uO1xufTtcbnZhciBtYWtlUkFGQ3ljbGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRyb2wgPSB7XG5cdFx0Y2FuY2VsZWQ6IGZhbHNlLFxuXHRcdHJBRnM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0bGFzdDogbnVsbCxcblx0XHRjYW5jZWwoKSB7XG5cdFx0XHR0aGlzLmNhbmNlbGVkID0gdHJ1ZTtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdHNoZWR1bGUoY2IpIHtcblx0XHRcdHRoaXMuckFGcy5hZGQoY2IpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHR9O1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHdoaWxlICghY29udHJvbD8uY2FuY2VsZWQpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKChjb250cm9sPy5yQUZzPy52YWx1ZXM/LigpID8/IFtdKT8ubWFwPy4oKHJBRikgPT4gUHJvbWlzZS50cnkockFGKT8uY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSkpKTtcblx0XHRcdGNvbnRyb2wuckFGcz8uY2xlYXI/LigpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRjb250cm9sLmxhc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmVzLCAxNik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pKCk7XG5cdHJldHVybiBjb250cm9sO1xufTtcbnZhciBSQUZCZWhhdmlvciA9IChzaGVkID0gbWFrZVJBRkN5Y2xlKCkpID0+IHtcblx0cmV0dXJuIChjYikgPT4gc2hlZC5zaGVkdWxlKGNiKTtcbn07XG52YXIgUk9PVCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgc2V0QXR0cmlidXRlc0lmTnVsbCA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdGlmICghYXR0cnMgfHwgdHlwZW9mIGF0dHJzICE9IFwib2JqZWN0XCIgfHwgIWVsZW1lbnQpIHJldHVybjtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRjb25zdCBvbGQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBpZiAodmFsdWUgIT0gb2xkKSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBvbGQgPT0gXCJcIiA/IHZhbHVlID8/IG9sZCA6IG9sZCA/PyB2YWx1ZSk7XG5cdH0pO1xufTtcbnZhciBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJzID0ge30pID0+IHtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA/PyBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKSk7XG5cdH0pO1xufTtcbnZhciB0aHJvdHRsZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgc2V0SWRsZUludGVydmFsID0gKGNiLCB0aW1lb3V0ID0gMWUzLCAuLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHN0YXR1cyA9IHtcblx0XHRydW5uaW5nOiB0cnVlLFxuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0c3RhdHVzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cdHJ1bldoZW5JZGxlJDEoYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghY2IgfHwgdHlwZW9mIGNiICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRcdHdoaWxlIChzdGF0dXMucnVubmluZykge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoW1Byb21pc2UudHJ5KGNiLCAuLi5hcmdzKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSkuY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFueShbbmV3IFByb21pc2UoKHIpID0+IHJ1bldoZW5JZGxlJDEociwgdGltZW91dCkpLCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCB0aW1lb3V0KSldKTtcblx0XHR9XG5cdFx0c3RhdHVzLmNhbmNlbCA9ICgpID0+IHt9O1xuXHR9LCB0aW1lb3V0KTtcblx0cmV0dXJuIHN0YXR1cz8uY2FuY2VsO1xufTtcbmlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dGhyb3R0bGVNYXAuZm9yRWFjaCgoY2IpID0+IGNiPy4oKSk7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyKSk7XG5cdH1cbn0pO1xudmFyIGJvcmRlckJveFdpZHRoID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtd2lkdGhcIik7XG52YXIgYm9yZGVyQm94SGVpZ2h0ID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtaGVpZ2h0XCIpO1xudmFyIGNvbnRlbnRCb3hXaWR0aCA9IFN5bWJvbChcIkBjb250ZW50LWJveC13aWR0aFwiKTtcbnZhciBjb250ZW50Qm94SGVpZ2h0ID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LWhlaWdodFwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZG9Db250ZW50T2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50LmNsaWVudFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50LmNsaWVudEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQ29udGVudE9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxufTtcbnZhciBkb0JvcmRlck9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5vZmZzZXRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Cb3JkZXJPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxufTtcbnZhciB1cmwgPSAodHlwZSwgLi4uc291cmNlKSA9PiB7XG5cdHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKHNvdXJjZSwgeyB0eXBlIH0pKTtcbn07XG52YXIgaHRtbCA9IChzb3VyY2UsIHR5cGUgPSBcInRleHQvaHRtbFwiKSA9PiB7XG5cdGNvbnN0IHBhcnNlZCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc291cmNlLCB0eXBlKTtcblx0cmV0dXJuIHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikgPz8gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCIqXCIpO1xufTtcbnZhciBzZXRDaGVja2VkID0gKGlucHV0LCB2YWx1ZSwgZXYpID0+IHtcblx0aWYgKHZhbHVlICE9IG51bGwgJiYgaW5wdXQuY2hlY2tlZCAhPSB2YWx1ZSkge1xuXHRcdGlmIChpbnB1dD8uW1widHlwZVwiXSA9PSBcImNoZWNrYm94XCIgfHwgaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJyYWRpb1wiICYmICFpbnB1dD8uY2hlY2tlZCkge1xuXHRcdFx0aW5wdXQ/LmNsaWNrPy4oKTtcblx0XHRcdGV2Py5wcmV2ZW50RGVmYXVsdD8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlucHV0LmNoZWNrZWQgPSAhIXZhbHVlO1xuXHRcdFx0aW5wdXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGlzVmFsaWRQYXJlbnQgPSAocGFyZW50KSA9PiB7XG5cdHJldHVybiBwYXJlbnQgIT0gbnVsbCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgSFRNTEJvZHlFbGVtZW50KSA/IHBhcmVudCA6IG51bGw7XG59O1xudmFyIGluZGV4T2YgPSAoZWxlbWVudCwgbm9kZSkgPT4ge1xuXHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IG5vZGUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50Py5jaGlsZE5vZGVzID8/IFtdKT8uaW5kZXhPZj8uKG5vZGUpID8/IC0xO1xufTtcbnZhciBNQVRDSCA9IFwiKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKVwiO1xudmFyIFJFR0VYID0gXCJeKD86XCIgKyBNQVRDSCArIFwiKXxeI1wiICsgTUFUQ0ggKyBcInxeXFxcXC5cIiArIE1BVENIICsgXCJ8XlxcXFxbXCIgKyBNQVRDSCArIFwiKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiO1xudmFyIGNyZWF0ZUVsZW1lbnRWYW5pbGxhID0gKHNlbGVjdG9yKSA9PiB7XG5cdGlmIChzZWxlY3RvciA9PSBcIjpmcmFnbWVudDpcIikgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0Y29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KTtcblx0Zm9yICh2YXIgbm9kZSA9IGNyZWF0ZShcImRpdlwiKSwgbWF0Y2gsIGNsYXNzTmFtZSA9IFwiXCI7IHNlbGVjdG9yICYmIChtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCIpKTspIHtcblx0XHRpZiAobWF0Y2hbMV0pIG5vZGUgPSBjcmVhdGUobWF0Y2hbMV0pO1xuXHRcdGlmIChtYXRjaFsyXSkgbm9kZS5pZCA9IG1hdGNoWzJdO1xuXHRcdGlmIChtYXRjaFszXSkgY2xhc3NOYW1lICs9IFwiIFwiICsgbWF0Y2hbM107XG5cdFx0aWYgKG1hdGNoWzRdKSBub2RlLnNldEF0dHJpYnV0ZShtYXRjaFs0XSwgbWF0Y2hbN10gfHwgXCJcIik7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuXHR9XG5cdGlmIChjbGFzc05hbWUpIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNsaWNlKDEpO1xuXHRyZXR1cm4gbm9kZTtcbn07XG52YXIgaXNFbGVtZW50ID0gKGVsKSA9PiB7XG5cdHJldHVybiBlbCAhPSBudWxsICYmIChlbCBpbnN0YW5jZW9mIE5vZGUgfHwgZWwgaW5zdGFuY2VvZiBUZXh0IHx8IGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIENvbW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gZWwgOiBudWxsO1xufTtcbnZhciBpbmNsdWRlU2VsZiA9ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB7XG5cdGNvbnN0IHNlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiA/IHNlbGVjdG9yLnRyaW0oKSA6IFwiXCI7XG5cdGlmICghc2VsIHx8ICF0YXJnZXQpIHJldHVybiB0YXJnZXQgPz8gbnVsbDtcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3Ioc2VsKSA/PyAodGFyZ2V0Lm1hdGNoZXMoc2VsKSA/IHRhcmdldCA6IG51bGwpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBoYXNQYXJlbnQgPSAoY3VycmVudCwgcGFyZW50KSA9PiB7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0aWYgKCEoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICgoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSA9PT0gKHBhcmVudD8uZWxlbWVudCA/PyBwYXJlbnQpKSByZXR1cm4gdHJ1ZTtcblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50ID8/IChjdXJyZW50LnBhcmVudE5vZGUgPT0gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pID8gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0IDogY3VycmVudD8ucGFyZW50Tm9kZSk7XG5cdH1cbn07XG52YXIgcGFzc2l2ZU9wdHMgPSB7fTtcbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG5cdGNvbnN0IHdyID0gdHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQ/LmRlcmVmID8gbmV3IFdlYWtSZWYodGFyZ2V0KSA6IHRhcmdldDtcblx0cmV0dXJuICgpID0+IHdyPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG5mdW5jdGlvbiByZW1vdmVFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxudmFyIGFkZEV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gYWRkRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogYWRkRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgYWRkRXZlbnRzTGlzdCA9IChlbCwgZXZlbnRzKSA9PiB7XG5cdGlmIChldmVudHMpIHtcblx0XHRsZXQgZW50cmllcyA9IGV2ZW50cztcblx0XHRpZiAoZXZlbnRzIGluc3RhbmNlb2YgTWFwKSBlbnRyaWVzID0gWy4uLmV2ZW50cy5lbnRyaWVzKCldO1xuXHRcdGVsc2UgZW50cmllcyA9IFsuLi5PYmplY3QuZW50cmllcyhldmVudHMpXTtcblx0XHRyZXR1cm4gZW50cmllcy5tYXAoKFtuYW1lLCBsaXN0XSkgPT4gKChpc0FycmF5T3JJdGVyYWJsZShsaXN0KSA/IFsuLi5saXN0XSA6IGxpc3QpID8/IFtdKT8ubWFwPy4oKGNicykgPT4ge1xuXHRcdFx0cmV0dXJuIGFkZEV2ZW50KGVsLCBuYW1lLCBjYnMpO1xuXHRcdH0pKTtcblx0fVxufTtcbnZhciByZW1vdmVFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGdldEV2ZW50VGFyZ2V0ID0gKGV2KSA9PiB7XG5cdGlmICghZXYpIHJldHVybiBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBub2RlO1xuXHR9XG5cdGNvbnN0IHRhcmdldCA9IGV2Py50YXJnZXQ7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gdGFyZ2V0O1xuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgY29udGFpbnNPclNlbGYgPSAoYSwgYiwgZXYpID0+IHtcblx0aWYgKGIgPT0gbnVsbCB8fCAhKGIgaW5zdGFuY2VvZiBOb2RlKSAmJiBiPy5lbGVtZW50ID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gYiB8fCAoYT8uZWxlbWVudCA/PyBhKSA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRjb25zdCBhRWwgPSBhPy5lbGVtZW50ID8/IGE7XG5cdFx0Y29uc3QgYkVsID0gYj8uZWxlbWVudCA/PyBiO1xuXHRcdGlmIChwYXRoLmluY2x1ZGVzKGFFbCkgJiYgcGF0aC5pbmNsdWRlcyhiRWwpKSB7XG5cdFx0XHRjb25zdCBhSW5kZXggPSBwYXRoLmluZGV4T2YoYUVsKTtcblx0XHRcdGNvbnN0IGJJbmRleCA9IHBhdGguaW5kZXhPZihiRWwpO1xuXHRcdFx0aWYgKGJJbmRleCA+PSAwICYmIGFJbmRleCA+PSAwICYmIGJJbmRleCA8IGFJbmRleCkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChhPy5jb250YWlucz8uKGI/LmVsZW1lbnQgPz8gYikgfHwgYT8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgTU9DRWxlbWVudCA9IChlbGVtZW50LCBzZWxlY3RvciwgZXYpID0+IHtcblx0Y29uc3Qgc2VsID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IudHJpbSgpIDogXCJcIjtcblx0aWYgKCFzZWwpIHJldHVybiBlbGVtZW50ID8/IG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgdHJ5IHtcblx0XHRcdGlmIChub2RlLm1hdGNoZXM/LihzZWwpKSByZXR1cm4gbm9kZTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblx0bGV0IHNlbGYgPSBudWxsO1xuXHRsZXQgaG9zdE1hdGNoZWQgPSBudWxsO1xuXHRsZXQgY2xvc2VzdCA9IG51bGw7XG5cdHRyeSB7XG5cdFx0c2VsZiA9IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWwpID8gZWxlbWVudCA6IG51bGw7XG5cdFx0Y29uc3QgaG9zdCA9IChlbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID8/IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkpPy5ob3N0O1xuXHRcdGhvc3RNYXRjaGVkID0gaG9zdD8ubWF0Y2hlcz8uKHNlbCkgPyBob3N0IDogbnVsbDtcblx0XHRjbG9zZXN0ID0gZWxlbWVudD8uY2xvc2VzdD8uKHNlbCkgPz8gc2VsZj8uY2xvc2VzdD8uKHNlbCkgPz8gaG9zdE1hdGNoZWQ/LmNsb3Nlc3Q/LihzZWwpID8/IG51bGw7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIHNlbGYgPz8gY2xvc2VzdCA/PyBob3N0TWF0Y2hlZDtcbn07XG52YXIgTU9DID0gKGVsZW1lbnQsIHNlbGVjdG9yKSA9PiB7XG5cdHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3IpO1xufTtcbnZhciBpc0luRm9jdXMgPSAoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQsIGRpciA9IFwicGFyZW50XCIpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiAhZWxlbWVudC5jaGVja1Zpc2liaWxpdHkoe1xuXHRcdGNoZWNrT3BhY2l0eTogdHJ1ZSxcblx0XHRjaGVja1Zpc2liaWxpdHlDU1M6IHRydWVcblx0fSkpIHJldHVybiBmYWxzZTtcblx0aWYgKCFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbCAmJiBlbGVtZW50LnN0eWxlLnBvc2l0aW9uICE9PSBcImZpeGVkXCIpIHJldHVybiBmYWxzZTtcblx0bGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdHdoaWxlIChhY3RpdmUgJiYgYWN0aXZlLnNoYWRvd1Jvb3QgJiYgYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudCkgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblx0Y29uc3QgaXNGb2N1c2VkID0gYWN0aXZlID09PSBlbGVtZW50IHx8IGhhc1BhcmVudChhY3RpdmUsIGVsZW1lbnQpO1xuXHRjb25zdCBpc0hvdmVyZWQgPSBlbGVtZW50Lm1hdGNoZXMoXCI6aG92ZXJcIik7XG5cdGlmICghaXNGb2N1c2VkICYmICFpc0hvdmVyZWQgJiYgIXNlbGVjdG9yT3JFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChzZWxlY3Rvck9yRWxlbWVudCkge1xuXHRcdGlmICh0eXBlb2Ygc2VsZWN0b3JPckVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGlzRm9jdXNlZCA/IGFjdGl2ZSA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIjpob3ZlclwiKSB8fCBlbGVtZW50O1xuXHRcdFx0XHRjb25zdCBhbHRDbmQgPSAhIU1PQ0VsZW1lbnQodGFyZ2V0LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oc2VsZWN0b3JPckVsZW1lbnQpICE9IG51bGwgfHwgZWxlbWVudD8ubWF0Y2hlcz8uKHNlbGVjdG9yT3JFbGVtZW50KSB8fCBhbHRDbmQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzZWxlY3Rvck9yRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRpZiAoZGlyID09PSBcInBhcmVudFwiKSByZXR1cm4gaGFzUGFyZW50KGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50KSB8fCBmYWxzZTtcblx0XHRcdGVsc2UgcmV0dXJuIGhhc1BhcmVudChzZWxlY3Rvck9yRWxlbWVudCwgZWxlbWVudCkgfHwgZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1pvb20udHNcbnZhciBnZXRab29tID0gKCkgPT4ge1xuXHRpZiAoXCJjdXJyZW50Q1NTWm9vbVwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHRyZXR1cm4gcGFyc2VGbG9hdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2NhbGluZ1wiKSB8fCBcIjFcIikgfHwgMTtcbn07XG52YXIgem9vbVZhbHVlc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAem9vbVZhbHVlc1wiKTtcbnZhciB6b29tVmFsdWVzID0gZ2xvYmFsVGhpc1t6b29tVmFsdWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgem9vbU9mID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHpvb21WYWx1ZXMuZ2V0T3JJbnNlcnRDb21wdXRlZChlbGVtZW50LCAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gKGVsZW1lbnQ/Lm1hdGNoZXM/LihcIi51aS1vcmllbnRib3hcIikgPyBlbGVtZW50IDogbnVsbCkgfHwgZWxlbWVudD8uY2xvc2VzdD8uKFwiLnVpLW9yaWVudGJveFwiKSB8fCBkb2N1bWVudC5ib2R5O1xuXHRcdGlmIChjb250YWluZXI/Lnpvb20pIHJldHVybiBjb250YWluZXI/Lnpvb20gfHwgMTtcblx0XHRpZiAoZWxlbWVudD8uY3VycmVudENTU1pvb20pIHJldHVybiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHR9KTtcbn07XG52YXIgY2hhbmdlWm9vbSA9IChzY2FsZSA9IDEpID0+IHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zY2FsaW5nXCIsIHNjYWxlKTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic2NhbGluZ1wiLCB7XG5cdFx0ZGV0YWlsOiB7IHpvb206IHNjYWxlIH0sXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdH0pKTtcblx0cmV0dXJuIHNjYWxlO1xufTtcbnZhciBmaXhlZENsaWVudFpvb20gPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tICE9IG51bGwgPyAxIDogem9vbU9mKGVsZW1lbnQpKSB8fCAxO1xufTtcbnZhciB1bmZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gPT0gbnVsbCA/IDEgOiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgfHwgMTtcbn07XG52YXIgb3JpZW50T2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiW29yaWVudF0sIFtkYXRhLW1peGluPVxcXCJ1aS1vcmllbnRib3hcXFwiXVwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpIHx8IGVsZW1lbnQ7XG5cdGlmIChjb250YWluZXI/Lmhhc0F0dHJpYnV0ZT8uKFwib3JpZW50XCIpKSByZXR1cm4gcGFyc2VJbnQoY29udGFpbmVyPy5nZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiKSB8fCBcIjBcIikgfHwgMDtcblx0aWYgKGNvbnRhaW5lcj8ub3JpZW50ICE9IG51bGwgJiYgTnVtYmVyLmlzRmluaXRlKE51bWJlcihjb250YWluZXIub3JpZW50KSkpIHJldHVybiBOdW1iZXIoY29udGFpbmVyLm9yaWVudCkgfHwgMDtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBjb250YWluZXI/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCItLW9yaWVudFwiKSB8fCAodHlwZW9mIGdldENvbXB1dGVkU3R5bGUgPT09IFwiZnVuY3Rpb25cIiAmJiBjb250YWluZXIgPyBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZShcIi0tb3JpZW50XCIpIDogXCJcIikgfHwgXCJcIjtcblx0XHRjb25zdCBuID0gcGFyc2VJbnQoU3RyaW5nKHJhdykudHJpbSgpLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG47XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIDA7XG59O1xudmFyIGdldEJvdW5kaW5nT3JpZW50UmVjdCA9IChlbGVtZW50LCBvcmllbnQgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHpvb20gPSB1bmZpeGVkQ2xpZW50Wm9vbShlbGVtZW50KSB8fCAxO1xuXHRjb25zdCBib3ggPSBlbGVtZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRjb25zdCBuYnggPSB7XG5cdFx0bGVmdDogYm94Py5sZWZ0IC8gem9vbSxcblx0XHRyaWdodDogYm94Py5yaWdodCAvIHpvb20sXG5cdFx0dG9wOiBib3g/LnRvcCAvIHpvb20sXG5cdFx0Ym90dG9tOiBib3g/LmJvdHRvbSAvIHpvb20sXG5cdFx0d2lkdGg6IGJveD8ud2lkdGggLyB6b29tLFxuXHRcdGhlaWdodDogYm94Py5oZWlnaHQgLyB6b29tXG5cdH07XG5cdGNvbnN0IG9yX2kgPSBvcmllbnQgPz8gKG9yaWVudE9mKGVsZW1lbnQpIHx8IDApO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBzaXplID0gWygodnY/LndpZHRoID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50V2lkdGggPz8gd2luZG93LmlubmVyV2lkdGgpIHx8IDEpIC8gem9vbSwgKCh2dj8uaGVpZ2h0ID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50SGVpZ2h0ID8/IHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMSkgLyB6b29tXTtcblx0Y29uc3QgW2xlZnRfLCB0b3BfXSA9IGN2dF9jc190b19vcyhbbmJ4LmxlZnQsIG5ieC50b3BdLCBzaXplLCBvcl9pKTtcblx0Y29uc3QgW3JpZ2h0XywgYm90dG9tX10gPSBjdnRfY3NfdG9fb3MoW25ieC5yaWdodCwgbmJ4LmJvdHRvbV0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbbGVmdCwgcmlnaHRdID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMyA/IFtsZWZ0XywgcmlnaHRfXSA6IFtyaWdodF8sIGxlZnRfXTtcblx0Y29uc3QgW3RvcCwgYm90dG9tXSA9IG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyBbdG9wXywgYm90dG9tX10gOiBbYm90dG9tXywgdG9wX107XG5cdGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IG9yX2kgJSAyID8gW25ieC5oZWlnaHQsIG5ieC53aWR0aF0gOiBbbmJ4LndpZHRoLCBuYnguaGVpZ2h0XTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGgsXG5cdFx0aGVpZ2h0XG5cdH07XG59O1xudmFyIGJidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodCA6IGVsW2JvcmRlckJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgYmJoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodDtcbnZhciBjYncgPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgY2JoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGggOiBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvVmlld3BvcnQudHNcbnZhciBydW5XaGVuSWRsZSA9IChjYiwgdGltZW91dCA9IDEwMCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKHtcblx0XHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0XHR0aW1lUmVtYWluaW5nOiAoKSA9PiAwXG5cdH0pLCAwKTtcbn07XG52YXIgS0VZQk9BUkRfT1ZFUkxBWV9QWCA9IDgwO1xudmFyIGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gMDtcbnZhciBjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gZmFsc2U7XG52YXIgd2luZG93S2V5Ym9hcmRCb3VuZCA9IGZhbHNlO1xudmFyIHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkID0gZmFsc2U7XG52YXIgbmF0aXZlRGlzcGxheSA9IG51bGw7XG52YXIgbmF0aXZlRGlzcGxheUJvdW5kID0gZmFsc2U7XG52YXIgbmF0aXZlRGlzcGxheVJlZnJlc2hRdWV1ZWQgPSBmYWxzZTtcbnZhciBpc05hdGl2ZUNhcGFjaXRvckhvc3QgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC5jd3NwTmF0aXZlU2hlbGwgPT09IFwiY2FwYWNpdG9yXCIpIHJldHVybiB0cnVlO1xuXHRcdGNvbnN0IGNhcCA9IGdsb2JhbFRoaXMuQ2FwYWNpdG9yO1xuXHRcdHJldHVybiB0eXBlb2YgY2FwPy5pc05hdGl2ZVBsYXRmb3JtID09PSBcImZ1bmN0aW9uXCIgJiYgQm9vbGVhbihjYXAuaXNOYXRpdmVQbGF0Zm9ybSgpKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHJlYWRDd3NCcmlkZ2UgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMuQ2FwYWNpdG9yPy5QbHVnaW5zPy5Dd3NCcmlkZ2UgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgcGFyc2VOYXRpdmVEaXNwbGF5ID0gKGluZm8pID0+IHtcblx0aWYgKCFpbmZvKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgd2luZG93VyA9IE51bWJlcihpbmZvLndpbmRvd1dpZHRoQ3NzKSB8fCAwO1xuXHRjb25zdCB3aW5kb3dIID0gTnVtYmVyKGluZm8ud2luZG93SGVpZ2h0Q3NzKSB8fCAwO1xuXHRjb25zdCBkaXNwbGF5VyA9IE51bWJlcihpbmZvLmRpc3BsYXlXaWR0aENzcykgfHwgd2luZG93Vztcblx0Y29uc3QgZGlzcGxheUggPSBOdW1iZXIoaW5mby5kaXNwbGF5SGVpZ2h0Q3NzKSB8fCB3aW5kb3dIO1xuXHRjb25zdCB3ID0gd2luZG93VyB8fCBkaXNwbGF5Vztcblx0Y29uc3QgaCA9IHdpbmRvd0ggfHwgZGlzcGxheUg7XG5cdGlmICh3IDw9IDAgfHwgaCA8PSAwKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgZGVuc2l0eSA9IE51bWJlcihpbmZvLmRlbnNpdHkpIHx8IDA7XG5cdHJldHVybiB7XG5cdFx0d2luZG93V2lkdGhDc3M6IHcsXG5cdFx0d2luZG93SGVpZ2h0Q3NzOiBoLFxuXHRcdGRpc3BsYXlXaWR0aENzczogZGlzcGxheVcgfHwgdyxcblx0XHRkaXNwbGF5SGVpZ2h0Q3NzOiBkaXNwbGF5SCB8fCBoLFxuXHRcdGRlbnNpdHksXG5cdFx0ZGVuc2l0eURwaTogTnVtYmVyKGluZm8uZGVuc2l0eURwaSkgfHwgMCxcblx0XHR4ZHBpOiBOdW1iZXIoaW5mby54ZHBpKSB8fCAwLFxuXHRcdHlkcGk6IE51bWJlcihpbmZvLnlkcGkpIHx8IDAsXG5cdFx0cHBpOiBOdW1iZXIoaW5mby5wcGkpIHx8IDAsXG5cdFx0c2NhbGVkRGVuc2l0eTogTnVtYmVyKGluZm8uc2NhbGVkRGVuc2l0eSkgfHwgZGVuc2l0eSxcblx0XHRmb250U2NhbGU6IE51bWJlcihpbmZvLmZvbnRTY2FsZSkgfHwgKGRlbnNpdHkgPiAwID8gKE51bWJlcihpbmZvLnNjYWxlZERlbnNpdHkpIHx8IGRlbnNpdHkpIC8gZGVuc2l0eSA6IDEpXG5cdH07XG59O1xudmFyIGFwcGx5TmF0aXZlRGlzcGxheSA9IChpbmZvKSA9PiB7XG5cdGNvbnN0IG5leHQgPSBwYXJzZU5hdGl2ZURpc3BsYXkoaW5mbyk7XG5cdGlmICghbmV4dCkgcmV0dXJuO1xuXHRjb25zdCBwcmV2ID0gbmF0aXZlRGlzcGxheTtcblx0Y29uc3Qgc2FtZSA9IEJvb2xlYW4ocHJldiAmJiBwcmV2LndpbmRvd1dpZHRoQ3NzID09PSBuZXh0LndpbmRvd1dpZHRoQ3NzICYmIHByZXYud2luZG93SGVpZ2h0Q3NzID09PSBuZXh0LndpbmRvd0hlaWdodENzcyAmJiBwcmV2LmRpc3BsYXlXaWR0aENzcyA9PT0gbmV4dC5kaXNwbGF5V2lkdGhDc3MgJiYgcHJldi5kaXNwbGF5SGVpZ2h0Q3NzID09PSBuZXh0LmRpc3BsYXlIZWlnaHRDc3MgJiYgcHJldi5kZW5zaXR5ID09PSBuZXh0LmRlbnNpdHkgJiYgcHJldi5kZW5zaXR5RHBpID09PSBuZXh0LmRlbnNpdHlEcGkgJiYgcHJldi5wcGkgPT09IG5leHQucHBpICYmIHByZXYuZm9udFNjYWxlID09PSBuZXh0LmZvbnRTY2FsZSk7XG5cdG5hdGl2ZURpc3BsYXkgPSBuZXh0O1xuXHRpZiAoIXNhbWUpIHVwZGF0ZVZQKCk7XG59O1xudmFyIHJlZnJlc2hOYXRpdmVEaXNwbGF5ID0gKCkgPT4ge1xuXHRpZiAoIWlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpKSByZXR1cm47XG5cdGNvbnN0IEJyaWRnZSA9IHJlYWRDd3NCcmlkZ2UoKTtcblx0aWYgKCFCcmlkZ2UpIHJldHVybjtcblx0KHR5cGVvZiBCcmlkZ2UuZ2V0RGlzcGxheU1ldHJpY3MgPT09IFwiZnVuY3Rpb25cIiA/IEJyaWRnZS5nZXREaXNwbGF5TWV0cmljcygpIDogQnJpZGdlLmdldFNoZWxsSW5mbz8uKCkpPy50aGVuKChpbmZvKSA9PiBhcHBseU5hdGl2ZURpc3BsYXkoaW5mbykpLmNhdGNoKCgpID0+IHt9KTtcbn07XG52YXIgcXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCA9ICgpID0+IHtcblx0aWYgKCFpc05hdGl2ZUNhcGFjaXRvckhvc3QoKSB8fCBuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCkgcmV0dXJuO1xuXHRuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCA9IHRydWU7XG5cdHJ1bldoZW5JZGxlKCgpID0+IHtcblx0XHRuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCA9IGZhbHNlO1xuXHRcdGJpbmROYXRpdmVEaXNwbGF5KCk7XG5cdFx0cmVmcmVzaE5hdGl2ZURpc3BsYXkoKTtcblx0fSwgODApO1xufTtcbnZhciBiaW5kTmF0aXZlRGlzcGxheSA9ICgpID0+IHtcblx0aWYgKG5hdGl2ZURpc3BsYXlCb3VuZCB8fCB0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRpZiAoIWlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpKSByZXR1cm47XG5cdGlmICghcmVhZEN3c0JyaWRnZSgpKSByZXR1cm47XG5cdG5hdGl2ZURpc3BsYXlCb3VuZCA9IHRydWU7XG5cdHRyeSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gZ2xvYmFsVGhpcy53aW5kb3c/Ll9fQ1dTX1NIRUxMX0lORk9fXztcblx0XHRpZiAoY2FjaGVkKSBhcHBseU5hdGl2ZURpc3BsYXkoY2FjaGVkKTtcblx0fSBjYXRjaCB7fVxuXHRyZWZyZXNoTmF0aXZlRGlzcGxheSgpO1xufTtcbnZhciB2aXJ0dWFsS2V5Ym9hcmQgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMubmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgSU5URVJBQ1RJVkVfV0lER0VUID0gXCJpbnRlcmFjdGl2ZS13aWRnZXQ9b3ZlcmxheXMtY29udGVudFwiO1xudmFyIFZJRVdQT1JUX0ZJVCA9IFwidmlld3BvcnQtZml0PWNvdmVyXCI7XG52YXIgZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRpZiAoIWhlYWQpIHJldHVybjtcblx0bGV0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPVxcXCJ2aWV3cG9ydFxcXCJdXCIpO1xuXHRpZiAoIW1ldGEpIHtcblx0XHRtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XG5cdFx0bWV0YS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidmlld3BvcnRcIik7XG5cdFx0bWV0YS5jb250ZW50ID0gYHdpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsICR7VklFV1BPUlRfRklUfSwgJHtJTlRFUkFDVElWRV9XSURHRVR9YDtcblx0XHRoZWFkLm1vdmVCZWZvcmUobWV0YSwgaGVhZC5maXJzdENoaWxkKTtcblx0XHRyZXR1cm47XG5cdH1cblx0bGV0IGNvbnRlbnQgPSBTdHJpbmcobWV0YS5jb250ZW50IHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCEvaW50ZXJhY3RpdmUtd2lkZ2V0XFxzKj1cXHMqb3ZlcmxheXMtY29udGVudC9pLnRlc3QoY29udGVudCkpIHtcblx0XHRpZiAoL2ludGVyYWN0aXZlLXdpZGdldFxccyo9L2kudGVzdChjb250ZW50KSkgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvaW50ZXJhY3RpdmUtd2lkZ2V0XFxzKj1cXHMqW2Etei1dKy9pLCBJTlRFUkFDVElWRV9XSURHRVQpO1xuXHRcdGVsc2UgY29udGVudCA9IGNvbnRlbnQgPyBgJHtjb250ZW50LnJlcGxhY2UoLyxcXHMqJC8sIFwiXCIpfSwgJHtJTlRFUkFDVElWRV9XSURHRVR9YCA6IElOVEVSQUNUSVZFX1dJREdFVDtcblx0fVxuXHRpZiAoIS92aWV3cG9ydC1maXRcXHMqPVxccypjb3Zlci9pLnRlc3QoY29udGVudCkpIHtcblx0XHRpZiAoL3ZpZXdwb3J0LWZpdFxccyo9L2kudGVzdChjb250ZW50KSkgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvdmlld3BvcnQtZml0XFxzKj1cXHMqW2Etei1dKy9pLCBWSUVXUE9SVF9GSVQpO1xuXHRcdGVsc2UgY29udGVudCA9IGNvbnRlbnQgPyBgJHtjb250ZW50LnJlcGxhY2UoLyxcXHMqJC8sIFwiXCIpfSwgJHtWSUVXUE9SVF9GSVR9YCA6IFZJRVdQT1JUX0ZJVDtcblx0fVxuXHRpZiAoY29udGVudCAhPT0gU3RyaW5nKG1ldGEuY29udGVudCB8fCBcIlwiKS50cmltKCkpIG1ldGEuY29udGVudCA9IGNvbnRlbnQ7XG59O1xudmFyIGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkgPSAoKSA9PiB7XG5cdGVuc3VyZVZpZXdwb3J0SW50ZXJhY3RpdmVXaWRnZXRPdmVybGF5KCk7XG5cdGNvbnN0IHZrID0gdmlydHVhbEtleWJvYXJkKCk7XG5cdGlmICghdmspIHJldHVybjtcblx0dHJ5IHtcblx0XHRpZiAodmsub3ZlcmxheXNDb250ZW50ICE9PSB0cnVlKSB2ay5vdmVybGF5c0NvbnRlbnQgPSB0cnVlO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGRlZXBBY3RpdmVFbGVtZW50ID0gKCkgPT4ge1xuXHRsZXQgZWwgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IDogbnVsbDtcblx0d2hpbGUgKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgZWwuc2hhZG93Um9vdD8uYWN0aXZlRWxlbWVudCkgZWwgPSBlbC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaXNJbWVUYXJnZXQgPSAoZWwpID0+IHtcblx0aWYgKCFlbCB8fCAhKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbC5sb2NhbE5hbWUgPT09IFwiY3ctcmF3LWVkaXRvclwiKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGVsLmlzQ29udGVudEVkaXRhYmxlKSByZXR1cm4gdHJ1ZTtcblx0Y29uc3QgdGFnID0gZWwudGFnTmFtZTtcblx0aWYgKHRhZyA9PT0gXCJURVhUQVJFQVwiIHx8IHRhZyA9PT0gXCJTRUxFQ1RcIikgcmV0dXJuIHRydWU7XG5cdGlmICh0YWcgIT09IFwiSU5QVVRcIikgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCB0eXBlID0gU3RyaW5nKGVsLnR5cGUgfHwgXCJ0ZXh0XCIpLnRvTG93ZXJDYXNlKCk7XG5cdHJldHVybiAhW1xuXHRcdFwiYnV0dG9uXCIsXG5cdFx0XCJjaGVja2JveFwiLFxuXHRcdFwicmFkaW9cIixcblx0XHRcImZpbGVcIixcblx0XHRcInN1Ym1pdFwiLFxuXHRcdFwicmVzZXRcIixcblx0XHRcImltYWdlXCIsXG5cdFx0XCJyYW5nZVwiLFxuXHRcdFwiY29sb3JcIixcblx0XHRcImhpZGRlblwiXG5cdF0uaW5jbHVkZXModHlwZSk7XG59O1xudmFyIGlzQ29sbGFwc2VkQ2FyZXQgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgc2VsID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0cmV0dXJuIEJvb2xlYW4oc2VsICYmIHNlbC5yYW5nZUNvdW50ICYmIHNlbC5pc0NvbGxhcHNlZCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59O1xudmFyIGxheW91dExvY2tPcmllbnQgPSBcIlwiO1xudmFyIGxheW91dExvY2tXID0gMDtcbnZhciBsYXlvdXRMb2NrSCA9IDA7XG52YXIgbGFzdFN0YWJsZUtleWJvYXJkID0gMDtcbnZhciBpc0xhbmRzY2FwZSA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB0eXBlID0gdHlwZW9mIHNjcmVlbiAhPT0gXCJ1bmRlZmluZWRcIiA/IFN0cmluZyhzY3JlZW4ub3JpZW50YXRpb24/LnR5cGUgfHwgXCJcIikgOiBcIlwiO1xuXHRcdGlmICh0eXBlLnN0YXJ0c1dpdGgoXCJsYW5kc2NhcGVcIikpIHJldHVybiB0cnVlO1xuXHRcdGlmICh0eXBlLnN0YXJ0c1dpdGgoXCJwb3J0cmFpdFwiKSkgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiBCb29sZWFuKHR5cGVvZiBtYXRjaE1lZGlhICE9PSBcInVuZGVmaW5lZFwiICYmIG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgcmVhZFBoeXNpY2FsU2NyZWVuID0gKCkgPT4ge1xuXHRsZXQgdyA9IDA7XG5cdGxldCBoID0gMDtcblx0aWYgKG5hdGl2ZURpc3BsYXkpIHtcblx0XHR3ID0gbmF0aXZlRGlzcGxheS53aW5kb3dXaWR0aENzcyB8fCBuYXRpdmVEaXNwbGF5LmRpc3BsYXlXaWR0aENzcztcblx0XHRoID0gbmF0aXZlRGlzcGxheS53aW5kb3dIZWlnaHRDc3MgfHwgbmF0aXZlRGlzcGxheS5kaXNwbGF5SGVpZ2h0Q3NzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBzY3JlZW4gIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRjb25zdCBzdyA9IE51bWJlcihzY3JlZW4ud2lkdGgpIHx8IDA7XG5cdFx0Y29uc3Qgc2ggPSBOdW1iZXIoc2NyZWVuLmhlaWdodCkgfHwgMDtcblx0XHRjb25zdCBhdyA9IE51bWJlcihzY3JlZW4uYXZhaWxXaWR0aCkgfHwgMDtcblx0XHRjb25zdCBhaCA9IE51bWJlcihzY3JlZW4uYXZhaWxIZWlnaHQpIHx8IDA7XG5cdFx0dyA9IE1hdGgubWF4KHcsIHN3LCBhdyk7XG5cdFx0aCA9IE1hdGgubWF4KGgsIHNoLCBhaCk7XG5cdH1cblx0aWYgKCF3ICYmICFoKSByZXR1cm4ge1xuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMFxuXHR9O1xuXHRjb25zdCBsYW5kc2NhcGUgPSBpc0xhbmRzY2FwZSgpO1xuXHRjb25zdCBib3hMYW5kc2NhcGUgPSB3ID4gMCAmJiBoID4gMCAmJiB3ID4gaDtcblx0aWYgKGxhbmRzY2FwZSAmJiB3ID4gMCAmJiBoID4gMCAmJiB3IDwgaCkgcmV0dXJuIHtcblx0XHR3aWR0aDogaCxcblx0XHRoZWlnaHQ6IHdcblx0fTtcblx0aWYgKCFsYW5kc2NhcGUgJiYgYm94TGFuZHNjYXBlKSByZXR1cm4ge1xuXHRcdHdpZHRoOiBoLFxuXHRcdGhlaWdodDogd1xuXHR9O1xuXHRyZXR1cm4ge1xuXHRcdHdpZHRoOiB3IHx8IGgsXG5cdFx0aGVpZ2h0OiBoIHx8IHdcblx0fTtcbn07XG52YXIgY2xhbXBUb1BoeXNpY2FsID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcblx0Y29uc3QgcGh5cyA9IHJlYWRQaHlzaWNhbFNjcmVlbigpO1xuXHRjb25zdCBpbm5lclcgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwIDogMDtcblx0Y29uc3QgaW5uZXJIID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDAgOiAwO1xuXHRjb25zdCByb290ID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogbnVsbDtcblx0Y29uc3QgY2xpZW50VyA9IE51bWJlcihyb290Py5jbGllbnRXaWR0aCkgfHwgMDtcblx0Y29uc3QgY2xpZW50SCA9IE51bWJlcihyb290Py5jbGllbnRIZWlnaHQpIHx8IDA7XG5cdGNvbnN0IGNhcFcgPSBNYXRoLm1heChwaHlzLndpZHRoLCBpbm5lclcsIGNsaWVudFcpO1xuXHRjb25zdCBjYXBIID0gTWF0aC5tYXgocGh5cy5oZWlnaHQsIGlubmVySCwgY2xpZW50SCk7XG5cdHJldHVybiB7XG5cdFx0d2lkdGg6IGNhcFcgPiAwID8gTWF0aC5taW4od2lkdGgsIGNhcFcpIDogd2lkdGgsXG5cdFx0aGVpZ2h0OiBjYXBIID4gMCA/IE1hdGgubWluKGhlaWdodCwgY2FwSCkgOiBoZWlnaHRcblx0fTtcbn07XG52YXIgY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQgPSAod2lkdGgsIGhlaWdodCwgbGVmdCA9IDAsIHRvcCA9IDApID0+IHtcblx0Y29uc3Qgc2FmZVdpZHRoID0gTWF0aC5tYXgoMCwgTnVtYmVyKHdpZHRoKSB8fCAwKTtcblx0Y29uc3Qgc2FmZUhlaWdodCA9IE1hdGgubWF4KDAsIE51bWJlcihoZWlnaHQpIHx8IDApO1xuXHRjb25zdCBzYWZlTGVmdCA9IE51bWJlcihsZWZ0KSB8fCAwO1xuXHRjb25zdCBzYWZlVG9wID0gTnVtYmVyKHRvcCkgfHwgMDtcblx0cmV0dXJuIHtcblx0XHRsZWZ0OiBzYWZlTGVmdCxcblx0XHR0b3A6IHNhZmVUb3AsXG5cdFx0cmlnaHQ6IHNhZmVMZWZ0ICsgc2FmZVdpZHRoLFxuXHRcdGJvdHRvbTogc2FmZVRvcCArIHNhZmVIZWlnaHQsXG5cdFx0d2lkdGg6IHNhZmVXaWR0aCxcblx0XHRoZWlnaHQ6IHNhZmVIZWlnaHRcblx0fTtcbn07XG52YXIgcmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0ID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0KDAsIDApO1xuXHRjb25zdCByb290ID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogbnVsbDtcblx0cmV0dXJuIGNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0KE51bWJlcihyb290Py5jbGllbnRXaWR0aCkgfHwgTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwLCBOdW1iZXIocm9vdD8uY2xpZW50SGVpZ2h0KSB8fCBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwKTtcbn07XG52YXIgcmVhZExheW91dFZpZXdwb3J0ID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHtcblx0XHR3aWR0aDogMCxcblx0XHRoZWlnaHQ6IDAsXG5cdFx0a2V5Ym9hcmQ6IDBcblx0fTtcblx0Y29uc3QgdnYgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQ7XG5cdGNvbnN0IGlubmVyVyA9IE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMDtcblx0Y29uc3QgaW5uZXJIID0gTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZXID0gTnVtYmVyKHZ2Py53aWR0aCkgfHwgMDtcblx0Y29uc3QgdnZIID0gTnVtYmVyKHZ2Py5oZWlnaHQpIHx8IDA7XG5cdGNvbnN0IHZ2VG9wID0gTnVtYmVyKHZ2Py5vZmZzZXRUb3ApIHx8IDA7XG5cdGNvbnN0IHZrSCA9IE51bWJlcih2aXJ0dWFsS2V5Ym9hcmQoKT8uYm91bmRpbmdCb3g/LmhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZPdmVybGFwID0gaW5uZXJIID4gMCAmJiB2dkggPiAwID8gaW5uZXJIIC0gdnZIIC0gdnZUb3AgOiAwO1xuXHRjb25zdCBjYXBIID0gY2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQ7XG5cdGNvbnN0IG5hdGl2ZUNhcCA9IGlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpO1xuXHRsZXQga2V5Ym9hcmQgPSBjYXBIID49IEtFWUJPQVJEX09WRVJMQVlfUFggPyBjYXBIIDogIW5hdGl2ZUNhcCAmJiB2a0ggPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IHZrSCA6ICFuYXRpdmVDYXAgJiYgdnZPdmVybGFwID49IEtFWUJPQVJEX09WRVJMQVlfUFggPyB2dk92ZXJsYXAgOiAwO1xuXHRjb25zdCBjYW5kaWRhdGVXID0gTWF0aC5tYXgoaW5uZXJXLCB2dlcpO1xuXHRjb25zdCBjYW5kaWRhdGVIID0gTWF0aC5tYXgoaW5uZXJILCB2dkggKyB2dlRvcCwga2V5Ym9hcmQgPiAwID8gdnZIICsga2V5Ym9hcmQgOiAwKTtcblx0Y29uc3Qgb3JpZW50ID0gaXNMYW5kc2NhcGUoKSA/IFwibFwiIDogXCJwXCI7XG5cdGlmIChvcmllbnQgIT09IGxheW91dExvY2tPcmllbnQpIHtcblx0XHRsYXlvdXRMb2NrT3JpZW50ID0gb3JpZW50O1xuXHRcdGxheW91dExvY2tXID0gMDtcblx0XHRsYXlvdXRMb2NrSCA9IDA7XG5cdH1cblx0Y29uc3Qgd2lkdGhTdGFibGUgPSBsYXlvdXRMb2NrVyA8PSAwIHx8IE1hdGguYWJzKGxheW91dExvY2tXIC0gY2FuZGlkYXRlVykgPCAzMjtcblx0Y29uc3QgZWRpdGFibGVGb2N1c2VkID0gaXNJbWVUYXJnZXQoZGVlcEFjdGl2ZUVsZW1lbnQoKSkgfHwgaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cdGxldCBjb2Fyc2VQb2ludGVyID0gZmFsc2U7XG5cdHRyeSB7XG5cdFx0Y29hcnNlUG9pbnRlciA9IHR5cGVvZiBtYXRjaE1lZGlhID09PSBcImZ1bmN0aW9uXCIgJiYgbWF0Y2hNZWRpYShcIihwb2ludGVyOiBjb2Fyc2UpXCIpLm1hdGNoZXM7XG5cdH0gY2F0Y2gge1xuXHRcdGNvYXJzZVBvaW50ZXIgPSBmYWxzZTtcblx0fVxuXHRjb25zdCBzdWRkZW5TaHJpbmsgPSAhbmF0aXZlQ2FwICYmIHdpZHRoU3RhYmxlICYmIChlZGl0YWJsZUZvY3VzZWQgfHwgY29hcnNlUG9pbnRlcikgJiYgbGF5b3V0TG9ja0ggPiAwICYmIGxheW91dExvY2tIIC0gY2FuZGlkYXRlSCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYO1xuXHRpZiAoa2V5Ym9hcmQgPCBLRVlCT0FSRF9PVkVSTEFZX1BYICYmIHN1ZGRlblNocmluaykge1xuXHRcdGNvbnN0IHNocmluayA9IE1hdGgubWF4KDAsIGxheW91dExvY2tIIC0gY2FuZGlkYXRlSCwgbGF5b3V0TG9ja0ggLSAodnZIICsgdnZUb3ApKTtcblx0XHRpZiAoc2hyaW5rID49IEtFWUJPQVJEX09WRVJMQVlfUFgpIGtleWJvYXJkID0gc2hyaW5rO1xuXHR9XG5cdGNvbnN0IGV4cGFuZGVkU2VsZWN0aW9uID0gIWlzQ29sbGFwc2VkQ2FyZXQoKTtcblx0aWYgKGV4cGFuZGVkU2VsZWN0aW9uICYmIGxhc3RTdGFibGVLZXlib2FyZCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYKSBrZXlib2FyZCA9IGxhc3RTdGFibGVLZXlib2FyZDtcblx0ZWxzZSBpZiAoa2V5Ym9hcmQgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCkgbGFzdFN0YWJsZUtleWJvYXJkID0ga2V5Ym9hcmQ7XG5cdGVsc2UgaWYgKCFpc0ltZVRhcmdldChkZWVwQWN0aXZlRWxlbWVudCgpKSAmJiAhaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIGxhc3RTdGFibGVLZXlib2FyZCA9IDA7XG5cdGlmICghKGtleWJvYXJkID4gMCB8fCBpc0ltZVRhcmdldChkZWVwQWN0aXZlRWxlbWVudCgpKSB8fCBpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB8fCBzdWRkZW5TaHJpbmsgfHwgZXhwYW5kZWRTZWxlY3Rpb24pKSB7XG5cdFx0bGF5b3V0TG9ja1cgPSBjYW5kaWRhdGVXO1xuXHRcdGxheW91dExvY2tIID0gY2FuZGlkYXRlSDtcblx0fSBlbHNlIHtcblx0XHRsYXlvdXRMb2NrVyA9IE1hdGgubWF4KGNhbmRpZGF0ZVcsIGxheW91dExvY2tXKTtcblx0XHRsYXlvdXRMb2NrSCA9IE1hdGgubWF4KGNhbmRpZGF0ZUgsIGxheW91dExvY2tIKTtcblx0fVxuXHRjb25zdCBsb2NrZWQgPSBjbGFtcFRvUGh5c2ljYWwobGF5b3V0TG9ja1cgfHwgY2FuZGlkYXRlVywgbGF5b3V0TG9ja0ggfHwgY2FuZGlkYXRlSCk7XG5cdGxheW91dExvY2tXID0gbG9ja2VkLndpZHRoO1xuXHRsYXlvdXRMb2NrSCA9IGxvY2tlZC5oZWlnaHQ7XG5cdGNvbnN0IGtiID0gbG9ja2VkLmhlaWdodCA+IDAgPyBNYXRoLm1pbihrZXlib2FyZCwgbG9ja2VkLmhlaWdodCkgOiBrZXlib2FyZDtcblx0cmV0dXJuIHtcblx0XHR3aWR0aDogbG9ja2VkLndpZHRoLFxuXHRcdGhlaWdodDogbG9ja2VkLmhlaWdodCxcblx0XHRrZXlib2FyZDoga2Jcblx0fTtcbn07XG52YXIgaXNJbWVDaHJvbWVMb2NrID0gKGVsKSA9PiB7XG5cdGNvbnN0IHRhZyA9IGVsLnRhZ05hbWU7XG5cdGlmICh0YWcgPT09IFwiSFRNTFwiIHx8IHRhZyA9PT0gXCJCT0RZXCIpIHJldHVybiB0cnVlO1xuXHRpZiAodGFnID09PSBcIkNXLVJBVy1FRElUT1JcIiB8fCB0YWcgPT09IFwiQ1ctVklFVy1WSUVXRVJcIiB8fCB0YWcgPT09IFwiQ1ctTUFSS0RPV04tVklFVy1GUkFNRVwiIHx8IHRhZyA9PT0gXCJDVy1NQVJLRE9XTi1UT09MQkFSLUZSQU1FXCIpIHJldHVybiB0cnVlO1xuXHRjb25zdCBjbHMgPSBlbC5jbGFzc0xpc3Q7XG5cdHJldHVybiBjbHMuY29udGFpbnMoXCJhcHAtc2hlbGxcIikgfHwgY2xzLmNvbnRhaW5zKFwiYXBwLXNoZWxsX192aWV3cG9ydFwiKSB8fCBjbHMuY29udGFpbnMoXCJhcHAtc2hlbGxfX25hdlwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtc2hlbGwtcm9vdFwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtc2hlbGwtd29ya3NwYWNlXCIpIHx8IGNscy5jb250YWlucyhcImVudi1zaGVsbC1jaHJvbWVcIikgfHwgY2xzLmNvbnRhaW5zKFwiZW52LXVpLXdpbmRvd1wiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtdWktd2luZG93X19ib2R5XCIpIHx8IGNscy5jb250YWlucyhcIndmLWZyYW1lXCIpIHx8IGNscy5jb250YWlucyhcInVpLXdpbmRvd1wiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlclwiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlcl9fdG9vbGJhclwiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlcl9fY2hyb21lXCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyX19jb250ZW50XCIpIHx8IGNscy5jb250YWlucyhcImN3LXZpZXctdmlld2VyLXNoZWxsXCIpIHx8IGNscy5jb250YWlucyhcImN3LW1hcmtkb3duLXZpZXctZnJhbWVcIikgfHwgY2xzLmNvbnRhaW5zKFwiY3ctdmlldy12aWV3ZXJfX3Nsb3QtcmF3XCIpO1xufTtcbnZhciBwYXJlbnRPZiA9IChlbCkgPT4ge1xuXHRpZiAoIWVsKSByZXR1cm4gbnVsbDtcblx0aWYgKGVsLnBhcmVudEVsZW1lbnQpIHJldHVybiBlbC5wYXJlbnRFbGVtZW50O1xuXHRjb25zdCByb290ID0gZWwuZ2V0Um9vdE5vZGUoKTtcblx0cmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdC5ob3N0IDogbnVsbDtcbn07XG52YXIgaXNTY3JvbGxwb3J0ID0gKGVsKSA9PiB7XG5cdGlmIChpc0ltZUNocm9tZUxvY2soZWwpKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdGNvbnN0IG95ID0gc3R5bGUub3ZlcmZsb3dZIHx8IHN0eWxlLm92ZXJmbG93QmxvY2s7XG5cdGlmIChveSAhPT0gXCJhdXRvXCIgJiYgb3kgIT09IFwic2Nyb2xsXCIpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIGVsLnNjcm9sbEhlaWdodCA+IGVsLmNsaWVudEhlaWdodCArIDE7XG59O1xudmFyIGZpbmRSYXdFZGl0b3JTY3JvbGxwb3J0ID0gKHN0YXJ0KSA9PiB7XG5cdGxldCBub2RlID0gc3RhcnQ7XG5cdHdoaWxlIChub2RlKSB7XG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImN3LXJhdy1lZGl0b3JfX3Njcm9sbFwiKSkgcmV0dXJuIG5vZGU7XG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBub2RlLmxvY2FsTmFtZSA9PT0gXCJjdy1yYXctZWRpdG9yXCIpIHtcblx0XHRcdGNvbnN0IGlubmVyID0gbm9kZS5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKFwiLmN3LXJhdy1lZGl0b3JfX3Njcm9sbFwiKTtcblx0XHRcdGlmIChpbm5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSByZXR1cm4gaW5uZXI7XG5cdFx0fVxuXHRcdGNvbnN0IHJvb3QgPSBub2RlLmdldFJvb3ROb2RlKCk7XG5cdFx0aWYgKHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG5cdFx0XHRjb25zdCBpbm5lciA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5jdy1yYXctZWRpdG9yX19zY3JvbGxcIik7XG5cdFx0XHRpZiAoaW5uZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgcmV0dXJuIGlubmVyO1xuXHRcdH1cblx0XHRub2RlID0gcGFyZW50T2Yobm9kZSk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGZpbmRJbWVTY3JvbGxwb3J0ID0gKHN0YXJ0KSA9PiB7XG5cdGNvbnN0IHJhdyA9IGZpbmRSYXdFZGl0b3JTY3JvbGxwb3J0KHN0YXJ0KTtcblx0aWYgKHJhdykgcmV0dXJuIHJhdztcblx0bGV0IG5vZGUgPSBzdGFydDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGlzU2Nyb2xscG9ydChub2RlKSkgcmV0dXJuIG5vZGU7XG5cdFx0bm9kZSA9IHBhcmVudE9mKG5vZGUpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbnZhciByZWFkQ2FyZXRSZWN0ID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHNlbCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXHRcdGlmIChzZWw/LnJhbmdlQ291bnQpIHtcblx0XHRcdGNvbnN0IHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XG5cdFx0XHRjb25zdCByZWN0cyA9IHJhbmdlLmdldENsaWVudFJlY3RzKCk7XG5cdFx0XHRjb25zdCByZWN0ID0gcmVjdHMubGVuZ3RoID8gcmVjdHNbcmVjdHMubGVuZ3RoIC0gMV0gOiByYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGlmIChyZWN0ICYmIChyZWN0LmhlaWdodCB8fCByZWN0LndpZHRoIHx8IHJlY3QudG9wIHx8IHJlY3QuYm90dG9tKSkgcmV0dXJuIHJlY3Q7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XG59O1xudmFyIHBpbkltZUNhcmV0SW5TY3JvbGxwb3J0ID0gKCkgPT4ge1xuXHRjb25zdCBhY3RpdmUgPSBkZWVwQWN0aXZlRWxlbWVudCgpO1xuXHRpZiAoIWlzSW1lVGFyZ2V0KGFjdGl2ZSkgJiYgIWlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghaXNDb2xsYXBzZWRDYXJldCgpKSByZXR1cm47XG5cdGNvbnN0IGtleWJvYXJkID0gcmVhZExheW91dFZpZXdwb3J0KCkua2V5Ym9hcmQ7XG5cdGNvbnN0IHZ2ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0O1xuXHRjb25zdCB2aXNpYmxlQm90dG9tID0gKE51bWJlcih2dj8uaGVpZ2h0KSB8fCBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwKSAtIE1hdGgubWF4KDgsIGtleWJvYXJkID8gMTIgOiAwKTtcblx0aWYgKHZpc2libGVCb3R0b20gPD0gMCkgcmV0dXJuO1xuXHRjb25zdCByZWN0ID0gcmVhZENhcmV0UmVjdCgpO1xuXHRpZiAoIXJlY3QpIHJldHVybjtcblx0Y29uc3Qgb3ZlcmZsb3cgPSByZWN0LmJvdHRvbSAtIHZpc2libGVCb3R0b207XG5cdGlmIChvdmVyZmxvdyA8PSAxKSByZXR1cm47XG5cdGNvbnN0IHBvcnQgPSBmaW5kSW1lU2Nyb2xscG9ydChhY3RpdmUpIHx8IGZpbmRJbWVTY3JvbGxwb3J0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXHRpZiAocG9ydCkgcG9ydC5zY3JvbGxUb3AgKz0gb3ZlcmZsb3c7XG59O1xudmFyIHBpblZpc3VhbFZpZXdwb3J0ID0gKCkgPT4ge1xuXHRjb25zdCB2diA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblx0aWYgKCF2dikgcmV0dXJuO1xuXHRjb25zdCB0b3AgPSBOdW1iZXIodnYub2Zmc2V0VG9wKSB8fCAwO1xuXHRjb25zdCBsZWZ0ID0gTnVtYmVyKHZ2Lm9mZnNldExlZnQpIHx8IDA7XG5cdGlmICghdG9wICYmICFsZWZ0KSByZXR1cm47XG5cdHRyeSB7XG5cdFx0dnYuc2Nyb2xsVG8oe1xuXHRcdFx0bGVmdDogMCxcblx0XHRcdHRvcDogMCxcblx0XHRcdGJlaGF2aW9yOiBcImluc3RhbnRcIlxuXHRcdH0pO1xuXHR9IGNhdGNoIHtcblx0XHR0cnkge1xuXHRcdFx0dnYuc2Nyb2xsVG8/LigwLCAwKTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cbn07XG52YXIgb3ZlcmxheVBpbm5pbmcgPSBmYWxzZTtcbnZhciByZXNldENocm9tZVNjcm9sbCA9IChzdGFydCkgPT4ge1xuXHRjb25zdCBwb3J0ID0gZmluZEltZVNjcm9sbHBvcnQoc3RhcnQpO1xuXHRsZXQgbm9kZSA9IHN0YXJ0O1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgbm9kZSAhPT0gcG9ydCAmJiBpc0ltZUNocm9tZUxvY2sobm9kZSkpIHtcblx0XHRcdGlmIChub2RlLnNjcm9sbFRvcCB8fCBub2RlLnNjcm9sbExlZnQpIHtcblx0XHRcdFx0bm9kZS5zY3JvbGxUb3AgPSAwO1xuXHRcdFx0XHRub2RlLnNjcm9sbExlZnQgPSAwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRub2RlID0gcGFyZW50T2Yobm9kZSk7XG5cdH1cbn07XG52YXIgcGluT3ZlcmxheVNjcm9sbCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgb3ZlcmxheVBpbm5pbmcpIHJldHVybjtcblx0Y29uc3QgYWN0aXZlID0gZGVlcEFjdGl2ZUVsZW1lbnQoKTtcblx0Y29uc3QgY2FwID0gaXNOYXRpdmVDYXBhY2l0b3JIb3N0KCk7XG5cdGNvbnN0IHJhdyA9IEJvb2xlYW4oZmluZFJhd0VkaXRvclNjcm9sbHBvcnQoYWN0aXZlKSB8fCBmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSk7XG5cdGNvbnN0IGltZSA9IHJlYWRMYXlvdXRWaWV3cG9ydCgpLmtleWJvYXJkID4gMCB8fCBpc0ltZVRhcmdldChhY3RpdmUpIHx8IGlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXHRpZiAoIWltZSAmJiAhY2FwKSByZXR1cm47XG5cdG92ZXJsYXlQaW5uaW5nID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRwaW5WaXN1YWxWaWV3cG9ydCgpO1xuXHRcdGlmICh3aW5kb3cuc2Nyb2xsWCB8fCB3aW5kb3cuc2Nyb2xsWSkgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYgKHJvb3Quc2Nyb2xsVG9wIHx8IHJvb3Quc2Nyb2xsTGVmdCkgcm9vdC5zY3JvbGxUbygwLCAwKTtcblx0XHRpZiAoYm9keSAmJiAoYm9keS5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxMZWZ0KSkgYm9keS5zY3JvbGxUbygwLCAwKTtcblx0XHRpZiAocmF3IHx8IGltZSB8fCAhaXNDb2xsYXBzZWRDYXJldCgpKSB7XG5cdFx0XHRyZXNldENocm9tZVNjcm9sbChhY3RpdmUpO1xuXHRcdFx0cmVzZXRDaHJvbWVTY3JvbGwoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cdFx0fVxuXHRcdGlmIChjYXApIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJjdy1yYXctZWRpdG9yXCIpLmZvckVhY2goKGhvc3QpID0+IHtcblx0XHRcdGlmIChob3N0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgIWhvc3QuaGlkZGVuKSByZXNldENocm9tZVNjcm9sbChob3N0KTtcblx0XHR9KTtcblx0fSBmaW5hbGx5IHtcblx0XHRvdmVybGF5UGlubmluZyA9IGZhbHNlO1xuXHR9XG59O1xudmFyIHNjcm9sbEludG9WaWV3UGF0Y2hlZCA9IGZhbHNlO1xudmFyIHBhdGNoSW1lU2Nyb2xsSW50b1ZpZXcgPSAoKSA9PiB7XG5cdGlmIChzY3JvbGxJbnRvVmlld1BhdGNoZWQgfHwgdHlwZW9mIEVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0c2Nyb2xsSW50b1ZpZXdQYXRjaGVkID0gdHJ1ZTtcblx0Y29uc3Qgb3JpZyA9IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3O1xuXHRFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uKGFyZykge1xuXHRcdGNvbnN0IGFjdGl2ZSA9IGRlZXBBY3RpdmVFbGVtZW50KCk7XG5cdFx0aWYgKEJvb2xlYW4oZmluZFJhd0VkaXRvclNjcm9sbHBvcnQodGhpcykgfHwgZmluZFJhd0VkaXRvclNjcm9sbHBvcnQoYWN0aXZlKSkgfHwgaXNJbWVUYXJnZXQoYWN0aXZlKSAmJiAhaXNDb2xsYXBzZWRDYXJldCgpKSB7XG5cdFx0XHRpZiAoaXNOYXRpdmVDYXBhY2l0b3JIb3N0KCkgfHwgIWlzQ29sbGFwc2VkQ2FyZXQoKSkge1xuXHRcdFx0XHRwaW5JbWVDaHJvbWUoeyBjYXJldDogdHJ1ZSB9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGlzSW1lQ2hyb21lTG9jayh0aGlzKSkgcmV0dXJuO1xuXHRcdHJldHVybiBvcmlnLmNhbGwodGhpcywgYXJnKTtcblx0fTtcbn07XG52YXIgcGluSW1lQ2hyb21lID0gKG9wdHMpID0+IHtcblx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHRpZiAoIW9wdHM/LmNhcmV0KSByZXR1cm47XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHRcdHBpbkltZUNhcmV0SW5TY3JvbGxwb3J0KCk7XG5cdH0pO1xufTtcbnZhciByZWFkVmlydHVhbEtleWJvYXJkSGVpZ2h0UHggPSAoKSA9PiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gMCA6IHJlYWRMYXlvdXRWaWV3cG9ydCgpLmtleWJvYXJkO1xudmFyIGdldEF2YWlsU2l6ZSA9ICgpID0+IHtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBsYXlvdXQgPSByZWFkTGF5b3V0Vmlld3BvcnQoKTtcblx0Y29uc3QgdnZCbG9jayA9IHtcblx0XHRcIi0tdnYtd2lkdGhcIjogYCR7dnY/LndpZHRoID8/ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmlubmVyV2lkdGggOiAwKX1weGAsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiBgJHt2dj8uaGVpZ2h0ID8/ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmlubmVySGVpZ2h0IDogMCl9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtbGVmdFwiOiBgJHt2dj8ub2Zmc2V0TGVmdCA/PyAwfXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt2dj8ub2Zmc2V0VG9wID8/IDB9cHhgLFxuXHRcdFwiLS12di1zY2FsZVwiOiBTdHJpbmcodnY/LnNjYWxlID8/IDEpLFxuXHRcdFwiLS1sdi13aWR0aFwiOiBgJHtsYXlvdXQud2lkdGh9cHhgLFxuXHRcdFwiLS1sdi1oZWlnaHRcIjogYCR7bGF5b3V0LmhlaWdodH1weGAsXG5cdFx0XCItLWtleWJvYXJkLW92ZXJsYXktaGVpZ2h0XCI6IGAke2xheW91dC5rZXlib2FyZH1weGAsXG5cdFx0XCItLXZpcnR1YWwta2V5Ym9hcmQtaGVpZ2h0XCI6IGAke2xheW91dC5rZXlib2FyZH1weGBcblx0fTtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtdmstb3BlblwiKTtcblx0aWYgKHR5cGVvZiBzY3JlZW4gIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGNvbnN0IHBoeXMgPSByZWFkUGh5c2ljYWxTY3JlZW4oKTtcblx0XHRjb25zdCBpbm5lclcgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwIDogMDtcblx0XHRjb25zdCBpbm5lckggPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCA6IDA7XG5cdFx0Y29uc3QgcGFuZVcgPSBNYXRoLm1heChpbm5lclcsIGxheW91dC53aWR0aCk7XG5cdFx0Y29uc3QgcGFuZUggPSBNYXRoLm1heChpbm5lckgsIGxheW91dC5oZWlnaHQpO1xuXHRcdGNvbnN0IHdpbmRvd2VkVyA9ICFuYXRpdmVEaXNwbGF5ICYmIHBhbmVXID4gMCAmJiBwaHlzLndpZHRoID4gcGFuZVcgKyA2NDtcblx0XHRjb25zdCB3aW5kb3dlZEggPSAhbmF0aXZlRGlzcGxheSAmJiBwYW5lSCA+IDAgJiYgcGh5cy5oZWlnaHQgPiBwYW5lSCArIDY0O1xuXHRcdGNvbnN0IGNhcFcgPSB3aW5kb3dlZFcgPyBwYW5lVyA6IE1hdGgubWF4KHBoeXMud2lkdGgsIHBhbmVXKTtcblx0XHRjb25zdCBjYXBIID0gd2luZG93ZWRIID8gcGFuZUggOiBNYXRoLm1heChwaHlzLmhlaWdodCwgcGFuZUgpO1xuXHRcdGNvbnN0IHNjcmVlblcgPSBjYXBXID4gMCA/IGAke2NhcFd9cHhgIDogXCIxMDBsdmlcIjtcblx0XHRjb25zdCBzY3JlZW5IID0gY2FwSCA+IDAgPyBgJHtjYXBIfXB4YCA6IFwiMTAwbHZiXCI7XG5cdFx0Y29uc3QgZGVuc2l0eSA9IG5hdGl2ZURpc3BsYXk/LmRlbnNpdHkgfHwgTnVtYmVyKGRldmljZVBpeGVsUmF0aW8pIHx8IDE7XG5cdFx0Y29uc3QgbmF0aXZlU2NhbGUgPSBuYXRpdmVEaXNwbGF5ID8ge1xuXHRcdFx0XCItLW5hdGl2ZS1kZW5zaXR5XCI6IFN0cmluZyhuYXRpdmVEaXNwbGF5LmRlbnNpdHkgfHwgZGVuc2l0eSksXG5cdFx0XHRcIi0tbmF0aXZlLWRwaVwiOiBTdHJpbmcobmF0aXZlRGlzcGxheS5kZW5zaXR5RHBpIHx8IDApLFxuXHRcdFx0XCItLW5hdGl2ZS1wcGlcIjogU3RyaW5nKG5hdGl2ZURpc3BsYXkucHBpIHx8IDApLFxuXHRcdFx0XCItLW5hdGl2ZS14ZHBpXCI6IFN0cmluZyhuYXRpdmVEaXNwbGF5LnhkcGkgfHwgMCksXG5cdFx0XHRcIi0tbmF0aXZlLXlkcGlcIjogU3RyaW5nKG5hdGl2ZURpc3BsYXkueWRwaSB8fCAwKSxcblx0XHRcdFwiLS1uYXRpdmUtZm9udC1zY2FsZVwiOiBTdHJpbmcobmF0aXZlRGlzcGxheS5mb250U2NhbGUgfHwgMSlcblx0XHR9IDoge307XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogc2NyZWVuVyxcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IHNjcmVlbkgsXG5cdFx0XHRcIi0tYXZhaWwtd2lkdGhcIjogc2NyZWVuVyxcblx0XHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogc2NyZWVuSCxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGVuc2l0eSksXG5cdFx0XHQuLi5uYXRpdmVTY2FsZSxcblx0XHRcdC4uLnZ2QmxvY2tcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjEwMGx2aVwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMTAwbHZiXCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMTAwbHZpXCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjEwMGx2YlwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogXCIxXCIsXG5cdFx0Li4udnZCbG9ja1xuXHR9O1xufTtcbnZhciBhdmFpbFNpemUgPSBnZXRBdmFpbFNpemUoKTtcbnZhciBjbGFzc2VzID0gW1tcIjpyb290LCA6aG9zdCwgOnNjb3BlXCIsIGF2YWlsU2l6ZV1dO1xudmFyIG9yaWVudGF0aW9uTnVtYmVyTWFwID0ge1xuXHRcInBvcnRyYWl0LXByaW1hcnlcIjogMCxcblx0XCJsYW5kc2NhcGUtcHJpbWFyeVwiOiAxLFxuXHRcInBvcnRyYWl0LXNlY29uZGFyeVwiOiAyLFxuXHRcImxhbmRzY2FwZS1zZWNvbmRhcnlcIjogM1xufTtcbnZhciB1cGRhdGVWUCA9IChldikgPT4ge1xuXHRjb25zdCBydWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRPYmplY3QuYXNzaWduKGF2YWlsU2l6ZSwgZ2V0QXZhaWxTaXplKCkpO1xuXHRPYmplY3QuZW50cmllcyhhdmFpbFNpemUpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFZhbHVlXSkgPT4ge1xuXHRcdGNvbnN0IGV4aXN0cyA9IHJ1bGU/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKTtcblx0XHRpZiAoIWV4aXN0cyB8fCBleGlzdHMgIT0gcHJvcFZhbHVlKSBydWxlPy5zdHlsZT8uc2V0UHJvcGVydHk/Lihwcm9wTmFtZSwgcHJvcFZhbHVlIHx8IFwiXCIsIFwiXCIpO1xuXHR9KTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRhdGlvbi1zZWNvbmRhcnlcIiwgc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZT8uZW5kc1dpdGg/LihcInNlY29uZGFyeVwiKSA/IFwiMVwiIDogXCIwXCIpO1xufTtcbnZhciBnZXRDb3JyZWN0T3JpZW50YXRpb24gPSAoKSA9PiB7XG5cdGxldCBvcmllbnRhdGlvblR5cGUgPSBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlIHx8IFwicG9ydHJhaXQtcHJpbWFyeVwiO1xuXHRpZiAoIWdsb2JhbFRoaXMubWF0Y2hNZWRpYShcIigoZGlzcGxheS1tb2RlOiBmdWxsc2NyZWVuKSBvciAoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKSBvciAoZGlzcGxheS1tb2RlOiB3aW5kb3ctY29udHJvbHMtb3ZlcmxheSkpXCIpLm1hdGNoZXMpIHtcblx0XHRpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwibGFuZHNjYXBlXCIsIFwicG9ydHJhaXRcIik7XG5cdFx0ZWxzZSBpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcInBvcnRyYWl0XCIsIFwibGFuZHNjYXBlXCIpO1xuXHR9XG5cdHJldHVybiBvcmllbnRhdGlvblR5cGU7XG59O1xudmFyIHBhc3NpdmVPcHRzJDEgPSB7IHBhc3NpdmU6IHRydWUgfTtcbnZhciBhcHBseUNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gKHJhdykgPT4ge1xuXHRjb25zdCBuZXh0ID0gTnVtYmVyKHJhdykgfHwgMDtcblx0aWYgKG5leHQgPiAwKSBjYXBhY2l0b3JLZXlib2FyZEhlaWdodCA9IG5leHQ7XG5cdHVwZGF0ZVZQKCk7XG5cdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xufTtcbnZhciBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gKCkgPT4ge1xuXHRjYXBhY2l0b3JLZXlib2FyZEhlaWdodCA9IDA7XG5cdHVwZGF0ZVZQKCk7XG59O1xudmFyIGJpbmRXaW5kb3dLZXlib2FyZEV2ZW50cyA9ICgpID0+IHtcblx0aWYgKHdpbmRvd0tleWJvYXJkQm91bmQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHR3aW5kb3dLZXlib2FyZEJvdW5kID0gdHJ1ZTtcblx0Y29uc3Qgb25TaG93ID0gKGV2KSA9PiB7XG5cdFx0Y29uc3QgZSA9IGV2O1xuXHRcdGNvbnN0IGRldGFpbCA9IGUuZGV0YWlsO1xuXHRcdGNvbnN0IGZyb21EZXRhaWwgPSB0eXBlb2YgZGV0YWlsID09PSBcInN0cmluZ1wiID8gKCgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKGRldGFpbCk/LmtleWJvYXJkSGVpZ2h0O1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXHRcdH0pKCkgOiBkZXRhaWw/LmtleWJvYXJkSGVpZ2h0O1xuXHRcdGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQoZS5rZXlib2FyZEhlaWdodCA/PyBmcm9tRGV0YWlsKTtcblx0fTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZFdpbGxTaG93XCIsIG9uU2hvdyk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5Ym9hcmREaWRTaG93XCIsIG9uU2hvdyk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5Ym9hcmRXaWxsSGlkZVwiLCBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZERpZEhpZGVcIiwgY2xlYXJDYXBhY2l0b3JLZXlib2FyZEhlaWdodCk7XG59O1xudmFyIGJpbmRDYXBhY2l0b3JLZXlib2FyZCA9ICgpID0+IHtcblx0YmluZFdpbmRvd0tleWJvYXJkRXZlbnRzKCk7XG5cdGlmIChjYXBhY2l0b3JLZXlib2FyZEJvdW5kIHx8IHR5cGVvZiBnbG9iYWxUaGlzID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdGNvbnN0IGNhcCA9IGdsb2JhbFRoaXMuQ2FwYWNpdG9yO1xuXHRjb25zdCBLZXlib2FyZCA9IGNhcD8uUGx1Z2lucz8uS2V5Ym9hcmQ7XG5cdGlmICghS2V5Ym9hcmQ/LmFkZExpc3RlbmVyKSByZXR1cm47XG5cdGlmICh0eXBlb2YgY2FwLmlzTmF0aXZlUGxhdGZvcm0gPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FwLmlzTmF0aXZlUGxhdGZvcm0oKSkgcmV0dXJuO1xuXHRjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRLZXlib2FyZC5zZXRTY3JvbGw/Lih7IGlzRGlzYWJsZWQ6IHRydWUgfSk7XG5cdH0gY2F0Y2gge31cblx0dHJ5IHtcblx0XHRLZXlib2FyZC5zZXRSZXNpemVNb2RlPy4oeyBtb2RlOiBcIm5vbmVcIiB9KTtcblx0fSBjYXRjaCB7fVxuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkV2lsbFNob3dcIiwgKGluZm8pID0+IGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQoaW5mbz8ua2V5Ym9hcmRIZWlnaHQpKTtcblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZERpZFNob3dcIiwgKGluZm8pID0+IGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQoaW5mbz8ua2V5Ym9hcmRIZWlnaHQpKTtcblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZFdpbGxIaWRlXCIsIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQpO1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkRGlkSGlkZVwiLCBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KTtcbn07XG52YXIgZW5zdXJlVmlld3BvcnRUcmFja2luZyA9ICgpID0+IHtcblx0aWYgKHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkIHx8IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0dmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQgPSB0cnVlO1xuXHRiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQoKTtcblx0YmluZE5hdGl2ZURpc3BsYXkoKTtcblx0d2hlbkFueVNjcmVlbkNoYW5nZXMoKCkgPT4ge30pO1xufTtcbnZhciB3aGVuQW55U2NyZWVuQ2hhbmdlcyA9IChjYikgPT4ge1xuXHRsZXQgdGlja2luZyA9IGZhbHNlO1xuXHRjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cdFx0aWYgKCF0aWNraW5nKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHR1cGRhdGVWUCgpO1xuXHRcdFx0XHRjYigpO1xuXHRcdFx0XHR0aWNraW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHRcdHRpY2tpbmcgPSB0cnVlO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgdW5zdWJzY3JpYmVycyA9IFtdO1xuXHRiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQoKTtcblx0YmluZE5hdGl2ZURpc3BsYXkoKTtcblx0cGF0Y2hJbWVTY3JvbGxJbnRvVmlldygpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQsIFwiZ2VvbWV0cnljaGFuZ2VcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93Py52aXN1YWxWaWV3cG9ydCwgXCJzY3JvbGxcIiwgKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0XHR1cGRhdGUoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdz8udmlzdWFsVmlld3BvcnQsIFwicmVzaXplXCIsICgpID0+IHtcblx0XHRwaW5JbWVDaHJvbWUoeyBjYXJldDogdHJ1ZSB9KTtcblx0XHR1cGRhdGUoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoc2NyZWVuPy5vcmllbnRhdGlvbiwgXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCAoKSA9PiB7XG5cdFx0cXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50LCBcImZ1bGxzY3JlZW5jaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKSwgXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKSwgXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiZm9jdXNpblwiLCAoKSA9PiB7XG5cdFx0YmluZENhcGFjaXRvcktleWJvYXJkKCk7XG5cdFx0YmluZE5hdGl2ZURpc3BsYXkoKTtcblx0XHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdFx0aWYgKGlzSW1lVGFyZ2V0KGRlZXBBY3RpdmVFbGVtZW50KCkpIHx8IGlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG5cdFx0XHRsYXlvdXRMb2NrVyA9IE1hdGgubWF4KGxheW91dExvY2tXLCBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAsIE51bWJlcih3aW5kb3cudmlzdWFsVmlld3BvcnQ/LndpZHRoKSB8fCAwKTtcblx0XHRcdGxheW91dExvY2tIID0gTWF0aC5tYXgobGF5b3V0TG9ja0gsIE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDAsIE51bWJlcih3aW5kb3cudmlzdWFsVmlld3BvcnQ/LmhlaWdodCkgfHwgMCk7XG5cdFx0fVxuXHRcdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcImZvY3Vzb3V0XCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdHVwZGF0ZSgpO1xuXHRydW5XaGVuSWRsZSgoKSA9PiB1cGRhdGUoKSwgMTAwKTtcblx0cmV0dXJuICgpID0+IHVuc3Vic2NyaWJlcnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xufTtcbnZhciBmaXhPcmllbnRUb1NjcmVlbiA9IChlbGVtZW50KSA9PiB7XG5cdGlmICghZWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucz8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKSkge1xuXHRcdGVsZW1lbnQ/LmNsYXNzTGlzdD8uYWRkPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpO1xuXHRcdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcygoKSA9PiB7XG5cdFx0XHRjb25zdCBuZXh0ID0gb3JpZW50YXRpb25OdW1iZXJNYXA/LltnZXRDb3JyZWN0T3JpZW50YXRpb24oKV0gPz8gMDtcblx0XHRcdGVsZW1lbnQub3JpZW50ID0gbmV4dDtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlPy4oXCJvcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHRcdGVsZW1lbnQuc3R5bGU/LnNldFByb3BlcnR5Py4oXCItLW9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdH0pO1xuXHR9XG59O1xuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIikgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpLCB7IG9uY2U6IHRydWUgfSk7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9NZWFzdXJlLnRzXG52YXIgY3R4ID0gbmV3IE9mZnNjcmVlbkNhbnZhcygxLCAxKS5nZXRDb250ZXh0KFwiMmRcIik7XG52YXIgaW5pdFRleHRTdHlsZSA9IChlbGVtZW50LCBjdHgpID0+IHtcblx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIFwiXCIpO1xuXHRpZiAoY3R4ICYmIHN0eWxlKSB7XG5cdFx0Y29uc3QgZm9udFdlaWdodCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXdlaWdodFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdGNvbnN0IGZvbnRTaXplID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSB8fCBcIjE2cHhcIjtcblx0XHRjb25zdCBmb250RmFtaWx5ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtZmFtaWx5XCIpIHx8IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdFx0Y29uc3QgZm9udFN0cmV0Y2ggPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zdHJldGNoXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250U3RyZXRjaCA9IGZvbnRTdHJldGNoLmluY2x1ZGVzKFwiJVwiKSA/IFwibm9ybWFsXCIgOiBmb250U3RyZXRjaDtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHgubGV0dGVyU3BhY2luZyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJsZXR0ZXItc3BhY2luZ1wiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250S2VybmluZyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWtlcm5pbmdcIikgfHwgXCJhdXRvXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRWYXJpYW50Q2FwcyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXZhcmlhbnQtY2Fwc1wiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250ID0gYCR7Zm9udFdlaWdodH0gJHtmb250U2l6ZX0gJHtmb250RmFtaWx5fWA7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxufTtcbnZhciBtZWFzdXJlVGV4dCA9ICh0ZXh0LCBlbGVtZW50KSA9PiB7XG5cdGlmIChjdHgpIHtcblx0XHRpbml0VGV4dFN0eWxlKGVsZW1lbnQsIGN0eCk7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBjdHgubWVhc3VyZVRleHQodGV4dCk7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxuXHRyZXR1cm4geyB3aWR0aDogbnVsbCB9O1xufTtcbnZhciBtZWFzdXJlSW5wdXRJbkZvY3VzID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IHRleHQgPSBpbnB1dC52YWx1ZS5zbGljZSgwLCBpbnB1dC5zZWxlY3Rpb25FbmQgfHwgMCk7XG5cdHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0LCBpbnB1dCk7XG59O1xudmFyIGNvbXB1dGVDYXJldFBvc2l0aW9uID0gKGlucHV0LCBwb2ludCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQ/LnZhbHVlIHx8IFwiXCI7XG5cdGlmIChjdHgpIHtcblx0XHRpbml0VGV4dFN0eWxlKGlucHV0LCBjdHgpO1xuXHRcdGxldCBjdXJyZW50V2lkdGggPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VycmVudFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQuc2xpY2UoMCwgaSkpPy53aWR0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggPT0gbnVsbCkgcmV0dXJuIHRleHQubGVuZ3RoO1xuXHRcdFx0aWYgKGN1cnJlbnRXaWR0aCAhPSBudWxsICYmIGN1cnJlbnRXaWR0aCA+PSBwb2ludFswXSkgcmV0dXJuIE1hdGgubWF4KGkgLSAxLCAwKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQubGVuZ3RoO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQgPSAoaW5wdXQsIGNsaWVudCkgPT4ge1xuXHRjb25zdCBib3ggPSBpbnB1dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Y29uc3QgcG9pbnQgPSBbY2xpZW50WzBdIC0gYm94LmxlZnQgLyB1bmZpeGVkQ2xpZW50Wm9vbSgpLCBjbGllbnRbMV0gLSBib3gudG9wIC8gdW5maXhlZENsaWVudFpvb20oKV07XG5cdHJldHVybiBjb21wdXRlQ2FyZXRQb3NpdGlvbihpbnB1dCwgcG9pbnQpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0xhdW5jaGVyR3JpZC50c1xudmFyIHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50ID0gKGVsLCBsYXlvdXRPdmVycmlkZSkgPT4ge1xuXHRjb25zdCBjID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLWNvbHVtbnNcIikgfHwgXCJcIiwgMTApO1xuXHRjb25zdCByID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLXJvd3NcIikgfHwgXCJcIiwgMTApO1xuXHRjb25zdCBiYXNlID0gbm9ybWFsaXplR3JpZExheW91dChsYXlvdXRPdmVycmlkZSA/PyBbNCwgOF0pO1xuXHRyZXR1cm4gW051bWJlci5pc0Zpbml0ZShjKSAmJiBjID4gMCA/IGMgOiBiYXNlWzBdLCBOdW1iZXIuaXNGaW5pdGUocikgJiYgciA+IDAgPyByIDogYmFzZVsxXV07XG59O1xudmFyIHJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCA9IChncmlkU3lzdGVtLCBjbGllbnRQb2ludCwgYXJncywgbW9kZSA9IFwiZmxvb3JcIikgPT4ge1xuXHRpZiAoIWdyaWRTeXN0ZW0pIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IHJlY3QgPSBncmlkU3lzdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XG5cdGlmICghcmVjdCkgcmV0dXJuIFswLCAwXTtcblx0Y29uc3QgbGF5b3V0ID0gcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQoZ3JpZFN5c3RlbSwgYXJncz8ubGF5b3V0KTtcblx0Y29uc3Qgb3JpZW50ID0gb3JpZW50T2YoZ3JpZFN5c3RlbSk7XG5cdGNvbnN0IGNzID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oZ3JpZFN5c3RlbSk7XG5cdGNvbnN0IHBsID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ0xlZnQpIHx8IDA7XG5cdGNvbnN0IHB0ID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1RvcCkgfHwgMDtcblx0Y29uc3QgcHIgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nUmlnaHQpIHx8IDA7XG5cdGNvbnN0IHBiID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ0JvdHRvbSkgfHwgMDtcblx0Y29uc3QgY29udGVudFcgPSBNYXRoLm1heCgxLCAocmVjdC53aWR0aCB8fCBncmlkU3lzdGVtLmNsaWVudFdpZHRoIHx8IDEpIC0gcGwgLSBwcik7XG5cdGNvbnN0IGNvbnRlbnRIID0gTWF0aC5tYXgoMSwgKHJlY3QuaGVpZ2h0IHx8IGdyaWRTeXN0ZW0uY2xpZW50SGVpZ2h0IHx8IDEpIC0gcHQgLSBwYik7XG5cdGNvbnN0IGNzQ29vcmQgPSBbKGNsaWVudFBvaW50Py5bMF0gfHwgMCkgLSByZWN0LmxlZnQgLSBwbCwgKGNsaWVudFBvaW50Py5bMV0gfHwgMCkgLSByZWN0LnRvcCAtIHB0XTtcblx0cmV0dXJuIHJlc29sdmVMb2NhbFBvaW50VG9HcmlkQ2VsbChjc0Nvb3JkLCBbY29udGVudFcsIGNvbnRlbnRIXSwgbGF5b3V0LCBvcmllbnQsIHtcblx0XHRtb2RlLFxuXHRcdHJlZGlyZWN0OiB7XG5cdFx0XHRpdGVtOiBhcmdzPy5pdGVtLFxuXHRcdFx0bGlzdDogYXJncz8ubGlzdCxcblx0XHRcdGl0ZW1zOiBhcmdzPy5pdGVtc1xuXHRcdH1cblx0fSk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvQW5pbWF0aW9uLnRzXG52YXIgYW5pbWF0ZVNob3cgPSAodGFyZ2V0KSA9PiBhcHBlYXIodGFyZ2V0LCBkZWNvclNob3cpO1xudmFyIGFuaW1hdGVIaWRlID0gKHRhcmdldCkgPT4gZGlzYXBwZWFyKHRhcmdldCwgZGVjb3JIaWRlKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL1NoYXBlLnRzXG52YXIgV2F2eVNoYXBlZENpcmNsZSA9IChzdGVwcyA9IDEwMCwgYW1wbGl0dWRlID0gLjA1LCBmcmVxID0gOCkgPT4ge1xuXHRjb25zdCBwb2ludHMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSsrKSBwb2ludHMucHVzaChpIC8gc3RlcHMpO1xuXHRjb25zdCBhbmdsZSA9IChzdGVwKSA9PiB7XG5cdFx0cmV0dXJuIGBjYWxjKCR7c3RlcH1yYWQgKiBwaSAqIDIpYDtcblx0fTtcblx0Y29uc3QgdmFyaWFudCA9IChzdGVwKSA9PiB7XG5cdFx0cmV0dXJuIGBjYWxjKGNhbGMoY29zKGNhbGModmFyKC0tY2xpcC1mcmVxLCA4KSAqICR7YW5nbGUoc3RlcCl9KSkgKiAwLjUgKyAwLjUpICogdmFyKC0tY2xpcC1hbXBsaXR1ZGUsIDApKWA7XG5cdH07XG5cdGNvbnN0IGZ1bmMgPSAoc3RlcCkgPT4gW2BjYWxjKGNhbGMoMC41ICsgY2FsYyhjb3MoJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgLCBgY2FsYyhjYWxjKDAuNSArIGNhbGMoc2luKCR7YW5nbGUoc3RlcCl9KSAqIGNhbGMoMC41IC0gJHt2YXJpYW50KHN0ZXApfSkpKSAqIHZhcigtLWljb24tc2l6ZSwgMTAwJSkpYF07XG5cdHJldHVybiB7XG5cdFx0XCItLWNsaXAtYW1wbGl0dWRlXCI6IGFtcGxpdHVkZSxcblx0XHRcIi0tY2xpcC1mcmVxXCI6IGZyZXEsXG5cdFx0XCItLWNsaXAtcGF0aFwiOiBgcG9seWdvbigke3BvaW50cy5tYXAoKHN0ZXApID0+IHtcblx0XHRcdHJldHVybiBmdW5jKHN0ZXApLmpvaW4oXCIgXCIpO1xuXHRcdH0pLmpvaW4oXCIsIFwiKX0pYFxuXHR9O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL09ic2VydmVyLnRzXG52YXIgb25Cb3JkZXJPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkJvcmRlck9ic2VydmVcIik7XG52YXIgb25Cb3JkZXJPYnNlcnZlJDEgPSBnbG9iYWxUaGlzW29uQm9yZGVyT2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9uQ29udGVudE9ic2VydmVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQ29udGVudE9ic2VydmVcIik7XG52YXIgb25Db250ZW50T2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkNvbnRlbnRPYnNlcnZlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdW53cmFwRnJvbVF1ZXJ5ID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5jdXJyZW50ID09IFwib2JqZWN0XCIpIGVsZW1lbnQgPSBlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQ/LmN1cnJlbnQgPz8gKHR5cGVvZiBlbGVtZW50Py5zZWxmID09IFwib2JqZWN0XCIgPyBlbGVtZW50Py5zZWxmIDogbnVsbCkgPz8gZWxlbWVudDtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIG5vcm1hbGl6ZVNlbGVjdG9yID0gKHNlbGVjdG9yLCBmYWxsYmFjayA9IFwiKlwiKSA9PiB7XG5cdGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxsYmFjaztcblx0cmV0dXJuIHNlbGVjdG9yLnRyaW0oKSB8fCBmYWxsYmFjaztcbn07XG52YXIgc2FmZVF1ZXJ5U2VsZWN0b3JBbGwgPSAoZWwsIHNlbGVjdG9yKSA9PiB7XG5cdGlmICghZWwgfHwgdHlwZW9mIGVsLnF1ZXJ5U2VsZWN0b3JBbGwgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFtdO1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3RvciwgXCJcIik7XG5cdGlmICghc2VsKSByZXR1cm4gW107XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbChzZWwpIHx8IFtdKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59O1xudmFyIHNhZmVNYXRjaGVzID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuXHRpZiAoIWVsIHx8IHR5cGVvZiBlbC5tYXRjaGVzICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IsIFwiXCIpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGZhbHNlO1xuXHR0cnkge1xuXHRcdHJldHVybiAhIWVsLm1hdGNoZXMoc2VsKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIG9ic2VydmVDb250ZW50Qm94ID0gKGVsZW1lbnQsIGNiKSA9PiB7XG5cdGlmICghb25Db250ZW50T2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihjb250ZW50Qm94U2l6ZSwgb2JzZXJ2ZXIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYj8uKHtcblx0XHRcdGlubGluZVNpemU6IGVsZW1lbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRibG9ja1NpemU6IGVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdG9uQ29udGVudE9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxuXHRvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5wdXNoPy4oY2IpO1xuXHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUJvcmRlckJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQm9yZGVyT2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5ib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGJvcmRlckJveFNpemUgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoYm9yZGVyQm94U2l6ZSkgY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYj8uKGJvcmRlckJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50Lm9mZnNldEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkJvcmRlck9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiYm9yZGVyLWJveFwiIH0pO1xuXHR9XG5cdG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LmluZGV4T2YoY2IpIHx8IC0xLCAxKSB9O1xufTtcbnZhciBvYnNlcnZlQXR0cmlidXRlID0gKGVsZW1lbnQsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5zZWxlY3RvciA9PSBcInN0cmluZ1wiKSByZXR1cm4gb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IoZWxlbWVudCwgZWxlbWVudD8uc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldCgoYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXSkubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XVxuXHR9KTtcblx0YXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IGNiKHtcblx0XHR0YXJnZXQ6IGVsZW1lbnQsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdG9sZFZhbHVlOiBlbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSk7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IgPSAoZWxlbWVudCwgc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldChbLi4uYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXV0ubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGFkZGVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0Y29uc3QgcmVtb3ZlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0YWRkZWROb2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0XHRyZW1vdmVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0XHRbLi4ubmV3IFNldChhZGRlZE5vZGVzKV0uZmlsdGVyKChlbCkgPT4gc2FmZU1hdGNoZXMoZWwsIHNlbCkpPy5tYXA/LigodGFyZ2V0KSA9PiB7XG5cdFx0XHRcdGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRhcmdldD8ucGFyZW50Tm9kZSA/PyB0YXJnZXQ/Lmhvc3QgPz8gdGFyZ2V0Py5nZXRSb290Tm9kZT8uKCkpIGNiKHtcblx0XHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHRcdFx0XHRcdH0sIG9ic2VydmVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKHNhZmVNYXRjaGVzKG11dGF0aW9uLnRhcmdldCwgc2VsKSAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlXG5cdH0pO1xuXHRzYWZlUXVlcnlTZWxlY3RvckFsbChlbGVtZW50LCBzZWwpLm1hcCgodGFyZ2V0KSA9PiBhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gY2Ioe1xuXHRcdHRhcmdldCxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcbnZhciBvYnNlcnZlQnlTZWxlY3RvciA9IChlbGVtZW50LCBzZWxlY3RvciA9IFwiKlwiLCBjYiA9IChtdXQsIG9icykgPT4ge30pID0+IHtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRjb25zdCB1bndyYXBOb2Rlc0J5U2VsZWN0b3IgPSAobm9kZXMpID0+IHtcblx0XHRjb25zdCAkbm9kZXMgPSBBcnJheS5mcm9tKG5vZGVzIHx8IFtdKSB8fCBbXTtcblx0XHQkbm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRyZXR1cm4gWy4uLkFycmF5LmZyb20obmV3IFNldCgkbm9kZXMpLnZhbHVlcygpKV0uZmlsdGVyKChlbCkgPT4gc2FmZU1hdGNoZXMoZWwsIHNlbCkpO1xuXHR9O1xuXHRsZXQgb2JSZWYgPSBudWxsO1xuXHRjb25zdCBoYW5kbGVNdXRhdGlvbiA9IChtdXRhdGlvbikgPT4ge1xuXHRcdGNvbnN0IG9ic2VydmVyID0gb2JSZWY/LmRlcmVmPy4oKTtcblx0XHRjb25zdCBhZGRlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuXHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuXHRcdGlmIChhZGRlZE5vZGVzLmxlbmd0aCA+IDAgfHwgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdFx0dHlwZTogbXV0YXRpb24udHlwZSxcblx0XHRcdHRhcmdldDogbXV0YXRpb24udGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IG11dGF0aW9uLm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IG11dGF0aW9uLm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiBtdXRhdGlvbi5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzLFxuXHRcdFx0cmVtb3ZlZE5vZGVzXG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlT3V0Q29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUZvY3VzQ2xpY2sgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBmYWN0b3JzID0ge1xuXHRcdHBhc3NpdmU6IHRydWUsXG5cdFx0Y2FwdHVyZTogZmFsc2Vcblx0fTtcblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXNcIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtdmlzaWJsZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikgaGFuZGxlTXV0YXRpb24obXV0YXRpb24pO1xuXHR9KTtcblx0b2JSZWYgPSBuZXcgV2Vha1JlZihvYnNlcnZlcik7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlXG5cdH0pO1xuXHRjb25zdCBzZWxlY3RlZCA9IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQsIHNlbCk7XG5cdGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSBjYj8uKHtcblx0XHRhZGRlZE5vZGVzOiBzZWxlY3RlZCxcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIG9ic2VydmVyKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0JlaGF2aW9yLnRzXG52YXIgYm91bmRCZWhhdmlvcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiaW5kQmVoYXZpb3IgPSAoZWxlbWVudCwgYmVoU2V0LCBiZWhhdmlvcikgPT4ge1xuXHRuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFiZWhTZXQuaGFzKGJlaGF2aW9yKSkgYmVoU2V0LmFkZChiZWhhdmlvcik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciByZWZsZWN0QmVoYXZpb3JzID0gKGVsZW1lbnQsIGJlaGF2aW9ycykgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0aWYgKGJlaGF2aW9ycykge1xuXHRcdGNvbnN0IGJlaFNldCA9IGJvdW5kQmVoYXZpb3JzLmdldE9ySW5zZXJ0KGVsZW1lbnQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuXHRcdFsuLi5iZWhhdmlvcnM/LnZhbHVlcz8uKCkgfHwgW11dLm1hcCgoZSkgPT4gYmluZEJlaGF2aW9yKGVsZW1lbnQsIGJlaFNldCwgZSkpO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL1N0b3JlLnRzXG52YXIgbmFtZWRTdG9yZU1hcHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG5hbWVkU3RvcmVNYXBzXCIpO1xudmFyIG5hbWVkU3RvcmVNYXBzID0gZ2xvYmFsVGhpc1tuYW1lZFN0b3JlTWFwc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZ2V0U3RvcmVzT2ZFbGVtZW50ID0gKG1hcCwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCBFID0gWy4uLm1hcC5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChFPy5tYXA/LigoW24sIG1dKSA9PiBbbiwgbT8uZ2V0Py4oZWxlbWVudCldKT8uZmlsdGVyPy4oKFtuLCBlXSkgPT4gISFlKSB8fCBbXSk7XG59O1xudmFyIGlzV2Vha0NvbXBhdGlibGUgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKHR5cGVvZiBlbGVtZW50ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGVsZW1lbnQgPT0gXCJmdW5jdGlvblwiKSAmJiBlbGVtZW50ICE9IG51bGw7XG59O1xudmFyIGJpbmRTdG9yZSA9IChlbGVtZW50LCBuYW1lLCBvYmopID0+IHtcblx0aWYgKCFpc1dlYWtDb21wYXRpYmxlKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgcmV0dXJuIGVsZW1lbnQ7XG5cdGxldCB3ZWFrTWFwID0gbmFtZWRTdG9yZU1hcHMuZ2V0KG5hbWUpO1xuXHRpZiAoIXdlYWtNYXApIHtcblx0XHR3ZWFrTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdFx0bmFtZWRTdG9yZU1hcHMuc2V0KG5hbWUsIHdlYWtNYXApO1xuXHR9XG5cdGlmICghd2Vha01hcC5oYXMoZWxlbWVudCkgJiYgZWxlbWVudCAhPSBudWxsKSB3ZWFrTWFwLnNldChlbGVtZW50LCBvYmopO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdFN0b3JlcyA9IChlbGVtZW50LCBzdG9yZXMpID0+IHtcblx0aWYgKCFlbGVtZW50IHx8ICFzdG9yZXMpIHJldHVybjtcblx0Zm9yIChjb25zdCBbbmFtZSwgb2JqXSBvZiBzdG9yZXMuZW50cmllcygpKSBiaW5kU3RvcmUoZWxlbWVudCwgbmFtZSwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vTWl4aW5zLnRzXG52YXIgZ2xvYmFscyA9IGdsb2JhbFRoaXM7XG5mdW5jdGlvbiBzaGFyZWQoa2V5LCBjcmVhdGUpIHtcblx0Y29uc3Qgc3ltYm9sID0gU3ltYm9sLmZvcihrZXkpO1xuXHRyZXR1cm4gZ2xvYmFsc1tzeW1ib2xdID8/PSBjcmVhdGUoKTtcbn1cbmZ1bmN0aW9uIGhhc0RPTSgpIHtcblx0cmV0dXJuIHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgQXR0ciAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gXCJ1bmRlZmluZWRcIjtcbn1cbmZ1bmN0aW9uIHJlcXVpcmVET00oKSB7XG5cdGlmICghaGFzRE9NKCkpIHRocm93IG5ldyBFcnJvcihcIkN1c3RvbSBBdHRyaWJ1dGVzIHJlcXVpcmUgYSBicm93c2VyIERPTS5cIik7XG59XG5mdW5jdGlvbiByZXBvcnQoZXJyb3IpIHtcblx0Y29uc3QgZm4gPSBnbG9iYWxzLnJlcG9ydEVycm9yO1xuXHRpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIGZuLmNhbGwoZ2xvYmFsVGhpcywgZXJyb3IpO1xuXHRlbHNlIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xufVxuZnVuY3Rpb24gc2FmZShjYWxsYmFjaykge1xuXHR0cnkge1xuXHRcdHJldHVybiBjYWxsYmFjaygpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcG9ydChlcnJvcik7XG5cdFx0cmV0dXJuO1xuXHR9XG59XG5mdW5jdGlvbiBkb21FcnJvcihtZXNzYWdlLCBuYW1lKSB7XG5cdHJldHVybiBuZXcgRE9NRXhjZXB0aW9uKG1lc3NhZ2UsIG5hbWUpO1xufVxuZnVuY3Rpb24gaXNWYWxpZEN1c3RvbUF0dHJpYnV0ZU5hbWUobmFtZSkge1xuXHRyZXR1cm4gL15bYS16XVteQS1aXFx0XFxuXFxmXFxyIFxcMC89Pl0qJC8udGVzdChuYW1lKSAmJiBuYW1lLmluY2x1ZGVzKFwiLVwiKSAmJiAhL14oYXJpYS18ZGF0YS18eG1sfHhsaW5rKS8udGVzdChuYW1lKSAmJiBuYW1lICE9PSBcImFjY2VwdC1jaGFyc2V0XCIgJiYgbmFtZSAhPT0gXCJodHRwLWVxdWl2XCI7XG59XG5mdW5jdGlvbiBhc3NlcnRBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcblx0aWYgKCFpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlTmFtZShuYW1lKSkgdGhyb3cgZG9tRXJyb3IoYEludmFsaWQgY3VzdG9tIGF0dHJpYnV0ZSBuYW1lOiAke25hbWV9YCwgXCJTeW50YXhFcnJvclwiKTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudCQxKG5vZGUpIHtcblx0cmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IDE7XG59XG5mdW5jdGlvbiBpc0hUTUwoZWxlbWVudCkge1xuXHRyZXR1cm4gZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xufVxuZnVuY3Rpb24gaXNTaGFkb3cobm9kZSkge1xuXHRyZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gMTEgJiYgXCJob3N0XCIgaW4gbm9kZTtcbn1cbnZhciBib3VuZE1peGluU2V0ID0gc2hhcmVkKFwiZG9tLnRzQGJvdW5kTWl4aW5TZXRcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCkpO1xudmFyIG1peGluRWxlbWVudHMgPSBzaGFyZWQoXCJkb20udHNAbWl4aW5FbGVtZW50c1wiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSk7XG52YXIgbWl4aW5SZWdpc3RyeSA9IHNoYXJlZChcImRvbS50c0BtaXhpblJlZ2lzdHJ5XCIsICgpID0+IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xudmFyIG1peGluTmFtZXNwYWNlID0gc2hhcmVkKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIsICgpID0+IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpKTtcbnZhciBlbmdpbmUgPSBzaGFyZWQoXCJkb20udHNAbWl4aW5zMi5lbmdpbmVcIiwgKCkgPT4gKHtcblx0YmluZGluZ3M6IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLFxuXHRyb290czogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSxcblx0d2F0Y2hlczogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSxcblx0cGVuZGluZzogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSxcblx0cXVldWVkOiBmYWxzZSxcblx0ZGF0YVNvdXJjZTogU3ltYm9sKFwiZGF0YS1taXhpblwiKSxcblx0bWFudWFsU291cmNlOiBTeW1ib2woXCJtYW51YWxcIiksXG5cdGNsb3NlZFNoYWRvd3M6IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLFxuXHRwcm9jZXNzaW5nOiBmYWxzZVxufSkpO1xudmFyIHJvb3RzID0gZW5naW5lLnJvb3RzO1xuZnVuY3Rpb24gc2hhZG93T2YoZWxlbWVudCkge1xuXHRyZXR1cm4gZWxlbWVudC5zaGFkb3dSb290ID8/IGVuZ2luZS5jbG9zZWRTaGFkb3dzLmdldChlbGVtZW50KSA/PyBudWxsO1xufVxuZnVuY3Rpb24qIGVsZW1lbnRzSW4ocm9vdCkge1xuXHRjb25zdCBzdGFjayA9IFtyb290XTtcblx0d2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuXHRcdGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKTtcblx0XHRpZiAoaXNFbGVtZW50JDEobm9kZSkpIHlpZWxkIG5vZGU7XG5cdFx0Zm9yIChsZXQgY2hpbGQgPSBub2RlLmxhc3RDaGlsZDsgY2hpbGQ7IGNoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nKSBzdGFjay5wdXNoKGNoaWxkKTtcblx0XHRpZiAoaXNFbGVtZW50JDEobm9kZSkpIHtcblx0XHRcdGNvbnN0IHNoYWRvdyA9IHNoYWRvd09mKG5vZGUpO1xuXHRcdFx0aWYgKHNoYWRvdykgc3RhY2sucHVzaChzaGFkb3cpO1xuXHRcdH1cblx0fVxufVxuZnVuY3Rpb24qIGxpZ2h0RWxlbWVudHNJbihyb290KSB7XG5cdGNvbnN0IHN0YWNrID0gW3Jvb3RdO1xuXHR3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpO1xuXHRcdGlmIChpc0VsZW1lbnQkMShub2RlKSkgeWllbGQgbm9kZTtcblx0XHRmb3IgKGxldCBjaGlsZCA9IG5vZGUubGFzdENoaWxkOyBjaGlsZDsgY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpIHN0YWNrLnB1c2goY2hpbGQpO1xuXHR9XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVzRm9yKGJpbmRpbmcpIHtcblx0Y29uc3QgcmVzdWx0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0Zm9yIChjb25zdCBzb3VyY2Ugb2YgYmluZGluZz8uc291cmNlcyA/PyBbXSkgaWYgKHR5cGVvZiBzb3VyY2UgPT09IFwib2JqZWN0XCIgJiYgc291cmNlLm5vZGVUeXBlID09PSAyKSByZXN1bHQuYWRkKHNvdXJjZSk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50LCBtaXhpbiwgYXR0cmlidXRlKSB7XG5cdGNvbnN0IGJpbmRpbmcgPSBtaXhpbiA/IGVuZ2luZS5iaW5kaW5ncy5nZXQoZWxlbWVudCk/LmdldChtaXhpbikgOiB2b2lkIDA7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzRm9yKGJpbmRpbmcpO1xuXHRhdHRyaWJ1dGUgPz89IGF0dHJpYnV0ZXMudmFsdWVzKCkubmV4dCgpLnZhbHVlID8/IGJpbmRpbmc/Lmxhc3RBdHRyaWJ1dGU7XG5cdHJldHVybiB7XG5cdFx0c3RvcmVTZXQ6IGdldFN0b3Jlc09mRWxlbWVudChuYW1lZFN0b3JlTWFwcywgZWxlbWVudCksXG5cdFx0bWl4aW5TZXQ6IGJvdW5kTWl4aW5TZXQuZ2V0KGVsZW1lbnQpLFxuXHRcdGJlaGF2aW9yU2V0OiBib3VuZEJlaGF2aW9ycy5nZXQoZWxlbWVudCksXG5cdFx0YXR0cmlidXRlLFxuXHRcdGF0dHJpYnV0ZXMsXG5cdFx0dmFsdWU6IGF0dHJpYnV0ZT8udmFsdWUsXG5cdFx0c2lnbmFsOiBiaW5kaW5nPy5jb250cm9sbGVyPy5zaWduYWxcblx0fTtcbn1cbmZ1bmN0aW9uIGJpbmRpbmdGb3IoZWxlbWVudCwgbWl4aW4pIHtcblx0bGV0IG1hcCA9IGVuZ2luZS5iaW5kaW5ncy5nZXQoZWxlbWVudCk7XG5cdGlmICghbWFwKSBlbmdpbmUuYmluZGluZ3Muc2V0KGVsZW1lbnQsIG1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuXHRsZXQgYmluZGluZyA9IG1hcC5nZXQobWl4aW4pO1xuXHRpZiAoIWJpbmRpbmcpIG1hcC5zZXQobWl4aW4sIGJpbmRpbmcgPSB7XG5cdFx0c291cmNlczogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSxcblx0XHRjb25uZWN0ZWQ6IGZhbHNlLFxuXHRcdGRvY3VtZW50OiBlbGVtZW50Lm93bmVyRG9jdW1lbnQsXG5cdFx0cmVjb25jaWxpbmc6IGZhbHNlLFxuXHRcdGRpcnR5OiBmYWxzZVxuXHR9KTtcblx0cmV0dXJuIGJpbmRpbmc7XG59XG5mdW5jdGlvbiBjYWxsTWl4aW4oZWxlbWVudCwgbWl4aW4sIG5hbWUsIGF0dHJpYnV0ZSwgLi4uZXh0cmEpIHtcblx0Y29uc3QgY2FsbGJhY2sgPSBtaXhpbltuYW1lXTtcblx0aWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdHJldHVybiBzYWZlKCgpID0+IFJlZmxlY3QuYXBwbHkoY2FsbGJhY2ssIG1peGluLCBbXG5cdFx0bmV3IFdlYWtSZWYoZWxlbWVudCksXG5cdFx0bWl4aW4sXG5cdFx0Z2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCwgbWl4aW4sIGF0dHJpYnV0ZSksXG5cdFx0Li4uZXh0cmFcblx0XSkpO1xufVxuZnVuY3Rpb24gcmVjb25jaWxlQmluZGluZyhlbGVtZW50LCBtaXhpbiwgYmluZGluZykge1xuXHRpZiAoYmluZGluZy5yZWNvbmNpbGluZykge1xuXHRcdGJpbmRpbmcuZGlydHkgPSB0cnVlO1xuXHRcdHJldHVybjtcblx0fVxuXHRiaW5kaW5nLnJlY29uY2lsaW5nID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRmb3IgKGxldCB0dXJuID0gMDsgdHVybiA8IDMyOyB0dXJuKyspIHtcblx0XHRcdGJpbmRpbmcuZGlydHkgPSBmYWxzZTtcblx0XHRcdGNvbnN0IG9sZERvY3VtZW50ID0gYmluZGluZy5kb2N1bWVudDtcblx0XHRcdGJpbmRpbmcuZG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG5cdFx0XHRpZiAob2xkRG9jdW1lbnQgIT09IGJpbmRpbmcuZG9jdW1lbnQpIGNhbGxNaXhpbihlbGVtZW50LCBtaXhpbiwgXCJhZG9wdGVkQ2FsbGJhY2tcIiwgdm9pZCAwLCBvbGREb2N1bWVudCwgYmluZGluZy5kb2N1bWVudCk7XG5cdFx0XHRjb25zdCB3YW50ZWQgPSBiaW5kaW5nLnNvdXJjZXMuc2l6ZSA+IDAgJiYgZWxlbWVudC5pc0Nvbm5lY3RlZDtcblx0XHRcdGlmICh3YW50ZWQgIT09IGJpbmRpbmcuY29ubmVjdGVkKSB7XG5cdFx0XHRcdGJpbmRpbmcuY29ubmVjdGVkID0gd2FudGVkO1xuXHRcdFx0XHRsZXQgc2V0ID0gYm91bmRNaXhpblNldC5nZXQoZWxlbWVudCk7XG5cdFx0XHRcdGlmICghc2V0KSBib3VuZE1peGluU2V0LnNldChlbGVtZW50LCBzZXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKSk7XG5cdFx0XHRcdGxldCBlbGVtZW50cyA9IG1peGluRWxlbWVudHMuZ2V0KG1peGluKTtcblx0XHRcdFx0aWYgKCFlbGVtZW50cykgbWl4aW5FbGVtZW50cy5zZXQobWl4aW4sIGVsZW1lbnRzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpO1xuXHRcdFx0XHRpZiAod2FudGVkKSB7XG5cdFx0XHRcdFx0c2V0LmFkZChtaXhpbik7XG5cdFx0XHRcdFx0ZWxlbWVudHMuYWRkKGVsZW1lbnQpO1xuXHRcdFx0XHRcdGJpbmRpbmcuY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0XHRcdFx0XHRjb25zdCBjbGVhbnVwID0gY2FsbE1peGluKGVsZW1lbnQsIG1peGluLCBcImNvbm5lY3RcIik7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjbGVhbnVwID09PSBcImZ1bmN0aW9uXCIpIGJpbmRpbmcuY2xlYW51cCA9IGNsZWFudXA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2V0LmRlbGV0ZShtaXhpbik7XG5cdFx0XHRcdFx0ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuXHRcdFx0XHRcdGNvbnN0IGNsZWFudXAgPSBiaW5kaW5nLmNsZWFudXA7XG5cdFx0XHRcdFx0YmluZGluZy5jbGVhbnVwID0gdm9pZCAwO1xuXHRcdFx0XHRcdHNhZmUoKCkgPT4gYmluZGluZy5jb250cm9sbGVyPy5hYm9ydCgpKTtcblx0XHRcdFx0XHRpZiAoY2xlYW51cCkgc2FmZShjbGVhbnVwKTtcblx0XHRcdFx0XHRjYWxsTWl4aW4oZWxlbWVudCwgbWl4aW4sIFwiZGlzY29ubmVjdFwiKTtcblx0XHRcdFx0XHRiaW5kaW5nLmNvbnRyb2xsZXIgPSB2b2lkIDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghYmluZGluZy5kaXJ0eSkgYnJlYWs7XG5cdFx0XHRpZiAodHVybiA9PT0gMzEpIHtcblx0XHRcdFx0cmVwb3J0KC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJBIG1peGluIHJlcGVhdGVkbHkgY2hhbmdlZCBpdHMgb3duIGJpbmRpbmcgZHVyaW5nIGxpZmVjeWNsZSBkZWxpdmVyeS5cIikpO1xuXHRcdFx0XHRlbnF1ZXVlKGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBmaW5hbGx5IHtcblx0XHRiaW5kaW5nLnJlY29uY2lsaW5nID0gZmFsc2U7XG5cdH1cblx0aWYgKCFiaW5kaW5nLnNvdXJjZXMuc2l6ZSAmJiAhYmluZGluZy5jb25uZWN0ZWQpIGVuZ2luZS5iaW5kaW5ncy5nZXQoZWxlbWVudCk/LmRlbGV0ZShtaXhpbik7XG59XG5mdW5jdGlvbiBhY3F1aXJlKGVsZW1lbnQsIG1peGluLCBzb3VyY2UpIHtcblx0Y29uc3QgYmluZGluZyA9IGJpbmRpbmdGb3IoZWxlbWVudCwgbWl4aW4pO1xuXHRiaW5kaW5nLnNvdXJjZXMuYWRkKHNvdXJjZSk7XG5cdGlmICh0eXBlb2Ygc291cmNlID09PSBcIm9iamVjdFwiICYmIHNvdXJjZS5ub2RlVHlwZSA9PT0gMikgYmluZGluZy5sYXN0QXR0cmlidXRlID0gc291cmNlO1xuXHRyZWNvbmNpbGVCaW5kaW5nKGVsZW1lbnQsIG1peGluLCBiaW5kaW5nKTtcbn1cbmZ1bmN0aW9uIHJlbGVhc2UoZWxlbWVudCwgbWl4aW4sIHNvdXJjZSkge1xuXHRjb25zdCBiaW5kaW5nID0gZW5naW5lLmJpbmRpbmdzLmdldChlbGVtZW50KT8uZ2V0KG1peGluKTtcblx0aWYgKCFiaW5kaW5nKSByZXR1cm47XG5cdGJpbmRpbmcuc291cmNlcy5kZWxldGUoc291cmNlKTtcblx0cmVjb25jaWxlQmluZGluZyhlbGVtZW50LCBtaXhpbiwgYmluZGluZyk7XG59XG5mdW5jdGlvbiBlbnF1ZXVlKGVsZW1lbnQpIHtcblx0ZW5naW5lLnBlbmRpbmcuYWRkKGVsZW1lbnQpO1xuXHRpZiAoIWVuZ2luZS5xdWV1ZWQpIHtcblx0XHRlbmdpbmUucXVldWVkID0gdHJ1ZTtcblx0XHRxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG5cdFx0XHRlbmdpbmUucXVldWVkID0gZmFsc2U7XG5cdFx0XHRkcmFpblBlbmRpbmcoKTtcblx0XHR9KTtcblx0fVxufVxuZnVuY3Rpb24gZHJhaW5QZW5kaW5nKCkge1xuXHRpZiAoZW5naW5lLnByb2Nlc3NpbmcpIHJldHVybjtcblx0ZW5naW5lLnByb2Nlc3NpbmcgPSB0cnVlO1xuXHR0cnkge1xuXHRcdGNvbnN0IHBlbmRpbmcgPSBbLi4uZW5naW5lLnBlbmRpbmddO1xuXHRcdGVuZ2luZS5wZW5kaW5nLmNsZWFyKCk7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHBlbmRpbmcpIHNhZmUoKCkgPT4gdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpKTtcblx0fSBmaW5hbGx5IHtcblx0XHRlbmdpbmUucHJvY2Vzc2luZyA9IGZhbHNlO1xuXHR9XG59XG5mdW5jdGlvbiBkYXRhTmFtZXMoZWxlbWVudCkge1xuXHRyZXR1cm4gbmV3IFNldCgoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1peGluXCIpID8/IFwiXCIpLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pKTtcbn1cbmZ1bmN0aW9uIHdyaXRlRGF0YU5hbWVzKGVsZW1lbnQsIG5hbWVzKSB7XG5cdGNvbnN0IG5leHQgPSBbLi4ubmFtZXNdLmpvaW4oXCIgXCIpO1xuXHRpZiAobmV4dCkge1xuXHRcdGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWl4aW5cIikgIT09IG5leHQpIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1taXhpblwiLCBuZXh0KTtcblx0fSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtbWl4aW5cIikpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1taXhpblwiKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUFsbE1peGlucyhlbGVtZW50KSB7XG5cdGNvbnN0IHNlbGVjdGVkID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0Zm9yIChjb25zdCBuYW1lIG9mIGRhdGFOYW1lcyhlbGVtZW50KSkge1xuXHRcdGNvbnN0IG1peGluID0gbWl4aW5SZWdpc3RyeS5nZXQobmFtZSk7XG5cdFx0aWYgKG1peGluKSBzZWxlY3RlZC5hZGQobWl4aW4pO1xuXHR9XG5cdGZvciAoY29uc3QgW21peGluLCBiaW5kaW5nXSBvZiBbLi4uZW5naW5lLmJpbmRpbmdzLmdldChlbGVtZW50KSA/PyBbXV0pIGlmIChiaW5kaW5nLnNvdXJjZXMuaGFzKGVuZ2luZS5kYXRhU291cmNlKSAmJiAhc2VsZWN0ZWQuaGFzKG1peGluKSkgcmVsZWFzZShlbGVtZW50LCBtaXhpbiwgZW5naW5lLmRhdGFTb3VyY2UpO1xuXHRmb3IgKGNvbnN0IG1peGluIG9mIHNlbGVjdGVkKSBhY3F1aXJlKGVsZW1lbnQsIG1peGluLCBlbmdpbmUuZGF0YVNvdXJjZSk7XG5cdGZvciAoY29uc3QgW21peGluLCBiaW5kaW5nXSBvZiBbLi4uZW5naW5lLmJpbmRpbmdzLmdldChlbGVtZW50KSA/PyBbXV0pIHJlY29uY2lsZUJpbmRpbmcoZWxlbWVudCwgbWl4aW4sIGJpbmRpbmcpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn1cbmZ1bmN0aW9uIHVwZGF0ZU1peGluQXR0cmlidXRlcyhlbGVtZW50LCBtaXhpbikge1xuXHRyZXR1cm4gdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsKGVsZW1lbnRzLCBtaXhpbikge1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIGlmIChtaXhpbikgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzKGVsZW1lbnQsIG1peGluKTtcblx0ZWxzZSB1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCk7XG59XG5mdW5jdGlvbiB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzKG1peGluKSB7XG5cdGZvciAoY29uc3Qgcm9vdCBvZiByb290cykgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsKGVsZW1lbnRzSW4ocm9vdCksIG1peGluKTtcbn1cbmZ1bmN0aW9uIGJpbmRNaXhpbnMoZWxlbWVudCwgbWl4aW4sIG1peFNldCkge1xuXHRpZiAobWl4U2V0ICYmICFib3VuZE1peGluU2V0LmhhcyhlbGVtZW50KSkgYm91bmRNaXhpblNldC5zZXQoZWxlbWVudCwgbWl4U2V0KTtcblx0Y29uc3QgbmFtZSA9IG1peGluTmFtZXNwYWNlLmdldChtaXhpbikgPz8gbWl4aW4ubmFtZTtcblx0aWYgKG5hbWUpIHtcblx0XHRjb25zdCBuYW1lcyA9IGRhdGFOYW1lcyhlbGVtZW50KTtcblx0XHRuYW1lcy5hZGQobmFtZSk7XG5cdFx0d3JpdGVEYXRhTmFtZXMoZWxlbWVudCwgbmFtZXMpO1xuXHR9XG5cdGFjcXVpcmUoZWxlbWVudCwgbWl4aW4sIGVuZ2luZS5tYW51YWxTb3VyY2UpO1xuXHR1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCk7XG5cdHJldHVybiBlbGVtZW50O1xufVxuZnVuY3Rpb24gdW5iaW5kTWl4aW5zKGVsZW1lbnQsIG1peGluLCByZWZsZWN0ID0gdHJ1ZSkge1xuXHRpZiAocmVmbGVjdCkge1xuXHRcdGNvbnN0IG5hbWUgPSBtaXhpbk5hbWVzcGFjZS5nZXQobWl4aW4pID8/IG1peGluLm5hbWU7XG5cdFx0aWYgKG5hbWUpIHtcblx0XHRcdGNvbnN0IG5hbWVzID0gZGF0YU5hbWVzKGVsZW1lbnQpO1xuXHRcdFx0bmFtZXMuZGVsZXRlKG5hbWUpO1xuXHRcdFx0d3JpdGVEYXRhTmFtZXMoZWxlbWVudCwgbmFtZXMpO1xuXHRcdH1cblx0fVxuXHRyZWxlYXNlKGVsZW1lbnQsIG1peGluLCBlbmdpbmUubWFudWFsU291cmNlKTtcblx0cmV0dXJuIHVwZGF0ZUFsbE1peGlucyhlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIHJlZmxlY3RNaXhpbnMoZWxlbWVudCwgbWl4aW5zKSB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuIGVsZW1lbnQ7XG5cdGNvbnN0IHZhbHVlcyA9IG1peGlucyBpbnN0YW5jZW9mIE1hcCA/IG1peGlucy52YWx1ZXMoKSA6IG1peGlucyA/PyBbXTtcblx0Zm9yIChjb25zdCBtaXhpbiBvZiB2YWx1ZXMpIGJpbmRNaXhpbnMoZWxlbWVudCwgbWl4aW4pO1xuXHRyZXR1cm4gZWxlbWVudDtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyTWl4aW4obmFtZSwgbWl4aW4pIHtcblx0Y29uc3Qga2V5ID0gbmFtZS50cmltKCk7XG5cdGlmICgha2V5IHx8IC9cXHMvLnRlc3Qoa2V5KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1peGluIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSB0b2tlbi5cIik7XG5cdGlmICghbWl4aW4gfHwgdHlwZW9mIG1peGluICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtaXhpbiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWl4aW4gbXVzdCBiZSBhbiBvYmplY3QuXCIpO1xuXHRjb25zdCBleGlzdGluZyA9IG1peGluUmVnaXN0cnkuZ2V0KGtleSk7XG5cdGlmIChleGlzdGluZyAmJiBleGlzdGluZyAhPT0gbWl4aW4pIHtcblx0XHRjb25zb2xlLmVycm9yKGBNaXhpbiBuYW1lIGFscmVhZHkgcmVnaXN0ZXJlZDogJHtrZXl9YCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHByZXZpb3VzTmFtZSA9IG1peGluTmFtZXNwYWNlLmdldChtaXhpbik7XG5cdGlmIChwcmV2aW91c05hbWUgJiYgcHJldmlvdXNOYW1lICE9PSBrZXkpIHRocm93IG5ldyBFcnJvcihgTWl4aW4gYWxyZWFkeSBuYW1lZDogJHtwcmV2aW91c05hbWV9YCk7XG5cdG1peGluUmVnaXN0cnkuc2V0KGtleSwgbWl4aW4pO1xuXHRtaXhpbk5hbWVzcGFjZS5zZXQobWl4aW4sIGtleSk7XG5cdGZvciAoY29uc3Qgcm9vdCBvZiByb290cykgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzSW4ocm9vdCkpIGVucXVldWUoZWxlbWVudCk7XG5cdHJldHVybiBtaXhpbjtcbn1cbmZ1bmN0aW9uIHVucmVnaXN0ZXJNaXhpbihuYW1lKSB7XG5cdGNvbnN0IG1peGluID0gbWl4aW5SZWdpc3RyeS5nZXQobmFtZSk7XG5cdGlmICghbWl4aW4pIHJldHVybiBmYWxzZTtcblx0bWl4aW5SZWdpc3RyeS5kZWxldGUobmFtZSk7XG5cdGlmIChtaXhpbk5hbWVzcGFjZS5nZXQobWl4aW4pID09PSBuYW1lKSBtaXhpbk5hbWVzcGFjZS5kZWxldGUobWl4aW4pO1xuXHRmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50c0luKHJvb3QpKSBlbnF1ZXVlKGVsZW1lbnQpO1xuXHRyZXR1cm4gdHJ1ZTtcbn1cbnZhciBuYW1lUmVnaXN0cnlGID0gc2hhcmVkKFwiZG9tLnRzQG1peGluczIubmFtZVJlZ2lzdHJ5RlwiLCAoKSA9PiB0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09IFwidW5kZWZpbmVkXCIgPyB2b2lkIDAgOiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKCkgPT4ge30pKTtcbmZ1bmN0aW9uIGNhcHR1cmVEaXNwb3NlcihyZXN1bHQsIGxpc3QpIHtcblx0aWYgKHR5cGVvZiByZXN1bHQgPT09IFwiZnVuY3Rpb25cIikgbGlzdC5wdXNoKHJlc3VsdCk7XG59XG5mdW5jdGlvbiByZWNvbmNpbGVUcmVlU29vbihyb290KSB7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50c0luKHJvb3QpKSB7XG5cdFx0Y29uc3Qgc2hhZG93ID0gc2hhZG93T2YoZWxlbWVudCk7XG5cdFx0aWYgKHNoYWRvdyAmJiAhcm9vdHMuaGFzKHNoYWRvdykpIGFkZFJvb3Qoc2hhZG93KTtcblx0XHRlbnF1ZXVlKGVsZW1lbnQpO1xuXHR9XG59XG5mdW5jdGlvbiBoYW5kbGVSb290UmVjb3JkcyhyZWNvcmRzKSB7XG5cdGZvciAoY29uc3QgcmVjb3JkIG9mIHJlY29yZHMpIHtcblx0XHRpZiAocmVjb3JkLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiICYmIGlzRWxlbWVudCQxKHJlY29yZC50YXJnZXQpKSBlbnF1ZXVlKHJlY29yZC50YXJnZXQpO1xuXHRcdGlmIChyZWNvcmQudHlwZSA9PT0gXCJjaGlsZExpc3RcIikge1xuXHRcdFx0Zm9yIChjb25zdCBub2RlIG9mIHJlY29yZC5yZW1vdmVkTm9kZXMpIHJlY29uY2lsZVRyZWVTb29uKG5vZGUpO1xuXHRcdFx0Zm9yIChjb25zdCBub2RlIG9mIHJlY29yZC5hZGRlZE5vZGVzKSByZWNvbmNpbGVUcmVlU29vbihub2RlKTtcblx0XHR9XG5cdH1cbn1cbmZ1bmN0aW9uIGFkZFJvb3Qocm9vdCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbCkge1xuXHRpZiAoIXJvb3QpIHJldHVybjtcblx0cmVxdWlyZURPTSgpO1xuXHRpZiAocm9vdHMuaGFzKHJvb3QpKSByZXR1cm4gcm9vdDtcblx0cm9vdHMuYWRkKHJvb3QpO1xuXHRjb25zdCBkaXNwb3NlcnMgPSBbXTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihoYW5kbGVSb290UmVjb3Jkcyk7XG5cdGVuZ2luZS53YXRjaGVzLnNldChyb290LCB7XG5cdFx0b2JzZXJ2ZXIsXG5cdFx0ZGlzcG9zZXJzXG5cdH0pO1xuXHRvYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVzOiB0cnVlXG5cdH0pO1xuXHRjYXB0dXJlRGlzcG9zZXIob2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3Iocm9vdCwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAobXV0YXRpb24pID0+IHtcblx0XHRpZiAoaXNFbGVtZW50JDEobXV0YXRpb24udGFyZ2V0KSkgZW5xdWV1ZShtdXRhdGlvbi50YXJnZXQpO1xuXHR9KSwgZGlzcG9zZXJzKTtcblx0Y2FwdHVyZURpc3Bvc2VyKG9ic2VydmVCeVNlbGVjdG9yKHJvb3QsIFwiW2RhdGEtbWl4aW5dXCIsIChtdXRhdGlvbikgPT4ge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBtdXRhdGlvbi5yZW1vdmVkTm9kZXMpIHJlY29uY2lsZVRyZWVTb29uKG5vZGUpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSByZWNvbmNpbGVUcmVlU29vbihub2RlKTtcblx0fSksIGRpc3Bvc2Vycyk7XG5cdGNhcHR1cmVEaXNwb3NlcihvYnNlcnZlU3R5bGVUcmVlKHJvb3QpLCBkaXNwb3NlcnMpO1xuXHRwb2x5ZmlsbFN0YXRlLnJ1bnRpbWU/Lm9ic2VydmVSb290KHJvb3QpO1xuXHRyZWNvbmNpbGVUcmVlU29vbihyb290KTtcblx0cmV0dXJuIHJvb3Q7XG59XG5mdW5jdGlvbiByZW1vdmVSb290KHJvb3QpIHtcblx0Y29uc3Qgd2F0Y2ggPSBlbmdpbmUud2F0Y2hlcy5nZXQocm9vdCk7XG5cdGlmICh3YXRjaCkge1xuXHRcdHdhdGNoLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRmb3IgKGNvbnN0IGRpc3Bvc2Ugb2Ygd2F0Y2guZGlzcG9zZXJzKSBzYWZlKGRpc3Bvc2UpO1xuXHRcdGVuZ2luZS53YXRjaGVzLmRlbGV0ZShyb290KTtcblx0fVxuXHRyZXR1cm4gcm9vdHMuZGVsZXRlKHJvb3QpO1xufVxudmFyIERPTU1peGluID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihuYW1lID0gbnVsbCkge1xuXHRcdGlmIChuYW1lKSByZWdpc3Rlck1peGluKG5hbWUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3QoX2VsZW1lbnQsIF9zZWxmLCBfcmVsYXRlZCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoX2VsZW1lbnQsIF9zZWxmLCBfcmVsYXRlZCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHN0b3JlRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzLmdldCh0aGlzLm5hbWUgPz8gXCJcIik/LmdldChlbGVtZW50KTtcblx0fVxuXHRyZWxhdGVkRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQsIHRoaXMpO1xuXHR9XG5cdGdldCBlbGVtZW50cygpIHtcblx0XHRyZXR1cm4gbWl4aW5FbGVtZW50cy5nZXQodGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzLmdldCh0aGlzLm5hbWUgPz8gXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIG1peGluTmFtZXNwYWNlLmdldCh0aGlzKTtcblx0fVxufTtcbnZhciBwb2x5ZmlsbFN0YXRlID0gc2hhcmVkKFwiZG9tLnRzQG1peGluczIuYXR0cmlidXRlUG9seWZpbGxcIiwgKCkgPT4gKHt9KSk7XG5mdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcblx0cmV0dXJuIHR5cGVvZiBnbG9iYWxzLkN1c3RvbUF0dHJpYnV0ZVJlZ2lzdHJ5ID09PSBcImZ1bmN0aW9uXCIgJiYgZ2xvYmFscy5jdXN0b21BdHRyaWJ1dGVzICE9IG51bGwgJiYgdHlwZW9mIGdsb2JhbHMuY3VzdG9tQXR0cmlidXRlcy5kZWZpbmUgPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzUG9seWZpbGxlZCgpIHtcblx0cmV0dXJuICEhcG9seWZpbGxTdGF0ZS5ydW50aW1lICYmIGdsb2JhbHMuQ3VzdG9tQXR0cmlidXRlUmVnaXN0cnkgPT09IHBvbHlmaWxsU3RhdGUucnVudGltZS5SZWdpc3RyeTtcbn1cbmZ1bmN0aW9uIGFwcGx5KCkge1xuXHRyZXF1aXJlRE9NKCk7XG5cdGlmIChpc1N1cHBvcnRlZCgpKSByZXR1cm4gZ2xvYmFscy5jdXN0b21BdHRyaWJ1dGVzO1xuXHRpZiAoZ2xvYmFscy5DdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSAhPSBudWxsIHx8IGdsb2JhbHMuY3VzdG9tQXR0cmlidXRlcyAhPSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJBIHBhcnRpYWwgQ3VzdG9tIEF0dHJpYnV0ZXMgQVBJIGlzIGluc3RhbGxlZDsgcmVmdXNpbmcgdG8gb3ZlcndyaXRlIGl0LlwiKTtcblx0Y29uc3QgcnVudGltZSA9IGluc3RhbGxBdHRyaWJ1dGVQb2x5ZmlsbCgpO1xuXHRwb2x5ZmlsbFN0YXRlLnJ1bnRpbWUgPSBydW50aW1lO1xuXHRmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIHJ1bnRpbWUub2JzZXJ2ZVJvb3Qocm9vdCk7XG5cdGFkZFJvb3QoZG9jdW1lbnQpO1xuXHRyZXR1cm4gcnVudGltZS5yZWdpc3RyeTtcbn1cbmZ1bmN0aW9uIGdldEN1c3RvbUF0dHJpYnV0ZXMoKSB7XG5cdHJldHVybiBhcHBseSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tQXR0cmlidXRlUmVnaXN0cnkoKSB7XG5cdGFwcGx5KCk7XG5cdHJldHVybiBuZXcgZ2xvYmFscy5DdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSgpO1xufVxuZnVuY3Rpb24gZ2V0Q3VzdG9tQXR0cmlidXRlQmFzZSgpIHtcblx0YXBwbHkoKTtcblx0cmV0dXJuIGdsb2JhbHMuQXR0cjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUF0dHJpYnV0ZShuYW1lLCBvcHRpb25zID0ge30pIHtcblx0YXBwbHkoKTtcblx0Y29uc3QgZG9jID0gb3B0aW9ucy5kb2N1bWVudCA/PyBkb2N1bWVudDtcblx0cmV0dXJuIGRvYy5jcmVhdGVBdHRyaWJ1dGUuY2FsbChkb2MsIG5hbWUsIHsgY3VzdG9tQXR0cmlidXRlUmVnaXN0cnk6IG9wdGlvbnMucmVnaXN0cnkgfSk7XG59XG5mdW5jdGlvbiBpbnN0YWxsQXR0cmlidXRlUG9seWZpbGwoKSB7XG5cdGNvbnN0IE5hdGl2ZUF0dHIgPSBnbG9iYWxzLkF0dHI7XG5cdGNvbnN0IGRvY1Byb3RvID0gRG9jdW1lbnQucHJvdG90eXBlO1xuXHRjb25zdCBlbFByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG5cdGNvbnN0IG5hdGl2ZUNyZWF0ZUF0dHJpYnV0ZSA9IGRvY1Byb3RvLmNyZWF0ZUF0dHJpYnV0ZTtcblx0Y29uc3QgbmF0aXZlQ3JlYXRlQXR0cmlidXRlTlMgPSBkb2NQcm90by5jcmVhdGVBdHRyaWJ1dGVOUztcblx0Y29uc3QgbmF0aXZlQ3JlYXRlRWxlbWVudCA9IGRvY1Byb3RvLmNyZWF0ZUVsZW1lbnQ7XG5cdGNvbnN0IG5hdGl2ZUNyZWF0ZUVsZW1lbnROUyA9IGRvY1Byb3RvLmNyZWF0ZUVsZW1lbnROUztcblx0Y29uc3QgbmF0aXZlSW1wb3J0Tm9kZSA9IGRvY1Byb3RvLmltcG9ydE5vZGU7XG5cdGNvbnN0IG5hdGl2ZUF0dGFjaFNoYWRvdyA9IGVsUHJvdG8uYXR0YWNoU2hhZG93O1xuXHRjb25zdCBhdHRyaWJ1dGVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSwgXCJhdHRyaWJ1dGVzXCIpO1xuXHRjb25zdCBuYXRpdmVBdHRyaWJ1dGVzID0gYXR0cmlidXRlRGVzY3JpcHRvci5nZXQ7XG5cdGNvbnN0IEFMUkVBRFkgPSBTeW1ib2woXCJhbHJlYWR5IGNvbnN0cnVjdGVkXCIpO1xuXHRjb25zdCBjYWxsYmFja05hbWVzID0gW1xuXHRcdFwiY29ubmVjdGVkQ2FsbGJhY2tcIixcblx0XHRcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIsXG5cdFx0XCJjb25uZWN0ZWRNb3ZlQ2FsbGJhY2tcIixcblx0XHRcImFkb3B0ZWRDYWxsYmFja1wiLFxuXHRcdFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCJcblx0XTtcblx0Y29uc3QgaW50ZXJuYWxzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdGNvbnN0IHJlZ2lzdHJpZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0Y29uc3QgcmVnaXN0cnlEb2N1bWVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0Y29uc3QgZW50cmllcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRjb25zdCB0cmFja2VkID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdGNvbnN0IGFjdGl2ZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGNvbnN0IGF0dHJpYnV0ZU1hcHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0Y29uc3Qgb2JzZXJ2ZWRSb290cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRjb25zdCBsb2NhbE9ic2VydmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRsZXQgY29uc3RydWN0aW5nR2xvYmFsID0gZmFsc2U7XG5cdGxldCBnbG9iYWxSZWdpc3RyeTtcblx0ZnVuY3Rpb24gc2VsZihyZWdpc3RyeSkge1xuXHRcdGNvbnN0IHZhbHVlID0gaW50ZXJuYWxzLmdldChyZWdpc3RyeSk7XG5cdFx0aWYgKCF2YWx1ZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgaW52b2NhdGlvblwiKTtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0ZnVuY3Rpb24gbm9kZURvY3VtZW50KG5vZGUpIHtcblx0XHRyZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gOSA/IG5vZGUgOiBub2RlLm93bmVyRG9jdW1lbnQ7XG5cdH1cblx0ZnVuY3Rpb24gc2V0UmVnaXN0cnkobm9kZSwgcmVnaXN0cnkpIHtcblx0XHRyZWdpc3RyaWVzLnNldChub2RlLCByZWdpc3RyeSk7XG5cdFx0cmVnaXN0cnlEb2N1bWVudHMuc2V0KG5vZGUsIG5vZGUub3duZXJEb2N1bWVudCk7XG5cdH1cblx0ZnVuY3Rpb24gZ2xvYmFsT2YocmVnaXN0cnkpIHtcblx0XHRyZXR1cm4gcmVnaXN0cnkgJiYgIXNlbGYocmVnaXN0cnkpLnNjb3BlZCA/IHJlZ2lzdHJ5IDogbnVsbDtcblx0fVxuXHRmdW5jdGlvbiBleGNsdXNpdmVGcmFnbWVudChub2RlKSB7XG5cdFx0cmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IDExICYmICFpc1NoYWRvdyhub2RlKTtcblx0fVxuXHRmdW5jdGlvbiByZWdpc3RyeU9mKG5vZGUpIHtcblx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gOSkgcmV0dXJuIHJlZ2lzdHJpZXMuZ2V0KG5vZGUpID8/IG51bGw7XG5cdFx0aWYgKHJlZ2lzdHJpZXMuaGFzKG5vZGUpKSB7XG5cdFx0XHRjb25zdCByZWdpc3RyeSA9IHJlZ2lzdHJpZXMuZ2V0KG5vZGUpO1xuXHRcdFx0aWYgKHJlZ2lzdHJ5RG9jdW1lbnRzLmdldChub2RlKSA9PT0gbm9kZS5vd25lckRvY3VtZW50IHx8IHJlZ2lzdHJ5ICYmIHNlbGYocmVnaXN0cnkpLnNjb3BlZCkgcmV0dXJuIHJlZ2lzdHJ5O1xuXHRcdFx0Y29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0Y29uc3QgYWRvcHRlZCA9IGdsb2JhbE9mKCFpc0VsZW1lbnQkMShub2RlKSB8fCByZWdpc3RyeSB8fCAhcGFyZW50IHx8IGV4Y2x1c2l2ZUZyYWdtZW50KHBhcmVudCkgPyByZWdpc3RyeU9mKG5vZGUub3duZXJEb2N1bWVudCkgOiByZWdpc3RyeU9mKHBhcmVudCkpO1xuXHRcdFx0c2V0UmVnaXN0cnkobm9kZSwgYWRvcHRlZCk7XG5cdFx0XHRyZXR1cm4gYWRvcHRlZDtcblx0XHR9XG5cdFx0bGV0IHJlZ2lzdHJ5ID0gbnVsbDtcblx0XHRpZiAoaXNFbGVtZW50JDEobm9kZSkpIHtcblx0XHRcdGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcblx0XHRcdHJlZ2lzdHJ5ID0gcGFyZW50ICYmICFleGNsdXNpdmVGcmFnbWVudChwYXJlbnQpID8gcmVnaXN0cnlPZihwYXJlbnQpIDogbm9kZS5vd25lckRvY3VtZW50ID09PSBkb2N1bWVudCA/IGdsb2JhbFJlZ2lzdHJ5IDogbnVsbDtcblx0XHR9IGVsc2UgaWYgKGlzU2hhZG93KG5vZGUpKSByZWdpc3RyeSA9IG5vZGUub3duZXJEb2N1bWVudCA9PT0gZG9jdW1lbnQgPyBnbG9iYWxSZWdpc3RyeSA6IG51bGw7XG5cdFx0aWYgKHJlZ2lzdHJ5KSBzZXRSZWdpc3RyeShub2RlLCByZWdpc3RyeSk7XG5cdFx0cmV0dXJuIHJlZ2lzdHJ5O1xuXHR9XG5cdGZ1bmN0aW9uIGxvb2t1cChyZWdpc3RyeSwgbmFtZXNwYWNlLCBuYW1lKSB7XG5cdFx0cmV0dXJuIHJlZ2lzdHJ5ICYmIG5hbWVzcGFjZSA9PT0gbnVsbCA/IHNlbGYocmVnaXN0cnkpLmJ5TmFtZS5nZXQobmFtZSkgOiB2b2lkIDA7XG5cdH1cblx0ZnVuY3Rpb24gcmVnaXN0cnlPcHRpb24ob3B0aW9ucywgbnVsbGFibGUpIHtcblx0XHRpZiAodHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIgfHwgb3B0aW9ucyA9PT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcblx0XHRjb25zdCByZWdpc3RyeSA9IG9wdGlvbnMuY3VzdG9tQXR0cmlidXRlUmVnaXN0cnk7XG5cdFx0aWYgKHJlZ2lzdHJ5ID09PSB2b2lkIDAgfHwgbnVsbGFibGUgJiYgcmVnaXN0cnkgPT09IG51bGwpIHJldHVybiByZWdpc3RyeTtcblx0XHRpZiAocmVnaXN0cnkgPT09IG51bGwgfHwgIWludGVybmFscy5oYXMocmVnaXN0cnkpKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBjdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSBtdXN0IGJlIGEgcmVnaXN0cnkke251bGxhYmxlID8gXCIgb3IgbnVsbFwiIDogXCJcIn1gKTtcblx0XHRyZXR1cm4gcmVnaXN0cnk7XG5cdH1cblx0ZnVuY3Rpb24gY2hlY2tSZWdpc3RyeShyZWdpc3RyeSwgZG9jKSB7XG5cdFx0aWYgKHJlZ2lzdHJ5ICYmICFzZWxmKHJlZ2lzdHJ5KS5zY29wZWQgJiYgcmVnaXN0cnlPZihkb2MpICE9PSByZWdpc3RyeSkgdGhyb3cgZG9tRXJyb3IoXCJBIGdsb2JhbCByZWdpc3RyeSBjYW4gb25seSBiZSB1c2VkIHdpdGggaXRzIG93biBkb2N1bWVudC5cIiwgXCJOb3RTdXBwb3J0ZWRFcnJvclwiKTtcblx0fVxuXHRmdW5jdGlvbiBpbnZva2UoYXR0cmlidXRlLCBuYW1lLCBhcmdzID0gW10pIHtcblx0XHRjb25zdCBkZWZpbml0aW9uID0gZW50cmllcy5nZXQoYXR0cmlidXRlKT8uZGVmaW5pdGlvbjtcblx0XHRpZiAoIWRlZmluaXRpb24pIHJldHVybjtcblx0XHRjb25zdCBjYWxsYmFjayA9IGRlZmluaXRpb24uY2FsbGJhY2tzW25hbWVdO1xuXHRcdGlmICghY2FsbGJhY2sgJiYgbmFtZSA9PT0gXCJjb25uZWN0ZWRNb3ZlQ2FsbGJhY2tcIikge1xuXHRcdFx0aW52b2tlKGF0dHJpYnV0ZSwgXCJkaXNjb25uZWN0ZWRDYWxsYmFja1wiKTtcblx0XHRcdGludm9rZShhdHRyaWJ1dGUsIFwiY29ubmVjdGVkQ2FsbGJhY2tcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChjYWxsYmFjaykgc2FmZSgoKSA9PiBSZWZsZWN0LmFwcGx5KGNhbGxiYWNrLCBhdHRyaWJ1dGUsIGFyZ3MpKTtcblx0fVxuXHRmdW5jdGlvbiBjb25uZWN0KGF0dHJpYnV0ZSwgZW50cnkpIHtcblx0XHRpZiAoZW50cnkuY29ubmVjdGVkKSByZXR1cm47XG5cdFx0ZW50cnkuY29ubmVjdGVkID0gdHJ1ZTtcblx0XHRpbnZva2UoYXR0cmlidXRlLCBcImNvbm5lY3RlZENhbGxiYWNrXCIpO1xuXHR9XG5cdGZ1bmN0aW9uIGRpc2Nvbm5lY3QoYXR0cmlidXRlLCBlbnRyeSkge1xuXHRcdGlmICghZW50cnkuY29ubmVjdGVkKSByZXR1cm47XG5cdFx0ZW50cnkuY29ubmVjdGVkID0gZmFsc2U7XG5cdFx0aW52b2tlKGF0dHJpYnV0ZSwgXCJkaXNjb25uZWN0ZWRDYWxsYmFja1wiKTtcblx0fVxuXHRmdW5jdGlvbiBhZG9wdChhdHRyaWJ1dGUsIGVudHJ5LCBkb2MpIHtcblx0XHRjb25zdCBvbGQgPSBlbnRyeS5kb2N1bWVudDtcblx0XHRpZiAob2xkICE9PSBkb2MpIHtcblx0XHRcdGVudHJ5LmRvY3VtZW50ID0gZG9jO1xuXHRcdFx0aW52b2tlKGF0dHJpYnV0ZSwgXCJhZG9wdGVkQ2FsbGJhY2tcIiwgW29sZCwgZG9jXSk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHRyYWNrKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuXHRcdGxldCBtYXAgPSB0cmFja2VkLmdldChlbGVtZW50KTtcblx0XHRpZiAoIW1hcCkgdHJhY2tlZC5zZXQoZWxlbWVudCwgbWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG5cdFx0bWFwLnNldChhdHRyaWJ1dGUubG9jYWxOYW1lLCBhdHRyaWJ1dGUpO1xuXHRcdGlmIChvYnNlcnZlZFJvb3RzLmhhcyhlbGVtZW50LmdldFJvb3ROb2RlKCkpKSB7XG5cdFx0XHRsb2NhbE9ic2VydmVycy5nZXQoZWxlbWVudCk/LmRpc2Nvbm5lY3QoKTtcblx0XHRcdGxvY2FsT2JzZXJ2ZXJzLmRlbGV0ZShlbGVtZW50KTtcblx0XHR9IGVsc2UgaWYgKCFsb2NhbE9ic2VydmVycy5oYXMoZWxlbWVudCkpIHtcblx0XHRcdGNvbnN0IGxvY2FsID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocHJvY2Vzc1JlY29yZHMpO1xuXHRcdFx0bG9jYWwub2JzZXJ2ZShlbGVtZW50LCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlXG5cdFx0XHR9KTtcblx0XHRcdGxvY2FsT2JzZXJ2ZXJzLnNldChlbGVtZW50LCBsb2NhbCk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVudHJhY2soZWxlbWVudCwgYXR0cmlidXRlKSB7XG5cdFx0Y29uc3QgbWFwID0gdHJhY2tlZC5nZXQoZWxlbWVudCk7XG5cdFx0aWYgKG1hcD8uZ2V0KGF0dHJpYnV0ZS5sb2NhbE5hbWUpID09PSBhdHRyaWJ1dGUpIG1hcC5kZWxldGUoYXR0cmlidXRlLmxvY2FsTmFtZSk7XG5cdFx0aWYgKG1hcCAmJiAhbWFwLnNpemUpIHtcblx0XHRcdHRyYWNrZWQuZGVsZXRlKGVsZW1lbnQpO1xuXHRcdFx0bG9jYWxPYnNlcnZlcnMuZ2V0KGVsZW1lbnQpPy5kaXNjb25uZWN0KCk7XG5cdFx0XHRsb2NhbE9ic2VydmVycy5kZWxldGUoZWxlbWVudCk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJ1bkNvbnN0cnVjdG9yKGF0dHJpYnV0ZSwgZGVmaW5pdGlvbiwgcmVnaXN0cnksIGNoZWNrKSB7XG5cdFx0Y29uc3QgQyA9IGRlZmluaXRpb24uY29uc3RydWN0b3I7XG5cdFx0Y29uc3QgcHJldmlvdXMgPSBhY3RpdmUuZ2V0KEMpO1xuXHRcdGRlZmluaXRpb24uc3RhY2sucHVzaChhdHRyaWJ1dGUpO1xuXHRcdGFjdGl2ZS5zZXQoQywgcmVnaXN0cnkpO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAobmV3IEMoKSAhPT0gYXR0cmlidXRlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29uc3RydWN0b3IgcmV0dXJuZWQgYSBkaWZmZXJlbnQgYXR0cmlidXRlLlwiKTtcblx0XHRcdGNoZWNrPy4oKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0aWYgKHByZXZpb3VzKSBhY3RpdmUuc2V0KEMsIHByZXZpb3VzKTtcblx0XHRcdGVsc2UgYWN0aXZlLmRlbGV0ZShDKTtcblx0XHRcdGRlZmluaXRpb24uc3RhY2sucG9wKCk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGNvbnN0cnVjdChhdHRyaWJ1dGUsIGRlZmluaXRpb24sIHJlZ2lzdHJ5KSB7XG5cdFx0Y29uc3QgeyBvd25lckRvY3VtZW50LCBsb2NhbE5hbWUsIG5hbWVzcGFjZVVSSSwgcHJlZml4IH0gPSBhdHRyaWJ1dGU7XG5cdFx0Y29uc3QgZW50cnkgPSB7XG5cdFx0XHRzdGF0ZTogXCJjdXN0b21cIixcblx0XHRcdGRlZmluaXRpb24sXG5cdFx0XHRjb25uZWN0ZWQ6IGZhbHNlLFxuXHRcdFx0ZG9jdW1lbnQ6IG93bmVyRG9jdW1lbnRcblx0XHR9O1xuXHRcdGVudHJpZXMuc2V0KGF0dHJpYnV0ZSwgZW50cnkpO1xuXHRcdHRyeSB7XG5cdFx0XHRydW5Db25zdHJ1Y3RvcihhdHRyaWJ1dGUsIGRlZmluaXRpb24sIHJlZ2lzdHJ5LCAoKSA9PiB7XG5cdFx0XHRcdGlmIChhdHRyaWJ1dGUub3duZXJFbGVtZW50ICE9PSBudWxsIHx8IGF0dHJpYnV0ZS5vd25lckRvY3VtZW50ICE9PSBvd25lckRvY3VtZW50IHx8IGF0dHJpYnV0ZS5sb2NhbE5hbWUgIT09IGxvY2FsTmFtZSB8fCBhdHRyaWJ1dGUubmFtZXNwYWNlVVJJICE9PSBuYW1lc3BhY2VVUkkgfHwgYXR0cmlidXRlLnByZWZpeCAhPT0gcHJlZml4IHx8IGF0dHJpYnV0ZS52YWx1ZSAhPT0gXCJcIikgdGhyb3cgZG9tRXJyb3IoXCJBbiBhdHRyaWJ1dGUgY29uc3RydWN0b3IgbXVzdCBsZWF2ZSB0aGUgQXR0ciB1bmF0dGFjaGVkIGFuZCBlbXB0eS5cIiwgXCJOb3RTdXBwb3J0ZWRFcnJvclwiKTtcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRlbnRyeS5zdGF0ZSA9IFwiZmFpbGVkXCI7XG5cdFx0XHRlbnRyeS5kZWZpbml0aW9uID0gbnVsbDtcblx0XHRcdHJlcG9ydChlcnJvcik7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZ3JhZGUoYXR0cmlidXRlLCBkZWZpbml0aW9uLCByZWdpc3RyeSwgdmFsdWUpIHtcblx0XHRpZiAoZW50cmllcy5oYXMoYXR0cmlidXRlKSB8fCAhYXR0cmlidXRlLm93bmVyRWxlbWVudCkgcmV0dXJuO1xuXHRcdGNvbnN0IGVudHJ5ID0ge1xuXHRcdFx0c3RhdGU6IFwicHJlY3VzdG9taXplZFwiLFxuXHRcdFx0ZGVmaW5pdGlvbixcblx0XHRcdGNvbm5lY3RlZDogZmFsc2UsXG5cdFx0XHRkb2N1bWVudDogYXR0cmlidXRlLm93bmVyRWxlbWVudC5vd25lckRvY3VtZW50XG5cdFx0fTtcblx0XHRlbnRyaWVzLnNldChhdHRyaWJ1dGUsIGVudHJ5KTtcblx0XHR0cnkge1xuXHRcdFx0cnVuQ29uc3RydWN0b3IoYXR0cmlidXRlLCBkZWZpbml0aW9uLCByZWdpc3RyeSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGVudHJ5LnN0YXRlID0gXCJmYWlsZWRcIjtcblx0XHRcdGVudHJ5LmRlZmluaXRpb24gPSBudWxsO1xuXHRcdFx0cmVwb3J0KGVycm9yKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZW50cnkuc3RhdGUgPSBcImN1c3RvbVwiO1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBhdHRyaWJ1dGUub3duZXJFbGVtZW50O1xuXHRcdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRcdHRyYWNrKGVsZW1lbnQsIGF0dHJpYnV0ZSk7XG5cdFx0aW52b2tlKGF0dHJpYnV0ZSwgXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIiwgW251bGwsIHZhbHVlXSk7XG5cdFx0aWYgKGF0dHJpYnV0ZS5vd25lckVsZW1lbnQgPT09IGVsZW1lbnQgJiYgZWxlbWVudC5pc0Nvbm5lY3RlZCkgY29ubmVjdChhdHRyaWJ1dGUsIGVudHJ5KTtcblx0fVxuXHRmdW5jdGlvbiB0cnlVcGdyYWRlKGF0dHJpYnV0ZSwgdmFsdWUgPSBhdHRyaWJ1dGUudmFsdWUpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gYXR0cmlidXRlLm93bmVyRWxlbWVudDtcblx0XHRpZiAoIWVsZW1lbnQgfHwgIWlzSFRNTChlbGVtZW50KSB8fCBlbnRyaWVzLmhhcyhhdHRyaWJ1dGUpKSByZXR1cm47XG5cdFx0Y29uc3QgcmVnaXN0cnkgPSByZWdpc3RyeU9mKGVsZW1lbnQpO1xuXHRcdGNvbnN0IGRlZmluaXRpb24gPSBsb29rdXAocmVnaXN0cnksIGF0dHJpYnV0ZS5uYW1lc3BhY2VVUkksIGF0dHJpYnV0ZS5sb2NhbE5hbWUpO1xuXHRcdGlmIChyZWdpc3RyeSAmJiBkZWZpbml0aW9uKSB1cGdyYWRlKGF0dHJpYnV0ZSwgZGVmaW5pdGlvbiwgcmVnaXN0cnksIHZhbHVlKTtcblx0fVxuXHRjbGFzcyBCYXRjaCB7XG5cdFx0aGlzdG9yeSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0cG9zaXRpb24gPSAwO1xuXHRcdGNvbnN0cnVjdG9yKHJlY29yZHMpIHtcblx0XHRcdHJlY29yZHMuZm9yRWFjaCgocmVjb3JkLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAocmVjb3JkLnR5cGUgIT09IFwiYXR0cmlidXRlc1wiIHx8IHJlY29yZC5hdHRyaWJ1dGVOYW1lc3BhY2UgIT09IG51bGwgfHwgIXJlY29yZC5hdHRyaWJ1dGVOYW1lIHx8ICFpc0VsZW1lbnQkMShyZWNvcmQudGFyZ2V0KSkgcmV0dXJuO1xuXHRcdFx0XHRsZXQgYnlOYW1lID0gdGhpcy5oaXN0b3J5LmdldChyZWNvcmQudGFyZ2V0KTtcblx0XHRcdFx0aWYgKCFieU5hbWUpIHRoaXMuaGlzdG9yeS5zZXQocmVjb3JkLnRhcmdldCwgYnlOYW1lID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG5cdFx0XHRcdGxldCBsaXN0ID0gYnlOYW1lLmdldChyZWNvcmQuYXR0cmlidXRlTmFtZSk7XG5cdFx0XHRcdGlmICghbGlzdCkgYnlOYW1lLnNldChyZWNvcmQuYXR0cmlidXRlTmFtZSwgbGlzdCA9IFtdKTtcblx0XHRcdFx0bGlzdC5wdXNoKHtcblx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRvbGRWYWx1ZTogcmVjb3JkLm9sZFZhbHVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGxhdGVyKGVsZW1lbnQsIG5hbWUpIHtcblx0XHRcdHJldHVybiAodGhpcy5oaXN0b3J5LmdldChlbGVtZW50KT8uZ2V0KG5hbWUpID8/IFtdKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaW5kZXggPiB0aGlzLnBvc2l0aW9uKTtcblx0XHR9XG5cdFx0dmFsdWVBZnRlcihlbGVtZW50LCBuYW1lKSB7XG5cdFx0XHRjb25zdCBsYXRlciA9IHRoaXMubGF0ZXIoZWxlbWVudCwgbmFtZSk7XG5cdFx0XHRyZXR1cm4gbGF0ZXIubGVuZ3RoID8gbGF0ZXJbMF0ub2xkVmFsdWUgOiBlbGVtZW50LmdldEF0dHJpYnV0ZU5TKG51bGwsIG5hbWUpO1xuXHRcdH1cblx0XHRhZGRlZExhdGVyKGVsZW1lbnQsIG5hbWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmxhdGVyKGVsZW1lbnQsIG5hbWUpLnNvbWUoKGl0ZW0pID0+IGl0ZW0ub2xkVmFsdWUgPT09IG51bGwpO1xuXHRcdH1cblx0XHR0cmVlKHJvb3QpIHtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50c0luKHJvb3QpKSB7XG5cdFx0XHRcdGNvbnN0IHNoYWRvdyA9IHNoYWRvd09mKGVsZW1lbnQpO1xuXHRcdFx0XHRpZiAoc2hhZG93ICYmICFvYnNlcnZlZFJvb3RzLmhhcyhzaGFkb3cpKSBvYnNlcnZlUm9vdChzaGFkb3cpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsZW1lbnQoZWxlbWVudCkge1xuXHRcdFx0aWYgKCFpc0hUTUwoZWxlbWVudCkpIHJldHVybjtcblx0XHRcdGZvciAoY29uc3QgYXR0cmlidXRlIG9mIEFycmF5LmZyb20obmF0aXZlQXR0cmlidXRlcy5jYWxsKGVsZW1lbnQpKSkge1xuXHRcdFx0XHRjb25zdCBuYW1lID0gYXR0cmlidXRlLmxvY2FsTmFtZTtcblx0XHRcdFx0aWYgKGF0dHJpYnV0ZS5uYW1lc3BhY2VVUkkgIT09IG51bGwgfHwgdGhpcy5hZGRlZExhdGVyKGVsZW1lbnQsIG5hbWUpKSBjb250aW51ZTtcblx0XHRcdFx0Y29uc3QgZW50cnkgPSBlbnRyaWVzLmdldChhdHRyaWJ1dGUpO1xuXHRcdFx0XHRpZiAoIWVudHJ5KSB7XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQpIHRyeVVwZ3JhZGUoYXR0cmlidXRlLCB0aGlzLnZhbHVlQWZ0ZXIoZWxlbWVudCwgbmFtZSkgPz8gYXR0cmlidXRlLnZhbHVlKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZW50cnkuc3RhdGUgIT09IFwiY3VzdG9tXCIpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAodHJhY2tlZC5nZXQoZWxlbWVudCk/LmdldChuYW1lKSAhPT0gYXR0cmlidXRlKSB7XG5cdFx0XHRcdFx0dHJhY2soZWxlbWVudCwgYXR0cmlidXRlKTtcblx0XHRcdFx0XHRhZG9wdChhdHRyaWJ1dGUsIGVudHJ5LCBlbGVtZW50Lm93bmVyRG9jdW1lbnQpO1xuXHRcdFx0XHRcdGludm9rZShhdHRyaWJ1dGUsIFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIsIFtudWxsLCB0aGlzLnZhbHVlQWZ0ZXIoZWxlbWVudCwgbmFtZSkgPz8gYXR0cmlidXRlLnZhbHVlXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHJhY2soZWxlbWVudCwgYXR0cmlidXRlKTtcblx0XHRcdFx0XHRhZG9wdChhdHRyaWJ1dGUsIGVudHJ5LCBlbGVtZW50Lm93bmVyRG9jdW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhdHRyaWJ1dGUub3duZXJFbGVtZW50ICE9PSBlbGVtZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQpIGNvbm5lY3QoYXR0cmlidXRlLCBlbnRyeSk7XG5cdFx0XHRcdGVsc2UgZGlzY29ubmVjdChhdHRyaWJ1dGUsIGVudHJ5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0YXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIG9sZFZhbHVlKSB7XG5cdFx0XHRpZiAoIWlzSFRNTChlbGVtZW50KSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgcHJldmlvdXMgPSB0cmFja2VkLmdldChlbGVtZW50KT8uZ2V0KG5hbWUpO1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlTm9kZU5TKG51bGwsIG5hbWUpO1xuXHRcdFx0aWYgKHByZXZpb3VzICYmIHByZXZpb3VzID09PSBjdXJyZW50KSB7XG5cdFx0XHRcdGludm9rZShwcmV2aW91cywgXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIiwgW29sZFZhbHVlLCB0aGlzLnZhbHVlQWZ0ZXIoZWxlbWVudCwgbmFtZSldKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHByZXZpb3VzKSB7XG5cdFx0XHRcdHVudHJhY2soZWxlbWVudCwgcHJldmlvdXMpO1xuXHRcdFx0XHRjb25zdCBlbnRyeSA9IGVudHJpZXMuZ2V0KHByZXZpb3VzKTtcblx0XHRcdFx0aW52b2tlKHByZXZpb3VzLCBcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiLCBbb2xkVmFsdWUsIG51bGxdKTtcblx0XHRcdFx0ZGlzY29ubmVjdChwcmV2aW91cywgZW50cnkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdXJyZW50IHx8IHRoaXMuYWRkZWRMYXRlcihlbGVtZW50LCBuYW1lKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlQWZ0ZXIoZWxlbWVudCwgbmFtZSk7XG5cdFx0XHRjb25zdCBlbnRyeSA9IGVudHJpZXMuZ2V0KGN1cnJlbnQpO1xuXHRcdFx0aWYgKCFlbnRyeSkge1xuXHRcdFx0XHR0cnlVcGdyYWRlKGN1cnJlbnQsIHZhbHVlID8/IGN1cnJlbnQudmFsdWUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZW50cnkuc3RhdGUgIT09IFwiY3VzdG9tXCIpIHJldHVybjtcblx0XHRcdHRyYWNrKGVsZW1lbnQsIGN1cnJlbnQpO1xuXHRcdFx0YWRvcHQoY3VycmVudCwgZW50cnksIGVsZW1lbnQub3duZXJEb2N1bWVudCk7XG5cdFx0XHRpbnZva2UoY3VycmVudCwgXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIiwgW251bGwsIHZhbHVlXSk7XG5cdFx0XHRpZiAoY3VycmVudC5vd25lckVsZW1lbnQgPT09IGVsZW1lbnQgJiYgZWxlbWVudC5pc0Nvbm5lY3RlZCkgY29ubmVjdChjdXJyZW50LCBlbnRyeSk7XG5cdFx0fVxuXHRcdHJ1bihyZWNvcmRzKSB7XG5cdFx0XHRyZWNvcmRzLmZvckVhY2goKHJlY29yZCwgaW5kZXgpID0+IHtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbiA9IGluZGV4O1xuXHRcdFx0XHRpZiAocmVjb3JkLnR5cGUgPT09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcmVjb3JkLnJlbW92ZWROb2RlcykgdGhpcy50cmVlKG5vZGUpO1xuXHRcdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiByZWNvcmQuYWRkZWROb2RlcykgdGhpcy50cmVlKG5vZGUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcImF0dHJpYnV0ZXNcIiAmJiByZWNvcmQuYXR0cmlidXRlTmFtZXNwYWNlID09PSBudWxsICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lICYmIGlzRWxlbWVudCQxKHJlY29yZC50YXJnZXQpKSB0aGlzLmF0dHJpYnV0ZShyZWNvcmQudGFyZ2V0LCByZWNvcmQuYXR0cmlidXRlTmFtZSwgcmVjb3JkLm9sZFZhbHVlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBwcm9jZXNzUmVjb3JkcyhyZWNvcmRzKSB7XG5cdFx0bmV3IEJhdGNoKHJlY29yZHMpLnJ1bihyZWNvcmRzKTtcblx0fVxuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHByb2Nlc3NSZWNvcmRzKTtcblx0ZnVuY3Rpb24gb2JzZXJ2ZVJvb3Qocm9vdCkge1xuXHRcdGlmIChvYnNlcnZlZFJvb3RzLmhhcyhyb290KSkgcmV0dXJuO1xuXHRcdG9ic2VydmVkUm9vdHMuYWRkKHJvb3QpO1xuXHRcdG9ic2VydmVyLm9ic2VydmUocm9vdCwge1xuXHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdGlmIChyb290Lm5vZGVUeXBlID09PSA5IHx8IHJvb3Qubm9kZVR5cGUgPT09IDExIHx8IGlzRWxlbWVudCQxKHJvb3QpKSBhZGRSb290KHJvb3QpO1xuXHR9XG5cdGZ1bmN0aW9uIGZsdXNoKCkge1xuXHRcdGNvbnN0IHJlY29yZHMgPSBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xuXHRcdGlmIChyZWNvcmRzLmxlbmd0aCkgcHJvY2Vzc1JlY29yZHMocmVjb3Jkcyk7XG5cdH1cblx0Y2xhc3MgUmVnaXN0cnkge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0aW50ZXJuYWxzLnNldCh0aGlzLCB7XG5cdFx0XHRcdHNjb3BlZDogIWNvbnN0cnVjdGluZ0dsb2JhbCxcblx0XHRcdFx0YnlOYW1lOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuXHRcdFx0XHRieUNvbnN0cnVjdG9yOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuXHRcdFx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHRcdFx0cGVuZGluZzogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSxcblx0XHRcdFx0ZG9jdW1lbnRzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZGVmaW5lKG5hbWUsIGNvbnN0cnVjdG9yKSB7XG5cdFx0XHRjb25zdCBzdGF0ZSA9IHNlbGYodGhpcyk7XG5cdFx0XHRpZiAodHlwZW9mIGNvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjb25zdHJ1Y3RvciBtdXN0IGJlIGNvbnN0cnVjdGlibGVcIik7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRSZWZsZWN0LmNvbnN0cnVjdChTdHJpbmcsIFtdLCBjb25zdHJ1Y3Rvcik7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcImNvbnN0cnVjdG9yIG11c3QgYmUgY29uc3RydWN0aWJsZVwiKTtcblx0XHRcdH1cblx0XHRcdG5hbWUgPSBTdHJpbmcobmFtZSk7XG5cdFx0XHRhc3NlcnRBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuXHRcdFx0aWYgKHN0YXRlLmJ5TmFtZS5oYXMobmFtZSkgfHwgc3RhdGUuYnlDb25zdHJ1Y3Rvci5oYXMoY29uc3RydWN0b3IpKSB0aHJvdyBkb21FcnJvcihcIk5hbWUgb3IgY29uc3RydWN0b3IgYWxyZWFkeSByZWdpc3RlcmVkLlwiLCBcIk5vdFN1cHBvcnRlZEVycm9yXCIpO1xuXHRcdFx0aWYgKHN0YXRlLnJ1bm5pbmcpIHRocm93IGRvbUVycm9yKFwiTmVzdGVkIGRlZmluZSgpIGlzIG5vdCBzdXBwb3J0ZWQuXCIsIFwiTm90U3VwcG9ydGVkRXJyb3JcIik7XG5cdFx0XHRzdGF0ZS5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdGNvbnN0IGNhbGxiYWNrcyA9IHt9O1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xuXHRcdFx0XHRpZiAoIXByb3RvdHlwZSB8fCB0eXBlb2YgcHJvdG90eXBlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBwcm90b3R5cGUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNvbnN0cnVjdG9yLnByb3RvdHlwZSBtdXN0IGJlIGFuIG9iamVjdFwiKTtcblx0XHRcdFx0Zm9yIChjb25zdCBuYW1lIG9mIGNhbGxiYWNrTmFtZXMpIHtcblx0XHRcdFx0XHRjb25zdCBjYWxsYmFjayA9IHByb3RvdHlwZVtuYW1lXTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2sgIT09IHZvaWQgMCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtuYW1lfSBtdXN0IGJlIGEgZnVuY3Rpb25gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrc1tuYW1lXSA9IGNhbGxiYWNrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRzdGF0ZS5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBkZWZpbml0aW9uID0ge1xuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRjb25zdHJ1Y3Rvcixcblx0XHRcdFx0Y2FsbGJhY2tzLFxuXHRcdFx0XHRzdGFjazogW11cblx0XHRcdH07XG5cdFx0XHRzdGF0ZS5ieU5hbWUuc2V0KG5hbWUsIGRlZmluaXRpb24pO1xuXHRcdFx0c3RhdGUuYnlDb25zdHJ1Y3Rvci5zZXQoY29uc3RydWN0b3IsIGRlZmluaXRpb24pO1xuXHRcdFx0Zmx1c2goKTtcblx0XHRcdGZvciAoY29uc3QgZG9jIG9mIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtkb2N1bWVudCwgLi4uc3RhdGUuZG9jdW1lbnRzXSkpIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50c0luKGRvYykpIHtcblx0XHRcdFx0Y29uc3Qgc2hhZG93ID0gc2hhZG93T2YoZWxlbWVudCk7XG5cdFx0XHRcdGlmIChzaGFkb3cpIG9ic2VydmVSb290KHNoYWRvdyk7XG5cdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlTm9kZU5TKG51bGwsIG5hbWUpO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlICYmIGlzSFRNTChlbGVtZW50KSAmJiByZWdpc3RyeU9mKGVsZW1lbnQpID09PSB0aGlzKSB1cGdyYWRlKGF0dHJpYnV0ZSwgZGVmaW5pdGlvbiwgdGhpcywgYXR0cmlidXRlLnZhbHVlKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBlbmRpbmcgPSBzdGF0ZS5wZW5kaW5nLmdldChuYW1lKTtcblx0XHRcdGlmIChwZW5kaW5nKSB7XG5cdFx0XHRcdHN0YXRlLnBlbmRpbmcuZGVsZXRlKG5hbWUpO1xuXHRcdFx0XHRwZW5kaW5nLnJlc29sdmUoY29uc3RydWN0b3IpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRnZXQobmFtZSkge1xuXHRcdFx0cmV0dXJuIHNlbGYodGhpcykuYnlOYW1lLmdldChTdHJpbmcobmFtZSkpPy5jb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0Z2V0TmFtZShjb25zdHJ1Y3Rvcikge1xuXHRcdFx0aWYgKHR5cGVvZiBjb25zdHJ1Y3RvciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY29uc3RydWN0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuXHRcdFx0cmV0dXJuIHNlbGYodGhpcykuYnlDb25zdHJ1Y3Rvci5nZXQoY29uc3RydWN0b3IpPy5uYW1lID8/IG51bGw7XG5cdFx0fVxuXHRcdHdoZW5EZWZpbmVkKG5hbWUpIHtcblx0XHRcdGNvbnN0IHN0YXRlID0gc2VsZih0aGlzKTtcblx0XHRcdG5hbWUgPSBTdHJpbmcobmFtZSk7XG5cdFx0XHRpZiAoIWlzVmFsaWRDdXN0b21BdHRyaWJ1dGVOYW1lKG5hbWUpKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZG9tRXJyb3IoYEludmFsaWQgY3VzdG9tIGF0dHJpYnV0ZSBuYW1lOiAke25hbWV9YCwgXCJTeW50YXhFcnJvclwiKSk7XG5cdFx0XHRjb25zdCBkZWZpbml0aW9uID0gc3RhdGUuYnlOYW1lLmdldChuYW1lKTtcblx0XHRcdGlmIChkZWZpbml0aW9uKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlZmluaXRpb24uY29uc3RydWN0b3IpO1xuXHRcdFx0bGV0IHBlbmRpbmcgPSBzdGF0ZS5wZW5kaW5nLmdldChuYW1lKTtcblx0XHRcdGlmICghcGVuZGluZykge1xuXHRcdFx0XHRsZXQgcmVzb2x2ZTtcblx0XHRcdFx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyKSA9PiB7XG5cdFx0XHRcdFx0cmVzb2x2ZSA9IHI7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzdGF0ZS5wZW5kaW5nLnNldChuYW1lLCBwZW5kaW5nID0ge1xuXHRcdFx0XHRcdHByb21pc2UsXG5cdFx0XHRcdFx0cmVzb2x2ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwZW5kaW5nLnByb21pc2U7XG5cdFx0fVxuXHRcdHVwZ3JhZGUocm9vdCkge1xuXHRcdFx0c2VsZih0aGlzKTtcblx0XHRcdGlmICghKHJvb3QgaW5zdGFuY2VvZiBOb2RlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcInJvb3QgbXVzdCBiZSBhIGN1cnJlbnQtcmVhbG0gTm9kZVwiKTtcblx0XHRcdGZsdXNoKCk7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHNJbihyb290KSkge1xuXHRcdFx0XHRpZiAocmVnaXN0cnlPZihlbGVtZW50KSAhPT0gdGhpcykgY29udGludWU7XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0cmlidXRlIG9mIEFycmF5LmZyb20obmF0aXZlQXR0cmlidXRlcy5jYWxsKGVsZW1lbnQpKSkgdHJ5VXBncmFkZShhdHRyaWJ1dGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpbml0aWFsaXplKHJvb3QpIHtcblx0XHRcdGNvbnN0IHN0YXRlID0gc2VsZih0aGlzKTtcblx0XHRcdGlmICghKHJvb3QgaW5zdGFuY2VvZiBOb2RlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcInJvb3QgbXVzdCBiZSBhIGN1cnJlbnQtcmVhbG0gTm9kZVwiKTtcblx0XHRcdGZsdXNoKCk7XG5cdFx0XHRjb25zdCBpc0RvY3VtZW50ID0gcm9vdC5ub2RlVHlwZSA9PT0gOTtcblx0XHRcdGlmICghc3RhdGUuc2NvcGVkICYmIChpc0RvY3VtZW50IHx8IHJlZ2lzdHJ5T2Yobm9kZURvY3VtZW50KHJvb3QpKSAhPT0gdGhpcykpIHRocm93IGRvbUVycm9yKFwiQSBnbG9iYWwgcmVnaXN0cnkgY2FuIG9ubHkgaW5pdGlhbGl6ZSBpdHMgb3duIGRvY3VtZW50IG5vZGVzLlwiLCBcIk5vdFN1cHBvcnRlZEVycm9yXCIpO1xuXHRcdFx0aWYgKChpc0RvY3VtZW50IHx8IGlzU2hhZG93KHJvb3QpKSAmJiAhcmVnaXN0cnlPZihyb290KSkgc2V0UmVnaXN0cnkocm9vdCwgdGhpcyk7XG5cdFx0XHRjb25zdCBkb2MgPSBub2RlRG9jdW1lbnQocm9vdCk7XG5cdFx0XHRpZiAoc3RhdGUuc2NvcGVkKSBzdGF0ZS5kb2N1bWVudHMuYWRkKGRvYyk7XG5cdFx0XHRvYnNlcnZlUm9vdChkb2MpO1xuXHRcdFx0b2JzZXJ2ZVJvb3Qocm9vdCk7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlnaHRFbGVtZW50c0luKHJvb3QpKSB7XG5cdFx0XHRcdGlmICghcmVnaXN0cnlPZihlbGVtZW50KSkgc2V0UmVnaXN0cnkoZWxlbWVudCwgdGhpcyk7XG5cdFx0XHRcdGlmIChyZWdpc3RyeU9mKGVsZW1lbnQpICE9PSB0aGlzKSBjb250aW51ZTtcblx0XHRcdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgQXJyYXkuZnJvbShuYXRpdmVBdHRyaWJ1dGVzLmNhbGwoZWxlbWVudCkpKSB0cnlVcGdyYWRlKGF0dHJpYnV0ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZvciAoY29uc3Qga2V5IG9mIFtcblx0XHRcImRlZmluZVwiLFxuXHRcdFwiZ2V0XCIsXG5cdFx0XCJnZXROYW1lXCIsXG5cdFx0XCJ3aGVuRGVmaW5lZFwiLFxuXHRcdFwidXBncmFkZVwiLFxuXHRcdFwiaW5pdGlhbGl6ZVwiXG5cdF0pIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWdpc3RyeS5wcm90b3R5cGUsIGtleSwge1xuXHRcdC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUmVnaXN0cnkucHJvdG90eXBlLCBrZXkpLFxuXHRcdGVudW1lcmFibGU6IHRydWVcblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWdpc3RyeS5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHRcdHZhbHVlOiBcIkN1c3RvbUF0dHJpYnV0ZVJlZ2lzdHJ5XCIsXG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdH0pO1xuXHRjb25zdHJ1Y3RpbmdHbG9iYWwgPSB0cnVlO1xuXHRnbG9iYWxSZWdpc3RyeSA9IG5ldyBSZWdpc3RyeSgpO1xuXHRjb25zdHJ1Y3RpbmdHbG9iYWwgPSBmYWxzZTtcblx0cmVnaXN0cmllcy5zZXQoZG9jdW1lbnQsIGdsb2JhbFJlZ2lzdHJ5KTtcblx0ZnVuY3Rpb24gQXR0cmlidXRlKCkge1xuXHRcdGNvbnN0IEMgPSBuZXcudGFyZ2V0O1xuXHRcdGlmICghQyB8fCBDID09PSBBdHRyaWJ1dGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIEF0dHIgY29uc3RydWN0b3JcIik7XG5cdFx0Y29uc3QgZGVmaW5pdGlvbiA9IHNlbGYoYWN0aXZlLmdldChDKSA/PyBnbG9iYWxSZWdpc3RyeSkuYnlDb25zdHJ1Y3Rvci5nZXQoQyk7XG5cdFx0aWYgKCFkZWZpbml0aW9uKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgaXMgbm90IGEgZGVmaW5lZCBjdXN0b20gYXR0cmlidXRlLlwiKTtcblx0XHRjb25zdCBwcm90b3R5cGUgPSBDLnByb3RvdHlwZSA/PyBOYXRpdmVBdHRyLnByb3RvdHlwZTtcblx0XHRjb25zdCBzdGFjayA9IGRlZmluaXRpb24uc3RhY2s7XG5cdFx0aWYgKCFzdGFjay5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGF0dHJpYnV0ZSA9IG5hdGl2ZUNyZWF0ZUF0dHJpYnV0ZS5jYWxsKGRvY3VtZW50LCBkZWZpbml0aW9uLm5hbWUpO1xuXHRcdFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGF0dHJpYnV0ZSwgcHJvdG90eXBlKTtcblx0XHRcdGVudHJpZXMuc2V0KGF0dHJpYnV0ZSwge1xuXHRcdFx0XHRzdGF0ZTogXCJjdXN0b21cIixcblx0XHRcdFx0ZGVmaW5pdGlvbixcblx0XHRcdFx0Y29ubmVjdGVkOiBmYWxzZSxcblx0XHRcdFx0ZG9jdW1lbnRcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGF0dHJpYnV0ZTtcblx0XHR9XG5cdFx0Y29uc3QgYXR0cmlidXRlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cdFx0aWYgKGF0dHJpYnV0ZSA9PT0gQUxSRUFEWSB8fCB0eXBlb2YgYXR0cmlidXRlID09PSBcInN5bWJvbFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXR0ciBhbHJlYWR5IGNvbnN0cnVjdGVkXCIpO1xuXHRcdE9iamVjdC5zZXRQcm90b3R5cGVPZihhdHRyaWJ1dGUsIHByb3RvdHlwZSk7XG5cdFx0c3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPSBBTFJFQURZO1xuXHRcdHJldHVybiBhdHRyaWJ1dGU7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KEF0dHJpYnV0ZSwgXCJwcm90b3R5cGVcIiwge1xuXHRcdHZhbHVlOiBOYXRpdmVBdHRyLnByb3RvdHlwZSxcblx0XHR3cml0YWJsZTogZmFsc2Vcblx0fSk7XG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZihBdHRyaWJ1dGUsIE9iamVjdC5nZXRQcm90b3R5cGVPZihOYXRpdmVBdHRyKSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOYXRpdmVBdHRyLnByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG5cdFx0dmFsdWU6IEF0dHJpYnV0ZSxcblx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRjb25maWd1cmFibGU6IHRydWVcblx0fSk7XG5cdGdsb2JhbHMuQXR0ciA9IEF0dHJpYnV0ZTtcblx0Z2xvYmFscy5DdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSA9IFJlZ2lzdHJ5O1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywgXCJjdXN0b21BdHRyaWJ1dGVzXCIsIHtcblx0XHRnZXQ6ICgpID0+IGdsb2JhbFJlZ2lzdHJ5LFxuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdH0pO1xuXHRmb3IgKGNvbnN0IHByb3RvdHlwZSBvZiBbXG5cdFx0RWxlbWVudC5wcm90b3R5cGUsXG5cdFx0U2hhZG93Um9vdC5wcm90b3R5cGUsXG5cdFx0RG9jdW1lbnQucHJvdG90eXBlXG5cdF0pIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsIFwiY3VzdG9tQXR0cmlidXRlUmVnaXN0cnlcIiwge1xuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiByZWdpc3RyeU9mKHRoaXMpO1xuXHRcdH0sXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRjb25maWd1cmFibGU6IHRydWVcblx0fSk7XG5cdGZ1bmN0aW9uIGNyZWF0ZShkb2MsIGF0dHJpYnV0ZSwgcmVnaXN0cnkpIHtcblx0XHRpZiAocmVnaXN0cnkgPT09IHZvaWQgMCkgcmVnaXN0cnkgPSByZWdpc3RyeU9mKGRvYyk7XG5cdFx0Y29uc3QgZGVmaW5pdGlvbiA9IGxvb2t1cChyZWdpc3RyeSwgYXR0cmlidXRlLm5hbWVzcGFjZVVSSSwgYXR0cmlidXRlLmxvY2FsTmFtZSk7XG5cdFx0aWYgKHJlZ2lzdHJ5ICYmIGRlZmluaXRpb24pIGNvbnN0cnVjdChhdHRyaWJ1dGUsIGRlZmluaXRpb24sIHJlZ2lzdHJ5KTtcblx0XHRyZXR1cm4gYXR0cmlidXRlO1xuXHR9XG5cdGRvY1Byb3RvLmNyZWF0ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbnMgPSB7fSkge1xuXHRcdGNvbnN0IHJlZ2lzdHJ5ID0gcmVnaXN0cnlPcHRpb24ob3B0aW9ucywgdHJ1ZSk7XG5cdFx0Y2hlY2tSZWdpc3RyeShyZWdpc3RyeSwgdGhpcyk7XG5cdFx0cmV0dXJuIGNyZWF0ZSh0aGlzLCBuYXRpdmVDcmVhdGVBdHRyaWJ1dGUuY2FsbCh0aGlzLCBuYW1lKSwgcmVnaXN0cnkpO1xuXHR9O1xuXHRkb2NQcm90by5jcmVhdGVBdHRyaWJ1dGVOUyA9IGZ1bmN0aW9uKG5hbWVzcGFjZSwgbmFtZSwgb3B0aW9ucyA9IHt9KSB7XG5cdFx0Y29uc3QgcmVnaXN0cnkgPSByZWdpc3RyeU9wdGlvbihvcHRpb25zLCB0cnVlKTtcblx0XHRjaGVja1JlZ2lzdHJ5KHJlZ2lzdHJ5LCB0aGlzKTtcblx0XHRyZXR1cm4gY3JlYXRlKHRoaXMsIG5hdGl2ZUNyZWF0ZUF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lKSwgcmVnaXN0cnkpO1xuXHR9O1xuXHRkb2NQcm90by5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24obmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IHJlZ2lzdHJ5ID0gcmVnaXN0cnlPcHRpb24ob3B0aW9ucywgdHJ1ZSk7XG5cdFx0Y2hlY2tSZWdpc3RyeShyZWdpc3RyeSwgdGhpcyk7XG5cdFx0Y29uc3QgZWxlbWVudCA9IG5hdGl2ZUNyZWF0ZUVsZW1lbnQuY2FsbCh0aGlzLCBuYW1lLCBvcHRpb25zKTtcblx0XHRzZXRSZWdpc3RyeShlbGVtZW50LCByZWdpc3RyeSA9PT0gdm9pZCAwID8gcmVnaXN0cnlPZih0aGlzKSA6IHJlZ2lzdHJ5KTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fTtcblx0ZG9jUHJvdG8uY3JlYXRlRWxlbWVudE5TID0gZnVuY3Rpb24obmFtZXNwYWNlLCBuYW1lLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgcmVnaXN0cnkgPSByZWdpc3RyeU9wdGlvbihvcHRpb25zLCB0cnVlKTtcblx0XHRjaGVja1JlZ2lzdHJ5KHJlZ2lzdHJ5LCB0aGlzKTtcblx0XHRjb25zdCBlbGVtZW50ID0gbmF0aXZlQ3JlYXRlRWxlbWVudE5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lLCBvcHRpb25zKTtcblx0XHRzZXRSZWdpc3RyeShlbGVtZW50LCByZWdpc3RyeSA9PT0gdm9pZCAwID8gcmVnaXN0cnlPZih0aGlzKSA6IHJlZ2lzdHJ5KTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fTtcblx0ZG9jUHJvdG8uaW1wb3J0Tm9kZSA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMgPSBmYWxzZSkge1xuXHRcdGNvbnN0IHJlZ2lzdHJ5ID0gcmVnaXN0cnlPcHRpb24ob3B0aW9ucywgZmFsc2UpO1xuXHRcdGNoZWNrUmVnaXN0cnkocmVnaXN0cnksIHRoaXMpO1xuXHRcdGNvbnN0IGRlZXAgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zIDogQm9vbGVhbihvcHRpb25zLmRlZXApO1xuXHRcdGNvbnN0IGNvcHkgPSBuYXRpdmVJbXBvcnROb2RlLmNhbGwodGhpcywgbm9kZSwgZGVlcCk7XG5cdFx0Y29uc3QgZmFsbGJhY2sgPSByZWdpc3RyeSA/PyByZWdpc3RyeU9mKHRoaXMpO1xuXHRcdGNvbnN0IGdsb2JhbCA9IGdsb2JhbE9mKHJlZ2lzdHJ5T2YodGhpcykpO1xuXHRcdGNvbnN0IHNvdXJjZXMgPSBbLi4ubGlnaHRFbGVtZW50c0luKG5vZGUpXTtcblx0XHRbLi4ubGlnaHRFbGVtZW50c0luKGNvcHkpXS5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XG5cdFx0XHRjb25zdCBjaG9zZW4gPSBzb3VyY2VzW2ldICYmIHJlZ2lzdHJ5T2Yoc291cmNlc1tpXSkgfHwgZmFsbGJhY2s7XG5cdFx0XHRzZXRSZWdpc3RyeShlbGVtZW50LCBjaG9zZW4gJiYgIXNlbGYoY2hvc2VuKS5zY29wZWQgPyBnbG9iYWwgOiBjaG9zZW4pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBjb3B5O1xuXHR9O1xuXHRlbFByb3RvLmF0dGFjaFNoYWRvdyA9IGZ1bmN0aW9uKGluaXQpIHtcblx0XHRjb25zdCByZWdpc3RyeSA9IHJlZ2lzdHJ5T3B0aW9uKGluaXQsIHRydWUpO1xuXHRcdGNoZWNrUmVnaXN0cnkocmVnaXN0cnksIHRoaXMub3duZXJEb2N1bWVudCk7XG5cdFx0Y29uc3Qgc2hhZG93ID0gbmF0aXZlQXR0YWNoU2hhZG93LmNhbGwodGhpcywgaW5pdCk7XG5cdFx0c2V0UmVnaXN0cnkoc2hhZG93LCByZWdpc3RyeSA9PT0gdm9pZCAwID8gcmVnaXN0cnlPZih0aGlzLm93bmVyRG9jdW1lbnQpIDogcmVnaXN0cnkpO1xuXHRcdGlmIChzaGFkb3cubW9kZSA9PT0gXCJjbG9zZWRcIikgZW5naW5lLmNsb3NlZFNoYWRvd3Muc2V0KHRoaXMsIHNoYWRvdyk7XG5cdFx0b2JzZXJ2ZVJvb3Qoc2hhZG93KTtcblx0XHRyZXR1cm4gc2hhZG93O1xuXHR9O1xuXHRmb3IgKGNvbnN0IHByb3RvdHlwZSBvZiBbXG5cdFx0RWxlbWVudC5wcm90b3R5cGUsXG5cdFx0RG9jdW1lbnQucHJvdG90eXBlLFxuXHRcdERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlXG5cdF0pIHtcblx0XHRjb25zdCBkeW5hbWljID0gcHJvdG90eXBlO1xuXHRcdGNvbnN0IG5hdGl2ZSA9IGR5bmFtaWMubW92ZUJlZm9yZTtcblx0XHRpZiAodHlwZW9mIG5hdGl2ZSAhPT0gXCJmdW5jdGlvblwiKSBjb250aW51ZTtcblx0XHRkeW5hbWljLm1vdmVCZWZvcmUgPSBmdW5jdGlvbihub2RlLCBjaGlsZCkge1xuXHRcdFx0Y29uc3QgY29ubmVjdGVkQmVmb3JlID0gbm9kZS5pc0Nvbm5lY3RlZDtcblx0XHRcdGNvbnN0IG9sZERvY3VtZW50ID0gbm9kZURvY3VtZW50KG5vZGUpO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbmF0aXZlLmNhbGwodGhpcywgbm9kZSwgY2hpbGQpO1xuXHRcdFx0aWYgKGNvbm5lY3RlZEJlZm9yZSAmJiBub2RlLmlzQ29ubmVjdGVkICYmIG9sZERvY3VtZW50ID09PSBub2RlRG9jdW1lbnQobm9kZSkpIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50c0luKG5vZGUpKSBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBBcnJheS5mcm9tKG5hdGl2ZUF0dHJpYnV0ZXMuY2FsbChlbGVtZW50KSkpIHtcblx0XHRcdFx0Y29uc3QgZW50cnkgPSBlbnRyaWVzLmdldChhdHRyaWJ1dGUpO1xuXHRcdFx0XHRpZiAoZW50cnk/LnN0YXRlID09PSBcImN1c3RvbVwiICYmIGVudHJ5LmNvbm5lY3RlZCkgaW52b2tlKGF0dHJpYnV0ZSwgXCJjb25uZWN0ZWRNb3ZlQ2FsbGJhY2tcIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdH1cblx0ZnVuY3Rpb24gY2hlY2tBdHRhY2hhYmxlKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuXHRcdGlmIChlbnRyaWVzLmdldChhdHRyaWJ1dGUpPy5kZWZpbml0aW9uICYmICFpc0hUTUwoZWxlbWVudCkpIHRocm93IGRvbUVycm9yKFwiQ3VzdG9tIGF0dHJpYnV0ZXMgYXJlIHN1cHBvcnRlZCBvbmx5IG9uIEhUTUwgZWxlbWVudHMuXCIsIFwiTm90U3VwcG9ydGVkRXJyb3JcIik7XG5cdH1cblx0ZnVuY3Rpb24gYXR0YWNoZWQoZWxlbWVudCwgYXR0cmlidXRlLCBvbGQpIHtcblx0XHRpZiAob2xkID09PSBhdHRyaWJ1dGUgfHwgdHJhY2tlZC5oYXMoZWxlbWVudCkgfHwgb2JzZXJ2ZWRSb290cy5oYXMoZWxlbWVudC5nZXRSb290Tm9kZSgpKSkgcmV0dXJuO1xuXHRcdHByb2Nlc3NSZWNvcmRzKFt7XG5cdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdHRhcmdldDogZWxlbWVudCxcblx0XHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZS5sb2NhbE5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IGF0dHJpYnV0ZS5uYW1lc3BhY2VVUkksXG5cdFx0XHRvbGRWYWx1ZTogb2xkPy52YWx1ZSA/PyBudWxsXG5cdFx0fV0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgXCJhdHRyaWJ1dGVzXCIsIHtcblx0XHQuLi5hdHRyaWJ1dGVEZXNjcmlwdG9yLFxuXHRcdGdldCgpIHtcblx0XHRcdGNvbnN0IG1hcCA9IG5hdGl2ZUF0dHJpYnV0ZXMuY2FsbCh0aGlzKTtcblx0XHRcdGF0dHJpYnV0ZU1hcHMuc2V0KG1hcCwgdGhpcyk7XG5cdFx0XHRyZXR1cm4gbWFwO1xuXHRcdH1cblx0fSk7XG5cdGZvciAoY29uc3QgbmFtZSBvZiBbXCJzZXRBdHRyaWJ1dGVOb2RlXCIsIFwic2V0QXR0cmlidXRlTm9kZU5TXCJdKSB7XG5cdFx0Y29uc3QgbmF0aXZlID0gZWxQcm90b1tuYW1lXTtcblx0XHRlbFByb3RvW25hbWVdID0gZnVuY3Rpb24oYXR0cmlidXRlKSB7XG5cdFx0XHRjaGVja0F0dGFjaGFibGUodGhpcywgYXR0cmlidXRlKTtcblx0XHRcdGNvbnN0IG9sZCA9IG5hdGl2ZS5jYWxsKHRoaXMsIGF0dHJpYnV0ZSk7XG5cdFx0XHRhdHRhY2hlZCh0aGlzLCBhdHRyaWJ1dGUsIG9sZCk7XG5cdFx0XHRyZXR1cm4gb2xkO1xuXHRcdH07XG5cdH1cblx0Y29uc3QgbWFwUHJvdG8gPSBOYW1lZE5vZGVNYXAucHJvdG90eXBlO1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgW1wic2V0TmFtZWRJdGVtXCIsIFwic2V0TmFtZWRJdGVtTlNcIl0pIHtcblx0XHRjb25zdCBuYXRpdmUgPSBtYXBQcm90b1tuYW1lXTtcblx0XHRtYXBQcm90b1tuYW1lXSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSkge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IGF0dHJpYnV0ZU1hcHMuZ2V0KHRoaXMpO1xuXHRcdFx0aWYgKGVsZW1lbnQpIGNoZWNrQXR0YWNoYWJsZShlbGVtZW50LCBhdHRyaWJ1dGUpO1xuXHRcdFx0Y29uc3Qgb2xkID0gbmF0aXZlLmNhbGwodGhpcywgYXR0cmlidXRlKTtcblx0XHRcdGlmIChlbGVtZW50KSBhdHRhY2hlZChlbGVtZW50LCBhdHRyaWJ1dGUsIG9sZCk7XG5cdFx0XHRyZXR1cm4gb2xkO1xuXHRcdH07XG5cdH1cblx0Y29uc3QgcnVudGltZSA9IHtcblx0XHRyZWdpc3RyeTogZ2xvYmFsUmVnaXN0cnksXG5cdFx0UmVnaXN0cnksXG5cdFx0b2JzZXJ2ZVJvb3QsXG5cdFx0Zmx1c2hcblx0fTtcblx0cG9seWZpbGxTdGF0ZS5ydW50aW1lID0gcnVudGltZTtcblx0b2JzZXJ2ZVJvb3QoZG9jdW1lbnQpO1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHNJbihkb2N1bWVudCkpIHtcblx0XHRjb25zdCBzaGFkb3cgPSBzaGFkb3dPZihlbGVtZW50KTtcblx0XHRpZiAoc2hhZG93KSBvYnNlcnZlUm9vdChzaGFkb3cpO1xuXHR9XG5cdHJldHVybiBydW50aW1lO1xufVxudmFyIGJyaWRnZXMgPSBzaGFyZWQoXCJkb20udHNAbWl4aW5zMi5icmlkZ2VzXCIsICgpID0+ICh7XG5cdGJ5UmVnaXN0cnk6IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLFxuXHRmcm9tQXR0cmlidXRlOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKVxufSkpO1xuZnVuY3Rpb24gbWl4aW5Ub0N1c3RvbUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBtaXhpbiwgb3B0aW9ucyA9IHt9KSB7XG5cdGFzc2VydEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSk7XG5cdGNvbnN0IHJlZ2lzdHJ5ID0gb3B0aW9ucy5yZWdpc3RyeSA/PyBnZXRDdXN0b21BdHRyaWJ1dGVzKCk7XG5cdGxldCBjYWNoZSA9IGJyaWRnZXMuYnlSZWdpc3RyeS5nZXQocmVnaXN0cnkpO1xuXHRpZiAoIWNhY2hlKSBicmlkZ2VzLmJ5UmVnaXN0cnkuc2V0KHJlZ2lzdHJ5LCBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuXHRjb25zdCBwcmV2aW91cyA9IGNhY2hlLmdldChhdHRyaWJ1dGVOYW1lKTtcblx0aWYgKHByZXZpb3VzKSB7XG5cdFx0aWYgKHByZXZpb3VzLm1peGluICE9PSBtaXhpbikgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgYnJpZGdlIGNvbmZsaWN0OiAke2F0dHJpYnV0ZU5hbWV9YCk7XG5cdFx0cmV0dXJuIHByZXZpb3VzLmNvbnN0cnVjdG9yO1xuXHR9XG5cdGlmIChyZWdpc3RyeS5nZXQoYXR0cmlidXRlTmFtZSkpIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIGFscmVhZHkgZGVmaW5lZDogJHthdHRyaWJ1dGVOYW1lfWApO1xuXHRjb25zdCBCYXNlID0gZ2V0Q3VzdG9tQXR0cmlidXRlQmFzZSgpO1xuXHRjb25zdCBvd25lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0ZnVuY3Rpb24gb3duZXIoYXR0cmlidXRlKSB7XG5cdFx0Y29uc3QgcHJldmlvdXNPd25lciA9IG93bmVycy5nZXQoYXR0cmlidXRlKT8uZGVyZWYoKTtcblx0XHRjb25zdCBjdXJyZW50ID0gYXR0cmlidXRlLm93bmVyRWxlbWVudDtcblx0XHRpZiAoY3VycmVudCkge1xuXHRcdFx0aWYgKHByZXZpb3VzT3duZXIgJiYgcHJldmlvdXNPd25lciAhPT0gY3VycmVudCkgcmVsZWFzZShwcmV2aW91c093bmVyLCBtaXhpbiwgYXR0cmlidXRlKTtcblx0XHRcdG93bmVycy5zZXQoYXR0cmlidXRlLCBuZXcgV2Vha1JlZihjdXJyZW50KSk7XG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9XG5cdFx0cmV0dXJuIHByZXZpb3VzT3duZXI7XG5cdH1cblx0Y2xhc3MgTWl4aW5BdHRyaWJ1dGUgZXh0ZW5kcyBCYXNlIHtcblx0XHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBvd25lcih0aGlzKTtcblx0XHRcdGlmIChlbGVtZW50ICYmIHRoaXMub3duZXJFbGVtZW50ID09PSBlbGVtZW50KSBhY3F1aXJlKGVsZW1lbnQsIG1peGluLCB0aGlzKTtcblx0XHR9XG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gb3duZXIodGhpcyk7XG5cdFx0XHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0XHRcdGlmICghdGhpcy5vd25lckVsZW1lbnQpIHJlbGVhc2UoZWxlbWVudCwgbWl4aW4sIHRoaXMpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IGJpbmRpbmcgPSBlbmdpbmUuYmluZGluZ3MuZ2V0KGVsZW1lbnQpPy5nZXQobWl4aW4pO1xuXHRcdFx0XHRpZiAoYmluZGluZykgcmVjb25jaWxlQmluZGluZyhlbGVtZW50LCBtaXhpbiwgYmluZGluZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBvd25lcih0aGlzKTtcblx0XHRcdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsICYmIHRoaXMub3duZXJFbGVtZW50ID09PSBlbGVtZW50KSBhY3F1aXJlKGVsZW1lbnQsIG1peGluLCB0aGlzKTtcblx0XHRcdGNhbGxNaXhpbihlbGVtZW50LCBtaXhpbiwgXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIiwgdGhpcywgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcblx0XHRcdGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgcmVsZWFzZShlbGVtZW50LCBtaXhpbiwgdGhpcyk7XG5cdFx0fVxuXHRcdGFkb3B0ZWRDYWxsYmFjayhfb2xkRG9jdW1lbnQsIF9uZXdEb2N1bWVudCkge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IG93bmVyKHRoaXMpO1xuXHRcdFx0Y29uc3QgYmluZGluZyA9IGVsZW1lbnQgJiYgZW5naW5lLmJpbmRpbmdzLmdldChlbGVtZW50KT8uZ2V0KG1peGluKTtcblx0XHRcdGlmIChlbGVtZW50ICYmIGJpbmRpbmcpIHJlY29uY2lsZUJpbmRpbmcoZWxlbWVudCwgbWl4aW4sIGJpbmRpbmcpO1xuXHRcdH1cblx0XHRjb25uZWN0ZWRNb3ZlQ2FsbGJhY2soKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gb3duZXIodGhpcyk7XG5cdFx0XHRpZiAoZWxlbWVudCkgY2FsbE1peGluKGVsZW1lbnQsIG1peGluLCBcImNvbm5lY3RlZE1vdmVDYWxsYmFja1wiLCB0aGlzKTtcblx0XHR9XG5cdH1cblx0cmVnaXN0cnkuZGVmaW5lKGF0dHJpYnV0ZU5hbWUsIE1peGluQXR0cmlidXRlKTtcblx0Y2FjaGUuc2V0KGF0dHJpYnV0ZU5hbWUsIHtcblx0XHRtaXhpbixcblx0XHRjb25zdHJ1Y3RvcjogTWl4aW5BdHRyaWJ1dGVcblx0fSk7XG5cdHJldHVybiBNaXhpbkF0dHJpYnV0ZTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyQ3Jvc3NNaXhpbihuYW1lLCBtaXhpbiwgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBvcHRpb25zLmF0dHJpYnV0ZU5hbWUgPz8gbmFtZTtcblx0YXNzZXJ0QXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKTtcblx0Y29uc3QgcmVnaXN0cnkgPSBvcHRpb25zLnJlZ2lzdHJ5ID8/IGdldEN1c3RvbUF0dHJpYnV0ZXMoKTtcblx0Y29uc3QgY2FjaGVkID0gYnJpZGdlcy5ieVJlZ2lzdHJ5LmdldChyZWdpc3RyeSk/LmdldChhdHRyaWJ1dGVOYW1lKTtcblx0aWYgKHJlZ2lzdHJ5LmdldChhdHRyaWJ1dGVOYW1lKSAmJiAoIWNhY2hlZCB8fCBjYWNoZWQubWl4aW4gIT09IG1peGluKSkgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgYWxyZWFkeSBkZWZpbmVkOiAke2F0dHJpYnV0ZU5hbWV9YCk7XG5cdHJlZ2lzdGVyTWl4aW4obmFtZSwgbWl4aW4pO1xuXHRyZXR1cm4ge1xuXHRcdG1peGluLFxuXHRcdGF0dHJpYnV0ZTogbWl4aW5Ub0N1c3RvbUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBtaXhpbiwgeyByZWdpc3RyeSB9KVxuXHR9O1xufVxuZnVuY3Rpb24gY3VzdG9tQXR0cmlidXRlVG9NaXhpbihuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBvcHRpb25zLmF0dHJpYnV0ZU5hbWUgPz8gbmFtZTtcblx0YXNzZXJ0QXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKTtcblx0Y29uc3QgcmVnaXN0cnkgPSBvcHRpb25zLnJlZ2lzdHJ5ID8/IGdldEN1c3RvbUF0dHJpYnV0ZXMoKTtcblx0bGV0IGNhY2hlID0gYnJpZGdlcy5mcm9tQXR0cmlidXRlLmdldChyZWdpc3RyeSk7XG5cdGlmICghY2FjaGUpIGJyaWRnZXMuZnJvbUF0dHJpYnV0ZS5zZXQocmVnaXN0cnksIGNhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG5cdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChhdHRyaWJ1dGVOYW1lKTtcblx0aWYgKGNhY2hlZCkge1xuXHRcdGlmIChjYWNoZWQuY29uc3RydWN0b3IgIT09IGNvbnN0cnVjdG9yKSB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBhZGFwdGVyIGNvbmZsaWN0OiAke2F0dHJpYnV0ZU5hbWV9YCk7XG5cdFx0aWYgKG1peGluTmFtZXNwYWNlLmdldChjYWNoZWQ/Lm1peGluKSAhPT0gbmFtZSkgdGhyb3cgbmV3IEVycm9yKFwiQWRhcHRlciBhbHJlYWR5IGhhcyBhbm90aGVyIG1peGluIG5hbWUuXCIpO1xuXHRcdHJldHVybiBjYWNoZWQ/Lm1peGluO1xuXHR9XG5cdGNvbnN0IGV4aXN0aW5nID0gcmVnaXN0cnkuZ2V0KGF0dHJpYnV0ZU5hbWUpO1xuXHRpZiAoZXhpc3RpbmcgJiYgZXhpc3RpbmcgIT09IGNvbnN0cnVjdG9yKSB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBhbHJlYWR5IGRlZmluZWQ6ICR7YXR0cmlidXRlTmFtZX1gKTtcblx0Y29uc3QgbWl4aW4gPSB7IGNvbm5lY3QocmVmKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHJlZi5kZXJlZigpO1xuXHRcdGlmICghZWxlbWVudCB8fCAhaXNIVE1MKGVsZW1lbnQpKSByZXR1cm47XG5cdFx0aWYgKGVsZW1lbnQuY3VzdG9tQXR0cmlidXRlUmVnaXN0cnkgIT09IHJlZ2lzdHJ5KSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBlbGVtZW50J3MgcmVnaXN0cnkgZG9lcyBub3Qgb3duICR7YXR0cmlidXRlTmFtZX07IGluaXRpYWxpemUgaXRzIHNjb3BlIGZpcnN0LmApO1xuXHRcdHJlZ2lzdHJ5LnVwZ3JhZGUoZWxlbWVudCk7XG5cdFx0aWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlTlMobnVsbCwgYXR0cmlidXRlTmFtZSkpIHJldHVybjtcblx0XHRjb25zdCBhdHRyaWJ1dGUgPSBjcmVhdGVDdXN0b21BdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwge1xuXHRcdFx0ZG9jdW1lbnQ6IGVsZW1lbnQub3duZXJEb2N1bWVudCxcblx0XHRcdHJlZ2lzdHJ5XG5cdFx0fSk7XG5cdFx0YXR0cmlidXRlLnZhbHVlID0gdHlwZW9mIG9wdGlvbnMudmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IG9wdGlvbnMudmFsdWUoZWxlbWVudCkgOiBvcHRpb25zLnZhbHVlID8/IFwiXCI7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGVOb2RlKGF0dHJpYnV0ZSk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZU5vZGVOUyhudWxsLCBhdHRyaWJ1dGVOYW1lKSA9PT0gYXR0cmlidXRlKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cmlidXRlKTtcblx0XHR9O1xuXHR9IH07XG5cdGNvbnN0IG5hbWVkID0gbWl4aW5SZWdpc3RyeS5nZXQobmFtZS50cmltKCkpO1xuXHRpZiAobmFtZWQgJiYgbmFtZWQgIT09IG1peGluKSB0aHJvdyBuZXcgRXJyb3IoYE1peGluIG5hbWUgYWxyZWFkeSByZWdpc3RlcmVkOiAke25hbWV9YCk7XG5cdGlmICghbmFtZS50cmltKCkgfHwgL1xccy8udGVzdChuYW1lLnRyaW0oKSkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIG1peGluIG5hbWUuXCIpO1xuXHRpZiAoIWV4aXN0aW5nKSByZWdpc3RyeS5kZWZpbmUoYXR0cmlidXRlTmFtZSwgY29uc3RydWN0b3IpO1xuXHRyZWdpc3Rlck1peGluKG5hbWUsIG1peGluKTtcblx0Y2FjaGUuc2V0KGF0dHJpYnV0ZU5hbWUsIHtcblx0XHRjb25zdHJ1Y3Rvcixcblx0XHRtaXhpblxuXHR9KTtcblx0cmV0dXJuIG1peGluO1xufVxuZnVuY3Rpb24gbWVyZ2VNaXhpbnMobmFtZSwgLi4uaW5wdXQpIHtcblx0Y29uc3QgcGFydHMgPSBbLi4ubmV3IFNldChpbnB1dCldO1xuXHRmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIGlmICghcGFydCB8fCB0eXBlb2YgcGFydCAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcGFydCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwibWVyZ2VNaXhpbnMgZXhwZWN0cyBtaXhpbiBvYmplY3RzLlwiKTtcblx0Y29uc3QgbGVhc2VzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdGNvbnN0IG1lcmdlZCA9IHtcblx0XHRjb25uZWN0KHJlZikge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHJlZi5kZXJlZigpO1xuXHRcdFx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdFx0XHRjb25zdCBsZWFzZSA9IHt9O1xuXHRcdFx0bGVhc2VzLnNldChlbGVtZW50LCBsZWFzZSk7XG5cdFx0XHRmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIGFjcXVpcmUoZWxlbWVudCwgcGFydCwgbGVhc2UpO1xuXHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSByZWxlYXNlKGVsZW1lbnQsIHBhcnRzW2ldLCBsZWFzZSk7XG5cdFx0XHRcdGlmIChsZWFzZXMuZ2V0KGVsZW1lbnQpID09PSBsZWFzZSkgbGVhc2VzLmRlbGV0ZShlbGVtZW50KTtcblx0XHRcdH07XG5cdFx0fSxcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2socmVmLCBfc2VsZiwgcmVsYXRlZCwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gcmVmLmRlcmVmKCk7XG5cdFx0XHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0XHRcdGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykgY2FsbE1peGluKGVsZW1lbnQsIHBhcnQsIFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIsIHJlbGF0ZWQuYXR0cmlidXRlLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuXHRcdH0sXG5cdFx0Y29ubmVjdGVkTW92ZUNhbGxiYWNrKHJlZiwgX3NlbGYsIHJlbGF0ZWQpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSByZWYuZGVyZWYoKTtcblx0XHRcdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRcdFx0Zm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSBjYWxsTWl4aW4oZWxlbWVudCwgcGFydCwgXCJjb25uZWN0ZWRNb3ZlQ2FsbGJhY2tcIiwgcmVsYXRlZC5hdHRyaWJ1dGUpO1xuXHRcdH1cblx0fTtcblx0aWYgKG5hbWUpIHJlZ2lzdGVyTWl4aW4obmFtZSwgbWVyZ2VkKTtcblx0cmV0dXJuIG1lcmdlZDtcbn1cbmZ1bmN0aW9uIGZsdXNoTWl4aW5zKCkge1xuXHRpZiAoIWhhc0RPTSgpKSByZXR1cm47XG5cdHBvbHlmaWxsU3RhdGUucnVudGltZT8uZmx1c2goKTtcblx0Zm9yIChjb25zdCB7IG9ic2VydmVyIH0gb2YgZW5naW5lLndhdGNoZXMudmFsdWVzKCkpIGhhbmRsZVJvb3RSZWNvcmRzKG9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuXHRkcmFpblBlbmRpbmcoKTtcblx0Zm9yIChjb25zdCByb290IG9mIHJvb3RzKSBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHNJbihyb290KSkgdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpO1xuXHRwb2x5ZmlsbFN0YXRlLnJ1bnRpbWU/LmZsdXNoKCk7XG5cdGRyYWluUGVuZGluZygpO1xufVxuYXN5bmMgZnVuY3Rpb24gc2V0dGxlTWl4aW5zKCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdGF3YWl0IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdGZsdXNoTWl4aW5zKCk7XG5cdH1cbn1cbmlmIChoYXNET00oKSkge1xuXHRhcHBseSgpO1xuXHRhZGRSb290KGRvY3VtZW50KTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0hhbmRsZXIudHNcbnZhciBoYW5kbGVIaWRkZW4gPSAoZWxlbWVudCwgXywgdmlzaWJsZSkgPT4ge1xuXHRjb25zdCAkcmVmID0gdmlzaWJsZTtcblx0aWYgKGhhc1ZhbHVlKHZpc2libGUpKSB2aXNpYmxlID0gdmlzaWJsZS52YWx1ZTtcblx0Y29uc3QgaXNWaXNpYmxlID0gKHZpc2libGUgPSBub3JtYWxpemVQcmltaXRpdmUodmlzaWJsZSkpICE9IG51bGwgJiYgdmlzaWJsZSAhPT0gZmFsc2U7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgZWxlbWVudC5oaWRkZW4gPSAhaXNWaXNpYmxlO1xuXHRcdGVsc2UgaWYgKGlzVmlzaWJsZSkgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKTtcblx0XHRlbHNlIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIiwgXCJcIik7XG5cdH0pO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgaGFuZGxlUHJvcGVydHkgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIShwcm9wID0gdHlwZW9mIHByb3AgPT0gXCJzdHJpbmdcIiA/IGtlYmFiVG9DYW1lbChwcm9wKSA6IHByb3ApIHx8ICFlbCB8fCBbXG5cdFx0XCJzdHlsZVwiLFxuXHRcdFwiZGF0YXNldFwiLFxuXHRcdFwiYXR0cmlidXRlU3R5bGVNYXBcIixcblx0XHRcInN0eWxlTWFwXCIsXG5cdFx0XCJjb21wdXRlZFN0eWxlTWFwXCJcblx0XS5pbmRleE9mKHByb3AgfHwgXCJcIikgIT0gLTEpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0aWYgKGVsPy5bcHJvcF0gPT09IHZhbCkgcmV0dXJuIGVsO1xuXHRpZiAoZWw/Lltwcm9wXSAhPT0gdmFsKSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodmFsICE9IG51bGwpIGVsW3Byb3BdID0gdmFsO1xuXHRcdGVsc2UgZGVsZXRlIGVsW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVEYXRhc2V0ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3QgZGF0YXNldFJlZiA9IGVsPy5kYXRhc2V0O1xuXHRpZiAoIXByb3AgfHwgIWVsIHx8ICFkYXRhc2V0UmVmKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWw/LnZhbHVlO1xuXHRwcm9wID0ga2ViYWJUb0NhbWVsKHByb3ApO1xuXHRpZiAoZGF0YXNldFJlZj8uW3Byb3BdID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPT09IGZhbHNlKSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0ZWxzZSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiKSBkYXRhc2V0UmVmW3Byb3BdID0gU3RyaW5nKHZhbCk7XG5cdFx0ZWxzZSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgZGVsZXRlU3R5bGVQcm9wZXJ0eSA9IChlbCwgbmFtZSkgPT4gZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoY2FtZWxUb0tlYmFiKG5hbWUpKTtcbnZhciBoYW5kbGVTdHlsZUNoYW5nZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IHN0eWxlUmVmID0gZWw/LnN0eWxlO1xuXHRpZiAoIXByb3AgfHwgdHlwZW9mIHByb3AgIT0gXCJzdHJpbmdcIiB8fCAhZWwgfHwgIXN0eWxlUmVmKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIodmFsLCAoKSA9PiB7XG5cdFx0aWYgKGlzVmFsKHZhbCkgfHwgaGFzVmFsdWUodmFsKSB8fCBpc1ZhbHVlVW5pdCh2YWwpKSBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wLCB2YWwpO1xuXHRcdGVsc2UgaWYgKHZhbCA9PSBudWxsKSBkZWxldGVTdHlsZVByb3BlcnR5KGVsLCBwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlQXR0cmlidXRlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCFwcm9wIHx8ICFlbCkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRwcm9wID0gY2FtZWxUb0tlYmFiKHByb3ApO1xuXHRpZiAoZWw/LmdldEF0dHJpYnV0ZT8uKHByb3ApID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIgJiYgdmFsICE9IG51bGwgJiYgKHR5cGVvZiB2YWwgPT0gXCJib29sZWFuXCIgPyB2YWwgPT0gdHJ1ZSA6IHRydWUpKSBlbD8uc2V0QXR0cmlidXRlPy4ocHJvcCwgU3RyaW5nKHZhbCkpO1xuXHRcdGVsc2UgZWw/LnJlbW92ZUF0dHJpYnV0ZT8uKHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL2p1bmN0aW9uL3R5cGVzLnRzXG5mdW5jdGlvbiBqdW5jdGlvblRvQm94KGEsIGIpIHtcblx0Y29uc3QgbGVmdCA9IE1hdGgubWluKGEueCwgYi54KTtcblx0Y29uc3QgdG9wID0gTWF0aC5taW4oYS55LCBiLnkpO1xuXHRjb25zdCByaWdodCA9IE1hdGgubWF4KGEueCwgYi54KTtcblx0Y29uc3QgYm90dG9tID0gTWF0aC5tYXgoYS55LCBiLnkpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aDogcmlnaHQgLSBsZWZ0LFxuXHRcdGhlaWdodDogYm90dG9tIC0gdG9wXG5cdH07XG59XG52YXIgSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tc2VsZWN0OnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tc2VsZWN0Om1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXNlbGVjdDplbmRcIixcblx0Y2FuY2VsOiBcImp1bmN0aW9uLXNlbGVjdDpjYW5jZWxcIlxufTtcbnZhciBKVU5DVElPTl9EUkFHX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tZHJhZzpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLWRyYWc6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tZHJhZzplbmRcIlxufTtcbnZhciBKVU5DVElPTl9SRVNJWkVfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1yZXNpemU6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1yZXNpemU6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tcmVzaXplOmVuZFwiXG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vanVuY3Rpb24vSnVuY3Rpb25NaXhpbnMudHNcbnZhciBtaXhpbkRpc3Bvc2Vyc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5EaXNwb3NlcnNcIik7XG52YXIgbWl4aW5EaXNwb3NlcnMgPSBnbG9iYWxUaGlzW21peGluRGlzcG9zZXJzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcHVzaERpc3Bvc2FibGUgPSAoaG9zdCwgbWl4aW5OYW1lLCBmbikgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgbGlzdCA9IG1hcC5nZXQobWl4aW5OYW1lKSA/PyBbXTtcblx0bGlzdC5wdXNoKGZuKTtcblx0bWFwLnNldChtaXhpbk5hbWUsIGxpc3QpO1xuXHRtaXhpbkRpc3Bvc2Vycy5zZXQoaG9zdCwgbWFwKTtcbn07XG52YXIgcnVuRGlzcG9zZXJzID0gKGhvc3QsIG1peGluTmFtZSkgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCk7XG5cdGNvbnN0IGxpc3QgPSBtYXA/LmdldChtaXhpbk5hbWUpO1xuXHRpZiAoIWxpc3QpIHJldHVybjtcblx0Zm9yIChjb25zdCBmbiBvZiBsaXN0KSB0cnkge1xuXHRcdGZuKCk7XG5cdH0gY2F0Y2gge31cblx0bWFwLmRlbGV0ZShtaXhpbk5hbWUpO1xuXHRpZiAobWFwLnNpemUgPT09IDApIG1peGluRGlzcG9zZXJzLmRlbGV0ZShob3N0KTtcbn07XG52YXIgcGFyc2VQeFZhciA9IChob3N0LCBuYW1lKSA9PiB7XG5cdGNvbnN0IHJhdyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnRyaW0/LigpID8/IFwiXCI7XG5cdGNvbnN0IG4gPSBwYXJzZUZsb2F0KHJhdyk7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogMDtcbn07XG52YXIgcXVlcnlIYW5kbGUgPSAoaG9zdCwgYXR0ciwgZmFsbGJhY2spID0+IHtcblx0Y29uc3Qgc2VsID0gaG9zdC5nZXRBdHRyaWJ1dGUoYXR0cik/LnRyaW0oKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxsYmFjaztcblx0Y29uc3QgZm91bmQgPSBob3N0LnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcblx0cmV0dXJuIGZvdW5kIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBmb3VuZCA6IGZhbGxiYWNrO1xufTtcbnZhciBKdW5jdGlvblNlbGVjdE1peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0b3ZlcmxheS5jbGFzc05hbWUgPSBcInVpLWp1bmN0aW9uLXNlbGVjdC1vdmVybGF5XCI7XG5cdFx0b3ZlcmxheS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLW92ZXJsYXlcIiwgXCJcIik7XG5cdFx0b3ZlcmxheS5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6dmFyKC0tei1tYXgsIDk5OTkpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IGRhc2hlZCBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLWNvbG9yLXByaW1hcnksICM1YTdmZmYpIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNWE3ZmZmKSAxNCUsIHRyYW5zcGFyZW50KTtkaXNwbGF5Om5vbmU7aW5zZXQ6YXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjA7XCI7XG5cdFx0Y29uc3QgZW5zdXJlUG9zaXRpb25lZCA9ICgpID0+IHtcblx0XHRcdGlmICgoZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oaG9zdCkpPy5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikgaG9zdC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0XHR9O1xuXHRcdGVuc3VyZVBvc2l0aW9uZWQoKTtcblx0XHRob3N0LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXHRcdGxldCBhY3RpdmUgPSBmYWxzZTtcblx0XHRsZXQgYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRsZXQgYiA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRjb25zdCBsb2NhbFBvaW50ID0gKGV2KSA9PiB7XG5cdFx0XHRjb25zdCByID0gaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IGV2LmNsaWVudFggLSByLmxlZnQsXG5cdFx0XHRcdHk6IGV2LmNsaWVudFkgLSByLnRvcFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNvbnN0IGFwcGx5T3ZlcmxheSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRpZiAoYm94LndpZHRoIDwgMSAmJiBib3guaGVpZ2h0IDwgMSkge1xuXHRcdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5sZWZ0ID0gYCR7Ym94LmxlZnR9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS50b3AgPSBgJHtib3gudG9wfXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUud2lkdGggPSBgJHtib3gud2lkdGh9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBgJHtib3guaGVpZ2h0fXB4YDtcblx0XHR9O1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtanVuY3Rpb24taWdub3JlLXNlbGVjdF0sIFtkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXSwgW2RhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZV0sIGJ1dHRvbiwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpIHJldHVybjtcblx0XHRcdGlmICghKGV2LnRhcmdldCA9PT0gaG9zdCB8fCBob3N0LmNvbnRhaW5zKGV2LnRhcmdldCkpKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSB0cnVlO1xuXHRcdFx0YSA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YiA9IHsgLi4uYSB9O1xuXHRcdFx0aG9zdC5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRiID0gbG9jYWxQb2ludChldik7XG5cdFx0XHRhcHBseU92ZXJsYXkoKTtcblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRib3gsXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBlbmQgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhvc3QucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRib3gsXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0ZW5kKGV2KTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uQ2FuY2VsID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhvc3QucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuY2FuY2VsLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDogeyBob3N0IH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsICgpID0+IHtcblx0XHRcdG92ZXJsYXkucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJjYW5jZWxcIiwgb25DYW5jZWwpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uRHJhZ01peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteFwiLCBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIikpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIikpO1xuXHRcdGNvbnN0IHByZXZpb3VzVHJhbnNmb3JtID0gaG9zdC5zdHlsZS50cmFuc2Zvcm07XG5cdFx0aWYgKCFob3N0LnN0eWxlLnRyYW5zZm9ybSB8fCBob3N0LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJub25lXCIpIGhvc3Quc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChjYWxjKHZhcigtLWp4LWRyYWcteCwgMCkgKiAxcHgpLCBjYWxjKHZhcigtLWp4LWRyYWcteSwgMCkgKiAxcHgpLCAwKVwiO1xuXHRcdGNvbnN0IGhhbmRsZSA9IHF1ZXJ5SGFuZGxlKGhvc3QsIFwiZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRsZXQgc3RhcnRYID0gMDtcblx0XHRsZXQgc3RhcnRZID0gMDtcblx0XHRsZXQgYmFzZVggPSAwO1xuXHRcdGxldCBiYXNlWSA9IDA7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IHRydWU7XG5cdFx0XHRzdGFydFggPSBldi5jbGllbnRYO1xuXHRcdFx0c3RhcnRZID0gZXYuY2xpZW50WTtcblx0XHRcdGJhc2VYID0gcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpO1xuXHRcdFx0YmFzZVkgPSBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIik7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRjbGllbnRYOiBldi5jbGllbnRYLFxuXHRcdFx0XHRcdGNsaWVudFk6IGV2LmNsaWVudFksXG5cdFx0XHRcdFx0YmFzZVgsXG5cdFx0XHRcdFx0YmFzZVlcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRjb25zdCBkeCA9IGV2LmNsaWVudFggLSBzdGFydFg7XG5cdFx0XHRjb25zdCBkeSA9IGV2LmNsaWVudFkgLSBzdGFydFk7XG5cdFx0XHRjb25zdCBueCA9IGJhc2VYICsgZHg7XG5cdFx0XHRjb25zdCBueSA9IGJhc2VZICsgZHk7XG5cdFx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgbngpO1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy15XCIsIG55KTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdGR4LFxuXHRcdFx0XHRcdGR5LFxuXHRcdFx0XHRcdHg6IG54LFxuXHRcdFx0XHRcdHk6IG55XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghZHJhZ2dpbmcpIHJldHVybjtcblx0XHRcdGRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRoYW5kbGUucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHg6IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKSxcblx0XHRcdFx0XHR5OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIilcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsICgpID0+IHtcblx0XHRcdGhvc3Quc3R5bGUudHJhbnNmb3JtID0gcHJldmlvdXNUcmFuc2Zvcm07XG5cdFx0fSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uUmVzaXplTWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgcmVzaXppbmcgPSBmYWxzZTtcblx0XHRsZXQgc3ggPSAwO1xuXHRcdGxldCBzeSA9IDA7XG5cdFx0bGV0IHN3ID0gMDtcblx0XHRsZXQgc2ggPSAwO1xuXHRcdGNvbnN0IG1pblcgPSBNYXRoLm1heCgxMjAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4td1wiKSB8fCBcIlwiKSB8fCAxMjApO1xuXHRcdGNvbnN0IG1pbkggPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdChob3N0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gdHJ1ZTtcblx0XHRcdHN4ID0gZXYuY2xpZW50WDtcblx0XHRcdHN5ID0gZXYuY2xpZW50WTtcblx0XHRcdHN3ID0gaG9zdC5vZmZzZXRXaWR0aDtcblx0XHRcdHNoID0gaG9zdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBzdyxcblx0XHRcdFx0XHRoZWlnaHQ6IHNoXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFyZXNpemluZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbncgPSBNYXRoLm1heChtaW5XLCBzdyArIChldi5jbGllbnRYIC0gc3gpKTtcblx0XHRcdGNvbnN0IG5oID0gTWF0aC5tYXgobWluSCwgc2ggKyAoZXYuY2xpZW50WSAtIHN5KSk7XG5cdFx0XHRob3N0LnN0eWxlLndpZHRoID0gYCR7bnd9cHhgO1xuXHRcdFx0aG9zdC5zdHlsZS5oZWlnaHQgPSBgJHtuaH1weGA7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBudyxcblx0XHRcdFx0XHRoZWlnaHQ6IG5oXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRoYW5kbGUucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IGhvc3Qub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBob3N0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xubmV3IEp1bmN0aW9uU2VsZWN0TWl4aW4oKTtcbm5ldyBKdW5jdGlvbkRyYWdNaXhpbigpO1xubmV3IEp1bmN0aW9uUmVzaXplTWl4aW4oKTtcblxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBET01NaXhpbiwgSnVuY3Rpb25EcmFnTWl4aW4sIEp1bmN0aW9uUmVzaXplTWl4aW4sIEp1bmN0aW9uU2VsZWN0TWl4aW4sIE1BVENILCBNT0MsIE1PQ0VsZW1lbnQsIFJBRkJlaGF2aW9yLCBSRUdFWCwgUk9PVCwgV2F2eVNoYXBlZENpcmNsZSwgX19leHBvcnRQcm9wZXJ0aWVzLCBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLCBhZGRFdmVudCwgYWRkRXZlbnRzLCBhZGRFdmVudHNMaXN0LCBhZGRSb290LCBhbmltYXRlSGlkZSwgYW5pbWF0ZVNob3csIGFwcGx5LCBhdmFpbFNpemUsIGJiaCwgYmJ3LCBiaW5kQmVoYXZpb3IsIGJpbmRNaXhpbnMsIGJpbmRTdG9yZSwgYm9yZGVyQm94SGVpZ2h0LCBib3JkZXJCb3hXaWR0aCwgYm91bmRCZWhhdmlvcnMsIGJvdW5kTWl4aW5TZXQsIGNiaCwgY2J3LCBjaGFuZ2Vab29tLCBjbGFzc2VzLCBjb21wdXRlQ2FyZXRQb3NpdGlvbiwgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50LCBjb250YWluc09yU2VsZiwgY29udGVudEJveEhlaWdodCwgY29udGVudEJveFdpZHRoLCBjcmVhdGVDdXN0b21BdHRyaWJ1dGUsIGNyZWF0ZUN1c3RvbUF0dHJpYnV0ZVJlZ2lzdHJ5LCBjcmVhdGVFbGVtZW50VmFuaWxsYSwgY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQsIGN1c3RvbUF0dHJpYnV0ZVRvTWl4aW4sIGRlbGV0ZVN0eWxlUHJvcGVydHksIGRldGVjdE1vYmlsZSwgZG9Cb3JkZXJPYnNlcnZlLCBkb0NvbnRlbnRPYnNlcnZlLCBlbnN1cmVWaWV3cG9ydEludGVyYWN0aXZlV2lkZ2V0T3ZlcmxheSwgZW5zdXJlVmlld3BvcnRUcmFja2luZywgZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSwgZml4T3JpZW50VG9TY3JlZW4sIGZpeGVkQ2xpZW50Wm9vbSwgZmx1c2hNaXhpbnMsIGdldEF2YWlsU2l6ZSwgZ2V0Qm91bmRpbmdPcmllbnRSZWN0LCBnZXRDb3JyZWN0T3JpZW50YXRpb24sIGdldEN1c3RvbUF0dHJpYnV0ZUJhc2UsIGdldEN1c3RvbUF0dHJpYnV0ZXMsIGdldEVsZW1lbnRSZWxhdGVkLCBnZXRFdmVudFRhcmdldCwgZ2V0T2Zmc2V0UGFyZW50LCBnZXRPZmZzZXRQYXJlbnRDaGFpbiwgZ2V0U3RvcmVzT2ZFbGVtZW50LCBnZXRab29tLCBoYW5kbGVBdHRyaWJ1dGUsIGhhbmRsZURhdGFzZXQsIGhhbmRsZUhpZGRlbiwgaGFuZGxlUHJvcGVydHksIGhhbmRsZVN0eWxlQ2hhbmdlLCBoYXNQYXJlbnQsIGh0bWwsIGluY2x1ZGVTZWxmLCBpbmRleE9mLCBpbml0VGV4dFN0eWxlLCBpc0VsZW1lbnQsIGlzSW5Gb2N1cywgaXNNb2JpbGUsIGlzTmVhcmx5SWRlbnRpdHksIGlzUG9seWZpbGxlZCwgaXNTdXBwb3J0ZWQsIGlzVmFsaWRDdXN0b21BdHRyaWJ1dGVOYW1lLCBpc1ZhbGlkUGFyZW50LCBtYWtlUkFGQ3ljbGUsIG1lYXN1cmVJbnB1dEluRm9jdXMsIG1lYXN1cmVUZXh0LCBtZXJnZU1peGlucywgbWl4aW5EaXNwb3NlcnMsIG1peGluRWxlbWVudHMsIG1peGluTmFtZXNwYWNlLCBtaXhpblJlZ2lzdHJ5LCBtaXhpblRvQ3VzdG9tQXR0cmlidXRlLCBuYW1lUmVnaXN0cnlGLCBuYW1lZFN0b3JlTWFwcywgb2JzZXJ2ZUF0dHJpYnV0ZSwgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IsIG9ic2VydmVCb3JkZXJCb3gsIG9ic2VydmVCeVNlbGVjdG9yLCBvYnNlcnZlQ29udGVudEJveCwgb25Cb3JkZXJPYnNlcnZlLCBvbkNvbnRlbnRPYnNlcnZlLCBvcmllbnRPZiwgb3JpZW50YXRpb25OdW1iZXJNYXAsIHBhc3NpdmVPcHRzLCByZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQsIHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50LCByZWFkVmlydHVhbEtleWJvYXJkSGVpZ2h0UHgsIHJlZmxlY3RCZWhhdmlvcnMsIHJlZmxlY3RNaXhpbnMsIHJlZmxlY3RTdG9yZXMsIHJlZ2lzdGVyQ3Jvc3NNaXhpbiwgcmVnaXN0ZXJNaXhpbiwgcmVtb3ZlRXZlbnQsIHJlbW92ZUV2ZW50cywgcmVtb3ZlUm9vdCwgcmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50LCByb290cywgc2V0QXR0cmlidXRlcywgc2V0QXR0cmlidXRlc0lmTnVsbCwgc2V0Q2hlY2tlZCwgc2V0SWRsZUludGVydmFsLCBzZXR0bGVNaXhpbnMsIHRocm90dGxlTWFwLCB1bmJpbmRNaXhpbnMsIHVuZml4ZWRDbGllbnRab29tLCB1bnJlZ2lzdGVyTWl4aW4sIHVwZGF0ZUFsbE1peGlucywgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMsIHVwZGF0ZVZQLCB1cmwsIHdoZW5BbnlTY3JlZW5DaGFuZ2VzLCB6b29tT2YsIHpvb21WYWx1ZXMgfTsiXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLGlCQUFBQSxJQUFlLGdCQUFBQyxJQUFjLGdCQUFBQyxJQUFjLFlBQUFDLElBQVUscUJBQUFDLElBQW1CLFNBQUFDLElBQU8sZUFBQUMsSUFBYSxnQkFBQUMsSUFBYyx1QkFBQUMsSUFBcUIsc0JBQUFDLElBQW9CLCtCQUFBQyxVQUFtQztBQUMvTCxTQUFTLFVBQUFDLElBQVEsYUFBQUMsSUFBVyxhQUFBQyxJQUFXLGFBQUFDLElBQVcsb0JBQUFDLElBQWtCLG9CQUFBQyxVQUF3QjtBQUU1RixjQUFjO0FBR2QsSUFBSUMsS0FBa0MsdUJBQU8sSUFBSSxrQ0FBa0MsR0FDL0VDLEtBQTRCLFdBQVdELEVBQStCLE1BQXNCLG9CQUFJLElBQUk7QUFDeEc7QUFBQSxFQUNDO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEs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LFFBQ0QsQ0FBQyxDQUFDO0FBQUE7QUFBQSxJQUNIO0FBQ0EsV0FBQStmLEVBQWUvZixHQUFNLHNCQUFzQnhCLEVBQVMwaUIsR0FBUSxlQUFlUCxDQUFNLENBQUMsR0FDbEZaLEVBQWUvZixHQUFNLHNCQUFzQnhCLEVBQVMwaUIsR0FBUSxlQUFlTixDQUFNLENBQUMsR0FDbEZiLEVBQWUvZixHQUFNLHNCQUFzQnhCLEVBQVMwaUIsR0FBUSxhQUFhSixDQUFJLENBQUMsR0FDOUVmLEVBQWUvZixHQUFNLHNCQUFzQnhCLEVBQVMwaUIsR0FBUSxpQkFBaUJKLENBQUksQ0FBQyxHQUMzRTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFdBQVdQLEdBQUs7QUFDZixVQUFNdmdCLElBQU91Z0IsR0FBSyxRQUFRO0FBQzFCLFdBQUl2Z0IsS0FBTWlnQixHQUFhamdCLEdBQU0sb0JBQW9CLEdBQzFDO0FBQUEsRUFDUjtBQUNEO0FBQ0EsSUFBSXNnQixHQUFvQjtBQUN4QixJQUFJVSxHQUFrQjtBQUN0QixJQUFJWSxHQUFvQjsiLAogICJuYW1lcyI6IFsiJGF2b2lkVHJpZ2dlciIsICJjYW1lbFRvS2ViYWIiLCAiY3Z0X2NzX3RvX29zIiwgImhhc1ZhbHVlIiwgImlzQXJyYXlPckl0ZXJhYmxlIiwgImlzVmFsIiwgImlzVmFsdWVVbml0IiwgImtlYmFiVG9DYW1lbCIsICJub3JtYWxpemVHcmlkTGF5b3V0IiwgIm5vcm1hbGl6ZVByaW1pdGl2ZSIsICJyZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwiLCAiYXBwZWFyIiwgImRlY29ySGlkZSIsICJkZWNvclNob3ciLCAiZGlzYXBwZWFyIiwgIm9ic2VydmVTdHlsZVRyZWUiLCAic2V0U3R5bGVQcm9wZXJ0eSIsICJfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sIiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMiLCAib3B0aW9ucyIsICJuYW1lIiwgImUiLCAiX19leHBvcnRQcm9wZXJ0aWVzIiwgImlzTW9iaWxlIiwgImNoZWNrIiwgImEiLCAiZGV0ZWN0TW9iaWxlIiwgImNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrIiwgInJ1bldoZW5JZGxlJDEiLCAiY2IiLCAidGltZW91dCIsICJnZXRPZmZzZXRQYXJlbnQiLCAiZWxlbWVudCIsICJnZXRPZmZzZXRQYXJlbnRDaGFpbiIsICJwYXJlbnRzIiwgImN1cnJlbnQiLCAicGFyZW50IiwgImlzTmVhcmx5SWRlbnRpdHkiLCAibWF0cml4IiwgImVwc2lsb24iLCAibWFrZVJBRkN5Y2xlIiwgImNvbnRyb2wiLCAickFGIiwgInJlcyIsICJSQUZCZWhhdmlvciIsICJzaGVkIiwgIlJPT1QiLCAic2V0QXR0cmlidXRlc0lmTnVsbCIsICJhdHRycyIsICJ2YWx1ZSIsICJvbGQiLCAic2V0QXR0cmlidXRlcyIsICJ0aHJvdHRsZU1hcCIsICJzZXRJZGxlSW50ZXJ2YWwiLCAiYXJncyIsICJzdGF0dXMiLCAiciIsICJib3JkZXJCb3hXaWR0aCIsICJib3JkZXJCb3hIZWlnaHQiLCAiY29udGVudEJveFdpZHRoIiwgImNvbnRlbnRCb3hIZWlnaHQiLCAib25Cb3JkZXJPYnNlcnZlIiwgIm9uQ29udGVudE9ic2VydmUiLCAiZG9Db250ZW50T2JzZXJ2ZSIsICJvYnNlcnZlciIsICJlbnRyaWVzIiwgImVudHJ5IiwgImNvbnRlbnRCb3hTaXplIiwgImRvQm9yZGVyT2JzZXJ2ZSIsICJib3JkZXJCb3hTaXplIiwgInVybCIsICJ0eXBlIiwgInNvdXJjZSIsICJodG1sIiwgInBhcnNlZCIsICJzZXRDaGVja2VkIiwgImlucHV0IiwgImV2IiwgImlzVmFsaWRQYXJlbnQiLCAiaW5kZXhPZiIsICJub2RlIiwgIk1BVENIIiwgIlJFR0VYIiwgImNyZWF0ZUVsZW1lbnRWYW5pbGxhIiwgInNlbGVjdG9yIiwgImNyZWF0ZSIsICJtYXRjaCIsICJjbGFzc05hbWUiLCAiaXNFbGVtZW50IiwgImVsIiwgImluY2x1ZGVTZWxmIiwgInRhcmdldCIsICJzZWwiLCAiaGFzUGFyZW50IiwgInBhc3NpdmVPcHRzIiwgImFkZEV2ZW50IiwgIm9wdHMiLCAid3IiLCAicmVtb3ZlRXZlbnQiLCAiYWRkRXZlbnRzIiwgInJvb3QiLCAiaGFuZGxlcnMiLCAiYWRkRXZlbnRzTGlzdCIsICJldmVudHMiLCAibGlzdCIsICJjYnMiLCAicmVtb3ZlRXZlbnRzIiwgImdldEV2ZW50VGFyZ2V0IiwgInBhdGgiLCAiY29udGFpbnNPclNlbGYiLCAiYiIsICJhRWwiLCAiYkVsIiwgImFJbmRleCIsICJiSW5kZXgiLCAiTU9DRWxlbWVudCIsICJzZWxmIiwgImhvc3RNYXRjaGVkIiwgImNsb3Nlc3QiLCAiaG9zdCIsICJNT0MiLCAiaXNJbkZvY3VzIiwgInNlbGVjdG9yT3JFbGVtZW50IiwgImRpciIsICJhY3RpdmUiLCAiaXNGb2N1c2VkIiwgImlzSG92ZXJlZCIsICJhbHRDbmQiLCAiZ2V0Wm9vbSIsICJ6b29tVmFsdWVzU3ltYm9sIiwgInpvb21WYWx1ZXMiLCAiem9vbU9mIiwgImNvbnRhaW5lciIsICJjaGFuZ2Vab29tIiwgInNjYWxlIiwgImZpeGVkQ2xpZW50Wm9vbSIsICJ1bmZpeGVkQ2xpZW50Wm9vbSIsICJvcmllbnRPZiIsICJyYXciLCAibiIsICJnZXRCb3VuZGluZ09yaWVudFJlY3QiLCAib3JpZW50IiwgInpvb20iLCAiYm94IiwgIm5ieCIsICJvcl9pIiwgInZ2IiwgInNpemUiLCAibGVmdF8iLCAidG9wXyIsICJyaWdodF8iLCAiYm90dG9tXyIsICJsZWZ0IiwgInJpZ2h0IiwgInRvcCIsICJib3R0b20iLCAid2lkdGgiLCAiaGVpZ2h0IiwgImJidyIsICJiYmgiLCAiY2J3IiwgImNiaCIsICJydW5XaGVuSWRsZSIsICJLRVlCT0FSRF9PVkVSTEFZX1BYIiwgImNhcGFjaXRvcktleWJvYXJkSGVpZ2h0IiwgImNhcGFjaXRvcktleWJvYXJkQm91bmQiLCAid2luZG93S2V5Ym9hcmRCb3VuZCIsICJ2aWV3cG9ydFRyYWNraW5nU3RhcnRlZCIsICJuYXRpdmVEaXNwbGF5IiwgIm5hdGl2ZURpc3BsYXlCb3VuZCIsICJuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCIsICJpc05hdGl2ZUNhcGFjaXRvckhvc3QiLCAiY2FwIiwgInJlYWRDd3NCcmlkZ2UiLCAicGFyc2VOYXRpdmVEaXNwbGF5IiwgImluZm8iLCAid2luZG93VyIsICJ3aW5kb3dIIiwgImRpc3BsYXlXIiwgImRpc3BsYXlIIiwgInciLCAiaCIsICJkZW5zaXR5IiwgImFwcGx5TmF0aXZlRGlzcGxheSIsICJuZXh0IiwgInByZXYiLCAic2FtZSIsICJ1cGRhdGVWUCIsICJyZWZyZXNoTmF0aXZlRGlzcGxheSIsICJCcmlkZ2UiLCAicXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCIsICJiaW5kTmF0aXZlRGlzcGxheSIsICJjYWNoZWQiLCAidmlydHVhbEtleWJvYXJkIiwgIklOVEVSQUNUSVZFX1dJREdFVCIsICJWSUVXUE9SVF9GSVQiLCAiZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkiLCAiaGVhZCIsICJtZXRhIiwgImNvbnRlbnQiLCAiZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSIsICJ2ayIsICJkZWVwQWN0aXZlRWxlbWVudCIsICJpc0ltZVRhcmdldCIsICJ0YWciLCAiaXNDb2xsYXBzZWRDYXJldCIsICJsYXlvdXRMb2NrT3JpZW50IiwgImxheW91dExvY2tXIiwgImxheW91dExvY2tIIiwgImxhc3RTdGFibGVLZXlib2FyZCIsICJpc0xhbmRzY2FwZSIsICJyZWFkUGh5c2ljYWxTY3JlZW4iLCAic3ciLCAic2giLCAiYXciLCAiYWgiLCAibGFuZHNjYXBlIiwgImJveExhbmRzY2FwZSIsICJjbGFtcFRvUGh5c2ljYWwiLCAicGh5cyIsICJpbm5lclciLCAiaW5uZXJIIiwgImNsaWVudFciLCAiY2xpZW50SCIsICJjYXBXIiwgImNhcEgiLCAiY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQiLCAic2FmZVdpZHRoIiwgInNhZmVIZWlnaHQiLCAic2FmZUxlZnQiLCAic2FmZVRvcCIsICJyZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQiLCAicmVhZExheW91dFZpZXdwb3J0IiwgInZ2VyIsICJ2dkgiLCAidnZUb3AiLCAidmtIIiwgInZ2T3ZlcmxhcCIsICJuYXRpdmVDYXAiLCAia2V5Ym9hcmQiLCAiY2FuZGlkYXRlVyIsICJjYW5kaWRhdGVIIiwgIndpZHRoU3RhYmxlIiwgImVkaXRhYmxlRm9jdXNlZCIsICJjb2Fyc2VQb2ludGVyIiwgInN1ZGRlblNocmluayIsICJzaHJpbmsiLCAiZXhwYW5kZWRTZWxlY3Rpb24iLCAibG9ja2VkIiwgImtiIiwgImlzSW1lQ2hyb21lTG9jayIsICJjbHMiLCAicGFyZW50T2YiLCAiaXNTY3JvbGxwb3J0IiwgInN0eWxlIiwgIm95IiwgImZpbmRSYXdFZGl0b3JTY3JvbGxwb3J0IiwgInN0YXJ0IiwgImlubmVyIiwgImZpbmRJbWVTY3JvbGxwb3J0IiwgInJlYWRDYXJldFJlY3QiLCAicmFuZ2UiLCAicmVjdHMiLCAicmVjdCIsICJwaW5JbWVDYXJldEluU2Nyb2xscG9ydCIsICJ2aXNpYmxlQm90dG9tIiwgIm92ZXJmbG93IiwgInBvcnQiLCAicGluVmlzdWFsVmlld3BvcnQiLCAib3ZlcmxheVBpbm5pbmciLCAicmVzZXRDaHJvbWVTY3JvbGwiLCAicGluT3ZlcmxheVNjcm9sbCIsICJpbWUiLCAiYm9keSIsICJzY3JvbGxJbnRvVmlld1BhdGNoZWQiLCAicGF0Y2hJbWVTY3JvbGxJbnRvVmlldyIsICJvcmlnIiwgImFyZyIsICJwaW5JbWVDaHJvbWUiLCAicmVhZFZpcnR1YWxLZXlib2FyZEhlaWdodFB4IiwgImdldEF2YWlsU2l6ZSIsICJsYXlvdXQiLCAidnZCbG9jayIsICJwYW5lVyIsICJwYW5lSCIsICJ3aW5kb3dlZFciLCAid2luZG93ZWRIIiwgInNjcmVlblciLCAic2NyZWVuSCIsICJuYXRpdmVTY2FsZSIsICJhdmFpbFNpemUiLCAiY2xhc3NlcyIsICJvcmllbnRhdGlvbk51bWJlck1hcCIsICJydWxlIiwgInByb3BOYW1lIiwgInByb3BWYWx1ZSIsICJleGlzdHMiLCAiZ2V0Q29ycmVjdE9yaWVudGF0aW9uIiwgIm9yaWVudGF0aW9uVHlwZSIsICJwYXNzaXZlT3B0cyQxIiwgImFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQiLCAiY2xlYXJDYXBhY2l0b3JLZXlib2FyZEhlaWdodCIsICJiaW5kV2luZG93S2V5Ym9hcmRFdmVudHMiLCAib25TaG93IiwgImRldGFpbCIsICJmcm9tRGV0YWlsIiwgImJpbmRDYXBhY2l0b3JLZXlib2FyZCIsICJLZXlib2FyZCIsICJlbnN1cmVWaWV3cG9ydFRyYWNraW5nIiwgIndoZW5BbnlTY3JlZW5DaGFuZ2VzIiwgInRpY2tpbmciLCAidXBkYXRlIiwgInVuc3Vic2NyaWJlcnMiLCAidW5zdWIiLCAiZml4T3JpZW50VG9TY3JlZW4iLCAiY3R4IiwgImluaXRUZXh0U3R5bGUiLCAiZm9udFdlaWdodCIsICJmb250U2l6ZSIsICJmb250RmFtaWx5IiwgImZvbnRTdHJldGNoIiwgIm1lYXN1cmVUZXh0IiwgInRleHQiLCAibWVhc3VyZUlucHV0SW5Gb2N1cyIsICJjb21wdXRlQ2FyZXRQb3NpdGlvbiIsICJwb2ludCIsICJjdXJyZW50V2lkdGgiLCAiaSIsICJjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQiLCAiY2xpZW50IiwgInJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50IiwgImxheW91dE92ZXJyaWRlIiwgImMiLCAiYmFzZSIsICJyZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQiLCAiZ3JpZFN5c3RlbSIsICJjbGllbnRQb2ludCIsICJtb2RlIiwgImNzIiwgInBsIiwgInB0IiwgInByIiwgInBiIiwgImNvbnRlbnRXIiwgImNvbnRlbnRIIiwgImNzQ29vcmQiLCAiYW5pbWF0ZVNob3ciLCAiYW5pbWF0ZUhpZGUiLCAiV2F2eVNoYXBlZENpcmNsZSIsICJzdGVwcyIsICJhbXBsaXR1ZGUiLCAiZnJlcSIsICJwb2ludHMiLCAiYW5nbGUiLCAic3RlcCIsICJ2YXJpYW50IiwgImZ1bmMiLCAib25Cb3JkZXJPYnNlcnZlU3ltYm9sIiwgIm9uQm9yZGVyT2JzZXJ2ZSQxIiwgIm9uQ29udGVudE9ic2VydmVTeW1ib2wiLCAib25Db250ZW50T2JzZXJ2ZSQxIiwgInVud3JhcEZyb21RdWVyeSIsICJub3JtYWxpemVTZWxlY3RvciIsICJmYWxsYmFjayIsICJzYWZlUXVlcnlTZWxlY3RvckFsbCIsICJzYWZlTWF0Y2hlcyIsICJvYnNlcnZlQ29udGVudEJveCIsICJjYWxsYmFja3MiLCAib2JzZXJ2ZUJvcmRlckJveCIsICJvYnNlcnZlQXR0cmlidXRlIiwgImF0dHJpYnV0ZSIsICJvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvciIsICJhdHRyaWJ1dGVMaXN0IiwgInMiLCAibXV0YXRpb25MaXN0IiwgIm11dGF0aW9uIiwgImFkZGVkTm9kZXMiLCAicmVtb3ZlZE5vZGVzIiwgIm9ic2VydmVCeVNlbGVjdG9yIiwgIm11dCIsICJvYnMiLCAidW53cmFwTm9kZXNCeVNlbGVjdG9yIiwgIm5vZGVzIiwgIiRub2RlcyIsICJvYlJlZiIsICJoYW5kbGVNdXRhdGlvbiIsICJoYW5kbGVDb21lIiwgImhhbmRsZU91dENvbWUiLCAiaGFuZGxlRm9jdXNDbGljayIsICJmYWN0b3JzIiwgInNlbGVjdGVkIiwgImJvdW5kQmVoYXZpb3JzIiwgImJpbmRCZWhhdmlvciIsICJiZWhTZXQiLCAiYmVoYXZpb3IiLCAicmVmbGVjdEJlaGF2aW9ycyIsICJiZWhhdmlvcnMiLCAibmFtZWRTdG9yZU1hcHNTeW1ib2wiLCAibmFtZWRTdG9yZU1hcHMiLCAiZ2V0U3RvcmVzT2ZFbGVtZW50IiwgIm1hcCIsICJFIiwgIm0iLCAiaXNXZWFrQ29tcGF0aWJsZSIsICJiaW5kU3RvcmUiLCAib2JqIiwgIndlYWtNYXAiLCAicmVmbGVjdFN0b3JlcyIsICJzdG9yZXMiLCAiZ2xvYmFscyIsICJzaGFyZWQiLCAia2V5IiwgInN5bWJvbCIsICJoYXNET00iLCAicmVxdWlyZURPTSIsICJyZXBvcnQiLCAiZXJyb3IiLCAiZm4iLCAic2FmZSIsICJjYWxsYmFjayIsICJkb21FcnJvciIsICJtZXNzYWdlIiwgImlzVmFsaWRDdXN0b21BdHRyaWJ1dGVOYW1lIiwgImFzc2VydEF0dHJpYnV0ZU5hbWUiLCAiaXNFbGVtZW50JDEiLCAiaXNIVE1MIiwgImlzU2hhZG93IiwgImJvdW5kTWl4aW5TZXQiLCAibWl4aW5FbGVtZW50cyIsICJtaXhpblJlZ2lzdHJ5IiwgIm1peGluTmFtZXNwYWNlIiwgImVuZ2luZSIsICJyb290cyIsICJzaGFkb3dPZiIsICJlbGVtZW50c0luIiwgInN0YWNrIiwgImNoaWxkIiwgInNoYWRvdyIsICJsaWdodEVsZW1lbnRzSW4iLCAiYXR0cmlidXRlc0ZvciIsICJiaW5kaW5nIiwgInJlc3VsdCIsICJnZXRFbGVtZW50UmVsYXRlZCIsICJtaXhpbiIsICJhdHRyaWJ1dGVzIiwgImJpbmRpbmdGb3IiLCAiY2FsbE1peGluIiwgImV4dHJhIiwgInJlY29uY2lsZUJpbmRpbmciLCAidHVybiIsICJvbGREb2N1bWVudCIsICJ3YW50ZWQiLCAic2V0IiwgImVsZW1lbnRzIiwgImNsZWFudXAiLCAiZW5xdWV1ZSIsICJhY3F1aXJlIiwgInJlbGVhc2UiLCAiZHJhaW5QZW5kaW5nIiwgInBlbmRpbmciLCAidXBkYXRlQWxsTWl4aW5zIiwgImRhdGFOYW1lcyIsICJ3cml0ZURhdGFOYW1lcyIsICJuYW1lcyIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXMiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMiLCAiYmluZE1peGlucyIsICJtaXhTZXQiLCAidW5iaW5kTWl4aW5zIiwgInJlZmxlY3QiLCAicmVmbGVjdE1peGlucyIsICJtaXhpbnMiLCAidmFsdWVzIiwgInJlZ2lzdGVyTWl4aW4iLCAiZXhpc3RpbmciLCAicHJldmlvdXNOYW1lIiwgInVucmVnaXN0ZXJNaXhpbiIsICJuYW1lUmVnaXN0cnlGIiwgImNhcHR1cmVEaXNwb3NlciIsICJyZWNvbmNpbGVUcmVlU29vbiIsICJhZGRSb290IiwgImhhbmRsZVJvb3RSZWNvcmRzIiwgInJlY29yZHMiLCAicmVjb3JkIiwgImRpc3Bvc2VycyIsICJwb2x5ZmlsbFN0YXRlIiwgInJlbW92ZVJvb3QiLCAid2F0Y2giLCAiZGlzcG9zZSIsICJET01NaXhpbiIsICJfZWxlbWVudCIsICJfc2VsZiIsICJfcmVsYXRlZCIsICJpc1N1cHBvcnRlZCIsICJpc1BvbHlmaWxsZWQiLCAiYXBwbHkiLCAicnVudGltZSIsICJpbnN0YWxsQXR0cmlidXRlUG9seWZpbGwiLCAiZ2V0Q3VzdG9tQXR0cmlidXRlcyIsICJjcmVhdGVDdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSIsICJnZXRDdXN0b21BdHRyaWJ1dGVCYXNlIiwgImNyZWF0ZUN1c3RvbUF0dHJpYnV0ZSIsICJkb2MiLCAiTmF0aXZlQXR0ciIsICJkb2NQcm90byIsICJlbFByb3RvIiwgIm5hdGl2ZUNyZWF0ZUF0dHJpYnV0ZSIsICJuYXRpdmVDcmVhdGVBdHRyaWJ1dGVOUyIsICJuYXRpdmVDcmVhdGVFbGVtZW50IiwgIm5hdGl2ZUNyZWF0ZUVsZW1lbnROUyIsICJuYXRpdmVJbXBvcnROb2RlIiwgIm5hdGl2ZUF0dGFjaFNoYWRvdyIsICJhdHRyaWJ1dGVEZXNjcmlwdG9yIiwgIm5hdGl2ZUF0dHJpYnV0ZXMiLCAiQUxSRUFEWSIsICJjYWxsYmFja05hbWVzIiwgImludGVybmFscyIsICJyZWdpc3RyaWVzIiwgInJlZ2lzdHJ5RG9jdW1lbnRzIiwgInRyYWNrZWQiLCAiYXR0cmlidXRlTWFwcyIsICJvYnNlcnZlZFJvb3RzIiwgImxvY2FsT2JzZXJ2ZXJzIiwgImNvbnN0cnVjdGluZ0dsb2JhbCIsICJnbG9iYWxSZWdpc3RyeSIsICJyZWdpc3RyeSIsICJub2RlRG9jdW1lbnQiLCAic2V0UmVnaXN0cnkiLCAiZ2xvYmFsT2YiLCAiZXhjbHVzaXZlRnJhZ21lbnQiLCAicmVnaXN0cnlPZiIsICJhZG9wdGVkIiwgImxvb2t1cCIsICJuYW1lc3BhY2UiLCAicmVnaXN0cnlPcHRpb24iLCAibnVsbGFibGUiLCAiY2hlY2tSZWdpc3RyeSIsICJpbnZva2UiLCAiZGVmaW5pdGlvbiIsICJjb25uZWN0IiwgImRpc2Nvbm5lY3QiLCAiYWRvcHQiLCAidHJhY2siLCAibG9jYWwiLCAicHJvY2Vzc1JlY29yZHMiLCAidW50cmFjayIsICJydW5Db25zdHJ1Y3RvciIsICJDIiwgInByZXZpb3VzIiwgImNvbnN0cnVjdCIsICJvd25lckRvY3VtZW50IiwgImxvY2FsTmFtZSIsICJuYW1lc3BhY2VVUkkiLCAicHJlZml4IiwgInVwZ3JhZGUiLCAidHJ5VXBncmFkZSIsICJCYXRjaCIsICJpbmRleCIsICJieU5hbWUiLCAiaXRlbSIsICJsYXRlciIsICJvYnNlcnZlUm9vdCIsICJvbGRWYWx1ZSIsICJmbHVzaCIsICJSZWdpc3RyeSIsICJjb25zdHJ1Y3RvciIsICJzdGF0ZSIsICJwcm90b3R5cGUiLCAicmVzb2x2ZSIsICJwcm9taXNlIiwgImlzRG9jdW1lbnQiLCAiQXR0cmlidXRlIiwgImRlZXAiLCAiY29weSIsICJnbG9iYWwiLCAic291cmNlcyIsICJjaG9zZW4iLCAiaW5pdCIsICJkeW5hbWljIiwgIm5hdGl2ZSIsICJjb25uZWN0ZWRCZWZvcmUiLCAiY2hlY2tBdHRhY2hhYmxlIiwgImF0dGFjaGVkIiwgIm1hcFByb3RvIiwgImJyaWRnZXMiLCAibWl4aW5Ub0N1c3RvbUF0dHJpYnV0ZSIsICJhdHRyaWJ1dGVOYW1lIiwgImNhY2hlIiwgIkJhc2UiLCAib3duZXJzIiwgIm93bmVyIiwgInByZXZpb3VzT3duZXIiLCAiTWl4aW5BdHRyaWJ1dGUiLCAibmV3VmFsdWUiLCAiX29sZERvY3VtZW50IiwgIl9uZXdEb2N1bWVudCIsICJyZWdpc3RlckNyb3NzTWl4aW4iLCAiY3VzdG9tQXR0cmlidXRlVG9NaXhpbiIsICJyZWYiLCAibmFtZWQiLCAibWVyZ2VNaXhpbnMiLCAicGFydHMiLCAicGFydCIsICJsZWFzZXMiLCAibWVyZ2VkIiwgImxlYXNlIiwgInJlbGF0ZWQiLCAiZmx1c2hNaXhpbnMiLCAic2V0dGxlTWl4aW5zIiwgImhhbmRsZUhpZGRlbiIsICJfIiwgInZpc2libGUiLCAiJHJlZiIsICJpc1Zpc2libGUiLCAiaGFuZGxlUHJvcGVydHkiLCAicHJvcCIsICJ2YWwiLCAiaGFuZGxlRGF0YXNldCIsICJkYXRhc2V0UmVmIiwgImRlbGV0ZVN0eWxlUHJvcGVydHkiLCAiaGFuZGxlU3R5bGVDaGFuZ2UiLCAic3R5bGVSZWYiLCAiaGFuZGxlQXR0cmlidXRlIiwgImp1bmN0aW9uVG9Cb3giLCAiSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyIsICJKVU5DVElPTl9EUkFHX0VWRU5UUyIsICJKVU5DVElPTl9SRVNJWkVfRVZFTlRTIiwgIm1peGluRGlzcG9zZXJzU3ltYm9sIiwgIm1peGluRGlzcG9zZXJzIiwgInB1c2hEaXNwb3NhYmxlIiwgIm1peGluTmFtZSIsICJydW5EaXNwb3NlcnMiLCAicGFyc2VQeFZhciIsICJxdWVyeUhhbmRsZSIsICJhdHRyIiwgImZvdW5kIiwgIkp1bmN0aW9uU2VsZWN0TWl4aW4iLCAid0VsIiwgIm92ZXJsYXkiLCAibG9jYWxQb2ludCIsICJhcHBseU92ZXJsYXkiLCAib25Eb3duIiwgIm9uTW92ZSIsICJlbmQiLCAib25VcCIsICJvbkNhbmNlbCIsICJKdW5jdGlvbkRyYWdNaXhpbiIsICJwcmV2aW91c1RyYW5zZm9ybSIsICJoYW5kbGUiLCAiZHJhZ2dpbmciLCAic3RhcnRYIiwgInN0YXJ0WSIsICJiYXNlWCIsICJiYXNlWSIsICJkeCIsICJkeSIsICJueCIsICJueSIsICJKdW5jdGlvblJlc2l6ZU1peGluIiwgInJlc2l6aW5nIiwgInN4IiwgInN5IiwgIm1pblciLCAibWluSCIsICJudyIsICJuaCJdCn0K

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
  }, c = e ?? (ht(t) || 0), l = typeof window < "u" ? window.visualViewport : null, u = [((l?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((l?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [f, v] = Je([o.left, o.top], u, c), [p, b] = Je([o.right, o.bottom], u, c), [y, m] = c == 0 || c == 3 ? [f, p] : [p, f], [g, x] = c == 0 || c == 1 ? [v, b] : [b, v], [C, O] = c % 2 ? [o.height, o.width] : [o.width, o.height];
  return {
    left: y,
    top: g,
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
  const b = Math.max(e, r), y = Math.max(n, o + c, p > 0 ? o + p : 0), m = wn() ? "l" : "p";
  m !== un && (un = m, D = 0, V = 0);
  const g = D <= 0 || Math.abs(D - b) < 32, x = P(tt()) || P(document.activeElement);
  let C = !1;
  try {
    C = typeof matchMedia == "function" && matchMedia("(pointer: coarse)").matches;
  } catch {
    C = !1;
  }
  const O = !v && g && (x || C) && V > 0 && V - y >= U;
  if (p < U && O) {
    const $ = Math.max(0, V - y, V - (o + c));
    $ >= U && (p = $);
  }
  const q = !kt();
  q && Zt >= U ? p = Zt : p >= U ? Zt = p : !P(tt()) && !P(document.activeElement) && (Zt = 0), p > 0 || P(tt()) || P(document.activeElement) || O || q ? (D = Math.max(b, D), V = Math.max(y, V)) : (D = b, V = y);
  const B = nr(D || b, V || y);
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
    const r = xn(), o = typeof window < "u" && Number(window.innerWidth) || 0, c = typeof window < "u" && Number(window.innerHeight) || 0, l = Math.max(o, e.width), u = Math.max(c, e.height), f = !A && l > 0 && r.width > l + 64, v = !A && u > 0 && r.height > u + 64, p = f ? l : Math.max(r.width, l), b = v ? u : Math.max(r.height, u), y = p > 0 ? `${p}px` : "100lvi", m = b > 0 ? `${b}px` : "100lvb", g = A?.density || Number(devicePixelRatio) || 1, x = A ? {
      "--native-density": String(A.density || g),
      "--native-dpi": String(A.densityDpi || 0),
      "--native-ppi": String(A.ppi || 0),
      "--native-xdpi": String(A.xdpi || 0),
      "--native-ydpi": String(A.ydpi || 0),
      "--native-font-scale": String(A.fontScale || 1)
    } : {};
    return {
      "--screen-width": y,
      "--screen-height": m,
      "--avail-width": y,
      "--avail-height": m,
      "--view-height": `${e.height}px`,
      "--pixel-ratio": String(g),
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
  const c = hr(t, n?.layout), l = ht(t), u = globalThis.getComputedStyle?.(t), f = parseFloat(u?.paddingLeft) || 0, v = parseFloat(u?.paddingTop) || 0, p = parseFloat(u?.paddingRight) || 0, b = parseFloat(u?.paddingBottom) || 0, y = Math.max(1, (o.width || t.clientWidth || 1) - f - p), m = Math.max(1, (o.height || t.clientHeight || 1) - v - b), g = [(e?.[0] || 0) - o.left - f, (e?.[1] || 0) - o.top - v];
  return In(g, [y, m], c, l, {
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
      p.push(...Array.from(v.addedNodes || []).flatMap((y) => St(y, o))), b.push(...Array.from(v.removedNodes || []).flatMap((y) => St(y, o))), [...new Set(p)].filter((y) => Ae(y, o))?.map?.((y) => {
        c.forEach((m) => {
          r({
            target: y,
            type: "attributes",
            attributeName: m,
            oldValue: y?.getAttribute?.(m)
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
    const g = Array.from(m || []) || [];
    return g.push(...Array.from(m || []).flatMap((x) => St(x, r))), [...Array.from(new Set(g).values())].filter((x) => Ae(x, r));
  };
  let c = null;
  const l = (m) => {
    const g = c?.deref?.(), x = o(m.addedNodes), C = o(m.removedNodes);
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
    }, g);
  }, u = (m) => {
    l({
      addedNodes: [m?.target].filter((g) => !!g),
      removedNodes: [m?.relatedTarget].filter((g) => !!g),
      type: "childList",
      target: m?.currentTarget
    });
  }, f = (m) => {
    l({
      addedNodes: [m?.relatedTarget].filter((g) => !!g),
      removedNodes: [m?.target].filter((g) => !!g),
      type: "childList",
      target: m?.currentTarget
    });
  }, v = (m) => {
    l({
      addedNodes: [m?.target].filter((g) => !!g),
      removedNodes: [m?.relatedTarget || document?.activeElement].filter((g) => !!g),
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
  const b = new MutationObserver((m, g) => {
    for (const x of m) x.type == "childList" && l(x);
  });
  c = new WeakRef(b), (t?.element ?? t) instanceof Node && b.observe(t = Vt(t), {
    childList: !0,
    subtree: !0
  });
  const y = St(t, r);
  return y.length > 0 && n?.({
    addedNodes: y,
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
      for (const n of e.addedNodes) Nt(n);
      for (const n of e.removedNodes) Nt(n);
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
    for (const o of r.addedNodes) Nt(o);
    for (const o of r.removedNodes) Nt(o);
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
  const t = L.Attr, e = Document.prototype, n = Element.prototype, r = e.createAttribute, o = e.createAttributeNS, c = e.createElement, l = e.createElementNS, u = e.importNode, f = n.attachShadow, v = Object.getOwnPropertyDescriptor(Element.prototype, "attributes"), p = v.get, b = /* @__PURE__ */ Symbol("already constructed"), y = [
    "connectedCallback",
    "disconnectedCallback",
    "connectedMoveCallback",
    "adoptedCallback",
    "attributeChangedCallback"
  ], m = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakSet(), $ = /* @__PURE__ */ new WeakMap();
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
    g.set(s, i), x.set(s, s.ownerDocument);
  }
  function Ie(s) {
    return s && !H(s).scoped ? s : null;
  }
  function _e(s) {
    return s.nodeType === 11 && !ge(s);
  }
  function M(s) {
    if (s.nodeType === 9) return g.get(s) ?? null;
    if (g.has(s)) {
      const a = g.get(s);
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
          for (const h of a.addedNodes) this.tree(h);
          for (const h of a.removedNodes) this.tree(h);
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
        for (const T of y) {
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
  }), ue = !0, Q = new it(), ue = !1, g.set(document, Q);
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
    const b = u.get(p)?.deref(), y = p.ownerElement;
    return y ? (b && b !== y && lt(b, e, p), u.set(p, new WeakRef(y)), y) : b;
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
          const y = E.bindings.get(b)?.get(e);
          y && Lt(b, e, y);
        }
    }
    attributeChangedCallback(b, y) {
      const m = f(this);
      m && (y !== null && this.ownerElement === m && Wt(m, e, this), et(m, e, "attributeChangedCallback", this, b, y), y === null && lt(m, e, this));
    }
    adoptedCallback(b, y) {
      const m = f(this), g = m && E.bindings.get(m)?.get(e);
      m && g && Lt(m, e, g);
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
    const y = Tr(r, {
      document: b.ownerDocument,
      registry: o
    });
    return y.value = typeof n.value == "function" ? n.value(b) : n.value ?? "", b.setAttributeNode(y), () => {
      b.getAttributeNodeNS(null, r) === y && b.removeAttributeNode(y);
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
    const u = (g) => {
      const x = e.getBoundingClientRect();
      return {
        x: g.clientX - x.left,
        y: g.clientY - x.top
      };
    }, f = () => {
      const g = ve(c, l);
      if (g.width < 1 && g.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${g.left}px`, n.style.top = `${g.top}px`, n.style.width = `${g.width}px`, n.style.height = `${g.height}px`;
    }, v = (g) => {
      g.button === 0 && (g.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (g.target === e || e.contains(g.target)) && (o = !0, c = u(g), l = { ...c }, e.setPointerCapture(g.pointerId), e.dispatchEvent(new CustomEvent(Kt.start, {
        bubbles: !0,
        detail: {
          a: { ...c },
          b: { ...l },
          host: e
        }
      })), f()));
    }, p = (g) => {
      if (!o) return;
      l = u(g), f();
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
    }, b = (g) => {
      if (!o) return;
      o = !1;
      try {
        e.releasePointerCapture(g.pointerId);
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
    }, y = (g) => {
      o && b(g);
    }, m = (g) => {
      if (o) {
        o = !1, n.style.display = "none";
        try {
          e.releasePointerCapture(g.pointerId);
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
    }), R(e, "ui-junction-select", S(e, "pointerdown", v)), R(e, "ui-junction-select", S(e, "pointermove", p)), R(e, "ui-junction-select", S(e, "pointerup", y)), R(e, "ui-junction-select", S(e, "pointercancel", m)), this;
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
    const v = (y) => {
      y.button === 0 && (y.target !== r && !r.contains(y.target) || (o = !0, c = y.clientX, l = y.clientY, u = st(e, "--jx-drag-x"), f = st(e, "--jx-drag-y"), r.setPointerCapture(y.pointerId), e.dispatchEvent(new CustomEvent(we.start, {
        bubbles: !0,
        detail: {
          host: e,
          clientX: y.clientX,
          clientY: y.clientY,
          baseX: u,
          baseY: f
        }
      }))));
    }, p = (y) => {
      if (!o) return;
      const m = y.clientX - c, g = y.clientY - l, x = u + m, C = f + g;
      Et(e, "--jx-drag-x", x), Et(e, "--jx-drag-y", C), e.dispatchEvent(new CustomEvent(we.move, {
        bubbles: !0,
        detail: {
          host: e,
          dx: m,
          dy: g,
          x,
          y: C
        }
      }));
    }, b = (y) => {
      if (o) {
        o = !1;
        try {
          r.releasePointerCapture(y.pointerId);
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
      const g = Math.max(f, l + (m.clientX - o)), x = Math.max(v, u + (m.clientY - c));
      e.style.width = `${g}px`, e.style.height = `${x}px`, e.dispatchEvent(new CustomEvent(xe.move, {
        bubbles: !0,
        detail: {
          host: e,
          width: g,
          height: x
        }
      }));
    }, y = (m) => {
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
    return R(e, "ui-junction-resize", S(n, "pointerdown", p)), R(e, "ui-junction-resize", S(n, "pointermove", b)), R(e, "ui-junction-resize", S(n, "pointerup", y)), R(e, "ui-junction-resize", S(n, "pointercancel", y)), this;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwgfSBmcm9tIFwiQGZlc3QtbGliL2NvcmVcIjtcbmltcG9ydCB7IGFwcGVhciwgZGVjb3JIaWRlLCBkZWNvclNob3csIGRpc2FwcGVhciwgb2JzZXJ2ZVN0eWxlVHJlZSwgc2V0U3R5bGVQcm9wZXJ0eSB9IGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCI7XG5cbmV4cG9ydCAqIGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCJcblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9Qcm9wZXJ0aWVzLnRzXG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzID0gZ2xvYmFsVGhpc1tfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtZnJlcVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1waXhlbC1yYXRpb1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXlcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXhcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXlcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fVxuXS5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIENTUz8ucmVnaXN0ZXJQcm9wZXJ0eSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0Y29uc3QgbmFtZSA9IFN0cmluZyhvcHRpb25zPy5uYW1lIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFuYW1lIHx8IF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuaGFzKG5hbWUpKSByZXR1cm47XG5cdHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkob3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAoIShTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiKSkgY29uc29sZS53YXJuKGUpO1xuXHR9IGZpbmFsbHkge1xuXHRcdF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuYWRkKG5hbWUpO1xuXHR9XG59KTtcbnZhciBfX2V4cG9ydFByb3BlcnRpZXMgPSAoKSA9PiB7fTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0RldGVjdC50c1xudmFyIGlzTW9iaWxlID0gKCkgPT4ge1xuXHRsZXQgY2hlY2sgPSBuYXZpZ2F0b3I/LnVzZXJBZ2VudERhdGE/Lm1vYmlsZSB8fCBmYWxzZTtcblx0KChhKSA9PiB7XG5cdFx0aWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSBjaGVjayA9IHRydWU7XG5cdH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCBnbG9iYWxUaGlzLm9wZXJhKTtcblx0cmV0dXJuIGNoZWNrO1xufTtcbnZhciBkZXRlY3RNb2JpbGUgPSAoKSA9PiB7XG5cdHJldHVybiBbXG5cdFx0L0FuZHJvaWQvaSxcblx0XHQvd2ViT1MvaSxcblx0XHQvaVBob25lL2ksXG5cdFx0L2lQYWQvaSxcblx0XHQvaVBvZC9pLFxuXHRcdC9CbGFja0JlcnJ5L2ksXG5cdFx0L1dpbmRvd3MgUGhvbmUvaVxuXHRdLnNvbWUobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaC5iaW5kKG5hdmlnYXRvci51c2VyQWdlbnQpKSAmJiAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiBnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1V0aWxzLnRzXG52YXIgY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2sgPSAoKSA9PiAoe1xuXHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxufSk7XG52YXIgcnVuV2hlbklkbGUkMSA9IChjYiwgdGltZW91dCA9IDFlMykgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrKCkpLCAwKTtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIGVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBlbGVtZW50Py5ob3N0O1xufTtcbnZhciBnZXRPZmZzZXRQYXJlbnRDaGFpbiA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IHBhcmVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IGdldE9mZnNldFBhcmVudChjdXJyZW50KTtcblx0XHRpZiAocGFyZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxIdG1sRWxlbWVudCkgYnJlYWs7XG5cdFx0aWYgKGN1cnJlbnQgPSBwYXJlbnQpIHBhcmVudHMucHVzaChjdXJyZW50KTtcblx0fVxuXHRyZXR1cm4gcGFyZW50cztcbn07XG52YXIgaXNOZWFybHlJZGVudGl0eSA9IChtYXRyaXgsIGVwc2lsb24gPSAxZS02KSA9PiB7XG5cdHJldHVybiBNYXRoLmFicyhtYXRyaXguYSAtIDEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYikgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5jKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmQgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmUpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguZikgPCBlcHNpbG9uO1xufTtcbnZhciBtYWtlUkFGQ3ljbGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRyb2wgPSB7XG5cdFx0Y2FuY2VsZWQ6IGZhbHNlLFxuXHRcdHJBRnM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0bGFzdDogbnVsbCxcblx0XHRjYW5jZWwoKSB7XG5cdFx0XHR0aGlzLmNhbmNlbGVkID0gdHJ1ZTtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdHNoZWR1bGUoY2IpIHtcblx0XHRcdHRoaXMuckFGcy5hZGQoY2IpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHR9O1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHdoaWxlICghY29udHJvbD8uY2FuY2VsZWQpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKChjb250cm9sPy5yQUZzPy52YWx1ZXM/LigpID8/IFtdKT8ubWFwPy4oKHJBRikgPT4gUHJvbWlzZS50cnkockFGKT8uY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSkpKTtcblx0XHRcdGNvbnRyb2wuckFGcz8uY2xlYXI/LigpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRjb250cm9sLmxhc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmVzLCAxNik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pKCk7XG5cdHJldHVybiBjb250cm9sO1xufTtcbnZhciBSQUZCZWhhdmlvciA9IChzaGVkID0gbWFrZVJBRkN5Y2xlKCkpID0+IHtcblx0cmV0dXJuIChjYikgPT4gc2hlZC5zaGVkdWxlKGNiKTtcbn07XG52YXIgUk9PVCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgc2V0QXR0cmlidXRlc0lmTnVsbCA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdGlmICghYXR0cnMgfHwgdHlwZW9mIGF0dHJzICE9IFwib2JqZWN0XCIgfHwgIWVsZW1lbnQpIHJldHVybjtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRjb25zdCBvbGQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBpZiAodmFsdWUgIT0gb2xkKSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBvbGQgPT0gXCJcIiA/IHZhbHVlID8/IG9sZCA6IG9sZCA/PyB2YWx1ZSk7XG5cdH0pO1xufTtcbnZhciBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJzID0ge30pID0+IHtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA/PyBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKSk7XG5cdH0pO1xufTtcbnZhciB0aHJvdHRsZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgc2V0SWRsZUludGVydmFsID0gKGNiLCB0aW1lb3V0ID0gMWUzLCAuLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHN0YXR1cyA9IHtcblx0XHRydW5uaW5nOiB0cnVlLFxuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0c3RhdHVzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cdHJ1bldoZW5JZGxlJDEoYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghY2IgfHwgdHlwZW9mIGNiICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRcdHdoaWxlIChzdGF0dXMucnVubmluZykge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoW1Byb21pc2UudHJ5KGNiLCAuLi5hcmdzKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSkuY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFueShbbmV3IFByb21pc2UoKHIpID0+IHJ1bldoZW5JZGxlJDEociwgdGltZW91dCkpLCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCB0aW1lb3V0KSldKTtcblx0XHR9XG5cdFx0c3RhdHVzLmNhbmNlbCA9ICgpID0+IHt9O1xuXHR9LCB0aW1lb3V0KTtcblx0cmV0dXJuIHN0YXR1cz8uY2FuY2VsO1xufTtcbmlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dGhyb3R0bGVNYXAuZm9yRWFjaCgoY2IpID0+IGNiPy4oKSk7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyKSk7XG5cdH1cbn0pO1xudmFyIGJvcmRlckJveFdpZHRoID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtd2lkdGhcIik7XG52YXIgYm9yZGVyQm94SGVpZ2h0ID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtaGVpZ2h0XCIpO1xudmFyIGNvbnRlbnRCb3hXaWR0aCA9IFN5bWJvbChcIkBjb250ZW50LWJveC13aWR0aFwiKTtcbnZhciBjb250ZW50Qm94SGVpZ2h0ID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LWhlaWdodFwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZG9Db250ZW50T2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50LmNsaWVudFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50LmNsaWVudEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQ29udGVudE9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxufTtcbnZhciBkb0JvcmRlck9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5vZmZzZXRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Cb3JkZXJPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxufTtcbnZhciB1cmwgPSAodHlwZSwgLi4uc291cmNlKSA9PiB7XG5cdHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKHNvdXJjZSwgeyB0eXBlIH0pKTtcbn07XG52YXIgaHRtbCA9IChzb3VyY2UsIHR5cGUgPSBcInRleHQvaHRtbFwiKSA9PiB7XG5cdGNvbnN0IHBhcnNlZCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc291cmNlLCB0eXBlKTtcblx0cmV0dXJuIHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikgPz8gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCIqXCIpO1xufTtcbnZhciBzZXRDaGVja2VkID0gKGlucHV0LCB2YWx1ZSwgZXYpID0+IHtcblx0aWYgKHZhbHVlICE9IG51bGwgJiYgaW5wdXQuY2hlY2tlZCAhPSB2YWx1ZSkge1xuXHRcdGlmIChpbnB1dD8uW1widHlwZVwiXSA9PSBcImNoZWNrYm94XCIgfHwgaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJyYWRpb1wiICYmICFpbnB1dD8uY2hlY2tlZCkge1xuXHRcdFx0aW5wdXQ/LmNsaWNrPy4oKTtcblx0XHRcdGV2Py5wcmV2ZW50RGVmYXVsdD8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlucHV0LmNoZWNrZWQgPSAhIXZhbHVlO1xuXHRcdFx0aW5wdXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGlzVmFsaWRQYXJlbnQgPSAocGFyZW50KSA9PiB7XG5cdHJldHVybiBwYXJlbnQgIT0gbnVsbCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgSFRNTEJvZHlFbGVtZW50KSA/IHBhcmVudCA6IG51bGw7XG59O1xudmFyIGluZGV4T2YgPSAoZWxlbWVudCwgbm9kZSkgPT4ge1xuXHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IG5vZGUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50Py5jaGlsZE5vZGVzID8/IFtdKT8uaW5kZXhPZj8uKG5vZGUpID8/IC0xO1xufTtcbnZhciBNQVRDSCA9IFwiKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKVwiO1xudmFyIFJFR0VYID0gXCJeKD86XCIgKyBNQVRDSCArIFwiKXxeI1wiICsgTUFUQ0ggKyBcInxeXFxcXC5cIiArIE1BVENIICsgXCJ8XlxcXFxbXCIgKyBNQVRDSCArIFwiKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiO1xudmFyIGNyZWF0ZUVsZW1lbnRWYW5pbGxhID0gKHNlbGVjdG9yKSA9PiB7XG5cdGlmIChzZWxlY3RvciA9PSBcIjpmcmFnbWVudDpcIikgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0Y29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KTtcblx0Zm9yICh2YXIgbm9kZSA9IGNyZWF0ZShcImRpdlwiKSwgbWF0Y2gsIGNsYXNzTmFtZSA9IFwiXCI7IHNlbGVjdG9yICYmIChtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCIpKTspIHtcblx0XHRpZiAobWF0Y2hbMV0pIG5vZGUgPSBjcmVhdGUobWF0Y2hbMV0pO1xuXHRcdGlmIChtYXRjaFsyXSkgbm9kZS5pZCA9IG1hdGNoWzJdO1xuXHRcdGlmIChtYXRjaFszXSkgY2xhc3NOYW1lICs9IFwiIFwiICsgbWF0Y2hbM107XG5cdFx0aWYgKG1hdGNoWzRdKSBub2RlLnNldEF0dHJpYnV0ZShtYXRjaFs0XSwgbWF0Y2hbN10gfHwgXCJcIik7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuXHR9XG5cdGlmIChjbGFzc05hbWUpIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNsaWNlKDEpO1xuXHRyZXR1cm4gbm9kZTtcbn07XG52YXIgaXNFbGVtZW50ID0gKGVsKSA9PiB7XG5cdHJldHVybiBlbCAhPSBudWxsICYmIChlbCBpbnN0YW5jZW9mIE5vZGUgfHwgZWwgaW5zdGFuY2VvZiBUZXh0IHx8IGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIENvbW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gZWwgOiBudWxsO1xufTtcbnZhciBpbmNsdWRlU2VsZiA9ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB7XG5cdGNvbnN0IHNlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiA/IHNlbGVjdG9yLnRyaW0oKSA6IFwiXCI7XG5cdGlmICghc2VsIHx8ICF0YXJnZXQpIHJldHVybiB0YXJnZXQgPz8gbnVsbDtcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3Ioc2VsKSA/PyAodGFyZ2V0Lm1hdGNoZXMoc2VsKSA/IHRhcmdldCA6IG51bGwpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBoYXNQYXJlbnQgPSAoY3VycmVudCwgcGFyZW50KSA9PiB7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0aWYgKCEoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICgoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSA9PT0gKHBhcmVudD8uZWxlbWVudCA/PyBwYXJlbnQpKSByZXR1cm4gdHJ1ZTtcblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50ID8/IChjdXJyZW50LnBhcmVudE5vZGUgPT0gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pID8gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0IDogY3VycmVudD8ucGFyZW50Tm9kZSk7XG5cdH1cbn07XG52YXIgcGFzc2l2ZU9wdHMgPSB7fTtcbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG5cdGNvbnN0IHdyID0gdHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQ/LmRlcmVmID8gbmV3IFdlYWtSZWYodGFyZ2V0KSA6IHRhcmdldDtcblx0cmV0dXJuICgpID0+IHdyPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG5mdW5jdGlvbiByZW1vdmVFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxudmFyIGFkZEV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gYWRkRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogYWRkRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgYWRkRXZlbnRzTGlzdCA9IChlbCwgZXZlbnRzKSA9PiB7XG5cdGlmIChldmVudHMpIHtcblx0XHRsZXQgZW50cmllcyA9IGV2ZW50cztcblx0XHRpZiAoZXZlbnRzIGluc3RhbmNlb2YgTWFwKSBlbnRyaWVzID0gWy4uLmV2ZW50cy5lbnRyaWVzKCldO1xuXHRcdGVsc2UgZW50cmllcyA9IFsuLi5PYmplY3QuZW50cmllcyhldmVudHMpXTtcblx0XHRyZXR1cm4gZW50cmllcy5tYXAoKFtuYW1lLCBsaXN0XSkgPT4gKChpc0FycmF5T3JJdGVyYWJsZShsaXN0KSA/IFsuLi5saXN0XSA6IGxpc3QpID8/IFtdKT8ubWFwPy4oKGNicykgPT4ge1xuXHRcdFx0cmV0dXJuIGFkZEV2ZW50KGVsLCBuYW1lLCBjYnMpO1xuXHRcdH0pKTtcblx0fVxufTtcbnZhciByZW1vdmVFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGdldEV2ZW50VGFyZ2V0ID0gKGV2KSA9PiB7XG5cdGlmICghZXYpIHJldHVybiBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBub2RlO1xuXHR9XG5cdGNvbnN0IHRhcmdldCA9IGV2Py50YXJnZXQ7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gdGFyZ2V0O1xuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgY29udGFpbnNPclNlbGYgPSAoYSwgYiwgZXYpID0+IHtcblx0aWYgKGIgPT0gbnVsbCB8fCAhKGIgaW5zdGFuY2VvZiBOb2RlKSAmJiBiPy5lbGVtZW50ID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gYiB8fCAoYT8uZWxlbWVudCA/PyBhKSA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRjb25zdCBhRWwgPSBhPy5lbGVtZW50ID8/IGE7XG5cdFx0Y29uc3QgYkVsID0gYj8uZWxlbWVudCA/PyBiO1xuXHRcdGlmIChwYXRoLmluY2x1ZGVzKGFFbCkgJiYgcGF0aC5pbmNsdWRlcyhiRWwpKSB7XG5cdFx0XHRjb25zdCBhSW5kZXggPSBwYXRoLmluZGV4T2YoYUVsKTtcblx0XHRcdGNvbnN0IGJJbmRleCA9IHBhdGguaW5kZXhPZihiRWwpO1xuXHRcdFx0aWYgKGJJbmRleCA+PSAwICYmIGFJbmRleCA+PSAwICYmIGJJbmRleCA8IGFJbmRleCkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChhPy5jb250YWlucz8uKGI/LmVsZW1lbnQgPz8gYikgfHwgYT8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgTU9DRWxlbWVudCA9IChlbGVtZW50LCBzZWxlY3RvciwgZXYpID0+IHtcblx0Y29uc3Qgc2VsID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IudHJpbSgpIDogXCJcIjtcblx0aWYgKCFzZWwpIHJldHVybiBlbGVtZW50ID8/IG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgdHJ5IHtcblx0XHRcdGlmIChub2RlLm1hdGNoZXM/LihzZWwpKSByZXR1cm4gbm9kZTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblx0bGV0IHNlbGYgPSBudWxsO1xuXHRsZXQgaG9zdE1hdGNoZWQgPSBudWxsO1xuXHRsZXQgY2xvc2VzdCA9IG51bGw7XG5cdHRyeSB7XG5cdFx0c2VsZiA9IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWwpID8gZWxlbWVudCA6IG51bGw7XG5cdFx0Y29uc3QgaG9zdCA9IChlbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID8/IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkpPy5ob3N0O1xuXHRcdGhvc3RNYXRjaGVkID0gaG9zdD8ubWF0Y2hlcz8uKHNlbCkgPyBob3N0IDogbnVsbDtcblx0XHRjbG9zZXN0ID0gZWxlbWVudD8uY2xvc2VzdD8uKHNlbCkgPz8gc2VsZj8uY2xvc2VzdD8uKHNlbCkgPz8gaG9zdE1hdGNoZWQ/LmNsb3Nlc3Q/LihzZWwpID8/IG51bGw7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIHNlbGYgPz8gY2xvc2VzdCA/PyBob3N0TWF0Y2hlZDtcbn07XG52YXIgTU9DID0gKGVsZW1lbnQsIHNlbGVjdG9yKSA9PiB7XG5cdHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3IpO1xufTtcbnZhciBpc0luRm9jdXMgPSAoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQsIGRpciA9IFwicGFyZW50XCIpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiAhZWxlbWVudC5jaGVja1Zpc2liaWxpdHkoe1xuXHRcdGNoZWNrT3BhY2l0eTogdHJ1ZSxcblx0XHRjaGVja1Zpc2liaWxpdHlDU1M6IHRydWVcblx0fSkpIHJldHVybiBmYWxzZTtcblx0aWYgKCFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbCAmJiBlbGVtZW50LnN0eWxlLnBvc2l0aW9uICE9PSBcImZpeGVkXCIpIHJldHVybiBmYWxzZTtcblx0bGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdHdoaWxlIChhY3RpdmUgJiYgYWN0aXZlLnNoYWRvd1Jvb3QgJiYgYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudCkgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblx0Y29uc3QgaXNGb2N1c2VkID0gYWN0aXZlID09PSBlbGVtZW50IHx8IGhhc1BhcmVudChhY3RpdmUsIGVsZW1lbnQpO1xuXHRjb25zdCBpc0hvdmVyZWQgPSBlbGVtZW50Lm1hdGNoZXMoXCI6aG92ZXJcIik7XG5cdGlmICghaXNGb2N1c2VkICYmICFpc0hvdmVyZWQgJiYgIXNlbGVjdG9yT3JFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChzZWxlY3Rvck9yRWxlbWVudCkge1xuXHRcdGlmICh0eXBlb2Ygc2VsZWN0b3JPckVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGlzRm9jdXNlZCA/IGFjdGl2ZSA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIjpob3ZlclwiKSB8fCBlbGVtZW50O1xuXHRcdFx0XHRjb25zdCBhbHRDbmQgPSAhIU1PQ0VsZW1lbnQodGFyZ2V0LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oc2VsZWN0b3JPckVsZW1lbnQpICE9IG51bGwgfHwgZWxlbWVudD8ubWF0Y2hlcz8uKHNlbGVjdG9yT3JFbGVtZW50KSB8fCBhbHRDbmQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzZWxlY3Rvck9yRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRpZiAoZGlyID09PSBcInBhcmVudFwiKSByZXR1cm4gaGFzUGFyZW50KGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50KSB8fCBmYWxzZTtcblx0XHRcdGVsc2UgcmV0dXJuIGhhc1BhcmVudChzZWxlY3Rvck9yRWxlbWVudCwgZWxlbWVudCkgfHwgZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1pvb20udHNcbnZhciBnZXRab29tID0gKCkgPT4ge1xuXHRpZiAoXCJjdXJyZW50Q1NTWm9vbVwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHRyZXR1cm4gcGFyc2VGbG9hdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2NhbGluZ1wiKSB8fCBcIjFcIikgfHwgMTtcbn07XG52YXIgem9vbVZhbHVlc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAem9vbVZhbHVlc1wiKTtcbnZhciB6b29tVmFsdWVzID0gZ2xvYmFsVGhpc1t6b29tVmFsdWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgem9vbU9mID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHpvb21WYWx1ZXMuZ2V0T3JJbnNlcnRDb21wdXRlZChlbGVtZW50LCAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gKGVsZW1lbnQ/Lm1hdGNoZXM/LihcIi51aS1vcmllbnRib3hcIikgPyBlbGVtZW50IDogbnVsbCkgfHwgZWxlbWVudD8uY2xvc2VzdD8uKFwiLnVpLW9yaWVudGJveFwiKSB8fCBkb2N1bWVudC5ib2R5O1xuXHRcdGlmIChjb250YWluZXI/Lnpvb20pIHJldHVybiBjb250YWluZXI/Lnpvb20gfHwgMTtcblx0XHRpZiAoZWxlbWVudD8uY3VycmVudENTU1pvb20pIHJldHVybiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHR9KTtcbn07XG52YXIgY2hhbmdlWm9vbSA9IChzY2FsZSA9IDEpID0+IHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zY2FsaW5nXCIsIHNjYWxlKTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic2NhbGluZ1wiLCB7XG5cdFx0ZGV0YWlsOiB7IHpvb206IHNjYWxlIH0sXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdH0pKTtcblx0cmV0dXJuIHNjYWxlO1xufTtcbnZhciBmaXhlZENsaWVudFpvb20gPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tICE9IG51bGwgPyAxIDogem9vbU9mKGVsZW1lbnQpKSB8fCAxO1xufTtcbnZhciB1bmZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gPT0gbnVsbCA/IDEgOiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgfHwgMTtcbn07XG52YXIgb3JpZW50T2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiW29yaWVudF0sIFtkYXRhLW1peGluPVxcXCJ1aS1vcmllbnRib3hcXFwiXVwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpIHx8IGVsZW1lbnQ7XG5cdGlmIChjb250YWluZXI/Lmhhc0F0dHJpYnV0ZT8uKFwib3JpZW50XCIpKSByZXR1cm4gcGFyc2VJbnQoY29udGFpbmVyPy5nZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiKSB8fCBcIjBcIikgfHwgMDtcblx0aWYgKGNvbnRhaW5lcj8ub3JpZW50ICE9IG51bGwgJiYgTnVtYmVyLmlzRmluaXRlKE51bWJlcihjb250YWluZXIub3JpZW50KSkpIHJldHVybiBOdW1iZXIoY29udGFpbmVyLm9yaWVudCkgfHwgMDtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBjb250YWluZXI/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCItLW9yaWVudFwiKSB8fCAodHlwZW9mIGdldENvbXB1dGVkU3R5bGUgPT09IFwiZnVuY3Rpb25cIiAmJiBjb250YWluZXIgPyBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZShcIi0tb3JpZW50XCIpIDogXCJcIikgfHwgXCJcIjtcblx0XHRjb25zdCBuID0gcGFyc2VJbnQoU3RyaW5nKHJhdykudHJpbSgpLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG47XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIDA7XG59O1xudmFyIGdldEJvdW5kaW5nT3JpZW50UmVjdCA9IChlbGVtZW50LCBvcmllbnQgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHpvb20gPSB1bmZpeGVkQ2xpZW50Wm9vbShlbGVtZW50KSB8fCAxO1xuXHRjb25zdCBib3ggPSBlbGVtZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRjb25zdCBuYnggPSB7XG5cdFx0bGVmdDogYm94Py5sZWZ0IC8gem9vbSxcblx0XHRyaWdodDogYm94Py5yaWdodCAvIHpvb20sXG5cdFx0dG9wOiBib3g/LnRvcCAvIHpvb20sXG5cdFx0Ym90dG9tOiBib3g/LmJvdHRvbSAvIHpvb20sXG5cdFx0d2lkdGg6IGJveD8ud2lkdGggLyB6b29tLFxuXHRcdGhlaWdodDogYm94Py5oZWlnaHQgLyB6b29tXG5cdH07XG5cdGNvbnN0IG9yX2kgPSBvcmllbnQgPz8gKG9yaWVudE9mKGVsZW1lbnQpIHx8IDApO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBzaXplID0gWygodnY/LndpZHRoID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50V2lkdGggPz8gd2luZG93LmlubmVyV2lkdGgpIHx8IDEpIC8gem9vbSwgKCh2dj8uaGVpZ2h0ID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50SGVpZ2h0ID8/IHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMSkgLyB6b29tXTtcblx0Y29uc3QgW2xlZnRfLCB0b3BfXSA9IGN2dF9jc190b19vcyhbbmJ4LmxlZnQsIG5ieC50b3BdLCBzaXplLCBvcl9pKTtcblx0Y29uc3QgW3JpZ2h0XywgYm90dG9tX10gPSBjdnRfY3NfdG9fb3MoW25ieC5yaWdodCwgbmJ4LmJvdHRvbV0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbbGVmdCwgcmlnaHRdID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMyA/IFtsZWZ0XywgcmlnaHRfXSA6IFtyaWdodF8sIGxlZnRfXTtcblx0Y29uc3QgW3RvcCwgYm90dG9tXSA9IG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyBbdG9wXywgYm90dG9tX10gOiBbYm90dG9tXywgdG9wX107XG5cdGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IG9yX2kgJSAyID8gW25ieC5oZWlnaHQsIG5ieC53aWR0aF0gOiBbbmJ4LndpZHRoLCBuYnguaGVpZ2h0XTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGgsXG5cdFx0aGVpZ2h0XG5cdH07XG59O1xudmFyIGJidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodCA6IGVsW2JvcmRlckJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgYmJoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodDtcbnZhciBjYncgPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgY2JoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGggOiBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvVmlld3BvcnQudHNcbnZhciBydW5XaGVuSWRsZSA9IChjYiwgdGltZW91dCA9IDEwMCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKHtcblx0XHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0XHR0aW1lUmVtYWluaW5nOiAoKSA9PiAwXG5cdH0pLCAwKTtcbn07XG52YXIgS0VZQk9BUkRfT1ZFUkxBWV9QWCA9IDgwO1xudmFyIGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gMDtcbnZhciBjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gZmFsc2U7XG52YXIgd2luZG93S2V5Ym9hcmRCb3VuZCA9IGZhbHNlO1xudmFyIHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkID0gZmFsc2U7XG52YXIgbmF0aXZlRGlzcGxheSA9IG51bGw7XG52YXIgbmF0aXZlRGlzcGxheUJvdW5kID0gZmFsc2U7XG52YXIgbmF0aXZlRGlzcGxheVJlZnJlc2hRdWV1ZWQgPSBmYWxzZTtcbnZhciBpc05hdGl2ZUNhcGFjaXRvckhvc3QgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC5jd3NwTmF0aXZlU2hlbGwgPT09IFwiY2FwYWNpdG9yXCIpIHJldHVybiB0cnVlO1xuXHRcdGNvbnN0IGNhcCA9IGdsb2JhbFRoaXMuQ2FwYWNpdG9yO1xuXHRcdHJldHVybiB0eXBlb2YgY2FwPy5pc05hdGl2ZVBsYXRmb3JtID09PSBcImZ1bmN0aW9uXCIgJiYgQm9vbGVhbihjYXAuaXNOYXRpdmVQbGF0Zm9ybSgpKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHJlYWRDd3NCcmlkZ2UgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMuQ2FwYWNpdG9yPy5QbHVnaW5zPy5Dd3NCcmlkZ2UgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgcGFyc2VOYXRpdmVEaXNwbGF5ID0gKGluZm8pID0+IHtcblx0aWYgKCFpbmZvKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgd2luZG93VyA9IE51bWJlcihpbmZvLndpbmRvd1dpZHRoQ3NzKSB8fCAwO1xuXHRjb25zdCB3aW5kb3dIID0gTnVtYmVyKGluZm8ud2luZG93SGVpZ2h0Q3NzKSB8fCAwO1xuXHRjb25zdCBkaXNwbGF5VyA9IE51bWJlcihpbmZvLmRpc3BsYXlXaWR0aENzcykgfHwgd2luZG93Vztcblx0Y29uc3QgZGlzcGxheUggPSBOdW1iZXIoaW5mby5kaXNwbGF5SGVpZ2h0Q3NzKSB8fCB3aW5kb3dIO1xuXHRjb25zdCB3ID0gd2luZG93VyB8fCBkaXNwbGF5Vztcblx0Y29uc3QgaCA9IHdpbmRvd0ggfHwgZGlzcGxheUg7XG5cdGlmICh3IDw9IDAgfHwgaCA8PSAwKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgZGVuc2l0eSA9IE51bWJlcihpbmZvLmRlbnNpdHkpIHx8IDA7XG5cdHJldHVybiB7XG5cdFx0d2luZG93V2lkdGhDc3M6IHcsXG5cdFx0d2luZG93SGVpZ2h0Q3NzOiBoLFxuXHRcdGRpc3BsYXlXaWR0aENzczogZGlzcGxheVcgfHwgdyxcblx0XHRkaXNwbGF5SGVpZ2h0Q3NzOiBkaXNwbGF5SCB8fCBoLFxuXHRcdGRlbnNpdHksXG5cdFx0ZGVuc2l0eURwaTogTnVtYmVyKGluZm8uZGVuc2l0eURwaSkgfHwgMCxcblx0XHR4ZHBpOiBOdW1iZXIoaW5mby54ZHBpKSB8fCAwLFxuXHRcdHlkcGk6IE51bWJlcihpbmZvLnlkcGkpIHx8IDAsXG5cdFx0cHBpOiBOdW1iZXIoaW5mby5wcGkpIHx8IDAsXG5cdFx0c2NhbGVkRGVuc2l0eTogTnVtYmVyKGluZm8uc2NhbGVkRGVuc2l0eSkgfHwgZGVuc2l0eSxcblx0XHRmb250U2NhbGU6IE51bWJlcihpbmZvLmZvbnRTY2FsZSkgfHwgKGRlbnNpdHkgPiAwID8gKE51bWJlcihpbmZvLnNjYWxlZERlbnNpdHkpIHx8IGRlbnNpdHkpIC8gZGVuc2l0eSA6IDEpXG5cdH07XG59O1xudmFyIGFwcGx5TmF0aXZlRGlzcGxheSA9IChpbmZvKSA9PiB7XG5cdGNvbnN0IG5leHQgPSBwYXJzZU5hdGl2ZURpc3BsYXkoaW5mbyk7XG5cdGlmICghbmV4dCkgcmV0dXJuO1xuXHRjb25zdCBwcmV2ID0gbmF0aXZlRGlzcGxheTtcblx0Y29uc3Qgc2FtZSA9IEJvb2xlYW4ocHJldiAmJiBwcmV2LndpbmRvd1dpZHRoQ3NzID09PSBuZXh0LndpbmRvd1dpZHRoQ3NzICYmIHByZXYud2luZG93SGVpZ2h0Q3NzID09PSBuZXh0LndpbmRvd0hlaWdodENzcyAmJiBwcmV2LmRpc3BsYXlXaWR0aENzcyA9PT0gbmV4dC5kaXNwbGF5V2lkdGhDc3MgJiYgcHJldi5kaXNwbGF5SGVpZ2h0Q3NzID09PSBuZXh0LmRpc3BsYXlIZWlnaHRDc3MgJiYgcHJldi5kZW5zaXR5ID09PSBuZXh0LmRlbnNpdHkgJiYgcHJldi5kZW5zaXR5RHBpID09PSBuZXh0LmRlbnNpdHlEcGkgJiYgcHJldi5wcGkgPT09IG5leHQucHBpICYmIHByZXYuZm9udFNjYWxlID09PSBuZXh0LmZvbnRTY2FsZSk7XG5cdG5hdGl2ZURpc3BsYXkgPSBuZXh0O1xuXHRpZiAoIXNhbWUpIHVwZGF0ZVZQKCk7XG59O1xudmFyIHJlZnJlc2hOYXRpdmVEaXNwbGF5ID0gKCkgPT4ge1xuXHRpZiAoIWlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpKSByZXR1cm47XG5cdGNvbnN0IEJyaWRnZSA9IHJlYWRDd3NCcmlkZ2UoKTtcblx0aWYgKCFCcmlkZ2UpIHJldHVybjtcblx0KHR5cGVvZiBCcmlkZ2UuZ2V0RGlzcGxheU1ldHJpY3MgPT09IFwiZnVuY3Rpb25cIiA/IEJyaWRnZS5nZXREaXNwbGF5TWV0cmljcygpIDogQnJpZGdlLmdldFNoZWxsSW5mbz8uKCkpPy50aGVuKChpbmZvKSA9PiBhcHBseU5hdGl2ZURpc3BsYXkoaW5mbykpLmNhdGNoKCgpID0+IHt9KTtcbn07XG52YXIgcXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCA9ICgpID0+IHtcblx0aWYgKCFpc05hdGl2ZUNhcGFjaXRvckhvc3QoKSB8fCBuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCkgcmV0dXJuO1xuXHRuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCA9IHRydWU7XG5cdHJ1bldoZW5JZGxlKCgpID0+IHtcblx0XHRuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCA9IGZhbHNlO1xuXHRcdGJpbmROYXRpdmVEaXNwbGF5KCk7XG5cdFx0cmVmcmVzaE5hdGl2ZURpc3BsYXkoKTtcblx0fSwgODApO1xufTtcbnZhciBiaW5kTmF0aXZlRGlzcGxheSA9ICgpID0+IHtcblx0aWYgKG5hdGl2ZURpc3BsYXlCb3VuZCB8fCB0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRpZiAoIWlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpKSByZXR1cm47XG5cdGlmICghcmVhZEN3c0JyaWRnZSgpKSByZXR1cm47XG5cdG5hdGl2ZURpc3BsYXlCb3VuZCA9IHRydWU7XG5cdHRyeSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gZ2xvYmFsVGhpcy53aW5kb3c/Ll9fQ1dTX1NIRUxMX0lORk9fXztcblx0XHRpZiAoY2FjaGVkKSBhcHBseU5hdGl2ZURpc3BsYXkoY2FjaGVkKTtcblx0fSBjYXRjaCB7fVxuXHRyZWZyZXNoTmF0aXZlRGlzcGxheSgpO1xufTtcbnZhciB2aXJ0dWFsS2V5Ym9hcmQgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMubmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgSU5URVJBQ1RJVkVfV0lER0VUID0gXCJpbnRlcmFjdGl2ZS13aWRnZXQ9b3ZlcmxheXMtY29udGVudFwiO1xudmFyIFZJRVdQT1JUX0ZJVCA9IFwidmlld3BvcnQtZml0PWNvdmVyXCI7XG52YXIgZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRpZiAoIWhlYWQpIHJldHVybjtcblx0bGV0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPVxcXCJ2aWV3cG9ydFxcXCJdXCIpO1xuXHRpZiAoIW1ldGEpIHtcblx0XHRtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XG5cdFx0bWV0YS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidmlld3BvcnRcIik7XG5cdFx0bWV0YS5jb250ZW50ID0gYHdpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsICR7VklFV1BPUlRfRklUfSwgJHtJTlRFUkFDVElWRV9XSURHRVR9YDtcblx0XHRoZWFkLm1vdmVCZWZvcmUobWV0YSwgaGVhZC5maXJzdENoaWxkKTtcblx0XHRyZXR1cm47XG5cdH1cblx0bGV0IGNvbnRlbnQgPSBTdHJpbmcobWV0YS5jb250ZW50IHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCEvaW50ZXJhY3RpdmUtd2lkZ2V0XFxzKj1cXHMqb3ZlcmxheXMtY29udGVudC9pLnRlc3QoY29udGVudCkpIHtcblx0XHRpZiAoL2ludGVyYWN0aXZlLXdpZGdldFxccyo9L2kudGVzdChjb250ZW50KSkgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvaW50ZXJhY3RpdmUtd2lkZ2V0XFxzKj1cXHMqW2Etei1dKy9pLCBJTlRFUkFDVElWRV9XSURHRVQpO1xuXHRcdGVsc2UgY29udGVudCA9IGNvbnRlbnQgPyBgJHtjb250ZW50LnJlcGxhY2UoLyxcXHMqJC8sIFwiXCIpfSwgJHtJTlRFUkFDVElWRV9XSURHRVR9YCA6IElOVEVSQUNUSVZFX1dJREdFVDtcblx0fVxuXHRpZiAoIS92aWV3cG9ydC1maXRcXHMqPVxccypjb3Zlci9pLnRlc3QoY29udGVudCkpIHtcblx0XHRpZiAoL3ZpZXdwb3J0LWZpdFxccyo9L2kudGVzdChjb250ZW50KSkgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvdmlld3BvcnQtZml0XFxzKj1cXHMqW2Etei1dKy9pLCBWSUVXUE9SVF9GSVQpO1xuXHRcdGVsc2UgY29udGVudCA9IGNvbnRlbnQgPyBgJHtjb250ZW50LnJlcGxhY2UoLyxcXHMqJC8sIFwiXCIpfSwgJHtWSUVXUE9SVF9GSVR9YCA6IFZJRVdQT1JUX0ZJVDtcblx0fVxuXHRpZiAoY29udGVudCAhPT0gU3RyaW5nKG1ldGEuY29udGVudCB8fCBcIlwiKS50cmltKCkpIG1ldGEuY29udGVudCA9IGNvbnRlbnQ7XG59O1xudmFyIGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkgPSAoKSA9PiB7XG5cdGVuc3VyZVZpZXdwb3J0SW50ZXJhY3RpdmVXaWRnZXRPdmVybGF5KCk7XG5cdGNvbnN0IHZrID0gdmlydHVhbEtleWJvYXJkKCk7XG5cdGlmICghdmspIHJldHVybjtcblx0dHJ5IHtcblx0XHRpZiAodmsub3ZlcmxheXNDb250ZW50ICE9PSB0cnVlKSB2ay5vdmVybGF5c0NvbnRlbnQgPSB0cnVlO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGRlZXBBY3RpdmVFbGVtZW50ID0gKCkgPT4ge1xuXHRsZXQgZWwgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IDogbnVsbDtcblx0d2hpbGUgKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgZWwuc2hhZG93Um9vdD8uYWN0aXZlRWxlbWVudCkgZWwgPSBlbC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaXNJbWVUYXJnZXQgPSAoZWwpID0+IHtcblx0aWYgKCFlbCB8fCAhKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbC5sb2NhbE5hbWUgPT09IFwiY3ctcmF3LWVkaXRvclwiKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGVsLmlzQ29udGVudEVkaXRhYmxlKSByZXR1cm4gdHJ1ZTtcblx0Y29uc3QgdGFnID0gZWwudGFnTmFtZTtcblx0aWYgKHRhZyA9PT0gXCJURVhUQVJFQVwiIHx8IHRhZyA9PT0gXCJTRUxFQ1RcIikgcmV0dXJuIHRydWU7XG5cdGlmICh0YWcgIT09IFwiSU5QVVRcIikgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCB0eXBlID0gU3RyaW5nKGVsLnR5cGUgfHwgXCJ0ZXh0XCIpLnRvTG93ZXJDYXNlKCk7XG5cdHJldHVybiAhW1xuXHRcdFwiYnV0dG9uXCIsXG5cdFx0XCJjaGVja2JveFwiLFxuXHRcdFwicmFkaW9cIixcblx0XHRcImZpbGVcIixcblx0XHRcInN1Ym1pdFwiLFxuXHRcdFwicmVzZXRcIixcblx0XHRcImltYWdlXCIsXG5cdFx0XCJyYW5nZVwiLFxuXHRcdFwiY29sb3JcIixcblx0XHRcImhpZGRlblwiXG5cdF0uaW5jbHVkZXModHlwZSk7XG59O1xudmFyIGlzQ29sbGFwc2VkQ2FyZXQgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgc2VsID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0cmV0dXJuIEJvb2xlYW4oc2VsICYmIHNlbC5yYW5nZUNvdW50ICYmIHNlbC5pc0NvbGxhcHNlZCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59O1xudmFyIGxheW91dExvY2tPcmllbnQgPSBcIlwiO1xudmFyIGxheW91dExvY2tXID0gMDtcbnZhciBsYXlvdXRMb2NrSCA9IDA7XG52YXIgbGFzdFN0YWJsZUtleWJvYXJkID0gMDtcbnZhciBpc0xhbmRzY2FwZSA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB0eXBlID0gdHlwZW9mIHNjcmVlbiAhPT0gXCJ1bmRlZmluZWRcIiA/IFN0cmluZyhzY3JlZW4ub3JpZW50YXRpb24/LnR5cGUgfHwgXCJcIikgOiBcIlwiO1xuXHRcdGlmICh0eXBlLnN0YXJ0c1dpdGgoXCJsYW5kc2NhcGVcIikpIHJldHVybiB0cnVlO1xuXHRcdGlmICh0eXBlLnN0YXJ0c1dpdGgoXCJwb3J0cmFpdFwiKSkgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiBCb29sZWFuKHR5cGVvZiBtYXRjaE1lZGlhICE9PSBcInVuZGVmaW5lZFwiICYmIG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgcmVhZFBoeXNpY2FsU2NyZWVuID0gKCkgPT4ge1xuXHRsZXQgdyA9IDA7XG5cdGxldCBoID0gMDtcblx0aWYgKG5hdGl2ZURpc3BsYXkpIHtcblx0XHR3ID0gbmF0aXZlRGlzcGxheS53aW5kb3dXaWR0aENzcyB8fCBuYXRpdmVEaXNwbGF5LmRpc3BsYXlXaWR0aENzcztcblx0XHRoID0gbmF0aXZlRGlzcGxheS53aW5kb3dIZWlnaHRDc3MgfHwgbmF0aXZlRGlzcGxheS5kaXNwbGF5SGVpZ2h0Q3NzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBzY3JlZW4gIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRjb25zdCBzdyA9IE51bWJlcihzY3JlZW4ud2lkdGgpIHx8IDA7XG5cdFx0Y29uc3Qgc2ggPSBOdW1iZXIoc2NyZWVuLmhlaWdodCkgfHwgMDtcblx0XHRjb25zdCBhdyA9IE51bWJlcihzY3JlZW4uYXZhaWxXaWR0aCkgfHwgMDtcblx0XHRjb25zdCBhaCA9IE51bWJlcihzY3JlZW4uYXZhaWxIZWlnaHQpIHx8IDA7XG5cdFx0dyA9IE1hdGgubWF4KHcsIHN3LCBhdyk7XG5cdFx0aCA9IE1hdGgubWF4KGgsIHNoLCBhaCk7XG5cdH1cblx0aWYgKCF3ICYmICFoKSByZXR1cm4ge1xuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMFxuXHR9O1xuXHRjb25zdCBsYW5kc2NhcGUgPSBpc0xhbmRzY2FwZSgpO1xuXHRjb25zdCBib3hMYW5kc2NhcGUgPSB3ID4gMCAmJiBoID4gMCAmJiB3ID4gaDtcblx0aWYgKGxhbmRzY2FwZSAmJiB3ID4gMCAmJiBoID4gMCAmJiB3IDwgaCkgcmV0dXJuIHtcblx0XHR3aWR0aDogaCxcblx0XHRoZWlnaHQ6IHdcblx0fTtcblx0aWYgKCFsYW5kc2NhcGUgJiYgYm94TGFuZHNjYXBlKSByZXR1cm4ge1xuXHRcdHdpZHRoOiBoLFxuXHRcdGhlaWdodDogd1xuXHR9O1xuXHRyZXR1cm4ge1xuXHRcdHdpZHRoOiB3IHx8IGgsXG5cdFx0aGVpZ2h0OiBoIHx8IHdcblx0fTtcbn07XG52YXIgY2xhbXBUb1BoeXNpY2FsID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcblx0Y29uc3QgcGh5cyA9IHJlYWRQaHlzaWNhbFNjcmVlbigpO1xuXHRjb25zdCBpbm5lclcgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwIDogMDtcblx0Y29uc3QgaW5uZXJIID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDAgOiAwO1xuXHRjb25zdCByb290ID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogbnVsbDtcblx0Y29uc3QgY2xpZW50VyA9IE51bWJlcihyb290Py5jbGllbnRXaWR0aCkgfHwgMDtcblx0Y29uc3QgY2xpZW50SCA9IE51bWJlcihyb290Py5jbGllbnRIZWlnaHQpIHx8IDA7XG5cdGNvbnN0IGNhcFcgPSBNYXRoLm1heChwaHlzLndpZHRoLCBpbm5lclcsIGNsaWVudFcpO1xuXHRjb25zdCBjYXBIID0gTWF0aC5tYXgocGh5cy5oZWlnaHQsIGlubmVySCwgY2xpZW50SCk7XG5cdHJldHVybiB7XG5cdFx0d2lkdGg6IGNhcFcgPiAwID8gTWF0aC5taW4od2lkdGgsIGNhcFcpIDogd2lkdGgsXG5cdFx0aGVpZ2h0OiBjYXBIID4gMCA/IE1hdGgubWluKGhlaWdodCwgY2FwSCkgOiBoZWlnaHRcblx0fTtcbn07XG52YXIgY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQgPSAod2lkdGgsIGhlaWdodCwgbGVmdCA9IDAsIHRvcCA9IDApID0+IHtcblx0Y29uc3Qgc2FmZVdpZHRoID0gTWF0aC5tYXgoMCwgTnVtYmVyKHdpZHRoKSB8fCAwKTtcblx0Y29uc3Qgc2FmZUhlaWdodCA9IE1hdGgubWF4KDAsIE51bWJlcihoZWlnaHQpIHx8IDApO1xuXHRjb25zdCBzYWZlTGVmdCA9IE51bWJlcihsZWZ0KSB8fCAwO1xuXHRjb25zdCBzYWZlVG9wID0gTnVtYmVyKHRvcCkgfHwgMDtcblx0cmV0dXJuIHtcblx0XHRsZWZ0OiBzYWZlTGVmdCxcblx0XHR0b3A6IHNhZmVUb3AsXG5cdFx0cmlnaHQ6IHNhZmVMZWZ0ICsgc2FmZVdpZHRoLFxuXHRcdGJvdHRvbTogc2FmZVRvcCArIHNhZmVIZWlnaHQsXG5cdFx0d2lkdGg6IHNhZmVXaWR0aCxcblx0XHRoZWlnaHQ6IHNhZmVIZWlnaHRcblx0fTtcbn07XG52YXIgcmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0ID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0KDAsIDApO1xuXHRjb25zdCByb290ID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogbnVsbDtcblx0cmV0dXJuIGNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0KE51bWJlcihyb290Py5jbGllbnRXaWR0aCkgfHwgTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwLCBOdW1iZXIocm9vdD8uY2xpZW50SGVpZ2h0KSB8fCBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwKTtcbn07XG52YXIgcmVhZExheW91dFZpZXdwb3J0ID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHtcblx0XHR3aWR0aDogMCxcblx0XHRoZWlnaHQ6IDAsXG5cdFx0a2V5Ym9hcmQ6IDBcblx0fTtcblx0Y29uc3QgdnYgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQ7XG5cdGNvbnN0IGlubmVyVyA9IE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMDtcblx0Y29uc3QgaW5uZXJIID0gTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZXID0gTnVtYmVyKHZ2Py53aWR0aCkgfHwgMDtcblx0Y29uc3QgdnZIID0gTnVtYmVyKHZ2Py5oZWlnaHQpIHx8IDA7XG5cdGNvbnN0IHZ2VG9wID0gTnVtYmVyKHZ2Py5vZmZzZXRUb3ApIHx8IDA7XG5cdGNvbnN0IHZrSCA9IE51bWJlcih2aXJ0dWFsS2V5Ym9hcmQoKT8uYm91bmRpbmdCb3g/LmhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZPdmVybGFwID0gaW5uZXJIID4gMCAmJiB2dkggPiAwID8gaW5uZXJIIC0gdnZIIC0gdnZUb3AgOiAwO1xuXHRjb25zdCBjYXBIID0gY2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQ7XG5cdGNvbnN0IG5hdGl2ZUNhcCA9IGlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpO1xuXHRsZXQga2V5Ym9hcmQgPSBjYXBIID49IEtFWUJPQVJEX09WRVJMQVlfUFggPyBjYXBIIDogIW5hdGl2ZUNhcCAmJiB2a0ggPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IHZrSCA6ICFuYXRpdmVDYXAgJiYgdnZPdmVybGFwID49IEtFWUJPQVJEX09WRVJMQVlfUFggPyB2dk92ZXJsYXAgOiAwO1xuXHRjb25zdCBjYW5kaWRhdGVXID0gTWF0aC5tYXgoaW5uZXJXLCB2dlcpO1xuXHRjb25zdCBjYW5kaWRhdGVIID0gTWF0aC5tYXgoaW5uZXJILCB2dkggKyB2dlRvcCwga2V5Ym9hcmQgPiAwID8gdnZIICsga2V5Ym9hcmQgOiAwKTtcblx0Y29uc3Qgb3JpZW50ID0gaXNMYW5kc2NhcGUoKSA/IFwibFwiIDogXCJwXCI7XG5cdGlmIChvcmllbnQgIT09IGxheW91dExvY2tPcmllbnQpIHtcblx0XHRsYXlvdXRMb2NrT3JpZW50ID0gb3JpZW50O1xuXHRcdGxheW91dExvY2tXID0gMDtcblx0XHRsYXlvdXRMb2NrSCA9IDA7XG5cdH1cblx0Y29uc3Qgd2lkdGhTdGFibGUgPSBsYXlvdXRMb2NrVyA8PSAwIHx8IE1hdGguYWJzKGxheW91dExvY2tXIC0gY2FuZGlkYXRlVykgPCAzMjtcblx0Y29uc3QgZWRpdGFibGVGb2N1c2VkID0gaXNJbWVUYXJnZXQoZGVlcEFjdGl2ZUVsZW1lbnQoKSkgfHwgaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cdGxldCBjb2Fyc2VQb2ludGVyID0gZmFsc2U7XG5cdHRyeSB7XG5cdFx0Y29hcnNlUG9pbnRlciA9IHR5cGVvZiBtYXRjaE1lZGlhID09PSBcImZ1bmN0aW9uXCIgJiYgbWF0Y2hNZWRpYShcIihwb2ludGVyOiBjb2Fyc2UpXCIpLm1hdGNoZXM7XG5cdH0gY2F0Y2gge1xuXHRcdGNvYXJzZVBvaW50ZXIgPSBmYWxzZTtcblx0fVxuXHRjb25zdCBzdWRkZW5TaHJpbmsgPSAhbmF0aXZlQ2FwICYmIHdpZHRoU3RhYmxlICYmIChlZGl0YWJsZUZvY3VzZWQgfHwgY29hcnNlUG9pbnRlcikgJiYgbGF5b3V0TG9ja0ggPiAwICYmIGxheW91dExvY2tIIC0gY2FuZGlkYXRlSCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYO1xuXHRpZiAoa2V5Ym9hcmQgPCBLRVlCT0FSRF9PVkVSTEFZX1BYICYmIHN1ZGRlblNocmluaykge1xuXHRcdGNvbnN0IHNocmluayA9IE1hdGgubWF4KDAsIGxheW91dExvY2tIIC0gY2FuZGlkYXRlSCwgbGF5b3V0TG9ja0ggLSAodnZIICsgdnZUb3ApKTtcblx0XHRpZiAoc2hyaW5rID49IEtFWUJPQVJEX09WRVJMQVlfUFgpIGtleWJvYXJkID0gc2hyaW5rO1xuXHR9XG5cdGNvbnN0IGV4cGFuZGVkU2VsZWN0aW9uID0gIWlzQ29sbGFwc2VkQ2FyZXQoKTtcblx0aWYgKGV4cGFuZGVkU2VsZWN0aW9uICYmIGxhc3RTdGFibGVLZXlib2FyZCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYKSBrZXlib2FyZCA9IGxhc3RTdGFibGVLZXlib2FyZDtcblx0ZWxzZSBpZiAoa2V5Ym9hcmQgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCkgbGFzdFN0YWJsZUtleWJvYXJkID0ga2V5Ym9hcmQ7XG5cdGVsc2UgaWYgKCFpc0ltZVRhcmdldChkZWVwQWN0aXZlRWxlbWVudCgpKSAmJiAhaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIGxhc3RTdGFibGVLZXlib2FyZCA9IDA7XG5cdGlmICghKGtleWJvYXJkID4gMCB8fCBpc0ltZVRhcmdldChkZWVwQWN0aXZlRWxlbWVudCgpKSB8fCBpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB8fCBzdWRkZW5TaHJpbmsgfHwgZXhwYW5kZWRTZWxlY3Rpb24pKSB7XG5cdFx0bGF5b3V0TG9ja1cgPSBjYW5kaWRhdGVXO1xuXHRcdGxheW91dExvY2tIID0gY2FuZGlkYXRlSDtcblx0fSBlbHNlIHtcblx0XHRsYXlvdXRMb2NrVyA9IE1hdGgubWF4KGNhbmRpZGF0ZVcsIGxheW91dExvY2tXKTtcblx0XHRsYXlvdXRMb2NrSCA9IE1hdGgubWF4KGNhbmRpZGF0ZUgsIGxheW91dExvY2tIKTtcblx0fVxuXHRjb25zdCBsb2NrZWQgPSBjbGFtcFRvUGh5c2ljYWwobGF5b3V0TG9ja1cgfHwgY2FuZGlkYXRlVywgbGF5b3V0TG9ja0ggfHwgY2FuZGlkYXRlSCk7XG5cdGxheW91dExvY2tXID0gbG9ja2VkLndpZHRoO1xuXHRsYXlvdXRMb2NrSCA9IGxvY2tlZC5oZWlnaHQ7XG5cdGNvbnN0IGtiID0gbG9ja2VkLmhlaWdodCA+IDAgPyBNYXRoLm1pbihrZXlib2FyZCwgbG9ja2VkLmhlaWdodCkgOiBrZXlib2FyZDtcblx0cmV0dXJuIHtcblx0XHR3aWR0aDogbG9ja2VkLndpZHRoLFxuXHRcdGhlaWdodDogbG9ja2VkLmhlaWdodCxcblx0XHRrZXlib2FyZDoga2Jcblx0fTtcbn07XG52YXIgaXNJbWVDaHJvbWVMb2NrID0gKGVsKSA9PiB7XG5cdGNvbnN0IHRhZyA9IGVsLnRhZ05hbWU7XG5cdGlmICh0YWcgPT09IFwiSFRNTFwiIHx8IHRhZyA9PT0gXCJCT0RZXCIpIHJldHVybiB0cnVlO1xuXHRpZiAodGFnID09PSBcIkNXLVJBVy1FRElUT1JcIiB8fCB0YWcgPT09IFwiQ1ctVklFVy1WSUVXRVJcIiB8fCB0YWcgPT09IFwiQ1ctTUFSS0RPV04tVklFVy1GUkFNRVwiIHx8IHRhZyA9PT0gXCJDVy1NQVJLRE9XTi1UT09MQkFSLUZSQU1FXCIpIHJldHVybiB0cnVlO1xuXHRjb25zdCBjbHMgPSBlbC5jbGFzc0xpc3Q7XG5cdHJldHVybiBjbHMuY29udGFpbnMoXCJhcHAtc2hlbGxcIikgfHwgY2xzLmNvbnRhaW5zKFwiYXBwLXNoZWxsX192aWV3cG9ydFwiKSB8fCBjbHMuY29udGFpbnMoXCJhcHAtc2hlbGxfX25hdlwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtc2hlbGwtcm9vdFwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtc2hlbGwtd29ya3NwYWNlXCIpIHx8IGNscy5jb250YWlucyhcImVudi1zaGVsbC1jaHJvbWVcIikgfHwgY2xzLmNvbnRhaW5zKFwiZW52LXVpLXdpbmRvd1wiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtdWktd2luZG93X19ib2R5XCIpIHx8IGNscy5jb250YWlucyhcIndmLWZyYW1lXCIpIHx8IGNscy5jb250YWlucyhcInVpLXdpbmRvd1wiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlclwiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlcl9fdG9vbGJhclwiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlcl9fY2hyb21lXCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyX19jb250ZW50XCIpIHx8IGNscy5jb250YWlucyhcImN3LXZpZXctdmlld2VyLXNoZWxsXCIpIHx8IGNscy5jb250YWlucyhcImN3LW1hcmtkb3duLXZpZXctZnJhbWVcIikgfHwgY2xzLmNvbnRhaW5zKFwiY3ctdmlldy12aWV3ZXJfX3Nsb3QtcmF3XCIpO1xufTtcbnZhciBwYXJlbnRPZiA9IChlbCkgPT4ge1xuXHRpZiAoIWVsKSByZXR1cm4gbnVsbDtcblx0aWYgKGVsLnBhcmVudEVsZW1lbnQpIHJldHVybiBlbC5wYXJlbnRFbGVtZW50O1xuXHRjb25zdCByb290ID0gZWwuZ2V0Um9vdE5vZGUoKTtcblx0cmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdC5ob3N0IDogbnVsbDtcbn07XG52YXIgaXNTY3JvbGxwb3J0ID0gKGVsKSA9PiB7XG5cdGlmIChpc0ltZUNocm9tZUxvY2soZWwpKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdGNvbnN0IG95ID0gc3R5bGUub3ZlcmZsb3dZIHx8IHN0eWxlLm92ZXJmbG93QmxvY2s7XG5cdGlmIChveSAhPT0gXCJhdXRvXCIgJiYgb3kgIT09IFwic2Nyb2xsXCIpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIGVsLnNjcm9sbEhlaWdodCA+IGVsLmNsaWVudEhlaWdodCArIDE7XG59O1xudmFyIGZpbmRSYXdFZGl0b3JTY3JvbGxwb3J0ID0gKHN0YXJ0KSA9PiB7XG5cdGxldCBub2RlID0gc3RhcnQ7XG5cdHdoaWxlIChub2RlKSB7XG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImN3LXJhdy1lZGl0b3JfX3Njcm9sbFwiKSkgcmV0dXJuIG5vZGU7XG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBub2RlLmxvY2FsTmFtZSA9PT0gXCJjdy1yYXctZWRpdG9yXCIpIHtcblx0XHRcdGNvbnN0IGlubmVyID0gbm9kZS5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKFwiLmN3LXJhdy1lZGl0b3JfX3Njcm9sbFwiKTtcblx0XHRcdGlmIChpbm5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSByZXR1cm4gaW5uZXI7XG5cdFx0fVxuXHRcdGNvbnN0IHJvb3QgPSBub2RlLmdldFJvb3ROb2RlKCk7XG5cdFx0aWYgKHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG5cdFx0XHRjb25zdCBpbm5lciA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5jdy1yYXctZWRpdG9yX19zY3JvbGxcIik7XG5cdFx0XHRpZiAoaW5uZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgcmV0dXJuIGlubmVyO1xuXHRcdH1cblx0XHRub2RlID0gcGFyZW50T2Yobm9kZSk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGZpbmRJbWVTY3JvbGxwb3J0ID0gKHN0YXJ0KSA9PiB7XG5cdGNvbnN0IHJhdyA9IGZpbmRSYXdFZGl0b3JTY3JvbGxwb3J0KHN0YXJ0KTtcblx0aWYgKHJhdykgcmV0dXJuIHJhdztcblx0bGV0IG5vZGUgPSBzdGFydDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGlzU2Nyb2xscG9ydChub2RlKSkgcmV0dXJuIG5vZGU7XG5cdFx0bm9kZSA9IHBhcmVudE9mKG5vZGUpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbnZhciByZWFkQ2FyZXRSZWN0ID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHNlbCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXHRcdGlmIChzZWw/LnJhbmdlQ291bnQpIHtcblx0XHRcdGNvbnN0IHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XG5cdFx0XHRjb25zdCByZWN0cyA9IHJhbmdlLmdldENsaWVudFJlY3RzKCk7XG5cdFx0XHRjb25zdCByZWN0ID0gcmVjdHMubGVuZ3RoID8gcmVjdHNbcmVjdHMubGVuZ3RoIC0gMV0gOiByYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGlmIChyZWN0ICYmIChyZWN0LmhlaWdodCB8fCByZWN0LndpZHRoIHx8IHJlY3QudG9wIHx8IHJlY3QuYm90dG9tKSkgcmV0dXJuIHJlY3Q7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XG59O1xudmFyIHBpbkltZUNhcmV0SW5TY3JvbGxwb3J0ID0gKCkgPT4ge1xuXHRjb25zdCBhY3RpdmUgPSBkZWVwQWN0aXZlRWxlbWVudCgpO1xuXHRpZiAoIWlzSW1lVGFyZ2V0KGFjdGl2ZSkgJiYgIWlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghaXNDb2xsYXBzZWRDYXJldCgpKSByZXR1cm47XG5cdGNvbnN0IGtleWJvYXJkID0gcmVhZExheW91dFZpZXdwb3J0KCkua2V5Ym9hcmQ7XG5cdGNvbnN0IHZ2ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0O1xuXHRjb25zdCB2aXNpYmxlQm90dG9tID0gKE51bWJlcih2dj8uaGVpZ2h0KSB8fCBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwKSAtIE1hdGgubWF4KDgsIGtleWJvYXJkID8gMTIgOiAwKTtcblx0aWYgKHZpc2libGVCb3R0b20gPD0gMCkgcmV0dXJuO1xuXHRjb25zdCByZWN0ID0gcmVhZENhcmV0UmVjdCgpO1xuXHRpZiAoIXJlY3QpIHJldHVybjtcblx0Y29uc3Qgb3ZlcmZsb3cgPSByZWN0LmJvdHRvbSAtIHZpc2libGVCb3R0b207XG5cdGlmIChvdmVyZmxvdyA8PSAxKSByZXR1cm47XG5cdGNvbnN0IHBvcnQgPSBmaW5kSW1lU2Nyb2xscG9ydChhY3RpdmUpIHx8IGZpbmRJbWVTY3JvbGxwb3J0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXHRpZiAocG9ydCkgcG9ydC5zY3JvbGxUb3AgKz0gb3ZlcmZsb3c7XG59O1xudmFyIHBpblZpc3VhbFZpZXdwb3J0ID0gKCkgPT4ge1xuXHRjb25zdCB2diA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblx0aWYgKCF2dikgcmV0dXJuO1xuXHRjb25zdCB0b3AgPSBOdW1iZXIodnYub2Zmc2V0VG9wKSB8fCAwO1xuXHRjb25zdCBsZWZ0ID0gTnVtYmVyKHZ2Lm9mZnNldExlZnQpIHx8IDA7XG5cdGlmICghdG9wICYmICFsZWZ0KSByZXR1cm47XG5cdHRyeSB7XG5cdFx0dnYuc2Nyb2xsVG8oe1xuXHRcdFx0bGVmdDogMCxcblx0XHRcdHRvcDogMCxcblx0XHRcdGJlaGF2aW9yOiBcImluc3RhbnRcIlxuXHRcdH0pO1xuXHR9IGNhdGNoIHtcblx0XHR0cnkge1xuXHRcdFx0dnYuc2Nyb2xsVG8/LigwLCAwKTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cbn07XG52YXIgb3ZlcmxheVBpbm5pbmcgPSBmYWxzZTtcbnZhciByZXNldENocm9tZVNjcm9sbCA9IChzdGFydCkgPT4ge1xuXHRjb25zdCBwb3J0ID0gZmluZEltZVNjcm9sbHBvcnQoc3RhcnQpO1xuXHRsZXQgbm9kZSA9IHN0YXJ0O1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgbm9kZSAhPT0gcG9ydCAmJiBpc0ltZUNocm9tZUxvY2sobm9kZSkpIHtcblx0XHRcdGlmIChub2RlLnNjcm9sbFRvcCB8fCBub2RlLnNjcm9sbExlZnQpIHtcblx0XHRcdFx0bm9kZS5zY3JvbGxUb3AgPSAwO1xuXHRcdFx0XHRub2RlLnNjcm9sbExlZnQgPSAwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRub2RlID0gcGFyZW50T2Yobm9kZSk7XG5cdH1cbn07XG52YXIgcGluT3ZlcmxheVNjcm9sbCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgb3ZlcmxheVBpbm5pbmcpIHJldHVybjtcblx0Y29uc3QgYWN0aXZlID0gZGVlcEFjdGl2ZUVsZW1lbnQoKTtcblx0Y29uc3QgY2FwID0gaXNOYXRpdmVDYXBhY2l0b3JIb3N0KCk7XG5cdGNvbnN0IHJhdyA9IEJvb2xlYW4oZmluZFJhd0VkaXRvclNjcm9sbHBvcnQoYWN0aXZlKSB8fCBmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSk7XG5cdGNvbnN0IGltZSA9IHJlYWRMYXlvdXRWaWV3cG9ydCgpLmtleWJvYXJkID4gMCB8fCBpc0ltZVRhcmdldChhY3RpdmUpIHx8IGlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXHRpZiAoIWltZSAmJiAhY2FwKSByZXR1cm47XG5cdG92ZXJsYXlQaW5uaW5nID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRwaW5WaXN1YWxWaWV3cG9ydCgpO1xuXHRcdGlmICh3aW5kb3cuc2Nyb2xsWCB8fCB3aW5kb3cuc2Nyb2xsWSkgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYgKHJvb3Quc2Nyb2xsVG9wIHx8IHJvb3Quc2Nyb2xsTGVmdCkgcm9vdC5zY3JvbGxUbygwLCAwKTtcblx0XHRpZiAoYm9keSAmJiAoYm9keS5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxMZWZ0KSkgYm9keS5zY3JvbGxUbygwLCAwKTtcblx0XHRpZiAocmF3IHx8IGltZSB8fCAhaXNDb2xsYXBzZWRDYXJldCgpKSB7XG5cdFx0XHRyZXNldENocm9tZVNjcm9sbChhY3RpdmUpO1xuXHRcdFx0cmVzZXRDaHJvbWVTY3JvbGwoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cdFx0fVxuXHRcdGlmIChjYXApIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJjdy1yYXctZWRpdG9yXCIpLmZvckVhY2goKGhvc3QpID0+IHtcblx0XHRcdGlmIChob3N0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgIWhvc3QuaGlkZGVuKSByZXNldENocm9tZVNjcm9sbChob3N0KTtcblx0XHR9KTtcblx0fSBmaW5hbGx5IHtcblx0XHRvdmVybGF5UGlubmluZyA9IGZhbHNlO1xuXHR9XG59O1xudmFyIHNjcm9sbEludG9WaWV3UGF0Y2hlZCA9IGZhbHNlO1xudmFyIHBhdGNoSW1lU2Nyb2xsSW50b1ZpZXcgPSAoKSA9PiB7XG5cdGlmIChzY3JvbGxJbnRvVmlld1BhdGNoZWQgfHwgdHlwZW9mIEVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0c2Nyb2xsSW50b1ZpZXdQYXRjaGVkID0gdHJ1ZTtcblx0Y29uc3Qgb3JpZyA9IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3O1xuXHRFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uKGFyZykge1xuXHRcdGNvbnN0IGFjdGl2ZSA9IGRlZXBBY3RpdmVFbGVtZW50KCk7XG5cdFx0aWYgKEJvb2xlYW4oZmluZFJhd0VkaXRvclNjcm9sbHBvcnQodGhpcykgfHwgZmluZFJhd0VkaXRvclNjcm9sbHBvcnQoYWN0aXZlKSkgfHwgaXNJbWVUYXJnZXQoYWN0aXZlKSAmJiAhaXNDb2xsYXBzZWRDYXJldCgpKSB7XG5cdFx0XHRpZiAoaXNOYXRpdmVDYXBhY2l0b3JIb3N0KCkgfHwgIWlzQ29sbGFwc2VkQ2FyZXQoKSkge1xuXHRcdFx0XHRwaW5JbWVDaHJvbWUoeyBjYXJldDogdHJ1ZSB9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGlzSW1lQ2hyb21lTG9jayh0aGlzKSkgcmV0dXJuO1xuXHRcdHJldHVybiBvcmlnLmNhbGwodGhpcywgYXJnKTtcblx0fTtcbn07XG52YXIgcGluSW1lQ2hyb21lID0gKG9wdHMpID0+IHtcblx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHRpZiAoIW9wdHM/LmNhcmV0KSByZXR1cm47XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHRcdHBpbkltZUNhcmV0SW5TY3JvbGxwb3J0KCk7XG5cdH0pO1xufTtcbnZhciByZWFkVmlydHVhbEtleWJvYXJkSGVpZ2h0UHggPSAoKSA9PiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gMCA6IHJlYWRMYXlvdXRWaWV3cG9ydCgpLmtleWJvYXJkO1xudmFyIGdldEF2YWlsU2l6ZSA9ICgpID0+IHtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBsYXlvdXQgPSByZWFkTGF5b3V0Vmlld3BvcnQoKTtcblx0Y29uc3QgdnZCbG9jayA9IHtcblx0XHRcIi0tdnYtd2lkdGhcIjogYCR7dnY/LndpZHRoID8/ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmlubmVyV2lkdGggOiAwKX1weGAsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiBgJHt2dj8uaGVpZ2h0ID8/ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmlubmVySGVpZ2h0IDogMCl9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtbGVmdFwiOiBgJHt2dj8ub2Zmc2V0TGVmdCA/PyAwfXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt2dj8ub2Zmc2V0VG9wID8/IDB9cHhgLFxuXHRcdFwiLS12di1zY2FsZVwiOiBTdHJpbmcodnY/LnNjYWxlID8/IDEpLFxuXHRcdFwiLS1sdi13aWR0aFwiOiBgJHtsYXlvdXQud2lkdGh9cHhgLFxuXHRcdFwiLS1sdi1oZWlnaHRcIjogYCR7bGF5b3V0LmhlaWdodH1weGAsXG5cdFx0XCItLWtleWJvYXJkLW92ZXJsYXktaGVpZ2h0XCI6IGAke2xheW91dC5rZXlib2FyZH1weGAsXG5cdFx0XCItLXZpcnR1YWwta2V5Ym9hcmQtaGVpZ2h0XCI6IGAke2xheW91dC5rZXlib2FyZH1weGBcblx0fTtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtdmstb3BlblwiKTtcblx0aWYgKHR5cGVvZiBzY3JlZW4gIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGNvbnN0IHBoeXMgPSByZWFkUGh5c2ljYWxTY3JlZW4oKTtcblx0XHRjb25zdCBpbm5lclcgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwIDogMDtcblx0XHRjb25zdCBpbm5lckggPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCA6IDA7XG5cdFx0Y29uc3QgcGFuZVcgPSBNYXRoLm1heChpbm5lclcsIGxheW91dC53aWR0aCk7XG5cdFx0Y29uc3QgcGFuZUggPSBNYXRoLm1heChpbm5lckgsIGxheW91dC5oZWlnaHQpO1xuXHRcdGNvbnN0IHdpbmRvd2VkVyA9ICFuYXRpdmVEaXNwbGF5ICYmIHBhbmVXID4gMCAmJiBwaHlzLndpZHRoID4gcGFuZVcgKyA2NDtcblx0XHRjb25zdCB3aW5kb3dlZEggPSAhbmF0aXZlRGlzcGxheSAmJiBwYW5lSCA+IDAgJiYgcGh5cy5oZWlnaHQgPiBwYW5lSCArIDY0O1xuXHRcdGNvbnN0IGNhcFcgPSB3aW5kb3dlZFcgPyBwYW5lVyA6IE1hdGgubWF4KHBoeXMud2lkdGgsIHBhbmVXKTtcblx0XHRjb25zdCBjYXBIID0gd2luZG93ZWRIID8gcGFuZUggOiBNYXRoLm1heChwaHlzLmhlaWdodCwgcGFuZUgpO1xuXHRcdGNvbnN0IHNjcmVlblcgPSBjYXBXID4gMCA/IGAke2NhcFd9cHhgIDogXCIxMDBsdmlcIjtcblx0XHRjb25zdCBzY3JlZW5IID0gY2FwSCA+IDAgPyBgJHtjYXBIfXB4YCA6IFwiMTAwbHZiXCI7XG5cdFx0Y29uc3QgZGVuc2l0eSA9IG5hdGl2ZURpc3BsYXk/LmRlbnNpdHkgfHwgTnVtYmVyKGRldmljZVBpeGVsUmF0aW8pIHx8IDE7XG5cdFx0Y29uc3QgbmF0aXZlU2NhbGUgPSBuYXRpdmVEaXNwbGF5ID8ge1xuXHRcdFx0XCItLW5hdGl2ZS1kZW5zaXR5XCI6IFN0cmluZyhuYXRpdmVEaXNwbGF5LmRlbnNpdHkgfHwgZGVuc2l0eSksXG5cdFx0XHRcIi0tbmF0aXZlLWRwaVwiOiBTdHJpbmcobmF0aXZlRGlzcGxheS5kZW5zaXR5RHBpIHx8IDApLFxuXHRcdFx0XCItLW5hdGl2ZS1wcGlcIjogU3RyaW5nKG5hdGl2ZURpc3BsYXkucHBpIHx8IDApLFxuXHRcdFx0XCItLW5hdGl2ZS14ZHBpXCI6IFN0cmluZyhuYXRpdmVEaXNwbGF5LnhkcGkgfHwgMCksXG5cdFx0XHRcIi0tbmF0aXZlLXlkcGlcIjogU3RyaW5nKG5hdGl2ZURpc3BsYXkueWRwaSB8fCAwKSxcblx0XHRcdFwiLS1uYXRpdmUtZm9udC1zY2FsZVwiOiBTdHJpbmcobmF0aXZlRGlzcGxheS5mb250U2NhbGUgfHwgMSlcblx0XHR9IDoge307XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogc2NyZWVuVyxcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IHNjcmVlbkgsXG5cdFx0XHRcIi0tYXZhaWwtd2lkdGhcIjogc2NyZWVuVyxcblx0XHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogc2NyZWVuSCxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGVuc2l0eSksXG5cdFx0XHQuLi5uYXRpdmVTY2FsZSxcblx0XHRcdC4uLnZ2QmxvY2tcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjEwMGx2aVwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMTAwbHZiXCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMTAwbHZpXCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjEwMGx2YlwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogXCIxXCIsXG5cdFx0Li4udnZCbG9ja1xuXHR9O1xufTtcbnZhciBhdmFpbFNpemUgPSBnZXRBdmFpbFNpemUoKTtcbnZhciBjbGFzc2VzID0gW1tcIjpyb290LCA6aG9zdCwgOnNjb3BlXCIsIGF2YWlsU2l6ZV1dO1xudmFyIG9yaWVudGF0aW9uTnVtYmVyTWFwID0ge1xuXHRcInBvcnRyYWl0LXByaW1hcnlcIjogMCxcblx0XCJsYW5kc2NhcGUtcHJpbWFyeVwiOiAxLFxuXHRcInBvcnRyYWl0LXNlY29uZGFyeVwiOiAyLFxuXHRcImxhbmRzY2FwZS1zZWNvbmRhcnlcIjogM1xufTtcbnZhciB1cGRhdGVWUCA9IChldikgPT4ge1xuXHRjb25zdCBydWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRPYmplY3QuYXNzaWduKGF2YWlsU2l6ZSwgZ2V0QXZhaWxTaXplKCkpO1xuXHRPYmplY3QuZW50cmllcyhhdmFpbFNpemUpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFZhbHVlXSkgPT4ge1xuXHRcdGNvbnN0IGV4aXN0cyA9IHJ1bGU/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKTtcblx0XHRpZiAoIWV4aXN0cyB8fCBleGlzdHMgIT0gcHJvcFZhbHVlKSBydWxlPy5zdHlsZT8uc2V0UHJvcGVydHk/Lihwcm9wTmFtZSwgcHJvcFZhbHVlIHx8IFwiXCIsIFwiXCIpO1xuXHR9KTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRhdGlvbi1zZWNvbmRhcnlcIiwgc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZT8uZW5kc1dpdGg/LihcInNlY29uZGFyeVwiKSA/IFwiMVwiIDogXCIwXCIpO1xufTtcbnZhciBnZXRDb3JyZWN0T3JpZW50YXRpb24gPSAoKSA9PiB7XG5cdGxldCBvcmllbnRhdGlvblR5cGUgPSBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlIHx8IFwicG9ydHJhaXQtcHJpbWFyeVwiO1xuXHRpZiAoIWdsb2JhbFRoaXMubWF0Y2hNZWRpYShcIigoZGlzcGxheS1tb2RlOiBmdWxsc2NyZWVuKSBvciAoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKSBvciAoZGlzcGxheS1tb2RlOiB3aW5kb3ctY29udHJvbHMtb3ZlcmxheSkpXCIpLm1hdGNoZXMpIHtcblx0XHRpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwibGFuZHNjYXBlXCIsIFwicG9ydHJhaXRcIik7XG5cdFx0ZWxzZSBpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcInBvcnRyYWl0XCIsIFwibGFuZHNjYXBlXCIpO1xuXHR9XG5cdHJldHVybiBvcmllbnRhdGlvblR5cGU7XG59O1xudmFyIHBhc3NpdmVPcHRzJDEgPSB7IHBhc3NpdmU6IHRydWUgfTtcbnZhciBhcHBseUNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gKHJhdykgPT4ge1xuXHRjb25zdCBuZXh0ID0gTnVtYmVyKHJhdykgfHwgMDtcblx0aWYgKG5leHQgPiAwKSBjYXBhY2l0b3JLZXlib2FyZEhlaWdodCA9IG5leHQ7XG5cdHVwZGF0ZVZQKCk7XG5cdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xufTtcbnZhciBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gKCkgPT4ge1xuXHRjYXBhY2l0b3JLZXlib2FyZEhlaWdodCA9IDA7XG5cdHVwZGF0ZVZQKCk7XG59O1xudmFyIGJpbmRXaW5kb3dLZXlib2FyZEV2ZW50cyA9ICgpID0+IHtcblx0aWYgKHdpbmRvd0tleWJvYXJkQm91bmQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHR3aW5kb3dLZXlib2FyZEJvdW5kID0gdHJ1ZTtcblx0Y29uc3Qgb25TaG93ID0gKGV2KSA9PiB7XG5cdFx0Y29uc3QgZSA9IGV2O1xuXHRcdGNvbnN0IGRldGFpbCA9IGUuZGV0YWlsO1xuXHRcdGNvbnN0IGZyb21EZXRhaWwgPSB0eXBlb2YgZGV0YWlsID09PSBcInN0cmluZ1wiID8gKCgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKGRldGFpbCk/LmtleWJvYXJkSGVpZ2h0O1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXHRcdH0pKCkgOiBkZXRhaWw/LmtleWJvYXJkSGVpZ2h0O1xuXHRcdGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQoZS5rZXlib2FyZEhlaWdodCA/PyBmcm9tRGV0YWlsKTtcblx0fTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZFdpbGxTaG93XCIsIG9uU2hvdyk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5Ym9hcmREaWRTaG93XCIsIG9uU2hvdyk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5Ym9hcmRXaWxsSGlkZVwiLCBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZERpZEhpZGVcIiwgY2xlYXJDYXBhY2l0b3JLZXlib2FyZEhlaWdodCk7XG59O1xudmFyIGJpbmRDYXBhY2l0b3JLZXlib2FyZCA9ICgpID0+IHtcblx0YmluZFdpbmRvd0tleWJvYXJkRXZlbnRzKCk7XG5cdGlmIChjYXBhY2l0b3JLZXlib2FyZEJvdW5kIHx8IHR5cGVvZiBnbG9iYWxUaGlzID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdGNvbnN0IGNhcCA9IGdsb2JhbFRoaXMuQ2FwYWNpdG9yO1xuXHRjb25zdCBLZXlib2FyZCA9IGNhcD8uUGx1Z2lucz8uS2V5Ym9hcmQ7XG5cdGlmICghS2V5Ym9hcmQ/LmFkZExpc3RlbmVyKSByZXR1cm47XG5cdGlmICh0eXBlb2YgY2FwLmlzTmF0aXZlUGxhdGZvcm0gPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FwLmlzTmF0aXZlUGxhdGZvcm0oKSkgcmV0dXJuO1xuXHRjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRLZXlib2FyZC5zZXRTY3JvbGw/Lih7IGlzRGlzYWJsZWQ6IHRydWUgfSk7XG5cdH0gY2F0Y2gge31cblx0dHJ5IHtcblx0XHRLZXlib2FyZC5zZXRSZXNpemVNb2RlPy4oeyBtb2RlOiBcIm5vbmVcIiB9KTtcblx0fSBjYXRjaCB7fVxuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkV2lsbFNob3dcIiwgKGluZm8pID0+IGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQoaW5mbz8ua2V5Ym9hcmRIZWlnaHQpKTtcblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZERpZFNob3dcIiwgKGluZm8pID0+IGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQoaW5mbz8ua2V5Ym9hcmRIZWlnaHQpKTtcblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZFdpbGxIaWRlXCIsIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQpO1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkRGlkSGlkZVwiLCBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KTtcbn07XG52YXIgZW5zdXJlVmlld3BvcnRUcmFja2luZyA9ICgpID0+IHtcblx0aWYgKHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkIHx8IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0dmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQgPSB0cnVlO1xuXHRiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQoKTtcblx0YmluZE5hdGl2ZURpc3BsYXkoKTtcblx0d2hlbkFueVNjcmVlbkNoYW5nZXMoKCkgPT4ge30pO1xufTtcbnZhciB3aGVuQW55U2NyZWVuQ2hhbmdlcyA9IChjYikgPT4ge1xuXHRsZXQgdGlja2luZyA9IGZhbHNlO1xuXHRjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cdFx0aWYgKCF0aWNraW5nKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHR1cGRhdGVWUCgpO1xuXHRcdFx0XHRjYigpO1xuXHRcdFx0XHR0aWNraW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHRcdHRpY2tpbmcgPSB0cnVlO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgdW5zdWJzY3JpYmVycyA9IFtdO1xuXHRiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQoKTtcblx0YmluZE5hdGl2ZURpc3BsYXkoKTtcblx0cGF0Y2hJbWVTY3JvbGxJbnRvVmlldygpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQsIFwiZ2VvbWV0cnljaGFuZ2VcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93Py52aXN1YWxWaWV3cG9ydCwgXCJzY3JvbGxcIiwgKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0XHR1cGRhdGUoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdz8udmlzdWFsVmlld3BvcnQsIFwicmVzaXplXCIsICgpID0+IHtcblx0XHRwaW5JbWVDaHJvbWUoeyBjYXJldDogdHJ1ZSB9KTtcblx0XHR1cGRhdGUoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoc2NyZWVuPy5vcmllbnRhdGlvbiwgXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCAoKSA9PiB7XG5cdFx0cXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50LCBcImZ1bGxzY3JlZW5jaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKSwgXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKSwgXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiZm9jdXNpblwiLCAoKSA9PiB7XG5cdFx0YmluZENhcGFjaXRvcktleWJvYXJkKCk7XG5cdFx0YmluZE5hdGl2ZURpc3BsYXkoKTtcblx0XHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdFx0aWYgKGlzSW1lVGFyZ2V0KGRlZXBBY3RpdmVFbGVtZW50KCkpIHx8IGlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG5cdFx0XHRsYXlvdXRMb2NrVyA9IE1hdGgubWF4KGxheW91dExvY2tXLCBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAsIE51bWJlcih3aW5kb3cudmlzdWFsVmlld3BvcnQ/LndpZHRoKSB8fCAwKTtcblx0XHRcdGxheW91dExvY2tIID0gTWF0aC5tYXgobGF5b3V0TG9ja0gsIE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDAsIE51bWJlcih3aW5kb3cudmlzdWFsVmlld3BvcnQ/LmhlaWdodCkgfHwgMCk7XG5cdFx0fVxuXHRcdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcImZvY3Vzb3V0XCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdHVwZGF0ZSgpO1xuXHRydW5XaGVuSWRsZSgoKSA9PiB1cGRhdGUoKSwgMTAwKTtcblx0cmV0dXJuICgpID0+IHVuc3Vic2NyaWJlcnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xufTtcbnZhciBmaXhPcmllbnRUb1NjcmVlbiA9IChlbGVtZW50KSA9PiB7XG5cdGlmICghZWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucz8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKSkge1xuXHRcdGVsZW1lbnQ/LmNsYXNzTGlzdD8uYWRkPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpO1xuXHRcdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcygoKSA9PiB7XG5cdFx0XHRjb25zdCBuZXh0ID0gb3JpZW50YXRpb25OdW1iZXJNYXA/LltnZXRDb3JyZWN0T3JpZW50YXRpb24oKV0gPz8gMDtcblx0XHRcdGVsZW1lbnQub3JpZW50ID0gbmV4dDtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlPy4oXCJvcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHRcdGVsZW1lbnQuc3R5bGU/LnNldFByb3BlcnR5Py4oXCItLW9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdH0pO1xuXHR9XG59O1xuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIikgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpLCB7IG9uY2U6IHRydWUgfSk7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9NZWFzdXJlLnRzXG52YXIgY3R4ID0gbmV3IE9mZnNjcmVlbkNhbnZhcygxLCAxKS5nZXRDb250ZXh0KFwiMmRcIik7XG52YXIgaW5pdFRleHRTdHlsZSA9IChlbGVtZW50LCBjdHgpID0+IHtcblx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIFwiXCIpO1xuXHRpZiAoY3R4ICYmIHN0eWxlKSB7XG5cdFx0Y29uc3QgZm9udFdlaWdodCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXdlaWdodFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdGNvbnN0IGZvbnRTaXplID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSB8fCBcIjE2cHhcIjtcblx0XHRjb25zdCBmb250RmFtaWx5ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtZmFtaWx5XCIpIHx8IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdFx0Y29uc3QgZm9udFN0cmV0Y2ggPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zdHJldGNoXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250U3RyZXRjaCA9IGZvbnRTdHJldGNoLmluY2x1ZGVzKFwiJVwiKSA/IFwibm9ybWFsXCIgOiBmb250U3RyZXRjaDtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHgubGV0dGVyU3BhY2luZyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJsZXR0ZXItc3BhY2luZ1wiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250S2VybmluZyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWtlcm5pbmdcIikgfHwgXCJhdXRvXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRWYXJpYW50Q2FwcyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXZhcmlhbnQtY2Fwc1wiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250ID0gYCR7Zm9udFdlaWdodH0gJHtmb250U2l6ZX0gJHtmb250RmFtaWx5fWA7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxufTtcbnZhciBtZWFzdXJlVGV4dCA9ICh0ZXh0LCBlbGVtZW50KSA9PiB7XG5cdGlmIChjdHgpIHtcblx0XHRpbml0VGV4dFN0eWxlKGVsZW1lbnQsIGN0eCk7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBjdHgubWVhc3VyZVRleHQodGV4dCk7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxuXHRyZXR1cm4geyB3aWR0aDogbnVsbCB9O1xufTtcbnZhciBtZWFzdXJlSW5wdXRJbkZvY3VzID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IHRleHQgPSBpbnB1dC52YWx1ZS5zbGljZSgwLCBpbnB1dC5zZWxlY3Rpb25FbmQgfHwgMCk7XG5cdHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0LCBpbnB1dCk7XG59O1xudmFyIGNvbXB1dGVDYXJldFBvc2l0aW9uID0gKGlucHV0LCBwb2ludCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQ/LnZhbHVlIHx8IFwiXCI7XG5cdGlmIChjdHgpIHtcblx0XHRpbml0VGV4dFN0eWxlKGlucHV0LCBjdHgpO1xuXHRcdGxldCBjdXJyZW50V2lkdGggPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VycmVudFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQuc2xpY2UoMCwgaSkpPy53aWR0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggPT0gbnVsbCkgcmV0dXJuIHRleHQubGVuZ3RoO1xuXHRcdFx0aWYgKGN1cnJlbnRXaWR0aCAhPSBudWxsICYmIGN1cnJlbnRXaWR0aCA+PSBwb2ludFswXSkgcmV0dXJuIE1hdGgubWF4KGkgLSAxLCAwKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQubGVuZ3RoO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQgPSAoaW5wdXQsIGNsaWVudCkgPT4ge1xuXHRjb25zdCBib3ggPSBpbnB1dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Y29uc3QgcG9pbnQgPSBbY2xpZW50WzBdIC0gYm94LmxlZnQgLyB1bmZpeGVkQ2xpZW50Wm9vbSgpLCBjbGllbnRbMV0gLSBib3gudG9wIC8gdW5maXhlZENsaWVudFpvb20oKV07XG5cdHJldHVybiBjb21wdXRlQ2FyZXRQb3NpdGlvbihpbnB1dCwgcG9pbnQpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0xhdW5jaGVyR3JpZC50c1xudmFyIHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50ID0gKGVsLCBsYXlvdXRPdmVycmlkZSkgPT4ge1xuXHRjb25zdCBjID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLWNvbHVtbnNcIikgfHwgXCJcIiwgMTApO1xuXHRjb25zdCByID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLXJvd3NcIikgfHwgXCJcIiwgMTApO1xuXHRjb25zdCBiYXNlID0gbm9ybWFsaXplR3JpZExheW91dChsYXlvdXRPdmVycmlkZSA/PyBbNCwgOF0pO1xuXHRyZXR1cm4gW051bWJlci5pc0Zpbml0ZShjKSAmJiBjID4gMCA/IGMgOiBiYXNlWzBdLCBOdW1iZXIuaXNGaW5pdGUocikgJiYgciA+IDAgPyByIDogYmFzZVsxXV07XG59O1xudmFyIHJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCA9IChncmlkU3lzdGVtLCBjbGllbnRQb2ludCwgYXJncywgbW9kZSA9IFwiZmxvb3JcIikgPT4ge1xuXHRpZiAoIWdyaWRTeXN0ZW0pIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IHJlY3QgPSBncmlkU3lzdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XG5cdGlmICghcmVjdCkgcmV0dXJuIFswLCAwXTtcblx0Y29uc3QgbGF5b3V0ID0gcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQoZ3JpZFN5c3RlbSwgYXJncz8ubGF5b3V0KTtcblx0Y29uc3Qgb3JpZW50ID0gb3JpZW50T2YoZ3JpZFN5c3RlbSk7XG5cdGNvbnN0IGNzID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oZ3JpZFN5c3RlbSk7XG5cdGNvbnN0IHBsID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ0xlZnQpIHx8IDA7XG5cdGNvbnN0IHB0ID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1RvcCkgfHwgMDtcblx0Y29uc3QgcHIgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nUmlnaHQpIHx8IDA7XG5cdGNvbnN0IHBiID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ0JvdHRvbSkgfHwgMDtcblx0Y29uc3QgY29udGVudFcgPSBNYXRoLm1heCgxLCAocmVjdC53aWR0aCB8fCBncmlkU3lzdGVtLmNsaWVudFdpZHRoIHx8IDEpIC0gcGwgLSBwcik7XG5cdGNvbnN0IGNvbnRlbnRIID0gTWF0aC5tYXgoMSwgKHJlY3QuaGVpZ2h0IHx8IGdyaWRTeXN0ZW0uY2xpZW50SGVpZ2h0IHx8IDEpIC0gcHQgLSBwYik7XG5cdGNvbnN0IGNzQ29vcmQgPSBbKGNsaWVudFBvaW50Py5bMF0gfHwgMCkgLSByZWN0LmxlZnQgLSBwbCwgKGNsaWVudFBvaW50Py5bMV0gfHwgMCkgLSByZWN0LnRvcCAtIHB0XTtcblx0cmV0dXJuIHJlc29sdmVMb2NhbFBvaW50VG9HcmlkQ2VsbChjc0Nvb3JkLCBbY29udGVudFcsIGNvbnRlbnRIXSwgbGF5b3V0LCBvcmllbnQsIHtcblx0XHRtb2RlLFxuXHRcdHJlZGlyZWN0OiB7XG5cdFx0XHRpdGVtOiBhcmdzPy5pdGVtLFxuXHRcdFx0bGlzdDogYXJncz8ubGlzdCxcblx0XHRcdGl0ZW1zOiBhcmdzPy5pdGVtc1xuXHRcdH1cblx0fSk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvQW5pbWF0aW9uLnRzXG52YXIgYW5pbWF0ZVNob3cgPSAodGFyZ2V0KSA9PiBhcHBlYXIodGFyZ2V0LCBkZWNvclNob3cpO1xudmFyIGFuaW1hdGVIaWRlID0gKHRhcmdldCkgPT4gZGlzYXBwZWFyKHRhcmdldCwgZGVjb3JIaWRlKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL1NoYXBlLnRzXG52YXIgV2F2eVNoYXBlZENpcmNsZSA9IChzdGVwcyA9IDEwMCwgYW1wbGl0dWRlID0gLjA1LCBmcmVxID0gOCkgPT4ge1xuXHRjb25zdCBwb2ludHMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSsrKSBwb2ludHMucHVzaChpIC8gc3RlcHMpO1xuXHRjb25zdCBhbmdsZSA9IChzdGVwKSA9PiB7XG5cdFx0cmV0dXJuIGBjYWxjKCR7c3RlcH1yYWQgKiBwaSAqIDIpYDtcblx0fTtcblx0Y29uc3QgdmFyaWFudCA9IChzdGVwKSA9PiB7XG5cdFx0cmV0dXJuIGBjYWxjKGNhbGMoY29zKGNhbGModmFyKC0tY2xpcC1mcmVxLCA4KSAqICR7YW5nbGUoc3RlcCl9KSkgKiAwLjUgKyAwLjUpICogdmFyKC0tY2xpcC1hbXBsaXR1ZGUsIDApKWA7XG5cdH07XG5cdGNvbnN0IGZ1bmMgPSAoc3RlcCkgPT4gW2BjYWxjKGNhbGMoMC41ICsgY2FsYyhjb3MoJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgLCBgY2FsYyhjYWxjKDAuNSArIGNhbGMoc2luKCR7YW5nbGUoc3RlcCl9KSAqIGNhbGMoMC41IC0gJHt2YXJpYW50KHN0ZXApfSkpKSAqIHZhcigtLWljb24tc2l6ZSwgMTAwJSkpYF07XG5cdHJldHVybiB7XG5cdFx0XCItLWNsaXAtYW1wbGl0dWRlXCI6IGFtcGxpdHVkZSxcblx0XHRcIi0tY2xpcC1mcmVxXCI6IGZyZXEsXG5cdFx0XCItLWNsaXAtcGF0aFwiOiBgcG9seWdvbigke3BvaW50cy5tYXAoKHN0ZXApID0+IHtcblx0XHRcdHJldHVybiBmdW5jKHN0ZXApLmpvaW4oXCIgXCIpO1xuXHRcdH0pLmpvaW4oXCIsIFwiKX0pYFxuXHR9O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL09ic2VydmVyLnRzXG52YXIgb25Cb3JkZXJPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkJvcmRlck9ic2VydmVcIik7XG52YXIgb25Cb3JkZXJPYnNlcnZlJDEgPSBnbG9iYWxUaGlzW29uQm9yZGVyT2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9uQ29udGVudE9ic2VydmVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQ29udGVudE9ic2VydmVcIik7XG52YXIgb25Db250ZW50T2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkNvbnRlbnRPYnNlcnZlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdW53cmFwRnJvbVF1ZXJ5ID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5jdXJyZW50ID09IFwib2JqZWN0XCIpIGVsZW1lbnQgPSBlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQ/LmN1cnJlbnQgPz8gKHR5cGVvZiBlbGVtZW50Py5zZWxmID09IFwib2JqZWN0XCIgPyBlbGVtZW50Py5zZWxmIDogbnVsbCkgPz8gZWxlbWVudDtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIG5vcm1hbGl6ZVNlbGVjdG9yID0gKHNlbGVjdG9yLCBmYWxsYmFjayA9IFwiKlwiKSA9PiB7XG5cdGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxsYmFjaztcblx0cmV0dXJuIHNlbGVjdG9yLnRyaW0oKSB8fCBmYWxsYmFjaztcbn07XG52YXIgc2FmZVF1ZXJ5U2VsZWN0b3JBbGwgPSAoZWwsIHNlbGVjdG9yKSA9PiB7XG5cdGlmICghZWwgfHwgdHlwZW9mIGVsLnF1ZXJ5U2VsZWN0b3JBbGwgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFtdO1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3RvciwgXCJcIik7XG5cdGlmICghc2VsKSByZXR1cm4gW107XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbChzZWwpIHx8IFtdKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59O1xudmFyIHNhZmVNYXRjaGVzID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuXHRpZiAoIWVsIHx8IHR5cGVvZiBlbC5tYXRjaGVzICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IsIFwiXCIpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGZhbHNlO1xuXHR0cnkge1xuXHRcdHJldHVybiAhIWVsLm1hdGNoZXMoc2VsKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIG9ic2VydmVDb250ZW50Qm94ID0gKGVsZW1lbnQsIGNiKSA9PiB7XG5cdGlmICghb25Db250ZW50T2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihjb250ZW50Qm94U2l6ZSwgb2JzZXJ2ZXIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYj8uKHtcblx0XHRcdGlubGluZVNpemU6IGVsZW1lbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRibG9ja1NpemU6IGVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdG9uQ29udGVudE9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxuXHRvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5wdXNoPy4oY2IpO1xuXHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUJvcmRlckJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQm9yZGVyT2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5ib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGJvcmRlckJveFNpemUgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoYm9yZGVyQm94U2l6ZSkgY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYj8uKGJvcmRlckJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50Lm9mZnNldEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkJvcmRlck9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiYm9yZGVyLWJveFwiIH0pO1xuXHR9XG5cdG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LmluZGV4T2YoY2IpIHx8IC0xLCAxKSB9O1xufTtcbnZhciBvYnNlcnZlQXR0cmlidXRlID0gKGVsZW1lbnQsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5zZWxlY3RvciA9PSBcInN0cmluZ1wiKSByZXR1cm4gb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IoZWxlbWVudCwgZWxlbWVudD8uc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldCgoYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXSkubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XVxuXHR9KTtcblx0YXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IGNiKHtcblx0XHR0YXJnZXQ6IGVsZW1lbnQsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdG9sZFZhbHVlOiBlbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSk7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IgPSAoZWxlbWVudCwgc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldChbLi4uYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXV0ubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGFkZGVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0Y29uc3QgcmVtb3ZlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0YWRkZWROb2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0XHRyZW1vdmVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0XHRbLi4ubmV3IFNldChhZGRlZE5vZGVzKV0uZmlsdGVyKChlbCkgPT4gc2FmZU1hdGNoZXMoZWwsIHNlbCkpPy5tYXA/LigodGFyZ2V0KSA9PiB7XG5cdFx0XHRcdGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG5cdFx0XHRcdFx0Y2Ioe1xuXHRcdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdFx0XHRcdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAoc2FmZU1hdGNoZXMobXV0YXRpb24udGFyZ2V0LCBzZWwpICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgJiYgYXR0cmlidXRlTGlzdC5oYXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIGNiKG11dGF0aW9uLCBvYnNlcnZlcik7XG5cdH0pO1xuXHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLmF0dHJpYnV0ZUxpc3RdLFxuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdGNoYXJhY3RlckRhdGE6IHRydWVcblx0fSk7XG5cdHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQsIHNlbCkubWFwKCh0YXJnZXQpID0+IGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSkpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yID0gXCIqXCIsIGNiID0gKG11dCwgb2JzKSA9PiB7fSkgPT4ge1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvcik7XG5cdGNvbnN0IHVud3JhcE5vZGVzQnlTZWxlY3RvciA9IChub2RlcykgPT4ge1xuXHRcdGNvbnN0ICRub2RlcyA9IEFycmF5LmZyb20obm9kZXMgfHwgW10pIHx8IFtdO1xuXHRcdCRub2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdHJldHVybiBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KCRub2RlcykudmFsdWVzKCkpXS5maWx0ZXIoKGVsKSA9PiBzYWZlTWF0Y2hlcyhlbCwgc2VsKSk7XG5cdH07XG5cdGxldCBvYlJlZiA9IG51bGw7XG5cdGNvbnN0IGhhbmRsZU11dGF0aW9uID0gKG11dGF0aW9uKSA9PiB7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBvYlJlZj8uZGVyZWY/LigpO1xuXHRcdGNvbnN0IGFkZGVkTm9kZXMgPSB1bndyYXBOb2Rlc0J5U2VsZWN0b3IobXV0YXRpb24uYWRkZWROb2Rlcyk7XG5cdFx0Y29uc3QgcmVtb3ZlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLnJlbW92ZWROb2Rlcyk7XG5cdFx0aWYgKGFkZGVkTm9kZXMubGVuZ3RoID4gMCB8fCByZW1vdmVkTm9kZXMubGVuZ3RoID4gMCkgY2I/Lih7XG5cdFx0XHR0eXBlOiBtdXRhdGlvbi50eXBlLFxuXHRcdFx0dGFyZ2V0OiBtdXRhdGlvbi50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lLFxuXHRcdFx0YXR0cmlidXRlTmFtZXNwYWNlOiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lc3BhY2UsXG5cdFx0XHRuZXh0U2libGluZzogbXV0YXRpb24ubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogbXV0YXRpb24ub2xkVmFsdWUsXG5cdFx0XHRwcmV2aW91c1NpYmxpbmc6IG11dGF0aW9uLnByZXZpb3VzU2libGluZyxcblx0XHRcdGFkZGVkTm9kZXMsXG5cdFx0XHRyZW1vdmVkTm9kZXNcblx0XHR9LCBvYnNlcnZlcik7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUNvbWUgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVPdXRDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlRm9jdXNDbGljayA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGZhY3RvcnMgPSB7XG5cdFx0cGFzc2l2ZTogdHJ1ZSxcblx0XHRjYXB0dXJlOiBmYWxzZVxuXHR9O1xuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtd2l0aGluXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1cy12aXNpYmxlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSBoYW5kbGVNdXRhdGlvbihtdXRhdGlvbik7XG5cdH0pO1xuXHRvYlJlZiA9IG5ldyBXZWFrUmVmKG9ic2VydmVyKTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWVcblx0fSk7XG5cdGNvbnN0IHNlbGVjdGVkID0gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCwgc2VsKTtcblx0aWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdGFkZGVkTm9kZXM6IHNlbGVjdGVkLFxuXHRcdHJlbW92ZWROb2RlczogW11cblx0fSwgb2JzZXJ2ZXIpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vQmVoYXZpb3IudHNcbnZhciBib3VuZEJlaGF2aW9ycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGJpbmRCZWhhdmlvciA9IChlbGVtZW50LCBiZWhTZXQsIGJlaGF2aW9yKSA9PiB7XG5cdG5ldyBXZWFrUmVmKGVsZW1lbnQpO1xuXHRpZiAoIWJlaFNldC5oYXMoYmVoYXZpb3IpKSBiZWhTZXQuYWRkKGJlaGF2aW9yKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIHJlZmxlY3RCZWhhdmlvcnMgPSAoZWxlbWVudCwgYmVoYXZpb3JzKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRpZiAoYmVoYXZpb3JzKSB7XG5cdFx0Y29uc3QgYmVoU2V0ID0gYm91bmRCZWhhdmlvcnMuZ2V0T3JJbnNlcnQoZWxlbWVudCwgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG5cdFx0Wy4uLmJlaGF2aW9ycz8udmFsdWVzPy4oKSB8fCBbXV0ubWFwKChlKSA9PiBiaW5kQmVoYXZpb3IoZWxlbWVudCwgYmVoU2V0LCBlKSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vU3RvcmUudHNcbnZhciBuYW1lZFN0b3JlTWFwc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbmFtZWRTdG9yZU1hcHNcIik7XG52YXIgbmFtZWRTdG9yZU1hcHMgPSBnbG9iYWxUaGlzW25hbWVkU3RvcmVNYXBzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBnZXRTdG9yZXNPZkVsZW1lbnQgPSAobWFwLCBlbGVtZW50KSA9PiB7XG5cdGNvbnN0IEUgPSBbLi4ubWFwLmVudHJpZXMoKSB8fCBbXV07XG5cdHJldHVybiBuZXcgTWFwKEU/Lm1hcD8uKChbbiwgbV0pID0+IFtuLCBtPy5nZXQ/LihlbGVtZW50KV0pPy5maWx0ZXI/LigoW24sIGVdKSA9PiAhIWUpIHx8IFtdKTtcbn07XG52YXIgaXNXZWFrQ29tcGF0aWJsZSA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiAodHlwZW9mIGVsZW1lbnQgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZWxlbWVudCA9PSBcImZ1bmN0aW9uXCIpICYmIGVsZW1lbnQgIT0gbnVsbDtcbn07XG52YXIgYmluZFN0b3JlID0gKGVsZW1lbnQsIG5hbWUsIG9iaikgPT4ge1xuXHRpZiAoIWlzV2Vha0NvbXBhdGlibGUoZWxlbWVudCkgJiYgZWxlbWVudCAhPSBudWxsKSByZXR1cm4gZWxlbWVudDtcblx0bGV0IHdlYWtNYXAgPSBuYW1lZFN0b3JlTWFwcy5nZXQobmFtZSk7XG5cdGlmICghd2Vha01hcCkge1xuXHRcdHdlYWtNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0XHRuYW1lZFN0b3JlTWFwcy5zZXQobmFtZSwgd2Vha01hcCk7XG5cdH1cblx0aWYgKCF3ZWFrTWFwLmhhcyhlbGVtZW50KSAmJiBlbGVtZW50ICE9IG51bGwpIHdlYWtNYXAuc2V0KGVsZW1lbnQsIG9iaik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciByZWZsZWN0U3RvcmVzID0gKGVsZW1lbnQsIHN0b3JlcykgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIXN0b3JlcykgcmV0dXJuO1xuXHRmb3IgKGNvbnN0IFtuYW1lLCBvYmpdIG9mIHN0b3Jlcy5lbnRyaWVzKCkpIGJpbmRTdG9yZShlbGVtZW50LCBuYW1lLCBvYmopO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9NaXhpbnMudHNcbnZhciBnbG9iYWxzID0gZ2xvYmFsVGhpcztcbmZ1bmN0aW9uIHNoYXJlZChrZXksIGNyZWF0ZSkge1xuXHRjb25zdCBzeW1ib2wgPSBTeW1ib2wuZm9yKGtleSk7XG5cdHJldHVybiBnbG9iYWxzW3N5bWJvbF0gPz89IGNyZWF0ZSgpO1xufVxuZnVuY3Rpb24gaGFzRE9NKCkge1xuXHRyZXR1cm4gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBBdHRyICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSBcInVuZGVmaW5lZFwiO1xufVxuZnVuY3Rpb24gcmVxdWlyZURPTSgpIHtcblx0aWYgKCFoYXNET00oKSkgdGhyb3cgbmV3IEVycm9yKFwiQ3VzdG9tIEF0dHJpYnV0ZXMgcmVxdWlyZSBhIGJyb3dzZXIgRE9NLlwiKTtcbn1cbmZ1bmN0aW9uIHJlcG9ydChlcnJvcikge1xuXHRjb25zdCBmbiA9IGdsb2JhbHMucmVwb3J0RXJyb3I7XG5cdGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikgZm4uY2FsbChnbG9iYWxUaGlzLCBlcnJvcik7XG5cdGVsc2UgY29uc29sZS5lcnJvcihlcnJvcik7XG59XG5mdW5jdGlvbiBzYWZlKGNhbGxiYWNrKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVwb3J0KGVycm9yKTtcblx0XHRyZXR1cm47XG5cdH1cbn1cbmZ1bmN0aW9uIGRvbUVycm9yKG1lc3NhZ2UsIG5hbWUpIHtcblx0cmV0dXJuIG5ldyBET01FeGNlcHRpb24obWVzc2FnZSwgbmFtZSk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlTmFtZShuYW1lKSB7XG5cdHJldHVybiAvXlthLXpdW15BLVpcXHRcXG5cXGZcXHIgXFwwLz0+XSokLy50ZXN0KG5hbWUpICYmIG5hbWUuaW5jbHVkZXMoXCItXCIpICYmICEvXihhcmlhLXxkYXRhLXx4bWx8eGxpbmspLy50ZXN0KG5hbWUpICYmIG5hbWUgIT09IFwiYWNjZXB0LWNoYXJzZXRcIiAmJiBuYW1lICE9PSBcImh0dHAtZXF1aXZcIjtcbn1cbmZ1bmN0aW9uIGFzc2VydEF0dHJpYnV0ZU5hbWUobmFtZSkge1xuXHRpZiAoIWlzVmFsaWRDdXN0b21BdHRyaWJ1dGVOYW1lKG5hbWUpKSB0aHJvdyBkb21FcnJvcihgSW52YWxpZCBjdXN0b20gYXR0cmlidXRlIG5hbWU6ICR7bmFtZX1gLCBcIlN5bnRheEVycm9yXCIpO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50JDEobm9kZSkge1xuXHRyZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gMTtcbn1cbmZ1bmN0aW9uIGlzSFRNTChlbGVtZW50KSB7XG5cdHJldHVybiBlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XG59XG5mdW5jdGlvbiBpc1NoYWRvdyhub2RlKSB7XG5cdHJldHVybiBub2RlLm5vZGVUeXBlID09PSAxMSAmJiBcImhvc3RcIiBpbiBub2RlO1xufVxudmFyIGJvdW5kTWl4aW5TZXQgPSBzaGFyZWQoXCJkb20udHNAYm91bmRNaXhpblNldFwiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSk7XG52YXIgbWl4aW5FbGVtZW50cyA9IHNoYXJlZChcImRvbS50c0BtaXhpbkVsZW1lbnRzXCIsICgpID0+IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpKTtcbnZhciBtaXhpblJlZ2lzdHJ5ID0gc2hhcmVkKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG52YXIgbWl4aW5OYW1lc3BhY2UgPSBzaGFyZWQoXCJkb20udHNAbWl4aW5OYW1lc3BhY2VcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCkpO1xudmFyIGVuZ2luZSA9IHNoYXJlZChcImRvbS50c0BtaXhpbnMyLmVuZ2luZVwiLCAoKSA9PiAoe1xuXHRiaW5kaW5nczogLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksXG5cdHJvb3RzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHR3YXRjaGVzOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuXHRwZW5kaW5nOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHRxdWV1ZWQ6IGZhbHNlLFxuXHRkYXRhU291cmNlOiBTeW1ib2woXCJkYXRhLW1peGluXCIpLFxuXHRtYW51YWxTb3VyY2U6IFN5bWJvbChcIm1hbnVhbFwiKSxcblx0Y2xvc2VkU2hhZG93czogLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksXG5cdHByb2Nlc3Npbmc6IGZhbHNlXG59KSk7XG52YXIgcm9vdHMgPSBlbmdpbmUucm9vdHM7XG5mdW5jdGlvbiBzaGFkb3dPZihlbGVtZW50KSB7XG5cdHJldHVybiBlbGVtZW50LnNoYWRvd1Jvb3QgPz8gZW5naW5lLmNsb3NlZFNoYWRvd3MuZ2V0KGVsZW1lbnQpID8/IG51bGw7XG59XG5mdW5jdGlvbiogZWxlbWVudHNJbihyb290KSB7XG5cdGNvbnN0IHN0YWNrID0gW3Jvb3RdO1xuXHR3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpO1xuXHRcdGlmIChpc0VsZW1lbnQkMShub2RlKSkgeWllbGQgbm9kZTtcblx0XHRmb3IgKGxldCBjaGlsZCA9IG5vZGUubGFzdENoaWxkOyBjaGlsZDsgY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpIHN0YWNrLnB1c2goY2hpbGQpO1xuXHRcdGlmIChpc0VsZW1lbnQkMShub2RlKSkge1xuXHRcdFx0Y29uc3Qgc2hhZG93ID0gc2hhZG93T2Yobm9kZSk7XG5cdFx0XHRpZiAoc2hhZG93KSBzdGFjay5wdXNoKHNoYWRvdyk7XG5cdFx0fVxuXHR9XG59XG5mdW5jdGlvbiogbGlnaHRFbGVtZW50c0luKHJvb3QpIHtcblx0Y29uc3Qgc3RhY2sgPSBbcm9vdF07XG5cdHdoaWxlIChzdGFjay5sZW5ndGgpIHtcblx0XHRjb25zdCBub2RlID0gc3RhY2sucG9wKCk7XG5cdFx0aWYgKGlzRWxlbWVudCQxKG5vZGUpKSB5aWVsZCBub2RlO1xuXHRcdGZvciAobGV0IGNoaWxkID0gbm9kZS5sYXN0Q2hpbGQ7IGNoaWxkOyBjaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZykgc3RhY2sucHVzaChjaGlsZCk7XG5cdH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNGb3IoYmluZGluZykge1xuXHRjb25zdCByZXN1bHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRmb3IgKGNvbnN0IHNvdXJjZSBvZiBiaW5kaW5nPy5zb3VyY2VzID8/IFtdKSBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJvYmplY3RcIiAmJiBzb3VyY2Uubm9kZVR5cGUgPT09IDIpIHJlc3VsdC5hZGQoc291cmNlKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQsIG1peGluLCBhdHRyaWJ1dGUpIHtcblx0Y29uc3QgYmluZGluZyA9IG1peGluID8gZW5naW5lLmJpbmRpbmdzLmdldChlbGVtZW50KT8uZ2V0KG1peGluKSA6IHZvaWQgMDtcblx0Y29uc3QgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNGb3IoYmluZGluZyk7XG5cdGF0dHJpYnV0ZSA/Pz0gYXR0cmlidXRlcy52YWx1ZXMoKS5uZXh0KCkudmFsdWUgPz8gYmluZGluZz8ubGFzdEF0dHJpYnV0ZTtcblx0cmV0dXJuIHtcblx0XHRzdG9yZVNldDogZ2V0U3RvcmVzT2ZFbGVtZW50KG5hbWVkU3RvcmVNYXBzLCBlbGVtZW50KSxcblx0XHRtaXhpblNldDogYm91bmRNaXhpblNldC5nZXQoZWxlbWVudCksXG5cdFx0YmVoYXZpb3JTZXQ6IGJvdW5kQmVoYXZpb3JzLmdldChlbGVtZW50KSxcblx0XHRhdHRyaWJ1dGUsXG5cdFx0YXR0cmlidXRlcyxcblx0XHR2YWx1ZTogYXR0cmlidXRlPy52YWx1ZSxcblx0XHRzaWduYWw6IGJpbmRpbmc/LmNvbnRyb2xsZXI/LnNpZ25hbFxuXHR9O1xufVxuZnVuY3Rpb24gYmluZGluZ0ZvcihlbGVtZW50LCBtaXhpbikge1xuXHRsZXQgbWFwID0gZW5naW5lLmJpbmRpbmdzLmdldChlbGVtZW50KTtcblx0aWYgKCFtYXApIGVuZ2luZS5iaW5kaW5ncy5zZXQoZWxlbWVudCwgbWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG5cdGxldCBiaW5kaW5nID0gbWFwLmdldChtaXhpbik7XG5cdGlmICghYmluZGluZykgbWFwLnNldChtaXhpbiwgYmluZGluZyA9IHtcblx0XHRzb3VyY2VzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHRcdGNvbm5lY3RlZDogZmFsc2UsXG5cdFx0ZG9jdW1lbnQ6IGVsZW1lbnQub3duZXJEb2N1bWVudCxcblx0XHRyZWNvbmNpbGluZzogZmFsc2UsXG5cdFx0ZGlydHk6IGZhbHNlXG5cdH0pO1xuXHRyZXR1cm4gYmluZGluZztcbn1cbmZ1bmN0aW9uIGNhbGxNaXhpbihlbGVtZW50LCBtaXhpbiwgbmFtZSwgYXR0cmlidXRlLCAuLi5leHRyYSkge1xuXHRjb25zdCBjYWxsYmFjayA9IG1peGluW25hbWVdO1xuXHRpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0cmV0dXJuIHNhZmUoKCkgPT4gUmVmbGVjdC5hcHBseShjYWxsYmFjaywgbWl4aW4sIFtcblx0XHRuZXcgV2Vha1JlZihlbGVtZW50KSxcblx0XHRtaXhpbixcblx0XHRnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50LCBtaXhpbiwgYXR0cmlidXRlKSxcblx0XHQuLi5leHRyYVxuXHRdKSk7XG59XG5mdW5jdGlvbiByZWNvbmNpbGVCaW5kaW5nKGVsZW1lbnQsIG1peGluLCBiaW5kaW5nKSB7XG5cdGlmIChiaW5kaW5nLnJlY29uY2lsaW5nKSB7XG5cdFx0YmluZGluZy5kaXJ0eSA9IHRydWU7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGJpbmRpbmcucmVjb25jaWxpbmcgPSB0cnVlO1xuXHR0cnkge1xuXHRcdGZvciAobGV0IHR1cm4gPSAwOyB0dXJuIDwgMzI7IHR1cm4rKykge1xuXHRcdFx0YmluZGluZy5kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0Y29uc3Qgb2xkRG9jdW1lbnQgPSBiaW5kaW5nLmRvY3VtZW50O1xuXHRcdFx0YmluZGluZy5kb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcblx0XHRcdGlmIChvbGREb2N1bWVudCAhPT0gYmluZGluZy5kb2N1bWVudCkgY2FsbE1peGluKGVsZW1lbnQsIG1peGluLCBcImFkb3B0ZWRDYWxsYmFja1wiLCB2b2lkIDAsIG9sZERvY3VtZW50LCBiaW5kaW5nLmRvY3VtZW50KTtcblx0XHRcdGNvbnN0IHdhbnRlZCA9IGJpbmRpbmcuc291cmNlcy5zaXplID4gMCAmJiBlbGVtZW50LmlzQ29ubmVjdGVkO1xuXHRcdFx0aWYgKHdhbnRlZCAhPT0gYmluZGluZy5jb25uZWN0ZWQpIHtcblx0XHRcdFx0YmluZGluZy5jb25uZWN0ZWQgPSB3YW50ZWQ7XG5cdFx0XHRcdGxldCBzZXQgPSBib3VuZE1peGluU2V0LmdldChlbGVtZW50KTtcblx0XHRcdFx0aWYgKCFzZXQpIGJvdW5kTWl4aW5TZXQuc2V0KGVsZW1lbnQsIHNldCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKTtcblx0XHRcdFx0bGV0IGVsZW1lbnRzID0gbWl4aW5FbGVtZW50cy5nZXQobWl4aW4pO1xuXHRcdFx0XHRpZiAoIWVsZW1lbnRzKSBtaXhpbkVsZW1lbnRzLnNldChtaXhpbiwgZWxlbWVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKSk7XG5cdFx0XHRcdGlmICh3YW50ZWQpIHtcblx0XHRcdFx0XHRzZXQuYWRkKG1peGluKTtcblx0XHRcdFx0XHRlbGVtZW50cy5hZGQoZWxlbWVudCk7XG5cdFx0XHRcdFx0YmluZGluZy5jb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRcdFx0XHRcdGNvbnN0IGNsZWFudXAgPSBjYWxsTWl4aW4oZWxlbWVudCwgbWl4aW4sIFwiY29ubmVjdFwiKTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNsZWFudXAgPT09IFwiZnVuY3Rpb25cIikgYmluZGluZy5jbGVhbnVwID0gY2xlYW51cDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXQuZGVsZXRlKG1peGluKTtcblx0XHRcdFx0XHRlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG5cdFx0XHRcdFx0Y29uc3QgY2xlYW51cCA9IGJpbmRpbmcuY2xlYW51cDtcblx0XHRcdFx0XHRiaW5kaW5nLmNsZWFudXAgPSB2b2lkIDA7XG5cdFx0XHRcdFx0c2FmZSgoKSA9PiBiaW5kaW5nLmNvbnRyb2xsZXI/LmFib3J0KCkpO1xuXHRcdFx0XHRcdGlmIChjbGVhbnVwKSBzYWZlKGNsZWFudXApO1xuXHRcdFx0XHRcdGNhbGxNaXhpbihlbGVtZW50LCBtaXhpbiwgXCJkaXNjb25uZWN0XCIpO1xuXHRcdFx0XHRcdGJpbmRpbmcuY29udHJvbGxlciA9IHZvaWQgMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFiaW5kaW5nLmRpcnR5KSBicmVhaztcblx0XHRcdGlmICh0dXJuID09PSAzMSkge1xuXHRcdFx0XHRyZXBvcnQoLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcIkEgbWl4aW4gcmVwZWF0ZWRseSBjaGFuZ2VkIGl0cyBvd24gYmluZGluZyBkdXJpbmcgbGlmZWN5Y2xlIGRlbGl2ZXJ5LlwiKSk7XG5cdFx0XHRcdGVucXVldWUoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdGJpbmRpbmcucmVjb25jaWxpbmcgPSBmYWxzZTtcblx0fVxuXHRpZiAoIWJpbmRpbmcuc291cmNlcy5zaXplICYmICFiaW5kaW5nLmNvbm5lY3RlZCkgZW5naW5lLmJpbmRpbmdzLmdldChlbGVtZW50KT8uZGVsZXRlKG1peGluKTtcbn1cbmZ1bmN0aW9uIGFjcXVpcmUoZWxlbWVudCwgbWl4aW4sIHNvdXJjZSkge1xuXHRjb25zdCBiaW5kaW5nID0gYmluZGluZ0ZvcihlbGVtZW50LCBtaXhpbik7XG5cdGJpbmRpbmcuc291cmNlcy5hZGQoc291cmNlKTtcblx0aWYgKHR5cGVvZiBzb3VyY2UgPT09IFwib2JqZWN0XCIgJiYgc291cmNlLm5vZGVUeXBlID09PSAyKSBiaW5kaW5nLmxhc3RBdHRyaWJ1dGUgPSBzb3VyY2U7XG5cdHJlY29uY2lsZUJpbmRpbmcoZWxlbWVudCwgbWl4aW4sIGJpbmRpbmcpO1xufVxuZnVuY3Rpb24gcmVsZWFzZShlbGVtZW50LCBtaXhpbiwgc291cmNlKSB7XG5cdGNvbnN0IGJpbmRpbmcgPSBlbmdpbmUuYmluZGluZ3MuZ2V0KGVsZW1lbnQpPy5nZXQobWl4aW4pO1xuXHRpZiAoIWJpbmRpbmcpIHJldHVybjtcblx0YmluZGluZy5zb3VyY2VzLmRlbGV0ZShzb3VyY2UpO1xuXHRyZWNvbmNpbGVCaW5kaW5nKGVsZW1lbnQsIG1peGluLCBiaW5kaW5nKTtcbn1cbmZ1bmN0aW9uIGVucXVldWUoZWxlbWVudCkge1xuXHRlbmdpbmUucGVuZGluZy5hZGQoZWxlbWVudCk7XG5cdGlmICghZW5naW5lLnF1ZXVlZCkge1xuXHRcdGVuZ2luZS5xdWV1ZWQgPSB0cnVlO1xuXHRcdHF1ZXVlTWljcm90YXNrKCgpID0+IHtcblx0XHRcdGVuZ2luZS5xdWV1ZWQgPSBmYWxzZTtcblx0XHRcdGRyYWluUGVuZGluZygpO1xuXHRcdH0pO1xuXHR9XG59XG5mdW5jdGlvbiBkcmFpblBlbmRpbmcoKSB7XG5cdGlmIChlbmdpbmUucHJvY2Vzc2luZykgcmV0dXJuO1xuXHRlbmdpbmUucHJvY2Vzc2luZyA9IHRydWU7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcGVuZGluZyA9IFsuLi5lbmdpbmUucGVuZGluZ107XG5cdFx0ZW5naW5lLnBlbmRpbmcuY2xlYXIoKTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcGVuZGluZykgc2FmZSgoKSA9PiB1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCkpO1xuXHR9IGZpbmFsbHkge1xuXHRcdGVuZ2luZS5wcm9jZXNzaW5nID0gZmFsc2U7XG5cdH1cbn1cbmZ1bmN0aW9uIGRhdGFOYW1lcyhlbGVtZW50KSB7XG5cdHJldHVybiBuZXcgU2V0KChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWl4aW5cIikgPz8gXCJcIikuc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbikpO1xufVxuZnVuY3Rpb24gd3JpdGVEYXRhTmFtZXMoZWxlbWVudCwgbmFtZXMpIHtcblx0Y29uc3QgbmV4dCA9IFsuLi5uYW1lc10uam9pbihcIiBcIik7XG5cdGlmIChuZXh0KSB7XG5cdFx0aWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1taXhpblwiKSAhPT0gbmV4dCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1peGluXCIsIG5leHQpO1xuXHR9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS1taXhpblwiKSkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1peGluXCIpO1xufVxuZnVuY3Rpb24gdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpIHtcblx0Y29uc3Qgc2VsZWN0ZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgZGF0YU5hbWVzKGVsZW1lbnQpKSB7XG5cdFx0Y29uc3QgbWl4aW4gPSBtaXhpblJlZ2lzdHJ5LmdldChuYW1lKTtcblx0XHRpZiAobWl4aW4pIHNlbGVjdGVkLmFkZChtaXhpbik7XG5cdH1cblx0Zm9yIChjb25zdCBbbWl4aW4sIGJpbmRpbmddIG9mIFsuLi5lbmdpbmUuYmluZGluZ3MuZ2V0KGVsZW1lbnQpID8/IFtdXSkgaWYgKGJpbmRpbmcuc291cmNlcy5oYXMoZW5naW5lLmRhdGFTb3VyY2UpICYmICFzZWxlY3RlZC5oYXMobWl4aW4pKSByZWxlYXNlKGVsZW1lbnQsIG1peGluLCBlbmdpbmUuZGF0YVNvdXJjZSk7XG5cdGZvciAoY29uc3QgbWl4aW4gb2Ygc2VsZWN0ZWQpIGFjcXVpcmUoZWxlbWVudCwgbWl4aW4sIGVuZ2luZS5kYXRhU291cmNlKTtcblx0Zm9yIChjb25zdCBbbWl4aW4sIGJpbmRpbmddIG9mIFsuLi5lbmdpbmUuYmluZGluZ3MuZ2V0KGVsZW1lbnQpID8/IFtdXSkgcmVjb25jaWxlQmluZGluZyhlbGVtZW50LCBtaXhpbiwgYmluZGluZyk7XG5cdHJldHVybiBlbGVtZW50O1xufVxuZnVuY3Rpb24gdXBkYXRlTWl4aW5BdHRyaWJ1dGVzKGVsZW1lbnQsIG1peGluKSB7XG5cdHJldHVybiB1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCk7XG59XG5mdW5jdGlvbiB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwoZWxlbWVudHMsIG1peGluKSB7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykgaWYgKG1peGluKSB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZWxlbWVudCwgbWl4aW4pO1xuXHRlbHNlIHVwZGF0ZUFsbE1peGlucyhlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMobWl4aW4pIHtcblx0Zm9yIChjb25zdCByb290IG9mIHJvb3RzKSB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwoZWxlbWVudHNJbihyb290KSwgbWl4aW4pO1xufVxuZnVuY3Rpb24gYmluZE1peGlucyhlbGVtZW50LCBtaXhpbiwgbWl4U2V0KSB7XG5cdGlmIChtaXhTZXQgJiYgIWJvdW5kTWl4aW5TZXQuaGFzKGVsZW1lbnQpKSBib3VuZE1peGluU2V0LnNldChlbGVtZW50LCBtaXhTZXQpO1xuXHRjb25zdCBuYW1lID0gbWl4aW5OYW1lc3BhY2UuZ2V0KG1peGluKSA/PyBtaXhpbi5uYW1lO1xuXHRpZiAobmFtZSkge1xuXHRcdGNvbnN0IG5hbWVzID0gZGF0YU5hbWVzKGVsZW1lbnQpO1xuXHRcdG5hbWVzLmFkZChuYW1lKTtcblx0XHR3cml0ZURhdGFOYW1lcyhlbGVtZW50LCBuYW1lcyk7XG5cdH1cblx0YWNxdWlyZShlbGVtZW50LCBtaXhpbiwgZW5naW5lLm1hbnVhbFNvdXJjZSk7XG5cdHVwZGF0ZUFsbE1peGlucyhlbGVtZW50KTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5mdW5jdGlvbiB1bmJpbmRNaXhpbnMoZWxlbWVudCwgbWl4aW4sIHJlZmxlY3QgPSB0cnVlKSB7XG5cdGlmIChyZWZsZWN0KSB7XG5cdFx0Y29uc3QgbmFtZSA9IG1peGluTmFtZXNwYWNlLmdldChtaXhpbikgPz8gbWl4aW4ubmFtZTtcblx0XHRpZiAobmFtZSkge1xuXHRcdFx0Y29uc3QgbmFtZXMgPSBkYXRhTmFtZXMoZWxlbWVudCk7XG5cdFx0XHRuYW1lcy5kZWxldGUobmFtZSk7XG5cdFx0XHR3cml0ZURhdGFOYW1lcyhlbGVtZW50LCBuYW1lcyk7XG5cdFx0fVxuXHR9XG5cdHJlbGVhc2UoZWxlbWVudCwgbWl4aW4sIGVuZ2luZS5tYW51YWxTb3VyY2UpO1xuXHRyZXR1cm4gdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gcmVmbGVjdE1peGlucyhlbGVtZW50LCBtaXhpbnMpIHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm4gZWxlbWVudDtcblx0Y29uc3QgdmFsdWVzID0gbWl4aW5zIGluc3RhbmNlb2YgTWFwID8gbWl4aW5zLnZhbHVlcygpIDogbWl4aW5zID8/IFtdO1xuXHRmb3IgKGNvbnN0IG1peGluIG9mIHZhbHVlcykgYmluZE1peGlucyhlbGVtZW50LCBtaXhpbik7XG5cdHJldHVybiBlbGVtZW50O1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJNaXhpbihuYW1lLCBtaXhpbikge1xuXHRjb25zdCBrZXkgPSBuYW1lLnRyaW0oKTtcblx0aWYgKCFrZXkgfHwgL1xccy8udGVzdChrZXkpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWl4aW4gbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHRva2VuLlwiKTtcblx0aWYgKCFtaXhpbiB8fCB0eXBlb2YgbWl4aW4gIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1peGluICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXhpbiBtdXN0IGJlIGFuIG9iamVjdC5cIik7XG5cdGNvbnN0IGV4aXN0aW5nID0gbWl4aW5SZWdpc3RyeS5nZXQoa2V5KTtcblx0aWYgKGV4aXN0aW5nICYmIGV4aXN0aW5nICE9PSBtaXhpbikge1xuXHRcdGNvbnNvbGUuZXJyb3IoYE1peGluIG5hbWUgYWxyZWFkeSByZWdpc3RlcmVkOiAke2tleX1gKTtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgcHJldmlvdXNOYW1lID0gbWl4aW5OYW1lc3BhY2UuZ2V0KG1peGluKTtcblx0aWYgKHByZXZpb3VzTmFtZSAmJiBwcmV2aW91c05hbWUgIT09IGtleSkgdGhyb3cgbmV3IEVycm9yKGBNaXhpbiBhbHJlYWR5IG5hbWVkOiAke3ByZXZpb3VzTmFtZX1gKTtcblx0bWl4aW5SZWdpc3RyeS5zZXQoa2V5LCBtaXhpbik7XG5cdG1peGluTmFtZXNwYWNlLnNldChtaXhpbiwga2V5KTtcblx0Zm9yIChjb25zdCByb290IG9mIHJvb3RzKSBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHNJbihyb290KSkgZW5xdWV1ZShlbGVtZW50KTtcblx0cmV0dXJuIG1peGluO1xufVxuZnVuY3Rpb24gdW5yZWdpc3Rlck1peGluKG5hbWUpIHtcblx0Y29uc3QgbWl4aW4gPSBtaXhpblJlZ2lzdHJ5LmdldChuYW1lKTtcblx0aWYgKCFtaXhpbikgcmV0dXJuIGZhbHNlO1xuXHRtaXhpblJlZ2lzdHJ5LmRlbGV0ZShuYW1lKTtcblx0aWYgKG1peGluTmFtZXNwYWNlLmdldChtaXhpbikgPT09IG5hbWUpIG1peGluTmFtZXNwYWNlLmRlbGV0ZShtaXhpbik7XG5cdGZvciAoY29uc3Qgcm9vdCBvZiByb290cykgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzSW4ocm9vdCkpIGVucXVldWUoZWxlbWVudCk7XG5cdHJldHVybiB0cnVlO1xufVxudmFyIG5hbWVSZWdpc3RyeUYgPSBzaGFyZWQoXCJkb20udHNAbWl4aW5zMi5uYW1lUmVnaXN0cnlGXCIsICgpID0+IHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gXCJ1bmRlZmluZWRcIiA/IHZvaWQgMCA6IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoKSA9PiB7fSkpO1xuZnVuY3Rpb24gY2FwdHVyZURpc3Bvc2VyKHJlc3VsdCwgbGlzdCkge1xuXHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJmdW5jdGlvblwiKSBsaXN0LnB1c2gocmVzdWx0KTtcbn1cbmZ1bmN0aW9uIHJlY29uY2lsZVRyZWVTb29uKHJvb3QpIHtcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzSW4ocm9vdCkpIHtcblx0XHRjb25zdCBzaGFkb3cgPSBzaGFkb3dPZihlbGVtZW50KTtcblx0XHRpZiAoc2hhZG93ICYmICFyb290cy5oYXMoc2hhZG93KSkgYWRkUm9vdChzaGFkb3cpO1xuXHRcdGVucXVldWUoZWxlbWVudCk7XG5cdH1cbn1cbmZ1bmN0aW9uIGhhbmRsZVJvb3RSZWNvcmRzKHJlY29yZHMpIHtcblx0Zm9yIChjb25zdCByZWNvcmQgb2YgcmVjb3Jkcykge1xuXHRcdGlmIChyZWNvcmQudHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIgJiYgaXNFbGVtZW50JDEocmVjb3JkLnRhcmdldCkpIGVucXVldWUocmVjb3JkLnRhcmdldCk7XG5cdFx0aWYgKHJlY29yZC50eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcmVjb3JkLmFkZGVkTm9kZXMpIHJlY29uY2lsZVRyZWVTb29uKG5vZGUpO1xuXHRcdFx0Zm9yIChjb25zdCBub2RlIG9mIHJlY29yZC5yZW1vdmVkTm9kZXMpIHJlY29uY2lsZVRyZWVTb29uKG5vZGUpO1xuXHRcdH1cblx0fVxufVxuZnVuY3Rpb24gYWRkUm9vdChyb290ID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsKSB7XG5cdGlmICghcm9vdCkgcmV0dXJuO1xuXHRyZXF1aXJlRE9NKCk7XG5cdGlmIChyb290cy5oYXMocm9vdCkpIHJldHVybiByb290O1xuXHRyb290cy5hZGQocm9vdCk7XG5cdGNvbnN0IGRpc3Bvc2VycyA9IFtdO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGhhbmRsZVJvb3RSZWNvcmRzKTtcblx0ZW5naW5lLndhdGNoZXMuc2V0KHJvb3QsIHtcblx0XHRvYnNlcnZlcixcblx0XHRkaXNwb3NlcnNcblx0fSk7XG5cdG9ic2VydmVyLm9ic2VydmUocm9vdCwge1xuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZXM6IHRydWVcblx0fSk7XG5cdGNhcHR1cmVEaXNwb3NlcihvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3Rvcihyb290LCBcIipcIiwgXCJkYXRhLW1peGluXCIsIChtdXRhdGlvbikgPT4ge1xuXHRcdGlmIChpc0VsZW1lbnQkMShtdXRhdGlvbi50YXJnZXQpKSBlbnF1ZXVlKG11dGF0aW9uLnRhcmdldCk7XG5cdH0pLCBkaXNwb3NlcnMpO1xuXHRjYXB0dXJlRGlzcG9zZXIob2JzZXJ2ZUJ5U2VsZWN0b3Iocm9vdCwgXCJbZGF0YS1taXhpbl1cIiwgKG11dGF0aW9uKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIHJlY29uY2lsZVRyZWVTb29uKG5vZGUpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBtdXRhdGlvbi5yZW1vdmVkTm9kZXMpIHJlY29uY2lsZVRyZWVTb29uKG5vZGUpO1xuXHR9KSwgZGlzcG9zZXJzKTtcblx0Y2FwdHVyZURpc3Bvc2VyKG9ic2VydmVTdHlsZVRyZWUocm9vdCksIGRpc3Bvc2Vycyk7XG5cdHBvbHlmaWxsU3RhdGUucnVudGltZT8ub2JzZXJ2ZVJvb3Qocm9vdCk7XG5cdHJlY29uY2lsZVRyZWVTb29uKHJvb3QpO1xuXHRyZXR1cm4gcm9vdDtcbn1cbmZ1bmN0aW9uIHJlbW92ZVJvb3Qocm9vdCkge1xuXHRjb25zdCB3YXRjaCA9IGVuZ2luZS53YXRjaGVzLmdldChyb290KTtcblx0aWYgKHdhdGNoKSB7XG5cdFx0d2F0Y2gub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdGZvciAoY29uc3QgZGlzcG9zZSBvZiB3YXRjaC5kaXNwb3NlcnMpIHNhZmUoZGlzcG9zZSk7XG5cdFx0ZW5naW5lLndhdGNoZXMuZGVsZXRlKHJvb3QpO1xuXHR9XG5cdHJldHVybiByb290cy5kZWxldGUocm9vdCk7XG59XG52YXIgRE9NTWl4aW4gPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKG5hbWUgPSBudWxsKSB7XG5cdFx0aWYgKG5hbWUpIHJlZ2lzdGVyTWl4aW4obmFtZSwgdGhpcyk7XG5cdH1cblx0Y29ubmVjdChfZWxlbWVudCwgX3NlbGYsIF9yZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChfZWxlbWVudCwgX3NlbGYsIF9yZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c3RvcmVGb3JFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gbmFtZWRTdG9yZU1hcHMuZ2V0KHRoaXMubmFtZSA/PyBcIlwiKT8uZ2V0KGVsZW1lbnQpO1xuXHR9XG5cdHJlbGF0ZWRGb3JFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCwgdGhpcyk7XG5cdH1cblx0Z2V0IGVsZW1lbnRzKCkge1xuXHRcdHJldHVybiBtaXhpbkVsZW1lbnRzLmdldCh0aGlzKTtcblx0fVxuXHRnZXQgc3RvcmFnZSgpIHtcblx0XHRyZXR1cm4gbmFtZWRTdG9yZU1hcHMuZ2V0KHRoaXMubmFtZSA/PyBcIlwiKTtcblx0fVxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gbWl4aW5OYW1lc3BhY2UuZ2V0KHRoaXMpO1xuXHR9XG59O1xudmFyIHBvbHlmaWxsU3RhdGUgPSBzaGFyZWQoXCJkb20udHNAbWl4aW5zMi5hdHRyaWJ1dGVQb2x5ZmlsbFwiLCAoKSA9PiAoe30pKTtcbmZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuXHRyZXR1cm4gdHlwZW9mIGdsb2JhbHMuQ3VzdG9tQXR0cmlidXRlUmVnaXN0cnkgPT09IFwiZnVuY3Rpb25cIiAmJiBnbG9iYWxzLmN1c3RvbUF0dHJpYnV0ZXMgIT0gbnVsbCAmJiB0eXBlb2YgZ2xvYmFscy5jdXN0b21BdHRyaWJ1dGVzLmRlZmluZSA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gaXNQb2x5ZmlsbGVkKCkge1xuXHRyZXR1cm4gISFwb2x5ZmlsbFN0YXRlLnJ1bnRpbWUgJiYgZ2xvYmFscy5DdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSA9PT0gcG9seWZpbGxTdGF0ZS5ydW50aW1lLlJlZ2lzdHJ5O1xufVxuZnVuY3Rpb24gYXBwbHkoKSB7XG5cdHJlcXVpcmVET00oKTtcblx0aWYgKGlzU3VwcG9ydGVkKCkpIHJldHVybiBnbG9iYWxzLmN1c3RvbUF0dHJpYnV0ZXM7XG5cdGlmIChnbG9iYWxzLkN1c3RvbUF0dHJpYnV0ZVJlZ2lzdHJ5ICE9IG51bGwgfHwgZ2xvYmFscy5jdXN0b21BdHRyaWJ1dGVzICE9IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkEgcGFydGlhbCBDdXN0b20gQXR0cmlidXRlcyBBUEkgaXMgaW5zdGFsbGVkOyByZWZ1c2luZyB0byBvdmVyd3JpdGUgaXQuXCIpO1xuXHRjb25zdCBydW50aW1lID0gaW5zdGFsbEF0dHJpYnV0ZVBvbHlmaWxsKCk7XG5cdHBvbHlmaWxsU3RhdGUucnVudGltZSA9IHJ1bnRpbWU7XG5cdGZvciAoY29uc3Qgcm9vdCBvZiByb290cykgcnVudGltZS5vYnNlcnZlUm9vdChyb290KTtcblx0YWRkUm9vdChkb2N1bWVudCk7XG5cdHJldHVybiBydW50aW1lLnJlZ2lzdHJ5O1xufVxuZnVuY3Rpb24gZ2V0Q3VzdG9tQXR0cmlidXRlcygpIHtcblx0cmV0dXJuIGFwcGx5KCk7XG59XG5mdW5jdGlvbiBjcmVhdGVDdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSgpIHtcblx0YXBwbHkoKTtcblx0cmV0dXJuIG5ldyBnbG9iYWxzLkN1c3RvbUF0dHJpYnV0ZVJlZ2lzdHJ5KCk7XG59XG5mdW5jdGlvbiBnZXRDdXN0b21BdHRyaWJ1dGVCYXNlKCkge1xuXHRhcHBseSgpO1xuXHRyZXR1cm4gZ2xvYmFscy5BdHRyO1xufVxuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tQXR0cmlidXRlKG5hbWUsIG9wdGlvbnMgPSB7fSkge1xuXHRhcHBseSgpO1xuXHRjb25zdCBkb2MgPSBvcHRpb25zLmRvY3VtZW50ID8/IGRvY3VtZW50O1xuXHRyZXR1cm4gZG9jLmNyZWF0ZUF0dHJpYnV0ZS5jYWxsKGRvYywgbmFtZSwgeyBjdXN0b21BdHRyaWJ1dGVSZWdpc3RyeTogb3B0aW9ucy5yZWdpc3RyeSB9KTtcbn1cbmZ1bmN0aW9uIGluc3RhbGxBdHRyaWJ1dGVQb2x5ZmlsbCgpIHtcblx0Y29uc3QgTmF0aXZlQXR0ciA9IGdsb2JhbHMuQXR0cjtcblx0Y29uc3QgZG9jUHJvdG8gPSBEb2N1bWVudC5wcm90b3R5cGU7XG5cdGNvbnN0IGVsUHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblx0Y29uc3QgbmF0aXZlQ3JlYXRlQXR0cmlidXRlID0gZG9jUHJvdG8uY3JlYXRlQXR0cmlidXRlO1xuXHRjb25zdCBuYXRpdmVDcmVhdGVBdHRyaWJ1dGVOUyA9IGRvY1Byb3RvLmNyZWF0ZUF0dHJpYnV0ZU5TO1xuXHRjb25zdCBuYXRpdmVDcmVhdGVFbGVtZW50ID0gZG9jUHJvdG8uY3JlYXRlRWxlbWVudDtcblx0Y29uc3QgbmF0aXZlQ3JlYXRlRWxlbWVudE5TID0gZG9jUHJvdG8uY3JlYXRlRWxlbWVudE5TO1xuXHRjb25zdCBuYXRpdmVJbXBvcnROb2RlID0gZG9jUHJvdG8uaW1wb3J0Tm9kZTtcblx0Y29uc3QgbmF0aXZlQXR0YWNoU2hhZG93ID0gZWxQcm90by5hdHRhY2hTaGFkb3c7XG5cdGNvbnN0IGF0dHJpYnV0ZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLCBcImF0dHJpYnV0ZXNcIik7XG5cdGNvbnN0IG5hdGl2ZUF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVEZXNjcmlwdG9yLmdldDtcblx0Y29uc3QgQUxSRUFEWSA9IFN5bWJvbChcImFscmVhZHkgY29uc3RydWN0ZWRcIik7XG5cdGNvbnN0IGNhbGxiYWNrTmFtZXMgPSBbXG5cdFx0XCJjb25uZWN0ZWRDYWxsYmFja1wiLFxuXHRcdFwiZGlzY29ubmVjdGVkQ2FsbGJhY2tcIixcblx0XHRcImNvbm5lY3RlZE1vdmVDYWxsYmFja1wiLFxuXHRcdFwiYWRvcHRlZENhbGxiYWNrXCIsXG5cdFx0XCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIlxuXHRdO1xuXHRjb25zdCBpbnRlcm5hbHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0Y29uc3QgcmVnaXN0cmllcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRjb25zdCByZWdpc3RyeURvY3VtZW50cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRjb25zdCBlbnRyaWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdGNvbnN0IHRyYWNrZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0Y29uc3QgYWN0aXZlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgYXR0cmlidXRlTWFwcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRjb25zdCBvYnNlcnZlZFJvb3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdGNvbnN0IGxvY2FsT2JzZXJ2ZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdGxldCBjb25zdHJ1Y3RpbmdHbG9iYWwgPSBmYWxzZTtcblx0bGV0IGdsb2JhbFJlZ2lzdHJ5O1xuXHRmdW5jdGlvbiBzZWxmKHJlZ2lzdHJ5KSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBpbnRlcm5hbHMuZ2V0KHJlZ2lzdHJ5KTtcblx0XHRpZiAoIXZhbHVlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSWxsZWdhbCBpbnZvY2F0aW9uXCIpO1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRmdW5jdGlvbiBub2RlRG9jdW1lbnQobm9kZSkge1xuXHRcdHJldHVybiBub2RlLm5vZGVUeXBlID09PSA5ID8gbm9kZSA6IG5vZGUub3duZXJEb2N1bWVudDtcblx0fVxuXHRmdW5jdGlvbiBzZXRSZWdpc3RyeShub2RlLCByZWdpc3RyeSkge1xuXHRcdHJlZ2lzdHJpZXMuc2V0KG5vZGUsIHJlZ2lzdHJ5KTtcblx0XHRyZWdpc3RyeURvY3VtZW50cy5zZXQobm9kZSwgbm9kZS5vd25lckRvY3VtZW50KTtcblx0fVxuXHRmdW5jdGlvbiBnbG9iYWxPZihyZWdpc3RyeSkge1xuXHRcdHJldHVybiByZWdpc3RyeSAmJiAhc2VsZihyZWdpc3RyeSkuc2NvcGVkID8gcmVnaXN0cnkgOiBudWxsO1xuXHR9XG5cdGZ1bmN0aW9uIGV4Y2x1c2l2ZUZyYWdtZW50KG5vZGUpIHtcblx0XHRyZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gMTEgJiYgIWlzU2hhZG93KG5vZGUpO1xuXHR9XG5cdGZ1bmN0aW9uIHJlZ2lzdHJ5T2Yobm9kZSkge1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSA5KSByZXR1cm4gcmVnaXN0cmllcy5nZXQobm9kZSkgPz8gbnVsbDtcblx0XHRpZiAocmVnaXN0cmllcy5oYXMobm9kZSkpIHtcblx0XHRcdGNvbnN0IHJlZ2lzdHJ5ID0gcmVnaXN0cmllcy5nZXQobm9kZSk7XG5cdFx0XHRpZiAocmVnaXN0cnlEb2N1bWVudHMuZ2V0KG5vZGUpID09PSBub2RlLm93bmVyRG9jdW1lbnQgfHwgcmVnaXN0cnkgJiYgc2VsZihyZWdpc3RyeSkuc2NvcGVkKSByZXR1cm4gcmVnaXN0cnk7XG5cdFx0XHRjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG5cdFx0XHRjb25zdCBhZG9wdGVkID0gZ2xvYmFsT2YoIWlzRWxlbWVudCQxKG5vZGUpIHx8IHJlZ2lzdHJ5IHx8ICFwYXJlbnQgfHwgZXhjbHVzaXZlRnJhZ21lbnQocGFyZW50KSA/IHJlZ2lzdHJ5T2Yobm9kZS5vd25lckRvY3VtZW50KSA6IHJlZ2lzdHJ5T2YocGFyZW50KSk7XG5cdFx0XHRzZXRSZWdpc3RyeShub2RlLCBhZG9wdGVkKTtcblx0XHRcdHJldHVybiBhZG9wdGVkO1xuXHRcdH1cblx0XHRsZXQgcmVnaXN0cnkgPSBudWxsO1xuXHRcdGlmIChpc0VsZW1lbnQkMShub2RlKSkge1xuXHRcdFx0Y29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0cmVnaXN0cnkgPSBwYXJlbnQgJiYgIWV4Y2x1c2l2ZUZyYWdtZW50KHBhcmVudCkgPyByZWdpc3RyeU9mKHBhcmVudCkgOiBub2RlLm93bmVyRG9jdW1lbnQgPT09IGRvY3VtZW50ID8gZ2xvYmFsUmVnaXN0cnkgOiBudWxsO1xuXHRcdH0gZWxzZSBpZiAoaXNTaGFkb3cobm9kZSkpIHJlZ2lzdHJ5ID0gbm9kZS5vd25lckRvY3VtZW50ID09PSBkb2N1bWVudCA/IGdsb2JhbFJlZ2lzdHJ5IDogbnVsbDtcblx0XHRpZiAocmVnaXN0cnkpIHNldFJlZ2lzdHJ5KG5vZGUsIHJlZ2lzdHJ5KTtcblx0XHRyZXR1cm4gcmVnaXN0cnk7XG5cdH1cblx0ZnVuY3Rpb24gbG9va3VwKHJlZ2lzdHJ5LCBuYW1lc3BhY2UsIG5hbWUpIHtcblx0XHRyZXR1cm4gcmVnaXN0cnkgJiYgbmFtZXNwYWNlID09PSBudWxsID8gc2VsZihyZWdpc3RyeSkuYnlOYW1lLmdldChuYW1lKSA6IHZvaWQgMDtcblx0fVxuXHRmdW5jdGlvbiByZWdpc3RyeU9wdGlvbihvcHRpb25zLCBudWxsYWJsZSkge1xuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gXCJvYmplY3RcIiB8fCBvcHRpb25zID09PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuXHRcdGNvbnN0IHJlZ2lzdHJ5ID0gb3B0aW9ucy5jdXN0b21BdHRyaWJ1dGVSZWdpc3RyeTtcblx0XHRpZiAocmVnaXN0cnkgPT09IHZvaWQgMCB8fCBudWxsYWJsZSAmJiByZWdpc3RyeSA9PT0gbnVsbCkgcmV0dXJuIHJlZ2lzdHJ5O1xuXHRcdGlmIChyZWdpc3RyeSA9PT0gbnVsbCB8fCAhaW50ZXJuYWxzLmhhcyhyZWdpc3RyeSkpIHRocm93IG5ldyBUeXBlRXJyb3IoYGN1c3RvbUF0dHJpYnV0ZVJlZ2lzdHJ5IG11c3QgYmUgYSByZWdpc3RyeSR7bnVsbGFibGUgPyBcIiBvciBudWxsXCIgOiBcIlwifWApO1xuXHRcdHJldHVybiByZWdpc3RyeTtcblx0fVxuXHRmdW5jdGlvbiBjaGVja1JlZ2lzdHJ5KHJlZ2lzdHJ5LCBkb2MpIHtcblx0XHRpZiAocmVnaXN0cnkgJiYgIXNlbGYocmVnaXN0cnkpLnNjb3BlZCAmJiByZWdpc3RyeU9mKGRvYykgIT09IHJlZ2lzdHJ5KSB0aHJvdyBkb21FcnJvcihcIkEgZ2xvYmFsIHJlZ2lzdHJ5IGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBpdHMgb3duIGRvY3VtZW50LlwiLCBcIk5vdFN1cHBvcnRlZEVycm9yXCIpO1xuXHR9XG5cdGZ1bmN0aW9uIGludm9rZShhdHRyaWJ1dGUsIG5hbWUsIGFyZ3MgPSBbXSkge1xuXHRcdGNvbnN0IGRlZmluaXRpb24gPSBlbnRyaWVzLmdldChhdHRyaWJ1dGUpPy5kZWZpbml0aW9uO1xuXHRcdGlmICghZGVmaW5pdGlvbikgcmV0dXJuO1xuXHRcdGNvbnN0IGNhbGxiYWNrID0gZGVmaW5pdGlvbi5jYWxsYmFja3NbbmFtZV07XG5cdFx0aWYgKCFjYWxsYmFjayAmJiBuYW1lID09PSBcImNvbm5lY3RlZE1vdmVDYWxsYmFja1wiKSB7XG5cdFx0XHRpbnZva2UoYXR0cmlidXRlLCBcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIpO1xuXHRcdFx0aW52b2tlKGF0dHJpYnV0ZSwgXCJjb25uZWN0ZWRDYWxsYmFja1wiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNhbGxiYWNrKSBzYWZlKCgpID0+IFJlZmxlY3QuYXBwbHkoY2FsbGJhY2ssIGF0dHJpYnV0ZSwgYXJncykpO1xuXHR9XG5cdGZ1bmN0aW9uIGNvbm5lY3QoYXR0cmlidXRlLCBlbnRyeSkge1xuXHRcdGlmIChlbnRyeS5jb25uZWN0ZWQpIHJldHVybjtcblx0XHRlbnRyeS5jb25uZWN0ZWQgPSB0cnVlO1xuXHRcdGludm9rZShhdHRyaWJ1dGUsIFwiY29ubmVjdGVkQ2FsbGJhY2tcIik7XG5cdH1cblx0ZnVuY3Rpb24gZGlzY29ubmVjdChhdHRyaWJ1dGUsIGVudHJ5KSB7XG5cdFx0aWYgKCFlbnRyeS5jb25uZWN0ZWQpIHJldHVybjtcblx0XHRlbnRyeS5jb25uZWN0ZWQgPSBmYWxzZTtcblx0XHRpbnZva2UoYXR0cmlidXRlLCBcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIpO1xuXHR9XG5cdGZ1bmN0aW9uIGFkb3B0KGF0dHJpYnV0ZSwgZW50cnksIGRvYykge1xuXHRcdGNvbnN0IG9sZCA9IGVudHJ5LmRvY3VtZW50O1xuXHRcdGlmIChvbGQgIT09IGRvYykge1xuXHRcdFx0ZW50cnkuZG9jdW1lbnQgPSBkb2M7XG5cdFx0XHRpbnZva2UoYXR0cmlidXRlLCBcImFkb3B0ZWRDYWxsYmFja1wiLCBbb2xkLCBkb2NdKTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdHJhY2soZWxlbWVudCwgYXR0cmlidXRlKSB7XG5cdFx0bGV0IG1hcCA9IHRyYWNrZWQuZ2V0KGVsZW1lbnQpO1xuXHRcdGlmICghbWFwKSB0cmFja2VkLnNldChlbGVtZW50LCBtYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcblx0XHRtYXAuc2V0KGF0dHJpYnV0ZS5sb2NhbE5hbWUsIGF0dHJpYnV0ZSk7XG5cdFx0aWYgKG9ic2VydmVkUm9vdHMuaGFzKGVsZW1lbnQuZ2V0Um9vdE5vZGUoKSkpIHtcblx0XHRcdGxvY2FsT2JzZXJ2ZXJzLmdldChlbGVtZW50KT8uZGlzY29ubmVjdCgpO1xuXHRcdFx0bG9jYWxPYnNlcnZlcnMuZGVsZXRlKGVsZW1lbnQpO1xuXHRcdH0gZWxzZSBpZiAoIWxvY2FsT2JzZXJ2ZXJzLmhhcyhlbGVtZW50KSkge1xuXHRcdFx0Y29uc3QgbG9jYWwgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihwcm9jZXNzUmVjb3Jkcyk7XG5cdFx0XHRsb2NhbC5vYnNlcnZlKGVsZW1lbnQsIHtcblx0XHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWVcblx0XHRcdH0pO1xuXHRcdFx0bG9jYWxPYnNlcnZlcnMuc2V0KGVsZW1lbnQsIGxvY2FsKTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdW50cmFjayhlbGVtZW50LCBhdHRyaWJ1dGUpIHtcblx0XHRjb25zdCBtYXAgPSB0cmFja2VkLmdldChlbGVtZW50KTtcblx0XHRpZiAobWFwPy5nZXQoYXR0cmlidXRlLmxvY2FsTmFtZSkgPT09IGF0dHJpYnV0ZSkgbWFwLmRlbGV0ZShhdHRyaWJ1dGUubG9jYWxOYW1lKTtcblx0XHRpZiAobWFwICYmICFtYXAuc2l6ZSkge1xuXHRcdFx0dHJhY2tlZC5kZWxldGUoZWxlbWVudCk7XG5cdFx0XHRsb2NhbE9ic2VydmVycy5nZXQoZWxlbWVudCk/LmRpc2Nvbm5lY3QoKTtcblx0XHRcdGxvY2FsT2JzZXJ2ZXJzLmRlbGV0ZShlbGVtZW50KTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcnVuQ29uc3RydWN0b3IoYXR0cmlidXRlLCBkZWZpbml0aW9uLCByZWdpc3RyeSwgY2hlY2spIHtcblx0XHRjb25zdCBDID0gZGVmaW5pdGlvbi5jb25zdHJ1Y3Rvcjtcblx0XHRjb25zdCBwcmV2aW91cyA9IGFjdGl2ZS5nZXQoQyk7XG5cdFx0ZGVmaW5pdGlvbi5zdGFjay5wdXNoKGF0dHJpYnV0ZSk7XG5cdFx0YWN0aXZlLnNldChDLCByZWdpc3RyeSk7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChuZXcgQygpICE9PSBhdHRyaWJ1dGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDb25zdHJ1Y3RvciByZXR1cm5lZCBhIGRpZmZlcmVudCBhdHRyaWJ1dGUuXCIpO1xuXHRcdFx0Y2hlY2s/LigpO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRpZiAocHJldmlvdXMpIGFjdGl2ZS5zZXQoQywgcHJldmlvdXMpO1xuXHRcdFx0ZWxzZSBhY3RpdmUuZGVsZXRlKEMpO1xuXHRcdFx0ZGVmaW5pdGlvbi5zdGFjay5wb3AoKTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gY29uc3RydWN0KGF0dHJpYnV0ZSwgZGVmaW5pdGlvbiwgcmVnaXN0cnkpIHtcblx0XHRjb25zdCB7IG93bmVyRG9jdW1lbnQsIGxvY2FsTmFtZSwgbmFtZXNwYWNlVVJJLCBwcmVmaXggfSA9IGF0dHJpYnV0ZTtcblx0XHRjb25zdCBlbnRyeSA9IHtcblx0XHRcdHN0YXRlOiBcImN1c3RvbVwiLFxuXHRcdFx0ZGVmaW5pdGlvbixcblx0XHRcdGNvbm5lY3RlZDogZmFsc2UsXG5cdFx0XHRkb2N1bWVudDogb3duZXJEb2N1bWVudFxuXHRcdH07XG5cdFx0ZW50cmllcy5zZXQoYXR0cmlidXRlLCBlbnRyeSk7XG5cdFx0dHJ5IHtcblx0XHRcdHJ1bkNvbnN0cnVjdG9yKGF0dHJpYnV0ZSwgZGVmaW5pdGlvbiwgcmVnaXN0cnksICgpID0+IHtcblx0XHRcdFx0aWYgKGF0dHJpYnV0ZS5vd25lckVsZW1lbnQgIT09IG51bGwgfHwgYXR0cmlidXRlLm93bmVyRG9jdW1lbnQgIT09IG93bmVyRG9jdW1lbnQgfHwgYXR0cmlidXRlLmxvY2FsTmFtZSAhPT0gbG9jYWxOYW1lIHx8IGF0dHJpYnV0ZS5uYW1lc3BhY2VVUkkgIT09IG5hbWVzcGFjZVVSSSB8fCBhdHRyaWJ1dGUucHJlZml4ICE9PSBwcmVmaXggfHwgYXR0cmlidXRlLnZhbHVlICE9PSBcIlwiKSB0aHJvdyBkb21FcnJvcihcIkFuIGF0dHJpYnV0ZSBjb25zdHJ1Y3RvciBtdXN0IGxlYXZlIHRoZSBBdHRyIHVuYXR0YWNoZWQgYW5kIGVtcHR5LlwiLCBcIk5vdFN1cHBvcnRlZEVycm9yXCIpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGVudHJ5LnN0YXRlID0gXCJmYWlsZWRcIjtcblx0XHRcdGVudHJ5LmRlZmluaXRpb24gPSBudWxsO1xuXHRcdFx0cmVwb3J0KGVycm9yKTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBncmFkZShhdHRyaWJ1dGUsIGRlZmluaXRpb24sIHJlZ2lzdHJ5LCB2YWx1ZSkge1xuXHRcdGlmIChlbnRyaWVzLmhhcyhhdHRyaWJ1dGUpIHx8ICFhdHRyaWJ1dGUub3duZXJFbGVtZW50KSByZXR1cm47XG5cdFx0Y29uc3QgZW50cnkgPSB7XG5cdFx0XHRzdGF0ZTogXCJwcmVjdXN0b21pemVkXCIsXG5cdFx0XHRkZWZpbml0aW9uLFxuXHRcdFx0Y29ubmVjdGVkOiBmYWxzZSxcblx0XHRcdGRvY3VtZW50OiBhdHRyaWJ1dGUub3duZXJFbGVtZW50Lm93bmVyRG9jdW1lbnRcblx0XHR9O1xuXHRcdGVudHJpZXMuc2V0KGF0dHJpYnV0ZSwgZW50cnkpO1xuXHRcdHRyeSB7XG5cdFx0XHRydW5Db25zdHJ1Y3RvcihhdHRyaWJ1dGUsIGRlZmluaXRpb24sIHJlZ2lzdHJ5KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ZW50cnkuc3RhdGUgPSBcImZhaWxlZFwiO1xuXHRcdFx0ZW50cnkuZGVmaW5pdGlvbiA9IG51bGw7XG5cdFx0XHRyZXBvcnQoZXJyb3IpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRlbnRyeS5zdGF0ZSA9IFwiY3VzdG9tXCI7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGF0dHJpYnV0ZS5vd25lckVsZW1lbnQ7XG5cdFx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdFx0dHJhY2soZWxlbWVudCwgYXR0cmlidXRlKTtcblx0XHRpbnZva2UoYXR0cmlidXRlLCBcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiLCBbbnVsbCwgdmFsdWVdKTtcblx0XHRpZiAoYXR0cmlidXRlLm93bmVyRWxlbWVudCA9PT0gZWxlbWVudCAmJiBlbGVtZW50LmlzQ29ubmVjdGVkKSBjb25uZWN0KGF0dHJpYnV0ZSwgZW50cnkpO1xuXHR9XG5cdGZ1bmN0aW9uIHRyeVVwZ3JhZGUoYXR0cmlidXRlLCB2YWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZSkge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBhdHRyaWJ1dGUub3duZXJFbGVtZW50O1xuXHRcdGlmICghZWxlbWVudCB8fCAhaXNIVE1MKGVsZW1lbnQpIHx8IGVudHJpZXMuaGFzKGF0dHJpYnV0ZSkpIHJldHVybjtcblx0XHRjb25zdCByZWdpc3RyeSA9IHJlZ2lzdHJ5T2YoZWxlbWVudCk7XG5cdFx0Y29uc3QgZGVmaW5pdGlvbiA9IGxvb2t1cChyZWdpc3RyeSwgYXR0cmlidXRlLm5hbWVzcGFjZVVSSSwgYXR0cmlidXRlLmxvY2FsTmFtZSk7XG5cdFx0aWYgKHJlZ2lzdHJ5ICYmIGRlZmluaXRpb24pIHVwZ3JhZGUoYXR0cmlidXRlLCBkZWZpbml0aW9uLCByZWdpc3RyeSwgdmFsdWUpO1xuXHR9XG5cdGNsYXNzIEJhdGNoIHtcblx0XHRoaXN0b3J5ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRwb3NpdGlvbiA9IDA7XG5cdFx0Y29uc3RydWN0b3IocmVjb3Jkcykge1xuXHRcdFx0cmVjb3Jkcy5mb3JFYWNoKChyZWNvcmQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdGlmIChyZWNvcmQudHlwZSAhPT0gXCJhdHRyaWJ1dGVzXCIgfHwgcmVjb3JkLmF0dHJpYnV0ZU5hbWVzcGFjZSAhPT0gbnVsbCB8fCAhcmVjb3JkLmF0dHJpYnV0ZU5hbWUgfHwgIWlzRWxlbWVudCQxKHJlY29yZC50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRcdGxldCBieU5hbWUgPSB0aGlzLmhpc3RvcnkuZ2V0KHJlY29yZC50YXJnZXQpO1xuXHRcdFx0XHRpZiAoIWJ5TmFtZSkgdGhpcy5oaXN0b3J5LnNldChyZWNvcmQudGFyZ2V0LCBieU5hbWUgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcblx0XHRcdFx0bGV0IGxpc3QgPSBieU5hbWUuZ2V0KHJlY29yZC5hdHRyaWJ1dGVOYW1lKTtcblx0XHRcdFx0aWYgKCFsaXN0KSBieU5hbWUuc2V0KHJlY29yZC5hdHRyaWJ1dGVOYW1lLCBsaXN0ID0gW10pO1xuXHRcdFx0XHRsaXN0LnB1c2goe1xuXHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdG9sZFZhbHVlOiByZWNvcmQub2xkVmFsdWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0bGF0ZXIoZWxlbWVudCwgbmFtZSkge1xuXHRcdFx0cmV0dXJuICh0aGlzLmhpc3RvcnkuZ2V0KGVsZW1lbnQpPy5nZXQobmFtZSkgPz8gW10pLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmRleCA+IHRoaXMucG9zaXRpb24pO1xuXHRcdH1cblx0XHR2YWx1ZUFmdGVyKGVsZW1lbnQsIG5hbWUpIHtcblx0XHRcdGNvbnN0IGxhdGVyID0gdGhpcy5sYXRlcihlbGVtZW50LCBuYW1lKTtcblx0XHRcdHJldHVybiBsYXRlci5sZW5ndGggPyBsYXRlclswXS5vbGRWYWx1ZSA6IGVsZW1lbnQuZ2V0QXR0cmlidXRlTlMobnVsbCwgbmFtZSk7XG5cdFx0fVxuXHRcdGFkZGVkTGF0ZXIoZWxlbWVudCwgbmFtZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMubGF0ZXIoZWxlbWVudCwgbmFtZSkuc29tZSgoaXRlbSkgPT4gaXRlbS5vbGRWYWx1ZSA9PT0gbnVsbCk7XG5cdFx0fVxuXHRcdHRyZWUocm9vdCkge1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzSW4ocm9vdCkpIHtcblx0XHRcdFx0Y29uc3Qgc2hhZG93ID0gc2hhZG93T2YoZWxlbWVudCk7XG5cdFx0XHRcdGlmIChzaGFkb3cgJiYgIW9ic2VydmVkUm9vdHMuaGFzKHNoYWRvdykpIG9ic2VydmVSb290KHNoYWRvdyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudChlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxlbWVudChlbGVtZW50KSB7XG5cdFx0XHRpZiAoIWlzSFRNTChlbGVtZW50KSkgcmV0dXJuO1xuXHRcdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgQXJyYXkuZnJvbShuYXRpdmVBdHRyaWJ1dGVzLmNhbGwoZWxlbWVudCkpKSB7XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSBhdHRyaWJ1dGUubG9jYWxOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlLm5hbWVzcGFjZVVSSSAhPT0gbnVsbCB8fCB0aGlzLmFkZGVkTGF0ZXIoZWxlbWVudCwgbmFtZSkpIGNvbnRpbnVlO1xuXHRcdFx0XHRjb25zdCBlbnRyeSA9IGVudHJpZXMuZ2V0KGF0dHJpYnV0ZSk7XG5cdFx0XHRcdGlmICghZW50cnkpIHtcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5pc0Nvbm5lY3RlZCkgdHJ5VXBncmFkZShhdHRyaWJ1dGUsIHRoaXMudmFsdWVBZnRlcihlbGVtZW50LCBuYW1lKSA/PyBhdHRyaWJ1dGUudmFsdWUpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbnRyeS5zdGF0ZSAhPT0gXCJjdXN0b21cIikgY29udGludWU7XG5cdFx0XHRcdGlmICh0cmFja2VkLmdldChlbGVtZW50KT8uZ2V0KG5hbWUpICE9PSBhdHRyaWJ1dGUpIHtcblx0XHRcdFx0XHR0cmFjayhlbGVtZW50LCBhdHRyaWJ1dGUpO1xuXHRcdFx0XHRcdGFkb3B0KGF0dHJpYnV0ZSwgZW50cnksIGVsZW1lbnQub3duZXJEb2N1bWVudCk7XG5cdFx0XHRcdFx0aW52b2tlKGF0dHJpYnV0ZSwgXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIiwgW251bGwsIHRoaXMudmFsdWVBZnRlcihlbGVtZW50LCBuYW1lKSA/PyBhdHRyaWJ1dGUudmFsdWVdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0cmFjayhlbGVtZW50LCBhdHRyaWJ1dGUpO1xuXHRcdFx0XHRcdGFkb3B0KGF0dHJpYnV0ZSwgZW50cnksIGVsZW1lbnQub3duZXJEb2N1bWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGF0dHJpYnV0ZS5vd25lckVsZW1lbnQgIT09IGVsZW1lbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAoZWxlbWVudC5pc0Nvbm5lY3RlZCkgY29ubmVjdChhdHRyaWJ1dGUsIGVudHJ5KTtcblx0XHRcdFx0ZWxzZSBkaXNjb25uZWN0KGF0dHJpYnV0ZSwgZW50cnkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRhdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSwgb2xkVmFsdWUpIHtcblx0XHRcdGlmICghaXNIVE1MKGVsZW1lbnQpKSByZXR1cm47XG5cdFx0XHRjb25zdCBwcmV2aW91cyA9IHRyYWNrZWQuZ2V0KGVsZW1lbnQpPy5nZXQobmFtZSk7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGVOb2RlTlMobnVsbCwgbmFtZSk7XG5cdFx0XHRpZiAocHJldmlvdXMgJiYgcHJldmlvdXMgPT09IGN1cnJlbnQpIHtcblx0XHRcdFx0aW52b2tlKHByZXZpb3VzLCBcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiLCBbb2xkVmFsdWUsIHRoaXMudmFsdWVBZnRlcihlbGVtZW50LCBuYW1lKV0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJldmlvdXMpIHtcblx0XHRcdFx0dW50cmFjayhlbGVtZW50LCBwcmV2aW91cyk7XG5cdFx0XHRcdGNvbnN0IGVudHJ5ID0gZW50cmllcy5nZXQocHJldmlvdXMpO1xuXHRcdFx0XHRpbnZva2UocHJldmlvdXMsIFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIsIFtvbGRWYWx1ZSwgbnVsbF0pO1xuXHRcdFx0XHRkaXNjb25uZWN0KHByZXZpb3VzLCBlbnRyeSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN1cnJlbnQgfHwgdGhpcy5hZGRlZExhdGVyKGVsZW1lbnQsIG5hbWUpKSByZXR1cm47XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVBZnRlcihlbGVtZW50LCBuYW1lKTtcblx0XHRcdGNvbnN0IGVudHJ5ID0gZW50cmllcy5nZXQoY3VycmVudCk7XG5cdFx0XHRpZiAoIWVudHJ5KSB7XG5cdFx0XHRcdHRyeVVwZ3JhZGUoY3VycmVudCwgdmFsdWUgPz8gY3VycmVudC52YWx1ZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChlbnRyeS5zdGF0ZSAhPT0gXCJjdXN0b21cIikgcmV0dXJuO1xuXHRcdFx0dHJhY2soZWxlbWVudCwgY3VycmVudCk7XG5cdFx0XHRhZG9wdChjdXJyZW50LCBlbnRyeSwgZWxlbWVudC5vd25lckRvY3VtZW50KTtcblx0XHRcdGludm9rZShjdXJyZW50LCBcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiLCBbbnVsbCwgdmFsdWVdKTtcblx0XHRcdGlmIChjdXJyZW50Lm93bmVyRWxlbWVudCA9PT0gZWxlbWVudCAmJiBlbGVtZW50LmlzQ29ubmVjdGVkKSBjb25uZWN0KGN1cnJlbnQsIGVudHJ5KTtcblx0XHR9XG5cdFx0cnVuKHJlY29yZHMpIHtcblx0XHRcdHJlY29yZHMuZm9yRWFjaCgocmVjb3JkLCBpbmRleCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBvc2l0aW9uID0gaW5kZXg7XG5cdFx0XHRcdGlmIChyZWNvcmQudHlwZSA9PT0gXCJjaGlsZExpc3RcIikge1xuXHRcdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiByZWNvcmQuYWRkZWROb2RlcykgdGhpcy50cmVlKG5vZGUpO1xuXHRcdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiByZWNvcmQucmVtb3ZlZE5vZGVzKSB0aGlzLnRyZWUobm9kZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lc3BhY2UgPT09IG51bGwgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgJiYgaXNFbGVtZW50JDEocmVjb3JkLnRhcmdldCkpIHRoaXMuYXR0cmlidXRlKHJlY29yZC50YXJnZXQsIHJlY29yZC5hdHRyaWJ1dGVOYW1lLCByZWNvcmQub2xkVmFsdWUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHByb2Nlc3NSZWNvcmRzKHJlY29yZHMpIHtcblx0XHRuZXcgQmF0Y2gocmVjb3JkcykucnVuKHJlY29yZHMpO1xuXHR9XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocHJvY2Vzc1JlY29yZHMpO1xuXHRmdW5jdGlvbiBvYnNlcnZlUm9vdChyb290KSB7XG5cdFx0aWYgKG9ic2VydmVkUm9vdHMuaGFzKHJvb3QpKSByZXR1cm47XG5cdFx0b2JzZXJ2ZWRSb290cy5hZGQocm9vdCk7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7XG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlXG5cdFx0fSk7XG5cdFx0aWYgKHJvb3Qubm9kZVR5cGUgPT09IDkgfHwgcm9vdC5ub2RlVHlwZSA9PT0gMTEgfHwgaXNFbGVtZW50JDEocm9vdCkpIGFkZFJvb3Qocm9vdCk7XG5cdH1cblx0ZnVuY3Rpb24gZmx1c2goKSB7XG5cdFx0Y29uc3QgcmVjb3JkcyA9IG9ic2VydmVyLnRha2VSZWNvcmRzKCk7XG5cdFx0aWYgKHJlY29yZHMubGVuZ3RoKSBwcm9jZXNzUmVjb3JkcyhyZWNvcmRzKTtcblx0fVxuXHRjbGFzcyBSZWdpc3RyeSB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRpbnRlcm5hbHMuc2V0KHRoaXMsIHtcblx0XHRcdFx0c2NvcGVkOiAhY29uc3RydWN0aW5nR2xvYmFsLFxuXHRcdFx0XHRieU5hbWU6IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksXG5cdFx0XHRcdGJ5Q29uc3RydWN0b3I6IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksXG5cdFx0XHRcdHJ1bm5pbmc6IGZhbHNlLFxuXHRcdFx0XHRwZW5kaW5nOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuXHRcdFx0XHRkb2N1bWVudHM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KClcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRkZWZpbmUobmFtZSwgY29uc3RydWN0b3IpIHtcblx0XHRcdGNvbnN0IHN0YXRlID0gc2VsZih0aGlzKTtcblx0XHRcdGlmICh0eXBlb2YgY29uc3RydWN0b3IgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNvbnN0cnVjdG9yIG11c3QgYmUgY29uc3RydWN0aWJsZVwiKTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdFJlZmxlY3QuY29uc3RydWN0KFN0cmluZywgW10sIGNvbnN0cnVjdG9yKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiY29uc3RydWN0b3IgbXVzdCBiZSBjb25zdHJ1Y3RpYmxlXCIpO1xuXHRcdFx0fVxuXHRcdFx0bmFtZSA9IFN0cmluZyhuYW1lKTtcblx0XHRcdGFzc2VydEF0dHJpYnV0ZU5hbWUobmFtZSk7XG5cdFx0XHRpZiAoc3RhdGUuYnlOYW1lLmhhcyhuYW1lKSB8fCBzdGF0ZS5ieUNvbnN0cnVjdG9yLmhhcyhjb25zdHJ1Y3RvcikpIHRocm93IGRvbUVycm9yKFwiTmFtZSBvciBjb25zdHJ1Y3RvciBhbHJlYWR5IHJlZ2lzdGVyZWQuXCIsIFwiTm90U3VwcG9ydGVkRXJyb3JcIik7XG5cdFx0XHRpZiAoc3RhdGUucnVubmluZykgdGhyb3cgZG9tRXJyb3IoXCJOZXN0ZWQgZGVmaW5lKCkgaXMgbm90IHN1cHBvcnRlZC5cIiwgXCJOb3RTdXBwb3J0ZWRFcnJvclwiKTtcblx0XHRcdHN0YXRlLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0Y29uc3QgY2FsbGJhY2tzID0ge307XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBwcm90b3R5cGUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cdFx0XHRcdGlmICghcHJvdG90eXBlIHx8IHR5cGVvZiBwcm90b3R5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHByb3RvdHlwZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY29uc3RydWN0b3IucHJvdG90eXBlIG11c3QgYmUgYW4gb2JqZWN0XCIpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IG5hbWUgb2YgY2FsbGJhY2tOYW1lcykge1xuXHRcdFx0XHRcdGNvbnN0IGNhbGxiYWNrID0gcHJvdG90eXBlW25hbWVdO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjayAhPT0gdm9pZCAwICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGAke25hbWV9IG11c3QgYmUgYSBmdW5jdGlvbmApO1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2tzW25hbWVdID0gY2FsbGJhY2s7XG5cdFx0XHRcdH1cblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdHN0YXRlLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGRlZmluaXRpb24gPSB7XG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdGNvbnN0cnVjdG9yLFxuXHRcdFx0XHRjYWxsYmFja3MsXG5cdFx0XHRcdHN0YWNrOiBbXVxuXHRcdFx0fTtcblx0XHRcdHN0YXRlLmJ5TmFtZS5zZXQobmFtZSwgZGVmaW5pdGlvbik7XG5cdFx0XHRzdGF0ZS5ieUNvbnN0cnVjdG9yLnNldChjb25zdHJ1Y3RvciwgZGVmaW5pdGlvbik7XG5cdFx0XHRmbHVzaCgpO1xuXHRcdFx0Zm9yIChjb25zdCBkb2Mgb2YgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW2RvY3VtZW50LCAuLi5zdGF0ZS5kb2N1bWVudHNdKSkgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzSW4oZG9jKSkge1xuXHRcdFx0XHRjb25zdCBzaGFkb3cgPSBzaGFkb3dPZihlbGVtZW50KTtcblx0XHRcdFx0aWYgKHNoYWRvdykgb2JzZXJ2ZVJvb3Qoc2hhZG93KTtcblx0XHRcdFx0Y29uc3QgYXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGVOb2RlTlMobnVsbCwgbmFtZSk7XG5cdFx0XHRcdGlmIChhdHRyaWJ1dGUgJiYgaXNIVE1MKGVsZW1lbnQpICYmIHJlZ2lzdHJ5T2YoZWxlbWVudCkgPT09IHRoaXMpIHVwZ3JhZGUoYXR0cmlidXRlLCBkZWZpbml0aW9uLCB0aGlzLCBhdHRyaWJ1dGUudmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGVuZGluZyA9IHN0YXRlLnBlbmRpbmcuZ2V0KG5hbWUpO1xuXHRcdFx0aWYgKHBlbmRpbmcpIHtcblx0XHRcdFx0c3RhdGUucGVuZGluZy5kZWxldGUobmFtZSk7XG5cdFx0XHRcdHBlbmRpbmcucmVzb2x2ZShjb25zdHJ1Y3Rvcik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGdldChuYW1lKSB7XG5cdFx0XHRyZXR1cm4gc2VsZih0aGlzKS5ieU5hbWUuZ2V0KFN0cmluZyhuYW1lKSk/LmNvbnN0cnVjdG9yO1xuXHRcdH1cblx0XHRnZXROYW1lKGNvbnN0cnVjdG9yKSB7XG5cdFx0XHRpZiAodHlwZW9mIGNvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjb25zdHJ1Y3RvciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG5cdFx0XHRyZXR1cm4gc2VsZih0aGlzKS5ieUNvbnN0cnVjdG9yLmdldChjb25zdHJ1Y3Rvcik/Lm5hbWUgPz8gbnVsbDtcblx0XHR9XG5cdFx0d2hlbkRlZmluZWQobmFtZSkge1xuXHRcdFx0Y29uc3Qgc3RhdGUgPSBzZWxmKHRoaXMpO1xuXHRcdFx0bmFtZSA9IFN0cmluZyhuYW1lKTtcblx0XHRcdGlmICghaXNWYWxpZEN1c3RvbUF0dHJpYnV0ZU5hbWUobmFtZSkpIHJldHVybiBQcm9taXNlLnJlamVjdChkb21FcnJvcihgSW52YWxpZCBjdXN0b20gYXR0cmlidXRlIG5hbWU6ICR7bmFtZX1gLCBcIlN5bnRheEVycm9yXCIpKTtcblx0XHRcdGNvbnN0IGRlZmluaXRpb24gPSBzdGF0ZS5ieU5hbWUuZ2V0KG5hbWUpO1xuXHRcdFx0aWYgKGRlZmluaXRpb24pIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVmaW5pdGlvbi5jb25zdHJ1Y3Rvcik7XG5cdFx0XHRsZXQgcGVuZGluZyA9IHN0YXRlLnBlbmRpbmcuZ2V0KG5hbWUpO1xuXHRcdFx0aWYgKCFwZW5kaW5nKSB7XG5cdFx0XHRcdGxldCByZXNvbHZlO1xuXHRcdFx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHIpID0+IHtcblx0XHRcdFx0XHRyZXNvbHZlID0gcjtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHN0YXRlLnBlbmRpbmcuc2V0KG5hbWUsIHBlbmRpbmcgPSB7XG5cdFx0XHRcdFx0cHJvbWlzZSxcblx0XHRcdFx0XHRyZXNvbHZlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHBlbmRpbmcucHJvbWlzZTtcblx0XHR9XG5cdFx0dXBncmFkZShyb290KSB7XG5cdFx0XHRzZWxmKHRoaXMpO1xuXHRcdFx0aWYgKCEocm9vdCBpbnN0YW5jZW9mIE5vZGUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwicm9vdCBtdXN0IGJlIGEgY3VycmVudC1yZWFsbSBOb2RlXCIpO1xuXHRcdFx0Zmx1c2goKTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50c0luKHJvb3QpKSB7XG5cdFx0XHRcdGlmIChyZWdpc3RyeU9mKGVsZW1lbnQpICE9PSB0aGlzKSBjb250aW51ZTtcblx0XHRcdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgQXJyYXkuZnJvbShuYXRpdmVBdHRyaWJ1dGVzLmNhbGwoZWxlbWVudCkpKSB0cnlVcGdyYWRlKGF0dHJpYnV0ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGluaXRpYWxpemUocm9vdCkge1xuXHRcdFx0Y29uc3Qgc3RhdGUgPSBzZWxmKHRoaXMpO1xuXHRcdFx0aWYgKCEocm9vdCBpbnN0YW5jZW9mIE5vZGUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwicm9vdCBtdXN0IGJlIGEgY3VycmVudC1yZWFsbSBOb2RlXCIpO1xuXHRcdFx0Zmx1c2goKTtcblx0XHRcdGNvbnN0IGlzRG9jdW1lbnQgPSByb290Lm5vZGVUeXBlID09PSA5O1xuXHRcdFx0aWYgKCFzdGF0ZS5zY29wZWQgJiYgKGlzRG9jdW1lbnQgfHwgcmVnaXN0cnlPZihub2RlRG9jdW1lbnQocm9vdCkpICE9PSB0aGlzKSkgdGhyb3cgZG9tRXJyb3IoXCJBIGdsb2JhbCByZWdpc3RyeSBjYW4gb25seSBpbml0aWFsaXplIGl0cyBvd24gZG9jdW1lbnQgbm9kZXMuXCIsIFwiTm90U3VwcG9ydGVkRXJyb3JcIik7XG5cdFx0XHRpZiAoKGlzRG9jdW1lbnQgfHwgaXNTaGFkb3cocm9vdCkpICYmICFyZWdpc3RyeU9mKHJvb3QpKSBzZXRSZWdpc3RyeShyb290LCB0aGlzKTtcblx0XHRcdGNvbnN0IGRvYyA9IG5vZGVEb2N1bWVudChyb290KTtcblx0XHRcdGlmIChzdGF0ZS5zY29wZWQpIHN0YXRlLmRvY3VtZW50cy5hZGQoZG9jKTtcblx0XHRcdG9ic2VydmVSb290KGRvYyk7XG5cdFx0XHRvYnNlcnZlUm9vdChyb290KTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaWdodEVsZW1lbnRzSW4ocm9vdCkpIHtcblx0XHRcdFx0aWYgKCFyZWdpc3RyeU9mKGVsZW1lbnQpKSBzZXRSZWdpc3RyeShlbGVtZW50LCB0aGlzKTtcblx0XHRcdFx0aWYgKHJlZ2lzdHJ5T2YoZWxlbWVudCkgIT09IHRoaXMpIGNvbnRpbnVlO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBBcnJheS5mcm9tKG5hdGl2ZUF0dHJpYnV0ZXMuY2FsbChlbGVtZW50KSkpIHRyeVVwZ3JhZGUoYXR0cmlidXRlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Zm9yIChjb25zdCBrZXkgb2YgW1xuXHRcdFwiZGVmaW5lXCIsXG5cdFx0XCJnZXRcIixcblx0XHRcImdldE5hbWVcIixcblx0XHRcIndoZW5EZWZpbmVkXCIsXG5cdFx0XCJ1cGdyYWRlXCIsXG5cdFx0XCJpbml0aWFsaXplXCJcblx0XSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZ2lzdHJ5LnByb3RvdHlwZSwga2V5LCB7XG5cdFx0Li4uT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSZWdpc3RyeS5wcm90b3R5cGUsIGtleSksXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZ2lzdHJ5LnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdFx0dmFsdWU6IFwiQ3VzdG9tQXR0cmlidXRlUmVnaXN0cnlcIixcblx0XHRjb25maWd1cmFibGU6IHRydWVcblx0fSk7XG5cdGNvbnN0cnVjdGluZ0dsb2JhbCA9IHRydWU7XG5cdGdsb2JhbFJlZ2lzdHJ5ID0gbmV3IFJlZ2lzdHJ5KCk7XG5cdGNvbnN0cnVjdGluZ0dsb2JhbCA9IGZhbHNlO1xuXHRyZWdpc3RyaWVzLnNldChkb2N1bWVudCwgZ2xvYmFsUmVnaXN0cnkpO1xuXHRmdW5jdGlvbiBBdHRyaWJ1dGUoKSB7XG5cdFx0Y29uc3QgQyA9IG5ldy50YXJnZXQ7XG5cdFx0aWYgKCFDIHx8IEMgPT09IEF0dHJpYnV0ZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgQXR0ciBjb25zdHJ1Y3RvclwiKTtcblx0XHRjb25zdCBkZWZpbml0aW9uID0gc2VsZihhY3RpdmUuZ2V0KEMpID8/IGdsb2JhbFJlZ2lzdHJ5KS5ieUNvbnN0cnVjdG9yLmdldChDKTtcblx0XHRpZiAoIWRlZmluaXRpb24pIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBpcyBub3QgYSBkZWZpbmVkIGN1c3RvbSBhdHRyaWJ1dGUuXCIpO1xuXHRcdGNvbnN0IHByb3RvdHlwZSA9IEMucHJvdG90eXBlID8/IE5hdGl2ZUF0dHIucHJvdG90eXBlO1xuXHRcdGNvbnN0IHN0YWNrID0gZGVmaW5pdGlvbi5zdGFjaztcblx0XHRpZiAoIXN0YWNrLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgYXR0cmlidXRlID0gbmF0aXZlQ3JlYXRlQXR0cmlidXRlLmNhbGwoZG9jdW1lbnQsIGRlZmluaXRpb24ubmFtZSk7XG5cdFx0XHRPYmplY3Quc2V0UHJvdG90eXBlT2YoYXR0cmlidXRlLCBwcm90b3R5cGUpO1xuXHRcdFx0ZW50cmllcy5zZXQoYXR0cmlidXRlLCB7XG5cdFx0XHRcdHN0YXRlOiBcImN1c3RvbVwiLFxuXHRcdFx0XHRkZWZpbml0aW9uLFxuXHRcdFx0XHRjb25uZWN0ZWQ6IGZhbHNlLFxuXHRcdFx0XHRkb2N1bWVudFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gYXR0cmlidXRlO1xuXHRcdH1cblx0XHRjb25zdCBhdHRyaWJ1dGUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblx0XHRpZiAoYXR0cmlidXRlID09PSBBTFJFQURZIHx8IHR5cGVvZiBhdHRyaWJ1dGUgPT09IFwic3ltYm9sXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBdHRyIGFscmVhZHkgY29uc3RydWN0ZWRcIik7XG5cdFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGF0dHJpYnV0ZSwgcHJvdG90eXBlKTtcblx0XHRzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9IEFMUkVBRFk7XG5cdFx0cmV0dXJuIGF0dHJpYnV0ZTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoQXR0cmlidXRlLCBcInByb3RvdHlwZVwiLCB7XG5cdFx0dmFsdWU6IE5hdGl2ZUF0dHIucHJvdG90eXBlLFxuXHRcdHdyaXRhYmxlOiBmYWxzZVxuXHR9KTtcblx0T2JqZWN0LnNldFByb3RvdHlwZU9mKEF0dHJpYnV0ZSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE5hdGl2ZUF0dHIpKTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KE5hdGl2ZUF0dHIucHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcblx0XHR2YWx1ZTogQXR0cmlidXRlLFxuXHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9KTtcblx0Z2xvYmFscy5BdHRyID0gQXR0cmlidXRlO1xuXHRnbG9iYWxzLkN1c3RvbUF0dHJpYnV0ZVJlZ2lzdHJ5ID0gUmVnaXN0cnk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBcImN1c3RvbUF0dHJpYnV0ZXNcIiwge1xuXHRcdGdldDogKCkgPT4gZ2xvYmFsUmVnaXN0cnksXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRjb25maWd1cmFibGU6IHRydWVcblx0fSk7XG5cdGZvciAoY29uc3QgcHJvdG90eXBlIG9mIFtcblx0XHRFbGVtZW50LnByb3RvdHlwZSxcblx0XHRTaGFkb3dSb290LnByb3RvdHlwZSxcblx0XHREb2N1bWVudC5wcm90b3R5cGVcblx0XSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgXCJjdXN0b21BdHRyaWJ1dGVSZWdpc3RyeVwiLCB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHJlZ2lzdHJ5T2YodGhpcyk7XG5cdFx0fSxcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9KTtcblx0ZnVuY3Rpb24gY3JlYXRlKGRvYywgYXR0cmlidXRlLCByZWdpc3RyeSkge1xuXHRcdGlmIChyZWdpc3RyeSA9PT0gdm9pZCAwKSByZWdpc3RyeSA9IHJlZ2lzdHJ5T2YoZG9jKTtcblx0XHRjb25zdCBkZWZpbml0aW9uID0gbG9va3VwKHJlZ2lzdHJ5LCBhdHRyaWJ1dGUubmFtZXNwYWNlVVJJLCBhdHRyaWJ1dGUubG9jYWxOYW1lKTtcblx0XHRpZiAocmVnaXN0cnkgJiYgZGVmaW5pdGlvbikgY29uc3RydWN0KGF0dHJpYnV0ZSwgZGVmaW5pdGlvbiwgcmVnaXN0cnkpO1xuXHRcdHJldHVybiBhdHRyaWJ1dGU7XG5cdH1cblx0ZG9jUHJvdG8uY3JlYXRlQXR0cmlidXRlID0gZnVuY3Rpb24obmFtZSwgb3B0aW9ucyA9IHt9KSB7XG5cdFx0Y29uc3QgcmVnaXN0cnkgPSByZWdpc3RyeU9wdGlvbihvcHRpb25zLCB0cnVlKTtcblx0XHRjaGVja1JlZ2lzdHJ5KHJlZ2lzdHJ5LCB0aGlzKTtcblx0XHRyZXR1cm4gY3JlYXRlKHRoaXMsIG5hdGl2ZUNyZWF0ZUF0dHJpYnV0ZS5jYWxsKHRoaXMsIG5hbWUpLCByZWdpc3RyeSk7XG5cdH07XG5cdGRvY1Byb3RvLmNyZWF0ZUF0dHJpYnV0ZU5TID0gZnVuY3Rpb24obmFtZXNwYWNlLCBuYW1lLCBvcHRpb25zID0ge30pIHtcblx0XHRjb25zdCByZWdpc3RyeSA9IHJlZ2lzdHJ5T3B0aW9uKG9wdGlvbnMsIHRydWUpO1xuXHRcdGNoZWNrUmVnaXN0cnkocmVnaXN0cnksIHRoaXMpO1xuXHRcdHJldHVybiBjcmVhdGUodGhpcywgbmF0aXZlQ3JlYXRlQXR0cmlidXRlTlMuY2FsbCh0aGlzLCBuYW1lc3BhY2UsIG5hbWUpLCByZWdpc3RyeSk7XG5cdH07XG5cdGRvY1Byb3RvLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihuYW1lLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgcmVnaXN0cnkgPSByZWdpc3RyeU9wdGlvbihvcHRpb25zLCB0cnVlKTtcblx0XHRjaGVja1JlZ2lzdHJ5KHJlZ2lzdHJ5LCB0aGlzKTtcblx0XHRjb25zdCBlbGVtZW50ID0gbmF0aXZlQ3JlYXRlRWxlbWVudC5jYWxsKHRoaXMsIG5hbWUsIG9wdGlvbnMpO1xuXHRcdHNldFJlZ2lzdHJ5KGVsZW1lbnQsIHJlZ2lzdHJ5ID09PSB2b2lkIDAgPyByZWdpc3RyeU9mKHRoaXMpIDogcmVnaXN0cnkpO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9O1xuXHRkb2NQcm90by5jcmVhdGVFbGVtZW50TlMgPSBmdW5jdGlvbihuYW1lc3BhY2UsIG5hbWUsIG9wdGlvbnMpIHtcblx0XHRjb25zdCByZWdpc3RyeSA9IHJlZ2lzdHJ5T3B0aW9uKG9wdGlvbnMsIHRydWUpO1xuXHRcdGNoZWNrUmVnaXN0cnkocmVnaXN0cnksIHRoaXMpO1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBuYXRpdmVDcmVhdGVFbGVtZW50TlMuY2FsbCh0aGlzLCBuYW1lc3BhY2UsIG5hbWUsIG9wdGlvbnMpO1xuXHRcdHNldFJlZ2lzdHJ5KGVsZW1lbnQsIHJlZ2lzdHJ5ID09PSB2b2lkIDAgPyByZWdpc3RyeU9mKHRoaXMpIDogcmVnaXN0cnkpO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9O1xuXHRkb2NQcm90by5pbXBvcnROb2RlID0gZnVuY3Rpb24obm9kZSwgb3B0aW9ucyA9IGZhbHNlKSB7XG5cdFx0Y29uc3QgcmVnaXN0cnkgPSByZWdpc3RyeU9wdGlvbihvcHRpb25zLCBmYWxzZSk7XG5cdFx0Y2hlY2tSZWdpc3RyeShyZWdpc3RyeSwgdGhpcyk7XG5cdFx0Y29uc3QgZGVlcCA9IHR5cGVvZiBvcHRpb25zID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMgOiBCb29sZWFuKG9wdGlvbnMuZGVlcCk7XG5cdFx0Y29uc3QgY29weSA9IG5hdGl2ZUltcG9ydE5vZGUuY2FsbCh0aGlzLCBub2RlLCBkZWVwKTtcblx0XHRjb25zdCBmYWxsYmFjayA9IHJlZ2lzdHJ5ID8/IHJlZ2lzdHJ5T2YodGhpcyk7XG5cdFx0Y29uc3QgZ2xvYmFsID0gZ2xvYmFsT2YocmVnaXN0cnlPZih0aGlzKSk7XG5cdFx0Y29uc3Qgc291cmNlcyA9IFsuLi5saWdodEVsZW1lbnRzSW4obm9kZSldO1xuXHRcdFsuLi5saWdodEVsZW1lbnRzSW4oY29weSldLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcblx0XHRcdGNvbnN0IGNob3NlbiA9IHNvdXJjZXNbaV0gJiYgcmVnaXN0cnlPZihzb3VyY2VzW2ldKSB8fCBmYWxsYmFjaztcblx0XHRcdHNldFJlZ2lzdHJ5KGVsZW1lbnQsIGNob3NlbiAmJiAhc2VsZihjaG9zZW4pLnNjb3BlZCA/IGdsb2JhbCA6IGNob3Nlbik7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGNvcHk7XG5cdH07XG5cdGVsUHJvdG8uYXR0YWNoU2hhZG93ID0gZnVuY3Rpb24oaW5pdCkge1xuXHRcdGNvbnN0IHJlZ2lzdHJ5ID0gcmVnaXN0cnlPcHRpb24oaW5pdCwgdHJ1ZSk7XG5cdFx0Y2hlY2tSZWdpc3RyeShyZWdpc3RyeSwgdGhpcy5vd25lckRvY3VtZW50KTtcblx0XHRjb25zdCBzaGFkb3cgPSBuYXRpdmVBdHRhY2hTaGFkb3cuY2FsbCh0aGlzLCBpbml0KTtcblx0XHRzZXRSZWdpc3RyeShzaGFkb3csIHJlZ2lzdHJ5ID09PSB2b2lkIDAgPyByZWdpc3RyeU9mKHRoaXMub3duZXJEb2N1bWVudCkgOiByZWdpc3RyeSk7XG5cdFx0aWYgKHNoYWRvdy5tb2RlID09PSBcImNsb3NlZFwiKSBlbmdpbmUuY2xvc2VkU2hhZG93cy5zZXQodGhpcywgc2hhZG93KTtcblx0XHRvYnNlcnZlUm9vdChzaGFkb3cpO1xuXHRcdHJldHVybiBzaGFkb3c7XG5cdH07XG5cdGZvciAoY29uc3QgcHJvdG90eXBlIG9mIFtcblx0XHRFbGVtZW50LnByb3RvdHlwZSxcblx0XHREb2N1bWVudC5wcm90b3R5cGUsXG5cdFx0RG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGVcblx0XSkge1xuXHRcdGNvbnN0IGR5bmFtaWMgPSBwcm90b3R5cGU7XG5cdFx0Y29uc3QgbmF0aXZlID0gZHluYW1pYy5tb3ZlQmVmb3JlO1xuXHRcdGlmICh0eXBlb2YgbmF0aXZlICE9PSBcImZ1bmN0aW9uXCIpIGNvbnRpbnVlO1xuXHRcdGR5bmFtaWMubW92ZUJlZm9yZSA9IGZ1bmN0aW9uKG5vZGUsIGNoaWxkKSB7XG5cdFx0XHRjb25zdCBjb25uZWN0ZWRCZWZvcmUgPSBub2RlLmlzQ29ubmVjdGVkO1xuXHRcdFx0Y29uc3Qgb2xkRG9jdW1lbnQgPSBub2RlRG9jdW1lbnQobm9kZSk7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBuYXRpdmUuY2FsbCh0aGlzLCBub2RlLCBjaGlsZCk7XG5cdFx0XHRpZiAoY29ubmVjdGVkQmVmb3JlICYmIG5vZGUuaXNDb25uZWN0ZWQgJiYgb2xkRG9jdW1lbnQgPT09IG5vZGVEb2N1bWVudChub2RlKSkgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzSW4obm9kZSkpIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIEFycmF5LmZyb20obmF0aXZlQXR0cmlidXRlcy5jYWxsKGVsZW1lbnQpKSkge1xuXHRcdFx0XHRjb25zdCBlbnRyeSA9IGVudHJpZXMuZ2V0KGF0dHJpYnV0ZSk7XG5cdFx0XHRcdGlmIChlbnRyeT8uc3RhdGUgPT09IFwiY3VzdG9tXCIgJiYgZW50cnkuY29ubmVjdGVkKSBpbnZva2UoYXR0cmlidXRlLCBcImNvbm5lY3RlZE1vdmVDYWxsYmFja1wiKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0fVxuXHRmdW5jdGlvbiBjaGVja0F0dGFjaGFibGUoZWxlbWVudCwgYXR0cmlidXRlKSB7XG5cdFx0aWYgKGVudHJpZXMuZ2V0KGF0dHJpYnV0ZSk/LmRlZmluaXRpb24gJiYgIWlzSFRNTChlbGVtZW50KSkgdGhyb3cgZG9tRXJyb3IoXCJDdXN0b20gYXR0cmlidXRlcyBhcmUgc3VwcG9ydGVkIG9ubHkgb24gSFRNTCBlbGVtZW50cy5cIiwgXCJOb3RTdXBwb3J0ZWRFcnJvclwiKTtcblx0fVxuXHRmdW5jdGlvbiBhdHRhY2hlZChlbGVtZW50LCBhdHRyaWJ1dGUsIG9sZCkge1xuXHRcdGlmIChvbGQgPT09IGF0dHJpYnV0ZSB8fCB0cmFja2VkLmhhcyhlbGVtZW50KSB8fCBvYnNlcnZlZFJvb3RzLmhhcyhlbGVtZW50LmdldFJvb3ROb2RlKCkpKSByZXR1cm47XG5cdFx0cHJvY2Vzc1JlY29yZHMoW3tcblx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0dGFyZ2V0OiBlbGVtZW50LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLmxvY2FsTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogYXR0cmlidXRlLm5hbWVzcGFjZVVSSSxcblx0XHRcdG9sZFZhbHVlOiBvbGQ/LnZhbHVlID8/IG51bGxcblx0XHR9XSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCBcImF0dHJpYnV0ZXNcIiwge1xuXHRcdC4uLmF0dHJpYnV0ZURlc2NyaXB0b3IsXG5cdFx0Z2V0KCkge1xuXHRcdFx0Y29uc3QgbWFwID0gbmF0aXZlQXR0cmlidXRlcy5jYWxsKHRoaXMpO1xuXHRcdFx0YXR0cmlidXRlTWFwcy5zZXQobWFwLCB0aGlzKTtcblx0XHRcdHJldHVybiBtYXA7XG5cdFx0fVxuXHR9KTtcblx0Zm9yIChjb25zdCBuYW1lIG9mIFtcInNldEF0dHJpYnV0ZU5vZGVcIiwgXCJzZXRBdHRyaWJ1dGVOb2RlTlNcIl0pIHtcblx0XHRjb25zdCBuYXRpdmUgPSBlbFByb3RvW25hbWVdO1xuXHRcdGVsUHJvdG9bbmFtZV0gPSBmdW5jdGlvbihhdHRyaWJ1dGUpIHtcblx0XHRcdGNoZWNrQXR0YWNoYWJsZSh0aGlzLCBhdHRyaWJ1dGUpO1xuXHRcdFx0Y29uc3Qgb2xkID0gbmF0aXZlLmNhbGwodGhpcywgYXR0cmlidXRlKTtcblx0XHRcdGF0dGFjaGVkKHRoaXMsIGF0dHJpYnV0ZSwgb2xkKTtcblx0XHRcdHJldHVybiBvbGQ7XG5cdFx0fTtcblx0fVxuXHRjb25zdCBtYXBQcm90byA9IE5hbWVkTm9kZU1hcC5wcm90b3R5cGU7XG5cdGZvciAoY29uc3QgbmFtZSBvZiBbXCJzZXROYW1lZEl0ZW1cIiwgXCJzZXROYW1lZEl0ZW1OU1wiXSkge1xuXHRcdGNvbnN0IG5hdGl2ZSA9IG1hcFByb3RvW25hbWVdO1xuXHRcdG1hcFByb3RvW25hbWVdID0gZnVuY3Rpb24oYXR0cmlidXRlKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gYXR0cmlidXRlTWFwcy5nZXQodGhpcyk7XG5cdFx0XHRpZiAoZWxlbWVudCkgY2hlY2tBdHRhY2hhYmxlKGVsZW1lbnQsIGF0dHJpYnV0ZSk7XG5cdFx0XHRjb25zdCBvbGQgPSBuYXRpdmUuY2FsbCh0aGlzLCBhdHRyaWJ1dGUpO1xuXHRcdFx0aWYgKGVsZW1lbnQpIGF0dGFjaGVkKGVsZW1lbnQsIGF0dHJpYnV0ZSwgb2xkKTtcblx0XHRcdHJldHVybiBvbGQ7XG5cdFx0fTtcblx0fVxuXHRjb25zdCBydW50aW1lID0ge1xuXHRcdHJlZ2lzdHJ5OiBnbG9iYWxSZWdpc3RyeSxcblx0XHRSZWdpc3RyeSxcblx0XHRvYnNlcnZlUm9vdCxcblx0XHRmbHVzaFxuXHR9O1xuXHRwb2x5ZmlsbFN0YXRlLnJ1bnRpbWUgPSBydW50aW1lO1xuXHRvYnNlcnZlUm9vdChkb2N1bWVudCk7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50c0luKGRvY3VtZW50KSkge1xuXHRcdGNvbnN0IHNoYWRvdyA9IHNoYWRvd09mKGVsZW1lbnQpO1xuXHRcdGlmIChzaGFkb3cpIG9ic2VydmVSb290KHNoYWRvdyk7XG5cdH1cblx0cmV0dXJuIHJ1bnRpbWU7XG59XG52YXIgYnJpZGdlcyA9IHNoYXJlZChcImRvbS50c0BtaXhpbnMyLmJyaWRnZXNcIiwgKCkgPT4gKHtcblx0YnlSZWdpc3RyeTogLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksXG5cdGZyb21BdHRyaWJ1dGU6IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpXG59KSk7XG5mdW5jdGlvbiBtaXhpblRvQ3VzdG9tQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG1peGluLCBvcHRpb25zID0ge30pIHtcblx0YXNzZXJ0QXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKTtcblx0Y29uc3QgcmVnaXN0cnkgPSBvcHRpb25zLnJlZ2lzdHJ5ID8/IGdldEN1c3RvbUF0dHJpYnV0ZXMoKTtcblx0bGV0IGNhY2hlID0gYnJpZGdlcy5ieVJlZ2lzdHJ5LmdldChyZWdpc3RyeSk7XG5cdGlmICghY2FjaGUpIGJyaWRnZXMuYnlSZWdpc3RyeS5zZXQocmVnaXN0cnksIGNhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG5cdGNvbnN0IHByZXZpb3VzID0gY2FjaGUuZ2V0KGF0dHJpYnV0ZU5hbWUpO1xuXHRpZiAocHJldmlvdXMpIHtcblx0XHRpZiAocHJldmlvdXMubWl4aW4gIT09IG1peGluKSB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBicmlkZ2UgY29uZmxpY3Q6ICR7YXR0cmlidXRlTmFtZX1gKTtcblx0XHRyZXR1cm4gcHJldmlvdXMuY29uc3RydWN0b3I7XG5cdH1cblx0aWYgKHJlZ2lzdHJ5LmdldChhdHRyaWJ1dGVOYW1lKSkgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgYWxyZWFkeSBkZWZpbmVkOiAke2F0dHJpYnV0ZU5hbWV9YCk7XG5cdGNvbnN0IEJhc2UgPSBnZXRDdXN0b21BdHRyaWJ1dGVCYXNlKCk7XG5cdGNvbnN0IG93bmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRmdW5jdGlvbiBvd25lcihhdHRyaWJ1dGUpIHtcblx0XHRjb25zdCBwcmV2aW91c093bmVyID0gb3duZXJzLmdldChhdHRyaWJ1dGUpPy5kZXJlZigpO1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBhdHRyaWJ1dGUub3duZXJFbGVtZW50O1xuXHRcdGlmIChjdXJyZW50KSB7XG5cdFx0XHRpZiAocHJldmlvdXNPd25lciAmJiBwcmV2aW91c093bmVyICE9PSBjdXJyZW50KSByZWxlYXNlKHByZXZpb3VzT3duZXIsIG1peGluLCBhdHRyaWJ1dGUpO1xuXHRcdFx0b3duZXJzLnNldChhdHRyaWJ1dGUsIG5ldyBXZWFrUmVmKGN1cnJlbnQpKTtcblx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gcHJldmlvdXNPd25lcjtcblx0fVxuXHRjbGFzcyBNaXhpbkF0dHJpYnV0ZSBleHRlbmRzIEJhc2Uge1xuXHRcdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IG93bmVyKHRoaXMpO1xuXHRcdFx0aWYgKGVsZW1lbnQgJiYgdGhpcy5vd25lckVsZW1lbnQgPT09IGVsZW1lbnQpIGFjcXVpcmUoZWxlbWVudCwgbWl4aW4sIHRoaXMpO1xuXHRcdH1cblx0XHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBvd25lcih0aGlzKTtcblx0XHRcdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRcdFx0aWYgKCF0aGlzLm93bmVyRWxlbWVudCkgcmVsZWFzZShlbGVtZW50LCBtaXhpbiwgdGhpcyk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgYmluZGluZyA9IGVuZ2luZS5iaW5kaW5ncy5nZXQoZWxlbWVudCk/LmdldChtaXhpbik7XG5cdFx0XHRcdGlmIChiaW5kaW5nKSByZWNvbmNpbGVCaW5kaW5nKGVsZW1lbnQsIG1peGluLCBiaW5kaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IG93bmVyKHRoaXMpO1xuXHRcdFx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwgJiYgdGhpcy5vd25lckVsZW1lbnQgPT09IGVsZW1lbnQpIGFjcXVpcmUoZWxlbWVudCwgbWl4aW4sIHRoaXMpO1xuXHRcdFx0Y2FsbE1peGluKGVsZW1lbnQsIG1peGluLCBcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiLCB0aGlzLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuXHRcdFx0aWYgKG5ld1ZhbHVlID09PSBudWxsKSByZWxlYXNlKGVsZW1lbnQsIG1peGluLCB0aGlzKTtcblx0XHR9XG5cdFx0YWRvcHRlZENhbGxiYWNrKF9vbGREb2N1bWVudCwgX25ld0RvY3VtZW50KSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gb3duZXIodGhpcyk7XG5cdFx0XHRjb25zdCBiaW5kaW5nID0gZWxlbWVudCAmJiBlbmdpbmUuYmluZGluZ3MuZ2V0KGVsZW1lbnQpPy5nZXQobWl4aW4pO1xuXHRcdFx0aWYgKGVsZW1lbnQgJiYgYmluZGluZykgcmVjb25jaWxlQmluZGluZyhlbGVtZW50LCBtaXhpbiwgYmluZGluZyk7XG5cdFx0fVxuXHRcdGNvbm5lY3RlZE1vdmVDYWxsYmFjaygpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBvd25lcih0aGlzKTtcblx0XHRcdGlmIChlbGVtZW50KSBjYWxsTWl4aW4oZWxlbWVudCwgbWl4aW4sIFwiY29ubmVjdGVkTW92ZUNhbGxiYWNrXCIsIHRoaXMpO1xuXHRcdH1cblx0fVxuXHRyZWdpc3RyeS5kZWZpbmUoYXR0cmlidXRlTmFtZSwgTWl4aW5BdHRyaWJ1dGUpO1xuXHRjYWNoZS5zZXQoYXR0cmlidXRlTmFtZSwge1xuXHRcdG1peGluLFxuXHRcdGNvbnN0cnVjdG9yOiBNaXhpbkF0dHJpYnV0ZVxuXHR9KTtcblx0cmV0dXJuIE1peGluQXR0cmlidXRlO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJDcm9zc01peGluKG5hbWUsIG1peGluLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3QgYXR0cmlidXRlTmFtZSA9IG9wdGlvbnMuYXR0cmlidXRlTmFtZSA/PyBuYW1lO1xuXHRhc3NlcnRBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpO1xuXHRjb25zdCByZWdpc3RyeSA9IG9wdGlvbnMucmVnaXN0cnkgPz8gZ2V0Q3VzdG9tQXR0cmlidXRlcygpO1xuXHRjb25zdCBjYWNoZWQgPSBicmlkZ2VzLmJ5UmVnaXN0cnkuZ2V0KHJlZ2lzdHJ5KT8uZ2V0KGF0dHJpYnV0ZU5hbWUpO1xuXHRpZiAocmVnaXN0cnkuZ2V0KGF0dHJpYnV0ZU5hbWUpICYmICghY2FjaGVkIHx8IGNhY2hlZC5taXhpbiAhPT0gbWl4aW4pKSB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBhbHJlYWR5IGRlZmluZWQ6ICR7YXR0cmlidXRlTmFtZX1gKTtcblx0cmVnaXN0ZXJNaXhpbihuYW1lLCBtaXhpbik7XG5cdHJldHVybiB7XG5cdFx0bWl4aW4sXG5cdFx0YXR0cmlidXRlOiBtaXhpblRvQ3VzdG9tQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG1peGluLCB7IHJlZ2lzdHJ5IH0pXG5cdH07XG59XG5mdW5jdGlvbiBjdXN0b21BdHRyaWJ1dGVUb01peGluKG5hbWUsIGNvbnN0cnVjdG9yLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3QgYXR0cmlidXRlTmFtZSA9IG9wdGlvbnMuYXR0cmlidXRlTmFtZSA/PyBuYW1lO1xuXHRhc3NlcnRBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpO1xuXHRjb25zdCByZWdpc3RyeSA9IG9wdGlvbnMucmVnaXN0cnkgPz8gZ2V0Q3VzdG9tQXR0cmlidXRlcygpO1xuXHRsZXQgY2FjaGUgPSBicmlkZ2VzLmZyb21BdHRyaWJ1dGUuZ2V0KHJlZ2lzdHJ5KTtcblx0aWYgKCFjYWNoZSkgYnJpZGdlcy5mcm9tQXR0cmlidXRlLnNldChyZWdpc3RyeSwgY2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcblx0Y29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KGF0dHJpYnV0ZU5hbWUpO1xuXHRpZiAoY2FjaGVkKSB7XG5cdFx0aWYgKGNhY2hlZC5jb25zdHJ1Y3RvciAhPT0gY29uc3RydWN0b3IpIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIGFkYXB0ZXIgY29uZmxpY3Q6ICR7YXR0cmlidXRlTmFtZX1gKTtcblx0XHRpZiAobWl4aW5OYW1lc3BhY2UuZ2V0KGNhY2hlZD8ubWl4aW4pICE9PSBuYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJBZGFwdGVyIGFscmVhZHkgaGFzIGFub3RoZXIgbWl4aW4gbmFtZS5cIik7XG5cdFx0cmV0dXJuIGNhY2hlZD8ubWl4aW47XG5cdH1cblx0Y29uc3QgZXhpc3RpbmcgPSByZWdpc3RyeS5nZXQoYXR0cmlidXRlTmFtZSk7XG5cdGlmIChleGlzdGluZyAmJiBleGlzdGluZyAhPT0gY29uc3RydWN0b3IpIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIGFscmVhZHkgZGVmaW5lZDogJHthdHRyaWJ1dGVOYW1lfWApO1xuXHRjb25zdCBtaXhpbiA9IHsgY29ubmVjdChyZWYpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gcmVmLmRlcmVmKCk7XG5cdFx0aWYgKCFlbGVtZW50IHx8ICFpc0hUTUwoZWxlbWVudCkpIHJldHVybjtcblx0XHRpZiAoZWxlbWVudC5jdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSAhPT0gcmVnaXN0cnkpIHRocm93IG5ldyBFcnJvcihgVGhlIGVsZW1lbnQncyByZWdpc3RyeSBkb2VzIG5vdCBvd24gJHthdHRyaWJ1dGVOYW1lfTsgaW5pdGlhbGl6ZSBpdHMgc2NvcGUgZmlyc3QuYCk7XG5cdFx0cmVnaXN0cnkudXBncmFkZShlbGVtZW50KTtcblx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGVOUyhudWxsLCBhdHRyaWJ1dGVOYW1lKSkgcmV0dXJuO1xuXHRcdGNvbnN0IGF0dHJpYnV0ZSA9IGNyZWF0ZUN1c3RvbUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB7XG5cdFx0XHRkb2N1bWVudDogZWxlbWVudC5vd25lckRvY3VtZW50LFxuXHRcdFx0cmVnaXN0cnlcblx0XHR9KTtcblx0XHRhdHRyaWJ1dGUudmFsdWUgPSB0eXBlb2Ygb3B0aW9ucy52YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gb3B0aW9ucy52YWx1ZShlbGVtZW50KSA6IG9wdGlvbnMudmFsdWUgPz8gXCJcIjtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZU5vZGUoYXR0cmlidXRlKTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0aWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlTm9kZU5TKG51bGwsIGF0dHJpYnV0ZU5hbWUpID09PSBhdHRyaWJ1dGUpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlTm9kZShhdHRyaWJ1dGUpO1xuXHRcdH07XG5cdH0gfTtcblx0Y29uc3QgbmFtZWQgPSBtaXhpblJlZ2lzdHJ5LmdldChuYW1lLnRyaW0oKSk7XG5cdGlmIChuYW1lZCAmJiBuYW1lZCAhPT0gbWl4aW4pIHRocm93IG5ldyBFcnJvcihgTWl4aW4gbmFtZSBhbHJlYWR5IHJlZ2lzdGVyZWQ6ICR7bmFtZX1gKTtcblx0aWYgKCFuYW1lLnRyaW0oKSB8fCAvXFxzLy50ZXN0KG5hbWUudHJpbSgpKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgbWl4aW4gbmFtZS5cIik7XG5cdGlmICghZXhpc3RpbmcpIHJlZ2lzdHJ5LmRlZmluZShhdHRyaWJ1dGVOYW1lLCBjb25zdHJ1Y3Rvcik7XG5cdHJlZ2lzdGVyTWl4aW4obmFtZSwgbWl4aW4pO1xuXHRjYWNoZS5zZXQoYXR0cmlidXRlTmFtZSwge1xuXHRcdGNvbnN0cnVjdG9yLFxuXHRcdG1peGluXG5cdH0pO1xuXHRyZXR1cm4gbWl4aW47XG59XG5mdW5jdGlvbiBtZXJnZU1peGlucyhuYW1lLCAuLi5pbnB1dCkge1xuXHRjb25zdCBwYXJ0cyA9IFsuLi5uZXcgU2V0KGlucHV0KV07XG5cdGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykgaWYgKCFwYXJ0IHx8IHR5cGVvZiBwYXJ0ICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBwYXJ0ICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJtZXJnZU1peGlucyBleHBlY3RzIG1peGluIG9iamVjdHMuXCIpO1xuXHRjb25zdCBsZWFzZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0Y29uc3QgbWVyZ2VkID0ge1xuXHRcdGNvbm5lY3QocmVmKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gcmVmLmRlcmVmKCk7XG5cdFx0XHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0XHRcdGNvbnN0IGxlYXNlID0ge307XG5cdFx0XHRsZWFzZXMuc2V0KGVsZW1lbnQsIGxlYXNlKTtcblx0XHRcdGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykgYWNxdWlyZShlbGVtZW50LCBwYXJ0LCBsZWFzZSk7XG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRmb3IgKGxldCBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHJlbGVhc2UoZWxlbWVudCwgcGFydHNbaV0sIGxlYXNlKTtcblx0XHRcdFx0aWYgKGxlYXNlcy5nZXQoZWxlbWVudCkgPT09IGxlYXNlKSBsZWFzZXMuZGVsZXRlKGVsZW1lbnQpO1xuXHRcdFx0fTtcblx0XHR9LFxuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhyZWYsIF9zZWxmLCByZWxhdGVkLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSByZWYuZGVyZWYoKTtcblx0XHRcdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRcdFx0Zm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSBjYWxsTWl4aW4oZWxlbWVudCwgcGFydCwgXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIiwgcmVsYXRlZC5hdHRyaWJ1dGUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG5cdFx0fSxcblx0XHRjb25uZWN0ZWRNb3ZlQ2FsbGJhY2socmVmLCBfc2VsZiwgcmVsYXRlZCkge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHJlZi5kZXJlZigpO1xuXHRcdFx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdFx0XHRmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIGNhbGxNaXhpbihlbGVtZW50LCBwYXJ0LCBcImNvbm5lY3RlZE1vdmVDYWxsYmFja1wiLCByZWxhdGVkLmF0dHJpYnV0ZSk7XG5cdFx0fVxuXHR9O1xuXHRpZiAobmFtZSkgcmVnaXN0ZXJNaXhpbihuYW1lLCBtZXJnZWQpO1xuXHRyZXR1cm4gbWVyZ2VkO1xufVxuZnVuY3Rpb24gZmx1c2hNaXhpbnMoKSB7XG5cdGlmICghaGFzRE9NKCkpIHJldHVybjtcblx0cG9seWZpbGxTdGF0ZS5ydW50aW1lPy5mbHVzaCgpO1xuXHRmb3IgKGNvbnN0IHsgb2JzZXJ2ZXIgfSBvZiBlbmdpbmUud2F0Y2hlcy52YWx1ZXMoKSkgaGFuZGxlUm9vdFJlY29yZHMob2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG5cdGRyYWluUGVuZGluZygpO1xuXHRmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50c0luKHJvb3QpKSB1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCk7XG5cdHBvbHlmaWxsU3RhdGUucnVudGltZT8uZmx1c2goKTtcblx0ZHJhaW5QZW5kaW5nKCk7XG59XG5hc3luYyBmdW5jdGlvbiBzZXR0bGVNaXhpbnMoKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0YXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0Zmx1c2hNaXhpbnMoKTtcblx0fVxufVxuaWYgKGhhc0RPTSgpKSB7XG5cdGFwcGx5KCk7XG5cdGFkZFJvb3QoZG9jdW1lbnQpO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vSGFuZGxlci50c1xudmFyIGhhbmRsZUhpZGRlbiA9IChlbGVtZW50LCBfLCB2aXNpYmxlKSA9PiB7XG5cdGNvbnN0ICRyZWYgPSB2aXNpYmxlO1xuXHRpZiAoaGFzVmFsdWUodmlzaWJsZSkpIHZpc2libGUgPSB2aXNpYmxlLnZhbHVlO1xuXHRjb25zdCBpc1Zpc2libGUgPSAodmlzaWJsZSA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2aXNpYmxlKSkgIT0gbnVsbCAmJiB2aXNpYmxlICE9PSBmYWxzZTtcblx0JGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSBlbGVtZW50LmhpZGRlbiA9ICFpc1Zpc2libGU7XG5cdFx0ZWxzZSBpZiAoaXNWaXNpYmxlKSBlbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpO1xuXHRcdGVsc2UgZWxlbWVudD8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiLCBcIlwiKTtcblx0fSk7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBoYW5kbGVQcm9wZXJ0eSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGlmICghKHByb3AgPSB0eXBlb2YgcHJvcCA9PSBcInN0cmluZ1wiID8ga2ViYWJUb0NhbWVsKHByb3ApIDogcHJvcCkgfHwgIWVsIHx8IFtcblx0XHRcInN0eWxlXCIsXG5cdFx0XCJkYXRhc2V0XCIsXG5cdFx0XCJhdHRyaWJ1dGVTdHlsZU1hcFwiLFxuXHRcdFwic3R5bGVNYXBcIixcblx0XHRcImNvbXB1dGVkU3R5bGVNYXBcIlxuXHRdLmluZGV4T2YocHJvcCB8fCBcIlwiKSAhPSAtMSkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRpZiAoZWw/Lltwcm9wXSA9PT0gdmFsKSByZXR1cm4gZWw7XG5cdGlmIChlbD8uW3Byb3BdICE9PSB2YWwpICRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh2YWwgIT0gbnVsbCkgZWxbcHJvcF0gPSB2YWw7XG5cdFx0ZWxzZSBkZWxldGUgZWxbcHJvcF07XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGhhbmRsZURhdGFzZXQgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRjb25zdCBkYXRhc2V0UmVmID0gZWw/LmRhdGFzZXQ7XG5cdGlmICghcHJvcCB8fCAhZWwgfHwgIWRhdGFzZXRSZWYpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbD8udmFsdWU7XG5cdHByb3AgPSBrZWJhYlRvQ2FtZWwocHJvcCk7XG5cdGlmIChkYXRhc2V0UmVmPy5bcHJvcF0gPT09ICh2YWwgPSBub3JtYWxpemVQcmltaXRpdmUodmFsKSkpIHJldHVybiBlbDtcblx0aWYgKHZhbCA9PSBudWxsIHx8IHZhbCA9PT0gZmFsc2UpIGRlbGV0ZSBkYXRhc2V0UmVmW3Byb3BdO1xuXHRlbHNlICRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIpIGRhdGFzZXRSZWZbcHJvcF0gPSBTdHJpbmcodmFsKTtcblx0XHRlbHNlIGRlbGV0ZSBkYXRhc2V0UmVmW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBkZWxldGVTdHlsZVByb3BlcnR5ID0gKGVsLCBuYW1lKSA9PiBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShjYW1lbFRvS2ViYWIobmFtZSkpO1xudmFyIGhhbmRsZVN0eWxlQ2hhbmdlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbD8uc3R5bGU7XG5cdGlmICghcHJvcCB8fCB0eXBlb2YgcHJvcCAhPSBcInN0cmluZ1wiIHx8ICFlbCB8fCAhc3R5bGVSZWYpIHJldHVybiBlbDtcblx0JGF2b2lkVHJpZ2dlcih2YWwsICgpID0+IHtcblx0XHRpZiAoaXNWYWwodmFsKSB8fCBoYXNWYWx1ZSh2YWwpIHx8IGlzVmFsdWVVbml0KHZhbCkpIHNldFN0eWxlUHJvcGVydHkoZWwsIHByb3AsIHZhbCk7XG5cdFx0ZWxzZSBpZiAodmFsID09IG51bGwpIGRlbGV0ZVN0eWxlUHJvcGVydHkoZWwsIHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVBdHRyaWJ1dGUgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIXByb3AgfHwgIWVsKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWwudmFsdWU7XG5cdHByb3AgPSBjYW1lbFRvS2ViYWIocHJvcCk7XG5cdGlmIChlbD8uZ2V0QXR0cmlidXRlPy4ocHJvcCkgPT09ICh2YWwgPSBub3JtYWxpemVQcmltaXRpdmUodmFsKSkpIHJldHVybiBlbDtcblx0JGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB2YWwgIT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsICE9IFwiZnVuY3Rpb25cIiAmJiB2YWwgIT0gbnVsbCAmJiAodHlwZW9mIHZhbCA9PSBcImJvb2xlYW5cIiA/IHZhbCA9PSB0cnVlIDogdHJ1ZSkpIGVsPy5zZXRBdHRyaWJ1dGU/Lihwcm9wLCBTdHJpbmcodmFsKSk7XG5cdFx0ZWxzZSBlbD8ucmVtb3ZlQXR0cmlidXRlPy4ocHJvcCk7XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vanVuY3Rpb24vdHlwZXMudHNcbmZ1bmN0aW9uIGp1bmN0aW9uVG9Cb3goYSwgYikge1xuXHRjb25zdCBsZWZ0ID0gTWF0aC5taW4oYS54LCBiLngpO1xuXHRjb25zdCB0b3AgPSBNYXRoLm1pbihhLnksIGIueSk7XG5cdGNvbnN0IHJpZ2h0ID0gTWF0aC5tYXgoYS54LCBiLngpO1xuXHRjb25zdCBib3R0b20gPSBNYXRoLm1heChhLnksIGIueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdCxcblx0XHR0b3AsXG5cdFx0cmlnaHQsXG5cdFx0Ym90dG9tLFxuXHRcdHdpZHRoOiByaWdodCAtIGxlZnQsXG5cdFx0aGVpZ2h0OiBib3R0b20gLSB0b3Bcblx0fTtcbn1cbnZhciBKVU5DVElPTl9TRUxFQ1RfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1zZWxlY3Q6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1zZWxlY3Q6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tc2VsZWN0OmVuZFwiLFxuXHRjYW5jZWw6IFwianVuY3Rpb24tc2VsZWN0OmNhbmNlbFwiXG59O1xudmFyIEpVTkNUSU9OX0RSQUdfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1kcmFnOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tZHJhZzptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1kcmFnOmVuZFwiXG59O1xudmFyIEpVTkNUSU9OX1JFU0laRV9FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9qdW5jdGlvbi9KdW5jdGlvbk1peGlucy50c1xudmFyIG1peGluRGlzcG9zZXJzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBtaXhpbkRpc3Bvc2VycyA9IGdsb2JhbFRoaXNbbWl4aW5EaXNwb3NlcnNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBwdXNoRGlzcG9zYWJsZSA9IChob3N0LCBtaXhpbk5hbWUsIGZuKSA9PiB7XG5cdGNvbnN0IG1hcCA9IG1peGluRGlzcG9zZXJzLmdldChob3N0KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRjb25zdCBsaXN0ID0gbWFwLmdldChtaXhpbk5hbWUpID8/IFtdO1xuXHRsaXN0LnB1c2goZm4pO1xuXHRtYXAuc2V0KG1peGluTmFtZSwgbGlzdCk7XG5cdG1peGluRGlzcG9zZXJzLnNldChob3N0LCBtYXApO1xufTtcbnZhciBydW5EaXNwb3NlcnMgPSAoaG9zdCwgbWl4aW5OYW1lKSA9PiB7XG5cdGNvbnN0IG1hcCA9IG1peGluRGlzcG9zZXJzLmdldChob3N0KTtcblx0Y29uc3QgbGlzdCA9IG1hcD8uZ2V0KG1peGluTmFtZSk7XG5cdGlmICghbGlzdCkgcmV0dXJuO1xuXHRmb3IgKGNvbnN0IGZuIG9mIGxpc3QpIHRyeSB7XG5cdFx0Zm4oKTtcblx0fSBjYXRjaCB7fVxuXHRtYXAuZGVsZXRlKG1peGluTmFtZSk7XG5cdGlmIChtYXAuc2l6ZSA9PT0gMCkgbWl4aW5EaXNwb3NlcnMuZGVsZXRlKGhvc3QpO1xufTtcbnZhciBwYXJzZVB4VmFyID0gKGhvc3QsIG5hbWUpID0+IHtcblx0Y29uc3QgcmF3ID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oaG9zdCk/LmdldFByb3BlcnR5VmFsdWU/LihuYW1lKT8udHJpbT8uKCkgPz8gXCJcIjtcblx0Y29uc3QgbiA9IHBhcnNlRmxvYXQocmF3KTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiAwO1xufTtcbnZhciBxdWVyeUhhbmRsZSA9IChob3N0LCBhdHRyLCBmYWxsYmFjaykgPT4ge1xuXHRjb25zdCBzZWwgPSBob3N0LmdldEF0dHJpYnV0ZShhdHRyKT8udHJpbSgpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGZhbGxiYWNrO1xuXHRjb25zdCBmb3VuZCA9IGhvc3QucXVlcnlTZWxlY3RvcihzZWwpO1xuXHRyZXR1cm4gZm91bmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGZvdW5kIDogZmFsbGJhY2s7XG59O1xudmFyIEp1bmN0aW9uU2VsZWN0TWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRvdmVybGF5LmNsYXNzTmFtZSA9IFwidWktanVuY3Rpb24tc2VsZWN0LW92ZXJsYXlcIjtcblx0XHRvdmVybGF5LnNldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tb3ZlcmxheVwiLCBcIlwiKTtcblx0XHRvdmVybGF5LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDp2YXIoLS16LW1heCwgOTk5OSk7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoxcHggZGFzaGVkIGNvbG9yLW1peChpbiBva2xhYiwgdmFyKC0tY29sb3ItcHJpbWFyeSwgIzVhN2ZmZikgNzAlLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZDpjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLWNvbG9yLXByaW1hcnksICM1YTdmZmYpIDE0JSwgdHJhbnNwYXJlbnQpO2Rpc3BsYXk6bm9uZTtpbnNldDphdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtcIjtcblx0XHRjb25zdCBlbnN1cmVQb3NpdGlvbmVkID0gKCkgPT4ge1xuXHRcdFx0aWYgKChnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lihob3N0KSk/LnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSBob3N0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdH07XG5cdFx0ZW5zdXJlUG9zaXRpb25lZCgpO1xuXHRcdGhvc3QuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cdFx0bGV0IGFjdGl2ZSA9IGZhbHNlO1xuXHRcdGxldCBhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGxldCBiID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGNvbnN0IGxvY2FsUG9pbnQgPSAoZXYpID0+IHtcblx0XHRcdGNvbnN0IHIgPSBob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogZXYuY2xpZW50WCAtIHIubGVmdCxcblx0XHRcdFx0eTogZXYuY2xpZW50WSAtIHIudG9wXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y29uc3QgYXBwbHlPdmVybGF5ID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGlmIChib3gud2lkdGggPCAxICYmIGJveC5oZWlnaHQgPCAxKSB7XG5cdFx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHtib3gubGVmdH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLnRvcCA9IGAke2JveC50b3B9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2JveC53aWR0aH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmhlaWdodCA9IGAke2JveC5oZWlnaHR9cHhgO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1qdW5jdGlvbi1pZ25vcmUtc2VsZWN0XSwgW2RhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVdLCBbZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXSwgYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSkgcmV0dXJuO1xuXHRcdFx0aWYgKCEoZXYudGFyZ2V0ID09PSBob3N0IHx8IGhvc3QuY29udGFpbnMoZXYudGFyZ2V0KSkpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IHRydWU7XG5cdFx0XHRhID0gbG9jYWxQb2ludChldik7XG5cdFx0XHRiID0geyAuLi5hIH07XG5cdFx0XHRob3N0LnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0XHRhcHBseU92ZXJsYXkoKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGIgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGJveCxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IGVuZCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aG9zdC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGJveCxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRlbmQoZXYpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25DYW5jZWwgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aG9zdC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5jYW5jZWwsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7IGhvc3QgfVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgKCkgPT4ge1xuXHRcdFx0b3ZlcmxheS5yZW1vdmUoKTtcblx0XHR9KTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcmNhbmNlbFwiLCBvbkNhbmNlbCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG52YXIgSnVuY3Rpb25EcmFnTWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy14XCIsIHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKSk7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy15XCIsIHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKSk7XG5cdFx0Y29uc3QgcHJldmlvdXNUcmFuc2Zvcm0gPSBob3N0LnN0eWxlLnRyYW5zZm9ybTtcblx0XHRpZiAoIWhvc3Quc3R5bGUudHJhbnNmb3JtIHx8IGhvc3Quc3R5bGUudHJhbnNmb3JtID09PSBcIm5vbmVcIikgaG9zdC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tangtZHJhZy14LCAwKSAqIDFweCksIGNhbGModmFyKC0tangtZHJhZy15LCAwKSAqIDFweCksIDApXCI7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXCIsIGhvc3QpO1xuXHRcdGxldCBkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdGxldCBzdGFydFggPSAwO1xuXHRcdGxldCBzdGFydFkgPSAwO1xuXHRcdGxldCBiYXNlWCA9IDA7XG5cdFx0bGV0IGJhc2VZID0gMDtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdGRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdHN0YXJ0WCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzdGFydFkgPSBldi5jbGllbnRZO1xuXHRcdFx0YmFzZVggPSBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIik7XG5cdFx0XHRiYXNlWSA9IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKTtcblx0XHRcdGhhbmRsZS5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdGNsaWVudFg6IGV2LmNsaWVudFgsXG5cdFx0XHRcdFx0Y2xpZW50WTogZXYuY2xpZW50WSxcblx0XHRcdFx0XHRiYXNlWCxcblx0XHRcdFx0XHRiYXNlWVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghZHJhZ2dpbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IGR4ID0gZXYuY2xpZW50WCAtIHN0YXJ0WDtcblx0XHRcdGNvbnN0IGR5ID0gZXYuY2xpZW50WSAtIHN0YXJ0WTtcblx0XHRcdGNvbnN0IG54ID0gYmFzZVggKyBkeDtcblx0XHRcdGNvbnN0IG55ID0gYmFzZVkgKyBkeTtcblx0XHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteFwiLCBueCk7XG5cdFx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXlcIiwgbnkpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0ZHgsXG5cdFx0XHRcdFx0ZHksXG5cdFx0XHRcdFx0eDogbngsXG5cdFx0XHRcdFx0eTogbnlcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFkcmFnZ2luZykgcmV0dXJuO1xuXHRcdFx0ZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhhbmRsZS5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0eDogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdHk6IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0aG9zdC5zdHlsZS50cmFuc2Zvcm0gPSBwcmV2aW91c1RyYW5zZm9ybTtcblx0XHR9KTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmNhbmNlbFwiLCBvblVwKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG52YXIgSnVuY3Rpb25SZXNpemVNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IGhhbmRsZSA9IHF1ZXJ5SGFuZGxlKGhvc3QsIFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXCIsIGhvc3QpO1xuXHRcdGxldCByZXNpemluZyA9IGZhbHNlO1xuXHRcdGxldCBzeCA9IDA7XG5cdFx0bGV0IHN5ID0gMDtcblx0XHRsZXQgc3cgPSAwO1xuXHRcdGxldCBzaCA9IDA7XG5cdFx0Y29uc3QgbWluVyA9IE1hdGgubWF4KDEyMCwgcGFyc2VGbG9hdChob3N0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi13XCIpIHx8IFwiXCIpIHx8IDEyMCk7XG5cdFx0Y29uc3QgbWluSCA9IE1hdGgubWF4KDgwLCBwYXJzZUZsb2F0KGhvc3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLWhcIikgfHwgXCJcIikgfHwgODApO1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldCAhPT0gaGFuZGxlICYmICFoYW5kbGUuY29udGFpbnMoZXYudGFyZ2V0KSkgcmV0dXJuO1xuXHRcdFx0cmVzaXppbmcgPSB0cnVlO1xuXHRcdFx0c3ggPSBldi5jbGllbnRYO1xuXHRcdFx0c3kgPSBldi5jbGllbnRZO1xuXHRcdFx0c3cgPSBob3N0Lm9mZnNldFdpZHRoO1xuXHRcdFx0c2ggPSBob3N0Lm9mZnNldEhlaWdodDtcblx0XHRcdGhhbmRsZS5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IHN3LFxuXHRcdFx0XHRcdGhlaWdodDogc2hcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIXJlc2l6aW5nKSByZXR1cm47XG5cdFx0XHRjb25zdCBudyA9IE1hdGgubWF4KG1pblcsIHN3ICsgKGV2LmNsaWVudFggLSBzeCkpO1xuXHRcdFx0Y29uc3QgbmggPSBNYXRoLm1heChtaW5ILCBzaCArIChldi5jbGllbnRZIC0gc3kpKTtcblx0XHRcdGhvc3Quc3R5bGUud2lkdGggPSBgJHtud31weGA7XG5cdFx0XHRob3N0LnN0eWxlLmhlaWdodCA9IGAke25ofXB4YDtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IG53LFxuXHRcdFx0XHRcdGhlaWdodDogbmhcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFyZXNpemluZykgcmV0dXJuO1xuXHRcdFx0cmVzaXppbmcgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhhbmRsZS5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogaG9zdC5vZmZzZXRXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IGhvc3Qub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5uZXcgSnVuY3Rpb25TZWxlY3RNaXhpbigpO1xubmV3IEp1bmN0aW9uRHJhZ01peGluKCk7XG5uZXcgSnVuY3Rpb25SZXNpemVNaXhpbigpO1xuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IERPTU1peGluLCBKdW5jdGlvbkRyYWdNaXhpbiwgSnVuY3Rpb25SZXNpemVNaXhpbiwgSnVuY3Rpb25TZWxlY3RNaXhpbiwgTUFUQ0gsIE1PQywgTU9DRWxlbWVudCwgUkFGQmVoYXZpb3IsIFJFR0VYLCBST09ULCBXYXZ5U2hhcGVkQ2lyY2xlLCBfX2V4cG9ydFByb3BlcnRpZXMsIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMsIGFkZEV2ZW50LCBhZGRFdmVudHMsIGFkZEV2ZW50c0xpc3QsIGFkZFJvb3QsIGFuaW1hdGVIaWRlLCBhbmltYXRlU2hvdywgYXBwbHksIGF2YWlsU2l6ZSwgYmJoLCBiYncsIGJpbmRCZWhhdmlvciwgYmluZE1peGlucywgYmluZFN0b3JlLCBib3JkZXJCb3hIZWlnaHQsIGJvcmRlckJveFdpZHRoLCBib3VuZEJlaGF2aW9ycywgYm91bmRNaXhpblNldCwgY2JoLCBjYncsIGNoYW5nZVpvb20sIGNsYXNzZXMsIGNvbXB1dGVDYXJldFBvc2l0aW9uLCBjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQsIGNvbnRhaW5zT3JTZWxmLCBjb250ZW50Qm94SGVpZ2h0LCBjb250ZW50Qm94V2lkdGgsIGNyZWF0ZUN1c3RvbUF0dHJpYnV0ZSwgY3JlYXRlQ3VzdG9tQXR0cmlidXRlUmVnaXN0cnksIGNyZWF0ZUVsZW1lbnRWYW5pbGxhLCBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCwgY3VzdG9tQXR0cmlidXRlVG9NaXhpbiwgZGVsZXRlU3R5bGVQcm9wZXJ0eSwgZGV0ZWN0TW9iaWxlLCBkb0JvcmRlck9ic2VydmUsIGRvQ29udGVudE9ic2VydmUsIGVuc3VyZVZpZXdwb3J0SW50ZXJhY3RpdmVXaWRnZXRPdmVybGF5LCBlbnN1cmVWaWV3cG9ydFRyYWNraW5nLCBlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5LCBmaXhPcmllbnRUb1NjcmVlbiwgZml4ZWRDbGllbnRab29tLCBmbHVzaE1peGlucywgZ2V0QXZhaWxTaXplLCBnZXRCb3VuZGluZ09yaWVudFJlY3QsIGdldENvcnJlY3RPcmllbnRhdGlvbiwgZ2V0Q3VzdG9tQXR0cmlidXRlQmFzZSwgZ2V0Q3VzdG9tQXR0cmlidXRlcywgZ2V0RWxlbWVudFJlbGF0ZWQsIGdldEV2ZW50VGFyZ2V0LCBnZXRPZmZzZXRQYXJlbnQsIGdldE9mZnNldFBhcmVudENoYWluLCBnZXRTdG9yZXNPZkVsZW1lbnQsIGdldFpvb20sIGhhbmRsZUF0dHJpYnV0ZSwgaGFuZGxlRGF0YXNldCwgaGFuZGxlSGlkZGVuLCBoYW5kbGVQcm9wZXJ0eSwgaGFuZGxlU3R5bGVDaGFuZ2UsIGhhc1BhcmVudCwgaHRtbCwgaW5jbHVkZVNlbGYsIGluZGV4T2YsIGluaXRUZXh0U3R5bGUsIGlzRWxlbWVudCwgaXNJbkZvY3VzLCBpc01vYmlsZSwgaXNOZWFybHlJZGVudGl0eSwgaXNQb2x5ZmlsbGVkLCBpc1N1cHBvcnRlZCwgaXNWYWxpZEN1c3RvbUF0dHJpYnV0ZU5hbWUsIGlzVmFsaWRQYXJlbnQsIG1ha2VSQUZDeWNsZSwgbWVhc3VyZUlucHV0SW5Gb2N1cywgbWVhc3VyZVRleHQsIG1lcmdlTWl4aW5zLCBtaXhpbkRpc3Bvc2VycywgbWl4aW5FbGVtZW50cywgbWl4aW5OYW1lc3BhY2UsIG1peGluUmVnaXN0cnksIG1peGluVG9DdXN0b21BdHRyaWJ1dGUsIG5hbWVSZWdpc3RyeUYsIG5hbWVkU3RvcmVNYXBzLCBvYnNlcnZlQXR0cmlidXRlLCBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3Rvciwgb2JzZXJ2ZUJvcmRlckJveCwgb2JzZXJ2ZUJ5U2VsZWN0b3IsIG9ic2VydmVDb250ZW50Qm94LCBvbkJvcmRlck9ic2VydmUsIG9uQ29udGVudE9ic2VydmUsIG9yaWVudE9mLCBvcmllbnRhdGlvbk51bWJlck1hcCwgcGFzc2l2ZU9wdHMsIHJlYWRGaXhlZE92ZXJsYXlWaWV3cG9ydCwgcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQsIHJlYWRWaXJ0dWFsS2V5Ym9hcmRIZWlnaHRQeCwgcmVmbGVjdEJlaGF2aW9ycywgcmVmbGVjdE1peGlucywgcmVmbGVjdFN0b3JlcywgcmVnaXN0ZXJDcm9zc01peGluLCByZWdpc3Rlck1peGluLCByZW1vdmVFdmVudCwgcmVtb3ZlRXZlbnRzLCByZW1vdmVSb290LCByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQsIHJvb3RzLCBzZXRBdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzSWZOdWxsLCBzZXRDaGVja2VkLCBzZXRJZGxlSW50ZXJ2YWwsIHNldHRsZU1peGlucywgdGhyb3R0bGVNYXAsIHVuYmluZE1peGlucywgdW5maXhlZENsaWVudFpvb20sIHVucmVnaXN0ZXJNaXhpbiwgdXBkYXRlQWxsTWl4aW5zLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCwgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cywgdXBkYXRlVlAsIHVybCwgd2hlbkFueVNjcmVlbkNoYW5nZXMsIHpvb21PZiwgem9vbVZhbHVlcyB9OyJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsaUJBQUFBLElBQWUsZ0JBQUFDLElBQWMsZ0JBQUFDLElBQWMsWUFBQUMsSUFBVSxxQkFBQUMsSUFBbUIsU0FBQUMsSUFBTyxlQUFBQyxJQUFhLGdCQUFBQyxJQUFjLHVCQUFBQyxJQUFxQixzQkFBQUMsSUFBb0IsK0JBQUFDLFVBQW1DO0FBQy9MLFNBQVMsVUFBQUMsSUFBUSxhQUFBQyxJQUFXLGFBQUFDLElBQVcsYUFBQUMsSUFBVyxvQkFBQUMsSUFBa0Isb0JBQUFDLFVBQXdCO0FBRTVGLGNBQWM7QUFHZCxJQUFJQyxLQUFrQyx1QkFBTyxJQUFJLGtDQUFrQyxHQUMvRUMsS0FBNEIsV0FBV0QsRUFBK0IsTUFBc0Isb0JBQUksSUFBSTtBQUN4RztBQUFBLEVBQ0M7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElB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R0FBTSxzQkFBc0J4QixFQUFTMGlCLEdBQVEsZUFBZU4sQ0FBTSxDQUFDLEdBQ2xGYixFQUFlL2YsR0FBTSxzQkFBc0J4QixFQUFTMGlCLEdBQVEsYUFBYUosQ0FBSSxDQUFDLEdBQzlFZixFQUFlL2YsR0FBTSxzQkFBc0J4QixFQUFTMGlCLEdBQVEsaUJBQWlCSixDQUFJLENBQUMsR0FDM0U7QUFBQSxFQUNSO0FBQUEsRUFDQSxXQUFXUCxHQUFLO0FBQ2YsVUFBTXZnQixJQUFPdWdCLEdBQUssUUFBUTtBQUMxQixXQUFJdmdCLEtBQU1pZ0IsR0FBYWpnQixHQUFNLG9CQUFvQixHQUMxQztBQUFBLEVBQ1I7QUFDRDtBQUNBLElBQUlzZ0IsR0FBb0I7QUFDeEIsSUFBSVUsR0FBa0I7QUFDdEIsSUFBSVksR0FBb0I7IiwKICAibmFtZXMiOiBbIiRhdm9pZFRyaWdnZXIiLCAiY2FtZWxUb0tlYmFiIiwgImN2dF9jc190b19vcyIsICJoYXNWYWx1ZSIsICJpc0FycmF5T3JJdGVyYWJsZSIsICJpc1ZhbCIsICJpc1ZhbHVlVW5pdCIsICJrZWJhYlRvQ2FtZWwiLCAibm9ybWFsaXplR3JpZExheW91dCIsICJub3JtYWxpemVQcmltaXRpdmUiLCAicmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsIiwgImFwcGVhciIsICJkZWNvckhpZGUiLCAiZGVjb3JTaG93IiwgImRpc2FwcGVhciIsICJvYnNlcnZlU3R5bGVUcmVlIiwgInNldFN0eWxlUHJvcGVydHkiLCAiX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCIsICJfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzIiwgIm9wdGlvbnMiLCAibmFtZSIsICJlIiwgIl9fZXhwb3J0UHJvcGVydGllcyIsICJpc01vYmlsZSIsICJjaGVjayIsICJhIiwgImRldGVjdE1vYmlsZSIsICJjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjayIsICJydW5XaGVuSWRsZSQxIiwgImNiIiwgInRpbWVvdXQiLCAiZ2V0T2Zmc2V0UGFyZW50IiwgImVsZW1lbnQiLCAiZ2V0T2Zmc2V0UGFyZW50Q2hhaW4iLCAicGFyZW50cyIsICJjdXJyZW50IiwgInBhcmVudCIsICJpc05lYXJseUlkZW50aXR5IiwgIm1hdHJpeCIsICJlcHNpbG9uIiwgIm1ha2VSQUZDeWNsZSIsICJjb250cm9sIiwgInJBRiIsICJyZXMiLCAiUkFGQmVoYXZpb3IiLCAic2hlZCIsICJST09UIiwgInNldEF0dHJpYnV0ZXNJZk51bGwiLCAiYXR0cnMiLCAidmFsdWUiLCAib2xkIiwgInNldEF0dHJpYnV0ZXMiLCAidGhyb3R0bGVNYXAiLCAic2V0SWRsZUludGVydmFsIiwgImFyZ3MiLCAic3RhdHVzIiwgInIiLCAiYm9yZGVyQm94V2lkdGgiLCAiYm9yZGVyQm94SGVpZ2h0IiwgImNvbnRlbnRCb3hXaWR0aCIsICJjb250ZW50Qm94SGVpZ2h0IiwgIm9uQm9yZGVyT2JzZXJ2ZSIsICJvbkNvbnRlbnRPYnNlcnZlIiwgImRvQ29udGVudE9ic2VydmUiLCAib2JzZXJ2ZXIiLCAiZW50cmllcyIsICJlbnRyeSIsICJjb250ZW50Qm94U2l6ZSIsICJkb0JvcmRlck9ic2VydmUiLCAiYm9yZGVyQm94U2l6ZSIsICJ1cmwiLCAidHlwZSIsICJzb3VyY2UiLCAiaHRtbCIsICJwYXJzZWQiLCAic2V0Q2hlY2tlZCIsICJpbnB1dCIsICJldiIsICJpc1ZhbGlkUGFyZW50IiwgImluZGV4T2YiLCAibm9kZSIsICJNQVRDSCIsICJSRUdFWCIsICJjcmVhdGVFbGVtZW50VmFuaWxsYSIsICJzZWxlY3RvciIsICJjcmVhdGUiLCAibWF0Y2giLCAiY2xhc3NOYW1lIiwgImlzRWxlbWVudCIsICJlbCIsICJpbmNsdWRlU2VsZiIsICJ0YXJnZXQiLCAic2VsIiwgImhhc1BhcmVudCIsICJwYXNzaXZlT3B0cyIsICJhZGRFdmVudCIsICJvcHRzIiwgIndyIiwgInJlbW92ZUV2ZW50IiwgImFkZEV2ZW50cyIsICJyb290IiwgImhhbmRsZXJzIiwgImFkZEV2ZW50c0xpc3QiLCAiZXZlbnRzIiwgImxpc3QiLCAiY2JzIiwgInJlbW92ZUV2ZW50cyIsICJnZXRFdmVudFRhcmdldCIsICJwYXRoIiwgImNvbnRhaW5zT3JTZWxmIiwgImIiLCAiYUVsIiwgImJFbCIsICJhSW5kZXgiLCAiYkluZGV4IiwgIk1PQ0VsZW1lbnQiLCAic2VsZiIsICJob3N0TWF0Y2hlZCIsICJjbG9zZXN0IiwgImhvc3QiLCAiTU9DIiwgImlzSW5Gb2N1cyIsICJzZWxlY3Rvck9yRWxlbWVudCIsICJkaXIiLCAiYWN0aXZlIiwgImlzRm9jdXNlZCIsICJpc0hvdmVyZWQiLCAiYWx0Q25kIiwgImdldFpvb20iLCAiem9vbVZhbHVlc1N5bWJvbCIsICJ6b29tVmFsdWVzIiwgInpvb21PZiIsICJjb250YWluZXIiLCAiY2hhbmdlWm9vbSIsICJzY2FsZSIsICJmaXhlZENsaWVudFpvb20iLCAidW5maXhlZENsaWVudFpvb20iLCAib3JpZW50T2YiLCAicmF3IiwgIm4iLCAiZ2V0Qm91bmRpbmdPcmllbnRSZWN0IiwgIm9yaWVudCIsICJ6b29tIiwgImJveCIsICJuYngiLCAib3JfaSIsICJ2diIsICJzaXplIiwgImxlZnRfIiwgInRvcF8iLCAicmlnaHRfIiwgImJvdHRvbV8iLCAibGVmdCIsICJyaWdodCIsICJ0b3AiLCAiYm90dG9tIiwgIndpZHRoIiwgImhlaWdodCIsICJiYnciLCAiYmJoIiwgImNidyIsICJjYmgiLCAicnVuV2hlbklkbGUiLCAiS0VZQk9BUkRfT1ZFUkxBWV9QWCIsICJjYXBhY2l0b3JLZXlib2FyZEhlaWdodCIsICJjYXBhY2l0b3JLZXlib2FyZEJvdW5kIiwgIndpbmRvd0tleWJvYXJkQm91bmQiLCAidmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQiLCAibmF0aXZlRGlzcGxheSIsICJuYXRpdmVEaXNwbGF5Qm91bmQiLCAibmF0aXZlRGlzcGxheVJlZnJlc2hRdWV1ZWQiLCAiaXNOYXRpdmVDYXBhY2l0b3JIb3N0IiwgImNhcCIsICJyZWFkQ3dzQnJpZGdlIiwgInBhcnNlTmF0aXZlRGlzcGxheSIsICJpbmZvIiwgIndpbmRvd1ciLCAid2luZG93SCIsICJkaXNwbGF5VyIsICJkaXNwbGF5SCIsICJ3IiwgImgiLCAiZGVuc2l0eSIsICJhcHBseU5hdGl2ZURpc3BsYXkiLCAibmV4dCIsICJwcmV2IiwgInNhbWUiLCAidXBkYXRlVlAiLCAicmVmcmVzaE5hdGl2ZURpc3BsYXkiLCAiQnJpZGdlIiwgInF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2giLCAiYmluZE5hdGl2ZURpc3BsYXkiLCAiY2FjaGVkIiwgInZpcnR1YWxLZXlib2FyZCIsICJJTlRFUkFDVElWRV9XSURHRVQiLCAiVklFV1BPUlRfRklUIiwgImVuc3VyZVZpZXdwb3J0SW50ZXJhY3RpdmVXaWRnZXRPdmVybGF5IiwgImhlYWQiLCAibWV0YSIsICJjb250ZW50IiwgImVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkiLCAidmsiLCAiZGVlcEFjdGl2ZUVsZW1lbnQiLCAiaXNJbWVUYXJnZXQiLCAidGFnIiwgImlzQ29sbGFwc2VkQ2FyZXQiLCAibGF5b3V0TG9ja09yaWVudCIsICJsYXlvdXRMb2NrVyIsICJsYXlvdXRMb2NrSCIsICJsYXN0U3RhYmxlS2V5Ym9hcmQiLCAiaXNMYW5kc2NhcGUiLCAicmVhZFBoeXNpY2FsU2NyZWVuIiwgInN3IiwgInNoIiwgImF3IiwgImFoIiwgImxhbmRzY2FwZSIsICJib3hMYW5kc2NhcGUiLCAiY2xhbXBUb1BoeXNpY2FsIiwgInBoeXMiLCAiaW5uZXJXIiwgImlubmVySCIsICJjbGllbnRXIiwgImNsaWVudEgiLCAiY2FwVyIsICJjYXBIIiwgImNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInNhZmVXaWR0aCIsICJzYWZlSGVpZ2h0IiwgInNhZmVMZWZ0IiwgInNhZmVUb3AiLCAicmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInJlYWRMYXlvdXRWaWV3cG9ydCIsICJ2dlciLCAidnZIIiwgInZ2VG9wIiwgInZrSCIsICJ2dk92ZXJsYXAiLCAibmF0aXZlQ2FwIiwgImtleWJvYXJkIiwgImNhbmRpZGF0ZVciLCAiY2FuZGlkYXRlSCIsICJ3aWR0aFN0YWJsZSIsICJlZGl0YWJsZUZvY3VzZWQiLCAiY29hcnNlUG9pbnRlciIsICJzdWRkZW5TaHJpbmsiLCAic2hyaW5rIiwgImV4cGFuZGVkU2VsZWN0aW9uIiwgImxvY2tlZCIsICJrYiIsICJpc0ltZUNocm9tZUxvY2siLCAiY2xzIiwgInBhcmVudE9mIiwgImlzU2Nyb2xscG9ydCIsICJzdHlsZSIsICJveSIsICJmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydCIsICJzdGFydCIsICJpbm5lciIsICJmaW5kSW1lU2Nyb2xscG9ydCIsICJyZWFkQ2FyZXRSZWN0IiwgInJhbmdlIiwgInJlY3RzIiwgInJlY3QiLCAicGluSW1lQ2FyZXRJblNjcm9sbHBvcnQiLCAidmlzaWJsZUJvdHRvbSIsICJvdmVyZmxvdyIsICJwb3J0IiwgInBpblZpc3VhbFZpZXdwb3J0IiwgIm92ZXJsYXlQaW5uaW5nIiwgInJlc2V0Q2hyb21lU2Nyb2xsIiwgInBpbk92ZXJsYXlTY3JvbGwiLCAiaW1lIiwgImJvZHkiLCAic2Nyb2xsSW50b1ZpZXdQYXRjaGVkIiwgInBhdGNoSW1lU2Nyb2xsSW50b1ZpZXciLCAib3JpZyIsICJhcmciLCAicGluSW1lQ2hyb21lIiwgInJlYWRWaXJ0dWFsS2V5Ym9hcmRIZWlnaHRQeCIsICJnZXRBdmFpbFNpemUiLCAibGF5b3V0IiwgInZ2QmxvY2siLCAicGFuZVciLCAicGFuZUgiLCAid2luZG93ZWRXIiwgIndpbmRvd2VkSCIsICJzY3JlZW5XIiwgInNjcmVlbkgiLCAibmF0aXZlU2NhbGUiLCAiYXZhaWxTaXplIiwgImNsYXNzZXMiLCAib3JpZW50YXRpb25OdW1iZXJNYXAiLCAicnVsZSIsICJwcm9wTmFtZSIsICJwcm9wVmFsdWUiLCAiZXhpc3RzIiwgImdldENvcnJlY3RPcmllbnRhdGlvbiIsICJvcmllbnRhdGlvblR5cGUiLCAicGFzc2l2ZU9wdHMkMSIsICJhcHBseUNhcGFjaXRvcktleWJvYXJkSGVpZ2h0IiwgImNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQiLCAiYmluZFdpbmRvd0tleWJvYXJkRXZlbnRzIiwgIm9uU2hvdyIsICJkZXRhaWwiLCAiZnJvbURldGFpbCIsICJiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQiLCAiS2V5Ym9hcmQiLCAiZW5zdXJlVmlld3BvcnRUcmFja2luZyIsICJ3aGVuQW55U2NyZWVuQ2hhbmdlcyIsICJ0aWNraW5nIiwgInVwZGF0ZSIsICJ1bnN1YnNjcmliZXJzIiwgInVuc3ViIiwgImZpeE9yaWVudFRvU2NyZWVuIiwgImN0eCIsICJpbml0VGV4dFN0eWxlIiwgImZvbnRXZWlnaHQiLCAiZm9udFNpemUiLCAiZm9udEZhbWlseSIsICJmb250U3RyZXRjaCIsICJtZWFzdXJlVGV4dCIsICJ0ZXh0IiwgIm1lYXN1cmVJbnB1dEluRm9jdXMiLCAiY29tcHV0ZUNhcmV0UG9zaXRpb24iLCAicG9pbnQiLCAiY3VycmVudFdpZHRoIiwgImkiLCAiY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50IiwgImNsaWVudCIsICJyZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCIsICJsYXlvdXRPdmVycmlkZSIsICJjIiwgImJhc2UiLCAicmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50IiwgImdyaWRTeXN0ZW0iLCAiY2xpZW50UG9pbnQiLCAibW9kZSIsICJjcyIsICJwbCIsICJwdCIsICJwciIsICJwYiIsICJjb250ZW50VyIsICJjb250ZW50SCIsICJjc0Nvb3JkIiwgImFuaW1hdGVTaG93IiwgImFuaW1hdGVIaWRlIiwgIldhdnlTaGFwZWRDaXJjbGUiLCAic3RlcHMiLCAiYW1wbGl0dWRlIiwgImZyZXEiLCAicG9pbnRzIiwgImFuZ2xlIiwgInN0ZXAiLCAidmFyaWFudCIsICJmdW5jIiwgIm9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCIsICJvbkJvcmRlck9ic2VydmUkMSIsICJvbkNvbnRlbnRPYnNlcnZlU3ltYm9sIiwgIm9uQ29udGVudE9ic2VydmUkMSIsICJ1bndyYXBGcm9tUXVlcnkiLCAibm9ybWFsaXplU2VsZWN0b3IiLCAiZmFsbGJhY2siLCAic2FmZVF1ZXJ5U2VsZWN0b3JBbGwiLCAic2FmZU1hdGNoZXMiLCAib2JzZXJ2ZUNvbnRlbnRCb3giLCAiY2FsbGJhY2tzIiwgIm9ic2VydmVCb3JkZXJCb3giLCAib2JzZXJ2ZUF0dHJpYnV0ZSIsICJhdHRyaWJ1dGUiLCAib2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IiLCAiYXR0cmlidXRlTGlzdCIsICJzIiwgIm11dGF0aW9uTGlzdCIsICJtdXRhdGlvbiIsICJhZGRlZE5vZGVzIiwgInJlbW92ZWROb2RlcyIsICJvYnNlcnZlQnlTZWxlY3RvciIsICJtdXQiLCAib2JzIiwgInVud3JhcE5vZGVzQnlTZWxlY3RvciIsICJub2RlcyIsICIkbm9kZXMiLCAib2JSZWYiLCAiaGFuZGxlTXV0YXRpb24iLCAiaGFuZGxlQ29tZSIsICJoYW5kbGVPdXRDb21lIiwgImhhbmRsZUZvY3VzQ2xpY2siLCAiZmFjdG9ycyIsICJzZWxlY3RlZCIsICJib3VuZEJlaGF2aW9ycyIsICJiaW5kQmVoYXZpb3IiLCAiYmVoU2V0IiwgImJlaGF2aW9yIiwgInJlZmxlY3RCZWhhdmlvcnMiLCAiYmVoYXZpb3JzIiwgIm5hbWVkU3RvcmVNYXBzU3ltYm9sIiwgIm5hbWVkU3RvcmVNYXBzIiwgImdldFN0b3Jlc09mRWxlbWVudCIsICJtYXAiLCAiRSIsICJtIiwgImlzV2Vha0NvbXBhdGlibGUiLCAiYmluZFN0b3JlIiwgIm9iaiIsICJ3ZWFrTWFwIiwgInJlZmxlY3RTdG9yZXMiLCAic3RvcmVzIiwgImdsb2JhbHMiLCAic2hhcmVkIiwgImtleSIsICJzeW1ib2wiLCAiaGFzRE9NIiwgInJlcXVpcmVET00iLCAicmVwb3J0IiwgImVycm9yIiwgImZuIiwgInNhZmUiLCAiY2FsbGJhY2siLCAiZG9tRXJyb3IiLCAibWVzc2FnZSIsICJpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlTmFtZSIsICJhc3NlcnRBdHRyaWJ1dGVOYW1lIiwgImlzRWxlbWVudCQxIiwgImlzSFRNTCIsICJpc1NoYWRvdyIsICJib3VuZE1peGluU2V0IiwgIm1peGluRWxlbWVudHMiLCAibWl4aW5SZWdpc3RyeSIsICJtaXhpbk5hbWVzcGFjZSIsICJlbmdpbmUiLCAicm9vdHMiLCAic2hhZG93T2YiLCAiZWxlbWVudHNJbiIsICJzdGFjayIsICJjaGlsZCIsICJzaGFkb3ciLCAibGlnaHRFbGVtZW50c0luIiwgImF0dHJpYnV0ZXNGb3IiLCAiYmluZGluZyIsICJyZXN1bHQiLCAiZ2V0RWxlbWVudFJlbGF0ZWQiLCAibWl4aW4iLCAiYXR0cmlidXRlcyIsICJiaW5kaW5nRm9yIiwgImNhbGxNaXhpbiIsICJleHRyYSIsICJyZWNvbmNpbGVCaW5kaW5nIiwgInR1cm4iLCAib2xkRG9jdW1lbnQiLCAid2FudGVkIiwgInNldCIsICJlbGVtZW50cyIsICJjbGVhbnVwIiwgImVucXVldWUiLCAiYWNxdWlyZSIsICJyZWxlYXNlIiwgImRyYWluUGVuZGluZyIsICJwZW5kaW5nIiwgInVwZGF0ZUFsbE1peGlucyIsICJkYXRhTmFtZXMiLCAid3JpdGVEYXRhTmFtZXMiLCAibmFtZXMiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzIiwgImJpbmRNaXhpbnMiLCAibWl4U2V0IiwgInVuYmluZE1peGlucyIsICJyZWZsZWN0IiwgInJlZmxlY3RNaXhpbnMiLCAibWl4aW5zIiwgInZhbHVlcyIsICJyZWdpc3Rlck1peGluIiwgImV4aXN0aW5nIiwgInByZXZpb3VzTmFtZSIsICJ1bnJlZ2lzdGVyTWl4aW4iLCAibmFtZVJlZ2lzdHJ5RiIsICJjYXB0dXJlRGlzcG9zZXIiLCAicmVjb25jaWxlVHJlZVNvb24iLCAiYWRkUm9vdCIsICJoYW5kbGVSb290UmVjb3JkcyIsICJyZWNvcmRzIiwgInJlY29yZCIsICJkaXNwb3NlcnMiLCAicG9seWZpbGxTdGF0ZSIsICJyZW1vdmVSb290IiwgIndhdGNoIiwgImRpc3Bvc2UiLCAiRE9NTWl4aW4iLCAiX2VsZW1lbnQiLCAiX3NlbGYiLCAiX3JlbGF0ZWQiLCAiaXNTdXBwb3J0ZWQiLCAiaXNQb2x5ZmlsbGVkIiwgImFwcGx5IiwgInJ1bnRpbWUiLCAiaW5zdGFsbEF0dHJpYnV0ZVBvbHlmaWxsIiwgImdldEN1c3RvbUF0dHJpYnV0ZXMiLCAiY3JlYXRlQ3VzdG9tQXR0cmlidXRlUmVnaXN0cnkiLCAiZ2V0Q3VzdG9tQXR0cmlidXRlQmFzZSIsICJjcmVhdGVDdXN0b21BdHRyaWJ1dGUiLCAiZG9jIiwgIk5hdGl2ZUF0dHIiLCAiZG9jUHJvdG8iLCAiZWxQcm90byIsICJuYXRpdmVDcmVhdGVBdHRyaWJ1dGUiLCAibmF0aXZlQ3JlYXRlQXR0cmlidXRlTlMiLCAibmF0aXZlQ3JlYXRlRWxlbWVudCIsICJuYXRpdmVDcmVhdGVFbGVtZW50TlMiLCAibmF0aXZlSW1wb3J0Tm9kZSIsICJuYXRpdmVBdHRhY2hTaGFkb3ciLCAiYXR0cmlidXRlRGVzY3JpcHRvciIsICJuYXRpdmVBdHRyaWJ1dGVzIiwgIkFMUkVBRFkiLCAiY2FsbGJhY2tOYW1lcyIsICJpbnRlcm5hbHMiLCAicmVnaXN0cmllcyIsICJyZWdpc3RyeURvY3VtZW50cyIsICJ0cmFja2VkIiwgImF0dHJpYnV0ZU1hcHMiLCAib2JzZXJ2ZWRSb290cyIsICJsb2NhbE9ic2VydmVycyIsICJjb25zdHJ1Y3RpbmdHbG9iYWwiLCAiZ2xvYmFsUmVnaXN0cnkiLCAicmVnaXN0cnkiLCAibm9kZURvY3VtZW50IiwgInNldFJlZ2lzdHJ5IiwgImdsb2JhbE9mIiwgImV4Y2x1c2l2ZUZyYWdtZW50IiwgInJlZ2lzdHJ5T2YiLCAiYWRvcHRlZCIsICJsb29rdXAiLCAibmFtZXNwYWNlIiwgInJlZ2lzdHJ5T3B0aW9uIiwgIm51bGxhYmxlIiwgImNoZWNrUmVnaXN0cnkiLCAiaW52b2tlIiwgImRlZmluaXRpb24iLCAiY29ubmVjdCIsICJkaXNjb25uZWN0IiwgImFkb3B0IiwgInRyYWNrIiwgImxvY2FsIiwgInByb2Nlc3NSZWNvcmRzIiwgInVudHJhY2siLCAicnVuQ29uc3RydWN0b3IiLCAiQyIsICJwcmV2aW91cyIsICJjb25zdHJ1Y3QiLCAib3duZXJEb2N1bWVudCIsICJsb2NhbE5hbWUiLCAibmFtZXNwYWNlVVJJIiwgInByZWZpeCIsICJ1cGdyYWRlIiwgInRyeVVwZ3JhZGUiLCAiQmF0Y2giLCAiaW5kZXgiLCAiYnlOYW1lIiwgIml0ZW0iLCAibGF0ZXIiLCAib2JzZXJ2ZVJvb3QiLCAib2xkVmFsdWUiLCAiZmx1c2giLCAiUmVnaXN0cnkiLCAiY29uc3RydWN0b3IiLCAic3RhdGUiLCAicHJvdG90eXBlIiwgInJlc29sdmUiLCAicHJvbWlzZSIsICJpc0RvY3VtZW50IiwgIkF0dHJpYnV0ZSIsICJkZWVwIiwgImNvcHkiLCAiZ2xvYmFsIiwgInNvdXJjZXMiLCAiY2hvc2VuIiwgImluaXQiLCAiZHluYW1pYyIsICJuYXRpdmUiLCAiY29ubmVjdGVkQmVmb3JlIiwgImNoZWNrQXR0YWNoYWJsZSIsICJhdHRhY2hlZCIsICJtYXBQcm90byIsICJicmlkZ2VzIiwgIm1peGluVG9DdXN0b21BdHRyaWJ1dGUiLCAiYXR0cmlidXRlTmFtZSIsICJjYWNoZSIsICJCYXNlIiwgIm93bmVycyIsICJvd25lciIsICJwcmV2aW91c093bmVyIiwgIk1peGluQXR0cmlidXRlIiwgIm5ld1ZhbHVlIiwgIl9vbGREb2N1bWVudCIsICJfbmV3RG9jdW1lbnQiLCAicmVnaXN0ZXJDcm9zc01peGluIiwgImN1c3RvbUF0dHJpYnV0ZVRvTWl4aW4iLCAicmVmIiwgIm5hbWVkIiwgIm1lcmdlTWl4aW5zIiwgInBhcnRzIiwgInBhcnQiLCAibGVhc2VzIiwgIm1lcmdlZCIsICJsZWFzZSIsICJyZWxhdGVkIiwgImZsdXNoTWl4aW5zIiwgInNldHRsZU1peGlucyIsICJoYW5kbGVIaWRkZW4iLCAiXyIsICJ2aXNpYmxlIiwgIiRyZWYiLCAiaXNWaXNpYmxlIiwgImhhbmRsZVByb3BlcnR5IiwgInByb3AiLCAidmFsIiwgImhhbmRsZURhdGFzZXQiLCAiZGF0YXNldFJlZiIsICJkZWxldGVTdHlsZVByb3BlcnR5IiwgImhhbmRsZVN0eWxlQ2hhbmdlIiwgInN0eWxlUmVmIiwgImhhbmRsZUF0dHJpYnV0ZSIsICJqdW5jdGlvblRvQm94IiwgIkpVTkNUSU9OX1NFTEVDVF9FVkVOVFMiLCAiSlVOQ1RJT05fRFJBR19FVkVOVFMiLCAiSlVOQ1RJT05fUkVTSVpFX0VWRU5UUyIsICJtaXhpbkRpc3Bvc2Vyc1N5bWJvbCIsICJtaXhpbkRpc3Bvc2VycyIsICJwdXNoRGlzcG9zYWJsZSIsICJtaXhpbk5hbWUiLCAicnVuRGlzcG9zZXJzIiwgInBhcnNlUHhWYXIiLCAicXVlcnlIYW5kbGUiLCAiYXR0ciIsICJmb3VuZCIsICJKdW5jdGlvblNlbGVjdE1peGluIiwgIndFbCIsICJvdmVybGF5IiwgImxvY2FsUG9pbnQiLCAiYXBwbHlPdmVybGF5IiwgIm9uRG93biIsICJvbk1vdmUiLCAiZW5kIiwgIm9uVXAiLCAib25DYW5jZWwiLCAiSnVuY3Rpb25EcmFnTWl4aW4iLCAicHJldmlvdXNUcmFuc2Zvcm0iLCAiaGFuZGxlIiwgImRyYWdnaW5nIiwgInN0YXJ0WCIsICJzdGFydFkiLCAiYmFzZVgiLCAiYmFzZVkiLCAiZHgiLCAiZHkiLCAibngiLCAibnkiLCAiSnVuY3Rpb25SZXNpemVNaXhpbiIsICJyZXNpemluZyIsICJzeCIsICJzeSIsICJtaW5XIiwgIm1pbkgiLCAibnciLCAibmgiXQp9Cg==

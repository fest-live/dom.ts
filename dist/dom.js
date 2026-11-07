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
  E.watches.set(t, {
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
  }), e);
  try {
    be(qn(t), e);
  } catch (r) {
    console.warn(r);
  }
  return nt.runtime?.observeRoot(t), Nt(t), t;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwgfSBmcm9tIFwiQGZlc3QtbGliL2NvcmVcIjtcbmltcG9ydCB7IGFwcGVhciwgZGVjb3JIaWRlLCBkZWNvclNob3csIGRpc2FwcGVhciwgb2JzZXJ2ZVN0eWxlVHJlZSwgc2V0U3R5bGVQcm9wZXJ0eSB9IGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCI7XG5cbmV4cG9ydCAqIGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCJcblxuLy8gc3JjL2FnYXRlL1Byb3BlcnRpZXMudHNcbnZhciBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzXCIpO1xudmFyIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMgPSBnbG9iYWxUaGlzW19fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuW1xuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2NyZWVuLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jbGlwLWFtcGxcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1mcmVxXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBpeGVsLXJhdGlvXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjFcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudC14XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JvbGwtbGVmdFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JvbGwtdG9wXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteFwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteVwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9XG5dLmZvckVhY2goKG9wdGlvbnMpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgQ1NTPy5yZWdpc3RlclByb3BlcnR5ICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCBuYW1lID0gU3RyaW5nKG9wdGlvbnM/Lm5hbWUgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoIW5hbWUgfHwgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcy5oYXMobmFtZSkpIHJldHVybjtcblx0dHJ5IHtcblx0XHRDU1MucmVnaXN0ZXJQcm9wZXJ0eShvcHRpb25zKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICghKFN0cmluZyhlPy5uYW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkgPT09IFwiaW52YWxpZG1vZGlmaWNhdGlvbmVycm9yXCIpKSBjb25zb2xlLndhcm4oZSk7XG5cdH0gZmluYWxseSB7XG5cdFx0X19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcy5hZGQobmFtZSk7XG5cdH1cbn0pO1xudmFyIF9fZXhwb3J0UHJvcGVydGllcyA9ICgpID0+IHt9O1xuXG4vLyBzcmMvYWdhdGUvRGV0ZWN0LnRzXG52YXIgaXNNb2JpbGUgPSAoKSA9PiB7XG5cdGxldCBjaGVjayA9IG5hdmlnYXRvcj8udXNlckFnZW50RGF0YT8ubW9iaWxlIHx8IGZhbHNlO1xuXHQoKGEpID0+IHtcblx0XHRpZiAoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSkpIGNoZWNrID0gdHJ1ZTtcblx0fSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IGdsb2JhbFRoaXMub3BlcmEpO1xuXHRyZXR1cm4gY2hlY2s7XG59O1xudmFyIGRldGVjdE1vYmlsZSA9ICgpID0+IHtcblx0cmV0dXJuIFtcblx0XHQvQW5kcm9pZC9pLFxuXHRcdC93ZWJPUy9pLFxuXHRcdC9pUGhvbmUvaSxcblx0XHQvaVBhZC9pLFxuXHRcdC9pUG9kL2ksXG5cdFx0L0JsYWNrQmVycnkvaSxcblx0XHQvV2luZG93cyBQaG9uZS9pXG5cdF0uc29tZShuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoLmJpbmQobmF2aWdhdG9yLnVzZXJBZ2VudCkpICYmIChuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgfHwgXCJvbnRvdWNoc3RhcnRcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpICYmIGdsb2JhbFRoaXMubWF0Y2hNZWRpYShcIihwb2ludGVyOiBjb2Fyc2UpXCIpLm1hdGNoZXM7XG59O1xuXG4vLyBzcmMvYWdhdGUvVXRpbHMudHNcbnZhciBjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjayA9ICgpID0+ICh7XG5cdGRpZFRpbWVvdXQ6IGZhbHNlLFxuXHR0aW1lUmVtYWluaW5nOiAoKSA9PiAwXG59KTtcbnZhciBydW5XaGVuSWRsZSQxID0gKGNiLCB0aW1lb3V0ID0gMWUzKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2soY2IsIHsgdGltZW91dCB9KTtcblx0cmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gY2IoY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2soKSksIDApO1xufTtcbnZhciBnZXRPZmZzZXRQYXJlbnQgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gZWxlbWVudD8ub2Zmc2V0UGFyZW50ID8/IGVsZW1lbnQ/Lmhvc3Q7XG59O1xudmFyIGdldE9mZnNldFBhcmVudENoYWluID0gKGVsZW1lbnQpID0+IHtcblx0Y29uc3QgcGFyZW50cyA9IFtdO1xuXHRsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0Y29uc3QgcGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGN1cnJlbnQpO1xuXHRcdGlmIChwYXJlbnQgJiYgcGFyZW50IGluc3RhbmNlb2YgSFRNTEh0bWxFbGVtZW50KSBicmVhaztcblx0XHRpZiAoY3VycmVudCA9IHBhcmVudCkgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuXHR9XG5cdHJldHVybiBwYXJlbnRzO1xufTtcbnZhciBpc05lYXJseUlkZW50aXR5ID0gKG1hdHJpeCwgZXBzaWxvbiA9IDFlLTYpID0+IHtcblx0cmV0dXJuIE1hdGguYWJzKG1hdHJpeC5hIC0gMSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5iKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmMpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguZCAtIDEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguZSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5mKSA8IGVwc2lsb247XG59O1xudmFyIG1ha2VSQUZDeWNsZSA9ICgpID0+IHtcblx0Y29uc3QgY29udHJvbCA9IHtcblx0XHRjYW5jZWxlZDogZmFsc2UsXG5cdFx0ckFGczogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSxcblx0XHRsYXN0OiBudWxsLFxuXHRcdGNhbmNlbCgpIHtcblx0XHRcdHRoaXMuY2FuY2VsZWQgPSB0cnVlO1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXN0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0c2hlZHVsZShjYikge1xuXHRcdFx0dGhpcy5yQUZzLmFkZChjYik7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdH07XG5cdChhc3luYyAoKSA9PiB7XG5cdFx0d2hpbGUgKCFjb250cm9sPy5jYW5jZWxlZCkge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoKGNvbnRyb2w/LnJBRnM/LnZhbHVlcz8uKCkgPz8gW10pPy5tYXA/LigockFGKSA9PiBQcm9taXNlLnRyeShyQUYpPy5jYXRjaD8uKGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpKSkpO1xuXHRcdFx0Y29udHJvbC5yQUZzPy5jbGVhcj8uKCk7XG5cdFx0XHRpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPSBcInVuZGVmaW5lZFwiKSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0XHRcdGNvbnRyb2wubGFzdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXMpO1xuXHRcdFx0fSk7XG5cdFx0XHRlbHNlIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHtcblx0XHRcdFx0c2V0VGltZW91dChyZXMsIDE2KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSkoKTtcblx0cmV0dXJuIGNvbnRyb2w7XG59O1xudmFyIFJBRkJlaGF2aW9yID0gKHNoZWQgPSBtYWtlUkFGQ3ljbGUoKSkgPT4ge1xuXHRyZXR1cm4gKGNiKSA9PiBzaGVkLnNoZWR1bGUoY2IpO1xufTtcbnZhciBST09UID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50IDogbnVsbDtcbnZhciBzZXRBdHRyaWJ1dGVzSWZOdWxsID0gKGVsZW1lbnQsIGF0dHJzID0ge30pID0+IHtcblx0aWYgKCFhdHRycyB8fCB0eXBlb2YgYXR0cnMgIT0gXCJvYmplY3RcIiB8fCAhZWxlbWVudCkgcmV0dXJuO1xuXHRyZXR1cm4gQXJyYXkuZnJvbShPYmplY3QuZW50cmllcyhhdHRycykpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuXHRcdGNvbnN0IG9sZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHRlbHNlIGlmICh2YWx1ZSAhPSBvbGQpIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIG9sZCA9PSBcIlwiID8gdmFsdWUgPz8gb2xkIDogb2xkID8/IHZhbHVlKTtcblx0fSk7XG59O1xudmFyIHNldEF0dHJpYnV0ZXMgPSAoZWxlbWVudCwgYXR0cnMgPSB7fSkgPT4ge1xuXHRyZXR1cm4gQXJyYXkuZnJvbShPYmplY3QuZW50cmllcyhhdHRycykpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHRlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID8/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpKTtcblx0fSk7XG59O1xudmFyIHRocm90dGxlTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBzZXRJZGxlSW50ZXJ2YWwgPSAoY2IsIHRpbWVvdXQgPSAxZTMsIC4uLmFyZ3MpID0+IHtcblx0Y29uc3Qgc3RhdHVzID0ge1xuXHRcdHJ1bm5pbmc6IHRydWUsXG5cdFx0Y2FuY2VsOiAoKSA9PiB7XG5cdFx0XHRzdGF0dXMucnVubmluZyA9IGZhbHNlO1xuXHRcdH1cblx0fTtcblx0cnVuV2hlbklkbGUkMShhc3luYyAoKSA9PiB7XG5cdFx0aWYgKCFjYiB8fCB0eXBlb2YgY2IgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdFx0d2hpbGUgKHN0YXR1cy5ydW5uaW5nKSB7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbChbUHJvbWlzZS50cnkoY2IsIC4uLmFyZ3MpLCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCB0aW1lb3V0KSldKS5jYXRjaD8uKGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpKTtcblx0XHRcdGF3YWl0IFByb21pc2UuYW55KFtuZXcgUHJvbWlzZSgocikgPT4gcnVuV2hlbklkbGUkMShyLCB0aW1lb3V0KSksIG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHRpbWVvdXQpKV0pO1xuXHRcdH1cblx0XHRzdGF0dXMuY2FuY2VsID0gKCkgPT4ge307XG5cdH0sIHRpbWVvdXQpO1xuXHRyZXR1cm4gc3RhdHVzPy5jYW5jZWw7XG59O1xuaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFzeW5jICgpID0+IHtcblx0d2hpbGUgKHRydWUpIHtcblx0XHR0aHJvdHRsZU1hcC5mb3JFYWNoKChjYikgPT4gY2I/LigpKTtcblx0XHRhd2FpdCBuZXcgUHJvbWlzZSgocikgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHIpKTtcblx0fVxufSk7XG52YXIgYm9yZGVyQm94V2lkdGggPSBTeW1ib2woXCJAYm9yZGVyLWJveC13aWR0aFwiKTtcbnZhciBib3JkZXJCb3hIZWlnaHQgPSBTeW1ib2woXCJAYm9yZGVyLWJveC1oZWlnaHRcIik7XG52YXIgY29udGVudEJveFdpZHRoID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LXdpZHRoXCIpO1xudmFyIGNvbnRlbnRCb3hIZWlnaHQgPSBTeW1ib2woXCJAY29udGVudC1ib3gtaGVpZ2h0XCIpO1xudmFyIG9uQm9yZGVyT2JzZXJ2ZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9uQ29udGVudE9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBkb0NvbnRlbnRPYnNlcnZlID0gKGVsZW1lbnQsIGNiID0gKCkgPT4ge30pID0+IHtcblx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuXHRpZiAoIW9uQ29udGVudE9ic2VydmUuaGFzKGVsZW1lbnQpKSB7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94V2lkdGhdID0gZWxlbWVudC5jbGllbnRXaWR0aDtcblx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRCb3hTaXplID0gZW50cnkuY29udGVudEJveFNpemVbMF07XG5cdFx0XHRcdGlmIChjb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IE1hdGgubWluKGNvbnRlbnRCb3hTaXplLmlubGluZVNpemUsIGVsZW1lbnQuY2xpZW50V2lkdGgpO1xuXHRcdFx0XHRcdGVsZW1lbnRbY29udGVudEJveEhlaWdodF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Db250ZW50T2JzZXJ2ZS5zZXQoZWxlbWVudCwgb2JzZXJ2ZXIpO1xuXHRcdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJjb250ZW50LWJveFwiIH0pO1xuXHR9XG59O1xudmFyIGRvQm9yZGVyT2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkJvcmRlck9ic2VydmUuaGFzKGVsZW1lbnQpKSB7XG5cdFx0ZWxlbWVudFtib3JkZXJCb3hXaWR0aF0gPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94SGVpZ2h0XSA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5ib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGJvcmRlckJveFNpemUgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50Lm9mZnNldFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBNYXRoLm1pbihib3JkZXJCb3hTaXplLmJsb2NrU2l6ZSwgZWxlbWVudC5vZmZzZXRIZWlnaHQpO1xuXHRcdFx0XHRcdGNiPy4oZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRvbkJvcmRlck9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiYm9yZGVyLWJveFwiIH0pO1xuXHR9XG59O1xudmFyIHVybCA9ICh0eXBlLCAuLi5zb3VyY2UpID0+IHtcblx0cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2Ioc291cmNlLCB7IHR5cGUgfSkpO1xufTtcbnZhciBodG1sID0gKHNvdXJjZSwgdHlwZSA9IFwidGV4dC9odG1sXCIpID0+IHtcblx0Y29uc3QgcGFyc2VkID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzb3VyY2UsIHR5cGUpO1xuXHRyZXR1cm4gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCJ0ZW1wbGF0ZVwiKSA/PyBwYXJzZWQucXVlcnlTZWxlY3RvcihcIipcIik7XG59O1xudmFyIHNldENoZWNrZWQgPSAoaW5wdXQsIHZhbHVlLCBldikgPT4ge1xuXHRpZiAodmFsdWUgIT0gbnVsbCAmJiBpbnB1dC5jaGVja2VkICE9IHZhbHVlKSB7XG5cdFx0aWYgKGlucHV0Py5bXCJ0eXBlXCJdID09IFwiY2hlY2tib3hcIiB8fCBpbnB1dD8uW1widHlwZVwiXSA9PSBcInJhZGlvXCIgJiYgIWlucHV0Py5jaGVja2VkKSB7XG5cdFx0XHRpbnB1dD8uY2xpY2s/LigpO1xuXHRcdFx0ZXY/LnByZXZlbnREZWZhdWx0Py4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5wdXQuY2hlY2tlZCA9ICEhdmFsdWU7XG5cdFx0XHRpbnB1dD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBFdmVudChcImNoYW5nZVwiLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdH1cbn07XG52YXIgaXNWYWxpZFBhcmVudCA9IChwYXJlbnQpID0+IHtcblx0cmV0dXJuIHBhcmVudCAhPSBudWxsICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmICEocGFyZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCB8fCBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MQm9keUVsZW1lbnQpID8gcGFyZW50IDogbnVsbDtcbn07XG52YXIgaW5kZXhPZiA9IChlbGVtZW50LCBub2RlKSA9PiB7XG5cdGlmIChlbGVtZW50ID09IG51bGwgfHwgbm9kZSA9PSBudWxsKSByZXR1cm4gLTE7XG5cdHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQ/LmNoaWxkTm9kZXMgPz8gW10pPy5pbmRleE9mPy4obm9kZSkgPz8gLTE7XG59O1xudmFyIE1BVENIID0gXCIoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopXCI7XG52YXIgUkVHRVggPSBcIl4oPzpcIiArIE1BVENIICsgXCIpfF4jXCIgKyBNQVRDSCArIFwifF5cXFxcLlwiICsgTUFUQ0ggKyBcInxeXFxcXFtcIiArIE1BVENIICsgXCIoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCI7XG52YXIgY3JlYXRlRWxlbWVudFZhbmlsbGEgPSAoc2VsZWN0b3IpID0+IHtcblx0aWYgKHNlbGVjdG9yID09IFwiOmZyYWdtZW50OlwiKSByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50LmJpbmQoZG9jdW1lbnQpO1xuXHRmb3IgKHZhciBub2RlID0gY3JlYXRlKFwiZGl2XCIpLCBtYXRjaCwgY2xhc3NOYW1lID0gXCJcIjsgc2VsZWN0b3IgJiYgKG1hdGNoID0gc2VsZWN0b3IubWF0Y2goXCJeKD86KC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSl8XiMoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcLigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKil8XlxcXFxbKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSg/OihbKiR8fl5dPz0pKFtcXFwiJ10pKCg/Oig/PShcXFxcXFxcXD8pKVxcXFw4LikqPylcXFxcNik/XFxcXF1cIikpOykge1xuXHRcdGlmIChtYXRjaFsxXSkgbm9kZSA9IGNyZWF0ZShtYXRjaFsxXSk7XG5cdFx0aWYgKG1hdGNoWzJdKSBub2RlLmlkID0gbWF0Y2hbMl07XG5cdFx0aWYgKG1hdGNoWzNdKSBjbGFzc05hbWUgKz0gXCIgXCIgKyBtYXRjaFszXTtcblx0XHRpZiAobWF0Y2hbNF0pIG5vZGUuc2V0QXR0cmlidXRlKG1hdGNoWzRdLCBtYXRjaFs3XSB8fCBcIlwiKTtcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG5cdH1cblx0aWYgKGNsYXNzTmFtZSkgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWUuc2xpY2UoMSk7XG5cdHJldHVybiBub2RlO1xufTtcbnZhciBpc0VsZW1lbnQgPSAoZWwpID0+IHtcblx0cmV0dXJuIGVsICE9IG51bGwgJiYgKGVsIGluc3RhbmNlb2YgTm9kZSB8fCBlbCBpbnN0YW5jZW9mIFRleHQgfHwgZWwgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgQ29tbWVudCB8fCBlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgPyBlbCA6IG51bGw7XG59O1xudmFyIGluY2x1ZGVTZWxmID0gKHRhcmdldCwgc2VsZWN0b3IpID0+IHtcblx0Y29uc3Qgc2VsID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IudHJpbSgpIDogXCJcIjtcblx0aWYgKCFzZWwgfHwgIXRhcmdldCkgcmV0dXJuIHRhcmdldCA/PyBudWxsO1xuXHR0cnkge1xuXHRcdHJldHVybiB0YXJnZXQucXVlcnlTZWxlY3RvcihzZWwpID8/ICh0YXJnZXQubWF0Y2hlcyhzZWwpID8gdGFyZ2V0IDogbnVsbCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xudmFyIGhhc1BhcmVudCA9IChjdXJyZW50LCBwYXJlbnQpID0+IHtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRpZiAoIShjdXJyZW50Py5lbGVtZW50ID8/IGN1cnJlbnQpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKChjdXJyZW50Py5lbGVtZW50ID8/IGN1cnJlbnQpID09PSAocGFyZW50Py5lbGVtZW50ID8/IHBhcmVudCkpIHJldHVybiB0cnVlO1xuXHRcdGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQgPz8gKGN1cnJlbnQucGFyZW50Tm9kZSA9PSBjdXJyZW50Py5nZXRSb290Tm9kZT8uKHsgY29tcG9zZWQ6IHRydWUgfSkgPyBjdXJyZW50Py5nZXRSb290Tm9kZT8uKHsgY29tcG9zZWQ6IHRydWUgfSk/Lmhvc3QgOiBjdXJyZW50Py5wYXJlbnROb2RlKTtcblx0fVxufTtcbnZhciBwYXNzaXZlT3B0cyA9IHt9O1xuZnVuY3Rpb24gYWRkRXZlbnQodGFyZ2V0LCB0eXBlLCBjYiwgb3B0cyA9IHBhc3NpdmVPcHRzKSB7XG5cdHRhcmdldD8uYWRkRXZlbnRMaXN0ZW5lcj8uKHR5cGUsIGNiLCBvcHRzKTtcblx0Y29uc3Qgd3IgPSB0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHRhcmdldCA9PSBcImZ1bmN0aW9uXCIgJiYgIXRhcmdldD8uZGVyZWYgPyBuZXcgV2Vha1JlZih0YXJnZXQpIDogdGFyZ2V0O1xuXHRyZXR1cm4gKCkgPT4gd3I/LmRlcmVmPy4oKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKHR5cGUsIGNiLCBvcHRzKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG52YXIgYWRkRXZlbnRzID0gKHJvb3QsIGhhbmRsZXJzKSA9PiB7XG5cdHJvb3QgPSByb290IGluc3RhbmNlb2YgV2Vha1JlZiA/IHJvb3QuZGVyZWYoKSA6IHJvb3Q7XG5cdHJldHVybiBbLi4uT2JqZWN0LmVudHJpZXMoaGFuZGxlcnMpXS5tYXA/LigoW25hbWUsIGNiXSkgPT4gQXJyYXkuaXNBcnJheShjYikgPyBhZGRFdmVudChyb290LCBuYW1lLCAuLi5jYikgOiBhZGRFdmVudChyb290LCBuYW1lLCBjYikpO1xufTtcbnZhciBhZGRFdmVudHNMaXN0ID0gKGVsLCBldmVudHMpID0+IHtcblx0aWYgKGV2ZW50cykge1xuXHRcdGxldCBlbnRyaWVzID0gZXZlbnRzO1xuXHRcdGlmIChldmVudHMgaW5zdGFuY2VvZiBNYXApIGVudHJpZXMgPSBbLi4uZXZlbnRzLmVudHJpZXMoKV07XG5cdFx0ZWxzZSBlbnRyaWVzID0gWy4uLk9iamVjdC5lbnRyaWVzKGV2ZW50cyldO1xuXHRcdHJldHVybiBlbnRyaWVzLm1hcCgoW25hbWUsIGxpc3RdKSA9PiAoKGlzQXJyYXlPckl0ZXJhYmxlKGxpc3QpID8gWy4uLmxpc3RdIDogbGlzdCkgPz8gW10pPy5tYXA/LigoY2JzKSA9PiB7XG5cdFx0XHRyZXR1cm4gYWRkRXZlbnQoZWwsIG5hbWUsIGNicyk7XG5cdFx0fSkpO1xuXHR9XG59O1xudmFyIHJlbW92ZUV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gcmVtb3ZlRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogcmVtb3ZlRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgZ2V0RXZlbnRUYXJnZXQgPSAoZXYpID0+IHtcblx0aWYgKCFldikgcmV0dXJuIG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuIG5vZGU7XG5cdH1cblx0Y29uc3QgdGFyZ2V0ID0gZXY/LnRhcmdldDtcblx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiB0YXJnZXQ7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBjb250YWluc09yU2VsZiA9IChhLCBiLCBldikgPT4ge1xuXHRpZiAoYiA9PSBudWxsIHx8ICEoYiBpbnN0YW5jZW9mIE5vZGUpICYmIGI/LmVsZW1lbnQgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoYSA9PSBiIHx8IChhPy5lbGVtZW50ID8/IGEpID09IChiPy5lbGVtZW50ID8/IGIpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGNvbnN0IGFFbCA9IGE/LmVsZW1lbnQgPz8gYTtcblx0XHRjb25zdCBiRWwgPSBiPy5lbGVtZW50ID8/IGI7XG5cdFx0aWYgKHBhdGguaW5jbHVkZXMoYUVsKSAmJiBwYXRoLmluY2x1ZGVzKGJFbCkpIHtcblx0XHRcdGNvbnN0IGFJbmRleCA9IHBhdGguaW5kZXhPZihhRWwpO1xuXHRcdFx0Y29uc3QgYkluZGV4ID0gcGF0aC5pbmRleE9mKGJFbCk7XG5cdFx0XHRpZiAoYkluZGV4ID49IDAgJiYgYUluZGV4ID49IDAgJiYgYkluZGV4IDwgYUluZGV4KSByZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKGE/LmNvbnRhaW5zPy4oYj8uZWxlbWVudCA/PyBiKSB8fCBhPy5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0ID09IChiPy5lbGVtZW50ID8/IGIpKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIGZhbHNlO1xufTtcbnZhciBNT0NFbGVtZW50ID0gKGVsZW1lbnQsIHNlbGVjdG9yLCBldikgPT4ge1xuXHRjb25zdCBzZWwgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBzZWxlY3Rvci50cmltKCkgOiBcIlwiO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGVsZW1lbnQgPz8gbnVsbDtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBwYXRoKSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB0cnkge1xuXHRcdFx0aWYgKG5vZGUubWF0Y2hlcz8uKHNlbCkpIHJldHVybiBub2RlO1xuXHRcdH0gY2F0Y2gge31cblx0fVxuXHRsZXQgc2VsZiA9IG51bGw7XG5cdGxldCBob3N0TWF0Y2hlZCA9IG51bGw7XG5cdGxldCBjbG9zZXN0ID0gbnVsbDtcblx0dHJ5IHtcblx0XHRzZWxmID0gZWxlbWVudD8ubWF0Y2hlcz8uKHNlbCkgPyBlbGVtZW50IDogbnVsbDtcblx0XHRjb25zdCBob3N0ID0gKGVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkgPz8gZWxlbWVudD8ucGFyZW50RWxlbWVudD8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSk/Lmhvc3Q7XG5cdFx0aG9zdE1hdGNoZWQgPSBob3N0Py5tYXRjaGVzPy4oc2VsKSA/IGhvc3QgOiBudWxsO1xuXHRcdGNsb3Nlc3QgPSBlbGVtZW50Py5jbG9zZXN0Py4oc2VsKSA/PyBzZWxmPy5jbG9zZXN0Py4oc2VsKSA/PyBob3N0TWF0Y2hlZD8uY2xvc2VzdD8uKHNlbCkgPz8gbnVsbDtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gc2VsZiA/PyBjbG9zZXN0ID8/IGhvc3RNYXRjaGVkO1xufTtcbnZhciBNT0MgPSAoZWxlbWVudCwgc2VsZWN0b3IpID0+IHtcblx0cmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvcik7XG59O1xudmFyIGlzSW5Gb2N1cyA9IChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCwgZGlyID0gXCJwYXJlbnRcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKGVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmICFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSh7XG5cdFx0Y2hlY2tPcGFjaXR5OiB0cnVlLFxuXHRcdGNoZWNrVmlzaWJpbGl0eUNTUzogdHJ1ZVxuXHR9KSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoIWVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmIGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsICYmIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gIT09IFwiZml4ZWRcIikgcmV0dXJuIGZhbHNlO1xuXHRsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0d2hpbGUgKGFjdGl2ZSAmJiBhY3RpdmUuc2hhZG93Um9vdCAmJiBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50KSBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuXHRjb25zdCBpc0ZvY3VzZWQgPSBhY3RpdmUgPT09IGVsZW1lbnQgfHwgaGFzUGFyZW50KGFjdGl2ZSwgZWxlbWVudCk7XG5cdGNvbnN0IGlzSG92ZXJlZCA9IGVsZW1lbnQubWF0Y2hlcyhcIjpob3ZlclwiKTtcblx0aWYgKCFpc0ZvY3VzZWQgJiYgIWlzSG92ZXJlZCAmJiAhc2VsZWN0b3JPckVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKHNlbGVjdG9yT3JFbGVtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBzZWxlY3Rvck9yRWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKGRpciA9PT0gXCJwYXJlbnRcIikgcmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gaXNGb2N1c2VkID8gYWN0aXZlIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiOmhvdmVyXCIpIHx8IGVsZW1lbnQ7XG5cdFx0XHRcdGNvbnN0IGFsdENuZCA9ICEhTU9DRWxlbWVudCh0YXJnZXQsIHNlbGVjdG9yT3JFbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I/LihzZWxlY3Rvck9yRWxlbWVudCkgIT0gbnVsbCB8fCBlbGVtZW50Py5tYXRjaGVzPy4oc2VsZWN0b3JPckVsZW1lbnQpIHx8IGFsdENuZDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHNlbGVjdG9yT3JFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiBoYXNQYXJlbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpIHx8IGZhbHNlO1xuXHRcdFx0ZWxzZSByZXR1cm4gaGFzUGFyZW50KHNlbGVjdG9yT3JFbGVtZW50LCBlbGVtZW50KSB8fCBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyBzcmMvYWdhdGUvWm9vbS50c1xudmFyIGdldFpvb20gPSAoKSA9PiB7XG5cdGlmIChcImN1cnJlbnRDU1Nab29tXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdHJldHVybiBwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zY2FsaW5nXCIpIHx8IFwiMVwiKSB8fCAxO1xufTtcbnZhciB6b29tVmFsdWVzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xudmFyIHpvb21WYWx1ZXMgPSBnbG9iYWxUaGlzW3pvb21WYWx1ZXNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB6b29tT2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gem9vbVZhbHVlcy5nZXRPckluc2VydENvbXB1dGVkKGVsZW1lbnQsICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiLnVpLW9yaWVudGJveFwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCIudWktb3JpZW50Ym94XCIpIHx8IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYgKGNvbnRhaW5lcj8uem9vbSkgcmV0dXJuIGNvbnRhaW5lcj8uem9vbSB8fCAxO1xuXHRcdGlmIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgcmV0dXJuIGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdH0pO1xufTtcbnZhciBjaGFuZ2Vab29tID0gKHNjYWxlID0gMSkgPT4ge1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNjYWxpbmdcIiwgc2NhbGUpO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzY2FsaW5nXCIsIHtcblx0XHRkZXRhaWw6IHsgem9vbTogc2NhbGUgfSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpO1xuXHRyZXR1cm4gc2NhbGU7XG59O1xudmFyIGZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gIT0gbnVsbCA/IDEgOiB6b29tT2YoZWxlbWVudCkpIHx8IDE7XG59O1xudmFyIHVuZml4ZWRDbGllbnRab29tID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSA9PSBudWxsID8gMSA6IGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tKSB8fCAxO1xufTtcbnZhciBvcmllbnRPZiA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IChlbGVtZW50Py5tYXRjaGVzPy4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpID8gZWxlbWVudCA6IG51bGwpIHx8IGVsZW1lbnQ/LmNsb3Nlc3Q/LihcIltvcmllbnRdLCBbZGF0YS1taXhpbj1cXFwidWktb3JpZW50Ym94XFxcIl1cIikgfHwgZWxlbWVudDtcblx0aWYgKGNvbnRhaW5lcj8uaGFzQXR0cmlidXRlPy4oXCJvcmllbnRcIikpIHJldHVybiBwYXJzZUludChjb250YWluZXI/LmdldEF0dHJpYnV0ZT8uKFwib3JpZW50XCIpIHx8IFwiMFwiKSB8fCAwO1xuXHRpZiAoY29udGFpbmVyPy5vcmllbnQgIT0gbnVsbCAmJiBOdW1iZXIuaXNGaW5pdGUoTnVtYmVyKGNvbnRhaW5lci5vcmllbnQpKSkgcmV0dXJuIE51bWJlcihjb250YWluZXIub3JpZW50KSB8fCAwO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGNvbnRhaW5lcj8uc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcIi0tb3JpZW50XCIpIHx8ICh0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSA9PT0gXCJmdW5jdGlvblwiICYmIGNvbnRhaW5lciA/IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1vcmllbnRcIikgOiBcIlwiKSB8fCBcIlwiO1xuXHRcdGNvbnN0IG4gPSBwYXJzZUludChTdHJpbmcocmF3KS50cmltKCksIDEwKTtcblx0XHRpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbjtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gMDtcbn07XG52YXIgZ2V0Qm91bmRpbmdPcmllbnRSZWN0ID0gKGVsZW1lbnQsIG9yaWVudCA9IG51bGwpID0+IHtcblx0Y29uc3Qgem9vbSA9IHVuZml4ZWRDbGllbnRab29tKGVsZW1lbnQpIHx8IDE7XG5cdGNvbnN0IGJveCA9IGVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XG5cdGNvbnN0IG5ieCA9IHtcblx0XHRsZWZ0OiBib3g/LmxlZnQgLyB6b29tLFxuXHRcdHJpZ2h0OiBib3g/LnJpZ2h0IC8gem9vbSxcblx0XHR0b3A6IGJveD8udG9wIC8gem9vbSxcblx0XHRib3R0b206IGJveD8uYm90dG9tIC8gem9vbSxcblx0XHR3aWR0aDogYm94Py53aWR0aCAvIHpvb20sXG5cdFx0aGVpZ2h0OiBib3g/LmhlaWdodCAvIHpvb21cblx0fTtcblx0Y29uc3Qgb3JfaSA9IG9yaWVudCA/PyAob3JpZW50T2YoZWxlbWVudCkgfHwgMCk7XG5cdGNvbnN0IHZ2ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGw7XG5cdGNvbnN0IHNpemUgPSBbKCh2dj8ud2lkdGggPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRXaWR0aCA/PyB3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMSkgLyB6b29tLCAoKHZ2Py5oZWlnaHQgPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRIZWlnaHQgPz8gd2luZG93LmlubmVySGVpZ2h0KSB8fCAxKSAvIHpvb21dO1xuXHRjb25zdCBbbGVmdF8sIHRvcF9dID0gY3Z0X2NzX3RvX29zKFtuYngubGVmdCwgbmJ4LnRvcF0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbcmlnaHRfLCBib3R0b21fXSA9IGN2dF9jc190b19vcyhbbmJ4LnJpZ2h0LCBuYnguYm90dG9tXSwgc2l6ZSwgb3JfaSk7XG5cdGNvbnN0IFtsZWZ0LCByaWdodF0gPSBvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gW2xlZnRfLCByaWdodF9dIDogW3JpZ2h0XywgbGVmdF9dO1xuXHRjb25zdCBbdG9wLCBib3R0b21dID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMSA/IFt0b3BfLCBib3R0b21fXSA6IFtib3R0b21fLCB0b3BfXTtcblx0Y29uc3QgW3dpZHRoLCBoZWlnaHRdID0gb3JfaSAlIDIgPyBbbmJ4LmhlaWdodCwgbmJ4LndpZHRoXSA6IFtuYngud2lkdGgsIG5ieC5oZWlnaHRdO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aCxcblx0XHRoZWlnaHRcblx0fTtcbn07XG52YXIgYmJ3ID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBiYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtib3JkZXJCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoIDogZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xudmFyIGNidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQgOiBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBjYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQ7XG5cbi8vIHNyYy9hZ2F0ZS9WaWV3cG9ydC50c1xudmFyIHJ1bldoZW5JZGxlID0gKGNiLCB0aW1lb3V0ID0gMTAwKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2soY2IsIHsgdGltZW91dCB9KTtcblx0cmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gY2Ioe1xuXHRcdGRpZFRpbWVvdXQ6IGZhbHNlLFxuXHRcdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcblx0fSksIDApO1xufTtcbnZhciBLRVlCT0FSRF9PVkVSTEFZX1BYID0gODA7XG52YXIgY2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQgPSAwO1xudmFyIGNhcGFjaXRvcktleWJvYXJkQm91bmQgPSBmYWxzZTtcbnZhciB3aW5kb3dLZXlib2FyZEJvdW5kID0gZmFsc2U7XG52YXIgdmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQgPSBmYWxzZTtcbnZhciBuYXRpdmVEaXNwbGF5ID0gbnVsbDtcbnZhciBuYXRpdmVEaXNwbGF5Qm91bmQgPSBmYWxzZTtcbnZhciBuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCA9IGZhbHNlO1xudmFyIGlzTmF0aXZlQ2FwYWNpdG9ySG9zdCA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LmN3c3BOYXRpdmVTaGVsbCA9PT0gXCJjYXBhY2l0b3JcIikgcmV0dXJuIHRydWU7XG5cdFx0Y29uc3QgY2FwID0gZ2xvYmFsVGhpcy5DYXBhY2l0b3I7XG5cdFx0cmV0dXJuIHR5cGVvZiBjYXA/LmlzTmF0aXZlUGxhdGZvcm0gPT09IFwiZnVuY3Rpb25cIiAmJiBCb29sZWFuKGNhcC5pc05hdGl2ZVBsYXRmb3JtKCkpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgcmVhZEN3c0JyaWRnZSA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZ2xvYmFsVGhpcy5DYXBhY2l0b3I/LlBsdWdpbnM/LkN3c0JyaWRnZSA/PyBudWxsO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBwYXJzZU5hdGl2ZURpc3BsYXkgPSAoaW5mbykgPT4ge1xuXHRpZiAoIWluZm8pIHJldHVybiBudWxsO1xuXHRjb25zdCB3aW5kb3dXID0gTnVtYmVyKGluZm8ud2luZG93V2lkdGhDc3MpIHx8IDA7XG5cdGNvbnN0IHdpbmRvd0ggPSBOdW1iZXIoaW5mby53aW5kb3dIZWlnaHRDc3MpIHx8IDA7XG5cdGNvbnN0IGRpc3BsYXlXID0gTnVtYmVyKGluZm8uZGlzcGxheVdpZHRoQ3NzKSB8fCB3aW5kb3dXO1xuXHRjb25zdCBkaXNwbGF5SCA9IE51bWJlcihpbmZvLmRpc3BsYXlIZWlnaHRDc3MpIHx8IHdpbmRvd0g7XG5cdGNvbnN0IHcgPSB3aW5kb3dXIHx8IGRpc3BsYXlXO1xuXHRjb25zdCBoID0gd2luZG93SCB8fCBkaXNwbGF5SDtcblx0aWYgKHcgPD0gMCB8fCBoIDw9IDApIHJldHVybiBudWxsO1xuXHRjb25zdCBkZW5zaXR5ID0gTnVtYmVyKGluZm8uZGVuc2l0eSkgfHwgMDtcblx0cmV0dXJuIHtcblx0XHR3aW5kb3dXaWR0aENzczogdyxcblx0XHR3aW5kb3dIZWlnaHRDc3M6IGgsXG5cdFx0ZGlzcGxheVdpZHRoQ3NzOiBkaXNwbGF5VyB8fCB3LFxuXHRcdGRpc3BsYXlIZWlnaHRDc3M6IGRpc3BsYXlIIHx8IGgsXG5cdFx0ZGVuc2l0eSxcblx0XHRkZW5zaXR5RHBpOiBOdW1iZXIoaW5mby5kZW5zaXR5RHBpKSB8fCAwLFxuXHRcdHhkcGk6IE51bWJlcihpbmZvLnhkcGkpIHx8IDAsXG5cdFx0eWRwaTogTnVtYmVyKGluZm8ueWRwaSkgfHwgMCxcblx0XHRwcGk6IE51bWJlcihpbmZvLnBwaSkgfHwgMCxcblx0XHRzY2FsZWREZW5zaXR5OiBOdW1iZXIoaW5mby5zY2FsZWREZW5zaXR5KSB8fCBkZW5zaXR5LFxuXHRcdGZvbnRTY2FsZTogTnVtYmVyKGluZm8uZm9udFNjYWxlKSB8fCAoZGVuc2l0eSA+IDAgPyAoTnVtYmVyKGluZm8uc2NhbGVkRGVuc2l0eSkgfHwgZGVuc2l0eSkgLyBkZW5zaXR5IDogMSlcblx0fTtcbn07XG52YXIgYXBwbHlOYXRpdmVEaXNwbGF5ID0gKGluZm8pID0+IHtcblx0Y29uc3QgbmV4dCA9IHBhcnNlTmF0aXZlRGlzcGxheShpbmZvKTtcblx0aWYgKCFuZXh0KSByZXR1cm47XG5cdGNvbnN0IHByZXYgPSBuYXRpdmVEaXNwbGF5O1xuXHRjb25zdCBzYW1lID0gQm9vbGVhbihwcmV2ICYmIHByZXYud2luZG93V2lkdGhDc3MgPT09IG5leHQud2luZG93V2lkdGhDc3MgJiYgcHJldi53aW5kb3dIZWlnaHRDc3MgPT09IG5leHQud2luZG93SGVpZ2h0Q3NzICYmIHByZXYuZGlzcGxheVdpZHRoQ3NzID09PSBuZXh0LmRpc3BsYXlXaWR0aENzcyAmJiBwcmV2LmRpc3BsYXlIZWlnaHRDc3MgPT09IG5leHQuZGlzcGxheUhlaWdodENzcyAmJiBwcmV2LmRlbnNpdHkgPT09IG5leHQuZGVuc2l0eSAmJiBwcmV2LmRlbnNpdHlEcGkgPT09IG5leHQuZGVuc2l0eURwaSAmJiBwcmV2LnBwaSA9PT0gbmV4dC5wcGkgJiYgcHJldi5mb250U2NhbGUgPT09IG5leHQuZm9udFNjYWxlKTtcblx0bmF0aXZlRGlzcGxheSA9IG5leHQ7XG5cdGlmICghc2FtZSkgdXBkYXRlVlAoKTtcbn07XG52YXIgcmVmcmVzaE5hdGl2ZURpc3BsYXkgPSAoKSA9PiB7XG5cdGlmICghaXNOYXRpdmVDYXBhY2l0b3JIb3N0KCkpIHJldHVybjtcblx0Y29uc3QgQnJpZGdlID0gcmVhZEN3c0JyaWRnZSgpO1xuXHRpZiAoIUJyaWRnZSkgcmV0dXJuO1xuXHQodHlwZW9mIEJyaWRnZS5nZXREaXNwbGF5TWV0cmljcyA9PT0gXCJmdW5jdGlvblwiID8gQnJpZGdlLmdldERpc3BsYXlNZXRyaWNzKCkgOiBCcmlkZ2UuZ2V0U2hlbGxJbmZvPy4oKSk/LnRoZW4oKGluZm8pID0+IGFwcGx5TmF0aXZlRGlzcGxheShpbmZvKSkuY2F0Y2goKCkgPT4ge30pO1xufTtcbnZhciBxdWV1ZU5hdGl2ZURpc3BsYXlSZWZyZXNoID0gKCkgPT4ge1xuXHRpZiAoIWlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpIHx8IG5hdGl2ZURpc3BsYXlSZWZyZXNoUXVldWVkKSByZXR1cm47XG5cdG5hdGl2ZURpc3BsYXlSZWZyZXNoUXVldWVkID0gdHJ1ZTtcblx0cnVuV2hlbklkbGUoKCkgPT4ge1xuXHRcdG5hdGl2ZURpc3BsYXlSZWZyZXNoUXVldWVkID0gZmFsc2U7XG5cdFx0YmluZE5hdGl2ZURpc3BsYXkoKTtcblx0XHRyZWZyZXNoTmF0aXZlRGlzcGxheSgpO1xuXHR9LCA4MCk7XG59O1xudmFyIGJpbmROYXRpdmVEaXNwbGF5ID0gKCkgPT4ge1xuXHRpZiAobmF0aXZlRGlzcGxheUJvdW5kIHx8IHR5cGVvZiBnbG9iYWxUaGlzID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdGlmICghaXNOYXRpdmVDYXBhY2l0b3JIb3N0KCkpIHJldHVybjtcblx0aWYgKCFyZWFkQ3dzQnJpZGdlKCkpIHJldHVybjtcblx0bmF0aXZlRGlzcGxheUJvdW5kID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRjb25zdCBjYWNoZWQgPSBnbG9iYWxUaGlzLndpbmRvdz8uX19DV1NfU0hFTExfSU5GT19fO1xuXHRcdGlmIChjYWNoZWQpIGFwcGx5TmF0aXZlRGlzcGxheShjYWNoZWQpO1xuXHR9IGNhdGNoIHt9XG5cdHJlZnJlc2hOYXRpdmVEaXNwbGF5KCk7XG59O1xudmFyIHZpcnR1YWxLZXlib2FyZCA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I/LnZpcnR1YWxLZXlib2FyZCA/PyBudWxsO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBJTlRFUkFDVElWRV9XSURHRVQgPSBcImludGVyYWN0aXZlLXdpZGdldD1vdmVybGF5cy1jb250ZW50XCI7XG52YXIgVklFV1BPUlRfRklUID0gXCJ2aWV3cG9ydC1maXQ9Y292ZXJcIjtcbnZhciBlbnN1cmVWaWV3cG9ydEludGVyYWN0aXZlV2lkZ2V0T3ZlcmxheSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRjb25zdCBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdGlmICghaGVhZCkgcmV0dXJuO1xuXHRsZXQgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9XFxcInZpZXdwb3J0XFxcIl1cIik7XG5cdGlmICghbWV0YSkge1xuXHRcdG1ldGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcblx0XHRtZXRhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ2aWV3cG9ydFwiKTtcblx0XHRtZXRhLmNvbnRlbnQgPSBgd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgJHtWSUVXUE9SVF9GSVR9LCAke0lOVEVSQUNUSVZFX1dJREdFVH1gO1xuXHRcdGhlYWQubW92ZUJlZm9yZShtZXRhLCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybjtcblx0fVxuXHRsZXQgY29udGVudCA9IFN0cmluZyhtZXRhLmNvbnRlbnQgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoIS9pbnRlcmFjdGl2ZS13aWRnZXRcXHMqPVxccypvdmVybGF5cy1jb250ZW50L2kudGVzdChjb250ZW50KSkge1xuXHRcdGlmICgvaW50ZXJhY3RpdmUtd2lkZ2V0XFxzKj0vaS50ZXN0KGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9pbnRlcmFjdGl2ZS13aWRnZXRcXHMqPVxccypbYS16LV0rL2ksIElOVEVSQUNUSVZFX1dJREdFVCk7XG5cdFx0ZWxzZSBjb250ZW50ID0gY29udGVudCA/IGAke2NvbnRlbnQucmVwbGFjZSgvLFxccyokLywgXCJcIil9LCAke0lOVEVSQUNUSVZFX1dJREdFVH1gIDogSU5URVJBQ1RJVkVfV0lER0VUO1xuXHR9XG5cdGlmICghL3ZpZXdwb3J0LWZpdFxccyo9XFxzKmNvdmVyL2kudGVzdChjb250ZW50KSkge1xuXHRcdGlmICgvdmlld3BvcnQtZml0XFxzKj0vaS50ZXN0KGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC92aWV3cG9ydC1maXRcXHMqPVxccypbYS16LV0rL2ksIFZJRVdQT1JUX0ZJVCk7XG5cdFx0ZWxzZSBjb250ZW50ID0gY29udGVudCA/IGAke2NvbnRlbnQucmVwbGFjZSgvLFxccyokLywgXCJcIil9LCAke1ZJRVdQT1JUX0ZJVH1gIDogVklFV1BPUlRfRklUO1xuXHR9XG5cdGlmIChjb250ZW50ICE9PSBTdHJpbmcobWV0YS5jb250ZW50IHx8IFwiXCIpLnRyaW0oKSkgbWV0YS5jb250ZW50ID0gY29udGVudDtcbn07XG52YXIgZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSA9ICgpID0+IHtcblx0ZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkoKTtcblx0Y29uc3QgdmsgPSB2aXJ0dWFsS2V5Ym9hcmQoKTtcblx0aWYgKCF2aykgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGlmICh2ay5vdmVybGF5c0NvbnRlbnQgIT09IHRydWUpIHZrLm92ZXJsYXlzQ29udGVudCA9IHRydWU7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgZGVlcEFjdGl2ZUVsZW1lbnQgPSAoKSA9PiB7XG5cdGxldCBlbCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgOiBudWxsO1xuXHR3aGlsZSAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBlbC5zaGFkb3dSb290Py5hY3RpdmVFbGVtZW50KSBlbCA9IGVsLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBpc0ltZVRhcmdldCA9IChlbCkgPT4ge1xuXHRpZiAoIWVsIHx8ICEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybiBmYWxzZTtcblx0aWYgKGVsLmxvY2FsTmFtZSA9PT0gXCJjdy1yYXctZWRpdG9yXCIpIHJldHVybiB0cnVlO1xuXHRpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHJldHVybiB0cnVlO1xuXHRjb25zdCB0YWcgPSBlbC50YWdOYW1lO1xuXHRpZiAodGFnID09PSBcIlRFWFRBUkVBXCIgfHwgdGFnID09PSBcIlNFTEVDVFwiKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHRhZyAhPT0gXCJJTlBVVFwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHR5cGUgPSBTdHJpbmcoZWwudHlwZSB8fCBcInRleHRcIikudG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuICFbXG5cdFx0XCJidXR0b25cIixcblx0XHRcImNoZWNrYm94XCIsXG5cdFx0XCJyYWRpb1wiLFxuXHRcdFwiZmlsZVwiLFxuXHRcdFwic3VibWl0XCIsXG5cdFx0XCJyZXNldFwiLFxuXHRcdFwiaW1hZ2VcIixcblx0XHRcInJhbmdlXCIsXG5cdFx0XCJjb2xvclwiLFxuXHRcdFwiaGlkZGVuXCJcblx0XS5pbmNsdWRlcyh0eXBlKTtcbn07XG52YXIgaXNDb2xsYXBzZWRDYXJldCA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBzZWwgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcblx0XHRyZXR1cm4gQm9vbGVhbihzZWwgJiYgc2VsLnJhbmdlQ291bnQgJiYgc2VsLmlzQ29sbGFwc2VkKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn07XG52YXIgbGF5b3V0TG9ja09yaWVudCA9IFwiXCI7XG52YXIgbGF5b3V0TG9ja1cgPSAwO1xudmFyIGxheW91dExvY2tIID0gMDtcbnZhciBsYXN0U3RhYmxlS2V5Ym9hcmQgPSAwO1xudmFyIGlzTGFuZHNjYXBlID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHR5cGUgPSB0eXBlb2Ygc2NyZWVuICE9PSBcInVuZGVmaW5lZFwiID8gU3RyaW5nKHNjcmVlbi5vcmllbnRhdGlvbj8udHlwZSB8fCBcIlwiKSA6IFwiXCI7XG5cdFx0aWYgKHR5cGUuc3RhcnRzV2l0aChcImxhbmRzY2FwZVwiKSkgcmV0dXJuIHRydWU7XG5cdFx0aWYgKHR5cGUuc3RhcnRzV2l0aChcInBvcnRyYWl0XCIpKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIEJvb2xlYW4odHlwZW9mIG1hdGNoTWVkaWEgIT09IFwidW5kZWZpbmVkXCIgJiYgbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciByZWFkUGh5c2ljYWxTY3JlZW4gPSAoKSA9PiB7XG5cdGxldCB3ID0gMDtcblx0bGV0IGggPSAwO1xuXHRpZiAobmF0aXZlRGlzcGxheSkge1xuXHRcdHcgPSBuYXRpdmVEaXNwbGF5LndpbmRvd1dpZHRoQ3NzIHx8IG5hdGl2ZURpc3BsYXkuZGlzcGxheVdpZHRoQ3NzO1xuXHRcdGggPSBuYXRpdmVEaXNwbGF5LndpbmRvd0hlaWdodENzcyB8fCBuYXRpdmVEaXNwbGF5LmRpc3BsYXlIZWlnaHRDc3M7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHNjcmVlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGNvbnN0IHN3ID0gTnVtYmVyKHNjcmVlbi53aWR0aCkgfHwgMDtcblx0XHRjb25zdCBzaCA9IE51bWJlcihzY3JlZW4uaGVpZ2h0KSB8fCAwO1xuXHRcdGNvbnN0IGF3ID0gTnVtYmVyKHNjcmVlbi5hdmFpbFdpZHRoKSB8fCAwO1xuXHRcdGNvbnN0IGFoID0gTnVtYmVyKHNjcmVlbi5hdmFpbEhlaWdodCkgfHwgMDtcblx0XHR3ID0gTWF0aC5tYXgodywgc3csIGF3KTtcblx0XHRoID0gTWF0aC5tYXgoaCwgc2gsIGFoKTtcblx0fVxuXHRpZiAoIXcgJiYgIWgpIHJldHVybiB7XG5cdFx0d2lkdGg6IDAsXG5cdFx0aGVpZ2h0OiAwXG5cdH07XG5cdGNvbnN0IGxhbmRzY2FwZSA9IGlzTGFuZHNjYXBlKCk7XG5cdGNvbnN0IGJveExhbmRzY2FwZSA9IHcgPiAwICYmIGggPiAwICYmIHcgPiBoO1xuXHRpZiAobGFuZHNjYXBlICYmIHcgPiAwICYmIGggPiAwICYmIHcgPCBoKSByZXR1cm4ge1xuXHRcdHdpZHRoOiBoLFxuXHRcdGhlaWdodDogd1xuXHR9O1xuXHRpZiAoIWxhbmRzY2FwZSAmJiBib3hMYW5kc2NhcGUpIHJldHVybiB7XG5cdFx0d2lkdGg6IGgsXG5cdFx0aGVpZ2h0OiB3XG5cdH07XG5cdHJldHVybiB7XG5cdFx0d2lkdGg6IHcgfHwgaCxcblx0XHRoZWlnaHQ6IGggfHwgd1xuXHR9O1xufTtcbnZhciBjbGFtcFRvUGh5c2ljYWwgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuXHRjb25zdCBwaHlzID0gcmVhZFBoeXNpY2FsU2NyZWVuKCk7XG5cdGNvbnN0IGlubmVyVyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAgOiAwO1xuXHRjb25zdCBpbm5lckggPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCA6IDA7XG5cdGNvbnN0IHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuXHRjb25zdCBjbGllbnRXID0gTnVtYmVyKHJvb3Q/LmNsaWVudFdpZHRoKSB8fCAwO1xuXHRjb25zdCBjbGllbnRIID0gTnVtYmVyKHJvb3Q/LmNsaWVudEhlaWdodCkgfHwgMDtcblx0Y29uc3QgY2FwVyA9IE1hdGgubWF4KHBoeXMud2lkdGgsIGlubmVyVywgY2xpZW50Vyk7XG5cdGNvbnN0IGNhcEggPSBNYXRoLm1heChwaHlzLmhlaWdodCwgaW5uZXJILCBjbGllbnRIKTtcblx0cmV0dXJuIHtcblx0XHR3aWR0aDogY2FwVyA+IDAgPyBNYXRoLm1pbih3aWR0aCwgY2FwVykgOiB3aWR0aCxcblx0XHRoZWlnaHQ6IGNhcEggPiAwID8gTWF0aC5taW4oaGVpZ2h0LCBjYXBIKSA6IGhlaWdodFxuXHR9O1xufTtcbnZhciBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCA9ICh3aWR0aCwgaGVpZ2h0LCBsZWZ0ID0gMCwgdG9wID0gMCkgPT4ge1xuXHRjb25zdCBzYWZlV2lkdGggPSBNYXRoLm1heCgwLCBOdW1iZXIod2lkdGgpIHx8IDApO1xuXHRjb25zdCBzYWZlSGVpZ2h0ID0gTWF0aC5tYXgoMCwgTnVtYmVyKGhlaWdodCkgfHwgMCk7XG5cdGNvbnN0IHNhZmVMZWZ0ID0gTnVtYmVyKGxlZnQpIHx8IDA7XG5cdGNvbnN0IHNhZmVUb3AgPSBOdW1iZXIodG9wKSB8fCAwO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IHNhZmVMZWZ0LFxuXHRcdHRvcDogc2FmZVRvcCxcblx0XHRyaWdodDogc2FmZUxlZnQgKyBzYWZlV2lkdGgsXG5cdFx0Ym90dG9tOiBzYWZlVG9wICsgc2FmZUhlaWdodCxcblx0XHR3aWR0aDogc2FmZVdpZHRoLFxuXHRcdGhlaWdodDogc2FmZUhlaWdodFxuXHR9O1xufTtcbnZhciByZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoMCwgMCk7XG5cdGNvbnN0IHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuXHRyZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoTnVtYmVyKHJvb3Q/LmNsaWVudFdpZHRoKSB8fCBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAsIE51bWJlcihyb290Py5jbGllbnRIZWlnaHQpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDApO1xufTtcbnZhciByZWFkTGF5b3V0Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge1xuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMCxcblx0XHRrZXlib2FyZDogMFxuXHR9O1xuXHRjb25zdCB2diA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblx0Y29uc3QgaW5uZXJXID0gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwO1xuXHRjb25zdCBpbm5lckggPSBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dlcgPSBOdW1iZXIodnY/LndpZHRoKSB8fCAwO1xuXHRjb25zdCB2dkggPSBOdW1iZXIodnY/LmhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZUb3AgPSBOdW1iZXIodnY/Lm9mZnNldFRvcCkgfHwgMDtcblx0Y29uc3QgdmtIID0gTnVtYmVyKHZpcnR1YWxLZXlib2FyZCgpPy5ib3VuZGluZ0JveD8uaGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dk92ZXJsYXAgPSBpbm5lckggPiAwICYmIHZ2SCA+IDAgPyBpbm5lckggLSB2dkggLSB2dlRvcCA6IDA7XG5cdGNvbnN0IGNhcEggPSBjYXBhY2l0b3JLZXlib2FyZEhlaWdodDtcblx0Y29uc3QgbmF0aXZlQ2FwID0gaXNOYXRpdmVDYXBhY2l0b3JIb3N0KCk7XG5cdGxldCBrZXlib2FyZCA9IGNhcEggPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IGNhcEggOiAhbmF0aXZlQ2FwICYmIHZrSCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYID8gdmtIIDogIW5hdGl2ZUNhcCAmJiB2dk92ZXJsYXAgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IHZ2T3ZlcmxhcCA6IDA7XG5cdGNvbnN0IGNhbmRpZGF0ZVcgPSBNYXRoLm1heChpbm5lclcsIHZ2Vyk7XG5cdGNvbnN0IGNhbmRpZGF0ZUggPSBNYXRoLm1heChpbm5lckgsIHZ2SCArIHZ2VG9wLCBrZXlib2FyZCA+IDAgPyB2dkggKyBrZXlib2FyZCA6IDApO1xuXHRjb25zdCBvcmllbnQgPSBpc0xhbmRzY2FwZSgpID8gXCJsXCIgOiBcInBcIjtcblx0aWYgKG9yaWVudCAhPT0gbGF5b3V0TG9ja09yaWVudCkge1xuXHRcdGxheW91dExvY2tPcmllbnQgPSBvcmllbnQ7XG5cdFx0bGF5b3V0TG9ja1cgPSAwO1xuXHRcdGxheW91dExvY2tIID0gMDtcblx0fVxuXHRjb25zdCB3aWR0aFN0YWJsZSA9IGxheW91dExvY2tXIDw9IDAgfHwgTWF0aC5hYnMobGF5b3V0TG9ja1cgLSBjYW5kaWRhdGVXKSA8IDMyO1xuXHRjb25zdCBlZGl0YWJsZUZvY3VzZWQgPSBpc0ltZVRhcmdldChkZWVwQWN0aXZlRWxlbWVudCgpKSB8fCBpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblx0bGV0IGNvYXJzZVBvaW50ZXIgPSBmYWxzZTtcblx0dHJ5IHtcblx0XHRjb2Fyc2VQb2ludGVyID0gdHlwZW9mIG1hdGNoTWVkaWEgPT09IFwiZnVuY3Rpb25cIiAmJiBtYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcztcblx0fSBjYXRjaCB7XG5cdFx0Y29hcnNlUG9pbnRlciA9IGZhbHNlO1xuXHR9XG5cdGNvbnN0IHN1ZGRlblNocmluayA9ICFuYXRpdmVDYXAgJiYgd2lkdGhTdGFibGUgJiYgKGVkaXRhYmxlRm9jdXNlZCB8fCBjb2Fyc2VQb2ludGVyKSAmJiBsYXlvdXRMb2NrSCA+IDAgJiYgbGF5b3V0TG9ja0ggLSBjYW5kaWRhdGVIID49IEtFWUJPQVJEX09WRVJMQVlfUFg7XG5cdGlmIChrZXlib2FyZCA8IEtFWUJPQVJEX09WRVJMQVlfUFggJiYgc3VkZGVuU2hyaW5rKSB7XG5cdFx0Y29uc3Qgc2hyaW5rID0gTWF0aC5tYXgoMCwgbGF5b3V0TG9ja0ggLSBjYW5kaWRhdGVILCBsYXlvdXRMb2NrSCAtICh2dkggKyB2dlRvcCkpO1xuXHRcdGlmIChzaHJpbmsgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCkga2V5Ym9hcmQgPSBzaHJpbms7XG5cdH1cblx0Y29uc3QgZXhwYW5kZWRTZWxlY3Rpb24gPSAhaXNDb2xsYXBzZWRDYXJldCgpO1xuXHRpZiAoZXhwYW5kZWRTZWxlY3Rpb24gJiYgbGFzdFN0YWJsZUtleWJvYXJkID49IEtFWUJPQVJEX09WRVJMQVlfUFgpIGtleWJvYXJkID0gbGFzdFN0YWJsZUtleWJvYXJkO1xuXHRlbHNlIGlmIChrZXlib2FyZCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYKSBsYXN0U3RhYmxlS2V5Ym9hcmQgPSBrZXlib2FyZDtcblx0ZWxzZSBpZiAoIWlzSW1lVGFyZ2V0KGRlZXBBY3RpdmVFbGVtZW50KCkpICYmICFpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgbGFzdFN0YWJsZUtleWJvYXJkID0gMDtcblx0aWYgKCEoa2V5Ym9hcmQgPiAwIHx8IGlzSW1lVGFyZ2V0KGRlZXBBY3RpdmVFbGVtZW50KCkpIHx8IGlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHx8IHN1ZGRlblNocmluayB8fCBleHBhbmRlZFNlbGVjdGlvbikpIHtcblx0XHRsYXlvdXRMb2NrVyA9IGNhbmRpZGF0ZVc7XG5cdFx0bGF5b3V0TG9ja0ggPSBjYW5kaWRhdGVIO1xuXHR9IGVsc2Uge1xuXHRcdGxheW91dExvY2tXID0gTWF0aC5tYXgoY2FuZGlkYXRlVywgbGF5b3V0TG9ja1cpO1xuXHRcdGxheW91dExvY2tIID0gTWF0aC5tYXgoY2FuZGlkYXRlSCwgbGF5b3V0TG9ja0gpO1xuXHR9XG5cdGNvbnN0IGxvY2tlZCA9IGNsYW1wVG9QaHlzaWNhbChsYXlvdXRMb2NrVyB8fCBjYW5kaWRhdGVXLCBsYXlvdXRMb2NrSCB8fCBjYW5kaWRhdGVIKTtcblx0bGF5b3V0TG9ja1cgPSBsb2NrZWQud2lkdGg7XG5cdGxheW91dExvY2tIID0gbG9ja2VkLmhlaWdodDtcblx0Y29uc3Qga2IgPSBsb2NrZWQuaGVpZ2h0ID4gMCA/IE1hdGgubWluKGtleWJvYXJkLCBsb2NrZWQuaGVpZ2h0KSA6IGtleWJvYXJkO1xuXHRyZXR1cm4ge1xuXHRcdHdpZHRoOiBsb2NrZWQud2lkdGgsXG5cdFx0aGVpZ2h0OiBsb2NrZWQuaGVpZ2h0LFxuXHRcdGtleWJvYXJkOiBrYlxuXHR9O1xufTtcbnZhciBpc0ltZUNocm9tZUxvY2sgPSAoZWwpID0+IHtcblx0Y29uc3QgdGFnID0gZWwudGFnTmFtZTtcblx0aWYgKHRhZyA9PT0gXCJIVE1MXCIgfHwgdGFnID09PSBcIkJPRFlcIikgcmV0dXJuIHRydWU7XG5cdGlmICh0YWcgPT09IFwiQ1ctUkFXLUVESVRPUlwiIHx8IHRhZyA9PT0gXCJDVy1WSUVXLVZJRVdFUlwiIHx8IHRhZyA9PT0gXCJDVy1NQVJLRE9XTi1WSUVXLUZSQU1FXCIgfHwgdGFnID09PSBcIkNXLU1BUktET1dOLVRPT0xCQVItRlJBTUVcIikgcmV0dXJuIHRydWU7XG5cdGNvbnN0IGNscyA9IGVsLmNsYXNzTGlzdDtcblx0cmV0dXJuIGNscy5jb250YWlucyhcImFwcC1zaGVsbFwiKSB8fCBjbHMuY29udGFpbnMoXCJhcHAtc2hlbGxfX3ZpZXdwb3J0XCIpIHx8IGNscy5jb250YWlucyhcImFwcC1zaGVsbF9fbmF2XCIpIHx8IGNscy5jb250YWlucyhcImVudi1zaGVsbC1yb290XCIpIHx8IGNscy5jb250YWlucyhcImVudi1zaGVsbC13b3Jrc3BhY2VcIikgfHwgY2xzLmNvbnRhaW5zKFwiZW52LXNoZWxsLWNocm9tZVwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtdWktd2luZG93XCIpIHx8IGNscy5jb250YWlucyhcImVudi11aS13aW5kb3dfX2JvZHlcIikgfHwgY2xzLmNvbnRhaW5zKFwid2YtZnJhbWVcIikgfHwgY2xzLmNvbnRhaW5zKFwidWktd2luZG93XCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyXCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyX190b29sYmFyXCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyX19jaHJvbWVcIikgfHwgY2xzLmNvbnRhaW5zKFwidmlldy12aWV3ZXJfX2NvbnRlbnRcIikgfHwgY2xzLmNvbnRhaW5zKFwiY3ctdmlldy12aWV3ZXItc2hlbGxcIikgfHwgY2xzLmNvbnRhaW5zKFwiY3ctbWFya2Rvd24tdmlldy1mcmFtZVwiKSB8fCBjbHMuY29udGFpbnMoXCJjdy12aWV3LXZpZXdlcl9fc2xvdC1yYXdcIik7XG59O1xudmFyIHBhcmVudE9mID0gKGVsKSA9PiB7XG5cdGlmICghZWwpIHJldHVybiBudWxsO1xuXHRpZiAoZWwucGFyZW50RWxlbWVudCkgcmV0dXJuIGVsLnBhcmVudEVsZW1lbnQ7XG5cdGNvbnN0IHJvb3QgPSBlbC5nZXRSb290Tm9kZSgpO1xuXHRyZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290Lmhvc3QgOiBudWxsO1xufTtcbnZhciBpc1Njcm9sbHBvcnQgPSAoZWwpID0+IHtcblx0aWYgKGlzSW1lQ2hyb21lTG9jayhlbCkpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblx0Y29uc3Qgb3kgPSBzdHlsZS5vdmVyZmxvd1kgfHwgc3R5bGUub3ZlcmZsb3dCbG9jaztcblx0aWYgKG95ICE9PSBcImF1dG9cIiAmJiBveSAhPT0gXCJzY3JvbGxcIikgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gZWwuc2Nyb2xsSGVpZ2h0ID4gZWwuY2xpZW50SGVpZ2h0ICsgMTtcbn07XG52YXIgZmluZFJhd0VkaXRvclNjcm9sbHBvcnQgPSAoc3RhcnQpID0+IHtcblx0bGV0IG5vZGUgPSBzdGFydDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY3ctcmF3LWVkaXRvcl9fc2Nyb2xsXCIpKSByZXR1cm4gbm9kZTtcblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIG5vZGUubG9jYWxOYW1lID09PSBcImN3LXJhdy1lZGl0b3JcIikge1xuXHRcdFx0Y29uc3QgaW5uZXIgPSBub2RlLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoXCIuY3ctcmF3LWVkaXRvcl9fc2Nyb2xsXCIpO1xuXHRcdFx0aWYgKGlubmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHJldHVybiBpbm5lcjtcblx0XHR9XG5cdFx0Y29uc3Qgcm9vdCA9IG5vZGUuZ2V0Um9vdE5vZGUoKTtcblx0XHRpZiAocm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcblx0XHRcdGNvbnN0IGlubmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLmN3LXJhdy1lZGl0b3JfX3Njcm9sbFwiKTtcblx0XHRcdGlmIChpbm5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSByZXR1cm4gaW5uZXI7XG5cdFx0fVxuXHRcdG5vZGUgPSBwYXJlbnRPZihub2RlKTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgZmluZEltZVNjcm9sbHBvcnQgPSAoc3RhcnQpID0+IHtcblx0Y29uc3QgcmF3ID0gZmluZFJhd0VkaXRvclNjcm9sbHBvcnQoc3RhcnQpO1xuXHRpZiAocmF3KSByZXR1cm4gcmF3O1xuXHRsZXQgbm9kZSA9IHN0YXJ0O1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNTY3JvbGxwb3J0KG5vZGUpKSByZXR1cm4gbm9kZTtcblx0XHRub2RlID0gcGFyZW50T2Yobm9kZSk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xudmFyIHJlYWRDYXJldFJlY3QgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgc2VsID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0aWYgKHNlbD8ucmFuZ2VDb3VudCkge1xuXHRcdFx0Y29uc3QgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKTtcblx0XHRcdGNvbnN0IHJlY3RzID0gcmFuZ2UuZ2V0Q2xpZW50UmVjdHMoKTtcblx0XHRcdGNvbnN0IHJlY3QgPSByZWN0cy5sZW5ndGggPyByZWN0c1tyZWN0cy5sZW5ndGggLSAxXSA6IHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0aWYgKHJlY3QgJiYgKHJlY3QuaGVpZ2h0IHx8IHJlY3Qud2lkdGggfHwgcmVjdC50b3AgfHwgcmVjdC5ib3R0b20pKSByZXR1cm4gcmVjdDtcblx0XHR9XG5cdH0gY2F0Y2gge31cblx0Y29uc3QgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRyZXR1cm4gZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcbn07XG52YXIgcGluSW1lQ2FyZXRJblNjcm9sbHBvcnQgPSAoKSA9PiB7XG5cdGNvbnN0IGFjdGl2ZSA9IGRlZXBBY3RpdmVFbGVtZW50KCk7XG5cdGlmICghaXNJbWVUYXJnZXQoYWN0aXZlKSAmJiAhaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFpc0NvbGxhcHNlZENhcmV0KCkpIHJldHVybjtcblx0Y29uc3Qga2V5Ym9hcmQgPSByZWFkTGF5b3V0Vmlld3BvcnQoKS5rZXlib2FyZDtcblx0Y29uc3QgdnYgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQ7XG5cdGNvbnN0IHZpc2libGVCb3R0b20gPSAoTnVtYmVyKHZ2Py5oZWlnaHQpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDApIC0gTWF0aC5tYXgoOCwga2V5Ym9hcmQgPyAxMiA6IDApO1xuXHRpZiAodmlzaWJsZUJvdHRvbSA8PSAwKSByZXR1cm47XG5cdGNvbnN0IHJlY3QgPSByZWFkQ2FyZXRSZWN0KCk7XG5cdGlmICghcmVjdCkgcmV0dXJuO1xuXHRjb25zdCBvdmVyZmxvdyA9IHJlY3QuYm90dG9tIC0gdmlzaWJsZUJvdHRvbTtcblx0aWYgKG92ZXJmbG93IDw9IDEpIHJldHVybjtcblx0Y29uc3QgcG9ydCA9IGZpbmRJbWVTY3JvbGxwb3J0KGFjdGl2ZSkgfHwgZmluZEltZVNjcm9sbHBvcnQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cdGlmIChwb3J0KSBwb3J0LnNjcm9sbFRvcCArPSBvdmVyZmxvdztcbn07XG52YXIgcGluVmlzdWFsVmlld3BvcnQgPSAoKSA9PiB7XG5cdGNvbnN0IHZ2ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0O1xuXHRpZiAoIXZ2KSByZXR1cm47XG5cdGNvbnN0IHRvcCA9IE51bWJlcih2di5vZmZzZXRUb3ApIHx8IDA7XG5cdGNvbnN0IGxlZnQgPSBOdW1iZXIodnYub2Zmc2V0TGVmdCkgfHwgMDtcblx0aWYgKCF0b3AgJiYgIWxlZnQpIHJldHVybjtcblx0dHJ5IHtcblx0XHR2di5zY3JvbGxUbyh7XG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0dG9wOiAwLFxuXHRcdFx0YmVoYXZpb3I6IFwiaW5zdGFudFwiXG5cdFx0fSk7XG5cdH0gY2F0Y2gge1xuXHRcdHRyeSB7XG5cdFx0XHR2di5zY3JvbGxUbz8uKDAsIDApO1xuXHRcdH0gY2F0Y2gge31cblx0fVxufTtcbnZhciBvdmVybGF5UGlubmluZyA9IGZhbHNlO1xudmFyIHJlc2V0Q2hyb21lU2Nyb2xsID0gKHN0YXJ0KSA9PiB7XG5cdGNvbnN0IHBvcnQgPSBmaW5kSW1lU2Nyb2xscG9ydChzdGFydCk7XG5cdGxldCBub2RlID0gc3RhcnQ7XG5cdHdoaWxlIChub2RlKSB7XG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBub2RlICE9PSBwb3J0ICYmIGlzSW1lQ2hyb21lTG9jayhub2RlKSkge1xuXHRcdFx0aWYgKG5vZGUuc2Nyb2xsVG9wIHx8IG5vZGUuc2Nyb2xsTGVmdCkge1xuXHRcdFx0XHRub2RlLnNjcm9sbFRvcCA9IDA7XG5cdFx0XHRcdG5vZGUuc2Nyb2xsTGVmdCA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG5vZGUgPSBwYXJlbnRPZihub2RlKTtcblx0fVxufTtcbnZhciBwaW5PdmVybGF5U2Nyb2xsID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvdmVybGF5UGlubmluZykgcmV0dXJuO1xuXHRjb25zdCBhY3RpdmUgPSBkZWVwQWN0aXZlRWxlbWVudCgpO1xuXHRjb25zdCBjYXAgPSBpc05hdGl2ZUNhcGFjaXRvckhvc3QoKTtcblx0Y29uc3QgcmF3ID0gQm9vbGVhbihmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydChhY3RpdmUpIHx8IGZpbmRSYXdFZGl0b3JTY3JvbGxwb3J0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKTtcblx0Y29uc3QgaW1lID0gcmVhZExheW91dFZpZXdwb3J0KCkua2V5Ym9hcmQgPiAwIHx8IGlzSW1lVGFyZ2V0KGFjdGl2ZSkgfHwgaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cdGlmICghaW1lICYmICFjYXApIHJldHVybjtcblx0b3ZlcmxheVBpbm5pbmcgPSB0cnVlO1xuXHR0cnkge1xuXHRcdHBpblZpc3VhbFZpZXdwb3J0KCk7XG5cdFx0aWYgKHdpbmRvdy5zY3JvbGxYIHx8IHdpbmRvdy5zY3JvbGxZKSB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHRjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHRpZiAocm9vdC5zY3JvbGxUb3AgfHwgcm9vdC5zY3JvbGxMZWZ0KSByb290LnNjcm9sbFRvKDAsIDApO1xuXHRcdGlmIChib2R5ICYmIChib2R5LnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbExlZnQpKSBib2R5LnNjcm9sbFRvKDAsIDApO1xuXHRcdGlmIChyYXcgfHwgaW1lIHx8ICFpc0NvbGxhcHNlZENhcmV0KCkpIHtcblx0XHRcdHJlc2V0Q2hyb21lU2Nyb2xsKGFjdGl2ZSk7XG5cdFx0XHRyZXNldENocm9tZVNjcm9sbChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblx0XHR9XG5cdFx0aWYgKGNhcCkgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImN3LXJhdy1lZGl0b3JcIikuZm9yRWFjaCgoaG9zdCkgPT4ge1xuXHRcdFx0aWYgKGhvc3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhaG9zdC5oaWRkZW4pIHJlc2V0Q2hyb21lU2Nyb2xsKGhvc3QpO1xuXHRcdH0pO1xuXHR9IGZpbmFsbHkge1xuXHRcdG92ZXJsYXlQaW5uaW5nID0gZmFsc2U7XG5cdH1cbn07XG52YXIgc2Nyb2xsSW50b1ZpZXdQYXRjaGVkID0gZmFsc2U7XG52YXIgcGF0Y2hJbWVTY3JvbGxJbnRvVmlldyA9ICgpID0+IHtcblx0aWYgKHNjcm9sbEludG9WaWV3UGF0Y2hlZCB8fCB0eXBlb2YgRWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRzY3JvbGxJbnRvVmlld1BhdGNoZWQgPSB0cnVlO1xuXHRjb25zdCBvcmlnID0gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXc7XG5cdEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24oYXJnKSB7XG5cdFx0Y29uc3QgYWN0aXZlID0gZGVlcEFjdGl2ZUVsZW1lbnQoKTtcblx0XHRpZiAoQm9vbGVhbihmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydCh0aGlzKSB8fCBmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydChhY3RpdmUpKSB8fCBpc0ltZVRhcmdldChhY3RpdmUpICYmICFpc0NvbGxhcHNlZENhcmV0KCkpIHtcblx0XHRcdGlmIChpc05hdGl2ZUNhcGFjaXRvckhvc3QoKSB8fCAhaXNDb2xsYXBzZWRDYXJldCgpKSB7XG5cdFx0XHRcdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNJbWVDaHJvbWVMb2NrKHRoaXMpKSByZXR1cm47XG5cdFx0cmV0dXJuIG9yaWcuY2FsbCh0aGlzLCBhcmcpO1xuXHR9O1xufTtcbnZhciBwaW5JbWVDaHJvbWUgPSAob3B0cykgPT4ge1xuXHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdGlmICghb3B0cz8uY2FyZXQpIHJldHVybjtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdFx0cGluSW1lQ2FyZXRJblNjcm9sbHBvcnQoKTtcblx0fSk7XG59O1xudmFyIHJlYWRWaXJ0dWFsS2V5Ym9hcmRIZWlnaHRQeCA9ICgpID0+IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyAwIDogcmVhZExheW91dFZpZXdwb3J0KCkua2V5Ym9hcmQ7XG52YXIgZ2V0QXZhaWxTaXplID0gKCkgPT4ge1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdGNvbnN0IHZ2ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGw7XG5cdGNvbnN0IGxheW91dCA9IHJlYWRMYXlvdXRWaWV3cG9ydCgpO1xuXHRjb25zdCB2dkJsb2NrID0ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt2dj8ud2lkdGggPz8gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDApfXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3Z2Py5oZWlnaHQgPz8gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiAwKX1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IGAke3Z2Py5vZmZzZXRMZWZ0ID8/IDB9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtdG9wXCI6IGAke3Z2Py5vZmZzZXRUb3AgPz8gMH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh2dj8uc2NhbGUgPz8gMSksXG5cdFx0XCItLWx2LXdpZHRoXCI6IGAke2xheW91dC53aWR0aH1weGAsXG5cdFx0XCItLWx2LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcIi0ta2V5Ym9hcmQtb3ZlcmxheS1oZWlnaHRcIjogYCR7bGF5b3V0LmtleWJvYXJkfXB4YCxcblx0XHRcIi0tdmlydHVhbC1rZXlib2FyZC1oZWlnaHRcIjogYCR7bGF5b3V0LmtleWJvYXJkfXB4YFxuXHR9O1xuXHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS12ay1vcGVuXCIpO1xuXHRpZiAodHlwZW9mIHNjcmVlbiAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0Y29uc3QgcGh5cyA9IHJlYWRQaHlzaWNhbFNjcmVlbigpO1xuXHRcdGNvbnN0IGlubmVyVyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAgOiAwO1xuXHRcdGNvbnN0IGlubmVySCA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwIDogMDtcblx0XHRjb25zdCBwYW5lVyA9IE1hdGgubWF4KGlubmVyVywgbGF5b3V0LndpZHRoKTtcblx0XHRjb25zdCBwYW5lSCA9IE1hdGgubWF4KGlubmVySCwgbGF5b3V0LmhlaWdodCk7XG5cdFx0Y29uc3Qgd2luZG93ZWRXID0gIW5hdGl2ZURpc3BsYXkgJiYgcGFuZVcgPiAwICYmIHBoeXMud2lkdGggPiBwYW5lVyArIDY0O1xuXHRcdGNvbnN0IHdpbmRvd2VkSCA9ICFuYXRpdmVEaXNwbGF5ICYmIHBhbmVIID4gMCAmJiBwaHlzLmhlaWdodCA+IHBhbmVIICsgNjQ7XG5cdFx0Y29uc3QgY2FwVyA9IHdpbmRvd2VkVyA/IHBhbmVXIDogTWF0aC5tYXgocGh5cy53aWR0aCwgcGFuZVcpO1xuXHRcdGNvbnN0IGNhcEggPSB3aW5kb3dlZEggPyBwYW5lSCA6IE1hdGgubWF4KHBoeXMuaGVpZ2h0LCBwYW5lSCk7XG5cdFx0Y29uc3Qgc2NyZWVuVyA9IGNhcFcgPiAwID8gYCR7Y2FwV31weGAgOiBcIjEwMGx2aVwiO1xuXHRcdGNvbnN0IHNjcmVlbkggPSBjYXBIID4gMCA/IGAke2NhcEh9cHhgIDogXCIxMDBsdmJcIjtcblx0XHRjb25zdCBkZW5zaXR5ID0gbmF0aXZlRGlzcGxheT8uZGVuc2l0eSB8fCBOdW1iZXIoZGV2aWNlUGl4ZWxSYXRpbykgfHwgMTtcblx0XHRjb25zdCBuYXRpdmVTY2FsZSA9IG5hdGl2ZURpc3BsYXkgPyB7XG5cdFx0XHRcIi0tbmF0aXZlLWRlbnNpdHlcIjogU3RyaW5nKG5hdGl2ZURpc3BsYXkuZGVuc2l0eSB8fCBkZW5zaXR5KSxcblx0XHRcdFwiLS1uYXRpdmUtZHBpXCI6IFN0cmluZyhuYXRpdmVEaXNwbGF5LmRlbnNpdHlEcGkgfHwgMCksXG5cdFx0XHRcIi0tbmF0aXZlLXBwaVwiOiBTdHJpbmcobmF0aXZlRGlzcGxheS5wcGkgfHwgMCksXG5cdFx0XHRcIi0tbmF0aXZlLXhkcGlcIjogU3RyaW5nKG5hdGl2ZURpc3BsYXkueGRwaSB8fCAwKSxcblx0XHRcdFwiLS1uYXRpdmUteWRwaVwiOiBTdHJpbmcobmF0aXZlRGlzcGxheS55ZHBpIHx8IDApLFxuXHRcdFx0XCItLW5hdGl2ZS1mb250LXNjYWxlXCI6IFN0cmluZyhuYXRpdmVEaXNwbGF5LmZvbnRTY2FsZSB8fCAxKVxuXHRcdH0gOiB7fTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCItLXNjcmVlbi13aWR0aFwiOiBzY3JlZW5XLFxuXHRcdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogc2NyZWVuSCxcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBzY3JlZW5XLFxuXHRcdFx0XCItLWF2YWlsLWhlaWdodFwiOiBzY3JlZW5ILFxuXHRcdFx0XCItLXZpZXctaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFx0XCItLXBpeGVsLXJhdGlvXCI6IFN0cmluZyhkZW5zaXR5KSxcblx0XHRcdC4uLm5hdGl2ZVNjYWxlLFxuXHRcdFx0Li4udnZCbG9ja1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IFwiMTAwbHZpXCIsXG5cdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogXCIxMDBsdmJcIixcblx0XHRcIi0tYXZhaWwtd2lkdGhcIjogXCIxMDBsdmlcIixcblx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IFwiMTAwbHZiXCIsXG5cdFx0XCItLXZpZXctaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi52dkJsb2NrXG5cdH07XG59O1xudmFyIGF2YWlsU2l6ZSA9IGdldEF2YWlsU2l6ZSgpO1xudmFyIGNsYXNzZXMgPSBbW1wiOnJvb3QsIDpob3N0LCA6c2NvcGVcIiwgYXZhaWxTaXplXV07XG52YXIgb3JpZW50YXRpb25OdW1iZXJNYXAgPSB7XG5cdFwicG9ydHJhaXQtcHJpbWFyeVwiOiAwLFxuXHRcImxhbmRzY2FwZS1wcmltYXJ5XCI6IDEsXG5cdFwicG9ydHJhaXQtc2Vjb25kYXJ5XCI6IDIsXG5cdFwibGFuZHNjYXBlLXNlY29uZGFyeVwiOiAzXG59O1xudmFyIHVwZGF0ZVZQID0gKGV2KSA9PiB7XG5cdGNvbnN0IHJ1bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdE9iamVjdC5hc3NpZ24oYXZhaWxTaXplLCBnZXRBdmFpbFNpemUoKSk7XG5cdE9iamVjdC5lbnRyaWVzKGF2YWlsU2l6ZSkuZm9yRWFjaCgoW3Byb3BOYW1lLCBwcm9wVmFsdWVdKSA9PiB7XG5cdFx0Y29uc3QgZXhpc3RzID0gcnVsZT8uc3R5bGU/LmdldFByb3BlcnR5VmFsdWUocHJvcE5hbWUpO1xuXHRcdGlmICghZXhpc3RzIHx8IGV4aXN0cyAhPSBwcm9wVmFsdWUpIHJ1bGU/LnN0eWxlPy5zZXRQcm9wZXJ0eT8uKHByb3BOYW1lLCBwcm9wVmFsdWUgfHwgXCJcIiwgXCJcIik7XG5cdH0pO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLW9yaWVudGF0aW9uLXNlY29uZGFyeVwiLCBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlPy5lbmRzV2l0aD8uKFwic2Vjb25kYXJ5XCIpID8gXCIxXCIgOiBcIjBcIik7XG59O1xudmFyIGdldENvcnJlY3RPcmllbnRhdGlvbiA9ICgpID0+IHtcblx0bGV0IG9yaWVudGF0aW9uVHlwZSA9IHNjcmVlbj8ub3JpZW50YXRpb24/LnR5cGUgfHwgXCJwb3J0cmFpdC1wcmltYXJ5XCI7XG5cdGlmICghZ2xvYmFsVGhpcy5tYXRjaE1lZGlhKFwiKChkaXNwbGF5LW1vZGU6IGZ1bGxzY3JlZW4pIG9yIChkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpIG9yIChkaXNwbGF5LW1vZGU6IHdpbmRvdy1jb250cm9scy1vdmVybGF5KSlcIikubWF0Y2hlcykge1xuXHRcdGlmIChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykgb3JpZW50YXRpb25UeXBlID0gb3JpZW50YXRpb25UeXBlLnJlcGxhY2UoXCJsYW5kc2NhcGVcIiwgXCJwb3J0cmFpdFwiKTtcblx0XHRlbHNlIGlmIChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwicG9ydHJhaXRcIiwgXCJsYW5kc2NhcGVcIik7XG5cdH1cblx0cmV0dXJuIG9yaWVudGF0aW9uVHlwZTtcbn07XG52YXIgcGFzc2l2ZU9wdHMkMSA9IHsgcGFzc2l2ZTogdHJ1ZSB9O1xudmFyIGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQgPSAocmF3KSA9PiB7XG5cdGNvbnN0IG5leHQgPSBOdW1iZXIocmF3KSB8fCAwO1xuXHRpZiAobmV4dCA+IDApIGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gbmV4dDtcblx0dXBkYXRlVlAoKTtcblx0cGluSW1lQ2hyb21lKHsgY2FyZXQ6IHRydWUgfSk7XG59O1xudmFyIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQgPSAoKSA9PiB7XG5cdGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gMDtcblx0dXBkYXRlVlAoKTtcbn07XG52YXIgYmluZFdpbmRvd0tleWJvYXJkRXZlbnRzID0gKCkgPT4ge1xuXHRpZiAod2luZG93S2V5Ym9hcmRCb3VuZCB8fCB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdHdpbmRvd0tleWJvYXJkQm91bmQgPSB0cnVlO1xuXHRjb25zdCBvblNob3cgPSAoZXYpID0+IHtcblx0XHRjb25zdCBlID0gZXY7XG5cdFx0Y29uc3QgZGV0YWlsID0gZS5kZXRhaWw7XG5cdFx0Y29uc3QgZnJvbURldGFpbCA9IHR5cGVvZiBkZXRhaWwgPT09IFwic3RyaW5nXCIgPyAoKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoZGV0YWlsKT8ua2V5Ym9hcmRIZWlnaHQ7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cdFx0fSkoKSA6IGRldGFpbD8ua2V5Ym9hcmRIZWlnaHQ7XG5cdFx0YXBwbHlDYXBhY2l0b3JLZXlib2FyZEhlaWdodChlLmtleWJvYXJkSGVpZ2h0ID8/IGZyb21EZXRhaWwpO1xuXHR9O1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWJvYXJkV2lsbFNob3dcIiwgb25TaG93KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZERpZFNob3dcIiwgb25TaG93KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZFdpbGxIaWRlXCIsIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQpO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWJvYXJkRGlkSGlkZVwiLCBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KTtcbn07XG52YXIgYmluZENhcGFjaXRvcktleWJvYXJkID0gKCkgPT4ge1xuXHRiaW5kV2luZG93S2V5Ym9hcmRFdmVudHMoKTtcblx0aWYgKGNhcGFjaXRvcktleWJvYXJkQm91bmQgfHwgdHlwZW9mIGdsb2JhbFRoaXMgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgY2FwID0gZ2xvYmFsVGhpcy5DYXBhY2l0b3I7XG5cdGNvbnN0IEtleWJvYXJkID0gY2FwPy5QbHVnaW5zPy5LZXlib2FyZDtcblx0aWYgKCFLZXlib2FyZD8uYWRkTGlzdGVuZXIpIHJldHVybjtcblx0aWYgKHR5cGVvZiBjYXAuaXNOYXRpdmVQbGF0Zm9ybSA9PT0gXCJmdW5jdGlvblwiICYmICFjYXAuaXNOYXRpdmVQbGF0Zm9ybSgpKSByZXR1cm47XG5cdGNhcGFjaXRvcktleWJvYXJkQm91bmQgPSB0cnVlO1xuXHR0cnkge1xuXHRcdEtleWJvYXJkLnNldFNjcm9sbD8uKHsgaXNEaXNhYmxlZDogdHJ1ZSB9KTtcblx0fSBjYXRjaCB7fVxuXHR0cnkge1xuXHRcdEtleWJvYXJkLnNldFJlc2l6ZU1vZGU/Lih7IG1vZGU6IFwibm9uZVwiIH0pO1xuXHR9IGNhdGNoIHt9XG5cdEtleWJvYXJkLmFkZExpc3RlbmVyKFwia2V5Ym9hcmRXaWxsU2hvd1wiLCAoaW5mbykgPT4gYXBwbHlDYXBhY2l0b3JLZXlib2FyZEhlaWdodChpbmZvPy5rZXlib2FyZEhlaWdodCkpO1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkRGlkU2hvd1wiLCAoaW5mbykgPT4gYXBwbHlDYXBhY2l0b3JLZXlib2FyZEhlaWdodChpbmZvPy5rZXlib2FyZEhlaWdodCkpO1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkV2lsbEhpZGVcIiwgY2xlYXJDYXBhY2l0b3JLZXlib2FyZEhlaWdodCk7XG5cdEtleWJvYXJkLmFkZExpc3RlbmVyKFwia2V5Ym9hcmREaWRIaWRlXCIsIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQpO1xufTtcbnZhciBlbnN1cmVWaWV3cG9ydFRyYWNraW5nID0gKCkgPT4ge1xuXHRpZiAodmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHR2aWV3cG9ydFRyYWNraW5nU3RhcnRlZCA9IHRydWU7XG5cdGJpbmRDYXBhY2l0b3JLZXlib2FyZCgpO1xuXHRiaW5kTmF0aXZlRGlzcGxheSgpO1xuXHR3aGVuQW55U2NyZWVuQ2hhbmdlcygoKSA9PiB7fSk7XG59O1xudmFyIHdoZW5BbnlTY3JlZW5DaGFuZ2VzID0gKGNiKSA9PiB7XG5cdGxldCB0aWNraW5nID0gZmFsc2U7XG5cdGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcblx0XHRpZiAoIXRpY2tpbmcpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRcdHVwZGF0ZVZQKCk7XG5cdFx0XHRcdGNiKCk7XG5cdFx0XHRcdHRpY2tpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdFx0dGlja2luZyA9IHRydWU7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCB1bnN1YnNjcmliZXJzID0gW107XG5cdGJpbmRDYXBhY2l0b3JLZXlib2FyZCgpO1xuXHRiaW5kTmF0aXZlRGlzcGxheSgpO1xuXHRwYXRjaEltZVNjcm9sbEludG9WaWV3KCk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChuYXZpZ2F0b3I/LnZpcnR1YWxLZXlib2FyZCwgXCJnZW9tZXRyeWNoYW5nZVwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHR9LCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3csIFwic2Nyb2xsXCIsICgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdH0sIHtcblx0XHRjYXB0dXJlOiB0cnVlLFxuXHRcdHBhc3NpdmU6IHRydWVcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwic2Nyb2xsXCIsICgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdH0sIHtcblx0XHRjYXB0dXJlOiB0cnVlLFxuXHRcdHBhc3NpdmU6IHRydWVcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93Py52aXN1YWxWaWV3cG9ydCwgXCJyZXNpemVcIiwgKCkgPT4ge1xuXHRcdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChzY3JlZW4/Lm9yaWVudGF0aW9uLCBcImNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0cXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3csIFwicmVzaXplXCIsICgpID0+IHtcblx0XHRxdWV1ZU5hdGl2ZURpc3BsYXlSZWZyZXNoKCk7XG5cdFx0dXBkYXRlKCk7XG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQsIFwiZnVsbHNjcmVlbmNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0cXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJET01Db250ZW50TG9hZGVkXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLCBcImNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0cXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCBcImNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0cXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJmb2N1c2luXCIsICgpID0+IHtcblx0XHRiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQoKTtcblx0XHRiaW5kTmF0aXZlRGlzcGxheSgpO1xuXHRcdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0XHRpZiAoaXNJbWVUYXJnZXQoZGVlcEFjdGl2ZUVsZW1lbnQoKSkgfHwgaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcblx0XHRcdGxheW91dExvY2tXID0gTWF0aC5tYXgobGF5b3V0TG9ja1csIE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMCwgTnVtYmVyKHdpbmRvdy52aXN1YWxWaWV3cG9ydD8ud2lkdGgpIHx8IDApO1xuXHRcdFx0bGF5b3V0TG9ja0ggPSBNYXRoLm1heChsYXlvdXRMb2NrSCwgTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCwgTnVtYmVyKHdpbmRvdy52aXN1YWxWaWV3cG9ydD8uaGVpZ2h0KSB8fCAwKTtcblx0XHR9XG5cdFx0cGluSW1lQ2hyb21lKHsgY2FyZXQ6IHRydWUgfSk7XG5cdFx0dXBkYXRlKCk7XG5cdH0sIHtcblx0XHRjYXB0dXJlOiB0cnVlLFxuXHRcdHBhc3NpdmU6IHRydWVcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiZm9jdXNvdXRcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0dXBkYXRlKCk7XG5cdHJ1bldoZW5JZGxlKCgpID0+IHVwZGF0ZSgpLCAxMDApO1xuXHRyZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmVycy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG59O1xudmFyIGZpeE9yaWVudFRvU2NyZWVuID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKCFlbGVtZW50Py5jbGFzc0xpc3Q/LmNvbnRhaW5zPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpKSB7XG5cdFx0ZWxlbWVudD8uY2xhc3NMaXN0Py5hZGQ/LihcIm5hdGl2ZS1wb3J0cmFpdC1vcHRpbWl6ZWRcIik7XG5cdFx0cmV0dXJuIHdoZW5BbnlTY3JlZW5DaGFuZ2VzKCgpID0+IHtcblx0XHRcdGNvbnN0IG5leHQgPSBvcmllbnRhdGlvbk51bWJlck1hcD8uW2dldENvcnJlY3RPcmllbnRhdGlvbigpXSA/PyAwO1xuXHRcdFx0ZWxlbWVudC5vcmllbnQgPSBuZXh0O1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdFx0ZWxlbWVudC5zdHlsZT8uc2V0UHJvcGVydHk/LihcIi0tb3JpZW50XCIsIFN0cmluZyhuZXh0KSk7XG5cdFx0fSk7XG5cdH1cbn07XG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiKSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiBlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCksIHsgb25jZTogdHJ1ZSB9KTtcbn1cblxuLy8gc3JjL2FnYXRlL01lYXN1cmUudHNcbnZhciBjdHggPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEsIDEpLmdldENvbnRleHQoXCIyZFwiKTtcbnZhciBpbml0VGV4dFN0eWxlID0gKGVsZW1lbnQsIGN0eCkgPT4ge1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgXCJcIik7XG5cdGlmIChjdHggJiYgc3R5bGUpIHtcblx0XHRjb25zdCBmb250V2VpZ2h0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtd2VpZ2h0XCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0Y29uc3QgZm9udFNpemUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpIHx8IFwiMTZweFwiO1xuXHRcdGNvbnN0IGZvbnRGYW1pbHkgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1mYW1pbHlcIikgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0XHRjb25zdCBmb250U3RyZXRjaCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXN0cmV0Y2hcIikgfHwgXCJub3JtYWxcIjtcblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRTdHJldGNoID0gZm9udFN0cmV0Y2guaW5jbHVkZXMoXCIlXCIpID8gXCJub3JtYWxcIiA6IGZvbnRTdHJldGNoO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5sZXR0ZXJTcGFjaW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImxldHRlci1zcGFjaW5nXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRLZXJuaW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQta2VybmluZ1wiKSB8fCBcImF1dG9cIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFZhcmlhbnRDYXBzID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtdmFyaWFudC1jYXBzXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnQgPSBgJHtmb250V2VpZ2h0fSAke2ZvbnRTaXplfSAke2ZvbnRGYW1pbHl9YDtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG59O1xudmFyIG1lYXN1cmVUZXh0ID0gKHRleHQsIGVsZW1lbnQpID0+IHtcblx0aWYgKGN0eCkge1xuXHRcdGluaXRUZXh0U3R5bGUoZWxlbWVudCwgY3R4KTtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG5cdHJldHVybiB7IHdpZHRoOiBudWxsIH07XG59O1xudmFyIG1lYXN1cmVJbnB1dEluRm9jdXMgPSAoaW5wdXQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0LnZhbHVlLnNsaWNlKDAsIGlucHV0LnNlbGVjdGlvbkVuZCB8fCAwKTtcblx0cmV0dXJuIG1lYXN1cmVUZXh0KHRleHQsIGlucHV0KTtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb24gPSAoaW5wdXQsIHBvaW50KSA9PiB7XG5cdGNvbnN0IHRleHQgPSBpbnB1dD8udmFsdWUgfHwgXCJcIjtcblx0aWYgKGN0eCkge1xuXHRcdGluaXRUZXh0U3R5bGUoaW5wdXQsIGN0eCk7XG5cdFx0bGV0IGN1cnJlbnRXaWR0aCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjdXJyZW50V2lkdGggPSBjdHgubWVhc3VyZVRleHQodGV4dC5zbGljZSgwLCBpKSk/LndpZHRoO1xuXHRcdFx0aWYgKGN1cnJlbnRXaWR0aCA9PSBudWxsKSByZXR1cm4gdGV4dC5sZW5ndGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoICE9IG51bGwgJiYgY3VycmVudFdpZHRoID49IHBvaW50WzBdKSByZXR1cm4gTWF0aC5tYXgoaSAtIDEsIDApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGV4dC5sZW5ndGg7XG59O1xudmFyIGNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCA9IChpbnB1dCwgY2xpZW50KSA9PiB7XG5cdGNvbnN0IGJveCA9IGlucHV0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRjb25zdCBwb2ludCA9IFtjbGllbnRbMF0gLSBib3gubGVmdCAvIHVuZml4ZWRDbGllbnRab29tKCksIGNsaWVudFsxXSAtIGJveC50b3AgLyB1bmZpeGVkQ2xpZW50Wm9vbSgpXTtcblx0cmV0dXJuIGNvbXB1dGVDYXJldFBvc2l0aW9uKGlucHV0LCBwb2ludCk7XG59O1xuXG4vLyBzcmMvYWdhdGUvTGF1bmNoZXJHcmlkLnRzXG52YXIgcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQgPSAoZWwsIGxheW91dE92ZXJyaWRlKSA9PiB7XG5cdGNvbnN0IGMgPSBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtY29sdW1uc1wiKSB8fCBcIlwiLCAxMCk7XG5cdGNvbnN0IHIgPSBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtcm93c1wiKSB8fCBcIlwiLCAxMCk7XG5cdGNvbnN0IGJhc2UgPSBub3JtYWxpemVHcmlkTGF5b3V0KGxheW91dE92ZXJyaWRlID8/IFs0LCA4XSk7XG5cdHJldHVybiBbTnVtYmVyLmlzRmluaXRlKGMpICYmIGMgPiAwID8gYyA6IGJhc2VbMF0sIE51bWJlci5pc0Zpbml0ZShyKSAmJiByID4gMCA/IHIgOiBiYXNlWzFdXTtcbn07XG52YXIgcmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50ID0gKGdyaWRTeXN0ZW0sIGNsaWVudFBvaW50LCBhcmdzLCBtb2RlID0gXCJmbG9vclwiKSA9PiB7XG5cdGlmICghZ3JpZFN5c3RlbSkgcmV0dXJuIFswLCAwXTtcblx0Y29uc3QgcmVjdCA9IGdyaWRTeXN0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKTtcblx0aWYgKCFyZWN0KSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCBsYXlvdXQgPSByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudChncmlkU3lzdGVtLCBhcmdzPy5sYXlvdXQpO1xuXHRjb25zdCBvcmllbnQgPSBvcmllbnRPZihncmlkU3lzdGVtKTtcblx0Y29uc3QgY3MgPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/LihncmlkU3lzdGVtKTtcblx0Y29uc3QgcGwgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nTGVmdCkgfHwgMDtcblx0Y29uc3QgcHQgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nVG9wKSB8fCAwO1xuXHRjb25zdCBwciA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdSaWdodCkgfHwgMDtcblx0Y29uc3QgcGIgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nQm90dG9tKSB8fCAwO1xuXHRjb25zdCBjb250ZW50VyA9IE1hdGgubWF4KDEsIChyZWN0LndpZHRoIHx8IGdyaWRTeXN0ZW0uY2xpZW50V2lkdGggfHwgMSkgLSBwbCAtIHByKTtcblx0Y29uc3QgY29udGVudEggPSBNYXRoLm1heCgxLCAocmVjdC5oZWlnaHQgfHwgZ3JpZFN5c3RlbS5jbGllbnRIZWlnaHQgfHwgMSkgLSBwdCAtIHBiKTtcblx0Y29uc3QgY3NDb29yZCA9IFsoY2xpZW50UG9pbnQ/LlswXSB8fCAwKSAtIHJlY3QubGVmdCAtIHBsLCAoY2xpZW50UG9pbnQ/LlsxXSB8fCAwKSAtIHJlY3QudG9wIC0gcHRdO1xuXHRyZXR1cm4gcmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsKGNzQ29vcmQsIFtjb250ZW50VywgY29udGVudEhdLCBsYXlvdXQsIG9yaWVudCwge1xuXHRcdG1vZGUsXG5cdFx0cmVkaXJlY3Q6IHtcblx0XHRcdGl0ZW06IGFyZ3M/Lml0ZW0sXG5cdFx0XHRsaXN0OiBhcmdzPy5saXN0LFxuXHRcdFx0aXRlbXM6IGFyZ3M/Lml0ZW1zXG5cdFx0fVxuXHR9KTtcbn07XG5cbi8vIHNyYy9kZWNvci9BbmltYXRpb24udHNcbnZhciBhbmltYXRlU2hvdyA9ICh0YXJnZXQpID0+IGFwcGVhcih0YXJnZXQsIGRlY29yU2hvdyk7XG52YXIgYW5pbWF0ZUhpZGUgPSAodGFyZ2V0KSA9PiBkaXNhcHBlYXIodGFyZ2V0LCBkZWNvckhpZGUpO1xuXG4vLyBzcmMvZGVjb3IvU2hhcGUudHNcbnZhciBXYXZ5U2hhcGVkQ2lyY2xlID0gKHN0ZXBzID0gMTAwLCBhbXBsaXR1ZGUgPSAuMDUsIGZyZXEgPSA4KSA9PiB7XG5cdGNvbnN0IHBvaW50cyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzOyBpKyspIHBvaW50cy5wdXNoKGkgLyBzdGVwcyk7XG5cdGNvbnN0IGFuZ2xlID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoJHtzdGVwfXJhZCAqIHBpICogMilgO1xuXHR9O1xuXHRjb25zdCB2YXJpYW50ID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoY2FsYyhjb3MoY2FsYyh2YXIoLS1jbGlwLWZyZXEsIDgpICogJHthbmdsZShzdGVwKX0pKSAqIDAuNSArIDAuNSkgKiB2YXIoLS1jbGlwLWFtcGxpdHVkZSwgMCkpYDtcblx0fTtcblx0Y29uc3QgZnVuYyA9IChzdGVwKSA9PiBbYGNhbGMoY2FsYygwLjUgKyBjYWxjKGNvcygke2FuZ2xlKHN0ZXApfSkgKiBjYWxjKDAuNSAtICR7dmFyaWFudChzdGVwKX0pKSkgKiB2YXIoLS1pY29uLXNpemUsIDEwMCUpKWAsIGBjYWxjKGNhbGMoMC41ICsgY2FsYyhzaW4oJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgXTtcblx0cmV0dXJuIHtcblx0XHRcIi0tY2xpcC1hbXBsaXR1ZGVcIjogYW1wbGl0dWRlLFxuXHRcdFwiLS1jbGlwLWZyZXFcIjogZnJlcSxcblx0XHRcIi0tY2xpcC1wYXRoXCI6IGBwb2x5Z29uKCR7cG9pbnRzLm1hcCgoc3RlcCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZ1bmMoc3RlcCkuam9pbihcIiBcIik7XG5cdFx0fSkuam9pbihcIiwgXCIpfSlgXG5cdH07XG59O1xuXG4vLyBzcmMvbWl4aW4vT2JzZXJ2ZXIudHNcbnZhciBvbkJvcmRlck9ic2VydmVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQm9yZGVyT2JzZXJ2ZVwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUkMSA9IGdsb2JhbFRoaXNbb25Cb3JkZXJPYnNlcnZlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgb25Db250ZW50T2JzZXJ2ZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAb25Db250ZW50T2JzZXJ2ZVwiKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlJDEgPSBnbG9iYWxUaGlzW29uQ29udGVudE9ic2VydmVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB1bndyYXBGcm9tUXVlcnkgPSAoZWxlbWVudCkgPT4ge1xuXHRpZiAodHlwZW9mIGVsZW1lbnQ/LmN1cnJlbnQgPT0gXCJvYmplY3RcIikgZWxlbWVudCA9IGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudD8uY3VycmVudCA/PyAodHlwZW9mIGVsZW1lbnQ/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGVsZW1lbnQ/LnNlbGYgOiBudWxsKSA/PyBlbGVtZW50O1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgbm9ybWFsaXplU2VsZWN0b3IgPSAoc2VsZWN0b3IsIGZhbGxiYWNrID0gXCIqXCIpID0+IHtcblx0aWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbGxiYWNrO1xuXHRyZXR1cm4gc2VsZWN0b3IudHJpbSgpIHx8IGZhbGxiYWNrO1xufTtcbnZhciBzYWZlUXVlcnlTZWxlY3RvckFsbCA9IChlbCwgc2VsZWN0b3IpID0+IHtcblx0aWYgKCFlbCB8fCB0eXBlb2YgZWwucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gW107XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLCBcIlwiKTtcblx0aWYgKCFzZWwpIHJldHVybiBbXTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkgfHwgW10pO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gW107XG5cdH1cbn07XG52YXIgc2FmZU1hdGNoZXMgPSAoZWwsIHNlbGVjdG9yKSA9PiB7XG5cdGlmICghZWwgfHwgdHlwZW9mIGVsLm1hdGNoZXMgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3RvciwgXCJcIik7XG5cdGlmICghc2VsKSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0cmV0dXJuICEhZWwubWF0Y2hlcyhzZWwpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgb2JzZXJ2ZUNvbnRlbnRCb3ggPSAoZWxlbWVudCwgY2IpID0+IHtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlJDEuaGFzKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCkpKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gW107XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRCb3hTaXplID0gZW50cnkuY29udGVudEJveFNpemVbMF07XG5cdFx0XHRcdGlmIChjb250ZW50Qm94U2l6ZSkgY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYj8uKGNvbnRlbnRCb3hTaXplLCBvYnNlcnZlcikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNiPy4oe1xuXHRcdFx0aW5saW5lU2l6ZTogZWxlbWVudC5jbGllbnRXaWR0aCxcblx0XHRcdGJsb2NrU2l6ZTogZWxlbWVudC5jbGllbnRIZWlnaHRcblx0XHR9LCBvYnNlcnZlcik7XG5cdFx0b25Db250ZW50T2JzZXJ2ZSQxLnNldChlbGVtZW50LCBjYWxsYmFja3MpO1xuXHRcdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJjb250ZW50LWJveFwiIH0pO1xuXHR9XG5cdG9uQ29udGVudE9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnB1c2g/LihjYik7XG5cdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IG9uQ29udGVudE9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnNwbGljZT8uKG9uQ29udGVudE9ic2VydmUkMS5nZXQoZWxlbWVudCk/LmluZGV4T2YoY2IpIHx8IC0xLCAxKSB9O1xufTtcbnZhciBvYnNlcnZlQm9yZGVyQm94ID0gKGVsZW1lbnQsIGNiKSA9PiB7XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlJDEuaGFzKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCkpKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gW107XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgYm9yZGVyQm94U2l6ZSA9IGVudHJ5LmJvcmRlckJveFNpemVbMF07XG5cdFx0XHRcdGlmIChib3JkZXJCb3hTaXplKSBjYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiPy4oYm9yZGVyQm94U2l6ZSwgb2JzZXJ2ZXIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYj8uKHtcblx0XHRcdGlubGluZVNpemU6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG5cdFx0XHRibG9ja1NpemU6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdG9uQm9yZGVyT2JzZXJ2ZSQxLnNldChlbGVtZW50LCBjYWxsYmFja3MpO1xuXHRcdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJib3JkZXItYm94XCIgfSk7XG5cdH1cblx0b25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5wdXNoPy4oY2IpO1xuXHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnNwbGljZT8uKG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uaW5kZXhPZihjYikgfHwgLTEsIDEpIH07XG59O1xudmFyIG9ic2VydmVBdHRyaWJ1dGUgPSAoZWxlbWVudCwgYXR0cmlidXRlLCBjYikgPT4ge1xuXHRpZiAodHlwZW9mIGVsZW1lbnQ/LnNlbGVjdG9yID09IFwic3RyaW5nXCIpIHJldHVybiBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvcihlbGVtZW50LCBlbGVtZW50Py5zZWxlY3RvciwgYXR0cmlidXRlLCBjYik7XG5cdGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBuZXcgU2V0KChhdHRyaWJ1dGUuc3BsaXQoXCIsXCIpIHx8IFthdHRyaWJ1dGVdKS5tYXAoKHMpID0+IHMudHJpbSgpKSk7XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgJiYgYXR0cmlidXRlTGlzdC5oYXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIGNiKG11dGF0aW9uLCBvYnNlcnZlcik7XG5cdH0pO1xuXHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCksIHtcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLmF0dHJpYnV0ZUxpc3RdXG5cdH0pO1xuXHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gY2Ioe1xuXHRcdHRhcmdldDogZWxlbWVudCxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0b2xkVmFsdWU6IGVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKGF0dHJpYnV0ZSlcblx0fSwgb2JzZXJ2ZXIpKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcbnZhciBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvciA9IChlbGVtZW50LCBzZWxlY3RvciwgYXR0cmlidXRlLCBjYikgPT4ge1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvcik7XG5cdGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBuZXcgU2V0KFsuLi5hdHRyaWJ1dGUuc3BsaXQoXCIsXCIpIHx8IFthdHRyaWJ1dGVdXS5tYXAoKHMpID0+IHMudHJpbSgpKSk7XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikge1xuXHRcdFx0Y29uc3QgYWRkZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykgfHwgW107XG5cdFx0XHRjb25zdCByZW1vdmVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcykgfHwgW107XG5cdFx0XHRhZGRlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRcdHJlbW92ZWROb2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRcdFsuLi5uZXcgU2V0KGFkZGVkTm9kZXMpXS5maWx0ZXIoKGVsKSA9PiBzYWZlTWF0Y2hlcyhlbCwgc2VsKSk/Lm1hcD8uKCh0YXJnZXQpID0+IHtcblx0XHRcdFx0YXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcblx0XHRcdFx0XHRpZiAodGFyZ2V0Py5wYXJlbnROb2RlID8/IHRhcmdldD8uaG9zdCA/PyB0YXJnZXQ/LmdldFJvb3ROb2RlPy4oKSkgY2Ioe1xuXHRcdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdFx0XHRcdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAoc2FmZU1hdGNoZXMobXV0YXRpb24udGFyZ2V0LCBzZWwpICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgJiYgYXR0cmlidXRlTGlzdC5oYXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIGNiKG11dGF0aW9uLCBvYnNlcnZlcik7XG5cdH0pO1xuXHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLmF0dHJpYnV0ZUxpc3RdLFxuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdGNoYXJhY3RlckRhdGE6IHRydWVcblx0fSk7XG5cdHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQsIHNlbCkubWFwKCh0YXJnZXQpID0+IGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSkpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yID0gXCIqXCIsIGNiID0gKG11dCwgb2JzKSA9PiB7fSkgPT4ge1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvcik7XG5cdGNvbnN0IHVud3JhcE5vZGVzQnlTZWxlY3RvciA9IChub2RlcykgPT4ge1xuXHRcdGNvbnN0ICRub2RlcyA9IEFycmF5LmZyb20obm9kZXMgfHwgW10pIHx8IFtdO1xuXHRcdCRub2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdHJldHVybiBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KCRub2RlcykudmFsdWVzKCkpXS5maWx0ZXIoKGVsKSA9PiBzYWZlTWF0Y2hlcyhlbCwgc2VsKSk7XG5cdH07XG5cdGxldCBvYlJlZiA9IG51bGw7XG5cdGNvbnN0IGhhbmRsZU11dGF0aW9uID0gKG11dGF0aW9uKSA9PiB7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBvYlJlZj8uZGVyZWY/LigpO1xuXHRcdGNvbnN0IGFkZGVkTm9kZXMgPSB1bndyYXBOb2Rlc0J5U2VsZWN0b3IobXV0YXRpb24uYWRkZWROb2Rlcyk7XG5cdFx0Y29uc3QgcmVtb3ZlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLnJlbW92ZWROb2Rlcyk7XG5cdFx0aWYgKGFkZGVkTm9kZXMubGVuZ3RoID4gMCB8fCByZW1vdmVkTm9kZXMubGVuZ3RoID4gMCkgY2I/Lih7XG5cdFx0XHR0eXBlOiBtdXRhdGlvbi50eXBlLFxuXHRcdFx0dGFyZ2V0OiBtdXRhdGlvbi50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lLFxuXHRcdFx0YXR0cmlidXRlTmFtZXNwYWNlOiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lc3BhY2UsXG5cdFx0XHRuZXh0U2libGluZzogbXV0YXRpb24ubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogbXV0YXRpb24ub2xkVmFsdWUsXG5cdFx0XHRwcmV2aW91c1NpYmxpbmc6IG11dGF0aW9uLnByZXZpb3VzU2libGluZyxcblx0XHRcdGFkZGVkTm9kZXMsXG5cdFx0XHRyZW1vdmVkTm9kZXNcblx0XHR9LCBvYnNlcnZlcik7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUNvbWUgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVPdXRDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlRm9jdXNDbGljayA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGZhY3RvcnMgPSB7XG5cdFx0cGFzc2l2ZTogdHJ1ZSxcblx0XHRjYXB0dXJlOiBmYWxzZVxuXHR9O1xuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtd2l0aGluXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1cy12aXNpYmxlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSBoYW5kbGVNdXRhdGlvbihtdXRhdGlvbik7XG5cdH0pO1xuXHRvYlJlZiA9IG5ldyBXZWFrUmVmKG9ic2VydmVyKTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWVcblx0fSk7XG5cdGNvbnN0IHNlbGVjdGVkID0gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCwgc2VsKTtcblx0aWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdGFkZGVkTm9kZXM6IHNlbGVjdGVkLFxuXHRcdHJlbW92ZWROb2RlczogW11cblx0fSwgb2JzZXJ2ZXIpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xuXG4vLyBzcmMvbWl4aW4vQmVoYXZpb3IudHNcbnZhciBib3VuZEJlaGF2aW9ycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGJpbmRCZWhhdmlvciA9IChlbGVtZW50LCBiZWhTZXQsIGJlaGF2aW9yKSA9PiB7XG5cdG5ldyBXZWFrUmVmKGVsZW1lbnQpO1xuXHRpZiAoIWJlaFNldC5oYXMoYmVoYXZpb3IpKSBiZWhTZXQuYWRkKGJlaGF2aW9yKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIHJlZmxlY3RCZWhhdmlvcnMgPSAoZWxlbWVudCwgYmVoYXZpb3JzKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRpZiAoYmVoYXZpb3JzKSB7XG5cdFx0Y29uc3QgYmVoU2V0ID0gYm91bmRCZWhhdmlvcnMuZ2V0T3JJbnNlcnQoZWxlbWVudCwgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG5cdFx0Wy4uLmJlaGF2aW9ycz8udmFsdWVzPy4oKSB8fCBbXV0ubWFwKChlKSA9PiBiaW5kQmVoYXZpb3IoZWxlbWVudCwgYmVoU2V0LCBlKSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyBzcmMvbWl4aW4vU3RvcmUudHNcbnZhciBuYW1lZFN0b3JlTWFwc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbmFtZWRTdG9yZU1hcHNcIik7XG52YXIgbmFtZWRTdG9yZU1hcHMgPSBnbG9iYWxUaGlzW25hbWVkU3RvcmVNYXBzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBnZXRTdG9yZXNPZkVsZW1lbnQgPSAobWFwLCBlbGVtZW50KSA9PiB7XG5cdGNvbnN0IEUgPSBbLi4ubWFwLmVudHJpZXMoKSB8fCBbXV07XG5cdHJldHVybiBuZXcgTWFwKEU/Lm1hcD8uKChbbiwgbV0pID0+IFtuLCBtPy5nZXQ/LihlbGVtZW50KV0pPy5maWx0ZXI/LigoW24sIGVdKSA9PiAhIWUpIHx8IFtdKTtcbn07XG52YXIgaXNXZWFrQ29tcGF0aWJsZSA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiAodHlwZW9mIGVsZW1lbnQgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZWxlbWVudCA9PSBcImZ1bmN0aW9uXCIpICYmIGVsZW1lbnQgIT0gbnVsbDtcbn07XG52YXIgYmluZFN0b3JlID0gKGVsZW1lbnQsIG5hbWUsIG9iaikgPT4ge1xuXHRpZiAoIWlzV2Vha0NvbXBhdGlibGUoZWxlbWVudCkgJiYgZWxlbWVudCAhPSBudWxsKSByZXR1cm4gZWxlbWVudDtcblx0bGV0IHdlYWtNYXAgPSBuYW1lZFN0b3JlTWFwcy5nZXQobmFtZSk7XG5cdGlmICghd2Vha01hcCkge1xuXHRcdHdlYWtNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0XHRuYW1lZFN0b3JlTWFwcy5zZXQobmFtZSwgd2Vha01hcCk7XG5cdH1cblx0aWYgKCF3ZWFrTWFwLmhhcyhlbGVtZW50KSAmJiBlbGVtZW50ICE9IG51bGwpIHdlYWtNYXAuc2V0KGVsZW1lbnQsIG9iaik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciByZWZsZWN0U3RvcmVzID0gKGVsZW1lbnQsIHN0b3JlcykgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIXN0b3JlcykgcmV0dXJuO1xuXHRmb3IgKGNvbnN0IFtuYW1lLCBvYmpdIG9mIHN0b3Jlcy5lbnRyaWVzKCkpIGJpbmRTdG9yZShlbGVtZW50LCBuYW1lLCBvYmopO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vIHNyYy9taXhpbi9NaXhpbnMudHNcbnZhciBnbG9iYWxzID0gZ2xvYmFsVGhpcztcbmZ1bmN0aW9uIHNoYXJlZChrZXksIGNyZWF0ZSkge1xuXHRjb25zdCBzeW1ib2wgPSBTeW1ib2wuZm9yKGtleSk7XG5cdHJldHVybiBnbG9iYWxzW3N5bWJvbF0gPz89IGNyZWF0ZSgpO1xufVxuZnVuY3Rpb24gaGFzRE9NKCkge1xuXHRyZXR1cm4gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBBdHRyICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSBcInVuZGVmaW5lZFwiO1xufVxuZnVuY3Rpb24gcmVxdWlyZURPTSgpIHtcblx0aWYgKCFoYXNET00oKSkgdGhyb3cgbmV3IEVycm9yKFwiQ3VzdG9tIEF0dHJpYnV0ZXMgcmVxdWlyZSBhIGJyb3dzZXIgRE9NLlwiKTtcbn1cbmZ1bmN0aW9uIHJlcG9ydChlcnJvcikge1xuXHRjb25zdCBmbiA9IGdsb2JhbHMucmVwb3J0RXJyb3I7XG5cdGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikgZm4uY2FsbChnbG9iYWxUaGlzLCBlcnJvcik7XG5cdGVsc2UgY29uc29sZS5lcnJvcihlcnJvcik7XG59XG5mdW5jdGlvbiBzYWZlKGNhbGxiYWNrKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVwb3J0KGVycm9yKTtcblx0XHRyZXR1cm47XG5cdH1cbn1cbmZ1bmN0aW9uIGRvbUVycm9yKG1lc3NhZ2UsIG5hbWUpIHtcblx0cmV0dXJuIG5ldyBET01FeGNlcHRpb24obWVzc2FnZSwgbmFtZSk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlTmFtZShuYW1lKSB7XG5cdHJldHVybiAvXlthLXpdW15BLVpcXHRcXG5cXGZcXHIgXFwwLz0+XSokLy50ZXN0KG5hbWUpICYmIG5hbWUuaW5jbHVkZXMoXCItXCIpICYmICEvXihhcmlhLXxkYXRhLXx4bWx8eGxpbmspLy50ZXN0KG5hbWUpICYmIG5hbWUgIT09IFwiYWNjZXB0LWNoYXJzZXRcIiAmJiBuYW1lICE9PSBcImh0dHAtZXF1aXZcIjtcbn1cbmZ1bmN0aW9uIGFzc2VydEF0dHJpYnV0ZU5hbWUobmFtZSkge1xuXHRpZiAoIWlzVmFsaWRDdXN0b21BdHRyaWJ1dGVOYW1lKG5hbWUpKSB0aHJvdyBkb21FcnJvcihgSW52YWxpZCBjdXN0b20gYXR0cmlidXRlIG5hbWU6ICR7bmFtZX1gLCBcIlN5bnRheEVycm9yXCIpO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50JDEobm9kZSkge1xuXHRyZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gMTtcbn1cbmZ1bmN0aW9uIGlzSFRNTChlbGVtZW50KSB7XG5cdHJldHVybiBlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XG59XG5mdW5jdGlvbiBpc1NoYWRvdyhub2RlKSB7XG5cdHJldHVybiBub2RlLm5vZGVUeXBlID09PSAxMSAmJiBcImhvc3RcIiBpbiBub2RlO1xufVxudmFyIGJvdW5kTWl4aW5TZXQgPSBzaGFyZWQoXCJkb20udHNAYm91bmRNaXhpblNldFwiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSk7XG52YXIgbWl4aW5FbGVtZW50cyA9IHNoYXJlZChcImRvbS50c0BtaXhpbkVsZW1lbnRzXCIsICgpID0+IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpKTtcbnZhciBtaXhpblJlZ2lzdHJ5ID0gc2hhcmVkKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG52YXIgbWl4aW5OYW1lc3BhY2UgPSBzaGFyZWQoXCJkb20udHNAbWl4aW5OYW1lc3BhY2VcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCkpO1xudmFyIGVuZ2luZSA9IHNoYXJlZChcImRvbS50c0BtaXhpbnMyLmVuZ2luZVwiLCAoKSA9PiAoe1xuXHRiaW5kaW5nczogLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksXG5cdHJvb3RzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHR3YXRjaGVzOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuXHRwZW5kaW5nOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHRxdWV1ZWQ6IGZhbHNlLFxuXHRkYXRhU291cmNlOiBTeW1ib2woXCJkYXRhLW1peGluXCIpLFxuXHRtYW51YWxTb3VyY2U6IFN5bWJvbChcIm1hbnVhbFwiKSxcblx0Y2xvc2VkU2hhZG93czogLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksXG5cdHByb2Nlc3Npbmc6IGZhbHNlXG59KSk7XG52YXIgcm9vdHMgPSBlbmdpbmUucm9vdHM7XG5mdW5jdGlvbiBzaGFkb3dPZihlbGVtZW50KSB7XG5cdHJldHVybiBlbGVtZW50LnNoYWRvd1Jvb3QgPz8gZW5naW5lLmNsb3NlZFNoYWRvd3MuZ2V0KGVsZW1lbnQpID8/IG51bGw7XG59XG5mdW5jdGlvbiogZWxlbWVudHNJbihyb290KSB7XG5cdGNvbnN0IHN0YWNrID0gW3Jvb3RdO1xuXHR3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpO1xuXHRcdGlmIChpc0VsZW1lbnQkMShub2RlKSkgeWllbGQgbm9kZTtcblx0XHRmb3IgKGxldCBjaGlsZCA9IG5vZGUubGFzdENoaWxkOyBjaGlsZDsgY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpIHN0YWNrLnB1c2goY2hpbGQpO1xuXHRcdGlmIChpc0VsZW1lbnQkMShub2RlKSkge1xuXHRcdFx0Y29uc3Qgc2hhZG93ID0gc2hhZG93T2Yobm9kZSk7XG5cdFx0XHRpZiAoc2hhZG93KSBzdGFjay5wdXNoKHNoYWRvdyk7XG5cdFx0fVxuXHR9XG59XG5mdW5jdGlvbiogbGlnaHRFbGVtZW50c0luKHJvb3QpIHtcblx0Y29uc3Qgc3RhY2sgPSBbcm9vdF07XG5cdHdoaWxlIChzdGFjay5sZW5ndGgpIHtcblx0XHRjb25zdCBub2RlID0gc3RhY2sucG9wKCk7XG5cdFx0aWYgKGlzRWxlbWVudCQxKG5vZGUpKSB5aWVsZCBub2RlO1xuXHRcdGZvciAobGV0IGNoaWxkID0gbm9kZS5sYXN0Q2hpbGQ7IGNoaWxkOyBjaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZykgc3RhY2sucHVzaChjaGlsZCk7XG5cdH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNGb3IoYmluZGluZykge1xuXHRjb25zdCByZXN1bHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRmb3IgKGNvbnN0IHNvdXJjZSBvZiBiaW5kaW5nPy5zb3VyY2VzID8/IFtdKSBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJvYmplY3RcIiAmJiBzb3VyY2Uubm9kZVR5cGUgPT09IDIpIHJlc3VsdC5hZGQoc291cmNlKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQsIG1peGluLCBhdHRyaWJ1dGUpIHtcblx0Y29uc3QgYmluZGluZyA9IG1peGluID8gZW5naW5lLmJpbmRpbmdzLmdldChlbGVtZW50KT8uZ2V0KG1peGluKSA6IHZvaWQgMDtcblx0Y29uc3QgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNGb3IoYmluZGluZyk7XG5cdGF0dHJpYnV0ZSA/Pz0gYXR0cmlidXRlcy52YWx1ZXMoKS5uZXh0KCkudmFsdWUgPz8gYmluZGluZz8ubGFzdEF0dHJpYnV0ZTtcblx0cmV0dXJuIHtcblx0XHRzdG9yZVNldDogZ2V0U3RvcmVzT2ZFbGVtZW50KG5hbWVkU3RvcmVNYXBzLCBlbGVtZW50KSxcblx0XHRtaXhpblNldDogYm91bmRNaXhpblNldC5nZXQoZWxlbWVudCksXG5cdFx0YmVoYXZpb3JTZXQ6IGJvdW5kQmVoYXZpb3JzLmdldChlbGVtZW50KSxcblx0XHRhdHRyaWJ1dGUsXG5cdFx0YXR0cmlidXRlcyxcblx0XHR2YWx1ZTogYXR0cmlidXRlPy52YWx1ZSxcblx0XHRzaWduYWw6IGJpbmRpbmc/LmNvbnRyb2xsZXI/LnNpZ25hbFxuXHR9O1xufVxuZnVuY3Rpb24gYmluZGluZ0ZvcihlbGVtZW50LCBtaXhpbikge1xuXHRsZXQgbWFwID0gZW5naW5lLmJpbmRpbmdzLmdldChlbGVtZW50KTtcblx0aWYgKCFtYXApIGVuZ2luZS5iaW5kaW5ncy5zZXQoZWxlbWVudCwgbWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG5cdGxldCBiaW5kaW5nID0gbWFwLmdldChtaXhpbik7XG5cdGlmICghYmluZGluZykgbWFwLnNldChtaXhpbiwgYmluZGluZyA9IHtcblx0XHRzb3VyY2VzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHRcdGNvbm5lY3RlZDogZmFsc2UsXG5cdFx0ZG9jdW1lbnQ6IGVsZW1lbnQub3duZXJEb2N1bWVudCxcblx0XHRyZWNvbmNpbGluZzogZmFsc2UsXG5cdFx0ZGlydHk6IGZhbHNlXG5cdH0pO1xuXHRyZXR1cm4gYmluZGluZztcbn1cbmZ1bmN0aW9uIGNhbGxNaXhpbihlbGVtZW50LCBtaXhpbiwgbmFtZSwgYXR0cmlidXRlLCAuLi5leHRyYSkge1xuXHRjb25zdCBjYWxsYmFjayA9IG1peGluW25hbWVdO1xuXHRpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0cmV0dXJuIHNhZmUoKCkgPT4gUmVmbGVjdC5hcHBseShjYWxsYmFjaywgbWl4aW4sIFtcblx0XHRuZXcgV2Vha1JlZihlbGVtZW50KSxcblx0XHRtaXhpbixcblx0XHRnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50LCBtaXhpbiwgYXR0cmlidXRlKSxcblx0XHQuLi5leHRyYVxuXHRdKSk7XG59XG5mdW5jdGlvbiByZWNvbmNpbGVCaW5kaW5nKGVsZW1lbnQsIG1peGluLCBiaW5kaW5nKSB7XG5cdGlmIChiaW5kaW5nLnJlY29uY2lsaW5nKSB7XG5cdFx0YmluZGluZy5kaXJ0eSA9IHRydWU7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGJpbmRpbmcucmVjb25jaWxpbmcgPSB0cnVlO1xuXHR0cnkge1xuXHRcdGZvciAobGV0IHR1cm4gPSAwOyB0dXJuIDwgMzI7IHR1cm4rKykge1xuXHRcdFx0YmluZGluZy5kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0Y29uc3Qgb2xkRG9jdW1lbnQgPSBiaW5kaW5nLmRvY3VtZW50O1xuXHRcdFx0YmluZGluZy5kb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcblx0XHRcdGlmIChvbGREb2N1bWVudCAhPT0gYmluZGluZy5kb2N1bWVudCkgY2FsbE1peGluKGVsZW1lbnQsIG1peGluLCBcImFkb3B0ZWRDYWxsYmFja1wiLCB2b2lkIDAsIG9sZERvY3VtZW50LCBiaW5kaW5nLmRvY3VtZW50KTtcblx0XHRcdGNvbnN0IHdhbnRlZCA9IGJpbmRpbmcuc291cmNlcy5zaXplID4gMCAmJiBlbGVtZW50LmlzQ29ubmVjdGVkO1xuXHRcdFx0aWYgKHdhbnRlZCAhPT0gYmluZGluZy5jb25uZWN0ZWQpIHtcblx0XHRcdFx0YmluZGluZy5jb25uZWN0ZWQgPSB3YW50ZWQ7XG5cdFx0XHRcdGxldCBzZXQgPSBib3VuZE1peGluU2V0LmdldChlbGVtZW50KTtcblx0XHRcdFx0aWYgKCFzZXQpIGJvdW5kTWl4aW5TZXQuc2V0KGVsZW1lbnQsIHNldCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKTtcblx0XHRcdFx0bGV0IGVsZW1lbnRzID0gbWl4aW5FbGVtZW50cy5nZXQobWl4aW4pO1xuXHRcdFx0XHRpZiAoIWVsZW1lbnRzKSBtaXhpbkVsZW1lbnRzLnNldChtaXhpbiwgZWxlbWVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKSk7XG5cdFx0XHRcdGlmICh3YW50ZWQpIHtcblx0XHRcdFx0XHRzZXQuYWRkKG1peGluKTtcblx0XHRcdFx0XHRlbGVtZW50cy5hZGQoZWxlbWVudCk7XG5cdFx0XHRcdFx0YmluZGluZy5jb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRcdFx0XHRcdGNvbnN0IGNsZWFudXAgPSBjYWxsTWl4aW4oZWxlbWVudCwgbWl4aW4sIFwiY29ubmVjdFwiKTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNsZWFudXAgPT09IFwiZnVuY3Rpb25cIikgYmluZGluZy5jbGVhbnVwID0gY2xlYW51cDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXQuZGVsZXRlKG1peGluKTtcblx0XHRcdFx0XHRlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG5cdFx0XHRcdFx0Y29uc3QgY2xlYW51cCA9IGJpbmRpbmcuY2xlYW51cDtcblx0XHRcdFx0XHRiaW5kaW5nLmNsZWFudXAgPSB2b2lkIDA7XG5cdFx0XHRcdFx0c2FmZSgoKSA9PiBiaW5kaW5nLmNvbnRyb2xsZXI/LmFib3J0KCkpO1xuXHRcdFx0XHRcdGlmIChjbGVhbnVwKSBzYWZlKGNsZWFudXApO1xuXHRcdFx0XHRcdGNhbGxNaXhpbihlbGVtZW50LCBtaXhpbiwgXCJkaXNjb25uZWN0XCIpO1xuXHRcdFx0XHRcdGJpbmRpbmcuY29udHJvbGxlciA9IHZvaWQgMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFiaW5kaW5nLmRpcnR5KSBicmVhaztcblx0XHRcdGlmICh0dXJuID09PSAzMSkge1xuXHRcdFx0XHRyZXBvcnQoLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcIkEgbWl4aW4gcmVwZWF0ZWRseSBjaGFuZ2VkIGl0cyBvd24gYmluZGluZyBkdXJpbmcgbGlmZWN5Y2xlIGRlbGl2ZXJ5LlwiKSk7XG5cdFx0XHRcdGVucXVldWUoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdGJpbmRpbmcucmVjb25jaWxpbmcgPSBmYWxzZTtcblx0fVxuXHRpZiAoIWJpbmRpbmcuc291cmNlcy5zaXplICYmICFiaW5kaW5nLmNvbm5lY3RlZCkgZW5naW5lLmJpbmRpbmdzLmdldChlbGVtZW50KT8uZGVsZXRlKG1peGluKTtcbn1cbmZ1bmN0aW9uIGFjcXVpcmUoZWxlbWVudCwgbWl4aW4sIHNvdXJjZSkge1xuXHRjb25zdCBiaW5kaW5nID0gYmluZGluZ0ZvcihlbGVtZW50LCBtaXhpbik7XG5cdGJpbmRpbmcuc291cmNlcy5hZGQoc291cmNlKTtcblx0aWYgKHR5cGVvZiBzb3VyY2UgPT09IFwib2JqZWN0XCIgJiYgc291cmNlLm5vZGVUeXBlID09PSAyKSBiaW5kaW5nLmxhc3RBdHRyaWJ1dGUgPSBzb3VyY2U7XG5cdHJlY29uY2lsZUJpbmRpbmcoZWxlbWVudCwgbWl4aW4sIGJpbmRpbmcpO1xufVxuZnVuY3Rpb24gcmVsZWFzZShlbGVtZW50LCBtaXhpbiwgc291cmNlKSB7XG5cdGNvbnN0IGJpbmRpbmcgPSBlbmdpbmUuYmluZGluZ3MuZ2V0KGVsZW1lbnQpPy5nZXQobWl4aW4pO1xuXHRpZiAoIWJpbmRpbmcpIHJldHVybjtcblx0YmluZGluZy5zb3VyY2VzLmRlbGV0ZShzb3VyY2UpO1xuXHRyZWNvbmNpbGVCaW5kaW5nKGVsZW1lbnQsIG1peGluLCBiaW5kaW5nKTtcbn1cbmZ1bmN0aW9uIGVucXVldWUoZWxlbWVudCkge1xuXHRlbmdpbmUucGVuZGluZy5hZGQoZWxlbWVudCk7XG5cdGlmICghZW5naW5lLnF1ZXVlZCkge1xuXHRcdGVuZ2luZS5xdWV1ZWQgPSB0cnVlO1xuXHRcdHF1ZXVlTWljcm90YXNrKCgpID0+IHtcblx0XHRcdGVuZ2luZS5xdWV1ZWQgPSBmYWxzZTtcblx0XHRcdGRyYWluUGVuZGluZygpO1xuXHRcdH0pO1xuXHR9XG59XG5mdW5jdGlvbiBkcmFpblBlbmRpbmcoKSB7XG5cdGlmIChlbmdpbmUucHJvY2Vzc2luZykgcmV0dXJuO1xuXHRlbmdpbmUucHJvY2Vzc2luZyA9IHRydWU7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcGVuZGluZyA9IFsuLi5lbmdpbmUucGVuZGluZ107XG5cdFx0ZW5naW5lLnBlbmRpbmcuY2xlYXIoKTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcGVuZGluZykgc2FmZSgoKSA9PiB1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCkpO1xuXHR9IGZpbmFsbHkge1xuXHRcdGVuZ2luZS5wcm9jZXNzaW5nID0gZmFsc2U7XG5cdH1cbn1cbmZ1bmN0aW9uIGRhdGFOYW1lcyhlbGVtZW50KSB7XG5cdHJldHVybiBuZXcgU2V0KChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWl4aW5cIikgPz8gXCJcIikuc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbikpO1xufVxuZnVuY3Rpb24gd3JpdGVEYXRhTmFtZXMoZWxlbWVudCwgbmFtZXMpIHtcblx0Y29uc3QgbmV4dCA9IFsuLi5uYW1lc10uam9pbihcIiBcIik7XG5cdGlmIChuZXh0KSB7XG5cdFx0aWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1taXhpblwiKSAhPT0gbmV4dCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1peGluXCIsIG5leHQpO1xuXHR9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS1taXhpblwiKSkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1peGluXCIpO1xufVxuZnVuY3Rpb24gdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpIHtcblx0Y29uc3Qgc2VsZWN0ZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgZGF0YU5hbWVzKGVsZW1lbnQpKSB7XG5cdFx0Y29uc3QgbWl4aW4gPSBtaXhpblJlZ2lzdHJ5LmdldChuYW1lKTtcblx0XHRpZiAobWl4aW4pIHNlbGVjdGVkLmFkZChtaXhpbik7XG5cdH1cblx0Zm9yIChjb25zdCBbbWl4aW4sIGJpbmRpbmddIG9mIFsuLi5lbmdpbmUuYmluZGluZ3MuZ2V0KGVsZW1lbnQpID8/IFtdXSkgaWYgKGJpbmRpbmcuc291cmNlcy5oYXMoZW5naW5lLmRhdGFTb3VyY2UpICYmICFzZWxlY3RlZC5oYXMobWl4aW4pKSByZWxlYXNlKGVsZW1lbnQsIG1peGluLCBlbmdpbmUuZGF0YVNvdXJjZSk7XG5cdGZvciAoY29uc3QgbWl4aW4gb2Ygc2VsZWN0ZWQpIGFjcXVpcmUoZWxlbWVudCwgbWl4aW4sIGVuZ2luZS5kYXRhU291cmNlKTtcblx0Zm9yIChjb25zdCBbbWl4aW4sIGJpbmRpbmddIG9mIFsuLi5lbmdpbmUuYmluZGluZ3MuZ2V0KGVsZW1lbnQpID8/IFtdXSkgcmVjb25jaWxlQmluZGluZyhlbGVtZW50LCBtaXhpbiwgYmluZGluZyk7XG5cdHJldHVybiBlbGVtZW50O1xufVxuZnVuY3Rpb24gdXBkYXRlTWl4aW5BdHRyaWJ1dGVzKGVsZW1lbnQsIG1peGluKSB7XG5cdHJldHVybiB1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCk7XG59XG5mdW5jdGlvbiB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwoZWxlbWVudHMsIG1peGluKSB7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykgaWYgKG1peGluKSB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZWxlbWVudCwgbWl4aW4pO1xuXHRlbHNlIHVwZGF0ZUFsbE1peGlucyhlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMobWl4aW4pIHtcblx0Zm9yIChjb25zdCByb290IG9mIHJvb3RzKSB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwoZWxlbWVudHNJbihyb290KSwgbWl4aW4pO1xufVxuZnVuY3Rpb24gYmluZE1peGlucyhlbGVtZW50LCBtaXhpbiwgbWl4U2V0KSB7XG5cdGlmIChtaXhTZXQgJiYgIWJvdW5kTWl4aW5TZXQuaGFzKGVsZW1lbnQpKSBib3VuZE1peGluU2V0LnNldChlbGVtZW50LCBtaXhTZXQpO1xuXHRjb25zdCBuYW1lID0gbWl4aW5OYW1lc3BhY2UuZ2V0KG1peGluKSA/PyBtaXhpbi5uYW1lO1xuXHRpZiAobmFtZSkge1xuXHRcdGNvbnN0IG5hbWVzID0gZGF0YU5hbWVzKGVsZW1lbnQpO1xuXHRcdG5hbWVzLmFkZChuYW1lKTtcblx0XHR3cml0ZURhdGFOYW1lcyhlbGVtZW50LCBuYW1lcyk7XG5cdH1cblx0YWNxdWlyZShlbGVtZW50LCBtaXhpbiwgZW5naW5lLm1hbnVhbFNvdXJjZSk7XG5cdHVwZGF0ZUFsbE1peGlucyhlbGVtZW50KTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5mdW5jdGlvbiB1bmJpbmRNaXhpbnMoZWxlbWVudCwgbWl4aW4sIHJlZmxlY3QgPSB0cnVlKSB7XG5cdGlmIChyZWZsZWN0KSB7XG5cdFx0Y29uc3QgbmFtZSA9IG1peGluTmFtZXNwYWNlLmdldChtaXhpbikgPz8gbWl4aW4ubmFtZTtcblx0XHRpZiAobmFtZSkge1xuXHRcdFx0Y29uc3QgbmFtZXMgPSBkYXRhTmFtZXMoZWxlbWVudCk7XG5cdFx0XHRuYW1lcy5kZWxldGUobmFtZSk7XG5cdFx0XHR3cml0ZURhdGFOYW1lcyhlbGVtZW50LCBuYW1lcyk7XG5cdFx0fVxuXHR9XG5cdHJlbGVhc2UoZWxlbWVudCwgbWl4aW4sIGVuZ2luZS5tYW51YWxTb3VyY2UpO1xuXHRyZXR1cm4gdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gcmVmbGVjdE1peGlucyhlbGVtZW50LCBtaXhpbnMpIHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm4gZWxlbWVudDtcblx0Y29uc3QgdmFsdWVzID0gbWl4aW5zIGluc3RhbmNlb2YgTWFwID8gbWl4aW5zLnZhbHVlcygpIDogbWl4aW5zID8/IFtdO1xuXHRmb3IgKGNvbnN0IG1peGluIG9mIHZhbHVlcykgYmluZE1peGlucyhlbGVtZW50LCBtaXhpbik7XG5cdHJldHVybiBlbGVtZW50O1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJNaXhpbihuYW1lLCBtaXhpbikge1xuXHRjb25zdCBrZXkgPSBuYW1lLnRyaW0oKTtcblx0aWYgKCFrZXkgfHwgL1xccy8udGVzdChrZXkpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWl4aW4gbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHRva2VuLlwiKTtcblx0aWYgKCFtaXhpbiB8fCB0eXBlb2YgbWl4aW4gIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1peGluICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXhpbiBtdXN0IGJlIGFuIG9iamVjdC5cIik7XG5cdGNvbnN0IGV4aXN0aW5nID0gbWl4aW5SZWdpc3RyeS5nZXQoa2V5KTtcblx0aWYgKGV4aXN0aW5nICYmIGV4aXN0aW5nICE9PSBtaXhpbikge1xuXHRcdGNvbnNvbGUuZXJyb3IoYE1peGluIG5hbWUgYWxyZWFkeSByZWdpc3RlcmVkOiAke2tleX1gKTtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgcHJldmlvdXNOYW1lID0gbWl4aW5OYW1lc3BhY2UuZ2V0KG1peGluKTtcblx0aWYgKHByZXZpb3VzTmFtZSAmJiBwcmV2aW91c05hbWUgIT09IGtleSkgdGhyb3cgbmV3IEVycm9yKGBNaXhpbiBhbHJlYWR5IG5hbWVkOiAke3ByZXZpb3VzTmFtZX1gKTtcblx0bWl4aW5SZWdpc3RyeS5zZXQoa2V5LCBtaXhpbik7XG5cdG1peGluTmFtZXNwYWNlLnNldChtaXhpbiwga2V5KTtcblx0Zm9yIChjb25zdCByb290IG9mIHJvb3RzKSBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHNJbihyb290KSkgZW5xdWV1ZShlbGVtZW50KTtcblx0cmV0dXJuIG1peGluO1xufVxuZnVuY3Rpb24gdW5yZWdpc3Rlck1peGluKG5hbWUpIHtcblx0Y29uc3QgbWl4aW4gPSBtaXhpblJlZ2lzdHJ5LmdldChuYW1lKTtcblx0aWYgKCFtaXhpbikgcmV0dXJuIGZhbHNlO1xuXHRtaXhpblJlZ2lzdHJ5LmRlbGV0ZShuYW1lKTtcblx0aWYgKG1peGluTmFtZXNwYWNlLmdldChtaXhpbikgPT09IG5hbWUpIG1peGluTmFtZXNwYWNlLmRlbGV0ZShtaXhpbik7XG5cdGZvciAoY29uc3Qgcm9vdCBvZiByb290cykgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzSW4ocm9vdCkpIGVucXVldWUoZWxlbWVudCk7XG5cdHJldHVybiB0cnVlO1xufVxudmFyIG5hbWVSZWdpc3RyeUYgPSBzaGFyZWQoXCJkb20udHNAbWl4aW5zMi5uYW1lUmVnaXN0cnlGXCIsICgpID0+IHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gXCJ1bmRlZmluZWRcIiA/IHZvaWQgMCA6IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoKSA9PiB7fSkpO1xuZnVuY3Rpb24gY2FwdHVyZURpc3Bvc2VyKHJlc3VsdCwgbGlzdCkge1xuXHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJmdW5jdGlvblwiKSBsaXN0LnB1c2gocmVzdWx0KTtcbn1cbmZ1bmN0aW9uIHJlY29uY2lsZVRyZWVTb29uKHJvb3QpIHtcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzSW4ocm9vdCkpIHtcblx0XHRjb25zdCBzaGFkb3cgPSBzaGFkb3dPZihlbGVtZW50KTtcblx0XHRpZiAoc2hhZG93ICYmICFyb290cy5oYXMoc2hhZG93KSkgYWRkUm9vdChzaGFkb3cpO1xuXHRcdGVucXVldWUoZWxlbWVudCk7XG5cdH1cbn1cbmZ1bmN0aW9uIGhhbmRsZVJvb3RSZWNvcmRzKHJlY29yZHMpIHtcblx0Zm9yIChjb25zdCByZWNvcmQgb2YgcmVjb3Jkcykge1xuXHRcdGlmIChyZWNvcmQudHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIgJiYgaXNFbGVtZW50JDEocmVjb3JkLnRhcmdldCkpIGVucXVldWUocmVjb3JkLnRhcmdldCk7XG5cdFx0aWYgKHJlY29yZC50eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcmVjb3JkLnJlbW92ZWROb2RlcykgcmVjb25jaWxlVHJlZVNvb24obm9kZSk7XG5cdFx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcmVjb3JkLmFkZGVkTm9kZXMpIHJlY29uY2lsZVRyZWVTb29uKG5vZGUpO1xuXHRcdH1cblx0fVxufVxuZnVuY3Rpb24gYWRkUm9vdChyb290ID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsKSB7XG5cdGlmICghcm9vdCkgcmV0dXJuO1xuXHRyZXF1aXJlRE9NKCk7XG5cdGlmIChyb290cy5oYXMocm9vdCkpIHJldHVybiByb290O1xuXHRyb290cy5hZGQocm9vdCk7XG5cdGNvbnN0IGRpc3Bvc2VycyA9IFtdO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGhhbmRsZVJvb3RSZWNvcmRzKTtcblx0ZW5naW5lLndhdGNoZXMuc2V0KHJvb3QsIHtcblx0XHRvYnNlcnZlcixcblx0XHRkaXNwb3NlcnNcblx0fSk7XG5cdG9ic2VydmVyLm9ic2VydmUocm9vdCwge1xuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZXM6IHRydWVcblx0fSk7XG5cdGNhcHR1cmVEaXNwb3NlcihvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3Rvcihyb290LCBcIipcIiwgXCJkYXRhLW1peGluXCIsIChtdXRhdGlvbikgPT4ge1xuXHRcdGlmIChpc0VsZW1lbnQkMShtdXRhdGlvbi50YXJnZXQpKSBlbnF1ZXVlKG11dGF0aW9uLnRhcmdldCk7XG5cdH0pLCBkaXNwb3NlcnMpO1xuXHRjYXB0dXJlRGlzcG9zZXIob2JzZXJ2ZUJ5U2VsZWN0b3Iocm9vdCwgXCJbZGF0YS1taXhpbl1cIiwgKG11dGF0aW9uKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIG11dGF0aW9uLnJlbW92ZWROb2RlcykgcmVjb25jaWxlVHJlZVNvb24obm9kZSk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIHJlY29uY2lsZVRyZWVTb29uKG5vZGUpO1xuXHR9KSwgZGlzcG9zZXJzKTtcblx0dHJ5IHtcblx0XHRjYXB0dXJlRGlzcG9zZXIob2JzZXJ2ZVN0eWxlVHJlZShyb290KSwgZGlzcG9zZXJzKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGNvbnNvbGUud2FybihlKTtcblx0fVxuXHRwb2x5ZmlsbFN0YXRlLnJ1bnRpbWU/Lm9ic2VydmVSb290KHJvb3QpO1xuXHRyZWNvbmNpbGVUcmVlU29vbihyb290KTtcblx0cmV0dXJuIHJvb3Q7XG59XG5mdW5jdGlvbiByZW1vdmVSb290KHJvb3QpIHtcblx0Y29uc3Qgd2F0Y2ggPSBlbmdpbmUud2F0Y2hlcy5nZXQocm9vdCk7XG5cdGlmICh3YXRjaCkge1xuXHRcdHdhdGNoLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRmb3IgKGNvbnN0IGRpc3Bvc2Ugb2Ygd2F0Y2guZGlzcG9zZXJzKSBzYWZlKGRpc3Bvc2UpO1xuXHRcdGVuZ2luZS53YXRjaGVzLmRlbGV0ZShyb290KTtcblx0fVxuXHRyZXR1cm4gcm9vdHMuZGVsZXRlKHJvb3QpO1xufVxudmFyIERPTU1peGluID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihuYW1lID0gbnVsbCkge1xuXHRcdGlmIChuYW1lKSByZWdpc3Rlck1peGluKG5hbWUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3QoX2VsZW1lbnQsIF9zZWxmLCBfcmVsYXRlZCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoX2VsZW1lbnQsIF9zZWxmLCBfcmVsYXRlZCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHN0b3JlRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzLmdldCh0aGlzLm5hbWUgPz8gXCJcIik/LmdldChlbGVtZW50KTtcblx0fVxuXHRyZWxhdGVkRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQsIHRoaXMpO1xuXHR9XG5cdGdldCBlbGVtZW50cygpIHtcblx0XHRyZXR1cm4gbWl4aW5FbGVtZW50cy5nZXQodGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzLmdldCh0aGlzLm5hbWUgPz8gXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIG1peGluTmFtZXNwYWNlLmdldCh0aGlzKTtcblx0fVxufTtcbnZhciBwb2x5ZmlsbFN0YXRlID0gc2hhcmVkKFwiZG9tLnRzQG1peGluczIuYXR0cmlidXRlUG9seWZpbGxcIiwgKCkgPT4gKHt9KSk7XG5mdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcblx0cmV0dXJuIHR5cGVvZiBnbG9iYWxzLkN1c3RvbUF0dHJpYnV0ZVJlZ2lzdHJ5ID09PSBcImZ1bmN0aW9uXCIgJiYgZ2xvYmFscy5jdXN0b21BdHRyaWJ1dGVzICE9IG51bGwgJiYgdHlwZW9mIGdsb2JhbHMuY3VzdG9tQXR0cmlidXRlcy5kZWZpbmUgPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzUG9seWZpbGxlZCgpIHtcblx0cmV0dXJuICEhcG9seWZpbGxTdGF0ZS5ydW50aW1lICYmIGdsb2JhbHMuQ3VzdG9tQXR0cmlidXRlUmVnaXN0cnkgPT09IHBvbHlmaWxsU3RhdGUucnVudGltZS5SZWdpc3RyeTtcbn1cbmZ1bmN0aW9uIGFwcGx5KCkge1xuXHRyZXF1aXJlRE9NKCk7XG5cdGlmIChpc1N1cHBvcnRlZCgpKSByZXR1cm4gZ2xvYmFscy5jdXN0b21BdHRyaWJ1dGVzO1xuXHRpZiAoZ2xvYmFscy5DdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSAhPSBudWxsIHx8IGdsb2JhbHMuY3VzdG9tQXR0cmlidXRlcyAhPSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJBIHBhcnRpYWwgQ3VzdG9tIEF0dHJpYnV0ZXMgQVBJIGlzIGluc3RhbGxlZDsgcmVmdXNpbmcgdG8gb3ZlcndyaXRlIGl0LlwiKTtcblx0Y29uc3QgcnVudGltZSA9IGluc3RhbGxBdHRyaWJ1dGVQb2x5ZmlsbCgpO1xuXHRwb2x5ZmlsbFN0YXRlLnJ1bnRpbWUgPSBydW50aW1lO1xuXHRmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIHJ1bnRpbWUub2JzZXJ2ZVJvb3Qocm9vdCk7XG5cdGFkZFJvb3QoZG9jdW1lbnQpO1xuXHRyZXR1cm4gcnVudGltZS5yZWdpc3RyeTtcbn1cbmZ1bmN0aW9uIGdldEN1c3RvbUF0dHJpYnV0ZXMoKSB7XG5cdHJldHVybiBhcHBseSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tQXR0cmlidXRlUmVnaXN0cnkoKSB7XG5cdGFwcGx5KCk7XG5cdHJldHVybiBuZXcgZ2xvYmFscy5DdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSgpO1xufVxuZnVuY3Rpb24gZ2V0Q3VzdG9tQXR0cmlidXRlQmFzZSgpIHtcblx0YXBwbHkoKTtcblx0cmV0dXJuIGdsb2JhbHMuQXR0cjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUF0dHJpYnV0ZShuYW1lLCBvcHRpb25zID0ge30pIHtcblx0YXBwbHkoKTtcblx0Y29uc3QgZG9jID0gb3B0aW9ucy5kb2N1bWVudCA/PyBkb2N1bWVudDtcblx0cmV0dXJuIGRvYy5jcmVhdGVBdHRyaWJ1dGUuY2FsbChkb2MsIG5hbWUsIHsgY3VzdG9tQXR0cmlidXRlUmVnaXN0cnk6IG9wdGlvbnMucmVnaXN0cnkgfSk7XG59XG5mdW5jdGlvbiBpbnN0YWxsQXR0cmlidXRlUG9seWZpbGwoKSB7XG5cdGNvbnN0IE5hdGl2ZUF0dHIgPSBnbG9iYWxzLkF0dHI7XG5cdGNvbnN0IGRvY1Byb3RvID0gRG9jdW1lbnQucHJvdG90eXBlO1xuXHRjb25zdCBlbFByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG5cdGNvbnN0IG5hdGl2ZUNyZWF0ZUF0dHJpYnV0ZSA9IGRvY1Byb3RvLmNyZWF0ZUF0dHJpYnV0ZTtcblx0Y29uc3QgbmF0aXZlQ3JlYXRlQXR0cmlidXRlTlMgPSBkb2NQcm90by5jcmVhdGVBdHRyaWJ1dGVOUztcblx0Y29uc3QgbmF0aXZlQ3JlYXRlRWxlbWVudCA9IGRvY1Byb3RvLmNyZWF0ZUVsZW1lbnQ7XG5cdGNvbnN0IG5hdGl2ZUNyZWF0ZUVsZW1lbnROUyA9IGRvY1Byb3RvLmNyZWF0ZUVsZW1lbnROUztcblx0Y29uc3QgbmF0aXZlSW1wb3J0Tm9kZSA9IGRvY1Byb3RvLmltcG9ydE5vZGU7XG5cdGNvbnN0IG5hdGl2ZUF0dGFjaFNoYWRvdyA9IGVsUHJvdG8uYXR0YWNoU2hhZG93O1xuXHRjb25zdCBhdHRyaWJ1dGVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSwgXCJhdHRyaWJ1dGVzXCIpO1xuXHRjb25zdCBuYXRpdmVBdHRyaWJ1dGVzID0gYXR0cmlidXRlRGVzY3JpcHRvci5nZXQ7XG5cdGNvbnN0IEFMUkVBRFkgPSBTeW1ib2woXCJhbHJlYWR5IGNvbnN0cnVjdGVkXCIpO1xuXHRjb25zdCBjYWxsYmFja05hbWVzID0gW1xuXHRcdFwiY29ubmVjdGVkQ2FsbGJhY2tcIixcblx0XHRcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIsXG5cdFx0XCJjb25uZWN0ZWRNb3ZlQ2FsbGJhY2tcIixcblx0XHRcImFkb3B0ZWRDYWxsYmFja1wiLFxuXHRcdFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCJcblx0XTtcblx0Y29uc3QgaW50ZXJuYWxzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdGNvbnN0IHJlZ2lzdHJpZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0Y29uc3QgcmVnaXN0cnlEb2N1bWVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0Y29uc3QgZW50cmllcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRjb25zdCB0cmFja2VkID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdGNvbnN0IGFjdGl2ZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGNvbnN0IGF0dHJpYnV0ZU1hcHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0Y29uc3Qgb2JzZXJ2ZWRSb290cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRjb25zdCBsb2NhbE9ic2VydmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRsZXQgY29uc3RydWN0aW5nR2xvYmFsID0gZmFsc2U7XG5cdGxldCBnbG9iYWxSZWdpc3RyeTtcblx0ZnVuY3Rpb24gc2VsZihyZWdpc3RyeSkge1xuXHRcdGNvbnN0IHZhbHVlID0gaW50ZXJuYWxzLmdldChyZWdpc3RyeSk7XG5cdFx0aWYgKCF2YWx1ZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgaW52b2NhdGlvblwiKTtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0ZnVuY3Rpb24gbm9kZURvY3VtZW50KG5vZGUpIHtcblx0XHRyZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gOSA/IG5vZGUgOiBub2RlLm93bmVyRG9jdW1lbnQ7XG5cdH1cblx0ZnVuY3Rpb24gc2V0UmVnaXN0cnkobm9kZSwgcmVnaXN0cnkpIHtcblx0XHRyZWdpc3RyaWVzLnNldChub2RlLCByZWdpc3RyeSk7XG5cdFx0cmVnaXN0cnlEb2N1bWVudHMuc2V0KG5vZGUsIG5vZGUub3duZXJEb2N1bWVudCk7XG5cdH1cblx0ZnVuY3Rpb24gZ2xvYmFsT2YocmVnaXN0cnkpIHtcblx0XHRyZXR1cm4gcmVnaXN0cnkgJiYgIXNlbGYocmVnaXN0cnkpLnNjb3BlZCA/IHJlZ2lzdHJ5IDogbnVsbDtcblx0fVxuXHRmdW5jdGlvbiBleGNsdXNpdmVGcmFnbWVudChub2RlKSB7XG5cdFx0cmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IDExICYmICFpc1NoYWRvdyhub2RlKTtcblx0fVxuXHRmdW5jdGlvbiByZWdpc3RyeU9mKG5vZGUpIHtcblx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gOSkgcmV0dXJuIHJlZ2lzdHJpZXMuZ2V0KG5vZGUpID8/IG51bGw7XG5cdFx0aWYgKHJlZ2lzdHJpZXMuaGFzKG5vZGUpKSB7XG5cdFx0XHRjb25zdCByZWdpc3RyeSA9IHJlZ2lzdHJpZXMuZ2V0KG5vZGUpO1xuXHRcdFx0aWYgKHJlZ2lzdHJ5RG9jdW1lbnRzLmdldChub2RlKSA9PT0gbm9kZS5vd25lckRvY3VtZW50IHx8IHJlZ2lzdHJ5ICYmIHNlbGYocmVnaXN0cnkpLnNjb3BlZCkgcmV0dXJuIHJlZ2lzdHJ5O1xuXHRcdFx0Y29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0Y29uc3QgYWRvcHRlZCA9IGdsb2JhbE9mKCFpc0VsZW1lbnQkMShub2RlKSB8fCByZWdpc3RyeSB8fCAhcGFyZW50IHx8IGV4Y2x1c2l2ZUZyYWdtZW50KHBhcmVudCkgPyByZWdpc3RyeU9mKG5vZGUub3duZXJEb2N1bWVudCkgOiByZWdpc3RyeU9mKHBhcmVudCkpO1xuXHRcdFx0c2V0UmVnaXN0cnkobm9kZSwgYWRvcHRlZCk7XG5cdFx0XHRyZXR1cm4gYWRvcHRlZDtcblx0XHR9XG5cdFx0bGV0IHJlZ2lzdHJ5ID0gbnVsbDtcblx0XHRpZiAoaXNFbGVtZW50JDEobm9kZSkpIHtcblx0XHRcdGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcblx0XHRcdHJlZ2lzdHJ5ID0gcGFyZW50ICYmICFleGNsdXNpdmVGcmFnbWVudChwYXJlbnQpID8gcmVnaXN0cnlPZihwYXJlbnQpIDogbm9kZS5vd25lckRvY3VtZW50ID09PSBkb2N1bWVudCA/IGdsb2JhbFJlZ2lzdHJ5IDogbnVsbDtcblx0XHR9IGVsc2UgaWYgKGlzU2hhZG93KG5vZGUpKSByZWdpc3RyeSA9IG5vZGUub3duZXJEb2N1bWVudCA9PT0gZG9jdW1lbnQgPyBnbG9iYWxSZWdpc3RyeSA6IG51bGw7XG5cdFx0aWYgKHJlZ2lzdHJ5KSBzZXRSZWdpc3RyeShub2RlLCByZWdpc3RyeSk7XG5cdFx0cmV0dXJuIHJlZ2lzdHJ5O1xuXHR9XG5cdGZ1bmN0aW9uIGxvb2t1cChyZWdpc3RyeSwgbmFtZXNwYWNlLCBuYW1lKSB7XG5cdFx0cmV0dXJuIHJlZ2lzdHJ5ICYmIG5hbWVzcGFjZSA9PT0gbnVsbCA/IHNlbGYocmVnaXN0cnkpLmJ5TmFtZS5nZXQobmFtZSkgOiB2b2lkIDA7XG5cdH1cblx0ZnVuY3Rpb24gcmVnaXN0cnlPcHRpb24ob3B0aW9ucywgbnVsbGFibGUpIHtcblx0XHRpZiAodHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIgfHwgb3B0aW9ucyA9PT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcblx0XHRjb25zdCByZWdpc3RyeSA9IG9wdGlvbnMuY3VzdG9tQXR0cmlidXRlUmVnaXN0cnk7XG5cdFx0aWYgKHJlZ2lzdHJ5ID09PSB2b2lkIDAgfHwgbnVsbGFibGUgJiYgcmVnaXN0cnkgPT09IG51bGwpIHJldHVybiByZWdpc3RyeTtcblx0XHRpZiAocmVnaXN0cnkgPT09IG51bGwgfHwgIWludGVybmFscy5oYXMocmVnaXN0cnkpKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBjdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSBtdXN0IGJlIGEgcmVnaXN0cnkke251bGxhYmxlID8gXCIgb3IgbnVsbFwiIDogXCJcIn1gKTtcblx0XHRyZXR1cm4gcmVnaXN0cnk7XG5cdH1cblx0ZnVuY3Rpb24gY2hlY2tSZWdpc3RyeShyZWdpc3RyeSwgZG9jKSB7XG5cdFx0aWYgKHJlZ2lzdHJ5ICYmICFzZWxmKHJlZ2lzdHJ5KS5zY29wZWQgJiYgcmVnaXN0cnlPZihkb2MpICE9PSByZWdpc3RyeSkgdGhyb3cgZG9tRXJyb3IoXCJBIGdsb2JhbCByZWdpc3RyeSBjYW4gb25seSBiZSB1c2VkIHdpdGggaXRzIG93biBkb2N1bWVudC5cIiwgXCJOb3RTdXBwb3J0ZWRFcnJvclwiKTtcblx0fVxuXHRmdW5jdGlvbiBpbnZva2UoYXR0cmlidXRlLCBuYW1lLCBhcmdzID0gW10pIHtcblx0XHRjb25zdCBkZWZpbml0aW9uID0gZW50cmllcy5nZXQoYXR0cmlidXRlKT8uZGVmaW5pdGlvbjtcblx0XHRpZiAoIWRlZmluaXRpb24pIHJldHVybjtcblx0XHRjb25zdCBjYWxsYmFjayA9IGRlZmluaXRpb24uY2FsbGJhY2tzW25hbWVdO1xuXHRcdGlmICghY2FsbGJhY2sgJiYgbmFtZSA9PT0gXCJjb25uZWN0ZWRNb3ZlQ2FsbGJhY2tcIikge1xuXHRcdFx0aW52b2tlKGF0dHJpYnV0ZSwgXCJkaXNjb25uZWN0ZWRDYWxsYmFja1wiKTtcblx0XHRcdGludm9rZShhdHRyaWJ1dGUsIFwiY29ubmVjdGVkQ2FsbGJhY2tcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChjYWxsYmFjaykgc2FmZSgoKSA9PiBSZWZsZWN0LmFwcGx5KGNhbGxiYWNrLCBhdHRyaWJ1dGUsIGFyZ3MpKTtcblx0fVxuXHRmdW5jdGlvbiBjb25uZWN0KGF0dHJpYnV0ZSwgZW50cnkpIHtcblx0XHRpZiAoZW50cnkuY29ubmVjdGVkKSByZXR1cm47XG5cdFx0ZW50cnkuY29ubmVjdGVkID0gdHJ1ZTtcblx0XHRpbnZva2UoYXR0cmlidXRlLCBcImNvbm5lY3RlZENhbGxiYWNrXCIpO1xuXHR9XG5cdGZ1bmN0aW9uIGRpc2Nvbm5lY3QoYXR0cmlidXRlLCBlbnRyeSkge1xuXHRcdGlmICghZW50cnkuY29ubmVjdGVkKSByZXR1cm47XG5cdFx0ZW50cnkuY29ubmVjdGVkID0gZmFsc2U7XG5cdFx0aW52b2tlKGF0dHJpYnV0ZSwgXCJkaXNjb25uZWN0ZWRDYWxsYmFja1wiKTtcblx0fVxuXHRmdW5jdGlvbiBhZG9wdChhdHRyaWJ1dGUsIGVudHJ5LCBkb2MpIHtcblx0XHRjb25zdCBvbGQgPSBlbnRyeS5kb2N1bWVudDtcblx0XHRpZiAob2xkICE9PSBkb2MpIHtcblx0XHRcdGVudHJ5LmRvY3VtZW50ID0gZG9jO1xuXHRcdFx0aW52b2tlKGF0dHJpYnV0ZSwgXCJhZG9wdGVkQ2FsbGJhY2tcIiwgW29sZCwgZG9jXSk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHRyYWNrKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuXHRcdGxldCBtYXAgPSB0cmFja2VkLmdldChlbGVtZW50KTtcblx0XHRpZiAoIW1hcCkgdHJhY2tlZC5zZXQoZWxlbWVudCwgbWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG5cdFx0bWFwLnNldChhdHRyaWJ1dGUubG9jYWxOYW1lLCBhdHRyaWJ1dGUpO1xuXHRcdGlmIChvYnNlcnZlZFJvb3RzLmhhcyhlbGVtZW50LmdldFJvb3ROb2RlKCkpKSB7XG5cdFx0XHRsb2NhbE9ic2VydmVycy5nZXQoZWxlbWVudCk/LmRpc2Nvbm5lY3QoKTtcblx0XHRcdGxvY2FsT2JzZXJ2ZXJzLmRlbGV0ZShlbGVtZW50KTtcblx0XHR9IGVsc2UgaWYgKCFsb2NhbE9ic2VydmVycy5oYXMoZWxlbWVudCkpIHtcblx0XHRcdGNvbnN0IGxvY2FsID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocHJvY2Vzc1JlY29yZHMpO1xuXHRcdFx0bG9jYWwub2JzZXJ2ZShlbGVtZW50LCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlXG5cdFx0XHR9KTtcblx0XHRcdGxvY2FsT2JzZXJ2ZXJzLnNldChlbGVtZW50LCBsb2NhbCk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVudHJhY2soZWxlbWVudCwgYXR0cmlidXRlKSB7XG5cdFx0Y29uc3QgbWFwID0gdHJhY2tlZC5nZXQoZWxlbWVudCk7XG5cdFx0aWYgKG1hcD8uZ2V0KGF0dHJpYnV0ZS5sb2NhbE5hbWUpID09PSBhdHRyaWJ1dGUpIG1hcC5kZWxldGUoYXR0cmlidXRlLmxvY2FsTmFtZSk7XG5cdFx0aWYgKG1hcCAmJiAhbWFwLnNpemUpIHtcblx0XHRcdHRyYWNrZWQuZGVsZXRlKGVsZW1lbnQpO1xuXHRcdFx0bG9jYWxPYnNlcnZlcnMuZ2V0KGVsZW1lbnQpPy5kaXNjb25uZWN0KCk7XG5cdFx0XHRsb2NhbE9ic2VydmVycy5kZWxldGUoZWxlbWVudCk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJ1bkNvbnN0cnVjdG9yKGF0dHJpYnV0ZSwgZGVmaW5pdGlvbiwgcmVnaXN0cnksIGNoZWNrKSB7XG5cdFx0Y29uc3QgQyA9IGRlZmluaXRpb24uY29uc3RydWN0b3I7XG5cdFx0Y29uc3QgcHJldmlvdXMgPSBhY3RpdmUuZ2V0KEMpO1xuXHRcdGRlZmluaXRpb24uc3RhY2sucHVzaChhdHRyaWJ1dGUpO1xuXHRcdGFjdGl2ZS5zZXQoQywgcmVnaXN0cnkpO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAobmV3IEMoKSAhPT0gYXR0cmlidXRlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29uc3RydWN0b3IgcmV0dXJuZWQgYSBkaWZmZXJlbnQgYXR0cmlidXRlLlwiKTtcblx0XHRcdGNoZWNrPy4oKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0aWYgKHByZXZpb3VzKSBhY3RpdmUuc2V0KEMsIHByZXZpb3VzKTtcblx0XHRcdGVsc2UgYWN0aXZlLmRlbGV0ZShDKTtcblx0XHRcdGRlZmluaXRpb24uc3RhY2sucG9wKCk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGNvbnN0cnVjdChhdHRyaWJ1dGUsIGRlZmluaXRpb24sIHJlZ2lzdHJ5KSB7XG5cdFx0Y29uc3QgeyBvd25lckRvY3VtZW50LCBsb2NhbE5hbWUsIG5hbWVzcGFjZVVSSSwgcHJlZml4IH0gPSBhdHRyaWJ1dGU7XG5cdFx0Y29uc3QgZW50cnkgPSB7XG5cdFx0XHRzdGF0ZTogXCJjdXN0b21cIixcblx0XHRcdGRlZmluaXRpb24sXG5cdFx0XHRjb25uZWN0ZWQ6IGZhbHNlLFxuXHRcdFx0ZG9jdW1lbnQ6IG93bmVyRG9jdW1lbnRcblx0XHR9O1xuXHRcdGVudHJpZXMuc2V0KGF0dHJpYnV0ZSwgZW50cnkpO1xuXHRcdHRyeSB7XG5cdFx0XHRydW5Db25zdHJ1Y3RvcihhdHRyaWJ1dGUsIGRlZmluaXRpb24sIHJlZ2lzdHJ5LCAoKSA9PiB7XG5cdFx0XHRcdGlmIChhdHRyaWJ1dGUub3duZXJFbGVtZW50ICE9PSBudWxsIHx8IGF0dHJpYnV0ZS5vd25lckRvY3VtZW50ICE9PSBvd25lckRvY3VtZW50IHx8IGF0dHJpYnV0ZS5sb2NhbE5hbWUgIT09IGxvY2FsTmFtZSB8fCBhdHRyaWJ1dGUubmFtZXNwYWNlVVJJICE9PSBuYW1lc3BhY2VVUkkgfHwgYXR0cmlidXRlLnByZWZpeCAhPT0gcHJlZml4IHx8IGF0dHJpYnV0ZS52YWx1ZSAhPT0gXCJcIikgdGhyb3cgZG9tRXJyb3IoXCJBbiBhdHRyaWJ1dGUgY29uc3RydWN0b3IgbXVzdCBsZWF2ZSB0aGUgQXR0ciB1bmF0dGFjaGVkIGFuZCBlbXB0eS5cIiwgXCJOb3RTdXBwb3J0ZWRFcnJvclwiKTtcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRlbnRyeS5zdGF0ZSA9IFwiZmFpbGVkXCI7XG5cdFx0XHRlbnRyeS5kZWZpbml0aW9uID0gbnVsbDtcblx0XHRcdHJlcG9ydChlcnJvcik7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZ3JhZGUoYXR0cmlidXRlLCBkZWZpbml0aW9uLCByZWdpc3RyeSwgdmFsdWUpIHtcblx0XHRpZiAoZW50cmllcy5oYXMoYXR0cmlidXRlKSB8fCAhYXR0cmlidXRlLm93bmVyRWxlbWVudCkgcmV0dXJuO1xuXHRcdGNvbnN0IGVudHJ5ID0ge1xuXHRcdFx0c3RhdGU6IFwicHJlY3VzdG9taXplZFwiLFxuXHRcdFx0ZGVmaW5pdGlvbixcblx0XHRcdGNvbm5lY3RlZDogZmFsc2UsXG5cdFx0XHRkb2N1bWVudDogYXR0cmlidXRlLm93bmVyRWxlbWVudC5vd25lckRvY3VtZW50XG5cdFx0fTtcblx0XHRlbnRyaWVzLnNldChhdHRyaWJ1dGUsIGVudHJ5KTtcblx0XHR0cnkge1xuXHRcdFx0cnVuQ29uc3RydWN0b3IoYXR0cmlidXRlLCBkZWZpbml0aW9uLCByZWdpc3RyeSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGVudHJ5LnN0YXRlID0gXCJmYWlsZWRcIjtcblx0XHRcdGVudHJ5LmRlZmluaXRpb24gPSBudWxsO1xuXHRcdFx0cmVwb3J0KGVycm9yKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZW50cnkuc3RhdGUgPSBcImN1c3RvbVwiO1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBhdHRyaWJ1dGUub3duZXJFbGVtZW50O1xuXHRcdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRcdHRyYWNrKGVsZW1lbnQsIGF0dHJpYnV0ZSk7XG5cdFx0aW52b2tlKGF0dHJpYnV0ZSwgXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIiwgW251bGwsIHZhbHVlXSk7XG5cdFx0aWYgKGF0dHJpYnV0ZS5vd25lckVsZW1lbnQgPT09IGVsZW1lbnQgJiYgZWxlbWVudC5pc0Nvbm5lY3RlZCkgY29ubmVjdChhdHRyaWJ1dGUsIGVudHJ5KTtcblx0fVxuXHRmdW5jdGlvbiB0cnlVcGdyYWRlKGF0dHJpYnV0ZSwgdmFsdWUgPSBhdHRyaWJ1dGUudmFsdWUpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gYXR0cmlidXRlLm93bmVyRWxlbWVudDtcblx0XHRpZiAoIWVsZW1lbnQgfHwgIWlzSFRNTChlbGVtZW50KSB8fCBlbnRyaWVzLmhhcyhhdHRyaWJ1dGUpKSByZXR1cm47XG5cdFx0Y29uc3QgcmVnaXN0cnkgPSByZWdpc3RyeU9mKGVsZW1lbnQpO1xuXHRcdGNvbnN0IGRlZmluaXRpb24gPSBsb29rdXAocmVnaXN0cnksIGF0dHJpYnV0ZS5uYW1lc3BhY2VVUkksIGF0dHJpYnV0ZS5sb2NhbE5hbWUpO1xuXHRcdGlmIChyZWdpc3RyeSAmJiBkZWZpbml0aW9uKSB1cGdyYWRlKGF0dHJpYnV0ZSwgZGVmaW5pdGlvbiwgcmVnaXN0cnksIHZhbHVlKTtcblx0fVxuXHRjbGFzcyBCYXRjaCB7XG5cdFx0aGlzdG9yeSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0cG9zaXRpb24gPSAwO1xuXHRcdGNvbnN0cnVjdG9yKHJlY29yZHMpIHtcblx0XHRcdHJlY29yZHMuZm9yRWFjaCgocmVjb3JkLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAocmVjb3JkLnR5cGUgIT09IFwiYXR0cmlidXRlc1wiIHx8IHJlY29yZC5hdHRyaWJ1dGVOYW1lc3BhY2UgIT09IG51bGwgfHwgIXJlY29yZC5hdHRyaWJ1dGVOYW1lIHx8ICFpc0VsZW1lbnQkMShyZWNvcmQudGFyZ2V0KSkgcmV0dXJuO1xuXHRcdFx0XHRsZXQgYnlOYW1lID0gdGhpcy5oaXN0b3J5LmdldChyZWNvcmQudGFyZ2V0KTtcblx0XHRcdFx0aWYgKCFieU5hbWUpIHRoaXMuaGlzdG9yeS5zZXQocmVjb3JkLnRhcmdldCwgYnlOYW1lID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG5cdFx0XHRcdGxldCBsaXN0ID0gYnlOYW1lLmdldChyZWNvcmQuYXR0cmlidXRlTmFtZSk7XG5cdFx0XHRcdGlmICghbGlzdCkgYnlOYW1lLnNldChyZWNvcmQuYXR0cmlidXRlTmFtZSwgbGlzdCA9IFtdKTtcblx0XHRcdFx0bGlzdC5wdXNoKHtcblx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRvbGRWYWx1ZTogcmVjb3JkLm9sZFZhbHVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGxhdGVyKGVsZW1lbnQsIG5hbWUpIHtcblx0XHRcdHJldHVybiAodGhpcy5oaXN0b3J5LmdldChlbGVtZW50KT8uZ2V0KG5hbWUpID8/IFtdKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaW5kZXggPiB0aGlzLnBvc2l0aW9uKTtcblx0XHR9XG5cdFx0dmFsdWVBZnRlcihlbGVtZW50LCBuYW1lKSB7XG5cdFx0XHRjb25zdCBsYXRlciA9IHRoaXMubGF0ZXIoZWxlbWVudCwgbmFtZSk7XG5cdFx0XHRyZXR1cm4gbGF0ZXIubGVuZ3RoID8gbGF0ZXJbMF0ub2xkVmFsdWUgOiBlbGVtZW50LmdldEF0dHJpYnV0ZU5TKG51bGwsIG5hbWUpO1xuXHRcdH1cblx0XHRhZGRlZExhdGVyKGVsZW1lbnQsIG5hbWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmxhdGVyKGVsZW1lbnQsIG5hbWUpLnNvbWUoKGl0ZW0pID0+IGl0ZW0ub2xkVmFsdWUgPT09IG51bGwpO1xuXHRcdH1cblx0XHR0cmVlKHJvb3QpIHtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50c0luKHJvb3QpKSB7XG5cdFx0XHRcdGNvbnN0IHNoYWRvdyA9IHNoYWRvd09mKGVsZW1lbnQpO1xuXHRcdFx0XHRpZiAoc2hhZG93ICYmICFvYnNlcnZlZFJvb3RzLmhhcyhzaGFkb3cpKSBvYnNlcnZlUm9vdChzaGFkb3cpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsZW1lbnQoZWxlbWVudCkge1xuXHRcdFx0aWYgKCFpc0hUTUwoZWxlbWVudCkpIHJldHVybjtcblx0XHRcdGZvciAoY29uc3QgYXR0cmlidXRlIG9mIEFycmF5LmZyb20obmF0aXZlQXR0cmlidXRlcy5jYWxsKGVsZW1lbnQpKSkge1xuXHRcdFx0XHRjb25zdCBuYW1lID0gYXR0cmlidXRlLmxvY2FsTmFtZTtcblx0XHRcdFx0aWYgKGF0dHJpYnV0ZS5uYW1lc3BhY2VVUkkgIT09IG51bGwgfHwgdGhpcy5hZGRlZExhdGVyKGVsZW1lbnQsIG5hbWUpKSBjb250aW51ZTtcblx0XHRcdFx0Y29uc3QgZW50cnkgPSBlbnRyaWVzLmdldChhdHRyaWJ1dGUpO1xuXHRcdFx0XHRpZiAoIWVudHJ5KSB7XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQpIHRyeVVwZ3JhZGUoYXR0cmlidXRlLCB0aGlzLnZhbHVlQWZ0ZXIoZWxlbWVudCwgbmFtZSkgPz8gYXR0cmlidXRlLnZhbHVlKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZW50cnkuc3RhdGUgIT09IFwiY3VzdG9tXCIpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAodHJhY2tlZC5nZXQoZWxlbWVudCk/LmdldChuYW1lKSAhPT0gYXR0cmlidXRlKSB7XG5cdFx0XHRcdFx0dHJhY2soZWxlbWVudCwgYXR0cmlidXRlKTtcblx0XHRcdFx0XHRhZG9wdChhdHRyaWJ1dGUsIGVudHJ5LCBlbGVtZW50Lm93bmVyRG9jdW1lbnQpO1xuXHRcdFx0XHRcdGludm9rZShhdHRyaWJ1dGUsIFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIsIFtudWxsLCB0aGlzLnZhbHVlQWZ0ZXIoZWxlbWVudCwgbmFtZSkgPz8gYXR0cmlidXRlLnZhbHVlXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHJhY2soZWxlbWVudCwgYXR0cmlidXRlKTtcblx0XHRcdFx0XHRhZG9wdChhdHRyaWJ1dGUsIGVudHJ5LCBlbGVtZW50Lm93bmVyRG9jdW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhdHRyaWJ1dGUub3duZXJFbGVtZW50ICE9PSBlbGVtZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQpIGNvbm5lY3QoYXR0cmlidXRlLCBlbnRyeSk7XG5cdFx0XHRcdGVsc2UgZGlzY29ubmVjdChhdHRyaWJ1dGUsIGVudHJ5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0YXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIG9sZFZhbHVlKSB7XG5cdFx0XHRpZiAoIWlzSFRNTChlbGVtZW50KSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgcHJldmlvdXMgPSB0cmFja2VkLmdldChlbGVtZW50KT8uZ2V0KG5hbWUpO1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlTm9kZU5TKG51bGwsIG5hbWUpO1xuXHRcdFx0aWYgKHByZXZpb3VzICYmIHByZXZpb3VzID09PSBjdXJyZW50KSB7XG5cdFx0XHRcdGludm9rZShwcmV2aW91cywgXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIiwgW29sZFZhbHVlLCB0aGlzLnZhbHVlQWZ0ZXIoZWxlbWVudCwgbmFtZSldKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHByZXZpb3VzKSB7XG5cdFx0XHRcdHVudHJhY2soZWxlbWVudCwgcHJldmlvdXMpO1xuXHRcdFx0XHRjb25zdCBlbnRyeSA9IGVudHJpZXMuZ2V0KHByZXZpb3VzKTtcblx0XHRcdFx0aW52b2tlKHByZXZpb3VzLCBcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiLCBbb2xkVmFsdWUsIG51bGxdKTtcblx0XHRcdFx0ZGlzY29ubmVjdChwcmV2aW91cywgZW50cnkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdXJyZW50IHx8IHRoaXMuYWRkZWRMYXRlcihlbGVtZW50LCBuYW1lKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlQWZ0ZXIoZWxlbWVudCwgbmFtZSk7XG5cdFx0XHRjb25zdCBlbnRyeSA9IGVudHJpZXMuZ2V0KGN1cnJlbnQpO1xuXHRcdFx0aWYgKCFlbnRyeSkge1xuXHRcdFx0XHR0cnlVcGdyYWRlKGN1cnJlbnQsIHZhbHVlID8/IGN1cnJlbnQudmFsdWUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZW50cnkuc3RhdGUgIT09IFwiY3VzdG9tXCIpIHJldHVybjtcblx0XHRcdHRyYWNrKGVsZW1lbnQsIGN1cnJlbnQpO1xuXHRcdFx0YWRvcHQoY3VycmVudCwgZW50cnksIGVsZW1lbnQub3duZXJEb2N1bWVudCk7XG5cdFx0XHRpbnZva2UoY3VycmVudCwgXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIiwgW251bGwsIHZhbHVlXSk7XG5cdFx0XHRpZiAoY3VycmVudC5vd25lckVsZW1lbnQgPT09IGVsZW1lbnQgJiYgZWxlbWVudC5pc0Nvbm5lY3RlZCkgY29ubmVjdChjdXJyZW50LCBlbnRyeSk7XG5cdFx0fVxuXHRcdHJ1bihyZWNvcmRzKSB7XG5cdFx0XHRyZWNvcmRzLmZvckVhY2goKHJlY29yZCwgaW5kZXgpID0+IHtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbiA9IGluZGV4O1xuXHRcdFx0XHRpZiAocmVjb3JkLnR5cGUgPT09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcmVjb3JkLnJlbW92ZWROb2RlcykgdGhpcy50cmVlKG5vZGUpO1xuXHRcdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiByZWNvcmQuYWRkZWROb2RlcykgdGhpcy50cmVlKG5vZGUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcImF0dHJpYnV0ZXNcIiAmJiByZWNvcmQuYXR0cmlidXRlTmFtZXNwYWNlID09PSBudWxsICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lICYmIGlzRWxlbWVudCQxKHJlY29yZC50YXJnZXQpKSB0aGlzLmF0dHJpYnV0ZShyZWNvcmQudGFyZ2V0LCByZWNvcmQuYXR0cmlidXRlTmFtZSwgcmVjb3JkLm9sZFZhbHVlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBwcm9jZXNzUmVjb3JkcyhyZWNvcmRzKSB7XG5cdFx0bmV3IEJhdGNoKHJlY29yZHMpLnJ1bihyZWNvcmRzKTtcblx0fVxuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHByb2Nlc3NSZWNvcmRzKTtcblx0ZnVuY3Rpb24gb2JzZXJ2ZVJvb3Qocm9vdCkge1xuXHRcdGlmIChvYnNlcnZlZFJvb3RzLmhhcyhyb290KSkgcmV0dXJuO1xuXHRcdG9ic2VydmVkUm9vdHMuYWRkKHJvb3QpO1xuXHRcdG9ic2VydmVyLm9ic2VydmUocm9vdCwge1xuXHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdGlmIChyb290Lm5vZGVUeXBlID09PSA5IHx8IHJvb3Qubm9kZVR5cGUgPT09IDExIHx8IGlzRWxlbWVudCQxKHJvb3QpKSBhZGRSb290KHJvb3QpO1xuXHR9XG5cdGZ1bmN0aW9uIGZsdXNoKCkge1xuXHRcdGNvbnN0IHJlY29yZHMgPSBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xuXHRcdGlmIChyZWNvcmRzLmxlbmd0aCkgcHJvY2Vzc1JlY29yZHMocmVjb3Jkcyk7XG5cdH1cblx0Y2xhc3MgUmVnaXN0cnkge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0aW50ZXJuYWxzLnNldCh0aGlzLCB7XG5cdFx0XHRcdHNjb3BlZDogIWNvbnN0cnVjdGluZ0dsb2JhbCxcblx0XHRcdFx0YnlOYW1lOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuXHRcdFx0XHRieUNvbnN0cnVjdG9yOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuXHRcdFx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHRcdFx0cGVuZGluZzogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSxcblx0XHRcdFx0ZG9jdW1lbnRzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZGVmaW5lKG5hbWUsIGNvbnN0cnVjdG9yKSB7XG5cdFx0XHRjb25zdCBzdGF0ZSA9IHNlbGYodGhpcyk7XG5cdFx0XHRpZiAodHlwZW9mIGNvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjb25zdHJ1Y3RvciBtdXN0IGJlIGNvbnN0cnVjdGlibGVcIik7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRSZWZsZWN0LmNvbnN0cnVjdChTdHJpbmcsIFtdLCBjb25zdHJ1Y3Rvcik7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcImNvbnN0cnVjdG9yIG11c3QgYmUgY29uc3RydWN0aWJsZVwiKTtcblx0XHRcdH1cblx0XHRcdG5hbWUgPSBTdHJpbmcobmFtZSk7XG5cdFx0XHRhc3NlcnRBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuXHRcdFx0aWYgKHN0YXRlLmJ5TmFtZS5oYXMobmFtZSkgfHwgc3RhdGUuYnlDb25zdHJ1Y3Rvci5oYXMoY29uc3RydWN0b3IpKSB0aHJvdyBkb21FcnJvcihcIk5hbWUgb3IgY29uc3RydWN0b3IgYWxyZWFkeSByZWdpc3RlcmVkLlwiLCBcIk5vdFN1cHBvcnRlZEVycm9yXCIpO1xuXHRcdFx0aWYgKHN0YXRlLnJ1bm5pbmcpIHRocm93IGRvbUVycm9yKFwiTmVzdGVkIGRlZmluZSgpIGlzIG5vdCBzdXBwb3J0ZWQuXCIsIFwiTm90U3VwcG9ydGVkRXJyb3JcIik7XG5cdFx0XHRzdGF0ZS5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdGNvbnN0IGNhbGxiYWNrcyA9IHt9O1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xuXHRcdFx0XHRpZiAoIXByb3RvdHlwZSB8fCB0eXBlb2YgcHJvdG90eXBlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBwcm90b3R5cGUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNvbnN0cnVjdG9yLnByb3RvdHlwZSBtdXN0IGJlIGFuIG9iamVjdFwiKTtcblx0XHRcdFx0Zm9yIChjb25zdCBuYW1lIG9mIGNhbGxiYWNrTmFtZXMpIHtcblx0XHRcdFx0XHRjb25zdCBjYWxsYmFjayA9IHByb3RvdHlwZVtuYW1lXTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2sgIT09IHZvaWQgMCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtuYW1lfSBtdXN0IGJlIGEgZnVuY3Rpb25gKTtcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrc1tuYW1lXSA9IGNhbGxiYWNrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRzdGF0ZS5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBkZWZpbml0aW9uID0ge1xuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRjb25zdHJ1Y3Rvcixcblx0XHRcdFx0Y2FsbGJhY2tzLFxuXHRcdFx0XHRzdGFjazogW11cblx0XHRcdH07XG5cdFx0XHRzdGF0ZS5ieU5hbWUuc2V0KG5hbWUsIGRlZmluaXRpb24pO1xuXHRcdFx0c3RhdGUuYnlDb25zdHJ1Y3Rvci5zZXQoY29uc3RydWN0b3IsIGRlZmluaXRpb24pO1xuXHRcdFx0Zmx1c2goKTtcblx0XHRcdGZvciAoY29uc3QgZG9jIG9mIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtkb2N1bWVudCwgLi4uc3RhdGUuZG9jdW1lbnRzXSkpIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50c0luKGRvYykpIHtcblx0XHRcdFx0Y29uc3Qgc2hhZG93ID0gc2hhZG93T2YoZWxlbWVudCk7XG5cdFx0XHRcdGlmIChzaGFkb3cpIG9ic2VydmVSb290KHNoYWRvdyk7XG5cdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlTm9kZU5TKG51bGwsIG5hbWUpO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlICYmIGlzSFRNTChlbGVtZW50KSAmJiByZWdpc3RyeU9mKGVsZW1lbnQpID09PSB0aGlzKSB1cGdyYWRlKGF0dHJpYnV0ZSwgZGVmaW5pdGlvbiwgdGhpcywgYXR0cmlidXRlLnZhbHVlKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBlbmRpbmcgPSBzdGF0ZS5wZW5kaW5nLmdldChuYW1lKTtcblx0XHRcdGlmIChwZW5kaW5nKSB7XG5cdFx0XHRcdHN0YXRlLnBlbmRpbmcuZGVsZXRlKG5hbWUpO1xuXHRcdFx0XHRwZW5kaW5nLnJlc29sdmUoY29uc3RydWN0b3IpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRnZXQobmFtZSkge1xuXHRcdFx0cmV0dXJuIHNlbGYodGhpcykuYnlOYW1lLmdldChTdHJpbmcobmFtZSkpPy5jb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0Z2V0TmFtZShjb25zdHJ1Y3Rvcikge1xuXHRcdFx0aWYgKHR5cGVvZiBjb25zdHJ1Y3RvciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY29uc3RydWN0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuXHRcdFx0cmV0dXJuIHNlbGYodGhpcykuYnlDb25zdHJ1Y3Rvci5nZXQoY29uc3RydWN0b3IpPy5uYW1lID8/IG51bGw7XG5cdFx0fVxuXHRcdHdoZW5EZWZpbmVkKG5hbWUpIHtcblx0XHRcdGNvbnN0IHN0YXRlID0gc2VsZih0aGlzKTtcblx0XHRcdG5hbWUgPSBTdHJpbmcobmFtZSk7XG5cdFx0XHRpZiAoIWlzVmFsaWRDdXN0b21BdHRyaWJ1dGVOYW1lKG5hbWUpKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZG9tRXJyb3IoYEludmFsaWQgY3VzdG9tIGF0dHJpYnV0ZSBuYW1lOiAke25hbWV9YCwgXCJTeW50YXhFcnJvclwiKSk7XG5cdFx0XHRjb25zdCBkZWZpbml0aW9uID0gc3RhdGUuYnlOYW1lLmdldChuYW1lKTtcblx0XHRcdGlmIChkZWZpbml0aW9uKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlZmluaXRpb24uY29uc3RydWN0b3IpO1xuXHRcdFx0bGV0IHBlbmRpbmcgPSBzdGF0ZS5wZW5kaW5nLmdldChuYW1lKTtcblx0XHRcdGlmICghcGVuZGluZykge1xuXHRcdFx0XHRsZXQgcmVzb2x2ZTtcblx0XHRcdFx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyKSA9PiB7XG5cdFx0XHRcdFx0cmVzb2x2ZSA9IHI7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzdGF0ZS5wZW5kaW5nLnNldChuYW1lLCBwZW5kaW5nID0ge1xuXHRcdFx0XHRcdHByb21pc2UsXG5cdFx0XHRcdFx0cmVzb2x2ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwZW5kaW5nLnByb21pc2U7XG5cdFx0fVxuXHRcdHVwZ3JhZGUocm9vdCkge1xuXHRcdFx0c2VsZih0aGlzKTtcblx0XHRcdGlmICghKHJvb3QgaW5zdGFuY2VvZiBOb2RlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcInJvb3QgbXVzdCBiZSBhIGN1cnJlbnQtcmVhbG0gTm9kZVwiKTtcblx0XHRcdGZsdXNoKCk7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHNJbihyb290KSkge1xuXHRcdFx0XHRpZiAocmVnaXN0cnlPZihlbGVtZW50KSAhPT0gdGhpcykgY29udGludWU7XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0cmlidXRlIG9mIEFycmF5LmZyb20obmF0aXZlQXR0cmlidXRlcy5jYWxsKGVsZW1lbnQpKSkgdHJ5VXBncmFkZShhdHRyaWJ1dGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpbml0aWFsaXplKHJvb3QpIHtcblx0XHRcdGNvbnN0IHN0YXRlID0gc2VsZih0aGlzKTtcblx0XHRcdGlmICghKHJvb3QgaW5zdGFuY2VvZiBOb2RlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcInJvb3QgbXVzdCBiZSBhIGN1cnJlbnQtcmVhbG0gTm9kZVwiKTtcblx0XHRcdGZsdXNoKCk7XG5cdFx0XHRjb25zdCBpc0RvY3VtZW50ID0gcm9vdC5ub2RlVHlwZSA9PT0gOTtcblx0XHRcdGlmICghc3RhdGUuc2NvcGVkICYmIChpc0RvY3VtZW50IHx8IHJlZ2lzdHJ5T2Yobm9kZURvY3VtZW50KHJvb3QpKSAhPT0gdGhpcykpIHRocm93IGRvbUVycm9yKFwiQSBnbG9iYWwgcmVnaXN0cnkgY2FuIG9ubHkgaW5pdGlhbGl6ZSBpdHMgb3duIGRvY3VtZW50IG5vZGVzLlwiLCBcIk5vdFN1cHBvcnRlZEVycm9yXCIpO1xuXHRcdFx0aWYgKChpc0RvY3VtZW50IHx8IGlzU2hhZG93KHJvb3QpKSAmJiAhcmVnaXN0cnlPZihyb290KSkgc2V0UmVnaXN0cnkocm9vdCwgdGhpcyk7XG5cdFx0XHRjb25zdCBkb2MgPSBub2RlRG9jdW1lbnQocm9vdCk7XG5cdFx0XHRpZiAoc3RhdGUuc2NvcGVkKSBzdGF0ZS5kb2N1bWVudHMuYWRkKGRvYyk7XG5cdFx0XHRvYnNlcnZlUm9vdChkb2MpO1xuXHRcdFx0b2JzZXJ2ZVJvb3Qocm9vdCk7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlnaHRFbGVtZW50c0luKHJvb3QpKSB7XG5cdFx0XHRcdGlmICghcmVnaXN0cnlPZihlbGVtZW50KSkgc2V0UmVnaXN0cnkoZWxlbWVudCwgdGhpcyk7XG5cdFx0XHRcdGlmIChyZWdpc3RyeU9mKGVsZW1lbnQpICE9PSB0aGlzKSBjb250aW51ZTtcblx0XHRcdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgQXJyYXkuZnJvbShuYXRpdmVBdHRyaWJ1dGVzLmNhbGwoZWxlbWVudCkpKSB0cnlVcGdyYWRlKGF0dHJpYnV0ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZvciAoY29uc3Qga2V5IG9mIFtcblx0XHRcImRlZmluZVwiLFxuXHRcdFwiZ2V0XCIsXG5cdFx0XCJnZXROYW1lXCIsXG5cdFx0XCJ3aGVuRGVmaW5lZFwiLFxuXHRcdFwidXBncmFkZVwiLFxuXHRcdFwiaW5pdGlhbGl6ZVwiXG5cdF0pIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWdpc3RyeS5wcm90b3R5cGUsIGtleSwge1xuXHRcdC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUmVnaXN0cnkucHJvdG90eXBlLCBrZXkpLFxuXHRcdGVudW1lcmFibGU6IHRydWVcblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWdpc3RyeS5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHRcdHZhbHVlOiBcIkN1c3RvbUF0dHJpYnV0ZVJlZ2lzdHJ5XCIsXG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdH0pO1xuXHRjb25zdHJ1Y3RpbmdHbG9iYWwgPSB0cnVlO1xuXHRnbG9iYWxSZWdpc3RyeSA9IG5ldyBSZWdpc3RyeSgpO1xuXHRjb25zdHJ1Y3RpbmdHbG9iYWwgPSBmYWxzZTtcblx0cmVnaXN0cmllcy5zZXQoZG9jdW1lbnQsIGdsb2JhbFJlZ2lzdHJ5KTtcblx0ZnVuY3Rpb24gQXR0cmlidXRlKCkge1xuXHRcdGNvbnN0IEMgPSBuZXcudGFyZ2V0O1xuXHRcdGlmICghQyB8fCBDID09PSBBdHRyaWJ1dGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIEF0dHIgY29uc3RydWN0b3JcIik7XG5cdFx0Y29uc3QgZGVmaW5pdGlvbiA9IHNlbGYoYWN0aXZlLmdldChDKSA/PyBnbG9iYWxSZWdpc3RyeSkuYnlDb25zdHJ1Y3Rvci5nZXQoQyk7XG5cdFx0aWYgKCFkZWZpbml0aW9uKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgaXMgbm90IGEgZGVmaW5lZCBjdXN0b20gYXR0cmlidXRlLlwiKTtcblx0XHRjb25zdCBwcm90b3R5cGUgPSBDLnByb3RvdHlwZSA/PyBOYXRpdmVBdHRyLnByb3RvdHlwZTtcblx0XHRjb25zdCBzdGFjayA9IGRlZmluaXRpb24uc3RhY2s7XG5cdFx0aWYgKCFzdGFjay5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGF0dHJpYnV0ZSA9IG5hdGl2ZUNyZWF0ZUF0dHJpYnV0ZS5jYWxsKGRvY3VtZW50LCBkZWZpbml0aW9uLm5hbWUpO1xuXHRcdFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGF0dHJpYnV0ZSwgcHJvdG90eXBlKTtcblx0XHRcdGVudHJpZXMuc2V0KGF0dHJpYnV0ZSwge1xuXHRcdFx0XHRzdGF0ZTogXCJjdXN0b21cIixcblx0XHRcdFx0ZGVmaW5pdGlvbixcblx0XHRcdFx0Y29ubmVjdGVkOiBmYWxzZSxcblx0XHRcdFx0ZG9jdW1lbnRcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGF0dHJpYnV0ZTtcblx0XHR9XG5cdFx0Y29uc3QgYXR0cmlidXRlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cdFx0aWYgKGF0dHJpYnV0ZSA9PT0gQUxSRUFEWSB8fCB0eXBlb2YgYXR0cmlidXRlID09PSBcInN5bWJvbFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXR0ciBhbHJlYWR5IGNvbnN0cnVjdGVkXCIpO1xuXHRcdE9iamVjdC5zZXRQcm90b3R5cGVPZihhdHRyaWJ1dGUsIHByb3RvdHlwZSk7XG5cdFx0c3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPSBBTFJFQURZO1xuXHRcdHJldHVybiBhdHRyaWJ1dGU7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KEF0dHJpYnV0ZSwgXCJwcm90b3R5cGVcIiwge1xuXHRcdHZhbHVlOiBOYXRpdmVBdHRyLnByb3RvdHlwZSxcblx0XHR3cml0YWJsZTogZmFsc2Vcblx0fSk7XG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZihBdHRyaWJ1dGUsIE9iamVjdC5nZXRQcm90b3R5cGVPZihOYXRpdmVBdHRyKSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOYXRpdmVBdHRyLnByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG5cdFx0dmFsdWU6IEF0dHJpYnV0ZSxcblx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRjb25maWd1cmFibGU6IHRydWVcblx0fSk7XG5cdGdsb2JhbHMuQXR0ciA9IEF0dHJpYnV0ZTtcblx0Z2xvYmFscy5DdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSA9IFJlZ2lzdHJ5O1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywgXCJjdXN0b21BdHRyaWJ1dGVzXCIsIHtcblx0XHRnZXQ6ICgpID0+IGdsb2JhbFJlZ2lzdHJ5LFxuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdH0pO1xuXHRmb3IgKGNvbnN0IHByb3RvdHlwZSBvZiBbXG5cdFx0RWxlbWVudC5wcm90b3R5cGUsXG5cdFx0U2hhZG93Um9vdC5wcm90b3R5cGUsXG5cdFx0RG9jdW1lbnQucHJvdG90eXBlXG5cdF0pIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsIFwiY3VzdG9tQXR0cmlidXRlUmVnaXN0cnlcIiwge1xuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiByZWdpc3RyeU9mKHRoaXMpO1xuXHRcdH0sXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRjb25maWd1cmFibGU6IHRydWVcblx0fSk7XG5cdGZ1bmN0aW9uIGNyZWF0ZShkb2MsIGF0dHJpYnV0ZSwgcmVnaXN0cnkpIHtcblx0XHRpZiAocmVnaXN0cnkgPT09IHZvaWQgMCkgcmVnaXN0cnkgPSByZWdpc3RyeU9mKGRvYyk7XG5cdFx0Y29uc3QgZGVmaW5pdGlvbiA9IGxvb2t1cChyZWdpc3RyeSwgYXR0cmlidXRlLm5hbWVzcGFjZVVSSSwgYXR0cmlidXRlLmxvY2FsTmFtZSk7XG5cdFx0aWYgKHJlZ2lzdHJ5ICYmIGRlZmluaXRpb24pIGNvbnN0cnVjdChhdHRyaWJ1dGUsIGRlZmluaXRpb24sIHJlZ2lzdHJ5KTtcblx0XHRyZXR1cm4gYXR0cmlidXRlO1xuXHR9XG5cdGRvY1Byb3RvLmNyZWF0ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbnMgPSB7fSkge1xuXHRcdGNvbnN0IHJlZ2lzdHJ5ID0gcmVnaXN0cnlPcHRpb24ob3B0aW9ucywgdHJ1ZSk7XG5cdFx0Y2hlY2tSZWdpc3RyeShyZWdpc3RyeSwgdGhpcyk7XG5cdFx0cmV0dXJuIGNyZWF0ZSh0aGlzLCBuYXRpdmVDcmVhdGVBdHRyaWJ1dGUuY2FsbCh0aGlzLCBuYW1lKSwgcmVnaXN0cnkpO1xuXHR9O1xuXHRkb2NQcm90by5jcmVhdGVBdHRyaWJ1dGVOUyA9IGZ1bmN0aW9uKG5hbWVzcGFjZSwgbmFtZSwgb3B0aW9ucyA9IHt9KSB7XG5cdFx0Y29uc3QgcmVnaXN0cnkgPSByZWdpc3RyeU9wdGlvbihvcHRpb25zLCB0cnVlKTtcblx0XHRjaGVja1JlZ2lzdHJ5KHJlZ2lzdHJ5LCB0aGlzKTtcblx0XHRyZXR1cm4gY3JlYXRlKHRoaXMsIG5hdGl2ZUNyZWF0ZUF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lKSwgcmVnaXN0cnkpO1xuXHR9O1xuXHRkb2NQcm90by5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24obmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IHJlZ2lzdHJ5ID0gcmVnaXN0cnlPcHRpb24ob3B0aW9ucywgdHJ1ZSk7XG5cdFx0Y2hlY2tSZWdpc3RyeShyZWdpc3RyeSwgdGhpcyk7XG5cdFx0Y29uc3QgZWxlbWVudCA9IG5hdGl2ZUNyZWF0ZUVsZW1lbnQuY2FsbCh0aGlzLCBuYW1lLCBvcHRpb25zKTtcblx0XHRzZXRSZWdpc3RyeShlbGVtZW50LCByZWdpc3RyeSA9PT0gdm9pZCAwID8gcmVnaXN0cnlPZih0aGlzKSA6IHJlZ2lzdHJ5KTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fTtcblx0ZG9jUHJvdG8uY3JlYXRlRWxlbWVudE5TID0gZnVuY3Rpb24obmFtZXNwYWNlLCBuYW1lLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgcmVnaXN0cnkgPSByZWdpc3RyeU9wdGlvbihvcHRpb25zLCB0cnVlKTtcblx0XHRjaGVja1JlZ2lzdHJ5KHJlZ2lzdHJ5LCB0aGlzKTtcblx0XHRjb25zdCBlbGVtZW50ID0gbmF0aXZlQ3JlYXRlRWxlbWVudE5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lLCBvcHRpb25zKTtcblx0XHRzZXRSZWdpc3RyeShlbGVtZW50LCByZWdpc3RyeSA9PT0gdm9pZCAwID8gcmVnaXN0cnlPZih0aGlzKSA6IHJlZ2lzdHJ5KTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fTtcblx0ZG9jUHJvdG8uaW1wb3J0Tm9kZSA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMgPSBmYWxzZSkge1xuXHRcdGNvbnN0IHJlZ2lzdHJ5ID0gcmVnaXN0cnlPcHRpb24ob3B0aW9ucywgZmFsc2UpO1xuXHRcdGNoZWNrUmVnaXN0cnkocmVnaXN0cnksIHRoaXMpO1xuXHRcdGNvbnN0IGRlZXAgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zIDogQm9vbGVhbihvcHRpb25zLmRlZXApO1xuXHRcdGNvbnN0IGNvcHkgPSBuYXRpdmVJbXBvcnROb2RlLmNhbGwodGhpcywgbm9kZSwgZGVlcCk7XG5cdFx0Y29uc3QgZmFsbGJhY2sgPSByZWdpc3RyeSA/PyByZWdpc3RyeU9mKHRoaXMpO1xuXHRcdGNvbnN0IGdsb2JhbCA9IGdsb2JhbE9mKHJlZ2lzdHJ5T2YodGhpcykpO1xuXHRcdGNvbnN0IHNvdXJjZXMgPSBbLi4ubGlnaHRFbGVtZW50c0luKG5vZGUpXTtcblx0XHRbLi4ubGlnaHRFbGVtZW50c0luKGNvcHkpXS5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XG5cdFx0XHRjb25zdCBjaG9zZW4gPSBzb3VyY2VzW2ldICYmIHJlZ2lzdHJ5T2Yoc291cmNlc1tpXSkgfHwgZmFsbGJhY2s7XG5cdFx0XHRzZXRSZWdpc3RyeShlbGVtZW50LCBjaG9zZW4gJiYgIXNlbGYoY2hvc2VuKS5zY29wZWQgPyBnbG9iYWwgOiBjaG9zZW4pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBjb3B5O1xuXHR9O1xuXHRlbFByb3RvLmF0dGFjaFNoYWRvdyA9IGZ1bmN0aW9uKGluaXQpIHtcblx0XHRjb25zdCByZWdpc3RyeSA9IHJlZ2lzdHJ5T3B0aW9uKGluaXQsIHRydWUpO1xuXHRcdGNoZWNrUmVnaXN0cnkocmVnaXN0cnksIHRoaXMub3duZXJEb2N1bWVudCk7XG5cdFx0Y29uc3Qgc2hhZG93ID0gbmF0aXZlQXR0YWNoU2hhZG93LmNhbGwodGhpcywgaW5pdCk7XG5cdFx0c2V0UmVnaXN0cnkoc2hhZG93LCByZWdpc3RyeSA9PT0gdm9pZCAwID8gcmVnaXN0cnlPZih0aGlzLm93bmVyRG9jdW1lbnQpIDogcmVnaXN0cnkpO1xuXHRcdGlmIChzaGFkb3cubW9kZSA9PT0gXCJjbG9zZWRcIikgZW5naW5lLmNsb3NlZFNoYWRvd3Muc2V0KHRoaXMsIHNoYWRvdyk7XG5cdFx0b2JzZXJ2ZVJvb3Qoc2hhZG93KTtcblx0XHRyZXR1cm4gc2hhZG93O1xuXHR9O1xuXHRmb3IgKGNvbnN0IHByb3RvdHlwZSBvZiBbXG5cdFx0RWxlbWVudC5wcm90b3R5cGUsXG5cdFx0RG9jdW1lbnQucHJvdG90eXBlLFxuXHRcdERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlXG5cdF0pIHtcblx0XHRjb25zdCBkeW5hbWljID0gcHJvdG90eXBlO1xuXHRcdGNvbnN0IG5hdGl2ZSA9IGR5bmFtaWMubW92ZUJlZm9yZTtcblx0XHRpZiAodHlwZW9mIG5hdGl2ZSAhPT0gXCJmdW5jdGlvblwiKSBjb250aW51ZTtcblx0XHRkeW5hbWljLm1vdmVCZWZvcmUgPSBmdW5jdGlvbihub2RlLCBjaGlsZCkge1xuXHRcdFx0Y29uc3QgY29ubmVjdGVkQmVmb3JlID0gbm9kZS5pc0Nvbm5lY3RlZDtcblx0XHRcdGNvbnN0IG9sZERvY3VtZW50ID0gbm9kZURvY3VtZW50KG5vZGUpO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbmF0aXZlLmNhbGwodGhpcywgbm9kZSwgY2hpbGQpO1xuXHRcdFx0aWYgKGNvbm5lY3RlZEJlZm9yZSAmJiBub2RlLmlzQ29ubmVjdGVkICYmIG9sZERvY3VtZW50ID09PSBub2RlRG9jdW1lbnQobm9kZSkpIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50c0luKG5vZGUpKSBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBBcnJheS5mcm9tKG5hdGl2ZUF0dHJpYnV0ZXMuY2FsbChlbGVtZW50KSkpIHtcblx0XHRcdFx0Y29uc3QgZW50cnkgPSBlbnRyaWVzLmdldChhdHRyaWJ1dGUpO1xuXHRcdFx0XHRpZiAoZW50cnk/LnN0YXRlID09PSBcImN1c3RvbVwiICYmIGVudHJ5LmNvbm5lY3RlZCkgaW52b2tlKGF0dHJpYnV0ZSwgXCJjb25uZWN0ZWRNb3ZlQ2FsbGJhY2tcIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdH1cblx0ZnVuY3Rpb24gY2hlY2tBdHRhY2hhYmxlKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuXHRcdGlmIChlbnRyaWVzLmdldChhdHRyaWJ1dGUpPy5kZWZpbml0aW9uICYmICFpc0hUTUwoZWxlbWVudCkpIHRocm93IGRvbUVycm9yKFwiQ3VzdG9tIGF0dHJpYnV0ZXMgYXJlIHN1cHBvcnRlZCBvbmx5IG9uIEhUTUwgZWxlbWVudHMuXCIsIFwiTm90U3VwcG9ydGVkRXJyb3JcIik7XG5cdH1cblx0ZnVuY3Rpb24gYXR0YWNoZWQoZWxlbWVudCwgYXR0cmlidXRlLCBvbGQpIHtcblx0XHRpZiAob2xkID09PSBhdHRyaWJ1dGUgfHwgdHJhY2tlZC5oYXMoZWxlbWVudCkgfHwgb2JzZXJ2ZWRSb290cy5oYXMoZWxlbWVudC5nZXRSb290Tm9kZSgpKSkgcmV0dXJuO1xuXHRcdHByb2Nlc3NSZWNvcmRzKFt7XG5cdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdHRhcmdldDogZWxlbWVudCxcblx0XHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZS5sb2NhbE5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IGF0dHJpYnV0ZS5uYW1lc3BhY2VVUkksXG5cdFx0XHRvbGRWYWx1ZTogb2xkPy52YWx1ZSA/PyBudWxsXG5cdFx0fV0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgXCJhdHRyaWJ1dGVzXCIsIHtcblx0XHQuLi5hdHRyaWJ1dGVEZXNjcmlwdG9yLFxuXHRcdGdldCgpIHtcblx0XHRcdGNvbnN0IG1hcCA9IG5hdGl2ZUF0dHJpYnV0ZXMuY2FsbCh0aGlzKTtcblx0XHRcdGF0dHJpYnV0ZU1hcHMuc2V0KG1hcCwgdGhpcyk7XG5cdFx0XHRyZXR1cm4gbWFwO1xuXHRcdH1cblx0fSk7XG5cdGZvciAoY29uc3QgbmFtZSBvZiBbXCJzZXRBdHRyaWJ1dGVOb2RlXCIsIFwic2V0QXR0cmlidXRlTm9kZU5TXCJdKSB7XG5cdFx0Y29uc3QgbmF0aXZlID0gZWxQcm90b1tuYW1lXTtcblx0XHRlbFByb3RvW25hbWVdID0gZnVuY3Rpb24oYXR0cmlidXRlKSB7XG5cdFx0XHRjaGVja0F0dGFjaGFibGUodGhpcywgYXR0cmlidXRlKTtcblx0XHRcdGNvbnN0IG9sZCA9IG5hdGl2ZS5jYWxsKHRoaXMsIGF0dHJpYnV0ZSk7XG5cdFx0XHRhdHRhY2hlZCh0aGlzLCBhdHRyaWJ1dGUsIG9sZCk7XG5cdFx0XHRyZXR1cm4gb2xkO1xuXHRcdH07XG5cdH1cblx0Y29uc3QgbWFwUHJvdG8gPSBOYW1lZE5vZGVNYXAucHJvdG90eXBlO1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgW1wic2V0TmFtZWRJdGVtXCIsIFwic2V0TmFtZWRJdGVtTlNcIl0pIHtcblx0XHRjb25zdCBuYXRpdmUgPSBtYXBQcm90b1tuYW1lXTtcblx0XHRtYXBQcm90b1tuYW1lXSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSkge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IGF0dHJpYnV0ZU1hcHMuZ2V0KHRoaXMpO1xuXHRcdFx0aWYgKGVsZW1lbnQpIGNoZWNrQXR0YWNoYWJsZShlbGVtZW50LCBhdHRyaWJ1dGUpO1xuXHRcdFx0Y29uc3Qgb2xkID0gbmF0aXZlLmNhbGwodGhpcywgYXR0cmlidXRlKTtcblx0XHRcdGlmIChlbGVtZW50KSBhdHRhY2hlZChlbGVtZW50LCBhdHRyaWJ1dGUsIG9sZCk7XG5cdFx0XHRyZXR1cm4gb2xkO1xuXHRcdH07XG5cdH1cblx0Y29uc3QgcnVudGltZSA9IHtcblx0XHRyZWdpc3RyeTogZ2xvYmFsUmVnaXN0cnksXG5cdFx0UmVnaXN0cnksXG5cdFx0b2JzZXJ2ZVJvb3QsXG5cdFx0Zmx1c2hcblx0fTtcblx0cG9seWZpbGxTdGF0ZS5ydW50aW1lID0gcnVudGltZTtcblx0b2JzZXJ2ZVJvb3QoZG9jdW1lbnQpO1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHNJbihkb2N1bWVudCkpIHtcblx0XHRjb25zdCBzaGFkb3cgPSBzaGFkb3dPZihlbGVtZW50KTtcblx0XHRpZiAoc2hhZG93KSBvYnNlcnZlUm9vdChzaGFkb3cpO1xuXHR9XG5cdHJldHVybiBydW50aW1lO1xufVxudmFyIGJyaWRnZXMgPSBzaGFyZWQoXCJkb20udHNAbWl4aW5zMi5icmlkZ2VzXCIsICgpID0+ICh7XG5cdGJ5UmVnaXN0cnk6IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLFxuXHRmcm9tQXR0cmlidXRlOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKVxufSkpO1xuZnVuY3Rpb24gbWl4aW5Ub0N1c3RvbUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBtaXhpbiwgb3B0aW9ucyA9IHt9KSB7XG5cdGFzc2VydEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSk7XG5cdGNvbnN0IHJlZ2lzdHJ5ID0gb3B0aW9ucy5yZWdpc3RyeSA/PyBnZXRDdXN0b21BdHRyaWJ1dGVzKCk7XG5cdGxldCBjYWNoZSA9IGJyaWRnZXMuYnlSZWdpc3RyeS5nZXQocmVnaXN0cnkpO1xuXHRpZiAoIWNhY2hlKSBicmlkZ2VzLmJ5UmVnaXN0cnkuc2V0KHJlZ2lzdHJ5LCBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuXHRjb25zdCBwcmV2aW91cyA9IGNhY2hlLmdldChhdHRyaWJ1dGVOYW1lKTtcblx0aWYgKHByZXZpb3VzKSB7XG5cdFx0aWYgKHByZXZpb3VzLm1peGluICE9PSBtaXhpbikgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgYnJpZGdlIGNvbmZsaWN0OiAke2F0dHJpYnV0ZU5hbWV9YCk7XG5cdFx0cmV0dXJuIHByZXZpb3VzLmNvbnN0cnVjdG9yO1xuXHR9XG5cdGlmIChyZWdpc3RyeS5nZXQoYXR0cmlidXRlTmFtZSkpIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIGFscmVhZHkgZGVmaW5lZDogJHthdHRyaWJ1dGVOYW1lfWApO1xuXHRjb25zdCBCYXNlID0gZ2V0Q3VzdG9tQXR0cmlidXRlQmFzZSgpO1xuXHRjb25zdCBvd25lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0ZnVuY3Rpb24gb3duZXIoYXR0cmlidXRlKSB7XG5cdFx0Y29uc3QgcHJldmlvdXNPd25lciA9IG93bmVycy5nZXQoYXR0cmlidXRlKT8uZGVyZWYoKTtcblx0XHRjb25zdCBjdXJyZW50ID0gYXR0cmlidXRlLm93bmVyRWxlbWVudDtcblx0XHRpZiAoY3VycmVudCkge1xuXHRcdFx0aWYgKHByZXZpb3VzT3duZXIgJiYgcHJldmlvdXNPd25lciAhPT0gY3VycmVudCkgcmVsZWFzZShwcmV2aW91c093bmVyLCBtaXhpbiwgYXR0cmlidXRlKTtcblx0XHRcdG93bmVycy5zZXQoYXR0cmlidXRlLCBuZXcgV2Vha1JlZihjdXJyZW50KSk7XG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9XG5cdFx0cmV0dXJuIHByZXZpb3VzT3duZXI7XG5cdH1cblx0Y2xhc3MgTWl4aW5BdHRyaWJ1dGUgZXh0ZW5kcyBCYXNlIHtcblx0XHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBvd25lcih0aGlzKTtcblx0XHRcdGlmIChlbGVtZW50ICYmIHRoaXMub3duZXJFbGVtZW50ID09PSBlbGVtZW50KSBhY3F1aXJlKGVsZW1lbnQsIG1peGluLCB0aGlzKTtcblx0XHR9XG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gb3duZXIodGhpcyk7XG5cdFx0XHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0XHRcdGlmICghdGhpcy5vd25lckVsZW1lbnQpIHJlbGVhc2UoZWxlbWVudCwgbWl4aW4sIHRoaXMpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IGJpbmRpbmcgPSBlbmdpbmUuYmluZGluZ3MuZ2V0KGVsZW1lbnQpPy5nZXQobWl4aW4pO1xuXHRcdFx0XHRpZiAoYmluZGluZykgcmVjb25jaWxlQmluZGluZyhlbGVtZW50LCBtaXhpbiwgYmluZGluZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBvd25lcih0aGlzKTtcblx0XHRcdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsICYmIHRoaXMub3duZXJFbGVtZW50ID09PSBlbGVtZW50KSBhY3F1aXJlKGVsZW1lbnQsIG1peGluLCB0aGlzKTtcblx0XHRcdGNhbGxNaXhpbihlbGVtZW50LCBtaXhpbiwgXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIiwgdGhpcywgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcblx0XHRcdGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgcmVsZWFzZShlbGVtZW50LCBtaXhpbiwgdGhpcyk7XG5cdFx0fVxuXHRcdGFkb3B0ZWRDYWxsYmFjayhfb2xkRG9jdW1lbnQsIF9uZXdEb2N1bWVudCkge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IG93bmVyKHRoaXMpO1xuXHRcdFx0Y29uc3QgYmluZGluZyA9IGVsZW1lbnQgJiYgZW5naW5lLmJpbmRpbmdzLmdldChlbGVtZW50KT8uZ2V0KG1peGluKTtcblx0XHRcdGlmIChlbGVtZW50ICYmIGJpbmRpbmcpIHJlY29uY2lsZUJpbmRpbmcoZWxlbWVudCwgbWl4aW4sIGJpbmRpbmcpO1xuXHRcdH1cblx0XHRjb25uZWN0ZWRNb3ZlQ2FsbGJhY2soKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gb3duZXIodGhpcyk7XG5cdFx0XHRpZiAoZWxlbWVudCkgY2FsbE1peGluKGVsZW1lbnQsIG1peGluLCBcImNvbm5lY3RlZE1vdmVDYWxsYmFja1wiLCB0aGlzKTtcblx0XHR9XG5cdH1cblx0cmVnaXN0cnkuZGVmaW5lKGF0dHJpYnV0ZU5hbWUsIE1peGluQXR0cmlidXRlKTtcblx0Y2FjaGUuc2V0KGF0dHJpYnV0ZU5hbWUsIHtcblx0XHRtaXhpbixcblx0XHRjb25zdHJ1Y3RvcjogTWl4aW5BdHRyaWJ1dGVcblx0fSk7XG5cdHJldHVybiBNaXhpbkF0dHJpYnV0ZTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyQ3Jvc3NNaXhpbihuYW1lLCBtaXhpbiwgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBvcHRpb25zLmF0dHJpYnV0ZU5hbWUgPz8gbmFtZTtcblx0YXNzZXJ0QXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKTtcblx0Y29uc3QgcmVnaXN0cnkgPSBvcHRpb25zLnJlZ2lzdHJ5ID8/IGdldEN1c3RvbUF0dHJpYnV0ZXMoKTtcblx0Y29uc3QgY2FjaGVkID0gYnJpZGdlcy5ieVJlZ2lzdHJ5LmdldChyZWdpc3RyeSk/LmdldChhdHRyaWJ1dGVOYW1lKTtcblx0aWYgKHJlZ2lzdHJ5LmdldChhdHRyaWJ1dGVOYW1lKSAmJiAoIWNhY2hlZCB8fCBjYWNoZWQubWl4aW4gIT09IG1peGluKSkgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgYWxyZWFkeSBkZWZpbmVkOiAke2F0dHJpYnV0ZU5hbWV9YCk7XG5cdHJlZ2lzdGVyTWl4aW4obmFtZSwgbWl4aW4pO1xuXHRyZXR1cm4ge1xuXHRcdG1peGluLFxuXHRcdGF0dHJpYnV0ZTogbWl4aW5Ub0N1c3RvbUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBtaXhpbiwgeyByZWdpc3RyeSB9KVxuXHR9O1xufVxuZnVuY3Rpb24gY3VzdG9tQXR0cmlidXRlVG9NaXhpbihuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBvcHRpb25zLmF0dHJpYnV0ZU5hbWUgPz8gbmFtZTtcblx0YXNzZXJ0QXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKTtcblx0Y29uc3QgcmVnaXN0cnkgPSBvcHRpb25zLnJlZ2lzdHJ5ID8/IGdldEN1c3RvbUF0dHJpYnV0ZXMoKTtcblx0bGV0IGNhY2hlID0gYnJpZGdlcy5mcm9tQXR0cmlidXRlLmdldChyZWdpc3RyeSk7XG5cdGlmICghY2FjaGUpIGJyaWRnZXMuZnJvbUF0dHJpYnV0ZS5zZXQocmVnaXN0cnksIGNhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG5cdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChhdHRyaWJ1dGVOYW1lKTtcblx0aWYgKGNhY2hlZCkge1xuXHRcdGlmIChjYWNoZWQuY29uc3RydWN0b3IgIT09IGNvbnN0cnVjdG9yKSB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBhZGFwdGVyIGNvbmZsaWN0OiAke2F0dHJpYnV0ZU5hbWV9YCk7XG5cdFx0aWYgKG1peGluTmFtZXNwYWNlLmdldChjYWNoZWQ/Lm1peGluKSAhPT0gbmFtZSkgdGhyb3cgbmV3IEVycm9yKFwiQWRhcHRlciBhbHJlYWR5IGhhcyBhbm90aGVyIG1peGluIG5hbWUuXCIpO1xuXHRcdHJldHVybiBjYWNoZWQ/Lm1peGluO1xuXHR9XG5cdGNvbnN0IGV4aXN0aW5nID0gcmVnaXN0cnkuZ2V0KGF0dHJpYnV0ZU5hbWUpO1xuXHRpZiAoZXhpc3RpbmcgJiYgZXhpc3RpbmcgIT09IGNvbnN0cnVjdG9yKSB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBhbHJlYWR5IGRlZmluZWQ6ICR7YXR0cmlidXRlTmFtZX1gKTtcblx0Y29uc3QgbWl4aW4gPSB7IGNvbm5lY3QocmVmKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHJlZi5kZXJlZigpO1xuXHRcdGlmICghZWxlbWVudCB8fCAhaXNIVE1MKGVsZW1lbnQpKSByZXR1cm47XG5cdFx0aWYgKGVsZW1lbnQuY3VzdG9tQXR0cmlidXRlUmVnaXN0cnkgIT09IHJlZ2lzdHJ5KSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBlbGVtZW50J3MgcmVnaXN0cnkgZG9lcyBub3Qgb3duICR7YXR0cmlidXRlTmFtZX07IGluaXRpYWxpemUgaXRzIHNjb3BlIGZpcnN0LmApO1xuXHRcdHJlZ2lzdHJ5LnVwZ3JhZGUoZWxlbWVudCk7XG5cdFx0aWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlTlMobnVsbCwgYXR0cmlidXRlTmFtZSkpIHJldHVybjtcblx0XHRjb25zdCBhdHRyaWJ1dGUgPSBjcmVhdGVDdXN0b21BdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwge1xuXHRcdFx0ZG9jdW1lbnQ6IGVsZW1lbnQub3duZXJEb2N1bWVudCxcblx0XHRcdHJlZ2lzdHJ5XG5cdFx0fSk7XG5cdFx0YXR0cmlidXRlLnZhbHVlID0gdHlwZW9mIG9wdGlvbnMudmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IG9wdGlvbnMudmFsdWUoZWxlbWVudCkgOiBvcHRpb25zLnZhbHVlID8/IFwiXCI7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGVOb2RlKGF0dHJpYnV0ZSk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZU5vZGVOUyhudWxsLCBhdHRyaWJ1dGVOYW1lKSA9PT0gYXR0cmlidXRlKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cmlidXRlKTtcblx0XHR9O1xuXHR9IH07XG5cdGNvbnN0IG5hbWVkID0gbWl4aW5SZWdpc3RyeS5nZXQobmFtZS50cmltKCkpO1xuXHRpZiAobmFtZWQgJiYgbmFtZWQgIT09IG1peGluKSB0aHJvdyBuZXcgRXJyb3IoYE1peGluIG5hbWUgYWxyZWFkeSByZWdpc3RlcmVkOiAke25hbWV9YCk7XG5cdGlmICghbmFtZS50cmltKCkgfHwgL1xccy8udGVzdChuYW1lLnRyaW0oKSkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIG1peGluIG5hbWUuXCIpO1xuXHRpZiAoIWV4aXN0aW5nKSByZWdpc3RyeS5kZWZpbmUoYXR0cmlidXRlTmFtZSwgY29uc3RydWN0b3IpO1xuXHRyZWdpc3Rlck1peGluKG5hbWUsIG1peGluKTtcblx0Y2FjaGUuc2V0KGF0dHJpYnV0ZU5hbWUsIHtcblx0XHRjb25zdHJ1Y3Rvcixcblx0XHRtaXhpblxuXHR9KTtcblx0cmV0dXJuIG1peGluO1xufVxuZnVuY3Rpb24gbWVyZ2VNaXhpbnMobmFtZSwgLi4uaW5wdXQpIHtcblx0Y29uc3QgcGFydHMgPSBbLi4ubmV3IFNldChpbnB1dCldO1xuXHRmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIGlmICghcGFydCB8fCB0eXBlb2YgcGFydCAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcGFydCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwibWVyZ2VNaXhpbnMgZXhwZWN0cyBtaXhpbiBvYmplY3RzLlwiKTtcblx0Y29uc3QgbGVhc2VzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdGNvbnN0IG1lcmdlZCA9IHtcblx0XHRjb25uZWN0KHJlZikge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHJlZi5kZXJlZigpO1xuXHRcdFx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdFx0XHRjb25zdCBsZWFzZSA9IHt9O1xuXHRcdFx0bGVhc2VzLnNldChlbGVtZW50LCBsZWFzZSk7XG5cdFx0XHRmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIGFjcXVpcmUoZWxlbWVudCwgcGFydCwgbGVhc2UpO1xuXHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSByZWxlYXNlKGVsZW1lbnQsIHBhcnRzW2ldLCBsZWFzZSk7XG5cdFx0XHRcdGlmIChsZWFzZXMuZ2V0KGVsZW1lbnQpID09PSBsZWFzZSkgbGVhc2VzLmRlbGV0ZShlbGVtZW50KTtcblx0XHRcdH07XG5cdFx0fSxcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2socmVmLCBfc2VsZiwgcmVsYXRlZCwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gcmVmLmRlcmVmKCk7XG5cdFx0XHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0XHRcdGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykgY2FsbE1peGluKGVsZW1lbnQsIHBhcnQsIFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIsIHJlbGF0ZWQuYXR0cmlidXRlLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuXHRcdH0sXG5cdFx0Y29ubmVjdGVkTW92ZUNhbGxiYWNrKHJlZiwgX3NlbGYsIHJlbGF0ZWQpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSByZWYuZGVyZWYoKTtcblx0XHRcdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRcdFx0Zm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSBjYWxsTWl4aW4oZWxlbWVudCwgcGFydCwgXCJjb25uZWN0ZWRNb3ZlQ2FsbGJhY2tcIiwgcmVsYXRlZC5hdHRyaWJ1dGUpO1xuXHRcdH1cblx0fTtcblx0aWYgKG5hbWUpIHJlZ2lzdGVyTWl4aW4obmFtZSwgbWVyZ2VkKTtcblx0cmV0dXJuIG1lcmdlZDtcbn1cbmZ1bmN0aW9uIGZsdXNoTWl4aW5zKCkge1xuXHRpZiAoIWhhc0RPTSgpKSByZXR1cm47XG5cdHBvbHlmaWxsU3RhdGUucnVudGltZT8uZmx1c2goKTtcblx0Zm9yIChjb25zdCB7IG9ic2VydmVyIH0gb2YgZW5naW5lLndhdGNoZXMudmFsdWVzKCkpIGhhbmRsZVJvb3RSZWNvcmRzKG9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuXHRkcmFpblBlbmRpbmcoKTtcblx0Zm9yIChjb25zdCByb290IG9mIHJvb3RzKSBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHNJbihyb290KSkgdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpO1xuXHRwb2x5ZmlsbFN0YXRlLnJ1bnRpbWU/LmZsdXNoKCk7XG5cdGRyYWluUGVuZGluZygpO1xufVxuYXN5bmMgZnVuY3Rpb24gc2V0dGxlTWl4aW5zKCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdGF3YWl0IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdGZsdXNoTWl4aW5zKCk7XG5cdH1cbn1cbmlmIChoYXNET00oKSkge1xuXHRhcHBseSgpO1xuXHRhZGRSb290KGRvY3VtZW50KTtcbn1cblxuLy8gc3JjL21peGluL0hhbmRsZXIudHNcbnZhciBoYW5kbGVIaWRkZW4gPSAoZWxlbWVudCwgXywgdmlzaWJsZSkgPT4ge1xuXHRjb25zdCAkcmVmID0gdmlzaWJsZTtcblx0aWYgKGhhc1ZhbHVlKHZpc2libGUpKSB2aXNpYmxlID0gdmlzaWJsZS52YWx1ZTtcblx0Y29uc3QgaXNWaXNpYmxlID0gKHZpc2libGUgPSBub3JtYWxpemVQcmltaXRpdmUodmlzaWJsZSkpICE9IG51bGwgJiYgdmlzaWJsZSAhPT0gZmFsc2U7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgZWxlbWVudC5oaWRkZW4gPSAhaXNWaXNpYmxlO1xuXHRcdGVsc2UgaWYgKGlzVmlzaWJsZSkgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKTtcblx0XHRlbHNlIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIiwgXCJcIik7XG5cdH0pO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgaGFuZGxlUHJvcGVydHkgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIShwcm9wID0gdHlwZW9mIHByb3AgPT0gXCJzdHJpbmdcIiA/IGtlYmFiVG9DYW1lbChwcm9wKSA6IHByb3ApIHx8ICFlbCB8fCBbXG5cdFx0XCJzdHlsZVwiLFxuXHRcdFwiZGF0YXNldFwiLFxuXHRcdFwiYXR0cmlidXRlU3R5bGVNYXBcIixcblx0XHRcInN0eWxlTWFwXCIsXG5cdFx0XCJjb21wdXRlZFN0eWxlTWFwXCJcblx0XS5pbmRleE9mKHByb3AgfHwgXCJcIikgIT0gLTEpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0aWYgKGVsPy5bcHJvcF0gPT09IHZhbCkgcmV0dXJuIGVsO1xuXHRpZiAoZWw/Lltwcm9wXSAhPT0gdmFsKSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodmFsICE9IG51bGwpIGVsW3Byb3BdID0gdmFsO1xuXHRcdGVsc2UgZGVsZXRlIGVsW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVEYXRhc2V0ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3QgZGF0YXNldFJlZiA9IGVsPy5kYXRhc2V0O1xuXHRpZiAoIXByb3AgfHwgIWVsIHx8ICFkYXRhc2V0UmVmKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWw/LnZhbHVlO1xuXHRwcm9wID0ga2ViYWJUb0NhbWVsKHByb3ApO1xuXHRpZiAoZGF0YXNldFJlZj8uW3Byb3BdID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPT09IGZhbHNlKSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0ZWxzZSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiKSBkYXRhc2V0UmVmW3Byb3BdID0gU3RyaW5nKHZhbCk7XG5cdFx0ZWxzZSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgZGVsZXRlU3R5bGVQcm9wZXJ0eSA9IChlbCwgbmFtZSkgPT4gZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoY2FtZWxUb0tlYmFiKG5hbWUpKTtcbnZhciBoYW5kbGVTdHlsZUNoYW5nZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IHN0eWxlUmVmID0gZWw/LnN0eWxlO1xuXHRpZiAoIXByb3AgfHwgdHlwZW9mIHByb3AgIT0gXCJzdHJpbmdcIiB8fCAhZWwgfHwgIXN0eWxlUmVmKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIodmFsLCAoKSA9PiB7XG5cdFx0aWYgKGlzVmFsKHZhbCkgfHwgaGFzVmFsdWUodmFsKSB8fCBpc1ZhbHVlVW5pdCh2YWwpKSBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wLCB2YWwpO1xuXHRcdGVsc2UgaWYgKHZhbCA9PSBudWxsKSBkZWxldGVTdHlsZVByb3BlcnR5KGVsLCBwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlQXR0cmlidXRlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCFwcm9wIHx8ICFlbCkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRwcm9wID0gY2FtZWxUb0tlYmFiKHByb3ApO1xuXHRpZiAoZWw/LmdldEF0dHJpYnV0ZT8uKHByb3ApID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIgJiYgdmFsICE9IG51bGwgJiYgKHR5cGVvZiB2YWwgPT0gXCJib29sZWFuXCIgPyB2YWwgPT0gdHJ1ZSA6IHRydWUpKSBlbD8uc2V0QXR0cmlidXRlPy4ocHJvcCwgU3RyaW5nKHZhbCkpO1xuXHRcdGVsc2UgZWw/LnJlbW92ZUF0dHJpYnV0ZT8uKHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcblxuLy8gc3JjL21peGluL2p1bmN0aW9uL3R5cGVzLnRzXG5mdW5jdGlvbiBqdW5jdGlvblRvQm94KGEsIGIpIHtcblx0Y29uc3QgbGVmdCA9IE1hdGgubWluKGEueCwgYi54KTtcblx0Y29uc3QgdG9wID0gTWF0aC5taW4oYS55LCBiLnkpO1xuXHRjb25zdCByaWdodCA9IE1hdGgubWF4KGEueCwgYi54KTtcblx0Y29uc3QgYm90dG9tID0gTWF0aC5tYXgoYS55LCBiLnkpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aDogcmlnaHQgLSBsZWZ0LFxuXHRcdGhlaWdodDogYm90dG9tIC0gdG9wXG5cdH07XG59XG52YXIgSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tc2VsZWN0OnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tc2VsZWN0Om1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXNlbGVjdDplbmRcIixcblx0Y2FuY2VsOiBcImp1bmN0aW9uLXNlbGVjdDpjYW5jZWxcIlxufTtcbnZhciBKVU5DVElPTl9EUkFHX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tZHJhZzpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLWRyYWc6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tZHJhZzplbmRcIlxufTtcbnZhciBKVU5DVElPTl9SRVNJWkVfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1yZXNpemU6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1yZXNpemU6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tcmVzaXplOmVuZFwiXG59O1xuXG4vLyBzcmMvbWl4aW4vanVuY3Rpb24vSnVuY3Rpb25NaXhpbnMudHNcbnZhciBtaXhpbkRpc3Bvc2Vyc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5EaXNwb3NlcnNcIik7XG52YXIgbWl4aW5EaXNwb3NlcnMgPSBnbG9iYWxUaGlzW21peGluRGlzcG9zZXJzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcHVzaERpc3Bvc2FibGUgPSAoaG9zdCwgbWl4aW5OYW1lLCBmbikgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgbGlzdCA9IG1hcC5nZXQobWl4aW5OYW1lKSA/PyBbXTtcblx0bGlzdC5wdXNoKGZuKTtcblx0bWFwLnNldChtaXhpbk5hbWUsIGxpc3QpO1xuXHRtaXhpbkRpc3Bvc2Vycy5zZXQoaG9zdCwgbWFwKTtcbn07XG52YXIgcnVuRGlzcG9zZXJzID0gKGhvc3QsIG1peGluTmFtZSkgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCk7XG5cdGNvbnN0IGxpc3QgPSBtYXA/LmdldChtaXhpbk5hbWUpO1xuXHRpZiAoIWxpc3QpIHJldHVybjtcblx0Zm9yIChjb25zdCBmbiBvZiBsaXN0KSB0cnkge1xuXHRcdGZuKCk7XG5cdH0gY2F0Y2gge31cblx0bWFwLmRlbGV0ZShtaXhpbk5hbWUpO1xuXHRpZiAobWFwLnNpemUgPT09IDApIG1peGluRGlzcG9zZXJzLmRlbGV0ZShob3N0KTtcbn07XG52YXIgcGFyc2VQeFZhciA9IChob3N0LCBuYW1lKSA9PiB7XG5cdGNvbnN0IHJhdyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnRyaW0/LigpID8/IFwiXCI7XG5cdGNvbnN0IG4gPSBwYXJzZUZsb2F0KHJhdyk7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogMDtcbn07XG52YXIgcXVlcnlIYW5kbGUgPSAoaG9zdCwgYXR0ciwgZmFsbGJhY2spID0+IHtcblx0Y29uc3Qgc2VsID0gaG9zdC5nZXRBdHRyaWJ1dGUoYXR0cik/LnRyaW0oKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxsYmFjaztcblx0Y29uc3QgZm91bmQgPSBob3N0LnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcblx0cmV0dXJuIGZvdW5kIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBmb3VuZCA6IGZhbGxiYWNrO1xufTtcbnZhciBKdW5jdGlvblNlbGVjdE1peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0b3ZlcmxheS5jbGFzc05hbWUgPSBcInVpLWp1bmN0aW9uLXNlbGVjdC1vdmVybGF5XCI7XG5cdFx0b3ZlcmxheS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLW92ZXJsYXlcIiwgXCJcIik7XG5cdFx0b3ZlcmxheS5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6dmFyKC0tei1tYXgsIDk5OTkpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IGRhc2hlZCBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLWNvbG9yLXByaW1hcnksICM1YTdmZmYpIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNWE3ZmZmKSAxNCUsIHRyYW5zcGFyZW50KTtkaXNwbGF5Om5vbmU7aW5zZXQ6YXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjA7XCI7XG5cdFx0Y29uc3QgZW5zdXJlUG9zaXRpb25lZCA9ICgpID0+IHtcblx0XHRcdGlmICgoZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oaG9zdCkpPy5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikgaG9zdC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0XHR9O1xuXHRcdGVuc3VyZVBvc2l0aW9uZWQoKTtcblx0XHRob3N0LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXHRcdGxldCBhY3RpdmUgPSBmYWxzZTtcblx0XHRsZXQgYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRsZXQgYiA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRjb25zdCBsb2NhbFBvaW50ID0gKGV2KSA9PiB7XG5cdFx0XHRjb25zdCByID0gaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IGV2LmNsaWVudFggLSByLmxlZnQsXG5cdFx0XHRcdHk6IGV2LmNsaWVudFkgLSByLnRvcFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNvbnN0IGFwcGx5T3ZlcmxheSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRpZiAoYm94LndpZHRoIDwgMSAmJiBib3guaGVpZ2h0IDwgMSkge1xuXHRcdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5sZWZ0ID0gYCR7Ym94LmxlZnR9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS50b3AgPSBgJHtib3gudG9wfXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUud2lkdGggPSBgJHtib3gud2lkdGh9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBgJHtib3guaGVpZ2h0fXB4YDtcblx0XHR9O1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtanVuY3Rpb24taWdub3JlLXNlbGVjdF0sIFtkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXSwgW2RhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZV0sIGJ1dHRvbiwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpIHJldHVybjtcblx0XHRcdGlmICghKGV2LnRhcmdldCA9PT0gaG9zdCB8fCBob3N0LmNvbnRhaW5zKGV2LnRhcmdldCkpKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSB0cnVlO1xuXHRcdFx0YSA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YiA9IHsgLi4uYSB9O1xuXHRcdFx0aG9zdC5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRiID0gbG9jYWxQb2ludChldik7XG5cdFx0XHRhcHBseU92ZXJsYXkoKTtcblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRib3gsXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBlbmQgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhvc3QucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRib3gsXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0ZW5kKGV2KTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uQ2FuY2VsID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhvc3QucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuY2FuY2VsLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDogeyBob3N0IH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsICgpID0+IHtcblx0XHRcdG92ZXJsYXkucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJjYW5jZWxcIiwgb25DYW5jZWwpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uRHJhZ01peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteFwiLCBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIikpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIikpO1xuXHRcdGNvbnN0IHByZXZpb3VzVHJhbnNmb3JtID0gaG9zdC5zdHlsZS50cmFuc2Zvcm07XG5cdFx0aWYgKCFob3N0LnN0eWxlLnRyYW5zZm9ybSB8fCBob3N0LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJub25lXCIpIGhvc3Quc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChjYWxjKHZhcigtLWp4LWRyYWcteCwgMCkgKiAxcHgpLCBjYWxjKHZhcigtLWp4LWRyYWcteSwgMCkgKiAxcHgpLCAwKVwiO1xuXHRcdGNvbnN0IGhhbmRsZSA9IHF1ZXJ5SGFuZGxlKGhvc3QsIFwiZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRsZXQgc3RhcnRYID0gMDtcblx0XHRsZXQgc3RhcnRZID0gMDtcblx0XHRsZXQgYmFzZVggPSAwO1xuXHRcdGxldCBiYXNlWSA9IDA7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IHRydWU7XG5cdFx0XHRzdGFydFggPSBldi5jbGllbnRYO1xuXHRcdFx0c3RhcnRZID0gZXYuY2xpZW50WTtcblx0XHRcdGJhc2VYID0gcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpO1xuXHRcdFx0YmFzZVkgPSBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIik7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRjbGllbnRYOiBldi5jbGllbnRYLFxuXHRcdFx0XHRcdGNsaWVudFk6IGV2LmNsaWVudFksXG5cdFx0XHRcdFx0YmFzZVgsXG5cdFx0XHRcdFx0YmFzZVlcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRjb25zdCBkeCA9IGV2LmNsaWVudFggLSBzdGFydFg7XG5cdFx0XHRjb25zdCBkeSA9IGV2LmNsaWVudFkgLSBzdGFydFk7XG5cdFx0XHRjb25zdCBueCA9IGJhc2VYICsgZHg7XG5cdFx0XHRjb25zdCBueSA9IGJhc2VZICsgZHk7XG5cdFx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgbngpO1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy15XCIsIG55KTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdGR4LFxuXHRcdFx0XHRcdGR5LFxuXHRcdFx0XHRcdHg6IG54LFxuXHRcdFx0XHRcdHk6IG55XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghZHJhZ2dpbmcpIHJldHVybjtcblx0XHRcdGRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRoYW5kbGUucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHg6IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKSxcblx0XHRcdFx0XHR5OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIilcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsICgpID0+IHtcblx0XHRcdGhvc3Quc3R5bGUudHJhbnNmb3JtID0gcHJldmlvdXNUcmFuc2Zvcm07XG5cdFx0fSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uUmVzaXplTWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgcmVzaXppbmcgPSBmYWxzZTtcblx0XHRsZXQgc3ggPSAwO1xuXHRcdGxldCBzeSA9IDA7XG5cdFx0bGV0IHN3ID0gMDtcblx0XHRsZXQgc2ggPSAwO1xuXHRcdGNvbnN0IG1pblcgPSBNYXRoLm1heCgxMjAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4td1wiKSB8fCBcIlwiKSB8fCAxMjApO1xuXHRcdGNvbnN0IG1pbkggPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdChob3N0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gdHJ1ZTtcblx0XHRcdHN4ID0gZXYuY2xpZW50WDtcblx0XHRcdHN5ID0gZXYuY2xpZW50WTtcblx0XHRcdHN3ID0gaG9zdC5vZmZzZXRXaWR0aDtcblx0XHRcdHNoID0gaG9zdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBzdyxcblx0XHRcdFx0XHRoZWlnaHQ6IHNoXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFyZXNpemluZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbncgPSBNYXRoLm1heChtaW5XLCBzdyArIChldi5jbGllbnRYIC0gc3gpKTtcblx0XHRcdGNvbnN0IG5oID0gTWF0aC5tYXgobWluSCwgc2ggKyAoZXYuY2xpZW50WSAtIHN5KSk7XG5cdFx0XHRob3N0LnN0eWxlLndpZHRoID0gYCR7bnd9cHhgO1xuXHRcdFx0aG9zdC5zdHlsZS5oZWlnaHQgPSBgJHtuaH1weGA7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBudyxcblx0XHRcdFx0XHRoZWlnaHQ6IG5oXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRoYW5kbGUucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IGhvc3Qub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBob3N0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xubmV3IEp1bmN0aW9uU2VsZWN0TWl4aW4oKTtcbm5ldyBKdW5jdGlvbkRyYWdNaXhpbigpO1xubmV3IEp1bmN0aW9uUmVzaXplTWl4aW4oKTtcblxuZXhwb3J0IHsgRE9NTWl4aW4sIEp1bmN0aW9uRHJhZ01peGluLCBKdW5jdGlvblJlc2l6ZU1peGluLCBKdW5jdGlvblNlbGVjdE1peGluLCBNQVRDSCwgTU9DLCBNT0NFbGVtZW50LCBSQUZCZWhhdmlvciwgUkVHRVgsIFJPT1QsIFdhdnlTaGFwZWRDaXJjbGUsIF9fZXhwb3J0UHJvcGVydGllcywgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcywgYWRkRXZlbnQsIGFkZEV2ZW50cywgYWRkRXZlbnRzTGlzdCwgYWRkUm9vdCwgYW5pbWF0ZUhpZGUsIGFuaW1hdGVTaG93LCBhcHBseSwgYXZhaWxTaXplLCBiYmgsIGJidywgYmluZEJlaGF2aW9yLCBiaW5kTWl4aW5zLCBiaW5kU3RvcmUsIGJvcmRlckJveEhlaWdodCwgYm9yZGVyQm94V2lkdGgsIGJvdW5kQmVoYXZpb3JzLCBib3VuZE1peGluU2V0LCBjYmgsIGNidywgY2hhbmdlWm9vbSwgY2xhc3NlcywgY29tcHV0ZUNhcmV0UG9zaXRpb24sIGNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCwgY29udGFpbnNPclNlbGYsIGNvbnRlbnRCb3hIZWlnaHQsIGNvbnRlbnRCb3hXaWR0aCwgY3JlYXRlQ3VzdG9tQXR0cmlidXRlLCBjcmVhdGVDdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSwgY3JlYXRlRWxlbWVudFZhbmlsbGEsIGNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0LCBjdXN0b21BdHRyaWJ1dGVUb01peGluLCBkZWxldGVTdHlsZVByb3BlcnR5LCBkZXRlY3RNb2JpbGUsIGRvQm9yZGVyT2JzZXJ2ZSwgZG9Db250ZW50T2JzZXJ2ZSwgZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXksIGVuc3VyZVZpZXdwb3J0VHJhY2tpbmcsIGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXksIGZpeE9yaWVudFRvU2NyZWVuLCBmaXhlZENsaWVudFpvb20sIGZsdXNoTWl4aW5zLCBnZXRBdmFpbFNpemUsIGdldEJvdW5kaW5nT3JpZW50UmVjdCwgZ2V0Q29ycmVjdE9yaWVudGF0aW9uLCBnZXRDdXN0b21BdHRyaWJ1dGVCYXNlLCBnZXRDdXN0b21BdHRyaWJ1dGVzLCBnZXRFbGVtZW50UmVsYXRlZCwgZ2V0RXZlbnRUYXJnZXQsIGdldE9mZnNldFBhcmVudCwgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4sIGdldFN0b3Jlc09mRWxlbWVudCwgZ2V0Wm9vbSwgaGFuZGxlQXR0cmlidXRlLCBoYW5kbGVEYXRhc2V0LCBoYW5kbGVIaWRkZW4sIGhhbmRsZVByb3BlcnR5LCBoYW5kbGVTdHlsZUNoYW5nZSwgaGFzUGFyZW50LCBodG1sLCBpbmNsdWRlU2VsZiwgaW5kZXhPZiwgaW5pdFRleHRTdHlsZSwgaXNFbGVtZW50LCBpc0luRm9jdXMsIGlzTW9iaWxlLCBpc05lYXJseUlkZW50aXR5LCBpc1BvbHlmaWxsZWQsIGlzU3VwcG9ydGVkLCBpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlTmFtZSwgaXNWYWxpZFBhcmVudCwgbWFrZVJBRkN5Y2xlLCBtZWFzdXJlSW5wdXRJbkZvY3VzLCBtZWFzdXJlVGV4dCwgbWVyZ2VNaXhpbnMsIG1peGluRGlzcG9zZXJzLCBtaXhpbkVsZW1lbnRzLCBtaXhpbk5hbWVzcGFjZSwgbWl4aW5SZWdpc3RyeSwgbWl4aW5Ub0N1c3RvbUF0dHJpYnV0ZSwgbmFtZVJlZ2lzdHJ5RiwgbmFtZWRTdG9yZU1hcHMsIG9ic2VydmVBdHRyaWJ1dGUsIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yLCBvYnNlcnZlQm9yZGVyQm94LCBvYnNlcnZlQnlTZWxlY3Rvciwgb2JzZXJ2ZUNvbnRlbnRCb3gsIG9uQm9yZGVyT2JzZXJ2ZSwgb25Db250ZW50T2JzZXJ2ZSwgb3JpZW50T2YsIG9yaWVudGF0aW9uTnVtYmVyTWFwLCBwYXNzaXZlT3B0cywgcmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0LCByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCwgcmVhZFZpcnR1YWxLZXlib2FyZEhlaWdodFB4LCByZWZsZWN0QmVoYXZpb3JzLCByZWZsZWN0TWl4aW5zLCByZWZsZWN0U3RvcmVzLCByZWdpc3RlckNyb3NzTWl4aW4sIHJlZ2lzdGVyTWl4aW4sIHJlbW92ZUV2ZW50LCByZW1vdmVFdmVudHMsIHJlbW92ZVJvb3QsIHJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCwgcm9vdHMsIHNldEF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXNJZk51bGwsIHNldENoZWNrZWQsIHNldElkbGVJbnRlcnZhbCwgc2V0dGxlTWl4aW5zLCB0aHJvdHRsZU1hcCwgdW5iaW5kTWl4aW5zLCB1bmZpeGVkQ2xpZW50Wm9vbSwgdW5yZWdpc3Rlck1peGluLCB1cGRhdGVBbGxNaXhpbnMsIHVwZGF0ZU1peGluQXR0cmlidXRlcywgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzLCB1cGRhdGVWUCwgdXJsLCB3aGVuQW55U2NyZWVuQ2hhbmdlcywgem9vbU9mLCB6b29tVmFsdWVzIH07Il0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyxpQkFBQUEsSUFBZSxnQkFBQUMsSUFBYyxnQkFBQUMsSUFBYyxZQUFBQyxJQUFVLHFCQUFBQyxJQUFtQixTQUFBQyxJQUFPLGVBQUFDLElBQWEsZ0JBQUFDLElBQWMsdUJBQUFDLElBQXFCLHNCQUFBQyxJQUFvQiwrQkFBQUMsVUFBbUM7QUFDL0wsU0FBUyxVQUFBQyxJQUFRLGFBQUFDLElBQVcsYUFBQUMsSUFBVyxhQUFBQyxJQUFXLG9CQUFBQyxJQUFrQixvQkFBQUMsVUFBd0I7QUFFNUYsY0FBYztBQUdkLElBQUlDLEtBQWtDLHVCQUFPLElBQUksa0NBQWtDLEdBQy9FQyxLQUE0QixXQUFXRCxFQUErQixNQUFzQixvQkFBSSxJQUFJO0FBQ3hHO0FBQUEsRUFDQztBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxN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R0FDOUVmLEVBQWUvZixHQUFNLHNCQUFzQnhCLEVBQVMwaUIsR0FBUSxpQkFBaUJKLENBQUksQ0FBQyxHQUMzRTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFdBQVdQLEdBQUs7QUFDZixVQUFNdmdCLElBQU91Z0IsR0FBSyxRQUFRO0FBQzFCLFdBQUl2Z0IsS0FBTWlnQixHQUFhamdCLEdBQU0sb0JBQW9CLEdBQzFDO0FBQUEsRUFDUjtBQUNEO0FBQ0EsSUFBSXNnQixHQUFvQjtBQUN4QixJQUFJVSxHQUFrQjtBQUN0QixJQUFJWSxHQUFvQjsiLAogICJuYW1lcyI6IFsiJGF2b2lkVHJpZ2dlciIsICJjYW1lbFRvS2ViYWIiLCAiY3Z0X2NzX3RvX29zIiwgImhhc1ZhbHVlIiwgImlzQXJyYXlPckl0ZXJhYmxlIiwgImlzVmFsIiwgImlzVmFsdWVVbml0IiwgImtlYmFiVG9DYW1lbCIsICJub3JtYWxpemVHcmlkTGF5b3V0IiwgIm5vcm1hbGl6ZVByaW1pdGl2ZSIsICJyZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwiLCAiYXBwZWFyIiwgImRlY29ySGlkZSIsICJkZWNvclNob3ciLCAiZGlzYXBwZWFyIiwgIm9ic2VydmVTdHlsZVRyZWUiLCAic2V0U3R5bGVQcm9wZXJ0eSIsICJfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sIiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMiLCAib3B0aW9ucyIsICJuYW1lIiwgImUiLCAiX19leHBvcnRQcm9wZXJ0aWVzIiwgImlzTW9iaWxlIiwgImNoZWNrIiwgImEiLCAiZGV0ZWN0TW9iaWxlIiwgImNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrIiwgInJ1bldoZW5JZGxlJDEiLCAiY2IiLCAidGltZW91dCIsICJnZXRPZmZzZXRQYXJlbnQiLCAiZWxlbWVudCIsICJnZXRPZmZzZXRQYXJlbnRDaGFpbiIsICJwYXJlbnRzIiwgImN1cnJlbnQiLCAicGFyZW50IiwgImlzTmVhcmx5SWRlbnRpdHkiLCAibWF0cml4IiwgImVwc2lsb24iLCAibWFrZVJBRkN5Y2xlIiwgImNvbnRyb2wiLCAickFGIiwgInJlcyIsICJSQUZCZWhhdmlvciIsICJzaGVkIiwgIlJPT1QiLCAic2V0QXR0cmlidXRlc0lmTnVsbCIsICJhdHRycyIsICJ2YWx1ZSIsICJvbGQiLCAic2V0QXR0cmlidXRlcyIsICJ0aHJvdHRsZU1hcCIsICJzZXRJZGxlSW50ZXJ2YWwiLCAiYXJncyIsICJzdGF0dXMiLCAiciIsICJib3JkZXJCb3hXaWR0aCIsICJib3JkZXJCb3hIZWlnaHQiLCAiY29udGVudEJveFdpZHRoIiwgImNvbnRlbnRCb3hIZWlnaHQiLCAib25Cb3JkZXJPYnNlcnZlIiwgIm9uQ29udGVudE9ic2VydmUiLCAiZG9Db250ZW50T2JzZXJ2ZSIsICJvYnNlcnZlciIsICJlbnRyaWVzIiwgImVudHJ5IiwgImNvbnRlbnRCb3hTaXplIiwgImRvQm9yZGVyT2JzZXJ2ZSIsICJib3JkZXJCb3hTaXplIiwgInVybCIsICJ0eXBlIiwgInNvdXJjZSIsICJodG1sIiwgInBhcnNlZCIsICJzZXRDaGVja2VkIiwgImlucHV0IiwgImV2IiwgImlzVmFsaWRQYXJlbnQiLCAiaW5kZXhPZiIsICJub2RlIiwgIk1BVENIIiwgIlJFR0VYIiwgImNyZWF0ZUVsZW1lbnRWYW5pbGxhIiwgInNlbGVjdG9yIiwgImNyZWF0ZSIsICJtYXRjaCIsICJjbGFzc05hbWUiLCAiaXNFbGVtZW50IiwgImVsIiwgImluY2x1ZGVTZWxmIiwgInRhcmdldCIsICJzZWwiLCAiaGFzUGFyZW50IiwgInBhc3NpdmVPcHRzIiwgImFkZEV2ZW50IiwgIm9wdHMiLCAid3IiLCAicmVtb3ZlRXZlbnQiLCAiYWRkRXZlbnRzIiwgInJvb3QiLCAiaGFuZGxlcnMiLCAiYWRkRXZlbnRzTGlzdCIsICJldmVudHMiLCAibGlzdCIsICJjYnMiLCAicmVtb3ZlRXZlbnRzIiwgImdldEV2ZW50VGFyZ2V0IiwgInBhdGgiLCAiY29udGFpbnNPclNlbGYiLCAiYiIsICJhRWwiLCAiYkVsIiwgImFJbmRleCIsICJiSW5kZXgiLCAiTU9DRWxlbWVudCIsICJzZWxmIiwgImhvc3RNYXRjaGVkIiwgImNsb3Nlc3QiLCAiaG9zdCIsICJNT0MiLCAiaXNJbkZvY3VzIiwgInNlbGVjdG9yT3JFbGVtZW50IiwgImRpciIsICJhY3RpdmUiLCAiaXNGb2N1c2VkIiwgImlzSG92ZXJlZCIsICJhbHRDbmQiLCAiZ2V0Wm9vbSIsICJ6b29tVmFsdWVzU3ltYm9sIiwgInpvb21WYWx1ZXMiLCAiem9vbU9mIiwgImNvbnRhaW5lciIsICJjaGFuZ2Vab29tIiwgInNjYWxlIiwgImZpeGVkQ2xpZW50Wm9vbSIsICJ1bmZpeGVkQ2xpZW50Wm9vbSIsICJvcmllbnRPZiIsICJyYXciLCAibiIsICJnZXRCb3VuZGluZ09yaWVudFJlY3QiLCAib3JpZW50IiwgInpvb20iLCAiYm94IiwgIm5ieCIsICJvcl9pIiwgInZ2IiwgInNpemUiLCAibGVmdF8iLCAidG9wXyIsICJyaWdodF8iLCAiYm90dG9tXyIsICJsZWZ0IiwgInJpZ2h0IiwgInRvcCIsICJib3R0b20iLCAid2lkdGgiLCAiaGVpZ2h0IiwgImJidyIsICJiYmgiLCAiY2J3IiwgImNiaCIsICJydW5XaGVuSWRsZSIsICJLRVlCT0FSRF9PVkVSTEFZX1BYIiwgImNhcGFjaXRvcktleWJvYXJkSGVpZ2h0IiwgImNhcGFjaXRvcktleWJvYXJkQm91bmQiLCAid2luZG93S2V5Ym9hcmRCb3VuZCIsICJ2aWV3cG9ydFRyYWNraW5nU3RhcnRlZCIsICJuYXRpdmVEaXNwbGF5IiwgIm5hdGl2ZURpc3BsYXlCb3VuZCIsICJuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCIsICJpc05hdGl2ZUNhcGFjaXRvckhvc3QiLCAiY2FwIiwgInJlYWRDd3NCcmlkZ2UiLCAicGFyc2VOYXRpdmVEaXNwbGF5IiwgImluZm8iLCAid2luZG93VyIsICJ3aW5kb3dIIiwgImRpc3BsYXlXIiwgImRpc3BsYXlIIiwgInciLCAiaCIsICJkZW5zaXR5IiwgImFwcGx5TmF0aXZlRGlzcGxheSIsICJuZXh0IiwgInByZXYiLCAic2FtZSIsICJ1cGRhdGVWUCIsICJyZWZyZXNoTmF0aXZlRGlzcGxheSIsICJCcmlkZ2UiLCAicXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCIsICJiaW5kTmF0aXZlRGlzcGxheSIsICJjYWNoZWQiLCAidmlydHVhbEtleWJvYXJkIiwgIklOVEVSQUNUSVZFX1dJREdFVCIsICJWSUVXUE9SVF9GSVQiLCAiZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkiLCAiaGVhZCIsICJtZXRhIiwgImNvbnRlbnQiLCAiZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSIsICJ2ayIsICJkZWVwQWN0aXZlRWxlbWVudCIsICJpc0ltZVRhcmdldCIsICJ0YWciLCAiaXNDb2xsYXBzZWRDYXJldCIsICJsYXlvdXRMb2NrT3JpZW50IiwgImxheW91dExvY2tXIiwgImxheW91dExvY2tIIiwgImxhc3RTdGFibGVLZXlib2FyZCIsICJpc0xhbmRzY2FwZSIsICJyZWFkUGh5c2ljYWxTY3JlZW4iLCAic3ciLCAic2giLCAiYXciLCAiYWgiLCAibGFuZHNjYXBlIiwgImJveExhbmRzY2FwZSIsICJjbGFtcFRvUGh5c2ljYWwiLCAicGh5cyIsICJpbm5lclciLCAiaW5uZXJIIiwgImNsaWVudFciLCAiY2xpZW50SCIsICJjYXBXIiwgImNhcEgiLCAiY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQiLCAic2FmZVdpZHRoIiwgInNhZmVIZWlnaHQiLCAic2FmZUxlZnQiLCAic2FmZVRvcCIsICJyZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQiLCAicmVhZExheW91dFZpZXdwb3J0IiwgInZ2VyIsICJ2dkgiLCAidnZUb3AiLCAidmtIIiwgInZ2T3ZlcmxhcCIsICJuYXRpdmVDYXAiLCAia2V5Ym9hcmQiLCAiY2FuZGlkYXRlVyIsICJjYW5kaWRhdGVIIiwgIndpZHRoU3RhYmxlIiwgImVkaXRhYmxlRm9jdXNlZCIsICJjb2Fyc2VQb2ludGVyIiwgInN1ZGRlblNocmluayIsICJzaHJpbmsiLCAiZXhwYW5kZWRTZWxlY3Rpb24iLCAibG9ja2VkIiwgImtiIiwgImlzSW1lQ2hyb21lTG9jayIsICJjbHMiLCAicGFyZW50T2YiLCAiaXNTY3JvbGxwb3J0IiwgInN0eWxlIiwgIm95IiwgImZpbmRSYXdFZGl0b3JTY3JvbGxwb3J0IiwgInN0YXJ0IiwgImlubmVyIiwgImZpbmRJbWVTY3JvbGxwb3J0IiwgInJlYWRDYXJldFJlY3QiLCAicmFuZ2UiLCAicmVjdHMiLCAicmVjdCIsICJwaW5JbWVDYXJldEluU2Nyb2xscG9ydCIsICJ2aXNpYmxlQm90dG9tIiwgIm92ZXJmbG93IiwgInBvcnQiLCAicGluVmlzdWFsVmlld3BvcnQiLCAib3ZlcmxheVBpbm5pbmciLCAicmVzZXRDaHJvbWVTY3JvbGwiLCAicGluT3ZlcmxheVNjcm9sbCIsICJpbWUiLCAiYm9keSIsICJzY3JvbGxJbnRvVmlld1BhdGNoZWQiLCAicGF0Y2hJbWVTY3JvbGxJbnRvVmlldyIsICJvcmlnIiwgImFyZyIsICJwaW5JbWVDaHJvbWUiLCAicmVhZFZpcnR1YWxLZXlib2FyZEhlaWdodFB4IiwgImdldEF2YWlsU2l6ZSIsICJsYXlvdXQiLCAidnZCbG9jayIsICJwYW5lVyIsICJwYW5lSCIsICJ3aW5kb3dlZFciLCAid2luZG93ZWRIIiwgInNjcmVlblciLCAic2NyZWVuSCIsICJuYXRpdmVTY2FsZSIsICJhdmFpbFNpemUiLCAiY2xhc3NlcyIsICJvcmllbnRhdGlvbk51bWJlck1hcCIsICJydWxlIiwgInByb3BOYW1lIiwgInByb3BWYWx1ZSIsICJleGlzdHMiLCAiZ2V0Q29ycmVjdE9yaWVudGF0aW9uIiwgIm9yaWVudGF0aW9uVHlwZSIsICJwYXNzaXZlT3B0cyQxIiwgImFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQiLCAiY2xlYXJDYXBhY2l0b3JLZXlib2FyZEhlaWdodCIsICJiaW5kV2luZG93S2V5Ym9hcmRFdmVudHMiLCAib25TaG93IiwgImRldGFpbCIsICJmcm9tRGV0YWlsIiwgImJpbmRDYXBhY2l0b3JLZXlib2FyZCIsICJLZXlib2FyZCIsICJlbnN1cmVWaWV3cG9ydFRyYWNraW5nIiwgIndoZW5BbnlTY3JlZW5DaGFuZ2VzIiwgInRpY2tpbmciLCAidXBkYXRlIiwgInVuc3Vic2NyaWJlcnMiLCAidW5zdWIiLCAiZml4T3JpZW50VG9TY3JlZW4iLCAiY3R4IiwgImluaXRUZXh0U3R5bGUiLCAiZm9udFdlaWdodCIsICJmb250U2l6ZSIsICJmb250RmFtaWx5IiwgImZvbnRTdHJldGNoIiwgIm1lYXN1cmVUZXh0IiwgInRleHQiLCAibWVhc3VyZUlucHV0SW5Gb2N1cyIsICJjb21wdXRlQ2FyZXRQb3NpdGlvbiIsICJwb2ludCIsICJjdXJyZW50V2lkdGgiLCAiaSIsICJjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQiLCAiY2xpZW50IiwgInJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50IiwgImxheW91dE92ZXJyaWRlIiwgImMiLCAiYmFzZSIsICJyZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQiLCAiZ3JpZFN5c3RlbSIsICJjbGllbnRQb2ludCIsICJtb2RlIiwgImNzIiwgInBsIiwgInB0IiwgInByIiwgInBiIiwgImNvbnRlbnRXIiwgImNvbnRlbnRIIiwgImNzQ29vcmQiLCAiYW5pbWF0ZVNob3ciLCAiYW5pbWF0ZUhpZGUiLCAiV2F2eVNoYXBlZENpcmNsZSIsICJzdGVwcyIsICJhbXBsaXR1ZGUiLCAiZnJlcSIsICJwb2ludHMiLCAiYW5nbGUiLCAic3RlcCIsICJ2YXJpYW50IiwgImZ1bmMiLCAib25Cb3JkZXJPYnNlcnZlU3ltYm9sIiwgIm9uQm9yZGVyT2JzZXJ2ZSQxIiwgIm9uQ29udGVudE9ic2VydmVTeW1ib2wiLCAib25Db250ZW50T2JzZXJ2ZSQxIiwgInVud3JhcEZyb21RdWVyeSIsICJub3JtYWxpemVTZWxlY3RvciIsICJmYWxsYmFjayIsICJzYWZlUXVlcnlTZWxlY3RvckFsbCIsICJzYWZlTWF0Y2hlcyIsICJvYnNlcnZlQ29udGVudEJveCIsICJjYWxsYmFja3MiLCAib2JzZXJ2ZUJvcmRlckJveCIsICJvYnNlcnZlQXR0cmlidXRlIiwgImF0dHJpYnV0ZSIsICJvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvciIsICJhdHRyaWJ1dGVMaXN0IiwgInMiLCAibXV0YXRpb25MaXN0IiwgIm11dGF0aW9uIiwgImFkZGVkTm9kZXMiLCAicmVtb3ZlZE5vZGVzIiwgIm9ic2VydmVCeVNlbGVjdG9yIiwgIm11dCIsICJvYnMiLCAidW53cmFwTm9kZXNCeVNlbGVjdG9yIiwgIm5vZGVzIiwgIiRub2RlcyIsICJvYlJlZiIsICJoYW5kbGVNdXRhdGlvbiIsICJoYW5kbGVDb21lIiwgImhhbmRsZU91dENvbWUiLCAiaGFuZGxlRm9jdXNDbGljayIsICJmYWN0b3JzIiwgInNlbGVjdGVkIiwgImJvdW5kQmVoYXZpb3JzIiwgImJpbmRCZWhhdmlvciIsICJiZWhTZXQiLCAiYmVoYXZpb3IiLCAicmVmbGVjdEJlaGF2aW9ycyIsICJiZWhhdmlvcnMiLCAibmFtZWRTdG9yZU1hcHNTeW1ib2wiLCAibmFtZWRTdG9yZU1hcHMiLCAiZ2V0U3RvcmVzT2ZFbGVtZW50IiwgIm1hcCIsICJFIiwgIm0iLCAiaXNXZWFrQ29tcGF0aWJsZSIsICJiaW5kU3RvcmUiLCAib2JqIiwgIndlYWtNYXAiLCAicmVmbGVjdFN0b3JlcyIsICJzdG9yZXMiLCAiZ2xvYmFscyIsICJzaGFyZWQiLCAia2V5IiwgInN5bWJvbCIsICJoYXNET00iLCAicmVxdWlyZURPTSIsICJyZXBvcnQiLCAiZXJyb3IiLCAiZm4iLCAic2FmZSIsICJjYWxsYmFjayIsICJkb21FcnJvciIsICJtZXNzYWdlIiwgImlzVmFsaWRDdXN0b21BdHRyaWJ1dGVOYW1lIiwgImFzc2VydEF0dHJpYnV0ZU5hbWUiLCAiaXNFbGVtZW50JDEiLCAiaXNIVE1MIiwgImlzU2hhZG93IiwgImJvdW5kTWl4aW5TZXQiLCAibWl4aW5FbGVtZW50cyIsICJtaXhpblJlZ2lzdHJ5IiwgIm1peGluTmFtZXNwYWNlIiwgImVuZ2luZSIsICJyb290cyIsICJzaGFkb3dPZiIsICJlbGVtZW50c0luIiwgInN0YWNrIiwgImNoaWxkIiwgInNoYWRvdyIsICJsaWdodEVsZW1lbnRzSW4iLCAiYXR0cmlidXRlc0ZvciIsICJiaW5kaW5nIiwgInJlc3VsdCIsICJnZXRFbGVtZW50UmVsYXRlZCIsICJtaXhpbiIsICJhdHRyaWJ1dGVzIiwgImJpbmRpbmdGb3IiLCAiY2FsbE1peGluIiwgImV4dHJhIiwgInJlY29uY2lsZUJpbmRpbmciLCAidHVybiIsICJvbGREb2N1bWVudCIsICJ3YW50ZWQiLCAic2V0IiwgImVsZW1lbnRzIiwgImNsZWFudXAiLCAiZW5xdWV1ZSIsICJhY3F1aXJlIiwgInJlbGVhc2UiLCAiZHJhaW5QZW5kaW5nIiwgInBlbmRpbmciLCAidXBkYXRlQWxsTWl4aW5zIiwgImRhdGFOYW1lcyIsICJ3cml0ZURhdGFOYW1lcyIsICJuYW1lcyIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXMiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMiLCAiYmluZE1peGlucyIsICJtaXhTZXQiLCAidW5iaW5kTWl4aW5zIiwgInJlZmxlY3QiLCAicmVmbGVjdE1peGlucyIsICJtaXhpbnMiLCAidmFsdWVzIiwgInJlZ2lzdGVyTWl4aW4iLCAiZXhpc3RpbmciLCAicHJldmlvdXNOYW1lIiwgInVucmVnaXN0ZXJNaXhpbiIsICJuYW1lUmVnaXN0cnlGIiwgImNhcHR1cmVEaXNwb3NlciIsICJyZWNvbmNpbGVUcmVlU29vbiIsICJhZGRSb290IiwgImhhbmRsZVJvb3RSZWNvcmRzIiwgInJlY29yZHMiLCAicmVjb3JkIiwgImRpc3Bvc2VycyIsICJwb2x5ZmlsbFN0YXRlIiwgInJlbW92ZVJvb3QiLCAid2F0Y2giLCAiZGlzcG9zZSIsICJET01NaXhpbiIsICJfZWxlbWVudCIsICJfc2VsZiIsICJfcmVsYXRlZCIsICJpc1N1cHBvcnRlZCIsICJpc1BvbHlmaWxsZWQiLCAiYXBwbHkiLCAicnVudGltZSIsICJpbnN0YWxsQXR0cmlidXRlUG9seWZpbGwiLCAiZ2V0Q3VzdG9tQXR0cmlidXRlcyIsICJjcmVhdGVDdXN0b21BdHRyaWJ1dGVSZWdpc3RyeSIsICJnZXRDdXN0b21BdHRyaWJ1dGVCYXNlIiwgImNyZWF0ZUN1c3RvbUF0dHJpYnV0ZSIsICJkb2MiLCAiTmF0aXZlQXR0ciIsICJkb2NQcm90byIsICJlbFByb3RvIiwgIm5hdGl2ZUNyZWF0ZUF0dHJpYnV0ZSIsICJuYXRpdmVDcmVhdGVBdHRyaWJ1dGVOUyIsICJuYXRpdmVDcmVhdGVFbGVtZW50IiwgIm5hdGl2ZUNyZWF0ZUVsZW1lbnROUyIsICJuYXRpdmVJbXBvcnROb2RlIiwgIm5hdGl2ZUF0dGFjaFNoYWRvdyIsICJhdHRyaWJ1dGVEZXNjcmlwdG9yIiwgIm5hdGl2ZUF0dHJpYnV0ZXMiLCAiQUxSRUFEWSIsICJjYWxsYmFja05hbWVzIiwgImludGVybmFscyIsICJyZWdpc3RyaWVzIiwgInJlZ2lzdHJ5RG9jdW1lbnRzIiwgInRyYWNrZWQiLCAiYXR0cmlidXRlTWFwcyIsICJvYnNlcnZlZFJvb3RzIiwgImxvY2FsT2JzZXJ2ZXJzIiwgImNvbnN0cnVjdGluZ0dsb2JhbCIsICJnbG9iYWxSZWdpc3RyeSIsICJyZWdpc3RyeSIsICJub2RlRG9jdW1lbnQiLCAic2V0UmVnaXN0cnkiLCAiZ2xvYmFsT2YiLCAiZXhjbHVzaXZlRnJhZ21lbnQiLCAicmVnaXN0cnlPZiIsICJhZG9wdGVkIiwgImxvb2t1cCIsICJuYW1lc3BhY2UiLCAicmVnaXN0cnlPcHRpb24iLCAibnVsbGFibGUiLCAiY2hlY2tSZWdpc3RyeSIsICJpbnZva2UiLCAiZGVmaW5pdGlvbiIsICJjb25uZWN0IiwgImRpc2Nvbm5lY3QiLCAiYWRvcHQiLCAidHJhY2siLCAibG9jYWwiLCAicHJvY2Vzc1JlY29yZHMiLCAidW50cmFjayIsICJydW5Db25zdHJ1Y3RvciIsICJDIiwgInByZXZpb3VzIiwgImNvbnN0cnVjdCIsICJvd25lckRvY3VtZW50IiwgImxvY2FsTmFtZSIsICJuYW1lc3BhY2VVUkkiLCAicHJlZml4IiwgInVwZ3JhZGUiLCAidHJ5VXBncmFkZSIsICJCYXRjaCIsICJpbmRleCIsICJieU5hbWUiLCAiaXRlbSIsICJsYXRlciIsICJvYnNlcnZlUm9vdCIsICJvbGRWYWx1ZSIsICJmbHVzaCIsICJSZWdpc3RyeSIsICJjb25zdHJ1Y3RvciIsICJzdGF0ZSIsICJwcm90b3R5cGUiLCAicmVzb2x2ZSIsICJwcm9taXNlIiwgImlzRG9jdW1lbnQiLCAiQXR0cmlidXRlIiwgImRlZXAiLCAiY29weSIsICJnbG9iYWwiLCAic291cmNlcyIsICJjaG9zZW4iLCAiaW5pdCIsICJkeW5hbWljIiwgIm5hdGl2ZSIsICJjb25uZWN0ZWRCZWZvcmUiLCAiY2hlY2tBdHRhY2hhYmxlIiwgImF0dGFjaGVkIiwgIm1hcFByb3RvIiwgImJyaWRnZXMiLCAibWl4aW5Ub0N1c3RvbUF0dHJpYnV0ZSIsICJhdHRyaWJ1dGVOYW1lIiwgImNhY2hlIiwgIkJhc2UiLCAib3duZXJzIiwgIm93bmVyIiwgInByZXZpb3VzT3duZXIiLCAiTWl4aW5BdHRyaWJ1dGUiLCAibmV3VmFsdWUiLCAiX29sZERvY3VtZW50IiwgIl9uZXdEb2N1bWVudCIsICJyZWdpc3RlckNyb3NzTWl4aW4iLCAiY3VzdG9tQXR0cmlidXRlVG9NaXhpbiIsICJyZWYiLCAibmFtZWQiLCAibWVyZ2VNaXhpbnMiLCAicGFydHMiLCAicGFydCIsICJsZWFzZXMiLCAibWVyZ2VkIiwgImxlYXNlIiwgInJlbGF0ZWQiLCAiZmx1c2hNaXhpbnMiLCAic2V0dGxlTWl4aW5zIiwgImhhbmRsZUhpZGRlbiIsICJfIiwgInZpc2libGUiLCAiJHJlZiIsICJpc1Zpc2libGUiLCAiaGFuZGxlUHJvcGVydHkiLCAicHJvcCIsICJ2YWwiLCAiaGFuZGxlRGF0YXNldCIsICJkYXRhc2V0UmVmIiwgImRlbGV0ZVN0eWxlUHJvcGVydHkiLCAiaGFuZGxlU3R5bGVDaGFuZ2UiLCAic3R5bGVSZWYiLCAiaGFuZGxlQXR0cmlidXRlIiwgImp1bmN0aW9uVG9Cb3giLCAiSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyIsICJKVU5DVElPTl9EUkFHX0VWRU5UUyIsICJKVU5DVElPTl9SRVNJWkVfRVZFTlRTIiwgIm1peGluRGlzcG9zZXJzU3ltYm9sIiwgIm1peGluRGlzcG9zZXJzIiwgInB1c2hEaXNwb3NhYmxlIiwgIm1peGluTmFtZSIsICJydW5EaXNwb3NlcnMiLCAicGFyc2VQeFZhciIsICJxdWVyeUhhbmRsZSIsICJhdHRyIiwgImZvdW5kIiwgIkp1bmN0aW9uU2VsZWN0TWl4aW4iLCAid0VsIiwgIm92ZXJsYXkiLCAibG9jYWxQb2ludCIsICJhcHBseU92ZXJsYXkiLCAib25Eb3duIiwgIm9uTW92ZSIsICJlbmQiLCAib25VcCIsICJvbkNhbmNlbCIsICJKdW5jdGlvbkRyYWdNaXhpbiIsICJwcmV2aW91c1RyYW5zZm9ybSIsICJoYW5kbGUiLCAiZHJhZ2dpbmciLCAic3RhcnRYIiwgInN0YXJ0WSIsICJiYXNlWCIsICJiYXNlWSIsICJkeCIsICJkeSIsICJueCIsICJueSIsICJKdW5jdGlvblJlc2l6ZU1peGluIiwgInJlc2l6aW5nIiwgInN4IiwgInN5IiwgIm1pblciLCAibWluSCIsICJudyIsICJuaCJdCn0K

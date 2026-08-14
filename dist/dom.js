import { $avoidTrigger as me, camelToKebab as z, cvt_cs_to_os as $t, hasValue as C, isArrayOrIterable as zn, isVal as Tn, isValueUnit as kn, kebabToCamel as nn, normalizeGridLayout as Pn, normalizePrimitive as Vt, resolveLocalPointToGridCell as Nn, tryStringAsNumber as Y } from "@fest-lib/core";
var Rn = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Ot = globalThis[Rn] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Ot.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      Ot.add(t);
    }
});
var fa = () => {
}, Wn = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, pa = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, Fn = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), qt = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(Fn()), 0), $n = (e) => e?.offsetParent ?? e?.host, ha = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = $n(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && t.push(n);
  }
  return t;
}, ma = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, On = () => {
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
}, va = (e = On()) => (t) => e.shedule(t), ga = typeof document < "u" ? document?.documentElement : null, ya = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, r]) => {
      const i = e.getAttribute(n);
      r == null ? e.removeAttribute(n) : r != i && e.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, ba = (e, t = {}) => Array.from(Object.entries(t)).map(([n, r]) => {
  r == null ? e.removeAttribute(n) : e.setAttribute(n, r ?? e.getAttribute(n));
}), qn = /* @__PURE__ */ new Map(), xa = (e, t = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return qt(async () => {
    if (!(!e || typeof e != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((i) => setTimeout(i, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => qt(i, t)), new Promise((i) => setTimeout(i, t))]);
      r.cancel = () => {
      };
    }
  }, { timeout: t }), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    qn.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Te = /* @__PURE__ */ Symbol("@border-box-width"), ke = /* @__PURE__ */ Symbol("@border-box-height"), Pe = /* @__PURE__ */ Symbol("@content-box-width"), Ne = /* @__PURE__ */ Symbol("@content-box-height"), Ht = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), wa = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !It.has(e)) {
    e[Pe] = e.clientWidth, e[Ne] = e.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const s = i.contentBoxSize[0];
        s && (e[Pe] = Math.min(s.inlineSize, e.clientWidth), e[Ne] = Math.min(s.blockSize, e.clientHeight), t?.(e));
      }
    });
    It.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, Sa = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Ht.has(e)) {
    e[Te] = e.offsetWidth, e[ke] = e.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const s = i.borderBoxSize[0];
        s && (e[Te] = Math.min(s.inlineSize, e.offsetWidth), e[ke] = Math.min(s.blockSize, e.offsetHeight), t?.(e));
      }
    });
    Ht.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, Ea = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), Ma = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, Ca = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, ja = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, Aa = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, Va = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", La = `^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, za = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), r, i = ""; e && (r = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, Ta = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, ka = (e, t) => e.querySelector(t) ?? (e.matches(t) ? e : null), Ye = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, rn = {};
function S(e, t, n, r = rn) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function Bt(e, t, n, r = rn) {
  e?.removeEventListener?.(t, n, r);
}
var Re = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? S(e, n, ...r) : S(e, n, r))), Pa = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([r, i]) => ((zn(i) ? [...i] : i) ?? [])?.map?.((s) => S(e, r, s)));
  }
}, Na = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? Bt(e, n, ...r) : Bt(e, n, r))), Ra = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, Wa = (e, t, n) => {
  if (t == null || !(t instanceof Node) && t?.element == null) return !1;
  if (e == t || (e?.element ?? e) == (t?.element ?? t)) return !0;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const r = n.composedPath(), i = e?.element ?? e, s = t?.element ?? t;
    if (r.includes(i) && r.includes(s)) {
      const o = r.indexOf(i), a = r.indexOf(s);
      if (a >= 0 && o >= 0 && a < o) return !0;
    }
  }
  return !!(e?.contains?.(t?.element ?? t) || e?.getRootNode({ composed: !0 })?.host == (t?.element ?? t));
}, ht = (e, t, n) => {
  if (n?.composedPath && typeof n.composedPath == "function") {
    const a = n.composedPath();
    for (const d of a) if ((d instanceof HTMLElement || d instanceof Element) && d.matches?.(t))
      return d;
  }
  const r = e?.matches?.(t) ? e : null, i = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host, s = i?.matches?.(t) ? i : null, o = e?.closest?.(t) ?? r?.closest?.(t) ?? s?.closest?.(t) ?? null;
  return r ?? o ?? s;
}, Fa = (e, t) => !!ht(e, t), $a = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === e || Ye(r, e), s = e.matches(":hover");
  if (!i && !s && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!ht(e, t);
      {
        const o = i ? r : e.querySelector(":hover") || e, a = !!ht(o, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || a;
      }
    } else if (t instanceof HTMLElement)
      return n === "parent" ? Ye(e, t) || !1 : Ye(t, e) || !1;
  }
  return !0;
}, Oa = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, Hn = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), In = globalThis[Hn] ??= /* @__PURE__ */ new WeakMap(), Bn = (e = document.documentElement) => In.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), qa = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), Ha = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : Bn(e)) || 1, mt = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, G = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, Ia = (e, t = null) => {
  const n = mt(e) || 1, r = e?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, s = t ?? (G(e) || 0), o = typeof window < "u" ? window.visualViewport : null, a = [((o?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((o?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [d, c] = $t([i.left, i.top], a, s), [p, h] = $t([i.right, i.bottom], a, s), [l, u] = s == 0 || s == 3 ? [d, p] : [p, d], [f, m] = s == 0 || s == 1 ? [c, h] : [h, c], [w, Ln] = s % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: l,
    top: f,
    right: u,
    bottom: m,
    width: w,
    height: Ln
  };
}, Ba = (e, t = null) => (t ?? G(e)) % 2 ? e[ke] ?? e?.clientHeight : e[Te] ?? e?.clientWidth, _a = (e, t = null) => (t ?? G(e)) % 2 ? e[Te] ?? e?.clientWidth : e[ke] ?? e?.clientHeight, Da = (e, t = null) => (t ?? G(e)) % 2 ? e[Ne] ?? e?.clientHeight : e[Pe] ?? e?.clientWidth, Ua = (e, t = null) => (t ?? G(e)) % 2 ? e[Pe] ?? e?.clientWidth : e[Ne] ?? e?.clientHeight, _n = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), an = () => {
  const e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, n = t ? {
    "--vv-width": `${t.width}px`,
    "--vv-height": `${t.height}px`,
    "--vv-offset-left": `${t.offsetLeft}px`,
    "--vv-offset-top": `${t.offsetTop}px`,
    "--vv-scale": String(t.scale ?? 1)
  } : {
    "--vv-width": typeof window < "u" ? `${window.innerWidth}px` : "0px",
    "--vv-height": typeof window < "u" ? `${window.innerHeight}px` : "0px",
    "--vv-offset-left": "0px",
    "--vv-offset-top": "0px",
    "--vv-scale": "1"
  };
  if (typeof screen < "u") {
    const r = screen?.availWidth + "px", i = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? i : r,
      "--avail-height": e ? r : i,
      "--view-height": Math.min(screen?.availHeight, window?.innerHeight) + "px",
      "--pixel-ratio": String(devicePixelRatio || 1),
      ...n
    };
  }
  return {
    "--screen-width": "0px",
    "--screen-height": "0px",
    "--avail-width": "0px",
    "--avail-height": "0px",
    "--view-height": "0px",
    "--pixel-ratio": "1",
    ...n
  };
}, vt = an(), Za = [[":root, :host, :scope", vt]], Dn = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, Un = (e) => {
  const t = document.documentElement;
  Object.assign(vt, an()), Object.entries(vt).forEach(([n, r]) => {
    const i = t?.style?.getPropertyValue(n);
    (!i || i != r) && t?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, Zn = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, Ge = { passive: !0 }, Xn = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      Un(), e(), t = !1;
    }), t = !0);
  }, r = [];
  return r.push(S(navigator?.virtualKeyboard, "geometrychange", n, Ge)), r.push(S(window?.visualViewport, "scroll", n, Ge)), r.push(S(window?.visualViewport, "resize", n, Ge)), r.push(S(screen?.orientation, "change", n)), r.push(S(window, "resize", n)), r.push(S(document?.documentElement, "fullscreenchange", n)), r.push(S(document, "DOMContentLoaded", n)), r.push(S(matchMedia("(orientation: portrait)"), "change", n)), r.push(S(matchMedia("(orientation: landscape)"), "change", n)), n(), _n(() => n(), 100), () => r.forEach((i) => i());
}, Xa = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), Xn(() => {
      const t = Dn?.[Zn()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
}, _ = new OffscreenCanvas(1, 1).getContext("2d"), on = (e, t) => {
  const n = getComputedStyle(e, "");
  if (t && n) {
    const r = n.getPropertyValue("font-weight") || "normal", i = n.getPropertyValue("font-size") || "16px", s = n.getPropertyValue("font-family") || "Times New Roman", o = n.getPropertyValue("font-stretch") || "normal";
    try {
      t.fontStretch = o.includes("%") ? "normal" : o;
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
      t.font = `${r} ${i} ${s}`;
    } catch {
    }
  }
}, Yn = (e, t) => {
  if (_) {
    on(t, _);
    try {
      return _.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, Ya = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return Yn(t, e);
}, Gn = (e, t) => {
  const n = e?.value || "";
  if (_) {
    on(e, _);
    let r = 0;
    for (let i = 0; i < n.length; i++) {
      if (r = _.measureText(n.slice(0, i))?.width, r == null) return n.length;
      if (r != null && r >= t[0]) return Math.max(i - 1, 0);
    }
  }
  return n.length;
}, Ga = (e, t) => {
  const n = e.getBoundingClientRect(), r = [t[0] - n.left / mt(), t[1] - n.top / mt()];
  return Gn(e, r);
}, Jn = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = Pn(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, Ja = (e, t, n, r = "floor") => {
  if (!e) return [0, 0];
  const i = e.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const s = Jn(e, n?.layout), o = G(e), a = globalThis.getComputedStyle?.(e), d = parseFloat(a?.paddingLeft) || 0, c = parseFloat(a?.paddingTop) || 0, p = parseFloat(a?.paddingRight) || 0, h = parseFloat(a?.paddingBottom) || 0, l = Math.max(1, (i.width || e.clientWidth || 1) - d - p), u = Math.max(1, (i.height || e.clientHeight || 1) - c - h), f = [(t?.[0] || 0) - i.left - d, (t?.[1] || 0) - i.top - c];
  return Nn(f, [l, u], s, o, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, Kn = async (e) => {
  const t = () => {
    e?.hasAttribute?.("data-hidden") || (e?.removeAttribute?.("data-opacity-animation"), e?.dispatchEvent?.(new CustomEvent("u2-appear", {
      detail: {},
      bubbles: !0,
      cancelable: !0
    })));
  };
  if (!e?.hasAttribute?.("data-hidden") && e?.dispatchEvent?.(new CustomEvent("u2-before-show", {
    detail: {},
    bubbles: !0,
    cancelable: !0
  })))
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches && !e.hasAttribute("data-opacity-animation") && !e.hasAttribute("data-instant") && e?.getAttribute?.("data-hidden") == null && e.setAttribute("data-opacity-animation", ""), e.hasAttribute("data-opacity-animation") && e?.getAttribute?.("data-hidden") == null) {
      const n = e.animate([
        {
          easing: "linear",
          offset: 0,
          "--opacity": 0,
          "--scale": 0.8,
          display: "none",
          pointerEvents: "none"
        },
        {
          easing: "linear",
          offset: 0.01,
          "--opacity": 0,
          "--scale": 0.8,
          display: "none",
          pointerEvents: "none"
        },
        {
          easing: "linear",
          offset: 1,
          "--opacity": 1,
          "--scale": 1,
          display: "revert-layer",
          pointerEvents: "revert-layer"
        }
      ], {
        duration: Wn() ? 100 : 80,
        easing: "linear",
        delay: 0
      });
      let r = !1;
      const i = () => {
        r || (r = !0, s?.forEach?.((o) => o?.()), n.currentTime = 1, n.finish(), t?.());
      }, s = Re(e, {
        "u2-before-hide": [i, {
          once: !0,
          passive: !0
        }],
        "u2-before-show": [i, {
          once: !0,
          passive: !0
        }]
      });
      await n.finished, i?.();
    } else {
      const { resolve: n, reject: r, promise: i } = Promise.withResolvers(), s = requestAnimationFrame(n);
      let o = !1;
      const a = () => {
        o || (o = !0, d?.forEach?.((c) => c?.()), cancelAnimationFrame(s), n(performance.now()), t?.());
      }, d = Re(e, {
        "u2-before-hide": [a, {
          once: !0,
          passive: !0
        }],
        "u2-before-show": [a, {
          once: !0,
          passive: !0
        }]
      });
      await i, a?.();
    }
}, Qn = async (e) => {
  const t = () => {
    e?.hasAttribute?.("data-hidden") && (e?.removeAttribute?.("data-opacity-animation"), e?.dispatchEvent?.(new CustomEvent("u2-hidden", {
      detail: {},
      bubbles: !0,
      cancelable: !0
    })));
  };
  if (e?.hasAttribute?.("data-hidden") && e?.dispatchEvent?.(new CustomEvent("u2-before-hide", {
    detail: {},
    bubbles: !0,
    cancelable: !0
  })))
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches && !e.hasAttribute("data-opacity-animation") && !e.hasAttribute("data-instant") && e.setAttribute("data-opacity-animation", ""), e.hasAttribute("data-opacity-animation")) {
      const n = e.animate([
        {
          easing: "linear",
          offset: 0,
          pointerEvents: "none"
        },
        {
          easing: "linear",
          offset: 0.99,
          "--opacity": 0,
          "--scale": 0.8,
          pointerEvents: "none"
        },
        {
          easing: "linear",
          offset: 1,
          "--opacity": 0,
          "--scale": 0.8,
          display: "none",
          pointerEvents: "none"
        }
      ], {
        duration: 120,
        easing: "linear",
        delay: 0
      });
      let r = !1;
      const i = () => {
        r || (r = !0, s?.forEach?.((o) => o?.()), n.currentTime = 1, n.finish(), t?.());
      }, s = Re(e, { "u2-before-show": [i, {
        once: !0,
        passive: !0
      }] });
      await n.finished, i?.();
    } else {
      const { resolve: n, reject: r, promise: i } = Promise.withResolvers(), s = requestAnimationFrame(n);
      let o = !1;
      const a = () => {
        o || (o = !0, d?.forEach?.((c) => c?.()), cancelAnimationFrame(s), n(performance.now()), t?.());
      }, d = Re(e, {
        "u2-before-hide": [a, {
          once: !0,
          passive: !0
        }],
        "u2-before-show": [a, {
          once: !0,
          passive: !0
        }]
      });
      await i, a?.();
    }
}, er = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), K = globalThis[er] ??= /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), Q = globalThis[tr] ??= /* @__PURE__ */ new WeakMap(), ve = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Ka = (e, t) => {
  if (!Q.has(e = ve(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const s of i) if (s.contentBoxSize) {
        const o = s.contentBoxSize[0];
        o && n.forEach((a) => a?.(o, r));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, r), Q.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "content-box" });
  }
  return Q.get(e)?.push?.(t), { disconnect: () => Q.get(e)?.splice?.(Q.get(e)?.indexOf(t) || -1, 1) };
}, Qa = (e, t) => {
  if (!K.has(e = ve(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const s of i) if (s.borderBoxSize) {
        const o = s.borderBoxSize[0];
        o && n.forEach((a) => a?.(o, r));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, r), K.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "border-box" });
  }
  return K.get(e)?.push?.(t), { disconnect: () => K.get(e)?.splice?.(K.get(e)?.indexOf(t) || -1, 1) };
}, eo = (e, t, n) => {
  if (typeof e?.selector == "string") return Lt(e, e?.selector, t, n);
  const r = new Set((t.split(",") || [t]).map((s) => s.trim())), i = new MutationObserver((s, o) => {
    for (const a of s) a.attributeName && r.has(a.attributeName) && n(a, o);
  });
  return (e?.element ?? e) instanceof Node && i.observe(e = ve(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((s) => n({
    target: e,
    type: "attributes",
    attributeName: s,
    oldValue: e?.getAttribute?.(s)
  }, i)), i;
}, Lt = (e, t, n, r) => {
  const i = new Set([...n.split(",") || [n]].map((o) => o.trim())), s = new MutationObserver((o, a) => {
    for (const d of o) if (d.type == "childList") {
      const c = Array.from(d.addedNodes) || [], p = Array.from(d.removedNodes) || [];
      c.push(...Array.from(d.addedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), p.push(...Array.from(d.removedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...new Set(c)].filter((h) => h?.matches?.(t))?.map?.((h) => {
        i.forEach((l) => {
          r({
            target: h,
            type: "attributes",
            attributeName: l,
            oldValue: h?.getAttribute?.(l)
          }, a);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && i.has(d.attributeName) && r(d, a);
  });
  return s.observe(e = ve(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...i],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((o) => i.forEach((a) => r({
    target: o,
    type: "attributes",
    attributeName: a,
    oldValue: o?.getAttribute?.(a)
  }, s))), s;
}, nr = (e, t = "*", n = (r, i) => {
}) => {
  const r = (l) => {
    const u = Array.from(l || []) || [];
    return u.push(...Array.from(l || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...Array.from(new Set(u).values())].filter((f) => f?.matches?.(t));
  };
  let i = null;
  const s = (l) => {
    const u = i?.deref?.(), f = r(l.addedNodes), m = r(l.removedNodes);
    (f.length > 0 || m.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: f,
      removedNodes: m
    }, u);
  }, o = (l) => {
    s({
      addedNodes: [l?.target].filter((u) => !!u),
      removedNodes: [l?.relatedTarget].filter((u) => !!u),
      type: "childList",
      target: l?.currentTarget
    });
  }, a = (l) => {
    s({
      addedNodes: [l?.relatedTarget].filter((u) => !!u),
      removedNodes: [l?.target].filter((u) => !!u),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    s({
      addedNodes: [l?.target].filter((u) => !!u),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((u) => !!u),
      type: "childList",
      target: l?.currentTarget
    });
  }, c = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active"))
    return e.addEventListener("pointerover", o, c), e.addEventListener("pointerout", a, c), e.addEventListener("pointerdown", o, c), e.addEventListener("pointerup", a, c), e.addEventListener("pointercancel", a, c), { disconnect: () => {
      e.removeEventListener("pointerover", o, c), e.removeEventListener("pointerout", a, c), e.removeEventListener("pointerdown", o, c), e.removeEventListener("pointerup", a, c), e.removeEventListener("pointercancel", a, c);
    } };
  if (t?.includes?.(":hover"))
    return e.addEventListener("pointerover", o, c), e.addEventListener("pointerout", a, c), { disconnect: () => {
      e.removeEventListener("pointerover", o, c), e.removeEventListener("pointerout", a, c);
    } };
  if (t?.includes?.(":active"))
    return e.addEventListener("pointerdown", o, c), e.addEventListener("pointerup", a, c), e.addEventListener("pointercancel", a, c), { disconnect: () => {
      e.removeEventListener("pointerdown", o, c), e.removeEventListener("pointerup", a, c), e.removeEventListener("pointercancel", a, c);
    } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", o, c), e.addEventListener("focusout", a, c), e.addEventListener("click", d, c), { disconnect: () => {
      e.removeEventListener("focusin", o, c), e.removeEventListener("focusout", a, c), e.removeEventListener("click", d, c);
    } };
  const p = new MutationObserver((l, u) => {
    for (const f of l) f.type == "childList" && s(f);
  });
  i = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = ve(e), {
    childList: !0,
    subtree: !0
  });
  const h = Array.from(e.querySelectorAll(t));
  return h.length > 0 && n?.({
    addedNodes: h,
    removedNodes: []
  }, p), p;
}, to = async (e = document.body) => {
  Lt(e, "*", "data-hidden", (t, n) => {
    if (t.attributeName == "data-hidden") {
      const r = t.target;
      r.getAttribute("data-hidden") !== t.oldValue && Promise?.try?.(r.getAttribute("data-hidden") != null ? Qn : Kn, r, n)?.catch?.(console.warn.bind(console));
    }
  });
}, no = (e = 100, t = 0.05, n = 8) => {
  const r = [];
  for (let a = 0; a < e; a++) r.push(a / e);
  const i = (a) => `calc(${a}rad * pi * 2)`, s = (a) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(a)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, o = (a) => [`calc(calc(0.5 + calc(cos(${i(a)}) * calc(0.5 - ${s(a)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(a)}) * calc(0.5 - ${s(a)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((a) => o(a).join(" ")).join(", ")})`
  };
}, sn = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", _t = (e) => typeof e == "string" && /@import\b/i.test(e), zt = "DOM", ue = typeof document < "u" ? document.createElement("style") : null;
ue && (typeof document < "u" && document.querySelector("head")?.appendChild?.(ue), ue.dataset.owner = zt);
var Dt = (e, t, n = "") => {
  e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${n && typeof n == "string" ? `layer(${n})` : ""};` : t;
}, ro = (e) => e?.map?.((t) => pr(...t)), rr = (e, t) => {
  t ||= ue?.sheet;
  let n = Array.from(t?.cssRules || []).findIndex((i) => i instanceof CSSLayerBlockRule && i?.name === e), r;
  return n === -1 && t ? r = t?.cssRules?.[n = t.insertRule(`@layer ${e} {}`)] : r = t?.cssRules?.[n], r;
}, ir = 0, Je = (e) => typeof ShadowRoot < "u" && e instanceof ShadowRoot, Ut = (e) => typeof Document < "u" && e instanceof Document, ar = (e) => typeof Element < "u" && e instanceof Element, Zt = (e) => typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : Array.from(e).map((t) => `\\${t.codePointAt(0).toString(16)} `).join(""), or = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `ux-${Date.now().toString(36)}-${(++ir).toString(36)}`, sr = (e, t) => (t = t.trim(), e ? t ? t.startsWith("::") ? `${e}${t}` : `${e} ${t}` : e : t), ur = (e, t, n, r) => {
  const i = Array.from(e?.cssRules || []), s = t.trim(), o = r.trim();
  return i.findIndex((a) => {
    if (!(a instanceof CSSStyleRule)) return !1;
    const d = a.selectorText?.trim?.() ?? "";
    return d === s ? !0 : o && d.endsWith(o) ? d.slice(0, d.length - o.length).trim() === n : !1;
  });
}, Tt = (e, t, n = "ux-query", r = null) => {
  const i = Je(r) || Ut(r) ? r : r?.getRootNode?.() ?? (typeof document < "u" ? document : null), s = ar(r) ? r : null;
  let o = "";
  if (s?.id) o = `#${Zt(s.id)}`;
  else if (s) {
    let p = s.getAttribute("data-style-id");
    p || (p = or(), s.setAttribute("data-style-id", p)), o = `[data-style-id="${Zt(p)}"]`;
  } else Je(i) ? o = ":host" : Ut(i) && (o = ":root");
  let a = null;
  if (Je(i) ? (a = i.querySelector("style[data-ux-query]"), !a && typeof document < "u" && (a = document.createElement("style"), a.setAttribute("data-ux-query", ""), i.appendChild(a))) : a = lr(), t ||= a?.sheet, !t) return;
  if (n) return Tt(e, rr(n, t), null, r);
  const d = sr(o, e);
  let c = ur(t, d, o, e);
  return c === -1 && (c = t.insertRule(`${d} {}`)), t.cssRules?.[c];
};
function lr() {
  return ue ?? null;
}
var _e = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", D = (e) => _e && e instanceof CSSStyleValue, W = (e) => _e && e instanceof CSSUnitValue, A = (e, t, n, r = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, r);
  }
}, cr = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = z(t), s = e.style, o = e.attributeStyleMap ?? e.styleMap;
  if (!_e || !o) return un(e, t, n, r);
  let a = C(n) && !(D(n) || W(n)) ? n?.value : n;
  if (a == null)
    return o.delete?.(i), s && A(s, i, null, r), e;
  if (D(a)) {
    const d = o.get(i);
    if (W(a) && W(d)) {
      if (d.value === a.value && d.unit === a.unit) return e;
    } else if (d === a) return e;
    return o.set(i, a), e;
  }
  if (typeof a == "number")
    if (CSS?.number && !i.startsWith("--")) {
      const d = CSS.number(a), c = o.get(i);
      return W(c) && c.value === d.value && c.unit === d.unit || o.set(i, d), e;
    } else
      return A(s, i, String(a), r), e;
  if (typeof a == "string" && !D(a)) {
    const d = Y(a);
    if (typeof d == "number" && CSS?.number && !i.startsWith("--")) {
      const c = CSS.number(d), p = o.get(i);
      return W(p) && p.value === c.value && p.unit === c.unit || o.set(i, c), e;
    } else
      return A(s, i, a, r), e;
  }
  return A(s, i, String(a), r), e;
}, un = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = z(t), s = e.style;
  if (!s) return e;
  let o = C(n) && !(D(n) || W(n)) ? n?.value : n;
  return typeof o == "string" && !D(o) && (o = Y(o) ?? o), o == null ? (A(s, i, null, r), e) : (D(o) || typeof o == "number", A(s, i, String(o), r), e);
}, ln = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), ee = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new Map(), dr = (e) => {
  if (!e) return null;
  if (T.has(e)) return T.get(e);
  if (e instanceof Blob || e instanceof File) {
    if (ee.has(e)) return ee.get(e);
    const t = URL.createObjectURL(e);
    return ee.set(e, t), T.set(t, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const r = await n.blob(), i = URL.createObjectURL(r);
      return ee.set(r, i), T.set(e, i), T.set(i, i), i;
    });
    return T.set(e, t), t;
  }
  if (typeof e == "string") {
    const t = new Blob([e], { type: "text/css" }), n = URL.createObjectURL(t);
    return ee.set(t, n), T.set(n, n), n;
  }
  return e;
}, te = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new WeakMap(), fr = (e) => {
  if (!e) return "";
  if (te.has(e)) return te.get(e) ?? "";
  if (e instanceof Blob || e instanceof File) {
    if (ge.has(e)) return ge.get(e) ?? "";
    const t = e?.text?.()?.then?.((n) => (ge.set(e, n), n));
    return ge.set(e, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const r = await n.text();
      return te.set(e, r), r;
    });
    return te.set(e, t), t;
  }
  return typeof e == "string" && te.set(e, e), e;
}, Xt = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new WeakMap(), io = (e, t = "ux-query", n = null) => {
  if (!e || !sn()) return null;
  const r = n instanceof ShadowRoot ? n : n?.getRootNode ? n.getRootNode({ composed: !0 }) : null, i = r instanceof ShadowRoot, s = i ? r.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
  if (!s) return null;
  const o = `${t || ""}:${e}`;
  let a;
  if (i) {
    let p = Yt.get(r);
    p || (p = /* @__PURE__ */ new Map(), Yt.set(r, p)), a = p.get(o), a || (a = new CSSStyleSheet(), p.set(o, a), s.includes(a) || s.push(a));
  } else
    a = Xt.get(o), a || (a = new CSSStyleSheet(), Xt.set(o, a), s.includes(a) || s.push(a));
  if (t) {
    let p;
    if (i) {
      let h = ye.get(r);
      h || (h = /* @__PURE__ */ new Map(), ye.set(r, h)), p = h.get(t);
    } else p = Gt.get(t);
    if (!p) {
      const h = Array.from(a.cssRules || []), l = h.findIndex((u) => u instanceof CSSLayerBlockRule && u.name === t);
      if (l === -1) try {
        a.insertRule(`@layer ${t} {}`, a.cssRules.length);
        const u = a.cssRules[a.cssRules.length - 1];
        u instanceof CSSLayerBlockRule && (p = u);
      } catch {
        p = void 0;
      }
      else p = h[l];
      if (p)
        if (i) {
          let u = ye.get(r);
          u || (u = /* @__PURE__ */ new Map(), ye.set(r, u)), u.set(t, p);
        } else Gt.set(t, p);
    }
    if (p) {
      let h = Array.from(p.cssRules || []).findIndex((l) => l instanceof CSSStyleRule && l.selectorText?.trim?.() === e?.trim?.());
      if (h === -1) try {
        h = p.insertRule(`${e} {}`, p.cssRules.length);
      } catch {
        return null;
      }
      return p.cssRules[h];
    }
  }
  let d = Array.from(a.cssRules || []).findIndex((p) => p instanceof CSSStyleRule && p.selectorText?.trim?.() === e?.trim?.());
  if (d === -1) try {
    d = a.insertRule(`${e} {}`, a.cssRules.length);
  } catch {
    return null;
  }
  const c = a.cssRules[d];
  return c instanceof CSSStyleRule ? c : null;
}, De = (e, t, n, r = "") => _e ? cr(e, t, n, r) : un(e, t, n, r), ao = (e, t, n) => De(Tt(e), t, n), pr = (e, t) => {
  const n = Tt(e);
  return Object.entries(t).forEach(([r, i]) => De(n, r, i)), n;
}, oo = async (e) => {
  const t = await crypto?.subtle?.digest("SHA-256", typeof e == "string" ? new TextEncoder().encode(e) : e instanceof ArrayBuffer ? e : await e?.arrayBuffer?.());
  return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
}, cn = (e, t, n = "", r) => {
  const i = dr(e), s = typeof e == "string" && URL.canParse(e) ? e : i;
  return t?.[0] && (t[0].fetchPriority = "high"), t && s && typeof s == "string" && Dt(t, s, n), t?.[0] && (!URL.canParse(e) || r) && t?.[0] instanceof HTMLLinkElement, ln(i, (o) => {
    t?.[0] && o && (Dt(t, o, n), t?.[0].setAttribute("loaded", ""));
  })?.catch?.((o) => {
    console.warn("Failed to load style sheet:", o);
  });
}, hr = (e) => {
  const t = typeof document < "u" ? document.createElement("link") : null;
  return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
    rel: "stylesheet",
    type: "text/css",
    crossOrigin: "same-origin"
  }), t.dataset.owner = zt, cn(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, ne = (e, t = typeof document < "u" ? document?.head : null, n = "") => {
  const r = t?.querySelector?.("head") ?? t;
  if (typeof HTMLHeadElement < "u" && r instanceof HTMLHeadElement) return hr(e);
  const i = typeof document < "u" ? document.createElement("style") : null;
  return i ? (i.dataset.owner = zt, cn(e, [i, "innerHTML"], n), r?.prepend?.(i), i) : null;
}, so = (e, t, n, r = "") => De(e, t, n, r), uo = (e) => mr(e, ""), j = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new WeakMap(), Jt = (e, t) => {
  if (!e || !t) return !1;
  try {
    return e.replaceSync(t), !0;
  } catch (n) {
    const r = String(n?.message || "").toLowerCase();
    return r.includes("@import rules are not allowed") || r.includes("@import") && r.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", n), !1;
  }
}, mr = (e, t = null) => {
  if (!sn())
    return typeof e == "string" && ne(e, void 0, t || ""), null;
  if (typeof e == "string" && _t(e))
    return ne(e, void 0, t || ""), null;
  if (typeof e == "string" && j?.has?.(e)) {
    const r = j.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(r) && document.adoptedStyleSheets.push(r), r;
  }
  if ((e instanceof Blob || e instanceof File) && re?.has?.(e)) {
    const r = re.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(r) && document.adoptedStyleSheets.push(r), r;
  }
  if (!e) return null;
  const n = typeof e == "string" ? j.getOrInsertComputed(e, (r) => new CSSStyleSheet()) : re.getOrInsertComputed(e, (r) => new CSSStyleSheet());
  if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), typeof e == "string" && !URL.canParse(e)) {
    const r = t ? `@layer ${t} { ${e} }` : e;
    return j.set(e, n), Jt(n, r) || (Ke(n), j.delete(e), ne(e)), n;
  } else ln(fr(e), (r) => {
    if (j.set(r, n), r) {
      if (_t(r))
        return Ke(n), j.delete(r), re.delete(e), ne(r, void 0, t || ""), n;
      const i = t ? `@layer ${t} { ${r} }` : r;
      return Jt(n, i) || (Ke(n), j.delete(r), re.delete(e), ne(r, void 0, t || "")), n;
    }
  });
  return n;
}, Ke = (e) => {
  if (!e) return !1;
  const t = typeof e == "string" ? j.get(e) : e;
  if (!t || typeof document > "u") return !1;
  const n = document.adoptedStyleSheets, r = n.indexOf(t);
  return r !== -1 ? (n.splice(r, 1), !0) : !1;
}, vr = (e, t) => {
  const n = e.split(" ");
  return new DOMPoint(Kt(n[0], () => t.clientWidth), Kt(n[1], () => t.clientHeight));
}, Kt = (e, t) => e.endsWith("%") ? parseFloat(e) / 100 * t() : parseFloat(e), lo = (e) => {
  if (e?.computedStyleMap) {
    const t = e.computedStyleMap().get("transform")?.toMatrix?.();
    if (t) return t;
  } else if (e) {
    const t = getComputedStyle(e);
    return new DOMMatrix(t?.getPropertyValue?.("transform"));
  }
  return new DOMMatrix();
}, co = (e) => {
  const t = getComputedStyle(e)?.getPropertyValue?.("transform-origin") || "50% 50%";
  return vr(t, e);
}, ie = (e, t) => {
  if ("computedStyleMap" in e) {
    const n = e?.computedStyleMap?.()?.get(t);
    return n instanceof CSSUnitValue ? n?.value || 0 : n?.toString?.();
  }
  if (e instanceof HTMLElement) {
    const n = getComputedStyle?.(e, "");
    return parseFloat(n?.getPropertyValue?.(t)?.replace?.("px", "")) || 0;
  }
  return parseFloat((e?.style ?? e).getPropertyValue?.(t)?.replace?.("px", "")) || 0;
}, fo = (e) => {
  let t = 1, n = e;
  for (; n; ) {
    if ("currentCSSZoom" in n) {
      const i = n.currentCSSZoom;
      if (typeof i == "number") return t *= i;
    }
    const r = getComputedStyle(n);
    if (r.zoom && r.zoom !== "normal") return t *= parseFloat(r.zoom);
    if (r.zoom && r.zoom !== "normal" || "currentCSSZoom" in n) return t;
    n = n?.offsetParent ?? n?.parentElement;
  }
  return t;
}, po = (e, t) => ie?.(e, t), ho = (e, t) => t == "inline" ? ie(e, "padding-inline-start") + ie(e, "padding-inline-end") : ie(e, "padding-block-start") + ie(e, "padding-block-end"), dn = /* @__PURE__ */ new WeakMap(), gr = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), mo = (e, t) => {
  if (e) {
    if (t) {
      const n = dn.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((r) => gr(e, n, r));
    }
    return e;
  }
}, yr = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), ce = globalThis[yr] ??= /* @__PURE__ */ new Map(), br = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, xr = (e) => (typeof e == "object" || typeof e == "function") && e != null, wr = (e, t, n) => {
  if (!xr(e) && e != null) return e;
  let r = ce.get(t);
  return r || (r = /* @__PURE__ */ new WeakMap(), ce.set(t, r)), !r.has(e) && e != null && r.set(e, n), e;
}, vo = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, r] of t.entries()) wr(e, n, r);
    return e;
  }
}, go = (e, t) => {
  if (e) {
    if (t) {
      const n = L?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      L?.has?.(e) || L?.set?.(e, n), [...t?.values?.() || []].map((r) => Sr(e, r, n));
    }
    return e;
  }
}, le = (e) => ({
  storeSet: br(ce, e),
  mixinSet: L?.get?.(e),
  behaviorSet: dn?.get?.(e)
}), Sr = (e, t, n) => {
  const r = new WeakRef(e);
  return n ||= L?.get?.(e), n?.has?.(t) || (n?.add?.(t), q?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((i) => !!i).join(" ")), t?.connect?.(r, t, le(e))), e;
}, Er = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), L = globalThis[Er] ??= /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), q = globalThis[Mr] ??= /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), de = globalThis[Cr] ??= /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), We = globalThis[jr] ??= /* @__PURE__ */ new WeakMap(), fn = (e, t) => {
  typeof t == "string" && (t = de?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((o) => de?.get?.(o)).filter((o) => !!o)), i = L?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  q?.has?.(t) || q?.set?.(t, /* @__PURE__ */ new WeakSet()), L?.has?.(e) || L?.set?.(e, i);
  const s = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(s, t, le(e)), (r.has(t) || !q?.get?.(t)?.has?.(e)) && (t?.connect?.(s, t, le(e)), n.add(We?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((o) => !!o).join(" "))), q?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(s, t, le(e))));
}, gt = /* @__PURE__ */ new Set(), Ar = (e = typeof document < "u" ? document : null) => {
  if (e)
    return gt?.has?.(e) || (gt?.add?.(e), Lt(e, "*", "data-mixin", (t) => yt(t.target)), nr(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && yt(n);
    })), e;
}, yt = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => de?.get?.(n)).filter((n) => !!n))].map?.((n) => fn(e, n));
}, Vr = (e, t) => {
  e.forEach((n) => t ? fn(n, t) : yt(n));
}, Lr = (e) => {
  for (const t of gt) Vr(t?.querySelectorAll?.("[data-mixin]"), e);
}, zr = new FinalizationRegistry((e) => {
  de?.delete?.(e);
}), Tr = (e, t) => {
  if (!We?.has?.(t)) {
    const n = e?.trim?.();
    n && (We?.set?.(t, n), de?.set?.(n, t), zr?.register?.(t, n), Lr(t));
  }
};
Ar(typeof document < "u" ? document : null);
var yo = class {
  constructor(e = null) {
    e && Tr(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return ce.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return le(e);
  }
  get elements() {
    return q?.get?.(this);
  }
  get storage() {
    return ce?.get?.(this.name || "");
  }
  get name() {
    return We?.get?.(this);
  }
}, bo = (e, t, n) => {
  const r = n;
  C(n) && (n = n.value);
  const i = (n = Vt(n)) != null && n !== !1;
  return me(r, () => {
    e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, xo = (e, t, n) => {
  if (!(t = typeof t == "string" ? nn(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const r = n;
  return C(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && me(r, () => {
    n != null ? e[t] = n : delete e[t];
  }), e;
}, wo = (e, t, n) => {
  const r = e?.dataset;
  if (!t || !e || !r) return e;
  const i = n;
  return C(n) && (n = n?.value), t = nn(t), r?.[t] === (n = Vt(n)) || (n == null || n === !1 ? delete r[t] : me(i, () => {
    typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
  })), e;
}, kr = (e, t) => e.style.removeProperty(z(t)), So = (e, t, n) => {
  const r = e?.style;
  return !t || typeof t != "string" || !e || !r || me(n, () => {
    Tn(n) || C(n) || kn(n) ? De(e, t, n) : n == null && kr(e, t);
  }), e;
}, Eo = (e, t, n) => {
  if (!t || !e) return e;
  const r = n;
  return C(n) && (n = n.value), t = z(t), e?.getAttribute?.(t) === (n = Vt(n)) || me(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
}, Pr = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Qt = globalThis[Pr] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Qt.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    Qt.add(t);
  }
});
var Mo = typeof document < "u" ? document?.documentElement : null, Nr = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) Nr.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Rr = {};
function E(e, t, n, r = Rr) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
var Wr = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Co = globalThis[Wr] ??= /* @__PURE__ */ new WeakMap(), Fr = () => {
  const e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, n = t ? {
    "--vv-width": `${t.width}px`,
    "--vv-height": `${t.height}px`,
    "--vv-offset-left": `${t.offsetLeft}px`,
    "--vv-offset-top": `${t.offsetTop}px`,
    "--vv-scale": String(t.scale ?? 1)
  } : {
    "--vv-width": typeof window < "u" ? `${window.innerWidth}px` : "0px",
    "--vv-height": typeof window < "u" ? `${window.innerHeight}px` : "0px",
    "--vv-offset-left": "0px",
    "--vv-offset-top": "0px",
    "--vv-scale": "1"
  };
  if (typeof screen < "u") {
    const r = screen?.availWidth + "px", i = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? i : r,
      "--avail-height": e ? r : i,
      "--view-height": Math.min(screen?.availHeight, window?.innerHeight) + "px",
      "--pixel-ratio": String(devicePixelRatio || 1),
      ...n
    };
  }
  return {
    "--screen-width": "0px",
    "--screen-height": "0px",
    "--avail-width": "0px",
    "--avail-height": "0px",
    "--view-height": "0px",
    "--pixel-ratio": "1",
    ...n
  };
}, jo = Fr(), Ao = new OffscreenCanvas(1, 1).getContext("2d"), $r = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), Vo = globalThis[$r] ??= /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), Lo = globalThis[Or] ??= /* @__PURE__ */ new WeakMap(), pn = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), qr = (e, t, n, r) => {
  const i = new Set([...n.split(",") || [n]].map((o) => o.trim())), s = new MutationObserver((o, a) => {
    for (const d of o) if (d.type == "childList") {
      const c = Array.from(d.addedNodes) || [], p = Array.from(d.removedNodes) || [];
      c.push(...Array.from(d.addedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), p.push(...Array.from(d.removedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...new Set(c)].filter((h) => h?.matches?.(t))?.map?.((h) => {
        i.forEach((l) => {
          r({
            target: h,
            type: "attributes",
            attributeName: l,
            oldValue: h?.getAttribute?.(l)
          }, a);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && i.has(d.attributeName) && r(d, a);
  });
  return s.observe(e = pn(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...i],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((o) => i.forEach((a) => r({
    target: o,
    type: "attributes",
    attributeName: a,
    oldValue: o?.getAttribute?.(a)
  }, s))), s;
}, Hr = (e, t = "*", n = (r, i) => {
}) => {
  const r = (l) => {
    const u = Array.from(l || []) || [];
    return u.push(...Array.from(l || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...Array.from(new Set(u).values())].filter((f) => f?.matches?.(t));
  };
  let i = null;
  const s = (l) => {
    const u = i?.deref?.(), f = r(l.addedNodes), m = r(l.removedNodes);
    (f.length > 0 || m.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: f,
      removedNodes: m
    }, u);
  }, o = (l) => {
    s({
      addedNodes: [l?.target].filter((u) => !!u),
      removedNodes: [l?.relatedTarget].filter((u) => !!u),
      type: "childList",
      target: l?.currentTarget
    });
  }, a = (l) => {
    s({
      addedNodes: [l?.relatedTarget].filter((u) => !!u),
      removedNodes: [l?.target].filter((u) => !!u),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    s({
      addedNodes: [l?.target].filter((u) => !!u),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((u) => !!u),
      type: "childList",
      target: l?.currentTarget
    });
  }, c = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", o, c), e.addEventListener("pointerout", a, c), e.addEventListener("pointerdown", o, c), e.addEventListener("pointerup", a, c), e.addEventListener("pointercancel", a, c), { disconnect: () => {
    e.removeEventListener("pointerover", o, c), e.removeEventListener("pointerout", a, c), e.removeEventListener("pointerdown", o, c), e.removeEventListener("pointerup", a, c), e.removeEventListener("pointercancel", a, c);
  } };
  if (t?.includes?.(":hover")) return e.addEventListener("pointerover", o, c), e.addEventListener("pointerout", a, c), { disconnect: () => {
    e.removeEventListener("pointerover", o, c), e.removeEventListener("pointerout", a, c);
  } };
  if (t?.includes?.(":active")) return e.addEventListener("pointerdown", o, c), e.addEventListener("pointerup", a, c), e.addEventListener("pointercancel", a, c), { disconnect: () => {
    e.removeEventListener("pointerdown", o, c), e.removeEventListener("pointerup", a, c), e.removeEventListener("pointercancel", a, c);
  } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", o, c), e.addEventListener("focusout", a, c), e.addEventListener("click", d, c), { disconnect: () => {
    e.removeEventListener("focusin", o, c), e.removeEventListener("focusout", a, c), e.removeEventListener("click", d, c);
  } };
  const p = new MutationObserver((l, u) => {
    for (const f of l) f.type == "childList" && s(f);
  });
  i = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = pn(e), {
    childList: !0,
    subtree: !0
  });
  const h = Array.from(e.querySelectorAll(t));
  return h.length > 0 && n?.({
    addedNodes: h,
    removedNodes: []
  }, p), p;
}, Ir = "DOM", Qe = typeof document < "u" ? document.createElement("style") : null;
Qe && (typeof document < "u" && document.querySelector("head")?.appendChild?.(Qe), Qe.dataset.owner = Ir);
var Ue = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", U = (e) => Ue && e instanceof CSSStyleValue, F = (e) => Ue && e instanceof CSSUnitValue, H = (e, t, n, r = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, r);
  }
}, Br = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = z(t), s = e.style, o = e.attributeStyleMap ?? e.styleMap;
  if (!Ue || !o) return hn(e, t, n, r);
  let a = C(n) && !(U(n) || F(n)) ? n?.value : n;
  if (a == null) return o.delete?.(i), s && H(s, i, null, r), e;
  if (U(a)) {
    const d = o.get(i);
    if (F(a) && F(d)) {
      if (d.value === a.value && d.unit === a.unit) return e;
    } else if (d === a) return e;
    return o.set(i, a), e;
  }
  if (typeof a == "number") if (CSS?.number && !i.startsWith("--")) {
    const d = CSS.number(a), c = o.get(i);
    return F(c) && c.value === d.value && c.unit === d.unit || o.set(i, d), e;
  } else return H(s, i, String(a), r), e;
  if (typeof a == "string" && !U(a)) {
    const d = Y(a);
    if (typeof d == "number" && CSS?.number && !i.startsWith("--")) {
      const c = CSS.number(d), p = o.get(i);
      return F(p) && p.value === c.value && p.unit === c.unit || o.set(i, c), e;
    } else return H(s, i, a, r), e;
  }
  return H(s, i, String(a), r), e;
}, hn = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = z(t), s = e.style;
  if (!s) return e;
  let o = C(n) && !(U(n) || F(n)) ? n?.value : n;
  return typeof o == "string" && !U(o) && (o = Y(o) ?? o), o == null ? (H(s, i, null, r), e) : (U(o), H(s, i, String(o), r), e);
}, be = (e, t, n, r = "") => Ue ? Br(e, t, n, r) : hn(e, t, n, r), _r = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), bt = globalThis[Dr] ??= /* @__PURE__ */ new Map(), Ur = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, Ce = (e) => ({
  storeSet: Ur(bt, e),
  mixinSet: je?.get?.(e),
  behaviorSet: _r?.get?.(e)
}), Zr = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), je = globalThis[Zr] ??= /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), ae = globalThis[Xr] ??= /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), fe = globalThis[Yr] ??= /* @__PURE__ */ new Map(), Gr = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), Fe = globalThis[Gr] ??= /* @__PURE__ */ new WeakMap(), mn = (e, t) => {
  typeof t == "string" && (t = fe?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((o) => fe?.get?.(o)).filter((o) => !!o)), i = je?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  ae?.has?.(t) || ae?.set?.(t, /* @__PURE__ */ new WeakSet()), je?.has?.(e) || je?.set?.(e, i);
  const s = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(s, t, Ce(e)), (r.has(t) || !ae?.get?.(t)?.has?.(e)) && (t?.connect?.(s, t, Ce(e)), n.add(Fe?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((o) => !!o).join(" "))), ae?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(s, t, Ce(e))));
}, xt = /* @__PURE__ */ new Set(), Jr = (e = typeof document < "u" ? document : null) => {
  if (e) return xt?.has?.(e) || (xt?.add?.(e), qr(e, "*", "data-mixin", (t) => wt(t.target)), Hr(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && wt(n);
  })), e;
}, wt = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => fe?.get?.(n)).filter((n) => !!n))].map?.((n) => mn(e, n));
}, Kr = (e, t) => {
  e.forEach((n) => t ? mn(n, t) : wt(n));
}, Qr = (e) => {
  for (const t of xt) Kr(t?.querySelectorAll?.("[data-mixin]"), e);
}, ei = new FinalizationRegistry((e) => {
  fe?.delete?.(e);
}), ti = (e, t) => {
  if (!Fe?.has?.(t)) {
    const n = e?.trim?.();
    n && (Fe?.set?.(t, n), fe?.set?.(n, t), ei?.register?.(t, n), Qr(t));
  }
};
Jr(typeof document < "u" ? document : null);
var kt = class {
  constructor(e = null) {
    e && ti(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return bt.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return Ce(e);
  }
  get elements() {
    return ae?.get?.(this);
  }
  get storage() {
    return bt?.get?.(this.name || "");
  }
  get name() {
    return Fe?.get?.(this);
  }
}, ni = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), en = globalThis[ni] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || en.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    en.add(t);
  }
});
typeof document < "u" && document?.documentElement;
var ri = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) ri.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var ii = {};
function M(e, t, n, r = ii) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
var ai = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues");
globalThis[ai] ??= /* @__PURE__ */ new WeakMap();
var oi = () => {
  const e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, n = t ? {
    "--vv-width": `${t.width}px`,
    "--vv-height": `${t.height}px`,
    "--vv-offset-left": `${t.offsetLeft}px`,
    "--vv-offset-top": `${t.offsetTop}px`,
    "--vv-scale": String(t.scale ?? 1)
  } : {
    "--vv-width": typeof window < "u" ? `${window.innerWidth}px` : "0px",
    "--vv-height": typeof window < "u" ? `${window.innerHeight}px` : "0px",
    "--vv-offset-left": "0px",
    "--vv-offset-top": "0px",
    "--vv-scale": "1"
  };
  if (typeof screen < "u") {
    const r = screen?.availWidth + "px", i = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? i : r,
      "--avail-height": e ? r : i,
      "--view-height": Math.min(screen?.availHeight, window?.innerHeight) + "px",
      "--pixel-ratio": String(devicePixelRatio || 1),
      ...n
    };
  }
  return {
    "--screen-width": "0px",
    "--screen-height": "0px",
    "--avail-width": "0px",
    "--avail-height": "0px",
    "--view-height": "0px",
    "--pixel-ratio": "1",
    ...n
  };
};
oi();
new OffscreenCanvas(1, 1).getContext("2d");
var si = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve");
globalThis[si] ??= /* @__PURE__ */ new WeakMap();
var ui = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve");
globalThis[ui] ??= /* @__PURE__ */ new WeakMap();
var vn = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), li = (e, t, n, r) => {
  const i = new Set([...n.split(",") || [n]].map((o) => o.trim())), s = new MutationObserver((o, a) => {
    for (const d of o) if (d.type == "childList") {
      const c = Array.from(d.addedNodes) || [], p = Array.from(d.removedNodes) || [];
      c.push(...Array.from(d.addedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), p.push(...Array.from(d.removedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...new Set(c)].filter((h) => h?.matches?.(t))?.map?.((h) => {
        i.forEach((l) => {
          r({
            target: h,
            type: "attributes",
            attributeName: l,
            oldValue: h?.getAttribute?.(l)
          }, a);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && i.has(d.attributeName) && r(d, a);
  });
  return s.observe(e = vn(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...i],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((o) => i.forEach((a) => r({
    target: o,
    type: "attributes",
    attributeName: a,
    oldValue: o?.getAttribute?.(a)
  }, s))), s;
}, ci = (e, t = "*", n = (r, i) => {
}) => {
  const r = (l) => {
    const u = Array.from(l || []) || [];
    return u.push(...Array.from(l || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...Array.from(new Set(u).values())].filter((f) => f?.matches?.(t));
  };
  let i = null;
  const s = (l) => {
    const u = i?.deref?.(), f = r(l.addedNodes), m = r(l.removedNodes);
    (f.length > 0 || m.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: f,
      removedNodes: m
    }, u);
  }, o = (l) => {
    s({
      addedNodes: [l?.target].filter((u) => !!u),
      removedNodes: [l?.relatedTarget].filter((u) => !!u),
      type: "childList",
      target: l?.currentTarget
    });
  }, a = (l) => {
    s({
      addedNodes: [l?.relatedTarget].filter((u) => !!u),
      removedNodes: [l?.target].filter((u) => !!u),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    s({
      addedNodes: [l?.target].filter((u) => !!u),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((u) => !!u),
      type: "childList",
      target: l?.currentTarget
    });
  }, c = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", o, c), e.addEventListener("pointerout", a, c), e.addEventListener("pointerdown", o, c), e.addEventListener("pointerup", a, c), e.addEventListener("pointercancel", a, c), { disconnect: () => {
    e.removeEventListener("pointerover", o, c), e.removeEventListener("pointerout", a, c), e.removeEventListener("pointerdown", o, c), e.removeEventListener("pointerup", a, c), e.removeEventListener("pointercancel", a, c);
  } };
  if (t?.includes?.(":hover")) return e.addEventListener("pointerover", o, c), e.addEventListener("pointerout", a, c), { disconnect: () => {
    e.removeEventListener("pointerover", o, c), e.removeEventListener("pointerout", a, c);
  } };
  if (t?.includes?.(":active")) return e.addEventListener("pointerdown", o, c), e.addEventListener("pointerup", a, c), e.addEventListener("pointercancel", a, c), { disconnect: () => {
    e.removeEventListener("pointerdown", o, c), e.removeEventListener("pointerup", a, c), e.removeEventListener("pointercancel", a, c);
  } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", o, c), e.addEventListener("focusout", a, c), e.addEventListener("click", d, c), { disconnect: () => {
    e.removeEventListener("focusin", o, c), e.removeEventListener("focusout", a, c), e.removeEventListener("click", d, c);
  } };
  const p = new MutationObserver((l, u) => {
    for (const f of l) f.type == "childList" && s(f);
  });
  i = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = vn(e), {
    childList: !0,
    subtree: !0
  });
  const h = Array.from(e.querySelectorAll(t));
  return h.length > 0 && n?.({
    addedNodes: h,
    removedNodes: []
  }, p), p;
}, di = "DOM", et = typeof document < "u" ? document.createElement("style") : null;
et && (typeof document < "u" && document.querySelector("head")?.appendChild?.(et), et.dataset.owner = di);
var Ze = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", Z = (e) => Ze && e instanceof CSSStyleValue, $ = (e) => Ze && e instanceof CSSUnitValue, I = (e, t, n, r = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, r);
  }
}, fi = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = z(t), s = e.style, o = e.attributeStyleMap ?? e.styleMap;
  if (!Ze || !o) return gn(e, t, n, r);
  let a = C(n) && !(Z(n) || $(n)) ? n?.value : n;
  if (a == null) return o.delete?.(i), s && I(s, i, null, r), e;
  if (Z(a)) {
    const d = o.get(i);
    if ($(a) && $(d)) {
      if (d.value === a.value && d.unit === a.unit) return e;
    } else if (d === a) return e;
    return o.set(i, a), e;
  }
  if (typeof a == "number") if (CSS?.number && !i.startsWith("--")) {
    const d = CSS.number(a), c = o.get(i);
    return $(c) && c.value === d.value && c.unit === d.unit || o.set(i, d), e;
  } else return I(s, i, String(a), r), e;
  if (typeof a == "string" && !Z(a)) {
    const d = Y(a);
    if (typeof d == "number" && CSS?.number && !i.startsWith("--")) {
      const c = CSS.number(d), p = o.get(i);
      return $(p) && p.value === c.value && p.unit === c.unit || o.set(i, c), e;
    } else return I(s, i, a, r), e;
  }
  return I(s, i, String(a), r), e;
}, gn = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = z(t), s = e.style;
  if (!s) return e;
  let o = C(n) && !(Z(n) || $(n)) ? n?.value : n;
  return typeof o == "string" && !Z(o) && (o = Y(o) ?? o), o == null ? (I(s, i, null, r), e) : (Z(o), I(s, i, String(o), r), e);
}, xe = (e, t, n, r = "") => Ze ? fi(e, t, n, r) : gn(e, t, n, r), pi = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), St = globalThis[hi] ??= /* @__PURE__ */ new Map(), mi = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, Ae = (e) => ({
  storeSet: mi(St, e),
  mixinSet: Ve?.get?.(e),
  behaviorSet: pi?.get?.(e)
}), vi = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), Ve = globalThis[vi] ??= /* @__PURE__ */ new WeakMap(), gi = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), oe = globalThis[gi] ??= /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), pe = globalThis[yi] ??= /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), $e = globalThis[bi] ??= /* @__PURE__ */ new WeakMap(), yn = (e, t) => {
  typeof t == "string" && (t = pe?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((o) => pe?.get?.(o)).filter((o) => !!o)), i = Ve?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  oe?.has?.(t) || oe?.set?.(t, /* @__PURE__ */ new WeakSet()), Ve?.has?.(e) || Ve?.set?.(e, i);
  const s = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(s, t, Ae(e)), (r.has(t) || !oe?.get?.(t)?.has?.(e)) && (t?.connect?.(s, t, Ae(e)), n.add($e?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((o) => !!o).join(" "))), oe?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(s, t, Ae(e))));
}, Et = /* @__PURE__ */ new Set(), xi = (e = typeof document < "u" ? document : null) => {
  if (e) return Et?.has?.(e) || (Et?.add?.(e), li(e, "*", "data-mixin", (t) => Mt(t.target)), ci(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && Mt(n);
  })), e;
}, Mt = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => pe?.get?.(n)).filter((n) => !!n))].map?.((n) => yn(e, n));
}, wi = (e, t) => {
  e.forEach((n) => t ? yn(n, t) : Mt(n));
}, Si = (e) => {
  for (const t of Et) wi(t?.querySelectorAll?.("[data-mixin]"), e);
}, Ei = new FinalizationRegistry((e) => {
  pe?.delete?.(e);
}), Mi = (e, t) => {
  if (!$e?.has?.(t)) {
    const n = e?.trim?.();
    n && ($e?.set?.(t, n), pe?.set?.(n, t), Ei?.register?.(t, n), Si(t));
  }
};
xi(typeof document < "u" ? document : null);
var Pt = class {
  constructor(e = null) {
    e && Mi(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return St.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return Ae(e);
  }
  get elements() {
    return oe?.get?.(this);
  }
  get storage() {
    return St?.get?.(this.name || "");
  }
  get name() {
    return $e?.get?.(this);
  }
}, Ci = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), tn = globalThis[Ci] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || tn.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    tn.add(t);
  }
});
var ji = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), bn = (e) => ji(e, "value"), xn = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), wn = (e) => {
  if (typeof e != "string") return null;
  const t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
  if (t?.length != 1) return null;
  const n = parseFloat(t[0][0]);
  return !Number.isNaN(n) && Number.isFinite(n) ? n : null;
};
typeof document < "u" && document?.documentElement;
var Ai = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) Ai.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Vi = {};
function v(e, t, n, r = Vi) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
var Li = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues");
globalThis[Li] ??= /* @__PURE__ */ new WeakMap();
var zi = () => {
  const e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, n = t ? {
    "--vv-width": `${t.width}px`,
    "--vv-height": `${t.height}px`,
    "--vv-offset-left": `${t.offsetLeft}px`,
    "--vv-offset-top": `${t.offsetTop}px`,
    "--vv-scale": String(t.scale ?? 1)
  } : {
    "--vv-width": typeof window < "u" ? `${window.innerWidth}px` : "0px",
    "--vv-height": typeof window < "u" ? `${window.innerHeight}px` : "0px",
    "--vv-offset-left": "0px",
    "--vv-offset-top": "0px",
    "--vv-scale": "1"
  };
  if (typeof screen < "u") {
    const r = screen?.availWidth + "px", i = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? i : r,
      "--avail-height": e ? r : i,
      "--view-height": Math.min(screen?.availHeight, window?.innerHeight) + "px",
      "--pixel-ratio": String(devicePixelRatio || 1),
      ...n
    };
  }
  return {
    "--screen-width": "0px",
    "--screen-height": "0px",
    "--avail-width": "0px",
    "--avail-height": "0px",
    "--view-height": "0px",
    "--pixel-ratio": "1",
    ...n
  };
};
zi();
new OffscreenCanvas(1, 1).getContext("2d");
var Ti = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve");
globalThis[Ti] ??= /* @__PURE__ */ new WeakMap();
var ki = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve");
globalThis[ki] ??= /* @__PURE__ */ new WeakMap();
var Sn = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Pi = (e, t, n, r) => {
  const i = new Set([...n.split(",") || [n]].map((o) => o.trim())), s = new MutationObserver((o, a) => {
    for (const d of o) if (d.type == "childList") {
      const c = Array.from(d.addedNodes) || [], p = Array.from(d.removedNodes) || [];
      c.push(...Array.from(d.addedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), p.push(...Array.from(d.removedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...new Set(c)].filter((h) => h?.matches?.(t))?.map?.((h) => {
        i.forEach((l) => {
          r({
            target: h,
            type: "attributes",
            attributeName: l,
            oldValue: h?.getAttribute?.(l)
          }, a);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && i.has(d.attributeName) && r(d, a);
  });
  return s.observe(e = Sn(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...i],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((o) => i.forEach((a) => r({
    target: o,
    type: "attributes",
    attributeName: a,
    oldValue: o?.getAttribute?.(a)
  }, s))), s;
}, Ni = (e, t = "*", n = (r, i) => {
}) => {
  const r = (l) => {
    const u = Array.from(l || []) || [];
    return u.push(...Array.from(l || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...Array.from(new Set(u).values())].filter((f) => f?.matches?.(t));
  };
  let i = null;
  const s = (l) => {
    const u = i?.deref?.(), f = r(l.addedNodes), m = r(l.removedNodes);
    (f.length > 0 || m.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: f,
      removedNodes: m
    }, u);
  }, o = (l) => {
    s({
      addedNodes: [l?.target].filter((u) => !!u),
      removedNodes: [l?.relatedTarget].filter((u) => !!u),
      type: "childList",
      target: l?.currentTarget
    });
  }, a = (l) => {
    s({
      addedNodes: [l?.relatedTarget].filter((u) => !!u),
      removedNodes: [l?.target].filter((u) => !!u),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    s({
      addedNodes: [l?.target].filter((u) => !!u),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((u) => !!u),
      type: "childList",
      target: l?.currentTarget
    });
  }, c = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", o, c), e.addEventListener("pointerout", a, c), e.addEventListener("pointerdown", o, c), e.addEventListener("pointerup", a, c), e.addEventListener("pointercancel", a, c), { disconnect: () => {
    e.removeEventListener("pointerover", o, c), e.removeEventListener("pointerout", a, c), e.removeEventListener("pointerdown", o, c), e.removeEventListener("pointerup", a, c), e.removeEventListener("pointercancel", a, c);
  } };
  if (t?.includes?.(":hover")) return e.addEventListener("pointerover", o, c), e.addEventListener("pointerout", a, c), { disconnect: () => {
    e.removeEventListener("pointerover", o, c), e.removeEventListener("pointerout", a, c);
  } };
  if (t?.includes?.(":active")) return e.addEventListener("pointerdown", o, c), e.addEventListener("pointerup", a, c), e.addEventListener("pointercancel", a, c), { disconnect: () => {
    e.removeEventListener("pointerdown", o, c), e.removeEventListener("pointerup", a, c), e.removeEventListener("pointercancel", a, c);
  } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", o, c), e.addEventListener("focusout", a, c), e.addEventListener("click", d, c), { disconnect: () => {
    e.removeEventListener("focusin", o, c), e.removeEventListener("focusout", a, c), e.removeEventListener("click", d, c);
  } };
  const p = new MutationObserver((l, u) => {
    for (const f of l) f.type == "childList" && s(f);
  });
  i = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = Sn(e), {
    childList: !0,
    subtree: !0
  });
  const h = Array.from(e.querySelectorAll(t));
  return h.length > 0 && n?.({
    addedNodes: h,
    removedNodes: []
  }, p), p;
}, Ri = "DOM", tt = typeof document < "u" ? document.createElement("style") : null;
tt && (typeof document < "u" && document.querySelector("head")?.appendChild?.(tt), tt.dataset.owner = Ri);
var Xe = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", X = (e) => Xe && e instanceof CSSStyleValue, O = (e) => Xe && e instanceof CSSUnitValue, B = (e, t, n, r = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, r);
  }
}, Wi = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = xn(t), s = e.style, o = e.attributeStyleMap ?? e.styleMap;
  if (!Xe || !o) return En(e, t, n, r);
  let a = bn(n) && !(X(n) || O(n)) ? n?.value : n;
  if (a == null) return o.delete?.(i), s && B(s, i, null, r), e;
  if (X(a)) {
    const d = o.get(i);
    if (O(a) && O(d)) {
      if (d.value === a.value && d.unit === a.unit) return e;
    } else if (d === a) return e;
    return o.set(i, a), e;
  }
  if (typeof a == "number") if (CSS?.number && !i.startsWith("--")) {
    const d = CSS.number(a), c = o.get(i);
    return O(c) && c.value === d.value && c.unit === d.unit || o.set(i, d), e;
  } else return B(s, i, String(a), r), e;
  if (typeof a == "string" && !X(a)) {
    const d = wn(a);
    if (typeof d == "number" && CSS?.number && !i.startsWith("--")) {
      const c = CSS.number(d), p = o.get(i);
      return O(p) && p.value === c.value && p.unit === c.unit || o.set(i, c), e;
    } else return B(s, i, a, r), e;
  }
  return B(s, i, String(a), r), e;
}, En = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = xn(t), s = e.style;
  if (!s) return e;
  let o = bn(n) && !(X(n) || O(n)) ? n?.value : n;
  return typeof o == "string" && !X(o) && (o = wn(o) ?? o), o == null ? (B(s, i, null, r), e) : (X(o), B(s, i, String(o), r), e);
}, V = (e, t, n, r = "") => Xe ? Wi(e, t, n, r) : En(e, t, n, r), Fi = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), Ct = globalThis[$i] ??= /* @__PURE__ */ new Map(), Oi = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, Le = (e) => ({
  storeSet: Oi(Ct, e),
  mixinSet: ze?.get?.(e),
  behaviorSet: Fi?.get?.(e)
}), qi = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), ze = globalThis[qi] ??= /* @__PURE__ */ new WeakMap(), Hi = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), se = globalThis[Hi] ??= /* @__PURE__ */ new WeakMap(), Ii = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), he = globalThis[Ii] ??= /* @__PURE__ */ new Map(), Bi = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), Oe = globalThis[Bi] ??= /* @__PURE__ */ new WeakMap(), Mn = (e, t) => {
  typeof t == "string" && (t = he?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((o) => he?.get?.(o)).filter((o) => !!o)), i = ze?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  se?.has?.(t) || se?.set?.(t, /* @__PURE__ */ new WeakSet()), ze?.has?.(e) || ze?.set?.(e, i);
  const s = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(s, t, Le(e)), (r.has(t) || !se?.get?.(t)?.has?.(e)) && (t?.connect?.(s, t, Le(e)), n.add(Oe?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((o) => !!o).join(" "))), se?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(s, t, Le(e))));
}, jt = /* @__PURE__ */ new Set(), _i = (e = typeof document < "u" ? document : null) => {
  if (e) return jt?.has?.(e) || (jt?.add?.(e), Pi(e, "*", "data-mixin", (t) => At(t.target)), Ni(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && At(n);
  })), e;
}, At = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => he?.get?.(n)).filter((n) => !!n))].map?.((n) => Mn(e, n));
}, Di = (e, t) => {
  e.forEach((n) => t ? Mn(n, t) : At(n));
}, Ui = (e) => {
  for (const t of jt) Di(t?.querySelectorAll?.("[data-mixin]"), e);
}, Zi = new FinalizationRegistry((e) => {
  he?.delete?.(e);
}), Xi = (e, t) => {
  if (!Oe?.has?.(t)) {
    const n = e?.trim?.();
    n && (Oe?.set?.(t, n), he?.set?.(n, t), Zi?.register?.(t, n), Ui(t));
  }
};
_i(typeof document < "u" ? document : null);
var J = class {
  constructor(e = null) {
    e && Xi(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return Ct.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return Le(e);
  }
  get elements() {
    return se?.get?.(this);
  }
  get storage() {
    return Ct?.get?.(this.name || "");
  }
  get name() {
    return Oe?.get?.(this);
  }
};
function nt(e, t) {
  const n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x, t.x), s = Math.max(e.y, t.y);
  return {
    left: n,
    top: r,
    right: i,
    bottom: s,
    width: i - n,
    height: s - r
  };
}
var we = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, rt = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, it = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Yi = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), qe = globalThis[Yi] ??= /* @__PURE__ */ new WeakMap(), g = (e, t, n) => {
  const r = qe.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), qe.set(e, r);
}, Nt = (e, t) => {
  const n = qe.get(e), r = n?.get(t);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(t), n.size === 0 && qe.delete(e);
  }
}, k = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, Cn = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, Gi = class extends J {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let r = !1, i = {
      x: 0,
      y: 0
    }, s = {
      x: 0,
      y: 0
    };
    const o = (u) => {
      const f = t.getBoundingClientRect();
      return {
        x: u.clientX - f.left,
        y: u.clientY - f.top
      };
    }, a = () => {
      const u = nt(i, s);
      if (u.width < 1 && u.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${u.left}px`, n.style.top = `${u.top}px`, n.style.width = `${u.width}px`, n.style.height = `${u.height}px`;
    }, d = (u) => {
      u.button === 0 && (u.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (u.target === t || t.contains(u.target)) && (r = !0, i = o(u), s = { ...i }, t.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(we.start, {
        bubbles: !0,
        detail: {
          a: { ...i },
          b: { ...s },
          host: t
        }
      })), a()));
    }, c = (u) => {
      if (!r) return;
      s = o(u), a();
      const f = nt(i, s);
      t.dispatchEvent(new CustomEvent(we.move, {
        bubbles: !0,
        detail: {
          a: { ...i },
          b: { ...s },
          box: f,
          host: t
        }
      }));
    }, p = (u) => {
      if (!r) return;
      r = !1;
      try {
        t.releasePointerCapture(u.pointerId);
      } catch {
      }
      const f = nt(i, s);
      t.dispatchEvent(new CustomEvent(we.end, {
        bubbles: !0,
        detail: {
          a: { ...i },
          b: { ...s },
          box: f,
          host: t
        }
      }));
    }, h = (u) => {
      r && p(u);
    }, l = (u) => {
      if (r) {
        r = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(u.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(we.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return g(t, "ui-junction-select", () => {
      n.remove();
    }), g(t, "ui-junction-select", v(t, "pointerdown", d)), g(t, "ui-junction-select", v(t, "pointermove", c)), g(t, "ui-junction-select", v(t, "pointerup", h)), g(t, "ui-junction-select", v(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Nt(t, "ui-junction-select"), this;
  }
}, Ji = class extends J {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    V(t, "--jx-drag-x", k(t, "--jx-drag-x")), V(t, "--jx-drag-y", k(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = Cn(t, "data-junction-drag-handle", t);
    let i = !1, s = 0, o = 0, a = 0, d = 0;
    const c = (l) => {
      l.button === 0 && (l.target !== r && !r.contains(l.target) || (i = !0, s = l.clientX, o = l.clientY, a = k(t, "--jx-drag-x"), d = k(t, "--jx-drag-y"), r.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(rt.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: l.clientX,
          clientY: l.clientY,
          baseX: a,
          baseY: d
        }
      }))));
    }, p = (l) => {
      if (!i) return;
      const u = l.clientX - s, f = l.clientY - o, m = a + u, w = d + f;
      V(t, "--jx-drag-x", m), V(t, "--jx-drag-y", w), t.dispatchEvent(new CustomEvent(rt.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: u,
          dy: f,
          x: m,
          y: w
        }
      }));
    }, h = (l) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(rt.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: k(t, "--jx-drag-x"),
            y: k(t, "--jx-drag-y")
          }
        }));
      }
    };
    return g(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), g(t, "ui-junction-drag", v(r, "pointerdown", c)), g(t, "ui-junction-drag", v(r, "pointermove", p)), g(t, "ui-junction-drag", v(r, "pointerup", h)), g(t, "ui-junction-drag", v(r, "pointercancel", h)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Nt(t, "ui-junction-drag"), this;
  }
}, Ki = class extends J {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Cn(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, s = 0, o = 0, a = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), c = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), p = (u) => {
      u.button === 0 && (u.target !== n && !n.contains(u.target) || (r = !0, i = u.clientX, s = u.clientY, o = t.offsetWidth, a = t.offsetHeight, n.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(it.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: o,
          height: a
        }
      }))));
    }, h = (u) => {
      if (!r) return;
      const f = Math.max(d, o + (u.clientX - i)), m = Math.max(c, a + (u.clientY - s));
      t.style.width = `${f}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(it.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: f,
          height: m
        }
      }));
    }, l = (u) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(u.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(it.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return g(t, "ui-junction-resize", v(n, "pointerdown", p)), g(t, "ui-junction-resize", v(n, "pointermove", h)), g(t, "ui-junction-resize", v(n, "pointerup", l)), g(t, "ui-junction-resize", v(n, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Nt(t, "ui-junction-resize"), this;
  }
};
new Gi();
new Ji();
new Ki();
function at(e, t) {
  const n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x, t.x), s = Math.max(e.y, t.y);
  return {
    left: n,
    top: r,
    right: i,
    bottom: s,
    width: i - n,
    height: s - r
  };
}
var Se = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, ot = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, st = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Qi = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), He = globalThis[Qi] ??= /* @__PURE__ */ new WeakMap(), y = (e, t, n) => {
  const r = He.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), He.set(e, r);
}, Rt = (e, t) => {
  const n = He.get(e), r = n?.get(t);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(t), n.size === 0 && He.delete(e);
  }
}, P = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, jn = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, ea = class extends J {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let r = !1, i = {
      x: 0,
      y: 0
    }, s = {
      x: 0,
      y: 0
    };
    const o = (u) => {
      const f = t.getBoundingClientRect();
      return {
        x: u.clientX - f.left,
        y: u.clientY - f.top
      };
    }, a = () => {
      const u = at(i, s);
      if (u.width < 1 && u.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${u.left}px`, n.style.top = `${u.top}px`, n.style.width = `${u.width}px`, n.style.height = `${u.height}px`;
    }, d = (u) => {
      u.button === 0 && (u.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (u.target === t || t.contains(u.target)) && (r = !0, i = o(u), s = { ...i }, t.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(Se.start, {
        bubbles: !0,
        detail: {
          a: { ...i },
          b: { ...s },
          host: t
        }
      })), a()));
    }, c = (u) => {
      if (!r) return;
      s = o(u), a();
      const f = at(i, s);
      t.dispatchEvent(new CustomEvent(Se.move, {
        bubbles: !0,
        detail: {
          a: { ...i },
          b: { ...s },
          box: f,
          host: t
        }
      }));
    }, p = (u) => {
      if (!r) return;
      r = !1;
      try {
        t.releasePointerCapture(u.pointerId);
      } catch {
      }
      const f = at(i, s);
      t.dispatchEvent(new CustomEvent(Se.end, {
        bubbles: !0,
        detail: {
          a: { ...i },
          b: { ...s },
          box: f,
          host: t
        }
      }));
    }, h = (u) => {
      r && p(u);
    }, l = (u) => {
      if (r) {
        r = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(u.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Se.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return y(t, "ui-junction-select", () => {
      n.remove();
    }), y(t, "ui-junction-select", v(t, "pointerdown", d)), y(t, "ui-junction-select", v(t, "pointermove", c)), y(t, "ui-junction-select", v(t, "pointerup", h)), y(t, "ui-junction-select", v(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Rt(t, "ui-junction-select"), this;
  }
}, ta = class extends J {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    V(t, "--jx-drag-x", P(t, "--jx-drag-x")), V(t, "--jx-drag-y", P(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = jn(t, "data-junction-drag-handle", t);
    let i = !1, s = 0, o = 0, a = 0, d = 0;
    const c = (l) => {
      l.button === 0 && (l.target !== r && !r.contains(l.target) || (i = !0, s = l.clientX, o = l.clientY, a = P(t, "--jx-drag-x"), d = P(t, "--jx-drag-y"), r.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(ot.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: l.clientX,
          clientY: l.clientY,
          baseX: a,
          baseY: d
        }
      }))));
    }, p = (l) => {
      if (!i) return;
      const u = l.clientX - s, f = l.clientY - o, m = a + u, w = d + f;
      V(t, "--jx-drag-x", m), V(t, "--jx-drag-y", w), t.dispatchEvent(new CustomEvent(ot.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: u,
          dy: f,
          x: m,
          y: w
        }
      }));
    }, h = (l) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(ot.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: P(t, "--jx-drag-x"),
            y: P(t, "--jx-drag-y")
          }
        }));
      }
    };
    return y(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), y(t, "ui-junction-drag", v(r, "pointerdown", c)), y(t, "ui-junction-drag", v(r, "pointermove", p)), y(t, "ui-junction-drag", v(r, "pointerup", h)), y(t, "ui-junction-drag", v(r, "pointercancel", h)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Rt(t, "ui-junction-drag"), this;
  }
}, na = class extends J {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = jn(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, s = 0, o = 0, a = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), c = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), p = (u) => {
      u.button === 0 && (u.target !== n && !n.contains(u.target) || (r = !0, i = u.clientX, s = u.clientY, o = t.offsetWidth, a = t.offsetHeight, n.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(st.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: o,
          height: a
        }
      }))));
    }, h = (u) => {
      if (!r) return;
      const f = Math.max(d, o + (u.clientX - i)), m = Math.max(c, a + (u.clientY - s));
      t.style.width = `${f}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(st.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: f,
          height: m
        }
      }));
    }, l = (u) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(u.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(st.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return y(t, "ui-junction-resize", v(n, "pointerdown", p)), y(t, "ui-junction-resize", v(n, "pointermove", h)), y(t, "ui-junction-resize", v(n, "pointerup", l)), y(t, "ui-junction-resize", v(n, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Rt(t, "ui-junction-resize"), this;
  }
};
new ea();
new ta();
new na();
function ut(e, t) {
  const n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x, t.x), s = Math.max(e.y, t.y);
  return {
    left: n,
    top: r,
    right: i,
    bottom: s,
    width: i - n,
    height: s - r
  };
}
var Ee = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, lt = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, ct = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, ra = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), Ie = globalThis[ra] ??= /* @__PURE__ */ new WeakMap(), b = (e, t, n) => {
  const r = Ie.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), Ie.set(e, r);
}, Wt = (e, t) => {
  const n = Ie.get(e), r = n?.get(t);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(t), n.size === 0 && Ie.delete(e);
  }
}, N = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, An = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, ia = class extends Pt {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let r = !1, i = {
      x: 0,
      y: 0
    }, s = {
      x: 0,
      y: 0
    };
    const o = (u) => {
      const f = t.getBoundingClientRect();
      return {
        x: u.clientX - f.left,
        y: u.clientY - f.top
      };
    }, a = () => {
      const u = ut(i, s);
      if (u.width < 1 && u.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${u.left}px`, n.style.top = `${u.top}px`, n.style.width = `${u.width}px`, n.style.height = `${u.height}px`;
    }, d = (u) => {
      u.button === 0 && (u.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (u.target === t || t.contains(u.target)) && (r = !0, i = o(u), s = { ...i }, t.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(Ee.start, {
        bubbles: !0,
        detail: {
          a: { ...i },
          b: { ...s },
          host: t
        }
      })), a()));
    }, c = (u) => {
      if (!r) return;
      s = o(u), a();
      const f = ut(i, s);
      t.dispatchEvent(new CustomEvent(Ee.move, {
        bubbles: !0,
        detail: {
          a: { ...i },
          b: { ...s },
          box: f,
          host: t
        }
      }));
    }, p = (u) => {
      if (!r) return;
      r = !1;
      try {
        t.releasePointerCapture(u.pointerId);
      } catch {
      }
      const f = ut(i, s);
      t.dispatchEvent(new CustomEvent(Ee.end, {
        bubbles: !0,
        detail: {
          a: { ...i },
          b: { ...s },
          box: f,
          host: t
        }
      }));
    }, h = (u) => {
      r && p(u);
    }, l = (u) => {
      if (r) {
        r = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(u.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Ee.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return b(t, "ui-junction-select", () => {
      n.remove();
    }), b(t, "ui-junction-select", M(t, "pointerdown", d)), b(t, "ui-junction-select", M(t, "pointermove", c)), b(t, "ui-junction-select", M(t, "pointerup", h)), b(t, "ui-junction-select", M(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Wt(t, "ui-junction-select"), this;
  }
}, aa = class extends Pt {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    xe(t, "--jx-drag-x", N(t, "--jx-drag-x")), xe(t, "--jx-drag-y", N(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = An(t, "data-junction-drag-handle", t);
    let i = !1, s = 0, o = 0, a = 0, d = 0;
    const c = (l) => {
      l.button === 0 && (l.target !== r && !r.contains(l.target) || (i = !0, s = l.clientX, o = l.clientY, a = N(t, "--jx-drag-x"), d = N(t, "--jx-drag-y"), r.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(lt.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: l.clientX,
          clientY: l.clientY,
          baseX: a,
          baseY: d
        }
      }))));
    }, p = (l) => {
      if (!i) return;
      const u = l.clientX - s, f = l.clientY - o, m = a + u, w = d + f;
      xe(t, "--jx-drag-x", m), xe(t, "--jx-drag-y", w), t.dispatchEvent(new CustomEvent(lt.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: u,
          dy: f,
          x: m,
          y: w
        }
      }));
    }, h = (l) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(lt.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: N(t, "--jx-drag-x"),
            y: N(t, "--jx-drag-y")
          }
        }));
      }
    };
    return b(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), b(t, "ui-junction-drag", M(r, "pointerdown", c)), b(t, "ui-junction-drag", M(r, "pointermove", p)), b(t, "ui-junction-drag", M(r, "pointerup", h)), b(t, "ui-junction-drag", M(r, "pointercancel", h)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Wt(t, "ui-junction-drag"), this;
  }
}, oa = class extends Pt {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = An(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, s = 0, o = 0, a = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), c = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), p = (u) => {
      u.button === 0 && (u.target !== n && !n.contains(u.target) || (r = !0, i = u.clientX, s = u.clientY, o = t.offsetWidth, a = t.offsetHeight, n.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(ct.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: o,
          height: a
        }
      }))));
    }, h = (u) => {
      if (!r) return;
      const f = Math.max(d, o + (u.clientX - i)), m = Math.max(c, a + (u.clientY - s));
      t.style.width = `${f}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(ct.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: f,
          height: m
        }
      }));
    }, l = (u) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(u.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(ct.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return b(t, "ui-junction-resize", M(n, "pointerdown", p)), b(t, "ui-junction-resize", M(n, "pointermove", h)), b(t, "ui-junction-resize", M(n, "pointerup", l)), b(t, "ui-junction-resize", M(n, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Wt(t, "ui-junction-resize"), this;
  }
};
new ia();
new aa();
new oa();
function dt(e, t) {
  const n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x, t.x), s = Math.max(e.y, t.y);
  return {
    left: n,
    top: r,
    right: i,
    bottom: s,
    width: i - n,
    height: s - r
  };
}
var Me = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, ft = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, pt = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, sa = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), Be = globalThis[sa] ??= /* @__PURE__ */ new WeakMap(), x = (e, t, n) => {
  const r = Be.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), Be.set(e, r);
}, Ft = (e, t) => {
  const n = Be.get(e), r = n?.get(t);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(t), n.size === 0 && Be.delete(e);
  }
}, R = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, Vn = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, ua = class extends kt {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let i = !1, s = {
      x: 0,
      y: 0
    }, o = {
      x: 0,
      y: 0
    };
    const a = (f) => {
      const m = t.getBoundingClientRect();
      return {
        x: f.clientX - m.left,
        y: f.clientY - m.top
      };
    }, d = () => {
      const f = dt(s, o);
      if (f.width < 1 && f.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${f.left}px`, n.style.top = `${f.top}px`, n.style.width = `${f.width}px`, n.style.height = `${f.height}px`;
    }, c = (f) => {
      f.button === 0 && (f.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (f.target === t || t.contains(f.target)) && (i = !0, s = a(f), o = { ...s }, t.setPointerCapture(f.pointerId), t.dispatchEvent(new CustomEvent(Me.start, {
        bubbles: !0,
        detail: {
          a: { ...s },
          b: { ...o },
          host: t
        }
      })), d()));
    }, p = (f) => {
      if (!i) return;
      o = a(f), d();
      const m = dt(s, o);
      t.dispatchEvent(new CustomEvent(Me.move, {
        bubbles: !0,
        detail: {
          a: { ...s },
          b: { ...o },
          box: m,
          host: t
        }
      }));
    }, h = (f) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(f.pointerId);
      } catch {
      }
      const m = dt(s, o);
      t.dispatchEvent(new CustomEvent(Me.end, {
        bubbles: !0,
        detail: {
          a: { ...s },
          b: { ...o },
          box: m,
          host: t
        }
      }));
    }, l = (f) => {
      i && h(f);
    }, u = (f) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(f.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Me.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return x(t, "ui-junction-select", () => {
      n.remove();
    }), x(t, "ui-junction-select", E(t, "pointerdown", c)), x(t, "ui-junction-select", E(t, "pointermove", p)), x(t, "ui-junction-select", E(t, "pointerup", l)), x(t, "ui-junction-select", E(t, "pointercancel", u)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Ft(t, "ui-junction-select"), this;
  }
}, la = class extends kt {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    be(t, "--jx-drag-x", R(t, "--jx-drag-x")), be(t, "--jx-drag-y", R(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = Vn(t, "data-junction-drag-handle", t);
    let i = !1, s = 0, o = 0, a = 0, d = 0;
    const c = (l) => {
      l.button === 0 && (l.target !== r && !r.contains(l.target) || (i = !0, s = l.clientX, o = l.clientY, a = R(t, "--jx-drag-x"), d = R(t, "--jx-drag-y"), r.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(ft.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: l.clientX,
          clientY: l.clientY,
          baseX: a,
          baseY: d
        }
      }))));
    }, p = (l) => {
      if (!i) return;
      const u = l.clientX - s, f = l.clientY - o, m = a + u, w = d + f;
      be(t, "--jx-drag-x", m), be(t, "--jx-drag-y", w), t.dispatchEvent(new CustomEvent(ft.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: u,
          dy: f,
          x: m,
          y: w
        }
      }));
    }, h = (l) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(ft.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: R(t, "--jx-drag-x"),
            y: R(t, "--jx-drag-y")
          }
        }));
      }
    };
    return x(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), x(t, "ui-junction-drag", E(r, "pointerdown", c)), x(t, "ui-junction-drag", E(r, "pointermove", p)), x(t, "ui-junction-drag", E(r, "pointerup", h)), x(t, "ui-junction-drag", E(r, "pointercancel", h)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Ft(t, "ui-junction-drag"), this;
  }
}, ca = class extends kt {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Vn(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, s = 0, o = 0, a = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), c = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), p = (u) => {
      u.button === 0 && (u.target !== n && !n.contains(u.target) || (r = !0, i = u.clientX, s = u.clientY, o = t.offsetWidth, a = t.offsetHeight, n.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(pt.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: o,
          height: a
        }
      }))));
    }, h = (u) => {
      if (!r) return;
      const f = Math.max(d, o + (u.clientX - i)), m = Math.max(c, a + (u.clientY - s));
      t.style.width = `${f}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(pt.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: f,
          height: m
        }
      }));
    }, l = (u) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(u.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(pt.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return x(t, "ui-junction-resize", E(n, "pointerdown", p)), x(t, "ui-junction-resize", E(n, "pointermove", h)), x(t, "ui-junction-resize", E(n, "pointerup", l)), x(t, "ui-junction-resize", E(n, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Ft(t, "ui-junction-resize"), this;
  }
};
new ua();
new la();
new ca();
export {
  yo as DOMMixin,
  la as JunctionDragMixin,
  ca as JunctionResizeMixin,
  ua as JunctionSelectMixin,
  Va as MATCH,
  Fa as MOC,
  ht as MOCElement,
  va as RAFBehavior,
  La as REGEX,
  ga as ROOT,
  no as WavyShapedCircle,
  fa as __exportProperties,
  Ot as __registeredCssProperties,
  S as addEvent,
  Re as addEvents,
  Pa as addEventsList,
  Ar as addRoot,
  re as adoptedBlobMap,
  j as adoptedMap,
  Qn as animateHide,
  Kn as animateShow,
  vt as availSize,
  _a as bbh,
  Ba as bbw,
  gr as bindBehavior,
  Sr as bindMixins,
  wr as bindStore,
  ke as borderBoxHeight,
  Te as borderBoxWidth,
  dn as boundBehaviors,
  L as boundMixinSet,
  Ua as cbh,
  Da as cbw,
  qa as changeZoom,
  Za as classes,
  Gn as computeCaretPosition,
  Ga as computeCaretPositionFromClient,
  Wa as containsOrSelf,
  Ne as contentBoxHeight,
  Pe as contentBoxWidth,
  za as createElementVanilla,
  kr as deleteStyleProperty,
  pa as detectMobile,
  Sa as doBorderObserve,
  wa as doContentObserve,
  dr as fetchAndCache,
  fr as fetchAsInline,
  Xa as fixOrientToScreen,
  Ha as fixedClientZoom,
  io as getAdoptedStyleRule,
  an as getAvailSize,
  Ia as getBoundingOrientRect,
  Zn as getCorrectOrientation,
  le as getElementRelated,
  fo as getElementZoom,
  Ra as getEventTarget,
  $n as getOffsetParent,
  ha as getOffsetParentChain,
  ho as getPadding,
  ie as getPropertyValue,
  po as getPxValue,
  br as getStoresOfElement,
  rr as getStyleLayer,
  Tt as getStyleRule,
  lo as getTransform,
  co as getTransformOrigin,
  Oa as getZoom,
  Eo as handleAttribute,
  wo as handleDataset,
  bo as handleHidden,
  xo as handleProperty,
  So as handleStyleChange,
  Ye as hasParent,
  oo as hash,
  Ma as html,
  ka as includeSelf,
  Aa as indexOf,
  on as initTextStyle,
  to as initVisibility,
  Ta as isElement,
  $a as isInFocus,
  Wn as isMobile,
  ma as isNearlyIdentity,
  ja as isValidParent,
  mr as loadAsAdopted,
  hr as loadBlobStyle,
  ne as loadInlineStyle,
  cn as loadStyleSheet,
  On as makeRAFCycle,
  Ya as measureInputInFocus,
  Yn as measureText,
  Be as mixinDisposers,
  q as mixinElements,
  We as mixinNamespace,
  de as mixinRegistry,
  zr as nameRegistryF,
  ce as namedStoreMaps,
  eo as observeAttribute,
  Lt as observeAttributeBySelector,
  Qa as observeBorderBox,
  nr as observeBySelector,
  Ka as observeContentBox,
  Ht as onBorderObserve,
  It as onContentObserve,
  G as orientOf,
  Dn as orientationNumberMap,
  Kt as parseLength,
  vr as parseOrigin,
  rn as passiveOpts,
  uo as preloadStyle,
  Jn as readLauncherLayoutFromElement,
  mo as reflectBehaviors,
  go as reflectMixins,
  vo as reflectStores,
  Tr as registerMixin,
  Ke as removeAdopted,
  Bt as removeEvent,
  Na as removeEvents,
  Ja as resolveGridCellFromClientPoint,
  gt as roots,
  ba as setAttributes,
  ya as setAttributesIfNull,
  Ca as setChecked,
  xa as setIdleInterval,
  so as setProperty,
  ao as setStyleInRule,
  De as setStyleProperty,
  un as setStylePropertyFallback,
  cr as setStylePropertyTyped,
  pr as setStyleRule,
  ro as setStyleRules,
  Dt as setStyleURL,
  qn as throttleMap,
  mt as unfixedClientZoom,
  yt as updateAllMixins,
  fn as updateMixinAttributes,
  Vr as updateMixinAttributesAll,
  Lr as updateMixinAttributesAllInRoots,
  Un as updateVP,
  Ea as url,
  Xn as whenAnyScreenChanges,
  Bn as zoomOf,
  In as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwsIHRyeVN0cmluZ0FzTnVtYmVyIH0gZnJvbSBcIkBmZXN0LWxpYi9jb3JlXCI7XG5cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvUHJvcGVydGllcy50c1xudmFyIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyA9IGdsb2JhbFRoaXNbX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5bXG5cdHtcblx0XHRuYW1lOiBcIi0tc2NyZWVuLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jbGlwLWZyZXFcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGl4ZWwtcmF0aW9cIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMVwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudC15XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC1sZWZ0XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC14XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC15XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH1cbl0uZm9yRWFjaCgob3B0aW9ucykgPT4ge1xuXHRpZiAodHlwZW9mIENTUyA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBDU1M/LnJlZ2lzdGVyUHJvcGVydHkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdGNvbnN0IG5hbWUgPSBTdHJpbmcob3B0aW9ucz8ubmFtZSB8fCBcIlwiKS50cmltKCk7XG5cdGlmICghbmFtZSB8fCBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmhhcyhuYW1lKSkgcmV0dXJuO1xuXHR0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KG9wdGlvbnMpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKCEoU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIikpIGNvbnNvbGUud2FybihlKTtcblx0fSBmaW5hbGx5IHtcblx0XHRfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmFkZChuYW1lKTtcblx0fVxufSk7XG52YXIgX19leHBvcnRQcm9wZXJ0aWVzID0gKCkgPT4ge307XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9EZXRlY3QudHNcbnZhciBpc01vYmlsZSA9ICgpID0+IHtcblx0bGV0IGNoZWNrID0gbmF2aWdhdG9yPy51c2VyQWdlbnREYXRhPy5tb2JpbGUgfHwgZmFsc2U7XG5cdCgoYSkgPT4ge1xuXHRcdGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkgY2hlY2sgPSB0cnVlO1xuXHR9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgZ2xvYmFsVGhpcy5vcGVyYSk7XG5cdHJldHVybiBjaGVjaztcbn07XG52YXIgZGV0ZWN0TW9iaWxlID0gKCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC9BbmRyb2lkL2ksXG5cdFx0L3dlYk9TL2ksXG5cdFx0L2lQaG9uZS9pLFxuXHRcdC9pUGFkL2ksXG5cdFx0L2lQb2QvaSxcblx0XHQvQmxhY2tCZXJyeS9pLFxuXHRcdC9XaW5kb3dzIFBob25lL2lcblx0XS5zb21lKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2guYmluZChuYXZpZ2F0b3IudXNlckFnZW50KSkgJiYgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgJiYgZ2xvYmFsVGhpcy5tYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9VdGlscy50c1xudmFyIGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrID0gKCkgPT4gKHtcblx0ZGlkVGltZW91dDogZmFsc2UsXG5cdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcbn0pO1xudmFyIHJ1bldoZW5JZGxlJDEgPSAoY2IsIHRpbWVvdXQgPSAxZTMpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayhjYiwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc2V0VGltZW91dCgoKSA9PiBjYihjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjaygpKSwgMCk7XG59O1xudmFyIGdldE9mZnNldFBhcmVudCA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiBlbGVtZW50Py5vZmZzZXRQYXJlbnQgPz8gZWxlbWVudD8uaG9zdDtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4gPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBwYXJlbnRzID0gW107XG5cdGxldCBjdXJyZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRjb25zdCBwYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoY3VycmVudCk7XG5cdFx0aWYgKHBhcmVudCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MSHRtbEVsZW1lbnQpIGJyZWFrO1xuXHRcdGlmIChjdXJyZW50ID0gcGFyZW50KSBwYXJlbnRzLnB1c2goY3VycmVudCk7XG5cdH1cblx0cmV0dXJuIHBhcmVudHM7XG59O1xudmFyIGlzTmVhcmx5SWRlbnRpdHkgPSAobWF0cml4LCBlcHNpbG9uID0gMWUtNikgPT4ge1xuXHRyZXR1cm4gTWF0aC5hYnMobWF0cml4LmEgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmIpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYykgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5kIC0gMSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5lKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmYpIDwgZXBzaWxvbjtcbn07XG52YXIgbWFrZVJBRkN5Y2xlID0gKCkgPT4ge1xuXHRjb25zdCBjb250cm9sID0ge1xuXHRcdGNhbmNlbGVkOiBmYWxzZSxcblx0XHRyQUZzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHRcdGxhc3Q6IG51bGwsXG5cdFx0Y2FuY2VsKCkge1xuXHRcdFx0dGhpcy5jYW5jZWxlZCA9IHRydWU7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxhc3QpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHRzaGVkdWxlKGNiKSB7XG5cdFx0XHR0aGlzLnJBRnMuYWRkKGNiKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0fTtcblx0KGFzeW5jICgpID0+IHtcblx0XHR3aGlsZSAoIWNvbnRyb2w/LmNhbmNlbGVkKSB7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbCgoY29udHJvbD8uckFGcz8udmFsdWVzPy4oKSA/PyBbXSk/Lm1hcD8uKChyQUYpID0+IFByb21pc2UudHJ5KHJBRik/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpKSk7XG5cdFx0XHRjb250cm9sLnJBRnM/LmNsZWFyPy4oKTtcblx0XHRcdGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHtcblx0XHRcdFx0Y29udHJvbC5sYXN0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcyk7XG5cdFx0XHR9KTtcblx0XHRcdGVsc2UgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJlcywgMTYpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KSgpO1xuXHRyZXR1cm4gY29udHJvbDtcbn07XG52YXIgUkFGQmVoYXZpb3IgPSAoc2hlZCA9IG1ha2VSQUZDeWNsZSgpKSA9PiB7XG5cdHJldHVybiAoY2IpID0+IHNoZWQuc2hlZHVsZShjYik7XG59O1xudmFyIFJPT1QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xudmFyIHNldEF0dHJpYnV0ZXNJZk51bGwgPSAoZWxlbWVudCwgYXR0cnMgPSB7fSkgPT4ge1xuXHRpZiAoIWF0dHJzIHx8IHR5cGVvZiBhdHRycyAhPSBcIm9iamVjdFwiIHx8ICFlbGVtZW50KSByZXR1cm47XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0Y29uc3Qgb2xkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgaWYgKHZhbHVlICE9IG9sZCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgb2xkID09IFwiXCIgPyB2YWx1ZSA/PyBvbGQgOiBvbGQgPz8gdmFsdWUpO1xuXHR9KTtcbn07XG52YXIgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPz8gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSkpO1xuXHR9KTtcbn07XG52YXIgdGhyb3R0bGVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIHNldElkbGVJbnRlcnZhbCA9IChjYiwgdGltZW91dCA9IDFlMywgLi4uYXJncykgPT4ge1xuXHRjb25zdCBzdGF0dXMgPSB7XG5cdFx0cnVubmluZzogdHJ1ZSxcblx0XHRjYW5jZWw6ICgpID0+IHtcblx0XHRcdHN0YXR1cy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXHRydW5XaGVuSWRsZSQxKGFzeW5jICgpID0+IHtcblx0XHRpZiAoIWNiIHx8IHR5cGVvZiBjYiAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0XHR3aGlsZSAoc3RhdHVzLnJ1bm5pbmcpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKFtQcm9taXNlLnRyeShjYiwgLi4uYXJncyksIG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHRpbWVvdXQpKV0pLmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbnkoW25ldyBQcm9taXNlKChyKSA9PiBydW5XaGVuSWRsZSQxKHIsIHRpbWVvdXQpKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSk7XG5cdFx0fVxuXHRcdHN0YXR1cy5jYW5jZWwgPSAoKSA9PiB7fTtcblx0fSwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc3RhdHVzPy5jYW5jZWw7XG59O1xuaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFzeW5jICgpID0+IHtcblx0d2hpbGUgKHRydWUpIHtcblx0XHR0aHJvdHRsZU1hcC5mb3JFYWNoKChjYikgPT4gY2I/LigpKTtcblx0XHRhd2FpdCBuZXcgUHJvbWlzZSgocikgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHIpKTtcblx0fVxufSk7XG52YXIgYm9yZGVyQm94V2lkdGggPSBTeW1ib2woXCJAYm9yZGVyLWJveC13aWR0aFwiKTtcbnZhciBib3JkZXJCb3hIZWlnaHQgPSBTeW1ib2woXCJAYm9yZGVyLWJveC1oZWlnaHRcIik7XG52YXIgY29udGVudEJveFdpZHRoID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LXdpZHRoXCIpO1xudmFyIGNvbnRlbnRCb3hIZWlnaHQgPSBTeW1ib2woXCJAY29udGVudC1ib3gtaGVpZ2h0XCIpO1xudmFyIG9uQm9yZGVyT2JzZXJ2ZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9uQ29udGVudE9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBkb0NvbnRlbnRPYnNlcnZlID0gKGVsZW1lbnQsIGNiID0gKCkgPT4ge30pID0+IHtcblx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuXHRpZiAoIW9uQ29udGVudE9ic2VydmUuaGFzKGVsZW1lbnQpKSB7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94V2lkdGhdID0gZWxlbWVudC5jbGllbnRXaWR0aDtcblx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRCb3hTaXplID0gZW50cnkuY29udGVudEJveFNpemVbMF07XG5cdFx0XHRcdGlmIChjb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IE1hdGgubWluKGNvbnRlbnRCb3hTaXplLmlubGluZVNpemUsIGVsZW1lbnQuY2xpZW50V2lkdGgpO1xuXHRcdFx0XHRcdGVsZW1lbnRbY29udGVudEJveEhlaWdodF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Db250ZW50T2JzZXJ2ZS5zZXQoZWxlbWVudCwgb2JzZXJ2ZXIpO1xuXHRcdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJjb250ZW50LWJveFwiIH0pO1xuXHR9XG59O1xudmFyIGRvQm9yZGVyT2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkJvcmRlck9ic2VydmUuaGFzKGVsZW1lbnQpKSB7XG5cdFx0ZWxlbWVudFtib3JkZXJCb3hXaWR0aF0gPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94SGVpZ2h0XSA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5ib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGJvcmRlckJveFNpemUgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50Lm9mZnNldFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBNYXRoLm1pbihib3JkZXJCb3hTaXplLmJsb2NrU2l6ZSwgZWxlbWVudC5vZmZzZXRIZWlnaHQpO1xuXHRcdFx0XHRcdGNiPy4oZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRvbkJvcmRlck9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiYm9yZGVyLWJveFwiIH0pO1xuXHR9XG59O1xudmFyIHVybCA9ICh0eXBlLCAuLi5zb3VyY2UpID0+IHtcblx0cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2Ioc291cmNlLCB7IHR5cGUgfSkpO1xufTtcbnZhciBodG1sID0gKHNvdXJjZSwgdHlwZSA9IFwidGV4dC9odG1sXCIpID0+IHtcblx0Y29uc3QgcGFyc2VkID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzb3VyY2UsIHR5cGUpO1xuXHRyZXR1cm4gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCJ0ZW1wbGF0ZVwiKSA/PyBwYXJzZWQucXVlcnlTZWxlY3RvcihcIipcIik7XG59O1xudmFyIHNldENoZWNrZWQgPSAoaW5wdXQsIHZhbHVlLCBldikgPT4ge1xuXHRpZiAodmFsdWUgIT0gbnVsbCAmJiBpbnB1dC5jaGVja2VkICE9IHZhbHVlKSB7XG5cdFx0aWYgKGlucHV0Py5bXCJ0eXBlXCJdID09IFwiY2hlY2tib3hcIiB8fCBpbnB1dD8uW1widHlwZVwiXSA9PSBcInJhZGlvXCIgJiYgIWlucHV0Py5jaGVja2VkKSB7XG5cdFx0XHRpbnB1dD8uY2xpY2s/LigpO1xuXHRcdFx0ZXY/LnByZXZlbnREZWZhdWx0Py4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5wdXQuY2hlY2tlZCA9ICEhdmFsdWU7XG5cdFx0XHRpbnB1dD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBFdmVudChcImNoYW5nZVwiLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdH1cbn07XG52YXIgaXNWYWxpZFBhcmVudCA9IChwYXJlbnQpID0+IHtcblx0cmV0dXJuIHBhcmVudCAhPSBudWxsICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmICEocGFyZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCB8fCBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MQm9keUVsZW1lbnQpID8gcGFyZW50IDogbnVsbDtcbn07XG52YXIgaW5kZXhPZiA9IChlbGVtZW50LCBub2RlKSA9PiB7XG5cdGlmIChlbGVtZW50ID09IG51bGwgfHwgbm9kZSA9PSBudWxsKSByZXR1cm4gLTE7XG5cdHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQ/LmNoaWxkTm9kZXMgPz8gW10pPy5pbmRleE9mPy4obm9kZSkgPz8gLTE7XG59O1xudmFyIE1BVENIID0gXCIoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopXCI7XG52YXIgUkVHRVggPSBcIl4oPzooLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopKXxeIygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKil8XlxcXFwuKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXFsoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiO1xudmFyIGNyZWF0ZUVsZW1lbnRWYW5pbGxhID0gKHNlbGVjdG9yKSA9PiB7XG5cdGlmIChzZWxlY3RvciA9PSBcIjpmcmFnbWVudDpcIikgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0Y29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KTtcblx0Zm9yICh2YXIgbm9kZSA9IGNyZWF0ZShcImRpdlwiKSwgbWF0Y2gsIGNsYXNzTmFtZSA9IFwiXCI7IHNlbGVjdG9yICYmIChtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCIpKTspIHtcblx0XHRpZiAobWF0Y2hbMV0pIG5vZGUgPSBjcmVhdGUobWF0Y2hbMV0pO1xuXHRcdGlmIChtYXRjaFsyXSkgbm9kZS5pZCA9IG1hdGNoWzJdO1xuXHRcdGlmIChtYXRjaFszXSkgY2xhc3NOYW1lICs9IFwiIFwiICsgbWF0Y2hbM107XG5cdFx0aWYgKG1hdGNoWzRdKSBub2RlLnNldEF0dHJpYnV0ZShtYXRjaFs0XSwgbWF0Y2hbN10gfHwgXCJcIik7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuXHR9XG5cdGlmIChjbGFzc05hbWUpIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNsaWNlKDEpO1xuXHRyZXR1cm4gbm9kZTtcbn07XG52YXIgaXNFbGVtZW50ID0gKGVsKSA9PiB7XG5cdHJldHVybiBlbCAhPSBudWxsICYmIChlbCBpbnN0YW5jZW9mIE5vZGUgfHwgZWwgaW5zdGFuY2VvZiBUZXh0IHx8IGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIENvbW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gZWwgOiBudWxsO1xufTtcbnZhciBpbmNsdWRlU2VsZiA9ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB7XG5cdHJldHVybiB0YXJnZXQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPz8gKHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSA/IHRhcmdldCA6IG51bGwpO1xufTtcbnZhciBoYXNQYXJlbnQgPSAoY3VycmVudCwgcGFyZW50KSA9PiB7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0aWYgKCEoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICgoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSA9PT0gKHBhcmVudD8uZWxlbWVudCA/PyBwYXJlbnQpKSByZXR1cm4gdHJ1ZTtcblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50ID8/IChjdXJyZW50LnBhcmVudE5vZGUgPT0gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pID8gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0IDogY3VycmVudD8ucGFyZW50Tm9kZSk7XG5cdH1cbn07XG52YXIgcGFzc2l2ZU9wdHMgPSB7fTtcbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG5cdGNvbnN0IHdyID0gdHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQ/LmRlcmVmID8gbmV3IFdlYWtSZWYodGFyZ2V0KSA6IHRhcmdldDtcblx0cmV0dXJuICgpID0+IHdyPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG5mdW5jdGlvbiByZW1vdmVFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxudmFyIGFkZEV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gYWRkRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogYWRkRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgYWRkRXZlbnRzTGlzdCA9IChlbCwgZXZlbnRzKSA9PiB7XG5cdGlmIChldmVudHMpIHtcblx0XHRsZXQgZW50cmllcyA9IGV2ZW50cztcblx0XHRpZiAoZXZlbnRzIGluc3RhbmNlb2YgTWFwKSBlbnRyaWVzID0gWy4uLmV2ZW50cy5lbnRyaWVzKCldO1xuXHRcdGVsc2UgZW50cmllcyA9IFsuLi5PYmplY3QuZW50cmllcyhldmVudHMpXTtcblx0XHRyZXR1cm4gZW50cmllcy5tYXAoKFtuYW1lLCBsaXN0XSkgPT4gKChpc0FycmF5T3JJdGVyYWJsZShsaXN0KSA/IFsuLi5saXN0XSA6IGxpc3QpID8/IFtdKT8ubWFwPy4oKGNicykgPT4ge1xuXHRcdFx0cmV0dXJuIGFkZEV2ZW50KGVsLCBuYW1lLCBjYnMpO1xuXHRcdH0pKTtcblx0fVxufTtcbnZhciByZW1vdmVFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGdldEV2ZW50VGFyZ2V0ID0gKGV2KSA9PiB7XG5cdGlmICghZXYpIHJldHVybiBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBub2RlO1xuXHR9XG5cdGNvbnN0IHRhcmdldCA9IGV2Py50YXJnZXQ7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gdGFyZ2V0O1xuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgY29udGFpbnNPclNlbGYgPSAoYSwgYiwgZXYpID0+IHtcblx0aWYgKGIgPT0gbnVsbCB8fCAhKGIgaW5zdGFuY2VvZiBOb2RlKSAmJiBiPy5lbGVtZW50ID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gYiB8fCAoYT8uZWxlbWVudCA/PyBhKSA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRjb25zdCBhRWwgPSBhPy5lbGVtZW50ID8/IGE7XG5cdFx0Y29uc3QgYkVsID0gYj8uZWxlbWVudCA/PyBiO1xuXHRcdGlmIChwYXRoLmluY2x1ZGVzKGFFbCkgJiYgcGF0aC5pbmNsdWRlcyhiRWwpKSB7XG5cdFx0XHRjb25zdCBhSW5kZXggPSBwYXRoLmluZGV4T2YoYUVsKTtcblx0XHRcdGNvbnN0IGJJbmRleCA9IHBhdGguaW5kZXhPZihiRWwpO1xuXHRcdFx0aWYgKGJJbmRleCA+PSAwICYmIGFJbmRleCA+PSAwICYmIGJJbmRleCA8IGFJbmRleCkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChhPy5jb250YWlucz8uKGI/LmVsZW1lbnQgPz8gYikgfHwgYT8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgTU9DRWxlbWVudCA9IChlbGVtZW50LCBzZWxlY3RvciwgZXYpID0+IHtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBwYXRoKSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG5cdFx0XHRpZiAobm9kZS5tYXRjaGVzPy4oc2VsZWN0b3IpKSByZXR1cm4gbm9kZTtcblx0XHR9XG5cdH1cblx0Y29uc3Qgc2VsZiA9IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWxlY3RvcikgPyBlbGVtZW50IDogbnVsbDtcblx0Y29uc3QgaG9zdCA9IChlbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID8/IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkpPy5ob3N0O1xuXHRjb25zdCBob3N0TWF0Y2hlZCA9IGhvc3Q/Lm1hdGNoZXM/LihzZWxlY3RvcikgPyBob3N0IDogbnVsbDtcblx0Y29uc3QgY2xvc2VzdCA9IGVsZW1lbnQ/LmNsb3Nlc3Q/LihzZWxlY3RvcikgPz8gc2VsZj8uY2xvc2VzdD8uKHNlbGVjdG9yKSA/PyBob3N0TWF0Y2hlZD8uY2xvc2VzdD8uKHNlbGVjdG9yKSA/PyBudWxsO1xuXHRyZXR1cm4gc2VsZiA/PyBjbG9zZXN0ID8/IGhvc3RNYXRjaGVkO1xufTtcbnZhciBNT0MgPSAoZWxlbWVudCwgc2VsZWN0b3IpID0+IHtcblx0cmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvcik7XG59O1xudmFyIGlzSW5Gb2N1cyA9IChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCwgZGlyID0gXCJwYXJlbnRcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKGVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmICFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSh7XG5cdFx0Y2hlY2tPcGFjaXR5OiB0cnVlLFxuXHRcdGNoZWNrVmlzaWJpbGl0eUNTUzogdHJ1ZVxuXHR9KSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoIWVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmIGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsICYmIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gIT09IFwiZml4ZWRcIikgcmV0dXJuIGZhbHNlO1xuXHRsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0d2hpbGUgKGFjdGl2ZSAmJiBhY3RpdmUuc2hhZG93Um9vdCAmJiBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50KSBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuXHRjb25zdCBpc0ZvY3VzZWQgPSBhY3RpdmUgPT09IGVsZW1lbnQgfHwgaGFzUGFyZW50KGFjdGl2ZSwgZWxlbWVudCk7XG5cdGNvbnN0IGlzSG92ZXJlZCA9IGVsZW1lbnQubWF0Y2hlcyhcIjpob3ZlclwiKTtcblx0aWYgKCFpc0ZvY3VzZWQgJiYgIWlzSG92ZXJlZCAmJiAhc2VsZWN0b3JPckVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKHNlbGVjdG9yT3JFbGVtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBzZWxlY3Rvck9yRWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKGRpciA9PT0gXCJwYXJlbnRcIikgcmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gaXNGb2N1c2VkID8gYWN0aXZlIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiOmhvdmVyXCIpIHx8IGVsZW1lbnQ7XG5cdFx0XHRcdGNvbnN0IGFsdENuZCA9ICEhTU9DRWxlbWVudCh0YXJnZXQsIHNlbGVjdG9yT3JFbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I/LihzZWxlY3Rvck9yRWxlbWVudCkgIT0gbnVsbCB8fCBlbGVtZW50Py5tYXRjaGVzPy4oc2VsZWN0b3JPckVsZW1lbnQpIHx8IGFsdENuZDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHNlbGVjdG9yT3JFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiBoYXNQYXJlbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpIHx8IGZhbHNlO1xuXHRcdFx0ZWxzZSByZXR1cm4gaGFzUGFyZW50KHNlbGVjdG9yT3JFbGVtZW50LCBlbGVtZW50KSB8fCBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvWm9vbS50c1xudmFyIGdldFpvb20gPSAoKSA9PiB7XG5cdGlmIChcImN1cnJlbnRDU1Nab29tXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdHJldHVybiBwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zY2FsaW5nXCIpIHx8IFwiMVwiKSB8fCAxO1xufTtcbnZhciB6b29tVmFsdWVzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xudmFyIHpvb21WYWx1ZXMgPSBnbG9iYWxUaGlzW3pvb21WYWx1ZXNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB6b29tT2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gem9vbVZhbHVlcy5nZXRPckluc2VydENvbXB1dGVkKGVsZW1lbnQsICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiLnVpLW9yaWVudGJveFwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCIudWktb3JpZW50Ym94XCIpIHx8IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYgKGNvbnRhaW5lcj8uem9vbSkgcmV0dXJuIGNvbnRhaW5lcj8uem9vbSB8fCAxO1xuXHRcdGlmIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgcmV0dXJuIGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdH0pO1xufTtcbnZhciBjaGFuZ2Vab29tID0gKHNjYWxlID0gMSkgPT4ge1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNjYWxpbmdcIiwgc2NhbGUpO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzY2FsaW5nXCIsIHtcblx0XHRkZXRhaWw6IHsgem9vbTogc2NhbGUgfSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpO1xuXHRyZXR1cm4gc2NhbGU7XG59O1xudmFyIGZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gIT0gbnVsbCA/IDEgOiB6b29tT2YoZWxlbWVudCkpIHx8IDE7XG59O1xudmFyIHVuZml4ZWRDbGllbnRab29tID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSA9PSBudWxsID8gMSA6IGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tKSB8fCAxO1xufTtcbnZhciBvcmllbnRPZiA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IChlbGVtZW50Py5tYXRjaGVzPy4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpID8gZWxlbWVudCA6IG51bGwpIHx8IGVsZW1lbnQ/LmNsb3Nlc3Q/LihcIltvcmllbnRdLCBbZGF0YS1taXhpbj1cXFwidWktb3JpZW50Ym94XFxcIl1cIikgfHwgZWxlbWVudDtcblx0aWYgKGNvbnRhaW5lcj8uaGFzQXR0cmlidXRlPy4oXCJvcmllbnRcIikpIHJldHVybiBwYXJzZUludChjb250YWluZXI/LmdldEF0dHJpYnV0ZT8uKFwib3JpZW50XCIpIHx8IFwiMFwiKSB8fCAwO1xuXHRpZiAoY29udGFpbmVyPy5vcmllbnQgIT0gbnVsbCAmJiBOdW1iZXIuaXNGaW5pdGUoTnVtYmVyKGNvbnRhaW5lci5vcmllbnQpKSkgcmV0dXJuIE51bWJlcihjb250YWluZXIub3JpZW50KSB8fCAwO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGNvbnRhaW5lcj8uc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcIi0tb3JpZW50XCIpIHx8ICh0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSA9PT0gXCJmdW5jdGlvblwiICYmIGNvbnRhaW5lciA/IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1vcmllbnRcIikgOiBcIlwiKSB8fCBcIlwiO1xuXHRcdGNvbnN0IG4gPSBwYXJzZUludChTdHJpbmcocmF3KS50cmltKCksIDEwKTtcblx0XHRpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbjtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gMDtcbn07XG52YXIgZ2V0Qm91bmRpbmdPcmllbnRSZWN0ID0gKGVsZW1lbnQsIG9yaWVudCA9IG51bGwpID0+IHtcblx0Y29uc3Qgem9vbSA9IHVuZml4ZWRDbGllbnRab29tKGVsZW1lbnQpIHx8IDE7XG5cdGNvbnN0IGJveCA9IGVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XG5cdGNvbnN0IG5ieCA9IHtcblx0XHRsZWZ0OiBib3g/LmxlZnQgLyB6b29tLFxuXHRcdHJpZ2h0OiBib3g/LnJpZ2h0IC8gem9vbSxcblx0XHR0b3A6IGJveD8udG9wIC8gem9vbSxcblx0XHRib3R0b206IGJveD8uYm90dG9tIC8gem9vbSxcblx0XHR3aWR0aDogYm94Py53aWR0aCAvIHpvb20sXG5cdFx0aGVpZ2h0OiBib3g/LmhlaWdodCAvIHpvb21cblx0fTtcblx0Y29uc3Qgb3JfaSA9IG9yaWVudCA/PyAob3JpZW50T2YoZWxlbWVudCkgfHwgMCk7XG5cdGNvbnN0IHZ2ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGw7XG5cdGNvbnN0IHNpemUgPSBbKCh2dj8ud2lkdGggPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRXaWR0aCA/PyB3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMSkgLyB6b29tLCAoKHZ2Py5oZWlnaHQgPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRIZWlnaHQgPz8gd2luZG93LmlubmVySGVpZ2h0KSB8fCAxKSAvIHpvb21dO1xuXHRjb25zdCBbbGVmdF8sIHRvcF9dID0gY3Z0X2NzX3RvX29zKFtuYngubGVmdCwgbmJ4LnRvcF0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbcmlnaHRfLCBib3R0b21fXSA9IGN2dF9jc190b19vcyhbbmJ4LnJpZ2h0LCBuYnguYm90dG9tXSwgc2l6ZSwgb3JfaSk7XG5cdGNvbnN0IFtsZWZ0LCByaWdodF0gPSBvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gW2xlZnRfLCByaWdodF9dIDogW3JpZ2h0XywgbGVmdF9dO1xuXHRjb25zdCBbdG9wLCBib3R0b21dID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMSA/IFt0b3BfLCBib3R0b21fXSA6IFtib3R0b21fLCB0b3BfXTtcblx0Y29uc3QgW3dpZHRoLCBoZWlnaHRdID0gb3JfaSAlIDIgPyBbbmJ4LmhlaWdodCwgbmJ4LndpZHRoXSA6IFtuYngud2lkdGgsIG5ieC5oZWlnaHRdO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aCxcblx0XHRoZWlnaHRcblx0fTtcbn07XG52YXIgYmJ3ID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBiYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtib3JkZXJCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoIDogZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xudmFyIGNidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQgOiBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBjYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQ7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9WaWV3cG9ydC50c1xudmFyIHJ1bldoZW5JZGxlID0gKGNiLCB0aW1lb3V0ID0gMTAwKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2soY2IsIHsgdGltZW91dCB9KTtcblx0cmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gY2Ioe1xuXHRcdGRpZFRpbWVvdXQ6IGZhbHNlLFxuXHRcdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcblx0fSksIDApO1xufTtcbnZhciBnZXRBdmFpbFNpemUgPSAoKSA9PiB7XG5cdGNvbnN0IGwgPSB0eXBlb2YgbWF0Y2hNZWRpYSAhPSBcInVuZGVmaW5lZFwiID8gbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyA6IGZhbHNlO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCB2dkJsb2NrID0gdnYgPyB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IGAke3Z2LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3Z2LmhlaWdodH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IGAke3Z2Lm9mZnNldExlZnR9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtdG9wXCI6IGAke3Z2Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh2di5zY2FsZSA/PyAxKVxuXHR9IDoge1xuXHRcdFwiLS12di13aWR0aFwiOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gYCR7d2luZG93LmlubmVyV2lkdGh9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0Y29uc3QgYXcgPSBzY3JlZW4/LmF2YWlsV2lkdGggKyBcInB4XCI7XG5cdFx0Y29uc3QgYWggPSBzY3JlZW4/LmF2YWlsSGVpZ2h0ICsgXCJweFwiO1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IE1hdGgubWluKHNjcmVlbj8ud2lkdGgsIHNjcmVlbj8uYXZhaWxXaWR0aCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmhlaWdodCwgc2NyZWVuPy5hdmFpbEhlaWdodCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tYXZhaWwtd2lkdGhcIjogbCA/IGFoIDogYXcsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGwgPyBhdyA6IGFoLFxuXHRcdFx0XCItLXZpZXctaGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uYXZhaWxIZWlnaHQsIHdpbmRvdz8uaW5uZXJIZWlnaHQpICsgXCJweFwiLFxuXHRcdFx0XCItLXBpeGVsLXJhdGlvXCI6IFN0cmluZyhkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLFxuXHRcdFx0Li4udnZCbG9ja1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtd2lkdGhcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXZpZXctaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXBpeGVsLXJhdGlvXCI6IFwiMVwiLFxuXHRcdC4uLnZ2QmxvY2tcblx0fTtcbn07XG52YXIgYXZhaWxTaXplID0gZ2V0QXZhaWxTaXplKCk7XG52YXIgY2xhc3NlcyA9IFtbXCI6cm9vdCwgOmhvc3QsIDpzY29wZVwiLCBhdmFpbFNpemVdXTtcbnZhciBvcmllbnRhdGlvbk51bWJlck1hcCA9IHtcblx0XCJwb3J0cmFpdC1wcmltYXJ5XCI6IDAsXG5cdFwibGFuZHNjYXBlLXByaW1hcnlcIjogMSxcblx0XCJwb3J0cmFpdC1zZWNvbmRhcnlcIjogMixcblx0XCJsYW5kc2NhcGUtc2Vjb25kYXJ5XCI6IDNcbn07XG52YXIgdXBkYXRlVlAgPSAoZXYpID0+IHtcblx0Y29uc3QgcnVsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0T2JqZWN0LmFzc2lnbihhdmFpbFNpemUsIGdldEF2YWlsU2l6ZSgpKTtcblx0T2JqZWN0LmVudHJpZXMoYXZhaWxTaXplKS5mb3JFYWNoKChbcHJvcE5hbWUsIHByb3BWYWx1ZV0pID0+IHtcblx0XHRjb25zdCBleGlzdHMgPSBydWxlPy5zdHlsZT8uZ2V0UHJvcGVydHlWYWx1ZShwcm9wTmFtZSk7XG5cdFx0aWYgKCFleGlzdHMgfHwgZXhpc3RzICE9IHByb3BWYWx1ZSkgcnVsZT8uc3R5bGU/LnNldFByb3BlcnR5Py4ocHJvcE5hbWUsIHByb3BWYWx1ZSB8fCBcIlwiLCBcIlwiKTtcblx0fSk7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50YXRpb24tc2Vjb25kYXJ5XCIsIHNjcmVlbj8ub3JpZW50YXRpb24/LnR5cGU/LmVuZHNXaXRoPy4oXCJzZWNvbmRhcnlcIikgPyBcIjFcIiA6IFwiMFwiKTtcbn07XG52YXIgZ2V0Q29ycmVjdE9yaWVudGF0aW9uID0gKCkgPT4ge1xuXHRsZXQgb3JpZW50YXRpb25UeXBlID0gc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZSB8fCBcInBvcnRyYWl0LXByaW1hcnlcIjtcblx0aWYgKCFnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIoKGRpc3BsYXktbW9kZTogZnVsbHNjcmVlbikgb3IgKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSkgb3IgKGRpc3BsYXktbW9kZTogd2luZG93LWNvbnRyb2xzLW92ZXJsYXkpKVwiKS5tYXRjaGVzKSB7XG5cdFx0aWYgKG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcImxhbmRzY2FwZVwiLCBcInBvcnRyYWl0XCIpO1xuXHRcdGVsc2UgaWYgKG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIikubWF0Y2hlcykgb3JpZW50YXRpb25UeXBlID0gb3JpZW50YXRpb25UeXBlLnJlcGxhY2UoXCJwb3J0cmFpdFwiLCBcImxhbmRzY2FwZVwiKTtcblx0fVxuXHRyZXR1cm4gb3JpZW50YXRpb25UeXBlO1xufTtcbnZhciBwYXNzaXZlT3B0cyQxID0geyBwYXNzaXZlOiB0cnVlIH07XG52YXIgd2hlbkFueVNjcmVlbkNoYW5nZXMgPSAoY2IpID0+IHtcblx0bGV0IHRpY2tpbmcgPSBmYWxzZTtcblx0Y29uc3QgdXBkYXRlID0gKCkgPT4ge1xuXHRcdGlmICghdGlja2luZykge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRcdFx0dXBkYXRlVlAoKTtcblx0XHRcdFx0Y2IoKTtcblx0XHRcdFx0dGlja2luZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0XHR0aWNraW5nID0gdHJ1ZTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBbXTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG5hdmlnYXRvcj8udmlydHVhbEtleWJvYXJkLCBcImdlb21ldHJ5Y2hhbmdlXCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93Py52aXN1YWxWaWV3cG9ydCwgXCJzY3JvbGxcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInJlc2l6ZVwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHNjcmVlbj8ub3JpZW50YXRpb24sIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQsIFwiZnVsbHNjcmVlbmNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIiksIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKSwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVwZGF0ZSgpO1xuXHRydW5XaGVuSWRsZSgoKSA9PiB1cGRhdGUoKSwgMTAwKTtcblx0cmV0dXJuICgpID0+IHVuc3Vic2NyaWJlcnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xufTtcbnZhciBmaXhPcmllbnRUb1NjcmVlbiA9IChlbGVtZW50KSA9PiB7XG5cdGlmICghZWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucz8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKSkge1xuXHRcdGVsZW1lbnQ/LmNsYXNzTGlzdD8uYWRkPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpO1xuXHRcdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcygoKSA9PiB7XG5cdFx0XHRjb25zdCBuZXh0ID0gb3JpZW50YXRpb25OdW1iZXJNYXA/LltnZXRDb3JyZWN0T3JpZW50YXRpb24oKV0gPz8gMDtcblx0XHRcdGVsZW1lbnQub3JpZW50ID0gbmV4dDtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlPy4oXCJvcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHRcdGVsZW1lbnQuc3R5bGU/LnNldFByb3BlcnR5Py4oXCItLW9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvTWVhc3VyZS50c1xudmFyIGN0eCA9IG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIGluaXRUZXh0U3R5bGUgPSAoZWxlbWVudCwgY3R4KSA9PiB7XG5cdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBcIlwiKTtcblx0aWYgKGN0eCAmJiBzdHlsZSkge1xuXHRcdGNvbnN0IGZvbnRXZWlnaHQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC13ZWlnaHRcIikgfHwgXCJub3JtYWxcIjtcblx0XHRjb25zdCBmb250U2l6ZSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikgfHwgXCIxNnB4XCI7XG5cdFx0Y29uc3QgZm9udEZhbWlseSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWZhbWlseVwiKSB8fCBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRcdGNvbnN0IGZvbnRTdHJldGNoID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc3RyZXRjaFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFN0cmV0Y2ggPSBmb250U3RyZXRjaC5pbmNsdWRlcyhcIiVcIikgPyBcIm5vcm1hbFwiIDogZm9udFN0cmV0Y2g7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmxldHRlclNwYWNpbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibGV0dGVyLXNwYWNpbmdcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udEtlcm5pbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1rZXJuaW5nXCIpIHx8IFwiYXV0b1wiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250VmFyaWFudENhcHMgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC12YXJpYW50LWNhcHNcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udCA9IGAke2ZvbnRXZWlnaHR9ICR7Zm9udFNpemV9ICR7Zm9udEZhbWlseX1gO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cbn07XG52YXIgbWVhc3VyZVRleHQgPSAodGV4dCwgZWxlbWVudCkgPT4ge1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShlbGVtZW50LCBjdHgpO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cblx0cmV0dXJuIHsgd2lkdGg6IG51bGwgfTtcbn07XG52YXIgbWVhc3VyZUlucHV0SW5Gb2N1cyA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQudmFsdWUuc2xpY2UoMCwgaW5wdXQuc2VsZWN0aW9uRW5kIHx8IDApO1xuXHRyZXR1cm4gbWVhc3VyZVRleHQodGV4dCwgaW5wdXQpO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbiA9IChpbnB1dCwgcG9pbnQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0Py52YWx1ZSB8fCBcIlwiO1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShpbnB1dCwgY3R4KTtcblx0XHRsZXQgY3VycmVudFdpZHRoID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1cnJlbnRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0LnNsaWNlKDAsIGkpKT8ud2lkdGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoID09IG51bGwpIHJldHVybiB0ZXh0Lmxlbmd0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggIT0gbnVsbCAmJiBjdXJyZW50V2lkdGggPj0gcG9pbnRbMF0pIHJldHVybiBNYXRoLm1heChpIC0gMSwgMCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0Lmxlbmd0aDtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50ID0gKGlucHV0LCBjbGllbnQpID0+IHtcblx0Y29uc3QgYm94ID0gaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IHBvaW50ID0gW2NsaWVudFswXSAtIGJveC5sZWZ0IC8gdW5maXhlZENsaWVudFpvb20oKSwgY2xpZW50WzFdIC0gYm94LnRvcCAvIHVuZml4ZWRDbGllbnRab29tKCldO1xuXHRyZXR1cm4gY29tcHV0ZUNhcmV0UG9zaXRpb24oaW5wdXQsIHBvaW50KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9MYXVuY2hlckdyaWQudHNcbnZhciByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCA9IChlbCwgbGF5b3V0T3ZlcnJpZGUpID0+IHtcblx0Y29uc3QgYyA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1jb2x1bW5zXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgciA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1yb3dzXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgYmFzZSA9IG5vcm1hbGl6ZUdyaWRMYXlvdXQobGF5b3V0T3ZlcnJpZGUgPz8gWzQsIDhdKTtcblx0cmV0dXJuIFtOdW1iZXIuaXNGaW5pdGUoYykgJiYgYyA+IDAgPyBjIDogYmFzZVswXSwgTnVtYmVyLmlzRmluaXRlKHIpICYmIHIgPiAwID8gciA6IGJhc2VbMV1dO1xufTtcbnZhciByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQgPSAoZ3JpZFN5c3RlbSwgY2xpZW50UG9pbnQsIGFyZ3MsIG1vZGUgPSBcImZsb29yXCIpID0+IHtcblx0aWYgKCFncmlkU3lzdGVtKSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCByZWN0ID0gZ3JpZFN5c3RlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRpZiAoIXJlY3QpIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IGxheW91dCA9IHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50KGdyaWRTeXN0ZW0sIGFyZ3M/LmxheW91dCk7XG5cdGNvbnN0IG9yaWVudCA9IG9yaWVudE9mKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBjcyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBwbCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdMZWZ0KSB8fCAwO1xuXHRjb25zdCBwdCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdUb3ApIHx8IDA7XG5cdGNvbnN0IHByID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1JpZ2h0KSB8fCAwO1xuXHRjb25zdCBwYiA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdCb3R0b20pIHx8IDA7XG5cdGNvbnN0IGNvbnRlbnRXID0gTWF0aC5tYXgoMSwgKHJlY3Qud2lkdGggfHwgZ3JpZFN5c3RlbS5jbGllbnRXaWR0aCB8fCAxKSAtIHBsIC0gcHIpO1xuXHRjb25zdCBjb250ZW50SCA9IE1hdGgubWF4KDEsIChyZWN0LmhlaWdodCB8fCBncmlkU3lzdGVtLmNsaWVudEhlaWdodCB8fCAxKSAtIHB0IC0gcGIpO1xuXHRjb25zdCBjc0Nvb3JkID0gWyhjbGllbnRQb2ludD8uWzBdIHx8IDApIC0gcmVjdC5sZWZ0IC0gcGwsIChjbGllbnRQb2ludD8uWzFdIHx8IDApIC0gcmVjdC50b3AgLSBwdF07XG5cdHJldHVybiByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwoY3NDb29yZCwgW2NvbnRlbnRXLCBjb250ZW50SF0sIGxheW91dCwgb3JpZW50LCB7XG5cdFx0bW9kZSxcblx0XHRyZWRpcmVjdDoge1xuXHRcdFx0aXRlbTogYXJncz8uaXRlbSxcblx0XHRcdGxpc3Q6IGFyZ3M/Lmxpc3QsXG5cdFx0XHRpdGVtczogYXJncz8uaXRlbXNcblx0XHR9XG5cdH0pO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL0FuaW1hdGlvbi50c1xudmFyIGFuaW1hdGVTaG93ID0gYXN5bmMgKHRhcmdldCkgPT4ge1xuXHRjb25zdCBhbmltYXRpb25Eb25lID0gKCkgPT4ge1xuXHRcdGlmICghdGFyZ2V0Py5oYXNBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpKSB7XG5cdFx0XHR0YXJnZXQ/LnJlbW92ZUF0dHJpYnV0ZT8uKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKTtcblx0XHRcdHRhcmdldD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcInUyLWFwcGVhclwiLCB7XG5cdFx0XHRcdGRldGFpbDoge30sXG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdH07XG5cdGlmICghdGFyZ2V0Py5oYXNBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpICYmIHRhcmdldD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcInUyLWJlZm9yZS1zaG93XCIsIHtcblx0XHRkZXRhaWw6IHt9LFxuXHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHR9KSkpIHtcblx0XHRpZiAoIW1hdGNoTWVkaWEoXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiKS5tYXRjaGVzICYmICF0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKSAmJiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtaW5zdGFudFwiKSAmJiB0YXJnZXQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikgPT0gbnVsbCkgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIiwgXCJcIik7XG5cdFx0aWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpICYmIHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSA9PSBudWxsKSB7XG5cdFx0XHRjb25zdCBhbmltYXRlID0gdGFyZ2V0LmFuaW1hdGUoW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogMCxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRkaXNwbGF5OiBcIm5vbmVcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogLjAxLFxuXHRcdFx0XHRcdFwiLS1vcGFjaXR5XCI6IDAsXG5cdFx0XHRcdFx0XCItLXNjYWxlXCI6IC44LFxuXHRcdFx0XHRcdGRpc3BsYXk6IFwibm9uZVwiLFxuXHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdFx0b2Zmc2V0OiAxLFxuXHRcdFx0XHRcdFwiLS1vcGFjaXR5XCI6IDEsXG5cdFx0XHRcdFx0XCItLXNjYWxlXCI6IDEsXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJyZXZlcnQtbGF5ZXJcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcInJldmVydC1sYXllclwiXG5cdFx0XHRcdH1cblx0XHRcdF0sIHtcblx0XHRcdFx0ZHVyYXRpb246IGlzTW9iaWxlKCkgPyAxMDAgOiA4MCxcblx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRkZWxheTogMFxuXHRcdFx0fSk7XG5cdFx0XHRsZXQgZG9uZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgZW5kQW5pbWF0aW9uID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoZG9uZSkgcmV0dXJuO1xuXHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRzPy5mb3JFYWNoPy4oKGV2ZW50KSA9PiBldmVudD8uKCkpO1xuXHRcdFx0XHRhbmltYXRlLmN1cnJlbnRUaW1lID0gMTtcblx0XHRcdFx0YW5pbWF0ZS5maW5pc2goKTtcblx0XHRcdFx0YW5pbWF0aW9uRG9uZT8uKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZXZlbnRzID0gYWRkRXZlbnRzKHRhcmdldCwge1xuXHRcdFx0XHRcInUyLWJlZm9yZS1oaWRlXCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFwidTItYmVmb3JlLXNob3dcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XVxuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBhbmltYXRlLmZpbmlzaGVkO1xuXHRcdFx0ZW5kQW5pbWF0aW9uPy4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgeyByZXNvbHZlLCByZWplY3QsIHByb21pc2UgfSA9IFByb21pc2Uud2l0aFJlc29sdmVycygpO1xuXHRcdFx0Y29uc3QgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpO1xuXHRcdFx0bGV0IGRvbmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGVuZEFuaW1hdGlvbiA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdGV2ZW50cz8uZm9yRWFjaD8uKChldmVudCkgPT4gZXZlbnQ/LigpKTtcblx0XHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKTtcblx0XHRcdFx0cmVzb2x2ZShwZXJmb3JtYW5jZS5ub3coKSk7XG5cdFx0XHRcdGFuaW1hdGlvbkRvbmU/LigpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGV2ZW50cyA9IGFkZEV2ZW50cyh0YXJnZXQsIHtcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtaGlkZVwiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRcInUyLWJlZm9yZS1zaG93XCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV1cblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgcHJvbWlzZTtcblx0XHRcdGVuZEFuaW1hdGlvbj8uKCk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGFuaW1hdGVIaWRlID0gYXN5bmMgKHRhcmdldCkgPT4ge1xuXHRjb25zdCBhbmltYXRpb25Eb25lID0gKCkgPT4ge1xuXHRcdGlmICh0YXJnZXQ/Lmhhc0F0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikpIHtcblx0XHRcdHRhcmdldD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpO1xuXHRcdFx0dGFyZ2V0Py5kaXNwYXRjaEV2ZW50Py4obmV3IEN1c3RvbUV2ZW50KFwidTItaGlkZGVuXCIsIHtcblx0XHRcdFx0ZGV0YWlsOiB7fSxcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fTtcblx0aWYgKHRhcmdldD8uaGFzQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSAmJiB0YXJnZXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJ1Mi1iZWZvcmUtaGlkZVwiLCB7XG5cdFx0ZGV0YWlsOiB7fSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpKSB7XG5cdFx0aWYgKCFtYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIikubWF0Y2hlcyAmJiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIikgJiYgIXRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWluc3RhbnRcIikpIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIsIFwiXCIpO1xuXHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKSkge1xuXHRcdFx0Y29uc3QgYW5pbWF0ZSA9IHRhcmdldC5hbmltYXRlKFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IDAsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJub25lXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IC45OSxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogMSxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRkaXNwbGF5OiBcIm5vbmVcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9XG5cdFx0XHRdLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMjAsXG5cdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0ZGVsYXk6IDBcblx0XHRcdH0pO1xuXHRcdFx0bGV0IGRvbmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGVuZEFuaW1hdGlvbiA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdGV2ZW50cz8uZm9yRWFjaD8uKChldmVudCkgPT4gZXZlbnQ/LigpKTtcblx0XHRcdFx0YW5pbWF0ZS5jdXJyZW50VGltZSA9IDE7XG5cdFx0XHRcdGFuaW1hdGUuZmluaXNoKCk7XG5cdFx0XHRcdGFuaW1hdGlvbkRvbmU/LigpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGV2ZW50cyA9IGFkZEV2ZW50cyh0YXJnZXQsIHsgXCJ1Mi1iZWZvcmUtc2hvd1wiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdH1dIH0pO1xuXHRcdFx0YXdhaXQgYW5pbWF0ZS5maW5pc2hlZDtcblx0XHRcdGVuZEFuaW1hdGlvbj8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHsgcmVzb2x2ZSwgcmVqZWN0LCBwcm9taXNlIH0gPSBQcm9taXNlLndpdGhSZXNvbHZlcnMoKTtcblx0XHRcdGNvbnN0IHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNvbHZlKTtcblx0XHRcdGxldCBkb25lID0gZmFsc2U7XG5cdFx0XHRjb25zdCBlbmRBbmltYXRpb24gPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChkb25lKSByZXR1cm47XG5cdFx0XHRcdGRvbmUgPSB0cnVlO1xuXHRcdFx0XHRldmVudHM/LmZvckVhY2g/LigoZXZlbnQpID0+IGV2ZW50Py4oKSk7XG5cdFx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSk7XG5cdFx0XHRcdHJlc29sdmUocGVyZm9ybWFuY2Uubm93KCkpO1xuXHRcdFx0XHRhbmltYXRpb25Eb25lPy4oKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBldmVudHMgPSBhZGRFdmVudHModGFyZ2V0LCB7XG5cdFx0XHRcdFwidTItYmVmb3JlLWhpZGVcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtc2hvd1wiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dXG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IHByb21pc2U7XG5cdFx0XHRlbmRBbmltYXRpb24/LigpO1xuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL09ic2VydmVyLnRzXG52YXIgb25Cb3JkZXJPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkJvcmRlck9ic2VydmVcIik7XG52YXIgb25Cb3JkZXJPYnNlcnZlJDEgPSBnbG9iYWxUaGlzW29uQm9yZGVyT2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9uQ29udGVudE9ic2VydmVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQ29udGVudE9ic2VydmVcIik7XG52YXIgb25Db250ZW50T2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkNvbnRlbnRPYnNlcnZlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdW53cmFwRnJvbVF1ZXJ5ID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5jdXJyZW50ID09IFwib2JqZWN0XCIpIGVsZW1lbnQgPSBlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQ/LmN1cnJlbnQgPz8gKHR5cGVvZiBlbGVtZW50Py5zZWxmID09IFwib2JqZWN0XCIgPyBlbGVtZW50Py5zZWxmIDogbnVsbCkgPz8gZWxlbWVudDtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIG9ic2VydmVDb250ZW50Qm94ID0gKGVsZW1lbnQsIGNiKSA9PiB7XG5cdGlmICghb25Db250ZW50T2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihjb250ZW50Qm94U2l6ZSwgb2JzZXJ2ZXIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYj8uKHtcblx0XHRcdGlubGluZVNpemU6IGVsZW1lbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRibG9ja1NpemU6IGVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdG9uQ29udGVudE9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxuXHRvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5wdXNoPy4oY2IpO1xuXHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUJvcmRlckJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQm9yZGVyT2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5ib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGJvcmRlckJveFNpemUgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoYm9yZGVyQm94U2l6ZSkgY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYj8uKGJvcmRlckJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50Lm9mZnNldEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkJvcmRlck9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiYm9yZGVyLWJveFwiIH0pO1xuXHR9XG5cdG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LmluZGV4T2YoY2IpIHx8IC0xLCAxKSB9O1xufTtcbnZhciBvYnNlcnZlQXR0cmlidXRlID0gKGVsZW1lbnQsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5zZWxlY3RvciA9PSBcInN0cmluZ1wiKSByZXR1cm4gb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IoZWxlbWVudCwgZWxlbWVudD8uc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldCgoYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXSkubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XVxuXHR9KTtcblx0YXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IGNiKHtcblx0XHR0YXJnZXQ6IGVsZW1lbnQsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdG9sZFZhbHVlOiBlbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSk7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IgPSAoZWxlbWVudCwgc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoWy4uLmF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV1dLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRjb25zdCBhZGRlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGFkZGVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBBcnJheS5mcm9tKGVsPy5xdWVyeVNlbGVjdG9yQWxsPy4oc2VsZWN0b3IpIHx8IFtdKSkpO1xuXHRcdFx0cmVtb3ZlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBBcnJheS5mcm9tKGVsPy5xdWVyeVNlbGVjdG9yQWxsPy4oc2VsZWN0b3IpIHx8IFtdKSkpO1xuXHRcdFx0Wy4uLm5ldyBTZXQoYWRkZWROb2RlcyldLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzPy4oc2VsZWN0b3IpKT8ubWFwPy4oKHRhcmdldCkgPT4ge1xuXHRcdFx0XHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuXHRcdFx0XHRcdGNiKHtcblx0XHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHRcdFx0XHRcdH0sIG9ic2VydmVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKG11dGF0aW9uLnRhcmdldD8ubWF0Y2hlcz8uKHNlbGVjdG9yKSAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlXG5cdH0pO1xuXHRbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0ubWFwKCh0YXJnZXQpID0+IGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSkpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yID0gXCIqXCIsIGNiID0gKG11dCwgb2JzKSA9PiB7fSkgPT4ge1xuXHRjb25zdCB1bndyYXBOb2Rlc0J5U2VsZWN0b3IgPSAobm9kZXMpID0+IHtcblx0XHRjb25zdCAkbm9kZXMgPSBBcnJheS5mcm9tKG5vZGVzIHx8IFtdKSB8fCBbXTtcblx0XHQkbm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gQXJyYXkuZnJvbShlbD8ucXVlcnlTZWxlY3RvckFsbD8uKHNlbGVjdG9yKSB8fCBbXSkpKTtcblx0XHRyZXR1cm4gWy4uLkFycmF5LmZyb20obmV3IFNldCgkbm9kZXMpLnZhbHVlcygpKV0uZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXM/LihzZWxlY3RvcikpO1xuXHR9O1xuXHRsZXQgb2JSZWYgPSBudWxsO1xuXHRjb25zdCBoYW5kbGVNdXRhdGlvbiA9IChtdXRhdGlvbikgPT4ge1xuXHRcdGNvbnN0IG9ic2VydmVyID0gb2JSZWY/LmRlcmVmPy4oKTtcblx0XHRjb25zdCBhZGRlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuXHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuXHRcdGlmIChhZGRlZE5vZGVzLmxlbmd0aCA+IDAgfHwgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdFx0dHlwZTogbXV0YXRpb24udHlwZSxcblx0XHRcdHRhcmdldDogbXV0YXRpb24udGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IG11dGF0aW9uLm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IG11dGF0aW9uLm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiBtdXRhdGlvbi5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzLFxuXHRcdFx0cmVtb3ZlZE5vZGVzXG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlT3V0Q29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUZvY3VzQ2xpY2sgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBmYWN0b3JzID0ge1xuXHRcdHBhc3NpdmU6IHRydWUsXG5cdFx0Y2FwdHVyZTogZmFsc2Vcblx0fTtcblx0aWYgKHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpICYmIHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsZWN0b3I/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmZvY3VzXCIpICYmIHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiBzZWxlY3Rvcj8uaW5jbHVkZXM/LihcIjpmb2N1cy12aXNpYmxlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSBoYW5kbGVNdXRhdGlvbihtdXRhdGlvbik7XG5cdH0pO1xuXHRvYlJlZiA9IG5ldyBXZWFrUmVmKG9ic2VydmVyKTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWVcblx0fSk7XG5cdGNvbnN0IHNlbGVjdGVkID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblx0aWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdGFkZGVkTm9kZXM6IHNlbGVjdGVkLFxuXHRcdHJlbW92ZWROb2RlczogW11cblx0fSwgb2JzZXJ2ZXIpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvQXBwZWFyLnRzXG52YXIgaW5pdFZpc2liaWxpdHkgPSBhc3luYyAoUk9PVCA9IGRvY3VtZW50LmJvZHkpID0+IHtcblx0b2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IoUk9PVCwgXCIqXCIsIFwiZGF0YS1oaWRkZW5cIiwgKG11dGF0aW9uLCBvYnNlcnZlcikgPT4ge1xuXHRcdGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09IFwiZGF0YS1oaWRkZW5cIikge1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0O1xuXHRcdFx0aWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhpZGRlblwiKSAhPT0gbXV0YXRpb24ub2xkVmFsdWUpIFByb21pc2U/LnRyeT8uKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhpZGRlblwiKSAhPSBudWxsID8gYW5pbWF0ZUhpZGUgOiBhbmltYXRlU2hvdywgdGFyZ2V0LCBvYnNlcnZlcik/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvU2hhcGUudHNcbnZhciBXYXZ5U2hhcGVkQ2lyY2xlID0gKHN0ZXBzID0gMTAwLCBhbXBsaXR1ZGUgPSAuMDUsIGZyZXEgPSA4KSA9PiB7XG5cdGNvbnN0IHBvaW50cyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzOyBpKyspIHBvaW50cy5wdXNoKGkgLyBzdGVwcyk7XG5cdGNvbnN0IGFuZ2xlID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoJHtzdGVwfXJhZCAqIHBpICogMilgO1xuXHR9O1xuXHRjb25zdCB2YXJpYW50ID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoY2FsYyhjb3MoY2FsYyh2YXIoLS1jbGlwLWZyZXEsIDgpICogJHthbmdsZShzdGVwKX0pKSAqIDAuNSArIDAuNSkgKiB2YXIoLS1jbGlwLWFtcGxpdHVkZSwgMCkpYDtcblx0fTtcblx0Y29uc3QgZnVuYyA9IChzdGVwKSA9PiBbYGNhbGMoY2FsYygwLjUgKyBjYWxjKGNvcygke2FuZ2xlKHN0ZXApfSkgKiBjYWxjKDAuNSAtICR7dmFyaWFudChzdGVwKX0pKSkgKiB2YXIoLS1pY29uLXNpemUsIDEwMCUpKWAsIGBjYWxjKGNhbGMoMC41ICsgY2FsYyhzaW4oJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgXTtcblx0cmV0dXJuIHtcblx0XHRcIi0tY2xpcC1hbXBsaXR1ZGVcIjogYW1wbGl0dWRlLFxuXHRcdFwiLS1jbGlwLWZyZXFcIjogZnJlcSxcblx0XHRcIi0tY2xpcC1wYXRoXCI6IGBwb2x5Z29uKCR7cG9pbnRzLm1hcCgoc3RlcCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZ1bmMoc3RlcCkuam9pbihcIiBcIik7XG5cdFx0fSkuam9pbihcIiwgXCIpfSlgXG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vU3R5bGUudHNcbnZhciBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0ID0gKCkgPT4gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGdsb2JhbFRoaXMuQ1NTU3R5bGVTaGVldCA9PT0gXCJmdW5jdGlvblwiO1xudmFyIGNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudCA9IChjc3MpID0+IHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIgJiYgL0BpbXBvcnRcXGIvaS50ZXN0KGNzcyk7XG52YXIgT1dORVIgPSBcIkRPTVwiO1xudmFyIHN0eWxlRWxlbWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpIDogbnVsbDtcbmlmIChzdHlsZUVsZW1lbnQpIHtcblx0dHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oc3R5bGVFbGVtZW50KTtcblx0c3R5bGVFbGVtZW50LmRhdGFzZXQub3duZXIgPSBPV05FUjtcbn1cbnZhciBzZXRTdHlsZVVSTCA9IChiYXNlLCB1cmwsIGxheWVyID0gXCJcIikgPT4ge1xuXHRiYXNlWzBdW2Jhc2VbMV1dID0gYmFzZVsxXSA9PSBcImlubmVySFRNTFwiID8gYEBpbXBvcnQgdXJsKFwiJHt1cmx9XCIpICR7bGF5ZXIgJiYgdHlwZW9mIGxheWVyID09IFwic3RyaW5nXCIgPyBgbGF5ZXIoJHtsYXllcn0pYCA6IFwiXCJ9O2AgOiB1cmw7XG59O1xudmFyIHNldFN0eWxlUnVsZXMgPSAoY2xhc3NlcykgPT4ge1xuXHRyZXR1cm4gY2xhc3Nlcz8ubWFwPy4oKGFyZ3MpID0+IHNldFN0eWxlUnVsZSguLi5hcmdzKSk7XG59O1xudmFyIGdldFN0eWxlTGF5ZXIgPSAobGF5ZXJOYW1lLCBzaGVldCkgPT4ge1xuXHRzaGVldCB8fD0gc3R5bGVFbGVtZW50Py5zaGVldDtcblx0bGV0IGxheWVyUnVsZUluZGV4ID0gQXJyYXkuZnJvbShzaGVldD8uY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocnVsZSkgPT4gcnVsZSBpbnN0YW5jZW9mIENTU0xheWVyQmxvY2tSdWxlICYmIHJ1bGU/Lm5hbWUgPT09IGxheWVyTmFtZSk7XG5cdGxldCBsYXllclJ1bGU7XG5cdGlmIChsYXllclJ1bGVJbmRleCA9PT0gLTEgJiYgc2hlZXQpIGxheWVyUnVsZSA9IHNoZWV0Py5jc3NSdWxlcz8uW2xheWVyUnVsZUluZGV4ID0gc2hlZXQuaW5zZXJ0UnVsZShgQGxheWVyICR7bGF5ZXJOYW1lfSB7fWApXTtcblx0ZWxzZSBsYXllclJ1bGUgPSBzaGVldD8uY3NzUnVsZXM/LltsYXllclJ1bGVJbmRleF07XG5cdHJldHVybiBsYXllclJ1bGU7XG59O1xudmFyIHN0eWxlSWRDb3VudGVyID0gMDtcbnZhciBpc1NoYWRvd1Jvb3QgPSAodmFsdWUpID0+IHR5cGVvZiBTaGFkb3dSb290ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbnZhciBpc0RvY3VtZW50ID0gKHZhbHVlKSA9PiB0eXBlb2YgRG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBEb2N1bWVudDtcbnZhciBpc0VsZW1lbnQkMSA9ICh2YWx1ZSkgPT4gdHlwZW9mIEVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50O1xudmFyIGVzY2FwZUNTU0lkZW50aWZpZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIENTUy5lc2NhcGUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIENTUy5lc2NhcGUodmFsdWUpO1xuXHRyZXR1cm4gQXJyYXkuZnJvbSh2YWx1ZSkubWFwKChjaGFyKSA9PiBgXFxcXCR7Y2hhci5jb2RlUG9pbnRBdCgwKS50b1N0cmluZygxNil9IGApLmpvaW4oXCJcIik7XG59O1xudmFyIGNyZWF0ZVN0eWxlSWQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgY3J5cHRvICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjcnlwdG8ucmFuZG9tVVVJRCA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0cmV0dXJuIGB1eC0ke0RhdGUubm93KCkudG9TdHJpbmcoMzYpfS0keygrK3N0eWxlSWRDb3VudGVyKS50b1N0cmluZygzNil9YDtcbn07XG52YXIgam9pblNjb3BlZFNlbGVjdG9yID0gKHNjb3BlLCBzZWxlY3RvcikgPT4ge1xuXHRzZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKTtcblx0aWYgKCFzY29wZSkgcmV0dXJuIHNlbGVjdG9yO1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gc2NvcGU7XG5cdGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKFwiOjpcIikpIHJldHVybiBgJHtzY29wZX0ke3NlbGVjdG9yfWA7XG5cdHJldHVybiBgJHtzY29wZX0gJHtzZWxlY3Rvcn1gO1xufTtcbnZhciBmaW5kU3R5bGVSdWxlID0gKHNoZWV0LCBmdWxsU2VsZWN0b3IsIHNjb3BlLCBzZWxlY3RvcikgPT4ge1xuXHRjb25zdCBydWxlcyA9IEFycmF5LmZyb20oc2hlZXQ/LmNzc1J1bGVzIHx8IFtdKTtcblx0Y29uc3QgZXhwZWN0ZWQgPSBmdWxsU2VsZWN0b3IudHJpbSgpO1xuXHRjb25zdCByZXF1ZXN0ZWQgPSBzZWxlY3Rvci50cmltKCk7XG5cdHJldHVybiBydWxlcy5maW5kSW5kZXgoKHJ1bGUpID0+IHtcblx0XHRpZiAoIShydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlKSkgcmV0dXJuIGZhbHNlO1xuXHRcdGNvbnN0IGFjdHVhbCA9IHJ1bGUuc2VsZWN0b3JUZXh0Py50cmltPy4oKSA/PyBcIlwiO1xuXHRcdGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSByZXR1cm4gdHJ1ZTtcblx0XHRpZiAocmVxdWVzdGVkICYmIGFjdHVhbC5lbmRzV2l0aChyZXF1ZXN0ZWQpKSByZXR1cm4gYWN0dWFsLnNsaWNlKDAsIGFjdHVhbC5sZW5ndGggLSByZXF1ZXN0ZWQubGVuZ3RoKS50cmltKCkgPT09IHNjb3BlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59O1xudmFyIGdldFN0eWxlUnVsZSA9IChzZWxlY3Rvciwgc2hlZXQsIGxheWVyTmFtZSA9IFwidXgtcXVlcnlcIiwgYmFzaXMgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBpc1NoYWRvd1Jvb3QoYmFzaXMpIHx8IGlzRG9jdW1lbnQoYmFzaXMpID8gYmFzaXMgOiBiYXNpcz8uZ2V0Um9vdE5vZGU/LigpID8/ICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xuXHRjb25zdCBiYXNpc0VsZW1lbnQgPSBpc0VsZW1lbnQkMShiYXNpcykgPyBiYXNpcyA6IG51bGw7XG5cdGxldCBzY29wZSA9IFwiXCI7XG5cdGlmIChiYXNpc0VsZW1lbnQ/LmlkKSBzY29wZSA9IGAjJHtlc2NhcGVDU1NJZGVudGlmaWVyKGJhc2lzRWxlbWVudC5pZCl9YDtcblx0ZWxzZSBpZiAoYmFzaXNFbGVtZW50KSB7XG5cdFx0bGV0IHN0eWxlSWQgPSBiYXNpc0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZS1pZFwiKTtcblx0XHRpZiAoIXN0eWxlSWQpIHtcblx0XHRcdHN0eWxlSWQgPSBjcmVhdGVTdHlsZUlkKCk7XG5cdFx0XHRiYXNpc0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZS1pZFwiLCBzdHlsZUlkKTtcblx0XHR9XG5cdFx0c2NvcGUgPSBgW2RhdGEtc3R5bGUtaWQ9XCIke2VzY2FwZUNTU0lkZW50aWZpZXIoc3R5bGVJZCl9XCJdYDtcblx0fSBlbHNlIGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkpIHNjb3BlID0gXCI6aG9zdFwiO1xuXHRlbHNlIGlmIChpc0RvY3VtZW50KHJvb3QpKSBzY29wZSA9IFwiOnJvb3RcIjtcblx0bGV0IHN0eWxlRWxlbWVudCA9IG51bGw7XG5cdGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLXV4LXF1ZXJ5XVwiKTtcblx0XHRpZiAoIXN0eWxlRWxlbWVudCAmJiB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0XHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXV4LXF1ZXJ5XCIsIFwiXCIpO1xuXHRcdFx0cm9vdC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0fSBlbHNlIHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudEdsb2JhbCgpO1xuXHRzaGVldCB8fD0gc3R5bGVFbGVtZW50Py5zaGVldDtcblx0aWYgKCFzaGVldCkgcmV0dXJuO1xuXHRpZiAobGF5ZXJOYW1lKSByZXR1cm4gZ2V0U3R5bGVSdWxlKHNlbGVjdG9yLCBnZXRTdHlsZUxheWVyKGxheWVyTmFtZSwgc2hlZXQpLCBudWxsLCBiYXNpcyk7XG5cdGNvbnN0IGZ1bGxTZWxlY3RvciA9IGpvaW5TY29wZWRTZWxlY3RvcihzY29wZSwgc2VsZWN0b3IpO1xuXHRsZXQgcnVsZUlkID0gZmluZFN0eWxlUnVsZShzaGVldCwgZnVsbFNlbGVjdG9yLCBzY29wZSwgc2VsZWN0b3IpO1xuXHRpZiAocnVsZUlkID09PSAtMSkgcnVsZUlkID0gc2hlZXQuaW5zZXJ0UnVsZShgJHtmdWxsU2VsZWN0b3J9IHt9YCk7XG5cdHJldHVybiBzaGVldC5jc3NSdWxlcz8uW3J1bGVJZF07XG59O1xuZnVuY3Rpb24gc3R5bGVFbGVtZW50R2xvYmFsKCkge1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50ID8/IG51bGw7XG59XG52YXIgaGFzVHlwZWRPTSA9IHR5cGVvZiBDU1NTdHlsZVZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBDU1NVbml0VmFsdWUgIT09IFwidW5kZWZpbmVkXCI7XG52YXIgaXNTdHlsZVZhbHVlID0gKHZhbCkgPT4gaGFzVHlwZWRPTSAmJiB2YWwgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlO1xudmFyIGlzVW5pdFZhbHVlID0gKHZhbCkgPT4gaGFzVHlwZWRPTSAmJiB2YWwgaW5zdGFuY2VvZiBDU1NVbml0VmFsdWU7XG52YXIgc2V0UHJvcGVydHlJZk5vdEVxdWFsID0gKHN0eWxlUmVmLCBrZWJhYiwgdmFsdWUsIGltcG9ydGFuY2UgPSBcIlwiKSA9PiB7XG5cdGlmICghc3R5bGVSZWYgfHwgIWtlYmFiKSByZXR1cm47XG5cdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0aWYgKHN0eWxlUmVmLmdldFByb3BlcnR5VmFsdWUoa2ViYWIpICE9PSBcIlwiKSBzdHlsZVJlZi5yZW1vdmVQcm9wZXJ0eShrZWJhYik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdHlsZVJlZi5nZXRQcm9wZXJ0eVZhbHVlKGtlYmFiKSAhPT0gdmFsdWUpIHN0eWxlUmVmLnNldFByb3BlcnR5KGtlYmFiLCB2YWx1ZSwgaW1wb3J0YW5jZSk7XG59O1xudmFyIHNldFN0eWxlUHJvcGVydHlUeXBlZCA9IChlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0aWYgKCFlbGVtZW50IHx8ICFuYW1lKSByZXR1cm4gZWxlbWVudDtcblx0Y29uc3Qga2ViYWIgPSBjYW1lbFRvS2ViYWIobmFtZSk7XG5cdGNvbnN0IHN0eWxlUmVmID0gZWxlbWVudC5zdHlsZTtcblx0Y29uc3Qgc3R5bGVNYXBSZWYgPSBlbGVtZW50LmF0dHJpYnV0ZVN0eWxlTWFwID8/IGVsZW1lbnQuc3R5bGVNYXA7XG5cdGlmICghaGFzVHlwZWRPTSB8fCAhc3R5bGVNYXBSZWYpIHJldHVybiBzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2soZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UpO1xuXHRsZXQgdmFsID0gaGFzVmFsdWUodmFsdWUpICYmICEoaXNTdHlsZVZhbHVlKHZhbHVlKSB8fCBpc1VuaXRWYWx1ZSh2YWx1ZSkpID8gdmFsdWU/LnZhbHVlIDogdmFsdWU7XG5cdGlmICh2YWwgPT0gbnVsbCkge1xuXHRcdHN0eWxlTWFwUmVmLmRlbGV0ZT8uKGtlYmFiKTtcblx0XHRpZiAoc3R5bGVSZWYpIHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIG51bGwsIGltcG9ydGFuY2UpO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cdGlmIChpc1N0eWxlVmFsdWUodmFsKSkge1xuXHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0aWYgKGlzVW5pdFZhbHVlKHZhbCkgJiYgaXNVbml0VmFsdWUob2xkKSkge1xuXHRcdFx0aWYgKG9sZC52YWx1ZSA9PT0gdmFsLnZhbHVlICYmIG9sZC51bml0ID09PSB2YWwudW5pdCkgcmV0dXJuIGVsZW1lbnQ7XG5cdFx0fSBlbHNlIGlmIChvbGQgPT09IHZhbCkgcmV0dXJuIGVsZW1lbnQ7XG5cdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCB2YWwpO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cdGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKSB7XG5cdFx0aWYgKENTUz8ubnVtYmVyICYmICFrZWJhYi5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IG5ld1ZhbCA9IENTUy5udW1iZXIodmFsKTtcblx0XHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0XHRpZiAoaXNVbml0VmFsdWUob2xkKSAmJiBvbGQudmFsdWUgPT09IG5ld1ZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gbmV3VmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCBuZXdWYWwpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIFN0cmluZyh2YWwpLCBpbXBvcnRhbmNlKTtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH1cblx0fVxuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhaXNTdHlsZVZhbHVlKHZhbCkpIHtcblx0XHRjb25zdCBtYXliZU51bSA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCk7XG5cdFx0aWYgKHR5cGVvZiBtYXliZU51bSA9PT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAha2ViYWIuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBuZXdWYWwgPSBDU1MubnVtYmVyKG1heWJlTnVtKTtcblx0XHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0XHRpZiAoaXNVbml0VmFsdWUob2xkKSAmJiBvbGQudmFsdWUgPT09IG5ld1ZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gbmV3VmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCBuZXdWYWwpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIHZhbCwgaW1wb3J0YW5jZSk7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIW5hbWUpIHJldHVybiBlbGVtZW50O1xuXHRjb25zdCBrZWJhYiA9IGNhbWVsVG9LZWJhYihuYW1lKTtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbGVtZW50LnN0eWxlO1xuXHRpZiAoIXN0eWxlUmVmKSByZXR1cm4gZWxlbWVudDtcblx0bGV0IHZhbCA9IGhhc1ZhbHVlKHZhbHVlKSAmJiAhKGlzU3R5bGVWYWx1ZSh2YWx1ZSkgfHwgaXNVbml0VmFsdWUodmFsdWUpKSA/IHZhbHVlPy52YWx1ZSA6IHZhbHVlO1xuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhaXNTdHlsZVZhbHVlKHZhbCkpIHZhbCA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCkgPz8gdmFsO1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBudWxsLCBpbXBvcnRhbmNlKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAoaXNTdHlsZVZhbHVlKHZhbCkpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0aWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcHJvbWlzZU9yRGlyZWN0ID0gKHByb21pc2UsIGNiKSA9PiB7XG5cdGlmICh0eXBlb2YgcHJvbWlzZT8udGhlbiA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBwcm9taXNlPy50aGVuPy4oY2IpO1xuXHRyZXR1cm4gY2IocHJvbWlzZSk7XG59O1xudmFyIGJsb2JVUkxNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBjYWNoZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZmV0Y2hBbmRDYWNoZSA9ICh1cmwpID0+IHtcblx0aWYgKCF1cmwpIHJldHVybiBudWxsO1xuXHRpZiAoY2FjaGVNYXAuaGFzKHVybCkpIHJldHVybiBjYWNoZU1hcC5nZXQodXJsKTtcblx0aWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGlmIChibG9iVVJMTWFwLmhhcyh1cmwpKSByZXR1cm4gYmxvYlVSTE1hcC5nZXQodXJsKTtcblx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh1cmwpO1xuXHRcdGJsb2JVUkxNYXAuc2V0KHVybCwgYnVybCk7XG5cdFx0Y2FjaGVNYXAuc2V0KGJ1cmwsIGJ1cmwpO1xuXHRcdHJldHVybiBidXJsO1xuXHR9XG5cdGlmIChVUkwuY2FuUGFyc2UodXJsKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuXHRcdGNvbnN0IHByb21pc2VkID0gZmV0Y2godXJsPy5yZXBsYWNlPy4oXCI/dXJsXCIsIFwiP3Jhd1wiKSwge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XG5cdFx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdGJsb2JVUkxNYXAuc2V0KGJsb2IsIGJ1cmwpO1xuXHRcdFx0Y2FjaGVNYXAuc2V0KHVybCwgYnVybCk7XG5cdFx0XHRjYWNoZU1hcC5zZXQoYnVybCwgYnVybCk7XG5cdFx0XHRyZXR1cm4gYnVybDtcblx0XHR9KTtcblx0XHRjYWNoZU1hcC5zZXQodXJsLCBwcm9taXNlZCk7XG5cdFx0cmV0dXJuIHByb21pc2VkO1xuXHR9XG5cdGlmICh0eXBlb2YgdXJsID09IFwic3RyaW5nXCIpIHtcblx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoW3VybF0sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXHRcdGNvbnN0IGJ1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdGJsb2JVUkxNYXAuc2V0KGJsb2IsIGJ1cmwpO1xuXHRcdGNhY2hlTWFwLnNldChidXJsLCBidXJsKTtcblx0XHRyZXR1cm4gYnVybDtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcbnZhciBjYWNoZUNvbnRlbnRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGNhY2hlQmxvYkNvbnRlbnRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBmZXRjaEFzSW5saW5lID0gKHVybCkgPT4ge1xuXHRpZiAoIXVybCkgcmV0dXJuIFwiXCI7XG5cdGlmIChjYWNoZUNvbnRlbnRNYXAuaGFzKHVybCkpIHJldHVybiBjYWNoZUNvbnRlbnRNYXAuZ2V0KHVybCkgPz8gXCJcIjtcblx0aWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGlmIChjYWNoZUJsb2JDb250ZW50TWFwLmhhcyh1cmwpKSByZXR1cm4gY2FjaGVCbG9iQ29udGVudE1hcC5nZXQodXJsKSA/PyBcIlwiO1xuXHRcdGNvbnN0IHByb21pc2VkID0gdXJsPy50ZXh0Py4oKT8udGhlbj8uKCh0ZXh0KSA9PiB7XG5cdFx0XHRjYWNoZUJsb2JDb250ZW50TWFwLnNldCh1cmwsIHRleHQpO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fSk7XG5cdFx0Y2FjaGVCbG9iQ29udGVudE1hcC5zZXQodXJsLCBwcm9taXNlZCk7XG5cdFx0cmV0dXJuIHByb21pc2VkO1xuXHR9XG5cdGlmIChVUkwuY2FuUGFyc2UodXJsKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuXHRcdGNvbnN0IHByb21pc2VkID0gZmV0Y2godXJsPy5yZXBsYWNlPy4oXCI/dXJsXCIsIFwiP3Jhd1wiKSwge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHRjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCwgdGV4dCk7XG5cdFx0XHRyZXR1cm4gdGV4dDtcblx0XHR9KTtcblx0XHRjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCwgcHJvbWlzZWQpO1xuXHRcdHJldHVybiBwcm9taXNlZDtcblx0fVxuXHRpZiAodHlwZW9mIHVybCA9PSBcInN0cmluZ1wiKSB7XG5cdFx0Y2FjaGVDb250ZW50TWFwLnNldCh1cmwsIHVybCk7XG5cdFx0cmV0dXJuIHVybDtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcbnZhciBhZG9wdGVkU2VsZWN0b3JNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGFkb3B0ZWRMYXllck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgYWRvcHRlZFNoYWRvd0xheWVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0QWRvcHRlZFN0eWxlUnVsZSA9IChzZWxlY3RvciwgbGF5ZXJOYW1lID0gXCJ1eC1xdWVyeVwiLCBiYXNpcyA9IG51bGwpID0+IHtcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIG51bGw7XG5cdGlmICghc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCgpKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgcm9vdCA9IGJhc2lzIGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IGJhc2lzIDogYmFzaXM/LmdldFJvb3ROb2RlID8gYmFzaXMuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSA6IG51bGw7XG5cdGNvbnN0IGlzU2hhZG93Um9vdCA9IHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xuXHRjb25zdCB0YXJnZXRBZG9wdGVkU2hlZXRzID0gaXNTaGFkb3dSb290ID8gcm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgOiB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyA6IG51bGw7XG5cdGlmICghdGFyZ2V0QWRvcHRlZFNoZWV0cykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHNlbGVjdG9yS2V5ID0gYCR7bGF5ZXJOYW1lIHx8IFwiXCJ9OiR7c2VsZWN0b3J9YDtcblx0bGV0IHNoZWV0O1xuXHRpZiAoaXNTaGFkb3dSb290KSB7XG5cdFx0bGV0IHNoYWRvd01hcCA9IGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcC5nZXQocm9vdCk7XG5cdFx0aWYgKCFzaGFkb3dNYXApIHtcblx0XHRcdHNoYWRvd01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAuc2V0KHJvb3QsIHNoYWRvd01hcCk7XG5cdFx0fVxuXHRcdHNoZWV0ID0gc2hhZG93TWFwLmdldChzZWxlY3RvcktleSk7XG5cdFx0aWYgKCFzaGVldCkge1xuXHRcdFx0c2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdFx0c2hhZG93TWFwLnNldChzZWxlY3RvcktleSwgc2hlZXQpO1xuXHRcdFx0aWYgKCF0YXJnZXRBZG9wdGVkU2hlZXRzLmluY2x1ZGVzKHNoZWV0KSkgdGFyZ2V0QWRvcHRlZFNoZWV0cy5wdXNoKHNoZWV0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0c2hlZXQgPSBhZG9wdGVkU2VsZWN0b3JNYXAuZ2V0KHNlbGVjdG9yS2V5KTtcblx0XHRpZiAoIXNoZWV0KSB7XG5cdFx0XHRzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0XHRhZG9wdGVkU2VsZWN0b3JNYXAuc2V0KHNlbGVjdG9yS2V5LCBzaGVldCk7XG5cdFx0XHRpZiAoIXRhcmdldEFkb3B0ZWRTaGVldHMuaW5jbHVkZXMoc2hlZXQpKSB0YXJnZXRBZG9wdGVkU2hlZXRzLnB1c2goc2hlZXQpO1xuXHRcdH1cblx0fVxuXHRpZiAobGF5ZXJOYW1lKSB7XG5cdFx0bGV0IGxheWVyUnVsZTtcblx0XHRpZiAoaXNTaGFkb3dSb290KSB7XG5cdFx0XHRsZXQgc2hhZG93TGF5ZXJNYXAgPSBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuZ2V0KHJvb3QpO1xuXHRcdFx0aWYgKCFzaGFkb3dMYXllck1hcCkge1xuXHRcdFx0XHRzaGFkb3dMYXllck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRcdGFkb3B0ZWRTaGFkb3dMYXllck1hcC5zZXQocm9vdCwgc2hhZG93TGF5ZXJNYXApO1xuXHRcdFx0fVxuXHRcdFx0bGF5ZXJSdWxlID0gc2hhZG93TGF5ZXJNYXAuZ2V0KGxheWVyTmFtZSk7XG5cdFx0fSBlbHNlIGxheWVyUnVsZSA9IGFkb3B0ZWRMYXllck1hcC5nZXQobGF5ZXJOYW1lKTtcblx0XHRpZiAoIWxheWVyUnVsZSkge1xuXHRcdFx0Y29uc3QgcnVsZXMgPSBBcnJheS5mcm9tKHNoZWV0LmNzc1J1bGVzIHx8IFtdKTtcblx0XHRcdGNvbnN0IGxheWVySW5kZXggPSBydWxlcy5maW5kSW5kZXgoKHJ1bGUpID0+IHJ1bGUgaW5zdGFuY2VvZiBDU1NMYXllckJsb2NrUnVsZSAmJiBydWxlLm5hbWUgPT09IGxheWVyTmFtZSk7XG5cdFx0XHRpZiAobGF5ZXJJbmRleCA9PT0gLTEpIHRyeSB7XG5cdFx0XHRcdHNoZWV0Lmluc2VydFJ1bGUoYEBsYXllciAke2xheWVyTmFtZX0ge31gLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuXHRcdFx0XHRjb25zdCBuZXdSdWxlID0gc2hlZXQuY3NzUnVsZXNbc2hlZXQuY3NzUnVsZXMubGVuZ3RoIC0gMV07XG5cdFx0XHRcdGlmIChuZXdSdWxlIGluc3RhbmNlb2YgQ1NTTGF5ZXJCbG9ja1J1bGUpIGxheWVyUnVsZSA9IG5ld1J1bGU7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGxheWVyUnVsZSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHRcdGVsc2UgbGF5ZXJSdWxlID0gcnVsZXNbbGF5ZXJJbmRleF07XG5cdFx0XHRpZiAobGF5ZXJSdWxlKSB7XG5cdFx0XHRcdGlmIChpc1NoYWRvd1Jvb3QpIHtcblx0XHRcdFx0XHRsZXQgc2hhZG93TGF5ZXJNYXAgPSBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuZ2V0KHJvb3QpO1xuXHRcdFx0XHRcdGlmICghc2hhZG93TGF5ZXJNYXApIHtcblx0XHRcdFx0XHRcdHNoYWRvd0xheWVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdFx0XHRcdGFkb3B0ZWRTaGFkb3dMYXllck1hcC5zZXQocm9vdCwgc2hhZG93TGF5ZXJNYXApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzaGFkb3dMYXllck1hcC5zZXQobGF5ZXJOYW1lLCBsYXllclJ1bGUpO1xuXHRcdFx0XHR9IGVsc2UgYWRvcHRlZExheWVyTWFwLnNldChsYXllck5hbWUsIGxheWVyUnVsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChsYXllclJ1bGUpIHtcblx0XHRcdGxldCBsYXllclJ1bGVJbmRleCA9IEFycmF5LmZyb20obGF5ZXJSdWxlLmNzc1J1bGVzIHx8IFtdKS5maW5kSW5kZXgoKHIpID0+IHIgaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUgJiYgci5zZWxlY3RvclRleHQ/LnRyaW0/LigpID09PSBzZWxlY3Rvcj8udHJpbT8uKCkpO1xuXHRcdFx0aWYgKGxheWVyUnVsZUluZGV4ID09PSAtMSkgdHJ5IHtcblx0XHRcdFx0bGF5ZXJSdWxlSW5kZXggPSBsYXllclJ1bGUuaW5zZXJ0UnVsZShgJHtzZWxlY3Rvcn0ge31gLCBsYXllclJ1bGUuY3NzUnVsZXMubGVuZ3RoKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGF5ZXJSdWxlLmNzc1J1bGVzW2xheWVyUnVsZUluZGV4XTtcblx0XHR9XG5cdH1cblx0bGV0IHJ1bGVJbmRleCA9IEFycmF5LmZyb20oc2hlZXQuY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocnVsZSkgPT4gcnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSAmJiBydWxlLnNlbGVjdG9yVGV4dD8udHJpbT8uKCkgPT09IHNlbGVjdG9yPy50cmltPy4oKSk7XG5cdGlmIChydWxlSW5kZXggPT09IC0xKSB0cnkge1xuXHRcdHJ1bGVJbmRleCA9IHNoZWV0Lmluc2VydFJ1bGUoYCR7c2VsZWN0b3J9IHt9YCwgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGNvbnN0IHJ1bGUgPSBzaGVldC5jc3NSdWxlc1tydWxlSW5kZXhdO1xuXHRpZiAocnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSkgcmV0dXJuIHJ1bGU7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBzZXRTdHlsZVByb3BlcnR5ID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRyZXR1cm4gaGFzVHlwZWRPTSA/IHNldFN0eWxlUHJvcGVydHlUeXBlZChlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSkgOiBzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2soZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UpO1xufTtcbnZhciBzZXRTdHlsZUluUnVsZSA9IChzZWxlY3RvciwgbmFtZSwgdmFsdWUpID0+IHtcblx0cmV0dXJuIHNldFN0eWxlUHJvcGVydHkoZ2V0U3R5bGVSdWxlKHNlbGVjdG9yKSwgbmFtZSwgdmFsdWUpO1xufTtcbnZhciBzZXRTdHlsZVJ1bGUgPSAoc2VsZWN0b3IsIHNoZWV0KSA9PiB7XG5cdGNvbnN0IHJ1bGUgPSBnZXRTdHlsZVJ1bGUoc2VsZWN0b3IpO1xuXHRPYmplY3QuZW50cmllcyhzaGVldCkuZm9yRWFjaCgoW3Byb3BOYW1lLCBwcm9wVmFsdWVdKSA9PiBzZXRTdHlsZVByb3BlcnR5KHJ1bGUsIHByb3BOYW1lLCBwcm9wVmFsdWUpKTtcblx0cmV0dXJuIHJ1bGU7XG59O1xudmFyIGhhc2ggPSBhc3luYyAoc3RyaW5nKSA9PiB7XG5cdGNvbnN0IGhhc2hCdWZmZXIgPSBhd2FpdCBjcnlwdG8/LnN1YnRsZT8uZGlnZXN0KFwiU0hBLTI1NlwiLCB0eXBlb2Ygc3RyaW5nID09IFwic3RyaW5nXCIgPyBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc3RyaW5nKSA6IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gc3RyaW5nIDogYXdhaXQgc3RyaW5nPy5hcnJheUJ1ZmZlcj8uKCkpO1xuXHRyZXR1cm4gXCJzaGEyNTYtXCIgKyBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoaGFzaEJ1ZmZlcikpKTtcbn07XG52YXIgbG9hZFN0eWxlU2hlZXQgPSAoaW5saW5lLCBiYXNlLCBsYXllciA9IFwiXCIsIGludGVncml0eSkgPT4ge1xuXHRjb25zdCBsb2FkID0gZmV0Y2hBbmRDYWNoZShpbmxpbmUpO1xuXHRjb25zdCB1cmwgPSB0eXBlb2YgaW5saW5lID09IFwic3RyaW5nXCIgPyBVUkwuY2FuUGFyc2UoaW5saW5lKSA/IGlubGluZSA6IGxvYWQgOiBsb2FkO1xuXHRpZiAoYmFzZT8uWzBdKSBiYXNlWzBdLmZldGNoUHJpb3JpdHkgPSBcImhpZ2hcIjtcblx0aWYgKGJhc2UgJiYgdXJsICYmIHR5cGVvZiB1cmwgPT0gXCJzdHJpbmdcIikgc2V0U3R5bGVVUkwoYmFzZSwgdXJsLCBsYXllcik7XG5cdGlmIChiYXNlPy5bMF0gJiYgKCFVUkwuY2FuUGFyc2UoaW5saW5lKSB8fCBpbnRlZ3JpdHkpICYmIGJhc2U/LlswXSBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge31cblx0cmV0dXJuIHByb21pc2VPckRpcmVjdChsb2FkLCAocmVzKSA9PiB7XG5cdFx0aWYgKGJhc2U/LlswXSAmJiByZXMpIHtcblx0XHRcdHNldFN0eWxlVVJMKGJhc2UsIHJlcywgbGF5ZXIpO1xuXHRcdFx0YmFzZT8uWzBdLnNldEF0dHJpYnV0ZShcImxvYWRlZFwiLCBcIlwiKTtcblx0XHR9XG5cdH0pPy5jYXRjaD8uKChlcnJvcikgPT4ge1xuXHRcdGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBsb2FkIHN0eWxlIHNoZWV0OlwiLCBlcnJvcik7XG5cdH0pO1xufTtcbnZhciBsb2FkQmxvYlN0eWxlID0gKGlubGluZSkgPT4ge1xuXHRjb25zdCBzdHlsZSA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIikgOiBudWxsO1xuXHRpZiAoc3R5bGUpIHN0eWxlLmZldGNoUHJpb3JpdHkgPSBcImhpZ2hcIjtcblx0aWYgKHN0eWxlKSB7XG5cdFx0T2JqZWN0LmFzc2lnbihzdHlsZSwge1xuXHRcdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRcdHR5cGU6IFwidGV4dC9jc3NcIixcblx0XHRcdGNyb3NzT3JpZ2luOiBcInNhbWUtb3JpZ2luXCJcblx0XHR9KTtcblx0XHRzdHlsZS5kYXRhc2V0Lm93bmVyID0gT1dORVI7XG5cdFx0bG9hZFN0eWxlU2hlZXQoaW5saW5lLCBbc3R5bGUsIFwiaHJlZlwiXSk7XG5cdFx0dHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmQoc3R5bGUpO1xuXHRcdHJldHVybiBzdHlsZTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgbG9hZElubGluZVN0eWxlID0gKGlubGluZSwgcm9vdEVsZW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50Py5oZWFkIDogbnVsbCwgbGF5ZXIgPSBcIlwiKSA9PiB7XG5cdGNvbnN0IFBMQUNFID0gcm9vdEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I/LihcImhlYWRcIikgPz8gcm9vdEVsZW1lbnQ7XG5cdGlmICh0eXBlb2YgSFRNTEhlYWRFbGVtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgUExBQ0UgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQpIHJldHVybiBsb2FkQmxvYlN0eWxlKGlubGluZSk7XG5cdGNvbnN0IHN0eWxlID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikgOiBudWxsO1xuXHRpZiAoc3R5bGUpIHtcblx0XHRzdHlsZS5kYXRhc2V0Lm93bmVyID0gT1dORVI7XG5cdFx0bG9hZFN0eWxlU2hlZXQoaW5saW5lLCBbc3R5bGUsIFwiaW5uZXJIVE1MXCJdLCBsYXllcik7XG5cdFx0UExBQ0U/LnByZXBlbmQ/LihzdHlsZSk7XG5cdFx0cmV0dXJuIHN0eWxlO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBzZXRQcm9wZXJ0eSA9ICh0YXJnZXQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRyZXR1cm4gc2V0U3R5bGVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbn07XG52YXIgcHJlbG9hZFN0eWxlID0gKHN0eWxlcykgPT4ge1xuXHRyZXR1cm4gbG9hZEFzQWRvcHRlZChzdHlsZXMsIFwiXCIpO1xufTtcbnZhciBhZG9wdGVkTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBhZG9wdGVkQmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGFwcGx5QWRvcHRlZFN0eWxlVGV4dCA9IChzaGVldCwgY3NzVGV4dCkgPT4ge1xuXHRpZiAoIXNoZWV0IHx8ICFjc3NUZXh0KSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0c2hlZXQucmVwbGFjZVN5bmMoY3NzVGV4dCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc3QgbWVzc2FnZSA9IFN0cmluZyhlcnJvcj8ubWVzc2FnZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICghKG1lc3NhZ2UuaW5jbHVkZXMoXCJAaW1wb3J0IHJ1bGVzIGFyZSBub3QgYWxsb3dlZFwiKSB8fCBtZXNzYWdlLmluY2x1ZGVzKFwiQGltcG9ydFwiKSAmJiBtZXNzYWdlLmluY2x1ZGVzKFwibm90IGFsbG93ZWRcIikpKSBjb25zb2xlLndhcm4oXCJbRE9NXSBGYWlsZWQgdG8gYXBwbHkgYWRvcHRlZCBzdHlsZXNoZWV0OlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIGxvYWRBc0Fkb3B0ZWQgPSAoc3R5bGVzLCBsYXllck5hbWUgPSBudWxsKSA9PiB7XG5cdGlmICghc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCgpKSB7XG5cdFx0aWYgKHR5cGVvZiBzdHlsZXMgPT09IFwic3RyaW5nXCIpIGxvYWRJbmxpbmVTdHlsZShzdHlsZXMsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmICh0eXBlb2Ygc3R5bGVzID09PSBcInN0cmluZ1wiICYmIGNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudChzdHlsZXMpKSB7XG5cdFx0bG9hZElubGluZVN0eWxlKHN0eWxlcywgdm9pZCAwLCBsYXllck5hbWUgfHwgXCJcIik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiBhZG9wdGVkTWFwPy5oYXM/LihzdHlsZXMpKSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gYWRvcHRlZE1hcC5nZXQoc3R5bGVzKTtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKGNhY2hlZCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKGNhY2hlZCk7XG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXHRpZiAoKHN0eWxlcyBpbnN0YW5jZW9mIEJsb2IgfHwgc3R5bGVzIGluc3RhbmNlb2YgRmlsZSkgJiYgYWRvcHRlZEJsb2JNYXA/Lmhhcz8uKHN0eWxlcykpIHtcblx0XHRjb25zdCBjYWNoZWQgPSBhZG9wdGVkQmxvYk1hcC5nZXQoc3R5bGVzKTtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKGNhY2hlZCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKGNhY2hlZCk7XG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXHRpZiAoIXN0eWxlcykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHNoZWV0ID0gdHlwZW9mIHN0eWxlcyA9PSBcInN0cmluZ1wiID8gYWRvcHRlZE1hcC5nZXRPckluc2VydENvbXB1dGVkKHN0eWxlcywgKHN0eWxlcykgPT4gbmV3IENTU1N0eWxlU2hlZXQoKSkgOiBhZG9wdGVkQmxvYk1hcC5nZXRPckluc2VydENvbXB1dGVkKHN0eWxlcywgKHN0eWxlcykgPT4gbmV3IENTU1N0eWxlU2hlZXQoKSk7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMgJiYgIWRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzaGVldCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoZWV0KTtcblx0aWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiAhVVJMLmNhblBhcnNlKHN0eWxlcykpIHtcblx0XHRjb25zdCBsYXllcldyYXBwZWQgPSBsYXllck5hbWUgPyBgQGxheWVyICR7bGF5ZXJOYW1lfSB7ICR7c3R5bGVzfSB9YCA6IHN0eWxlcztcblx0XHRhZG9wdGVkTWFwLnNldChzdHlsZXMsIHNoZWV0KTtcblx0XHRpZiAoIWFwcGx5QWRvcHRlZFN0eWxlVGV4dChzaGVldCwgbGF5ZXJXcmFwcGVkKSkge1xuXHRcdFx0cmVtb3ZlQWRvcHRlZChzaGVldCk7XG5cdFx0XHRhZG9wdGVkTWFwLmRlbGV0ZShzdHlsZXMpO1xuXHRcdFx0bG9hZElubGluZVN0eWxlKHN0eWxlcyk7XG5cdFx0fVxuXHRcdHJldHVybiBzaGVldDtcblx0fSBlbHNlIHByb21pc2VPckRpcmVjdChmZXRjaEFzSW5saW5lKHN0eWxlcyksIChjYWNoZWQpID0+IHtcblx0XHRhZG9wdGVkTWFwLnNldChjYWNoZWQsIHNoZWV0KTtcblx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRpZiAoY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50KGNhY2hlZCkpIHtcblx0XHRcdFx0cmVtb3ZlQWRvcHRlZChzaGVldCk7XG5cdFx0XHRcdGFkb3B0ZWRNYXAuZGVsZXRlKGNhY2hlZCk7XG5cdFx0XHRcdGFkb3B0ZWRCbG9iTWFwLmRlbGV0ZShzdHlsZXMpO1xuXHRcdFx0XHRsb2FkSW5saW5lU3R5bGUoY2FjaGVkLCB2b2lkIDAsIGxheWVyTmFtZSB8fCBcIlwiKTtcblx0XHRcdFx0cmV0dXJuIHNoZWV0O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGF5ZXJXcmFwcGVkID0gbGF5ZXJOYW1lID8gYEBsYXllciAke2xheWVyTmFtZX0geyAke2NhY2hlZH0gfWAgOiBjYWNoZWQ7XG5cdFx0XHRpZiAoIWFwcGx5QWRvcHRlZFN0eWxlVGV4dChzaGVldCwgbGF5ZXJXcmFwcGVkKSkge1xuXHRcdFx0XHRyZW1vdmVBZG9wdGVkKHNoZWV0KTtcblx0XHRcdFx0YWRvcHRlZE1hcC5kZWxldGUoY2FjaGVkKTtcblx0XHRcdFx0YWRvcHRlZEJsb2JNYXAuZGVsZXRlKHN0eWxlcyk7XG5cdFx0XHRcdGxvYWRJbmxpbmVTdHlsZShjYWNoZWQsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNoZWV0O1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBzaGVldDtcbn07XG52YXIgcmVtb3ZlQWRvcHRlZCA9IChzaGVldCkgPT4ge1xuXHRpZiAoIXNoZWV0KSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHRhcmdldCA9IHR5cGVvZiBzaGVldCA9PT0gXCJzdHJpbmdcIiA/IGFkb3B0ZWRNYXAuZ2V0KHNoZWV0KSA6IHNoZWV0O1xuXHRpZiAoIXRhcmdldCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc2hlZXRzID0gZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzO1xuXHRjb25zdCBpZHggPSBzaGVldHMuaW5kZXhPZih0YXJnZXQpO1xuXHRpZiAoaWR4ICE9PSAtMSkge1xuXHRcdHNoZWV0cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xudmFyIHBhcnNlT3JpZ2luID0gKG9yaWdpbiwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCB2YWx1ZXMgPSBvcmlnaW4uc3BsaXQoXCIgXCIpO1xuXHRyZXR1cm4gbmV3IERPTVBvaW50KHBhcnNlTGVuZ3RoKHZhbHVlc1swXSwgKCkgPT4gZWxlbWVudC5jbGllbnRXaWR0aCksIHBhcnNlTGVuZ3RoKHZhbHVlc1sxXSwgKCkgPT4gZWxlbWVudC5jbGllbnRIZWlnaHQpKTtcbn07XG52YXIgcGFyc2VMZW5ndGggPSAodmFsdWUsIHNpemUpID0+IHtcblx0aWYgKHZhbHVlLmVuZHNXaXRoKFwiJVwiKSkgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIC8gMTAwICogc2l6ZSgpO1xuXHRyZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59O1xudmFyIGdldFRyYW5zZm9ybSA9IChlbCkgPT4ge1xuXHRpZiAoZWw/LmNvbXB1dGVkU3R5bGVNYXApIHtcblx0XHRjb25zdCBtYXRyaXggPSBlbC5jb21wdXRlZFN0eWxlTWFwKCkuZ2V0KFwidHJhbnNmb3JtXCIpPy50b01hdHJpeD8uKCk7XG5cdFx0aWYgKG1hdHJpeCkgcmV0dXJuIG1hdHJpeDtcblx0fSBlbHNlIGlmIChlbCkge1xuXHRcdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdFx0cmV0dXJuIG5ldyBET01NYXRyaXgoc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcInRyYW5zZm9ybVwiKSk7XG5cdH1cblx0cmV0dXJuIG5ldyBET01NYXRyaXgoKTtcbn07XG52YXIgZ2V0VHJhbnNmb3JtT3JpZ2luID0gKGVsKSA9PiB7XG5cdGNvbnN0IGNzc09yaWdpbiA9IGdldENvbXB1dGVkU3R5bGUoZWwpPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCJ0cmFuc2Zvcm0tb3JpZ2luXCIpIHx8IGA1MCUgNTAlYDtcblx0cmV0dXJuIHBhcnNlT3JpZ2luKGNzc09yaWdpbiwgZWwpO1xufTtcbnZhciBnZXRQcm9wZXJ0eVZhbHVlID0gKHNyYywgbmFtZSkgPT4ge1xuXHRpZiAoXCJjb21wdXRlZFN0eWxlTWFwXCIgaW4gc3JjKSB7XG5cdFx0Y29uc3QgdmFsID0gc3JjPy5jb21wdXRlZFN0eWxlTWFwPy4oKT8uZ2V0KG5hbWUpO1xuXHRcdHJldHVybiB2YWwgaW5zdGFuY2VvZiBDU1NVbml0VmFsdWUgPyB2YWw/LnZhbHVlIHx8IDAgOiB2YWw/LnRvU3RyaW5nPy4oKTtcblx0fVxuXHRpZiAoc3JjIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRjb25zdCBjcyA9IGdldENvbXB1dGVkU3R5bGU/LihzcmMsIFwiXCIpO1xuXHRcdHJldHVybiBwYXJzZUZsb2F0KGNzPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnJlcGxhY2U/LihcInB4XCIsIFwiXCIpKSB8fCAwO1xuXHR9XG5cdHJldHVybiBwYXJzZUZsb2F0KChzcmM/LnN0eWxlID8/IHNyYykuZ2V0UHJvcGVydHlWYWx1ZT8uKG5hbWUpPy5yZXBsYWNlPy4oXCJweFwiLCBcIlwiKSkgfHwgMDtcbn07XG52YXIgZ2V0RWxlbWVudFpvb20gPSAoZWxlbWVudCkgPT4ge1xuXHRsZXQgem9vbSA9IDEsIGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnRFbGVtZW50KSB7XG5cdFx0aWYgKFwiY3VycmVudENTU1pvb21cIiBpbiBjdXJyZW50RWxlbWVudCkge1xuXHRcdFx0Y29uc3QgY3VycmVudENTU1pvb20gPSBjdXJyZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbTtcblx0XHRcdGlmICh0eXBlb2YgY3VycmVudENTU1pvb20gPT09IFwibnVtYmVyXCIpIHJldHVybiB6b29tICo9IGN1cnJlbnRDU1Nab29tO1xuXHRcdH1cblx0XHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudEVsZW1lbnQpO1xuXHRcdGlmIChzdHlsZS56b29tICYmIHN0eWxlLnpvb20gIT09IFwibm9ybWFsXCIpIHJldHVybiB6b29tICo9IHBhcnNlRmxvYXQoc3R5bGUuem9vbSk7XG5cdFx0aWYgKHN0eWxlLnpvb20gJiYgc3R5bGUuem9vbSAhPT0gXCJub3JtYWxcIiB8fCBcImN1cnJlbnRDU1Nab29tXCIgaW4gY3VycmVudEVsZW1lbnQpIHJldHVybiB6b29tO1xuXHRcdGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBjdXJyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcblx0fVxuXHRyZXR1cm4gem9vbTtcbn07XG52YXIgZ2V0UHhWYWx1ZSA9IChlbGVtZW50LCBuYW1lKSA9PiB7XG5cdHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlPy4oZWxlbWVudCwgbmFtZSk7XG59O1xudmFyIGdldFBhZGRpbmcgPSAoc3JjLCBheGlzKSA9PiB7XG5cdGlmIChheGlzID09IFwiaW5saW5lXCIpIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWlubGluZS1zdGFydFwiKSArIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctaW5saW5lLWVuZFwiKTtcblx0cmV0dXJuIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctYmxvY2stc3RhcnRcIikgKyBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWJsb2NrLWVuZFwiKTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9CZWhhdmlvci50c1xudmFyIGJvdW5kQmVoYXZpb3JzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYmluZEJlaGF2aW9yID0gKGVsZW1lbnQsIGJlaFNldCwgYmVoYXZpb3IpID0+IHtcblx0bmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdGlmICghYmVoU2V0LmhhcyhiZWhhdmlvcikpIGJlaFNldC5hZGQoYmVoYXZpb3IpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdEJlaGF2aW9ycyA9IChlbGVtZW50LCBiZWhhdmlvcnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChiZWhhdmlvcnMpIHtcblx0XHRjb25zdCBiZWhTZXQgPSBib3VuZEJlaGF2aW9ycy5nZXRPckluc2VydChlbGVtZW50LCAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcblx0XHRbLi4uYmVoYXZpb3JzPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRCZWhhdmlvcihlbGVtZW50LCBiZWhTZXQsIGUpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9TdG9yZS50c1xudmFyIG5hbWVkU3RvcmVNYXBzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BuYW1lZFN0b3JlTWFwc1wiKTtcbnZhciBuYW1lZFN0b3JlTWFwcyA9IGdsb2JhbFRoaXNbbmFtZWRTdG9yZU1hcHNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGdldFN0b3Jlc09mRWxlbWVudCA9IChtYXAsIGVsZW1lbnQpID0+IHtcblx0Y29uc3QgRSA9IFsuLi5tYXAuZW50cmllcygpIHx8IFtdXTtcblx0cmV0dXJuIG5ldyBNYXAoRT8ubWFwPy4oKFtuLCBtXSkgPT4gW24sIG0/LmdldD8uKGVsZW1lbnQpXSk/LmZpbHRlcj8uKChbbiwgZV0pID0+ICEhZSkgfHwgW10pO1xufTtcbnZhciBpc1dlYWtDb21wYXRpYmxlID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuICh0eXBlb2YgZWxlbWVudCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBlbGVtZW50ID09IFwiZnVuY3Rpb25cIikgJiYgZWxlbWVudCAhPSBudWxsO1xufTtcbnZhciBiaW5kU3RvcmUgPSAoZWxlbWVudCwgbmFtZSwgb2JqKSA9PiB7XG5cdGlmICghaXNXZWFrQ29tcGF0aWJsZShlbGVtZW50KSAmJiBlbGVtZW50ICE9IG51bGwpIHJldHVybiBlbGVtZW50O1xuXHRsZXQgd2Vha01hcCA9IG5hbWVkU3RvcmVNYXBzLmdldChuYW1lKTtcblx0aWYgKCF3ZWFrTWFwKSB7XG5cdFx0d2Vha01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRcdG5hbWVkU3RvcmVNYXBzLnNldChuYW1lLCB3ZWFrTWFwKTtcblx0fVxuXHRpZiAoIXdlYWtNYXAuaGFzKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgd2Vha01hcC5zZXQoZWxlbWVudCwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIHJlZmxlY3RTdG9yZXMgPSAoZWxlbWVudCwgc3RvcmVzKSA9PiB7XG5cdGlmICghZWxlbWVudCB8fCAhc3RvcmVzKSByZXR1cm47XG5cdGZvciAoY29uc3QgW25hbWUsIG9ial0gb2Ygc3RvcmVzLmVudHJpZXMoKSkgYmluZFN0b3JlKGVsZW1lbnQsIG5hbWUsIG9iaik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL01peGlucy50c1xudmFyIHJlZmxlY3RNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW5zKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRpZiAobWl4aW5zKSB7XG5cdFx0Y29uc3QgbWl4aW5TZXQgPSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcblx0XHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdFx0Wy4uLm1peGlucz8udmFsdWVzPy4oKSB8fCBbXV0ubWFwKChlKSA9PiBiaW5kTWl4aW5zKGVsZW1lbnQsIGUsIG1peGluU2V0KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGdldEVsZW1lbnRSZWxhdGVkID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHtcblx0XHRzdG9yZVNldDogZ2V0U3RvcmVzT2ZFbGVtZW50KG5hbWVkU3RvcmVNYXBzLCBlbGVtZW50KSxcblx0XHRtaXhpblNldDogYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCksXG5cdFx0YmVoYXZpb3JTZXQ6IGJvdW5kQmVoYXZpb3JzPy5nZXQ/LihlbGVtZW50KVxuXHR9O1xufTtcbnZhciBiaW5kTWl4aW5zID0gKGVsZW1lbnQsIG1peGluLCBtaXhTZXQpID0+IHtcblx0Y29uc3Qgd2VsID0gbmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdG1peFNldCB8fD0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCk7XG5cdGlmICghbWl4U2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRtaXhTZXQ/LmFkZD8uKG1peGluKTtcblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHRcdGlmIChtaXhpbi5uYW1lKSBlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW10sIG1peGluLm5hbWVdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0bWl4aW4/LmNvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGJvdW5kTWl4aW5TZXRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGJvdW5kTWl4aW5TZXRcIik7XG52YXIgYm91bmRNaXhpblNldCA9IGdsb2JhbFRoaXNbYm91bmRNaXhpblNldFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluRWxlbWVudHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgbWl4aW5FbGVtZW50cyA9IGdsb2JhbFRoaXNbbWl4aW5FbGVtZW50c1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluUmVnaXN0cnlTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIik7XG52YXIgbWl4aW5SZWdpc3RyeSA9IGdsb2JhbFRoaXNbbWl4aW5SZWdpc3RyeVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgbWl4aW5OYW1lc3BhY2VTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIpO1xudmFyIG1peGluTmFtZXNwYWNlID0gZ2xvYmFsVGhpc1ttaXhpbk5hbWVzcGFjZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlcyA9IChlbGVtZW50LCBtaXhpbikgPT4ge1xuXHRpZiAodHlwZW9mIG1peGluID09IFwic3RyaW5nXCIpIG1peGluID0gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obWl4aW4pO1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdGNvbnN0IG1peGlucyA9IG5ldyBTZXQoWy4uLm5hbWVzXS5tYXAoKG4pID0+IG1peGluUmVnaXN0cnk/LmdldD8uKG4pKS5maWx0ZXIoKG0pID0+ICEhbSkpO1xuXHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRpZiAoIW1peGluRWxlbWVudHM/Lmhhcz8uKG1peGluKSkgbWl4aW5FbGVtZW50cz8uc2V0Py4obWl4aW4sIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKTtcblx0aWYgKCFib3VuZE1peGluU2V0Py5oYXM/LihlbGVtZW50KSkgYm91bmRNaXhpblNldD8uc2V0Py4oZWxlbWVudCwgbWl4aW5TZXQpO1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkgbWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0aWYgKG1peGlucy5oYXMobWl4aW4pIHx8ICFtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/Lmhhcz8uKGVsZW1lbnQpKSB7XG5cdFx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRcdG5hbWVzLmFkZChtaXhpbk5hbWVzcGFjZT8uZ2V0Py4obWl4aW4pKTtcblx0XHRcdG1peGluU2V0Py5hZGQ/LihtaXhpbik7XG5cdFx0XHRlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLm5hbWVzXS5maWx0ZXIoKG4pID0+ICEhbikuam9pbihcIiBcIikpO1xuXHRcdH1cblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHR9XG5cdGlmIChtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkge1xuXHRcdFx0bWl4aW5TZXQ/LmRlbGV0ZT8uKG1peGluKTtcblx0XHRcdG1peGluPy5kaXNjb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdH1cblx0fVxufTtcbnZhciByb290cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgYWRkUm9vdCA9IChyb290ID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKCFyb290KSByZXR1cm47XG5cdGlmICghcm9vdHM/Lmhhcz8uKHJvb3QpKSB7XG5cdFx0cm9vdHM/LmFkZD8uKHJvb3QpO1xuXHRcdG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKHJvb3QsIFwiKlwiLCBcImRhdGEtbWl4aW5cIiwgKG11dGF0aW9uKSA9PiB1cGRhdGVBbGxNaXhpbnMobXV0YXRpb24udGFyZ2V0KSk7XG5cdFx0b2JzZXJ2ZUJ5U2VsZWN0b3Iocm9vdCwgXCJbZGF0YS1taXhpbl1cIiwgKG11dGF0aW9uKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbXV0YXRpb24uYWRkZWROb2RlcykgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiByb290O1xufTtcbnZhciB1cGRhdGVBbGxNaXhpbnMgPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdFsuLi5uZXcgU2V0KFsuLi5uYW1lc10ubWFwKChuKSA9PiBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihuKSkuZmlsdGVyKChtKSA9PiAhIW0pKV0ubWFwPy4oKG0pID0+IHVwZGF0ZU1peGluQXR0cmlidXRlcyhlbGVtZW50LCBtKSk7XG59O1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCA9IChlbGVtZW50cywgbWl4aW4pID0+IHtcblx0ZWxlbWVudHMuZm9yRWFjaCgoZSkgPT4gbWl4aW4gPyB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZSwgbWl4aW4pIDogdXBkYXRlQWxsTWl4aW5zKGUpKTtcbn07XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyA9IChtaXhpbikgPT4ge1xuXHRmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbChyb290Py5xdWVyeVNlbGVjdG9yQWxsPy4oXCJbZGF0YS1taXhpbl1cIiksIG1peGluKTtcbn07XG52YXIgbmFtZVJlZ2lzdHJ5RiA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoa2V5KSA9PiB7XG5cdG1peGluUmVnaXN0cnk/LmRlbGV0ZT8uKGtleSk7XG59KTtcbnZhciByZWdpc3Rlck1peGluID0gKG5hbWUsIG1peGluKSA9PiB7XG5cdGlmICghbWl4aW5OYW1lc3BhY2U/Lmhhcz8uKG1peGluKSkge1xuXHRcdGNvbnN0IGtleSA9IG5hbWU/LnRyaW0/LigpO1xuXHRcdGlmIChrZXkpIHtcblx0XHRcdG1peGluTmFtZXNwYWNlPy5zZXQ/LihtaXhpbiwga2V5KTtcblx0XHRcdG1peGluUmVnaXN0cnk/LnNldD8uKGtleSwgbWl4aW4pO1xuXHRcdFx0bmFtZVJlZ2lzdHJ5Rj8ucmVnaXN0ZXI/LihtaXhpbiwga2V5KTtcblx0XHRcdHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMobWl4aW4pO1xuXHRcdH1cblx0fVxufTtcbmFkZFJvb3QodHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xudmFyIERPTU1peGluID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihuYW1lID0gbnVsbCkge1xuXHRcdGlmIChuYW1lKSByZWdpc3Rlck1peGluKG5hbWUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3Qod0VsZW1lbnQsIHdTZWxmLCByZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWxlbWVudCwgd1NlbGYsIHJlbGF0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRzdG9yZUZvckVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiBuYW1lZFN0b3JlTWFwcy5nZXQodGhpcy5uYW1lIHx8IFwiXCIpPy5nZXQ/LihlbGVtZW50KTtcblx0fVxuXHRyZWxhdGVkRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpO1xuXHR9XG5cdGdldCBlbGVtZW50cygpIHtcblx0XHRyZXR1cm4gbWl4aW5FbGVtZW50cz8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIG1peGluTmFtZXNwYWNlPy5nZXQ/Lih0aGlzKTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0hhbmRsZXIudHNcbnZhciBoYW5kbGVIaWRkZW4gPSAoZWxlbWVudCwgXywgdmlzaWJsZSkgPT4ge1xuXHRjb25zdCAkcmVmID0gdmlzaWJsZTtcblx0aWYgKGhhc1ZhbHVlKHZpc2libGUpKSB2aXNpYmxlID0gdmlzaWJsZS52YWx1ZTtcblx0Y29uc3QgaXNWaXNpYmxlID0gKHZpc2libGUgPSBub3JtYWxpemVQcmltaXRpdmUodmlzaWJsZSkpICE9IG51bGwgJiYgdmlzaWJsZSAhPT0gZmFsc2U7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgZWxlbWVudC5oaWRkZW4gPSAhaXNWaXNpYmxlO1xuXHRcdGVsc2UgaWYgKGlzVmlzaWJsZSkgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKTtcblx0XHRlbHNlIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIiwgXCJcIik7XG5cdH0pO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgaGFuZGxlUHJvcGVydHkgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIShwcm9wID0gdHlwZW9mIHByb3AgPT0gXCJzdHJpbmdcIiA/IGtlYmFiVG9DYW1lbChwcm9wKSA6IHByb3ApIHx8ICFlbCB8fCBbXG5cdFx0XCJzdHlsZVwiLFxuXHRcdFwiZGF0YXNldFwiLFxuXHRcdFwiYXR0cmlidXRlU3R5bGVNYXBcIixcblx0XHRcInN0eWxlTWFwXCIsXG5cdFx0XCJjb21wdXRlZFN0eWxlTWFwXCJcblx0XS5pbmRleE9mKHByb3AgfHwgXCJcIikgIT0gLTEpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0aWYgKGVsPy5bcHJvcF0gPT09IHZhbCkgcmV0dXJuIGVsO1xuXHRpZiAoZWw/Lltwcm9wXSAhPT0gdmFsKSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodmFsICE9IG51bGwpIGVsW3Byb3BdID0gdmFsO1xuXHRcdGVsc2UgZGVsZXRlIGVsW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVEYXRhc2V0ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3QgZGF0YXNldFJlZiA9IGVsPy5kYXRhc2V0O1xuXHRpZiAoIXByb3AgfHwgIWVsIHx8ICFkYXRhc2V0UmVmKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWw/LnZhbHVlO1xuXHRwcm9wID0ga2ViYWJUb0NhbWVsKHByb3ApO1xuXHRpZiAoZGF0YXNldFJlZj8uW3Byb3BdID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPT09IGZhbHNlKSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0ZWxzZSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiKSBkYXRhc2V0UmVmW3Byb3BdID0gU3RyaW5nKHZhbCk7XG5cdFx0ZWxzZSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgZGVsZXRlU3R5bGVQcm9wZXJ0eSA9IChlbCwgbmFtZSkgPT4gZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoY2FtZWxUb0tlYmFiKG5hbWUpKTtcbnZhciBoYW5kbGVTdHlsZUNoYW5nZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IHN0eWxlUmVmID0gZWw/LnN0eWxlO1xuXHRpZiAoIXByb3AgfHwgdHlwZW9mIHByb3AgIT0gXCJzdHJpbmdcIiB8fCAhZWwgfHwgIXN0eWxlUmVmKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIodmFsLCAoKSA9PiB7XG5cdFx0aWYgKGlzVmFsKHZhbCkgfHwgaGFzVmFsdWUodmFsKSB8fCBpc1ZhbHVlVW5pdCh2YWwpKSBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wLCB2YWwpO1xuXHRcdGVsc2UgaWYgKHZhbCA9PSBudWxsKSBkZWxldGVTdHlsZVByb3BlcnR5KGVsLCBwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlQXR0cmlidXRlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCFwcm9wIHx8ICFlbCkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRwcm9wID0gY2FtZWxUb0tlYmFiKHByb3ApO1xuXHRpZiAoZWw/LmdldEF0dHJpYnV0ZT8uKHByb3ApID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIgJiYgdmFsICE9IG51bGwgJiYgKHR5cGVvZiB2YWwgPT0gXCJib29sZWFuXCIgPyB2YWwgPT0gdHJ1ZSA6IHRydWUpKSBlbD8uc2V0QXR0cmlidXRlPy4ocHJvcCwgU3RyaW5nKHZhbCkpO1xuXHRcdGVsc2UgZWw/LnJlbW92ZUF0dHJpYnV0ZT8uKHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gZGlzdC9kb20uanNcbnZhciBvbiA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgbXQgPSBnbG9iYWxUaGlzW29uXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1mcmVxXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBpeGVsLXJhdGlvXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteFwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteVwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9XG5dLmZvckVhY2goKGUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgPiBcInVcIiB8fCB0eXBlb2YgQ1NTPy5yZWdpc3RlclByb3BlcnR5ICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCB0ID0gU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoISghdCB8fCBtdC5oYXModCkpKSB0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KGUpO1xuXHR9IGNhdGNoIChuKSB7XG5cdFx0U3RyaW5nKG4/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSAhPT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIiAmJiBjb25zb2xlLndhcm4obik7XG5cdH0gZmluYWxseSB7XG5cdFx0bXQuYWRkKHQpO1xuXHR9XG59KTtcbnZhciBtaSA9IHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgZG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA8IFwidVwiICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdGZvciAoOzspIGRuLmZvckVhY2goKGUpID0+IGU/LigpKSwgYXdhaXQgbmV3IFByb21pc2UoKGUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShlKSk7XG59KTtcbnZhciBQdCA9IHt9O1xuZnVuY3Rpb24geChlLCB0LCBuLCByID0gUHQpIHtcblx0ZT8uYWRkRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xuXHRjb25zdCBpID0gdHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgIWU/LmRlcmVmID8gbmV3IFdlYWtSZWYoZSkgOiBlO1xuXHRyZXR1cm4gKCkgPT4gaT8uZGVyZWY/LigpPy5yZW1vdmVFdmVudExpc3RlbmVyPy4odCwgbiwgcik7XG59XG52YXIgZm4gPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xudmFyIHBuID0gZ2xvYmFsVGhpc1tmbl0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIFR0ID0gKCkgPT4ge1xuXHRjb25zdCBlID0gdHlwZW9mIG1hdGNoTWVkaWEgPCBcInVcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiAhMSwgdCA9IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGwsIG4gPSB0ID8ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt0LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3QuaGVpZ2h0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dC5vZmZzZXRMZWZ0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt0Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh0LnNjYWxlID8/IDEpXG5cdH0gOiB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiA8IFwidVwiKSB7XG5cdFx0Y29uc3QgciA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIiwgaSA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBlID8gaSA6IHIsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGUgPyByIDogaSxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLm5cblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi5uXG5cdH07XG59O1xudmFyIEdlID0gVHQoKTtcbnZhciAkID0gbmV3IE9mZnNjcmVlbkNhbnZhcygxLCAxKS5nZXRDb250ZXh0KFwiMmRcIik7XG52YXIgQ24gPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BvbkJvcmRlck9ic2VydmVcIik7XG52YXIgRCA9IGdsb2JhbFRoaXNbQ25dID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBBbiA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQ29udGVudE9ic2VydmVcIik7XG52YXIgWiA9IGdsb2JhbFRoaXNbQW5dID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBzZSA9IChlKSA9PiAodHlwZW9mIGU/LmN1cnJlbnQgPT0gXCJvYmplY3RcIiAmJiAoZSA9IGU/LmVsZW1lbnQgPz8gZT8uY3VycmVudCA/PyAodHlwZW9mIGU/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGU/LnNlbGYgOiBudWxsKSA/PyBlKSwgZSk7XG52YXIgc3QgPSAoZSwgdCwgbiwgcikgPT4ge1xuXHRjb25zdCBpID0gbmV3IFNldChbLi4ubi5zcGxpdChcIixcIikgfHwgW25dXS5tYXAoKG8pID0+IG8udHJpbSgpKSksIHMgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobywgYSkgPT4ge1xuXHRcdGZvciAoY29uc3QgZCBvZiBvKSBpZiAoZC50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IHUgPSBBcnJheS5mcm9tKGQuYWRkZWROb2RlcykgfHwgW10sIHAgPSBBcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdHUucHVzaCguLi5BcnJheS5mcm9tKGQuYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoaCkgPT4gQXJyYXkuZnJvbShoPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIHAucHVzaCguLi5BcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChoKSA9PiBBcnJheS5mcm9tKGg/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgWy4uLm5ldyBTZXQodSldLmZpbHRlcigoaCkgPT4gaD8ubWF0Y2hlcz8uKHQpKT8ubWFwPy4oKGgpID0+IHtcblx0XHRcdFx0aS5mb3JFYWNoKChjKSA9PiB7XG5cdFx0XHRcdFx0cih7XG5cdFx0XHRcdFx0XHR0YXJnZXQ6IGgsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU6IGMsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogaD8uZ2V0QXR0cmlidXRlPy4oYylcblx0XHRcdFx0XHR9LCBhKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgZC50YXJnZXQ/Lm1hdGNoZXM/Lih0KSAmJiBkLmF0dHJpYnV0ZU5hbWUgJiYgaS5oYXMoZC5hdHRyaWJ1dGVOYW1lKSAmJiByKGQsIGEpO1xuXHR9KTtcblx0cmV0dXJuIHMub2JzZXJ2ZShlID0gc2UoZSksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogITAsXG5cdFx0YXR0cmlidXRlczogITAsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uaV0sXG5cdFx0Y2hpbGRMaXN0OiAhMCxcblx0XHRzdWJ0cmVlOiAhMCxcblx0XHRjaGFyYWN0ZXJEYXRhOiAhMFxuXHR9KSwgWy4uLmUucXVlcnlTZWxlY3RvckFsbCh0KV0ubWFwKChvKSA9PiBpLmZvckVhY2goKGEpID0+IHIoe1xuXHRcdHRhcmdldDogbyxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBhLFxuXHRcdG9sZFZhbHVlOiBvPy5nZXRBdHRyaWJ1dGU/LihhKVxuXHR9LCBzKSkpLCBzO1xufTtcbnZhciBqbiA9IChlLCB0ID0gXCIqXCIsIG4gPSAociwgaSkgPT4ge30pID0+IHtcblx0Y29uc3QgciA9IChjKSA9PiB7XG5cdFx0Y29uc3QgbCA9IEFycmF5LmZyb20oYyB8fCBbXSkgfHwgW107XG5cdFx0cmV0dXJuIGwucHVzaCguLi5BcnJheS5mcm9tKGMgfHwgW10pLmZsYXRNYXAoKGYpID0+IEFycmF5LmZyb20oZj8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KGwpLnZhbHVlcygpKV0uZmlsdGVyKChmKSA9PiBmPy5tYXRjaGVzPy4odCkpO1xuXHR9O1xuXHRsZXQgaSA9IG51bGw7XG5cdGNvbnN0IHMgPSAoYykgPT4ge1xuXHRcdGNvbnN0IGwgPSBpPy5kZXJlZj8uKCksIGYgPSByKGMuYWRkZWROb2RlcyksIG0gPSByKGMucmVtb3ZlZE5vZGVzKTtcblx0XHQoZi5sZW5ndGggPiAwIHx8IG0ubGVuZ3RoID4gMCkgJiYgbj8uKHtcblx0XHRcdHR5cGU6IGMudHlwZSxcblx0XHRcdHRhcmdldDogYy50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiBjLmF0dHJpYnV0ZU5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IGMuYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IGMubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogYy5vbGRWYWx1ZSxcblx0XHRcdHByZXZpb3VzU2libGluZzogYy5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzOiBmLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBtXG5cdFx0fSwgbCk7XG5cdH0sIG8gPSAoYykgPT4ge1xuXHRcdHMoe1xuXHRcdFx0YWRkZWROb2RlczogW2M/LnRhcmdldF0uZmlsdGVyKChsKSA9PiAhIWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbYz8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChsKSA9PiAhIWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogYz8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBhID0gKGMpID0+IHtcblx0XHRzKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtjPy5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKGwpID0+ICEhbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtjPy50YXJnZXRdLmZpbHRlcigobCkgPT4gISFsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGM/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgZCA9IChjKSA9PiB7XG5cdFx0cyh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbYz8udGFyZ2V0XS5maWx0ZXIoKGwpID0+ICEhbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtjPy5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKGwpID0+ICEhbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBjPy5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIHUgPSB7XG5cdFx0cGFzc2l2ZTogITAsXG5cdFx0Y2FwdHVyZTogITFcblx0fTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikgJiYgdD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBvLCB1KSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBhLCB1KSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgbywgdSksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBhLCB1KSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBhLCB1KSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgbywgdSksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgYSwgdSksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG8sIHUpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgYSwgdSksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgYSwgdSk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBvLCB1KSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBhLCB1KSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgbywgdSksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgYSwgdSk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgbywgdSksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBhLCB1KSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBhLCB1KSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgbywgdSksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBhLCB1KSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBhLCB1KTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXZpc2libGVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIG8sIHUpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBhLCB1KSwgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZCwgdSksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgbywgdSksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGEsIHUpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkLCB1KTtcblx0fSB9O1xuXHRjb25zdCBwID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKGMsIGwpID0+IHtcblx0XHRmb3IgKGNvbnN0IGYgb2YgYykgZi50eXBlID09IFwiY2hpbGRMaXN0XCIgJiYgcyhmKTtcblx0fSk7XG5cdGkgPSBuZXcgV2Vha1JlZihwKSwgKGU/LmVsZW1lbnQgPz8gZSkgaW5zdGFuY2VvZiBOb2RlICYmIHAub2JzZXJ2ZShlID0gc2UoZSksIHtcblx0XHRjaGlsZExpc3Q6ICEwLFxuXHRcdHN1YnRyZWU6ICEwXG5cdH0pO1xuXHRjb25zdCBoID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwodCkpO1xuXHRyZXR1cm4gaC5sZW5ndGggPiAwICYmIG4/Lih7XG5cdFx0YWRkZWROb2RlczogaCxcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIHApLCBwO1xufTtcbnZhciBsdCA9IFwiRE9NXCI7XG52YXIgZWUgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSA6IG51bGw7XG5lZSAmJiAodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oZWUpLCBlZS5kYXRhc2V0Lm93bmVyID0gbHQpO1xudmFyIHplID0gdHlwZW9mIENTU1N0eWxlVmFsdWUgPCBcInVcIiAmJiB0eXBlb2YgQ1NTVW5pdFZhbHVlIDwgXCJ1XCI7XG52YXIgRiA9IChlKSA9PiB6ZSAmJiBlIGluc3RhbmNlb2YgQ1NTU3R5bGVWYWx1ZTtcbnZhciBQID0gKGUpID0+IHplICYmIGUgaW5zdGFuY2VvZiBDU1NVbml0VmFsdWU7XG52YXIgQyA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoISghZSB8fCAhdCkpIHtcblx0XHRpZiAobiA9PSBudWxsKSB7XG5cdFx0XHRlLmdldFByb3BlcnR5VmFsdWUodCkgIT09IFwiXCIgJiYgZS5yZW1vdmVQcm9wZXJ0eSh0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZS5nZXRQcm9wZXJ0eVZhbHVlKHQpICE9PSBuICYmIGUuc2V0UHJvcGVydHkodCwgbiwgcik7XG5cdH1cbn07XG52YXIgTm4gPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IHtcblx0aWYgKCFlIHx8ICF0KSByZXR1cm4gZTtcblx0Y29uc3QgaSA9IGNhbWVsVG9LZWJhYih0KSwgcyA9IGUuc3R5bGUsIG8gPSBlLmF0dHJpYnV0ZVN0eWxlTWFwID8/IGUuc3R5bGVNYXA7XG5cdGlmICghemUgfHwgIW8pIHJldHVybiBXdChlLCB0LCBuLCByKTtcblx0bGV0IGEgPSBoYXNWYWx1ZShuKSAmJiAhKEYobikgfHwgUChuKSkgPyBuPy52YWx1ZSA6IG47XG5cdGlmIChhID09IG51bGwpIHJldHVybiBvLmRlbGV0ZT8uKGkpLCBzICYmIEMocywgaSwgbnVsbCwgciksIGU7XG5cdGlmIChGKGEpKSB7XG5cdFx0Y29uc3QgZCA9IG8uZ2V0KGkpO1xuXHRcdGlmIChQKGEpICYmIFAoZCkpIHtcblx0XHRcdGlmIChkLnZhbHVlID09PSBhLnZhbHVlICYmIGQudW5pdCA9PT0gYS51bml0KSByZXR1cm4gZTtcblx0XHR9IGVsc2UgaWYgKGQgPT09IGEpIHJldHVybiBlO1xuXHRcdHJldHVybiBvLnNldChpLCBhKSwgZTtcblx0fVxuXHRpZiAodHlwZW9mIGEgPT0gXCJudW1iZXJcIikgaWYgKENTUz8ubnVtYmVyICYmICFpLnN0YXJ0c1dpdGgoXCItLVwiKSkge1xuXHRcdGNvbnN0IGQgPSBDU1MubnVtYmVyKGEpLCB1ID0gby5nZXQoaSk7XG5cdFx0cmV0dXJuIFAodSkgJiYgdS52YWx1ZSA9PT0gZC52YWx1ZSAmJiB1LnVuaXQgPT09IGQudW5pdCB8fCBvLnNldChpLCBkKSwgZTtcblx0fSBlbHNlIHJldHVybiBDKHMsIGksIFN0cmluZyhhKSwgciksIGU7XG5cdGlmICh0eXBlb2YgYSA9PSBcInN0cmluZ1wiICYmICFGKGEpKSB7XG5cdFx0Y29uc3QgZCA9IHRyeVN0cmluZ0FzTnVtYmVyKGEpO1xuXHRcdGlmICh0eXBlb2YgZCA9PSBcIm51bWJlclwiICYmIENTUz8ubnVtYmVyICYmICFpLnN0YXJ0c1dpdGgoXCItLVwiKSkge1xuXHRcdFx0Y29uc3QgdSA9IENTUy5udW1iZXIoZCksIHAgPSBvLmdldChpKTtcblx0XHRcdHJldHVybiBQKHApICYmIHAudmFsdWUgPT09IHUudmFsdWUgJiYgcC51bml0ID09PSB1LnVuaXQgfHwgby5zZXQoaSwgdSksIGU7XG5cdFx0fSBlbHNlIHJldHVybiBDKHMsIGksIGEsIHIpLCBlO1xuXHR9XG5cdHJldHVybiBDKHMsIGksIFN0cmluZyhhKSwgciksIGU7XG59O1xudmFyIFd0ID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBjYW1lbFRvS2ViYWIodCksIHMgPSBlLnN0eWxlO1xuXHRpZiAoIXMpIHJldHVybiBlO1xuXHRsZXQgbyA9IGhhc1ZhbHVlKG4pICYmICEoRihuKSB8fCBQKG4pKSA/IG4/LnZhbHVlIDogbjtcblx0cmV0dXJuIHR5cGVvZiBvID09IFwic3RyaW5nXCIgJiYgIUYobykgJiYgKG8gPSB0cnlTdHJpbmdBc051bWJlcihvKSA/PyBvKSwgbyA9PSBudWxsID8gKEMocywgaSwgbnVsbCwgciksIGUpIDogKEYobyksIEMocywgaSwgU3RyaW5nKG8pLCByKSwgZSk7XG59O1xudmFyIGtlID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB6ZSA/IE5uKGUsIHQsIG4sIHIpIDogV3QoZSwgdCwgbiwgcik7XG52YXIgRnQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBCbiA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG5hbWVkU3RvcmVNYXBzXCIpO1xudmFyIG5lID0gZ2xvYmFsVGhpc1tCbl0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgX24gPSAoZSwgdCkgPT4ge1xuXHRjb25zdCBuID0gWy4uLmUuZW50cmllcygpIHx8IFtdXTtcblx0cmV0dXJuIG5ldyBNYXAobj8ubWFwPy4oKFtyLCBpXSkgPT4gW3IsIGk/LmdldD8uKHQpXSk/LmZpbHRlcj8uKChbciwgaV0pID0+ICEhaSkgfHwgW10pO1xufTtcbnZhciB0ZSA9IChlKSA9PiAoe1xuXHRzdG9yZVNldDogX24obmUsIGUpLFxuXHRtaXhpblNldDogaj8uZ2V0Py4oZSksXG5cdGJlaGF2aW9yU2V0OiBGdD8uZ2V0Py4oZSlcbn0pO1xudmFyIFhuID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBqID0gZ2xvYmFsVGhpc1tYbl0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIFluID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5FbGVtZW50c1wiKTtcbnZhciBOID0gZ2xvYmFsVGhpc1tZbl0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIEpuID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5SZWdpc3RyeVwiKTtcbnZhciByZSA9IGdsb2JhbFRoaXNbSm5dID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIEduID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5OYW1lc3BhY2VcIik7XG52YXIgRWUgPSBnbG9iYWxUaGlzW0duXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgSXQgPSAoZSwgdCkgPT4ge1xuXHR0eXBlb2YgdCA9PSBcInN0cmluZ1wiICYmICh0ID0gcmU/LmdldD8uKHQpKTtcblx0Y29uc3QgbiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lPy5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSksIHIgPSBuZXcgU2V0KFsuLi5uXS5tYXAoKG8pID0+IHJlPy5nZXQ/LihvKSkuZmlsdGVyKChvKSA9PiAhIW8pKSwgaSA9IGo/LmdldD8uKGUpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHROPy5oYXM/Lih0KSB8fCBOPy5zZXQ/Lih0LCAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKSksIGo/Lmhhcz8uKGUpIHx8IGo/LnNldD8uKGUsIGkpO1xuXHRjb25zdCBzID0gbmV3IFdlYWtSZWYoZSk7XG5cdGk/Lmhhcz8uKHQpIHx8IChyLmhhcyh0KSB8fCB0Py5kaXNjb25uZWN0Py4ocywgdCwgdGUoZSkpLCAoci5oYXModCkgfHwgIU4/LmdldD8uKHQpPy5oYXM/LihlKSkgJiYgKHQ/LmNvbm5lY3Q/LihzLCB0LCB0ZShlKSksIG4uYWRkKEVlPy5nZXQ/Lih0KSksIGk/LmFkZD8uKHQpLCBlPy5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLm5dLmZpbHRlcigobykgPT4gISFvKS5qb2luKFwiIFwiKSkpLCBOPy5nZXQ/Lih0KT8uYWRkPy4oZSkpLCBpPy5oYXM/Lih0KSAmJiAoci5oYXModCkgfHwgKGk/LmRlbGV0ZT8uKHQpLCB0Py5kaXNjb25uZWN0Py4ocywgdCwgdGUoZSkpKSk7XG59O1xudmFyIEtlID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBLbiA9IChlID0gdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKGUpIHJldHVybiBLZT8uaGFzPy4oZSkgfHwgKEtlPy5hZGQ/LihlKSwgc3QoZSwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAodCkgPT4gUWUodC50YXJnZXQpKSwgam4oZSwgXCJbZGF0YS1taXhpbl1cIiwgKHQpID0+IHtcblx0XHRmb3IgKGNvbnN0IG4gb2YgdC5hZGRlZE5vZGVzKSBuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgUWUobik7XG5cdH0pKSwgZTtcbn07XG52YXIgUWUgPSAoZSkgPT4ge1xuXHRjb25zdCB0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Wy4uLm5ldyBTZXQoWy4uLnRdLm1hcCgobikgPT4gcmU/LmdldD8uKG4pKS5maWx0ZXIoKG4pID0+ICEhbikpXS5tYXA/LigobikgPT4gSXQoZSwgbikpO1xufTtcbnZhciBRbiA9IChlLCB0KSA9PiB7XG5cdGUuZm9yRWFjaCgobikgPT4gdCA/IEl0KG4sIHQpIDogUWUobikpO1xufTtcbnZhciBlciA9IChlKSA9PiB7XG5cdGZvciAoY29uc3QgdCBvZiBLZSkgUW4odD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBlKTtcbn07XG52YXIgdHIgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGUpID0+IHtcblx0cmU/LmRlbGV0ZT8uKGUpO1xufSk7XG52YXIgbnIgPSAoZSwgdCkgPT4ge1xuXHRpZiAoIUVlPy5oYXM/Lih0KSkge1xuXHRcdGNvbnN0IG4gPSBlPy50cmltPy4oKTtcblx0XHRuICYmIChFZT8uc2V0Py4odCwgbiksIHJlPy5zZXQ/LihuLCB0KSwgdHI/LnJlZ2lzdGVyPy4odCwgbiksIGVyKHQpKTtcblx0fVxufTtcbktuKHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciBtYSA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoZSA9IG51bGwpIHtcblx0XHRlICYmIG5yKGUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHN0b3JlRm9yRWxlbWVudChlKSB7XG5cdFx0cmV0dXJuIG5lLmdldCh0aGlzLm5hbWUgfHwgXCJcIik/LmdldD8uKGUpO1xuXHR9XG5cdHJlbGF0ZWRGb3JFbGVtZW50KGUpIHtcblx0XHRyZXR1cm4gdGUoZSk7XG5cdH1cblx0Z2V0IGVsZW1lbnRzKCkge1xuXHRcdHJldHVybiBOPy5nZXQ/Lih0aGlzKTtcblx0fVxuXHRnZXQgc3RvcmFnZSgpIHtcblx0XHRyZXR1cm4gbmU/LmdldD8uKHRoaXMubmFtZSB8fCBcIlwiKTtcblx0fVxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gRWU/LmdldD8uKHRoaXMpO1xuXHR9XG59O1xudmFyIGlyID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBMdCA9IGdsb2JhbFRoaXNbaXJdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuW1xuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jbGlwLWZyZXFcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGl4ZWwtcmF0aW9cIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjFcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudC15XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JvbGwtbGVmdFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC14XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC15XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH1cbl0uZm9yRWFjaCgoZSkgPT4ge1xuXHRpZiAodHlwZW9mIENTUyA+IFwidVwiIHx8IHR5cGVvZiBDU1M/LnJlZ2lzdGVyUHJvcGVydHkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdGNvbnN0IHQgPSBTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50cmltKCk7XG5cdGlmICghKCF0IHx8IEx0Lmhhcyh0KSkpIHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkoZSk7XG5cdH0gY2F0Y2ggKG4pIHtcblx0XHRTdHJpbmcobj8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpICE9PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiICYmIGNvbnNvbGUud2FybihuKTtcblx0fSBmaW5hbGx5IHtcblx0XHRMdC5hZGQodCk7XG5cdH1cbn0pO1xudHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudDtcbnZhciBhciA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG50eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIDwgXCJ1XCIgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFzeW5jICgpID0+IHtcblx0Zm9yICg7OykgYXIuZm9yRWFjaCgoZSkgPT4gZT8uKCkpLCBhd2FpdCBuZXcgUHJvbWlzZSgoZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGUpKTtcbn0pO1xudmFyIG9yID0ge307XG5mdW5jdGlvbiB3KGUsIHQsIG4sIHIgPSBvcikge1xuXHRlPy5hZGRFdmVudExpc3RlbmVyPy4odCwgbiwgcik7XG5cdGNvbnN0IGkgPSB0eXBlb2YgZSA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBlID09IFwiZnVuY3Rpb25cIiAmJiAhZT8uZGVyZWYgPyBuZXcgV2Vha1JlZihlKSA6IGU7XG5cdHJldHVybiAoKSA9PiBpPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0LCBuLCByKTtcbn1cbnZhciBzciA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQHpvb21WYWx1ZXNcIik7XG5nbG9iYWxUaGlzW3NyXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbHIgPSAoKSA9PiB7XG5cdGNvbnN0IGUgPSB0eXBlb2YgbWF0Y2hNZWRpYSA8IFwidVwiID8gbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyA6ICExLCB0ID0gdHlwZW9mIHdpbmRvdyA8IFwidVwiID8gd2luZG93LnZpc3VhbFZpZXdwb3J0IDogbnVsbCwgbiA9IHQgPyB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IGAke3Qud2lkdGh9cHhgLFxuXHRcdFwiLS12di1oZWlnaHRcIjogYCR7dC5oZWlnaHR9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtbGVmdFwiOiBgJHt0Lm9mZnNldExlZnR9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtdG9wXCI6IGAke3Qub2Zmc2V0VG9wfXB4YCxcblx0XHRcIi0tdnYtc2NhbGVcIjogU3RyaW5nKHQuc2NhbGUgPz8gMSlcblx0fSA6IHtcblx0XHRcIi0tdnYtd2lkdGhcIjogdHlwZW9mIHdpbmRvdyA8IFwidVwiID8gYCR7d2luZG93LmlubmVyV2lkdGh9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGAgOiBcIjBweFwiLFxuXHRcdFwiLS12di1vZmZzZXQtbGVmdFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1vZmZzZXQtdG9wXCI6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFwiMVwiXG5cdH07XG5cdGlmICh0eXBlb2Ygc2NyZWVuIDwgXCJ1XCIpIHtcblx0XHRjb25zdCByID0gc2NyZWVuPy5hdmFpbFdpZHRoICsgXCJweFwiLCBpID0gc2NyZWVuPy5hdmFpbEhlaWdodCArIFwicHhcIjtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCItLXNjcmVlbi13aWR0aFwiOiBNYXRoLm1pbihzY3JlZW4/LndpZHRoLCBzY3JlZW4/LmF2YWlsV2lkdGgpICsgXCJweFwiLFxuXHRcdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogTWF0aC5taW4oc2NyZWVuPy5oZWlnaHQsIHNjcmVlbj8uYXZhaWxIZWlnaHQpICsgXCJweFwiLFxuXHRcdFx0XCItLWF2YWlsLXdpZHRoXCI6IGUgPyBpIDogcixcblx0XHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogZSA/IHIgOiBpLFxuXHRcdFx0XCItLXZpZXctaGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uYXZhaWxIZWlnaHQsIHdpbmRvdz8uaW5uZXJIZWlnaHQpICsgXCJweFwiLFxuXHRcdFx0XCItLXBpeGVsLXJhdGlvXCI6IFN0cmluZyhkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLFxuXHRcdFx0Li4ublxuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtd2lkdGhcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXZpZXctaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXBpeGVsLXJhdGlvXCI6IFwiMVwiLFxuXHRcdC4uLm5cblx0fTtcbn07XG5scigpO1xubmV3IE9mZnNjcmVlbkNhbnZhcygxLCAxKS5nZXRDb250ZXh0KFwiMmRcIik7XG52YXIgY3IgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BvbkJvcmRlck9ic2VydmVcIik7XG5nbG9iYWxUaGlzW2NyXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdXIgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BvbkNvbnRlbnRPYnNlcnZlXCIpO1xuZ2xvYmFsVGhpc1t1cl0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIEh0ID0gKGUpID0+ICh0eXBlb2YgZT8uY3VycmVudCA9PSBcIm9iamVjdFwiICYmIChlID0gZT8uZWxlbWVudCA/PyBlPy5jdXJyZW50ID8/ICh0eXBlb2YgZT8uc2VsZiA9PSBcIm9iamVjdFwiID8gZT8uc2VsZiA6IG51bGwpID8/IGUpLCBlKTtcbnZhciBkciA9IChlLCB0LCBuLCByKSA9PiB7XG5cdGNvbnN0IGkgPSBuZXcgU2V0KFsuLi5uLnNwbGl0KFwiLFwiKSB8fCBbbl1dLm1hcCgobykgPT4gby50cmltKCkpKSwgcyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChvLCBhKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBkIG9mIG8pIGlmIChkLnR5cGUgPT0gXCJjaGlsZExpc3RcIikge1xuXHRcdFx0Y29uc3QgdSA9IEFycmF5LmZyb20oZC5hZGRlZE5vZGVzKSB8fCBbXSwgcCA9IEFycmF5LmZyb20oZC5yZW1vdmVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0dS5wdXNoKC4uLkFycmF5LmZyb20oZC5hZGRlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChoKSA9PiBBcnJheS5mcm9tKGg/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgcC5wdXNoKC4uLkFycmF5LmZyb20oZC5yZW1vdmVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGgpID0+IEFycmF5LmZyb20oaD8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBbLi4ubmV3IFNldCh1KV0uZmlsdGVyKChoKSA9PiBoPy5tYXRjaGVzPy4odCkpPy5tYXA/LigoaCkgPT4ge1xuXHRcdFx0XHRpLmZvckVhY2goKGMpID0+IHtcblx0XHRcdFx0XHRyKHtcblx0XHRcdFx0XHRcdHRhcmdldDogaCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogYyxcblx0XHRcdFx0XHRcdG9sZFZhbHVlOiBoPy5nZXRBdHRyaWJ1dGU/LihjKVxuXHRcdFx0XHRcdH0sIGEpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBkLnRhcmdldD8ubWF0Y2hlcz8uKHQpICYmIGQuYXR0cmlidXRlTmFtZSAmJiBpLmhhcyhkLmF0dHJpYnV0ZU5hbWUpICYmIHIoZCwgYSk7XG5cdH0pO1xuXHRyZXR1cm4gcy5vYnNlcnZlKGUgPSBIdChlKSwge1xuXHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiAhMCxcblx0XHRhdHRyaWJ1dGVzOiAhMCxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5pXSxcblx0XHRjaGlsZExpc3Q6ICEwLFxuXHRcdHN1YnRyZWU6ICEwLFxuXHRcdGNoYXJhY3RlckRhdGE6ICEwXG5cdH0pLCBbLi4uZS5xdWVyeVNlbGVjdG9yQWxsKHQpXS5tYXAoKG8pID0+IGkuZm9yRWFjaCgoYSkgPT4gcih7XG5cdFx0dGFyZ2V0OiBvLFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGEsXG5cdFx0b2xkVmFsdWU6IG8/LmdldEF0dHJpYnV0ZT8uKGEpXG5cdH0sIHMpKSksIHM7XG59O1xudmFyIGZyID0gKGUsIHQgPSBcIipcIiwgbiA9IChyLCBpKSA9PiB7fSkgPT4ge1xuXHRjb25zdCByID0gKGMpID0+IHtcblx0XHRjb25zdCBsID0gQXJyYXkuZnJvbShjIHx8IFtdKSB8fCBbXTtcblx0XHRyZXR1cm4gbC5wdXNoKC4uLkFycmF5LmZyb20oYyB8fCBbXSkuZmxhdE1hcCgoZikgPT4gQXJyYXkuZnJvbShmPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIFsuLi5BcnJheS5mcm9tKG5ldyBTZXQobCkudmFsdWVzKCkpXS5maWx0ZXIoKGYpID0+IGY/Lm1hdGNoZXM/Lih0KSk7XG5cdH07XG5cdGxldCBpID0gbnVsbDtcblx0Y29uc3QgcyA9IChjKSA9PiB7XG5cdFx0Y29uc3QgbCA9IGk/LmRlcmVmPy4oKSwgZiA9IHIoYy5hZGRlZE5vZGVzKSwgbSA9IHIoYy5yZW1vdmVkTm9kZXMpO1xuXHRcdChmLmxlbmd0aCA+IDAgfHwgbS5sZW5ndGggPiAwKSAmJiBuPy4oe1xuXHRcdFx0dHlwZTogYy50eXBlLFxuXHRcdFx0dGFyZ2V0OiBjLnRhcmdldCxcblx0XHRcdGF0dHJpYnV0ZU5hbWU6IGMuYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogYy5hdHRyaWJ1dGVOYW1lc3BhY2UsXG5cdFx0XHRuZXh0U2libGluZzogYy5uZXh0U2libGluZyxcblx0XHRcdG9sZFZhbHVlOiBjLm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiBjLnByZXZpb3VzU2libGluZyxcblx0XHRcdGFkZGVkTm9kZXM6IGYsXG5cdFx0XHRyZW1vdmVkTm9kZXM6IG1cblx0XHR9LCBsKTtcblx0fSwgbyA9IChjKSA9PiB7XG5cdFx0cyh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbYz8udGFyZ2V0XS5maWx0ZXIoKGwpID0+ICEhbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtjPy5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKGwpID0+ICEhbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBjPy5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIGEgPSAoYykgPT4ge1xuXHRcdHMoe1xuXHRcdFx0YWRkZWROb2RlczogW2M/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigobCkgPT4gISFsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2M/LnRhcmdldF0uZmlsdGVyKChsKSA9PiAhIWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogYz8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBkID0gKGMpID0+IHtcblx0XHRzKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtjPy50YXJnZXRdLmZpbHRlcigobCkgPT4gISFsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2M/LnJlbGF0ZWRUYXJnZXQgfHwgZG9jdW1lbnQ/LmFjdGl2ZUVsZW1lbnRdLmZpbHRlcigobCkgPT4gISFsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGM/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgdSA9IHtcblx0XHRwYXNzaXZlOiAhMCxcblx0XHRjYXB0dXJlOiAhMVxuXHR9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkgcmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIG8sIHUpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGEsIHUpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvLCB1KSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGEsIHUpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGEsIHUpLCB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBvLCB1KSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBhLCB1KSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgbywgdSksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBhLCB1KSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBhLCB1KTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSkgcmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIG8sIHUpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGEsIHUpLCB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBvLCB1KSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBhLCB1KTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvLCB1KSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGEsIHUpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGEsIHUpLCB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvLCB1KSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGEsIHUpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGEsIHUpO1xuXHR9IH07XG5cdGlmICh0Py5pbmNsdWRlcz8uKFwiOmZvY3VzXCIpICYmIHQ/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtd2l0aGluXCIpICYmIHQ/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtdmlzaWJsZVwiKSkgcmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgbywgdSksIGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGEsIHUpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkLCB1KSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBvLCB1KSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgYSwgdSksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGQsIHUpO1xuXHR9IH07XG5cdGNvbnN0IHAgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoYywgbCkgPT4ge1xuXHRcdGZvciAoY29uc3QgZiBvZiBjKSBmLnR5cGUgPT0gXCJjaGlsZExpc3RcIiAmJiBzKGYpO1xuXHR9KTtcblx0aSA9IG5ldyBXZWFrUmVmKHApLCAoZT8uZWxlbWVudCA/PyBlKSBpbnN0YW5jZW9mIE5vZGUgJiYgcC5vYnNlcnZlKGUgPSBIdChlKSwge1xuXHRcdGNoaWxkTGlzdDogITAsXG5cdFx0c3VidHJlZTogITBcblx0fSk7XG5cdGNvbnN0IGggPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCh0KSk7XG5cdHJldHVybiBoLmxlbmd0aCA+IDAgJiYgbj8uKHtcblx0XHRhZGRlZE5vZGVzOiBoLFxuXHRcdHJlbW92ZWROb2RlczogW11cblx0fSwgcCksIHA7XG59O1xudmFyIHByID0gXCJET01cIjtcbnZhciAkZSA9IHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpIDogbnVsbDtcbiRlICYmICh0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKT8uYXBwZW5kQ2hpbGQ/LigkZSksICRlLmRhdGFzZXQub3duZXIgPSBwcik7XG52YXIgUGUgPSB0eXBlb2YgQ1NTU3R5bGVWYWx1ZSA8IFwidVwiICYmIHR5cGVvZiBDU1NVbml0VmFsdWUgPCBcInVcIjtcbnZhciBJID0gKGUpID0+IFBlICYmIGUgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlO1xudmFyIFQgPSAoZSkgPT4gUGUgJiYgZSBpbnN0YW5jZW9mIENTU1VuaXRWYWx1ZTtcbnZhciBXID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghKCFlIHx8ICF0KSkge1xuXHRcdGlmIChuID09IG51bGwpIHtcblx0XHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gXCJcIiAmJiBlLnJlbW92ZVByb3BlcnR5KHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRlLmdldFByb3BlcnR5VmFsdWUodCkgIT09IG4gJiYgZS5zZXRQcm9wZXJ0eSh0LCBuLCByKTtcblx0fVxufTtcbnZhciBociA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoIWUgfHwgIXQpIHJldHVybiBlO1xuXHRjb25zdCBpID0gY2FtZWxUb0tlYmFiKHQpLCBzID0gZS5zdHlsZSwgbyA9IGUuYXR0cmlidXRlU3R5bGVNYXAgPz8gZS5zdHlsZU1hcDtcblx0aWYgKCFQZSB8fCAhbykgcmV0dXJuIHF0KGUsIHQsIG4sIHIpO1xuXHRsZXQgYSA9IGhhc1ZhbHVlKG4pICYmICEoSShuKSB8fCBUKG4pKSA/IG4/LnZhbHVlIDogbjtcblx0aWYgKGEgPT0gbnVsbCkgcmV0dXJuIG8uZGVsZXRlPy4oaSksIHMgJiYgVyhzLCBpLCBudWxsLCByKSwgZTtcblx0aWYgKEkoYSkpIHtcblx0XHRjb25zdCBkID0gby5nZXQoaSk7XG5cdFx0aWYgKFQoYSkgJiYgVChkKSkge1xuXHRcdFx0aWYgKGQudmFsdWUgPT09IGEudmFsdWUgJiYgZC51bml0ID09PSBhLnVuaXQpIHJldHVybiBlO1xuXHRcdH0gZWxzZSBpZiAoZCA9PT0gYSkgcmV0dXJuIGU7XG5cdFx0cmV0dXJuIG8uc2V0KGksIGEpLCBlO1xuXHR9XG5cdGlmICh0eXBlb2YgYSA9PSBcIm51bWJlclwiKSBpZiAoQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0Y29uc3QgZCA9IENTUy5udW1iZXIoYSksIHUgPSBvLmdldChpKTtcblx0XHRyZXR1cm4gVCh1KSAmJiB1LnZhbHVlID09PSBkLnZhbHVlICYmIHUudW5pdCA9PT0gZC51bml0IHx8IG8uc2V0KGksIGQpLCBlO1xuXHR9IGVsc2UgcmV0dXJuIFcocywgaSwgU3RyaW5nKGEpLCByKSwgZTtcblx0aWYgKHR5cGVvZiBhID09IFwic3RyaW5nXCIgJiYgIUkoYSkpIHtcblx0XHRjb25zdCBkID0gdHJ5U3RyaW5nQXNOdW1iZXIoYSk7XG5cdFx0aWYgKHR5cGVvZiBkID09IFwibnVtYmVyXCIgJiYgQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCB1ID0gQ1NTLm51bWJlcihkKSwgcCA9IG8uZ2V0KGkpO1xuXHRcdFx0cmV0dXJuIFQocCkgJiYgcC52YWx1ZSA9PT0gdS52YWx1ZSAmJiBwLnVuaXQgPT09IHUudW5pdCB8fCBvLnNldChpLCB1KSwgZTtcblx0XHR9IGVsc2UgcmV0dXJuIFcocywgaSwgYSwgciksIGU7XG5cdH1cblx0cmV0dXJuIFcocywgaSwgU3RyaW5nKGEpLCByKSwgZTtcbn07XG52YXIgcXQgPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IHtcblx0aWYgKCFlIHx8ICF0KSByZXR1cm4gZTtcblx0Y29uc3QgaSA9IGNhbWVsVG9LZWJhYih0KSwgcyA9IGUuc3R5bGU7XG5cdGlmICghcykgcmV0dXJuIGU7XG5cdGxldCBvID0gaGFzVmFsdWUobikgJiYgIShJKG4pIHx8IFQobikpID8gbj8udmFsdWUgOiBuO1xuXHRyZXR1cm4gdHlwZW9mIG8gPT0gXCJzdHJpbmdcIiAmJiAhSShvKSAmJiAobyA9IHRyeVN0cmluZ0FzTnVtYmVyKG8pID8/IG8pLCBvID09IG51bGwgPyAoVyhzLCBpLCBudWxsLCByKSwgZSkgOiAoSShvKSwgVyhzLCBpLCBTdHJpbmcobyksIHIpLCBlKTtcbn07XG52YXIgdWUgPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IFBlID8gaHIoZSwgdCwgbiwgcikgOiBxdChlLCB0LCBuLCByKTtcbnZhciBtciA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHZyID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbmFtZWRTdG9yZU1hcHNcIik7XG52YXIgZXQgPSBnbG9iYWxUaGlzW3ZyXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBnciA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBbLi4uZS5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChuPy5tYXA/LigoW3IsIGldKSA9PiBbciwgaT8uZ2V0Py4odCldKT8uZmlsdGVyPy4oKFtyLCBpXSkgPT4gISFpKSB8fCBbXSk7XG59O1xudmFyIGhlID0gKGUpID0+ICh7XG5cdHN0b3JlU2V0OiBncihldCwgZSksXG5cdG1peGluU2V0OiBtZT8uZ2V0Py4oZSksXG5cdGJlaGF2aW9yU2V0OiBtcj8uZ2V0Py4oZSlcbn0pO1xudmFyIHlyID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBtZSA9IGdsb2JhbFRoaXNbeXJdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiciA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgSyA9IGdsb2JhbFRoaXNbYnJdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB4ciA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIik7XG52YXIgaWUgPSBnbG9iYWxUaGlzW3hyXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciB3ciA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIpO1xudmFyIE1lID0gZ2xvYmFsVGhpc1t3cl0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIEJ0ID0gKGUsIHQpID0+IHtcblx0dHlwZW9mIHQgPT0gXCJzdHJpbmdcIiAmJiAodCA9IGllPy5nZXQ/Lih0KSk7XG5cdGNvbnN0IG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZT8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pLCByID0gbmV3IFNldChbLi4ubl0ubWFwKChvKSA9PiBpZT8uZ2V0Py4obykpLmZpbHRlcigobykgPT4gISFvKSksIGkgPSBtZT8uZ2V0Py4oZSkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdEs/Lmhhcz8uKHQpIHx8IEs/LnNldD8uKHQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKSwgbWU/Lmhhcz8uKGUpIHx8IG1lPy5zZXQ/LihlLCBpKTtcblx0Y29uc3QgcyA9IG5ldyBXZWFrUmVmKGUpO1xuXHRpPy5oYXM/Lih0KSB8fCAoci5oYXModCkgfHwgdD8uZGlzY29ubmVjdD8uKHMsIHQsIGhlKGUpKSwgKHIuaGFzKHQpIHx8ICFLPy5nZXQ/Lih0KT8uaGFzPy4oZSkpICYmICh0Py5jb25uZWN0Py4ocywgdCwgaGUoZSkpLCBuLmFkZChNZT8uZ2V0Py4odCkpLCBpPy5hZGQ/Lih0KSwgZT8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIsIFsuLi5uXS5maWx0ZXIoKG8pID0+ICEhbykuam9pbihcIiBcIikpKSwgSz8uZ2V0Py4odCk/LmFkZD8uKGUpKSwgaT8uaGFzPy4odCkgJiYgKHIuaGFzKHQpIHx8IChpPy5kZWxldGU/Lih0KSwgdD8uZGlzY29ubmVjdD8uKHMsIHQsIGhlKGUpKSkpO1xufTtcbnZhciB0dCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgU3IgPSAoZSA9IHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQgOiBudWxsKSA9PiB7XG5cdGlmIChlKSByZXR1cm4gdHQ/Lmhhcz8uKGUpIHx8ICh0dD8uYWRkPy4oZSksIGRyKGUsIFwiKlwiLCBcImRhdGEtbWl4aW5cIiwgKHQpID0+IG50KHQudGFyZ2V0KSksIGZyKGUsIFwiW2RhdGEtbWl4aW5dXCIsICh0KSA9PiB7XG5cdFx0Zm9yIChjb25zdCBuIG9mIHQuYWRkZWROb2RlcykgbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIG50KG4pO1xuXHR9KSksIGU7XG59O1xudmFyIG50ID0gKGUpID0+IHtcblx0Y29uc3QgdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lPy5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdFsuLi5uZXcgU2V0KFsuLi50XS5tYXAoKG4pID0+IGllPy5nZXQ/LihuKSkuZmlsdGVyKChuKSA9PiAhIW4pKV0ubWFwPy4oKG4pID0+IEJ0KGUsIG4pKTtcbn07XG52YXIgRXIgPSAoZSwgdCkgPT4ge1xuXHRlLmZvckVhY2goKG4pID0+IHQgPyBCdChuLCB0KSA6IG50KG4pKTtcbn07XG52YXIgTXIgPSAoZSkgPT4ge1xuXHRmb3IgKGNvbnN0IHQgb2YgdHQpIEVyKHQ/LnF1ZXJ5U2VsZWN0b3JBbGw/LihcIltkYXRhLW1peGluXVwiKSwgZSk7XG59O1xudmFyIENyID0gbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChlKSA9PiB7XG5cdGllPy5kZWxldGU/LihlKTtcbn0pO1xudmFyIEFyID0gKGUsIHQpID0+IHtcblx0aWYgKCFNZT8uaGFzPy4odCkpIHtcblx0XHRjb25zdCBuID0gZT8udHJpbT8uKCk7XG5cdFx0biAmJiAoTWU/LnNldD8uKHQsIG4pLCBpZT8uc2V0Py4obiwgdCksIENyPy5yZWdpc3Rlcj8uKHQsIG4pLCBNcih0KSk7XG5cdH1cbn07XG5Tcih0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50IDogbnVsbCk7XG52YXIgdXQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGUgPSBudWxsKSB7XG5cdFx0ZSAmJiBBcihlLCB0aGlzKTtcblx0fVxuXHRjb25uZWN0KGUsIHQsIG4pIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUsIHQsIG4pIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRzdG9yZUZvckVsZW1lbnQoZSkge1xuXHRcdHJldHVybiBldC5nZXQodGhpcy5uYW1lIHx8IFwiXCIpPy5nZXQ/LihlKTtcblx0fVxuXHRyZWxhdGVkRm9yRWxlbWVudChlKSB7XG5cdFx0cmV0dXJuIGhlKGUpO1xuXHR9XG5cdGdldCBlbGVtZW50cygpIHtcblx0XHRyZXR1cm4gSz8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIGV0Py5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIE1lPy5nZXQ/Lih0aGlzKTtcblx0fVxufTtcbnZhciBqciA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgenQgPSBnbG9iYWxUaGlzW2pyXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1mcmVxXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBpeGVsLXJhdGlvXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteFwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteVwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9XG5dLmZvckVhY2goKGUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgPiBcInVcIiB8fCB0eXBlb2YgQ1NTPy5yZWdpc3RlclByb3BlcnR5ICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCB0ID0gU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoISghdCB8fCB6dC5oYXModCkpKSB0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KGUpO1xuXHR9IGNhdGNoIChuKSB7XG5cdFx0U3RyaW5nKG4/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSAhPT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIiAmJiBjb25zb2xlLndhcm4obik7XG5cdH0gZmluYWxseSB7XG5cdFx0enQuYWRkKHQpO1xuXHR9XG59KTtcbnZhciBWciA9IChlLCB0ID0gXCJ2YWx1ZVwiKSA9PiAodHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIpICYmIGUgIT0gbnVsbCAmJiAodCBpbiBlIHx8IGU/Llt0XSAhPSBudWxsKTtcbnZhciBfdCA9IChlKSA9PiBWcihlLCBcInZhbHVlXCIpO1xudmFyIER0ID0gKGUpID0+IGUgJiYgZT8ucmVwbGFjZT8uKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG52YXIgWnQgPSAoZSkgPT4ge1xuXHRpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHQgPSBbLi4uZT8ubWF0Y2hBbGw/LigvXlxcZCsoXFwuXFxkKyk/JC9nKV07XG5cdGlmICh0Py5sZW5ndGggIT0gMSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IG4gPSBwYXJzZUZsb2F0KHRbMF1bMF0pO1xuXHRyZXR1cm4gIU51bWJlci5pc05hTihuKSAmJiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbDtcbn07XG50eXBlb2YgZG9jdW1lbnQgPCBcInVcIiAmJiBkb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50O1xudmFyIExyID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPCBcInVcIiAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXN5bmMgKCkgPT4ge1xuXHRmb3IgKDs7KSBMci5mb3JFYWNoKChlKSA9PiBlPy4oKSksIGF3YWl0IG5ldyBQcm9taXNlKChlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSkpO1xufSk7XG52YXIgenIgPSB7fTtcbmZ1bmN0aW9uIHYoZSwgdCwgbiwgciA9IHpyKSB7XG5cdGU/LmFkZEV2ZW50TGlzdGVuZXI/Lih0LCBuLCByKTtcblx0Y29uc3QgaSA9IHR5cGVvZiBlID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGUgPT0gXCJmdW5jdGlvblwiICYmICFlPy5kZXJlZiA/IG5ldyBXZWFrUmVmKGUpIDogZTtcblx0cmV0dXJuICgpID0+IGk/LmRlcmVmPy4oKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xufVxudmFyIGtyID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAem9vbVZhbHVlc1wiKTtcbmdsb2JhbFRoaXNba3JdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBQciA9ICgpID0+IHtcblx0Y29uc3QgZSA9IHR5cGVvZiBtYXRjaE1lZGlhIDwgXCJ1XCIgPyBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpPy5tYXRjaGVzIDogITEsIHQgPSB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsLCBuID0gdCA/IHtcblx0XHRcIi0tdnYtd2lkdGhcIjogYCR7dC53aWR0aH1weGAsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiBgJHt0LmhlaWdodH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IGAke3Qub2Zmc2V0TGVmdH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC10b3BcIjogYCR7dC5vZmZzZXRUb3B9cHhgLFxuXHRcdFwiLS12di1zY2FsZVwiOiBTdHJpbmcodC5zY2FsZSA/PyAxKVxuXHR9IDoge1xuXHRcdFwiLS12di13aWR0aFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJXaWR0aH1weGAgOiBcIjBweFwiLFxuXHRcdFwiLS12di1oZWlnaHRcIjogdHlwZW9mIHdpbmRvdyA8IFwidVwiID8gYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LW9mZnNldC10b3BcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtc2NhbGVcIjogXCIxXCJcblx0fTtcblx0aWYgKHR5cGVvZiBzY3JlZW4gPCBcInVcIikge1xuXHRcdGNvbnN0IHIgPSBzY3JlZW4/LmF2YWlsV2lkdGggKyBcInB4XCIsIGkgPSBzY3JlZW4/LmF2YWlsSGVpZ2h0ICsgXCJweFwiO1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IE1hdGgubWluKHNjcmVlbj8ud2lkdGgsIHNjcmVlbj8uYXZhaWxXaWR0aCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmhlaWdodCwgc2NyZWVuPy5hdmFpbEhlaWdodCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tYXZhaWwtd2lkdGhcIjogZSA/IGkgOiByLFxuXHRcdFx0XCItLWF2YWlsLWhlaWdodFwiOiBlID8gciA6IGksXG5cdFx0XHRcIi0tdmlldy1oZWlnaHRcIjogTWF0aC5taW4oc2NyZWVuPy5hdmFpbEhlaWdodCwgd2luZG93Py5pbm5lckhlaWdodCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogU3RyaW5nKGRldmljZVBpeGVsUmF0aW8gfHwgMSksXG5cdFx0XHQuLi5uXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdFwiLS1zY3JlZW4td2lkdGhcIjogXCIwcHhcIixcblx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1hdmFpbC13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tdmlldy1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogXCIxXCIsXG5cdFx0Li4ublxuXHR9O1xufTtcblByKCk7XG5uZXcgT2Zmc2NyZWVuQ2FudmFzKDEsIDEpLmdldENvbnRleHQoXCIyZFwiKTtcbnZhciBUciA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQm9yZGVyT2JzZXJ2ZVwiKTtcbmdsb2JhbFRoaXNbVHJdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBSciA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQ29udGVudE9ic2VydmVcIik7XG5nbG9iYWxUaGlzW1JyXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgVXQgPSAoZSkgPT4gKHR5cGVvZiBlPy5jdXJyZW50ID09IFwib2JqZWN0XCIgJiYgKGUgPSBlPy5lbGVtZW50ID8/IGU/LmN1cnJlbnQgPz8gKHR5cGVvZiBlPy5zZWxmID09IFwib2JqZWN0XCIgPyBlPy5zZWxmIDogbnVsbCkgPz8gZSksIGUpO1xudmFyIE5yID0gKGUsIHQsIG4sIHIpID0+IHtcblx0Y29uc3QgaSA9IG5ldyBTZXQoWy4uLm4uc3BsaXQoXCIsXCIpIHx8IFtuXV0ubWFwKChvKSA9PiBvLnRyaW0oKSkpLCBzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG8sIGEpID0+IHtcblx0XHRmb3IgKGNvbnN0IGQgb2YgbykgaWYgKGQudHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRjb25zdCB1ID0gQXJyYXkuZnJvbShkLmFkZGVkTm9kZXMpIHx8IFtdLCBwID0gQXJyYXkuZnJvbShkLnJlbW92ZWROb2RlcykgfHwgW107XG5cdFx0XHR1LnB1c2goLi4uQXJyYXkuZnJvbShkLmFkZGVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGgpID0+IEFycmF5LmZyb20oaD8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBwLnB1c2goLi4uQXJyYXkuZnJvbShkLnJlbW92ZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoaCkgPT4gQXJyYXkuZnJvbShoPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIFsuLi5uZXcgU2V0KHUpXS5maWx0ZXIoKGgpID0+IGg/Lm1hdGNoZXM/Lih0KSk/Lm1hcD8uKChoKSA9PiB7XG5cdFx0XHRcdGkuZm9yRWFjaCgoYykgPT4ge1xuXHRcdFx0XHRcdHIoe1xuXHRcdFx0XHRcdFx0dGFyZ2V0OiBoLFxuXHRcdFx0XHRcdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lOiBjLFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IGg/LmdldEF0dHJpYnV0ZT8uKGMpXG5cdFx0XHRcdFx0fSwgYSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGQudGFyZ2V0Py5tYXRjaGVzPy4odCkgJiYgZC5hdHRyaWJ1dGVOYW1lICYmIGkuaGFzKGQuYXR0cmlidXRlTmFtZSkgJiYgcihkLCBhKTtcblx0fSk7XG5cdHJldHVybiBzLm9ic2VydmUoZSA9IFV0KGUpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6ICEwLFxuXHRcdGF0dHJpYnV0ZXM6ICEwLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLmldLFxuXHRcdGNoaWxkTGlzdDogITAsXG5cdFx0c3VidHJlZTogITAsXG5cdFx0Y2hhcmFjdGVyRGF0YTogITBcblx0fSksIFsuLi5lLnF1ZXJ5U2VsZWN0b3JBbGwodCldLm1hcCgobykgPT4gaS5mb3JFYWNoKChhKSA9PiByKHtcblx0XHR0YXJnZXQ6IG8sXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogYSxcblx0XHRvbGRWYWx1ZTogbz8uZ2V0QXR0cmlidXRlPy4oYSlcblx0fSwgcykpKSwgcztcbn07XG52YXIgV3IgPSAoZSwgdCA9IFwiKlwiLCBuID0gKHIsIGkpID0+IHt9KSA9PiB7XG5cdGNvbnN0IHIgPSAoYykgPT4ge1xuXHRcdGNvbnN0IGwgPSBBcnJheS5mcm9tKGMgfHwgW10pIHx8IFtdO1xuXHRcdHJldHVybiBsLnB1c2goLi4uQXJyYXkuZnJvbShjIHx8IFtdKS5mbGF0TWFwKChmKSA9PiBBcnJheS5mcm9tKGY/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgWy4uLkFycmF5LmZyb20obmV3IFNldChsKS52YWx1ZXMoKSldLmZpbHRlcigoZikgPT4gZj8ubWF0Y2hlcz8uKHQpKTtcblx0fTtcblx0bGV0IGkgPSBudWxsO1xuXHRjb25zdCBzID0gKGMpID0+IHtcblx0XHRjb25zdCBsID0gaT8uZGVyZWY/LigpLCBmID0gcihjLmFkZGVkTm9kZXMpLCBtID0gcihjLnJlbW92ZWROb2Rlcyk7XG5cdFx0KGYubGVuZ3RoID4gMCB8fCBtLmxlbmd0aCA+IDApICYmIG4/Lih7XG5cdFx0XHR0eXBlOiBjLnR5cGUsXG5cdFx0XHR0YXJnZXQ6IGMudGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogYy5hdHRyaWJ1dGVOYW1lLFxuXHRcdFx0YXR0cmlidXRlTmFtZXNwYWNlOiBjLmF0dHJpYnV0ZU5hbWVzcGFjZSxcblx0XHRcdG5leHRTaWJsaW5nOiBjLm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IGMub2xkVmFsdWUsXG5cdFx0XHRwcmV2aW91c1NpYmxpbmc6IGMucHJldmlvdXNTaWJsaW5nLFxuXHRcdFx0YWRkZWROb2RlczogZixcblx0XHRcdHJlbW92ZWROb2RlczogbVxuXHRcdH0sIGwpO1xuXHR9LCBvID0gKGMpID0+IHtcblx0XHRzKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtjPy50YXJnZXRdLmZpbHRlcigobCkgPT4gISFsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2M/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigobCkgPT4gISFsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGM/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgYSA9IChjKSA9PiB7XG5cdFx0cyh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbYz8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChsKSA9PiAhIWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbYz8udGFyZ2V0XS5maWx0ZXIoKGwpID0+ICEhbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBjPy5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIGQgPSAoYykgPT4ge1xuXHRcdHMoe1xuXHRcdFx0YWRkZWROb2RlczogW2M/LnRhcmdldF0uZmlsdGVyKChsKSA9PiAhIWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbYz8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChsKSA9PiAhIWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogYz8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCB1ID0ge1xuXHRcdHBhc3NpdmU6ICEwLFxuXHRcdGNhcHR1cmU6ICExXG5cdH07XG5cdGlmICh0Py5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpICYmIHQ/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgbywgdSksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgYSwgdSksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG8sIHUpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgYSwgdSksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgYSwgdSksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIG8sIHUpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGEsIHUpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvLCB1KSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGEsIHUpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGEsIHUpO1xuXHR9IH07XG5cdGlmICh0Py5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgbywgdSksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgYSwgdSksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIG8sIHUpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGEsIHUpO1xuXHR9IH07XG5cdGlmICh0Py5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkgcmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG8sIHUpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgYSwgdSksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgYSwgdSksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG8sIHUpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgYSwgdSksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgYSwgdSk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6Zm9jdXNcIikgJiYgdD8uaW5jbHVkZXM/LihcIjpmb2N1cy13aXRoaW5cIikgJiYgdD8uaW5jbHVkZXM/LihcIjpmb2N1cy12aXNpYmxlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBvLCB1KSwgZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgYSwgdSksIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGQsIHUpLCB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIG8sIHUpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBhLCB1KSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZCwgdSk7XG5cdH0gfTtcblx0Y29uc3QgcCA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChjLCBsKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBmIG9mIGMpIGYudHlwZSA9PSBcImNoaWxkTGlzdFwiICYmIHMoZik7XG5cdH0pO1xuXHRpID0gbmV3IFdlYWtSZWYocCksIChlPy5lbGVtZW50ID8/IGUpIGluc3RhbmNlb2YgTm9kZSAmJiBwLm9ic2VydmUoZSA9IFV0KGUpLCB7XG5cdFx0Y2hpbGRMaXN0OiAhMCxcblx0XHRzdWJ0cmVlOiAhMFxuXHR9KTtcblx0Y29uc3QgaCA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKHQpKTtcblx0cmV0dXJuIGgubGVuZ3RoID4gMCAmJiBuPy4oe1xuXHRcdGFkZGVkTm9kZXM6IGgsXG5cdFx0cmVtb3ZlZE5vZGVzOiBbXVxuXHR9LCBwKSwgcDtcbn07XG52YXIgT3IgPSBcIkRPTVwiO1xudmFyIEZlID0gdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikgOiBudWxsO1xuRmUgJiYgKHR5cGVvZiBkb2N1bWVudCA8IFwidVwiICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpPy5hcHBlbmRDaGlsZD8uKEZlKSwgRmUuZGF0YXNldC5vd25lciA9IE9yKTtcbnZhciBUZSA9IHR5cGVvZiBDU1NTdHlsZVZhbHVlIDwgXCJ1XCIgJiYgdHlwZW9mIENTU1VuaXRWYWx1ZSA8IFwidVwiO1xudmFyIEggPSAoZSkgPT4gVGUgJiYgZSBpbnN0YW5jZW9mIENTU1N0eWxlVmFsdWU7XG52YXIgUiA9IChlKSA9PiBUZSAmJiBlIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xudmFyIE8gPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IHtcblx0aWYgKCEoIWUgfHwgIXQpKSB7XG5cdFx0aWYgKG4gPT0gbnVsbCkge1xuXHRcdFx0ZS5nZXRQcm9wZXJ0eVZhbHVlKHQpICE9PSBcIlwiICYmIGUucmVtb3ZlUHJvcGVydHkodCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gbiAmJiBlLnNldFByb3BlcnR5KHQsIG4sIHIpO1xuXHR9XG59O1xudmFyICRyID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBEdCh0KSwgcyA9IGUuc3R5bGUsIG8gPSBlLmF0dHJpYnV0ZVN0eWxlTWFwID8/IGUuc3R5bGVNYXA7XG5cdGlmICghVGUgfHwgIW8pIHJldHVybiBYdChlLCB0LCBuLCByKTtcblx0bGV0IGEgPSBfdChuKSAmJiAhKEgobikgfHwgUihuKSkgPyBuPy52YWx1ZSA6IG47XG5cdGlmIChhID09IG51bGwpIHJldHVybiBvLmRlbGV0ZT8uKGkpLCBzICYmIE8ocywgaSwgbnVsbCwgciksIGU7XG5cdGlmIChIKGEpKSB7XG5cdFx0Y29uc3QgZCA9IG8uZ2V0KGkpO1xuXHRcdGlmIChSKGEpICYmIFIoZCkpIHtcblx0XHRcdGlmIChkLnZhbHVlID09PSBhLnZhbHVlICYmIGQudW5pdCA9PT0gYS51bml0KSByZXR1cm4gZTtcblx0XHR9IGVsc2UgaWYgKGQgPT09IGEpIHJldHVybiBlO1xuXHRcdHJldHVybiBvLnNldChpLCBhKSwgZTtcblx0fVxuXHRpZiAodHlwZW9mIGEgPT0gXCJudW1iZXJcIikgaWYgKENTUz8ubnVtYmVyICYmICFpLnN0YXJ0c1dpdGgoXCItLVwiKSkge1xuXHRcdGNvbnN0IGQgPSBDU1MubnVtYmVyKGEpLCB1ID0gby5nZXQoaSk7XG5cdFx0cmV0dXJuIFIodSkgJiYgdS52YWx1ZSA9PT0gZC52YWx1ZSAmJiB1LnVuaXQgPT09IGQudW5pdCB8fCBvLnNldChpLCBkKSwgZTtcblx0fSBlbHNlIHJldHVybiBPKHMsIGksIFN0cmluZyhhKSwgciksIGU7XG5cdGlmICh0eXBlb2YgYSA9PSBcInN0cmluZ1wiICYmICFIKGEpKSB7XG5cdFx0Y29uc3QgZCA9IFp0KGEpO1xuXHRcdGlmICh0eXBlb2YgZCA9PSBcIm51bWJlclwiICYmIENTUz8ubnVtYmVyICYmICFpLnN0YXJ0c1dpdGgoXCItLVwiKSkge1xuXHRcdFx0Y29uc3QgdSA9IENTUy5udW1iZXIoZCksIHAgPSBvLmdldChpKTtcblx0XHRcdHJldHVybiBSKHApICYmIHAudmFsdWUgPT09IHUudmFsdWUgJiYgcC51bml0ID09PSB1LnVuaXQgfHwgby5zZXQoaSwgdSksIGU7XG5cdFx0fSBlbHNlIHJldHVybiBPKHMsIGksIGEsIHIpLCBlO1xuXHR9XG5cdHJldHVybiBPKHMsIGksIFN0cmluZyhhKSwgciksIGU7XG59O1xudmFyIFh0ID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBEdCh0KSwgcyA9IGUuc3R5bGU7XG5cdGlmICghcykgcmV0dXJuIGU7XG5cdGxldCBvID0gX3QobikgJiYgIShIKG4pIHx8IFIobikpID8gbj8udmFsdWUgOiBuO1xuXHRyZXR1cm4gdHlwZW9mIG8gPT0gXCJzdHJpbmdcIiAmJiAhSChvKSAmJiAobyA9IFp0KG8pID8/IG8pLCBvID09IG51bGwgPyAoTyhzLCBpLCBudWxsLCByKSwgZSkgOiAoSChvKSwgTyhzLCBpLCBTdHJpbmcobyksIHIpLCBlKTtcbn07XG52YXIgQSA9IChlLCB0LCBuLCByID0gXCJcIikgPT4gVGUgPyAkcihlLCB0LCBuLCByKSA6IFh0KGUsIHQsIG4sIHIpO1xudmFyIEZyID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgSXIgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BuYW1lZFN0b3JlTWFwc1wiKTtcbnZhciBydCA9IGdsb2JhbFRoaXNbSXJdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIEhyID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IFsuLi5lLmVudHJpZXMoKSB8fCBbXV07XG5cdHJldHVybiBuZXcgTWFwKG4/Lm1hcD8uKChbciwgaV0pID0+IFtyLCBpPy5nZXQ/Lih0KV0pPy5maWx0ZXI/LigoW3IsIGldKSA9PiAhIWkpIHx8IFtdKTtcbn07XG52YXIgdmUgPSAoZSkgPT4gKHtcblx0c3RvcmVTZXQ6IEhyKHJ0LCBlKSxcblx0bWl4aW5TZXQ6IGdlPy5nZXQ/LihlKSxcblx0YmVoYXZpb3JTZXQ6IEZyPy5nZXQ/LihlKVxufSk7XG52YXIgcXIgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0Bib3VuZE1peGluU2V0XCIpO1xudmFyIGdlID0gZ2xvYmFsVGhpc1txcl0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIEJyID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5FbGVtZW50c1wiKTtcbnZhciBRID0gZ2xvYmFsVGhpc1tCcl0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIF9yID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5SZWdpc3RyeVwiKTtcbnZhciBhZSA9IGdsb2JhbFRoaXNbX3JdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIERyID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5OYW1lc3BhY2VcIik7XG52YXIgQ2UgPSBnbG9iYWxUaGlzW0RyXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgWXQgPSAoZSwgdCkgPT4ge1xuXHR0eXBlb2YgdCA9PSBcInN0cmluZ1wiICYmICh0ID0gYWU/LmdldD8uKHQpKTtcblx0Y29uc3QgbiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lPy5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSksIHIgPSBuZXcgU2V0KFsuLi5uXS5tYXAoKG8pID0+IGFlPy5nZXQ/LihvKSkuZmlsdGVyKChvKSA9PiAhIW8pKSwgaSA9IGdlPy5nZXQ/LihlKSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcblx0UT8uaGFzPy4odCkgfHwgUT8uc2V0Py4odCwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpLCBnZT8uaGFzPy4oZSkgfHwgZ2U/LnNldD8uKGUsIGkpO1xuXHRjb25zdCBzID0gbmV3IFdlYWtSZWYoZSk7XG5cdGk/Lmhhcz8uKHQpIHx8IChyLmhhcyh0KSB8fCB0Py5kaXNjb25uZWN0Py4ocywgdCwgdmUoZSkpLCAoci5oYXModCkgfHwgIVE/LmdldD8uKHQpPy5oYXM/LihlKSkgJiYgKHQ/LmNvbm5lY3Q/LihzLCB0LCB2ZShlKSksIG4uYWRkKENlPy5nZXQ/Lih0KSksIGk/LmFkZD8uKHQpLCBlPy5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLm5dLmZpbHRlcigobykgPT4gISFvKS5qb2luKFwiIFwiKSkpLCBRPy5nZXQ/Lih0KT8uYWRkPy4oZSkpLCBpPy5oYXM/Lih0KSAmJiAoci5oYXModCkgfHwgKGk/LmRlbGV0ZT8uKHQpLCB0Py5kaXNjb25uZWN0Py4ocywgdCwgdmUoZSkpKSk7XG59O1xudmFyIGl0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBaciA9IChlID0gdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKGUpIHJldHVybiBpdD8uaGFzPy4oZSkgfHwgKGl0Py5hZGQ/LihlKSwgTnIoZSwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAodCkgPT4gYXQodC50YXJnZXQpKSwgV3IoZSwgXCJbZGF0YS1taXhpbl1cIiwgKHQpID0+IHtcblx0XHRmb3IgKGNvbnN0IG4gb2YgdC5hZGRlZE5vZGVzKSBuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgYXQobik7XG5cdH0pKSwgZTtcbn07XG52YXIgYXQgPSAoZSkgPT4ge1xuXHRjb25zdCB0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Wy4uLm5ldyBTZXQoWy4uLnRdLm1hcCgobikgPT4gYWU/LmdldD8uKG4pKS5maWx0ZXIoKG4pID0+ICEhbikpXS5tYXA/LigobikgPT4gWXQoZSwgbikpO1xufTtcbnZhciBVciA9IChlLCB0KSA9PiB7XG5cdGUuZm9yRWFjaCgobikgPT4gdCA/IFl0KG4sIHQpIDogYXQobikpO1xufTtcbnZhciBYciA9IChlKSA9PiB7XG5cdGZvciAoY29uc3QgdCBvZiBpdCkgVXIodD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBlKTtcbn07XG52YXIgWXIgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGUpID0+IHtcblx0YWU/LmRlbGV0ZT8uKGUpO1xufSk7XG52YXIgSnIgPSAoZSwgdCkgPT4ge1xuXHRpZiAoIUNlPy5oYXM/Lih0KSkge1xuXHRcdGNvbnN0IG4gPSBlPy50cmltPy4oKTtcblx0XHRuICYmIChDZT8uc2V0Py4odCwgbiksIGFlPy5zZXQ/LihuLCB0KSwgWXI/LnJlZ2lzdGVyPy4odCwgbiksIFhyKHQpKTtcblx0fVxufTtcblpyKHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciBfID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihlID0gbnVsbCkge1xuXHRcdGUgJiYgSnIoZSwgdGhpcyk7XG5cdH1cblx0Y29ubmVjdChlLCB0LCBuKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlLCB0LCBuKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c3RvcmVGb3JFbGVtZW50KGUpIHtcblx0XHRyZXR1cm4gcnQuZ2V0KHRoaXMubmFtZSB8fCBcIlwiKT8uZ2V0Py4oZSk7XG5cdH1cblx0cmVsYXRlZEZvckVsZW1lbnQoZSkge1xuXHRcdHJldHVybiB2ZShlKTtcblx0fVxuXHRnZXQgZWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIFE/LmdldD8uKHRoaXMpO1xuXHR9XG5cdGdldCBzdG9yYWdlKCkge1xuXHRcdHJldHVybiBydD8uZ2V0Py4odGhpcy5uYW1lIHx8IFwiXCIpO1xuXHR9XG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBDZT8uZ2V0Py4odGhpcyk7XG5cdH1cbn07XG5mdW5jdGlvbiBJZShlLCB0KSB7XG5cdGNvbnN0IG4gPSBNYXRoLm1pbihlLngsIHQueCksIHIgPSBNYXRoLm1pbihlLnksIHQueSksIGkgPSBNYXRoLm1heChlLngsIHQueCksIHMgPSBNYXRoLm1heChlLnksIHQueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdDogbixcblx0XHR0b3A6IHIsXG5cdFx0cmlnaHQ6IGksXG5cdFx0Ym90dG9tOiBzLFxuXHRcdHdpZHRoOiBpIC0gbixcblx0XHRoZWlnaHQ6IHMgLSByXG5cdH07XG59XG52YXIgZGUgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgSGUgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgcWUgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG52YXIgR3IgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBBZSA9IGdsb2JhbFRoaXNbR3JdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBnID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IEFlLmdldChlKSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBpID0gci5nZXQodCkgPz8gW107XG5cdGkucHVzaChuKSwgci5zZXQodCwgaSksIEFlLnNldChlLCByKTtcbn07XG52YXIgZHQgPSAoZSwgdCkgPT4ge1xuXHRjb25zdCBuID0gQWUuZ2V0KGUpLCByID0gbj8uZ2V0KHQpO1xuXHRpZiAocikge1xuXHRcdGZvciAoY29uc3QgaSBvZiByKSB0cnkge1xuXHRcdFx0aSgpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRuLmRlbGV0ZSh0KSwgbi5zaXplID09PSAwICYmIEFlLmRlbGV0ZShlKTtcblx0fVxufTtcbnZhciBMID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGUpPy5nZXRQcm9wZXJ0eVZhbHVlPy4odCk/LnRyaW0/LigpID8/IFwiXCIsIHIgPSBwYXJzZUZsb2F0KG4pO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKHIpID8gciA6IDA7XG59O1xudmFyIEp0ID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IGUuZ2V0QXR0cmlidXRlKHQpPy50cmltKCk7XG5cdGlmICghcikgcmV0dXJuIG47XG5cdGNvbnN0IGkgPSBlLnF1ZXJ5U2VsZWN0b3Iocik7XG5cdHJldHVybiBpIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpIDogbjtcbn07XG52YXIgS3IgPSBjbGFzcyBleHRlbmRzIF8ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0fVxuXHRjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdGlmICghdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bi5jbGFzc05hbWUgPSBcInVpLWp1bmN0aW9uLXNlbGVjdC1vdmVybGF5XCIsIG4uc2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1vdmVybGF5XCIsIFwiXCIpLCBuLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDo5OTk5O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IGRhc2hlZCBjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgNzAlLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZDpjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgMTQlLCB0cmFuc3BhcmVudCk7ZGlzcGxheTpub25lO2luc2V0OmF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowO1wiLCBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lih0KT8ucG9zaXRpb24gPT09IFwic3RhdGljXCIgJiYgKHQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCIpLCB0LmFwcGVuZENoaWxkKG4pO1xuXHRcdGxldCByID0gITEsIGkgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH0sIHMgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0Y29uc3QgbyA9IChsKSA9PiB7XG5cdFx0XHRjb25zdCBmID0gdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IGwuY2xpZW50WCAtIGYubGVmdCxcblx0XHRcdFx0eTogbC5jbGllbnRZIC0gZi50b3Bcblx0XHRcdH07XG5cdFx0fSwgYSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGwgPSBJZShpLCBzKTtcblx0XHRcdGlmIChsLndpZHRoIDwgMSAmJiBsLmhlaWdodCA8IDEpIHtcblx0XHRcdFx0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiwgbi5zdHlsZS5sZWZ0ID0gYCR7bC5sZWZ0fXB4YCwgbi5zdHlsZS50b3AgPSBgJHtsLnRvcH1weGAsIG4uc3R5bGUud2lkdGggPSBgJHtsLndpZHRofXB4YCwgbi5zdHlsZS5oZWlnaHQgPSBgJHtsLmhlaWdodH1weGA7XG5cdFx0fSwgZCA9IChsKSA9PiB7XG5cdFx0XHRsLmJ1dHRvbiA9PT0gMCAmJiAobC50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLWp1bmN0aW9uLWlnbm9yZS1zZWxlY3RdLCBbZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZV0sIFtkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVdLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpIHx8IChsLnRhcmdldCA9PT0gdCB8fCB0LmNvbnRhaW5zKGwudGFyZ2V0KSkgJiYgKHIgPSAhMCwgaSA9IG8obCksIHMgPSB7IC4uLmkgfSwgdC5zZXRQb2ludGVyQ2FwdHVyZShsLnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZGUuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uaSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ucyB9LFxuXHRcdFx0XHRcdGhvc3Q6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpLCBhKCkpKTtcblx0XHR9LCB1ID0gKGwpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0cyA9IG8obCksIGEoKTtcblx0XHRcdGNvbnN0IGYgPSBJZShpLCBzKTtcblx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZGUubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5pIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5zIH0sXG5cdFx0XHRcdFx0Ym94OiBmLFxuXHRcdFx0XHRcdGhvc3Q6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIHAgPSAobCkgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRyID0gITE7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShsLnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRjb25zdCBmID0gSWUoaSwgcyk7XG5cdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGRlLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5pIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5zIH0sXG5cdFx0XHRcdFx0Ym94OiBmLFxuXHRcdFx0XHRcdGhvc3Q6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIGggPSAobCkgPT4ge1xuXHRcdFx0ciAmJiBwKGwpO1xuXHRcdH0sIGMgPSAobCkgPT4ge1xuXHRcdFx0aWYgKHIpIHtcblx0XHRcdFx0ciA9ICExLCBuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShsLnBvaW50ZXJJZCk7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChkZS5jYW5jZWwsIHtcblx0XHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0XHRkZXRhaWw6IHsgaG9zdDogdCB9XG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBnKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsICgpID0+IHtcblx0XHRcdG4ucmVtb3ZlKCk7XG5cdFx0fSksIGcodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgdih0LCBcInBvaW50ZXJkb3duXCIsIGQpKSwgZyh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB2KHQsIFwicG9pbnRlcm1vdmVcIiwgdSkpLCBnKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIHYodCwgXCJwb2ludGVydXBcIiwgaCkpLCBnKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIHYodCwgXCJwb2ludGVyY2FuY2VsXCIsIGMpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIGR0KHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIpLCB0aGlzO1xuXHR9XG59O1xudmFyIFFyID0gY2xhc3MgZXh0ZW5kcyBfIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRBKHQsIFwiLS1qeC1kcmFnLXhcIiwgTCh0LCBcIi0tangtZHJhZy14XCIpKSwgQSh0LCBcIi0tangtZHJhZy15XCIsIEwodCwgXCItLWp4LWRyYWcteVwiKSk7XG5cdFx0Y29uc3QgbiA9IHQuc3R5bGUudHJhbnNmb3JtO1xuXHRcdCghdC5zdHlsZS50cmFuc2Zvcm0gfHwgdC5zdHlsZS50cmFuc2Zvcm0gPT09IFwibm9uZVwiKSAmJiAodC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tangtZHJhZy14LCAwKSAqIDFweCksIGNhbGModmFyKC0tangtZHJhZy15LCAwKSAqIDFweCksIDApXCIpO1xuXHRcdGNvbnN0IHIgPSBKdCh0LCBcImRhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVcIiwgdCk7XG5cdFx0bGV0IGkgPSAhMSwgcyA9IDAsIG8gPSAwLCBhID0gMCwgZCA9IDA7XG5cdFx0Y29uc3QgdSA9IChjKSA9PiB7XG5cdFx0XHRjLmJ1dHRvbiA9PT0gMCAmJiAoYy50YXJnZXQgIT09IHIgJiYgIXIuY29udGFpbnMoYy50YXJnZXQpIHx8IChpID0gITAsIHMgPSBjLmNsaWVudFgsIG8gPSBjLmNsaWVudFksIGEgPSBMKHQsIFwiLS1qeC1kcmFnLXhcIiksIGQgPSBMKHQsIFwiLS1qeC1kcmFnLXlcIiksIHIuc2V0UG9pbnRlckNhcHR1cmUoYy5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEhlLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGNsaWVudFg6IGMuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiBjLmNsaWVudFksXG5cdFx0XHRcdFx0YmFzZVg6IGEsXG5cdFx0XHRcdFx0YmFzZVk6IGRcblx0XHRcdFx0fVxuXHRcdFx0fSkpKSk7XG5cdFx0fSwgcCA9IChjKSA9PiB7XG5cdFx0XHRpZiAoIWkpIHJldHVybjtcblx0XHRcdGNvbnN0IGwgPSBjLmNsaWVudFggLSBzLCBmID0gYy5jbGllbnRZIC0gbywgbSA9IGEgKyBsLCBTID0gZCArIGY7XG5cdFx0XHRBKHQsIFwiLS1qeC1kcmFnLXhcIiwgbSksIEEodCwgXCItLWp4LWRyYWcteVwiLCBTKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChIZS5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGR4OiBsLFxuXHRcdFx0XHRcdGR5OiBmLFxuXHRcdFx0XHRcdHg6IG0sXG5cdFx0XHRcdFx0eTogU1xuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgaCA9IChjKSA9PiB7XG5cdFx0XHRpZiAoaSkge1xuXHRcdFx0XHRpID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ci5yZWxlYXNlUG9pbnRlckNhcHR1cmUoYy5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSGUuZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0eDogTCh0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdFx0eTogTCh0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gZyh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0dC5zdHlsZS50cmFuc2Zvcm0gPSBuO1xuXHRcdH0pLCBnKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcmRvd25cIiwgdSkpLCBnKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcm1vdmVcIiwgcCkpLCBnKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcnVwXCIsIGgpKSwgZyh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgdihyLCBcInBvaW50ZXJjYW5jZWxcIiwgaCkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgZHQodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpLCB0aGlzO1xuXHR9XG59O1xudmFyIGVpID0gY2xhc3MgZXh0ZW5kcyBfIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG4gPSBKdCh0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCB0KTtcblx0XHRsZXQgciA9ICExLCBpID0gMCwgcyA9IDAsIG8gPSAwLCBhID0gMDtcblx0XHRjb25zdCBkID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKSwgdSA9IE1hdGgubWF4KDgwLCBwYXJzZUZsb2F0KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLWhcIikgfHwgXCJcIikgfHwgODApLCBwID0gKGwpID0+IHtcblx0XHRcdGwuYnV0dG9uID09PSAwICYmIChsLnRhcmdldCAhPT0gbiAmJiAhbi5jb250YWlucyhsLnRhcmdldCkgfHwgKHIgPSAhMCwgaSA9IGwuY2xpZW50WCwgcyA9IGwuY2xpZW50WSwgbyA9IHQub2Zmc2V0V2lkdGgsIGEgPSB0Lm9mZnNldEhlaWdodCwgbi5zZXRQb2ludGVyQ2FwdHVyZShsLnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQocWUuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0d2lkdGg6IG8sXG5cdFx0XHRcdFx0aGVpZ2h0OiBhXG5cdFx0XHRcdH1cblx0XHRcdH0pKSkpO1xuXHRcdH0sIGggPSAobCkgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRjb25zdCBmID0gTWF0aC5tYXgoZCwgbyArIChsLmNsaWVudFggLSBpKSksIG0gPSBNYXRoLm1heCh1LCBhICsgKGwuY2xpZW50WSAtIHMpKTtcblx0XHRcdHQuc3R5bGUud2lkdGggPSBgJHtmfXB4YCwgdC5zdHlsZS5oZWlnaHQgPSBgJHttfXB4YCwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChxZS5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdHdpZHRoOiBmLFxuXHRcdFx0XHRcdGhlaWdodDogbVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgYyA9IChsKSA9PiB7XG5cdFx0XHRpZiAocikge1xuXHRcdFx0XHRyID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0bi5yZWxlYXNlUG9pbnRlckNhcHR1cmUobC5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQocWUuZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0d2lkdGg6IHQub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IHQub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gZyh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCB2KG4sIFwicG9pbnRlcmRvd25cIiwgcCkpLCBnKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHYobiwgXCJwb2ludGVybW92ZVwiLCBoKSksIGcodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgdihuLCBcInBvaW50ZXJ1cFwiLCBjKSksIGcodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgdihuLCBcInBvaW50ZXJjYW5jZWxcIiwgYykpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgZHQodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiksIHRoaXM7XG5cdH1cbn07XG5uZXcgS3IoKTtcbm5ldyBRcigpO1xubmV3IGVpKCk7XG5mdW5jdGlvbiBCZShlLCB0KSB7XG5cdGNvbnN0IG4gPSBNYXRoLm1pbihlLngsIHQueCksIHIgPSBNYXRoLm1pbihlLnksIHQueSksIGkgPSBNYXRoLm1heChlLngsIHQueCksIHMgPSBNYXRoLm1heChlLnksIHQueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdDogbixcblx0XHR0b3A6IHIsXG5cdFx0cmlnaHQ6IGksXG5cdFx0Ym90dG9tOiBzLFxuXHRcdHdpZHRoOiBpIC0gbixcblx0XHRoZWlnaHQ6IHMgLSByXG5cdH07XG59XG52YXIgZmUgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgX2UgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgRGUgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG52YXIgdGkgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBqZSA9IGdsb2JhbFRoaXNbdGldID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB5ID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IGplLmdldChlKSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBpID0gci5nZXQodCkgPz8gW107XG5cdGkucHVzaChuKSwgci5zZXQodCwgaSksIGplLnNldChlLCByKTtcbn07XG52YXIgZnQgPSAoZSwgdCkgPT4ge1xuXHRjb25zdCBuID0gamUuZ2V0KGUpLCByID0gbj8uZ2V0KHQpO1xuXHRpZiAocikge1xuXHRcdGZvciAoY29uc3QgaSBvZiByKSB0cnkge1xuXHRcdFx0aSgpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRuLmRlbGV0ZSh0KSwgbi5zaXplID09PSAwICYmIGplLmRlbGV0ZShlKTtcblx0fVxufTtcbnZhciB6ID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGUpPy5nZXRQcm9wZXJ0eVZhbHVlPy4odCk/LnRyaW0/LigpID8/IFwiXCIsIHIgPSBwYXJzZUZsb2F0KG4pO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKHIpID8gciA6IDA7XG59O1xudmFyIEd0ID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IGUuZ2V0QXR0cmlidXRlKHQpPy50cmltKCk7XG5cdGlmICghcikgcmV0dXJuIG47XG5cdGNvbnN0IGkgPSBlLnF1ZXJ5U2VsZWN0b3Iocik7XG5cdHJldHVybiBpIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpIDogbjtcbn07XG52YXIgbmkgPSBjbGFzcyBleHRlbmRzIF8ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0fVxuXHRjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdGlmICghdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bi5jbGFzc05hbWUgPSBcInVpLWp1bmN0aW9uLXNlbGVjdC1vdmVybGF5XCIsIG4uc2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1vdmVybGF5XCIsIFwiXCIpLCBuLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDo5OTk5O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IGRhc2hlZCBjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgNzAlLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZDpjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgMTQlLCB0cmFuc3BhcmVudCk7ZGlzcGxheTpub25lO2luc2V0OmF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowO1wiLCBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lih0KT8ucG9zaXRpb24gPT09IFwic3RhdGljXCIgJiYgKHQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCIpLCB0LmFwcGVuZENoaWxkKG4pO1xuXHRcdGxldCByID0gITEsIGkgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH0sIHMgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0Y29uc3QgbyA9IChsKSA9PiB7XG5cdFx0XHRjb25zdCBmID0gdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IGwuY2xpZW50WCAtIGYubGVmdCxcblx0XHRcdFx0eTogbC5jbGllbnRZIC0gZi50b3Bcblx0XHRcdH07XG5cdFx0fSwgYSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGwgPSBCZShpLCBzKTtcblx0XHRcdGlmIChsLndpZHRoIDwgMSAmJiBsLmhlaWdodCA8IDEpIHtcblx0XHRcdFx0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiwgbi5zdHlsZS5sZWZ0ID0gYCR7bC5sZWZ0fXB4YCwgbi5zdHlsZS50b3AgPSBgJHtsLnRvcH1weGAsIG4uc3R5bGUud2lkdGggPSBgJHtsLndpZHRofXB4YCwgbi5zdHlsZS5oZWlnaHQgPSBgJHtsLmhlaWdodH1weGA7XG5cdFx0fSwgZCA9IChsKSA9PiB7XG5cdFx0XHRsLmJ1dHRvbiA9PT0gMCAmJiAobC50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLWp1bmN0aW9uLWlnbm9yZS1zZWxlY3RdLCBbZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZV0sIFtkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVdLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpIHx8IChsLnRhcmdldCA9PT0gdCB8fCB0LmNvbnRhaW5zKGwudGFyZ2V0KSkgJiYgKHIgPSAhMCwgaSA9IG8obCksIHMgPSB7IC4uLmkgfSwgdC5zZXRQb2ludGVyQ2FwdHVyZShsLnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZmUuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uaSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ucyB9LFxuXHRcdFx0XHRcdGhvc3Q6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpLCBhKCkpKTtcblx0XHR9LCB1ID0gKGwpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0cyA9IG8obCksIGEoKTtcblx0XHRcdGNvbnN0IGYgPSBCZShpLCBzKTtcblx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZmUubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5pIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5zIH0sXG5cdFx0XHRcdFx0Ym94OiBmLFxuXHRcdFx0XHRcdGhvc3Q6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIHAgPSAobCkgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRyID0gITE7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShsLnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRjb25zdCBmID0gQmUoaSwgcyk7XG5cdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGZlLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5pIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5zIH0sXG5cdFx0XHRcdFx0Ym94OiBmLFxuXHRcdFx0XHRcdGhvc3Q6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIGggPSAobCkgPT4ge1xuXHRcdFx0ciAmJiBwKGwpO1xuXHRcdH0sIGMgPSAobCkgPT4ge1xuXHRcdFx0aWYgKHIpIHtcblx0XHRcdFx0ciA9ICExLCBuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShsLnBvaW50ZXJJZCk7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChmZS5jYW5jZWwsIHtcblx0XHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0XHRkZXRhaWw6IHsgaG9zdDogdCB9XG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiB5KHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsICgpID0+IHtcblx0XHRcdG4ucmVtb3ZlKCk7XG5cdFx0fSksIHkodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgdih0LCBcInBvaW50ZXJkb3duXCIsIGQpKSwgeSh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB2KHQsIFwicG9pbnRlcm1vdmVcIiwgdSkpLCB5KHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIHYodCwgXCJwb2ludGVydXBcIiwgaCkpLCB5KHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIHYodCwgXCJwb2ludGVyY2FuY2VsXCIsIGMpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIGZ0KHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIpLCB0aGlzO1xuXHR9XG59O1xudmFyIHJpID0gY2xhc3MgZXh0ZW5kcyBfIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRBKHQsIFwiLS1qeC1kcmFnLXhcIiwgeih0LCBcIi0tangtZHJhZy14XCIpKSwgQSh0LCBcIi0tangtZHJhZy15XCIsIHoodCwgXCItLWp4LWRyYWcteVwiKSk7XG5cdFx0Y29uc3QgbiA9IHQuc3R5bGUudHJhbnNmb3JtO1xuXHRcdCghdC5zdHlsZS50cmFuc2Zvcm0gfHwgdC5zdHlsZS50cmFuc2Zvcm0gPT09IFwibm9uZVwiKSAmJiAodC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tangtZHJhZy14LCAwKSAqIDFweCksIGNhbGModmFyKC0tangtZHJhZy15LCAwKSAqIDFweCksIDApXCIpO1xuXHRcdGNvbnN0IHIgPSBHdCh0LCBcImRhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVcIiwgdCk7XG5cdFx0bGV0IGkgPSAhMSwgcyA9IDAsIG8gPSAwLCBhID0gMCwgZCA9IDA7XG5cdFx0Y29uc3QgdSA9IChjKSA9PiB7XG5cdFx0XHRjLmJ1dHRvbiA9PT0gMCAmJiAoYy50YXJnZXQgIT09IHIgJiYgIXIuY29udGFpbnMoYy50YXJnZXQpIHx8IChpID0gITAsIHMgPSBjLmNsaWVudFgsIG8gPSBjLmNsaWVudFksIGEgPSB6KHQsIFwiLS1qeC1kcmFnLXhcIiksIGQgPSB6KHQsIFwiLS1qeC1kcmFnLXlcIiksIHIuc2V0UG9pbnRlckNhcHR1cmUoYy5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KF9lLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGNsaWVudFg6IGMuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiBjLmNsaWVudFksXG5cdFx0XHRcdFx0YmFzZVg6IGEsXG5cdFx0XHRcdFx0YmFzZVk6IGRcblx0XHRcdFx0fVxuXHRcdFx0fSkpKSk7XG5cdFx0fSwgcCA9IChjKSA9PiB7XG5cdFx0XHRpZiAoIWkpIHJldHVybjtcblx0XHRcdGNvbnN0IGwgPSBjLmNsaWVudFggLSBzLCBmID0gYy5jbGllbnRZIC0gbywgbSA9IGEgKyBsLCBTID0gZCArIGY7XG5cdFx0XHRBKHQsIFwiLS1qeC1kcmFnLXhcIiwgbSksIEEodCwgXCItLWp4LWRyYWcteVwiLCBTKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChfZS5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGR4OiBsLFxuXHRcdFx0XHRcdGR5OiBmLFxuXHRcdFx0XHRcdHg6IG0sXG5cdFx0XHRcdFx0eTogU1xuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgaCA9IChjKSA9PiB7XG5cdFx0XHRpZiAoaSkge1xuXHRcdFx0XHRpID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ci5yZWxlYXNlUG9pbnRlckNhcHR1cmUoYy5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoX2UuZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0eDogeih0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdFx0eTogeih0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4geSh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0dC5zdHlsZS50cmFuc2Zvcm0gPSBuO1xuXHRcdH0pLCB5KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcmRvd25cIiwgdSkpLCB5KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcm1vdmVcIiwgcCkpLCB5KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcnVwXCIsIGgpKSwgeSh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgdihyLCBcInBvaW50ZXJjYW5jZWxcIiwgaCkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgZnQodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpLCB0aGlzO1xuXHR9XG59O1xudmFyIGlpID0gY2xhc3MgZXh0ZW5kcyBfIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG4gPSBHdCh0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCB0KTtcblx0XHRsZXQgciA9ICExLCBpID0gMCwgcyA9IDAsIG8gPSAwLCBhID0gMDtcblx0XHRjb25zdCBkID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKSwgdSA9IE1hdGgubWF4KDgwLCBwYXJzZUZsb2F0KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLWhcIikgfHwgXCJcIikgfHwgODApLCBwID0gKGwpID0+IHtcblx0XHRcdGwuYnV0dG9uID09PSAwICYmIChsLnRhcmdldCAhPT0gbiAmJiAhbi5jb250YWlucyhsLnRhcmdldCkgfHwgKHIgPSAhMCwgaSA9IGwuY2xpZW50WCwgcyA9IGwuY2xpZW50WSwgbyA9IHQub2Zmc2V0V2lkdGgsIGEgPSB0Lm9mZnNldEhlaWdodCwgbi5zZXRQb2ludGVyQ2FwdHVyZShsLnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoRGUuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0d2lkdGg6IG8sXG5cdFx0XHRcdFx0aGVpZ2h0OiBhXG5cdFx0XHRcdH1cblx0XHRcdH0pKSkpO1xuXHRcdH0sIGggPSAobCkgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRjb25zdCBmID0gTWF0aC5tYXgoZCwgbyArIChsLmNsaWVudFggLSBpKSksIG0gPSBNYXRoLm1heCh1LCBhICsgKGwuY2xpZW50WSAtIHMpKTtcblx0XHRcdHQuc3R5bGUud2lkdGggPSBgJHtmfXB4YCwgdC5zdHlsZS5oZWlnaHQgPSBgJHttfXB4YCwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChEZS5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdHdpZHRoOiBmLFxuXHRcdFx0XHRcdGhlaWdodDogbVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgYyA9IChsKSA9PiB7XG5cdFx0XHRpZiAocikge1xuXHRcdFx0XHRyID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0bi5yZWxlYXNlUG9pbnRlckNhcHR1cmUobC5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoRGUuZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0d2lkdGg6IHQub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IHQub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4geSh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCB2KG4sIFwicG9pbnRlcmRvd25cIiwgcCkpLCB5KHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHYobiwgXCJwb2ludGVybW92ZVwiLCBoKSksIHkodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgdihuLCBcInBvaW50ZXJ1cFwiLCBjKSksIHkodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgdihuLCBcInBvaW50ZXJjYW5jZWxcIiwgYykpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgZnQodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiksIHRoaXM7XG5cdH1cbn07XG5uZXcgbmkoKTtcbm5ldyByaSgpO1xubmV3IGlpKCk7XG5mdW5jdGlvbiBaZShlLCB0KSB7XG5cdGNvbnN0IG4gPSBNYXRoLm1pbihlLngsIHQueCksIHIgPSBNYXRoLm1pbihlLnksIHQueSksIGkgPSBNYXRoLm1heChlLngsIHQueCksIHMgPSBNYXRoLm1heChlLnksIHQueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdDogbixcblx0XHR0b3A6IHIsXG5cdFx0cmlnaHQ6IGksXG5cdFx0Ym90dG9tOiBzLFxuXHRcdHdpZHRoOiBpIC0gbixcblx0XHRoZWlnaHQ6IHMgLSByXG5cdH07XG59XG52YXIgcGUgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgVWUgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgWGUgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG52YXIgYWkgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBWZSA9IGdsb2JhbFRoaXNbYWldID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IFZlLmdldChlKSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBpID0gci5nZXQodCkgPz8gW107XG5cdGkucHVzaChuKSwgci5zZXQodCwgaSksIFZlLnNldChlLCByKTtcbn07XG52YXIgcHQgPSAoZSwgdCkgPT4ge1xuXHRjb25zdCBuID0gVmUuZ2V0KGUpLCByID0gbj8uZ2V0KHQpO1xuXHRpZiAocikge1xuXHRcdGZvciAoY29uc3QgaSBvZiByKSB0cnkge1xuXHRcdFx0aSgpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRuLmRlbGV0ZSh0KSwgbi5zaXplID09PSAwICYmIFZlLmRlbGV0ZShlKTtcblx0fVxufTtcbnZhciBrID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGUpPy5nZXRQcm9wZXJ0eVZhbHVlPy4odCk/LnRyaW0/LigpID8/IFwiXCIsIHIgPSBwYXJzZUZsb2F0KG4pO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKHIpID8gciA6IDA7XG59O1xudmFyIEt0ID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IGUuZ2V0QXR0cmlidXRlKHQpPy50cmltKCk7XG5cdGlmICghcikgcmV0dXJuIG47XG5cdGNvbnN0IGkgPSBlLnF1ZXJ5U2VsZWN0b3Iocik7XG5cdHJldHVybiBpIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpIDogbjtcbn07XG52YXIgb2kgPSBjbGFzcyBleHRlbmRzIHV0IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG4uY2xhc3NOYW1lID0gXCJ1aS1qdW5jdGlvbi1zZWxlY3Qtb3ZlcmxheVwiLCBuLnNldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tb3ZlcmxheVwiLCBcIlwiKSwgbi5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6OTk5OTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDE0JSwgdHJhbnNwYXJlbnQpO2Rpc3BsYXk6bm9uZTtpbnNldDphdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtcIiwgZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4odCk/LnBvc2l0aW9uID09PSBcInN0YXRpY1wiICYmICh0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiKSwgdC5hcHBlbmRDaGlsZChuKTtcblx0XHRsZXQgaSA9ICExLCBzID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9LCBvID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGNvbnN0IGEgPSAoZikgPT4ge1xuXHRcdFx0Y29uc3QgbSA9IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBmLmNsaWVudFggLSBtLmxlZnQsXG5cdFx0XHRcdHk6IGYuY2xpZW50WSAtIG0udG9wXG5cdFx0XHR9O1xuXHRcdH0sIGQgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBmID0gWmUocywgbyk7XG5cdFx0XHRpZiAoZi53aWR0aCA8IDEgJiYgZi5oZWlnaHQgPCAxKSB7XG5cdFx0XHRcdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIsIG4uc3R5bGUubGVmdCA9IGAke2YubGVmdH1weGAsIG4uc3R5bGUudG9wID0gYCR7Zi50b3B9cHhgLCBuLnN0eWxlLndpZHRoID0gYCR7Zi53aWR0aH1weGAsIG4uc3R5bGUuaGVpZ2h0ID0gYCR7Zi5oZWlnaHR9cHhgO1xuXHRcdH0sIHUgPSAoZikgPT4ge1xuXHRcdFx0Zi5idXR0b24gPT09IDAgJiYgKGYudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1qdW5jdGlvbi1pZ25vcmUtc2VsZWN0XSwgW2RhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVdLCBbZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXSwgYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSB8fCAoZi50YXJnZXQgPT09IHQgfHwgdC5jb250YWlucyhmLnRhcmdldCkpICYmIChpID0gITAsIHMgPSBhKGYpLCBvID0geyAuLi5zIH0sIHQuc2V0UG9pbnRlckNhcHR1cmUoZi5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHBlLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLnMgfSxcblx0XHRcdFx0XHRiOiB7IC4uLm8gfSxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKSwgZCgpKSk7XG5cdFx0fSwgcCA9IChmKSA9PiB7XG5cdFx0XHRpZiAoIWkpIHJldHVybjtcblx0XHRcdG8gPSBhKGYpLCBkKCk7XG5cdFx0XHRjb25zdCBtID0gWmUocywgbyk7XG5cdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHBlLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4ucyB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ubyB9LFxuXHRcdFx0XHRcdGJveDogbSxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBoID0gKGYpID0+IHtcblx0XHRcdGlmICghaSkgcmV0dXJuO1xuXHRcdFx0aSA9ICExO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgbSA9IFplKHMsIG8pO1xuXHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChwZS5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4ucyB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ubyB9LFxuXHRcdFx0XHRcdGJveDogbSxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBjID0gKGYpID0+IHtcblx0XHRcdGkgJiYgaChmKTtcblx0XHR9LCBsID0gKGYpID0+IHtcblx0XHRcdGlmIChpKSB7XG5cdFx0XHRcdGkgPSAhMSwgbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZi5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQocGUuY2FuY2VsLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7IGhvc3Q6IHQgfVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gYih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRuLnJlbW92ZSgpO1xuXHRcdH0pLCBiKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIHcodCwgXCJwb2ludGVyZG93blwiLCB1KSksIGIodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgdyh0LCBcInBvaW50ZXJtb3ZlXCIsIHApKSwgYih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB3KHQsIFwicG9pbnRlcnVwXCIsIGMpKSwgYih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB3KHQsIFwicG9pbnRlcmNhbmNlbFwiLCBsKSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiBwdCh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKSwgdGhpcztcblx0fVxufTtcbnZhciBzaSA9IGNsYXNzIGV4dGVuZHMgdXQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdHVlKHQsIFwiLS1qeC1kcmFnLXhcIiwgayh0LCBcIi0tangtZHJhZy14XCIpKSwgdWUodCwgXCItLWp4LWRyYWcteVwiLCBrKHQsIFwiLS1qeC1kcmFnLXlcIikpO1xuXHRcdGNvbnN0IG4gPSB0LnN0eWxlLnRyYW5zZm9ybTtcblx0XHQoIXQuc3R5bGUudHJhbnNmb3JtIHx8IHQuc3R5bGUudHJhbnNmb3JtID09PSBcIm5vbmVcIikgJiYgKHQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChjYWxjKHZhcigtLWp4LWRyYWcteCwgMCkgKiAxcHgpLCBjYWxjKHZhcigtLWp4LWRyYWcteSwgMCkgKiAxcHgpLCAwKVwiKTtcblx0XHRjb25zdCByID0gS3QodCwgXCJkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXCIsIHQpO1xuXHRcdGxldCBpID0gITEsIHMgPSAwLCBvID0gMCwgYSA9IDAsIGQgPSAwO1xuXHRcdGNvbnN0IHUgPSAoYykgPT4ge1xuXHRcdFx0Yy5idXR0b24gPT09IDAgJiYgKGMudGFyZ2V0ICE9PSByICYmICFyLmNvbnRhaW5zKGMudGFyZ2V0KSB8fCAoaSA9ICEwLCBzID0gYy5jbGllbnRYLCBvID0gYy5jbGllbnRZLCBhID0gayh0LCBcIi0tangtZHJhZy14XCIpLCBkID0gayh0LCBcIi0tangtZHJhZy15XCIpLCByLnNldFBvaW50ZXJDYXB0dXJlKGMucG9pbnRlcklkKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChVZS5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRjbGllbnRYOiBjLmNsaWVudFgsXG5cdFx0XHRcdFx0Y2xpZW50WTogYy5jbGllbnRZLFxuXHRcdFx0XHRcdGJhc2VYOiBhLFxuXHRcdFx0XHRcdGJhc2VZOiBkXG5cdFx0XHRcdH1cblx0XHRcdH0pKSkpO1xuXHRcdH0sIHAgPSAoYykgPT4ge1xuXHRcdFx0aWYgKCFpKSByZXR1cm47XG5cdFx0XHRjb25zdCBsID0gYy5jbGllbnRYIC0gcywgZiA9IGMuY2xpZW50WSAtIG8sIG0gPSBhICsgbCwgUyA9IGQgKyBmO1xuXHRcdFx0dWUodCwgXCItLWp4LWRyYWcteFwiLCBtKSwgdWUodCwgXCItLWp4LWRyYWcteVwiLCBTKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChVZS5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGR4OiBsLFxuXHRcdFx0XHRcdGR5OiBmLFxuXHRcdFx0XHRcdHg6IG0sXG5cdFx0XHRcdFx0eTogU1xuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgaCA9IChjKSA9PiB7XG5cdFx0XHRpZiAoaSkge1xuXHRcdFx0XHRpID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ci5yZWxlYXNlUG9pbnRlckNhcHR1cmUoYy5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoVWUuZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0eDogayh0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdFx0eTogayh0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gYih0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0dC5zdHlsZS50cmFuc2Zvcm0gPSBuO1xuXHRcdH0pLCBiKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB3KHIsIFwicG9pbnRlcmRvd25cIiwgdSkpLCBiKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB3KHIsIFwicG9pbnRlcm1vdmVcIiwgcCkpLCBiKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB3KHIsIFwicG9pbnRlcnVwXCIsIGgpKSwgYih0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgdyhyLCBcInBvaW50ZXJjYW5jZWxcIiwgaCkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgcHQodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpLCB0aGlzO1xuXHR9XG59O1xudmFyIGxpID0gY2xhc3MgZXh0ZW5kcyB1dCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBuID0gS3QodCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgdCk7XG5cdFx0bGV0IHIgPSAhMSwgaSA9IDAsIHMgPSAwLCBvID0gMCwgYSA9IDA7XG5cdFx0Y29uc3QgZCA9IE1hdGgubWF4KDEyMCwgcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi13XCIpIHx8IFwiXCIpIHx8IDEyMCksIHUgPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKSwgcCA9IChsKSA9PiB7XG5cdFx0XHRsLmJ1dHRvbiA9PT0gMCAmJiAobC50YXJnZXQgIT09IG4gJiYgIW4uY29udGFpbnMobC50YXJnZXQpIHx8IChyID0gITAsIGkgPSBsLmNsaWVudFgsIHMgPSBsLmNsaWVudFksIG8gPSB0Lm9mZnNldFdpZHRoLCBhID0gdC5vZmZzZXRIZWlnaHQsIG4uc2V0UG9pbnRlckNhcHR1cmUobC5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFhlLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdHdpZHRoOiBvLFxuXHRcdFx0XHRcdGhlaWdodDogYVxuXHRcdFx0XHR9XG5cdFx0XHR9KSkpKTtcblx0XHR9LCBoID0gKGwpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0Y29uc3QgZiA9IE1hdGgubWF4KGQsIG8gKyAobC5jbGllbnRYIC0gaSkpLCBtID0gTWF0aC5tYXgodSwgYSArIChsLmNsaWVudFkgLSBzKSk7XG5cdFx0XHR0LnN0eWxlLndpZHRoID0gYCR7Zn1weGAsIHQuc3R5bGUuaGVpZ2h0ID0gYCR7bX1weGAsIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoWGUubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHR3aWR0aDogZixcblx0XHRcdFx0XHRoZWlnaHQ6IG1cblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIGMgPSAobCkgPT4ge1xuXHRcdFx0aWYgKHIpIHtcblx0XHRcdFx0ciA9ICExO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG4ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGwucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFhlLmVuZCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRcdHdpZHRoOiB0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiB0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIGIodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgdyhuLCBcInBvaW50ZXJkb3duXCIsIHApKSwgYih0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCB3KG4sIFwicG9pbnRlcm1vdmVcIiwgaCkpLCBiKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHcobiwgXCJwb2ludGVydXBcIiwgYykpLCBiKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHcobiwgXCJwb2ludGVyY2FuY2VsXCIsIGMpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIHB0KHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIpLCB0aGlzO1xuXHR9XG59O1xubmV3IG9pKCk7XG5uZXcgc2koKTtcbm5ldyBsaSgpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vanVuY3Rpb24vdHlwZXMudHNcbmZ1bmN0aW9uIGp1bmN0aW9uVG9Cb3goYSwgYikge1xuXHRjb25zdCBsZWZ0ID0gTWF0aC5taW4oYS54LCBiLngpO1xuXHRjb25zdCB0b3AgPSBNYXRoLm1pbihhLnksIGIueSk7XG5cdGNvbnN0IHJpZ2h0ID0gTWF0aC5tYXgoYS54LCBiLngpO1xuXHRjb25zdCBib3R0b20gPSBNYXRoLm1heChhLnksIGIueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdCxcblx0XHR0b3AsXG5cdFx0cmlnaHQsXG5cdFx0Ym90dG9tLFxuXHRcdHdpZHRoOiByaWdodCAtIGxlZnQsXG5cdFx0aGVpZ2h0OiBib3R0b20gLSB0b3Bcblx0fTtcbn1cbnZhciBKVU5DVElPTl9TRUxFQ1RfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1zZWxlY3Q6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1zZWxlY3Q6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tc2VsZWN0OmVuZFwiLFxuXHRjYW5jZWw6IFwianVuY3Rpb24tc2VsZWN0OmNhbmNlbFwiXG59O1xudmFyIEpVTkNUSU9OX0RSQUdfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1kcmFnOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tZHJhZzptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1kcmFnOmVuZFwiXG59O1xudmFyIEpVTkNUSU9OX1JFU0laRV9FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9qdW5jdGlvbi9KdW5jdGlvbk1peGlucy50c1xudmFyIG1peGluRGlzcG9zZXJzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBtaXhpbkRpc3Bvc2VycyA9IGdsb2JhbFRoaXNbbWl4aW5EaXNwb3NlcnNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBwdXNoRGlzcG9zYWJsZSA9IChob3N0LCBtaXhpbk5hbWUsIGZuKSA9PiB7XG5cdGNvbnN0IG1hcCA9IG1peGluRGlzcG9zZXJzLmdldChob3N0KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRjb25zdCBsaXN0ID0gbWFwLmdldChtaXhpbk5hbWUpID8/IFtdO1xuXHRsaXN0LnB1c2goZm4pO1xuXHRtYXAuc2V0KG1peGluTmFtZSwgbGlzdCk7XG5cdG1peGluRGlzcG9zZXJzLnNldChob3N0LCBtYXApO1xufTtcbnZhciBydW5EaXNwb3NlcnMgPSAoaG9zdCwgbWl4aW5OYW1lKSA9PiB7XG5cdGNvbnN0IG1hcCA9IG1peGluRGlzcG9zZXJzLmdldChob3N0KTtcblx0Y29uc3QgbGlzdCA9IG1hcD8uZ2V0KG1peGluTmFtZSk7XG5cdGlmICghbGlzdCkgcmV0dXJuO1xuXHRmb3IgKGNvbnN0IGZuIG9mIGxpc3QpIHRyeSB7XG5cdFx0Zm4oKTtcblx0fSBjYXRjaCB7fVxuXHRtYXAuZGVsZXRlKG1peGluTmFtZSk7XG5cdGlmIChtYXAuc2l6ZSA9PT0gMCkgbWl4aW5EaXNwb3NlcnMuZGVsZXRlKGhvc3QpO1xufTtcbnZhciBwYXJzZVB4VmFyID0gKGhvc3QsIG5hbWUpID0+IHtcblx0Y29uc3QgcmF3ID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oaG9zdCk/LmdldFByb3BlcnR5VmFsdWU/LihuYW1lKT8udHJpbT8uKCkgPz8gXCJcIjtcblx0Y29uc3QgbiA9IHBhcnNlRmxvYXQocmF3KTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiAwO1xufTtcbnZhciBxdWVyeUhhbmRsZSA9IChob3N0LCBhdHRyLCBmYWxsYmFjaykgPT4ge1xuXHRjb25zdCBzZWwgPSBob3N0LmdldEF0dHJpYnV0ZShhdHRyKT8udHJpbSgpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGZhbGxiYWNrO1xuXHRjb25zdCBmb3VuZCA9IGhvc3QucXVlcnlTZWxlY3RvcihzZWwpO1xuXHRyZXR1cm4gZm91bmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGZvdW5kIDogZmFsbGJhY2s7XG59O1xudmFyIEp1bmN0aW9uU2VsZWN0TWl4aW4gPSBjbGFzcyBleHRlbmRzIG1hIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRvdmVybGF5LmNsYXNzTmFtZSA9IFwidWktanVuY3Rpb24tc2VsZWN0LW92ZXJsYXlcIjtcblx0XHRvdmVybGF5LnNldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tb3ZlcmxheVwiLCBcIlwiKTtcblx0XHRvdmVybGF5LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDo5OTk5O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IGRhc2hlZCBjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgNzAlLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZDpjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgMTQlLCB0cmFuc3BhcmVudCk7ZGlzcGxheTpub25lO2luc2V0OmF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowO1wiO1xuXHRcdGNvbnN0IGVuc3VyZVBvc2l0aW9uZWQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoKGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpKT8ucG9zaXRpb24gPT09IFwic3RhdGljXCIpIGhvc3Quc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fTtcblx0XHRlbnN1cmVQb3NpdGlvbmVkKCk7XG5cdFx0aG9zdC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblx0XHRsZXQgYWN0aXZlID0gZmFsc2U7XG5cdFx0bGV0IGEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0bGV0IGIgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0Y29uc3QgbG9jYWxQb2ludCA9IChldikgPT4ge1xuXHRcdFx0Y29uc3QgciA9IGhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBldi5jbGllbnRYIC0gci5sZWZ0LFxuXHRcdFx0XHR5OiBldi5jbGllbnRZIC0gci50b3Bcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBhcHBseU92ZXJsYXkgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aWYgKGJveC53aWR0aCA8IDEgJiYgYm94LmhlaWdodCA8IDEpIHtcblx0XHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdG92ZXJsYXkuc3R5bGUubGVmdCA9IGAke2JveC5sZWZ0fXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUudG9wID0gYCR7Ym94LnRvcH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLndpZHRoID0gYCR7Ym94LndpZHRofXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7Ym94LmhlaWdodH1weGA7XG5cdFx0fTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLWp1bmN0aW9uLWlnbm9yZS1zZWxlY3RdLCBbZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZV0sIFtkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVdLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKSByZXR1cm47XG5cdFx0XHRpZiAoIShldi50YXJnZXQgPT09IGhvc3QgfHwgaG9zdC5jb250YWlucyhldi50YXJnZXQpKSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdGEgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGIgPSB7IC4uLmEgfTtcblx0XHRcdGhvc3Quc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YiA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3QgZW5kID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGVuZChldik7XG5cdFx0fTtcblx0XHRjb25zdCBvbkNhbmNlbCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmNhbmNlbCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHsgaG9zdCB9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRvdmVybGF5LnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIHgoaG9zdCwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB4KGhvc3QsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgeChob3N0LCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgeChob3N0LCBcInBvaW50ZXJjYW5jZWxcIiwgb25DYW5jZWwpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uRHJhZ01peGluID0gY2xhc3MgZXh0ZW5kcyBtYSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdGtlKGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpKTtcblx0XHRrZShob3N0LCBcIi0tangtZHJhZy15XCIsIHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKSk7XG5cdFx0Y29uc3QgcHJldmlvdXNUcmFuc2Zvcm0gPSBob3N0LnN0eWxlLnRyYW5zZm9ybTtcblx0XHRpZiAoIWhvc3Quc3R5bGUudHJhbnNmb3JtIHx8IGhvc3Quc3R5bGUudHJhbnNmb3JtID09PSBcIm5vbmVcIikgaG9zdC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tangtZHJhZy14LCAwKSAqIDFweCksIGNhbGModmFyKC0tangtZHJhZy15LCAwKSAqIDFweCksIDApXCI7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXCIsIGhvc3QpO1xuXHRcdGxldCBkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdGxldCBzdGFydFggPSAwO1xuXHRcdGxldCBzdGFydFkgPSAwO1xuXHRcdGxldCBiYXNlWCA9IDA7XG5cdFx0bGV0IGJhc2VZID0gMDtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdGRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdHN0YXJ0WCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzdGFydFkgPSBldi5jbGllbnRZO1xuXHRcdFx0YmFzZVggPSBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIik7XG5cdFx0XHRiYXNlWSA9IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKTtcblx0XHRcdGhhbmRsZS5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdGNsaWVudFg6IGV2LmNsaWVudFgsXG5cdFx0XHRcdFx0Y2xpZW50WTogZXYuY2xpZW50WSxcblx0XHRcdFx0XHRiYXNlWCxcblx0XHRcdFx0XHRiYXNlWVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghZHJhZ2dpbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IGR4ID0gZXYuY2xpZW50WCAtIHN0YXJ0WDtcblx0XHRcdGNvbnN0IGR5ID0gZXYuY2xpZW50WSAtIHN0YXJ0WTtcblx0XHRcdGNvbnN0IG54ID0gYmFzZVggKyBkeDtcblx0XHRcdGNvbnN0IG55ID0gYmFzZVkgKyBkeTtcblx0XHRcdGtlKGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgbngpO1xuXHRcdFx0a2UoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBueSk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRkeCxcblx0XHRcdFx0XHRkeSxcblx0XHRcdFx0XHR4OiBueCxcblx0XHRcdFx0XHR5OiBueVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR4OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIiksXG5cdFx0XHRcdFx0eTogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCAoKSA9PiB7XG5cdFx0XHRob3N0LnN0eWxlLnRyYW5zZm9ybSA9IHByZXZpb3VzVHJhbnNmb3JtO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB4KGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgeChoYW5kbGUsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIHgoaGFuZGxlLCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIHgoaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uUmVzaXplTWl4aW4gPSBjbGFzcyBleHRlbmRzIG1hIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgcmVzaXppbmcgPSBmYWxzZTtcblx0XHRsZXQgc3ggPSAwO1xuXHRcdGxldCBzeSA9IDA7XG5cdFx0bGV0IHN3ID0gMDtcblx0XHRsZXQgc2ggPSAwO1xuXHRcdGNvbnN0IG1pblcgPSBNYXRoLm1heCgxMjAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4td1wiKSB8fCBcIlwiKSB8fCAxMjApO1xuXHRcdGNvbnN0IG1pbkggPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdChob3N0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gdHJ1ZTtcblx0XHRcdHN4ID0gZXYuY2xpZW50WDtcblx0XHRcdHN5ID0gZXYuY2xpZW50WTtcblx0XHRcdHN3ID0gaG9zdC5vZmZzZXRXaWR0aDtcblx0XHRcdHNoID0gaG9zdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBzdyxcblx0XHRcdFx0XHRoZWlnaHQ6IHNoXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFyZXNpemluZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbncgPSBNYXRoLm1heChtaW5XLCBzdyArIChldi5jbGllbnRYIC0gc3gpKTtcblx0XHRcdGNvbnN0IG5oID0gTWF0aC5tYXgobWluSCwgc2ggKyAoZXYuY2xpZW50WSAtIHN5KSk7XG5cdFx0XHRob3N0LnN0eWxlLndpZHRoID0gYCR7bnd9cHhgO1xuXHRcdFx0aG9zdC5zdHlsZS5oZWlnaHQgPSBgJHtuaH1weGA7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBudyxcblx0XHRcdFx0XHRoZWlnaHQ6IG5oXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRoYW5kbGUucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IGhvc3Qub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBob3N0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCB4KGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCB4KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCB4KGhhbmRsZSwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHgoaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5uZXcgSnVuY3Rpb25TZWxlY3RNaXhpbigpO1xubmV3IEp1bmN0aW9uRHJhZ01peGluKCk7XG5uZXcgSnVuY3Rpb25SZXNpemVNaXhpbigpO1xuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IERPTU1peGluLCBKdW5jdGlvbkRyYWdNaXhpbiwgSnVuY3Rpb25SZXNpemVNaXhpbiwgSnVuY3Rpb25TZWxlY3RNaXhpbiwgTUFUQ0gsIE1PQywgTU9DRWxlbWVudCwgUkFGQmVoYXZpb3IsIFJFR0VYLCBST09ULCBXYXZ5U2hhcGVkQ2lyY2xlLCBfX2V4cG9ydFByb3BlcnRpZXMsIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMsIGFkZEV2ZW50LCBhZGRFdmVudHMsIGFkZEV2ZW50c0xpc3QsIGFkZFJvb3QsIGFkb3B0ZWRCbG9iTWFwLCBhZG9wdGVkTWFwLCBhbmltYXRlSGlkZSwgYW5pbWF0ZVNob3csIGF2YWlsU2l6ZSwgYmJoLCBiYncsIGJpbmRCZWhhdmlvciwgYmluZE1peGlucywgYmluZFN0b3JlLCBib3JkZXJCb3hIZWlnaHQsIGJvcmRlckJveFdpZHRoLCBib3VuZEJlaGF2aW9ycywgYm91bmRNaXhpblNldCwgY2JoLCBjYncsIGNoYW5nZVpvb20sIGNsYXNzZXMsIGNvbXB1dGVDYXJldFBvc2l0aW9uLCBjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQsIGNvbnRhaW5zT3JTZWxmLCBjb250ZW50Qm94SGVpZ2h0LCBjb250ZW50Qm94V2lkdGgsIGNyZWF0ZUVsZW1lbnRWYW5pbGxhLCBkZWxldGVTdHlsZVByb3BlcnR5LCBkZXRlY3RNb2JpbGUsIGRvQm9yZGVyT2JzZXJ2ZSwgZG9Db250ZW50T2JzZXJ2ZSwgZmV0Y2hBbmRDYWNoZSwgZmV0Y2hBc0lubGluZSwgZml4T3JpZW50VG9TY3JlZW4sIGZpeGVkQ2xpZW50Wm9vbSwgZ2V0QWRvcHRlZFN0eWxlUnVsZSwgZ2V0QXZhaWxTaXplLCBnZXRCb3VuZGluZ09yaWVudFJlY3QsIGdldENvcnJlY3RPcmllbnRhdGlvbiwgZ2V0RWxlbWVudFJlbGF0ZWQsIGdldEVsZW1lbnRab29tLCBnZXRFdmVudFRhcmdldCwgZ2V0T2Zmc2V0UGFyZW50LCBnZXRPZmZzZXRQYXJlbnRDaGFpbiwgZ2V0UGFkZGluZywgZ2V0UHJvcGVydHlWYWx1ZSwgZ2V0UHhWYWx1ZSwgZ2V0U3RvcmVzT2ZFbGVtZW50LCBnZXRTdHlsZUxheWVyLCBnZXRTdHlsZVJ1bGUsIGdldFRyYW5zZm9ybSwgZ2V0VHJhbnNmb3JtT3JpZ2luLCBnZXRab29tLCBoYW5kbGVBdHRyaWJ1dGUsIGhhbmRsZURhdGFzZXQsIGhhbmRsZUhpZGRlbiwgaGFuZGxlUHJvcGVydHksIGhhbmRsZVN0eWxlQ2hhbmdlLCBoYXNQYXJlbnQsIGhhc2gsIGh0bWwsIGluY2x1ZGVTZWxmLCBpbmRleE9mLCBpbml0VGV4dFN0eWxlLCBpbml0VmlzaWJpbGl0eSwgaXNFbGVtZW50LCBpc0luRm9jdXMsIGlzTW9iaWxlLCBpc05lYXJseUlkZW50aXR5LCBpc1ZhbGlkUGFyZW50LCBsb2FkQXNBZG9wdGVkLCBsb2FkQmxvYlN0eWxlLCBsb2FkSW5saW5lU3R5bGUsIGxvYWRTdHlsZVNoZWV0LCBtYWtlUkFGQ3ljbGUsIG1lYXN1cmVJbnB1dEluRm9jdXMsIG1lYXN1cmVUZXh0LCBtaXhpbkRpc3Bvc2VycywgbWl4aW5FbGVtZW50cywgbWl4aW5OYW1lc3BhY2UsIG1peGluUmVnaXN0cnksIG5hbWVSZWdpc3RyeUYsIG5hbWVkU3RvcmVNYXBzLCBvYnNlcnZlQXR0cmlidXRlLCBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3Rvciwgb2JzZXJ2ZUJvcmRlckJveCwgb2JzZXJ2ZUJ5U2VsZWN0b3IsIG9ic2VydmVDb250ZW50Qm94LCBvbkJvcmRlck9ic2VydmUsIG9uQ29udGVudE9ic2VydmUsIG9yaWVudE9mLCBvcmllbnRhdGlvbk51bWJlck1hcCwgcGFyc2VMZW5ndGgsIHBhcnNlT3JpZ2luLCBwYXNzaXZlT3B0cywgcHJlbG9hZFN0eWxlLCByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCwgcmVmbGVjdEJlaGF2aW9ycywgcmVmbGVjdE1peGlucywgcmVmbGVjdFN0b3JlcywgcmVnaXN0ZXJNaXhpbiwgcmVtb3ZlQWRvcHRlZCwgcmVtb3ZlRXZlbnQsIHJlbW92ZUV2ZW50cywgcmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50LCByb290cywgc2V0QXR0cmlidXRlcywgc2V0QXR0cmlidXRlc0lmTnVsbCwgc2V0Q2hlY2tlZCwgc2V0SWRsZUludGVydmFsLCBzZXRQcm9wZXJ0eSwgc2V0U3R5bGVJblJ1bGUsIHNldFN0eWxlUHJvcGVydHksIHNldFN0eWxlUHJvcGVydHlGYWxsYmFjaywgc2V0U3R5bGVQcm9wZXJ0eVR5cGVkLCBzZXRTdHlsZVJ1bGUsIHNldFN0eWxlUnVsZXMsIHNldFN0eWxlVVJMLCB0aHJvdHRsZU1hcCwgdW5maXhlZENsaWVudFpvb20sIHVwZGF0ZUFsbE1peGlucywgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMsIHVwZGF0ZVZQLCB1cmwsIHdoZW5BbnlTY3JlZW5DaGFuZ2VzLCB6b29tT2YsIHpvb21WYWx1ZXMgfTsiXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLGlCQUFBQSxJQUFlLGdCQUFBQyxHQUFjLGdCQUFBQyxJQUFjLFlBQUFDLEdBQVUscUJBQUFDLElBQW1CLFNBQUFDLElBQU8sZUFBQUMsSUFBYSxnQkFBQUMsSUFBYyx1QkFBQUMsSUFBcUIsc0JBQUFDLElBQW9CLCtCQUFBQyxJQUE2QixxQkFBQUMsU0FBeUI7QUFHbE4sSUFBSUMsS0FBa0MsdUJBQU8sSUFBSSxrQ0FBa0MsR0FDL0VDLEtBQTRCLFdBQVdELEVBQStCLE1BQXNCLG9CQUFJLElBQUk7QUFDeEc7QUFBQSxFQUNDO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFN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ZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFB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Q1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQ0QsRUFBRSxRQUFRLENBQUMsTUFBTTtBQUNoQixNQUFJLE9BQU8sTUFBTSxPQUFPLE9BQU8sS0FBSyxvQkFBb0IsV0FBWTtBQUNwRSxRQUFNLElBQUksT0FBTyxHQUFHLFFBQVEsRUFBRSxFQUFFLEtBQUs7QUFDckMsTUFBSSxFQUFFLENBQUMsS0FBS0MsR0FBRyxJQUFJLENBQUMsR0FBSSxLQUFJO0FBQzNCLFFBQUksaUJBQWlCLENBQUM7QUFBQSxFQUN2QixTQUFTLEdBQUc7QUFDWCxXQUFPLEdBQUcsUUFBUSxFQUFFLEVBQUUsWUFBWSxNQUFNLDhCQUE4QixRQUFRLEtBQUssQ0FBQztBQUFBLEVBQ3JGLFVBQUU7QUFDRCxJQUFBQSxHQUFHLElBQUksQ0FBQztBQUFBLEVBQ1Q7QUFDRCxDQUFDO0FBQ0QsT0FBTyxXQUFXLE9BQU8sVUFBVTtBQUNuQyxJQUFJQyxLQUFxQixvQkFBSSxJQUFJO0FBQ2pDLE9BQU8sd0JBQXdCLE9BQU8sc0JBQXNCLFlBQVk7QUFDdkUsWUFBUyxDQUFBQSxHQUFHLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3JGLENBQUM7QUFDRCxJQUFJQyxLQUFLLENBQUM7QUFDVixTQUFTQyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUlELElBQUk7QUFDM0IsS0FBRyxtQkFBbUIsR0FBRyxHQUFHLENBQUM7QUFDN0IsUUFBTSxJQUFJLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxjQUFjLENBQUMsR0FBRyxRQUFRLElBQUksUUFBUSxDQUFDLElBQUk7QUFDekYsU0FBTyxNQUFNLEdBQUcsUUFBUSxHQUFHLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztBQUN6RDtBQUNBLElBQUlFLEtBQXFCLHVCQUFPLElBQUksbUJBQW1CO0FBQ3ZELFdBQVdBLEVBQUUsTUFBc0Isb0JBQUksUUFBUTtBQUMvQyxJQUFJQyxLQUFLLE1BQU07QUFDZCxRQUFNLElBQUksT0FBTyxhQUFhLE1BQU0sV0FBVywwQkFBMEIsR0FBRyxVQUFVLElBQUksSUFBSSxPQUFPLFNBQVMsTUFBTSxPQUFPLGlCQUFpQixNQUFNLElBQUksSUFBSTtBQUFBLElBQ3pKLGNBQWMsR0FBRyxFQUFFLEtBQUs7QUFBQSxJQUN4QixlQUFlLEdBQUcsRUFBRSxNQUFNO0FBQUEsSUFDMUIsb0JBQW9CLEdBQUcsRUFBRSxVQUFVO0FBQUEsSUFDbkMsbUJBQW1CLEdBQUcsRUFBRSxTQUFTO0FBQUEsSUFDakMsY0FBYyxPQUFPLEVBQUUsU0FBUyxDQUFDO0FBQUEsRUFDbEMsSUFBSTtBQUFBLElBQ0gsY0FBYyxPQUFPLFNBQVMsTUFBTSxHQUFHLE9BQU8sVUFBVSxPQUFPO0FBQUEsSUFDL0QsZUFBZSxPQUFPLFNBQVMsTUFBTSxHQUFHLE9BQU8sV0FBVyxPQUFPO0FBQUEsSUFDakUsb0JBQW9CO0FBQUEsSUFDcEIsbUJBQW1CO0FBQUEsSUFDbkIsY0FBYztBQUFBLEVBQ2Y7QUFDQSxNQUFJLE9BQU8sU0FBUyxLQUFLO0FBQ3hCLFVBQU0sSUFBSSxRQUFRLGFBQWEsTUFBTSxJQUFJLFFBQVEsY0FBYztBQUMvRCxXQUFPO0FBQUEsTUFDTixrQkFBa0IsS0FBSyxJQUFJLFFBQVEsT0FBTyxRQUFRLFVBQVUsSUFBSTtBQUFBLE1BQ2hFLG1CQUFtQixLQUFLLElBQUksUUFBUSxRQUFRLFFBQVEsV0FBVyxJQUFJO0FBQUEsTUFDbkUsaUJBQWlCLElBQUksSUFBSTtBQUFBLE1BQ3pCLGtCQUFrQixJQUFJLElBQUk7QUFBQSxNQUMxQixpQkFBaUIsS0FBSyxJQUFJLFFBQVEsYUFBYSxRQUFRLFdBQVcsSUFBSTtBQUFBLE1BQ3RFLGlCQUFpQixPQUFPLG9CQUFvQixDQUFDO0FBQUEsTUFDN0MsR0FBRztBQUFBLElBQ0o7QUFBQSxFQUNEO0FBQ0EsU0FBTztBQUFBLElBQ04sa0JBQWtCO0FBQUEsSUFDbEIsbUJBQW1CO0FBQUEsSUFDbkIsaUJBQWlCO0FBQUEsSUFDakIsa0JBQWtCO0FBQUEsSUFDbEIsaUJBQWlCO0FBQUEsSUFDakIsaUJBQWlCO0FBQUEsSUFDakIsR0FBRztBQUFBLEVBQ0o7QUFDRDtBQUNBQSxHQUFHO0FBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsV0FBVyxJQUFJO0FBQ3pDLElBQUlDLEtBQXFCLHVCQUFPLElBQUksd0JBQXdCO0FBQzVELFdBQVdBLEVBQUUsTUFBc0Isb0JBQUksUUFBUTtBQUMvQyxJQUFJQyxLQUFxQix1QkFBTyxJQUFJLHlCQUF5QjtBQUM3RCxXQUFXQSxFQUFFLE1BQXNCLG9CQUFJLFFBQVE7QUFDL0MsSUFBSUMsS0FBSyxDQUFDLE9BQU8sT0FBTyxHQUFHLFdBQVcsYUFBYSxJQUFJLEdBQUcsV0FBVyxHQUFHLFlBQVksT0FBTyxHQUFHLFFBQVEsV0FBVyxHQUFHLE9BQU8sU0FBUyxJQUFJLElBQ3BJQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTTtBQUN4QixRQUFNLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLE1BQU07QUFDcEcsZUFBVyxLQUFLLEVBQUcsS0FBSSxFQUFFLFFBQVEsYUFBYTtBQUM3QyxZQUFNM0MsSUFBSSxNQUFNLEtBQUssRUFBRSxVQUFVLEtBQUssQ0FBQyxHQUFHLElBQUksTUFBTSxLQUFLLEVBQUUsWUFBWSxLQUFLLENBQUM7QUFDN0UsTUFBQUEsRUFBRSxLQUFLLEdBQUcsTUFBTSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxNQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssR0FBRyxNQUFNLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sTUFBTSxLQUFLLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSUEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNO0FBQzFRLFVBQUUsUUFBUSxDQUFDblEsTUFBTTtBQUNoQixZQUFFO0FBQUEsWUFDRCxRQUFRO0FBQUEsWUFDUixNQUFNO0FBQUEsWUFDTixlQUFlQTtBQUFBLFlBQ2YsVUFBVSxHQUFHLGVBQWVBLENBQUM7QUFBQSxVQUM5QixHQUFHLENBQUM7QUFBQSxRQUNMLENBQUM7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNGLE1BQU8sR0FBRSxRQUFRLFVBQVUsQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLGFBQWEsS0FBSyxFQUFFLEdBQUcsQ0FBQztBQUFBLEVBQ3JGLENBQUM7QUFDRCxTQUFPLEVBQUUsUUFBUSxJQUFJNlMsR0FBRyxDQUFDLEdBQUc7QUFBQSxJQUMzQixtQkFBbUI7QUFBQSxJQUNuQixZQUFZO0FBQUEsSUFDWixpQkFBaUIsQ0FBQyxHQUFHLENBQUM7QUFBQSxJQUN0QixXQUFXO0FBQUEsSUFDWCxTQUFTO0FBQUEsSUFDVCxlQUFlO0FBQUEsRUFDaEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUU7QUFBQSxJQUM1RCxRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixlQUFlO0FBQUEsSUFDZixVQUFVLEdBQUcsZUFBZSxDQUFDO0FBQUEsRUFDOUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO0FBQ1YsR0FDSUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU07QUFBQyxNQUFNO0FBQzFDLFFBQU0sSUFBSSxDQUFDL1MsTUFBTTtBQUNoQixVQUFNdkMsSUFBSSxNQUFNLEtBQUt1QyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDbEMsV0FBT3ZDLEVBQUUsS0FBSyxHQUFHLE1BQU0sS0FBS3VDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sTUFBTSxLQUFLLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sS0FBSyxJQUFJLElBQUl2QyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDcks7QUFDQSxNQUFJLElBQUk7QUFDUixRQUFNLElBQUksQ0FBQ3VDLE1BQU07QUFDaEIsVUFBTXZDLElBQUksR0FBRyxRQUFRLEdBQUcsSUFBSSxFQUFFdUMsRUFBRSxVQUFVLEdBQUcsSUFBSSxFQUFFQSxFQUFFLFlBQVk7QUFDakUsS0FBQyxFQUFFLFNBQVMsS0FBSyxFQUFFLFNBQVMsTUFBTSxJQUFJO0FBQUEsTUFDckMsTUFBTUEsRUFBRTtBQUFBLE1BQ1IsUUFBUUEsRUFBRTtBQUFBLE1BQ1YsZUFBZUEsRUFBRTtBQUFBLE1BQ2pCLG9CQUFvQkEsRUFBRTtBQUFBLE1BQ3RCLGFBQWFBLEVBQUU7QUFBQSxNQUNmLFVBQVVBLEVBQUU7QUFBQSxNQUNaLGlCQUFpQkEsRUFBRTtBQUFBLE1BQ25CLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxJQUNmLEdBQUd2QyxDQUFDO0FBQUEsRUFDTCxHQUFHLElBQUksQ0FBQ3VDLE1BQU07QUFDYixNQUFFO0FBQUEsTUFDRCxZQUFZLENBQUNBLEdBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQ3ZDLE1BQU0sQ0FBQyxDQUFDQSxDQUFDO0FBQUEsTUFDekMsY0FBYyxDQUFDdUMsR0FBRyxhQUFhLEVBQUUsT0FBTyxDQUFDdkMsTUFBTSxDQUFDLENBQUNBLENBQUM7QUFBQSxNQUNsRCxNQUFNO0FBQUEsTUFDTixRQUFRdUMsR0FBRztBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0YsR0FBRyxJQUFJLENBQUNBLE1BQU07QUFDYixNQUFFO0FBQUEsTUFDRCxZQUFZLENBQUNBLEdBQUcsYUFBYSxFQUFFLE9BQU8sQ0FBQ3ZDLE1BQU0sQ0FBQyxDQUFDQSxDQUFDO0FBQUEsTUFDaEQsY0FBYyxDQUFDdUMsR0FBRyxNQUFNLEVBQUUsT0FBTyxDQUFDdkMsTUFBTSxDQUFDLENBQUNBLENBQUM7QUFBQSxNQUMzQyxNQUFNO0FBQUEsTUFDTixRQUFRdUMsR0FBRztBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0YsR0FBRyxJQUFJLENBQUNBLE1BQU07QUFDYixNQUFFO0FBQUEsTUFDRCxZQUFZLENBQUNBLEdBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQ3ZDLE1BQU0sQ0FBQyxDQUFDQSxDQUFDO0FBQUEsTUFDekMsY0FBYyxDQUFDdUMsR0FBRyxpQkFBaUIsVUFBVSxhQUFhLEVBQUUsT0FBTyxDQUFDdkMsTUFBTSxDQUFDLENBQUNBLENBQUM7QUFBQSxNQUM3RSxNQUFNO0FBQUEsTUFDTixRQUFRdUMsR0FBRztBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0YsR0FBR21RLElBQUk7QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNWO0FBQ0EsTUFBSSxHQUFHLFdBQVcsUUFBUSxLQUFLLEdBQUcsV0FBVyxTQUFTLEVBQUcsUUFBTyxFQUFFLGlCQUFpQixlQUFlLEdBQUdBLENBQUMsR0FBRyxFQUFFLGlCQUFpQixjQUFjLEdBQUdBLENBQUMsR0FBRyxFQUFFLGlCQUFpQixlQUFlLEdBQUdBLENBQUMsR0FBRyxFQUFFLGlCQUFpQixhQUFhLEdBQUdBLENBQUMsR0FBRyxFQUFFLGlCQUFpQixpQkFBaUIsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsWUFBWSxNQUFNO0FBQy9SLE1BQUUsb0JBQW9CLGVBQWUsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLGNBQWMsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLGVBQWUsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLGFBQWEsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLGlCQUFpQixHQUFHQSxDQUFDO0FBQUEsRUFDek4sRUFBRTtBQUNGLE1BQUksR0FBRyxXQUFXLFFBQVEsRUFBRyxRQUFPLEVBQUUsaUJBQWlCLGVBQWUsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLGNBQWMsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsWUFBWSxNQUFNO0FBQ3hJLE1BQUUsb0JBQW9CLGVBQWUsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLGNBQWMsR0FBR0EsQ0FBQztBQUFBLEVBQ3JGLEVBQUU7QUFDRixNQUFJLEdBQUcsV0FBVyxTQUFTLEVBQUcsUUFBTyxFQUFFLGlCQUFpQixlQUFlLEdBQUdBLENBQUMsR0FBRyxFQUFFLGlCQUFpQixhQUFhLEdBQUdBLENBQUMsR0FBRyxFQUFFLGlCQUFpQixpQkFBaUIsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsWUFBWSxNQUFNO0FBQ25MLE1BQUUsb0JBQW9CLGVBQWUsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLGFBQWEsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLGlCQUFpQixHQUFHQSxDQUFDO0FBQUEsRUFDbEksRUFBRTtBQUNGLE1BQUksR0FBRyxXQUFXLFFBQVEsS0FBSyxHQUFHLFdBQVcsZUFBZSxLQUFLLEdBQUcsV0FBVyxnQkFBZ0IsRUFBRyxRQUFPLEVBQUUsaUJBQWlCLFdBQVcsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLFlBQVksR0FBR0EsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLFNBQVMsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsWUFBWSxNQUFNO0FBQzFPLE1BQUUsb0JBQW9CLFdBQVcsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLFlBQVksR0FBR0EsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLFNBQVMsR0FBR0EsQ0FBQztBQUFBLEVBQ3JILEVBQUU7QUFDRixRQUFNLElBQUksSUFBSSxpQkFBaUIsQ0FBQ25RLEdBQUd2QyxNQUFNO0FBQ3hDLGVBQVcsS0FBS3VDLEVBQUcsR0FBRSxRQUFRLGVBQWUsRUFBRSxDQUFDO0FBQUEsRUFDaEQsQ0FBQztBQUNELE1BQUksSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLFdBQVcsY0FBYyxRQUFRLEVBQUUsUUFBUSxJQUFJNlMsR0FBRyxDQUFDLEdBQUc7QUFBQSxJQUM3RSxXQUFXO0FBQUEsSUFDWCxTQUFTO0FBQUEsRUFDVixDQUFDO0FBQ0QsUUFBTSxJQUFJLE1BQU0sS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDMUMsU0FBTyxFQUFFLFNBQVMsS0FBSyxJQUFJO0FBQUEsSUFDMUIsWUFBWTtBQUFBLElBQ1osY0FBYyxDQUFDO0FBQUEsRUFDaEIsR0FBRyxDQUFDLEdBQUc7QUFDUixHQUNJbFMsS0FBSyxPQUNMcVMsS0FBSyxPQUFPLFdBQVcsTUFBTSxTQUFTLGNBQWMsT0FBTyxJQUFJO0FBQ25FQSxPQUFPLE9BQU8sV0FBVyxPQUFPLFNBQVMsY0FBYyxNQUFNLEdBQUcsY0FBY0EsRUFBRSxHQUFHQSxHQUFHLFFBQVEsUUFBUXJTO0FBQ3RHLElBQUlzUyxLQUFLLE9BQU8sZ0JBQWdCLE9BQU8sT0FBTyxlQUFlLEtBQ3pEQyxJQUFJLENBQUMsTUFBTUQsTUFBTSxhQUFhLGVBQzlCRSxJQUFJLENBQUMsTUFBTUYsTUFBTSxhQUFhLGNBQzlCRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxPQUFPO0FBQzVCLE1BQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJO0FBQ2hCLFFBQUksS0FBSyxNQUFNO0FBQ2QsUUFBRSxpQkFBaUIsQ0FBQyxNQUFNLE1BQU0sRUFBRSxlQUFlLENBQUM7QUFDbEQ7QUFBQSxJQUNEO0FBQ0EsTUFBRSxpQkFBaUIsQ0FBQyxNQUFNLEtBQUssRUFBRSxZQUFZLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDckQ7QUFDRCxHQUNJQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxPQUFPO0FBQzdCLE1BQUksQ0FBQyxLQUFLLENBQUMsRUFBRyxRQUFPO0FBQ3JCLFFBQU0sSUFBSXpmLEVBQWEsQ0FBQyxHQUFHLElBQUksRUFBRSxPQUFPLElBQUksRUFBRSxxQkFBcUIsRUFBRTtBQUNyRSxNQUFJLENBQUNxZixNQUFNLENBQUMsRUFBRyxRQUFPSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbkMsTUFBSSxJQUFJeGYsRUFBUyxDQUFDLEtBQUssRUFBRW9mLEVBQUUsQ0FBQyxLQUFLQyxFQUFFLENBQUMsS0FBSyxHQUFHLFFBQVE7QUFDcEQsTUFBSSxLQUFLLEtBQU0sUUFBTyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEtBQUtDLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHO0FBQzVELE1BQUlGLEVBQUUsQ0FBQyxHQUFHO0FBQ1QsVUFBTSxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQ2pCLFFBQUlDLEVBQUUsQ0FBQyxLQUFLQSxFQUFFLENBQUM7QUFDZCxVQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBTSxRQUFPO0FBQUEsZUFDM0MsTUFBTSxFQUFHLFFBQU87QUFDM0IsV0FBTyxFQUFFLElBQUksR0FBRyxDQUFDLEdBQUc7QUFBQSxFQUNyQjtBQUNBLE1BQUksT0FBTyxLQUFLLFNBQVUsS0FBSSxLQUFLLFVBQVUsQ0FBQyxFQUFFLFdBQVcsSUFBSSxHQUFHO0FBQ2pFLFVBQU0sSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHaEQsSUFBSSxFQUFFLElBQUksQ0FBQztBQUNwQyxXQUFPZ0QsRUFBRWhELENBQUMsS0FBS0EsRUFBRSxVQUFVLEVBQUUsU0FBU0EsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksR0FBRyxDQUFDLEdBQUc7QUFBQSxFQUN6RSxNQUFPLFFBQU9pRCxFQUFFLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7QUFDckMsTUFBSSxPQUFPLEtBQUssWUFBWSxDQUFDRixFQUFFLENBQUMsR0FBRztBQUNsQyxVQUFNLElBQUk1ZSxFQUFrQixDQUFDO0FBQzdCLFFBQUksT0FBTyxLQUFLLFlBQVksS0FBSyxVQUFVLENBQUMsRUFBRSxXQUFXLElBQUksR0FBRztBQUMvRCxZQUFNNmIsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUM7QUFDcEMsYUFBT2dELEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVWhELEVBQUUsU0FBUyxFQUFFLFNBQVNBLEVBQUUsUUFBUSxFQUFFLElBQUksR0FBR0EsQ0FBQyxHQUFHO0FBQUEsSUFDekUsTUFBTyxRQUFPaUQsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBQSxFQUM5QjtBQUNBLFNBQU9BLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRztBQUMvQixHQUNJRSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxPQUFPO0FBQzdCLE1BQUksQ0FBQyxLQUFLLENBQUMsRUFBRyxRQUFPO0FBQ3JCLFFBQU0sSUFBSTFmLEVBQWEsQ0FBQyxHQUFHLElBQUksRUFBRTtBQUNqQyxNQUFJLENBQUMsRUFBRyxRQUFPO0FBQ2YsTUFBSSxJQUFJRSxFQUFTLENBQUMsS0FBSyxFQUFFb2YsRUFBRSxDQUFDLEtBQUtDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUTtBQUNwRCxTQUFPLE9BQU8sS0FBSyxZQUFZLENBQUNELEVBQUUsQ0FBQyxNQUFNLElBQUk1ZSxFQUFrQixDQUFDLEtBQUssSUFBSSxLQUFLLFFBQVE4ZSxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNRixFQUFFLENBQUMsR0FBR0UsRUFBRSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHO0FBQzVJLEdBQ0lHLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLE9BQU9OLEtBQUtJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FDN0RFLEtBQXFCLG9CQUFJLFFBQVEsR0FDakNDLEtBQXFCLHVCQUFPLElBQUksdUJBQXVCLEdBQ3ZEQyxLQUFLLFdBQVdELEVBQUUsTUFBc0Isb0JBQUksSUFBSSxHQUNoREUsS0FBSyxDQUFDLEdBQUcsTUFBTTtBQUNsQixRQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxLQUFLLENBQUMsQ0FBQztBQUMvQixTQUFPLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2RixHQUNJQyxLQUFLLENBQUMsT0FBTztBQUFBLEVBQ2hCLFVBQVVELEdBQUdELElBQUksQ0FBQztBQUFBLEVBQ2xCLFVBQVVHLElBQUksTUFBTSxDQUFDO0FBQUEsRUFDckIsYUFBYUwsSUFBSSxNQUFNLENBQUM7QUFDekIsSUFDSU0sS0FBcUIsdUJBQU8sSUFBSSxzQkFBc0IsR0FDdERELEtBQUssV0FBV0MsRUFBRSxNQUFzQixvQkFBSSxRQUFRLEdBQ3BEQyxLQUFxQix1QkFBTyxJQUFJLHNCQUFzQixHQUN0REMsS0FBSSxXQUFXRCxFQUFFLE1BQXNCLG9CQUFJLFFBQVEsR0FDbkRFLEtBQXFCLHVCQUFPLElBQUksc0JBQXNCLEdBQ3REQyxLQUFLLFdBQVdELEVBQUUsTUFBc0Isb0JBQUksSUFBSSxHQUNoRDNhLEtBQXFCLHVCQUFPLElBQUksdUJBQXVCLEdBQ3ZENmEsS0FBSyxXQUFXN2EsRUFBRSxNQUFzQixvQkFBSSxRQUFRLEdBQ3BEOGEsS0FBSyxDQUFDLEdBQUcsTUFBTTtBQUNsQixTQUFPLEtBQUssYUFBYSxJQUFJRixJQUFJLE1BQU0sQ0FBQztBQUN4QyxRQUFNLElBQW9CLG9CQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsZUFBZSxZQUFZLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNQSxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUlMLElBQUksTUFBTSxDQUFDLEtBQXFCLG9CQUFJLFFBQVE7QUFDOU0sRUFBQUcsSUFBRyxNQUFNLENBQUMsS0FBS0EsSUFBRyxNQUFNLEdBQW1CLG9CQUFJLFFBQVEsQ0FBQyxHQUFHSCxJQUFJLE1BQU0sQ0FBQyxLQUFLQSxJQUFJLE1BQU0sR0FBRyxDQUFDO0FBQ3pGLFFBQU0sSUFBSSxJQUFJLFFBQVEsQ0FBQztBQUN2QixLQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLEdBQUcsR0FBR0QsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUNJLElBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQUcsR0FBR0osR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUlPLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsZUFBZSxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxJQUFJSCxJQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLEdBQUcsYUFBYSxHQUFHLEdBQUdKLEdBQUcsQ0FBQyxDQUFDO0FBQ3hVLEdBQ0lTLEtBQXFCLG9CQUFJLElBQUksR0FDN0JDLEtBQUssQ0FBQyxJQUFJLE9BQU8sV0FBVyxNQUFNLFdBQVcsU0FBUztBQUN6RCxNQUFJLEVBQUcsUUFBT0QsSUFBSSxNQUFNLENBQUMsTUFBTUEsSUFBSSxNQUFNLENBQUMsR0FBR3ZCLEdBQUcsR0FBRyxLQUFLLGNBQWMsQ0FBQyxNQUFNeUIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHeEIsR0FBRyxHQUFHLGdCQUFnQixDQUFDLE1BQU07QUFDeEgsZUFBVyxLQUFLLEVBQUUsV0FBWSxjQUFhLGVBQWV3QixHQUFHLENBQUM7QUFBQSxFQUMvRCxDQUFDLElBQUk7QUFDTixHQUNJQSxLQUFLLENBQUMsTUFBTTtBQUNmLFFBQU0sSUFBb0Isb0JBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxlQUFlLFlBQVksR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxRixHQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU1MLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTUUsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN2RixHQUNJSSxLQUFLLENBQUMsR0FBRyxNQUFNO0FBQ2xCLElBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSUosR0FBRyxHQUFHLENBQUMsSUFBSUcsR0FBRyxDQUFDLENBQUM7QUFDdEMsR0FDSUUsS0FBSyxDQUFDLE1BQU07QUFDZixhQUFXLEtBQUtKLEdBQUksQ0FBQUcsR0FBRyxHQUFHLG1CQUFtQixjQUFjLEdBQUcsQ0FBQztBQUNoRSxHQUNJRSxLQUFLLElBQUkscUJBQXFCLENBQUMsTUFBTTtBQUN4QyxFQUFBUixJQUFJLFNBQVMsQ0FBQztBQUNmLENBQUMsR0FDR1MsS0FBSyxDQUFDLEdBQUcsTUFBTTtBQUNsQixNQUFJLENBQUNSLElBQUksTUFBTSxDQUFDLEdBQUc7QUFDbEIsVUFBTSxJQUFJLEdBQUcsT0FBTztBQUNwQixVQUFNQSxJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUdELElBQUksTUFBTSxHQUFHLENBQUMsR0FBR1EsSUFBSSxXQUFXLEdBQUcsQ0FBQyxHQUFHRCxHQUFHLENBQUM7QUFBQSxFQUNuRTtBQUNEO0FBQ0FILEdBQUcsT0FBTyxXQUFXLE1BQU0sV0FBVyxJQUFJO0FBQzFDLElBQUlNLEtBQUssTUFBTTtBQUFBLEVBQ2QsWUFBWSxJQUFJLE1BQU07QUFDckIsU0FBS0QsR0FBRyxHQUFHLElBQUk7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsUUFBUSxHQUFHLEdBQUcsR0FBRztBQUNoQixXQUFPO0FBQUEsRUFDUjtBQUFBLEVBQ0EsV0FBVyxHQUFHLEdBQUcsR0FBRztBQUNuQixXQUFPO0FBQUEsRUFDUjtBQUFBLEVBQ0EsZ0JBQWdCLEdBQUc7QUFDbEIsV0FBT2pCLEdBQUcsSUFBSSxLQUFLLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQztBQUFBLEVBQ3hDO0FBQUEsRUFDQSxrQkFBa0IsR0FBRztBQUNwQixXQUFPRSxHQUFHLENBQUM7QUFBQSxFQUNaO0FBQUEsRUFDQSxJQUFJLFdBQVc7QUFDZCxXQUFPSSxJQUFHLE1BQU0sSUFBSTtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxJQUFJLFVBQVU7QUFDYixXQUFPTixJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7QUFBQSxFQUNqQztBQUFBLEVBQ0EsSUFBSSxPQUFPO0FBQ1YsV0FBT1MsSUFBSSxNQUFNLElBQUk7QUFBQSxFQUN0QjtBQUNELEdBQ0lVLEtBQXFCLHVCQUFPLElBQUksa0NBQWtDLEdBQ2xFQyxLQUFLLFdBQVdELEVBQUUsTUFBc0Isb0JBQUksSUFBSTtBQUNwRDtBQUFBLEVBQ0M7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFD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RUFBRyxTQUFTO0FBQUEsUUFDMUMsUUFBUTtBQUFBLFFBQUM7QUFDVCxRQUFBdUMsRUFBSyxjQUFjLElBQUksWUFBWTRmLEdBQXVCLEtBQUs7QUFBQSxVQUM5RCxTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsWUFDUCxNQUFBNWY7QUFBQSxZQUNBLE9BQU9BLEVBQUs7QUFBQSxZQUNaLFFBQVFBLEVBQUs7QUFBQSxVQUNkO0FBQUEsUUFDRCxDQUFDLENBQUM7QUFBQTtBQUFBLElBQ0g7QUFDQSxXQUFBK2YsRUFBZS9mLEdBQU0sc0JBQXNCNlUsRUFBRXVNLEdBQVEsZUFBZVAsQ0FBTSxDQUFDLEdBQzNFZCxFQUFlL2YsR0FBTSxzQkFBc0I2VSxFQUFFdU0sR0FBUSxlQUFlTixDQUFNLENBQUMsR0FDM0VmLEVBQWUvZixHQUFNLHNCQUFzQjZVLEVBQUV1TSxHQUFRLGFBQWFKLENBQUksQ0FBQyxHQUN2RWpCLEVBQWUvZixHQUFNLHNCQUFzQjZVLEVBQUV1TSxHQUFRLGlCQUFpQkosQ0FBSSxDQUFDLEdBQ3BFO0FBQUEsRUFDUjtBQUFBLEVBQ0EsV0FBV1AsR0FBSztBQUNmLFVBQU16Z0IsSUFBT3lnQixHQUFLLFFBQVE7QUFDMUIsV0FBSXpnQixLQUFNaWdCLEdBQWFqZ0IsR0FBTSxvQkFBb0IsR0FDMUM7QUFBQSxFQUNSO0FBQ0Q7QUFDQSxJQUFJd2dCLEdBQW9CO0FBQ3hCLElBQUlVLEdBQWtCO0FBQ3RCLElBQUlZLEdBQW9COyIsCiAgIm5hbWVzIjogWyIkYXZvaWRUcmlnZ2VyIiwgImNhbWVsVG9LZWJhYiIsICJjdnRfY3NfdG9fb3MiLCAiaGFzVmFsdWUiLCAiaXNBcnJheU9ySXRlcmFibGUiLCAiaXNWYWwiLCAiaXNWYWx1ZVVuaXQiLCAia2ViYWJUb0NhbWVsIiwgIm5vcm1hbGl6ZUdyaWRMYXlvdXQiLCAibm9ybWFsaXplUHJpbWl0aXZlIiwgInJlc29sdmVMb2NhbFBvaW50VG9HcmlkQ2VsbCIsICJ0cnlTdHJpbmdBc051bWJlciIsICJfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sIiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMiLCAib3B0aW9ucyIsICJuYW1lIiwgImUiLCAiX19leHBvcnRQcm9wZXJ0aWVzIiwgImlzTW9iaWxlIiwgImNoZWNrIiwgImEiLCAiZGV0ZWN0TW9iaWxlIiwgImNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrIiwgInJ1bldoZW5JZGxlJDEiLCAiY2IiLCAidGltZW91dCIsICJnZXRPZmZzZXRQYXJlbnQiLCAiZWxlbWVudCIsICJnZXRPZmZzZXRQYXJlbnRDaGFpbiIsICJwYXJlbnRzIiwgImN1cnJlbnQiLCAicGFyZW50IiwgImlzTmVhcmx5SWRlbnRpdHkiLCAibWF0cml4IiwgImVwc2lsb24iLCAibWFrZVJBRkN5Y2xlIiwgImNvbnRyb2wiLCAickFGIiwgInJlcyIsICJSQUZCZWhhdmlvciIsICJzaGVkIiwgIlJPT1QiLCAic2V0QXR0cmlidXRlc0lmTnVsbCIsICJhdHRycyIsICJ2YWx1ZSIsICJvbGQiLCAic2V0QXR0cmlidXRlcyIsICJ0aHJvdHRsZU1hcCIsICJzZXRJZGxlSW50ZXJ2YWwiLCAiYXJncyIsICJzdGF0dXMiLCAiciIsICJib3JkZXJCb3hXaWR0aCIsICJib3JkZXJCb3hIZWlnaHQiLCAiY29udGVudEJveFdpZHRoIiwgImNvbnRlbnRCb3hIZWlnaHQiLCAib25Cb3JkZXJPYnNlcnZlIiwgIm9uQ29udGVudE9ic2VydmUiLCAiZG9Db250ZW50T2JzZXJ2ZSIsICJvYnNlcnZlciIsICJlbnRyaWVzIiwgImVudHJ5IiwgImNvbnRlbnRCb3hTaXplIiwgImRvQm9yZGVyT2JzZXJ2ZSIsICJib3JkZXJCb3hTaXplIiwgInVybCIsICJ0eXBlIiwgInNvdXJjZSIsICJodG1sIiwgInBhcnNlZCIsICJzZXRDaGVja2VkIiwgImlucHV0IiwgImV2IiwgImlzVmFsaWRQYXJlbnQiLCAiaW5kZXhPZiIsICJub2RlIiwgIk1BVENIIiwgIlJFR0VYIiwgImNyZWF0ZUVsZW1lbnRWYW5pbGxhIiwgInNlbGVjdG9yIiwgImNyZWF0ZSIsICJtYXRjaCIsICJjbGFzc05hbWUiLCAiaXNFbGVtZW50IiwgImVsIiwgImluY2x1ZGVTZWxmIiwgInRhcmdldCIsICJoYXNQYXJlbnQiLCAicGFzc2l2ZU9wdHMiLCAiYWRkRXZlbnQiLCAib3B0cyIsICJ3ciIsICJyZW1vdmVFdmVudCIsICJhZGRFdmVudHMiLCAicm9vdCIsICJoYW5kbGVycyIsICJhZGRFdmVudHNMaXN0IiwgImV2ZW50cyIsICJsaXN0IiwgImNicyIsICJyZW1vdmVFdmVudHMiLCAiZ2V0RXZlbnRUYXJnZXQiLCAicGF0aCIsICJjb250YWluc09yU2VsZiIsICJiIiwgImFFbCIsICJiRWwiLCAiYUluZGV4IiwgImJJbmRleCIsICJNT0NFbGVtZW50IiwgInNlbGYiLCAiaG9zdCIsICJob3N0TWF0Y2hlZCIsICJjbG9zZXN0IiwgIk1PQyIsICJpc0luRm9jdXMiLCAic2VsZWN0b3JPckVsZW1lbnQiLCAiZGlyIiwgImFjdGl2ZSIsICJpc0ZvY3VzZWQiLCAiaXNIb3ZlcmVkIiwgImFsdENuZCIsICJnZXRab29tIiwgInpvb21WYWx1ZXNTeW1ib2wiLCAiem9vbVZhbHVlcyIsICJ6b29tT2YiLCAiY29udGFpbmVyIiwgImNoYW5nZVpvb20iLCAic2NhbGUiLCAiZml4ZWRDbGllbnRab29tIiwgInVuZml4ZWRDbGllbnRab29tIiwgIm9yaWVudE9mIiwgInJhdyIsICJuIiwgImdldEJvdW5kaW5nT3JpZW50UmVjdCIsICJvcmllbnQiLCAiem9vbSIsICJib3giLCAibmJ4IiwgIm9yX2kiLCAidnYiLCAic2l6ZSIsICJsZWZ0XyIsICJ0b3BfIiwgInJpZ2h0XyIsICJib3R0b21fIiwgImxlZnQiLCAicmlnaHQiLCAidG9wIiwgImJvdHRvbSIsICJ3aWR0aCIsICJoZWlnaHQiLCAiYmJ3IiwgImJiaCIsICJjYnciLCAiY2JoIiwgInJ1bldoZW5JZGxlIiwgImdldEF2YWlsU2l6ZSIsICJsIiwgInZ2QmxvY2siLCAiYXciLCAiYWgiLCAiYXZhaWxTaXplIiwgImNsYXNzZXMiLCAib3JpZW50YXRpb25OdW1iZXJNYXAiLCAidXBkYXRlVlAiLCAicnVsZSIsICJwcm9wTmFtZSIsICJwcm9wVmFsdWUiLCAiZXhpc3RzIiwgImdldENvcnJlY3RPcmllbnRhdGlvbiIsICJvcmllbnRhdGlvblR5cGUiLCAicGFzc2l2ZU9wdHMkMSIsICJ3aGVuQW55U2NyZWVuQ2hhbmdlcyIsICJ0aWNraW5nIiwgInVwZGF0ZSIsICJ1bnN1YnNjcmliZXJzIiwgInVuc3ViIiwgImZpeE9yaWVudFRvU2NyZWVuIiwgIm5leHQiLCAiY3R4IiwgImluaXRUZXh0U3R5bGUiLCAic3R5bGUiLCAiZm9udFdlaWdodCIsICJmb250U2l6ZSIsICJmb250RmFtaWx5IiwgImZvbnRTdHJldGNoIiwgIm1lYXN1cmVUZXh0IiwgInRleHQiLCAibWVhc3VyZUlucHV0SW5Gb2N1cyIsICJjb21wdXRlQ2FyZXRQb3NpdGlvbiIsICJwb2ludCIsICJjdXJyZW50V2lkdGgiLCAiY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50IiwgImNsaWVudCIsICJyZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCIsICJsYXlvdXRPdmVycmlkZSIsICJjIiwgImJhc2UiLCAicmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50IiwgImdyaWRTeXN0ZW0iLCAiY2xpZW50UG9pbnQiLCAibW9kZSIsICJyZWN0IiwgImxheW91dCIsICJjcyIsICJwbCIsICJwdCIsICJwciIsICJwYiIsICJjb250ZW50VyIsICJjb250ZW50SCIsICJjc0Nvb3JkIiwgImFuaW1hdGVTaG93IiwgImFuaW1hdGlvbkRvbmUiLCAiYW5pbWF0ZSIsICJkb25lIiwgImVuZEFuaW1hdGlvbiIsICJldmVudCIsICJyZXNvbHZlIiwgInJlamVjdCIsICJwcm9taXNlIiwgInJlcSIsICJhbmltYXRlSGlkZSIsICJvbkJvcmRlck9ic2VydmVTeW1ib2wiLCAib25Cb3JkZXJPYnNlcnZlJDEiLCAib25Db250ZW50T2JzZXJ2ZVN5bWJvbCIsICJvbkNvbnRlbnRPYnNlcnZlJDEiLCAidW53cmFwRnJvbVF1ZXJ5IiwgIm9ic2VydmVDb250ZW50Qm94IiwgImNhbGxiYWNrcyIsICJvYnNlcnZlQm9yZGVyQm94IiwgIm9ic2VydmVBdHRyaWJ1dGUiLCAiYXR0cmlidXRlIiwgIm9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yIiwgImF0dHJpYnV0ZUxpc3QiLCAibXV0YXRpb25MaXN0IiwgIm11dGF0aW9uIiwgInMiLCAiYWRkZWROb2RlcyIsICJyZW1vdmVkTm9kZXMiLCAib2JzZXJ2ZUJ5U2VsZWN0b3IiLCAibXV0IiwgIm9icyIsICJ1bndyYXBOb2Rlc0J5U2VsZWN0b3IiLCAibm9kZXMiLCAiJG5vZGVzIiwgIm9iUmVmIiwgImhhbmRsZU11dGF0aW9uIiwgImhhbmRsZUNvbWUiLCAiaGFuZGxlT3V0Q29tZSIsICJoYW5kbGVGb2N1c0NsaWNrIiwgImZhY3RvcnMiLCAic2VsZWN0ZWQiLCAiaW5pdFZpc2liaWxpdHkiLCAiV2F2eVNoYXBlZENpcmNsZSIsICJzdGVwcyIsICJhbXBsaXR1ZGUiLCAiZnJlcSIsICJwb2ludHMiLCAiaSIsICJhbmdsZSIsICJzdGVwIiwgInZhcmlhbnQiLCAiZnVuYyIsICJzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0IiwgImNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudCIsICJjc3MiLCAiT1dORVIiLCAic3R5bGVFbGVtZW50IiwgInNldFN0eWxlVVJMIiwgImxheWVyIiwgInNldFN0eWxlUnVsZXMiLCAic2V0U3R5bGVSdWxlIiwgImdldFN0eWxlTGF5ZXIiLCAibGF5ZXJOYW1lIiwgInNoZWV0IiwgImxheWVyUnVsZUluZGV4IiwgImxheWVyUnVsZSIsICJzdHlsZUlkQ291bnRlciIsICJpc1NoYWRvd1Jvb3QiLCAiaXNEb2N1bWVudCIsICJpc0VsZW1lbnQkMSIsICJlc2NhcGVDU1NJZGVudGlmaWVyIiwgImNoYXIiLCAiY3JlYXRlU3R5bGVJZCIsICJqb2luU2NvcGVkU2VsZWN0b3IiLCAic2NvcGUiLCAiZmluZFN0eWxlUnVsZSIsICJmdWxsU2VsZWN0b3IiLCAicnVsZXMiLCAiZXhwZWN0ZWQiLCAicmVxdWVzdGVkIiwgImFjdHVhbCIsICJnZXRTdHlsZVJ1bGUiLCAiYmFzaXMiLCAiYmFzaXNFbGVtZW50IiwgInN0eWxlSWQiLCAic3R5bGVFbGVtZW50R2xvYmFsIiwgInJ1bGVJZCIsICJoYXNUeXBlZE9NIiwgImlzU3R5bGVWYWx1ZSIsICJ2YWwiLCAiaXNVbml0VmFsdWUiLCAic2V0UHJvcGVydHlJZk5vdEVxdWFsIiwgInN0eWxlUmVmIiwgImtlYmFiIiwgImltcG9ydGFuY2UiLCAic2V0U3R5bGVQcm9wZXJ0eVR5cGVkIiwgInN0eWxlTWFwUmVmIiwgInNldFN0eWxlUHJvcGVydHlGYWxsYmFjayIsICJuZXdWYWwiLCAibWF5YmVOdW0iLCAicHJvbWlzZU9yRGlyZWN0IiwgImJsb2JVUkxNYXAiLCAiY2FjaGVNYXAiLCAiZmV0Y2hBbmRDYWNoZSIsICJidXJsIiwgInByb21pc2VkIiwgImJsb2IiLCAiY2FjaGVDb250ZW50TWFwIiwgImNhY2hlQmxvYkNvbnRlbnRNYXAiLCAiZmV0Y2hBc0lubGluZSIsICJhZG9wdGVkU2VsZWN0b3JNYXAiLCAiYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwIiwgImFkb3B0ZWRMYXllck1hcCIsICJhZG9wdGVkU2hhZG93TGF5ZXJNYXAiLCAiZ2V0QWRvcHRlZFN0eWxlUnVsZSIsICJ0YXJnZXRBZG9wdGVkU2hlZXRzIiwgInNlbGVjdG9yS2V5IiwgInNoYWRvd01hcCIsICJzaGFkb3dMYXllck1hcCIsICJsYXllckluZGV4IiwgIm5ld1J1bGUiLCAicnVsZUluZGV4IiwgInNldFN0eWxlUHJvcGVydHkiLCAic2V0U3R5bGVJblJ1bGUiLCAiaGFzaCIsICJzdHJpbmciLCAiaGFzaEJ1ZmZlciIsICJsb2FkU3R5bGVTaGVldCIsICJpbmxpbmUiLCAiaW50ZWdyaXR5IiwgImxvYWQiLCAiZXJyb3IiLCAibG9hZEJsb2JTdHlsZSIsICJsb2FkSW5saW5lU3R5bGUiLCAicm9vdEVsZW1lbnQiLCAiUExBQ0UiLCAic2V0UHJvcGVydHkiLCAicHJlbG9hZFN0eWxlIiwgInN0eWxlcyIsICJsb2FkQXNBZG9wdGVkIiwgImFkb3B0ZWRNYXAiLCAiYWRvcHRlZEJsb2JNYXAiLCAiYXBwbHlBZG9wdGVkU3R5bGVUZXh0IiwgImNzc1RleHQiLCAibWVzc2FnZSIsICJjYWNoZWQiLCAibGF5ZXJXcmFwcGVkIiwgInJlbW92ZUFkb3B0ZWQiLCAic2hlZXRzIiwgImlkeCIsICJwYXJzZU9yaWdpbiIsICJvcmlnaW4iLCAidmFsdWVzIiwgInBhcnNlTGVuZ3RoIiwgImdldFRyYW5zZm9ybSIsICJnZXRUcmFuc2Zvcm1PcmlnaW4iLCAiY3NzT3JpZ2luIiwgImdldFByb3BlcnR5VmFsdWUiLCAic3JjIiwgImdldEVsZW1lbnRab29tIiwgImN1cnJlbnRFbGVtZW50IiwgImN1cnJlbnRDU1Nab29tIiwgImdldFB4VmFsdWUiLCAiZ2V0UGFkZGluZyIsICJheGlzIiwgImJvdW5kQmVoYXZpb3JzIiwgImJpbmRCZWhhdmlvciIsICJiZWhTZXQiLCAiYmVoYXZpb3IiLCAicmVmbGVjdEJlaGF2aW9ycyIsICJiZWhhdmlvcnMiLCAibmFtZWRTdG9yZU1hcHNTeW1ib2wiLCAibmFtZWRTdG9yZU1hcHMiLCAiZ2V0U3RvcmVzT2ZFbGVtZW50IiwgIm1hcCIsICJFIiwgIm0iLCAiaXNXZWFrQ29tcGF0aWJsZSIsICJiaW5kU3RvcmUiLCAib2JqIiwgIndlYWtNYXAiLCAicmVmbGVjdFN0b3JlcyIsICJzdG9yZXMiLCAicmVmbGVjdE1peGlucyIsICJtaXhpbnMiLCAibWl4aW5TZXQiLCAiYm91bmRNaXhpblNldCIsICJiaW5kTWl4aW5zIiwgImdldEVsZW1lbnRSZWxhdGVkIiwgIm1peGluIiwgIm1peFNldCIsICJ3ZWwiLCAibWl4aW5FbGVtZW50cyIsICJib3VuZE1peGluU2V0U3ltYm9sIiwgIm1peGluRWxlbWVudHNTeW1ib2wiLCAibWl4aW5SZWdpc3RyeVN5bWJvbCIsICJtaXhpblJlZ2lzdHJ5IiwgIm1peGluTmFtZXNwYWNlU3ltYm9sIiwgIm1peGluTmFtZXNwYWNlIiwgInVwZGF0ZU1peGluQXR0cmlidXRlcyIsICJuYW1lcyIsICJyb290cyIsICJhZGRSb290IiwgInVwZGF0ZUFsbE1peGlucyIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwiLCAiZWxlbWVudHMiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyIsICJuYW1lUmVnaXN0cnlGIiwgImtleSIsICJyZWdpc3Rlck1peGluIiwgIkRPTU1peGluIiwgIndFbGVtZW50IiwgIndTZWxmIiwgInJlbGF0ZWQiLCAiaGFuZGxlSGlkZGVuIiwgIl8iLCAidmlzaWJsZSIsICIkcmVmIiwgImlzVmlzaWJsZSIsICJoYW5kbGVQcm9wZXJ0eSIsICJwcm9wIiwgImhhbmRsZURhdGFzZXQiLCAiZGF0YXNldFJlZiIsICJkZWxldGVTdHlsZVByb3BlcnR5IiwgImhhbmRsZVN0eWxlQ2hhbmdlIiwgImhhbmRsZUF0dHJpYnV0ZSIsICJvbiIsICJtdCIsICJtaSIsICJkbiIsICJQdCIsICJ4IiwgImZuIiwgInBuIiwgIlR0IiwgIkdlIiwgIiQiLCAiQ24iLCAiRCIsICJBbiIsICJaIiwgInNlIiwgInN0IiwgInUiLCAiam4iLCAibHQiLCAiZWUiLCAiemUiLCAiRiIsICJQIiwgIkMiLCAiTm4iLCAiV3QiLCAia2UiLCAiRnQiLCAiQm4iLCAibmUiLCAiX24iLCAidGUiLCAiaiIsICJYbiIsICJZbiIsICJOIiwgIkpuIiwgInJlIiwgIkduIiwgIkVlIiwgIkl0IiwgIktlIiwgIktuIiwgIlFlIiwgIlFuIiwgImVyIiwgInRyIiwgIm5yIiwgIm1hIiwgImlyIiwgIkx0IiwgImFyIiwgIm9yIiwgInciLCAic3IiLCAibHIiLCAiY3IiLCAidXIiLCAiSHQiLCAiZHIiLCAiZnIiLCAiJGUiLCAiUGUiLCAiSSIsICJUIiwgIlciLCAiaHIiLCAicXQiLCAidWUiLCAibXIiLCAidnIiLCAiZXQiLCAiZ3IiLCAiaGUiLCAibWUiLCAieXIiLCAiYnIiLCAiSyIsICJ4ciIsICJpZSIsICJNZSIsICJCdCIsICJ0dCIsICJTciIsICJudCIsICJFciIsICJNciIsICJDciIsICJBciIsICJ1dCIsICJqciIsICJ6dCIsICJWciIsICJfdCIsICJEdCIsICJadCIsICJMciIsICJ6ciIsICJrciIsICJQciIsICJUciIsICJSciIsICJVdCIsICJOciIsICJXciIsICJPciIsICJGZSIsICJUZSIsICJIIiwgIlIiLCAiTyIsICIkciIsICJYdCIsICJBIiwgIkZyIiwgIklyIiwgInJ0IiwgIkhyIiwgInZlIiwgImdlIiwgInFyIiwgIkJyIiwgIlEiLCAiX3IiLCAiYWUiLCAiRHIiLCAiQ2UiLCAiWXQiLCAiaXQiLCAiWnIiLCAiYXQiLCAiVXIiLCAiWHIiLCAiWXIiLCAiSnIiLCAiSWUiLCAiZGUiLCAiSGUiLCAicWUiLCAiR3IiLCAiQWUiLCAiZHQiLCAiTCIsICJKdCIsICJLciIsICJRciIsICJTIiwgImVpIiwgIkJlIiwgImZlIiwgIl9lIiwgIkRlIiwgInRpIiwgImplIiwgImZ0IiwgInoiLCAiR3QiLCAibmkiLCAicmkiLCAiaWkiLCAiWmUiLCAicGUiLCAiVWUiLCAiWGUiLCAiYWkiLCAiVmUiLCAiayIsICJLdCIsICJvaSIsICJvIiwgImYiLCAiZCIsICJwIiwgImgiLCAic2kiLCAibGkiLCAianVuY3Rpb25Ub0JveCIsICJKVU5DVElPTl9TRUxFQ1RfRVZFTlRTIiwgIkpVTkNUSU9OX0RSQUdfRVZFTlRTIiwgIkpVTkNUSU9OX1JFU0laRV9FVkVOVFMiLCAibWl4aW5EaXNwb3NlcnNTeW1ib2wiLCAibWl4aW5EaXNwb3NlcnMiLCAicHVzaERpc3Bvc2FibGUiLCAibWl4aW5OYW1lIiwgInJ1bkRpc3Bvc2VycyIsICJwYXJzZVB4VmFyIiwgInF1ZXJ5SGFuZGxlIiwgImF0dHIiLCAiZmFsbGJhY2siLCAic2VsIiwgImZvdW5kIiwgIkp1bmN0aW9uU2VsZWN0TWl4aW4iLCAid0VsIiwgIm92ZXJsYXkiLCAibG9jYWxQb2ludCIsICJhcHBseU92ZXJsYXkiLCAib25Eb3duIiwgIm9uTW92ZSIsICJlbmQiLCAib25VcCIsICJvbkNhbmNlbCIsICJKdW5jdGlvbkRyYWdNaXhpbiIsICJwcmV2aW91c1RyYW5zZm9ybSIsICJoYW5kbGUiLCAiZHJhZ2dpbmciLCAic3RhcnRYIiwgInN0YXJ0WSIsICJiYXNlWCIsICJiYXNlWSIsICJkeCIsICJkeSIsICJueCIsICJueSIsICJKdW5jdGlvblJlc2l6ZU1peGluIiwgInJlc2l6aW5nIiwgInN4IiwgInN5IiwgInN3IiwgInNoIiwgIm1pblciLCAibWluSCIsICJudyIsICJuaCJdCn0K

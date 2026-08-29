import { $avoidTrigger as U, camelToKebab as ie, cvt_cs_to_os as Te, hasValue as A, isArrayOrIterable as dt, isVal as ft, isValueUnit as ht, kebabToCamel as De, normalizeGridLayout as pt, normalizePrimitive as Se, resolveLocalPointToGridCell as mt, tryStringAsNumber as Xe } from "@fest-lib/core";
var yt = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Le = globalThis[yt] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Le.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      Le.add(t);
    }
});
var On = () => {
}, vt = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, Nn = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, gt = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), Pe = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(gt()), 0), bt = (e) => e?.offsetParent ?? e?.host, Wn = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = bt(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && t.push(n);
  }
  return t;
}, Fn = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, St = () => {
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
}, Hn = (e = St()) => (t) => e.shedule(t), $n = typeof document < "u" ? document?.documentElement : null, Bn = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, r]) => {
      const i = e.getAttribute(n);
      r == null ? e.removeAttribute(n) : r != i && e.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, In = (e, t = {}) => Array.from(Object.entries(t)).map(([n, r]) => {
  r == null ? e.removeAttribute(n) : e.setAttribute(n, r ?? e.getAttribute(n));
}), wt = /* @__PURE__ */ new Map(), Un = (e, t = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return Pe(async () => {
    if (!(!e || typeof e != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((i) => setTimeout(i, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => Pe(i, t)), new Promise((i) => setTimeout(i, t))]);
      r.cancel = () => {
      };
    }
  }, t), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    wt.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var K = /* @__PURE__ */ Symbol("@border-box-width"), G = /* @__PURE__ */ Symbol("@border-box-height"), J = /* @__PURE__ */ Symbol("@content-box-width"), Q = /* @__PURE__ */ Symbol("@content-box-height"), ze = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), _n = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Re.has(e)) {
    e[J] = e.clientWidth, e[Q] = e.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const o = i.contentBoxSize[0];
        o && (e[J] = Math.min(o.inlineSize, e.clientWidth), e[Q] = Math.min(o.blockSize, e.clientHeight), t?.(e));
      }
    });
    Re.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, qn = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !ze.has(e)) {
    e[K] = e.offsetWidth, e[G] = e.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const o = i.borderBoxSize[0];
        o && (e[K] = Math.min(o.inlineSize, e.offsetWidth), e[G] = Math.min(o.blockSize, e.offsetHeight), t?.(e));
      }
    });
    ze.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, Zn = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), Dn = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, Xn = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, Yn = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, Kn = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, Gn = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", Jn = `^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, Qn = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), r, i = ""; e && (r = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, er = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, tr = (e, t) => {
  const n = typeof t == "string" ? t.trim() : "";
  if (!n || !e) return e ?? null;
  try {
    return e.querySelector(n) ?? (e.matches(n) ? e : null);
  } catch {
    return null;
  }
}, ae = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, Ye = {};
function m(e, t, n, r = Ye) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function Ve(e, t, n, r = Ye) {
  e?.removeEventListener?.(t, n, r);
}
var ee = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? m(e, n, ...r) : m(e, n, r))), nr = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([r, i]) => ((dt(i) ? [...i] : i) ?? [])?.map?.((o) => m(e, r, o)));
  }
}, rr = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? Ve(e, n, ...r) : Ve(e, n, r))), ir = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, or = (e, t, n) => {
  if (t == null || !(t instanceof Node) && t?.element == null) return !1;
  if (e == t || (e?.element ?? e) == (t?.element ?? t)) return !0;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const r = n.composedPath(), i = e?.element ?? e, o = t?.element ?? t;
    if (r.includes(i) && r.includes(o)) {
      const a = r.indexOf(i), s = r.indexOf(o);
      if (s >= 0 && a >= 0 && s < a) return !0;
    }
  }
  return !!(e?.contains?.(t?.element ?? t) || e?.getRootNode({ composed: !0 })?.host == (t?.element ?? t));
}, he = (e, t, n) => {
  const r = typeof t == "string" ? t.trim() : "";
  if (!r) return e ?? null;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const s = n.composedPath();
    for (const u of s) if (u instanceof HTMLElement || u instanceof Element) try {
      if (u.matches?.(r)) return u;
    } catch {
    }
  }
  let i = null, o = null, a = null;
  try {
    i = e?.matches?.(r) ? e : null;
    const s = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host;
    o = s?.matches?.(r) ? s : null, a = e?.closest?.(r) ?? i?.closest?.(r) ?? o?.closest?.(r) ?? null;
  } catch {
  }
  return i ?? a ?? o;
}, ar = (e, t) => !!he(e, t), sr = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === e || ae(r, e), o = e.matches(":hover");
  if (!i && !o && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!he(e, t);
      {
        const a = i ? r : e.querySelector(":hover") || e, s = !!he(a, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || s;
      }
    } else if (t instanceof HTMLElement)
      return n === "parent" ? ae(e, t) || !1 : ae(t, e) || !1;
  }
  return !0;
}, cr = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, xt = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Mt = globalThis[xt] ??= /* @__PURE__ */ new WeakMap(), Et = (e = document.documentElement) => Mt.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), ur = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), lr = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : Et(e)) || 1, pe = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, P = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, dr = (e, t = null) => {
  const n = pe(e) || 1, r = e?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, o = t ?? (P(e) || 0), a = typeof window < "u" ? window.visualViewport : null, s = [((a?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((a?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [u, l] = Te([i.left, i.top], s, o), [c, p] = Te([i.right, i.bottom], s, o), [h, f] = o == 0 || o == 3 ? [u, c] : [c, u], [d, y] = o == 0 || o == 1 ? [l, p] : [p, l], [M, lt] = o % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: h,
    top: d,
    right: f,
    bottom: y,
    width: M,
    height: lt
  };
}, fr = (e, t = null) => (t ?? P(e)) % 2 ? e[G] ?? e?.clientHeight : e[K] ?? e?.clientWidth, hr = (e, t = null) => (t ?? P(e)) % 2 ? e[K] ?? e?.clientWidth : e[G] ?? e?.clientHeight, pr = (e, t = null) => (t ?? P(e)) % 2 ? e[Q] ?? e?.clientHeight : e[J] ?? e?.clientWidth, mr = (e, t = null) => (t ?? P(e)) % 2 ? e[J] ?? e?.clientWidth : e[Q] ?? e?.clientHeight, Ct = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), se = 80, Ke = () => {
  try {
    return globalThis.navigator?.virtualKeyboard ?? null;
  } catch {
    return null;
  }
}, me = () => {
  const e = Ke();
  if (e)
    try {
      e.overlaysContent !== !0 && (e.overlaysContent = !0);
    } catch {
    }
}, we = (e) => {
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
}, je = "", C = 0, b = 0, Oe = (e, t, n = 0, r = 0) => {
  const i = Math.max(0, Number(e) || 0), o = Math.max(0, Number(t) || 0), a = Number(n) || 0, s = Number(r) || 0;
  return {
    left: a,
    top: s,
    right: a + i,
    bottom: s + o,
    width: i,
    height: o
  };
}, yr = () => {
  if (typeof window > "u") return Oe(0, 0);
  const e = typeof document < "u" ? document.documentElement : null;
  return Oe(Number(e?.clientWidth) || Number(window.innerWidth) || 0, Number(e?.clientHeight) || Number(window.innerHeight) || 0);
}, Ge = () => {
  if (typeof window > "u") return {
    width: 0,
    height: 0,
    keyboard: 0
  };
  const e = window.visualViewport, t = Number(window.innerWidth) || 0, n = Number(window.innerHeight) || 0, r = Number(e?.width) || 0, i = Number(e?.height) || 0, o = Number(e?.offsetTop) || 0, a = Number(Ke()?.boundingBox?.height) || 0, s = n > 0 && i > 0 ? n - i - o : 0, u = a >= se ? a : s >= se ? s : 0, l = Math.max(t, r), c = Math.max(n, i + o, u > 0 ? i + u : 0), p = typeof matchMedia < "u" && matchMedia("(orientation: landscape)")?.matches ? "l" : "p";
  p !== je && (je = p, C = 0, b = 0);
  const h = b > 0 && b - c >= se;
  return u > 0 || we(document.activeElement) || h ? (C = Math.max(l, C), b = Math.max(c, b)) : (C = l, b = c), {
    width: C || l,
    height: b || c,
    keyboard: u
  };
}, Ne = () => {
  typeof window > "u" || Ge().keyboard <= 0 && !we(document.activeElement) || (window.scrollY || document.documentElement.scrollTop || document.body?.scrollTop) && window.scrollTo(0, 0);
}, Je = () => {
  me();
  const e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, n = Ge(), r = {
    "--vv-width": `${t?.width ?? (typeof window < "u" ? window.innerWidth : 0)}px`,
    "--vv-height": `${t?.height ?? (typeof window < "u" ? window.innerHeight : 0)}px`,
    "--vv-offset-left": `${t?.offsetLeft ?? 0}px`,
    "--vv-offset-top": `${t?.offsetTop ?? 0}px`,
    "--vv-scale": String(t?.scale ?? 1),
    "--lv-width": `${n.width}px`,
    "--lv-height": `${n.height}px`,
    "--keyboard-overlay-height": `${n.keyboard}px`
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
}, ye = Je(), vr = [[":root, :host, :scope", ye]], At = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, kt = (e) => {
  const t = document.documentElement;
  Object.assign(ye, Je()), Object.entries(ye).forEach(([n, r]) => {
    const i = t?.style?.getPropertyValue(n);
    (!i || i != r) && t?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, Tt = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, q = { passive: !0 }, Lt = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      kt(), e(), t = !1;
    }), t = !0);
  }, r = [];
  return r.push(m(navigator?.virtualKeyboard, "geometrychange", n, q)), r.push(m(window?.visualViewport, "scroll", () => {
    Ne(), n();
  }, q)), r.push(m(window?.visualViewport, "resize", n, q)), r.push(m(screen?.orientation, "change", n)), r.push(m(window, "resize", n)), r.push(m(document?.documentElement, "fullscreenchange", n)), r.push(m(document, "DOMContentLoaded", n)), r.push(m(matchMedia("(orientation: portrait)"), "change", n)), r.push(m(matchMedia("(orientation: landscape)"), "change", n)), r.push(m(document, "focusin", () => {
    me(), we(document.activeElement) && (C = Math.max(C, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0), b = Math.max(b, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0)), Ne(), n();
  }, {
    capture: !0,
    passive: !0
  })), r.push(m(document, "focusout", n, q)), me(), n(), Ct(() => n(), 100), () => r.forEach((i) => i());
}, gr = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), Lt(() => {
      const t = At?.[Tt()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
}, L = new OffscreenCanvas(1, 1).getContext("2d"), Qe = (e, t) => {
  const n = getComputedStyle(e, "");
  if (t && n) {
    const r = n.getPropertyValue("font-weight") || "normal", i = n.getPropertyValue("font-size") || "16px", o = n.getPropertyValue("font-family") || "Times New Roman", a = n.getPropertyValue("font-stretch") || "normal";
    try {
      t.fontStretch = a.includes("%") ? "normal" : a;
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
}, Pt = (e, t) => {
  if (L) {
    Qe(t, L);
    try {
      return L.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, br = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return Pt(t, e);
}, zt = (e, t) => {
  const n = e?.value || "";
  if (L) {
    Qe(e, L);
    let r = 0;
    for (let i = 0; i < n.length; i++) {
      if (r = L.measureText(n.slice(0, i))?.width, r == null) return n.length;
      if (r != null && r >= t[0]) return Math.max(i - 1, 0);
    }
  }
  return n.length;
}, Sr = (e, t) => {
  const n = e.getBoundingClientRect(), r = [t[0] - n.left / pe(), t[1] - n.top / pe()];
  return zt(e, r);
}, Rt = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = pt(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, wr = (e, t, n, r = "floor") => {
  if (!e) return [0, 0];
  const i = e.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const o = Rt(e, n?.layout), a = P(e), s = globalThis.getComputedStyle?.(e), u = parseFloat(s?.paddingLeft) || 0, l = parseFloat(s?.paddingTop) || 0, c = parseFloat(s?.paddingRight) || 0, p = parseFloat(s?.paddingBottom) || 0, h = Math.max(1, (i.width || e.clientWidth || 1) - u - c), f = Math.max(1, (i.height || e.clientHeight || 1) - l - p), d = [(t?.[0] || 0) - i.left - u, (t?.[1] || 0) - i.top - l];
  return mt(d, [h, f], o, a, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, Vt = async (e) => {
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
        duration: vt() ? 100 : 80,
        easing: "linear",
        delay: 0
      });
      let r = !1;
      const i = () => {
        r || (r = !0, o?.forEach?.((a) => a?.()), n.currentTime = 1, n.finish(), t?.());
      }, o = ee(e, {
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
      const { resolve: n, reject: r, promise: i } = Promise.withResolvers(), o = requestAnimationFrame(n);
      let a = !1;
      const s = () => {
        a || (a = !0, u?.forEach?.((l) => l?.()), cancelAnimationFrame(o), n(performance.now()), t?.());
      }, u = ee(e, {
        "u2-before-hide": [s, {
          once: !0,
          passive: !0
        }],
        "u2-before-show": [s, {
          once: !0,
          passive: !0
        }]
      });
      await i, s?.();
    }
}, jt = async (e) => {
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
        r || (r = !0, o?.forEach?.((a) => a?.()), n.currentTime = 1, n.finish(), t?.());
      }, o = ee(e, { "u2-before-show": [i, {
        once: !0,
        passive: !0
      }] });
      await n.finished, i?.();
    } else {
      const { resolve: n, reject: r, promise: i } = Promise.withResolvers(), o = requestAnimationFrame(n);
      let a = !1;
      const s = () => {
        a || (a = !0, u?.forEach?.((l) => l?.()), cancelAnimationFrame(o), n(performance.now()), t?.());
      }, u = ee(e, {
        "u2-before-hide": [s, {
          once: !0,
          passive: !0
        }],
        "u2-before-show": [s, {
          once: !0,
          passive: !0
        }]
      });
      await i, s?.();
    }
}, Ot = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), z = globalThis[Ot] ??= /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), R = globalThis[Nt] ??= /* @__PURE__ */ new WeakMap(), _ = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), oe = (e, t = "*") => typeof e != "string" ? t : e.trim() || t, F = (e, t) => {
  if (!e || typeof e.querySelectorAll != "function") return [];
  const n = oe(t, "");
  if (!n) return [];
  try {
    return Array.from(e.querySelectorAll(n) || []);
  } catch {
    return [];
  }
}, ve = (e, t) => {
  if (!e || typeof e.matches != "function") return !1;
  const n = oe(t, "");
  if (!n) return !1;
  try {
    return !!e.matches(n);
  } catch {
    return !1;
  }
}, xr = (e, t) => {
  if (!R.has(e = _(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.contentBoxSize) {
        const a = o.contentBoxSize[0];
        a && n.forEach((s) => s?.(a, r));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, r), R.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "content-box" });
  }
  return R.get(e)?.push?.(t), { disconnect: () => R.get(e)?.splice?.(R.get(e)?.indexOf(t) || -1, 1) };
}, Mr = (e, t) => {
  if (!z.has(e = _(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.borderBoxSize) {
        const a = o.borderBoxSize[0];
        a && n.forEach((s) => s?.(a, r));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, r), z.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "border-box" });
  }
  return z.get(e)?.push?.(t), { disconnect: () => z.get(e)?.splice?.(z.get(e)?.indexOf(t) || -1, 1) };
}, Er = (e, t, n) => {
  if (typeof e?.selector == "string") return xe(e, e?.selector, t, n);
  const r = new Set((t.split(",") || [t]).map((o) => o.trim())), i = new MutationObserver((o, a) => {
    for (const s of o) s.attributeName && r.has(s.attributeName) && n(s, a);
  });
  return (e?.element ?? e) instanceof Node && i.observe(e = _(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((o) => n({
    target: e,
    type: "attributes",
    attributeName: o,
    oldValue: e?.getAttribute?.(o)
  }, i)), i;
}, xe = (e, t, n, r) => {
  const i = oe(t), o = new Set([...n.split(",") || [n]].map((s) => s.trim())), a = new MutationObserver((s, u) => {
    for (const l of s) if (l.type == "childList") {
      const c = Array.from(l.addedNodes) || [], p = Array.from(l.removedNodes) || [];
      c.push(...Array.from(l.addedNodes || []).flatMap((h) => F(h, i))), p.push(...Array.from(l.removedNodes || []).flatMap((h) => F(h, i))), [...new Set(c)].filter((h) => ve(h, i))?.map?.((h) => {
        o.forEach((f) => {
          r({
            target: h,
            type: "attributes",
            attributeName: f,
            oldValue: h?.getAttribute?.(f)
          }, u);
        });
      });
    } else ve(l.target, i) && l.attributeName && o.has(l.attributeName) && r(l, u);
  });
  return a.observe(e = _(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...o],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), F(e, i).map((s) => o.forEach((u) => r({
    target: s,
    type: "attributes",
    attributeName: u,
    oldValue: s?.getAttribute?.(u)
  }, a))), a;
}, Wt = (e, t = "*", n = (r, i) => {
}) => {
  const r = oe(t), i = (f) => {
    const d = Array.from(f || []) || [];
    return d.push(...Array.from(f || []).flatMap((y) => F(y, r))), [...Array.from(new Set(d).values())].filter((y) => ve(y, r));
  };
  let o = null;
  const a = (f) => {
    const d = o?.deref?.(), y = i(f.addedNodes), M = i(f.removedNodes);
    (y.length > 0 || M.length > 0) && n?.({
      type: f.type,
      target: f.target,
      attributeName: f.attributeName,
      attributeNamespace: f.attributeNamespace,
      nextSibling: f.nextSibling,
      oldValue: f.oldValue,
      previousSibling: f.previousSibling,
      addedNodes: y,
      removedNodes: M
    }, d);
  }, s = (f) => {
    a({
      addedNodes: [f?.target].filter((d) => !!d),
      removedNodes: [f?.relatedTarget].filter((d) => !!d),
      type: "childList",
      target: f?.currentTarget
    });
  }, u = (f) => {
    a({
      addedNodes: [f?.relatedTarget].filter((d) => !!d),
      removedNodes: [f?.target].filter((d) => !!d),
      type: "childList",
      target: f?.currentTarget
    });
  }, l = (f) => {
    a({
      addedNodes: [f?.target].filter((d) => !!d),
      removedNodes: [f?.relatedTarget || document?.activeElement].filter((d) => !!d),
      type: "childList",
      target: f?.currentTarget
    });
  }, c = {
    passive: !0,
    capture: !1
  };
  if (r?.includes?.(":hover") && r?.includes?.(":active"))
    return e.addEventListener("pointerover", s, c), e.addEventListener("pointerout", u, c), e.addEventListener("pointerdown", s, c), e.addEventListener("pointerup", u, c), e.addEventListener("pointercancel", u, c), { disconnect: () => {
      e.removeEventListener("pointerover", s, c), e.removeEventListener("pointerout", u, c), e.removeEventListener("pointerdown", s, c), e.removeEventListener("pointerup", u, c), e.removeEventListener("pointercancel", u, c);
    } };
  if (r?.includes?.(":hover"))
    return e.addEventListener("pointerover", s, c), e.addEventListener("pointerout", u, c), { disconnect: () => {
      e.removeEventListener("pointerover", s, c), e.removeEventListener("pointerout", u, c);
    } };
  if (r?.includes?.(":active"))
    return e.addEventListener("pointerdown", s, c), e.addEventListener("pointerup", u, c), e.addEventListener("pointercancel", u, c), { disconnect: () => {
      e.removeEventListener("pointerdown", s, c), e.removeEventListener("pointerup", u, c), e.removeEventListener("pointercancel", u, c);
    } };
  if (r?.includes?.(":focus") && r?.includes?.(":focus-within") && r?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", s, c), e.addEventListener("focusout", u, c), e.addEventListener("click", l, c), { disconnect: () => {
      e.removeEventListener("focusin", s, c), e.removeEventListener("focusout", u, c), e.removeEventListener("click", l, c);
    } };
  const p = new MutationObserver((f, d) => {
    for (const y of f) y.type == "childList" && a(y);
  });
  o = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = _(e), {
    childList: !0,
    subtree: !0
  });
  const h = F(e, r);
  return h.length > 0 && n?.({
    addedNodes: h,
    removedNodes: []
  }, p), p;
}, Cr = async (e = document.body) => {
  xe(e, "*", "data-hidden", (t, n) => {
    if (t.attributeName == "data-hidden") {
      const r = t.target;
      r.getAttribute("data-hidden") !== t.oldValue && Promise?.try?.(r.getAttribute("data-hidden") != null ? jt : Vt, r, n)?.catch?.(console.warn.bind(console));
    }
  });
}, Ar = (e = 100, t = 0.05, n = 8) => {
  const r = [];
  for (let s = 0; s < e; s++) r.push(s / e);
  const i = (s) => `calc(${s}rad * pi * 2)`, o = (s) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(s)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, a = (s) => [`calc(calc(0.5 + calc(cos(${i(s)}) * calc(0.5 - ${o(s)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(s)}) * calc(0.5 - ${o(s)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((s) => a(s).join(" ")).join(", ")})`
  };
}, Me = "DOM", H = typeof document < "u" ? document.createElement("style") : null;
H && (document.querySelector("head")?.appendChild?.(H), H.dataset.owner = Me);
var et = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", We = (e) => typeof e == "string" && /@import\b/i.test(e), Fe = (e) => typeof CSSLayerBlockRule < "u" && e instanceof CSSLayerBlockRule, tt = (e, t) => {
  if (!e || !t) return;
  const n = Array.from(e.cssRules || []), r = n.find((i) => Fe(i) && i.name === t);
  if (r) return r;
  try {
    const i = e.insertRule(`@layer ${t} {}`, n.length), o = e.cssRules?.[i];
    return Fe(o) ? o : void 0;
  } catch {
    return;
  }
}, He = (e, t, n = "") => {
  e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${n && typeof n == "string" ? `layer(${n})` : ""};` : t;
}, kr = (e) => e?.map?.((t) => sn(...t)), Ft = (e, t) => (t ||= H?.sheet, tt(t, e)), Ht = 0, ce = (e) => typeof ShadowRoot < "u" && e instanceof ShadowRoot, $e = (e) => typeof Document < "u" && e instanceof Document, $t = (e) => typeof Element < "u" && e instanceof Element, Be = (e) => typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : Array.from(e).map((t) => `\\${t.codePointAt(0).toString(16)} `).join(""), Bt = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `ux-${Date.now().toString(36)}-${(++Ht).toString(36)}`, It = (e, t) => (t = t.trim(), e ? t ? t.startsWith("::") ? `${e}${t}` : `${e} ${t}` : e : t), Ut = (e, t, n, r) => {
  const i = Array.from(e?.cssRules || []), o = t.trim(), a = r.trim();
  return i.findIndex((s) => {
    if (!(s instanceof CSSStyleRule)) return !1;
    const u = s.selectorText?.trim?.() ?? "";
    return u === o ? !0 : a && u.endsWith(a) ? u.slice(0, u.length - a.length).trim() === n : !1;
  });
}, Ee = (e, t, n = "ux-query", r = null) => {
  const i = ce(r) || $e(r) ? r : r?.getRootNode?.() ?? (typeof document < "u" ? document : null), o = $t(r) ? r : null;
  let a = "";
  if (o?.id) a = `#${Be(o.id)}`;
  else if (o) {
    let c = o.getAttribute("data-style-id");
    c || (c = Bt(), o.setAttribute("data-style-id", c)), a = `[data-style-id="${Be(c)}"]`;
  } else ce(i) ? a = ":host" : $e(i) && (a = ":root");
  let s = null;
  if (ce(i) ? (s = i.querySelector("style[data-ux-query]"), !s && typeof document < "u" && (s = document.createElement("style"), s.setAttribute("data-ux-query", ""), i.appendChild(s))) : s = _t(), t ||= s?.sheet, !t) return;
  if (n) return Ee(e, Ft(n, t), null, r);
  const u = It(a, e);
  let l = Ut(t, u, a, e);
  return l === -1 && (l = t.insertRule(`${u} {}`)), t.cssRules?.[l];
};
function _t() {
  return H ?? null;
}
var nt = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), qt = /* @__PURE__ */ Symbol.for("dom.ts@blobURLMap"), V = globalThis[qt] ??= /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ Symbol.for("dom.ts@cacheMap"), E = globalThis[Zt] ??= /* @__PURE__ */ new Map(), Dt = (e) => {
  if (!e) return null;
  if (E.has(e)) return E.get(e);
  if (e instanceof Blob || e instanceof File) {
    if (V.has(e)) return V.get(e);
    const t = URL.createObjectURL(e);
    return V.set(e, t), E.set(t, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const r = await n.blob(), i = URL.createObjectURL(r);
      return V.set(r, i), E.set(e, i), E.set(i, i), i;
    });
    return E.set(e, t), t;
  }
  if (typeof e == "string") {
    const t = new Blob([e], { type: "text/css" }), n = URL.createObjectURL(t);
    return V.set(t, n), E.set(n, n), n;
  }
  return e;
}, j = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new WeakMap(), Xt = (e) => {
  if (!e) return "";
  if (j.has(e)) return j.get(e) ?? "";
  if (e instanceof Blob || e instanceof File) {
    if (Z.has(e)) return Z.get(e) ?? "";
    const t = e?.text?.()?.then?.((n) => (Z.set(e, n), n));
    return Z.set(e, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const r = await n.text();
      return j.set(e, r), r;
    });
    return j.set(e, t), t;
  }
  return typeof e == "string" && j.set(e, e), e;
}, Yt = /* @__PURE__ */ Symbol.for("dom.ts@adoptedSelectorMap"), Ie = globalThis[Yt] ??= /* @__PURE__ */ new Map(), Kt = /* @__PURE__ */ Symbol.for("dom.ts@adoptedShadowSelectorMap"), Ue = globalThis[Kt] ??= /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ Symbol.for("dom.ts@adoptedLayerMap"), _e = globalThis[Gt] ??= /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ Symbol.for("dom.ts@adoptedShadowLayerMap"), D = globalThis[Jt] ??= /* @__PURE__ */ new WeakMap(), Tr = (e, t = "ux-query", n = null) => {
  if (!e || !et()) return null;
  const r = n instanceof ShadowRoot ? n : n?.getRootNode ? n.getRootNode({ composed: !0 }) : null, i = r instanceof ShadowRoot, o = i ? r.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
  if (!o) return null;
  const a = `${t || ""}:${e}`;
  let s;
  if (i) {
    let c = Ue.get(r);
    c || (c = /* @__PURE__ */ new Map(), Ue.set(r, c)), s = c.get(a), s || (s = new CSSStyleSheet(), c.set(a, s), o.includes(s) || o.push(s));
  } else
    s = Ie.get(a), s || (s = new CSSStyleSheet(), Ie.set(a, s), o.includes(s) || o.push(s));
  if (t) {
    let c;
    if (i) {
      let p = D.get(r);
      p || (p = /* @__PURE__ */ new Map(), D.set(r, p)), c = p.get(t);
    } else c = _e.get(t);
    if (!c && (c = tt(s, t), c))
      if (i) {
        let p = D.get(r);
        p || (p = /* @__PURE__ */ new Map(), D.set(r, p)), p.set(t, c);
      } else _e.set(t, c);
    if (c) {
      let p = Array.from(c.cssRules || []).findIndex((h) => h instanceof CSSStyleRule && h.selectorText?.trim?.() === e?.trim?.());
      if (p === -1) try {
        p = c.insertRule(`${e} {}`, c.cssRules.length);
      } catch {
        return null;
      }
      return c.cssRules[p];
    }
  }
  let u = Array.from(s.cssRules || []).findIndex((c) => c instanceof CSSStyleRule && c.selectorText?.trim?.() === e?.trim?.());
  if (u === -1) try {
    u = s.insertRule(`${e} {}`, s.cssRules.length);
  } catch {
    return null;
  }
  const l = s.cssRules[u];
  return l instanceof CSSStyleRule ? l : null;
}, te = (e) => {
  if (e == null || typeof e != "object") return !1;
  try {
    const t = globalThis.CSSStyleValue;
    if (typeof t == "function" && e instanceof t) return !0;
    for (let n = e; n; n = Object.getPrototypeOf(n)) if (n?.constructor?.name === "CSSStyleValue") return !0;
  } catch {
  }
  return !1;
}, rt = (e) => {
  if (e == null || typeof e != "object" || te(e)) return !1;
  try {
    return "value" in e;
  } catch {
    return !1;
  }
}, it = (e, t) => e?.[t] ?? globalThis?.[t], Qt = (e) => {
  switch (e.toLowerCase()) {
    case "%":
      return "percent";
    case "q":
      return "Q";
    case "hz":
      return "Hz";
    case "khz":
      return "kHz";
    case "fr":
      return "flex";
    default:
      return e.toLowerCase();
  }
}, en = (e) => e.toLowerCase() === "%" ? "percent" : e.toLowerCase(), tn = (e, t, n) => {
  const r = e?.CSS, i = Qt(t), o = r?.[i];
  if (typeof o == "function") return o.call(r, n);
  const a = it(e, "CSSUnitValue");
  if (typeof a != "function") throw new TypeError(`Typed OM does not support CSS unit "${t}"`);
  return new a(n, en(t));
}, nn = (e) => {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const r = e.slice(n), i = /^\s+/.exec(r);
    if (i) {
      n += i[0].length;
      continue;
    }
    const o = /^(?:\d*\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/.exec(r);
    if (o) {
      n += o[0].length;
      const u = /^(%|[a-zA-Z]+)/.exec(e.slice(n)), l = u?.[0] ?? null;
      u && (n += u[0].length), t.push({
        kind: "number",
        value: Number(o[0]),
        unit: l == null ? null : l.toLowerCase()
      });
      continue;
    }
    const a = /^[a-zA-Z_][a-zA-Z0-9_-]*/.exec(r);
    if (a) {
      t.push({
        kind: "identifier",
        value: a[0].toLowerCase()
      }), n += a[0].length;
      continue;
    }
    const s = r[0];
    if ([
      "+",
      "-",
      "*",
      "/",
      "(",
      ")",
      ","
    ].includes(s)) {
      t.push({
        kind: "symbol",
        value: s
      }), n++;
      continue;
    }
    throw new SyntaxError(`Unsupported token near "${r}"`);
  }
  return t;
}, rn = class {
  tokens;
  win;
  index = 0;
  constructor(e, t) {
    this.tokens = e, this.win = t;
  }
  parse() {
    const e = this.parseSum();
    if (this.index !== this.tokens.length) throw new SyntaxError("Unexpected trailing expression");
    return e;
  }
  current() {
    return this.tokens[this.index];
  }
  consume() {
    const e = this.tokens[this.index];
    if (!e) throw new SyntaxError("Unexpected end of expression");
    return this.index++, e;
  }
  consumeSymbol(e) {
    const t = this.consume();
    if (t.kind !== "symbol" || t.value !== e) throw new SyntaxError(`Expected "${e}"`);
  }
  matchesSymbol(e) {
    const t = this.current();
    return t?.kind === "symbol" && t.value === e;
  }
  createMath(e, ...t) {
    const n = it(this.win, e);
    if (typeof n != "function") throw new TypeError(`${e} is not supported`);
    return new n(...t);
  }
  parseSum() {
    let e = this.parseProduct();
    for (; this.matchesSymbol("+") || this.matchesSymbol("-"); ) {
      const t = this.consume(), n = this.parseProduct();
      if (t.kind !== "symbol") throw new SyntaxError("Expected sum operator");
      t.value === "+" ? e = this.createMath("CSSMathSum", e, n) : e = this.createMath("CSSMathSum", e, this.createMath("CSSMathNegate", n));
    }
    return e;
  }
  parseProduct() {
    let e = this.parseUnary();
    for (; this.matchesSymbol("*") || this.matchesSymbol("/"); ) {
      const t = this.consume(), n = this.parseUnary();
      if (t.kind !== "symbol") throw new SyntaxError("Expected product operator");
      t.value === "*" ? e = this.createMath("CSSMathProduct", e, n) : e = this.createMath("CSSMathProduct", e, this.createMath("CSSMathInvert", n));
    }
    return e;
  }
  parseUnary() {
    return this.matchesSymbol("+") ? (this.consume(), this.parseUnary()) : this.matchesSymbol("-") ? (this.consume(), this.createMath("CSSMathNegate", this.parseUnary())) : this.parsePrimary();
  }
  parsePrimary() {
    const e = this.consume();
    if (e.kind === "number") return tn(this.win, e.unit ?? "number", e.value);
    if (e.kind === "symbol" && e.value === "(") {
      const t = this.parseSum();
      return this.consumeSymbol(")"), t;
    }
    if (e.kind === "identifier") return this.parseFunction(e.value);
    throw new SyntaxError("Expected a numeric value");
  }
  parseFunction(e) {
    if (this.consumeSymbol("("), e === "calc") {
      const n = this.parseSum();
      return this.consumeSymbol(")"), n;
    }
    const t = [];
    if (!this.matchesSymbol(")"))
      for (t.push(this.parseSum()); this.matchesSymbol(","); )
        this.consume(), t.push(this.parseSum());
    if (this.consumeSymbol(")"), e === "min") {
      if (t.length === 0) throw new SyntaxError("min() requires a value");
      return this.createMath("CSSMathMin", ...t);
    }
    if (e === "max") {
      if (t.length === 0) throw new SyntaxError("max() requires a value");
      return this.createMath("CSSMathMax", ...t);
    }
    if (e === "clamp") {
      if (t.length !== 3) throw new SyntaxError("clamp() requires three values");
      return this.createMath("CSSMathClamp", t[0], t[1], t[2]);
    }
    throw new SyntaxError(`Unsupported function "${e}"`);
  }
}, on = (e, t) => {
  try {
    const n = nn(e);
    return new rn(n, t).parse();
  } catch {
    return null;
  }
}, Ce = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", X = (e) => Ce && e instanceof CSSUnitValue, S = (e, t, n, r = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, r);
  }
}, an = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = ie(t), o = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!Ce || !a) return ot(e, t, n, r);
  const s = e.ownerDocument?.defaultView ?? globalThis;
  let u = A(n) && rt(n) ? n.value : n;
  if (u == null)
    return a.delete?.(i), o && S(o, i, null, r), e;
  if (te(u)) {
    const l = a.get(i);
    if (X(u) && X(l)) {
      if (l.value === u.value && l.unit === u.unit) return e;
    } else if (l === u) return e;
    return a.set(i, u), e;
  }
  if (typeof u == "number")
    if (CSS?.number && !i.startsWith("--")) {
      const l = CSS.number(u), c = a.get(i);
      return X(c) && c.value === l.value && c.unit === l.unit || a.set(i, l), e;
    } else
      return S(o, i, String(u), r), e;
  if (typeof u == "string") {
    if (/\b(calc|min|max|clamp)\s*\(/.test(u)) {
      const c = on(u, s);
      if (c) try {
        return a.set(i, c), e;
      } catch {
      }
    }
    const l = Xe(u);
    if (typeof l == "number" && CSS?.number && !i.startsWith("--")) {
      const c = CSS.number(l), p = a.get(i);
      return X(p) && p.value === c.value && p.unit === c.unit || a.set(i, c), e;
    }
    return S(o, i, u, r), e;
  }
  return S(o, i, String(u), r), e;
}, ot = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = ie(t), o = e.style;
  if (!o) return e;
  let a = A(n) && rt(n) ? n.value : n;
  return typeof a == "string" && !te(a) && (a = Xe(a) ?? a), a == null ? (S(o, i, null, r), e) : (te(a) || typeof a == "number", S(o, i, String(a), r), e);
}, w = (e, t, n, r = "") => Ce ? an(e, t, n, r) : ot(e, t, n, r), Lr = (e, t, n) => w(Ee(e), t, n), sn = (e, t) => {
  const n = Ee(e);
  return Object.entries(t).forEach(([r, i]) => w(n, r, i)), n;
}, Pr = async (e) => {
  const t = await crypto?.subtle?.digest("SHA-256", typeof e == "string" ? new TextEncoder().encode(e) : e instanceof ArrayBuffer ? e : await e?.arrayBuffer?.());
  return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
}, at = (e, t, n = "", r) => {
  const i = Dt(e), o = typeof e == "string" && URL.canParse(e) ? e : i;
  return t?.[0] && (t[0].fetchPriority = "high"), t && o && typeof o == "string" && He(t, o, n), t?.[0] && (!URL.canParse(e) || r) && t?.[0] instanceof HTMLLinkElement, nt(i, (a) => {
    t?.[0] && a && (He(t, a, n), t?.[0].setAttribute("loaded", ""));
  })?.catch?.((a) => {
    console.warn("Failed to load style sheet:", a);
  });
}, cn = (e) => {
  const t = typeof document < "u" ? document.createElement("link") : null;
  return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
    rel: "stylesheet",
    type: "text/css",
    crossOrigin: "same-origin"
  }), t.dataset.owner = Me, at(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, O = (e, t = typeof document < "u" ? document?.head : null, n = "") => {
  const r = t?.querySelector?.("head") ?? t;
  if (typeof HTMLHeadElement < "u" && r instanceof HTMLHeadElement) return cn(e);
  const i = typeof document < "u" ? document.createElement("style") : null;
  return i ? (i.dataset.owner = Me, at(e, [i, "innerHTML"], n), r?.prepend?.(i), i) : null;
}, zr = (e, t, n, r = "") => w(e, t, n, r), Rr = (e) => fn(e, ""), un = /* @__PURE__ */ Symbol.for("dom.ts@adoptedMap"), g = globalThis[un] ??= /* @__PURE__ */ new Map(), ln = /* @__PURE__ */ Symbol.for("dom.ts@adoptedBlobMap"), N = globalThis[ln] ??= /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ Symbol.for("dom.ts@layerCounter"), Vr = globalThis[dn] ??= 0, qe = (e, t) => {
  if (!e || !t) return !1;
  try {
    return e.replaceSync(t), !0;
  } catch (n) {
    const r = String(n?.message || "").toLowerCase();
    return r.includes("@import rules are not allowed") || r.includes("@import") && r.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", n), !1;
  }
}, fn = (e, t = null) => {
  if (!et())
    return typeof e == "string" && O(e, void 0, t || ""), null;
  if (typeof e == "string" && We(e))
    return O(e, void 0, t || ""), null;
  if (typeof e == "string" && g?.has?.(e)) {
    const r = g.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(r) && document.adoptedStyleSheets.push(r), r;
  }
  if ((e instanceof Blob || e instanceof File) && N?.has?.(e)) {
    const r = N.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(r) && document.adoptedStyleSheets.push(r), r;
  }
  if (!e) return null;
  const n = typeof e == "string" ? g.getOrInsertComputed(e, (r) => new CSSStyleSheet()) : N.getOrInsertComputed(e, (r) => new CSSStyleSheet());
  if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), typeof e == "string" && !URL.canParse(e)) {
    const r = t ? `@layer ${t} { ${e} }` : e;
    return g.set(e, n), qe(n, r) || (ue(n), g.delete(e), O(e)), n;
  } else nt(Xt(e), (r) => {
    if (g.set(r, n), r) {
      if (We(r))
        return ue(n), g.delete(r), N.delete(e), O(r, void 0, t || ""), n;
      const i = t ? `@layer ${t} { ${r} }` : r;
      return qe(n, i) || (ue(n), g.delete(r), N.delete(e), O(r, void 0, t || "")), n;
    }
  });
  return n;
}, ue = (e) => {
  if (!e) return !1;
  const t = typeof e == "string" ? g.get(e) : e;
  if (!t || typeof document > "u") return !1;
  const n = document.adoptedStyleSheets, r = n.indexOf(t);
  return r !== -1 ? (n.splice(r, 1), !0) : !1;
}, hn = (e, t) => {
  const n = e.split(" ");
  return new DOMPoint(Ze(n[0], () => t.clientWidth), Ze(n[1], () => t.clientHeight));
}, Ze = (e, t) => e.endsWith("%") ? parseFloat(e) / 100 * t() : parseFloat(e), jr = (e) => {
  if (e?.computedStyleMap) {
    const t = e.computedStyleMap().get("transform")?.toMatrix?.();
    if (t) return t;
  } else if (e) {
    const t = getComputedStyle(e);
    return new DOMMatrix(t?.getPropertyValue?.("transform"));
  }
  return new DOMMatrix();
}, Or = (e) => {
  const t = getComputedStyle(e)?.getPropertyValue?.("transform-origin") || "50% 50%";
  return hn(t, e);
}, W = (e, t) => {
  if ("computedStyleMap" in e) {
    const n = e?.computedStyleMap?.()?.get(t);
    return n instanceof CSSUnitValue ? n?.value || 0 : n?.toString?.();
  }
  if (e instanceof HTMLElement) {
    const n = getComputedStyle?.(e, "");
    return parseFloat(n?.getPropertyValue?.(t)?.replace?.("px", "")) || 0;
  }
  return parseFloat((e?.style ?? e).getPropertyValue?.(t)?.replace?.("px", "")) || 0;
}, Nr = (e) => {
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
}, Wr = (e, t) => W?.(e, t), Fr = (e, t) => t == "inline" ? W(e, "padding-inline-start") + W(e, "padding-inline-end") : W(e, "padding-block-start") + W(e, "padding-block-end"), st = /* @__PURE__ */ new WeakMap(), pn = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), Hr = (e, t) => {
  if (e) {
    if (t) {
      const n = st.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((r) => pn(e, n, r));
    }
    return e;
  }
}, mn = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), B = globalThis[mn] ??= /* @__PURE__ */ new Map(), yn = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, vn = (e) => (typeof e == "object" || typeof e == "function") && e != null, gn = (e, t, n) => {
  if (!vn(e) && e != null) return e;
  let r = B.get(t);
  return r || (r = /* @__PURE__ */ new WeakMap(), B.set(t, r)), !r.has(e) && e != null && r.set(e, n), e;
}, $r = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, r] of t.entries()) gn(e, n, r);
    return e;
  }
}, Br = (e, t) => {
  if (e) {
    if (t) {
      const n = x?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      x?.has?.(e) || x?.set?.(e, n), [...t?.values?.() || []].map((r) => bn(e, r, n));
    }
    return e;
  }
}, $ = (e) => ({
  storeSet: yn(B, e),
  mixinSet: x?.get?.(e),
  behaviorSet: st?.get?.(e)
}), bn = (e, t, n) => {
  const r = new WeakRef(e);
  return n ||= x?.get?.(e), n?.has?.(t) || (n?.add?.(t), T?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((i) => !!i).join(" ")), t?.connect?.(r, t, $(e))), e;
}, Sn = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), x = globalThis[Sn] ??= /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), T = globalThis[wn] ??= /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), I = globalThis[xn] ??= /* @__PURE__ */ new Map(), Mn = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), ne = globalThis[Mn] ??= /* @__PURE__ */ new WeakMap(), ct = (e, t) => {
  typeof t == "string" && (t = I?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((a) => I?.get?.(a)).filter((a) => !!a)), i = x?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  T?.has?.(t) || T?.set?.(t, /* @__PURE__ */ new WeakSet()), x?.has?.(e) || x?.set?.(e, i);
  const o = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(o, t, $(e)), (r.has(t) || !T?.get?.(t)?.has?.(e)) && (t?.connect?.(o, t, $(e)), n.add(ne?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), T?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(o, t, $(e))));
}, ge = /* @__PURE__ */ new Set(), En = (e = typeof document < "u" ? document : null) => {
  if (e)
    return ge?.has?.(e) || (ge?.add?.(e), xe(e, "*", "data-mixin", (t) => be(t.target)), Wt(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && be(n);
    })), e;
}, be = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => I?.get?.(n)).filter((n) => !!n))].map?.((n) => ct(e, n));
}, Cn = (e, t) => {
  e.forEach((n) => t ? ct(n, t) : be(n));
}, An = (e) => {
  for (const t of ge) Cn(t?.querySelectorAll?.("[data-mixin]"), e);
}, kn = new FinalizationRegistry((e) => {
  I?.delete?.(e);
}), Tn = (e, t) => {
  if (!ne?.has?.(t)) {
    const n = e?.trim?.();
    n && (ne?.set?.(t, n), I?.set?.(n, t), kn?.register?.(t, n), An(t));
  }
};
En(typeof document < "u" ? document : null);
var Ae = class {
  constructor(e = null) {
    e && Tn(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return B.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return $(e);
  }
  get elements() {
    return T?.get?.(this);
  }
  get storage() {
    return B?.get?.(this.name || "");
  }
  get name() {
    return ne?.get?.(this);
  }
}, Ir = (e, t, n) => {
  const r = n;
  A(n) && (n = n.value);
  const i = (n = Se(n)) != null && n !== !1;
  return U(r, () => {
    e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, Ur = (e, t, n) => {
  if (!(t = typeof t == "string" ? De(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const r = n;
  return A(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && U(r, () => {
    n != null ? e[t] = n : delete e[t];
  }), e;
}, _r = (e, t, n) => {
  const r = e?.dataset;
  if (!t || !e || !r) return e;
  const i = n;
  return A(n) && (n = n?.value), t = De(t), r?.[t] === (n = Se(n)) || (n == null || n === !1 ? delete r[t] : U(i, () => {
    typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
  })), e;
}, Ln = (e, t) => e.style.removeProperty(ie(t)), qr = (e, t, n) => {
  const r = e?.style;
  return !t || typeof t != "string" || !e || !r || U(n, () => {
    ft(n) || A(n) || ht(n) ? w(e, t, n) : n == null && Ln(e, t);
  }), e;
}, Zr = (e, t, n) => {
  if (!t || !e) return e;
  const r = n;
  return A(n) && (n = n.value), t = ie(t), e?.getAttribute?.(t) === (n = Se(n)) || U(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
};
function le(e, t) {
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
var Y = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, de = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, fe = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Pn = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), re = globalThis[Pn] ??= /* @__PURE__ */ new WeakMap(), v = (e, t, n) => {
  const r = re.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), re.set(e, r);
}, ke = (e, t) => {
  const n = re.get(e), r = n?.get(t);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(t), n.size === 0 && re.delete(e);
  }
}, k = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, ut = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, zn = class extends Ae {
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
    }, a = {
      x: 0,
      y: 0
    };
    const s = (d) => {
      const y = t.getBoundingClientRect();
      return {
        x: d.clientX - y.left,
        y: d.clientY - y.top
      };
    }, u = () => {
      const d = le(o, a);
      if (d.width < 1 && d.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${d.left}px`, n.style.top = `${d.top}px`, n.style.width = `${d.width}px`, n.style.height = `${d.height}px`;
    }, l = (d) => {
      d.button === 0 && (d.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (d.target === t || t.contains(d.target)) && (i = !0, o = s(d), a = { ...o }, t.setPointerCapture(d.pointerId), t.dispatchEvent(new CustomEvent(Y.start, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...a },
          host: t
        }
      })), u()));
    }, c = (d) => {
      if (!i) return;
      a = s(d), u();
      const y = le(o, a);
      t.dispatchEvent(new CustomEvent(Y.move, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...a },
          box: y,
          host: t
        }
      }));
    }, p = (d) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(d.pointerId);
      } catch {
      }
      const y = le(o, a);
      t.dispatchEvent(new CustomEvent(Y.end, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...a },
          box: y,
          host: t
        }
      }));
    }, h = (d) => {
      i && p(d);
    }, f = (d) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(d.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Y.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return v(t, "ui-junction-select", () => {
      n.remove();
    }), v(t, "ui-junction-select", m(t, "pointerdown", l)), v(t, "ui-junction-select", m(t, "pointermove", c)), v(t, "ui-junction-select", m(t, "pointerup", h)), v(t, "ui-junction-select", m(t, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ke(t, "ui-junction-select"), this;
  }
}, Rn = class extends Ae {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    w(t, "--jx-drag-x", k(t, "--jx-drag-x")), w(t, "--jx-drag-y", k(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = ut(t, "data-junction-drag-handle", t);
    let i = !1, o = 0, a = 0, s = 0, u = 0;
    const l = (h) => {
      h.button === 0 && (h.target !== r && !r.contains(h.target) || (i = !0, o = h.clientX, a = h.clientY, s = k(t, "--jx-drag-x"), u = k(t, "--jx-drag-y"), r.setPointerCapture(h.pointerId), t.dispatchEvent(new CustomEvent(de.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: h.clientX,
          clientY: h.clientY,
          baseX: s,
          baseY: u
        }
      }))));
    }, c = (h) => {
      if (!i) return;
      const f = h.clientX - o, d = h.clientY - a, y = s + f, M = u + d;
      w(t, "--jx-drag-x", y), w(t, "--jx-drag-y", M), t.dispatchEvent(new CustomEvent(de.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: f,
          dy: d,
          x: y,
          y: M
        }
      }));
    }, p = (h) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(h.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(de.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: k(t, "--jx-drag-x"),
            y: k(t, "--jx-drag-y")
          }
        }));
      }
    };
    return v(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), v(t, "ui-junction-drag", m(r, "pointerdown", l)), v(t, "ui-junction-drag", m(r, "pointermove", c)), v(t, "ui-junction-drag", m(r, "pointerup", p)), v(t, "ui-junction-drag", m(r, "pointercancel", p)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ke(t, "ui-junction-drag"), this;
  }
}, Vn = class extends Ae {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = ut(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, o = 0, a = 0, s = 0;
    const u = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), l = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), c = (f) => {
      f.button === 0 && (f.target !== n && !n.contains(f.target) || (r = !0, i = f.clientX, o = f.clientY, a = t.offsetWidth, s = t.offsetHeight, n.setPointerCapture(f.pointerId), t.dispatchEvent(new CustomEvent(fe.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: s
        }
      }))));
    }, p = (f) => {
      if (!r) return;
      const d = Math.max(u, a + (f.clientX - i)), y = Math.max(l, s + (f.clientY - o));
      t.style.width = `${d}px`, t.style.height = `${y}px`, t.dispatchEvent(new CustomEvent(fe.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: d,
          height: y
        }
      }));
    }, h = (f) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(f.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(fe.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return v(t, "ui-junction-resize", m(n, "pointerdown", c)), v(t, "ui-junction-resize", m(n, "pointermove", p)), v(t, "ui-junction-resize", m(n, "pointerup", h)), v(t, "ui-junction-resize", m(n, "pointercancel", h)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ke(t, "ui-junction-resize"), this;
  }
};
new zn();
new Rn();
new Vn();
export {
  Ae as DOMMixin,
  Rn as JunctionDragMixin,
  Vn as JunctionResizeMixin,
  zn as JunctionSelectMixin,
  Gn as MATCH,
  ar as MOC,
  he as MOCElement,
  Hn as RAFBehavior,
  Jn as REGEX,
  $n as ROOT,
  Ar as WavyShapedCircle,
  On as __exportProperties,
  Le as __registeredCssProperties,
  m as addEvent,
  ee as addEvents,
  nr as addEventsList,
  En as addRoot,
  N as adoptedBlobMap,
  _e as adoptedLayerMap,
  g as adoptedMap,
  Ie as adoptedSelectorMap,
  D as adoptedShadowLayerMap,
  Ue as adoptedShadowSelectorMap,
  jt as animateHide,
  Vt as animateShow,
  ye as availSize,
  hr as bbh,
  fr as bbw,
  pn as bindBehavior,
  bn as bindMixins,
  gn as bindStore,
  V as blobURLMap,
  G as borderBoxHeight,
  K as borderBoxWidth,
  st as boundBehaviors,
  x as boundMixinSet,
  E as cacheMap,
  mr as cbh,
  pr as cbw,
  ur as changeZoom,
  vr as classes,
  zt as computeCaretPosition,
  Sr as computeCaretPositionFromClient,
  or as containsOrSelf,
  Q as contentBoxHeight,
  J as contentBoxWidth,
  Qn as createElementVanilla,
  Oe as createFixedOverlayViewport,
  tn as createTypedUnitValue,
  Ln as deleteStyleProperty,
  Nn as detectMobile,
  qn as doBorderObserve,
  _n as doContentObserve,
  me as ensureVirtualKeyboardOverlay,
  Dt as fetchAndCache,
  Xt as fetchAsInline,
  gr as fixOrientToScreen,
  lr as fixedClientZoom,
  Tr as getAdoptedStyleRule,
  Je as getAvailSize,
  dr as getBoundingOrientRect,
  Tt as getCorrectOrientation,
  $ as getElementRelated,
  Nr as getElementZoom,
  ir as getEventTarget,
  bt as getOffsetParent,
  Wn as getOffsetParentChain,
  Fr as getPadding,
  W as getPropertyValue,
  Wr as getPxValue,
  yn as getStoresOfElement,
  Ft as getStyleLayer,
  Ee as getStyleRule,
  jr as getTransform,
  Or as getTransformOrigin,
  cr as getZoom,
  Zr as handleAttribute,
  _r as handleDataset,
  Ir as handleHidden,
  Ur as handleProperty,
  qr as handleStyleChange,
  ae as hasParent,
  Pr as hash,
  Dn as html,
  tr as includeSelf,
  Kn as indexOf,
  Qe as initTextStyle,
  Cr as initVisibility,
  er as isElement,
  sr as isInFocus,
  vt as isMobile,
  te as isNativeCSSStyleValue,
  Fn as isNearlyIdentity,
  rt as isReactiveStyleValue,
  Yn as isValidParent,
  Vr as layerCounter,
  fn as loadAsAdopted,
  cn as loadBlobStyle,
  O as loadInlineStyle,
  at as loadStyleSheet,
  St as makeRAFCycle,
  br as measureInputInFocus,
  Pt as measureText,
  re as mixinDisposers,
  T as mixinElements,
  ne as mixinNamespace,
  I as mixinRegistry,
  kn as nameRegistryF,
  B as namedStoreMaps,
  Er as observeAttribute,
  xe as observeAttributeBySelector,
  Mr as observeBorderBox,
  Wt as observeBySelector,
  xr as observeContentBox,
  ze as onBorderObserve,
  Re as onContentObserve,
  P as orientOf,
  At as orientationNumberMap,
  Ze as parseLength,
  hn as parseOrigin,
  Ye as passiveOpts,
  Rr as preloadStyle,
  yr as readFixedOverlayViewport,
  Rt as readLauncherLayoutFromElement,
  Hr as reflectBehaviors,
  Br as reflectMixins,
  $r as reflectStores,
  Tn as registerMixin,
  ue as removeAdopted,
  Ve as removeEvent,
  rr as removeEvents,
  wr as resolveGridCellFromClientPoint,
  ge as roots,
  In as setAttributes,
  Bn as setAttributesIfNull,
  Xn as setChecked,
  Un as setIdleInterval,
  zr as setProperty,
  Lr as setStyleInRule,
  w as setStyleProperty,
  ot as setStylePropertyFallback,
  an as setStylePropertyTyped,
  sn as setStyleRule,
  kr as setStyleRules,
  He as setStyleURL,
  wt as throttleMap,
  pe as unfixedClientZoom,
  be as updateAllMixins,
  ct as updateMixinAttributes,
  Cn as updateMixinAttributesAll,
  An as updateMixinAttributesAllInRoots,
  kt as updateVP,
  Zn as url,
  Lt as whenAnyScreenChanges,
  Et as zoomOf,
  Mt as zoomValues
};

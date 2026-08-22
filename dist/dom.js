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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwsIHRyeVN0cmluZ0FzTnVtYmVyIH0gZnJvbSBcIkBmZXN0LWxpYi9jb3JlXCI7XG5cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvUHJvcGVydGllcy50c1xudmFyIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyA9IGdsb2JhbFRoaXNbX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5bXG5cdHtcblx0XHRuYW1lOiBcIi0tc2NyZWVuLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jbGlwLWZyZXFcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGl4ZWwtcmF0aW9cIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMVwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudC15XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC1sZWZ0XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC14XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC15XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH1cbl0uZm9yRWFjaCgob3B0aW9ucykgPT4ge1xuXHRpZiAodHlwZW9mIENTUyA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBDU1M/LnJlZ2lzdGVyUHJvcGVydHkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdGNvbnN0IG5hbWUgPSBTdHJpbmcob3B0aW9ucz8ubmFtZSB8fCBcIlwiKS50cmltKCk7XG5cdGlmICghbmFtZSB8fCBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmhhcyhuYW1lKSkgcmV0dXJuO1xuXHR0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KG9wdGlvbnMpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKCEoU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIikpIGNvbnNvbGUud2FybihlKTtcblx0fSBmaW5hbGx5IHtcblx0XHRfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmFkZChuYW1lKTtcblx0fVxufSk7XG52YXIgX19leHBvcnRQcm9wZXJ0aWVzID0gKCkgPT4ge307XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9EZXRlY3QudHNcbnZhciBpc01vYmlsZSA9ICgpID0+IHtcblx0bGV0IGNoZWNrID0gbmF2aWdhdG9yPy51c2VyQWdlbnREYXRhPy5tb2JpbGUgfHwgZmFsc2U7XG5cdCgoYSkgPT4ge1xuXHRcdGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkgY2hlY2sgPSB0cnVlO1xuXHR9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgZ2xvYmFsVGhpcy5vcGVyYSk7XG5cdHJldHVybiBjaGVjaztcbn07XG52YXIgZGV0ZWN0TW9iaWxlID0gKCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC9BbmRyb2lkL2ksXG5cdFx0L3dlYk9TL2ksXG5cdFx0L2lQaG9uZS9pLFxuXHRcdC9pUGFkL2ksXG5cdFx0L2lQb2QvaSxcblx0XHQvQmxhY2tCZXJyeS9pLFxuXHRcdC9XaW5kb3dzIFBob25lL2lcblx0XS5zb21lKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2guYmluZChuYXZpZ2F0b3IudXNlckFnZW50KSkgJiYgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgJiYgZ2xvYmFsVGhpcy5tYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9VdGlscy50c1xudmFyIGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrID0gKCkgPT4gKHtcblx0ZGlkVGltZW91dDogZmFsc2UsXG5cdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcbn0pO1xudmFyIHJ1bldoZW5JZGxlJDEgPSAoY2IsIHRpbWVvdXQgPSAxZTMpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayhjYiwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc2V0VGltZW91dCgoKSA9PiBjYihjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjaygpKSwgMCk7XG59O1xudmFyIGdldE9mZnNldFBhcmVudCA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiBlbGVtZW50Py5vZmZzZXRQYXJlbnQgPz8gZWxlbWVudD8uaG9zdDtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4gPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBwYXJlbnRzID0gW107XG5cdGxldCBjdXJyZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRjb25zdCBwYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoY3VycmVudCk7XG5cdFx0aWYgKHBhcmVudCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MSHRtbEVsZW1lbnQpIGJyZWFrO1xuXHRcdGlmIChjdXJyZW50ID0gcGFyZW50KSBwYXJlbnRzLnB1c2goY3VycmVudCk7XG5cdH1cblx0cmV0dXJuIHBhcmVudHM7XG59O1xudmFyIGlzTmVhcmx5SWRlbnRpdHkgPSAobWF0cml4LCBlcHNpbG9uID0gMWUtNikgPT4ge1xuXHRyZXR1cm4gTWF0aC5hYnMobWF0cml4LmEgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmIpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYykgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5kIC0gMSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5lKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmYpIDwgZXBzaWxvbjtcbn07XG52YXIgbWFrZVJBRkN5Y2xlID0gKCkgPT4ge1xuXHRjb25zdCBjb250cm9sID0ge1xuXHRcdGNhbmNlbGVkOiBmYWxzZSxcblx0XHRyQUZzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHRcdGxhc3Q6IG51bGwsXG5cdFx0Y2FuY2VsKCkge1xuXHRcdFx0dGhpcy5jYW5jZWxlZCA9IHRydWU7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxhc3QpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHRzaGVkdWxlKGNiKSB7XG5cdFx0XHR0aGlzLnJBRnMuYWRkKGNiKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0fTtcblx0KGFzeW5jICgpID0+IHtcblx0XHR3aGlsZSAoIWNvbnRyb2w/LmNhbmNlbGVkKSB7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbCgoY29udHJvbD8uckFGcz8udmFsdWVzPy4oKSA/PyBbXSk/Lm1hcD8uKChyQUYpID0+IFByb21pc2UudHJ5KHJBRik/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpKSk7XG5cdFx0XHRjb250cm9sLnJBRnM/LmNsZWFyPy4oKTtcblx0XHRcdGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHtcblx0XHRcdFx0Y29udHJvbC5sYXN0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcyk7XG5cdFx0XHR9KTtcblx0XHRcdGVsc2UgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJlcywgMTYpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KSgpO1xuXHRyZXR1cm4gY29udHJvbDtcbn07XG52YXIgUkFGQmVoYXZpb3IgPSAoc2hlZCA9IG1ha2VSQUZDeWNsZSgpKSA9PiB7XG5cdHJldHVybiAoY2IpID0+IHNoZWQuc2hlZHVsZShjYik7XG59O1xudmFyIFJPT1QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xudmFyIHNldEF0dHJpYnV0ZXNJZk51bGwgPSAoZWxlbWVudCwgYXR0cnMgPSB7fSkgPT4ge1xuXHRpZiAoIWF0dHJzIHx8IHR5cGVvZiBhdHRycyAhPSBcIm9iamVjdFwiIHx8ICFlbGVtZW50KSByZXR1cm47XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0Y29uc3Qgb2xkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgaWYgKHZhbHVlICE9IG9sZCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgb2xkID09IFwiXCIgPyB2YWx1ZSA/PyBvbGQgOiBvbGQgPz8gdmFsdWUpO1xuXHR9KTtcbn07XG52YXIgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPz8gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSkpO1xuXHR9KTtcbn07XG52YXIgdGhyb3R0bGVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIHNldElkbGVJbnRlcnZhbCA9IChjYiwgdGltZW91dCA9IDFlMywgLi4uYXJncykgPT4ge1xuXHRjb25zdCBzdGF0dXMgPSB7XG5cdFx0cnVubmluZzogdHJ1ZSxcblx0XHRjYW5jZWw6ICgpID0+IHtcblx0XHRcdHN0YXR1cy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXHRydW5XaGVuSWRsZSQxKGFzeW5jICgpID0+IHtcblx0XHRpZiAoIWNiIHx8IHR5cGVvZiBjYiAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0XHR3aGlsZSAoc3RhdHVzLnJ1bm5pbmcpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKFtQcm9taXNlLnRyeShjYiwgLi4uYXJncyksIG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHRpbWVvdXQpKV0pLmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbnkoW25ldyBQcm9taXNlKChyKSA9PiBydW5XaGVuSWRsZSQxKHIsIHRpbWVvdXQpKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSk7XG5cdFx0fVxuXHRcdHN0YXR1cy5jYW5jZWwgPSAoKSA9PiB7fTtcblx0fSwgdGltZW91dCk7XG5cdHJldHVybiBzdGF0dXM/LmNhbmNlbDtcbn07XG5pZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPSBcInVuZGVmaW5lZFwiKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXN5bmMgKCkgPT4ge1xuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdHRocm90dGxlTWFwLmZvckVhY2goKGNiKSA9PiBjYj8uKCkpO1xuXHRcdGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpO1xuXHR9XG59KTtcbnZhciBib3JkZXJCb3hXaWR0aCA9IFN5bWJvbChcIkBib3JkZXItYm94LXdpZHRoXCIpO1xudmFyIGJvcmRlckJveEhlaWdodCA9IFN5bWJvbChcIkBib3JkZXItYm94LWhlaWdodFwiKTtcbnZhciBjb250ZW50Qm94V2lkdGggPSBTeW1ib2woXCJAY29udGVudC1ib3gtd2lkdGhcIik7XG52YXIgY29udGVudEJveEhlaWdodCA9IFN5bWJvbChcIkBjb250ZW50LWJveC1oZWlnaHRcIik7XG52YXIgb25Cb3JkZXJPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgb25Db250ZW50T2JzZXJ2ZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGRvQ29udGVudE9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Db250ZW50T2JzZXJ2ZS5oYXMoZWxlbWVudCkpIHtcblx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuXHRcdGVsZW1lbnRbY29udGVudEJveEhlaWdodF0gPSBlbGVtZW50LmNsaWVudEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgY29udGVudEJveFNpemUgPSBlbnRyeS5jb250ZW50Qm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGNvbnRlbnRCb3hTaXplKSB7XG5cdFx0XHRcdFx0ZWxlbWVudFtjb250ZW50Qm94V2lkdGhdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5jbGllbnRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IE1hdGgubWluKGNvbnRlbnRCb3hTaXplLmJsb2NrU2l6ZSwgZWxlbWVudC5jbGllbnRIZWlnaHQpO1xuXHRcdFx0XHRcdGNiPy4oZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRvbkNvbnRlbnRPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImNvbnRlbnQtYm94XCIgfSk7XG5cdH1cbn07XG52YXIgZG9Cb3JkZXJPYnNlcnZlID0gKGVsZW1lbnQsIGNiID0gKCkgPT4ge30pID0+IHtcblx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuXHRpZiAoIW9uQm9yZGVyT2JzZXJ2ZS5oYXMoZWxlbWVudCkpIHtcblx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgYm9yZGVyQm94U2l6ZSA9IGVudHJ5LmJvcmRlckJveFNpemVbMF07XG5cdFx0XHRcdGlmIChib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hXaWR0aF0gPSBNYXRoLm1pbihib3JkZXJCb3hTaXplLmlubGluZVNpemUsIGVsZW1lbnQub2Zmc2V0V2lkdGgpO1xuXHRcdFx0XHRcdGVsZW1lbnRbYm9yZGVyQm94SGVpZ2h0XSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50Lm9mZnNldEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQm9yZGVyT2JzZXJ2ZS5zZXQoZWxlbWVudCwgb2JzZXJ2ZXIpO1xuXHRcdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJib3JkZXItYm94XCIgfSk7XG5cdH1cbn07XG52YXIgdXJsID0gKHR5cGUsIC4uLnNvdXJjZSkgPT4ge1xuXHRyZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihzb3VyY2UsIHsgdHlwZSB9KSk7XG59O1xudmFyIGh0bWwgPSAoc291cmNlLCB0eXBlID0gXCJ0ZXh0L2h0bWxcIikgPT4ge1xuXHRjb25zdCBwYXJzZWQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHNvdXJjZSwgdHlwZSk7XG5cdHJldHVybiBwYXJzZWQucXVlcnlTZWxlY3RvcihcInRlbXBsYXRlXCIpID8/IHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwiKlwiKTtcbn07XG52YXIgc2V0Q2hlY2tlZCA9IChpbnB1dCwgdmFsdWUsIGV2KSA9PiB7XG5cdGlmICh2YWx1ZSAhPSBudWxsICYmIGlucHV0LmNoZWNrZWQgIT0gdmFsdWUpIHtcblx0XHRpZiAoaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJjaGVja2JveFwiIHx8IGlucHV0Py5bXCJ0eXBlXCJdID09IFwicmFkaW9cIiAmJiAhaW5wdXQ/LmNoZWNrZWQpIHtcblx0XHRcdGlucHV0Py5jbGljaz8uKCk7XG5cdFx0XHRldj8ucHJldmVudERlZmF1bHQ/LigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbnB1dC5jaGVja2VkID0gISF2YWx1ZTtcblx0XHRcdGlucHV0Py5kaXNwYXRjaEV2ZW50Py4obmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fVxufTtcbnZhciBpc1ZhbGlkUGFyZW50ID0gKHBhcmVudCkgPT4ge1xuXHRyZXR1cm4gcGFyZW50ICE9IG51bGwgJiYgcGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgIShwYXJlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50IHx8IHBhcmVudCBpbnN0YW5jZW9mIEhUTUxCb2R5RWxlbWVudCkgPyBwYXJlbnQgOiBudWxsO1xufTtcbnZhciBpbmRleE9mID0gKGVsZW1lbnQsIG5vZGUpID0+IHtcblx0aWYgKGVsZW1lbnQgPT0gbnVsbCB8fCBub2RlID09IG51bGwpIHJldHVybiAtMTtcblx0cmV0dXJuIEFycmF5LmZyb20oZWxlbWVudD8uY2hpbGROb2RlcyA/PyBbXSk/LmluZGV4T2Y/Lihub2RlKSA/PyAtMTtcbn07XG52YXIgTUFUQ0ggPSBcIigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKilcIjtcbnZhciBSRUdFWCA9IFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCI7XG52YXIgY3JlYXRlRWxlbWVudFZhbmlsbGEgPSAoc2VsZWN0b3IpID0+IHtcblx0aWYgKHNlbGVjdG9yID09IFwiOmZyYWdtZW50OlwiKSByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50LmJpbmQoZG9jdW1lbnQpO1xuXHRmb3IgKHZhciBub2RlID0gY3JlYXRlKFwiZGl2XCIpLCBtYXRjaCwgY2xhc3NOYW1lID0gXCJcIjsgc2VsZWN0b3IgJiYgKG1hdGNoID0gc2VsZWN0b3IubWF0Y2goXCJeKD86KC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSl8XiMoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcLigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKil8XlxcXFxbKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSg/OihbKiR8fl5dPz0pKFtcXFwiJ10pKCg/Oig/PShcXFxcXFxcXD8pKVxcXFw4LikqPylcXFxcNik/XFxcXF1cIikpOykge1xuXHRcdGlmIChtYXRjaFsxXSkgbm9kZSA9IGNyZWF0ZShtYXRjaFsxXSk7XG5cdFx0aWYgKG1hdGNoWzJdKSBub2RlLmlkID0gbWF0Y2hbMl07XG5cdFx0aWYgKG1hdGNoWzNdKSBjbGFzc05hbWUgKz0gXCIgXCIgKyBtYXRjaFszXTtcblx0XHRpZiAobWF0Y2hbNF0pIG5vZGUuc2V0QXR0cmlidXRlKG1hdGNoWzRdLCBtYXRjaFs3XSB8fCBcIlwiKTtcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG5cdH1cblx0aWYgKGNsYXNzTmFtZSkgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWUuc2xpY2UoMSk7XG5cdHJldHVybiBub2RlO1xufTtcbnZhciBpc0VsZW1lbnQgPSAoZWwpID0+IHtcblx0cmV0dXJuIGVsICE9IG51bGwgJiYgKGVsIGluc3RhbmNlb2YgTm9kZSB8fCBlbCBpbnN0YW5jZW9mIFRleHQgfHwgZWwgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgQ29tbWVudCB8fCBlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgPyBlbCA6IG51bGw7XG59O1xudmFyIGluY2x1ZGVTZWxmID0gKHRhcmdldCwgc2VsZWN0b3IpID0+IHtcblx0Y29uc3Qgc2VsID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IudHJpbSgpIDogXCJcIjtcblx0aWYgKCFzZWwgfHwgIXRhcmdldCkgcmV0dXJuIHRhcmdldCA/PyBudWxsO1xuXHR0cnkge1xuXHRcdHJldHVybiB0YXJnZXQucXVlcnlTZWxlY3RvcihzZWwpID8/ICh0YXJnZXQubWF0Y2hlcyhzZWwpID8gdGFyZ2V0IDogbnVsbCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xudmFyIGhhc1BhcmVudCA9IChjdXJyZW50LCBwYXJlbnQpID0+IHtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRpZiAoIShjdXJyZW50Py5lbGVtZW50ID8/IGN1cnJlbnQpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKChjdXJyZW50Py5lbGVtZW50ID8/IGN1cnJlbnQpID09PSAocGFyZW50Py5lbGVtZW50ID8/IHBhcmVudCkpIHJldHVybiB0cnVlO1xuXHRcdGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQgPz8gKGN1cnJlbnQucGFyZW50Tm9kZSA9PSBjdXJyZW50Py5nZXRSb290Tm9kZT8uKHsgY29tcG9zZWQ6IHRydWUgfSkgPyBjdXJyZW50Py5nZXRSb290Tm9kZT8uKHsgY29tcG9zZWQ6IHRydWUgfSk/Lmhvc3QgOiBjdXJyZW50Py5wYXJlbnROb2RlKTtcblx0fVxufTtcbnZhciBwYXNzaXZlT3B0cyA9IHt9O1xuZnVuY3Rpb24gYWRkRXZlbnQodGFyZ2V0LCB0eXBlLCBjYiwgb3B0cyA9IHBhc3NpdmVPcHRzKSB7XG5cdHRhcmdldD8uYWRkRXZlbnRMaXN0ZW5lcj8uKHR5cGUsIGNiLCBvcHRzKTtcblx0Y29uc3Qgd3IgPSB0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHRhcmdldCA9PSBcImZ1bmN0aW9uXCIgJiYgIXRhcmdldD8uZGVyZWYgPyBuZXcgV2Vha1JlZih0YXJnZXQpIDogdGFyZ2V0O1xuXHRyZXR1cm4gKCkgPT4gd3I/LmRlcmVmPy4oKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKHR5cGUsIGNiLCBvcHRzKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG52YXIgYWRkRXZlbnRzID0gKHJvb3QsIGhhbmRsZXJzKSA9PiB7XG5cdHJvb3QgPSByb290IGluc3RhbmNlb2YgV2Vha1JlZiA/IHJvb3QuZGVyZWYoKSA6IHJvb3Q7XG5cdHJldHVybiBbLi4uT2JqZWN0LmVudHJpZXMoaGFuZGxlcnMpXS5tYXA/LigoW25hbWUsIGNiXSkgPT4gQXJyYXkuaXNBcnJheShjYikgPyBhZGRFdmVudChyb290LCBuYW1lLCAuLi5jYikgOiBhZGRFdmVudChyb290LCBuYW1lLCBjYikpO1xufTtcbnZhciBhZGRFdmVudHNMaXN0ID0gKGVsLCBldmVudHMpID0+IHtcblx0aWYgKGV2ZW50cykge1xuXHRcdGxldCBlbnRyaWVzID0gZXZlbnRzO1xuXHRcdGlmIChldmVudHMgaW5zdGFuY2VvZiBNYXApIGVudHJpZXMgPSBbLi4uZXZlbnRzLmVudHJpZXMoKV07XG5cdFx0ZWxzZSBlbnRyaWVzID0gWy4uLk9iamVjdC5lbnRyaWVzKGV2ZW50cyldO1xuXHRcdHJldHVybiBlbnRyaWVzLm1hcCgoW25hbWUsIGxpc3RdKSA9PiAoKGlzQXJyYXlPckl0ZXJhYmxlKGxpc3QpID8gWy4uLmxpc3RdIDogbGlzdCkgPz8gW10pPy5tYXA/LigoY2JzKSA9PiB7XG5cdFx0XHRyZXR1cm4gYWRkRXZlbnQoZWwsIG5hbWUsIGNicyk7XG5cdFx0fSkpO1xuXHR9XG59O1xudmFyIHJlbW92ZUV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gcmVtb3ZlRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogcmVtb3ZlRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgZ2V0RXZlbnRUYXJnZXQgPSAoZXYpID0+IHtcblx0aWYgKCFldikgcmV0dXJuIG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuIG5vZGU7XG5cdH1cblx0Y29uc3QgdGFyZ2V0ID0gZXY/LnRhcmdldDtcblx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiB0YXJnZXQ7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBjb250YWluc09yU2VsZiA9IChhLCBiLCBldikgPT4ge1xuXHRpZiAoYiA9PSBudWxsIHx8ICEoYiBpbnN0YW5jZW9mIE5vZGUpICYmIGI/LmVsZW1lbnQgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoYSA9PSBiIHx8IChhPy5lbGVtZW50ID8/IGEpID09IChiPy5lbGVtZW50ID8/IGIpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGNvbnN0IGFFbCA9IGE/LmVsZW1lbnQgPz8gYTtcblx0XHRjb25zdCBiRWwgPSBiPy5lbGVtZW50ID8/IGI7XG5cdFx0aWYgKHBhdGguaW5jbHVkZXMoYUVsKSAmJiBwYXRoLmluY2x1ZGVzKGJFbCkpIHtcblx0XHRcdGNvbnN0IGFJbmRleCA9IHBhdGguaW5kZXhPZihhRWwpO1xuXHRcdFx0Y29uc3QgYkluZGV4ID0gcGF0aC5pbmRleE9mKGJFbCk7XG5cdFx0XHRpZiAoYkluZGV4ID49IDAgJiYgYUluZGV4ID49IDAgJiYgYkluZGV4IDwgYUluZGV4KSByZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKGE/LmNvbnRhaW5zPy4oYj8uZWxlbWVudCA/PyBiKSB8fCBhPy5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0ID09IChiPy5lbGVtZW50ID8/IGIpKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIGZhbHNlO1xufTtcbnZhciBNT0NFbGVtZW50ID0gKGVsZW1lbnQsIHNlbGVjdG9yLCBldikgPT4ge1xuXHRjb25zdCBzZWwgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBzZWxlY3Rvci50cmltKCkgOiBcIlwiO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGVsZW1lbnQgPz8gbnVsbDtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBwYXRoKSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB0cnkge1xuXHRcdFx0aWYgKG5vZGUubWF0Y2hlcz8uKHNlbCkpIHJldHVybiBub2RlO1xuXHRcdH0gY2F0Y2gge31cblx0fVxuXHRsZXQgc2VsZiA9IG51bGw7XG5cdGxldCBob3N0TWF0Y2hlZCA9IG51bGw7XG5cdGxldCBjbG9zZXN0ID0gbnVsbDtcblx0dHJ5IHtcblx0XHRzZWxmID0gZWxlbWVudD8ubWF0Y2hlcz8uKHNlbCkgPyBlbGVtZW50IDogbnVsbDtcblx0XHRjb25zdCBob3N0ID0gKGVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkgPz8gZWxlbWVudD8ucGFyZW50RWxlbWVudD8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSk/Lmhvc3Q7XG5cdFx0aG9zdE1hdGNoZWQgPSBob3N0Py5tYXRjaGVzPy4oc2VsKSA/IGhvc3QgOiBudWxsO1xuXHRcdGNsb3Nlc3QgPSBlbGVtZW50Py5jbG9zZXN0Py4oc2VsKSA/PyBzZWxmPy5jbG9zZXN0Py4oc2VsKSA/PyBob3N0TWF0Y2hlZD8uY2xvc2VzdD8uKHNlbCkgPz8gbnVsbDtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gc2VsZiA/PyBjbG9zZXN0ID8/IGhvc3RNYXRjaGVkO1xufTtcbnZhciBNT0MgPSAoZWxlbWVudCwgc2VsZWN0b3IpID0+IHtcblx0cmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvcik7XG59O1xudmFyIGlzSW5Gb2N1cyA9IChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCwgZGlyID0gXCJwYXJlbnRcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKGVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmICFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSh7XG5cdFx0Y2hlY2tPcGFjaXR5OiB0cnVlLFxuXHRcdGNoZWNrVmlzaWJpbGl0eUNTUzogdHJ1ZVxuXHR9KSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoIWVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmIGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsICYmIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gIT09IFwiZml4ZWRcIikgcmV0dXJuIGZhbHNlO1xuXHRsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0d2hpbGUgKGFjdGl2ZSAmJiBhY3RpdmUuc2hhZG93Um9vdCAmJiBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50KSBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuXHRjb25zdCBpc0ZvY3VzZWQgPSBhY3RpdmUgPT09IGVsZW1lbnQgfHwgaGFzUGFyZW50KGFjdGl2ZSwgZWxlbWVudCk7XG5cdGNvbnN0IGlzSG92ZXJlZCA9IGVsZW1lbnQubWF0Y2hlcyhcIjpob3ZlclwiKTtcblx0aWYgKCFpc0ZvY3VzZWQgJiYgIWlzSG92ZXJlZCAmJiAhc2VsZWN0b3JPckVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKHNlbGVjdG9yT3JFbGVtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBzZWxlY3Rvck9yRWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKGRpciA9PT0gXCJwYXJlbnRcIikgcmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gaXNGb2N1c2VkID8gYWN0aXZlIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiOmhvdmVyXCIpIHx8IGVsZW1lbnQ7XG5cdFx0XHRcdGNvbnN0IGFsdENuZCA9ICEhTU9DRWxlbWVudCh0YXJnZXQsIHNlbGVjdG9yT3JFbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I/LihzZWxlY3Rvck9yRWxlbWVudCkgIT0gbnVsbCB8fCBlbGVtZW50Py5tYXRjaGVzPy4oc2VsZWN0b3JPckVsZW1lbnQpIHx8IGFsdENuZDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHNlbGVjdG9yT3JFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiBoYXNQYXJlbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpIHx8IGZhbHNlO1xuXHRcdFx0ZWxzZSByZXR1cm4gaGFzUGFyZW50KHNlbGVjdG9yT3JFbGVtZW50LCBlbGVtZW50KSB8fCBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvWm9vbS50c1xudmFyIGdldFpvb20gPSAoKSA9PiB7XG5cdGlmIChcImN1cnJlbnRDU1Nab29tXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdHJldHVybiBwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zY2FsaW5nXCIpIHx8IFwiMVwiKSB8fCAxO1xufTtcbnZhciB6b29tVmFsdWVzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xudmFyIHpvb21WYWx1ZXMgPSBnbG9iYWxUaGlzW3pvb21WYWx1ZXNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB6b29tT2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gem9vbVZhbHVlcy5nZXRPckluc2VydENvbXB1dGVkKGVsZW1lbnQsICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiLnVpLW9yaWVudGJveFwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCIudWktb3JpZW50Ym94XCIpIHx8IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYgKGNvbnRhaW5lcj8uem9vbSkgcmV0dXJuIGNvbnRhaW5lcj8uem9vbSB8fCAxO1xuXHRcdGlmIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgcmV0dXJuIGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdH0pO1xufTtcbnZhciBjaGFuZ2Vab29tID0gKHNjYWxlID0gMSkgPT4ge1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNjYWxpbmdcIiwgc2NhbGUpO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzY2FsaW5nXCIsIHtcblx0XHRkZXRhaWw6IHsgem9vbTogc2NhbGUgfSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpO1xuXHRyZXR1cm4gc2NhbGU7XG59O1xudmFyIGZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gIT0gbnVsbCA/IDEgOiB6b29tT2YoZWxlbWVudCkpIHx8IDE7XG59O1xudmFyIHVuZml4ZWRDbGllbnRab29tID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSA9PSBudWxsID8gMSA6IGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tKSB8fCAxO1xufTtcbnZhciBvcmllbnRPZiA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IChlbGVtZW50Py5tYXRjaGVzPy4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpID8gZWxlbWVudCA6IG51bGwpIHx8IGVsZW1lbnQ/LmNsb3Nlc3Q/LihcIltvcmllbnRdLCBbZGF0YS1taXhpbj1cXFwidWktb3JpZW50Ym94XFxcIl1cIikgfHwgZWxlbWVudDtcblx0aWYgKGNvbnRhaW5lcj8uaGFzQXR0cmlidXRlPy4oXCJvcmllbnRcIikpIHJldHVybiBwYXJzZUludChjb250YWluZXI/LmdldEF0dHJpYnV0ZT8uKFwib3JpZW50XCIpIHx8IFwiMFwiKSB8fCAwO1xuXHRpZiAoY29udGFpbmVyPy5vcmllbnQgIT0gbnVsbCAmJiBOdW1iZXIuaXNGaW5pdGUoTnVtYmVyKGNvbnRhaW5lci5vcmllbnQpKSkgcmV0dXJuIE51bWJlcihjb250YWluZXIub3JpZW50KSB8fCAwO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGNvbnRhaW5lcj8uc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcIi0tb3JpZW50XCIpIHx8ICh0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSA9PT0gXCJmdW5jdGlvblwiICYmIGNvbnRhaW5lciA/IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1vcmllbnRcIikgOiBcIlwiKSB8fCBcIlwiO1xuXHRcdGNvbnN0IG4gPSBwYXJzZUludChTdHJpbmcocmF3KS50cmltKCksIDEwKTtcblx0XHRpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbjtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gMDtcbn07XG52YXIgZ2V0Qm91bmRpbmdPcmllbnRSZWN0ID0gKGVsZW1lbnQsIG9yaWVudCA9IG51bGwpID0+IHtcblx0Y29uc3Qgem9vbSA9IHVuZml4ZWRDbGllbnRab29tKGVsZW1lbnQpIHx8IDE7XG5cdGNvbnN0IGJveCA9IGVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XG5cdGNvbnN0IG5ieCA9IHtcblx0XHRsZWZ0OiBib3g/LmxlZnQgLyB6b29tLFxuXHRcdHJpZ2h0OiBib3g/LnJpZ2h0IC8gem9vbSxcblx0XHR0b3A6IGJveD8udG9wIC8gem9vbSxcblx0XHRib3R0b206IGJveD8uYm90dG9tIC8gem9vbSxcblx0XHR3aWR0aDogYm94Py53aWR0aCAvIHpvb20sXG5cdFx0aGVpZ2h0OiBib3g/LmhlaWdodCAvIHpvb21cblx0fTtcblx0Y29uc3Qgb3JfaSA9IG9yaWVudCA/PyAob3JpZW50T2YoZWxlbWVudCkgfHwgMCk7XG5cdGNvbnN0IHZ2ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGw7XG5cdGNvbnN0IHNpemUgPSBbKCh2dj8ud2lkdGggPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRXaWR0aCA/PyB3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMSkgLyB6b29tLCAoKHZ2Py5oZWlnaHQgPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRIZWlnaHQgPz8gd2luZG93LmlubmVySGVpZ2h0KSB8fCAxKSAvIHpvb21dO1xuXHRjb25zdCBbbGVmdF8sIHRvcF9dID0gY3Z0X2NzX3RvX29zKFtuYngubGVmdCwgbmJ4LnRvcF0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbcmlnaHRfLCBib3R0b21fXSA9IGN2dF9jc190b19vcyhbbmJ4LnJpZ2h0LCBuYnguYm90dG9tXSwgc2l6ZSwgb3JfaSk7XG5cdGNvbnN0IFtsZWZ0LCByaWdodF0gPSBvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gW2xlZnRfLCByaWdodF9dIDogW3JpZ2h0XywgbGVmdF9dO1xuXHRjb25zdCBbdG9wLCBib3R0b21dID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMSA/IFt0b3BfLCBib3R0b21fXSA6IFtib3R0b21fLCB0b3BfXTtcblx0Y29uc3QgW3dpZHRoLCBoZWlnaHRdID0gb3JfaSAlIDIgPyBbbmJ4LmhlaWdodCwgbmJ4LndpZHRoXSA6IFtuYngud2lkdGgsIG5ieC5oZWlnaHRdO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aCxcblx0XHRoZWlnaHRcblx0fTtcbn07XG52YXIgYmJ3ID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBiYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtib3JkZXJCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoIDogZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xudmFyIGNidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQgOiBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBjYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQ7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9WaWV3cG9ydC50c1xudmFyIHJ1bldoZW5JZGxlID0gKGNiLCB0aW1lb3V0ID0gMTAwKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2soY2IsIHsgdGltZW91dCB9KTtcblx0cmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gY2Ioe1xuXHRcdGRpZFRpbWVvdXQ6IGZhbHNlLFxuXHRcdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcblx0fSksIDApO1xufTtcbnZhciBLRVlCT0FSRF9PVkVSTEFZX1BYID0gODA7XG52YXIgdmlydHVhbEtleWJvYXJkID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBnbG9iYWxUaGlzLm5hdmlnYXRvcj8udmlydHVhbEtleWJvYXJkID8/IG51bGw7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xudmFyIGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkgPSAoKSA9PiB7XG5cdGNvbnN0IHZrID0gdmlydHVhbEtleWJvYXJkKCk7XG5cdGlmICghdmspIHJldHVybjtcblx0dHJ5IHtcblx0XHRpZiAodmsub3ZlcmxheXNDb250ZW50ICE9PSB0cnVlKSB2ay5vdmVybGF5c0NvbnRlbnQgPSB0cnVlO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGlzSW1lVGFyZ2V0ID0gKGVsKSA9PiB7XG5cdGlmICghZWwgfHwgIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHJldHVybiB0cnVlO1xuXHRjb25zdCB0YWcgPSBlbC50YWdOYW1lO1xuXHRpZiAodGFnID09PSBcIlRFWFRBUkVBXCIgfHwgdGFnID09PSBcIlNFTEVDVFwiKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHRhZyAhPT0gXCJJTlBVVFwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHR5cGUgPSBTdHJpbmcoZWwudHlwZSB8fCBcInRleHRcIikudG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuICFbXG5cdFx0XCJidXR0b25cIixcblx0XHRcImNoZWNrYm94XCIsXG5cdFx0XCJyYWRpb1wiLFxuXHRcdFwiZmlsZVwiLFxuXHRcdFwic3VibWl0XCIsXG5cdFx0XCJyZXNldFwiLFxuXHRcdFwiaW1hZ2VcIixcblx0XHRcInJhbmdlXCIsXG5cdFx0XCJjb2xvclwiLFxuXHRcdFwiaGlkZGVuXCJcblx0XS5pbmNsdWRlcyh0eXBlKTtcbn07XG52YXIgbGF5b3V0TG9ja09yaWVudCA9IFwiXCI7XG52YXIgbGF5b3V0TG9ja1cgPSAwO1xudmFyIGxheW91dExvY2tIID0gMDtcbnZhciBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCA9ICh3aWR0aCwgaGVpZ2h0LCBsZWZ0ID0gMCwgdG9wID0gMCkgPT4ge1xuXHRjb25zdCBzYWZlV2lkdGggPSBNYXRoLm1heCgwLCBOdW1iZXIod2lkdGgpIHx8IDApO1xuXHRjb25zdCBzYWZlSGVpZ2h0ID0gTWF0aC5tYXgoMCwgTnVtYmVyKGhlaWdodCkgfHwgMCk7XG5cdGNvbnN0IHNhZmVMZWZ0ID0gTnVtYmVyKGxlZnQpIHx8IDA7XG5cdGNvbnN0IHNhZmVUb3AgPSBOdW1iZXIodG9wKSB8fCAwO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IHNhZmVMZWZ0LFxuXHRcdHRvcDogc2FmZVRvcCxcblx0XHRyaWdodDogc2FmZUxlZnQgKyBzYWZlV2lkdGgsXG5cdFx0Ym90dG9tOiBzYWZlVG9wICsgc2FmZUhlaWdodCxcblx0XHR3aWR0aDogc2FmZVdpZHRoLFxuXHRcdGhlaWdodDogc2FmZUhlaWdodFxuXHR9O1xufTtcbnZhciByZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoMCwgMCk7XG5cdGNvbnN0IHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuXHRyZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoTnVtYmVyKHJvb3Q/LmNsaWVudFdpZHRoKSB8fCBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAsIE51bWJlcihyb290Py5jbGllbnRIZWlnaHQpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDApO1xufTtcbnZhciByZWFkTGF5b3V0Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge1xuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMCxcblx0XHRrZXlib2FyZDogMFxuXHR9O1xuXHRjb25zdCB2diA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblx0Y29uc3QgaW5uZXJXID0gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwO1xuXHRjb25zdCBpbm5lckggPSBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dlcgPSBOdW1iZXIodnY/LndpZHRoKSB8fCAwO1xuXHRjb25zdCB2dkggPSBOdW1iZXIodnY/LmhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZUb3AgPSBOdW1iZXIodnY/Lm9mZnNldFRvcCkgfHwgMDtcblx0Y29uc3QgdmtIID0gTnVtYmVyKHZpcnR1YWxLZXlib2FyZCgpPy5ib3VuZGluZ0JveD8uaGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dk92ZXJsYXAgPSBpbm5lckggPiAwICYmIHZ2SCA+IDAgPyBpbm5lckggLSB2dkggLSB2dlRvcCA6IDA7XG5cdGNvbnN0IGtleWJvYXJkID0gdmtIID49IEtFWUJPQVJEX09WRVJMQVlfUFggPyB2a0ggOiB2dk92ZXJsYXAgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IHZ2T3ZlcmxhcCA6IDA7XG5cdGNvbnN0IGNhbmRpZGF0ZVcgPSBNYXRoLm1heChpbm5lclcsIHZ2Vyk7XG5cdGNvbnN0IGNhbmRpZGF0ZUggPSBNYXRoLm1heChpbm5lckgsIHZ2SCArIHZ2VG9wLCBrZXlib2FyZCA+IDAgPyB2dkggKyBrZXlib2FyZCA6IDApO1xuXHRjb25zdCBvcmllbnQgPSB0eXBlb2YgbWF0Y2hNZWRpYSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpPy5tYXRjaGVzID8gXCJsXCIgOiBcInBcIjtcblx0aWYgKG9yaWVudCAhPT0gbGF5b3V0TG9ja09yaWVudCkge1xuXHRcdGxheW91dExvY2tPcmllbnQgPSBvcmllbnQ7XG5cdFx0bGF5b3V0TG9ja1cgPSAwO1xuXHRcdGxheW91dExvY2tIID0gMDtcblx0fVxuXHRjb25zdCBzdWRkZW5TaHJpbmsgPSBsYXlvdXRMb2NrSCA+IDAgJiYgbGF5b3V0TG9ja0ggLSBjYW5kaWRhdGVIID49IEtFWUJPQVJEX09WRVJMQVlfUFg7XG5cdGlmICghKGtleWJvYXJkID4gMCB8fCBpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB8fCBzdWRkZW5TaHJpbmspKSB7XG5cdFx0bGF5b3V0TG9ja1cgPSBjYW5kaWRhdGVXO1xuXHRcdGxheW91dExvY2tIID0gY2FuZGlkYXRlSDtcblx0fSBlbHNlIHtcblx0XHRsYXlvdXRMb2NrVyA9IE1hdGgubWF4KGNhbmRpZGF0ZVcsIGxheW91dExvY2tXKTtcblx0XHRsYXlvdXRMb2NrSCA9IE1hdGgubWF4KGNhbmRpZGF0ZUgsIGxheW91dExvY2tIKTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdHdpZHRoOiBsYXlvdXRMb2NrVyB8fCBjYW5kaWRhdGVXLFxuXHRcdGhlaWdodDogbGF5b3V0TG9ja0ggfHwgY2FuZGlkYXRlSCxcblx0XHRrZXlib2FyZFxuXHR9O1xufTtcbnZhciBwaW5PdmVybGF5U2Nyb2xsID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRpZiAocmVhZExheW91dFZpZXdwb3J0KCkua2V5Ym9hcmQgPD0gMCAmJiAhaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHJldHVybjtcblx0aWYgKHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keT8uc2Nyb2xsVG9wKSB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59O1xudmFyIGdldEF2YWlsU2l6ZSA9ICgpID0+IHtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHRjb25zdCBsID0gdHlwZW9mIG1hdGNoTWVkaWEgIT0gXCJ1bmRlZmluZWRcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiBmYWxzZTtcblx0Y29uc3QgdnYgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LnZpc3VhbFZpZXdwb3J0IDogbnVsbDtcblx0Y29uc3QgbGF5b3V0ID0gcmVhZExheW91dFZpZXdwb3J0KCk7XG5cdGNvbnN0IHZ2QmxvY2sgPSB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IGAke3Z2Py53aWR0aCA/PyAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lcldpZHRoIDogMCl9cHhgLFxuXHRcdFwiLS12di1oZWlnaHRcIjogYCR7dnY/LmhlaWdodCA/PyAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IDApfXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dnY/Lm9mZnNldExlZnQgPz8gMH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC10b3BcIjogYCR7dnY/Lm9mZnNldFRvcCA/PyAwfXB4YCxcblx0XHRcIi0tdnYtc2NhbGVcIjogU3RyaW5nKHZ2Py5zY2FsZSA/PyAxKSxcblx0XHRcIi0tbHYtd2lkdGhcIjogYCR7bGF5b3V0LndpZHRofXB4YCxcblx0XHRcIi0tbHYtaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFwiLS1rZXlib2FyZC1vdmVybGF5LWhlaWdodFwiOiBgJHtsYXlvdXQua2V5Ym9hcmR9cHhgXG5cdH07XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC50b2dnbGVBdHRyaWJ1dGUoXCJkYXRhLXZrLW9wZW5cIiwgbGF5b3V0LmtleWJvYXJkID4gMCk7XG5cdGlmICh0eXBlb2Ygc2NyZWVuICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRjb25zdCBhdyA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIjtcblx0XHRjb25zdCBhaCA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBsID8gYWggOiBhdyxcblx0XHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogbCA/IGF3IDogYWgsXG5cdFx0XHRcIi0tdmlldy1oZWlnaHRcIjogYCR7bGF5b3V0LmhlaWdodCB8fCBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSB8fCAwfXB4YCxcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLnZ2QmxvY2tcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogXCIxXCIsXG5cdFx0Li4udnZCbG9ja1xuXHR9O1xufTtcbnZhciBhdmFpbFNpemUgPSBnZXRBdmFpbFNpemUoKTtcbnZhciBjbGFzc2VzID0gW1tcIjpyb290LCA6aG9zdCwgOnNjb3BlXCIsIGF2YWlsU2l6ZV1dO1xudmFyIG9yaWVudGF0aW9uTnVtYmVyTWFwID0ge1xuXHRcInBvcnRyYWl0LXByaW1hcnlcIjogMCxcblx0XCJsYW5kc2NhcGUtcHJpbWFyeVwiOiAxLFxuXHRcInBvcnRyYWl0LXNlY29uZGFyeVwiOiAyLFxuXHRcImxhbmRzY2FwZS1zZWNvbmRhcnlcIjogM1xufTtcbnZhciB1cGRhdGVWUCA9IChldikgPT4ge1xuXHRjb25zdCBydWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRPYmplY3QuYXNzaWduKGF2YWlsU2l6ZSwgZ2V0QXZhaWxTaXplKCkpO1xuXHRPYmplY3QuZW50cmllcyhhdmFpbFNpemUpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFZhbHVlXSkgPT4ge1xuXHRcdGNvbnN0IGV4aXN0cyA9IHJ1bGU/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKTtcblx0XHRpZiAoIWV4aXN0cyB8fCBleGlzdHMgIT0gcHJvcFZhbHVlKSBydWxlPy5zdHlsZT8uc2V0UHJvcGVydHk/Lihwcm9wTmFtZSwgcHJvcFZhbHVlIHx8IFwiXCIsIFwiXCIpO1xuXHR9KTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRhdGlvbi1zZWNvbmRhcnlcIiwgc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZT8uZW5kc1dpdGg/LihcInNlY29uZGFyeVwiKSA/IFwiMVwiIDogXCIwXCIpO1xufTtcbnZhciBnZXRDb3JyZWN0T3JpZW50YXRpb24gPSAoKSA9PiB7XG5cdGxldCBvcmllbnRhdGlvblR5cGUgPSBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlIHx8IFwicG9ydHJhaXQtcHJpbWFyeVwiO1xuXHRpZiAoIWdsb2JhbFRoaXMubWF0Y2hNZWRpYShcIigoZGlzcGxheS1tb2RlOiBmdWxsc2NyZWVuKSBvciAoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKSBvciAoZGlzcGxheS1tb2RlOiB3aW5kb3ctY29udHJvbHMtb3ZlcmxheSkpXCIpLm1hdGNoZXMpIHtcblx0XHRpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwibGFuZHNjYXBlXCIsIFwicG9ydHJhaXRcIik7XG5cdFx0ZWxzZSBpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcInBvcnRyYWl0XCIsIFwibGFuZHNjYXBlXCIpO1xuXHR9XG5cdHJldHVybiBvcmllbnRhdGlvblR5cGU7XG59O1xudmFyIHBhc3NpdmVPcHRzJDEgPSB7IHBhc3NpdmU6IHRydWUgfTtcbnZhciB3aGVuQW55U2NyZWVuQ2hhbmdlcyA9IChjYikgPT4ge1xuXHRsZXQgdGlja2luZyA9IGZhbHNlO1xuXHRjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cdFx0aWYgKCF0aWNraW5nKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHR1cGRhdGVWUCgpO1xuXHRcdFx0XHRjYigpO1xuXHRcdFx0XHR0aWNraW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHRcdHRpY2tpbmcgPSB0cnVlO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgdW5zdWJzY3JpYmVycyA9IFtdO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQsIFwiZ2VvbWV0cnljaGFuZ2VcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInJlc2l6ZVwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHNjcmVlbj8ub3JpZW50YXRpb24sIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQsIFwiZnVsbHNjcmVlbmNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIiksIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKSwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJmb2N1c2luXCIsICgpID0+IHtcblx0XHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdFx0aWYgKGlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG5cdFx0XHRsYXlvdXRMb2NrVyA9IE1hdGgubWF4KGxheW91dExvY2tXLCBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAsIE51bWJlcih3aW5kb3cudmlzdWFsVmlld3BvcnQ/LndpZHRoKSB8fCAwKTtcblx0XHRcdGxheW91dExvY2tIID0gTWF0aC5tYXgobGF5b3V0TG9ja0gsIE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDAsIE51bWJlcih3aW5kb3cudmlzdWFsVmlld3BvcnQ/LmhlaWdodCkgfHwgMCk7XG5cdFx0fVxuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0XHR1cGRhdGUoKTtcblx0fSwge1xuXHRcdGNhcHR1cmU6IHRydWUsXG5cdFx0cGFzc2l2ZTogdHJ1ZVxuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJmb2N1c291dFwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHR1cGRhdGUoKTtcblx0cnVuV2hlbklkbGUoKCkgPT4gdXBkYXRlKCksIDEwMCk7XG5cdHJldHVybiAoKSA9PiB1bnN1YnNjcmliZXJzLmZvckVhY2goKHVuc3ViKSA9PiB1bnN1YigpKTtcbn07XG52YXIgZml4T3JpZW50VG9TY3JlZW4gPSAoZWxlbWVudCkgPT4ge1xuXHRpZiAoIWVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnM/LihcIm5hdGl2ZS1wb3J0cmFpdC1vcHRpbWl6ZWRcIikpIHtcblx0XHRlbGVtZW50Py5jbGFzc0xpc3Q/LmFkZD8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKTtcblx0XHRyZXR1cm4gd2hlbkFueVNjcmVlbkNoYW5nZXMoKCkgPT4ge1xuXHRcdFx0Y29uc3QgbmV4dCA9IG9yaWVudGF0aW9uTnVtYmVyTWFwPy5bZ2V0Q29ycmVjdE9yaWVudGF0aW9uKCldID8/IDA7XG5cdFx0XHRlbGVtZW50Lm9yaWVudCA9IG5leHQ7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZT8uKFwib3JpZW50XCIsIFN0cmluZyhuZXh0KSk7XG5cdFx0XHRlbGVtZW50LnN0eWxlPy5zZXRQcm9wZXJ0eT8uKFwiLS1vcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHR9KTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL01lYXN1cmUudHNcbnZhciBjdHggPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEsIDEpLmdldENvbnRleHQoXCIyZFwiKTtcbnZhciBpbml0VGV4dFN0eWxlID0gKGVsZW1lbnQsIGN0eCkgPT4ge1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgXCJcIik7XG5cdGlmIChjdHggJiYgc3R5bGUpIHtcblx0XHRjb25zdCBmb250V2VpZ2h0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtd2VpZ2h0XCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0Y29uc3QgZm9udFNpemUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpIHx8IFwiMTZweFwiO1xuXHRcdGNvbnN0IGZvbnRGYW1pbHkgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1mYW1pbHlcIikgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0XHRjb25zdCBmb250U3RyZXRjaCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXN0cmV0Y2hcIikgfHwgXCJub3JtYWxcIjtcblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRTdHJldGNoID0gZm9udFN0cmV0Y2guaW5jbHVkZXMoXCIlXCIpID8gXCJub3JtYWxcIiA6IGZvbnRTdHJldGNoO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5sZXR0ZXJTcGFjaW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImxldHRlci1zcGFjaW5nXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRLZXJuaW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQta2VybmluZ1wiKSB8fCBcImF1dG9cIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFZhcmlhbnRDYXBzID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtdmFyaWFudC1jYXBzXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnQgPSBgJHtmb250V2VpZ2h0fSAke2ZvbnRTaXplfSAke2ZvbnRGYW1pbHl9YDtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG59O1xudmFyIG1lYXN1cmVUZXh0ID0gKHRleHQsIGVsZW1lbnQpID0+IHtcblx0aWYgKGN0eCkge1xuXHRcdGluaXRUZXh0U3R5bGUoZWxlbWVudCwgY3R4KTtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG5cdHJldHVybiB7IHdpZHRoOiBudWxsIH07XG59O1xudmFyIG1lYXN1cmVJbnB1dEluRm9jdXMgPSAoaW5wdXQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0LnZhbHVlLnNsaWNlKDAsIGlucHV0LnNlbGVjdGlvbkVuZCB8fCAwKTtcblx0cmV0dXJuIG1lYXN1cmVUZXh0KHRleHQsIGlucHV0KTtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb24gPSAoaW5wdXQsIHBvaW50KSA9PiB7XG5cdGNvbnN0IHRleHQgPSBpbnB1dD8udmFsdWUgfHwgXCJcIjtcblx0aWYgKGN0eCkge1xuXHRcdGluaXRUZXh0U3R5bGUoaW5wdXQsIGN0eCk7XG5cdFx0bGV0IGN1cnJlbnRXaWR0aCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjdXJyZW50V2lkdGggPSBjdHgubWVhc3VyZVRleHQodGV4dC5zbGljZSgwLCBpKSk/LndpZHRoO1xuXHRcdFx0aWYgKGN1cnJlbnRXaWR0aCA9PSBudWxsKSByZXR1cm4gdGV4dC5sZW5ndGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoICE9IG51bGwgJiYgY3VycmVudFdpZHRoID49IHBvaW50WzBdKSByZXR1cm4gTWF0aC5tYXgoaSAtIDEsIDApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGV4dC5sZW5ndGg7XG59O1xudmFyIGNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCA9IChpbnB1dCwgY2xpZW50KSA9PiB7XG5cdGNvbnN0IGJveCA9IGlucHV0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRjb25zdCBwb2ludCA9IFtjbGllbnRbMF0gLSBib3gubGVmdCAvIHVuZml4ZWRDbGllbnRab29tKCksIGNsaWVudFsxXSAtIGJveC50b3AgLyB1bmZpeGVkQ2xpZW50Wm9vbSgpXTtcblx0cmV0dXJuIGNvbXB1dGVDYXJldFBvc2l0aW9uKGlucHV0LCBwb2ludCk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvTGF1bmNoZXJHcmlkLnRzXG52YXIgcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQgPSAoZWwsIGxheW91dE92ZXJyaWRlKSA9PiB7XG5cdGNvbnN0IGMgPSBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtY29sdW1uc1wiKSB8fCBcIlwiLCAxMCk7XG5cdGNvbnN0IHIgPSBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtcm93c1wiKSB8fCBcIlwiLCAxMCk7XG5cdGNvbnN0IGJhc2UgPSBub3JtYWxpemVHcmlkTGF5b3V0KGxheW91dE92ZXJyaWRlID8/IFs0LCA4XSk7XG5cdHJldHVybiBbTnVtYmVyLmlzRmluaXRlKGMpICYmIGMgPiAwID8gYyA6IGJhc2VbMF0sIE51bWJlci5pc0Zpbml0ZShyKSAmJiByID4gMCA/IHIgOiBiYXNlWzFdXTtcbn07XG52YXIgcmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50ID0gKGdyaWRTeXN0ZW0sIGNsaWVudFBvaW50LCBhcmdzLCBtb2RlID0gXCJmbG9vclwiKSA9PiB7XG5cdGlmICghZ3JpZFN5c3RlbSkgcmV0dXJuIFswLCAwXTtcblx0Y29uc3QgcmVjdCA9IGdyaWRTeXN0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKTtcblx0aWYgKCFyZWN0KSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCBsYXlvdXQgPSByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudChncmlkU3lzdGVtLCBhcmdzPy5sYXlvdXQpO1xuXHRjb25zdCBvcmllbnQgPSBvcmllbnRPZihncmlkU3lzdGVtKTtcblx0Y29uc3QgY3MgPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/LihncmlkU3lzdGVtKTtcblx0Y29uc3QgcGwgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nTGVmdCkgfHwgMDtcblx0Y29uc3QgcHQgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nVG9wKSB8fCAwO1xuXHRjb25zdCBwciA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdSaWdodCkgfHwgMDtcblx0Y29uc3QgcGIgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nQm90dG9tKSB8fCAwO1xuXHRjb25zdCBjb250ZW50VyA9IE1hdGgubWF4KDEsIChyZWN0LndpZHRoIHx8IGdyaWRTeXN0ZW0uY2xpZW50V2lkdGggfHwgMSkgLSBwbCAtIHByKTtcblx0Y29uc3QgY29udGVudEggPSBNYXRoLm1heCgxLCAocmVjdC5oZWlnaHQgfHwgZ3JpZFN5c3RlbS5jbGllbnRIZWlnaHQgfHwgMSkgLSBwdCAtIHBiKTtcblx0Y29uc3QgY3NDb29yZCA9IFsoY2xpZW50UG9pbnQ/LlswXSB8fCAwKSAtIHJlY3QubGVmdCAtIHBsLCAoY2xpZW50UG9pbnQ/LlsxXSB8fCAwKSAtIHJlY3QudG9wIC0gcHRdO1xuXHRyZXR1cm4gcmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsKGNzQ29vcmQsIFtjb250ZW50VywgY29udGVudEhdLCBsYXlvdXQsIG9yaWVudCwge1xuXHRcdG1vZGUsXG5cdFx0cmVkaXJlY3Q6IHtcblx0XHRcdGl0ZW06IGFyZ3M/Lml0ZW0sXG5cdFx0XHRsaXN0OiBhcmdzPy5saXN0LFxuXHRcdFx0aXRlbXM6IGFyZ3M/Lml0ZW1zXG5cdFx0fVxuXHR9KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9kZWNvci9BbmltYXRpb24udHNcbnZhciBhbmltYXRlU2hvdyA9IGFzeW5jICh0YXJnZXQpID0+IHtcblx0Y29uc3QgYW5pbWF0aW9uRG9uZSA9ICgpID0+IHtcblx0XHRpZiAoIXRhcmdldD8uaGFzQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSkge1xuXHRcdFx0dGFyZ2V0Py5yZW1vdmVBdHRyaWJ1dGU/LihcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIik7XG5cdFx0XHR0YXJnZXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJ1Mi1hcHBlYXJcIiwge1xuXHRcdFx0XHRkZXRhaWw6IHt9LFxuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9O1xuXHRpZiAoIXRhcmdldD8uaGFzQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSAmJiB0YXJnZXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJ1Mi1iZWZvcmUtc2hvd1wiLCB7XG5cdFx0ZGV0YWlsOiB7fSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpKSB7XG5cdFx0aWYgKCFtYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIikubWF0Y2hlcyAmJiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIikgJiYgIXRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWluc3RhbnRcIikgJiYgdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpID09IG51bGwpIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIsIFwiXCIpO1xuXHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKSAmJiB0YXJnZXQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikgPT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgYW5pbWF0ZSA9IHRhcmdldC5hbmltYXRlKFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IDAsXG5cdFx0XHRcdFx0XCItLW9wYWNpdHlcIjogMCxcblx0XHRcdFx0XHRcIi0tc2NhbGVcIjogLjgsXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJub25lXCIsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJub25lXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IC4wMSxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRkaXNwbGF5OiBcIm5vbmVcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogMSxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAxLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAxLFxuXHRcdFx0XHRcdGRpc3BsYXk6IFwicmV2ZXJ0LWxheWVyXCIsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJyZXZlcnQtbGF5ZXJcIlxuXHRcdFx0XHR9XG5cdFx0XHRdLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiBpc01vYmlsZSgpID8gMTAwIDogODAsXG5cdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0ZGVsYXk6IDBcblx0XHRcdH0pO1xuXHRcdFx0bGV0IGRvbmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGVuZEFuaW1hdGlvbiA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdGV2ZW50cz8uZm9yRWFjaD8uKChldmVudCkgPT4gZXZlbnQ/LigpKTtcblx0XHRcdFx0YW5pbWF0ZS5jdXJyZW50VGltZSA9IDE7XG5cdFx0XHRcdGFuaW1hdGUuZmluaXNoKCk7XG5cdFx0XHRcdGFuaW1hdGlvbkRvbmU/LigpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGV2ZW50cyA9IGFkZEV2ZW50cyh0YXJnZXQsIHtcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtaGlkZVwiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRcInUyLWJlZm9yZS1zaG93XCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV1cblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgYW5pbWF0ZS5maW5pc2hlZDtcblx0XHRcdGVuZEFuaW1hdGlvbj8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHsgcmVzb2x2ZSwgcmVqZWN0LCBwcm9taXNlIH0gPSBQcm9taXNlLndpdGhSZXNvbHZlcnMoKTtcblx0XHRcdGNvbnN0IHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNvbHZlKTtcblx0XHRcdGxldCBkb25lID0gZmFsc2U7XG5cdFx0XHRjb25zdCBlbmRBbmltYXRpb24gPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChkb25lKSByZXR1cm47XG5cdFx0XHRcdGRvbmUgPSB0cnVlO1xuXHRcdFx0XHRldmVudHM/LmZvckVhY2g/LigoZXZlbnQpID0+IGV2ZW50Py4oKSk7XG5cdFx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSk7XG5cdFx0XHRcdHJlc29sdmUocGVyZm9ybWFuY2Uubm93KCkpO1xuXHRcdFx0XHRhbmltYXRpb25Eb25lPy4oKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBldmVudHMgPSBhZGRFdmVudHModGFyZ2V0LCB7XG5cdFx0XHRcdFwidTItYmVmb3JlLWhpZGVcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtc2hvd1wiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dXG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IHByb21pc2U7XG5cdFx0XHRlbmRBbmltYXRpb24/LigpO1xuXHRcdH1cblx0fVxufTtcbnZhciBhbmltYXRlSGlkZSA9IGFzeW5jICh0YXJnZXQpID0+IHtcblx0Y29uc3QgYW5pbWF0aW9uRG9uZSA9ICgpID0+IHtcblx0XHRpZiAodGFyZ2V0Py5oYXNBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpKSB7XG5cdFx0XHR0YXJnZXQ/LnJlbW92ZUF0dHJpYnV0ZT8uKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKTtcblx0XHRcdHRhcmdldD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcInUyLWhpZGRlblwiLCB7XG5cdFx0XHRcdGRldGFpbDoge30sXG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdH07XG5cdGlmICh0YXJnZXQ/Lmhhc0F0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikgJiYgdGFyZ2V0Py5kaXNwYXRjaEV2ZW50Py4obmV3IEN1c3RvbUV2ZW50KFwidTItYmVmb3JlLWhpZGVcIiwge1xuXHRcdGRldGFpbDoge30sXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdH0pKSkge1xuXHRcdGlmICghbWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpXCIpLm1hdGNoZXMgJiYgIXRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpICYmICF0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1pbnN0YW50XCIpKSB0YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiLCBcIlwiKTtcblx0XHRpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIikpIHtcblx0XHRcdGNvbnN0IGFuaW1hdGUgPSB0YXJnZXQuYW5pbWF0ZShbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdFx0b2Zmc2V0OiAwLFxuXHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdFx0b2Zmc2V0OiAuOTksXG5cdFx0XHRcdFx0XCItLW9wYWNpdHlcIjogMCxcblx0XHRcdFx0XHRcIi0tc2NhbGVcIjogLjgsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJub25lXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IDEsXG5cdFx0XHRcdFx0XCItLW9wYWNpdHlcIjogMCxcblx0XHRcdFx0XHRcIi0tc2NhbGVcIjogLjgsXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJub25lXCIsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJub25lXCJcblx0XHRcdFx0fVxuXHRcdFx0XSwge1xuXHRcdFx0XHRkdXJhdGlvbjogMTIwLFxuXHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdGRlbGF5OiAwXG5cdFx0XHR9KTtcblx0XHRcdGxldCBkb25lID0gZmFsc2U7XG5cdFx0XHRjb25zdCBlbmRBbmltYXRpb24gPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChkb25lKSByZXR1cm47XG5cdFx0XHRcdGRvbmUgPSB0cnVlO1xuXHRcdFx0XHRldmVudHM/LmZvckVhY2g/LigoZXZlbnQpID0+IGV2ZW50Py4oKSk7XG5cdFx0XHRcdGFuaW1hdGUuY3VycmVudFRpbWUgPSAxO1xuXHRcdFx0XHRhbmltYXRlLmZpbmlzaCgpO1xuXHRcdFx0XHRhbmltYXRpb25Eb25lPy4oKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBldmVudHMgPSBhZGRFdmVudHModGFyZ2V0LCB7IFwidTItYmVmb3JlLXNob3dcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHR9XSB9KTtcblx0XHRcdGF3YWl0IGFuaW1hdGUuZmluaXNoZWQ7XG5cdFx0XHRlbmRBbmltYXRpb24/LigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCB7IHJlc29sdmUsIHJlamVjdCwgcHJvbWlzZSB9ID0gUHJvbWlzZS53aXRoUmVzb2x2ZXJzKCk7XG5cdFx0XHRjb25zdCByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzb2x2ZSk7XG5cdFx0XHRsZXQgZG9uZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgZW5kQW5pbWF0aW9uID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoZG9uZSkgcmV0dXJuO1xuXHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRzPy5mb3JFYWNoPy4oKGV2ZW50KSA9PiBldmVudD8uKCkpO1xuXHRcdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpO1xuXHRcdFx0XHRyZXNvbHZlKHBlcmZvcm1hbmNlLm5vdygpKTtcblx0XHRcdFx0YW5pbWF0aW9uRG9uZT8uKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZXZlbnRzID0gYWRkRXZlbnRzKHRhcmdldCwge1xuXHRcdFx0XHRcInUyLWJlZm9yZS1oaWRlXCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFwidTItYmVmb3JlLXNob3dcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XVxuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBwcm9taXNlO1xuXHRcdFx0ZW5kQW5pbWF0aW9uPy4oKTtcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9PYnNlcnZlci50c1xudmFyIG9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xudmFyIG9uQm9yZGVyT2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkJvcmRlck9ic2VydmVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkNvbnRlbnRPYnNlcnZlXCIpO1xudmFyIG9uQ29udGVudE9ic2VydmUkMSA9IGdsb2JhbFRoaXNbb25Db250ZW50T2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVud3JhcEZyb21RdWVyeSA9IChlbGVtZW50KSA9PiB7XG5cdGlmICh0eXBlb2YgZWxlbWVudD8uY3VycmVudCA9PSBcIm9iamVjdFwiKSBlbGVtZW50ID0gZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50Py5jdXJyZW50ID8/ICh0eXBlb2YgZWxlbWVudD8uc2VsZiA9PSBcIm9iamVjdFwiID8gZWxlbWVudD8uc2VsZiA6IG51bGwpID8/IGVsZW1lbnQ7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBub3JtYWxpemVTZWxlY3RvciA9IChzZWxlY3RvciwgZmFsbGJhY2sgPSBcIipcIikgPT4ge1xuXHRpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsbGJhY2s7XG5cdHJldHVybiBzZWxlY3Rvci50cmltKCkgfHwgZmFsbGJhY2s7XG59O1xudmFyIHNhZmVRdWVyeVNlbGVjdG9yQWxsID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuXHRpZiAoIWVsIHx8IHR5cGVvZiBlbC5xdWVyeVNlbGVjdG9yQWxsICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBbXTtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IsIFwiXCIpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIFtdO1xuXHR0cnkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSB8fCBbXSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBbXTtcblx0fVxufTtcbnZhciBzYWZlTWF0Y2hlcyA9IChlbCwgc2VsZWN0b3IpID0+IHtcblx0aWYgKCFlbCB8fCB0eXBlb2YgZWwubWF0Y2hlcyAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLCBcIlwiKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gISFlbC5tYXRjaGVzKHNlbCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBvYnNlcnZlQ29udGVudEJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQ29udGVudE9ic2VydmUkMS5oYXMoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSkpIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgY29udGVudEJveFNpemUgPSBlbnRyeS5jb250ZW50Qm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGNvbnRlbnRCb3hTaXplKSBjYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiPy4oY29udGVudEJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50LmNsaWVudFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50LmNsaWVudEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkNvbnRlbnRPYnNlcnZlJDEuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG5cdFx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImNvbnRlbnQtYm94XCIgfSk7XG5cdH1cblx0b25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uc3BsaWNlPy4ob25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uaW5kZXhPZihjYikgfHwgLTEsIDEpIH07XG59O1xudmFyIG9ic2VydmVCb3JkZXJCb3ggPSAoZWxlbWVudCwgY2IpID0+IHtcblx0aWYgKCFvbkJvcmRlck9ic2VydmUkMS5oYXMoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSkpIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihib3JkZXJCb3hTaXplLCBvYnNlcnZlcikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNiPy4oe1xuXHRcdFx0aW5saW5lU2l6ZTogZWxlbWVudC5vZmZzZXRXaWR0aCxcblx0XHRcdGJsb2NrU2l6ZTogZWxlbWVudC5vZmZzZXRIZWlnaHRcblx0XHR9LCBvYnNlcnZlcik7XG5cdFx0b25Cb3JkZXJPYnNlcnZlJDEuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG5cdFx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxuXHRvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnB1c2g/LihjYik7XG5cdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uc3BsaWNlPy4ob25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZSA9IChlbGVtZW50LCBhdHRyaWJ1dGUsIGNiKSA9PiB7XG5cdGlmICh0eXBlb2YgZWxlbWVudD8uc2VsZWN0b3IgPT0gXCJzdHJpbmdcIikgcmV0dXJuIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKGVsZW1lbnQsIGVsZW1lbnQ/LnNlbGVjdG9yLCBhdHRyaWJ1dGUsIGNiKTtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoKGF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV0pLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSAmJiBhdHRyaWJ1dGVMaXN0LmhhcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkgY2IobXV0YXRpb24sIG9ic2VydmVyKTtcblx0fSk7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uYXR0cmlidXRlTGlzdF1cblx0fSk7XG5cdGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0OiBlbGVtZW50LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yLCBhdHRyaWJ1dGUsIGNiKSA9PiB7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoWy4uLmF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV1dLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRjb25zdCBhZGRlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGFkZGVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdFx0cmVtb3ZlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdFx0Wy4uLm5ldyBTZXQoYWRkZWROb2RlcyldLmZpbHRlcigoZWwpID0+IHNhZmVNYXRjaGVzKGVsLCBzZWwpKT8ubWFwPy4oKHRhcmdldCkgPT4ge1xuXHRcdFx0XHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuXHRcdFx0XHRcdGNiKHtcblx0XHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHRcdFx0XHRcdH0sIG9ic2VydmVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKHNhZmVNYXRjaGVzKG11dGF0aW9uLnRhcmdldCwgc2VsKSAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlXG5cdH0pO1xuXHRzYWZlUXVlcnlTZWxlY3RvckFsbChlbGVtZW50LCBzZWwpLm1hcCgodGFyZ2V0KSA9PiBhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gY2Ioe1xuXHRcdHRhcmdldCxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcbnZhciBvYnNlcnZlQnlTZWxlY3RvciA9IChlbGVtZW50LCBzZWxlY3RvciA9IFwiKlwiLCBjYiA9IChtdXQsIG9icykgPT4ge30pID0+IHtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRjb25zdCB1bndyYXBOb2Rlc0J5U2VsZWN0b3IgPSAobm9kZXMpID0+IHtcblx0XHRjb25zdCAkbm9kZXMgPSBBcnJheS5mcm9tKG5vZGVzIHx8IFtdKSB8fCBbXTtcblx0XHQkbm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRyZXR1cm4gWy4uLkFycmF5LmZyb20obmV3IFNldCgkbm9kZXMpLnZhbHVlcygpKV0uZmlsdGVyKChlbCkgPT4gc2FmZU1hdGNoZXMoZWwsIHNlbCkpO1xuXHR9O1xuXHRsZXQgb2JSZWYgPSBudWxsO1xuXHRjb25zdCBoYW5kbGVNdXRhdGlvbiA9IChtdXRhdGlvbikgPT4ge1xuXHRcdGNvbnN0IG9ic2VydmVyID0gb2JSZWY/LmRlcmVmPy4oKTtcblx0XHRjb25zdCBhZGRlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuXHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuXHRcdGlmIChhZGRlZE5vZGVzLmxlbmd0aCA+IDAgfHwgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdFx0dHlwZTogbXV0YXRpb24udHlwZSxcblx0XHRcdHRhcmdldDogbXV0YXRpb24udGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IG11dGF0aW9uLm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IG11dGF0aW9uLm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiBtdXRhdGlvbi5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzLFxuXHRcdFx0cmVtb3ZlZE5vZGVzXG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlT3V0Q29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUZvY3VzQ2xpY2sgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBmYWN0b3JzID0ge1xuXHRcdHBhc3NpdmU6IHRydWUsXG5cdFx0Y2FwdHVyZTogZmFsc2Vcblx0fTtcblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXNcIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtdmlzaWJsZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikgaGFuZGxlTXV0YXRpb24obXV0YXRpb24pO1xuXHR9KTtcblx0b2JSZWYgPSBuZXcgV2Vha1JlZihvYnNlcnZlcik7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlXG5cdH0pO1xuXHRjb25zdCBzZWxlY3RlZCA9IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQsIHNlbCk7XG5cdGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSBjYj8uKHtcblx0XHRhZGRlZE5vZGVzOiBzZWxlY3RlZCxcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIG9ic2VydmVyKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL0FwcGVhci50c1xudmFyIGluaXRWaXNpYmlsaXR5ID0gYXN5bmMgKFJPT1QgPSBkb2N1bWVudC5ib2R5KSA9PiB7XG5cdG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKFJPT1QsIFwiKlwiLCBcImRhdGEtaGlkZGVuXCIsIChtdXRhdGlvbiwgb2JzZXJ2ZXIpID0+IHtcblx0XHRpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PSBcImRhdGEtaGlkZGVuXCIpIHtcblx0XHRcdGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRcdGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1oaWRkZW5cIikgIT09IG11dGF0aW9uLm9sZFZhbHVlKSBQcm9taXNlPy50cnk/Lih0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1oaWRkZW5cIikgIT0gbnVsbCA/IGFuaW1hdGVIaWRlIDogYW5pbWF0ZVNob3csIHRhcmdldCwgb2JzZXJ2ZXIpPy5jYXRjaD8uKGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpKTtcblx0XHR9XG5cdH0pO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL1NoYXBlLnRzXG52YXIgV2F2eVNoYXBlZENpcmNsZSA9IChzdGVwcyA9IDEwMCwgYW1wbGl0dWRlID0gLjA1LCBmcmVxID0gOCkgPT4ge1xuXHRjb25zdCBwb2ludHMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSsrKSBwb2ludHMucHVzaChpIC8gc3RlcHMpO1xuXHRjb25zdCBhbmdsZSA9IChzdGVwKSA9PiB7XG5cdFx0cmV0dXJuIGBjYWxjKCR7c3RlcH1yYWQgKiBwaSAqIDIpYDtcblx0fTtcblx0Y29uc3QgdmFyaWFudCA9IChzdGVwKSA9PiB7XG5cdFx0cmV0dXJuIGBjYWxjKGNhbGMoY29zKGNhbGModmFyKC0tY2xpcC1mcmVxLCA4KSAqICR7YW5nbGUoc3RlcCl9KSkgKiAwLjUgKyAwLjUpICogdmFyKC0tY2xpcC1hbXBsaXR1ZGUsIDApKWA7XG5cdH07XG5cdGNvbnN0IGZ1bmMgPSAoc3RlcCkgPT4gW2BjYWxjKGNhbGMoMC41ICsgY2FsYyhjb3MoJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgLCBgY2FsYyhjYWxjKDAuNSArIGNhbGMoc2luKCR7YW5nbGUoc3RlcCl9KSAqIGNhbGMoMC41IC0gJHt2YXJpYW50KHN0ZXApfSkpKSAqIHZhcigtLWljb24tc2l6ZSwgMTAwJSkpYF07XG5cdHJldHVybiB7XG5cdFx0XCItLWNsaXAtYW1wbGl0dWRlXCI6IGFtcGxpdHVkZSxcblx0XHRcIi0tY2xpcC1mcmVxXCI6IGZyZXEsXG5cdFx0XCItLWNsaXAtcGF0aFwiOiBgcG9seWdvbigke3BvaW50cy5tYXAoKHN0ZXApID0+IHtcblx0XHRcdHJldHVybiBmdW5jKHN0ZXApLmpvaW4oXCIgXCIpO1xuXHRcdH0pLmpvaW4oXCIsIFwiKX0pYFxuXHR9O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL1N0eWxlLnRzXG52YXIgT1dORVIgPSBcIkRPTVwiO1xudmFyIHN0eWxlRWxlbWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpIDogbnVsbDtcbmlmIChzdHlsZUVsZW1lbnQpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oc3R5bGVFbGVtZW50KTtcblx0c3R5bGVFbGVtZW50LmRhdGFzZXQub3duZXIgPSBPV05FUjtcbn1cbnZhciBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0ID0gKCkgPT4gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGdsb2JhbFRoaXMuQ1NTU3R5bGVTaGVldCA9PT0gXCJmdW5jdGlvblwiO1xudmFyIGNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudCA9IChjc3MpID0+IHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIgJiYgL0BpbXBvcnRcXGIvaS50ZXN0KGNzcyk7XG52YXIgaXNMYXllckJsb2NrUnVsZSA9IChydWxlKSA9PiB0eXBlb2YgQ1NTTGF5ZXJCbG9ja1J1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgcnVsZSBpbnN0YW5jZW9mIENTU0xheWVyQmxvY2tSdWxlO1xudmFyIGdldE9yQ3JlYXRlTGF5ZXJSdWxlID0gKHNoZWV0LCBsYXllck5hbWUpID0+IHtcblx0aWYgKCFzaGVldCB8fCAhbGF5ZXJOYW1lKSByZXR1cm4gdm9pZCAwO1xuXHRjb25zdCBydWxlcyA9IEFycmF5LmZyb20oc2hlZXQuY3NzUnVsZXMgfHwgW10pO1xuXHRjb25zdCBleGlzdGluZyA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IGlzTGF5ZXJCbG9ja1J1bGUocnVsZSkgJiYgcnVsZS5uYW1lID09PSBsYXllck5hbWUpO1xuXHRpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcblx0dHJ5IHtcblx0XHRjb25zdCBydWxlSW5kZXggPSBzaGVldC5pbnNlcnRSdWxlKGBAbGF5ZXIgJHtsYXllck5hbWV9IHt9YCwgcnVsZXMubGVuZ3RoKTtcblx0XHRjb25zdCBjcmVhdGVkID0gc2hlZXQuY3NzUnVsZXM/LltydWxlSW5kZXhdO1xuXHRcdHJldHVybiBpc0xheWVyQmxvY2tSdWxlKGNyZWF0ZWQpID8gY3JlYXRlZCA6IHZvaWQgMDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuO1xuXHR9XG59O1xudmFyIHNldFN0eWxlVVJMID0gKGJhc2UsIHVybCwgbGF5ZXIgPSBcIlwiKSA9PiB7XG5cdGJhc2VbMF1bYmFzZVsxXV0gPSBiYXNlWzFdID09IFwiaW5uZXJIVE1MXCIgPyBgQGltcG9ydCB1cmwoXCIke3VybH1cIikgJHtsYXllciAmJiB0eXBlb2YgbGF5ZXIgPT0gXCJzdHJpbmdcIiA/IGBsYXllcigke2xheWVyfSlgIDogXCJcIn07YCA6IHVybDtcbn07XG52YXIgc2V0U3R5bGVSdWxlcyA9IChjbGFzc2VzKSA9PiB7XG5cdHJldHVybiBjbGFzc2VzPy5tYXA/LigoYXJncykgPT4gc2V0U3R5bGVSdWxlKC4uLmFyZ3MpKTtcbn07XG52YXIgZ2V0U3R5bGVMYXllciA9IChsYXllck5hbWUsIHNoZWV0KSA9PiB7XG5cdHNoZWV0IHx8PSBzdHlsZUVsZW1lbnQ/LnNoZWV0O1xuXHRyZXR1cm4gZ2V0T3JDcmVhdGVMYXllclJ1bGUoc2hlZXQsIGxheWVyTmFtZSk7XG59O1xudmFyIHN0eWxlSWRDb3VudGVyID0gMDtcbnZhciBpc1NoYWRvd1Jvb3QgPSAodmFsdWUpID0+IHR5cGVvZiBTaGFkb3dSb290ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbnZhciBpc0RvY3VtZW50ID0gKHZhbHVlKSA9PiB0eXBlb2YgRG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBEb2N1bWVudDtcbnZhciBpc0VsZW1lbnQkMSA9ICh2YWx1ZSkgPT4gdHlwZW9mIEVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50O1xudmFyIGVzY2FwZUNTU0lkZW50aWZpZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIENTUy5lc2NhcGUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIENTUy5lc2NhcGUodmFsdWUpO1xuXHRyZXR1cm4gQXJyYXkuZnJvbSh2YWx1ZSkubWFwKChjaGFyKSA9PiBgXFxcXCR7Y2hhci5jb2RlUG9pbnRBdCgwKS50b1N0cmluZygxNil9IGApLmpvaW4oXCJcIik7XG59O1xudmFyIGNyZWF0ZVN0eWxlSWQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgY3J5cHRvICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjcnlwdG8ucmFuZG9tVVVJRCA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0cmV0dXJuIGB1eC0ke0RhdGUubm93KCkudG9TdHJpbmcoMzYpfS0keygrK3N0eWxlSWRDb3VudGVyKS50b1N0cmluZygzNil9YDtcbn07XG52YXIgam9pblNjb3BlZFNlbGVjdG9yID0gKHNjb3BlLCBzZWxlY3RvcikgPT4ge1xuXHRzZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKTtcblx0aWYgKCFzY29wZSkgcmV0dXJuIHNlbGVjdG9yO1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gc2NvcGU7XG5cdGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKFwiOjpcIikpIHJldHVybiBgJHtzY29wZX0ke3NlbGVjdG9yfWA7XG5cdHJldHVybiBgJHtzY29wZX0gJHtzZWxlY3Rvcn1gO1xufTtcbnZhciBmaW5kU3R5bGVSdWxlID0gKHNoZWV0LCBmdWxsU2VsZWN0b3IsIHNjb3BlLCBzZWxlY3RvcikgPT4ge1xuXHRjb25zdCBydWxlcyA9IEFycmF5LmZyb20oc2hlZXQ/LmNzc1J1bGVzIHx8IFtdKTtcblx0Y29uc3QgZXhwZWN0ZWQgPSBmdWxsU2VsZWN0b3IudHJpbSgpO1xuXHRjb25zdCByZXF1ZXN0ZWQgPSBzZWxlY3Rvci50cmltKCk7XG5cdHJldHVybiBydWxlcy5maW5kSW5kZXgoKHJ1bGUpID0+IHtcblx0XHRpZiAoIShydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlKSkgcmV0dXJuIGZhbHNlO1xuXHRcdGNvbnN0IGFjdHVhbCA9IHJ1bGUuc2VsZWN0b3JUZXh0Py50cmltPy4oKSA/PyBcIlwiO1xuXHRcdGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSByZXR1cm4gdHJ1ZTtcblx0XHRpZiAocmVxdWVzdGVkICYmIGFjdHVhbC5lbmRzV2l0aChyZXF1ZXN0ZWQpKSByZXR1cm4gYWN0dWFsLnNsaWNlKDAsIGFjdHVhbC5sZW5ndGggLSByZXF1ZXN0ZWQubGVuZ3RoKS50cmltKCkgPT09IHNjb3BlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59O1xudmFyIGdldFN0eWxlUnVsZSA9IChzZWxlY3Rvciwgc2hlZXQsIGxheWVyTmFtZSA9IFwidXgtcXVlcnlcIiwgYmFzaXMgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBpc1NoYWRvd1Jvb3QoYmFzaXMpIHx8IGlzRG9jdW1lbnQoYmFzaXMpID8gYmFzaXMgOiBiYXNpcz8uZ2V0Um9vdE5vZGU/LigpID8/ICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xuXHRjb25zdCBiYXNpc0VsZW1lbnQgPSBpc0VsZW1lbnQkMShiYXNpcykgPyBiYXNpcyA6IG51bGw7XG5cdGxldCBzY29wZSA9IFwiXCI7XG5cdGlmIChiYXNpc0VsZW1lbnQ/LmlkKSBzY29wZSA9IGAjJHtlc2NhcGVDU1NJZGVudGlmaWVyKGJhc2lzRWxlbWVudC5pZCl9YDtcblx0ZWxzZSBpZiAoYmFzaXNFbGVtZW50KSB7XG5cdFx0bGV0IHN0eWxlSWQgPSBiYXNpc0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZS1pZFwiKTtcblx0XHRpZiAoIXN0eWxlSWQpIHtcblx0XHRcdHN0eWxlSWQgPSBjcmVhdGVTdHlsZUlkKCk7XG5cdFx0XHRiYXNpc0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZS1pZFwiLCBzdHlsZUlkKTtcblx0XHR9XG5cdFx0c2NvcGUgPSBgW2RhdGEtc3R5bGUtaWQ9XCIke2VzY2FwZUNTU0lkZW50aWZpZXIoc3R5bGVJZCl9XCJdYDtcblx0fSBlbHNlIGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkpIHNjb3BlID0gXCI6aG9zdFwiO1xuXHRlbHNlIGlmIChpc0RvY3VtZW50KHJvb3QpKSBzY29wZSA9IFwiOnJvb3RcIjtcblx0bGV0IHN0eWxlRWxlbWVudCA9IG51bGw7XG5cdGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLXV4LXF1ZXJ5XVwiKTtcblx0XHRpZiAoIXN0eWxlRWxlbWVudCAmJiB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0XHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXV4LXF1ZXJ5XCIsIFwiXCIpO1xuXHRcdFx0cm9vdC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0fSBlbHNlIHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudEdsb2JhbCgpO1xuXHRzaGVldCB8fD0gc3R5bGVFbGVtZW50Py5zaGVldDtcblx0aWYgKCFzaGVldCkgcmV0dXJuO1xuXHRpZiAobGF5ZXJOYW1lKSByZXR1cm4gZ2V0U3R5bGVSdWxlKHNlbGVjdG9yLCBnZXRTdHlsZUxheWVyKGxheWVyTmFtZSwgc2hlZXQpLCBudWxsLCBiYXNpcyk7XG5cdGNvbnN0IGZ1bGxTZWxlY3RvciA9IGpvaW5TY29wZWRTZWxlY3RvcihzY29wZSwgc2VsZWN0b3IpO1xuXHRsZXQgcnVsZUlkID0gZmluZFN0eWxlUnVsZShzaGVldCwgZnVsbFNlbGVjdG9yLCBzY29wZSwgc2VsZWN0b3IpO1xuXHRpZiAocnVsZUlkID09PSAtMSkgcnVsZUlkID0gc2hlZXQuaW5zZXJ0UnVsZShgJHtmdWxsU2VsZWN0b3J9IHt9YCk7XG5cdHJldHVybiBzaGVldC5jc3NSdWxlcz8uW3J1bGVJZF07XG59O1xuZnVuY3Rpb24gc3R5bGVFbGVtZW50R2xvYmFsKCkge1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50ID8/IG51bGw7XG59XG52YXIgcHJvbWlzZU9yRGlyZWN0ID0gKHByb21pc2UsIGNiKSA9PiB7XG5cdGlmICh0eXBlb2YgcHJvbWlzZT8udGhlbiA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBwcm9taXNlPy50aGVuPy4oY2IpO1xuXHRyZXR1cm4gY2IocHJvbWlzZSk7XG59O1xudmFyIGJsb2JVUkxNYXBTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGJsb2JVUkxNYXBcIik7XG52YXIgYmxvYlVSTE1hcCA9IGdsb2JhbFRoaXNbYmxvYlVSTE1hcFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGNhY2hlTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BjYWNoZU1hcFwiKTtcbnZhciBjYWNoZU1hcCA9IGdsb2JhbFRoaXNbY2FjaGVNYXBTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGZldGNoQW5kQ2FjaGUgPSAodXJsKSA9PiB7XG5cdGlmICghdXJsKSByZXR1cm4gbnVsbDtcblx0aWYgKGNhY2hlTWFwLmhhcyh1cmwpKSByZXR1cm4gY2FjaGVNYXAuZ2V0KHVybCk7XG5cdGlmICh1cmwgaW5zdGFuY2VvZiBCbG9iIHx8IHVybCBpbnN0YW5jZW9mIEZpbGUpIHtcblx0XHRpZiAoYmxvYlVSTE1hcC5oYXModXJsKSkgcmV0dXJuIGJsb2JVUkxNYXAuZ2V0KHVybCk7XG5cdFx0Y29uc3QgYnVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwodXJsKTtcblx0XHRibG9iVVJMTWFwLnNldCh1cmwsIGJ1cmwpO1xuXHRcdGNhY2hlTWFwLnNldChidXJsLCBidXJsKTtcblx0XHRyZXR1cm4gYnVybDtcblx0fVxuXHRpZiAoVVJMLmNhblBhcnNlKHVybCkgfHwgdXJsPy50cmltPy4oKT8uc3RhcnRzV2l0aD8uKFwiLi9cIikpIHtcblx0XHRjb25zdCBwcm9taXNlZCA9IGZldGNoKHVybD8ucmVwbGFjZT8uKFwiP3VybFwiLCBcIj9yYXdcIiksIHtcblx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRtb2RlOiBcInNhbWUtb3JpZ2luXCIsXG5cdFx0XHRwcmlvcml0eTogXCJoaWdoXCJcblx0XHR9KT8udGhlbj8uKGFzeW5jIChyZXMpID0+IHtcblx0XHRcdGNvbnN0IGJsb2IgPSBhd2FpdCByZXMuYmxvYigpO1xuXHRcdFx0Y29uc3QgYnVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0XHRibG9iVVJMTWFwLnNldChibG9iLCBidXJsKTtcblx0XHRcdGNhY2hlTWFwLnNldCh1cmwsIGJ1cmwpO1xuXHRcdFx0Y2FjaGVNYXAuc2V0KGJ1cmwsIGJ1cmwpO1xuXHRcdFx0cmV0dXJuIGJ1cmw7XG5cdFx0fSk7XG5cdFx0Y2FjaGVNYXAuc2V0KHVybCwgcHJvbWlzZWQpO1xuXHRcdHJldHVybiBwcm9taXNlZDtcblx0fVxuXHRpZiAodHlwZW9mIHVybCA9PSBcInN0cmluZ1wiKSB7XG5cdFx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKFt1cmxdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRibG9iVVJMTWFwLnNldChibG9iLCBidXJsKTtcblx0XHRjYWNoZU1hcC5zZXQoYnVybCwgYnVybCk7XG5cdFx0cmV0dXJuIGJ1cmw7XG5cdH1cblx0cmV0dXJuIHVybDtcbn07XG52YXIgY2FjaGVDb250ZW50TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBjYWNoZUJsb2JDb250ZW50TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZmV0Y2hBc0lubGluZSA9ICh1cmwpID0+IHtcblx0aWYgKCF1cmwpIHJldHVybiBcIlwiO1xuXHRpZiAoY2FjaGVDb250ZW50TWFwLmhhcyh1cmwpKSByZXR1cm4gY2FjaGVDb250ZW50TWFwLmdldCh1cmwpID8/IFwiXCI7XG5cdGlmICh1cmwgaW5zdGFuY2VvZiBCbG9iIHx8IHVybCBpbnN0YW5jZW9mIEZpbGUpIHtcblx0XHRpZiAoY2FjaGVCbG9iQ29udGVudE1hcC5oYXModXJsKSkgcmV0dXJuIGNhY2hlQmxvYkNvbnRlbnRNYXAuZ2V0KHVybCkgPz8gXCJcIjtcblx0XHRjb25zdCBwcm9taXNlZCA9IHVybD8udGV4dD8uKCk/LnRoZW4/LigodGV4dCkgPT4ge1xuXHRcdFx0Y2FjaGVCbG9iQ29udGVudE1hcC5zZXQodXJsLCB0ZXh0KTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH0pO1xuXHRcdGNhY2hlQmxvYkNvbnRlbnRNYXAuc2V0KHVybCwgcHJvbWlzZWQpO1xuXHRcdHJldHVybiBwcm9taXNlZDtcblx0fVxuXHRpZiAoVVJMLmNhblBhcnNlKHVybCkgfHwgdXJsPy50cmltPy4oKT8uc3RhcnRzV2l0aD8uKFwiLi9cIikpIHtcblx0XHRjb25zdCBwcm9taXNlZCA9IGZldGNoKHVybD8ucmVwbGFjZT8uKFwiP3VybFwiLCBcIj9yYXdcIiksIHtcblx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRtb2RlOiBcInNhbWUtb3JpZ2luXCIsXG5cdFx0XHRwcmlvcml0eTogXCJoaWdoXCJcblx0XHR9KT8udGhlbj8uKGFzeW5jIChyZXMpID0+IHtcblx0XHRcdGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuXHRcdFx0Y2FjaGVDb250ZW50TWFwLnNldCh1cmwsIHRleHQpO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fSk7XG5cdFx0Y2FjaGVDb250ZW50TWFwLnNldCh1cmwsIHByb21pc2VkKTtcblx0XHRyZXR1cm4gcHJvbWlzZWQ7XG5cdH1cblx0aWYgKHR5cGVvZiB1cmwgPT0gXCJzdHJpbmdcIikge1xuXHRcdGNhY2hlQ29udGVudE1hcC5zZXQodXJsLCB1cmwpO1xuXHRcdHJldHVybiB1cmw7XG5cdH1cblx0cmV0dXJuIHVybDtcbn07XG52YXIgYWRvcHRlZFNlbGVjdG9yTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BhZG9wdGVkU2VsZWN0b3JNYXBcIik7XG52YXIgYWRvcHRlZFNlbGVjdG9yTWFwID0gZ2xvYmFsVGhpc1thZG9wdGVkU2VsZWN0b3JNYXBTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwXCIpO1xudmFyIGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcCA9IGdsb2JhbFRoaXNbYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYWRvcHRlZExheWVyTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BhZG9wdGVkTGF5ZXJNYXBcIik7XG52YXIgYWRvcHRlZExheWVyTWFwID0gZ2xvYmFsVGhpc1thZG9wdGVkTGF5ZXJNYXBTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGFkb3B0ZWRTaGFkb3dMYXllck1hcFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYWRvcHRlZFNoYWRvd0xheWVyTWFwXCIpO1xudmFyIGFkb3B0ZWRTaGFkb3dMYXllck1hcCA9IGdsb2JhbFRoaXNbYWRvcHRlZFNoYWRvd0xheWVyTWFwU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0QWRvcHRlZFN0eWxlUnVsZSA9IChzZWxlY3RvciwgbGF5ZXJOYW1lID0gXCJ1eC1xdWVyeVwiLCBiYXNpcyA9IG51bGwpID0+IHtcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIG51bGw7XG5cdGlmICghc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCgpKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgcm9vdCA9IGJhc2lzIGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IGJhc2lzIDogYmFzaXM/LmdldFJvb3ROb2RlID8gYmFzaXMuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSA6IG51bGw7XG5cdGNvbnN0IGlzU2hhZG93Um9vdCA9IHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xuXHRjb25zdCB0YXJnZXRBZG9wdGVkU2hlZXRzID0gaXNTaGFkb3dSb290ID8gcm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgOiB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyA6IG51bGw7XG5cdGlmICghdGFyZ2V0QWRvcHRlZFNoZWV0cykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHNlbGVjdG9yS2V5ID0gYCR7bGF5ZXJOYW1lIHx8IFwiXCJ9OiR7c2VsZWN0b3J9YDtcblx0bGV0IHNoZWV0O1xuXHRpZiAoaXNTaGFkb3dSb290KSB7XG5cdFx0bGV0IHNoYWRvd01hcCA9IGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcC5nZXQocm9vdCk7XG5cdFx0aWYgKCFzaGFkb3dNYXApIHtcblx0XHRcdHNoYWRvd01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAuc2V0KHJvb3QsIHNoYWRvd01hcCk7XG5cdFx0fVxuXHRcdHNoZWV0ID0gc2hhZG93TWFwLmdldChzZWxlY3RvcktleSk7XG5cdFx0aWYgKCFzaGVldCkge1xuXHRcdFx0c2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdFx0c2hhZG93TWFwLnNldChzZWxlY3RvcktleSwgc2hlZXQpO1xuXHRcdFx0aWYgKCF0YXJnZXRBZG9wdGVkU2hlZXRzLmluY2x1ZGVzKHNoZWV0KSkgdGFyZ2V0QWRvcHRlZFNoZWV0cy5wdXNoKHNoZWV0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0c2hlZXQgPSBhZG9wdGVkU2VsZWN0b3JNYXAuZ2V0KHNlbGVjdG9yS2V5KTtcblx0XHRpZiAoIXNoZWV0KSB7XG5cdFx0XHRzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0XHRhZG9wdGVkU2VsZWN0b3JNYXAuc2V0KHNlbGVjdG9yS2V5LCBzaGVldCk7XG5cdFx0XHRpZiAoIXRhcmdldEFkb3B0ZWRTaGVldHMuaW5jbHVkZXMoc2hlZXQpKSB0YXJnZXRBZG9wdGVkU2hlZXRzLnB1c2goc2hlZXQpO1xuXHRcdH1cblx0fVxuXHRpZiAobGF5ZXJOYW1lKSB7XG5cdFx0bGV0IGxheWVyUnVsZTtcblx0XHRpZiAoaXNTaGFkb3dSb290KSB7XG5cdFx0XHRsZXQgc2hhZG93TGF5ZXJNYXAgPSBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuZ2V0KHJvb3QpO1xuXHRcdFx0aWYgKCFzaGFkb3dMYXllck1hcCkge1xuXHRcdFx0XHRzaGFkb3dMYXllck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRcdGFkb3B0ZWRTaGFkb3dMYXllck1hcC5zZXQocm9vdCwgc2hhZG93TGF5ZXJNYXApO1xuXHRcdFx0fVxuXHRcdFx0bGF5ZXJSdWxlID0gc2hhZG93TGF5ZXJNYXAuZ2V0KGxheWVyTmFtZSk7XG5cdFx0fSBlbHNlIGxheWVyUnVsZSA9IGFkb3B0ZWRMYXllck1hcC5nZXQobGF5ZXJOYW1lKTtcblx0XHRpZiAoIWxheWVyUnVsZSkge1xuXHRcdFx0bGF5ZXJSdWxlID0gZ2V0T3JDcmVhdGVMYXllclJ1bGUoc2hlZXQsIGxheWVyTmFtZSk7XG5cdFx0XHRpZiAobGF5ZXJSdWxlKSB7XG5cdFx0XHRcdGlmIChpc1NoYWRvd1Jvb3QpIHtcblx0XHRcdFx0XHRsZXQgc2hhZG93TGF5ZXJNYXAgPSBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuZ2V0KHJvb3QpO1xuXHRcdFx0XHRcdGlmICghc2hhZG93TGF5ZXJNYXApIHtcblx0XHRcdFx0XHRcdHNoYWRvd0xheWVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdFx0XHRcdGFkb3B0ZWRTaGFkb3dMYXllck1hcC5zZXQocm9vdCwgc2hhZG93TGF5ZXJNYXApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzaGFkb3dMYXllck1hcC5zZXQobGF5ZXJOYW1lLCBsYXllclJ1bGUpO1xuXHRcdFx0XHR9IGVsc2UgYWRvcHRlZExheWVyTWFwLnNldChsYXllck5hbWUsIGxheWVyUnVsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChsYXllclJ1bGUpIHtcblx0XHRcdGxldCBsYXllclJ1bGVJbmRleCA9IEFycmF5LmZyb20obGF5ZXJSdWxlLmNzc1J1bGVzIHx8IFtdKS5maW5kSW5kZXgoKHIpID0+IHIgaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUgJiYgci5zZWxlY3RvclRleHQ/LnRyaW0/LigpID09PSBzZWxlY3Rvcj8udHJpbT8uKCkpO1xuXHRcdFx0aWYgKGxheWVyUnVsZUluZGV4ID09PSAtMSkgdHJ5IHtcblx0XHRcdFx0bGF5ZXJSdWxlSW5kZXggPSBsYXllclJ1bGUuaW5zZXJ0UnVsZShgJHtzZWxlY3Rvcn0ge31gLCBsYXllclJ1bGUuY3NzUnVsZXMubGVuZ3RoKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGF5ZXJSdWxlLmNzc1J1bGVzW2xheWVyUnVsZUluZGV4XTtcblx0XHR9XG5cdH1cblx0bGV0IHJ1bGVJbmRleCA9IEFycmF5LmZyb20oc2hlZXQuY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocnVsZSkgPT4gcnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSAmJiBydWxlLnNlbGVjdG9yVGV4dD8udHJpbT8uKCkgPT09IHNlbGVjdG9yPy50cmltPy4oKSk7XG5cdGlmIChydWxlSW5kZXggPT09IC0xKSB0cnkge1xuXHRcdHJ1bGVJbmRleCA9IHNoZWV0Lmluc2VydFJ1bGUoYCR7c2VsZWN0b3J9IHt9YCwgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGNvbnN0IHJ1bGUgPSBzaGVldC5jc3NSdWxlc1tydWxlSW5kZXhdO1xuXHRpZiAocnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSkgcmV0dXJuIHJ1bGU7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBpc05hdGl2ZUNTU1N0eWxlVmFsdWUgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0Y29uc3QgQ1NTU3R5bGVWYWx1ZUN0b3IgPSBnbG9iYWxUaGlzLkNTU1N0eWxlVmFsdWU7XG5cdFx0aWYgKHR5cGVvZiBDU1NTdHlsZVZhbHVlQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmIHZhbHVlIGluc3RhbmNlb2YgQ1NTU3R5bGVWYWx1ZUN0b3IpIHJldHVybiB0cnVlO1xuXHRcdGZvciAobGV0IHByb3RvdHlwZSA9IHZhbHVlOyBwcm90b3R5cGU7IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpKSBpZiAocHJvdG90eXBlPy5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gXCJDU1NTdHlsZVZhbHVlXCIpIHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHt9XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgaXNSZWFjdGl2ZVN0eWxlVmFsdWUgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IGlzTmF0aXZlQ1NTU3R5bGVWYWx1ZSh2YWx1ZSkpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gXCJ2YWx1ZVwiIGluIHZhbHVlO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgZ2V0V2luZG93Q29uc3RydWN0b3IgPSAod2luLCBuYW1lKSA9PiB7XG5cdHJldHVybiB3aW4/LltuYW1lXSA/PyBnbG9iYWxUaGlzPy5bbmFtZV07XG59O1xudmFyIGdldENTU1VuaXRGYWN0b3J5TmFtZSA9ICh1bml0KSA9PiB7XG5cdHN3aXRjaCAodW5pdC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0Y2FzZSBcIiVcIjogcmV0dXJuIFwicGVyY2VudFwiO1xuXHRcdGNhc2UgXCJxXCI6IHJldHVybiBcIlFcIjtcblx0XHRjYXNlIFwiaHpcIjogcmV0dXJuIFwiSHpcIjtcblx0XHRjYXNlIFwia2h6XCI6IHJldHVybiBcImtIelwiO1xuXHRcdGNhc2UgXCJmclwiOiByZXR1cm4gXCJmbGV4XCI7XG5cdFx0ZGVmYXVsdDogcmV0dXJuIHVuaXQudG9Mb3dlckNhc2UoKTtcblx0fVxufTtcbnZhciBnZXRDU1NVbml0Q29uc3RydWN0b3JOYW1lID0gKHVuaXQpID0+IHtcblx0cmV0dXJuIHVuaXQudG9Mb3dlckNhc2UoKSA9PT0gXCIlXCIgPyBcInBlcmNlbnRcIiA6IHVuaXQudG9Mb3dlckNhc2UoKTtcbn07XG52YXIgY3JlYXRlVHlwZWRVbml0VmFsdWUgPSAod2luLCB1bml0LCB2YWx1ZSkgPT4ge1xuXHRjb25zdCBDU1NOYW1lc3BhY2UgPSB3aW4/LkNTUztcblx0Y29uc3QgZmFjdG9yeU5hbWUgPSBnZXRDU1NVbml0RmFjdG9yeU5hbWUodW5pdCk7XG5cdGNvbnN0IGZhY3RvcnkgPSBDU1NOYW1lc3BhY2U/LltmYWN0b3J5TmFtZV07XG5cdGlmICh0eXBlb2YgZmFjdG9yeSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFjdG9yeS5jYWxsKENTU05hbWVzcGFjZSwgdmFsdWUpO1xuXHRjb25zdCBDU1NVbml0VmFsdWVDdG9yID0gZ2V0V2luZG93Q29uc3RydWN0b3Iod2luLCBcIkNTU1VuaXRWYWx1ZVwiKTtcblx0aWYgKHR5cGVvZiBDU1NVbml0VmFsdWVDdG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoYFR5cGVkIE9NIGRvZXMgbm90IHN1cHBvcnQgQ1NTIHVuaXQgXCIke3VuaXR9XCJgKTtcblx0cmV0dXJuIG5ldyBDU1NVbml0VmFsdWVDdG9yKHZhbHVlLCBnZXRDU1NVbml0Q29uc3RydWN0b3JOYW1lKHVuaXQpKTtcbn07XG52YXIgdG9rZW5pemVOdW1lcmljQ1NTID0gKHNvdXJjZSkgPT4ge1xuXHRjb25zdCB0b2tlbnMgPSBbXTtcblx0bGV0IGN1cnNvciA9IDA7XG5cdHdoaWxlIChjdXJzb3IgPCBzb3VyY2UubGVuZ3RoKSB7XG5cdFx0Y29uc3QgcmVzdCA9IHNvdXJjZS5zbGljZShjdXJzb3IpO1xuXHRcdGNvbnN0IHdoaXRlc3BhY2UgPSAvXlxccysvLmV4ZWMocmVzdCk7XG5cdFx0aWYgKHdoaXRlc3BhY2UpIHtcblx0XHRcdGN1cnNvciArPSB3aGl0ZXNwYWNlWzBdLmxlbmd0aDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBudW1iZXIgPSAvXig/OlxcZCpcXC5cXGQrfFxcZCtcXC4/XFxkKikoPzpbZUVdWystXT9cXGQrKT8vLmV4ZWMocmVzdCk7XG5cdFx0aWYgKG51bWJlcikge1xuXHRcdFx0Y3Vyc29yICs9IG51bWJlclswXS5sZW5ndGg7XG5cdFx0XHRjb25zdCB1bml0TWF0Y2ggPSAvXiglfFthLXpBLVpdKykvLmV4ZWMoc291cmNlLnNsaWNlKGN1cnNvcikpO1xuXHRcdFx0Y29uc3QgdW5pdCA9IHVuaXRNYXRjaD8uWzBdID8/IG51bGw7XG5cdFx0XHRpZiAodW5pdE1hdGNoKSBjdXJzb3IgKz0gdW5pdE1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0a2luZDogXCJudW1iZXJcIixcblx0XHRcdFx0dmFsdWU6IE51bWJlcihudW1iZXJbMF0pLFxuXHRcdFx0XHR1bml0OiB1bml0ID09IG51bGwgPyBudWxsIDogdW5pdC50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBpZGVudGlmaWVyID0gL15bYS16QS1aX11bYS16QS1aMC05Xy1dKi8uZXhlYyhyZXN0KTtcblx0XHRpZiAoaWRlbnRpZmllcikge1xuXHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRraW5kOiBcImlkZW50aWZpZXJcIixcblx0XHRcdFx0dmFsdWU6IGlkZW50aWZpZXJbMF0udG9Mb3dlckNhc2UoKVxuXHRcdFx0fSk7XG5cdFx0XHRjdXJzb3IgKz0gaWRlbnRpZmllclswXS5sZW5ndGg7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3Qgc3ltYm9sID0gcmVzdFswXTtcblx0XHRpZiAoW1xuXHRcdFx0XCIrXCIsXG5cdFx0XHRcIi1cIixcblx0XHRcdFwiKlwiLFxuXHRcdFx0XCIvXCIsXG5cdFx0XHRcIihcIixcblx0XHRcdFwiKVwiLFxuXHRcdFx0XCIsXCJcblx0XHRdLmluY2x1ZGVzKHN5bWJvbCkpIHtcblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0a2luZDogXCJzeW1ib2xcIixcblx0XHRcdFx0dmFsdWU6IHN5bWJvbFxuXHRcdFx0fSk7XG5cdFx0XHRjdXJzb3IrKztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuc3VwcG9ydGVkIHRva2VuIG5lYXIgXCIke3Jlc3R9XCJgKTtcblx0fVxuXHRyZXR1cm4gdG9rZW5zO1xufTtcbnZhciBOdW1lcmljVHlwZWRPTVBhcnNlciA9IGNsYXNzIHtcblx0dG9rZW5zO1xuXHR3aW47XG5cdGluZGV4ID0gMDtcblx0Y29uc3RydWN0b3IodG9rZW5zLCB3aW4pIHtcblx0XHR0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLndpbiA9IHdpbjtcblx0fVxuXHRwYXJzZSgpIHtcblx0XHRjb25zdCByb290ID0gdGhpcy5wYXJzZVN1bSgpO1xuXHRcdGlmICh0aGlzLmluZGV4ICE9PSB0aGlzLnRva2Vucy5sZW5ndGgpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlVuZXhwZWN0ZWQgdHJhaWxpbmcgZXhwcmVzc2lvblwiKTtcblx0XHRyZXR1cm4gcm9vdDtcblx0fVxuXHRjdXJyZW50KCkge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcblx0fVxuXHRjb25zdW1lKCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG5cdFx0aWYgKCF0b2tlbikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvblwiKTtcblx0XHR0aGlzLmluZGV4Kys7XG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cdGNvbnN1bWVTeW1ib2woc3ltYm9sKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcblx0XHRpZiAodG9rZW4ua2luZCAhPT0gXCJzeW1ib2xcIiB8fCB0b2tlbi52YWx1ZSAhPT0gc3ltYm9sKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYEV4cGVjdGVkIFwiJHtzeW1ib2x9XCJgKTtcblx0fVxuXHRtYXRjaGVzU3ltYm9sKHN5bWJvbCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cdFx0cmV0dXJuIHRva2VuPy5raW5kID09PSBcInN5bWJvbFwiICYmIHRva2VuLnZhbHVlID09PSBzeW1ib2w7XG5cdH1cblx0Y3JlYXRlTWF0aChuYW1lLCAuLi52YWx1ZXMpIHtcblx0XHRjb25zdCBDb25zdHJ1Y3RvciA9IGdldFdpbmRvd0NvbnN0cnVjdG9yKHRoaXMud2luLCBuYW1lKTtcblx0XHRpZiAodHlwZW9mIENvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7bmFtZX0gaXMgbm90IHN1cHBvcnRlZGApO1xuXHRcdHJldHVybiBuZXcgQ29uc3RydWN0b3IoLi4udmFsdWVzKTtcblx0fVxuXHRwYXJzZVN1bSgpIHtcblx0XHRsZXQgdmFsdWUgPSB0aGlzLnBhcnNlUHJvZHVjdCgpO1xuXHRcdHdoaWxlICh0aGlzLm1hdGNoZXNTeW1ib2woXCIrXCIpIHx8IHRoaXMubWF0Y2hlc1N5bWJvbChcIi1cIikpIHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yID0gdGhpcy5jb25zdW1lKCk7XG5cdFx0XHRjb25zdCByaWdodCA9IHRoaXMucGFyc2VQcm9kdWN0KCk7XG5cdFx0XHRpZiAob3BlcmF0b3Iua2luZCAhPT0gXCJzeW1ib2xcIikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRXhwZWN0ZWQgc3VtIG9wZXJhdG9yXCIpO1xuXHRcdFx0aWYgKG9wZXJhdG9yLnZhbHVlID09PSBcIitcIikgdmFsdWUgPSB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoU3VtXCIsIHZhbHVlLCByaWdodCk7XG5cdFx0XHRlbHNlIHZhbHVlID0gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aFN1bVwiLCB2YWx1ZSwgdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aE5lZ2F0ZVwiLCByaWdodCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0cGFyc2VQcm9kdWN0KCkge1xuXHRcdGxldCB2YWx1ZSA9IHRoaXMucGFyc2VVbmFyeSgpO1xuXHRcdHdoaWxlICh0aGlzLm1hdGNoZXNTeW1ib2woXCIqXCIpIHx8IHRoaXMubWF0Y2hlc1N5bWJvbChcIi9cIikpIHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yID0gdGhpcy5jb25zdW1lKCk7XG5cdFx0XHRjb25zdCByaWdodCA9IHRoaXMucGFyc2VVbmFyeSgpO1xuXHRcdFx0aWYgKG9wZXJhdG9yLmtpbmQgIT09IFwic3ltYm9sXCIpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkV4cGVjdGVkIHByb2R1Y3Qgb3BlcmF0b3JcIik7XG5cdFx0XHRpZiAob3BlcmF0b3IudmFsdWUgPT09IFwiKlwiKSB2YWx1ZSA9IHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhQcm9kdWN0XCIsIHZhbHVlLCByaWdodCk7XG5cdFx0XHRlbHNlIHZhbHVlID0gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aFByb2R1Y3RcIiwgdmFsdWUsIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhJbnZlcnRcIiwgcmlnaHQpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cdHBhcnNlVW5hcnkoKSB7XG5cdFx0aWYgKHRoaXMubWF0Y2hlc1N5bWJvbChcIitcIikpIHtcblx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VVbmFyeSgpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5tYXRjaGVzU3ltYm9sKFwiLVwiKSkge1xuXHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aE5lZ2F0ZVwiLCB0aGlzLnBhcnNlVW5hcnkoKSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcnNlUHJpbWFyeSgpO1xuXHR9XG5cdHBhcnNlUHJpbWFyeSgpIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xuXHRcdGlmICh0b2tlbi5raW5kID09PSBcIm51bWJlclwiKSByZXR1cm4gY3JlYXRlVHlwZWRVbml0VmFsdWUodGhpcy53aW4sIHRva2VuLnVuaXQgPz8gXCJudW1iZXJcIiwgdG9rZW4udmFsdWUpO1xuXHRcdGlmICh0b2tlbi5raW5kID09PSBcInN5bWJvbFwiICYmIHRva2VuLnZhbHVlID09PSBcIihcIikge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlU3VtKCk7XG5cdFx0XHR0aGlzLmNvbnN1bWVTeW1ib2woXCIpXCIpO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRpZiAodG9rZW4ua2luZCA9PT0gXCJpZGVudGlmaWVyXCIpIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb24odG9rZW4udmFsdWUpO1xuXHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcIkV4cGVjdGVkIGEgbnVtZXJpYyB2YWx1ZVwiKTtcblx0fVxuXHRwYXJzZUZ1bmN0aW9uKG5hbWUpIHtcblx0XHR0aGlzLmNvbnN1bWVTeW1ib2woXCIoXCIpO1xuXHRcdGlmIChuYW1lID09PSBcImNhbGNcIikge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlU3VtKCk7XG5cdFx0XHR0aGlzLmNvbnN1bWVTeW1ib2woXCIpXCIpO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRjb25zdCB2YWx1ZXMgPSBbXTtcblx0XHRpZiAoIXRoaXMubWF0Y2hlc1N5bWJvbChcIilcIikpIHtcblx0XHRcdHZhbHVlcy5wdXNoKHRoaXMucGFyc2VTdW0oKSk7XG5cdFx0XHR3aGlsZSAodGhpcy5tYXRjaGVzU3ltYm9sKFwiLFwiKSkge1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0dmFsdWVzLnB1c2godGhpcy5wYXJzZVN1bSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5jb25zdW1lU3ltYm9sKFwiKVwiKTtcblx0XHRpZiAobmFtZSA9PT0gXCJtaW5cIikge1xuXHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBTeW50YXhFcnJvcihcIm1pbigpIHJlcXVpcmVzIGEgdmFsdWVcIik7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aE1pblwiLCAuLi52YWx1ZXMpO1xuXHRcdH1cblx0XHRpZiAobmFtZSA9PT0gXCJtYXhcIikge1xuXHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBTeW50YXhFcnJvcihcIm1heCgpIHJlcXVpcmVzIGEgdmFsdWVcIik7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aE1heFwiLCAuLi52YWx1ZXMpO1xuXHRcdH1cblx0XHRpZiAobmFtZSA9PT0gXCJjbGFtcFwiKSB7XG5cdFx0XHRpZiAodmFsdWVzLmxlbmd0aCAhPT0gMykgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiY2xhbXAoKSByZXF1aXJlcyB0aHJlZSB2YWx1ZXNcIik7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aENsYW1wXCIsIHZhbHVlc1swXSwgdmFsdWVzWzFdLCB2YWx1ZXNbMl0pO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuc3VwcG9ydGVkIGZ1bmN0aW9uIFwiJHtuYW1lfVwiYCk7XG5cdH1cbn07XG52YXIgcGFyc2VUb1R5cGVkT00gPSAoY3NzVmFsdWUsIHdpbikgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHRva2VucyA9IHRva2VuaXplTnVtZXJpY0NTUyhjc3NWYWx1ZSk7XG5cdFx0cmV0dXJuIG5ldyBOdW1lcmljVHlwZWRPTVBhcnNlcih0b2tlbnMsIHdpbikucGFyc2UoKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgaGFzVHlwZWRPTSA9IHR5cGVvZiBDU1NTdHlsZVZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBDU1NVbml0VmFsdWUgIT09IFwidW5kZWZpbmVkXCI7XG52YXIgaXNVbml0VmFsdWUgPSAodmFsKSA9PiBoYXNUeXBlZE9NICYmIHZhbCBpbnN0YW5jZW9mIENTU1VuaXRWYWx1ZTtcbnZhciBzZXRQcm9wZXJ0eUlmTm90RXF1YWwgPSAoc3R5bGVSZWYsIGtlYmFiLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0aWYgKCFzdHlsZVJlZiB8fCAha2ViYWIpIHJldHVybjtcblx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRpZiAoc3R5bGVSZWYuZ2V0UHJvcGVydHlWYWx1ZShrZWJhYikgIT09IFwiXCIpIHN0eWxlUmVmLnJlbW92ZVByb3BlcnR5KGtlYmFiKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHN0eWxlUmVmLmdldFByb3BlcnR5VmFsdWUoa2ViYWIpICE9PSB2YWx1ZSkgc3R5bGVSZWYuc2V0UHJvcGVydHkoa2ViYWIsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eVR5cGVkID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIW5hbWUpIHJldHVybiBlbGVtZW50O1xuXHRjb25zdCBrZWJhYiA9IGNhbWVsVG9LZWJhYihuYW1lKTtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbGVtZW50LnN0eWxlO1xuXHRjb25zdCBzdHlsZU1hcFJlZiA9IGVsZW1lbnQuYXR0cmlidXRlU3R5bGVNYXAgPz8gZWxlbWVudC5zdHlsZU1hcDtcblx0aWYgKCFoYXNUeXBlZE9NIHx8ICFzdHlsZU1hcFJlZikgcmV0dXJuIHNldFN0eWxlUHJvcGVydHlGYWxsYmFjayhlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSk7XG5cdGNvbnN0IHdpbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudD8uZGVmYXVsdFZpZXcgPz8gZ2xvYmFsVGhpcztcblx0bGV0IHZhbCA9IGhhc1ZhbHVlKHZhbHVlKSAmJiBpc1JlYWN0aXZlU3R5bGVWYWx1ZSh2YWx1ZSkgPyB2YWx1ZS52YWx1ZSA6IHZhbHVlO1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHRzdHlsZU1hcFJlZi5kZWxldGU/LihrZWJhYik7XG5cdFx0aWYgKHN0eWxlUmVmKSBzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBudWxsLCBpbXBvcnRhbmNlKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAoaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbCkpIHtcblx0XHRjb25zdCBvbGQgPSBzdHlsZU1hcFJlZi5nZXQoa2ViYWIpO1xuXHRcdGlmIChpc1VuaXRWYWx1ZSh2YWwpICYmIGlzVW5pdFZhbHVlKG9sZCkpIHtcblx0XHRcdGlmIChvbGQudmFsdWUgPT09IHZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gdmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdH0gZWxzZSBpZiAob2xkID09PSB2YWwpIHJldHVybiBlbGVtZW50O1xuXHRcdHN0eWxlTWFwUmVmLnNldChrZWJhYiwgdmFsKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuXHRcdGlmIChDU1M/Lm51bWJlciAmJiAha2ViYWIuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBuZXdWYWwgPSBDU1MubnVtYmVyKHZhbCk7XG5cdFx0XHRjb25zdCBvbGQgPSBzdHlsZU1hcFJlZi5nZXQoa2ViYWIpO1xuXHRcdFx0aWYgKGlzVW5pdFZhbHVlKG9sZCkgJiYgb2xkLnZhbHVlID09PSBuZXdWYWwudmFsdWUgJiYgb2xkLnVuaXQgPT09IG5ld1ZhbC51bml0KSByZXR1cm4gZWxlbWVudDtcblx0XHRcdHN0eWxlTWFwUmVmLnNldChrZWJhYiwgbmV3VmFsKTtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdH1cblx0aWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpIHtcblx0XHRpZiAoL1xcYihjYWxjfG1pbnxtYXh8Y2xhbXApXFxzKlxcKC8udGVzdCh2YWwpKSB7XG5cdFx0XHRjb25zdCBwYXJzZWQgPSBwYXJzZVRvVHlwZWRPTSh2YWwsIHdpbik7XG5cdFx0XHRpZiAocGFyc2VkKSB0cnkge1xuXHRcdFx0XHRzdHlsZU1hcFJlZi5zZXQoa2ViYWIsIHBhcnNlZCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0XHRjb25zdCBtYXliZU51bSA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCk7XG5cdFx0aWYgKHR5cGVvZiBtYXliZU51bSA9PT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAha2ViYWIuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBuZXdWYWwgPSBDU1MubnVtYmVyKG1heWJlTnVtKTtcblx0XHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0XHRpZiAoaXNVbml0VmFsdWUob2xkKSAmJiBvbGQudmFsdWUgPT09IG5ld1ZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gbmV3VmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCBuZXdWYWwpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fVxuXHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIHZhbCwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIW5hbWUpIHJldHVybiBlbGVtZW50O1xuXHRjb25zdCBrZWJhYiA9IGNhbWVsVG9LZWJhYihuYW1lKTtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbGVtZW50LnN0eWxlO1xuXHRpZiAoIXN0eWxlUmVmKSByZXR1cm4gZWxlbWVudDtcblx0bGV0IHZhbCA9IGhhc1ZhbHVlKHZhbHVlKSAmJiBpc1JlYWN0aXZlU3R5bGVWYWx1ZSh2YWx1ZSkgPyB2YWx1ZS52YWx1ZSA6IHZhbHVlO1xuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbCkpIHZhbCA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCkgPz8gdmFsO1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBudWxsLCBpbXBvcnRhbmNlKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAoaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbCkpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0aWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eSA9IChlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0cmV0dXJuIGhhc1R5cGVkT00gPyBzZXRTdHlsZVByb3BlcnR5VHlwZWQoZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UpIDogc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbn07XG52YXIgc2V0U3R5bGVJblJ1bGUgPSAoc2VsZWN0b3IsIG5hbWUsIHZhbHVlKSA9PiB7XG5cdHJldHVybiBzZXRTdHlsZVByb3BlcnR5KGdldFN0eWxlUnVsZShzZWxlY3RvciksIG5hbWUsIHZhbHVlKTtcbn07XG52YXIgc2V0U3R5bGVSdWxlID0gKHNlbGVjdG9yLCBzaGVldCkgPT4ge1xuXHRjb25zdCBydWxlID0gZ2V0U3R5bGVSdWxlKHNlbGVjdG9yKTtcblx0T2JqZWN0LmVudHJpZXMoc2hlZXQpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFZhbHVlXSkgPT4gc2V0U3R5bGVQcm9wZXJ0eShydWxlLCBwcm9wTmFtZSwgcHJvcFZhbHVlKSk7XG5cdHJldHVybiBydWxlO1xufTtcbnZhciBoYXNoID0gYXN5bmMgKHN0cmluZykgPT4ge1xuXHRjb25zdCBoYXNoQnVmZmVyID0gYXdhaXQgY3J5cHRvPy5zdWJ0bGU/LmRpZ2VzdChcIlNIQS0yNTZcIiwgdHlwZW9mIHN0cmluZyA9PSBcInN0cmluZ1wiID8gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHN0cmluZykgOiBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IHN0cmluZyA6IGF3YWl0IHN0cmluZz8uYXJyYXlCdWZmZXI/LigpKTtcblx0cmV0dXJuIFwic2hhMjU2LVwiICsgYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KGhhc2hCdWZmZXIpKSk7XG59O1xudmFyIGxvYWRTdHlsZVNoZWV0ID0gKGlubGluZSwgYmFzZSwgbGF5ZXIgPSBcIlwiLCBpbnRlZ3JpdHkpID0+IHtcblx0Y29uc3QgbG9hZCA9IGZldGNoQW5kQ2FjaGUoaW5saW5lKTtcblx0Y29uc3QgdXJsID0gdHlwZW9mIGlubGluZSA9PSBcInN0cmluZ1wiID8gVVJMLmNhblBhcnNlKGlubGluZSkgPyBpbmxpbmUgOiBsb2FkIDogbG9hZDtcblx0aWYgKGJhc2U/LlswXSkgYmFzZVswXS5mZXRjaFByaW9yaXR5ID0gXCJoaWdoXCI7XG5cdGlmIChiYXNlICYmIHVybCAmJiB0eXBlb2YgdXJsID09IFwic3RyaW5nXCIpIHNldFN0eWxlVVJMKGJhc2UsIHVybCwgbGF5ZXIpO1xuXHRpZiAoYmFzZT8uWzBdICYmICghVVJMLmNhblBhcnNlKGlubGluZSkgfHwgaW50ZWdyaXR5KSAmJiBiYXNlPy5bMF0gaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQpIHt9XG5cdHJldHVybiBwcm9taXNlT3JEaXJlY3QobG9hZCwgKHJlcykgPT4ge1xuXHRcdGlmIChiYXNlPy5bMF0gJiYgcmVzKSB7XG5cdFx0XHRzZXRTdHlsZVVSTChiYXNlLCByZXMsIGxheWVyKTtcblx0XHRcdGJhc2U/LlswXS5zZXRBdHRyaWJ1dGUoXCJsb2FkZWRcIiwgXCJcIik7XG5cdFx0fVxuXHR9KT8uY2F0Y2g/LigoZXJyb3IpID0+IHtcblx0XHRjb25zb2xlLndhcm4oXCJGYWlsZWQgdG8gbG9hZCBzdHlsZSBzaGVldDpcIiwgZXJyb3IpO1xuXHR9KTtcbn07XG52YXIgbG9hZEJsb2JTdHlsZSA9IChpbmxpbmUpID0+IHtcblx0Y29uc3Qgc3R5bGUgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpIDogbnVsbDtcblx0aWYgKHN0eWxlKSBzdHlsZS5mZXRjaFByaW9yaXR5ID0gXCJoaWdoXCI7XG5cdGlmIChzdHlsZSkge1xuXHRcdE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcblx0XHRcdHJlbDogXCJzdHlsZXNoZWV0XCIsXG5cdFx0XHR0eXBlOiBcInRleHQvY3NzXCIsXG5cdFx0XHRjcm9zc09yaWdpbjogXCJzYW1lLW9yaWdpblwiXG5cdFx0fSk7XG5cdFx0c3R5bGUuZGF0YXNldC5vd25lciA9IE9XTkVSO1xuXHRcdGxvYWRTdHlsZVNoZWV0KGlubGluZSwgW3N0eWxlLCBcImhyZWZcIl0pO1xuXHRcdHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlKTtcblx0XHRyZXR1cm4gc3R5bGU7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGxvYWRJbmxpbmVTdHlsZSA9IChpbmxpbmUsIHJvb3RFbGVtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudD8uaGVhZCA6IG51bGwsIGxheWVyID0gXCJcIikgPT4ge1xuXHRjb25zdCBQTEFDRSA9IHJvb3RFbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oXCJoZWFkXCIpID8/IHJvb3RFbGVtZW50O1xuXHRpZiAodHlwZW9mIEhUTUxIZWFkRWxlbWVudCAhPSBcInVuZGVmaW5lZFwiICYmIFBMQUNFIGluc3RhbmNlb2YgSFRNTEhlYWRFbGVtZW50KSByZXR1cm4gbG9hZEJsb2JTdHlsZShpbmxpbmUpO1xuXHRjb25zdCBzdHlsZSA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpIDogbnVsbDtcblx0aWYgKHN0eWxlKSB7XG5cdFx0c3R5bGUuZGF0YXNldC5vd25lciA9IE9XTkVSO1xuXHRcdGxvYWRTdHlsZVNoZWV0KGlubGluZSwgW3N0eWxlLCBcImlubmVySFRNTFwiXSwgbGF5ZXIpO1xuXHRcdFBMQUNFPy5wcmVwZW5kPy4oc3R5bGUpO1xuXHRcdHJldHVybiBzdHlsZTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgc2V0UHJvcGVydHkgPSAodGFyZ2V0LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0cmV0dXJuIHNldFN0eWxlUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSk7XG59O1xudmFyIHByZWxvYWRTdHlsZSA9IChzdHlsZXMpID0+IHtcblx0cmV0dXJuIGxvYWRBc0Fkb3B0ZWQoc3R5bGVzLCBcIlwiKTtcbn07XG52YXIgYWRvcHRlZE1hcFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYWRvcHRlZE1hcFwiKTtcbnZhciBhZG9wdGVkTWFwID0gZ2xvYmFsVGhpc1thZG9wdGVkTWFwU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBhZG9wdGVkQmxvYk1hcFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYWRvcHRlZEJsb2JNYXBcIik7XG52YXIgYWRvcHRlZEJsb2JNYXAgPSBnbG9iYWxUaGlzW2Fkb3B0ZWRCbG9iTWFwU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbGF5ZXJDb3VudGVyU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BsYXllckNvdW50ZXJcIik7XG52YXIgbGF5ZXJDb3VudGVyID0gZ2xvYmFsVGhpc1tsYXllckNvdW50ZXJTeW1ib2xdID8/PSAwO1xudmFyIGFwcGx5QWRvcHRlZFN0eWxlVGV4dCA9IChzaGVldCwgY3NzVGV4dCkgPT4ge1xuXHRpZiAoIXNoZWV0IHx8ICFjc3NUZXh0KSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0c2hlZXQucmVwbGFjZVN5bmMoY3NzVGV4dCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc3QgbWVzc2FnZSA9IFN0cmluZyhlcnJvcj8ubWVzc2FnZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICghKG1lc3NhZ2UuaW5jbHVkZXMoXCJAaW1wb3J0IHJ1bGVzIGFyZSBub3QgYWxsb3dlZFwiKSB8fCBtZXNzYWdlLmluY2x1ZGVzKFwiQGltcG9ydFwiKSAmJiBtZXNzYWdlLmluY2x1ZGVzKFwibm90IGFsbG93ZWRcIikpKSBjb25zb2xlLndhcm4oXCJbRE9NXSBGYWlsZWQgdG8gYXBwbHkgYWRvcHRlZCBzdHlsZXNoZWV0OlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIGxvYWRBc0Fkb3B0ZWQgPSAoc3R5bGVzLCBsYXllck5hbWUgPSBudWxsKSA9PiB7XG5cdGlmICghc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCgpKSB7XG5cdFx0aWYgKHR5cGVvZiBzdHlsZXMgPT09IFwic3RyaW5nXCIpIGxvYWRJbmxpbmVTdHlsZShzdHlsZXMsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmICh0eXBlb2Ygc3R5bGVzID09PSBcInN0cmluZ1wiICYmIGNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudChzdHlsZXMpKSB7XG5cdFx0bG9hZElubGluZVN0eWxlKHN0eWxlcywgdm9pZCAwLCBsYXllck5hbWUgfHwgXCJcIik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiBhZG9wdGVkTWFwPy5oYXM/LihzdHlsZXMpKSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gYWRvcHRlZE1hcC5nZXQoc3R5bGVzKTtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKGNhY2hlZCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKGNhY2hlZCk7XG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXHRpZiAoKHN0eWxlcyBpbnN0YW5jZW9mIEJsb2IgfHwgc3R5bGVzIGluc3RhbmNlb2YgRmlsZSkgJiYgYWRvcHRlZEJsb2JNYXA/Lmhhcz8uKHN0eWxlcykpIHtcblx0XHRjb25zdCBjYWNoZWQgPSBhZG9wdGVkQmxvYk1hcC5nZXQoc3R5bGVzKTtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKGNhY2hlZCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKGNhY2hlZCk7XG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXHRpZiAoIXN0eWxlcykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHNoZWV0ID0gdHlwZW9mIHN0eWxlcyA9PSBcInN0cmluZ1wiID8gYWRvcHRlZE1hcC5nZXRPckluc2VydENvbXB1dGVkKHN0eWxlcywgKHN0eWxlcykgPT4gbmV3IENTU1N0eWxlU2hlZXQoKSkgOiBhZG9wdGVkQmxvYk1hcC5nZXRPckluc2VydENvbXB1dGVkKHN0eWxlcywgKHN0eWxlcykgPT4gbmV3IENTU1N0eWxlU2hlZXQoKSk7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMgJiYgIWRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzaGVldCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoZWV0KTtcblx0aWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiAhVVJMLmNhblBhcnNlKHN0eWxlcykpIHtcblx0XHRjb25zdCBsYXllcldyYXBwZWQgPSBsYXllck5hbWUgPyBgQGxheWVyICR7bGF5ZXJOYW1lfSB7ICR7c3R5bGVzfSB9YCA6IHN0eWxlcztcblx0XHRhZG9wdGVkTWFwLnNldChzdHlsZXMsIHNoZWV0KTtcblx0XHRpZiAoIWFwcGx5QWRvcHRlZFN0eWxlVGV4dChzaGVldCwgbGF5ZXJXcmFwcGVkKSkge1xuXHRcdFx0cmVtb3ZlQWRvcHRlZChzaGVldCk7XG5cdFx0XHRhZG9wdGVkTWFwLmRlbGV0ZShzdHlsZXMpO1xuXHRcdFx0bG9hZElubGluZVN0eWxlKHN0eWxlcyk7XG5cdFx0fVxuXHRcdHJldHVybiBzaGVldDtcblx0fSBlbHNlIHByb21pc2VPckRpcmVjdChmZXRjaEFzSW5saW5lKHN0eWxlcyksIChjYWNoZWQpID0+IHtcblx0XHRhZG9wdGVkTWFwLnNldChjYWNoZWQsIHNoZWV0KTtcblx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRpZiAoY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50KGNhY2hlZCkpIHtcblx0XHRcdFx0cmVtb3ZlQWRvcHRlZChzaGVldCk7XG5cdFx0XHRcdGFkb3B0ZWRNYXAuZGVsZXRlKGNhY2hlZCk7XG5cdFx0XHRcdGFkb3B0ZWRCbG9iTWFwLmRlbGV0ZShzdHlsZXMpO1xuXHRcdFx0XHRsb2FkSW5saW5lU3R5bGUoY2FjaGVkLCB2b2lkIDAsIGxheWVyTmFtZSB8fCBcIlwiKTtcblx0XHRcdFx0cmV0dXJuIHNoZWV0O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGF5ZXJXcmFwcGVkID0gbGF5ZXJOYW1lID8gYEBsYXllciAke2xheWVyTmFtZX0geyAke2NhY2hlZH0gfWAgOiBjYWNoZWQ7XG5cdFx0XHRpZiAoIWFwcGx5QWRvcHRlZFN0eWxlVGV4dChzaGVldCwgbGF5ZXJXcmFwcGVkKSkge1xuXHRcdFx0XHRyZW1vdmVBZG9wdGVkKHNoZWV0KTtcblx0XHRcdFx0YWRvcHRlZE1hcC5kZWxldGUoY2FjaGVkKTtcblx0XHRcdFx0YWRvcHRlZEJsb2JNYXAuZGVsZXRlKHN0eWxlcyk7XG5cdFx0XHRcdGxvYWRJbmxpbmVTdHlsZShjYWNoZWQsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNoZWV0O1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBzaGVldDtcbn07XG52YXIgcmVtb3ZlQWRvcHRlZCA9IChzaGVldCkgPT4ge1xuXHRpZiAoIXNoZWV0KSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHRhcmdldCA9IHR5cGVvZiBzaGVldCA9PT0gXCJzdHJpbmdcIiA/IGFkb3B0ZWRNYXAuZ2V0KHNoZWV0KSA6IHNoZWV0O1xuXHRpZiAoIXRhcmdldCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc2hlZXRzID0gZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzO1xuXHRjb25zdCBpZHggPSBzaGVldHMuaW5kZXhPZih0YXJnZXQpO1xuXHRpZiAoaWR4ICE9PSAtMSkge1xuXHRcdHNoZWV0cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xudmFyIHBhcnNlT3JpZ2luID0gKG9yaWdpbiwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCB2YWx1ZXMgPSBvcmlnaW4uc3BsaXQoXCIgXCIpO1xuXHRyZXR1cm4gbmV3IERPTVBvaW50KHBhcnNlTGVuZ3RoKHZhbHVlc1swXSwgKCkgPT4gZWxlbWVudC5jbGllbnRXaWR0aCksIHBhcnNlTGVuZ3RoKHZhbHVlc1sxXSwgKCkgPT4gZWxlbWVudC5jbGllbnRIZWlnaHQpKTtcbn07XG52YXIgcGFyc2VMZW5ndGggPSAodmFsdWUsIHNpemUpID0+IHtcblx0aWYgKHZhbHVlLmVuZHNXaXRoKFwiJVwiKSkgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIC8gMTAwICogc2l6ZSgpO1xuXHRyZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59O1xudmFyIGdldFRyYW5zZm9ybSA9IChlbCkgPT4ge1xuXHRpZiAoZWw/LmNvbXB1dGVkU3R5bGVNYXApIHtcblx0XHRjb25zdCBtYXRyaXggPSBlbC5jb21wdXRlZFN0eWxlTWFwKCkuZ2V0KFwidHJhbnNmb3JtXCIpPy50b01hdHJpeD8uKCk7XG5cdFx0aWYgKG1hdHJpeCkgcmV0dXJuIG1hdHJpeDtcblx0fSBlbHNlIGlmIChlbCkge1xuXHRcdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdFx0cmV0dXJuIG5ldyBET01NYXRyaXgoc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcInRyYW5zZm9ybVwiKSk7XG5cdH1cblx0cmV0dXJuIG5ldyBET01NYXRyaXgoKTtcbn07XG52YXIgZ2V0VHJhbnNmb3JtT3JpZ2luID0gKGVsKSA9PiB7XG5cdGNvbnN0IGNzc09yaWdpbiA9IGdldENvbXB1dGVkU3R5bGUoZWwpPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCJ0cmFuc2Zvcm0tb3JpZ2luXCIpIHx8IGA1MCUgNTAlYDtcblx0cmV0dXJuIHBhcnNlT3JpZ2luKGNzc09yaWdpbiwgZWwpO1xufTtcbnZhciBnZXRQcm9wZXJ0eVZhbHVlID0gKHNyYywgbmFtZSkgPT4ge1xuXHRpZiAoXCJjb21wdXRlZFN0eWxlTWFwXCIgaW4gc3JjKSB7XG5cdFx0Y29uc3QgdmFsID0gc3JjPy5jb21wdXRlZFN0eWxlTWFwPy4oKT8uZ2V0KG5hbWUpO1xuXHRcdHJldHVybiB2YWwgaW5zdGFuY2VvZiBDU1NVbml0VmFsdWUgPyB2YWw/LnZhbHVlIHx8IDAgOiB2YWw/LnRvU3RyaW5nPy4oKTtcblx0fVxuXHRpZiAoc3JjIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRjb25zdCBjcyA9IGdldENvbXB1dGVkU3R5bGU/LihzcmMsIFwiXCIpO1xuXHRcdHJldHVybiBwYXJzZUZsb2F0KGNzPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnJlcGxhY2U/LihcInB4XCIsIFwiXCIpKSB8fCAwO1xuXHR9XG5cdHJldHVybiBwYXJzZUZsb2F0KChzcmM/LnN0eWxlID8/IHNyYykuZ2V0UHJvcGVydHlWYWx1ZT8uKG5hbWUpPy5yZXBsYWNlPy4oXCJweFwiLCBcIlwiKSkgfHwgMDtcbn07XG52YXIgZ2V0RWxlbWVudFpvb20gPSAoZWxlbWVudCkgPT4ge1xuXHRsZXQgem9vbSA9IDEsIGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnRFbGVtZW50KSB7XG5cdFx0aWYgKFwiY3VycmVudENTU1pvb21cIiBpbiBjdXJyZW50RWxlbWVudCkge1xuXHRcdFx0Y29uc3QgY3VycmVudENTU1pvb20gPSBjdXJyZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbTtcblx0XHRcdGlmICh0eXBlb2YgY3VycmVudENTU1pvb20gPT09IFwibnVtYmVyXCIpIHJldHVybiB6b29tICo9IGN1cnJlbnRDU1Nab29tO1xuXHRcdH1cblx0XHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudEVsZW1lbnQpO1xuXHRcdGlmIChzdHlsZS56b29tICYmIHN0eWxlLnpvb20gIT09IFwibm9ybWFsXCIpIHJldHVybiB6b29tICo9IHBhcnNlRmxvYXQoc3R5bGUuem9vbSk7XG5cdFx0aWYgKHN0eWxlLnpvb20gJiYgc3R5bGUuem9vbSAhPT0gXCJub3JtYWxcIiB8fCBcImN1cnJlbnRDU1Nab29tXCIgaW4gY3VycmVudEVsZW1lbnQpIHJldHVybiB6b29tO1xuXHRcdGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBjdXJyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcblx0fVxuXHRyZXR1cm4gem9vbTtcbn07XG52YXIgZ2V0UHhWYWx1ZSA9IChlbGVtZW50LCBuYW1lKSA9PiB7XG5cdHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlPy4oZWxlbWVudCwgbmFtZSk7XG59O1xudmFyIGdldFBhZGRpbmcgPSAoc3JjLCBheGlzKSA9PiB7XG5cdGlmIChheGlzID09IFwiaW5saW5lXCIpIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWlubGluZS1zdGFydFwiKSArIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctaW5saW5lLWVuZFwiKTtcblx0cmV0dXJuIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctYmxvY2stc3RhcnRcIikgKyBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWJsb2NrLWVuZFwiKTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9CZWhhdmlvci50c1xudmFyIGJvdW5kQmVoYXZpb3JzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYmluZEJlaGF2aW9yID0gKGVsZW1lbnQsIGJlaFNldCwgYmVoYXZpb3IpID0+IHtcblx0bmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdGlmICghYmVoU2V0LmhhcyhiZWhhdmlvcikpIGJlaFNldC5hZGQoYmVoYXZpb3IpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdEJlaGF2aW9ycyA9IChlbGVtZW50LCBiZWhhdmlvcnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChiZWhhdmlvcnMpIHtcblx0XHRjb25zdCBiZWhTZXQgPSBib3VuZEJlaGF2aW9ycy5nZXRPckluc2VydChlbGVtZW50LCAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcblx0XHRbLi4uYmVoYXZpb3JzPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRCZWhhdmlvcihlbGVtZW50LCBiZWhTZXQsIGUpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9TdG9yZS50c1xudmFyIG5hbWVkU3RvcmVNYXBzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BuYW1lZFN0b3JlTWFwc1wiKTtcbnZhciBuYW1lZFN0b3JlTWFwcyA9IGdsb2JhbFRoaXNbbmFtZWRTdG9yZU1hcHNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGdldFN0b3Jlc09mRWxlbWVudCA9IChtYXAsIGVsZW1lbnQpID0+IHtcblx0Y29uc3QgRSA9IFsuLi5tYXAuZW50cmllcygpIHx8IFtdXTtcblx0cmV0dXJuIG5ldyBNYXAoRT8ubWFwPy4oKFtuLCBtXSkgPT4gW24sIG0/LmdldD8uKGVsZW1lbnQpXSk/LmZpbHRlcj8uKChbbiwgZV0pID0+ICEhZSkgfHwgW10pO1xufTtcbnZhciBpc1dlYWtDb21wYXRpYmxlID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuICh0eXBlb2YgZWxlbWVudCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBlbGVtZW50ID09IFwiZnVuY3Rpb25cIikgJiYgZWxlbWVudCAhPSBudWxsO1xufTtcbnZhciBiaW5kU3RvcmUgPSAoZWxlbWVudCwgbmFtZSwgb2JqKSA9PiB7XG5cdGlmICghaXNXZWFrQ29tcGF0aWJsZShlbGVtZW50KSAmJiBlbGVtZW50ICE9IG51bGwpIHJldHVybiBlbGVtZW50O1xuXHRsZXQgd2Vha01hcCA9IG5hbWVkU3RvcmVNYXBzLmdldChuYW1lKTtcblx0aWYgKCF3ZWFrTWFwKSB7XG5cdFx0d2Vha01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRcdG5hbWVkU3RvcmVNYXBzLnNldChuYW1lLCB3ZWFrTWFwKTtcblx0fVxuXHRpZiAoIXdlYWtNYXAuaGFzKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgd2Vha01hcC5zZXQoZWxlbWVudCwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIHJlZmxlY3RTdG9yZXMgPSAoZWxlbWVudCwgc3RvcmVzKSA9PiB7XG5cdGlmICghZWxlbWVudCB8fCAhc3RvcmVzKSByZXR1cm47XG5cdGZvciAoY29uc3QgW25hbWUsIG9ial0gb2Ygc3RvcmVzLmVudHJpZXMoKSkgYmluZFN0b3JlKGVsZW1lbnQsIG5hbWUsIG9iaik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL01peGlucy50c1xudmFyIHJlZmxlY3RNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW5zKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRpZiAobWl4aW5zKSB7XG5cdFx0Y29uc3QgbWl4aW5TZXQgPSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcblx0XHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdFx0Wy4uLm1peGlucz8udmFsdWVzPy4oKSB8fCBbXV0ubWFwKChlKSA9PiBiaW5kTWl4aW5zKGVsZW1lbnQsIGUsIG1peGluU2V0KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGdldEVsZW1lbnRSZWxhdGVkID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHtcblx0XHRzdG9yZVNldDogZ2V0U3RvcmVzT2ZFbGVtZW50KG5hbWVkU3RvcmVNYXBzLCBlbGVtZW50KSxcblx0XHRtaXhpblNldDogYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCksXG5cdFx0YmVoYXZpb3JTZXQ6IGJvdW5kQmVoYXZpb3JzPy5nZXQ/LihlbGVtZW50KVxuXHR9O1xufTtcbnZhciBiaW5kTWl4aW5zID0gKGVsZW1lbnQsIG1peGluLCBtaXhTZXQpID0+IHtcblx0Y29uc3Qgd2VsID0gbmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdG1peFNldCB8fD0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCk7XG5cdGlmICghbWl4U2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRtaXhTZXQ/LmFkZD8uKG1peGluKTtcblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHRcdGlmIChtaXhpbi5uYW1lKSBlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW10sIG1peGluLm5hbWVdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0bWl4aW4/LmNvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGJvdW5kTWl4aW5TZXRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGJvdW5kTWl4aW5TZXRcIik7XG52YXIgYm91bmRNaXhpblNldCA9IGdsb2JhbFRoaXNbYm91bmRNaXhpblNldFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluRWxlbWVudHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgbWl4aW5FbGVtZW50cyA9IGdsb2JhbFRoaXNbbWl4aW5FbGVtZW50c1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluUmVnaXN0cnlTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIik7XG52YXIgbWl4aW5SZWdpc3RyeSA9IGdsb2JhbFRoaXNbbWl4aW5SZWdpc3RyeVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgbWl4aW5OYW1lc3BhY2VTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIpO1xudmFyIG1peGluTmFtZXNwYWNlID0gZ2xvYmFsVGhpc1ttaXhpbk5hbWVzcGFjZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlcyA9IChlbGVtZW50LCBtaXhpbikgPT4ge1xuXHRpZiAodHlwZW9mIG1peGluID09IFwic3RyaW5nXCIpIG1peGluID0gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obWl4aW4pO1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdGNvbnN0IG1peGlucyA9IG5ldyBTZXQoWy4uLm5hbWVzXS5tYXAoKG4pID0+IG1peGluUmVnaXN0cnk/LmdldD8uKG4pKS5maWx0ZXIoKG0pID0+ICEhbSkpO1xuXHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRpZiAoIW1peGluRWxlbWVudHM/Lmhhcz8uKG1peGluKSkgbWl4aW5FbGVtZW50cz8uc2V0Py4obWl4aW4sIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKTtcblx0aWYgKCFib3VuZE1peGluU2V0Py5oYXM/LihlbGVtZW50KSkgYm91bmRNaXhpblNldD8uc2V0Py4oZWxlbWVudCwgbWl4aW5TZXQpO1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkgbWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0aWYgKG1peGlucy5oYXMobWl4aW4pIHx8ICFtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/Lmhhcz8uKGVsZW1lbnQpKSB7XG5cdFx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRcdG5hbWVzLmFkZChtaXhpbk5hbWVzcGFjZT8uZ2V0Py4obWl4aW4pKTtcblx0XHRcdG1peGluU2V0Py5hZGQ/LihtaXhpbik7XG5cdFx0XHRlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLm5hbWVzXS5maWx0ZXIoKG4pID0+ICEhbikuam9pbihcIiBcIikpO1xuXHRcdH1cblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHR9XG5cdGlmIChtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkge1xuXHRcdFx0bWl4aW5TZXQ/LmRlbGV0ZT8uKG1peGluKTtcblx0XHRcdG1peGluPy5kaXNjb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdH1cblx0fVxufTtcbnZhciByb290cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgYWRkUm9vdCA9IChyb290ID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKCFyb290KSByZXR1cm47XG5cdGlmICghcm9vdHM/Lmhhcz8uKHJvb3QpKSB7XG5cdFx0cm9vdHM/LmFkZD8uKHJvb3QpO1xuXHRcdG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKHJvb3QsIFwiKlwiLCBcImRhdGEtbWl4aW5cIiwgKG11dGF0aW9uKSA9PiB1cGRhdGVBbGxNaXhpbnMobXV0YXRpb24udGFyZ2V0KSk7XG5cdFx0b2JzZXJ2ZUJ5U2VsZWN0b3Iocm9vdCwgXCJbZGF0YS1taXhpbl1cIiwgKG11dGF0aW9uKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbXV0YXRpb24uYWRkZWROb2RlcykgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiByb290O1xufTtcbnZhciB1cGRhdGVBbGxNaXhpbnMgPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdFsuLi5uZXcgU2V0KFsuLi5uYW1lc10ubWFwKChuKSA9PiBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihuKSkuZmlsdGVyKChtKSA9PiAhIW0pKV0ubWFwPy4oKG0pID0+IHVwZGF0ZU1peGluQXR0cmlidXRlcyhlbGVtZW50LCBtKSk7XG59O1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCA9IChlbGVtZW50cywgbWl4aW4pID0+IHtcblx0ZWxlbWVudHMuZm9yRWFjaCgoZSkgPT4gbWl4aW4gPyB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZSwgbWl4aW4pIDogdXBkYXRlQWxsTWl4aW5zKGUpKTtcbn07XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyA9IChtaXhpbikgPT4ge1xuXHRmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbChyb290Py5xdWVyeVNlbGVjdG9yQWxsPy4oXCJbZGF0YS1taXhpbl1cIiksIG1peGluKTtcbn07XG52YXIgbmFtZVJlZ2lzdHJ5RiA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoa2V5KSA9PiB7XG5cdG1peGluUmVnaXN0cnk/LmRlbGV0ZT8uKGtleSk7XG59KTtcbnZhciByZWdpc3Rlck1peGluID0gKG5hbWUsIG1peGluKSA9PiB7XG5cdGlmICghbWl4aW5OYW1lc3BhY2U/Lmhhcz8uKG1peGluKSkge1xuXHRcdGNvbnN0IGtleSA9IG5hbWU/LnRyaW0/LigpO1xuXHRcdGlmIChrZXkpIHtcblx0XHRcdG1peGluTmFtZXNwYWNlPy5zZXQ/LihtaXhpbiwga2V5KTtcblx0XHRcdG1peGluUmVnaXN0cnk/LnNldD8uKGtleSwgbWl4aW4pO1xuXHRcdFx0bmFtZVJlZ2lzdHJ5Rj8ucmVnaXN0ZXI/LihtaXhpbiwga2V5KTtcblx0XHRcdHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMobWl4aW4pO1xuXHRcdH1cblx0fVxufTtcbmFkZFJvb3QodHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xudmFyIERPTU1peGluID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihuYW1lID0gbnVsbCkge1xuXHRcdGlmIChuYW1lKSByZWdpc3Rlck1peGluKG5hbWUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3Qod0VsZW1lbnQsIHdTZWxmLCByZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWxlbWVudCwgd1NlbGYsIHJlbGF0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRzdG9yZUZvckVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiBuYW1lZFN0b3JlTWFwcy5nZXQodGhpcy5uYW1lIHx8IFwiXCIpPy5nZXQ/LihlbGVtZW50KTtcblx0fVxuXHRyZWxhdGVkRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpO1xuXHR9XG5cdGdldCBlbGVtZW50cygpIHtcblx0XHRyZXR1cm4gbWl4aW5FbGVtZW50cz8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIG1peGluTmFtZXNwYWNlPy5nZXQ/Lih0aGlzKTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0hhbmRsZXIudHNcbnZhciBoYW5kbGVIaWRkZW4gPSAoZWxlbWVudCwgXywgdmlzaWJsZSkgPT4ge1xuXHRjb25zdCAkcmVmID0gdmlzaWJsZTtcblx0aWYgKGhhc1ZhbHVlKHZpc2libGUpKSB2aXNpYmxlID0gdmlzaWJsZS52YWx1ZTtcblx0Y29uc3QgaXNWaXNpYmxlID0gKHZpc2libGUgPSBub3JtYWxpemVQcmltaXRpdmUodmlzaWJsZSkpICE9IG51bGwgJiYgdmlzaWJsZSAhPT0gZmFsc2U7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgZWxlbWVudC5oaWRkZW4gPSAhaXNWaXNpYmxlO1xuXHRcdGVsc2UgaWYgKGlzVmlzaWJsZSkgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKTtcblx0XHRlbHNlIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIiwgXCJcIik7XG5cdH0pO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgaGFuZGxlUHJvcGVydHkgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIShwcm9wID0gdHlwZW9mIHByb3AgPT0gXCJzdHJpbmdcIiA/IGtlYmFiVG9DYW1lbChwcm9wKSA6IHByb3ApIHx8ICFlbCB8fCBbXG5cdFx0XCJzdHlsZVwiLFxuXHRcdFwiZGF0YXNldFwiLFxuXHRcdFwiYXR0cmlidXRlU3R5bGVNYXBcIixcblx0XHRcInN0eWxlTWFwXCIsXG5cdFx0XCJjb21wdXRlZFN0eWxlTWFwXCJcblx0XS5pbmRleE9mKHByb3AgfHwgXCJcIikgIT0gLTEpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0aWYgKGVsPy5bcHJvcF0gPT09IHZhbCkgcmV0dXJuIGVsO1xuXHRpZiAoZWw/Lltwcm9wXSAhPT0gdmFsKSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodmFsICE9IG51bGwpIGVsW3Byb3BdID0gdmFsO1xuXHRcdGVsc2UgZGVsZXRlIGVsW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVEYXRhc2V0ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3QgZGF0YXNldFJlZiA9IGVsPy5kYXRhc2V0O1xuXHRpZiAoIXByb3AgfHwgIWVsIHx8ICFkYXRhc2V0UmVmKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWw/LnZhbHVlO1xuXHRwcm9wID0ga2ViYWJUb0NhbWVsKHByb3ApO1xuXHRpZiAoZGF0YXNldFJlZj8uW3Byb3BdID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPT09IGZhbHNlKSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0ZWxzZSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiKSBkYXRhc2V0UmVmW3Byb3BdID0gU3RyaW5nKHZhbCk7XG5cdFx0ZWxzZSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgZGVsZXRlU3R5bGVQcm9wZXJ0eSA9IChlbCwgbmFtZSkgPT4gZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoY2FtZWxUb0tlYmFiKG5hbWUpKTtcbnZhciBoYW5kbGVTdHlsZUNoYW5nZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IHN0eWxlUmVmID0gZWw/LnN0eWxlO1xuXHRpZiAoIXByb3AgfHwgdHlwZW9mIHByb3AgIT0gXCJzdHJpbmdcIiB8fCAhZWwgfHwgIXN0eWxlUmVmKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIodmFsLCAoKSA9PiB7XG5cdFx0aWYgKGlzVmFsKHZhbCkgfHwgaGFzVmFsdWUodmFsKSB8fCBpc1ZhbHVlVW5pdCh2YWwpKSBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wLCB2YWwpO1xuXHRcdGVsc2UgaWYgKHZhbCA9PSBudWxsKSBkZWxldGVTdHlsZVByb3BlcnR5KGVsLCBwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlQXR0cmlidXRlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCFwcm9wIHx8ICFlbCkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRwcm9wID0gY2FtZWxUb0tlYmFiKHByb3ApO1xuXHRpZiAoZWw/LmdldEF0dHJpYnV0ZT8uKHByb3ApID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIgJiYgdmFsICE9IG51bGwgJiYgKHR5cGVvZiB2YWwgPT0gXCJib29sZWFuXCIgPyB2YWwgPT0gdHJ1ZSA6IHRydWUpKSBlbD8uc2V0QXR0cmlidXRlPy4ocHJvcCwgU3RyaW5nKHZhbCkpO1xuXHRcdGVsc2UgZWw/LnJlbW92ZUF0dHJpYnV0ZT8uKHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL2p1bmN0aW9uL3R5cGVzLnRzXG5mdW5jdGlvbiBqdW5jdGlvblRvQm94KGEsIGIpIHtcblx0Y29uc3QgbGVmdCA9IE1hdGgubWluKGEueCwgYi54KTtcblx0Y29uc3QgdG9wID0gTWF0aC5taW4oYS55LCBiLnkpO1xuXHRjb25zdCByaWdodCA9IE1hdGgubWF4KGEueCwgYi54KTtcblx0Y29uc3QgYm90dG9tID0gTWF0aC5tYXgoYS55LCBiLnkpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aDogcmlnaHQgLSBsZWZ0LFxuXHRcdGhlaWdodDogYm90dG9tIC0gdG9wXG5cdH07XG59XG52YXIgSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tc2VsZWN0OnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tc2VsZWN0Om1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXNlbGVjdDplbmRcIixcblx0Y2FuY2VsOiBcImp1bmN0aW9uLXNlbGVjdDpjYW5jZWxcIlxufTtcbnZhciBKVU5DVElPTl9EUkFHX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tZHJhZzpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLWRyYWc6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tZHJhZzplbmRcIlxufTtcbnZhciBKVU5DVElPTl9SRVNJWkVfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1yZXNpemU6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1yZXNpemU6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tcmVzaXplOmVuZFwiXG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vanVuY3Rpb24vSnVuY3Rpb25NaXhpbnMudHNcbnZhciBtaXhpbkRpc3Bvc2Vyc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5EaXNwb3NlcnNcIik7XG52YXIgbWl4aW5EaXNwb3NlcnMgPSBnbG9iYWxUaGlzW21peGluRGlzcG9zZXJzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcHVzaERpc3Bvc2FibGUgPSAoaG9zdCwgbWl4aW5OYW1lLCBmbikgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgbGlzdCA9IG1hcC5nZXQobWl4aW5OYW1lKSA/PyBbXTtcblx0bGlzdC5wdXNoKGZuKTtcblx0bWFwLnNldChtaXhpbk5hbWUsIGxpc3QpO1xuXHRtaXhpbkRpc3Bvc2Vycy5zZXQoaG9zdCwgbWFwKTtcbn07XG52YXIgcnVuRGlzcG9zZXJzID0gKGhvc3QsIG1peGluTmFtZSkgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCk7XG5cdGNvbnN0IGxpc3QgPSBtYXA/LmdldChtaXhpbk5hbWUpO1xuXHRpZiAoIWxpc3QpIHJldHVybjtcblx0Zm9yIChjb25zdCBmbiBvZiBsaXN0KSB0cnkge1xuXHRcdGZuKCk7XG5cdH0gY2F0Y2gge31cblx0bWFwLmRlbGV0ZShtaXhpbk5hbWUpO1xuXHRpZiAobWFwLnNpemUgPT09IDApIG1peGluRGlzcG9zZXJzLmRlbGV0ZShob3N0KTtcbn07XG52YXIgcGFyc2VQeFZhciA9IChob3N0LCBuYW1lKSA9PiB7XG5cdGNvbnN0IHJhdyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnRyaW0/LigpID8/IFwiXCI7XG5cdGNvbnN0IG4gPSBwYXJzZUZsb2F0KHJhdyk7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogMDtcbn07XG52YXIgcXVlcnlIYW5kbGUgPSAoaG9zdCwgYXR0ciwgZmFsbGJhY2spID0+IHtcblx0Y29uc3Qgc2VsID0gaG9zdC5nZXRBdHRyaWJ1dGUoYXR0cik/LnRyaW0oKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxsYmFjaztcblx0Y29uc3QgZm91bmQgPSBob3N0LnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcblx0cmV0dXJuIGZvdW5kIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBmb3VuZCA6IGZhbGxiYWNrO1xufTtcbnZhciBKdW5jdGlvblNlbGVjdE1peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0b3ZlcmxheS5jbGFzc05hbWUgPSBcInVpLWp1bmN0aW9uLXNlbGVjdC1vdmVybGF5XCI7XG5cdFx0b3ZlcmxheS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLW92ZXJsYXlcIiwgXCJcIik7XG5cdFx0b3ZlcmxheS5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6dmFyKC0tei1tYXgsIDk5OTkpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IGRhc2hlZCBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLWNvbG9yLXByaW1hcnksICM1YTdmZmYpIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNWE3ZmZmKSAxNCUsIHRyYW5zcGFyZW50KTtkaXNwbGF5Om5vbmU7aW5zZXQ6YXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjA7XCI7XG5cdFx0Y29uc3QgZW5zdXJlUG9zaXRpb25lZCA9ICgpID0+IHtcblx0XHRcdGlmICgoZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oaG9zdCkpPy5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikgaG9zdC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0XHR9O1xuXHRcdGVuc3VyZVBvc2l0aW9uZWQoKTtcblx0XHRob3N0LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXHRcdGxldCBhY3RpdmUgPSBmYWxzZTtcblx0XHRsZXQgYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRsZXQgYiA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRjb25zdCBsb2NhbFBvaW50ID0gKGV2KSA9PiB7XG5cdFx0XHRjb25zdCByID0gaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IGV2LmNsaWVudFggLSByLmxlZnQsXG5cdFx0XHRcdHk6IGV2LmNsaWVudFkgLSByLnRvcFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNvbnN0IGFwcGx5T3ZlcmxheSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRpZiAoYm94LndpZHRoIDwgMSAmJiBib3guaGVpZ2h0IDwgMSkge1xuXHRcdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5sZWZ0ID0gYCR7Ym94LmxlZnR9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS50b3AgPSBgJHtib3gudG9wfXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUud2lkdGggPSBgJHtib3gud2lkdGh9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBgJHtib3guaGVpZ2h0fXB4YDtcblx0XHR9O1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtanVuY3Rpb24taWdub3JlLXNlbGVjdF0sIFtkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXSwgW2RhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZV0sIGJ1dHRvbiwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpIHJldHVybjtcblx0XHRcdGlmICghKGV2LnRhcmdldCA9PT0gaG9zdCB8fCBob3N0LmNvbnRhaW5zKGV2LnRhcmdldCkpKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSB0cnVlO1xuXHRcdFx0YSA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YiA9IHsgLi4uYSB9O1xuXHRcdFx0aG9zdC5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRiID0gbG9jYWxQb2ludChldik7XG5cdFx0XHRhcHBseU92ZXJsYXkoKTtcblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRib3gsXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBlbmQgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhvc3QucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRib3gsXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0ZW5kKGV2KTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uQ2FuY2VsID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhvc3QucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuY2FuY2VsLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDogeyBob3N0IH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsICgpID0+IHtcblx0XHRcdG92ZXJsYXkucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJjYW5jZWxcIiwgb25DYW5jZWwpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uRHJhZ01peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteFwiLCBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIikpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIikpO1xuXHRcdGNvbnN0IHByZXZpb3VzVHJhbnNmb3JtID0gaG9zdC5zdHlsZS50cmFuc2Zvcm07XG5cdFx0aWYgKCFob3N0LnN0eWxlLnRyYW5zZm9ybSB8fCBob3N0LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJub25lXCIpIGhvc3Quc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChjYWxjKHZhcigtLWp4LWRyYWcteCwgMCkgKiAxcHgpLCBjYWxjKHZhcigtLWp4LWRyYWcteSwgMCkgKiAxcHgpLCAwKVwiO1xuXHRcdGNvbnN0IGhhbmRsZSA9IHF1ZXJ5SGFuZGxlKGhvc3QsIFwiZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRsZXQgc3RhcnRYID0gMDtcblx0XHRsZXQgc3RhcnRZID0gMDtcblx0XHRsZXQgYmFzZVggPSAwO1xuXHRcdGxldCBiYXNlWSA9IDA7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IHRydWU7XG5cdFx0XHRzdGFydFggPSBldi5jbGllbnRYO1xuXHRcdFx0c3RhcnRZID0gZXYuY2xpZW50WTtcblx0XHRcdGJhc2VYID0gcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpO1xuXHRcdFx0YmFzZVkgPSBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIik7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRjbGllbnRYOiBldi5jbGllbnRYLFxuXHRcdFx0XHRcdGNsaWVudFk6IGV2LmNsaWVudFksXG5cdFx0XHRcdFx0YmFzZVgsXG5cdFx0XHRcdFx0YmFzZVlcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRjb25zdCBkeCA9IGV2LmNsaWVudFggLSBzdGFydFg7XG5cdFx0XHRjb25zdCBkeSA9IGV2LmNsaWVudFkgLSBzdGFydFk7XG5cdFx0XHRjb25zdCBueCA9IGJhc2VYICsgZHg7XG5cdFx0XHRjb25zdCBueSA9IGJhc2VZICsgZHk7XG5cdFx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgbngpO1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy15XCIsIG55KTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdGR4LFxuXHRcdFx0XHRcdGR5LFxuXHRcdFx0XHRcdHg6IG54LFxuXHRcdFx0XHRcdHk6IG55XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghZHJhZ2dpbmcpIHJldHVybjtcblx0XHRcdGRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRoYW5kbGUucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHg6IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKSxcblx0XHRcdFx0XHR5OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIilcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsICgpID0+IHtcblx0XHRcdGhvc3Quc3R5bGUudHJhbnNmb3JtID0gcHJldmlvdXNUcmFuc2Zvcm07XG5cdFx0fSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uUmVzaXplTWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgcmVzaXppbmcgPSBmYWxzZTtcblx0XHRsZXQgc3ggPSAwO1xuXHRcdGxldCBzeSA9IDA7XG5cdFx0bGV0IHN3ID0gMDtcblx0XHRsZXQgc2ggPSAwO1xuXHRcdGNvbnN0IG1pblcgPSBNYXRoLm1heCgxMjAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4td1wiKSB8fCBcIlwiKSB8fCAxMjApO1xuXHRcdGNvbnN0IG1pbkggPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdChob3N0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gdHJ1ZTtcblx0XHRcdHN4ID0gZXYuY2xpZW50WDtcblx0XHRcdHN5ID0gZXYuY2xpZW50WTtcblx0XHRcdHN3ID0gaG9zdC5vZmZzZXRXaWR0aDtcblx0XHRcdHNoID0gaG9zdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBzdyxcblx0XHRcdFx0XHRoZWlnaHQ6IHNoXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFyZXNpemluZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbncgPSBNYXRoLm1heChtaW5XLCBzdyArIChldi5jbGllbnRYIC0gc3gpKTtcblx0XHRcdGNvbnN0IG5oID0gTWF0aC5tYXgobWluSCwgc2ggKyAoZXYuY2xpZW50WSAtIHN5KSk7XG5cdFx0XHRob3N0LnN0eWxlLndpZHRoID0gYCR7bnd9cHhgO1xuXHRcdFx0aG9zdC5zdHlsZS5oZWlnaHQgPSBgJHtuaH1weGA7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBudyxcblx0XHRcdFx0XHRoZWlnaHQ6IG5oXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRoYW5kbGUucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IGhvc3Qub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBob3N0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xubmV3IEp1bmN0aW9uU2VsZWN0TWl4aW4oKTtcbm5ldyBKdW5jdGlvbkRyYWdNaXhpbigpO1xubmV3IEp1bmN0aW9uUmVzaXplTWl4aW4oKTtcblxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBET01NaXhpbiwgSnVuY3Rpb25EcmFnTWl4aW4sIEp1bmN0aW9uUmVzaXplTWl4aW4sIEp1bmN0aW9uU2VsZWN0TWl4aW4sIE1BVENILCBNT0MsIE1PQ0VsZW1lbnQsIFJBRkJlaGF2aW9yLCBSRUdFWCwgUk9PVCwgV2F2eVNoYXBlZENpcmNsZSwgX19leHBvcnRQcm9wZXJ0aWVzLCBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLCBhZGRFdmVudCwgYWRkRXZlbnRzLCBhZGRFdmVudHNMaXN0LCBhZGRSb290LCBhZG9wdGVkQmxvYk1hcCwgYWRvcHRlZExheWVyTWFwLCBhZG9wdGVkTWFwLCBhZG9wdGVkU2VsZWN0b3JNYXAsIGFkb3B0ZWRTaGFkb3dMYXllck1hcCwgYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwLCBhbmltYXRlSGlkZSwgYW5pbWF0ZVNob3csIGF2YWlsU2l6ZSwgYmJoLCBiYncsIGJpbmRCZWhhdmlvciwgYmluZE1peGlucywgYmluZFN0b3JlLCBibG9iVVJMTWFwLCBib3JkZXJCb3hIZWlnaHQsIGJvcmRlckJveFdpZHRoLCBib3VuZEJlaGF2aW9ycywgYm91bmRNaXhpblNldCwgY2FjaGVNYXAsIGNiaCwgY2J3LCBjaGFuZ2Vab29tLCBjbGFzc2VzLCBjb21wdXRlQ2FyZXRQb3NpdGlvbiwgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50LCBjb250YWluc09yU2VsZiwgY29udGVudEJveEhlaWdodCwgY29udGVudEJveFdpZHRoLCBjcmVhdGVFbGVtZW50VmFuaWxsYSwgY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQsIGNyZWF0ZVR5cGVkVW5pdFZhbHVlLCBkZWxldGVTdHlsZVByb3BlcnR5LCBkZXRlY3RNb2JpbGUsIGRvQm9yZGVyT2JzZXJ2ZSwgZG9Db250ZW50T2JzZXJ2ZSwgZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSwgZmV0Y2hBbmRDYWNoZSwgZmV0Y2hBc0lubGluZSwgZml4T3JpZW50VG9TY3JlZW4sIGZpeGVkQ2xpZW50Wm9vbSwgZ2V0QWRvcHRlZFN0eWxlUnVsZSwgZ2V0QXZhaWxTaXplLCBnZXRCb3VuZGluZ09yaWVudFJlY3QsIGdldENvcnJlY3RPcmllbnRhdGlvbiwgZ2V0RWxlbWVudFJlbGF0ZWQsIGdldEVsZW1lbnRab29tLCBnZXRFdmVudFRhcmdldCwgZ2V0T2Zmc2V0UGFyZW50LCBnZXRPZmZzZXRQYXJlbnRDaGFpbiwgZ2V0UGFkZGluZywgZ2V0UHJvcGVydHlWYWx1ZSwgZ2V0UHhWYWx1ZSwgZ2V0U3RvcmVzT2ZFbGVtZW50LCBnZXRTdHlsZUxheWVyLCBnZXRTdHlsZVJ1bGUsIGdldFRyYW5zZm9ybSwgZ2V0VHJhbnNmb3JtT3JpZ2luLCBnZXRab29tLCBoYW5kbGVBdHRyaWJ1dGUsIGhhbmRsZURhdGFzZXQsIGhhbmRsZUhpZGRlbiwgaGFuZGxlUHJvcGVydHksIGhhbmRsZVN0eWxlQ2hhbmdlLCBoYXNQYXJlbnQsIGhhc2gsIGh0bWwsIGluY2x1ZGVTZWxmLCBpbmRleE9mLCBpbml0VGV4dFN0eWxlLCBpbml0VmlzaWJpbGl0eSwgaXNFbGVtZW50LCBpc0luRm9jdXMsIGlzTW9iaWxlLCBpc05hdGl2ZUNTU1N0eWxlVmFsdWUsIGlzTmVhcmx5SWRlbnRpdHksIGlzUmVhY3RpdmVTdHlsZVZhbHVlLCBpc1ZhbGlkUGFyZW50LCBsYXllckNvdW50ZXIsIGxvYWRBc0Fkb3B0ZWQsIGxvYWRCbG9iU3R5bGUsIGxvYWRJbmxpbmVTdHlsZSwgbG9hZFN0eWxlU2hlZXQsIG1ha2VSQUZDeWNsZSwgbWVhc3VyZUlucHV0SW5Gb2N1cywgbWVhc3VyZVRleHQsIG1peGluRGlzcG9zZXJzLCBtaXhpbkVsZW1lbnRzLCBtaXhpbk5hbWVzcGFjZSwgbWl4aW5SZWdpc3RyeSwgbmFtZVJlZ2lzdHJ5RiwgbmFtZWRTdG9yZU1hcHMsIG9ic2VydmVBdHRyaWJ1dGUsIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yLCBvYnNlcnZlQm9yZGVyQm94LCBvYnNlcnZlQnlTZWxlY3Rvciwgb2JzZXJ2ZUNvbnRlbnRCb3gsIG9uQm9yZGVyT2JzZXJ2ZSwgb25Db250ZW50T2JzZXJ2ZSwgb3JpZW50T2YsIG9yaWVudGF0aW9uTnVtYmVyTWFwLCBwYXJzZUxlbmd0aCwgcGFyc2VPcmlnaW4sIHBhc3NpdmVPcHRzLCBwcmVsb2FkU3R5bGUsIHJlYWRGaXhlZE92ZXJsYXlWaWV3cG9ydCwgcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQsIHJlZmxlY3RCZWhhdmlvcnMsIHJlZmxlY3RNaXhpbnMsIHJlZmxlY3RTdG9yZXMsIHJlZ2lzdGVyTWl4aW4sIHJlbW92ZUFkb3B0ZWQsIHJlbW92ZUV2ZW50LCByZW1vdmVFdmVudHMsIHJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCwgcm9vdHMsIHNldEF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXNJZk51bGwsIHNldENoZWNrZWQsIHNldElkbGVJbnRlcnZhbCwgc2V0UHJvcGVydHksIHNldFN0eWxlSW5SdWxlLCBzZXRTdHlsZVByb3BlcnR5LCBzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2ssIHNldFN0eWxlUHJvcGVydHlUeXBlZCwgc2V0U3R5bGVSdWxlLCBzZXRTdHlsZVJ1bGVzLCBzZXRTdHlsZVVSTCwgdGhyb3R0bGVNYXAsIHVuZml4ZWRDbGllbnRab29tLCB1cGRhdGVBbGxNaXhpbnMsIHVwZGF0ZU1peGluQXR0cmlidXRlcywgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzLCB1cGRhdGVWUCwgdXJsLCB3aGVuQW55U2NyZWVuQ2hhbmdlcywgem9vbU9mLCB6b29tVmFsdWVzIH07Il0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyxpQkFBQUEsR0FBZSxnQkFBQUMsSUFBYyxnQkFBQUMsSUFBYyxZQUFBQyxHQUFVLHFCQUFBQyxJQUFtQixTQUFBQyxJQUFPLGVBQUFDLElBQWEsZ0JBQUFDLElBQWMsdUJBQUFDLElBQXFCLHNCQUFBQyxJQUFvQiwrQkFBQUMsSUFBNkIscUJBQUFDLFVBQXlCO0FBR2xOLElBQUlDLEtBQWtDLHVCQUFPLElBQUksa0NBQWtDLEdBQy9FQyxLQUE0QixXQUFXRCxFQUErQixNQUFzQixvQkFBSSxJQUFJO0FBQ3hHO0FBQUEsRUFDQztBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFB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RmQsRUFBZXBaLEdBQU0sc0JBQXNCeEIsRUFBU2djLEdBQVEsYUFBYUosQ0FBSSxDQUFDLEdBQzlFaEIsRUFBZXBaLEdBQU0sc0JBQXNCeEIsRUFBU2djLEdBQVEsaUJBQWlCSixDQUFJLENBQUMsR0FDM0U7QUFBQSxFQUNSO0FBQUEsRUFDQSxXQUFXUCxHQUFLO0FBQ2YsVUFBTTdaLElBQU82WixHQUFLLFFBQVE7QUFDMUIsV0FBSTdaLEtBQU11WixHQUFhdlosR0FBTSxvQkFBb0IsR0FDMUM7QUFBQSxFQUNSO0FBQ0Q7QUFDQSxJQUFJNFosR0FBb0I7QUFDeEIsSUFBSVUsR0FBa0I7QUFDdEIsSUFBSVksR0FBb0I7IiwKICAibmFtZXMiOiBbIiRhdm9pZFRyaWdnZXIiLCAiY2FtZWxUb0tlYmFiIiwgImN2dF9jc190b19vcyIsICJoYXNWYWx1ZSIsICJpc0FycmF5T3JJdGVyYWJsZSIsICJpc1ZhbCIsICJpc1ZhbHVlVW5pdCIsICJrZWJhYlRvQ2FtZWwiLCAibm9ybWFsaXplR3JpZExheW91dCIsICJub3JtYWxpemVQcmltaXRpdmUiLCAicmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsIiwgInRyeVN0cmluZ0FzTnVtYmVyIiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wiLCAiX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyIsICJvcHRpb25zIiwgIm5hbWUiLCAiZSIsICJfX2V4cG9ydFByb3BlcnRpZXMiLCAiaXNNb2JpbGUiLCAiY2hlY2siLCAiYSIsICJkZXRlY3RNb2JpbGUiLCAiY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2siLCAicnVuV2hlbklkbGUkMSIsICJjYiIsICJ0aW1lb3V0IiwgImdldE9mZnNldFBhcmVudCIsICJlbGVtZW50IiwgImdldE9mZnNldFBhcmVudENoYWluIiwgInBhcmVudHMiLCAiY3VycmVudCIsICJwYXJlbnQiLCAiaXNOZWFybHlJZGVudGl0eSIsICJtYXRyaXgiLCAiZXBzaWxvbiIsICJtYWtlUkFGQ3ljbGUiLCAiY29udHJvbCIsICJyQUYiLCAicmVzIiwgIlJBRkJlaGF2aW9yIiwgInNoZWQiLCAiUk9PVCIsICJzZXRBdHRyaWJ1dGVzSWZOdWxsIiwgImF0dHJzIiwgInZhbHVlIiwgIm9sZCIsICJzZXRBdHRyaWJ1dGVzIiwgInRocm90dGxlTWFwIiwgInNldElkbGVJbnRlcnZhbCIsICJhcmdzIiwgInN0YXR1cyIsICJyIiwgImJvcmRlckJveFdpZHRoIiwgImJvcmRlckJveEhlaWdodCIsICJjb250ZW50Qm94V2lkdGgiLCAiY29udGVudEJveEhlaWdodCIsICJvbkJvcmRlck9ic2VydmUiLCAib25Db250ZW50T2JzZXJ2ZSIsICJkb0NvbnRlbnRPYnNlcnZlIiwgIm9ic2VydmVyIiwgImVudHJpZXMiLCAiZW50cnkiLCAiY29udGVudEJveFNpemUiLCAiZG9Cb3JkZXJPYnNlcnZlIiwgImJvcmRlckJveFNpemUiLCAidXJsIiwgInR5cGUiLCAic291cmNlIiwgImh0bWwiLCAicGFyc2VkIiwgInNldENoZWNrZWQiLCAiaW5wdXQiLCAiZXYiLCAiaXNWYWxpZFBhcmVudCIsICJpbmRleE9mIiwgIm5vZGUiLCAiTUFUQ0giLCAiUkVHRVgiLCAiY3JlYXRlRWxlbWVudFZhbmlsbGEiLCAic2VsZWN0b3IiLCAiY3JlYXRlIiwgIm1hdGNoIiwgImNsYXNzTmFtZSIsICJpc0VsZW1lbnQiLCAiZWwiLCAiaW5jbHVkZVNlbGYiLCAidGFyZ2V0IiwgInNlbCIsICJoYXNQYXJlbnQiLCAicGFzc2l2ZU9wdHMiLCAiYWRkRXZlbnQiLCAib3B0cyIsICJ3ciIsICJyZW1vdmVFdmVudCIsICJhZGRFdmVudHMiLCAicm9vdCIsICJoYW5kbGVycyIsICJhZGRFdmVudHNMaXN0IiwgImV2ZW50cyIsICJsaXN0IiwgImNicyIsICJyZW1vdmVFdmVudHMiLCAiZ2V0RXZlbnRUYXJnZXQiLCAicGF0aCIsICJjb250YWluc09yU2VsZiIsICJiIiwgImFFbCIsICJiRWwiLCAiYUluZGV4IiwgImJJbmRleCIsICJNT0NFbGVtZW50IiwgInNlbGYiLCAiaG9zdE1hdGNoZWQiLCAiY2xvc2VzdCIsICJob3N0IiwgIk1PQyIsICJpc0luRm9jdXMiLCAic2VsZWN0b3JPckVsZW1lbnQiLCAiZGlyIiwgImFjdGl2ZSIsICJpc0ZvY3VzZWQiLCAiaXNIb3ZlcmVkIiwgImFsdENuZCIsICJnZXRab29tIiwgInpvb21WYWx1ZXNTeW1ib2wiLCAiem9vbVZhbHVlcyIsICJ6b29tT2YiLCAiY29udGFpbmVyIiwgImNoYW5nZVpvb20iLCAic2NhbGUiLCAiZml4ZWRDbGllbnRab29tIiwgInVuZml4ZWRDbGllbnRab29tIiwgIm9yaWVudE9mIiwgInJhdyIsICJuIiwgImdldEJvdW5kaW5nT3JpZW50UmVjdCIsICJvcmllbnQiLCAiem9vbSIsICJib3giLCAibmJ4IiwgIm9yX2kiLCAidnYiLCAic2l6ZSIsICJsZWZ0XyIsICJ0b3BfIiwgInJpZ2h0XyIsICJib3R0b21fIiwgImxlZnQiLCAicmlnaHQiLCAidG9wIiwgImJvdHRvbSIsICJ3aWR0aCIsICJoZWlnaHQiLCAiYmJ3IiwgImJiaCIsICJjYnciLCAiY2JoIiwgInJ1bldoZW5JZGxlIiwgIktFWUJPQVJEX09WRVJMQVlfUFgiLCAidmlydHVhbEtleWJvYXJkIiwgImVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkiLCAidmsiLCAiaXNJbWVUYXJnZXQiLCAidGFnIiwgImxheW91dExvY2tPcmllbnQiLCAibGF5b3V0TG9ja1ciLCAibGF5b3V0TG9ja0giLCAiY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQiLCAic2FmZVdpZHRoIiwgInNhZmVIZWlnaHQiLCAic2FmZUxlZnQiLCAic2FmZVRvcCIsICJyZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQiLCAicmVhZExheW91dFZpZXdwb3J0IiwgImlubmVyVyIsICJpbm5lckgiLCAidnZXIiwgInZ2SCIsICJ2dlRvcCIsICJ2a0giLCAidnZPdmVybGFwIiwgImtleWJvYXJkIiwgImNhbmRpZGF0ZVciLCAiY2FuZGlkYXRlSCIsICJzdWRkZW5TaHJpbmsiLCAicGluT3ZlcmxheVNjcm9sbCIsICJnZXRBdmFpbFNpemUiLCAibCIsICJsYXlvdXQiLCAidnZCbG9jayIsICJhdyIsICJhaCIsICJhdmFpbFNpemUiLCAiY2xhc3NlcyIsICJvcmllbnRhdGlvbk51bWJlck1hcCIsICJ1cGRhdGVWUCIsICJydWxlIiwgInByb3BOYW1lIiwgInByb3BWYWx1ZSIsICJleGlzdHMiLCAiZ2V0Q29ycmVjdE9yaWVudGF0aW9uIiwgIm9yaWVudGF0aW9uVHlwZSIsICJwYXNzaXZlT3B0cyQxIiwgIndoZW5BbnlTY3JlZW5DaGFuZ2VzIiwgInRpY2tpbmciLCAidXBkYXRlIiwgInVuc3Vic2NyaWJlcnMiLCAidW5zdWIiLCAiZml4T3JpZW50VG9TY3JlZW4iLCAibmV4dCIsICJjdHgiLCAiaW5pdFRleHRTdHlsZSIsICJzdHlsZSIsICJmb250V2VpZ2h0IiwgImZvbnRTaXplIiwgImZvbnRGYW1pbHkiLCAiZm9udFN0cmV0Y2giLCAibWVhc3VyZVRleHQiLCAidGV4dCIsICJtZWFzdXJlSW5wdXRJbkZvY3VzIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uIiwgInBvaW50IiwgImN1cnJlbnRXaWR0aCIsICJjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQiLCAiY2xpZW50IiwgInJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50IiwgImxheW91dE92ZXJyaWRlIiwgImMiLCAiYmFzZSIsICJyZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQiLCAiZ3JpZFN5c3RlbSIsICJjbGllbnRQb2ludCIsICJtb2RlIiwgInJlY3QiLCAiY3MiLCAicGwiLCAicHQiLCAicHIiLCAicGIiLCAiY29udGVudFciLCAiY29udGVudEgiLCAiY3NDb29yZCIsICJhbmltYXRlU2hvdyIsICJhbmltYXRpb25Eb25lIiwgImFuaW1hdGUiLCAiZG9uZSIsICJlbmRBbmltYXRpb24iLCAiZXZlbnQiLCAicmVzb2x2ZSIsICJyZWplY3QiLCAicHJvbWlzZSIsICJyZXEiLCAiYW5pbWF0ZUhpZGUiLCAib25Cb3JkZXJPYnNlcnZlU3ltYm9sIiwgIm9uQm9yZGVyT2JzZXJ2ZSQxIiwgIm9uQ29udGVudE9ic2VydmVTeW1ib2wiLCAib25Db250ZW50T2JzZXJ2ZSQxIiwgInVud3JhcEZyb21RdWVyeSIsICJub3JtYWxpemVTZWxlY3RvciIsICJmYWxsYmFjayIsICJzYWZlUXVlcnlTZWxlY3RvckFsbCIsICJzYWZlTWF0Y2hlcyIsICJvYnNlcnZlQ29udGVudEJveCIsICJjYWxsYmFja3MiLCAib2JzZXJ2ZUJvcmRlckJveCIsICJvYnNlcnZlQXR0cmlidXRlIiwgImF0dHJpYnV0ZSIsICJvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvciIsICJhdHRyaWJ1dGVMaXN0IiwgInMiLCAibXV0YXRpb25MaXN0IiwgIm11dGF0aW9uIiwgImFkZGVkTm9kZXMiLCAicmVtb3ZlZE5vZGVzIiwgIm9ic2VydmVCeVNlbGVjdG9yIiwgIm11dCIsICJvYnMiLCAidW53cmFwTm9kZXNCeVNlbGVjdG9yIiwgIm5vZGVzIiwgIiRub2RlcyIsICJvYlJlZiIsICJoYW5kbGVNdXRhdGlvbiIsICJoYW5kbGVDb21lIiwgImhhbmRsZU91dENvbWUiLCAiaGFuZGxlRm9jdXNDbGljayIsICJmYWN0b3JzIiwgInNlbGVjdGVkIiwgImluaXRWaXNpYmlsaXR5IiwgIldhdnlTaGFwZWRDaXJjbGUiLCAic3RlcHMiLCAiYW1wbGl0dWRlIiwgImZyZXEiLCAicG9pbnRzIiwgImkiLCAiYW5nbGUiLCAic3RlcCIsICJ2YXJpYW50IiwgImZ1bmMiLCAiT1dORVIiLCAic3R5bGVFbGVtZW50IiwgInN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXQiLCAiY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50IiwgImNzcyIsICJpc0xheWVyQmxvY2tSdWxlIiwgImdldE9yQ3JlYXRlTGF5ZXJSdWxlIiwgInNoZWV0IiwgImxheWVyTmFtZSIsICJydWxlcyIsICJleGlzdGluZyIsICJydWxlSW5kZXgiLCAiY3JlYXRlZCIsICJzZXRTdHlsZVVSTCIsICJsYXllciIsICJzZXRTdHlsZVJ1bGVzIiwgInNldFN0eWxlUnVsZSIsICJnZXRTdHlsZUxheWVyIiwgInN0eWxlSWRDb3VudGVyIiwgImlzU2hhZG93Um9vdCIsICJpc0RvY3VtZW50IiwgImlzRWxlbWVudCQxIiwgImVzY2FwZUNTU0lkZW50aWZpZXIiLCAiY2hhciIsICJjcmVhdGVTdHlsZUlkIiwgImpvaW5TY29wZWRTZWxlY3RvciIsICJzY29wZSIsICJmaW5kU3R5bGVSdWxlIiwgImZ1bGxTZWxlY3RvciIsICJleHBlY3RlZCIsICJyZXF1ZXN0ZWQiLCAiYWN0dWFsIiwgImdldFN0eWxlUnVsZSIsICJiYXNpcyIsICJiYXNpc0VsZW1lbnQiLCAic3R5bGVJZCIsICJzdHlsZUVsZW1lbnRHbG9iYWwiLCAicnVsZUlkIiwgInByb21pc2VPckRpcmVjdCIsICJibG9iVVJMTWFwU3ltYm9sIiwgImJsb2JVUkxNYXAiLCAiY2FjaGVNYXBTeW1ib2wiLCAiY2FjaGVNYXAiLCAiZmV0Y2hBbmRDYWNoZSIsICJidXJsIiwgInByb21pc2VkIiwgImJsb2IiLCAiY2FjaGVDb250ZW50TWFwIiwgImNhY2hlQmxvYkNvbnRlbnRNYXAiLCAiZmV0Y2hBc0lubGluZSIsICJhZG9wdGVkU2VsZWN0b3JNYXBTeW1ib2wiLCAiYWRvcHRlZFNlbGVjdG9yTWFwIiwgImFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcFN5bWJvbCIsICJhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAiLCAiYWRvcHRlZExheWVyTWFwU3ltYm9sIiwgImFkb3B0ZWRMYXllck1hcCIsICJhZG9wdGVkU2hhZG93TGF5ZXJNYXBTeW1ib2wiLCAiYWRvcHRlZFNoYWRvd0xheWVyTWFwIiwgImdldEFkb3B0ZWRTdHlsZVJ1bGUiLCAidGFyZ2V0QWRvcHRlZFNoZWV0cyIsICJzZWxlY3RvcktleSIsICJzaGFkb3dNYXAiLCAibGF5ZXJSdWxlIiwgInNoYWRvd0xheWVyTWFwIiwgImxheWVyUnVsZUluZGV4IiwgImlzTmF0aXZlQ1NTU3R5bGVWYWx1ZSIsICJDU1NTdHlsZVZhbHVlQ3RvciIsICJwcm90b3R5cGUiLCAiaXNSZWFjdGl2ZVN0eWxlVmFsdWUiLCAiZ2V0V2luZG93Q29uc3RydWN0b3IiLCAid2luIiwgImdldENTU1VuaXRGYWN0b3J5TmFtZSIsICJ1bml0IiwgImdldENTU1VuaXRDb25zdHJ1Y3Rvck5hbWUiLCAiY3JlYXRlVHlwZWRVbml0VmFsdWUiLCAiQ1NTTmFtZXNwYWNlIiwgImZhY3RvcnlOYW1lIiwgImZhY3RvcnkiLCAiQ1NTVW5pdFZhbHVlQ3RvciIsICJ0b2tlbml6ZU51bWVyaWNDU1MiLCAidG9rZW5zIiwgImN1cnNvciIsICJyZXN0IiwgIndoaXRlc3BhY2UiLCAibnVtYmVyIiwgInVuaXRNYXRjaCIsICJpZGVudGlmaWVyIiwgInN5bWJvbCIsICJOdW1lcmljVHlwZWRPTVBhcnNlciIsICJ0b2tlbiIsICJ2YWx1ZXMiLCAiQ29uc3RydWN0b3IiLCAib3BlcmF0b3IiLCAicGFyc2VUb1R5cGVkT00iLCAiY3NzVmFsdWUiLCAiaGFzVHlwZWRPTSIsICJpc1VuaXRWYWx1ZSIsICJ2YWwiLCAic2V0UHJvcGVydHlJZk5vdEVxdWFsIiwgInN0eWxlUmVmIiwgImtlYmFiIiwgImltcG9ydGFuY2UiLCAic2V0U3R5bGVQcm9wZXJ0eVR5cGVkIiwgInN0eWxlTWFwUmVmIiwgInNldFN0eWxlUHJvcGVydHlGYWxsYmFjayIsICJuZXdWYWwiLCAibWF5YmVOdW0iLCAic2V0U3R5bGVQcm9wZXJ0eSIsICJzZXRTdHlsZUluUnVsZSIsICJoYXNoIiwgInN0cmluZyIsICJoYXNoQnVmZmVyIiwgImxvYWRTdHlsZVNoZWV0IiwgImlubGluZSIsICJpbnRlZ3JpdHkiLCAibG9hZCIsICJlcnJvciIsICJsb2FkQmxvYlN0eWxlIiwgImxvYWRJbmxpbmVTdHlsZSIsICJyb290RWxlbWVudCIsICJQTEFDRSIsICJzZXRQcm9wZXJ0eSIsICJwcmVsb2FkU3R5bGUiLCAic3R5bGVzIiwgImxvYWRBc0Fkb3B0ZWQiLCAiYWRvcHRlZE1hcFN5bWJvbCIsICJhZG9wdGVkTWFwIiwgImFkb3B0ZWRCbG9iTWFwU3ltYm9sIiwgImFkb3B0ZWRCbG9iTWFwIiwgImxheWVyQ291bnRlclN5bWJvbCIsICJsYXllckNvdW50ZXIiLCAiYXBwbHlBZG9wdGVkU3R5bGVUZXh0IiwgImNzc1RleHQiLCAibWVzc2FnZSIsICJjYWNoZWQiLCAibGF5ZXJXcmFwcGVkIiwgInJlbW92ZUFkb3B0ZWQiLCAic2hlZXRzIiwgImlkeCIsICJwYXJzZU9yaWdpbiIsICJvcmlnaW4iLCAicGFyc2VMZW5ndGgiLCAiZ2V0VHJhbnNmb3JtIiwgImdldFRyYW5zZm9ybU9yaWdpbiIsICJjc3NPcmlnaW4iLCAiZ2V0UHJvcGVydHlWYWx1ZSIsICJzcmMiLCAiZ2V0RWxlbWVudFpvb20iLCAiY3VycmVudEVsZW1lbnQiLCAiY3VycmVudENTU1pvb20iLCAiZ2V0UHhWYWx1ZSIsICJnZXRQYWRkaW5nIiwgImF4aXMiLCAiYm91bmRCZWhhdmlvcnMiLCAiYmluZEJlaGF2aW9yIiwgImJlaFNldCIsICJiZWhhdmlvciIsICJyZWZsZWN0QmVoYXZpb3JzIiwgImJlaGF2aW9ycyIsICJuYW1lZFN0b3JlTWFwc1N5bWJvbCIsICJuYW1lZFN0b3JlTWFwcyIsICJnZXRTdG9yZXNPZkVsZW1lbnQiLCAibWFwIiwgIkUiLCAibSIsICJpc1dlYWtDb21wYXRpYmxlIiwgImJpbmRTdG9yZSIsICJvYmoiLCAid2Vha01hcCIsICJyZWZsZWN0U3RvcmVzIiwgInN0b3JlcyIsICJyZWZsZWN0TWl4aW5zIiwgIm1peGlucyIsICJtaXhpblNldCIsICJib3VuZE1peGluU2V0IiwgImJpbmRNaXhpbnMiLCAiZ2V0RWxlbWVudFJlbGF0ZWQiLCAibWl4aW4iLCAibWl4U2V0IiwgIndlbCIsICJtaXhpbkVsZW1lbnRzIiwgImJvdW5kTWl4aW5TZXRTeW1ib2wiLCAibWl4aW5FbGVtZW50c1N5bWJvbCIsICJtaXhpblJlZ2lzdHJ5U3ltYm9sIiwgIm1peGluUmVnaXN0cnkiLCAibWl4aW5OYW1lc3BhY2VTeW1ib2wiLCAibWl4aW5OYW1lc3BhY2UiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzIiwgIm5hbWVzIiwgInJvb3RzIiwgImFkZFJvb3QiLCAidXBkYXRlQWxsTWl4aW5zIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCIsICJlbGVtZW50cyIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzIiwgIm5hbWVSZWdpc3RyeUYiLCAia2V5IiwgInJlZ2lzdGVyTWl4aW4iLCAiRE9NTWl4aW4iLCAid0VsZW1lbnQiLCAid1NlbGYiLCAicmVsYXRlZCIsICJoYW5kbGVIaWRkZW4iLCAiXyIsICJ2aXNpYmxlIiwgIiRyZWYiLCAiaXNWaXNpYmxlIiwgImhhbmRsZVByb3BlcnR5IiwgInByb3AiLCAiaGFuZGxlRGF0YXNldCIsICJkYXRhc2V0UmVmIiwgImRlbGV0ZVN0eWxlUHJvcGVydHkiLCAiaGFuZGxlU3R5bGVDaGFuZ2UiLCAiaGFuZGxlQXR0cmlidXRlIiwgImp1bmN0aW9uVG9Cb3giLCAiSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyIsICJKVU5DVElPTl9EUkFHX0VWRU5UUyIsICJKVU5DVElPTl9SRVNJWkVfRVZFTlRTIiwgIm1peGluRGlzcG9zZXJzU3ltYm9sIiwgIm1peGluRGlzcG9zZXJzIiwgInB1c2hEaXNwb3NhYmxlIiwgIm1peGluTmFtZSIsICJmbiIsICJydW5EaXNwb3NlcnMiLCAicGFyc2VQeFZhciIsICJxdWVyeUhhbmRsZSIsICJhdHRyIiwgImZvdW5kIiwgIkp1bmN0aW9uU2VsZWN0TWl4aW4iLCAid0VsIiwgIm92ZXJsYXkiLCAibG9jYWxQb2ludCIsICJhcHBseU92ZXJsYXkiLCAib25Eb3duIiwgIm9uTW92ZSIsICJlbmQiLCAib25VcCIsICJvbkNhbmNlbCIsICJKdW5jdGlvbkRyYWdNaXhpbiIsICJwcmV2aW91c1RyYW5zZm9ybSIsICJoYW5kbGUiLCAiZHJhZ2dpbmciLCAic3RhcnRYIiwgInN0YXJ0WSIsICJiYXNlWCIsICJiYXNlWSIsICJkeCIsICJkeSIsICJueCIsICJueSIsICJKdW5jdGlvblJlc2l6ZU1peGluIiwgInJlc2l6aW5nIiwgInN4IiwgInN5IiwgInN3IiwgInNoIiwgIm1pblciLCAibWluSCIsICJudyIsICJuaCJdCn0K

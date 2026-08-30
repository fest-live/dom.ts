import { $avoidTrigger as q, camelToKebab as ae, cvt_cs_to_os as Ne, getOrInsertComputed as wt, hasValue as A, isArrayOrIterable as xt, isVal as Mt, isValueUnit as Et, kebabToCamel as Qe, normalizeGridLayout as Ct, normalizePrimitive as ke, resolveLocalPointToGridCell as At, tryStringAsNumber as et } from "@fest-lib/core";
var kt = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), je = globalThis[kt] ??= /* @__PURE__ */ new Set();
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
    } catch (r) {
      String(r?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(r);
    } finally {
      je.add(t);
    }
});
var rn = () => {
}, Tt = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, nn = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, Lt = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), We = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(Lt()), 0), Rt = (e) => e?.offsetParent ?? e?.host, on = (e) => {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Rt(r);
    if (n && n instanceof HTMLHtmlElement) break;
    (r = n) && t.push(r);
  }
  return t;
}, an = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, Pt = () => {
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
}, sn = (e = Pt()) => (t) => e.shedule(t), un = typeof document < "u" ? document?.documentElement : null, cn = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([r, n]) => {
      const i = e.getAttribute(r);
      n == null ? e.removeAttribute(r) : n != i && e.setAttribute(r, i == "" ? n ?? i : i ?? n);
    });
}, ln = (e, t = {}) => Array.from(Object.entries(t)).map(([r, n]) => {
  n == null ? e.removeAttribute(r) : e.setAttribute(r, n ?? e.getAttribute(r));
}), zt = /* @__PURE__ */ new Map(), dn = (e, t = 1e3, ...r) => {
  const n = {
    running: !0,
    cancel: () => {
      n.running = !1;
    }
  };
  return We(async () => {
    if (!(!e || typeof e != "function")) {
      for (; n.running; )
        await Promise.all([Promise.try(e, ...r), new Promise((i) => setTimeout(i, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => We(i, t)), new Promise((i) => setTimeout(i, t))]);
      n.cancel = () => {
      };
    }
  }, t), n?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    zt.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var J = /* @__PURE__ */ Symbol("@border-box-width"), Q = /* @__PURE__ */ Symbol("@border-box-height"), ee = /* @__PURE__ */ Symbol("@content-box-width"), te = /* @__PURE__ */ Symbol("@content-box-height"), He = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), fn = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Fe.has(e)) {
    e[ee] = e.clientWidth, e[te] = e.clientHeight;
    const r = new ResizeObserver((n) => {
      for (const i of n) if (i.contentBoxSize) {
        const o = i.contentBoxSize[0];
        o && (e[ee] = Math.min(o.inlineSize, e.clientWidth), e[te] = Math.min(o.blockSize, e.clientHeight), t?.(e));
      }
    });
    Fe.set(e, r), r.observe(e?.element ?? e, { box: "content-box" });
  }
}, hn = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !He.has(e)) {
    e[J] = e.offsetWidth, e[Q] = e.offsetHeight;
    const r = new ResizeObserver((n) => {
      for (const i of n) if (i.borderBoxSize) {
        const o = i.borderBoxSize[0];
        o && (e[J] = Math.min(o.inlineSize, e.offsetWidth), e[Q] = Math.min(o.blockSize, e.offsetHeight), t?.(e));
      }
    });
    He.set(e, r), r.observe(e?.element ?? e, { box: "border-box" });
  }
}, pn = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), mn = (e, t = "text/html") => {
  const r = new DOMParser().parseFromString(e, t);
  return r.querySelector("template") ?? r.querySelector("*");
}, yn = (e, t, r) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), r?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, vn = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, gn = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, bn = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", Sn = `^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, wn = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var r = t("div"), n, i = ""; e && (n = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    n[1] && (r = t(n[1])), n[2] && (r.id = n[2]), n[3] && (i += " " + n[3]), n[4] && r.setAttribute(n[4], n[7] || ""), e = e.slice(n[0].length);
  return i && (r.className = i.slice(1)), r;
}, xn = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, Mn = (e, t) => {
  const r = typeof t == "string" ? t.trim() : "";
  if (!r || !e) return e ?? null;
  try {
    return e.querySelector(r) ?? (e.matches(r) ? e : null);
  } catch {
    return null;
  }
}, ue = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, tt = {};
function m(e, t, r, n = tt) {
  e?.addEventListener?.(t, r, n);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, r, n);
}
function $e(e, t, r, n = tt) {
  e?.removeEventListener?.(t, r, n);
}
var re = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([r, n]) => Array.isArray(n) ? m(e, r, ...n) : m(e, r, n))), En = (e, t) => {
  if (t) {
    let r = t;
    return t instanceof Map ? r = [...t.entries()] : r = [...Object.entries(t)], r.map(([n, i]) => ((xt(i) ? [...i] : i) ?? [])?.map?.((o) => m(e, n, o)));
  }
}, Cn = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([r, n]) => Array.isArray(n) ? $e(e, r, ...n) : $e(e, r, n))), An = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const r = e.composedPath();
    for (const n of r) if (n instanceof HTMLElement || n instanceof Element) return n;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, kn = (e, t, r) => {
  if (t == null || !(t instanceof Node) && t?.element == null) return !1;
  if (e == t || (e?.element ?? e) == (t?.element ?? t)) return !0;
  if (r?.composedPath && typeof r.composedPath == "function") {
    const n = r.composedPath(), i = e?.element ?? e, o = t?.element ?? t;
    if (n.includes(i) && n.includes(o)) {
      const a = n.indexOf(i), s = n.indexOf(o);
      if (s >= 0 && a >= 0 && s < a) return !0;
    }
  }
  return !!(e?.contains?.(t?.element ?? t) || e?.getRootNode({ composed: !0 })?.host == (t?.element ?? t));
}, ve = (e, t, r) => {
  const n = typeof t == "string" ? t.trim() : "";
  if (!n) return e ?? null;
  if (r?.composedPath && typeof r.composedPath == "function") {
    const s = r.composedPath();
    for (const c of s) if (c instanceof HTMLElement || c instanceof Element) try {
      if (c.matches?.(n)) return c;
    } catch {
    }
  }
  let i = null, o = null, a = null;
  try {
    i = e?.matches?.(n) ? e : null;
    const s = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host;
    o = s?.matches?.(n) ? s : null, a = e?.closest?.(n) ?? i?.closest?.(n) ?? o?.closest?.(n) ?? null;
  } catch {
  }
  return i ?? a ?? o;
}, Tn = (e, t) => !!ve(e, t), Ln = (e, t, r = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let n = document.activeElement;
  for (; n && n.shadowRoot && n.shadowRoot.activeElement; ) n = n.shadowRoot.activeElement;
  const i = n === e || ue(n, e), o = e.matches(":hover");
  if (!i && !o && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (r === "parent") return !!ve(e, t);
      {
        const a = i ? n : e.querySelector(":hover") || e, s = !!ve(a, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || s;
      }
    } else if (t instanceof HTMLElement)
      return r === "parent" ? ue(e, t) || !1 : ue(t, e) || !1;
  }
  return !0;
}, Rn = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, Vt = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Ot = globalThis[Vt] ??= /* @__PURE__ */ new WeakMap(), Nt = (e = document.documentElement) => Ot.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), Pn = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), zn = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : Nt(e)) || 1, ge = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, V = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const r = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", n = parseInt(String(r).trim(), 10);
    if (Number.isFinite(n)) return n;
  } catch {
  }
  return 0;
}, Vn = (e, t = null) => {
  const r = ge(e) || 1, n = e?.getBoundingClientRect?.(), i = {
    left: n?.left / r,
    right: n?.right / r,
    top: n?.top / r,
    bottom: n?.bottom / r,
    width: n?.width / r,
    height: n?.height / r
  }, o = t ?? (V(e) || 0), a = typeof window < "u" ? window.visualViewport : null, s = [((a?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / r, ((a?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / r], [c, l] = Ne([i.left, i.top], s, o), [u, p] = Ne([i.right, i.bottom], s, o), [h, f] = o == 0 || o == 3 ? [c, u] : [u, c], [d, y] = o == 0 || o == 1 ? [l, p] : [p, l], [M, St] = o % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: h,
    top: d,
    right: f,
    bottom: y,
    width: M,
    height: St
  };
}, On = (e, t = null) => (t ?? V(e)) % 2 ? e[Q] ?? e?.clientHeight : e[J] ?? e?.clientWidth, Nn = (e, t = null) => (t ?? V(e)) % 2 ? e[J] ?? e?.clientWidth : e[Q] ?? e?.clientHeight, jn = (e, t = null) => (t ?? V(e)) % 2 ? e[te] ?? e?.clientHeight : e[ee] ?? e?.clientWidth, Wn = (e, t = null) => (t ?? V(e)) % 2 ? e[ee] ?? e?.clientWidth : e[te] ?? e?.clientHeight, jt = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), ce = 80, rt = () => {
  try {
    return globalThis.navigator?.virtualKeyboard ?? null;
  } catch {
    return null;
  }
}, be = () => {
  const e = rt();
  if (e)
    try {
      e.overlaysContent !== !0 && (e.overlaysContent = !0);
    } catch {
    }
}, Te = (e) => {
  if (!e || !(e instanceof HTMLElement)) return !1;
  if (e.isContentEditable) return !0;
  const t = e.tagName;
  if (t === "TEXTAREA" || t === "SELECT") return !0;
  if (t !== "INPUT") return !1;
  const r = String(e.type || "text").toLowerCase();
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
  ].includes(r);
}, Be = "", C = 0, b = 0, Ie = (e, t, r = 0, n = 0) => {
  const i = Math.max(0, Number(e) || 0), o = Math.max(0, Number(t) || 0), a = Number(r) || 0, s = Number(n) || 0;
  return {
    left: a,
    top: s,
    right: a + i,
    bottom: s + o,
    width: i,
    height: o
  };
}, Hn = () => {
  if (typeof window > "u") return Ie(0, 0);
  const e = typeof document < "u" ? document.documentElement : null;
  return Ie(Number(e?.clientWidth) || Number(window.innerWidth) || 0, Number(e?.clientHeight) || Number(window.innerHeight) || 0);
}, nt = () => {
  if (typeof window > "u") return {
    width: 0,
    height: 0,
    keyboard: 0
  };
  const e = window.visualViewport, t = Number(window.innerWidth) || 0, r = Number(window.innerHeight) || 0, n = Number(e?.width) || 0, i = Number(e?.height) || 0, o = Number(e?.offsetTop) || 0, a = Number(rt()?.boundingBox?.height) || 0, s = r > 0 && i > 0 ? r - i - o : 0, c = a >= ce ? a : s >= ce ? s : 0, l = Math.max(t, n), u = Math.max(r, i + o, c > 0 ? i + c : 0), p = typeof matchMedia < "u" && matchMedia("(orientation: landscape)")?.matches ? "l" : "p";
  p !== Be && (Be = p, C = 0, b = 0);
  const h = b > 0 && b - u >= ce;
  return c > 0 || Te(document.activeElement) || h ? (C = Math.max(l, C), b = Math.max(u, b)) : (C = l, b = u), {
    width: C || l,
    height: b || u,
    keyboard: c
  };
}, Ue = () => {
  typeof window > "u" || nt().keyboard <= 0 && !Te(document.activeElement) || (window.scrollY || document.documentElement.scrollTop || document.body?.scrollTop) && window.scrollTo(0, 0);
}, it = () => {
  be();
  const e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, r = nt(), n = {
    "--vv-width": `${t?.width ?? (typeof window < "u" ? window.innerWidth : 0)}px`,
    "--vv-height": `${t?.height ?? (typeof window < "u" ? window.innerHeight : 0)}px`,
    "--vv-offset-left": `${t?.offsetLeft ?? 0}px`,
    "--vv-offset-top": `${t?.offsetTop ?? 0}px`,
    "--vv-scale": String(t?.scale ?? 1),
    "--lv-width": `${r.width}px`,
    "--lv-height": `${r.height}px`,
    "--keyboard-overlay-height": `${r.keyboard}px`
  };
  if (typeof document < "u" && document.documentElement.toggleAttribute("data-vk-open", r.keyboard > 0), typeof screen < "u") {
    const i = screen?.availWidth + "px", o = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? o : i,
      "--avail-height": e ? i : o,
      "--view-height": `${r.height || Math.min(screen?.availHeight, window?.innerHeight) || 0}px`,
      "--pixel-ratio": String(devicePixelRatio || 1),
      ...n
    };
  }
  return {
    "--screen-width": "0px",
    "--screen-height": "0px",
    "--avail-width": "0px",
    "--avail-height": "0px",
    "--view-height": `${r.height}px`,
    "--pixel-ratio": "1",
    ...n
  };
}, Se = it(), Fn = [[":root, :host, :scope", Se]], Wt = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, Ht = (e) => {
  const t = document.documentElement;
  Object.assign(Se, it()), Object.entries(Se).forEach(([r, n]) => {
    const i = t?.style?.getPropertyValue(r);
    (!i || i != n) && t?.style?.setProperty?.(r, n || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, Ft = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, Z = { passive: !0 }, $t = (e) => {
  let t = !1;
  const r = () => {
    t || (requestAnimationFrame(() => {
      Ht(), e(), t = !1;
    }), t = !0);
  }, n = [];
  return n.push(m(navigator?.virtualKeyboard, "geometrychange", r, Z)), n.push(m(window?.visualViewport, "scroll", () => {
    Ue(), r();
  }, Z)), n.push(m(window?.visualViewport, "resize", r, Z)), n.push(m(screen?.orientation, "change", r)), n.push(m(window, "resize", r)), n.push(m(document?.documentElement, "fullscreenchange", r)), n.push(m(document, "DOMContentLoaded", r)), n.push(m(matchMedia("(orientation: portrait)"), "change", r)), n.push(m(matchMedia("(orientation: landscape)"), "change", r)), n.push(m(document, "focusin", () => {
    be(), Te(document.activeElement) && (C = Math.max(C, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0), b = Math.max(b, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0)), Ue(), r();
  }, {
    capture: !0,
    passive: !0
  })), n.push(m(document, "focusout", r, Z)), be(), r(), jt(() => r(), 100), () => n.forEach((i) => i());
}, $n = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), $t(() => {
      const t = Wt?.[Ft()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
}, P = new OffscreenCanvas(1, 1).getContext("2d"), ot = (e, t) => {
  const r = getComputedStyle(e, "");
  if (t && r) {
    const n = r.getPropertyValue("font-weight") || "normal", i = r.getPropertyValue("font-size") || "16px", o = r.getPropertyValue("font-family") || "Times New Roman", a = r.getPropertyValue("font-stretch") || "normal";
    try {
      t.fontStretch = a.includes("%") ? "normal" : a;
    } catch {
    }
    try {
      t.letterSpacing = r.getPropertyValue("letter-spacing") || "normal";
    } catch {
    }
    try {
      t.fontKerning = r.getPropertyValue("font-kerning") || "auto";
    } catch {
    }
    try {
      t.fontVariantCaps = r.getPropertyValue("font-variant-caps") || "normal";
    } catch {
    }
    try {
      t.font = `${n} ${i} ${o}`;
    } catch {
    }
  }
}, Bt = (e, t) => {
  if (P) {
    ot(t, P);
    try {
      return P.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, Bn = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return Bt(t, e);
}, It = (e, t) => {
  const r = e?.value || "";
  if (P) {
    ot(e, P);
    let n = 0;
    for (let i = 0; i < r.length; i++) {
      if (n = P.measureText(r.slice(0, i))?.width, n == null) return r.length;
      if (n != null && n >= t[0]) return Math.max(i - 1, 0);
    }
  }
  return r.length;
}, In = (e, t) => {
  const r = e.getBoundingClientRect(), n = [t[0] - r.left / ge(), t[1] - r.top / ge()];
  return It(e, n);
}, Ut = (e, t) => {
  const r = parseInt(e.getAttribute("data-grid-columns") || "", 10), n = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = Ct(t ?? [4, 8]);
  return [Number.isFinite(r) && r > 0 ? r : i[0], Number.isFinite(n) && n > 0 ? n : i[1]];
}, Un = (e, t, r, n = "floor") => {
  if (!e) return [0, 0];
  const i = e.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const o = Ut(e, r?.layout), a = V(e), s = globalThis.getComputedStyle?.(e), c = parseFloat(s?.paddingLeft) || 0, l = parseFloat(s?.paddingTop) || 0, u = parseFloat(s?.paddingRight) || 0, p = parseFloat(s?.paddingBottom) || 0, h = Math.max(1, (i.width || e.clientWidth || 1) - c - u), f = Math.max(1, (i.height || e.clientHeight || 1) - l - p), d = [(t?.[0] || 0) - i.left - c, (t?.[1] || 0) - i.top - l];
  return At(d, [h, f], o, a, {
    mode: n,
    redirect: {
      item: r?.item,
      list: r?.list,
      items: r?.items
    }
  });
}, _t = async (e) => {
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
      const r = e.animate([
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
        duration: Tt() ? 100 : 80,
        easing: "linear",
        delay: 0
      });
      let n = !1;
      const i = () => {
        n || (n = !0, o?.forEach?.((a) => a?.()), r.currentTime = 1, r.finish(), t?.());
      }, o = re(e, {
        "u2-before-hide": [i, {
          once: !0,
          passive: !0
        }],
        "u2-before-show": [i, {
          once: !0,
          passive: !0
        }]
      });
      await r.finished, i?.();
    } else {
      const { resolve: r, reject: n, promise: i } = Promise.withResolvers(), o = requestAnimationFrame(r);
      let a = !1;
      const s = () => {
        a || (a = !0, c?.forEach?.((l) => l?.()), cancelAnimationFrame(o), r(performance.now()), t?.());
      }, c = re(e, {
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
}, qt = async (e) => {
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
      const r = e.animate([
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
      let n = !1;
      const i = () => {
        n || (n = !0, o?.forEach?.((a) => a?.()), r.currentTime = 1, r.finish(), t?.());
      }, o = re(e, { "u2-before-show": [i, {
        once: !0,
        passive: !0
      }] });
      await r.finished, i?.();
    } else {
      const { resolve: r, reject: n, promise: i } = Promise.withResolvers(), o = requestAnimationFrame(r);
      let a = !1;
      const s = () => {
        a || (a = !0, c?.forEach?.((l) => l?.()), cancelAnimationFrame(o), r(performance.now()), t?.());
      }, c = re(e, {
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
}, Dt = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), O = globalThis[Dt] ??= /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), N = globalThis[Zt] ??= /* @__PURE__ */ new WeakMap(), D = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), se = (e, t = "*") => typeof e != "string" ? t : e.trim() || t, F = (e, t) => {
  if (!e || typeof e.querySelectorAll != "function") return [];
  const r = se(t, "");
  if (!r) return [];
  try {
    return Array.from(e.querySelectorAll(r) || []);
  } catch {
    return [];
  }
}, we = (e, t) => {
  if (!e || typeof e.matches != "function") return !1;
  const r = se(t, "");
  if (!r) return !1;
  try {
    return !!e.matches(r);
  } catch {
    return !1;
  }
}, _n = (e, t) => {
  if (!N.has(e = D(e))) {
    const r = [], n = new ResizeObserver((i) => {
      for (const o of i) if (o.contentBoxSize) {
        const a = o.contentBoxSize[0];
        a && r.forEach((s) => s?.(a, n));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, n), N.set(e, r), (e?.element ?? e) instanceof Node && n.observe(e?.element ?? e, { box: "content-box" });
  }
  return N.get(e)?.push?.(t), { disconnect: () => N.get(e)?.splice?.(N.get(e)?.indexOf(t) || -1, 1) };
}, qn = (e, t) => {
  if (!O.has(e = D(e))) {
    const r = [], n = new ResizeObserver((i) => {
      for (const o of i) if (o.borderBoxSize) {
        const a = o.borderBoxSize[0];
        a && r.forEach((s) => s?.(a, n));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, n), O.set(e, r), (e?.element ?? e) instanceof Node && n.observe(e?.element ?? e, { box: "border-box" });
  }
  return O.get(e)?.push?.(t), { disconnect: () => O.get(e)?.splice?.(O.get(e)?.indexOf(t) || -1, 1) };
}, Dn = (e, t, r) => {
  if (typeof e?.selector == "string") return Le(e, e?.selector, t, r);
  const n = new Set((t.split(",") || [t]).map((o) => o.trim())), i = new MutationObserver((o, a) => {
    for (const s of o) s.attributeName && n.has(s.attributeName) && r(s, a);
  });
  return (e?.element ?? e) instanceof Node && i.observe(e = D(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...n]
  }), n.forEach((o) => r({
    target: e,
    type: "attributes",
    attributeName: o,
    oldValue: e?.getAttribute?.(o)
  }, i)), i;
}, Le = (e, t, r, n) => {
  const i = se(t), o = new Set([...r.split(",") || [r]].map((s) => s.trim())), a = new MutationObserver((s, c) => {
    for (const l of s) if (l.type == "childList") {
      const u = Array.from(l.addedNodes) || [], p = Array.from(l.removedNodes) || [];
      u.push(...Array.from(l.addedNodes || []).flatMap((h) => F(h, i))), p.push(...Array.from(l.removedNodes || []).flatMap((h) => F(h, i))), [...new Set(u)].filter((h) => we(h, i))?.map?.((h) => {
        o.forEach((f) => {
          n({
            target: h,
            type: "attributes",
            attributeName: f,
            oldValue: h?.getAttribute?.(f)
          }, c);
        });
      });
    } else we(l.target, i) && l.attributeName && o.has(l.attributeName) && n(l, c);
  });
  return a.observe(e = D(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...o],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), F(e, i).map((s) => o.forEach((c) => n({
    target: s,
    type: "attributes",
    attributeName: c,
    oldValue: s?.getAttribute?.(c)
  }, a))), a;
}, Yt = (e, t = "*", r = (n, i) => {
}) => {
  const n = se(t), i = (f) => {
    const d = Array.from(f || []) || [];
    return d.push(...Array.from(f || []).flatMap((y) => F(y, n))), [...Array.from(new Set(d).values())].filter((y) => we(y, n));
  };
  let o = null;
  const a = (f) => {
    const d = o?.deref?.(), y = i(f.addedNodes), M = i(f.removedNodes);
    (y.length > 0 || M.length > 0) && r?.({
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
  }, c = (f) => {
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
  }, u = {
    passive: !0,
    capture: !1
  };
  if (n?.includes?.(":hover") && n?.includes?.(":active"))
    return e.addEventListener("pointerover", s, u), e.addEventListener("pointerout", c, u), e.addEventListener("pointerdown", s, u), e.addEventListener("pointerup", c, u), e.addEventListener("pointercancel", c, u), { disconnect: () => {
      e.removeEventListener("pointerover", s, u), e.removeEventListener("pointerout", c, u), e.removeEventListener("pointerdown", s, u), e.removeEventListener("pointerup", c, u), e.removeEventListener("pointercancel", c, u);
    } };
  if (n?.includes?.(":hover"))
    return e.addEventListener("pointerover", s, u), e.addEventListener("pointerout", c, u), { disconnect: () => {
      e.removeEventListener("pointerover", s, u), e.removeEventListener("pointerout", c, u);
    } };
  if (n?.includes?.(":active"))
    return e.addEventListener("pointerdown", s, u), e.addEventListener("pointerup", c, u), e.addEventListener("pointercancel", c, u), { disconnect: () => {
      e.removeEventListener("pointerdown", s, u), e.removeEventListener("pointerup", c, u), e.removeEventListener("pointercancel", c, u);
    } };
  if (n?.includes?.(":focus") && n?.includes?.(":focus-within") && n?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", s, u), e.addEventListener("focusout", c, u), e.addEventListener("click", l, u), { disconnect: () => {
      e.removeEventListener("focusin", s, u), e.removeEventListener("focusout", c, u), e.removeEventListener("click", l, u);
    } };
  const p = new MutationObserver((f, d) => {
    for (const y of f) y.type == "childList" && a(y);
  });
  o = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = D(e), {
    childList: !0,
    subtree: !0
  });
  const h = F(e, n);
  return h.length > 0 && r?.({
    addedNodes: h,
    removedNodes: []
  }, p), p;
}, Zn = async (e = document.body) => {
  Le(e, "*", "data-hidden", (t, r) => {
    if (t.attributeName == "data-hidden") {
      const n = t.target;
      n.getAttribute("data-hidden") !== t.oldValue && Promise?.try?.(n.getAttribute("data-hidden") != null ? qt : _t, n, r)?.catch?.(console.warn.bind(console));
    }
  });
}, Yn = (e = 100, t = 0.05, r = 8) => {
  const n = [];
  for (let s = 0; s < e; s++) n.push(s / e);
  const i = (s) => `calc(${s}rad * pi * 2)`, o = (s) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(s)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, a = (s) => [`calc(calc(0.5 + calc(cos(${i(s)}) * calc(0.5 - ${o(s)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(s)}) * calc(0.5 - ${o(s)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": r,
    "--clip-path": `polygon(${n.map((s) => a(s).join(" ")).join(", ")})`
  };
}, Re = "DOM", $ = typeof document < "u" ? document.createElement("style") : null;
$ && (document.querySelector("head")?.appendChild?.($), $.dataset.owner = Re);
var at = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", _e = (e) => typeof e == "string" && /@import\b/i.test(e), qe = (e) => typeof CSSLayerBlockRule < "u" && e instanceof CSSLayerBlockRule, st = (e, t) => {
  if (!e || !t) return;
  const r = Array.from(e.cssRules || []), n = r.find((i) => qe(i) && i.name === t);
  if (n) return n;
  try {
    const i = e.insertRule(`@layer ${t} {}`, r.length), o = e.cssRules?.[i];
    return qe(o) ? o : void 0;
  } catch {
    return;
  }
}, De = (e, t, r = "") => {
  e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${r && typeof r == "string" ? `layer(${r})` : ""};` : t;
}, Xn = (e) => e?.map?.((t) => vr(...t)), Xt = (e, t) => (t ||= $?.sheet, st(t, e)), Kt = 0, le = (e) => typeof ShadowRoot < "u" && e instanceof ShadowRoot, Ze = (e) => typeof Document < "u" && e instanceof Document, Gt = (e) => typeof Element < "u" && e instanceof Element, Ye = (e) => typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : Array.from(e).map((t) => `\\${t.codePointAt(0).toString(16)} `).join(""), Jt = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `ux-${Date.now().toString(36)}-${(++Kt).toString(36)}`, Qt = (e, t) => (t = t.trim(), e ? t ? t.startsWith("::") ? `${e}${t}` : `${e} ${t}` : e : t), er = (e, t, r, n) => {
  const i = Array.from(e?.cssRules || []), o = t.trim(), a = n.trim();
  return i.findIndex((s) => {
    if (!(s instanceof CSSStyleRule)) return !1;
    const c = s.selectorText?.trim?.() ?? "";
    return c === o ? !0 : a && c.endsWith(a) ? c.slice(0, c.length - a.length).trim() === r : !1;
  });
}, Pe = (e, t, r = "ux-query", n = null) => {
  const i = le(n) || Ze(n) ? n : n?.getRootNode?.() ?? (typeof document < "u" ? document : null), o = Gt(n) ? n : null;
  let a = "";
  if (o?.id) a = `#${Ye(o.id)}`;
  else if (o) {
    let u = o.getAttribute("data-style-id");
    u || (u = Jt(), o.setAttribute("data-style-id", u)), a = `[data-style-id="${Ye(u)}"]`;
  } else le(i) ? a = ":host" : Ze(i) && (a = ":root");
  let s = null;
  if (le(i) ? (s = i.querySelector("style[data-ux-query]"), !s && typeof document < "u" && (s = document.createElement("style"), s.setAttribute("data-ux-query", ""), i.appendChild(s))) : s = tr(), t ||= s?.sheet, !t) return;
  if (r) return Pe(e, Xt(r, t), null, n);
  const c = Qt(a, e);
  let l = er(t, c, a, e);
  return l === -1 && (l = t.insertRule(`${c} {}`)), t.cssRules?.[l];
};
function tr() {
  return $ ?? null;
}
var ut = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), rr = /* @__PURE__ */ Symbol.for("dom.ts@blobURLMap"), j = globalThis[rr] ??= /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ Symbol.for("dom.ts@cacheMap"), E = globalThis[nr] ??= /* @__PURE__ */ new Map(), ir = (e) => {
  if (!e) return null;
  if (E.has(e)) return E.get(e);
  if (e instanceof Blob || e instanceof File) {
    if (j.has(e)) return j.get(e);
    const t = URL.createObjectURL(e);
    return j.set(e, t), E.set(t, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (r) => {
      const n = await r.blob(), i = URL.createObjectURL(n);
      return j.set(n, i), E.set(e, i), E.set(i, i), i;
    });
    return E.set(e, t), t;
  }
  if (typeof e == "string") {
    const t = new Blob([e], { type: "text/css" }), r = URL.createObjectURL(t);
    return j.set(t, r), E.set(r, r), r;
  }
  return e;
}, W = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new WeakMap(), or = (e) => {
  if (!e) return "";
  if (W.has(e)) return W.get(e) ?? "";
  if (e instanceof Blob || e instanceof File) {
    if (Y.has(e)) return Y.get(e) ?? "";
    const t = e?.text?.()?.then?.((r) => (Y.set(e, r), r));
    return Y.set(e, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (r) => {
      const n = await r.text();
      return W.set(e, n), n;
    });
    return W.set(e, t), t;
  }
  return typeof e == "string" && W.set(e, e), e;
}, ar = /* @__PURE__ */ Symbol.for("dom.ts@adoptedSelectorMap"), Xe = globalThis[ar] ??= /* @__PURE__ */ new Map(), sr = /* @__PURE__ */ Symbol.for("dom.ts@adoptedShadowSelectorMap"), Ke = globalThis[sr] ??= /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ Symbol.for("dom.ts@adoptedLayerMap"), Ge = globalThis[ur] ??= /* @__PURE__ */ new Map(), cr = /* @__PURE__ */ Symbol.for("dom.ts@adoptedShadowLayerMap"), X = globalThis[cr] ??= /* @__PURE__ */ new WeakMap(), Kn = (e, t = "ux-query", r = null) => {
  if (!e || !at()) return null;
  const n = r instanceof ShadowRoot ? r : r?.getRootNode ? r.getRootNode({ composed: !0 }) : null, i = n instanceof ShadowRoot, o = i ? n.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
  if (!o) return null;
  const a = `${t || ""}:${e}`;
  let s;
  if (i) {
    let u = Ke.get(n);
    u || (u = /* @__PURE__ */ new Map(), Ke.set(n, u)), s = u.get(a), s || (s = new CSSStyleSheet(), u.set(a, s), o.includes(s) || o.push(s));
  } else
    s = Xe.get(a), s || (s = new CSSStyleSheet(), Xe.set(a, s), o.includes(s) || o.push(s));
  if (t) {
    let u;
    if (i) {
      let p = X.get(n);
      p || (p = /* @__PURE__ */ new Map(), X.set(n, p)), u = p.get(t);
    } else u = Ge.get(t);
    if (!u && (u = st(s, t), u))
      if (i) {
        let p = X.get(n);
        p || (p = /* @__PURE__ */ new Map(), X.set(n, p)), p.set(t, u);
      } else Ge.set(t, u);
    if (u) {
      let p = Array.from(u.cssRules || []).findIndex((h) => h instanceof CSSStyleRule && h.selectorText?.trim?.() === e?.trim?.());
      if (p === -1) try {
        p = u.insertRule(`${e} {}`, u.cssRules.length);
      } catch {
        return null;
      }
      return u.cssRules[p];
    }
  }
  let c = Array.from(s.cssRules || []).findIndex((u) => u instanceof CSSStyleRule && u.selectorText?.trim?.() === e?.trim?.());
  if (c === -1) try {
    c = s.insertRule(`${e} {}`, s.cssRules.length);
  } catch {
    return null;
  }
  const l = s.cssRules[c];
  return l instanceof CSSStyleRule ? l : null;
}, ne = (e) => {
  if (e == null || typeof e != "object") return !1;
  try {
    const t = globalThis.CSSStyleValue;
    if (typeof t == "function" && e instanceof t) return !0;
    for (let r = e; r; r = Object.getPrototypeOf(r)) if (r?.constructor?.name === "CSSStyleValue") return !0;
  } catch {
  }
  return !1;
}, ct = (e) => {
  if (e == null || typeof e != "object" || ne(e)) return !1;
  try {
    return "value" in e;
  } catch {
    return !1;
  }
}, lt = (e, t) => e?.[t] ?? globalThis?.[t], lr = (e) => {
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
}, dr = (e) => e.toLowerCase() === "%" ? "percent" : e.toLowerCase(), fr = (e, t, r) => {
  const n = e?.CSS, i = lr(t), o = n?.[i];
  if (typeof o == "function") return o.call(n, r);
  const a = lt(e, "CSSUnitValue");
  if (typeof a != "function") throw new TypeError(`Typed OM does not support CSS unit "${t}"`);
  return new a(r, dr(t));
}, hr = (e) => {
  const t = [];
  let r = 0;
  for (; r < e.length; ) {
    const n = e.slice(r), i = /^\s+/.exec(n);
    if (i) {
      r += i[0].length;
      continue;
    }
    const o = /^(?:\d*\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/.exec(n);
    if (o) {
      r += o[0].length;
      const c = /^(%|[a-zA-Z]+)/.exec(e.slice(r)), l = c?.[0] ?? null;
      c && (r += c[0].length), t.push({
        kind: "number",
        value: Number(o[0]),
        unit: l == null ? null : l.toLowerCase()
      });
      continue;
    }
    const a = /^[a-zA-Z_][a-zA-Z0-9_-]*/.exec(n);
    if (a) {
      t.push({
        kind: "identifier",
        value: a[0].toLowerCase()
      }), r += a[0].length;
      continue;
    }
    const s = n[0];
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
      }), r++;
      continue;
    }
    throw new SyntaxError(`Unsupported token near "${n}"`);
  }
  return t;
}, pr = class {
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
    const r = lt(this.win, e);
    if (typeof r != "function") throw new TypeError(`${e} is not supported`);
    return new r(...t);
  }
  parseSum() {
    let e = this.parseProduct();
    for (; this.matchesSymbol("+") || this.matchesSymbol("-"); ) {
      const t = this.consume(), r = this.parseProduct();
      if (t.kind !== "symbol") throw new SyntaxError("Expected sum operator");
      t.value === "+" ? e = this.createMath("CSSMathSum", e, r) : e = this.createMath("CSSMathSum", e, this.createMath("CSSMathNegate", r));
    }
    return e;
  }
  parseProduct() {
    let e = this.parseUnary();
    for (; this.matchesSymbol("*") || this.matchesSymbol("/"); ) {
      const t = this.consume(), r = this.parseUnary();
      if (t.kind !== "symbol") throw new SyntaxError("Expected product operator");
      t.value === "*" ? e = this.createMath("CSSMathProduct", e, r) : e = this.createMath("CSSMathProduct", e, this.createMath("CSSMathInvert", r));
    }
    return e;
  }
  parseUnary() {
    return this.matchesSymbol("+") ? (this.consume(), this.parseUnary()) : this.matchesSymbol("-") ? (this.consume(), this.createMath("CSSMathNegate", this.parseUnary())) : this.parsePrimary();
  }
  parsePrimary() {
    const e = this.consume();
    if (e.kind === "number") return fr(this.win, e.unit ?? "number", e.value);
    if (e.kind === "symbol" && e.value === "(") {
      const t = this.parseSum();
      return this.consumeSymbol(")"), t;
    }
    if (e.kind === "identifier") return this.parseFunction(e.value);
    throw new SyntaxError("Expected a numeric value");
  }
  parseFunction(e) {
    if (this.consumeSymbol("("), e === "calc") {
      const r = this.parseSum();
      return this.consumeSymbol(")"), r;
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
}, mr = (e, t) => {
  try {
    const r = hr(e);
    return new pr(r, t).parse();
  } catch {
    return null;
  }
}, ze = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", K = (e) => ze && e instanceof CSSUnitValue, S = (e, t, r, n = "") => {
  if (!(!e || !t)) {
    if (r == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== r && e.setProperty(t, r, n);
  }
}, yr = (e, t, r, n = "") => {
  if (!e || !t) return e;
  const i = ae(t), o = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!ze || !a) return dt(e, t, r, n);
  const s = e.ownerDocument?.defaultView ?? globalThis;
  let c = A(r) && ct(r) ? r.value : r;
  if (c == null)
    return a.delete?.(i), o && S(o, i, null, n), e;
  if (ne(c)) {
    const l = a.get(i);
    if (K(c) && K(l)) {
      if (l.value === c.value && l.unit === c.unit) return e;
    } else if (l === c) return e;
    return a.set(i, c), e;
  }
  if (typeof c == "number")
    if (CSS?.number && !i.startsWith("--")) {
      const l = CSS.number(c), u = a.get(i);
      return K(u) && u.value === l.value && u.unit === l.unit || a.set(i, l), e;
    } else
      return S(o, i, String(c), n), e;
  if (typeof c == "string") {
    if (/\b(calc|min|max|clamp)\s*\(/.test(c)) {
      const u = mr(c, s);
      if (u) try {
        return a.set(i, u), e;
      } catch {
      }
    }
    const l = et(c);
    if (typeof l == "number" && CSS?.number && !i.startsWith("--")) {
      const u = CSS.number(l), p = a.get(i);
      return K(p) && p.value === u.value && p.unit === u.unit || a.set(i, u), e;
    }
    return S(o, i, c, n), e;
  }
  return S(o, i, String(c), n), e;
}, dt = (e, t, r, n = "") => {
  if (!e || !t) return e;
  const i = ae(t), o = e.style;
  if (!o) return e;
  let a = A(r) && ct(r) ? r.value : r;
  return typeof a == "string" && !ne(a) && (a = et(a) ?? a), a == null ? (S(o, i, null, n), e) : (ne(a) || typeof a == "number", S(o, i, String(a), n), e);
}, w = (e, t, r, n = "") => ze ? yr(e, t, r, n) : dt(e, t, r, n), Gn = (e, t, r) => w(Pe(e), t, r), vr = (e, t) => {
  const r = Pe(e);
  return Object.entries(t).forEach(([n, i]) => w(r, n, i)), r;
}, Jn = async (e) => {
  const t = await crypto?.subtle?.digest("SHA-256", typeof e == "string" ? new TextEncoder().encode(e) : e instanceof ArrayBuffer ? e : await e?.arrayBuffer?.());
  return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
}, ft = (e, t, r = "", n) => {
  const i = ir(e), o = typeof e == "string" && URL.canParse(e) ? e : i;
  return t?.[0] && (t[0].fetchPriority = "high"), t && o && typeof o == "string" && De(t, o, r), t?.[0] && (!URL.canParse(e) || n) && t?.[0] instanceof HTMLLinkElement, ut(i, (a) => {
    t?.[0] && a && (De(t, a, r), t?.[0].setAttribute("loaded", ""));
  })?.catch?.((a) => {
    console.warn("Failed to load style sheet:", a);
  });
}, gr = (e) => {
  const t = typeof document < "u" ? document.createElement("link") : null;
  return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
    rel: "stylesheet",
    type: "text/css",
    crossOrigin: "same-origin"
  }), t.dataset.owner = Re, ft(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, T = (e, t = typeof document < "u" ? document?.head : null, r = "") => {
  const n = t?.querySelector?.("head") ?? t;
  if (typeof HTMLHeadElement < "u" && n instanceof HTMLHeadElement) return gr(e);
  const i = typeof document < "u" ? document.createElement("style") : null;
  return i ? (i.dataset.owner = Re, ft(e, [i, "innerHTML"], r), n?.prepend?.(i), i) : null;
}, Qn = (e, t, r, n = "") => w(e, t, r, n), ei = (e) => kr(e, ""), br = /* @__PURE__ */ Symbol.for("dom.ts@adoptedMap"), g = globalThis[br] ??= /* @__PURE__ */ new Map(), Sr = /* @__PURE__ */ Symbol.for("dom.ts@adoptedBlobMap"), L = globalThis[Sr] ??= /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ Symbol.for("dom.ts@adoptedAppliedText"), z = globalThis[wr] ??= /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ Symbol.for("dom.ts@adoptedFilled"), ht = globalThis[xr] ??= /* @__PURE__ */ new WeakSet(), de = (e, t) => t ? `@layer ${t} { ${e} }` : e, pt = (e) => {
  try {
    return e.cssRules.length;
  } catch {
    return null;
  }
}, xe = (e, t) => {
  z.set(e, t), ht.add(e);
}, Mr = (e) => {
  if (!e) return null;
  const t = z.get(e);
  if (t) return t;
  for (const [r, n] of g) if (n === e && typeof r == "string") return r;
  return null;
}, ti = (e) => {
  if (!e) return !0;
  const t = pt(e);
  return t === null ? !1 : t === 0;
}, Me = (e, t) => {
  if (!e) return !1;
  const r = t || Mr(e), n = pt(e);
  return n === null ? !1 : n > 0 ? (ht.add(e), r && !z.has(e) && z.set(e, r), !0) : r && Ee(e, r) ? (xe(e, r), !0) : !1;
}, Er = /* @__PURE__ */ Symbol.for("dom.ts@layerCounter"), ri = globalThis[Er] ??= 0, Ee = (e, t) => {
  if (!e || !t) return !1;
  try {
    return e.replaceSync(t), !0;
  } catch (r) {
    const n = String(r?.message || "").toLowerCase();
    return n.includes("@import rules are not allowed") || n.includes("@import") && n.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", r), !1;
  }
}, Cr = (e) => {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function" && URL.canParse(e);
  } catch {
    return !1;
  }
}, Ar = (e) => {
  let t = L.get(e);
  return t || (t = new CSSStyleSheet(), L.set(e, t)), t;
}, kr = (e, t = null) => {
  try {
    return Tr(e, t);
  } catch (r) {
    return console.warn("[DOM] loadAsAdopted failed", r), typeof e == "string" && T(e, void 0, t || ""), null;
  }
}, Tr = (e, t = null) => {
  if (!at())
    return typeof e == "string" && T(e, void 0, t || ""), null;
  if (typeof e == "string" && _e(e))
    return T(e, void 0, t || ""), null;
  if (typeof e == "string" && g?.has?.(e)) {
    const n = g.get(e), i = z.get(n) || de(e, t);
    return Me(n, i), typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), n;
  }
  if ((e instanceof Blob || e instanceof File) && L?.has?.(e)) {
    const n = L.get(e);
    return Me(n), typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), n;
  }
  if (!e) return null;
  const r = typeof e == "string" ? wt(g, e, () => new CSSStyleSheet()) : Ar(e);
  if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(r) && document.adoptedStyleSheets.push(r), typeof e == "string" && !Cr(e)) {
    const n = de(e, t);
    return g.set(e, r), Ee(r, n) ? xe(r, n) : (he(r), g.delete(e), T(e)), r;
  } else ut(or(e), (n) => {
    if (g.set(n, r), n) {
      if (_e(n))
        return he(r), g.delete(n), L.delete(e), T(n, void 0, t || ""), r;
      const i = de(n, t);
      return Ee(r, i) ? xe(r, i) : (he(r), g.delete(n), L.delete(e), T(n, void 0, t || "")), r;
    }
  });
  return r;
}, Lr = /* @__PURE__ */ Symbol.for("dom.ts@styleTreeHooks"), mt = globalThis[Lr] ??= /* @__PURE__ */ new Set(), fe = /* @__PURE__ */ new WeakSet(), Rr = /* @__PURE__ */ new Set(), Pr = [
  "data-theme",
  "data-explorer-color-scheme",
  "data-color-scheme",
  "theme",
  "color-scheme"
], I = (e) => !e || e.nodeType !== 1 ? !1 : !!(String(e.localName || "").includes("-") || e.shadowRoot || e.styles != null), yt = (e, t) => {
  if (!(!e || e.nodeType === 3)) {
    if (e.nodeType === 11) {
      for (const r of e.childNodes || []) yt(r, t);
      return;
    }
    if (I(e) && t.add(e), typeof e.querySelectorAll == "function")
      try {
        for (const r of e.querySelectorAll("*")) I(r) && t.add(r);
      } catch {
      }
  }
}, zr = (e, t = "tree") => {
  for (const r of e)
    if (I(r))
      for (const n of mt) n(r, t);
}, ni = (e) => {
  typeof e == "function" && mt.add(e);
}, Vr = (e) => {
  if (!e || typeof MutationObserver > "u" || fe.has(e)) return e;
  fe.add(e), Rr.add(e);
  const t = new MutationObserver((r) => {
    const n = /* @__PURE__ */ new Set();
    for (const i of r) if (i.type === "childList") {
      for (const a of i.addedNodes) yt(a, n);
      const o = i.target?.getRootNode?.();
      if (o instanceof ShadowRoot && I(o.host)) {
        const a = o.adoptedStyleSheets;
        (!a || a.length === 0) && n.add(o.host);
      }
    } else i.type === "attributes" && i.target && I(i.target) && n.add(i.target);
    zr(n, "mutation");
  });
  try {
    t.observe(e, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: [...Pr]
    });
  } catch {
    return fe.delete(e), e;
  }
  return e;
}, ii = () => {
  if (typeof document > "u") return;
  const e = typeof URL < "u" && typeof URL.canParse == "function";
  for (const [t, r] of g) {
    if (!r || typeof t != "string" || e && URL.canParse(t)) continue;
    const n = z.get(r) || t;
    Me(r, n), document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(r) && document.adoptedStyleSheets.push(r);
  }
}, he = (e) => {
  if (!e) return !1;
  const t = typeof e == "string" ? g.get(e) : e;
  if (!t || typeof document > "u") return !1;
  const r = document.adoptedStyleSheets, n = r.indexOf(t);
  return n !== -1 ? (r.splice(n, 1), !0) : !1;
}, Or = (e, t) => {
  const r = e.split(" ");
  return new DOMPoint(Je(r[0], () => t.clientWidth), Je(r[1], () => t.clientHeight));
}, Je = (e, t) => e.endsWith("%") ? parseFloat(e) / 100 * t() : parseFloat(e), oi = (e) => {
  if (e?.computedStyleMap) {
    const t = e.computedStyleMap().get("transform")?.toMatrix?.();
    if (t) return t;
  } else if (e) {
    const t = getComputedStyle(e);
    return new DOMMatrix(t?.getPropertyValue?.("transform"));
  }
  return new DOMMatrix();
}, ai = (e) => {
  const t = getComputedStyle(e)?.getPropertyValue?.("transform-origin") || "50% 50%";
  return Or(t, e);
}, H = (e, t) => {
  if ("computedStyleMap" in e) {
    const r = e?.computedStyleMap?.()?.get(t);
    return r instanceof CSSUnitValue ? r?.value || 0 : r?.toString?.();
  }
  if (e instanceof HTMLElement) {
    const r = getComputedStyle?.(e, "");
    return parseFloat(r?.getPropertyValue?.(t)?.replace?.("px", "")) || 0;
  }
  return parseFloat((e?.style ?? e).getPropertyValue?.(t)?.replace?.("px", "")) || 0;
}, si = (e) => {
  let t = 1, r = e;
  for (; r; ) {
    if ("currentCSSZoom" in r) {
      const i = r.currentCSSZoom;
      if (typeof i == "number") return t *= i;
    }
    const n = getComputedStyle(r);
    if (n.zoom && n.zoom !== "normal") return t *= parseFloat(n.zoom);
    if (n.zoom && n.zoom !== "normal" || "currentCSSZoom" in r) return t;
    r = r?.offsetParent ?? r?.parentElement;
  }
  return t;
}, ui = (e, t) => H?.(e, t), ci = (e, t) => t == "inline" ? H(e, "padding-inline-start") + H(e, "padding-inline-end") : H(e, "padding-block-start") + H(e, "padding-block-end"), vt = /* @__PURE__ */ new WeakMap(), Nr = (e, t, r) => (new WeakRef(e), t.has(r) || t.add(r), e), li = (e, t) => {
  if (e) {
    if (t) {
      const r = vt.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((n) => Nr(e, r, n));
    }
    return e;
  }
}, jr = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), U = globalThis[jr] ??= /* @__PURE__ */ new Map(), Wr = (e, t) => {
  const r = [...e.entries() || []];
  return new Map(r?.map?.(([n, i]) => [n, i?.get?.(t)])?.filter?.(([n, i]) => !!i) || []);
}, Hr = (e) => (typeof e == "object" || typeof e == "function") && e != null, Fr = (e, t, r) => {
  if (!Hr(e) && e != null) return e;
  let n = U.get(t);
  return n || (n = /* @__PURE__ */ new WeakMap(), U.set(t, n)), !n.has(e) && e != null && n.set(e, r), e;
}, di = (e, t) => {
  if (!(!e || !t)) {
    for (const [r, n] of t.entries()) Fr(e, r, n);
    return e;
  }
}, fi = (e, t) => {
  if (e) {
    if (t) {
      const r = x?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      x?.has?.(e) || x?.set?.(e, r), [...t?.values?.() || []].map((n) => $r(e, n, r));
    }
    return e;
  }
}, B = (e) => ({
  storeSet: Wr(U, e),
  mixinSet: x?.get?.(e),
  behaviorSet: vt?.get?.(e)
}), $r = (e, t, r) => {
  const n = new WeakRef(e);
  return r ||= x?.get?.(e), r?.has?.(t) || (r?.add?.(t), R?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((i) => !!i).join(" ")), t?.connect?.(n, t, B(e))), e;
}, Br = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), x = globalThis[Br] ??= /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), R = globalThis[Ir] ??= /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), _ = globalThis[Ur] ??= /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), ie = globalThis[_r] ??= /* @__PURE__ */ new WeakMap(), gt = (e, t) => {
  typeof t == "string" && (t = _?.get?.(t));
  const r = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), n = new Set([...r].map((a) => _?.get?.(a)).filter((a) => !!a)), i = x?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  R?.has?.(t) || R?.set?.(t, /* @__PURE__ */ new WeakSet()), x?.has?.(e) || x?.set?.(e, i);
  const o = new WeakRef(e);
  i?.has?.(t) || (n.has(t) || t?.disconnect?.(o, t, B(e)), (n.has(t) || !R?.get?.(t)?.has?.(e)) && (t?.connect?.(o, t, B(e)), r.add(ie?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...r].filter((a) => !!a).join(" "))), R?.get?.(t)?.add?.(e)), i?.has?.(t) && (n.has(t) || (i?.delete?.(t), t?.disconnect?.(o, t, B(e))));
}, Ce = /* @__PURE__ */ new Set(), qr = (e = typeof document < "u" ? document : null) => {
  if (e)
    return Ce?.has?.(e) || (Ce?.add?.(e), Le(e, "*", "data-mixin", (t) => Ae(t.target)), Yt(e, "[data-mixin]", (t) => {
      for (const r of t.addedNodes) r instanceof HTMLElement && Ae(r);
    }), Vr(e)), e;
}, Ae = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((r) => _?.get?.(r)).filter((r) => !!r))].map?.((r) => gt(e, r));
}, Dr = (e, t) => {
  e.forEach((r) => t ? gt(r, t) : Ae(r));
}, Zr = (e) => {
  for (const t of Ce) Dr(t?.querySelectorAll?.("[data-mixin]"), e);
}, Yr = new FinalizationRegistry((e) => {
  _?.delete?.(e);
}), Xr = (e, t) => {
  if (!ie?.has?.(t)) {
    const r = e?.trim?.();
    r && (ie?.set?.(t, r), _?.set?.(r, t), Yr?.register?.(t, r), Zr(t));
  }
};
qr(typeof document < "u" ? document : null);
var Ve = class {
  constructor(e = null) {
    e && Xr(e, this);
  }
  connect(e, t, r) {
    return this;
  }
  disconnect(e, t, r) {
    return this;
  }
  storeForElement(e) {
    return U.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return B(e);
  }
  get elements() {
    return R?.get?.(this);
  }
  get storage() {
    return U?.get?.(this.name || "");
  }
  get name() {
    return ie?.get?.(this);
  }
}, hi = (e, t, r) => {
  const n = r;
  A(r) && (r = r.value);
  const i = (r = ke(r)) != null && r !== !1;
  return q(n, () => {
    e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, pi = (e, t, r) => {
  if (!(t = typeof t == "string" ? Qe(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const n = r;
  return A(r) && (r = r.value), e?.[t] === r || e?.[t] !== r && q(n, () => {
    r != null ? e[t] = r : delete e[t];
  }), e;
}, mi = (e, t, r) => {
  const n = e?.dataset;
  if (!t || !e || !n) return e;
  const i = r;
  return A(r) && (r = r?.value), t = Qe(t), n?.[t] === (r = ke(r)) || (r == null || r === !1 ? delete n[t] : q(i, () => {
    typeof r != "object" && typeof r != "function" ? n[t] = String(r) : delete n[t];
  })), e;
}, Kr = (e, t) => e.style.removeProperty(ae(t)), yi = (e, t, r) => {
  const n = e?.style;
  return !t || typeof t != "string" || !e || !n || q(r, () => {
    Mt(r) || A(r) || Et(r) ? w(e, t, r) : r == null && Kr(e, t);
  }), e;
}, vi = (e, t, r) => {
  if (!t || !e) return e;
  const n = r;
  return A(r) && (r = r.value), t = ae(t), e?.getAttribute?.(t) === (r = ke(r)) || q(n, () => {
    typeof r != "object" && typeof r != "function" && r != null && (typeof r != "boolean" || r == !0) ? e?.setAttribute?.(t, String(r)) : e?.removeAttribute?.(t);
  }), e;
};
function pe(e, t) {
  const r = Math.min(e.x, t.x), n = Math.min(e.y, t.y), i = Math.max(e.x, t.x), o = Math.max(e.y, t.y);
  return {
    left: r,
    top: n,
    right: i,
    bottom: o,
    width: i - r,
    height: o - n
  };
}
var G = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, me = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, ye = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Gr = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), oe = globalThis[Gr] ??= /* @__PURE__ */ new WeakMap(), v = (e, t, r) => {
  const n = oe.get(e) ?? /* @__PURE__ */ new Map(), i = n.get(t) ?? [];
  i.push(r), n.set(t, i), oe.set(e, n);
}, Oe = (e, t) => {
  const r = oe.get(e), n = r?.get(t);
  if (n) {
    for (const i of n) try {
      i();
    } catch {
    }
    r.delete(t), r.size === 0 && oe.delete(e);
  }
}, k = (e, t) => {
  const r = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", n = parseFloat(r);
  return Number.isFinite(n) ? n : 0;
}, bt = (e, t, r) => {
  const n = e.getAttribute(t)?.trim();
  if (!n) return r;
  const i = e.querySelector(n);
  return i instanceof HTMLElement ? i : r;
}, Jr = class extends Ve {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const r = document.createElement("div");
    r.className = "ui-junction-select-overlay", r.setAttribute("data-junction-overlay", ""), r.style.cssText = "position:absolute;pointer-events:none;z-index:var(--z-max, 9999);box-sizing:border-box;border:1px dashed color-mix(in oklab, var(--color-primary, #5a7fff) 70%, transparent);background:color-mix(in oklab, var(--color-primary, #5a7fff) 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(r);
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
    }, c = () => {
      const d = pe(o, a);
      if (d.width < 1 && d.height < 1) {
        r.style.display = "none";
        return;
      }
      r.style.display = "block", r.style.left = `${d.left}px`, r.style.top = `${d.top}px`, r.style.width = `${d.width}px`, r.style.height = `${d.height}px`;
    }, l = (d) => {
      d.button === 0 && (d.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (d.target === t || t.contains(d.target)) && (i = !0, o = s(d), a = { ...o }, t.setPointerCapture(d.pointerId), t.dispatchEvent(new CustomEvent(G.start, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...a },
          host: t
        }
      })), c()));
    }, u = (d) => {
      if (!i) return;
      a = s(d), c();
      const y = pe(o, a);
      t.dispatchEvent(new CustomEvent(G.move, {
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
      const y = pe(o, a);
      t.dispatchEvent(new CustomEvent(G.end, {
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
        i = !1, r.style.display = "none";
        try {
          t.releasePointerCapture(d.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(G.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return v(t, "ui-junction-select", () => {
      r.remove();
    }), v(t, "ui-junction-select", m(t, "pointerdown", l)), v(t, "ui-junction-select", m(t, "pointermove", u)), v(t, "ui-junction-select", m(t, "pointerup", h)), v(t, "ui-junction-select", m(t, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Oe(t, "ui-junction-select"), this;
  }
}, Qr = class extends Ve {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    w(t, "--jx-drag-x", k(t, "--jx-drag-x")), w(t, "--jx-drag-y", k(t, "--jx-drag-y"));
    const r = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const n = bt(t, "data-junction-drag-handle", t);
    let i = !1, o = 0, a = 0, s = 0, c = 0;
    const l = (h) => {
      h.button === 0 && (h.target !== n && !n.contains(h.target) || (i = !0, o = h.clientX, a = h.clientY, s = k(t, "--jx-drag-x"), c = k(t, "--jx-drag-y"), n.setPointerCapture(h.pointerId), t.dispatchEvent(new CustomEvent(me.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: h.clientX,
          clientY: h.clientY,
          baseX: s,
          baseY: c
        }
      }))));
    }, u = (h) => {
      if (!i) return;
      const f = h.clientX - o, d = h.clientY - a, y = s + f, M = c + d;
      w(t, "--jx-drag-x", y), w(t, "--jx-drag-y", M), t.dispatchEvent(new CustomEvent(me.move, {
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
          n.releasePointerCapture(h.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(me.end, {
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
      t.style.transform = r;
    }), v(t, "ui-junction-drag", m(n, "pointerdown", l)), v(t, "ui-junction-drag", m(n, "pointermove", u)), v(t, "ui-junction-drag", m(n, "pointerup", p)), v(t, "ui-junction-drag", m(n, "pointercancel", p)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Oe(t, "ui-junction-drag"), this;
  }
}, en = class extends Ve {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const r = bt(t, "data-junction-resize-handle", t);
    let n = !1, i = 0, o = 0, a = 0, s = 0;
    const c = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), l = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), u = (f) => {
      f.button === 0 && (f.target !== r && !r.contains(f.target) || (n = !0, i = f.clientX, o = f.clientY, a = t.offsetWidth, s = t.offsetHeight, r.setPointerCapture(f.pointerId), t.dispatchEvent(new CustomEvent(ye.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: s
        }
      }))));
    }, p = (f) => {
      if (!n) return;
      const d = Math.max(c, a + (f.clientX - i)), y = Math.max(l, s + (f.clientY - o));
      t.style.width = `${d}px`, t.style.height = `${y}px`, t.dispatchEvent(new CustomEvent(ye.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: d,
          height: y
        }
      }));
    }, h = (f) => {
      if (n) {
        n = !1;
        try {
          r.releasePointerCapture(f.pointerId);
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
    return v(t, "ui-junction-resize", m(r, "pointerdown", u)), v(t, "ui-junction-resize", m(r, "pointermove", p)), v(t, "ui-junction-resize", m(r, "pointerup", h)), v(t, "ui-junction-resize", m(r, "pointercancel", h)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Oe(t, "ui-junction-resize"), this;
  }
};
new Jr();
new Qr();
new en();
export {
  Ve as DOMMixin,
  Qr as JunctionDragMixin,
  en as JunctionResizeMixin,
  Jr as JunctionSelectMixin,
  bn as MATCH,
  Tn as MOC,
  ve as MOCElement,
  sn as RAFBehavior,
  Sn as REGEX,
  un as ROOT,
  Yn as WavyShapedCircle,
  rn as __exportProperties,
  je as __registeredCssProperties,
  m as addEvent,
  re as addEvents,
  En as addEventsList,
  qr as addRoot,
  L as adoptedBlobMap,
  Ge as adoptedLayerMap,
  g as adoptedMap,
  Xe as adoptedSelectorMap,
  X as adoptedShadowLayerMap,
  Ke as adoptedShadowSelectorMap,
  qt as animateHide,
  _t as animateShow,
  Se as availSize,
  Nn as bbh,
  On as bbw,
  Nr as bindBehavior,
  $r as bindMixins,
  Fr as bindStore,
  j as blobURLMap,
  Q as borderBoxHeight,
  J as borderBoxWidth,
  vt as boundBehaviors,
  x as boundMixinSet,
  E as cacheMap,
  Wn as cbh,
  jn as cbw,
  Pn as changeZoom,
  Fn as classes,
  It as computeCaretPosition,
  In as computeCaretPositionFromClient,
  kn as containsOrSelf,
  te as contentBoxHeight,
  ee as contentBoxWidth,
  wn as createElementVanilla,
  Ie as createFixedOverlayViewport,
  fr as createTypedUnitValue,
  Mr as cssTextForAdoptedSheet,
  Kr as deleteStyleProperty,
  nn as detectMobile,
  hn as doBorderObserve,
  fn as doContentObserve,
  Me as ensureAdoptedSheetContent,
  be as ensureVirtualKeyboardOverlay,
  ir as fetchAndCache,
  or as fetchAsInline,
  $n as fixOrientToScreen,
  zn as fixedClientZoom,
  Kn as getAdoptedStyleRule,
  it as getAvailSize,
  Vn as getBoundingOrientRect,
  Ft as getCorrectOrientation,
  B as getElementRelated,
  si as getElementZoom,
  An as getEventTarget,
  Rt as getOffsetParent,
  on as getOffsetParentChain,
  ci as getPadding,
  H as getPropertyValue,
  ui as getPxValue,
  Wr as getStoresOfElement,
  Xt as getStyleLayer,
  Pe as getStyleRule,
  oi as getTransform,
  ai as getTransformOrigin,
  Rn as getZoom,
  vi as handleAttribute,
  mi as handleDataset,
  hi as handleHidden,
  pi as handleProperty,
  yi as handleStyleChange,
  ue as hasParent,
  Jn as hash,
  mn as html,
  Mn as includeSelf,
  gn as indexOf,
  ot as initTextStyle,
  Zn as initVisibility,
  ti as isAdoptedSheetEmpty,
  xn as isElement,
  Ln as isInFocus,
  Tt as isMobile,
  ne as isNativeCSSStyleValue,
  an as isNearlyIdentity,
  ct as isReactiveStyleValue,
  I as isStyleHost,
  vn as isValidParent,
  ri as layerCounter,
  kr as loadAsAdopted,
  gr as loadBlobStyle,
  T as loadInlineStyle,
  ft as loadStyleSheet,
  Pt as makeRAFCycle,
  Bn as measureInputInFocus,
  Bt as measureText,
  oe as mixinDisposers,
  R as mixinElements,
  ie as mixinNamespace,
  _ as mixinRegistry,
  Yr as nameRegistryF,
  U as namedStoreMaps,
  zr as notifyStyleTreeHosts,
  Dn as observeAttribute,
  Le as observeAttributeBySelector,
  qn as observeBorderBox,
  Yt as observeBySelector,
  _n as observeContentBox,
  Vr as observeStyleTree,
  He as onBorderObserve,
  Fe as onContentObserve,
  V as orientOf,
  Wt as orientationNumberMap,
  Je as parseLength,
  Or as parseOrigin,
  tt as passiveOpts,
  ei as preloadStyle,
  Hn as readFixedOverlayViewport,
  Ut as readLauncherLayoutFromElement,
  li as reflectBehaviors,
  fi as reflectMixins,
  di as reflectStores,
  Xr as registerMixin,
  ni as registerStyleTreeHook,
  ii as rehydrateConstructableSheets,
  he as removeAdopted,
  $e as removeEvent,
  Cn as removeEvents,
  Un as resolveGridCellFromClientPoint,
  Ce as roots,
  ln as setAttributes,
  cn as setAttributesIfNull,
  yn as setChecked,
  dn as setIdleInterval,
  Qn as setProperty,
  Gn as setStyleInRule,
  w as setStyleProperty,
  dt as setStylePropertyFallback,
  yr as setStylePropertyTyped,
  vr as setStyleRule,
  Xn as setStyleRules,
  De as setStyleURL,
  zt as throttleMap,
  ge as unfixedClientZoom,
  Ae as updateAllMixins,
  gt as updateMixinAttributes,
  Dr as updateMixinAttributesAll,
  Zr as updateMixinAttributesAllInRoots,
  Ht as updateVP,
  pn as url,
  $t as whenAnyScreenChanges,
  Nt as zoomOf,
  Ot as zoomValues
};

import { $avoidTrigger as B, camelToKebab as te, cvt_cs_to_os as Me, hasValue as C, isArrayOrIterable as Qe, isVal as et, isValueUnit as tt, kebabToCamel as Fe, normalizeGridLayout as nt, normalizePrimitive as ge, resolveLocalPointToGridCell as rt, tryStringAsNumber as $e } from "@fest-lib/core";
var it = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Ee = globalThis[it] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Ee.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      Ee.add(t);
    }
});
var Mn = () => {
}, ot = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, En = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, at = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), Ce = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(at()), 0), st = (e) => e?.offsetParent ?? e?.host, Cn = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = st(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && t.push(n);
  }
  return t;
}, An = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, ct = () => {
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
}, kn = (e = ct()) => (t) => e.shedule(t), Rn = typeof document < "u" ? document?.documentElement : null, Pn = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, r]) => {
      const i = e.getAttribute(n);
      r == null ? e.removeAttribute(n) : r != i && e.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, Tn = (e, t = {}) => Array.from(Object.entries(t)).map(([n, r]) => {
  r == null ? e.removeAttribute(n) : e.setAttribute(n, r ?? e.getAttribute(n));
}), ut = /* @__PURE__ */ new Map(), zn = (e, t = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return Ce(async () => {
    if (!(!e || typeof e != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((i) => setTimeout(i, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => Ce(i, t)), new Promise((i) => setTimeout(i, t))]);
      r.cancel = () => {
      };
    }
  }, t), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    ut.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var D = /* @__PURE__ */ Symbol("@border-box-width"), X = /* @__PURE__ */ Symbol("@border-box-height"), Y = /* @__PURE__ */ Symbol("@content-box-width"), G = /* @__PURE__ */ Symbol("@content-box-height"), Ae = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), Ln = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !ke.has(e)) {
    e[Y] = e.clientWidth, e[G] = e.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const o = i.contentBoxSize[0];
        o && (e[Y] = Math.min(o.inlineSize, e.clientWidth), e[G] = Math.min(o.blockSize, e.clientHeight), t?.(e));
      }
    });
    ke.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, Vn = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Ae.has(e)) {
    e[D] = e.offsetWidth, e[X] = e.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const o = i.borderBoxSize[0];
        o && (e[D] = Math.min(o.inlineSize, e.offsetWidth), e[X] = Math.min(o.blockSize, e.offsetHeight), t?.(e));
      }
    });
    Ae.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, jn = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), On = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, Wn = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, Nn = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, Fn = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, $n = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", In = `^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, Bn = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), r, i = ""; e && (r = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, Hn = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, qn = (e, t) => e.querySelector(t) ?? (e.matches(t) ? e : null), ie = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, Ie = {};
function y(e, t, n, r = Ie) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function Re(e, t, n, r = Ie) {
  e?.removeEventListener?.(t, n, r);
}
var J = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? y(e, n, ...r) : y(e, n, r))), Un = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([r, i]) => ((Qe(i) ? [...i] : i) ?? [])?.map?.((o) => y(e, r, o)));
  }
}, _n = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? Re(e, n, ...r) : Re(e, n, r))), Zn = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, Dn = (e, t, n) => {
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
}, de = (e, t, n) => {
  const r = typeof t == "string" ? t.trim() : "";
  if (!r) return e ?? null;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const a = n.composedPath();
    for (const u of a) if (u instanceof HTMLElement || u instanceof Element) try {
      if (u.matches?.(r)) return u;
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
}, Xn = (e, t) => !!de(e, t), Yn = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === e || ie(r, e), o = e.matches(":hover");
  if (!i && !o && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!de(e, t);
      {
        const s = i ? r : e.querySelector(":hover") || e, a = !!de(s, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || a;
      }
    } else if (t instanceof HTMLElement)
      return n === "parent" ? ie(e, t) || !1 : ie(t, e) || !1;
  }
  return !0;
}, Gn = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, lt = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), dt = globalThis[lt] ??= /* @__PURE__ */ new WeakMap(), ft = (e = document.documentElement) => dt.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), Jn = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), Kn = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : ft(e)) || 1, fe = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, P = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, Qn = (e, t = null) => {
  const n = fe(e) || 1, r = e?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, o = t ?? (P(e) || 0), s = typeof window < "u" ? window.visualViewport : null, a = [((s?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((s?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [u, f] = Me([i.left, i.top], a, o), [c, p] = Me([i.right, i.bottom], a, o), [h, l] = o == 0 || o == 3 ? [u, c] : [c, u], [d, m] = o == 0 || o == 1 ? [f, p] : [p, f], [M, Ke] = o % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: h,
    top: d,
    right: l,
    bottom: m,
    width: M,
    height: Ke
  };
}, er = (e, t = null) => (t ?? P(e)) % 2 ? e[X] ?? e?.clientHeight : e[D] ?? e?.clientWidth, tr = (e, t = null) => (t ?? P(e)) % 2 ? e[D] ?? e?.clientWidth : e[X] ?? e?.clientHeight, nr = (e, t = null) => (t ?? P(e)) % 2 ? e[G] ?? e?.clientHeight : e[Y] ?? e?.clientWidth, rr = (e, t = null) => (t ?? P(e)) % 2 ? e[Y] ?? e?.clientWidth : e[G] ?? e?.clientHeight, ht = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), Be = () => {
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
}, he = Be(), ir = [[":root, :host, :scope", he]], pt = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, mt = (e) => {
  const t = document.documentElement;
  Object.assign(he, Be()), Object.entries(he).forEach(([n, r]) => {
    const i = t?.style?.getPropertyValue(n);
    (!i || i != r) && t?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, yt = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, oe = { passive: !0 }, gt = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      mt(), e(), t = !1;
    }), t = !0);
  }, r = [];
  return r.push(y(navigator?.virtualKeyboard, "geometrychange", n, oe)), r.push(y(window?.visualViewport, "scroll", n, oe)), r.push(y(window?.visualViewport, "resize", n, oe)), r.push(y(screen?.orientation, "change", n)), r.push(y(window, "resize", n)), r.push(y(document?.documentElement, "fullscreenchange", n)), r.push(y(document, "DOMContentLoaded", n)), r.push(y(matchMedia("(orientation: portrait)"), "change", n)), r.push(y(matchMedia("(orientation: landscape)"), "change", n)), n(), ht(() => n(), 100), () => r.forEach((i) => i());
}, or = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), gt(() => {
      const t = pt?.[yt()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
}, R = new OffscreenCanvas(1, 1).getContext("2d"), He = (e, t) => {
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
}, vt = (e, t) => {
  if (R) {
    He(t, R);
    try {
      return R.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, ar = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return vt(t, e);
}, bt = (e, t) => {
  const n = e?.value || "";
  if (R) {
    He(e, R);
    let r = 0;
    for (let i = 0; i < n.length; i++) {
      if (r = R.measureText(n.slice(0, i))?.width, r == null) return n.length;
      if (r != null && r >= t[0]) return Math.max(i - 1, 0);
    }
  }
  return n.length;
}, sr = (e, t) => {
  const n = e.getBoundingClientRect(), r = [t[0] - n.left / fe(), t[1] - n.top / fe()];
  return bt(e, r);
}, St = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = nt(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, cr = (e, t, n, r = "floor") => {
  if (!e) return [0, 0];
  const i = e.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const o = St(e, n?.layout), s = P(e), a = globalThis.getComputedStyle?.(e), u = parseFloat(a?.paddingLeft) || 0, f = parseFloat(a?.paddingTop) || 0, c = parseFloat(a?.paddingRight) || 0, p = parseFloat(a?.paddingBottom) || 0, h = Math.max(1, (i.width || e.clientWidth || 1) - u - c), l = Math.max(1, (i.height || e.clientHeight || 1) - f - p), d = [(t?.[0] || 0) - i.left - u, (t?.[1] || 0) - i.top - f];
  return rt(d, [h, l], o, s, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, wt = async (e) => {
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
        duration: ot() ? 100 : 80,
        easing: "linear",
        delay: 0
      });
      let r = !1;
      const i = () => {
        r || (r = !0, o?.forEach?.((s) => s?.()), n.currentTime = 1, n.finish(), t?.());
      }, o = J(e, {
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
      let s = !1;
      const a = () => {
        s || (s = !0, u?.forEach?.((f) => f?.()), cancelAnimationFrame(o), n(performance.now()), t?.());
      }, u = J(e, {
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
}, xt = async (e) => {
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
        r || (r = !0, o?.forEach?.((s) => s?.()), n.currentTime = 1, n.finish(), t?.());
      }, o = J(e, { "u2-before-show": [i, {
        once: !0,
        passive: !0
      }] });
      await n.finished, i?.();
    } else {
      const { resolve: n, reject: r, promise: i } = Promise.withResolvers(), o = requestAnimationFrame(n);
      let s = !1;
      const a = () => {
        s || (s = !0, u?.forEach?.((f) => f?.()), cancelAnimationFrame(o), n(performance.now()), t?.());
      }, u = J(e, {
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
}, Mt = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), T = globalThis[Mt] ??= /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), z = globalThis[Et] ??= /* @__PURE__ */ new WeakMap(), H = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), ne = (e, t = "*") => typeof e != "string" ? t : e.trim() || t, N = (e, t) => {
  if (!e || typeof e.querySelectorAll != "function") return [];
  const n = ne(t, "");
  if (!n) return [];
  try {
    return Array.from(e.querySelectorAll(n) || []);
  } catch {
    return [];
  }
}, pe = (e, t) => {
  if (!e || typeof e.matches != "function") return !1;
  const n = ne(t, "");
  if (!n) return !1;
  try {
    return !!e.matches(n);
  } catch {
    return !1;
  }
}, ur = (e, t) => {
  if (!z.has(e = H(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.contentBoxSize) {
        const s = o.contentBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, r), z.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "content-box" });
  }
  return z.get(e)?.push?.(t), { disconnect: () => z.get(e)?.splice?.(z.get(e)?.indexOf(t) || -1, 1) };
}, lr = (e, t) => {
  if (!T.has(e = H(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.borderBoxSize) {
        const s = o.borderBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, r), T.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "border-box" });
  }
  return T.get(e)?.push?.(t), { disconnect: () => T.get(e)?.splice?.(T.get(e)?.indexOf(t) || -1, 1) };
}, dr = (e, t, n) => {
  if (typeof e?.selector == "string") return ve(e, e?.selector, t, n);
  const r = new Set((t.split(",") || [t]).map((o) => o.trim())), i = new MutationObserver((o, s) => {
    for (const a of o) a.attributeName && r.has(a.attributeName) && n(a, s);
  });
  return (e?.element ?? e) instanceof Node && i.observe(e = H(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((o) => n({
    target: e,
    type: "attributes",
    attributeName: o,
    oldValue: e?.getAttribute?.(o)
  }, i)), i;
}, ve = (e, t, n, r) => {
  const i = ne(t), o = new Set([...n.split(",") || [n]].map((a) => a.trim())), s = new MutationObserver((a, u) => {
    for (const f of a) if (f.type == "childList") {
      const c = Array.from(f.addedNodes) || [], p = Array.from(f.removedNodes) || [];
      c.push(...Array.from(f.addedNodes || []).flatMap((h) => N(h, i))), p.push(...Array.from(f.removedNodes || []).flatMap((h) => N(h, i))), [...new Set(c)].filter((h) => pe(h, i))?.map?.((h) => {
        o.forEach((l) => {
          r({
            target: h,
            type: "attributes",
            attributeName: l,
            oldValue: h?.getAttribute?.(l)
          }, u);
        });
      });
    } else pe(f.target, i) && f.attributeName && o.has(f.attributeName) && r(f, u);
  });
  return s.observe(e = H(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...o],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), N(e, i).map((a) => o.forEach((u) => r({
    target: a,
    type: "attributes",
    attributeName: u,
    oldValue: a?.getAttribute?.(u)
  }, s))), s;
}, Ct = (e, t = "*", n = (r, i) => {
}) => {
  const r = ne(t), i = (l) => {
    const d = Array.from(l || []) || [];
    return d.push(...Array.from(l || []).flatMap((m) => N(m, r))), [...Array.from(new Set(d).values())].filter((m) => pe(m, r));
  };
  let o = null;
  const s = (l) => {
    const d = o?.deref?.(), m = i(l.addedNodes), M = i(l.removedNodes);
    (m.length > 0 || M.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: m,
      removedNodes: M
    }, d);
  }, a = (l) => {
    s({
      addedNodes: [l?.target].filter((d) => !!d),
      removedNodes: [l?.relatedTarget].filter((d) => !!d),
      type: "childList",
      target: l?.currentTarget
    });
  }, u = (l) => {
    s({
      addedNodes: [l?.relatedTarget].filter((d) => !!d),
      removedNodes: [l?.target].filter((d) => !!d),
      type: "childList",
      target: l?.currentTarget
    });
  }, f = (l) => {
    s({
      addedNodes: [l?.target].filter((d) => !!d),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((d) => !!d),
      type: "childList",
      target: l?.currentTarget
    });
  }, c = {
    passive: !0,
    capture: !1
  };
  if (r?.includes?.(":hover") && r?.includes?.(":active"))
    return e.addEventListener("pointerover", a, c), e.addEventListener("pointerout", u, c), e.addEventListener("pointerdown", a, c), e.addEventListener("pointerup", u, c), e.addEventListener("pointercancel", u, c), { disconnect: () => {
      e.removeEventListener("pointerover", a, c), e.removeEventListener("pointerout", u, c), e.removeEventListener("pointerdown", a, c), e.removeEventListener("pointerup", u, c), e.removeEventListener("pointercancel", u, c);
    } };
  if (r?.includes?.(":hover"))
    return e.addEventListener("pointerover", a, c), e.addEventListener("pointerout", u, c), { disconnect: () => {
      e.removeEventListener("pointerover", a, c), e.removeEventListener("pointerout", u, c);
    } };
  if (r?.includes?.(":active"))
    return e.addEventListener("pointerdown", a, c), e.addEventListener("pointerup", u, c), e.addEventListener("pointercancel", u, c), { disconnect: () => {
      e.removeEventListener("pointerdown", a, c), e.removeEventListener("pointerup", u, c), e.removeEventListener("pointercancel", u, c);
    } };
  if (r?.includes?.(":focus") && r?.includes?.(":focus-within") && r?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", a, c), e.addEventListener("focusout", u, c), e.addEventListener("click", f, c), { disconnect: () => {
      e.removeEventListener("focusin", a, c), e.removeEventListener("focusout", u, c), e.removeEventListener("click", f, c);
    } };
  const p = new MutationObserver((l, d) => {
    for (const m of l) m.type == "childList" && s(m);
  });
  o = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = H(e), {
    childList: !0,
    subtree: !0
  });
  const h = N(e, r);
  return h.length > 0 && n?.({
    addedNodes: h,
    removedNodes: []
  }, p), p;
}, fr = async (e = document.body) => {
  ve(e, "*", "data-hidden", (t, n) => {
    if (t.attributeName == "data-hidden") {
      const r = t.target;
      r.getAttribute("data-hidden") !== t.oldValue && Promise?.try?.(r.getAttribute("data-hidden") != null ? xt : wt, r, n)?.catch?.(console.warn.bind(console));
    }
  });
}, hr = (e = 100, t = 0.05, n = 8) => {
  const r = [];
  for (let a = 0; a < e; a++) r.push(a / e);
  const i = (a) => `calc(${a}rad * pi * 2)`, o = (a) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(a)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, s = (a) => [`calc(calc(0.5 + calc(cos(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((a) => s(a).join(" ")).join(", ")})`
  };
}, re = "DOM", w = typeof document < "u" ? document.createElement("style") : null;
w && (typeof document < "u" && document.querySelector("head")?.appendChild?.(w), w.dataset.owner = re);
var qe = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", Pe = (e) => typeof e == "string" && /@import\b/i.test(e);
w && (typeof document < "u" && document.querySelector("head")?.appendChild?.(w), w.dataset.owner = re);
var Te = (e, t, n = "") => {
  e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${n && typeof n == "string" ? `layer(${n})` : ""};` : t;
}, pr = (e) => e?.map?.((t) => Xt(...t)), At = (e, t) => {
  t ||= w?.sheet;
  let n = Array.from(t?.cssRules || []).findIndex((i) => i instanceof CSSLayerBlockRule && i?.name === e), r;
  return n === -1 && t ? r = t?.cssRules?.[n = t.insertRule(`@layer ${e} {}`)] : r = t?.cssRules?.[n], r;
}, kt = 0, ae = (e) => typeof ShadowRoot < "u" && e instanceof ShadowRoot, ze = (e) => typeof Document < "u" && e instanceof Document, Rt = (e) => typeof Element < "u" && e instanceof Element, Le = (e) => typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : Array.from(e).map((t) => `\\${t.codePointAt(0).toString(16)} `).join(""), Pt = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `ux-${Date.now().toString(36)}-${(++kt).toString(36)}`, Tt = (e, t) => (t = t.trim(), e ? t ? t.startsWith("::") ? `${e}${t}` : `${e} ${t}` : e : t), zt = (e, t, n, r) => {
  const i = Array.from(e?.cssRules || []), o = t.trim(), s = r.trim();
  return i.findIndex((a) => {
    if (!(a instanceof CSSStyleRule)) return !1;
    const u = a.selectorText?.trim?.() ?? "";
    return u === o ? !0 : s && u.endsWith(s) ? u.slice(0, u.length - s.length).trim() === n : !1;
  });
}, be = (e, t, n = "ux-query", r = null) => {
  const i = ae(r) || ze(r) ? r : r?.getRootNode?.() ?? (typeof document < "u" ? document : null), o = Rt(r) ? r : null;
  let s = "";
  if (o?.id) s = `#${Le(o.id)}`;
  else if (o) {
    let c = o.getAttribute("data-style-id");
    c || (c = Pt(), o.setAttribute("data-style-id", c)), s = `[data-style-id="${Le(c)}"]`;
  } else ae(i) ? s = ":host" : ze(i) && (s = ":root");
  let a = null;
  if (ae(i) ? (a = i.querySelector("style[data-ux-query]"), !a && typeof document < "u" && (a = document.createElement("style"), a.setAttribute("data-ux-query", ""), i.appendChild(a))) : a = Lt(), t ||= a?.sheet, !t) return;
  if (n) return be(e, At(n, t), null, r);
  const u = Tt(s, e);
  let f = zt(t, u, s, e);
  return f === -1 && (f = t.insertRule(`${u} {}`)), t.cssRules?.[f];
};
function Lt() {
  return w ?? null;
}
var Ue = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), Vt = /* @__PURE__ */ Symbol.for("dom.ts@blobURLMap"), L = globalThis[Vt] ??= /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ Symbol.for("dom.ts@cacheMap"), E = globalThis[jt] ??= /* @__PURE__ */ new Map(), Ot = (e) => {
  if (!e) return null;
  if (E.has(e)) return E.get(e);
  if (e instanceof Blob || e instanceof File) {
    if (L.has(e)) return L.get(e);
    const t = URL.createObjectURL(e);
    return L.set(e, t), E.set(t, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const r = await n.blob(), i = URL.createObjectURL(r);
      return L.set(r, i), E.set(e, i), E.set(i, i), i;
    });
    return E.set(e, t), t;
  }
  if (typeof e == "string") {
    const t = new Blob([e], { type: "text/css" }), n = URL.createObjectURL(t);
    return L.set(t, n), E.set(n, n), n;
  }
  return e;
}, V = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new WeakMap(), Wt = (e) => {
  if (!e) return "";
  if (V.has(e)) return V.get(e) ?? "";
  if (e instanceof Blob || e instanceof File) {
    if (q.has(e)) return q.get(e) ?? "";
    const t = e?.text?.()?.then?.((n) => (q.set(e, n), n));
    return q.set(e, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const r = await n.text();
      return V.set(e, r), r;
    });
    return V.set(e, t), t;
  }
  return typeof e == "string" && V.set(e, e), e;
}, Nt = /* @__PURE__ */ Symbol.for("dom.ts@adoptedSelectorMap"), Ve = globalThis[Nt] ??= /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ Symbol.for("dom.ts@adoptedShadowSelectorMap"), je = globalThis[Ft] ??= /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ Symbol.for("dom.ts@adoptedLayerMap"), Oe = globalThis[$t] ??= /* @__PURE__ */ new Map(), It = /* @__PURE__ */ Symbol.for("dom.ts@adoptedShadowLayerMap"), U = globalThis[It] ??= /* @__PURE__ */ new WeakMap(), mr = (e, t = "ux-query", n = null) => {
  if (!e || !qe()) return null;
  const r = n instanceof ShadowRoot ? n : n?.getRootNode ? n.getRootNode({ composed: !0 }) : null, i = r instanceof ShadowRoot, o = i ? r.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
  if (!o) return null;
  const s = `${t || ""}:${e}`;
  let a;
  if (i) {
    let c = je.get(r);
    c || (c = /* @__PURE__ */ new Map(), je.set(r, c)), a = c.get(s), a || (a = new CSSStyleSheet(), c.set(s, a), o.includes(a) || o.push(a));
  } else
    a = Ve.get(s), a || (a = new CSSStyleSheet(), Ve.set(s, a), o.includes(a) || o.push(a));
  if (t) {
    let c;
    if (i) {
      let p = U.get(r);
      p || (p = /* @__PURE__ */ new Map(), U.set(r, p)), c = p.get(t);
    } else c = Oe.get(t);
    if (!c) {
      const p = Array.from(a.cssRules || []), h = p.findIndex((l) => l instanceof CSSLayerBlockRule && l.name === t);
      if (h === -1) try {
        a.insertRule(`@layer ${t} {}`, a.cssRules.length);
        const l = a.cssRules[a.cssRules.length - 1];
        l instanceof CSSLayerBlockRule && (c = l);
      } catch {
        c = void 0;
      }
      else c = p[h];
      if (c)
        if (i) {
          let l = U.get(r);
          l || (l = /* @__PURE__ */ new Map(), U.set(r, l)), l.set(t, c);
        } else Oe.set(t, c);
    }
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
  let u = Array.from(a.cssRules || []).findIndex((c) => c instanceof CSSStyleRule && c.selectorText?.trim?.() === e?.trim?.());
  if (u === -1) try {
    u = a.insertRule(`${e} {}`, a.cssRules.length);
  } catch {
    return null;
  }
  const f = a.cssRules[u];
  return f instanceof CSSStyleRule ? f : null;
}, K = (e) => {
  if (e == null || typeof e != "object") return !1;
  try {
    const t = globalThis.CSSStyleValue;
    if (typeof t == "function" && e instanceof t) return !0;
    for (let n = e; n; n = Object.getPrototypeOf(n)) if (n?.constructor?.name === "CSSStyleValue") return !0;
  } catch {
  }
  return !1;
}, _e = (e) => {
  if (e == null || typeof e != "object" || K(e)) return !1;
  try {
    return "value" in e;
  } catch {
    return !1;
  }
}, Ze = (e, t) => e?.[t] ?? globalThis?.[t], Bt = (e) => {
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
}, Ht = (e) => e.toLowerCase() === "%" ? "percent" : e.toLowerCase(), qt = (e, t, n) => {
  const r = e?.CSS, i = Bt(t), o = r?.[i];
  if (typeof o == "function") return o.call(r, n);
  const s = Ze(e, "CSSUnitValue");
  if (typeof s != "function") throw new TypeError(`Typed OM does not support CSS unit "${t}"`);
  return new s(n, Ht(t));
}, Ut = (e) => {
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
      const u = /^(%|[a-zA-Z]+)/.exec(e.slice(n)), f = u?.[0] ?? null;
      u && (n += u[0].length), t.push({
        kind: "number",
        value: Number(o[0]),
        unit: f == null ? null : f.toLowerCase()
      });
      continue;
    }
    const s = /^[a-zA-Z_][a-zA-Z0-9_-]*/.exec(r);
    if (s) {
      t.push({
        kind: "identifier",
        value: s[0].toLowerCase()
      }), n += s[0].length;
      continue;
    }
    const a = r[0];
    if ([
      "+",
      "-",
      "*",
      "/",
      "(",
      ")",
      ","
    ].includes(a)) {
      t.push({
        kind: "symbol",
        value: a
      }), n++;
      continue;
    }
    throw new SyntaxError(`Unsupported token near "${r}"`);
  }
  return t;
}, _t = class {
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
    const n = Ze(this.win, e);
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
    if (e.kind === "number") return qt(this.win, e.unit ?? "number", e.value);
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
}, Zt = (e, t) => {
  try {
    const n = Ut(e);
    return new _t(n, t).parse();
  } catch {
    return null;
  }
}, Se = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", _ = (e) => Se && e instanceof CSSUnitValue, b = (e, t, n, r = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, r);
  }
}, Dt = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = te(t), o = e.style, s = e.attributeStyleMap ?? e.styleMap;
  if (!Se || !s) return De(e, t, n, r);
  const a = e.ownerDocument?.defaultView ?? globalThis;
  let u = C(n) && _e(n) ? n.value : n;
  if (u == null)
    return s.delete?.(i), o && b(o, i, null, r), e;
  if (K(u)) {
    const f = s.get(i);
    if (_(u) && _(f)) {
      if (f.value === u.value && f.unit === u.unit) return e;
    } else if (f === u) return e;
    return s.set(i, u), e;
  }
  if (typeof u == "number")
    if (CSS?.number && !i.startsWith("--")) {
      const f = CSS.number(u), c = s.get(i);
      return _(c) && c.value === f.value && c.unit === f.unit || s.set(i, f), e;
    } else
      return b(o, i, String(u), r), e;
  if (typeof u == "string") {
    if (/\b(calc|min|max|clamp)\s*\(/.test(u)) {
      const c = Zt(u, a);
      if (c) try {
        return s.set(i, c), e;
      } catch {
      }
    }
    const f = $e(u);
    if (typeof f == "number" && CSS?.number && !i.startsWith("--")) {
      const c = CSS.number(f), p = s.get(i);
      return _(p) && p.value === c.value && p.unit === c.unit || s.set(i, c), e;
    }
    return b(o, i, u, r), e;
  }
  return b(o, i, String(u), r), e;
}, De = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = te(t), o = e.style;
  if (!o) return e;
  let s = C(n) && _e(n) ? n.value : n;
  return typeof s == "string" && !K(s) && (s = $e(s) ?? s), s == null ? (b(o, i, null, r), e) : (K(s) || typeof s == "number", b(o, i, String(s), r), e);
}, S = (e, t, n, r = "") => Se ? Dt(e, t, n, r) : De(e, t, n, r), yr = (e, t, n) => S(be(e), t, n), Xt = (e, t) => {
  const n = be(e);
  return Object.entries(t).forEach(([r, i]) => S(n, r, i)), n;
}, gr = async (e) => {
  const t = await crypto?.subtle?.digest("SHA-256", typeof e == "string" ? new TextEncoder().encode(e) : e instanceof ArrayBuffer ? e : await e?.arrayBuffer?.());
  return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
}, Xe = (e, t, n = "", r) => {
  const i = Ot(e), o = typeof e == "string" && URL.canParse(e) ? e : i;
  return t?.[0] && (t[0].fetchPriority = "high"), t && o && typeof o == "string" && Te(t, o, n), t?.[0] && (!URL.canParse(e) || r) && t?.[0] instanceof HTMLLinkElement, Ue(i, (s) => {
    t?.[0] && s && (Te(t, s, n), t?.[0].setAttribute("loaded", ""));
  })?.catch?.((s) => {
    console.warn("Failed to load style sheet:", s);
  });
}, Yt = (e) => {
  const t = typeof document < "u" ? document.createElement("link") : null;
  return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
    rel: "stylesheet",
    type: "text/css",
    crossOrigin: "same-origin"
  }), t.dataset.owner = re, Xe(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, j = (e, t = typeof document < "u" ? document?.head : null, n = "") => {
  const r = t?.querySelector?.("head") ?? t;
  if (typeof HTMLHeadElement < "u" && r instanceof HTMLHeadElement) return Yt(e);
  const i = typeof document < "u" ? document.createElement("style") : null;
  return i ? (i.dataset.owner = re, Xe(e, [i, "innerHTML"], n), r?.prepend?.(i), i) : null;
}, vr = (e, t, n, r = "") => S(e, t, n, r), br = (e) => Qt(e, ""), Gt = /* @__PURE__ */ Symbol.for("dom.ts@adoptedMap"), v = globalThis[Gt] ??= /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ Symbol.for("dom.ts@adoptedBlobMap"), O = globalThis[Jt] ??= /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ Symbol.for("dom.ts@layerCounter"), Sr = globalThis[Kt] ??= 0, We = (e, t) => {
  if (!e || !t) return !1;
  try {
    return e.replaceSync(t), !0;
  } catch (n) {
    const r = String(n?.message || "").toLowerCase();
    return r.includes("@import rules are not allowed") || r.includes("@import") && r.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", n), !1;
  }
}, Qt = (e, t = null) => {
  if (!qe())
    return typeof e == "string" && j(e, void 0, t || ""), null;
  if (typeof e == "string" && Pe(e))
    return j(e, void 0, t || ""), null;
  if (typeof e == "string" && v?.has?.(e)) {
    const r = v.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(r) && document.adoptedStyleSheets.push(r), r;
  }
  if ((e instanceof Blob || e instanceof File) && O?.has?.(e)) {
    const r = O.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(r) && document.adoptedStyleSheets.push(r), r;
  }
  if (!e) return null;
  const n = typeof e == "string" ? v.getOrInsertComputed(e, (r) => new CSSStyleSheet()) : O.getOrInsertComputed(e, (r) => new CSSStyleSheet());
  if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), typeof e == "string" && !URL.canParse(e)) {
    const r = t ? `@layer ${t} { ${e} }` : e;
    return v.set(e, n), We(n, r) || (se(n), v.delete(e), j(e)), n;
  } else Ue(Wt(e), (r) => {
    if (v.set(r, n), r) {
      if (Pe(r))
        return se(n), v.delete(r), O.delete(e), j(r, void 0, t || ""), n;
      const i = t ? `@layer ${t} { ${r} }` : r;
      return We(n, i) || (se(n), v.delete(r), O.delete(e), j(r, void 0, t || "")), n;
    }
  });
  return n;
}, se = (e) => {
  if (!e) return !1;
  const t = typeof e == "string" ? v.get(e) : e;
  if (!t || typeof document > "u") return !1;
  const n = document.adoptedStyleSheets, r = n.indexOf(t);
  return r !== -1 ? (n.splice(r, 1), !0) : !1;
}, en = (e, t) => {
  const n = e.split(" ");
  return new DOMPoint(Ne(n[0], () => t.clientWidth), Ne(n[1], () => t.clientHeight));
}, Ne = (e, t) => e.endsWith("%") ? parseFloat(e) / 100 * t() : parseFloat(e), wr = (e) => {
  if (e?.computedStyleMap) {
    const t = e.computedStyleMap().get("transform")?.toMatrix?.();
    if (t) return t;
  } else if (e) {
    const t = getComputedStyle(e);
    return new DOMMatrix(t?.getPropertyValue?.("transform"));
  }
  return new DOMMatrix();
}, xr = (e) => {
  const t = getComputedStyle(e)?.getPropertyValue?.("transform-origin") || "50% 50%";
  return en(t, e);
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
}, Mr = (e) => {
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
}, Er = (e, t) => W?.(e, t), Cr = (e, t) => t == "inline" ? W(e, "padding-inline-start") + W(e, "padding-inline-end") : W(e, "padding-block-start") + W(e, "padding-block-end"), Ye = /* @__PURE__ */ new WeakMap(), tn = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), Ar = (e, t) => {
  if (e) {
    if (t) {
      const n = Ye.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((r) => tn(e, n, r));
    }
    return e;
  }
}, nn = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), $ = globalThis[nn] ??= /* @__PURE__ */ new Map(), rn = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, on = (e) => (typeof e == "object" || typeof e == "function") && e != null, an = (e, t, n) => {
  if (!on(e) && e != null) return e;
  let r = $.get(t);
  return r || (r = /* @__PURE__ */ new WeakMap(), $.set(t, r)), !r.has(e) && e != null && r.set(e, n), e;
}, kr = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, r] of t.entries()) an(e, n, r);
    return e;
  }
}, Rr = (e, t) => {
  if (e) {
    if (t) {
      const n = x?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      x?.has?.(e) || x?.set?.(e, n), [...t?.values?.() || []].map((r) => sn(e, r, n));
    }
    return e;
  }
}, F = (e) => ({
  storeSet: rn($, e),
  mixinSet: x?.get?.(e),
  behaviorSet: Ye?.get?.(e)
}), sn = (e, t, n) => {
  const r = new WeakRef(e);
  return n ||= x?.get?.(e), n?.has?.(t) || (n?.add?.(t), k?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((i) => !!i).join(" ")), t?.connect?.(r, t, F(e))), e;
}, cn = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), x = globalThis[cn] ??= /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), k = globalThis[un] ??= /* @__PURE__ */ new WeakMap(), ln = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), I = globalThis[ln] ??= /* @__PURE__ */ new Map(), dn = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), Q = globalThis[dn] ??= /* @__PURE__ */ new WeakMap(), Ge = (e, t) => {
  typeof t == "string" && (t = I?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((s) => I?.get?.(s)).filter((s) => !!s)), i = x?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  k?.has?.(t) || k?.set?.(t, /* @__PURE__ */ new WeakSet()), x?.has?.(e) || x?.set?.(e, i);
  const o = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(o, t, F(e)), (r.has(t) || !k?.get?.(t)?.has?.(e)) && (t?.connect?.(o, t, F(e)), n.add(Q?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((s) => !!s).join(" "))), k?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(o, t, F(e))));
}, me = /* @__PURE__ */ new Set(), fn = (e = typeof document < "u" ? document : null) => {
  if (e)
    return me?.has?.(e) || (me?.add?.(e), ve(e, "*", "data-mixin", (t) => ye(t.target)), Ct(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && ye(n);
    })), e;
}, ye = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => I?.get?.(n)).filter((n) => !!n))].map?.((n) => Ge(e, n));
}, hn = (e, t) => {
  e.forEach((n) => t ? Ge(n, t) : ye(n));
}, pn = (e) => {
  for (const t of me) hn(t?.querySelectorAll?.("[data-mixin]"), e);
}, mn = new FinalizationRegistry((e) => {
  I?.delete?.(e);
}), yn = (e, t) => {
  if (!Q?.has?.(t)) {
    const n = e?.trim?.();
    n && (Q?.set?.(t, n), I?.set?.(n, t), mn?.register?.(t, n), pn(t));
  }
};
fn(typeof document < "u" ? document : null);
var we = class {
  constructor(e = null) {
    e && yn(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return $.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return F(e);
  }
  get elements() {
    return k?.get?.(this);
  }
  get storage() {
    return $?.get?.(this.name || "");
  }
  get name() {
    return Q?.get?.(this);
  }
}, Pr = (e, t, n) => {
  const r = n;
  C(n) && (n = n.value);
  const i = (n = ge(n)) != null && n !== !1;
  return B(r, () => {
    e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, Tr = (e, t, n) => {
  if (!(t = typeof t == "string" ? Fe(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const r = n;
  return C(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && B(r, () => {
    n != null ? e[t] = n : delete e[t];
  }), e;
}, zr = (e, t, n) => {
  const r = e?.dataset;
  if (!t || !e || !r) return e;
  const i = n;
  return C(n) && (n = n?.value), t = Fe(t), r?.[t] === (n = ge(n)) || (n == null || n === !1 ? delete r[t] : B(i, () => {
    typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
  })), e;
}, gn = (e, t) => e.style.removeProperty(te(t)), Lr = (e, t, n) => {
  const r = e?.style;
  return !t || typeof t != "string" || !e || !r || B(n, () => {
    et(n) || C(n) || tt(n) ? S(e, t, n) : n == null && gn(e, t);
  }), e;
}, Vr = (e, t, n) => {
  if (!t || !e) return e;
  const r = n;
  return C(n) && (n = n.value), t = te(t), e?.getAttribute?.(t) === (n = ge(n)) || B(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
};
function ce(e, t) {
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
var Z = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, ue = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, le = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, vn = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), ee = globalThis[vn] ??= /* @__PURE__ */ new WeakMap(), g = (e, t, n) => {
  const r = ee.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), ee.set(e, r);
}, xe = (e, t) => {
  const n = ee.get(e), r = n?.get(t);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(t), n.size === 0 && ee.delete(e);
  }
}, A = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, Je = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, bn = class extends we {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let i = !1, o = {
      x: 0,
      y: 0
    }, s = {
      x: 0,
      y: 0
    };
    const a = (d) => {
      const m = t.getBoundingClientRect();
      return {
        x: d.clientX - m.left,
        y: d.clientY - m.top
      };
    }, u = () => {
      const d = ce(o, s);
      if (d.width < 1 && d.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${d.left}px`, n.style.top = `${d.top}px`, n.style.width = `${d.width}px`, n.style.height = `${d.height}px`;
    }, f = (d) => {
      d.button === 0 && (d.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (d.target === t || t.contains(d.target)) && (i = !0, o = a(d), s = { ...o }, t.setPointerCapture(d.pointerId), t.dispatchEvent(new CustomEvent(Z.start, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          host: t
        }
      })), u()));
    }, c = (d) => {
      if (!i) return;
      s = a(d), u();
      const m = ce(o, s);
      t.dispatchEvent(new CustomEvent(Z.move, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          box: m,
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
      const m = ce(o, s);
      t.dispatchEvent(new CustomEvent(Z.end, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          box: m,
          host: t
        }
      }));
    }, h = (d) => {
      i && p(d);
    }, l = (d) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(d.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Z.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return g(t, "ui-junction-select", () => {
      n.remove();
    }), g(t, "ui-junction-select", y(t, "pointerdown", f)), g(t, "ui-junction-select", y(t, "pointermove", c)), g(t, "ui-junction-select", y(t, "pointerup", h)), g(t, "ui-junction-select", y(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && xe(t, "ui-junction-select"), this;
  }
}, Sn = class extends we {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    S(t, "--jx-drag-x", A(t, "--jx-drag-x")), S(t, "--jx-drag-y", A(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = Je(t, "data-junction-drag-handle", t);
    let i = !1, o = 0, s = 0, a = 0, u = 0;
    const f = (h) => {
      h.button === 0 && (h.target !== r && !r.contains(h.target) || (i = !0, o = h.clientX, s = h.clientY, a = A(t, "--jx-drag-x"), u = A(t, "--jx-drag-y"), r.setPointerCapture(h.pointerId), t.dispatchEvent(new CustomEvent(ue.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: h.clientX,
          clientY: h.clientY,
          baseX: a,
          baseY: u
        }
      }))));
    }, c = (h) => {
      if (!i) return;
      const l = h.clientX - o, d = h.clientY - s, m = a + l, M = u + d;
      S(t, "--jx-drag-x", m), S(t, "--jx-drag-y", M), t.dispatchEvent(new CustomEvent(ue.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: l,
          dy: d,
          x: m,
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
        t.dispatchEvent(new CustomEvent(ue.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: A(t, "--jx-drag-x"),
            y: A(t, "--jx-drag-y")
          }
        }));
      }
    };
    return g(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), g(t, "ui-junction-drag", y(r, "pointerdown", f)), g(t, "ui-junction-drag", y(r, "pointermove", c)), g(t, "ui-junction-drag", y(r, "pointerup", p)), g(t, "ui-junction-drag", y(r, "pointercancel", p)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && xe(t, "ui-junction-drag"), this;
  }
}, wn = class extends we {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Je(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, o = 0, s = 0, a = 0;
    const u = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), f = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), c = (l) => {
      l.button === 0 && (l.target !== n && !n.contains(l.target) || (r = !0, i = l.clientX, o = l.clientY, s = t.offsetWidth, a = t.offsetHeight, n.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(le.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: s,
          height: a
        }
      }))));
    }, p = (l) => {
      if (!r) return;
      const d = Math.max(u, s + (l.clientX - i)), m = Math.max(f, a + (l.clientY - o));
      t.style.width = `${d}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(le.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: d,
          height: m
        }
      }));
    }, h = (l) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(le.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return g(t, "ui-junction-resize", y(n, "pointerdown", c)), g(t, "ui-junction-resize", y(n, "pointermove", p)), g(t, "ui-junction-resize", y(n, "pointerup", h)), g(t, "ui-junction-resize", y(n, "pointercancel", h)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && xe(t, "ui-junction-resize"), this;
  }
};
new bn();
new Sn();
new wn();
export {
  we as DOMMixin,
  Sn as JunctionDragMixin,
  wn as JunctionResizeMixin,
  bn as JunctionSelectMixin,
  $n as MATCH,
  Xn as MOC,
  de as MOCElement,
  kn as RAFBehavior,
  In as REGEX,
  Rn as ROOT,
  hr as WavyShapedCircle,
  Mn as __exportProperties,
  Ee as __registeredCssProperties,
  y as addEvent,
  J as addEvents,
  Un as addEventsList,
  fn as addRoot,
  O as adoptedBlobMap,
  Oe as adoptedLayerMap,
  v as adoptedMap,
  Ve as adoptedSelectorMap,
  U as adoptedShadowLayerMap,
  je as adoptedShadowSelectorMap,
  xt as animateHide,
  wt as animateShow,
  he as availSize,
  tr as bbh,
  er as bbw,
  tn as bindBehavior,
  sn as bindMixins,
  an as bindStore,
  L as blobURLMap,
  X as borderBoxHeight,
  D as borderBoxWidth,
  Ye as boundBehaviors,
  x as boundMixinSet,
  E as cacheMap,
  rr as cbh,
  nr as cbw,
  Jn as changeZoom,
  ir as classes,
  bt as computeCaretPosition,
  sr as computeCaretPositionFromClient,
  Dn as containsOrSelf,
  G as contentBoxHeight,
  Y as contentBoxWidth,
  Bn as createElementVanilla,
  qt as createTypedUnitValue,
  gn as deleteStyleProperty,
  En as detectMobile,
  Vn as doBorderObserve,
  Ln as doContentObserve,
  Ot as fetchAndCache,
  Wt as fetchAsInline,
  or as fixOrientToScreen,
  Kn as fixedClientZoom,
  mr as getAdoptedStyleRule,
  Be as getAvailSize,
  Qn as getBoundingOrientRect,
  yt as getCorrectOrientation,
  F as getElementRelated,
  Mr as getElementZoom,
  Zn as getEventTarget,
  st as getOffsetParent,
  Cn as getOffsetParentChain,
  Cr as getPadding,
  W as getPropertyValue,
  Er as getPxValue,
  rn as getStoresOfElement,
  At as getStyleLayer,
  be as getStyleRule,
  wr as getTransform,
  xr as getTransformOrigin,
  Gn as getZoom,
  Vr as handleAttribute,
  zr as handleDataset,
  Pr as handleHidden,
  Tr as handleProperty,
  Lr as handleStyleChange,
  ie as hasParent,
  gr as hash,
  On as html,
  qn as includeSelf,
  Fn as indexOf,
  He as initTextStyle,
  fr as initVisibility,
  Hn as isElement,
  Yn as isInFocus,
  ot as isMobile,
  K as isNativeCSSStyleValue,
  An as isNearlyIdentity,
  _e as isReactiveStyleValue,
  Nn as isValidParent,
  Sr as layerCounter,
  Qt as loadAsAdopted,
  Yt as loadBlobStyle,
  j as loadInlineStyle,
  Xe as loadStyleSheet,
  ct as makeRAFCycle,
  ar as measureInputInFocus,
  vt as measureText,
  ee as mixinDisposers,
  k as mixinElements,
  Q as mixinNamespace,
  I as mixinRegistry,
  mn as nameRegistryF,
  $ as namedStoreMaps,
  dr as observeAttribute,
  ve as observeAttributeBySelector,
  lr as observeBorderBox,
  Ct as observeBySelector,
  ur as observeContentBox,
  Ae as onBorderObserve,
  ke as onContentObserve,
  P as orientOf,
  pt as orientationNumberMap,
  Ne as parseLength,
  en as parseOrigin,
  Ie as passiveOpts,
  br as preloadStyle,
  St as readLauncherLayoutFromElement,
  Ar as reflectBehaviors,
  Rr as reflectMixins,
  kr as reflectStores,
  yn as registerMixin,
  se as removeAdopted,
  Re as removeEvent,
  _n as removeEvents,
  cr as resolveGridCellFromClientPoint,
  me as roots,
  Tn as setAttributes,
  Pn as setAttributesIfNull,
  Wn as setChecked,
  zn as setIdleInterval,
  vr as setProperty,
  yr as setStyleInRule,
  S as setStyleProperty,
  De as setStylePropertyFallback,
  Dt as setStylePropertyTyped,
  Xt as setStyleRule,
  pr as setStyleRules,
  Te as setStyleURL,
  ut as throttleMap,
  fe as unfixedClientZoom,
  ye as updateAllMixins,
  Ge as updateMixinAttributes,
  hn as updateMixinAttributesAll,
  pn as updateMixinAttributesAllInRoots,
  mt as updateVP,
  jn as url,
  gt as whenAnyScreenChanges,
  ft as zoomOf,
  dt as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwsIHRyeVN0cmluZ0FzTnVtYmVyIH0gZnJvbSBcIkBmZXN0LWxpYi9jb3JlXCI7XG5cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvUHJvcGVydGllcy50c1xudmFyIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyA9IGdsb2JhbFRoaXNbX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5bXG5cdHtcblx0XHRuYW1lOiBcIi0tc2NyZWVuLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jbGlwLWZyZXFcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGl4ZWwtcmF0aW9cIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMVwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudC15XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC1sZWZ0XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC14XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC15XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH1cbl0uZm9yRWFjaCgob3B0aW9ucykgPT4ge1xuXHRpZiAodHlwZW9mIENTUyA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBDU1M/LnJlZ2lzdGVyUHJvcGVydHkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdGNvbnN0IG5hbWUgPSBTdHJpbmcob3B0aW9ucz8ubmFtZSB8fCBcIlwiKS50cmltKCk7XG5cdGlmICghbmFtZSB8fCBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmhhcyhuYW1lKSkgcmV0dXJuO1xuXHR0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KG9wdGlvbnMpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKCEoU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIikpIGNvbnNvbGUud2FybihlKTtcblx0fSBmaW5hbGx5IHtcblx0XHRfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmFkZChuYW1lKTtcblx0fVxufSk7XG52YXIgX19leHBvcnRQcm9wZXJ0aWVzID0gKCkgPT4ge307XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9EZXRlY3QudHNcbnZhciBpc01vYmlsZSA9ICgpID0+IHtcblx0bGV0IGNoZWNrID0gbmF2aWdhdG9yPy51c2VyQWdlbnREYXRhPy5tb2JpbGUgfHwgZmFsc2U7XG5cdCgoYSkgPT4ge1xuXHRcdGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkgY2hlY2sgPSB0cnVlO1xuXHR9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgZ2xvYmFsVGhpcy5vcGVyYSk7XG5cdHJldHVybiBjaGVjaztcbn07XG52YXIgZGV0ZWN0TW9iaWxlID0gKCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC9BbmRyb2lkL2ksXG5cdFx0L3dlYk9TL2ksXG5cdFx0L2lQaG9uZS9pLFxuXHRcdC9pUGFkL2ksXG5cdFx0L2lQb2QvaSxcblx0XHQvQmxhY2tCZXJyeS9pLFxuXHRcdC9XaW5kb3dzIFBob25lL2lcblx0XS5zb21lKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2guYmluZChuYXZpZ2F0b3IudXNlckFnZW50KSkgJiYgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgJiYgZ2xvYmFsVGhpcy5tYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9VdGlscy50c1xudmFyIGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrID0gKCkgPT4gKHtcblx0ZGlkVGltZW91dDogZmFsc2UsXG5cdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcbn0pO1xudmFyIHJ1bldoZW5JZGxlJDEgPSAoY2IsIHRpbWVvdXQgPSAxZTMpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayhjYiwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc2V0VGltZW91dCgoKSA9PiBjYihjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjaygpKSwgMCk7XG59O1xudmFyIGdldE9mZnNldFBhcmVudCA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiBlbGVtZW50Py5vZmZzZXRQYXJlbnQgPz8gZWxlbWVudD8uaG9zdDtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4gPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBwYXJlbnRzID0gW107XG5cdGxldCBjdXJyZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRjb25zdCBwYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoY3VycmVudCk7XG5cdFx0aWYgKHBhcmVudCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MSHRtbEVsZW1lbnQpIGJyZWFrO1xuXHRcdGlmIChjdXJyZW50ID0gcGFyZW50KSBwYXJlbnRzLnB1c2goY3VycmVudCk7XG5cdH1cblx0cmV0dXJuIHBhcmVudHM7XG59O1xudmFyIGlzTmVhcmx5SWRlbnRpdHkgPSAobWF0cml4LCBlcHNpbG9uID0gMWUtNikgPT4ge1xuXHRyZXR1cm4gTWF0aC5hYnMobWF0cml4LmEgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmIpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYykgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5kIC0gMSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5lKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmYpIDwgZXBzaWxvbjtcbn07XG52YXIgbWFrZVJBRkN5Y2xlID0gKCkgPT4ge1xuXHRjb25zdCBjb250cm9sID0ge1xuXHRcdGNhbmNlbGVkOiBmYWxzZSxcblx0XHRyQUZzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHRcdGxhc3Q6IG51bGwsXG5cdFx0Y2FuY2VsKCkge1xuXHRcdFx0dGhpcy5jYW5jZWxlZCA9IHRydWU7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxhc3QpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHRzaGVkdWxlKGNiKSB7XG5cdFx0XHR0aGlzLnJBRnMuYWRkKGNiKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0fTtcblx0KGFzeW5jICgpID0+IHtcblx0XHR3aGlsZSAoIWNvbnRyb2w/LmNhbmNlbGVkKSB7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbCgoY29udHJvbD8uckFGcz8udmFsdWVzPy4oKSA/PyBbXSk/Lm1hcD8uKChyQUYpID0+IFByb21pc2UudHJ5KHJBRik/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpKSk7XG5cdFx0XHRjb250cm9sLnJBRnM/LmNsZWFyPy4oKTtcblx0XHRcdGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHtcblx0XHRcdFx0Y29udHJvbC5sYXN0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcyk7XG5cdFx0XHR9KTtcblx0XHRcdGVsc2UgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJlcywgMTYpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KSgpO1xuXHRyZXR1cm4gY29udHJvbDtcbn07XG52YXIgUkFGQmVoYXZpb3IgPSAoc2hlZCA9IG1ha2VSQUZDeWNsZSgpKSA9PiB7XG5cdHJldHVybiAoY2IpID0+IHNoZWQuc2hlZHVsZShjYik7XG59O1xudmFyIFJPT1QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xudmFyIHNldEF0dHJpYnV0ZXNJZk51bGwgPSAoZWxlbWVudCwgYXR0cnMgPSB7fSkgPT4ge1xuXHRpZiAoIWF0dHJzIHx8IHR5cGVvZiBhdHRycyAhPSBcIm9iamVjdFwiIHx8ICFlbGVtZW50KSByZXR1cm47XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0Y29uc3Qgb2xkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgaWYgKHZhbHVlICE9IG9sZCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgb2xkID09IFwiXCIgPyB2YWx1ZSA/PyBvbGQgOiBvbGQgPz8gdmFsdWUpO1xuXHR9KTtcbn07XG52YXIgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPz8gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSkpO1xuXHR9KTtcbn07XG52YXIgdGhyb3R0bGVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIHNldElkbGVJbnRlcnZhbCA9IChjYiwgdGltZW91dCA9IDFlMywgLi4uYXJncykgPT4ge1xuXHRjb25zdCBzdGF0dXMgPSB7XG5cdFx0cnVubmluZzogdHJ1ZSxcblx0XHRjYW5jZWw6ICgpID0+IHtcblx0XHRcdHN0YXR1cy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXHRydW5XaGVuSWRsZSQxKGFzeW5jICgpID0+IHtcblx0XHRpZiAoIWNiIHx8IHR5cGVvZiBjYiAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0XHR3aGlsZSAoc3RhdHVzLnJ1bm5pbmcpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKFtQcm9taXNlLnRyeShjYiwgLi4uYXJncyksIG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHRpbWVvdXQpKV0pLmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbnkoW25ldyBQcm9taXNlKChyKSA9PiBydW5XaGVuSWRsZSQxKHIsIHRpbWVvdXQpKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSk7XG5cdFx0fVxuXHRcdHN0YXR1cy5jYW5jZWwgPSAoKSA9PiB7fTtcblx0fSwgdGltZW91dCk7XG5cdHJldHVybiBzdGF0dXM/LmNhbmNlbDtcbn07XG5pZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPSBcInVuZGVmaW5lZFwiKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXN5bmMgKCkgPT4ge1xuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdHRocm90dGxlTWFwLmZvckVhY2goKGNiKSA9PiBjYj8uKCkpO1xuXHRcdGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpO1xuXHR9XG59KTtcbnZhciBib3JkZXJCb3hXaWR0aCA9IFN5bWJvbChcIkBib3JkZXItYm94LXdpZHRoXCIpO1xudmFyIGJvcmRlckJveEhlaWdodCA9IFN5bWJvbChcIkBib3JkZXItYm94LWhlaWdodFwiKTtcbnZhciBjb250ZW50Qm94V2lkdGggPSBTeW1ib2woXCJAY29udGVudC1ib3gtd2lkdGhcIik7XG52YXIgY29udGVudEJveEhlaWdodCA9IFN5bWJvbChcIkBjb250ZW50LWJveC1oZWlnaHRcIik7XG52YXIgb25Cb3JkZXJPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgb25Db250ZW50T2JzZXJ2ZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGRvQ29udGVudE9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Db250ZW50T2JzZXJ2ZS5oYXMoZWxlbWVudCkpIHtcblx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuXHRcdGVsZW1lbnRbY29udGVudEJveEhlaWdodF0gPSBlbGVtZW50LmNsaWVudEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgY29udGVudEJveFNpemUgPSBlbnRyeS5jb250ZW50Qm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGNvbnRlbnRCb3hTaXplKSB7XG5cdFx0XHRcdFx0ZWxlbWVudFtjb250ZW50Qm94V2lkdGhdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5jbGllbnRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IE1hdGgubWluKGNvbnRlbnRCb3hTaXplLmJsb2NrU2l6ZSwgZWxlbWVudC5jbGllbnRIZWlnaHQpO1xuXHRcdFx0XHRcdGNiPy4oZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRvbkNvbnRlbnRPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImNvbnRlbnQtYm94XCIgfSk7XG5cdH1cbn07XG52YXIgZG9Cb3JkZXJPYnNlcnZlID0gKGVsZW1lbnQsIGNiID0gKCkgPT4ge30pID0+IHtcblx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuXHRpZiAoIW9uQm9yZGVyT2JzZXJ2ZS5oYXMoZWxlbWVudCkpIHtcblx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgYm9yZGVyQm94U2l6ZSA9IGVudHJ5LmJvcmRlckJveFNpemVbMF07XG5cdFx0XHRcdGlmIChib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hXaWR0aF0gPSBNYXRoLm1pbihib3JkZXJCb3hTaXplLmlubGluZVNpemUsIGVsZW1lbnQub2Zmc2V0V2lkdGgpO1xuXHRcdFx0XHRcdGVsZW1lbnRbYm9yZGVyQm94SGVpZ2h0XSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50Lm9mZnNldEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQm9yZGVyT2JzZXJ2ZS5zZXQoZWxlbWVudCwgb2JzZXJ2ZXIpO1xuXHRcdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJib3JkZXItYm94XCIgfSk7XG5cdH1cbn07XG52YXIgdXJsID0gKHR5cGUsIC4uLnNvdXJjZSkgPT4ge1xuXHRyZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihzb3VyY2UsIHsgdHlwZSB9KSk7XG59O1xudmFyIGh0bWwgPSAoc291cmNlLCB0eXBlID0gXCJ0ZXh0L2h0bWxcIikgPT4ge1xuXHRjb25zdCBwYXJzZWQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHNvdXJjZSwgdHlwZSk7XG5cdHJldHVybiBwYXJzZWQucXVlcnlTZWxlY3RvcihcInRlbXBsYXRlXCIpID8/IHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwiKlwiKTtcbn07XG52YXIgc2V0Q2hlY2tlZCA9IChpbnB1dCwgdmFsdWUsIGV2KSA9PiB7XG5cdGlmICh2YWx1ZSAhPSBudWxsICYmIGlucHV0LmNoZWNrZWQgIT0gdmFsdWUpIHtcblx0XHRpZiAoaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJjaGVja2JveFwiIHx8IGlucHV0Py5bXCJ0eXBlXCJdID09IFwicmFkaW9cIiAmJiAhaW5wdXQ/LmNoZWNrZWQpIHtcblx0XHRcdGlucHV0Py5jbGljaz8uKCk7XG5cdFx0XHRldj8ucHJldmVudERlZmF1bHQ/LigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbnB1dC5jaGVja2VkID0gISF2YWx1ZTtcblx0XHRcdGlucHV0Py5kaXNwYXRjaEV2ZW50Py4obmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fVxufTtcbnZhciBpc1ZhbGlkUGFyZW50ID0gKHBhcmVudCkgPT4ge1xuXHRyZXR1cm4gcGFyZW50ICE9IG51bGwgJiYgcGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgIShwYXJlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50IHx8IHBhcmVudCBpbnN0YW5jZW9mIEhUTUxCb2R5RWxlbWVudCkgPyBwYXJlbnQgOiBudWxsO1xufTtcbnZhciBpbmRleE9mID0gKGVsZW1lbnQsIG5vZGUpID0+IHtcblx0aWYgKGVsZW1lbnQgPT0gbnVsbCB8fCBub2RlID09IG51bGwpIHJldHVybiAtMTtcblx0cmV0dXJuIEFycmF5LmZyb20oZWxlbWVudD8uY2hpbGROb2RlcyA/PyBbXSk/LmluZGV4T2Y/Lihub2RlKSA/PyAtMTtcbn07XG52YXIgTUFUQ0ggPSBcIigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKilcIjtcbnZhciBSRUdFWCA9IFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCI7XG52YXIgY3JlYXRlRWxlbWVudFZhbmlsbGEgPSAoc2VsZWN0b3IpID0+IHtcblx0aWYgKHNlbGVjdG9yID09IFwiOmZyYWdtZW50OlwiKSByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50LmJpbmQoZG9jdW1lbnQpO1xuXHRmb3IgKHZhciBub2RlID0gY3JlYXRlKFwiZGl2XCIpLCBtYXRjaCwgY2xhc3NOYW1lID0gXCJcIjsgc2VsZWN0b3IgJiYgKG1hdGNoID0gc2VsZWN0b3IubWF0Y2goXCJeKD86KC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSl8XiMoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcLigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKil8XlxcXFxbKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSg/OihbKiR8fl5dPz0pKFtcXFwiJ10pKCg/Oig/PShcXFxcXFxcXD8pKVxcXFw4LikqPylcXFxcNik/XFxcXF1cIikpOykge1xuXHRcdGlmIChtYXRjaFsxXSkgbm9kZSA9IGNyZWF0ZShtYXRjaFsxXSk7XG5cdFx0aWYgKG1hdGNoWzJdKSBub2RlLmlkID0gbWF0Y2hbMl07XG5cdFx0aWYgKG1hdGNoWzNdKSBjbGFzc05hbWUgKz0gXCIgXCIgKyBtYXRjaFszXTtcblx0XHRpZiAobWF0Y2hbNF0pIG5vZGUuc2V0QXR0cmlidXRlKG1hdGNoWzRdLCBtYXRjaFs3XSB8fCBcIlwiKTtcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG5cdH1cblx0aWYgKGNsYXNzTmFtZSkgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWUuc2xpY2UoMSk7XG5cdHJldHVybiBub2RlO1xufTtcbnZhciBpc0VsZW1lbnQgPSAoZWwpID0+IHtcblx0cmV0dXJuIGVsICE9IG51bGwgJiYgKGVsIGluc3RhbmNlb2YgTm9kZSB8fCBlbCBpbnN0YW5jZW9mIFRleHQgfHwgZWwgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgQ29tbWVudCB8fCBlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgPyBlbCA6IG51bGw7XG59O1xudmFyIGluY2x1ZGVTZWxmID0gKHRhcmdldCwgc2VsZWN0b3IpID0+IHtcblx0cmV0dXJuIHRhcmdldC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/PyAodGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpID8gdGFyZ2V0IDogbnVsbCk7XG59O1xudmFyIGhhc1BhcmVudCA9IChjdXJyZW50LCBwYXJlbnQpID0+IHtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRpZiAoIShjdXJyZW50Py5lbGVtZW50ID8/IGN1cnJlbnQpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKChjdXJyZW50Py5lbGVtZW50ID8/IGN1cnJlbnQpID09PSAocGFyZW50Py5lbGVtZW50ID8/IHBhcmVudCkpIHJldHVybiB0cnVlO1xuXHRcdGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQgPz8gKGN1cnJlbnQucGFyZW50Tm9kZSA9PSBjdXJyZW50Py5nZXRSb290Tm9kZT8uKHsgY29tcG9zZWQ6IHRydWUgfSkgPyBjdXJyZW50Py5nZXRSb290Tm9kZT8uKHsgY29tcG9zZWQ6IHRydWUgfSk/Lmhvc3QgOiBjdXJyZW50Py5wYXJlbnROb2RlKTtcblx0fVxufTtcbnZhciBwYXNzaXZlT3B0cyA9IHt9O1xuZnVuY3Rpb24gYWRkRXZlbnQodGFyZ2V0LCB0eXBlLCBjYiwgb3B0cyA9IHBhc3NpdmVPcHRzKSB7XG5cdHRhcmdldD8uYWRkRXZlbnRMaXN0ZW5lcj8uKHR5cGUsIGNiLCBvcHRzKTtcblx0Y29uc3Qgd3IgPSB0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHRhcmdldCA9PSBcImZ1bmN0aW9uXCIgJiYgIXRhcmdldD8uZGVyZWYgPyBuZXcgV2Vha1JlZih0YXJnZXQpIDogdGFyZ2V0O1xuXHRyZXR1cm4gKCkgPT4gd3I/LmRlcmVmPy4oKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKHR5cGUsIGNiLCBvcHRzKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG52YXIgYWRkRXZlbnRzID0gKHJvb3QsIGhhbmRsZXJzKSA9PiB7XG5cdHJvb3QgPSByb290IGluc3RhbmNlb2YgV2Vha1JlZiA/IHJvb3QuZGVyZWYoKSA6IHJvb3Q7XG5cdHJldHVybiBbLi4uT2JqZWN0LmVudHJpZXMoaGFuZGxlcnMpXS5tYXA/LigoW25hbWUsIGNiXSkgPT4gQXJyYXkuaXNBcnJheShjYikgPyBhZGRFdmVudChyb290LCBuYW1lLCAuLi5jYikgOiBhZGRFdmVudChyb290LCBuYW1lLCBjYikpO1xufTtcbnZhciBhZGRFdmVudHNMaXN0ID0gKGVsLCBldmVudHMpID0+IHtcblx0aWYgKGV2ZW50cykge1xuXHRcdGxldCBlbnRyaWVzID0gZXZlbnRzO1xuXHRcdGlmIChldmVudHMgaW5zdGFuY2VvZiBNYXApIGVudHJpZXMgPSBbLi4uZXZlbnRzLmVudHJpZXMoKV07XG5cdFx0ZWxzZSBlbnRyaWVzID0gWy4uLk9iamVjdC5lbnRyaWVzKGV2ZW50cyldO1xuXHRcdHJldHVybiBlbnRyaWVzLm1hcCgoW25hbWUsIGxpc3RdKSA9PiAoKGlzQXJyYXlPckl0ZXJhYmxlKGxpc3QpID8gWy4uLmxpc3RdIDogbGlzdCkgPz8gW10pPy5tYXA/LigoY2JzKSA9PiB7XG5cdFx0XHRyZXR1cm4gYWRkRXZlbnQoZWwsIG5hbWUsIGNicyk7XG5cdFx0fSkpO1xuXHR9XG59O1xudmFyIHJlbW92ZUV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gcmVtb3ZlRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogcmVtb3ZlRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgZ2V0RXZlbnRUYXJnZXQgPSAoZXYpID0+IHtcblx0aWYgKCFldikgcmV0dXJuIG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuIG5vZGU7XG5cdH1cblx0Y29uc3QgdGFyZ2V0ID0gZXY/LnRhcmdldDtcblx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiB0YXJnZXQ7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBjb250YWluc09yU2VsZiA9IChhLCBiLCBldikgPT4ge1xuXHRpZiAoYiA9PSBudWxsIHx8ICEoYiBpbnN0YW5jZW9mIE5vZGUpICYmIGI/LmVsZW1lbnQgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoYSA9PSBiIHx8IChhPy5lbGVtZW50ID8/IGEpID09IChiPy5lbGVtZW50ID8/IGIpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGNvbnN0IGFFbCA9IGE/LmVsZW1lbnQgPz8gYTtcblx0XHRjb25zdCBiRWwgPSBiPy5lbGVtZW50ID8/IGI7XG5cdFx0aWYgKHBhdGguaW5jbHVkZXMoYUVsKSAmJiBwYXRoLmluY2x1ZGVzKGJFbCkpIHtcblx0XHRcdGNvbnN0IGFJbmRleCA9IHBhdGguaW5kZXhPZihhRWwpO1xuXHRcdFx0Y29uc3QgYkluZGV4ID0gcGF0aC5pbmRleE9mKGJFbCk7XG5cdFx0XHRpZiAoYkluZGV4ID49IDAgJiYgYUluZGV4ID49IDAgJiYgYkluZGV4IDwgYUluZGV4KSByZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKGE/LmNvbnRhaW5zPy4oYj8uZWxlbWVudCA/PyBiKSB8fCBhPy5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0ID09IChiPy5lbGVtZW50ID8/IGIpKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIGZhbHNlO1xufTtcbnZhciBNT0NFbGVtZW50ID0gKGVsZW1lbnQsIHNlbGVjdG9yLCBldikgPT4ge1xuXHRjb25zdCBzZWwgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBzZWxlY3Rvci50cmltKCkgOiBcIlwiO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGVsZW1lbnQgPz8gbnVsbDtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBwYXRoKSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB0cnkge1xuXHRcdFx0aWYgKG5vZGUubWF0Y2hlcz8uKHNlbCkpIHJldHVybiBub2RlO1xuXHRcdH0gY2F0Y2gge31cblx0fVxuXHRsZXQgc2VsZiA9IG51bGw7XG5cdGxldCBob3N0TWF0Y2hlZCA9IG51bGw7XG5cdGxldCBjbG9zZXN0ID0gbnVsbDtcblx0dHJ5IHtcblx0XHRzZWxmID0gZWxlbWVudD8ubWF0Y2hlcz8uKHNlbCkgPyBlbGVtZW50IDogbnVsbDtcblx0XHRjb25zdCBob3N0ID0gKGVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkgPz8gZWxlbWVudD8ucGFyZW50RWxlbWVudD8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSk/Lmhvc3Q7XG5cdFx0aG9zdE1hdGNoZWQgPSBob3N0Py5tYXRjaGVzPy4oc2VsKSA/IGhvc3QgOiBudWxsO1xuXHRcdGNsb3Nlc3QgPSBlbGVtZW50Py5jbG9zZXN0Py4oc2VsKSA/PyBzZWxmPy5jbG9zZXN0Py4oc2VsKSA/PyBob3N0TWF0Y2hlZD8uY2xvc2VzdD8uKHNlbCkgPz8gbnVsbDtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gc2VsZiA/PyBjbG9zZXN0ID8/IGhvc3RNYXRjaGVkO1xufTtcbnZhciBNT0MgPSAoZWxlbWVudCwgc2VsZWN0b3IpID0+IHtcblx0cmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvcik7XG59O1xudmFyIGlzSW5Gb2N1cyA9IChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCwgZGlyID0gXCJwYXJlbnRcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKGVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmICFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSh7XG5cdFx0Y2hlY2tPcGFjaXR5OiB0cnVlLFxuXHRcdGNoZWNrVmlzaWJpbGl0eUNTUzogdHJ1ZVxuXHR9KSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoIWVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmIGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsICYmIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gIT09IFwiZml4ZWRcIikgcmV0dXJuIGZhbHNlO1xuXHRsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0d2hpbGUgKGFjdGl2ZSAmJiBhY3RpdmUuc2hhZG93Um9vdCAmJiBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50KSBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuXHRjb25zdCBpc0ZvY3VzZWQgPSBhY3RpdmUgPT09IGVsZW1lbnQgfHwgaGFzUGFyZW50KGFjdGl2ZSwgZWxlbWVudCk7XG5cdGNvbnN0IGlzSG92ZXJlZCA9IGVsZW1lbnQubWF0Y2hlcyhcIjpob3ZlclwiKTtcblx0aWYgKCFpc0ZvY3VzZWQgJiYgIWlzSG92ZXJlZCAmJiAhc2VsZWN0b3JPckVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKHNlbGVjdG9yT3JFbGVtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBzZWxlY3Rvck9yRWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKGRpciA9PT0gXCJwYXJlbnRcIikgcmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gaXNGb2N1c2VkID8gYWN0aXZlIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiOmhvdmVyXCIpIHx8IGVsZW1lbnQ7XG5cdFx0XHRcdGNvbnN0IGFsdENuZCA9ICEhTU9DRWxlbWVudCh0YXJnZXQsIHNlbGVjdG9yT3JFbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I/LihzZWxlY3Rvck9yRWxlbWVudCkgIT0gbnVsbCB8fCBlbGVtZW50Py5tYXRjaGVzPy4oc2VsZWN0b3JPckVsZW1lbnQpIHx8IGFsdENuZDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHNlbGVjdG9yT3JFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiBoYXNQYXJlbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpIHx8IGZhbHNlO1xuXHRcdFx0ZWxzZSByZXR1cm4gaGFzUGFyZW50KHNlbGVjdG9yT3JFbGVtZW50LCBlbGVtZW50KSB8fCBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvWm9vbS50c1xudmFyIGdldFpvb20gPSAoKSA9PiB7XG5cdGlmIChcImN1cnJlbnRDU1Nab29tXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdHJldHVybiBwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zY2FsaW5nXCIpIHx8IFwiMVwiKSB8fCAxO1xufTtcbnZhciB6b29tVmFsdWVzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xudmFyIHpvb21WYWx1ZXMgPSBnbG9iYWxUaGlzW3pvb21WYWx1ZXNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB6b29tT2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gem9vbVZhbHVlcy5nZXRPckluc2VydENvbXB1dGVkKGVsZW1lbnQsICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiLnVpLW9yaWVudGJveFwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCIudWktb3JpZW50Ym94XCIpIHx8IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYgKGNvbnRhaW5lcj8uem9vbSkgcmV0dXJuIGNvbnRhaW5lcj8uem9vbSB8fCAxO1xuXHRcdGlmIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgcmV0dXJuIGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdH0pO1xufTtcbnZhciBjaGFuZ2Vab29tID0gKHNjYWxlID0gMSkgPT4ge1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNjYWxpbmdcIiwgc2NhbGUpO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzY2FsaW5nXCIsIHtcblx0XHRkZXRhaWw6IHsgem9vbTogc2NhbGUgfSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpO1xuXHRyZXR1cm4gc2NhbGU7XG59O1xudmFyIGZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gIT0gbnVsbCA/IDEgOiB6b29tT2YoZWxlbWVudCkpIHx8IDE7XG59O1xudmFyIHVuZml4ZWRDbGllbnRab29tID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSA9PSBudWxsID8gMSA6IGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tKSB8fCAxO1xufTtcbnZhciBvcmllbnRPZiA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IChlbGVtZW50Py5tYXRjaGVzPy4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpID8gZWxlbWVudCA6IG51bGwpIHx8IGVsZW1lbnQ/LmNsb3Nlc3Q/LihcIltvcmllbnRdLCBbZGF0YS1taXhpbj1cXFwidWktb3JpZW50Ym94XFxcIl1cIikgfHwgZWxlbWVudDtcblx0aWYgKGNvbnRhaW5lcj8uaGFzQXR0cmlidXRlPy4oXCJvcmllbnRcIikpIHJldHVybiBwYXJzZUludChjb250YWluZXI/LmdldEF0dHJpYnV0ZT8uKFwib3JpZW50XCIpIHx8IFwiMFwiKSB8fCAwO1xuXHRpZiAoY29udGFpbmVyPy5vcmllbnQgIT0gbnVsbCAmJiBOdW1iZXIuaXNGaW5pdGUoTnVtYmVyKGNvbnRhaW5lci5vcmllbnQpKSkgcmV0dXJuIE51bWJlcihjb250YWluZXIub3JpZW50KSB8fCAwO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGNvbnRhaW5lcj8uc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcIi0tb3JpZW50XCIpIHx8ICh0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSA9PT0gXCJmdW5jdGlvblwiICYmIGNvbnRhaW5lciA/IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1vcmllbnRcIikgOiBcIlwiKSB8fCBcIlwiO1xuXHRcdGNvbnN0IG4gPSBwYXJzZUludChTdHJpbmcocmF3KS50cmltKCksIDEwKTtcblx0XHRpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbjtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gMDtcbn07XG52YXIgZ2V0Qm91bmRpbmdPcmllbnRSZWN0ID0gKGVsZW1lbnQsIG9yaWVudCA9IG51bGwpID0+IHtcblx0Y29uc3Qgem9vbSA9IHVuZml4ZWRDbGllbnRab29tKGVsZW1lbnQpIHx8IDE7XG5cdGNvbnN0IGJveCA9IGVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XG5cdGNvbnN0IG5ieCA9IHtcblx0XHRsZWZ0OiBib3g/LmxlZnQgLyB6b29tLFxuXHRcdHJpZ2h0OiBib3g/LnJpZ2h0IC8gem9vbSxcblx0XHR0b3A6IGJveD8udG9wIC8gem9vbSxcblx0XHRib3R0b206IGJveD8uYm90dG9tIC8gem9vbSxcblx0XHR3aWR0aDogYm94Py53aWR0aCAvIHpvb20sXG5cdFx0aGVpZ2h0OiBib3g/LmhlaWdodCAvIHpvb21cblx0fTtcblx0Y29uc3Qgb3JfaSA9IG9yaWVudCA/PyAob3JpZW50T2YoZWxlbWVudCkgfHwgMCk7XG5cdGNvbnN0IHZ2ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGw7XG5cdGNvbnN0IHNpemUgPSBbKCh2dj8ud2lkdGggPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRXaWR0aCA/PyB3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMSkgLyB6b29tLCAoKHZ2Py5oZWlnaHQgPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRIZWlnaHQgPz8gd2luZG93LmlubmVySGVpZ2h0KSB8fCAxKSAvIHpvb21dO1xuXHRjb25zdCBbbGVmdF8sIHRvcF9dID0gY3Z0X2NzX3RvX29zKFtuYngubGVmdCwgbmJ4LnRvcF0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbcmlnaHRfLCBib3R0b21fXSA9IGN2dF9jc190b19vcyhbbmJ4LnJpZ2h0LCBuYnguYm90dG9tXSwgc2l6ZSwgb3JfaSk7XG5cdGNvbnN0IFtsZWZ0LCByaWdodF0gPSBvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gW2xlZnRfLCByaWdodF9dIDogW3JpZ2h0XywgbGVmdF9dO1xuXHRjb25zdCBbdG9wLCBib3R0b21dID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMSA/IFt0b3BfLCBib3R0b21fXSA6IFtib3R0b21fLCB0b3BfXTtcblx0Y29uc3QgW3dpZHRoLCBoZWlnaHRdID0gb3JfaSAlIDIgPyBbbmJ4LmhlaWdodCwgbmJ4LndpZHRoXSA6IFtuYngud2lkdGgsIG5ieC5oZWlnaHRdO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aCxcblx0XHRoZWlnaHRcblx0fTtcbn07XG52YXIgYmJ3ID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBiYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtib3JkZXJCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoIDogZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xudmFyIGNidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQgOiBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBjYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQ7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9WaWV3cG9ydC50c1xudmFyIHJ1bldoZW5JZGxlID0gKGNiLCB0aW1lb3V0ID0gMTAwKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2soY2IsIHsgdGltZW91dCB9KTtcblx0cmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gY2Ioe1xuXHRcdGRpZFRpbWVvdXQ6IGZhbHNlLFxuXHRcdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcblx0fSksIDApO1xufTtcbnZhciBnZXRBdmFpbFNpemUgPSAoKSA9PiB7XG5cdGNvbnN0IGwgPSB0eXBlb2YgbWF0Y2hNZWRpYSAhPSBcInVuZGVmaW5lZFwiID8gbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyA6IGZhbHNlO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCB2dkJsb2NrID0gdnYgPyB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IGAke3Z2LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3Z2LmhlaWdodH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IGAke3Z2Lm9mZnNldExlZnR9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtdG9wXCI6IGAke3Z2Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh2di5zY2FsZSA/PyAxKVxuXHR9IDoge1xuXHRcdFwiLS12di13aWR0aFwiOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gYCR7d2luZG93LmlubmVyV2lkdGh9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0Y29uc3QgYXcgPSBzY3JlZW4/LmF2YWlsV2lkdGggKyBcInB4XCI7XG5cdFx0Y29uc3QgYWggPSBzY3JlZW4/LmF2YWlsSGVpZ2h0ICsgXCJweFwiO1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IE1hdGgubWluKHNjcmVlbj8ud2lkdGgsIHNjcmVlbj8uYXZhaWxXaWR0aCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmhlaWdodCwgc2NyZWVuPy5hdmFpbEhlaWdodCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tYXZhaWwtd2lkdGhcIjogbCA/IGFoIDogYXcsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGwgPyBhdyA6IGFoLFxuXHRcdFx0XCItLXZpZXctaGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uYXZhaWxIZWlnaHQsIHdpbmRvdz8uaW5uZXJIZWlnaHQpICsgXCJweFwiLFxuXHRcdFx0XCItLXBpeGVsLXJhdGlvXCI6IFN0cmluZyhkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLFxuXHRcdFx0Li4udnZCbG9ja1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtd2lkdGhcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXZpZXctaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXBpeGVsLXJhdGlvXCI6IFwiMVwiLFxuXHRcdC4uLnZ2QmxvY2tcblx0fTtcbn07XG52YXIgYXZhaWxTaXplID0gZ2V0QXZhaWxTaXplKCk7XG52YXIgY2xhc3NlcyA9IFtbXCI6cm9vdCwgOmhvc3QsIDpzY29wZVwiLCBhdmFpbFNpemVdXTtcbnZhciBvcmllbnRhdGlvbk51bWJlck1hcCA9IHtcblx0XCJwb3J0cmFpdC1wcmltYXJ5XCI6IDAsXG5cdFwibGFuZHNjYXBlLXByaW1hcnlcIjogMSxcblx0XCJwb3J0cmFpdC1zZWNvbmRhcnlcIjogMixcblx0XCJsYW5kc2NhcGUtc2Vjb25kYXJ5XCI6IDNcbn07XG52YXIgdXBkYXRlVlAgPSAoZXYpID0+IHtcblx0Y29uc3QgcnVsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0T2JqZWN0LmFzc2lnbihhdmFpbFNpemUsIGdldEF2YWlsU2l6ZSgpKTtcblx0T2JqZWN0LmVudHJpZXMoYXZhaWxTaXplKS5mb3JFYWNoKChbcHJvcE5hbWUsIHByb3BWYWx1ZV0pID0+IHtcblx0XHRjb25zdCBleGlzdHMgPSBydWxlPy5zdHlsZT8uZ2V0UHJvcGVydHlWYWx1ZShwcm9wTmFtZSk7XG5cdFx0aWYgKCFleGlzdHMgfHwgZXhpc3RzICE9IHByb3BWYWx1ZSkgcnVsZT8uc3R5bGU/LnNldFByb3BlcnR5Py4ocHJvcE5hbWUsIHByb3BWYWx1ZSB8fCBcIlwiLCBcIlwiKTtcblx0fSk7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50YXRpb24tc2Vjb25kYXJ5XCIsIHNjcmVlbj8ub3JpZW50YXRpb24/LnR5cGU/LmVuZHNXaXRoPy4oXCJzZWNvbmRhcnlcIikgPyBcIjFcIiA6IFwiMFwiKTtcbn07XG52YXIgZ2V0Q29ycmVjdE9yaWVudGF0aW9uID0gKCkgPT4ge1xuXHRsZXQgb3JpZW50YXRpb25UeXBlID0gc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZSB8fCBcInBvcnRyYWl0LXByaW1hcnlcIjtcblx0aWYgKCFnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIoKGRpc3BsYXktbW9kZTogZnVsbHNjcmVlbikgb3IgKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSkgb3IgKGRpc3BsYXktbW9kZTogd2luZG93LWNvbnRyb2xzLW92ZXJsYXkpKVwiKS5tYXRjaGVzKSB7XG5cdFx0aWYgKG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcImxhbmRzY2FwZVwiLCBcInBvcnRyYWl0XCIpO1xuXHRcdGVsc2UgaWYgKG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIikubWF0Y2hlcykgb3JpZW50YXRpb25UeXBlID0gb3JpZW50YXRpb25UeXBlLnJlcGxhY2UoXCJwb3J0cmFpdFwiLCBcImxhbmRzY2FwZVwiKTtcblx0fVxuXHRyZXR1cm4gb3JpZW50YXRpb25UeXBlO1xufTtcbnZhciBwYXNzaXZlT3B0cyQxID0geyBwYXNzaXZlOiB0cnVlIH07XG52YXIgd2hlbkFueVNjcmVlbkNoYW5nZXMgPSAoY2IpID0+IHtcblx0bGV0IHRpY2tpbmcgPSBmYWxzZTtcblx0Y29uc3QgdXBkYXRlID0gKCkgPT4ge1xuXHRcdGlmICghdGlja2luZykge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRcdFx0dXBkYXRlVlAoKTtcblx0XHRcdFx0Y2IoKTtcblx0XHRcdFx0dGlja2luZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0XHR0aWNraW5nID0gdHJ1ZTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBbXTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG5hdmlnYXRvcj8udmlydHVhbEtleWJvYXJkLCBcImdlb21ldHJ5Y2hhbmdlXCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93Py52aXN1YWxWaWV3cG9ydCwgXCJzY3JvbGxcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInJlc2l6ZVwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHNjcmVlbj8ub3JpZW50YXRpb24sIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQsIFwiZnVsbHNjcmVlbmNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIiksIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKSwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVwZGF0ZSgpO1xuXHRydW5XaGVuSWRsZSgoKSA9PiB1cGRhdGUoKSwgMTAwKTtcblx0cmV0dXJuICgpID0+IHVuc3Vic2NyaWJlcnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xufTtcbnZhciBmaXhPcmllbnRUb1NjcmVlbiA9IChlbGVtZW50KSA9PiB7XG5cdGlmICghZWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucz8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKSkge1xuXHRcdGVsZW1lbnQ/LmNsYXNzTGlzdD8uYWRkPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpO1xuXHRcdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcygoKSA9PiB7XG5cdFx0XHRjb25zdCBuZXh0ID0gb3JpZW50YXRpb25OdW1iZXJNYXA/LltnZXRDb3JyZWN0T3JpZW50YXRpb24oKV0gPz8gMDtcblx0XHRcdGVsZW1lbnQub3JpZW50ID0gbmV4dDtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlPy4oXCJvcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHRcdGVsZW1lbnQuc3R5bGU/LnNldFByb3BlcnR5Py4oXCItLW9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvTWVhc3VyZS50c1xudmFyIGN0eCA9IG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIGluaXRUZXh0U3R5bGUgPSAoZWxlbWVudCwgY3R4KSA9PiB7XG5cdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBcIlwiKTtcblx0aWYgKGN0eCAmJiBzdHlsZSkge1xuXHRcdGNvbnN0IGZvbnRXZWlnaHQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC13ZWlnaHRcIikgfHwgXCJub3JtYWxcIjtcblx0XHRjb25zdCBmb250U2l6ZSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikgfHwgXCIxNnB4XCI7XG5cdFx0Y29uc3QgZm9udEZhbWlseSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWZhbWlseVwiKSB8fCBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRcdGNvbnN0IGZvbnRTdHJldGNoID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc3RyZXRjaFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFN0cmV0Y2ggPSBmb250U3RyZXRjaC5pbmNsdWRlcyhcIiVcIikgPyBcIm5vcm1hbFwiIDogZm9udFN0cmV0Y2g7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmxldHRlclNwYWNpbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibGV0dGVyLXNwYWNpbmdcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udEtlcm5pbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1rZXJuaW5nXCIpIHx8IFwiYXV0b1wiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250VmFyaWFudENhcHMgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC12YXJpYW50LWNhcHNcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udCA9IGAke2ZvbnRXZWlnaHR9ICR7Zm9udFNpemV9ICR7Zm9udEZhbWlseX1gO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cbn07XG52YXIgbWVhc3VyZVRleHQgPSAodGV4dCwgZWxlbWVudCkgPT4ge1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShlbGVtZW50LCBjdHgpO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cblx0cmV0dXJuIHsgd2lkdGg6IG51bGwgfTtcbn07XG52YXIgbWVhc3VyZUlucHV0SW5Gb2N1cyA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQudmFsdWUuc2xpY2UoMCwgaW5wdXQuc2VsZWN0aW9uRW5kIHx8IDApO1xuXHRyZXR1cm4gbWVhc3VyZVRleHQodGV4dCwgaW5wdXQpO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbiA9IChpbnB1dCwgcG9pbnQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0Py52YWx1ZSB8fCBcIlwiO1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShpbnB1dCwgY3R4KTtcblx0XHRsZXQgY3VycmVudFdpZHRoID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1cnJlbnRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0LnNsaWNlKDAsIGkpKT8ud2lkdGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoID09IG51bGwpIHJldHVybiB0ZXh0Lmxlbmd0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggIT0gbnVsbCAmJiBjdXJyZW50V2lkdGggPj0gcG9pbnRbMF0pIHJldHVybiBNYXRoLm1heChpIC0gMSwgMCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0Lmxlbmd0aDtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50ID0gKGlucHV0LCBjbGllbnQpID0+IHtcblx0Y29uc3QgYm94ID0gaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IHBvaW50ID0gW2NsaWVudFswXSAtIGJveC5sZWZ0IC8gdW5maXhlZENsaWVudFpvb20oKSwgY2xpZW50WzFdIC0gYm94LnRvcCAvIHVuZml4ZWRDbGllbnRab29tKCldO1xuXHRyZXR1cm4gY29tcHV0ZUNhcmV0UG9zaXRpb24oaW5wdXQsIHBvaW50KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9MYXVuY2hlckdyaWQudHNcbnZhciByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCA9IChlbCwgbGF5b3V0T3ZlcnJpZGUpID0+IHtcblx0Y29uc3QgYyA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1jb2x1bW5zXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgciA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1yb3dzXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgYmFzZSA9IG5vcm1hbGl6ZUdyaWRMYXlvdXQobGF5b3V0T3ZlcnJpZGUgPz8gWzQsIDhdKTtcblx0cmV0dXJuIFtOdW1iZXIuaXNGaW5pdGUoYykgJiYgYyA+IDAgPyBjIDogYmFzZVswXSwgTnVtYmVyLmlzRmluaXRlKHIpICYmIHIgPiAwID8gciA6IGJhc2VbMV1dO1xufTtcbnZhciByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQgPSAoZ3JpZFN5c3RlbSwgY2xpZW50UG9pbnQsIGFyZ3MsIG1vZGUgPSBcImZsb29yXCIpID0+IHtcblx0aWYgKCFncmlkU3lzdGVtKSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCByZWN0ID0gZ3JpZFN5c3RlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRpZiAoIXJlY3QpIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IGxheW91dCA9IHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50KGdyaWRTeXN0ZW0sIGFyZ3M/LmxheW91dCk7XG5cdGNvbnN0IG9yaWVudCA9IG9yaWVudE9mKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBjcyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBwbCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdMZWZ0KSB8fCAwO1xuXHRjb25zdCBwdCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdUb3ApIHx8IDA7XG5cdGNvbnN0IHByID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1JpZ2h0KSB8fCAwO1xuXHRjb25zdCBwYiA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdCb3R0b20pIHx8IDA7XG5cdGNvbnN0IGNvbnRlbnRXID0gTWF0aC5tYXgoMSwgKHJlY3Qud2lkdGggfHwgZ3JpZFN5c3RlbS5jbGllbnRXaWR0aCB8fCAxKSAtIHBsIC0gcHIpO1xuXHRjb25zdCBjb250ZW50SCA9IE1hdGgubWF4KDEsIChyZWN0LmhlaWdodCB8fCBncmlkU3lzdGVtLmNsaWVudEhlaWdodCB8fCAxKSAtIHB0IC0gcGIpO1xuXHRjb25zdCBjc0Nvb3JkID0gWyhjbGllbnRQb2ludD8uWzBdIHx8IDApIC0gcmVjdC5sZWZ0IC0gcGwsIChjbGllbnRQb2ludD8uWzFdIHx8IDApIC0gcmVjdC50b3AgLSBwdF07XG5cdHJldHVybiByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwoY3NDb29yZCwgW2NvbnRlbnRXLCBjb250ZW50SF0sIGxheW91dCwgb3JpZW50LCB7XG5cdFx0bW9kZSxcblx0XHRyZWRpcmVjdDoge1xuXHRcdFx0aXRlbTogYXJncz8uaXRlbSxcblx0XHRcdGxpc3Q6IGFyZ3M/Lmxpc3QsXG5cdFx0XHRpdGVtczogYXJncz8uaXRlbXNcblx0XHR9XG5cdH0pO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL0FuaW1hdGlvbi50c1xudmFyIGFuaW1hdGVTaG93ID0gYXN5bmMgKHRhcmdldCkgPT4ge1xuXHRjb25zdCBhbmltYXRpb25Eb25lID0gKCkgPT4ge1xuXHRcdGlmICghdGFyZ2V0Py5oYXNBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpKSB7XG5cdFx0XHR0YXJnZXQ/LnJlbW92ZUF0dHJpYnV0ZT8uKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKTtcblx0XHRcdHRhcmdldD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcInUyLWFwcGVhclwiLCB7XG5cdFx0XHRcdGRldGFpbDoge30sXG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdH07XG5cdGlmICghdGFyZ2V0Py5oYXNBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpICYmIHRhcmdldD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcInUyLWJlZm9yZS1zaG93XCIsIHtcblx0XHRkZXRhaWw6IHt9LFxuXHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHR9KSkpIHtcblx0XHRpZiAoIW1hdGNoTWVkaWEoXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiKS5tYXRjaGVzICYmICF0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKSAmJiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtaW5zdGFudFwiKSAmJiB0YXJnZXQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikgPT0gbnVsbCkgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIiwgXCJcIik7XG5cdFx0aWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpICYmIHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSA9PSBudWxsKSB7XG5cdFx0XHRjb25zdCBhbmltYXRlID0gdGFyZ2V0LmFuaW1hdGUoW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogMCxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRkaXNwbGF5OiBcIm5vbmVcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogLjAxLFxuXHRcdFx0XHRcdFwiLS1vcGFjaXR5XCI6IDAsXG5cdFx0XHRcdFx0XCItLXNjYWxlXCI6IC44LFxuXHRcdFx0XHRcdGRpc3BsYXk6IFwibm9uZVwiLFxuXHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdFx0b2Zmc2V0OiAxLFxuXHRcdFx0XHRcdFwiLS1vcGFjaXR5XCI6IDEsXG5cdFx0XHRcdFx0XCItLXNjYWxlXCI6IDEsXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJyZXZlcnQtbGF5ZXJcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcInJldmVydC1sYXllclwiXG5cdFx0XHRcdH1cblx0XHRcdF0sIHtcblx0XHRcdFx0ZHVyYXRpb246IGlzTW9iaWxlKCkgPyAxMDAgOiA4MCxcblx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRkZWxheTogMFxuXHRcdFx0fSk7XG5cdFx0XHRsZXQgZG9uZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgZW5kQW5pbWF0aW9uID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoZG9uZSkgcmV0dXJuO1xuXHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRzPy5mb3JFYWNoPy4oKGV2ZW50KSA9PiBldmVudD8uKCkpO1xuXHRcdFx0XHRhbmltYXRlLmN1cnJlbnRUaW1lID0gMTtcblx0XHRcdFx0YW5pbWF0ZS5maW5pc2goKTtcblx0XHRcdFx0YW5pbWF0aW9uRG9uZT8uKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZXZlbnRzID0gYWRkRXZlbnRzKHRhcmdldCwge1xuXHRcdFx0XHRcInUyLWJlZm9yZS1oaWRlXCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFwidTItYmVmb3JlLXNob3dcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XVxuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBhbmltYXRlLmZpbmlzaGVkO1xuXHRcdFx0ZW5kQW5pbWF0aW9uPy4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgeyByZXNvbHZlLCByZWplY3QsIHByb21pc2UgfSA9IFByb21pc2Uud2l0aFJlc29sdmVycygpO1xuXHRcdFx0Y29uc3QgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpO1xuXHRcdFx0bGV0IGRvbmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGVuZEFuaW1hdGlvbiA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdGV2ZW50cz8uZm9yRWFjaD8uKChldmVudCkgPT4gZXZlbnQ/LigpKTtcblx0XHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKTtcblx0XHRcdFx0cmVzb2x2ZShwZXJmb3JtYW5jZS5ub3coKSk7XG5cdFx0XHRcdGFuaW1hdGlvbkRvbmU/LigpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGV2ZW50cyA9IGFkZEV2ZW50cyh0YXJnZXQsIHtcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtaGlkZVwiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRcInUyLWJlZm9yZS1zaG93XCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV1cblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgcHJvbWlzZTtcblx0XHRcdGVuZEFuaW1hdGlvbj8uKCk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGFuaW1hdGVIaWRlID0gYXN5bmMgKHRhcmdldCkgPT4ge1xuXHRjb25zdCBhbmltYXRpb25Eb25lID0gKCkgPT4ge1xuXHRcdGlmICh0YXJnZXQ/Lmhhc0F0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikpIHtcblx0XHRcdHRhcmdldD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpO1xuXHRcdFx0dGFyZ2V0Py5kaXNwYXRjaEV2ZW50Py4obmV3IEN1c3RvbUV2ZW50KFwidTItaGlkZGVuXCIsIHtcblx0XHRcdFx0ZGV0YWlsOiB7fSxcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fTtcblx0aWYgKHRhcmdldD8uaGFzQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSAmJiB0YXJnZXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJ1Mi1iZWZvcmUtaGlkZVwiLCB7XG5cdFx0ZGV0YWlsOiB7fSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpKSB7XG5cdFx0aWYgKCFtYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIikubWF0Y2hlcyAmJiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIikgJiYgIXRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWluc3RhbnRcIikpIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIsIFwiXCIpO1xuXHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKSkge1xuXHRcdFx0Y29uc3QgYW5pbWF0ZSA9IHRhcmdldC5hbmltYXRlKFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IDAsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJub25lXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IC45OSxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogMSxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRkaXNwbGF5OiBcIm5vbmVcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9XG5cdFx0XHRdLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMjAsXG5cdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0ZGVsYXk6IDBcblx0XHRcdH0pO1xuXHRcdFx0bGV0IGRvbmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGVuZEFuaW1hdGlvbiA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdGV2ZW50cz8uZm9yRWFjaD8uKChldmVudCkgPT4gZXZlbnQ/LigpKTtcblx0XHRcdFx0YW5pbWF0ZS5jdXJyZW50VGltZSA9IDE7XG5cdFx0XHRcdGFuaW1hdGUuZmluaXNoKCk7XG5cdFx0XHRcdGFuaW1hdGlvbkRvbmU/LigpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGV2ZW50cyA9IGFkZEV2ZW50cyh0YXJnZXQsIHsgXCJ1Mi1iZWZvcmUtc2hvd1wiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdH1dIH0pO1xuXHRcdFx0YXdhaXQgYW5pbWF0ZS5maW5pc2hlZDtcblx0XHRcdGVuZEFuaW1hdGlvbj8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHsgcmVzb2x2ZSwgcmVqZWN0LCBwcm9taXNlIH0gPSBQcm9taXNlLndpdGhSZXNvbHZlcnMoKTtcblx0XHRcdGNvbnN0IHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNvbHZlKTtcblx0XHRcdGxldCBkb25lID0gZmFsc2U7XG5cdFx0XHRjb25zdCBlbmRBbmltYXRpb24gPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChkb25lKSByZXR1cm47XG5cdFx0XHRcdGRvbmUgPSB0cnVlO1xuXHRcdFx0XHRldmVudHM/LmZvckVhY2g/LigoZXZlbnQpID0+IGV2ZW50Py4oKSk7XG5cdFx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSk7XG5cdFx0XHRcdHJlc29sdmUocGVyZm9ybWFuY2Uubm93KCkpO1xuXHRcdFx0XHRhbmltYXRpb25Eb25lPy4oKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBldmVudHMgPSBhZGRFdmVudHModGFyZ2V0LCB7XG5cdFx0XHRcdFwidTItYmVmb3JlLWhpZGVcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtc2hvd1wiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dXG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IHByb21pc2U7XG5cdFx0XHRlbmRBbmltYXRpb24/LigpO1xuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL09ic2VydmVyLnRzXG52YXIgb25Cb3JkZXJPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkJvcmRlck9ic2VydmVcIik7XG52YXIgb25Cb3JkZXJPYnNlcnZlJDEgPSBnbG9iYWxUaGlzW29uQm9yZGVyT2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9uQ29udGVudE9ic2VydmVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQ29udGVudE9ic2VydmVcIik7XG52YXIgb25Db250ZW50T2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkNvbnRlbnRPYnNlcnZlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdW53cmFwRnJvbVF1ZXJ5ID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5jdXJyZW50ID09IFwib2JqZWN0XCIpIGVsZW1lbnQgPSBlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQ/LmN1cnJlbnQgPz8gKHR5cGVvZiBlbGVtZW50Py5zZWxmID09IFwib2JqZWN0XCIgPyBlbGVtZW50Py5zZWxmIDogbnVsbCkgPz8gZWxlbWVudDtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIG5vcm1hbGl6ZVNlbGVjdG9yID0gKHNlbGVjdG9yLCBmYWxsYmFjayA9IFwiKlwiKSA9PiB7XG5cdGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxsYmFjaztcblx0cmV0dXJuIHNlbGVjdG9yLnRyaW0oKSB8fCBmYWxsYmFjaztcbn07XG52YXIgc2FmZVF1ZXJ5U2VsZWN0b3JBbGwgPSAoZWwsIHNlbGVjdG9yKSA9PiB7XG5cdGlmICghZWwgfHwgdHlwZW9mIGVsLnF1ZXJ5U2VsZWN0b3JBbGwgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFtdO1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3RvciwgXCJcIik7XG5cdGlmICghc2VsKSByZXR1cm4gW107XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbChzZWwpIHx8IFtdKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59O1xudmFyIHNhZmVNYXRjaGVzID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuXHRpZiAoIWVsIHx8IHR5cGVvZiBlbC5tYXRjaGVzICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IsIFwiXCIpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGZhbHNlO1xuXHR0cnkge1xuXHRcdHJldHVybiAhIWVsLm1hdGNoZXMoc2VsKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIG9ic2VydmVDb250ZW50Qm94ID0gKGVsZW1lbnQsIGNiKSA9PiB7XG5cdGlmICghb25Db250ZW50T2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihjb250ZW50Qm94U2l6ZSwgb2JzZXJ2ZXIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYj8uKHtcblx0XHRcdGlubGluZVNpemU6IGVsZW1lbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRibG9ja1NpemU6IGVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdG9uQ29udGVudE9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxuXHRvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5wdXNoPy4oY2IpO1xuXHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUJvcmRlckJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQm9yZGVyT2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5ib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGJvcmRlckJveFNpemUgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoYm9yZGVyQm94U2l6ZSkgY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYj8uKGJvcmRlckJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50Lm9mZnNldEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkJvcmRlck9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiYm9yZGVyLWJveFwiIH0pO1xuXHR9XG5cdG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LmluZGV4T2YoY2IpIHx8IC0xLCAxKSB9O1xufTtcbnZhciBvYnNlcnZlQXR0cmlidXRlID0gKGVsZW1lbnQsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5zZWxlY3RvciA9PSBcInN0cmluZ1wiKSByZXR1cm4gb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IoZWxlbWVudCwgZWxlbWVudD8uc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldCgoYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXSkubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XVxuXHR9KTtcblx0YXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IGNiKHtcblx0XHR0YXJnZXQ6IGVsZW1lbnQsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdG9sZFZhbHVlOiBlbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSk7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IgPSAoZWxlbWVudCwgc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldChbLi4uYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXV0ubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGFkZGVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0Y29uc3QgcmVtb3ZlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0YWRkZWROb2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0XHRyZW1vdmVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0XHRbLi4ubmV3IFNldChhZGRlZE5vZGVzKV0uZmlsdGVyKChlbCkgPT4gc2FmZU1hdGNoZXMoZWwsIHNlbCkpPy5tYXA/LigodGFyZ2V0KSA9PiB7XG5cdFx0XHRcdGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG5cdFx0XHRcdFx0Y2Ioe1xuXHRcdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdFx0XHRcdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAoc2FmZU1hdGNoZXMobXV0YXRpb24udGFyZ2V0LCBzZWwpICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgJiYgYXR0cmlidXRlTGlzdC5oYXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIGNiKG11dGF0aW9uLCBvYnNlcnZlcik7XG5cdH0pO1xuXHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLmF0dHJpYnV0ZUxpc3RdLFxuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdGNoYXJhY3RlckRhdGE6IHRydWVcblx0fSk7XG5cdHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQsIHNlbCkubWFwKCh0YXJnZXQpID0+IGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSkpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yID0gXCIqXCIsIGNiID0gKG11dCwgb2JzKSA9PiB7fSkgPT4ge1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvcik7XG5cdGNvbnN0IHVud3JhcE5vZGVzQnlTZWxlY3RvciA9IChub2RlcykgPT4ge1xuXHRcdGNvbnN0ICRub2RlcyA9IEFycmF5LmZyb20obm9kZXMgfHwgW10pIHx8IFtdO1xuXHRcdCRub2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdHJldHVybiBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KCRub2RlcykudmFsdWVzKCkpXS5maWx0ZXIoKGVsKSA9PiBzYWZlTWF0Y2hlcyhlbCwgc2VsKSk7XG5cdH07XG5cdGxldCBvYlJlZiA9IG51bGw7XG5cdGNvbnN0IGhhbmRsZU11dGF0aW9uID0gKG11dGF0aW9uKSA9PiB7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBvYlJlZj8uZGVyZWY/LigpO1xuXHRcdGNvbnN0IGFkZGVkTm9kZXMgPSB1bndyYXBOb2Rlc0J5U2VsZWN0b3IobXV0YXRpb24uYWRkZWROb2Rlcyk7XG5cdFx0Y29uc3QgcmVtb3ZlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLnJlbW92ZWROb2Rlcyk7XG5cdFx0aWYgKGFkZGVkTm9kZXMubGVuZ3RoID4gMCB8fCByZW1vdmVkTm9kZXMubGVuZ3RoID4gMCkgY2I/Lih7XG5cdFx0XHR0eXBlOiBtdXRhdGlvbi50eXBlLFxuXHRcdFx0dGFyZ2V0OiBtdXRhdGlvbi50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lLFxuXHRcdFx0YXR0cmlidXRlTmFtZXNwYWNlOiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lc3BhY2UsXG5cdFx0XHRuZXh0U2libGluZzogbXV0YXRpb24ubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogbXV0YXRpb24ub2xkVmFsdWUsXG5cdFx0XHRwcmV2aW91c1NpYmxpbmc6IG11dGF0aW9uLnByZXZpb3VzU2libGluZyxcblx0XHRcdGFkZGVkTm9kZXMsXG5cdFx0XHRyZW1vdmVkTm9kZXNcblx0XHR9LCBvYnNlcnZlcik7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUNvbWUgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVPdXRDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlRm9jdXNDbGljayA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGZhY3RvcnMgPSB7XG5cdFx0cGFzc2l2ZTogdHJ1ZSxcblx0XHRjYXB0dXJlOiBmYWxzZVxuXHR9O1xuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtd2l0aGluXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1cy12aXNpYmxlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSBoYW5kbGVNdXRhdGlvbihtdXRhdGlvbik7XG5cdH0pO1xuXHRvYlJlZiA9IG5ldyBXZWFrUmVmKG9ic2VydmVyKTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWVcblx0fSk7XG5cdGNvbnN0IHNlbGVjdGVkID0gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCwgc2VsKTtcblx0aWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdGFkZGVkTm9kZXM6IHNlbGVjdGVkLFxuXHRcdHJlbW92ZWROb2RlczogW11cblx0fSwgb2JzZXJ2ZXIpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvQXBwZWFyLnRzXG52YXIgaW5pdFZpc2liaWxpdHkgPSBhc3luYyAoUk9PVCA9IGRvY3VtZW50LmJvZHkpID0+IHtcblx0b2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IoUk9PVCwgXCIqXCIsIFwiZGF0YS1oaWRkZW5cIiwgKG11dGF0aW9uLCBvYnNlcnZlcikgPT4ge1xuXHRcdGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09IFwiZGF0YS1oaWRkZW5cIikge1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0O1xuXHRcdFx0aWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhpZGRlblwiKSAhPT0gbXV0YXRpb24ub2xkVmFsdWUpIFByb21pc2U/LnRyeT8uKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhpZGRlblwiKSAhPSBudWxsID8gYW5pbWF0ZUhpZGUgOiBhbmltYXRlU2hvdywgdGFyZ2V0LCBvYnNlcnZlcik/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvU2hhcGUudHNcbnZhciBXYXZ5U2hhcGVkQ2lyY2xlID0gKHN0ZXBzID0gMTAwLCBhbXBsaXR1ZGUgPSAuMDUsIGZyZXEgPSA4KSA9PiB7XG5cdGNvbnN0IHBvaW50cyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzOyBpKyspIHBvaW50cy5wdXNoKGkgLyBzdGVwcyk7XG5cdGNvbnN0IGFuZ2xlID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoJHtzdGVwfXJhZCAqIHBpICogMilgO1xuXHR9O1xuXHRjb25zdCB2YXJpYW50ID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoY2FsYyhjb3MoY2FsYyh2YXIoLS1jbGlwLWZyZXEsIDgpICogJHthbmdsZShzdGVwKX0pKSAqIDAuNSArIDAuNSkgKiB2YXIoLS1jbGlwLWFtcGxpdHVkZSwgMCkpYDtcblx0fTtcblx0Y29uc3QgZnVuYyA9IChzdGVwKSA9PiBbYGNhbGMoY2FsYygwLjUgKyBjYWxjKGNvcygke2FuZ2xlKHN0ZXApfSkgKiBjYWxjKDAuNSAtICR7dmFyaWFudChzdGVwKX0pKSkgKiB2YXIoLS1pY29uLXNpemUsIDEwMCUpKWAsIGBjYWxjKGNhbGMoMC41ICsgY2FsYyhzaW4oJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgXTtcblx0cmV0dXJuIHtcblx0XHRcIi0tY2xpcC1hbXBsaXR1ZGVcIjogYW1wbGl0dWRlLFxuXHRcdFwiLS1jbGlwLWZyZXFcIjogZnJlcSxcblx0XHRcIi0tY2xpcC1wYXRoXCI6IGBwb2x5Z29uKCR7cG9pbnRzLm1hcCgoc3RlcCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZ1bmMoc3RlcCkuam9pbihcIiBcIik7XG5cdFx0fSkuam9pbihcIiwgXCIpfSlgXG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vU3R5bGUudHNcbnZhciBPV05FUiA9IFwiRE9NXCI7XG52YXIgc3R5bGVFbGVtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikgOiBudWxsO1xuaWYgKHN0eWxlRWxlbWVudCkge1xuXHR0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKT8uYXBwZW5kQ2hpbGQ/LihzdHlsZUVsZW1lbnQpO1xuXHRzdHlsZUVsZW1lbnQuZGF0YXNldC5vd25lciA9IE9XTkVSO1xufVxudmFyIHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXQgPSAoKSA9PiB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgZ2xvYmFsVGhpcy5DU1NTdHlsZVNoZWV0ID09PSBcImZ1bmN0aW9uXCI7XG52YXIgY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50ID0gKGNzcykgPT4gdHlwZW9mIGNzcyA9PT0gXCJzdHJpbmdcIiAmJiAvQGltcG9ydFxcYi9pLnRlc3QoY3NzKTtcbmlmIChzdHlsZUVsZW1lbnQpIHtcblx0dHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oc3R5bGVFbGVtZW50KTtcblx0c3R5bGVFbGVtZW50LmRhdGFzZXQub3duZXIgPSBPV05FUjtcbn1cbnZhciBzZXRTdHlsZVVSTCA9IChiYXNlLCB1cmwsIGxheWVyID0gXCJcIikgPT4ge1xuXHRiYXNlWzBdW2Jhc2VbMV1dID0gYmFzZVsxXSA9PSBcImlubmVySFRNTFwiID8gYEBpbXBvcnQgdXJsKFwiJHt1cmx9XCIpICR7bGF5ZXIgJiYgdHlwZW9mIGxheWVyID09IFwic3RyaW5nXCIgPyBgbGF5ZXIoJHtsYXllcn0pYCA6IFwiXCJ9O2AgOiB1cmw7XG59O1xudmFyIHNldFN0eWxlUnVsZXMgPSAoY2xhc3NlcykgPT4ge1xuXHRyZXR1cm4gY2xhc3Nlcz8ubWFwPy4oKGFyZ3MpID0+IHNldFN0eWxlUnVsZSguLi5hcmdzKSk7XG59O1xudmFyIGdldFN0eWxlTGF5ZXIgPSAobGF5ZXJOYW1lLCBzaGVldCkgPT4ge1xuXHRzaGVldCB8fD0gc3R5bGVFbGVtZW50Py5zaGVldDtcblx0bGV0IGxheWVyUnVsZUluZGV4ID0gQXJyYXkuZnJvbShzaGVldD8uY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocnVsZSkgPT4gcnVsZSBpbnN0YW5jZW9mIENTU0xheWVyQmxvY2tSdWxlICYmIHJ1bGU/Lm5hbWUgPT09IGxheWVyTmFtZSk7XG5cdGxldCBsYXllclJ1bGU7XG5cdGlmIChsYXllclJ1bGVJbmRleCA9PT0gLTEgJiYgc2hlZXQpIGxheWVyUnVsZSA9IHNoZWV0Py5jc3NSdWxlcz8uW2xheWVyUnVsZUluZGV4ID0gc2hlZXQuaW5zZXJ0UnVsZShgQGxheWVyICR7bGF5ZXJOYW1lfSB7fWApXTtcblx0ZWxzZSBsYXllclJ1bGUgPSBzaGVldD8uY3NzUnVsZXM/LltsYXllclJ1bGVJbmRleF07XG5cdHJldHVybiBsYXllclJ1bGU7XG59O1xudmFyIHN0eWxlSWRDb3VudGVyID0gMDtcbnZhciBpc1NoYWRvd1Jvb3QgPSAodmFsdWUpID0+IHR5cGVvZiBTaGFkb3dSb290ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbnZhciBpc0RvY3VtZW50ID0gKHZhbHVlKSA9PiB0eXBlb2YgRG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBEb2N1bWVudDtcbnZhciBpc0VsZW1lbnQkMSA9ICh2YWx1ZSkgPT4gdHlwZW9mIEVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50O1xudmFyIGVzY2FwZUNTU0lkZW50aWZpZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIENTUy5lc2NhcGUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIENTUy5lc2NhcGUodmFsdWUpO1xuXHRyZXR1cm4gQXJyYXkuZnJvbSh2YWx1ZSkubWFwKChjaGFyKSA9PiBgXFxcXCR7Y2hhci5jb2RlUG9pbnRBdCgwKS50b1N0cmluZygxNil9IGApLmpvaW4oXCJcIik7XG59O1xudmFyIGNyZWF0ZVN0eWxlSWQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgY3J5cHRvICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjcnlwdG8ucmFuZG9tVVVJRCA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0cmV0dXJuIGB1eC0ke0RhdGUubm93KCkudG9TdHJpbmcoMzYpfS0keygrK3N0eWxlSWRDb3VudGVyKS50b1N0cmluZygzNil9YDtcbn07XG52YXIgam9pblNjb3BlZFNlbGVjdG9yID0gKHNjb3BlLCBzZWxlY3RvcikgPT4ge1xuXHRzZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKTtcblx0aWYgKCFzY29wZSkgcmV0dXJuIHNlbGVjdG9yO1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gc2NvcGU7XG5cdGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKFwiOjpcIikpIHJldHVybiBgJHtzY29wZX0ke3NlbGVjdG9yfWA7XG5cdHJldHVybiBgJHtzY29wZX0gJHtzZWxlY3Rvcn1gO1xufTtcbnZhciBmaW5kU3R5bGVSdWxlID0gKHNoZWV0LCBmdWxsU2VsZWN0b3IsIHNjb3BlLCBzZWxlY3RvcikgPT4ge1xuXHRjb25zdCBydWxlcyA9IEFycmF5LmZyb20oc2hlZXQ/LmNzc1J1bGVzIHx8IFtdKTtcblx0Y29uc3QgZXhwZWN0ZWQgPSBmdWxsU2VsZWN0b3IudHJpbSgpO1xuXHRjb25zdCByZXF1ZXN0ZWQgPSBzZWxlY3Rvci50cmltKCk7XG5cdHJldHVybiBydWxlcy5maW5kSW5kZXgoKHJ1bGUpID0+IHtcblx0XHRpZiAoIShydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlKSkgcmV0dXJuIGZhbHNlO1xuXHRcdGNvbnN0IGFjdHVhbCA9IHJ1bGUuc2VsZWN0b3JUZXh0Py50cmltPy4oKSA/PyBcIlwiO1xuXHRcdGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSByZXR1cm4gdHJ1ZTtcblx0XHRpZiAocmVxdWVzdGVkICYmIGFjdHVhbC5lbmRzV2l0aChyZXF1ZXN0ZWQpKSByZXR1cm4gYWN0dWFsLnNsaWNlKDAsIGFjdHVhbC5sZW5ndGggLSByZXF1ZXN0ZWQubGVuZ3RoKS50cmltKCkgPT09IHNjb3BlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59O1xudmFyIGdldFN0eWxlUnVsZSA9IChzZWxlY3Rvciwgc2hlZXQsIGxheWVyTmFtZSA9IFwidXgtcXVlcnlcIiwgYmFzaXMgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBpc1NoYWRvd1Jvb3QoYmFzaXMpIHx8IGlzRG9jdW1lbnQoYmFzaXMpID8gYmFzaXMgOiBiYXNpcz8uZ2V0Um9vdE5vZGU/LigpID8/ICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xuXHRjb25zdCBiYXNpc0VsZW1lbnQgPSBpc0VsZW1lbnQkMShiYXNpcykgPyBiYXNpcyA6IG51bGw7XG5cdGxldCBzY29wZSA9IFwiXCI7XG5cdGlmIChiYXNpc0VsZW1lbnQ/LmlkKSBzY29wZSA9IGAjJHtlc2NhcGVDU1NJZGVudGlmaWVyKGJhc2lzRWxlbWVudC5pZCl9YDtcblx0ZWxzZSBpZiAoYmFzaXNFbGVtZW50KSB7XG5cdFx0bGV0IHN0eWxlSWQgPSBiYXNpc0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZS1pZFwiKTtcblx0XHRpZiAoIXN0eWxlSWQpIHtcblx0XHRcdHN0eWxlSWQgPSBjcmVhdGVTdHlsZUlkKCk7XG5cdFx0XHRiYXNpc0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZS1pZFwiLCBzdHlsZUlkKTtcblx0XHR9XG5cdFx0c2NvcGUgPSBgW2RhdGEtc3R5bGUtaWQ9XCIke2VzY2FwZUNTU0lkZW50aWZpZXIoc3R5bGVJZCl9XCJdYDtcblx0fSBlbHNlIGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkpIHNjb3BlID0gXCI6aG9zdFwiO1xuXHRlbHNlIGlmIChpc0RvY3VtZW50KHJvb3QpKSBzY29wZSA9IFwiOnJvb3RcIjtcblx0bGV0IHN0eWxlRWxlbWVudCA9IG51bGw7XG5cdGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLXV4LXF1ZXJ5XVwiKTtcblx0XHRpZiAoIXN0eWxlRWxlbWVudCAmJiB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0XHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXV4LXF1ZXJ5XCIsIFwiXCIpO1xuXHRcdFx0cm9vdC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0fSBlbHNlIHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudEdsb2JhbCgpO1xuXHRzaGVldCB8fD0gc3R5bGVFbGVtZW50Py5zaGVldDtcblx0aWYgKCFzaGVldCkgcmV0dXJuO1xuXHRpZiAobGF5ZXJOYW1lKSByZXR1cm4gZ2V0U3R5bGVSdWxlKHNlbGVjdG9yLCBnZXRTdHlsZUxheWVyKGxheWVyTmFtZSwgc2hlZXQpLCBudWxsLCBiYXNpcyk7XG5cdGNvbnN0IGZ1bGxTZWxlY3RvciA9IGpvaW5TY29wZWRTZWxlY3RvcihzY29wZSwgc2VsZWN0b3IpO1xuXHRsZXQgcnVsZUlkID0gZmluZFN0eWxlUnVsZShzaGVldCwgZnVsbFNlbGVjdG9yLCBzY29wZSwgc2VsZWN0b3IpO1xuXHRpZiAocnVsZUlkID09PSAtMSkgcnVsZUlkID0gc2hlZXQuaW5zZXJ0UnVsZShgJHtmdWxsU2VsZWN0b3J9IHt9YCk7XG5cdHJldHVybiBzaGVldC5jc3NSdWxlcz8uW3J1bGVJZF07XG59O1xuZnVuY3Rpb24gc3R5bGVFbGVtZW50R2xvYmFsKCkge1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50ID8/IG51bGw7XG59XG52YXIgcHJvbWlzZU9yRGlyZWN0ID0gKHByb21pc2UsIGNiKSA9PiB7XG5cdGlmICh0eXBlb2YgcHJvbWlzZT8udGhlbiA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBwcm9taXNlPy50aGVuPy4oY2IpO1xuXHRyZXR1cm4gY2IocHJvbWlzZSk7XG59O1xudmFyIGJsb2JVUkxNYXBTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGJsb2JVUkxNYXBcIik7XG52YXIgYmxvYlVSTE1hcCA9IGdsb2JhbFRoaXNbYmxvYlVSTE1hcFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGNhY2hlTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BjYWNoZU1hcFwiKTtcbnZhciBjYWNoZU1hcCA9IGdsb2JhbFRoaXNbY2FjaGVNYXBTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGZldGNoQW5kQ2FjaGUgPSAodXJsKSA9PiB7XG5cdGlmICghdXJsKSByZXR1cm4gbnVsbDtcblx0aWYgKGNhY2hlTWFwLmhhcyh1cmwpKSByZXR1cm4gY2FjaGVNYXAuZ2V0KHVybCk7XG5cdGlmICh1cmwgaW5zdGFuY2VvZiBCbG9iIHx8IHVybCBpbnN0YW5jZW9mIEZpbGUpIHtcblx0XHRpZiAoYmxvYlVSTE1hcC5oYXModXJsKSkgcmV0dXJuIGJsb2JVUkxNYXAuZ2V0KHVybCk7XG5cdFx0Y29uc3QgYnVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwodXJsKTtcblx0XHRibG9iVVJMTWFwLnNldCh1cmwsIGJ1cmwpO1xuXHRcdGNhY2hlTWFwLnNldChidXJsLCBidXJsKTtcblx0XHRyZXR1cm4gYnVybDtcblx0fVxuXHRpZiAoVVJMLmNhblBhcnNlKHVybCkgfHwgdXJsPy50cmltPy4oKT8uc3RhcnRzV2l0aD8uKFwiLi9cIikpIHtcblx0XHRjb25zdCBwcm9taXNlZCA9IGZldGNoKHVybD8ucmVwbGFjZT8uKFwiP3VybFwiLCBcIj9yYXdcIiksIHtcblx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRtb2RlOiBcInNhbWUtb3JpZ2luXCIsXG5cdFx0XHRwcmlvcml0eTogXCJoaWdoXCJcblx0XHR9KT8udGhlbj8uKGFzeW5jIChyZXMpID0+IHtcblx0XHRcdGNvbnN0IGJsb2IgPSBhd2FpdCByZXMuYmxvYigpO1xuXHRcdFx0Y29uc3QgYnVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0XHRibG9iVVJMTWFwLnNldChibG9iLCBidXJsKTtcblx0XHRcdGNhY2hlTWFwLnNldCh1cmwsIGJ1cmwpO1xuXHRcdFx0Y2FjaGVNYXAuc2V0KGJ1cmwsIGJ1cmwpO1xuXHRcdFx0cmV0dXJuIGJ1cmw7XG5cdFx0fSk7XG5cdFx0Y2FjaGVNYXAuc2V0KHVybCwgcHJvbWlzZWQpO1xuXHRcdHJldHVybiBwcm9taXNlZDtcblx0fVxuXHRpZiAodHlwZW9mIHVybCA9PSBcInN0cmluZ1wiKSB7XG5cdFx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKFt1cmxdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRibG9iVVJMTWFwLnNldChibG9iLCBidXJsKTtcblx0XHRjYWNoZU1hcC5zZXQoYnVybCwgYnVybCk7XG5cdFx0cmV0dXJuIGJ1cmw7XG5cdH1cblx0cmV0dXJuIHVybDtcbn07XG52YXIgY2FjaGVDb250ZW50TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBjYWNoZUJsb2JDb250ZW50TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZmV0Y2hBc0lubGluZSA9ICh1cmwpID0+IHtcblx0aWYgKCF1cmwpIHJldHVybiBcIlwiO1xuXHRpZiAoY2FjaGVDb250ZW50TWFwLmhhcyh1cmwpKSByZXR1cm4gY2FjaGVDb250ZW50TWFwLmdldCh1cmwpID8/IFwiXCI7XG5cdGlmICh1cmwgaW5zdGFuY2VvZiBCbG9iIHx8IHVybCBpbnN0YW5jZW9mIEZpbGUpIHtcblx0XHRpZiAoY2FjaGVCbG9iQ29udGVudE1hcC5oYXModXJsKSkgcmV0dXJuIGNhY2hlQmxvYkNvbnRlbnRNYXAuZ2V0KHVybCkgPz8gXCJcIjtcblx0XHRjb25zdCBwcm9taXNlZCA9IHVybD8udGV4dD8uKCk/LnRoZW4/LigodGV4dCkgPT4ge1xuXHRcdFx0Y2FjaGVCbG9iQ29udGVudE1hcC5zZXQodXJsLCB0ZXh0KTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH0pO1xuXHRcdGNhY2hlQmxvYkNvbnRlbnRNYXAuc2V0KHVybCwgcHJvbWlzZWQpO1xuXHRcdHJldHVybiBwcm9taXNlZDtcblx0fVxuXHRpZiAoVVJMLmNhblBhcnNlKHVybCkgfHwgdXJsPy50cmltPy4oKT8uc3RhcnRzV2l0aD8uKFwiLi9cIikpIHtcblx0XHRjb25zdCBwcm9taXNlZCA9IGZldGNoKHVybD8ucmVwbGFjZT8uKFwiP3VybFwiLCBcIj9yYXdcIiksIHtcblx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRtb2RlOiBcInNhbWUtb3JpZ2luXCIsXG5cdFx0XHRwcmlvcml0eTogXCJoaWdoXCJcblx0XHR9KT8udGhlbj8uKGFzeW5jIChyZXMpID0+IHtcblx0XHRcdGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuXHRcdFx0Y2FjaGVDb250ZW50TWFwLnNldCh1cmwsIHRleHQpO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fSk7XG5cdFx0Y2FjaGVDb250ZW50TWFwLnNldCh1cmwsIHByb21pc2VkKTtcblx0XHRyZXR1cm4gcHJvbWlzZWQ7XG5cdH1cblx0aWYgKHR5cGVvZiB1cmwgPT0gXCJzdHJpbmdcIikge1xuXHRcdGNhY2hlQ29udGVudE1hcC5zZXQodXJsLCB1cmwpO1xuXHRcdHJldHVybiB1cmw7XG5cdH1cblx0cmV0dXJuIHVybDtcbn07XG52YXIgYWRvcHRlZFNlbGVjdG9yTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BhZG9wdGVkU2VsZWN0b3JNYXBcIik7XG52YXIgYWRvcHRlZFNlbGVjdG9yTWFwID0gZ2xvYmFsVGhpc1thZG9wdGVkU2VsZWN0b3JNYXBTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwXCIpO1xudmFyIGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcCA9IGdsb2JhbFRoaXNbYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYWRvcHRlZExheWVyTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BhZG9wdGVkTGF5ZXJNYXBcIik7XG52YXIgYWRvcHRlZExheWVyTWFwID0gZ2xvYmFsVGhpc1thZG9wdGVkTGF5ZXJNYXBTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGFkb3B0ZWRTaGFkb3dMYXllck1hcFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYWRvcHRlZFNoYWRvd0xheWVyTWFwXCIpO1xudmFyIGFkb3B0ZWRTaGFkb3dMYXllck1hcCA9IGdsb2JhbFRoaXNbYWRvcHRlZFNoYWRvd0xheWVyTWFwU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0QWRvcHRlZFN0eWxlUnVsZSA9IChzZWxlY3RvciwgbGF5ZXJOYW1lID0gXCJ1eC1xdWVyeVwiLCBiYXNpcyA9IG51bGwpID0+IHtcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIG51bGw7XG5cdGlmICghc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCgpKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgcm9vdCA9IGJhc2lzIGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IGJhc2lzIDogYmFzaXM/LmdldFJvb3ROb2RlID8gYmFzaXMuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSA6IG51bGw7XG5cdGNvbnN0IGlzU2hhZG93Um9vdCA9IHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xuXHRjb25zdCB0YXJnZXRBZG9wdGVkU2hlZXRzID0gaXNTaGFkb3dSb290ID8gcm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgOiB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyA6IG51bGw7XG5cdGlmICghdGFyZ2V0QWRvcHRlZFNoZWV0cykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHNlbGVjdG9yS2V5ID0gYCR7bGF5ZXJOYW1lIHx8IFwiXCJ9OiR7c2VsZWN0b3J9YDtcblx0bGV0IHNoZWV0O1xuXHRpZiAoaXNTaGFkb3dSb290KSB7XG5cdFx0bGV0IHNoYWRvd01hcCA9IGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcC5nZXQocm9vdCk7XG5cdFx0aWYgKCFzaGFkb3dNYXApIHtcblx0XHRcdHNoYWRvd01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAuc2V0KHJvb3QsIHNoYWRvd01hcCk7XG5cdFx0fVxuXHRcdHNoZWV0ID0gc2hhZG93TWFwLmdldChzZWxlY3RvcktleSk7XG5cdFx0aWYgKCFzaGVldCkge1xuXHRcdFx0c2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdFx0c2hhZG93TWFwLnNldChzZWxlY3RvcktleSwgc2hlZXQpO1xuXHRcdFx0aWYgKCF0YXJnZXRBZG9wdGVkU2hlZXRzLmluY2x1ZGVzKHNoZWV0KSkgdGFyZ2V0QWRvcHRlZFNoZWV0cy5wdXNoKHNoZWV0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0c2hlZXQgPSBhZG9wdGVkU2VsZWN0b3JNYXAuZ2V0KHNlbGVjdG9yS2V5KTtcblx0XHRpZiAoIXNoZWV0KSB7XG5cdFx0XHRzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0XHRhZG9wdGVkU2VsZWN0b3JNYXAuc2V0KHNlbGVjdG9yS2V5LCBzaGVldCk7XG5cdFx0XHRpZiAoIXRhcmdldEFkb3B0ZWRTaGVldHMuaW5jbHVkZXMoc2hlZXQpKSB0YXJnZXRBZG9wdGVkU2hlZXRzLnB1c2goc2hlZXQpO1xuXHRcdH1cblx0fVxuXHRpZiAobGF5ZXJOYW1lKSB7XG5cdFx0bGV0IGxheWVyUnVsZTtcblx0XHRpZiAoaXNTaGFkb3dSb290KSB7XG5cdFx0XHRsZXQgc2hhZG93TGF5ZXJNYXAgPSBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuZ2V0KHJvb3QpO1xuXHRcdFx0aWYgKCFzaGFkb3dMYXllck1hcCkge1xuXHRcdFx0XHRzaGFkb3dMYXllck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRcdGFkb3B0ZWRTaGFkb3dMYXllck1hcC5zZXQocm9vdCwgc2hhZG93TGF5ZXJNYXApO1xuXHRcdFx0fVxuXHRcdFx0bGF5ZXJSdWxlID0gc2hhZG93TGF5ZXJNYXAuZ2V0KGxheWVyTmFtZSk7XG5cdFx0fSBlbHNlIGxheWVyUnVsZSA9IGFkb3B0ZWRMYXllck1hcC5nZXQobGF5ZXJOYW1lKTtcblx0XHRpZiAoIWxheWVyUnVsZSkge1xuXHRcdFx0Y29uc3QgcnVsZXMgPSBBcnJheS5mcm9tKHNoZWV0LmNzc1J1bGVzIHx8IFtdKTtcblx0XHRcdGNvbnN0IGxheWVySW5kZXggPSBydWxlcy5maW5kSW5kZXgoKHJ1bGUpID0+IHJ1bGUgaW5zdGFuY2VvZiBDU1NMYXllckJsb2NrUnVsZSAmJiBydWxlLm5hbWUgPT09IGxheWVyTmFtZSk7XG5cdFx0XHRpZiAobGF5ZXJJbmRleCA9PT0gLTEpIHRyeSB7XG5cdFx0XHRcdHNoZWV0Lmluc2VydFJ1bGUoYEBsYXllciAke2xheWVyTmFtZX0ge31gLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuXHRcdFx0XHRjb25zdCBuZXdSdWxlID0gc2hlZXQuY3NzUnVsZXNbc2hlZXQuY3NzUnVsZXMubGVuZ3RoIC0gMV07XG5cdFx0XHRcdGlmIChuZXdSdWxlIGluc3RhbmNlb2YgQ1NTTGF5ZXJCbG9ja1J1bGUpIGxheWVyUnVsZSA9IG5ld1J1bGU7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGxheWVyUnVsZSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHRcdGVsc2UgbGF5ZXJSdWxlID0gcnVsZXNbbGF5ZXJJbmRleF07XG5cdFx0XHRpZiAobGF5ZXJSdWxlKSB7XG5cdFx0XHRcdGlmIChpc1NoYWRvd1Jvb3QpIHtcblx0XHRcdFx0XHRsZXQgc2hhZG93TGF5ZXJNYXAgPSBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuZ2V0KHJvb3QpO1xuXHRcdFx0XHRcdGlmICghc2hhZG93TGF5ZXJNYXApIHtcblx0XHRcdFx0XHRcdHNoYWRvd0xheWVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdFx0XHRcdGFkb3B0ZWRTaGFkb3dMYXllck1hcC5zZXQocm9vdCwgc2hhZG93TGF5ZXJNYXApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzaGFkb3dMYXllck1hcC5zZXQobGF5ZXJOYW1lLCBsYXllclJ1bGUpO1xuXHRcdFx0XHR9IGVsc2UgYWRvcHRlZExheWVyTWFwLnNldChsYXllck5hbWUsIGxheWVyUnVsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChsYXllclJ1bGUpIHtcblx0XHRcdGxldCBsYXllclJ1bGVJbmRleCA9IEFycmF5LmZyb20obGF5ZXJSdWxlLmNzc1J1bGVzIHx8IFtdKS5maW5kSW5kZXgoKHIpID0+IHIgaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUgJiYgci5zZWxlY3RvclRleHQ/LnRyaW0/LigpID09PSBzZWxlY3Rvcj8udHJpbT8uKCkpO1xuXHRcdFx0aWYgKGxheWVyUnVsZUluZGV4ID09PSAtMSkgdHJ5IHtcblx0XHRcdFx0bGF5ZXJSdWxlSW5kZXggPSBsYXllclJ1bGUuaW5zZXJ0UnVsZShgJHtzZWxlY3Rvcn0ge31gLCBsYXllclJ1bGUuY3NzUnVsZXMubGVuZ3RoKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGF5ZXJSdWxlLmNzc1J1bGVzW2xheWVyUnVsZUluZGV4XTtcblx0XHR9XG5cdH1cblx0bGV0IHJ1bGVJbmRleCA9IEFycmF5LmZyb20oc2hlZXQuY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocnVsZSkgPT4gcnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSAmJiBydWxlLnNlbGVjdG9yVGV4dD8udHJpbT8uKCkgPT09IHNlbGVjdG9yPy50cmltPy4oKSk7XG5cdGlmIChydWxlSW5kZXggPT09IC0xKSB0cnkge1xuXHRcdHJ1bGVJbmRleCA9IHNoZWV0Lmluc2VydFJ1bGUoYCR7c2VsZWN0b3J9IHt9YCwgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGNvbnN0IHJ1bGUgPSBzaGVldC5jc3NSdWxlc1tydWxlSW5kZXhdO1xuXHRpZiAocnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSkgcmV0dXJuIHJ1bGU7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBpc05hdGl2ZUNTU1N0eWxlVmFsdWUgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0Y29uc3QgQ1NTU3R5bGVWYWx1ZUN0b3IgPSBnbG9iYWxUaGlzLkNTU1N0eWxlVmFsdWU7XG5cdFx0aWYgKHR5cGVvZiBDU1NTdHlsZVZhbHVlQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmIHZhbHVlIGluc3RhbmNlb2YgQ1NTU3R5bGVWYWx1ZUN0b3IpIHJldHVybiB0cnVlO1xuXHRcdGZvciAobGV0IHByb3RvdHlwZSA9IHZhbHVlOyBwcm90b3R5cGU7IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpKSBpZiAocHJvdG90eXBlPy5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gXCJDU1NTdHlsZVZhbHVlXCIpIHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHt9XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgaXNSZWFjdGl2ZVN0eWxlVmFsdWUgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IGlzTmF0aXZlQ1NTU3R5bGVWYWx1ZSh2YWx1ZSkpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gXCJ2YWx1ZVwiIGluIHZhbHVlO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgZ2V0V2luZG93Q29uc3RydWN0b3IgPSAod2luLCBuYW1lKSA9PiB7XG5cdHJldHVybiB3aW4/LltuYW1lXSA/PyBnbG9iYWxUaGlzPy5bbmFtZV07XG59O1xudmFyIGdldENTU1VuaXRGYWN0b3J5TmFtZSA9ICh1bml0KSA9PiB7XG5cdHN3aXRjaCAodW5pdC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0Y2FzZSBcIiVcIjogcmV0dXJuIFwicGVyY2VudFwiO1xuXHRcdGNhc2UgXCJxXCI6IHJldHVybiBcIlFcIjtcblx0XHRjYXNlIFwiaHpcIjogcmV0dXJuIFwiSHpcIjtcblx0XHRjYXNlIFwia2h6XCI6IHJldHVybiBcImtIelwiO1xuXHRcdGNhc2UgXCJmclwiOiByZXR1cm4gXCJmbGV4XCI7XG5cdFx0ZGVmYXVsdDogcmV0dXJuIHVuaXQudG9Mb3dlckNhc2UoKTtcblx0fVxufTtcbnZhciBnZXRDU1NVbml0Q29uc3RydWN0b3JOYW1lID0gKHVuaXQpID0+IHtcblx0cmV0dXJuIHVuaXQudG9Mb3dlckNhc2UoKSA9PT0gXCIlXCIgPyBcInBlcmNlbnRcIiA6IHVuaXQudG9Mb3dlckNhc2UoKTtcbn07XG52YXIgY3JlYXRlVHlwZWRVbml0VmFsdWUgPSAod2luLCB1bml0LCB2YWx1ZSkgPT4ge1xuXHRjb25zdCBDU1NOYW1lc3BhY2UgPSB3aW4/LkNTUztcblx0Y29uc3QgZmFjdG9yeU5hbWUgPSBnZXRDU1NVbml0RmFjdG9yeU5hbWUodW5pdCk7XG5cdGNvbnN0IGZhY3RvcnkgPSBDU1NOYW1lc3BhY2U/LltmYWN0b3J5TmFtZV07XG5cdGlmICh0eXBlb2YgZmFjdG9yeSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFjdG9yeS5jYWxsKENTU05hbWVzcGFjZSwgdmFsdWUpO1xuXHRjb25zdCBDU1NVbml0VmFsdWVDdG9yID0gZ2V0V2luZG93Q29uc3RydWN0b3Iod2luLCBcIkNTU1VuaXRWYWx1ZVwiKTtcblx0aWYgKHR5cGVvZiBDU1NVbml0VmFsdWVDdG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoYFR5cGVkIE9NIGRvZXMgbm90IHN1cHBvcnQgQ1NTIHVuaXQgXCIke3VuaXR9XCJgKTtcblx0cmV0dXJuIG5ldyBDU1NVbml0VmFsdWVDdG9yKHZhbHVlLCBnZXRDU1NVbml0Q29uc3RydWN0b3JOYW1lKHVuaXQpKTtcbn07XG52YXIgdG9rZW5pemVOdW1lcmljQ1NTID0gKHNvdXJjZSkgPT4ge1xuXHRjb25zdCB0b2tlbnMgPSBbXTtcblx0bGV0IGN1cnNvciA9IDA7XG5cdHdoaWxlIChjdXJzb3IgPCBzb3VyY2UubGVuZ3RoKSB7XG5cdFx0Y29uc3QgcmVzdCA9IHNvdXJjZS5zbGljZShjdXJzb3IpO1xuXHRcdGNvbnN0IHdoaXRlc3BhY2UgPSAvXlxccysvLmV4ZWMocmVzdCk7XG5cdFx0aWYgKHdoaXRlc3BhY2UpIHtcblx0XHRcdGN1cnNvciArPSB3aGl0ZXNwYWNlWzBdLmxlbmd0aDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBudW1iZXIgPSAvXig/OlxcZCpcXC5cXGQrfFxcZCtcXC4/XFxkKikoPzpbZUVdWystXT9cXGQrKT8vLmV4ZWMocmVzdCk7XG5cdFx0aWYgKG51bWJlcikge1xuXHRcdFx0Y3Vyc29yICs9IG51bWJlclswXS5sZW5ndGg7XG5cdFx0XHRjb25zdCB1bml0TWF0Y2ggPSAvXiglfFthLXpBLVpdKykvLmV4ZWMoc291cmNlLnNsaWNlKGN1cnNvcikpO1xuXHRcdFx0Y29uc3QgdW5pdCA9IHVuaXRNYXRjaD8uWzBdID8/IG51bGw7XG5cdFx0XHRpZiAodW5pdE1hdGNoKSBjdXJzb3IgKz0gdW5pdE1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0a2luZDogXCJudW1iZXJcIixcblx0XHRcdFx0dmFsdWU6IE51bWJlcihudW1iZXJbMF0pLFxuXHRcdFx0XHR1bml0OiB1bml0ID09IG51bGwgPyBudWxsIDogdW5pdC50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBpZGVudGlmaWVyID0gL15bYS16QS1aX11bYS16QS1aMC05Xy1dKi8uZXhlYyhyZXN0KTtcblx0XHRpZiAoaWRlbnRpZmllcikge1xuXHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRraW5kOiBcImlkZW50aWZpZXJcIixcblx0XHRcdFx0dmFsdWU6IGlkZW50aWZpZXJbMF0udG9Mb3dlckNhc2UoKVxuXHRcdFx0fSk7XG5cdFx0XHRjdXJzb3IgKz0gaWRlbnRpZmllclswXS5sZW5ndGg7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3Qgc3ltYm9sID0gcmVzdFswXTtcblx0XHRpZiAoW1xuXHRcdFx0XCIrXCIsXG5cdFx0XHRcIi1cIixcblx0XHRcdFwiKlwiLFxuXHRcdFx0XCIvXCIsXG5cdFx0XHRcIihcIixcblx0XHRcdFwiKVwiLFxuXHRcdFx0XCIsXCJcblx0XHRdLmluY2x1ZGVzKHN5bWJvbCkpIHtcblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0a2luZDogXCJzeW1ib2xcIixcblx0XHRcdFx0dmFsdWU6IHN5bWJvbFxuXHRcdFx0fSk7XG5cdFx0XHRjdXJzb3IrKztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuc3VwcG9ydGVkIHRva2VuIG5lYXIgXCIke3Jlc3R9XCJgKTtcblx0fVxuXHRyZXR1cm4gdG9rZW5zO1xufTtcbnZhciBOdW1lcmljVHlwZWRPTVBhcnNlciA9IGNsYXNzIHtcblx0dG9rZW5zO1xuXHR3aW47XG5cdGluZGV4ID0gMDtcblx0Y29uc3RydWN0b3IodG9rZW5zLCB3aW4pIHtcblx0XHR0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLndpbiA9IHdpbjtcblx0fVxuXHRwYXJzZSgpIHtcblx0XHRjb25zdCByb290ID0gdGhpcy5wYXJzZVN1bSgpO1xuXHRcdGlmICh0aGlzLmluZGV4ICE9PSB0aGlzLnRva2Vucy5sZW5ndGgpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlVuZXhwZWN0ZWQgdHJhaWxpbmcgZXhwcmVzc2lvblwiKTtcblx0XHRyZXR1cm4gcm9vdDtcblx0fVxuXHRjdXJyZW50KCkge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcblx0fVxuXHRjb25zdW1lKCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG5cdFx0aWYgKCF0b2tlbikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvblwiKTtcblx0XHR0aGlzLmluZGV4Kys7XG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cdGNvbnN1bWVTeW1ib2woc3ltYm9sKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcblx0XHRpZiAodG9rZW4ua2luZCAhPT0gXCJzeW1ib2xcIiB8fCB0b2tlbi52YWx1ZSAhPT0gc3ltYm9sKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYEV4cGVjdGVkIFwiJHtzeW1ib2x9XCJgKTtcblx0fVxuXHRtYXRjaGVzU3ltYm9sKHN5bWJvbCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cdFx0cmV0dXJuIHRva2VuPy5raW5kID09PSBcInN5bWJvbFwiICYmIHRva2VuLnZhbHVlID09PSBzeW1ib2w7XG5cdH1cblx0Y3JlYXRlTWF0aChuYW1lLCAuLi52YWx1ZXMpIHtcblx0XHRjb25zdCBDb25zdHJ1Y3RvciA9IGdldFdpbmRvd0NvbnN0cnVjdG9yKHRoaXMud2luLCBuYW1lKTtcblx0XHRpZiAodHlwZW9mIENvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7bmFtZX0gaXMgbm90IHN1cHBvcnRlZGApO1xuXHRcdHJldHVybiBuZXcgQ29uc3RydWN0b3IoLi4udmFsdWVzKTtcblx0fVxuXHRwYXJzZVN1bSgpIHtcblx0XHRsZXQgdmFsdWUgPSB0aGlzLnBhcnNlUHJvZHVjdCgpO1xuXHRcdHdoaWxlICh0aGlzLm1hdGNoZXNTeW1ib2woXCIrXCIpIHx8IHRoaXMubWF0Y2hlc1N5bWJvbChcIi1cIikpIHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yID0gdGhpcy5jb25zdW1lKCk7XG5cdFx0XHRjb25zdCByaWdodCA9IHRoaXMucGFyc2VQcm9kdWN0KCk7XG5cdFx0XHRpZiAob3BlcmF0b3Iua2luZCAhPT0gXCJzeW1ib2xcIikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRXhwZWN0ZWQgc3VtIG9wZXJhdG9yXCIpO1xuXHRcdFx0aWYgKG9wZXJhdG9yLnZhbHVlID09PSBcIitcIikgdmFsdWUgPSB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoU3VtXCIsIHZhbHVlLCByaWdodCk7XG5cdFx0XHRlbHNlIHZhbHVlID0gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aFN1bVwiLCB2YWx1ZSwgdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aE5lZ2F0ZVwiLCByaWdodCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0cGFyc2VQcm9kdWN0KCkge1xuXHRcdGxldCB2YWx1ZSA9IHRoaXMucGFyc2VVbmFyeSgpO1xuXHRcdHdoaWxlICh0aGlzLm1hdGNoZXNTeW1ib2woXCIqXCIpIHx8IHRoaXMubWF0Y2hlc1N5bWJvbChcIi9cIikpIHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yID0gdGhpcy5jb25zdW1lKCk7XG5cdFx0XHRjb25zdCByaWdodCA9IHRoaXMucGFyc2VVbmFyeSgpO1xuXHRcdFx0aWYgKG9wZXJhdG9yLmtpbmQgIT09IFwic3ltYm9sXCIpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkV4cGVjdGVkIHByb2R1Y3Qgb3BlcmF0b3JcIik7XG5cdFx0XHRpZiAob3BlcmF0b3IudmFsdWUgPT09IFwiKlwiKSB2YWx1ZSA9IHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhQcm9kdWN0XCIsIHZhbHVlLCByaWdodCk7XG5cdFx0XHRlbHNlIHZhbHVlID0gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aFByb2R1Y3RcIiwgdmFsdWUsIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhJbnZlcnRcIiwgcmlnaHQpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cdHBhcnNlVW5hcnkoKSB7XG5cdFx0aWYgKHRoaXMubWF0Y2hlc1N5bWJvbChcIitcIikpIHtcblx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VVbmFyeSgpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5tYXRjaGVzU3ltYm9sKFwiLVwiKSkge1xuXHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aE5lZ2F0ZVwiLCB0aGlzLnBhcnNlVW5hcnkoKSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcnNlUHJpbWFyeSgpO1xuXHR9XG5cdHBhcnNlUHJpbWFyeSgpIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xuXHRcdGlmICh0b2tlbi5raW5kID09PSBcIm51bWJlclwiKSByZXR1cm4gY3JlYXRlVHlwZWRVbml0VmFsdWUodGhpcy53aW4sIHRva2VuLnVuaXQgPz8gXCJudW1iZXJcIiwgdG9rZW4udmFsdWUpO1xuXHRcdGlmICh0b2tlbi5raW5kID09PSBcInN5bWJvbFwiICYmIHRva2VuLnZhbHVlID09PSBcIihcIikge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlU3VtKCk7XG5cdFx0XHR0aGlzLmNvbnN1bWVTeW1ib2woXCIpXCIpO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRpZiAodG9rZW4ua2luZCA9PT0gXCJpZGVudGlmaWVyXCIpIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb24odG9rZW4udmFsdWUpO1xuXHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcIkV4cGVjdGVkIGEgbnVtZXJpYyB2YWx1ZVwiKTtcblx0fVxuXHRwYXJzZUZ1bmN0aW9uKG5hbWUpIHtcblx0XHR0aGlzLmNvbnN1bWVTeW1ib2woXCIoXCIpO1xuXHRcdGlmIChuYW1lID09PSBcImNhbGNcIikge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlU3VtKCk7XG5cdFx0XHR0aGlzLmNvbnN1bWVTeW1ib2woXCIpXCIpO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRjb25zdCB2YWx1ZXMgPSBbXTtcblx0XHRpZiAoIXRoaXMubWF0Y2hlc1N5bWJvbChcIilcIikpIHtcblx0XHRcdHZhbHVlcy5wdXNoKHRoaXMucGFyc2VTdW0oKSk7XG5cdFx0XHR3aGlsZSAodGhpcy5tYXRjaGVzU3ltYm9sKFwiLFwiKSkge1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0dmFsdWVzLnB1c2godGhpcy5wYXJzZVN1bSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5jb25zdW1lU3ltYm9sKFwiKVwiKTtcblx0XHRpZiAobmFtZSA9PT0gXCJtaW5cIikge1xuXHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBTeW50YXhFcnJvcihcIm1pbigpIHJlcXVpcmVzIGEgdmFsdWVcIik7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aE1pblwiLCAuLi52YWx1ZXMpO1xuXHRcdH1cblx0XHRpZiAobmFtZSA9PT0gXCJtYXhcIikge1xuXHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBTeW50YXhFcnJvcihcIm1heCgpIHJlcXVpcmVzIGEgdmFsdWVcIik7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aE1heFwiLCAuLi52YWx1ZXMpO1xuXHRcdH1cblx0XHRpZiAobmFtZSA9PT0gXCJjbGFtcFwiKSB7XG5cdFx0XHRpZiAodmFsdWVzLmxlbmd0aCAhPT0gMykgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiY2xhbXAoKSByZXF1aXJlcyB0aHJlZSB2YWx1ZXNcIik7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aENsYW1wXCIsIHZhbHVlc1swXSwgdmFsdWVzWzFdLCB2YWx1ZXNbMl0pO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuc3VwcG9ydGVkIGZ1bmN0aW9uIFwiJHtuYW1lfVwiYCk7XG5cdH1cbn07XG52YXIgcGFyc2VUb1R5cGVkT00gPSAoY3NzVmFsdWUsIHdpbikgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHRva2VucyA9IHRva2VuaXplTnVtZXJpY0NTUyhjc3NWYWx1ZSk7XG5cdFx0cmV0dXJuIG5ldyBOdW1lcmljVHlwZWRPTVBhcnNlcih0b2tlbnMsIHdpbikucGFyc2UoKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgaGFzVHlwZWRPTSA9IHR5cGVvZiBDU1NTdHlsZVZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBDU1NVbml0VmFsdWUgIT09IFwidW5kZWZpbmVkXCI7XG52YXIgaXNVbml0VmFsdWUgPSAodmFsKSA9PiBoYXNUeXBlZE9NICYmIHZhbCBpbnN0YW5jZW9mIENTU1VuaXRWYWx1ZTtcbnZhciBzZXRQcm9wZXJ0eUlmTm90RXF1YWwgPSAoc3R5bGVSZWYsIGtlYmFiLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0aWYgKCFzdHlsZVJlZiB8fCAha2ViYWIpIHJldHVybjtcblx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRpZiAoc3R5bGVSZWYuZ2V0UHJvcGVydHlWYWx1ZShrZWJhYikgIT09IFwiXCIpIHN0eWxlUmVmLnJlbW92ZVByb3BlcnR5KGtlYmFiKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHN0eWxlUmVmLmdldFByb3BlcnR5VmFsdWUoa2ViYWIpICE9PSB2YWx1ZSkgc3R5bGVSZWYuc2V0UHJvcGVydHkoa2ViYWIsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eVR5cGVkID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIW5hbWUpIHJldHVybiBlbGVtZW50O1xuXHRjb25zdCBrZWJhYiA9IGNhbWVsVG9LZWJhYihuYW1lKTtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbGVtZW50LnN0eWxlO1xuXHRjb25zdCBzdHlsZU1hcFJlZiA9IGVsZW1lbnQuYXR0cmlidXRlU3R5bGVNYXAgPz8gZWxlbWVudC5zdHlsZU1hcDtcblx0aWYgKCFoYXNUeXBlZE9NIHx8ICFzdHlsZU1hcFJlZikgcmV0dXJuIHNldFN0eWxlUHJvcGVydHlGYWxsYmFjayhlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSk7XG5cdGNvbnN0IHdpbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudD8uZGVmYXVsdFZpZXcgPz8gZ2xvYmFsVGhpcztcblx0bGV0IHZhbCA9IGhhc1ZhbHVlKHZhbHVlKSAmJiBpc1JlYWN0aXZlU3R5bGVWYWx1ZSh2YWx1ZSkgPyB2YWx1ZS52YWx1ZSA6IHZhbHVlO1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHRzdHlsZU1hcFJlZi5kZWxldGU/LihrZWJhYik7XG5cdFx0aWYgKHN0eWxlUmVmKSBzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBudWxsLCBpbXBvcnRhbmNlKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAoaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbCkpIHtcblx0XHRjb25zdCBvbGQgPSBzdHlsZU1hcFJlZi5nZXQoa2ViYWIpO1xuXHRcdGlmIChpc1VuaXRWYWx1ZSh2YWwpICYmIGlzVW5pdFZhbHVlKG9sZCkpIHtcblx0XHRcdGlmIChvbGQudmFsdWUgPT09IHZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gdmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdH0gZWxzZSBpZiAob2xkID09PSB2YWwpIHJldHVybiBlbGVtZW50O1xuXHRcdHN0eWxlTWFwUmVmLnNldChrZWJhYiwgdmFsKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuXHRcdGlmIChDU1M/Lm51bWJlciAmJiAha2ViYWIuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBuZXdWYWwgPSBDU1MubnVtYmVyKHZhbCk7XG5cdFx0XHRjb25zdCBvbGQgPSBzdHlsZU1hcFJlZi5nZXQoa2ViYWIpO1xuXHRcdFx0aWYgKGlzVW5pdFZhbHVlKG9sZCkgJiYgb2xkLnZhbHVlID09PSBuZXdWYWwudmFsdWUgJiYgb2xkLnVuaXQgPT09IG5ld1ZhbC51bml0KSByZXR1cm4gZWxlbWVudDtcblx0XHRcdHN0eWxlTWFwUmVmLnNldChrZWJhYiwgbmV3VmFsKTtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdH1cblx0aWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpIHtcblx0XHRpZiAoL1xcYihjYWxjfG1pbnxtYXh8Y2xhbXApXFxzKlxcKC8udGVzdCh2YWwpKSB7XG5cdFx0XHRjb25zdCBwYXJzZWQgPSBwYXJzZVRvVHlwZWRPTSh2YWwsIHdpbik7XG5cdFx0XHRpZiAocGFyc2VkKSB0cnkge1xuXHRcdFx0XHRzdHlsZU1hcFJlZi5zZXQoa2ViYWIsIHBhcnNlZCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0XHRjb25zdCBtYXliZU51bSA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCk7XG5cdFx0aWYgKHR5cGVvZiBtYXliZU51bSA9PT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAha2ViYWIuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBuZXdWYWwgPSBDU1MubnVtYmVyKG1heWJlTnVtKTtcblx0XHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0XHRpZiAoaXNVbml0VmFsdWUob2xkKSAmJiBvbGQudmFsdWUgPT09IG5ld1ZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gbmV3VmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCBuZXdWYWwpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fVxuXHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIHZhbCwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIW5hbWUpIHJldHVybiBlbGVtZW50O1xuXHRjb25zdCBrZWJhYiA9IGNhbWVsVG9LZWJhYihuYW1lKTtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbGVtZW50LnN0eWxlO1xuXHRpZiAoIXN0eWxlUmVmKSByZXR1cm4gZWxlbWVudDtcblx0bGV0IHZhbCA9IGhhc1ZhbHVlKHZhbHVlKSAmJiBpc1JlYWN0aXZlU3R5bGVWYWx1ZSh2YWx1ZSkgPyB2YWx1ZS52YWx1ZSA6IHZhbHVlO1xuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbCkpIHZhbCA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCkgPz8gdmFsO1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBudWxsLCBpbXBvcnRhbmNlKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAoaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbCkpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0aWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eSA9IChlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0cmV0dXJuIGhhc1R5cGVkT00gPyBzZXRTdHlsZVByb3BlcnR5VHlwZWQoZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UpIDogc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbn07XG52YXIgc2V0U3R5bGVJblJ1bGUgPSAoc2VsZWN0b3IsIG5hbWUsIHZhbHVlKSA9PiB7XG5cdHJldHVybiBzZXRTdHlsZVByb3BlcnR5KGdldFN0eWxlUnVsZShzZWxlY3RvciksIG5hbWUsIHZhbHVlKTtcbn07XG52YXIgc2V0U3R5bGVSdWxlID0gKHNlbGVjdG9yLCBzaGVldCkgPT4ge1xuXHRjb25zdCBydWxlID0gZ2V0U3R5bGVSdWxlKHNlbGVjdG9yKTtcblx0T2JqZWN0LmVudHJpZXMoc2hlZXQpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFZhbHVlXSkgPT4gc2V0U3R5bGVQcm9wZXJ0eShydWxlLCBwcm9wTmFtZSwgcHJvcFZhbHVlKSk7XG5cdHJldHVybiBydWxlO1xufTtcbnZhciBoYXNoID0gYXN5bmMgKHN0cmluZykgPT4ge1xuXHRjb25zdCBoYXNoQnVmZmVyID0gYXdhaXQgY3J5cHRvPy5zdWJ0bGU/LmRpZ2VzdChcIlNIQS0yNTZcIiwgdHlwZW9mIHN0cmluZyA9PSBcInN0cmluZ1wiID8gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHN0cmluZykgOiBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IHN0cmluZyA6IGF3YWl0IHN0cmluZz8uYXJyYXlCdWZmZXI/LigpKTtcblx0cmV0dXJuIFwic2hhMjU2LVwiICsgYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KGhhc2hCdWZmZXIpKSk7XG59O1xudmFyIGxvYWRTdHlsZVNoZWV0ID0gKGlubGluZSwgYmFzZSwgbGF5ZXIgPSBcIlwiLCBpbnRlZ3JpdHkpID0+IHtcblx0Y29uc3QgbG9hZCA9IGZldGNoQW5kQ2FjaGUoaW5saW5lKTtcblx0Y29uc3QgdXJsID0gdHlwZW9mIGlubGluZSA9PSBcInN0cmluZ1wiID8gVVJMLmNhblBhcnNlKGlubGluZSkgPyBpbmxpbmUgOiBsb2FkIDogbG9hZDtcblx0aWYgKGJhc2U/LlswXSkgYmFzZVswXS5mZXRjaFByaW9yaXR5ID0gXCJoaWdoXCI7XG5cdGlmIChiYXNlICYmIHVybCAmJiB0eXBlb2YgdXJsID09IFwic3RyaW5nXCIpIHNldFN0eWxlVVJMKGJhc2UsIHVybCwgbGF5ZXIpO1xuXHRpZiAoYmFzZT8uWzBdICYmICghVVJMLmNhblBhcnNlKGlubGluZSkgfHwgaW50ZWdyaXR5KSAmJiBiYXNlPy5bMF0gaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQpIHt9XG5cdHJldHVybiBwcm9taXNlT3JEaXJlY3QobG9hZCwgKHJlcykgPT4ge1xuXHRcdGlmIChiYXNlPy5bMF0gJiYgcmVzKSB7XG5cdFx0XHRzZXRTdHlsZVVSTChiYXNlLCByZXMsIGxheWVyKTtcblx0XHRcdGJhc2U/LlswXS5zZXRBdHRyaWJ1dGUoXCJsb2FkZWRcIiwgXCJcIik7XG5cdFx0fVxuXHR9KT8uY2F0Y2g/LigoZXJyb3IpID0+IHtcblx0XHRjb25zb2xlLndhcm4oXCJGYWlsZWQgdG8gbG9hZCBzdHlsZSBzaGVldDpcIiwgZXJyb3IpO1xuXHR9KTtcbn07XG52YXIgbG9hZEJsb2JTdHlsZSA9IChpbmxpbmUpID0+IHtcblx0Y29uc3Qgc3R5bGUgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpIDogbnVsbDtcblx0aWYgKHN0eWxlKSBzdHlsZS5mZXRjaFByaW9yaXR5ID0gXCJoaWdoXCI7XG5cdGlmIChzdHlsZSkge1xuXHRcdE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcblx0XHRcdHJlbDogXCJzdHlsZXNoZWV0XCIsXG5cdFx0XHR0eXBlOiBcInRleHQvY3NzXCIsXG5cdFx0XHRjcm9zc09yaWdpbjogXCJzYW1lLW9yaWdpblwiXG5cdFx0fSk7XG5cdFx0c3R5bGUuZGF0YXNldC5vd25lciA9IE9XTkVSO1xuXHRcdGxvYWRTdHlsZVNoZWV0KGlubGluZSwgW3N0eWxlLCBcImhyZWZcIl0pO1xuXHRcdHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlKTtcblx0XHRyZXR1cm4gc3R5bGU7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGxvYWRJbmxpbmVTdHlsZSA9IChpbmxpbmUsIHJvb3RFbGVtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudD8uaGVhZCA6IG51bGwsIGxheWVyID0gXCJcIikgPT4ge1xuXHRjb25zdCBQTEFDRSA9IHJvb3RFbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oXCJoZWFkXCIpID8/IHJvb3RFbGVtZW50O1xuXHRpZiAodHlwZW9mIEhUTUxIZWFkRWxlbWVudCAhPSBcInVuZGVmaW5lZFwiICYmIFBMQUNFIGluc3RhbmNlb2YgSFRNTEhlYWRFbGVtZW50KSByZXR1cm4gbG9hZEJsb2JTdHlsZShpbmxpbmUpO1xuXHRjb25zdCBzdHlsZSA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpIDogbnVsbDtcblx0aWYgKHN0eWxlKSB7XG5cdFx0c3R5bGUuZGF0YXNldC5vd25lciA9IE9XTkVSO1xuXHRcdGxvYWRTdHlsZVNoZWV0KGlubGluZSwgW3N0eWxlLCBcImlubmVySFRNTFwiXSwgbGF5ZXIpO1xuXHRcdFBMQUNFPy5wcmVwZW5kPy4oc3R5bGUpO1xuXHRcdHJldHVybiBzdHlsZTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgc2V0UHJvcGVydHkgPSAodGFyZ2V0LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0cmV0dXJuIHNldFN0eWxlUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSk7XG59O1xudmFyIHByZWxvYWRTdHlsZSA9IChzdHlsZXMpID0+IHtcblx0cmV0dXJuIGxvYWRBc0Fkb3B0ZWQoc3R5bGVzLCBcIlwiKTtcbn07XG52YXIgYWRvcHRlZE1hcFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYWRvcHRlZE1hcFwiKTtcbnZhciBhZG9wdGVkTWFwID0gZ2xvYmFsVGhpc1thZG9wdGVkTWFwU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBhZG9wdGVkQmxvYk1hcFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYWRvcHRlZEJsb2JNYXBcIik7XG52YXIgYWRvcHRlZEJsb2JNYXAgPSBnbG9iYWxUaGlzW2Fkb3B0ZWRCbG9iTWFwU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbGF5ZXJDb3VudGVyU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BsYXllckNvdW50ZXJcIik7XG52YXIgbGF5ZXJDb3VudGVyID0gZ2xvYmFsVGhpc1tsYXllckNvdW50ZXJTeW1ib2xdID8/PSAwO1xudmFyIGFwcGx5QWRvcHRlZFN0eWxlVGV4dCA9IChzaGVldCwgY3NzVGV4dCkgPT4ge1xuXHRpZiAoIXNoZWV0IHx8ICFjc3NUZXh0KSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0c2hlZXQucmVwbGFjZVN5bmMoY3NzVGV4dCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc3QgbWVzc2FnZSA9IFN0cmluZyhlcnJvcj8ubWVzc2FnZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICghKG1lc3NhZ2UuaW5jbHVkZXMoXCJAaW1wb3J0IHJ1bGVzIGFyZSBub3QgYWxsb3dlZFwiKSB8fCBtZXNzYWdlLmluY2x1ZGVzKFwiQGltcG9ydFwiKSAmJiBtZXNzYWdlLmluY2x1ZGVzKFwibm90IGFsbG93ZWRcIikpKSBjb25zb2xlLndhcm4oXCJbRE9NXSBGYWlsZWQgdG8gYXBwbHkgYWRvcHRlZCBzdHlsZXNoZWV0OlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIGxvYWRBc0Fkb3B0ZWQgPSAoc3R5bGVzLCBsYXllck5hbWUgPSBudWxsKSA9PiB7XG5cdGlmICghc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCgpKSB7XG5cdFx0aWYgKHR5cGVvZiBzdHlsZXMgPT09IFwic3RyaW5nXCIpIGxvYWRJbmxpbmVTdHlsZShzdHlsZXMsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmICh0eXBlb2Ygc3R5bGVzID09PSBcInN0cmluZ1wiICYmIGNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudChzdHlsZXMpKSB7XG5cdFx0bG9hZElubGluZVN0eWxlKHN0eWxlcywgdm9pZCAwLCBsYXllck5hbWUgfHwgXCJcIik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiBhZG9wdGVkTWFwPy5oYXM/LihzdHlsZXMpKSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gYWRvcHRlZE1hcC5nZXQoc3R5bGVzKTtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKGNhY2hlZCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKGNhY2hlZCk7XG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXHRpZiAoKHN0eWxlcyBpbnN0YW5jZW9mIEJsb2IgfHwgc3R5bGVzIGluc3RhbmNlb2YgRmlsZSkgJiYgYWRvcHRlZEJsb2JNYXA/Lmhhcz8uKHN0eWxlcykpIHtcblx0XHRjb25zdCBjYWNoZWQgPSBhZG9wdGVkQmxvYk1hcC5nZXQoc3R5bGVzKTtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKGNhY2hlZCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKGNhY2hlZCk7XG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXHRpZiAoIXN0eWxlcykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHNoZWV0ID0gdHlwZW9mIHN0eWxlcyA9PSBcInN0cmluZ1wiID8gYWRvcHRlZE1hcC5nZXRPckluc2VydENvbXB1dGVkKHN0eWxlcywgKHN0eWxlcykgPT4gbmV3IENTU1N0eWxlU2hlZXQoKSkgOiBhZG9wdGVkQmxvYk1hcC5nZXRPckluc2VydENvbXB1dGVkKHN0eWxlcywgKHN0eWxlcykgPT4gbmV3IENTU1N0eWxlU2hlZXQoKSk7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMgJiYgIWRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzaGVldCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoZWV0KTtcblx0aWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiAhVVJMLmNhblBhcnNlKHN0eWxlcykpIHtcblx0XHRjb25zdCBsYXllcldyYXBwZWQgPSBsYXllck5hbWUgPyBgQGxheWVyICR7bGF5ZXJOYW1lfSB7ICR7c3R5bGVzfSB9YCA6IHN0eWxlcztcblx0XHRhZG9wdGVkTWFwLnNldChzdHlsZXMsIHNoZWV0KTtcblx0XHRpZiAoIWFwcGx5QWRvcHRlZFN0eWxlVGV4dChzaGVldCwgbGF5ZXJXcmFwcGVkKSkge1xuXHRcdFx0cmVtb3ZlQWRvcHRlZChzaGVldCk7XG5cdFx0XHRhZG9wdGVkTWFwLmRlbGV0ZShzdHlsZXMpO1xuXHRcdFx0bG9hZElubGluZVN0eWxlKHN0eWxlcyk7XG5cdFx0fVxuXHRcdHJldHVybiBzaGVldDtcblx0fSBlbHNlIHByb21pc2VPckRpcmVjdChmZXRjaEFzSW5saW5lKHN0eWxlcyksIChjYWNoZWQpID0+IHtcblx0XHRhZG9wdGVkTWFwLnNldChjYWNoZWQsIHNoZWV0KTtcblx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRpZiAoY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50KGNhY2hlZCkpIHtcblx0XHRcdFx0cmVtb3ZlQWRvcHRlZChzaGVldCk7XG5cdFx0XHRcdGFkb3B0ZWRNYXAuZGVsZXRlKGNhY2hlZCk7XG5cdFx0XHRcdGFkb3B0ZWRCbG9iTWFwLmRlbGV0ZShzdHlsZXMpO1xuXHRcdFx0XHRsb2FkSW5saW5lU3R5bGUoY2FjaGVkLCB2b2lkIDAsIGxheWVyTmFtZSB8fCBcIlwiKTtcblx0XHRcdFx0cmV0dXJuIHNoZWV0O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGF5ZXJXcmFwcGVkID0gbGF5ZXJOYW1lID8gYEBsYXllciAke2xheWVyTmFtZX0geyAke2NhY2hlZH0gfWAgOiBjYWNoZWQ7XG5cdFx0XHRpZiAoIWFwcGx5QWRvcHRlZFN0eWxlVGV4dChzaGVldCwgbGF5ZXJXcmFwcGVkKSkge1xuXHRcdFx0XHRyZW1vdmVBZG9wdGVkKHNoZWV0KTtcblx0XHRcdFx0YWRvcHRlZE1hcC5kZWxldGUoY2FjaGVkKTtcblx0XHRcdFx0YWRvcHRlZEJsb2JNYXAuZGVsZXRlKHN0eWxlcyk7XG5cdFx0XHRcdGxvYWRJbmxpbmVTdHlsZShjYWNoZWQsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNoZWV0O1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBzaGVldDtcbn07XG52YXIgcmVtb3ZlQWRvcHRlZCA9IChzaGVldCkgPT4ge1xuXHRpZiAoIXNoZWV0KSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHRhcmdldCA9IHR5cGVvZiBzaGVldCA9PT0gXCJzdHJpbmdcIiA/IGFkb3B0ZWRNYXAuZ2V0KHNoZWV0KSA6IHNoZWV0O1xuXHRpZiAoIXRhcmdldCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc2hlZXRzID0gZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzO1xuXHRjb25zdCBpZHggPSBzaGVldHMuaW5kZXhPZih0YXJnZXQpO1xuXHRpZiAoaWR4ICE9PSAtMSkge1xuXHRcdHNoZWV0cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xudmFyIHBhcnNlT3JpZ2luID0gKG9yaWdpbiwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCB2YWx1ZXMgPSBvcmlnaW4uc3BsaXQoXCIgXCIpO1xuXHRyZXR1cm4gbmV3IERPTVBvaW50KHBhcnNlTGVuZ3RoKHZhbHVlc1swXSwgKCkgPT4gZWxlbWVudC5jbGllbnRXaWR0aCksIHBhcnNlTGVuZ3RoKHZhbHVlc1sxXSwgKCkgPT4gZWxlbWVudC5jbGllbnRIZWlnaHQpKTtcbn07XG52YXIgcGFyc2VMZW5ndGggPSAodmFsdWUsIHNpemUpID0+IHtcblx0aWYgKHZhbHVlLmVuZHNXaXRoKFwiJVwiKSkgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIC8gMTAwICogc2l6ZSgpO1xuXHRyZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59O1xudmFyIGdldFRyYW5zZm9ybSA9IChlbCkgPT4ge1xuXHRpZiAoZWw/LmNvbXB1dGVkU3R5bGVNYXApIHtcblx0XHRjb25zdCBtYXRyaXggPSBlbC5jb21wdXRlZFN0eWxlTWFwKCkuZ2V0KFwidHJhbnNmb3JtXCIpPy50b01hdHJpeD8uKCk7XG5cdFx0aWYgKG1hdHJpeCkgcmV0dXJuIG1hdHJpeDtcblx0fSBlbHNlIGlmIChlbCkge1xuXHRcdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdFx0cmV0dXJuIG5ldyBET01NYXRyaXgoc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcInRyYW5zZm9ybVwiKSk7XG5cdH1cblx0cmV0dXJuIG5ldyBET01NYXRyaXgoKTtcbn07XG52YXIgZ2V0VHJhbnNmb3JtT3JpZ2luID0gKGVsKSA9PiB7XG5cdGNvbnN0IGNzc09yaWdpbiA9IGdldENvbXB1dGVkU3R5bGUoZWwpPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCJ0cmFuc2Zvcm0tb3JpZ2luXCIpIHx8IGA1MCUgNTAlYDtcblx0cmV0dXJuIHBhcnNlT3JpZ2luKGNzc09yaWdpbiwgZWwpO1xufTtcbnZhciBnZXRQcm9wZXJ0eVZhbHVlID0gKHNyYywgbmFtZSkgPT4ge1xuXHRpZiAoXCJjb21wdXRlZFN0eWxlTWFwXCIgaW4gc3JjKSB7XG5cdFx0Y29uc3QgdmFsID0gc3JjPy5jb21wdXRlZFN0eWxlTWFwPy4oKT8uZ2V0KG5hbWUpO1xuXHRcdHJldHVybiB2YWwgaW5zdGFuY2VvZiBDU1NVbml0VmFsdWUgPyB2YWw/LnZhbHVlIHx8IDAgOiB2YWw/LnRvU3RyaW5nPy4oKTtcblx0fVxuXHRpZiAoc3JjIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRjb25zdCBjcyA9IGdldENvbXB1dGVkU3R5bGU/LihzcmMsIFwiXCIpO1xuXHRcdHJldHVybiBwYXJzZUZsb2F0KGNzPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnJlcGxhY2U/LihcInB4XCIsIFwiXCIpKSB8fCAwO1xuXHR9XG5cdHJldHVybiBwYXJzZUZsb2F0KChzcmM/LnN0eWxlID8/IHNyYykuZ2V0UHJvcGVydHlWYWx1ZT8uKG5hbWUpPy5yZXBsYWNlPy4oXCJweFwiLCBcIlwiKSkgfHwgMDtcbn07XG52YXIgZ2V0RWxlbWVudFpvb20gPSAoZWxlbWVudCkgPT4ge1xuXHRsZXQgem9vbSA9IDEsIGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnRFbGVtZW50KSB7XG5cdFx0aWYgKFwiY3VycmVudENTU1pvb21cIiBpbiBjdXJyZW50RWxlbWVudCkge1xuXHRcdFx0Y29uc3QgY3VycmVudENTU1pvb20gPSBjdXJyZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbTtcblx0XHRcdGlmICh0eXBlb2YgY3VycmVudENTU1pvb20gPT09IFwibnVtYmVyXCIpIHJldHVybiB6b29tICo9IGN1cnJlbnRDU1Nab29tO1xuXHRcdH1cblx0XHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudEVsZW1lbnQpO1xuXHRcdGlmIChzdHlsZS56b29tICYmIHN0eWxlLnpvb20gIT09IFwibm9ybWFsXCIpIHJldHVybiB6b29tICo9IHBhcnNlRmxvYXQoc3R5bGUuem9vbSk7XG5cdFx0aWYgKHN0eWxlLnpvb20gJiYgc3R5bGUuem9vbSAhPT0gXCJub3JtYWxcIiB8fCBcImN1cnJlbnRDU1Nab29tXCIgaW4gY3VycmVudEVsZW1lbnQpIHJldHVybiB6b29tO1xuXHRcdGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBjdXJyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcblx0fVxuXHRyZXR1cm4gem9vbTtcbn07XG52YXIgZ2V0UHhWYWx1ZSA9IChlbGVtZW50LCBuYW1lKSA9PiB7XG5cdHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlPy4oZWxlbWVudCwgbmFtZSk7XG59O1xudmFyIGdldFBhZGRpbmcgPSAoc3JjLCBheGlzKSA9PiB7XG5cdGlmIChheGlzID09IFwiaW5saW5lXCIpIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWlubGluZS1zdGFydFwiKSArIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctaW5saW5lLWVuZFwiKTtcblx0cmV0dXJuIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctYmxvY2stc3RhcnRcIikgKyBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWJsb2NrLWVuZFwiKTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9CZWhhdmlvci50c1xudmFyIGJvdW5kQmVoYXZpb3JzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYmluZEJlaGF2aW9yID0gKGVsZW1lbnQsIGJlaFNldCwgYmVoYXZpb3IpID0+IHtcblx0bmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdGlmICghYmVoU2V0LmhhcyhiZWhhdmlvcikpIGJlaFNldC5hZGQoYmVoYXZpb3IpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdEJlaGF2aW9ycyA9IChlbGVtZW50LCBiZWhhdmlvcnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChiZWhhdmlvcnMpIHtcblx0XHRjb25zdCBiZWhTZXQgPSBib3VuZEJlaGF2aW9ycy5nZXRPckluc2VydChlbGVtZW50LCAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcblx0XHRbLi4uYmVoYXZpb3JzPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRCZWhhdmlvcihlbGVtZW50LCBiZWhTZXQsIGUpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9TdG9yZS50c1xudmFyIG5hbWVkU3RvcmVNYXBzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BuYW1lZFN0b3JlTWFwc1wiKTtcbnZhciBuYW1lZFN0b3JlTWFwcyA9IGdsb2JhbFRoaXNbbmFtZWRTdG9yZU1hcHNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGdldFN0b3Jlc09mRWxlbWVudCA9IChtYXAsIGVsZW1lbnQpID0+IHtcblx0Y29uc3QgRSA9IFsuLi5tYXAuZW50cmllcygpIHx8IFtdXTtcblx0cmV0dXJuIG5ldyBNYXAoRT8ubWFwPy4oKFtuLCBtXSkgPT4gW24sIG0/LmdldD8uKGVsZW1lbnQpXSk/LmZpbHRlcj8uKChbbiwgZV0pID0+ICEhZSkgfHwgW10pO1xufTtcbnZhciBpc1dlYWtDb21wYXRpYmxlID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuICh0eXBlb2YgZWxlbWVudCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBlbGVtZW50ID09IFwiZnVuY3Rpb25cIikgJiYgZWxlbWVudCAhPSBudWxsO1xufTtcbnZhciBiaW5kU3RvcmUgPSAoZWxlbWVudCwgbmFtZSwgb2JqKSA9PiB7XG5cdGlmICghaXNXZWFrQ29tcGF0aWJsZShlbGVtZW50KSAmJiBlbGVtZW50ICE9IG51bGwpIHJldHVybiBlbGVtZW50O1xuXHRsZXQgd2Vha01hcCA9IG5hbWVkU3RvcmVNYXBzLmdldChuYW1lKTtcblx0aWYgKCF3ZWFrTWFwKSB7XG5cdFx0d2Vha01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRcdG5hbWVkU3RvcmVNYXBzLnNldChuYW1lLCB3ZWFrTWFwKTtcblx0fVxuXHRpZiAoIXdlYWtNYXAuaGFzKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgd2Vha01hcC5zZXQoZWxlbWVudCwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIHJlZmxlY3RTdG9yZXMgPSAoZWxlbWVudCwgc3RvcmVzKSA9PiB7XG5cdGlmICghZWxlbWVudCB8fCAhc3RvcmVzKSByZXR1cm47XG5cdGZvciAoY29uc3QgW25hbWUsIG9ial0gb2Ygc3RvcmVzLmVudHJpZXMoKSkgYmluZFN0b3JlKGVsZW1lbnQsIG5hbWUsIG9iaik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL01peGlucy50c1xudmFyIHJlZmxlY3RNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW5zKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRpZiAobWl4aW5zKSB7XG5cdFx0Y29uc3QgbWl4aW5TZXQgPSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcblx0XHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdFx0Wy4uLm1peGlucz8udmFsdWVzPy4oKSB8fCBbXV0ubWFwKChlKSA9PiBiaW5kTWl4aW5zKGVsZW1lbnQsIGUsIG1peGluU2V0KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGdldEVsZW1lbnRSZWxhdGVkID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHtcblx0XHRzdG9yZVNldDogZ2V0U3RvcmVzT2ZFbGVtZW50KG5hbWVkU3RvcmVNYXBzLCBlbGVtZW50KSxcblx0XHRtaXhpblNldDogYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCksXG5cdFx0YmVoYXZpb3JTZXQ6IGJvdW5kQmVoYXZpb3JzPy5nZXQ/LihlbGVtZW50KVxuXHR9O1xufTtcbnZhciBiaW5kTWl4aW5zID0gKGVsZW1lbnQsIG1peGluLCBtaXhTZXQpID0+IHtcblx0Y29uc3Qgd2VsID0gbmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdG1peFNldCB8fD0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCk7XG5cdGlmICghbWl4U2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRtaXhTZXQ/LmFkZD8uKG1peGluKTtcblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHRcdGlmIChtaXhpbi5uYW1lKSBlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW10sIG1peGluLm5hbWVdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0bWl4aW4/LmNvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGJvdW5kTWl4aW5TZXRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGJvdW5kTWl4aW5TZXRcIik7XG52YXIgYm91bmRNaXhpblNldCA9IGdsb2JhbFRoaXNbYm91bmRNaXhpblNldFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluRWxlbWVudHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgbWl4aW5FbGVtZW50cyA9IGdsb2JhbFRoaXNbbWl4aW5FbGVtZW50c1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluUmVnaXN0cnlTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIik7XG52YXIgbWl4aW5SZWdpc3RyeSA9IGdsb2JhbFRoaXNbbWl4aW5SZWdpc3RyeVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgbWl4aW5OYW1lc3BhY2VTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIpO1xudmFyIG1peGluTmFtZXNwYWNlID0gZ2xvYmFsVGhpc1ttaXhpbk5hbWVzcGFjZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlcyA9IChlbGVtZW50LCBtaXhpbikgPT4ge1xuXHRpZiAodHlwZW9mIG1peGluID09IFwic3RyaW5nXCIpIG1peGluID0gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obWl4aW4pO1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdGNvbnN0IG1peGlucyA9IG5ldyBTZXQoWy4uLm5hbWVzXS5tYXAoKG4pID0+IG1peGluUmVnaXN0cnk/LmdldD8uKG4pKS5maWx0ZXIoKG0pID0+ICEhbSkpO1xuXHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRpZiAoIW1peGluRWxlbWVudHM/Lmhhcz8uKG1peGluKSkgbWl4aW5FbGVtZW50cz8uc2V0Py4obWl4aW4sIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKTtcblx0aWYgKCFib3VuZE1peGluU2V0Py5oYXM/LihlbGVtZW50KSkgYm91bmRNaXhpblNldD8uc2V0Py4oZWxlbWVudCwgbWl4aW5TZXQpO1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkgbWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0aWYgKG1peGlucy5oYXMobWl4aW4pIHx8ICFtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/Lmhhcz8uKGVsZW1lbnQpKSB7XG5cdFx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRcdG5hbWVzLmFkZChtaXhpbk5hbWVzcGFjZT8uZ2V0Py4obWl4aW4pKTtcblx0XHRcdG1peGluU2V0Py5hZGQ/LihtaXhpbik7XG5cdFx0XHRlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLm5hbWVzXS5maWx0ZXIoKG4pID0+ICEhbikuam9pbihcIiBcIikpO1xuXHRcdH1cblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHR9XG5cdGlmIChtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkge1xuXHRcdFx0bWl4aW5TZXQ/LmRlbGV0ZT8uKG1peGluKTtcblx0XHRcdG1peGluPy5kaXNjb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdH1cblx0fVxufTtcbnZhciByb290cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgYWRkUm9vdCA9IChyb290ID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKCFyb290KSByZXR1cm47XG5cdGlmICghcm9vdHM/Lmhhcz8uKHJvb3QpKSB7XG5cdFx0cm9vdHM/LmFkZD8uKHJvb3QpO1xuXHRcdG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKHJvb3QsIFwiKlwiLCBcImRhdGEtbWl4aW5cIiwgKG11dGF0aW9uKSA9PiB1cGRhdGVBbGxNaXhpbnMobXV0YXRpb24udGFyZ2V0KSk7XG5cdFx0b2JzZXJ2ZUJ5U2VsZWN0b3Iocm9vdCwgXCJbZGF0YS1taXhpbl1cIiwgKG11dGF0aW9uKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbXV0YXRpb24uYWRkZWROb2RlcykgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiByb290O1xufTtcbnZhciB1cGRhdGVBbGxNaXhpbnMgPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdFsuLi5uZXcgU2V0KFsuLi5uYW1lc10ubWFwKChuKSA9PiBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihuKSkuZmlsdGVyKChtKSA9PiAhIW0pKV0ubWFwPy4oKG0pID0+IHVwZGF0ZU1peGluQXR0cmlidXRlcyhlbGVtZW50LCBtKSk7XG59O1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCA9IChlbGVtZW50cywgbWl4aW4pID0+IHtcblx0ZWxlbWVudHMuZm9yRWFjaCgoZSkgPT4gbWl4aW4gPyB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZSwgbWl4aW4pIDogdXBkYXRlQWxsTWl4aW5zKGUpKTtcbn07XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyA9IChtaXhpbikgPT4ge1xuXHRmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbChyb290Py5xdWVyeVNlbGVjdG9yQWxsPy4oXCJbZGF0YS1taXhpbl1cIiksIG1peGluKTtcbn07XG52YXIgbmFtZVJlZ2lzdHJ5RiA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoa2V5KSA9PiB7XG5cdG1peGluUmVnaXN0cnk/LmRlbGV0ZT8uKGtleSk7XG59KTtcbnZhciByZWdpc3Rlck1peGluID0gKG5hbWUsIG1peGluKSA9PiB7XG5cdGlmICghbWl4aW5OYW1lc3BhY2U/Lmhhcz8uKG1peGluKSkge1xuXHRcdGNvbnN0IGtleSA9IG5hbWU/LnRyaW0/LigpO1xuXHRcdGlmIChrZXkpIHtcblx0XHRcdG1peGluTmFtZXNwYWNlPy5zZXQ/LihtaXhpbiwga2V5KTtcblx0XHRcdG1peGluUmVnaXN0cnk/LnNldD8uKGtleSwgbWl4aW4pO1xuXHRcdFx0bmFtZVJlZ2lzdHJ5Rj8ucmVnaXN0ZXI/LihtaXhpbiwga2V5KTtcblx0XHRcdHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMobWl4aW4pO1xuXHRcdH1cblx0fVxufTtcbmFkZFJvb3QodHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xudmFyIERPTU1peGluID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihuYW1lID0gbnVsbCkge1xuXHRcdGlmIChuYW1lKSByZWdpc3Rlck1peGluKG5hbWUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3Qod0VsZW1lbnQsIHdTZWxmLCByZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWxlbWVudCwgd1NlbGYsIHJlbGF0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRzdG9yZUZvckVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiBuYW1lZFN0b3JlTWFwcy5nZXQodGhpcy5uYW1lIHx8IFwiXCIpPy5nZXQ/LihlbGVtZW50KTtcblx0fVxuXHRyZWxhdGVkRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpO1xuXHR9XG5cdGdldCBlbGVtZW50cygpIHtcblx0XHRyZXR1cm4gbWl4aW5FbGVtZW50cz8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIG1peGluTmFtZXNwYWNlPy5nZXQ/Lih0aGlzKTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0hhbmRsZXIudHNcbnZhciBoYW5kbGVIaWRkZW4gPSAoZWxlbWVudCwgXywgdmlzaWJsZSkgPT4ge1xuXHRjb25zdCAkcmVmID0gdmlzaWJsZTtcblx0aWYgKGhhc1ZhbHVlKHZpc2libGUpKSB2aXNpYmxlID0gdmlzaWJsZS52YWx1ZTtcblx0Y29uc3QgaXNWaXNpYmxlID0gKHZpc2libGUgPSBub3JtYWxpemVQcmltaXRpdmUodmlzaWJsZSkpICE9IG51bGwgJiYgdmlzaWJsZSAhPT0gZmFsc2U7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgZWxlbWVudC5oaWRkZW4gPSAhaXNWaXNpYmxlO1xuXHRcdGVsc2UgaWYgKGlzVmlzaWJsZSkgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKTtcblx0XHRlbHNlIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIiwgXCJcIik7XG5cdH0pO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgaGFuZGxlUHJvcGVydHkgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIShwcm9wID0gdHlwZW9mIHByb3AgPT0gXCJzdHJpbmdcIiA/IGtlYmFiVG9DYW1lbChwcm9wKSA6IHByb3ApIHx8ICFlbCB8fCBbXG5cdFx0XCJzdHlsZVwiLFxuXHRcdFwiZGF0YXNldFwiLFxuXHRcdFwiYXR0cmlidXRlU3R5bGVNYXBcIixcblx0XHRcInN0eWxlTWFwXCIsXG5cdFx0XCJjb21wdXRlZFN0eWxlTWFwXCJcblx0XS5pbmRleE9mKHByb3AgfHwgXCJcIikgIT0gLTEpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0aWYgKGVsPy5bcHJvcF0gPT09IHZhbCkgcmV0dXJuIGVsO1xuXHRpZiAoZWw/Lltwcm9wXSAhPT0gdmFsKSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodmFsICE9IG51bGwpIGVsW3Byb3BdID0gdmFsO1xuXHRcdGVsc2UgZGVsZXRlIGVsW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVEYXRhc2V0ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3QgZGF0YXNldFJlZiA9IGVsPy5kYXRhc2V0O1xuXHRpZiAoIXByb3AgfHwgIWVsIHx8ICFkYXRhc2V0UmVmKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWw/LnZhbHVlO1xuXHRwcm9wID0ga2ViYWJUb0NhbWVsKHByb3ApO1xuXHRpZiAoZGF0YXNldFJlZj8uW3Byb3BdID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPT09IGZhbHNlKSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0ZWxzZSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiKSBkYXRhc2V0UmVmW3Byb3BdID0gU3RyaW5nKHZhbCk7XG5cdFx0ZWxzZSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgZGVsZXRlU3R5bGVQcm9wZXJ0eSA9IChlbCwgbmFtZSkgPT4gZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoY2FtZWxUb0tlYmFiKG5hbWUpKTtcbnZhciBoYW5kbGVTdHlsZUNoYW5nZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IHN0eWxlUmVmID0gZWw/LnN0eWxlO1xuXHRpZiAoIXByb3AgfHwgdHlwZW9mIHByb3AgIT0gXCJzdHJpbmdcIiB8fCAhZWwgfHwgIXN0eWxlUmVmKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIodmFsLCAoKSA9PiB7XG5cdFx0aWYgKGlzVmFsKHZhbCkgfHwgaGFzVmFsdWUodmFsKSB8fCBpc1ZhbHVlVW5pdCh2YWwpKSBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wLCB2YWwpO1xuXHRcdGVsc2UgaWYgKHZhbCA9PSBudWxsKSBkZWxldGVTdHlsZVByb3BlcnR5KGVsLCBwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlQXR0cmlidXRlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCFwcm9wIHx8ICFlbCkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRwcm9wID0gY2FtZWxUb0tlYmFiKHByb3ApO1xuXHRpZiAoZWw/LmdldEF0dHJpYnV0ZT8uKHByb3ApID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIgJiYgdmFsICE9IG51bGwgJiYgKHR5cGVvZiB2YWwgPT0gXCJib29sZWFuXCIgPyB2YWwgPT0gdHJ1ZSA6IHRydWUpKSBlbD8uc2V0QXR0cmlidXRlPy4ocHJvcCwgU3RyaW5nKHZhbCkpO1xuXHRcdGVsc2UgZWw/LnJlbW92ZUF0dHJpYnV0ZT8uKHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL2p1bmN0aW9uL3R5cGVzLnRzXG5mdW5jdGlvbiBqdW5jdGlvblRvQm94KGEsIGIpIHtcblx0Y29uc3QgbGVmdCA9IE1hdGgubWluKGEueCwgYi54KTtcblx0Y29uc3QgdG9wID0gTWF0aC5taW4oYS55LCBiLnkpO1xuXHRjb25zdCByaWdodCA9IE1hdGgubWF4KGEueCwgYi54KTtcblx0Y29uc3QgYm90dG9tID0gTWF0aC5tYXgoYS55LCBiLnkpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aDogcmlnaHQgLSBsZWZ0LFxuXHRcdGhlaWdodDogYm90dG9tIC0gdG9wXG5cdH07XG59XG52YXIgSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tc2VsZWN0OnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tc2VsZWN0Om1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXNlbGVjdDplbmRcIixcblx0Y2FuY2VsOiBcImp1bmN0aW9uLXNlbGVjdDpjYW5jZWxcIlxufTtcbnZhciBKVU5DVElPTl9EUkFHX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tZHJhZzpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLWRyYWc6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tZHJhZzplbmRcIlxufTtcbnZhciBKVU5DVElPTl9SRVNJWkVfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1yZXNpemU6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1yZXNpemU6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tcmVzaXplOmVuZFwiXG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vanVuY3Rpb24vSnVuY3Rpb25NaXhpbnMudHNcbnZhciBtaXhpbkRpc3Bvc2Vyc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5EaXNwb3NlcnNcIik7XG52YXIgbWl4aW5EaXNwb3NlcnMgPSBnbG9iYWxUaGlzW21peGluRGlzcG9zZXJzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcHVzaERpc3Bvc2FibGUgPSAoaG9zdCwgbWl4aW5OYW1lLCBmbikgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgbGlzdCA9IG1hcC5nZXQobWl4aW5OYW1lKSA/PyBbXTtcblx0bGlzdC5wdXNoKGZuKTtcblx0bWFwLnNldChtaXhpbk5hbWUsIGxpc3QpO1xuXHRtaXhpbkRpc3Bvc2Vycy5zZXQoaG9zdCwgbWFwKTtcbn07XG52YXIgcnVuRGlzcG9zZXJzID0gKGhvc3QsIG1peGluTmFtZSkgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCk7XG5cdGNvbnN0IGxpc3QgPSBtYXA/LmdldChtaXhpbk5hbWUpO1xuXHRpZiAoIWxpc3QpIHJldHVybjtcblx0Zm9yIChjb25zdCBmbiBvZiBsaXN0KSB0cnkge1xuXHRcdGZuKCk7XG5cdH0gY2F0Y2gge31cblx0bWFwLmRlbGV0ZShtaXhpbk5hbWUpO1xuXHRpZiAobWFwLnNpemUgPT09IDApIG1peGluRGlzcG9zZXJzLmRlbGV0ZShob3N0KTtcbn07XG52YXIgcGFyc2VQeFZhciA9IChob3N0LCBuYW1lKSA9PiB7XG5cdGNvbnN0IHJhdyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnRyaW0/LigpID8/IFwiXCI7XG5cdGNvbnN0IG4gPSBwYXJzZUZsb2F0KHJhdyk7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogMDtcbn07XG52YXIgcXVlcnlIYW5kbGUgPSAoaG9zdCwgYXR0ciwgZmFsbGJhY2spID0+IHtcblx0Y29uc3Qgc2VsID0gaG9zdC5nZXRBdHRyaWJ1dGUoYXR0cik/LnRyaW0oKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxsYmFjaztcblx0Y29uc3QgZm91bmQgPSBob3N0LnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcblx0cmV0dXJuIGZvdW5kIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBmb3VuZCA6IGZhbGxiYWNrO1xufTtcbnZhciBKdW5jdGlvblNlbGVjdE1peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0b3ZlcmxheS5jbGFzc05hbWUgPSBcInVpLWp1bmN0aW9uLXNlbGVjdC1vdmVybGF5XCI7XG5cdFx0b3ZlcmxheS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLW92ZXJsYXlcIiwgXCJcIik7XG5cdFx0b3ZlcmxheS5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6OTk5OTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDE0JSwgdHJhbnNwYXJlbnQpO2Rpc3BsYXk6bm9uZTtpbnNldDphdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtcIjtcblx0XHRjb25zdCBlbnN1cmVQb3NpdGlvbmVkID0gKCkgPT4ge1xuXHRcdFx0aWYgKChnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lihob3N0KSk/LnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSBob3N0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdH07XG5cdFx0ZW5zdXJlUG9zaXRpb25lZCgpO1xuXHRcdGhvc3QuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cdFx0bGV0IGFjdGl2ZSA9IGZhbHNlO1xuXHRcdGxldCBhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGxldCBiID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGNvbnN0IGxvY2FsUG9pbnQgPSAoZXYpID0+IHtcblx0XHRcdGNvbnN0IHIgPSBob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogZXYuY2xpZW50WCAtIHIubGVmdCxcblx0XHRcdFx0eTogZXYuY2xpZW50WSAtIHIudG9wXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y29uc3QgYXBwbHlPdmVybGF5ID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGlmIChib3gud2lkdGggPCAxICYmIGJveC5oZWlnaHQgPCAxKSB7XG5cdFx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHtib3gubGVmdH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLnRvcCA9IGAke2JveC50b3B9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2JveC53aWR0aH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmhlaWdodCA9IGAke2JveC5oZWlnaHR9cHhgO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1qdW5jdGlvbi1pZ25vcmUtc2VsZWN0XSwgW2RhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVdLCBbZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXSwgYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSkgcmV0dXJuO1xuXHRcdFx0aWYgKCEoZXYudGFyZ2V0ID09PSBob3N0IHx8IGhvc3QuY29udGFpbnMoZXYudGFyZ2V0KSkpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IHRydWU7XG5cdFx0XHRhID0gbG9jYWxQb2ludChldik7XG5cdFx0XHRiID0geyAuLi5hIH07XG5cdFx0XHRob3N0LnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0XHRhcHBseU92ZXJsYXkoKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGIgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGJveCxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IGVuZCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aG9zdC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGJveCxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRlbmQoZXYpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25DYW5jZWwgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aG9zdC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5jYW5jZWwsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7IGhvc3QgfVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgKCkgPT4ge1xuXHRcdFx0b3ZlcmxheS5yZW1vdmUoKTtcblx0XHR9KTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcmNhbmNlbFwiLCBvbkNhbmNlbCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG52YXIgSnVuY3Rpb25EcmFnTWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy14XCIsIHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKSk7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy15XCIsIHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKSk7XG5cdFx0Y29uc3QgcHJldmlvdXNUcmFuc2Zvcm0gPSBob3N0LnN0eWxlLnRyYW5zZm9ybTtcblx0XHRpZiAoIWhvc3Quc3R5bGUudHJhbnNmb3JtIHx8IGhvc3Quc3R5bGUudHJhbnNmb3JtID09PSBcIm5vbmVcIikgaG9zdC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tangtZHJhZy14LCAwKSAqIDFweCksIGNhbGModmFyKC0tangtZHJhZy15LCAwKSAqIDFweCksIDApXCI7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXCIsIGhvc3QpO1xuXHRcdGxldCBkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdGxldCBzdGFydFggPSAwO1xuXHRcdGxldCBzdGFydFkgPSAwO1xuXHRcdGxldCBiYXNlWCA9IDA7XG5cdFx0bGV0IGJhc2VZID0gMDtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdGRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdHN0YXJ0WCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzdGFydFkgPSBldi5jbGllbnRZO1xuXHRcdFx0YmFzZVggPSBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIik7XG5cdFx0XHRiYXNlWSA9IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKTtcblx0XHRcdGhhbmRsZS5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdGNsaWVudFg6IGV2LmNsaWVudFgsXG5cdFx0XHRcdFx0Y2xpZW50WTogZXYuY2xpZW50WSxcblx0XHRcdFx0XHRiYXNlWCxcblx0XHRcdFx0XHRiYXNlWVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghZHJhZ2dpbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IGR4ID0gZXYuY2xpZW50WCAtIHN0YXJ0WDtcblx0XHRcdGNvbnN0IGR5ID0gZXYuY2xpZW50WSAtIHN0YXJ0WTtcblx0XHRcdGNvbnN0IG54ID0gYmFzZVggKyBkeDtcblx0XHRcdGNvbnN0IG55ID0gYmFzZVkgKyBkeTtcblx0XHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteFwiLCBueCk7XG5cdFx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXlcIiwgbnkpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0ZHgsXG5cdFx0XHRcdFx0ZHksXG5cdFx0XHRcdFx0eDogbngsXG5cdFx0XHRcdFx0eTogbnlcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFkcmFnZ2luZykgcmV0dXJuO1xuXHRcdFx0ZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhhbmRsZS5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0eDogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdHk6IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0aG9zdC5zdHlsZS50cmFuc2Zvcm0gPSBwcmV2aW91c1RyYW5zZm9ybTtcblx0XHR9KTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmNhbmNlbFwiLCBvblVwKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG52YXIgSnVuY3Rpb25SZXNpemVNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IGhhbmRsZSA9IHF1ZXJ5SGFuZGxlKGhvc3QsIFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXCIsIGhvc3QpO1xuXHRcdGxldCByZXNpemluZyA9IGZhbHNlO1xuXHRcdGxldCBzeCA9IDA7XG5cdFx0bGV0IHN5ID0gMDtcblx0XHRsZXQgc3cgPSAwO1xuXHRcdGxldCBzaCA9IDA7XG5cdFx0Y29uc3QgbWluVyA9IE1hdGgubWF4KDEyMCwgcGFyc2VGbG9hdChob3N0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi13XCIpIHx8IFwiXCIpIHx8IDEyMCk7XG5cdFx0Y29uc3QgbWluSCA9IE1hdGgubWF4KDgwLCBwYXJzZUZsb2F0KGhvc3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLWhcIikgfHwgXCJcIikgfHwgODApO1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldCAhPT0gaGFuZGxlICYmICFoYW5kbGUuY29udGFpbnMoZXYudGFyZ2V0KSkgcmV0dXJuO1xuXHRcdFx0cmVzaXppbmcgPSB0cnVlO1xuXHRcdFx0c3ggPSBldi5jbGllbnRYO1xuXHRcdFx0c3kgPSBldi5jbGllbnRZO1xuXHRcdFx0c3cgPSBob3N0Lm9mZnNldFdpZHRoO1xuXHRcdFx0c2ggPSBob3N0Lm9mZnNldEhlaWdodDtcblx0XHRcdGhhbmRsZS5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IHN3LFxuXHRcdFx0XHRcdGhlaWdodDogc2hcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIXJlc2l6aW5nKSByZXR1cm47XG5cdFx0XHRjb25zdCBudyA9IE1hdGgubWF4KG1pblcsIHN3ICsgKGV2LmNsaWVudFggLSBzeCkpO1xuXHRcdFx0Y29uc3QgbmggPSBNYXRoLm1heChtaW5ILCBzaCArIChldi5jbGllbnRZIC0gc3kpKTtcblx0XHRcdGhvc3Quc3R5bGUud2lkdGggPSBgJHtud31weGA7XG5cdFx0XHRob3N0LnN0eWxlLmhlaWdodCA9IGAke25ofXB4YDtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IG53LFxuXHRcdFx0XHRcdGhlaWdodDogbmhcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFyZXNpemluZykgcmV0dXJuO1xuXHRcdFx0cmVzaXppbmcgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhhbmRsZS5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogaG9zdC5vZmZzZXRXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IGhvc3Qub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5uZXcgSnVuY3Rpb25TZWxlY3RNaXhpbigpO1xubmV3IEp1bmN0aW9uRHJhZ01peGluKCk7XG5uZXcgSnVuY3Rpb25SZXNpemVNaXhpbigpO1xuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IERPTU1peGluLCBKdW5jdGlvbkRyYWdNaXhpbiwgSnVuY3Rpb25SZXNpemVNaXhpbiwgSnVuY3Rpb25TZWxlY3RNaXhpbiwgTUFUQ0gsIE1PQywgTU9DRWxlbWVudCwgUkFGQmVoYXZpb3IsIFJFR0VYLCBST09ULCBXYXZ5U2hhcGVkQ2lyY2xlLCBfX2V4cG9ydFByb3BlcnRpZXMsIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMsIGFkZEV2ZW50LCBhZGRFdmVudHMsIGFkZEV2ZW50c0xpc3QsIGFkZFJvb3QsIGFkb3B0ZWRCbG9iTWFwLCBhZG9wdGVkTGF5ZXJNYXAsIGFkb3B0ZWRNYXAsIGFkb3B0ZWRTZWxlY3Rvck1hcCwgYWRvcHRlZFNoYWRvd0xheWVyTWFwLCBhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAsIGFuaW1hdGVIaWRlLCBhbmltYXRlU2hvdywgYXZhaWxTaXplLCBiYmgsIGJidywgYmluZEJlaGF2aW9yLCBiaW5kTWl4aW5zLCBiaW5kU3RvcmUsIGJsb2JVUkxNYXAsIGJvcmRlckJveEhlaWdodCwgYm9yZGVyQm94V2lkdGgsIGJvdW5kQmVoYXZpb3JzLCBib3VuZE1peGluU2V0LCBjYWNoZU1hcCwgY2JoLCBjYncsIGNoYW5nZVpvb20sIGNsYXNzZXMsIGNvbXB1dGVDYXJldFBvc2l0aW9uLCBjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQsIGNvbnRhaW5zT3JTZWxmLCBjb250ZW50Qm94SGVpZ2h0LCBjb250ZW50Qm94V2lkdGgsIGNyZWF0ZUVsZW1lbnRWYW5pbGxhLCBjcmVhdGVUeXBlZFVuaXRWYWx1ZSwgZGVsZXRlU3R5bGVQcm9wZXJ0eSwgZGV0ZWN0TW9iaWxlLCBkb0JvcmRlck9ic2VydmUsIGRvQ29udGVudE9ic2VydmUsIGZldGNoQW5kQ2FjaGUsIGZldGNoQXNJbmxpbmUsIGZpeE9yaWVudFRvU2NyZWVuLCBmaXhlZENsaWVudFpvb20sIGdldEFkb3B0ZWRTdHlsZVJ1bGUsIGdldEF2YWlsU2l6ZSwgZ2V0Qm91bmRpbmdPcmllbnRSZWN0LCBnZXRDb3JyZWN0T3JpZW50YXRpb24sIGdldEVsZW1lbnRSZWxhdGVkLCBnZXRFbGVtZW50Wm9vbSwgZ2V0RXZlbnRUYXJnZXQsIGdldE9mZnNldFBhcmVudCwgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4sIGdldFBhZGRpbmcsIGdldFByb3BlcnR5VmFsdWUsIGdldFB4VmFsdWUsIGdldFN0b3Jlc09mRWxlbWVudCwgZ2V0U3R5bGVMYXllciwgZ2V0U3R5bGVSdWxlLCBnZXRUcmFuc2Zvcm0sIGdldFRyYW5zZm9ybU9yaWdpbiwgZ2V0Wm9vbSwgaGFuZGxlQXR0cmlidXRlLCBoYW5kbGVEYXRhc2V0LCBoYW5kbGVIaWRkZW4sIGhhbmRsZVByb3BlcnR5LCBoYW5kbGVTdHlsZUNoYW5nZSwgaGFzUGFyZW50LCBoYXNoLCBodG1sLCBpbmNsdWRlU2VsZiwgaW5kZXhPZiwgaW5pdFRleHRTdHlsZSwgaW5pdFZpc2liaWxpdHksIGlzRWxlbWVudCwgaXNJbkZvY3VzLCBpc01vYmlsZSwgaXNOYXRpdmVDU1NTdHlsZVZhbHVlLCBpc05lYXJseUlkZW50aXR5LCBpc1JlYWN0aXZlU3R5bGVWYWx1ZSwgaXNWYWxpZFBhcmVudCwgbGF5ZXJDb3VudGVyLCBsb2FkQXNBZG9wdGVkLCBsb2FkQmxvYlN0eWxlLCBsb2FkSW5saW5lU3R5bGUsIGxvYWRTdHlsZVNoZWV0LCBtYWtlUkFGQ3ljbGUsIG1lYXN1cmVJbnB1dEluRm9jdXMsIG1lYXN1cmVUZXh0LCBtaXhpbkRpc3Bvc2VycywgbWl4aW5FbGVtZW50cywgbWl4aW5OYW1lc3BhY2UsIG1peGluUmVnaXN0cnksIG5hbWVSZWdpc3RyeUYsIG5hbWVkU3RvcmVNYXBzLCBvYnNlcnZlQXR0cmlidXRlLCBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3Rvciwgb2JzZXJ2ZUJvcmRlckJveCwgb2JzZXJ2ZUJ5U2VsZWN0b3IsIG9ic2VydmVDb250ZW50Qm94LCBvbkJvcmRlck9ic2VydmUsIG9uQ29udGVudE9ic2VydmUsIG9yaWVudE9mLCBvcmllbnRhdGlvbk51bWJlck1hcCwgcGFyc2VMZW5ndGgsIHBhcnNlT3JpZ2luLCBwYXNzaXZlT3B0cywgcHJlbG9hZFN0eWxlLCByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCwgcmVmbGVjdEJlaGF2aW9ycywgcmVmbGVjdE1peGlucywgcmVmbGVjdFN0b3JlcywgcmVnaXN0ZXJNaXhpbiwgcmVtb3ZlQWRvcHRlZCwgcmVtb3ZlRXZlbnQsIHJlbW92ZUV2ZW50cywgcmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50LCByb290cywgc2V0QXR0cmlidXRlcywgc2V0QXR0cmlidXRlc0lmTnVsbCwgc2V0Q2hlY2tlZCwgc2V0SWRsZUludGVydmFsLCBzZXRQcm9wZXJ0eSwgc2V0U3R5bGVJblJ1bGUsIHNldFN0eWxlUHJvcGVydHksIHNldFN0eWxlUHJvcGVydHlGYWxsYmFjaywgc2V0U3R5bGVQcm9wZXJ0eVR5cGVkLCBzZXRTdHlsZVJ1bGUsIHNldFN0eWxlUnVsZXMsIHNldFN0eWxlVVJMLCB0aHJvdHRsZU1hcCwgdW5maXhlZENsaWVudFpvb20sIHVwZGF0ZUFsbE1peGlucywgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMsIHVwZGF0ZVZQLCB1cmwsIHdoZW5BbnlTY3JlZW5DaGFuZ2VzLCB6b29tT2YsIHpvb21WYWx1ZXMgfTsiXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLGlCQUFBQSxHQUFlLGdCQUFBQyxJQUFjLGdCQUFBQyxJQUFjLFlBQUFDLEdBQVUscUJBQUFDLElBQW1CLFNBQUFDLElBQU8sZUFBQUMsSUFBYSxnQkFBQUMsSUFBYyx1QkFBQUMsSUFBcUIsc0JBQUFDLElBQW9CLCtCQUFBQyxJQUE2QixxQkFBQUMsVUFBeUI7QUFHbE4sSUFBSUMsS0FBa0MsdUJBQU8sSUFBSSxrQ0FBa0MsR0FDL0VDLEtBQTRCLFdBQVdELEVBQStCLE1BQXNCLG9CQUFJLElBQUk7QUFDeEc7QUFBQSxFQUNDO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFV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Q0FBTSxDQUFDLEdBQ2xGZCxFQUFldFgsR0FBTSxzQkFBc0J6QixFQUFTbWEsR0FBUSxhQUFhSixDQUFJLENBQUMsR0FDOUVoQixFQUFldFgsR0FBTSxzQkFBc0J6QixFQUFTbWEsR0FBUSxpQkFBaUJKLENBQUksQ0FBQyxHQUMzRTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFdBQVdQLEdBQUs7QUFDZixVQUFNL1gsSUFBTytYLEdBQUssUUFBUTtBQUMxQixXQUFJL1gsS0FBTXlYLEdBQWF6WCxHQUFNLG9CQUFvQixHQUMxQztBQUFBLEVBQ1I7QUFDRDtBQUNBLElBQUk4WCxHQUFvQjtBQUN4QixJQUFJVSxHQUFrQjtBQUN0QixJQUFJWSxHQUFvQjsiLAogICJuYW1lcyI6IFsiJGF2b2lkVHJpZ2dlciIsICJjYW1lbFRvS2ViYWIiLCAiY3Z0X2NzX3RvX29zIiwgImhhc1ZhbHVlIiwgImlzQXJyYXlPckl0ZXJhYmxlIiwgImlzVmFsIiwgImlzVmFsdWVVbml0IiwgImtlYmFiVG9DYW1lbCIsICJub3JtYWxpemVHcmlkTGF5b3V0IiwgIm5vcm1hbGl6ZVByaW1pdGl2ZSIsICJyZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwiLCAidHJ5U3RyaW5nQXNOdW1iZXIiLCAiX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCIsICJfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzIiwgIm9wdGlvbnMiLCAibmFtZSIsICJlIiwgIl9fZXhwb3J0UHJvcGVydGllcyIsICJpc01vYmlsZSIsICJjaGVjayIsICJhIiwgImRldGVjdE1vYmlsZSIsICJjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjayIsICJydW5XaGVuSWRsZSQxIiwgImNiIiwgInRpbWVvdXQiLCAiZ2V0T2Zmc2V0UGFyZW50IiwgImVsZW1lbnQiLCAiZ2V0T2Zmc2V0UGFyZW50Q2hhaW4iLCAicGFyZW50cyIsICJjdXJyZW50IiwgInBhcmVudCIsICJpc05lYXJseUlkZW50aXR5IiwgIm1hdHJpeCIsICJlcHNpbG9uIiwgIm1ha2VSQUZDeWNsZSIsICJjb250cm9sIiwgInJBRiIsICJyZXMiLCAiUkFGQmVoYXZpb3IiLCAic2hlZCIsICJST09UIiwgInNldEF0dHJpYnV0ZXNJZk51bGwiLCAiYXR0cnMiLCAidmFsdWUiLCAib2xkIiwgInNldEF0dHJpYnV0ZXMiLCAidGhyb3R0bGVNYXAiLCAic2V0SWRsZUludGVydmFsIiwgImFyZ3MiLCAic3RhdHVzIiwgInIiLCAiYm9yZGVyQm94V2lkdGgiLCAiYm9yZGVyQm94SGVpZ2h0IiwgImNvbnRlbnRCb3hXaWR0aCIsICJjb250ZW50Qm94SGVpZ2h0IiwgIm9uQm9yZGVyT2JzZXJ2ZSIsICJvbkNvbnRlbnRPYnNlcnZlIiwgImRvQ29udGVudE9ic2VydmUiLCAib2JzZXJ2ZXIiLCAiZW50cmllcyIsICJlbnRyeSIsICJjb250ZW50Qm94U2l6ZSIsICJkb0JvcmRlck9ic2VydmUiLCAiYm9yZGVyQm94U2l6ZSIsICJ1cmwiLCAidHlwZSIsICJzb3VyY2UiLCAiaHRtbCIsICJwYXJzZWQiLCAic2V0Q2hlY2tlZCIsICJpbnB1dCIsICJldiIsICJpc1ZhbGlkUGFyZW50IiwgImluZGV4T2YiLCAibm9kZSIsICJNQVRDSCIsICJSRUdFWCIsICJjcmVhdGVFbGVtZW50VmFuaWxsYSIsICJzZWxlY3RvciIsICJjcmVhdGUiLCAibWF0Y2giLCAiY2xhc3NOYW1lIiwgImlzRWxlbWVudCIsICJlbCIsICJpbmNsdWRlU2VsZiIsICJ0YXJnZXQiLCAiaGFzUGFyZW50IiwgInBhc3NpdmVPcHRzIiwgImFkZEV2ZW50IiwgIm9wdHMiLCAid3IiLCAicmVtb3ZlRXZlbnQiLCAiYWRkRXZlbnRzIiwgInJvb3QiLCAiaGFuZGxlcnMiLCAiYWRkRXZlbnRzTGlzdCIsICJldmVudHMiLCAibGlzdCIsICJjYnMiLCAicmVtb3ZlRXZlbnRzIiwgImdldEV2ZW50VGFyZ2V0IiwgInBhdGgiLCAiY29udGFpbnNPclNlbGYiLCAiYiIsICJhRWwiLCAiYkVsIiwgImFJbmRleCIsICJiSW5kZXgiLCAiTU9DRWxlbWVudCIsICJzZWwiLCAic2VsZiIsICJob3N0TWF0Y2hlZCIsICJjbG9zZXN0IiwgImhvc3QiLCAiTU9DIiwgImlzSW5Gb2N1cyIsICJzZWxlY3Rvck9yRWxlbWVudCIsICJkaXIiLCAiYWN0aXZlIiwgImlzRm9jdXNlZCIsICJpc0hvdmVyZWQiLCAiYWx0Q25kIiwgImdldFpvb20iLCAiem9vbVZhbHVlc1N5bWJvbCIsICJ6b29tVmFsdWVzIiwgInpvb21PZiIsICJjb250YWluZXIiLCAiY2hhbmdlWm9vbSIsICJzY2FsZSIsICJmaXhlZENsaWVudFpvb20iLCAidW5maXhlZENsaWVudFpvb20iLCAib3JpZW50T2YiLCAicmF3IiwgIm4iLCAiZ2V0Qm91bmRpbmdPcmllbnRSZWN0IiwgIm9yaWVudCIsICJ6b29tIiwgImJveCIsICJuYngiLCAib3JfaSIsICJ2diIsICJzaXplIiwgImxlZnRfIiwgInRvcF8iLCAicmlnaHRfIiwgImJvdHRvbV8iLCAibGVmdCIsICJyaWdodCIsICJ0b3AiLCAiYm90dG9tIiwgIndpZHRoIiwgImhlaWdodCIsICJiYnciLCAiYmJoIiwgImNidyIsICJjYmgiLCAicnVuV2hlbklkbGUiLCAiZ2V0QXZhaWxTaXplIiwgImwiLCAidnZCbG9jayIsICJhdyIsICJhaCIsICJhdmFpbFNpemUiLCAiY2xhc3NlcyIsICJvcmllbnRhdGlvbk51bWJlck1hcCIsICJ1cGRhdGVWUCIsICJydWxlIiwgInByb3BOYW1lIiwgInByb3BWYWx1ZSIsICJleGlzdHMiLCAiZ2V0Q29ycmVjdE9yaWVudGF0aW9uIiwgIm9yaWVudGF0aW9uVHlwZSIsICJwYXNzaXZlT3B0cyQxIiwgIndoZW5BbnlTY3JlZW5DaGFuZ2VzIiwgInRpY2tpbmciLCAidXBkYXRlIiwgInVuc3Vic2NyaWJlcnMiLCAidW5zdWIiLCAiZml4T3JpZW50VG9TY3JlZW4iLCAibmV4dCIsICJjdHgiLCAiaW5pdFRleHRTdHlsZSIsICJzdHlsZSIsICJmb250V2VpZ2h0IiwgImZvbnRTaXplIiwgImZvbnRGYW1pbHkiLCAiZm9udFN0cmV0Y2giLCAibWVhc3VyZVRleHQiLCAidGV4dCIsICJtZWFzdXJlSW5wdXRJbkZvY3VzIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uIiwgInBvaW50IiwgImN1cnJlbnRXaWR0aCIsICJjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQiLCAiY2xpZW50IiwgInJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50IiwgImxheW91dE92ZXJyaWRlIiwgImMiLCAiYmFzZSIsICJyZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQiLCAiZ3JpZFN5c3RlbSIsICJjbGllbnRQb2ludCIsICJtb2RlIiwgInJlY3QiLCAibGF5b3V0IiwgImNzIiwgInBsIiwgInB0IiwgInByIiwgInBiIiwgImNvbnRlbnRXIiwgImNvbnRlbnRIIiwgImNzQ29vcmQiLCAiYW5pbWF0ZVNob3ciLCAiYW5pbWF0aW9uRG9uZSIsICJhbmltYXRlIiwgImRvbmUiLCAiZW5kQW5pbWF0aW9uIiwgImV2ZW50IiwgInJlc29sdmUiLCAicmVqZWN0IiwgInByb21pc2UiLCAicmVxIiwgImFuaW1hdGVIaWRlIiwgIm9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCIsICJvbkJvcmRlck9ic2VydmUkMSIsICJvbkNvbnRlbnRPYnNlcnZlU3ltYm9sIiwgIm9uQ29udGVudE9ic2VydmUkMSIsICJ1bndyYXBGcm9tUXVlcnkiLCAibm9ybWFsaXplU2VsZWN0b3IiLCAiZmFsbGJhY2siLCAic2FmZVF1ZXJ5U2VsZWN0b3JBbGwiLCAic2FmZU1hdGNoZXMiLCAib2JzZXJ2ZUNvbnRlbnRCb3giLCAiY2FsbGJhY2tzIiwgIm9ic2VydmVCb3JkZXJCb3giLCAib2JzZXJ2ZUF0dHJpYnV0ZSIsICJhdHRyaWJ1dGUiLCAib2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IiLCAiYXR0cmlidXRlTGlzdCIsICJzIiwgIm11dGF0aW9uTGlzdCIsICJtdXRhdGlvbiIsICJhZGRlZE5vZGVzIiwgInJlbW92ZWROb2RlcyIsICJvYnNlcnZlQnlTZWxlY3RvciIsICJtdXQiLCAib2JzIiwgInVud3JhcE5vZGVzQnlTZWxlY3RvciIsICJub2RlcyIsICIkbm9kZXMiLCAib2JSZWYiLCAiaGFuZGxlTXV0YXRpb24iLCAiaGFuZGxlQ29tZSIsICJoYW5kbGVPdXRDb21lIiwgImhhbmRsZUZvY3VzQ2xpY2siLCAiZmFjdG9ycyIsICJzZWxlY3RlZCIsICJpbml0VmlzaWJpbGl0eSIsICJXYXZ5U2hhcGVkQ2lyY2xlIiwgInN0ZXBzIiwgImFtcGxpdHVkZSIsICJmcmVxIiwgInBvaW50cyIsICJpIiwgImFuZ2xlIiwgInN0ZXAiLCAidmFyaWFudCIsICJmdW5jIiwgIk9XTkVSIiwgInN0eWxlRWxlbWVudCIsICJzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0IiwgImNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudCIsICJjc3MiLCAic2V0U3R5bGVVUkwiLCAibGF5ZXIiLCAic2V0U3R5bGVSdWxlcyIsICJzZXRTdHlsZVJ1bGUiLCAiZ2V0U3R5bGVMYXllciIsICJsYXllck5hbWUiLCAic2hlZXQiLCAibGF5ZXJSdWxlSW5kZXgiLCAibGF5ZXJSdWxlIiwgInN0eWxlSWRDb3VudGVyIiwgImlzU2hhZG93Um9vdCIsICJpc0RvY3VtZW50IiwgImlzRWxlbWVudCQxIiwgImVzY2FwZUNTU0lkZW50aWZpZXIiLCAiY2hhciIsICJjcmVhdGVTdHlsZUlkIiwgImpvaW5TY29wZWRTZWxlY3RvciIsICJzY29wZSIsICJmaW5kU3R5bGVSdWxlIiwgImZ1bGxTZWxlY3RvciIsICJydWxlcyIsICJleHBlY3RlZCIsICJyZXF1ZXN0ZWQiLCAiYWN0dWFsIiwgImdldFN0eWxlUnVsZSIsICJiYXNpcyIsICJiYXNpc0VsZW1lbnQiLCAic3R5bGVJZCIsICJzdHlsZUVsZW1lbnRHbG9iYWwiLCAicnVsZUlkIiwgInByb21pc2VPckRpcmVjdCIsICJibG9iVVJMTWFwU3ltYm9sIiwgImJsb2JVUkxNYXAiLCAiY2FjaGVNYXBTeW1ib2wiLCAiY2FjaGVNYXAiLCAiZmV0Y2hBbmRDYWNoZSIsICJidXJsIiwgInByb21pc2VkIiwgImJsb2IiLCAiY2FjaGVDb250ZW50TWFwIiwgImNhY2hlQmxvYkNvbnRlbnRNYXAiLCAiZmV0Y2hBc0lubGluZSIsICJhZG9wdGVkU2VsZWN0b3JNYXBTeW1ib2wiLCAiYWRvcHRlZFNlbGVjdG9yTWFwIiwgImFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcFN5bWJvbCIsICJhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAiLCAiYWRvcHRlZExheWVyTWFwU3ltYm9sIiwgImFkb3B0ZWRMYXllck1hcCIsICJhZG9wdGVkU2hhZG93TGF5ZXJNYXBTeW1ib2wiLCAiYWRvcHRlZFNoYWRvd0xheWVyTWFwIiwgImdldEFkb3B0ZWRTdHlsZVJ1bGUiLCAidGFyZ2V0QWRvcHRlZFNoZWV0cyIsICJzZWxlY3RvcktleSIsICJzaGFkb3dNYXAiLCAic2hhZG93TGF5ZXJNYXAiLCAibGF5ZXJJbmRleCIsICJuZXdSdWxlIiwgInJ1bGVJbmRleCIsICJpc05hdGl2ZUNTU1N0eWxlVmFsdWUiLCAiQ1NTU3R5bGVWYWx1ZUN0b3IiLCAicHJvdG90eXBlIiwgImlzUmVhY3RpdmVTdHlsZVZhbHVlIiwgImdldFdpbmRvd0NvbnN0cnVjdG9yIiwgIndpbiIsICJnZXRDU1NVbml0RmFjdG9yeU5hbWUiLCAidW5pdCIsICJnZXRDU1NVbml0Q29uc3RydWN0b3JOYW1lIiwgImNyZWF0ZVR5cGVkVW5pdFZhbHVlIiwgIkNTU05hbWVzcGFjZSIsICJmYWN0b3J5TmFtZSIsICJmYWN0b3J5IiwgIkNTU1VuaXRWYWx1ZUN0b3IiLCAidG9rZW5pemVOdW1lcmljQ1NTIiwgInRva2VucyIsICJjdXJzb3IiLCAicmVzdCIsICJ3aGl0ZXNwYWNlIiwgIm51bWJlciIsICJ1bml0TWF0Y2giLCAiaWRlbnRpZmllciIsICJzeW1ib2wiLCAiTnVtZXJpY1R5cGVkT01QYXJzZXIiLCAidG9rZW4iLCAidmFsdWVzIiwgIkNvbnN0cnVjdG9yIiwgIm9wZXJhdG9yIiwgInBhcnNlVG9UeXBlZE9NIiwgImNzc1ZhbHVlIiwgImhhc1R5cGVkT00iLCAiaXNVbml0VmFsdWUiLCAidmFsIiwgInNldFByb3BlcnR5SWZOb3RFcXVhbCIsICJzdHlsZVJlZiIsICJrZWJhYiIsICJpbXBvcnRhbmNlIiwgInNldFN0eWxlUHJvcGVydHlUeXBlZCIsICJzdHlsZU1hcFJlZiIsICJzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2siLCAibmV3VmFsIiwgIm1heWJlTnVtIiwgInNldFN0eWxlUHJvcGVydHkiLCAic2V0U3R5bGVJblJ1bGUiLCAiaGFzaCIsICJzdHJpbmciLCAiaGFzaEJ1ZmZlciIsICJsb2FkU3R5bGVTaGVldCIsICJpbmxpbmUiLCAiaW50ZWdyaXR5IiwgImxvYWQiLCAiZXJyb3IiLCAibG9hZEJsb2JTdHlsZSIsICJsb2FkSW5saW5lU3R5bGUiLCAicm9vdEVsZW1lbnQiLCAiUExBQ0UiLCAic2V0UHJvcGVydHkiLCAicHJlbG9hZFN0eWxlIiwgInN0eWxlcyIsICJsb2FkQXNBZG9wdGVkIiwgImFkb3B0ZWRNYXBTeW1ib2wiLCAiYWRvcHRlZE1hcCIsICJhZG9wdGVkQmxvYk1hcFN5bWJvbCIsICJhZG9wdGVkQmxvYk1hcCIsICJsYXllckNvdW50ZXJTeW1ib2wiLCAibGF5ZXJDb3VudGVyIiwgImFwcGx5QWRvcHRlZFN0eWxlVGV4dCIsICJjc3NUZXh0IiwgIm1lc3NhZ2UiLCAiY2FjaGVkIiwgImxheWVyV3JhcHBlZCIsICJyZW1vdmVBZG9wdGVkIiwgInNoZWV0cyIsICJpZHgiLCAicGFyc2VPcmlnaW4iLCAib3JpZ2luIiwgInBhcnNlTGVuZ3RoIiwgImdldFRyYW5zZm9ybSIsICJnZXRUcmFuc2Zvcm1PcmlnaW4iLCAiY3NzT3JpZ2luIiwgImdldFByb3BlcnR5VmFsdWUiLCAic3JjIiwgImdldEVsZW1lbnRab29tIiwgImN1cnJlbnRFbGVtZW50IiwgImN1cnJlbnRDU1Nab29tIiwgImdldFB4VmFsdWUiLCAiZ2V0UGFkZGluZyIsICJheGlzIiwgImJvdW5kQmVoYXZpb3JzIiwgImJpbmRCZWhhdmlvciIsICJiZWhTZXQiLCAiYmVoYXZpb3IiLCAicmVmbGVjdEJlaGF2aW9ycyIsICJiZWhhdmlvcnMiLCAibmFtZWRTdG9yZU1hcHNTeW1ib2wiLCAibmFtZWRTdG9yZU1hcHMiLCAiZ2V0U3RvcmVzT2ZFbGVtZW50IiwgIm1hcCIsICJFIiwgIm0iLCAiaXNXZWFrQ29tcGF0aWJsZSIsICJiaW5kU3RvcmUiLCAib2JqIiwgIndlYWtNYXAiLCAicmVmbGVjdFN0b3JlcyIsICJzdG9yZXMiLCAicmVmbGVjdE1peGlucyIsICJtaXhpbnMiLCAibWl4aW5TZXQiLCAiYm91bmRNaXhpblNldCIsICJiaW5kTWl4aW5zIiwgImdldEVsZW1lbnRSZWxhdGVkIiwgIm1peGluIiwgIm1peFNldCIsICJ3ZWwiLCAibWl4aW5FbGVtZW50cyIsICJib3VuZE1peGluU2V0U3ltYm9sIiwgIm1peGluRWxlbWVudHNTeW1ib2wiLCAibWl4aW5SZWdpc3RyeVN5bWJvbCIsICJtaXhpblJlZ2lzdHJ5IiwgIm1peGluTmFtZXNwYWNlU3ltYm9sIiwgIm1peGluTmFtZXNwYWNlIiwgInVwZGF0ZU1peGluQXR0cmlidXRlcyIsICJuYW1lcyIsICJyb290cyIsICJhZGRSb290IiwgInVwZGF0ZUFsbE1peGlucyIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwiLCAiZWxlbWVudHMiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyIsICJuYW1lUmVnaXN0cnlGIiwgImtleSIsICJyZWdpc3Rlck1peGluIiwgIkRPTU1peGluIiwgIndFbGVtZW50IiwgIndTZWxmIiwgInJlbGF0ZWQiLCAiaGFuZGxlSGlkZGVuIiwgIl8iLCAidmlzaWJsZSIsICIkcmVmIiwgImlzVmlzaWJsZSIsICJoYW5kbGVQcm9wZXJ0eSIsICJwcm9wIiwgImhhbmRsZURhdGFzZXQiLCAiZGF0YXNldFJlZiIsICJkZWxldGVTdHlsZVByb3BlcnR5IiwgImhhbmRsZVN0eWxlQ2hhbmdlIiwgImhhbmRsZUF0dHJpYnV0ZSIsICJqdW5jdGlvblRvQm94IiwgIkpVTkNUSU9OX1NFTEVDVF9FVkVOVFMiLCAiSlVOQ1RJT05fRFJBR19FVkVOVFMiLCAiSlVOQ1RJT05fUkVTSVpFX0VWRU5UUyIsICJtaXhpbkRpc3Bvc2Vyc1N5bWJvbCIsICJtaXhpbkRpc3Bvc2VycyIsICJwdXNoRGlzcG9zYWJsZSIsICJtaXhpbk5hbWUiLCAiZm4iLCAicnVuRGlzcG9zZXJzIiwgInBhcnNlUHhWYXIiLCAicXVlcnlIYW5kbGUiLCAiYXR0ciIsICJmb3VuZCIsICJKdW5jdGlvblNlbGVjdE1peGluIiwgIndFbCIsICJvdmVybGF5IiwgImxvY2FsUG9pbnQiLCAiYXBwbHlPdmVybGF5IiwgIm9uRG93biIsICJvbk1vdmUiLCAiZW5kIiwgIm9uVXAiLCAib25DYW5jZWwiLCAiSnVuY3Rpb25EcmFnTWl4aW4iLCAicHJldmlvdXNUcmFuc2Zvcm0iLCAiaGFuZGxlIiwgImRyYWdnaW5nIiwgInN0YXJ0WCIsICJzdGFydFkiLCAiYmFzZVgiLCAiYmFzZVkiLCAiZHgiLCAiZHkiLCAibngiLCAibnkiLCAiSnVuY3Rpb25SZXNpemVNaXhpbiIsICJyZXNpemluZyIsICJzeCIsICJzeSIsICJzdyIsICJzaCIsICJtaW5XIiwgIm1pbkgiLCAibnciLCAibmgiXQp9Cg==

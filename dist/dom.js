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
  if (n?.composedPath && typeof n.composedPath == "function") {
    const a = n.composedPath();
    for (const u of a) if ((u instanceof HTMLElement || u instanceof Element) && u.matches?.(t))
      return u;
  }
  const r = e?.matches?.(t) ? e : null, i = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host, o = i?.matches?.(t) ? i : null, s = e?.closest?.(t) ?? r?.closest?.(t) ?? o?.closest?.(t) ?? null;
  return r ?? s ?? o;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwsIHRyeVN0cmluZ0FzTnVtYmVyIH0gZnJvbSBcIkBmZXN0LWxpYi9jb3JlXCI7XG5cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvUHJvcGVydGllcy50c1xudmFyIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyA9IGdsb2JhbFRoaXNbX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5bXG5cdHtcblx0XHRuYW1lOiBcIi0tc2NyZWVuLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jbGlwLWZyZXFcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGl4ZWwtcmF0aW9cIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMVwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudC15XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC1sZWZ0XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC14XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC15XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH1cbl0uZm9yRWFjaCgob3B0aW9ucykgPT4ge1xuXHRpZiAodHlwZW9mIENTUyA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBDU1M/LnJlZ2lzdGVyUHJvcGVydHkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdGNvbnN0IG5hbWUgPSBTdHJpbmcob3B0aW9ucz8ubmFtZSB8fCBcIlwiKS50cmltKCk7XG5cdGlmICghbmFtZSB8fCBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmhhcyhuYW1lKSkgcmV0dXJuO1xuXHR0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KG9wdGlvbnMpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKCEoU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIikpIGNvbnNvbGUud2FybihlKTtcblx0fSBmaW5hbGx5IHtcblx0XHRfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmFkZChuYW1lKTtcblx0fVxufSk7XG52YXIgX19leHBvcnRQcm9wZXJ0aWVzID0gKCkgPT4ge307XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9EZXRlY3QudHNcbnZhciBpc01vYmlsZSA9ICgpID0+IHtcblx0bGV0IGNoZWNrID0gbmF2aWdhdG9yPy51c2VyQWdlbnREYXRhPy5tb2JpbGUgfHwgZmFsc2U7XG5cdCgoYSkgPT4ge1xuXHRcdGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkgY2hlY2sgPSB0cnVlO1xuXHR9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgZ2xvYmFsVGhpcy5vcGVyYSk7XG5cdHJldHVybiBjaGVjaztcbn07XG52YXIgZGV0ZWN0TW9iaWxlID0gKCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC9BbmRyb2lkL2ksXG5cdFx0L3dlYk9TL2ksXG5cdFx0L2lQaG9uZS9pLFxuXHRcdC9pUGFkL2ksXG5cdFx0L2lQb2QvaSxcblx0XHQvQmxhY2tCZXJyeS9pLFxuXHRcdC9XaW5kb3dzIFBob25lL2lcblx0XS5zb21lKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2guYmluZChuYXZpZ2F0b3IudXNlckFnZW50KSkgJiYgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgJiYgZ2xvYmFsVGhpcy5tYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9VdGlscy50c1xudmFyIGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrID0gKCkgPT4gKHtcblx0ZGlkVGltZW91dDogZmFsc2UsXG5cdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcbn0pO1xudmFyIHJ1bldoZW5JZGxlJDEgPSAoY2IsIHRpbWVvdXQgPSAxZTMpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayhjYiwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc2V0VGltZW91dCgoKSA9PiBjYihjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjaygpKSwgMCk7XG59O1xudmFyIGdldE9mZnNldFBhcmVudCA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiBlbGVtZW50Py5vZmZzZXRQYXJlbnQgPz8gZWxlbWVudD8uaG9zdDtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4gPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBwYXJlbnRzID0gW107XG5cdGxldCBjdXJyZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRjb25zdCBwYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoY3VycmVudCk7XG5cdFx0aWYgKHBhcmVudCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MSHRtbEVsZW1lbnQpIGJyZWFrO1xuXHRcdGlmIChjdXJyZW50ID0gcGFyZW50KSBwYXJlbnRzLnB1c2goY3VycmVudCk7XG5cdH1cblx0cmV0dXJuIHBhcmVudHM7XG59O1xudmFyIGlzTmVhcmx5SWRlbnRpdHkgPSAobWF0cml4LCBlcHNpbG9uID0gMWUtNikgPT4ge1xuXHRyZXR1cm4gTWF0aC5hYnMobWF0cml4LmEgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmIpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYykgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5kIC0gMSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5lKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmYpIDwgZXBzaWxvbjtcbn07XG52YXIgbWFrZVJBRkN5Y2xlID0gKCkgPT4ge1xuXHRjb25zdCBjb250cm9sID0ge1xuXHRcdGNhbmNlbGVkOiBmYWxzZSxcblx0XHRyQUZzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHRcdGxhc3Q6IG51bGwsXG5cdFx0Y2FuY2VsKCkge1xuXHRcdFx0dGhpcy5jYW5jZWxlZCA9IHRydWU7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxhc3QpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHRzaGVkdWxlKGNiKSB7XG5cdFx0XHR0aGlzLnJBRnMuYWRkKGNiKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0fTtcblx0KGFzeW5jICgpID0+IHtcblx0XHR3aGlsZSAoIWNvbnRyb2w/LmNhbmNlbGVkKSB7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbCgoY29udHJvbD8uckFGcz8udmFsdWVzPy4oKSA/PyBbXSk/Lm1hcD8uKChyQUYpID0+IFByb21pc2UudHJ5KHJBRik/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpKSk7XG5cdFx0XHRjb250cm9sLnJBRnM/LmNsZWFyPy4oKTtcblx0XHRcdGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHtcblx0XHRcdFx0Y29udHJvbC5sYXN0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcyk7XG5cdFx0XHR9KTtcblx0XHRcdGVsc2UgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJlcywgMTYpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KSgpO1xuXHRyZXR1cm4gY29udHJvbDtcbn07XG52YXIgUkFGQmVoYXZpb3IgPSAoc2hlZCA9IG1ha2VSQUZDeWNsZSgpKSA9PiB7XG5cdHJldHVybiAoY2IpID0+IHNoZWQuc2hlZHVsZShjYik7XG59O1xudmFyIFJPT1QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xudmFyIHNldEF0dHJpYnV0ZXNJZk51bGwgPSAoZWxlbWVudCwgYXR0cnMgPSB7fSkgPT4ge1xuXHRpZiAoIWF0dHJzIHx8IHR5cGVvZiBhdHRycyAhPSBcIm9iamVjdFwiIHx8ICFlbGVtZW50KSByZXR1cm47XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0Y29uc3Qgb2xkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgaWYgKHZhbHVlICE9IG9sZCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgb2xkID09IFwiXCIgPyB2YWx1ZSA/PyBvbGQgOiBvbGQgPz8gdmFsdWUpO1xuXHR9KTtcbn07XG52YXIgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPz8gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSkpO1xuXHR9KTtcbn07XG52YXIgdGhyb3R0bGVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIHNldElkbGVJbnRlcnZhbCA9IChjYiwgdGltZW91dCA9IDFlMywgLi4uYXJncykgPT4ge1xuXHRjb25zdCBzdGF0dXMgPSB7XG5cdFx0cnVubmluZzogdHJ1ZSxcblx0XHRjYW5jZWw6ICgpID0+IHtcblx0XHRcdHN0YXR1cy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXHRydW5XaGVuSWRsZSQxKGFzeW5jICgpID0+IHtcblx0XHRpZiAoIWNiIHx8IHR5cGVvZiBjYiAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0XHR3aGlsZSAoc3RhdHVzLnJ1bm5pbmcpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKFtQcm9taXNlLnRyeShjYiwgLi4uYXJncyksIG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHRpbWVvdXQpKV0pLmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbnkoW25ldyBQcm9taXNlKChyKSA9PiBydW5XaGVuSWRsZSQxKHIsIHRpbWVvdXQpKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSk7XG5cdFx0fVxuXHRcdHN0YXR1cy5jYW5jZWwgPSAoKSA9PiB7fTtcblx0fSwgdGltZW91dCk7XG5cdHJldHVybiBzdGF0dXM/LmNhbmNlbDtcbn07XG5pZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPSBcInVuZGVmaW5lZFwiKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXN5bmMgKCkgPT4ge1xuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdHRocm90dGxlTWFwLmZvckVhY2goKGNiKSA9PiBjYj8uKCkpO1xuXHRcdGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpO1xuXHR9XG59KTtcbnZhciBib3JkZXJCb3hXaWR0aCA9IFN5bWJvbChcIkBib3JkZXItYm94LXdpZHRoXCIpO1xudmFyIGJvcmRlckJveEhlaWdodCA9IFN5bWJvbChcIkBib3JkZXItYm94LWhlaWdodFwiKTtcbnZhciBjb250ZW50Qm94V2lkdGggPSBTeW1ib2woXCJAY29udGVudC1ib3gtd2lkdGhcIik7XG52YXIgY29udGVudEJveEhlaWdodCA9IFN5bWJvbChcIkBjb250ZW50LWJveC1oZWlnaHRcIik7XG52YXIgb25Cb3JkZXJPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgb25Db250ZW50T2JzZXJ2ZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGRvQ29udGVudE9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Db250ZW50T2JzZXJ2ZS5oYXMoZWxlbWVudCkpIHtcblx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuXHRcdGVsZW1lbnRbY29udGVudEJveEhlaWdodF0gPSBlbGVtZW50LmNsaWVudEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgY29udGVudEJveFNpemUgPSBlbnRyeS5jb250ZW50Qm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGNvbnRlbnRCb3hTaXplKSB7XG5cdFx0XHRcdFx0ZWxlbWVudFtjb250ZW50Qm94V2lkdGhdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5jbGllbnRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IE1hdGgubWluKGNvbnRlbnRCb3hTaXplLmJsb2NrU2l6ZSwgZWxlbWVudC5jbGllbnRIZWlnaHQpO1xuXHRcdFx0XHRcdGNiPy4oZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRvbkNvbnRlbnRPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImNvbnRlbnQtYm94XCIgfSk7XG5cdH1cbn07XG52YXIgZG9Cb3JkZXJPYnNlcnZlID0gKGVsZW1lbnQsIGNiID0gKCkgPT4ge30pID0+IHtcblx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuXHRpZiAoIW9uQm9yZGVyT2JzZXJ2ZS5oYXMoZWxlbWVudCkpIHtcblx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgYm9yZGVyQm94U2l6ZSA9IGVudHJ5LmJvcmRlckJveFNpemVbMF07XG5cdFx0XHRcdGlmIChib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hXaWR0aF0gPSBNYXRoLm1pbihib3JkZXJCb3hTaXplLmlubGluZVNpemUsIGVsZW1lbnQub2Zmc2V0V2lkdGgpO1xuXHRcdFx0XHRcdGVsZW1lbnRbYm9yZGVyQm94SGVpZ2h0XSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50Lm9mZnNldEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQm9yZGVyT2JzZXJ2ZS5zZXQoZWxlbWVudCwgb2JzZXJ2ZXIpO1xuXHRcdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJib3JkZXItYm94XCIgfSk7XG5cdH1cbn07XG52YXIgdXJsID0gKHR5cGUsIC4uLnNvdXJjZSkgPT4ge1xuXHRyZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihzb3VyY2UsIHsgdHlwZSB9KSk7XG59O1xudmFyIGh0bWwgPSAoc291cmNlLCB0eXBlID0gXCJ0ZXh0L2h0bWxcIikgPT4ge1xuXHRjb25zdCBwYXJzZWQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHNvdXJjZSwgdHlwZSk7XG5cdHJldHVybiBwYXJzZWQucXVlcnlTZWxlY3RvcihcInRlbXBsYXRlXCIpID8/IHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwiKlwiKTtcbn07XG52YXIgc2V0Q2hlY2tlZCA9IChpbnB1dCwgdmFsdWUsIGV2KSA9PiB7XG5cdGlmICh2YWx1ZSAhPSBudWxsICYmIGlucHV0LmNoZWNrZWQgIT0gdmFsdWUpIHtcblx0XHRpZiAoaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJjaGVja2JveFwiIHx8IGlucHV0Py5bXCJ0eXBlXCJdID09IFwicmFkaW9cIiAmJiAhaW5wdXQ/LmNoZWNrZWQpIHtcblx0XHRcdGlucHV0Py5jbGljaz8uKCk7XG5cdFx0XHRldj8ucHJldmVudERlZmF1bHQ/LigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbnB1dC5jaGVja2VkID0gISF2YWx1ZTtcblx0XHRcdGlucHV0Py5kaXNwYXRjaEV2ZW50Py4obmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fVxufTtcbnZhciBpc1ZhbGlkUGFyZW50ID0gKHBhcmVudCkgPT4ge1xuXHRyZXR1cm4gcGFyZW50ICE9IG51bGwgJiYgcGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgIShwYXJlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50IHx8IHBhcmVudCBpbnN0YW5jZW9mIEhUTUxCb2R5RWxlbWVudCkgPyBwYXJlbnQgOiBudWxsO1xufTtcbnZhciBpbmRleE9mID0gKGVsZW1lbnQsIG5vZGUpID0+IHtcblx0aWYgKGVsZW1lbnQgPT0gbnVsbCB8fCBub2RlID09IG51bGwpIHJldHVybiAtMTtcblx0cmV0dXJuIEFycmF5LmZyb20oZWxlbWVudD8uY2hpbGROb2RlcyA/PyBbXSk/LmluZGV4T2Y/Lihub2RlKSA/PyAtMTtcbn07XG52YXIgTUFUQ0ggPSBcIigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKilcIjtcbnZhciBSRUdFWCA9IFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCI7XG52YXIgY3JlYXRlRWxlbWVudFZhbmlsbGEgPSAoc2VsZWN0b3IpID0+IHtcblx0aWYgKHNlbGVjdG9yID09IFwiOmZyYWdtZW50OlwiKSByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50LmJpbmQoZG9jdW1lbnQpO1xuXHRmb3IgKHZhciBub2RlID0gY3JlYXRlKFwiZGl2XCIpLCBtYXRjaCwgY2xhc3NOYW1lID0gXCJcIjsgc2VsZWN0b3IgJiYgKG1hdGNoID0gc2VsZWN0b3IubWF0Y2goXCJeKD86KC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSl8XiMoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcLigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKil8XlxcXFxbKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSg/OihbKiR8fl5dPz0pKFtcXFwiJ10pKCg/Oig/PShcXFxcXFxcXD8pKVxcXFw4LikqPylcXFxcNik/XFxcXF1cIikpOykge1xuXHRcdGlmIChtYXRjaFsxXSkgbm9kZSA9IGNyZWF0ZShtYXRjaFsxXSk7XG5cdFx0aWYgKG1hdGNoWzJdKSBub2RlLmlkID0gbWF0Y2hbMl07XG5cdFx0aWYgKG1hdGNoWzNdKSBjbGFzc05hbWUgKz0gXCIgXCIgKyBtYXRjaFszXTtcblx0XHRpZiAobWF0Y2hbNF0pIG5vZGUuc2V0QXR0cmlidXRlKG1hdGNoWzRdLCBtYXRjaFs3XSB8fCBcIlwiKTtcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG5cdH1cblx0aWYgKGNsYXNzTmFtZSkgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWUuc2xpY2UoMSk7XG5cdHJldHVybiBub2RlO1xufTtcbnZhciBpc0VsZW1lbnQgPSAoZWwpID0+IHtcblx0cmV0dXJuIGVsICE9IG51bGwgJiYgKGVsIGluc3RhbmNlb2YgTm9kZSB8fCBlbCBpbnN0YW5jZW9mIFRleHQgfHwgZWwgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgQ29tbWVudCB8fCBlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgPyBlbCA6IG51bGw7XG59O1xudmFyIGluY2x1ZGVTZWxmID0gKHRhcmdldCwgc2VsZWN0b3IpID0+IHtcblx0cmV0dXJuIHRhcmdldC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/PyAodGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpID8gdGFyZ2V0IDogbnVsbCk7XG59O1xudmFyIGhhc1BhcmVudCA9IChjdXJyZW50LCBwYXJlbnQpID0+IHtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRpZiAoIShjdXJyZW50Py5lbGVtZW50ID8/IGN1cnJlbnQpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKChjdXJyZW50Py5lbGVtZW50ID8/IGN1cnJlbnQpID09PSAocGFyZW50Py5lbGVtZW50ID8/IHBhcmVudCkpIHJldHVybiB0cnVlO1xuXHRcdGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQgPz8gKGN1cnJlbnQucGFyZW50Tm9kZSA9PSBjdXJyZW50Py5nZXRSb290Tm9kZT8uKHsgY29tcG9zZWQ6IHRydWUgfSkgPyBjdXJyZW50Py5nZXRSb290Tm9kZT8uKHsgY29tcG9zZWQ6IHRydWUgfSk/Lmhvc3QgOiBjdXJyZW50Py5wYXJlbnROb2RlKTtcblx0fVxufTtcbnZhciBwYXNzaXZlT3B0cyA9IHt9O1xuZnVuY3Rpb24gYWRkRXZlbnQodGFyZ2V0LCB0eXBlLCBjYiwgb3B0cyA9IHBhc3NpdmVPcHRzKSB7XG5cdHRhcmdldD8uYWRkRXZlbnRMaXN0ZW5lcj8uKHR5cGUsIGNiLCBvcHRzKTtcblx0Y29uc3Qgd3IgPSB0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHRhcmdldCA9PSBcImZ1bmN0aW9uXCIgJiYgIXRhcmdldD8uZGVyZWYgPyBuZXcgV2Vha1JlZih0YXJnZXQpIDogdGFyZ2V0O1xuXHRyZXR1cm4gKCkgPT4gd3I/LmRlcmVmPy4oKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKHR5cGUsIGNiLCBvcHRzKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG52YXIgYWRkRXZlbnRzID0gKHJvb3QsIGhhbmRsZXJzKSA9PiB7XG5cdHJvb3QgPSByb290IGluc3RhbmNlb2YgV2Vha1JlZiA/IHJvb3QuZGVyZWYoKSA6IHJvb3Q7XG5cdHJldHVybiBbLi4uT2JqZWN0LmVudHJpZXMoaGFuZGxlcnMpXS5tYXA/LigoW25hbWUsIGNiXSkgPT4gQXJyYXkuaXNBcnJheShjYikgPyBhZGRFdmVudChyb290LCBuYW1lLCAuLi5jYikgOiBhZGRFdmVudChyb290LCBuYW1lLCBjYikpO1xufTtcbnZhciBhZGRFdmVudHNMaXN0ID0gKGVsLCBldmVudHMpID0+IHtcblx0aWYgKGV2ZW50cykge1xuXHRcdGxldCBlbnRyaWVzID0gZXZlbnRzO1xuXHRcdGlmIChldmVudHMgaW5zdGFuY2VvZiBNYXApIGVudHJpZXMgPSBbLi4uZXZlbnRzLmVudHJpZXMoKV07XG5cdFx0ZWxzZSBlbnRyaWVzID0gWy4uLk9iamVjdC5lbnRyaWVzKGV2ZW50cyldO1xuXHRcdHJldHVybiBlbnRyaWVzLm1hcCgoW25hbWUsIGxpc3RdKSA9PiAoKGlzQXJyYXlPckl0ZXJhYmxlKGxpc3QpID8gWy4uLmxpc3RdIDogbGlzdCkgPz8gW10pPy5tYXA/LigoY2JzKSA9PiB7XG5cdFx0XHRyZXR1cm4gYWRkRXZlbnQoZWwsIG5hbWUsIGNicyk7XG5cdFx0fSkpO1xuXHR9XG59O1xudmFyIHJlbW92ZUV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gcmVtb3ZlRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogcmVtb3ZlRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgZ2V0RXZlbnRUYXJnZXQgPSAoZXYpID0+IHtcblx0aWYgKCFldikgcmV0dXJuIG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuIG5vZGU7XG5cdH1cblx0Y29uc3QgdGFyZ2V0ID0gZXY/LnRhcmdldDtcblx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiB0YXJnZXQ7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBjb250YWluc09yU2VsZiA9IChhLCBiLCBldikgPT4ge1xuXHRpZiAoYiA9PSBudWxsIHx8ICEoYiBpbnN0YW5jZW9mIE5vZGUpICYmIGI/LmVsZW1lbnQgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoYSA9PSBiIHx8IChhPy5lbGVtZW50ID8/IGEpID09IChiPy5lbGVtZW50ID8/IGIpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGNvbnN0IGFFbCA9IGE/LmVsZW1lbnQgPz8gYTtcblx0XHRjb25zdCBiRWwgPSBiPy5lbGVtZW50ID8/IGI7XG5cdFx0aWYgKHBhdGguaW5jbHVkZXMoYUVsKSAmJiBwYXRoLmluY2x1ZGVzKGJFbCkpIHtcblx0XHRcdGNvbnN0IGFJbmRleCA9IHBhdGguaW5kZXhPZihhRWwpO1xuXHRcdFx0Y29uc3QgYkluZGV4ID0gcGF0aC5pbmRleE9mKGJFbCk7XG5cdFx0XHRpZiAoYkluZGV4ID49IDAgJiYgYUluZGV4ID49IDAgJiYgYkluZGV4IDwgYUluZGV4KSByZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKGE/LmNvbnRhaW5zPy4oYj8uZWxlbWVudCA/PyBiKSB8fCBhPy5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0ID09IChiPy5lbGVtZW50ID8/IGIpKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIGZhbHNlO1xufTtcbnZhciBNT0NFbGVtZW50ID0gKGVsZW1lbnQsIHNlbGVjdG9yLCBldikgPT4ge1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcblx0XHRcdGlmIChub2RlLm1hdGNoZXM/LihzZWxlY3RvcikpIHJldHVybiBub2RlO1xuXHRcdH1cblx0fVxuXHRjb25zdCBzZWxmID0gZWxlbWVudD8ubWF0Y2hlcz8uKHNlbGVjdG9yKSA/IGVsZW1lbnQgOiBudWxsO1xuXHRjb25zdCBob3N0ID0gKGVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkgPz8gZWxlbWVudD8ucGFyZW50RWxlbWVudD8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSk/Lmhvc3Q7XG5cdGNvbnN0IGhvc3RNYXRjaGVkID0gaG9zdD8ubWF0Y2hlcz8uKHNlbGVjdG9yKSA/IGhvc3QgOiBudWxsO1xuXHRjb25zdCBjbG9zZXN0ID0gZWxlbWVudD8uY2xvc2VzdD8uKHNlbGVjdG9yKSA/PyBzZWxmPy5jbG9zZXN0Py4oc2VsZWN0b3IpID8/IGhvc3RNYXRjaGVkPy5jbG9zZXN0Py4oc2VsZWN0b3IpID8/IG51bGw7XG5cdHJldHVybiBzZWxmID8/IGNsb3Nlc3QgPz8gaG9zdE1hdGNoZWQ7XG59O1xudmFyIE1PQyA9IChlbGVtZW50LCBzZWxlY3RvcikgPT4ge1xuXHRyZXR1cm4gISFNT0NFbGVtZW50KGVsZW1lbnQsIHNlbGVjdG9yKTtcbn07XG52YXIgaXNJbkZvY3VzID0gKGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50LCBkaXIgPSBcInBhcmVudFwiKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoZWxlbWVudC5jaGVja1Zpc2liaWxpdHkgJiYgIWVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5KHtcblx0XHRjaGVja09wYWNpdHk6IHRydWUsXG5cdFx0Y2hlY2tWaXNpYmlsaXR5Q1NTOiB0cnVlXG5cdH0pKSByZXR1cm4gZmFsc2U7XG5cdGlmICghZWxlbWVudC5jaGVja1Zpc2liaWxpdHkgJiYgZWxlbWVudC5vZmZzZXRQYXJlbnQgPT09IG51bGwgJiYgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiAhPT0gXCJmaXhlZFwiKSByZXR1cm4gZmFsc2U7XG5cdGxldCBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHR3aGlsZSAoYWN0aXZlICYmIGFjdGl2ZS5zaGFkb3dSb290ICYmIGFjdGl2ZS5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQpIGFjdGl2ZSA9IGFjdGl2ZS5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG5cdGNvbnN0IGlzRm9jdXNlZCA9IGFjdGl2ZSA9PT0gZWxlbWVudCB8fCBoYXNQYXJlbnQoYWN0aXZlLCBlbGVtZW50KTtcblx0Y29uc3QgaXNIb3ZlcmVkID0gZWxlbWVudC5tYXRjaGVzKFwiOmhvdmVyXCIpO1xuXHRpZiAoIWlzRm9jdXNlZCAmJiAhaXNIb3ZlcmVkICYmICFzZWxlY3Rvck9yRWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoc2VsZWN0b3JPckVsZW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIHNlbGVjdG9yT3JFbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRpZiAoZGlyID09PSBcInBhcmVudFwiKSByZXR1cm4gISFNT0NFbGVtZW50KGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50KTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSBpc0ZvY3VzZWQgPyBhY3RpdmUgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6aG92ZXJcIikgfHwgZWxlbWVudDtcblx0XHRcdFx0Y29uc3QgYWx0Q25kID0gISFNT0NFbGVtZW50KHRhcmdldCwgc2VsZWN0b3JPckVsZW1lbnQpO1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudD8ucXVlcnlTZWxlY3Rvcj8uKHNlbGVjdG9yT3JFbGVtZW50KSAhPSBudWxsIHx8IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWxlY3Rvck9yRWxlbWVudCkgfHwgYWx0Q25kO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoc2VsZWN0b3JPckVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0aWYgKGRpciA9PT0gXCJwYXJlbnRcIikgcmV0dXJuIGhhc1BhcmVudChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCkgfHwgZmFsc2U7XG5cdFx0XHRlbHNlIHJldHVybiBoYXNQYXJlbnQoc2VsZWN0b3JPckVsZW1lbnQsIGVsZW1lbnQpIHx8IGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9ab29tLnRzXG52YXIgZ2V0Wm9vbSA9ICgpID0+IHtcblx0aWYgKFwiY3VycmVudENTU1pvb21cIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY3VycmVudENTU1pvb20gfHwgMTtcblx0cmV0dXJuIHBhcnNlRmxvYXQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItLXNjYWxpbmdcIikgfHwgXCIxXCIpIHx8IDE7XG59O1xudmFyIHpvb21WYWx1ZXNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQHpvb21WYWx1ZXNcIik7XG52YXIgem9vbVZhbHVlcyA9IGdsb2JhbFRoaXNbem9vbVZhbHVlc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHpvb21PZiA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiB6b29tVmFsdWVzLmdldE9ySW5zZXJ0Q29tcHV0ZWQoZWxlbWVudCwgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IChlbGVtZW50Py5tYXRjaGVzPy4oXCIudWktb3JpZW50Ym94XCIpID8gZWxlbWVudCA6IG51bGwpIHx8IGVsZW1lbnQ/LmNsb3Nlc3Q/LihcIi51aS1vcmllbnRib3hcIikgfHwgZG9jdW1lbnQuYm9keTtcblx0XHRpZiAoY29udGFpbmVyPy56b29tKSByZXR1cm4gY29udGFpbmVyPy56b29tIHx8IDE7XG5cdFx0aWYgKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tKSByZXR1cm4gZWxlbWVudD8uY3VycmVudENTU1pvb20gfHwgMTtcblx0fSk7XG59O1xudmFyIGNoYW5nZVpvb20gPSAoc2NhbGUgPSAxKSA9PiB7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2NhbGluZ1wiLCBzY2FsZSk7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInNjYWxpbmdcIiwge1xuXHRcdGRldGFpbDogeyB6b29tOiBzY2FsZSB9LFxuXHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHR9KSk7XG5cdHJldHVybiBzY2FsZTtcbn07XG52YXIgZml4ZWRDbGllbnRab29tID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSAhPSBudWxsID8gMSA6IHpvb21PZihlbGVtZW50KSkgfHwgMTtcbn07XG52YXIgdW5maXhlZENsaWVudFpvb20gPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tID09IG51bGwgPyAxIDogZWxlbWVudD8uY3VycmVudENTU1pvb20pIHx8IDE7XG59O1xudmFyIG9yaWVudE9mID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0Y29uc3QgY29udGFpbmVyID0gKGVsZW1lbnQ/Lm1hdGNoZXM/LihcIltvcmllbnRdLCBbZGF0YS1taXhpbj1cXFwidWktb3JpZW50Ym94XFxcIl1cIikgPyBlbGVtZW50IDogbnVsbCkgfHwgZWxlbWVudD8uY2xvc2VzdD8uKFwiW29yaWVudF0sIFtkYXRhLW1peGluPVxcXCJ1aS1vcmllbnRib3hcXFwiXVwiKSB8fCBlbGVtZW50O1xuXHRpZiAoY29udGFpbmVyPy5oYXNBdHRyaWJ1dGU/LihcIm9yaWVudFwiKSkgcmV0dXJuIHBhcnNlSW50KGNvbnRhaW5lcj8uZ2V0QXR0cmlidXRlPy4oXCJvcmllbnRcIikgfHwgXCIwXCIpIHx8IDA7XG5cdGlmIChjb250YWluZXI/Lm9yaWVudCAhPSBudWxsICYmIE51bWJlci5pc0Zpbml0ZShOdW1iZXIoY29udGFpbmVyLm9yaWVudCkpKSByZXR1cm4gTnVtYmVyKGNvbnRhaW5lci5vcmllbnQpIHx8IDA7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gY29udGFpbmVyPy5zdHlsZT8uZ2V0UHJvcGVydHlWYWx1ZT8uKFwiLS1vcmllbnRcIikgfHwgKHR5cGVvZiBnZXRDb21wdXRlZFN0eWxlID09PSBcImZ1bmN0aW9uXCIgJiYgY29udGFpbmVyID8gZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoXCItLW9yaWVudFwiKSA6IFwiXCIpIHx8IFwiXCI7XG5cdFx0Y29uc3QgbiA9IHBhcnNlSW50KFN0cmluZyhyYXcpLnRyaW0oKSwgMTApO1xuXHRcdGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHJldHVybiBuO1xuXHR9IGNhdGNoIHt9XG5cdHJldHVybiAwO1xufTtcbnZhciBnZXRCb3VuZGluZ09yaWVudFJlY3QgPSAoZWxlbWVudCwgb3JpZW50ID0gbnVsbCkgPT4ge1xuXHRjb25zdCB6b29tID0gdW5maXhlZENsaWVudFpvb20oZWxlbWVudCkgfHwgMTtcblx0Y29uc3QgYm94ID0gZWxlbWVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKTtcblx0Y29uc3QgbmJ4ID0ge1xuXHRcdGxlZnQ6IGJveD8ubGVmdCAvIHpvb20sXG5cdFx0cmlnaHQ6IGJveD8ucmlnaHQgLyB6b29tLFxuXHRcdHRvcDogYm94Py50b3AgLyB6b29tLFxuXHRcdGJvdHRvbTogYm94Py5ib3R0b20gLyB6b29tLFxuXHRcdHdpZHRoOiBib3g/LndpZHRoIC8gem9vbSxcblx0XHRoZWlnaHQ6IGJveD8uaGVpZ2h0IC8gem9vbVxuXHR9O1xuXHRjb25zdCBvcl9pID0gb3JpZW50ID8/IChvcmllbnRPZihlbGVtZW50KSB8fCAwKTtcblx0Y29uc3QgdnYgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LnZpc3VhbFZpZXdwb3J0IDogbnVsbDtcblx0Y29uc3Qgc2l6ZSA9IFsoKHZ2Py53aWR0aCA/PyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/LmNsaWVudFdpZHRoID8/IHdpbmRvdy5pbm5lcldpZHRoKSB8fCAxKSAvIHpvb20sICgodnY/LmhlaWdodCA/PyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/LmNsaWVudEhlaWdodCA/PyB3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDEpIC8gem9vbV07XG5cdGNvbnN0IFtsZWZ0XywgdG9wX10gPSBjdnRfY3NfdG9fb3MoW25ieC5sZWZ0LCBuYngudG9wXSwgc2l6ZSwgb3JfaSk7XG5cdGNvbnN0IFtyaWdodF8sIGJvdHRvbV9dID0gY3Z0X2NzX3RvX29zKFtuYngucmlnaHQsIG5ieC5ib3R0b21dLCBzaXplLCBvcl9pKTtcblx0Y29uc3QgW2xlZnQsIHJpZ2h0XSA9IG9yX2kgPT0gMCB8fCBvcl9pID09IDMgPyBbbGVmdF8sIHJpZ2h0X10gOiBbcmlnaHRfLCBsZWZ0X107XG5cdGNvbnN0IFt0b3AsIGJvdHRvbV0gPSBvcl9pID09IDAgfHwgb3JfaSA9PSAxID8gW3RvcF8sIGJvdHRvbV9dIDogW2JvdHRvbV8sIHRvcF9dO1xuXHRjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBvcl9pICUgMiA/IFtuYnguaGVpZ2h0LCBuYngud2lkdGhdIDogW25ieC53aWR0aCwgbmJ4LmhlaWdodF07XG5cdHJldHVybiB7XG5cdFx0bGVmdCxcblx0XHR0b3AsXG5cdFx0cmlnaHQsXG5cdFx0Ym90dG9tLFxuXHRcdHdpZHRoLFxuXHRcdGhlaWdodFxuXHR9O1xufTtcbnZhciBiYncgPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtib3JkZXJCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQgOiBlbFtib3JkZXJCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoO1xudmFyIGJiaCA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2JvcmRlckJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGggOiBlbFtib3JkZXJCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQ7XG52YXIgY2J3ID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbY29udGVudEJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodCA6IGVsW2NvbnRlbnRCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoO1xudmFyIGNiaCA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2NvbnRlbnRCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoIDogZWxbY29udGVudEJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodDtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1ZpZXdwb3J0LnRzXG52YXIgcnVuV2hlbklkbGUgPSAoY2IsIHRpbWVvdXQgPSAxMDApID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayhjYiwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc2V0VGltZW91dCgoKSA9PiBjYih7XG5cdFx0ZGlkVGltZW91dDogZmFsc2UsXG5cdFx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxuXHR9KSwgMCk7XG59O1xudmFyIGdldEF2YWlsU2l6ZSA9ICgpID0+IHtcblx0Y29uc3QgbCA9IHR5cGVvZiBtYXRjaE1lZGlhICE9IFwidW5kZWZpbmVkXCIgPyBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpPy5tYXRjaGVzIDogZmFsc2U7XG5cdGNvbnN0IHZ2ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGw7XG5cdGNvbnN0IHZ2QmxvY2sgPSB2diA/IHtcblx0XHRcIi0tdnYtd2lkdGhcIjogYCR7dnYud2lkdGh9cHhgLFxuXHRcdFwiLS12di1oZWlnaHRcIjogYCR7dnYuaGVpZ2h0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dnYub2Zmc2V0TGVmdH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC10b3BcIjogYCR7dnYub2Zmc2V0VG9wfXB4YCxcblx0XHRcIi0tdnYtc2NhbGVcIjogU3RyaW5nKHZ2LnNjYWxlID8/IDEpXG5cdH0gOiB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBgJHt3aW5kb3cuaW5uZXJXaWR0aH1weGAgOiBcIjBweFwiLFxuXHRcdFwiLS12di1oZWlnaHRcIjogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGAgOiBcIjBweFwiLFxuXHRcdFwiLS12di1vZmZzZXQtbGVmdFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1vZmZzZXQtdG9wXCI6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFwiMVwiXG5cdH07XG5cdGlmICh0eXBlb2Ygc2NyZWVuICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRjb25zdCBhdyA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIjtcblx0XHRjb25zdCBhaCA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBsID8gYWggOiBhdyxcblx0XHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogbCA/IGF3IDogYWgsXG5cdFx0XHRcIi0tdmlldy1oZWlnaHRcIjogTWF0aC5taW4oc2NyZWVuPy5hdmFpbEhlaWdodCwgd2luZG93Py5pbm5lckhlaWdodCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogU3RyaW5nKGRldmljZVBpeGVsUmF0aW8gfHwgMSksXG5cdFx0XHQuLi52dkJsb2NrXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdFwiLS1zY3JlZW4td2lkdGhcIjogXCIwcHhcIixcblx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1hdmFpbC13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tdmlldy1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogXCIxXCIsXG5cdFx0Li4udnZCbG9ja1xuXHR9O1xufTtcbnZhciBhdmFpbFNpemUgPSBnZXRBdmFpbFNpemUoKTtcbnZhciBjbGFzc2VzID0gW1tcIjpyb290LCA6aG9zdCwgOnNjb3BlXCIsIGF2YWlsU2l6ZV1dO1xudmFyIG9yaWVudGF0aW9uTnVtYmVyTWFwID0ge1xuXHRcInBvcnRyYWl0LXByaW1hcnlcIjogMCxcblx0XCJsYW5kc2NhcGUtcHJpbWFyeVwiOiAxLFxuXHRcInBvcnRyYWl0LXNlY29uZGFyeVwiOiAyLFxuXHRcImxhbmRzY2FwZS1zZWNvbmRhcnlcIjogM1xufTtcbnZhciB1cGRhdGVWUCA9IChldikgPT4ge1xuXHRjb25zdCBydWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRPYmplY3QuYXNzaWduKGF2YWlsU2l6ZSwgZ2V0QXZhaWxTaXplKCkpO1xuXHRPYmplY3QuZW50cmllcyhhdmFpbFNpemUpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFZhbHVlXSkgPT4ge1xuXHRcdGNvbnN0IGV4aXN0cyA9IHJ1bGU/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKTtcblx0XHRpZiAoIWV4aXN0cyB8fCBleGlzdHMgIT0gcHJvcFZhbHVlKSBydWxlPy5zdHlsZT8uc2V0UHJvcGVydHk/Lihwcm9wTmFtZSwgcHJvcFZhbHVlIHx8IFwiXCIsIFwiXCIpO1xuXHR9KTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRhdGlvbi1zZWNvbmRhcnlcIiwgc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZT8uZW5kc1dpdGg/LihcInNlY29uZGFyeVwiKSA/IFwiMVwiIDogXCIwXCIpO1xufTtcbnZhciBnZXRDb3JyZWN0T3JpZW50YXRpb24gPSAoKSA9PiB7XG5cdGxldCBvcmllbnRhdGlvblR5cGUgPSBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlIHx8IFwicG9ydHJhaXQtcHJpbWFyeVwiO1xuXHRpZiAoIWdsb2JhbFRoaXMubWF0Y2hNZWRpYShcIigoZGlzcGxheS1tb2RlOiBmdWxsc2NyZWVuKSBvciAoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKSBvciAoZGlzcGxheS1tb2RlOiB3aW5kb3ctY29udHJvbHMtb3ZlcmxheSkpXCIpLm1hdGNoZXMpIHtcblx0XHRpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwibGFuZHNjYXBlXCIsIFwicG9ydHJhaXRcIik7XG5cdFx0ZWxzZSBpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcInBvcnRyYWl0XCIsIFwibGFuZHNjYXBlXCIpO1xuXHR9XG5cdHJldHVybiBvcmllbnRhdGlvblR5cGU7XG59O1xudmFyIHBhc3NpdmVPcHRzJDEgPSB7IHBhc3NpdmU6IHRydWUgfTtcbnZhciB3aGVuQW55U2NyZWVuQ2hhbmdlcyA9IChjYikgPT4ge1xuXHRsZXQgdGlja2luZyA9IGZhbHNlO1xuXHRjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cdFx0aWYgKCF0aWNraW5nKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHR1cGRhdGVWUCgpO1xuXHRcdFx0XHRjYigpO1xuXHRcdFx0XHR0aWNraW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHRcdHRpY2tpbmcgPSB0cnVlO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgdW5zdWJzY3JpYmVycyA9IFtdO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQsIFwiZ2VvbWV0cnljaGFuZ2VcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInNjcm9sbFwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdz8udmlzdWFsVmlld3BvcnQsIFwicmVzaXplXCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoc2NyZWVuPy5vcmllbnRhdGlvbiwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3csIFwicmVzaXplXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCwgXCJmdWxsc2NyZWVuY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKSwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCBcImNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dXBkYXRlKCk7XG5cdHJ1bldoZW5JZGxlKCgpID0+IHVwZGF0ZSgpLCAxMDApO1xuXHRyZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmVycy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG59O1xudmFyIGZpeE9yaWVudFRvU2NyZWVuID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKCFlbGVtZW50Py5jbGFzc0xpc3Q/LmNvbnRhaW5zPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpKSB7XG5cdFx0ZWxlbWVudD8uY2xhc3NMaXN0Py5hZGQ/LihcIm5hdGl2ZS1wb3J0cmFpdC1vcHRpbWl6ZWRcIik7XG5cdFx0cmV0dXJuIHdoZW5BbnlTY3JlZW5DaGFuZ2VzKCgpID0+IHtcblx0XHRcdGNvbnN0IG5leHQgPSBvcmllbnRhdGlvbk51bWJlck1hcD8uW2dldENvcnJlY3RPcmllbnRhdGlvbigpXSA/PyAwO1xuXHRcdFx0ZWxlbWVudC5vcmllbnQgPSBuZXh0O1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdFx0ZWxlbWVudC5zdHlsZT8uc2V0UHJvcGVydHk/LihcIi0tb3JpZW50XCIsIFN0cmluZyhuZXh0KSk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9NZWFzdXJlLnRzXG52YXIgY3R4ID0gbmV3IE9mZnNjcmVlbkNhbnZhcygxLCAxKS5nZXRDb250ZXh0KFwiMmRcIik7XG52YXIgaW5pdFRleHRTdHlsZSA9IChlbGVtZW50LCBjdHgpID0+IHtcblx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIFwiXCIpO1xuXHRpZiAoY3R4ICYmIHN0eWxlKSB7XG5cdFx0Y29uc3QgZm9udFdlaWdodCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXdlaWdodFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdGNvbnN0IGZvbnRTaXplID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSB8fCBcIjE2cHhcIjtcblx0XHRjb25zdCBmb250RmFtaWx5ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtZmFtaWx5XCIpIHx8IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdFx0Y29uc3QgZm9udFN0cmV0Y2ggPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zdHJldGNoXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250U3RyZXRjaCA9IGZvbnRTdHJldGNoLmluY2x1ZGVzKFwiJVwiKSA/IFwibm9ybWFsXCIgOiBmb250U3RyZXRjaDtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHgubGV0dGVyU3BhY2luZyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJsZXR0ZXItc3BhY2luZ1wiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250S2VybmluZyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWtlcm5pbmdcIikgfHwgXCJhdXRvXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRWYXJpYW50Q2FwcyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXZhcmlhbnQtY2Fwc1wiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250ID0gYCR7Zm9udFdlaWdodH0gJHtmb250U2l6ZX0gJHtmb250RmFtaWx5fWA7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxufTtcbnZhciBtZWFzdXJlVGV4dCA9ICh0ZXh0LCBlbGVtZW50KSA9PiB7XG5cdGlmIChjdHgpIHtcblx0XHRpbml0VGV4dFN0eWxlKGVsZW1lbnQsIGN0eCk7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBjdHgubWVhc3VyZVRleHQodGV4dCk7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxuXHRyZXR1cm4geyB3aWR0aDogbnVsbCB9O1xufTtcbnZhciBtZWFzdXJlSW5wdXRJbkZvY3VzID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IHRleHQgPSBpbnB1dC52YWx1ZS5zbGljZSgwLCBpbnB1dC5zZWxlY3Rpb25FbmQgfHwgMCk7XG5cdHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0LCBpbnB1dCk7XG59O1xudmFyIGNvbXB1dGVDYXJldFBvc2l0aW9uID0gKGlucHV0LCBwb2ludCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQ/LnZhbHVlIHx8IFwiXCI7XG5cdGlmIChjdHgpIHtcblx0XHRpbml0VGV4dFN0eWxlKGlucHV0LCBjdHgpO1xuXHRcdGxldCBjdXJyZW50V2lkdGggPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VycmVudFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQuc2xpY2UoMCwgaSkpPy53aWR0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggPT0gbnVsbCkgcmV0dXJuIHRleHQubGVuZ3RoO1xuXHRcdFx0aWYgKGN1cnJlbnRXaWR0aCAhPSBudWxsICYmIGN1cnJlbnRXaWR0aCA+PSBwb2ludFswXSkgcmV0dXJuIE1hdGgubWF4KGkgLSAxLCAwKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQubGVuZ3RoO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQgPSAoaW5wdXQsIGNsaWVudCkgPT4ge1xuXHRjb25zdCBib3ggPSBpbnB1dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Y29uc3QgcG9pbnQgPSBbY2xpZW50WzBdIC0gYm94LmxlZnQgLyB1bmZpeGVkQ2xpZW50Wm9vbSgpLCBjbGllbnRbMV0gLSBib3gudG9wIC8gdW5maXhlZENsaWVudFpvb20oKV07XG5cdHJldHVybiBjb21wdXRlQ2FyZXRQb3NpdGlvbihpbnB1dCwgcG9pbnQpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0xhdW5jaGVyR3JpZC50c1xudmFyIHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50ID0gKGVsLCBsYXlvdXRPdmVycmlkZSkgPT4ge1xuXHRjb25zdCBjID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLWNvbHVtbnNcIikgfHwgXCJcIiwgMTApO1xuXHRjb25zdCByID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLXJvd3NcIikgfHwgXCJcIiwgMTApO1xuXHRjb25zdCBiYXNlID0gbm9ybWFsaXplR3JpZExheW91dChsYXlvdXRPdmVycmlkZSA/PyBbNCwgOF0pO1xuXHRyZXR1cm4gW051bWJlci5pc0Zpbml0ZShjKSAmJiBjID4gMCA/IGMgOiBiYXNlWzBdLCBOdW1iZXIuaXNGaW5pdGUocikgJiYgciA+IDAgPyByIDogYmFzZVsxXV07XG59O1xudmFyIHJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCA9IChncmlkU3lzdGVtLCBjbGllbnRQb2ludCwgYXJncywgbW9kZSA9IFwiZmxvb3JcIikgPT4ge1xuXHRpZiAoIWdyaWRTeXN0ZW0pIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IHJlY3QgPSBncmlkU3lzdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XG5cdGlmICghcmVjdCkgcmV0dXJuIFswLCAwXTtcblx0Y29uc3QgbGF5b3V0ID0gcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQoZ3JpZFN5c3RlbSwgYXJncz8ubGF5b3V0KTtcblx0Y29uc3Qgb3JpZW50ID0gb3JpZW50T2YoZ3JpZFN5c3RlbSk7XG5cdGNvbnN0IGNzID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oZ3JpZFN5c3RlbSk7XG5cdGNvbnN0IHBsID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ0xlZnQpIHx8IDA7XG5cdGNvbnN0IHB0ID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1RvcCkgfHwgMDtcblx0Y29uc3QgcHIgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nUmlnaHQpIHx8IDA7XG5cdGNvbnN0IHBiID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ0JvdHRvbSkgfHwgMDtcblx0Y29uc3QgY29udGVudFcgPSBNYXRoLm1heCgxLCAocmVjdC53aWR0aCB8fCBncmlkU3lzdGVtLmNsaWVudFdpZHRoIHx8IDEpIC0gcGwgLSBwcik7XG5cdGNvbnN0IGNvbnRlbnRIID0gTWF0aC5tYXgoMSwgKHJlY3QuaGVpZ2h0IHx8IGdyaWRTeXN0ZW0uY2xpZW50SGVpZ2h0IHx8IDEpIC0gcHQgLSBwYik7XG5cdGNvbnN0IGNzQ29vcmQgPSBbKGNsaWVudFBvaW50Py5bMF0gfHwgMCkgLSByZWN0LmxlZnQgLSBwbCwgKGNsaWVudFBvaW50Py5bMV0gfHwgMCkgLSByZWN0LnRvcCAtIHB0XTtcblx0cmV0dXJuIHJlc29sdmVMb2NhbFBvaW50VG9HcmlkQ2VsbChjc0Nvb3JkLCBbY29udGVudFcsIGNvbnRlbnRIXSwgbGF5b3V0LCBvcmllbnQsIHtcblx0XHRtb2RlLFxuXHRcdHJlZGlyZWN0OiB7XG5cdFx0XHRpdGVtOiBhcmdzPy5pdGVtLFxuXHRcdFx0bGlzdDogYXJncz8ubGlzdCxcblx0XHRcdGl0ZW1zOiBhcmdzPy5pdGVtc1xuXHRcdH1cblx0fSk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvQW5pbWF0aW9uLnRzXG52YXIgYW5pbWF0ZVNob3cgPSBhc3luYyAodGFyZ2V0KSA9PiB7XG5cdGNvbnN0IGFuaW1hdGlvbkRvbmUgPSAoKSA9PiB7XG5cdFx0aWYgKCF0YXJnZXQ/Lmhhc0F0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikpIHtcblx0XHRcdHRhcmdldD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpO1xuXHRcdFx0dGFyZ2V0Py5kaXNwYXRjaEV2ZW50Py4obmV3IEN1c3RvbUV2ZW50KFwidTItYXBwZWFyXCIsIHtcblx0XHRcdFx0ZGV0YWlsOiB7fSxcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fTtcblx0aWYgKCF0YXJnZXQ/Lmhhc0F0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikgJiYgdGFyZ2V0Py5kaXNwYXRjaEV2ZW50Py4obmV3IEN1c3RvbUV2ZW50KFwidTItYmVmb3JlLXNob3dcIiwge1xuXHRcdGRldGFpbDoge30sXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdH0pKSkge1xuXHRcdGlmICghbWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpXCIpLm1hdGNoZXMgJiYgIXRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpICYmICF0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1pbnN0YW50XCIpICYmIHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSA9PSBudWxsKSB0YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiLCBcIlwiKTtcblx0XHRpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIikgJiYgdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpID09IG51bGwpIHtcblx0XHRcdGNvbnN0IGFuaW1hdGUgPSB0YXJnZXQuYW5pbWF0ZShbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdFx0b2Zmc2V0OiAwLFxuXHRcdFx0XHRcdFwiLS1vcGFjaXR5XCI6IDAsXG5cdFx0XHRcdFx0XCItLXNjYWxlXCI6IC44LFxuXHRcdFx0XHRcdGRpc3BsYXk6IFwibm9uZVwiLFxuXHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdFx0b2Zmc2V0OiAuMDEsXG5cdFx0XHRcdFx0XCItLW9wYWNpdHlcIjogMCxcblx0XHRcdFx0XHRcIi0tc2NhbGVcIjogLjgsXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJub25lXCIsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJub25lXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IDEsXG5cdFx0XHRcdFx0XCItLW9wYWNpdHlcIjogMSxcblx0XHRcdFx0XHRcIi0tc2NhbGVcIjogMSxcblx0XHRcdFx0XHRkaXNwbGF5OiBcInJldmVydC1sYXllclwiLFxuXHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6IFwicmV2ZXJ0LWxheWVyXCJcblx0XHRcdFx0fVxuXHRcdFx0XSwge1xuXHRcdFx0XHRkdXJhdGlvbjogaXNNb2JpbGUoKSA/IDEwMCA6IDgwLFxuXHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdGRlbGF5OiAwXG5cdFx0XHR9KTtcblx0XHRcdGxldCBkb25lID0gZmFsc2U7XG5cdFx0XHRjb25zdCBlbmRBbmltYXRpb24gPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChkb25lKSByZXR1cm47XG5cdFx0XHRcdGRvbmUgPSB0cnVlO1xuXHRcdFx0XHRldmVudHM/LmZvckVhY2g/LigoZXZlbnQpID0+IGV2ZW50Py4oKSk7XG5cdFx0XHRcdGFuaW1hdGUuY3VycmVudFRpbWUgPSAxO1xuXHRcdFx0XHRhbmltYXRlLmZpbmlzaCgpO1xuXHRcdFx0XHRhbmltYXRpb25Eb25lPy4oKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBldmVudHMgPSBhZGRFdmVudHModGFyZ2V0LCB7XG5cdFx0XHRcdFwidTItYmVmb3JlLWhpZGVcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtc2hvd1wiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dXG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IGFuaW1hdGUuZmluaXNoZWQ7XG5cdFx0XHRlbmRBbmltYXRpb24/LigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCB7IHJlc29sdmUsIHJlamVjdCwgcHJvbWlzZSB9ID0gUHJvbWlzZS53aXRoUmVzb2x2ZXJzKCk7XG5cdFx0XHRjb25zdCByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzb2x2ZSk7XG5cdFx0XHRsZXQgZG9uZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgZW5kQW5pbWF0aW9uID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoZG9uZSkgcmV0dXJuO1xuXHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRzPy5mb3JFYWNoPy4oKGV2ZW50KSA9PiBldmVudD8uKCkpO1xuXHRcdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpO1xuXHRcdFx0XHRyZXNvbHZlKHBlcmZvcm1hbmNlLm5vdygpKTtcblx0XHRcdFx0YW5pbWF0aW9uRG9uZT8uKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZXZlbnRzID0gYWRkRXZlbnRzKHRhcmdldCwge1xuXHRcdFx0XHRcInUyLWJlZm9yZS1oaWRlXCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFwidTItYmVmb3JlLXNob3dcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XVxuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBwcm9taXNlO1xuXHRcdFx0ZW5kQW5pbWF0aW9uPy4oKTtcblx0XHR9XG5cdH1cbn07XG52YXIgYW5pbWF0ZUhpZGUgPSBhc3luYyAodGFyZ2V0KSA9PiB7XG5cdGNvbnN0IGFuaW1hdGlvbkRvbmUgPSAoKSA9PiB7XG5cdFx0aWYgKHRhcmdldD8uaGFzQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSkge1xuXHRcdFx0dGFyZ2V0Py5yZW1vdmVBdHRyaWJ1dGU/LihcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIik7XG5cdFx0XHR0YXJnZXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJ1Mi1oaWRkZW5cIiwge1xuXHRcdFx0XHRkZXRhaWw6IHt9LFxuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9O1xuXHRpZiAodGFyZ2V0Py5oYXNBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpICYmIHRhcmdldD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcInUyLWJlZm9yZS1oaWRlXCIsIHtcblx0XHRkZXRhaWw6IHt9LFxuXHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHR9KSkpIHtcblx0XHRpZiAoIW1hdGNoTWVkaWEoXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiKS5tYXRjaGVzICYmICF0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKSAmJiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtaW5zdGFudFwiKSkgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIiwgXCJcIik7XG5cdFx0aWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpKSB7XG5cdFx0XHRjb25zdCBhbmltYXRlID0gdGFyZ2V0LmFuaW1hdGUoW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogMCxcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogLjk5LFxuXHRcdFx0XHRcdFwiLS1vcGFjaXR5XCI6IDAsXG5cdFx0XHRcdFx0XCItLXNjYWxlXCI6IC44LFxuXHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdFx0b2Zmc2V0OiAxLFxuXHRcdFx0XHRcdFwiLS1vcGFjaXR5XCI6IDAsXG5cdFx0XHRcdFx0XCItLXNjYWxlXCI6IC44LFxuXHRcdFx0XHRcdGRpc3BsYXk6IFwibm9uZVwiLFxuXHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRcdH1cblx0XHRcdF0sIHtcblx0XHRcdFx0ZHVyYXRpb246IDEyMCxcblx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRkZWxheTogMFxuXHRcdFx0fSk7XG5cdFx0XHRsZXQgZG9uZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgZW5kQW5pbWF0aW9uID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoZG9uZSkgcmV0dXJuO1xuXHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRzPy5mb3JFYWNoPy4oKGV2ZW50KSA9PiBldmVudD8uKCkpO1xuXHRcdFx0XHRhbmltYXRlLmN1cnJlbnRUaW1lID0gMTtcblx0XHRcdFx0YW5pbWF0ZS5maW5pc2goKTtcblx0XHRcdFx0YW5pbWF0aW9uRG9uZT8uKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZXZlbnRzID0gYWRkRXZlbnRzKHRhcmdldCwgeyBcInUyLWJlZm9yZS1zaG93XCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0fV0gfSk7XG5cdFx0XHRhd2FpdCBhbmltYXRlLmZpbmlzaGVkO1xuXHRcdFx0ZW5kQW5pbWF0aW9uPy4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgeyByZXNvbHZlLCByZWplY3QsIHByb21pc2UgfSA9IFByb21pc2Uud2l0aFJlc29sdmVycygpO1xuXHRcdFx0Y29uc3QgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpO1xuXHRcdFx0bGV0IGRvbmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGVuZEFuaW1hdGlvbiA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdGV2ZW50cz8uZm9yRWFjaD8uKChldmVudCkgPT4gZXZlbnQ/LigpKTtcblx0XHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKTtcblx0XHRcdFx0cmVzb2x2ZShwZXJmb3JtYW5jZS5ub3coKSk7XG5cdFx0XHRcdGFuaW1hdGlvbkRvbmU/LigpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGV2ZW50cyA9IGFkZEV2ZW50cyh0YXJnZXQsIHtcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtaGlkZVwiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRcInUyLWJlZm9yZS1zaG93XCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV1cblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgcHJvbWlzZTtcblx0XHRcdGVuZEFuaW1hdGlvbj8uKCk7XG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vT2JzZXJ2ZXIudHNcbnZhciBvbkJvcmRlck9ic2VydmVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQm9yZGVyT2JzZXJ2ZVwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUkMSA9IGdsb2JhbFRoaXNbb25Cb3JkZXJPYnNlcnZlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgb25Db250ZW50T2JzZXJ2ZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAb25Db250ZW50T2JzZXJ2ZVwiKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlJDEgPSBnbG9iYWxUaGlzW29uQ29udGVudE9ic2VydmVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB1bndyYXBGcm9tUXVlcnkgPSAoZWxlbWVudCkgPT4ge1xuXHRpZiAodHlwZW9mIGVsZW1lbnQ/LmN1cnJlbnQgPT0gXCJvYmplY3RcIikgZWxlbWVudCA9IGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudD8uY3VycmVudCA/PyAodHlwZW9mIGVsZW1lbnQ/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGVsZW1lbnQ/LnNlbGYgOiBudWxsKSA/PyBlbGVtZW50O1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgbm9ybWFsaXplU2VsZWN0b3IgPSAoc2VsZWN0b3IsIGZhbGxiYWNrID0gXCIqXCIpID0+IHtcblx0aWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbGxiYWNrO1xuXHRyZXR1cm4gc2VsZWN0b3IudHJpbSgpIHx8IGZhbGxiYWNrO1xufTtcbnZhciBzYWZlUXVlcnlTZWxlY3RvckFsbCA9IChlbCwgc2VsZWN0b3IpID0+IHtcblx0aWYgKCFlbCB8fCB0eXBlb2YgZWwucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gW107XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLCBcIlwiKTtcblx0aWYgKCFzZWwpIHJldHVybiBbXTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkgfHwgW10pO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gW107XG5cdH1cbn07XG52YXIgc2FmZU1hdGNoZXMgPSAoZWwsIHNlbGVjdG9yKSA9PiB7XG5cdGlmICghZWwgfHwgdHlwZW9mIGVsLm1hdGNoZXMgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3RvciwgXCJcIik7XG5cdGlmICghc2VsKSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0cmV0dXJuICEhZWwubWF0Y2hlcyhzZWwpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgb2JzZXJ2ZUNvbnRlbnRCb3ggPSAoZWxlbWVudCwgY2IpID0+IHtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlJDEuaGFzKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCkpKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gW107XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRCb3hTaXplID0gZW50cnkuY29udGVudEJveFNpemVbMF07XG5cdFx0XHRcdGlmIChjb250ZW50Qm94U2l6ZSkgY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYj8uKGNvbnRlbnRCb3hTaXplLCBvYnNlcnZlcikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNiPy4oe1xuXHRcdFx0aW5saW5lU2l6ZTogZWxlbWVudC5jbGllbnRXaWR0aCxcblx0XHRcdGJsb2NrU2l6ZTogZWxlbWVudC5jbGllbnRIZWlnaHRcblx0XHR9LCBvYnNlcnZlcik7XG5cdFx0b25Db250ZW50T2JzZXJ2ZSQxLnNldChlbGVtZW50LCBjYWxsYmFja3MpO1xuXHRcdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJjb250ZW50LWJveFwiIH0pO1xuXHR9XG5cdG9uQ29udGVudE9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnB1c2g/LihjYik7XG5cdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IG9uQ29udGVudE9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnNwbGljZT8uKG9uQ29udGVudE9ic2VydmUkMS5nZXQoZWxlbWVudCk/LmluZGV4T2YoY2IpIHx8IC0xLCAxKSB9O1xufTtcbnZhciBvYnNlcnZlQm9yZGVyQm94ID0gKGVsZW1lbnQsIGNiKSA9PiB7XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlJDEuaGFzKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCkpKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gW107XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgYm9yZGVyQm94U2l6ZSA9IGVudHJ5LmJvcmRlckJveFNpemVbMF07XG5cdFx0XHRcdGlmIChib3JkZXJCb3hTaXplKSBjYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiPy4oYm9yZGVyQm94U2l6ZSwgb2JzZXJ2ZXIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYj8uKHtcblx0XHRcdGlubGluZVNpemU6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG5cdFx0XHRibG9ja1NpemU6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdG9uQm9yZGVyT2JzZXJ2ZSQxLnNldChlbGVtZW50LCBjYWxsYmFja3MpO1xuXHRcdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJib3JkZXItYm94XCIgfSk7XG5cdH1cblx0b25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5wdXNoPy4oY2IpO1xuXHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnNwbGljZT8uKG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uaW5kZXhPZihjYikgfHwgLTEsIDEpIH07XG59O1xudmFyIG9ic2VydmVBdHRyaWJ1dGUgPSAoZWxlbWVudCwgYXR0cmlidXRlLCBjYikgPT4ge1xuXHRpZiAodHlwZW9mIGVsZW1lbnQ/LnNlbGVjdG9yID09IFwic3RyaW5nXCIpIHJldHVybiBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvcihlbGVtZW50LCBlbGVtZW50Py5zZWxlY3RvciwgYXR0cmlidXRlLCBjYik7XG5cdGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBuZXcgU2V0KChhdHRyaWJ1dGUuc3BsaXQoXCIsXCIpIHx8IFthdHRyaWJ1dGVdKS5tYXAoKHMpID0+IHMudHJpbSgpKSk7XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgJiYgYXR0cmlidXRlTGlzdC5oYXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIGNiKG11dGF0aW9uLCBvYnNlcnZlcik7XG5cdH0pO1xuXHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCksIHtcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLmF0dHJpYnV0ZUxpc3RdXG5cdH0pO1xuXHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gY2Ioe1xuXHRcdHRhcmdldDogZWxlbWVudCxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0b2xkVmFsdWU6IGVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKGF0dHJpYnV0ZSlcblx0fSwgb2JzZXJ2ZXIpKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcbnZhciBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvciA9IChlbGVtZW50LCBzZWxlY3RvciwgYXR0cmlidXRlLCBjYikgPT4ge1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvcik7XG5cdGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBuZXcgU2V0KFsuLi5hdHRyaWJ1dGUuc3BsaXQoXCIsXCIpIHx8IFthdHRyaWJ1dGVdXS5tYXAoKHMpID0+IHMudHJpbSgpKSk7XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikge1xuXHRcdFx0Y29uc3QgYWRkZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykgfHwgW107XG5cdFx0XHRjb25zdCByZW1vdmVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcykgfHwgW107XG5cdFx0XHRhZGRlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRcdHJlbW92ZWROb2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRcdFsuLi5uZXcgU2V0KGFkZGVkTm9kZXMpXS5maWx0ZXIoKGVsKSA9PiBzYWZlTWF0Y2hlcyhlbCwgc2VsKSk/Lm1hcD8uKCh0YXJnZXQpID0+IHtcblx0XHRcdFx0YXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcblx0XHRcdFx0XHRjYih7XG5cdFx0XHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRcdFx0XHRcdG9sZFZhbHVlOiB0YXJnZXQ/LmdldEF0dHJpYnV0ZT8uKGF0dHJpYnV0ZSlcblx0XHRcdFx0XHR9LCBvYnNlcnZlcik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmIChzYWZlTWF0Y2hlcyhtdXRhdGlvbi50YXJnZXQsIHNlbCkgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSAmJiBhdHRyaWJ1dGVMaXN0LmhhcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkgY2IobXV0YXRpb24sIG9ic2VydmVyKTtcblx0fSk7XG5cdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uYXR0cmlidXRlTGlzdF0sXG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0Y2hhcmFjdGVyRGF0YTogdHJ1ZVxuXHR9KTtcblx0c2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCwgc2VsKS5tYXAoKHRhcmdldCkgPT4gYXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IGNiKHtcblx0XHR0YXJnZXQsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdG9sZFZhbHVlOiB0YXJnZXQ/LmdldEF0dHJpYnV0ZT8uKGF0dHJpYnV0ZSlcblx0fSwgb2JzZXJ2ZXIpKSk7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG52YXIgb2JzZXJ2ZUJ5U2VsZWN0b3IgPSAoZWxlbWVudCwgc2VsZWN0b3IgPSBcIipcIiwgY2IgPSAobXV0LCBvYnMpID0+IHt9KSA9PiB7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0Y29uc3QgdW53cmFwTm9kZXNCeVNlbGVjdG9yID0gKG5vZGVzKSA9PiB7XG5cdFx0Y29uc3QgJG5vZGVzID0gQXJyYXkuZnJvbShub2RlcyB8fCBbXSkgfHwgW107XG5cdFx0JG5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShub2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0cmV0dXJuIFsuLi5BcnJheS5mcm9tKG5ldyBTZXQoJG5vZGVzKS52YWx1ZXMoKSldLmZpbHRlcigoZWwpID0+IHNhZmVNYXRjaGVzKGVsLCBzZWwpKTtcblx0fTtcblx0bGV0IG9iUmVmID0gbnVsbDtcblx0Y29uc3QgaGFuZGxlTXV0YXRpb24gPSAobXV0YXRpb24pID0+IHtcblx0XHRjb25zdCBvYnNlcnZlciA9IG9iUmVmPy5kZXJlZj8uKCk7XG5cdFx0Y29uc3QgYWRkZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5hZGRlZE5vZGVzKTtcblx0XHRjb25zdCByZW1vdmVkTm9kZXMgPSB1bndyYXBOb2Rlc0J5U2VsZWN0b3IobXV0YXRpb24ucmVtb3ZlZE5vZGVzKTtcblx0XHRpZiAoYWRkZWROb2Rlcy5sZW5ndGggPiAwIHx8IHJlbW92ZWROb2Rlcy5sZW5ndGggPiAwKSBjYj8uKHtcblx0XHRcdHR5cGU6IG11dGF0aW9uLnR5cGUsXG5cdFx0XHR0YXJnZXQ6IG11dGF0aW9uLnRhcmdldCxcblx0XHRcdGF0dHJpYnV0ZU5hbWU6IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWVzcGFjZSxcblx0XHRcdG5leHRTaWJsaW5nOiBtdXRhdGlvbi5uZXh0U2libGluZyxcblx0XHRcdG9sZFZhbHVlOiBtdXRhdGlvbi5vbGRWYWx1ZSxcblx0XHRcdHByZXZpb3VzU2libGluZzogbXV0YXRpb24ucHJldmlvdXNTaWJsaW5nLFxuXHRcdFx0YWRkZWROb2Rlcyxcblx0XHRcdHJlbW92ZWROb2Rlc1xuXHRcdH0sIG9ic2VydmVyKTtcblx0fTtcblx0Y29uc3QgaGFuZGxlQ29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZU91dENvbWUgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVGb2N1c0NsaWNrID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXQgfHwgZG9jdW1lbnQ/LmFjdGl2ZUVsZW1lbnRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgZmFjdG9ycyA9IHtcblx0XHRwYXNzaXZlOiB0cnVlLFxuXHRcdGNhcHR1cmU6IGZhbHNlXG5cdH07XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1cy13aXRoaW5cIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXZpc2libGVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUZvY3VzQ2xpY2ssIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUZvY3VzQ2xpY2ssIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi50eXBlID09IFwiY2hpbGRMaXN0XCIpIGhhbmRsZU11dGF0aW9uKG11dGF0aW9uKTtcblx0fSk7XG5cdG9iUmVmID0gbmV3IFdlYWtSZWYob2JzZXJ2ZXIpO1xuXHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCksIHtcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZVxuXHR9KTtcblx0Y29uc3Qgc2VsZWN0ZWQgPSBzYWZlUXVlcnlTZWxlY3RvckFsbChlbGVtZW50LCBzZWwpO1xuXHRpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkgY2I/Lih7XG5cdFx0YWRkZWROb2Rlczogc2VsZWN0ZWQsXG5cdFx0cmVtb3ZlZE5vZGVzOiBbXVxuXHR9LCBvYnNlcnZlcik7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9kZWNvci9BcHBlYXIudHNcbnZhciBpbml0VmlzaWJpbGl0eSA9IGFzeW5jIChST09UID0gZG9jdW1lbnQuYm9keSkgPT4ge1xuXHRvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvcihST09ULCBcIipcIiwgXCJkYXRhLWhpZGRlblwiLCAobXV0YXRpb24sIG9ic2VydmVyKSA9PiB7XG5cdFx0aWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT0gXCJkYXRhLWhpZGRlblwiKSB7XG5cdFx0XHRjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQ7XG5cdFx0XHRpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaGlkZGVuXCIpICE9PSBtdXRhdGlvbi5vbGRWYWx1ZSkgUHJvbWlzZT8udHJ5Py4odGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaGlkZGVuXCIpICE9IG51bGwgPyBhbmltYXRlSGlkZSA6IGFuaW1hdGVTaG93LCB0YXJnZXQsIG9ic2VydmVyKT8uY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9kZWNvci9TaGFwZS50c1xudmFyIFdhdnlTaGFwZWRDaXJjbGUgPSAoc3RlcHMgPSAxMDAsIGFtcGxpdHVkZSA9IC4wNSwgZnJlcSA9IDgpID0+IHtcblx0Y29uc3QgcG9pbnRzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHM7IGkrKykgcG9pbnRzLnB1c2goaSAvIHN0ZXBzKTtcblx0Y29uc3QgYW5nbGUgPSAoc3RlcCkgPT4ge1xuXHRcdHJldHVybiBgY2FsYygke3N0ZXB9cmFkICogcGkgKiAyKWA7XG5cdH07XG5cdGNvbnN0IHZhcmlhbnQgPSAoc3RlcCkgPT4ge1xuXHRcdHJldHVybiBgY2FsYyhjYWxjKGNvcyhjYWxjKHZhcigtLWNsaXAtZnJlcSwgOCkgKiAke2FuZ2xlKHN0ZXApfSkpICogMC41ICsgMC41KSAqIHZhcigtLWNsaXAtYW1wbGl0dWRlLCAwKSlgO1xuXHR9O1xuXHRjb25zdCBmdW5jID0gKHN0ZXApID0+IFtgY2FsYyhjYWxjKDAuNSArIGNhbGMoY29zKCR7YW5nbGUoc3RlcCl9KSAqIGNhbGMoMC41IC0gJHt2YXJpYW50KHN0ZXApfSkpKSAqIHZhcigtLWljb24tc2l6ZSwgMTAwJSkpYCwgYGNhbGMoY2FsYygwLjUgKyBjYWxjKHNpbigke2FuZ2xlKHN0ZXApfSkgKiBjYWxjKDAuNSAtICR7dmFyaWFudChzdGVwKX0pKSkgKiB2YXIoLS1pY29uLXNpemUsIDEwMCUpKWBdO1xuXHRyZXR1cm4ge1xuXHRcdFwiLS1jbGlwLWFtcGxpdHVkZVwiOiBhbXBsaXR1ZGUsXG5cdFx0XCItLWNsaXAtZnJlcVwiOiBmcmVxLFxuXHRcdFwiLS1jbGlwLXBhdGhcIjogYHBvbHlnb24oJHtwb2ludHMubWFwKChzdGVwKSA9PiB7XG5cdFx0XHRyZXR1cm4gZnVuYyhzdGVwKS5qb2luKFwiIFwiKTtcblx0XHR9KS5qb2luKFwiLCBcIil9KWBcblx0fTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9TdHlsZS50c1xudmFyIE9XTkVSID0gXCJET01cIjtcbnZhciBzdHlsZUVsZW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSA6IG51bGw7XG5pZiAoc3R5bGVFbGVtZW50KSB7XG5cdHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpPy5hcHBlbmRDaGlsZD8uKHN0eWxlRWxlbWVudCk7XG5cdHN0eWxlRWxlbWVudC5kYXRhc2V0Lm93bmVyID0gT1dORVI7XG59XG52YXIgc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCA9ICgpID0+IHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBnbG9iYWxUaGlzLkNTU1N0eWxlU2hlZXQgPT09IFwiZnVuY3Rpb25cIjtcbnZhciBjc3NUZXh0UmVxdWlyZXNJbmxpbmVTdHlsZUVsZW1lbnQgPSAoY3NzKSA9PiB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiICYmIC9AaW1wb3J0XFxiL2kudGVzdChjc3MpO1xuaWYgKHN0eWxlRWxlbWVudCkge1xuXHR0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKT8uYXBwZW5kQ2hpbGQ/LihzdHlsZUVsZW1lbnQpO1xuXHRzdHlsZUVsZW1lbnQuZGF0YXNldC5vd25lciA9IE9XTkVSO1xufVxudmFyIHNldFN0eWxlVVJMID0gKGJhc2UsIHVybCwgbGF5ZXIgPSBcIlwiKSA9PiB7XG5cdGJhc2VbMF1bYmFzZVsxXV0gPSBiYXNlWzFdID09IFwiaW5uZXJIVE1MXCIgPyBgQGltcG9ydCB1cmwoXCIke3VybH1cIikgJHtsYXllciAmJiB0eXBlb2YgbGF5ZXIgPT0gXCJzdHJpbmdcIiA/IGBsYXllcigke2xheWVyfSlgIDogXCJcIn07YCA6IHVybDtcbn07XG52YXIgc2V0U3R5bGVSdWxlcyA9IChjbGFzc2VzKSA9PiB7XG5cdHJldHVybiBjbGFzc2VzPy5tYXA/LigoYXJncykgPT4gc2V0U3R5bGVSdWxlKC4uLmFyZ3MpKTtcbn07XG52YXIgZ2V0U3R5bGVMYXllciA9IChsYXllck5hbWUsIHNoZWV0KSA9PiB7XG5cdHNoZWV0IHx8PSBzdHlsZUVsZW1lbnQ/LnNoZWV0O1xuXHRsZXQgbGF5ZXJSdWxlSW5kZXggPSBBcnJheS5mcm9tKHNoZWV0Py5jc3NSdWxlcyB8fCBbXSkuZmluZEluZGV4KChydWxlKSA9PiBydWxlIGluc3RhbmNlb2YgQ1NTTGF5ZXJCbG9ja1J1bGUgJiYgcnVsZT8ubmFtZSA9PT0gbGF5ZXJOYW1lKTtcblx0bGV0IGxheWVyUnVsZTtcblx0aWYgKGxheWVyUnVsZUluZGV4ID09PSAtMSAmJiBzaGVldCkgbGF5ZXJSdWxlID0gc2hlZXQ/LmNzc1J1bGVzPy5bbGF5ZXJSdWxlSW5kZXggPSBzaGVldC5pbnNlcnRSdWxlKGBAbGF5ZXIgJHtsYXllck5hbWV9IHt9YCldO1xuXHRlbHNlIGxheWVyUnVsZSA9IHNoZWV0Py5jc3NSdWxlcz8uW2xheWVyUnVsZUluZGV4XTtcblx0cmV0dXJuIGxheWVyUnVsZTtcbn07XG52YXIgc3R5bGVJZENvdW50ZXIgPSAwO1xudmFyIGlzU2hhZG93Um9vdCA9ICh2YWx1ZSkgPT4gdHlwZW9mIFNoYWRvd1Jvb3QgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xudmFyIGlzRG9jdW1lbnQgPSAodmFsdWUpID0+IHR5cGVvZiBEb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWx1ZSBpbnN0YW5jZW9mIERvY3VtZW50O1xudmFyIGlzRWxlbWVudCQxID0gKHZhbHVlKSA9PiB0eXBlb2YgRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG52YXIgZXNjYXBlQ1NTSWRlbnRpZmllciA9ICh2YWx1ZSkgPT4ge1xuXHRpZiAodHlwZW9mIENTUyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgQ1NTLmVzY2FwZSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gQ1NTLmVzY2FwZSh2YWx1ZSk7XG5cdHJldHVybiBBcnJheS5mcm9tKHZhbHVlKS5tYXAoKGNoYXIpID0+IGBcXFxcJHtjaGFyLmNvZGVQb2ludEF0KDApLnRvU3RyaW5nKDE2KX0gYCkuam9pbihcIlwiKTtcbn07XG52YXIgY3JlYXRlU3R5bGVJZCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBjcnlwdG8gIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNyeXB0by5yYW5kb21VVUlEID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHRyZXR1cm4gYHV4LSR7RGF0ZS5ub3coKS50b1N0cmluZygzNil9LSR7KCsrc3R5bGVJZENvdW50ZXIpLnRvU3RyaW5nKDM2KX1gO1xufTtcbnZhciBqb2luU2NvcGVkU2VsZWN0b3IgPSAoc2NvcGUsIHNlbGVjdG9yKSA9PiB7XG5cdHNlbGVjdG9yID0gc2VsZWN0b3IudHJpbSgpO1xuXHRpZiAoIXNjb3BlKSByZXR1cm4gc2VsZWN0b3I7XG5cdGlmICghc2VsZWN0b3IpIHJldHVybiBzY29wZTtcblx0aWYgKHNlbGVjdG9yLnN0YXJ0c1dpdGgoXCI6OlwiKSkgcmV0dXJuIGAke3Njb3BlfSR7c2VsZWN0b3J9YDtcblx0cmV0dXJuIGAke3Njb3BlfSAke3NlbGVjdG9yfWA7XG59O1xudmFyIGZpbmRTdHlsZVJ1bGUgPSAoc2hlZXQsIGZ1bGxTZWxlY3Rvciwgc2NvcGUsIHNlbGVjdG9yKSA9PiB7XG5cdGNvbnN0IHJ1bGVzID0gQXJyYXkuZnJvbShzaGVldD8uY3NzUnVsZXMgfHwgW10pO1xuXHRjb25zdCBleHBlY3RlZCA9IGZ1bGxTZWxlY3Rvci50cmltKCk7XG5cdGNvbnN0IHJlcXVlc3RlZCA9IHNlbGVjdG9yLnRyaW0oKTtcblx0cmV0dXJuIHJ1bGVzLmZpbmRJbmRleCgocnVsZSkgPT4ge1xuXHRcdGlmICghKHJ1bGUgaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUpKSByZXR1cm4gZmFsc2U7XG5cdFx0Y29uc3QgYWN0dWFsID0gcnVsZS5zZWxlY3RvclRleHQ/LnRyaW0/LigpID8/IFwiXCI7XG5cdFx0aWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHJldHVybiB0cnVlO1xuXHRcdGlmIChyZXF1ZXN0ZWQgJiYgYWN0dWFsLmVuZHNXaXRoKHJlcXVlc3RlZCkpIHJldHVybiBhY3R1YWwuc2xpY2UoMCwgYWN0dWFsLmxlbmd0aCAtIHJlcXVlc3RlZC5sZW5ndGgpLnRyaW0oKSA9PT0gc2NvcGU7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcbn07XG52YXIgZ2V0U3R5bGVSdWxlID0gKHNlbGVjdG9yLCBzaGVldCwgbGF5ZXJOYW1lID0gXCJ1eC1xdWVyeVwiLCBiYXNpcyA9IG51bGwpID0+IHtcblx0Y29uc3Qgcm9vdCA9IGlzU2hhZG93Um9vdChiYXNpcykgfHwgaXNEb2N1bWVudChiYXNpcykgPyBiYXNpcyA6IGJhc2lzPy5nZXRSb290Tm9kZT8uKCkgPz8gKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbCk7XG5cdGNvbnN0IGJhc2lzRWxlbWVudCA9IGlzRWxlbWVudCQxKGJhc2lzKSA/IGJhc2lzIDogbnVsbDtcblx0bGV0IHNjb3BlID0gXCJcIjtcblx0aWYgKGJhc2lzRWxlbWVudD8uaWQpIHNjb3BlID0gYCMke2VzY2FwZUNTU0lkZW50aWZpZXIoYmFzaXNFbGVtZW50LmlkKX1gO1xuXHRlbHNlIGlmIChiYXNpc0VsZW1lbnQpIHtcblx0XHRsZXQgc3R5bGVJZCA9IGJhc2lzRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlLWlkXCIpO1xuXHRcdGlmICghc3R5bGVJZCkge1xuXHRcdFx0c3R5bGVJZCA9IGNyZWF0ZVN0eWxlSWQoKTtcblx0XHRcdGJhc2lzRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlLWlkXCIsIHN0eWxlSWQpO1xuXHRcdH1cblx0XHRzY29wZSA9IGBbZGF0YS1zdHlsZS1pZD1cIiR7ZXNjYXBlQ1NTSWRlbnRpZmllcihzdHlsZUlkKX1cIl1gO1xuXHR9IGVsc2UgaWYgKGlzU2hhZG93Um9vdChyb290KSkgc2NvcGUgPSBcIjpob3N0XCI7XG5cdGVsc2UgaWYgKGlzRG9jdW1lbnQocm9vdCkpIHNjb3BlID0gXCI6cm9vdFwiO1xuXHRsZXQgc3R5bGVFbGVtZW50ID0gbnVsbDtcblx0aWYgKGlzU2hhZG93Um9vdChyb290KSkge1xuXHRcdHN0eWxlRWxlbWVudCA9IHJvb3QucXVlcnlTZWxlY3RvcihcInN0eWxlW2RhdGEtdXgtcXVlcnldXCIpO1xuXHRcdGlmICghc3R5bGVFbGVtZW50ICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0c3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRcdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdXgtcXVlcnlcIiwgXCJcIik7XG5cdFx0XHRyb290LmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHR9IGVsc2Ugc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50R2xvYmFsKCk7XG5cdHNoZWV0IHx8PSBzdHlsZUVsZW1lbnQ/LnNoZWV0O1xuXHRpZiAoIXNoZWV0KSByZXR1cm47XG5cdGlmIChsYXllck5hbWUpIHJldHVybiBnZXRTdHlsZVJ1bGUoc2VsZWN0b3IsIGdldFN0eWxlTGF5ZXIobGF5ZXJOYW1lLCBzaGVldCksIG51bGwsIGJhc2lzKTtcblx0Y29uc3QgZnVsbFNlbGVjdG9yID0gam9pblNjb3BlZFNlbGVjdG9yKHNjb3BlLCBzZWxlY3Rvcik7XG5cdGxldCBydWxlSWQgPSBmaW5kU3R5bGVSdWxlKHNoZWV0LCBmdWxsU2VsZWN0b3IsIHNjb3BlLCBzZWxlY3Rvcik7XG5cdGlmIChydWxlSWQgPT09IC0xKSBydWxlSWQgPSBzaGVldC5pbnNlcnRSdWxlKGAke2Z1bGxTZWxlY3Rvcn0ge31gKTtcblx0cmV0dXJuIHNoZWV0LmNzc1J1bGVzPy5bcnVsZUlkXTtcbn07XG5mdW5jdGlvbiBzdHlsZUVsZW1lbnRHbG9iYWwoKSB7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQgPz8gbnVsbDtcbn1cbnZhciBwcm9taXNlT3JEaXJlY3QgPSAocHJvbWlzZSwgY2IpID0+IHtcblx0aWYgKHR5cGVvZiBwcm9taXNlPy50aGVuID09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHByb21pc2U/LnRoZW4/LihjYik7XG5cdHJldHVybiBjYihwcm9taXNlKTtcbn07XG52YXIgYmxvYlVSTE1hcFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYmxvYlVSTE1hcFwiKTtcbnZhciBibG9iVVJMTWFwID0gZ2xvYmFsVGhpc1tibG9iVVJMTWFwU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgY2FjaGVNYXBTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGNhY2hlTWFwXCIpO1xudmFyIGNhY2hlTWFwID0gZ2xvYmFsVGhpc1tjYWNoZU1hcFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZmV0Y2hBbmRDYWNoZSA9ICh1cmwpID0+IHtcblx0aWYgKCF1cmwpIHJldHVybiBudWxsO1xuXHRpZiAoY2FjaGVNYXAuaGFzKHVybCkpIHJldHVybiBjYWNoZU1hcC5nZXQodXJsKTtcblx0aWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGlmIChibG9iVVJMTWFwLmhhcyh1cmwpKSByZXR1cm4gYmxvYlVSTE1hcC5nZXQodXJsKTtcblx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh1cmwpO1xuXHRcdGJsb2JVUkxNYXAuc2V0KHVybCwgYnVybCk7XG5cdFx0Y2FjaGVNYXAuc2V0KGJ1cmwsIGJ1cmwpO1xuXHRcdHJldHVybiBidXJsO1xuXHR9XG5cdGlmIChVUkwuY2FuUGFyc2UodXJsKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuXHRcdGNvbnN0IHByb21pc2VkID0gZmV0Y2godXJsPy5yZXBsYWNlPy4oXCI/dXJsXCIsIFwiP3Jhd1wiKSwge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XG5cdFx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdGJsb2JVUkxNYXAuc2V0KGJsb2IsIGJ1cmwpO1xuXHRcdFx0Y2FjaGVNYXAuc2V0KHVybCwgYnVybCk7XG5cdFx0XHRjYWNoZU1hcC5zZXQoYnVybCwgYnVybCk7XG5cdFx0XHRyZXR1cm4gYnVybDtcblx0XHR9KTtcblx0XHRjYWNoZU1hcC5zZXQodXJsLCBwcm9taXNlZCk7XG5cdFx0cmV0dXJuIHByb21pc2VkO1xuXHR9XG5cdGlmICh0eXBlb2YgdXJsID09IFwic3RyaW5nXCIpIHtcblx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoW3VybF0sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXHRcdGNvbnN0IGJ1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdGJsb2JVUkxNYXAuc2V0KGJsb2IsIGJ1cmwpO1xuXHRcdGNhY2hlTWFwLnNldChidXJsLCBidXJsKTtcblx0XHRyZXR1cm4gYnVybDtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcbnZhciBjYWNoZUNvbnRlbnRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGNhY2hlQmxvYkNvbnRlbnRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBmZXRjaEFzSW5saW5lID0gKHVybCkgPT4ge1xuXHRpZiAoIXVybCkgcmV0dXJuIFwiXCI7XG5cdGlmIChjYWNoZUNvbnRlbnRNYXAuaGFzKHVybCkpIHJldHVybiBjYWNoZUNvbnRlbnRNYXAuZ2V0KHVybCkgPz8gXCJcIjtcblx0aWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGlmIChjYWNoZUJsb2JDb250ZW50TWFwLmhhcyh1cmwpKSByZXR1cm4gY2FjaGVCbG9iQ29udGVudE1hcC5nZXQodXJsKSA/PyBcIlwiO1xuXHRcdGNvbnN0IHByb21pc2VkID0gdXJsPy50ZXh0Py4oKT8udGhlbj8uKCh0ZXh0KSA9PiB7XG5cdFx0XHRjYWNoZUJsb2JDb250ZW50TWFwLnNldCh1cmwsIHRleHQpO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fSk7XG5cdFx0Y2FjaGVCbG9iQ29udGVudE1hcC5zZXQodXJsLCBwcm9taXNlZCk7XG5cdFx0cmV0dXJuIHByb21pc2VkO1xuXHR9XG5cdGlmIChVUkwuY2FuUGFyc2UodXJsKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuXHRcdGNvbnN0IHByb21pc2VkID0gZmV0Y2godXJsPy5yZXBsYWNlPy4oXCI/dXJsXCIsIFwiP3Jhd1wiKSwge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHRjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCwgdGV4dCk7XG5cdFx0XHRyZXR1cm4gdGV4dDtcblx0XHR9KTtcblx0XHRjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCwgcHJvbWlzZWQpO1xuXHRcdHJldHVybiBwcm9taXNlZDtcblx0fVxuXHRpZiAodHlwZW9mIHVybCA9PSBcInN0cmluZ1wiKSB7XG5cdFx0Y2FjaGVDb250ZW50TWFwLnNldCh1cmwsIHVybCk7XG5cdFx0cmV0dXJuIHVybDtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcbnZhciBhZG9wdGVkU2VsZWN0b3JNYXBTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGFkb3B0ZWRTZWxlY3Rvck1hcFwiKTtcbnZhciBhZG9wdGVkU2VsZWN0b3JNYXAgPSBnbG9iYWxUaGlzW2Fkb3B0ZWRTZWxlY3Rvck1hcFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXBcIik7XG52YXIgYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwID0gZ2xvYmFsVGhpc1thZG9wdGVkU2hhZG93U2VsZWN0b3JNYXBTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBhZG9wdGVkTGF5ZXJNYXBTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGFkb3B0ZWRMYXllck1hcFwiKTtcbnZhciBhZG9wdGVkTGF5ZXJNYXAgPSBnbG9iYWxUaGlzW2Fkb3B0ZWRMYXllck1hcFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgYWRvcHRlZFNoYWRvd0xheWVyTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BhZG9wdGVkU2hhZG93TGF5ZXJNYXBcIik7XG52YXIgYWRvcHRlZFNoYWRvd0xheWVyTWFwID0gZ2xvYmFsVGhpc1thZG9wdGVkU2hhZG93TGF5ZXJNYXBTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBnZXRBZG9wdGVkU3R5bGVSdWxlID0gKHNlbGVjdG9yLCBsYXllck5hbWUgPSBcInV4LXF1ZXJ5XCIsIGJhc2lzID0gbnVsbCkgPT4ge1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gbnVsbDtcblx0aWYgKCFzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0KCkpIHJldHVybiBudWxsO1xuXHRjb25zdCByb290ID0gYmFzaXMgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gYmFzaXMgOiBiYXNpcz8uZ2V0Um9vdE5vZGUgPyBiYXNpcy5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pIDogbnVsbDtcblx0Y29uc3QgaXNTaGFkb3dSb290ID0gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG5cdGNvbnN0IHRhcmdldEFkb3B0ZWRTaGVldHMgPSBpc1NoYWRvd1Jvb3QgPyByb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA6IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzIDogbnVsbDtcblx0aWYgKCF0YXJnZXRBZG9wdGVkU2hlZXRzKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgc2VsZWN0b3JLZXkgPSBgJHtsYXllck5hbWUgfHwgXCJcIn06JHtzZWxlY3Rvcn1gO1xuXHRsZXQgc2hlZXQ7XG5cdGlmIChpc1NoYWRvd1Jvb3QpIHtcblx0XHRsZXQgc2hhZG93TWFwID0gYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwLmdldChyb290KTtcblx0XHRpZiAoIXNoYWRvd01hcCkge1xuXHRcdFx0c2hhZG93TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcC5zZXQocm9vdCwgc2hhZG93TWFwKTtcblx0XHR9XG5cdFx0c2hlZXQgPSBzaGFkb3dNYXAuZ2V0KHNlbGVjdG9yS2V5KTtcblx0XHRpZiAoIXNoZWV0KSB7XG5cdFx0XHRzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0XHRzaGFkb3dNYXAuc2V0KHNlbGVjdG9yS2V5LCBzaGVldCk7XG5cdFx0XHRpZiAoIXRhcmdldEFkb3B0ZWRTaGVldHMuaW5jbHVkZXMoc2hlZXQpKSB0YXJnZXRBZG9wdGVkU2hlZXRzLnB1c2goc2hlZXQpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRzaGVldCA9IGFkb3B0ZWRTZWxlY3Rvck1hcC5nZXQoc2VsZWN0b3JLZXkpO1xuXHRcdGlmICghc2hlZXQpIHtcblx0XHRcdHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRcdGFkb3B0ZWRTZWxlY3Rvck1hcC5zZXQoc2VsZWN0b3JLZXksIHNoZWV0KTtcblx0XHRcdGlmICghdGFyZ2V0QWRvcHRlZFNoZWV0cy5pbmNsdWRlcyhzaGVldCkpIHRhcmdldEFkb3B0ZWRTaGVldHMucHVzaChzaGVldCk7XG5cdFx0fVxuXHR9XG5cdGlmIChsYXllck5hbWUpIHtcblx0XHRsZXQgbGF5ZXJSdWxlO1xuXHRcdGlmIChpc1NoYWRvd1Jvb3QpIHtcblx0XHRcdGxldCBzaGFkb3dMYXllck1hcCA9IGFkb3B0ZWRTaGFkb3dMYXllck1hcC5nZXQocm9vdCk7XG5cdFx0XHRpZiAoIXNoYWRvd0xheWVyTWFwKSB7XG5cdFx0XHRcdHNoYWRvd0xheWVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdFx0YWRvcHRlZFNoYWRvd0xheWVyTWFwLnNldChyb290LCBzaGFkb3dMYXllck1hcCk7XG5cdFx0XHR9XG5cdFx0XHRsYXllclJ1bGUgPSBzaGFkb3dMYXllck1hcC5nZXQobGF5ZXJOYW1lKTtcblx0XHR9IGVsc2UgbGF5ZXJSdWxlID0gYWRvcHRlZExheWVyTWFwLmdldChsYXllck5hbWUpO1xuXHRcdGlmICghbGF5ZXJSdWxlKSB7XG5cdFx0XHRjb25zdCBydWxlcyA9IEFycmF5LmZyb20oc2hlZXQuY3NzUnVsZXMgfHwgW10pO1xuXHRcdFx0Y29uc3QgbGF5ZXJJbmRleCA9IHJ1bGVzLmZpbmRJbmRleCgocnVsZSkgPT4gcnVsZSBpbnN0YW5jZW9mIENTU0xheWVyQmxvY2tSdWxlICYmIHJ1bGUubmFtZSA9PT0gbGF5ZXJOYW1lKTtcblx0XHRcdGlmIChsYXllckluZGV4ID09PSAtMSkgdHJ5IHtcblx0XHRcdFx0c2hlZXQuaW5zZXJ0UnVsZShgQGxheWVyICR7bGF5ZXJOYW1lfSB7fWAsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG5cdFx0XHRcdGNvbnN0IG5ld1J1bGUgPSBzaGVldC5jc3NSdWxlc1tzaGVldC5jc3NSdWxlcy5sZW5ndGggLSAxXTtcblx0XHRcdFx0aWYgKG5ld1J1bGUgaW5zdGFuY2VvZiBDU1NMYXllckJsb2NrUnVsZSkgbGF5ZXJSdWxlID0gbmV3UnVsZTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0bGF5ZXJSdWxlID0gdm9pZCAwO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBsYXllclJ1bGUgPSBydWxlc1tsYXllckluZGV4XTtcblx0XHRcdGlmIChsYXllclJ1bGUpIHtcblx0XHRcdFx0aWYgKGlzU2hhZG93Um9vdCkge1xuXHRcdFx0XHRcdGxldCBzaGFkb3dMYXllck1hcCA9IGFkb3B0ZWRTaGFkb3dMYXllck1hcC5nZXQocm9vdCk7XG5cdFx0XHRcdFx0aWYgKCFzaGFkb3dMYXllck1hcCkge1xuXHRcdFx0XHRcdFx0c2hhZG93TGF5ZXJNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdFx0XHRcdFx0YWRvcHRlZFNoYWRvd0xheWVyTWFwLnNldChyb290LCBzaGFkb3dMYXllck1hcCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNoYWRvd0xheWVyTWFwLnNldChsYXllck5hbWUsIGxheWVyUnVsZSk7XG5cdFx0XHRcdH0gZWxzZSBhZG9wdGVkTGF5ZXJNYXAuc2V0KGxheWVyTmFtZSwgbGF5ZXJSdWxlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGxheWVyUnVsZSkge1xuXHRcdFx0bGV0IGxheWVyUnVsZUluZGV4ID0gQXJyYXkuZnJvbShsYXllclJ1bGUuY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocikgPT4gciBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSAmJiByLnNlbGVjdG9yVGV4dD8udHJpbT8uKCkgPT09IHNlbGVjdG9yPy50cmltPy4oKSk7XG5cdFx0XHRpZiAobGF5ZXJSdWxlSW5kZXggPT09IC0xKSB0cnkge1xuXHRcdFx0XHRsYXllclJ1bGVJbmRleCA9IGxheWVyUnVsZS5pbnNlcnRSdWxlKGAke3NlbGVjdG9yfSB7fWAsIGxheWVyUnVsZS5jc3NSdWxlcy5sZW5ndGgpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsYXllclJ1bGUuY3NzUnVsZXNbbGF5ZXJSdWxlSW5kZXhdO1xuXHRcdH1cblx0fVxuXHRsZXQgcnVsZUluZGV4ID0gQXJyYXkuZnJvbShzaGVldC5jc3NSdWxlcyB8fCBbXSkuZmluZEluZGV4KChydWxlKSA9PiBydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlICYmIHJ1bGUuc2VsZWN0b3JUZXh0Py50cmltPy4oKSA9PT0gc2VsZWN0b3I/LnRyaW0/LigpKTtcblx0aWYgKHJ1bGVJbmRleCA9PT0gLTEpIHRyeSB7XG5cdFx0cnVsZUluZGV4ID0gc2hlZXQuaW5zZXJ0UnVsZShgJHtzZWxlY3Rvcn0ge31gLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0Y29uc3QgcnVsZSA9IHNoZWV0LmNzc1J1bGVzW3J1bGVJbmRleF07XG5cdGlmIChydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlKSByZXR1cm4gcnVsZTtcblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGlzTmF0aXZlQ1NTU3R5bGVWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRjb25zdCBDU1NTdHlsZVZhbHVlQ3RvciA9IGdsb2JhbFRoaXMuQ1NTU3R5bGVWYWx1ZTtcblx0XHRpZiAodHlwZW9mIENTU1N0eWxlVmFsdWVDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlQ3RvcikgcmV0dXJuIHRydWU7XG5cdFx0Zm9yIChsZXQgcHJvdG90eXBlID0gdmFsdWU7IHByb3RvdHlwZTsgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkpIGlmIChwcm90b3R5cGU/LmNvbnN0cnVjdG9yPy5uYW1lID09PSBcIkNTU1N0eWxlVmFsdWVcIikgcmV0dXJuIHRydWU7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIGZhbHNlO1xufTtcbnZhciBpc1JlYWN0aXZlU3R5bGVWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbHVlKSkgcmV0dXJuIGZhbHNlO1xuXHR0cnkge1xuXHRcdHJldHVybiBcInZhbHVlXCIgaW4gdmFsdWU7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBnZXRXaW5kb3dDb25zdHJ1Y3RvciA9ICh3aW4sIG5hbWUpID0+IHtcblx0cmV0dXJuIHdpbj8uW25hbWVdID8/IGdsb2JhbFRoaXM/LltuYW1lXTtcbn07XG52YXIgZ2V0Q1NTVW5pdEZhY3RvcnlOYW1lID0gKHVuaXQpID0+IHtcblx0c3dpdGNoICh1bml0LnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlIFwiJVwiOiByZXR1cm4gXCJwZXJjZW50XCI7XG5cdFx0Y2FzZSBcInFcIjogcmV0dXJuIFwiUVwiO1xuXHRcdGNhc2UgXCJoelwiOiByZXR1cm4gXCJIelwiO1xuXHRcdGNhc2UgXCJraHpcIjogcmV0dXJuIFwia0h6XCI7XG5cdFx0Y2FzZSBcImZyXCI6IHJldHVybiBcImZsZXhcIjtcblx0XHRkZWZhdWx0OiByZXR1cm4gdW5pdC50b0xvd2VyQ2FzZSgpO1xuXHR9XG59O1xudmFyIGdldENTU1VuaXRDb25zdHJ1Y3Rvck5hbWUgPSAodW5pdCkgPT4ge1xuXHRyZXR1cm4gdW5pdC50b0xvd2VyQ2FzZSgpID09PSBcIiVcIiA/IFwicGVyY2VudFwiIDogdW5pdC50b0xvd2VyQ2FzZSgpO1xufTtcbnZhciBjcmVhdGVUeXBlZFVuaXRWYWx1ZSA9ICh3aW4sIHVuaXQsIHZhbHVlKSA9PiB7XG5cdGNvbnN0IENTU05hbWVzcGFjZSA9IHdpbj8uQ1NTO1xuXHRjb25zdCBmYWN0b3J5TmFtZSA9IGdldENTU1VuaXRGYWN0b3J5TmFtZSh1bml0KTtcblx0Y29uc3QgZmFjdG9yeSA9IENTU05hbWVzcGFjZT8uW2ZhY3RvcnlOYW1lXTtcblx0aWYgKHR5cGVvZiBmYWN0b3J5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWN0b3J5LmNhbGwoQ1NTTmFtZXNwYWNlLCB2YWx1ZSk7XG5cdGNvbnN0IENTU1VuaXRWYWx1ZUN0b3IgPSBnZXRXaW5kb3dDb25zdHJ1Y3Rvcih3aW4sIFwiQ1NTVW5pdFZhbHVlXCIpO1xuXHRpZiAodHlwZW9mIENTU1VuaXRWYWx1ZUN0b3IgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgVHlwZWQgT00gZG9lcyBub3Qgc3VwcG9ydCBDU1MgdW5pdCBcIiR7dW5pdH1cImApO1xuXHRyZXR1cm4gbmV3IENTU1VuaXRWYWx1ZUN0b3IodmFsdWUsIGdldENTU1VuaXRDb25zdHJ1Y3Rvck5hbWUodW5pdCkpO1xufTtcbnZhciB0b2tlbml6ZU51bWVyaWNDU1MgPSAoc291cmNlKSA9PiB7XG5cdGNvbnN0IHRva2VucyA9IFtdO1xuXHRsZXQgY3Vyc29yID0gMDtcblx0d2hpbGUgKGN1cnNvciA8IHNvdXJjZS5sZW5ndGgpIHtcblx0XHRjb25zdCByZXN0ID0gc291cmNlLnNsaWNlKGN1cnNvcik7XG5cdFx0Y29uc3Qgd2hpdGVzcGFjZSA9IC9eXFxzKy8uZXhlYyhyZXN0KTtcblx0XHRpZiAod2hpdGVzcGFjZSkge1xuXHRcdFx0Y3Vyc29yICs9IHdoaXRlc3BhY2VbMF0ubGVuZ3RoO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IG51bWJlciA9IC9eKD86XFxkKlxcLlxcZCt8XFxkK1xcLj9cXGQqKSg/OltlRV1bKy1dP1xcZCspPy8uZXhlYyhyZXN0KTtcblx0XHRpZiAobnVtYmVyKSB7XG5cdFx0XHRjdXJzb3IgKz0gbnVtYmVyWzBdLmxlbmd0aDtcblx0XHRcdGNvbnN0IHVuaXRNYXRjaCA9IC9eKCV8W2EtekEtWl0rKS8uZXhlYyhzb3VyY2Uuc2xpY2UoY3Vyc29yKSk7XG5cdFx0XHRjb25zdCB1bml0ID0gdW5pdE1hdGNoPy5bMF0gPz8gbnVsbDtcblx0XHRcdGlmICh1bml0TWF0Y2gpIGN1cnNvciArPSB1bml0TWF0Y2hbMF0ubGVuZ3RoO1xuXHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRraW5kOiBcIm51bWJlclwiLFxuXHRcdFx0XHR2YWx1ZTogTnVtYmVyKG51bWJlclswXSksXG5cdFx0XHRcdHVuaXQ6IHVuaXQgPT0gbnVsbCA/IG51bGwgOiB1bml0LnRvTG93ZXJDYXNlKClcblx0XHRcdH0pO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGlkZW50aWZpZXIgPSAvXlthLXpBLVpfXVthLXpBLVowLTlfLV0qLy5leGVjKHJlc3QpO1xuXHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdGtpbmQ6IFwiaWRlbnRpZmllclwiLFxuXHRcdFx0XHR2YWx1ZTogaWRlbnRpZmllclswXS50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9KTtcblx0XHRcdGN1cnNvciArPSBpZGVudGlmaWVyWzBdLmxlbmd0aDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBzeW1ib2wgPSByZXN0WzBdO1xuXHRcdGlmIChbXG5cdFx0XHRcIitcIixcblx0XHRcdFwiLVwiLFxuXHRcdFx0XCIqXCIsXG5cdFx0XHRcIi9cIixcblx0XHRcdFwiKFwiLFxuXHRcdFx0XCIpXCIsXG5cdFx0XHRcIixcIlxuXHRcdF0uaW5jbHVkZXMoc3ltYm9sKSkge1xuXHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRraW5kOiBcInN5bWJvbFwiLFxuXHRcdFx0XHR2YWx1ZTogc3ltYm9sXG5cdFx0XHR9KTtcblx0XHRcdGN1cnNvcisrO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5zdXBwb3J0ZWQgdG9rZW4gbmVhciBcIiR7cmVzdH1cImApO1xuXHR9XG5cdHJldHVybiB0b2tlbnM7XG59O1xudmFyIE51bWVyaWNUeXBlZE9NUGFyc2VyID0gY2xhc3Mge1xuXHR0b2tlbnM7XG5cdHdpbjtcblx0aW5kZXggPSAwO1xuXHRjb25zdHJ1Y3Rvcih0b2tlbnMsIHdpbikge1xuXHRcdHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXHRcdHRoaXMud2luID0gd2luO1xuXHR9XG5cdHBhcnNlKCkge1xuXHRcdGNvbnN0IHJvb3QgPSB0aGlzLnBhcnNlU3VtKCk7XG5cdFx0aWYgKHRoaXMuaW5kZXggIT09IHRoaXMudG9rZW5zLmxlbmd0aCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW5leHBlY3RlZCB0cmFpbGluZyBleHByZXNzaW9uXCIpO1xuXHRcdHJldHVybiByb290O1xuXHR9XG5cdGN1cnJlbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuXHR9XG5cdGNvbnN1bWUoKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcblx0XHRpZiAoIXRva2VuKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uXCIpO1xuXHRcdHRoaXMuaW5kZXgrKztcblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblx0Y29uc3VtZVN5bWJvbChzeW1ib2wpIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xuXHRcdGlmICh0b2tlbi5raW5kICE9PSBcInN5bWJvbFwiIHx8IHRva2VuLnZhbHVlICE9PSBzeW1ib2wpIHRocm93IG5ldyBTeW50YXhFcnJvcihgRXhwZWN0ZWQgXCIke3N5bWJvbH1cImApO1xuXHR9XG5cdG1hdGNoZXNTeW1ib2woc3ltYm9sKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblx0XHRyZXR1cm4gdG9rZW4/LmtpbmQgPT09IFwic3ltYm9sXCIgJiYgdG9rZW4udmFsdWUgPT09IHN5bWJvbDtcblx0fVxuXHRjcmVhdGVNYXRoKG5hbWUsIC4uLnZhbHVlcykge1xuXHRcdGNvbnN0IENvbnN0cnVjdG9yID0gZ2V0V2luZG93Q29uc3RydWN0b3IodGhpcy53aW4sIG5hbWUpO1xuXHRcdGlmICh0eXBlb2YgQ29uc3RydWN0b3IgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtuYW1lfSBpcyBub3Qgc3VwcG9ydGVkYCk7XG5cdFx0cmV0dXJuIG5ldyBDb25zdHJ1Y3RvciguLi52YWx1ZXMpO1xuXHR9XG5cdHBhcnNlU3VtKCkge1xuXHRcdGxldCB2YWx1ZSA9IHRoaXMucGFyc2VQcm9kdWN0KCk7XG5cdFx0d2hpbGUgKHRoaXMubWF0Y2hlc1N5bWJvbChcIitcIikgfHwgdGhpcy5tYXRjaGVzU3ltYm9sKFwiLVwiKSkge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3IgPSB0aGlzLmNvbnN1bWUoKTtcblx0XHRcdGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZVByb2R1Y3QoKTtcblx0XHRcdGlmIChvcGVyYXRvci5raW5kICE9PSBcInN5bWJvbFwiKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJFeHBlY3RlZCBzdW0gb3BlcmF0b3JcIik7XG5cdFx0XHRpZiAob3BlcmF0b3IudmFsdWUgPT09IFwiK1wiKSB2YWx1ZSA9IHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhTdW1cIiwgdmFsdWUsIHJpZ2h0KTtcblx0XHRcdGVsc2UgdmFsdWUgPSB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoU3VtXCIsIHZhbHVlLCB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoTmVnYXRlXCIsIHJpZ2h0KSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRwYXJzZVByb2R1Y3QoKSB7XG5cdFx0bGV0IHZhbHVlID0gdGhpcy5wYXJzZVVuYXJ5KCk7XG5cdFx0d2hpbGUgKHRoaXMubWF0Y2hlc1N5bWJvbChcIipcIikgfHwgdGhpcy5tYXRjaGVzU3ltYm9sKFwiL1wiKSkge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3IgPSB0aGlzLmNvbnN1bWUoKTtcblx0XHRcdGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZVVuYXJ5KCk7XG5cdFx0XHRpZiAob3BlcmF0b3Iua2luZCAhPT0gXCJzeW1ib2xcIikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRXhwZWN0ZWQgcHJvZHVjdCBvcGVyYXRvclwiKTtcblx0XHRcdGlmIChvcGVyYXRvci52YWx1ZSA9PT0gXCIqXCIpIHZhbHVlID0gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aFByb2R1Y3RcIiwgdmFsdWUsIHJpZ2h0KTtcblx0XHRcdGVsc2UgdmFsdWUgPSB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoUHJvZHVjdFwiLCB2YWx1ZSwgdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aEludmVydFwiLCByaWdodCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0cGFyc2VVbmFyeSgpIHtcblx0XHRpZiAodGhpcy5tYXRjaGVzU3ltYm9sKFwiK1wiKSkge1xuXHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVVuYXJ5KCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLm1hdGNoZXNTeW1ib2woXCItXCIpKSB7XG5cdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoTmVnYXRlXCIsIHRoaXMucGFyc2VVbmFyeSgpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGFyc2VQcmltYXJ5KCk7XG5cdH1cblx0cGFyc2VQcmltYXJ5KCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG5cdFx0aWYgKHRva2VuLmtpbmQgPT09IFwibnVtYmVyXCIpIHJldHVybiBjcmVhdGVUeXBlZFVuaXRWYWx1ZSh0aGlzLndpbiwgdG9rZW4udW5pdCA/PyBcIm51bWJlclwiLCB0b2tlbi52YWx1ZSk7XG5cdFx0aWYgKHRva2VuLmtpbmQgPT09IFwic3ltYm9sXCIgJiYgdG9rZW4udmFsdWUgPT09IFwiKFwiKSB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VTdW0oKTtcblx0XHRcdHRoaXMuY29uc3VtZVN5bWJvbChcIilcIik7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdGlmICh0b2tlbi5raW5kID09PSBcImlkZW50aWZpZXJcIikgcmV0dXJuIHRoaXMucGFyc2VGdW5jdGlvbih0b2tlbi52YWx1ZSk7XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRXhwZWN0ZWQgYSBudW1lcmljIHZhbHVlXCIpO1xuXHR9XG5cdHBhcnNlRnVuY3Rpb24obmFtZSkge1xuXHRcdHRoaXMuY29uc3VtZVN5bWJvbChcIihcIik7XG5cdFx0aWYgKG5hbWUgPT09IFwiY2FsY1wiKSB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VTdW0oKTtcblx0XHRcdHRoaXMuY29uc3VtZVN5bWJvbChcIilcIik7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdGNvbnN0IHZhbHVlcyA9IFtdO1xuXHRcdGlmICghdGhpcy5tYXRjaGVzU3ltYm9sKFwiKVwiKSkge1xuXHRcdFx0dmFsdWVzLnB1c2godGhpcy5wYXJzZVN1bSgpKTtcblx0XHRcdHdoaWxlICh0aGlzLm1hdGNoZXNTeW1ib2woXCIsXCIpKSB7XG5cdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0XHR2YWx1ZXMucHVzaCh0aGlzLnBhcnNlU3VtKCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmNvbnN1bWVTeW1ib2woXCIpXCIpO1xuXHRcdGlmIChuYW1lID09PSBcIm1pblwiKSB7XG5cdFx0XHRpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwibWluKCkgcmVxdWlyZXMgYSB2YWx1ZVwiKTtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoTWluXCIsIC4uLnZhbHVlcyk7XG5cdFx0fVxuXHRcdGlmIChuYW1lID09PSBcIm1heFwiKSB7XG5cdFx0XHRpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwibWF4KCkgcmVxdWlyZXMgYSB2YWx1ZVwiKTtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoTWF4XCIsIC4uLnZhbHVlcyk7XG5cdFx0fVxuXHRcdGlmIChuYW1lID09PSBcImNsYW1wXCIpIHtcblx0XHRcdGlmICh2YWx1ZXMubGVuZ3RoICE9PSAzKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJjbGFtcCgpIHJlcXVpcmVzIHRocmVlIHZhbHVlc1wiKTtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoQ2xhbXBcIiwgdmFsdWVzWzBdLCB2YWx1ZXNbMV0sIHZhbHVlc1syXSk7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5zdXBwb3J0ZWQgZnVuY3Rpb24gXCIke25hbWV9XCJgKTtcblx0fVxufTtcbnZhciBwYXJzZVRvVHlwZWRPTSA9IChjc3NWYWx1ZSwgd2luKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgdG9rZW5zID0gdG9rZW5pemVOdW1lcmljQ1NTKGNzc1ZhbHVlKTtcblx0XHRyZXR1cm4gbmV3IE51bWVyaWNUeXBlZE9NUGFyc2VyKHRva2Vucywgd2luKS5wYXJzZSgpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBoYXNUeXBlZE9NID0gdHlwZW9mIENTU1N0eWxlVmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIENTU1VuaXRWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIjtcbnZhciBpc1VuaXRWYWx1ZSA9ICh2YWwpID0+IGhhc1R5cGVkT00gJiYgdmFsIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xudmFyIHNldFByb3BlcnR5SWZOb3RFcXVhbCA9IChzdHlsZVJlZiwga2ViYWIsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRpZiAoIXN0eWxlUmVmIHx8ICFrZWJhYikgcmV0dXJuO1xuXHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdGlmIChzdHlsZVJlZi5nZXRQcm9wZXJ0eVZhbHVlKGtlYmFiKSAhPT0gXCJcIikgc3R5bGVSZWYucmVtb3ZlUHJvcGVydHkoa2ViYWIpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoc3R5bGVSZWYuZ2V0UHJvcGVydHlWYWx1ZShrZWJhYikgIT09IHZhbHVlKSBzdHlsZVJlZi5zZXRQcm9wZXJ0eShrZWJhYiwgdmFsdWUsIGltcG9ydGFuY2UpO1xufTtcbnZhciBzZXRTdHlsZVByb3BlcnR5VHlwZWQgPSAoZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UgPSBcIlwiKSA9PiB7XG5cdGlmICghZWxlbWVudCB8fCAhbmFtZSkgcmV0dXJuIGVsZW1lbnQ7XG5cdGNvbnN0IGtlYmFiID0gY2FtZWxUb0tlYmFiKG5hbWUpO1xuXHRjb25zdCBzdHlsZVJlZiA9IGVsZW1lbnQuc3R5bGU7XG5cdGNvbnN0IHN0eWxlTWFwUmVmID0gZWxlbWVudC5hdHRyaWJ1dGVTdHlsZU1hcCA/PyBlbGVtZW50LnN0eWxlTWFwO1xuXHRpZiAoIWhhc1R5cGVkT00gfHwgIXN0eWxlTWFwUmVmKSByZXR1cm4gc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlKTtcblx0Y29uc3Qgd2luID0gZWxlbWVudC5vd25lckRvY3VtZW50Py5kZWZhdWx0VmlldyA/PyBnbG9iYWxUaGlzO1xuXHRsZXQgdmFsID0gaGFzVmFsdWUodmFsdWUpICYmIGlzUmVhY3RpdmVTdHlsZVZhbHVlKHZhbHVlKSA/IHZhbHVlLnZhbHVlIDogdmFsdWU7XG5cdGlmICh2YWwgPT0gbnVsbCkge1xuXHRcdHN0eWxlTWFwUmVmLmRlbGV0ZT8uKGtlYmFiKTtcblx0XHRpZiAoc3R5bGVSZWYpIHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIG51bGwsIGltcG9ydGFuY2UpO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cdGlmIChpc05hdGl2ZUNTU1N0eWxlVmFsdWUodmFsKSkge1xuXHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0aWYgKGlzVW5pdFZhbHVlKHZhbCkgJiYgaXNVbml0VmFsdWUob2xkKSkge1xuXHRcdFx0aWYgKG9sZC52YWx1ZSA9PT0gdmFsLnZhbHVlICYmIG9sZC51bml0ID09PSB2YWwudW5pdCkgcmV0dXJuIGVsZW1lbnQ7XG5cdFx0fSBlbHNlIGlmIChvbGQgPT09IHZhbCkgcmV0dXJuIGVsZW1lbnQ7XG5cdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCB2YWwpO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cdGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKSB7XG5cdFx0aWYgKENTUz8ubnVtYmVyICYmICFrZWJhYi5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IG5ld1ZhbCA9IENTUy5udW1iZXIodmFsKTtcblx0XHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0XHRpZiAoaXNVbml0VmFsdWUob2xkKSAmJiBvbGQudmFsdWUgPT09IG5ld1ZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gbmV3VmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCBuZXdWYWwpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIFN0cmluZyh2YWwpLCBpbXBvcnRhbmNlKTtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH1cblx0fVxuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdGlmICgvXFxiKGNhbGN8bWlufG1heHxjbGFtcClcXHMqXFwoLy50ZXN0KHZhbCkpIHtcblx0XHRcdGNvbnN0IHBhcnNlZCA9IHBhcnNlVG9UeXBlZE9NKHZhbCwgd2luKTtcblx0XHRcdGlmIChwYXJzZWQpIHRyeSB7XG5cdFx0XHRcdHN0eWxlTWFwUmVmLnNldChrZWJhYiwgcGFyc2VkKTtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHRcdGNvbnN0IG1heWJlTnVtID0gdHJ5U3RyaW5nQXNOdW1iZXIodmFsKTtcblx0XHRpZiAodHlwZW9mIG1heWJlTnVtID09PSBcIm51bWJlclwiICYmIENTUz8ubnVtYmVyICYmICFrZWJhYi5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IG5ld1ZhbCA9IENTUy5udW1iZXIobWF5YmVOdW0pO1xuXHRcdFx0Y29uc3Qgb2xkID0gc3R5bGVNYXBSZWYuZ2V0KGtlYmFiKTtcblx0XHRcdGlmIChpc1VuaXRWYWx1ZShvbGQpICYmIG9sZC52YWx1ZSA9PT0gbmV3VmFsLnZhbHVlICYmIG9sZC51bml0ID09PSBuZXdWYWwudW5pdCkgcmV0dXJuIGVsZW1lbnQ7XG5cdFx0XHRzdHlsZU1hcFJlZi5zZXQoa2ViYWIsIG5ld1ZhbCk7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdFx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgdmFsLCBpbXBvcnRhbmNlKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2sgPSAoZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UgPSBcIlwiKSA9PiB7XG5cdGlmICghZWxlbWVudCB8fCAhbmFtZSkgcmV0dXJuIGVsZW1lbnQ7XG5cdGNvbnN0IGtlYmFiID0gY2FtZWxUb0tlYmFiKG5hbWUpO1xuXHRjb25zdCBzdHlsZVJlZiA9IGVsZW1lbnQuc3R5bGU7XG5cdGlmICghc3R5bGVSZWYpIHJldHVybiBlbGVtZW50O1xuXHRsZXQgdmFsID0gaGFzVmFsdWUodmFsdWUpICYmIGlzUmVhY3RpdmVTdHlsZVZhbHVlKHZhbHVlKSA/IHZhbHVlLnZhbHVlIDogdmFsdWU7XG5cdGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiICYmICFpc05hdGl2ZUNTU1N0eWxlVmFsdWUodmFsKSkgdmFsID0gdHJ5U3RyaW5nQXNOdW1iZXIodmFsKSA/PyB2YWw7XG5cdGlmICh2YWwgPT0gbnVsbCkge1xuXHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIG51bGwsIGltcG9ydGFuY2UpO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cdGlmIChpc05hdGl2ZUNTU1N0eWxlVmFsdWUodmFsKSkge1xuXHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIFN0cmluZyh2YWwpLCBpbXBvcnRhbmNlKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuXHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIFN0cmluZyh2YWwpLCBpbXBvcnRhbmNlKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBzZXRTdHlsZVByb3BlcnR5ID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRyZXR1cm4gaGFzVHlwZWRPTSA/IHNldFN0eWxlUHJvcGVydHlUeXBlZChlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSkgOiBzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2soZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UpO1xufTtcbnZhciBzZXRTdHlsZUluUnVsZSA9IChzZWxlY3RvciwgbmFtZSwgdmFsdWUpID0+IHtcblx0cmV0dXJuIHNldFN0eWxlUHJvcGVydHkoZ2V0U3R5bGVSdWxlKHNlbGVjdG9yKSwgbmFtZSwgdmFsdWUpO1xufTtcbnZhciBzZXRTdHlsZVJ1bGUgPSAoc2VsZWN0b3IsIHNoZWV0KSA9PiB7XG5cdGNvbnN0IHJ1bGUgPSBnZXRTdHlsZVJ1bGUoc2VsZWN0b3IpO1xuXHRPYmplY3QuZW50cmllcyhzaGVldCkuZm9yRWFjaCgoW3Byb3BOYW1lLCBwcm9wVmFsdWVdKSA9PiBzZXRTdHlsZVByb3BlcnR5KHJ1bGUsIHByb3BOYW1lLCBwcm9wVmFsdWUpKTtcblx0cmV0dXJuIHJ1bGU7XG59O1xudmFyIGhhc2ggPSBhc3luYyAoc3RyaW5nKSA9PiB7XG5cdGNvbnN0IGhhc2hCdWZmZXIgPSBhd2FpdCBjcnlwdG8/LnN1YnRsZT8uZGlnZXN0KFwiU0hBLTI1NlwiLCB0eXBlb2Ygc3RyaW5nID09IFwic3RyaW5nXCIgPyBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc3RyaW5nKSA6IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gc3RyaW5nIDogYXdhaXQgc3RyaW5nPy5hcnJheUJ1ZmZlcj8uKCkpO1xuXHRyZXR1cm4gXCJzaGEyNTYtXCIgKyBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoaGFzaEJ1ZmZlcikpKTtcbn07XG52YXIgbG9hZFN0eWxlU2hlZXQgPSAoaW5saW5lLCBiYXNlLCBsYXllciA9IFwiXCIsIGludGVncml0eSkgPT4ge1xuXHRjb25zdCBsb2FkID0gZmV0Y2hBbmRDYWNoZShpbmxpbmUpO1xuXHRjb25zdCB1cmwgPSB0eXBlb2YgaW5saW5lID09IFwic3RyaW5nXCIgPyBVUkwuY2FuUGFyc2UoaW5saW5lKSA/IGlubGluZSA6IGxvYWQgOiBsb2FkO1xuXHRpZiAoYmFzZT8uWzBdKSBiYXNlWzBdLmZldGNoUHJpb3JpdHkgPSBcImhpZ2hcIjtcblx0aWYgKGJhc2UgJiYgdXJsICYmIHR5cGVvZiB1cmwgPT0gXCJzdHJpbmdcIikgc2V0U3R5bGVVUkwoYmFzZSwgdXJsLCBsYXllcik7XG5cdGlmIChiYXNlPy5bMF0gJiYgKCFVUkwuY2FuUGFyc2UoaW5saW5lKSB8fCBpbnRlZ3JpdHkpICYmIGJhc2U/LlswXSBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge31cblx0cmV0dXJuIHByb21pc2VPckRpcmVjdChsb2FkLCAocmVzKSA9PiB7XG5cdFx0aWYgKGJhc2U/LlswXSAmJiByZXMpIHtcblx0XHRcdHNldFN0eWxlVVJMKGJhc2UsIHJlcywgbGF5ZXIpO1xuXHRcdFx0YmFzZT8uWzBdLnNldEF0dHJpYnV0ZShcImxvYWRlZFwiLCBcIlwiKTtcblx0XHR9XG5cdH0pPy5jYXRjaD8uKChlcnJvcikgPT4ge1xuXHRcdGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBsb2FkIHN0eWxlIHNoZWV0OlwiLCBlcnJvcik7XG5cdH0pO1xufTtcbnZhciBsb2FkQmxvYlN0eWxlID0gKGlubGluZSkgPT4ge1xuXHRjb25zdCBzdHlsZSA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIikgOiBudWxsO1xuXHRpZiAoc3R5bGUpIHN0eWxlLmZldGNoUHJpb3JpdHkgPSBcImhpZ2hcIjtcblx0aWYgKHN0eWxlKSB7XG5cdFx0T2JqZWN0LmFzc2lnbihzdHlsZSwge1xuXHRcdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRcdHR5cGU6IFwidGV4dC9jc3NcIixcblx0XHRcdGNyb3NzT3JpZ2luOiBcInNhbWUtb3JpZ2luXCJcblx0XHR9KTtcblx0XHRzdHlsZS5kYXRhc2V0Lm93bmVyID0gT1dORVI7XG5cdFx0bG9hZFN0eWxlU2hlZXQoaW5saW5lLCBbc3R5bGUsIFwiaHJlZlwiXSk7XG5cdFx0dHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmQoc3R5bGUpO1xuXHRcdHJldHVybiBzdHlsZTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgbG9hZElubGluZVN0eWxlID0gKGlubGluZSwgcm9vdEVsZW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50Py5oZWFkIDogbnVsbCwgbGF5ZXIgPSBcIlwiKSA9PiB7XG5cdGNvbnN0IFBMQUNFID0gcm9vdEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I/LihcImhlYWRcIikgPz8gcm9vdEVsZW1lbnQ7XG5cdGlmICh0eXBlb2YgSFRNTEhlYWRFbGVtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgUExBQ0UgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQpIHJldHVybiBsb2FkQmxvYlN0eWxlKGlubGluZSk7XG5cdGNvbnN0IHN0eWxlID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikgOiBudWxsO1xuXHRpZiAoc3R5bGUpIHtcblx0XHRzdHlsZS5kYXRhc2V0Lm93bmVyID0gT1dORVI7XG5cdFx0bG9hZFN0eWxlU2hlZXQoaW5saW5lLCBbc3R5bGUsIFwiaW5uZXJIVE1MXCJdLCBsYXllcik7XG5cdFx0UExBQ0U/LnByZXBlbmQ/LihzdHlsZSk7XG5cdFx0cmV0dXJuIHN0eWxlO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBzZXRQcm9wZXJ0eSA9ICh0YXJnZXQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRyZXR1cm4gc2V0U3R5bGVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbn07XG52YXIgcHJlbG9hZFN0eWxlID0gKHN0eWxlcykgPT4ge1xuXHRyZXR1cm4gbG9hZEFzQWRvcHRlZChzdHlsZXMsIFwiXCIpO1xufTtcbnZhciBhZG9wdGVkTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BhZG9wdGVkTWFwXCIpO1xudmFyIGFkb3B0ZWRNYXAgPSBnbG9iYWxUaGlzW2Fkb3B0ZWRNYXBTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGFkb3B0ZWRCbG9iTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BhZG9wdGVkQmxvYk1hcFwiKTtcbnZhciBhZG9wdGVkQmxvYk1hcCA9IGdsb2JhbFRoaXNbYWRvcHRlZEJsb2JNYXBTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBsYXllckNvdW50ZXJTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGxheWVyQ291bnRlclwiKTtcbnZhciBsYXllckNvdW50ZXIgPSBnbG9iYWxUaGlzW2xheWVyQ291bnRlclN5bWJvbF0gPz89IDA7XG52YXIgYXBwbHlBZG9wdGVkU3R5bGVUZXh0ID0gKHNoZWV0LCBjc3NUZXh0KSA9PiB7XG5cdGlmICghc2hlZXQgfHwgIWNzc1RleHQpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRzaGVldC5yZXBsYWNlU3luYyhjc3NUZXh0KTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zdCBtZXNzYWdlID0gU3RyaW5nKGVycm9yPy5tZXNzYWdlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCEobWVzc2FnZS5pbmNsdWRlcyhcIkBpbXBvcnQgcnVsZXMgYXJlIG5vdCBhbGxvd2VkXCIpIHx8IG1lc3NhZ2UuaW5jbHVkZXMoXCJAaW1wb3J0XCIpICYmIG1lc3NhZ2UuaW5jbHVkZXMoXCJub3QgYWxsb3dlZFwiKSkpIGNvbnNvbGUud2FybihcIltET01dIEZhaWxlZCB0byBhcHBseSBhZG9wdGVkIHN0eWxlc2hlZXQ6XCIsIGVycm9yKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgbG9hZEFzQWRvcHRlZCA9IChzdHlsZXMsIGxheWVyTmFtZSA9IG51bGwpID0+IHtcblx0aWYgKCFzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0KCkpIHtcblx0XHRpZiAodHlwZW9mIHN0eWxlcyA9PT0gXCJzdHJpbmdcIikgbG9hZElubGluZVN0eWxlKHN0eWxlcywgdm9pZCAwLCBsYXllck5hbWUgfHwgXCJcIik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKHR5cGVvZiBzdHlsZXMgPT09IFwic3RyaW5nXCIgJiYgY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50KHN0eWxlcykpIHtcblx0XHRsb2FkSW5saW5lU3R5bGUoc3R5bGVzLCB2b2lkIDAsIGxheWVyTmFtZSB8fCBcIlwiKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRpZiAodHlwZW9mIHN0eWxlcyA9PSBcInN0cmluZ1wiICYmIGFkb3B0ZWRNYXA/Lmhhcz8uKHN0eWxlcykpIHtcblx0XHRjb25zdCBjYWNoZWQgPSBhZG9wdGVkTWFwLmdldChzdHlsZXMpO1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzICYmICFkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMuaW5jbHVkZXMoY2FjaGVkKSkgZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goY2FjaGVkKTtcblx0XHRyZXR1cm4gY2FjaGVkO1xuXHR9XG5cdGlmICgoc3R5bGVzIGluc3RhbmNlb2YgQmxvYiB8fCBzdHlsZXMgaW5zdGFuY2VvZiBGaWxlKSAmJiBhZG9wdGVkQmxvYk1hcD8uaGFzPy4oc3R5bGVzKSkge1xuXHRcdGNvbnN0IGNhY2hlZCA9IGFkb3B0ZWRCbG9iTWFwLmdldChzdHlsZXMpO1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzICYmICFkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMuaW5jbHVkZXMoY2FjaGVkKSkgZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goY2FjaGVkKTtcblx0XHRyZXR1cm4gY2FjaGVkO1xuXHR9XG5cdGlmICghc3R5bGVzKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgc2hlZXQgPSB0eXBlb2Ygc3R5bGVzID09IFwic3RyaW5nXCIgPyBhZG9wdGVkTWFwLmdldE9ySW5zZXJ0Q29tcHV0ZWQoc3R5bGVzLCAoc3R5bGVzKSA9PiBuZXcgQ1NTU3R5bGVTaGVldCgpKSA6IGFkb3B0ZWRCbG9iTWFwLmdldE9ySW5zZXJ0Q29tcHV0ZWQoc3R5bGVzLCAoc3R5bGVzKSA9PiBuZXcgQ1NTU3R5bGVTaGVldCgpKTtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKHNoZWV0KSkgZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hlZXQpO1xuXHRpZiAodHlwZW9mIHN0eWxlcyA9PSBcInN0cmluZ1wiICYmICFVUkwuY2FuUGFyc2Uoc3R5bGVzKSkge1xuXHRcdGNvbnN0IGxheWVyV3JhcHBlZCA9IGxheWVyTmFtZSA/IGBAbGF5ZXIgJHtsYXllck5hbWV9IHsgJHtzdHlsZXN9IH1gIDogc3R5bGVzO1xuXHRcdGFkb3B0ZWRNYXAuc2V0KHN0eWxlcywgc2hlZXQpO1xuXHRcdGlmICghYXBwbHlBZG9wdGVkU3R5bGVUZXh0KHNoZWV0LCBsYXllcldyYXBwZWQpKSB7XG5cdFx0XHRyZW1vdmVBZG9wdGVkKHNoZWV0KTtcblx0XHRcdGFkb3B0ZWRNYXAuZGVsZXRlKHN0eWxlcyk7XG5cdFx0XHRsb2FkSW5saW5lU3R5bGUoc3R5bGVzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHNoZWV0O1xuXHR9IGVsc2UgcHJvbWlzZU9yRGlyZWN0KGZldGNoQXNJbmxpbmUoc3R5bGVzKSwgKGNhY2hlZCkgPT4ge1xuXHRcdGFkb3B0ZWRNYXAuc2V0KGNhY2hlZCwgc2hlZXQpO1xuXHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdGlmIChjc3NUZXh0UmVxdWlyZXNJbmxpbmVTdHlsZUVsZW1lbnQoY2FjaGVkKSkge1xuXHRcdFx0XHRyZW1vdmVBZG9wdGVkKHNoZWV0KTtcblx0XHRcdFx0YWRvcHRlZE1hcC5kZWxldGUoY2FjaGVkKTtcblx0XHRcdFx0YWRvcHRlZEJsb2JNYXAuZGVsZXRlKHN0eWxlcyk7XG5cdFx0XHRcdGxvYWRJbmxpbmVTdHlsZShjYWNoZWQsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdFx0XHRyZXR1cm4gc2hlZXQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBsYXllcldyYXBwZWQgPSBsYXllck5hbWUgPyBgQGxheWVyICR7bGF5ZXJOYW1lfSB7ICR7Y2FjaGVkfSB9YCA6IGNhY2hlZDtcblx0XHRcdGlmICghYXBwbHlBZG9wdGVkU3R5bGVUZXh0KHNoZWV0LCBsYXllcldyYXBwZWQpKSB7XG5cdFx0XHRcdHJlbW92ZUFkb3B0ZWQoc2hlZXQpO1xuXHRcdFx0XHRhZG9wdGVkTWFwLmRlbGV0ZShjYWNoZWQpO1xuXHRcdFx0XHRhZG9wdGVkQmxvYk1hcC5kZWxldGUoc3R5bGVzKTtcblx0XHRcdFx0bG9hZElubGluZVN0eWxlKGNhY2hlZCwgdm9pZCAwLCBsYXllck5hbWUgfHwgXCJcIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2hlZXQ7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIHNoZWV0O1xufTtcbnZhciByZW1vdmVBZG9wdGVkID0gKHNoZWV0KSA9PiB7XG5cdGlmICghc2hlZXQpIHJldHVybiBmYWxzZTtcblx0Y29uc3QgdGFyZ2V0ID0gdHlwZW9mIHNoZWV0ID09PSBcInN0cmluZ1wiID8gYWRvcHRlZE1hcC5nZXQoc2hlZXQpIDogc2hlZXQ7XG5cdGlmICghdGFyZ2V0IHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCBzaGVldHMgPSBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHM7XG5cdGNvbnN0IGlkeCA9IHNoZWV0cy5pbmRleE9mKHRhcmdldCk7XG5cdGlmIChpZHggIT09IC0xKSB7XG5cdFx0c2hlZXRzLnNwbGljZShpZHgsIDEpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgcGFyc2VPcmlnaW4gPSAob3JpZ2luLCBlbGVtZW50KSA9PiB7XG5cdGNvbnN0IHZhbHVlcyA9IG9yaWdpbi5zcGxpdChcIiBcIik7XG5cdHJldHVybiBuZXcgRE9NUG9pbnQocGFyc2VMZW5ndGgodmFsdWVzWzBdLCAoKSA9PiBlbGVtZW50LmNsaWVudFdpZHRoKSwgcGFyc2VMZW5ndGgodmFsdWVzWzFdLCAoKSA9PiBlbGVtZW50LmNsaWVudEhlaWdodCkpO1xufTtcbnZhciBwYXJzZUxlbmd0aCA9ICh2YWx1ZSwgc2l6ZSkgPT4ge1xuXHRpZiAodmFsdWUuZW5kc1dpdGgoXCIlXCIpKSByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgLyAxMDAgKiBzaXplKCk7XG5cdHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbn07XG52YXIgZ2V0VHJhbnNmb3JtID0gKGVsKSA9PiB7XG5cdGlmIChlbD8uY29tcHV0ZWRTdHlsZU1hcCkge1xuXHRcdGNvbnN0IG1hdHJpeCA9IGVsLmNvbXB1dGVkU3R5bGVNYXAoKS5nZXQoXCJ0cmFuc2Zvcm1cIik/LnRvTWF0cml4Py4oKTtcblx0XHRpZiAobWF0cml4KSByZXR1cm4gbWF0cml4O1xuXHR9IGVsc2UgaWYgKGVsKSB7XG5cdFx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblx0XHRyZXR1cm4gbmV3IERPTU1hdHJpeChzdHlsZT8uZ2V0UHJvcGVydHlWYWx1ZT8uKFwidHJhbnNmb3JtXCIpKTtcblx0fVxuXHRyZXR1cm4gbmV3IERPTU1hdHJpeCgpO1xufTtcbnZhciBnZXRUcmFuc2Zvcm1PcmlnaW4gPSAoZWwpID0+IHtcblx0Y29uc3QgY3NzT3JpZ2luID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk/LmdldFByb3BlcnR5VmFsdWU/LihcInRyYW5zZm9ybS1vcmlnaW5cIikgfHwgYDUwJSA1MCVgO1xuXHRyZXR1cm4gcGFyc2VPcmlnaW4oY3NzT3JpZ2luLCBlbCk7XG59O1xudmFyIGdldFByb3BlcnR5VmFsdWUgPSAoc3JjLCBuYW1lKSA9PiB7XG5cdGlmIChcImNvbXB1dGVkU3R5bGVNYXBcIiBpbiBzcmMpIHtcblx0XHRjb25zdCB2YWwgPSBzcmM/LmNvbXB1dGVkU3R5bGVNYXA/LigpPy5nZXQobmFtZSk7XG5cdFx0cmV0dXJuIHZhbCBpbnN0YW5jZW9mIENTU1VuaXRWYWx1ZSA/IHZhbD8udmFsdWUgfHwgMCA6IHZhbD8udG9TdHJpbmc/LigpO1xuXHR9XG5cdGlmIChzcmMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdGNvbnN0IGNzID0gZ2V0Q29tcHV0ZWRTdHlsZT8uKHNyYywgXCJcIik7XG5cdFx0cmV0dXJuIHBhcnNlRmxvYXQoY3M/LmdldFByb3BlcnR5VmFsdWU/LihuYW1lKT8ucmVwbGFjZT8uKFwicHhcIiwgXCJcIikpIHx8IDA7XG5cdH1cblx0cmV0dXJuIHBhcnNlRmxvYXQoKHNyYz8uc3R5bGUgPz8gc3JjKS5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnJlcGxhY2U/LihcInB4XCIsIFwiXCIpKSB8fCAwO1xufTtcbnZhciBnZXRFbGVtZW50Wm9vbSA9IChlbGVtZW50KSA9PiB7XG5cdGxldCB6b29tID0gMSwgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xuXHR3aGlsZSAoY3VycmVudEVsZW1lbnQpIHtcblx0XHRpZiAoXCJjdXJyZW50Q1NTWm9vbVwiIGluIGN1cnJlbnRFbGVtZW50KSB7XG5cdFx0XHRjb25zdCBjdXJyZW50Q1NTWm9vbSA9IGN1cnJlbnRFbGVtZW50LmN1cnJlbnRDU1Nab29tO1xuXHRcdFx0aWYgKHR5cGVvZiBjdXJyZW50Q1NTWm9vbSA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHpvb20gKj0gY3VycmVudENTU1pvb207XG5cdFx0fVxuXHRcdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50RWxlbWVudCk7XG5cdFx0aWYgKHN0eWxlLnpvb20gJiYgc3R5bGUuem9vbSAhPT0gXCJub3JtYWxcIikgcmV0dXJuIHpvb20gKj0gcGFyc2VGbG9hdChzdHlsZS56b29tKTtcblx0XHRpZiAoc3R5bGUuem9vbSAmJiBzdHlsZS56b29tICE9PSBcIm5vcm1hbFwiIHx8IFwiY3VycmVudENTU1pvb21cIiBpbiBjdXJyZW50RWxlbWVudCkgcmV0dXJuIHpvb207XG5cdFx0Y3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudD8ub2Zmc2V0UGFyZW50ID8/IGN1cnJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50O1xuXHR9XG5cdHJldHVybiB6b29tO1xufTtcbnZhciBnZXRQeFZhbHVlID0gKGVsZW1lbnQsIG5hbWUpID0+IHtcblx0cmV0dXJuIGdldFByb3BlcnR5VmFsdWU/LihlbGVtZW50LCBuYW1lKTtcbn07XG52YXIgZ2V0UGFkZGluZyA9IChzcmMsIGF4aXMpID0+IHtcblx0aWYgKGF4aXMgPT0gXCJpbmxpbmVcIikgcmV0dXJuIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctaW5saW5lLXN0YXJ0XCIpICsgZ2V0UHJvcGVydHlWYWx1ZShzcmMsIFwicGFkZGluZy1pbmxpbmUtZW5kXCIpO1xuXHRyZXR1cm4gZ2V0UHJvcGVydHlWYWx1ZShzcmMsIFwicGFkZGluZy1ibG9jay1zdGFydFwiKSArIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctYmxvY2stZW5kXCIpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0JlaGF2aW9yLnRzXG52YXIgYm91bmRCZWhhdmlvcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiaW5kQmVoYXZpb3IgPSAoZWxlbWVudCwgYmVoU2V0LCBiZWhhdmlvcikgPT4ge1xuXHRuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFiZWhTZXQuaGFzKGJlaGF2aW9yKSkgYmVoU2V0LmFkZChiZWhhdmlvcik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciByZWZsZWN0QmVoYXZpb3JzID0gKGVsZW1lbnQsIGJlaGF2aW9ycykgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0aWYgKGJlaGF2aW9ycykge1xuXHRcdGNvbnN0IGJlaFNldCA9IGJvdW5kQmVoYXZpb3JzLmdldE9ySW5zZXJ0KGVsZW1lbnQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuXHRcdFsuLi5iZWhhdmlvcnM/LnZhbHVlcz8uKCkgfHwgW11dLm1hcCgoZSkgPT4gYmluZEJlaGF2aW9yKGVsZW1lbnQsIGJlaFNldCwgZSkpO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL1N0b3JlLnRzXG52YXIgbmFtZWRTdG9yZU1hcHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG5hbWVkU3RvcmVNYXBzXCIpO1xudmFyIG5hbWVkU3RvcmVNYXBzID0gZ2xvYmFsVGhpc1tuYW1lZFN0b3JlTWFwc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZ2V0U3RvcmVzT2ZFbGVtZW50ID0gKG1hcCwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCBFID0gWy4uLm1hcC5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChFPy5tYXA/LigoW24sIG1dKSA9PiBbbiwgbT8uZ2V0Py4oZWxlbWVudCldKT8uZmlsdGVyPy4oKFtuLCBlXSkgPT4gISFlKSB8fCBbXSk7XG59O1xudmFyIGlzV2Vha0NvbXBhdGlibGUgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKHR5cGVvZiBlbGVtZW50ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGVsZW1lbnQgPT0gXCJmdW5jdGlvblwiKSAmJiBlbGVtZW50ICE9IG51bGw7XG59O1xudmFyIGJpbmRTdG9yZSA9IChlbGVtZW50LCBuYW1lLCBvYmopID0+IHtcblx0aWYgKCFpc1dlYWtDb21wYXRpYmxlKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgcmV0dXJuIGVsZW1lbnQ7XG5cdGxldCB3ZWFrTWFwID0gbmFtZWRTdG9yZU1hcHMuZ2V0KG5hbWUpO1xuXHRpZiAoIXdlYWtNYXApIHtcblx0XHR3ZWFrTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdFx0bmFtZWRTdG9yZU1hcHMuc2V0KG5hbWUsIHdlYWtNYXApO1xuXHR9XG5cdGlmICghd2Vha01hcC5oYXMoZWxlbWVudCkgJiYgZWxlbWVudCAhPSBudWxsKSB3ZWFrTWFwLnNldChlbGVtZW50LCBvYmopO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdFN0b3JlcyA9IChlbGVtZW50LCBzdG9yZXMpID0+IHtcblx0aWYgKCFlbGVtZW50IHx8ICFzdG9yZXMpIHJldHVybjtcblx0Zm9yIChjb25zdCBbbmFtZSwgb2JqXSBvZiBzdG9yZXMuZW50cmllcygpKSBiaW5kU3RvcmUoZWxlbWVudCwgbmFtZSwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vTWl4aW5zLnRzXG52YXIgcmVmbGVjdE1peGlucyA9IChlbGVtZW50LCBtaXhpbnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChtaXhpbnMpIHtcblx0XHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRcdGlmICghYm91bmRNaXhpblNldD8uaGFzPy4oZWxlbWVudCkpIGJvdW5kTWl4aW5TZXQ/LnNldD8uKGVsZW1lbnQsIG1peGluU2V0KTtcblx0XHRbLi4ubWl4aW5zPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRNaXhpbnMoZWxlbWVudCwgZSwgbWl4aW5TZXQpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgZ2V0RWxlbWVudFJlbGF0ZWQgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHN0b3JlU2V0OiBnZXRTdG9yZXNPZkVsZW1lbnQobmFtZWRTdG9yZU1hcHMsIGVsZW1lbnQpLFxuXHRcdG1peGluU2V0OiBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSxcblx0XHRiZWhhdmlvclNldDogYm91bmRCZWhhdmlvcnM/LmdldD8uKGVsZW1lbnQpXG5cdH07XG59O1xudmFyIGJpbmRNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW4sIG1peFNldCkgPT4ge1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0bWl4U2V0IHx8PSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KTtcblx0aWYgKCFtaXhTZXQ/Lmhhcz8uKG1peGluKSkge1xuXHRcdG1peFNldD8uYWRkPy4obWl4aW4pO1xuXHRcdG1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uYWRkPy4oZWxlbWVudCk7XG5cdFx0aWYgKG1peGluLm5hbWUpIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXSwgbWl4aW4ubmFtZV0uZmlsdGVyKChuKSA9PiAhIW4pLmpvaW4oXCIgXCIpKTtcblx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgYm91bmRNaXhpblNldFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBib3VuZE1peGluU2V0ID0gZ2xvYmFsVGhpc1tib3VuZE1peGluU2V0U3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbWl4aW5FbGVtZW50c1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5FbGVtZW50c1wiKTtcbnZhciBtaXhpbkVsZW1lbnRzID0gZ2xvYmFsVGhpc1ttaXhpbkVsZW1lbnRzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbWl4aW5SZWdpc3RyeVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5SZWdpc3RyeVwiKTtcbnZhciBtaXhpblJlZ2lzdHJ5ID0gZ2xvYmFsVGhpc1ttaXhpblJlZ2lzdHJ5U3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBtaXhpbk5hbWVzcGFjZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5OYW1lc3BhY2VcIik7XG52YXIgbWl4aW5OYW1lc3BhY2UgPSBnbG9iYWxUaGlzW21peGluTmFtZXNwYWNlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzID0gKGVsZW1lbnQsIG1peGluKSA9PiB7XG5cdGlmICh0eXBlb2YgbWl4aW4gPT0gXCJzdHJpbmdcIikgbWl4aW4gPSBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihtaXhpbik7XG5cdGNvbnN0IG5hbWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Y29uc3QgbWl4aW5zID0gbmV3IFNldChbLi4ubmFtZXNdLm1hcCgobikgPT4gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obikpLmZpbHRlcigobSkgPT4gISFtKSk7XG5cdGNvbnN0IG1peGluU2V0ID0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdGlmICghbWl4aW5FbGVtZW50cz8uaGFzPy4obWl4aW4pKSBtaXhpbkVsZW1lbnRzPy5zZXQ/LihtaXhpbiwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpO1xuXHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdGNvbnN0IHdlbCA9IG5ldyBXZWFrUmVmKGVsZW1lbnQpO1xuXHRpZiAoIW1peGluU2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRpZiAoIW1peGlucy5oYXMobWl4aW4pKSBtaXhpbj8uZGlzY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRpZiAobWl4aW5zLmhhcyhtaXhpbikgfHwgIW1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uaGFzPy4oZWxlbWVudCkpIHtcblx0XHRcdG1peGluPy5jb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdFx0bmFtZXMuYWRkKG1peGluTmFtZXNwYWNlPy5nZXQ/LihtaXhpbikpO1xuXHRcdFx0bWl4aW5TZXQ/LmFkZD8uKG1peGluKTtcblx0XHRcdGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubmFtZXNdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0fVxuXHRcdG1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uYWRkPy4oZWxlbWVudCk7XG5cdH1cblx0aWYgKG1peGluU2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRpZiAoIW1peGlucy5oYXMobWl4aW4pKSB7XG5cdFx0XHRtaXhpblNldD8uZGVsZXRlPy4obWl4aW4pO1xuXHRcdFx0bWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIHJvb3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBhZGRSb290ID0gKHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbCkgPT4ge1xuXHRpZiAoIXJvb3QpIHJldHVybjtcblx0aWYgKCFyb290cz8uaGFzPy4ocm9vdCkpIHtcblx0XHRyb290cz8uYWRkPy4ocm9vdCk7XG5cdFx0b2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3Iocm9vdCwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAobXV0YXRpb24pID0+IHVwZGF0ZUFsbE1peGlucyhtdXRhdGlvbi50YXJnZXQpKTtcblx0XHRvYnNlcnZlQnlTZWxlY3Rvcihyb290LCBcIltkYXRhLW1peGluXVwiLCAobXV0YXRpb24pID0+IHtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIHJvb3Q7XG59O1xudmFyIHVwZGF0ZUFsbE1peGlucyA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IG5hbWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Wy4uLm5ldyBTZXQoWy4uLm5hbWVzXS5tYXAoKG4pID0+IG1peGluUmVnaXN0cnk/LmdldD8uKG4pKS5maWx0ZXIoKG0pID0+ICEhbSkpXS5tYXA/LigobSkgPT4gdXBkYXRlTWl4aW5BdHRyaWJ1dGVzKGVsZW1lbnQsIG0pKTtcbn07XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsID0gKGVsZW1lbnRzLCBtaXhpbikgPT4ge1xuXHRlbGVtZW50cy5mb3JFYWNoKChlKSA9PiBtaXhpbiA/IHVwZGF0ZU1peGluQXR0cmlidXRlcyhlLCBtaXhpbikgOiB1cGRhdGVBbGxNaXhpbnMoZSkpO1xufTtcbnZhciB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzID0gKG1peGluKSA9PiB7XG5cdGZvciAoY29uc3Qgcm9vdCBvZiByb290cykgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsKHJvb3Q/LnF1ZXJ5U2VsZWN0b3JBbGw/LihcIltkYXRhLW1peGluXVwiKSwgbWl4aW4pO1xufTtcbnZhciBuYW1lUmVnaXN0cnlGID0gbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChrZXkpID0+IHtcblx0bWl4aW5SZWdpc3RyeT8uZGVsZXRlPy4oa2V5KTtcbn0pO1xudmFyIHJlZ2lzdGVyTWl4aW4gPSAobmFtZSwgbWl4aW4pID0+IHtcblx0aWYgKCFtaXhpbk5hbWVzcGFjZT8uaGFzPy4obWl4aW4pKSB7XG5cdFx0Y29uc3Qga2V5ID0gbmFtZT8udHJpbT8uKCk7XG5cdFx0aWYgKGtleSkge1xuXHRcdFx0bWl4aW5OYW1lc3BhY2U/LnNldD8uKG1peGluLCBrZXkpO1xuXHRcdFx0bWl4aW5SZWdpc3RyeT8uc2V0Py4oa2V5LCBtaXhpbik7XG5cdFx0XHRuYW1lUmVnaXN0cnlGPy5yZWdpc3Rlcj8uKG1peGluLCBrZXkpO1xuXHRcdFx0dXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyhtaXhpbik7XG5cdFx0fVxuXHR9XG59O1xuYWRkUm9vdCh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbCk7XG52YXIgRE9NTWl4aW4gPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKG5hbWUgPSBudWxsKSB7XG5cdFx0aWYgKG5hbWUpIHJlZ2lzdGVyTWl4aW4obmFtZSwgdGhpcyk7XG5cdH1cblx0Y29ubmVjdCh3RWxlbWVudCwgd1NlbGYsIHJlbGF0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbGVtZW50LCB3U2VsZiwgcmVsYXRlZCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHN0b3JlRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzLmdldCh0aGlzLm5hbWUgfHwgXCJcIik/LmdldD8uKGVsZW1lbnQpO1xuXHR9XG5cdHJlbGF0ZWRGb3JFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCk7XG5cdH1cblx0Z2V0IGVsZW1lbnRzKCkge1xuXHRcdHJldHVybiBtaXhpbkVsZW1lbnRzPy5nZXQ/Lih0aGlzKTtcblx0fVxuXHRnZXQgc3RvcmFnZSgpIHtcblx0XHRyZXR1cm4gbmFtZWRTdG9yZU1hcHM/LmdldD8uKHRoaXMubmFtZSB8fCBcIlwiKTtcblx0fVxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gbWl4aW5OYW1lc3BhY2U/LmdldD8uKHRoaXMpO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vSGFuZGxlci50c1xudmFyIGhhbmRsZUhpZGRlbiA9IChlbGVtZW50LCBfLCB2aXNpYmxlKSA9PiB7XG5cdGNvbnN0ICRyZWYgPSB2aXNpYmxlO1xuXHRpZiAoaGFzVmFsdWUodmlzaWJsZSkpIHZpc2libGUgPSB2aXNpYmxlLnZhbHVlO1xuXHRjb25zdCBpc1Zpc2libGUgPSAodmlzaWJsZSA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2aXNpYmxlKSkgIT0gbnVsbCAmJiB2aXNpYmxlICE9PSBmYWxzZTtcblx0JGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSBlbGVtZW50LmhpZGRlbiA9ICFpc1Zpc2libGU7XG5cdFx0ZWxzZSBpZiAoaXNWaXNpYmxlKSBlbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpO1xuXHRcdGVsc2UgZWxlbWVudD8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiLCBcIlwiKTtcblx0fSk7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBoYW5kbGVQcm9wZXJ0eSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGlmICghKHByb3AgPSB0eXBlb2YgcHJvcCA9PSBcInN0cmluZ1wiID8ga2ViYWJUb0NhbWVsKHByb3ApIDogcHJvcCkgfHwgIWVsIHx8IFtcblx0XHRcInN0eWxlXCIsXG5cdFx0XCJkYXRhc2V0XCIsXG5cdFx0XCJhdHRyaWJ1dGVTdHlsZU1hcFwiLFxuXHRcdFwic3R5bGVNYXBcIixcblx0XHRcImNvbXB1dGVkU3R5bGVNYXBcIlxuXHRdLmluZGV4T2YocHJvcCB8fCBcIlwiKSAhPSAtMSkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRpZiAoZWw/Lltwcm9wXSA9PT0gdmFsKSByZXR1cm4gZWw7XG5cdGlmIChlbD8uW3Byb3BdICE9PSB2YWwpICRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh2YWwgIT0gbnVsbCkgZWxbcHJvcF0gPSB2YWw7XG5cdFx0ZWxzZSBkZWxldGUgZWxbcHJvcF07XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGhhbmRsZURhdGFzZXQgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRjb25zdCBkYXRhc2V0UmVmID0gZWw/LmRhdGFzZXQ7XG5cdGlmICghcHJvcCB8fCAhZWwgfHwgIWRhdGFzZXRSZWYpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbD8udmFsdWU7XG5cdHByb3AgPSBrZWJhYlRvQ2FtZWwocHJvcCk7XG5cdGlmIChkYXRhc2V0UmVmPy5bcHJvcF0gPT09ICh2YWwgPSBub3JtYWxpemVQcmltaXRpdmUodmFsKSkpIHJldHVybiBlbDtcblx0aWYgKHZhbCA9PSBudWxsIHx8IHZhbCA9PT0gZmFsc2UpIGRlbGV0ZSBkYXRhc2V0UmVmW3Byb3BdO1xuXHRlbHNlICRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIpIGRhdGFzZXRSZWZbcHJvcF0gPSBTdHJpbmcodmFsKTtcblx0XHRlbHNlIGRlbGV0ZSBkYXRhc2V0UmVmW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBkZWxldGVTdHlsZVByb3BlcnR5ID0gKGVsLCBuYW1lKSA9PiBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShjYW1lbFRvS2ViYWIobmFtZSkpO1xudmFyIGhhbmRsZVN0eWxlQ2hhbmdlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbD8uc3R5bGU7XG5cdGlmICghcHJvcCB8fCB0eXBlb2YgcHJvcCAhPSBcInN0cmluZ1wiIHx8ICFlbCB8fCAhc3R5bGVSZWYpIHJldHVybiBlbDtcblx0JGF2b2lkVHJpZ2dlcih2YWwsICgpID0+IHtcblx0XHRpZiAoaXNWYWwodmFsKSB8fCBoYXNWYWx1ZSh2YWwpIHx8IGlzVmFsdWVVbml0KHZhbCkpIHNldFN0eWxlUHJvcGVydHkoZWwsIHByb3AsIHZhbCk7XG5cdFx0ZWxzZSBpZiAodmFsID09IG51bGwpIGRlbGV0ZVN0eWxlUHJvcGVydHkoZWwsIHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVBdHRyaWJ1dGUgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIXByb3AgfHwgIWVsKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWwudmFsdWU7XG5cdHByb3AgPSBjYW1lbFRvS2ViYWIocHJvcCk7XG5cdGlmIChlbD8uZ2V0QXR0cmlidXRlPy4ocHJvcCkgPT09ICh2YWwgPSBub3JtYWxpemVQcmltaXRpdmUodmFsKSkpIHJldHVybiBlbDtcblx0JGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB2YWwgIT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsICE9IFwiZnVuY3Rpb25cIiAmJiB2YWwgIT0gbnVsbCAmJiAodHlwZW9mIHZhbCA9PSBcImJvb2xlYW5cIiA/IHZhbCA9PSB0cnVlIDogdHJ1ZSkpIGVsPy5zZXRBdHRyaWJ1dGU/Lihwcm9wLCBTdHJpbmcodmFsKSk7XG5cdFx0ZWxzZSBlbD8ucmVtb3ZlQXR0cmlidXRlPy4ocHJvcCk7XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vanVuY3Rpb24vdHlwZXMudHNcbmZ1bmN0aW9uIGp1bmN0aW9uVG9Cb3goYSwgYikge1xuXHRjb25zdCBsZWZ0ID0gTWF0aC5taW4oYS54LCBiLngpO1xuXHRjb25zdCB0b3AgPSBNYXRoLm1pbihhLnksIGIueSk7XG5cdGNvbnN0IHJpZ2h0ID0gTWF0aC5tYXgoYS54LCBiLngpO1xuXHRjb25zdCBib3R0b20gPSBNYXRoLm1heChhLnksIGIueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdCxcblx0XHR0b3AsXG5cdFx0cmlnaHQsXG5cdFx0Ym90dG9tLFxuXHRcdHdpZHRoOiByaWdodCAtIGxlZnQsXG5cdFx0aGVpZ2h0OiBib3R0b20gLSB0b3Bcblx0fTtcbn1cbnZhciBKVU5DVElPTl9TRUxFQ1RfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1zZWxlY3Q6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1zZWxlY3Q6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tc2VsZWN0OmVuZFwiLFxuXHRjYW5jZWw6IFwianVuY3Rpb24tc2VsZWN0OmNhbmNlbFwiXG59O1xudmFyIEpVTkNUSU9OX0RSQUdfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1kcmFnOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tZHJhZzptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1kcmFnOmVuZFwiXG59O1xudmFyIEpVTkNUSU9OX1JFU0laRV9FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9qdW5jdGlvbi9KdW5jdGlvbk1peGlucy50c1xudmFyIG1peGluRGlzcG9zZXJzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBtaXhpbkRpc3Bvc2VycyA9IGdsb2JhbFRoaXNbbWl4aW5EaXNwb3NlcnNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBwdXNoRGlzcG9zYWJsZSA9IChob3N0LCBtaXhpbk5hbWUsIGZuKSA9PiB7XG5cdGNvbnN0IG1hcCA9IG1peGluRGlzcG9zZXJzLmdldChob3N0KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRjb25zdCBsaXN0ID0gbWFwLmdldChtaXhpbk5hbWUpID8/IFtdO1xuXHRsaXN0LnB1c2goZm4pO1xuXHRtYXAuc2V0KG1peGluTmFtZSwgbGlzdCk7XG5cdG1peGluRGlzcG9zZXJzLnNldChob3N0LCBtYXApO1xufTtcbnZhciBydW5EaXNwb3NlcnMgPSAoaG9zdCwgbWl4aW5OYW1lKSA9PiB7XG5cdGNvbnN0IG1hcCA9IG1peGluRGlzcG9zZXJzLmdldChob3N0KTtcblx0Y29uc3QgbGlzdCA9IG1hcD8uZ2V0KG1peGluTmFtZSk7XG5cdGlmICghbGlzdCkgcmV0dXJuO1xuXHRmb3IgKGNvbnN0IGZuIG9mIGxpc3QpIHRyeSB7XG5cdFx0Zm4oKTtcblx0fSBjYXRjaCB7fVxuXHRtYXAuZGVsZXRlKG1peGluTmFtZSk7XG5cdGlmIChtYXAuc2l6ZSA9PT0gMCkgbWl4aW5EaXNwb3NlcnMuZGVsZXRlKGhvc3QpO1xufTtcbnZhciBwYXJzZVB4VmFyID0gKGhvc3QsIG5hbWUpID0+IHtcblx0Y29uc3QgcmF3ID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oaG9zdCk/LmdldFByb3BlcnR5VmFsdWU/LihuYW1lKT8udHJpbT8uKCkgPz8gXCJcIjtcblx0Y29uc3QgbiA9IHBhcnNlRmxvYXQocmF3KTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiAwO1xufTtcbnZhciBxdWVyeUhhbmRsZSA9IChob3N0LCBhdHRyLCBmYWxsYmFjaykgPT4ge1xuXHRjb25zdCBzZWwgPSBob3N0LmdldEF0dHJpYnV0ZShhdHRyKT8udHJpbSgpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGZhbGxiYWNrO1xuXHRjb25zdCBmb3VuZCA9IGhvc3QucXVlcnlTZWxlY3RvcihzZWwpO1xuXHRyZXR1cm4gZm91bmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGZvdW5kIDogZmFsbGJhY2s7XG59O1xudmFyIEp1bmN0aW9uU2VsZWN0TWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRvdmVybGF5LmNsYXNzTmFtZSA9IFwidWktanVuY3Rpb24tc2VsZWN0LW92ZXJsYXlcIjtcblx0XHRvdmVybGF5LnNldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tb3ZlcmxheVwiLCBcIlwiKTtcblx0XHRvdmVybGF5LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDo5OTk5O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IGRhc2hlZCBjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgNzAlLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZDpjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgMTQlLCB0cmFuc3BhcmVudCk7ZGlzcGxheTpub25lO2luc2V0OmF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowO1wiO1xuXHRcdGNvbnN0IGVuc3VyZVBvc2l0aW9uZWQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoKGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpKT8ucG9zaXRpb24gPT09IFwic3RhdGljXCIpIGhvc3Quc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fTtcblx0XHRlbnN1cmVQb3NpdGlvbmVkKCk7XG5cdFx0aG9zdC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblx0XHRsZXQgYWN0aXZlID0gZmFsc2U7XG5cdFx0bGV0IGEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0bGV0IGIgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0Y29uc3QgbG9jYWxQb2ludCA9IChldikgPT4ge1xuXHRcdFx0Y29uc3QgciA9IGhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBldi5jbGllbnRYIC0gci5sZWZ0LFxuXHRcdFx0XHR5OiBldi5jbGllbnRZIC0gci50b3Bcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBhcHBseU92ZXJsYXkgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aWYgKGJveC53aWR0aCA8IDEgJiYgYm94LmhlaWdodCA8IDEpIHtcblx0XHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdG92ZXJsYXkuc3R5bGUubGVmdCA9IGAke2JveC5sZWZ0fXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUudG9wID0gYCR7Ym94LnRvcH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLndpZHRoID0gYCR7Ym94LndpZHRofXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7Ym94LmhlaWdodH1weGA7XG5cdFx0fTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLWp1bmN0aW9uLWlnbm9yZS1zZWxlY3RdLCBbZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZV0sIFtkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVdLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKSByZXR1cm47XG5cdFx0XHRpZiAoIShldi50YXJnZXQgPT09IGhvc3QgfHwgaG9zdC5jb250YWlucyhldi50YXJnZXQpKSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdGEgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGIgPSB7IC4uLmEgfTtcblx0XHRcdGhvc3Quc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YiA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3QgZW5kID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGVuZChldik7XG5cdFx0fTtcblx0XHRjb25zdCBvbkNhbmNlbCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmNhbmNlbCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHsgaG9zdCB9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRvdmVybGF5LnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVyY2FuY2VsXCIsIG9uQ2FuY2VsKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvbkRyYWdNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpKTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXlcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpKTtcblx0XHRjb25zdCBwcmV2aW91c1RyYW5zZm9ybSA9IGhvc3Quc3R5bGUudHJhbnNmb3JtO1xuXHRcdGlmICghaG9zdC5zdHlsZS50cmFuc2Zvcm0gfHwgaG9zdC5zdHlsZS50cmFuc2Zvcm0gPT09IFwibm9uZVwiKSBob3N0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoY2FsYyh2YXIoLS1qeC1kcmFnLXgsIDApICogMXB4KSwgY2FsYyh2YXIoLS1qeC1kcmFnLXksIDApICogMXB4KSwgMClcIjtcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IGRyYWdnaW5nID0gZmFsc2U7XG5cdFx0bGV0IHN0YXJ0WCA9IDA7XG5cdFx0bGV0IHN0YXJ0WSA9IDA7XG5cdFx0bGV0IGJhc2VYID0gMDtcblx0XHRsZXQgYmFzZVkgPSAwO1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldCAhPT0gaGFuZGxlICYmICFoYW5kbGUuY29udGFpbnMoZXYudGFyZ2V0KSkgcmV0dXJuO1xuXHRcdFx0ZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0c3RhcnRYID0gZXYuY2xpZW50WDtcblx0XHRcdHN0YXJ0WSA9IGV2LmNsaWVudFk7XG5cdFx0XHRiYXNlWCA9IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKTtcblx0XHRcdGJhc2VZID0gcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpO1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0Y2xpZW50WDogZXYuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiBldi5jbGllbnRZLFxuXHRcdFx0XHRcdGJhc2VYLFxuXHRcdFx0XHRcdGJhc2VZXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFkcmFnZ2luZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgZHggPSBldi5jbGllbnRYIC0gc3RhcnRYO1xuXHRcdFx0Y29uc3QgZHkgPSBldi5jbGllbnRZIC0gc3RhcnRZO1xuXHRcdFx0Y29uc3QgbnggPSBiYXNlWCArIGR4O1xuXHRcdFx0Y29uc3QgbnkgPSBiYXNlWSArIGR5O1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy14XCIsIG54KTtcblx0XHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBueSk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRkeCxcblx0XHRcdFx0XHRkeSxcblx0XHRcdFx0XHR4OiBueCxcblx0XHRcdFx0XHR5OiBueVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR4OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIiksXG5cdFx0XHRcdFx0eTogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCAoKSA9PiB7XG5cdFx0XHRob3N0LnN0eWxlLnRyYW5zZm9ybSA9IHByZXZpb3VzVHJhbnNmb3JtO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvblJlc2l6ZU1peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0bGV0IHN4ID0gMDtcblx0XHRsZXQgc3kgPSAwO1xuXHRcdGxldCBzdyA9IDA7XG5cdFx0bGV0IHNoID0gMDtcblx0XHRjb25zdCBtaW5XID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KGhvc3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKTtcblx0XHRjb25zdCBtaW5IID0gTWF0aC5tYXgoODAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4taFwiKSB8fCBcIlwiKSB8fCA4MCk7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IHRydWU7XG5cdFx0XHRzeCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzeSA9IGV2LmNsaWVudFk7XG5cdFx0XHRzdyA9IGhvc3Qub2Zmc2V0V2lkdGg7XG5cdFx0XHRzaCA9IGhvc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogc3csXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IG53ID0gTWF0aC5tYXgobWluVywgc3cgKyAoZXYuY2xpZW50WCAtIHN4KSk7XG5cdFx0XHRjb25zdCBuaCA9IE1hdGgubWF4KG1pbkgsIHNoICsgKGV2LmNsaWVudFkgLSBzeSkpO1xuXHRcdFx0aG9zdC5zdHlsZS53aWR0aCA9IGAke253fXB4YDtcblx0XHRcdGhvc3Quc3R5bGUuaGVpZ2h0ID0gYCR7bmh9cHhgO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogbncsXG5cdFx0XHRcdFx0aGVpZ2h0OiBuaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIXJlc2l6aW5nKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBob3N0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogaG9zdC5vZmZzZXRIZWlnaHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmNhbmNlbFwiLCBvblVwKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbm5ldyBKdW5jdGlvblNlbGVjdE1peGluKCk7XG5uZXcgSnVuY3Rpb25EcmFnTWl4aW4oKTtcbm5ldyBKdW5jdGlvblJlc2l6ZU1peGluKCk7XG5cbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgRE9NTWl4aW4sIEp1bmN0aW9uRHJhZ01peGluLCBKdW5jdGlvblJlc2l6ZU1peGluLCBKdW5jdGlvblNlbGVjdE1peGluLCBNQVRDSCwgTU9DLCBNT0NFbGVtZW50LCBSQUZCZWhhdmlvciwgUkVHRVgsIFJPT1QsIFdhdnlTaGFwZWRDaXJjbGUsIF9fZXhwb3J0UHJvcGVydGllcywgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcywgYWRkRXZlbnQsIGFkZEV2ZW50cywgYWRkRXZlbnRzTGlzdCwgYWRkUm9vdCwgYWRvcHRlZEJsb2JNYXAsIGFkb3B0ZWRMYXllck1hcCwgYWRvcHRlZE1hcCwgYWRvcHRlZFNlbGVjdG9yTWFwLCBhZG9wdGVkU2hhZG93TGF5ZXJNYXAsIGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcCwgYW5pbWF0ZUhpZGUsIGFuaW1hdGVTaG93LCBhdmFpbFNpemUsIGJiaCwgYmJ3LCBiaW5kQmVoYXZpb3IsIGJpbmRNaXhpbnMsIGJpbmRTdG9yZSwgYmxvYlVSTE1hcCwgYm9yZGVyQm94SGVpZ2h0LCBib3JkZXJCb3hXaWR0aCwgYm91bmRCZWhhdmlvcnMsIGJvdW5kTWl4aW5TZXQsIGNhY2hlTWFwLCBjYmgsIGNidywgY2hhbmdlWm9vbSwgY2xhc3NlcywgY29tcHV0ZUNhcmV0UG9zaXRpb24sIGNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCwgY29udGFpbnNPclNlbGYsIGNvbnRlbnRCb3hIZWlnaHQsIGNvbnRlbnRCb3hXaWR0aCwgY3JlYXRlRWxlbWVudFZhbmlsbGEsIGNyZWF0ZVR5cGVkVW5pdFZhbHVlLCBkZWxldGVTdHlsZVByb3BlcnR5LCBkZXRlY3RNb2JpbGUsIGRvQm9yZGVyT2JzZXJ2ZSwgZG9Db250ZW50T2JzZXJ2ZSwgZmV0Y2hBbmRDYWNoZSwgZmV0Y2hBc0lubGluZSwgZml4T3JpZW50VG9TY3JlZW4sIGZpeGVkQ2xpZW50Wm9vbSwgZ2V0QWRvcHRlZFN0eWxlUnVsZSwgZ2V0QXZhaWxTaXplLCBnZXRCb3VuZGluZ09yaWVudFJlY3QsIGdldENvcnJlY3RPcmllbnRhdGlvbiwgZ2V0RWxlbWVudFJlbGF0ZWQsIGdldEVsZW1lbnRab29tLCBnZXRFdmVudFRhcmdldCwgZ2V0T2Zmc2V0UGFyZW50LCBnZXRPZmZzZXRQYXJlbnRDaGFpbiwgZ2V0UGFkZGluZywgZ2V0UHJvcGVydHlWYWx1ZSwgZ2V0UHhWYWx1ZSwgZ2V0U3RvcmVzT2ZFbGVtZW50LCBnZXRTdHlsZUxheWVyLCBnZXRTdHlsZVJ1bGUsIGdldFRyYW5zZm9ybSwgZ2V0VHJhbnNmb3JtT3JpZ2luLCBnZXRab29tLCBoYW5kbGVBdHRyaWJ1dGUsIGhhbmRsZURhdGFzZXQsIGhhbmRsZUhpZGRlbiwgaGFuZGxlUHJvcGVydHksIGhhbmRsZVN0eWxlQ2hhbmdlLCBoYXNQYXJlbnQsIGhhc2gsIGh0bWwsIGluY2x1ZGVTZWxmLCBpbmRleE9mLCBpbml0VGV4dFN0eWxlLCBpbml0VmlzaWJpbGl0eSwgaXNFbGVtZW50LCBpc0luRm9jdXMsIGlzTW9iaWxlLCBpc05hdGl2ZUNTU1N0eWxlVmFsdWUsIGlzTmVhcmx5SWRlbnRpdHksIGlzUmVhY3RpdmVTdHlsZVZhbHVlLCBpc1ZhbGlkUGFyZW50LCBsYXllckNvdW50ZXIsIGxvYWRBc0Fkb3B0ZWQsIGxvYWRCbG9iU3R5bGUsIGxvYWRJbmxpbmVTdHlsZSwgbG9hZFN0eWxlU2hlZXQsIG1ha2VSQUZDeWNsZSwgbWVhc3VyZUlucHV0SW5Gb2N1cywgbWVhc3VyZVRleHQsIG1peGluRGlzcG9zZXJzLCBtaXhpbkVsZW1lbnRzLCBtaXhpbk5hbWVzcGFjZSwgbWl4aW5SZWdpc3RyeSwgbmFtZVJlZ2lzdHJ5RiwgbmFtZWRTdG9yZU1hcHMsIG9ic2VydmVBdHRyaWJ1dGUsIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yLCBvYnNlcnZlQm9yZGVyQm94LCBvYnNlcnZlQnlTZWxlY3Rvciwgb2JzZXJ2ZUNvbnRlbnRCb3gsIG9uQm9yZGVyT2JzZXJ2ZSwgb25Db250ZW50T2JzZXJ2ZSwgb3JpZW50T2YsIG9yaWVudGF0aW9uTnVtYmVyTWFwLCBwYXJzZUxlbmd0aCwgcGFyc2VPcmlnaW4sIHBhc3NpdmVPcHRzLCBwcmVsb2FkU3R5bGUsIHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50LCByZWZsZWN0QmVoYXZpb3JzLCByZWZsZWN0TWl4aW5zLCByZWZsZWN0U3RvcmVzLCByZWdpc3Rlck1peGluLCByZW1vdmVBZG9wdGVkLCByZW1vdmVFdmVudCwgcmVtb3ZlRXZlbnRzLCByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQsIHJvb3RzLCBzZXRBdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzSWZOdWxsLCBzZXRDaGVja2VkLCBzZXRJZGxlSW50ZXJ2YWwsIHNldFByb3BlcnR5LCBzZXRTdHlsZUluUnVsZSwgc2V0U3R5bGVQcm9wZXJ0eSwgc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrLCBzZXRTdHlsZVByb3BlcnR5VHlwZWQsIHNldFN0eWxlUnVsZSwgc2V0U3R5bGVSdWxlcywgc2V0U3R5bGVVUkwsIHRocm90dGxlTWFwLCB1bmZpeGVkQ2xpZW50Wm9vbSwgdXBkYXRlQWxsTWl4aW5zLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCwgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cywgdXBkYXRlVlAsIHVybCwgd2hlbkFueVNjcmVlbkNoYW5nZXMsIHpvb21PZiwgem9vbVZhbHVlcyB9OyJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsaUJBQUFBLEdBQWUsZ0JBQUFDLElBQWMsZ0JBQUFDLElBQWMsWUFBQUMsR0FBVSxxQkFBQUMsSUFBbUIsU0FBQUMsSUFBTyxlQUFBQyxJQUFhLGdCQUFBQyxJQUFjLHVCQUFBQyxJQUFxQixzQkFBQUMsSUFBb0IsK0JBQUFDLElBQTZCLHFCQUFBQyxVQUF5QjtBQUdsTixJQUFJQyxLQUFrQyx1QkFBTyxJQUFJLGtDQUFrQyxHQUMvRUMsS0FBNEIsV0FBV0QsRUFBK0IsTUFBc0Isb0JBQUksSUFBSTtBQUN4RztBQUFBLEVBQ0M7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFj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UTtBQUFBLFVBQ1AsTUFBQXRYO0FBQUEsVUFDQSxPQUFPK1o7QUFBQSxVQUNQLFFBQVFDO0FBQUEsUUFDVDtBQUFBLE1BQ0QsQ0FBQyxDQUFDO0FBQUEsSUFDSCxHQUNNdkIsSUFBTyxDQUFDaGIsTUFBTztBQUNwQixVQUFLK2IsR0FDTDtBQUFBLFFBQUFBLElBQVc7QUFDWCxZQUFJO0FBQ0gsVUFBQVgsRUFBTyxzQkFBc0JwYixFQUFHLFNBQVM7QUFBQSxRQUMxQyxRQUFRO0FBQUEsUUFBQztBQUNULFFBQUF1QyxFQUFLLGNBQWMsSUFBSSxZQUFZc1gsR0FBdUIsS0FBSztBQUFBLFVBQzlELFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxZQUNQLE1BQUF0WDtBQUFBLFlBQ0EsT0FBT0EsRUFBSztBQUFBLFlBQ1osUUFBUUEsRUFBSztBQUFBLFVBQ2Q7QUFBQSxRQUNELENBQUMsQ0FBQztBQUFBO0FBQUEsSUFDSDtBQUNBLFdBQUF5WCxFQUFlelgsR0FBTSxzQkFBc0J0QixFQUFTbWEsR0FBUSxlQUFlUCxDQUFNLENBQUMsR0FDbEZiLEVBQWV6WCxHQUFNLHNCQUFzQnRCLEVBQVNtYSxHQUFRLGVBQWVOLENBQU0sQ0FBQyxHQUNsRmQsRUFBZXpYLEdBQU0sc0JBQXNCdEIsRUFBU21hLEdBQVEsYUFBYUosQ0FBSSxDQUFDLEdBQzlFaEIsRUFBZXpYLEdBQU0sc0JBQXNCdEIsRUFBU21hLEdBQVEsaUJBQWlCSixDQUFJLENBQUMsR0FDM0U7QUFBQSxFQUNSO0FBQUEsRUFDQSxXQUFXUCxHQUFLO0FBQ2YsVUFBTWxZLElBQU9rWSxHQUFLLFFBQVE7QUFDMUIsV0FBSWxZLEtBQU00WCxHQUFhNVgsR0FBTSxvQkFBb0IsR0FDMUM7QUFBQSxFQUNSO0FBQ0Q7QUFDQSxJQUFJaVksR0FBb0I7QUFDeEIsSUFBSVUsR0FBa0I7QUFDdEIsSUFBSVksR0FBb0I7IiwKICAibmFtZXMiOiBbIiRhdm9pZFRyaWdnZXIiLCAiY2FtZWxUb0tlYmFiIiwgImN2dF9jc190b19vcyIsICJoYXNWYWx1ZSIsICJpc0FycmF5T3JJdGVyYWJsZSIsICJpc1ZhbCIsICJpc1ZhbHVlVW5pdCIsICJrZWJhYlRvQ2FtZWwiLCAibm9ybWFsaXplR3JpZExheW91dCIsICJub3JtYWxpemVQcmltaXRpdmUiLCAicmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsIiwgInRyeVN0cmluZ0FzTnVtYmVyIiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wiLCAiX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyIsICJvcHRpb25zIiwgIm5hbWUiLCAiZSIsICJfX2V4cG9ydFByb3BlcnRpZXMiLCAiaXNNb2JpbGUiLCAiY2hlY2siLCAiYSIsICJkZXRlY3RNb2JpbGUiLCAiY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2siLCAicnVuV2hlbklkbGUkMSIsICJjYiIsICJ0aW1lb3V0IiwgImdldE9mZnNldFBhcmVudCIsICJlbGVtZW50IiwgImdldE9mZnNldFBhcmVudENoYWluIiwgInBhcmVudHMiLCAiY3VycmVudCIsICJwYXJlbnQiLCAiaXNOZWFybHlJZGVudGl0eSIsICJtYXRyaXgiLCAiZXBzaWxvbiIsICJtYWtlUkFGQ3ljbGUiLCAiY29udHJvbCIsICJyQUYiLCAicmVzIiwgIlJBRkJlaGF2aW9yIiwgInNoZWQiLCAiUk9PVCIsICJzZXRBdHRyaWJ1dGVzSWZOdWxsIiwgImF0dHJzIiwgInZhbHVlIiwgIm9sZCIsICJzZXRBdHRyaWJ1dGVzIiwgInRocm90dGxlTWFwIiwgInNldElkbGVJbnRlcnZhbCIsICJhcmdzIiwgInN0YXR1cyIsICJyIiwgImJvcmRlckJveFdpZHRoIiwgImJvcmRlckJveEhlaWdodCIsICJjb250ZW50Qm94V2lkdGgiLCAiY29udGVudEJveEhlaWdodCIsICJvbkJvcmRlck9ic2VydmUiLCAib25Db250ZW50T2JzZXJ2ZSIsICJkb0NvbnRlbnRPYnNlcnZlIiwgIm9ic2VydmVyIiwgImVudHJpZXMiLCAiZW50cnkiLCAiY29udGVudEJveFNpemUiLCAiZG9Cb3JkZXJPYnNlcnZlIiwgImJvcmRlckJveFNpemUiLCAidXJsIiwgInR5cGUiLCAic291cmNlIiwgImh0bWwiLCAicGFyc2VkIiwgInNldENoZWNrZWQiLCAiaW5wdXQiLCAiZXYiLCAiaXNWYWxpZFBhcmVudCIsICJpbmRleE9mIiwgIm5vZGUiLCAiTUFUQ0giLCAiUkVHRVgiLCAiY3JlYXRlRWxlbWVudFZhbmlsbGEiLCAic2VsZWN0b3IiLCAiY3JlYXRlIiwgIm1hdGNoIiwgImNsYXNzTmFtZSIsICJpc0VsZW1lbnQiLCAiZWwiLCAiaW5jbHVkZVNlbGYiLCAidGFyZ2V0IiwgImhhc1BhcmVudCIsICJwYXNzaXZlT3B0cyIsICJhZGRFdmVudCIsICJvcHRzIiwgIndyIiwgInJlbW92ZUV2ZW50IiwgImFkZEV2ZW50cyIsICJyb290IiwgImhhbmRsZXJzIiwgImFkZEV2ZW50c0xpc3QiLCAiZXZlbnRzIiwgImxpc3QiLCAiY2JzIiwgInJlbW92ZUV2ZW50cyIsICJnZXRFdmVudFRhcmdldCIsICJwYXRoIiwgImNvbnRhaW5zT3JTZWxmIiwgImIiLCAiYUVsIiwgImJFbCIsICJhSW5kZXgiLCAiYkluZGV4IiwgIk1PQ0VsZW1lbnQiLCAic2VsZiIsICJob3N0IiwgImhvc3RNYXRjaGVkIiwgImNsb3Nlc3QiLCAiTU9DIiwgImlzSW5Gb2N1cyIsICJzZWxlY3Rvck9yRWxlbWVudCIsICJkaXIiLCAiYWN0aXZlIiwgImlzRm9jdXNlZCIsICJpc0hvdmVyZWQiLCAiYWx0Q25kIiwgImdldFpvb20iLCAiem9vbVZhbHVlc1N5bWJvbCIsICJ6b29tVmFsdWVzIiwgInpvb21PZiIsICJjb250YWluZXIiLCAiY2hhbmdlWm9vbSIsICJzY2FsZSIsICJmaXhlZENsaWVudFpvb20iLCAidW5maXhlZENsaWVudFpvb20iLCAib3JpZW50T2YiLCAicmF3IiwgIm4iLCAiZ2V0Qm91bmRpbmdPcmllbnRSZWN0IiwgIm9yaWVudCIsICJ6b29tIiwgImJveCIsICJuYngiLCAib3JfaSIsICJ2diIsICJzaXplIiwgImxlZnRfIiwgInRvcF8iLCAicmlnaHRfIiwgImJvdHRvbV8iLCAibGVmdCIsICJyaWdodCIsICJ0b3AiLCAiYm90dG9tIiwgIndpZHRoIiwgImhlaWdodCIsICJiYnciLCAiYmJoIiwgImNidyIsICJjYmgiLCAicnVuV2hlbklkbGUiLCAiZ2V0QXZhaWxTaXplIiwgImwiLCAidnZCbG9jayIsICJhdyIsICJhaCIsICJhdmFpbFNpemUiLCAiY2xhc3NlcyIsICJvcmllbnRhdGlvbk51bWJlck1hcCIsICJ1cGRhdGVWUCIsICJydWxlIiwgInByb3BOYW1lIiwgInByb3BWYWx1ZSIsICJleGlzdHMiLCAiZ2V0Q29ycmVjdE9yaWVudGF0aW9uIiwgIm9yaWVudGF0aW9uVHlwZSIsICJwYXNzaXZlT3B0cyQxIiwgIndoZW5BbnlTY3JlZW5DaGFuZ2VzIiwgInRpY2tpbmciLCAidXBkYXRlIiwgInVuc3Vic2NyaWJlcnMiLCAidW5zdWIiLCAiZml4T3JpZW50VG9TY3JlZW4iLCAibmV4dCIsICJjdHgiLCAiaW5pdFRleHRTdHlsZSIsICJzdHlsZSIsICJmb250V2VpZ2h0IiwgImZvbnRTaXplIiwgImZvbnRGYW1pbHkiLCAiZm9udFN0cmV0Y2giLCAibWVhc3VyZVRleHQiLCAidGV4dCIsICJtZWFzdXJlSW5wdXRJbkZvY3VzIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uIiwgInBvaW50IiwgImN1cnJlbnRXaWR0aCIsICJjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQiLCAiY2xpZW50IiwgInJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50IiwgImxheW91dE92ZXJyaWRlIiwgImMiLCAiYmFzZSIsICJyZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQiLCAiZ3JpZFN5c3RlbSIsICJjbGllbnRQb2ludCIsICJtb2RlIiwgInJlY3QiLCAibGF5b3V0IiwgImNzIiwgInBsIiwgInB0IiwgInByIiwgInBiIiwgImNvbnRlbnRXIiwgImNvbnRlbnRIIiwgImNzQ29vcmQiLCAiYW5pbWF0ZVNob3ciLCAiYW5pbWF0aW9uRG9uZSIsICJhbmltYXRlIiwgImRvbmUiLCAiZW5kQW5pbWF0aW9uIiwgImV2ZW50IiwgInJlc29sdmUiLCAicmVqZWN0IiwgInByb21pc2UiLCAicmVxIiwgImFuaW1hdGVIaWRlIiwgIm9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCIsICJvbkJvcmRlck9ic2VydmUkMSIsICJvbkNvbnRlbnRPYnNlcnZlU3ltYm9sIiwgIm9uQ29udGVudE9ic2VydmUkMSIsICJ1bndyYXBGcm9tUXVlcnkiLCAibm9ybWFsaXplU2VsZWN0b3IiLCAiZmFsbGJhY2siLCAic2FmZVF1ZXJ5U2VsZWN0b3JBbGwiLCAic2VsIiwgInNhZmVNYXRjaGVzIiwgIm9ic2VydmVDb250ZW50Qm94IiwgImNhbGxiYWNrcyIsICJvYnNlcnZlQm9yZGVyQm94IiwgIm9ic2VydmVBdHRyaWJ1dGUiLCAiYXR0cmlidXRlIiwgIm9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yIiwgImF0dHJpYnV0ZUxpc3QiLCAicyIsICJtdXRhdGlvbkxpc3QiLCAibXV0YXRpb24iLCAiYWRkZWROb2RlcyIsICJyZW1vdmVkTm9kZXMiLCAib2JzZXJ2ZUJ5U2VsZWN0b3IiLCAibXV0IiwgIm9icyIsICJ1bndyYXBOb2Rlc0J5U2VsZWN0b3IiLCAibm9kZXMiLCAiJG5vZGVzIiwgIm9iUmVmIiwgImhhbmRsZU11dGF0aW9uIiwgImhhbmRsZUNvbWUiLCAiaGFuZGxlT3V0Q29tZSIsICJoYW5kbGVGb2N1c0NsaWNrIiwgImZhY3RvcnMiLCAic2VsZWN0ZWQiLCAiaW5pdFZpc2liaWxpdHkiLCAiV2F2eVNoYXBlZENpcmNsZSIsICJzdGVwcyIsICJhbXBsaXR1ZGUiLCAiZnJlcSIsICJwb2ludHMiLCAiaSIsICJhbmdsZSIsICJzdGVwIiwgInZhcmlhbnQiLCAiZnVuYyIsICJPV05FUiIsICJzdHlsZUVsZW1lbnQiLCAic3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCIsICJjc3NUZXh0UmVxdWlyZXNJbmxpbmVTdHlsZUVsZW1lbnQiLCAiY3NzIiwgInNldFN0eWxlVVJMIiwgImxheWVyIiwgInNldFN0eWxlUnVsZXMiLCAic2V0U3R5bGVSdWxlIiwgImdldFN0eWxlTGF5ZXIiLCAibGF5ZXJOYW1lIiwgInNoZWV0IiwgImxheWVyUnVsZUluZGV4IiwgImxheWVyUnVsZSIsICJzdHlsZUlkQ291bnRlciIsICJpc1NoYWRvd1Jvb3QiLCAiaXNEb2N1bWVudCIsICJpc0VsZW1lbnQkMSIsICJlc2NhcGVDU1NJZGVudGlmaWVyIiwgImNoYXIiLCAiY3JlYXRlU3R5bGVJZCIsICJqb2luU2NvcGVkU2VsZWN0b3IiLCAic2NvcGUiLCAiZmluZFN0eWxlUnVsZSIsICJmdWxsU2VsZWN0b3IiLCAicnVsZXMiLCAiZXhwZWN0ZWQiLCAicmVxdWVzdGVkIiwgImFjdHVhbCIsICJnZXRTdHlsZVJ1bGUiLCAiYmFzaXMiLCAiYmFzaXNFbGVtZW50IiwgInN0eWxlSWQiLCAic3R5bGVFbGVtZW50R2xvYmFsIiwgInJ1bGVJZCIsICJwcm9taXNlT3JEaXJlY3QiLCAiYmxvYlVSTE1hcFN5bWJvbCIsICJibG9iVVJMTWFwIiwgImNhY2hlTWFwU3ltYm9sIiwgImNhY2hlTWFwIiwgImZldGNoQW5kQ2FjaGUiLCAiYnVybCIsICJwcm9taXNlZCIsICJibG9iIiwgImNhY2hlQ29udGVudE1hcCIsICJjYWNoZUJsb2JDb250ZW50TWFwIiwgImZldGNoQXNJbmxpbmUiLCAiYWRvcHRlZFNlbGVjdG9yTWFwU3ltYm9sIiwgImFkb3B0ZWRTZWxlY3Rvck1hcCIsICJhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXBTeW1ib2wiLCAiYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwIiwgImFkb3B0ZWRMYXllck1hcFN5bWJvbCIsICJhZG9wdGVkTGF5ZXJNYXAiLCAiYWRvcHRlZFNoYWRvd0xheWVyTWFwU3ltYm9sIiwgImFkb3B0ZWRTaGFkb3dMYXllck1hcCIsICJnZXRBZG9wdGVkU3R5bGVSdWxlIiwgInRhcmdldEFkb3B0ZWRTaGVldHMiLCAic2VsZWN0b3JLZXkiLCAic2hhZG93TWFwIiwgInNoYWRvd0xheWVyTWFwIiwgImxheWVySW5kZXgiLCAibmV3UnVsZSIsICJydWxlSW5kZXgiLCAiaXNOYXRpdmVDU1NTdHlsZVZhbHVlIiwgIkNTU1N0eWxlVmFsdWVDdG9yIiwgInByb3RvdHlwZSIsICJpc1JlYWN0aXZlU3R5bGVWYWx1ZSIsICJnZXRXaW5kb3dDb25zdHJ1Y3RvciIsICJ3aW4iLCAiZ2V0Q1NTVW5pdEZhY3RvcnlOYW1lIiwgInVuaXQiLCAiZ2V0Q1NTVW5pdENvbnN0cnVjdG9yTmFtZSIsICJjcmVhdGVUeXBlZFVuaXRWYWx1ZSIsICJDU1NOYW1lc3BhY2UiLCAiZmFjdG9yeU5hbWUiLCAiZmFjdG9yeSIsICJDU1NVbml0VmFsdWVDdG9yIiwgInRva2VuaXplTnVtZXJpY0NTUyIsICJ0b2tlbnMiLCAiY3Vyc29yIiwgInJlc3QiLCAid2hpdGVzcGFjZSIsICJudW1iZXIiLCAidW5pdE1hdGNoIiwgImlkZW50aWZpZXIiLCAic3ltYm9sIiwgIk51bWVyaWNUeXBlZE9NUGFyc2VyIiwgInRva2VuIiwgInZhbHVlcyIsICJDb25zdHJ1Y3RvciIsICJvcGVyYXRvciIsICJwYXJzZVRvVHlwZWRPTSIsICJjc3NWYWx1ZSIsICJoYXNUeXBlZE9NIiwgImlzVW5pdFZhbHVlIiwgInZhbCIsICJzZXRQcm9wZXJ0eUlmTm90RXF1YWwiLCAic3R5bGVSZWYiLCAia2ViYWIiLCAiaW1wb3J0YW5jZSIsICJzZXRTdHlsZVByb3BlcnR5VHlwZWQiLCAic3R5bGVNYXBSZWYiLCAic2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrIiwgIm5ld1ZhbCIsICJtYXliZU51bSIsICJzZXRTdHlsZVByb3BlcnR5IiwgInNldFN0eWxlSW5SdWxlIiwgImhhc2giLCAic3RyaW5nIiwgImhhc2hCdWZmZXIiLCAibG9hZFN0eWxlU2hlZXQiLCAiaW5saW5lIiwgImludGVncml0eSIsICJsb2FkIiwgImVycm9yIiwgImxvYWRCbG9iU3R5bGUiLCAibG9hZElubGluZVN0eWxlIiwgInJvb3RFbGVtZW50IiwgIlBMQUNFIiwgInNldFByb3BlcnR5IiwgInByZWxvYWRTdHlsZSIsICJzdHlsZXMiLCAibG9hZEFzQWRvcHRlZCIsICJhZG9wdGVkTWFwU3ltYm9sIiwgImFkb3B0ZWRNYXAiLCAiYWRvcHRlZEJsb2JNYXBTeW1ib2wiLCAiYWRvcHRlZEJsb2JNYXAiLCAibGF5ZXJDb3VudGVyU3ltYm9sIiwgImxheWVyQ291bnRlciIsICJhcHBseUFkb3B0ZWRTdHlsZVRleHQiLCAiY3NzVGV4dCIsICJtZXNzYWdlIiwgImNhY2hlZCIsICJsYXllcldyYXBwZWQiLCAicmVtb3ZlQWRvcHRlZCIsICJzaGVldHMiLCAiaWR4IiwgInBhcnNlT3JpZ2luIiwgIm9yaWdpbiIsICJwYXJzZUxlbmd0aCIsICJnZXRUcmFuc2Zvcm0iLCAiZ2V0VHJhbnNmb3JtT3JpZ2luIiwgImNzc09yaWdpbiIsICJnZXRQcm9wZXJ0eVZhbHVlIiwgInNyYyIsICJnZXRFbGVtZW50Wm9vbSIsICJjdXJyZW50RWxlbWVudCIsICJjdXJyZW50Q1NTWm9vbSIsICJnZXRQeFZhbHVlIiwgImdldFBhZGRpbmciLCAiYXhpcyIsICJib3VuZEJlaGF2aW9ycyIsICJiaW5kQmVoYXZpb3IiLCAiYmVoU2V0IiwgImJlaGF2aW9yIiwgInJlZmxlY3RCZWhhdmlvcnMiLCAiYmVoYXZpb3JzIiwgIm5hbWVkU3RvcmVNYXBzU3ltYm9sIiwgIm5hbWVkU3RvcmVNYXBzIiwgImdldFN0b3Jlc09mRWxlbWVudCIsICJtYXAiLCAiRSIsICJtIiwgImlzV2Vha0NvbXBhdGlibGUiLCAiYmluZFN0b3JlIiwgIm9iaiIsICJ3ZWFrTWFwIiwgInJlZmxlY3RTdG9yZXMiLCAic3RvcmVzIiwgInJlZmxlY3RNaXhpbnMiLCAibWl4aW5zIiwgIm1peGluU2V0IiwgImJvdW5kTWl4aW5TZXQiLCAiYmluZE1peGlucyIsICJnZXRFbGVtZW50UmVsYXRlZCIsICJtaXhpbiIsICJtaXhTZXQiLCAid2VsIiwgIm1peGluRWxlbWVudHMiLCAiYm91bmRNaXhpblNldFN5bWJvbCIsICJtaXhpbkVsZW1lbnRzU3ltYm9sIiwgIm1peGluUmVnaXN0cnlTeW1ib2wiLCAibWl4aW5SZWdpc3RyeSIsICJtaXhpbk5hbWVzcGFjZVN5bWJvbCIsICJtaXhpbk5hbWVzcGFjZSIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXMiLCAibmFtZXMiLCAicm9vdHMiLCAiYWRkUm9vdCIsICJ1cGRhdGVBbGxNaXhpbnMiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsIiwgImVsZW1lbnRzIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMiLCAibmFtZVJlZ2lzdHJ5RiIsICJrZXkiLCAicmVnaXN0ZXJNaXhpbiIsICJET01NaXhpbiIsICJ3RWxlbWVudCIsICJ3U2VsZiIsICJyZWxhdGVkIiwgImhhbmRsZUhpZGRlbiIsICJfIiwgInZpc2libGUiLCAiJHJlZiIsICJpc1Zpc2libGUiLCAiaGFuZGxlUHJvcGVydHkiLCAicHJvcCIsICJoYW5kbGVEYXRhc2V0IiwgImRhdGFzZXRSZWYiLCAiZGVsZXRlU3R5bGVQcm9wZXJ0eSIsICJoYW5kbGVTdHlsZUNoYW5nZSIsICJoYW5kbGVBdHRyaWJ1dGUiLCAianVuY3Rpb25Ub0JveCIsICJKVU5DVElPTl9TRUxFQ1RfRVZFTlRTIiwgIkpVTkNUSU9OX0RSQUdfRVZFTlRTIiwgIkpVTkNUSU9OX1JFU0laRV9FVkVOVFMiLCAibWl4aW5EaXNwb3NlcnNTeW1ib2wiLCAibWl4aW5EaXNwb3NlcnMiLCAicHVzaERpc3Bvc2FibGUiLCAibWl4aW5OYW1lIiwgImZuIiwgInJ1bkRpc3Bvc2VycyIsICJwYXJzZVB4VmFyIiwgInF1ZXJ5SGFuZGxlIiwgImF0dHIiLCAiZm91bmQiLCAiSnVuY3Rpb25TZWxlY3RNaXhpbiIsICJ3RWwiLCAib3ZlcmxheSIsICJsb2NhbFBvaW50IiwgImFwcGx5T3ZlcmxheSIsICJvbkRvd24iLCAib25Nb3ZlIiwgImVuZCIsICJvblVwIiwgIm9uQ2FuY2VsIiwgIkp1bmN0aW9uRHJhZ01peGluIiwgInByZXZpb3VzVHJhbnNmb3JtIiwgImhhbmRsZSIsICJkcmFnZ2luZyIsICJzdGFydFgiLCAic3RhcnRZIiwgImJhc2VYIiwgImJhc2VZIiwgImR4IiwgImR5IiwgIm54IiwgIm55IiwgIkp1bmN0aW9uUmVzaXplTWl4aW4iLCAicmVzaXppbmciLCAic3giLCAic3kiLCAic3ciLCAic2giLCAibWluVyIsICJtaW5IIiwgIm53IiwgIm5oIl0KfQo=

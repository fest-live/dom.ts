import { $avoidTrigger as De, camelToKebab as b, cvt_cs_to_os as Ci, hasValue as y, isArrayOrIterable as Fr, isVal as qr, isValueUnit as Or, kebabToCamel as Zi, normalizeGridLayout as Hr, normalizePrimitive as ci, resolveLocalPointToGridCell as Ir, tryStringAsNumber as L } from "@fest-lib/core";
var Br = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Li = globalThis[Br] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Li.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      Li.add(t);
    }
});
var wc = () => {
}, Xr = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, Sc = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, Yr = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), Ai = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(Yr()), 0), _r = (e) => e?.offsetParent ?? e?.host, Ec = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const i = _r(n);
    if (i && i instanceof HTMLHtmlElement) break;
    (n = i) && t.push(n);
  }
  return t;
}, jc = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, Dr = () => {
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
}, Mc = (e = Dr()) => (t) => e.shedule(t), Vc = typeof document < "u" ? document?.documentElement : null, Cc = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, i]) => {
      const r = e.getAttribute(n);
      i == null ? e.removeAttribute(n) : i != r && e.setAttribute(n, r == "" ? i ?? r : r ?? i);
    });
}, Lc = (e, t = {}) => Array.from(Object.entries(t)).map(([n, i]) => {
  i == null ? e.removeAttribute(n) : e.setAttribute(n, i ?? e.getAttribute(n));
}), Ur = /* @__PURE__ */ new Map(), Ac = (e, t = 1e3, ...n) => {
  const i = {
    running: !0,
    cancel: () => {
      i.running = !1;
    }
  };
  return Ai(async () => {
    if (!(!e || typeof e != "function")) {
      for (; i.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((r) => setTimeout(r, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((r) => Ai(r, t)), new Promise((r) => setTimeout(r, t))]);
      i.cancel = () => {
      };
    }
  }, { timeout: t }), i?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    Ur.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Mt = /* @__PURE__ */ Symbol("@border-box-width"), Vt = /* @__PURE__ */ Symbol("@border-box-height"), Ct = /* @__PURE__ */ Symbol("@content-box-width"), Lt = /* @__PURE__ */ Symbol("@content-box-height"), Ni = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Nc = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Ti.has(e)) {
    e[Ct] = e.clientWidth, e[Lt] = e.clientHeight;
    const n = new ResizeObserver((i) => {
      for (const r of i) if (r.contentBoxSize) {
        const c = r.contentBoxSize[0];
        c && (e[Ct] = Math.min(c.inlineSize, e.clientWidth), e[Lt] = Math.min(c.blockSize, e.clientHeight), t?.(e));
      }
    });
    Ti.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, Tc = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Ni.has(e)) {
    e[Mt] = e.offsetWidth, e[Vt] = e.offsetHeight;
    const n = new ResizeObserver((i) => {
      for (const r of i) if (r.borderBoxSize) {
        const c = r.borderBoxSize[0];
        c && (e[Mt] = Math.min(c.inlineSize, e.offsetWidth), e[Vt] = Math.min(c.blockSize, e.offsetHeight), t?.(e));
      }
    });
    Ni.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, zc = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), kc = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, Pc = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, Wc = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, Rc = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, $c = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", Fc = `^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, qc = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), i, r = ""; e && (i = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    i[1] && (n = t(i[1])), i[2] && (n.id = i[2]), i[3] && (r += " " + i[3]), i[4] && n.setAttribute(i[4], i[7] || ""), e = e.slice(i[0].length);
  return r && (n.className = r.slice(1)), n;
}, Oc = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, Hc = (e, t) => e.querySelector(t) ?? (e.matches(t) ? e : null), tn = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, Ji = {};
function A(e, t, n, i = Ji) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
function zi(e, t, n, i = Ji) {
  e?.removeEventListener?.(t, n, i);
}
var At = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, i]) => Array.isArray(i) ? A(e, n, ...i) : A(e, n, i))), Ic = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([i, r]) => ((Fr(r) ? [...r] : r) ?? [])?.map?.((c) => A(e, i, c)));
  }
}, Bc = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, i]) => Array.isArray(i) ? zi(e, n, ...i) : zi(e, n, i))), Xc = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const i of n) if (i instanceof HTMLElement || i instanceof Element) return i;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, Yc = (e, t, n) => {
  if (t == null || !(t instanceof Node) && t?.element == null) return !1;
  if (e == t || (e?.element ?? e) == (t?.element ?? t)) return !0;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const i = n.composedPath(), r = e?.element ?? e, c = t?.element ?? t;
    if (i.includes(r) && i.includes(c)) {
      const a = i.indexOf(r), o = i.indexOf(c);
      if (o >= 0 && a >= 0 && o < a) return !0;
    }
  }
  return !!(e?.contains?.(t?.element ?? t) || e?.getRootNode({ composed: !0 })?.host == (t?.element ?? t));
}, $n = (e, t, n) => {
  if (n?.composedPath && typeof n.composedPath == "function") {
    const o = n.composedPath();
    for (const d of o) if ((d instanceof HTMLElement || d instanceof Element) && d.matches?.(t))
      return d;
  }
  const i = e?.matches?.(t) ? e : null, r = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host, c = r?.matches?.(t) ? r : null, a = e?.closest?.(t) ?? i?.closest?.(t) ?? c?.closest?.(t) ?? null;
  return i ?? a ?? c;
}, _c = (e, t) => !!$n(e, t), Dc = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let i = document.activeElement;
  for (; i && i.shadowRoot && i.shadowRoot.activeElement; ) i = i.shadowRoot.activeElement;
  const r = i === e || tn(i, e), c = e.matches(":hover");
  if (!r && !c && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!$n(e, t);
      {
        const a = r ? i : e.querySelector(":hover") || e, o = !!$n(a, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || o;
      }
    } else if (t instanceof HTMLElement)
      return n === "parent" ? tn(e, t) || !1 : tn(t, e) || !1;
  }
  return !0;
}, Uc = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, Zr = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Jr = globalThis[Zr] ??= /* @__PURE__ */ new WeakMap(), Gr = (e = document.documentElement) => Jr.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), Zc = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), Jc = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : Gr(e)) || 1, Fn = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, xe = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", i = parseInt(String(n).trim(), 10);
    if (Number.isFinite(i)) return i;
  } catch {
  }
  return 0;
}, Gc = (e, t = null) => {
  const n = Fn(e) || 1, i = e?.getBoundingClientRect?.(), r = {
    left: i?.left / n,
    right: i?.right / n,
    top: i?.top / n,
    bottom: i?.bottom / n,
    width: i?.width / n,
    height: i?.height / n
  }, c = t ?? (xe(e) || 0), a = typeof window < "u" ? window.visualViewport : null, o = [((a?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((a?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [d, u] = Ci([r.left, r.top], o, c), [p, f] = Ci([r.right, r.bottom], o, c), [l, s] = c == 0 || c == 3 ? [d, p] : [p, d], [h, m] = c == 0 || c == 1 ? [u, f] : [f, u], [v, $r] = c % 2 ? [r.height, r.width] : [r.width, r.height];
  return {
    left: l,
    top: h,
    right: s,
    bottom: m,
    width: v,
    height: $r
  };
}, Kc = (e, t = null) => (t ?? xe(e)) % 2 ? e[Vt] ?? e?.clientHeight : e[Mt] ?? e?.clientWidth, Qc = (e, t = null) => (t ?? xe(e)) % 2 ? e[Mt] ?? e?.clientWidth : e[Vt] ?? e?.clientHeight, eu = (e, t = null) => (t ?? xe(e)) % 2 ? e[Lt] ?? e?.clientHeight : e[Ct] ?? e?.clientWidth, tu = (e, t = null) => (t ?? xe(e)) % 2 ? e[Ct] ?? e?.clientWidth : e[Lt] ?? e?.clientHeight, Kr = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), Gi = () => {
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
    const i = screen?.availWidth + "px", r = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? r : i,
      "--avail-height": e ? i : r,
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
}, qn = Gi(), nu = [[":root, :host, :scope", qn]], Qr = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, ea = (e) => {
  const t = document.documentElement;
  Object.assign(qn, Gi()), Object.entries(qn).forEach(([n, i]) => {
    const r = t?.style?.getPropertyValue(n);
    (!r || r != i) && t?.style?.setProperty?.(n, i || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, ta = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, nn = { passive: !0 }, na = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      ea(), e(), t = !1;
    }), t = !0);
  }, i = [];
  return i.push(A(navigator?.virtualKeyboard, "geometrychange", n, nn)), i.push(A(window?.visualViewport, "scroll", n, nn)), i.push(A(window?.visualViewport, "resize", n, nn)), i.push(A(screen?.orientation, "change", n)), i.push(A(window, "resize", n)), i.push(A(document?.documentElement, "fullscreenchange", n)), i.push(A(document, "DOMContentLoaded", n)), i.push(A(matchMedia("(orientation: portrait)"), "change", n)), i.push(A(matchMedia("(orientation: landscape)"), "change", n)), n(), Kr(() => n(), 100), () => i.forEach((r) => r());
}, iu = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), na(() => {
      const t = Qr?.[ta()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
}, de = new OffscreenCanvas(1, 1).getContext("2d"), Ki = (e, t) => {
  const n = getComputedStyle(e, "");
  if (t && n) {
    const i = n.getPropertyValue("font-weight") || "normal", r = n.getPropertyValue("font-size") || "16px", c = n.getPropertyValue("font-family") || "Times New Roman", a = n.getPropertyValue("font-stretch") || "normal";
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
      t.font = `${i} ${r} ${c}`;
    } catch {
    }
  }
}, ia = (e, t) => {
  if (de) {
    Ki(t, de);
    try {
      return de.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, ru = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return ia(t, e);
}, ra = (e, t) => {
  const n = e?.value || "";
  if (de) {
    Ki(e, de);
    let i = 0;
    for (let r = 0; r < n.length; r++) {
      if (i = de.measureText(n.slice(0, r))?.width, i == null) return n.length;
      if (i != null && i >= t[0]) return Math.max(r - 1, 0);
    }
  }
  return n.length;
}, au = (e, t) => {
  const n = e.getBoundingClientRect(), i = [t[0] - n.left / Fn(), t[1] - n.top / Fn()];
  return ra(e, i);
}, aa = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), i = parseInt(e.getAttribute("data-grid-rows") || "", 10), r = Hr(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : r[0], Number.isFinite(i) && i > 0 ? i : r[1]];
}, ou = (e, t, n, i = "floor") => {
  if (!e) return [0, 0];
  const r = e.getBoundingClientRect?.();
  if (!r) return [0, 0];
  const c = aa(e, n?.layout), a = xe(e), o = globalThis.getComputedStyle?.(e), d = parseFloat(o?.paddingLeft) || 0, u = parseFloat(o?.paddingTop) || 0, p = parseFloat(o?.paddingRight) || 0, f = parseFloat(o?.paddingBottom) || 0, l = Math.max(1, (r.width || e.clientWidth || 1) - d - p), s = Math.max(1, (r.height || e.clientHeight || 1) - u - f), h = [(t?.[0] || 0) - r.left - d, (t?.[1] || 0) - r.top - u];
  return Ir(h, [l, s], c, a, {
    mode: i,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, oa = async (e) => {
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
        duration: Xr() ? 100 : 80,
        easing: "linear",
        delay: 0
      });
      let i = !1;
      const r = () => {
        i || (i = !0, c?.forEach?.((a) => a?.()), n.currentTime = 1, n.finish(), t?.());
      }, c = At(e, {
        "u2-before-hide": [r, {
          once: !0,
          passive: !0
        }],
        "u2-before-show": [r, {
          once: !0,
          passive: !0
        }]
      });
      await n.finished, r?.();
    } else {
      const { resolve: n, reject: i, promise: r } = Promise.withResolvers(), c = requestAnimationFrame(n);
      let a = !1;
      const o = () => {
        a || (a = !0, d?.forEach?.((u) => u?.()), cancelAnimationFrame(c), n(performance.now()), t?.());
      }, d = At(e, {
        "u2-before-hide": [o, {
          once: !0,
          passive: !0
        }],
        "u2-before-show": [o, {
          once: !0,
          passive: !0
        }]
      });
      await r, o?.();
    }
}, sa = async (e) => {
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
      let i = !1;
      const r = () => {
        i || (i = !0, c?.forEach?.((a) => a?.()), n.currentTime = 1, n.finish(), t?.());
      }, c = At(e, { "u2-before-show": [r, {
        once: !0,
        passive: !0
      }] });
      await n.finished, r?.();
    } else {
      const { resolve: n, reject: i, promise: r } = Promise.withResolvers(), c = requestAnimationFrame(n);
      let a = !1;
      const o = () => {
        a || (a = !0, d?.forEach?.((u) => u?.()), cancelAnimationFrame(c), n(performance.now()), t?.());
      }, d = At(e, {
        "u2-before-hide": [o, {
          once: !0,
          passive: !0
        }],
        "u2-before-show": [o, {
          once: !0,
          passive: !0
        }]
      });
      await r, o?.();
    }
}, la = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), Se = globalThis[la] ??= /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), Ee = globalThis[ca] ??= /* @__PURE__ */ new WeakMap(), Ue = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), su = (e, t) => {
  if (!Ee.has(e = Ue(e))) {
    const n = [], i = new ResizeObserver((r) => {
      for (const c of r) if (c.contentBoxSize) {
        const a = c.contentBoxSize[0];
        a && n.forEach((o) => o?.(a, i));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, i), Ee.set(e, n), (e?.element ?? e) instanceof Node && i.observe(e?.element ?? e, { box: "content-box" });
  }
  return Ee.get(e)?.push?.(t), { disconnect: () => Ee.get(e)?.splice?.(Ee.get(e)?.indexOf(t) || -1, 1) };
}, lu = (e, t) => {
  if (!Se.has(e = Ue(e))) {
    const n = [], i = new ResizeObserver((r) => {
      for (const c of r) if (c.borderBoxSize) {
        const a = c.borderBoxSize[0];
        a && n.forEach((o) => o?.(a, i));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, i), Se.set(e, n), (e?.element ?? e) instanceof Node && i.observe(e?.element ?? e, { box: "border-box" });
  }
  return Se.get(e)?.push?.(t), { disconnect: () => Se.get(e)?.splice?.(Se.get(e)?.indexOf(t) || -1, 1) };
}, cu = (e, t, n) => {
  if (typeof e?.selector == "string") return ui(e, e?.selector, t, n);
  const i = new Set((t.split(",") || [t]).map((c) => c.trim())), r = new MutationObserver((c, a) => {
    for (const o of c) o.attributeName && i.has(o.attributeName) && n(o, a);
  });
  return (e?.element ?? e) instanceof Node && r.observe(e = Ue(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...i]
  }), i.forEach((c) => n({
    target: e,
    type: "attributes",
    attributeName: c,
    oldValue: e?.getAttribute?.(c)
  }, r)), r;
}, ui = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), c = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], p = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), p.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((l) => {
          i({
            target: f,
            type: "attributes",
            attributeName: l,
            oldValue: f?.getAttribute?.(l)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return c.observe(e = Ue(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...r],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((a) => r.forEach((o) => i({
    target: a,
    type: "attributes",
    attributeName: o,
    oldValue: a?.getAttribute?.(o)
  }, c))), c;
}, ua = (e, t = "*", n = (i, r) => {
}) => {
  const i = (l) => {
    const s = Array.from(l || []) || [];
    return s.push(...Array.from(l || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((h) => h?.matches?.(t));
  };
  let r = null;
  const c = (l) => {
    const s = r?.deref?.(), h = i(l.addedNodes), m = i(l.removedNodes);
    (h.length > 0 || m.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: h,
      removedNodes: m
    }, s);
  }, a = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, o = (l) => {
    c({
      addedNodes: [l?.relatedTarget].filter((s) => !!s),
      removedNodes: [l?.target].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, u = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active"))
    return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
      e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u), e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
    } };
  if (t?.includes?.(":hover"))
    return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), { disconnect: () => {
      e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u);
    } };
  if (t?.includes?.(":active"))
    return e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
      e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
    } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", a, u), e.addEventListener("focusout", o, u), e.addEventListener("click", d, u), { disconnect: () => {
      e.removeEventListener("focusin", a, u), e.removeEventListener("focusout", o, u), e.removeEventListener("click", d, u);
    } };
  const p = new MutationObserver((l, s) => {
    for (const h of l) h.type == "childList" && c(h);
  });
  r = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = Ue(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, p), p;
}, uu = async (e = document.body) => {
  ui(e, "*", "data-hidden", (t, n) => {
    if (t.attributeName == "data-hidden") {
      const i = t.target;
      i.getAttribute("data-hidden") !== t.oldValue && Promise?.try?.(i.getAttribute("data-hidden") != null ? sa : oa, i, n)?.catch?.(console.warn.bind(console));
    }
  });
}, du = (e = 100, t = 0.05, n = 8) => {
  const i = [];
  for (let o = 0; o < e; o++) i.push(o / e);
  const r = (o) => `calc(${o}rad * pi * 2)`, c = (o) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${r(o)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, a = (o) => [`calc(calc(0.5 + calc(cos(${r(o)}) * calc(0.5 - ${c(o)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${r(o)}) * calc(0.5 - ${c(o)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${i.map((o) => a(o).join(" ")).join(", ")})`
  };
}, Qi = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", ki = (e) => typeof e == "string" && /@import\b/i.test(e), di = "DOM", Re = typeof document < "u" ? document.createElement("style") : null;
Re && (typeof document < "u" && document.querySelector("head")?.appendChild?.(Re), Re.dataset.owner = di);
var Pi = (e, t, n = "") => {
  e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${n && typeof n == "string" ? `layer(${n})` : ""};` : t;
}, hu = (e) => e?.map?.((t) => wa(...t)), da = (e, t) => {
  t ||= Re?.sheet;
  let n = Array.from(t?.cssRules || []).findIndex((r) => r instanceof CSSLayerBlockRule && r?.name === e), i;
  return n === -1 && t ? i = t?.cssRules?.[n = t.insertRule(`@layer ${e} {}`)] : i = t?.cssRules?.[n], i;
}, ha = 0, rn = (e) => typeof ShadowRoot < "u" && e instanceof ShadowRoot, Wi = (e) => typeof Document < "u" && e instanceof Document, pa = (e) => typeof Element < "u" && e instanceof Element, Ri = (e) => typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : Array.from(e).map((t) => `\\${t.codePointAt(0).toString(16)} `).join(""), fa = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `ux-${Date.now().toString(36)}-${(++ha).toString(36)}`, ma = (e, t) => (t = t.trim(), e ? t ? t.startsWith("::") ? `${e}${t}` : `${e} ${t}` : e : t), va = (e, t, n, i) => {
  const r = Array.from(e?.cssRules || []), c = t.trim(), a = i.trim();
  return r.findIndex((o) => {
    if (!(o instanceof CSSStyleRule)) return !1;
    const d = o.selectorText?.trim?.() ?? "";
    return d === c ? !0 : a && d.endsWith(a) ? d.slice(0, d.length - a.length).trim() === n : !1;
  });
}, hi = (e, t, n = "ux-query", i = null) => {
  const r = rn(i) || Wi(i) ? i : i?.getRootNode?.() ?? (typeof document < "u" ? document : null), c = pa(i) ? i : null;
  let a = "";
  if (c?.id) a = `#${Ri(c.id)}`;
  else if (c) {
    let p = c.getAttribute("data-style-id");
    p || (p = fa(), c.setAttribute("data-style-id", p)), a = `[data-style-id="${Ri(p)}"]`;
  } else rn(r) ? a = ":host" : Wi(r) && (a = ":root");
  let o = null;
  if (rn(r) ? (o = r.querySelector("style[data-ux-query]"), !o && typeof document < "u" && (o = document.createElement("style"), o.setAttribute("data-ux-query", ""), r.appendChild(o))) : o = ga(), t ||= o?.sheet, !t) return;
  if (n) return hi(e, da(n, t), null, i);
  const d = ma(a, e);
  let u = va(t, d, a, e);
  return u === -1 && (u = t.insertRule(`${d} {}`)), t.cssRules?.[u];
};
function ga() {
  return Re ?? null;
}
var _t = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", he = (e) => _t && e instanceof CSSStyleValue, Z = (e) => _t && e instanceof CSSUnitValue, $ = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, ya = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!_t || !a) return er(e, t, n, i);
  let o = y(n) && !(he(n) || Z(n)) ? n?.value : n;
  if (o == null)
    return a.delete?.(r), c && $(c, r, null, i), e;
  if (he(o)) {
    const d = a.get(r);
    if (Z(o) && Z(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number")
    if (CSS?.number && !r.startsWith("--")) {
      const d = CSS.number(o), u = a.get(r);
      return Z(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
    } else
      return $(c, r, String(o), i), e;
  if (typeof o == "string" && !he(o)) {
    const d = L(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), p = a.get(r);
      return Z(p) && p.value === u.value && p.unit === u.unit || a.set(r, u), e;
    } else
      return $(c, r, o, i), e;
  }
  return $(c, r, String(o), i), e;
}, er = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style;
  if (!c) return e;
  let a = y(n) && !(he(n) || Z(n)) ? n?.value : n;
  return typeof a == "string" && !he(a) && (a = L(a) ?? a), a == null ? ($(c, r, null, i), e) : (he(a) || typeof a == "number", $(c, r, String(a), i), e);
}, tr = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), je = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new Map(), ba = (e) => {
  if (!e) return null;
  if (O.has(e)) return O.get(e);
  if (e instanceof Blob || e instanceof File) {
    if (je.has(e)) return je.get(e);
    const t = URL.createObjectURL(e);
    return je.set(e, t), O.set(t, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const i = await n.blob(), r = URL.createObjectURL(i);
      return je.set(i, r), O.set(e, r), O.set(r, r), r;
    });
    return O.set(e, t), t;
  }
  if (typeof e == "string") {
    const t = new Blob([e], { type: "text/css" }), n = URL.createObjectURL(t);
    return je.set(t, n), O.set(n, n), n;
  }
  return e;
}, Me = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new WeakMap(), xa = (e) => {
  if (!e) return "";
  if (Me.has(e)) return Me.get(e) ?? "";
  if (e instanceof Blob || e instanceof File) {
    if (Ze.has(e)) return Ze.get(e) ?? "";
    const t = e?.text?.()?.then?.((n) => (Ze.set(e, n), n));
    return Ze.set(e, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const i = await n.text();
      return Me.set(e, i), i;
    });
    return Me.set(e, t), t;
  }
  return typeof e == "string" && Me.set(e, e), e;
}, $i = /* @__PURE__ */ new Map(), Fi = /* @__PURE__ */ new WeakMap(), qi = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new WeakMap(), pu = (e, t = "ux-query", n = null) => {
  if (!e || !Qi()) return null;
  const i = n instanceof ShadowRoot ? n : n?.getRootNode ? n.getRootNode({ composed: !0 }) : null, r = i instanceof ShadowRoot, c = r ? i.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
  if (!c) return null;
  const a = `${t || ""}:${e}`;
  let o;
  if (r) {
    let p = Fi.get(i);
    p || (p = /* @__PURE__ */ new Map(), Fi.set(i, p)), o = p.get(a), o || (o = new CSSStyleSheet(), p.set(a, o), c.includes(o) || c.push(o));
  } else
    o = $i.get(a), o || (o = new CSSStyleSheet(), $i.set(a, o), c.includes(o) || c.push(o));
  if (t) {
    let p;
    if (r) {
      let f = Je.get(i);
      f || (f = /* @__PURE__ */ new Map(), Je.set(i, f)), p = f.get(t);
    } else p = qi.get(t);
    if (!p) {
      const f = Array.from(o.cssRules || []), l = f.findIndex((s) => s instanceof CSSLayerBlockRule && s.name === t);
      if (l === -1) try {
        o.insertRule(`@layer ${t} {}`, o.cssRules.length);
        const s = o.cssRules[o.cssRules.length - 1];
        s instanceof CSSLayerBlockRule && (p = s);
      } catch {
        p = void 0;
      }
      else p = f[l];
      if (p)
        if (r) {
          let s = Je.get(i);
          s || (s = /* @__PURE__ */ new Map(), Je.set(i, s)), s.set(t, p);
        } else qi.set(t, p);
    }
    if (p) {
      let f = Array.from(p.cssRules || []).findIndex((l) => l instanceof CSSStyleRule && l.selectorText?.trim?.() === e?.trim?.());
      if (f === -1) try {
        f = p.insertRule(`${e} {}`, p.cssRules.length);
      } catch {
        return null;
      }
      return p.cssRules[f];
    }
  }
  let d = Array.from(o.cssRules || []).findIndex((p) => p instanceof CSSStyleRule && p.selectorText?.trim?.() === e?.trim?.());
  if (d === -1) try {
    d = o.insertRule(`${e} {}`, o.cssRules.length);
  } catch {
    return null;
  }
  const u = o.cssRules[d];
  return u instanceof CSSStyleRule ? u : null;
}, Dt = (e, t, n, i = "") => _t ? ya(e, t, n, i) : er(e, t, n, i), fu = (e, t, n) => Dt(hi(e), t, n), wa = (e, t) => {
  const n = hi(e);
  return Object.entries(t).forEach(([i, r]) => Dt(n, i, r)), n;
}, mu = async (e) => {
  const t = await crypto?.subtle?.digest("SHA-256", typeof e == "string" ? new TextEncoder().encode(e) : e instanceof ArrayBuffer ? e : await e?.arrayBuffer?.());
  return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
}, nr = (e, t, n = "", i) => {
  const r = ba(e), c = typeof e == "string" && URL.canParse(e) ? e : r;
  return t?.[0] && (t[0].fetchPriority = "high"), t && c && typeof c == "string" && Pi(t, c, n), t?.[0] && (!URL.canParse(e) || i) && t?.[0] instanceof HTMLLinkElement, tr(r, (a) => {
    t?.[0] && a && (Pi(t, a, n), t?.[0].setAttribute("loaded", ""));
  })?.catch?.((a) => {
    console.warn("Failed to load style sheet:", a);
  });
}, Sa = (e) => {
  const t = typeof document < "u" ? document.createElement("link") : null;
  return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
    rel: "stylesheet",
    type: "text/css",
    crossOrigin: "same-origin"
  }), t.dataset.owner = di, nr(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, Ve = (e, t = typeof document < "u" ? document?.head : null, n = "") => {
  const i = t?.querySelector?.("head") ?? t;
  if (typeof HTMLHeadElement < "u" && i instanceof HTMLHeadElement) return Sa(e);
  const r = typeof document < "u" ? document.createElement("style") : null;
  return r ? (r.dataset.owner = di, nr(e, [r, "innerHTML"], n), i?.prepend?.(r), r) : null;
}, vu = (e, t, n, i = "") => Dt(e, t, n, i), gu = (e) => Ea(e, ""), R = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new WeakMap(), Oi = (e, t) => {
  if (!e || !t) return !1;
  try {
    return e.replaceSync(t), !0;
  } catch (n) {
    const i = String(n?.message || "").toLowerCase();
    return i.includes("@import rules are not allowed") || i.includes("@import") && i.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", n), !1;
  }
}, Ea = (e, t = null) => {
  if (!Qi())
    return typeof e == "string" && Ve(e, void 0, t || ""), null;
  if (typeof e == "string" && ki(e))
    return Ve(e, void 0, t || ""), null;
  if (typeof e == "string" && R?.has?.(e)) {
    const i = R.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(i) && document.adoptedStyleSheets.push(i), i;
  }
  if ((e instanceof Blob || e instanceof File) && Ce?.has?.(e)) {
    const i = Ce.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(i) && document.adoptedStyleSheets.push(i), i;
  }
  if (!e) return null;
  const n = typeof e == "string" ? R.getOrInsertComputed(e, (i) => new CSSStyleSheet()) : Ce.getOrInsertComputed(e, (i) => new CSSStyleSheet());
  if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), typeof e == "string" && !URL.canParse(e)) {
    const i = t ? `@layer ${t} { ${e} }` : e;
    return R.set(e, n), Oi(n, i) || (an(n), R.delete(e), Ve(e)), n;
  } else tr(xa(e), (i) => {
    if (R.set(i, n), i) {
      if (ki(i))
        return an(n), R.delete(i), Ce.delete(e), Ve(i, void 0, t || ""), n;
      const r = t ? `@layer ${t} { ${i} }` : i;
      return Oi(n, r) || (an(n), R.delete(i), Ce.delete(e), Ve(i, void 0, t || "")), n;
    }
  });
  return n;
}, an = (e) => {
  if (!e) return !1;
  const t = typeof e == "string" ? R.get(e) : e;
  if (!t || typeof document > "u") return !1;
  const n = document.adoptedStyleSheets, i = n.indexOf(t);
  return i !== -1 ? (n.splice(i, 1), !0) : !1;
}, ja = (e, t) => {
  const n = e.split(" ");
  return new DOMPoint(Hi(n[0], () => t.clientWidth), Hi(n[1], () => t.clientHeight));
}, Hi = (e, t) => e.endsWith("%") ? parseFloat(e) / 100 * t() : parseFloat(e), yu = (e) => {
  if (e?.computedStyleMap) {
    const t = e.computedStyleMap().get("transform")?.toMatrix?.();
    if (t) return t;
  } else if (e) {
    const t = getComputedStyle(e);
    return new DOMMatrix(t?.getPropertyValue?.("transform"));
  }
  return new DOMMatrix();
}, bu = (e) => {
  const t = getComputedStyle(e)?.getPropertyValue?.("transform-origin") || "50% 50%";
  return ja(t, e);
}, Le = (e, t) => {
  if ("computedStyleMap" in e) {
    const n = e?.computedStyleMap?.()?.get(t);
    return n instanceof CSSUnitValue ? n?.value || 0 : n?.toString?.();
  }
  if (e instanceof HTMLElement) {
    const n = getComputedStyle?.(e, "");
    return parseFloat(n?.getPropertyValue?.(t)?.replace?.("px", "")) || 0;
  }
  return parseFloat((e?.style ?? e).getPropertyValue?.(t)?.replace?.("px", "")) || 0;
}, xu = (e) => {
  let t = 1, n = e;
  for (; n; ) {
    if ("currentCSSZoom" in n) {
      const r = n.currentCSSZoom;
      if (typeof r == "number") return t *= r;
    }
    const i = getComputedStyle(n);
    if (i.zoom && i.zoom !== "normal") return t *= parseFloat(i.zoom);
    if (i.zoom && i.zoom !== "normal" || "currentCSSZoom" in n) return t;
    n = n?.offsetParent ?? n?.parentElement;
  }
  return t;
}, wu = (e, t) => Le?.(e, t), Su = (e, t) => t == "inline" ? Le(e, "padding-inline-start") + Le(e, "padding-inline-end") : Le(e, "padding-block-start") + Le(e, "padding-block-end"), ir = /* @__PURE__ */ new WeakMap(), Ma = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), Eu = (e, t) => {
  if (e) {
    if (t) {
      const n = ir.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((i) => Ma(e, n, i));
    }
    return e;
  }
}, Va = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), Fe = globalThis[Va] ??= /* @__PURE__ */ new Map(), Ca = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, La = (e) => (typeof e == "object" || typeof e == "function") && e != null, Aa = (e, t, n) => {
  if (!La(e) && e != null) return e;
  let i = Fe.get(t);
  return i || (i = /* @__PURE__ */ new WeakMap(), Fe.set(t, i)), !i.has(e) && e != null && i.set(e, n), e;
}, ju = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, i] of t.entries()) Aa(e, n, i);
    return e;
  }
}, Mu = (e, t) => {
  if (e) {
    if (t) {
      const n = q?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      q?.has?.(e) || q?.set?.(e, n), [...t?.values?.() || []].map((i) => Na(e, i, n));
    }
    return e;
  }
}, $e = (e) => ({
  storeSet: Ca(Fe, e),
  mixinSet: q?.get?.(e),
  behaviorSet: ir?.get?.(e)
}), Na = (e, t, n) => {
  const i = new WeakRef(e);
  return n ||= q?.get?.(e), n?.has?.(t) || (n?.add?.(t), ie?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((r) => !!r).join(" ")), t?.connect?.(i, t, $e(e))), e;
}, Ta = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), q = globalThis[Ta] ??= /* @__PURE__ */ new WeakMap(), za = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), ie = globalThis[za] ??= /* @__PURE__ */ new WeakMap(), ka = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), qe = globalThis[ka] ??= /* @__PURE__ */ new Map(), Pa = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), Nt = globalThis[Pa] ??= /* @__PURE__ */ new WeakMap(), rr = (e, t) => {
  typeof t == "string" && (t = qe?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => qe?.get?.(a)).filter((a) => !!a)), r = q?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  ie?.has?.(t) || ie?.set?.(t, /* @__PURE__ */ new WeakSet()), q?.has?.(e) || q?.set?.(e, r);
  const c = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(c, t, $e(e)), (i.has(t) || !ie?.get?.(t)?.has?.(e)) && (t?.connect?.(c, t, $e(e)), n.add(Nt?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), ie?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(c, t, $e(e))));
}, On = /* @__PURE__ */ new Set(), Wa = (e = typeof document < "u" ? document : null) => {
  if (e)
    return On?.has?.(e) || (On?.add?.(e), ui(e, "*", "data-mixin", (t) => Hn(t.target)), ua(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && Hn(n);
    })), e;
}, Hn = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => qe?.get?.(n)).filter((n) => !!n))].map?.((n) => rr(e, n));
}, Ra = (e, t) => {
  e.forEach((n) => t ? rr(n, t) : Hn(n));
}, $a = (e) => {
  for (const t of On) Ra(t?.querySelectorAll?.("[data-mixin]"), e);
}, Fa = new FinalizationRegistry((e) => {
  qe?.delete?.(e);
}), qa = (e, t) => {
  if (!Nt?.has?.(t)) {
    const n = e?.trim?.();
    n && (Nt?.set?.(t, n), qe?.set?.(n, t), Fa?.register?.(t, n), $a(t));
  }
};
Wa(typeof document < "u" ? document : null);
var Vu = class {
  constructor(e = null) {
    e && qa(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return Fe.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return $e(e);
  }
  get elements() {
    return ie?.get?.(this);
  }
  get storage() {
    return Fe?.get?.(this.name || "");
  }
  get name() {
    return Nt?.get?.(this);
  }
}, Cu = (e, t, n) => {
  const i = n;
  y(n) && (n = n.value);
  const r = (n = ci(n)) != null && n !== !1;
  return De(i, () => {
    e instanceof HTMLInputElement ? e.hidden = !r : r ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, Lu = (e, t, n) => {
  if (!(t = typeof t == "string" ? Zi(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const i = n;
  return y(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && De(i, () => {
    n != null ? e[t] = n : delete e[t];
  }), e;
}, Au = (e, t, n) => {
  const i = e?.dataset;
  if (!t || !e || !i) return e;
  const r = n;
  return y(n) && (n = n?.value), t = Zi(t), i?.[t] === (n = ci(n)) || (n == null || n === !1 ? delete i[t] : De(r, () => {
    typeof n != "object" && typeof n != "function" ? i[t] = String(n) : delete i[t];
  })), e;
}, Oa = (e, t) => e.style.removeProperty(b(t)), Nu = (e, t, n) => {
  const i = e?.style;
  return !t || typeof t != "string" || !e || !i || De(n, () => {
    qr(n) || y(n) || Or(n) ? Dt(e, t, n) : n == null && Oa(e, t);
  }), e;
}, Tu = (e, t, n) => {
  if (!t || !e) return e;
  const i = n;
  return y(n) && (n = n.value), t = b(t), e?.getAttribute?.(t) === (n = ci(n)) || De(i, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
}, Ha = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Ii = globalThis[Ha] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Ii.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    Ii.add(t);
  }
});
var zu = typeof document < "u" ? document?.documentElement : null, Ia = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) Ia.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Ba = {};
function N(e, t, n, i = Ba) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
var Xa = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), ku = globalThis[Xa] ??= /* @__PURE__ */ new WeakMap(), Ya = () => {
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
    const i = screen?.availWidth + "px", r = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? r : i,
      "--avail-height": e ? i : r,
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
}, Pu = Ya(), Wu = new OffscreenCanvas(1, 1).getContext("2d"), _a = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), Ru = globalThis[_a] ??= /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), $u = globalThis[Da] ??= /* @__PURE__ */ new WeakMap(), ar = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Ua = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), c = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], p = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), p.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((l) => {
          i({
            target: f,
            type: "attributes",
            attributeName: l,
            oldValue: f?.getAttribute?.(l)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return c.observe(e = ar(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...r],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((a) => r.forEach((o) => i({
    target: a,
    type: "attributes",
    attributeName: o,
    oldValue: a?.getAttribute?.(o)
  }, c))), c;
}, Za = (e, t = "*", n = (i, r) => {
}) => {
  const i = (l) => {
    const s = Array.from(l || []) || [];
    return s.push(...Array.from(l || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((h) => h?.matches?.(t));
  };
  let r = null;
  const c = (l) => {
    const s = r?.deref?.(), h = i(l.addedNodes), m = i(l.removedNodes);
    (h.length > 0 || m.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: h,
      removedNodes: m
    }, s);
  }, a = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, o = (l) => {
    c({
      addedNodes: [l?.relatedTarget].filter((s) => !!s),
      removedNodes: [l?.target].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, u = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u), e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":hover")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u);
  } };
  if (t?.includes?.(":active")) return e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", a, u), e.addEventListener("focusout", o, u), e.addEventListener("click", d, u), { disconnect: () => {
    e.removeEventListener("focusin", a, u), e.removeEventListener("focusout", o, u), e.removeEventListener("click", d, u);
  } };
  const p = new MutationObserver((l, s) => {
    for (const h of l) h.type == "childList" && c(h);
  });
  r = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = ar(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, p), p;
}, Ja = "DOM", on = typeof document < "u" ? document.createElement("style") : null;
on && (typeof document < "u" && document.querySelector("head")?.appendChild?.(on), on.dataset.owner = Ja);
var Ut = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", pe = (e) => Ut && e instanceof CSSStyleValue, J = (e) => Ut && e instanceof CSSUnitValue, re = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, Ga = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!Ut || !a) return or(e, t, n, i);
  let o = y(n) && !(pe(n) || J(n)) ? n?.value : n;
  if (o == null) return a.delete?.(r), c && re(c, r, null, i), e;
  if (pe(o)) {
    const d = a.get(r);
    if (J(o) && J(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !r.startsWith("--")) {
    const d = CSS.number(o), u = a.get(r);
    return J(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
  } else return re(c, r, String(o), i), e;
  if (typeof o == "string" && !pe(o)) {
    const d = L(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), p = a.get(r);
      return J(p) && p.value === u.value && p.unit === u.unit || a.set(r, u), e;
    } else return re(c, r, o, i), e;
  }
  return re(c, r, String(o), i), e;
}, or = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style;
  if (!c) return e;
  let a = y(n) && !(pe(n) || J(n)) ? n?.value : n;
  return typeof a == "string" && !pe(a) && (a = L(a) ?? a), a == null ? (re(c, r, null, i), e) : (pe(a), re(c, r, String(a), i), e);
}, Ge = (e, t, n, i = "") => Ut ? Ga(e, t, n, i) : or(e, t, n, i), Ka = /* @__PURE__ */ new WeakMap(), Qa = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), In = globalThis[Qa] ??= /* @__PURE__ */ new Map(), eo = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, dt = (e) => ({
  storeSet: eo(In, e),
  mixinSet: ht?.get?.(e),
  behaviorSet: Ka?.get?.(e)
}), to = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), ht = globalThis[to] ??= /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), Ae = globalThis[no] ??= /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), Oe = globalThis[io] ??= /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), Tt = globalThis[ro] ??= /* @__PURE__ */ new WeakMap(), sr = (e, t) => {
  typeof t == "string" && (t = Oe?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => Oe?.get?.(a)).filter((a) => !!a)), r = ht?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  Ae?.has?.(t) || Ae?.set?.(t, /* @__PURE__ */ new WeakSet()), ht?.has?.(e) || ht?.set?.(e, r);
  const c = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(c, t, dt(e)), (i.has(t) || !Ae?.get?.(t)?.has?.(e)) && (t?.connect?.(c, t, dt(e)), n.add(Tt?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), Ae?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(c, t, dt(e))));
}, Bn = /* @__PURE__ */ new Set(), ao = (e = typeof document < "u" ? document : null) => {
  if (e) return Bn?.has?.(e) || (Bn?.add?.(e), Ua(e, "*", "data-mixin", (t) => Xn(t.target)), Za(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && Xn(n);
  })), e;
}, Xn = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => Oe?.get?.(n)).filter((n) => !!n))].map?.((n) => sr(e, n));
}, oo = (e, t) => {
  e.forEach((n) => t ? sr(n, t) : Xn(n));
}, so = (e) => {
  for (const t of Bn) oo(t?.querySelectorAll?.("[data-mixin]"), e);
}, lo = new FinalizationRegistry((e) => {
  Oe?.delete?.(e);
}), co = (e, t) => {
  if (!Tt?.has?.(t)) {
    const n = e?.trim?.();
    n && (Tt?.set?.(t, n), Oe?.set?.(n, t), lo?.register?.(t, n), so(t));
  }
};
ao(typeof document < "u" ? document : null);
var pi = class {
  constructor(e = null) {
    e && co(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return In.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return dt(e);
  }
  get elements() {
    return Ae?.get?.(this);
  }
  get storage() {
    return In?.get?.(this.name || "");
  }
  get name() {
    return Tt?.get?.(this);
  }
}, uo = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Bi = globalThis[uo] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Bi.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    Bi.add(t);
  }
});
typeof document < "u" && document?.documentElement;
var ho = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) ho.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var po = {};
function T(e, t, n, i = po) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
var fo = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues");
globalThis[fo] ??= /* @__PURE__ */ new WeakMap();
var mo = () => {
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
    const i = screen?.availWidth + "px", r = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? r : i,
      "--avail-height": e ? i : r,
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
mo();
new OffscreenCanvas(1, 1).getContext("2d");
var vo = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve");
globalThis[vo] ??= /* @__PURE__ */ new WeakMap();
var go = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve");
globalThis[go] ??= /* @__PURE__ */ new WeakMap();
var lr = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), yo = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), c = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], p = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), p.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((l) => {
          i({
            target: f,
            type: "attributes",
            attributeName: l,
            oldValue: f?.getAttribute?.(l)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return c.observe(e = lr(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...r],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((a) => r.forEach((o) => i({
    target: a,
    type: "attributes",
    attributeName: o,
    oldValue: a?.getAttribute?.(o)
  }, c))), c;
}, bo = (e, t = "*", n = (i, r) => {
}) => {
  const i = (l) => {
    const s = Array.from(l || []) || [];
    return s.push(...Array.from(l || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((h) => h?.matches?.(t));
  };
  let r = null;
  const c = (l) => {
    const s = r?.deref?.(), h = i(l.addedNodes), m = i(l.removedNodes);
    (h.length > 0 || m.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: h,
      removedNodes: m
    }, s);
  }, a = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, o = (l) => {
    c({
      addedNodes: [l?.relatedTarget].filter((s) => !!s),
      removedNodes: [l?.target].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, u = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u), e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":hover")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u);
  } };
  if (t?.includes?.(":active")) return e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", a, u), e.addEventListener("focusout", o, u), e.addEventListener("click", d, u), { disconnect: () => {
    e.removeEventListener("focusin", a, u), e.removeEventListener("focusout", o, u), e.removeEventListener("click", d, u);
  } };
  const p = new MutationObserver((l, s) => {
    for (const h of l) h.type == "childList" && c(h);
  });
  r = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = lr(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, p), p;
}, xo = "DOM", sn = typeof document < "u" ? document.createElement("style") : null;
sn && (typeof document < "u" && document.querySelector("head")?.appendChild?.(sn), sn.dataset.owner = xo);
var Zt = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", fe = (e) => Zt && e instanceof CSSStyleValue, G = (e) => Zt && e instanceof CSSUnitValue, ae = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, wo = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!Zt || !a) return cr(e, t, n, i);
  let o = y(n) && !(fe(n) || G(n)) ? n?.value : n;
  if (o == null) return a.delete?.(r), c && ae(c, r, null, i), e;
  if (fe(o)) {
    const d = a.get(r);
    if (G(o) && G(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !r.startsWith("--")) {
    const d = CSS.number(o), u = a.get(r);
    return G(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
  } else return ae(c, r, String(o), i), e;
  if (typeof o == "string" && !fe(o)) {
    const d = L(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), p = a.get(r);
      return G(p) && p.value === u.value && p.unit === u.unit || a.set(r, u), e;
    } else return ae(c, r, o, i), e;
  }
  return ae(c, r, String(o), i), e;
}, cr = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style;
  if (!c) return e;
  let a = y(n) && !(fe(n) || G(n)) ? n?.value : n;
  return typeof a == "string" && !fe(a) && (a = L(a) ?? a), a == null ? (ae(c, r, null, i), e) : (fe(a), ae(c, r, String(a), i), e);
}, Ke = (e, t, n, i = "") => Zt ? wo(e, t, n, i) : cr(e, t, n, i), So = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), Yn = globalThis[Eo] ??= /* @__PURE__ */ new Map(), jo = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, pt = (e) => ({
  storeSet: jo(Yn, e),
  mixinSet: ft?.get?.(e),
  behaviorSet: So?.get?.(e)
}), Mo = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), ft = globalThis[Mo] ??= /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), Ne = globalThis[Vo] ??= /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), He = globalThis[Co] ??= /* @__PURE__ */ new Map(), Lo = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), zt = globalThis[Lo] ??= /* @__PURE__ */ new WeakMap(), ur = (e, t) => {
  typeof t == "string" && (t = He?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => He?.get?.(a)).filter((a) => !!a)), r = ft?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  Ne?.has?.(t) || Ne?.set?.(t, /* @__PURE__ */ new WeakSet()), ft?.has?.(e) || ft?.set?.(e, r);
  const c = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(c, t, pt(e)), (i.has(t) || !Ne?.get?.(t)?.has?.(e)) && (t?.connect?.(c, t, pt(e)), n.add(zt?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), Ne?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(c, t, pt(e))));
}, _n = /* @__PURE__ */ new Set(), Ao = (e = typeof document < "u" ? document : null) => {
  if (e) return _n?.has?.(e) || (_n?.add?.(e), yo(e, "*", "data-mixin", (t) => Dn(t.target)), bo(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && Dn(n);
  })), e;
}, Dn = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => He?.get?.(n)).filter((n) => !!n))].map?.((n) => ur(e, n));
}, No = (e, t) => {
  e.forEach((n) => t ? ur(n, t) : Dn(n));
}, To = (e) => {
  for (const t of _n) No(t?.querySelectorAll?.("[data-mixin]"), e);
}, zo = new FinalizationRegistry((e) => {
  He?.delete?.(e);
}), ko = (e, t) => {
  if (!zt?.has?.(t)) {
    const n = e?.trim?.();
    n && (zt?.set?.(t, n), He?.set?.(n, t), zo?.register?.(t, n), To(t));
  }
};
Ao(typeof document < "u" ? document : null);
var fi = class {
  constructor(e = null) {
    e && ko(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return Yn.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return pt(e);
  }
  get elements() {
    return Ne?.get?.(this);
  }
  get storage() {
    return Yn?.get?.(this.name || "");
  }
  get name() {
    return zt?.get?.(this);
  }
}, Po = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Xi = globalThis[Po] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Xi.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    Xi.add(t);
  }
});
typeof document < "u" && document?.documentElement;
var Wo = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) Wo.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Ro = {};
function z(e, t, n, i = Ro) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
var $o = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues");
globalThis[$o] ??= /* @__PURE__ */ new WeakMap();
var Fo = () => {
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
    const i = screen?.availWidth + "px", r = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? r : i,
      "--avail-height": e ? i : r,
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
Fo();
new OffscreenCanvas(1, 1).getContext("2d");
var qo = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve");
globalThis[qo] ??= /* @__PURE__ */ new WeakMap();
var Oo = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve");
globalThis[Oo] ??= /* @__PURE__ */ new WeakMap();
var dr = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Ho = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), c = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], p = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), p.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((l) => {
          i({
            target: f,
            type: "attributes",
            attributeName: l,
            oldValue: f?.getAttribute?.(l)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return c.observe(e = dr(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...r],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((a) => r.forEach((o) => i({
    target: a,
    type: "attributes",
    attributeName: o,
    oldValue: a?.getAttribute?.(o)
  }, c))), c;
}, Io = (e, t = "*", n = (i, r) => {
}) => {
  const i = (l) => {
    const s = Array.from(l || []) || [];
    return s.push(...Array.from(l || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((h) => h?.matches?.(t));
  };
  let r = null;
  const c = (l) => {
    const s = r?.deref?.(), h = i(l.addedNodes), m = i(l.removedNodes);
    (h.length > 0 || m.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: h,
      removedNodes: m
    }, s);
  }, a = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, o = (l) => {
    c({
      addedNodes: [l?.relatedTarget].filter((s) => !!s),
      removedNodes: [l?.target].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, u = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u), e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":hover")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u);
  } };
  if (t?.includes?.(":active")) return e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", a, u), e.addEventListener("focusout", o, u), e.addEventListener("click", d, u), { disconnect: () => {
    e.removeEventListener("focusin", a, u), e.removeEventListener("focusout", o, u), e.removeEventListener("click", d, u);
  } };
  const p = new MutationObserver((l, s) => {
    for (const h of l) h.type == "childList" && c(h);
  });
  r = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = dr(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, p), p;
}, Bo = "DOM", ln = typeof document < "u" ? document.createElement("style") : null;
ln && (typeof document < "u" && document.querySelector("head")?.appendChild?.(ln), ln.dataset.owner = Bo);
var Jt = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", me = (e) => Jt && e instanceof CSSStyleValue, K = (e) => Jt && e instanceof CSSUnitValue, oe = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, Xo = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!Jt || !a) return hr(e, t, n, i);
  let o = y(n) && !(me(n) || K(n)) ? n?.value : n;
  if (o == null) return a.delete?.(r), c && oe(c, r, null, i), e;
  if (me(o)) {
    const d = a.get(r);
    if (K(o) && K(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !r.startsWith("--")) {
    const d = CSS.number(o), u = a.get(r);
    return K(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
  } else return oe(c, r, String(o), i), e;
  if (typeof o == "string" && !me(o)) {
    const d = L(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), p = a.get(r);
      return K(p) && p.value === u.value && p.unit === u.unit || a.set(r, u), e;
    } else return oe(c, r, o, i), e;
  }
  return oe(c, r, String(o), i), e;
}, hr = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style;
  if (!c) return e;
  let a = y(n) && !(me(n) || K(n)) ? n?.value : n;
  return typeof a == "string" && !me(a) && (a = L(a) ?? a), a == null ? (oe(c, r, null, i), e) : (me(a), oe(c, r, String(a), i), e);
}, Qe = (e, t, n, i = "") => Jt ? Xo(e, t, n, i) : hr(e, t, n, i), Yo = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), Un = globalThis[_o] ??= /* @__PURE__ */ new Map(), Do = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, mt = (e) => ({
  storeSet: Do(Un, e),
  mixinSet: vt?.get?.(e),
  behaviorSet: Yo?.get?.(e)
}), Uo = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), vt = globalThis[Uo] ??= /* @__PURE__ */ new WeakMap(), Zo = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), Te = globalThis[Zo] ??= /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), Ie = globalThis[Jo] ??= /* @__PURE__ */ new Map(), Go = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), kt = globalThis[Go] ??= /* @__PURE__ */ new WeakMap(), pr = (e, t) => {
  typeof t == "string" && (t = Ie?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => Ie?.get?.(a)).filter((a) => !!a)), r = vt?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  Te?.has?.(t) || Te?.set?.(t, /* @__PURE__ */ new WeakSet()), vt?.has?.(e) || vt?.set?.(e, r);
  const c = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(c, t, mt(e)), (i.has(t) || !Te?.get?.(t)?.has?.(e)) && (t?.connect?.(c, t, mt(e)), n.add(kt?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), Te?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(c, t, mt(e))));
}, Zn = /* @__PURE__ */ new Set(), Ko = (e = typeof document < "u" ? document : null) => {
  if (e) return Zn?.has?.(e) || (Zn?.add?.(e), Ho(e, "*", "data-mixin", (t) => Jn(t.target)), Io(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && Jn(n);
  })), e;
}, Jn = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => Ie?.get?.(n)).filter((n) => !!n))].map?.((n) => pr(e, n));
}, Qo = (e, t) => {
  e.forEach((n) => t ? pr(n, t) : Jn(n));
}, es = (e) => {
  for (const t of Zn) Qo(t?.querySelectorAll?.("[data-mixin]"), e);
}, ts = new FinalizationRegistry((e) => {
  Ie?.delete?.(e);
}), ns = (e, t) => {
  if (!kt?.has?.(t)) {
    const n = e?.trim?.();
    n && (kt?.set?.(t, n), Ie?.set?.(n, t), ts?.register?.(t, n), es(t));
  }
};
Ko(typeof document < "u" ? document : null);
var mi = class {
  constructor(e = null) {
    e && ns(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return Un.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return mt(e);
  }
  get elements() {
    return Te?.get?.(this);
  }
  get storage() {
    return Un?.get?.(this.name || "");
  }
  get name() {
    return kt?.get?.(this);
  }
}, is = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Yi = globalThis[is] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Yi.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    Yi.add(t);
  }
});
typeof document < "u" && document?.documentElement;
var rs = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) rs.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var as = {};
function k(e, t, n, i = as) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
var os = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues");
globalThis[os] ??= /* @__PURE__ */ new WeakMap();
var ss = () => {
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
    const i = screen?.availWidth + "px", r = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? r : i,
      "--avail-height": e ? i : r,
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
ss();
new OffscreenCanvas(1, 1).getContext("2d");
var ls = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve");
globalThis[ls] ??= /* @__PURE__ */ new WeakMap();
var cs = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve");
globalThis[cs] ??= /* @__PURE__ */ new WeakMap();
var fr = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), us = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), c = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], p = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), p.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((l) => {
          i({
            target: f,
            type: "attributes",
            attributeName: l,
            oldValue: f?.getAttribute?.(l)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return c.observe(e = fr(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...r],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((a) => r.forEach((o) => i({
    target: a,
    type: "attributes",
    attributeName: o,
    oldValue: a?.getAttribute?.(o)
  }, c))), c;
}, ds = (e, t = "*", n = (i, r) => {
}) => {
  const i = (l) => {
    const s = Array.from(l || []) || [];
    return s.push(...Array.from(l || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((h) => h?.matches?.(t));
  };
  let r = null;
  const c = (l) => {
    const s = r?.deref?.(), h = i(l.addedNodes), m = i(l.removedNodes);
    (h.length > 0 || m.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: h,
      removedNodes: m
    }, s);
  }, a = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, o = (l) => {
    c({
      addedNodes: [l?.relatedTarget].filter((s) => !!s),
      removedNodes: [l?.target].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, u = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u), e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":hover")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u);
  } };
  if (t?.includes?.(":active")) return e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", a, u), e.addEventListener("focusout", o, u), e.addEventListener("click", d, u), { disconnect: () => {
    e.removeEventListener("focusin", a, u), e.removeEventListener("focusout", o, u), e.removeEventListener("click", d, u);
  } };
  const p = new MutationObserver((l, s) => {
    for (const h of l) h.type == "childList" && c(h);
  });
  r = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = fr(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, p), p;
}, hs = "DOM", cn = typeof document < "u" ? document.createElement("style") : null;
cn && (typeof document < "u" && document.querySelector("head")?.appendChild?.(cn), cn.dataset.owner = hs);
var Gt = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", ve = (e) => Gt && e instanceof CSSStyleValue, Q = (e) => Gt && e instanceof CSSUnitValue, se = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, ps = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!Gt || !a) return mr(e, t, n, i);
  let o = y(n) && !(ve(n) || Q(n)) ? n?.value : n;
  if (o == null) return a.delete?.(r), c && se(c, r, null, i), e;
  if (ve(o)) {
    const d = a.get(r);
    if (Q(o) && Q(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !r.startsWith("--")) {
    const d = CSS.number(o), u = a.get(r);
    return Q(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
  } else return se(c, r, String(o), i), e;
  if (typeof o == "string" && !ve(o)) {
    const d = L(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), p = a.get(r);
      return Q(p) && p.value === u.value && p.unit === u.unit || a.set(r, u), e;
    } else return se(c, r, o, i), e;
  }
  return se(c, r, String(o), i), e;
}, mr = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style;
  if (!c) return e;
  let a = y(n) && !(ve(n) || Q(n)) ? n?.value : n;
  return typeof a == "string" && !ve(a) && (a = L(a) ?? a), a == null ? (se(c, r, null, i), e) : (ve(a), se(c, r, String(a), i), e);
}, et = (e, t, n, i = "") => Gt ? ps(e, t, n, i) : mr(e, t, n, i), fs = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), Gn = globalThis[ms] ??= /* @__PURE__ */ new Map(), vs = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, gt = (e) => ({
  storeSet: vs(Gn, e),
  mixinSet: yt?.get?.(e),
  behaviorSet: fs?.get?.(e)
}), gs = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), yt = globalThis[gs] ??= /* @__PURE__ */ new WeakMap(), ys = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), ze = globalThis[ys] ??= /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), Be = globalThis[bs] ??= /* @__PURE__ */ new Map(), xs = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), Pt = globalThis[xs] ??= /* @__PURE__ */ new WeakMap(), vr = (e, t) => {
  typeof t == "string" && (t = Be?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => Be?.get?.(a)).filter((a) => !!a)), r = yt?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  ze?.has?.(t) || ze?.set?.(t, /* @__PURE__ */ new WeakSet()), yt?.has?.(e) || yt?.set?.(e, r);
  const c = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(c, t, gt(e)), (i.has(t) || !ze?.get?.(t)?.has?.(e)) && (t?.connect?.(c, t, gt(e)), n.add(Pt?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), ze?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(c, t, gt(e))));
}, Kn = /* @__PURE__ */ new Set(), ws = (e = typeof document < "u" ? document : null) => {
  if (e) return Kn?.has?.(e) || (Kn?.add?.(e), us(e, "*", "data-mixin", (t) => Qn(t.target)), ds(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && Qn(n);
  })), e;
}, Qn = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => Be?.get?.(n)).filter((n) => !!n))].map?.((n) => vr(e, n));
}, Ss = (e, t) => {
  e.forEach((n) => t ? vr(n, t) : Qn(n));
}, Es = (e) => {
  for (const t of Kn) Ss(t?.querySelectorAll?.("[data-mixin]"), e);
}, js = new FinalizationRegistry((e) => {
  Be?.delete?.(e);
}), Ms = (e, t) => {
  if (!Pt?.has?.(t)) {
    const n = e?.trim?.();
    n && (Pt?.set?.(t, n), Be?.set?.(n, t), js?.register?.(t, n), Es(t));
  }
};
ws(typeof document < "u" ? document : null);
var vi = class {
  constructor(e = null) {
    e && Ms(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return Gn.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return gt(e);
  }
  get elements() {
    return ze?.get?.(this);
  }
  get storage() {
    return Gn?.get?.(this.name || "");
  }
  get name() {
    return Pt?.get?.(this);
  }
}, Vs = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), _i = globalThis[Vs] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || _i.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    _i.add(t);
  }
});
typeof document < "u" && document?.documentElement;
var Cs = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) Cs.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Ls = {};
function P(e, t, n, i = Ls) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
var As = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues");
globalThis[As] ??= /* @__PURE__ */ new WeakMap();
var Ns = () => {
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
    const i = screen?.availWidth + "px", r = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? r : i,
      "--avail-height": e ? i : r,
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
Ns();
new OffscreenCanvas(1, 1).getContext("2d");
var Ts = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve");
globalThis[Ts] ??= /* @__PURE__ */ new WeakMap();
var zs = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve");
globalThis[zs] ??= /* @__PURE__ */ new WeakMap();
var gr = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), ks = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), c = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], p = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), p.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((l) => {
          i({
            target: f,
            type: "attributes",
            attributeName: l,
            oldValue: f?.getAttribute?.(l)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return c.observe(e = gr(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...r],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((a) => r.forEach((o) => i({
    target: a,
    type: "attributes",
    attributeName: o,
    oldValue: a?.getAttribute?.(o)
  }, c))), c;
}, Ps = (e, t = "*", n = (i, r) => {
}) => {
  const i = (l) => {
    const s = Array.from(l || []) || [];
    return s.push(...Array.from(l || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((h) => h?.matches?.(t));
  };
  let r = null;
  const c = (l) => {
    const s = r?.deref?.(), h = i(l.addedNodes), m = i(l.removedNodes);
    (h.length > 0 || m.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: h,
      removedNodes: m
    }, s);
  }, a = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, o = (l) => {
    c({
      addedNodes: [l?.relatedTarget].filter((s) => !!s),
      removedNodes: [l?.target].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, u = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u), e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":hover")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u);
  } };
  if (t?.includes?.(":active")) return e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", a, u), e.addEventListener("focusout", o, u), e.addEventListener("click", d, u), { disconnect: () => {
    e.removeEventListener("focusin", a, u), e.removeEventListener("focusout", o, u), e.removeEventListener("click", d, u);
  } };
  const p = new MutationObserver((l, s) => {
    for (const h of l) h.type == "childList" && c(h);
  });
  r = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = gr(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, p), p;
}, Ws = "DOM", un = typeof document < "u" ? document.createElement("style") : null;
un && (typeof document < "u" && document.querySelector("head")?.appendChild?.(un), un.dataset.owner = Ws);
var Kt = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", ge = (e) => Kt && e instanceof CSSStyleValue, ee = (e) => Kt && e instanceof CSSUnitValue, le = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, Rs = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!Kt || !a) return yr(e, t, n, i);
  let o = y(n) && !(ge(n) || ee(n)) ? n?.value : n;
  if (o == null) return a.delete?.(r), c && le(c, r, null, i), e;
  if (ge(o)) {
    const d = a.get(r);
    if (ee(o) && ee(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !r.startsWith("--")) {
    const d = CSS.number(o), u = a.get(r);
    return ee(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
  } else return le(c, r, String(o), i), e;
  if (typeof o == "string" && !ge(o)) {
    const d = L(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), p = a.get(r);
      return ee(p) && p.value === u.value && p.unit === u.unit || a.set(r, u), e;
    } else return le(c, r, o, i), e;
  }
  return le(c, r, String(o), i), e;
}, yr = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style;
  if (!c) return e;
  let a = y(n) && !(ge(n) || ee(n)) ? n?.value : n;
  return typeof a == "string" && !ge(a) && (a = L(a) ?? a), a == null ? (le(c, r, null, i), e) : (ge(a), le(c, r, String(a), i), e);
}, tt = (e, t, n, i = "") => Kt ? Rs(e, t, n, i) : yr(e, t, n, i), $s = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), ei = globalThis[Fs] ??= /* @__PURE__ */ new Map(), qs = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, bt = (e) => ({
  storeSet: qs(ei, e),
  mixinSet: xt?.get?.(e),
  behaviorSet: $s?.get?.(e)
}), Os = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), xt = globalThis[Os] ??= /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), ke = globalThis[Hs] ??= /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), Xe = globalThis[Is] ??= /* @__PURE__ */ new Map(), Bs = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), Wt = globalThis[Bs] ??= /* @__PURE__ */ new WeakMap(), br = (e, t) => {
  typeof t == "string" && (t = Xe?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => Xe?.get?.(a)).filter((a) => !!a)), r = xt?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  ke?.has?.(t) || ke?.set?.(t, /* @__PURE__ */ new WeakSet()), xt?.has?.(e) || xt?.set?.(e, r);
  const c = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(c, t, bt(e)), (i.has(t) || !ke?.get?.(t)?.has?.(e)) && (t?.connect?.(c, t, bt(e)), n.add(Wt?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), ke?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(c, t, bt(e))));
}, ti = /* @__PURE__ */ new Set(), Xs = (e = typeof document < "u" ? document : null) => {
  if (e) return ti?.has?.(e) || (ti?.add?.(e), ks(e, "*", "data-mixin", (t) => ni(t.target)), Ps(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && ni(n);
  })), e;
}, ni = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => Xe?.get?.(n)).filter((n) => !!n))].map?.((n) => br(e, n));
}, Ys = (e, t) => {
  e.forEach((n) => t ? br(n, t) : ni(n));
}, _s = (e) => {
  for (const t of ti) Ys(t?.querySelectorAll?.("[data-mixin]"), e);
}, Ds = new FinalizationRegistry((e) => {
  Xe?.delete?.(e);
}), Us = (e, t) => {
  if (!Wt?.has?.(t)) {
    const n = e?.trim?.();
    n && (Wt?.set?.(t, n), Xe?.set?.(n, t), Ds?.register?.(t, n), _s(t));
  }
};
Xs(typeof document < "u" ? document : null);
var gi = class {
  constructor(e = null) {
    e && Us(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return ei.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return bt(e);
  }
  get elements() {
    return ke?.get?.(this);
  }
  get storage() {
    return ei?.get?.(this.name || "");
  }
  get name() {
    return Wt?.get?.(this);
  }
}, Zs = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Di = globalThis[Zs] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Di.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    Di.add(t);
  }
});
typeof document < "u" && document?.documentElement;
var Js = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) Js.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Gs = {};
function W(e, t, n, i = Gs) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
var Ks = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues");
globalThis[Ks] ??= /* @__PURE__ */ new WeakMap();
var Qs = () => {
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
    const i = screen?.availWidth + "px", r = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? r : i,
      "--avail-height": e ? i : r,
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
Qs();
new OffscreenCanvas(1, 1).getContext("2d");
var el = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve");
globalThis[el] ??= /* @__PURE__ */ new WeakMap();
var tl = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve");
globalThis[tl] ??= /* @__PURE__ */ new WeakMap();
var xr = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), nl = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), c = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], p = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), p.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((l) => {
          i({
            target: f,
            type: "attributes",
            attributeName: l,
            oldValue: f?.getAttribute?.(l)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return c.observe(e = xr(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...r],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((a) => r.forEach((o) => i({
    target: a,
    type: "attributes",
    attributeName: o,
    oldValue: a?.getAttribute?.(o)
  }, c))), c;
}, il = (e, t = "*", n = (i, r) => {
}) => {
  const i = (l) => {
    const s = Array.from(l || []) || [];
    return s.push(...Array.from(l || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((h) => h?.matches?.(t));
  };
  let r = null;
  const c = (l) => {
    const s = r?.deref?.(), h = i(l.addedNodes), m = i(l.removedNodes);
    (h.length > 0 || m.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: h,
      removedNodes: m
    }, s);
  }, a = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, o = (l) => {
    c({
      addedNodes: [l?.relatedTarget].filter((s) => !!s),
      removedNodes: [l?.target].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, u = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u), e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":hover")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u);
  } };
  if (t?.includes?.(":active")) return e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", a, u), e.addEventListener("focusout", o, u), e.addEventListener("click", d, u), { disconnect: () => {
    e.removeEventListener("focusin", a, u), e.removeEventListener("focusout", o, u), e.removeEventListener("click", d, u);
  } };
  const p = new MutationObserver((l, s) => {
    for (const h of l) h.type == "childList" && c(h);
  });
  r = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = xr(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, p), p;
}, rl = "DOM", dn = typeof document < "u" ? document.createElement("style") : null;
dn && (typeof document < "u" && document.querySelector("head")?.appendChild?.(dn), dn.dataset.owner = rl);
var Qt = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", ye = (e) => Qt && e instanceof CSSStyleValue, te = (e) => Qt && e instanceof CSSUnitValue, ce = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, al = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!Qt || !a) return wr(e, t, n, i);
  let o = y(n) && !(ye(n) || te(n)) ? n?.value : n;
  if (o == null) return a.delete?.(r), c && ce(c, r, null, i), e;
  if (ye(o)) {
    const d = a.get(r);
    if (te(o) && te(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !r.startsWith("--")) {
    const d = CSS.number(o), u = a.get(r);
    return te(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
  } else return ce(c, r, String(o), i), e;
  if (typeof o == "string" && !ye(o)) {
    const d = L(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), p = a.get(r);
      return te(p) && p.value === u.value && p.unit === u.unit || a.set(r, u), e;
    } else return ce(c, r, o, i), e;
  }
  return ce(c, r, String(o), i), e;
}, wr = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = b(t), c = e.style;
  if (!c) return e;
  let a = y(n) && !(ye(n) || te(n)) ? n?.value : n;
  return typeof a == "string" && !ye(a) && (a = L(a) ?? a), a == null ? (ce(c, r, null, i), e) : (ye(a), ce(c, r, String(a), i), e);
}, nt = (e, t, n, i = "") => Qt ? al(e, t, n, i) : wr(e, t, n, i), ol = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), ii = globalThis[sl] ??= /* @__PURE__ */ new Map(), ll = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, wt = (e) => ({
  storeSet: ll(ii, e),
  mixinSet: St?.get?.(e),
  behaviorSet: ol?.get?.(e)
}), cl = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), St = globalThis[cl] ??= /* @__PURE__ */ new WeakMap(), ul = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), Pe = globalThis[ul] ??= /* @__PURE__ */ new WeakMap(), dl = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), Ye = globalThis[dl] ??= /* @__PURE__ */ new Map(), hl = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), Rt = globalThis[hl] ??= /* @__PURE__ */ new WeakMap(), Sr = (e, t) => {
  typeof t == "string" && (t = Ye?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => Ye?.get?.(a)).filter((a) => !!a)), r = St?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  Pe?.has?.(t) || Pe?.set?.(t, /* @__PURE__ */ new WeakSet()), St?.has?.(e) || St?.set?.(e, r);
  const c = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(c, t, wt(e)), (i.has(t) || !Pe?.get?.(t)?.has?.(e)) && (t?.connect?.(c, t, wt(e)), n.add(Rt?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), Pe?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(c, t, wt(e))));
}, ri = /* @__PURE__ */ new Set(), pl = (e = typeof document < "u" ? document : null) => {
  if (e) return ri?.has?.(e) || (ri?.add?.(e), nl(e, "*", "data-mixin", (t) => ai(t.target)), il(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && ai(n);
  })), e;
}, ai = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => Ye?.get?.(n)).filter((n) => !!n))].map?.((n) => Sr(e, n));
}, fl = (e, t) => {
  e.forEach((n) => t ? Sr(n, t) : ai(n));
}, ml = (e) => {
  for (const t of ri) fl(t?.querySelectorAll?.("[data-mixin]"), e);
}, vl = new FinalizationRegistry((e) => {
  Ye?.delete?.(e);
}), gl = (e, t) => {
  if (!Rt?.has?.(t)) {
    const n = e?.trim?.();
    n && (Rt?.set?.(t, n), Ye?.set?.(n, t), vl?.register?.(t, n), ml(t));
  }
};
pl(typeof document < "u" ? document : null);
var yi = class {
  constructor(e = null) {
    e && gl(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return ii.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return wt(e);
  }
  get elements() {
    return Pe?.get?.(this);
  }
  get storage() {
    return ii?.get?.(this.name || "");
  }
  get name() {
    return Rt?.get?.(this);
  }
}, yl = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Ui = globalThis[yl] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Ui.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    Ui.add(t);
  }
});
var bl = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), Er = (e) => bl(e, "value"), jr = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), Mr = (e) => {
  if (typeof e != "string") return null;
  const t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
  if (t?.length != 1) return null;
  const n = parseFloat(t[0][0]);
  return !Number.isNaN(n) && Number.isFinite(n) ? n : null;
};
typeof document < "u" && document?.documentElement;
var xl = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) xl.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var wl = {};
function g(e, t, n, i = wl) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
var Sl = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues");
globalThis[Sl] ??= /* @__PURE__ */ new WeakMap();
var El = () => {
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
    const i = screen?.availWidth + "px", r = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? r : i,
      "--avail-height": e ? i : r,
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
El();
new OffscreenCanvas(1, 1).getContext("2d");
var jl = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve");
globalThis[jl] ??= /* @__PURE__ */ new WeakMap();
var Ml = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve");
globalThis[Ml] ??= /* @__PURE__ */ new WeakMap();
var Vr = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Vl = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), c = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], p = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), p.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((l) => {
          i({
            target: f,
            type: "attributes",
            attributeName: l,
            oldValue: f?.getAttribute?.(l)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return c.observe(e = Vr(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...r],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((a) => r.forEach((o) => i({
    target: a,
    type: "attributes",
    attributeName: o,
    oldValue: a?.getAttribute?.(o)
  }, c))), c;
}, Cl = (e, t = "*", n = (i, r) => {
}) => {
  const i = (l) => {
    const s = Array.from(l || []) || [];
    return s.push(...Array.from(l || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((h) => h?.matches?.(t));
  };
  let r = null;
  const c = (l) => {
    const s = r?.deref?.(), h = i(l.addedNodes), m = i(l.removedNodes);
    (h.length > 0 || m.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: h,
      removedNodes: m
    }, s);
  }, a = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, o = (l) => {
    c({
      addedNodes: [l?.relatedTarget].filter((s) => !!s),
      removedNodes: [l?.target].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    c({
      addedNodes: [l?.target].filter((s) => !!s),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: l?.currentTarget
    });
  }, u = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u), e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":hover")) return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", o, u), { disconnect: () => {
    e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", o, u);
  } };
  if (t?.includes?.(":active")) return e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", o, u), e.addEventListener("pointercancel", o, u), { disconnect: () => {
    e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", o, u), e.removeEventListener("pointercancel", o, u);
  } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", a, u), e.addEventListener("focusout", o, u), e.addEventListener("click", d, u), { disconnect: () => {
    e.removeEventListener("focusin", a, u), e.removeEventListener("focusout", o, u), e.removeEventListener("click", d, u);
  } };
  const p = new MutationObserver((l, s) => {
    for (const h of l) h.type == "childList" && c(h);
  });
  r = new WeakRef(p), (e?.element ?? e) instanceof Node && p.observe(e = Vr(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, p), p;
}, Ll = "DOM", hn = typeof document < "u" ? document.createElement("style") : null;
hn && (typeof document < "u" && document.querySelector("head")?.appendChild?.(hn), hn.dataset.owner = Ll);
var en = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", be = (e) => en && e instanceof CSSStyleValue, ne = (e) => en && e instanceof CSSUnitValue, ue = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, Al = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = jr(t), c = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!en || !a) return Cr(e, t, n, i);
  let o = Er(n) && !(be(n) || ne(n)) ? n?.value : n;
  if (o == null) return a.delete?.(r), c && ue(c, r, null, i), e;
  if (be(o)) {
    const d = a.get(r);
    if (ne(o) && ne(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !r.startsWith("--")) {
    const d = CSS.number(o), u = a.get(r);
    return ne(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
  } else return ue(c, r, String(o), i), e;
  if (typeof o == "string" && !be(o)) {
    const d = Mr(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), p = a.get(r);
      return ne(p) && p.value === u.value && p.unit === u.unit || a.set(r, u), e;
    } else return ue(c, r, o, i), e;
  }
  return ue(c, r, String(o), i), e;
}, Cr = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = jr(t), c = e.style;
  if (!c) return e;
  let a = Er(n) && !(be(n) || ne(n)) ? n?.value : n;
  return typeof a == "string" && !be(a) && (a = Mr(a) ?? a), a == null ? (ue(c, r, null, i), e) : (be(a), ue(c, r, String(a), i), e);
}, F = (e, t, n, i = "") => en ? Al(e, t, n, i) : Cr(e, t, n, i), Nl = /* @__PURE__ */ new WeakMap(), Tl = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), oi = globalThis[Tl] ??= /* @__PURE__ */ new Map(), zl = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, Et = (e) => ({
  storeSet: zl(oi, e),
  mixinSet: jt?.get?.(e),
  behaviorSet: Nl?.get?.(e)
}), kl = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), jt = globalThis[kl] ??= /* @__PURE__ */ new WeakMap(), Pl = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), We = globalThis[Pl] ??= /* @__PURE__ */ new WeakMap(), Wl = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), _e = globalThis[Wl] ??= /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), $t = globalThis[Rl] ??= /* @__PURE__ */ new WeakMap(), Lr = (e, t) => {
  typeof t == "string" && (t = _e?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => _e?.get?.(a)).filter((a) => !!a)), r = jt?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  We?.has?.(t) || We?.set?.(t, /* @__PURE__ */ new WeakSet()), jt?.has?.(e) || jt?.set?.(e, r);
  const c = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(c, t, Et(e)), (i.has(t) || !We?.get?.(t)?.has?.(e)) && (t?.connect?.(c, t, Et(e)), n.add($t?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), We?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(c, t, Et(e))));
}, si = /* @__PURE__ */ new Set(), $l = (e = typeof document < "u" ? document : null) => {
  if (e) return si?.has?.(e) || (si?.add?.(e), Vl(e, "*", "data-mixin", (t) => li(t.target)), Cl(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && li(n);
  })), e;
}, li = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => _e?.get?.(n)).filter((n) => !!n))].map?.((n) => Lr(e, n));
}, Fl = (e, t) => {
  e.forEach((n) => t ? Lr(n, t) : li(n));
}, ql = (e) => {
  for (const t of si) Fl(t?.querySelectorAll?.("[data-mixin]"), e);
}, Ol = new FinalizationRegistry((e) => {
  _e?.delete?.(e);
}), Hl = (e, t) => {
  if (!$t?.has?.(t)) {
    const n = e?.trim?.();
    n && ($t?.set?.(t, n), _e?.set?.(n, t), Ol?.register?.(t, n), ql(t));
  }
};
$l(typeof document < "u" ? document : null);
var we = class {
  constructor(e = null) {
    e && Hl(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return oi.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return Et(e);
  }
  get elements() {
    return We?.get?.(this);
  }
  get storage() {
    return oi?.get?.(this.name || "");
  }
  get name() {
    return $t?.get?.(this);
  }
};
function pn(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), c = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: c,
    width: r - n,
    height: c - i
  };
}
var it = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, fn = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, mn = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Il = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), Ft = globalThis[Il] ??= /* @__PURE__ */ new WeakMap(), x = (e, t, n) => {
  const i = Ft.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), Ft.set(e, i);
}, bi = (e, t) => {
  const n = Ft.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && Ft.delete(e);
  }
}, H = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, Ar = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, Bl = class extends we {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let i = !1, r = {
      x: 0,
      y: 0
    }, c = {
      x: 0,
      y: 0
    };
    const a = (s) => {
      const h = t.getBoundingClientRect();
      return {
        x: s.clientX - h.left,
        y: s.clientY - h.top
      };
    }, o = () => {
      const s = pn(r, c);
      if (s.width < 1 && s.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${s.left}px`, n.style.top = `${s.top}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
    }, d = (s) => {
      s.button === 0 && (s.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (s.target === t || t.contains(s.target)) && (i = !0, r = a(s), c = { ...r }, t.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(it.start, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          host: t
        }
      })), o()));
    }, u = (s) => {
      if (!i) return;
      c = a(s), o();
      const h = pn(r, c);
      t.dispatchEvent(new CustomEvent(it.move, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, p = (s) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(s.pointerId);
      } catch {
      }
      const h = pn(r, c);
      t.dispatchEvent(new CustomEvent(it.end, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, f = (s) => {
      i && p(s);
    }, l = (s) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(it.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return x(t, "ui-junction-select", () => {
      n.remove();
    }), x(t, "ui-junction-select", g(t, "pointerdown", d)), x(t, "ui-junction-select", g(t, "pointermove", u)), x(t, "ui-junction-select", g(t, "pointerup", f)), x(t, "ui-junction-select", g(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && bi(t, "ui-junction-select"), this;
  }
}, Xl = class extends we {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    F(t, "--jx-drag-x", H(t, "--jx-drag-x")), F(t, "--jx-drag-y", H(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = Ar(t, "data-junction-drag-handle", t);
    let r = !1, c = 0, a = 0, o = 0, d = 0;
    const u = (l) => {
      l.button === 0 && (l.target !== i && !i.contains(l.target) || (r = !0, c = l.clientX, a = l.clientY, o = H(t, "--jx-drag-x"), d = H(t, "--jx-drag-y"), i.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(fn.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: l.clientX,
          clientY: l.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, p = (l) => {
      if (!r) return;
      const s = l.clientX - c, h = l.clientY - a, m = o + s, v = d + h;
      F(t, "--jx-drag-x", m), F(t, "--jx-drag-y", v), t.dispatchEvent(new CustomEvent(fn.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: h,
          x: m,
          y: v
        }
      }));
    }, f = (l) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(fn.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: H(t, "--jx-drag-x"),
            y: H(t, "--jx-drag-y")
          }
        }));
      }
    };
    return x(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), x(t, "ui-junction-drag", g(i, "pointerdown", u)), x(t, "ui-junction-drag", g(i, "pointermove", p)), x(t, "ui-junction-drag", g(i, "pointerup", f)), x(t, "ui-junction-drag", g(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && bi(t, "ui-junction-drag"), this;
  }
}, Yl = class extends we {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Ar(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, c = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), p = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, c = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(mn.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const h = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - c));
      t.style.width = `${h}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(mn.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: h,
          height: m
        }
      }));
    }, l = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(mn.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return x(t, "ui-junction-resize", g(n, "pointerdown", p)), x(t, "ui-junction-resize", g(n, "pointermove", f)), x(t, "ui-junction-resize", g(n, "pointerup", l)), x(t, "ui-junction-resize", g(n, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && bi(t, "ui-junction-resize"), this;
  }
};
new Bl();
new Xl();
new Yl();
function vn(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), c = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: c,
    width: r - n,
    height: c - i
  };
}
var rt = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, gn = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, yn = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, _l = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), qt = globalThis[_l] ??= /* @__PURE__ */ new WeakMap(), w = (e, t, n) => {
  const i = qt.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), qt.set(e, i);
}, xi = (e, t) => {
  const n = qt.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && qt.delete(e);
  }
}, I = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, Nr = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, Dl = class extends we {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let i = !1, r = {
      x: 0,
      y: 0
    }, c = {
      x: 0,
      y: 0
    };
    const a = (s) => {
      const h = t.getBoundingClientRect();
      return {
        x: s.clientX - h.left,
        y: s.clientY - h.top
      };
    }, o = () => {
      const s = vn(r, c);
      if (s.width < 1 && s.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${s.left}px`, n.style.top = `${s.top}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
    }, d = (s) => {
      s.button === 0 && (s.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (s.target === t || t.contains(s.target)) && (i = !0, r = a(s), c = { ...r }, t.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(rt.start, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          host: t
        }
      })), o()));
    }, u = (s) => {
      if (!i) return;
      c = a(s), o();
      const h = vn(r, c);
      t.dispatchEvent(new CustomEvent(rt.move, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, p = (s) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(s.pointerId);
      } catch {
      }
      const h = vn(r, c);
      t.dispatchEvent(new CustomEvent(rt.end, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, f = (s) => {
      i && p(s);
    }, l = (s) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(rt.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return w(t, "ui-junction-select", () => {
      n.remove();
    }), w(t, "ui-junction-select", g(t, "pointerdown", d)), w(t, "ui-junction-select", g(t, "pointermove", u)), w(t, "ui-junction-select", g(t, "pointerup", f)), w(t, "ui-junction-select", g(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && xi(t, "ui-junction-select"), this;
  }
}, Ul = class extends we {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    F(t, "--jx-drag-x", I(t, "--jx-drag-x")), F(t, "--jx-drag-y", I(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = Nr(t, "data-junction-drag-handle", t);
    let r = !1, c = 0, a = 0, o = 0, d = 0;
    const u = (l) => {
      l.button === 0 && (l.target !== i && !i.contains(l.target) || (r = !0, c = l.clientX, a = l.clientY, o = I(t, "--jx-drag-x"), d = I(t, "--jx-drag-y"), i.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(gn.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: l.clientX,
          clientY: l.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, p = (l) => {
      if (!r) return;
      const s = l.clientX - c, h = l.clientY - a, m = o + s, v = d + h;
      F(t, "--jx-drag-x", m), F(t, "--jx-drag-y", v), t.dispatchEvent(new CustomEvent(gn.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: h,
          x: m,
          y: v
        }
      }));
    }, f = (l) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(gn.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: I(t, "--jx-drag-x"),
            y: I(t, "--jx-drag-y")
          }
        }));
      }
    };
    return w(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), w(t, "ui-junction-drag", g(i, "pointerdown", u)), w(t, "ui-junction-drag", g(i, "pointermove", p)), w(t, "ui-junction-drag", g(i, "pointerup", f)), w(t, "ui-junction-drag", g(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && xi(t, "ui-junction-drag"), this;
  }
}, Zl = class extends we {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Nr(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, c = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), p = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, c = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(yn.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const h = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - c));
      t.style.width = `${h}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(yn.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: h,
          height: m
        }
      }));
    }, l = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(yn.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return w(t, "ui-junction-resize", g(n, "pointerdown", p)), w(t, "ui-junction-resize", g(n, "pointermove", f)), w(t, "ui-junction-resize", g(n, "pointerup", l)), w(t, "ui-junction-resize", g(n, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && xi(t, "ui-junction-resize"), this;
  }
};
new Dl();
new Ul();
new Zl();
function bn(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), c = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: c,
    width: r - n,
    height: c - i
  };
}
var at = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, xn = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, wn = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Jl = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), Ot = globalThis[Jl] ??= /* @__PURE__ */ new WeakMap(), S = (e, t, n) => {
  const i = Ot.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), Ot.set(e, i);
}, wi = (e, t) => {
  const n = Ot.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && Ot.delete(e);
  }
}, B = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, Tr = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, Gl = class extends yi {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let i = !1, r = {
      x: 0,
      y: 0
    }, c = {
      x: 0,
      y: 0
    };
    const a = (s) => {
      const h = t.getBoundingClientRect();
      return {
        x: s.clientX - h.left,
        y: s.clientY - h.top
      };
    }, o = () => {
      const s = bn(r, c);
      if (s.width < 1 && s.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${s.left}px`, n.style.top = `${s.top}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
    }, d = (s) => {
      s.button === 0 && (s.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (s.target === t || t.contains(s.target)) && (i = !0, r = a(s), c = { ...r }, t.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(at.start, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          host: t
        }
      })), o()));
    }, u = (s) => {
      if (!i) return;
      c = a(s), o();
      const h = bn(r, c);
      t.dispatchEvent(new CustomEvent(at.move, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, p = (s) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(s.pointerId);
      } catch {
      }
      const h = bn(r, c);
      t.dispatchEvent(new CustomEvent(at.end, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, f = (s) => {
      i && p(s);
    }, l = (s) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(at.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return S(t, "ui-junction-select", () => {
      n.remove();
    }), S(t, "ui-junction-select", W(t, "pointerdown", d)), S(t, "ui-junction-select", W(t, "pointermove", u)), S(t, "ui-junction-select", W(t, "pointerup", f)), S(t, "ui-junction-select", W(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && wi(t, "ui-junction-select"), this;
  }
}, Kl = class extends yi {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    nt(t, "--jx-drag-x", B(t, "--jx-drag-x")), nt(t, "--jx-drag-y", B(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = Tr(t, "data-junction-drag-handle", t);
    let r = !1, c = 0, a = 0, o = 0, d = 0;
    const u = (l) => {
      l.button === 0 && (l.target !== i && !i.contains(l.target) || (r = !0, c = l.clientX, a = l.clientY, o = B(t, "--jx-drag-x"), d = B(t, "--jx-drag-y"), i.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(xn.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: l.clientX,
          clientY: l.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, p = (l) => {
      if (!r) return;
      const s = l.clientX - c, h = l.clientY - a, m = o + s, v = d + h;
      nt(t, "--jx-drag-x", m), nt(t, "--jx-drag-y", v), t.dispatchEvent(new CustomEvent(xn.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: h,
          x: m,
          y: v
        }
      }));
    }, f = (l) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(xn.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: B(t, "--jx-drag-x"),
            y: B(t, "--jx-drag-y")
          }
        }));
      }
    };
    return S(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), S(t, "ui-junction-drag", W(i, "pointerdown", u)), S(t, "ui-junction-drag", W(i, "pointermove", p)), S(t, "ui-junction-drag", W(i, "pointerup", f)), S(t, "ui-junction-drag", W(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && wi(t, "ui-junction-drag"), this;
  }
}, Ql = class extends yi {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Tr(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, c = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), p = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, c = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(wn.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const h = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - c));
      t.style.width = `${h}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(wn.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: h,
          height: m
        }
      }));
    }, l = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(wn.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return S(t, "ui-junction-resize", W(n, "pointerdown", p)), S(t, "ui-junction-resize", W(n, "pointermove", f)), S(t, "ui-junction-resize", W(n, "pointerup", l)), S(t, "ui-junction-resize", W(n, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && wi(t, "ui-junction-resize"), this;
  }
};
new Gl();
new Kl();
new Ql();
function Sn(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), c = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: c,
    width: r - n,
    height: c - i
  };
}
var ot = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, En = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, jn = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, ec = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), Ht = globalThis[ec] ??= /* @__PURE__ */ new WeakMap(), E = (e, t, n) => {
  const i = Ht.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), Ht.set(e, i);
}, Si = (e, t) => {
  const n = Ht.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && Ht.delete(e);
  }
}, X = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, zr = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, tc = class extends gi {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let i = !1, r = {
      x: 0,
      y: 0
    }, c = {
      x: 0,
      y: 0
    };
    const a = (s) => {
      const h = t.getBoundingClientRect();
      return {
        x: s.clientX - h.left,
        y: s.clientY - h.top
      };
    }, o = () => {
      const s = Sn(r, c);
      if (s.width < 1 && s.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${s.left}px`, n.style.top = `${s.top}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
    }, d = (s) => {
      s.button === 0 && (s.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (s.target === t || t.contains(s.target)) && (i = !0, r = a(s), c = { ...r }, t.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(ot.start, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          host: t
        }
      })), o()));
    }, u = (s) => {
      if (!i) return;
      c = a(s), o();
      const h = Sn(r, c);
      t.dispatchEvent(new CustomEvent(ot.move, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, p = (s) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(s.pointerId);
      } catch {
      }
      const h = Sn(r, c);
      t.dispatchEvent(new CustomEvent(ot.end, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, f = (s) => {
      i && p(s);
    }, l = (s) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(ot.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return E(t, "ui-junction-select", () => {
      n.remove();
    }), E(t, "ui-junction-select", P(t, "pointerdown", d)), E(t, "ui-junction-select", P(t, "pointermove", u)), E(t, "ui-junction-select", P(t, "pointerup", f)), E(t, "ui-junction-select", P(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Si(t, "ui-junction-select"), this;
  }
}, nc = class extends gi {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    tt(t, "--jx-drag-x", X(t, "--jx-drag-x")), tt(t, "--jx-drag-y", X(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = zr(t, "data-junction-drag-handle", t);
    let r = !1, c = 0, a = 0, o = 0, d = 0;
    const u = (l) => {
      l.button === 0 && (l.target !== i && !i.contains(l.target) || (r = !0, c = l.clientX, a = l.clientY, o = X(t, "--jx-drag-x"), d = X(t, "--jx-drag-y"), i.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(En.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: l.clientX,
          clientY: l.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, p = (l) => {
      if (!r) return;
      const s = l.clientX - c, h = l.clientY - a, m = o + s, v = d + h;
      tt(t, "--jx-drag-x", m), tt(t, "--jx-drag-y", v), t.dispatchEvent(new CustomEvent(En.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: h,
          x: m,
          y: v
        }
      }));
    }, f = (l) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(En.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: X(t, "--jx-drag-x"),
            y: X(t, "--jx-drag-y")
          }
        }));
      }
    };
    return E(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), E(t, "ui-junction-drag", P(i, "pointerdown", u)), E(t, "ui-junction-drag", P(i, "pointermove", p)), E(t, "ui-junction-drag", P(i, "pointerup", f)), E(t, "ui-junction-drag", P(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Si(t, "ui-junction-drag"), this;
  }
}, ic = class extends gi {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = zr(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, c = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), p = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, c = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(jn.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const h = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - c));
      t.style.width = `${h}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(jn.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: h,
          height: m
        }
      }));
    }, l = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(jn.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return E(t, "ui-junction-resize", P(n, "pointerdown", p)), E(t, "ui-junction-resize", P(n, "pointermove", f)), E(t, "ui-junction-resize", P(n, "pointerup", l)), E(t, "ui-junction-resize", P(n, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Si(t, "ui-junction-resize"), this;
  }
};
new tc();
new nc();
new ic();
function Mn(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), c = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: c,
    width: r - n,
    height: c - i
  };
}
var st = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, Vn = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, Cn = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, rc = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), It = globalThis[rc] ??= /* @__PURE__ */ new WeakMap(), j = (e, t, n) => {
  const i = It.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), It.set(e, i);
}, Ei = (e, t) => {
  const n = It.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && It.delete(e);
  }
}, Y = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, kr = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, ac = class extends vi {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let i = !1, r = {
      x: 0,
      y: 0
    }, c = {
      x: 0,
      y: 0
    };
    const a = (s) => {
      const h = t.getBoundingClientRect();
      return {
        x: s.clientX - h.left,
        y: s.clientY - h.top
      };
    }, o = () => {
      const s = Mn(r, c);
      if (s.width < 1 && s.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${s.left}px`, n.style.top = `${s.top}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
    }, d = (s) => {
      s.button === 0 && (s.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (s.target === t || t.contains(s.target)) && (i = !0, r = a(s), c = { ...r }, t.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(st.start, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          host: t
        }
      })), o()));
    }, u = (s) => {
      if (!i) return;
      c = a(s), o();
      const h = Mn(r, c);
      t.dispatchEvent(new CustomEvent(st.move, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, p = (s) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(s.pointerId);
      } catch {
      }
      const h = Mn(r, c);
      t.dispatchEvent(new CustomEvent(st.end, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, f = (s) => {
      i && p(s);
    }, l = (s) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(st.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return j(t, "ui-junction-select", () => {
      n.remove();
    }), j(t, "ui-junction-select", k(t, "pointerdown", d)), j(t, "ui-junction-select", k(t, "pointermove", u)), j(t, "ui-junction-select", k(t, "pointerup", f)), j(t, "ui-junction-select", k(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Ei(t, "ui-junction-select"), this;
  }
}, oc = class extends vi {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    et(t, "--jx-drag-x", Y(t, "--jx-drag-x")), et(t, "--jx-drag-y", Y(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = kr(t, "data-junction-drag-handle", t);
    let r = !1, c = 0, a = 0, o = 0, d = 0;
    const u = (l) => {
      l.button === 0 && (l.target !== i && !i.contains(l.target) || (r = !0, c = l.clientX, a = l.clientY, o = Y(t, "--jx-drag-x"), d = Y(t, "--jx-drag-y"), i.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(Vn.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: l.clientX,
          clientY: l.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, p = (l) => {
      if (!r) return;
      const s = l.clientX - c, h = l.clientY - a, m = o + s, v = d + h;
      et(t, "--jx-drag-x", m), et(t, "--jx-drag-y", v), t.dispatchEvent(new CustomEvent(Vn.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: h,
          x: m,
          y: v
        }
      }));
    }, f = (l) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Vn.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: Y(t, "--jx-drag-x"),
            y: Y(t, "--jx-drag-y")
          }
        }));
      }
    };
    return j(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), j(t, "ui-junction-drag", k(i, "pointerdown", u)), j(t, "ui-junction-drag", k(i, "pointermove", p)), j(t, "ui-junction-drag", k(i, "pointerup", f)), j(t, "ui-junction-drag", k(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Ei(t, "ui-junction-drag"), this;
  }
}, sc = class extends vi {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = kr(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, c = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), p = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, c = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(Cn.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const h = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - c));
      t.style.width = `${h}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(Cn.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: h,
          height: m
        }
      }));
    }, l = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Cn.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return j(t, "ui-junction-resize", k(n, "pointerdown", p)), j(t, "ui-junction-resize", k(n, "pointermove", f)), j(t, "ui-junction-resize", k(n, "pointerup", l)), j(t, "ui-junction-resize", k(n, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Ei(t, "ui-junction-resize"), this;
  }
};
new ac();
new oc();
new sc();
function Ln(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), c = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: c,
    width: r - n,
    height: c - i
  };
}
var lt = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, An = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, Nn = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, lc = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), Bt = globalThis[lc] ??= /* @__PURE__ */ new WeakMap(), M = (e, t, n) => {
  const i = Bt.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), Bt.set(e, i);
}, ji = (e, t) => {
  const n = Bt.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && Bt.delete(e);
  }
}, _ = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, Pr = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, cc = class extends mi {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let i = !1, r = {
      x: 0,
      y: 0
    }, c = {
      x: 0,
      y: 0
    };
    const a = (s) => {
      const h = t.getBoundingClientRect();
      return {
        x: s.clientX - h.left,
        y: s.clientY - h.top
      };
    }, o = () => {
      const s = Ln(r, c);
      if (s.width < 1 && s.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${s.left}px`, n.style.top = `${s.top}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
    }, d = (s) => {
      s.button === 0 && (s.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (s.target === t || t.contains(s.target)) && (i = !0, r = a(s), c = { ...r }, t.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(lt.start, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          host: t
        }
      })), o()));
    }, u = (s) => {
      if (!i) return;
      c = a(s), o();
      const h = Ln(r, c);
      t.dispatchEvent(new CustomEvent(lt.move, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, p = (s) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(s.pointerId);
      } catch {
      }
      const h = Ln(r, c);
      t.dispatchEvent(new CustomEvent(lt.end, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, f = (s) => {
      i && p(s);
    }, l = (s) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(lt.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return M(t, "ui-junction-select", () => {
      n.remove();
    }), M(t, "ui-junction-select", z(t, "pointerdown", d)), M(t, "ui-junction-select", z(t, "pointermove", u)), M(t, "ui-junction-select", z(t, "pointerup", f)), M(t, "ui-junction-select", z(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ji(t, "ui-junction-select"), this;
  }
}, uc = class extends mi {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    Qe(t, "--jx-drag-x", _(t, "--jx-drag-x")), Qe(t, "--jx-drag-y", _(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = Pr(t, "data-junction-drag-handle", t);
    let r = !1, c = 0, a = 0, o = 0, d = 0;
    const u = (l) => {
      l.button === 0 && (l.target !== i && !i.contains(l.target) || (r = !0, c = l.clientX, a = l.clientY, o = _(t, "--jx-drag-x"), d = _(t, "--jx-drag-y"), i.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(An.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: l.clientX,
          clientY: l.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, p = (l) => {
      if (!r) return;
      const s = l.clientX - c, h = l.clientY - a, m = o + s, v = d + h;
      Qe(t, "--jx-drag-x", m), Qe(t, "--jx-drag-y", v), t.dispatchEvent(new CustomEvent(An.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: h,
          x: m,
          y: v
        }
      }));
    }, f = (l) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(An.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: _(t, "--jx-drag-x"),
            y: _(t, "--jx-drag-y")
          }
        }));
      }
    };
    return M(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), M(t, "ui-junction-drag", z(i, "pointerdown", u)), M(t, "ui-junction-drag", z(i, "pointermove", p)), M(t, "ui-junction-drag", z(i, "pointerup", f)), M(t, "ui-junction-drag", z(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ji(t, "ui-junction-drag"), this;
  }
}, dc = class extends mi {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Pr(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, c = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), p = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, c = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(Nn.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const h = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - c));
      t.style.width = `${h}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(Nn.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: h,
          height: m
        }
      }));
    }, l = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Nn.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return M(t, "ui-junction-resize", z(n, "pointerdown", p)), M(t, "ui-junction-resize", z(n, "pointermove", f)), M(t, "ui-junction-resize", z(n, "pointerup", l)), M(t, "ui-junction-resize", z(n, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ji(t, "ui-junction-resize"), this;
  }
};
new cc();
new uc();
new dc();
function Tn(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), c = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: c,
    width: r - n,
    height: c - i
  };
}
var ct = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, zn = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, kn = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, hc = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), Xt = globalThis[hc] ??= /* @__PURE__ */ new WeakMap(), V = (e, t, n) => {
  const i = Xt.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), Xt.set(e, i);
}, Mi = (e, t) => {
  const n = Xt.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && Xt.delete(e);
  }
}, D = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, Wr = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, pc = class extends fi {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let i = !1, r = {
      x: 0,
      y: 0
    }, c = {
      x: 0,
      y: 0
    };
    const a = (s) => {
      const h = t.getBoundingClientRect();
      return {
        x: s.clientX - h.left,
        y: s.clientY - h.top
      };
    }, o = () => {
      const s = Tn(r, c);
      if (s.width < 1 && s.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${s.left}px`, n.style.top = `${s.top}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
    }, d = (s) => {
      s.button === 0 && (s.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (s.target === t || t.contains(s.target)) && (i = !0, r = a(s), c = { ...r }, t.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(ct.start, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          host: t
        }
      })), o()));
    }, u = (s) => {
      if (!i) return;
      c = a(s), o();
      const h = Tn(r, c);
      t.dispatchEvent(new CustomEvent(ct.move, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, p = (s) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(s.pointerId);
      } catch {
      }
      const h = Tn(r, c);
      t.dispatchEvent(new CustomEvent(ct.end, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...c },
          box: h,
          host: t
        }
      }));
    }, f = (s) => {
      i && p(s);
    }, l = (s) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(ct.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return V(t, "ui-junction-select", () => {
      n.remove();
    }), V(t, "ui-junction-select", T(t, "pointerdown", d)), V(t, "ui-junction-select", T(t, "pointermove", u)), V(t, "ui-junction-select", T(t, "pointerup", f)), V(t, "ui-junction-select", T(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Mi(t, "ui-junction-select"), this;
  }
}, fc = class extends fi {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    Ke(t, "--jx-drag-x", D(t, "--jx-drag-x")), Ke(t, "--jx-drag-y", D(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = Wr(t, "data-junction-drag-handle", t);
    let r = !1, c = 0, a = 0, o = 0, d = 0;
    const u = (l) => {
      l.button === 0 && (l.target !== i && !i.contains(l.target) || (r = !0, c = l.clientX, a = l.clientY, o = D(t, "--jx-drag-x"), d = D(t, "--jx-drag-y"), i.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(zn.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: l.clientX,
          clientY: l.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, p = (l) => {
      if (!r) return;
      const s = l.clientX - c, h = l.clientY - a, m = o + s, v = d + h;
      Ke(t, "--jx-drag-x", m), Ke(t, "--jx-drag-y", v), t.dispatchEvent(new CustomEvent(zn.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: h,
          x: m,
          y: v
        }
      }));
    }, f = (l) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(zn.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: D(t, "--jx-drag-x"),
            y: D(t, "--jx-drag-y")
          }
        }));
      }
    };
    return V(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), V(t, "ui-junction-drag", T(i, "pointerdown", u)), V(t, "ui-junction-drag", T(i, "pointermove", p)), V(t, "ui-junction-drag", T(i, "pointerup", f)), V(t, "ui-junction-drag", T(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Mi(t, "ui-junction-drag"), this;
  }
}, mc = class extends fi {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Wr(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, c = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), p = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, c = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(kn.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const h = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - c));
      t.style.width = `${h}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(kn.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: h,
          height: m
        }
      }));
    }, l = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(kn.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return V(t, "ui-junction-resize", T(n, "pointerdown", p)), V(t, "ui-junction-resize", T(n, "pointermove", f)), V(t, "ui-junction-resize", T(n, "pointerup", l)), V(t, "ui-junction-resize", T(n, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Mi(t, "ui-junction-resize"), this;
  }
};
new pc();
new fc();
new mc();
function Pn(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), c = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: c,
    width: r - n,
    height: c - i
  };
}
var ut = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, Wn = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, Rn = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, vc = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), Yt = globalThis[vc] ??= /* @__PURE__ */ new WeakMap(), C = (e, t, n) => {
  const i = Yt.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), Yt.set(e, i);
}, Vi = (e, t) => {
  const n = Yt.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && Yt.delete(e);
  }
}, U = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, Rr = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, gc = class extends pi {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let r = !1, c = {
      x: 0,
      y: 0
    }, a = {
      x: 0,
      y: 0
    };
    const o = (h) => {
      const m = t.getBoundingClientRect();
      return {
        x: h.clientX - m.left,
        y: h.clientY - m.top
      };
    }, d = () => {
      const h = Pn(c, a);
      if (h.width < 1 && h.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${h.left}px`, n.style.top = `${h.top}px`, n.style.width = `${h.width}px`, n.style.height = `${h.height}px`;
    }, u = (h) => {
      h.button === 0 && (h.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (h.target === t || t.contains(h.target)) && (r = !0, c = o(h), a = { ...c }, t.setPointerCapture(h.pointerId), t.dispatchEvent(new CustomEvent(ut.start, {
        bubbles: !0,
        detail: {
          a: { ...c },
          b: { ...a },
          host: t
        }
      })), d()));
    }, p = (h) => {
      if (!r) return;
      a = o(h), d();
      const m = Pn(c, a);
      t.dispatchEvent(new CustomEvent(ut.move, {
        bubbles: !0,
        detail: {
          a: { ...c },
          b: { ...a },
          box: m,
          host: t
        }
      }));
    }, f = (h) => {
      if (!r) return;
      r = !1;
      try {
        t.releasePointerCapture(h.pointerId);
      } catch {
      }
      const m = Pn(c, a);
      t.dispatchEvent(new CustomEvent(ut.end, {
        bubbles: !0,
        detail: {
          a: { ...c },
          b: { ...a },
          box: m,
          host: t
        }
      }));
    }, l = (h) => {
      r && f(h);
    }, s = (h) => {
      if (r) {
        r = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(h.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(ut.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return C(t, "ui-junction-select", () => {
      n.remove();
    }), C(t, "ui-junction-select", N(t, "pointerdown", u)), C(t, "ui-junction-select", N(t, "pointermove", p)), C(t, "ui-junction-select", N(t, "pointerup", l)), C(t, "ui-junction-select", N(t, "pointercancel", s)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Vi(t, "ui-junction-select"), this;
  }
}, yc = class extends pi {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    Ge(t, "--jx-drag-x", U(t, "--jx-drag-x")), Ge(t, "--jx-drag-y", U(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = Rr(t, "data-junction-drag-handle", t);
    let r = !1, c = 0, a = 0, o = 0, d = 0;
    const u = (l) => {
      l.button === 0 && (l.target !== i && !i.contains(l.target) || (r = !0, c = l.clientX, a = l.clientY, o = U(t, "--jx-drag-x"), d = U(t, "--jx-drag-y"), i.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(Wn.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: l.clientX,
          clientY: l.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, p = (l) => {
      if (!r) return;
      const s = l.clientX - c, h = l.clientY - a, m = o + s, v = d + h;
      Ge(t, "--jx-drag-x", m), Ge(t, "--jx-drag-y", v), t.dispatchEvent(new CustomEvent(Wn.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: h,
          x: m,
          y: v
        }
      }));
    }, f = (l) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Wn.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: U(t, "--jx-drag-x"),
            y: U(t, "--jx-drag-y")
          }
        }));
      }
    };
    return C(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), C(t, "ui-junction-drag", N(i, "pointerdown", u)), C(t, "ui-junction-drag", N(i, "pointermove", p)), C(t, "ui-junction-drag", N(i, "pointerup", f)), C(t, "ui-junction-drag", N(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Vi(t, "ui-junction-drag"), this;
  }
}, bc = class extends pi {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Rr(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, c = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), p = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, c = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(Rn.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const h = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - c));
      t.style.width = `${h}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(Rn.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: h,
          height: m
        }
      }));
    }, l = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Rn.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return C(t, "ui-junction-resize", N(n, "pointerdown", p)), C(t, "ui-junction-resize", N(n, "pointermove", f)), C(t, "ui-junction-resize", N(n, "pointerup", l)), C(t, "ui-junction-resize", N(n, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Vi(t, "ui-junction-resize"), this;
  }
};
new gc();
new yc();
new bc();
export {
  Vu as DOMMixin,
  yc as JunctionDragMixin,
  bc as JunctionResizeMixin,
  gc as JunctionSelectMixin,
  $c as MATCH,
  _c as MOC,
  $n as MOCElement,
  Mc as RAFBehavior,
  Fc as REGEX,
  Vc as ROOT,
  du as WavyShapedCircle,
  wc as __exportProperties,
  Li as __registeredCssProperties,
  A as addEvent,
  At as addEvents,
  Ic as addEventsList,
  Wa as addRoot,
  Ce as adoptedBlobMap,
  R as adoptedMap,
  sa as animateHide,
  oa as animateShow,
  qn as availSize,
  Qc as bbh,
  Kc as bbw,
  Ma as bindBehavior,
  Na as bindMixins,
  Aa as bindStore,
  Vt as borderBoxHeight,
  Mt as borderBoxWidth,
  ir as boundBehaviors,
  q as boundMixinSet,
  tu as cbh,
  eu as cbw,
  Zc as changeZoom,
  nu as classes,
  ra as computeCaretPosition,
  au as computeCaretPositionFromClient,
  Yc as containsOrSelf,
  Lt as contentBoxHeight,
  Ct as contentBoxWidth,
  qc as createElementVanilla,
  Oa as deleteStyleProperty,
  Sc as detectMobile,
  Tc as doBorderObserve,
  Nc as doContentObserve,
  ba as fetchAndCache,
  xa as fetchAsInline,
  iu as fixOrientToScreen,
  Jc as fixedClientZoom,
  pu as getAdoptedStyleRule,
  Gi as getAvailSize,
  Gc as getBoundingOrientRect,
  ta as getCorrectOrientation,
  $e as getElementRelated,
  xu as getElementZoom,
  Xc as getEventTarget,
  _r as getOffsetParent,
  Ec as getOffsetParentChain,
  Su as getPadding,
  Le as getPropertyValue,
  wu as getPxValue,
  Ca as getStoresOfElement,
  da as getStyleLayer,
  hi as getStyleRule,
  yu as getTransform,
  bu as getTransformOrigin,
  Uc as getZoom,
  Tu as handleAttribute,
  Au as handleDataset,
  Cu as handleHidden,
  Lu as handleProperty,
  Nu as handleStyleChange,
  tn as hasParent,
  mu as hash,
  kc as html,
  Hc as includeSelf,
  Rc as indexOf,
  Ki as initTextStyle,
  uu as initVisibility,
  Oc as isElement,
  Dc as isInFocus,
  Xr as isMobile,
  jc as isNearlyIdentity,
  Wc as isValidParent,
  Ea as loadAsAdopted,
  Sa as loadBlobStyle,
  Ve as loadInlineStyle,
  nr as loadStyleSheet,
  Dr as makeRAFCycle,
  ru as measureInputInFocus,
  ia as measureText,
  Yt as mixinDisposers,
  ie as mixinElements,
  Nt as mixinNamespace,
  qe as mixinRegistry,
  Fa as nameRegistryF,
  Fe as namedStoreMaps,
  cu as observeAttribute,
  ui as observeAttributeBySelector,
  lu as observeBorderBox,
  ua as observeBySelector,
  su as observeContentBox,
  Ni as onBorderObserve,
  Ti as onContentObserve,
  xe as orientOf,
  Qr as orientationNumberMap,
  Hi as parseLength,
  ja as parseOrigin,
  Ji as passiveOpts,
  gu as preloadStyle,
  aa as readLauncherLayoutFromElement,
  Eu as reflectBehaviors,
  Mu as reflectMixins,
  ju as reflectStores,
  qa as registerMixin,
  an as removeAdopted,
  zi as removeEvent,
  Bc as removeEvents,
  ou as resolveGridCellFromClientPoint,
  On as roots,
  Lc as setAttributes,
  Cc as setAttributesIfNull,
  Pc as setChecked,
  Ac as setIdleInterval,
  vu as setProperty,
  fu as setStyleInRule,
  Dt as setStyleProperty,
  er as setStylePropertyFallback,
  ya as setStylePropertyTyped,
  wa as setStyleRule,
  hu as setStyleRules,
  Pi as setStyleURL,
  Ur as throttleMap,
  Fn as unfixedClientZoom,
  Hn as updateAllMixins,
  rr as updateMixinAttributes,
  Ra as updateMixinAttributesAll,
  $a as updateMixinAttributesAllInRoots,
  ea as updateVP,
  zc as url,
  na as whenAnyScreenChanges,
  Gr as zoomOf,
  Jr as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwsIHRyeVN0cmluZ0FzTnVtYmVyIH0gZnJvbSBcIkBmZXN0LWxpYi9jb3JlXCI7XG5cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvUHJvcGVydGllcy50c1xudmFyIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyA9IGdsb2JhbFRoaXNbX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5bXG5cdHtcblx0XHRuYW1lOiBcIi0tc2NyZWVuLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jbGlwLWZyZXFcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGl4ZWwtcmF0aW9cIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMVwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudC15XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC1sZWZ0XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC14XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC15XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH1cbl0uZm9yRWFjaCgob3B0aW9ucykgPT4ge1xuXHRpZiAodHlwZW9mIENTUyA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBDU1M/LnJlZ2lzdGVyUHJvcGVydHkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdGNvbnN0IG5hbWUgPSBTdHJpbmcob3B0aW9ucz8ubmFtZSB8fCBcIlwiKS50cmltKCk7XG5cdGlmICghbmFtZSB8fCBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmhhcyhuYW1lKSkgcmV0dXJuO1xuXHR0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KG9wdGlvbnMpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKCEoU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIikpIGNvbnNvbGUud2FybihlKTtcblx0fSBmaW5hbGx5IHtcblx0XHRfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmFkZChuYW1lKTtcblx0fVxufSk7XG52YXIgX19leHBvcnRQcm9wZXJ0aWVzID0gKCkgPT4ge307XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9EZXRlY3QudHNcbnZhciBpc01vYmlsZSA9ICgpID0+IHtcblx0bGV0IGNoZWNrID0gbmF2aWdhdG9yPy51c2VyQWdlbnREYXRhPy5tb2JpbGUgfHwgZmFsc2U7XG5cdCgoYSkgPT4ge1xuXHRcdGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkgY2hlY2sgPSB0cnVlO1xuXHR9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgZ2xvYmFsVGhpcy5vcGVyYSk7XG5cdHJldHVybiBjaGVjaztcbn07XG52YXIgZGV0ZWN0TW9iaWxlID0gKCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC9BbmRyb2lkL2ksXG5cdFx0L3dlYk9TL2ksXG5cdFx0L2lQaG9uZS9pLFxuXHRcdC9pUGFkL2ksXG5cdFx0L2lQb2QvaSxcblx0XHQvQmxhY2tCZXJyeS9pLFxuXHRcdC9XaW5kb3dzIFBob25lL2lcblx0XS5zb21lKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2guYmluZChuYXZpZ2F0b3IudXNlckFnZW50KSkgJiYgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgJiYgZ2xvYmFsVGhpcy5tYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9VdGlscy50c1xudmFyIGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrID0gKCkgPT4gKHtcblx0ZGlkVGltZW91dDogZmFsc2UsXG5cdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcbn0pO1xudmFyIHJ1bldoZW5JZGxlJDEgPSAoY2IsIHRpbWVvdXQgPSAxZTMpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayhjYiwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc2V0VGltZW91dCgoKSA9PiBjYihjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjaygpKSwgMCk7XG59O1xudmFyIGdldE9mZnNldFBhcmVudCA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiBlbGVtZW50Py5vZmZzZXRQYXJlbnQgPz8gZWxlbWVudD8uaG9zdDtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4gPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBwYXJlbnRzID0gW107XG5cdGxldCBjdXJyZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRjb25zdCBwYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoY3VycmVudCk7XG5cdFx0aWYgKHBhcmVudCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MSHRtbEVsZW1lbnQpIGJyZWFrO1xuXHRcdGlmIChjdXJyZW50ID0gcGFyZW50KSBwYXJlbnRzLnB1c2goY3VycmVudCk7XG5cdH1cblx0cmV0dXJuIHBhcmVudHM7XG59O1xudmFyIGlzTmVhcmx5SWRlbnRpdHkgPSAobWF0cml4LCBlcHNpbG9uID0gMWUtNikgPT4ge1xuXHRyZXR1cm4gTWF0aC5hYnMobWF0cml4LmEgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmIpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYykgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5kIC0gMSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5lKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmYpIDwgZXBzaWxvbjtcbn07XG52YXIgbWFrZVJBRkN5Y2xlID0gKCkgPT4ge1xuXHRjb25zdCBjb250cm9sID0ge1xuXHRcdGNhbmNlbGVkOiBmYWxzZSxcblx0XHRyQUZzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHRcdGxhc3Q6IG51bGwsXG5cdFx0Y2FuY2VsKCkge1xuXHRcdFx0dGhpcy5jYW5jZWxlZCA9IHRydWU7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxhc3QpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHRzaGVkdWxlKGNiKSB7XG5cdFx0XHR0aGlzLnJBRnMuYWRkKGNiKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0fTtcblx0KGFzeW5jICgpID0+IHtcblx0XHR3aGlsZSAoIWNvbnRyb2w/LmNhbmNlbGVkKSB7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbCgoY29udHJvbD8uckFGcz8udmFsdWVzPy4oKSA/PyBbXSk/Lm1hcD8uKChyQUYpID0+IFByb21pc2UudHJ5KHJBRik/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpKSk7XG5cdFx0XHRjb250cm9sLnJBRnM/LmNsZWFyPy4oKTtcblx0XHRcdGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHtcblx0XHRcdFx0Y29udHJvbC5sYXN0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcyk7XG5cdFx0XHR9KTtcblx0XHRcdGVsc2UgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJlcywgMTYpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KSgpO1xuXHRyZXR1cm4gY29udHJvbDtcbn07XG52YXIgUkFGQmVoYXZpb3IgPSAoc2hlZCA9IG1ha2VSQUZDeWNsZSgpKSA9PiB7XG5cdHJldHVybiAoY2IpID0+IHNoZWQuc2hlZHVsZShjYik7XG59O1xudmFyIFJPT1QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xudmFyIHNldEF0dHJpYnV0ZXNJZk51bGwgPSAoZWxlbWVudCwgYXR0cnMgPSB7fSkgPT4ge1xuXHRpZiAoIWF0dHJzIHx8IHR5cGVvZiBhdHRycyAhPSBcIm9iamVjdFwiIHx8ICFlbGVtZW50KSByZXR1cm47XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0Y29uc3Qgb2xkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgaWYgKHZhbHVlICE9IG9sZCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgb2xkID09IFwiXCIgPyB2YWx1ZSA/PyBvbGQgOiBvbGQgPz8gdmFsdWUpO1xuXHR9KTtcbn07XG52YXIgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPz8gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSkpO1xuXHR9KTtcbn07XG52YXIgdGhyb3R0bGVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIHNldElkbGVJbnRlcnZhbCA9IChjYiwgdGltZW91dCA9IDFlMywgLi4uYXJncykgPT4ge1xuXHRjb25zdCBzdGF0dXMgPSB7XG5cdFx0cnVubmluZzogdHJ1ZSxcblx0XHRjYW5jZWw6ICgpID0+IHtcblx0XHRcdHN0YXR1cy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXHRydW5XaGVuSWRsZSQxKGFzeW5jICgpID0+IHtcblx0XHRpZiAoIWNiIHx8IHR5cGVvZiBjYiAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0XHR3aGlsZSAoc3RhdHVzLnJ1bm5pbmcpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKFtQcm9taXNlLnRyeShjYiwgLi4uYXJncyksIG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHRpbWVvdXQpKV0pLmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbnkoW25ldyBQcm9taXNlKChyKSA9PiBydW5XaGVuSWRsZSQxKHIsIHRpbWVvdXQpKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSk7XG5cdFx0fVxuXHRcdHN0YXR1cy5jYW5jZWwgPSAoKSA9PiB7fTtcblx0fSwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc3RhdHVzPy5jYW5jZWw7XG59O1xuaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFzeW5jICgpID0+IHtcblx0d2hpbGUgKHRydWUpIHtcblx0XHR0aHJvdHRsZU1hcC5mb3JFYWNoKChjYikgPT4gY2I/LigpKTtcblx0XHRhd2FpdCBuZXcgUHJvbWlzZSgocikgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHIpKTtcblx0fVxufSk7XG52YXIgYm9yZGVyQm94V2lkdGggPSBTeW1ib2woXCJAYm9yZGVyLWJveC13aWR0aFwiKTtcbnZhciBib3JkZXJCb3hIZWlnaHQgPSBTeW1ib2woXCJAYm9yZGVyLWJveC1oZWlnaHRcIik7XG52YXIgY29udGVudEJveFdpZHRoID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LXdpZHRoXCIpO1xudmFyIGNvbnRlbnRCb3hIZWlnaHQgPSBTeW1ib2woXCJAY29udGVudC1ib3gtaGVpZ2h0XCIpO1xudmFyIG9uQm9yZGVyT2JzZXJ2ZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9uQ29udGVudE9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBkb0NvbnRlbnRPYnNlcnZlID0gKGVsZW1lbnQsIGNiID0gKCkgPT4ge30pID0+IHtcblx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuXHRpZiAoIW9uQ29udGVudE9ic2VydmUuaGFzKGVsZW1lbnQpKSB7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94V2lkdGhdID0gZWxlbWVudC5jbGllbnRXaWR0aDtcblx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRCb3hTaXplID0gZW50cnkuY29udGVudEJveFNpemVbMF07XG5cdFx0XHRcdGlmIChjb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IE1hdGgubWluKGNvbnRlbnRCb3hTaXplLmlubGluZVNpemUsIGVsZW1lbnQuY2xpZW50V2lkdGgpO1xuXHRcdFx0XHRcdGVsZW1lbnRbY29udGVudEJveEhlaWdodF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Db250ZW50T2JzZXJ2ZS5zZXQoZWxlbWVudCwgb2JzZXJ2ZXIpO1xuXHRcdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJjb250ZW50LWJveFwiIH0pO1xuXHR9XG59O1xudmFyIGRvQm9yZGVyT2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkJvcmRlck9ic2VydmUuaGFzKGVsZW1lbnQpKSB7XG5cdFx0ZWxlbWVudFtib3JkZXJCb3hXaWR0aF0gPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94SGVpZ2h0XSA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5ib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGJvcmRlckJveFNpemUgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50Lm9mZnNldFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBNYXRoLm1pbihib3JkZXJCb3hTaXplLmJsb2NrU2l6ZSwgZWxlbWVudC5vZmZzZXRIZWlnaHQpO1xuXHRcdFx0XHRcdGNiPy4oZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRvbkJvcmRlck9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiYm9yZGVyLWJveFwiIH0pO1xuXHR9XG59O1xudmFyIHVybCA9ICh0eXBlLCAuLi5zb3VyY2UpID0+IHtcblx0cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2Ioc291cmNlLCB7IHR5cGUgfSkpO1xufTtcbnZhciBodG1sID0gKHNvdXJjZSwgdHlwZSA9IFwidGV4dC9odG1sXCIpID0+IHtcblx0Y29uc3QgcGFyc2VkID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzb3VyY2UsIHR5cGUpO1xuXHRyZXR1cm4gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCJ0ZW1wbGF0ZVwiKSA/PyBwYXJzZWQucXVlcnlTZWxlY3RvcihcIipcIik7XG59O1xudmFyIHNldENoZWNrZWQgPSAoaW5wdXQsIHZhbHVlLCBldikgPT4ge1xuXHRpZiAodmFsdWUgIT0gbnVsbCAmJiBpbnB1dC5jaGVja2VkICE9IHZhbHVlKSB7XG5cdFx0aWYgKGlucHV0Py5bXCJ0eXBlXCJdID09IFwiY2hlY2tib3hcIiB8fCBpbnB1dD8uW1widHlwZVwiXSA9PSBcInJhZGlvXCIgJiYgIWlucHV0Py5jaGVja2VkKSB7XG5cdFx0XHRpbnB1dD8uY2xpY2s/LigpO1xuXHRcdFx0ZXY/LnByZXZlbnREZWZhdWx0Py4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5wdXQuY2hlY2tlZCA9ICEhdmFsdWU7XG5cdFx0XHRpbnB1dD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBFdmVudChcImNoYW5nZVwiLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdH1cbn07XG52YXIgaXNWYWxpZFBhcmVudCA9IChwYXJlbnQpID0+IHtcblx0cmV0dXJuIHBhcmVudCAhPSBudWxsICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmICEocGFyZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCB8fCBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MQm9keUVsZW1lbnQpID8gcGFyZW50IDogbnVsbDtcbn07XG52YXIgaW5kZXhPZiA9IChlbGVtZW50LCBub2RlKSA9PiB7XG5cdGlmIChlbGVtZW50ID09IG51bGwgfHwgbm9kZSA9PSBudWxsKSByZXR1cm4gLTE7XG5cdHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQ/LmNoaWxkTm9kZXMgPz8gW10pPy5pbmRleE9mPy4obm9kZSkgPz8gLTE7XG59O1xudmFyIE1BVENIID0gXCIoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopXCI7XG52YXIgUkVHRVggPSBcIl4oPzooLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopKXxeIygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKil8XlxcXFwuKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXFsoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiO1xudmFyIGNyZWF0ZUVsZW1lbnRWYW5pbGxhID0gKHNlbGVjdG9yKSA9PiB7XG5cdGlmIChzZWxlY3RvciA9PSBcIjpmcmFnbWVudDpcIikgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0Y29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KTtcblx0Zm9yICh2YXIgbm9kZSA9IGNyZWF0ZShcImRpdlwiKSwgbWF0Y2gsIGNsYXNzTmFtZSA9IFwiXCI7IHNlbGVjdG9yICYmIChtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCIpKTspIHtcblx0XHRpZiAobWF0Y2hbMV0pIG5vZGUgPSBjcmVhdGUobWF0Y2hbMV0pO1xuXHRcdGlmIChtYXRjaFsyXSkgbm9kZS5pZCA9IG1hdGNoWzJdO1xuXHRcdGlmIChtYXRjaFszXSkgY2xhc3NOYW1lICs9IFwiIFwiICsgbWF0Y2hbM107XG5cdFx0aWYgKG1hdGNoWzRdKSBub2RlLnNldEF0dHJpYnV0ZShtYXRjaFs0XSwgbWF0Y2hbN10gfHwgXCJcIik7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuXHR9XG5cdGlmIChjbGFzc05hbWUpIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNsaWNlKDEpO1xuXHRyZXR1cm4gbm9kZTtcbn07XG52YXIgaXNFbGVtZW50ID0gKGVsKSA9PiB7XG5cdHJldHVybiBlbCAhPSBudWxsICYmIChlbCBpbnN0YW5jZW9mIE5vZGUgfHwgZWwgaW5zdGFuY2VvZiBUZXh0IHx8IGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIENvbW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gZWwgOiBudWxsO1xufTtcbnZhciBpbmNsdWRlU2VsZiA9ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB7XG5cdHJldHVybiB0YXJnZXQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPz8gKHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSA/IHRhcmdldCA6IG51bGwpO1xufTtcbnZhciBoYXNQYXJlbnQgPSAoY3VycmVudCwgcGFyZW50KSA9PiB7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0aWYgKCEoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICgoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSA9PT0gKHBhcmVudD8uZWxlbWVudCA/PyBwYXJlbnQpKSByZXR1cm4gdHJ1ZTtcblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50ID8/IChjdXJyZW50LnBhcmVudE5vZGUgPT0gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pID8gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0IDogY3VycmVudD8ucGFyZW50Tm9kZSk7XG5cdH1cbn07XG52YXIgcGFzc2l2ZU9wdHMgPSB7fTtcbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG5cdGNvbnN0IHdyID0gdHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQ/LmRlcmVmID8gbmV3IFdlYWtSZWYodGFyZ2V0KSA6IHRhcmdldDtcblx0cmV0dXJuICgpID0+IHdyPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG5mdW5jdGlvbiByZW1vdmVFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxudmFyIGFkZEV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gYWRkRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogYWRkRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgYWRkRXZlbnRzTGlzdCA9IChlbCwgZXZlbnRzKSA9PiB7XG5cdGlmIChldmVudHMpIHtcblx0XHRsZXQgZW50cmllcyA9IGV2ZW50cztcblx0XHRpZiAoZXZlbnRzIGluc3RhbmNlb2YgTWFwKSBlbnRyaWVzID0gWy4uLmV2ZW50cy5lbnRyaWVzKCldO1xuXHRcdGVsc2UgZW50cmllcyA9IFsuLi5PYmplY3QuZW50cmllcyhldmVudHMpXTtcblx0XHRyZXR1cm4gZW50cmllcy5tYXAoKFtuYW1lLCBsaXN0XSkgPT4gKChpc0FycmF5T3JJdGVyYWJsZShsaXN0KSA/IFsuLi5saXN0XSA6IGxpc3QpID8/IFtdKT8ubWFwPy4oKGNicykgPT4ge1xuXHRcdFx0cmV0dXJuIGFkZEV2ZW50KGVsLCBuYW1lLCBjYnMpO1xuXHRcdH0pKTtcblx0fVxufTtcbnZhciByZW1vdmVFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGdldEV2ZW50VGFyZ2V0ID0gKGV2KSA9PiB7XG5cdGlmICghZXYpIHJldHVybiBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBub2RlO1xuXHR9XG5cdGNvbnN0IHRhcmdldCA9IGV2Py50YXJnZXQ7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gdGFyZ2V0O1xuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgY29udGFpbnNPclNlbGYgPSAoYSwgYiwgZXYpID0+IHtcblx0aWYgKGIgPT0gbnVsbCB8fCAhKGIgaW5zdGFuY2VvZiBOb2RlKSAmJiBiPy5lbGVtZW50ID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gYiB8fCAoYT8uZWxlbWVudCA/PyBhKSA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRjb25zdCBhRWwgPSBhPy5lbGVtZW50ID8/IGE7XG5cdFx0Y29uc3QgYkVsID0gYj8uZWxlbWVudCA/PyBiO1xuXHRcdGlmIChwYXRoLmluY2x1ZGVzKGFFbCkgJiYgcGF0aC5pbmNsdWRlcyhiRWwpKSB7XG5cdFx0XHRjb25zdCBhSW5kZXggPSBwYXRoLmluZGV4T2YoYUVsKTtcblx0XHRcdGNvbnN0IGJJbmRleCA9IHBhdGguaW5kZXhPZihiRWwpO1xuXHRcdFx0aWYgKGJJbmRleCA+PSAwICYmIGFJbmRleCA+PSAwICYmIGJJbmRleCA8IGFJbmRleCkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChhPy5jb250YWlucz8uKGI/LmVsZW1lbnQgPz8gYikgfHwgYT8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgTU9DRWxlbWVudCA9IChlbGVtZW50LCBzZWxlY3RvciwgZXYpID0+IHtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBwYXRoKSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG5cdFx0XHRpZiAobm9kZS5tYXRjaGVzPy4oc2VsZWN0b3IpKSByZXR1cm4gbm9kZTtcblx0XHR9XG5cdH1cblx0Y29uc3Qgc2VsZiA9IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWxlY3RvcikgPyBlbGVtZW50IDogbnVsbDtcblx0Y29uc3QgaG9zdCA9IChlbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID8/IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkpPy5ob3N0O1xuXHRjb25zdCBob3N0TWF0Y2hlZCA9IGhvc3Q/Lm1hdGNoZXM/LihzZWxlY3RvcikgPyBob3N0IDogbnVsbDtcblx0Y29uc3QgY2xvc2VzdCA9IGVsZW1lbnQ/LmNsb3Nlc3Q/LihzZWxlY3RvcikgPz8gc2VsZj8uY2xvc2VzdD8uKHNlbGVjdG9yKSA/PyBob3N0TWF0Y2hlZD8uY2xvc2VzdD8uKHNlbGVjdG9yKSA/PyBudWxsO1xuXHRyZXR1cm4gc2VsZiA/PyBjbG9zZXN0ID8/IGhvc3RNYXRjaGVkO1xufTtcbnZhciBNT0MgPSAoZWxlbWVudCwgc2VsZWN0b3IpID0+IHtcblx0cmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvcik7XG59O1xudmFyIGlzSW5Gb2N1cyA9IChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCwgZGlyID0gXCJwYXJlbnRcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKGVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmICFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSh7XG5cdFx0Y2hlY2tPcGFjaXR5OiB0cnVlLFxuXHRcdGNoZWNrVmlzaWJpbGl0eUNTUzogdHJ1ZVxuXHR9KSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoIWVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmIGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsICYmIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gIT09IFwiZml4ZWRcIikgcmV0dXJuIGZhbHNlO1xuXHRsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0d2hpbGUgKGFjdGl2ZSAmJiBhY3RpdmUuc2hhZG93Um9vdCAmJiBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50KSBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuXHRjb25zdCBpc0ZvY3VzZWQgPSBhY3RpdmUgPT09IGVsZW1lbnQgfHwgaGFzUGFyZW50KGFjdGl2ZSwgZWxlbWVudCk7XG5cdGNvbnN0IGlzSG92ZXJlZCA9IGVsZW1lbnQubWF0Y2hlcyhcIjpob3ZlclwiKTtcblx0aWYgKCFpc0ZvY3VzZWQgJiYgIWlzSG92ZXJlZCAmJiAhc2VsZWN0b3JPckVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKHNlbGVjdG9yT3JFbGVtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBzZWxlY3Rvck9yRWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKGRpciA9PT0gXCJwYXJlbnRcIikgcmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gaXNGb2N1c2VkID8gYWN0aXZlIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiOmhvdmVyXCIpIHx8IGVsZW1lbnQ7XG5cdFx0XHRcdGNvbnN0IGFsdENuZCA9ICEhTU9DRWxlbWVudCh0YXJnZXQsIHNlbGVjdG9yT3JFbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I/LihzZWxlY3Rvck9yRWxlbWVudCkgIT0gbnVsbCB8fCBlbGVtZW50Py5tYXRjaGVzPy4oc2VsZWN0b3JPckVsZW1lbnQpIHx8IGFsdENuZDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHNlbGVjdG9yT3JFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiBoYXNQYXJlbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpIHx8IGZhbHNlO1xuXHRcdFx0ZWxzZSByZXR1cm4gaGFzUGFyZW50KHNlbGVjdG9yT3JFbGVtZW50LCBlbGVtZW50KSB8fCBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvWm9vbS50c1xudmFyIGdldFpvb20gPSAoKSA9PiB7XG5cdGlmIChcImN1cnJlbnRDU1Nab29tXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdHJldHVybiBwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zY2FsaW5nXCIpIHx8IFwiMVwiKSB8fCAxO1xufTtcbnZhciB6b29tVmFsdWVzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xudmFyIHpvb21WYWx1ZXMgPSBnbG9iYWxUaGlzW3pvb21WYWx1ZXNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB6b29tT2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gem9vbVZhbHVlcy5nZXRPckluc2VydENvbXB1dGVkKGVsZW1lbnQsICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiLnVpLW9yaWVudGJveFwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCIudWktb3JpZW50Ym94XCIpIHx8IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYgKGNvbnRhaW5lcj8uem9vbSkgcmV0dXJuIGNvbnRhaW5lcj8uem9vbSB8fCAxO1xuXHRcdGlmIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgcmV0dXJuIGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdH0pO1xufTtcbnZhciBjaGFuZ2Vab29tID0gKHNjYWxlID0gMSkgPT4ge1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNjYWxpbmdcIiwgc2NhbGUpO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzY2FsaW5nXCIsIHtcblx0XHRkZXRhaWw6IHsgem9vbTogc2NhbGUgfSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpO1xuXHRyZXR1cm4gc2NhbGU7XG59O1xudmFyIGZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gIT0gbnVsbCA/IDEgOiB6b29tT2YoZWxlbWVudCkpIHx8IDE7XG59O1xudmFyIHVuZml4ZWRDbGllbnRab29tID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSA9PSBudWxsID8gMSA6IGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tKSB8fCAxO1xufTtcbnZhciBvcmllbnRPZiA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IChlbGVtZW50Py5tYXRjaGVzPy4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpID8gZWxlbWVudCA6IG51bGwpIHx8IGVsZW1lbnQ/LmNsb3Nlc3Q/LihcIltvcmllbnRdLCBbZGF0YS1taXhpbj1cXFwidWktb3JpZW50Ym94XFxcIl1cIikgfHwgZWxlbWVudDtcblx0aWYgKGNvbnRhaW5lcj8uaGFzQXR0cmlidXRlPy4oXCJvcmllbnRcIikpIHJldHVybiBwYXJzZUludChjb250YWluZXI/LmdldEF0dHJpYnV0ZT8uKFwib3JpZW50XCIpIHx8IFwiMFwiKSB8fCAwO1xuXHRpZiAoY29udGFpbmVyPy5vcmllbnQgIT0gbnVsbCAmJiBOdW1iZXIuaXNGaW5pdGUoTnVtYmVyKGNvbnRhaW5lci5vcmllbnQpKSkgcmV0dXJuIE51bWJlcihjb250YWluZXIub3JpZW50KSB8fCAwO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGNvbnRhaW5lcj8uc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcIi0tb3JpZW50XCIpIHx8ICh0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSA9PT0gXCJmdW5jdGlvblwiICYmIGNvbnRhaW5lciA/IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1vcmllbnRcIikgOiBcIlwiKSB8fCBcIlwiO1xuXHRcdGNvbnN0IG4gPSBwYXJzZUludChTdHJpbmcocmF3KS50cmltKCksIDEwKTtcblx0XHRpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbjtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gMDtcbn07XG52YXIgZ2V0Qm91bmRpbmdPcmllbnRSZWN0ID0gKGVsZW1lbnQsIG9yaWVudCA9IG51bGwpID0+IHtcblx0Y29uc3Qgem9vbSA9IHVuZml4ZWRDbGllbnRab29tKGVsZW1lbnQpIHx8IDE7XG5cdGNvbnN0IGJveCA9IGVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XG5cdGNvbnN0IG5ieCA9IHtcblx0XHRsZWZ0OiBib3g/LmxlZnQgLyB6b29tLFxuXHRcdHJpZ2h0OiBib3g/LnJpZ2h0IC8gem9vbSxcblx0XHR0b3A6IGJveD8udG9wIC8gem9vbSxcblx0XHRib3R0b206IGJveD8uYm90dG9tIC8gem9vbSxcblx0XHR3aWR0aDogYm94Py53aWR0aCAvIHpvb20sXG5cdFx0aGVpZ2h0OiBib3g/LmhlaWdodCAvIHpvb21cblx0fTtcblx0Y29uc3Qgb3JfaSA9IG9yaWVudCA/PyAob3JpZW50T2YoZWxlbWVudCkgfHwgMCk7XG5cdGNvbnN0IHZ2ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGw7XG5cdGNvbnN0IHNpemUgPSBbKCh2dj8ud2lkdGggPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRXaWR0aCA/PyB3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMSkgLyB6b29tLCAoKHZ2Py5oZWlnaHQgPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRIZWlnaHQgPz8gd2luZG93LmlubmVySGVpZ2h0KSB8fCAxKSAvIHpvb21dO1xuXHRjb25zdCBbbGVmdF8sIHRvcF9dID0gY3Z0X2NzX3RvX29zKFtuYngubGVmdCwgbmJ4LnRvcF0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbcmlnaHRfLCBib3R0b21fXSA9IGN2dF9jc190b19vcyhbbmJ4LnJpZ2h0LCBuYnguYm90dG9tXSwgc2l6ZSwgb3JfaSk7XG5cdGNvbnN0IFtsZWZ0LCByaWdodF0gPSBvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gW2xlZnRfLCByaWdodF9dIDogW3JpZ2h0XywgbGVmdF9dO1xuXHRjb25zdCBbdG9wLCBib3R0b21dID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMSA/IFt0b3BfLCBib3R0b21fXSA6IFtib3R0b21fLCB0b3BfXTtcblx0Y29uc3QgW3dpZHRoLCBoZWlnaHRdID0gb3JfaSAlIDIgPyBbbmJ4LmhlaWdodCwgbmJ4LndpZHRoXSA6IFtuYngud2lkdGgsIG5ieC5oZWlnaHRdO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aCxcblx0XHRoZWlnaHRcblx0fTtcbn07XG52YXIgYmJ3ID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBiYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtib3JkZXJCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoIDogZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xudmFyIGNidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQgOiBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBjYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQ7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9WaWV3cG9ydC50c1xudmFyIHJ1bldoZW5JZGxlID0gKGNiLCB0aW1lb3V0ID0gMTAwKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2soY2IsIHsgdGltZW91dCB9KTtcblx0cmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gY2Ioe1xuXHRcdGRpZFRpbWVvdXQ6IGZhbHNlLFxuXHRcdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcblx0fSksIDApO1xufTtcbnZhciBnZXRBdmFpbFNpemUgPSAoKSA9PiB7XG5cdGNvbnN0IGwgPSB0eXBlb2YgbWF0Y2hNZWRpYSAhPSBcInVuZGVmaW5lZFwiID8gbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyA6IGZhbHNlO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCB2dkJsb2NrID0gdnYgPyB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IGAke3Z2LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3Z2LmhlaWdodH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IGAke3Z2Lm9mZnNldExlZnR9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtdG9wXCI6IGAke3Z2Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh2di5zY2FsZSA/PyAxKVxuXHR9IDoge1xuXHRcdFwiLS12di13aWR0aFwiOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gYCR7d2luZG93LmlubmVyV2lkdGh9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0Y29uc3QgYXcgPSBzY3JlZW4/LmF2YWlsV2lkdGggKyBcInB4XCI7XG5cdFx0Y29uc3QgYWggPSBzY3JlZW4/LmF2YWlsSGVpZ2h0ICsgXCJweFwiO1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IE1hdGgubWluKHNjcmVlbj8ud2lkdGgsIHNjcmVlbj8uYXZhaWxXaWR0aCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmhlaWdodCwgc2NyZWVuPy5hdmFpbEhlaWdodCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tYXZhaWwtd2lkdGhcIjogbCA/IGFoIDogYXcsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGwgPyBhdyA6IGFoLFxuXHRcdFx0XCItLXZpZXctaGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uYXZhaWxIZWlnaHQsIHdpbmRvdz8uaW5uZXJIZWlnaHQpICsgXCJweFwiLFxuXHRcdFx0XCItLXBpeGVsLXJhdGlvXCI6IFN0cmluZyhkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLFxuXHRcdFx0Li4udnZCbG9ja1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtd2lkdGhcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXZpZXctaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXBpeGVsLXJhdGlvXCI6IFwiMVwiLFxuXHRcdC4uLnZ2QmxvY2tcblx0fTtcbn07XG52YXIgYXZhaWxTaXplID0gZ2V0QXZhaWxTaXplKCk7XG52YXIgY2xhc3NlcyA9IFtbXCI6cm9vdCwgOmhvc3QsIDpzY29wZVwiLCBhdmFpbFNpemVdXTtcbnZhciBvcmllbnRhdGlvbk51bWJlck1hcCA9IHtcblx0XCJwb3J0cmFpdC1wcmltYXJ5XCI6IDAsXG5cdFwibGFuZHNjYXBlLXByaW1hcnlcIjogMSxcblx0XCJwb3J0cmFpdC1zZWNvbmRhcnlcIjogMixcblx0XCJsYW5kc2NhcGUtc2Vjb25kYXJ5XCI6IDNcbn07XG52YXIgdXBkYXRlVlAgPSAoZXYpID0+IHtcblx0Y29uc3QgcnVsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0T2JqZWN0LmFzc2lnbihhdmFpbFNpemUsIGdldEF2YWlsU2l6ZSgpKTtcblx0T2JqZWN0LmVudHJpZXMoYXZhaWxTaXplKS5mb3JFYWNoKChbcHJvcE5hbWUsIHByb3BWYWx1ZV0pID0+IHtcblx0XHRjb25zdCBleGlzdHMgPSBydWxlPy5zdHlsZT8uZ2V0UHJvcGVydHlWYWx1ZShwcm9wTmFtZSk7XG5cdFx0aWYgKCFleGlzdHMgfHwgZXhpc3RzICE9IHByb3BWYWx1ZSkgcnVsZT8uc3R5bGU/LnNldFByb3BlcnR5Py4ocHJvcE5hbWUsIHByb3BWYWx1ZSB8fCBcIlwiLCBcIlwiKTtcblx0fSk7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50YXRpb24tc2Vjb25kYXJ5XCIsIHNjcmVlbj8ub3JpZW50YXRpb24/LnR5cGU/LmVuZHNXaXRoPy4oXCJzZWNvbmRhcnlcIikgPyBcIjFcIiA6IFwiMFwiKTtcbn07XG52YXIgZ2V0Q29ycmVjdE9yaWVudGF0aW9uID0gKCkgPT4ge1xuXHRsZXQgb3JpZW50YXRpb25UeXBlID0gc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZSB8fCBcInBvcnRyYWl0LXByaW1hcnlcIjtcblx0aWYgKCFnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIoKGRpc3BsYXktbW9kZTogZnVsbHNjcmVlbikgb3IgKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSkgb3IgKGRpc3BsYXktbW9kZTogd2luZG93LWNvbnRyb2xzLW92ZXJsYXkpKVwiKS5tYXRjaGVzKSB7XG5cdFx0aWYgKG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcImxhbmRzY2FwZVwiLCBcInBvcnRyYWl0XCIpO1xuXHRcdGVsc2UgaWYgKG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIikubWF0Y2hlcykgb3JpZW50YXRpb25UeXBlID0gb3JpZW50YXRpb25UeXBlLnJlcGxhY2UoXCJwb3J0cmFpdFwiLCBcImxhbmRzY2FwZVwiKTtcblx0fVxuXHRyZXR1cm4gb3JpZW50YXRpb25UeXBlO1xufTtcbnZhciBwYXNzaXZlT3B0cyQxID0geyBwYXNzaXZlOiB0cnVlIH07XG52YXIgd2hlbkFueVNjcmVlbkNoYW5nZXMgPSAoY2IpID0+IHtcblx0bGV0IHRpY2tpbmcgPSBmYWxzZTtcblx0Y29uc3QgdXBkYXRlID0gKCkgPT4ge1xuXHRcdGlmICghdGlja2luZykge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRcdFx0dXBkYXRlVlAoKTtcblx0XHRcdFx0Y2IoKTtcblx0XHRcdFx0dGlja2luZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0XHR0aWNraW5nID0gdHJ1ZTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBbXTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG5hdmlnYXRvcj8udmlydHVhbEtleWJvYXJkLCBcImdlb21ldHJ5Y2hhbmdlXCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93Py52aXN1YWxWaWV3cG9ydCwgXCJzY3JvbGxcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInJlc2l6ZVwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHNjcmVlbj8ub3JpZW50YXRpb24sIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQsIFwiZnVsbHNjcmVlbmNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIiksIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKSwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVwZGF0ZSgpO1xuXHRydW5XaGVuSWRsZSgoKSA9PiB1cGRhdGUoKSwgMTAwKTtcblx0cmV0dXJuICgpID0+IHVuc3Vic2NyaWJlcnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xufTtcbnZhciBmaXhPcmllbnRUb1NjcmVlbiA9IChlbGVtZW50KSA9PiB7XG5cdGlmICghZWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucz8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKSkge1xuXHRcdGVsZW1lbnQ/LmNsYXNzTGlzdD8uYWRkPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpO1xuXHRcdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcygoKSA9PiB7XG5cdFx0XHRjb25zdCBuZXh0ID0gb3JpZW50YXRpb25OdW1iZXJNYXA/LltnZXRDb3JyZWN0T3JpZW50YXRpb24oKV0gPz8gMDtcblx0XHRcdGVsZW1lbnQub3JpZW50ID0gbmV4dDtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlPy4oXCJvcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHRcdGVsZW1lbnQuc3R5bGU/LnNldFByb3BlcnR5Py4oXCItLW9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvTWVhc3VyZS50c1xudmFyIGN0eCA9IG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIGluaXRUZXh0U3R5bGUgPSAoZWxlbWVudCwgY3R4KSA9PiB7XG5cdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBcIlwiKTtcblx0aWYgKGN0eCAmJiBzdHlsZSkge1xuXHRcdGNvbnN0IGZvbnRXZWlnaHQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC13ZWlnaHRcIikgfHwgXCJub3JtYWxcIjtcblx0XHRjb25zdCBmb250U2l6ZSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikgfHwgXCIxNnB4XCI7XG5cdFx0Y29uc3QgZm9udEZhbWlseSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWZhbWlseVwiKSB8fCBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRcdGNvbnN0IGZvbnRTdHJldGNoID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc3RyZXRjaFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFN0cmV0Y2ggPSBmb250U3RyZXRjaC5pbmNsdWRlcyhcIiVcIikgPyBcIm5vcm1hbFwiIDogZm9udFN0cmV0Y2g7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmxldHRlclNwYWNpbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibGV0dGVyLXNwYWNpbmdcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udEtlcm5pbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1rZXJuaW5nXCIpIHx8IFwiYXV0b1wiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250VmFyaWFudENhcHMgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC12YXJpYW50LWNhcHNcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udCA9IGAke2ZvbnRXZWlnaHR9ICR7Zm9udFNpemV9ICR7Zm9udEZhbWlseX1gO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cbn07XG52YXIgbWVhc3VyZVRleHQgPSAodGV4dCwgZWxlbWVudCkgPT4ge1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShlbGVtZW50LCBjdHgpO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cblx0cmV0dXJuIHsgd2lkdGg6IG51bGwgfTtcbn07XG52YXIgbWVhc3VyZUlucHV0SW5Gb2N1cyA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQudmFsdWUuc2xpY2UoMCwgaW5wdXQuc2VsZWN0aW9uRW5kIHx8IDApO1xuXHRyZXR1cm4gbWVhc3VyZVRleHQodGV4dCwgaW5wdXQpO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbiA9IChpbnB1dCwgcG9pbnQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0Py52YWx1ZSB8fCBcIlwiO1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShpbnB1dCwgY3R4KTtcblx0XHRsZXQgY3VycmVudFdpZHRoID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1cnJlbnRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0LnNsaWNlKDAsIGkpKT8ud2lkdGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoID09IG51bGwpIHJldHVybiB0ZXh0Lmxlbmd0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggIT0gbnVsbCAmJiBjdXJyZW50V2lkdGggPj0gcG9pbnRbMF0pIHJldHVybiBNYXRoLm1heChpIC0gMSwgMCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0Lmxlbmd0aDtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50ID0gKGlucHV0LCBjbGllbnQpID0+IHtcblx0Y29uc3QgYm94ID0gaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IHBvaW50ID0gW2NsaWVudFswXSAtIGJveC5sZWZ0IC8gdW5maXhlZENsaWVudFpvb20oKSwgY2xpZW50WzFdIC0gYm94LnRvcCAvIHVuZml4ZWRDbGllbnRab29tKCldO1xuXHRyZXR1cm4gY29tcHV0ZUNhcmV0UG9zaXRpb24oaW5wdXQsIHBvaW50KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9MYXVuY2hlckdyaWQudHNcbnZhciByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCA9IChlbCwgbGF5b3V0T3ZlcnJpZGUpID0+IHtcblx0Y29uc3QgYyA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1jb2x1bW5zXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgciA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1yb3dzXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgYmFzZSA9IG5vcm1hbGl6ZUdyaWRMYXlvdXQobGF5b3V0T3ZlcnJpZGUgPz8gWzQsIDhdKTtcblx0cmV0dXJuIFtOdW1iZXIuaXNGaW5pdGUoYykgJiYgYyA+IDAgPyBjIDogYmFzZVswXSwgTnVtYmVyLmlzRmluaXRlKHIpICYmIHIgPiAwID8gciA6IGJhc2VbMV1dO1xufTtcbnZhciByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQgPSAoZ3JpZFN5c3RlbSwgY2xpZW50UG9pbnQsIGFyZ3MsIG1vZGUgPSBcImZsb29yXCIpID0+IHtcblx0aWYgKCFncmlkU3lzdGVtKSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCByZWN0ID0gZ3JpZFN5c3RlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRpZiAoIXJlY3QpIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IGxheW91dCA9IHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50KGdyaWRTeXN0ZW0sIGFyZ3M/LmxheW91dCk7XG5cdGNvbnN0IG9yaWVudCA9IG9yaWVudE9mKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBjcyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBwbCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdMZWZ0KSB8fCAwO1xuXHRjb25zdCBwdCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdUb3ApIHx8IDA7XG5cdGNvbnN0IHByID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1JpZ2h0KSB8fCAwO1xuXHRjb25zdCBwYiA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdCb3R0b20pIHx8IDA7XG5cdGNvbnN0IGNvbnRlbnRXID0gTWF0aC5tYXgoMSwgKHJlY3Qud2lkdGggfHwgZ3JpZFN5c3RlbS5jbGllbnRXaWR0aCB8fCAxKSAtIHBsIC0gcHIpO1xuXHRjb25zdCBjb250ZW50SCA9IE1hdGgubWF4KDEsIChyZWN0LmhlaWdodCB8fCBncmlkU3lzdGVtLmNsaWVudEhlaWdodCB8fCAxKSAtIHB0IC0gcGIpO1xuXHRjb25zdCBjc0Nvb3JkID0gWyhjbGllbnRQb2ludD8uWzBdIHx8IDApIC0gcmVjdC5sZWZ0IC0gcGwsIChjbGllbnRQb2ludD8uWzFdIHx8IDApIC0gcmVjdC50b3AgLSBwdF07XG5cdHJldHVybiByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwoY3NDb29yZCwgW2NvbnRlbnRXLCBjb250ZW50SF0sIGxheW91dCwgb3JpZW50LCB7XG5cdFx0bW9kZSxcblx0XHRyZWRpcmVjdDoge1xuXHRcdFx0aXRlbTogYXJncz8uaXRlbSxcblx0XHRcdGxpc3Q6IGFyZ3M/Lmxpc3QsXG5cdFx0XHRpdGVtczogYXJncz8uaXRlbXNcblx0XHR9XG5cdH0pO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL0FuaW1hdGlvbi50c1xudmFyIGFuaW1hdGVTaG93ID0gYXN5bmMgKHRhcmdldCkgPT4ge1xuXHRjb25zdCBhbmltYXRpb25Eb25lID0gKCkgPT4ge1xuXHRcdGlmICghdGFyZ2V0Py5oYXNBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpKSB7XG5cdFx0XHR0YXJnZXQ/LnJlbW92ZUF0dHJpYnV0ZT8uKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKTtcblx0XHRcdHRhcmdldD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcInUyLWFwcGVhclwiLCB7XG5cdFx0XHRcdGRldGFpbDoge30sXG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdH07XG5cdGlmICghdGFyZ2V0Py5oYXNBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpICYmIHRhcmdldD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcInUyLWJlZm9yZS1zaG93XCIsIHtcblx0XHRkZXRhaWw6IHt9LFxuXHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHR9KSkpIHtcblx0XHRpZiAoIW1hdGNoTWVkaWEoXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiKS5tYXRjaGVzICYmICF0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKSAmJiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtaW5zdGFudFwiKSAmJiB0YXJnZXQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikgPT0gbnVsbCkgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIiwgXCJcIik7XG5cdFx0aWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpICYmIHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSA9PSBudWxsKSB7XG5cdFx0XHRjb25zdCBhbmltYXRlID0gdGFyZ2V0LmFuaW1hdGUoW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogMCxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRkaXNwbGF5OiBcIm5vbmVcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogLjAxLFxuXHRcdFx0XHRcdFwiLS1vcGFjaXR5XCI6IDAsXG5cdFx0XHRcdFx0XCItLXNjYWxlXCI6IC44LFxuXHRcdFx0XHRcdGRpc3BsYXk6IFwibm9uZVwiLFxuXHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdFx0b2Zmc2V0OiAxLFxuXHRcdFx0XHRcdFwiLS1vcGFjaXR5XCI6IDEsXG5cdFx0XHRcdFx0XCItLXNjYWxlXCI6IDEsXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJyZXZlcnQtbGF5ZXJcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcInJldmVydC1sYXllclwiXG5cdFx0XHRcdH1cblx0XHRcdF0sIHtcblx0XHRcdFx0ZHVyYXRpb246IGlzTW9iaWxlKCkgPyAxMDAgOiA4MCxcblx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRkZWxheTogMFxuXHRcdFx0fSk7XG5cdFx0XHRsZXQgZG9uZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgZW5kQW5pbWF0aW9uID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoZG9uZSkgcmV0dXJuO1xuXHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRzPy5mb3JFYWNoPy4oKGV2ZW50KSA9PiBldmVudD8uKCkpO1xuXHRcdFx0XHRhbmltYXRlLmN1cnJlbnRUaW1lID0gMTtcblx0XHRcdFx0YW5pbWF0ZS5maW5pc2goKTtcblx0XHRcdFx0YW5pbWF0aW9uRG9uZT8uKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZXZlbnRzID0gYWRkRXZlbnRzKHRhcmdldCwge1xuXHRcdFx0XHRcInUyLWJlZm9yZS1oaWRlXCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFwidTItYmVmb3JlLXNob3dcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XVxuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBhbmltYXRlLmZpbmlzaGVkO1xuXHRcdFx0ZW5kQW5pbWF0aW9uPy4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgeyByZXNvbHZlLCByZWplY3QsIHByb21pc2UgfSA9IFByb21pc2Uud2l0aFJlc29sdmVycygpO1xuXHRcdFx0Y29uc3QgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpO1xuXHRcdFx0bGV0IGRvbmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGVuZEFuaW1hdGlvbiA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdGV2ZW50cz8uZm9yRWFjaD8uKChldmVudCkgPT4gZXZlbnQ/LigpKTtcblx0XHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKTtcblx0XHRcdFx0cmVzb2x2ZShwZXJmb3JtYW5jZS5ub3coKSk7XG5cdFx0XHRcdGFuaW1hdGlvbkRvbmU/LigpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGV2ZW50cyA9IGFkZEV2ZW50cyh0YXJnZXQsIHtcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtaGlkZVwiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRcInUyLWJlZm9yZS1zaG93XCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV1cblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgcHJvbWlzZTtcblx0XHRcdGVuZEFuaW1hdGlvbj8uKCk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGFuaW1hdGVIaWRlID0gYXN5bmMgKHRhcmdldCkgPT4ge1xuXHRjb25zdCBhbmltYXRpb25Eb25lID0gKCkgPT4ge1xuXHRcdGlmICh0YXJnZXQ/Lmhhc0F0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikpIHtcblx0XHRcdHRhcmdldD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpO1xuXHRcdFx0dGFyZ2V0Py5kaXNwYXRjaEV2ZW50Py4obmV3IEN1c3RvbUV2ZW50KFwidTItaGlkZGVuXCIsIHtcblx0XHRcdFx0ZGV0YWlsOiB7fSxcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fTtcblx0aWYgKHRhcmdldD8uaGFzQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSAmJiB0YXJnZXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJ1Mi1iZWZvcmUtaGlkZVwiLCB7XG5cdFx0ZGV0YWlsOiB7fSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpKSB7XG5cdFx0aWYgKCFtYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIikubWF0Y2hlcyAmJiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIikgJiYgIXRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWluc3RhbnRcIikpIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIsIFwiXCIpO1xuXHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKSkge1xuXHRcdFx0Y29uc3QgYW5pbWF0ZSA9IHRhcmdldC5hbmltYXRlKFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IDAsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJub25lXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IC45OSxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogMSxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRkaXNwbGF5OiBcIm5vbmVcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9XG5cdFx0XHRdLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMjAsXG5cdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0ZGVsYXk6IDBcblx0XHRcdH0pO1xuXHRcdFx0bGV0IGRvbmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGVuZEFuaW1hdGlvbiA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdGV2ZW50cz8uZm9yRWFjaD8uKChldmVudCkgPT4gZXZlbnQ/LigpKTtcblx0XHRcdFx0YW5pbWF0ZS5jdXJyZW50VGltZSA9IDE7XG5cdFx0XHRcdGFuaW1hdGUuZmluaXNoKCk7XG5cdFx0XHRcdGFuaW1hdGlvbkRvbmU/LigpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGV2ZW50cyA9IGFkZEV2ZW50cyh0YXJnZXQsIHsgXCJ1Mi1iZWZvcmUtc2hvd1wiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdH1dIH0pO1xuXHRcdFx0YXdhaXQgYW5pbWF0ZS5maW5pc2hlZDtcblx0XHRcdGVuZEFuaW1hdGlvbj8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHsgcmVzb2x2ZSwgcmVqZWN0LCBwcm9taXNlIH0gPSBQcm9taXNlLndpdGhSZXNvbHZlcnMoKTtcblx0XHRcdGNvbnN0IHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNvbHZlKTtcblx0XHRcdGxldCBkb25lID0gZmFsc2U7XG5cdFx0XHRjb25zdCBlbmRBbmltYXRpb24gPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChkb25lKSByZXR1cm47XG5cdFx0XHRcdGRvbmUgPSB0cnVlO1xuXHRcdFx0XHRldmVudHM/LmZvckVhY2g/LigoZXZlbnQpID0+IGV2ZW50Py4oKSk7XG5cdFx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSk7XG5cdFx0XHRcdHJlc29sdmUocGVyZm9ybWFuY2Uubm93KCkpO1xuXHRcdFx0XHRhbmltYXRpb25Eb25lPy4oKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBldmVudHMgPSBhZGRFdmVudHModGFyZ2V0LCB7XG5cdFx0XHRcdFwidTItYmVmb3JlLWhpZGVcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtc2hvd1wiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dXG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IHByb21pc2U7XG5cdFx0XHRlbmRBbmltYXRpb24/LigpO1xuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL09ic2VydmVyLnRzXG52YXIgb25Cb3JkZXJPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkJvcmRlck9ic2VydmVcIik7XG52YXIgb25Cb3JkZXJPYnNlcnZlJDEgPSBnbG9iYWxUaGlzW29uQm9yZGVyT2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9uQ29udGVudE9ic2VydmVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQ29udGVudE9ic2VydmVcIik7XG52YXIgb25Db250ZW50T2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkNvbnRlbnRPYnNlcnZlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdW53cmFwRnJvbVF1ZXJ5ID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5jdXJyZW50ID09IFwib2JqZWN0XCIpIGVsZW1lbnQgPSBlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQ/LmN1cnJlbnQgPz8gKHR5cGVvZiBlbGVtZW50Py5zZWxmID09IFwib2JqZWN0XCIgPyBlbGVtZW50Py5zZWxmIDogbnVsbCkgPz8gZWxlbWVudDtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIG9ic2VydmVDb250ZW50Qm94ID0gKGVsZW1lbnQsIGNiKSA9PiB7XG5cdGlmICghb25Db250ZW50T2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihjb250ZW50Qm94U2l6ZSwgb2JzZXJ2ZXIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYj8uKHtcblx0XHRcdGlubGluZVNpemU6IGVsZW1lbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRibG9ja1NpemU6IGVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdG9uQ29udGVudE9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxuXHRvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5wdXNoPy4oY2IpO1xuXHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUJvcmRlckJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQm9yZGVyT2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5ib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGJvcmRlckJveFNpemUgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoYm9yZGVyQm94U2l6ZSkgY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYj8uKGJvcmRlckJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50Lm9mZnNldEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkJvcmRlck9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiYm9yZGVyLWJveFwiIH0pO1xuXHR9XG5cdG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LmluZGV4T2YoY2IpIHx8IC0xLCAxKSB9O1xufTtcbnZhciBvYnNlcnZlQXR0cmlidXRlID0gKGVsZW1lbnQsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5zZWxlY3RvciA9PSBcInN0cmluZ1wiKSByZXR1cm4gb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IoZWxlbWVudCwgZWxlbWVudD8uc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldCgoYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXSkubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XVxuXHR9KTtcblx0YXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IGNiKHtcblx0XHR0YXJnZXQ6IGVsZW1lbnQsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdG9sZFZhbHVlOiBlbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSk7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IgPSAoZWxlbWVudCwgc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoWy4uLmF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV1dLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRjb25zdCBhZGRlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGFkZGVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBBcnJheS5mcm9tKGVsPy5xdWVyeVNlbGVjdG9yQWxsPy4oc2VsZWN0b3IpIHx8IFtdKSkpO1xuXHRcdFx0cmVtb3ZlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBBcnJheS5mcm9tKGVsPy5xdWVyeVNlbGVjdG9yQWxsPy4oc2VsZWN0b3IpIHx8IFtdKSkpO1xuXHRcdFx0Wy4uLm5ldyBTZXQoYWRkZWROb2RlcyldLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzPy4oc2VsZWN0b3IpKT8ubWFwPy4oKHRhcmdldCkgPT4ge1xuXHRcdFx0XHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuXHRcdFx0XHRcdGNiKHtcblx0XHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHRcdFx0XHRcdH0sIG9ic2VydmVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKG11dGF0aW9uLnRhcmdldD8ubWF0Y2hlcz8uKHNlbGVjdG9yKSAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlXG5cdH0pO1xuXHRbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0ubWFwKCh0YXJnZXQpID0+IGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSkpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yID0gXCIqXCIsIGNiID0gKG11dCwgb2JzKSA9PiB7fSkgPT4ge1xuXHRjb25zdCB1bndyYXBOb2Rlc0J5U2VsZWN0b3IgPSAobm9kZXMpID0+IHtcblx0XHRjb25zdCAkbm9kZXMgPSBBcnJheS5mcm9tKG5vZGVzIHx8IFtdKSB8fCBbXTtcblx0XHQkbm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gQXJyYXkuZnJvbShlbD8ucXVlcnlTZWxlY3RvckFsbD8uKHNlbGVjdG9yKSB8fCBbXSkpKTtcblx0XHRyZXR1cm4gWy4uLkFycmF5LmZyb20obmV3IFNldCgkbm9kZXMpLnZhbHVlcygpKV0uZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXM/LihzZWxlY3RvcikpO1xuXHR9O1xuXHRsZXQgb2JSZWYgPSBudWxsO1xuXHRjb25zdCBoYW5kbGVNdXRhdGlvbiA9IChtdXRhdGlvbikgPT4ge1xuXHRcdGNvbnN0IG9ic2VydmVyID0gb2JSZWY/LmRlcmVmPy4oKTtcblx0XHRjb25zdCBhZGRlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuXHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuXHRcdGlmIChhZGRlZE5vZGVzLmxlbmd0aCA+IDAgfHwgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdFx0dHlwZTogbXV0YXRpb24udHlwZSxcblx0XHRcdHRhcmdldDogbXV0YXRpb24udGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IG11dGF0aW9uLm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IG11dGF0aW9uLm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiBtdXRhdGlvbi5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzLFxuXHRcdFx0cmVtb3ZlZE5vZGVzXG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlT3V0Q29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUZvY3VzQ2xpY2sgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBmYWN0b3JzID0ge1xuXHRcdHBhc3NpdmU6IHRydWUsXG5cdFx0Y2FwdHVyZTogZmFsc2Vcblx0fTtcblx0aWYgKHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpICYmIHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsZWN0b3I/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmZvY3VzXCIpICYmIHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiBzZWxlY3Rvcj8uaW5jbHVkZXM/LihcIjpmb2N1cy12aXNpYmxlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSBoYW5kbGVNdXRhdGlvbihtdXRhdGlvbik7XG5cdH0pO1xuXHRvYlJlZiA9IG5ldyBXZWFrUmVmKG9ic2VydmVyKTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWVcblx0fSk7XG5cdGNvbnN0IHNlbGVjdGVkID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblx0aWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdGFkZGVkTm9kZXM6IHNlbGVjdGVkLFxuXHRcdHJlbW92ZWROb2RlczogW11cblx0fSwgb2JzZXJ2ZXIpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvQXBwZWFyLnRzXG52YXIgaW5pdFZpc2liaWxpdHkgPSBhc3luYyAoUk9PVCA9IGRvY3VtZW50LmJvZHkpID0+IHtcblx0b2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IoUk9PVCwgXCIqXCIsIFwiZGF0YS1oaWRkZW5cIiwgKG11dGF0aW9uLCBvYnNlcnZlcikgPT4ge1xuXHRcdGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09IFwiZGF0YS1oaWRkZW5cIikge1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0O1xuXHRcdFx0aWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhpZGRlblwiKSAhPT0gbXV0YXRpb24ub2xkVmFsdWUpIFByb21pc2U/LnRyeT8uKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhpZGRlblwiKSAhPSBudWxsID8gYW5pbWF0ZUhpZGUgOiBhbmltYXRlU2hvdywgdGFyZ2V0LCBvYnNlcnZlcik/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvU2hhcGUudHNcbnZhciBXYXZ5U2hhcGVkQ2lyY2xlID0gKHN0ZXBzID0gMTAwLCBhbXBsaXR1ZGUgPSAuMDUsIGZyZXEgPSA4KSA9PiB7XG5cdGNvbnN0IHBvaW50cyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzOyBpKyspIHBvaW50cy5wdXNoKGkgLyBzdGVwcyk7XG5cdGNvbnN0IGFuZ2xlID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoJHtzdGVwfXJhZCAqIHBpICogMilgO1xuXHR9O1xuXHRjb25zdCB2YXJpYW50ID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoY2FsYyhjb3MoY2FsYyh2YXIoLS1jbGlwLWZyZXEsIDgpICogJHthbmdsZShzdGVwKX0pKSAqIDAuNSArIDAuNSkgKiB2YXIoLS1jbGlwLWFtcGxpdHVkZSwgMCkpYDtcblx0fTtcblx0Y29uc3QgZnVuYyA9IChzdGVwKSA9PiBbYGNhbGMoY2FsYygwLjUgKyBjYWxjKGNvcygke2FuZ2xlKHN0ZXApfSkgKiBjYWxjKDAuNSAtICR7dmFyaWFudChzdGVwKX0pKSkgKiB2YXIoLS1pY29uLXNpemUsIDEwMCUpKWAsIGBjYWxjKGNhbGMoMC41ICsgY2FsYyhzaW4oJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgXTtcblx0cmV0dXJuIHtcblx0XHRcIi0tY2xpcC1hbXBsaXR1ZGVcIjogYW1wbGl0dWRlLFxuXHRcdFwiLS1jbGlwLWZyZXFcIjogZnJlcSxcblx0XHRcIi0tY2xpcC1wYXRoXCI6IGBwb2x5Z29uKCR7cG9pbnRzLm1hcCgoc3RlcCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZ1bmMoc3RlcCkuam9pbihcIiBcIik7XG5cdFx0fSkuam9pbihcIiwgXCIpfSlgXG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vU3R5bGUudHNcbnZhciBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0ID0gKCkgPT4gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGdsb2JhbFRoaXMuQ1NTU3R5bGVTaGVldCA9PT0gXCJmdW5jdGlvblwiO1xudmFyIGNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudCA9IChjc3MpID0+IHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIgJiYgL0BpbXBvcnRcXGIvaS50ZXN0KGNzcyk7XG52YXIgT1dORVIgPSBcIkRPTVwiO1xudmFyIHN0eWxlRWxlbWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpIDogbnVsbDtcbmlmIChzdHlsZUVsZW1lbnQpIHtcblx0dHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oc3R5bGVFbGVtZW50KTtcblx0c3R5bGVFbGVtZW50LmRhdGFzZXQub3duZXIgPSBPV05FUjtcbn1cbnZhciBzZXRTdHlsZVVSTCA9IChiYXNlLCB1cmwsIGxheWVyID0gXCJcIikgPT4ge1xuXHRiYXNlWzBdW2Jhc2VbMV1dID0gYmFzZVsxXSA9PSBcImlubmVySFRNTFwiID8gYEBpbXBvcnQgdXJsKFwiJHt1cmx9XCIpICR7bGF5ZXIgJiYgdHlwZW9mIGxheWVyID09IFwic3RyaW5nXCIgPyBgbGF5ZXIoJHtsYXllcn0pYCA6IFwiXCJ9O2AgOiB1cmw7XG59O1xudmFyIHNldFN0eWxlUnVsZXMgPSAoY2xhc3NlcykgPT4ge1xuXHRyZXR1cm4gY2xhc3Nlcz8ubWFwPy4oKGFyZ3MpID0+IHNldFN0eWxlUnVsZSguLi5hcmdzKSk7XG59O1xudmFyIGdldFN0eWxlTGF5ZXIgPSAobGF5ZXJOYW1lLCBzaGVldCkgPT4ge1xuXHRzaGVldCB8fD0gc3R5bGVFbGVtZW50Py5zaGVldDtcblx0bGV0IGxheWVyUnVsZUluZGV4ID0gQXJyYXkuZnJvbShzaGVldD8uY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocnVsZSkgPT4gcnVsZSBpbnN0YW5jZW9mIENTU0xheWVyQmxvY2tSdWxlICYmIHJ1bGU/Lm5hbWUgPT09IGxheWVyTmFtZSk7XG5cdGxldCBsYXllclJ1bGU7XG5cdGlmIChsYXllclJ1bGVJbmRleCA9PT0gLTEgJiYgc2hlZXQpIGxheWVyUnVsZSA9IHNoZWV0Py5jc3NSdWxlcz8uW2xheWVyUnVsZUluZGV4ID0gc2hlZXQuaW5zZXJ0UnVsZShgQGxheWVyICR7bGF5ZXJOYW1lfSB7fWApXTtcblx0ZWxzZSBsYXllclJ1bGUgPSBzaGVldD8uY3NzUnVsZXM/LltsYXllclJ1bGVJbmRleF07XG5cdHJldHVybiBsYXllclJ1bGU7XG59O1xudmFyIHN0eWxlSWRDb3VudGVyID0gMDtcbnZhciBpc1NoYWRvd1Jvb3QgPSAodmFsdWUpID0+IHR5cGVvZiBTaGFkb3dSb290ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbnZhciBpc0RvY3VtZW50ID0gKHZhbHVlKSA9PiB0eXBlb2YgRG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBEb2N1bWVudDtcbnZhciBpc0VsZW1lbnQkMSA9ICh2YWx1ZSkgPT4gdHlwZW9mIEVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50O1xudmFyIGVzY2FwZUNTU0lkZW50aWZpZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIENTUy5lc2NhcGUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIENTUy5lc2NhcGUodmFsdWUpO1xuXHRyZXR1cm4gQXJyYXkuZnJvbSh2YWx1ZSkubWFwKChjaGFyKSA9PiBgXFxcXCR7Y2hhci5jb2RlUG9pbnRBdCgwKS50b1N0cmluZygxNil9IGApLmpvaW4oXCJcIik7XG59O1xudmFyIGNyZWF0ZVN0eWxlSWQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgY3J5cHRvICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjcnlwdG8ucmFuZG9tVVVJRCA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0cmV0dXJuIGB1eC0ke0RhdGUubm93KCkudG9TdHJpbmcoMzYpfS0keygrK3N0eWxlSWRDb3VudGVyKS50b1N0cmluZygzNil9YDtcbn07XG52YXIgam9pblNjb3BlZFNlbGVjdG9yID0gKHNjb3BlLCBzZWxlY3RvcikgPT4ge1xuXHRzZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKTtcblx0aWYgKCFzY29wZSkgcmV0dXJuIHNlbGVjdG9yO1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gc2NvcGU7XG5cdGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKFwiOjpcIikpIHJldHVybiBgJHtzY29wZX0ke3NlbGVjdG9yfWA7XG5cdHJldHVybiBgJHtzY29wZX0gJHtzZWxlY3Rvcn1gO1xufTtcbnZhciBmaW5kU3R5bGVSdWxlID0gKHNoZWV0LCBmdWxsU2VsZWN0b3IsIHNjb3BlLCBzZWxlY3RvcikgPT4ge1xuXHRjb25zdCBydWxlcyA9IEFycmF5LmZyb20oc2hlZXQ/LmNzc1J1bGVzIHx8IFtdKTtcblx0Y29uc3QgZXhwZWN0ZWQgPSBmdWxsU2VsZWN0b3IudHJpbSgpO1xuXHRjb25zdCByZXF1ZXN0ZWQgPSBzZWxlY3Rvci50cmltKCk7XG5cdHJldHVybiBydWxlcy5maW5kSW5kZXgoKHJ1bGUpID0+IHtcblx0XHRpZiAoIShydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlKSkgcmV0dXJuIGZhbHNlO1xuXHRcdGNvbnN0IGFjdHVhbCA9IHJ1bGUuc2VsZWN0b3JUZXh0Py50cmltPy4oKSA/PyBcIlwiO1xuXHRcdGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSByZXR1cm4gdHJ1ZTtcblx0XHRpZiAocmVxdWVzdGVkICYmIGFjdHVhbC5lbmRzV2l0aChyZXF1ZXN0ZWQpKSByZXR1cm4gYWN0dWFsLnNsaWNlKDAsIGFjdHVhbC5sZW5ndGggLSByZXF1ZXN0ZWQubGVuZ3RoKS50cmltKCkgPT09IHNjb3BlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59O1xudmFyIGdldFN0eWxlUnVsZSA9IChzZWxlY3Rvciwgc2hlZXQsIGxheWVyTmFtZSA9IFwidXgtcXVlcnlcIiwgYmFzaXMgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBpc1NoYWRvd1Jvb3QoYmFzaXMpIHx8IGlzRG9jdW1lbnQoYmFzaXMpID8gYmFzaXMgOiBiYXNpcz8uZ2V0Um9vdE5vZGU/LigpID8/ICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xuXHRjb25zdCBiYXNpc0VsZW1lbnQgPSBpc0VsZW1lbnQkMShiYXNpcykgPyBiYXNpcyA6IG51bGw7XG5cdGxldCBzY29wZSA9IFwiXCI7XG5cdGlmIChiYXNpc0VsZW1lbnQ/LmlkKSBzY29wZSA9IGAjJHtlc2NhcGVDU1NJZGVudGlmaWVyKGJhc2lzRWxlbWVudC5pZCl9YDtcblx0ZWxzZSBpZiAoYmFzaXNFbGVtZW50KSB7XG5cdFx0bGV0IHN0eWxlSWQgPSBiYXNpc0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZS1pZFwiKTtcblx0XHRpZiAoIXN0eWxlSWQpIHtcblx0XHRcdHN0eWxlSWQgPSBjcmVhdGVTdHlsZUlkKCk7XG5cdFx0XHRiYXNpc0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZS1pZFwiLCBzdHlsZUlkKTtcblx0XHR9XG5cdFx0c2NvcGUgPSBgW2RhdGEtc3R5bGUtaWQ9XCIke2VzY2FwZUNTU0lkZW50aWZpZXIoc3R5bGVJZCl9XCJdYDtcblx0fSBlbHNlIGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkpIHNjb3BlID0gXCI6aG9zdFwiO1xuXHRlbHNlIGlmIChpc0RvY3VtZW50KHJvb3QpKSBzY29wZSA9IFwiOnJvb3RcIjtcblx0bGV0IHN0eWxlRWxlbWVudCA9IG51bGw7XG5cdGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLXV4LXF1ZXJ5XVwiKTtcblx0XHRpZiAoIXN0eWxlRWxlbWVudCAmJiB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0XHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXV4LXF1ZXJ5XCIsIFwiXCIpO1xuXHRcdFx0cm9vdC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0fSBlbHNlIHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudEdsb2JhbCgpO1xuXHRzaGVldCB8fD0gc3R5bGVFbGVtZW50Py5zaGVldDtcblx0aWYgKCFzaGVldCkgcmV0dXJuO1xuXHRpZiAobGF5ZXJOYW1lKSByZXR1cm4gZ2V0U3R5bGVSdWxlKHNlbGVjdG9yLCBnZXRTdHlsZUxheWVyKGxheWVyTmFtZSwgc2hlZXQpLCBudWxsLCBiYXNpcyk7XG5cdGNvbnN0IGZ1bGxTZWxlY3RvciA9IGpvaW5TY29wZWRTZWxlY3RvcihzY29wZSwgc2VsZWN0b3IpO1xuXHRsZXQgcnVsZUlkID0gZmluZFN0eWxlUnVsZShzaGVldCwgZnVsbFNlbGVjdG9yLCBzY29wZSwgc2VsZWN0b3IpO1xuXHRpZiAocnVsZUlkID09PSAtMSkgcnVsZUlkID0gc2hlZXQuaW5zZXJ0UnVsZShgJHtmdWxsU2VsZWN0b3J9IHt9YCk7XG5cdHJldHVybiBzaGVldC5jc3NSdWxlcz8uW3J1bGVJZF07XG59O1xuZnVuY3Rpb24gc3R5bGVFbGVtZW50R2xvYmFsKCkge1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50ID8/IG51bGw7XG59XG52YXIgaGFzVHlwZWRPTSA9IHR5cGVvZiBDU1NTdHlsZVZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBDU1NVbml0VmFsdWUgIT09IFwidW5kZWZpbmVkXCI7XG52YXIgaXNTdHlsZVZhbHVlID0gKHZhbCkgPT4gaGFzVHlwZWRPTSAmJiB2YWwgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlO1xudmFyIGlzVW5pdFZhbHVlID0gKHZhbCkgPT4gaGFzVHlwZWRPTSAmJiB2YWwgaW5zdGFuY2VvZiBDU1NVbml0VmFsdWU7XG52YXIgc2V0UHJvcGVydHlJZk5vdEVxdWFsID0gKHN0eWxlUmVmLCBrZWJhYiwgdmFsdWUsIGltcG9ydGFuY2UgPSBcIlwiKSA9PiB7XG5cdGlmICghc3R5bGVSZWYgfHwgIWtlYmFiKSByZXR1cm47XG5cdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0aWYgKHN0eWxlUmVmLmdldFByb3BlcnR5VmFsdWUoa2ViYWIpICE9PSBcIlwiKSBzdHlsZVJlZi5yZW1vdmVQcm9wZXJ0eShrZWJhYik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdHlsZVJlZi5nZXRQcm9wZXJ0eVZhbHVlKGtlYmFiKSAhPT0gdmFsdWUpIHN0eWxlUmVmLnNldFByb3BlcnR5KGtlYmFiLCB2YWx1ZSwgaW1wb3J0YW5jZSk7XG59O1xudmFyIHNldFN0eWxlUHJvcGVydHlUeXBlZCA9IChlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0aWYgKCFlbGVtZW50IHx8ICFuYW1lKSByZXR1cm4gZWxlbWVudDtcblx0Y29uc3Qga2ViYWIgPSBjYW1lbFRvS2ViYWIobmFtZSk7XG5cdGNvbnN0IHN0eWxlUmVmID0gZWxlbWVudC5zdHlsZTtcblx0Y29uc3Qgc3R5bGVNYXBSZWYgPSBlbGVtZW50LmF0dHJpYnV0ZVN0eWxlTWFwID8/IGVsZW1lbnQuc3R5bGVNYXA7XG5cdGlmICghaGFzVHlwZWRPTSB8fCAhc3R5bGVNYXBSZWYpIHJldHVybiBzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2soZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UpO1xuXHRsZXQgdmFsID0gaGFzVmFsdWUodmFsdWUpICYmICEoaXNTdHlsZVZhbHVlKHZhbHVlKSB8fCBpc1VuaXRWYWx1ZSh2YWx1ZSkpID8gdmFsdWU/LnZhbHVlIDogdmFsdWU7XG5cdGlmICh2YWwgPT0gbnVsbCkge1xuXHRcdHN0eWxlTWFwUmVmLmRlbGV0ZT8uKGtlYmFiKTtcblx0XHRpZiAoc3R5bGVSZWYpIHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIG51bGwsIGltcG9ydGFuY2UpO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cdGlmIChpc1N0eWxlVmFsdWUodmFsKSkge1xuXHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0aWYgKGlzVW5pdFZhbHVlKHZhbCkgJiYgaXNVbml0VmFsdWUob2xkKSkge1xuXHRcdFx0aWYgKG9sZC52YWx1ZSA9PT0gdmFsLnZhbHVlICYmIG9sZC51bml0ID09PSB2YWwudW5pdCkgcmV0dXJuIGVsZW1lbnQ7XG5cdFx0fSBlbHNlIGlmIChvbGQgPT09IHZhbCkgcmV0dXJuIGVsZW1lbnQ7XG5cdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCB2YWwpO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cdGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKSB7XG5cdFx0aWYgKENTUz8ubnVtYmVyICYmICFrZWJhYi5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IG5ld1ZhbCA9IENTUy5udW1iZXIodmFsKTtcblx0XHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0XHRpZiAoaXNVbml0VmFsdWUob2xkKSAmJiBvbGQudmFsdWUgPT09IG5ld1ZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gbmV3VmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCBuZXdWYWwpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIFN0cmluZyh2YWwpLCBpbXBvcnRhbmNlKTtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH1cblx0fVxuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhaXNTdHlsZVZhbHVlKHZhbCkpIHtcblx0XHRjb25zdCBtYXliZU51bSA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCk7XG5cdFx0aWYgKHR5cGVvZiBtYXliZU51bSA9PT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAha2ViYWIuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBuZXdWYWwgPSBDU1MubnVtYmVyKG1heWJlTnVtKTtcblx0XHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0XHRpZiAoaXNVbml0VmFsdWUob2xkKSAmJiBvbGQudmFsdWUgPT09IG5ld1ZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gbmV3VmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCBuZXdWYWwpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIHZhbCwgaW1wb3J0YW5jZSk7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIW5hbWUpIHJldHVybiBlbGVtZW50O1xuXHRjb25zdCBrZWJhYiA9IGNhbWVsVG9LZWJhYihuYW1lKTtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbGVtZW50LnN0eWxlO1xuXHRpZiAoIXN0eWxlUmVmKSByZXR1cm4gZWxlbWVudDtcblx0bGV0IHZhbCA9IGhhc1ZhbHVlKHZhbHVlKSAmJiAhKGlzU3R5bGVWYWx1ZSh2YWx1ZSkgfHwgaXNVbml0VmFsdWUodmFsdWUpKSA/IHZhbHVlPy52YWx1ZSA6IHZhbHVlO1xuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhaXNTdHlsZVZhbHVlKHZhbCkpIHZhbCA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCkgPz8gdmFsO1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBudWxsLCBpbXBvcnRhbmNlKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAoaXNTdHlsZVZhbHVlKHZhbCkpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0aWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcHJvbWlzZU9yRGlyZWN0ID0gKHByb21pc2UsIGNiKSA9PiB7XG5cdGlmICh0eXBlb2YgcHJvbWlzZT8udGhlbiA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBwcm9taXNlPy50aGVuPy4oY2IpO1xuXHRyZXR1cm4gY2IocHJvbWlzZSk7XG59O1xudmFyIGJsb2JVUkxNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBjYWNoZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZmV0Y2hBbmRDYWNoZSA9ICh1cmwpID0+IHtcblx0aWYgKCF1cmwpIHJldHVybiBudWxsO1xuXHRpZiAoY2FjaGVNYXAuaGFzKHVybCkpIHJldHVybiBjYWNoZU1hcC5nZXQodXJsKTtcblx0aWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGlmIChibG9iVVJMTWFwLmhhcyh1cmwpKSByZXR1cm4gYmxvYlVSTE1hcC5nZXQodXJsKTtcblx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh1cmwpO1xuXHRcdGJsb2JVUkxNYXAuc2V0KHVybCwgYnVybCk7XG5cdFx0Y2FjaGVNYXAuc2V0KGJ1cmwsIGJ1cmwpO1xuXHRcdHJldHVybiBidXJsO1xuXHR9XG5cdGlmIChVUkwuY2FuUGFyc2UodXJsKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuXHRcdGNvbnN0IHByb21pc2VkID0gZmV0Y2godXJsPy5yZXBsYWNlPy4oXCI/dXJsXCIsIFwiP3Jhd1wiKSwge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XG5cdFx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdGJsb2JVUkxNYXAuc2V0KGJsb2IsIGJ1cmwpO1xuXHRcdFx0Y2FjaGVNYXAuc2V0KHVybCwgYnVybCk7XG5cdFx0XHRjYWNoZU1hcC5zZXQoYnVybCwgYnVybCk7XG5cdFx0XHRyZXR1cm4gYnVybDtcblx0XHR9KTtcblx0XHRjYWNoZU1hcC5zZXQodXJsLCBwcm9taXNlZCk7XG5cdFx0cmV0dXJuIHByb21pc2VkO1xuXHR9XG5cdGlmICh0eXBlb2YgdXJsID09IFwic3RyaW5nXCIpIHtcblx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoW3VybF0sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXHRcdGNvbnN0IGJ1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdGJsb2JVUkxNYXAuc2V0KGJsb2IsIGJ1cmwpO1xuXHRcdGNhY2hlTWFwLnNldChidXJsLCBidXJsKTtcblx0XHRyZXR1cm4gYnVybDtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcbnZhciBjYWNoZUNvbnRlbnRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGNhY2hlQmxvYkNvbnRlbnRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBmZXRjaEFzSW5saW5lID0gKHVybCkgPT4ge1xuXHRpZiAoIXVybCkgcmV0dXJuIFwiXCI7XG5cdGlmIChjYWNoZUNvbnRlbnRNYXAuaGFzKHVybCkpIHJldHVybiBjYWNoZUNvbnRlbnRNYXAuZ2V0KHVybCkgPz8gXCJcIjtcblx0aWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGlmIChjYWNoZUJsb2JDb250ZW50TWFwLmhhcyh1cmwpKSByZXR1cm4gY2FjaGVCbG9iQ29udGVudE1hcC5nZXQodXJsKSA/PyBcIlwiO1xuXHRcdGNvbnN0IHByb21pc2VkID0gdXJsPy50ZXh0Py4oKT8udGhlbj8uKCh0ZXh0KSA9PiB7XG5cdFx0XHRjYWNoZUJsb2JDb250ZW50TWFwLnNldCh1cmwsIHRleHQpO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fSk7XG5cdFx0Y2FjaGVCbG9iQ29udGVudE1hcC5zZXQodXJsLCBwcm9taXNlZCk7XG5cdFx0cmV0dXJuIHByb21pc2VkO1xuXHR9XG5cdGlmIChVUkwuY2FuUGFyc2UodXJsKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuXHRcdGNvbnN0IHByb21pc2VkID0gZmV0Y2godXJsPy5yZXBsYWNlPy4oXCI/dXJsXCIsIFwiP3Jhd1wiKSwge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHRjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCwgdGV4dCk7XG5cdFx0XHRyZXR1cm4gdGV4dDtcblx0XHR9KTtcblx0XHRjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCwgcHJvbWlzZWQpO1xuXHRcdHJldHVybiBwcm9taXNlZDtcblx0fVxuXHRpZiAodHlwZW9mIHVybCA9PSBcInN0cmluZ1wiKSB7XG5cdFx0Y2FjaGVDb250ZW50TWFwLnNldCh1cmwsIHVybCk7XG5cdFx0cmV0dXJuIHVybDtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcbnZhciBhZG9wdGVkU2VsZWN0b3JNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGFkb3B0ZWRMYXllck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgYWRvcHRlZFNoYWRvd0xheWVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0QWRvcHRlZFN0eWxlUnVsZSA9IChzZWxlY3RvciwgbGF5ZXJOYW1lID0gXCJ1eC1xdWVyeVwiLCBiYXNpcyA9IG51bGwpID0+IHtcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIG51bGw7XG5cdGlmICghc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCgpKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgcm9vdCA9IGJhc2lzIGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IGJhc2lzIDogYmFzaXM/LmdldFJvb3ROb2RlID8gYmFzaXMuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSA6IG51bGw7XG5cdGNvbnN0IGlzU2hhZG93Um9vdCA9IHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xuXHRjb25zdCB0YXJnZXRBZG9wdGVkU2hlZXRzID0gaXNTaGFkb3dSb290ID8gcm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgOiB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyA6IG51bGw7XG5cdGlmICghdGFyZ2V0QWRvcHRlZFNoZWV0cykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHNlbGVjdG9yS2V5ID0gYCR7bGF5ZXJOYW1lIHx8IFwiXCJ9OiR7c2VsZWN0b3J9YDtcblx0bGV0IHNoZWV0O1xuXHRpZiAoaXNTaGFkb3dSb290KSB7XG5cdFx0bGV0IHNoYWRvd01hcCA9IGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcC5nZXQocm9vdCk7XG5cdFx0aWYgKCFzaGFkb3dNYXApIHtcblx0XHRcdHNoYWRvd01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAuc2V0KHJvb3QsIHNoYWRvd01hcCk7XG5cdFx0fVxuXHRcdHNoZWV0ID0gc2hhZG93TWFwLmdldChzZWxlY3RvcktleSk7XG5cdFx0aWYgKCFzaGVldCkge1xuXHRcdFx0c2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdFx0c2hhZG93TWFwLnNldChzZWxlY3RvcktleSwgc2hlZXQpO1xuXHRcdFx0aWYgKCF0YXJnZXRBZG9wdGVkU2hlZXRzLmluY2x1ZGVzKHNoZWV0KSkgdGFyZ2V0QWRvcHRlZFNoZWV0cy5wdXNoKHNoZWV0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0c2hlZXQgPSBhZG9wdGVkU2VsZWN0b3JNYXAuZ2V0KHNlbGVjdG9yS2V5KTtcblx0XHRpZiAoIXNoZWV0KSB7XG5cdFx0XHRzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0XHRhZG9wdGVkU2VsZWN0b3JNYXAuc2V0KHNlbGVjdG9yS2V5LCBzaGVldCk7XG5cdFx0XHRpZiAoIXRhcmdldEFkb3B0ZWRTaGVldHMuaW5jbHVkZXMoc2hlZXQpKSB0YXJnZXRBZG9wdGVkU2hlZXRzLnB1c2goc2hlZXQpO1xuXHRcdH1cblx0fVxuXHRpZiAobGF5ZXJOYW1lKSB7XG5cdFx0bGV0IGxheWVyUnVsZTtcblx0XHRpZiAoaXNTaGFkb3dSb290KSB7XG5cdFx0XHRsZXQgc2hhZG93TGF5ZXJNYXAgPSBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuZ2V0KHJvb3QpO1xuXHRcdFx0aWYgKCFzaGFkb3dMYXllck1hcCkge1xuXHRcdFx0XHRzaGFkb3dMYXllck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRcdGFkb3B0ZWRTaGFkb3dMYXllck1hcC5zZXQocm9vdCwgc2hhZG93TGF5ZXJNYXApO1xuXHRcdFx0fVxuXHRcdFx0bGF5ZXJSdWxlID0gc2hhZG93TGF5ZXJNYXAuZ2V0KGxheWVyTmFtZSk7XG5cdFx0fSBlbHNlIGxheWVyUnVsZSA9IGFkb3B0ZWRMYXllck1hcC5nZXQobGF5ZXJOYW1lKTtcblx0XHRpZiAoIWxheWVyUnVsZSkge1xuXHRcdFx0Y29uc3QgcnVsZXMgPSBBcnJheS5mcm9tKHNoZWV0LmNzc1J1bGVzIHx8IFtdKTtcblx0XHRcdGNvbnN0IGxheWVySW5kZXggPSBydWxlcy5maW5kSW5kZXgoKHJ1bGUpID0+IHJ1bGUgaW5zdGFuY2VvZiBDU1NMYXllckJsb2NrUnVsZSAmJiBydWxlLm5hbWUgPT09IGxheWVyTmFtZSk7XG5cdFx0XHRpZiAobGF5ZXJJbmRleCA9PT0gLTEpIHRyeSB7XG5cdFx0XHRcdHNoZWV0Lmluc2VydFJ1bGUoYEBsYXllciAke2xheWVyTmFtZX0ge31gLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuXHRcdFx0XHRjb25zdCBuZXdSdWxlID0gc2hlZXQuY3NzUnVsZXNbc2hlZXQuY3NzUnVsZXMubGVuZ3RoIC0gMV07XG5cdFx0XHRcdGlmIChuZXdSdWxlIGluc3RhbmNlb2YgQ1NTTGF5ZXJCbG9ja1J1bGUpIGxheWVyUnVsZSA9IG5ld1J1bGU7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGxheWVyUnVsZSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHRcdGVsc2UgbGF5ZXJSdWxlID0gcnVsZXNbbGF5ZXJJbmRleF07XG5cdFx0XHRpZiAobGF5ZXJSdWxlKSB7XG5cdFx0XHRcdGlmIChpc1NoYWRvd1Jvb3QpIHtcblx0XHRcdFx0XHRsZXQgc2hhZG93TGF5ZXJNYXAgPSBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuZ2V0KHJvb3QpO1xuXHRcdFx0XHRcdGlmICghc2hhZG93TGF5ZXJNYXApIHtcblx0XHRcdFx0XHRcdHNoYWRvd0xheWVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdFx0XHRcdGFkb3B0ZWRTaGFkb3dMYXllck1hcC5zZXQocm9vdCwgc2hhZG93TGF5ZXJNYXApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzaGFkb3dMYXllck1hcC5zZXQobGF5ZXJOYW1lLCBsYXllclJ1bGUpO1xuXHRcdFx0XHR9IGVsc2UgYWRvcHRlZExheWVyTWFwLnNldChsYXllck5hbWUsIGxheWVyUnVsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChsYXllclJ1bGUpIHtcblx0XHRcdGxldCBsYXllclJ1bGVJbmRleCA9IEFycmF5LmZyb20obGF5ZXJSdWxlLmNzc1J1bGVzIHx8IFtdKS5maW5kSW5kZXgoKHIpID0+IHIgaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUgJiYgci5zZWxlY3RvclRleHQ/LnRyaW0/LigpID09PSBzZWxlY3Rvcj8udHJpbT8uKCkpO1xuXHRcdFx0aWYgKGxheWVyUnVsZUluZGV4ID09PSAtMSkgdHJ5IHtcblx0XHRcdFx0bGF5ZXJSdWxlSW5kZXggPSBsYXllclJ1bGUuaW5zZXJ0UnVsZShgJHtzZWxlY3Rvcn0ge31gLCBsYXllclJ1bGUuY3NzUnVsZXMubGVuZ3RoKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGF5ZXJSdWxlLmNzc1J1bGVzW2xheWVyUnVsZUluZGV4XTtcblx0XHR9XG5cdH1cblx0bGV0IHJ1bGVJbmRleCA9IEFycmF5LmZyb20oc2hlZXQuY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocnVsZSkgPT4gcnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSAmJiBydWxlLnNlbGVjdG9yVGV4dD8udHJpbT8uKCkgPT09IHNlbGVjdG9yPy50cmltPy4oKSk7XG5cdGlmIChydWxlSW5kZXggPT09IC0xKSB0cnkge1xuXHRcdHJ1bGVJbmRleCA9IHNoZWV0Lmluc2VydFJ1bGUoYCR7c2VsZWN0b3J9IHt9YCwgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGNvbnN0IHJ1bGUgPSBzaGVldC5jc3NSdWxlc1tydWxlSW5kZXhdO1xuXHRpZiAocnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSkgcmV0dXJuIHJ1bGU7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBzZXRTdHlsZVByb3BlcnR5ID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRyZXR1cm4gaGFzVHlwZWRPTSA/IHNldFN0eWxlUHJvcGVydHlUeXBlZChlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSkgOiBzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2soZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UpO1xufTtcbnZhciBzZXRTdHlsZUluUnVsZSA9IChzZWxlY3RvciwgbmFtZSwgdmFsdWUpID0+IHtcblx0cmV0dXJuIHNldFN0eWxlUHJvcGVydHkoZ2V0U3R5bGVSdWxlKHNlbGVjdG9yKSwgbmFtZSwgdmFsdWUpO1xufTtcbnZhciBzZXRTdHlsZVJ1bGUgPSAoc2VsZWN0b3IsIHNoZWV0KSA9PiB7XG5cdGNvbnN0IHJ1bGUgPSBnZXRTdHlsZVJ1bGUoc2VsZWN0b3IpO1xuXHRPYmplY3QuZW50cmllcyhzaGVldCkuZm9yRWFjaCgoW3Byb3BOYW1lLCBwcm9wVmFsdWVdKSA9PiBzZXRTdHlsZVByb3BlcnR5KHJ1bGUsIHByb3BOYW1lLCBwcm9wVmFsdWUpKTtcblx0cmV0dXJuIHJ1bGU7XG59O1xudmFyIGhhc2ggPSBhc3luYyAoc3RyaW5nKSA9PiB7XG5cdGNvbnN0IGhhc2hCdWZmZXIgPSBhd2FpdCBjcnlwdG8/LnN1YnRsZT8uZGlnZXN0KFwiU0hBLTI1NlwiLCB0eXBlb2Ygc3RyaW5nID09IFwic3RyaW5nXCIgPyBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc3RyaW5nKSA6IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gc3RyaW5nIDogYXdhaXQgc3RyaW5nPy5hcnJheUJ1ZmZlcj8uKCkpO1xuXHRyZXR1cm4gXCJzaGEyNTYtXCIgKyBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoaGFzaEJ1ZmZlcikpKTtcbn07XG52YXIgbG9hZFN0eWxlU2hlZXQgPSAoaW5saW5lLCBiYXNlLCBsYXllciA9IFwiXCIsIGludGVncml0eSkgPT4ge1xuXHRjb25zdCBsb2FkID0gZmV0Y2hBbmRDYWNoZShpbmxpbmUpO1xuXHRjb25zdCB1cmwgPSB0eXBlb2YgaW5saW5lID09IFwic3RyaW5nXCIgPyBVUkwuY2FuUGFyc2UoaW5saW5lKSA/IGlubGluZSA6IGxvYWQgOiBsb2FkO1xuXHRpZiAoYmFzZT8uWzBdKSBiYXNlWzBdLmZldGNoUHJpb3JpdHkgPSBcImhpZ2hcIjtcblx0aWYgKGJhc2UgJiYgdXJsICYmIHR5cGVvZiB1cmwgPT0gXCJzdHJpbmdcIikgc2V0U3R5bGVVUkwoYmFzZSwgdXJsLCBsYXllcik7XG5cdGlmIChiYXNlPy5bMF0gJiYgKCFVUkwuY2FuUGFyc2UoaW5saW5lKSB8fCBpbnRlZ3JpdHkpICYmIGJhc2U/LlswXSBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge31cblx0cmV0dXJuIHByb21pc2VPckRpcmVjdChsb2FkLCAocmVzKSA9PiB7XG5cdFx0aWYgKGJhc2U/LlswXSAmJiByZXMpIHtcblx0XHRcdHNldFN0eWxlVVJMKGJhc2UsIHJlcywgbGF5ZXIpO1xuXHRcdFx0YmFzZT8uWzBdLnNldEF0dHJpYnV0ZShcImxvYWRlZFwiLCBcIlwiKTtcblx0XHR9XG5cdH0pPy5jYXRjaD8uKChlcnJvcikgPT4ge1xuXHRcdGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBsb2FkIHN0eWxlIHNoZWV0OlwiLCBlcnJvcik7XG5cdH0pO1xufTtcbnZhciBsb2FkQmxvYlN0eWxlID0gKGlubGluZSkgPT4ge1xuXHRjb25zdCBzdHlsZSA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIikgOiBudWxsO1xuXHRpZiAoc3R5bGUpIHN0eWxlLmZldGNoUHJpb3JpdHkgPSBcImhpZ2hcIjtcblx0aWYgKHN0eWxlKSB7XG5cdFx0T2JqZWN0LmFzc2lnbihzdHlsZSwge1xuXHRcdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRcdHR5cGU6IFwidGV4dC9jc3NcIixcblx0XHRcdGNyb3NzT3JpZ2luOiBcInNhbWUtb3JpZ2luXCJcblx0XHR9KTtcblx0XHRzdHlsZS5kYXRhc2V0Lm93bmVyID0gT1dORVI7XG5cdFx0bG9hZFN0eWxlU2hlZXQoaW5saW5lLCBbc3R5bGUsIFwiaHJlZlwiXSk7XG5cdFx0dHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmQoc3R5bGUpO1xuXHRcdHJldHVybiBzdHlsZTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgbG9hZElubGluZVN0eWxlID0gKGlubGluZSwgcm9vdEVsZW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50Py5oZWFkIDogbnVsbCwgbGF5ZXIgPSBcIlwiKSA9PiB7XG5cdGNvbnN0IFBMQUNFID0gcm9vdEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I/LihcImhlYWRcIikgPz8gcm9vdEVsZW1lbnQ7XG5cdGlmICh0eXBlb2YgSFRNTEhlYWRFbGVtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgUExBQ0UgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQpIHJldHVybiBsb2FkQmxvYlN0eWxlKGlubGluZSk7XG5cdGNvbnN0IHN0eWxlID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikgOiBudWxsO1xuXHRpZiAoc3R5bGUpIHtcblx0XHRzdHlsZS5kYXRhc2V0Lm93bmVyID0gT1dORVI7XG5cdFx0bG9hZFN0eWxlU2hlZXQoaW5saW5lLCBbc3R5bGUsIFwiaW5uZXJIVE1MXCJdLCBsYXllcik7XG5cdFx0UExBQ0U/LnByZXBlbmQ/LihzdHlsZSk7XG5cdFx0cmV0dXJuIHN0eWxlO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBzZXRQcm9wZXJ0eSA9ICh0YXJnZXQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRyZXR1cm4gc2V0U3R5bGVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbn07XG52YXIgcHJlbG9hZFN0eWxlID0gKHN0eWxlcykgPT4ge1xuXHRyZXR1cm4gbG9hZEFzQWRvcHRlZChzdHlsZXMsIFwiXCIpO1xufTtcbnZhciBhZG9wdGVkTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBhZG9wdGVkQmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGFwcGx5QWRvcHRlZFN0eWxlVGV4dCA9IChzaGVldCwgY3NzVGV4dCkgPT4ge1xuXHRpZiAoIXNoZWV0IHx8ICFjc3NUZXh0KSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0c2hlZXQucmVwbGFjZVN5bmMoY3NzVGV4dCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc3QgbWVzc2FnZSA9IFN0cmluZyhlcnJvcj8ubWVzc2FnZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICghKG1lc3NhZ2UuaW5jbHVkZXMoXCJAaW1wb3J0IHJ1bGVzIGFyZSBub3QgYWxsb3dlZFwiKSB8fCBtZXNzYWdlLmluY2x1ZGVzKFwiQGltcG9ydFwiKSAmJiBtZXNzYWdlLmluY2x1ZGVzKFwibm90IGFsbG93ZWRcIikpKSBjb25zb2xlLndhcm4oXCJbRE9NXSBGYWlsZWQgdG8gYXBwbHkgYWRvcHRlZCBzdHlsZXNoZWV0OlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIGxvYWRBc0Fkb3B0ZWQgPSAoc3R5bGVzLCBsYXllck5hbWUgPSBudWxsKSA9PiB7XG5cdGlmICghc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCgpKSB7XG5cdFx0aWYgKHR5cGVvZiBzdHlsZXMgPT09IFwic3RyaW5nXCIpIGxvYWRJbmxpbmVTdHlsZShzdHlsZXMsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmICh0eXBlb2Ygc3R5bGVzID09PSBcInN0cmluZ1wiICYmIGNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudChzdHlsZXMpKSB7XG5cdFx0bG9hZElubGluZVN0eWxlKHN0eWxlcywgdm9pZCAwLCBsYXllck5hbWUgfHwgXCJcIik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiBhZG9wdGVkTWFwPy5oYXM/LihzdHlsZXMpKSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gYWRvcHRlZE1hcC5nZXQoc3R5bGVzKTtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKGNhY2hlZCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKGNhY2hlZCk7XG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXHRpZiAoKHN0eWxlcyBpbnN0YW5jZW9mIEJsb2IgfHwgc3R5bGVzIGluc3RhbmNlb2YgRmlsZSkgJiYgYWRvcHRlZEJsb2JNYXA/Lmhhcz8uKHN0eWxlcykpIHtcblx0XHRjb25zdCBjYWNoZWQgPSBhZG9wdGVkQmxvYk1hcC5nZXQoc3R5bGVzKTtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKGNhY2hlZCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKGNhY2hlZCk7XG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXHRpZiAoIXN0eWxlcykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHNoZWV0ID0gdHlwZW9mIHN0eWxlcyA9PSBcInN0cmluZ1wiID8gYWRvcHRlZE1hcC5nZXRPckluc2VydENvbXB1dGVkKHN0eWxlcywgKHN0eWxlcykgPT4gbmV3IENTU1N0eWxlU2hlZXQoKSkgOiBhZG9wdGVkQmxvYk1hcC5nZXRPckluc2VydENvbXB1dGVkKHN0eWxlcywgKHN0eWxlcykgPT4gbmV3IENTU1N0eWxlU2hlZXQoKSk7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMgJiYgIWRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzaGVldCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoZWV0KTtcblx0aWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiAhVVJMLmNhblBhcnNlKHN0eWxlcykpIHtcblx0XHRjb25zdCBsYXllcldyYXBwZWQgPSBsYXllck5hbWUgPyBgQGxheWVyICR7bGF5ZXJOYW1lfSB7ICR7c3R5bGVzfSB9YCA6IHN0eWxlcztcblx0XHRhZG9wdGVkTWFwLnNldChzdHlsZXMsIHNoZWV0KTtcblx0XHRpZiAoIWFwcGx5QWRvcHRlZFN0eWxlVGV4dChzaGVldCwgbGF5ZXJXcmFwcGVkKSkge1xuXHRcdFx0cmVtb3ZlQWRvcHRlZChzaGVldCk7XG5cdFx0XHRhZG9wdGVkTWFwLmRlbGV0ZShzdHlsZXMpO1xuXHRcdFx0bG9hZElubGluZVN0eWxlKHN0eWxlcyk7XG5cdFx0fVxuXHRcdHJldHVybiBzaGVldDtcblx0fSBlbHNlIHByb21pc2VPckRpcmVjdChmZXRjaEFzSW5saW5lKHN0eWxlcyksIChjYWNoZWQpID0+IHtcblx0XHRhZG9wdGVkTWFwLnNldChjYWNoZWQsIHNoZWV0KTtcblx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRpZiAoY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50KGNhY2hlZCkpIHtcblx0XHRcdFx0cmVtb3ZlQWRvcHRlZChzaGVldCk7XG5cdFx0XHRcdGFkb3B0ZWRNYXAuZGVsZXRlKGNhY2hlZCk7XG5cdFx0XHRcdGFkb3B0ZWRCbG9iTWFwLmRlbGV0ZShzdHlsZXMpO1xuXHRcdFx0XHRsb2FkSW5saW5lU3R5bGUoY2FjaGVkLCB2b2lkIDAsIGxheWVyTmFtZSB8fCBcIlwiKTtcblx0XHRcdFx0cmV0dXJuIHNoZWV0O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGF5ZXJXcmFwcGVkID0gbGF5ZXJOYW1lID8gYEBsYXllciAke2xheWVyTmFtZX0geyAke2NhY2hlZH0gfWAgOiBjYWNoZWQ7XG5cdFx0XHRpZiAoIWFwcGx5QWRvcHRlZFN0eWxlVGV4dChzaGVldCwgbGF5ZXJXcmFwcGVkKSkge1xuXHRcdFx0XHRyZW1vdmVBZG9wdGVkKHNoZWV0KTtcblx0XHRcdFx0YWRvcHRlZE1hcC5kZWxldGUoY2FjaGVkKTtcblx0XHRcdFx0YWRvcHRlZEJsb2JNYXAuZGVsZXRlKHN0eWxlcyk7XG5cdFx0XHRcdGxvYWRJbmxpbmVTdHlsZShjYWNoZWQsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNoZWV0O1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBzaGVldDtcbn07XG52YXIgcmVtb3ZlQWRvcHRlZCA9IChzaGVldCkgPT4ge1xuXHRpZiAoIXNoZWV0KSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHRhcmdldCA9IHR5cGVvZiBzaGVldCA9PT0gXCJzdHJpbmdcIiA/IGFkb3B0ZWRNYXAuZ2V0KHNoZWV0KSA6IHNoZWV0O1xuXHRpZiAoIXRhcmdldCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc2hlZXRzID0gZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzO1xuXHRjb25zdCBpZHggPSBzaGVldHMuaW5kZXhPZih0YXJnZXQpO1xuXHRpZiAoaWR4ICE9PSAtMSkge1xuXHRcdHNoZWV0cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xudmFyIHBhcnNlT3JpZ2luID0gKG9yaWdpbiwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCB2YWx1ZXMgPSBvcmlnaW4uc3BsaXQoXCIgXCIpO1xuXHRyZXR1cm4gbmV3IERPTVBvaW50KHBhcnNlTGVuZ3RoKHZhbHVlc1swXSwgKCkgPT4gZWxlbWVudC5jbGllbnRXaWR0aCksIHBhcnNlTGVuZ3RoKHZhbHVlc1sxXSwgKCkgPT4gZWxlbWVudC5jbGllbnRIZWlnaHQpKTtcbn07XG52YXIgcGFyc2VMZW5ndGggPSAodmFsdWUsIHNpemUpID0+IHtcblx0aWYgKHZhbHVlLmVuZHNXaXRoKFwiJVwiKSkgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIC8gMTAwICogc2l6ZSgpO1xuXHRyZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59O1xudmFyIGdldFRyYW5zZm9ybSA9IChlbCkgPT4ge1xuXHRpZiAoZWw/LmNvbXB1dGVkU3R5bGVNYXApIHtcblx0XHRjb25zdCBtYXRyaXggPSBlbC5jb21wdXRlZFN0eWxlTWFwKCkuZ2V0KFwidHJhbnNmb3JtXCIpPy50b01hdHJpeD8uKCk7XG5cdFx0aWYgKG1hdHJpeCkgcmV0dXJuIG1hdHJpeDtcblx0fSBlbHNlIGlmIChlbCkge1xuXHRcdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdFx0cmV0dXJuIG5ldyBET01NYXRyaXgoc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcInRyYW5zZm9ybVwiKSk7XG5cdH1cblx0cmV0dXJuIG5ldyBET01NYXRyaXgoKTtcbn07XG52YXIgZ2V0VHJhbnNmb3JtT3JpZ2luID0gKGVsKSA9PiB7XG5cdGNvbnN0IGNzc09yaWdpbiA9IGdldENvbXB1dGVkU3R5bGUoZWwpPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCJ0cmFuc2Zvcm0tb3JpZ2luXCIpIHx8IGA1MCUgNTAlYDtcblx0cmV0dXJuIHBhcnNlT3JpZ2luKGNzc09yaWdpbiwgZWwpO1xufTtcbnZhciBnZXRQcm9wZXJ0eVZhbHVlID0gKHNyYywgbmFtZSkgPT4ge1xuXHRpZiAoXCJjb21wdXRlZFN0eWxlTWFwXCIgaW4gc3JjKSB7XG5cdFx0Y29uc3QgdmFsID0gc3JjPy5jb21wdXRlZFN0eWxlTWFwPy4oKT8uZ2V0KG5hbWUpO1xuXHRcdHJldHVybiB2YWwgaW5zdGFuY2VvZiBDU1NVbml0VmFsdWUgPyB2YWw/LnZhbHVlIHx8IDAgOiB2YWw/LnRvU3RyaW5nPy4oKTtcblx0fVxuXHRpZiAoc3JjIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRjb25zdCBjcyA9IGdldENvbXB1dGVkU3R5bGU/LihzcmMsIFwiXCIpO1xuXHRcdHJldHVybiBwYXJzZUZsb2F0KGNzPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnJlcGxhY2U/LihcInB4XCIsIFwiXCIpKSB8fCAwO1xuXHR9XG5cdHJldHVybiBwYXJzZUZsb2F0KChzcmM/LnN0eWxlID8/IHNyYykuZ2V0UHJvcGVydHlWYWx1ZT8uKG5hbWUpPy5yZXBsYWNlPy4oXCJweFwiLCBcIlwiKSkgfHwgMDtcbn07XG52YXIgZ2V0RWxlbWVudFpvb20gPSAoZWxlbWVudCkgPT4ge1xuXHRsZXQgem9vbSA9IDEsIGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnRFbGVtZW50KSB7XG5cdFx0aWYgKFwiY3VycmVudENTU1pvb21cIiBpbiBjdXJyZW50RWxlbWVudCkge1xuXHRcdFx0Y29uc3QgY3VycmVudENTU1pvb20gPSBjdXJyZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbTtcblx0XHRcdGlmICh0eXBlb2YgY3VycmVudENTU1pvb20gPT09IFwibnVtYmVyXCIpIHJldHVybiB6b29tICo9IGN1cnJlbnRDU1Nab29tO1xuXHRcdH1cblx0XHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudEVsZW1lbnQpO1xuXHRcdGlmIChzdHlsZS56b29tICYmIHN0eWxlLnpvb20gIT09IFwibm9ybWFsXCIpIHJldHVybiB6b29tICo9IHBhcnNlRmxvYXQoc3R5bGUuem9vbSk7XG5cdFx0aWYgKHN0eWxlLnpvb20gJiYgc3R5bGUuem9vbSAhPT0gXCJub3JtYWxcIiB8fCBcImN1cnJlbnRDU1Nab29tXCIgaW4gY3VycmVudEVsZW1lbnQpIHJldHVybiB6b29tO1xuXHRcdGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBjdXJyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcblx0fVxuXHRyZXR1cm4gem9vbTtcbn07XG52YXIgZ2V0UHhWYWx1ZSA9IChlbGVtZW50LCBuYW1lKSA9PiB7XG5cdHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlPy4oZWxlbWVudCwgbmFtZSk7XG59O1xudmFyIGdldFBhZGRpbmcgPSAoc3JjLCBheGlzKSA9PiB7XG5cdGlmIChheGlzID09IFwiaW5saW5lXCIpIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWlubGluZS1zdGFydFwiKSArIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctaW5saW5lLWVuZFwiKTtcblx0cmV0dXJuIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctYmxvY2stc3RhcnRcIikgKyBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWJsb2NrLWVuZFwiKTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9CZWhhdmlvci50c1xudmFyIGJvdW5kQmVoYXZpb3JzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYmluZEJlaGF2aW9yID0gKGVsZW1lbnQsIGJlaFNldCwgYmVoYXZpb3IpID0+IHtcblx0bmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdGlmICghYmVoU2V0LmhhcyhiZWhhdmlvcikpIGJlaFNldC5hZGQoYmVoYXZpb3IpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdEJlaGF2aW9ycyA9IChlbGVtZW50LCBiZWhhdmlvcnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChiZWhhdmlvcnMpIHtcblx0XHRjb25zdCBiZWhTZXQgPSBib3VuZEJlaGF2aW9ycy5nZXRPckluc2VydChlbGVtZW50LCAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcblx0XHRbLi4uYmVoYXZpb3JzPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRCZWhhdmlvcihlbGVtZW50LCBiZWhTZXQsIGUpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9TdG9yZS50c1xudmFyIG5hbWVkU3RvcmVNYXBzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BuYW1lZFN0b3JlTWFwc1wiKTtcbnZhciBuYW1lZFN0b3JlTWFwcyA9IGdsb2JhbFRoaXNbbmFtZWRTdG9yZU1hcHNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGdldFN0b3Jlc09mRWxlbWVudCA9IChtYXAsIGVsZW1lbnQpID0+IHtcblx0Y29uc3QgRSA9IFsuLi5tYXAuZW50cmllcygpIHx8IFtdXTtcblx0cmV0dXJuIG5ldyBNYXAoRT8ubWFwPy4oKFtuLCBtXSkgPT4gW24sIG0/LmdldD8uKGVsZW1lbnQpXSk/LmZpbHRlcj8uKChbbiwgZV0pID0+ICEhZSkgfHwgW10pO1xufTtcbnZhciBpc1dlYWtDb21wYXRpYmxlID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuICh0eXBlb2YgZWxlbWVudCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBlbGVtZW50ID09IFwiZnVuY3Rpb25cIikgJiYgZWxlbWVudCAhPSBudWxsO1xufTtcbnZhciBiaW5kU3RvcmUgPSAoZWxlbWVudCwgbmFtZSwgb2JqKSA9PiB7XG5cdGlmICghaXNXZWFrQ29tcGF0aWJsZShlbGVtZW50KSAmJiBlbGVtZW50ICE9IG51bGwpIHJldHVybiBlbGVtZW50O1xuXHRsZXQgd2Vha01hcCA9IG5hbWVkU3RvcmVNYXBzLmdldChuYW1lKTtcblx0aWYgKCF3ZWFrTWFwKSB7XG5cdFx0d2Vha01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRcdG5hbWVkU3RvcmVNYXBzLnNldChuYW1lLCB3ZWFrTWFwKTtcblx0fVxuXHRpZiAoIXdlYWtNYXAuaGFzKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgd2Vha01hcC5zZXQoZWxlbWVudCwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIHJlZmxlY3RTdG9yZXMgPSAoZWxlbWVudCwgc3RvcmVzKSA9PiB7XG5cdGlmICghZWxlbWVudCB8fCAhc3RvcmVzKSByZXR1cm47XG5cdGZvciAoY29uc3QgW25hbWUsIG9ial0gb2Ygc3RvcmVzLmVudHJpZXMoKSkgYmluZFN0b3JlKGVsZW1lbnQsIG5hbWUsIG9iaik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL01peGlucy50c1xudmFyIHJlZmxlY3RNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW5zKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRpZiAobWl4aW5zKSB7XG5cdFx0Y29uc3QgbWl4aW5TZXQgPSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcblx0XHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdFx0Wy4uLm1peGlucz8udmFsdWVzPy4oKSB8fCBbXV0ubWFwKChlKSA9PiBiaW5kTWl4aW5zKGVsZW1lbnQsIGUsIG1peGluU2V0KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGdldEVsZW1lbnRSZWxhdGVkID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHtcblx0XHRzdG9yZVNldDogZ2V0U3RvcmVzT2ZFbGVtZW50KG5hbWVkU3RvcmVNYXBzLCBlbGVtZW50KSxcblx0XHRtaXhpblNldDogYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCksXG5cdFx0YmVoYXZpb3JTZXQ6IGJvdW5kQmVoYXZpb3JzPy5nZXQ/LihlbGVtZW50KVxuXHR9O1xufTtcbnZhciBiaW5kTWl4aW5zID0gKGVsZW1lbnQsIG1peGluLCBtaXhTZXQpID0+IHtcblx0Y29uc3Qgd2VsID0gbmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdG1peFNldCB8fD0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCk7XG5cdGlmICghbWl4U2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRtaXhTZXQ/LmFkZD8uKG1peGluKTtcblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHRcdGlmIChtaXhpbi5uYW1lKSBlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW10sIG1peGluLm5hbWVdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0bWl4aW4/LmNvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGJvdW5kTWl4aW5TZXRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGJvdW5kTWl4aW5TZXRcIik7XG52YXIgYm91bmRNaXhpblNldCA9IGdsb2JhbFRoaXNbYm91bmRNaXhpblNldFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluRWxlbWVudHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgbWl4aW5FbGVtZW50cyA9IGdsb2JhbFRoaXNbbWl4aW5FbGVtZW50c1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluUmVnaXN0cnlTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIik7XG52YXIgbWl4aW5SZWdpc3RyeSA9IGdsb2JhbFRoaXNbbWl4aW5SZWdpc3RyeVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgbWl4aW5OYW1lc3BhY2VTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIpO1xudmFyIG1peGluTmFtZXNwYWNlID0gZ2xvYmFsVGhpc1ttaXhpbk5hbWVzcGFjZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlcyA9IChlbGVtZW50LCBtaXhpbikgPT4ge1xuXHRpZiAodHlwZW9mIG1peGluID09IFwic3RyaW5nXCIpIG1peGluID0gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obWl4aW4pO1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdGNvbnN0IG1peGlucyA9IG5ldyBTZXQoWy4uLm5hbWVzXS5tYXAoKG4pID0+IG1peGluUmVnaXN0cnk/LmdldD8uKG4pKS5maWx0ZXIoKG0pID0+ICEhbSkpO1xuXHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRpZiAoIW1peGluRWxlbWVudHM/Lmhhcz8uKG1peGluKSkgbWl4aW5FbGVtZW50cz8uc2V0Py4obWl4aW4sIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKTtcblx0aWYgKCFib3VuZE1peGluU2V0Py5oYXM/LihlbGVtZW50KSkgYm91bmRNaXhpblNldD8uc2V0Py4oZWxlbWVudCwgbWl4aW5TZXQpO1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkgbWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0aWYgKG1peGlucy5oYXMobWl4aW4pIHx8ICFtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/Lmhhcz8uKGVsZW1lbnQpKSB7XG5cdFx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRcdG5hbWVzLmFkZChtaXhpbk5hbWVzcGFjZT8uZ2V0Py4obWl4aW4pKTtcblx0XHRcdG1peGluU2V0Py5hZGQ/LihtaXhpbik7XG5cdFx0XHRlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLm5hbWVzXS5maWx0ZXIoKG4pID0+ICEhbikuam9pbihcIiBcIikpO1xuXHRcdH1cblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHR9XG5cdGlmIChtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkge1xuXHRcdFx0bWl4aW5TZXQ/LmRlbGV0ZT8uKG1peGluKTtcblx0XHRcdG1peGluPy5kaXNjb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdH1cblx0fVxufTtcbnZhciByb290cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgYWRkUm9vdCA9IChyb290ID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKCFyb290KSByZXR1cm47XG5cdGlmICghcm9vdHM/Lmhhcz8uKHJvb3QpKSB7XG5cdFx0cm9vdHM/LmFkZD8uKHJvb3QpO1xuXHRcdG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKHJvb3QsIFwiKlwiLCBcImRhdGEtbWl4aW5cIiwgKG11dGF0aW9uKSA9PiB1cGRhdGVBbGxNaXhpbnMobXV0YXRpb24udGFyZ2V0KSk7XG5cdFx0b2JzZXJ2ZUJ5U2VsZWN0b3Iocm9vdCwgXCJbZGF0YS1taXhpbl1cIiwgKG11dGF0aW9uKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbXV0YXRpb24uYWRkZWROb2RlcykgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiByb290O1xufTtcbnZhciB1cGRhdGVBbGxNaXhpbnMgPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdFsuLi5uZXcgU2V0KFsuLi5uYW1lc10ubWFwKChuKSA9PiBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihuKSkuZmlsdGVyKChtKSA9PiAhIW0pKV0ubWFwPy4oKG0pID0+IHVwZGF0ZU1peGluQXR0cmlidXRlcyhlbGVtZW50LCBtKSk7XG59O1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCA9IChlbGVtZW50cywgbWl4aW4pID0+IHtcblx0ZWxlbWVudHMuZm9yRWFjaCgoZSkgPT4gbWl4aW4gPyB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZSwgbWl4aW4pIDogdXBkYXRlQWxsTWl4aW5zKGUpKTtcbn07XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyA9IChtaXhpbikgPT4ge1xuXHRmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbChyb290Py5xdWVyeVNlbGVjdG9yQWxsPy4oXCJbZGF0YS1taXhpbl1cIiksIG1peGluKTtcbn07XG52YXIgbmFtZVJlZ2lzdHJ5RiA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoa2V5KSA9PiB7XG5cdG1peGluUmVnaXN0cnk/LmRlbGV0ZT8uKGtleSk7XG59KTtcbnZhciByZWdpc3Rlck1peGluID0gKG5hbWUsIG1peGluKSA9PiB7XG5cdGlmICghbWl4aW5OYW1lc3BhY2U/Lmhhcz8uKG1peGluKSkge1xuXHRcdGNvbnN0IGtleSA9IG5hbWU/LnRyaW0/LigpO1xuXHRcdGlmIChrZXkpIHtcblx0XHRcdG1peGluTmFtZXNwYWNlPy5zZXQ/LihtaXhpbiwga2V5KTtcblx0XHRcdG1peGluUmVnaXN0cnk/LnNldD8uKGtleSwgbWl4aW4pO1xuXHRcdFx0bmFtZVJlZ2lzdHJ5Rj8ucmVnaXN0ZXI/LihtaXhpbiwga2V5KTtcblx0XHRcdHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMobWl4aW4pO1xuXHRcdH1cblx0fVxufTtcbmFkZFJvb3QodHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xudmFyIERPTU1peGluID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihuYW1lID0gbnVsbCkge1xuXHRcdGlmIChuYW1lKSByZWdpc3Rlck1peGluKG5hbWUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3Qod0VsZW1lbnQsIHdTZWxmLCByZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWxlbWVudCwgd1NlbGYsIHJlbGF0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRzdG9yZUZvckVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiBuYW1lZFN0b3JlTWFwcy5nZXQodGhpcy5uYW1lIHx8IFwiXCIpPy5nZXQ/LihlbGVtZW50KTtcblx0fVxuXHRyZWxhdGVkRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpO1xuXHR9XG5cdGdldCBlbGVtZW50cygpIHtcblx0XHRyZXR1cm4gbWl4aW5FbGVtZW50cz8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIG1peGluTmFtZXNwYWNlPy5nZXQ/Lih0aGlzKTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0hhbmRsZXIudHNcbnZhciBoYW5kbGVIaWRkZW4gPSAoZWxlbWVudCwgXywgdmlzaWJsZSkgPT4ge1xuXHRjb25zdCAkcmVmID0gdmlzaWJsZTtcblx0aWYgKGhhc1ZhbHVlKHZpc2libGUpKSB2aXNpYmxlID0gdmlzaWJsZS52YWx1ZTtcblx0Y29uc3QgaXNWaXNpYmxlID0gKHZpc2libGUgPSBub3JtYWxpemVQcmltaXRpdmUodmlzaWJsZSkpICE9IG51bGwgJiYgdmlzaWJsZSAhPT0gZmFsc2U7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgZWxlbWVudC5oaWRkZW4gPSAhaXNWaXNpYmxlO1xuXHRcdGVsc2UgaWYgKGlzVmlzaWJsZSkgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKTtcblx0XHRlbHNlIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIiwgXCJcIik7XG5cdH0pO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgaGFuZGxlUHJvcGVydHkgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIShwcm9wID0gdHlwZW9mIHByb3AgPT0gXCJzdHJpbmdcIiA/IGtlYmFiVG9DYW1lbChwcm9wKSA6IHByb3ApIHx8ICFlbCB8fCBbXG5cdFx0XCJzdHlsZVwiLFxuXHRcdFwiZGF0YXNldFwiLFxuXHRcdFwiYXR0cmlidXRlU3R5bGVNYXBcIixcblx0XHRcInN0eWxlTWFwXCIsXG5cdFx0XCJjb21wdXRlZFN0eWxlTWFwXCJcblx0XS5pbmRleE9mKHByb3AgfHwgXCJcIikgIT0gLTEpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0aWYgKGVsPy5bcHJvcF0gPT09IHZhbCkgcmV0dXJuIGVsO1xuXHRpZiAoZWw/Lltwcm9wXSAhPT0gdmFsKSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodmFsICE9IG51bGwpIGVsW3Byb3BdID0gdmFsO1xuXHRcdGVsc2UgZGVsZXRlIGVsW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVEYXRhc2V0ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3QgZGF0YXNldFJlZiA9IGVsPy5kYXRhc2V0O1xuXHRpZiAoIXByb3AgfHwgIWVsIHx8ICFkYXRhc2V0UmVmKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWw/LnZhbHVlO1xuXHRwcm9wID0ga2ViYWJUb0NhbWVsKHByb3ApO1xuXHRpZiAoZGF0YXNldFJlZj8uW3Byb3BdID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPT09IGZhbHNlKSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0ZWxzZSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiKSBkYXRhc2V0UmVmW3Byb3BdID0gU3RyaW5nKHZhbCk7XG5cdFx0ZWxzZSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgZGVsZXRlU3R5bGVQcm9wZXJ0eSA9IChlbCwgbmFtZSkgPT4gZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoY2FtZWxUb0tlYmFiKG5hbWUpKTtcbnZhciBoYW5kbGVTdHlsZUNoYW5nZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IHN0eWxlUmVmID0gZWw/LnN0eWxlO1xuXHRpZiAoIXByb3AgfHwgdHlwZW9mIHByb3AgIT0gXCJzdHJpbmdcIiB8fCAhZWwgfHwgIXN0eWxlUmVmKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIodmFsLCAoKSA9PiB7XG5cdFx0aWYgKGlzVmFsKHZhbCkgfHwgaGFzVmFsdWUodmFsKSB8fCBpc1ZhbHVlVW5pdCh2YWwpKSBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wLCB2YWwpO1xuXHRcdGVsc2UgaWYgKHZhbCA9PSBudWxsKSBkZWxldGVTdHlsZVByb3BlcnR5KGVsLCBwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlQXR0cmlidXRlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCFwcm9wIHx8ICFlbCkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRwcm9wID0gY2FtZWxUb0tlYmFiKHByb3ApO1xuXHRpZiAoZWw/LmdldEF0dHJpYnV0ZT8uKHByb3ApID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIgJiYgdmFsICE9IG51bGwgJiYgKHR5cGVvZiB2YWwgPT0gXCJib29sZWFuXCIgPyB2YWwgPT0gdHJ1ZSA6IHRydWUpKSBlbD8uc2V0QXR0cmlidXRlPy4ocHJvcCwgU3RyaW5nKHZhbCkpO1xuXHRcdGVsc2UgZWw/LnJlbW92ZUF0dHJpYnV0ZT8uKHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gZGlzdC9kb20uanNcbnZhciBmaSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgaXIgPSBnbG9iYWxUaGlzW2ZpXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1mcmVxXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBpeGVsLXJhdGlvXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteFwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteVwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9XG5dLmZvckVhY2goKGUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgPiBcInVcIiB8fCB0eXBlb2YgQ1NTPy5yZWdpc3RlclByb3BlcnR5ICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCB0ID0gU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoISghdCB8fCBpci5oYXModCkpKSB0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KGUpO1xuXHR9IGNhdGNoIChuKSB7XG5cdFx0U3RyaW5nKG4/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSAhPT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIiAmJiBjb25zb2xlLndhcm4obik7XG5cdH0gZmluYWxseSB7XG5cdFx0aXIuYWRkKHQpO1xuXHR9XG59KTtcbnZhciBqbCA9IHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgYmkgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA8IFwidVwiICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdGZvciAoOzspIGJpLmZvckVhY2goKGUpID0+IGU/LigpKSwgYXdhaXQgbmV3IFByb21pc2UoKGUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShlKSk7XG59KTtcbnZhciBNciA9IHt9O1xuZnVuY3Rpb24gVihlLCB0LCBuLCByID0gTXIpIHtcblx0ZT8uYWRkRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xuXHRjb25zdCBpID0gdHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgIWU/LmRlcmVmID8gbmV3IFdlYWtSZWYoZSkgOiBlO1xuXHRyZXR1cm4gKCkgPT4gaT8uZGVyZWY/LigpPy5yZW1vdmVFdmVudExpc3RlbmVyPy4odCwgbiwgcik7XG59XG52YXIgeGkgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xudmFyIHdpID0gZ2xvYmFsVGhpc1t4aV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIENyID0gKCkgPT4ge1xuXHRjb25zdCBlID0gdHlwZW9mIG1hdGNoTWVkaWEgPCBcInVcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiAhMSwgdCA9IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGwsIG4gPSB0ID8ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt0LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3QuaGVpZ2h0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dC5vZmZzZXRMZWZ0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt0Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh0LnNjYWxlID8/IDEpXG5cdH0gOiB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiA8IFwidVwiKSB7XG5cdFx0Y29uc3QgciA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIiwgaSA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBlID8gaSA6IHIsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGUgPyByIDogaSxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLm5cblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi5uXG5cdH07XG59O1xudmFyIHhuID0gQ3IoKTtcbnZhciBvZSA9IG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIGtpID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xudmFyIHZlID0gZ2xvYmFsVGhpc1traV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIFBpID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Db250ZW50T2JzZXJ2ZVwiKTtcbnZhciBnZSA9IGdsb2JhbFRoaXNbUGldID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBPZSA9IChlKSA9PiAodHlwZW9mIGU/LmN1cnJlbnQgPT0gXCJvYmplY3RcIiAmJiAoZSA9IGU/LmVsZW1lbnQgPz8gZT8uY3VycmVudCA/PyAodHlwZW9mIGU/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGU/LnNlbGYgOiBudWxsKSA/PyBlKSwgZSk7XG52YXIgSW4gPSAoZSwgdCwgbiwgcikgPT4ge1xuXHRjb25zdCBpID0gbmV3IFNldChbLi4ubi5zcGxpdChcIixcIikgfHwgW25dXS5tYXAoKGEpID0+IGEudHJpbSgpKSksIGwgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoYSwgbykgPT4ge1xuXHRcdGZvciAoY29uc3QgZCBvZiBhKSBpZiAoZC50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGMgPSBBcnJheS5mcm9tKGQuYWRkZWROb2RlcykgfHwgW10sIHAgPSBBcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGMucHVzaCguLi5BcnJheS5mcm9tKGQuYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZikgPT4gQXJyYXkuZnJvbShmPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIHAucHVzaCguLi5BcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChmKSA9PiBBcnJheS5mcm9tKGY/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgWy4uLm5ldyBTZXQoYyldLmZpbHRlcigoZikgPT4gZj8ubWF0Y2hlcz8uKHQpKT8ubWFwPy4oKGYpID0+IHtcblx0XHRcdFx0aS5mb3JFYWNoKCh1KSA9PiB7XG5cdFx0XHRcdFx0cih7XG5cdFx0XHRcdFx0XHR0YXJnZXQ6IGYsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU6IHUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogZj8uZ2V0QXR0cmlidXRlPy4odSlcblx0XHRcdFx0XHR9LCBvKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgZC50YXJnZXQ/Lm1hdGNoZXM/Lih0KSAmJiBkLmF0dHJpYnV0ZU5hbWUgJiYgaS5oYXMoZC5hdHRyaWJ1dGVOYW1lKSAmJiByKGQsIG8pO1xuXHR9KTtcblx0cmV0dXJuIGwub2JzZXJ2ZShlID0gT2UoZSksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogITAsXG5cdFx0YXR0cmlidXRlczogITAsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uaV0sXG5cdFx0Y2hpbGRMaXN0OiAhMCxcblx0XHRzdWJ0cmVlOiAhMCxcblx0XHRjaGFyYWN0ZXJEYXRhOiAhMFxuXHR9KSwgWy4uLmUucXVlcnlTZWxlY3RvckFsbCh0KV0ubWFwKChhKSA9PiBpLmZvckVhY2goKG8pID0+IHIoe1xuXHRcdHRhcmdldDogYSxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBvLFxuXHRcdG9sZFZhbHVlOiBhPy5nZXRBdHRyaWJ1dGU/LihvKVxuXHR9LCBsKSkpLCBsO1xufTtcbnZhciBXaSA9IChlLCB0ID0gXCIqXCIsIG4gPSAociwgaSkgPT4ge30pID0+IHtcblx0Y29uc3QgciA9ICh1KSA9PiB7XG5cdFx0Y29uc3QgcyA9IEFycmF5LmZyb20odSB8fCBbXSkgfHwgW107XG5cdFx0cmV0dXJuIHMucHVzaCguLi5BcnJheS5mcm9tKHUgfHwgW10pLmZsYXRNYXAoKGgpID0+IEFycmF5LmZyb20oaD8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KHMpLnZhbHVlcygpKV0uZmlsdGVyKChoKSA9PiBoPy5tYXRjaGVzPy4odCkpO1xuXHR9O1xuXHRsZXQgaSA9IG51bGw7XG5cdGNvbnN0IGwgPSAodSkgPT4ge1xuXHRcdGNvbnN0IHMgPSBpPy5kZXJlZj8uKCksIGggPSByKHUuYWRkZWROb2RlcyksIG0gPSByKHUucmVtb3ZlZE5vZGVzKTtcblx0XHQoaC5sZW5ndGggPiAwIHx8IG0ubGVuZ3RoID4gMCkgJiYgbj8uKHtcblx0XHRcdHR5cGU6IHUudHlwZSxcblx0XHRcdHRhcmdldDogdS50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiB1LmF0dHJpYnV0ZU5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IHUuYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IHUubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogdS5vbGRWYWx1ZSxcblx0XHRcdHByZXZpb3VzU2libGluZzogdS5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzOiBoLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBtXG5cdFx0fSwgcyk7XG5cdH0sIGEgPSAodSkgPT4ge1xuXHRcdGwoe1xuXHRcdFx0YWRkZWROb2RlczogW3U/LnRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbdT8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogdT8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBvID0gKHUpID0+IHtcblx0XHRsKHtcblx0XHRcdGFkZGVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py50YXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IHU/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgZCA9ICh1KSA9PiB7XG5cdFx0bCh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbdT8udGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiB1Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIGMgPSB7XG5cdFx0cGFzc2l2ZTogITAsXG5cdFx0Y2FwdHVyZTogITFcblx0fTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikgJiYgdD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXZpc2libGVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZCwgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkLCBjKTtcblx0fSB9O1xuXHRjb25zdCBwID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHUsIHMpID0+IHtcblx0XHRmb3IgKGNvbnN0IGggb2YgdSkgaC50eXBlID09IFwiY2hpbGRMaXN0XCIgJiYgbChoKTtcblx0fSk7XG5cdGkgPSBuZXcgV2Vha1JlZihwKSwgKGU/LmVsZW1lbnQgPz8gZSkgaW5zdGFuY2VvZiBOb2RlICYmIHAub2JzZXJ2ZShlID0gT2UoZSksIHtcblx0XHRjaGlsZExpc3Q6ICEwLFxuXHRcdHN1YnRyZWU6ICEwXG5cdH0pO1xuXHRjb25zdCBmID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwodCkpO1xuXHRyZXR1cm4gZi5sZW5ndGggPiAwICYmIG4/Lih7XG5cdFx0YWRkZWROb2RlczogZixcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIHApLCBwO1xufTtcbnZhciBCbiA9IFwiRE9NXCI7XG52YXIgQWUgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSA6IG51bGw7XG5BZSAmJiAodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oQWUpLCBBZS5kYXRhc2V0Lm93bmVyID0gQm4pO1xudmFyIHp0ID0gdHlwZW9mIENTU1N0eWxlVmFsdWUgPCBcInVcIiAmJiB0eXBlb2YgQ1NTVW5pdFZhbHVlIDwgXCJ1XCI7XG52YXIgc2UgPSAoZSkgPT4genQgJiYgZSBpbnN0YW5jZW9mIENTU1N0eWxlVmFsdWU7XG52YXIgXyA9IChlKSA9PiB6dCAmJiBlIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xudmFyIFcgPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IHtcblx0aWYgKCEoIWUgfHwgIXQpKSB7XG5cdFx0aWYgKG4gPT0gbnVsbCkge1xuXHRcdFx0ZS5nZXRQcm9wZXJ0eVZhbHVlKHQpICE9PSBcIlwiICYmIGUucmVtb3ZlUHJvcGVydHkodCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gbiAmJiBlLnNldFByb3BlcnR5KHQsIG4sIHIpO1xuXHR9XG59O1xudmFyIEJpID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBjYW1lbFRvS2ViYWIodCksIGwgPSBlLnN0eWxlLCBhID0gZS5hdHRyaWJ1dGVTdHlsZU1hcCA/PyBlLnN0eWxlTWFwO1xuXHRpZiAoIXp0IHx8ICFhKSByZXR1cm4gQXIoZSwgdCwgbiwgcik7XG5cdGxldCBvID0gaGFzVmFsdWUobikgJiYgIShzZShuKSB8fCBfKG4pKSA/IG4/LnZhbHVlIDogbjtcblx0aWYgKG8gPT0gbnVsbCkgcmV0dXJuIGEuZGVsZXRlPy4oaSksIGwgJiYgVyhsLCBpLCBudWxsLCByKSwgZTtcblx0aWYgKHNlKG8pKSB7XG5cdFx0Y29uc3QgZCA9IGEuZ2V0KGkpO1xuXHRcdGlmIChfKG8pICYmIF8oZCkpIHtcblx0XHRcdGlmIChkLnZhbHVlID09PSBvLnZhbHVlICYmIGQudW5pdCA9PT0gby51bml0KSByZXR1cm4gZTtcblx0XHR9IGVsc2UgaWYgKGQgPT09IG8pIHJldHVybiBlO1xuXHRcdHJldHVybiBhLnNldChpLCBvKSwgZTtcblx0fVxuXHRpZiAodHlwZW9mIG8gPT0gXCJudW1iZXJcIikgaWYgKENTUz8ubnVtYmVyICYmICFpLnN0YXJ0c1dpdGgoXCItLVwiKSkge1xuXHRcdGNvbnN0IGQgPSBDU1MubnVtYmVyKG8pLCBjID0gYS5nZXQoaSk7XG5cdFx0cmV0dXJuIF8oYykgJiYgYy52YWx1ZSA9PT0gZC52YWx1ZSAmJiBjLnVuaXQgPT09IGQudW5pdCB8fCBhLnNldChpLCBkKSwgZTtcblx0fSBlbHNlIHJldHVybiBXKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG5cdGlmICh0eXBlb2YgbyA9PSBcInN0cmluZ1wiICYmICFzZShvKSkge1xuXHRcdGNvbnN0IGQgPSB0cnlTdHJpbmdBc051bWJlcihvKTtcblx0XHRpZiAodHlwZW9mIGQgPT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAhaS5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IGMgPSBDU1MubnVtYmVyKGQpLCBwID0gYS5nZXQoaSk7XG5cdFx0XHRyZXR1cm4gXyhwKSAmJiBwLnZhbHVlID09PSBjLnZhbHVlICYmIHAudW5pdCA9PT0gYy51bml0IHx8IGEuc2V0KGksIGMpLCBlO1xuXHRcdH0gZWxzZSByZXR1cm4gVyhsLCBpLCBvLCByKSwgZTtcblx0fVxuXHRyZXR1cm4gVyhsLCBpLCBTdHJpbmcobyksIHIpLCBlO1xufTtcbnZhciBBciA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoIWUgfHwgIXQpIHJldHVybiBlO1xuXHRjb25zdCBpID0gY2FtZWxUb0tlYmFiKHQpLCBsID0gZS5zdHlsZTtcblx0aWYgKCFsKSByZXR1cm4gZTtcblx0bGV0IGEgPSBoYXNWYWx1ZShuKSAmJiAhKHNlKG4pIHx8IF8obikpID8gbj8udmFsdWUgOiBuO1xuXHRyZXR1cm4gdHlwZW9mIGEgPT0gXCJzdHJpbmdcIiAmJiAhc2UoYSkgJiYgKGEgPSB0cnlTdHJpbmdBc051bWJlcihhKSA/PyBhKSwgYSA9PSBudWxsID8gKFcobCwgaSwgbnVsbCwgciksIGUpIDogKHNlKGEpLCBXKGwsIGksIFN0cmluZyhhKSwgciksIGUpO1xufTtcbnZhciBrdCA9IChlLCB0LCBuLCByID0gXCJcIikgPT4genQgPyBCaShlLCB0LCBuLCByKSA6IEFyKGUsIHQsIG4sIHIpO1xudmFyIHpyID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgSmkgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BuYW1lZFN0b3JlTWFwc1wiKTtcbnZhciBUZSA9IGdsb2JhbFRoaXNbSmldID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIEtpID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IFsuLi5lLmVudHJpZXMoKSB8fCBbXV07XG5cdHJldHVybiBuZXcgTWFwKG4/Lm1hcD8uKChbciwgaV0pID0+IFtyLCBpPy5nZXQ/Lih0KV0pPy5maWx0ZXI/LigoW3IsIGldKSA9PiAhIWkpIHx8IFtdKTtcbn07XG52YXIgTmUgPSAoZSkgPT4gKHtcblx0c3RvcmVTZXQ6IEtpKFRlLCBlKSxcblx0bWl4aW5TZXQ6ICQ/LmdldD8uKGUpLFxuXHRiZWhhdmlvclNldDogenI/LmdldD8uKGUpXG59KTtcbnZhciBuYSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQGJvdW5kTWl4aW5TZXRcIik7XG52YXIgJCA9IGdsb2JhbFRoaXNbbmFdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciByYSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgUSA9IGdsb2JhbFRoaXNbcmFdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBpYSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIik7XG52YXIgemUgPSBnbG9iYWxUaGlzW2lhXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBhYSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIpO1xudmFyIHl0ID0gZ2xvYmFsVGhpc1thYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGtyID0gKGUsIHQpID0+IHtcblx0dHlwZW9mIHQgPT0gXCJzdHJpbmdcIiAmJiAodCA9IHplPy5nZXQ/Lih0KSk7XG5cdGNvbnN0IG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZT8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pLCByID0gbmV3IFNldChbLi4ubl0ubWFwKChhKSA9PiB6ZT8uZ2V0Py4oYSkpLmZpbHRlcigoYSkgPT4gISFhKSksIGkgPSAkPy5nZXQ/LihlKSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcblx0UT8uaGFzPy4odCkgfHwgUT8uc2V0Py4odCwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpLCAkPy5oYXM/LihlKSB8fCAkPy5zZXQ/LihlLCBpKTtcblx0Y29uc3QgbCA9IG5ldyBXZWFrUmVmKGUpO1xuXHRpPy5oYXM/Lih0KSB8fCAoci5oYXModCkgfHwgdD8uZGlzY29ubmVjdD8uKGwsIHQsIE5lKGUpKSwgKHIuaGFzKHQpIHx8ICFRPy5nZXQ/Lih0KT8uaGFzPy4oZSkpICYmICh0Py5jb25uZWN0Py4obCwgdCwgTmUoZSkpLCBuLmFkZCh5dD8uZ2V0Py4odCkpLCBpPy5hZGQ/Lih0KSwgZT8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIsIFsuLi5uXS5maWx0ZXIoKGEpID0+ICEhYSkuam9pbihcIiBcIikpKSwgUT8uZ2V0Py4odCk/LmFkZD8uKGUpKSwgaT8uaGFzPy4odCkgJiYgKHIuaGFzKHQpIHx8IChpPy5kZWxldGU/Lih0KSwgdD8uZGlzY29ubmVjdD8uKGwsIHQsIE5lKGUpKSkpO1xufTtcbnZhciB3biA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgb2EgPSAoZSA9IHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQgOiBudWxsKSA9PiB7XG5cdGlmIChlKSByZXR1cm4gd24/Lmhhcz8uKGUpIHx8ICh3bj8uYWRkPy4oZSksIEluKGUsIFwiKlwiLCBcImRhdGEtbWl4aW5cIiwgKHQpID0+IFNuKHQudGFyZ2V0KSksIFdpKGUsIFwiW2RhdGEtbWl4aW5dXCIsICh0KSA9PiB7XG5cdFx0Zm9yIChjb25zdCBuIG9mIHQuYWRkZWROb2RlcykgbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIFNuKG4pO1xuXHR9KSksIGU7XG59O1xudmFyIFNuID0gKGUpID0+IHtcblx0Y29uc3QgdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lPy5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdFsuLi5uZXcgU2V0KFsuLi50XS5tYXAoKG4pID0+IHplPy5nZXQ/LihuKSkuZmlsdGVyKChuKSA9PiAhIW4pKV0ubWFwPy4oKG4pID0+IGtyKGUsIG4pKTtcbn07XG52YXIgc2EgPSAoZSwgdCkgPT4ge1xuXHRlLmZvckVhY2goKG4pID0+IHQgPyBrcihuLCB0KSA6IFNuKG4pKTtcbn07XG52YXIgbGEgPSAoZSkgPT4ge1xuXHRmb3IgKGNvbnN0IHQgb2Ygd24pIHNhKHQ/LnF1ZXJ5U2VsZWN0b3JBbGw/LihcIltkYXRhLW1peGluXVwiKSwgZSk7XG59O1xudmFyIHVhID0gbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChlKSA9PiB7XG5cdHplPy5kZWxldGU/LihlKTtcbn0pO1xudmFyIGNhID0gKGUsIHQpID0+IHtcblx0aWYgKCF5dD8uaGFzPy4odCkpIHtcblx0XHRjb25zdCBuID0gZT8udHJpbT8uKCk7XG5cdFx0biAmJiAoeXQ/LnNldD8uKHQsIG4pLCB6ZT8uc2V0Py4obiwgdCksIHVhPy5yZWdpc3Rlcj8uKHQsIG4pLCBsYSh0KSk7XG5cdH1cbn07XG5vYSh0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50IDogbnVsbCk7XG52YXIganUgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGUgPSBudWxsKSB7XG5cdFx0ZSAmJiBjYShlLCB0aGlzKTtcblx0fVxuXHRjb25uZWN0KGUsIHQsIG4pIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUsIHQsIG4pIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRzdG9yZUZvckVsZW1lbnQoZSkge1xuXHRcdHJldHVybiBUZS5nZXQodGhpcy5uYW1lIHx8IFwiXCIpPy5nZXQ/LihlKTtcblx0fVxuXHRyZWxhdGVkRm9yRWxlbWVudChlKSB7XG5cdFx0cmV0dXJuIE5lKGUpO1xuXHR9XG5cdGdldCBlbGVtZW50cygpIHtcblx0XHRyZXR1cm4gUT8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIFRlPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIHl0Py5nZXQ/Lih0aGlzKTtcblx0fVxufTtcbnZhciBoYSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgeXIgPSBnbG9iYWxUaGlzW2hhXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1mcmVxXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBpeGVsLXJhdGlvXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteFwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteVwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9XG5dLmZvckVhY2goKGUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgPiBcInVcIiB8fCB0eXBlb2YgQ1NTPy5yZWdpc3RlclByb3BlcnR5ICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCB0ID0gU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoISghdCB8fCB5ci5oYXModCkpKSB0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KGUpO1xuXHR9IGNhdGNoIChuKSB7XG5cdFx0U3RyaW5nKG4/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSAhPT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIiAmJiBjb25zb2xlLndhcm4obik7XG5cdH0gZmluYWxseSB7XG5cdFx0eXIuYWRkKHQpO1xuXHR9XG59KTtcbnR5cGVvZiBkb2N1bWVudCA8IFwidVwiICYmIGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ7XG52YXIgcGEgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA8IFwidVwiICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdGZvciAoOzspIHBhLmZvckVhY2goKGUpID0+IGU/LigpKSwgYXdhaXQgbmV3IFByb21pc2UoKGUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShlKSk7XG59KTtcbnZhciBmYSA9IHt9O1xuZnVuY3Rpb24gTChlLCB0LCBuLCByID0gZmEpIHtcblx0ZT8uYWRkRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xuXHRjb25zdCBpID0gdHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgIWU/LmRlcmVmID8gbmV3IFdlYWtSZWYoZSkgOiBlO1xuXHRyZXR1cm4gKCkgPT4gaT8uZGVyZWY/LigpPy5yZW1vdmVFdmVudExpc3RlbmVyPy4odCwgbiwgcik7XG59XG52YXIgbWEgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xuZ2xvYmFsVGhpc1ttYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHZhID0gKCkgPT4ge1xuXHRjb25zdCBlID0gdHlwZW9mIG1hdGNoTWVkaWEgPCBcInVcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiAhMSwgdCA9IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGwsIG4gPSB0ID8ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt0LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3QuaGVpZ2h0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dC5vZmZzZXRMZWZ0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt0Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh0LnNjYWxlID8/IDEpXG5cdH0gOiB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiA8IFwidVwiKSB7XG5cdFx0Y29uc3QgciA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIiwgaSA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBlID8gaSA6IHIsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGUgPyByIDogaSxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLm5cblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi5uXG5cdH07XG59O1xudmEoKTtcbm5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIGdhID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xuZ2xvYmFsVGhpc1tnYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHlhID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Db250ZW50T2JzZXJ2ZVwiKTtcbmdsb2JhbFRoaXNbeWFdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBQciA9IChlKSA9PiAodHlwZW9mIGU/LmN1cnJlbnQgPT0gXCJvYmplY3RcIiAmJiAoZSA9IGU/LmVsZW1lbnQgPz8gZT8uY3VycmVudCA/PyAodHlwZW9mIGU/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGU/LnNlbGYgOiBudWxsKSA/PyBlKSwgZSk7XG52YXIgYmEgPSAoZSwgdCwgbiwgcikgPT4ge1xuXHRjb25zdCBpID0gbmV3IFNldChbLi4ubi5zcGxpdChcIixcIikgfHwgW25dXS5tYXAoKGEpID0+IGEudHJpbSgpKSksIGwgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoYSwgbykgPT4ge1xuXHRcdGZvciAoY29uc3QgZCBvZiBhKSBpZiAoZC50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGMgPSBBcnJheS5mcm9tKGQuYWRkZWROb2RlcykgfHwgW10sIHAgPSBBcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGMucHVzaCguLi5BcnJheS5mcm9tKGQuYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZikgPT4gQXJyYXkuZnJvbShmPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIHAucHVzaCguLi5BcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChmKSA9PiBBcnJheS5mcm9tKGY/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgWy4uLm5ldyBTZXQoYyldLmZpbHRlcigoZikgPT4gZj8ubWF0Y2hlcz8uKHQpKT8ubWFwPy4oKGYpID0+IHtcblx0XHRcdFx0aS5mb3JFYWNoKCh1KSA9PiB7XG5cdFx0XHRcdFx0cih7XG5cdFx0XHRcdFx0XHR0YXJnZXQ6IGYsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU6IHUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogZj8uZ2V0QXR0cmlidXRlPy4odSlcblx0XHRcdFx0XHR9LCBvKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgZC50YXJnZXQ/Lm1hdGNoZXM/Lih0KSAmJiBkLmF0dHJpYnV0ZU5hbWUgJiYgaS5oYXMoZC5hdHRyaWJ1dGVOYW1lKSAmJiByKGQsIG8pO1xuXHR9KTtcblx0cmV0dXJuIGwub2JzZXJ2ZShlID0gUHIoZSksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogITAsXG5cdFx0YXR0cmlidXRlczogITAsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uaV0sXG5cdFx0Y2hpbGRMaXN0OiAhMCxcblx0XHRzdWJ0cmVlOiAhMCxcblx0XHRjaGFyYWN0ZXJEYXRhOiAhMFxuXHR9KSwgWy4uLmUucXVlcnlTZWxlY3RvckFsbCh0KV0ubWFwKChhKSA9PiBpLmZvckVhY2goKG8pID0+IHIoe1xuXHRcdHRhcmdldDogYSxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBvLFxuXHRcdG9sZFZhbHVlOiBhPy5nZXRBdHRyaWJ1dGU/LihvKVxuXHR9LCBsKSkpLCBsO1xufTtcbnZhciB4YSA9IChlLCB0ID0gXCIqXCIsIG4gPSAociwgaSkgPT4ge30pID0+IHtcblx0Y29uc3QgciA9ICh1KSA9PiB7XG5cdFx0Y29uc3QgcyA9IEFycmF5LmZyb20odSB8fCBbXSkgfHwgW107XG5cdFx0cmV0dXJuIHMucHVzaCguLi5BcnJheS5mcm9tKHUgfHwgW10pLmZsYXRNYXAoKGgpID0+IEFycmF5LmZyb20oaD8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KHMpLnZhbHVlcygpKV0uZmlsdGVyKChoKSA9PiBoPy5tYXRjaGVzPy4odCkpO1xuXHR9O1xuXHRsZXQgaSA9IG51bGw7XG5cdGNvbnN0IGwgPSAodSkgPT4ge1xuXHRcdGNvbnN0IHMgPSBpPy5kZXJlZj8uKCksIGggPSByKHUuYWRkZWROb2RlcyksIG0gPSByKHUucmVtb3ZlZE5vZGVzKTtcblx0XHQoaC5sZW5ndGggPiAwIHx8IG0ubGVuZ3RoID4gMCkgJiYgbj8uKHtcblx0XHRcdHR5cGU6IHUudHlwZSxcblx0XHRcdHRhcmdldDogdS50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiB1LmF0dHJpYnV0ZU5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IHUuYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IHUubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogdS5vbGRWYWx1ZSxcblx0XHRcdHByZXZpb3VzU2libGluZzogdS5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzOiBoLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBtXG5cdFx0fSwgcyk7XG5cdH0sIGEgPSAodSkgPT4ge1xuXHRcdGwoe1xuXHRcdFx0YWRkZWROb2RlczogW3U/LnRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbdT8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogdT8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBvID0gKHUpID0+IHtcblx0XHRsKHtcblx0XHRcdGFkZGVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py50YXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IHU/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgZCA9ICh1KSA9PiB7XG5cdFx0bCh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbdT8udGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiB1Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIGMgPSB7XG5cdFx0cGFzc2l2ZTogITAsXG5cdFx0Y2FwdHVyZTogITFcblx0fTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikgJiYgdD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXZpc2libGVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZCwgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkLCBjKTtcblx0fSB9O1xuXHRjb25zdCBwID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHUsIHMpID0+IHtcblx0XHRmb3IgKGNvbnN0IGggb2YgdSkgaC50eXBlID09IFwiY2hpbGRMaXN0XCIgJiYgbChoKTtcblx0fSk7XG5cdGkgPSBuZXcgV2Vha1JlZihwKSwgKGU/LmVsZW1lbnQgPz8gZSkgaW5zdGFuY2VvZiBOb2RlICYmIHAub2JzZXJ2ZShlID0gUHIoZSksIHtcblx0XHRjaGlsZExpc3Q6ICEwLFxuXHRcdHN1YnRyZWU6ICEwXG5cdH0pO1xuXHRjb25zdCBmID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwodCkpO1xuXHRyZXR1cm4gZi5sZW5ndGggPiAwICYmIG4/Lih7XG5cdFx0YWRkZWROb2RlczogZixcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIHApLCBwO1xufTtcbnZhciB3YSA9IFwiRE9NXCI7XG52YXIgWHQgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSA6IG51bGw7XG5YdCAmJiAodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oWHQpLCBYdC5kYXRhc2V0Lm93bmVyID0gd2EpO1xudmFyIFB0ID0gdHlwZW9mIENTU1N0eWxlVmFsdWUgPCBcInVcIiAmJiB0eXBlb2YgQ1NTVW5pdFZhbHVlIDwgXCJ1XCI7XG52YXIgbGUgPSAoZSkgPT4gUHQgJiYgZSBpbnN0YW5jZW9mIENTU1N0eWxlVmFsdWU7XG52YXIgRCA9IChlKSA9PiBQdCAmJiBlIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xudmFyIGVlID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghKCFlIHx8ICF0KSkge1xuXHRcdGlmIChuID09IG51bGwpIHtcblx0XHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gXCJcIiAmJiBlLnJlbW92ZVByb3BlcnR5KHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRlLmdldFByb3BlcnR5VmFsdWUodCkgIT09IG4gJiYgZS5zZXRQcm9wZXJ0eSh0LCBuLCByKTtcblx0fVxufTtcbnZhciBTYSA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoIWUgfHwgIXQpIHJldHVybiBlO1xuXHRjb25zdCBpID0gY2FtZWxUb0tlYmFiKHQpLCBsID0gZS5zdHlsZSwgYSA9IGUuYXR0cmlidXRlU3R5bGVNYXAgPz8gZS5zdHlsZU1hcDtcblx0aWYgKCFQdCB8fCAhYSkgcmV0dXJuIFdyKGUsIHQsIG4sIHIpO1xuXHRsZXQgbyA9IGhhc1ZhbHVlKG4pICYmICEobGUobikgfHwgRChuKSkgPyBuPy52YWx1ZSA6IG47XG5cdGlmIChvID09IG51bGwpIHJldHVybiBhLmRlbGV0ZT8uKGkpLCBsICYmIGVlKGwsIGksIG51bGwsIHIpLCBlO1xuXHRpZiAobGUobykpIHtcblx0XHRjb25zdCBkID0gYS5nZXQoaSk7XG5cdFx0aWYgKEQobykgJiYgRChkKSkge1xuXHRcdFx0aWYgKGQudmFsdWUgPT09IG8udmFsdWUgJiYgZC51bml0ID09PSBvLnVuaXQpIHJldHVybiBlO1xuXHRcdH0gZWxzZSBpZiAoZCA9PT0gbykgcmV0dXJuIGU7XG5cdFx0cmV0dXJuIGEuc2V0KGksIG8pLCBlO1xuXHR9XG5cdGlmICh0eXBlb2YgbyA9PSBcIm51bWJlclwiKSBpZiAoQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0Y29uc3QgZCA9IENTUy5udW1iZXIobyksIGMgPSBhLmdldChpKTtcblx0XHRyZXR1cm4gRChjKSAmJiBjLnZhbHVlID09PSBkLnZhbHVlICYmIGMudW5pdCA9PT0gZC51bml0IHx8IGEuc2V0KGksIGQpLCBlO1xuXHR9IGVsc2UgcmV0dXJuIGVlKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG5cdGlmICh0eXBlb2YgbyA9PSBcInN0cmluZ1wiICYmICFsZShvKSkge1xuXHRcdGNvbnN0IGQgPSB0cnlTdHJpbmdBc051bWJlcihvKTtcblx0XHRpZiAodHlwZW9mIGQgPT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAhaS5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IGMgPSBDU1MubnVtYmVyKGQpLCBwID0gYS5nZXQoaSk7XG5cdFx0XHRyZXR1cm4gRChwKSAmJiBwLnZhbHVlID09PSBjLnZhbHVlICYmIHAudW5pdCA9PT0gYy51bml0IHx8IGEuc2V0KGksIGMpLCBlO1xuXHRcdH0gZWxzZSByZXR1cm4gZWUobCwgaSwgbywgciksIGU7XG5cdH1cblx0cmV0dXJuIGVlKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG59O1xudmFyIFdyID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBjYW1lbFRvS2ViYWIodCksIGwgPSBlLnN0eWxlO1xuXHRpZiAoIWwpIHJldHVybiBlO1xuXHRsZXQgYSA9IGhhc1ZhbHVlKG4pICYmICEobGUobikgfHwgRChuKSkgPyBuPy52YWx1ZSA6IG47XG5cdHJldHVybiB0eXBlb2YgYSA9PSBcInN0cmluZ1wiICYmICFsZShhKSAmJiAoYSA9IHRyeVN0cmluZ0FzTnVtYmVyKGEpID8/IGEpLCBhID09IG51bGwgPyAoZWUobCwgaSwgbnVsbCwgciksIGUpIDogKGxlKGEpLCBlZShsLCBpLCBTdHJpbmcoYSksIHIpLCBlKTtcbn07XG52YXIgQmUgPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IFB0ID8gU2EoZSwgdCwgbiwgcikgOiBXcihlLCB0LCBuLCByKTtcbnZhciBFYSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGphID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbmFtZWRTdG9yZU1hcHNcIik7XG52YXIgRW4gPSBnbG9iYWxUaGlzW2phXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBNYSA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBbLi4uZS5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChuPy5tYXA/LigoW3IsIGldKSA9PiBbciwgaT8uZ2V0Py4odCldKT8uZmlsdGVyPy4oKFtyLCBpXSkgPT4gISFpKSB8fCBbXSk7XG59O1xudmFyIHR0ID0gKGUpID0+ICh7XG5cdHN0b3JlU2V0OiBNYShFbiwgZSksXG5cdG1peGluU2V0OiBudD8uZ2V0Py4oZSksXG5cdGJlaGF2aW9yU2V0OiBFYT8uZ2V0Py4oZSlcbn0pO1xudmFyIENhID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBudCA9IGdsb2JhbFRoaXNbQ2FdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBWYSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgRWUgPSBnbG9iYWxUaGlzW1ZhXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgTGEgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpblJlZ2lzdHJ5XCIpO1xudmFyIGtlID0gZ2xvYmFsVGhpc1tMYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgQWEgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbk5hbWVzcGFjZVwiKTtcbnZhciBidCA9IGdsb2JhbFRoaXNbQWFdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBSciA9IChlLCB0KSA9PiB7XG5cdHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgKHQgPSBrZT8uZ2V0Py4odCkpO1xuXHRjb25zdCBuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKSwgciA9IG5ldyBTZXQoWy4uLm5dLm1hcCgoYSkgPT4ga2U/LmdldD8uKGEpKS5maWx0ZXIoKGEpID0+ICEhYSkpLCBpID0gbnQ/LmdldD8uKGUpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRFZT8uaGFzPy4odCkgfHwgRWU/LnNldD8uKHQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKSwgbnQ/Lmhhcz8uKGUpIHx8IG50Py5zZXQ/LihlLCBpKTtcblx0Y29uc3QgbCA9IG5ldyBXZWFrUmVmKGUpO1xuXHRpPy5oYXM/Lih0KSB8fCAoci5oYXModCkgfHwgdD8uZGlzY29ubmVjdD8uKGwsIHQsIHR0KGUpKSwgKHIuaGFzKHQpIHx8ICFFZT8uZ2V0Py4odCk/Lmhhcz8uKGUpKSAmJiAodD8uY29ubmVjdD8uKGwsIHQsIHR0KGUpKSwgbi5hZGQoYnQ/LmdldD8uKHQpKSwgaT8uYWRkPy4odCksIGU/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubl0uZmlsdGVyKChhKSA9PiAhIWEpLmpvaW4oXCIgXCIpKSksIEVlPy5nZXQ/Lih0KT8uYWRkPy4oZSkpLCBpPy5oYXM/Lih0KSAmJiAoci5oYXModCkgfHwgKGk/LmRlbGV0ZT8uKHQpLCB0Py5kaXNjb25uZWN0Py4obCwgdCwgdHQoZSkpKSk7XG59O1xudmFyIGpuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBOYSA9IChlID0gdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKGUpIHJldHVybiBqbj8uaGFzPy4oZSkgfHwgKGpuPy5hZGQ/LihlKSwgYmEoZSwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAodCkgPT4gTW4odC50YXJnZXQpKSwgeGEoZSwgXCJbZGF0YS1taXhpbl1cIiwgKHQpID0+IHtcblx0XHRmb3IgKGNvbnN0IG4gb2YgdC5hZGRlZE5vZGVzKSBuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgTW4obik7XG5cdH0pKSwgZTtcbn07XG52YXIgTW4gPSAoZSkgPT4ge1xuXHRjb25zdCB0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Wy4uLm5ldyBTZXQoWy4uLnRdLm1hcCgobikgPT4ga2U/LmdldD8uKG4pKS5maWx0ZXIoKG4pID0+ICEhbikpXS5tYXA/LigobikgPT4gUnIoZSwgbikpO1xufTtcbnZhciBUYSA9IChlLCB0KSA9PiB7XG5cdGUuZm9yRWFjaCgobikgPT4gdCA/IFJyKG4sIHQpIDogTW4obikpO1xufTtcbnZhciB6YSA9IChlKSA9PiB7XG5cdGZvciAoY29uc3QgdCBvZiBqbikgVGEodD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBlKTtcbn07XG52YXIga2EgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGUpID0+IHtcblx0a2U/LmRlbGV0ZT8uKGUpO1xufSk7XG52YXIgUGEgPSAoZSwgdCkgPT4ge1xuXHRpZiAoIWJ0Py5oYXM/Lih0KSkge1xuXHRcdGNvbnN0IG4gPSBlPy50cmltPy4oKTtcblx0XHRuICYmIChidD8uc2V0Py4odCwgbiksIGtlPy5zZXQ/LihuLCB0KSwga2E/LnJlZ2lzdGVyPy4odCwgbiksIHphKHQpKTtcblx0fVxufTtcbk5hKHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciBZbiA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoZSA9IG51bGwpIHtcblx0XHRlICYmIFBhKGUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHN0b3JlRm9yRWxlbWVudChlKSB7XG5cdFx0cmV0dXJuIEVuLmdldCh0aGlzLm5hbWUgfHwgXCJcIik/LmdldD8uKGUpO1xuXHR9XG5cdHJlbGF0ZWRGb3JFbGVtZW50KGUpIHtcblx0XHRyZXR1cm4gdHQoZSk7XG5cdH1cblx0Z2V0IGVsZW1lbnRzKCkge1xuXHRcdHJldHVybiBFZT8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIEVuPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIGJ0Py5nZXQ/Lih0aGlzKTtcblx0fVxufTtcbnZhciBXYSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgYnIgPSBnbG9iYWxUaGlzW1dhXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1mcmVxXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBpeGVsLXJhdGlvXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteFwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteVwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9XG5dLmZvckVhY2goKGUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgPiBcInVcIiB8fCB0eXBlb2YgQ1NTPy5yZWdpc3RlclByb3BlcnR5ICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCB0ID0gU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoISghdCB8fCBici5oYXModCkpKSB0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KGUpO1xuXHR9IGNhdGNoIChuKSB7XG5cdFx0U3RyaW5nKG4/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSAhPT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIiAmJiBjb25zb2xlLndhcm4obik7XG5cdH0gZmluYWxseSB7XG5cdFx0YnIuYWRkKHQpO1xuXHR9XG59KTtcbnR5cGVvZiBkb2N1bWVudCA8IFwidVwiICYmIGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ7XG52YXIgUmEgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA8IFwidVwiICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdGZvciAoOzspIFJhLmZvckVhY2goKGUpID0+IGU/LigpKSwgYXdhaXQgbmV3IFByb21pc2UoKGUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShlKSk7XG59KTtcbnZhciAkYSA9IHt9O1xuZnVuY3Rpb24gQShlLCB0LCBuLCByID0gJGEpIHtcblx0ZT8uYWRkRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xuXHRjb25zdCBpID0gdHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgIWU/LmRlcmVmID8gbmV3IFdlYWtSZWYoZSkgOiBlO1xuXHRyZXR1cm4gKCkgPT4gaT8uZGVyZWY/LigpPy5yZW1vdmVFdmVudExpc3RlbmVyPy4odCwgbiwgcik7XG59XG52YXIgRmEgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xuZ2xvYmFsVGhpc1tGYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHFhID0gKCkgPT4ge1xuXHRjb25zdCBlID0gdHlwZW9mIG1hdGNoTWVkaWEgPCBcInVcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiAhMSwgdCA9IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGwsIG4gPSB0ID8ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt0LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3QuaGVpZ2h0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dC5vZmZzZXRMZWZ0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt0Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh0LnNjYWxlID8/IDEpXG5cdH0gOiB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiA8IFwidVwiKSB7XG5cdFx0Y29uc3QgciA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIiwgaSA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBlID8gaSA6IHIsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGUgPyByIDogaSxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLm5cblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi5uXG5cdH07XG59O1xucWEoKTtcbm5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIE9hID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xuZ2xvYmFsVGhpc1tPYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIEhhID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Db250ZW50T2JzZXJ2ZVwiKTtcbmdsb2JhbFRoaXNbSGFdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciAkciA9IChlKSA9PiAodHlwZW9mIGU/LmN1cnJlbnQgPT0gXCJvYmplY3RcIiAmJiAoZSA9IGU/LmVsZW1lbnQgPz8gZT8uY3VycmVudCA/PyAodHlwZW9mIGU/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGU/LnNlbGYgOiBudWxsKSA/PyBlKSwgZSk7XG52YXIgSWEgPSAoZSwgdCwgbiwgcikgPT4ge1xuXHRjb25zdCBpID0gbmV3IFNldChbLi4ubi5zcGxpdChcIixcIikgfHwgW25dXS5tYXAoKGEpID0+IGEudHJpbSgpKSksIGwgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoYSwgbykgPT4ge1xuXHRcdGZvciAoY29uc3QgZCBvZiBhKSBpZiAoZC50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGMgPSBBcnJheS5mcm9tKGQuYWRkZWROb2RlcykgfHwgW10sIHAgPSBBcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGMucHVzaCguLi5BcnJheS5mcm9tKGQuYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZikgPT4gQXJyYXkuZnJvbShmPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIHAucHVzaCguLi5BcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChmKSA9PiBBcnJheS5mcm9tKGY/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgWy4uLm5ldyBTZXQoYyldLmZpbHRlcigoZikgPT4gZj8ubWF0Y2hlcz8uKHQpKT8ubWFwPy4oKGYpID0+IHtcblx0XHRcdFx0aS5mb3JFYWNoKCh1KSA9PiB7XG5cdFx0XHRcdFx0cih7XG5cdFx0XHRcdFx0XHR0YXJnZXQ6IGYsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU6IHUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogZj8uZ2V0QXR0cmlidXRlPy4odSlcblx0XHRcdFx0XHR9LCBvKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgZC50YXJnZXQ/Lm1hdGNoZXM/Lih0KSAmJiBkLmF0dHJpYnV0ZU5hbWUgJiYgaS5oYXMoZC5hdHRyaWJ1dGVOYW1lKSAmJiByKGQsIG8pO1xuXHR9KTtcblx0cmV0dXJuIGwub2JzZXJ2ZShlID0gJHIoZSksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogITAsXG5cdFx0YXR0cmlidXRlczogITAsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uaV0sXG5cdFx0Y2hpbGRMaXN0OiAhMCxcblx0XHRzdWJ0cmVlOiAhMCxcblx0XHRjaGFyYWN0ZXJEYXRhOiAhMFxuXHR9KSwgWy4uLmUucXVlcnlTZWxlY3RvckFsbCh0KV0ubWFwKChhKSA9PiBpLmZvckVhY2goKG8pID0+IHIoe1xuXHRcdHRhcmdldDogYSxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBvLFxuXHRcdG9sZFZhbHVlOiBhPy5nZXRBdHRyaWJ1dGU/LihvKVxuXHR9LCBsKSkpLCBsO1xufTtcbnZhciBCYSA9IChlLCB0ID0gXCIqXCIsIG4gPSAociwgaSkgPT4ge30pID0+IHtcblx0Y29uc3QgciA9ICh1KSA9PiB7XG5cdFx0Y29uc3QgcyA9IEFycmF5LmZyb20odSB8fCBbXSkgfHwgW107XG5cdFx0cmV0dXJuIHMucHVzaCguLi5BcnJheS5mcm9tKHUgfHwgW10pLmZsYXRNYXAoKGgpID0+IEFycmF5LmZyb20oaD8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KHMpLnZhbHVlcygpKV0uZmlsdGVyKChoKSA9PiBoPy5tYXRjaGVzPy4odCkpO1xuXHR9O1xuXHRsZXQgaSA9IG51bGw7XG5cdGNvbnN0IGwgPSAodSkgPT4ge1xuXHRcdGNvbnN0IHMgPSBpPy5kZXJlZj8uKCksIGggPSByKHUuYWRkZWROb2RlcyksIG0gPSByKHUucmVtb3ZlZE5vZGVzKTtcblx0XHQoaC5sZW5ndGggPiAwIHx8IG0ubGVuZ3RoID4gMCkgJiYgbj8uKHtcblx0XHRcdHR5cGU6IHUudHlwZSxcblx0XHRcdHRhcmdldDogdS50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiB1LmF0dHJpYnV0ZU5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IHUuYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IHUubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogdS5vbGRWYWx1ZSxcblx0XHRcdHByZXZpb3VzU2libGluZzogdS5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzOiBoLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBtXG5cdFx0fSwgcyk7XG5cdH0sIGEgPSAodSkgPT4ge1xuXHRcdGwoe1xuXHRcdFx0YWRkZWROb2RlczogW3U/LnRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbdT8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogdT8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBvID0gKHUpID0+IHtcblx0XHRsKHtcblx0XHRcdGFkZGVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py50YXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IHU/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgZCA9ICh1KSA9PiB7XG5cdFx0bCh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbdT8udGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiB1Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIGMgPSB7XG5cdFx0cGFzc2l2ZTogITAsXG5cdFx0Y2FwdHVyZTogITFcblx0fTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikgJiYgdD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXZpc2libGVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZCwgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkLCBjKTtcblx0fSB9O1xuXHRjb25zdCBwID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHUsIHMpID0+IHtcblx0XHRmb3IgKGNvbnN0IGggb2YgdSkgaC50eXBlID09IFwiY2hpbGRMaXN0XCIgJiYgbChoKTtcblx0fSk7XG5cdGkgPSBuZXcgV2Vha1JlZihwKSwgKGU/LmVsZW1lbnQgPz8gZSkgaW5zdGFuY2VvZiBOb2RlICYmIHAub2JzZXJ2ZShlID0gJHIoZSksIHtcblx0XHRjaGlsZExpc3Q6ICEwLFxuXHRcdHN1YnRyZWU6ICEwXG5cdH0pO1xuXHRjb25zdCBmID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwodCkpO1xuXHRyZXR1cm4gZi5sZW5ndGggPiAwICYmIG4/Lih7XG5cdFx0YWRkZWROb2RlczogZixcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIHApLCBwO1xufTtcbnZhciBYYSA9IFwiRE9NXCI7XG52YXIgWXQgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSA6IG51bGw7XG5ZdCAmJiAodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oWXQpLCBZdC5kYXRhc2V0Lm93bmVyID0gWGEpO1xudmFyIFd0ID0gdHlwZW9mIENTU1N0eWxlVmFsdWUgPCBcInVcIiAmJiB0eXBlb2YgQ1NTVW5pdFZhbHVlIDwgXCJ1XCI7XG52YXIgdWUgPSAoZSkgPT4gV3QgJiYgZSBpbnN0YW5jZW9mIENTU1N0eWxlVmFsdWU7XG52YXIgVSA9IChlKSA9PiBXdCAmJiBlIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xudmFyIHRlID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghKCFlIHx8ICF0KSkge1xuXHRcdGlmIChuID09IG51bGwpIHtcblx0XHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gXCJcIiAmJiBlLnJlbW92ZVByb3BlcnR5KHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRlLmdldFByb3BlcnR5VmFsdWUodCkgIT09IG4gJiYgZS5zZXRQcm9wZXJ0eSh0LCBuLCByKTtcblx0fVxufTtcbnZhciBZYSA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoIWUgfHwgIXQpIHJldHVybiBlO1xuXHRjb25zdCBpID0gY2FtZWxUb0tlYmFiKHQpLCBsID0gZS5zdHlsZSwgYSA9IGUuYXR0cmlidXRlU3R5bGVNYXAgPz8gZS5zdHlsZU1hcDtcblx0aWYgKCFXdCB8fCAhYSkgcmV0dXJuIEZyKGUsIHQsIG4sIHIpO1xuXHRsZXQgbyA9IGhhc1ZhbHVlKG4pICYmICEodWUobikgfHwgVShuKSkgPyBuPy52YWx1ZSA6IG47XG5cdGlmIChvID09IG51bGwpIHJldHVybiBhLmRlbGV0ZT8uKGkpLCBsICYmIHRlKGwsIGksIG51bGwsIHIpLCBlO1xuXHRpZiAodWUobykpIHtcblx0XHRjb25zdCBkID0gYS5nZXQoaSk7XG5cdFx0aWYgKFUobykgJiYgVShkKSkge1xuXHRcdFx0aWYgKGQudmFsdWUgPT09IG8udmFsdWUgJiYgZC51bml0ID09PSBvLnVuaXQpIHJldHVybiBlO1xuXHRcdH0gZWxzZSBpZiAoZCA9PT0gbykgcmV0dXJuIGU7XG5cdFx0cmV0dXJuIGEuc2V0KGksIG8pLCBlO1xuXHR9XG5cdGlmICh0eXBlb2YgbyA9PSBcIm51bWJlclwiKSBpZiAoQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0Y29uc3QgZCA9IENTUy5udW1iZXIobyksIGMgPSBhLmdldChpKTtcblx0XHRyZXR1cm4gVShjKSAmJiBjLnZhbHVlID09PSBkLnZhbHVlICYmIGMudW5pdCA9PT0gZC51bml0IHx8IGEuc2V0KGksIGQpLCBlO1xuXHR9IGVsc2UgcmV0dXJuIHRlKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG5cdGlmICh0eXBlb2YgbyA9PSBcInN0cmluZ1wiICYmICF1ZShvKSkge1xuXHRcdGNvbnN0IGQgPSB0cnlTdHJpbmdBc051bWJlcihvKTtcblx0XHRpZiAodHlwZW9mIGQgPT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAhaS5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IGMgPSBDU1MubnVtYmVyKGQpLCBwID0gYS5nZXQoaSk7XG5cdFx0XHRyZXR1cm4gVShwKSAmJiBwLnZhbHVlID09PSBjLnZhbHVlICYmIHAudW5pdCA9PT0gYy51bml0IHx8IGEuc2V0KGksIGMpLCBlO1xuXHRcdH0gZWxzZSByZXR1cm4gdGUobCwgaSwgbywgciksIGU7XG5cdH1cblx0cmV0dXJuIHRlKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG59O1xudmFyIEZyID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBjYW1lbFRvS2ViYWIodCksIGwgPSBlLnN0eWxlO1xuXHRpZiAoIWwpIHJldHVybiBlO1xuXHRsZXQgYSA9IGhhc1ZhbHVlKG4pICYmICEodWUobikgfHwgVShuKSkgPyBuPy52YWx1ZSA6IG47XG5cdHJldHVybiB0eXBlb2YgYSA9PSBcInN0cmluZ1wiICYmICF1ZShhKSAmJiAoYSA9IHRyeVN0cmluZ0FzTnVtYmVyKGEpID8/IGEpLCBhID09IG51bGwgPyAodGUobCwgaSwgbnVsbCwgciksIGUpIDogKHVlKGEpLCB0ZShsLCBpLCBTdHJpbmcoYSksIHIpLCBlKTtcbn07XG52YXIgWGUgPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IFd0ID8gWWEoZSwgdCwgbiwgcikgOiBGcihlLCB0LCBuLCByKTtcbnZhciBfYSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIERhID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbmFtZWRTdG9yZU1hcHNcIik7XG52YXIgQ24gPSBnbG9iYWxUaGlzW0RhXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBVYSA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBbLi4uZS5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChuPy5tYXA/LigoW3IsIGldKSA9PiBbciwgaT8uZ2V0Py4odCldKT8uZmlsdGVyPy4oKFtyLCBpXSkgPT4gISFpKSB8fCBbXSk7XG59O1xudmFyIHJ0ID0gKGUpID0+ICh7XG5cdHN0b3JlU2V0OiBVYShDbiwgZSksXG5cdG1peGluU2V0OiBpdD8uZ2V0Py4oZSksXG5cdGJlaGF2aW9yU2V0OiBfYT8uZ2V0Py4oZSlcbn0pO1xudmFyIFphID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBpdCA9IGdsb2JhbFRoaXNbWmFdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBHYSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgamUgPSBnbG9iYWxUaGlzW0dhXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgSmEgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpblJlZ2lzdHJ5XCIpO1xudmFyIFBlID0gZ2xvYmFsVGhpc1tKYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgS2EgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbk5hbWVzcGFjZVwiKTtcbnZhciB4dCA9IGdsb2JhbFRoaXNbS2FdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBxciA9IChlLCB0KSA9PiB7XG5cdHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgKHQgPSBQZT8uZ2V0Py4odCkpO1xuXHRjb25zdCBuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKSwgciA9IG5ldyBTZXQoWy4uLm5dLm1hcCgoYSkgPT4gUGU/LmdldD8uKGEpKS5maWx0ZXIoKGEpID0+ICEhYSkpLCBpID0gaXQ/LmdldD8uKGUpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRqZT8uaGFzPy4odCkgfHwgamU/LnNldD8uKHQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKSwgaXQ/Lmhhcz8uKGUpIHx8IGl0Py5zZXQ/LihlLCBpKTtcblx0Y29uc3QgbCA9IG5ldyBXZWFrUmVmKGUpO1xuXHRpPy5oYXM/Lih0KSB8fCAoci5oYXModCkgfHwgdD8uZGlzY29ubmVjdD8uKGwsIHQsIHJ0KGUpKSwgKHIuaGFzKHQpIHx8ICFqZT8uZ2V0Py4odCk/Lmhhcz8uKGUpKSAmJiAodD8uY29ubmVjdD8uKGwsIHQsIHJ0KGUpKSwgbi5hZGQoeHQ/LmdldD8uKHQpKSwgaT8uYWRkPy4odCksIGU/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubl0uZmlsdGVyKChhKSA9PiAhIWEpLmpvaW4oXCIgXCIpKSksIGplPy5nZXQ/Lih0KT8uYWRkPy4oZSkpLCBpPy5oYXM/Lih0KSAmJiAoci5oYXModCkgfHwgKGk/LmRlbGV0ZT8uKHQpLCB0Py5kaXNjb25uZWN0Py4obCwgdCwgcnQoZSkpKSk7XG59O1xudmFyIFZuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBRYSA9IChlID0gdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKGUpIHJldHVybiBWbj8uaGFzPy4oZSkgfHwgKFZuPy5hZGQ/LihlKSwgSWEoZSwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAodCkgPT4gTG4odC50YXJnZXQpKSwgQmEoZSwgXCJbZGF0YS1taXhpbl1cIiwgKHQpID0+IHtcblx0XHRmb3IgKGNvbnN0IG4gb2YgdC5hZGRlZE5vZGVzKSBuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgTG4obik7XG5cdH0pKSwgZTtcbn07XG52YXIgTG4gPSAoZSkgPT4ge1xuXHRjb25zdCB0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Wy4uLm5ldyBTZXQoWy4uLnRdLm1hcCgobikgPT4gUGU/LmdldD8uKG4pKS5maWx0ZXIoKG4pID0+ICEhbikpXS5tYXA/LigobikgPT4gcXIoZSwgbikpO1xufTtcbnZhciBlbyA9IChlLCB0KSA9PiB7XG5cdGUuZm9yRWFjaCgobikgPT4gdCA/IHFyKG4sIHQpIDogTG4obikpO1xufTtcbnZhciB0byA9IChlKSA9PiB7XG5cdGZvciAoY29uc3QgdCBvZiBWbikgZW8odD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBlKTtcbn07XG52YXIgbm8gPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGUpID0+IHtcblx0UGU/LmRlbGV0ZT8uKGUpO1xufSk7XG52YXIgcm8gPSAoZSwgdCkgPT4ge1xuXHRpZiAoIXh0Py5oYXM/Lih0KSkge1xuXHRcdGNvbnN0IG4gPSBlPy50cmltPy4oKTtcblx0XHRuICYmICh4dD8uc2V0Py4odCwgbiksIFBlPy5zZXQ/LihuLCB0KSwgbm8/LnJlZ2lzdGVyPy4odCwgbiksIHRvKHQpKTtcblx0fVxufTtcblFhKHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciBfbiA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoZSA9IG51bGwpIHtcblx0XHRlICYmIHJvKGUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHN0b3JlRm9yRWxlbWVudChlKSB7XG5cdFx0cmV0dXJuIENuLmdldCh0aGlzLm5hbWUgfHwgXCJcIik/LmdldD8uKGUpO1xuXHR9XG5cdHJlbGF0ZWRGb3JFbGVtZW50KGUpIHtcblx0XHRyZXR1cm4gcnQoZSk7XG5cdH1cblx0Z2V0IGVsZW1lbnRzKCkge1xuXHRcdHJldHVybiBqZT8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIENuPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIHh0Py5nZXQ/Lih0aGlzKTtcblx0fVxufTtcbnZhciBpbyA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgeHIgPSBnbG9iYWxUaGlzW2lvXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1mcmVxXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBpeGVsLXJhdGlvXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteFwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteVwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9XG5dLmZvckVhY2goKGUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgPiBcInVcIiB8fCB0eXBlb2YgQ1NTPy5yZWdpc3RlclByb3BlcnR5ICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCB0ID0gU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoISghdCB8fCB4ci5oYXModCkpKSB0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KGUpO1xuXHR9IGNhdGNoIChuKSB7XG5cdFx0U3RyaW5nKG4/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSAhPT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIiAmJiBjb25zb2xlLndhcm4obik7XG5cdH0gZmluYWxseSB7XG5cdFx0eHIuYWRkKHQpO1xuXHR9XG59KTtcbnR5cGVvZiBkb2N1bWVudCA8IFwidVwiICYmIGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ7XG52YXIgYW8gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA8IFwidVwiICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdGZvciAoOzspIGFvLmZvckVhY2goKGUpID0+IGU/LigpKSwgYXdhaXQgbmV3IFByb21pc2UoKGUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShlKSk7XG59KTtcbnZhciBvbyA9IHt9O1xuZnVuY3Rpb24gTihlLCB0LCBuLCByID0gb28pIHtcblx0ZT8uYWRkRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xuXHRjb25zdCBpID0gdHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgIWU/LmRlcmVmID8gbmV3IFdlYWtSZWYoZSkgOiBlO1xuXHRyZXR1cm4gKCkgPT4gaT8uZGVyZWY/LigpPy5yZW1vdmVFdmVudExpc3RlbmVyPy4odCwgbiwgcik7XG59XG52YXIgc28gPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xuZ2xvYmFsVGhpc1tzb10gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGxvID0gKCkgPT4ge1xuXHRjb25zdCBlID0gdHlwZW9mIG1hdGNoTWVkaWEgPCBcInVcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiAhMSwgdCA9IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGwsIG4gPSB0ID8ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt0LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3QuaGVpZ2h0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dC5vZmZzZXRMZWZ0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt0Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh0LnNjYWxlID8/IDEpXG5cdH0gOiB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiA8IFwidVwiKSB7XG5cdFx0Y29uc3QgciA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIiwgaSA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBlID8gaSA6IHIsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGUgPyByIDogaSxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLm5cblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi5uXG5cdH07XG59O1xubG8oKTtcbm5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIHVvID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xuZ2xvYmFsVGhpc1t1b10gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGNvID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Db250ZW50T2JzZXJ2ZVwiKTtcbmdsb2JhbFRoaXNbY29dID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBPciA9IChlKSA9PiAodHlwZW9mIGU/LmN1cnJlbnQgPT0gXCJvYmplY3RcIiAmJiAoZSA9IGU/LmVsZW1lbnQgPz8gZT8uY3VycmVudCA/PyAodHlwZW9mIGU/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGU/LnNlbGYgOiBudWxsKSA/PyBlKSwgZSk7XG52YXIgaG8gPSAoZSwgdCwgbiwgcikgPT4ge1xuXHRjb25zdCBpID0gbmV3IFNldChbLi4ubi5zcGxpdChcIixcIikgfHwgW25dXS5tYXAoKGEpID0+IGEudHJpbSgpKSksIGwgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoYSwgbykgPT4ge1xuXHRcdGZvciAoY29uc3QgZCBvZiBhKSBpZiAoZC50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGMgPSBBcnJheS5mcm9tKGQuYWRkZWROb2RlcykgfHwgW10sIHAgPSBBcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGMucHVzaCguLi5BcnJheS5mcm9tKGQuYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZikgPT4gQXJyYXkuZnJvbShmPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIHAucHVzaCguLi5BcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChmKSA9PiBBcnJheS5mcm9tKGY/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgWy4uLm5ldyBTZXQoYyldLmZpbHRlcigoZikgPT4gZj8ubWF0Y2hlcz8uKHQpKT8ubWFwPy4oKGYpID0+IHtcblx0XHRcdFx0aS5mb3JFYWNoKCh1KSA9PiB7XG5cdFx0XHRcdFx0cih7XG5cdFx0XHRcdFx0XHR0YXJnZXQ6IGYsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU6IHUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogZj8uZ2V0QXR0cmlidXRlPy4odSlcblx0XHRcdFx0XHR9LCBvKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgZC50YXJnZXQ/Lm1hdGNoZXM/Lih0KSAmJiBkLmF0dHJpYnV0ZU5hbWUgJiYgaS5oYXMoZC5hdHRyaWJ1dGVOYW1lKSAmJiByKGQsIG8pO1xuXHR9KTtcblx0cmV0dXJuIGwub2JzZXJ2ZShlID0gT3IoZSksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogITAsXG5cdFx0YXR0cmlidXRlczogITAsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uaV0sXG5cdFx0Y2hpbGRMaXN0OiAhMCxcblx0XHRzdWJ0cmVlOiAhMCxcblx0XHRjaGFyYWN0ZXJEYXRhOiAhMFxuXHR9KSwgWy4uLmUucXVlcnlTZWxlY3RvckFsbCh0KV0ubWFwKChhKSA9PiBpLmZvckVhY2goKG8pID0+IHIoe1xuXHRcdHRhcmdldDogYSxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBvLFxuXHRcdG9sZFZhbHVlOiBhPy5nZXRBdHRyaWJ1dGU/LihvKVxuXHR9LCBsKSkpLCBsO1xufTtcbnZhciBwbyA9IChlLCB0ID0gXCIqXCIsIG4gPSAociwgaSkgPT4ge30pID0+IHtcblx0Y29uc3QgciA9ICh1KSA9PiB7XG5cdFx0Y29uc3QgcyA9IEFycmF5LmZyb20odSB8fCBbXSkgfHwgW107XG5cdFx0cmV0dXJuIHMucHVzaCguLi5BcnJheS5mcm9tKHUgfHwgW10pLmZsYXRNYXAoKGgpID0+IEFycmF5LmZyb20oaD8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KHMpLnZhbHVlcygpKV0uZmlsdGVyKChoKSA9PiBoPy5tYXRjaGVzPy4odCkpO1xuXHR9O1xuXHRsZXQgaSA9IG51bGw7XG5cdGNvbnN0IGwgPSAodSkgPT4ge1xuXHRcdGNvbnN0IHMgPSBpPy5kZXJlZj8uKCksIGggPSByKHUuYWRkZWROb2RlcyksIG0gPSByKHUucmVtb3ZlZE5vZGVzKTtcblx0XHQoaC5sZW5ndGggPiAwIHx8IG0ubGVuZ3RoID4gMCkgJiYgbj8uKHtcblx0XHRcdHR5cGU6IHUudHlwZSxcblx0XHRcdHRhcmdldDogdS50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiB1LmF0dHJpYnV0ZU5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IHUuYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IHUubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogdS5vbGRWYWx1ZSxcblx0XHRcdHByZXZpb3VzU2libGluZzogdS5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzOiBoLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBtXG5cdFx0fSwgcyk7XG5cdH0sIGEgPSAodSkgPT4ge1xuXHRcdGwoe1xuXHRcdFx0YWRkZWROb2RlczogW3U/LnRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbdT8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogdT8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBvID0gKHUpID0+IHtcblx0XHRsKHtcblx0XHRcdGFkZGVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py50YXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IHU/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgZCA9ICh1KSA9PiB7XG5cdFx0bCh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbdT8udGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiB1Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIGMgPSB7XG5cdFx0cGFzc2l2ZTogITAsXG5cdFx0Y2FwdHVyZTogITFcblx0fTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikgJiYgdD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXZpc2libGVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZCwgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkLCBjKTtcblx0fSB9O1xuXHRjb25zdCBwID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHUsIHMpID0+IHtcblx0XHRmb3IgKGNvbnN0IGggb2YgdSkgaC50eXBlID09IFwiY2hpbGRMaXN0XCIgJiYgbChoKTtcblx0fSk7XG5cdGkgPSBuZXcgV2Vha1JlZihwKSwgKGU/LmVsZW1lbnQgPz8gZSkgaW5zdGFuY2VvZiBOb2RlICYmIHAub2JzZXJ2ZShlID0gT3IoZSksIHtcblx0XHRjaGlsZExpc3Q6ICEwLFxuXHRcdHN1YnRyZWU6ICEwXG5cdH0pO1xuXHRjb25zdCBmID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwodCkpO1xuXHRyZXR1cm4gZi5sZW5ndGggPiAwICYmIG4/Lih7XG5cdFx0YWRkZWROb2RlczogZixcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIHApLCBwO1xufTtcbnZhciBmbyA9IFwiRE9NXCI7XG52YXIgX3QgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSA6IG51bGw7XG5fdCAmJiAodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oX3QpLCBfdC5kYXRhc2V0Lm93bmVyID0gZm8pO1xudmFyIFJ0ID0gdHlwZW9mIENTU1N0eWxlVmFsdWUgPCBcInVcIiAmJiB0eXBlb2YgQ1NTVW5pdFZhbHVlIDwgXCJ1XCI7XG52YXIgY2UgPSAoZSkgPT4gUnQgJiYgZSBpbnN0YW5jZW9mIENTU1N0eWxlVmFsdWU7XG52YXIgWiA9IChlKSA9PiBSdCAmJiBlIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xudmFyIG5lID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghKCFlIHx8ICF0KSkge1xuXHRcdGlmIChuID09IG51bGwpIHtcblx0XHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gXCJcIiAmJiBlLnJlbW92ZVByb3BlcnR5KHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRlLmdldFByb3BlcnR5VmFsdWUodCkgIT09IG4gJiYgZS5zZXRQcm9wZXJ0eSh0LCBuLCByKTtcblx0fVxufTtcbnZhciBtbyA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoIWUgfHwgIXQpIHJldHVybiBlO1xuXHRjb25zdCBpID0gY2FtZWxUb0tlYmFiKHQpLCBsID0gZS5zdHlsZSwgYSA9IGUuYXR0cmlidXRlU3R5bGVNYXAgPz8gZS5zdHlsZU1hcDtcblx0aWYgKCFSdCB8fCAhYSkgcmV0dXJuIEhyKGUsIHQsIG4sIHIpO1xuXHRsZXQgbyA9IGhhc1ZhbHVlKG4pICYmICEoY2UobikgfHwgWihuKSkgPyBuPy52YWx1ZSA6IG47XG5cdGlmIChvID09IG51bGwpIHJldHVybiBhLmRlbGV0ZT8uKGkpLCBsICYmIG5lKGwsIGksIG51bGwsIHIpLCBlO1xuXHRpZiAoY2UobykpIHtcblx0XHRjb25zdCBkID0gYS5nZXQoaSk7XG5cdFx0aWYgKFoobykgJiYgWihkKSkge1xuXHRcdFx0aWYgKGQudmFsdWUgPT09IG8udmFsdWUgJiYgZC51bml0ID09PSBvLnVuaXQpIHJldHVybiBlO1xuXHRcdH0gZWxzZSBpZiAoZCA9PT0gbykgcmV0dXJuIGU7XG5cdFx0cmV0dXJuIGEuc2V0KGksIG8pLCBlO1xuXHR9XG5cdGlmICh0eXBlb2YgbyA9PSBcIm51bWJlclwiKSBpZiAoQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0Y29uc3QgZCA9IENTUy5udW1iZXIobyksIGMgPSBhLmdldChpKTtcblx0XHRyZXR1cm4gWihjKSAmJiBjLnZhbHVlID09PSBkLnZhbHVlICYmIGMudW5pdCA9PT0gZC51bml0IHx8IGEuc2V0KGksIGQpLCBlO1xuXHR9IGVsc2UgcmV0dXJuIG5lKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG5cdGlmICh0eXBlb2YgbyA9PSBcInN0cmluZ1wiICYmICFjZShvKSkge1xuXHRcdGNvbnN0IGQgPSB0cnlTdHJpbmdBc051bWJlcihvKTtcblx0XHRpZiAodHlwZW9mIGQgPT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAhaS5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IGMgPSBDU1MubnVtYmVyKGQpLCBwID0gYS5nZXQoaSk7XG5cdFx0XHRyZXR1cm4gWihwKSAmJiBwLnZhbHVlID09PSBjLnZhbHVlICYmIHAudW5pdCA9PT0gYy51bml0IHx8IGEuc2V0KGksIGMpLCBlO1xuXHRcdH0gZWxzZSByZXR1cm4gbmUobCwgaSwgbywgciksIGU7XG5cdH1cblx0cmV0dXJuIG5lKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG59O1xudmFyIEhyID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBjYW1lbFRvS2ViYWIodCksIGwgPSBlLnN0eWxlO1xuXHRpZiAoIWwpIHJldHVybiBlO1xuXHRsZXQgYSA9IGhhc1ZhbHVlKG4pICYmICEoY2UobikgfHwgWihuKSkgPyBuPy52YWx1ZSA6IG47XG5cdHJldHVybiB0eXBlb2YgYSA9PSBcInN0cmluZ1wiICYmICFjZShhKSAmJiAoYSA9IHRyeVN0cmluZ0FzTnVtYmVyKGEpID8/IGEpLCBhID09IG51bGwgPyAobmUobCwgaSwgbnVsbCwgciksIGUpIDogKGNlKGEpLCBuZShsLCBpLCBTdHJpbmcoYSksIHIpLCBlKTtcbn07XG52YXIgWWUgPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IFJ0ID8gbW8oZSwgdCwgbiwgcikgOiBIcihlLCB0LCBuLCByKTtcbnZhciB2byA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGdvID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbmFtZWRTdG9yZU1hcHNcIik7XG52YXIgQW4gPSBnbG9iYWxUaGlzW2dvXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciB5byA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBbLi4uZS5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChuPy5tYXA/LigoW3IsIGldKSA9PiBbciwgaT8uZ2V0Py4odCldKT8uZmlsdGVyPy4oKFtyLCBpXSkgPT4gISFpKSB8fCBbXSk7XG59O1xudmFyIGF0ID0gKGUpID0+ICh7XG5cdHN0b3JlU2V0OiB5byhBbiwgZSksXG5cdG1peGluU2V0OiBvdD8uZ2V0Py4oZSksXG5cdGJlaGF2aW9yU2V0OiB2bz8uZ2V0Py4oZSlcbn0pO1xudmFyIGJvID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBvdCA9IGdsb2JhbFRoaXNbYm9dID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB4byA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgTWUgPSBnbG9iYWxUaGlzW3hvXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgd28gPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpblJlZ2lzdHJ5XCIpO1xudmFyIFdlID0gZ2xvYmFsVGhpc1t3b10gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgU28gPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbk5hbWVzcGFjZVwiKTtcbnZhciB3dCA9IGdsb2JhbFRoaXNbU29dID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBJciA9IChlLCB0KSA9PiB7XG5cdHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgKHQgPSBXZT8uZ2V0Py4odCkpO1xuXHRjb25zdCBuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKSwgciA9IG5ldyBTZXQoWy4uLm5dLm1hcCgoYSkgPT4gV2U/LmdldD8uKGEpKS5maWx0ZXIoKGEpID0+ICEhYSkpLCBpID0gb3Q/LmdldD8uKGUpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRNZT8uaGFzPy4odCkgfHwgTWU/LnNldD8uKHQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKSwgb3Q/Lmhhcz8uKGUpIHx8IG90Py5zZXQ/LihlLCBpKTtcblx0Y29uc3QgbCA9IG5ldyBXZWFrUmVmKGUpO1xuXHRpPy5oYXM/Lih0KSB8fCAoci5oYXModCkgfHwgdD8uZGlzY29ubmVjdD8uKGwsIHQsIGF0KGUpKSwgKHIuaGFzKHQpIHx8ICFNZT8uZ2V0Py4odCk/Lmhhcz8uKGUpKSAmJiAodD8uY29ubmVjdD8uKGwsIHQsIGF0KGUpKSwgbi5hZGQod3Q/LmdldD8uKHQpKSwgaT8uYWRkPy4odCksIGU/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubl0uZmlsdGVyKChhKSA9PiAhIWEpLmpvaW4oXCIgXCIpKSksIE1lPy5nZXQ/Lih0KT8uYWRkPy4oZSkpLCBpPy5oYXM/Lih0KSAmJiAoci5oYXModCkgfHwgKGk/LmRlbGV0ZT8uKHQpLCB0Py5kaXNjb25uZWN0Py4obCwgdCwgYXQoZSkpKSk7XG59O1xudmFyIE5uID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBFbyA9IChlID0gdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKGUpIHJldHVybiBObj8uaGFzPy4oZSkgfHwgKE5uPy5hZGQ/LihlKSwgaG8oZSwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAodCkgPT4gVG4odC50YXJnZXQpKSwgcG8oZSwgXCJbZGF0YS1taXhpbl1cIiwgKHQpID0+IHtcblx0XHRmb3IgKGNvbnN0IG4gb2YgdC5hZGRlZE5vZGVzKSBuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgVG4obik7XG5cdH0pKSwgZTtcbn07XG52YXIgVG4gPSAoZSkgPT4ge1xuXHRjb25zdCB0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Wy4uLm5ldyBTZXQoWy4uLnRdLm1hcCgobikgPT4gV2U/LmdldD8uKG4pKS5maWx0ZXIoKG4pID0+ICEhbikpXS5tYXA/LigobikgPT4gSXIoZSwgbikpO1xufTtcbnZhciBqbyA9IChlLCB0KSA9PiB7XG5cdGUuZm9yRWFjaCgobikgPT4gdCA/IElyKG4sIHQpIDogVG4obikpO1xufTtcbnZhciBNbyA9IChlKSA9PiB7XG5cdGZvciAoY29uc3QgdCBvZiBObikgam8odD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBlKTtcbn07XG52YXIgQ28gPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGUpID0+IHtcblx0V2U/LmRlbGV0ZT8uKGUpO1xufSk7XG52YXIgVm8gPSAoZSwgdCkgPT4ge1xuXHRpZiAoIXd0Py5oYXM/Lih0KSkge1xuXHRcdGNvbnN0IG4gPSBlPy50cmltPy4oKTtcblx0XHRuICYmICh3dD8uc2V0Py4odCwgbiksIFdlPy5zZXQ/LihuLCB0KSwgQ28/LnJlZ2lzdGVyPy4odCwgbiksIE1vKHQpKTtcblx0fVxufTtcbkVvKHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciBEbiA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoZSA9IG51bGwpIHtcblx0XHRlICYmIFZvKGUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHN0b3JlRm9yRWxlbWVudChlKSB7XG5cdFx0cmV0dXJuIEFuLmdldCh0aGlzLm5hbWUgfHwgXCJcIik/LmdldD8uKGUpO1xuXHR9XG5cdHJlbGF0ZWRGb3JFbGVtZW50KGUpIHtcblx0XHRyZXR1cm4gYXQoZSk7XG5cdH1cblx0Z2V0IGVsZW1lbnRzKCkge1xuXHRcdHJldHVybiBNZT8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIEFuPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIHd0Py5nZXQ/Lih0aGlzKTtcblx0fVxufTtcbnZhciBMbyA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgd3IgPSBnbG9iYWxUaGlzW0xvXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1mcmVxXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBpeGVsLXJhdGlvXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteFwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteVwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9XG5dLmZvckVhY2goKGUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgPiBcInVcIiB8fCB0eXBlb2YgQ1NTPy5yZWdpc3RlclByb3BlcnR5ICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCB0ID0gU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoISghdCB8fCB3ci5oYXModCkpKSB0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KGUpO1xuXHR9IGNhdGNoIChuKSB7XG5cdFx0U3RyaW5nKG4/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSAhPT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIiAmJiBjb25zb2xlLndhcm4obik7XG5cdH0gZmluYWxseSB7XG5cdFx0d3IuYWRkKHQpO1xuXHR9XG59KTtcbnR5cGVvZiBkb2N1bWVudCA8IFwidVwiICYmIGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ7XG52YXIgQW8gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA8IFwidVwiICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdGZvciAoOzspIEFvLmZvckVhY2goKGUpID0+IGU/LigpKSwgYXdhaXQgbmV3IFByb21pc2UoKGUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShlKSk7XG59KTtcbnZhciBObyA9IHt9O1xuZnVuY3Rpb24gVChlLCB0LCBuLCByID0gTm8pIHtcblx0ZT8uYWRkRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xuXHRjb25zdCBpID0gdHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgIWU/LmRlcmVmID8gbmV3IFdlYWtSZWYoZSkgOiBlO1xuXHRyZXR1cm4gKCkgPT4gaT8uZGVyZWY/LigpPy5yZW1vdmVFdmVudExpc3RlbmVyPy4odCwgbiwgcik7XG59XG52YXIgVG8gPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xuZ2xvYmFsVGhpc1tUb10gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHpvID0gKCkgPT4ge1xuXHRjb25zdCBlID0gdHlwZW9mIG1hdGNoTWVkaWEgPCBcInVcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiAhMSwgdCA9IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGwsIG4gPSB0ID8ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt0LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3QuaGVpZ2h0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dC5vZmZzZXRMZWZ0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt0Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh0LnNjYWxlID8/IDEpXG5cdH0gOiB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiA8IFwidVwiKSB7XG5cdFx0Y29uc3QgciA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIiwgaSA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBlID8gaSA6IHIsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGUgPyByIDogaSxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLm5cblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi5uXG5cdH07XG59O1xuem8oKTtcbm5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIGtvID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xuZ2xvYmFsVGhpc1trb10gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIFBvID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Db250ZW50T2JzZXJ2ZVwiKTtcbmdsb2JhbFRoaXNbUG9dID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBCciA9IChlKSA9PiAodHlwZW9mIGU/LmN1cnJlbnQgPT0gXCJvYmplY3RcIiAmJiAoZSA9IGU/LmVsZW1lbnQgPz8gZT8uY3VycmVudCA/PyAodHlwZW9mIGU/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGU/LnNlbGYgOiBudWxsKSA/PyBlKSwgZSk7XG52YXIgV28gPSAoZSwgdCwgbiwgcikgPT4ge1xuXHRjb25zdCBpID0gbmV3IFNldChbLi4ubi5zcGxpdChcIixcIikgfHwgW25dXS5tYXAoKGEpID0+IGEudHJpbSgpKSksIGwgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoYSwgbykgPT4ge1xuXHRcdGZvciAoY29uc3QgZCBvZiBhKSBpZiAoZC50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGMgPSBBcnJheS5mcm9tKGQuYWRkZWROb2RlcykgfHwgW10sIHAgPSBBcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGMucHVzaCguLi5BcnJheS5mcm9tKGQuYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZikgPT4gQXJyYXkuZnJvbShmPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIHAucHVzaCguLi5BcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChmKSA9PiBBcnJheS5mcm9tKGY/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgWy4uLm5ldyBTZXQoYyldLmZpbHRlcigoZikgPT4gZj8ubWF0Y2hlcz8uKHQpKT8ubWFwPy4oKGYpID0+IHtcblx0XHRcdFx0aS5mb3JFYWNoKCh1KSA9PiB7XG5cdFx0XHRcdFx0cih7XG5cdFx0XHRcdFx0XHR0YXJnZXQ6IGYsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU6IHUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogZj8uZ2V0QXR0cmlidXRlPy4odSlcblx0XHRcdFx0XHR9LCBvKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgZC50YXJnZXQ/Lm1hdGNoZXM/Lih0KSAmJiBkLmF0dHJpYnV0ZU5hbWUgJiYgaS5oYXMoZC5hdHRyaWJ1dGVOYW1lKSAmJiByKGQsIG8pO1xuXHR9KTtcblx0cmV0dXJuIGwub2JzZXJ2ZShlID0gQnIoZSksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogITAsXG5cdFx0YXR0cmlidXRlczogITAsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uaV0sXG5cdFx0Y2hpbGRMaXN0OiAhMCxcblx0XHRzdWJ0cmVlOiAhMCxcblx0XHRjaGFyYWN0ZXJEYXRhOiAhMFxuXHR9KSwgWy4uLmUucXVlcnlTZWxlY3RvckFsbCh0KV0ubWFwKChhKSA9PiBpLmZvckVhY2goKG8pID0+IHIoe1xuXHRcdHRhcmdldDogYSxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBvLFxuXHRcdG9sZFZhbHVlOiBhPy5nZXRBdHRyaWJ1dGU/LihvKVxuXHR9LCBsKSkpLCBsO1xufTtcbnZhciBSbyA9IChlLCB0ID0gXCIqXCIsIG4gPSAociwgaSkgPT4ge30pID0+IHtcblx0Y29uc3QgciA9ICh1KSA9PiB7XG5cdFx0Y29uc3QgcyA9IEFycmF5LmZyb20odSB8fCBbXSkgfHwgW107XG5cdFx0cmV0dXJuIHMucHVzaCguLi5BcnJheS5mcm9tKHUgfHwgW10pLmZsYXRNYXAoKGgpID0+IEFycmF5LmZyb20oaD8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KHMpLnZhbHVlcygpKV0uZmlsdGVyKChoKSA9PiBoPy5tYXRjaGVzPy4odCkpO1xuXHR9O1xuXHRsZXQgaSA9IG51bGw7XG5cdGNvbnN0IGwgPSAodSkgPT4ge1xuXHRcdGNvbnN0IHMgPSBpPy5kZXJlZj8uKCksIGggPSByKHUuYWRkZWROb2RlcyksIG0gPSByKHUucmVtb3ZlZE5vZGVzKTtcblx0XHQoaC5sZW5ndGggPiAwIHx8IG0ubGVuZ3RoID4gMCkgJiYgbj8uKHtcblx0XHRcdHR5cGU6IHUudHlwZSxcblx0XHRcdHRhcmdldDogdS50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiB1LmF0dHJpYnV0ZU5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IHUuYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IHUubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogdS5vbGRWYWx1ZSxcblx0XHRcdHByZXZpb3VzU2libGluZzogdS5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzOiBoLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBtXG5cdFx0fSwgcyk7XG5cdH0sIGEgPSAodSkgPT4ge1xuXHRcdGwoe1xuXHRcdFx0YWRkZWROb2RlczogW3U/LnRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbdT8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogdT8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBvID0gKHUpID0+IHtcblx0XHRsKHtcblx0XHRcdGFkZGVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py50YXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IHU/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgZCA9ICh1KSA9PiB7XG5cdFx0bCh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbdT8udGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiB1Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIGMgPSB7XG5cdFx0cGFzc2l2ZTogITAsXG5cdFx0Y2FwdHVyZTogITFcblx0fTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikgJiYgdD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXZpc2libGVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZCwgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkLCBjKTtcblx0fSB9O1xuXHRjb25zdCBwID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHUsIHMpID0+IHtcblx0XHRmb3IgKGNvbnN0IGggb2YgdSkgaC50eXBlID09IFwiY2hpbGRMaXN0XCIgJiYgbChoKTtcblx0fSk7XG5cdGkgPSBuZXcgV2Vha1JlZihwKSwgKGU/LmVsZW1lbnQgPz8gZSkgaW5zdGFuY2VvZiBOb2RlICYmIHAub2JzZXJ2ZShlID0gQnIoZSksIHtcblx0XHRjaGlsZExpc3Q6ICEwLFxuXHRcdHN1YnRyZWU6ICEwXG5cdH0pO1xuXHRjb25zdCBmID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwodCkpO1xuXHRyZXR1cm4gZi5sZW5ndGggPiAwICYmIG4/Lih7XG5cdFx0YWRkZWROb2RlczogZixcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIHApLCBwO1xufTtcbnZhciAkbyA9IFwiRE9NXCI7XG52YXIgRHQgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSA6IG51bGw7XG5EdCAmJiAodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oRHQpLCBEdC5kYXRhc2V0Lm93bmVyID0gJG8pO1xudmFyICR0ID0gdHlwZW9mIENTU1N0eWxlVmFsdWUgPCBcInVcIiAmJiB0eXBlb2YgQ1NTVW5pdFZhbHVlIDwgXCJ1XCI7XG52YXIgZGUgPSAoZSkgPT4gJHQgJiYgZSBpbnN0YW5jZW9mIENTU1N0eWxlVmFsdWU7XG52YXIgRyA9IChlKSA9PiAkdCAmJiBlIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xudmFyIHJlID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghKCFlIHx8ICF0KSkge1xuXHRcdGlmIChuID09IG51bGwpIHtcblx0XHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gXCJcIiAmJiBlLnJlbW92ZVByb3BlcnR5KHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRlLmdldFByb3BlcnR5VmFsdWUodCkgIT09IG4gJiYgZS5zZXRQcm9wZXJ0eSh0LCBuLCByKTtcblx0fVxufTtcbnZhciBGbyA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoIWUgfHwgIXQpIHJldHVybiBlO1xuXHRjb25zdCBpID0gY2FtZWxUb0tlYmFiKHQpLCBsID0gZS5zdHlsZSwgYSA9IGUuYXR0cmlidXRlU3R5bGVNYXAgPz8gZS5zdHlsZU1hcDtcblx0aWYgKCEkdCB8fCAhYSkgcmV0dXJuIFhyKGUsIHQsIG4sIHIpO1xuXHRsZXQgbyA9IGhhc1ZhbHVlKG4pICYmICEoZGUobikgfHwgRyhuKSkgPyBuPy52YWx1ZSA6IG47XG5cdGlmIChvID09IG51bGwpIHJldHVybiBhLmRlbGV0ZT8uKGkpLCBsICYmIHJlKGwsIGksIG51bGwsIHIpLCBlO1xuXHRpZiAoZGUobykpIHtcblx0XHRjb25zdCBkID0gYS5nZXQoaSk7XG5cdFx0aWYgKEcobykgJiYgRyhkKSkge1xuXHRcdFx0aWYgKGQudmFsdWUgPT09IG8udmFsdWUgJiYgZC51bml0ID09PSBvLnVuaXQpIHJldHVybiBlO1xuXHRcdH0gZWxzZSBpZiAoZCA9PT0gbykgcmV0dXJuIGU7XG5cdFx0cmV0dXJuIGEuc2V0KGksIG8pLCBlO1xuXHR9XG5cdGlmICh0eXBlb2YgbyA9PSBcIm51bWJlclwiKSBpZiAoQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0Y29uc3QgZCA9IENTUy5udW1iZXIobyksIGMgPSBhLmdldChpKTtcblx0XHRyZXR1cm4gRyhjKSAmJiBjLnZhbHVlID09PSBkLnZhbHVlICYmIGMudW5pdCA9PT0gZC51bml0IHx8IGEuc2V0KGksIGQpLCBlO1xuXHR9IGVsc2UgcmV0dXJuIHJlKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG5cdGlmICh0eXBlb2YgbyA9PSBcInN0cmluZ1wiICYmICFkZShvKSkge1xuXHRcdGNvbnN0IGQgPSB0cnlTdHJpbmdBc051bWJlcihvKTtcblx0XHRpZiAodHlwZW9mIGQgPT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAhaS5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IGMgPSBDU1MubnVtYmVyKGQpLCBwID0gYS5nZXQoaSk7XG5cdFx0XHRyZXR1cm4gRyhwKSAmJiBwLnZhbHVlID09PSBjLnZhbHVlICYmIHAudW5pdCA9PT0gYy51bml0IHx8IGEuc2V0KGksIGMpLCBlO1xuXHRcdH0gZWxzZSByZXR1cm4gcmUobCwgaSwgbywgciksIGU7XG5cdH1cblx0cmV0dXJuIHJlKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG59O1xudmFyIFhyID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBjYW1lbFRvS2ViYWIodCksIGwgPSBlLnN0eWxlO1xuXHRpZiAoIWwpIHJldHVybiBlO1xuXHRsZXQgYSA9IGhhc1ZhbHVlKG4pICYmICEoZGUobikgfHwgRyhuKSkgPyBuPy52YWx1ZSA6IG47XG5cdHJldHVybiB0eXBlb2YgYSA9PSBcInN0cmluZ1wiICYmICFkZShhKSAmJiAoYSA9IHRyeVN0cmluZ0FzTnVtYmVyKGEpID8/IGEpLCBhID09IG51bGwgPyAocmUobCwgaSwgbnVsbCwgciksIGUpIDogKGRlKGEpLCByZShsLCBpLCBTdHJpbmcoYSksIHIpLCBlKTtcbn07XG52YXIgX2UgPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+ICR0ID8gRm8oZSwgdCwgbiwgcikgOiBYcihlLCB0LCBuLCByKTtcbnZhciBxbyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIE9vID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbmFtZWRTdG9yZU1hcHNcIik7XG52YXIgem4gPSBnbG9iYWxUaGlzW09vXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBIbyA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBbLi4uZS5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChuPy5tYXA/LigoW3IsIGldKSA9PiBbciwgaT8uZ2V0Py4odCldKT8uZmlsdGVyPy4oKFtyLCBpXSkgPT4gISFpKSB8fCBbXSk7XG59O1xudmFyIHN0ID0gKGUpID0+ICh7XG5cdHN0b3JlU2V0OiBIbyh6biwgZSksXG5cdG1peGluU2V0OiBsdD8uZ2V0Py4oZSksXG5cdGJlaGF2aW9yU2V0OiBxbz8uZ2V0Py4oZSlcbn0pO1xudmFyIElvID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBsdCA9IGdsb2JhbFRoaXNbSW9dID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBCbyA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgQ2UgPSBnbG9iYWxUaGlzW0JvXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgWG8gPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpblJlZ2lzdHJ5XCIpO1xudmFyIFJlID0gZ2xvYmFsVGhpc1tYb10gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgWW8gPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbk5hbWVzcGFjZVwiKTtcbnZhciBTdCA9IGdsb2JhbFRoaXNbWW9dID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBZciA9IChlLCB0KSA9PiB7XG5cdHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgKHQgPSBSZT8uZ2V0Py4odCkpO1xuXHRjb25zdCBuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKSwgciA9IG5ldyBTZXQoWy4uLm5dLm1hcCgoYSkgPT4gUmU/LmdldD8uKGEpKS5maWx0ZXIoKGEpID0+ICEhYSkpLCBpID0gbHQ/LmdldD8uKGUpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRDZT8uaGFzPy4odCkgfHwgQ2U/LnNldD8uKHQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKSwgbHQ/Lmhhcz8uKGUpIHx8IGx0Py5zZXQ/LihlLCBpKTtcblx0Y29uc3QgbCA9IG5ldyBXZWFrUmVmKGUpO1xuXHRpPy5oYXM/Lih0KSB8fCAoci5oYXModCkgfHwgdD8uZGlzY29ubmVjdD8uKGwsIHQsIHN0KGUpKSwgKHIuaGFzKHQpIHx8ICFDZT8uZ2V0Py4odCk/Lmhhcz8uKGUpKSAmJiAodD8uY29ubmVjdD8uKGwsIHQsIHN0KGUpKSwgbi5hZGQoU3Q/LmdldD8uKHQpKSwgaT8uYWRkPy4odCksIGU/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubl0uZmlsdGVyKChhKSA9PiAhIWEpLmpvaW4oXCIgXCIpKSksIENlPy5nZXQ/Lih0KT8uYWRkPy4oZSkpLCBpPy5oYXM/Lih0KSAmJiAoci5oYXModCkgfHwgKGk/LmRlbGV0ZT8uKHQpLCB0Py5kaXNjb25uZWN0Py4obCwgdCwgc3QoZSkpKSk7XG59O1xudmFyIGtuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBfbyA9IChlID0gdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKGUpIHJldHVybiBrbj8uaGFzPy4oZSkgfHwgKGtuPy5hZGQ/LihlKSwgV28oZSwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAodCkgPT4gUG4odC50YXJnZXQpKSwgUm8oZSwgXCJbZGF0YS1taXhpbl1cIiwgKHQpID0+IHtcblx0XHRmb3IgKGNvbnN0IG4gb2YgdC5hZGRlZE5vZGVzKSBuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgUG4obik7XG5cdH0pKSwgZTtcbn07XG52YXIgUG4gPSAoZSkgPT4ge1xuXHRjb25zdCB0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Wy4uLm5ldyBTZXQoWy4uLnRdLm1hcCgobikgPT4gUmU/LmdldD8uKG4pKS5maWx0ZXIoKG4pID0+ICEhbikpXS5tYXA/LigobikgPT4gWXIoZSwgbikpO1xufTtcbnZhciBEbyA9IChlLCB0KSA9PiB7XG5cdGUuZm9yRWFjaCgobikgPT4gdCA/IFlyKG4sIHQpIDogUG4obikpO1xufTtcbnZhciBVbyA9IChlKSA9PiB7XG5cdGZvciAoY29uc3QgdCBvZiBrbikgRG8odD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBlKTtcbn07XG52YXIgWm8gPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGUpID0+IHtcblx0UmU/LmRlbGV0ZT8uKGUpO1xufSk7XG52YXIgR28gPSAoZSwgdCkgPT4ge1xuXHRpZiAoIVN0Py5oYXM/Lih0KSkge1xuXHRcdGNvbnN0IG4gPSBlPy50cmltPy4oKTtcblx0XHRuICYmIChTdD8uc2V0Py4odCwgbiksIFJlPy5zZXQ/LihuLCB0KSwgWm8/LnJlZ2lzdGVyPy4odCwgbiksIFVvKHQpKTtcblx0fVxufTtcbl9vKHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciBVbiA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoZSA9IG51bGwpIHtcblx0XHRlICYmIEdvKGUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHN0b3JlRm9yRWxlbWVudChlKSB7XG5cdFx0cmV0dXJuIHpuLmdldCh0aGlzLm5hbWUgfHwgXCJcIik/LmdldD8uKGUpO1xuXHR9XG5cdHJlbGF0ZWRGb3JFbGVtZW50KGUpIHtcblx0XHRyZXR1cm4gc3QoZSk7XG5cdH1cblx0Z2V0IGVsZW1lbnRzKCkge1xuXHRcdHJldHVybiBDZT8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIHpuPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIFN0Py5nZXQ/Lih0aGlzKTtcblx0fVxufTtcbnZhciBKbyA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgU3IgPSBnbG9iYWxUaGlzW0pvXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1mcmVxXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBpeGVsLXJhdGlvXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteFwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteVwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9XG5dLmZvckVhY2goKGUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgPiBcInVcIiB8fCB0eXBlb2YgQ1NTPy5yZWdpc3RlclByb3BlcnR5ICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCB0ID0gU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoISghdCB8fCBTci5oYXModCkpKSB0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KGUpO1xuXHR9IGNhdGNoIChuKSB7XG5cdFx0U3RyaW5nKG4/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSAhPT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIiAmJiBjb25zb2xlLndhcm4obik7XG5cdH0gZmluYWxseSB7XG5cdFx0U3IuYWRkKHQpO1xuXHR9XG59KTtcbnR5cGVvZiBkb2N1bWVudCA8IFwidVwiICYmIGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ7XG52YXIgS28gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA8IFwidVwiICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdGZvciAoOzspIEtvLmZvckVhY2goKGUpID0+IGU/LigpKSwgYXdhaXQgbmV3IFByb21pc2UoKGUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShlKSk7XG59KTtcbnZhciBRbyA9IHt9O1xuZnVuY3Rpb24geihlLCB0LCBuLCByID0gUW8pIHtcblx0ZT8uYWRkRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xuXHRjb25zdCBpID0gdHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgIWU/LmRlcmVmID8gbmV3IFdlYWtSZWYoZSkgOiBlO1xuXHRyZXR1cm4gKCkgPT4gaT8uZGVyZWY/LigpPy5yZW1vdmVFdmVudExpc3RlbmVyPy4odCwgbiwgcik7XG59XG52YXIgZXMgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xuZ2xvYmFsVGhpc1tlc10gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHRzID0gKCkgPT4ge1xuXHRjb25zdCBlID0gdHlwZW9mIG1hdGNoTWVkaWEgPCBcInVcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiAhMSwgdCA9IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGwsIG4gPSB0ID8ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt0LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3QuaGVpZ2h0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dC5vZmZzZXRMZWZ0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt0Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh0LnNjYWxlID8/IDEpXG5cdH0gOiB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiA8IFwidVwiKSB7XG5cdFx0Y29uc3QgciA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIiwgaSA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBlID8gaSA6IHIsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGUgPyByIDogaSxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLm5cblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi5uXG5cdH07XG59O1xudHMoKTtcbm5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIG5zID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xuZ2xvYmFsVGhpc1tuc10gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHJzID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Db250ZW50T2JzZXJ2ZVwiKTtcbmdsb2JhbFRoaXNbcnNdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBfciA9IChlKSA9PiAodHlwZW9mIGU/LmN1cnJlbnQgPT0gXCJvYmplY3RcIiAmJiAoZSA9IGU/LmVsZW1lbnQgPz8gZT8uY3VycmVudCA/PyAodHlwZW9mIGU/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGU/LnNlbGYgOiBudWxsKSA/PyBlKSwgZSk7XG52YXIgaXMgPSAoZSwgdCwgbiwgcikgPT4ge1xuXHRjb25zdCBpID0gbmV3IFNldChbLi4ubi5zcGxpdChcIixcIikgfHwgW25dXS5tYXAoKGEpID0+IGEudHJpbSgpKSksIGwgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoYSwgbykgPT4ge1xuXHRcdGZvciAoY29uc3QgZCBvZiBhKSBpZiAoZC50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGMgPSBBcnJheS5mcm9tKGQuYWRkZWROb2RlcykgfHwgW10sIHAgPSBBcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGMucHVzaCguLi5BcnJheS5mcm9tKGQuYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZikgPT4gQXJyYXkuZnJvbShmPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIHAucHVzaCguLi5BcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChmKSA9PiBBcnJheS5mcm9tKGY/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgWy4uLm5ldyBTZXQoYyldLmZpbHRlcigoZikgPT4gZj8ubWF0Y2hlcz8uKHQpKT8ubWFwPy4oKGYpID0+IHtcblx0XHRcdFx0aS5mb3JFYWNoKCh1KSA9PiB7XG5cdFx0XHRcdFx0cih7XG5cdFx0XHRcdFx0XHR0YXJnZXQ6IGYsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU6IHUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogZj8uZ2V0QXR0cmlidXRlPy4odSlcblx0XHRcdFx0XHR9LCBvKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgZC50YXJnZXQ/Lm1hdGNoZXM/Lih0KSAmJiBkLmF0dHJpYnV0ZU5hbWUgJiYgaS5oYXMoZC5hdHRyaWJ1dGVOYW1lKSAmJiByKGQsIG8pO1xuXHR9KTtcblx0cmV0dXJuIGwub2JzZXJ2ZShlID0gX3IoZSksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogITAsXG5cdFx0YXR0cmlidXRlczogITAsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uaV0sXG5cdFx0Y2hpbGRMaXN0OiAhMCxcblx0XHRzdWJ0cmVlOiAhMCxcblx0XHRjaGFyYWN0ZXJEYXRhOiAhMFxuXHR9KSwgWy4uLmUucXVlcnlTZWxlY3RvckFsbCh0KV0ubWFwKChhKSA9PiBpLmZvckVhY2goKG8pID0+IHIoe1xuXHRcdHRhcmdldDogYSxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBvLFxuXHRcdG9sZFZhbHVlOiBhPy5nZXRBdHRyaWJ1dGU/LihvKVxuXHR9LCBsKSkpLCBsO1xufTtcbnZhciBhcyA9IChlLCB0ID0gXCIqXCIsIG4gPSAociwgaSkgPT4ge30pID0+IHtcblx0Y29uc3QgciA9ICh1KSA9PiB7XG5cdFx0Y29uc3QgcyA9IEFycmF5LmZyb20odSB8fCBbXSkgfHwgW107XG5cdFx0cmV0dXJuIHMucHVzaCguLi5BcnJheS5mcm9tKHUgfHwgW10pLmZsYXRNYXAoKGgpID0+IEFycmF5LmZyb20oaD8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KHMpLnZhbHVlcygpKV0uZmlsdGVyKChoKSA9PiBoPy5tYXRjaGVzPy4odCkpO1xuXHR9O1xuXHRsZXQgaSA9IG51bGw7XG5cdGNvbnN0IGwgPSAodSkgPT4ge1xuXHRcdGNvbnN0IHMgPSBpPy5kZXJlZj8uKCksIGggPSByKHUuYWRkZWROb2RlcyksIG0gPSByKHUucmVtb3ZlZE5vZGVzKTtcblx0XHQoaC5sZW5ndGggPiAwIHx8IG0ubGVuZ3RoID4gMCkgJiYgbj8uKHtcblx0XHRcdHR5cGU6IHUudHlwZSxcblx0XHRcdHRhcmdldDogdS50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiB1LmF0dHJpYnV0ZU5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IHUuYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IHUubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogdS5vbGRWYWx1ZSxcblx0XHRcdHByZXZpb3VzU2libGluZzogdS5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzOiBoLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBtXG5cdFx0fSwgcyk7XG5cdH0sIGEgPSAodSkgPT4ge1xuXHRcdGwoe1xuXHRcdFx0YWRkZWROb2RlczogW3U/LnRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbdT8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogdT8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBvID0gKHUpID0+IHtcblx0XHRsKHtcblx0XHRcdGFkZGVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py50YXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IHU/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgZCA9ICh1KSA9PiB7XG5cdFx0bCh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbdT8udGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiB1Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIGMgPSB7XG5cdFx0cGFzc2l2ZTogITAsXG5cdFx0Y2FwdHVyZTogITFcblx0fTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikgJiYgdD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXZpc2libGVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZCwgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkLCBjKTtcblx0fSB9O1xuXHRjb25zdCBwID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHUsIHMpID0+IHtcblx0XHRmb3IgKGNvbnN0IGggb2YgdSkgaC50eXBlID09IFwiY2hpbGRMaXN0XCIgJiYgbChoKTtcblx0fSk7XG5cdGkgPSBuZXcgV2Vha1JlZihwKSwgKGU/LmVsZW1lbnQgPz8gZSkgaW5zdGFuY2VvZiBOb2RlICYmIHAub2JzZXJ2ZShlID0gX3IoZSksIHtcblx0XHRjaGlsZExpc3Q6ICEwLFxuXHRcdHN1YnRyZWU6ICEwXG5cdH0pO1xuXHRjb25zdCBmID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwodCkpO1xuXHRyZXR1cm4gZi5sZW5ndGggPiAwICYmIG4/Lih7XG5cdFx0YWRkZWROb2RlczogZixcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIHApLCBwO1xufTtcbnZhciBvcyA9IFwiRE9NXCI7XG52YXIgVXQgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSA6IG51bGw7XG5VdCAmJiAodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oVXQpLCBVdC5kYXRhc2V0Lm93bmVyID0gb3MpO1xudmFyIEZ0ID0gdHlwZW9mIENTU1N0eWxlVmFsdWUgPCBcInVcIiAmJiB0eXBlb2YgQ1NTVW5pdFZhbHVlIDwgXCJ1XCI7XG52YXIgaGUgPSAoZSkgPT4gRnQgJiYgZSBpbnN0YW5jZW9mIENTU1N0eWxlVmFsdWU7XG52YXIgSiA9IChlKSA9PiBGdCAmJiBlIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xudmFyIGllID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghKCFlIHx8ICF0KSkge1xuXHRcdGlmIChuID09IG51bGwpIHtcblx0XHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gXCJcIiAmJiBlLnJlbW92ZVByb3BlcnR5KHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRlLmdldFByb3BlcnR5VmFsdWUodCkgIT09IG4gJiYgZS5zZXRQcm9wZXJ0eSh0LCBuLCByKTtcblx0fVxufTtcbnZhciBzcyA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoIWUgfHwgIXQpIHJldHVybiBlO1xuXHRjb25zdCBpID0gY2FtZWxUb0tlYmFiKHQpLCBsID0gZS5zdHlsZSwgYSA9IGUuYXR0cmlidXRlU3R5bGVNYXAgPz8gZS5zdHlsZU1hcDtcblx0aWYgKCFGdCB8fCAhYSkgcmV0dXJuIERyKGUsIHQsIG4sIHIpO1xuXHRsZXQgbyA9IGhhc1ZhbHVlKG4pICYmICEoaGUobikgfHwgSihuKSkgPyBuPy52YWx1ZSA6IG47XG5cdGlmIChvID09IG51bGwpIHJldHVybiBhLmRlbGV0ZT8uKGkpLCBsICYmIGllKGwsIGksIG51bGwsIHIpLCBlO1xuXHRpZiAoaGUobykpIHtcblx0XHRjb25zdCBkID0gYS5nZXQoaSk7XG5cdFx0aWYgKEoobykgJiYgSihkKSkge1xuXHRcdFx0aWYgKGQudmFsdWUgPT09IG8udmFsdWUgJiYgZC51bml0ID09PSBvLnVuaXQpIHJldHVybiBlO1xuXHRcdH0gZWxzZSBpZiAoZCA9PT0gbykgcmV0dXJuIGU7XG5cdFx0cmV0dXJuIGEuc2V0KGksIG8pLCBlO1xuXHR9XG5cdGlmICh0eXBlb2YgbyA9PSBcIm51bWJlclwiKSBpZiAoQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0Y29uc3QgZCA9IENTUy5udW1iZXIobyksIGMgPSBhLmdldChpKTtcblx0XHRyZXR1cm4gSihjKSAmJiBjLnZhbHVlID09PSBkLnZhbHVlICYmIGMudW5pdCA9PT0gZC51bml0IHx8IGEuc2V0KGksIGQpLCBlO1xuXHR9IGVsc2UgcmV0dXJuIGllKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG5cdGlmICh0eXBlb2YgbyA9PSBcInN0cmluZ1wiICYmICFoZShvKSkge1xuXHRcdGNvbnN0IGQgPSB0cnlTdHJpbmdBc051bWJlcihvKTtcblx0XHRpZiAodHlwZW9mIGQgPT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAhaS5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IGMgPSBDU1MubnVtYmVyKGQpLCBwID0gYS5nZXQoaSk7XG5cdFx0XHRyZXR1cm4gSihwKSAmJiBwLnZhbHVlID09PSBjLnZhbHVlICYmIHAudW5pdCA9PT0gYy51bml0IHx8IGEuc2V0KGksIGMpLCBlO1xuXHRcdH0gZWxzZSByZXR1cm4gaWUobCwgaSwgbywgciksIGU7XG5cdH1cblx0cmV0dXJuIGllKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG59O1xudmFyIERyID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBjYW1lbFRvS2ViYWIodCksIGwgPSBlLnN0eWxlO1xuXHRpZiAoIWwpIHJldHVybiBlO1xuXHRsZXQgYSA9IGhhc1ZhbHVlKG4pICYmICEoaGUobikgfHwgSihuKSkgPyBuPy52YWx1ZSA6IG47XG5cdHJldHVybiB0eXBlb2YgYSA9PSBcInN0cmluZ1wiICYmICFoZShhKSAmJiAoYSA9IHRyeVN0cmluZ0FzTnVtYmVyKGEpID8/IGEpLCBhID09IG51bGwgPyAoaWUobCwgaSwgbnVsbCwgciksIGUpIDogKGhlKGEpLCBpZShsLCBpLCBTdHJpbmcoYSksIHIpLCBlKTtcbn07XG52YXIgRGUgPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IEZ0ID8gc3MoZSwgdCwgbiwgcikgOiBEcihlLCB0LCBuLCByKTtcbnZhciBscyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVzID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbmFtZWRTdG9yZU1hcHNcIik7XG52YXIgV24gPSBnbG9iYWxUaGlzW3VzXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBjcyA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBbLi4uZS5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChuPy5tYXA/LigoW3IsIGldKSA9PiBbciwgaT8uZ2V0Py4odCldKT8uZmlsdGVyPy4oKFtyLCBpXSkgPT4gISFpKSB8fCBbXSk7XG59O1xudmFyIHV0ID0gKGUpID0+ICh7XG5cdHN0b3JlU2V0OiBjcyhXbiwgZSksXG5cdG1peGluU2V0OiBjdD8uZ2V0Py4oZSksXG5cdGJlaGF2aW9yU2V0OiBscz8uZ2V0Py4oZSlcbn0pO1xudmFyIGRzID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBjdCA9IGdsb2JhbFRoaXNbZHNdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBocyA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgVmUgPSBnbG9iYWxUaGlzW2hzXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcHMgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpblJlZ2lzdHJ5XCIpO1xudmFyICRlID0gZ2xvYmFsVGhpc1twc10gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZnMgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbk5hbWVzcGFjZVwiKTtcbnZhciBFdCA9IGdsb2JhbFRoaXNbZnNdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBVciA9IChlLCB0KSA9PiB7XG5cdHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgKHQgPSAkZT8uZ2V0Py4odCkpO1xuXHRjb25zdCBuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKSwgciA9IG5ldyBTZXQoWy4uLm5dLm1hcCgoYSkgPT4gJGU/LmdldD8uKGEpKS5maWx0ZXIoKGEpID0+ICEhYSkpLCBpID0gY3Q/LmdldD8uKGUpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRWZT8uaGFzPy4odCkgfHwgVmU/LnNldD8uKHQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKSwgY3Q/Lmhhcz8uKGUpIHx8IGN0Py5zZXQ/LihlLCBpKTtcblx0Y29uc3QgbCA9IG5ldyBXZWFrUmVmKGUpO1xuXHRpPy5oYXM/Lih0KSB8fCAoci5oYXModCkgfHwgdD8uZGlzY29ubmVjdD8uKGwsIHQsIHV0KGUpKSwgKHIuaGFzKHQpIHx8ICFWZT8uZ2V0Py4odCk/Lmhhcz8uKGUpKSAmJiAodD8uY29ubmVjdD8uKGwsIHQsIHV0KGUpKSwgbi5hZGQoRXQ/LmdldD8uKHQpKSwgaT8uYWRkPy4odCksIGU/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubl0uZmlsdGVyKChhKSA9PiAhIWEpLmpvaW4oXCIgXCIpKSksIFZlPy5nZXQ/Lih0KT8uYWRkPy4oZSkpLCBpPy5oYXM/Lih0KSAmJiAoci5oYXModCkgfHwgKGk/LmRlbGV0ZT8uKHQpLCB0Py5kaXNjb25uZWN0Py4obCwgdCwgdXQoZSkpKSk7XG59O1xudmFyIFJuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBtcyA9IChlID0gdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKGUpIHJldHVybiBSbj8uaGFzPy4oZSkgfHwgKFJuPy5hZGQ/LihlKSwgaXMoZSwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAodCkgPT4gJG4odC50YXJnZXQpKSwgYXMoZSwgXCJbZGF0YS1taXhpbl1cIiwgKHQpID0+IHtcblx0XHRmb3IgKGNvbnN0IG4gb2YgdC5hZGRlZE5vZGVzKSBuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgJG4obik7XG5cdH0pKSwgZTtcbn07XG52YXIgJG4gPSAoZSkgPT4ge1xuXHRjb25zdCB0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Wy4uLm5ldyBTZXQoWy4uLnRdLm1hcCgobikgPT4gJGU/LmdldD8uKG4pKS5maWx0ZXIoKG4pID0+ICEhbikpXS5tYXA/LigobikgPT4gVXIoZSwgbikpO1xufTtcbnZhciB2cyA9IChlLCB0KSA9PiB7XG5cdGUuZm9yRWFjaCgobikgPT4gdCA/IFVyKG4sIHQpIDogJG4obikpO1xufTtcbnZhciBncyA9IChlKSA9PiB7XG5cdGZvciAoY29uc3QgdCBvZiBSbikgdnModD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBlKTtcbn07XG52YXIgeXMgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGUpID0+IHtcblx0JGU/LmRlbGV0ZT8uKGUpO1xufSk7XG52YXIgYnMgPSAoZSwgdCkgPT4ge1xuXHRpZiAoIUV0Py5oYXM/Lih0KSkge1xuXHRcdGNvbnN0IG4gPSBlPy50cmltPy4oKTtcblx0XHRuICYmIChFdD8uc2V0Py4odCwgbiksICRlPy5zZXQ/LihuLCB0KSwgeXM/LnJlZ2lzdGVyPy4odCwgbiksIGdzKHQpKTtcblx0fVxufTtcbm1zKHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciBabiA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoZSA9IG51bGwpIHtcblx0XHRlICYmIGJzKGUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHN0b3JlRm9yRWxlbWVudChlKSB7XG5cdFx0cmV0dXJuIFduLmdldCh0aGlzLm5hbWUgfHwgXCJcIik/LmdldD8uKGUpO1xuXHR9XG5cdHJlbGF0ZWRGb3JFbGVtZW50KGUpIHtcblx0XHRyZXR1cm4gdXQoZSk7XG5cdH1cblx0Z2V0IGVsZW1lbnRzKCkge1xuXHRcdHJldHVybiBWZT8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIFduPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIEV0Py5nZXQ/Lih0aGlzKTtcblx0fVxufTtcbnZhciB4cyA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgRXIgPSBnbG9iYWxUaGlzW3hzXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1mcmVxXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBpeGVsLXJhdGlvXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteFwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteVwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9XG5dLmZvckVhY2goKGUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgPiBcInVcIiB8fCB0eXBlb2YgQ1NTPy5yZWdpc3RlclByb3BlcnR5ICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCB0ID0gU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoISghdCB8fCBFci5oYXModCkpKSB0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KGUpO1xuXHR9IGNhdGNoIChuKSB7XG5cdFx0U3RyaW5nKG4/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSAhPT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIiAmJiBjb25zb2xlLndhcm4obik7XG5cdH0gZmluYWxseSB7XG5cdFx0RXIuYWRkKHQpO1xuXHR9XG59KTtcbnZhciB3cyA9IChlLCB0ID0gXCJ2YWx1ZVwiKSA9PiAodHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIpICYmIGUgIT0gbnVsbCAmJiAodCBpbiBlIHx8IGU/Llt0XSAhPSBudWxsKTtcbnZhciBaciA9IChlKSA9PiB3cyhlLCBcInZhbHVlXCIpO1xudmFyIEdyID0gKGUpID0+IGUgJiYgZT8ucmVwbGFjZT8uKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG52YXIgSnIgPSAoZSkgPT4ge1xuXHRpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHQgPSBbLi4uZT8ubWF0Y2hBbGw/LigvXlxcZCsoXFwuXFxkKyk/JC9nKV07XG5cdGlmICh0Py5sZW5ndGggIT0gMSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IG4gPSBwYXJzZUZsb2F0KHRbMF1bMF0pO1xuXHRyZXR1cm4gIU51bWJlci5pc05hTihuKSAmJiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbDtcbn07XG50eXBlb2YgZG9jdW1lbnQgPCBcInVcIiAmJiBkb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50O1xudmFyIFNzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPCBcInVcIiAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXN5bmMgKCkgPT4ge1xuXHRmb3IgKDs7KSBTcy5mb3JFYWNoKChlKSA9PiBlPy4oKSksIGF3YWl0IG5ldyBQcm9taXNlKChlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSkpO1xufSk7XG52YXIgRXMgPSB7fTtcbmZ1bmN0aW9uIHYoZSwgdCwgbiwgciA9IEVzKSB7XG5cdGU/LmFkZEV2ZW50TGlzdGVuZXI/Lih0LCBuLCByKTtcblx0Y29uc3QgaSA9IHR5cGVvZiBlID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGUgPT0gXCJmdW5jdGlvblwiICYmICFlPy5kZXJlZiA/IG5ldyBXZWFrUmVmKGUpIDogZTtcblx0cmV0dXJuICgpID0+IGk/LmRlcmVmPy4oKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xufVxudmFyIGpzID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAem9vbVZhbHVlc1wiKTtcbmdsb2JhbFRoaXNbanNdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBNcyA9ICgpID0+IHtcblx0Y29uc3QgZSA9IHR5cGVvZiBtYXRjaE1lZGlhIDwgXCJ1XCIgPyBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpPy5tYXRjaGVzIDogITEsIHQgPSB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsLCBuID0gdCA/IHtcblx0XHRcIi0tdnYtd2lkdGhcIjogYCR7dC53aWR0aH1weGAsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiBgJHt0LmhlaWdodH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IGAke3Qub2Zmc2V0TGVmdH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC10b3BcIjogYCR7dC5vZmZzZXRUb3B9cHhgLFxuXHRcdFwiLS12di1zY2FsZVwiOiBTdHJpbmcodC5zY2FsZSA/PyAxKVxuXHR9IDoge1xuXHRcdFwiLS12di13aWR0aFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJXaWR0aH1weGAgOiBcIjBweFwiLFxuXHRcdFwiLS12di1oZWlnaHRcIjogdHlwZW9mIHdpbmRvdyA8IFwidVwiID8gYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LW9mZnNldC10b3BcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtc2NhbGVcIjogXCIxXCJcblx0fTtcblx0aWYgKHR5cGVvZiBzY3JlZW4gPCBcInVcIikge1xuXHRcdGNvbnN0IHIgPSBzY3JlZW4/LmF2YWlsV2lkdGggKyBcInB4XCIsIGkgPSBzY3JlZW4/LmF2YWlsSGVpZ2h0ICsgXCJweFwiO1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IE1hdGgubWluKHNjcmVlbj8ud2lkdGgsIHNjcmVlbj8uYXZhaWxXaWR0aCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmhlaWdodCwgc2NyZWVuPy5hdmFpbEhlaWdodCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tYXZhaWwtd2lkdGhcIjogZSA/IGkgOiByLFxuXHRcdFx0XCItLWF2YWlsLWhlaWdodFwiOiBlID8gciA6IGksXG5cdFx0XHRcIi0tdmlldy1oZWlnaHRcIjogTWF0aC5taW4oc2NyZWVuPy5hdmFpbEhlaWdodCwgd2luZG93Py5pbm5lckhlaWdodCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogU3RyaW5nKGRldmljZVBpeGVsUmF0aW8gfHwgMSksXG5cdFx0XHQuLi5uXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdFwiLS1zY3JlZW4td2lkdGhcIjogXCIwcHhcIixcblx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1hdmFpbC13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tdmlldy1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogXCIxXCIsXG5cdFx0Li4ublxuXHR9O1xufTtcbk1zKCk7XG5uZXcgT2Zmc2NyZWVuQ2FudmFzKDEsIDEpLmdldENvbnRleHQoXCIyZFwiKTtcbnZhciBDcyA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQm9yZGVyT2JzZXJ2ZVwiKTtcbmdsb2JhbFRoaXNbQ3NdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBWcyA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQ29udGVudE9ic2VydmVcIik7XG5nbG9iYWxUaGlzW1ZzXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgS3IgPSAoZSkgPT4gKHR5cGVvZiBlPy5jdXJyZW50ID09IFwib2JqZWN0XCIgJiYgKGUgPSBlPy5lbGVtZW50ID8/IGU/LmN1cnJlbnQgPz8gKHR5cGVvZiBlPy5zZWxmID09IFwib2JqZWN0XCIgPyBlPy5zZWxmIDogbnVsbCkgPz8gZSksIGUpO1xudmFyIExzID0gKGUsIHQsIG4sIHIpID0+IHtcblx0Y29uc3QgaSA9IG5ldyBTZXQoWy4uLm4uc3BsaXQoXCIsXCIpIHx8IFtuXV0ubWFwKChhKSA9PiBhLnRyaW0oKSkpLCBsID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKGEsIG8pID0+IHtcblx0XHRmb3IgKGNvbnN0IGQgb2YgYSkgaWYgKGQudHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRjb25zdCBjID0gQXJyYXkuZnJvbShkLmFkZGVkTm9kZXMpIHx8IFtdLCBwID0gQXJyYXkuZnJvbShkLnJlbW92ZWROb2RlcykgfHwgW107XG5cdFx0XHRjLnB1c2goLi4uQXJyYXkuZnJvbShkLmFkZGVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGYpID0+IEFycmF5LmZyb20oZj8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBwLnB1c2goLi4uQXJyYXkuZnJvbShkLnJlbW92ZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZikgPT4gQXJyYXkuZnJvbShmPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIFsuLi5uZXcgU2V0KGMpXS5maWx0ZXIoKGYpID0+IGY/Lm1hdGNoZXM/Lih0KSk/Lm1hcD8uKChmKSA9PiB7XG5cdFx0XHRcdGkuZm9yRWFjaCgodSkgPT4ge1xuXHRcdFx0XHRcdHIoe1xuXHRcdFx0XHRcdFx0dGFyZ2V0OiBmLFxuXHRcdFx0XHRcdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lOiB1LFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IGY/LmdldEF0dHJpYnV0ZT8uKHUpXG5cdFx0XHRcdFx0fSwgbyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGQudGFyZ2V0Py5tYXRjaGVzPy4odCkgJiYgZC5hdHRyaWJ1dGVOYW1lICYmIGkuaGFzKGQuYXR0cmlidXRlTmFtZSkgJiYgcihkLCBvKTtcblx0fSk7XG5cdHJldHVybiBsLm9ic2VydmUoZSA9IEtyKGUpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6ICEwLFxuXHRcdGF0dHJpYnV0ZXM6ICEwLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLmldLFxuXHRcdGNoaWxkTGlzdDogITAsXG5cdFx0c3VidHJlZTogITAsXG5cdFx0Y2hhcmFjdGVyRGF0YTogITBcblx0fSksIFsuLi5lLnF1ZXJ5U2VsZWN0b3JBbGwodCldLm1hcCgoYSkgPT4gaS5mb3JFYWNoKChvKSA9PiByKHtcblx0XHR0YXJnZXQ6IGEsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogbyxcblx0XHRvbGRWYWx1ZTogYT8uZ2V0QXR0cmlidXRlPy4obylcblx0fSwgbCkpKSwgbDtcbn07XG52YXIgQXMgPSAoZSwgdCA9IFwiKlwiLCBuID0gKHIsIGkpID0+IHt9KSA9PiB7XG5cdGNvbnN0IHIgPSAodSkgPT4ge1xuXHRcdGNvbnN0IHMgPSBBcnJheS5mcm9tKHUgfHwgW10pIHx8IFtdO1xuXHRcdHJldHVybiBzLnB1c2goLi4uQXJyYXkuZnJvbSh1IHx8IFtdKS5mbGF0TWFwKChoKSA9PiBBcnJheS5mcm9tKGg/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgWy4uLkFycmF5LmZyb20obmV3IFNldChzKS52YWx1ZXMoKSldLmZpbHRlcigoaCkgPT4gaD8ubWF0Y2hlcz8uKHQpKTtcblx0fTtcblx0bGV0IGkgPSBudWxsO1xuXHRjb25zdCBsID0gKHUpID0+IHtcblx0XHRjb25zdCBzID0gaT8uZGVyZWY/LigpLCBoID0gcih1LmFkZGVkTm9kZXMpLCBtID0gcih1LnJlbW92ZWROb2Rlcyk7XG5cdFx0KGgubGVuZ3RoID4gMCB8fCBtLmxlbmd0aCA+IDApICYmIG4/Lih7XG5cdFx0XHR0eXBlOiB1LnR5cGUsXG5cdFx0XHR0YXJnZXQ6IHUudGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogdS5hdHRyaWJ1dGVOYW1lLFxuXHRcdFx0YXR0cmlidXRlTmFtZXNwYWNlOiB1LmF0dHJpYnV0ZU5hbWVzcGFjZSxcblx0XHRcdG5leHRTaWJsaW5nOiB1Lm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IHUub2xkVmFsdWUsXG5cdFx0XHRwcmV2aW91c1NpYmxpbmc6IHUucHJldmlvdXNTaWJsaW5nLFxuXHRcdFx0YWRkZWROb2RlczogaCxcblx0XHRcdHJlbW92ZWROb2RlczogbVxuXHRcdH0sIHMpO1xuXHR9LCBhID0gKHUpID0+IHtcblx0XHRsKHtcblx0XHRcdGFkZGVkTm9kZXM6IFt1Py50YXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHJlbW92ZWROb2RlczogW3U/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IHU/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgbyA9ICh1KSA9PiB7XG5cdFx0bCh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbdT8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbdT8udGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiB1Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIGQgPSAodSkgPT4ge1xuXHRcdGwoe1xuXHRcdFx0YWRkZWROb2RlczogW3U/LnRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbdT8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogdT8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBjID0ge1xuXHRcdHBhc3NpdmU6ICEwLFxuXHRcdGNhcHR1cmU6ICExXG5cdH07XG5cdGlmICh0Py5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpICYmIHQ/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBhLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIG8sIGMpO1xuXHR9IH07XG5cdGlmICh0Py5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIG8sIGMpO1xuXHR9IH07XG5cdGlmICh0Py5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkgcmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6Zm9jdXNcIikgJiYgdD8uaW5jbHVkZXM/LihcIjpmb2N1cy13aXRoaW5cIikgJiYgdD8uaW5jbHVkZXM/LihcIjpmb2N1cy12aXNpYmxlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgbywgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGQsIGMpLCB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZCwgYyk7XG5cdH0gfTtcblx0Y29uc3QgcCA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCh1LCBzKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBoIG9mIHUpIGgudHlwZSA9PSBcImNoaWxkTGlzdFwiICYmIGwoaCk7XG5cdH0pO1xuXHRpID0gbmV3IFdlYWtSZWYocCksIChlPy5lbGVtZW50ID8/IGUpIGluc3RhbmNlb2YgTm9kZSAmJiBwLm9ic2VydmUoZSA9IEtyKGUpLCB7XG5cdFx0Y2hpbGRMaXN0OiAhMCxcblx0XHRzdWJ0cmVlOiAhMFxuXHR9KTtcblx0Y29uc3QgZiA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKHQpKTtcblx0cmV0dXJuIGYubGVuZ3RoID4gMCAmJiBuPy4oe1xuXHRcdGFkZGVkTm9kZXM6IGYsXG5cdFx0cmVtb3ZlZE5vZGVzOiBbXVxuXHR9LCBwKSwgcDtcbn07XG52YXIgTnMgPSBcIkRPTVwiO1xudmFyIFp0ID0gdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikgOiBudWxsO1xuWnQgJiYgKHR5cGVvZiBkb2N1bWVudCA8IFwidVwiICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpPy5hcHBlbmRDaGlsZD8uKFp0KSwgWnQuZGF0YXNldC5vd25lciA9IE5zKTtcbnZhciBxdCA9IHR5cGVvZiBDU1NTdHlsZVZhbHVlIDwgXCJ1XCIgJiYgdHlwZW9mIENTU1VuaXRWYWx1ZSA8IFwidVwiO1xudmFyIHBlID0gKGUpID0+IHF0ICYmIGUgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlO1xudmFyIEsgPSAoZSkgPT4gcXQgJiYgZSBpbnN0YW5jZW9mIENTU1VuaXRWYWx1ZTtcbnZhciBhZSA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoISghZSB8fCAhdCkpIHtcblx0XHRpZiAobiA9PSBudWxsKSB7XG5cdFx0XHRlLmdldFByb3BlcnR5VmFsdWUodCkgIT09IFwiXCIgJiYgZS5yZW1vdmVQcm9wZXJ0eSh0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZS5nZXRQcm9wZXJ0eVZhbHVlKHQpICE9PSBuICYmIGUuc2V0UHJvcGVydHkodCwgbiwgcik7XG5cdH1cbn07XG52YXIgVHMgPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IHtcblx0aWYgKCFlIHx8ICF0KSByZXR1cm4gZTtcblx0Y29uc3QgaSA9IEdyKHQpLCBsID0gZS5zdHlsZSwgYSA9IGUuYXR0cmlidXRlU3R5bGVNYXAgPz8gZS5zdHlsZU1hcDtcblx0aWYgKCFxdCB8fCAhYSkgcmV0dXJuIFFyKGUsIHQsIG4sIHIpO1xuXHRsZXQgbyA9IFpyKG4pICYmICEocGUobikgfHwgSyhuKSkgPyBuPy52YWx1ZSA6IG47XG5cdGlmIChvID09IG51bGwpIHJldHVybiBhLmRlbGV0ZT8uKGkpLCBsICYmIGFlKGwsIGksIG51bGwsIHIpLCBlO1xuXHRpZiAocGUobykpIHtcblx0XHRjb25zdCBkID0gYS5nZXQoaSk7XG5cdFx0aWYgKEsobykgJiYgSyhkKSkge1xuXHRcdFx0aWYgKGQudmFsdWUgPT09IG8udmFsdWUgJiYgZC51bml0ID09PSBvLnVuaXQpIHJldHVybiBlO1xuXHRcdH0gZWxzZSBpZiAoZCA9PT0gbykgcmV0dXJuIGU7XG5cdFx0cmV0dXJuIGEuc2V0KGksIG8pLCBlO1xuXHR9XG5cdGlmICh0eXBlb2YgbyA9PSBcIm51bWJlclwiKSBpZiAoQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0Y29uc3QgZCA9IENTUy5udW1iZXIobyksIGMgPSBhLmdldChpKTtcblx0XHRyZXR1cm4gSyhjKSAmJiBjLnZhbHVlID09PSBkLnZhbHVlICYmIGMudW5pdCA9PT0gZC51bml0IHx8IGEuc2V0KGksIGQpLCBlO1xuXHR9IGVsc2UgcmV0dXJuIGFlKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG5cdGlmICh0eXBlb2YgbyA9PSBcInN0cmluZ1wiICYmICFwZShvKSkge1xuXHRcdGNvbnN0IGQgPSBKcihvKTtcblx0XHRpZiAodHlwZW9mIGQgPT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAhaS5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IGMgPSBDU1MubnVtYmVyKGQpLCBwID0gYS5nZXQoaSk7XG5cdFx0XHRyZXR1cm4gSyhwKSAmJiBwLnZhbHVlID09PSBjLnZhbHVlICYmIHAudW5pdCA9PT0gYy51bml0IHx8IGEuc2V0KGksIGMpLCBlO1xuXHRcdH0gZWxzZSByZXR1cm4gYWUobCwgaSwgbywgciksIGU7XG5cdH1cblx0cmV0dXJuIGFlKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG59O1xudmFyIFFyID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBHcih0KSwgbCA9IGUuc3R5bGU7XG5cdGlmICghbCkgcmV0dXJuIGU7XG5cdGxldCBhID0gWnIobikgJiYgIShwZShuKSB8fCBLKG4pKSA/IG4/LnZhbHVlIDogbjtcblx0cmV0dXJuIHR5cGVvZiBhID09IFwic3RyaW5nXCIgJiYgIXBlKGEpICYmIChhID0gSnIoYSkgPz8gYSksIGEgPT0gbnVsbCA/IChhZShsLCBpLCBudWxsLCByKSwgZSkgOiAocGUoYSksIGFlKGwsIGksIFN0cmluZyhhKSwgciksIGUpO1xufTtcbnZhciBSID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiBxdCA/IFRzKGUsIHQsIG4sIHIpIDogUXIoZSwgdCwgbiwgcik7XG52YXIgenMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBrcyA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG5hbWVkU3RvcmVNYXBzXCIpO1xudmFyIEZuID0gZ2xvYmFsVGhpc1trc10gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgUHMgPSAoZSwgdCkgPT4ge1xuXHRjb25zdCBuID0gWy4uLmUuZW50cmllcygpIHx8IFtdXTtcblx0cmV0dXJuIG5ldyBNYXAobj8ubWFwPy4oKFtyLCBpXSkgPT4gW3IsIGk/LmdldD8uKHQpXSk/LmZpbHRlcj8uKChbciwgaV0pID0+ICEhaSkgfHwgW10pO1xufTtcbnZhciBkdCA9IChlKSA9PiAoe1xuXHRzdG9yZVNldDogUHMoRm4sIGUpLFxuXHRtaXhpblNldDogaHQ/LmdldD8uKGUpLFxuXHRiZWhhdmlvclNldDogenM/LmdldD8uKGUpXG59KTtcbnZhciBXcyA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQGJvdW5kTWl4aW5TZXRcIik7XG52YXIgaHQgPSBnbG9iYWxUaGlzW1dzXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgUnMgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkVsZW1lbnRzXCIpO1xudmFyIExlID0gZ2xvYmFsVGhpc1tSc10gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyICRzID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5SZWdpc3RyeVwiKTtcbnZhciBGZSA9IGdsb2JhbFRoaXNbJHNdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIEZzID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5OYW1lc3BhY2VcIik7XG52YXIganQgPSBnbG9iYWxUaGlzW0ZzXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZWkgPSAoZSwgdCkgPT4ge1xuXHR0eXBlb2YgdCA9PSBcInN0cmluZ1wiICYmICh0ID0gRmU/LmdldD8uKHQpKTtcblx0Y29uc3QgbiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lPy5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSksIHIgPSBuZXcgU2V0KFsuLi5uXS5tYXAoKGEpID0+IEZlPy5nZXQ/LihhKSkuZmlsdGVyKChhKSA9PiAhIWEpKSwgaSA9IGh0Py5nZXQ/LihlKSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcblx0TGU/Lmhhcz8uKHQpIHx8IExlPy5zZXQ/Lih0LCAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKSksIGh0Py5oYXM/LihlKSB8fCBodD8uc2V0Py4oZSwgaSk7XG5cdGNvbnN0IGwgPSBuZXcgV2Vha1JlZihlKTtcblx0aT8uaGFzPy4odCkgfHwgKHIuaGFzKHQpIHx8IHQ/LmRpc2Nvbm5lY3Q/LihsLCB0LCBkdChlKSksIChyLmhhcyh0KSB8fCAhTGU/LmdldD8uKHQpPy5oYXM/LihlKSkgJiYgKHQ/LmNvbm5lY3Q/LihsLCB0LCBkdChlKSksIG4uYWRkKGp0Py5nZXQ/Lih0KSksIGk/LmFkZD8uKHQpLCBlPy5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLm5dLmZpbHRlcigoYSkgPT4gISFhKS5qb2luKFwiIFwiKSkpLCBMZT8uZ2V0Py4odCk/LmFkZD8uKGUpKSwgaT8uaGFzPy4odCkgJiYgKHIuaGFzKHQpIHx8IChpPy5kZWxldGU/Lih0KSwgdD8uZGlzY29ubmVjdD8uKGwsIHQsIGR0KGUpKSkpO1xufTtcbnZhciBxbiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgcXMgPSAoZSA9IHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQgOiBudWxsKSA9PiB7XG5cdGlmIChlKSByZXR1cm4gcW4/Lmhhcz8uKGUpIHx8IChxbj8uYWRkPy4oZSksIExzKGUsIFwiKlwiLCBcImRhdGEtbWl4aW5cIiwgKHQpID0+IE9uKHQudGFyZ2V0KSksIEFzKGUsIFwiW2RhdGEtbWl4aW5dXCIsICh0KSA9PiB7XG5cdFx0Zm9yIChjb25zdCBuIG9mIHQuYWRkZWROb2RlcykgbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIE9uKG4pO1xuXHR9KSksIGU7XG59O1xudmFyIE9uID0gKGUpID0+IHtcblx0Y29uc3QgdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lPy5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdFsuLi5uZXcgU2V0KFsuLi50XS5tYXAoKG4pID0+IEZlPy5nZXQ/LihuKSkuZmlsdGVyKChuKSA9PiAhIW4pKV0ubWFwPy4oKG4pID0+IGVpKGUsIG4pKTtcbn07XG52YXIgT3MgPSAoZSwgdCkgPT4ge1xuXHRlLmZvckVhY2goKG4pID0+IHQgPyBlaShuLCB0KSA6IE9uKG4pKTtcbn07XG52YXIgSHMgPSAoZSkgPT4ge1xuXHRmb3IgKGNvbnN0IHQgb2YgcW4pIE9zKHQ/LnF1ZXJ5U2VsZWN0b3JBbGw/LihcIltkYXRhLW1peGluXVwiKSwgZSk7XG59O1xudmFyIElzID0gbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChlKSA9PiB7XG5cdEZlPy5kZWxldGU/LihlKTtcbn0pO1xudmFyIEJzID0gKGUsIHQpID0+IHtcblx0aWYgKCFqdD8uaGFzPy4odCkpIHtcblx0XHRjb25zdCBuID0gZT8udHJpbT8uKCk7XG5cdFx0biAmJiAoanQ/LnNldD8uKHQsIG4pLCBGZT8uc2V0Py4obiwgdCksIElzPy5yZWdpc3Rlcj8uKHQsIG4pLCBIcyh0KSk7XG5cdH1cbn07XG5xcyh0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50IDogbnVsbCk7XG52YXIgbWUgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGUgPSBudWxsKSB7XG5cdFx0ZSAmJiBCcyhlLCB0aGlzKTtcblx0fVxuXHRjb25uZWN0KGUsIHQsIG4pIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUsIHQsIG4pIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRzdG9yZUZvckVsZW1lbnQoZSkge1xuXHRcdHJldHVybiBGbi5nZXQodGhpcy5uYW1lIHx8IFwiXCIpPy5nZXQ/LihlKTtcblx0fVxuXHRyZWxhdGVkRm9yRWxlbWVudChlKSB7XG5cdFx0cmV0dXJuIGR0KGUpO1xuXHR9XG5cdGdldCBlbGVtZW50cygpIHtcblx0XHRyZXR1cm4gTGU/LmdldD8uKHRoaXMpO1xuXHR9XG5cdGdldCBzdG9yYWdlKCkge1xuXHRcdHJldHVybiBGbj8uZ2V0Py4odGhpcy5uYW1lIHx8IFwiXCIpO1xuXHR9XG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBqdD8uZ2V0Py4odGhpcyk7XG5cdH1cbn07XG5mdW5jdGlvbiBHdChlLCB0KSB7XG5cdGNvbnN0IG4gPSBNYXRoLm1pbihlLngsIHQueCksIHIgPSBNYXRoLm1pbihlLnksIHQueSksIGkgPSBNYXRoLm1heChlLngsIHQueCksIGwgPSBNYXRoLm1heChlLnksIHQueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdDogbixcblx0XHR0b3A6IHIsXG5cdFx0cmlnaHQ6IGksXG5cdFx0Ym90dG9tOiBsLFxuXHRcdHdpZHRoOiBpIC0gbixcblx0XHRoZWlnaHQ6IGwgLSByXG5cdH07XG59XG52YXIgVWUgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgSnQgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgS3QgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG52YXIgWHMgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBNdCA9IGdsb2JhbFRoaXNbWHNdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IE10LmdldChlKSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBpID0gci5nZXQodCkgPz8gW107XG5cdGkucHVzaChuKSwgci5zZXQodCwgaSksIE10LnNldChlLCByKTtcbn07XG52YXIgR24gPSAoZSwgdCkgPT4ge1xuXHRjb25zdCBuID0gTXQuZ2V0KGUpLCByID0gbj8uZ2V0KHQpO1xuXHRpZiAocikge1xuXHRcdGZvciAoY29uc3QgaSBvZiByKSB0cnkge1xuXHRcdFx0aSgpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRuLmRlbGV0ZSh0KSwgbi5zaXplID09PSAwICYmIE10LmRlbGV0ZShlKTtcblx0fVxufTtcbnZhciBxID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGUpPy5nZXRQcm9wZXJ0eVZhbHVlPy4odCk/LnRyaW0/LigpID8/IFwiXCIsIHIgPSBwYXJzZUZsb2F0KG4pO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKHIpID8gciA6IDA7XG59O1xudmFyIHRpID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IGUuZ2V0QXR0cmlidXRlKHQpPy50cmltKCk7XG5cdGlmICghcikgcmV0dXJuIG47XG5cdGNvbnN0IGkgPSBlLnF1ZXJ5U2VsZWN0b3Iocik7XG5cdHJldHVybiBpIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpIDogbjtcbn07XG52YXIgWXMgPSBjbGFzcyBleHRlbmRzIG1lIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG4uY2xhc3NOYW1lID0gXCJ1aS1qdW5jdGlvbi1zZWxlY3Qtb3ZlcmxheVwiLCBuLnNldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tb3ZlcmxheVwiLCBcIlwiKSwgbi5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6OTk5OTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDE0JSwgdHJhbnNwYXJlbnQpO2Rpc3BsYXk6bm9uZTtpbnNldDphdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtcIiwgZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4odCk/LnBvc2l0aW9uID09PSBcInN0YXRpY1wiICYmICh0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiKSwgdC5hcHBlbmRDaGlsZChuKTtcblx0XHRsZXQgciA9ICExLCBpID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9LCBsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGNvbnN0IGEgPSAocykgPT4ge1xuXHRcdFx0Y29uc3QgaCA9IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBzLmNsaWVudFggLSBoLmxlZnQsXG5cdFx0XHRcdHk6IHMuY2xpZW50WSAtIGgudG9wXG5cdFx0XHR9O1xuXHRcdH0sIG8gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzID0gR3QoaSwgbCk7XG5cdFx0XHRpZiAocy53aWR0aCA8IDEgJiYgcy5oZWlnaHQgPCAxKSB7XG5cdFx0XHRcdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIsIG4uc3R5bGUubGVmdCA9IGAke3MubGVmdH1weGAsIG4uc3R5bGUudG9wID0gYCR7cy50b3B9cHhgLCBuLnN0eWxlLndpZHRoID0gYCR7cy53aWR0aH1weGAsIG4uc3R5bGUuaGVpZ2h0ID0gYCR7cy5oZWlnaHR9cHhgO1xuXHRcdH0sIGQgPSAocykgPT4ge1xuXHRcdFx0cy5idXR0b24gPT09IDAgJiYgKHMudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1qdW5jdGlvbi1pZ25vcmUtc2VsZWN0XSwgW2RhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVdLCBbZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXSwgYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSB8fCAocy50YXJnZXQgPT09IHQgfHwgdC5jb250YWlucyhzLnRhcmdldCkpICYmIChyID0gITAsIGkgPSBhKHMpLCBsID0geyAuLi5pIH0sIHQuc2V0UG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFVlLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmkgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKSwgbygpKSk7XG5cdFx0fSwgYyA9IChzKSA9PiB7XG5cdFx0XHRpZiAoIXIpIHJldHVybjtcblx0XHRcdGwgPSBhKHMpLCBvKCk7XG5cdFx0XHRjb25zdCBoID0gR3QoaSwgbCk7XG5cdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFVlLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uaSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ubCB9LFxuXHRcdFx0XHRcdGJveDogaCxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBwID0gKHMpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0ciA9ICExO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dC5yZWxlYXNlUG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgaCA9IEd0KGksIGwpO1xuXHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChVZS5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uaSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ubCB9LFxuXHRcdFx0XHRcdGJveDogaCxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBmID0gKHMpID0+IHtcblx0XHRcdHIgJiYgcChzKTtcblx0XHR9LCB1ID0gKHMpID0+IHtcblx0XHRcdGlmIChyKSB7XG5cdFx0XHRcdHIgPSAhMSwgbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dC5yZWxlYXNlUG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoVWUuY2FuY2VsLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7IGhvc3Q6IHQgfVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gYih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRuLnJlbW92ZSgpO1xuXHRcdH0pLCBiKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIHYodCwgXCJwb2ludGVyZG93blwiLCBkKSksIGIodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgdih0LCBcInBvaW50ZXJtb3ZlXCIsIGMpKSwgYih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB2KHQsIFwicG9pbnRlcnVwXCIsIGYpKSwgYih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB2KHQsIFwicG9pbnRlcmNhbmNlbFwiLCB1KSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiBHbih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKSwgdGhpcztcblx0fVxufTtcbnZhciBfcyA9IGNsYXNzIGV4dGVuZHMgbWUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdFIodCwgXCItLWp4LWRyYWcteFwiLCBxKHQsIFwiLS1qeC1kcmFnLXhcIikpLCBSKHQsIFwiLS1qeC1kcmFnLXlcIiwgcSh0LCBcIi0tangtZHJhZy15XCIpKTtcblx0XHRjb25zdCBuID0gdC5zdHlsZS50cmFuc2Zvcm07XG5cdFx0KCF0LnN0eWxlLnRyYW5zZm9ybSB8fCB0LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJub25lXCIpICYmICh0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoY2FsYyh2YXIoLS1qeC1kcmFnLXgsIDApICogMXB4KSwgY2FsYyh2YXIoLS1qeC1kcmFnLXksIDApICogMXB4KSwgMClcIik7XG5cdFx0Y29uc3QgciA9IHRpKHQsIFwiZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZVwiLCB0KTtcblx0XHRsZXQgaSA9ICExLCBsID0gMCwgYSA9IDAsIG8gPSAwLCBkID0gMDtcblx0XHRjb25zdCBjID0gKHUpID0+IHtcblx0XHRcdHUuYnV0dG9uID09PSAwICYmICh1LnRhcmdldCAhPT0gciAmJiAhci5jb250YWlucyh1LnRhcmdldCkgfHwgKGkgPSAhMCwgbCA9IHUuY2xpZW50WCwgYSA9IHUuY2xpZW50WSwgbyA9IHEodCwgXCItLWp4LWRyYWcteFwiKSwgZCA9IHEodCwgXCItLWp4LWRyYWcteVwiKSwgci5zZXRQb2ludGVyQ2FwdHVyZSh1LnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSnQuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0Y2xpZW50WDogdS5jbGllbnRYLFxuXHRcdFx0XHRcdGNsaWVudFk6IHUuY2xpZW50WSxcblx0XHRcdFx0XHRiYXNlWDogbyxcblx0XHRcdFx0XHRiYXNlWTogZFxuXHRcdFx0XHR9XG5cdFx0XHR9KSkpKTtcblx0XHR9LCBwID0gKHUpID0+IHtcblx0XHRcdGlmICghaSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgcyA9IHUuY2xpZW50WCAtIGwsIGggPSB1LmNsaWVudFkgLSBhLCBtID0gbyArIHMsIGcgPSBkICsgaDtcblx0XHRcdFIodCwgXCItLWp4LWRyYWcteFwiLCBtKSwgUih0LCBcIi0tangtZHJhZy15XCIsIGcpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEp0Lm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0ZHg6IHMsXG5cdFx0XHRcdFx0ZHk6IGgsXG5cdFx0XHRcdFx0eDogbSxcblx0XHRcdFx0XHR5OiBnXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBmID0gKHUpID0+IHtcblx0XHRcdGlmIChpKSB7XG5cdFx0XHRcdGkgPSAhMTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyLnJlbGVhc2VQb2ludGVyQ2FwdHVyZSh1LnBvaW50ZXJJZCk7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKdC5lbmQsIHtcblx0XHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0XHR4OiBxKHQsIFwiLS1qeC1kcmFnLXhcIiksXG5cdFx0XHRcdFx0XHR5OiBxKHQsIFwiLS1qeC1kcmFnLXlcIilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBiKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCAoKSA9PiB7XG5cdFx0XHR0LnN0eWxlLnRyYW5zZm9ybSA9IG47XG5cdFx0fSksIGIodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIHYociwgXCJwb2ludGVyZG93blwiLCBjKSksIGIodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIHYociwgXCJwb2ludGVybW92ZVwiLCBwKSksIGIodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIHYociwgXCJwb2ludGVydXBcIiwgZikpLCBiKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcmNhbmNlbFwiLCBmKSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiBHbih0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiksIHRoaXM7XG5cdH1cbn07XG52YXIgRHMgPSBjbGFzcyBleHRlbmRzIG1lIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG4gPSB0aSh0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCB0KTtcblx0XHRsZXQgciA9ICExLCBpID0gMCwgbCA9IDAsIGEgPSAwLCBvID0gMDtcblx0XHRjb25zdCBkID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKSwgYyA9IE1hdGgubWF4KDgwLCBwYXJzZUZsb2F0KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLWhcIikgfHwgXCJcIikgfHwgODApLCBwID0gKHMpID0+IHtcblx0XHRcdHMuYnV0dG9uID09PSAwICYmIChzLnRhcmdldCAhPT0gbiAmJiAhbi5jb250YWlucyhzLnRhcmdldCkgfHwgKHIgPSAhMCwgaSA9IHMuY2xpZW50WCwgbCA9IHMuY2xpZW50WSwgYSA9IHQub2Zmc2V0V2lkdGgsIG8gPSB0Lm9mZnNldEhlaWdodCwgbi5zZXRQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoS3Quc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0d2lkdGg6IGEsXG5cdFx0XHRcdFx0aGVpZ2h0OiBvXG5cdFx0XHRcdH1cblx0XHRcdH0pKSkpO1xuXHRcdH0sIGYgPSAocykgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRjb25zdCBoID0gTWF0aC5tYXgoZCwgYSArIChzLmNsaWVudFggLSBpKSksIG0gPSBNYXRoLm1heChjLCBvICsgKHMuY2xpZW50WSAtIGwpKTtcblx0XHRcdHQuc3R5bGUud2lkdGggPSBgJHtofXB4YCwgdC5zdHlsZS5oZWlnaHQgPSBgJHttfXB4YCwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChLdC5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdHdpZHRoOiBoLFxuXHRcdFx0XHRcdGhlaWdodDogbVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgdSA9IChzKSA9PiB7XG5cdFx0XHRpZiAocikge1xuXHRcdFx0XHRyID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0bi5yZWxlYXNlUG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoS3QuZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0d2lkdGg6IHQub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IHQub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gYih0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCB2KG4sIFwicG9pbnRlcmRvd25cIiwgcCkpLCBiKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHYobiwgXCJwb2ludGVybW92ZVwiLCBmKSksIGIodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgdihuLCBcInBvaW50ZXJ1cFwiLCB1KSksIGIodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgdihuLCBcInBvaW50ZXJjYW5jZWxcIiwgdSkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgR24odCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiksIHRoaXM7XG5cdH1cbn07XG5uZXcgWXMoKTtcbm5ldyBfcygpO1xubmV3IERzKCk7XG5mdW5jdGlvbiBRdChlLCB0KSB7XG5cdGNvbnN0IG4gPSBNYXRoLm1pbihlLngsIHQueCksIHIgPSBNYXRoLm1pbihlLnksIHQueSksIGkgPSBNYXRoLm1heChlLngsIHQueCksIGwgPSBNYXRoLm1heChlLnksIHQueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdDogbixcblx0XHR0b3A6IHIsXG5cdFx0cmlnaHQ6IGksXG5cdFx0Ym90dG9tOiBsLFxuXHRcdHdpZHRoOiBpIC0gbixcblx0XHRoZWlnaHQ6IGwgLSByXG5cdH07XG59XG52YXIgWmUgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgZW4gPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgdG4gPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG52YXIgVXMgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBDdCA9IGdsb2JhbFRoaXNbVXNdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB4ID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IEN0LmdldChlKSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBpID0gci5nZXQodCkgPz8gW107XG5cdGkucHVzaChuKSwgci5zZXQodCwgaSksIEN0LnNldChlLCByKTtcbn07XG52YXIgSm4gPSAoZSwgdCkgPT4ge1xuXHRjb25zdCBuID0gQ3QuZ2V0KGUpLCByID0gbj8uZ2V0KHQpO1xuXHRpZiAocikge1xuXHRcdGZvciAoY29uc3QgaSBvZiByKSB0cnkge1xuXHRcdFx0aSgpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRuLmRlbGV0ZSh0KSwgbi5zaXplID09PSAwICYmIEN0LmRlbGV0ZShlKTtcblx0fVxufTtcbnZhciBPID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGUpPy5nZXRQcm9wZXJ0eVZhbHVlPy4odCk/LnRyaW0/LigpID8/IFwiXCIsIHIgPSBwYXJzZUZsb2F0KG4pO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKHIpID8gciA6IDA7XG59O1xudmFyIG5pID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IGUuZ2V0QXR0cmlidXRlKHQpPy50cmltKCk7XG5cdGlmICghcikgcmV0dXJuIG47XG5cdGNvbnN0IGkgPSBlLnF1ZXJ5U2VsZWN0b3Iocik7XG5cdHJldHVybiBpIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpIDogbjtcbn07XG52YXIgWnMgPSBjbGFzcyBleHRlbmRzIG1lIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG4uY2xhc3NOYW1lID0gXCJ1aS1qdW5jdGlvbi1zZWxlY3Qtb3ZlcmxheVwiLCBuLnNldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tb3ZlcmxheVwiLCBcIlwiKSwgbi5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6OTk5OTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDE0JSwgdHJhbnNwYXJlbnQpO2Rpc3BsYXk6bm9uZTtpbnNldDphdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtcIiwgZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4odCk/LnBvc2l0aW9uID09PSBcInN0YXRpY1wiICYmICh0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiKSwgdC5hcHBlbmRDaGlsZChuKTtcblx0XHRsZXQgciA9ICExLCBpID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9LCBsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGNvbnN0IGEgPSAocykgPT4ge1xuXHRcdFx0Y29uc3QgaCA9IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBzLmNsaWVudFggLSBoLmxlZnQsXG5cdFx0XHRcdHk6IHMuY2xpZW50WSAtIGgudG9wXG5cdFx0XHR9O1xuXHRcdH0sIG8gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzID0gUXQoaSwgbCk7XG5cdFx0XHRpZiAocy53aWR0aCA8IDEgJiYgcy5oZWlnaHQgPCAxKSB7XG5cdFx0XHRcdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIsIG4uc3R5bGUubGVmdCA9IGAke3MubGVmdH1weGAsIG4uc3R5bGUudG9wID0gYCR7cy50b3B9cHhgLCBuLnN0eWxlLndpZHRoID0gYCR7cy53aWR0aH1weGAsIG4uc3R5bGUuaGVpZ2h0ID0gYCR7cy5oZWlnaHR9cHhgO1xuXHRcdH0sIGQgPSAocykgPT4ge1xuXHRcdFx0cy5idXR0b24gPT09IDAgJiYgKHMudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1qdW5jdGlvbi1pZ25vcmUtc2VsZWN0XSwgW2RhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVdLCBbZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXSwgYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSB8fCAocy50YXJnZXQgPT09IHQgfHwgdC5jb250YWlucyhzLnRhcmdldCkpICYmIChyID0gITAsIGkgPSBhKHMpLCBsID0geyAuLi5pIH0sIHQuc2V0UG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFplLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmkgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKSwgbygpKSk7XG5cdFx0fSwgYyA9IChzKSA9PiB7XG5cdFx0XHRpZiAoIXIpIHJldHVybjtcblx0XHRcdGwgPSBhKHMpLCBvKCk7XG5cdFx0XHRjb25zdCBoID0gUXQoaSwgbCk7XG5cdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFplLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uaSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ubCB9LFxuXHRcdFx0XHRcdGJveDogaCxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBwID0gKHMpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0ciA9ICExO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dC5yZWxlYXNlUG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgaCA9IFF0KGksIGwpO1xuXHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChaZS5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uaSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ubCB9LFxuXHRcdFx0XHRcdGJveDogaCxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBmID0gKHMpID0+IHtcblx0XHRcdHIgJiYgcChzKTtcblx0XHR9LCB1ID0gKHMpID0+IHtcblx0XHRcdGlmIChyKSB7XG5cdFx0XHRcdHIgPSAhMSwgbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dC5yZWxlYXNlUG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoWmUuY2FuY2VsLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7IGhvc3Q6IHQgfVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4geCh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRuLnJlbW92ZSgpO1xuXHRcdH0pLCB4KHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIHYodCwgXCJwb2ludGVyZG93blwiLCBkKSksIHgodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgdih0LCBcInBvaW50ZXJtb3ZlXCIsIGMpKSwgeCh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB2KHQsIFwicG9pbnRlcnVwXCIsIGYpKSwgeCh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB2KHQsIFwicG9pbnRlcmNhbmNlbFwiLCB1KSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiBKbih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKSwgdGhpcztcblx0fVxufTtcbnZhciBHcyA9IGNsYXNzIGV4dGVuZHMgbWUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdFIodCwgXCItLWp4LWRyYWcteFwiLCBPKHQsIFwiLS1qeC1kcmFnLXhcIikpLCBSKHQsIFwiLS1qeC1kcmFnLXlcIiwgTyh0LCBcIi0tangtZHJhZy15XCIpKTtcblx0XHRjb25zdCBuID0gdC5zdHlsZS50cmFuc2Zvcm07XG5cdFx0KCF0LnN0eWxlLnRyYW5zZm9ybSB8fCB0LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJub25lXCIpICYmICh0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoY2FsYyh2YXIoLS1qeC1kcmFnLXgsIDApICogMXB4KSwgY2FsYyh2YXIoLS1qeC1kcmFnLXksIDApICogMXB4KSwgMClcIik7XG5cdFx0Y29uc3QgciA9IG5pKHQsIFwiZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZVwiLCB0KTtcblx0XHRsZXQgaSA9ICExLCBsID0gMCwgYSA9IDAsIG8gPSAwLCBkID0gMDtcblx0XHRjb25zdCBjID0gKHUpID0+IHtcblx0XHRcdHUuYnV0dG9uID09PSAwICYmICh1LnRhcmdldCAhPT0gciAmJiAhci5jb250YWlucyh1LnRhcmdldCkgfHwgKGkgPSAhMCwgbCA9IHUuY2xpZW50WCwgYSA9IHUuY2xpZW50WSwgbyA9IE8odCwgXCItLWp4LWRyYWcteFwiKSwgZCA9IE8odCwgXCItLWp4LWRyYWcteVwiKSwgci5zZXRQb2ludGVyQ2FwdHVyZSh1LnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZW4uc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0Y2xpZW50WDogdS5jbGllbnRYLFxuXHRcdFx0XHRcdGNsaWVudFk6IHUuY2xpZW50WSxcblx0XHRcdFx0XHRiYXNlWDogbyxcblx0XHRcdFx0XHRiYXNlWTogZFxuXHRcdFx0XHR9XG5cdFx0XHR9KSkpKTtcblx0XHR9LCBwID0gKHUpID0+IHtcblx0XHRcdGlmICghaSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgcyA9IHUuY2xpZW50WCAtIGwsIGggPSB1LmNsaWVudFkgLSBhLCBtID0gbyArIHMsIGcgPSBkICsgaDtcblx0XHRcdFIodCwgXCItLWp4LWRyYWcteFwiLCBtKSwgUih0LCBcIi0tangtZHJhZy15XCIsIGcpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGVuLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0ZHg6IHMsXG5cdFx0XHRcdFx0ZHk6IGgsXG5cdFx0XHRcdFx0eDogbSxcblx0XHRcdFx0XHR5OiBnXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBmID0gKHUpID0+IHtcblx0XHRcdGlmIChpKSB7XG5cdFx0XHRcdGkgPSAhMTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyLnJlbGVhc2VQb2ludGVyQ2FwdHVyZSh1LnBvaW50ZXJJZCk7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChlbi5lbmQsIHtcblx0XHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0XHR4OiBPKHQsIFwiLS1qeC1kcmFnLXhcIiksXG5cdFx0XHRcdFx0XHR5OiBPKHQsIFwiLS1qeC1kcmFnLXlcIilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiB4KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCAoKSA9PiB7XG5cdFx0XHR0LnN0eWxlLnRyYW5zZm9ybSA9IG47XG5cdFx0fSksIHgodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIHYociwgXCJwb2ludGVyZG93blwiLCBjKSksIHgodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIHYociwgXCJwb2ludGVybW92ZVwiLCBwKSksIHgodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIHYociwgXCJwb2ludGVydXBcIiwgZikpLCB4KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcmNhbmNlbFwiLCBmKSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiBKbih0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiksIHRoaXM7XG5cdH1cbn07XG52YXIgSnMgPSBjbGFzcyBleHRlbmRzIG1lIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG4gPSBuaSh0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCB0KTtcblx0XHRsZXQgciA9ICExLCBpID0gMCwgbCA9IDAsIGEgPSAwLCBvID0gMDtcblx0XHRjb25zdCBkID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKSwgYyA9IE1hdGgubWF4KDgwLCBwYXJzZUZsb2F0KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLWhcIikgfHwgXCJcIikgfHwgODApLCBwID0gKHMpID0+IHtcblx0XHRcdHMuYnV0dG9uID09PSAwICYmIChzLnRhcmdldCAhPT0gbiAmJiAhbi5jb250YWlucyhzLnRhcmdldCkgfHwgKHIgPSAhMCwgaSA9IHMuY2xpZW50WCwgbCA9IHMuY2xpZW50WSwgYSA9IHQub2Zmc2V0V2lkdGgsIG8gPSB0Lm9mZnNldEhlaWdodCwgbi5zZXRQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodG4uc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0d2lkdGg6IGEsXG5cdFx0XHRcdFx0aGVpZ2h0OiBvXG5cdFx0XHRcdH1cblx0XHRcdH0pKSkpO1xuXHRcdH0sIGYgPSAocykgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRjb25zdCBoID0gTWF0aC5tYXgoZCwgYSArIChzLmNsaWVudFggLSBpKSksIG0gPSBNYXRoLm1heChjLCBvICsgKHMuY2xpZW50WSAtIGwpKTtcblx0XHRcdHQuc3R5bGUud2lkdGggPSBgJHtofXB4YCwgdC5zdHlsZS5oZWlnaHQgPSBgJHttfXB4YCwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0bi5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdHdpZHRoOiBoLFxuXHRcdFx0XHRcdGhlaWdodDogbVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgdSA9IChzKSA9PiB7XG5cdFx0XHRpZiAocikge1xuXHRcdFx0XHRyID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0bi5yZWxlYXNlUG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodG4uZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0d2lkdGg6IHQub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IHQub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4geCh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCB2KG4sIFwicG9pbnRlcmRvd25cIiwgcCkpLCB4KHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHYobiwgXCJwb2ludGVybW92ZVwiLCBmKSksIHgodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgdihuLCBcInBvaW50ZXJ1cFwiLCB1KSksIHgodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgdihuLCBcInBvaW50ZXJjYW5jZWxcIiwgdSkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgSm4odCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiksIHRoaXM7XG5cdH1cbn07XG5uZXcgWnMoKTtcbm5ldyBHcygpO1xubmV3IEpzKCk7XG5mdW5jdGlvbiBubihlLCB0KSB7XG5cdGNvbnN0IG4gPSBNYXRoLm1pbihlLngsIHQueCksIHIgPSBNYXRoLm1pbihlLnksIHQueSksIGkgPSBNYXRoLm1heChlLngsIHQueCksIGwgPSBNYXRoLm1heChlLnksIHQueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdDogbixcblx0XHR0b3A6IHIsXG5cdFx0cmlnaHQ6IGksXG5cdFx0Ym90dG9tOiBsLFxuXHRcdHdpZHRoOiBpIC0gbixcblx0XHRoZWlnaHQ6IGwgLSByXG5cdH07XG59XG52YXIgR2UgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgcm4gPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgYW4gPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG52YXIgS3MgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBWdCA9IGdsb2JhbFRoaXNbS3NdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB3ID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IFZ0LmdldChlKSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBpID0gci5nZXQodCkgPz8gW107XG5cdGkucHVzaChuKSwgci5zZXQodCwgaSksIFZ0LnNldChlLCByKTtcbn07XG52YXIgS24gPSAoZSwgdCkgPT4ge1xuXHRjb25zdCBuID0gVnQuZ2V0KGUpLCByID0gbj8uZ2V0KHQpO1xuXHRpZiAocikge1xuXHRcdGZvciAoY29uc3QgaSBvZiByKSB0cnkge1xuXHRcdFx0aSgpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRuLmRlbGV0ZSh0KSwgbi5zaXplID09PSAwICYmIFZ0LmRlbGV0ZShlKTtcblx0fVxufTtcbnZhciBIID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGUpPy5nZXRQcm9wZXJ0eVZhbHVlPy4odCk/LnRyaW0/LigpID8/IFwiXCIsIHIgPSBwYXJzZUZsb2F0KG4pO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKHIpID8gciA6IDA7XG59O1xudmFyIHJpID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IGUuZ2V0QXR0cmlidXRlKHQpPy50cmltKCk7XG5cdGlmICghcikgcmV0dXJuIG47XG5cdGNvbnN0IGkgPSBlLnF1ZXJ5U2VsZWN0b3Iocik7XG5cdHJldHVybiBpIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpIDogbjtcbn07XG52YXIgUXMgPSBjbGFzcyBleHRlbmRzIFpuIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG4uY2xhc3NOYW1lID0gXCJ1aS1qdW5jdGlvbi1zZWxlY3Qtb3ZlcmxheVwiLCBuLnNldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tb3ZlcmxheVwiLCBcIlwiKSwgbi5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6OTk5OTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDE0JSwgdHJhbnNwYXJlbnQpO2Rpc3BsYXk6bm9uZTtpbnNldDphdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtcIiwgZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4odCk/LnBvc2l0aW9uID09PSBcInN0YXRpY1wiICYmICh0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiKSwgdC5hcHBlbmRDaGlsZChuKTtcblx0XHRsZXQgciA9ICExLCBpID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9LCBsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGNvbnN0IGEgPSAocykgPT4ge1xuXHRcdFx0Y29uc3QgaCA9IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBzLmNsaWVudFggLSBoLmxlZnQsXG5cdFx0XHRcdHk6IHMuY2xpZW50WSAtIGgudG9wXG5cdFx0XHR9O1xuXHRcdH0sIG8gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzID0gbm4oaSwgbCk7XG5cdFx0XHRpZiAocy53aWR0aCA8IDEgJiYgcy5oZWlnaHQgPCAxKSB7XG5cdFx0XHRcdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIsIG4uc3R5bGUubGVmdCA9IGAke3MubGVmdH1weGAsIG4uc3R5bGUudG9wID0gYCR7cy50b3B9cHhgLCBuLnN0eWxlLndpZHRoID0gYCR7cy53aWR0aH1weGAsIG4uc3R5bGUuaGVpZ2h0ID0gYCR7cy5oZWlnaHR9cHhgO1xuXHRcdH0sIGQgPSAocykgPT4ge1xuXHRcdFx0cy5idXR0b24gPT09IDAgJiYgKHMudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1qdW5jdGlvbi1pZ25vcmUtc2VsZWN0XSwgW2RhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVdLCBbZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXSwgYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSB8fCAocy50YXJnZXQgPT09IHQgfHwgdC5jb250YWlucyhzLnRhcmdldCkpICYmIChyID0gITAsIGkgPSBhKHMpLCBsID0geyAuLi5pIH0sIHQuc2V0UG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEdlLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmkgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKSwgbygpKSk7XG5cdFx0fSwgYyA9IChzKSA9PiB7XG5cdFx0XHRpZiAoIXIpIHJldHVybjtcblx0XHRcdGwgPSBhKHMpLCBvKCk7XG5cdFx0XHRjb25zdCBoID0gbm4oaSwgbCk7XG5cdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEdlLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uaSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ubCB9LFxuXHRcdFx0XHRcdGJveDogaCxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBwID0gKHMpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0ciA9ICExO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dC5yZWxlYXNlUG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgaCA9IG5uKGksIGwpO1xuXHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChHZS5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uaSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ubCB9LFxuXHRcdFx0XHRcdGJveDogaCxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBmID0gKHMpID0+IHtcblx0XHRcdHIgJiYgcChzKTtcblx0XHR9LCB1ID0gKHMpID0+IHtcblx0XHRcdGlmIChyKSB7XG5cdFx0XHRcdHIgPSAhMSwgbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dC5yZWxlYXNlUG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoR2UuY2FuY2VsLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7IGhvc3Q6IHQgfVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gdyh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRuLnJlbW92ZSgpO1xuXHRcdH0pLCB3KHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIHoodCwgXCJwb2ludGVyZG93blwiLCBkKSksIHcodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgeih0LCBcInBvaW50ZXJtb3ZlXCIsIGMpKSwgdyh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB6KHQsIFwicG9pbnRlcnVwXCIsIGYpKSwgdyh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB6KHQsIFwicG9pbnRlcmNhbmNlbFwiLCB1KSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiBLbih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKSwgdGhpcztcblx0fVxufTtcbnZhciBlbCA9IGNsYXNzIGV4dGVuZHMgWm4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdERlKHQsIFwiLS1qeC1kcmFnLXhcIiwgSCh0LCBcIi0tangtZHJhZy14XCIpKSwgRGUodCwgXCItLWp4LWRyYWcteVwiLCBIKHQsIFwiLS1qeC1kcmFnLXlcIikpO1xuXHRcdGNvbnN0IG4gPSB0LnN0eWxlLnRyYW5zZm9ybTtcblx0XHQoIXQuc3R5bGUudHJhbnNmb3JtIHx8IHQuc3R5bGUudHJhbnNmb3JtID09PSBcIm5vbmVcIikgJiYgKHQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChjYWxjKHZhcigtLWp4LWRyYWcteCwgMCkgKiAxcHgpLCBjYWxjKHZhcigtLWp4LWRyYWcteSwgMCkgKiAxcHgpLCAwKVwiKTtcblx0XHRjb25zdCByID0gcmkodCwgXCJkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXCIsIHQpO1xuXHRcdGxldCBpID0gITEsIGwgPSAwLCBhID0gMCwgbyA9IDAsIGQgPSAwO1xuXHRcdGNvbnN0IGMgPSAodSkgPT4ge1xuXHRcdFx0dS5idXR0b24gPT09IDAgJiYgKHUudGFyZ2V0ICE9PSByICYmICFyLmNvbnRhaW5zKHUudGFyZ2V0KSB8fCAoaSA9ICEwLCBsID0gdS5jbGllbnRYLCBhID0gdS5jbGllbnRZLCBvID0gSCh0LCBcIi0tangtZHJhZy14XCIpLCBkID0gSCh0LCBcIi0tangtZHJhZy15XCIpLCByLnNldFBvaW50ZXJDYXB0dXJlKHUucG9pbnRlcklkKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChybi5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRjbGllbnRYOiB1LmNsaWVudFgsXG5cdFx0XHRcdFx0Y2xpZW50WTogdS5jbGllbnRZLFxuXHRcdFx0XHRcdGJhc2VYOiBvLFxuXHRcdFx0XHRcdGJhc2VZOiBkXG5cdFx0XHRcdH1cblx0XHRcdH0pKSkpO1xuXHRcdH0sIHAgPSAodSkgPT4ge1xuXHRcdFx0aWYgKCFpKSByZXR1cm47XG5cdFx0XHRjb25zdCBzID0gdS5jbGllbnRYIC0gbCwgaCA9IHUuY2xpZW50WSAtIGEsIG0gPSBvICsgcywgZyA9IGQgKyBoO1xuXHRcdFx0RGUodCwgXCItLWp4LWRyYWcteFwiLCBtKSwgRGUodCwgXCItLWp4LWRyYWcteVwiLCBnKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChybi5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGR4OiBzLFxuXHRcdFx0XHRcdGR5OiBoLFxuXHRcdFx0XHRcdHg6IG0sXG5cdFx0XHRcdFx0eTogZ1xuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgZiA9ICh1KSA9PiB7XG5cdFx0XHRpZiAoaSkge1xuXHRcdFx0XHRpID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ci5yZWxlYXNlUG9pbnRlckNhcHR1cmUodS5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQocm4uZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0eDogSCh0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdFx0eTogSCh0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gdyh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0dC5zdHlsZS50cmFuc2Zvcm0gPSBuO1xuXHRcdH0pLCB3KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB6KHIsIFwicG9pbnRlcmRvd25cIiwgYykpLCB3KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB6KHIsIFwicG9pbnRlcm1vdmVcIiwgcCkpLCB3KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB6KHIsIFwicG9pbnRlcnVwXCIsIGYpKSwgdyh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgeihyLCBcInBvaW50ZXJjYW5jZWxcIiwgZikpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgS24odCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpLCB0aGlzO1xuXHR9XG59O1xudmFyIHRsID0gY2xhc3MgZXh0ZW5kcyBabiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBuID0gcmkodCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgdCk7XG5cdFx0bGV0IHIgPSAhMSwgaSA9IDAsIGwgPSAwLCBhID0gMCwgbyA9IDA7XG5cdFx0Y29uc3QgZCA9IE1hdGgubWF4KDEyMCwgcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi13XCIpIHx8IFwiXCIpIHx8IDEyMCksIGMgPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKSwgcCA9IChzKSA9PiB7XG5cdFx0XHRzLmJ1dHRvbiA9PT0gMCAmJiAocy50YXJnZXQgIT09IG4gJiYgIW4uY29udGFpbnMocy50YXJnZXQpIHx8IChyID0gITAsIGkgPSBzLmNsaWVudFgsIGwgPSBzLmNsaWVudFksIGEgPSB0Lm9mZnNldFdpZHRoLCBvID0gdC5vZmZzZXRIZWlnaHQsIG4uc2V0UG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGFuLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdHdpZHRoOiBhLFxuXHRcdFx0XHRcdGhlaWdodDogb1xuXHRcdFx0XHR9XG5cdFx0XHR9KSkpKTtcblx0XHR9LCBmID0gKHMpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0Y29uc3QgaCA9IE1hdGgubWF4KGQsIGEgKyAocy5jbGllbnRYIC0gaSkpLCBtID0gTWF0aC5tYXgoYywgbyArIChzLmNsaWVudFkgLSBsKSk7XG5cdFx0XHR0LnN0eWxlLndpZHRoID0gYCR7aH1weGAsIHQuc3R5bGUuaGVpZ2h0ID0gYCR7bX1weGAsIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoYW4ubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHR3aWR0aDogaCxcblx0XHRcdFx0XHRoZWlnaHQ6IG1cblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIHUgPSAocykgPT4ge1xuXHRcdFx0aWYgKHIpIHtcblx0XHRcdFx0ciA9ICExO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG4ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGFuLmVuZCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRcdHdpZHRoOiB0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiB0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIHcodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgeihuLCBcInBvaW50ZXJkb3duXCIsIHApKSwgdyh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCB6KG4sIFwicG9pbnRlcm1vdmVcIiwgZikpLCB3KHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHoobiwgXCJwb2ludGVydXBcIiwgdSkpLCB3KHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHoobiwgXCJwb2ludGVyY2FuY2VsXCIsIHUpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIEtuKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIpLCB0aGlzO1xuXHR9XG59O1xubmV3IFFzKCk7XG5uZXcgZWwoKTtcbm5ldyB0bCgpO1xuZnVuY3Rpb24gb24oZSwgdCkge1xuXHRjb25zdCBuID0gTWF0aC5taW4oZS54LCB0LngpLCByID0gTWF0aC5taW4oZS55LCB0LnkpLCBpID0gTWF0aC5tYXgoZS54LCB0LngpLCBsID0gTWF0aC5tYXgoZS55LCB0LnkpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IG4sXG5cdFx0dG9wOiByLFxuXHRcdHJpZ2h0OiBpLFxuXHRcdGJvdHRvbTogbCxcblx0XHR3aWR0aDogaSAtIG4sXG5cdFx0aGVpZ2h0OiBsIC0gclxuXHR9O1xufVxudmFyIEplID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1zZWxlY3Q6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1zZWxlY3Q6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tc2VsZWN0OmVuZFwiLFxuXHRjYW5jZWw6IFwianVuY3Rpb24tc2VsZWN0OmNhbmNlbFwiXG59O1xudmFyIHNuID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1kcmFnOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tZHJhZzptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1kcmFnOmVuZFwiXG59O1xudmFyIGxuID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1yZXNpemU6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1yZXNpemU6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tcmVzaXplOmVuZFwiXG59O1xudmFyIG5sID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5EaXNwb3NlcnNcIik7XG52YXIgTHQgPSBnbG9iYWxUaGlzW25sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgUyA9IChlLCB0LCBuKSA9PiB7XG5cdGNvbnN0IHIgPSBMdC5nZXQoZSkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgaSA9IHIuZ2V0KHQpID8/IFtdO1xuXHRpLnB1c2gobiksIHIuc2V0KHQsIGkpLCBMdC5zZXQoZSwgcik7XG59O1xudmFyIFFuID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IEx0LmdldChlKSwgciA9IG4/LmdldCh0KTtcblx0aWYgKHIpIHtcblx0XHRmb3IgKGNvbnN0IGkgb2YgcikgdHJ5IHtcblx0XHRcdGkoKTtcblx0XHR9IGNhdGNoIHt9XG5cdFx0bi5kZWxldGUodCksIG4uc2l6ZSA9PT0gMCAmJiBMdC5kZWxldGUoZSk7XG5cdH1cbn07XG52YXIgSSA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/LihlKT8uZ2V0UHJvcGVydHlWYWx1ZT8uKHQpPy50cmltPy4oKSA/PyBcIlwiLCByID0gcGFyc2VGbG9hdChuKTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShyKSA/IHIgOiAwO1xufTtcbnZhciBpaSA9IChlLCB0LCBuKSA9PiB7XG5cdGNvbnN0IHIgPSBlLmdldEF0dHJpYnV0ZSh0KT8udHJpbSgpO1xuXHRpZiAoIXIpIHJldHVybiBuO1xuXHRjb25zdCBpID0gZS5xdWVyeVNlbGVjdG9yKHIpO1xuXHRyZXR1cm4gaSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gaSA6IG47XG59O1xudmFyIHJsID0gY2xhc3MgZXh0ZW5kcyBVbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRuLmNsYXNzTmFtZSA9IFwidWktanVuY3Rpb24tc2VsZWN0LW92ZXJsYXlcIiwgbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLW92ZXJsYXlcIiwgXCJcIiksIG4uc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Ojk5OTk7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoxcHggZGFzaGVkIGNvbG9yLW1peChpbiBva2xhYiwgIzM3OTRmZiA3MCUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kOmNvbG9yLW1peChpbiBva2xhYiwgIzM3OTRmZiAxNCUsIHRyYW5zcGFyZW50KTtkaXNwbGF5Om5vbmU7aW5zZXQ6YXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjA7XCIsIGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKHQpPy5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiAmJiAodC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIiksIHQuYXBwZW5kQ2hpbGQobik7XG5cdFx0bGV0IHIgPSAhMSwgaSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fSwgbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRjb25zdCBhID0gKHMpID0+IHtcblx0XHRcdGNvbnN0IGggPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogcy5jbGllbnRYIC0gaC5sZWZ0LFxuXHRcdFx0XHR5OiBzLmNsaWVudFkgLSBoLnRvcFxuXHRcdFx0fTtcblx0XHR9LCBvID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgcyA9IG9uKGksIGwpO1xuXHRcdFx0aWYgKHMud2lkdGggPCAxICYmIHMuaGVpZ2h0IDwgMSkge1xuXHRcdFx0XHRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiLCBuLnN0eWxlLmxlZnQgPSBgJHtzLmxlZnR9cHhgLCBuLnN0eWxlLnRvcCA9IGAke3MudG9wfXB4YCwgbi5zdHlsZS53aWR0aCA9IGAke3Mud2lkdGh9cHhgLCBuLnN0eWxlLmhlaWdodCA9IGAke3MuaGVpZ2h0fXB4YDtcblx0XHR9LCBkID0gKHMpID0+IHtcblx0XHRcdHMuYnV0dG9uID09PSAwICYmIChzLnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtanVuY3Rpb24taWdub3JlLXNlbGVjdF0sIFtkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXSwgW2RhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZV0sIGJ1dHRvbiwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikgfHwgKHMudGFyZ2V0ID09PSB0IHx8IHQuY29udGFpbnMocy50YXJnZXQpKSAmJiAociA9ICEwLCBpID0gYShzKSwgbCA9IHsgLi4uaSB9LCB0LnNldFBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKZS5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5pIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5sIH0sXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSksIG8oKSkpO1xuXHRcdH0sIGMgPSAocykgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRsID0gYShzKSwgbygpO1xuXHRcdFx0Y29uc3QgaCA9IG9uKGksIGwpO1xuXHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKZS5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmkgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRib3g6IGgsXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgcCA9IChzKSA9PiB7XG5cdFx0XHRpZiAoIXIpIHJldHVybjtcblx0XHRcdHIgPSAhMTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGNvbnN0IGggPSBvbihpLCBsKTtcblx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSmUuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmkgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRib3g6IGgsXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgZiA9IChzKSA9PiB7XG5cdFx0XHRyICYmIHAocyk7XG5cdFx0fSwgdSA9IChzKSA9PiB7XG5cdFx0XHRpZiAocikge1xuXHRcdFx0XHRyID0gITEsIG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEplLmNhbmNlbCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDogeyBob3N0OiB0IH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIFModCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgKCkgPT4ge1xuXHRcdFx0bi5yZW1vdmUoKTtcblx0XHR9KSwgUyh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBUKHQsIFwicG9pbnRlcmRvd25cIiwgZCkpLCBTKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIFQodCwgXCJwb2ludGVybW92ZVwiLCBjKSksIFModCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgVCh0LCBcInBvaW50ZXJ1cFwiLCBmKSksIFModCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgVCh0LCBcInBvaW50ZXJjYW5jZWxcIiwgdSkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgUW4odCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiksIHRoaXM7XG5cdH1cbn07XG52YXIgaWwgPSBjbGFzcyBleHRlbmRzIFVuIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRfZSh0LCBcIi0tangtZHJhZy14XCIsIEkodCwgXCItLWp4LWRyYWcteFwiKSksIF9lKHQsIFwiLS1qeC1kcmFnLXlcIiwgSSh0LCBcIi0tangtZHJhZy15XCIpKTtcblx0XHRjb25zdCBuID0gdC5zdHlsZS50cmFuc2Zvcm07XG5cdFx0KCF0LnN0eWxlLnRyYW5zZm9ybSB8fCB0LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJub25lXCIpICYmICh0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoY2FsYyh2YXIoLS1qeC1kcmFnLXgsIDApICogMXB4KSwgY2FsYyh2YXIoLS1qeC1kcmFnLXksIDApICogMXB4KSwgMClcIik7XG5cdFx0Y29uc3QgciA9IGlpKHQsIFwiZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZVwiLCB0KTtcblx0XHRsZXQgaSA9ICExLCBsID0gMCwgYSA9IDAsIG8gPSAwLCBkID0gMDtcblx0XHRjb25zdCBjID0gKHUpID0+IHtcblx0XHRcdHUuYnV0dG9uID09PSAwICYmICh1LnRhcmdldCAhPT0gciAmJiAhci5jb250YWlucyh1LnRhcmdldCkgfHwgKGkgPSAhMCwgbCA9IHUuY2xpZW50WCwgYSA9IHUuY2xpZW50WSwgbyA9IEkodCwgXCItLWp4LWRyYWcteFwiKSwgZCA9IEkodCwgXCItLWp4LWRyYWcteVwiKSwgci5zZXRQb2ludGVyQ2FwdHVyZSh1LnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoc24uc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0Y2xpZW50WDogdS5jbGllbnRYLFxuXHRcdFx0XHRcdGNsaWVudFk6IHUuY2xpZW50WSxcblx0XHRcdFx0XHRiYXNlWDogbyxcblx0XHRcdFx0XHRiYXNlWTogZFxuXHRcdFx0XHR9XG5cdFx0XHR9KSkpKTtcblx0XHR9LCBwID0gKHUpID0+IHtcblx0XHRcdGlmICghaSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgcyA9IHUuY2xpZW50WCAtIGwsIGggPSB1LmNsaWVudFkgLSBhLCBtID0gbyArIHMsIGcgPSBkICsgaDtcblx0XHRcdF9lKHQsIFwiLS1qeC1kcmFnLXhcIiwgbSksIF9lKHQsIFwiLS1qeC1kcmFnLXlcIiwgZyksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoc24ubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRkeDogcyxcblx0XHRcdFx0XHRkeTogaCxcblx0XHRcdFx0XHR4OiBtLFxuXHRcdFx0XHRcdHk6IGdcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIGYgPSAodSkgPT4ge1xuXHRcdFx0aWYgKGkpIHtcblx0XHRcdFx0aSA9ICExO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHIucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHUucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHNuLmVuZCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRcdHg6IEkodCwgXCItLWp4LWRyYWcteFwiKSxcblx0XHRcdFx0XHRcdHk6IEkodCwgXCItLWp4LWRyYWcteVwiKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIFModCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsICgpID0+IHtcblx0XHRcdHQuc3R5bGUudHJhbnNmb3JtID0gbjtcblx0XHR9KSwgUyh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgVChyLCBcInBvaW50ZXJkb3duXCIsIGMpKSwgUyh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgVChyLCBcInBvaW50ZXJtb3ZlXCIsIHApKSwgUyh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgVChyLCBcInBvaW50ZXJ1cFwiLCBmKSksIFModCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIFQociwgXCJwb2ludGVyY2FuY2VsXCIsIGYpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIFFuKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiKSwgdGhpcztcblx0fVxufTtcbnZhciBhbCA9IGNsYXNzIGV4dGVuZHMgVW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0fVxuXHRjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdGlmICghdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgbiA9IGlpKHQsIFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXCIsIHQpO1xuXHRcdGxldCByID0gITEsIGkgPSAwLCBsID0gMCwgYSA9IDAsIG8gPSAwO1xuXHRcdGNvbnN0IGQgPSBNYXRoLm1heCgxMjAsIHBhcnNlRmxvYXQodC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4td1wiKSB8fCBcIlwiKSB8fCAxMjApLCBjID0gTWF0aC5tYXgoODAsIHBhcnNlRmxvYXQodC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4taFwiKSB8fCBcIlwiKSB8fCA4MCksIHAgPSAocykgPT4ge1xuXHRcdFx0cy5idXR0b24gPT09IDAgJiYgKHMudGFyZ2V0ICE9PSBuICYmICFuLmNvbnRhaW5zKHMudGFyZ2V0KSB8fCAociA9ICEwLCBpID0gcy5jbGllbnRYLCBsID0gcy5jbGllbnRZLCBhID0gdC5vZmZzZXRXaWR0aCwgbyA9IHQub2Zmc2V0SGVpZ2h0LCBuLnNldFBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChsbi5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHR3aWR0aDogYSxcblx0XHRcdFx0XHRoZWlnaHQ6IG9cblx0XHRcdFx0fVxuXHRcdFx0fSkpKSk7XG5cdFx0fSwgZiA9IChzKSA9PiB7XG5cdFx0XHRpZiAoIXIpIHJldHVybjtcblx0XHRcdGNvbnN0IGggPSBNYXRoLm1heChkLCBhICsgKHMuY2xpZW50WCAtIGkpKSwgbSA9IE1hdGgubWF4KGMsIG8gKyAocy5jbGllbnRZIC0gbCkpO1xuXHRcdFx0dC5zdHlsZS53aWR0aCA9IGAke2h9cHhgLCB0LnN0eWxlLmhlaWdodCA9IGAke219cHhgLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGxuLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0d2lkdGg6IGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBtXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCB1ID0gKHMpID0+IHtcblx0XHRcdGlmIChyKSB7XG5cdFx0XHRcdHIgPSAhMTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRuLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCk7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChsbi5lbmQsIHtcblx0XHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0XHR3aWR0aDogdC5vZmZzZXRXaWR0aCxcblx0XHRcdFx0XHRcdGhlaWdodDogdC5vZmZzZXRIZWlnaHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBTKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIFQobiwgXCJwb2ludGVyZG93blwiLCBwKSksIFModCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgVChuLCBcInBvaW50ZXJtb3ZlXCIsIGYpKSwgUyh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBUKG4sIFwicG9pbnRlcnVwXCIsIHUpKSwgUyh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBUKG4sIFwicG9pbnRlcmNhbmNlbFwiLCB1KSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiBRbih0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKSwgdGhpcztcblx0fVxufTtcbm5ldyBybCgpO1xubmV3IGlsKCk7XG5uZXcgYWwoKTtcbmZ1bmN0aW9uIHVuKGUsIHQpIHtcblx0Y29uc3QgbiA9IE1hdGgubWluKGUueCwgdC54KSwgciA9IE1hdGgubWluKGUueSwgdC55KSwgaSA9IE1hdGgubWF4KGUueCwgdC54KSwgbCA9IE1hdGgubWF4KGUueSwgdC55KTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0OiBuLFxuXHRcdHRvcDogcixcblx0XHRyaWdodDogaSxcblx0XHRib3R0b206IGwsXG5cdFx0d2lkdGg6IGkgLSBuLFxuXHRcdGhlaWdodDogbCAtIHJcblx0fTtcbn1cbnZhciBLZSA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tc2VsZWN0OnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tc2VsZWN0Om1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXNlbGVjdDplbmRcIixcblx0Y2FuY2VsOiBcImp1bmN0aW9uLXNlbGVjdDpjYW5jZWxcIlxufTtcbnZhciBjbiA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tZHJhZzpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLWRyYWc6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tZHJhZzplbmRcIlxufTtcbnZhciBkbiA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tcmVzaXplOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tcmVzaXplOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXJlc2l6ZTplbmRcIlxufTtcbnZhciBvbCA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRGlzcG9zZXJzXCIpO1xudmFyIEF0ID0gZ2xvYmFsVGhpc1tvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIEUgPSAoZSwgdCwgbikgPT4ge1xuXHRjb25zdCByID0gQXQuZ2V0KGUpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIGkgPSByLmdldCh0KSA/PyBbXTtcblx0aS5wdXNoKG4pLCByLnNldCh0LCBpKSwgQXQuc2V0KGUsIHIpO1xufTtcbnZhciBlciA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBBdC5nZXQoZSksIHIgPSBuPy5nZXQodCk7XG5cdGlmIChyKSB7XG5cdFx0Zm9yIChjb25zdCBpIG9mIHIpIHRyeSB7XG5cdFx0XHRpKCk7XG5cdFx0fSBjYXRjaCB7fVxuXHRcdG4uZGVsZXRlKHQpLCBuLnNpemUgPT09IDAgJiYgQXQuZGVsZXRlKGUpO1xuXHR9XG59O1xudmFyIEIgPSAoZSwgdCkgPT4ge1xuXHRjb25zdCBuID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oZSk/LmdldFByb3BlcnR5VmFsdWU/Lih0KT8udHJpbT8uKCkgPz8gXCJcIiwgciA9IHBhcnNlRmxvYXQobik7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUocikgPyByIDogMDtcbn07XG52YXIgYWkgPSAoZSwgdCwgbikgPT4ge1xuXHRjb25zdCByID0gZS5nZXRBdHRyaWJ1dGUodCk/LnRyaW0oKTtcblx0aWYgKCFyKSByZXR1cm4gbjtcblx0Y29uc3QgaSA9IGUucXVlcnlTZWxlY3RvcihyKTtcblx0cmV0dXJuIGkgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGkgOiBuO1xufTtcbnZhciBzbCA9IGNsYXNzIGV4dGVuZHMgRG4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0fVxuXHRjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdGlmICghdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bi5jbGFzc05hbWUgPSBcInVpLWp1bmN0aW9uLXNlbGVjdC1vdmVybGF5XCIsIG4uc2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1vdmVybGF5XCIsIFwiXCIpLCBuLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDo5OTk5O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IGRhc2hlZCBjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgNzAlLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZDpjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgMTQlLCB0cmFuc3BhcmVudCk7ZGlzcGxheTpub25lO2luc2V0OmF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowO1wiLCBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lih0KT8ucG9zaXRpb24gPT09IFwic3RhdGljXCIgJiYgKHQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCIpLCB0LmFwcGVuZENoaWxkKG4pO1xuXHRcdGxldCByID0gITEsIGkgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH0sIGwgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0Y29uc3QgYSA9IChzKSA9PiB7XG5cdFx0XHRjb25zdCBoID0gdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IHMuY2xpZW50WCAtIGgubGVmdCxcblx0XHRcdFx0eTogcy5jbGllbnRZIC0gaC50b3Bcblx0XHRcdH07XG5cdFx0fSwgbyA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHMgPSB1bihpLCBsKTtcblx0XHRcdGlmIChzLndpZHRoIDwgMSAmJiBzLmhlaWdodCA8IDEpIHtcblx0XHRcdFx0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiwgbi5zdHlsZS5sZWZ0ID0gYCR7cy5sZWZ0fXB4YCwgbi5zdHlsZS50b3AgPSBgJHtzLnRvcH1weGAsIG4uc3R5bGUud2lkdGggPSBgJHtzLndpZHRofXB4YCwgbi5zdHlsZS5oZWlnaHQgPSBgJHtzLmhlaWdodH1weGA7XG5cdFx0fSwgZCA9IChzKSA9PiB7XG5cdFx0XHRzLmJ1dHRvbiA9PT0gMCAmJiAocy50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLWp1bmN0aW9uLWlnbm9yZS1zZWxlY3RdLCBbZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZV0sIFtkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVdLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpIHx8IChzLnRhcmdldCA9PT0gdCB8fCB0LmNvbnRhaW5zKHMudGFyZ2V0KSkgJiYgKHIgPSAhMCwgaSA9IGEocyksIGwgPSB7IC4uLmkgfSwgdC5zZXRQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoS2Uuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uaSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ubCB9LFxuXHRcdFx0XHRcdGhvc3Q6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpLCBvKCkpKTtcblx0XHR9LCBjID0gKHMpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0bCA9IGEocyksIG8oKTtcblx0XHRcdGNvbnN0IGggPSB1bihpLCBsKTtcblx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoS2UubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5pIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5sIH0sXG5cdFx0XHRcdFx0Ym94OiBoLFxuXHRcdFx0XHRcdGhvc3Q6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIHAgPSAocykgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRyID0gITE7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRjb25zdCBoID0gdW4oaSwgbCk7XG5cdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEtlLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5pIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5sIH0sXG5cdFx0XHRcdFx0Ym94OiBoLFxuXHRcdFx0XHRcdGhvc3Q6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIGYgPSAocykgPT4ge1xuXHRcdFx0ciAmJiBwKHMpO1xuXHRcdH0sIHUgPSAocykgPT4ge1xuXHRcdFx0aWYgKHIpIHtcblx0XHRcdFx0ciA9ICExLCBuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCk7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChLZS5jYW5jZWwsIHtcblx0XHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0XHRkZXRhaWw6IHsgaG9zdDogdCB9XG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBFKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsICgpID0+IHtcblx0XHRcdG4ucmVtb3ZlKCk7XG5cdFx0fSksIEUodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgTih0LCBcInBvaW50ZXJkb3duXCIsIGQpKSwgRSh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBOKHQsIFwicG9pbnRlcm1vdmVcIiwgYykpLCBFKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIE4odCwgXCJwb2ludGVydXBcIiwgZikpLCBFKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIE4odCwgXCJwb2ludGVyY2FuY2VsXCIsIHUpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIGVyKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIpLCB0aGlzO1xuXHR9XG59O1xudmFyIGxsID0gY2xhc3MgZXh0ZW5kcyBEbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0fVxuXHRjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdGlmICghdCkgcmV0dXJuIHRoaXM7XG5cdFx0WWUodCwgXCItLWp4LWRyYWcteFwiLCBCKHQsIFwiLS1qeC1kcmFnLXhcIikpLCBZZSh0LCBcIi0tangtZHJhZy15XCIsIEIodCwgXCItLWp4LWRyYWcteVwiKSk7XG5cdFx0Y29uc3QgbiA9IHQuc3R5bGUudHJhbnNmb3JtO1xuXHRcdCghdC5zdHlsZS50cmFuc2Zvcm0gfHwgdC5zdHlsZS50cmFuc2Zvcm0gPT09IFwibm9uZVwiKSAmJiAodC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tangtZHJhZy14LCAwKSAqIDFweCksIGNhbGModmFyKC0tangtZHJhZy15LCAwKSAqIDFweCksIDApXCIpO1xuXHRcdGNvbnN0IHIgPSBhaSh0LCBcImRhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVcIiwgdCk7XG5cdFx0bGV0IGkgPSAhMSwgbCA9IDAsIGEgPSAwLCBvID0gMCwgZCA9IDA7XG5cdFx0Y29uc3QgYyA9ICh1KSA9PiB7XG5cdFx0XHR1LmJ1dHRvbiA9PT0gMCAmJiAodS50YXJnZXQgIT09IHIgJiYgIXIuY29udGFpbnModS50YXJnZXQpIHx8IChpID0gITAsIGwgPSB1LmNsaWVudFgsIGEgPSB1LmNsaWVudFksIG8gPSBCKHQsIFwiLS1qeC1kcmFnLXhcIiksIGQgPSBCKHQsIFwiLS1qeC1kcmFnLXlcIiksIHIuc2V0UG9pbnRlckNhcHR1cmUodS5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGNuLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGNsaWVudFg6IHUuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiB1LmNsaWVudFksXG5cdFx0XHRcdFx0YmFzZVg6IG8sXG5cdFx0XHRcdFx0YmFzZVk6IGRcblx0XHRcdFx0fVxuXHRcdFx0fSkpKSk7XG5cdFx0fSwgcCA9ICh1KSA9PiB7XG5cdFx0XHRpZiAoIWkpIHJldHVybjtcblx0XHRcdGNvbnN0IHMgPSB1LmNsaWVudFggLSBsLCBoID0gdS5jbGllbnRZIC0gYSwgbSA9IG8gKyBzLCBnID0gZCArIGg7XG5cdFx0XHRZZSh0LCBcIi0tangtZHJhZy14XCIsIG0pLCBZZSh0LCBcIi0tangtZHJhZy15XCIsIGcpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGNuLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0ZHg6IHMsXG5cdFx0XHRcdFx0ZHk6IGgsXG5cdFx0XHRcdFx0eDogbSxcblx0XHRcdFx0XHR5OiBnXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBmID0gKHUpID0+IHtcblx0XHRcdGlmIChpKSB7XG5cdFx0XHRcdGkgPSAhMTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyLnJlbGVhc2VQb2ludGVyQ2FwdHVyZSh1LnBvaW50ZXJJZCk7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChjbi5lbmQsIHtcblx0XHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0XHR4OiBCKHQsIFwiLS1qeC1kcmFnLXhcIiksXG5cdFx0XHRcdFx0XHR5OiBCKHQsIFwiLS1qeC1kcmFnLXlcIilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBFKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCAoKSA9PiB7XG5cdFx0XHR0LnN0eWxlLnRyYW5zZm9ybSA9IG47XG5cdFx0fSksIEUodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIE4ociwgXCJwb2ludGVyZG93blwiLCBjKSksIEUodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIE4ociwgXCJwb2ludGVybW92ZVwiLCBwKSksIEUodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIE4ociwgXCJwb2ludGVydXBcIiwgZikpLCBFKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBOKHIsIFwicG9pbnRlcmNhbmNlbFwiLCBmKSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiBlcih0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiksIHRoaXM7XG5cdH1cbn07XG52YXIgdWwgPSBjbGFzcyBleHRlbmRzIERuIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG4gPSBhaSh0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCB0KTtcblx0XHRsZXQgciA9ICExLCBpID0gMCwgbCA9IDAsIGEgPSAwLCBvID0gMDtcblx0XHRjb25zdCBkID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKSwgYyA9IE1hdGgubWF4KDgwLCBwYXJzZUZsb2F0KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLWhcIikgfHwgXCJcIikgfHwgODApLCBwID0gKHMpID0+IHtcblx0XHRcdHMuYnV0dG9uID09PSAwICYmIChzLnRhcmdldCAhPT0gbiAmJiAhbi5jb250YWlucyhzLnRhcmdldCkgfHwgKHIgPSAhMCwgaSA9IHMuY2xpZW50WCwgbCA9IHMuY2xpZW50WSwgYSA9IHQub2Zmc2V0V2lkdGgsIG8gPSB0Lm9mZnNldEhlaWdodCwgbi5zZXRQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZG4uc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0d2lkdGg6IGEsXG5cdFx0XHRcdFx0aGVpZ2h0OiBvXG5cdFx0XHRcdH1cblx0XHRcdH0pKSkpO1xuXHRcdH0sIGYgPSAocykgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRjb25zdCBoID0gTWF0aC5tYXgoZCwgYSArIChzLmNsaWVudFggLSBpKSksIG0gPSBNYXRoLm1heChjLCBvICsgKHMuY2xpZW50WSAtIGwpKTtcblx0XHRcdHQuc3R5bGUud2lkdGggPSBgJHtofXB4YCwgdC5zdHlsZS5oZWlnaHQgPSBgJHttfXB4YCwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChkbi5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdHdpZHRoOiBoLFxuXHRcdFx0XHRcdGhlaWdodDogbVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgdSA9IChzKSA9PiB7XG5cdFx0XHRpZiAocikge1xuXHRcdFx0XHRyID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0bi5yZWxlYXNlUG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZG4uZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0d2lkdGg6IHQub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IHQub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gRSh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBOKG4sIFwicG9pbnRlcmRvd25cIiwgcCkpLCBFKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIE4obiwgXCJwb2ludGVybW92ZVwiLCBmKSksIEUodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgTihuLCBcInBvaW50ZXJ1cFwiLCB1KSksIEUodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgTihuLCBcInBvaW50ZXJjYW5jZWxcIiwgdSkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgZXIodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiksIHRoaXM7XG5cdH1cbn07XG5uZXcgc2woKTtcbm5ldyBsbCgpO1xubmV3IHVsKCk7XG5mdW5jdGlvbiBobihlLCB0KSB7XG5cdGNvbnN0IG4gPSBNYXRoLm1pbihlLngsIHQueCksIHIgPSBNYXRoLm1pbihlLnksIHQueSksIGkgPSBNYXRoLm1heChlLngsIHQueCksIGwgPSBNYXRoLm1heChlLnksIHQueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdDogbixcblx0XHR0b3A6IHIsXG5cdFx0cmlnaHQ6IGksXG5cdFx0Ym90dG9tOiBsLFxuXHRcdHdpZHRoOiBpIC0gbixcblx0XHRoZWlnaHQ6IGwgLSByXG5cdH07XG59XG52YXIgUWUgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgcG4gPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgZm4gPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG52YXIgY2wgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBOdCA9IGdsb2JhbFRoaXNbY2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBqID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IE50LmdldChlKSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBpID0gci5nZXQodCkgPz8gW107XG5cdGkucHVzaChuKSwgci5zZXQodCwgaSksIE50LnNldChlLCByKTtcbn07XG52YXIgdHIgPSAoZSwgdCkgPT4ge1xuXHRjb25zdCBuID0gTnQuZ2V0KGUpLCByID0gbj8uZ2V0KHQpO1xuXHRpZiAocikge1xuXHRcdGZvciAoY29uc3QgaSBvZiByKSB0cnkge1xuXHRcdFx0aSgpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRuLmRlbGV0ZSh0KSwgbi5zaXplID09PSAwICYmIE50LmRlbGV0ZShlKTtcblx0fVxufTtcbnZhciBYID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGUpPy5nZXRQcm9wZXJ0eVZhbHVlPy4odCk/LnRyaW0/LigpID8/IFwiXCIsIHIgPSBwYXJzZUZsb2F0KG4pO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKHIpID8gciA6IDA7XG59O1xudmFyIG9pID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IGUuZ2V0QXR0cmlidXRlKHQpPy50cmltKCk7XG5cdGlmICghcikgcmV0dXJuIG47XG5cdGNvbnN0IGkgPSBlLnF1ZXJ5U2VsZWN0b3Iocik7XG5cdHJldHVybiBpIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpIDogbjtcbn07XG52YXIgZGwgPSBjbGFzcyBleHRlbmRzIF9uIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG4uY2xhc3NOYW1lID0gXCJ1aS1qdW5jdGlvbi1zZWxlY3Qtb3ZlcmxheVwiLCBuLnNldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tb3ZlcmxheVwiLCBcIlwiKSwgbi5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6OTk5OTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDE0JSwgdHJhbnNwYXJlbnQpO2Rpc3BsYXk6bm9uZTtpbnNldDphdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtcIiwgZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4odCk/LnBvc2l0aW9uID09PSBcInN0YXRpY1wiICYmICh0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiKSwgdC5hcHBlbmRDaGlsZChuKTtcblx0XHRsZXQgciA9ICExLCBpID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9LCBsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGNvbnN0IGEgPSAocykgPT4ge1xuXHRcdFx0Y29uc3QgaCA9IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBzLmNsaWVudFggLSBoLmxlZnQsXG5cdFx0XHRcdHk6IHMuY2xpZW50WSAtIGgudG9wXG5cdFx0XHR9O1xuXHRcdH0sIG8gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzID0gaG4oaSwgbCk7XG5cdFx0XHRpZiAocy53aWR0aCA8IDEgJiYgcy5oZWlnaHQgPCAxKSB7XG5cdFx0XHRcdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIsIG4uc3R5bGUubGVmdCA9IGAke3MubGVmdH1weGAsIG4uc3R5bGUudG9wID0gYCR7cy50b3B9cHhgLCBuLnN0eWxlLndpZHRoID0gYCR7cy53aWR0aH1weGAsIG4uc3R5bGUuaGVpZ2h0ID0gYCR7cy5oZWlnaHR9cHhgO1xuXHRcdH0sIGQgPSAocykgPT4ge1xuXHRcdFx0cy5idXR0b24gPT09IDAgJiYgKHMudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1qdW5jdGlvbi1pZ25vcmUtc2VsZWN0XSwgW2RhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVdLCBbZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXSwgYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSB8fCAocy50YXJnZXQgPT09IHQgfHwgdC5jb250YWlucyhzLnRhcmdldCkpICYmIChyID0gITAsIGkgPSBhKHMpLCBsID0geyAuLi5pIH0sIHQuc2V0UG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFFlLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmkgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKSwgbygpKSk7XG5cdFx0fSwgYyA9IChzKSA9PiB7XG5cdFx0XHRpZiAoIXIpIHJldHVybjtcblx0XHRcdGwgPSBhKHMpLCBvKCk7XG5cdFx0XHRjb25zdCBoID0gaG4oaSwgbCk7XG5cdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFFlLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uaSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ubCB9LFxuXHRcdFx0XHRcdGJveDogaCxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBwID0gKHMpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0ciA9ICExO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dC5yZWxlYXNlUG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgaCA9IGhuKGksIGwpO1xuXHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChRZS5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uaSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ubCB9LFxuXHRcdFx0XHRcdGJveDogaCxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBmID0gKHMpID0+IHtcblx0XHRcdHIgJiYgcChzKTtcblx0XHR9LCB1ID0gKHMpID0+IHtcblx0XHRcdGlmIChyKSB7XG5cdFx0XHRcdHIgPSAhMSwgbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dC5yZWxlYXNlUG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoUWUuY2FuY2VsLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7IGhvc3Q6IHQgfVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gaih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRuLnJlbW92ZSgpO1xuXHRcdH0pLCBqKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIEEodCwgXCJwb2ludGVyZG93blwiLCBkKSksIGoodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgQSh0LCBcInBvaW50ZXJtb3ZlXCIsIGMpKSwgaih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBBKHQsIFwicG9pbnRlcnVwXCIsIGYpKSwgaih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBBKHQsIFwicG9pbnRlcmNhbmNlbFwiLCB1KSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiB0cih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKSwgdGhpcztcblx0fVxufTtcbnZhciBobCA9IGNsYXNzIGV4dGVuZHMgX24ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdFhlKHQsIFwiLS1qeC1kcmFnLXhcIiwgWCh0LCBcIi0tangtZHJhZy14XCIpKSwgWGUodCwgXCItLWp4LWRyYWcteVwiLCBYKHQsIFwiLS1qeC1kcmFnLXlcIikpO1xuXHRcdGNvbnN0IG4gPSB0LnN0eWxlLnRyYW5zZm9ybTtcblx0XHQoIXQuc3R5bGUudHJhbnNmb3JtIHx8IHQuc3R5bGUudHJhbnNmb3JtID09PSBcIm5vbmVcIikgJiYgKHQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChjYWxjKHZhcigtLWp4LWRyYWcteCwgMCkgKiAxcHgpLCBjYWxjKHZhcigtLWp4LWRyYWcteSwgMCkgKiAxcHgpLCAwKVwiKTtcblx0XHRjb25zdCByID0gb2kodCwgXCJkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXCIsIHQpO1xuXHRcdGxldCBpID0gITEsIGwgPSAwLCBhID0gMCwgbyA9IDAsIGQgPSAwO1xuXHRcdGNvbnN0IGMgPSAodSkgPT4ge1xuXHRcdFx0dS5idXR0b24gPT09IDAgJiYgKHUudGFyZ2V0ICE9PSByICYmICFyLmNvbnRhaW5zKHUudGFyZ2V0KSB8fCAoaSA9ICEwLCBsID0gdS5jbGllbnRYLCBhID0gdS5jbGllbnRZLCBvID0gWCh0LCBcIi0tangtZHJhZy14XCIpLCBkID0gWCh0LCBcIi0tangtZHJhZy15XCIpLCByLnNldFBvaW50ZXJDYXB0dXJlKHUucG9pbnRlcklkKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChwbi5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRjbGllbnRYOiB1LmNsaWVudFgsXG5cdFx0XHRcdFx0Y2xpZW50WTogdS5jbGllbnRZLFxuXHRcdFx0XHRcdGJhc2VYOiBvLFxuXHRcdFx0XHRcdGJhc2VZOiBkXG5cdFx0XHRcdH1cblx0XHRcdH0pKSkpO1xuXHRcdH0sIHAgPSAodSkgPT4ge1xuXHRcdFx0aWYgKCFpKSByZXR1cm47XG5cdFx0XHRjb25zdCBzID0gdS5jbGllbnRYIC0gbCwgaCA9IHUuY2xpZW50WSAtIGEsIG0gPSBvICsgcywgZyA9IGQgKyBoO1xuXHRcdFx0WGUodCwgXCItLWp4LWRyYWcteFwiLCBtKSwgWGUodCwgXCItLWp4LWRyYWcteVwiLCBnKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChwbi5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGR4OiBzLFxuXHRcdFx0XHRcdGR5OiBoLFxuXHRcdFx0XHRcdHg6IG0sXG5cdFx0XHRcdFx0eTogZ1xuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgZiA9ICh1KSA9PiB7XG5cdFx0XHRpZiAoaSkge1xuXHRcdFx0XHRpID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ci5yZWxlYXNlUG9pbnRlckNhcHR1cmUodS5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQocG4uZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0eDogWCh0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdFx0eTogWCh0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gaih0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0dC5zdHlsZS50cmFuc2Zvcm0gPSBuO1xuXHRcdH0pLCBqKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBBKHIsIFwicG9pbnRlcmRvd25cIiwgYykpLCBqKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBBKHIsIFwicG9pbnRlcm1vdmVcIiwgcCkpLCBqKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBBKHIsIFwicG9pbnRlcnVwXCIsIGYpKSwgaih0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgQShyLCBcInBvaW50ZXJjYW5jZWxcIiwgZikpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgdHIodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpLCB0aGlzO1xuXHR9XG59O1xudmFyIHBsID0gY2xhc3MgZXh0ZW5kcyBfbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBuID0gb2kodCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgdCk7XG5cdFx0bGV0IHIgPSAhMSwgaSA9IDAsIGwgPSAwLCBhID0gMCwgbyA9IDA7XG5cdFx0Y29uc3QgZCA9IE1hdGgubWF4KDEyMCwgcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi13XCIpIHx8IFwiXCIpIHx8IDEyMCksIGMgPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKSwgcCA9IChzKSA9PiB7XG5cdFx0XHRzLmJ1dHRvbiA9PT0gMCAmJiAocy50YXJnZXQgIT09IG4gJiYgIW4uY29udGFpbnMocy50YXJnZXQpIHx8IChyID0gITAsIGkgPSBzLmNsaWVudFgsIGwgPSBzLmNsaWVudFksIGEgPSB0Lm9mZnNldFdpZHRoLCBvID0gdC5vZmZzZXRIZWlnaHQsIG4uc2V0UG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGZuLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdHdpZHRoOiBhLFxuXHRcdFx0XHRcdGhlaWdodDogb1xuXHRcdFx0XHR9XG5cdFx0XHR9KSkpKTtcblx0XHR9LCBmID0gKHMpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0Y29uc3QgaCA9IE1hdGgubWF4KGQsIGEgKyAocy5jbGllbnRYIC0gaSkpLCBtID0gTWF0aC5tYXgoYywgbyArIChzLmNsaWVudFkgLSBsKSk7XG5cdFx0XHR0LnN0eWxlLndpZHRoID0gYCR7aH1weGAsIHQuc3R5bGUuaGVpZ2h0ID0gYCR7bX1weGAsIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZm4ubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHR3aWR0aDogaCxcblx0XHRcdFx0XHRoZWlnaHQ6IG1cblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIHUgPSAocykgPT4ge1xuXHRcdFx0aWYgKHIpIHtcblx0XHRcdFx0ciA9ICExO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG4ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGZuLmVuZCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRcdHdpZHRoOiB0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiB0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIGoodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgQShuLCBcInBvaW50ZXJkb3duXCIsIHApKSwgaih0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBBKG4sIFwicG9pbnRlcm1vdmVcIiwgZikpLCBqKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIEEobiwgXCJwb2ludGVydXBcIiwgdSkpLCBqKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIEEobiwgXCJwb2ludGVyY2FuY2VsXCIsIHUpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIHRyKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIpLCB0aGlzO1xuXHR9XG59O1xubmV3IGRsKCk7XG5uZXcgaGwoKTtcbm5ldyBwbCgpO1xuZnVuY3Rpb24gbW4oZSwgdCkge1xuXHRjb25zdCBuID0gTWF0aC5taW4oZS54LCB0LngpLCByID0gTWF0aC5taW4oZS55LCB0LnkpLCBpID0gTWF0aC5tYXgoZS54LCB0LngpLCBsID0gTWF0aC5tYXgoZS55LCB0LnkpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IG4sXG5cdFx0dG9wOiByLFxuXHRcdHJpZ2h0OiBpLFxuXHRcdGJvdHRvbTogbCxcblx0XHR3aWR0aDogaSAtIG4sXG5cdFx0aGVpZ2h0OiBsIC0gclxuXHR9O1xufVxudmFyIGV0ID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1zZWxlY3Q6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1zZWxlY3Q6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tc2VsZWN0OmVuZFwiLFxuXHRjYW5jZWw6IFwianVuY3Rpb24tc2VsZWN0OmNhbmNlbFwiXG59O1xudmFyIHZuID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1kcmFnOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tZHJhZzptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1kcmFnOmVuZFwiXG59O1xudmFyIGduID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1yZXNpemU6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1yZXNpemU6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tcmVzaXplOmVuZFwiXG59O1xudmFyIGZsID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5EaXNwb3NlcnNcIik7XG52YXIgVHQgPSBnbG9iYWxUaGlzW2ZsXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgTSA9IChlLCB0LCBuKSA9PiB7XG5cdGNvbnN0IHIgPSBUdC5nZXQoZSkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgaSA9IHIuZ2V0KHQpID8/IFtdO1xuXHRpLnB1c2gobiksIHIuc2V0KHQsIGkpLCBUdC5zZXQoZSwgcik7XG59O1xudmFyIG5yID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IFR0LmdldChlKSwgciA9IG4/LmdldCh0KTtcblx0aWYgKHIpIHtcblx0XHRmb3IgKGNvbnN0IGkgb2YgcikgdHJ5IHtcblx0XHRcdGkoKTtcblx0XHR9IGNhdGNoIHt9XG5cdFx0bi5kZWxldGUodCksIG4uc2l6ZSA9PT0gMCAmJiBUdC5kZWxldGUoZSk7XG5cdH1cbn07XG52YXIgWSA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/LihlKT8uZ2V0UHJvcGVydHlWYWx1ZT8uKHQpPy50cmltPy4oKSA/PyBcIlwiLCByID0gcGFyc2VGbG9hdChuKTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShyKSA/IHIgOiAwO1xufTtcbnZhciBzaSA9IChlLCB0LCBuKSA9PiB7XG5cdGNvbnN0IHIgPSBlLmdldEF0dHJpYnV0ZSh0KT8udHJpbSgpO1xuXHRpZiAoIXIpIHJldHVybiBuO1xuXHRjb25zdCBpID0gZS5xdWVyeVNlbGVjdG9yKHIpO1xuXHRyZXR1cm4gaSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gaSA6IG47XG59O1xudmFyIG1sID0gY2xhc3MgZXh0ZW5kcyBZbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRuLmNsYXNzTmFtZSA9IFwidWktanVuY3Rpb24tc2VsZWN0LW92ZXJsYXlcIiwgbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLW92ZXJsYXlcIiwgXCJcIiksIG4uc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Ojk5OTk7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoxcHggZGFzaGVkIGNvbG9yLW1peChpbiBva2xhYiwgIzM3OTRmZiA3MCUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kOmNvbG9yLW1peChpbiBva2xhYiwgIzM3OTRmZiAxNCUsIHRyYW5zcGFyZW50KTtkaXNwbGF5Om5vbmU7aW5zZXQ6YXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjA7XCIsIGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKHQpPy5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiAmJiAodC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIiksIHQuYXBwZW5kQ2hpbGQobik7XG5cdFx0bGV0IGkgPSAhMSwgbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fSwgYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRjb25zdCBvID0gKGgpID0+IHtcblx0XHRcdGNvbnN0IG0gPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogaC5jbGllbnRYIC0gbS5sZWZ0LFxuXHRcdFx0XHR5OiBoLmNsaWVudFkgLSBtLnRvcFxuXHRcdFx0fTtcblx0XHR9LCBkID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgaCA9IG1uKGwsIGEpO1xuXHRcdFx0aWYgKGgud2lkdGggPCAxICYmIGguaGVpZ2h0IDwgMSkge1xuXHRcdFx0XHRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiLCBuLnN0eWxlLmxlZnQgPSBgJHtoLmxlZnR9cHhgLCBuLnN0eWxlLnRvcCA9IGAke2gudG9wfXB4YCwgbi5zdHlsZS53aWR0aCA9IGAke2gud2lkdGh9cHhgLCBuLnN0eWxlLmhlaWdodCA9IGAke2guaGVpZ2h0fXB4YDtcblx0XHR9LCBjID0gKGgpID0+IHtcblx0XHRcdGguYnV0dG9uID09PSAwICYmIChoLnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtanVuY3Rpb24taWdub3JlLXNlbGVjdF0sIFtkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXSwgW2RhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZV0sIGJ1dHRvbiwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikgfHwgKGgudGFyZ2V0ID09PSB0IHx8IHQuY29udGFpbnMoaC50YXJnZXQpKSAmJiAoaSA9ICEwLCBsID0gbyhoKSwgYSA9IHsgLi4ubCB9LCB0LnNldFBvaW50ZXJDYXB0dXJlKGgucG9pbnRlcklkKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldC5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5sIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5hIH0sXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSksIGQoKSkpO1xuXHRcdH0sIHAgPSAoaCkgPT4ge1xuXHRcdFx0aWYgKCFpKSByZXR1cm47XG5cdFx0XHRhID0gbyhoKSwgZCgpO1xuXHRcdFx0Y29uc3QgbSA9IG1uKGwsIGEpO1xuXHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldC5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRib3g6IG0sXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgZiA9IChoKSA9PiB7XG5cdFx0XHRpZiAoIWkpIHJldHVybjtcblx0XHRcdGkgPSAhMTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGgucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGNvbnN0IG0gPSBtbihsLCBhKTtcblx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXQuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRib3g6IG0sXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgdSA9IChoKSA9PiB7XG5cdFx0XHRpICYmIGYoaCk7XG5cdFx0fSwgcyA9IChoKSA9PiB7XG5cdFx0XHRpZiAoaSkge1xuXHRcdFx0XHRpID0gITEsIG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGgucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV0LmNhbmNlbCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDogeyBob3N0OiB0IH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIE0odCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgKCkgPT4ge1xuXHRcdFx0bi5yZW1vdmUoKTtcblx0XHR9KSwgTSh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBMKHQsIFwicG9pbnRlcmRvd25cIiwgYykpLCBNKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIEwodCwgXCJwb2ludGVybW92ZVwiLCBwKSksIE0odCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgTCh0LCBcInBvaW50ZXJ1cFwiLCB1KSksIE0odCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgTCh0LCBcInBvaW50ZXJjYW5jZWxcIiwgcykpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgbnIodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiksIHRoaXM7XG5cdH1cbn07XG52YXIgdmwgPSBjbGFzcyBleHRlbmRzIFluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRCZSh0LCBcIi0tangtZHJhZy14XCIsIFkodCwgXCItLWp4LWRyYWcteFwiKSksIEJlKHQsIFwiLS1qeC1kcmFnLXlcIiwgWSh0LCBcIi0tangtZHJhZy15XCIpKTtcblx0XHRjb25zdCBuID0gdC5zdHlsZS50cmFuc2Zvcm07XG5cdFx0KCF0LnN0eWxlLnRyYW5zZm9ybSB8fCB0LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJub25lXCIpICYmICh0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoY2FsYyh2YXIoLS1qeC1kcmFnLXgsIDApICogMXB4KSwgY2FsYyh2YXIoLS1qeC1kcmFnLXksIDApICogMXB4KSwgMClcIik7XG5cdFx0Y29uc3QgciA9IHNpKHQsIFwiZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZVwiLCB0KTtcblx0XHRsZXQgaSA9ICExLCBsID0gMCwgYSA9IDAsIG8gPSAwLCBkID0gMDtcblx0XHRjb25zdCBjID0gKHUpID0+IHtcblx0XHRcdHUuYnV0dG9uID09PSAwICYmICh1LnRhcmdldCAhPT0gciAmJiAhci5jb250YWlucyh1LnRhcmdldCkgfHwgKGkgPSAhMCwgbCA9IHUuY2xpZW50WCwgYSA9IHUuY2xpZW50WSwgbyA9IFkodCwgXCItLWp4LWRyYWcteFwiKSwgZCA9IFkodCwgXCItLWp4LWRyYWcteVwiKSwgci5zZXRQb2ludGVyQ2FwdHVyZSh1LnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodm4uc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0Y2xpZW50WDogdS5jbGllbnRYLFxuXHRcdFx0XHRcdGNsaWVudFk6IHUuY2xpZW50WSxcblx0XHRcdFx0XHRiYXNlWDogbyxcblx0XHRcdFx0XHRiYXNlWTogZFxuXHRcdFx0XHR9XG5cdFx0XHR9KSkpKTtcblx0XHR9LCBwID0gKHUpID0+IHtcblx0XHRcdGlmICghaSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgcyA9IHUuY2xpZW50WCAtIGwsIGggPSB1LmNsaWVudFkgLSBhLCBtID0gbyArIHMsIGcgPSBkICsgaDtcblx0XHRcdEJlKHQsIFwiLS1qeC1kcmFnLXhcIiwgbSksIEJlKHQsIFwiLS1qeC1kcmFnLXlcIiwgZyksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodm4ubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRkeDogcyxcblx0XHRcdFx0XHRkeTogaCxcblx0XHRcdFx0XHR4OiBtLFxuXHRcdFx0XHRcdHk6IGdcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIGYgPSAodSkgPT4ge1xuXHRcdFx0aWYgKGkpIHtcblx0XHRcdFx0aSA9ICExO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHIucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHUucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHZuLmVuZCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRcdHg6IFkodCwgXCItLWp4LWRyYWcteFwiKSxcblx0XHRcdFx0XHRcdHk6IFkodCwgXCItLWp4LWRyYWcteVwiKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIE0odCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsICgpID0+IHtcblx0XHRcdHQuc3R5bGUudHJhbnNmb3JtID0gbjtcblx0XHR9KSwgTSh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgTChyLCBcInBvaW50ZXJkb3duXCIsIGMpKSwgTSh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgTChyLCBcInBvaW50ZXJtb3ZlXCIsIHApKSwgTSh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgTChyLCBcInBvaW50ZXJ1cFwiLCBmKSksIE0odCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIEwociwgXCJwb2ludGVyY2FuY2VsXCIsIGYpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIG5yKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiKSwgdGhpcztcblx0fVxufTtcbnZhciBnbCA9IGNsYXNzIGV4dGVuZHMgWW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0fVxuXHRjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdGlmICghdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgbiA9IHNpKHQsIFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXCIsIHQpO1xuXHRcdGxldCByID0gITEsIGkgPSAwLCBsID0gMCwgYSA9IDAsIG8gPSAwO1xuXHRcdGNvbnN0IGQgPSBNYXRoLm1heCgxMjAsIHBhcnNlRmxvYXQodC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4td1wiKSB8fCBcIlwiKSB8fCAxMjApLCBjID0gTWF0aC5tYXgoODAsIHBhcnNlRmxvYXQodC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4taFwiKSB8fCBcIlwiKSB8fCA4MCksIHAgPSAocykgPT4ge1xuXHRcdFx0cy5idXR0b24gPT09IDAgJiYgKHMudGFyZ2V0ICE9PSBuICYmICFuLmNvbnRhaW5zKHMudGFyZ2V0KSB8fCAociA9ICEwLCBpID0gcy5jbGllbnRYLCBsID0gcy5jbGllbnRZLCBhID0gdC5vZmZzZXRXaWR0aCwgbyA9IHQub2Zmc2V0SGVpZ2h0LCBuLnNldFBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChnbi5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHR3aWR0aDogYSxcblx0XHRcdFx0XHRoZWlnaHQ6IG9cblx0XHRcdFx0fVxuXHRcdFx0fSkpKSk7XG5cdFx0fSwgZiA9IChzKSA9PiB7XG5cdFx0XHRpZiAoIXIpIHJldHVybjtcblx0XHRcdGNvbnN0IGggPSBNYXRoLm1heChkLCBhICsgKHMuY2xpZW50WCAtIGkpKSwgbSA9IE1hdGgubWF4KGMsIG8gKyAocy5jbGllbnRZIC0gbCkpO1xuXHRcdFx0dC5zdHlsZS53aWR0aCA9IGAke2h9cHhgLCB0LnN0eWxlLmhlaWdodCA9IGAke219cHhgLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGduLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0d2lkdGg6IGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBtXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCB1ID0gKHMpID0+IHtcblx0XHRcdGlmIChyKSB7XG5cdFx0XHRcdHIgPSAhMTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRuLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCk7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChnbi5lbmQsIHtcblx0XHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0XHR3aWR0aDogdC5vZmZzZXRXaWR0aCxcblx0XHRcdFx0XHRcdGhlaWdodDogdC5vZmZzZXRIZWlnaHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBNKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIEwobiwgXCJwb2ludGVyZG93blwiLCBwKSksIE0odCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgTChuLCBcInBvaW50ZXJtb3ZlXCIsIGYpKSwgTSh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBMKG4sIFwicG9pbnRlcnVwXCIsIHUpKSwgTSh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBMKG4sIFwicG9pbnRlcmNhbmNlbFwiLCB1KSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiBucih0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKSwgdGhpcztcblx0fVxufTtcbm5ldyBtbCgpO1xubmV3IHZsKCk7XG5uZXcgZ2woKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL2p1bmN0aW9uL3R5cGVzLnRzXG5mdW5jdGlvbiBqdW5jdGlvblRvQm94KGEsIGIpIHtcblx0Y29uc3QgbGVmdCA9IE1hdGgubWluKGEueCwgYi54KTtcblx0Y29uc3QgdG9wID0gTWF0aC5taW4oYS55LCBiLnkpO1xuXHRjb25zdCByaWdodCA9IE1hdGgubWF4KGEueCwgYi54KTtcblx0Y29uc3QgYm90dG9tID0gTWF0aC5tYXgoYS55LCBiLnkpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aDogcmlnaHQgLSBsZWZ0LFxuXHRcdGhlaWdodDogYm90dG9tIC0gdG9wXG5cdH07XG59XG52YXIgSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tc2VsZWN0OnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tc2VsZWN0Om1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXNlbGVjdDplbmRcIixcblx0Y2FuY2VsOiBcImp1bmN0aW9uLXNlbGVjdDpjYW5jZWxcIlxufTtcbnZhciBKVU5DVElPTl9EUkFHX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tZHJhZzpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLWRyYWc6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tZHJhZzplbmRcIlxufTtcbnZhciBKVU5DVElPTl9SRVNJWkVfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1yZXNpemU6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1yZXNpemU6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tcmVzaXplOmVuZFwiXG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vanVuY3Rpb24vSnVuY3Rpb25NaXhpbnMudHNcbnZhciBtaXhpbkRpc3Bvc2Vyc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5EaXNwb3NlcnNcIik7XG52YXIgbWl4aW5EaXNwb3NlcnMgPSBnbG9iYWxUaGlzW21peGluRGlzcG9zZXJzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcHVzaERpc3Bvc2FibGUgPSAoaG9zdCwgbWl4aW5OYW1lLCBmbikgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgbGlzdCA9IG1hcC5nZXQobWl4aW5OYW1lKSA/PyBbXTtcblx0bGlzdC5wdXNoKGZuKTtcblx0bWFwLnNldChtaXhpbk5hbWUsIGxpc3QpO1xuXHRtaXhpbkRpc3Bvc2Vycy5zZXQoaG9zdCwgbWFwKTtcbn07XG52YXIgcnVuRGlzcG9zZXJzID0gKGhvc3QsIG1peGluTmFtZSkgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCk7XG5cdGNvbnN0IGxpc3QgPSBtYXA/LmdldChtaXhpbk5hbWUpO1xuXHRpZiAoIWxpc3QpIHJldHVybjtcblx0Zm9yIChjb25zdCBmbiBvZiBsaXN0KSB0cnkge1xuXHRcdGZuKCk7XG5cdH0gY2F0Y2gge31cblx0bWFwLmRlbGV0ZShtaXhpbk5hbWUpO1xuXHRpZiAobWFwLnNpemUgPT09IDApIG1peGluRGlzcG9zZXJzLmRlbGV0ZShob3N0KTtcbn07XG52YXIgcGFyc2VQeFZhciA9IChob3N0LCBuYW1lKSA9PiB7XG5cdGNvbnN0IHJhdyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnRyaW0/LigpID8/IFwiXCI7XG5cdGNvbnN0IG4gPSBwYXJzZUZsb2F0KHJhdyk7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogMDtcbn07XG52YXIgcXVlcnlIYW5kbGUgPSAoaG9zdCwgYXR0ciwgZmFsbGJhY2spID0+IHtcblx0Y29uc3Qgc2VsID0gaG9zdC5nZXRBdHRyaWJ1dGUoYXR0cik/LnRyaW0oKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxsYmFjaztcblx0Y29uc3QgZm91bmQgPSBob3N0LnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcblx0cmV0dXJuIGZvdW5kIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBmb3VuZCA6IGZhbGxiYWNrO1xufTtcbnZhciBKdW5jdGlvblNlbGVjdE1peGluID0gY2xhc3MgZXh0ZW5kcyBqdSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0b3ZlcmxheS5jbGFzc05hbWUgPSBcInVpLWp1bmN0aW9uLXNlbGVjdC1vdmVybGF5XCI7XG5cdFx0b3ZlcmxheS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLW92ZXJsYXlcIiwgXCJcIik7XG5cdFx0b3ZlcmxheS5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6OTk5OTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDE0JSwgdHJhbnNwYXJlbnQpO2Rpc3BsYXk6bm9uZTtpbnNldDphdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtcIjtcblx0XHRjb25zdCBlbnN1cmVQb3NpdGlvbmVkID0gKCkgPT4ge1xuXHRcdFx0aWYgKChnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lihob3N0KSk/LnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSBob3N0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdH07XG5cdFx0ZW5zdXJlUG9zaXRpb25lZCgpO1xuXHRcdGhvc3QuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cdFx0bGV0IGFjdGl2ZSA9IGZhbHNlO1xuXHRcdGxldCBhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGxldCBiID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGNvbnN0IGxvY2FsUG9pbnQgPSAoZXYpID0+IHtcblx0XHRcdGNvbnN0IHIgPSBob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogZXYuY2xpZW50WCAtIHIubGVmdCxcblx0XHRcdFx0eTogZXYuY2xpZW50WSAtIHIudG9wXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y29uc3QgYXBwbHlPdmVybGF5ID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGlmIChib3gud2lkdGggPCAxICYmIGJveC5oZWlnaHQgPCAxKSB7XG5cdFx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHtib3gubGVmdH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLnRvcCA9IGAke2JveC50b3B9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2JveC53aWR0aH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmhlaWdodCA9IGAke2JveC5oZWlnaHR9cHhgO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1qdW5jdGlvbi1pZ25vcmUtc2VsZWN0XSwgW2RhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVdLCBbZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXSwgYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSkgcmV0dXJuO1xuXHRcdFx0aWYgKCEoZXYudGFyZ2V0ID09PSBob3N0IHx8IGhvc3QuY29udGFpbnMoZXYudGFyZ2V0KSkpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IHRydWU7XG5cdFx0XHRhID0gbG9jYWxQb2ludChldik7XG5cdFx0XHRiID0geyAuLi5hIH07XG5cdFx0XHRob3N0LnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0XHRhcHBseU92ZXJsYXkoKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGIgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGJveCxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IGVuZCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aG9zdC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGJveCxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRlbmQoZXYpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25DYW5jZWwgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aG9zdC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5jYW5jZWwsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7IGhvc3QgfVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgKCkgPT4ge1xuXHRcdFx0b3ZlcmxheS5yZW1vdmUoKTtcblx0XHR9KTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBWKGhvc3QsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgVihob3N0LCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIFYoaG9zdCwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIFYoaG9zdCwgXCJwb2ludGVyY2FuY2VsXCIsIG9uQ2FuY2VsKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvbkRyYWdNaXhpbiA9IGNsYXNzIGV4dGVuZHMganUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRrdChob3N0LCBcIi0tangtZHJhZy14XCIsIHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKSk7XG5cdFx0a3QoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIikpO1xuXHRcdGNvbnN0IHByZXZpb3VzVHJhbnNmb3JtID0gaG9zdC5zdHlsZS50cmFuc2Zvcm07XG5cdFx0aWYgKCFob3N0LnN0eWxlLnRyYW5zZm9ybSB8fCBob3N0LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJub25lXCIpIGhvc3Quc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChjYWxjKHZhcigtLWp4LWRyYWcteCwgMCkgKiAxcHgpLCBjYWxjKHZhcigtLWp4LWRyYWcteSwgMCkgKiAxcHgpLCAwKVwiO1xuXHRcdGNvbnN0IGhhbmRsZSA9IHF1ZXJ5SGFuZGxlKGhvc3QsIFwiZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRsZXQgc3RhcnRYID0gMDtcblx0XHRsZXQgc3RhcnRZID0gMDtcblx0XHRsZXQgYmFzZVggPSAwO1xuXHRcdGxldCBiYXNlWSA9IDA7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IHRydWU7XG5cdFx0XHRzdGFydFggPSBldi5jbGllbnRYO1xuXHRcdFx0c3RhcnRZID0gZXYuY2xpZW50WTtcblx0XHRcdGJhc2VYID0gcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpO1xuXHRcdFx0YmFzZVkgPSBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIik7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRjbGllbnRYOiBldi5jbGllbnRYLFxuXHRcdFx0XHRcdGNsaWVudFk6IGV2LmNsaWVudFksXG5cdFx0XHRcdFx0YmFzZVgsXG5cdFx0XHRcdFx0YmFzZVlcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRjb25zdCBkeCA9IGV2LmNsaWVudFggLSBzdGFydFg7XG5cdFx0XHRjb25zdCBkeSA9IGV2LmNsaWVudFkgLSBzdGFydFk7XG5cdFx0XHRjb25zdCBueCA9IGJhc2VYICsgZHg7XG5cdFx0XHRjb25zdCBueSA9IGJhc2VZICsgZHk7XG5cdFx0XHRrdChob3N0LCBcIi0tangtZHJhZy14XCIsIG54KTtcblx0XHRcdGt0KGhvc3QsIFwiLS1qeC1kcmFnLXlcIiwgbnkpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0ZHgsXG5cdFx0XHRcdFx0ZHksXG5cdFx0XHRcdFx0eDogbngsXG5cdFx0XHRcdFx0eTogbnlcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFkcmFnZ2luZykgcmV0dXJuO1xuXHRcdFx0ZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhhbmRsZS5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0eDogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdHk6IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0aG9zdC5zdHlsZS50cmFuc2Zvcm0gPSBwcmV2aW91c1RyYW5zZm9ybTtcblx0XHR9KTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgVihoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIFYoaGFuZGxlLCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBWKGhhbmRsZSwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBWKGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvblJlc2l6ZU1peGluID0gY2xhc3MgZXh0ZW5kcyBqdSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0bGV0IHN4ID0gMDtcblx0XHRsZXQgc3kgPSAwO1xuXHRcdGxldCBzdyA9IDA7XG5cdFx0bGV0IHNoID0gMDtcblx0XHRjb25zdCBtaW5XID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KGhvc3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKTtcblx0XHRjb25zdCBtaW5IID0gTWF0aC5tYXgoODAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4taFwiKSB8fCBcIlwiKSB8fCA4MCk7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IHRydWU7XG5cdFx0XHRzeCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzeSA9IGV2LmNsaWVudFk7XG5cdFx0XHRzdyA9IGhvc3Qub2Zmc2V0V2lkdGg7XG5cdFx0XHRzaCA9IGhvc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogc3csXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IG53ID0gTWF0aC5tYXgobWluVywgc3cgKyAoZXYuY2xpZW50WCAtIHN4KSk7XG5cdFx0XHRjb25zdCBuaCA9IE1hdGgubWF4KG1pbkgsIHNoICsgKGV2LmNsaWVudFkgLSBzeSkpO1xuXHRcdFx0aG9zdC5zdHlsZS53aWR0aCA9IGAke253fXB4YDtcblx0XHRcdGhvc3Quc3R5bGUuaGVpZ2h0ID0gYCR7bmh9cHhgO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogbncsXG5cdFx0XHRcdFx0aGVpZ2h0OiBuaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIXJlc2l6aW5nKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBob3N0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogaG9zdC5vZmZzZXRIZWlnaHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgVihoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgVihoYW5kbGUsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgVihoYW5kbGUsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBWKGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xubmV3IEp1bmN0aW9uU2VsZWN0TWl4aW4oKTtcbm5ldyBKdW5jdGlvbkRyYWdNaXhpbigpO1xubmV3IEp1bmN0aW9uUmVzaXplTWl4aW4oKTtcblxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBET01NaXhpbiwgSnVuY3Rpb25EcmFnTWl4aW4sIEp1bmN0aW9uUmVzaXplTWl4aW4sIEp1bmN0aW9uU2VsZWN0TWl4aW4sIE1BVENILCBNT0MsIE1PQ0VsZW1lbnQsIFJBRkJlaGF2aW9yLCBSRUdFWCwgUk9PVCwgV2F2eVNoYXBlZENpcmNsZSwgX19leHBvcnRQcm9wZXJ0aWVzLCBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLCBhZGRFdmVudCwgYWRkRXZlbnRzLCBhZGRFdmVudHNMaXN0LCBhZGRSb290LCBhZG9wdGVkQmxvYk1hcCwgYWRvcHRlZE1hcCwgYW5pbWF0ZUhpZGUsIGFuaW1hdGVTaG93LCBhdmFpbFNpemUsIGJiaCwgYmJ3LCBiaW5kQmVoYXZpb3IsIGJpbmRNaXhpbnMsIGJpbmRTdG9yZSwgYm9yZGVyQm94SGVpZ2h0LCBib3JkZXJCb3hXaWR0aCwgYm91bmRCZWhhdmlvcnMsIGJvdW5kTWl4aW5TZXQsIGNiaCwgY2J3LCBjaGFuZ2Vab29tLCBjbGFzc2VzLCBjb21wdXRlQ2FyZXRQb3NpdGlvbiwgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50LCBjb250YWluc09yU2VsZiwgY29udGVudEJveEhlaWdodCwgY29udGVudEJveFdpZHRoLCBjcmVhdGVFbGVtZW50VmFuaWxsYSwgZGVsZXRlU3R5bGVQcm9wZXJ0eSwgZGV0ZWN0TW9iaWxlLCBkb0JvcmRlck9ic2VydmUsIGRvQ29udGVudE9ic2VydmUsIGZldGNoQW5kQ2FjaGUsIGZldGNoQXNJbmxpbmUsIGZpeE9yaWVudFRvU2NyZWVuLCBmaXhlZENsaWVudFpvb20sIGdldEFkb3B0ZWRTdHlsZVJ1bGUsIGdldEF2YWlsU2l6ZSwgZ2V0Qm91bmRpbmdPcmllbnRSZWN0LCBnZXRDb3JyZWN0T3JpZW50YXRpb24sIGdldEVsZW1lbnRSZWxhdGVkLCBnZXRFbGVtZW50Wm9vbSwgZ2V0RXZlbnRUYXJnZXQsIGdldE9mZnNldFBhcmVudCwgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4sIGdldFBhZGRpbmcsIGdldFByb3BlcnR5VmFsdWUsIGdldFB4VmFsdWUsIGdldFN0b3Jlc09mRWxlbWVudCwgZ2V0U3R5bGVMYXllciwgZ2V0U3R5bGVSdWxlLCBnZXRUcmFuc2Zvcm0sIGdldFRyYW5zZm9ybU9yaWdpbiwgZ2V0Wm9vbSwgaGFuZGxlQXR0cmlidXRlLCBoYW5kbGVEYXRhc2V0LCBoYW5kbGVIaWRkZW4sIGhhbmRsZVByb3BlcnR5LCBoYW5kbGVTdHlsZUNoYW5nZSwgaGFzUGFyZW50LCBoYXNoLCBodG1sLCBpbmNsdWRlU2VsZiwgaW5kZXhPZiwgaW5pdFRleHRTdHlsZSwgaW5pdFZpc2liaWxpdHksIGlzRWxlbWVudCwgaXNJbkZvY3VzLCBpc01vYmlsZSwgaXNOZWFybHlJZGVudGl0eSwgaXNWYWxpZFBhcmVudCwgbG9hZEFzQWRvcHRlZCwgbG9hZEJsb2JTdHlsZSwgbG9hZElubGluZVN0eWxlLCBsb2FkU3R5bGVTaGVldCwgbWFrZVJBRkN5Y2xlLCBtZWFzdXJlSW5wdXRJbkZvY3VzLCBtZWFzdXJlVGV4dCwgbWl4aW5EaXNwb3NlcnMsIG1peGluRWxlbWVudHMsIG1peGluTmFtZXNwYWNlLCBtaXhpblJlZ2lzdHJ5LCBuYW1lUmVnaXN0cnlGLCBuYW1lZFN0b3JlTWFwcywgb2JzZXJ2ZUF0dHJpYnV0ZSwgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IsIG9ic2VydmVCb3JkZXJCb3gsIG9ic2VydmVCeVNlbGVjdG9yLCBvYnNlcnZlQ29udGVudEJveCwgb25Cb3JkZXJPYnNlcnZlLCBvbkNvbnRlbnRPYnNlcnZlLCBvcmllbnRPZiwgb3JpZW50YXRpb25OdW1iZXJNYXAsIHBhcnNlTGVuZ3RoLCBwYXJzZU9yaWdpbiwgcGFzc2l2ZU9wdHMsIHByZWxvYWRTdHlsZSwgcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQsIHJlZmxlY3RCZWhhdmlvcnMsIHJlZmxlY3RNaXhpbnMsIHJlZmxlY3RTdG9yZXMsIHJlZ2lzdGVyTWl4aW4sIHJlbW92ZUFkb3B0ZWQsIHJlbW92ZUV2ZW50LCByZW1vdmVFdmVudHMsIHJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCwgcm9vdHMsIHNldEF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXNJZk51bGwsIHNldENoZWNrZWQsIHNldElkbGVJbnRlcnZhbCwgc2V0UHJvcGVydHksIHNldFN0eWxlSW5SdWxlLCBzZXRTdHlsZVByb3BlcnR5LCBzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2ssIHNldFN0eWxlUHJvcGVydHlUeXBlZCwgc2V0U3R5bGVSdWxlLCBzZXRTdHlsZVJ1bGVzLCBzZXRTdHlsZVVSTCwgdGhyb3R0bGVNYXAsIHVuZml4ZWRDbGllbnRab29tLCB1cGRhdGVBbGxNaXhpbnMsIHVwZGF0ZU1peGluQXR0cmlidXRlcywgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzLCB1cGRhdGVWUCwgdXJsLCB3aGVuQW55U2NyZWVuQ2hhbmdlcywgem9vbU9mLCB6b29tVmFsdWVzIH07Il0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyxpQkFBQUEsSUFBZSxnQkFBQUMsR0FBYyxnQkFBQUMsSUFBYyxZQUFBQyxHQUFVLHFCQUFBQyxJQUFtQixTQUFBQyxJQUFPLGVBQUFDLElBQWEsZ0JBQUFDLElBQWMsdUJBQUFDLElBQXFCLHNCQUFBQyxJQUFvQiwrQkFBQUMsSUFBNkIscUJBQUFDLFNBQXlCO0FBR2xOLElBQUlDLEtBQWtDLHVCQUFPLElBQUksa0NBQWtDLEdBQy9FQyxLQUE0QixXQUFXRCxFQUErQixNQUFzQixvQkFBSSxJQUFJO0FBQ3hHO0FBQUEsRUFDQztBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFB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YztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFB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TUFBc0Isb0JBQUksSUFBSTtBQUNwRDtBQUFBLEVBQ0M7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElB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LElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFV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QUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxF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QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1Ys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O0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNW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QUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVB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QVFBLEVBQUs7QUFBQSxVQUNkO0FBQUEsUUFDRCxDQUFDLENBQUM7QUFBQTtBQUFBLElBQ0g7QUFDQSxXQUFBZ3VCLEVBQWVodUIsR0FBTSxzQkFBc0I2VSxFQUFFd2EsR0FBUSxlQUFlUCxDQUFNLENBQUMsR0FDM0VkLEVBQWVodUIsR0FBTSxzQkFBc0I2VSxFQUFFd2EsR0FBUSxlQUFlTixDQUFNLENBQUMsR0FDM0VmLEVBQWVodUIsR0FBTSxzQkFBc0I2VSxFQUFFd2EsR0FBUSxhQUFhSixDQUFJLENBQUMsR0FDdkVqQixFQUFlaHVCLEdBQU0sc0JBQXNCNlUsRUFBRXdhLEdBQVEsaUJBQWlCSixDQUFJLENBQUMsR0FDcEU7QUFBQSxFQUNSO0FBQUEsRUFDQSxXQUFXUCxHQUFLO0FBQ2YsVUFBTTF1QixJQUFPMHVCLEdBQUssUUFBUTtBQUMxQixXQUFJMXVCLEtBQU1rdUIsR0FBYWx1QixHQUFNLG9CQUFvQixHQUMxQztBQUFBLEVBQ1I7QUFDRDtBQUNBLElBQUl5dUIsR0FBb0I7QUFDeEIsSUFBSVUsR0FBa0I7QUFDdEIsSUFBSVksR0FBb0I7IiwKICAibmFtZXMiOiBbIiRhdm9pZFRyaWdnZXIiLCAiY2FtZWxUb0tlYmFiIiwgImN2dF9jc190b19vcyIsICJoYXNWYWx1ZSIsICJpc0FycmF5T3JJdGVyYWJsZSIsICJpc1ZhbCIsICJpc1ZhbHVlVW5pdCIsICJrZWJhYlRvQ2FtZWwiLCAibm9ybWFsaXplR3JpZExheW91dCIsICJub3JtYWxpemVQcmltaXRpdmUiLCAicmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsIiwgInRyeVN0cmluZ0FzTnVtYmVyIiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wiLCAiX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyIsICJvcHRpb25zIiwgIm5hbWUiLCAiZSIsICJfX2V4cG9ydFByb3BlcnRpZXMiLCAiaXNNb2JpbGUiLCAiY2hlY2siLCAiYSIsICJkZXRlY3RNb2JpbGUiLCAiY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2siLCAicnVuV2hlbklkbGUkMSIsICJjYiIsICJ0aW1lb3V0IiwgImdldE9mZnNldFBhcmVudCIsICJlbGVtZW50IiwgImdldE9mZnNldFBhcmVudENoYWluIiwgInBhcmVudHMiLCAiY3VycmVudCIsICJwYXJlbnQiLCAiaXNOZWFybHlJZGVudGl0eSIsICJtYXRyaXgiLCAiZXBzaWxvbiIsICJtYWtlUkFGQ3ljbGUiLCAiY29udHJvbCIsICJyQUYiLCAicmVzIiwgIlJBRkJlaGF2aW9yIiwgInNoZWQiLCAiUk9PVCIsICJzZXRBdHRyaWJ1dGVzSWZOdWxsIiwgImF0dHJzIiwgInZhbHVlIiwgIm9sZCIsICJzZXRBdHRyaWJ1dGVzIiwgInRocm90dGxlTWFwIiwgInNldElkbGVJbnRlcnZhbCIsICJhcmdzIiwgInN0YXR1cyIsICJyIiwgImJvcmRlckJveFdpZHRoIiwgImJvcmRlckJveEhlaWdodCIsICJjb250ZW50Qm94V2lkdGgiLCAiY29udGVudEJveEhlaWdodCIsICJvbkJvcmRlck9ic2VydmUiLCAib25Db250ZW50T2JzZXJ2ZSIsICJkb0NvbnRlbnRPYnNlcnZlIiwgIm9ic2VydmVyIiwgImVudHJpZXMiLCAiZW50cnkiLCAiY29udGVudEJveFNpemUiLCAiZG9Cb3JkZXJPYnNlcnZlIiwgImJvcmRlckJveFNpemUiLCAidXJsIiwgInR5cGUiLCAic291cmNlIiwgImh0bWwiLCAicGFyc2VkIiwgInNldENoZWNrZWQiLCAiaW5wdXQiLCAiZXYiLCAiaXNWYWxpZFBhcmVudCIsICJpbmRleE9mIiwgIm5vZGUiLCAiTUFUQ0giLCAiUkVHRVgiLCAiY3JlYXRlRWxlbWVudFZhbmlsbGEiLCAic2VsZWN0b3IiLCAiY3JlYXRlIiwgIm1hdGNoIiwgImNsYXNzTmFtZSIsICJpc0VsZW1lbnQiLCAiZWwiLCAiaW5jbHVkZVNlbGYiLCAidGFyZ2V0IiwgImhhc1BhcmVudCIsICJwYXNzaXZlT3B0cyIsICJhZGRFdmVudCIsICJvcHRzIiwgIndyIiwgInJlbW92ZUV2ZW50IiwgImFkZEV2ZW50cyIsICJyb290IiwgImhhbmRsZXJzIiwgImFkZEV2ZW50c0xpc3QiLCAiZXZlbnRzIiwgImxpc3QiLCAiY2JzIiwgInJlbW92ZUV2ZW50cyIsICJnZXRFdmVudFRhcmdldCIsICJwYXRoIiwgImNvbnRhaW5zT3JTZWxmIiwgImIiLCAiYUVsIiwgImJFbCIsICJhSW5kZXgiLCAiYkluZGV4IiwgIk1PQ0VsZW1lbnQiLCAic2VsZiIsICJob3N0IiwgImhvc3RNYXRjaGVkIiwgImNsb3Nlc3QiLCAiTU9DIiwgImlzSW5Gb2N1cyIsICJzZWxlY3Rvck9yRWxlbWVudCIsICJkaXIiLCAiYWN0aXZlIiwgImlzRm9jdXNlZCIsICJpc0hvdmVyZWQiLCAiYWx0Q25kIiwgImdldFpvb20iLCAiem9vbVZhbHVlc1N5bWJvbCIsICJ6b29tVmFsdWVzIiwgInpvb21PZiIsICJjb250YWluZXIiLCAiY2hhbmdlWm9vbSIsICJzY2FsZSIsICJmaXhlZENsaWVudFpvb20iLCAidW5maXhlZENsaWVudFpvb20iLCAib3JpZW50T2YiLCAicmF3IiwgIm4iLCAiZ2V0Qm91bmRpbmdPcmllbnRSZWN0IiwgIm9yaWVudCIsICJ6b29tIiwgImJveCIsICJuYngiLCAib3JfaSIsICJ2diIsICJzaXplIiwgImxlZnRfIiwgInRvcF8iLCAicmlnaHRfIiwgImJvdHRvbV8iLCAibGVmdCIsICJyaWdodCIsICJ0b3AiLCAiYm90dG9tIiwgIndpZHRoIiwgImhlaWdodCIsICJiYnciLCAiYmJoIiwgImNidyIsICJjYmgiLCAicnVuV2hlbklkbGUiLCAiZ2V0QXZhaWxTaXplIiwgImwiLCAidnZCbG9jayIsICJhdyIsICJhaCIsICJhdmFpbFNpemUiLCAiY2xhc3NlcyIsICJvcmllbnRhdGlvbk51bWJlck1hcCIsICJ1cGRhdGVWUCIsICJydWxlIiwgInByb3BOYW1lIiwgInByb3BWYWx1ZSIsICJleGlzdHMiLCAiZ2V0Q29ycmVjdE9yaWVudGF0aW9uIiwgIm9yaWVudGF0aW9uVHlwZSIsICJwYXNzaXZlT3B0cyQxIiwgIndoZW5BbnlTY3JlZW5DaGFuZ2VzIiwgInRpY2tpbmciLCAidXBkYXRlIiwgInVuc3Vic2NyaWJlcnMiLCAidW5zdWIiLCAiZml4T3JpZW50VG9TY3JlZW4iLCAibmV4dCIsICJjdHgiLCAiaW5pdFRleHRTdHlsZSIsICJzdHlsZSIsICJmb250V2VpZ2h0IiwgImZvbnRTaXplIiwgImZvbnRGYW1pbHkiLCAiZm9udFN0cmV0Y2giLCAibWVhc3VyZVRleHQiLCAidGV4dCIsICJtZWFzdXJlSW5wdXRJbkZvY3VzIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uIiwgInBvaW50IiwgImN1cnJlbnRXaWR0aCIsICJpIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCIsICJjbGllbnQiLCAicmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQiLCAibGF5b3V0T3ZlcnJpZGUiLCAiYyIsICJiYXNlIiwgInJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCIsICJncmlkU3lzdGVtIiwgImNsaWVudFBvaW50IiwgIm1vZGUiLCAicmVjdCIsICJsYXlvdXQiLCAiY3MiLCAicGwiLCAicHQiLCAicHIiLCAicGIiLCAiY29udGVudFciLCAiY29udGVudEgiLCAiY3NDb29yZCIsICJhbmltYXRlU2hvdyIsICJhbmltYXRpb25Eb25lIiwgImFuaW1hdGUiLCAiZG9uZSIsICJlbmRBbmltYXRpb24iLCAiZXZlbnQiLCAicmVzb2x2ZSIsICJyZWplY3QiLCAicHJvbWlzZSIsICJyZXEiLCAiYW5pbWF0ZUhpZGUiLCAib25Cb3JkZXJPYnNlcnZlU3ltYm9sIiwgIm9uQm9yZGVyT2JzZXJ2ZSQxIiwgIm9uQ29udGVudE9ic2VydmVTeW1ib2wiLCAib25Db250ZW50T2JzZXJ2ZSQxIiwgInVud3JhcEZyb21RdWVyeSIsICJvYnNlcnZlQ29udGVudEJveCIsICJjYWxsYmFja3MiLCAib2JzZXJ2ZUJvcmRlckJveCIsICJvYnNlcnZlQXR0cmlidXRlIiwgImF0dHJpYnV0ZSIsICJvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvciIsICJhdHRyaWJ1dGVMaXN0IiwgInMiLCAibXV0YXRpb25MaXN0IiwgIm11dGF0aW9uIiwgImFkZGVkTm9kZXMiLCAicmVtb3ZlZE5vZGVzIiwgIm9ic2VydmVCeVNlbGVjdG9yIiwgIm11dCIsICJvYnMiLCAidW53cmFwTm9kZXNCeVNlbGVjdG9yIiwgIm5vZGVzIiwgIiRub2RlcyIsICJvYlJlZiIsICJoYW5kbGVNdXRhdGlvbiIsICJoYW5kbGVDb21lIiwgImhhbmRsZU91dENvbWUiLCAiaGFuZGxlRm9jdXNDbGljayIsICJmYWN0b3JzIiwgInNlbGVjdGVkIiwgImluaXRWaXNpYmlsaXR5IiwgIldhdnlTaGFwZWRDaXJjbGUiLCAic3RlcHMiLCAiYW1wbGl0dWRlIiwgImZyZXEiLCAicG9pbnRzIiwgImFuZ2xlIiwgInN0ZXAiLCAidmFyaWFudCIsICJmdW5jIiwgInN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXQiLCAiY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50IiwgImNzcyIsICJPV05FUiIsICJzdHlsZUVsZW1lbnQiLCAic2V0U3R5bGVVUkwiLCAibGF5ZXIiLCAic2V0U3R5bGVSdWxlcyIsICJzZXRTdHlsZVJ1bGUiLCAiZ2V0U3R5bGVMYXllciIsICJsYXllck5hbWUiLCAic2hlZXQiLCAibGF5ZXJSdWxlSW5kZXgiLCAibGF5ZXJSdWxlIiwgInN0eWxlSWRDb3VudGVyIiwgImlzU2hhZG93Um9vdCIsICJpc0RvY3VtZW50IiwgImlzRWxlbWVudCQxIiwgImVzY2FwZUNTU0lkZW50aWZpZXIiLCAiY2hhciIsICJjcmVhdGVTdHlsZUlkIiwgImpvaW5TY29wZWRTZWxlY3RvciIsICJzY29wZSIsICJmaW5kU3R5bGVSdWxlIiwgImZ1bGxTZWxlY3RvciIsICJydWxlcyIsICJleHBlY3RlZCIsICJyZXF1ZXN0ZWQiLCAiYWN0dWFsIiwgImdldFN0eWxlUnVsZSIsICJiYXNpcyIsICJiYXNpc0VsZW1lbnQiLCAic3R5bGVJZCIsICJzdHlsZUVsZW1lbnRHbG9iYWwiLCAicnVsZUlkIiwgImhhc1R5cGVkT00iLCAiaXNTdHlsZVZhbHVlIiwgInZhbCIsICJpc1VuaXRWYWx1ZSIsICJzZXRQcm9wZXJ0eUlmTm90RXF1YWwiLCAic3R5bGVSZWYiLCAia2ViYWIiLCAiaW1wb3J0YW5jZSIsICJzZXRTdHlsZVByb3BlcnR5VHlwZWQiLCAic3R5bGVNYXBSZWYiLCAic2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrIiwgIm5ld1ZhbCIsICJtYXliZU51bSIsICJwcm9taXNlT3JEaXJlY3QiLCAiYmxvYlVSTE1hcCIsICJjYWNoZU1hcCIsICJmZXRjaEFuZENhY2hlIiwgImJ1cmwiLCAicHJvbWlzZWQiLCAiYmxvYiIsICJjYWNoZUNvbnRlbnRNYXAiLCAiY2FjaGVCbG9iQ29udGVudE1hcCIsICJmZXRjaEFzSW5saW5lIiwgImFkb3B0ZWRTZWxlY3Rvck1hcCIsICJhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAiLCAiYWRvcHRlZExheWVyTWFwIiwgImFkb3B0ZWRTaGFkb3dMYXllck1hcCIsICJnZXRBZG9wdGVkU3R5bGVSdWxlIiwgInRhcmdldEFkb3B0ZWRTaGVldHMiLCAic2VsZWN0b3JLZXkiLCAic2hhZG93TWFwIiwgInNoYWRvd0xheWVyTWFwIiwgImxheWVySW5kZXgiLCAibmV3UnVsZSIsICJydWxlSW5kZXgiLCAic2V0U3R5bGVQcm9wZXJ0eSIsICJzZXRTdHlsZUluUnVsZSIsICJoYXNoIiwgInN0cmluZyIsICJoYXNoQnVmZmVyIiwgImxvYWRTdHlsZVNoZWV0IiwgImlubGluZSIsICJpbnRlZ3JpdHkiLCAibG9hZCIsICJlcnJvciIsICJsb2FkQmxvYlN0eWxlIiwgImxvYWRJbmxpbmVTdHlsZSIsICJyb290RWxlbWVudCIsICJQTEFDRSIsICJzZXRQcm9wZXJ0eSIsICJwcmVsb2FkU3R5bGUiLCAic3R5bGVzIiwgImxvYWRBc0Fkb3B0ZWQiLCAiYWRvcHRlZE1hcCIsICJhZG9wdGVkQmxvYk1hcCIsICJhcHBseUFkb3B0ZWRTdHlsZVRleHQiLCAiY3NzVGV4dCIsICJtZXNzYWdlIiwgImNhY2hlZCIsICJsYXllcldyYXBwZWQiLCAicmVtb3ZlQWRvcHRlZCIsICJzaGVldHMiLCAiaWR4IiwgInBhcnNlT3JpZ2luIiwgIm9yaWdpbiIsICJ2YWx1ZXMiLCAicGFyc2VMZW5ndGgiLCAiZ2V0VHJhbnNmb3JtIiwgImdldFRyYW5zZm9ybU9yaWdpbiIsICJjc3NPcmlnaW4iLCAiZ2V0UHJvcGVydHlWYWx1ZSIsICJzcmMiLCAiZ2V0RWxlbWVudFpvb20iLCAiY3VycmVudEVsZW1lbnQiLCAiY3VycmVudENTU1pvb20iLCAiZ2V0UHhWYWx1ZSIsICJnZXRQYWRkaW5nIiwgImF4aXMiLCAiYm91bmRCZWhhdmlvcnMiLCAiYmluZEJlaGF2aW9yIiwgImJlaFNldCIsICJiZWhhdmlvciIsICJyZWZsZWN0QmVoYXZpb3JzIiwgImJlaGF2aW9ycyIsICJuYW1lZFN0b3JlTWFwc1N5bWJvbCIsICJuYW1lZFN0b3JlTWFwcyIsICJnZXRTdG9yZXNPZkVsZW1lbnQiLCAibWFwIiwgIkUiLCAibSIsICJpc1dlYWtDb21wYXRpYmxlIiwgImJpbmRTdG9yZSIsICJvYmoiLCAid2Vha01hcCIsICJyZWZsZWN0U3RvcmVzIiwgInN0b3JlcyIsICJyZWZsZWN0TWl4aW5zIiwgIm1peGlucyIsICJtaXhpblNldCIsICJib3VuZE1peGluU2V0IiwgImJpbmRNaXhpbnMiLCAiZ2V0RWxlbWVudFJlbGF0ZWQiLCAibWl4aW4iLCAibWl4U2V0IiwgIndlbCIsICJtaXhpbkVsZW1lbnRzIiwgImJvdW5kTWl4aW5TZXRTeW1ib2wiLCAibWl4aW5FbGVtZW50c1N5bWJvbCIsICJtaXhpblJlZ2lzdHJ5U3ltYm9sIiwgIm1peGluUmVnaXN0cnkiLCAibWl4aW5OYW1lc3BhY2VTeW1ib2wiLCAibWl4aW5OYW1lc3BhY2UiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzIiwgIm5hbWVzIiwgInJvb3RzIiwgImFkZFJvb3QiLCAidXBkYXRlQWxsTWl4aW5zIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCIsICJlbGVtZW50cyIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzIiwgIm5hbWVSZWdpc3RyeUYiLCAia2V5IiwgInJlZ2lzdGVyTWl4aW4iLCAiRE9NTWl4aW4iLCAid0VsZW1lbnQiLCAid1NlbGYiLCAicmVsYXRlZCIsICJoYW5kbGVIaWRkZW4iLCAiXyIsICJ2aXNpYmxlIiwgIiRyZWYiLCAiaXNWaXNpYmxlIiwgImhhbmRsZVByb3BlcnR5IiwgInByb3AiLCAiaGFuZGxlRGF0YXNldCIsICJkYXRhc2V0UmVmIiwgImRlbGV0ZVN0eWxlUHJvcGVydHkiLCAiaGFuZGxlU3R5bGVDaGFuZ2UiLCAiaGFuZGxlQXR0cmlidXRlIiwgImZpIiwgImlyIiwgImpsIiwgImJpIiwgIk1yIiwgIlYiLCAieGkiLCAid2kiLCAiQ3IiLCAieG4iLCAib2UiLCAia2kiLCAidmUiLCAiUGkiLCAiZ2UiLCAiT2UiLCAiSW4iLCAidSIsICJXaSIsICJCbiIsICJBZSIsICJ6dCIsICJzZSIsICJXIiwgIkJpIiwgIkFyIiwgImt0IiwgInpyIiwgIkppIiwgIlRlIiwgIktpIiwgIk5lIiwgIiQiLCAibmEiLCAicmEiLCAiUSIsICJpYSIsICJ6ZSIsICJhYSIsICJ5dCIsICJrciIsICJ3biIsICJvYSIsICJTbiIsICJzYSIsICJsYSIsICJ1YSIsICJjYSIsICJqdSIsICJoYSIsICJ5ciIsICJwYSIsICJmYSIsICJMIiwgIm1hIiwgInZhIiwgImdhIiwgInlhIiwgIlByIiwgImJhIiwgInhhIiwgIndhIiwgIlh0IiwgIlB0IiwgImxlIiwgIkQiLCAiZWUiLCAiU2EiLCAiV3IiLCAiQmUiLCAiRWEiLCAiamEiLCAiRW4iLCAiTWEiLCAidHQiLCAibnQiLCAiQ2EiLCAiVmEiLCAiRWUiLCAiTGEiLCAia2UiLCAiQWEiLCAiYnQiLCAiUnIiLCAiam4iLCAiTmEiLCAiTW4iLCAiVGEiLCAiemEiLCAia2EiLCAiUGEiLCAiWW4iLCAiV2EiLCAiYnIiLCAiUmEiLCAiJGEiLCAiQSIsICJGYSIsICJxYSIsICJPYSIsICJIYSIsICIkciIsICJJYSIsICJCYSIsICJYYSIsICJZdCIsICJXdCIsICJ1ZSIsICJVIiwgInRlIiwgIllhIiwgIkZyIiwgIlhlIiwgIl9hIiwgIkRhIiwgIkNuIiwgIlVhIiwgInJ0IiwgIml0IiwgIlphIiwgIkdhIiwgImplIiwgIkphIiwgIlBlIiwgIkthIiwgInh0IiwgInFyIiwgIlZuIiwgIlFhIiwgIkxuIiwgImVvIiwgInRvIiwgIm5vIiwgInJvIiwgIl9uIiwgImlvIiwgInhyIiwgImFvIiwgIm9vIiwgIk4iLCAic28iLCAibG8iLCAidW8iLCAiY28iLCAiT3IiLCAiaG8iLCAicG8iLCAiZm8iLCAiX3QiLCAiUnQiLCAiY2UiLCAiWiIsICJuZSIsICJtbyIsICJIciIsICJZZSIsICJ2byIsICJnbyIsICJBbiIsICJ5byIsICJhdCIsICJvdCIsICJibyIsICJ4byIsICJNZSIsICJ3byIsICJXZSIsICJTbyIsICJ3dCIsICJJciIsICJObiIsICJFbyIsICJUbiIsICJqbyIsICJNbyIsICJDbyIsICJWbyIsICJEbiIsICJMbyIsICJBbyIsICJObyIsICJUIiwgIlRvIiwgInpvIiwgImtvIiwgIlBvIiwgIkJyIiwgIldvIiwgIlJvIiwgIiRvIiwgIkR0IiwgIiR0IiwgImRlIiwgIkciLCAicmUiLCAiRm8iLCAiWHIiLCAiX2UiLCAicW8iLCAiT28iLCAiem4iLCAiSG8iLCAic3QiLCAibHQiLCAiSW8iLCAiQm8iLCAiQ2UiLCAiWG8iLCAiUmUiLCAiWW8iLCAiU3QiLCAiWXIiLCAia24iLCAiX28iLCAiUG4iLCAiRG8iLCAiVW8iLCAiWm8iLCAiR28iLCAiVW4iLCAiSm8iLCAiU3IiLCAiS28iLCAiUW8iLCAieiIsICJlcyIsICJ0cyIsICJucyIsICJycyIsICJfciIsICJpcyIsICJhcyIsICJvcyIsICJVdCIsICJGdCIsICJoZSIsICJKIiwgImllIiwgInNzIiwgIkRyIiwgIkRlIiwgImxzIiwgInVzIiwgIlduIiwgInV0IiwgImN0IiwgImRzIiwgImhzIiwgIlZlIiwgInBzIiwgIiRlIiwgImZzIiwgIkV0IiwgIlVyIiwgIlJuIiwgIm1zIiwgIiRuIiwgInZzIiwgImdzIiwgInlzIiwgImJzIiwgIlpuIiwgInhzIiwgIkVyIiwgIndzIiwgIlpyIiwgIkdyIiwgIkpyIiwgIlNzIiwgIkVzIiwgInYiLCAianMiLCAiTXMiLCAiQ3MiLCAiVnMiLCAiS3IiLCAiTHMiLCAiQXMiLCAiTnMiLCAiWnQiLCAicXQiLCAicGUiLCAiSyIsICJhZSIsICJUcyIsICJRciIsICJSIiwgInpzIiwgImtzIiwgIkZuIiwgIlBzIiwgImR0IiwgImh0IiwgIldzIiwgIlJzIiwgIkxlIiwgIiRzIiwgIkZlIiwgIkZzIiwgImp0IiwgImVpIiwgInFuIiwgInFzIiwgIk9uIiwgIk9zIiwgIkhzIiwgIklzIiwgIkJzIiwgIm1lIiwgIkd0IiwgIlVlIiwgIkp0IiwgIkt0IiwgIlhzIiwgIk10IiwgIkduIiwgInEiLCAidGkiLCAiWXMiLCAiX3MiLCAiZyIsICJEcyIsICJRdCIsICJaZSIsICJlbiIsICJ0biIsICJVcyIsICJDdCIsICJ4IiwgIkpuIiwgIk8iLCAibmkiLCAiWnMiLCAiR3MiLCAiSnMiLCAibm4iLCAiR2UiLCAicm4iLCAiYW4iLCAiS3MiLCAiVnQiLCAidyIsICJLbiIsICJIIiwgInJpIiwgIlFzIiwgInRsIiwgIm9uIiwgIkplIiwgInNuIiwgImxuIiwgIm5sIiwgIkx0IiwgIlMiLCAiUW4iLCAiSSIsICJpaSIsICJybCIsICJpbCIsICJhbCIsICJ1biIsICJLZSIsICJjbiIsICJkbiIsICJvbCIsICJBdCIsICJlciIsICJCIiwgImFpIiwgInNsIiwgImxsIiwgInVsIiwgImhuIiwgIlFlIiwgInBuIiwgImZuIiwgImNsIiwgIk50IiwgImoiLCAidHIiLCAiWCIsICJvaSIsICJkbCIsICJobCIsICJtbiIsICJldCIsICJ2biIsICJnbiIsICJmbCIsICJUdCIsICJNIiwgIm5yIiwgIlkiLCAic2kiLCAibWwiLCAibyIsICJoIiwgImQiLCAicCIsICJmIiwgInZsIiwgImdsIiwgImp1bmN0aW9uVG9Cb3giLCAiSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyIsICJKVU5DVElPTl9EUkFHX0VWRU5UUyIsICJKVU5DVElPTl9SRVNJWkVfRVZFTlRTIiwgIm1peGluRGlzcG9zZXJzU3ltYm9sIiwgIm1peGluRGlzcG9zZXJzIiwgInB1c2hEaXNwb3NhYmxlIiwgIm1peGluTmFtZSIsICJydW5EaXNwb3NlcnMiLCAicGFyc2VQeFZhciIsICJxdWVyeUhhbmRsZSIsICJhdHRyIiwgImZhbGxiYWNrIiwgInNlbCIsICJmb3VuZCIsICJKdW5jdGlvblNlbGVjdE1peGluIiwgIndFbCIsICJvdmVybGF5IiwgImxvY2FsUG9pbnQiLCAiYXBwbHlPdmVybGF5IiwgIm9uRG93biIsICJvbk1vdmUiLCAiZW5kIiwgIm9uVXAiLCAib25DYW5jZWwiLCAiSnVuY3Rpb25EcmFnTWl4aW4iLCAicHJldmlvdXNUcmFuc2Zvcm0iLCAiaGFuZGxlIiwgImRyYWdnaW5nIiwgInN0YXJ0WCIsICJzdGFydFkiLCAiYmFzZVgiLCAiYmFzZVkiLCAiZHgiLCAiZHkiLCAibngiLCAibnkiLCAiSnVuY3Rpb25SZXNpemVNaXhpbiIsICJyZXNpemluZyIsICJzeCIsICJzeSIsICJzdyIsICJzaCIsICJtaW5XIiwgIm1pbkgiLCAibnciLCAibmgiXQp9Cg==

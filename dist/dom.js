import { $avoidTrigger as Te, camelToKebab as N, cvt_cs_to_os as kn, hasValue as y, isArrayOrIterable as Pi, isVal as Wi, isValueUnit as Ri, kebabToCamel as Qn, normalizeGridLayout as $i, normalizePrimitive as bn, resolveLocalPointToGridCell as Fi, tryStringAsNumber as T } from "@fest-lib/core";
var Oi = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Pn = globalThis[Oi] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Pn.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      Pn.add(t);
    }
});
var gs = () => {
}, qi = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, ys = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, Hi = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), Wn = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(Hi()), 0), Ii = (e) => e?.offsetParent ?? e?.host, bs = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const i = Ii(n);
    if (i && i instanceof HTMLHtmlElement) break;
    (n = i) && t.push(n);
  }
  return t;
}, xs = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, Bi = () => {
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
}, ws = (e = Bi()) => (t) => e.shedule(t), Ss = typeof document < "u" ? document?.documentElement : null, Es = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, i]) => {
      const r = e.getAttribute(n);
      i == null ? e.removeAttribute(n) : i != r && e.setAttribute(n, r == "" ? i ?? r : r ?? i);
    });
}, js = (e, t = {}) => Array.from(Object.entries(t)).map(([n, i]) => {
  i == null ? e.removeAttribute(n) : e.setAttribute(n, i ?? e.getAttribute(n));
}), _i = /* @__PURE__ */ new Map(), Ms = (e, t = 1e3, ...n) => {
  const i = {
    running: !0,
    cancel: () => {
      i.running = !1;
    }
  };
  return Wn(async () => {
    if (!(!e || typeof e != "function")) {
      for (; i.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((r) => setTimeout(r, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((r) => Wn(r, t)), new Promise((r) => setTimeout(r, t))]);
      i.cancel = () => {
      };
    }
  }, { timeout: t }), i?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    _i.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var tt = /* @__PURE__ */ Symbol("@border-box-width"), nt = /* @__PURE__ */ Symbol("@border-box-height"), it = /* @__PURE__ */ Symbol("@content-box-width"), rt = /* @__PURE__ */ Symbol("@content-box-height"), Rn = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap(), Cs = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !$n.has(e)) {
    e[it] = e.clientWidth, e[rt] = e.clientHeight;
    const n = new ResizeObserver((i) => {
      for (const r of i) if (r.contentBoxSize) {
        const l = r.contentBoxSize[0];
        l && (e[it] = Math.min(l.inlineSize, e.clientWidth), e[rt] = Math.min(l.blockSize, e.clientHeight), t?.(e));
      }
    });
    $n.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, Vs = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Rn.has(e)) {
    e[tt] = e.offsetWidth, e[nt] = e.offsetHeight;
    const n = new ResizeObserver((i) => {
      for (const r of i) if (r.borderBoxSize) {
        const l = r.borderBoxSize[0];
        l && (e[tt] = Math.min(l.inlineSize, e.offsetWidth), e[nt] = Math.min(l.blockSize, e.offsetHeight), t?.(e));
      }
    });
    Rn.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, As = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), Ls = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, Ns = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, Ts = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, zs = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, ks = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", Ps = `^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, Ws = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), i, r = ""; e && (i = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    i[1] && (n = t(i[1])), i[2] && (n.id = i[2]), i[3] && (r += " " + i[3]), i[4] && n.setAttribute(i[4], i[7] || ""), e = e.slice(i[0].length);
  return r && (n.className = r.slice(1)), n;
}, Rs = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, $s = (e, t) => e.querySelector(t) ?? (e.matches(t) ? e : null), Mt = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, ei = {};
function M(e, t, n, i = ei) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
function Fn(e, t, n, i = ei) {
  e?.removeEventListener?.(t, n, i);
}
var at = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, i]) => Array.isArray(i) ? M(e, n, ...i) : M(e, n, i))), Fs = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([i, r]) => ((Pi(r) ? [...r] : r) ?? [])?.map?.((l) => M(e, i, l)));
  }
}, Os = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, i]) => Array.isArray(i) ? Fn(e, n, ...i) : Fn(e, n, i))), qs = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const i of n) if (i instanceof HTMLElement || i instanceof Element) return i;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, Hs = (e, t, n) => {
  if (t == null || !(t instanceof Node) && t?.element == null) return !1;
  if (e == t || (e?.element ?? e) == (t?.element ?? t)) return !0;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const i = n.composedPath(), r = e?.element ?? e, l = t?.element ?? t;
    if (i.includes(r) && i.includes(l)) {
      const a = i.indexOf(r), o = i.indexOf(l);
      if (o >= 0 && a >= 0 && o < a) return !0;
    }
  }
  return !!(e?.contains?.(t?.element ?? t) || e?.getRootNode({ composed: !0 })?.host == (t?.element ?? t));
}, Kt = (e, t, n) => {
  if (n?.composedPath && typeof n.composedPath == "function") {
    const o = n.composedPath();
    for (const d of o) if ((d instanceof HTMLElement || d instanceof Element) && d.matches?.(t))
      return d;
  }
  const i = e?.matches?.(t) ? e : null, r = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host, l = r?.matches?.(t) ? r : null, a = e?.closest?.(t) ?? i?.closest?.(t) ?? l?.closest?.(t) ?? null;
  return i ?? a ?? l;
}, Is = (e, t) => !!Kt(e, t), Bs = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let i = document.activeElement;
  for (; i && i.shadowRoot && i.shadowRoot.activeElement; ) i = i.shadowRoot.activeElement;
  const r = i === e || Mt(i, e), l = e.matches(":hover");
  if (!r && !l && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!Kt(e, t);
      {
        const a = r ? i : e.querySelector(":hover") || e, o = !!Kt(a, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || o;
      }
    } else if (t instanceof HTMLElement)
      return n === "parent" ? Mt(e, t) || !1 : Mt(t, e) || !1;
  }
  return !0;
}, _s = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, Yi = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Di = globalThis[Yi] ??= /* @__PURE__ */ new WeakMap(), Xi = (e = document.documentElement) => Di.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), Ys = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), Ds = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : Xi(e)) || 1, Qt = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, le = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", i = parseInt(String(n).trim(), 10);
    if (Number.isFinite(i)) return i;
  } catch {
  }
  return 0;
}, Xs = (e, t = null) => {
  const n = Qt(e) || 1, i = e?.getBoundingClientRect?.(), r = {
    left: i?.left / n,
    right: i?.right / n,
    top: i?.top / n,
    bottom: i?.bottom / n,
    width: i?.width / n,
    height: i?.height / n
  }, l = t ?? (le(e) || 0), a = typeof window < "u" ? window.visualViewport : null, o = [((a?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((a?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [d, u] = kn([r.left, r.top], o, l), [h, f] = kn([r.right, r.bottom], o, l), [c, s] = l == 0 || l == 3 ? [d, h] : [h, d], [p, m] = l == 0 || l == 1 ? [u, f] : [f, u], [g, ki] = l % 2 ? [r.height, r.width] : [r.width, r.height];
  return {
    left: c,
    top: p,
    right: s,
    bottom: m,
    width: g,
    height: ki
  };
}, Us = (e, t = null) => (t ?? le(e)) % 2 ? e[nt] ?? e?.clientHeight : e[tt] ?? e?.clientWidth, Zs = (e, t = null) => (t ?? le(e)) % 2 ? e[tt] ?? e?.clientWidth : e[nt] ?? e?.clientHeight, Gs = (e, t = null) => (t ?? le(e)) % 2 ? e[rt] ?? e?.clientHeight : e[it] ?? e?.clientWidth, Js = (e, t = null) => (t ?? le(e)) % 2 ? e[it] ?? e?.clientWidth : e[rt] ?? e?.clientHeight, Ui = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), ti = () => {
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
}, en = ti(), Ks = [[":root, :host, :scope", en]], Zi = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, Gi = (e) => {
  const t = document.documentElement;
  Object.assign(en, ti()), Object.entries(en).forEach(([n, i]) => {
    const r = t?.style?.getPropertyValue(n);
    (!r || r != i) && t?.style?.setProperty?.(n, i || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, Ji = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, Ct = { passive: !0 }, Ki = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      Gi(), e(), t = !1;
    }), t = !0);
  }, i = [];
  return i.push(M(navigator?.virtualKeyboard, "geometrychange", n, Ct)), i.push(M(window?.visualViewport, "scroll", n, Ct)), i.push(M(window?.visualViewport, "resize", n, Ct)), i.push(M(screen?.orientation, "change", n)), i.push(M(window, "resize", n)), i.push(M(document?.documentElement, "fullscreenchange", n)), i.push(M(document, "DOMContentLoaded", n)), i.push(M(matchMedia("(orientation: portrait)"), "change", n)), i.push(M(matchMedia("(orientation: landscape)"), "change", n)), n(), Ui(() => n(), 100), () => i.forEach((r) => r());
}, Qs = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), Ki(() => {
      const t = Zi?.[Ji()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
}, te = new OffscreenCanvas(1, 1).getContext("2d"), ni = (e, t) => {
  const n = getComputedStyle(e, "");
  if (t && n) {
    const i = n.getPropertyValue("font-weight") || "normal", r = n.getPropertyValue("font-size") || "16px", l = n.getPropertyValue("font-family") || "Times New Roman", a = n.getPropertyValue("font-stretch") || "normal";
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
      t.font = `${i} ${r} ${l}`;
    } catch {
    }
  }
}, Qi = (e, t) => {
  if (te) {
    ni(t, te);
    try {
      return te.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, el = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return Qi(t, e);
}, er = (e, t) => {
  const n = e?.value || "";
  if (te) {
    ni(e, te);
    let i = 0;
    for (let r = 0; r < n.length; r++) {
      if (i = te.measureText(n.slice(0, r))?.width, i == null) return n.length;
      if (i != null && i >= t[0]) return Math.max(r - 1, 0);
    }
  }
  return n.length;
}, tl = (e, t) => {
  const n = e.getBoundingClientRect(), i = [t[0] - n.left / Qt(), t[1] - n.top / Qt()];
  return er(e, i);
}, tr = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), i = parseInt(e.getAttribute("data-grid-rows") || "", 10), r = $i(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : r[0], Number.isFinite(i) && i > 0 ? i : r[1]];
}, nl = (e, t, n, i = "floor") => {
  if (!e) return [0, 0];
  const r = e.getBoundingClientRect?.();
  if (!r) return [0, 0];
  const l = tr(e, n?.layout), a = le(e), o = globalThis.getComputedStyle?.(e), d = parseFloat(o?.paddingLeft) || 0, u = parseFloat(o?.paddingTop) || 0, h = parseFloat(o?.paddingRight) || 0, f = parseFloat(o?.paddingBottom) || 0, c = Math.max(1, (r.width || e.clientWidth || 1) - d - h), s = Math.max(1, (r.height || e.clientHeight || 1) - u - f), p = [(t?.[0] || 0) - r.left - d, (t?.[1] || 0) - r.top - u];
  return Fi(p, [c, s], l, a, {
    mode: i,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, nr = async (e) => {
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
        duration: qi() ? 100 : 80,
        easing: "linear",
        delay: 0
      });
      let i = !1;
      const r = () => {
        i || (i = !0, l?.forEach?.((a) => a?.()), n.currentTime = 1, n.finish(), t?.());
      }, l = at(e, {
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
      const { resolve: n, reject: i, promise: r } = Promise.withResolvers(), l = requestAnimationFrame(n);
      let a = !1;
      const o = () => {
        a || (a = !0, d?.forEach?.((u) => u?.()), cancelAnimationFrame(l), n(performance.now()), t?.());
      }, d = at(e, {
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
}, ir = async (e) => {
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
        i || (i = !0, l?.forEach?.((a) => a?.()), n.currentTime = 1, n.finish(), t?.());
      }, l = at(e, { "u2-before-show": [r, {
        once: !0,
        passive: !0
      }] });
      await n.finished, r?.();
    } else {
      const { resolve: n, reject: i, promise: r } = Promise.withResolvers(), l = requestAnimationFrame(n);
      let a = !1;
      const o = () => {
        a || (a = !0, d?.forEach?.((u) => u?.()), cancelAnimationFrame(l), n(performance.now()), t?.());
      }, d = at(e, {
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
}, rr = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), ue = globalThis[rr] ??= /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), de = globalThis[ar] ??= /* @__PURE__ */ new WeakMap(), ze = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), il = (e, t) => {
  if (!de.has(e = ze(e))) {
    const n = [], i = new ResizeObserver((r) => {
      for (const l of r) if (l.contentBoxSize) {
        const a = l.contentBoxSize[0];
        a && n.forEach((o) => o?.(a, i));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, i), de.set(e, n), (e?.element ?? e) instanceof Node && i.observe(e?.element ?? e, { box: "content-box" });
  }
  return de.get(e)?.push?.(t), { disconnect: () => de.get(e)?.splice?.(de.get(e)?.indexOf(t) || -1, 1) };
}, rl = (e, t) => {
  if (!ue.has(e = ze(e))) {
    const n = [], i = new ResizeObserver((r) => {
      for (const l of r) if (l.borderBoxSize) {
        const a = l.borderBoxSize[0];
        a && n.forEach((o) => o?.(a, i));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, i), ue.set(e, n), (e?.element ?? e) instanceof Node && i.observe(e?.element ?? e, { box: "border-box" });
  }
  return ue.get(e)?.push?.(t), { disconnect: () => ue.get(e)?.splice?.(ue.get(e)?.indexOf(t) || -1, 1) };
}, al = (e, t, n) => {
  if (typeof e?.selector == "string") return xn(e, e?.selector, t, n);
  const i = new Set((t.split(",") || [t]).map((l) => l.trim())), r = new MutationObserver((l, a) => {
    for (const o of l) o.attributeName && i.has(o.attributeName) && n(o, a);
  });
  return (e?.element ?? e) instanceof Node && r.observe(e = ze(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...i]
  }), i.forEach((l) => n({
    target: e,
    type: "attributes",
    attributeName: l,
    oldValue: e?.getAttribute?.(l)
  }, r)), r;
}, xn = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), l = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], h = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), h.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((c) => {
          i({
            target: f,
            type: "attributes",
            attributeName: c,
            oldValue: f?.getAttribute?.(c)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return l.observe(e = ze(e), {
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
  }, l))), l;
}, or = (e, t = "*", n = (i, r) => {
}) => {
  const i = (c) => {
    const s = Array.from(c || []) || [];
    return s.push(...Array.from(c || []).flatMap((p) => Array.from(p?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((p) => p?.matches?.(t));
  };
  let r = null;
  const l = (c) => {
    const s = r?.deref?.(), p = i(c.addedNodes), m = i(c.removedNodes);
    (p.length > 0 || m.length > 0) && n?.({
      type: c.type,
      target: c.target,
      attributeName: c.attributeName,
      attributeNamespace: c.attributeNamespace,
      nextSibling: c.nextSibling,
      oldValue: c.oldValue,
      previousSibling: c.previousSibling,
      addedNodes: p,
      removedNodes: m
    }, s);
  }, a = (c) => {
    l({
      addedNodes: [c?.target].filter((s) => !!s),
      removedNodes: [c?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
    });
  }, o = (c) => {
    l({
      addedNodes: [c?.relatedTarget].filter((s) => !!s),
      removedNodes: [c?.target].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
    });
  }, d = (c) => {
    l({
      addedNodes: [c?.target].filter((s) => !!s),
      removedNodes: [c?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
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
  const h = new MutationObserver((c, s) => {
    for (const p of c) p.type == "childList" && l(p);
  });
  r = new WeakRef(h), (e?.element ?? e) instanceof Node && h.observe(e = ze(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, h), h;
}, ol = async (e = document.body) => {
  xn(e, "*", "data-hidden", (t, n) => {
    if (t.attributeName == "data-hidden") {
      const i = t.target;
      i.getAttribute("data-hidden") !== t.oldValue && Promise?.try?.(i.getAttribute("data-hidden") != null ? ir : nr, i, n)?.catch?.(console.warn.bind(console));
    }
  });
}, sl = (e = 100, t = 0.05, n = 8) => {
  const i = [];
  for (let o = 0; o < e; o++) i.push(o / e);
  const r = (o) => `calc(${o}rad * pi * 2)`, l = (o) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${r(o)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, a = (o) => [`calc(calc(0.5 + calc(cos(${r(o)}) * calc(0.5 - ${l(o)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${r(o)}) * calc(0.5 - ${l(o)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${i.map((o) => a(o).join(" ")).join(", ")})`
  };
}, ii = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", On = (e) => typeof e == "string" && /@import\b/i.test(e), wn = "DOM", Se = typeof document < "u" ? document.createElement("style") : null;
Se && (typeof document < "u" && document.querySelector("head")?.appendChild?.(Se), Se.dataset.owner = wn);
var qn = (e, t, n = "") => {
  e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${n && typeof n == "string" ? `layer(${n})` : ""};` : t;
}, ll = (e) => e?.map?.((t) => gr(...t)), sr = (e, t) => {
  t ||= Se?.sheet;
  let n = Array.from(t?.cssRules || []).findIndex((r) => r instanceof CSSLayerBlockRule && r?.name === e), i;
  return n === -1 && t ? i = t?.cssRules?.[n = t.insertRule(`@layer ${e} {}`)] : i = t?.cssRules?.[n], i;
}, lr = 0, Vt = (e) => typeof ShadowRoot < "u" && e instanceof ShadowRoot, Hn = (e) => typeof Document < "u" && e instanceof Document, cr = (e) => typeof Element < "u" && e instanceof Element, In = (e) => typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : Array.from(e).map((t) => `\\${t.codePointAt(0).toString(16)} `).join(""), ur = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `ux-${Date.now().toString(36)}-${(++lr).toString(36)}`, dr = (e, t) => (t = t.trim(), e ? t ? t.startsWith("::") ? `${e}${t}` : `${e} ${t}` : e : t), pr = (e, t, n, i) => {
  const r = Array.from(e?.cssRules || []), l = t.trim(), a = i.trim();
  return r.findIndex((o) => {
    if (!(o instanceof CSSStyleRule)) return !1;
    const d = o.selectorText?.trim?.() ?? "";
    return d === l ? !0 : a && d.endsWith(a) ? d.slice(0, d.length - a.length).trim() === n : !1;
  });
}, Sn = (e, t, n = "ux-query", i = null) => {
  const r = Vt(i) || Hn(i) ? i : i?.getRootNode?.() ?? (typeof document < "u" ? document : null), l = cr(i) ? i : null;
  let a = "";
  if (l?.id) a = `#${In(l.id)}`;
  else if (l) {
    let h = l.getAttribute("data-style-id");
    h || (h = ur(), l.setAttribute("data-style-id", h)), a = `[data-style-id="${In(h)}"]`;
  } else Vt(r) ? a = ":host" : Hn(r) && (a = ":root");
  let o = null;
  if (Vt(r) ? (o = r.querySelector("style[data-ux-query]"), !o && typeof document < "u" && (o = document.createElement("style"), o.setAttribute("data-ux-query", ""), r.appendChild(o))) : o = hr(), t ||= o?.sheet, !t) return;
  if (n) return Sn(e, sr(n, t), null, i);
  const d = dr(a, e);
  let u = pr(t, d, a, e);
  return u === -1 && (u = t.insertRule(`${d} {}`)), t.cssRules?.[u];
};
function hr() {
  return Se ?? null;
}
var yt = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", ne = (e) => yt && e instanceof CSSStyleValue, B = (e) => yt && e instanceof CSSUnitValue, k = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, fr = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = N(t), l = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!yt || !a) return ri(e, t, n, i);
  let o = y(n) && !(ne(n) || B(n)) ? n?.value : n;
  if (o == null)
    return a.delete?.(r), l && k(l, r, null, i), e;
  if (ne(o)) {
    const d = a.get(r);
    if (B(o) && B(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number")
    if (CSS?.number && !r.startsWith("--")) {
      const d = CSS.number(o), u = a.get(r);
      return B(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
    } else
      return k(l, r, String(o), i), e;
  if (typeof o == "string" && !ne(o)) {
    const d = T(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), h = a.get(r);
      return B(h) && h.value === u.value && h.unit === u.unit || a.set(r, u), e;
    } else
      return k(l, r, o, i), e;
  }
  return k(l, r, String(o), i), e;
}, ri = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = N(t), l = e.style;
  if (!l) return e;
  let a = y(n) && !(ne(n) || B(n)) ? n?.value : n;
  return typeof a == "string" && !ne(a) && (a = T(a) ?? a), a == null ? (k(l, r, null, i), e) : (ne(a) || typeof a == "number", k(l, r, String(a), i), e);
}, ai = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), pe = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new Map(), mr = (e) => {
  if (!e) return null;
  if (R.has(e)) return R.get(e);
  if (e instanceof Blob || e instanceof File) {
    if (pe.has(e)) return pe.get(e);
    const t = URL.createObjectURL(e);
    return pe.set(e, t), R.set(t, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const i = await n.blob(), r = URL.createObjectURL(i);
      return pe.set(i, r), R.set(e, r), R.set(r, r), r;
    });
    return R.set(e, t), t;
  }
  if (typeof e == "string") {
    const t = new Blob([e], { type: "text/css" }), n = URL.createObjectURL(t);
    return pe.set(t, n), R.set(n, n), n;
  }
  return e;
}, he = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new WeakMap(), vr = (e) => {
  if (!e) return "";
  if (he.has(e)) return he.get(e) ?? "";
  if (e instanceof Blob || e instanceof File) {
    if (ke.has(e)) return ke.get(e) ?? "";
    const t = e?.text?.()?.then?.((n) => (ke.set(e, n), n));
    return ke.set(e, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const i = await n.text();
      return he.set(e, i), i;
    });
    return he.set(e, t), t;
  }
  return typeof e == "string" && he.set(e, e), e;
}, Bn = /* @__PURE__ */ new Map(), _n = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new WeakMap(), cl = (e, t = "ux-query", n = null) => {
  if (!e || !ii()) return null;
  const i = n instanceof ShadowRoot ? n : n?.getRootNode ? n.getRootNode({ composed: !0 }) : null, r = i instanceof ShadowRoot, l = r ? i.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
  if (!l) return null;
  const a = `${t || ""}:${e}`;
  let o;
  if (r) {
    let h = _n.get(i);
    h || (h = /* @__PURE__ */ new Map(), _n.set(i, h)), o = h.get(a), o || (o = new CSSStyleSheet(), h.set(a, o), l.includes(o) || l.push(o));
  } else
    o = Bn.get(a), o || (o = new CSSStyleSheet(), Bn.set(a, o), l.includes(o) || l.push(o));
  if (t) {
    let h;
    if (r) {
      let f = Pe.get(i);
      f || (f = /* @__PURE__ */ new Map(), Pe.set(i, f)), h = f.get(t);
    } else h = Yn.get(t);
    if (!h) {
      const f = Array.from(o.cssRules || []), c = f.findIndex((s) => s instanceof CSSLayerBlockRule && s.name === t);
      if (c === -1) try {
        o.insertRule(`@layer ${t} {}`, o.cssRules.length);
        const s = o.cssRules[o.cssRules.length - 1];
        s instanceof CSSLayerBlockRule && (h = s);
      } catch {
        h = void 0;
      }
      else h = f[c];
      if (h)
        if (r) {
          let s = Pe.get(i);
          s || (s = /* @__PURE__ */ new Map(), Pe.set(i, s)), s.set(t, h);
        } else Yn.set(t, h);
    }
    if (h) {
      let f = Array.from(h.cssRules || []).findIndex((c) => c instanceof CSSStyleRule && c.selectorText?.trim?.() === e?.trim?.());
      if (f === -1) try {
        f = h.insertRule(`${e} {}`, h.cssRules.length);
      } catch {
        return null;
      }
      return h.cssRules[f];
    }
  }
  let d = Array.from(o.cssRules || []).findIndex((h) => h instanceof CSSStyleRule && h.selectorText?.trim?.() === e?.trim?.());
  if (d === -1) try {
    d = o.insertRule(`${e} {}`, o.cssRules.length);
  } catch {
    return null;
  }
  const u = o.cssRules[d];
  return u instanceof CSSStyleRule ? u : null;
}, bt = (e, t, n, i = "") => yt ? fr(e, t, n, i) : ri(e, t, n, i), ul = (e, t, n) => bt(Sn(e), t, n), gr = (e, t) => {
  const n = Sn(e);
  return Object.entries(t).forEach(([i, r]) => bt(n, i, r)), n;
}, dl = async (e) => {
  const t = await crypto?.subtle?.digest("SHA-256", typeof e == "string" ? new TextEncoder().encode(e) : e instanceof ArrayBuffer ? e : await e?.arrayBuffer?.());
  return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
}, oi = (e, t, n = "", i) => {
  const r = mr(e), l = typeof e == "string" && URL.canParse(e) ? e : r;
  return t?.[0] && (t[0].fetchPriority = "high"), t && l && typeof l == "string" && qn(t, l, n), t?.[0] && (!URL.canParse(e) || i) && t?.[0] instanceof HTMLLinkElement, ai(r, (a) => {
    t?.[0] && a && (qn(t, a, n), t?.[0].setAttribute("loaded", ""));
  })?.catch?.((a) => {
    console.warn("Failed to load style sheet:", a);
  });
}, yr = (e) => {
  const t = typeof document < "u" ? document.createElement("link") : null;
  return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
    rel: "stylesheet",
    type: "text/css",
    crossOrigin: "same-origin"
  }), t.dataset.owner = wn, oi(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, fe = (e, t = typeof document < "u" ? document?.head : null, n = "") => {
  const i = t?.querySelector?.("head") ?? t;
  if (typeof HTMLHeadElement < "u" && i instanceof HTMLHeadElement) return yr(e);
  const r = typeof document < "u" ? document.createElement("style") : null;
  return r ? (r.dataset.owner = wn, oi(e, [r, "innerHTML"], n), i?.prepend?.(r), r) : null;
}, pl = (e, t, n, i = "") => bt(e, t, n, i), hl = (e) => br(e, ""), z = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new WeakMap(), Dn = (e, t) => {
  if (!e || !t) return !1;
  try {
    return e.replaceSync(t), !0;
  } catch (n) {
    const i = String(n?.message || "").toLowerCase();
    return i.includes("@import rules are not allowed") || i.includes("@import") && i.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", n), !1;
  }
}, br = (e, t = null) => {
  if (!ii())
    return typeof e == "string" && fe(e, void 0, t || ""), null;
  if (typeof e == "string" && On(e))
    return fe(e, void 0, t || ""), null;
  if (typeof e == "string" && z?.has?.(e)) {
    const i = z.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(i) && document.adoptedStyleSheets.push(i), i;
  }
  if ((e instanceof Blob || e instanceof File) && me?.has?.(e)) {
    const i = me.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(i) && document.adoptedStyleSheets.push(i), i;
  }
  if (!e) return null;
  const n = typeof e == "string" ? z.getOrInsertComputed(e, (i) => new CSSStyleSheet()) : me.getOrInsertComputed(e, (i) => new CSSStyleSheet());
  if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), typeof e == "string" && !URL.canParse(e)) {
    const i = t ? `@layer ${t} { ${e} }` : e;
    return z.set(e, n), Dn(n, i) || (At(n), z.delete(e), fe(e)), n;
  } else ai(vr(e), (i) => {
    if (z.set(i, n), i) {
      if (On(i))
        return At(n), z.delete(i), me.delete(e), fe(i, void 0, t || ""), n;
      const r = t ? `@layer ${t} { ${i} }` : i;
      return Dn(n, r) || (At(n), z.delete(i), me.delete(e), fe(i, void 0, t || "")), n;
    }
  });
  return n;
}, At = (e) => {
  if (!e) return !1;
  const t = typeof e == "string" ? z.get(e) : e;
  if (!t || typeof document > "u") return !1;
  const n = document.adoptedStyleSheets, i = n.indexOf(t);
  return i !== -1 ? (n.splice(i, 1), !0) : !1;
}, xr = (e, t) => {
  const n = e.split(" ");
  return new DOMPoint(Xn(n[0], () => t.clientWidth), Xn(n[1], () => t.clientHeight));
}, Xn = (e, t) => e.endsWith("%") ? parseFloat(e) / 100 * t() : parseFloat(e), fl = (e) => {
  if (e?.computedStyleMap) {
    const t = e.computedStyleMap().get("transform")?.toMatrix?.();
    if (t) return t;
  } else if (e) {
    const t = getComputedStyle(e);
    return new DOMMatrix(t?.getPropertyValue?.("transform"));
  }
  return new DOMMatrix();
}, ml = (e) => {
  const t = getComputedStyle(e)?.getPropertyValue?.("transform-origin") || "50% 50%";
  return xr(t, e);
}, ve = (e, t) => {
  if ("computedStyleMap" in e) {
    const n = e?.computedStyleMap?.()?.get(t);
    return n instanceof CSSUnitValue ? n?.value || 0 : n?.toString?.();
  }
  if (e instanceof HTMLElement) {
    const n = getComputedStyle?.(e, "");
    return parseFloat(n?.getPropertyValue?.(t)?.replace?.("px", "")) || 0;
  }
  return parseFloat((e?.style ?? e).getPropertyValue?.(t)?.replace?.("px", "")) || 0;
}, vl = (e) => {
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
}, gl = (e, t) => ve?.(e, t), yl = (e, t) => t == "inline" ? ve(e, "padding-inline-start") + ve(e, "padding-inline-end") : ve(e, "padding-block-start") + ve(e, "padding-block-end"), si = /* @__PURE__ */ new WeakMap(), wr = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), bl = (e, t) => {
  if (e) {
    if (t) {
      const n = si.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((i) => wr(e, n, i));
    }
    return e;
  }
}, Sr = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), je = globalThis[Sr] ??= /* @__PURE__ */ new Map(), Er = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, jr = (e) => (typeof e == "object" || typeof e == "function") && e != null, Mr = (e, t, n) => {
  if (!jr(e) && e != null) return e;
  let i = je.get(t);
  return i || (i = /* @__PURE__ */ new WeakMap(), je.set(t, i)), !i.has(e) && e != null && i.set(e, n), e;
}, xl = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, i] of t.entries()) Mr(e, n, i);
    return e;
  }
}, wl = (e, t) => {
  if (e) {
    if (t) {
      const n = W?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      W?.has?.(e) || W?.set?.(e, n), [...t?.values?.() || []].map((i) => Cr(e, i, n));
    }
    return e;
  }
}, Ee = (e) => ({
  storeSet: Er(je, e),
  mixinSet: W?.get?.(e),
  behaviorSet: si?.get?.(e)
}), Cr = (e, t, n) => {
  const i = new WeakRef(e);
  return n ||= W?.get?.(e), n?.has?.(t) || (n?.add?.(t), Z?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((r) => !!r).join(" ")), t?.connect?.(i, t, Ee(e))), e;
}, Vr = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), W = globalThis[Vr] ??= /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), Z = globalThis[Ar] ??= /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), Me = globalThis[Lr] ??= /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), ot = globalThis[Nr] ??= /* @__PURE__ */ new WeakMap(), li = (e, t) => {
  typeof t == "string" && (t = Me?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => Me?.get?.(a)).filter((a) => !!a)), r = W?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  Z?.has?.(t) || Z?.set?.(t, /* @__PURE__ */ new WeakSet()), W?.has?.(e) || W?.set?.(e, r);
  const l = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(l, t, Ee(e)), (i.has(t) || !Z?.get?.(t)?.has?.(e)) && (t?.connect?.(l, t, Ee(e)), n.add(ot?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), Z?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(l, t, Ee(e))));
}, tn = /* @__PURE__ */ new Set(), Tr = (e = typeof document < "u" ? document : null) => {
  if (e)
    return tn?.has?.(e) || (tn?.add?.(e), xn(e, "*", "data-mixin", (t) => nn(t.target)), or(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && nn(n);
    })), e;
}, nn = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => Me?.get?.(n)).filter((n) => !!n))].map?.((n) => li(e, n));
}, zr = (e, t) => {
  e.forEach((n) => t ? li(n, t) : nn(n));
}, kr = (e) => {
  for (const t of tn) zr(t?.querySelectorAll?.("[data-mixin]"), e);
}, Pr = new FinalizationRegistry((e) => {
  Me?.delete?.(e);
}), Wr = (e, t) => {
  if (!ot?.has?.(t)) {
    const n = e?.trim?.();
    n && (ot?.set?.(t, n), Me?.set?.(n, t), Pr?.register?.(t, n), kr(t));
  }
};
Tr(typeof document < "u" ? document : null);
var Sl = class {
  constructor(e = null) {
    e && Wr(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return je.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return Ee(e);
  }
  get elements() {
    return Z?.get?.(this);
  }
  get storage() {
    return je?.get?.(this.name || "");
  }
  get name() {
    return ot?.get?.(this);
  }
}, El = (e, t, n) => {
  const i = n;
  y(n) && (n = n.value);
  const r = (n = bn(n)) != null && n !== !1;
  return Te(i, () => {
    e instanceof HTMLInputElement ? e.hidden = !r : r ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, jl = (e, t, n) => {
  if (!(t = typeof t == "string" ? Qn(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const i = n;
  return y(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && Te(i, () => {
    n != null ? e[t] = n : delete e[t];
  }), e;
}, Ml = (e, t, n) => {
  const i = e?.dataset;
  if (!t || !e || !i) return e;
  const r = n;
  return y(n) && (n = n?.value), t = Qn(t), i?.[t] === (n = bn(n)) || (n == null || n === !1 ? delete i[t] : Te(r, () => {
    typeof n != "object" && typeof n != "function" ? i[t] = String(n) : delete i[t];
  })), e;
}, Rr = (e, t) => e.style.removeProperty(N(t)), Cl = (e, t, n) => {
  const i = e?.style;
  return !t || typeof t != "string" || !e || !i || Te(n, () => {
    Wi(n) || y(n) || Ri(n) ? bt(e, t, n) : n == null && Rr(e, t);
  }), e;
}, Vl = (e, t, n) => {
  if (!t || !e) return e;
  const i = n;
  return y(n) && (n = n.value), t = N(t), e?.getAttribute?.(t) === (n = bn(n)) || Te(i, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
}, $r = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Un = globalThis[$r] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Un.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    Un.add(t);
  }
});
var Al = typeof document < "u" ? document?.documentElement : null, Fr = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) Fr.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Or = {};
function C(e, t, n, i = Or) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
var qr = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Ll = globalThis[qr] ??= /* @__PURE__ */ new WeakMap(), Hr = () => {
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
}, Nl = Hr(), Tl = new OffscreenCanvas(1, 1).getContext("2d"), Ir = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), zl = globalThis[Ir] ??= /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), kl = globalThis[Br] ??= /* @__PURE__ */ new WeakMap(), ci = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), _r = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), l = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], h = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), h.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((c) => {
          i({
            target: f,
            type: "attributes",
            attributeName: c,
            oldValue: f?.getAttribute?.(c)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return l.observe(e = ci(e), {
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
  }, l))), l;
}, Yr = (e, t = "*", n = (i, r) => {
}) => {
  const i = (c) => {
    const s = Array.from(c || []) || [];
    return s.push(...Array.from(c || []).flatMap((p) => Array.from(p?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((p) => p?.matches?.(t));
  };
  let r = null;
  const l = (c) => {
    const s = r?.deref?.(), p = i(c.addedNodes), m = i(c.removedNodes);
    (p.length > 0 || m.length > 0) && n?.({
      type: c.type,
      target: c.target,
      attributeName: c.attributeName,
      attributeNamespace: c.attributeNamespace,
      nextSibling: c.nextSibling,
      oldValue: c.oldValue,
      previousSibling: c.previousSibling,
      addedNodes: p,
      removedNodes: m
    }, s);
  }, a = (c) => {
    l({
      addedNodes: [c?.target].filter((s) => !!s),
      removedNodes: [c?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
    });
  }, o = (c) => {
    l({
      addedNodes: [c?.relatedTarget].filter((s) => !!s),
      removedNodes: [c?.target].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
    });
  }, d = (c) => {
    l({
      addedNodes: [c?.target].filter((s) => !!s),
      removedNodes: [c?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
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
  const h = new MutationObserver((c, s) => {
    for (const p of c) p.type == "childList" && l(p);
  });
  r = new WeakRef(h), (e?.element ?? e) instanceof Node && h.observe(e = ci(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, h), h;
}, Dr = "DOM", Lt = typeof document < "u" ? document.createElement("style") : null;
Lt && (typeof document < "u" && document.querySelector("head")?.appendChild?.(Lt), Lt.dataset.owner = Dr);
var xt = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", ie = (e) => xt && e instanceof CSSStyleValue, _ = (e) => xt && e instanceof CSSUnitValue, G = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, Xr = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = N(t), l = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!xt || !a) return ui(e, t, n, i);
  let o = y(n) && !(ie(n) || _(n)) ? n?.value : n;
  if (o == null) return a.delete?.(r), l && G(l, r, null, i), e;
  if (ie(o)) {
    const d = a.get(r);
    if (_(o) && _(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !r.startsWith("--")) {
    const d = CSS.number(o), u = a.get(r);
    return _(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
  } else return G(l, r, String(o), i), e;
  if (typeof o == "string" && !ie(o)) {
    const d = T(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), h = a.get(r);
      return _(h) && h.value === u.value && h.unit === u.unit || a.set(r, u), e;
    } else return G(l, r, o, i), e;
  }
  return G(l, r, String(o), i), e;
}, ui = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = N(t), l = e.style;
  if (!l) return e;
  let a = y(n) && !(ie(n) || _(n)) ? n?.value : n;
  return typeof a == "string" && !ie(a) && (a = T(a) ?? a), a == null ? (G(l, r, null, i), e) : (ie(a), G(l, r, String(a), i), e);
}, We = (e, t, n, i = "") => xt ? Xr(e, t, n, i) : ui(e, t, n, i), Ur = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), rn = globalThis[Zr] ??= /* @__PURE__ */ new Map(), Gr = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, Ye = (e) => ({
  storeSet: Gr(rn, e),
  mixinSet: De?.get?.(e),
  behaviorSet: Ur?.get?.(e)
}), Jr = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), De = globalThis[Jr] ??= /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), ge = globalThis[Kr] ??= /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), Ce = globalThis[Qr] ??= /* @__PURE__ */ new Map(), ea = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), st = globalThis[ea] ??= /* @__PURE__ */ new WeakMap(), di = (e, t) => {
  typeof t == "string" && (t = Ce?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => Ce?.get?.(a)).filter((a) => !!a)), r = De?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  ge?.has?.(t) || ge?.set?.(t, /* @__PURE__ */ new WeakSet()), De?.has?.(e) || De?.set?.(e, r);
  const l = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(l, t, Ye(e)), (i.has(t) || !ge?.get?.(t)?.has?.(e)) && (t?.connect?.(l, t, Ye(e)), n.add(st?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), ge?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(l, t, Ye(e))));
}, an = /* @__PURE__ */ new Set(), ta = (e = typeof document < "u" ? document : null) => {
  if (e) return an?.has?.(e) || (an?.add?.(e), _r(e, "*", "data-mixin", (t) => on(t.target)), Yr(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && on(n);
  })), e;
}, on = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => Ce?.get?.(n)).filter((n) => !!n))].map?.((n) => di(e, n));
}, na = (e, t) => {
  e.forEach((n) => t ? di(n, t) : on(n));
}, ia = (e) => {
  for (const t of an) na(t?.querySelectorAll?.("[data-mixin]"), e);
}, ra = new FinalizationRegistry((e) => {
  Ce?.delete?.(e);
}), aa = (e, t) => {
  if (!st?.has?.(t)) {
    const n = e?.trim?.();
    n && (st?.set?.(t, n), Ce?.set?.(n, t), ra?.register?.(t, n), ia(t));
  }
};
ta(typeof document < "u" ? document : null);
var En = class {
  constructor(e = null) {
    e && aa(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return rn.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return Ye(e);
  }
  get elements() {
    return ge?.get?.(this);
  }
  get storage() {
    return rn?.get?.(this.name || "");
  }
  get name() {
    return st?.get?.(this);
  }
}, oa = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Zn = globalThis[oa] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Zn.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    Zn.add(t);
  }
});
typeof document < "u" && document?.documentElement;
var sa = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) sa.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var la = {};
function V(e, t, n, i = la) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
var ca = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues");
globalThis[ca] ??= /* @__PURE__ */ new WeakMap();
var ua = () => {
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
ua();
new OffscreenCanvas(1, 1).getContext("2d");
var da = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve");
globalThis[da] ??= /* @__PURE__ */ new WeakMap();
var pa = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve");
globalThis[pa] ??= /* @__PURE__ */ new WeakMap();
var pi = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), ha = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), l = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], h = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), h.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((c) => {
          i({
            target: f,
            type: "attributes",
            attributeName: c,
            oldValue: f?.getAttribute?.(c)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return l.observe(e = pi(e), {
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
  }, l))), l;
}, fa = (e, t = "*", n = (i, r) => {
}) => {
  const i = (c) => {
    const s = Array.from(c || []) || [];
    return s.push(...Array.from(c || []).flatMap((p) => Array.from(p?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((p) => p?.matches?.(t));
  };
  let r = null;
  const l = (c) => {
    const s = r?.deref?.(), p = i(c.addedNodes), m = i(c.removedNodes);
    (p.length > 0 || m.length > 0) && n?.({
      type: c.type,
      target: c.target,
      attributeName: c.attributeName,
      attributeNamespace: c.attributeNamespace,
      nextSibling: c.nextSibling,
      oldValue: c.oldValue,
      previousSibling: c.previousSibling,
      addedNodes: p,
      removedNodes: m
    }, s);
  }, a = (c) => {
    l({
      addedNodes: [c?.target].filter((s) => !!s),
      removedNodes: [c?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
    });
  }, o = (c) => {
    l({
      addedNodes: [c?.relatedTarget].filter((s) => !!s),
      removedNodes: [c?.target].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
    });
  }, d = (c) => {
    l({
      addedNodes: [c?.target].filter((s) => !!s),
      removedNodes: [c?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
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
  const h = new MutationObserver((c, s) => {
    for (const p of c) p.type == "childList" && l(p);
  });
  r = new WeakRef(h), (e?.element ?? e) instanceof Node && h.observe(e = pi(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, h), h;
}, ma = "DOM", Nt = typeof document < "u" ? document.createElement("style") : null;
Nt && (typeof document < "u" && document.querySelector("head")?.appendChild?.(Nt), Nt.dataset.owner = ma);
var wt = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", re = (e) => wt && e instanceof CSSStyleValue, Y = (e) => wt && e instanceof CSSUnitValue, J = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, va = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = N(t), l = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!wt || !a) return hi(e, t, n, i);
  let o = y(n) && !(re(n) || Y(n)) ? n?.value : n;
  if (o == null) return a.delete?.(r), l && J(l, r, null, i), e;
  if (re(o)) {
    const d = a.get(r);
    if (Y(o) && Y(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !r.startsWith("--")) {
    const d = CSS.number(o), u = a.get(r);
    return Y(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
  } else return J(l, r, String(o), i), e;
  if (typeof o == "string" && !re(o)) {
    const d = T(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), h = a.get(r);
      return Y(h) && h.value === u.value && h.unit === u.unit || a.set(r, u), e;
    } else return J(l, r, o, i), e;
  }
  return J(l, r, String(o), i), e;
}, hi = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = N(t), l = e.style;
  if (!l) return e;
  let a = y(n) && !(re(n) || Y(n)) ? n?.value : n;
  return typeof a == "string" && !re(a) && (a = T(a) ?? a), a == null ? (J(l, r, null, i), e) : (re(a), J(l, r, String(a), i), e);
}, Re = (e, t, n, i = "") => wt ? va(e, t, n, i) : hi(e, t, n, i), ga = /* @__PURE__ */ new WeakMap(), ya = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), sn = globalThis[ya] ??= /* @__PURE__ */ new Map(), ba = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, Xe = (e) => ({
  storeSet: ba(sn, e),
  mixinSet: Ue?.get?.(e),
  behaviorSet: ga?.get?.(e)
}), xa = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), Ue = globalThis[xa] ??= /* @__PURE__ */ new WeakMap(), wa = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), ye = globalThis[wa] ??= /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), Ve = globalThis[Sa] ??= /* @__PURE__ */ new Map(), Ea = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), lt = globalThis[Ea] ??= /* @__PURE__ */ new WeakMap(), fi = (e, t) => {
  typeof t == "string" && (t = Ve?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => Ve?.get?.(a)).filter((a) => !!a)), r = Ue?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  ye?.has?.(t) || ye?.set?.(t, /* @__PURE__ */ new WeakSet()), Ue?.has?.(e) || Ue?.set?.(e, r);
  const l = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(l, t, Xe(e)), (i.has(t) || !ye?.get?.(t)?.has?.(e)) && (t?.connect?.(l, t, Xe(e)), n.add(lt?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), ye?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(l, t, Xe(e))));
}, ln = /* @__PURE__ */ new Set(), ja = (e = typeof document < "u" ? document : null) => {
  if (e) return ln?.has?.(e) || (ln?.add?.(e), ha(e, "*", "data-mixin", (t) => cn(t.target)), fa(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && cn(n);
  })), e;
}, cn = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => Ve?.get?.(n)).filter((n) => !!n))].map?.((n) => fi(e, n));
}, Ma = (e, t) => {
  e.forEach((n) => t ? fi(n, t) : cn(n));
}, Ca = (e) => {
  for (const t of ln) Ma(t?.querySelectorAll?.("[data-mixin]"), e);
}, Va = new FinalizationRegistry((e) => {
  Ve?.delete?.(e);
}), Aa = (e, t) => {
  if (!lt?.has?.(t)) {
    const n = e?.trim?.();
    n && (lt?.set?.(t, n), Ve?.set?.(n, t), Va?.register?.(t, n), Ca(t));
  }
};
ja(typeof document < "u" ? document : null);
var jn = class {
  constructor(e = null) {
    e && Aa(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return sn.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return Xe(e);
  }
  get elements() {
    return ye?.get?.(this);
  }
  get storage() {
    return sn?.get?.(this.name || "");
  }
  get name() {
    return lt?.get?.(this);
  }
}, La = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Gn = globalThis[La] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Gn.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    Gn.add(t);
  }
});
typeof document < "u" && document?.documentElement;
var Na = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) Na.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Ta = {};
function A(e, t, n, i = Ta) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
var za = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues");
globalThis[za] ??= /* @__PURE__ */ new WeakMap();
var ka = () => {
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
ka();
new OffscreenCanvas(1, 1).getContext("2d");
var Pa = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve");
globalThis[Pa] ??= /* @__PURE__ */ new WeakMap();
var Wa = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve");
globalThis[Wa] ??= /* @__PURE__ */ new WeakMap();
var mi = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Ra = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), l = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], h = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), h.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((c) => {
          i({
            target: f,
            type: "attributes",
            attributeName: c,
            oldValue: f?.getAttribute?.(c)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return l.observe(e = mi(e), {
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
  }, l))), l;
}, $a = (e, t = "*", n = (i, r) => {
}) => {
  const i = (c) => {
    const s = Array.from(c || []) || [];
    return s.push(...Array.from(c || []).flatMap((p) => Array.from(p?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((p) => p?.matches?.(t));
  };
  let r = null;
  const l = (c) => {
    const s = r?.deref?.(), p = i(c.addedNodes), m = i(c.removedNodes);
    (p.length > 0 || m.length > 0) && n?.({
      type: c.type,
      target: c.target,
      attributeName: c.attributeName,
      attributeNamespace: c.attributeNamespace,
      nextSibling: c.nextSibling,
      oldValue: c.oldValue,
      previousSibling: c.previousSibling,
      addedNodes: p,
      removedNodes: m
    }, s);
  }, a = (c) => {
    l({
      addedNodes: [c?.target].filter((s) => !!s),
      removedNodes: [c?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
    });
  }, o = (c) => {
    l({
      addedNodes: [c?.relatedTarget].filter((s) => !!s),
      removedNodes: [c?.target].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
    });
  }, d = (c) => {
    l({
      addedNodes: [c?.target].filter((s) => !!s),
      removedNodes: [c?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
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
  const h = new MutationObserver((c, s) => {
    for (const p of c) p.type == "childList" && l(p);
  });
  r = new WeakRef(h), (e?.element ?? e) instanceof Node && h.observe(e = mi(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, h), h;
}, Fa = "DOM", Tt = typeof document < "u" ? document.createElement("style") : null;
Tt && (typeof document < "u" && document.querySelector("head")?.appendChild?.(Tt), Tt.dataset.owner = Fa);
var St = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", ae = (e) => St && e instanceof CSSStyleValue, D = (e) => St && e instanceof CSSUnitValue, K = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, Oa = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = N(t), l = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!St || !a) return vi(e, t, n, i);
  let o = y(n) && !(ae(n) || D(n)) ? n?.value : n;
  if (o == null) return a.delete?.(r), l && K(l, r, null, i), e;
  if (ae(o)) {
    const d = a.get(r);
    if (D(o) && D(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !r.startsWith("--")) {
    const d = CSS.number(o), u = a.get(r);
    return D(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
  } else return K(l, r, String(o), i), e;
  if (typeof o == "string" && !ae(o)) {
    const d = T(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), h = a.get(r);
      return D(h) && h.value === u.value && h.unit === u.unit || a.set(r, u), e;
    } else return K(l, r, o, i), e;
  }
  return K(l, r, String(o), i), e;
}, vi = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = N(t), l = e.style;
  if (!l) return e;
  let a = y(n) && !(ae(n) || D(n)) ? n?.value : n;
  return typeof a == "string" && !ae(a) && (a = T(a) ?? a), a == null ? (K(l, r, null, i), e) : (ae(a), K(l, r, String(a), i), e);
}, $e = (e, t, n, i = "") => St ? Oa(e, t, n, i) : vi(e, t, n, i), qa = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), un = globalThis[Ha] ??= /* @__PURE__ */ new Map(), Ia = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, Ze = (e) => ({
  storeSet: Ia(un, e),
  mixinSet: Ge?.get?.(e),
  behaviorSet: qa?.get?.(e)
}), Ba = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), Ge = globalThis[Ba] ??= /* @__PURE__ */ new WeakMap(), _a = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), be = globalThis[_a] ??= /* @__PURE__ */ new WeakMap(), Ya = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), Ae = globalThis[Ya] ??= /* @__PURE__ */ new Map(), Da = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), ct = globalThis[Da] ??= /* @__PURE__ */ new WeakMap(), gi = (e, t) => {
  typeof t == "string" && (t = Ae?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => Ae?.get?.(a)).filter((a) => !!a)), r = Ge?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  be?.has?.(t) || be?.set?.(t, /* @__PURE__ */ new WeakSet()), Ge?.has?.(e) || Ge?.set?.(e, r);
  const l = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(l, t, Ze(e)), (i.has(t) || !be?.get?.(t)?.has?.(e)) && (t?.connect?.(l, t, Ze(e)), n.add(ct?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), be?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(l, t, Ze(e))));
}, dn = /* @__PURE__ */ new Set(), Xa = (e = typeof document < "u" ? document : null) => {
  if (e) return dn?.has?.(e) || (dn?.add?.(e), Ra(e, "*", "data-mixin", (t) => pn(t.target)), $a(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && pn(n);
  })), e;
}, pn = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => Ae?.get?.(n)).filter((n) => !!n))].map?.((n) => gi(e, n));
}, Ua = (e, t) => {
  e.forEach((n) => t ? gi(n, t) : pn(n));
}, Za = (e) => {
  for (const t of dn) Ua(t?.querySelectorAll?.("[data-mixin]"), e);
}, Ga = new FinalizationRegistry((e) => {
  Ae?.delete?.(e);
}), Ja = (e, t) => {
  if (!ct?.has?.(t)) {
    const n = e?.trim?.();
    n && (ct?.set?.(t, n), Ae?.set?.(n, t), Ga?.register?.(t, n), Za(t));
  }
};
Xa(typeof document < "u" ? document : null);
var Mn = class {
  constructor(e = null) {
    e && Ja(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return un.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return Ze(e);
  }
  get elements() {
    return be?.get?.(this);
  }
  get storage() {
    return un?.get?.(this.name || "");
  }
  get name() {
    return ct?.get?.(this);
  }
}, Ka = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Jn = globalThis[Ka] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Jn.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    Jn.add(t);
  }
});
typeof document < "u" && document?.documentElement;
var Qa = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) Qa.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var eo = {};
function L(e, t, n, i = eo) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
var to = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues");
globalThis[to] ??= /* @__PURE__ */ new WeakMap();
var no = () => {
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
no();
new OffscreenCanvas(1, 1).getContext("2d");
var io = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve");
globalThis[io] ??= /* @__PURE__ */ new WeakMap();
var ro = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve");
globalThis[ro] ??= /* @__PURE__ */ new WeakMap();
var yi = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), ao = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), l = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], h = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), h.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((c) => {
          i({
            target: f,
            type: "attributes",
            attributeName: c,
            oldValue: f?.getAttribute?.(c)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return l.observe(e = yi(e), {
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
  }, l))), l;
}, oo = (e, t = "*", n = (i, r) => {
}) => {
  const i = (c) => {
    const s = Array.from(c || []) || [];
    return s.push(...Array.from(c || []).flatMap((p) => Array.from(p?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((p) => p?.matches?.(t));
  };
  let r = null;
  const l = (c) => {
    const s = r?.deref?.(), p = i(c.addedNodes), m = i(c.removedNodes);
    (p.length > 0 || m.length > 0) && n?.({
      type: c.type,
      target: c.target,
      attributeName: c.attributeName,
      attributeNamespace: c.attributeNamespace,
      nextSibling: c.nextSibling,
      oldValue: c.oldValue,
      previousSibling: c.previousSibling,
      addedNodes: p,
      removedNodes: m
    }, s);
  }, a = (c) => {
    l({
      addedNodes: [c?.target].filter((s) => !!s),
      removedNodes: [c?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
    });
  }, o = (c) => {
    l({
      addedNodes: [c?.relatedTarget].filter((s) => !!s),
      removedNodes: [c?.target].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
    });
  }, d = (c) => {
    l({
      addedNodes: [c?.target].filter((s) => !!s),
      removedNodes: [c?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
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
  const h = new MutationObserver((c, s) => {
    for (const p of c) p.type == "childList" && l(p);
  });
  r = new WeakRef(h), (e?.element ?? e) instanceof Node && h.observe(e = yi(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, h), h;
}, so = "DOM", zt = typeof document < "u" ? document.createElement("style") : null;
zt && (typeof document < "u" && document.querySelector("head")?.appendChild?.(zt), zt.dataset.owner = so);
var Et = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", oe = (e) => Et && e instanceof CSSStyleValue, X = (e) => Et && e instanceof CSSUnitValue, Q = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, lo = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = N(t), l = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!Et || !a) return bi(e, t, n, i);
  let o = y(n) && !(oe(n) || X(n)) ? n?.value : n;
  if (o == null) return a.delete?.(r), l && Q(l, r, null, i), e;
  if (oe(o)) {
    const d = a.get(r);
    if (X(o) && X(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !r.startsWith("--")) {
    const d = CSS.number(o), u = a.get(r);
    return X(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
  } else return Q(l, r, String(o), i), e;
  if (typeof o == "string" && !oe(o)) {
    const d = T(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), h = a.get(r);
      return X(h) && h.value === u.value && h.unit === u.unit || a.set(r, u), e;
    } else return Q(l, r, o, i), e;
  }
  return Q(l, r, String(o), i), e;
}, bi = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = N(t), l = e.style;
  if (!l) return e;
  let a = y(n) && !(oe(n) || X(n)) ? n?.value : n;
  return typeof a == "string" && !oe(a) && (a = T(a) ?? a), a == null ? (Q(l, r, null, i), e) : (oe(a), Q(l, r, String(a), i), e);
}, Fe = (e, t, n, i = "") => Et ? lo(e, t, n, i) : bi(e, t, n, i), co = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), hn = globalThis[uo] ??= /* @__PURE__ */ new Map(), po = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, Je = (e) => ({
  storeSet: po(hn, e),
  mixinSet: Ke?.get?.(e),
  behaviorSet: co?.get?.(e)
}), ho = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), Ke = globalThis[ho] ??= /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), xe = globalThis[fo] ??= /* @__PURE__ */ new WeakMap(), mo = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), Le = globalThis[mo] ??= /* @__PURE__ */ new Map(), vo = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), ut = globalThis[vo] ??= /* @__PURE__ */ new WeakMap(), xi = (e, t) => {
  typeof t == "string" && (t = Le?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => Le?.get?.(a)).filter((a) => !!a)), r = Ke?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  xe?.has?.(t) || xe?.set?.(t, /* @__PURE__ */ new WeakSet()), Ke?.has?.(e) || Ke?.set?.(e, r);
  const l = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(l, t, Je(e)), (i.has(t) || !xe?.get?.(t)?.has?.(e)) && (t?.connect?.(l, t, Je(e)), n.add(ut?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), xe?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(l, t, Je(e))));
}, fn = /* @__PURE__ */ new Set(), go = (e = typeof document < "u" ? document : null) => {
  if (e) return fn?.has?.(e) || (fn?.add?.(e), ao(e, "*", "data-mixin", (t) => mn(t.target)), oo(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && mn(n);
  })), e;
}, mn = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => Le?.get?.(n)).filter((n) => !!n))].map?.((n) => xi(e, n));
}, yo = (e, t) => {
  e.forEach((n) => t ? xi(n, t) : mn(n));
}, bo = (e) => {
  for (const t of fn) yo(t?.querySelectorAll?.("[data-mixin]"), e);
}, xo = new FinalizationRegistry((e) => {
  Le?.delete?.(e);
}), wo = (e, t) => {
  if (!ut?.has?.(t)) {
    const n = e?.trim?.();
    n && (ut?.set?.(t, n), Le?.set?.(n, t), xo?.register?.(t, n), bo(t));
  }
};
go(typeof document < "u" ? document : null);
var Cn = class {
  constructor(e = null) {
    e && wo(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return hn.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return Je(e);
  }
  get elements() {
    return xe?.get?.(this);
  }
  get storage() {
    return hn?.get?.(this.name || "");
  }
  get name() {
    return ut?.get?.(this);
  }
}, So = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Kn = globalThis[So] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Kn.has(t))) try {
    CSS.registerProperty(e);
  } catch (n) {
    String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
  } finally {
    Kn.add(t);
  }
});
var Eo = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), wi = (e) => Eo(e, "value"), Si = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), Ei = (e) => {
  if (typeof e != "string") return null;
  const t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
  if (t?.length != 1) return null;
  const n = parseFloat(t[0][0]);
  return !Number.isNaN(n) && Number.isFinite(n) ? n : null;
};
typeof document < "u" && document?.documentElement;
var jo = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; ) jo.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Mo = {};
function v(e, t, n, i = Mo) {
  e?.addEventListener?.(t, n, i);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, i);
}
var Co = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues");
globalThis[Co] ??= /* @__PURE__ */ new WeakMap();
var Vo = () => {
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
Vo();
new OffscreenCanvas(1, 1).getContext("2d");
var Ao = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve");
globalThis[Ao] ??= /* @__PURE__ */ new WeakMap();
var Lo = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve");
globalThis[Lo] ??= /* @__PURE__ */ new WeakMap();
var ji = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), No = (e, t, n, i) => {
  const r = new Set([...n.split(",") || [n]].map((a) => a.trim())), l = new MutationObserver((a, o) => {
    for (const d of a) if (d.type == "childList") {
      const u = Array.from(d.addedNodes) || [], h = Array.from(d.removedNodes) || [];
      u.push(...Array.from(d.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), h.push(...Array.from(d.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(u)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        r.forEach((c) => {
          i({
            target: f,
            type: "attributes",
            attributeName: c,
            oldValue: f?.getAttribute?.(c)
          }, o);
        });
      });
    } else d.target?.matches?.(t) && d.attributeName && r.has(d.attributeName) && i(d, o);
  });
  return l.observe(e = ji(e), {
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
  }, l))), l;
}, To = (e, t = "*", n = (i, r) => {
}) => {
  const i = (c) => {
    const s = Array.from(c || []) || [];
    return s.push(...Array.from(c || []).flatMap((p) => Array.from(p?.querySelectorAll?.(t) || []))), [...Array.from(new Set(s).values())].filter((p) => p?.matches?.(t));
  };
  let r = null;
  const l = (c) => {
    const s = r?.deref?.(), p = i(c.addedNodes), m = i(c.removedNodes);
    (p.length > 0 || m.length > 0) && n?.({
      type: c.type,
      target: c.target,
      attributeName: c.attributeName,
      attributeNamespace: c.attributeNamespace,
      nextSibling: c.nextSibling,
      oldValue: c.oldValue,
      previousSibling: c.previousSibling,
      addedNodes: p,
      removedNodes: m
    }, s);
  }, a = (c) => {
    l({
      addedNodes: [c?.target].filter((s) => !!s),
      removedNodes: [c?.relatedTarget].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
    });
  }, o = (c) => {
    l({
      addedNodes: [c?.relatedTarget].filter((s) => !!s),
      removedNodes: [c?.target].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
    });
  }, d = (c) => {
    l({
      addedNodes: [c?.target].filter((s) => !!s),
      removedNodes: [c?.relatedTarget || document?.activeElement].filter((s) => !!s),
      type: "childList",
      target: c?.currentTarget
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
  const h = new MutationObserver((c, s) => {
    for (const p of c) p.type == "childList" && l(p);
  });
  r = new WeakRef(h), (e?.element ?? e) instanceof Node && h.observe(e = ji(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, h), h;
}, zo = "DOM", kt = typeof document < "u" ? document.createElement("style") : null;
kt && (typeof document < "u" && document.querySelector("head")?.appendChild?.(kt), kt.dataset.owner = zo);
var jt = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", se = (e) => jt && e instanceof CSSStyleValue, U = (e) => jt && e instanceof CSSUnitValue, ee = (e, t, n, i = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, i);
  }
}, ko = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = Si(t), l = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!jt || !a) return Mi(e, t, n, i);
  let o = wi(n) && !(se(n) || U(n)) ? n?.value : n;
  if (o == null) return a.delete?.(r), l && ee(l, r, null, i), e;
  if (se(o)) {
    const d = a.get(r);
    if (U(o) && U(d)) {
      if (d.value === o.value && d.unit === o.unit) return e;
    } else if (d === o) return e;
    return a.set(r, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !r.startsWith("--")) {
    const d = CSS.number(o), u = a.get(r);
    return U(u) && u.value === d.value && u.unit === d.unit || a.set(r, d), e;
  } else return ee(l, r, String(o), i), e;
  if (typeof o == "string" && !se(o)) {
    const d = Ei(o);
    if (typeof d == "number" && CSS?.number && !r.startsWith("--")) {
      const u = CSS.number(d), h = a.get(r);
      return U(h) && h.value === u.value && h.unit === u.unit || a.set(r, u), e;
    } else return ee(l, r, o, i), e;
  }
  return ee(l, r, String(o), i), e;
}, Mi = (e, t, n, i = "") => {
  if (!e || !t) return e;
  const r = Si(t), l = e.style;
  if (!l) return e;
  let a = wi(n) && !(se(n) || U(n)) ? n?.value : n;
  return typeof a == "string" && !se(a) && (a = Ei(a) ?? a), a == null ? (ee(l, r, null, i), e) : (se(a), ee(l, r, String(a), i), e);
}, P = (e, t, n, i = "") => jt ? ko(e, t, n, i) : Mi(e, t, n, i), Po = /* @__PURE__ */ new WeakMap(), Wo = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), vn = globalThis[Wo] ??= /* @__PURE__ */ new Map(), Ro = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([i, r]) => [i, r?.get?.(t)])?.filter?.(([i, r]) => !!r) || []);
}, Qe = (e) => ({
  storeSet: Ro(vn, e),
  mixinSet: et?.get?.(e),
  behaviorSet: Po?.get?.(e)
}), $o = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), et = globalThis[$o] ??= /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), we = globalThis[Fo] ??= /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), Ne = globalThis[Oo] ??= /* @__PURE__ */ new Map(), qo = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), dt = globalThis[qo] ??= /* @__PURE__ */ new WeakMap(), Ci = (e, t) => {
  typeof t == "string" && (t = Ne?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), i = new Set([...n].map((a) => Ne?.get?.(a)).filter((a) => !!a)), r = et?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  we?.has?.(t) || we?.set?.(t, /* @__PURE__ */ new WeakSet()), et?.has?.(e) || et?.set?.(e, r);
  const l = new WeakRef(e);
  r?.has?.(t) || (i.has(t) || t?.disconnect?.(l, t, Qe(e)), (i.has(t) || !we?.get?.(t)?.has?.(e)) && (t?.connect?.(l, t, Qe(e)), n.add(dt?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), we?.get?.(t)?.add?.(e)), r?.has?.(t) && (i.has(t) || (r?.delete?.(t), t?.disconnect?.(l, t, Qe(e))));
}, gn = /* @__PURE__ */ new Set(), Ho = (e = typeof document < "u" ? document : null) => {
  if (e) return gn?.has?.(e) || (gn?.add?.(e), No(e, "*", "data-mixin", (t) => yn(t.target)), To(e, "[data-mixin]", (t) => {
    for (const n of t.addedNodes) n instanceof HTMLElement && yn(n);
  })), e;
}, yn = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => Ne?.get?.(n)).filter((n) => !!n))].map?.((n) => Ci(e, n));
}, Io = (e, t) => {
  e.forEach((n) => t ? Ci(n, t) : yn(n));
}, Bo = (e) => {
  for (const t of gn) Io(t?.querySelectorAll?.("[data-mixin]"), e);
}, _o = new FinalizationRegistry((e) => {
  Ne?.delete?.(e);
}), Yo = (e, t) => {
  if (!dt?.has?.(t)) {
    const n = e?.trim?.();
    n && (dt?.set?.(t, n), Ne?.set?.(n, t), _o?.register?.(t, n), Bo(t));
  }
};
Ho(typeof document < "u" ? document : null);
var ce = class {
  constructor(e = null) {
    e && Yo(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return vn.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return Qe(e);
  }
  get elements() {
    return we?.get?.(this);
  }
  get storage() {
    return vn?.get?.(this.name || "");
  }
  get name() {
    return dt?.get?.(this);
  }
};
function Pt(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), l = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: l,
    width: r - n,
    height: l - i
  };
}
var Oe = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, Wt = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, Rt = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Do = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), pt = globalThis[Do] ??= /* @__PURE__ */ new WeakMap(), b = (e, t, n) => {
  const i = pt.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), pt.set(e, i);
}, Vn = (e, t) => {
  const n = pt.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && pt.delete(e);
  }
}, $ = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, Vi = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, Xo = class extends ce {
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
    }, l = {
      x: 0,
      y: 0
    };
    const a = (s) => {
      const p = t.getBoundingClientRect();
      return {
        x: s.clientX - p.left,
        y: s.clientY - p.top
      };
    }, o = () => {
      const s = Pt(r, l);
      if (s.width < 1 && s.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${s.left}px`, n.style.top = `${s.top}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
    }, d = (s) => {
      s.button === 0 && (s.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (s.target === t || t.contains(s.target)) && (i = !0, r = a(s), l = { ...r }, t.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(Oe.start, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          host: t
        }
      })), o()));
    }, u = (s) => {
      if (!i) return;
      l = a(s), o();
      const p = Pt(r, l);
      t.dispatchEvent(new CustomEvent(Oe.move, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          box: p,
          host: t
        }
      }));
    }, h = (s) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(s.pointerId);
      } catch {
      }
      const p = Pt(r, l);
      t.dispatchEvent(new CustomEvent(Oe.end, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          box: p,
          host: t
        }
      }));
    }, f = (s) => {
      i && h(s);
    }, c = (s) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Oe.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return b(t, "ui-junction-select", () => {
      n.remove();
    }), b(t, "ui-junction-select", v(t, "pointerdown", d)), b(t, "ui-junction-select", v(t, "pointermove", u)), b(t, "ui-junction-select", v(t, "pointerup", f)), b(t, "ui-junction-select", v(t, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Vn(t, "ui-junction-select"), this;
  }
}, Uo = class extends ce {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    P(t, "--jx-drag-x", $(t, "--jx-drag-x")), P(t, "--jx-drag-y", $(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = Vi(t, "data-junction-drag-handle", t);
    let r = !1, l = 0, a = 0, o = 0, d = 0;
    const u = (c) => {
      c.button === 0 && (c.target !== i && !i.contains(c.target) || (r = !0, l = c.clientX, a = c.clientY, o = $(t, "--jx-drag-x"), d = $(t, "--jx-drag-y"), i.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(Wt.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: c.clientX,
          clientY: c.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, h = (c) => {
      if (!r) return;
      const s = c.clientX - l, p = c.clientY - a, m = o + s, g = d + p;
      P(t, "--jx-drag-x", m), P(t, "--jx-drag-y", g), t.dispatchEvent(new CustomEvent(Wt.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: p,
          x: m,
          y: g
        }
      }));
    }, f = (c) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Wt.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: $(t, "--jx-drag-x"),
            y: $(t, "--jx-drag-y")
          }
        }));
      }
    };
    return b(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), b(t, "ui-junction-drag", v(i, "pointerdown", u)), b(t, "ui-junction-drag", v(i, "pointermove", h)), b(t, "ui-junction-drag", v(i, "pointerup", f)), b(t, "ui-junction-drag", v(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Vn(t, "ui-junction-drag"), this;
  }
}, Zo = class extends ce {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Vi(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, l = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), h = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, l = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(Rt.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const p = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - l));
      t.style.width = `${p}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(Rt.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: p,
          height: m
        }
      }));
    }, c = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Rt.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return b(t, "ui-junction-resize", v(n, "pointerdown", h)), b(t, "ui-junction-resize", v(n, "pointermove", f)), b(t, "ui-junction-resize", v(n, "pointerup", c)), b(t, "ui-junction-resize", v(n, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Vn(t, "ui-junction-resize"), this;
  }
};
new Xo();
new Uo();
new Zo();
function $t(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), l = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: l,
    width: r - n,
    height: l - i
  };
}
var qe = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, Ft = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, Ot = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Go = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), ht = globalThis[Go] ??= /* @__PURE__ */ new WeakMap(), x = (e, t, n) => {
  const i = ht.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), ht.set(e, i);
}, An = (e, t) => {
  const n = ht.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && ht.delete(e);
  }
}, F = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, Ai = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, Jo = class extends ce {
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
    }, l = {
      x: 0,
      y: 0
    };
    const a = (s) => {
      const p = t.getBoundingClientRect();
      return {
        x: s.clientX - p.left,
        y: s.clientY - p.top
      };
    }, o = () => {
      const s = $t(r, l);
      if (s.width < 1 && s.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${s.left}px`, n.style.top = `${s.top}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
    }, d = (s) => {
      s.button === 0 && (s.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (s.target === t || t.contains(s.target)) && (i = !0, r = a(s), l = { ...r }, t.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(qe.start, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          host: t
        }
      })), o()));
    }, u = (s) => {
      if (!i) return;
      l = a(s), o();
      const p = $t(r, l);
      t.dispatchEvent(new CustomEvent(qe.move, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          box: p,
          host: t
        }
      }));
    }, h = (s) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(s.pointerId);
      } catch {
      }
      const p = $t(r, l);
      t.dispatchEvent(new CustomEvent(qe.end, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          box: p,
          host: t
        }
      }));
    }, f = (s) => {
      i && h(s);
    }, c = (s) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(qe.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return x(t, "ui-junction-select", () => {
      n.remove();
    }), x(t, "ui-junction-select", v(t, "pointerdown", d)), x(t, "ui-junction-select", v(t, "pointermove", u)), x(t, "ui-junction-select", v(t, "pointerup", f)), x(t, "ui-junction-select", v(t, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && An(t, "ui-junction-select"), this;
  }
}, Ko = class extends ce {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    P(t, "--jx-drag-x", F(t, "--jx-drag-x")), P(t, "--jx-drag-y", F(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = Ai(t, "data-junction-drag-handle", t);
    let r = !1, l = 0, a = 0, o = 0, d = 0;
    const u = (c) => {
      c.button === 0 && (c.target !== i && !i.contains(c.target) || (r = !0, l = c.clientX, a = c.clientY, o = F(t, "--jx-drag-x"), d = F(t, "--jx-drag-y"), i.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(Ft.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: c.clientX,
          clientY: c.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, h = (c) => {
      if (!r) return;
      const s = c.clientX - l, p = c.clientY - a, m = o + s, g = d + p;
      P(t, "--jx-drag-x", m), P(t, "--jx-drag-y", g), t.dispatchEvent(new CustomEvent(Ft.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: p,
          x: m,
          y: g
        }
      }));
    }, f = (c) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Ft.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: F(t, "--jx-drag-x"),
            y: F(t, "--jx-drag-y")
          }
        }));
      }
    };
    return x(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), x(t, "ui-junction-drag", v(i, "pointerdown", u)), x(t, "ui-junction-drag", v(i, "pointermove", h)), x(t, "ui-junction-drag", v(i, "pointerup", f)), x(t, "ui-junction-drag", v(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && An(t, "ui-junction-drag"), this;
  }
}, Qo = class extends ce {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Ai(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, l = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), h = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, l = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(Ot.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const p = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - l));
      t.style.width = `${p}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(Ot.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: p,
          height: m
        }
      }));
    }, c = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Ot.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return x(t, "ui-junction-resize", v(n, "pointerdown", h)), x(t, "ui-junction-resize", v(n, "pointermove", f)), x(t, "ui-junction-resize", v(n, "pointerup", c)), x(t, "ui-junction-resize", v(n, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && An(t, "ui-junction-resize"), this;
  }
};
new Jo();
new Ko();
new Qo();
function qt(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), l = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: l,
    width: r - n,
    height: l - i
  };
}
var He = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, Ht = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, It = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, es = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), ft = globalThis[es] ??= /* @__PURE__ */ new WeakMap(), w = (e, t, n) => {
  const i = ft.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), ft.set(e, i);
}, Ln = (e, t) => {
  const n = ft.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && ft.delete(e);
  }
}, O = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, Li = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, ts = class extends Cn {
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
    }, l = {
      x: 0,
      y: 0
    };
    const a = (s) => {
      const p = t.getBoundingClientRect();
      return {
        x: s.clientX - p.left,
        y: s.clientY - p.top
      };
    }, o = () => {
      const s = qt(r, l);
      if (s.width < 1 && s.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${s.left}px`, n.style.top = `${s.top}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
    }, d = (s) => {
      s.button === 0 && (s.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (s.target === t || t.contains(s.target)) && (i = !0, r = a(s), l = { ...r }, t.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(He.start, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          host: t
        }
      })), o()));
    }, u = (s) => {
      if (!i) return;
      l = a(s), o();
      const p = qt(r, l);
      t.dispatchEvent(new CustomEvent(He.move, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          box: p,
          host: t
        }
      }));
    }, h = (s) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(s.pointerId);
      } catch {
      }
      const p = qt(r, l);
      t.dispatchEvent(new CustomEvent(He.end, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          box: p,
          host: t
        }
      }));
    }, f = (s) => {
      i && h(s);
    }, c = (s) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(He.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return w(t, "ui-junction-select", () => {
      n.remove();
    }), w(t, "ui-junction-select", L(t, "pointerdown", d)), w(t, "ui-junction-select", L(t, "pointermove", u)), w(t, "ui-junction-select", L(t, "pointerup", f)), w(t, "ui-junction-select", L(t, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Ln(t, "ui-junction-select"), this;
  }
}, ns = class extends Cn {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    Fe(t, "--jx-drag-x", O(t, "--jx-drag-x")), Fe(t, "--jx-drag-y", O(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = Li(t, "data-junction-drag-handle", t);
    let r = !1, l = 0, a = 0, o = 0, d = 0;
    const u = (c) => {
      c.button === 0 && (c.target !== i && !i.contains(c.target) || (r = !0, l = c.clientX, a = c.clientY, o = O(t, "--jx-drag-x"), d = O(t, "--jx-drag-y"), i.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(Ht.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: c.clientX,
          clientY: c.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, h = (c) => {
      if (!r) return;
      const s = c.clientX - l, p = c.clientY - a, m = o + s, g = d + p;
      Fe(t, "--jx-drag-x", m), Fe(t, "--jx-drag-y", g), t.dispatchEvent(new CustomEvent(Ht.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: p,
          x: m,
          y: g
        }
      }));
    }, f = (c) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Ht.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: O(t, "--jx-drag-x"),
            y: O(t, "--jx-drag-y")
          }
        }));
      }
    };
    return w(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), w(t, "ui-junction-drag", L(i, "pointerdown", u)), w(t, "ui-junction-drag", L(i, "pointermove", h)), w(t, "ui-junction-drag", L(i, "pointerup", f)), w(t, "ui-junction-drag", L(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Ln(t, "ui-junction-drag"), this;
  }
}, is = class extends Cn {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Li(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, l = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), h = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, l = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(It.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const p = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - l));
      t.style.width = `${p}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(It.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: p,
          height: m
        }
      }));
    }, c = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(It.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return w(t, "ui-junction-resize", L(n, "pointerdown", h)), w(t, "ui-junction-resize", L(n, "pointermove", f)), w(t, "ui-junction-resize", L(n, "pointerup", c)), w(t, "ui-junction-resize", L(n, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Ln(t, "ui-junction-resize"), this;
  }
};
new ts();
new ns();
new is();
function Bt(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), l = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: l,
    width: r - n,
    height: l - i
  };
}
var Ie = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, _t = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, Yt = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, rs = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), mt = globalThis[rs] ??= /* @__PURE__ */ new WeakMap(), S = (e, t, n) => {
  const i = mt.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), mt.set(e, i);
}, Nn = (e, t) => {
  const n = mt.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && mt.delete(e);
  }
}, q = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, Ni = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, as = class extends Mn {
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
    }, l = {
      x: 0,
      y: 0
    };
    const a = (s) => {
      const p = t.getBoundingClientRect();
      return {
        x: s.clientX - p.left,
        y: s.clientY - p.top
      };
    }, o = () => {
      const s = Bt(r, l);
      if (s.width < 1 && s.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${s.left}px`, n.style.top = `${s.top}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
    }, d = (s) => {
      s.button === 0 && (s.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (s.target === t || t.contains(s.target)) && (i = !0, r = a(s), l = { ...r }, t.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(Ie.start, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          host: t
        }
      })), o()));
    }, u = (s) => {
      if (!i) return;
      l = a(s), o();
      const p = Bt(r, l);
      t.dispatchEvent(new CustomEvent(Ie.move, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          box: p,
          host: t
        }
      }));
    }, h = (s) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(s.pointerId);
      } catch {
      }
      const p = Bt(r, l);
      t.dispatchEvent(new CustomEvent(Ie.end, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          box: p,
          host: t
        }
      }));
    }, f = (s) => {
      i && h(s);
    }, c = (s) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Ie.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return S(t, "ui-junction-select", () => {
      n.remove();
    }), S(t, "ui-junction-select", A(t, "pointerdown", d)), S(t, "ui-junction-select", A(t, "pointermove", u)), S(t, "ui-junction-select", A(t, "pointerup", f)), S(t, "ui-junction-select", A(t, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Nn(t, "ui-junction-select"), this;
  }
}, os = class extends Mn {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    $e(t, "--jx-drag-x", q(t, "--jx-drag-x")), $e(t, "--jx-drag-y", q(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = Ni(t, "data-junction-drag-handle", t);
    let r = !1, l = 0, a = 0, o = 0, d = 0;
    const u = (c) => {
      c.button === 0 && (c.target !== i && !i.contains(c.target) || (r = !0, l = c.clientX, a = c.clientY, o = q(t, "--jx-drag-x"), d = q(t, "--jx-drag-y"), i.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(_t.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: c.clientX,
          clientY: c.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, h = (c) => {
      if (!r) return;
      const s = c.clientX - l, p = c.clientY - a, m = o + s, g = d + p;
      $e(t, "--jx-drag-x", m), $e(t, "--jx-drag-y", g), t.dispatchEvent(new CustomEvent(_t.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: p,
          x: m,
          y: g
        }
      }));
    }, f = (c) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(_t.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: q(t, "--jx-drag-x"),
            y: q(t, "--jx-drag-y")
          }
        }));
      }
    };
    return S(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), S(t, "ui-junction-drag", A(i, "pointerdown", u)), S(t, "ui-junction-drag", A(i, "pointermove", h)), S(t, "ui-junction-drag", A(i, "pointerup", f)), S(t, "ui-junction-drag", A(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Nn(t, "ui-junction-drag"), this;
  }
}, ss = class extends Mn {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Ni(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, l = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), h = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, l = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(Yt.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const p = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - l));
      t.style.width = `${p}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(Yt.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: p,
          height: m
        }
      }));
    }, c = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Yt.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return S(t, "ui-junction-resize", A(n, "pointerdown", h)), S(t, "ui-junction-resize", A(n, "pointermove", f)), S(t, "ui-junction-resize", A(n, "pointerup", c)), S(t, "ui-junction-resize", A(n, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Nn(t, "ui-junction-resize"), this;
  }
};
new as();
new os();
new ss();
function Dt(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), l = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: l,
    width: r - n,
    height: l - i
  };
}
var Be = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, Xt = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, Ut = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, ls = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), vt = globalThis[ls] ??= /* @__PURE__ */ new WeakMap(), E = (e, t, n) => {
  const i = vt.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), vt.set(e, i);
}, Tn = (e, t) => {
  const n = vt.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && vt.delete(e);
  }
}, H = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, Ti = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, cs = class extends jn {
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
    }, l = {
      x: 0,
      y: 0
    };
    const a = (s) => {
      const p = t.getBoundingClientRect();
      return {
        x: s.clientX - p.left,
        y: s.clientY - p.top
      };
    }, o = () => {
      const s = Dt(r, l);
      if (s.width < 1 && s.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${s.left}px`, n.style.top = `${s.top}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
    }, d = (s) => {
      s.button === 0 && (s.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (s.target === t || t.contains(s.target)) && (i = !0, r = a(s), l = { ...r }, t.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(Be.start, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          host: t
        }
      })), o()));
    }, u = (s) => {
      if (!i) return;
      l = a(s), o();
      const p = Dt(r, l);
      t.dispatchEvent(new CustomEvent(Be.move, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          box: p,
          host: t
        }
      }));
    }, h = (s) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(s.pointerId);
      } catch {
      }
      const p = Dt(r, l);
      t.dispatchEvent(new CustomEvent(Be.end, {
        bubbles: !0,
        detail: {
          a: { ...r },
          b: { ...l },
          box: p,
          host: t
        }
      }));
    }, f = (s) => {
      i && h(s);
    }, c = (s) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Be.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return E(t, "ui-junction-select", () => {
      n.remove();
    }), E(t, "ui-junction-select", V(t, "pointerdown", d)), E(t, "ui-junction-select", V(t, "pointermove", u)), E(t, "ui-junction-select", V(t, "pointerup", f)), E(t, "ui-junction-select", V(t, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Tn(t, "ui-junction-select"), this;
  }
}, us = class extends jn {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    Re(t, "--jx-drag-x", H(t, "--jx-drag-x")), Re(t, "--jx-drag-y", H(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = Ti(t, "data-junction-drag-handle", t);
    let r = !1, l = 0, a = 0, o = 0, d = 0;
    const u = (c) => {
      c.button === 0 && (c.target !== i && !i.contains(c.target) || (r = !0, l = c.clientX, a = c.clientY, o = H(t, "--jx-drag-x"), d = H(t, "--jx-drag-y"), i.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(Xt.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: c.clientX,
          clientY: c.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, h = (c) => {
      if (!r) return;
      const s = c.clientX - l, p = c.clientY - a, m = o + s, g = d + p;
      Re(t, "--jx-drag-x", m), Re(t, "--jx-drag-y", g), t.dispatchEvent(new CustomEvent(Xt.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: p,
          x: m,
          y: g
        }
      }));
    }, f = (c) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Xt.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: H(t, "--jx-drag-x"),
            y: H(t, "--jx-drag-y")
          }
        }));
      }
    };
    return E(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), E(t, "ui-junction-drag", V(i, "pointerdown", u)), E(t, "ui-junction-drag", V(i, "pointermove", h)), E(t, "ui-junction-drag", V(i, "pointerup", f)), E(t, "ui-junction-drag", V(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Tn(t, "ui-junction-drag"), this;
  }
}, ds = class extends jn {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Ti(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, l = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), h = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, l = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(Ut.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const p = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - l));
      t.style.width = `${p}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(Ut.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: p,
          height: m
        }
      }));
    }, c = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Ut.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return E(t, "ui-junction-resize", V(n, "pointerdown", h)), E(t, "ui-junction-resize", V(n, "pointermove", f)), E(t, "ui-junction-resize", V(n, "pointerup", c)), E(t, "ui-junction-resize", V(n, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Tn(t, "ui-junction-resize"), this;
  }
};
new cs();
new us();
new ds();
function Zt(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), r = Math.max(e.x, t.x), l = Math.max(e.y, t.y);
  return {
    left: n,
    top: i,
    right: r,
    bottom: l,
    width: r - n,
    height: l - i
  };
}
var _e = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, Gt = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, Jt = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, ps = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), gt = globalThis[ps] ??= /* @__PURE__ */ new WeakMap(), j = (e, t, n) => {
  const i = gt.get(e) ?? /* @__PURE__ */ new Map(), r = i.get(t) ?? [];
  r.push(n), i.set(t, r), gt.set(e, i);
}, zn = (e, t) => {
  const n = gt.get(e), i = n?.get(t);
  if (i) {
    for (const r of i) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && gt.delete(e);
  }
}, I = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", i = parseFloat(n);
  return Number.isFinite(i) ? i : 0;
}, zi = (e, t, n) => {
  const i = e.getAttribute(t)?.trim();
  if (!i) return n;
  const r = e.querySelector(i);
  return r instanceof HTMLElement ? r : n;
}, hs = class extends En {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let r = !1, l = {
      x: 0,
      y: 0
    }, a = {
      x: 0,
      y: 0
    };
    const o = (p) => {
      const m = t.getBoundingClientRect();
      return {
        x: p.clientX - m.left,
        y: p.clientY - m.top
      };
    }, d = () => {
      const p = Zt(l, a);
      if (p.width < 1 && p.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${p.left}px`, n.style.top = `${p.top}px`, n.style.width = `${p.width}px`, n.style.height = `${p.height}px`;
    }, u = (p) => {
      p.button === 0 && (p.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (p.target === t || t.contains(p.target)) && (r = !0, l = o(p), a = { ...l }, t.setPointerCapture(p.pointerId), t.dispatchEvent(new CustomEvent(_e.start, {
        bubbles: !0,
        detail: {
          a: { ...l },
          b: { ...a },
          host: t
        }
      })), d()));
    }, h = (p) => {
      if (!r) return;
      a = o(p), d();
      const m = Zt(l, a);
      t.dispatchEvent(new CustomEvent(_e.move, {
        bubbles: !0,
        detail: {
          a: { ...l },
          b: { ...a },
          box: m,
          host: t
        }
      }));
    }, f = (p) => {
      if (!r) return;
      r = !1;
      try {
        t.releasePointerCapture(p.pointerId);
      } catch {
      }
      const m = Zt(l, a);
      t.dispatchEvent(new CustomEvent(_e.end, {
        bubbles: !0,
        detail: {
          a: { ...l },
          b: { ...a },
          box: m,
          host: t
        }
      }));
    }, c = (p) => {
      r && f(p);
    }, s = (p) => {
      if (r) {
        r = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(p.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(_e.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return j(t, "ui-junction-select", () => {
      n.remove();
    }), j(t, "ui-junction-select", C(t, "pointerdown", u)), j(t, "ui-junction-select", C(t, "pointermove", h)), j(t, "ui-junction-select", C(t, "pointerup", c)), j(t, "ui-junction-select", C(t, "pointercancel", s)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && zn(t, "ui-junction-select"), this;
  }
}, fs = class extends En {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    We(t, "--jx-drag-x", I(t, "--jx-drag-x")), We(t, "--jx-drag-y", I(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const i = zi(t, "data-junction-drag-handle", t);
    let r = !1, l = 0, a = 0, o = 0, d = 0;
    const u = (c) => {
      c.button === 0 && (c.target !== i && !i.contains(c.target) || (r = !0, l = c.clientX, a = c.clientY, o = I(t, "--jx-drag-x"), d = I(t, "--jx-drag-y"), i.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(Gt.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: c.clientX,
          clientY: c.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, h = (c) => {
      if (!r) return;
      const s = c.clientX - l, p = c.clientY - a, m = o + s, g = d + p;
      We(t, "--jx-drag-x", m), We(t, "--jx-drag-y", g), t.dispatchEvent(new CustomEvent(Gt.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: s,
          dy: p,
          x: m,
          y: g
        }
      }));
    }, f = (c) => {
      if (r) {
        r = !1;
        try {
          i.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Gt.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: I(t, "--jx-drag-x"),
            y: I(t, "--jx-drag-y")
          }
        }));
      }
    };
    return j(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), j(t, "ui-junction-drag", C(i, "pointerdown", u)), j(t, "ui-junction-drag", C(i, "pointermove", h)), j(t, "ui-junction-drag", C(i, "pointerup", f)), j(t, "ui-junction-drag", C(i, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && zn(t, "ui-junction-drag"), this;
  }
}, ms = class extends En {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = zi(t, "data-junction-resize-handle", t);
    let i = !1, r = 0, l = 0, a = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), u = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), h = (s) => {
      s.button === 0 && (s.target !== n && !n.contains(s.target) || (i = !0, r = s.clientX, l = s.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(s.pointerId), t.dispatchEvent(new CustomEvent(Jt.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, f = (s) => {
      if (!i) return;
      const p = Math.max(d, a + (s.clientX - r)), m = Math.max(u, o + (s.clientY - l));
      t.style.width = `${p}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(Jt.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: p,
          height: m
        }
      }));
    }, c = (s) => {
      if (i) {
        i = !1;
        try {
          n.releasePointerCapture(s.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Jt.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return j(t, "ui-junction-resize", C(n, "pointerdown", h)), j(t, "ui-junction-resize", C(n, "pointermove", f)), j(t, "ui-junction-resize", C(n, "pointerup", c)), j(t, "ui-junction-resize", C(n, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && zn(t, "ui-junction-resize"), this;
  }
};
new hs();
new fs();
new ms();
export {
  Sl as DOMMixin,
  fs as JunctionDragMixin,
  ms as JunctionResizeMixin,
  hs as JunctionSelectMixin,
  ks as MATCH,
  Is as MOC,
  Kt as MOCElement,
  ws as RAFBehavior,
  Ps as REGEX,
  Ss as ROOT,
  sl as WavyShapedCircle,
  gs as __exportProperties,
  Pn as __registeredCssProperties,
  M as addEvent,
  at as addEvents,
  Fs as addEventsList,
  Tr as addRoot,
  me as adoptedBlobMap,
  z as adoptedMap,
  ir as animateHide,
  nr as animateShow,
  en as availSize,
  Zs as bbh,
  Us as bbw,
  wr as bindBehavior,
  Cr as bindMixins,
  Mr as bindStore,
  nt as borderBoxHeight,
  tt as borderBoxWidth,
  si as boundBehaviors,
  W as boundMixinSet,
  Js as cbh,
  Gs as cbw,
  Ys as changeZoom,
  Ks as classes,
  er as computeCaretPosition,
  tl as computeCaretPositionFromClient,
  Hs as containsOrSelf,
  rt as contentBoxHeight,
  it as contentBoxWidth,
  Ws as createElementVanilla,
  Rr as deleteStyleProperty,
  ys as detectMobile,
  Vs as doBorderObserve,
  Cs as doContentObserve,
  mr as fetchAndCache,
  vr as fetchAsInline,
  Qs as fixOrientToScreen,
  Ds as fixedClientZoom,
  cl as getAdoptedStyleRule,
  ti as getAvailSize,
  Xs as getBoundingOrientRect,
  Ji as getCorrectOrientation,
  Ee as getElementRelated,
  vl as getElementZoom,
  qs as getEventTarget,
  Ii as getOffsetParent,
  bs as getOffsetParentChain,
  yl as getPadding,
  ve as getPropertyValue,
  gl as getPxValue,
  Er as getStoresOfElement,
  sr as getStyleLayer,
  Sn as getStyleRule,
  fl as getTransform,
  ml as getTransformOrigin,
  _s as getZoom,
  Vl as handleAttribute,
  Ml as handleDataset,
  El as handleHidden,
  jl as handleProperty,
  Cl as handleStyleChange,
  Mt as hasParent,
  dl as hash,
  Ls as html,
  $s as includeSelf,
  zs as indexOf,
  ni as initTextStyle,
  ol as initVisibility,
  Rs as isElement,
  Bs as isInFocus,
  qi as isMobile,
  xs as isNearlyIdentity,
  Ts as isValidParent,
  br as loadAsAdopted,
  yr as loadBlobStyle,
  fe as loadInlineStyle,
  oi as loadStyleSheet,
  Bi as makeRAFCycle,
  el as measureInputInFocus,
  Qi as measureText,
  gt as mixinDisposers,
  Z as mixinElements,
  ot as mixinNamespace,
  Me as mixinRegistry,
  Pr as nameRegistryF,
  je as namedStoreMaps,
  al as observeAttribute,
  xn as observeAttributeBySelector,
  rl as observeBorderBox,
  or as observeBySelector,
  il as observeContentBox,
  Rn as onBorderObserve,
  $n as onContentObserve,
  le as orientOf,
  Zi as orientationNumberMap,
  Xn as parseLength,
  xr as parseOrigin,
  ei as passiveOpts,
  hl as preloadStyle,
  tr as readLauncherLayoutFromElement,
  bl as reflectBehaviors,
  wl as reflectMixins,
  xl as reflectStores,
  Wr as registerMixin,
  At as removeAdopted,
  Fn as removeEvent,
  Os as removeEvents,
  nl as resolveGridCellFromClientPoint,
  tn as roots,
  js as setAttributes,
  Es as setAttributesIfNull,
  Ns as setChecked,
  Ms as setIdleInterval,
  pl as setProperty,
  ul as setStyleInRule,
  bt as setStyleProperty,
  ri as setStylePropertyFallback,
  fr as setStylePropertyTyped,
  gr as setStyleRule,
  ll as setStyleRules,
  qn as setStyleURL,
  _i as throttleMap,
  Qt as unfixedClientZoom,
  nn as updateAllMixins,
  li as updateMixinAttributes,
  zr as updateMixinAttributesAll,
  kr as updateMixinAttributesAllInRoots,
  Gi as updateVP,
  As as url,
  Ki as whenAnyScreenChanges,
  Xi as zoomOf,
  Di as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwsIHRyeVN0cmluZ0FzTnVtYmVyIH0gZnJvbSBcIkBmZXN0LWxpYi9jb3JlXCI7XG5cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvUHJvcGVydGllcy50c1xudmFyIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyA9IGdsb2JhbFRoaXNbX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5bXG5cdHtcblx0XHRuYW1lOiBcIi0tc2NyZWVuLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jbGlwLWZyZXFcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGl4ZWwtcmF0aW9cIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMVwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudC15XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC1sZWZ0XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC14XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC15XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH1cbl0uZm9yRWFjaCgob3B0aW9ucykgPT4ge1xuXHRpZiAodHlwZW9mIENTUyA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBDU1M/LnJlZ2lzdGVyUHJvcGVydHkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdGNvbnN0IG5hbWUgPSBTdHJpbmcob3B0aW9ucz8ubmFtZSB8fCBcIlwiKS50cmltKCk7XG5cdGlmICghbmFtZSB8fCBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmhhcyhuYW1lKSkgcmV0dXJuO1xuXHR0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KG9wdGlvbnMpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKCEoU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIikpIGNvbnNvbGUud2FybihlKTtcblx0fSBmaW5hbGx5IHtcblx0XHRfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmFkZChuYW1lKTtcblx0fVxufSk7XG52YXIgX19leHBvcnRQcm9wZXJ0aWVzID0gKCkgPT4ge307XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9EZXRlY3QudHNcbnZhciBpc01vYmlsZSA9ICgpID0+IHtcblx0bGV0IGNoZWNrID0gbmF2aWdhdG9yPy51c2VyQWdlbnREYXRhPy5tb2JpbGUgfHwgZmFsc2U7XG5cdCgoYSkgPT4ge1xuXHRcdGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkgY2hlY2sgPSB0cnVlO1xuXHR9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgZ2xvYmFsVGhpcy5vcGVyYSk7XG5cdHJldHVybiBjaGVjaztcbn07XG52YXIgZGV0ZWN0TW9iaWxlID0gKCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC9BbmRyb2lkL2ksXG5cdFx0L3dlYk9TL2ksXG5cdFx0L2lQaG9uZS9pLFxuXHRcdC9pUGFkL2ksXG5cdFx0L2lQb2QvaSxcblx0XHQvQmxhY2tCZXJyeS9pLFxuXHRcdC9XaW5kb3dzIFBob25lL2lcblx0XS5zb21lKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2guYmluZChuYXZpZ2F0b3IudXNlckFnZW50KSkgJiYgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgJiYgZ2xvYmFsVGhpcy5tYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9VdGlscy50c1xudmFyIGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrID0gKCkgPT4gKHtcblx0ZGlkVGltZW91dDogZmFsc2UsXG5cdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcbn0pO1xudmFyIHJ1bldoZW5JZGxlJDEgPSAoY2IsIHRpbWVvdXQgPSAxZTMpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayhjYiwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc2V0VGltZW91dCgoKSA9PiBjYihjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjaygpKSwgMCk7XG59O1xudmFyIGdldE9mZnNldFBhcmVudCA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiBlbGVtZW50Py5vZmZzZXRQYXJlbnQgPz8gZWxlbWVudD8uaG9zdDtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4gPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBwYXJlbnRzID0gW107XG5cdGxldCBjdXJyZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRjb25zdCBwYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoY3VycmVudCk7XG5cdFx0aWYgKHBhcmVudCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MSHRtbEVsZW1lbnQpIGJyZWFrO1xuXHRcdGlmIChjdXJyZW50ID0gcGFyZW50KSBwYXJlbnRzLnB1c2goY3VycmVudCk7XG5cdH1cblx0cmV0dXJuIHBhcmVudHM7XG59O1xudmFyIGlzTmVhcmx5SWRlbnRpdHkgPSAobWF0cml4LCBlcHNpbG9uID0gMWUtNikgPT4ge1xuXHRyZXR1cm4gTWF0aC5hYnMobWF0cml4LmEgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmIpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYykgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5kIC0gMSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5lKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmYpIDwgZXBzaWxvbjtcbn07XG52YXIgbWFrZVJBRkN5Y2xlID0gKCkgPT4ge1xuXHRjb25zdCBjb250cm9sID0ge1xuXHRcdGNhbmNlbGVkOiBmYWxzZSxcblx0XHRyQUZzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHRcdGxhc3Q6IG51bGwsXG5cdFx0Y2FuY2VsKCkge1xuXHRcdFx0dGhpcy5jYW5jZWxlZCA9IHRydWU7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxhc3QpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHRzaGVkdWxlKGNiKSB7XG5cdFx0XHR0aGlzLnJBRnMuYWRkKGNiKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0fTtcblx0KGFzeW5jICgpID0+IHtcblx0XHR3aGlsZSAoIWNvbnRyb2w/LmNhbmNlbGVkKSB7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbCgoY29udHJvbD8uckFGcz8udmFsdWVzPy4oKSA/PyBbXSk/Lm1hcD8uKChyQUYpID0+IFByb21pc2UudHJ5KHJBRik/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpKSk7XG5cdFx0XHRjb250cm9sLnJBRnM/LmNsZWFyPy4oKTtcblx0XHRcdGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHtcblx0XHRcdFx0Y29udHJvbC5sYXN0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcyk7XG5cdFx0XHR9KTtcblx0XHRcdGVsc2UgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJlcywgMTYpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KSgpO1xuXHRyZXR1cm4gY29udHJvbDtcbn07XG52YXIgUkFGQmVoYXZpb3IgPSAoc2hlZCA9IG1ha2VSQUZDeWNsZSgpKSA9PiB7XG5cdHJldHVybiAoY2IpID0+IHNoZWQuc2hlZHVsZShjYik7XG59O1xudmFyIFJPT1QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xudmFyIHNldEF0dHJpYnV0ZXNJZk51bGwgPSAoZWxlbWVudCwgYXR0cnMgPSB7fSkgPT4ge1xuXHRpZiAoIWF0dHJzIHx8IHR5cGVvZiBhdHRycyAhPSBcIm9iamVjdFwiIHx8ICFlbGVtZW50KSByZXR1cm47XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0Y29uc3Qgb2xkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgaWYgKHZhbHVlICE9IG9sZCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgb2xkID09IFwiXCIgPyB2YWx1ZSA/PyBvbGQgOiBvbGQgPz8gdmFsdWUpO1xuXHR9KTtcbn07XG52YXIgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPz8gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSkpO1xuXHR9KTtcbn07XG52YXIgdGhyb3R0bGVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIHNldElkbGVJbnRlcnZhbCA9IChjYiwgdGltZW91dCA9IDFlMywgLi4uYXJncykgPT4ge1xuXHRjb25zdCBzdGF0dXMgPSB7XG5cdFx0cnVubmluZzogdHJ1ZSxcblx0XHRjYW5jZWw6ICgpID0+IHtcblx0XHRcdHN0YXR1cy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXHRydW5XaGVuSWRsZSQxKGFzeW5jICgpID0+IHtcblx0XHRpZiAoIWNiIHx8IHR5cGVvZiBjYiAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0XHR3aGlsZSAoc3RhdHVzLnJ1bm5pbmcpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKFtQcm9taXNlLnRyeShjYiwgLi4uYXJncyksIG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHRpbWVvdXQpKV0pLmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbnkoW25ldyBQcm9taXNlKChyKSA9PiBydW5XaGVuSWRsZSQxKHIsIHRpbWVvdXQpKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSk7XG5cdFx0fVxuXHRcdHN0YXR1cy5jYW5jZWwgPSAoKSA9PiB7fTtcblx0fSwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc3RhdHVzPy5jYW5jZWw7XG59O1xuaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFzeW5jICgpID0+IHtcblx0d2hpbGUgKHRydWUpIHtcblx0XHR0aHJvdHRsZU1hcC5mb3JFYWNoKChjYikgPT4gY2I/LigpKTtcblx0XHRhd2FpdCBuZXcgUHJvbWlzZSgocikgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHIpKTtcblx0fVxufSk7XG52YXIgYm9yZGVyQm94V2lkdGggPSBTeW1ib2woXCJAYm9yZGVyLWJveC13aWR0aFwiKTtcbnZhciBib3JkZXJCb3hIZWlnaHQgPSBTeW1ib2woXCJAYm9yZGVyLWJveC1oZWlnaHRcIik7XG52YXIgY29udGVudEJveFdpZHRoID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LXdpZHRoXCIpO1xudmFyIGNvbnRlbnRCb3hIZWlnaHQgPSBTeW1ib2woXCJAY29udGVudC1ib3gtaGVpZ2h0XCIpO1xudmFyIG9uQm9yZGVyT2JzZXJ2ZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9uQ29udGVudE9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBkb0NvbnRlbnRPYnNlcnZlID0gKGVsZW1lbnQsIGNiID0gKCkgPT4ge30pID0+IHtcblx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuXHRpZiAoIW9uQ29udGVudE9ic2VydmUuaGFzKGVsZW1lbnQpKSB7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94V2lkdGhdID0gZWxlbWVudC5jbGllbnRXaWR0aDtcblx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRCb3hTaXplID0gZW50cnkuY29udGVudEJveFNpemVbMF07XG5cdFx0XHRcdGlmIChjb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IE1hdGgubWluKGNvbnRlbnRCb3hTaXplLmlubGluZVNpemUsIGVsZW1lbnQuY2xpZW50V2lkdGgpO1xuXHRcdFx0XHRcdGVsZW1lbnRbY29udGVudEJveEhlaWdodF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Db250ZW50T2JzZXJ2ZS5zZXQoZWxlbWVudCwgb2JzZXJ2ZXIpO1xuXHRcdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJjb250ZW50LWJveFwiIH0pO1xuXHR9XG59O1xudmFyIGRvQm9yZGVyT2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkJvcmRlck9ic2VydmUuaGFzKGVsZW1lbnQpKSB7XG5cdFx0ZWxlbWVudFtib3JkZXJCb3hXaWR0aF0gPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94SGVpZ2h0XSA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5ib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGJvcmRlckJveFNpemUgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50Lm9mZnNldFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBNYXRoLm1pbihib3JkZXJCb3hTaXplLmJsb2NrU2l6ZSwgZWxlbWVudC5vZmZzZXRIZWlnaHQpO1xuXHRcdFx0XHRcdGNiPy4oZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRvbkJvcmRlck9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiYm9yZGVyLWJveFwiIH0pO1xuXHR9XG59O1xudmFyIHVybCA9ICh0eXBlLCAuLi5zb3VyY2UpID0+IHtcblx0cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2Ioc291cmNlLCB7IHR5cGUgfSkpO1xufTtcbnZhciBodG1sID0gKHNvdXJjZSwgdHlwZSA9IFwidGV4dC9odG1sXCIpID0+IHtcblx0Y29uc3QgcGFyc2VkID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzb3VyY2UsIHR5cGUpO1xuXHRyZXR1cm4gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCJ0ZW1wbGF0ZVwiKSA/PyBwYXJzZWQucXVlcnlTZWxlY3RvcihcIipcIik7XG59O1xudmFyIHNldENoZWNrZWQgPSAoaW5wdXQsIHZhbHVlLCBldikgPT4ge1xuXHRpZiAodmFsdWUgIT0gbnVsbCAmJiBpbnB1dC5jaGVja2VkICE9IHZhbHVlKSB7XG5cdFx0aWYgKGlucHV0Py5bXCJ0eXBlXCJdID09IFwiY2hlY2tib3hcIiB8fCBpbnB1dD8uW1widHlwZVwiXSA9PSBcInJhZGlvXCIgJiYgIWlucHV0Py5jaGVja2VkKSB7XG5cdFx0XHRpbnB1dD8uY2xpY2s/LigpO1xuXHRcdFx0ZXY/LnByZXZlbnREZWZhdWx0Py4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5wdXQuY2hlY2tlZCA9ICEhdmFsdWU7XG5cdFx0XHRpbnB1dD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBFdmVudChcImNoYW5nZVwiLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdH1cbn07XG52YXIgaXNWYWxpZFBhcmVudCA9IChwYXJlbnQpID0+IHtcblx0cmV0dXJuIHBhcmVudCAhPSBudWxsICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmICEocGFyZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCB8fCBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MQm9keUVsZW1lbnQpID8gcGFyZW50IDogbnVsbDtcbn07XG52YXIgaW5kZXhPZiA9IChlbGVtZW50LCBub2RlKSA9PiB7XG5cdGlmIChlbGVtZW50ID09IG51bGwgfHwgbm9kZSA9PSBudWxsKSByZXR1cm4gLTE7XG5cdHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQ/LmNoaWxkTm9kZXMgPz8gW10pPy5pbmRleE9mPy4obm9kZSkgPz8gLTE7XG59O1xudmFyIE1BVENIID0gXCIoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopXCI7XG52YXIgUkVHRVggPSBcIl4oPzooLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopKXxeIygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKil8XlxcXFwuKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXFsoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiO1xudmFyIGNyZWF0ZUVsZW1lbnRWYW5pbGxhID0gKHNlbGVjdG9yKSA9PiB7XG5cdGlmIChzZWxlY3RvciA9PSBcIjpmcmFnbWVudDpcIikgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0Y29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KTtcblx0Zm9yICh2YXIgbm9kZSA9IGNyZWF0ZShcImRpdlwiKSwgbWF0Y2gsIGNsYXNzTmFtZSA9IFwiXCI7IHNlbGVjdG9yICYmIChtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCIpKTspIHtcblx0XHRpZiAobWF0Y2hbMV0pIG5vZGUgPSBjcmVhdGUobWF0Y2hbMV0pO1xuXHRcdGlmIChtYXRjaFsyXSkgbm9kZS5pZCA9IG1hdGNoWzJdO1xuXHRcdGlmIChtYXRjaFszXSkgY2xhc3NOYW1lICs9IFwiIFwiICsgbWF0Y2hbM107XG5cdFx0aWYgKG1hdGNoWzRdKSBub2RlLnNldEF0dHJpYnV0ZShtYXRjaFs0XSwgbWF0Y2hbN10gfHwgXCJcIik7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuXHR9XG5cdGlmIChjbGFzc05hbWUpIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNsaWNlKDEpO1xuXHRyZXR1cm4gbm9kZTtcbn07XG52YXIgaXNFbGVtZW50ID0gKGVsKSA9PiB7XG5cdHJldHVybiBlbCAhPSBudWxsICYmIChlbCBpbnN0YW5jZW9mIE5vZGUgfHwgZWwgaW5zdGFuY2VvZiBUZXh0IHx8IGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIENvbW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gZWwgOiBudWxsO1xufTtcbnZhciBpbmNsdWRlU2VsZiA9ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB7XG5cdHJldHVybiB0YXJnZXQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPz8gKHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSA/IHRhcmdldCA6IG51bGwpO1xufTtcbnZhciBoYXNQYXJlbnQgPSAoY3VycmVudCwgcGFyZW50KSA9PiB7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0aWYgKCEoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICgoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSA9PT0gKHBhcmVudD8uZWxlbWVudCA/PyBwYXJlbnQpKSByZXR1cm4gdHJ1ZTtcblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50ID8/IChjdXJyZW50LnBhcmVudE5vZGUgPT0gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pID8gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0IDogY3VycmVudD8ucGFyZW50Tm9kZSk7XG5cdH1cbn07XG52YXIgcGFzc2l2ZU9wdHMgPSB7fTtcbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG5cdGNvbnN0IHdyID0gdHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQ/LmRlcmVmID8gbmV3IFdlYWtSZWYodGFyZ2V0KSA6IHRhcmdldDtcblx0cmV0dXJuICgpID0+IHdyPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG5mdW5jdGlvbiByZW1vdmVFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxudmFyIGFkZEV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gYWRkRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogYWRkRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgYWRkRXZlbnRzTGlzdCA9IChlbCwgZXZlbnRzKSA9PiB7XG5cdGlmIChldmVudHMpIHtcblx0XHRsZXQgZW50cmllcyA9IGV2ZW50cztcblx0XHRpZiAoZXZlbnRzIGluc3RhbmNlb2YgTWFwKSBlbnRyaWVzID0gWy4uLmV2ZW50cy5lbnRyaWVzKCldO1xuXHRcdGVsc2UgZW50cmllcyA9IFsuLi5PYmplY3QuZW50cmllcyhldmVudHMpXTtcblx0XHRyZXR1cm4gZW50cmllcy5tYXAoKFtuYW1lLCBsaXN0XSkgPT4gKChpc0FycmF5T3JJdGVyYWJsZShsaXN0KSA/IFsuLi5saXN0XSA6IGxpc3QpID8/IFtdKT8ubWFwPy4oKGNicykgPT4ge1xuXHRcdFx0cmV0dXJuIGFkZEV2ZW50KGVsLCBuYW1lLCBjYnMpO1xuXHRcdH0pKTtcblx0fVxufTtcbnZhciByZW1vdmVFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGdldEV2ZW50VGFyZ2V0ID0gKGV2KSA9PiB7XG5cdGlmICghZXYpIHJldHVybiBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBub2RlO1xuXHR9XG5cdGNvbnN0IHRhcmdldCA9IGV2Py50YXJnZXQ7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gdGFyZ2V0O1xuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgY29udGFpbnNPclNlbGYgPSAoYSwgYiwgZXYpID0+IHtcblx0aWYgKGIgPT0gbnVsbCB8fCAhKGIgaW5zdGFuY2VvZiBOb2RlKSAmJiBiPy5lbGVtZW50ID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gYiB8fCAoYT8uZWxlbWVudCA/PyBhKSA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRjb25zdCBhRWwgPSBhPy5lbGVtZW50ID8/IGE7XG5cdFx0Y29uc3QgYkVsID0gYj8uZWxlbWVudCA/PyBiO1xuXHRcdGlmIChwYXRoLmluY2x1ZGVzKGFFbCkgJiYgcGF0aC5pbmNsdWRlcyhiRWwpKSB7XG5cdFx0XHRjb25zdCBhSW5kZXggPSBwYXRoLmluZGV4T2YoYUVsKTtcblx0XHRcdGNvbnN0IGJJbmRleCA9IHBhdGguaW5kZXhPZihiRWwpO1xuXHRcdFx0aWYgKGJJbmRleCA+PSAwICYmIGFJbmRleCA+PSAwICYmIGJJbmRleCA8IGFJbmRleCkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChhPy5jb250YWlucz8uKGI/LmVsZW1lbnQgPz8gYikgfHwgYT8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgTU9DRWxlbWVudCA9IChlbGVtZW50LCBzZWxlY3RvciwgZXYpID0+IHtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBwYXRoKSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG5cdFx0XHRpZiAobm9kZS5tYXRjaGVzPy4oc2VsZWN0b3IpKSByZXR1cm4gbm9kZTtcblx0XHR9XG5cdH1cblx0Y29uc3Qgc2VsZiA9IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWxlY3RvcikgPyBlbGVtZW50IDogbnVsbDtcblx0Y29uc3QgaG9zdCA9IChlbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID8/IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkpPy5ob3N0O1xuXHRjb25zdCBob3N0TWF0Y2hlZCA9IGhvc3Q/Lm1hdGNoZXM/LihzZWxlY3RvcikgPyBob3N0IDogbnVsbDtcblx0Y29uc3QgY2xvc2VzdCA9IGVsZW1lbnQ/LmNsb3Nlc3Q/LihzZWxlY3RvcikgPz8gc2VsZj8uY2xvc2VzdD8uKHNlbGVjdG9yKSA/PyBob3N0TWF0Y2hlZD8uY2xvc2VzdD8uKHNlbGVjdG9yKSA/PyBudWxsO1xuXHRyZXR1cm4gc2VsZiA/PyBjbG9zZXN0ID8/IGhvc3RNYXRjaGVkO1xufTtcbnZhciBNT0MgPSAoZWxlbWVudCwgc2VsZWN0b3IpID0+IHtcblx0cmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvcik7XG59O1xudmFyIGlzSW5Gb2N1cyA9IChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCwgZGlyID0gXCJwYXJlbnRcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKGVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmICFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSh7XG5cdFx0Y2hlY2tPcGFjaXR5OiB0cnVlLFxuXHRcdGNoZWNrVmlzaWJpbGl0eUNTUzogdHJ1ZVxuXHR9KSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoIWVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmIGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsICYmIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gIT09IFwiZml4ZWRcIikgcmV0dXJuIGZhbHNlO1xuXHRsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0d2hpbGUgKGFjdGl2ZSAmJiBhY3RpdmUuc2hhZG93Um9vdCAmJiBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50KSBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuXHRjb25zdCBpc0ZvY3VzZWQgPSBhY3RpdmUgPT09IGVsZW1lbnQgfHwgaGFzUGFyZW50KGFjdGl2ZSwgZWxlbWVudCk7XG5cdGNvbnN0IGlzSG92ZXJlZCA9IGVsZW1lbnQubWF0Y2hlcyhcIjpob3ZlclwiKTtcblx0aWYgKCFpc0ZvY3VzZWQgJiYgIWlzSG92ZXJlZCAmJiAhc2VsZWN0b3JPckVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKHNlbGVjdG9yT3JFbGVtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBzZWxlY3Rvck9yRWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKGRpciA9PT0gXCJwYXJlbnRcIikgcmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gaXNGb2N1c2VkID8gYWN0aXZlIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiOmhvdmVyXCIpIHx8IGVsZW1lbnQ7XG5cdFx0XHRcdGNvbnN0IGFsdENuZCA9ICEhTU9DRWxlbWVudCh0YXJnZXQsIHNlbGVjdG9yT3JFbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I/LihzZWxlY3Rvck9yRWxlbWVudCkgIT0gbnVsbCB8fCBlbGVtZW50Py5tYXRjaGVzPy4oc2VsZWN0b3JPckVsZW1lbnQpIHx8IGFsdENuZDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHNlbGVjdG9yT3JFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiBoYXNQYXJlbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpIHx8IGZhbHNlO1xuXHRcdFx0ZWxzZSByZXR1cm4gaGFzUGFyZW50KHNlbGVjdG9yT3JFbGVtZW50LCBlbGVtZW50KSB8fCBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvWm9vbS50c1xudmFyIGdldFpvb20gPSAoKSA9PiB7XG5cdGlmIChcImN1cnJlbnRDU1Nab29tXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdHJldHVybiBwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zY2FsaW5nXCIpIHx8IFwiMVwiKSB8fCAxO1xufTtcbnZhciB6b29tVmFsdWVzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xudmFyIHpvb21WYWx1ZXMgPSBnbG9iYWxUaGlzW3pvb21WYWx1ZXNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB6b29tT2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gem9vbVZhbHVlcy5nZXRPckluc2VydENvbXB1dGVkKGVsZW1lbnQsICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiLnVpLW9yaWVudGJveFwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCIudWktb3JpZW50Ym94XCIpIHx8IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYgKGNvbnRhaW5lcj8uem9vbSkgcmV0dXJuIGNvbnRhaW5lcj8uem9vbSB8fCAxO1xuXHRcdGlmIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgcmV0dXJuIGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdH0pO1xufTtcbnZhciBjaGFuZ2Vab29tID0gKHNjYWxlID0gMSkgPT4ge1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNjYWxpbmdcIiwgc2NhbGUpO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzY2FsaW5nXCIsIHtcblx0XHRkZXRhaWw6IHsgem9vbTogc2NhbGUgfSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpO1xuXHRyZXR1cm4gc2NhbGU7XG59O1xudmFyIGZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gIT0gbnVsbCA/IDEgOiB6b29tT2YoZWxlbWVudCkpIHx8IDE7XG59O1xudmFyIHVuZml4ZWRDbGllbnRab29tID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSA9PSBudWxsID8gMSA6IGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tKSB8fCAxO1xufTtcbnZhciBvcmllbnRPZiA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IChlbGVtZW50Py5tYXRjaGVzPy4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpID8gZWxlbWVudCA6IG51bGwpIHx8IGVsZW1lbnQ/LmNsb3Nlc3Q/LihcIltvcmllbnRdLCBbZGF0YS1taXhpbj1cXFwidWktb3JpZW50Ym94XFxcIl1cIikgfHwgZWxlbWVudDtcblx0aWYgKGNvbnRhaW5lcj8uaGFzQXR0cmlidXRlPy4oXCJvcmllbnRcIikpIHJldHVybiBwYXJzZUludChjb250YWluZXI/LmdldEF0dHJpYnV0ZT8uKFwib3JpZW50XCIpIHx8IFwiMFwiKSB8fCAwO1xuXHRpZiAoY29udGFpbmVyPy5vcmllbnQgIT0gbnVsbCAmJiBOdW1iZXIuaXNGaW5pdGUoTnVtYmVyKGNvbnRhaW5lci5vcmllbnQpKSkgcmV0dXJuIE51bWJlcihjb250YWluZXIub3JpZW50KSB8fCAwO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGNvbnRhaW5lcj8uc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcIi0tb3JpZW50XCIpIHx8ICh0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSA9PT0gXCJmdW5jdGlvblwiICYmIGNvbnRhaW5lciA/IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1vcmllbnRcIikgOiBcIlwiKSB8fCBcIlwiO1xuXHRcdGNvbnN0IG4gPSBwYXJzZUludChTdHJpbmcocmF3KS50cmltKCksIDEwKTtcblx0XHRpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbjtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gMDtcbn07XG52YXIgZ2V0Qm91bmRpbmdPcmllbnRSZWN0ID0gKGVsZW1lbnQsIG9yaWVudCA9IG51bGwpID0+IHtcblx0Y29uc3Qgem9vbSA9IHVuZml4ZWRDbGllbnRab29tKGVsZW1lbnQpIHx8IDE7XG5cdGNvbnN0IGJveCA9IGVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XG5cdGNvbnN0IG5ieCA9IHtcblx0XHRsZWZ0OiBib3g/LmxlZnQgLyB6b29tLFxuXHRcdHJpZ2h0OiBib3g/LnJpZ2h0IC8gem9vbSxcblx0XHR0b3A6IGJveD8udG9wIC8gem9vbSxcblx0XHRib3R0b206IGJveD8uYm90dG9tIC8gem9vbSxcblx0XHR3aWR0aDogYm94Py53aWR0aCAvIHpvb20sXG5cdFx0aGVpZ2h0OiBib3g/LmhlaWdodCAvIHpvb21cblx0fTtcblx0Y29uc3Qgb3JfaSA9IG9yaWVudCA/PyAob3JpZW50T2YoZWxlbWVudCkgfHwgMCk7XG5cdGNvbnN0IHZ2ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGw7XG5cdGNvbnN0IHNpemUgPSBbKCh2dj8ud2lkdGggPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRXaWR0aCA/PyB3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMSkgLyB6b29tLCAoKHZ2Py5oZWlnaHQgPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRIZWlnaHQgPz8gd2luZG93LmlubmVySGVpZ2h0KSB8fCAxKSAvIHpvb21dO1xuXHRjb25zdCBbbGVmdF8sIHRvcF9dID0gY3Z0X2NzX3RvX29zKFtuYngubGVmdCwgbmJ4LnRvcF0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbcmlnaHRfLCBib3R0b21fXSA9IGN2dF9jc190b19vcyhbbmJ4LnJpZ2h0LCBuYnguYm90dG9tXSwgc2l6ZSwgb3JfaSk7XG5cdGNvbnN0IFtsZWZ0LCByaWdodF0gPSBvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gW2xlZnRfLCByaWdodF9dIDogW3JpZ2h0XywgbGVmdF9dO1xuXHRjb25zdCBbdG9wLCBib3R0b21dID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMSA/IFt0b3BfLCBib3R0b21fXSA6IFtib3R0b21fLCB0b3BfXTtcblx0Y29uc3QgW3dpZHRoLCBoZWlnaHRdID0gb3JfaSAlIDIgPyBbbmJ4LmhlaWdodCwgbmJ4LndpZHRoXSA6IFtuYngud2lkdGgsIG5ieC5oZWlnaHRdO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aCxcblx0XHRoZWlnaHRcblx0fTtcbn07XG52YXIgYmJ3ID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBiYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtib3JkZXJCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoIDogZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xudmFyIGNidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQgOiBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBjYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQ7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9WaWV3cG9ydC50c1xudmFyIHJ1bldoZW5JZGxlID0gKGNiLCB0aW1lb3V0ID0gMTAwKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2soY2IsIHsgdGltZW91dCB9KTtcblx0cmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gY2Ioe1xuXHRcdGRpZFRpbWVvdXQ6IGZhbHNlLFxuXHRcdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcblx0fSksIDApO1xufTtcbnZhciBnZXRBdmFpbFNpemUgPSAoKSA9PiB7XG5cdGNvbnN0IGwgPSB0eXBlb2YgbWF0Y2hNZWRpYSAhPSBcInVuZGVmaW5lZFwiID8gbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyA6IGZhbHNlO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCB2dkJsb2NrID0gdnYgPyB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IGAke3Z2LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3Z2LmhlaWdodH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IGAke3Z2Lm9mZnNldExlZnR9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtdG9wXCI6IGAke3Z2Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh2di5zY2FsZSA/PyAxKVxuXHR9IDoge1xuXHRcdFwiLS12di13aWR0aFwiOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gYCR7d2luZG93LmlubmVyV2lkdGh9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0Y29uc3QgYXcgPSBzY3JlZW4/LmF2YWlsV2lkdGggKyBcInB4XCI7XG5cdFx0Y29uc3QgYWggPSBzY3JlZW4/LmF2YWlsSGVpZ2h0ICsgXCJweFwiO1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IE1hdGgubWluKHNjcmVlbj8ud2lkdGgsIHNjcmVlbj8uYXZhaWxXaWR0aCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmhlaWdodCwgc2NyZWVuPy5hdmFpbEhlaWdodCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tYXZhaWwtd2lkdGhcIjogbCA/IGFoIDogYXcsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGwgPyBhdyA6IGFoLFxuXHRcdFx0XCItLXZpZXctaGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uYXZhaWxIZWlnaHQsIHdpbmRvdz8uaW5uZXJIZWlnaHQpICsgXCJweFwiLFxuXHRcdFx0XCItLXBpeGVsLXJhdGlvXCI6IFN0cmluZyhkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLFxuXHRcdFx0Li4udnZCbG9ja1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtd2lkdGhcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXZpZXctaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXBpeGVsLXJhdGlvXCI6IFwiMVwiLFxuXHRcdC4uLnZ2QmxvY2tcblx0fTtcbn07XG52YXIgYXZhaWxTaXplID0gZ2V0QXZhaWxTaXplKCk7XG52YXIgY2xhc3NlcyA9IFtbXCI6cm9vdCwgOmhvc3QsIDpzY29wZVwiLCBhdmFpbFNpemVdXTtcbnZhciBvcmllbnRhdGlvbk51bWJlck1hcCA9IHtcblx0XCJwb3J0cmFpdC1wcmltYXJ5XCI6IDAsXG5cdFwibGFuZHNjYXBlLXByaW1hcnlcIjogMSxcblx0XCJwb3J0cmFpdC1zZWNvbmRhcnlcIjogMixcblx0XCJsYW5kc2NhcGUtc2Vjb25kYXJ5XCI6IDNcbn07XG52YXIgdXBkYXRlVlAgPSAoZXYpID0+IHtcblx0Y29uc3QgcnVsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0T2JqZWN0LmFzc2lnbihhdmFpbFNpemUsIGdldEF2YWlsU2l6ZSgpKTtcblx0T2JqZWN0LmVudHJpZXMoYXZhaWxTaXplKS5mb3JFYWNoKChbcHJvcE5hbWUsIHByb3BWYWx1ZV0pID0+IHtcblx0XHRjb25zdCBleGlzdHMgPSBydWxlPy5zdHlsZT8uZ2V0UHJvcGVydHlWYWx1ZShwcm9wTmFtZSk7XG5cdFx0aWYgKCFleGlzdHMgfHwgZXhpc3RzICE9IHByb3BWYWx1ZSkgcnVsZT8uc3R5bGU/LnNldFByb3BlcnR5Py4ocHJvcE5hbWUsIHByb3BWYWx1ZSB8fCBcIlwiLCBcIlwiKTtcblx0fSk7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50YXRpb24tc2Vjb25kYXJ5XCIsIHNjcmVlbj8ub3JpZW50YXRpb24/LnR5cGU/LmVuZHNXaXRoPy4oXCJzZWNvbmRhcnlcIikgPyBcIjFcIiA6IFwiMFwiKTtcbn07XG52YXIgZ2V0Q29ycmVjdE9yaWVudGF0aW9uID0gKCkgPT4ge1xuXHRsZXQgb3JpZW50YXRpb25UeXBlID0gc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZSB8fCBcInBvcnRyYWl0LXByaW1hcnlcIjtcblx0aWYgKCFnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIoKGRpc3BsYXktbW9kZTogZnVsbHNjcmVlbikgb3IgKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSkgb3IgKGRpc3BsYXktbW9kZTogd2luZG93LWNvbnRyb2xzLW92ZXJsYXkpKVwiKS5tYXRjaGVzKSB7XG5cdFx0aWYgKG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcImxhbmRzY2FwZVwiLCBcInBvcnRyYWl0XCIpO1xuXHRcdGVsc2UgaWYgKG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIikubWF0Y2hlcykgb3JpZW50YXRpb25UeXBlID0gb3JpZW50YXRpb25UeXBlLnJlcGxhY2UoXCJwb3J0cmFpdFwiLCBcImxhbmRzY2FwZVwiKTtcblx0fVxuXHRyZXR1cm4gb3JpZW50YXRpb25UeXBlO1xufTtcbnZhciBwYXNzaXZlT3B0cyQxID0geyBwYXNzaXZlOiB0cnVlIH07XG52YXIgd2hlbkFueVNjcmVlbkNoYW5nZXMgPSAoY2IpID0+IHtcblx0bGV0IHRpY2tpbmcgPSBmYWxzZTtcblx0Y29uc3QgdXBkYXRlID0gKCkgPT4ge1xuXHRcdGlmICghdGlja2luZykge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRcdFx0dXBkYXRlVlAoKTtcblx0XHRcdFx0Y2IoKTtcblx0XHRcdFx0dGlja2luZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0XHR0aWNraW5nID0gdHJ1ZTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBbXTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG5hdmlnYXRvcj8udmlydHVhbEtleWJvYXJkLCBcImdlb21ldHJ5Y2hhbmdlXCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93Py52aXN1YWxWaWV3cG9ydCwgXCJzY3JvbGxcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInJlc2l6ZVwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHNjcmVlbj8ub3JpZW50YXRpb24sIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQsIFwiZnVsbHNjcmVlbmNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIiksIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKSwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVwZGF0ZSgpO1xuXHRydW5XaGVuSWRsZSgoKSA9PiB1cGRhdGUoKSwgMTAwKTtcblx0cmV0dXJuICgpID0+IHVuc3Vic2NyaWJlcnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xufTtcbnZhciBmaXhPcmllbnRUb1NjcmVlbiA9IChlbGVtZW50KSA9PiB7XG5cdGlmICghZWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucz8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKSkge1xuXHRcdGVsZW1lbnQ/LmNsYXNzTGlzdD8uYWRkPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpO1xuXHRcdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcygoKSA9PiB7XG5cdFx0XHRjb25zdCBuZXh0ID0gb3JpZW50YXRpb25OdW1iZXJNYXA/LltnZXRDb3JyZWN0T3JpZW50YXRpb24oKV0gPz8gMDtcblx0XHRcdGVsZW1lbnQub3JpZW50ID0gbmV4dDtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlPy4oXCJvcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHRcdGVsZW1lbnQuc3R5bGU/LnNldFByb3BlcnR5Py4oXCItLW9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvTWVhc3VyZS50c1xudmFyIGN0eCA9IG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIGluaXRUZXh0U3R5bGUgPSAoZWxlbWVudCwgY3R4KSA9PiB7XG5cdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBcIlwiKTtcblx0aWYgKGN0eCAmJiBzdHlsZSkge1xuXHRcdGNvbnN0IGZvbnRXZWlnaHQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC13ZWlnaHRcIikgfHwgXCJub3JtYWxcIjtcblx0XHRjb25zdCBmb250U2l6ZSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikgfHwgXCIxNnB4XCI7XG5cdFx0Y29uc3QgZm9udEZhbWlseSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWZhbWlseVwiKSB8fCBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRcdGNvbnN0IGZvbnRTdHJldGNoID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc3RyZXRjaFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFN0cmV0Y2ggPSBmb250U3RyZXRjaC5pbmNsdWRlcyhcIiVcIikgPyBcIm5vcm1hbFwiIDogZm9udFN0cmV0Y2g7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmxldHRlclNwYWNpbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibGV0dGVyLXNwYWNpbmdcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udEtlcm5pbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1rZXJuaW5nXCIpIHx8IFwiYXV0b1wiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250VmFyaWFudENhcHMgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC12YXJpYW50LWNhcHNcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udCA9IGAke2ZvbnRXZWlnaHR9ICR7Zm9udFNpemV9ICR7Zm9udEZhbWlseX1gO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cbn07XG52YXIgbWVhc3VyZVRleHQgPSAodGV4dCwgZWxlbWVudCkgPT4ge1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShlbGVtZW50LCBjdHgpO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cblx0cmV0dXJuIHsgd2lkdGg6IG51bGwgfTtcbn07XG52YXIgbWVhc3VyZUlucHV0SW5Gb2N1cyA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQudmFsdWUuc2xpY2UoMCwgaW5wdXQuc2VsZWN0aW9uRW5kIHx8IDApO1xuXHRyZXR1cm4gbWVhc3VyZVRleHQodGV4dCwgaW5wdXQpO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbiA9IChpbnB1dCwgcG9pbnQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0Py52YWx1ZSB8fCBcIlwiO1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShpbnB1dCwgY3R4KTtcblx0XHRsZXQgY3VycmVudFdpZHRoID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1cnJlbnRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0LnNsaWNlKDAsIGkpKT8ud2lkdGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoID09IG51bGwpIHJldHVybiB0ZXh0Lmxlbmd0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggIT0gbnVsbCAmJiBjdXJyZW50V2lkdGggPj0gcG9pbnRbMF0pIHJldHVybiBNYXRoLm1heChpIC0gMSwgMCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0Lmxlbmd0aDtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50ID0gKGlucHV0LCBjbGllbnQpID0+IHtcblx0Y29uc3QgYm94ID0gaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IHBvaW50ID0gW2NsaWVudFswXSAtIGJveC5sZWZ0IC8gdW5maXhlZENsaWVudFpvb20oKSwgY2xpZW50WzFdIC0gYm94LnRvcCAvIHVuZml4ZWRDbGllbnRab29tKCldO1xuXHRyZXR1cm4gY29tcHV0ZUNhcmV0UG9zaXRpb24oaW5wdXQsIHBvaW50KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9MYXVuY2hlckdyaWQudHNcbnZhciByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCA9IChlbCwgbGF5b3V0T3ZlcnJpZGUpID0+IHtcblx0Y29uc3QgYyA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1jb2x1bW5zXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgciA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1yb3dzXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgYmFzZSA9IG5vcm1hbGl6ZUdyaWRMYXlvdXQobGF5b3V0T3ZlcnJpZGUgPz8gWzQsIDhdKTtcblx0cmV0dXJuIFtOdW1iZXIuaXNGaW5pdGUoYykgJiYgYyA+IDAgPyBjIDogYmFzZVswXSwgTnVtYmVyLmlzRmluaXRlKHIpICYmIHIgPiAwID8gciA6IGJhc2VbMV1dO1xufTtcbnZhciByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQgPSAoZ3JpZFN5c3RlbSwgY2xpZW50UG9pbnQsIGFyZ3MsIG1vZGUgPSBcImZsb29yXCIpID0+IHtcblx0aWYgKCFncmlkU3lzdGVtKSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCByZWN0ID0gZ3JpZFN5c3RlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRpZiAoIXJlY3QpIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IGxheW91dCA9IHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50KGdyaWRTeXN0ZW0sIGFyZ3M/LmxheW91dCk7XG5cdGNvbnN0IG9yaWVudCA9IG9yaWVudE9mKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBjcyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBwbCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdMZWZ0KSB8fCAwO1xuXHRjb25zdCBwdCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdUb3ApIHx8IDA7XG5cdGNvbnN0IHByID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1JpZ2h0KSB8fCAwO1xuXHRjb25zdCBwYiA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdCb3R0b20pIHx8IDA7XG5cdGNvbnN0IGNvbnRlbnRXID0gTWF0aC5tYXgoMSwgKHJlY3Qud2lkdGggfHwgZ3JpZFN5c3RlbS5jbGllbnRXaWR0aCB8fCAxKSAtIHBsIC0gcHIpO1xuXHRjb25zdCBjb250ZW50SCA9IE1hdGgubWF4KDEsIChyZWN0LmhlaWdodCB8fCBncmlkU3lzdGVtLmNsaWVudEhlaWdodCB8fCAxKSAtIHB0IC0gcGIpO1xuXHRjb25zdCBjc0Nvb3JkID0gWyhjbGllbnRQb2ludD8uWzBdIHx8IDApIC0gcmVjdC5sZWZ0IC0gcGwsIChjbGllbnRQb2ludD8uWzFdIHx8IDApIC0gcmVjdC50b3AgLSBwdF07XG5cdHJldHVybiByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwoY3NDb29yZCwgW2NvbnRlbnRXLCBjb250ZW50SF0sIGxheW91dCwgb3JpZW50LCB7XG5cdFx0bW9kZSxcblx0XHRyZWRpcmVjdDoge1xuXHRcdFx0aXRlbTogYXJncz8uaXRlbSxcblx0XHRcdGxpc3Q6IGFyZ3M/Lmxpc3QsXG5cdFx0XHRpdGVtczogYXJncz8uaXRlbXNcblx0XHR9XG5cdH0pO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL0FuaW1hdGlvbi50c1xudmFyIGFuaW1hdGVTaG93ID0gYXN5bmMgKHRhcmdldCkgPT4ge1xuXHRjb25zdCBhbmltYXRpb25Eb25lID0gKCkgPT4ge1xuXHRcdGlmICghdGFyZ2V0Py5oYXNBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpKSB7XG5cdFx0XHR0YXJnZXQ/LnJlbW92ZUF0dHJpYnV0ZT8uKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKTtcblx0XHRcdHRhcmdldD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcInUyLWFwcGVhclwiLCB7XG5cdFx0XHRcdGRldGFpbDoge30sXG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdH07XG5cdGlmICghdGFyZ2V0Py5oYXNBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpICYmIHRhcmdldD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcInUyLWJlZm9yZS1zaG93XCIsIHtcblx0XHRkZXRhaWw6IHt9LFxuXHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHR9KSkpIHtcblx0XHRpZiAoIW1hdGNoTWVkaWEoXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiKS5tYXRjaGVzICYmICF0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKSAmJiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtaW5zdGFudFwiKSAmJiB0YXJnZXQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikgPT0gbnVsbCkgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIiwgXCJcIik7XG5cdFx0aWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpICYmIHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSA9PSBudWxsKSB7XG5cdFx0XHRjb25zdCBhbmltYXRlID0gdGFyZ2V0LmFuaW1hdGUoW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogMCxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRkaXNwbGF5OiBcIm5vbmVcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogLjAxLFxuXHRcdFx0XHRcdFwiLS1vcGFjaXR5XCI6IDAsXG5cdFx0XHRcdFx0XCItLXNjYWxlXCI6IC44LFxuXHRcdFx0XHRcdGRpc3BsYXk6IFwibm9uZVwiLFxuXHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdFx0b2Zmc2V0OiAxLFxuXHRcdFx0XHRcdFwiLS1vcGFjaXR5XCI6IDEsXG5cdFx0XHRcdFx0XCItLXNjYWxlXCI6IDEsXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJyZXZlcnQtbGF5ZXJcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcInJldmVydC1sYXllclwiXG5cdFx0XHRcdH1cblx0XHRcdF0sIHtcblx0XHRcdFx0ZHVyYXRpb246IGlzTW9iaWxlKCkgPyAxMDAgOiA4MCxcblx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRkZWxheTogMFxuXHRcdFx0fSk7XG5cdFx0XHRsZXQgZG9uZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgZW5kQW5pbWF0aW9uID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoZG9uZSkgcmV0dXJuO1xuXHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRzPy5mb3JFYWNoPy4oKGV2ZW50KSA9PiBldmVudD8uKCkpO1xuXHRcdFx0XHRhbmltYXRlLmN1cnJlbnRUaW1lID0gMTtcblx0XHRcdFx0YW5pbWF0ZS5maW5pc2goKTtcblx0XHRcdFx0YW5pbWF0aW9uRG9uZT8uKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZXZlbnRzID0gYWRkRXZlbnRzKHRhcmdldCwge1xuXHRcdFx0XHRcInUyLWJlZm9yZS1oaWRlXCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFwidTItYmVmb3JlLXNob3dcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XVxuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBhbmltYXRlLmZpbmlzaGVkO1xuXHRcdFx0ZW5kQW5pbWF0aW9uPy4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgeyByZXNvbHZlLCByZWplY3QsIHByb21pc2UgfSA9IFByb21pc2Uud2l0aFJlc29sdmVycygpO1xuXHRcdFx0Y29uc3QgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpO1xuXHRcdFx0bGV0IGRvbmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGVuZEFuaW1hdGlvbiA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdGV2ZW50cz8uZm9yRWFjaD8uKChldmVudCkgPT4gZXZlbnQ/LigpKTtcblx0XHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKTtcblx0XHRcdFx0cmVzb2x2ZShwZXJmb3JtYW5jZS5ub3coKSk7XG5cdFx0XHRcdGFuaW1hdGlvbkRvbmU/LigpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGV2ZW50cyA9IGFkZEV2ZW50cyh0YXJnZXQsIHtcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtaGlkZVwiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRcInUyLWJlZm9yZS1zaG93XCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV1cblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgcHJvbWlzZTtcblx0XHRcdGVuZEFuaW1hdGlvbj8uKCk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGFuaW1hdGVIaWRlID0gYXN5bmMgKHRhcmdldCkgPT4ge1xuXHRjb25zdCBhbmltYXRpb25Eb25lID0gKCkgPT4ge1xuXHRcdGlmICh0YXJnZXQ/Lmhhc0F0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikpIHtcblx0XHRcdHRhcmdldD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpO1xuXHRcdFx0dGFyZ2V0Py5kaXNwYXRjaEV2ZW50Py4obmV3IEN1c3RvbUV2ZW50KFwidTItaGlkZGVuXCIsIHtcblx0XHRcdFx0ZGV0YWlsOiB7fSxcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fTtcblx0aWYgKHRhcmdldD8uaGFzQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSAmJiB0YXJnZXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJ1Mi1iZWZvcmUtaGlkZVwiLCB7XG5cdFx0ZGV0YWlsOiB7fSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpKSB7XG5cdFx0aWYgKCFtYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIikubWF0Y2hlcyAmJiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIikgJiYgIXRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWluc3RhbnRcIikpIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIsIFwiXCIpO1xuXHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKSkge1xuXHRcdFx0Y29uc3QgYW5pbWF0ZSA9IHRhcmdldC5hbmltYXRlKFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IDAsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJub25lXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IC45OSxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogMSxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRkaXNwbGF5OiBcIm5vbmVcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9XG5cdFx0XHRdLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMjAsXG5cdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0ZGVsYXk6IDBcblx0XHRcdH0pO1xuXHRcdFx0bGV0IGRvbmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGVuZEFuaW1hdGlvbiA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdGV2ZW50cz8uZm9yRWFjaD8uKChldmVudCkgPT4gZXZlbnQ/LigpKTtcblx0XHRcdFx0YW5pbWF0ZS5jdXJyZW50VGltZSA9IDE7XG5cdFx0XHRcdGFuaW1hdGUuZmluaXNoKCk7XG5cdFx0XHRcdGFuaW1hdGlvbkRvbmU/LigpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGV2ZW50cyA9IGFkZEV2ZW50cyh0YXJnZXQsIHsgXCJ1Mi1iZWZvcmUtc2hvd1wiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdH1dIH0pO1xuXHRcdFx0YXdhaXQgYW5pbWF0ZS5maW5pc2hlZDtcblx0XHRcdGVuZEFuaW1hdGlvbj8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHsgcmVzb2x2ZSwgcmVqZWN0LCBwcm9taXNlIH0gPSBQcm9taXNlLndpdGhSZXNvbHZlcnMoKTtcblx0XHRcdGNvbnN0IHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNvbHZlKTtcblx0XHRcdGxldCBkb25lID0gZmFsc2U7XG5cdFx0XHRjb25zdCBlbmRBbmltYXRpb24gPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChkb25lKSByZXR1cm47XG5cdFx0XHRcdGRvbmUgPSB0cnVlO1xuXHRcdFx0XHRldmVudHM/LmZvckVhY2g/LigoZXZlbnQpID0+IGV2ZW50Py4oKSk7XG5cdFx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSk7XG5cdFx0XHRcdHJlc29sdmUocGVyZm9ybWFuY2Uubm93KCkpO1xuXHRcdFx0XHRhbmltYXRpb25Eb25lPy4oKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBldmVudHMgPSBhZGRFdmVudHModGFyZ2V0LCB7XG5cdFx0XHRcdFwidTItYmVmb3JlLWhpZGVcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtc2hvd1wiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dXG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IHByb21pc2U7XG5cdFx0XHRlbmRBbmltYXRpb24/LigpO1xuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL09ic2VydmVyLnRzXG52YXIgb25Cb3JkZXJPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkJvcmRlck9ic2VydmVcIik7XG52YXIgb25Cb3JkZXJPYnNlcnZlJDEgPSBnbG9iYWxUaGlzW29uQm9yZGVyT2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9uQ29udGVudE9ic2VydmVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQ29udGVudE9ic2VydmVcIik7XG52YXIgb25Db250ZW50T2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkNvbnRlbnRPYnNlcnZlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdW53cmFwRnJvbVF1ZXJ5ID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5jdXJyZW50ID09IFwib2JqZWN0XCIpIGVsZW1lbnQgPSBlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQ/LmN1cnJlbnQgPz8gKHR5cGVvZiBlbGVtZW50Py5zZWxmID09IFwib2JqZWN0XCIgPyBlbGVtZW50Py5zZWxmIDogbnVsbCkgPz8gZWxlbWVudDtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIG9ic2VydmVDb250ZW50Qm94ID0gKGVsZW1lbnQsIGNiKSA9PiB7XG5cdGlmICghb25Db250ZW50T2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihjb250ZW50Qm94U2l6ZSwgb2JzZXJ2ZXIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYj8uKHtcblx0XHRcdGlubGluZVNpemU6IGVsZW1lbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRibG9ja1NpemU6IGVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdG9uQ29udGVudE9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxuXHRvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5wdXNoPy4oY2IpO1xuXHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUJvcmRlckJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQm9yZGVyT2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5ib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGJvcmRlckJveFNpemUgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoYm9yZGVyQm94U2l6ZSkgY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYj8uKGJvcmRlckJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50Lm9mZnNldEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkJvcmRlck9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiYm9yZGVyLWJveFwiIH0pO1xuXHR9XG5cdG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LmluZGV4T2YoY2IpIHx8IC0xLCAxKSB9O1xufTtcbnZhciBvYnNlcnZlQXR0cmlidXRlID0gKGVsZW1lbnQsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5zZWxlY3RvciA9PSBcInN0cmluZ1wiKSByZXR1cm4gb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IoZWxlbWVudCwgZWxlbWVudD8uc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldCgoYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXSkubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XVxuXHR9KTtcblx0YXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IGNiKHtcblx0XHR0YXJnZXQ6IGVsZW1lbnQsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdG9sZFZhbHVlOiBlbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSk7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IgPSAoZWxlbWVudCwgc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoWy4uLmF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV1dLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRjb25zdCBhZGRlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGFkZGVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBBcnJheS5mcm9tKGVsPy5xdWVyeVNlbGVjdG9yQWxsPy4oc2VsZWN0b3IpIHx8IFtdKSkpO1xuXHRcdFx0cmVtb3ZlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBBcnJheS5mcm9tKGVsPy5xdWVyeVNlbGVjdG9yQWxsPy4oc2VsZWN0b3IpIHx8IFtdKSkpO1xuXHRcdFx0Wy4uLm5ldyBTZXQoYWRkZWROb2RlcyldLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzPy4oc2VsZWN0b3IpKT8ubWFwPy4oKHRhcmdldCkgPT4ge1xuXHRcdFx0XHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuXHRcdFx0XHRcdGNiKHtcblx0XHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHRcdFx0XHRcdH0sIG9ic2VydmVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKG11dGF0aW9uLnRhcmdldD8ubWF0Y2hlcz8uKHNlbGVjdG9yKSAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlXG5cdH0pO1xuXHRbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0ubWFwKCh0YXJnZXQpID0+IGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSkpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yID0gXCIqXCIsIGNiID0gKG11dCwgb2JzKSA9PiB7fSkgPT4ge1xuXHRjb25zdCB1bndyYXBOb2Rlc0J5U2VsZWN0b3IgPSAobm9kZXMpID0+IHtcblx0XHRjb25zdCAkbm9kZXMgPSBBcnJheS5mcm9tKG5vZGVzIHx8IFtdKSB8fCBbXTtcblx0XHQkbm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gQXJyYXkuZnJvbShlbD8ucXVlcnlTZWxlY3RvckFsbD8uKHNlbGVjdG9yKSB8fCBbXSkpKTtcblx0XHRyZXR1cm4gWy4uLkFycmF5LmZyb20obmV3IFNldCgkbm9kZXMpLnZhbHVlcygpKV0uZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXM/LihzZWxlY3RvcikpO1xuXHR9O1xuXHRsZXQgb2JSZWYgPSBudWxsO1xuXHRjb25zdCBoYW5kbGVNdXRhdGlvbiA9IChtdXRhdGlvbikgPT4ge1xuXHRcdGNvbnN0IG9ic2VydmVyID0gb2JSZWY/LmRlcmVmPy4oKTtcblx0XHRjb25zdCBhZGRlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuXHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuXHRcdGlmIChhZGRlZE5vZGVzLmxlbmd0aCA+IDAgfHwgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdFx0dHlwZTogbXV0YXRpb24udHlwZSxcblx0XHRcdHRhcmdldDogbXV0YXRpb24udGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IG11dGF0aW9uLm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IG11dGF0aW9uLm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiBtdXRhdGlvbi5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzLFxuXHRcdFx0cmVtb3ZlZE5vZGVzXG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlT3V0Q29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUZvY3VzQ2xpY2sgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBmYWN0b3JzID0ge1xuXHRcdHBhc3NpdmU6IHRydWUsXG5cdFx0Y2FwdHVyZTogZmFsc2Vcblx0fTtcblx0aWYgKHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpICYmIHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsZWN0b3I/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmZvY3VzXCIpICYmIHNlbGVjdG9yPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiBzZWxlY3Rvcj8uaW5jbHVkZXM/LihcIjpmb2N1cy12aXNpYmxlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSBoYW5kbGVNdXRhdGlvbihtdXRhdGlvbik7XG5cdH0pO1xuXHRvYlJlZiA9IG5ldyBXZWFrUmVmKG9ic2VydmVyKTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWVcblx0fSk7XG5cdGNvbnN0IHNlbGVjdGVkID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblx0aWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdGFkZGVkTm9kZXM6IHNlbGVjdGVkLFxuXHRcdHJlbW92ZWROb2RlczogW11cblx0fSwgb2JzZXJ2ZXIpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvQXBwZWFyLnRzXG52YXIgaW5pdFZpc2liaWxpdHkgPSBhc3luYyAoUk9PVCA9IGRvY3VtZW50LmJvZHkpID0+IHtcblx0b2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IoUk9PVCwgXCIqXCIsIFwiZGF0YS1oaWRkZW5cIiwgKG11dGF0aW9uLCBvYnNlcnZlcikgPT4ge1xuXHRcdGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09IFwiZGF0YS1oaWRkZW5cIikge1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0O1xuXHRcdFx0aWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhpZGRlblwiKSAhPT0gbXV0YXRpb24ub2xkVmFsdWUpIFByb21pc2U/LnRyeT8uKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhpZGRlblwiKSAhPSBudWxsID8gYW5pbWF0ZUhpZGUgOiBhbmltYXRlU2hvdywgdGFyZ2V0LCBvYnNlcnZlcik/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvU2hhcGUudHNcbnZhciBXYXZ5U2hhcGVkQ2lyY2xlID0gKHN0ZXBzID0gMTAwLCBhbXBsaXR1ZGUgPSAuMDUsIGZyZXEgPSA4KSA9PiB7XG5cdGNvbnN0IHBvaW50cyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzOyBpKyspIHBvaW50cy5wdXNoKGkgLyBzdGVwcyk7XG5cdGNvbnN0IGFuZ2xlID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoJHtzdGVwfXJhZCAqIHBpICogMilgO1xuXHR9O1xuXHRjb25zdCB2YXJpYW50ID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoY2FsYyhjb3MoY2FsYyh2YXIoLS1jbGlwLWZyZXEsIDgpICogJHthbmdsZShzdGVwKX0pKSAqIDAuNSArIDAuNSkgKiB2YXIoLS1jbGlwLWFtcGxpdHVkZSwgMCkpYDtcblx0fTtcblx0Y29uc3QgZnVuYyA9IChzdGVwKSA9PiBbYGNhbGMoY2FsYygwLjUgKyBjYWxjKGNvcygke2FuZ2xlKHN0ZXApfSkgKiBjYWxjKDAuNSAtICR7dmFyaWFudChzdGVwKX0pKSkgKiB2YXIoLS1pY29uLXNpemUsIDEwMCUpKWAsIGBjYWxjKGNhbGMoMC41ICsgY2FsYyhzaW4oJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgXTtcblx0cmV0dXJuIHtcblx0XHRcIi0tY2xpcC1hbXBsaXR1ZGVcIjogYW1wbGl0dWRlLFxuXHRcdFwiLS1jbGlwLWZyZXFcIjogZnJlcSxcblx0XHRcIi0tY2xpcC1wYXRoXCI6IGBwb2x5Z29uKCR7cG9pbnRzLm1hcCgoc3RlcCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZ1bmMoc3RlcCkuam9pbihcIiBcIik7XG5cdFx0fSkuam9pbihcIiwgXCIpfSlgXG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vU3R5bGUudHNcbnZhciBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0ID0gKCkgPT4gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGdsb2JhbFRoaXMuQ1NTU3R5bGVTaGVldCA9PT0gXCJmdW5jdGlvblwiO1xudmFyIGNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudCA9IChjc3MpID0+IHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIgJiYgL0BpbXBvcnRcXGIvaS50ZXN0KGNzcyk7XG52YXIgT1dORVIgPSBcIkRPTVwiO1xudmFyIHN0eWxlRWxlbWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpIDogbnVsbDtcbmlmIChzdHlsZUVsZW1lbnQpIHtcblx0dHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oc3R5bGVFbGVtZW50KTtcblx0c3R5bGVFbGVtZW50LmRhdGFzZXQub3duZXIgPSBPV05FUjtcbn1cbnZhciBzZXRTdHlsZVVSTCA9IChiYXNlLCB1cmwsIGxheWVyID0gXCJcIikgPT4ge1xuXHRiYXNlWzBdW2Jhc2VbMV1dID0gYmFzZVsxXSA9PSBcImlubmVySFRNTFwiID8gYEBpbXBvcnQgdXJsKFwiJHt1cmx9XCIpICR7bGF5ZXIgJiYgdHlwZW9mIGxheWVyID09IFwic3RyaW5nXCIgPyBgbGF5ZXIoJHtsYXllcn0pYCA6IFwiXCJ9O2AgOiB1cmw7XG59O1xudmFyIHNldFN0eWxlUnVsZXMgPSAoY2xhc3NlcykgPT4ge1xuXHRyZXR1cm4gY2xhc3Nlcz8ubWFwPy4oKGFyZ3MpID0+IHNldFN0eWxlUnVsZSguLi5hcmdzKSk7XG59O1xudmFyIGdldFN0eWxlTGF5ZXIgPSAobGF5ZXJOYW1lLCBzaGVldCkgPT4ge1xuXHRzaGVldCB8fD0gc3R5bGVFbGVtZW50Py5zaGVldDtcblx0bGV0IGxheWVyUnVsZUluZGV4ID0gQXJyYXkuZnJvbShzaGVldD8uY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocnVsZSkgPT4gcnVsZSBpbnN0YW5jZW9mIENTU0xheWVyQmxvY2tSdWxlICYmIHJ1bGU/Lm5hbWUgPT09IGxheWVyTmFtZSk7XG5cdGxldCBsYXllclJ1bGU7XG5cdGlmIChsYXllclJ1bGVJbmRleCA9PT0gLTEgJiYgc2hlZXQpIGxheWVyUnVsZSA9IHNoZWV0Py5jc3NSdWxlcz8uW2xheWVyUnVsZUluZGV4ID0gc2hlZXQuaW5zZXJ0UnVsZShgQGxheWVyICR7bGF5ZXJOYW1lfSB7fWApXTtcblx0ZWxzZSBsYXllclJ1bGUgPSBzaGVldD8uY3NzUnVsZXM/LltsYXllclJ1bGVJbmRleF07XG5cdHJldHVybiBsYXllclJ1bGU7XG59O1xudmFyIHN0eWxlSWRDb3VudGVyID0gMDtcbnZhciBpc1NoYWRvd1Jvb3QgPSAodmFsdWUpID0+IHR5cGVvZiBTaGFkb3dSb290ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbnZhciBpc0RvY3VtZW50ID0gKHZhbHVlKSA9PiB0eXBlb2YgRG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBEb2N1bWVudDtcbnZhciBpc0VsZW1lbnQkMSA9ICh2YWx1ZSkgPT4gdHlwZW9mIEVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50O1xudmFyIGVzY2FwZUNTU0lkZW50aWZpZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIENTUy5lc2NhcGUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIENTUy5lc2NhcGUodmFsdWUpO1xuXHRyZXR1cm4gQXJyYXkuZnJvbSh2YWx1ZSkubWFwKChjaGFyKSA9PiBgXFxcXCR7Y2hhci5jb2RlUG9pbnRBdCgwKS50b1N0cmluZygxNil9IGApLmpvaW4oXCJcIik7XG59O1xudmFyIGNyZWF0ZVN0eWxlSWQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgY3J5cHRvICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjcnlwdG8ucmFuZG9tVVVJRCA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0cmV0dXJuIGB1eC0ke0RhdGUubm93KCkudG9TdHJpbmcoMzYpfS0keygrK3N0eWxlSWRDb3VudGVyKS50b1N0cmluZygzNil9YDtcbn07XG52YXIgam9pblNjb3BlZFNlbGVjdG9yID0gKHNjb3BlLCBzZWxlY3RvcikgPT4ge1xuXHRzZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKTtcblx0aWYgKCFzY29wZSkgcmV0dXJuIHNlbGVjdG9yO1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gc2NvcGU7XG5cdGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKFwiOjpcIikpIHJldHVybiBgJHtzY29wZX0ke3NlbGVjdG9yfWA7XG5cdHJldHVybiBgJHtzY29wZX0gJHtzZWxlY3Rvcn1gO1xufTtcbnZhciBmaW5kU3R5bGVSdWxlID0gKHNoZWV0LCBmdWxsU2VsZWN0b3IsIHNjb3BlLCBzZWxlY3RvcikgPT4ge1xuXHRjb25zdCBydWxlcyA9IEFycmF5LmZyb20oc2hlZXQ/LmNzc1J1bGVzIHx8IFtdKTtcblx0Y29uc3QgZXhwZWN0ZWQgPSBmdWxsU2VsZWN0b3IudHJpbSgpO1xuXHRjb25zdCByZXF1ZXN0ZWQgPSBzZWxlY3Rvci50cmltKCk7XG5cdHJldHVybiBydWxlcy5maW5kSW5kZXgoKHJ1bGUpID0+IHtcblx0XHRpZiAoIShydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlKSkgcmV0dXJuIGZhbHNlO1xuXHRcdGNvbnN0IGFjdHVhbCA9IHJ1bGUuc2VsZWN0b3JUZXh0Py50cmltPy4oKSA/PyBcIlwiO1xuXHRcdGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSByZXR1cm4gdHJ1ZTtcblx0XHRpZiAocmVxdWVzdGVkICYmIGFjdHVhbC5lbmRzV2l0aChyZXF1ZXN0ZWQpKSByZXR1cm4gYWN0dWFsLnNsaWNlKDAsIGFjdHVhbC5sZW5ndGggLSByZXF1ZXN0ZWQubGVuZ3RoKS50cmltKCkgPT09IHNjb3BlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59O1xudmFyIGdldFN0eWxlUnVsZSA9IChzZWxlY3Rvciwgc2hlZXQsIGxheWVyTmFtZSA9IFwidXgtcXVlcnlcIiwgYmFzaXMgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBpc1NoYWRvd1Jvb3QoYmFzaXMpIHx8IGlzRG9jdW1lbnQoYmFzaXMpID8gYmFzaXMgOiBiYXNpcz8uZ2V0Um9vdE5vZGU/LigpID8/ICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xuXHRjb25zdCBiYXNpc0VsZW1lbnQgPSBpc0VsZW1lbnQkMShiYXNpcykgPyBiYXNpcyA6IG51bGw7XG5cdGxldCBzY29wZSA9IFwiXCI7XG5cdGlmIChiYXNpc0VsZW1lbnQ/LmlkKSBzY29wZSA9IGAjJHtlc2NhcGVDU1NJZGVudGlmaWVyKGJhc2lzRWxlbWVudC5pZCl9YDtcblx0ZWxzZSBpZiAoYmFzaXNFbGVtZW50KSB7XG5cdFx0bGV0IHN0eWxlSWQgPSBiYXNpc0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZS1pZFwiKTtcblx0XHRpZiAoIXN0eWxlSWQpIHtcblx0XHRcdHN0eWxlSWQgPSBjcmVhdGVTdHlsZUlkKCk7XG5cdFx0XHRiYXNpc0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZS1pZFwiLCBzdHlsZUlkKTtcblx0XHR9XG5cdFx0c2NvcGUgPSBgW2RhdGEtc3R5bGUtaWQ9XCIke2VzY2FwZUNTU0lkZW50aWZpZXIoc3R5bGVJZCl9XCJdYDtcblx0fSBlbHNlIGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkpIHNjb3BlID0gXCI6aG9zdFwiO1xuXHRlbHNlIGlmIChpc0RvY3VtZW50KHJvb3QpKSBzY29wZSA9IFwiOnJvb3RcIjtcblx0bGV0IHN0eWxlRWxlbWVudCA9IG51bGw7XG5cdGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLXV4LXF1ZXJ5XVwiKTtcblx0XHRpZiAoIXN0eWxlRWxlbWVudCAmJiB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0XHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXV4LXF1ZXJ5XCIsIFwiXCIpO1xuXHRcdFx0cm9vdC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0fSBlbHNlIHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudEdsb2JhbCgpO1xuXHRzaGVldCB8fD0gc3R5bGVFbGVtZW50Py5zaGVldDtcblx0aWYgKCFzaGVldCkgcmV0dXJuO1xuXHRpZiAobGF5ZXJOYW1lKSByZXR1cm4gZ2V0U3R5bGVSdWxlKHNlbGVjdG9yLCBnZXRTdHlsZUxheWVyKGxheWVyTmFtZSwgc2hlZXQpLCBudWxsLCBiYXNpcyk7XG5cdGNvbnN0IGZ1bGxTZWxlY3RvciA9IGpvaW5TY29wZWRTZWxlY3RvcihzY29wZSwgc2VsZWN0b3IpO1xuXHRsZXQgcnVsZUlkID0gZmluZFN0eWxlUnVsZShzaGVldCwgZnVsbFNlbGVjdG9yLCBzY29wZSwgc2VsZWN0b3IpO1xuXHRpZiAocnVsZUlkID09PSAtMSkgcnVsZUlkID0gc2hlZXQuaW5zZXJ0UnVsZShgJHtmdWxsU2VsZWN0b3J9IHt9YCk7XG5cdHJldHVybiBzaGVldC5jc3NSdWxlcz8uW3J1bGVJZF07XG59O1xuZnVuY3Rpb24gc3R5bGVFbGVtZW50R2xvYmFsKCkge1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50ID8/IG51bGw7XG59XG52YXIgaGFzVHlwZWRPTSA9IHR5cGVvZiBDU1NTdHlsZVZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBDU1NVbml0VmFsdWUgIT09IFwidW5kZWZpbmVkXCI7XG52YXIgaXNTdHlsZVZhbHVlID0gKHZhbCkgPT4gaGFzVHlwZWRPTSAmJiB2YWwgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlO1xudmFyIGlzVW5pdFZhbHVlID0gKHZhbCkgPT4gaGFzVHlwZWRPTSAmJiB2YWwgaW5zdGFuY2VvZiBDU1NVbml0VmFsdWU7XG52YXIgc2V0UHJvcGVydHlJZk5vdEVxdWFsID0gKHN0eWxlUmVmLCBrZWJhYiwgdmFsdWUsIGltcG9ydGFuY2UgPSBcIlwiKSA9PiB7XG5cdGlmICghc3R5bGVSZWYgfHwgIWtlYmFiKSByZXR1cm47XG5cdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0aWYgKHN0eWxlUmVmLmdldFByb3BlcnR5VmFsdWUoa2ViYWIpICE9PSBcIlwiKSBzdHlsZVJlZi5yZW1vdmVQcm9wZXJ0eShrZWJhYik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdHlsZVJlZi5nZXRQcm9wZXJ0eVZhbHVlKGtlYmFiKSAhPT0gdmFsdWUpIHN0eWxlUmVmLnNldFByb3BlcnR5KGtlYmFiLCB2YWx1ZSwgaW1wb3J0YW5jZSk7XG59O1xudmFyIHNldFN0eWxlUHJvcGVydHlUeXBlZCA9IChlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0aWYgKCFlbGVtZW50IHx8ICFuYW1lKSByZXR1cm4gZWxlbWVudDtcblx0Y29uc3Qga2ViYWIgPSBjYW1lbFRvS2ViYWIobmFtZSk7XG5cdGNvbnN0IHN0eWxlUmVmID0gZWxlbWVudC5zdHlsZTtcblx0Y29uc3Qgc3R5bGVNYXBSZWYgPSBlbGVtZW50LmF0dHJpYnV0ZVN0eWxlTWFwID8/IGVsZW1lbnQuc3R5bGVNYXA7XG5cdGlmICghaGFzVHlwZWRPTSB8fCAhc3R5bGVNYXBSZWYpIHJldHVybiBzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2soZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UpO1xuXHRsZXQgdmFsID0gaGFzVmFsdWUodmFsdWUpICYmICEoaXNTdHlsZVZhbHVlKHZhbHVlKSB8fCBpc1VuaXRWYWx1ZSh2YWx1ZSkpID8gdmFsdWU/LnZhbHVlIDogdmFsdWU7XG5cdGlmICh2YWwgPT0gbnVsbCkge1xuXHRcdHN0eWxlTWFwUmVmLmRlbGV0ZT8uKGtlYmFiKTtcblx0XHRpZiAoc3R5bGVSZWYpIHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIG51bGwsIGltcG9ydGFuY2UpO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cdGlmIChpc1N0eWxlVmFsdWUodmFsKSkge1xuXHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0aWYgKGlzVW5pdFZhbHVlKHZhbCkgJiYgaXNVbml0VmFsdWUob2xkKSkge1xuXHRcdFx0aWYgKG9sZC52YWx1ZSA9PT0gdmFsLnZhbHVlICYmIG9sZC51bml0ID09PSB2YWwudW5pdCkgcmV0dXJuIGVsZW1lbnQ7XG5cdFx0fSBlbHNlIGlmIChvbGQgPT09IHZhbCkgcmV0dXJuIGVsZW1lbnQ7XG5cdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCB2YWwpO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cdGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKSB7XG5cdFx0aWYgKENTUz8ubnVtYmVyICYmICFrZWJhYi5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IG5ld1ZhbCA9IENTUy5udW1iZXIodmFsKTtcblx0XHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0XHRpZiAoaXNVbml0VmFsdWUob2xkKSAmJiBvbGQudmFsdWUgPT09IG5ld1ZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gbmV3VmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCBuZXdWYWwpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIFN0cmluZyh2YWwpLCBpbXBvcnRhbmNlKTtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH1cblx0fVxuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhaXNTdHlsZVZhbHVlKHZhbCkpIHtcblx0XHRjb25zdCBtYXliZU51bSA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCk7XG5cdFx0aWYgKHR5cGVvZiBtYXliZU51bSA9PT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAha2ViYWIuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBuZXdWYWwgPSBDU1MubnVtYmVyKG1heWJlTnVtKTtcblx0XHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0XHRpZiAoaXNVbml0VmFsdWUob2xkKSAmJiBvbGQudmFsdWUgPT09IG5ld1ZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gbmV3VmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCBuZXdWYWwpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIHZhbCwgaW1wb3J0YW5jZSk7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIW5hbWUpIHJldHVybiBlbGVtZW50O1xuXHRjb25zdCBrZWJhYiA9IGNhbWVsVG9LZWJhYihuYW1lKTtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbGVtZW50LnN0eWxlO1xuXHRpZiAoIXN0eWxlUmVmKSByZXR1cm4gZWxlbWVudDtcblx0bGV0IHZhbCA9IGhhc1ZhbHVlKHZhbHVlKSAmJiAhKGlzU3R5bGVWYWx1ZSh2YWx1ZSkgfHwgaXNVbml0VmFsdWUodmFsdWUpKSA/IHZhbHVlPy52YWx1ZSA6IHZhbHVlO1xuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhaXNTdHlsZVZhbHVlKHZhbCkpIHZhbCA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCkgPz8gdmFsO1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBudWxsLCBpbXBvcnRhbmNlKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAoaXNTdHlsZVZhbHVlKHZhbCkpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0aWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcHJvbWlzZU9yRGlyZWN0ID0gKHByb21pc2UsIGNiKSA9PiB7XG5cdGlmICh0eXBlb2YgcHJvbWlzZT8udGhlbiA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBwcm9taXNlPy50aGVuPy4oY2IpO1xuXHRyZXR1cm4gY2IocHJvbWlzZSk7XG59O1xudmFyIGJsb2JVUkxNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBjYWNoZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZmV0Y2hBbmRDYWNoZSA9ICh1cmwpID0+IHtcblx0aWYgKCF1cmwpIHJldHVybiBudWxsO1xuXHRpZiAoY2FjaGVNYXAuaGFzKHVybCkpIHJldHVybiBjYWNoZU1hcC5nZXQodXJsKTtcblx0aWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGlmIChibG9iVVJMTWFwLmhhcyh1cmwpKSByZXR1cm4gYmxvYlVSTE1hcC5nZXQodXJsKTtcblx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh1cmwpO1xuXHRcdGJsb2JVUkxNYXAuc2V0KHVybCwgYnVybCk7XG5cdFx0Y2FjaGVNYXAuc2V0KGJ1cmwsIGJ1cmwpO1xuXHRcdHJldHVybiBidXJsO1xuXHR9XG5cdGlmIChVUkwuY2FuUGFyc2UodXJsKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuXHRcdGNvbnN0IHByb21pc2VkID0gZmV0Y2godXJsPy5yZXBsYWNlPy4oXCI/dXJsXCIsIFwiP3Jhd1wiKSwge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XG5cdFx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdGJsb2JVUkxNYXAuc2V0KGJsb2IsIGJ1cmwpO1xuXHRcdFx0Y2FjaGVNYXAuc2V0KHVybCwgYnVybCk7XG5cdFx0XHRjYWNoZU1hcC5zZXQoYnVybCwgYnVybCk7XG5cdFx0XHRyZXR1cm4gYnVybDtcblx0XHR9KTtcblx0XHRjYWNoZU1hcC5zZXQodXJsLCBwcm9taXNlZCk7XG5cdFx0cmV0dXJuIHByb21pc2VkO1xuXHR9XG5cdGlmICh0eXBlb2YgdXJsID09IFwic3RyaW5nXCIpIHtcblx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoW3VybF0sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXHRcdGNvbnN0IGJ1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdGJsb2JVUkxNYXAuc2V0KGJsb2IsIGJ1cmwpO1xuXHRcdGNhY2hlTWFwLnNldChidXJsLCBidXJsKTtcblx0XHRyZXR1cm4gYnVybDtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcbnZhciBjYWNoZUNvbnRlbnRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGNhY2hlQmxvYkNvbnRlbnRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBmZXRjaEFzSW5saW5lID0gKHVybCkgPT4ge1xuXHRpZiAoIXVybCkgcmV0dXJuIFwiXCI7XG5cdGlmIChjYWNoZUNvbnRlbnRNYXAuaGFzKHVybCkpIHJldHVybiBjYWNoZUNvbnRlbnRNYXAuZ2V0KHVybCkgPz8gXCJcIjtcblx0aWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGlmIChjYWNoZUJsb2JDb250ZW50TWFwLmhhcyh1cmwpKSByZXR1cm4gY2FjaGVCbG9iQ29udGVudE1hcC5nZXQodXJsKSA/PyBcIlwiO1xuXHRcdGNvbnN0IHByb21pc2VkID0gdXJsPy50ZXh0Py4oKT8udGhlbj8uKCh0ZXh0KSA9PiB7XG5cdFx0XHRjYWNoZUJsb2JDb250ZW50TWFwLnNldCh1cmwsIHRleHQpO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fSk7XG5cdFx0Y2FjaGVCbG9iQ29udGVudE1hcC5zZXQodXJsLCBwcm9taXNlZCk7XG5cdFx0cmV0dXJuIHByb21pc2VkO1xuXHR9XG5cdGlmIChVUkwuY2FuUGFyc2UodXJsKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuXHRcdGNvbnN0IHByb21pc2VkID0gZmV0Y2godXJsPy5yZXBsYWNlPy4oXCI/dXJsXCIsIFwiP3Jhd1wiKSwge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHRjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCwgdGV4dCk7XG5cdFx0XHRyZXR1cm4gdGV4dDtcblx0XHR9KTtcblx0XHRjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCwgcHJvbWlzZWQpO1xuXHRcdHJldHVybiBwcm9taXNlZDtcblx0fVxuXHRpZiAodHlwZW9mIHVybCA9PSBcInN0cmluZ1wiKSB7XG5cdFx0Y2FjaGVDb250ZW50TWFwLnNldCh1cmwsIHVybCk7XG5cdFx0cmV0dXJuIHVybDtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcbnZhciBhZG9wdGVkU2VsZWN0b3JNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGFkb3B0ZWRMYXllck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgYWRvcHRlZFNoYWRvd0xheWVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0QWRvcHRlZFN0eWxlUnVsZSA9IChzZWxlY3RvciwgbGF5ZXJOYW1lID0gXCJ1eC1xdWVyeVwiLCBiYXNpcyA9IG51bGwpID0+IHtcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIG51bGw7XG5cdGlmICghc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCgpKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgcm9vdCA9IGJhc2lzIGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IGJhc2lzIDogYmFzaXM/LmdldFJvb3ROb2RlID8gYmFzaXMuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSA6IG51bGw7XG5cdGNvbnN0IGlzU2hhZG93Um9vdCA9IHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xuXHRjb25zdCB0YXJnZXRBZG9wdGVkU2hlZXRzID0gaXNTaGFkb3dSb290ID8gcm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgOiB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyA6IG51bGw7XG5cdGlmICghdGFyZ2V0QWRvcHRlZFNoZWV0cykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHNlbGVjdG9yS2V5ID0gYCR7bGF5ZXJOYW1lIHx8IFwiXCJ9OiR7c2VsZWN0b3J9YDtcblx0bGV0IHNoZWV0O1xuXHRpZiAoaXNTaGFkb3dSb290KSB7XG5cdFx0bGV0IHNoYWRvd01hcCA9IGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcC5nZXQocm9vdCk7XG5cdFx0aWYgKCFzaGFkb3dNYXApIHtcblx0XHRcdHNoYWRvd01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAuc2V0KHJvb3QsIHNoYWRvd01hcCk7XG5cdFx0fVxuXHRcdHNoZWV0ID0gc2hhZG93TWFwLmdldChzZWxlY3RvcktleSk7XG5cdFx0aWYgKCFzaGVldCkge1xuXHRcdFx0c2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdFx0c2hhZG93TWFwLnNldChzZWxlY3RvcktleSwgc2hlZXQpO1xuXHRcdFx0aWYgKCF0YXJnZXRBZG9wdGVkU2hlZXRzLmluY2x1ZGVzKHNoZWV0KSkgdGFyZ2V0QWRvcHRlZFNoZWV0cy5wdXNoKHNoZWV0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0c2hlZXQgPSBhZG9wdGVkU2VsZWN0b3JNYXAuZ2V0KHNlbGVjdG9yS2V5KTtcblx0XHRpZiAoIXNoZWV0KSB7XG5cdFx0XHRzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0XHRhZG9wdGVkU2VsZWN0b3JNYXAuc2V0KHNlbGVjdG9yS2V5LCBzaGVldCk7XG5cdFx0XHRpZiAoIXRhcmdldEFkb3B0ZWRTaGVldHMuaW5jbHVkZXMoc2hlZXQpKSB0YXJnZXRBZG9wdGVkU2hlZXRzLnB1c2goc2hlZXQpO1xuXHRcdH1cblx0fVxuXHRpZiAobGF5ZXJOYW1lKSB7XG5cdFx0bGV0IGxheWVyUnVsZTtcblx0XHRpZiAoaXNTaGFkb3dSb290KSB7XG5cdFx0XHRsZXQgc2hhZG93TGF5ZXJNYXAgPSBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuZ2V0KHJvb3QpO1xuXHRcdFx0aWYgKCFzaGFkb3dMYXllck1hcCkge1xuXHRcdFx0XHRzaGFkb3dMYXllck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRcdGFkb3B0ZWRTaGFkb3dMYXllck1hcC5zZXQocm9vdCwgc2hhZG93TGF5ZXJNYXApO1xuXHRcdFx0fVxuXHRcdFx0bGF5ZXJSdWxlID0gc2hhZG93TGF5ZXJNYXAuZ2V0KGxheWVyTmFtZSk7XG5cdFx0fSBlbHNlIGxheWVyUnVsZSA9IGFkb3B0ZWRMYXllck1hcC5nZXQobGF5ZXJOYW1lKTtcblx0XHRpZiAoIWxheWVyUnVsZSkge1xuXHRcdFx0Y29uc3QgcnVsZXMgPSBBcnJheS5mcm9tKHNoZWV0LmNzc1J1bGVzIHx8IFtdKTtcblx0XHRcdGNvbnN0IGxheWVySW5kZXggPSBydWxlcy5maW5kSW5kZXgoKHJ1bGUpID0+IHJ1bGUgaW5zdGFuY2VvZiBDU1NMYXllckJsb2NrUnVsZSAmJiBydWxlLm5hbWUgPT09IGxheWVyTmFtZSk7XG5cdFx0XHRpZiAobGF5ZXJJbmRleCA9PT0gLTEpIHRyeSB7XG5cdFx0XHRcdHNoZWV0Lmluc2VydFJ1bGUoYEBsYXllciAke2xheWVyTmFtZX0ge31gLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuXHRcdFx0XHRjb25zdCBuZXdSdWxlID0gc2hlZXQuY3NzUnVsZXNbc2hlZXQuY3NzUnVsZXMubGVuZ3RoIC0gMV07XG5cdFx0XHRcdGlmIChuZXdSdWxlIGluc3RhbmNlb2YgQ1NTTGF5ZXJCbG9ja1J1bGUpIGxheWVyUnVsZSA9IG5ld1J1bGU7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGxheWVyUnVsZSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHRcdGVsc2UgbGF5ZXJSdWxlID0gcnVsZXNbbGF5ZXJJbmRleF07XG5cdFx0XHRpZiAobGF5ZXJSdWxlKSB7XG5cdFx0XHRcdGlmIChpc1NoYWRvd1Jvb3QpIHtcblx0XHRcdFx0XHRsZXQgc2hhZG93TGF5ZXJNYXAgPSBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuZ2V0KHJvb3QpO1xuXHRcdFx0XHRcdGlmICghc2hhZG93TGF5ZXJNYXApIHtcblx0XHRcdFx0XHRcdHNoYWRvd0xheWVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdFx0XHRcdGFkb3B0ZWRTaGFkb3dMYXllck1hcC5zZXQocm9vdCwgc2hhZG93TGF5ZXJNYXApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzaGFkb3dMYXllck1hcC5zZXQobGF5ZXJOYW1lLCBsYXllclJ1bGUpO1xuXHRcdFx0XHR9IGVsc2UgYWRvcHRlZExheWVyTWFwLnNldChsYXllck5hbWUsIGxheWVyUnVsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChsYXllclJ1bGUpIHtcblx0XHRcdGxldCBsYXllclJ1bGVJbmRleCA9IEFycmF5LmZyb20obGF5ZXJSdWxlLmNzc1J1bGVzIHx8IFtdKS5maW5kSW5kZXgoKHIpID0+IHIgaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUgJiYgci5zZWxlY3RvclRleHQ/LnRyaW0/LigpID09PSBzZWxlY3Rvcj8udHJpbT8uKCkpO1xuXHRcdFx0aWYgKGxheWVyUnVsZUluZGV4ID09PSAtMSkgdHJ5IHtcblx0XHRcdFx0bGF5ZXJSdWxlSW5kZXggPSBsYXllclJ1bGUuaW5zZXJ0UnVsZShgJHtzZWxlY3Rvcn0ge31gLCBsYXllclJ1bGUuY3NzUnVsZXMubGVuZ3RoKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGF5ZXJSdWxlLmNzc1J1bGVzW2xheWVyUnVsZUluZGV4XTtcblx0XHR9XG5cdH1cblx0bGV0IHJ1bGVJbmRleCA9IEFycmF5LmZyb20oc2hlZXQuY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocnVsZSkgPT4gcnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSAmJiBydWxlLnNlbGVjdG9yVGV4dD8udHJpbT8uKCkgPT09IHNlbGVjdG9yPy50cmltPy4oKSk7XG5cdGlmIChydWxlSW5kZXggPT09IC0xKSB0cnkge1xuXHRcdHJ1bGVJbmRleCA9IHNoZWV0Lmluc2VydFJ1bGUoYCR7c2VsZWN0b3J9IHt9YCwgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGNvbnN0IHJ1bGUgPSBzaGVldC5jc3NSdWxlc1tydWxlSW5kZXhdO1xuXHRpZiAocnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSkgcmV0dXJuIHJ1bGU7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBzZXRTdHlsZVByb3BlcnR5ID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRyZXR1cm4gaGFzVHlwZWRPTSA/IHNldFN0eWxlUHJvcGVydHlUeXBlZChlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSkgOiBzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2soZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UpO1xufTtcbnZhciBzZXRTdHlsZUluUnVsZSA9IChzZWxlY3RvciwgbmFtZSwgdmFsdWUpID0+IHtcblx0cmV0dXJuIHNldFN0eWxlUHJvcGVydHkoZ2V0U3R5bGVSdWxlKHNlbGVjdG9yKSwgbmFtZSwgdmFsdWUpO1xufTtcbnZhciBzZXRTdHlsZVJ1bGUgPSAoc2VsZWN0b3IsIHNoZWV0KSA9PiB7XG5cdGNvbnN0IHJ1bGUgPSBnZXRTdHlsZVJ1bGUoc2VsZWN0b3IpO1xuXHRPYmplY3QuZW50cmllcyhzaGVldCkuZm9yRWFjaCgoW3Byb3BOYW1lLCBwcm9wVmFsdWVdKSA9PiBzZXRTdHlsZVByb3BlcnR5KHJ1bGUsIHByb3BOYW1lLCBwcm9wVmFsdWUpKTtcblx0cmV0dXJuIHJ1bGU7XG59O1xudmFyIGhhc2ggPSBhc3luYyAoc3RyaW5nKSA9PiB7XG5cdGNvbnN0IGhhc2hCdWZmZXIgPSBhd2FpdCBjcnlwdG8/LnN1YnRsZT8uZGlnZXN0KFwiU0hBLTI1NlwiLCB0eXBlb2Ygc3RyaW5nID09IFwic3RyaW5nXCIgPyBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc3RyaW5nKSA6IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gc3RyaW5nIDogYXdhaXQgc3RyaW5nPy5hcnJheUJ1ZmZlcj8uKCkpO1xuXHRyZXR1cm4gXCJzaGEyNTYtXCIgKyBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoaGFzaEJ1ZmZlcikpKTtcbn07XG52YXIgbG9hZFN0eWxlU2hlZXQgPSAoaW5saW5lLCBiYXNlLCBsYXllciA9IFwiXCIsIGludGVncml0eSkgPT4ge1xuXHRjb25zdCBsb2FkID0gZmV0Y2hBbmRDYWNoZShpbmxpbmUpO1xuXHRjb25zdCB1cmwgPSB0eXBlb2YgaW5saW5lID09IFwic3RyaW5nXCIgPyBVUkwuY2FuUGFyc2UoaW5saW5lKSA/IGlubGluZSA6IGxvYWQgOiBsb2FkO1xuXHRpZiAoYmFzZT8uWzBdKSBiYXNlWzBdLmZldGNoUHJpb3JpdHkgPSBcImhpZ2hcIjtcblx0aWYgKGJhc2UgJiYgdXJsICYmIHR5cGVvZiB1cmwgPT0gXCJzdHJpbmdcIikgc2V0U3R5bGVVUkwoYmFzZSwgdXJsLCBsYXllcik7XG5cdGlmIChiYXNlPy5bMF0gJiYgKCFVUkwuY2FuUGFyc2UoaW5saW5lKSB8fCBpbnRlZ3JpdHkpICYmIGJhc2U/LlswXSBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge31cblx0cmV0dXJuIHByb21pc2VPckRpcmVjdChsb2FkLCAocmVzKSA9PiB7XG5cdFx0aWYgKGJhc2U/LlswXSAmJiByZXMpIHtcblx0XHRcdHNldFN0eWxlVVJMKGJhc2UsIHJlcywgbGF5ZXIpO1xuXHRcdFx0YmFzZT8uWzBdLnNldEF0dHJpYnV0ZShcImxvYWRlZFwiLCBcIlwiKTtcblx0XHR9XG5cdH0pPy5jYXRjaD8uKChlcnJvcikgPT4ge1xuXHRcdGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBsb2FkIHN0eWxlIHNoZWV0OlwiLCBlcnJvcik7XG5cdH0pO1xufTtcbnZhciBsb2FkQmxvYlN0eWxlID0gKGlubGluZSkgPT4ge1xuXHRjb25zdCBzdHlsZSA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIikgOiBudWxsO1xuXHRpZiAoc3R5bGUpIHN0eWxlLmZldGNoUHJpb3JpdHkgPSBcImhpZ2hcIjtcblx0aWYgKHN0eWxlKSB7XG5cdFx0T2JqZWN0LmFzc2lnbihzdHlsZSwge1xuXHRcdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRcdHR5cGU6IFwidGV4dC9jc3NcIixcblx0XHRcdGNyb3NzT3JpZ2luOiBcInNhbWUtb3JpZ2luXCJcblx0XHR9KTtcblx0XHRzdHlsZS5kYXRhc2V0Lm93bmVyID0gT1dORVI7XG5cdFx0bG9hZFN0eWxlU2hlZXQoaW5saW5lLCBbc3R5bGUsIFwiaHJlZlwiXSk7XG5cdFx0dHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmQoc3R5bGUpO1xuXHRcdHJldHVybiBzdHlsZTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgbG9hZElubGluZVN0eWxlID0gKGlubGluZSwgcm9vdEVsZW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50Py5oZWFkIDogbnVsbCwgbGF5ZXIgPSBcIlwiKSA9PiB7XG5cdGNvbnN0IFBMQUNFID0gcm9vdEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I/LihcImhlYWRcIikgPz8gcm9vdEVsZW1lbnQ7XG5cdGlmICh0eXBlb2YgSFRNTEhlYWRFbGVtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgUExBQ0UgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQpIHJldHVybiBsb2FkQmxvYlN0eWxlKGlubGluZSk7XG5cdGNvbnN0IHN0eWxlID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikgOiBudWxsO1xuXHRpZiAoc3R5bGUpIHtcblx0XHRzdHlsZS5kYXRhc2V0Lm93bmVyID0gT1dORVI7XG5cdFx0bG9hZFN0eWxlU2hlZXQoaW5saW5lLCBbc3R5bGUsIFwiaW5uZXJIVE1MXCJdLCBsYXllcik7XG5cdFx0UExBQ0U/LnByZXBlbmQ/LihzdHlsZSk7XG5cdFx0cmV0dXJuIHN0eWxlO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBzZXRQcm9wZXJ0eSA9ICh0YXJnZXQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRyZXR1cm4gc2V0U3R5bGVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbn07XG52YXIgcHJlbG9hZFN0eWxlID0gKHN0eWxlcykgPT4ge1xuXHRyZXR1cm4gbG9hZEFzQWRvcHRlZChzdHlsZXMsIFwiXCIpO1xufTtcbnZhciBhZG9wdGVkTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBhZG9wdGVkQmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGFwcGx5QWRvcHRlZFN0eWxlVGV4dCA9IChzaGVldCwgY3NzVGV4dCkgPT4ge1xuXHRpZiAoIXNoZWV0IHx8ICFjc3NUZXh0KSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0c2hlZXQucmVwbGFjZVN5bmMoY3NzVGV4dCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc3QgbWVzc2FnZSA9IFN0cmluZyhlcnJvcj8ubWVzc2FnZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICghKG1lc3NhZ2UuaW5jbHVkZXMoXCJAaW1wb3J0IHJ1bGVzIGFyZSBub3QgYWxsb3dlZFwiKSB8fCBtZXNzYWdlLmluY2x1ZGVzKFwiQGltcG9ydFwiKSAmJiBtZXNzYWdlLmluY2x1ZGVzKFwibm90IGFsbG93ZWRcIikpKSBjb25zb2xlLndhcm4oXCJbRE9NXSBGYWlsZWQgdG8gYXBwbHkgYWRvcHRlZCBzdHlsZXNoZWV0OlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIGxvYWRBc0Fkb3B0ZWQgPSAoc3R5bGVzLCBsYXllck5hbWUgPSBudWxsKSA9PiB7XG5cdGlmICghc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCgpKSB7XG5cdFx0aWYgKHR5cGVvZiBzdHlsZXMgPT09IFwic3RyaW5nXCIpIGxvYWRJbmxpbmVTdHlsZShzdHlsZXMsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmICh0eXBlb2Ygc3R5bGVzID09PSBcInN0cmluZ1wiICYmIGNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudChzdHlsZXMpKSB7XG5cdFx0bG9hZElubGluZVN0eWxlKHN0eWxlcywgdm9pZCAwLCBsYXllck5hbWUgfHwgXCJcIik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiBhZG9wdGVkTWFwPy5oYXM/LihzdHlsZXMpKSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gYWRvcHRlZE1hcC5nZXQoc3R5bGVzKTtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKGNhY2hlZCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKGNhY2hlZCk7XG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXHRpZiAoKHN0eWxlcyBpbnN0YW5jZW9mIEJsb2IgfHwgc3R5bGVzIGluc3RhbmNlb2YgRmlsZSkgJiYgYWRvcHRlZEJsb2JNYXA/Lmhhcz8uKHN0eWxlcykpIHtcblx0XHRjb25zdCBjYWNoZWQgPSBhZG9wdGVkQmxvYk1hcC5nZXQoc3R5bGVzKTtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKGNhY2hlZCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKGNhY2hlZCk7XG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXHRpZiAoIXN0eWxlcykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHNoZWV0ID0gdHlwZW9mIHN0eWxlcyA9PSBcInN0cmluZ1wiID8gYWRvcHRlZE1hcC5nZXRPckluc2VydENvbXB1dGVkKHN0eWxlcywgKHN0eWxlcykgPT4gbmV3IENTU1N0eWxlU2hlZXQoKSkgOiBhZG9wdGVkQmxvYk1hcC5nZXRPckluc2VydENvbXB1dGVkKHN0eWxlcywgKHN0eWxlcykgPT4gbmV3IENTU1N0eWxlU2hlZXQoKSk7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMgJiYgIWRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzaGVldCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoZWV0KTtcblx0aWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiAhVVJMLmNhblBhcnNlKHN0eWxlcykpIHtcblx0XHRjb25zdCBsYXllcldyYXBwZWQgPSBsYXllck5hbWUgPyBgQGxheWVyICR7bGF5ZXJOYW1lfSB7ICR7c3R5bGVzfSB9YCA6IHN0eWxlcztcblx0XHRhZG9wdGVkTWFwLnNldChzdHlsZXMsIHNoZWV0KTtcblx0XHRpZiAoIWFwcGx5QWRvcHRlZFN0eWxlVGV4dChzaGVldCwgbGF5ZXJXcmFwcGVkKSkge1xuXHRcdFx0cmVtb3ZlQWRvcHRlZChzaGVldCk7XG5cdFx0XHRhZG9wdGVkTWFwLmRlbGV0ZShzdHlsZXMpO1xuXHRcdFx0bG9hZElubGluZVN0eWxlKHN0eWxlcyk7XG5cdFx0fVxuXHRcdHJldHVybiBzaGVldDtcblx0fSBlbHNlIHByb21pc2VPckRpcmVjdChmZXRjaEFzSW5saW5lKHN0eWxlcyksIChjYWNoZWQpID0+IHtcblx0XHRhZG9wdGVkTWFwLnNldChjYWNoZWQsIHNoZWV0KTtcblx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRpZiAoY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50KGNhY2hlZCkpIHtcblx0XHRcdFx0cmVtb3ZlQWRvcHRlZChzaGVldCk7XG5cdFx0XHRcdGFkb3B0ZWRNYXAuZGVsZXRlKGNhY2hlZCk7XG5cdFx0XHRcdGFkb3B0ZWRCbG9iTWFwLmRlbGV0ZShzdHlsZXMpO1xuXHRcdFx0XHRsb2FkSW5saW5lU3R5bGUoY2FjaGVkLCB2b2lkIDAsIGxheWVyTmFtZSB8fCBcIlwiKTtcblx0XHRcdFx0cmV0dXJuIHNoZWV0O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGF5ZXJXcmFwcGVkID0gbGF5ZXJOYW1lID8gYEBsYXllciAke2xheWVyTmFtZX0geyAke2NhY2hlZH0gfWAgOiBjYWNoZWQ7XG5cdFx0XHRpZiAoIWFwcGx5QWRvcHRlZFN0eWxlVGV4dChzaGVldCwgbGF5ZXJXcmFwcGVkKSkge1xuXHRcdFx0XHRyZW1vdmVBZG9wdGVkKHNoZWV0KTtcblx0XHRcdFx0YWRvcHRlZE1hcC5kZWxldGUoY2FjaGVkKTtcblx0XHRcdFx0YWRvcHRlZEJsb2JNYXAuZGVsZXRlKHN0eWxlcyk7XG5cdFx0XHRcdGxvYWRJbmxpbmVTdHlsZShjYWNoZWQsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNoZWV0O1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBzaGVldDtcbn07XG52YXIgcmVtb3ZlQWRvcHRlZCA9IChzaGVldCkgPT4ge1xuXHRpZiAoIXNoZWV0KSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHRhcmdldCA9IHR5cGVvZiBzaGVldCA9PT0gXCJzdHJpbmdcIiA/IGFkb3B0ZWRNYXAuZ2V0KHNoZWV0KSA6IHNoZWV0O1xuXHRpZiAoIXRhcmdldCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc2hlZXRzID0gZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzO1xuXHRjb25zdCBpZHggPSBzaGVldHMuaW5kZXhPZih0YXJnZXQpO1xuXHRpZiAoaWR4ICE9PSAtMSkge1xuXHRcdHNoZWV0cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xudmFyIHBhcnNlT3JpZ2luID0gKG9yaWdpbiwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCB2YWx1ZXMgPSBvcmlnaW4uc3BsaXQoXCIgXCIpO1xuXHRyZXR1cm4gbmV3IERPTVBvaW50KHBhcnNlTGVuZ3RoKHZhbHVlc1swXSwgKCkgPT4gZWxlbWVudC5jbGllbnRXaWR0aCksIHBhcnNlTGVuZ3RoKHZhbHVlc1sxXSwgKCkgPT4gZWxlbWVudC5jbGllbnRIZWlnaHQpKTtcbn07XG52YXIgcGFyc2VMZW5ndGggPSAodmFsdWUsIHNpemUpID0+IHtcblx0aWYgKHZhbHVlLmVuZHNXaXRoKFwiJVwiKSkgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIC8gMTAwICogc2l6ZSgpO1xuXHRyZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59O1xudmFyIGdldFRyYW5zZm9ybSA9IChlbCkgPT4ge1xuXHRpZiAoZWw/LmNvbXB1dGVkU3R5bGVNYXApIHtcblx0XHRjb25zdCBtYXRyaXggPSBlbC5jb21wdXRlZFN0eWxlTWFwKCkuZ2V0KFwidHJhbnNmb3JtXCIpPy50b01hdHJpeD8uKCk7XG5cdFx0aWYgKG1hdHJpeCkgcmV0dXJuIG1hdHJpeDtcblx0fSBlbHNlIGlmIChlbCkge1xuXHRcdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdFx0cmV0dXJuIG5ldyBET01NYXRyaXgoc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcInRyYW5zZm9ybVwiKSk7XG5cdH1cblx0cmV0dXJuIG5ldyBET01NYXRyaXgoKTtcbn07XG52YXIgZ2V0VHJhbnNmb3JtT3JpZ2luID0gKGVsKSA9PiB7XG5cdGNvbnN0IGNzc09yaWdpbiA9IGdldENvbXB1dGVkU3R5bGUoZWwpPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCJ0cmFuc2Zvcm0tb3JpZ2luXCIpIHx8IGA1MCUgNTAlYDtcblx0cmV0dXJuIHBhcnNlT3JpZ2luKGNzc09yaWdpbiwgZWwpO1xufTtcbnZhciBnZXRQcm9wZXJ0eVZhbHVlID0gKHNyYywgbmFtZSkgPT4ge1xuXHRpZiAoXCJjb21wdXRlZFN0eWxlTWFwXCIgaW4gc3JjKSB7XG5cdFx0Y29uc3QgdmFsID0gc3JjPy5jb21wdXRlZFN0eWxlTWFwPy4oKT8uZ2V0KG5hbWUpO1xuXHRcdHJldHVybiB2YWwgaW5zdGFuY2VvZiBDU1NVbml0VmFsdWUgPyB2YWw/LnZhbHVlIHx8IDAgOiB2YWw/LnRvU3RyaW5nPy4oKTtcblx0fVxuXHRpZiAoc3JjIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRjb25zdCBjcyA9IGdldENvbXB1dGVkU3R5bGU/LihzcmMsIFwiXCIpO1xuXHRcdHJldHVybiBwYXJzZUZsb2F0KGNzPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnJlcGxhY2U/LihcInB4XCIsIFwiXCIpKSB8fCAwO1xuXHR9XG5cdHJldHVybiBwYXJzZUZsb2F0KChzcmM/LnN0eWxlID8/IHNyYykuZ2V0UHJvcGVydHlWYWx1ZT8uKG5hbWUpPy5yZXBsYWNlPy4oXCJweFwiLCBcIlwiKSkgfHwgMDtcbn07XG52YXIgZ2V0RWxlbWVudFpvb20gPSAoZWxlbWVudCkgPT4ge1xuXHRsZXQgem9vbSA9IDEsIGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnRFbGVtZW50KSB7XG5cdFx0aWYgKFwiY3VycmVudENTU1pvb21cIiBpbiBjdXJyZW50RWxlbWVudCkge1xuXHRcdFx0Y29uc3QgY3VycmVudENTU1pvb20gPSBjdXJyZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbTtcblx0XHRcdGlmICh0eXBlb2YgY3VycmVudENTU1pvb20gPT09IFwibnVtYmVyXCIpIHJldHVybiB6b29tICo9IGN1cnJlbnRDU1Nab29tO1xuXHRcdH1cblx0XHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudEVsZW1lbnQpO1xuXHRcdGlmIChzdHlsZS56b29tICYmIHN0eWxlLnpvb20gIT09IFwibm9ybWFsXCIpIHJldHVybiB6b29tICo9IHBhcnNlRmxvYXQoc3R5bGUuem9vbSk7XG5cdFx0aWYgKHN0eWxlLnpvb20gJiYgc3R5bGUuem9vbSAhPT0gXCJub3JtYWxcIiB8fCBcImN1cnJlbnRDU1Nab29tXCIgaW4gY3VycmVudEVsZW1lbnQpIHJldHVybiB6b29tO1xuXHRcdGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBjdXJyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcblx0fVxuXHRyZXR1cm4gem9vbTtcbn07XG52YXIgZ2V0UHhWYWx1ZSA9IChlbGVtZW50LCBuYW1lKSA9PiB7XG5cdHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlPy4oZWxlbWVudCwgbmFtZSk7XG59O1xudmFyIGdldFBhZGRpbmcgPSAoc3JjLCBheGlzKSA9PiB7XG5cdGlmIChheGlzID09IFwiaW5saW5lXCIpIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWlubGluZS1zdGFydFwiKSArIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctaW5saW5lLWVuZFwiKTtcblx0cmV0dXJuIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctYmxvY2stc3RhcnRcIikgKyBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWJsb2NrLWVuZFwiKTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9CZWhhdmlvci50c1xudmFyIGJvdW5kQmVoYXZpb3JzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYmluZEJlaGF2aW9yID0gKGVsZW1lbnQsIGJlaFNldCwgYmVoYXZpb3IpID0+IHtcblx0bmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdGlmICghYmVoU2V0LmhhcyhiZWhhdmlvcikpIGJlaFNldC5hZGQoYmVoYXZpb3IpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdEJlaGF2aW9ycyA9IChlbGVtZW50LCBiZWhhdmlvcnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChiZWhhdmlvcnMpIHtcblx0XHRjb25zdCBiZWhTZXQgPSBib3VuZEJlaGF2aW9ycy5nZXRPckluc2VydChlbGVtZW50LCAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcblx0XHRbLi4uYmVoYXZpb3JzPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRCZWhhdmlvcihlbGVtZW50LCBiZWhTZXQsIGUpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9TdG9yZS50c1xudmFyIG5hbWVkU3RvcmVNYXBzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BuYW1lZFN0b3JlTWFwc1wiKTtcbnZhciBuYW1lZFN0b3JlTWFwcyA9IGdsb2JhbFRoaXNbbmFtZWRTdG9yZU1hcHNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGdldFN0b3Jlc09mRWxlbWVudCA9IChtYXAsIGVsZW1lbnQpID0+IHtcblx0Y29uc3QgRSA9IFsuLi5tYXAuZW50cmllcygpIHx8IFtdXTtcblx0cmV0dXJuIG5ldyBNYXAoRT8ubWFwPy4oKFtuLCBtXSkgPT4gW24sIG0/LmdldD8uKGVsZW1lbnQpXSk/LmZpbHRlcj8uKChbbiwgZV0pID0+ICEhZSkgfHwgW10pO1xufTtcbnZhciBpc1dlYWtDb21wYXRpYmxlID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuICh0eXBlb2YgZWxlbWVudCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBlbGVtZW50ID09IFwiZnVuY3Rpb25cIikgJiYgZWxlbWVudCAhPSBudWxsO1xufTtcbnZhciBiaW5kU3RvcmUgPSAoZWxlbWVudCwgbmFtZSwgb2JqKSA9PiB7XG5cdGlmICghaXNXZWFrQ29tcGF0aWJsZShlbGVtZW50KSAmJiBlbGVtZW50ICE9IG51bGwpIHJldHVybiBlbGVtZW50O1xuXHRsZXQgd2Vha01hcCA9IG5hbWVkU3RvcmVNYXBzLmdldChuYW1lKTtcblx0aWYgKCF3ZWFrTWFwKSB7XG5cdFx0d2Vha01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRcdG5hbWVkU3RvcmVNYXBzLnNldChuYW1lLCB3ZWFrTWFwKTtcblx0fVxuXHRpZiAoIXdlYWtNYXAuaGFzKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgd2Vha01hcC5zZXQoZWxlbWVudCwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIHJlZmxlY3RTdG9yZXMgPSAoZWxlbWVudCwgc3RvcmVzKSA9PiB7XG5cdGlmICghZWxlbWVudCB8fCAhc3RvcmVzKSByZXR1cm47XG5cdGZvciAoY29uc3QgW25hbWUsIG9ial0gb2Ygc3RvcmVzLmVudHJpZXMoKSkgYmluZFN0b3JlKGVsZW1lbnQsIG5hbWUsIG9iaik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL01peGlucy50c1xudmFyIHJlZmxlY3RNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW5zKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRpZiAobWl4aW5zKSB7XG5cdFx0Y29uc3QgbWl4aW5TZXQgPSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcblx0XHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdFx0Wy4uLm1peGlucz8udmFsdWVzPy4oKSB8fCBbXV0ubWFwKChlKSA9PiBiaW5kTWl4aW5zKGVsZW1lbnQsIGUsIG1peGluU2V0KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGdldEVsZW1lbnRSZWxhdGVkID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHtcblx0XHRzdG9yZVNldDogZ2V0U3RvcmVzT2ZFbGVtZW50KG5hbWVkU3RvcmVNYXBzLCBlbGVtZW50KSxcblx0XHRtaXhpblNldDogYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCksXG5cdFx0YmVoYXZpb3JTZXQ6IGJvdW5kQmVoYXZpb3JzPy5nZXQ/LihlbGVtZW50KVxuXHR9O1xufTtcbnZhciBiaW5kTWl4aW5zID0gKGVsZW1lbnQsIG1peGluLCBtaXhTZXQpID0+IHtcblx0Y29uc3Qgd2VsID0gbmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdG1peFNldCB8fD0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCk7XG5cdGlmICghbWl4U2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRtaXhTZXQ/LmFkZD8uKG1peGluKTtcblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHRcdGlmIChtaXhpbi5uYW1lKSBlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW10sIG1peGluLm5hbWVdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0bWl4aW4/LmNvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGJvdW5kTWl4aW5TZXRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGJvdW5kTWl4aW5TZXRcIik7XG52YXIgYm91bmRNaXhpblNldCA9IGdsb2JhbFRoaXNbYm91bmRNaXhpblNldFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluRWxlbWVudHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgbWl4aW5FbGVtZW50cyA9IGdsb2JhbFRoaXNbbWl4aW5FbGVtZW50c1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluUmVnaXN0cnlTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIik7XG52YXIgbWl4aW5SZWdpc3RyeSA9IGdsb2JhbFRoaXNbbWl4aW5SZWdpc3RyeVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgbWl4aW5OYW1lc3BhY2VTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIpO1xudmFyIG1peGluTmFtZXNwYWNlID0gZ2xvYmFsVGhpc1ttaXhpbk5hbWVzcGFjZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlcyA9IChlbGVtZW50LCBtaXhpbikgPT4ge1xuXHRpZiAodHlwZW9mIG1peGluID09IFwic3RyaW5nXCIpIG1peGluID0gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obWl4aW4pO1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdGNvbnN0IG1peGlucyA9IG5ldyBTZXQoWy4uLm5hbWVzXS5tYXAoKG4pID0+IG1peGluUmVnaXN0cnk/LmdldD8uKG4pKS5maWx0ZXIoKG0pID0+ICEhbSkpO1xuXHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRpZiAoIW1peGluRWxlbWVudHM/Lmhhcz8uKG1peGluKSkgbWl4aW5FbGVtZW50cz8uc2V0Py4obWl4aW4sIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKTtcblx0aWYgKCFib3VuZE1peGluU2V0Py5oYXM/LihlbGVtZW50KSkgYm91bmRNaXhpblNldD8uc2V0Py4oZWxlbWVudCwgbWl4aW5TZXQpO1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkgbWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0aWYgKG1peGlucy5oYXMobWl4aW4pIHx8ICFtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/Lmhhcz8uKGVsZW1lbnQpKSB7XG5cdFx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRcdG5hbWVzLmFkZChtaXhpbk5hbWVzcGFjZT8uZ2V0Py4obWl4aW4pKTtcblx0XHRcdG1peGluU2V0Py5hZGQ/LihtaXhpbik7XG5cdFx0XHRlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLm5hbWVzXS5maWx0ZXIoKG4pID0+ICEhbikuam9pbihcIiBcIikpO1xuXHRcdH1cblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHR9XG5cdGlmIChtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkge1xuXHRcdFx0bWl4aW5TZXQ/LmRlbGV0ZT8uKG1peGluKTtcblx0XHRcdG1peGluPy5kaXNjb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdH1cblx0fVxufTtcbnZhciByb290cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgYWRkUm9vdCA9IChyb290ID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKCFyb290KSByZXR1cm47XG5cdGlmICghcm9vdHM/Lmhhcz8uKHJvb3QpKSB7XG5cdFx0cm9vdHM/LmFkZD8uKHJvb3QpO1xuXHRcdG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKHJvb3QsIFwiKlwiLCBcImRhdGEtbWl4aW5cIiwgKG11dGF0aW9uKSA9PiB1cGRhdGVBbGxNaXhpbnMobXV0YXRpb24udGFyZ2V0KSk7XG5cdFx0b2JzZXJ2ZUJ5U2VsZWN0b3Iocm9vdCwgXCJbZGF0YS1taXhpbl1cIiwgKG11dGF0aW9uKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbXV0YXRpb24uYWRkZWROb2RlcykgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiByb290O1xufTtcbnZhciB1cGRhdGVBbGxNaXhpbnMgPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdFsuLi5uZXcgU2V0KFsuLi5uYW1lc10ubWFwKChuKSA9PiBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihuKSkuZmlsdGVyKChtKSA9PiAhIW0pKV0ubWFwPy4oKG0pID0+IHVwZGF0ZU1peGluQXR0cmlidXRlcyhlbGVtZW50LCBtKSk7XG59O1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCA9IChlbGVtZW50cywgbWl4aW4pID0+IHtcblx0ZWxlbWVudHMuZm9yRWFjaCgoZSkgPT4gbWl4aW4gPyB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZSwgbWl4aW4pIDogdXBkYXRlQWxsTWl4aW5zKGUpKTtcbn07XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyA9IChtaXhpbikgPT4ge1xuXHRmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbChyb290Py5xdWVyeVNlbGVjdG9yQWxsPy4oXCJbZGF0YS1taXhpbl1cIiksIG1peGluKTtcbn07XG52YXIgbmFtZVJlZ2lzdHJ5RiA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoa2V5KSA9PiB7XG5cdG1peGluUmVnaXN0cnk/LmRlbGV0ZT8uKGtleSk7XG59KTtcbnZhciByZWdpc3Rlck1peGluID0gKG5hbWUsIG1peGluKSA9PiB7XG5cdGlmICghbWl4aW5OYW1lc3BhY2U/Lmhhcz8uKG1peGluKSkge1xuXHRcdGNvbnN0IGtleSA9IG5hbWU/LnRyaW0/LigpO1xuXHRcdGlmIChrZXkpIHtcblx0XHRcdG1peGluTmFtZXNwYWNlPy5zZXQ/LihtaXhpbiwga2V5KTtcblx0XHRcdG1peGluUmVnaXN0cnk/LnNldD8uKGtleSwgbWl4aW4pO1xuXHRcdFx0bmFtZVJlZ2lzdHJ5Rj8ucmVnaXN0ZXI/LihtaXhpbiwga2V5KTtcblx0XHRcdHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMobWl4aW4pO1xuXHRcdH1cblx0fVxufTtcbmFkZFJvb3QodHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xudmFyIERPTU1peGluID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihuYW1lID0gbnVsbCkge1xuXHRcdGlmIChuYW1lKSByZWdpc3Rlck1peGluKG5hbWUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3Qod0VsZW1lbnQsIHdTZWxmLCByZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWxlbWVudCwgd1NlbGYsIHJlbGF0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRzdG9yZUZvckVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiBuYW1lZFN0b3JlTWFwcy5nZXQodGhpcy5uYW1lIHx8IFwiXCIpPy5nZXQ/LihlbGVtZW50KTtcblx0fVxuXHRyZWxhdGVkRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpO1xuXHR9XG5cdGdldCBlbGVtZW50cygpIHtcblx0XHRyZXR1cm4gbWl4aW5FbGVtZW50cz8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIG1peGluTmFtZXNwYWNlPy5nZXQ/Lih0aGlzKTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0hhbmRsZXIudHNcbnZhciBoYW5kbGVIaWRkZW4gPSAoZWxlbWVudCwgXywgdmlzaWJsZSkgPT4ge1xuXHRjb25zdCAkcmVmID0gdmlzaWJsZTtcblx0aWYgKGhhc1ZhbHVlKHZpc2libGUpKSB2aXNpYmxlID0gdmlzaWJsZS52YWx1ZTtcblx0Y29uc3QgaXNWaXNpYmxlID0gKHZpc2libGUgPSBub3JtYWxpemVQcmltaXRpdmUodmlzaWJsZSkpICE9IG51bGwgJiYgdmlzaWJsZSAhPT0gZmFsc2U7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgZWxlbWVudC5oaWRkZW4gPSAhaXNWaXNpYmxlO1xuXHRcdGVsc2UgaWYgKGlzVmlzaWJsZSkgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKTtcblx0XHRlbHNlIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIiwgXCJcIik7XG5cdH0pO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgaGFuZGxlUHJvcGVydHkgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIShwcm9wID0gdHlwZW9mIHByb3AgPT0gXCJzdHJpbmdcIiA/IGtlYmFiVG9DYW1lbChwcm9wKSA6IHByb3ApIHx8ICFlbCB8fCBbXG5cdFx0XCJzdHlsZVwiLFxuXHRcdFwiZGF0YXNldFwiLFxuXHRcdFwiYXR0cmlidXRlU3R5bGVNYXBcIixcblx0XHRcInN0eWxlTWFwXCIsXG5cdFx0XCJjb21wdXRlZFN0eWxlTWFwXCJcblx0XS5pbmRleE9mKHByb3AgfHwgXCJcIikgIT0gLTEpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0aWYgKGVsPy5bcHJvcF0gPT09IHZhbCkgcmV0dXJuIGVsO1xuXHRpZiAoZWw/Lltwcm9wXSAhPT0gdmFsKSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodmFsICE9IG51bGwpIGVsW3Byb3BdID0gdmFsO1xuXHRcdGVsc2UgZGVsZXRlIGVsW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVEYXRhc2V0ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3QgZGF0YXNldFJlZiA9IGVsPy5kYXRhc2V0O1xuXHRpZiAoIXByb3AgfHwgIWVsIHx8ICFkYXRhc2V0UmVmKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWw/LnZhbHVlO1xuXHRwcm9wID0ga2ViYWJUb0NhbWVsKHByb3ApO1xuXHRpZiAoZGF0YXNldFJlZj8uW3Byb3BdID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPT09IGZhbHNlKSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0ZWxzZSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiKSBkYXRhc2V0UmVmW3Byb3BdID0gU3RyaW5nKHZhbCk7XG5cdFx0ZWxzZSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgZGVsZXRlU3R5bGVQcm9wZXJ0eSA9IChlbCwgbmFtZSkgPT4gZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoY2FtZWxUb0tlYmFiKG5hbWUpKTtcbnZhciBoYW5kbGVTdHlsZUNoYW5nZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IHN0eWxlUmVmID0gZWw/LnN0eWxlO1xuXHRpZiAoIXByb3AgfHwgdHlwZW9mIHByb3AgIT0gXCJzdHJpbmdcIiB8fCAhZWwgfHwgIXN0eWxlUmVmKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIodmFsLCAoKSA9PiB7XG5cdFx0aWYgKGlzVmFsKHZhbCkgfHwgaGFzVmFsdWUodmFsKSB8fCBpc1ZhbHVlVW5pdCh2YWwpKSBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wLCB2YWwpO1xuXHRcdGVsc2UgaWYgKHZhbCA9PSBudWxsKSBkZWxldGVTdHlsZVByb3BlcnR5KGVsLCBwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlQXR0cmlidXRlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCFwcm9wIHx8ICFlbCkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRwcm9wID0gY2FtZWxUb0tlYmFiKHByb3ApO1xuXHRpZiAoZWw/LmdldEF0dHJpYnV0ZT8uKHByb3ApID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIgJiYgdmFsICE9IG51bGwgJiYgKHR5cGVvZiB2YWwgPT0gXCJib29sZWFuXCIgPyB2YWwgPT0gdHJ1ZSA6IHRydWUpKSBlbD8uc2V0QXR0cmlidXRlPy4ocHJvcCwgU3RyaW5nKHZhbCkpO1xuXHRcdGVsc2UgZWw/LnJlbW92ZUF0dHJpYnV0ZT8uKHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gZGlzdC9kb20uanNcbnZhciBjciA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgY24gPSBnbG9iYWxUaGlzW2NyXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1mcmVxXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBpeGVsLXJhdGlvXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteFwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteVwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9XG5dLmZvckVhY2goKGUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgPiBcInVcIiB8fCB0eXBlb2YgQ1NTPy5yZWdpc3RlclByb3BlcnR5ICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCB0ID0gU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoISghdCB8fCBjbi5oYXModCkpKSB0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KGUpO1xuXHR9IGNhdGNoIChuKSB7XG5cdFx0U3RyaW5nKG4/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSAhPT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIiAmJiBjb25zb2xlLndhcm4obik7XG5cdH0gZmluYWxseSB7XG5cdFx0Y24uYWRkKHQpO1xuXHR9XG59KTtcbnZhciB4byA9IHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgbXIgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA8IFwidVwiICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdGZvciAoOzspIG1yLmZvckVhY2goKGUpID0+IGU/LigpKSwgYXdhaXQgbmV3IFByb21pc2UoKGUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShlKSk7XG59KTtcbnZhciBMbiA9IHt9O1xuZnVuY3Rpb24gaihlLCB0LCBuLCByID0gTG4pIHtcblx0ZT8uYWRkRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xuXHRjb25zdCBpID0gdHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgIWU/LmRlcmVmID8gbmV3IFdlYWtSZWYoZSkgOiBlO1xuXHRyZXR1cm4gKCkgPT4gaT8uZGVyZWY/LigpPy5yZW1vdmVFdmVudExpc3RlbmVyPy4odCwgbiwgcik7XG59XG52YXIgdnIgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xudmFyIGdyID0gZ2xvYmFsVGhpc1t2cl0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHpuID0gKCkgPT4ge1xuXHRjb25zdCBlID0gdHlwZW9mIG1hdGNoTWVkaWEgPCBcInVcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiAhMSwgdCA9IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGwsIG4gPSB0ID8ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt0LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3QuaGVpZ2h0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dC5vZmZzZXRMZWZ0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt0Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh0LnNjYWxlID8/IDEpXG5cdH0gOiB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiA8IFwidVwiKSB7XG5cdFx0Y29uc3QgciA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIiwgaSA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBlID8gaSA6IHIsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGUgPyByIDogaSxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLm5cblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi5uXG5cdH07XG59O1xudmFyIFd0ID0gem4oKTtcbnZhciBKID0gbmV3IE9mZnNjcmVlbkNhbnZhcygxLCAxKS5nZXRDb250ZXh0KFwiMmRcIik7XG52YXIgTHIgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BvbkJvcmRlck9ic2VydmVcIik7XG52YXIgaWUgPSBnbG9iYWxUaGlzW0xyXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgenIgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BvbkNvbnRlbnRPYnNlcnZlXCIpO1xudmFyIGFlID0gZ2xvYmFsVGhpc1t6cl0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGplID0gKGUpID0+ICh0eXBlb2YgZT8uY3VycmVudCA9PSBcIm9iamVjdFwiICYmIChlID0gZT8uZWxlbWVudCA/PyBlPy5jdXJyZW50ID8/ICh0eXBlb2YgZT8uc2VsZiA9PSBcIm9iamVjdFwiID8gZT8uc2VsZiA6IG51bGwpID8/IGUpLCBlKTtcbnZhciBHdCA9IChlLCB0LCBuLCByKSA9PiB7XG5cdGNvbnN0IGkgPSBuZXcgU2V0KFsuLi5uLnNwbGl0KFwiLFwiKSB8fCBbbl1dLm1hcCgoYSkgPT4gYS50cmltKCkpKSwgbCA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChhLCBvKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBkIG9mIGEpIGlmIChkLnR5cGUgPT0gXCJjaGlsZExpc3RcIikge1xuXHRcdFx0Y29uc3QgYyA9IEFycmF5LmZyb20oZC5hZGRlZE5vZGVzKSB8fCBbXSwgcCA9IEFycmF5LmZyb20oZC5yZW1vdmVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0Yy5wdXNoKC4uLkFycmF5LmZyb20oZC5hZGRlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChoKSA9PiBBcnJheS5mcm9tKGg/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgcC5wdXNoKC4uLkFycmF5LmZyb20oZC5yZW1vdmVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGgpID0+IEFycmF5LmZyb20oaD8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBbLi4ubmV3IFNldChjKV0uZmlsdGVyKChoKSA9PiBoPy5tYXRjaGVzPy4odCkpPy5tYXA/LigoaCkgPT4ge1xuXHRcdFx0XHRpLmZvckVhY2goKHUpID0+IHtcblx0XHRcdFx0XHRyKHtcblx0XHRcdFx0XHRcdHRhcmdldDogaCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogdSxcblx0XHRcdFx0XHRcdG9sZFZhbHVlOiBoPy5nZXRBdHRyaWJ1dGU/Lih1KVxuXHRcdFx0XHRcdH0sIG8pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBkLnRhcmdldD8ubWF0Y2hlcz8uKHQpICYmIGQuYXR0cmlidXRlTmFtZSAmJiBpLmhhcyhkLmF0dHJpYnV0ZU5hbWUpICYmIHIoZCwgbyk7XG5cdH0pO1xuXHRyZXR1cm4gbC5vYnNlcnZlKGUgPSBqZShlKSwge1xuXHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiAhMCxcblx0XHRhdHRyaWJ1dGVzOiAhMCxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5pXSxcblx0XHRjaGlsZExpc3Q6ICEwLFxuXHRcdHN1YnRyZWU6ICEwLFxuXHRcdGNoYXJhY3RlckRhdGE6ICEwXG5cdH0pLCBbLi4uZS5xdWVyeVNlbGVjdG9yQWxsKHQpXS5tYXAoKGEpID0+IGkuZm9yRWFjaCgobykgPT4gcih7XG5cdFx0dGFyZ2V0OiBhLFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IG8sXG5cdFx0b2xkVmFsdWU6IGE/LmdldEF0dHJpYnV0ZT8uKG8pXG5cdH0sIGwpKSksIGw7XG59O1xudmFyIFRyID0gKGUsIHQgPSBcIipcIiwgbiA9IChyLCBpKSA9PiB7fSkgPT4ge1xuXHRjb25zdCByID0gKHUpID0+IHtcblx0XHRjb25zdCBzID0gQXJyYXkuZnJvbSh1IHx8IFtdKSB8fCBbXTtcblx0XHRyZXR1cm4gcy5wdXNoKC4uLkFycmF5LmZyb20odSB8fCBbXSkuZmxhdE1hcCgoZikgPT4gQXJyYXkuZnJvbShmPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIFsuLi5BcnJheS5mcm9tKG5ldyBTZXQocykudmFsdWVzKCkpXS5maWx0ZXIoKGYpID0+IGY/Lm1hdGNoZXM/Lih0KSk7XG5cdH07XG5cdGxldCBpID0gbnVsbDtcblx0Y29uc3QgbCA9ICh1KSA9PiB7XG5cdFx0Y29uc3QgcyA9IGk/LmRlcmVmPy4oKSwgZiA9IHIodS5hZGRlZE5vZGVzKSwgbSA9IHIodS5yZW1vdmVkTm9kZXMpO1xuXHRcdChmLmxlbmd0aCA+IDAgfHwgbS5sZW5ndGggPiAwKSAmJiBuPy4oe1xuXHRcdFx0dHlwZTogdS50eXBlLFxuXHRcdFx0dGFyZ2V0OiB1LnRhcmdldCxcblx0XHRcdGF0dHJpYnV0ZU5hbWU6IHUuYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogdS5hdHRyaWJ1dGVOYW1lc3BhY2UsXG5cdFx0XHRuZXh0U2libGluZzogdS5uZXh0U2libGluZyxcblx0XHRcdG9sZFZhbHVlOiB1Lm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiB1LnByZXZpb3VzU2libGluZyxcblx0XHRcdGFkZGVkTm9kZXM6IGYsXG5cdFx0XHRyZW1vdmVkTm9kZXM6IG1cblx0XHR9LCBzKTtcblx0fSwgYSA9ICh1KSA9PiB7XG5cdFx0bCh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbdT8udGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiB1Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIG8gPSAodSkgPT4ge1xuXHRcdGwoe1xuXHRcdFx0YWRkZWROb2RlczogW3U/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHJlbW92ZWROb2RlczogW3U/LnRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogdT8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBkID0gKHUpID0+IHtcblx0XHRsKHtcblx0XHRcdGFkZGVkTm9kZXM6IFt1Py50YXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHJlbW92ZWROb2RlczogW3U/LnJlbGF0ZWRUYXJnZXQgfHwgZG9jdW1lbnQ/LmFjdGl2ZUVsZW1lbnRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IHU/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgYyA9IHtcblx0XHRwYXNzaXZlOiAhMCxcblx0XHRjYXB0dXJlOiAhMVxuXHR9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkgcmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIG8sIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG8sIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIG8sIGMpLCB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSkgcmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIG8sIGMpLCB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG8sIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIG8sIGMpLCB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBhLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIG8sIGMpO1xuXHR9IH07XG5cdGlmICh0Py5pbmNsdWRlcz8uKFwiOmZvY3VzXCIpICYmIHQ/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtd2l0aGluXCIpICYmIHQ/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtdmlzaWJsZVwiKSkgcmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIG8sIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBhLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGQsIGMpO1xuXHR9IH07XG5cdGNvbnN0IHAgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigodSwgcykgPT4ge1xuXHRcdGZvciAoY29uc3QgZiBvZiB1KSBmLnR5cGUgPT0gXCJjaGlsZExpc3RcIiAmJiBsKGYpO1xuXHR9KTtcblx0aSA9IG5ldyBXZWFrUmVmKHApLCAoZT8uZWxlbWVudCA/PyBlKSBpbnN0YW5jZW9mIE5vZGUgJiYgcC5vYnNlcnZlKGUgPSBqZShlKSwge1xuXHRcdGNoaWxkTGlzdDogITAsXG5cdFx0c3VidHJlZTogITBcblx0fSk7XG5cdGNvbnN0IGggPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCh0KSk7XG5cdHJldHVybiBoLmxlbmd0aCA+IDAgJiYgbj8uKHtcblx0XHRhZGRlZE5vZGVzOiBoLFxuXHRcdHJlbW92ZWROb2RlczogW11cblx0fSwgcCksIHA7XG59O1xudmFyIEt0ID0gXCJET01cIjtcbnZhciBtZSA9IHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpIDogbnVsbDtcbm1lICYmICh0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKT8uYXBwZW5kQ2hpbGQ/LihtZSksIG1lLmRhdGFzZXQub3duZXIgPSBLdCk7XG52YXIgaXQgPSB0eXBlb2YgQ1NTU3R5bGVWYWx1ZSA8IFwidVwiICYmIHR5cGVvZiBDU1NVbml0VmFsdWUgPCBcInVcIjtcbnZhciBHID0gKGUpID0+IGl0ICYmIGUgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlO1xudmFyIHEgPSAoZSkgPT4gaXQgJiYgZSBpbnN0YW5jZW9mIENTU1VuaXRWYWx1ZTtcbnZhciB6ID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghKCFlIHx8ICF0KSkge1xuXHRcdGlmIChuID09IG51bGwpIHtcblx0XHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gXCJcIiAmJiBlLnJlbW92ZVByb3BlcnR5KHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRlLmdldFByb3BlcnR5VmFsdWUodCkgIT09IG4gJiYgZS5zZXRQcm9wZXJ0eSh0LCBuLCByKTtcblx0fVxufTtcbnZhciBPciA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoIWUgfHwgIXQpIHJldHVybiBlO1xuXHRjb25zdCBpID0gY2FtZWxUb0tlYmFiKHQpLCBsID0gZS5zdHlsZSwgYSA9IGUuYXR0cmlidXRlU3R5bGVNYXAgPz8gZS5zdHlsZU1hcDtcblx0aWYgKCFpdCB8fCAhYSkgcmV0dXJuIGtuKGUsIHQsIG4sIHIpO1xuXHRsZXQgbyA9IGhhc1ZhbHVlKG4pICYmICEoRyhuKSB8fCBxKG4pKSA/IG4/LnZhbHVlIDogbjtcblx0aWYgKG8gPT0gbnVsbCkgcmV0dXJuIGEuZGVsZXRlPy4oaSksIGwgJiYgeihsLCBpLCBudWxsLCByKSwgZTtcblx0aWYgKEcobykpIHtcblx0XHRjb25zdCBkID0gYS5nZXQoaSk7XG5cdFx0aWYgKHEobykgJiYgcShkKSkge1xuXHRcdFx0aWYgKGQudmFsdWUgPT09IG8udmFsdWUgJiYgZC51bml0ID09PSBvLnVuaXQpIHJldHVybiBlO1xuXHRcdH0gZWxzZSBpZiAoZCA9PT0gbykgcmV0dXJuIGU7XG5cdFx0cmV0dXJuIGEuc2V0KGksIG8pLCBlO1xuXHR9XG5cdGlmICh0eXBlb2YgbyA9PSBcIm51bWJlclwiKSBpZiAoQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0Y29uc3QgZCA9IENTUy5udW1iZXIobyksIGMgPSBhLmdldChpKTtcblx0XHRyZXR1cm4gcShjKSAmJiBjLnZhbHVlID09PSBkLnZhbHVlICYmIGMudW5pdCA9PT0gZC51bml0IHx8IGEuc2V0KGksIGQpLCBlO1xuXHR9IGVsc2UgcmV0dXJuIHoobCwgaSwgU3RyaW5nKG8pLCByKSwgZTtcblx0aWYgKHR5cGVvZiBvID09IFwic3RyaW5nXCIgJiYgIUcobykpIHtcblx0XHRjb25zdCBkID0gdHJ5U3RyaW5nQXNOdW1iZXIobyk7XG5cdFx0aWYgKHR5cGVvZiBkID09IFwibnVtYmVyXCIgJiYgQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBjID0gQ1NTLm51bWJlcihkKSwgcCA9IGEuZ2V0KGkpO1xuXHRcdFx0cmV0dXJuIHEocCkgJiYgcC52YWx1ZSA9PT0gYy52YWx1ZSAmJiBwLnVuaXQgPT09IGMudW5pdCB8fCBhLnNldChpLCBjKSwgZTtcblx0XHR9IGVsc2UgcmV0dXJuIHoobCwgaSwgbywgciksIGU7XG5cdH1cblx0cmV0dXJuIHoobCwgaSwgU3RyaW5nKG8pLCByKSwgZTtcbn07XG52YXIga24gPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IHtcblx0aWYgKCFlIHx8ICF0KSByZXR1cm4gZTtcblx0Y29uc3QgaSA9IGNhbWVsVG9LZWJhYih0KSwgbCA9IGUuc3R5bGU7XG5cdGlmICghbCkgcmV0dXJuIGU7XG5cdGxldCBhID0gaGFzVmFsdWUobikgJiYgIShHKG4pIHx8IHEobikpID8gbj8udmFsdWUgOiBuO1xuXHRyZXR1cm4gdHlwZW9mIGEgPT0gXCJzdHJpbmdcIiAmJiAhRyhhKSAmJiAoYSA9IHRyeVN0cmluZ0FzTnVtYmVyKGEpID8/IGEpLCBhID09IG51bGwgPyAoeihsLCBpLCBudWxsLCByKSwgZSkgOiAoRyhhKSwgeihsLCBpLCBTdHJpbmcoYSksIHIpLCBlKTtcbn07XG52YXIgYXQgPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IGl0ID8gT3IoZSwgdCwgbiwgcikgOiBrbihlLCB0LCBuLCByKTtcbnZhciBSbiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIFVyID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbmFtZWRTdG9yZU1hcHNcIik7XG52YXIgZ2UgPSBnbG9iYWxUaGlzW1VyXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBZciA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBbLi4uZS5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChuPy5tYXA/LigoW3IsIGldKSA9PiBbciwgaT8uZ2V0Py4odCldKT8uZmlsdGVyPy4oKFtyLCBpXSkgPT4gISFpKSB8fCBbXSk7XG59O1xudmFyIHZlID0gKGUpID0+ICh7XG5cdHN0b3JlU2V0OiBZcihnZSwgZSksXG5cdG1peGluU2V0OiBOPy5nZXQ/LihlKSxcblx0YmVoYXZpb3JTZXQ6IFJuPy5nZXQ/LihlKVxufSk7XG52YXIgS3IgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0Bib3VuZE1peGluU2V0XCIpO1xudmFyIE4gPSBnbG9iYWxUaGlzW0tyXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgUXIgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkVsZW1lbnRzXCIpO1xudmFyIEQgPSBnbG9iYWxUaGlzW1FyXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZWkgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpblJlZ2lzdHJ5XCIpO1xudmFyIHllID0gZ2xvYmFsVGhpc1tlaV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgdGkgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbk5hbWVzcGFjZVwiKTtcbnZhciBZZSA9IGdsb2JhbFRoaXNbdGldID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciAkbiA9IChlLCB0KSA9PiB7XG5cdHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgKHQgPSB5ZT8uZ2V0Py4odCkpO1xuXHRjb25zdCBuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKSwgciA9IG5ldyBTZXQoWy4uLm5dLm1hcCgoYSkgPT4geWU/LmdldD8uKGEpKS5maWx0ZXIoKGEpID0+ICEhYSkpLCBpID0gTj8uZ2V0Py4oZSkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdEQ/Lmhhcz8uKHQpIHx8IEQ/LnNldD8uKHQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKSwgTj8uaGFzPy4oZSkgfHwgTj8uc2V0Py4oZSwgaSk7XG5cdGNvbnN0IGwgPSBuZXcgV2Vha1JlZihlKTtcblx0aT8uaGFzPy4odCkgfHwgKHIuaGFzKHQpIHx8IHQ/LmRpc2Nvbm5lY3Q/LihsLCB0LCB2ZShlKSksIChyLmhhcyh0KSB8fCAhRD8uZ2V0Py4odCk/Lmhhcz8uKGUpKSAmJiAodD8uY29ubmVjdD8uKGwsIHQsIHZlKGUpKSwgbi5hZGQoWWU/LmdldD8uKHQpKSwgaT8uYWRkPy4odCksIGU/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubl0uZmlsdGVyKChhKSA9PiAhIWEpLmpvaW4oXCIgXCIpKSksIEQ/LmdldD8uKHQpPy5hZGQ/LihlKSksIGk/Lmhhcz8uKHQpICYmIChyLmhhcyh0KSB8fCAoaT8uZGVsZXRlPy4odCksIHQ/LmRpc2Nvbm5lY3Q/LihsLCB0LCB2ZShlKSkpKTtcbn07XG52YXIgUnQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xudmFyIG5pID0gKGUgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50IDogbnVsbCkgPT4ge1xuXHRpZiAoZSkgcmV0dXJuIFJ0Py5oYXM/LihlKSB8fCAoUnQ/LmFkZD8uKGUpLCBHdChlLCBcIipcIiwgXCJkYXRhLW1peGluXCIsICh0KSA9PiAkdCh0LnRhcmdldCkpLCBUcihlLCBcIltkYXRhLW1peGluXVwiLCAodCkgPT4ge1xuXHRcdGZvciAoY29uc3QgbiBvZiB0LmFkZGVkTm9kZXMpIG4gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAkdChuKTtcblx0fSkpLCBlO1xufTtcbnZhciAkdCA9IChlKSA9PiB7XG5cdGNvbnN0IHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZT8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pO1xuXHRbLi4ubmV3IFNldChbLi4udF0ubWFwKChuKSA9PiB5ZT8uZ2V0Py4obikpLmZpbHRlcigobikgPT4gISFuKSldLm1hcD8uKChuKSA9PiAkbihlLCBuKSk7XG59O1xudmFyIHJpID0gKGUsIHQpID0+IHtcblx0ZS5mb3JFYWNoKChuKSA9PiB0ID8gJG4obiwgdCkgOiAkdChuKSk7XG59O1xudmFyIGlpID0gKGUpID0+IHtcblx0Zm9yIChjb25zdCB0IG9mIFJ0KSByaSh0Py5xdWVyeVNlbGVjdG9yQWxsPy4oXCJbZGF0YS1taXhpbl1cIiksIGUpO1xufTtcbnZhciBhaSA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoZSkgPT4ge1xuXHR5ZT8uZGVsZXRlPy4oZSk7XG59KTtcbnZhciBvaSA9IChlLCB0KSA9PiB7XG5cdGlmICghWWU/Lmhhcz8uKHQpKSB7XG5cdFx0Y29uc3QgbiA9IGU/LnRyaW0/LigpO1xuXHRcdG4gJiYgKFllPy5zZXQ/Lih0LCBuKSwgeWU/LnNldD8uKG4sIHQpLCBhaT8ucmVnaXN0ZXI/Lih0LCBuKSwgaWkodCkpO1xuXHR9XG59O1xubmkodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudCA6IG51bGwpO1xudmFyIHhzID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihlID0gbnVsbCkge1xuXHRcdGUgJiYgb2koZSwgdGhpcyk7XG5cdH1cblx0Y29ubmVjdChlLCB0LCBuKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlLCB0LCBuKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c3RvcmVGb3JFbGVtZW50KGUpIHtcblx0XHRyZXR1cm4gZ2UuZ2V0KHRoaXMubmFtZSB8fCBcIlwiKT8uZ2V0Py4oZSk7XG5cdH1cblx0cmVsYXRlZEZvckVsZW1lbnQoZSkge1xuXHRcdHJldHVybiB2ZShlKTtcblx0fVxuXHRnZXQgZWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIEQ/LmdldD8uKHRoaXMpO1xuXHR9XG5cdGdldCBzdG9yYWdlKCkge1xuXHRcdHJldHVybiBnZT8uZ2V0Py4odGhpcy5uYW1lIHx8IFwiXCIpO1xuXHR9XG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBZZT8uZ2V0Py4odGhpcyk7XG5cdH1cbn07XG52YXIgbGkgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzXCIpO1xudmFyIGpuID0gZ2xvYmFsVGhpc1tsaV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5bXG5cdHtcblx0XHRuYW1lOiBcIi0tc2NyZWVuLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2NyZWVuLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jbGlwLWFtcGxcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtZnJlcVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1waXhlbC1yYXRpb1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMVwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudC14XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXlcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC1sZWZ0XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JvbGwtdG9wXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXhcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXlcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fVxuXS5mb3JFYWNoKChlKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTID4gXCJ1XCIgfHwgdHlwZW9mIENTUz8ucmVnaXN0ZXJQcm9wZXJ0eSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0Y29uc3QgdCA9IFN0cmluZyhlPy5uYW1lIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCEoIXQgfHwgam4uaGFzKHQpKSkgdHJ5IHtcblx0XHRDU1MucmVnaXN0ZXJQcm9wZXJ0eShlKTtcblx0fSBjYXRjaCAobikge1xuXHRcdFN0cmluZyhuPy5uYW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkgIT09IFwiaW52YWxpZG1vZGlmaWNhdGlvbmVycm9yXCIgJiYgY29uc29sZS53YXJuKG4pO1xuXHR9IGZpbmFsbHkge1xuXHRcdGpuLmFkZCh0KTtcblx0fVxufSk7XG50eXBlb2YgZG9jdW1lbnQgPCBcInVcIiAmJiBkb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50O1xudmFyIHVpID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPCBcInVcIiAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXN5bmMgKCkgPT4ge1xuXHRmb3IgKDs7KSB1aS5mb3JFYWNoKChlKSA9PiBlPy4oKSksIGF3YWl0IG5ldyBQcm9taXNlKChlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSkpO1xufSk7XG52YXIgY2kgPSB7fTtcbmZ1bmN0aW9uIE0oZSwgdCwgbiwgciA9IGNpKSB7XG5cdGU/LmFkZEV2ZW50TGlzdGVuZXI/Lih0LCBuLCByKTtcblx0Y29uc3QgaSA9IHR5cGVvZiBlID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGUgPT0gXCJmdW5jdGlvblwiICYmICFlPy5kZXJlZiA/IG5ldyBXZWFrUmVmKGUpIDogZTtcblx0cmV0dXJuICgpID0+IGk/LmRlcmVmPy4oKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xufVxudmFyIGRpID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAem9vbVZhbHVlc1wiKTtcbmdsb2JhbFRoaXNbZGldID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBmaSA9ICgpID0+IHtcblx0Y29uc3QgZSA9IHR5cGVvZiBtYXRjaE1lZGlhIDwgXCJ1XCIgPyBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpPy5tYXRjaGVzIDogITEsIHQgPSB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsLCBuID0gdCA/IHtcblx0XHRcIi0tdnYtd2lkdGhcIjogYCR7dC53aWR0aH1weGAsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiBgJHt0LmhlaWdodH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IGAke3Qub2Zmc2V0TGVmdH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC10b3BcIjogYCR7dC5vZmZzZXRUb3B9cHhgLFxuXHRcdFwiLS12di1zY2FsZVwiOiBTdHJpbmcodC5zY2FsZSA/PyAxKVxuXHR9IDoge1xuXHRcdFwiLS12di13aWR0aFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJXaWR0aH1weGAgOiBcIjBweFwiLFxuXHRcdFwiLS12di1oZWlnaHRcIjogdHlwZW9mIHdpbmRvdyA8IFwidVwiID8gYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LW9mZnNldC10b3BcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtc2NhbGVcIjogXCIxXCJcblx0fTtcblx0aWYgKHR5cGVvZiBzY3JlZW4gPCBcInVcIikge1xuXHRcdGNvbnN0IHIgPSBzY3JlZW4/LmF2YWlsV2lkdGggKyBcInB4XCIsIGkgPSBzY3JlZW4/LmF2YWlsSGVpZ2h0ICsgXCJweFwiO1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IE1hdGgubWluKHNjcmVlbj8ud2lkdGgsIHNjcmVlbj8uYXZhaWxXaWR0aCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmhlaWdodCwgc2NyZWVuPy5hdmFpbEhlaWdodCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tYXZhaWwtd2lkdGhcIjogZSA/IGkgOiByLFxuXHRcdFx0XCItLWF2YWlsLWhlaWdodFwiOiBlID8gciA6IGksXG5cdFx0XHRcIi0tdmlldy1oZWlnaHRcIjogTWF0aC5taW4oc2NyZWVuPy5hdmFpbEhlaWdodCwgd2luZG93Py5pbm5lckhlaWdodCkgKyBcInB4XCIsXG5cdFx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogU3RyaW5nKGRldmljZVBpeGVsUmF0aW8gfHwgMSksXG5cdFx0XHQuLi5uXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdFwiLS1zY3JlZW4td2lkdGhcIjogXCIwcHhcIixcblx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1hdmFpbC13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tdmlldy1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogXCIxXCIsXG5cdFx0Li4ublxuXHR9O1xufTtcbmZpKCk7XG5uZXcgT2Zmc2NyZWVuQ2FudmFzKDEsIDEpLmdldENvbnRleHQoXCIyZFwiKTtcbnZhciBwaSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQm9yZGVyT2JzZXJ2ZVwiKTtcbmdsb2JhbFRoaXNbcGldID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBoaSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQ29udGVudE9ic2VydmVcIik7XG5nbG9iYWxUaGlzW2hpXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgRm4gPSAoZSkgPT4gKHR5cGVvZiBlPy5jdXJyZW50ID09IFwib2JqZWN0XCIgJiYgKGUgPSBlPy5lbGVtZW50ID8/IGU/LmN1cnJlbnQgPz8gKHR5cGVvZiBlPy5zZWxmID09IFwib2JqZWN0XCIgPyBlPy5zZWxmIDogbnVsbCkgPz8gZSksIGUpO1xudmFyIG1pID0gKGUsIHQsIG4sIHIpID0+IHtcblx0Y29uc3QgaSA9IG5ldyBTZXQoWy4uLm4uc3BsaXQoXCIsXCIpIHx8IFtuXV0ubWFwKChhKSA9PiBhLnRyaW0oKSkpLCBsID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKGEsIG8pID0+IHtcblx0XHRmb3IgKGNvbnN0IGQgb2YgYSkgaWYgKGQudHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRjb25zdCBjID0gQXJyYXkuZnJvbShkLmFkZGVkTm9kZXMpIHx8IFtdLCBwID0gQXJyYXkuZnJvbShkLnJlbW92ZWROb2RlcykgfHwgW107XG5cdFx0XHRjLnB1c2goLi4uQXJyYXkuZnJvbShkLmFkZGVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGgpID0+IEFycmF5LmZyb20oaD8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBwLnB1c2goLi4uQXJyYXkuZnJvbShkLnJlbW92ZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoaCkgPT4gQXJyYXkuZnJvbShoPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIFsuLi5uZXcgU2V0KGMpXS5maWx0ZXIoKGgpID0+IGg/Lm1hdGNoZXM/Lih0KSk/Lm1hcD8uKChoKSA9PiB7XG5cdFx0XHRcdGkuZm9yRWFjaCgodSkgPT4ge1xuXHRcdFx0XHRcdHIoe1xuXHRcdFx0XHRcdFx0dGFyZ2V0OiBoLFxuXHRcdFx0XHRcdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lOiB1LFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IGg/LmdldEF0dHJpYnV0ZT8uKHUpXG5cdFx0XHRcdFx0fSwgbyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGQudGFyZ2V0Py5tYXRjaGVzPy4odCkgJiYgZC5hdHRyaWJ1dGVOYW1lICYmIGkuaGFzKGQuYXR0cmlidXRlTmFtZSkgJiYgcihkLCBvKTtcblx0fSk7XG5cdHJldHVybiBsLm9ic2VydmUoZSA9IEZuKGUpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6ICEwLFxuXHRcdGF0dHJpYnV0ZXM6ICEwLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLmldLFxuXHRcdGNoaWxkTGlzdDogITAsXG5cdFx0c3VidHJlZTogITAsXG5cdFx0Y2hhcmFjdGVyRGF0YTogITBcblx0fSksIFsuLi5lLnF1ZXJ5U2VsZWN0b3JBbGwodCldLm1hcCgoYSkgPT4gaS5mb3JFYWNoKChvKSA9PiByKHtcblx0XHR0YXJnZXQ6IGEsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogbyxcblx0XHRvbGRWYWx1ZTogYT8uZ2V0QXR0cmlidXRlPy4obylcblx0fSwgbCkpKSwgbDtcbn07XG52YXIgdmkgPSAoZSwgdCA9IFwiKlwiLCBuID0gKHIsIGkpID0+IHt9KSA9PiB7XG5cdGNvbnN0IHIgPSAodSkgPT4ge1xuXHRcdGNvbnN0IHMgPSBBcnJheS5mcm9tKHUgfHwgW10pIHx8IFtdO1xuXHRcdHJldHVybiBzLnB1c2goLi4uQXJyYXkuZnJvbSh1IHx8IFtdKS5mbGF0TWFwKChmKSA9PiBBcnJheS5mcm9tKGY/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgWy4uLkFycmF5LmZyb20obmV3IFNldChzKS52YWx1ZXMoKSldLmZpbHRlcigoZikgPT4gZj8ubWF0Y2hlcz8uKHQpKTtcblx0fTtcblx0bGV0IGkgPSBudWxsO1xuXHRjb25zdCBsID0gKHUpID0+IHtcblx0XHRjb25zdCBzID0gaT8uZGVyZWY/LigpLCBmID0gcih1LmFkZGVkTm9kZXMpLCBtID0gcih1LnJlbW92ZWROb2Rlcyk7XG5cdFx0KGYubGVuZ3RoID4gMCB8fCBtLmxlbmd0aCA+IDApICYmIG4/Lih7XG5cdFx0XHR0eXBlOiB1LnR5cGUsXG5cdFx0XHR0YXJnZXQ6IHUudGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogdS5hdHRyaWJ1dGVOYW1lLFxuXHRcdFx0YXR0cmlidXRlTmFtZXNwYWNlOiB1LmF0dHJpYnV0ZU5hbWVzcGFjZSxcblx0XHRcdG5leHRTaWJsaW5nOiB1Lm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IHUub2xkVmFsdWUsXG5cdFx0XHRwcmV2aW91c1NpYmxpbmc6IHUucHJldmlvdXNTaWJsaW5nLFxuXHRcdFx0YWRkZWROb2RlczogZixcblx0XHRcdHJlbW92ZWROb2RlczogbVxuXHRcdH0sIHMpO1xuXHR9LCBhID0gKHUpID0+IHtcblx0XHRsKHtcblx0XHRcdGFkZGVkTm9kZXM6IFt1Py50YXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHJlbW92ZWROb2RlczogW3U/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IHU/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgbyA9ICh1KSA9PiB7XG5cdFx0bCh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbdT8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbdT8udGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiB1Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIGQgPSAodSkgPT4ge1xuXHRcdGwoe1xuXHRcdFx0YWRkZWROb2RlczogW3U/LnRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbdT8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogdT8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBjID0ge1xuXHRcdHBhc3NpdmU6ICEwLFxuXHRcdGNhcHR1cmU6ICExXG5cdH07XG5cdGlmICh0Py5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpICYmIHQ/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBhLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIG8sIGMpO1xuXHR9IH07XG5cdGlmICh0Py5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIG8sIGMpO1xuXHR9IH07XG5cdGlmICh0Py5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkgcmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6Zm9jdXNcIikgJiYgdD8uaW5jbHVkZXM/LihcIjpmb2N1cy13aXRoaW5cIikgJiYgdD8uaW5jbHVkZXM/LihcIjpmb2N1cy12aXNpYmxlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgbywgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGQsIGMpLCB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZCwgYyk7XG5cdH0gfTtcblx0Y29uc3QgcCA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCh1LCBzKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBmIG9mIHUpIGYudHlwZSA9PSBcImNoaWxkTGlzdFwiICYmIGwoZik7XG5cdH0pO1xuXHRpID0gbmV3IFdlYWtSZWYocCksIChlPy5lbGVtZW50ID8/IGUpIGluc3RhbmNlb2YgTm9kZSAmJiBwLm9ic2VydmUoZSA9IEZuKGUpLCB7XG5cdFx0Y2hpbGRMaXN0OiAhMCxcblx0XHRzdWJ0cmVlOiAhMFxuXHR9KTtcblx0Y29uc3QgaCA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKHQpKTtcblx0cmV0dXJuIGgubGVuZ3RoID4gMCAmJiBuPy4oe1xuXHRcdGFkZGVkTm9kZXM6IGgsXG5cdFx0cmVtb3ZlZE5vZGVzOiBbXVxuXHR9LCBwKSwgcDtcbn07XG52YXIgZ2kgPSBcIkRPTVwiO1xudmFyIGh0ID0gdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikgOiBudWxsO1xuaHQgJiYgKHR5cGVvZiBkb2N1bWVudCA8IFwidVwiICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpPy5hcHBlbmRDaGlsZD8uKGh0KSwgaHQuZGF0YXNldC5vd25lciA9IGdpKTtcbnZhciBvdCA9IHR5cGVvZiBDU1NTdHlsZVZhbHVlIDwgXCJ1XCIgJiYgdHlwZW9mIENTU1VuaXRWYWx1ZSA8IFwidVwiO1xudmFyIEsgPSAoZSkgPT4gb3QgJiYgZSBpbnN0YW5jZW9mIENTU1N0eWxlVmFsdWU7XG52YXIgSCA9IChlKSA9PiBvdCAmJiBlIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xudmFyIFggPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IHtcblx0aWYgKCEoIWUgfHwgIXQpKSB7XG5cdFx0aWYgKG4gPT0gbnVsbCkge1xuXHRcdFx0ZS5nZXRQcm9wZXJ0eVZhbHVlKHQpICE9PSBcIlwiICYmIGUucmVtb3ZlUHJvcGVydHkodCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gbiAmJiBlLnNldFByb3BlcnR5KHQsIG4sIHIpO1xuXHR9XG59O1xudmFyIHlpID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBjYW1lbFRvS2ViYWIodCksIGwgPSBlLnN0eWxlLCBhID0gZS5hdHRyaWJ1dGVTdHlsZU1hcCA/PyBlLnN0eWxlTWFwO1xuXHRpZiAoIW90IHx8ICFhKSByZXR1cm4gT24oZSwgdCwgbiwgcik7XG5cdGxldCBvID0gaGFzVmFsdWUobikgJiYgIShLKG4pIHx8IEgobikpID8gbj8udmFsdWUgOiBuO1xuXHRpZiAobyA9PSBudWxsKSByZXR1cm4gYS5kZWxldGU/LihpKSwgbCAmJiBYKGwsIGksIG51bGwsIHIpLCBlO1xuXHRpZiAoSyhvKSkge1xuXHRcdGNvbnN0IGQgPSBhLmdldChpKTtcblx0XHRpZiAoSChvKSAmJiBIKGQpKSB7XG5cdFx0XHRpZiAoZC52YWx1ZSA9PT0gby52YWx1ZSAmJiBkLnVuaXQgPT09IG8udW5pdCkgcmV0dXJuIGU7XG5cdFx0fSBlbHNlIGlmIChkID09PSBvKSByZXR1cm4gZTtcblx0XHRyZXR1cm4gYS5zZXQoaSwgbyksIGU7XG5cdH1cblx0aWYgKHR5cGVvZiBvID09IFwibnVtYmVyXCIpIGlmIChDU1M/Lm51bWJlciAmJiAhaS5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRjb25zdCBkID0gQ1NTLm51bWJlcihvKSwgYyA9IGEuZ2V0KGkpO1xuXHRcdHJldHVybiBIKGMpICYmIGMudmFsdWUgPT09IGQudmFsdWUgJiYgYy51bml0ID09PSBkLnVuaXQgfHwgYS5zZXQoaSwgZCksIGU7XG5cdH0gZWxzZSByZXR1cm4gWChsLCBpLCBTdHJpbmcobyksIHIpLCBlO1xuXHRpZiAodHlwZW9mIG8gPT0gXCJzdHJpbmdcIiAmJiAhSyhvKSkge1xuXHRcdGNvbnN0IGQgPSB0cnlTdHJpbmdBc051bWJlcihvKTtcblx0XHRpZiAodHlwZW9mIGQgPT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAhaS5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IGMgPSBDU1MubnVtYmVyKGQpLCBwID0gYS5nZXQoaSk7XG5cdFx0XHRyZXR1cm4gSChwKSAmJiBwLnZhbHVlID09PSBjLnZhbHVlICYmIHAudW5pdCA9PT0gYy51bml0IHx8IGEuc2V0KGksIGMpLCBlO1xuXHRcdH0gZWxzZSByZXR1cm4gWChsLCBpLCBvLCByKSwgZTtcblx0fVxuXHRyZXR1cm4gWChsLCBpLCBTdHJpbmcobyksIHIpLCBlO1xufTtcbnZhciBPbiA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoIWUgfHwgIXQpIHJldHVybiBlO1xuXHRjb25zdCBpID0gY2FtZWxUb0tlYmFiKHQpLCBsID0gZS5zdHlsZTtcblx0aWYgKCFsKSByZXR1cm4gZTtcblx0bGV0IGEgPSBoYXNWYWx1ZShuKSAmJiAhKEsobikgfHwgSChuKSkgPyBuPy52YWx1ZSA6IG47XG5cdHJldHVybiB0eXBlb2YgYSA9PSBcInN0cmluZ1wiICYmICFLKGEpICYmIChhID0gdHJ5U3RyaW5nQXNOdW1iZXIoYSkgPz8gYSksIGEgPT0gbnVsbCA/IChYKGwsIGksIG51bGwsIHIpLCBlKSA6IChLKGEpLCBYKGwsIGksIFN0cmluZyhhKSwgciksIGUpO1xufTtcbnZhciBWZSA9IChlLCB0LCBuLCByID0gXCJcIikgPT4gb3QgPyB5aShlLCB0LCBuLCByKSA6IE9uKGUsIHQsIG4sIHIpO1xudmFyIGJpID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgeGkgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BuYW1lZFN0b3JlTWFwc1wiKTtcbnZhciBGdCA9IGdsb2JhbFRoaXNbeGldID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIHdpID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IFsuLi5lLmVudHJpZXMoKSB8fCBbXV07XG5cdHJldHVybiBuZXcgTWFwKG4/Lm1hcD8uKChbciwgaV0pID0+IFtyLCBpPy5nZXQ/Lih0KV0pPy5maWx0ZXI/LigoW3IsIGldKSA9PiAhIWkpIHx8IFtdKTtcbn07XG52YXIgV2UgPSAoZSkgPT4gKHtcblx0c3RvcmVTZXQ6IHdpKEZ0LCBlKSxcblx0bWl4aW5TZXQ6IFJlPy5nZXQ/LihlKSxcblx0YmVoYXZpb3JTZXQ6IGJpPy5nZXQ/LihlKVxufSk7XG52YXIgU2kgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0Bib3VuZE1peGluU2V0XCIpO1xudmFyIFJlID0gZ2xvYmFsVGhpc1tTaV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIEVpID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5FbGVtZW50c1wiKTtcbnZhciBkZSA9IGdsb2JhbFRoaXNbRWldID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBqaSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIik7XG52YXIgYmUgPSBnbG9iYWxUaGlzW2ppXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBNaSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIpO1xudmFyIFplID0gZ2xvYmFsVGhpc1tNaV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHFuID0gKGUsIHQpID0+IHtcblx0dHlwZW9mIHQgPT0gXCJzdHJpbmdcIiAmJiAodCA9IGJlPy5nZXQ/Lih0KSk7XG5cdGNvbnN0IG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZT8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pLCByID0gbmV3IFNldChbLi4ubl0ubWFwKChhKSA9PiBiZT8uZ2V0Py4oYSkpLmZpbHRlcigoYSkgPT4gISFhKSksIGkgPSBSZT8uZ2V0Py4oZSkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdGRlPy5oYXM/Lih0KSB8fCBkZT8uc2V0Py4odCwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpLCBSZT8uaGFzPy4oZSkgfHwgUmU/LnNldD8uKGUsIGkpO1xuXHRjb25zdCBsID0gbmV3IFdlYWtSZWYoZSk7XG5cdGk/Lmhhcz8uKHQpIHx8IChyLmhhcyh0KSB8fCB0Py5kaXNjb25uZWN0Py4obCwgdCwgV2UoZSkpLCAoci5oYXModCkgfHwgIWRlPy5nZXQ/Lih0KT8uaGFzPy4oZSkpICYmICh0Py5jb25uZWN0Py4obCwgdCwgV2UoZSkpLCBuLmFkZChaZT8uZ2V0Py4odCkpLCBpPy5hZGQ/Lih0KSwgZT8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIsIFsuLi5uXS5maWx0ZXIoKGEpID0+ICEhYSkuam9pbihcIiBcIikpKSwgZGU/LmdldD8uKHQpPy5hZGQ/LihlKSksIGk/Lmhhcz8uKHQpICYmIChyLmhhcyh0KSB8fCAoaT8uZGVsZXRlPy4odCksIHQ/LmRpc2Nvbm5lY3Q/LihsLCB0LCBXZShlKSkpKTtcbn07XG52YXIgT3QgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xudmFyIENpID0gKGUgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50IDogbnVsbCkgPT4ge1xuXHRpZiAoZSkgcmV0dXJuIE90Py5oYXM/LihlKSB8fCAoT3Q/LmFkZD8uKGUpLCBtaShlLCBcIipcIiwgXCJkYXRhLW1peGluXCIsICh0KSA9PiBxdCh0LnRhcmdldCkpLCB2aShlLCBcIltkYXRhLW1peGluXVwiLCAodCkgPT4ge1xuXHRcdGZvciAoY29uc3QgbiBvZiB0LmFkZGVkTm9kZXMpIG4gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBxdChuKTtcblx0fSkpLCBlO1xufTtcbnZhciBxdCA9IChlKSA9PiB7XG5cdGNvbnN0IHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZT8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pO1xuXHRbLi4ubmV3IFNldChbLi4udF0ubWFwKChuKSA9PiBiZT8uZ2V0Py4obikpLmZpbHRlcigobikgPT4gISFuKSldLm1hcD8uKChuKSA9PiBxbihlLCBuKSk7XG59O1xudmFyIFZpID0gKGUsIHQpID0+IHtcblx0ZS5mb3JFYWNoKChuKSA9PiB0ID8gcW4obiwgdCkgOiBxdChuKSk7XG59O1xudmFyIEFpID0gKGUpID0+IHtcblx0Zm9yIChjb25zdCB0IG9mIE90KSBWaSh0Py5xdWVyeVNlbGVjdG9yQWxsPy4oXCJbZGF0YS1taXhpbl1cIiksIGUpO1xufTtcbnZhciBMaSA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoZSkgPT4ge1xuXHRiZT8uZGVsZXRlPy4oZSk7XG59KTtcbnZhciB6aSA9IChlLCB0KSA9PiB7XG5cdGlmICghWmU/Lmhhcz8uKHQpKSB7XG5cdFx0Y29uc3QgbiA9IGU/LnRyaW0/LigpO1xuXHRcdG4gJiYgKFplPy5zZXQ/Lih0LCBuKSwgYmU/LnNldD8uKG4sIHQpLCBMaT8ucmVnaXN0ZXI/Lih0LCBuKSwgQWkodCkpO1xuXHR9XG59O1xuQ2kodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudCA6IG51bGwpO1xudmFyIGVuID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihlID0gbnVsbCkge1xuXHRcdGUgJiYgemkoZSwgdGhpcyk7XG5cdH1cblx0Y29ubmVjdChlLCB0LCBuKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlLCB0LCBuKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c3RvcmVGb3JFbGVtZW50KGUpIHtcblx0XHRyZXR1cm4gRnQuZ2V0KHRoaXMubmFtZSB8fCBcIlwiKT8uZ2V0Py4oZSk7XG5cdH1cblx0cmVsYXRlZEZvckVsZW1lbnQoZSkge1xuXHRcdHJldHVybiBXZShlKTtcblx0fVxuXHRnZXQgZWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIGRlPy5nZXQ/Lih0aGlzKTtcblx0fVxuXHRnZXQgc3RvcmFnZSgpIHtcblx0XHRyZXR1cm4gRnQ/LmdldD8uKHRoaXMubmFtZSB8fCBcIlwiKTtcblx0fVxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gWmU/LmdldD8uKHRoaXMpO1xuXHR9XG59O1xudmFyIFRpID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBNbiA9IGdsb2JhbFRoaXNbVGldID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuW1xuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jbGlwLWZyZXFcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGl4ZWwtcmF0aW9cIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjFcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudC15XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JvbGwtbGVmdFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC14XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC15XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH1cbl0uZm9yRWFjaCgoZSkgPT4ge1xuXHRpZiAodHlwZW9mIENTUyA+IFwidVwiIHx8IHR5cGVvZiBDU1M/LnJlZ2lzdGVyUHJvcGVydHkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdGNvbnN0IHQgPSBTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50cmltKCk7XG5cdGlmICghKCF0IHx8IE1uLmhhcyh0KSkpIHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkoZSk7XG5cdH0gY2F0Y2ggKG4pIHtcblx0XHRTdHJpbmcobj8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpICE9PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiICYmIGNvbnNvbGUud2FybihuKTtcblx0fSBmaW5hbGx5IHtcblx0XHRNbi5hZGQodCk7XG5cdH1cbn0pO1xudHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudDtcbnZhciBOaSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG50eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIDwgXCJ1XCIgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFzeW5jICgpID0+IHtcblx0Zm9yICg7OykgTmkuZm9yRWFjaCgoZSkgPT4gZT8uKCkpLCBhd2FpdCBuZXcgUHJvbWlzZSgoZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGUpKTtcbn0pO1xudmFyIGtpID0ge307XG5mdW5jdGlvbiBDKGUsIHQsIG4sIHIgPSBraSkge1xuXHRlPy5hZGRFdmVudExpc3RlbmVyPy4odCwgbiwgcik7XG5cdGNvbnN0IGkgPSB0eXBlb2YgZSA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBlID09IFwiZnVuY3Rpb25cIiAmJiAhZT8uZGVyZWYgPyBuZXcgV2Vha1JlZihlKSA6IGU7XG5cdHJldHVybiAoKSA9PiBpPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0LCBuLCByKTtcbn1cbnZhciBQaSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQHpvb21WYWx1ZXNcIik7XG5nbG9iYWxUaGlzW1BpXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgV2kgPSAoKSA9PiB7XG5cdGNvbnN0IGUgPSB0eXBlb2YgbWF0Y2hNZWRpYSA8IFwidVwiID8gbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyA6ICExLCB0ID0gdHlwZW9mIHdpbmRvdyA8IFwidVwiID8gd2luZG93LnZpc3VhbFZpZXdwb3J0IDogbnVsbCwgbiA9IHQgPyB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IGAke3Qud2lkdGh9cHhgLFxuXHRcdFwiLS12di1oZWlnaHRcIjogYCR7dC5oZWlnaHR9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtbGVmdFwiOiBgJHt0Lm9mZnNldExlZnR9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtdG9wXCI6IGAke3Qub2Zmc2V0VG9wfXB4YCxcblx0XHRcIi0tdnYtc2NhbGVcIjogU3RyaW5nKHQuc2NhbGUgPz8gMSlcblx0fSA6IHtcblx0XHRcIi0tdnYtd2lkdGhcIjogdHlwZW9mIHdpbmRvdyA8IFwidVwiID8gYCR7d2luZG93LmlubmVyV2lkdGh9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGAgOiBcIjBweFwiLFxuXHRcdFwiLS12di1vZmZzZXQtbGVmdFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1vZmZzZXQtdG9wXCI6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFwiMVwiXG5cdH07XG5cdGlmICh0eXBlb2Ygc2NyZWVuIDwgXCJ1XCIpIHtcblx0XHRjb25zdCByID0gc2NyZWVuPy5hdmFpbFdpZHRoICsgXCJweFwiLCBpID0gc2NyZWVuPy5hdmFpbEhlaWdodCArIFwicHhcIjtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCItLXNjcmVlbi13aWR0aFwiOiBNYXRoLm1pbihzY3JlZW4/LndpZHRoLCBzY3JlZW4/LmF2YWlsV2lkdGgpICsgXCJweFwiLFxuXHRcdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogTWF0aC5taW4oc2NyZWVuPy5oZWlnaHQsIHNjcmVlbj8uYXZhaWxIZWlnaHQpICsgXCJweFwiLFxuXHRcdFx0XCItLWF2YWlsLXdpZHRoXCI6IGUgPyBpIDogcixcblx0XHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogZSA/IHIgOiBpLFxuXHRcdFx0XCItLXZpZXctaGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uYXZhaWxIZWlnaHQsIHdpbmRvdz8uaW5uZXJIZWlnaHQpICsgXCJweFwiLFxuXHRcdFx0XCItLXBpeGVsLXJhdGlvXCI6IFN0cmluZyhkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLFxuXHRcdFx0Li4ublxuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtd2lkdGhcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXZpZXctaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXBpeGVsLXJhdGlvXCI6IFwiMVwiLFxuXHRcdC4uLm5cblx0fTtcbn07XG5XaSgpO1xubmV3IE9mZnNjcmVlbkNhbnZhcygxLCAxKS5nZXRDb250ZXh0KFwiMmRcIik7XG52YXIgUmkgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BvbkJvcmRlck9ic2VydmVcIik7XG5nbG9iYWxUaGlzW1JpXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgJGkgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BvbkNvbnRlbnRPYnNlcnZlXCIpO1xuZ2xvYmFsVGhpc1skaV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIEhuID0gKGUpID0+ICh0eXBlb2YgZT8uY3VycmVudCA9PSBcIm9iamVjdFwiICYmIChlID0gZT8uZWxlbWVudCA/PyBlPy5jdXJyZW50ID8/ICh0eXBlb2YgZT8uc2VsZiA9PSBcIm9iamVjdFwiID8gZT8uc2VsZiA6IG51bGwpID8/IGUpLCBlKTtcbnZhciBGaSA9IChlLCB0LCBuLCByKSA9PiB7XG5cdGNvbnN0IGkgPSBuZXcgU2V0KFsuLi5uLnNwbGl0KFwiLFwiKSB8fCBbbl1dLm1hcCgoYSkgPT4gYS50cmltKCkpKSwgbCA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChhLCBvKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBkIG9mIGEpIGlmIChkLnR5cGUgPT0gXCJjaGlsZExpc3RcIikge1xuXHRcdFx0Y29uc3QgYyA9IEFycmF5LmZyb20oZC5hZGRlZE5vZGVzKSB8fCBbXSwgcCA9IEFycmF5LmZyb20oZC5yZW1vdmVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0Yy5wdXNoKC4uLkFycmF5LmZyb20oZC5hZGRlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChoKSA9PiBBcnJheS5mcm9tKGg/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgcC5wdXNoKC4uLkFycmF5LmZyb20oZC5yZW1vdmVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGgpID0+IEFycmF5LmZyb20oaD8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBbLi4ubmV3IFNldChjKV0uZmlsdGVyKChoKSA9PiBoPy5tYXRjaGVzPy4odCkpPy5tYXA/LigoaCkgPT4ge1xuXHRcdFx0XHRpLmZvckVhY2goKHUpID0+IHtcblx0XHRcdFx0XHRyKHtcblx0XHRcdFx0XHRcdHRhcmdldDogaCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogdSxcblx0XHRcdFx0XHRcdG9sZFZhbHVlOiBoPy5nZXRBdHRyaWJ1dGU/Lih1KVxuXHRcdFx0XHRcdH0sIG8pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBkLnRhcmdldD8ubWF0Y2hlcz8uKHQpICYmIGQuYXR0cmlidXRlTmFtZSAmJiBpLmhhcyhkLmF0dHJpYnV0ZU5hbWUpICYmIHIoZCwgbyk7XG5cdH0pO1xuXHRyZXR1cm4gbC5vYnNlcnZlKGUgPSBIbihlKSwge1xuXHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiAhMCxcblx0XHRhdHRyaWJ1dGVzOiAhMCxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5pXSxcblx0XHRjaGlsZExpc3Q6ICEwLFxuXHRcdHN1YnRyZWU6ICEwLFxuXHRcdGNoYXJhY3RlckRhdGE6ICEwXG5cdH0pLCBbLi4uZS5xdWVyeVNlbGVjdG9yQWxsKHQpXS5tYXAoKGEpID0+IGkuZm9yRWFjaCgobykgPT4gcih7XG5cdFx0dGFyZ2V0OiBhLFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IG8sXG5cdFx0b2xkVmFsdWU6IGE/LmdldEF0dHJpYnV0ZT8uKG8pXG5cdH0sIGwpKSksIGw7XG59O1xudmFyIE9pID0gKGUsIHQgPSBcIipcIiwgbiA9IChyLCBpKSA9PiB7fSkgPT4ge1xuXHRjb25zdCByID0gKHUpID0+IHtcblx0XHRjb25zdCBzID0gQXJyYXkuZnJvbSh1IHx8IFtdKSB8fCBbXTtcblx0XHRyZXR1cm4gcy5wdXNoKC4uLkFycmF5LmZyb20odSB8fCBbXSkuZmxhdE1hcCgoZikgPT4gQXJyYXkuZnJvbShmPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIFsuLi5BcnJheS5mcm9tKG5ldyBTZXQocykudmFsdWVzKCkpXS5maWx0ZXIoKGYpID0+IGY/Lm1hdGNoZXM/Lih0KSk7XG5cdH07XG5cdGxldCBpID0gbnVsbDtcblx0Y29uc3QgbCA9ICh1KSA9PiB7XG5cdFx0Y29uc3QgcyA9IGk/LmRlcmVmPy4oKSwgZiA9IHIodS5hZGRlZE5vZGVzKSwgbSA9IHIodS5yZW1vdmVkTm9kZXMpO1xuXHRcdChmLmxlbmd0aCA+IDAgfHwgbS5sZW5ndGggPiAwKSAmJiBuPy4oe1xuXHRcdFx0dHlwZTogdS50eXBlLFxuXHRcdFx0dGFyZ2V0OiB1LnRhcmdldCxcblx0XHRcdGF0dHJpYnV0ZU5hbWU6IHUuYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogdS5hdHRyaWJ1dGVOYW1lc3BhY2UsXG5cdFx0XHRuZXh0U2libGluZzogdS5uZXh0U2libGluZyxcblx0XHRcdG9sZFZhbHVlOiB1Lm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiB1LnByZXZpb3VzU2libGluZyxcblx0XHRcdGFkZGVkTm9kZXM6IGYsXG5cdFx0XHRyZW1vdmVkTm9kZXM6IG1cblx0XHR9LCBzKTtcblx0fSwgYSA9ICh1KSA9PiB7XG5cdFx0bCh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbdT8udGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiB1Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIG8gPSAodSkgPT4ge1xuXHRcdGwoe1xuXHRcdFx0YWRkZWROb2RlczogW3U/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHJlbW92ZWROb2RlczogW3U/LnRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogdT8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBkID0gKHUpID0+IHtcblx0XHRsKHtcblx0XHRcdGFkZGVkTm9kZXM6IFt1Py50YXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHJlbW92ZWROb2RlczogW3U/LnJlbGF0ZWRUYXJnZXQgfHwgZG9jdW1lbnQ/LmFjdGl2ZUVsZW1lbnRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IHU/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgYyA9IHtcblx0XHRwYXNzaXZlOiAhMCxcblx0XHRjYXB0dXJlOiAhMVxuXHR9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkgcmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIG8sIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG8sIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIG8sIGMpLCB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSkgcmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIG8sIGMpLCB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG8sIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIG8sIGMpLCB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBhLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIG8sIGMpO1xuXHR9IH07XG5cdGlmICh0Py5pbmNsdWRlcz8uKFwiOmZvY3VzXCIpICYmIHQ/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtd2l0aGluXCIpICYmIHQ/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtdmlzaWJsZVwiKSkgcmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIG8sIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBhLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGQsIGMpO1xuXHR9IH07XG5cdGNvbnN0IHAgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigodSwgcykgPT4ge1xuXHRcdGZvciAoY29uc3QgZiBvZiB1KSBmLnR5cGUgPT0gXCJjaGlsZExpc3RcIiAmJiBsKGYpO1xuXHR9KTtcblx0aSA9IG5ldyBXZWFrUmVmKHApLCAoZT8uZWxlbWVudCA/PyBlKSBpbnN0YW5jZW9mIE5vZGUgJiYgcC5vYnNlcnZlKGUgPSBIbihlKSwge1xuXHRcdGNoaWxkTGlzdDogITAsXG5cdFx0c3VidHJlZTogITBcblx0fSk7XG5cdGNvbnN0IGggPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCh0KSk7XG5cdHJldHVybiBoLmxlbmd0aCA+IDAgJiYgbj8uKHtcblx0XHRhZGRlZE5vZGVzOiBoLFxuXHRcdHJlbW92ZWROb2RlczogW11cblx0fSwgcCksIHA7XG59O1xudmFyIHFpID0gXCJET01cIjtcbnZhciBtdCA9IHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpIDogbnVsbDtcbm10ICYmICh0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKT8uYXBwZW5kQ2hpbGQ/LihtdCksIG10LmRhdGFzZXQub3duZXIgPSBxaSk7XG52YXIgc3QgPSB0eXBlb2YgQ1NTU3R5bGVWYWx1ZSA8IFwidVwiICYmIHR5cGVvZiBDU1NVbml0VmFsdWUgPCBcInVcIjtcbnZhciBRID0gKGUpID0+IHN0ICYmIGUgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlO1xudmFyIEkgPSAoZSkgPT4gc3QgJiYgZSBpbnN0YW5jZW9mIENTU1VuaXRWYWx1ZTtcbnZhciBVID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghKCFlIHx8ICF0KSkge1xuXHRcdGlmIChuID09IG51bGwpIHtcblx0XHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gXCJcIiAmJiBlLnJlbW92ZVByb3BlcnR5KHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRlLmdldFByb3BlcnR5VmFsdWUodCkgIT09IG4gJiYgZS5zZXRQcm9wZXJ0eSh0LCBuLCByKTtcblx0fVxufTtcbnZhciBIaSA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoIWUgfHwgIXQpIHJldHVybiBlO1xuXHRjb25zdCBpID0gY2FtZWxUb0tlYmFiKHQpLCBsID0gZS5zdHlsZSwgYSA9IGUuYXR0cmlidXRlU3R5bGVNYXAgPz8gZS5zdHlsZU1hcDtcblx0aWYgKCFzdCB8fCAhYSkgcmV0dXJuIEluKGUsIHQsIG4sIHIpO1xuXHRsZXQgbyA9IGhhc1ZhbHVlKG4pICYmICEoUShuKSB8fCBJKG4pKSA/IG4/LnZhbHVlIDogbjtcblx0aWYgKG8gPT0gbnVsbCkgcmV0dXJuIGEuZGVsZXRlPy4oaSksIGwgJiYgVShsLCBpLCBudWxsLCByKSwgZTtcblx0aWYgKFEobykpIHtcblx0XHRjb25zdCBkID0gYS5nZXQoaSk7XG5cdFx0aWYgKEkobykgJiYgSShkKSkge1xuXHRcdFx0aWYgKGQudmFsdWUgPT09IG8udmFsdWUgJiYgZC51bml0ID09PSBvLnVuaXQpIHJldHVybiBlO1xuXHRcdH0gZWxzZSBpZiAoZCA9PT0gbykgcmV0dXJuIGU7XG5cdFx0cmV0dXJuIGEuc2V0KGksIG8pLCBlO1xuXHR9XG5cdGlmICh0eXBlb2YgbyA9PSBcIm51bWJlclwiKSBpZiAoQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0Y29uc3QgZCA9IENTUy5udW1iZXIobyksIGMgPSBhLmdldChpKTtcblx0XHRyZXR1cm4gSShjKSAmJiBjLnZhbHVlID09PSBkLnZhbHVlICYmIGMudW5pdCA9PT0gZC51bml0IHx8IGEuc2V0KGksIGQpLCBlO1xuXHR9IGVsc2UgcmV0dXJuIFUobCwgaSwgU3RyaW5nKG8pLCByKSwgZTtcblx0aWYgKHR5cGVvZiBvID09IFwic3RyaW5nXCIgJiYgIVEobykpIHtcblx0XHRjb25zdCBkID0gdHJ5U3RyaW5nQXNOdW1iZXIobyk7XG5cdFx0aWYgKHR5cGVvZiBkID09IFwibnVtYmVyXCIgJiYgQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBjID0gQ1NTLm51bWJlcihkKSwgcCA9IGEuZ2V0KGkpO1xuXHRcdFx0cmV0dXJuIEkocCkgJiYgcC52YWx1ZSA9PT0gYy52YWx1ZSAmJiBwLnVuaXQgPT09IGMudW5pdCB8fCBhLnNldChpLCBjKSwgZTtcblx0XHR9IGVsc2UgcmV0dXJuIFUobCwgaSwgbywgciksIGU7XG5cdH1cblx0cmV0dXJuIFUobCwgaSwgU3RyaW5nKG8pLCByKSwgZTtcbn07XG52YXIgSW4gPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IHtcblx0aWYgKCFlIHx8ICF0KSByZXR1cm4gZTtcblx0Y29uc3QgaSA9IGNhbWVsVG9LZWJhYih0KSwgbCA9IGUuc3R5bGU7XG5cdGlmICghbCkgcmV0dXJuIGU7XG5cdGxldCBhID0gaGFzVmFsdWUobikgJiYgIShRKG4pIHx8IEkobikpID8gbj8udmFsdWUgOiBuO1xuXHRyZXR1cm4gdHlwZW9mIGEgPT0gXCJzdHJpbmdcIiAmJiAhUShhKSAmJiAoYSA9IHRyeVN0cmluZ0FzTnVtYmVyKGEpID8/IGEpLCBhID09IG51bGwgPyAoVShsLCBpLCBudWxsLCByKSwgZSkgOiAoUShhKSwgVShsLCBpLCBTdHJpbmcoYSksIHIpLCBlKTtcbn07XG52YXIgQWUgPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IHN0ID8gSGkoZSwgdCwgbiwgcikgOiBJbihlLCB0LCBuLCByKTtcbnZhciBJaSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIEJpID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbmFtZWRTdG9yZU1hcHNcIik7XG52YXIgSHQgPSBnbG9iYWxUaGlzW0JpXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBfaSA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBbLi4uZS5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChuPy5tYXA/LigoW3IsIGldKSA9PiBbciwgaT8uZ2V0Py4odCldKT8uZmlsdGVyPy4oKFtyLCBpXSkgPT4gISFpKSB8fCBbXSk7XG59O1xudmFyICRlID0gKGUpID0+ICh7XG5cdHN0b3JlU2V0OiBfaShIdCwgZSksXG5cdG1peGluU2V0OiBGZT8uZ2V0Py4oZSksXG5cdGJlaGF2aW9yU2V0OiBJaT8uZ2V0Py4oZSlcbn0pO1xudmFyIERpID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBGZSA9IGdsb2JhbFRoaXNbRGldID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBYaSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgZmUgPSBnbG9iYWxUaGlzW1hpXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgVWkgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpblJlZ2lzdHJ5XCIpO1xudmFyIHhlID0gZ2xvYmFsVGhpc1tVaV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgWWkgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbk5hbWVzcGFjZVwiKTtcbnZhciBKZSA9IGdsb2JhbFRoaXNbWWldID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBCbiA9IChlLCB0KSA9PiB7XG5cdHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgKHQgPSB4ZT8uZ2V0Py4odCkpO1xuXHRjb25zdCBuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKSwgciA9IG5ldyBTZXQoWy4uLm5dLm1hcCgoYSkgPT4geGU/LmdldD8uKGEpKS5maWx0ZXIoKGEpID0+ICEhYSkpLCBpID0gRmU/LmdldD8uKGUpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRmZT8uaGFzPy4odCkgfHwgZmU/LnNldD8uKHQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKSwgRmU/Lmhhcz8uKGUpIHx8IEZlPy5zZXQ/LihlLCBpKTtcblx0Y29uc3QgbCA9IG5ldyBXZWFrUmVmKGUpO1xuXHRpPy5oYXM/Lih0KSB8fCAoci5oYXModCkgfHwgdD8uZGlzY29ubmVjdD8uKGwsIHQsICRlKGUpKSwgKHIuaGFzKHQpIHx8ICFmZT8uZ2V0Py4odCk/Lmhhcz8uKGUpKSAmJiAodD8uY29ubmVjdD8uKGwsIHQsICRlKGUpKSwgbi5hZGQoSmU/LmdldD8uKHQpKSwgaT8uYWRkPy4odCksIGU/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubl0uZmlsdGVyKChhKSA9PiAhIWEpLmpvaW4oXCIgXCIpKSksIGZlPy5nZXQ/Lih0KT8uYWRkPy4oZSkpLCBpPy5oYXM/Lih0KSAmJiAoci5oYXModCkgfHwgKGk/LmRlbGV0ZT8uKHQpLCB0Py5kaXNjb25uZWN0Py4obCwgdCwgJGUoZSkpKSk7XG59O1xudmFyIEl0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBaaSA9IChlID0gdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKGUpIHJldHVybiBJdD8uaGFzPy4oZSkgfHwgKEl0Py5hZGQ/LihlKSwgRmkoZSwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAodCkgPT4gQnQodC50YXJnZXQpKSwgT2koZSwgXCJbZGF0YS1taXhpbl1cIiwgKHQpID0+IHtcblx0XHRmb3IgKGNvbnN0IG4gb2YgdC5hZGRlZE5vZGVzKSBuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgQnQobik7XG5cdH0pKSwgZTtcbn07XG52YXIgQnQgPSAoZSkgPT4ge1xuXHRjb25zdCB0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Wy4uLm5ldyBTZXQoWy4uLnRdLm1hcCgobikgPT4geGU/LmdldD8uKG4pKS5maWx0ZXIoKG4pID0+ICEhbikpXS5tYXA/LigobikgPT4gQm4oZSwgbikpO1xufTtcbnZhciBKaSA9IChlLCB0KSA9PiB7XG5cdGUuZm9yRWFjaCgobikgPT4gdCA/IEJuKG4sIHQpIDogQnQobikpO1xufTtcbnZhciBHaSA9IChlKSA9PiB7XG5cdGZvciAoY29uc3QgdCBvZiBJdCkgSmkodD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBlKTtcbn07XG52YXIgS2kgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGUpID0+IHtcblx0eGU/LmRlbGV0ZT8uKGUpO1xufSk7XG52YXIgUWkgPSAoZSwgdCkgPT4ge1xuXHRpZiAoIUplPy5oYXM/Lih0KSkge1xuXHRcdGNvbnN0IG4gPSBlPy50cmltPy4oKTtcblx0XHRuICYmIChKZT8uc2V0Py4odCwgbiksIHhlPy5zZXQ/LihuLCB0KSwgS2k/LnJlZ2lzdGVyPy4odCwgbiksIEdpKHQpKTtcblx0fVxufTtcblppKHR5cGVvZiBkb2N1bWVudCA8IFwidVwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciB0biA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoZSA9IG51bGwpIHtcblx0XHRlICYmIFFpKGUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSwgdCwgbikge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHN0b3JlRm9yRWxlbWVudChlKSB7XG5cdFx0cmV0dXJuIEh0LmdldCh0aGlzLm5hbWUgfHwgXCJcIik/LmdldD8uKGUpO1xuXHR9XG5cdHJlbGF0ZWRGb3JFbGVtZW50KGUpIHtcblx0XHRyZXR1cm4gJGUoZSk7XG5cdH1cblx0Z2V0IGVsZW1lbnRzKCkge1xuXHRcdHJldHVybiBmZT8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIEh0Py5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIEplPy5nZXQ/Lih0aGlzKTtcblx0fVxufTtcbnZhciBlYSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgQ24gPSBnbG9iYWxUaGlzW2VhXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1mcmVxXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBpeGVsLXJhdGlvXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJlc2l6ZS15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteFwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNlbGwteVwiLFxuXHRcdHN5bnRheDogXCI8aW50ZWdlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9XG5dLmZvckVhY2goKGUpID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgPiBcInVcIiB8fCB0eXBlb2YgQ1NTPy5yZWdpc3RlclByb3BlcnR5ICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCB0ID0gU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoISghdCB8fCBDbi5oYXModCkpKSB0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KGUpO1xuXHR9IGNhdGNoIChuKSB7XG5cdFx0U3RyaW5nKG4/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSAhPT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIiAmJiBjb25zb2xlLndhcm4obik7XG5cdH0gZmluYWxseSB7XG5cdFx0Q24uYWRkKHQpO1xuXHR9XG59KTtcbnR5cGVvZiBkb2N1bWVudCA8IFwidVwiICYmIGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ7XG52YXIgdGEgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA8IFwidVwiICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdGZvciAoOzspIHRhLmZvckVhY2goKGUpID0+IGU/LigpKSwgYXdhaXQgbmV3IFByb21pc2UoKGUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShlKSk7XG59KTtcbnZhciBuYSA9IHt9O1xuZnVuY3Rpb24gVihlLCB0LCBuLCByID0gbmEpIHtcblx0ZT8uYWRkRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xuXHRjb25zdCBpID0gdHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgIWU/LmRlcmVmID8gbmV3IFdlYWtSZWYoZSkgOiBlO1xuXHRyZXR1cm4gKCkgPT4gaT8uZGVyZWY/LigpPy5yZW1vdmVFdmVudExpc3RlbmVyPy4odCwgbiwgcik7XG59XG52YXIgcmEgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xuZ2xvYmFsVGhpc1tyYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGlhID0gKCkgPT4ge1xuXHRjb25zdCBlID0gdHlwZW9mIG1hdGNoTWVkaWEgPCBcInVcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiAhMSwgdCA9IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGwsIG4gPSB0ID8ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt0LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3QuaGVpZ2h0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dC5vZmZzZXRMZWZ0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt0Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh0LnNjYWxlID8/IDEpXG5cdH0gOiB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiA8IFwidVwiKSB7XG5cdFx0Y29uc3QgciA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIiwgaSA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBlID8gaSA6IHIsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGUgPyByIDogaSxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLm5cblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi5uXG5cdH07XG59O1xuaWEoKTtcbm5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIGFhID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xuZ2xvYmFsVGhpc1thYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9hID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Db250ZW50T2JzZXJ2ZVwiKTtcbmdsb2JhbFRoaXNbb2FdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBfbiA9IChlKSA9PiAodHlwZW9mIGU/LmN1cnJlbnQgPT0gXCJvYmplY3RcIiAmJiAoZSA9IGU/LmVsZW1lbnQgPz8gZT8uY3VycmVudCA/PyAodHlwZW9mIGU/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGU/LnNlbGYgOiBudWxsKSA/PyBlKSwgZSk7XG52YXIgc2EgPSAoZSwgdCwgbiwgcikgPT4ge1xuXHRjb25zdCBpID0gbmV3IFNldChbLi4ubi5zcGxpdChcIixcIikgfHwgW25dXS5tYXAoKGEpID0+IGEudHJpbSgpKSksIGwgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoYSwgbykgPT4ge1xuXHRcdGZvciAoY29uc3QgZCBvZiBhKSBpZiAoZC50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGMgPSBBcnJheS5mcm9tKGQuYWRkZWROb2RlcykgfHwgW10sIHAgPSBBcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGMucHVzaCguLi5BcnJheS5mcm9tKGQuYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoaCkgPT4gQXJyYXkuZnJvbShoPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIHAucHVzaCguLi5BcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChoKSA9PiBBcnJheS5mcm9tKGg/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgWy4uLm5ldyBTZXQoYyldLmZpbHRlcigoaCkgPT4gaD8ubWF0Y2hlcz8uKHQpKT8ubWFwPy4oKGgpID0+IHtcblx0XHRcdFx0aS5mb3JFYWNoKCh1KSA9PiB7XG5cdFx0XHRcdFx0cih7XG5cdFx0XHRcdFx0XHR0YXJnZXQ6IGgsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU6IHUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogaD8uZ2V0QXR0cmlidXRlPy4odSlcblx0XHRcdFx0XHR9LCBvKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgZC50YXJnZXQ/Lm1hdGNoZXM/Lih0KSAmJiBkLmF0dHJpYnV0ZU5hbWUgJiYgaS5oYXMoZC5hdHRyaWJ1dGVOYW1lKSAmJiByKGQsIG8pO1xuXHR9KTtcblx0cmV0dXJuIGwub2JzZXJ2ZShlID0gX24oZSksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogITAsXG5cdFx0YXR0cmlidXRlczogITAsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uaV0sXG5cdFx0Y2hpbGRMaXN0OiAhMCxcblx0XHRzdWJ0cmVlOiAhMCxcblx0XHRjaGFyYWN0ZXJEYXRhOiAhMFxuXHR9KSwgWy4uLmUucXVlcnlTZWxlY3RvckFsbCh0KV0ubWFwKChhKSA9PiBpLmZvckVhY2goKG8pID0+IHIoe1xuXHRcdHRhcmdldDogYSxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBvLFxuXHRcdG9sZFZhbHVlOiBhPy5nZXRBdHRyaWJ1dGU/LihvKVxuXHR9LCBsKSkpLCBsO1xufTtcbnZhciBsYSA9IChlLCB0ID0gXCIqXCIsIG4gPSAociwgaSkgPT4ge30pID0+IHtcblx0Y29uc3QgciA9ICh1KSA9PiB7XG5cdFx0Y29uc3QgcyA9IEFycmF5LmZyb20odSB8fCBbXSkgfHwgW107XG5cdFx0cmV0dXJuIHMucHVzaCguLi5BcnJheS5mcm9tKHUgfHwgW10pLmZsYXRNYXAoKGYpID0+IEFycmF5LmZyb20oZj8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KHMpLnZhbHVlcygpKV0uZmlsdGVyKChmKSA9PiBmPy5tYXRjaGVzPy4odCkpO1xuXHR9O1xuXHRsZXQgaSA9IG51bGw7XG5cdGNvbnN0IGwgPSAodSkgPT4ge1xuXHRcdGNvbnN0IHMgPSBpPy5kZXJlZj8uKCksIGYgPSByKHUuYWRkZWROb2RlcyksIG0gPSByKHUucmVtb3ZlZE5vZGVzKTtcblx0XHQoZi5sZW5ndGggPiAwIHx8IG0ubGVuZ3RoID4gMCkgJiYgbj8uKHtcblx0XHRcdHR5cGU6IHUudHlwZSxcblx0XHRcdHRhcmdldDogdS50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiB1LmF0dHJpYnV0ZU5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IHUuYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IHUubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogdS5vbGRWYWx1ZSxcblx0XHRcdHByZXZpb3VzU2libGluZzogdS5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzOiBmLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBtXG5cdFx0fSwgcyk7XG5cdH0sIGEgPSAodSkgPT4ge1xuXHRcdGwoe1xuXHRcdFx0YWRkZWROb2RlczogW3U/LnRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbdT8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogdT8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBvID0gKHUpID0+IHtcblx0XHRsKHtcblx0XHRcdGFkZGVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py50YXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IHU/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgZCA9ICh1KSA9PiB7XG5cdFx0bCh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbdT8udGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiB1Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIGMgPSB7XG5cdFx0cGFzc2l2ZTogITAsXG5cdFx0Y2FwdHVyZTogITFcblx0fTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikgJiYgdD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXZpc2libGVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZCwgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkLCBjKTtcblx0fSB9O1xuXHRjb25zdCBwID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHUsIHMpID0+IHtcblx0XHRmb3IgKGNvbnN0IGYgb2YgdSkgZi50eXBlID09IFwiY2hpbGRMaXN0XCIgJiYgbChmKTtcblx0fSk7XG5cdGkgPSBuZXcgV2Vha1JlZihwKSwgKGU/LmVsZW1lbnQgPz8gZSkgaW5zdGFuY2VvZiBOb2RlICYmIHAub2JzZXJ2ZShlID0gX24oZSksIHtcblx0XHRjaGlsZExpc3Q6ICEwLFxuXHRcdHN1YnRyZWU6ICEwXG5cdH0pO1xuXHRjb25zdCBoID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwodCkpO1xuXHRyZXR1cm4gaC5sZW5ndGggPiAwICYmIG4/Lih7XG5cdFx0YWRkZWROb2RlczogaCxcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIHApLCBwO1xufTtcbnZhciB1YSA9IFwiRE9NXCI7XG52YXIgdnQgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSA6IG51bGw7XG52dCAmJiAodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4odnQpLCB2dC5kYXRhc2V0Lm93bmVyID0gdWEpO1xudmFyIGx0ID0gdHlwZW9mIENTU1N0eWxlVmFsdWUgPCBcInVcIiAmJiB0eXBlb2YgQ1NTVW5pdFZhbHVlIDwgXCJ1XCI7XG52YXIgZWUgPSAoZSkgPT4gbHQgJiYgZSBpbnN0YW5jZW9mIENTU1N0eWxlVmFsdWU7XG52YXIgQiA9IChlKSA9PiBsdCAmJiBlIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xudmFyIFkgPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IHtcblx0aWYgKCEoIWUgfHwgIXQpKSB7XG5cdFx0aWYgKG4gPT0gbnVsbCkge1xuXHRcdFx0ZS5nZXRQcm9wZXJ0eVZhbHVlKHQpICE9PSBcIlwiICYmIGUucmVtb3ZlUHJvcGVydHkodCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gbiAmJiBlLnNldFByb3BlcnR5KHQsIG4sIHIpO1xuXHR9XG59O1xudmFyIGNhID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBjYW1lbFRvS2ViYWIodCksIGwgPSBlLnN0eWxlLCBhID0gZS5hdHRyaWJ1dGVTdHlsZU1hcCA/PyBlLnN0eWxlTWFwO1xuXHRpZiAoIWx0IHx8ICFhKSByZXR1cm4gRG4oZSwgdCwgbiwgcik7XG5cdGxldCBvID0gaGFzVmFsdWUobikgJiYgIShlZShuKSB8fCBCKG4pKSA/IG4/LnZhbHVlIDogbjtcblx0aWYgKG8gPT0gbnVsbCkgcmV0dXJuIGEuZGVsZXRlPy4oaSksIGwgJiYgWShsLCBpLCBudWxsLCByKSwgZTtcblx0aWYgKGVlKG8pKSB7XG5cdFx0Y29uc3QgZCA9IGEuZ2V0KGkpO1xuXHRcdGlmIChCKG8pICYmIEIoZCkpIHtcblx0XHRcdGlmIChkLnZhbHVlID09PSBvLnZhbHVlICYmIGQudW5pdCA9PT0gby51bml0KSByZXR1cm4gZTtcblx0XHR9IGVsc2UgaWYgKGQgPT09IG8pIHJldHVybiBlO1xuXHRcdHJldHVybiBhLnNldChpLCBvKSwgZTtcblx0fVxuXHRpZiAodHlwZW9mIG8gPT0gXCJudW1iZXJcIikgaWYgKENTUz8ubnVtYmVyICYmICFpLnN0YXJ0c1dpdGgoXCItLVwiKSkge1xuXHRcdGNvbnN0IGQgPSBDU1MubnVtYmVyKG8pLCBjID0gYS5nZXQoaSk7XG5cdFx0cmV0dXJuIEIoYykgJiYgYy52YWx1ZSA9PT0gZC52YWx1ZSAmJiBjLnVuaXQgPT09IGQudW5pdCB8fCBhLnNldChpLCBkKSwgZTtcblx0fSBlbHNlIHJldHVybiBZKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG5cdGlmICh0eXBlb2YgbyA9PSBcInN0cmluZ1wiICYmICFlZShvKSkge1xuXHRcdGNvbnN0IGQgPSB0cnlTdHJpbmdBc051bWJlcihvKTtcblx0XHRpZiAodHlwZW9mIGQgPT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAhaS5zdGFydHNXaXRoKFwiLS1cIikpIHtcblx0XHRcdGNvbnN0IGMgPSBDU1MubnVtYmVyKGQpLCBwID0gYS5nZXQoaSk7XG5cdFx0XHRyZXR1cm4gQihwKSAmJiBwLnZhbHVlID09PSBjLnZhbHVlICYmIHAudW5pdCA9PT0gYy51bml0IHx8IGEuc2V0KGksIGMpLCBlO1xuXHRcdH0gZWxzZSByZXR1cm4gWShsLCBpLCBvLCByKSwgZTtcblx0fVxuXHRyZXR1cm4gWShsLCBpLCBTdHJpbmcobyksIHIpLCBlO1xufTtcbnZhciBEbiA9IChlLCB0LCBuLCByID0gXCJcIikgPT4ge1xuXHRpZiAoIWUgfHwgIXQpIHJldHVybiBlO1xuXHRjb25zdCBpID0gY2FtZWxUb0tlYmFiKHQpLCBsID0gZS5zdHlsZTtcblx0aWYgKCFsKSByZXR1cm4gZTtcblx0bGV0IGEgPSBoYXNWYWx1ZShuKSAmJiAhKGVlKG4pIHx8IEIobikpID8gbj8udmFsdWUgOiBuO1xuXHRyZXR1cm4gdHlwZW9mIGEgPT0gXCJzdHJpbmdcIiAmJiAhZWUoYSkgJiYgKGEgPSB0cnlTdHJpbmdBc051bWJlcihhKSA/PyBhKSwgYSA9PSBudWxsID8gKFkobCwgaSwgbnVsbCwgciksIGUpIDogKGVlKGEpLCBZKGwsIGksIFN0cmluZyhhKSwgciksIGUpO1xufTtcbnZhciBMZSA9IChlLCB0LCBuLCByID0gXCJcIikgPT4gbHQgPyBjYShlLCB0LCBuLCByKSA6IERuKGUsIHQsIG4sIHIpO1xudmFyIGRhID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZmEgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BuYW1lZFN0b3JlTWFwc1wiKTtcbnZhciBfdCA9IGdsb2JhbFRoaXNbZmFdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIHBhID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IFsuLi5lLmVudHJpZXMoKSB8fCBbXV07XG5cdHJldHVybiBuZXcgTWFwKG4/Lm1hcD8uKChbciwgaV0pID0+IFtyLCBpPy5nZXQ/Lih0KV0pPy5maWx0ZXI/LigoW3IsIGldKSA9PiAhIWkpIHx8IFtdKTtcbn07XG52YXIgT2UgPSAoZSkgPT4gKHtcblx0c3RvcmVTZXQ6IHBhKF90LCBlKSxcblx0bWl4aW5TZXQ6IHFlPy5nZXQ/LihlKSxcblx0YmVoYXZpb3JTZXQ6IGRhPy5nZXQ/LihlKVxufSk7XG52YXIgaGEgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0Bib3VuZE1peGluU2V0XCIpO1xudmFyIHFlID0gZ2xvYmFsVGhpc1toYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1hID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5FbGVtZW50c1wiKTtcbnZhciBwZSA9IGdsb2JhbFRoaXNbbWFdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB2YSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIik7XG52YXIgd2UgPSBnbG9iYWxUaGlzW3ZhXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBnYSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIpO1xudmFyIEdlID0gZ2xvYmFsVGhpc1tnYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIFhuID0gKGUsIHQpID0+IHtcblx0dHlwZW9mIHQgPT0gXCJzdHJpbmdcIiAmJiAodCA9IHdlPy5nZXQ/Lih0KSk7XG5cdGNvbnN0IG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZT8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pLCByID0gbmV3IFNldChbLi4ubl0ubWFwKChhKSA9PiB3ZT8uZ2V0Py4oYSkpLmZpbHRlcigoYSkgPT4gISFhKSksIGkgPSBxZT8uZ2V0Py4oZSkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdHBlPy5oYXM/Lih0KSB8fCBwZT8uc2V0Py4odCwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpLCBxZT8uaGFzPy4oZSkgfHwgcWU/LnNldD8uKGUsIGkpO1xuXHRjb25zdCBsID0gbmV3IFdlYWtSZWYoZSk7XG5cdGk/Lmhhcz8uKHQpIHx8IChyLmhhcyh0KSB8fCB0Py5kaXNjb25uZWN0Py4obCwgdCwgT2UoZSkpLCAoci5oYXModCkgfHwgIXBlPy5nZXQ/Lih0KT8uaGFzPy4oZSkpICYmICh0Py5jb25uZWN0Py4obCwgdCwgT2UoZSkpLCBuLmFkZChHZT8uZ2V0Py4odCkpLCBpPy5hZGQ/Lih0KSwgZT8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIsIFsuLi5uXS5maWx0ZXIoKGEpID0+ICEhYSkuam9pbihcIiBcIikpKSwgcGU/LmdldD8uKHQpPy5hZGQ/LihlKSksIGk/Lmhhcz8uKHQpICYmIChyLmhhcyh0KSB8fCAoaT8uZGVsZXRlPy4odCksIHQ/LmRpc2Nvbm5lY3Q/LihsLCB0LCBPZShlKSkpKTtcbn07XG52YXIgRHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xudmFyIHlhID0gKGUgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50IDogbnVsbCkgPT4ge1xuXHRpZiAoZSkgcmV0dXJuIER0Py5oYXM/LihlKSB8fCAoRHQ/LmFkZD8uKGUpLCBzYShlLCBcIipcIiwgXCJkYXRhLW1peGluXCIsICh0KSA9PiBYdCh0LnRhcmdldCkpLCBsYShlLCBcIltkYXRhLW1peGluXVwiLCAodCkgPT4ge1xuXHRcdGZvciAoY29uc3QgbiBvZiB0LmFkZGVkTm9kZXMpIG4gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBYdChuKTtcblx0fSkpLCBlO1xufTtcbnZhciBYdCA9IChlKSA9PiB7XG5cdGNvbnN0IHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZT8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pO1xuXHRbLi4ubmV3IFNldChbLi4udF0ubWFwKChuKSA9PiB3ZT8uZ2V0Py4obikpLmZpbHRlcigobikgPT4gISFuKSldLm1hcD8uKChuKSA9PiBYbihlLCBuKSk7XG59O1xudmFyIGJhID0gKGUsIHQpID0+IHtcblx0ZS5mb3JFYWNoKChuKSA9PiB0ID8gWG4obiwgdCkgOiBYdChuKSk7XG59O1xudmFyIHhhID0gKGUpID0+IHtcblx0Zm9yIChjb25zdCB0IG9mIER0KSBiYSh0Py5xdWVyeVNlbGVjdG9yQWxsPy4oXCJbZGF0YS1taXhpbl1cIiksIGUpO1xufTtcbnZhciB3YSA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoZSkgPT4ge1xuXHR3ZT8uZGVsZXRlPy4oZSk7XG59KTtcbnZhciBTYSA9IChlLCB0KSA9PiB7XG5cdGlmICghR2U/Lmhhcz8uKHQpKSB7XG5cdFx0Y29uc3QgbiA9IGU/LnRyaW0/LigpO1xuXHRcdG4gJiYgKEdlPy5zZXQ/Lih0LCBuKSwgd2U/LnNldD8uKG4sIHQpLCB3YT8ucmVnaXN0ZXI/Lih0LCBuKSwgeGEodCkpO1xuXHR9XG59O1xueWEodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudCA6IG51bGwpO1xudmFyIG5uID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihlID0gbnVsbCkge1xuXHRcdGUgJiYgU2EoZSwgdGhpcyk7XG5cdH1cblx0Y29ubmVjdChlLCB0LCBuKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlLCB0LCBuKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c3RvcmVGb3JFbGVtZW50KGUpIHtcblx0XHRyZXR1cm4gX3QuZ2V0KHRoaXMubmFtZSB8fCBcIlwiKT8uZ2V0Py4oZSk7XG5cdH1cblx0cmVsYXRlZEZvckVsZW1lbnQoZSkge1xuXHRcdHJldHVybiBPZShlKTtcblx0fVxuXHRnZXQgZWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIHBlPy5nZXQ/Lih0aGlzKTtcblx0fVxuXHRnZXQgc3RvcmFnZSgpIHtcblx0XHRyZXR1cm4gX3Q/LmdldD8uKHRoaXMubmFtZSB8fCBcIlwiKTtcblx0fVxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gR2U/LmdldD8uKHRoaXMpO1xuXHR9XG59O1xudmFyIEVhID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBWbiA9IGdsb2JhbFRoaXNbRWFdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuW1xuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jbGlwLWZyZXFcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGl4ZWwtcmF0aW9cIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjFcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITAsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudC15XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICEwLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JvbGwtbGVmdFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMCxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6ICExLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogITEsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC14XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC15XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiAhMSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH1cbl0uZm9yRWFjaCgoZSkgPT4ge1xuXHRpZiAodHlwZW9mIENTUyA+IFwidVwiIHx8IHR5cGVvZiBDU1M/LnJlZ2lzdGVyUHJvcGVydHkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdGNvbnN0IHQgPSBTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50cmltKCk7XG5cdGlmICghKCF0IHx8IFZuLmhhcyh0KSkpIHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkoZSk7XG5cdH0gY2F0Y2ggKG4pIHtcblx0XHRTdHJpbmcobj8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpICE9PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiICYmIGNvbnNvbGUud2FybihuKTtcblx0fSBmaW5hbGx5IHtcblx0XHRWbi5hZGQodCk7XG5cdH1cbn0pO1xudmFyIGphID0gKGUsIHQgPSBcInZhbHVlXCIpID0+ICh0eXBlb2YgZSA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBlID09IFwiZnVuY3Rpb25cIikgJiYgZSAhPSBudWxsICYmICh0IGluIGUgfHwgZT8uW3RdICE9IG51bGwpO1xudmFyIFVuID0gKGUpID0+IGphKGUsIFwidmFsdWVcIik7XG52YXIgWW4gPSAoZSkgPT4gZSAmJiBlPy5yZXBsYWNlPy4oLyhbYS16XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKTtcbnZhciBabiA9IChlKSA9PiB7XG5cdGlmICh0eXBlb2YgZSAhPSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgdCA9IFsuLi5lPy5tYXRjaEFsbD8uKC9eXFxkKyhcXC5cXGQrKT8kL2cpXTtcblx0aWYgKHQ/Lmxlbmd0aCAhPSAxKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgbiA9IHBhcnNlRmxvYXQodFswXVswXSk7XG5cdHJldHVybiAhTnVtYmVyLmlzTmFOKG4pICYmIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBudWxsO1xufTtcbnR5cGVvZiBkb2N1bWVudCA8IFwidVwiICYmIGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ7XG52YXIgTWEgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA8IFwidVwiICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdGZvciAoOzspIE1hLmZvckVhY2goKGUpID0+IGU/LigpKSwgYXdhaXQgbmV3IFByb21pc2UoKGUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShlKSk7XG59KTtcbnZhciBDYSA9IHt9O1xuZnVuY3Rpb24gdihlLCB0LCBuLCByID0gQ2EpIHtcblx0ZT8uYWRkRXZlbnRMaXN0ZW5lcj8uKHQsIG4sIHIpO1xuXHRjb25zdCBpID0gdHlwZW9mIGUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgIWU/LmRlcmVmID8gbmV3IFdlYWtSZWYoZSkgOiBlO1xuXHRyZXR1cm4gKCkgPT4gaT8uZGVyZWY/LigpPy5yZW1vdmVFdmVudExpc3RlbmVyPy4odCwgbiwgcik7XG59XG52YXIgVmEgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xuZ2xvYmFsVGhpc1tWYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIEFhID0gKCkgPT4ge1xuXHRjb25zdCBlID0gdHlwZW9mIG1hdGNoTWVkaWEgPCBcInVcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiAhMSwgdCA9IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGwsIG4gPSB0ID8ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt0LndpZHRofXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3QuaGVpZ2h0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dC5vZmZzZXRMZWZ0fXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt0Lm9mZnNldFRvcH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh0LnNjYWxlID8/IDEpXG5cdH0gOiB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YCA6IFwiMHB4XCIsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgPyBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIDogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogXCIwcHhcIixcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBcIjBweFwiLFxuXHRcdFwiLS12di1zY2FsZVwiOiBcIjFcIlxuXHR9O1xuXHRpZiAodHlwZW9mIHNjcmVlbiA8IFwidVwiKSB7XG5cdFx0Y29uc3QgciA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIiwgaSA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBlID8gaSA6IHIsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IGUgPyByIDogaSxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLm5cblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi5uXG5cdH07XG59O1xuQWEoKTtcbm5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIExhID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xuZ2xvYmFsVGhpc1tMYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHphID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAb25Db250ZW50T2JzZXJ2ZVwiKTtcbmdsb2JhbFRoaXNbemFdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBKbiA9IChlKSA9PiAodHlwZW9mIGU/LmN1cnJlbnQgPT0gXCJvYmplY3RcIiAmJiAoZSA9IGU/LmVsZW1lbnQgPz8gZT8uY3VycmVudCA/PyAodHlwZW9mIGU/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGU/LnNlbGYgOiBudWxsKSA/PyBlKSwgZSk7XG52YXIgVGEgPSAoZSwgdCwgbiwgcikgPT4ge1xuXHRjb25zdCBpID0gbmV3IFNldChbLi4ubi5zcGxpdChcIixcIikgfHwgW25dXS5tYXAoKGEpID0+IGEudHJpbSgpKSksIGwgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoYSwgbykgPT4ge1xuXHRcdGZvciAoY29uc3QgZCBvZiBhKSBpZiAoZC50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGMgPSBBcnJheS5mcm9tKGQuYWRkZWROb2RlcykgfHwgW10sIHAgPSBBcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGMucHVzaCguLi5BcnJheS5mcm9tKGQuYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoaCkgPT4gQXJyYXkuZnJvbShoPy5xdWVyeVNlbGVjdG9yQWxsPy4odCkgfHwgW10pKSksIHAucHVzaCguLi5BcnJheS5mcm9tKGQucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChoKSA9PiBBcnJheS5mcm9tKGg/LnF1ZXJ5U2VsZWN0b3JBbGw/Lih0KSB8fCBbXSkpKSwgWy4uLm5ldyBTZXQoYyldLmZpbHRlcigoaCkgPT4gaD8ubWF0Y2hlcz8uKHQpKT8ubWFwPy4oKGgpID0+IHtcblx0XHRcdFx0aS5mb3JFYWNoKCh1KSA9PiB7XG5cdFx0XHRcdFx0cih7XG5cdFx0XHRcdFx0XHR0YXJnZXQ6IGgsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU6IHUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogaD8uZ2V0QXR0cmlidXRlPy4odSlcblx0XHRcdFx0XHR9LCBvKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgZC50YXJnZXQ/Lm1hdGNoZXM/Lih0KSAmJiBkLmF0dHJpYnV0ZU5hbWUgJiYgaS5oYXMoZC5hdHRyaWJ1dGVOYW1lKSAmJiByKGQsIG8pO1xuXHR9KTtcblx0cmV0dXJuIGwub2JzZXJ2ZShlID0gSm4oZSksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogITAsXG5cdFx0YXR0cmlidXRlczogITAsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uaV0sXG5cdFx0Y2hpbGRMaXN0OiAhMCxcblx0XHRzdWJ0cmVlOiAhMCxcblx0XHRjaGFyYWN0ZXJEYXRhOiAhMFxuXHR9KSwgWy4uLmUucXVlcnlTZWxlY3RvckFsbCh0KV0ubWFwKChhKSA9PiBpLmZvckVhY2goKG8pID0+IHIoe1xuXHRcdHRhcmdldDogYSxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBvLFxuXHRcdG9sZFZhbHVlOiBhPy5nZXRBdHRyaWJ1dGU/LihvKVxuXHR9LCBsKSkpLCBsO1xufTtcbnZhciBOYSA9IChlLCB0ID0gXCIqXCIsIG4gPSAociwgaSkgPT4ge30pID0+IHtcblx0Y29uc3QgciA9ICh1KSA9PiB7XG5cdFx0Y29uc3QgcyA9IEFycmF5LmZyb20odSB8fCBbXSkgfHwgW107XG5cdFx0cmV0dXJuIHMucHVzaCguLi5BcnJheS5mcm9tKHUgfHwgW10pLmZsYXRNYXAoKGYpID0+IEFycmF5LmZyb20oZj8ucXVlcnlTZWxlY3RvckFsbD8uKHQpIHx8IFtdKSkpLCBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KHMpLnZhbHVlcygpKV0uZmlsdGVyKChmKSA9PiBmPy5tYXRjaGVzPy4odCkpO1xuXHR9O1xuXHRsZXQgaSA9IG51bGw7XG5cdGNvbnN0IGwgPSAodSkgPT4ge1xuXHRcdGNvbnN0IHMgPSBpPy5kZXJlZj8uKCksIGYgPSByKHUuYWRkZWROb2RlcyksIG0gPSByKHUucmVtb3ZlZE5vZGVzKTtcblx0XHQoZi5sZW5ndGggPiAwIHx8IG0ubGVuZ3RoID4gMCkgJiYgbj8uKHtcblx0XHRcdHR5cGU6IHUudHlwZSxcblx0XHRcdHRhcmdldDogdS50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiB1LmF0dHJpYnV0ZU5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IHUuYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IHUubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogdS5vbGRWYWx1ZSxcblx0XHRcdHByZXZpb3VzU2libGluZzogdS5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzOiBmLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBtXG5cdFx0fSwgcyk7XG5cdH0sIGEgPSAodSkgPT4ge1xuXHRcdGwoe1xuXHRcdFx0YWRkZWROb2RlczogW3U/LnRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbdT8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChzKSA9PiAhIXMpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogdT8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9LCBvID0gKHUpID0+IHtcblx0XHRsKHtcblx0XHRcdGFkZGVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py50YXJnZXRdLmZpbHRlcigocykgPT4gISFzKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IHU/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fSwgZCA9ICh1KSA9PiB7XG5cdFx0bCh7XG5cdFx0XHRhZGRlZE5vZGVzOiBbdT8udGFyZ2V0XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFt1Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKHMpID0+ICEhcyksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiB1Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH0sIGMgPSB7XG5cdFx0cGFzc2l2ZTogITAsXG5cdFx0Y2FwdHVyZTogITFcblx0fTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikgJiYgdD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGEsIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbywgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBhLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgbywgYyk7XG5cdH0gfTtcblx0aWYgKHQ/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSByZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKSwgeyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvLCBjKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBvLCBjKTtcblx0fSB9O1xuXHRpZiAodD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiB0Py5pbmNsdWRlcz8uKFwiOmZvY3VzLXZpc2libGVcIikpIHJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGEsIGMpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBvLCBjKSwgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZCwgYyksIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgYSwgYyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIG8sIGMpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkLCBjKTtcblx0fSB9O1xuXHRjb25zdCBwID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHUsIHMpID0+IHtcblx0XHRmb3IgKGNvbnN0IGYgb2YgdSkgZi50eXBlID09IFwiY2hpbGRMaXN0XCIgJiYgbChmKTtcblx0fSk7XG5cdGkgPSBuZXcgV2Vha1JlZihwKSwgKGU/LmVsZW1lbnQgPz8gZSkgaW5zdGFuY2VvZiBOb2RlICYmIHAub2JzZXJ2ZShlID0gSm4oZSksIHtcblx0XHRjaGlsZExpc3Q6ICEwLFxuXHRcdHN1YnRyZWU6ICEwXG5cdH0pO1xuXHRjb25zdCBoID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwodCkpO1xuXHRyZXR1cm4gaC5sZW5ndGggPiAwICYmIG4/Lih7XG5cdFx0YWRkZWROb2RlczogaCxcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIHApLCBwO1xufTtcbnZhciBrYSA9IFwiRE9NXCI7XG52YXIgZ3QgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSA6IG51bGw7XG5ndCAmJiAodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik/LmFwcGVuZENoaWxkPy4oZ3QpLCBndC5kYXRhc2V0Lm93bmVyID0ga2EpO1xudmFyIHV0ID0gdHlwZW9mIENTU1N0eWxlVmFsdWUgPCBcInVcIiAmJiB0eXBlb2YgQ1NTVW5pdFZhbHVlIDwgXCJ1XCI7XG52YXIgdGUgPSAoZSkgPT4gdXQgJiYgZSBpbnN0YW5jZW9mIENTU1N0eWxlVmFsdWU7XG52YXIgXyA9IChlKSA9PiB1dCAmJiBlIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xudmFyIFogPSAoZSwgdCwgbiwgciA9IFwiXCIpID0+IHtcblx0aWYgKCEoIWUgfHwgIXQpKSB7XG5cdFx0aWYgKG4gPT0gbnVsbCkge1xuXHRcdFx0ZS5nZXRQcm9wZXJ0eVZhbHVlKHQpICE9PSBcIlwiICYmIGUucmVtb3ZlUHJvcGVydHkodCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gbiAmJiBlLnNldFByb3BlcnR5KHQsIG4sIHIpO1xuXHR9XG59O1xudmFyIFBhID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBZbih0KSwgbCA9IGUuc3R5bGUsIGEgPSBlLmF0dHJpYnV0ZVN0eWxlTWFwID8/IGUuc3R5bGVNYXA7XG5cdGlmICghdXQgfHwgIWEpIHJldHVybiBHbihlLCB0LCBuLCByKTtcblx0bGV0IG8gPSBVbihuKSAmJiAhKHRlKG4pIHx8IF8obikpID8gbj8udmFsdWUgOiBuO1xuXHRpZiAobyA9PSBudWxsKSByZXR1cm4gYS5kZWxldGU/LihpKSwgbCAmJiBaKGwsIGksIG51bGwsIHIpLCBlO1xuXHRpZiAodGUobykpIHtcblx0XHRjb25zdCBkID0gYS5nZXQoaSk7XG5cdFx0aWYgKF8obykgJiYgXyhkKSkge1xuXHRcdFx0aWYgKGQudmFsdWUgPT09IG8udmFsdWUgJiYgZC51bml0ID09PSBvLnVuaXQpIHJldHVybiBlO1xuXHRcdH0gZWxzZSBpZiAoZCA9PT0gbykgcmV0dXJuIGU7XG5cdFx0cmV0dXJuIGEuc2V0KGksIG8pLCBlO1xuXHR9XG5cdGlmICh0eXBlb2YgbyA9PSBcIm51bWJlclwiKSBpZiAoQ1NTPy5udW1iZXIgJiYgIWkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0Y29uc3QgZCA9IENTUy5udW1iZXIobyksIGMgPSBhLmdldChpKTtcblx0XHRyZXR1cm4gXyhjKSAmJiBjLnZhbHVlID09PSBkLnZhbHVlICYmIGMudW5pdCA9PT0gZC51bml0IHx8IGEuc2V0KGksIGQpLCBlO1xuXHR9IGVsc2UgcmV0dXJuIFoobCwgaSwgU3RyaW5nKG8pLCByKSwgZTtcblx0aWYgKHR5cGVvZiBvID09IFwic3RyaW5nXCIgJiYgIXRlKG8pKSB7XG5cdFx0Y29uc3QgZCA9IFpuKG8pO1xuXHRcdGlmICh0eXBlb2YgZCA9PSBcIm51bWJlclwiICYmIENTUz8ubnVtYmVyICYmICFpLnN0YXJ0c1dpdGgoXCItLVwiKSkge1xuXHRcdFx0Y29uc3QgYyA9IENTUy5udW1iZXIoZCksIHAgPSBhLmdldChpKTtcblx0XHRcdHJldHVybiBfKHApICYmIHAudmFsdWUgPT09IGMudmFsdWUgJiYgcC51bml0ID09PSBjLnVuaXQgfHwgYS5zZXQoaSwgYyksIGU7XG5cdFx0fSBlbHNlIHJldHVybiBaKGwsIGksIG8sIHIpLCBlO1xuXHR9XG5cdHJldHVybiBaKGwsIGksIFN0cmluZyhvKSwgciksIGU7XG59O1xudmFyIEduID0gKGUsIHQsIG4sIHIgPSBcIlwiKSA9PiB7XG5cdGlmICghZSB8fCAhdCkgcmV0dXJuIGU7XG5cdGNvbnN0IGkgPSBZbih0KSwgbCA9IGUuc3R5bGU7XG5cdGlmICghbCkgcmV0dXJuIGU7XG5cdGxldCBhID0gVW4obikgJiYgISh0ZShuKSB8fCBfKG4pKSA/IG4/LnZhbHVlIDogbjtcblx0cmV0dXJuIHR5cGVvZiBhID09IFwic3RyaW5nXCIgJiYgIXRlKGEpICYmIChhID0gWm4oYSkgPz8gYSksIGEgPT0gbnVsbCA/IChaKGwsIGksIG51bGwsIHIpLCBlKSA6ICh0ZShhKSwgWihsLCBpLCBTdHJpbmcoYSksIHIpLCBlKTtcbn07XG52YXIgVCA9IChlLCB0LCBuLCByID0gXCJcIikgPT4gdXQgPyBQYShlLCB0LCBuLCByKSA6IEduKGUsIHQsIG4sIHIpO1xudmFyIFdhID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgUmEgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BuYW1lZFN0b3JlTWFwc1wiKTtcbnZhciBVdCA9IGdsb2JhbFRoaXNbUmFdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyICRhID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IFsuLi5lLmVudHJpZXMoKSB8fCBbXV07XG5cdHJldHVybiBuZXcgTWFwKG4/Lm1hcD8uKChbciwgaV0pID0+IFtyLCBpPy5nZXQ/Lih0KV0pPy5maWx0ZXI/LigoW3IsIGldKSA9PiAhIWkpIHx8IFtdKTtcbn07XG52YXIgSGUgPSAoZSkgPT4gKHtcblx0c3RvcmVTZXQ6ICRhKFV0LCBlKSxcblx0bWl4aW5TZXQ6IEllPy5nZXQ/LihlKSxcblx0YmVoYXZpb3JTZXQ6IFdhPy5nZXQ/LihlKVxufSk7XG52YXIgRmEgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0Bib3VuZE1peGluU2V0XCIpO1xudmFyIEllID0gZ2xvYmFsVGhpc1tGYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIE9hID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5FbGVtZW50c1wiKTtcbnZhciBoZSA9IGdsb2JhbFRoaXNbT2FdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBxYSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIik7XG52YXIgU2UgPSBnbG9iYWxUaGlzW3FhXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBIYSA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIpO1xudmFyIEtlID0gZ2xvYmFsVGhpc1tIYV0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIEtuID0gKGUsIHQpID0+IHtcblx0dHlwZW9mIHQgPT0gXCJzdHJpbmdcIiAmJiAodCA9IFNlPy5nZXQ/Lih0KSk7XG5cdGNvbnN0IG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZT8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pLCByID0gbmV3IFNldChbLi4ubl0ubWFwKChhKSA9PiBTZT8uZ2V0Py4oYSkpLmZpbHRlcigoYSkgPT4gISFhKSksIGkgPSBJZT8uZ2V0Py4oZSkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdGhlPy5oYXM/Lih0KSB8fCBoZT8uc2V0Py4odCwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpLCBJZT8uaGFzPy4oZSkgfHwgSWU/LnNldD8uKGUsIGkpO1xuXHRjb25zdCBsID0gbmV3IFdlYWtSZWYoZSk7XG5cdGk/Lmhhcz8uKHQpIHx8IChyLmhhcyh0KSB8fCB0Py5kaXNjb25uZWN0Py4obCwgdCwgSGUoZSkpLCAoci5oYXModCkgfHwgIWhlPy5nZXQ/Lih0KT8uaGFzPy4oZSkpICYmICh0Py5jb25uZWN0Py4obCwgdCwgSGUoZSkpLCBuLmFkZChLZT8uZ2V0Py4odCkpLCBpPy5hZGQ/Lih0KSwgZT8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIsIFsuLi5uXS5maWx0ZXIoKGEpID0+ICEhYSkuam9pbihcIiBcIikpKSwgaGU/LmdldD8uKHQpPy5hZGQ/LihlKSksIGk/Lmhhcz8uKHQpICYmIChyLmhhcyh0KSB8fCAoaT8uZGVsZXRlPy4odCksIHQ/LmRpc2Nvbm5lY3Q/LihsLCB0LCBIZShlKSkpKTtcbn07XG52YXIgWXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xudmFyIElhID0gKGUgPSB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiA/IGRvY3VtZW50IDogbnVsbCkgPT4ge1xuXHRpZiAoZSkgcmV0dXJuIFl0Py5oYXM/LihlKSB8fCAoWXQ/LmFkZD8uKGUpLCBUYShlLCBcIipcIiwgXCJkYXRhLW1peGluXCIsICh0KSA9PiBadCh0LnRhcmdldCkpLCBOYShlLCBcIltkYXRhLW1peGluXVwiLCAodCkgPT4ge1xuXHRcdGZvciAoY29uc3QgbiBvZiB0LmFkZGVkTm9kZXMpIG4gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBadChuKTtcblx0fSkpLCBlO1xufTtcbnZhciBadCA9IChlKSA9PiB7XG5cdGNvbnN0IHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZT8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pO1xuXHRbLi4ubmV3IFNldChbLi4udF0ubWFwKChuKSA9PiBTZT8uZ2V0Py4obikpLmZpbHRlcigobikgPT4gISFuKSldLm1hcD8uKChuKSA9PiBLbihlLCBuKSk7XG59O1xudmFyIEJhID0gKGUsIHQpID0+IHtcblx0ZS5mb3JFYWNoKChuKSA9PiB0ID8gS24obiwgdCkgOiBadChuKSk7XG59O1xudmFyIF9hID0gKGUpID0+IHtcblx0Zm9yIChjb25zdCB0IG9mIFl0KSBCYSh0Py5xdWVyeVNlbGVjdG9yQWxsPy4oXCJbZGF0YS1taXhpbl1cIiksIGUpO1xufTtcbnZhciBEYSA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoZSkgPT4ge1xuXHRTZT8uZGVsZXRlPy4oZSk7XG59KTtcbnZhciBYYSA9IChlLCB0KSA9PiB7XG5cdGlmICghS2U/Lmhhcz8uKHQpKSB7XG5cdFx0Y29uc3QgbiA9IGU/LnRyaW0/LigpO1xuXHRcdG4gJiYgKEtlPy5zZXQ/Lih0LCBuKSwgU2U/LnNldD8uKG4sIHQpLCBEYT8ucmVnaXN0ZXI/Lih0LCBuKSwgX2EodCkpO1xuXHR9XG59O1xuSWEodHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgPyBkb2N1bWVudCA6IG51bGwpO1xudmFyIHJlID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihlID0gbnVsbCkge1xuXHRcdGUgJiYgWGEoZSwgdGhpcyk7XG5cdH1cblx0Y29ubmVjdChlLCB0LCBuKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlLCB0LCBuKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c3RvcmVGb3JFbGVtZW50KGUpIHtcblx0XHRyZXR1cm4gVXQuZ2V0KHRoaXMubmFtZSB8fCBcIlwiKT8uZ2V0Py4oZSk7XG5cdH1cblx0cmVsYXRlZEZvckVsZW1lbnQoZSkge1xuXHRcdHJldHVybiBIZShlKTtcblx0fVxuXHRnZXQgZWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIGhlPy5nZXQ/Lih0aGlzKTtcblx0fVxuXHRnZXQgc3RvcmFnZSgpIHtcblx0XHRyZXR1cm4gVXQ/LmdldD8uKHRoaXMubmFtZSB8fCBcIlwiKTtcblx0fVxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gS2U/LmdldD8uKHRoaXMpO1xuXHR9XG59O1xuZnVuY3Rpb24geXQoZSwgdCkge1xuXHRjb25zdCBuID0gTWF0aC5taW4oZS54LCB0LngpLCByID0gTWF0aC5taW4oZS55LCB0LnkpLCBpID0gTWF0aC5tYXgoZS54LCB0LngpLCBsID0gTWF0aC5tYXgoZS55LCB0LnkpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IG4sXG5cdFx0dG9wOiByLFxuXHRcdHJpZ2h0OiBpLFxuXHRcdGJvdHRvbTogbCxcblx0XHR3aWR0aDogaSAtIG4sXG5cdFx0aGVpZ2h0OiBsIC0gclxuXHR9O1xufVxudmFyIHplID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1zZWxlY3Q6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1zZWxlY3Q6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tc2VsZWN0OmVuZFwiLFxuXHRjYW5jZWw6IFwianVuY3Rpb24tc2VsZWN0OmNhbmNlbFwiXG59O1xudmFyIGJ0ID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1kcmFnOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tZHJhZzptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1kcmFnOmVuZFwiXG59O1xudmFyIHh0ID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1yZXNpemU6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1yZXNpemU6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tcmVzaXplOmVuZFwiXG59O1xudmFyIFVhID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5EaXNwb3NlcnNcIik7XG52YXIgUWUgPSBnbG9iYWxUaGlzW1VhXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgeSA9IChlLCB0LCBuKSA9PiB7XG5cdGNvbnN0IHIgPSBRZS5nZXQoZSkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgaSA9IHIuZ2V0KHQpID8/IFtdO1xuXHRpLnB1c2gobiksIHIuc2V0KHQsIGkpLCBRZS5zZXQoZSwgcik7XG59O1xudmFyIHJuID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IFFlLmdldChlKSwgciA9IG4/LmdldCh0KTtcblx0aWYgKHIpIHtcblx0XHRmb3IgKGNvbnN0IGkgb2YgcikgdHJ5IHtcblx0XHRcdGkoKTtcblx0XHR9IGNhdGNoIHt9XG5cdFx0bi5kZWxldGUodCksIG4uc2l6ZSA9PT0gMCAmJiBRZS5kZWxldGUoZSk7XG5cdH1cbn07XG52YXIgVyA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/LihlKT8uZ2V0UHJvcGVydHlWYWx1ZT8uKHQpPy50cmltPy4oKSA/PyBcIlwiLCByID0gcGFyc2VGbG9hdChuKTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShyKSA/IHIgOiAwO1xufTtcbnZhciBRbiA9IChlLCB0LCBuKSA9PiB7XG5cdGNvbnN0IHIgPSBlLmdldEF0dHJpYnV0ZSh0KT8udHJpbSgpO1xuXHRpZiAoIXIpIHJldHVybiBuO1xuXHRjb25zdCBpID0gZS5xdWVyeVNlbGVjdG9yKHIpO1xuXHRyZXR1cm4gaSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gaSA6IG47XG59O1xudmFyIFlhID0gY2xhc3MgZXh0ZW5kcyByZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRuLmNsYXNzTmFtZSA9IFwidWktanVuY3Rpb24tc2VsZWN0LW92ZXJsYXlcIiwgbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLW92ZXJsYXlcIiwgXCJcIiksIG4uc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Ojk5OTk7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoxcHggZGFzaGVkIGNvbG9yLW1peChpbiBva2xhYiwgIzM3OTRmZiA3MCUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kOmNvbG9yLW1peChpbiBva2xhYiwgIzM3OTRmZiAxNCUsIHRyYW5zcGFyZW50KTtkaXNwbGF5Om5vbmU7aW5zZXQ6YXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjA7XCIsIGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKHQpPy5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiAmJiAodC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIiksIHQuYXBwZW5kQ2hpbGQobik7XG5cdFx0bGV0IHIgPSAhMSwgaSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fSwgbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRjb25zdCBhID0gKHMpID0+IHtcblx0XHRcdGNvbnN0IGYgPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogcy5jbGllbnRYIC0gZi5sZWZ0LFxuXHRcdFx0XHR5OiBzLmNsaWVudFkgLSBmLnRvcFxuXHRcdFx0fTtcblx0XHR9LCBvID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgcyA9IHl0KGksIGwpO1xuXHRcdFx0aWYgKHMud2lkdGggPCAxICYmIHMuaGVpZ2h0IDwgMSkge1xuXHRcdFx0XHRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiLCBuLnN0eWxlLmxlZnQgPSBgJHtzLmxlZnR9cHhgLCBuLnN0eWxlLnRvcCA9IGAke3MudG9wfXB4YCwgbi5zdHlsZS53aWR0aCA9IGAke3Mud2lkdGh9cHhgLCBuLnN0eWxlLmhlaWdodCA9IGAke3MuaGVpZ2h0fXB4YDtcblx0XHR9LCBkID0gKHMpID0+IHtcblx0XHRcdHMuYnV0dG9uID09PSAwICYmIChzLnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtanVuY3Rpb24taWdub3JlLXNlbGVjdF0sIFtkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXSwgW2RhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZV0sIGJ1dHRvbiwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikgfHwgKHMudGFyZ2V0ID09PSB0IHx8IHQuY29udGFpbnMocy50YXJnZXQpKSAmJiAociA9ICEwLCBpID0gYShzKSwgbCA9IHsgLi4uaSB9LCB0LnNldFBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh6ZS5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5pIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5sIH0sXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSksIG8oKSkpO1xuXHRcdH0sIGMgPSAocykgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRsID0gYShzKSwgbygpO1xuXHRcdFx0Y29uc3QgZiA9IHl0KGksIGwpO1xuXHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh6ZS5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmkgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRib3g6IGYsXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgcCA9IChzKSA9PiB7XG5cdFx0XHRpZiAoIXIpIHJldHVybjtcblx0XHRcdHIgPSAhMTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGNvbnN0IGYgPSB5dChpLCBsKTtcblx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoemUuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmkgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRib3g6IGYsXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgaCA9IChzKSA9PiB7XG5cdFx0XHRyICYmIHAocyk7XG5cdFx0fSwgdSA9IChzKSA9PiB7XG5cdFx0XHRpZiAocikge1xuXHRcdFx0XHRyID0gITEsIG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHplLmNhbmNlbCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDogeyBob3N0OiB0IH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIHkodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgKCkgPT4ge1xuXHRcdFx0bi5yZW1vdmUoKTtcblx0XHR9KSwgeSh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB2KHQsIFwicG9pbnRlcmRvd25cIiwgZCkpLCB5KHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIHYodCwgXCJwb2ludGVybW92ZVwiLCBjKSksIHkodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgdih0LCBcInBvaW50ZXJ1cFwiLCBoKSksIHkodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgdih0LCBcInBvaW50ZXJjYW5jZWxcIiwgdSkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgcm4odCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiksIHRoaXM7XG5cdH1cbn07XG52YXIgWmEgPSBjbGFzcyBleHRlbmRzIHJlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRUKHQsIFwiLS1qeC1kcmFnLXhcIiwgVyh0LCBcIi0tangtZHJhZy14XCIpKSwgVCh0LCBcIi0tangtZHJhZy15XCIsIFcodCwgXCItLWp4LWRyYWcteVwiKSk7XG5cdFx0Y29uc3QgbiA9IHQuc3R5bGUudHJhbnNmb3JtO1xuXHRcdCghdC5zdHlsZS50cmFuc2Zvcm0gfHwgdC5zdHlsZS50cmFuc2Zvcm0gPT09IFwibm9uZVwiKSAmJiAodC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tangtZHJhZy14LCAwKSAqIDFweCksIGNhbGModmFyKC0tangtZHJhZy15LCAwKSAqIDFweCksIDApXCIpO1xuXHRcdGNvbnN0IHIgPSBRbih0LCBcImRhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVcIiwgdCk7XG5cdFx0bGV0IGkgPSAhMSwgbCA9IDAsIGEgPSAwLCBvID0gMCwgZCA9IDA7XG5cdFx0Y29uc3QgYyA9ICh1KSA9PiB7XG5cdFx0XHR1LmJ1dHRvbiA9PT0gMCAmJiAodS50YXJnZXQgIT09IHIgJiYgIXIuY29udGFpbnModS50YXJnZXQpIHx8IChpID0gITAsIGwgPSB1LmNsaWVudFgsIGEgPSB1LmNsaWVudFksIG8gPSBXKHQsIFwiLS1qeC1kcmFnLXhcIiksIGQgPSBXKHQsIFwiLS1qeC1kcmFnLXlcIiksIHIuc2V0UG9pbnRlckNhcHR1cmUodS5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGJ0LnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGNsaWVudFg6IHUuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiB1LmNsaWVudFksXG5cdFx0XHRcdFx0YmFzZVg6IG8sXG5cdFx0XHRcdFx0YmFzZVk6IGRcblx0XHRcdFx0fVxuXHRcdFx0fSkpKSk7XG5cdFx0fSwgcCA9ICh1KSA9PiB7XG5cdFx0XHRpZiAoIWkpIHJldHVybjtcblx0XHRcdGNvbnN0IHMgPSB1LmNsaWVudFggLSBsLCBmID0gdS5jbGllbnRZIC0gYSwgbSA9IG8gKyBzLCBnID0gZCArIGY7XG5cdFx0XHRUKHQsIFwiLS1qeC1kcmFnLXhcIiwgbSksIFQodCwgXCItLWp4LWRyYWcteVwiLCBnKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChidC5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGR4OiBzLFxuXHRcdFx0XHRcdGR5OiBmLFxuXHRcdFx0XHRcdHg6IG0sXG5cdFx0XHRcdFx0eTogZ1xuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgaCA9ICh1KSA9PiB7XG5cdFx0XHRpZiAoaSkge1xuXHRcdFx0XHRpID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ci5yZWxlYXNlUG9pbnRlckNhcHR1cmUodS5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoYnQuZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0eDogVyh0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdFx0eTogVyh0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4geSh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0dC5zdHlsZS50cmFuc2Zvcm0gPSBuO1xuXHRcdH0pLCB5KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcmRvd25cIiwgYykpLCB5KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcm1vdmVcIiwgcCkpLCB5KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcnVwXCIsIGgpKSwgeSh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgdihyLCBcInBvaW50ZXJjYW5jZWxcIiwgaCkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgcm4odCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpLCB0aGlzO1xuXHR9XG59O1xudmFyIEphID0gY2xhc3MgZXh0ZW5kcyByZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBuID0gUW4odCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgdCk7XG5cdFx0bGV0IHIgPSAhMSwgaSA9IDAsIGwgPSAwLCBhID0gMCwgbyA9IDA7XG5cdFx0Y29uc3QgZCA9IE1hdGgubWF4KDEyMCwgcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi13XCIpIHx8IFwiXCIpIHx8IDEyMCksIGMgPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKSwgcCA9IChzKSA9PiB7XG5cdFx0XHRzLmJ1dHRvbiA9PT0gMCAmJiAocy50YXJnZXQgIT09IG4gJiYgIW4uY29udGFpbnMocy50YXJnZXQpIHx8IChyID0gITAsIGkgPSBzLmNsaWVudFgsIGwgPSBzLmNsaWVudFksIGEgPSB0Lm9mZnNldFdpZHRoLCBvID0gdC5vZmZzZXRIZWlnaHQsIG4uc2V0UG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHh0LnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdHdpZHRoOiBhLFxuXHRcdFx0XHRcdGhlaWdodDogb1xuXHRcdFx0XHR9XG5cdFx0XHR9KSkpKTtcblx0XHR9LCBoID0gKHMpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0Y29uc3QgZiA9IE1hdGgubWF4KGQsIGEgKyAocy5jbGllbnRYIC0gaSkpLCBtID0gTWF0aC5tYXgoYywgbyArIChzLmNsaWVudFkgLSBsKSk7XG5cdFx0XHR0LnN0eWxlLndpZHRoID0gYCR7Zn1weGAsIHQuc3R5bGUuaGVpZ2h0ID0gYCR7bX1weGAsIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoeHQubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHR3aWR0aDogZixcblx0XHRcdFx0XHRoZWlnaHQ6IG1cblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIHUgPSAocykgPT4ge1xuXHRcdFx0aWYgKHIpIHtcblx0XHRcdFx0ciA9ICExO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG4ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHh0LmVuZCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRcdHdpZHRoOiB0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiB0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIHkodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgdihuLCBcInBvaW50ZXJkb3duXCIsIHApKSwgeSh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCB2KG4sIFwicG9pbnRlcm1vdmVcIiwgaCkpLCB5KHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHYobiwgXCJwb2ludGVydXBcIiwgdSkpLCB5KHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHYobiwgXCJwb2ludGVyY2FuY2VsXCIsIHUpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIHJuKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIpLCB0aGlzO1xuXHR9XG59O1xubmV3IFlhKCk7XG5uZXcgWmEoKTtcbm5ldyBKYSgpO1xuZnVuY3Rpb24gd3QoZSwgdCkge1xuXHRjb25zdCBuID0gTWF0aC5taW4oZS54LCB0LngpLCByID0gTWF0aC5taW4oZS55LCB0LnkpLCBpID0gTWF0aC5tYXgoZS54LCB0LngpLCBsID0gTWF0aC5tYXgoZS55LCB0LnkpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IG4sXG5cdFx0dG9wOiByLFxuXHRcdHJpZ2h0OiBpLFxuXHRcdGJvdHRvbTogbCxcblx0XHR3aWR0aDogaSAtIG4sXG5cdFx0aGVpZ2h0OiBsIC0gclxuXHR9O1xufVxudmFyIFRlID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1zZWxlY3Q6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1zZWxlY3Q6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tc2VsZWN0OmVuZFwiLFxuXHRjYW5jZWw6IFwianVuY3Rpb24tc2VsZWN0OmNhbmNlbFwiXG59O1xudmFyIFN0ID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1kcmFnOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tZHJhZzptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1kcmFnOmVuZFwiXG59O1xudmFyIEV0ID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1yZXNpemU6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1yZXNpemU6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tcmVzaXplOmVuZFwiXG59O1xudmFyIEdhID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5EaXNwb3NlcnNcIik7XG52YXIgZXQgPSBnbG9iYWxUaGlzW0dhXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYiA9IChlLCB0LCBuKSA9PiB7XG5cdGNvbnN0IHIgPSBldC5nZXQoZSkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgaSA9IHIuZ2V0KHQpID8/IFtdO1xuXHRpLnB1c2gobiksIHIuc2V0KHQsIGkpLCBldC5zZXQoZSwgcik7XG59O1xudmFyIGFuID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IGV0LmdldChlKSwgciA9IG4/LmdldCh0KTtcblx0aWYgKHIpIHtcblx0XHRmb3IgKGNvbnN0IGkgb2YgcikgdHJ5IHtcblx0XHRcdGkoKTtcblx0XHR9IGNhdGNoIHt9XG5cdFx0bi5kZWxldGUodCksIG4uc2l6ZSA9PT0gMCAmJiBldC5kZWxldGUoZSk7XG5cdH1cbn07XG52YXIgUiA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/LihlKT8uZ2V0UHJvcGVydHlWYWx1ZT8uKHQpPy50cmltPy4oKSA/PyBcIlwiLCByID0gcGFyc2VGbG9hdChuKTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShyKSA/IHIgOiAwO1xufTtcbnZhciBlciA9IChlLCB0LCBuKSA9PiB7XG5cdGNvbnN0IHIgPSBlLmdldEF0dHJpYnV0ZSh0KT8udHJpbSgpO1xuXHRpZiAoIXIpIHJldHVybiBuO1xuXHRjb25zdCBpID0gZS5xdWVyeVNlbGVjdG9yKHIpO1xuXHRyZXR1cm4gaSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gaSA6IG47XG59O1xudmFyIEthID0gY2xhc3MgZXh0ZW5kcyByZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRuLmNsYXNzTmFtZSA9IFwidWktanVuY3Rpb24tc2VsZWN0LW92ZXJsYXlcIiwgbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLW92ZXJsYXlcIiwgXCJcIiksIG4uc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Ojk5OTk7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoxcHggZGFzaGVkIGNvbG9yLW1peChpbiBva2xhYiwgIzM3OTRmZiA3MCUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kOmNvbG9yLW1peChpbiBva2xhYiwgIzM3OTRmZiAxNCUsIHRyYW5zcGFyZW50KTtkaXNwbGF5Om5vbmU7aW5zZXQ6YXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjA7XCIsIGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKHQpPy5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiAmJiAodC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIiksIHQuYXBwZW5kQ2hpbGQobik7XG5cdFx0bGV0IHIgPSAhMSwgaSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fSwgbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRjb25zdCBhID0gKHMpID0+IHtcblx0XHRcdGNvbnN0IGYgPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogcy5jbGllbnRYIC0gZi5sZWZ0LFxuXHRcdFx0XHR5OiBzLmNsaWVudFkgLSBmLnRvcFxuXHRcdFx0fTtcblx0XHR9LCBvID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgcyA9IHd0KGksIGwpO1xuXHRcdFx0aWYgKHMud2lkdGggPCAxICYmIHMuaGVpZ2h0IDwgMSkge1xuXHRcdFx0XHRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiLCBuLnN0eWxlLmxlZnQgPSBgJHtzLmxlZnR9cHhgLCBuLnN0eWxlLnRvcCA9IGAke3MudG9wfXB4YCwgbi5zdHlsZS53aWR0aCA9IGAke3Mud2lkdGh9cHhgLCBuLnN0eWxlLmhlaWdodCA9IGAke3MuaGVpZ2h0fXB4YDtcblx0XHR9LCBkID0gKHMpID0+IHtcblx0XHRcdHMuYnV0dG9uID09PSAwICYmIChzLnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtanVuY3Rpb24taWdub3JlLXNlbGVjdF0sIFtkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXSwgW2RhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZV0sIGJ1dHRvbiwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikgfHwgKHMudGFyZ2V0ID09PSB0IHx8IHQuY29udGFpbnMocy50YXJnZXQpKSAmJiAociA9ICEwLCBpID0gYShzKSwgbCA9IHsgLi4uaSB9LCB0LnNldFBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChUZS5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5pIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5sIH0sXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSksIG8oKSkpO1xuXHRcdH0sIGMgPSAocykgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRsID0gYShzKSwgbygpO1xuXHRcdFx0Y29uc3QgZiA9IHd0KGksIGwpO1xuXHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChUZS5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmkgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRib3g6IGYsXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgcCA9IChzKSA9PiB7XG5cdFx0XHRpZiAoIXIpIHJldHVybjtcblx0XHRcdHIgPSAhMTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGNvbnN0IGYgPSB3dChpLCBsKTtcblx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoVGUuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmkgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRib3g6IGYsXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgaCA9IChzKSA9PiB7XG5cdFx0XHRyICYmIHAocyk7XG5cdFx0fSwgdSA9IChzKSA9PiB7XG5cdFx0XHRpZiAocikge1xuXHRcdFx0XHRyID0gITEsIG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFRlLmNhbmNlbCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDogeyBob3N0OiB0IH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIGIodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgKCkgPT4ge1xuXHRcdFx0bi5yZW1vdmUoKTtcblx0XHR9KSwgYih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCB2KHQsIFwicG9pbnRlcmRvd25cIiwgZCkpLCBiKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIHYodCwgXCJwb2ludGVybW92ZVwiLCBjKSksIGIodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgdih0LCBcInBvaW50ZXJ1cFwiLCBoKSksIGIodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgdih0LCBcInBvaW50ZXJjYW5jZWxcIiwgdSkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgYW4odCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiksIHRoaXM7XG5cdH1cbn07XG52YXIgUWEgPSBjbGFzcyBleHRlbmRzIHJlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRUKHQsIFwiLS1qeC1kcmFnLXhcIiwgUih0LCBcIi0tangtZHJhZy14XCIpKSwgVCh0LCBcIi0tangtZHJhZy15XCIsIFIodCwgXCItLWp4LWRyYWcteVwiKSk7XG5cdFx0Y29uc3QgbiA9IHQuc3R5bGUudHJhbnNmb3JtO1xuXHRcdCghdC5zdHlsZS50cmFuc2Zvcm0gfHwgdC5zdHlsZS50cmFuc2Zvcm0gPT09IFwibm9uZVwiKSAmJiAodC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tangtZHJhZy14LCAwKSAqIDFweCksIGNhbGModmFyKC0tangtZHJhZy15LCAwKSAqIDFweCksIDApXCIpO1xuXHRcdGNvbnN0IHIgPSBlcih0LCBcImRhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVcIiwgdCk7XG5cdFx0bGV0IGkgPSAhMSwgbCA9IDAsIGEgPSAwLCBvID0gMCwgZCA9IDA7XG5cdFx0Y29uc3QgYyA9ICh1KSA9PiB7XG5cdFx0XHR1LmJ1dHRvbiA9PT0gMCAmJiAodS50YXJnZXQgIT09IHIgJiYgIXIuY29udGFpbnModS50YXJnZXQpIHx8IChpID0gITAsIGwgPSB1LmNsaWVudFgsIGEgPSB1LmNsaWVudFksIG8gPSBSKHQsIFwiLS1qeC1kcmFnLXhcIiksIGQgPSBSKHQsIFwiLS1qeC1kcmFnLXlcIiksIHIuc2V0UG9pbnRlckNhcHR1cmUodS5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFN0LnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGNsaWVudFg6IHUuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiB1LmNsaWVudFksXG5cdFx0XHRcdFx0YmFzZVg6IG8sXG5cdFx0XHRcdFx0YmFzZVk6IGRcblx0XHRcdFx0fVxuXHRcdFx0fSkpKSk7XG5cdFx0fSwgcCA9ICh1KSA9PiB7XG5cdFx0XHRpZiAoIWkpIHJldHVybjtcblx0XHRcdGNvbnN0IHMgPSB1LmNsaWVudFggLSBsLCBmID0gdS5jbGllbnRZIC0gYSwgbSA9IG8gKyBzLCBnID0gZCArIGY7XG5cdFx0XHRUKHQsIFwiLS1qeC1kcmFnLXhcIiwgbSksIFQodCwgXCItLWp4LWRyYWcteVwiLCBnKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChTdC5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGR4OiBzLFxuXHRcdFx0XHRcdGR5OiBmLFxuXHRcdFx0XHRcdHg6IG0sXG5cdFx0XHRcdFx0eTogZ1xuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgaCA9ICh1KSA9PiB7XG5cdFx0XHRpZiAoaSkge1xuXHRcdFx0XHRpID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ci5yZWxlYXNlUG9pbnRlckNhcHR1cmUodS5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoU3QuZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0eDogUih0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdFx0eTogUih0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gYih0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0dC5zdHlsZS50cmFuc2Zvcm0gPSBuO1xuXHRcdH0pLCBiKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcmRvd25cIiwgYykpLCBiKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcm1vdmVcIiwgcCkpLCBiKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCB2KHIsIFwicG9pbnRlcnVwXCIsIGgpKSwgYih0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgdihyLCBcInBvaW50ZXJjYW5jZWxcIiwgaCkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgYW4odCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpLCB0aGlzO1xuXHR9XG59O1xudmFyIGVvID0gY2xhc3MgZXh0ZW5kcyByZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBuID0gZXIodCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgdCk7XG5cdFx0bGV0IHIgPSAhMSwgaSA9IDAsIGwgPSAwLCBhID0gMCwgbyA9IDA7XG5cdFx0Y29uc3QgZCA9IE1hdGgubWF4KDEyMCwgcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi13XCIpIHx8IFwiXCIpIHx8IDEyMCksIGMgPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKSwgcCA9IChzKSA9PiB7XG5cdFx0XHRzLmJ1dHRvbiA9PT0gMCAmJiAocy50YXJnZXQgIT09IG4gJiYgIW4uY29udGFpbnMocy50YXJnZXQpIHx8IChyID0gITAsIGkgPSBzLmNsaWVudFgsIGwgPSBzLmNsaWVudFksIGEgPSB0Lm9mZnNldFdpZHRoLCBvID0gdC5vZmZzZXRIZWlnaHQsIG4uc2V0UG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEV0LnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdHdpZHRoOiBhLFxuXHRcdFx0XHRcdGhlaWdodDogb1xuXHRcdFx0XHR9XG5cdFx0XHR9KSkpKTtcblx0XHR9LCBoID0gKHMpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0Y29uc3QgZiA9IE1hdGgubWF4KGQsIGEgKyAocy5jbGllbnRYIC0gaSkpLCBtID0gTWF0aC5tYXgoYywgbyArIChzLmNsaWVudFkgLSBsKSk7XG5cdFx0XHR0LnN0eWxlLndpZHRoID0gYCR7Zn1weGAsIHQuc3R5bGUuaGVpZ2h0ID0gYCR7bX1weGAsIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoRXQubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHR3aWR0aDogZixcblx0XHRcdFx0XHRoZWlnaHQ6IG1cblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIHUgPSAocykgPT4ge1xuXHRcdFx0aWYgKHIpIHtcblx0XHRcdFx0ciA9ICExO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG4ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEV0LmVuZCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRcdHdpZHRoOiB0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiB0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIGIodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgdihuLCBcInBvaW50ZXJkb3duXCIsIHApKSwgYih0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCB2KG4sIFwicG9pbnRlcm1vdmVcIiwgaCkpLCBiKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHYobiwgXCJwb2ludGVydXBcIiwgdSkpLCBiKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIHYobiwgXCJwb2ludGVyY2FuY2VsXCIsIHUpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIGFuKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIpLCB0aGlzO1xuXHR9XG59O1xubmV3IEthKCk7XG5uZXcgUWEoKTtcbm5ldyBlbygpO1xuZnVuY3Rpb24ganQoZSwgdCkge1xuXHRjb25zdCBuID0gTWF0aC5taW4oZS54LCB0LngpLCByID0gTWF0aC5taW4oZS55LCB0LnkpLCBpID0gTWF0aC5tYXgoZS54LCB0LngpLCBsID0gTWF0aC5tYXgoZS55LCB0LnkpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IG4sXG5cdFx0dG9wOiByLFxuXHRcdHJpZ2h0OiBpLFxuXHRcdGJvdHRvbTogbCxcblx0XHR3aWR0aDogaSAtIG4sXG5cdFx0aGVpZ2h0OiBsIC0gclxuXHR9O1xufVxudmFyIE5lID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1zZWxlY3Q6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1zZWxlY3Q6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tc2VsZWN0OmVuZFwiLFxuXHRjYW5jZWw6IFwianVuY3Rpb24tc2VsZWN0OmNhbmNlbFwiXG59O1xudmFyIE10ID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1kcmFnOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tZHJhZzptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1kcmFnOmVuZFwiXG59O1xudmFyIEN0ID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1yZXNpemU6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1yZXNpemU6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tcmVzaXplOmVuZFwiXG59O1xudmFyIHRvID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5EaXNwb3NlcnNcIik7XG52YXIgdHQgPSBnbG9iYWxUaGlzW3RvXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgeCA9IChlLCB0LCBuKSA9PiB7XG5cdGNvbnN0IHIgPSB0dC5nZXQoZSkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgaSA9IHIuZ2V0KHQpID8/IFtdO1xuXHRpLnB1c2gobiksIHIuc2V0KHQsIGkpLCB0dC5zZXQoZSwgcik7XG59O1xudmFyIG9uID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IHR0LmdldChlKSwgciA9IG4/LmdldCh0KTtcblx0aWYgKHIpIHtcblx0XHRmb3IgKGNvbnN0IGkgb2YgcikgdHJ5IHtcblx0XHRcdGkoKTtcblx0XHR9IGNhdGNoIHt9XG5cdFx0bi5kZWxldGUodCksIG4uc2l6ZSA9PT0gMCAmJiB0dC5kZWxldGUoZSk7XG5cdH1cbn07XG52YXIgJCA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/LihlKT8uZ2V0UHJvcGVydHlWYWx1ZT8uKHQpPy50cmltPy4oKSA/PyBcIlwiLCByID0gcGFyc2VGbG9hdChuKTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShyKSA/IHIgOiAwO1xufTtcbnZhciB0ciA9IChlLCB0LCBuKSA9PiB7XG5cdGNvbnN0IHIgPSBlLmdldEF0dHJpYnV0ZSh0KT8udHJpbSgpO1xuXHRpZiAoIXIpIHJldHVybiBuO1xuXHRjb25zdCBpID0gZS5xdWVyeVNlbGVjdG9yKHIpO1xuXHRyZXR1cm4gaSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gaSA6IG47XG59O1xudmFyIG5vID0gY2xhc3MgZXh0ZW5kcyBubiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRuLmNsYXNzTmFtZSA9IFwidWktanVuY3Rpb24tc2VsZWN0LW92ZXJsYXlcIiwgbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLW92ZXJsYXlcIiwgXCJcIiksIG4uc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Ojk5OTk7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoxcHggZGFzaGVkIGNvbG9yLW1peChpbiBva2xhYiwgIzM3OTRmZiA3MCUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kOmNvbG9yLW1peChpbiBva2xhYiwgIzM3OTRmZiAxNCUsIHRyYW5zcGFyZW50KTtkaXNwbGF5Om5vbmU7aW5zZXQ6YXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjA7XCIsIGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKHQpPy5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiAmJiAodC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIiksIHQuYXBwZW5kQ2hpbGQobik7XG5cdFx0bGV0IHIgPSAhMSwgaSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fSwgbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRjb25zdCBhID0gKHMpID0+IHtcblx0XHRcdGNvbnN0IGYgPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogcy5jbGllbnRYIC0gZi5sZWZ0LFxuXHRcdFx0XHR5OiBzLmNsaWVudFkgLSBmLnRvcFxuXHRcdFx0fTtcblx0XHR9LCBvID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgcyA9IGp0KGksIGwpO1xuXHRcdFx0aWYgKHMud2lkdGggPCAxICYmIHMuaGVpZ2h0IDwgMSkge1xuXHRcdFx0XHRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiLCBuLnN0eWxlLmxlZnQgPSBgJHtzLmxlZnR9cHhgLCBuLnN0eWxlLnRvcCA9IGAke3MudG9wfXB4YCwgbi5zdHlsZS53aWR0aCA9IGAke3Mud2lkdGh9cHhgLCBuLnN0eWxlLmhlaWdodCA9IGAke3MuaGVpZ2h0fXB4YDtcblx0XHR9LCBkID0gKHMpID0+IHtcblx0XHRcdHMuYnV0dG9uID09PSAwICYmIChzLnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtanVuY3Rpb24taWdub3JlLXNlbGVjdF0sIFtkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXSwgW2RhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZV0sIGJ1dHRvbiwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikgfHwgKHMudGFyZ2V0ID09PSB0IHx8IHQuY29udGFpbnMocy50YXJnZXQpKSAmJiAociA9ICEwLCBpID0gYShzKSwgbCA9IHsgLi4uaSB9LCB0LnNldFBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChOZS5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5pIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5sIH0sXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSksIG8oKSkpO1xuXHRcdH0sIGMgPSAocykgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRsID0gYShzKSwgbygpO1xuXHRcdFx0Y29uc3QgZiA9IGp0KGksIGwpO1xuXHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChOZS5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmkgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRib3g6IGYsXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgcCA9IChzKSA9PiB7XG5cdFx0XHRpZiAoIXIpIHJldHVybjtcblx0XHRcdHIgPSAhMTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGNvbnN0IGYgPSBqdChpLCBsKTtcblx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoTmUuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmkgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRib3g6IGYsXG5cdFx0XHRcdFx0aG9zdDogdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgaCA9IChzKSA9PiB7XG5cdFx0XHRyICYmIHAocyk7XG5cdFx0fSwgdSA9IChzKSA9PiB7XG5cdFx0XHRpZiAocikge1xuXHRcdFx0XHRyID0gITEsIG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KE5lLmNhbmNlbCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDogeyBob3N0OiB0IH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIHgodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgKCkgPT4ge1xuXHRcdFx0bi5yZW1vdmUoKTtcblx0XHR9KSwgeCh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBWKHQsIFwicG9pbnRlcmRvd25cIiwgZCkpLCB4KHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIFYodCwgXCJwb2ludGVybW92ZVwiLCBjKSksIHgodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgVih0LCBcInBvaW50ZXJ1cFwiLCBoKSksIHgodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgVih0LCBcInBvaW50ZXJjYW5jZWxcIiwgdSkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgb24odCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiksIHRoaXM7XG5cdH1cbn07XG52YXIgcm8gPSBjbGFzcyBleHRlbmRzIG5uIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRMZSh0LCBcIi0tangtZHJhZy14XCIsICQodCwgXCItLWp4LWRyYWcteFwiKSksIExlKHQsIFwiLS1qeC1kcmFnLXlcIiwgJCh0LCBcIi0tangtZHJhZy15XCIpKTtcblx0XHRjb25zdCBuID0gdC5zdHlsZS50cmFuc2Zvcm07XG5cdFx0KCF0LnN0eWxlLnRyYW5zZm9ybSB8fCB0LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJub25lXCIpICYmICh0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoY2FsYyh2YXIoLS1qeC1kcmFnLXgsIDApICogMXB4KSwgY2FsYyh2YXIoLS1qeC1kcmFnLXksIDApICogMXB4KSwgMClcIik7XG5cdFx0Y29uc3QgciA9IHRyKHQsIFwiZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZVwiLCB0KTtcblx0XHRsZXQgaSA9ICExLCBsID0gMCwgYSA9IDAsIG8gPSAwLCBkID0gMDtcblx0XHRjb25zdCBjID0gKHUpID0+IHtcblx0XHRcdHUuYnV0dG9uID09PSAwICYmICh1LnRhcmdldCAhPT0gciAmJiAhci5jb250YWlucyh1LnRhcmdldCkgfHwgKGkgPSAhMCwgbCA9IHUuY2xpZW50WCwgYSA9IHUuY2xpZW50WSwgbyA9ICQodCwgXCItLWp4LWRyYWcteFwiKSwgZCA9ICQodCwgXCItLWp4LWRyYWcteVwiKSwgci5zZXRQb2ludGVyQ2FwdHVyZSh1LnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoTXQuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0Y2xpZW50WDogdS5jbGllbnRYLFxuXHRcdFx0XHRcdGNsaWVudFk6IHUuY2xpZW50WSxcblx0XHRcdFx0XHRiYXNlWDogbyxcblx0XHRcdFx0XHRiYXNlWTogZFxuXHRcdFx0XHR9XG5cdFx0XHR9KSkpKTtcblx0XHR9LCBwID0gKHUpID0+IHtcblx0XHRcdGlmICghaSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgcyA9IHUuY2xpZW50WCAtIGwsIGYgPSB1LmNsaWVudFkgLSBhLCBtID0gbyArIHMsIGcgPSBkICsgZjtcblx0XHRcdExlKHQsIFwiLS1qeC1kcmFnLXhcIiwgbSksIExlKHQsIFwiLS1qeC1kcmFnLXlcIiwgZyksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoTXQubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRkeDogcyxcblx0XHRcdFx0XHRkeTogZixcblx0XHRcdFx0XHR4OiBtLFxuXHRcdFx0XHRcdHk6IGdcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIGggPSAodSkgPT4ge1xuXHRcdFx0aWYgKGkpIHtcblx0XHRcdFx0aSA9ICExO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHIucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHUucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KE10LmVuZCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRcdHg6ICQodCwgXCItLWp4LWRyYWcteFwiKSxcblx0XHRcdFx0XHRcdHk6ICQodCwgXCItLWp4LWRyYWcteVwiKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIHgodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsICgpID0+IHtcblx0XHRcdHQuc3R5bGUudHJhbnNmb3JtID0gbjtcblx0XHR9KSwgeCh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgVihyLCBcInBvaW50ZXJkb3duXCIsIGMpKSwgeCh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgVihyLCBcInBvaW50ZXJtb3ZlXCIsIHApKSwgeCh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgVihyLCBcInBvaW50ZXJ1cFwiLCBoKSksIHgodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIFYociwgXCJwb2ludGVyY2FuY2VsXCIsIGgpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIG9uKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiKSwgdGhpcztcblx0fVxufTtcbnZhciBpbyA9IGNsYXNzIGV4dGVuZHMgbm4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0fVxuXHRjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdGlmICghdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgbiA9IHRyKHQsIFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXCIsIHQpO1xuXHRcdGxldCByID0gITEsIGkgPSAwLCBsID0gMCwgYSA9IDAsIG8gPSAwO1xuXHRcdGNvbnN0IGQgPSBNYXRoLm1heCgxMjAsIHBhcnNlRmxvYXQodC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4td1wiKSB8fCBcIlwiKSB8fCAxMjApLCBjID0gTWF0aC5tYXgoODAsIHBhcnNlRmxvYXQodC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4taFwiKSB8fCBcIlwiKSB8fCA4MCksIHAgPSAocykgPT4ge1xuXHRcdFx0cy5idXR0b24gPT09IDAgJiYgKHMudGFyZ2V0ICE9PSBuICYmICFuLmNvbnRhaW5zKHMudGFyZ2V0KSB8fCAociA9ICEwLCBpID0gcy5jbGllbnRYLCBsID0gcy5jbGllbnRZLCBhID0gdC5vZmZzZXRXaWR0aCwgbyA9IHQub2Zmc2V0SGVpZ2h0LCBuLnNldFBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChDdC5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHR3aWR0aDogYSxcblx0XHRcdFx0XHRoZWlnaHQ6IG9cblx0XHRcdFx0fVxuXHRcdFx0fSkpKSk7XG5cdFx0fSwgaCA9IChzKSA9PiB7XG5cdFx0XHRpZiAoIXIpIHJldHVybjtcblx0XHRcdGNvbnN0IGYgPSBNYXRoLm1heChkLCBhICsgKHMuY2xpZW50WCAtIGkpKSwgbSA9IE1hdGgubWF4KGMsIG8gKyAocy5jbGllbnRZIC0gbCkpO1xuXHRcdFx0dC5zdHlsZS53aWR0aCA9IGAke2Z9cHhgLCB0LnN0eWxlLmhlaWdodCA9IGAke219cHhgLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEN0Lm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0d2lkdGg6IGYsXG5cdFx0XHRcdFx0aGVpZ2h0OiBtXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCB1ID0gKHMpID0+IHtcblx0XHRcdGlmIChyKSB7XG5cdFx0XHRcdHIgPSAhMTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRuLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCk7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChDdC5lbmQsIHtcblx0XHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0XHR3aWR0aDogdC5vZmZzZXRXaWR0aCxcblx0XHRcdFx0XHRcdGhlaWdodDogdC5vZmZzZXRIZWlnaHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiB4KHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIFYobiwgXCJwb2ludGVyZG93blwiLCBwKSksIHgodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgVihuLCBcInBvaW50ZXJtb3ZlXCIsIGgpKSwgeCh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBWKG4sIFwicG9pbnRlcnVwXCIsIHUpKSwgeCh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBWKG4sIFwicG9pbnRlcmNhbmNlbFwiLCB1KSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiBvbih0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKSwgdGhpcztcblx0fVxufTtcbm5ldyBubygpO1xubmV3IHJvKCk7XG5uZXcgaW8oKTtcbmZ1bmN0aW9uIFZ0KGUsIHQpIHtcblx0Y29uc3QgbiA9IE1hdGgubWluKGUueCwgdC54KSwgciA9IE1hdGgubWluKGUueSwgdC55KSwgaSA9IE1hdGgubWF4KGUueCwgdC54KSwgbCA9IE1hdGgubWF4KGUueSwgdC55KTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0OiBuLFxuXHRcdHRvcDogcixcblx0XHRyaWdodDogaSxcblx0XHRib3R0b206IGwsXG5cdFx0d2lkdGg6IGkgLSBuLFxuXHRcdGhlaWdodDogbCAtIHJcblx0fTtcbn1cbnZhciBrZSA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tc2VsZWN0OnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tc2VsZWN0Om1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXNlbGVjdDplbmRcIixcblx0Y2FuY2VsOiBcImp1bmN0aW9uLXNlbGVjdDpjYW5jZWxcIlxufTtcbnZhciBBdCA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tZHJhZzpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLWRyYWc6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tZHJhZzplbmRcIlxufTtcbnZhciBMdCA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tcmVzaXplOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tcmVzaXplOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXJlc2l6ZTplbmRcIlxufTtcbnZhciBhbyA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRGlzcG9zZXJzXCIpO1xudmFyIG50ID0gZ2xvYmFsVGhpc1thb10gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHcgPSAoZSwgdCwgbikgPT4ge1xuXHRjb25zdCByID0gbnQuZ2V0KGUpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIGkgPSByLmdldCh0KSA/PyBbXTtcblx0aS5wdXNoKG4pLCByLnNldCh0LCBpKSwgbnQuc2V0KGUsIHIpO1xufTtcbnZhciBzbiA9IChlLCB0KSA9PiB7XG5cdGNvbnN0IG4gPSBudC5nZXQoZSksIHIgPSBuPy5nZXQodCk7XG5cdGlmIChyKSB7XG5cdFx0Zm9yIChjb25zdCBpIG9mIHIpIHRyeSB7XG5cdFx0XHRpKCk7XG5cdFx0fSBjYXRjaCB7fVxuXHRcdG4uZGVsZXRlKHQpLCBuLnNpemUgPT09IDAgJiYgbnQuZGVsZXRlKGUpO1xuXHR9XG59O1xudmFyIEYgPSAoZSwgdCkgPT4ge1xuXHRjb25zdCBuID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oZSk/LmdldFByb3BlcnR5VmFsdWU/Lih0KT8udHJpbT8uKCkgPz8gXCJcIiwgciA9IHBhcnNlRmxvYXQobik7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUocikgPyByIDogMDtcbn07XG52YXIgbnIgPSAoZSwgdCwgbikgPT4ge1xuXHRjb25zdCByID0gZS5nZXRBdHRyaWJ1dGUodCk/LnRyaW0oKTtcblx0aWYgKCFyKSByZXR1cm4gbjtcblx0Y29uc3QgaSA9IGUucXVlcnlTZWxlY3RvcihyKTtcblx0cmV0dXJuIGkgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGkgOiBuO1xufTtcbnZhciBvbyA9IGNsYXNzIGV4dGVuZHMgdG4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0fVxuXHRjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdGlmICghdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bi5jbGFzc05hbWUgPSBcInVpLWp1bmN0aW9uLXNlbGVjdC1vdmVybGF5XCIsIG4uc2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1vdmVybGF5XCIsIFwiXCIpLCBuLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDo5OTk5O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IGRhc2hlZCBjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgNzAlLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZDpjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgMTQlLCB0cmFuc3BhcmVudCk7ZGlzcGxheTpub25lO2luc2V0OmF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowO1wiLCBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lih0KT8ucG9zaXRpb24gPT09IFwic3RhdGljXCIgJiYgKHQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCIpLCB0LmFwcGVuZENoaWxkKG4pO1xuXHRcdGxldCByID0gITEsIGkgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH0sIGwgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0Y29uc3QgYSA9IChzKSA9PiB7XG5cdFx0XHRjb25zdCBmID0gdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IHMuY2xpZW50WCAtIGYubGVmdCxcblx0XHRcdFx0eTogcy5jbGllbnRZIC0gZi50b3Bcblx0XHRcdH07XG5cdFx0fSwgbyA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHMgPSBWdChpLCBsKTtcblx0XHRcdGlmIChzLndpZHRoIDwgMSAmJiBzLmhlaWdodCA8IDEpIHtcblx0XHRcdFx0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiwgbi5zdHlsZS5sZWZ0ID0gYCR7cy5sZWZ0fXB4YCwgbi5zdHlsZS50b3AgPSBgJHtzLnRvcH1weGAsIG4uc3R5bGUud2lkdGggPSBgJHtzLndpZHRofXB4YCwgbi5zdHlsZS5oZWlnaHQgPSBgJHtzLmhlaWdodH1weGA7XG5cdFx0fSwgZCA9IChzKSA9PiB7XG5cdFx0XHRzLmJ1dHRvbiA9PT0gMCAmJiAocy50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLWp1bmN0aW9uLWlnbm9yZS1zZWxlY3RdLCBbZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZV0sIFtkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVdLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpIHx8IChzLnRhcmdldCA9PT0gdCB8fCB0LmNvbnRhaW5zKHMudGFyZ2V0KSkgJiYgKHIgPSAhMCwgaSA9IGEocyksIGwgPSB7IC4uLmkgfSwgdC5zZXRQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoa2Uuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uaSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4ubCB9LFxuXHRcdFx0XHRcdGhvc3Q6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpLCBvKCkpKTtcblx0XHR9LCBjID0gKHMpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0bCA9IGEocyksIG8oKTtcblx0XHRcdGNvbnN0IGYgPSBWdChpLCBsKTtcblx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoa2UubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5pIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5sIH0sXG5cdFx0XHRcdFx0Ym94OiBmLFxuXHRcdFx0XHRcdGhvc3Q6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIHAgPSAocykgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRyID0gITE7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRjb25zdCBmID0gVnQoaSwgbCk7XG5cdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGtlLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5pIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5sIH0sXG5cdFx0XHRcdFx0Ym94OiBmLFxuXHRcdFx0XHRcdGhvc3Q6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIGggPSAocykgPT4ge1xuXHRcdFx0ciAmJiBwKHMpO1xuXHRcdH0sIHUgPSAocykgPT4ge1xuXHRcdFx0aWYgKHIpIHtcblx0XHRcdFx0ciA9ICExLCBuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCk7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChrZS5jYW5jZWwsIHtcblx0XHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0XHRkZXRhaWw6IHsgaG9zdDogdCB9XG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiB3KHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsICgpID0+IHtcblx0XHRcdG4ucmVtb3ZlKCk7XG5cdFx0fSksIHcodCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgQyh0LCBcInBvaW50ZXJkb3duXCIsIGQpKSwgdyh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBDKHQsIFwicG9pbnRlcm1vdmVcIiwgYykpLCB3KHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIEModCwgXCJwb2ludGVydXBcIiwgaCkpLCB3KHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIEModCwgXCJwb2ludGVyY2FuY2VsXCIsIHUpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIHNuKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIpLCB0aGlzO1xuXHR9XG59O1xudmFyIHNvID0gY2xhc3MgZXh0ZW5kcyB0biB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0fVxuXHRjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdGlmICghdCkgcmV0dXJuIHRoaXM7XG5cdFx0QWUodCwgXCItLWp4LWRyYWcteFwiLCBGKHQsIFwiLS1qeC1kcmFnLXhcIikpLCBBZSh0LCBcIi0tangtZHJhZy15XCIsIEYodCwgXCItLWp4LWRyYWcteVwiKSk7XG5cdFx0Y29uc3QgbiA9IHQuc3R5bGUudHJhbnNmb3JtO1xuXHRcdCghdC5zdHlsZS50cmFuc2Zvcm0gfHwgdC5zdHlsZS50cmFuc2Zvcm0gPT09IFwibm9uZVwiKSAmJiAodC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tangtZHJhZy14LCAwKSAqIDFweCksIGNhbGModmFyKC0tangtZHJhZy15LCAwKSAqIDFweCksIDApXCIpO1xuXHRcdGNvbnN0IHIgPSBucih0LCBcImRhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVcIiwgdCk7XG5cdFx0bGV0IGkgPSAhMSwgbCA9IDAsIGEgPSAwLCBvID0gMCwgZCA9IDA7XG5cdFx0Y29uc3QgYyA9ICh1KSA9PiB7XG5cdFx0XHR1LmJ1dHRvbiA9PT0gMCAmJiAodS50YXJnZXQgIT09IHIgJiYgIXIuY29udGFpbnModS50YXJnZXQpIHx8IChpID0gITAsIGwgPSB1LmNsaWVudFgsIGEgPSB1LmNsaWVudFksIG8gPSBGKHQsIFwiLS1qeC1kcmFnLXhcIiksIGQgPSBGKHQsIFwiLS1qeC1kcmFnLXlcIiksIHIuc2V0UG9pbnRlckNhcHR1cmUodS5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEF0LnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGNsaWVudFg6IHUuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiB1LmNsaWVudFksXG5cdFx0XHRcdFx0YmFzZVg6IG8sXG5cdFx0XHRcdFx0YmFzZVk6IGRcblx0XHRcdFx0fVxuXHRcdFx0fSkpKSk7XG5cdFx0fSwgcCA9ICh1KSA9PiB7XG5cdFx0XHRpZiAoIWkpIHJldHVybjtcblx0XHRcdGNvbnN0IHMgPSB1LmNsaWVudFggLSBsLCBmID0gdS5jbGllbnRZIC0gYSwgbSA9IG8gKyBzLCBnID0gZCArIGY7XG5cdFx0XHRBZSh0LCBcIi0tangtZHJhZy14XCIsIG0pLCBBZSh0LCBcIi0tangtZHJhZy15XCIsIGcpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEF0Lm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0ZHg6IHMsXG5cdFx0XHRcdFx0ZHk6IGYsXG5cdFx0XHRcdFx0eDogbSxcblx0XHRcdFx0XHR5OiBnXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBoID0gKHUpID0+IHtcblx0XHRcdGlmIChpKSB7XG5cdFx0XHRcdGkgPSAhMTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyLnJlbGVhc2VQb2ludGVyQ2FwdHVyZSh1LnBvaW50ZXJJZCk7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChBdC5lbmQsIHtcblx0XHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0XHR4OiBGKHQsIFwiLS1qeC1kcmFnLXhcIiksXG5cdFx0XHRcdFx0XHR5OiBGKHQsIFwiLS1qeC1kcmFnLXlcIilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiB3KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCAoKSA9PiB7XG5cdFx0XHR0LnN0eWxlLnRyYW5zZm9ybSA9IG47XG5cdFx0fSksIHcodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIEMociwgXCJwb2ludGVyZG93blwiLCBjKSksIHcodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIEMociwgXCJwb2ludGVybW92ZVwiLCBwKSksIHcodCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIEMociwgXCJwb2ludGVydXBcIiwgaCkpLCB3KHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBDKHIsIFwicG9pbnRlcmNhbmNlbFwiLCBoKSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiBzbih0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiksIHRoaXM7XG5cdH1cbn07XG52YXIgbG8gPSBjbGFzcyBleHRlbmRzIHRuIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG4gPSBucih0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCB0KTtcblx0XHRsZXQgciA9ICExLCBpID0gMCwgbCA9IDAsIGEgPSAwLCBvID0gMDtcblx0XHRjb25zdCBkID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKSwgYyA9IE1hdGgubWF4KDgwLCBwYXJzZUZsb2F0KHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLWhcIikgfHwgXCJcIikgfHwgODApLCBwID0gKHMpID0+IHtcblx0XHRcdHMuYnV0dG9uID09PSAwICYmIChzLnRhcmdldCAhPT0gbiAmJiAhbi5jb250YWlucyhzLnRhcmdldCkgfHwgKHIgPSAhMCwgaSA9IHMuY2xpZW50WCwgbCA9IHMuY2xpZW50WSwgYSA9IHQub2Zmc2V0V2lkdGgsIG8gPSB0Lm9mZnNldEhlaWdodCwgbi5zZXRQb2ludGVyQ2FwdHVyZShzLnBvaW50ZXJJZCksIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoTHQuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3Q6IHQsXG5cdFx0XHRcdFx0d2lkdGg6IGEsXG5cdFx0XHRcdFx0aGVpZ2h0OiBvXG5cdFx0XHRcdH1cblx0XHRcdH0pKSkpO1xuXHRcdH0sIGggPSAocykgPT4ge1xuXHRcdFx0aWYgKCFyKSByZXR1cm47XG5cdFx0XHRjb25zdCBmID0gTWF0aC5tYXgoZCwgYSArIChzLmNsaWVudFggLSBpKSksIG0gPSBNYXRoLm1heChjLCBvICsgKHMuY2xpZW50WSAtIGwpKTtcblx0XHRcdHQuc3R5bGUud2lkdGggPSBgJHtmfXB4YCwgdC5zdHlsZS5oZWlnaHQgPSBgJHttfXB4YCwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChMdC5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdHdpZHRoOiBmLFxuXHRcdFx0XHRcdGhlaWdodDogbVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgdSA9IChzKSA9PiB7XG5cdFx0XHRpZiAocikge1xuXHRcdFx0XHRyID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0bi5yZWxlYXNlUG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoTHQuZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0d2lkdGg6IHQub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IHQub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gdyh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBDKG4sIFwicG9pbnRlcmRvd25cIiwgcCkpLCB3KHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIEMobiwgXCJwb2ludGVybW92ZVwiLCBoKSksIHcodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgQyhuLCBcInBvaW50ZXJ1cFwiLCB1KSksIHcodCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgQyhuLCBcInBvaW50ZXJjYW5jZWxcIiwgdSkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgc24odCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiksIHRoaXM7XG5cdH1cbn07XG5uZXcgb28oKTtcbm5ldyBzbygpO1xubmV3IGxvKCk7XG5mdW5jdGlvbiB6dChlLCB0KSB7XG5cdGNvbnN0IG4gPSBNYXRoLm1pbihlLngsIHQueCksIHIgPSBNYXRoLm1pbihlLnksIHQueSksIGkgPSBNYXRoLm1heChlLngsIHQueCksIGwgPSBNYXRoLm1heChlLnksIHQueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdDogbixcblx0XHR0b3A6IHIsXG5cdFx0cmlnaHQ6IGksXG5cdFx0Ym90dG9tOiBsLFxuXHRcdHdpZHRoOiBpIC0gbixcblx0XHRoZWlnaHQ6IGwgLSByXG5cdH07XG59XG52YXIgUGUgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgVHQgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgTnQgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG52YXIgdW8gPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBydCA9IGdsb2JhbFRoaXNbdW9dID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBTID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IHJ0LmdldChlKSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBpID0gci5nZXQodCkgPz8gW107XG5cdGkucHVzaChuKSwgci5zZXQodCwgaSksIHJ0LnNldChlLCByKTtcbn07XG52YXIgbG4gPSAoZSwgdCkgPT4ge1xuXHRjb25zdCBuID0gcnQuZ2V0KGUpLCByID0gbj8uZ2V0KHQpO1xuXHRpZiAocikge1xuXHRcdGZvciAoY29uc3QgaSBvZiByKSB0cnkge1xuXHRcdFx0aSgpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRuLmRlbGV0ZSh0KSwgbi5zaXplID09PSAwICYmIHJ0LmRlbGV0ZShlKTtcblx0fVxufTtcbnZhciBPID0gKGUsIHQpID0+IHtcblx0Y29uc3QgbiA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGUpPy5nZXRQcm9wZXJ0eVZhbHVlPy4odCk/LnRyaW0/LigpID8/IFwiXCIsIHIgPSBwYXJzZUZsb2F0KG4pO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKHIpID8gciA6IDA7XG59O1xudmFyIHJyID0gKGUsIHQsIG4pID0+IHtcblx0Y29uc3QgciA9IGUuZ2V0QXR0cmlidXRlKHQpPy50cmltKCk7XG5cdGlmICghcikgcmV0dXJuIG47XG5cdGNvbnN0IGkgPSBlLnF1ZXJ5U2VsZWN0b3Iocik7XG5cdHJldHVybiBpIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpIDogbjtcbn07XG52YXIgY28gPSBjbGFzcyBleHRlbmRzIGVuIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG4uY2xhc3NOYW1lID0gXCJ1aS1qdW5jdGlvbi1zZWxlY3Qtb3ZlcmxheVwiLCBuLnNldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tb3ZlcmxheVwiLCBcIlwiKSwgbi5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6OTk5OTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCAjMzc5NGZmIDE0JSwgdHJhbnNwYXJlbnQpO2Rpc3BsYXk6bm9uZTtpbnNldDphdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtcIiwgZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4odCk/LnBvc2l0aW9uID09PSBcInN0YXRpY1wiICYmICh0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiKSwgdC5hcHBlbmRDaGlsZChuKTtcblx0XHRsZXQgaSA9ICExLCBsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9LCBhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGNvbnN0IG8gPSAoZikgPT4ge1xuXHRcdFx0Y29uc3QgbSA9IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBmLmNsaWVudFggLSBtLmxlZnQsXG5cdFx0XHRcdHk6IGYuY2xpZW50WSAtIG0udG9wXG5cdFx0XHR9O1xuXHRcdH0sIGQgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBmID0genQobCwgYSk7XG5cdFx0XHRpZiAoZi53aWR0aCA8IDEgJiYgZi5oZWlnaHQgPCAxKSB7XG5cdFx0XHRcdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIsIG4uc3R5bGUubGVmdCA9IGAke2YubGVmdH1weGAsIG4uc3R5bGUudG9wID0gYCR7Zi50b3B9cHhgLCBuLnN0eWxlLndpZHRoID0gYCR7Zi53aWR0aH1weGAsIG4uc3R5bGUuaGVpZ2h0ID0gYCR7Zi5oZWlnaHR9cHhgO1xuXHRcdH0sIGMgPSAoZikgPT4ge1xuXHRcdFx0Zi5idXR0b24gPT09IDAgJiYgKGYudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1qdW5jdGlvbi1pZ25vcmUtc2VsZWN0XSwgW2RhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVdLCBbZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXSwgYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSB8fCAoZi50YXJnZXQgPT09IHQgfHwgdC5jb250YWlucyhmLnRhcmdldCkpICYmIChpID0gITAsIGwgPSBvKGYpLCBhID0geyAuLi5sIH0sIHQuc2V0UG9pbnRlckNhcHR1cmUoZi5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFBlLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmwgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKSwgZCgpKSk7XG5cdFx0fSwgcCA9IChmKSA9PiB7XG5cdFx0XHRpZiAoIWkpIHJldHVybjtcblx0XHRcdGEgPSBvKGYpLCBkKCk7XG5cdFx0XHRjb25zdCBtID0genQobCwgYSk7XG5cdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFBlLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4ubCB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGJveDogbSxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCBoID0gKGYpID0+IHtcblx0XHRcdGlmICghaSkgcmV0dXJuO1xuXHRcdFx0aSA9ICExO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgbSA9IHp0KGwsIGEpO1xuXHRcdFx0dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChQZS5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4ubCB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGJveDogbSxcblx0XHRcdFx0XHRob3N0OiB0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9LCB1ID0gKGYpID0+IHtcblx0XHRcdGkgJiYgaChmKTtcblx0XHR9LCBzID0gKGYpID0+IHtcblx0XHRcdGlmIChpKSB7XG5cdFx0XHRcdGkgPSAhMSwgbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZi5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoUGUuY2FuY2VsLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7IGhvc3Q6IHQgfVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gUyh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRuLnJlbW92ZSgpO1xuXHRcdH0pLCBTKHQsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIE0odCwgXCJwb2ludGVyZG93blwiLCBjKSksIFModCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgTSh0LCBcInBvaW50ZXJtb3ZlXCIsIHApKSwgUyh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBNKHQsIFwicG9pbnRlcnVwXCIsIHUpKSwgUyh0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBNKHQsIFwicG9pbnRlcmNhbmNlbFwiLCBzKSksIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRyZXR1cm4gdCAmJiBsbih0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKSwgdGhpcztcblx0fVxufTtcbnZhciBmbyA9IGNsYXNzIGV4dGVuZHMgZW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdChlKSB7XG5cdFx0Y29uc3QgdCA9IGU/LmRlcmVmPy4oKTtcblx0XHRpZiAoIXQpIHJldHVybiB0aGlzO1xuXHRcdFZlKHQsIFwiLS1qeC1kcmFnLXhcIiwgTyh0LCBcIi0tangtZHJhZy14XCIpKSwgVmUodCwgXCItLWp4LWRyYWcteVwiLCBPKHQsIFwiLS1qeC1kcmFnLXlcIikpO1xuXHRcdGNvbnN0IG4gPSB0LnN0eWxlLnRyYW5zZm9ybTtcblx0XHQoIXQuc3R5bGUudHJhbnNmb3JtIHx8IHQuc3R5bGUudHJhbnNmb3JtID09PSBcIm5vbmVcIikgJiYgKHQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChjYWxjKHZhcigtLWp4LWRyYWcteCwgMCkgKiAxcHgpLCBjYWxjKHZhcigtLWp4LWRyYWcteSwgMCkgKiAxcHgpLCAwKVwiKTtcblx0XHRjb25zdCByID0gcnIodCwgXCJkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXCIsIHQpO1xuXHRcdGxldCBpID0gITEsIGwgPSAwLCBhID0gMCwgbyA9IDAsIGQgPSAwO1xuXHRcdGNvbnN0IGMgPSAodSkgPT4ge1xuXHRcdFx0dS5idXR0b24gPT09IDAgJiYgKHUudGFyZ2V0ICE9PSByICYmICFyLmNvbnRhaW5zKHUudGFyZ2V0KSB8fCAoaSA9ICEwLCBsID0gdS5jbGllbnRYLCBhID0gdS5jbGllbnRZLCBvID0gTyh0LCBcIi0tangtZHJhZy14XCIpLCBkID0gTyh0LCBcIi0tangtZHJhZy15XCIpLCByLnNldFBvaW50ZXJDYXB0dXJlKHUucG9pbnRlcklkKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChUdC5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRjbGllbnRYOiB1LmNsaWVudFgsXG5cdFx0XHRcdFx0Y2xpZW50WTogdS5jbGllbnRZLFxuXHRcdFx0XHRcdGJhc2VYOiBvLFxuXHRcdFx0XHRcdGJhc2VZOiBkXG5cdFx0XHRcdH1cblx0XHRcdH0pKSkpO1xuXHRcdH0sIHAgPSAodSkgPT4ge1xuXHRcdFx0aWYgKCFpKSByZXR1cm47XG5cdFx0XHRjb25zdCBzID0gdS5jbGllbnRYIC0gbCwgZiA9IHUuY2xpZW50WSAtIGEsIG0gPSBvICsgcywgZyA9IGQgKyBmO1xuXHRcdFx0VmUodCwgXCItLWp4LWRyYWcteFwiLCBtKSwgVmUodCwgXCItLWp4LWRyYWcteVwiLCBnKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChUdC5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdGR4OiBzLFxuXHRcdFx0XHRcdGR5OiBmLFxuXHRcdFx0XHRcdHg6IG0sXG5cdFx0XHRcdFx0eTogZ1xuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fSwgaCA9ICh1KSA9PiB7XG5cdFx0XHRpZiAoaSkge1xuXHRcdFx0XHRpID0gITE7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ci5yZWxlYXNlUG9pbnRlckNhcHR1cmUodS5wb2ludGVySWQpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRcdHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoVHQuZW5kLCB7XG5cdFx0XHRcdFx0YnViYmxlczogITAsXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdFx0eDogTyh0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdFx0eTogTyh0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gUyh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0dC5zdHlsZS50cmFuc2Zvcm0gPSBuO1xuXHRcdH0pLCBTKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBNKHIsIFwicG9pbnRlcmRvd25cIiwgYykpLCBTKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBNKHIsIFwicG9pbnRlcm1vdmVcIiwgcCkpLCBTKHQsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBNKHIsIFwicG9pbnRlcnVwXCIsIGgpKSwgUyh0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgTShyLCBcInBvaW50ZXJjYW5jZWxcIiwgaCkpLCB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0cmV0dXJuIHQgJiYgbG4odCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpLCB0aGlzO1xuXHR9XG59O1xudmFyIHBvID0gY2xhc3MgZXh0ZW5kcyBlbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3QoZSkge1xuXHRcdGNvbnN0IHQgPSBlPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCF0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBuID0gcnIodCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgdCk7XG5cdFx0bGV0IHIgPSAhMSwgaSA9IDAsIGwgPSAwLCBhID0gMCwgbyA9IDA7XG5cdFx0Y29uc3QgZCA9IE1hdGgubWF4KDEyMCwgcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi13XCIpIHx8IFwiXCIpIHx8IDEyMCksIGMgPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdCh0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKSwgcCA9IChzKSA9PiB7XG5cdFx0XHRzLmJ1dHRvbiA9PT0gMCAmJiAocy50YXJnZXQgIT09IG4gJiYgIW4uY29udGFpbnMocy50YXJnZXQpIHx8IChyID0gITAsIGkgPSBzLmNsaWVudFgsIGwgPSBzLmNsaWVudFksIGEgPSB0Lm9mZnNldFdpZHRoLCBvID0gdC5vZmZzZXRIZWlnaHQsIG4uc2V0UG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KE50LnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0OiB0LFxuXHRcdFx0XHRcdHdpZHRoOiBhLFxuXHRcdFx0XHRcdGhlaWdodDogb1xuXHRcdFx0XHR9XG5cdFx0XHR9KSkpKTtcblx0XHR9LCBoID0gKHMpID0+IHtcblx0XHRcdGlmICghcikgcmV0dXJuO1xuXHRcdFx0Y29uc3QgZiA9IE1hdGgubWF4KGQsIGEgKyAocy5jbGllbnRYIC0gaSkpLCBtID0gTWF0aC5tYXgoYywgbyArIChzLmNsaWVudFkgLSBsKSk7XG5cdFx0XHR0LnN0eWxlLndpZHRoID0gYCR7Zn1weGAsIHQuc3R5bGUuaGVpZ2h0ID0gYCR7bX1weGAsIHQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoTnQubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiAhMCxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHR3aWR0aDogZixcblx0XHRcdFx0XHRoZWlnaHQ6IG1cblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH0sIHUgPSAocykgPT4ge1xuXHRcdFx0aWYgKHIpIHtcblx0XHRcdFx0ciA9ICExO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG4ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHR0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KE50LmVuZCwge1xuXHRcdFx0XHRcdGJ1YmJsZXM6ICEwLFxuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0aG9zdDogdCxcblx0XHRcdFx0XHRcdHdpZHRoOiB0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiB0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIFModCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgTShuLCBcInBvaW50ZXJkb3duXCIsIHApKSwgUyh0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBNKG4sIFwicG9pbnRlcm1vdmVcIiwgaCkpLCBTKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIE0obiwgXCJwb2ludGVydXBcIiwgdSkpLCBTKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIE0obiwgXCJwb2ludGVyY2FuY2VsXCIsIHUpKSwgdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KGUpIHtcblx0XHRjb25zdCB0ID0gZT8uZGVyZWY/LigpO1xuXHRcdHJldHVybiB0ICYmIGxuKHQsIFwidWktanVuY3Rpb24tcmVzaXplXCIpLCB0aGlzO1xuXHR9XG59O1xubmV3IGNvKCk7XG5uZXcgZm8oKTtcbm5ldyBwbygpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vanVuY3Rpb24vdHlwZXMudHNcbmZ1bmN0aW9uIGp1bmN0aW9uVG9Cb3goYSwgYikge1xuXHRjb25zdCBsZWZ0ID0gTWF0aC5taW4oYS54LCBiLngpO1xuXHRjb25zdCB0b3AgPSBNYXRoLm1pbihhLnksIGIueSk7XG5cdGNvbnN0IHJpZ2h0ID0gTWF0aC5tYXgoYS54LCBiLngpO1xuXHRjb25zdCBib3R0b20gPSBNYXRoLm1heChhLnksIGIueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdCxcblx0XHR0b3AsXG5cdFx0cmlnaHQsXG5cdFx0Ym90dG9tLFxuXHRcdHdpZHRoOiByaWdodCAtIGxlZnQsXG5cdFx0aGVpZ2h0OiBib3R0b20gLSB0b3Bcblx0fTtcbn1cbnZhciBKVU5DVElPTl9TRUxFQ1RfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1zZWxlY3Q6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1zZWxlY3Q6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tc2VsZWN0OmVuZFwiLFxuXHRjYW5jZWw6IFwianVuY3Rpb24tc2VsZWN0OmNhbmNlbFwiXG59O1xudmFyIEpVTkNUSU9OX0RSQUdfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1kcmFnOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tZHJhZzptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1kcmFnOmVuZFwiXG59O1xudmFyIEpVTkNUSU9OX1JFU0laRV9FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9qdW5jdGlvbi9KdW5jdGlvbk1peGlucy50c1xudmFyIG1peGluRGlzcG9zZXJzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBtaXhpbkRpc3Bvc2VycyA9IGdsb2JhbFRoaXNbbWl4aW5EaXNwb3NlcnNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBwdXNoRGlzcG9zYWJsZSA9IChob3N0LCBtaXhpbk5hbWUsIGZuKSA9PiB7XG5cdGNvbnN0IG1hcCA9IG1peGluRGlzcG9zZXJzLmdldChob3N0KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRjb25zdCBsaXN0ID0gbWFwLmdldChtaXhpbk5hbWUpID8/IFtdO1xuXHRsaXN0LnB1c2goZm4pO1xuXHRtYXAuc2V0KG1peGluTmFtZSwgbGlzdCk7XG5cdG1peGluRGlzcG9zZXJzLnNldChob3N0LCBtYXApO1xufTtcbnZhciBydW5EaXNwb3NlcnMgPSAoaG9zdCwgbWl4aW5OYW1lKSA9PiB7XG5cdGNvbnN0IG1hcCA9IG1peGluRGlzcG9zZXJzLmdldChob3N0KTtcblx0Y29uc3QgbGlzdCA9IG1hcD8uZ2V0KG1peGluTmFtZSk7XG5cdGlmICghbGlzdCkgcmV0dXJuO1xuXHRmb3IgKGNvbnN0IGZuIG9mIGxpc3QpIHRyeSB7XG5cdFx0Zm4oKTtcblx0fSBjYXRjaCB7fVxuXHRtYXAuZGVsZXRlKG1peGluTmFtZSk7XG5cdGlmIChtYXAuc2l6ZSA9PT0gMCkgbWl4aW5EaXNwb3NlcnMuZGVsZXRlKGhvc3QpO1xufTtcbnZhciBwYXJzZVB4VmFyID0gKGhvc3QsIG5hbWUpID0+IHtcblx0Y29uc3QgcmF3ID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oaG9zdCk/LmdldFByb3BlcnR5VmFsdWU/LihuYW1lKT8udHJpbT8uKCkgPz8gXCJcIjtcblx0Y29uc3QgbiA9IHBhcnNlRmxvYXQocmF3KTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiAwO1xufTtcbnZhciBxdWVyeUhhbmRsZSA9IChob3N0LCBhdHRyLCBmYWxsYmFjaykgPT4ge1xuXHRjb25zdCBzZWwgPSBob3N0LmdldEF0dHJpYnV0ZShhdHRyKT8udHJpbSgpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGZhbGxiYWNrO1xuXHRjb25zdCBmb3VuZCA9IGhvc3QucXVlcnlTZWxlY3RvcihzZWwpO1xuXHRyZXR1cm4gZm91bmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGZvdW5kIDogZmFsbGJhY2s7XG59O1xudmFyIEp1bmN0aW9uU2VsZWN0TWl4aW4gPSBjbGFzcyBleHRlbmRzIHhzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRvdmVybGF5LmNsYXNzTmFtZSA9IFwidWktanVuY3Rpb24tc2VsZWN0LW92ZXJsYXlcIjtcblx0XHRvdmVybGF5LnNldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tb3ZlcmxheVwiLCBcIlwiKTtcblx0XHRvdmVybGF5LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDo5OTk5O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IGRhc2hlZCBjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgNzAlLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZDpjb2xvci1taXgoaW4gb2tsYWIsICMzNzk0ZmYgMTQlLCB0cmFuc3BhcmVudCk7ZGlzcGxheTpub25lO2luc2V0OmF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowO1wiO1xuXHRcdGNvbnN0IGVuc3VyZVBvc2l0aW9uZWQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoKGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpKT8ucG9zaXRpb24gPT09IFwic3RhdGljXCIpIGhvc3Quc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fTtcblx0XHRlbnN1cmVQb3NpdGlvbmVkKCk7XG5cdFx0aG9zdC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblx0XHRsZXQgYWN0aXZlID0gZmFsc2U7XG5cdFx0bGV0IGEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0bGV0IGIgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0Y29uc3QgbG9jYWxQb2ludCA9IChldikgPT4ge1xuXHRcdFx0Y29uc3QgciA9IGhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBldi5jbGllbnRYIC0gci5sZWZ0LFxuXHRcdFx0XHR5OiBldi5jbGllbnRZIC0gci50b3Bcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBhcHBseU92ZXJsYXkgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aWYgKGJveC53aWR0aCA8IDEgJiYgYm94LmhlaWdodCA8IDEpIHtcblx0XHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdG92ZXJsYXkuc3R5bGUubGVmdCA9IGAke2JveC5sZWZ0fXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUudG9wID0gYCR7Ym94LnRvcH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLndpZHRoID0gYCR7Ym94LndpZHRofXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7Ym94LmhlaWdodH1weGA7XG5cdFx0fTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLWp1bmN0aW9uLWlnbm9yZS1zZWxlY3RdLCBbZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZV0sIFtkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVdLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKSByZXR1cm47XG5cdFx0XHRpZiAoIShldi50YXJnZXQgPT09IGhvc3QgfHwgaG9zdC5jb250YWlucyhldi50YXJnZXQpKSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdGEgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGIgPSB7IC4uLmEgfTtcblx0XHRcdGhvc3Quc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YiA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3QgZW5kID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGVuZChldik7XG5cdFx0fTtcblx0XHRjb25zdCBvbkNhbmNlbCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmNhbmNlbCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHsgaG9zdCB9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRvdmVybGF5LnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGooaG9zdCwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBqKGhvc3QsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgaihob3N0LCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgaihob3N0LCBcInBvaW50ZXJjYW5jZWxcIiwgb25DYW5jZWwpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uRHJhZ01peGluID0gY2xhc3MgZXh0ZW5kcyB4cyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdGF0KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpKTtcblx0XHRhdChob3N0LCBcIi0tangtZHJhZy15XCIsIHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKSk7XG5cdFx0Y29uc3QgcHJldmlvdXNUcmFuc2Zvcm0gPSBob3N0LnN0eWxlLnRyYW5zZm9ybTtcblx0XHRpZiAoIWhvc3Quc3R5bGUudHJhbnNmb3JtIHx8IGhvc3Quc3R5bGUudHJhbnNmb3JtID09PSBcIm5vbmVcIikgaG9zdC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tangtZHJhZy14LCAwKSAqIDFweCksIGNhbGModmFyKC0tangtZHJhZy15LCAwKSAqIDFweCksIDApXCI7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXCIsIGhvc3QpO1xuXHRcdGxldCBkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdGxldCBzdGFydFggPSAwO1xuXHRcdGxldCBzdGFydFkgPSAwO1xuXHRcdGxldCBiYXNlWCA9IDA7XG5cdFx0bGV0IGJhc2VZID0gMDtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdGRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdHN0YXJ0WCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzdGFydFkgPSBldi5jbGllbnRZO1xuXHRcdFx0YmFzZVggPSBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIik7XG5cdFx0XHRiYXNlWSA9IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKTtcblx0XHRcdGhhbmRsZS5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdGNsaWVudFg6IGV2LmNsaWVudFgsXG5cdFx0XHRcdFx0Y2xpZW50WTogZXYuY2xpZW50WSxcblx0XHRcdFx0XHRiYXNlWCxcblx0XHRcdFx0XHRiYXNlWVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghZHJhZ2dpbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IGR4ID0gZXYuY2xpZW50WCAtIHN0YXJ0WDtcblx0XHRcdGNvbnN0IGR5ID0gZXYuY2xpZW50WSAtIHN0YXJ0WTtcblx0XHRcdGNvbnN0IG54ID0gYmFzZVggKyBkeDtcblx0XHRcdGNvbnN0IG55ID0gYmFzZVkgKyBkeTtcblx0XHRcdGF0KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgbngpO1xuXHRcdFx0YXQoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBueSk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRkeCxcblx0XHRcdFx0XHRkeSxcblx0XHRcdFx0XHR4OiBueCxcblx0XHRcdFx0XHR5OiBueVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR4OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIiksXG5cdFx0XHRcdFx0eTogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCAoKSA9PiB7XG5cdFx0XHRob3N0LnN0eWxlLnRyYW5zZm9ybSA9IHByZXZpb3VzVHJhbnNmb3JtO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBqKGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgaihoYW5kbGUsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGooaGFuZGxlLCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGooaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uUmVzaXplTWl4aW4gPSBjbGFzcyBleHRlbmRzIHhzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgcmVzaXppbmcgPSBmYWxzZTtcblx0XHRsZXQgc3ggPSAwO1xuXHRcdGxldCBzeSA9IDA7XG5cdFx0bGV0IHN3ID0gMDtcblx0XHRsZXQgc2ggPSAwO1xuXHRcdGNvbnN0IG1pblcgPSBNYXRoLm1heCgxMjAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4td1wiKSB8fCBcIlwiKSB8fCAxMjApO1xuXHRcdGNvbnN0IG1pbkggPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdChob3N0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gdHJ1ZTtcblx0XHRcdHN4ID0gZXYuY2xpZW50WDtcblx0XHRcdHN5ID0gZXYuY2xpZW50WTtcblx0XHRcdHN3ID0gaG9zdC5vZmZzZXRXaWR0aDtcblx0XHRcdHNoID0gaG9zdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBzdyxcblx0XHRcdFx0XHRoZWlnaHQ6IHNoXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFyZXNpemluZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbncgPSBNYXRoLm1heChtaW5XLCBzdyArIChldi5jbGllbnRYIC0gc3gpKTtcblx0XHRcdGNvbnN0IG5oID0gTWF0aC5tYXgobWluSCwgc2ggKyAoZXYuY2xpZW50WSAtIHN5KSk7XG5cdFx0XHRob3N0LnN0eWxlLndpZHRoID0gYCR7bnd9cHhgO1xuXHRcdFx0aG9zdC5zdHlsZS5oZWlnaHQgPSBgJHtuaH1weGA7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBudyxcblx0XHRcdFx0XHRoZWlnaHQ6IG5oXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRoYW5kbGUucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IGhvc3Qub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBob3N0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBqKGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBqKGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBqKGhhbmRsZSwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGooaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5uZXcgSnVuY3Rpb25TZWxlY3RNaXhpbigpO1xubmV3IEp1bmN0aW9uRHJhZ01peGluKCk7XG5uZXcgSnVuY3Rpb25SZXNpemVNaXhpbigpO1xuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IERPTU1peGluLCBKdW5jdGlvbkRyYWdNaXhpbiwgSnVuY3Rpb25SZXNpemVNaXhpbiwgSnVuY3Rpb25TZWxlY3RNaXhpbiwgTUFUQ0gsIE1PQywgTU9DRWxlbWVudCwgUkFGQmVoYXZpb3IsIFJFR0VYLCBST09ULCBXYXZ5U2hhcGVkQ2lyY2xlLCBfX2V4cG9ydFByb3BlcnRpZXMsIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMsIGFkZEV2ZW50LCBhZGRFdmVudHMsIGFkZEV2ZW50c0xpc3QsIGFkZFJvb3QsIGFkb3B0ZWRCbG9iTWFwLCBhZG9wdGVkTWFwLCBhbmltYXRlSGlkZSwgYW5pbWF0ZVNob3csIGF2YWlsU2l6ZSwgYmJoLCBiYncsIGJpbmRCZWhhdmlvciwgYmluZE1peGlucywgYmluZFN0b3JlLCBib3JkZXJCb3hIZWlnaHQsIGJvcmRlckJveFdpZHRoLCBib3VuZEJlaGF2aW9ycywgYm91bmRNaXhpblNldCwgY2JoLCBjYncsIGNoYW5nZVpvb20sIGNsYXNzZXMsIGNvbXB1dGVDYXJldFBvc2l0aW9uLCBjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQsIGNvbnRhaW5zT3JTZWxmLCBjb250ZW50Qm94SGVpZ2h0LCBjb250ZW50Qm94V2lkdGgsIGNyZWF0ZUVsZW1lbnRWYW5pbGxhLCBkZWxldGVTdHlsZVByb3BlcnR5LCBkZXRlY3RNb2JpbGUsIGRvQm9yZGVyT2JzZXJ2ZSwgZG9Db250ZW50T2JzZXJ2ZSwgZmV0Y2hBbmRDYWNoZSwgZmV0Y2hBc0lubGluZSwgZml4T3JpZW50VG9TY3JlZW4sIGZpeGVkQ2xpZW50Wm9vbSwgZ2V0QWRvcHRlZFN0eWxlUnVsZSwgZ2V0QXZhaWxTaXplLCBnZXRCb3VuZGluZ09yaWVudFJlY3QsIGdldENvcnJlY3RPcmllbnRhdGlvbiwgZ2V0RWxlbWVudFJlbGF0ZWQsIGdldEVsZW1lbnRab29tLCBnZXRFdmVudFRhcmdldCwgZ2V0T2Zmc2V0UGFyZW50LCBnZXRPZmZzZXRQYXJlbnRDaGFpbiwgZ2V0UGFkZGluZywgZ2V0UHJvcGVydHlWYWx1ZSwgZ2V0UHhWYWx1ZSwgZ2V0U3RvcmVzT2ZFbGVtZW50LCBnZXRTdHlsZUxheWVyLCBnZXRTdHlsZVJ1bGUsIGdldFRyYW5zZm9ybSwgZ2V0VHJhbnNmb3JtT3JpZ2luLCBnZXRab29tLCBoYW5kbGVBdHRyaWJ1dGUsIGhhbmRsZURhdGFzZXQsIGhhbmRsZUhpZGRlbiwgaGFuZGxlUHJvcGVydHksIGhhbmRsZVN0eWxlQ2hhbmdlLCBoYXNQYXJlbnQsIGhhc2gsIGh0bWwsIGluY2x1ZGVTZWxmLCBpbmRleE9mLCBpbml0VGV4dFN0eWxlLCBpbml0VmlzaWJpbGl0eSwgaXNFbGVtZW50LCBpc0luRm9jdXMsIGlzTW9iaWxlLCBpc05lYXJseUlkZW50aXR5LCBpc1ZhbGlkUGFyZW50LCBsb2FkQXNBZG9wdGVkLCBsb2FkQmxvYlN0eWxlLCBsb2FkSW5saW5lU3R5bGUsIGxvYWRTdHlsZVNoZWV0LCBtYWtlUkFGQ3ljbGUsIG1lYXN1cmVJbnB1dEluRm9jdXMsIG1lYXN1cmVUZXh0LCBtaXhpbkRpc3Bvc2VycywgbWl4aW5FbGVtZW50cywgbWl4aW5OYW1lc3BhY2UsIG1peGluUmVnaXN0cnksIG5hbWVSZWdpc3RyeUYsIG5hbWVkU3RvcmVNYXBzLCBvYnNlcnZlQXR0cmlidXRlLCBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3Rvciwgb2JzZXJ2ZUJvcmRlckJveCwgb2JzZXJ2ZUJ5U2VsZWN0b3IsIG9ic2VydmVDb250ZW50Qm94LCBvbkJvcmRlck9ic2VydmUsIG9uQ29udGVudE9ic2VydmUsIG9yaWVudE9mLCBvcmllbnRhdGlvbk51bWJlck1hcCwgcGFyc2VMZW5ndGgsIHBhcnNlT3JpZ2luLCBwYXNzaXZlT3B0cywgcHJlbG9hZFN0eWxlLCByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCwgcmVmbGVjdEJlaGF2aW9ycywgcmVmbGVjdE1peGlucywgcmVmbGVjdFN0b3JlcywgcmVnaXN0ZXJNaXhpbiwgcmVtb3ZlQWRvcHRlZCwgcmVtb3ZlRXZlbnQsIHJlbW92ZUV2ZW50cywgcmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50LCByb290cywgc2V0QXR0cmlidXRlcywgc2V0QXR0cmlidXRlc0lmTnVsbCwgc2V0Q2hlY2tlZCwgc2V0SWRsZUludGVydmFsLCBzZXRQcm9wZXJ0eSwgc2V0U3R5bGVJblJ1bGUsIHNldFN0eWxlUHJvcGVydHksIHNldFN0eWxlUHJvcGVydHlGYWxsYmFjaywgc2V0U3R5bGVQcm9wZXJ0eVR5cGVkLCBzZXRTdHlsZVJ1bGUsIHNldFN0eWxlUnVsZXMsIHNldFN0eWxlVVJMLCB0aHJvdHRsZU1hcCwgdW5maXhlZENsaWVudFpvb20sIHVwZGF0ZUFsbE1peGlucywgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMsIHVwZGF0ZVZQLCB1cmwsIHdoZW5BbnlTY3JlZW5DaGFuZ2VzLCB6b29tT2YsIHpvb21WYWx1ZXMgfTsiXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLGlCQUFBQSxJQUFlLGdCQUFBQyxHQUFjLGdCQUFBQyxJQUFjLFlBQUFDLEdBQVUscUJBQUFDLElBQW1CLFNBQUFDLElBQU8sZUFBQUMsSUFBYSxnQkFBQUMsSUFBYyx1QkFBQUMsSUFBcUIsc0JBQUFDLElBQW9CLCtCQUFBQyxJQUE2QixxQkFBQUMsU0FBeUI7QUFHbE4sSUFBSUMsS0FBa0MsdUJBQU8sSUFBSSxrQ0FBa0MsR0FDL0VDLEtBQTRCLFdBQVdELEVBQStCLE1BQXNCLG9CQUFJLElBQUk7QUFDeEc7QUFBQSxFQUNDO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEs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QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1Is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QUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJ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QUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJ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Q04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FB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O0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNW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QUFBQSxRQUNELENBQUMsQ0FBQztBQUFBO0FBQUEsSUFDSDtBQUNBLFdBQUFtbkIsRUFBZW5uQixHQUFNLHNCQUFzQjZVLEVBQUU0VCxHQUFRLGVBQWVQLENBQU0sQ0FBQyxHQUMzRWYsRUFBZW5uQixHQUFNLHNCQUFzQjZVLEVBQUU0VCxHQUFRLGVBQWVOLENBQU0sQ0FBQyxHQUMzRWhCLEVBQWVubkIsR0FBTSxzQkFBc0I2VSxFQUFFNFQsR0FBUSxhQUFhSixDQUFJLENBQUMsR0FDdkVsQixFQUFlbm5CLEdBQU0sc0JBQXNCNlUsRUFBRTRULEdBQVEsaUJBQWlCSixDQUFJLENBQUMsR0FDcEU7QUFBQSxFQUNSO0FBQUEsRUFDQSxXQUFXUCxHQUFLO0FBQ2YsVUFBTTluQixJQUFPOG5CLEdBQUssUUFBUTtBQUMxQixXQUFJOW5CLEtBQU1zbkIsR0FBYXRuQixHQUFNLG9CQUFvQixHQUMxQztBQUFBLEVBQ1I7QUFDRDtBQUNBLElBQUk2bkIsR0FBb0I7QUFDeEIsSUFBSVUsR0FBa0I7QUFDdEIsSUFBSVksR0FBb0I7IiwKICAibmFtZXMiOiBbIiRhdm9pZFRyaWdnZXIiLCAiY2FtZWxUb0tlYmFiIiwgImN2dF9jc190b19vcyIsICJoYXNWYWx1ZSIsICJpc0FycmF5T3JJdGVyYWJsZSIsICJpc1ZhbCIsICJpc1ZhbHVlVW5pdCIsICJrZWJhYlRvQ2FtZWwiLCAibm9ybWFsaXplR3JpZExheW91dCIsICJub3JtYWxpemVQcmltaXRpdmUiLCAicmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsIiwgInRyeVN0cmluZ0FzTnVtYmVyIiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wiLCAiX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyIsICJvcHRpb25zIiwgIm5hbWUiLCAiZSIsICJfX2V4cG9ydFByb3BlcnRpZXMiLCAiaXNNb2JpbGUiLCAiY2hlY2siLCAiYSIsICJkZXRlY3RNb2JpbGUiLCAiY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2siLCAicnVuV2hlbklkbGUkMSIsICJjYiIsICJ0aW1lb3V0IiwgImdldE9mZnNldFBhcmVudCIsICJlbGVtZW50IiwgImdldE9mZnNldFBhcmVudENoYWluIiwgInBhcmVudHMiLCAiY3VycmVudCIsICJwYXJlbnQiLCAiaXNOZWFybHlJZGVudGl0eSIsICJtYXRyaXgiLCAiZXBzaWxvbiIsICJtYWtlUkFGQ3ljbGUiLCAiY29udHJvbCIsICJyQUYiLCAicmVzIiwgIlJBRkJlaGF2aW9yIiwgInNoZWQiLCAiUk9PVCIsICJzZXRBdHRyaWJ1dGVzSWZOdWxsIiwgImF0dHJzIiwgInZhbHVlIiwgIm9sZCIsICJzZXRBdHRyaWJ1dGVzIiwgInRocm90dGxlTWFwIiwgInNldElkbGVJbnRlcnZhbCIsICJhcmdzIiwgInN0YXR1cyIsICJyIiwgImJvcmRlckJveFdpZHRoIiwgImJvcmRlckJveEhlaWdodCIsICJjb250ZW50Qm94V2lkdGgiLCAiY29udGVudEJveEhlaWdodCIsICJvbkJvcmRlck9ic2VydmUiLCAib25Db250ZW50T2JzZXJ2ZSIsICJkb0NvbnRlbnRPYnNlcnZlIiwgIm9ic2VydmVyIiwgImVudHJpZXMiLCAiZW50cnkiLCAiY29udGVudEJveFNpemUiLCAiZG9Cb3JkZXJPYnNlcnZlIiwgImJvcmRlckJveFNpemUiLCAidXJsIiwgInR5cGUiLCAic291cmNlIiwgImh0bWwiLCAicGFyc2VkIiwgInNldENoZWNrZWQiLCAiaW5wdXQiLCAiZXYiLCAiaXNWYWxpZFBhcmVudCIsICJpbmRleE9mIiwgIm5vZGUiLCAiTUFUQ0giLCAiUkVHRVgiLCAiY3JlYXRlRWxlbWVudFZhbmlsbGEiLCAic2VsZWN0b3IiLCAiY3JlYXRlIiwgIm1hdGNoIiwgImNsYXNzTmFtZSIsICJpc0VsZW1lbnQiLCAiZWwiLCAiaW5jbHVkZVNlbGYiLCAidGFyZ2V0IiwgImhhc1BhcmVudCIsICJwYXNzaXZlT3B0cyIsICJhZGRFdmVudCIsICJvcHRzIiwgIndyIiwgInJlbW92ZUV2ZW50IiwgImFkZEV2ZW50cyIsICJyb290IiwgImhhbmRsZXJzIiwgImFkZEV2ZW50c0xpc3QiLCAiZXZlbnRzIiwgImxpc3QiLCAiY2JzIiwgInJlbW92ZUV2ZW50cyIsICJnZXRFdmVudFRhcmdldCIsICJwYXRoIiwgImNvbnRhaW5zT3JTZWxmIiwgImIiLCAiYUVsIiwgImJFbCIsICJhSW5kZXgiLCAiYkluZGV4IiwgIk1PQ0VsZW1lbnQiLCAic2VsZiIsICJob3N0IiwgImhvc3RNYXRjaGVkIiwgImNsb3Nlc3QiLCAiTU9DIiwgImlzSW5Gb2N1cyIsICJzZWxlY3Rvck9yRWxlbWVudCIsICJkaXIiLCAiYWN0aXZlIiwgImlzRm9jdXNlZCIsICJpc0hvdmVyZWQiLCAiYWx0Q25kIiwgImdldFpvb20iLCAiem9vbVZhbHVlc1N5bWJvbCIsICJ6b29tVmFsdWVzIiwgInpvb21PZiIsICJjb250YWluZXIiLCAiY2hhbmdlWm9vbSIsICJzY2FsZSIsICJmaXhlZENsaWVudFpvb20iLCAidW5maXhlZENsaWVudFpvb20iLCAib3JpZW50T2YiLCAicmF3IiwgIm4iLCAiZ2V0Qm91bmRpbmdPcmllbnRSZWN0IiwgIm9yaWVudCIsICJ6b29tIiwgImJveCIsICJuYngiLCAib3JfaSIsICJ2diIsICJzaXplIiwgImxlZnRfIiwgInRvcF8iLCAicmlnaHRfIiwgImJvdHRvbV8iLCAibGVmdCIsICJyaWdodCIsICJ0b3AiLCAiYm90dG9tIiwgIndpZHRoIiwgImhlaWdodCIsICJiYnciLCAiYmJoIiwgImNidyIsICJjYmgiLCAicnVuV2hlbklkbGUiLCAiZ2V0QXZhaWxTaXplIiwgImwiLCAidnZCbG9jayIsICJhdyIsICJhaCIsICJhdmFpbFNpemUiLCAiY2xhc3NlcyIsICJvcmllbnRhdGlvbk51bWJlck1hcCIsICJ1cGRhdGVWUCIsICJydWxlIiwgInByb3BOYW1lIiwgInByb3BWYWx1ZSIsICJleGlzdHMiLCAiZ2V0Q29ycmVjdE9yaWVudGF0aW9uIiwgIm9yaWVudGF0aW9uVHlwZSIsICJwYXNzaXZlT3B0cyQxIiwgIndoZW5BbnlTY3JlZW5DaGFuZ2VzIiwgInRpY2tpbmciLCAidXBkYXRlIiwgInVuc3Vic2NyaWJlcnMiLCAidW5zdWIiLCAiZml4T3JpZW50VG9TY3JlZW4iLCAibmV4dCIsICJjdHgiLCAiaW5pdFRleHRTdHlsZSIsICJzdHlsZSIsICJmb250V2VpZ2h0IiwgImZvbnRTaXplIiwgImZvbnRGYW1pbHkiLCAiZm9udFN0cmV0Y2giLCAibWVhc3VyZVRleHQiLCAidGV4dCIsICJtZWFzdXJlSW5wdXRJbkZvY3VzIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uIiwgInBvaW50IiwgImN1cnJlbnRXaWR0aCIsICJpIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCIsICJjbGllbnQiLCAicmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQiLCAibGF5b3V0T3ZlcnJpZGUiLCAiYyIsICJiYXNlIiwgInJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCIsICJncmlkU3lzdGVtIiwgImNsaWVudFBvaW50IiwgIm1vZGUiLCAicmVjdCIsICJsYXlvdXQiLCAiY3MiLCAicGwiLCAicHQiLCAicHIiLCAicGIiLCAiY29udGVudFciLCAiY29udGVudEgiLCAiY3NDb29yZCIsICJhbmltYXRlU2hvdyIsICJhbmltYXRpb25Eb25lIiwgImFuaW1hdGUiLCAiZG9uZSIsICJlbmRBbmltYXRpb24iLCAiZXZlbnQiLCAicmVzb2x2ZSIsICJyZWplY3QiLCAicHJvbWlzZSIsICJyZXEiLCAiYW5pbWF0ZUhpZGUiLCAib25Cb3JkZXJPYnNlcnZlU3ltYm9sIiwgIm9uQm9yZGVyT2JzZXJ2ZSQxIiwgIm9uQ29udGVudE9ic2VydmVTeW1ib2wiLCAib25Db250ZW50T2JzZXJ2ZSQxIiwgInVud3JhcEZyb21RdWVyeSIsICJvYnNlcnZlQ29udGVudEJveCIsICJjYWxsYmFja3MiLCAib2JzZXJ2ZUJvcmRlckJveCIsICJvYnNlcnZlQXR0cmlidXRlIiwgImF0dHJpYnV0ZSIsICJvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvciIsICJhdHRyaWJ1dGVMaXN0IiwgInMiLCAibXV0YXRpb25MaXN0IiwgIm11dGF0aW9uIiwgImFkZGVkTm9kZXMiLCAicmVtb3ZlZE5vZGVzIiwgIm9ic2VydmVCeVNlbGVjdG9yIiwgIm11dCIsICJvYnMiLCAidW53cmFwTm9kZXNCeVNlbGVjdG9yIiwgIm5vZGVzIiwgIiRub2RlcyIsICJvYlJlZiIsICJoYW5kbGVNdXRhdGlvbiIsICJoYW5kbGVDb21lIiwgImhhbmRsZU91dENvbWUiLCAiaGFuZGxlRm9jdXNDbGljayIsICJmYWN0b3JzIiwgInNlbGVjdGVkIiwgImluaXRWaXNpYmlsaXR5IiwgIldhdnlTaGFwZWRDaXJjbGUiLCAic3RlcHMiLCAiYW1wbGl0dWRlIiwgImZyZXEiLCAicG9pbnRzIiwgImFuZ2xlIiwgInN0ZXAiLCAidmFyaWFudCIsICJmdW5jIiwgInN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXQiLCAiY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50IiwgImNzcyIsICJPV05FUiIsICJzdHlsZUVsZW1lbnQiLCAic2V0U3R5bGVVUkwiLCAibGF5ZXIiLCAic2V0U3R5bGVSdWxlcyIsICJzZXRTdHlsZVJ1bGUiLCAiZ2V0U3R5bGVMYXllciIsICJsYXllck5hbWUiLCAic2hlZXQiLCAibGF5ZXJSdWxlSW5kZXgiLCAibGF5ZXJSdWxlIiwgInN0eWxlSWRDb3VudGVyIiwgImlzU2hhZG93Um9vdCIsICJpc0RvY3VtZW50IiwgImlzRWxlbWVudCQxIiwgImVzY2FwZUNTU0lkZW50aWZpZXIiLCAiY2hhciIsICJjcmVhdGVTdHlsZUlkIiwgImpvaW5TY29wZWRTZWxlY3RvciIsICJzY29wZSIsICJmaW5kU3R5bGVSdWxlIiwgImZ1bGxTZWxlY3RvciIsICJydWxlcyIsICJleHBlY3RlZCIsICJyZXF1ZXN0ZWQiLCAiYWN0dWFsIiwgImdldFN0eWxlUnVsZSIsICJiYXNpcyIsICJiYXNpc0VsZW1lbnQiLCAic3R5bGVJZCIsICJzdHlsZUVsZW1lbnRHbG9iYWwiLCAicnVsZUlkIiwgImhhc1R5cGVkT00iLCAiaXNTdHlsZVZhbHVlIiwgInZhbCIsICJpc1VuaXRWYWx1ZSIsICJzZXRQcm9wZXJ0eUlmTm90RXF1YWwiLCAic3R5bGVSZWYiLCAia2ViYWIiLCAiaW1wb3J0YW5jZSIsICJzZXRTdHlsZVByb3BlcnR5VHlwZWQiLCAic3R5bGVNYXBSZWYiLCAic2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrIiwgIm5ld1ZhbCIsICJtYXliZU51bSIsICJwcm9taXNlT3JEaXJlY3QiLCAiYmxvYlVSTE1hcCIsICJjYWNoZU1hcCIsICJmZXRjaEFuZENhY2hlIiwgImJ1cmwiLCAicHJvbWlzZWQiLCAiYmxvYiIsICJjYWNoZUNvbnRlbnRNYXAiLCAiY2FjaGVCbG9iQ29udGVudE1hcCIsICJmZXRjaEFzSW5saW5lIiwgImFkb3B0ZWRTZWxlY3Rvck1hcCIsICJhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAiLCAiYWRvcHRlZExheWVyTWFwIiwgImFkb3B0ZWRTaGFkb3dMYXllck1hcCIsICJnZXRBZG9wdGVkU3R5bGVSdWxlIiwgInRhcmdldEFkb3B0ZWRTaGVldHMiLCAic2VsZWN0b3JLZXkiLCAic2hhZG93TWFwIiwgInNoYWRvd0xheWVyTWFwIiwgImxheWVySW5kZXgiLCAibmV3UnVsZSIsICJydWxlSW5kZXgiLCAic2V0U3R5bGVQcm9wZXJ0eSIsICJzZXRTdHlsZUluUnVsZSIsICJoYXNoIiwgInN0cmluZyIsICJoYXNoQnVmZmVyIiwgImxvYWRTdHlsZVNoZWV0IiwgImlubGluZSIsICJpbnRlZ3JpdHkiLCAibG9hZCIsICJlcnJvciIsICJsb2FkQmxvYlN0eWxlIiwgImxvYWRJbmxpbmVTdHlsZSIsICJyb290RWxlbWVudCIsICJQTEFDRSIsICJzZXRQcm9wZXJ0eSIsICJwcmVsb2FkU3R5bGUiLCAic3R5bGVzIiwgImxvYWRBc0Fkb3B0ZWQiLCAiYWRvcHRlZE1hcCIsICJhZG9wdGVkQmxvYk1hcCIsICJhcHBseUFkb3B0ZWRTdHlsZVRleHQiLCAiY3NzVGV4dCIsICJtZXNzYWdlIiwgImNhY2hlZCIsICJsYXllcldyYXBwZWQiLCAicmVtb3ZlQWRvcHRlZCIsICJzaGVldHMiLCAiaWR4IiwgInBhcnNlT3JpZ2luIiwgIm9yaWdpbiIsICJ2YWx1ZXMiLCAicGFyc2VMZW5ndGgiLCAiZ2V0VHJhbnNmb3JtIiwgImdldFRyYW5zZm9ybU9yaWdpbiIsICJjc3NPcmlnaW4iLCAiZ2V0UHJvcGVydHlWYWx1ZSIsICJzcmMiLCAiZ2V0RWxlbWVudFpvb20iLCAiY3VycmVudEVsZW1lbnQiLCAiY3VycmVudENTU1pvb20iLCAiZ2V0UHhWYWx1ZSIsICJnZXRQYWRkaW5nIiwgImF4aXMiLCAiYm91bmRCZWhhdmlvcnMiLCAiYmluZEJlaGF2aW9yIiwgImJlaFNldCIsICJiZWhhdmlvciIsICJyZWZsZWN0QmVoYXZpb3JzIiwgImJlaGF2aW9ycyIsICJuYW1lZFN0b3JlTWFwc1N5bWJvbCIsICJuYW1lZFN0b3JlTWFwcyIsICJnZXRTdG9yZXNPZkVsZW1lbnQiLCAibWFwIiwgIkUiLCAibSIsICJpc1dlYWtDb21wYXRpYmxlIiwgImJpbmRTdG9yZSIsICJvYmoiLCAid2Vha01hcCIsICJyZWZsZWN0U3RvcmVzIiwgInN0b3JlcyIsICJyZWZsZWN0TWl4aW5zIiwgIm1peGlucyIsICJtaXhpblNldCIsICJib3VuZE1peGluU2V0IiwgImJpbmRNaXhpbnMiLCAiZ2V0RWxlbWVudFJlbGF0ZWQiLCAibWl4aW4iLCAibWl4U2V0IiwgIndlbCIsICJtaXhpbkVsZW1lbnRzIiwgImJvdW5kTWl4aW5TZXRTeW1ib2wiLCAibWl4aW5FbGVtZW50c1N5bWJvbCIsICJtaXhpblJlZ2lzdHJ5U3ltYm9sIiwgIm1peGluUmVnaXN0cnkiLCAibWl4aW5OYW1lc3BhY2VTeW1ib2wiLCAibWl4aW5OYW1lc3BhY2UiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzIiwgIm5hbWVzIiwgInJvb3RzIiwgImFkZFJvb3QiLCAidXBkYXRlQWxsTWl4aW5zIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCIsICJlbGVtZW50cyIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzIiwgIm5hbWVSZWdpc3RyeUYiLCAia2V5IiwgInJlZ2lzdGVyTWl4aW4iLCAiRE9NTWl4aW4iLCAid0VsZW1lbnQiLCAid1NlbGYiLCAicmVsYXRlZCIsICJoYW5kbGVIaWRkZW4iLCAiXyIsICJ2aXNpYmxlIiwgIiRyZWYiLCAiaXNWaXNpYmxlIiwgImhhbmRsZVByb3BlcnR5IiwgInByb3AiLCAiaGFuZGxlRGF0YXNldCIsICJkYXRhc2V0UmVmIiwgImRlbGV0ZVN0eWxlUHJvcGVydHkiLCAiaGFuZGxlU3R5bGVDaGFuZ2UiLCAiaGFuZGxlQXR0cmlidXRlIiwgImNyIiwgImNuIiwgInhvIiwgIm1yIiwgIkxuIiwgImoiLCAidnIiLCAiZ3IiLCAiem4iLCAiV3QiLCAiSiIsICJMciIsICJpZSIsICJ6ciIsICJhZSIsICJqZSIsICJHdCIsICJwIiwgImgiLCAidSIsICJUciIsICJmIiwgIkt0IiwgIm1lIiwgIml0IiwgIkciLCAicSIsICJ6IiwgIk9yIiwgImtuIiwgImF0IiwgIlJuIiwgIlVyIiwgImdlIiwgIllyIiwgInZlIiwgIk4iLCAiS3IiLCAiUXIiLCAiRCIsICJlaSIsICJ5ZSIsICJ0aSIsICJZZSIsICIkbiIsICJSdCIsICJuaSIsICIkdCIsICJyaSIsICJpaSIsICJhaSIsICJvaSIsICJ4cyIsICJsaSIsICJqbiIsICJ1aSIsICJjaSIsICJNIiwgImRpIiwgImZpIiwgInBpIiwgImhpIiwgIkZuIiwgIm1pIiwgInZpIiwgImdpIiwgImh0IiwgIm90IiwgIksiLCAiSCIsICJYIiwgInlpIiwgIk9uIiwgIlZlIiwgImJpIiwgInhpIiwgIkZ0IiwgIndpIiwgIldlIiwgIlJlIiwgIlNpIiwgIkVpIiwgImRlIiwgImppIiwgImJlIiwgIk1pIiwgIlplIiwgInFuIiwgIk90IiwgIkNpIiwgInF0IiwgIlZpIiwgIkFpIiwgIkxpIiwgInppIiwgImVuIiwgIlRpIiwgIk1uIiwgIk5pIiwgImtpIiwgIkMiLCAiUGkiLCAiV2kiLCAiUmkiLCAiJGkiLCAiSG4iLCAiRmkiLCAiT2kiLCAicWkiLCAibXQiLCAic3QiLCAiUSIsICJJIiwgIlUiLCAiSGkiLCAiSW4iLCAiQWUiLCAiSWkiLCAiQmkiLCAiSHQiLCAiX2kiLCAiJGUiLCAiRmUiLCAiRGkiLCAiWGkiLCAiZmUiLCAiVWkiLCAieGUiLCAiWWkiLCAiSmUiLCAiQm4iLCAiSXQiLCAiWmkiLCAiQnQiLCAiSmkiLCAiR2kiLCAiS2kiLCAiUWkiLCAidG4iLCAiZWEiLCAiQ24iLCAidGEiLCAibmEiLCAiViIsICJyYSIsICJpYSIsICJhYSIsICJvYSIsICJfbiIsICJzYSIsICJsYSIsICJ1YSIsICJ2dCIsICJsdCIsICJlZSIsICJCIiwgIlkiLCAiY2EiLCAiRG4iLCAiTGUiLCAiZGEiLCAiZmEiLCAiX3QiLCAicGEiLCAiT2UiLCAicWUiLCAiaGEiLCAibWEiLCAicGUiLCAidmEiLCAid2UiLCAiZ2EiLCAiR2UiLCAiWG4iLCAiRHQiLCAieWEiLCAiWHQiLCAiYmEiLCAieGEiLCAid2EiLCAiU2EiLCAibm4iLCAiRWEiLCAiVm4iLCAiamEiLCAiVW4iLCAiWW4iLCAiWm4iLCAiTWEiLCAiQ2EiLCAiVmEiLCAiQWEiLCAiTGEiLCAiemEiLCAiSm4iLCAiVGEiLCAiTmEiLCAia2EiLCAiZ3QiLCAidXQiLCAidGUiLCAiWiIsICJQYSIsICJHbiIsICJUIiwgIldhIiwgIlJhIiwgIlV0IiwgIiRhIiwgIkhlIiwgIkllIiwgIkZhIiwgIk9hIiwgImhlIiwgInFhIiwgIlNlIiwgIkhhIiwgIktlIiwgIktuIiwgIll0IiwgIklhIiwgIlp0IiwgIkJhIiwgIl9hIiwgIkRhIiwgIlhhIiwgInJlIiwgInl0IiwgInplIiwgImJ0IiwgInh0IiwgIlVhIiwgIlFlIiwgInkiLCAicm4iLCAiVyIsICJRbiIsICJZYSIsICJaYSIsICJKYSIsICJ3dCIsICJUZSIsICJTdCIsICJFdCIsICJHYSIsICJldCIsICJhbiIsICJSIiwgImVyIiwgIkthIiwgIlFhIiwgImVvIiwgImp0IiwgIk5lIiwgIk10IiwgIkN0IiwgInRvIiwgInR0IiwgIngiLCAib24iLCAiJCIsICJ0ciIsICJubyIsICJybyIsICJpbyIsICJWdCIsICJrZSIsICJBdCIsICJMdCIsICJhbyIsICJudCIsICJ3IiwgInNuIiwgIkYiLCAibnIiLCAib28iLCAic28iLCAibG8iLCAienQiLCAiUGUiLCAiVHQiLCAiTnQiLCAidW8iLCAicnQiLCAiUyIsICJsbiIsICJPIiwgInJyIiwgImNvIiwgIm8iLCAiZCIsICJmbyIsICJwbyIsICJqdW5jdGlvblRvQm94IiwgIkpVTkNUSU9OX1NFTEVDVF9FVkVOVFMiLCAiSlVOQ1RJT05fRFJBR19FVkVOVFMiLCAiSlVOQ1RJT05fUkVTSVpFX0VWRU5UUyIsICJtaXhpbkRpc3Bvc2Vyc1N5bWJvbCIsICJtaXhpbkRpc3Bvc2VycyIsICJwdXNoRGlzcG9zYWJsZSIsICJtaXhpbk5hbWUiLCAiZm4iLCAicnVuRGlzcG9zZXJzIiwgInBhcnNlUHhWYXIiLCAicXVlcnlIYW5kbGUiLCAiYXR0ciIsICJmYWxsYmFjayIsICJzZWwiLCAiZm91bmQiLCAiSnVuY3Rpb25TZWxlY3RNaXhpbiIsICJ3RWwiLCAib3ZlcmxheSIsICJsb2NhbFBvaW50IiwgImFwcGx5T3ZlcmxheSIsICJvbkRvd24iLCAib25Nb3ZlIiwgImVuZCIsICJvblVwIiwgIm9uQ2FuY2VsIiwgIkp1bmN0aW9uRHJhZ01peGluIiwgInByZXZpb3VzVHJhbnNmb3JtIiwgImhhbmRsZSIsICJkcmFnZ2luZyIsICJzdGFydFgiLCAic3RhcnRZIiwgImJhc2VYIiwgImJhc2VZIiwgImR4IiwgImR5IiwgIm54IiwgIm55IiwgIkp1bmN0aW9uUmVzaXplTWl4aW4iLCAicmVzaXppbmciLCAic3giLCAic3kiLCAic3ciLCAic2giLCAibWluVyIsICJtaW5IIiwgIm53IiwgIm5oIl0KfQo=

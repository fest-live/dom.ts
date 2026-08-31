import { $avoidTrigger as j, camelToKebab as ge, cvt_cs_to_os as ue, hasValue as L, isArrayOrIterable as Te, isVal as Ne, isValueUnit as Ve, kebabToCamel as ye, normalizeGridLayout as Pe, normalizePrimitive as ie, resolveLocalPointToGridCell as je } from "@fest-lib/core";
import { observeStyleTree as Le, setStyleProperty as z } from "@fest-lib/style-lib";
export * from "@fest-lib/style-lib";
var Oe = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), de = globalThis[Oe] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || de.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      de.add(t);
    }
});
var Mt = () => {
}, We = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, kt = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, He = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), le = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(He()), 0), Re = (e) => e?.offsetParent ?? e?.host, Ct = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = Re(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && t.push(n);
  }
  return t;
}, zt = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, Fe = () => {
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
}, Tt = (e = Fe()) => (t) => e.shedule(t), Nt = typeof document < "u" ? document?.documentElement : null, Vt = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, r]) => {
      const i = e.getAttribute(n);
      r == null ? e.removeAttribute(n) : r != i && e.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, Pt = (e, t = {}) => Array.from(Object.entries(t)).map(([n, r]) => {
  r == null ? e.removeAttribute(n) : e.setAttribute(n, r ?? e.getAttribute(n));
}), Be = /* @__PURE__ */ new Map(), jt = (e, t = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return le(async () => {
    if (!(!e || typeof e != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((i) => setTimeout(i, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => le(i, t)), new Promise((i) => setTimeout(i, t))]);
      r.cancel = () => {
      };
    }
  }, t), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    Be.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var R = /* @__PURE__ */ Symbol("@border-box-width"), F = /* @__PURE__ */ Symbol("@border-box-height"), B = /* @__PURE__ */ Symbol("@content-box-width"), _ = /* @__PURE__ */ Symbol("@content-box-height"), fe = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), Lt = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !he.has(e)) {
    e[B] = e.clientWidth, e[_] = e.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const a = i.contentBoxSize[0];
        a && (e[B] = Math.min(a.inlineSize, e.clientWidth), e[_] = Math.min(a.blockSize, e.clientHeight), t?.(e));
      }
    });
    he.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, Ot = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !fe.has(e)) {
    e[R] = e.offsetWidth, e[F] = e.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const a = i.borderBoxSize[0];
        a && (e[R] = Math.min(a.inlineSize, e.offsetWidth), e[F] = Math.min(a.blockSize, e.offsetHeight), t?.(e));
      }
    });
    fe.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, Wt = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), Ht = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, Rt = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, Ft = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, Bt = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, _t = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", It = `^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, $t = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), r, i = ""; e && (r = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, qt = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, Zt = (e, t) => {
  const n = typeof t == "string" ? t.trim() : "";
  if (!n || !e) return e ?? null;
  try {
    return e.querySelector(n) ?? (e.matches(n) ? e : null);
  } catch {
    return null;
  }
}, D = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, we = {};
function p(e, t, n, r = we) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function pe(e, t, n, r = we) {
  e?.removeEventListener?.(t, n, r);
}
var I = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? p(e, n, ...r) : p(e, n, r))), Dt = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([r, i]) => ((Te(i) ? [...i] : i) ?? [])?.map?.((a) => p(e, r, a)));
  }
}, Xt = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? pe(e, n, ...r) : pe(e, n, r))), Yt = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, Ut = (e, t, n) => {
  if (t == null || !(t instanceof Node) && t?.element == null) return !1;
  if (e == t || (e?.element ?? e) == (t?.element ?? t)) return !0;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const r = n.composedPath(), i = e?.element ?? e, a = t?.element ?? t;
    if (r.includes(i) && r.includes(a)) {
      const s = r.indexOf(i), o = r.indexOf(a);
      if (o >= 0 && s >= 0 && o < s) return !0;
    }
  }
  return !!(e?.contains?.(t?.element ?? t) || e?.getRootNode({ composed: !0 })?.host == (t?.element ?? t));
}, J = (e, t, n) => {
  const r = typeof t == "string" ? t.trim() : "";
  if (!r) return e ?? null;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const o = n.composedPath();
    for (const d of o) if (d instanceof HTMLElement || d instanceof Element) try {
      if (d.matches?.(r)) return d;
    } catch {
    }
  }
  let i = null, a = null, s = null;
  try {
    i = e?.matches?.(r) ? e : null;
    const o = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host;
    a = o?.matches?.(r) ? o : null, s = e?.closest?.(r) ?? i?.closest?.(r) ?? a?.closest?.(r) ?? null;
  } catch {
  }
  return i ?? s ?? a;
}, Kt = (e, t) => !!J(e, t), Jt = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === e || D(r, e), a = e.matches(":hover");
  if (!i && !a && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!J(e, t);
      {
        const s = i ? r : e.querySelector(":hover") || e, o = !!J(s, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || o;
      }
    } else if (t instanceof HTMLElement)
      return n === "parent" ? D(e, t) || !1 : D(t, e) || !1;
  }
  return !0;
}, Gt = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, _e = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Ie = globalThis[_e] ??= /* @__PURE__ */ new WeakMap(), $e = (e = document.documentElement) => Ie.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), Qt = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), en = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : $e(e)) || 1, G = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, M = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, tn = (e, t = null) => {
  const n = G(e) || 1, r = e?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, a = t ?? (M(e) || 0), s = typeof window < "u" ? window.visualViewport : null, o = [((s?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((s?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [d, h] = ue([i.left, i.top], o, a), [l, b] = ue([i.right, i.bottom], o, a), [f, u] = a == 0 || a == 3 ? [d, l] : [l, d], [c, m] = a == 0 || a == 1 ? [h, b] : [b, h], [w, ze] = a % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: f,
    top: c,
    right: u,
    bottom: m,
    width: w,
    height: ze
  };
}, nn = (e, t = null) => (t ?? M(e)) % 2 ? e[F] ?? e?.clientHeight : e[R] ?? e?.clientWidth, rn = (e, t = null) => (t ?? M(e)) % 2 ? e[R] ?? e?.clientWidth : e[F] ?? e?.clientHeight, an = (e, t = null) => (t ?? M(e)) % 2 ? e[_] ?? e?.clientHeight : e[B] ?? e?.clientWidth, on = (e, t = null) => (t ?? M(e)) % 2 ? e[B] ?? e?.clientWidth : e[_] ?? e?.clientHeight, qe = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), X = 80, xe = () => {
  try {
    return globalThis.navigator?.virtualKeyboard ?? null;
  } catch {
    return null;
  }
}, Q = () => {
  const e = xe();
  if (e)
    try {
      e.overlaysContent !== !0 && (e.overlaysContent = !0);
    } catch {
    }
}, ae = (e) => {
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
}, me = "", x = 0, g = 0, be = (e, t, n = 0, r = 0) => {
  const i = Math.max(0, Number(e) || 0), a = Math.max(0, Number(t) || 0), s = Number(n) || 0, o = Number(r) || 0;
  return {
    left: s,
    top: o,
    right: s + i,
    bottom: o + a,
    width: i,
    height: a
  };
}, sn = () => {
  if (typeof window > "u") return be(0, 0);
  const e = typeof document < "u" ? document.documentElement : null;
  return be(Number(e?.clientWidth) || Number(window.innerWidth) || 0, Number(e?.clientHeight) || Number(window.innerHeight) || 0);
}, Ee = () => {
  if (typeof window > "u") return {
    width: 0,
    height: 0,
    keyboard: 0
  };
  const e = window.visualViewport, t = Number(window.innerWidth) || 0, n = Number(window.innerHeight) || 0, r = Number(e?.width) || 0, i = Number(e?.height) || 0, a = Number(e?.offsetTop) || 0, s = Number(xe()?.boundingBox?.height) || 0, o = n > 0 && i > 0 ? n - i - a : 0, d = s >= X ? s : o >= X ? o : 0, h = Math.max(t, r), l = Math.max(n, i + a, d > 0 ? i + d : 0), b = typeof matchMedia < "u" && matchMedia("(orientation: landscape)")?.matches ? "l" : "p";
  b !== me && (me = b, x = 0, g = 0);
  const f = g > 0 && g - l >= X;
  return d > 0 || ae(document.activeElement) || f ? (x = Math.max(h, x), g = Math.max(l, g)) : (x = h, g = l), {
    width: x || h,
    height: g || l,
    keyboard: d
  };
}, ve = () => {
  typeof window > "u" || Ee().keyboard <= 0 && !ae(document.activeElement) || (window.scrollY || document.documentElement.scrollTop || document.body?.scrollTop) && window.scrollTo(0, 0);
}, Se = () => {
  Q();
  const e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, n = Ee(), r = {
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
    const i = screen?.availWidth + "px", a = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? a : i,
      "--avail-height": e ? i : a,
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
}, ee = Se(), cn = [[":root, :host, :scope", ee]], Ze = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, De = (e) => {
  const t = document.documentElement;
  Object.assign(ee, Se()), Object.entries(ee).forEach(([n, r]) => {
    const i = t?.style?.getPropertyValue(n);
    (!i || i != r) && t?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, Xe = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, W = { passive: !0 }, Ye = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      De(), e(), t = !1;
    }), t = !0);
  }, r = [];
  return r.push(p(navigator?.virtualKeyboard, "geometrychange", n, W)), r.push(p(window?.visualViewport, "scroll", () => {
    ve(), n();
  }, W)), r.push(p(window?.visualViewport, "resize", n, W)), r.push(p(screen?.orientation, "change", n)), r.push(p(window, "resize", n)), r.push(p(document?.documentElement, "fullscreenchange", n)), r.push(p(document, "DOMContentLoaded", n)), r.push(p(matchMedia("(orientation: portrait)"), "change", n)), r.push(p(matchMedia("(orientation: landscape)"), "change", n)), r.push(p(document, "focusin", () => {
    Q(), ae(document.activeElement) && (x = Math.max(x, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0), g = Math.max(g, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0)), ve(), n();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(document, "focusout", n, W)), Q(), n(), qe(() => n(), 100), () => r.forEach((i) => i());
}, un = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), Ye(() => {
      const t = Ze?.[Xe()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
}, A = new OffscreenCanvas(1, 1).getContext("2d"), Ae = (e, t) => {
  const n = getComputedStyle(e, "");
  if (t && n) {
    const r = n.getPropertyValue("font-weight") || "normal", i = n.getPropertyValue("font-size") || "16px", a = n.getPropertyValue("font-family") || "Times New Roman", s = n.getPropertyValue("font-stretch") || "normal";
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
      t.font = `${r} ${i} ${a}`;
    } catch {
    }
  }
}, Ue = (e, t) => {
  if (A) {
    Ae(t, A);
    try {
      return A.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, dn = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return Ue(t, e);
}, Ke = (e, t) => {
  const n = e?.value || "";
  if (A) {
    Ae(e, A);
    let r = 0;
    for (let i = 0; i < n.length; i++) {
      if (r = A.measureText(n.slice(0, i))?.width, r == null) return n.length;
      if (r != null && r >= t[0]) return Math.max(i - 1, 0);
    }
  }
  return n.length;
}, ln = (e, t) => {
  const n = e.getBoundingClientRect(), r = [t[0] - n.left / G(), t[1] - n.top / G()];
  return Ke(e, r);
}, Je = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = Pe(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, fn = (e, t, n, r = "floor") => {
  if (!e) return [0, 0];
  const i = e.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const a = Je(e, n?.layout), s = M(e), o = globalThis.getComputedStyle?.(e), d = parseFloat(o?.paddingLeft) || 0, h = parseFloat(o?.paddingTop) || 0, l = parseFloat(o?.paddingRight) || 0, b = parseFloat(o?.paddingBottom) || 0, f = Math.max(1, (i.width || e.clientWidth || 1) - d - l), u = Math.max(1, (i.height || e.clientHeight || 1) - h - b), c = [(t?.[0] || 0) - i.left - d, (t?.[1] || 0) - i.top - h];
  return je(c, [f, u], a, s, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, Ge = async (e) => {
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
        duration: We() ? 100 : 80,
        easing: "linear",
        delay: 0
      });
      let r = !1;
      const i = () => {
        r || (r = !0, a?.forEach?.((s) => s?.()), n.currentTime = 1, n.finish(), t?.());
      }, a = I(e, {
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
      const { resolve: n, reject: r, promise: i } = Promise.withResolvers(), a = requestAnimationFrame(n);
      let s = !1;
      const o = () => {
        s || (s = !0, d?.forEach?.((h) => h?.()), cancelAnimationFrame(a), n(performance.now()), t?.());
      }, d = I(e, {
        "u2-before-hide": [o, {
          once: !0,
          passive: !0
        }],
        "u2-before-show": [o, {
          once: !0,
          passive: !0
        }]
      });
      await i, o?.();
    }
}, Qe = async (e) => {
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
        r || (r = !0, a?.forEach?.((s) => s?.()), n.currentTime = 1, n.finish(), t?.());
      }, a = I(e, { "u2-before-show": [i, {
        once: !0,
        passive: !0
      }] });
      await n.finished, i?.();
    } else {
      const { resolve: n, reject: r, promise: i } = Promise.withResolvers(), a = requestAnimationFrame(n);
      let s = !1;
      const o = () => {
        s || (s = !0, d?.forEach?.((h) => h?.()), cancelAnimationFrame(a), n(performance.now()), t?.());
      }, d = I(e, {
        "u2-before-hide": [o, {
          once: !0,
          passive: !0
        }],
        "u2-before-show": [o, {
          once: !0,
          passive: !0
        }]
      });
      await i, o?.();
    }
}, et = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), k = globalThis[et] ??= /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), C = globalThis[tt] ??= /* @__PURE__ */ new WeakMap(), O = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Z = (e, t = "*") => typeof e != "string" ? t : e.trim() || t, T = (e, t) => {
  if (!e || typeof e.querySelectorAll != "function") return [];
  const n = Z(t, "");
  if (!n) return [];
  try {
    return Array.from(e.querySelectorAll(n) || []);
  } catch {
    return [];
  }
}, te = (e, t) => {
  if (!e || typeof e.matches != "function") return !1;
  const n = Z(t, "");
  if (!n) return !1;
  try {
    return !!e.matches(n);
  } catch {
    return !1;
  }
}, hn = (e, t) => {
  if (!C.has(e = O(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const a of i) if (a.contentBoxSize) {
        const s = a.contentBoxSize[0];
        s && n.forEach((o) => o?.(s, r));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, r), C.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "content-box" });
  }
  return C.get(e)?.push?.(t), { disconnect: () => C.get(e)?.splice?.(C.get(e)?.indexOf(t) || -1, 1) };
}, pn = (e, t) => {
  if (!k.has(e = O(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const a of i) if (a.borderBoxSize) {
        const s = a.borderBoxSize[0];
        s && n.forEach((o) => o?.(s, r));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, r), k.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "border-box" });
  }
  return k.get(e)?.push?.(t), { disconnect: () => k.get(e)?.splice?.(k.get(e)?.indexOf(t) || -1, 1) };
}, mn = (e, t, n) => {
  if (typeof e?.selector == "string") return oe(e, e?.selector, t, n);
  const r = new Set((t.split(",") || [t]).map((a) => a.trim())), i = new MutationObserver((a, s) => {
    for (const o of a) o.attributeName && r.has(o.attributeName) && n(o, s);
  });
  return (e?.element ?? e) instanceof Node && i.observe(e = O(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((a) => n({
    target: e,
    type: "attributes",
    attributeName: a,
    oldValue: e?.getAttribute?.(a)
  }, i)), i;
}, oe = (e, t, n, r) => {
  const i = Z(t), a = new Set([...n.split(",") || [n]].map((o) => o.trim())), s = new MutationObserver((o, d) => {
    for (const h of o) if (h.type == "childList") {
      const l = Array.from(h.addedNodes) || [], b = Array.from(h.removedNodes) || [];
      l.push(...Array.from(h.addedNodes || []).flatMap((f) => T(f, i))), b.push(...Array.from(h.removedNodes || []).flatMap((f) => T(f, i))), [...new Set(l)].filter((f) => te(f, i))?.map?.((f) => {
        a.forEach((u) => {
          r({
            target: f,
            type: "attributes",
            attributeName: u,
            oldValue: f?.getAttribute?.(u)
          }, d);
        });
      });
    } else te(h.target, i) && h.attributeName && a.has(h.attributeName) && r(h, d);
  });
  return s.observe(e = O(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...a],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), T(e, i).map((o) => a.forEach((d) => r({
    target: o,
    type: "attributes",
    attributeName: d,
    oldValue: o?.getAttribute?.(d)
  }, s))), s;
}, nt = (e, t = "*", n = (r, i) => {
}) => {
  const r = Z(t), i = (u) => {
    const c = Array.from(u || []) || [];
    return c.push(...Array.from(u || []).flatMap((m) => T(m, r))), [...Array.from(new Set(c).values())].filter((m) => te(m, r));
  };
  let a = null;
  const s = (u) => {
    const c = a?.deref?.(), m = i(u.addedNodes), w = i(u.removedNodes);
    (m.length > 0 || w.length > 0) && n?.({
      type: u.type,
      target: u.target,
      attributeName: u.attributeName,
      attributeNamespace: u.attributeNamespace,
      nextSibling: u.nextSibling,
      oldValue: u.oldValue,
      previousSibling: u.previousSibling,
      addedNodes: m,
      removedNodes: w
    }, c);
  }, o = (u) => {
    s({
      addedNodes: [u?.target].filter((c) => !!c),
      removedNodes: [u?.relatedTarget].filter((c) => !!c),
      type: "childList",
      target: u?.currentTarget
    });
  }, d = (u) => {
    s({
      addedNodes: [u?.relatedTarget].filter((c) => !!c),
      removedNodes: [u?.target].filter((c) => !!c),
      type: "childList",
      target: u?.currentTarget
    });
  }, h = (u) => {
    s({
      addedNodes: [u?.target].filter((c) => !!c),
      removedNodes: [u?.relatedTarget || document?.activeElement].filter((c) => !!c),
      type: "childList",
      target: u?.currentTarget
    });
  }, l = {
    passive: !0,
    capture: !1
  };
  if (r?.includes?.(":hover") && r?.includes?.(":active"))
    return e.addEventListener("pointerover", o, l), e.addEventListener("pointerout", d, l), e.addEventListener("pointerdown", o, l), e.addEventListener("pointerup", d, l), e.addEventListener("pointercancel", d, l), { disconnect: () => {
      e.removeEventListener("pointerover", o, l), e.removeEventListener("pointerout", d, l), e.removeEventListener("pointerdown", o, l), e.removeEventListener("pointerup", d, l), e.removeEventListener("pointercancel", d, l);
    } };
  if (r?.includes?.(":hover"))
    return e.addEventListener("pointerover", o, l), e.addEventListener("pointerout", d, l), { disconnect: () => {
      e.removeEventListener("pointerover", o, l), e.removeEventListener("pointerout", d, l);
    } };
  if (r?.includes?.(":active"))
    return e.addEventListener("pointerdown", o, l), e.addEventListener("pointerup", d, l), e.addEventListener("pointercancel", d, l), { disconnect: () => {
      e.removeEventListener("pointerdown", o, l), e.removeEventListener("pointerup", d, l), e.removeEventListener("pointercancel", d, l);
    } };
  if (r?.includes?.(":focus") && r?.includes?.(":focus-within") && r?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", o, l), e.addEventListener("focusout", d, l), e.addEventListener("click", h, l), { disconnect: () => {
      e.removeEventListener("focusin", o, l), e.removeEventListener("focusout", d, l), e.removeEventListener("click", h, l);
    } };
  const b = new MutationObserver((u, c) => {
    for (const m of u) m.type == "childList" && s(m);
  });
  a = new WeakRef(b), (e?.element ?? e) instanceof Node && b.observe(e = O(e), {
    childList: !0,
    subtree: !0
  });
  const f = T(e, r);
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, b), b;
}, bn = async (e = document.body) => {
  oe(e, "*", "data-hidden", (t, n) => {
    if (t.attributeName == "data-hidden") {
      const r = t.target;
      r.getAttribute("data-hidden") !== t.oldValue && Promise?.try?.(r.getAttribute("data-hidden") != null ? Qe : Ge, r, n)?.catch?.(console.warn.bind(console));
    }
  });
}, vn = (e = 100, t = 0.05, n = 8) => {
  const r = [];
  for (let o = 0; o < e; o++) r.push(o / e);
  const i = (o) => `calc(${o}rad * pi * 2)`, a = (o) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(o)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, s = (o) => [`calc(calc(0.5 + calc(cos(${i(o)}) * calc(0.5 - ${a(o)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(o)}) * calc(0.5 - ${a(o)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((o) => s(o).join(" ")).join(", ")})`
  };
}, Me = /* @__PURE__ */ new WeakMap(), rt = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), gn = (e, t) => {
  if (e) {
    if (t) {
      const n = Me.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((r) => rt(e, n, r));
    }
    return e;
  }
}, it = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), V = globalThis[it] ??= /* @__PURE__ */ new Map(), at = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, ot = (e) => (typeof e == "object" || typeof e == "function") && e != null, st = (e, t, n) => {
  if (!ot(e) && e != null) return e;
  let r = V.get(t);
  return r || (r = /* @__PURE__ */ new WeakMap(), V.set(t, r)), !r.has(e) && e != null && r.set(e, n), e;
}, yn = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, r] of t.entries()) st(e, n, r);
    return e;
  }
}, wn = (e, t) => {
  if (e) {
    if (t) {
      const n = y?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      y?.has?.(e) || y?.set?.(e, n), [...t?.values?.() || []].map((r) => ct(e, r, n));
    }
    return e;
  }
}, N = (e) => ({
  storeSet: at(V, e),
  mixinSet: y?.get?.(e),
  behaviorSet: Me?.get?.(e)
}), ct = (e, t, n) => {
  const r = new WeakRef(e);
  return n ||= y?.get?.(e), n?.has?.(t) || (n?.add?.(t), S?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((i) => !!i).join(" ")), t?.connect?.(r, t, N(e))), e;
}, ut = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), y = globalThis[ut] ??= /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), S = globalThis[dt] ??= /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), P = globalThis[lt] ??= /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), $ = globalThis[ft] ??= /* @__PURE__ */ new WeakMap(), ke = (e, t) => {
  typeof t == "string" && (t = P?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((s) => P?.get?.(s)).filter((s) => !!s)), i = y?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  S?.has?.(t) || S?.set?.(t, /* @__PURE__ */ new WeakSet()), y?.has?.(e) || y?.set?.(e, i);
  const a = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(a, t, N(e)), (r.has(t) || !S?.get?.(t)?.has?.(e)) && (t?.connect?.(a, t, N(e)), n.add($?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((s) => !!s).join(" "))), S?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(a, t, N(e))));
}, ne = /* @__PURE__ */ new Set(), ht = (e = typeof document < "u" ? document : null) => {
  if (e)
    return ne?.has?.(e) || (ne?.add?.(e), oe(e, "*", "data-mixin", (t) => re(t.target)), nt(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && re(n);
    }), Le(e)), e;
}, re = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => P?.get?.(n)).filter((n) => !!n))].map?.((n) => ke(e, n));
}, pt = (e, t) => {
  e.forEach((n) => t ? ke(n, t) : re(n));
}, mt = (e) => {
  for (const t of ne) pt(t?.querySelectorAll?.("[data-mixin]"), e);
}, bt = new FinalizationRegistry((e) => {
  P?.delete?.(e);
}), vt = (e, t) => {
  if (!$?.has?.(t)) {
    const n = e?.trim?.();
    n && ($?.set?.(t, n), P?.set?.(n, t), bt?.register?.(t, n), mt(t));
  }
};
ht(typeof document < "u" ? document : null);
var se = class {
  constructor(e = null) {
    e && vt(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return V.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return N(e);
  }
  get elements() {
    return S?.get?.(this);
  }
  get storage() {
    return V?.get?.(this.name || "");
  }
  get name() {
    return $?.get?.(this);
  }
}, xn = (e, t, n) => {
  const r = n;
  L(n) && (n = n.value);
  const i = (n = ie(n)) != null && n !== !1;
  return j(r, () => {
    e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, En = (e, t, n) => {
  if (!(t = typeof t == "string" ? ye(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const r = n;
  return L(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && j(r, () => {
    n != null ? e[t] = n : delete e[t];
  }), e;
}, Sn = (e, t, n) => {
  const r = e?.dataset;
  if (!t || !e || !r) return e;
  const i = n;
  return L(n) && (n = n?.value), t = ye(t), r?.[t] === (n = ie(n)) || (n == null || n === !1 ? delete r[t] : j(i, () => {
    typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
  })), e;
}, gt = (e, t) => e.style.removeProperty(ge(t)), An = (e, t, n) => {
  const r = e?.style;
  return !t || typeof t != "string" || !e || !r || j(n, () => {
    Ne(n) || L(n) || Ve(n) ? z(e, t, n) : n == null && gt(e, t);
  }), e;
}, Mn = (e, t, n) => {
  if (!t || !e) return e;
  const r = n;
  return L(n) && (n = n.value), t = ge(t), e?.getAttribute?.(t) === (n = ie(n)) || j(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
};
function Y(e, t) {
  const n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x, t.x), a = Math.max(e.y, t.y);
  return {
    left: n,
    top: r,
    right: i,
    bottom: a,
    width: i - n,
    height: a - r
  };
}
var H = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, U = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, K = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, yt = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), q = globalThis[yt] ??= /* @__PURE__ */ new WeakMap(), v = (e, t, n) => {
  const r = q.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), q.set(e, r);
}, ce = (e, t) => {
  const n = q.get(e), r = n?.get(t);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(t), n.size === 0 && q.delete(e);
  }
}, E = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, Ce = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, wt = class extends se {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:var(--z-max, 9999);box-sizing:border-box;border:1px dashed color-mix(in oklab, var(--color-primary, #5a7fff) 70%, transparent);background:color-mix(in oklab, var(--color-primary, #5a7fff) 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let i = !1, a = {
      x: 0,
      y: 0
    }, s = {
      x: 0,
      y: 0
    };
    const o = (c) => {
      const m = t.getBoundingClientRect();
      return {
        x: c.clientX - m.left,
        y: c.clientY - m.top
      };
    }, d = () => {
      const c = Y(a, s);
      if (c.width < 1 && c.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${c.left}px`, n.style.top = `${c.top}px`, n.style.width = `${c.width}px`, n.style.height = `${c.height}px`;
    }, h = (c) => {
      c.button === 0 && (c.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (c.target === t || t.contains(c.target)) && (i = !0, a = o(c), s = { ...a }, t.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(H.start, {
        bubbles: !0,
        detail: {
          a: { ...a },
          b: { ...s },
          host: t
        }
      })), d()));
    }, l = (c) => {
      if (!i) return;
      s = o(c), d();
      const m = Y(a, s);
      t.dispatchEvent(new CustomEvent(H.move, {
        bubbles: !0,
        detail: {
          a: { ...a },
          b: { ...s },
          box: m,
          host: t
        }
      }));
    }, b = (c) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(c.pointerId);
      } catch {
      }
      const m = Y(a, s);
      t.dispatchEvent(new CustomEvent(H.end, {
        bubbles: !0,
        detail: {
          a: { ...a },
          b: { ...s },
          box: m,
          host: t
        }
      }));
    }, f = (c) => {
      i && b(c);
    }, u = (c) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(H.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return v(t, "ui-junction-select", () => {
      n.remove();
    }), v(t, "ui-junction-select", p(t, "pointerdown", h)), v(t, "ui-junction-select", p(t, "pointermove", l)), v(t, "ui-junction-select", p(t, "pointerup", f)), v(t, "ui-junction-select", p(t, "pointercancel", u)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ce(t, "ui-junction-select"), this;
  }
}, xt = class extends se {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    z(t, "--jx-drag-x", E(t, "--jx-drag-x")), z(t, "--jx-drag-y", E(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = Ce(t, "data-junction-drag-handle", t);
    let i = !1, a = 0, s = 0, o = 0, d = 0;
    const h = (f) => {
      f.button === 0 && (f.target !== r && !r.contains(f.target) || (i = !0, a = f.clientX, s = f.clientY, o = E(t, "--jx-drag-x"), d = E(t, "--jx-drag-y"), r.setPointerCapture(f.pointerId), t.dispatchEvent(new CustomEvent(U.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: f.clientX,
          clientY: f.clientY,
          baseX: o,
          baseY: d
        }
      }))));
    }, l = (f) => {
      if (!i) return;
      const u = f.clientX - a, c = f.clientY - s, m = o + u, w = d + c;
      z(t, "--jx-drag-x", m), z(t, "--jx-drag-y", w), t.dispatchEvent(new CustomEvent(U.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: u,
          dy: c,
          x: m,
          y: w
        }
      }));
    }, b = (f) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(f.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(U.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: E(t, "--jx-drag-x"),
            y: E(t, "--jx-drag-y")
          }
        }));
      }
    };
    return v(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), v(t, "ui-junction-drag", p(r, "pointerdown", h)), v(t, "ui-junction-drag", p(r, "pointermove", l)), v(t, "ui-junction-drag", p(r, "pointerup", b)), v(t, "ui-junction-drag", p(r, "pointercancel", b)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ce(t, "ui-junction-drag"), this;
  }
}, Et = class extends se {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Ce(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, a = 0, s = 0, o = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), h = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), l = (u) => {
      u.button === 0 && (u.target !== n && !n.contains(u.target) || (r = !0, i = u.clientX, a = u.clientY, s = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(K.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: s,
          height: o
        }
      }))));
    }, b = (u) => {
      if (!r) return;
      const c = Math.max(d, s + (u.clientX - i)), m = Math.max(h, o + (u.clientY - a));
      t.style.width = `${c}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(K.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: c,
          height: m
        }
      }));
    }, f = (u) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(u.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(K.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return v(t, "ui-junction-resize", p(n, "pointerdown", l)), v(t, "ui-junction-resize", p(n, "pointermove", b)), v(t, "ui-junction-resize", p(n, "pointerup", f)), v(t, "ui-junction-resize", p(n, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ce(t, "ui-junction-resize"), this;
  }
};
new wt();
new xt();
new Et();
export {
  se as DOMMixin,
  xt as JunctionDragMixin,
  Et as JunctionResizeMixin,
  wt as JunctionSelectMixin,
  _t as MATCH,
  Kt as MOC,
  J as MOCElement,
  Tt as RAFBehavior,
  It as REGEX,
  Nt as ROOT,
  vn as WavyShapedCircle,
  Mt as __exportProperties,
  de as __registeredCssProperties,
  p as addEvent,
  I as addEvents,
  Dt as addEventsList,
  ht as addRoot,
  Qe as animateHide,
  Ge as animateShow,
  ee as availSize,
  rn as bbh,
  nn as bbw,
  rt as bindBehavior,
  ct as bindMixins,
  st as bindStore,
  F as borderBoxHeight,
  R as borderBoxWidth,
  Me as boundBehaviors,
  y as boundMixinSet,
  on as cbh,
  an as cbw,
  Qt as changeZoom,
  cn as classes,
  Ke as computeCaretPosition,
  ln as computeCaretPositionFromClient,
  Ut as containsOrSelf,
  _ as contentBoxHeight,
  B as contentBoxWidth,
  $t as createElementVanilla,
  be as createFixedOverlayViewport,
  gt as deleteStyleProperty,
  kt as detectMobile,
  Ot as doBorderObserve,
  Lt as doContentObserve,
  Q as ensureVirtualKeyboardOverlay,
  un as fixOrientToScreen,
  en as fixedClientZoom,
  Se as getAvailSize,
  tn as getBoundingOrientRect,
  Xe as getCorrectOrientation,
  N as getElementRelated,
  Yt as getEventTarget,
  Re as getOffsetParent,
  Ct as getOffsetParentChain,
  at as getStoresOfElement,
  Gt as getZoom,
  Mn as handleAttribute,
  Sn as handleDataset,
  xn as handleHidden,
  En as handleProperty,
  An as handleStyleChange,
  D as hasParent,
  Ht as html,
  Zt as includeSelf,
  Bt as indexOf,
  Ae as initTextStyle,
  bn as initVisibility,
  qt as isElement,
  Jt as isInFocus,
  We as isMobile,
  zt as isNearlyIdentity,
  Ft as isValidParent,
  Fe as makeRAFCycle,
  dn as measureInputInFocus,
  Ue as measureText,
  q as mixinDisposers,
  S as mixinElements,
  $ as mixinNamespace,
  P as mixinRegistry,
  bt as nameRegistryF,
  V as namedStoreMaps,
  mn as observeAttribute,
  oe as observeAttributeBySelector,
  pn as observeBorderBox,
  nt as observeBySelector,
  hn as observeContentBox,
  fe as onBorderObserve,
  he as onContentObserve,
  M as orientOf,
  Ze as orientationNumberMap,
  we as passiveOpts,
  sn as readFixedOverlayViewport,
  Je as readLauncherLayoutFromElement,
  gn as reflectBehaviors,
  wn as reflectMixins,
  yn as reflectStores,
  vt as registerMixin,
  pe as removeEvent,
  Xt as removeEvents,
  fn as resolveGridCellFromClientPoint,
  ne as roots,
  Pt as setAttributes,
  Vt as setAttributesIfNull,
  Rt as setChecked,
  jt as setIdleInterval,
  Be as throttleMap,
  G as unfixedClientZoom,
  re as updateAllMixins,
  ke as updateMixinAttributes,
  pt as updateMixinAttributesAll,
  mt as updateMixinAttributesAllInRoots,
  De as updateVP,
  Wt as url,
  Ye as whenAnyScreenChanges,
  $e as zoomOf,
  Ie as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwgfSBmcm9tIFwiQGZlc3QtbGliL2NvcmVcIjtcbmltcG9ydCB7IG9ic2VydmVTdHlsZVRyZWUsIHNldFN0eWxlUHJvcGVydHkgfSBmcm9tIFwiQGZlc3QtbGliL3N0eWxlLWxpYlwiO1xuXG5leHBvcnQgKiBmcm9tIFwiQGZlc3QtbGliL3N0eWxlLWxpYlwiXG5cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvUHJvcGVydGllcy50c1xudmFyIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNcIik7XG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyA9IGdsb2JhbFRoaXNbX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5bXG5cdHtcblx0XHRuYW1lOiBcIi0tc2NyZWVuLXdpZHRoXCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4taGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS12aXN1YWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtYW1wbFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jbGlwLWZyZXFcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtd2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWF2YWlsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGl4ZWwtcmF0aW9cIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMVwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXhcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcGVyY2VudC15XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC1sZWZ0XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcm9sbC10b3BcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWRyYWcteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcmVzaXplLXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2hpZnQteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtcC1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLW9zLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1ydi1ncmlkLXJcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC14XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2VsbC15XCIsXG5cdFx0c3ludGF4OiBcIjxpbnRlZ2VyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH1cbl0uZm9yRWFjaCgob3B0aW9ucykgPT4ge1xuXHRpZiAodHlwZW9mIENTUyA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBDU1M/LnJlZ2lzdGVyUHJvcGVydHkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdGNvbnN0IG5hbWUgPSBTdHJpbmcob3B0aW9ucz8ubmFtZSB8fCBcIlwiKS50cmltKCk7XG5cdGlmICghbmFtZSB8fCBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmhhcyhuYW1lKSkgcmV0dXJuO1xuXHR0cnkge1xuXHRcdENTUy5yZWdpc3RlclByb3BlcnR5KG9wdGlvbnMpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKCEoU3RyaW5nKGU/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnZhbGlkbW9kaWZpY2F0aW9uZXJyb3JcIikpIGNvbnNvbGUud2FybihlKTtcblx0fSBmaW5hbGx5IHtcblx0XHRfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLmFkZChuYW1lKTtcblx0fVxufSk7XG52YXIgX19leHBvcnRQcm9wZXJ0aWVzID0gKCkgPT4ge307XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9EZXRlY3QudHNcbnZhciBpc01vYmlsZSA9ICgpID0+IHtcblx0bGV0IGNoZWNrID0gbmF2aWdhdG9yPy51c2VyQWdlbnREYXRhPy5tb2JpbGUgfHwgZmFsc2U7XG5cdCgoYSkgPT4ge1xuXHRcdGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkgY2hlY2sgPSB0cnVlO1xuXHR9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgZ2xvYmFsVGhpcy5vcGVyYSk7XG5cdHJldHVybiBjaGVjaztcbn07XG52YXIgZGV0ZWN0TW9iaWxlID0gKCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC9BbmRyb2lkL2ksXG5cdFx0L3dlYk9TL2ksXG5cdFx0L2lQaG9uZS9pLFxuXHRcdC9pUGFkL2ksXG5cdFx0L2lQb2QvaSxcblx0XHQvQmxhY2tCZXJyeS9pLFxuXHRcdC9XaW5kb3dzIFBob25lL2lcblx0XS5zb21lKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2guYmluZChuYXZpZ2F0b3IudXNlckFnZW50KSkgJiYgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgJiYgZ2xvYmFsVGhpcy5tYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9VdGlscy50c1xudmFyIGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrID0gKCkgPT4gKHtcblx0ZGlkVGltZW91dDogZmFsc2UsXG5cdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcbn0pO1xudmFyIHJ1bldoZW5JZGxlJDEgPSAoY2IsIHRpbWVvdXQgPSAxZTMpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayhjYiwgeyB0aW1lb3V0IH0pO1xuXHRyZXR1cm4gc2V0VGltZW91dCgoKSA9PiBjYihjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjaygpKSwgMCk7XG59O1xudmFyIGdldE9mZnNldFBhcmVudCA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiBlbGVtZW50Py5vZmZzZXRQYXJlbnQgPz8gZWxlbWVudD8uaG9zdDtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4gPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBwYXJlbnRzID0gW107XG5cdGxldCBjdXJyZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRjb25zdCBwYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoY3VycmVudCk7XG5cdFx0aWYgKHBhcmVudCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MSHRtbEVsZW1lbnQpIGJyZWFrO1xuXHRcdGlmIChjdXJyZW50ID0gcGFyZW50KSBwYXJlbnRzLnB1c2goY3VycmVudCk7XG5cdH1cblx0cmV0dXJuIHBhcmVudHM7XG59O1xudmFyIGlzTmVhcmx5SWRlbnRpdHkgPSAobWF0cml4LCBlcHNpbG9uID0gMWUtNikgPT4ge1xuXHRyZXR1cm4gTWF0aC5hYnMobWF0cml4LmEgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmIpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYykgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5kIC0gMSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5lKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmYpIDwgZXBzaWxvbjtcbn07XG52YXIgbWFrZVJBRkN5Y2xlID0gKCkgPT4ge1xuXHRjb25zdCBjb250cm9sID0ge1xuXHRcdGNhbmNlbGVkOiBmYWxzZSxcblx0XHRyQUZzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuXHRcdGxhc3Q6IG51bGwsXG5cdFx0Y2FuY2VsKCkge1xuXHRcdFx0dGhpcy5jYW5jZWxlZCA9IHRydWU7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxhc3QpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHRzaGVkdWxlKGNiKSB7XG5cdFx0XHR0aGlzLnJBRnMuYWRkKGNiKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0fTtcblx0KGFzeW5jICgpID0+IHtcblx0XHR3aGlsZSAoIWNvbnRyb2w/LmNhbmNlbGVkKSB7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbCgoY29udHJvbD8uckFGcz8udmFsdWVzPy4oKSA/PyBbXSk/Lm1hcD8uKChyQUYpID0+IFByb21pc2UudHJ5KHJBRik/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpKSk7XG5cdFx0XHRjb250cm9sLnJBRnM/LmNsZWFyPy4oKTtcblx0XHRcdGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHtcblx0XHRcdFx0Y29udHJvbC5sYXN0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcyk7XG5cdFx0XHR9KTtcblx0XHRcdGVsc2UgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJlcywgMTYpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KSgpO1xuXHRyZXR1cm4gY29udHJvbDtcbn07XG52YXIgUkFGQmVoYXZpb3IgPSAoc2hlZCA9IG1ha2VSQUZDeWNsZSgpKSA9PiB7XG5cdHJldHVybiAoY2IpID0+IHNoZWQuc2hlZHVsZShjYik7XG59O1xudmFyIFJPT1QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xudmFyIHNldEF0dHJpYnV0ZXNJZk51bGwgPSAoZWxlbWVudCwgYXR0cnMgPSB7fSkgPT4ge1xuXHRpZiAoIWF0dHJzIHx8IHR5cGVvZiBhdHRycyAhPSBcIm9iamVjdFwiIHx8ICFlbGVtZW50KSByZXR1cm47XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0Y29uc3Qgb2xkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgaWYgKHZhbHVlICE9IG9sZCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgb2xkID09IFwiXCIgPyB2YWx1ZSA/PyBvbGQgOiBvbGQgPz8gdmFsdWUpO1xuXHR9KTtcbn07XG52YXIgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdHJldHVybiBBcnJheS5mcm9tKE9iamVjdC5lbnRyaWVzKGF0dHJzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPz8gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSkpO1xuXHR9KTtcbn07XG52YXIgdGhyb3R0bGVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIHNldElkbGVJbnRlcnZhbCA9IChjYiwgdGltZW91dCA9IDFlMywgLi4uYXJncykgPT4ge1xuXHRjb25zdCBzdGF0dXMgPSB7XG5cdFx0cnVubmluZzogdHJ1ZSxcblx0XHRjYW5jZWw6ICgpID0+IHtcblx0XHRcdHN0YXR1cy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXHRydW5XaGVuSWRsZSQxKGFzeW5jICgpID0+IHtcblx0XHRpZiAoIWNiIHx8IHR5cGVvZiBjYiAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0XHR3aGlsZSAoc3RhdHVzLnJ1bm5pbmcpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKFtQcm9taXNlLnRyeShjYiwgLi4uYXJncyksIG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHRpbWVvdXQpKV0pLmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbnkoW25ldyBQcm9taXNlKChyKSA9PiBydW5XaGVuSWRsZSQxKHIsIHRpbWVvdXQpKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSk7XG5cdFx0fVxuXHRcdHN0YXR1cy5jYW5jZWwgPSAoKSA9PiB7fTtcblx0fSwgdGltZW91dCk7XG5cdHJldHVybiBzdGF0dXM/LmNhbmNlbDtcbn07XG5pZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPSBcInVuZGVmaW5lZFwiKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXN5bmMgKCkgPT4ge1xuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdHRocm90dGxlTWFwLmZvckVhY2goKGNiKSA9PiBjYj8uKCkpO1xuXHRcdGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpO1xuXHR9XG59KTtcbnZhciBib3JkZXJCb3hXaWR0aCA9IFN5bWJvbChcIkBib3JkZXItYm94LXdpZHRoXCIpO1xudmFyIGJvcmRlckJveEhlaWdodCA9IFN5bWJvbChcIkBib3JkZXItYm94LWhlaWdodFwiKTtcbnZhciBjb250ZW50Qm94V2lkdGggPSBTeW1ib2woXCJAY29udGVudC1ib3gtd2lkdGhcIik7XG52YXIgY29udGVudEJveEhlaWdodCA9IFN5bWJvbChcIkBjb250ZW50LWJveC1oZWlnaHRcIik7XG52YXIgb25Cb3JkZXJPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgb25Db250ZW50T2JzZXJ2ZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGRvQ29udGVudE9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Db250ZW50T2JzZXJ2ZS5oYXMoZWxlbWVudCkpIHtcblx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuXHRcdGVsZW1lbnRbY29udGVudEJveEhlaWdodF0gPSBlbGVtZW50LmNsaWVudEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgY29udGVudEJveFNpemUgPSBlbnRyeS5jb250ZW50Qm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGNvbnRlbnRCb3hTaXplKSB7XG5cdFx0XHRcdFx0ZWxlbWVudFtjb250ZW50Qm94V2lkdGhdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5jbGllbnRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IE1hdGgubWluKGNvbnRlbnRCb3hTaXplLmJsb2NrU2l6ZSwgZWxlbWVudC5jbGllbnRIZWlnaHQpO1xuXHRcdFx0XHRcdGNiPy4oZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRvbkNvbnRlbnRPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImNvbnRlbnQtYm94XCIgfSk7XG5cdH1cbn07XG52YXIgZG9Cb3JkZXJPYnNlcnZlID0gKGVsZW1lbnQsIGNiID0gKCkgPT4ge30pID0+IHtcblx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuXHRpZiAoIW9uQm9yZGVyT2JzZXJ2ZS5oYXMoZWxlbWVudCkpIHtcblx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgYm9yZGVyQm94U2l6ZSA9IGVudHJ5LmJvcmRlckJveFNpemVbMF07XG5cdFx0XHRcdGlmIChib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hXaWR0aF0gPSBNYXRoLm1pbihib3JkZXJCb3hTaXplLmlubGluZVNpemUsIGVsZW1lbnQub2Zmc2V0V2lkdGgpO1xuXHRcdFx0XHRcdGVsZW1lbnRbYm9yZGVyQm94SGVpZ2h0XSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50Lm9mZnNldEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQm9yZGVyT2JzZXJ2ZS5zZXQoZWxlbWVudCwgb2JzZXJ2ZXIpO1xuXHRcdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJib3JkZXItYm94XCIgfSk7XG5cdH1cbn07XG52YXIgdXJsID0gKHR5cGUsIC4uLnNvdXJjZSkgPT4ge1xuXHRyZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihzb3VyY2UsIHsgdHlwZSB9KSk7XG59O1xudmFyIGh0bWwgPSAoc291cmNlLCB0eXBlID0gXCJ0ZXh0L2h0bWxcIikgPT4ge1xuXHRjb25zdCBwYXJzZWQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHNvdXJjZSwgdHlwZSk7XG5cdHJldHVybiBwYXJzZWQucXVlcnlTZWxlY3RvcihcInRlbXBsYXRlXCIpID8/IHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwiKlwiKTtcbn07XG52YXIgc2V0Q2hlY2tlZCA9IChpbnB1dCwgdmFsdWUsIGV2KSA9PiB7XG5cdGlmICh2YWx1ZSAhPSBudWxsICYmIGlucHV0LmNoZWNrZWQgIT0gdmFsdWUpIHtcblx0XHRpZiAoaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJjaGVja2JveFwiIHx8IGlucHV0Py5bXCJ0eXBlXCJdID09IFwicmFkaW9cIiAmJiAhaW5wdXQ/LmNoZWNrZWQpIHtcblx0XHRcdGlucHV0Py5jbGljaz8uKCk7XG5cdFx0XHRldj8ucHJldmVudERlZmF1bHQ/LigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbnB1dC5jaGVja2VkID0gISF2YWx1ZTtcblx0XHRcdGlucHV0Py5kaXNwYXRjaEV2ZW50Py4obmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fVxufTtcbnZhciBpc1ZhbGlkUGFyZW50ID0gKHBhcmVudCkgPT4ge1xuXHRyZXR1cm4gcGFyZW50ICE9IG51bGwgJiYgcGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgIShwYXJlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50IHx8IHBhcmVudCBpbnN0YW5jZW9mIEhUTUxCb2R5RWxlbWVudCkgPyBwYXJlbnQgOiBudWxsO1xufTtcbnZhciBpbmRleE9mID0gKGVsZW1lbnQsIG5vZGUpID0+IHtcblx0aWYgKGVsZW1lbnQgPT0gbnVsbCB8fCBub2RlID09IG51bGwpIHJldHVybiAtMTtcblx0cmV0dXJuIEFycmF5LmZyb20oZWxlbWVudD8uY2hpbGROb2RlcyA/PyBbXSk/LmluZGV4T2Y/Lihub2RlKSA/PyAtMTtcbn07XG52YXIgTUFUQ0ggPSBcIigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKilcIjtcbnZhciBSRUdFWCA9IFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCI7XG52YXIgY3JlYXRlRWxlbWVudFZhbmlsbGEgPSAoc2VsZWN0b3IpID0+IHtcblx0aWYgKHNlbGVjdG9yID09IFwiOmZyYWdtZW50OlwiKSByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50LmJpbmQoZG9jdW1lbnQpO1xuXHRmb3IgKHZhciBub2RlID0gY3JlYXRlKFwiZGl2XCIpLCBtYXRjaCwgY2xhc3NOYW1lID0gXCJcIjsgc2VsZWN0b3IgJiYgKG1hdGNoID0gc2VsZWN0b3IubWF0Y2goXCJeKD86KC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSl8XiMoLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcLigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKil8XlxcXFxbKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKSg/OihbKiR8fl5dPz0pKFtcXFwiJ10pKCg/Oig/PShcXFxcXFxcXD8pKVxcXFw4LikqPylcXFxcNik/XFxcXF1cIikpOykge1xuXHRcdGlmIChtYXRjaFsxXSkgbm9kZSA9IGNyZWF0ZShtYXRjaFsxXSk7XG5cdFx0aWYgKG1hdGNoWzJdKSBub2RlLmlkID0gbWF0Y2hbMl07XG5cdFx0aWYgKG1hdGNoWzNdKSBjbGFzc05hbWUgKz0gXCIgXCIgKyBtYXRjaFszXTtcblx0XHRpZiAobWF0Y2hbNF0pIG5vZGUuc2V0QXR0cmlidXRlKG1hdGNoWzRdLCBtYXRjaFs3XSB8fCBcIlwiKTtcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG5cdH1cblx0aWYgKGNsYXNzTmFtZSkgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWUuc2xpY2UoMSk7XG5cdHJldHVybiBub2RlO1xufTtcbnZhciBpc0VsZW1lbnQgPSAoZWwpID0+IHtcblx0cmV0dXJuIGVsICE9IG51bGwgJiYgKGVsIGluc3RhbmNlb2YgTm9kZSB8fCBlbCBpbnN0YW5jZW9mIFRleHQgfHwgZWwgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgQ29tbWVudCB8fCBlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgPyBlbCA6IG51bGw7XG59O1xudmFyIGluY2x1ZGVTZWxmID0gKHRhcmdldCwgc2VsZWN0b3IpID0+IHtcblx0Y29uc3Qgc2VsID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IudHJpbSgpIDogXCJcIjtcblx0aWYgKCFzZWwgfHwgIXRhcmdldCkgcmV0dXJuIHRhcmdldCA/PyBudWxsO1xuXHR0cnkge1xuXHRcdHJldHVybiB0YXJnZXQucXVlcnlTZWxlY3RvcihzZWwpID8/ICh0YXJnZXQubWF0Y2hlcyhzZWwpID8gdGFyZ2V0IDogbnVsbCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xudmFyIGhhc1BhcmVudCA9IChjdXJyZW50LCBwYXJlbnQpID0+IHtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRpZiAoIShjdXJyZW50Py5lbGVtZW50ID8/IGN1cnJlbnQpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKChjdXJyZW50Py5lbGVtZW50ID8/IGN1cnJlbnQpID09PSAocGFyZW50Py5lbGVtZW50ID8/IHBhcmVudCkpIHJldHVybiB0cnVlO1xuXHRcdGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQgPz8gKGN1cnJlbnQucGFyZW50Tm9kZSA9PSBjdXJyZW50Py5nZXRSb290Tm9kZT8uKHsgY29tcG9zZWQ6IHRydWUgfSkgPyBjdXJyZW50Py5nZXRSb290Tm9kZT8uKHsgY29tcG9zZWQ6IHRydWUgfSk/Lmhvc3QgOiBjdXJyZW50Py5wYXJlbnROb2RlKTtcblx0fVxufTtcbnZhciBwYXNzaXZlT3B0cyA9IHt9O1xuZnVuY3Rpb24gYWRkRXZlbnQodGFyZ2V0LCB0eXBlLCBjYiwgb3B0cyA9IHBhc3NpdmVPcHRzKSB7XG5cdHRhcmdldD8uYWRkRXZlbnRMaXN0ZW5lcj8uKHR5cGUsIGNiLCBvcHRzKTtcblx0Y29uc3Qgd3IgPSB0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHRhcmdldCA9PSBcImZ1bmN0aW9uXCIgJiYgIXRhcmdldD8uZGVyZWYgPyBuZXcgV2Vha1JlZih0YXJnZXQpIDogdGFyZ2V0O1xuXHRyZXR1cm4gKCkgPT4gd3I/LmRlcmVmPy4oKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKHR5cGUsIGNiLCBvcHRzKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG52YXIgYWRkRXZlbnRzID0gKHJvb3QsIGhhbmRsZXJzKSA9PiB7XG5cdHJvb3QgPSByb290IGluc3RhbmNlb2YgV2Vha1JlZiA/IHJvb3QuZGVyZWYoKSA6IHJvb3Q7XG5cdHJldHVybiBbLi4uT2JqZWN0LmVudHJpZXMoaGFuZGxlcnMpXS5tYXA/LigoW25hbWUsIGNiXSkgPT4gQXJyYXkuaXNBcnJheShjYikgPyBhZGRFdmVudChyb290LCBuYW1lLCAuLi5jYikgOiBhZGRFdmVudChyb290LCBuYW1lLCBjYikpO1xufTtcbnZhciBhZGRFdmVudHNMaXN0ID0gKGVsLCBldmVudHMpID0+IHtcblx0aWYgKGV2ZW50cykge1xuXHRcdGxldCBlbnRyaWVzID0gZXZlbnRzO1xuXHRcdGlmIChldmVudHMgaW5zdGFuY2VvZiBNYXApIGVudHJpZXMgPSBbLi4uZXZlbnRzLmVudHJpZXMoKV07XG5cdFx0ZWxzZSBlbnRyaWVzID0gWy4uLk9iamVjdC5lbnRyaWVzKGV2ZW50cyldO1xuXHRcdHJldHVybiBlbnRyaWVzLm1hcCgoW25hbWUsIGxpc3RdKSA9PiAoKGlzQXJyYXlPckl0ZXJhYmxlKGxpc3QpID8gWy4uLmxpc3RdIDogbGlzdCkgPz8gW10pPy5tYXA/LigoY2JzKSA9PiB7XG5cdFx0XHRyZXR1cm4gYWRkRXZlbnQoZWwsIG5hbWUsIGNicyk7XG5cdFx0fSkpO1xuXHR9XG59O1xudmFyIHJlbW92ZUV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gcmVtb3ZlRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogcmVtb3ZlRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgZ2V0RXZlbnRUYXJnZXQgPSAoZXYpID0+IHtcblx0aWYgKCFldikgcmV0dXJuIG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuIG5vZGU7XG5cdH1cblx0Y29uc3QgdGFyZ2V0ID0gZXY/LnRhcmdldDtcblx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiB0YXJnZXQ7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBjb250YWluc09yU2VsZiA9IChhLCBiLCBldikgPT4ge1xuXHRpZiAoYiA9PSBudWxsIHx8ICEoYiBpbnN0YW5jZW9mIE5vZGUpICYmIGI/LmVsZW1lbnQgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoYSA9PSBiIHx8IChhPy5lbGVtZW50ID8/IGEpID09IChiPy5lbGVtZW50ID8/IGIpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGNvbnN0IGFFbCA9IGE/LmVsZW1lbnQgPz8gYTtcblx0XHRjb25zdCBiRWwgPSBiPy5lbGVtZW50ID8/IGI7XG5cdFx0aWYgKHBhdGguaW5jbHVkZXMoYUVsKSAmJiBwYXRoLmluY2x1ZGVzKGJFbCkpIHtcblx0XHRcdGNvbnN0IGFJbmRleCA9IHBhdGguaW5kZXhPZihhRWwpO1xuXHRcdFx0Y29uc3QgYkluZGV4ID0gcGF0aC5pbmRleE9mKGJFbCk7XG5cdFx0XHRpZiAoYkluZGV4ID49IDAgJiYgYUluZGV4ID49IDAgJiYgYkluZGV4IDwgYUluZGV4KSByZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKGE/LmNvbnRhaW5zPy4oYj8uZWxlbWVudCA/PyBiKSB8fCBhPy5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0ID09IChiPy5lbGVtZW50ID8/IGIpKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIGZhbHNlO1xufTtcbnZhciBNT0NFbGVtZW50ID0gKGVsZW1lbnQsIHNlbGVjdG9yLCBldikgPT4ge1xuXHRjb25zdCBzZWwgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBzZWxlY3Rvci50cmltKCkgOiBcIlwiO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGVsZW1lbnQgPz8gbnVsbDtcblx0aWYgKGV2Py5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGV2LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBwYXRoKSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB0cnkge1xuXHRcdFx0aWYgKG5vZGUubWF0Y2hlcz8uKHNlbCkpIHJldHVybiBub2RlO1xuXHRcdH0gY2F0Y2gge31cblx0fVxuXHRsZXQgc2VsZiA9IG51bGw7XG5cdGxldCBob3N0TWF0Y2hlZCA9IG51bGw7XG5cdGxldCBjbG9zZXN0ID0gbnVsbDtcblx0dHJ5IHtcblx0XHRzZWxmID0gZWxlbWVudD8ubWF0Y2hlcz8uKHNlbCkgPyBlbGVtZW50IDogbnVsbDtcblx0XHRjb25zdCBob3N0ID0gKGVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkgPz8gZWxlbWVudD8ucGFyZW50RWxlbWVudD8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSk/Lmhvc3Q7XG5cdFx0aG9zdE1hdGNoZWQgPSBob3N0Py5tYXRjaGVzPy4oc2VsKSA/IGhvc3QgOiBudWxsO1xuXHRcdGNsb3Nlc3QgPSBlbGVtZW50Py5jbG9zZXN0Py4oc2VsKSA/PyBzZWxmPy5jbG9zZXN0Py4oc2VsKSA/PyBob3N0TWF0Y2hlZD8uY2xvc2VzdD8uKHNlbCkgPz8gbnVsbDtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gc2VsZiA/PyBjbG9zZXN0ID8/IGhvc3RNYXRjaGVkO1xufTtcbnZhciBNT0MgPSAoZWxlbWVudCwgc2VsZWN0b3IpID0+IHtcblx0cmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvcik7XG59O1xudmFyIGlzSW5Gb2N1cyA9IChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCwgZGlyID0gXCJwYXJlbnRcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKGVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmICFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSh7XG5cdFx0Y2hlY2tPcGFjaXR5OiB0cnVlLFxuXHRcdGNoZWNrVmlzaWJpbGl0eUNTUzogdHJ1ZVxuXHR9KSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoIWVsZW1lbnQuY2hlY2tWaXNpYmlsaXR5ICYmIGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsICYmIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gIT09IFwiZml4ZWRcIikgcmV0dXJuIGZhbHNlO1xuXHRsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0d2hpbGUgKGFjdGl2ZSAmJiBhY3RpdmUuc2hhZG93Um9vdCAmJiBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50KSBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuXHRjb25zdCBpc0ZvY3VzZWQgPSBhY3RpdmUgPT09IGVsZW1lbnQgfHwgaGFzUGFyZW50KGFjdGl2ZSwgZWxlbWVudCk7XG5cdGNvbnN0IGlzSG92ZXJlZCA9IGVsZW1lbnQubWF0Y2hlcyhcIjpob3ZlclwiKTtcblx0aWYgKCFpc0ZvY3VzZWQgJiYgIWlzSG92ZXJlZCAmJiAhc2VsZWN0b3JPckVsZW1lbnQpIHJldHVybiBmYWxzZTtcblx0aWYgKHNlbGVjdG9yT3JFbGVtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBzZWxlY3Rvck9yRWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKGRpciA9PT0gXCJwYXJlbnRcIikgcmV0dXJuICEhTU9DRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gaXNGb2N1c2VkID8gYWN0aXZlIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiOmhvdmVyXCIpIHx8IGVsZW1lbnQ7XG5cdFx0XHRcdGNvbnN0IGFsdENuZCA9ICEhTU9DRWxlbWVudCh0YXJnZXQsIHNlbGVjdG9yT3JFbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I/LihzZWxlY3Rvck9yRWxlbWVudCkgIT0gbnVsbCB8fCBlbGVtZW50Py5tYXRjaGVzPy4oc2VsZWN0b3JPckVsZW1lbnQpIHx8IGFsdENuZDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHNlbGVjdG9yT3JFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiBoYXNQYXJlbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpIHx8IGZhbHNlO1xuXHRcdFx0ZWxzZSByZXR1cm4gaGFzUGFyZW50KHNlbGVjdG9yT3JFbGVtZW50LCBlbGVtZW50KSB8fCBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvWm9vbS50c1xudmFyIGdldFpvb20gPSAoKSA9PiB7XG5cdGlmIChcImN1cnJlbnRDU1Nab29tXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdHJldHVybiBwYXJzZUZsb2F0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zY2FsaW5nXCIpIHx8IFwiMVwiKSB8fCAxO1xufTtcbnZhciB6b29tVmFsdWVzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0B6b29tVmFsdWVzXCIpO1xudmFyIHpvb21WYWx1ZXMgPSBnbG9iYWxUaGlzW3pvb21WYWx1ZXNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB6b29tT2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gem9vbVZhbHVlcy5nZXRPckluc2VydENvbXB1dGVkKGVsZW1lbnQsICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiLnVpLW9yaWVudGJveFwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCIudWktb3JpZW50Ym94XCIpIHx8IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYgKGNvbnRhaW5lcj8uem9vbSkgcmV0dXJuIGNvbnRhaW5lcj8uem9vbSB8fCAxO1xuXHRcdGlmIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgcmV0dXJuIGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tIHx8IDE7XG5cdH0pO1xufTtcbnZhciBjaGFuZ2Vab29tID0gKHNjYWxlID0gMSkgPT4ge1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNjYWxpbmdcIiwgc2NhbGUpO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzY2FsaW5nXCIsIHtcblx0XHRkZXRhaWw6IHsgem9vbTogc2NhbGUgfSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpO1xuXHRyZXR1cm4gc2NhbGU7XG59O1xudmFyIGZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gIT0gbnVsbCA/IDEgOiB6b29tT2YoZWxlbWVudCkpIHx8IDE7XG59O1xudmFyIHVuZml4ZWRDbGllbnRab29tID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIChlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSA9PSBudWxsID8gMSA6IGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tKSB8fCAxO1xufTtcbnZhciBvcmllbnRPZiA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IChlbGVtZW50Py5tYXRjaGVzPy4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpID8gZWxlbWVudCA6IG51bGwpIHx8IGVsZW1lbnQ/LmNsb3Nlc3Q/LihcIltvcmllbnRdLCBbZGF0YS1taXhpbj1cXFwidWktb3JpZW50Ym94XFxcIl1cIikgfHwgZWxlbWVudDtcblx0aWYgKGNvbnRhaW5lcj8uaGFzQXR0cmlidXRlPy4oXCJvcmllbnRcIikpIHJldHVybiBwYXJzZUludChjb250YWluZXI/LmdldEF0dHJpYnV0ZT8uKFwib3JpZW50XCIpIHx8IFwiMFwiKSB8fCAwO1xuXHRpZiAoY29udGFpbmVyPy5vcmllbnQgIT0gbnVsbCAmJiBOdW1iZXIuaXNGaW5pdGUoTnVtYmVyKGNvbnRhaW5lci5vcmllbnQpKSkgcmV0dXJuIE51bWJlcihjb250YWluZXIub3JpZW50KSB8fCAwO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGNvbnRhaW5lcj8uc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcIi0tb3JpZW50XCIpIHx8ICh0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSA9PT0gXCJmdW5jdGlvblwiICYmIGNvbnRhaW5lciA/IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1vcmllbnRcIikgOiBcIlwiKSB8fCBcIlwiO1xuXHRcdGNvbnN0IG4gPSBwYXJzZUludChTdHJpbmcocmF3KS50cmltKCksIDEwKTtcblx0XHRpZiAoTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbjtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gMDtcbn07XG52YXIgZ2V0Qm91bmRpbmdPcmllbnRSZWN0ID0gKGVsZW1lbnQsIG9yaWVudCA9IG51bGwpID0+IHtcblx0Y29uc3Qgem9vbSA9IHVuZml4ZWRDbGllbnRab29tKGVsZW1lbnQpIHx8IDE7XG5cdGNvbnN0IGJveCA9IGVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XG5cdGNvbnN0IG5ieCA9IHtcblx0XHRsZWZ0OiBib3g/LmxlZnQgLyB6b29tLFxuXHRcdHJpZ2h0OiBib3g/LnJpZ2h0IC8gem9vbSxcblx0XHR0b3A6IGJveD8udG9wIC8gem9vbSxcblx0XHRib3R0b206IGJveD8uYm90dG9tIC8gem9vbSxcblx0XHR3aWR0aDogYm94Py53aWR0aCAvIHpvb20sXG5cdFx0aGVpZ2h0OiBib3g/LmhlaWdodCAvIHpvb21cblx0fTtcblx0Y29uc3Qgb3JfaSA9IG9yaWVudCA/PyAob3JpZW50T2YoZWxlbWVudCkgfHwgMCk7XG5cdGNvbnN0IHZ2ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGw7XG5cdGNvbnN0IHNpemUgPSBbKCh2dj8ud2lkdGggPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRXaWR0aCA/PyB3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMSkgLyB6b29tLCAoKHZ2Py5oZWlnaHQgPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5jbGllbnRIZWlnaHQgPz8gd2luZG93LmlubmVySGVpZ2h0KSB8fCAxKSAvIHpvb21dO1xuXHRjb25zdCBbbGVmdF8sIHRvcF9dID0gY3Z0X2NzX3RvX29zKFtuYngubGVmdCwgbmJ4LnRvcF0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbcmlnaHRfLCBib3R0b21fXSA9IGN2dF9jc190b19vcyhbbmJ4LnJpZ2h0LCBuYnguYm90dG9tXSwgc2l6ZSwgb3JfaSk7XG5cdGNvbnN0IFtsZWZ0LCByaWdodF0gPSBvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gW2xlZnRfLCByaWdodF9dIDogW3JpZ2h0XywgbGVmdF9dO1xuXHRjb25zdCBbdG9wLCBib3R0b21dID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMSA/IFt0b3BfLCBib3R0b21fXSA6IFtib3R0b21fLCB0b3BfXTtcblx0Y29uc3QgW3dpZHRoLCBoZWlnaHRdID0gb3JfaSAlIDIgPyBbbmJ4LmhlaWdodCwgbmJ4LndpZHRoXSA6IFtuYngud2lkdGgsIG5ieC5oZWlnaHRdO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aCxcblx0XHRoZWlnaHRcblx0fTtcbn07XG52YXIgYmJ3ID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBiYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtib3JkZXJCb3hXaWR0aF0gPz8gZWw/LmNsaWVudFdpZHRoIDogZWxbYm9yZGVyQm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xudmFyIGNidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQgOiBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aDtcbnZhciBjYmggPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2NvbnRlbnRCb3hIZWlnaHRdID8/IGVsPy5jbGllbnRIZWlnaHQ7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9WaWV3cG9ydC50c1xudmFyIHJ1bldoZW5JZGxlID0gKGNiLCB0aW1lb3V0ID0gMTAwKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2soY2IsIHsgdGltZW91dCB9KTtcblx0cmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gY2Ioe1xuXHRcdGRpZFRpbWVvdXQ6IGZhbHNlLFxuXHRcdHRpbWVSZW1haW5pbmc6ICgpID0+IDBcblx0fSksIDApO1xufTtcbnZhciBLRVlCT0FSRF9PVkVSTEFZX1BYID0gODA7XG52YXIgdmlydHVhbEtleWJvYXJkID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBnbG9iYWxUaGlzLm5hdmlnYXRvcj8udmlydHVhbEtleWJvYXJkID8/IG51bGw7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xudmFyIGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkgPSAoKSA9PiB7XG5cdGNvbnN0IHZrID0gdmlydHVhbEtleWJvYXJkKCk7XG5cdGlmICghdmspIHJldHVybjtcblx0dHJ5IHtcblx0XHRpZiAodmsub3ZlcmxheXNDb250ZW50ICE9PSB0cnVlKSB2ay5vdmVybGF5c0NvbnRlbnQgPSB0cnVlO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGlzSW1lVGFyZ2V0ID0gKGVsKSA9PiB7XG5cdGlmICghZWwgfHwgIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHJldHVybiB0cnVlO1xuXHRjb25zdCB0YWcgPSBlbC50YWdOYW1lO1xuXHRpZiAodGFnID09PSBcIlRFWFRBUkVBXCIgfHwgdGFnID09PSBcIlNFTEVDVFwiKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHRhZyAhPT0gXCJJTlBVVFwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHR5cGUgPSBTdHJpbmcoZWwudHlwZSB8fCBcInRleHRcIikudG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuICFbXG5cdFx0XCJidXR0b25cIixcblx0XHRcImNoZWNrYm94XCIsXG5cdFx0XCJyYWRpb1wiLFxuXHRcdFwiZmlsZVwiLFxuXHRcdFwic3VibWl0XCIsXG5cdFx0XCJyZXNldFwiLFxuXHRcdFwiaW1hZ2VcIixcblx0XHRcInJhbmdlXCIsXG5cdFx0XCJjb2xvclwiLFxuXHRcdFwiaGlkZGVuXCJcblx0XS5pbmNsdWRlcyh0eXBlKTtcbn07XG52YXIgbGF5b3V0TG9ja09yaWVudCA9IFwiXCI7XG52YXIgbGF5b3V0TG9ja1cgPSAwO1xudmFyIGxheW91dExvY2tIID0gMDtcbnZhciBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCA9ICh3aWR0aCwgaGVpZ2h0LCBsZWZ0ID0gMCwgdG9wID0gMCkgPT4ge1xuXHRjb25zdCBzYWZlV2lkdGggPSBNYXRoLm1heCgwLCBOdW1iZXIod2lkdGgpIHx8IDApO1xuXHRjb25zdCBzYWZlSGVpZ2h0ID0gTWF0aC5tYXgoMCwgTnVtYmVyKGhlaWdodCkgfHwgMCk7XG5cdGNvbnN0IHNhZmVMZWZ0ID0gTnVtYmVyKGxlZnQpIHx8IDA7XG5cdGNvbnN0IHNhZmVUb3AgPSBOdW1iZXIodG9wKSB8fCAwO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IHNhZmVMZWZ0LFxuXHRcdHRvcDogc2FmZVRvcCxcblx0XHRyaWdodDogc2FmZUxlZnQgKyBzYWZlV2lkdGgsXG5cdFx0Ym90dG9tOiBzYWZlVG9wICsgc2FmZUhlaWdodCxcblx0XHR3aWR0aDogc2FmZVdpZHRoLFxuXHRcdGhlaWdodDogc2FmZUhlaWdodFxuXHR9O1xufTtcbnZhciByZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoMCwgMCk7XG5cdGNvbnN0IHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuXHRyZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoTnVtYmVyKHJvb3Q/LmNsaWVudFdpZHRoKSB8fCBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAsIE51bWJlcihyb290Py5jbGllbnRIZWlnaHQpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDApO1xufTtcbnZhciByZWFkTGF5b3V0Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge1xuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMCxcblx0XHRrZXlib2FyZDogMFxuXHR9O1xuXHRjb25zdCB2diA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblx0Y29uc3QgaW5uZXJXID0gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwO1xuXHRjb25zdCBpbm5lckggPSBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dlcgPSBOdW1iZXIodnY/LndpZHRoKSB8fCAwO1xuXHRjb25zdCB2dkggPSBOdW1iZXIodnY/LmhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZUb3AgPSBOdW1iZXIodnY/Lm9mZnNldFRvcCkgfHwgMDtcblx0Y29uc3QgdmtIID0gTnVtYmVyKHZpcnR1YWxLZXlib2FyZCgpPy5ib3VuZGluZ0JveD8uaGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dk92ZXJsYXAgPSBpbm5lckggPiAwICYmIHZ2SCA+IDAgPyBpbm5lckggLSB2dkggLSB2dlRvcCA6IDA7XG5cdGNvbnN0IGtleWJvYXJkID0gdmtIID49IEtFWUJPQVJEX09WRVJMQVlfUFggPyB2a0ggOiB2dk92ZXJsYXAgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IHZ2T3ZlcmxhcCA6IDA7XG5cdGNvbnN0IGNhbmRpZGF0ZVcgPSBNYXRoLm1heChpbm5lclcsIHZ2Vyk7XG5cdGNvbnN0IGNhbmRpZGF0ZUggPSBNYXRoLm1heChpbm5lckgsIHZ2SCArIHZ2VG9wLCBrZXlib2FyZCA+IDAgPyB2dkggKyBrZXlib2FyZCA6IDApO1xuXHRjb25zdCBvcmllbnQgPSB0eXBlb2YgbWF0Y2hNZWRpYSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpPy5tYXRjaGVzID8gXCJsXCIgOiBcInBcIjtcblx0aWYgKG9yaWVudCAhPT0gbGF5b3V0TG9ja09yaWVudCkge1xuXHRcdGxheW91dExvY2tPcmllbnQgPSBvcmllbnQ7XG5cdFx0bGF5b3V0TG9ja1cgPSAwO1xuXHRcdGxheW91dExvY2tIID0gMDtcblx0fVxuXHRjb25zdCBzdWRkZW5TaHJpbmsgPSBsYXlvdXRMb2NrSCA+IDAgJiYgbGF5b3V0TG9ja0ggLSBjYW5kaWRhdGVIID49IEtFWUJPQVJEX09WRVJMQVlfUFg7XG5cdGlmICghKGtleWJvYXJkID4gMCB8fCBpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB8fCBzdWRkZW5TaHJpbmspKSB7XG5cdFx0bGF5b3V0TG9ja1cgPSBjYW5kaWRhdGVXO1xuXHRcdGxheW91dExvY2tIID0gY2FuZGlkYXRlSDtcblx0fSBlbHNlIHtcblx0XHRsYXlvdXRMb2NrVyA9IE1hdGgubWF4KGNhbmRpZGF0ZVcsIGxheW91dExvY2tXKTtcblx0XHRsYXlvdXRMb2NrSCA9IE1hdGgubWF4KGNhbmRpZGF0ZUgsIGxheW91dExvY2tIKTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdHdpZHRoOiBsYXlvdXRMb2NrVyB8fCBjYW5kaWRhdGVXLFxuXHRcdGhlaWdodDogbGF5b3V0TG9ja0ggfHwgY2FuZGlkYXRlSCxcblx0XHRrZXlib2FyZFxuXHR9O1xufTtcbnZhciBwaW5PdmVybGF5U2Nyb2xsID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRpZiAocmVhZExheW91dFZpZXdwb3J0KCkua2V5Ym9hcmQgPD0gMCAmJiAhaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHJldHVybjtcblx0aWYgKHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keT8uc2Nyb2xsVG9wKSB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59O1xudmFyIGdldEF2YWlsU2l6ZSA9ICgpID0+IHtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHRjb25zdCBsID0gdHlwZW9mIG1hdGNoTWVkaWEgIT0gXCJ1bmRlZmluZWRcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiBmYWxzZTtcblx0Y29uc3QgdnYgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LnZpc3VhbFZpZXdwb3J0IDogbnVsbDtcblx0Y29uc3QgbGF5b3V0ID0gcmVhZExheW91dFZpZXdwb3J0KCk7XG5cdGNvbnN0IHZ2QmxvY2sgPSB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IGAke3Z2Py53aWR0aCA/PyAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lcldpZHRoIDogMCl9cHhgLFxuXHRcdFwiLS12di1oZWlnaHRcIjogYCR7dnY/LmhlaWdodCA/PyAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IDApfXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dnY/Lm9mZnNldExlZnQgPz8gMH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC10b3BcIjogYCR7dnY/Lm9mZnNldFRvcCA/PyAwfXB4YCxcblx0XHRcIi0tdnYtc2NhbGVcIjogU3RyaW5nKHZ2Py5zY2FsZSA/PyAxKSxcblx0XHRcIi0tbHYtd2lkdGhcIjogYCR7bGF5b3V0LndpZHRofXB4YCxcblx0XHRcIi0tbHYtaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFwiLS1rZXlib2FyZC1vdmVybGF5LWhlaWdodFwiOiBgJHtsYXlvdXQua2V5Ym9hcmR9cHhgXG5cdH07XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC50b2dnbGVBdHRyaWJ1dGUoXCJkYXRhLXZrLW9wZW5cIiwgbGF5b3V0LmtleWJvYXJkID4gMCk7XG5cdGlmICh0eXBlb2Ygc2NyZWVuICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRjb25zdCBhdyA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIjtcblx0XHRjb25zdCBhaCA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBsID8gYWggOiBhdyxcblx0XHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogbCA/IGF3IDogYWgsXG5cdFx0XHRcIi0tdmlldy1oZWlnaHRcIjogYCR7bGF5b3V0LmhlaWdodCB8fCBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSB8fCAwfXB4YCxcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLnZ2QmxvY2tcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogXCIxXCIsXG5cdFx0Li4udnZCbG9ja1xuXHR9O1xufTtcbnZhciBhdmFpbFNpemUgPSBnZXRBdmFpbFNpemUoKTtcbnZhciBjbGFzc2VzID0gW1tcIjpyb290LCA6aG9zdCwgOnNjb3BlXCIsIGF2YWlsU2l6ZV1dO1xudmFyIG9yaWVudGF0aW9uTnVtYmVyTWFwID0ge1xuXHRcInBvcnRyYWl0LXByaW1hcnlcIjogMCxcblx0XCJsYW5kc2NhcGUtcHJpbWFyeVwiOiAxLFxuXHRcInBvcnRyYWl0LXNlY29uZGFyeVwiOiAyLFxuXHRcImxhbmRzY2FwZS1zZWNvbmRhcnlcIjogM1xufTtcbnZhciB1cGRhdGVWUCA9IChldikgPT4ge1xuXHRjb25zdCBydWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRPYmplY3QuYXNzaWduKGF2YWlsU2l6ZSwgZ2V0QXZhaWxTaXplKCkpO1xuXHRPYmplY3QuZW50cmllcyhhdmFpbFNpemUpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFZhbHVlXSkgPT4ge1xuXHRcdGNvbnN0IGV4aXN0cyA9IHJ1bGU/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKTtcblx0XHRpZiAoIWV4aXN0cyB8fCBleGlzdHMgIT0gcHJvcFZhbHVlKSBydWxlPy5zdHlsZT8uc2V0UHJvcGVydHk/Lihwcm9wTmFtZSwgcHJvcFZhbHVlIHx8IFwiXCIsIFwiXCIpO1xuXHR9KTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRhdGlvbi1zZWNvbmRhcnlcIiwgc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZT8uZW5kc1dpdGg/LihcInNlY29uZGFyeVwiKSA/IFwiMVwiIDogXCIwXCIpO1xufTtcbnZhciBnZXRDb3JyZWN0T3JpZW50YXRpb24gPSAoKSA9PiB7XG5cdGxldCBvcmllbnRhdGlvblR5cGUgPSBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlIHx8IFwicG9ydHJhaXQtcHJpbWFyeVwiO1xuXHRpZiAoIWdsb2JhbFRoaXMubWF0Y2hNZWRpYShcIigoZGlzcGxheS1tb2RlOiBmdWxsc2NyZWVuKSBvciAoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKSBvciAoZGlzcGxheS1tb2RlOiB3aW5kb3ctY29udHJvbHMtb3ZlcmxheSkpXCIpLm1hdGNoZXMpIHtcblx0XHRpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwibGFuZHNjYXBlXCIsIFwicG9ydHJhaXRcIik7XG5cdFx0ZWxzZSBpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcInBvcnRyYWl0XCIsIFwibGFuZHNjYXBlXCIpO1xuXHR9XG5cdHJldHVybiBvcmllbnRhdGlvblR5cGU7XG59O1xudmFyIHBhc3NpdmVPcHRzJDEgPSB7IHBhc3NpdmU6IHRydWUgfTtcbnZhciB3aGVuQW55U2NyZWVuQ2hhbmdlcyA9IChjYikgPT4ge1xuXHRsZXQgdGlja2luZyA9IGZhbHNlO1xuXHRjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cdFx0aWYgKCF0aWNraW5nKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHR1cGRhdGVWUCgpO1xuXHRcdFx0XHRjYigpO1xuXHRcdFx0XHR0aWNraW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHRcdHRpY2tpbmcgPSB0cnVlO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgdW5zdWJzY3JpYmVycyA9IFtdO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQsIFwiZ2VvbWV0cnljaGFuZ2VcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInJlc2l6ZVwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHNjcmVlbj8ub3JpZW50YXRpb24sIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQsIFwiZnVsbHNjcmVlbmNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIiksIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKSwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJmb2N1c2luXCIsICgpID0+IHtcblx0XHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdFx0aWYgKGlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG5cdFx0XHRsYXlvdXRMb2NrVyA9IE1hdGgubWF4KGxheW91dExvY2tXLCBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAsIE51bWJlcih3aW5kb3cudmlzdWFsVmlld3BvcnQ/LndpZHRoKSB8fCAwKTtcblx0XHRcdGxheW91dExvY2tIID0gTWF0aC5tYXgobGF5b3V0TG9ja0gsIE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDAsIE51bWJlcih3aW5kb3cudmlzdWFsVmlld3BvcnQ/LmhlaWdodCkgfHwgMCk7XG5cdFx0fVxuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0XHR1cGRhdGUoKTtcblx0fSwge1xuXHRcdGNhcHR1cmU6IHRydWUsXG5cdFx0cGFzc2l2ZTogdHJ1ZVxuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJmb2N1c291dFwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHR1cGRhdGUoKTtcblx0cnVuV2hlbklkbGUoKCkgPT4gdXBkYXRlKCksIDEwMCk7XG5cdHJldHVybiAoKSA9PiB1bnN1YnNjcmliZXJzLmZvckVhY2goKHVuc3ViKSA9PiB1bnN1YigpKTtcbn07XG52YXIgZml4T3JpZW50VG9TY3JlZW4gPSAoZWxlbWVudCkgPT4ge1xuXHRpZiAoIWVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnM/LihcIm5hdGl2ZS1wb3J0cmFpdC1vcHRpbWl6ZWRcIikpIHtcblx0XHRlbGVtZW50Py5jbGFzc0xpc3Q/LmFkZD8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKTtcblx0XHRyZXR1cm4gd2hlbkFueVNjcmVlbkNoYW5nZXMoKCkgPT4ge1xuXHRcdFx0Y29uc3QgbmV4dCA9IG9yaWVudGF0aW9uTnVtYmVyTWFwPy5bZ2V0Q29ycmVjdE9yaWVudGF0aW9uKCldID8/IDA7XG5cdFx0XHRlbGVtZW50Lm9yaWVudCA9IG5leHQ7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZT8uKFwib3JpZW50XCIsIFN0cmluZyhuZXh0KSk7XG5cdFx0XHRlbGVtZW50LnN0eWxlPy5zZXRQcm9wZXJ0eT8uKFwiLS1vcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHR9KTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL01lYXN1cmUudHNcbnZhciBjdHggPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEsIDEpLmdldENvbnRleHQoXCIyZFwiKTtcbnZhciBpbml0VGV4dFN0eWxlID0gKGVsZW1lbnQsIGN0eCkgPT4ge1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgXCJcIik7XG5cdGlmIChjdHggJiYgc3R5bGUpIHtcblx0XHRjb25zdCBmb250V2VpZ2h0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtd2VpZ2h0XCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0Y29uc3QgZm9udFNpemUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpIHx8IFwiMTZweFwiO1xuXHRcdGNvbnN0IGZvbnRGYW1pbHkgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1mYW1pbHlcIikgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0XHRjb25zdCBmb250U3RyZXRjaCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXN0cmV0Y2hcIikgfHwgXCJub3JtYWxcIjtcblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRTdHJldGNoID0gZm9udFN0cmV0Y2guaW5jbHVkZXMoXCIlXCIpID8gXCJub3JtYWxcIiA6IGZvbnRTdHJldGNoO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5sZXR0ZXJTcGFjaW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImxldHRlci1zcGFjaW5nXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRLZXJuaW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQta2VybmluZ1wiKSB8fCBcImF1dG9cIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFZhcmlhbnRDYXBzID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtdmFyaWFudC1jYXBzXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnQgPSBgJHtmb250V2VpZ2h0fSAke2ZvbnRTaXplfSAke2ZvbnRGYW1pbHl9YDtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG59O1xudmFyIG1lYXN1cmVUZXh0ID0gKHRleHQsIGVsZW1lbnQpID0+IHtcblx0aWYgKGN0eCkge1xuXHRcdGluaXRUZXh0U3R5bGUoZWxlbWVudCwgY3R4KTtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG5cdHJldHVybiB7IHdpZHRoOiBudWxsIH07XG59O1xudmFyIG1lYXN1cmVJbnB1dEluRm9jdXMgPSAoaW5wdXQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0LnZhbHVlLnNsaWNlKDAsIGlucHV0LnNlbGVjdGlvbkVuZCB8fCAwKTtcblx0cmV0dXJuIG1lYXN1cmVUZXh0KHRleHQsIGlucHV0KTtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb24gPSAoaW5wdXQsIHBvaW50KSA9PiB7XG5cdGNvbnN0IHRleHQgPSBpbnB1dD8udmFsdWUgfHwgXCJcIjtcblx0aWYgKGN0eCkge1xuXHRcdGluaXRUZXh0U3R5bGUoaW5wdXQsIGN0eCk7XG5cdFx0bGV0IGN1cnJlbnRXaWR0aCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjdXJyZW50V2lkdGggPSBjdHgubWVhc3VyZVRleHQodGV4dC5zbGljZSgwLCBpKSk/LndpZHRoO1xuXHRcdFx0aWYgKGN1cnJlbnRXaWR0aCA9PSBudWxsKSByZXR1cm4gdGV4dC5sZW5ndGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoICE9IG51bGwgJiYgY3VycmVudFdpZHRoID49IHBvaW50WzBdKSByZXR1cm4gTWF0aC5tYXgoaSAtIDEsIDApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGV4dC5sZW5ndGg7XG59O1xudmFyIGNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCA9IChpbnB1dCwgY2xpZW50KSA9PiB7XG5cdGNvbnN0IGJveCA9IGlucHV0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRjb25zdCBwb2ludCA9IFtjbGllbnRbMF0gLSBib3gubGVmdCAvIHVuZml4ZWRDbGllbnRab29tKCksIGNsaWVudFsxXSAtIGJveC50b3AgLyB1bmZpeGVkQ2xpZW50Wm9vbSgpXTtcblx0cmV0dXJuIGNvbXB1dGVDYXJldFBvc2l0aW9uKGlucHV0LCBwb2ludCk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvTGF1bmNoZXJHcmlkLnRzXG52YXIgcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQgPSAoZWwsIGxheW91dE92ZXJyaWRlKSA9PiB7XG5cdGNvbnN0IGMgPSBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtY29sdW1uc1wiKSB8fCBcIlwiLCAxMCk7XG5cdGNvbnN0IHIgPSBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtcm93c1wiKSB8fCBcIlwiLCAxMCk7XG5cdGNvbnN0IGJhc2UgPSBub3JtYWxpemVHcmlkTGF5b3V0KGxheW91dE92ZXJyaWRlID8/IFs0LCA4XSk7XG5cdHJldHVybiBbTnVtYmVyLmlzRmluaXRlKGMpICYmIGMgPiAwID8gYyA6IGJhc2VbMF0sIE51bWJlci5pc0Zpbml0ZShyKSAmJiByID4gMCA/IHIgOiBiYXNlWzFdXTtcbn07XG52YXIgcmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50ID0gKGdyaWRTeXN0ZW0sIGNsaWVudFBvaW50LCBhcmdzLCBtb2RlID0gXCJmbG9vclwiKSA9PiB7XG5cdGlmICghZ3JpZFN5c3RlbSkgcmV0dXJuIFswLCAwXTtcblx0Y29uc3QgcmVjdCA9IGdyaWRTeXN0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKTtcblx0aWYgKCFyZWN0KSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCBsYXlvdXQgPSByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudChncmlkU3lzdGVtLCBhcmdzPy5sYXlvdXQpO1xuXHRjb25zdCBvcmllbnQgPSBvcmllbnRPZihncmlkU3lzdGVtKTtcblx0Y29uc3QgY3MgPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/LihncmlkU3lzdGVtKTtcblx0Y29uc3QgcGwgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nTGVmdCkgfHwgMDtcblx0Y29uc3QgcHQgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nVG9wKSB8fCAwO1xuXHRjb25zdCBwciA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdSaWdodCkgfHwgMDtcblx0Y29uc3QgcGIgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nQm90dG9tKSB8fCAwO1xuXHRjb25zdCBjb250ZW50VyA9IE1hdGgubWF4KDEsIChyZWN0LndpZHRoIHx8IGdyaWRTeXN0ZW0uY2xpZW50V2lkdGggfHwgMSkgLSBwbCAtIHByKTtcblx0Y29uc3QgY29udGVudEggPSBNYXRoLm1heCgxLCAocmVjdC5oZWlnaHQgfHwgZ3JpZFN5c3RlbS5jbGllbnRIZWlnaHQgfHwgMSkgLSBwdCAtIHBiKTtcblx0Y29uc3QgY3NDb29yZCA9IFsoY2xpZW50UG9pbnQ/LlswXSB8fCAwKSAtIHJlY3QubGVmdCAtIHBsLCAoY2xpZW50UG9pbnQ/LlsxXSB8fCAwKSAtIHJlY3QudG9wIC0gcHRdO1xuXHRyZXR1cm4gcmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsKGNzQ29vcmQsIFtjb250ZW50VywgY29udGVudEhdLCBsYXlvdXQsIG9yaWVudCwge1xuXHRcdG1vZGUsXG5cdFx0cmVkaXJlY3Q6IHtcblx0XHRcdGl0ZW06IGFyZ3M/Lml0ZW0sXG5cdFx0XHRsaXN0OiBhcmdzPy5saXN0LFxuXHRcdFx0aXRlbXM6IGFyZ3M/Lml0ZW1zXG5cdFx0fVxuXHR9KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9kZWNvci9BbmltYXRpb24udHNcbnZhciBhbmltYXRlU2hvdyA9IGFzeW5jICh0YXJnZXQpID0+IHtcblx0Y29uc3QgYW5pbWF0aW9uRG9uZSA9ICgpID0+IHtcblx0XHRpZiAoIXRhcmdldD8uaGFzQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSkge1xuXHRcdFx0dGFyZ2V0Py5yZW1vdmVBdHRyaWJ1dGU/LihcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIik7XG5cdFx0XHR0YXJnZXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJ1Mi1hcHBlYXJcIiwge1xuXHRcdFx0XHRkZXRhaWw6IHt9LFxuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9O1xuXHRpZiAoIXRhcmdldD8uaGFzQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKSAmJiB0YXJnZXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJ1Mi1iZWZvcmUtc2hvd1wiLCB7XG5cdFx0ZGV0YWlsOiB7fSxcblx0XHRidWJibGVzOiB0cnVlLFxuXHRcdGNhbmNlbGFibGU6IHRydWVcblx0fSkpKSB7XG5cdFx0aWYgKCFtYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIikubWF0Y2hlcyAmJiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIikgJiYgIXRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWluc3RhbnRcIikgJiYgdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpID09IG51bGwpIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIsIFwiXCIpO1xuXHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKSAmJiB0YXJnZXQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikgPT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgYW5pbWF0ZSA9IHRhcmdldC5hbmltYXRlKFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IDAsXG5cdFx0XHRcdFx0XCItLW9wYWNpdHlcIjogMCxcblx0XHRcdFx0XHRcIi0tc2NhbGVcIjogLjgsXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJub25lXCIsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJub25lXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IC4wMSxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAwLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAuOCxcblx0XHRcdFx0XHRkaXNwbGF5OiBcIm5vbmVcIixcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxuXHRcdFx0XHRcdG9mZnNldDogMSxcblx0XHRcdFx0XHRcIi0tb3BhY2l0eVwiOiAxLFxuXHRcdFx0XHRcdFwiLS1zY2FsZVwiOiAxLFxuXHRcdFx0XHRcdGRpc3BsYXk6IFwicmV2ZXJ0LWxheWVyXCIsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJyZXZlcnQtbGF5ZXJcIlxuXHRcdFx0XHR9XG5cdFx0XHRdLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiBpc01vYmlsZSgpID8gMTAwIDogODAsXG5cdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0ZGVsYXk6IDBcblx0XHRcdH0pO1xuXHRcdFx0bGV0IGRvbmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGVuZEFuaW1hdGlvbiA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGRvbmUpIHJldHVybjtcblx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdGV2ZW50cz8uZm9yRWFjaD8uKChldmVudCkgPT4gZXZlbnQ/LigpKTtcblx0XHRcdFx0YW5pbWF0ZS5jdXJyZW50VGltZSA9IDE7XG5cdFx0XHRcdGFuaW1hdGUuZmluaXNoKCk7XG5cdFx0XHRcdGFuaW1hdGlvbkRvbmU/LigpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGV2ZW50cyA9IGFkZEV2ZW50cyh0YXJnZXQsIHtcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtaGlkZVwiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRcInUyLWJlZm9yZS1zaG93XCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV1cblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgYW5pbWF0ZS5maW5pc2hlZDtcblx0XHRcdGVuZEFuaW1hdGlvbj8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHsgcmVzb2x2ZSwgcmVqZWN0LCBwcm9taXNlIH0gPSBQcm9taXNlLndpdGhSZXNvbHZlcnMoKTtcblx0XHRcdGNvbnN0IHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNvbHZlKTtcblx0XHRcdGxldCBkb25lID0gZmFsc2U7XG5cdFx0XHRjb25zdCBlbmRBbmltYXRpb24gPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChkb25lKSByZXR1cm47XG5cdFx0XHRcdGRvbmUgPSB0cnVlO1xuXHRcdFx0XHRldmVudHM/LmZvckVhY2g/LigoZXZlbnQpID0+IGV2ZW50Py4oKSk7XG5cdFx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSk7XG5cdFx0XHRcdHJlc29sdmUocGVyZm9ybWFuY2Uubm93KCkpO1xuXHRcdFx0XHRhbmltYXRpb25Eb25lPy4oKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBldmVudHMgPSBhZGRFdmVudHModGFyZ2V0LCB7XG5cdFx0XHRcdFwidTItYmVmb3JlLWhpZGVcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0XCJ1Mi1iZWZvcmUtc2hvd1wiOiBbZW5kQW5pbWF0aW9uLCB7XG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH1dXG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IHByb21pc2U7XG5cdFx0XHRlbmRBbmltYXRpb24/LigpO1xuXHRcdH1cblx0fVxufTtcbnZhciBhbmltYXRlSGlkZSA9IGFzeW5jICh0YXJnZXQpID0+IHtcblx0Y29uc3QgYW5pbWF0aW9uRG9uZSA9ICgpID0+IHtcblx0XHRpZiAodGFyZ2V0Py5oYXNBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpKSB7XG5cdFx0XHR0YXJnZXQ/LnJlbW92ZUF0dHJpYnV0ZT8uKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiKTtcblx0XHRcdHRhcmdldD8uZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcInUyLWhpZGRlblwiLCB7XG5cdFx0XHRcdGRldGFpbDoge30sXG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdH07XG5cdGlmICh0YXJnZXQ/Lmhhc0F0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIikgJiYgdGFyZ2V0Py5kaXNwYXRjaEV2ZW50Py4obmV3IEN1c3RvbUV2ZW50KFwidTItYmVmb3JlLWhpZGVcIiwge1xuXHRcdGRldGFpbDoge30sXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdH0pKSkge1xuXHRcdGlmICghbWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpXCIpLm1hdGNoZXMgJiYgIXRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW9wYWNpdHktYW5pbWF0aW9uXCIpICYmICF0YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS1pbnN0YW50XCIpKSB0YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1vcGFjaXR5LWFuaW1hdGlvblwiLCBcIlwiKTtcblx0XHRpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtb3BhY2l0eS1hbmltYXRpb25cIikpIHtcblx0XHRcdGNvbnN0IGFuaW1hdGUgPSB0YXJnZXQuYW5pbWF0ZShbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdFx0b2Zmc2V0OiAwLFxuXHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdFx0b2Zmc2V0OiAuOTksXG5cdFx0XHRcdFx0XCItLW9wYWNpdHlcIjogMCxcblx0XHRcdFx0XHRcIi0tc2NhbGVcIjogLjgsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJub25lXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVhc2luZzogXCJsaW5lYXJcIixcblx0XHRcdFx0XHRvZmZzZXQ6IDEsXG5cdFx0XHRcdFx0XCItLW9wYWNpdHlcIjogMCxcblx0XHRcdFx0XHRcIi0tc2NhbGVcIjogLjgsXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJub25lXCIsXG5cdFx0XHRcdFx0cG9pbnRlckV2ZW50czogXCJub25lXCJcblx0XHRcdFx0fVxuXHRcdFx0XSwge1xuXHRcdFx0XHRkdXJhdGlvbjogMTIwLFxuXHRcdFx0XHRlYXNpbmc6IFwibGluZWFyXCIsXG5cdFx0XHRcdGRlbGF5OiAwXG5cdFx0XHR9KTtcblx0XHRcdGxldCBkb25lID0gZmFsc2U7XG5cdFx0XHRjb25zdCBlbmRBbmltYXRpb24gPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChkb25lKSByZXR1cm47XG5cdFx0XHRcdGRvbmUgPSB0cnVlO1xuXHRcdFx0XHRldmVudHM/LmZvckVhY2g/LigoZXZlbnQpID0+IGV2ZW50Py4oKSk7XG5cdFx0XHRcdGFuaW1hdGUuY3VycmVudFRpbWUgPSAxO1xuXHRcdFx0XHRhbmltYXRlLmZpbmlzaCgpO1xuXHRcdFx0XHRhbmltYXRpb25Eb25lPy4oKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBldmVudHMgPSBhZGRFdmVudHModGFyZ2V0LCB7IFwidTItYmVmb3JlLXNob3dcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHR9XSB9KTtcblx0XHRcdGF3YWl0IGFuaW1hdGUuZmluaXNoZWQ7XG5cdFx0XHRlbmRBbmltYXRpb24/LigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCB7IHJlc29sdmUsIHJlamVjdCwgcHJvbWlzZSB9ID0gUHJvbWlzZS53aXRoUmVzb2x2ZXJzKCk7XG5cdFx0XHRjb25zdCByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzb2x2ZSk7XG5cdFx0XHRsZXQgZG9uZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgZW5kQW5pbWF0aW9uID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoZG9uZSkgcmV0dXJuO1xuXHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRzPy5mb3JFYWNoPy4oKGV2ZW50KSA9PiBldmVudD8uKCkpO1xuXHRcdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpO1xuXHRcdFx0XHRyZXNvbHZlKHBlcmZvcm1hbmNlLm5vdygpKTtcblx0XHRcdFx0YW5pbWF0aW9uRG9uZT8uKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZXZlbnRzID0gYWRkRXZlbnRzKHRhcmdldCwge1xuXHRcdFx0XHRcInUyLWJlZm9yZS1oaWRlXCI6IFtlbmRBbmltYXRpb24sIHtcblx0XHRcdFx0XHRvbmNlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFwidTItYmVmb3JlLXNob3dcIjogW2VuZEFuaW1hdGlvbiwge1xuXHRcdFx0XHRcdG9uY2U6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9XVxuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBwcm9taXNlO1xuXHRcdFx0ZW5kQW5pbWF0aW9uPy4oKTtcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9PYnNlcnZlci50c1xudmFyIG9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xudmFyIG9uQm9yZGVyT2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkJvcmRlck9ic2VydmVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkNvbnRlbnRPYnNlcnZlXCIpO1xudmFyIG9uQ29udGVudE9ic2VydmUkMSA9IGdsb2JhbFRoaXNbb25Db250ZW50T2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVud3JhcEZyb21RdWVyeSA9IChlbGVtZW50KSA9PiB7XG5cdGlmICh0eXBlb2YgZWxlbWVudD8uY3VycmVudCA9PSBcIm9iamVjdFwiKSBlbGVtZW50ID0gZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50Py5jdXJyZW50ID8/ICh0eXBlb2YgZWxlbWVudD8uc2VsZiA9PSBcIm9iamVjdFwiID8gZWxlbWVudD8uc2VsZiA6IG51bGwpID8/IGVsZW1lbnQ7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBub3JtYWxpemVTZWxlY3RvciA9IChzZWxlY3RvciwgZmFsbGJhY2sgPSBcIipcIikgPT4ge1xuXHRpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsbGJhY2s7XG5cdHJldHVybiBzZWxlY3Rvci50cmltKCkgfHwgZmFsbGJhY2s7XG59O1xudmFyIHNhZmVRdWVyeVNlbGVjdG9yQWxsID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuXHRpZiAoIWVsIHx8IHR5cGVvZiBlbC5xdWVyeVNlbGVjdG9yQWxsICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBbXTtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IsIFwiXCIpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIFtdO1xuXHR0cnkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSB8fCBbXSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBbXTtcblx0fVxufTtcbnZhciBzYWZlTWF0Y2hlcyA9IChlbCwgc2VsZWN0b3IpID0+IHtcblx0aWYgKCFlbCB8fCB0eXBlb2YgZWwubWF0Y2hlcyAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLCBcIlwiKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gISFlbC5tYXRjaGVzKHNlbCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBvYnNlcnZlQ29udGVudEJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQ29udGVudE9ic2VydmUkMS5oYXMoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSkpIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgY29udGVudEJveFNpemUgPSBlbnRyeS5jb250ZW50Qm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGNvbnRlbnRCb3hTaXplKSBjYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiPy4oY29udGVudEJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50LmNsaWVudFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50LmNsaWVudEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkNvbnRlbnRPYnNlcnZlJDEuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG5cdFx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImNvbnRlbnQtYm94XCIgfSk7XG5cdH1cblx0b25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uc3BsaWNlPy4ob25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uaW5kZXhPZihjYikgfHwgLTEsIDEpIH07XG59O1xudmFyIG9ic2VydmVCb3JkZXJCb3ggPSAoZWxlbWVudCwgY2IpID0+IHtcblx0aWYgKCFvbkJvcmRlck9ic2VydmUkMS5oYXMoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSkpIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihib3JkZXJCb3hTaXplLCBvYnNlcnZlcikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNiPy4oe1xuXHRcdFx0aW5saW5lU2l6ZTogZWxlbWVudC5vZmZzZXRXaWR0aCxcblx0XHRcdGJsb2NrU2l6ZTogZWxlbWVudC5vZmZzZXRIZWlnaHRcblx0XHR9LCBvYnNlcnZlcik7XG5cdFx0b25Cb3JkZXJPYnNlcnZlJDEuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG5cdFx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxuXHRvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnB1c2g/LihjYik7XG5cdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uc3BsaWNlPy4ob25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZSA9IChlbGVtZW50LCBhdHRyaWJ1dGUsIGNiKSA9PiB7XG5cdGlmICh0eXBlb2YgZWxlbWVudD8uc2VsZWN0b3IgPT0gXCJzdHJpbmdcIikgcmV0dXJuIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKGVsZW1lbnQsIGVsZW1lbnQ/LnNlbGVjdG9yLCBhdHRyaWJ1dGUsIGNiKTtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoKGF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV0pLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSAmJiBhdHRyaWJ1dGVMaXN0LmhhcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkgY2IobXV0YXRpb24sIG9ic2VydmVyKTtcblx0fSk7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uYXR0cmlidXRlTGlzdF1cblx0fSk7XG5cdGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0OiBlbGVtZW50LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yLCBhdHRyaWJ1dGUsIGNiKSA9PiB7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoWy4uLmF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV1dLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRjb25zdCBhZGRlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGFkZGVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdFx0cmVtb3ZlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdFx0Wy4uLm5ldyBTZXQoYWRkZWROb2RlcyldLmZpbHRlcigoZWwpID0+IHNhZmVNYXRjaGVzKGVsLCBzZWwpKT8ubWFwPy4oKHRhcmdldCkgPT4ge1xuXHRcdFx0XHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuXHRcdFx0XHRcdGNiKHtcblx0XHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHRcdFx0XHRcdH0sIG9ic2VydmVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKHNhZmVNYXRjaGVzKG11dGF0aW9uLnRhcmdldCwgc2VsKSAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlXG5cdH0pO1xuXHRzYWZlUXVlcnlTZWxlY3RvckFsbChlbGVtZW50LCBzZWwpLm1hcCgodGFyZ2V0KSA9PiBhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gY2Ioe1xuXHRcdHRhcmdldCxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcbnZhciBvYnNlcnZlQnlTZWxlY3RvciA9IChlbGVtZW50LCBzZWxlY3RvciA9IFwiKlwiLCBjYiA9IChtdXQsIG9icykgPT4ge30pID0+IHtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRjb25zdCB1bndyYXBOb2Rlc0J5U2VsZWN0b3IgPSAobm9kZXMpID0+IHtcblx0XHRjb25zdCAkbm9kZXMgPSBBcnJheS5mcm9tKG5vZGVzIHx8IFtdKSB8fCBbXTtcblx0XHQkbm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRyZXR1cm4gWy4uLkFycmF5LmZyb20obmV3IFNldCgkbm9kZXMpLnZhbHVlcygpKV0uZmlsdGVyKChlbCkgPT4gc2FmZU1hdGNoZXMoZWwsIHNlbCkpO1xuXHR9O1xuXHRsZXQgb2JSZWYgPSBudWxsO1xuXHRjb25zdCBoYW5kbGVNdXRhdGlvbiA9IChtdXRhdGlvbikgPT4ge1xuXHRcdGNvbnN0IG9ic2VydmVyID0gb2JSZWY/LmRlcmVmPy4oKTtcblx0XHRjb25zdCBhZGRlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuXHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuXHRcdGlmIChhZGRlZE5vZGVzLmxlbmd0aCA+IDAgfHwgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdFx0dHlwZTogbXV0YXRpb24udHlwZSxcblx0XHRcdHRhcmdldDogbXV0YXRpb24udGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IG11dGF0aW9uLm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IG11dGF0aW9uLm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiBtdXRhdGlvbi5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzLFxuXHRcdFx0cmVtb3ZlZE5vZGVzXG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlT3V0Q29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUZvY3VzQ2xpY2sgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBmYWN0b3JzID0ge1xuXHRcdHBhc3NpdmU6IHRydWUsXG5cdFx0Y2FwdHVyZTogZmFsc2Vcblx0fTtcblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXNcIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtdmlzaWJsZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikgaGFuZGxlTXV0YXRpb24obXV0YXRpb24pO1xuXHR9KTtcblx0b2JSZWYgPSBuZXcgV2Vha1JlZihvYnNlcnZlcik7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlXG5cdH0pO1xuXHRjb25zdCBzZWxlY3RlZCA9IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQsIHNlbCk7XG5cdGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSBjYj8uKHtcblx0XHRhZGRlZE5vZGVzOiBzZWxlY3RlZCxcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIG9ic2VydmVyKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL0FwcGVhci50c1xudmFyIGluaXRWaXNpYmlsaXR5ID0gYXN5bmMgKFJPT1QgPSBkb2N1bWVudC5ib2R5KSA9PiB7XG5cdG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKFJPT1QsIFwiKlwiLCBcImRhdGEtaGlkZGVuXCIsIChtdXRhdGlvbiwgb2JzZXJ2ZXIpID0+IHtcblx0XHRpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PSBcImRhdGEtaGlkZGVuXCIpIHtcblx0XHRcdGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRcdGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1oaWRkZW5cIikgIT09IG11dGF0aW9uLm9sZFZhbHVlKSBQcm9taXNlPy50cnk/Lih0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1oaWRkZW5cIikgIT0gbnVsbCA/IGFuaW1hdGVIaWRlIDogYW5pbWF0ZVNob3csIHRhcmdldCwgb2JzZXJ2ZXIpPy5jYXRjaD8uKGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpKTtcblx0XHR9XG5cdH0pO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL1NoYXBlLnRzXG52YXIgV2F2eVNoYXBlZENpcmNsZSA9IChzdGVwcyA9IDEwMCwgYW1wbGl0dWRlID0gLjA1LCBmcmVxID0gOCkgPT4ge1xuXHRjb25zdCBwb2ludHMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSsrKSBwb2ludHMucHVzaChpIC8gc3RlcHMpO1xuXHRjb25zdCBhbmdsZSA9IChzdGVwKSA9PiB7XG5cdFx0cmV0dXJuIGBjYWxjKCR7c3RlcH1yYWQgKiBwaSAqIDIpYDtcblx0fTtcblx0Y29uc3QgdmFyaWFudCA9IChzdGVwKSA9PiB7XG5cdFx0cmV0dXJuIGBjYWxjKGNhbGMoY29zKGNhbGModmFyKC0tY2xpcC1mcmVxLCA4KSAqICR7YW5nbGUoc3RlcCl9KSkgKiAwLjUgKyAwLjUpICogdmFyKC0tY2xpcC1hbXBsaXR1ZGUsIDApKWA7XG5cdH07XG5cdGNvbnN0IGZ1bmMgPSAoc3RlcCkgPT4gW2BjYWxjKGNhbGMoMC41ICsgY2FsYyhjb3MoJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgLCBgY2FsYyhjYWxjKDAuNSArIGNhbGMoc2luKCR7YW5nbGUoc3RlcCl9KSAqIGNhbGMoMC41IC0gJHt2YXJpYW50KHN0ZXApfSkpKSAqIHZhcigtLWljb24tc2l6ZSwgMTAwJSkpYF07XG5cdHJldHVybiB7XG5cdFx0XCItLWNsaXAtYW1wbGl0dWRlXCI6IGFtcGxpdHVkZSxcblx0XHRcIi0tY2xpcC1mcmVxXCI6IGZyZXEsXG5cdFx0XCItLWNsaXAtcGF0aFwiOiBgcG9seWdvbigke3BvaW50cy5tYXAoKHN0ZXApID0+IHtcblx0XHRcdHJldHVybiBmdW5jKHN0ZXApLmpvaW4oXCIgXCIpO1xuXHRcdH0pLmpvaW4oXCIsIFwiKX0pYFxuXHR9O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0JlaGF2aW9yLnRzXG52YXIgYm91bmRCZWhhdmlvcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiaW5kQmVoYXZpb3IgPSAoZWxlbWVudCwgYmVoU2V0LCBiZWhhdmlvcikgPT4ge1xuXHRuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFiZWhTZXQuaGFzKGJlaGF2aW9yKSkgYmVoU2V0LmFkZChiZWhhdmlvcik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciByZWZsZWN0QmVoYXZpb3JzID0gKGVsZW1lbnQsIGJlaGF2aW9ycykgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0aWYgKGJlaGF2aW9ycykge1xuXHRcdGNvbnN0IGJlaFNldCA9IGJvdW5kQmVoYXZpb3JzLmdldE9ySW5zZXJ0KGVsZW1lbnQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuXHRcdFsuLi5iZWhhdmlvcnM/LnZhbHVlcz8uKCkgfHwgW11dLm1hcCgoZSkgPT4gYmluZEJlaGF2aW9yKGVsZW1lbnQsIGJlaFNldCwgZSkpO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL1N0b3JlLnRzXG52YXIgbmFtZWRTdG9yZU1hcHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG5hbWVkU3RvcmVNYXBzXCIpO1xudmFyIG5hbWVkU3RvcmVNYXBzID0gZ2xvYmFsVGhpc1tuYW1lZFN0b3JlTWFwc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZ2V0U3RvcmVzT2ZFbGVtZW50ID0gKG1hcCwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCBFID0gWy4uLm1hcC5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChFPy5tYXA/LigoW24sIG1dKSA9PiBbbiwgbT8uZ2V0Py4oZWxlbWVudCldKT8uZmlsdGVyPy4oKFtuLCBlXSkgPT4gISFlKSB8fCBbXSk7XG59O1xudmFyIGlzV2Vha0NvbXBhdGlibGUgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKHR5cGVvZiBlbGVtZW50ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGVsZW1lbnQgPT0gXCJmdW5jdGlvblwiKSAmJiBlbGVtZW50ICE9IG51bGw7XG59O1xudmFyIGJpbmRTdG9yZSA9IChlbGVtZW50LCBuYW1lLCBvYmopID0+IHtcblx0aWYgKCFpc1dlYWtDb21wYXRpYmxlKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgcmV0dXJuIGVsZW1lbnQ7XG5cdGxldCB3ZWFrTWFwID0gbmFtZWRTdG9yZU1hcHMuZ2V0KG5hbWUpO1xuXHRpZiAoIXdlYWtNYXApIHtcblx0XHR3ZWFrTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdFx0bmFtZWRTdG9yZU1hcHMuc2V0KG5hbWUsIHdlYWtNYXApO1xuXHR9XG5cdGlmICghd2Vha01hcC5oYXMoZWxlbWVudCkgJiYgZWxlbWVudCAhPSBudWxsKSB3ZWFrTWFwLnNldChlbGVtZW50LCBvYmopO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdFN0b3JlcyA9IChlbGVtZW50LCBzdG9yZXMpID0+IHtcblx0aWYgKCFlbGVtZW50IHx8ICFzdG9yZXMpIHJldHVybjtcblx0Zm9yIChjb25zdCBbbmFtZSwgb2JqXSBvZiBzdG9yZXMuZW50cmllcygpKSBiaW5kU3RvcmUoZWxlbWVudCwgbmFtZSwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vTWl4aW5zLnRzXG52YXIgcmVmbGVjdE1peGlucyA9IChlbGVtZW50LCBtaXhpbnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChtaXhpbnMpIHtcblx0XHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRcdGlmICghYm91bmRNaXhpblNldD8uaGFzPy4oZWxlbWVudCkpIGJvdW5kTWl4aW5TZXQ/LnNldD8uKGVsZW1lbnQsIG1peGluU2V0KTtcblx0XHRbLi4ubWl4aW5zPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRNaXhpbnMoZWxlbWVudCwgZSwgbWl4aW5TZXQpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgZ2V0RWxlbWVudFJlbGF0ZWQgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHN0b3JlU2V0OiBnZXRTdG9yZXNPZkVsZW1lbnQobmFtZWRTdG9yZU1hcHMsIGVsZW1lbnQpLFxuXHRcdG1peGluU2V0OiBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSxcblx0XHRiZWhhdmlvclNldDogYm91bmRCZWhhdmlvcnM/LmdldD8uKGVsZW1lbnQpXG5cdH07XG59O1xudmFyIGJpbmRNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW4sIG1peFNldCkgPT4ge1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0bWl4U2V0IHx8PSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KTtcblx0aWYgKCFtaXhTZXQ/Lmhhcz8uKG1peGluKSkge1xuXHRcdG1peFNldD8uYWRkPy4obWl4aW4pO1xuXHRcdG1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uYWRkPy4oZWxlbWVudCk7XG5cdFx0aWYgKG1peGluLm5hbWUpIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXSwgbWl4aW4ubmFtZV0uZmlsdGVyKChuKSA9PiAhIW4pLmpvaW4oXCIgXCIpKTtcblx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgYm91bmRNaXhpblNldFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBib3VuZE1peGluU2V0ID0gZ2xvYmFsVGhpc1tib3VuZE1peGluU2V0U3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbWl4aW5FbGVtZW50c1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5FbGVtZW50c1wiKTtcbnZhciBtaXhpbkVsZW1lbnRzID0gZ2xvYmFsVGhpc1ttaXhpbkVsZW1lbnRzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbWl4aW5SZWdpc3RyeVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5SZWdpc3RyeVwiKTtcbnZhciBtaXhpblJlZ2lzdHJ5ID0gZ2xvYmFsVGhpc1ttaXhpblJlZ2lzdHJ5U3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBtaXhpbk5hbWVzcGFjZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5OYW1lc3BhY2VcIik7XG52YXIgbWl4aW5OYW1lc3BhY2UgPSBnbG9iYWxUaGlzW21peGluTmFtZXNwYWNlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzID0gKGVsZW1lbnQsIG1peGluKSA9PiB7XG5cdGlmICh0eXBlb2YgbWl4aW4gPT0gXCJzdHJpbmdcIikgbWl4aW4gPSBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihtaXhpbik7XG5cdGNvbnN0IG5hbWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Y29uc3QgbWl4aW5zID0gbmV3IFNldChbLi4ubmFtZXNdLm1hcCgobikgPT4gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obikpLmZpbHRlcigobSkgPT4gISFtKSk7XG5cdGNvbnN0IG1peGluU2V0ID0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdGlmICghbWl4aW5FbGVtZW50cz8uaGFzPy4obWl4aW4pKSBtaXhpbkVsZW1lbnRzPy5zZXQ/LihtaXhpbiwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpO1xuXHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdGNvbnN0IHdlbCA9IG5ldyBXZWFrUmVmKGVsZW1lbnQpO1xuXHRpZiAoIW1peGluU2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRpZiAoIW1peGlucy5oYXMobWl4aW4pKSBtaXhpbj8uZGlzY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRpZiAobWl4aW5zLmhhcyhtaXhpbikgfHwgIW1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uaGFzPy4oZWxlbWVudCkpIHtcblx0XHRcdG1peGluPy5jb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdFx0bmFtZXMuYWRkKG1peGluTmFtZXNwYWNlPy5nZXQ/LihtaXhpbikpO1xuXHRcdFx0bWl4aW5TZXQ/LmFkZD8uKG1peGluKTtcblx0XHRcdGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubmFtZXNdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0fVxuXHRcdG1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uYWRkPy4oZWxlbWVudCk7XG5cdH1cblx0aWYgKG1peGluU2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRpZiAoIW1peGlucy5oYXMobWl4aW4pKSB7XG5cdFx0XHRtaXhpblNldD8uZGVsZXRlPy4obWl4aW4pO1xuXHRcdFx0bWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIHJvb3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBhZGRSb290ID0gKHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbCkgPT4ge1xuXHRpZiAoIXJvb3QpIHJldHVybjtcblx0aWYgKCFyb290cz8uaGFzPy4ocm9vdCkpIHtcblx0XHRyb290cz8uYWRkPy4ocm9vdCk7XG5cdFx0b2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3Iocm9vdCwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAobXV0YXRpb24pID0+IHVwZGF0ZUFsbE1peGlucyhtdXRhdGlvbi50YXJnZXQpKTtcblx0XHRvYnNlcnZlQnlTZWxlY3Rvcihyb290LCBcIltkYXRhLW1peGluXVwiLCAobXV0YXRpb24pID0+IHtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0b2JzZXJ2ZVN0eWxlVHJlZShyb290KTtcblx0fVxuXHRyZXR1cm4gcm9vdDtcbn07XG52YXIgdXBkYXRlQWxsTWl4aW5zID0gKGVsZW1lbnQpID0+IHtcblx0Y29uc3QgbmFtZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pO1xuXHRbLi4ubmV3IFNldChbLi4ubmFtZXNdLm1hcCgobikgPT4gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obikpLmZpbHRlcigobSkgPT4gISFtKSldLm1hcD8uKChtKSA9PiB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZWxlbWVudCwgbSkpO1xufTtcbnZhciB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwgPSAoZWxlbWVudHMsIG1peGluKSA9PiB7XG5cdGVsZW1lbnRzLmZvckVhY2goKGUpID0+IG1peGluID8gdXBkYXRlTWl4aW5BdHRyaWJ1dGVzKGUsIG1peGluKSA6IHVwZGF0ZUFsbE1peGlucyhlKSk7XG59O1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMgPSAobWl4aW4pID0+IHtcblx0Zm9yIChjb25zdCByb290IG9mIHJvb3RzKSB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwocm9vdD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBtaXhpbik7XG59O1xudmFyIG5hbWVSZWdpc3RyeUYgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGtleSkgPT4ge1xuXHRtaXhpblJlZ2lzdHJ5Py5kZWxldGU/LihrZXkpO1xufSk7XG52YXIgcmVnaXN0ZXJNaXhpbiA9IChuYW1lLCBtaXhpbikgPT4ge1xuXHRpZiAoIW1peGluTmFtZXNwYWNlPy5oYXM/LihtaXhpbikpIHtcblx0XHRjb25zdCBrZXkgPSBuYW1lPy50cmltPy4oKTtcblx0XHRpZiAoa2V5KSB7XG5cdFx0XHRtaXhpbk5hbWVzcGFjZT8uc2V0Py4obWl4aW4sIGtleSk7XG5cdFx0XHRtaXhpblJlZ2lzdHJ5Py5zZXQ/LihrZXksIG1peGluKTtcblx0XHRcdG5hbWVSZWdpc3RyeUY/LnJlZ2lzdGVyPy4obWl4aW4sIGtleSk7XG5cdFx0XHR1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzKG1peGluKTtcblx0XHR9XG5cdH1cbn07XG5hZGRSb290KHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciBET01NaXhpbiA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IobmFtZSA9IG51bGwpIHtcblx0XHRpZiAobmFtZSkgcmVnaXN0ZXJNaXhpbihuYW1lLCB0aGlzKTtcblx0fVxuXHRjb25uZWN0KHdFbGVtZW50LCB3U2VsZiwgcmVsYXRlZCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsZW1lbnQsIHdTZWxmLCByZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c3RvcmVGb3JFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gbmFtZWRTdG9yZU1hcHMuZ2V0KHRoaXMubmFtZSB8fCBcIlwiKT8uZ2V0Py4oZWxlbWVudCk7XG5cdH1cblx0cmVsYXRlZEZvckVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KTtcblx0fVxuXHRnZXQgZWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIG1peGluRWxlbWVudHM/LmdldD8uKHRoaXMpO1xuXHR9XG5cdGdldCBzdG9yYWdlKCkge1xuXHRcdHJldHVybiBuYW1lZFN0b3JlTWFwcz8uZ2V0Py4odGhpcy5uYW1lIHx8IFwiXCIpO1xuXHR9XG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBtaXhpbk5hbWVzcGFjZT8uZ2V0Py4odGhpcyk7XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9IYW5kbGVyLnRzXG52YXIgaGFuZGxlSGlkZGVuID0gKGVsZW1lbnQsIF8sIHZpc2libGUpID0+IHtcblx0Y29uc3QgJHJlZiA9IHZpc2libGU7XG5cdGlmIChoYXNWYWx1ZSh2aXNpYmxlKSkgdmlzaWJsZSA9IHZpc2libGUudmFsdWU7XG5cdGNvbnN0IGlzVmlzaWJsZSA9ICh2aXNpYmxlID0gbm9ybWFsaXplUHJpbWl0aXZlKHZpc2libGUpKSAhPSBudWxsICYmIHZpc2libGUgIT09IGZhbHNlO1xuXHQkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIGVsZW1lbnQuaGlkZGVuID0gIWlzVmlzaWJsZTtcblx0XHRlbHNlIGlmIChpc1Zpc2libGUpIGVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIik7XG5cdFx0ZWxzZSBlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIsIFwiXCIpO1xuXHR9KTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGhhbmRsZVByb3BlcnR5ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCEocHJvcCA9IHR5cGVvZiBwcm9wID09IFwic3RyaW5nXCIgPyBrZWJhYlRvQ2FtZWwocHJvcCkgOiBwcm9wKSB8fCAhZWwgfHwgW1xuXHRcdFwic3R5bGVcIixcblx0XHRcImRhdGFzZXRcIixcblx0XHRcImF0dHJpYnV0ZVN0eWxlTWFwXCIsXG5cdFx0XCJzdHlsZU1hcFwiLFxuXHRcdFwiY29tcHV0ZWRTdHlsZU1hcFwiXG5cdF0uaW5kZXhPZihwcm9wIHx8IFwiXCIpICE9IC0xKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWwudmFsdWU7XG5cdGlmIChlbD8uW3Byb3BdID09PSB2YWwpIHJldHVybiBlbDtcblx0aWYgKGVsPy5bcHJvcF0gIT09IHZhbCkgJGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHZhbCAhPSBudWxsKSBlbFtwcm9wXSA9IHZhbDtcblx0XHRlbHNlIGRlbGV0ZSBlbFtwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlRGF0YXNldCA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IGRhdGFzZXRSZWYgPSBlbD8uZGF0YXNldDtcblx0aWYgKCFwcm9wIHx8ICFlbCB8fCAhZGF0YXNldFJlZikgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsPy52YWx1ZTtcblx0cHJvcCA9IGtlYmFiVG9DYW1lbChwcm9wKTtcblx0aWYgKGRhdGFzZXRSZWY/Lltwcm9wXSA9PT0gKHZhbCA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2YWwpKSkgcmV0dXJuIGVsO1xuXHRpZiAodmFsID09IG51bGwgfHwgdmFsID09PSBmYWxzZSkgZGVsZXRlIGRhdGFzZXRSZWZbcHJvcF07XG5cdGVsc2UgJGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB2YWwgIT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsICE9IFwiZnVuY3Rpb25cIikgZGF0YXNldFJlZltwcm9wXSA9IFN0cmluZyh2YWwpO1xuXHRcdGVsc2UgZGVsZXRlIGRhdGFzZXRSZWZbcHJvcF07XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGRlbGV0ZVN0eWxlUHJvcGVydHkgPSAoZWwsIG5hbWUpID0+IGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KGNhbWVsVG9LZWJhYihuYW1lKSk7XG52YXIgaGFuZGxlU3R5bGVDaGFuZ2UgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRjb25zdCBzdHlsZVJlZiA9IGVsPy5zdHlsZTtcblx0aWYgKCFwcm9wIHx8IHR5cGVvZiBwcm9wICE9IFwic3RyaW5nXCIgfHwgIWVsIHx8ICFzdHlsZVJlZikgcmV0dXJuIGVsO1xuXHQkYXZvaWRUcmlnZ2VyKHZhbCwgKCkgPT4ge1xuXHRcdGlmIChpc1ZhbCh2YWwpIHx8IGhhc1ZhbHVlKHZhbCkgfHwgaXNWYWx1ZVVuaXQodmFsKSkgc2V0U3R5bGVQcm9wZXJ0eShlbCwgcHJvcCwgdmFsKTtcblx0XHRlbHNlIGlmICh2YWwgPT0gbnVsbCkgZGVsZXRlU3R5bGVQcm9wZXJ0eShlbCwgcHJvcCk7XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGhhbmRsZUF0dHJpYnV0ZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGlmICghcHJvcCB8fCAhZWwpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0cHJvcCA9IGNhbWVsVG9LZWJhYihwcm9wKTtcblx0aWYgKGVsPy5nZXRBdHRyaWJ1dGU/Lihwcm9wKSA9PT0gKHZhbCA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2YWwpKSkgcmV0dXJuIGVsO1xuXHQkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiICYmIHZhbCAhPSBudWxsICYmICh0eXBlb2YgdmFsID09IFwiYm9vbGVhblwiID8gdmFsID09IHRydWUgOiB0cnVlKSkgZWw/LnNldEF0dHJpYnV0ZT8uKHByb3AsIFN0cmluZyh2YWwpKTtcblx0XHRlbHNlIGVsPy5yZW1vdmVBdHRyaWJ1dGU/Lihwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9qdW5jdGlvbi90eXBlcy50c1xuZnVuY3Rpb24ganVuY3Rpb25Ub0JveChhLCBiKSB7XG5cdGNvbnN0IGxlZnQgPSBNYXRoLm1pbihhLngsIGIueCk7XG5cdGNvbnN0IHRvcCA9IE1hdGgubWluKGEueSwgYi55KTtcblx0Y29uc3QgcmlnaHQgPSBNYXRoLm1heChhLngsIGIueCk7XG5cdGNvbnN0IGJvdHRvbSA9IE1hdGgubWF4KGEueSwgYi55KTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGg6IHJpZ2h0IC0gbGVmdCxcblx0XHRoZWlnaHQ6IGJvdHRvbSAtIHRvcFxuXHR9O1xufVxudmFyIEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgSlVOQ1RJT05fRFJBR19FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgSlVOQ1RJT05fUkVTSVpFX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tcmVzaXplOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tcmVzaXplOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXJlc2l6ZTplbmRcIlxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL2p1bmN0aW9uL0p1bmN0aW9uTWl4aW5zLnRzXG52YXIgbWl4aW5EaXNwb3NlcnNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRGlzcG9zZXJzXCIpO1xudmFyIG1peGluRGlzcG9zZXJzID0gZ2xvYmFsVGhpc1ttaXhpbkRpc3Bvc2Vyc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHB1c2hEaXNwb3NhYmxlID0gKGhvc3QsIG1peGluTmFtZSwgZm4pID0+IHtcblx0Y29uc3QgbWFwID0gbWl4aW5EaXNwb3NlcnMuZ2V0KGhvc3QpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGNvbnN0IGxpc3QgPSBtYXAuZ2V0KG1peGluTmFtZSkgPz8gW107XG5cdGxpc3QucHVzaChmbik7XG5cdG1hcC5zZXQobWl4aW5OYW1lLCBsaXN0KTtcblx0bWl4aW5EaXNwb3NlcnMuc2V0KGhvc3QsIG1hcCk7XG59O1xudmFyIHJ1bkRpc3Bvc2VycyA9IChob3N0LCBtaXhpbk5hbWUpID0+IHtcblx0Y29uc3QgbWFwID0gbWl4aW5EaXNwb3NlcnMuZ2V0KGhvc3QpO1xuXHRjb25zdCBsaXN0ID0gbWFwPy5nZXQobWl4aW5OYW1lKTtcblx0aWYgKCFsaXN0KSByZXR1cm47XG5cdGZvciAoY29uc3QgZm4gb2YgbGlzdCkgdHJ5IHtcblx0XHRmbigpO1xuXHR9IGNhdGNoIHt9XG5cdG1hcC5kZWxldGUobWl4aW5OYW1lKTtcblx0aWYgKG1hcC5zaXplID09PSAwKSBtaXhpbkRpc3Bvc2Vycy5kZWxldGUoaG9zdCk7XG59O1xudmFyIHBhcnNlUHhWYXIgPSAoaG9zdCwgbmFtZSkgPT4ge1xuXHRjb25zdCByYXcgPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lihob3N0KT8uZ2V0UHJvcGVydHlWYWx1ZT8uKG5hbWUpPy50cmltPy4oKSA/PyBcIlwiO1xuXHRjb25zdCBuID0gcGFyc2VGbG9hdChyYXcpO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IDA7XG59O1xudmFyIHF1ZXJ5SGFuZGxlID0gKGhvc3QsIGF0dHIsIGZhbGxiYWNrKSA9PiB7XG5cdGNvbnN0IHNlbCA9IGhvc3QuZ2V0QXR0cmlidXRlKGF0dHIpPy50cmltKCk7XG5cdGlmICghc2VsKSByZXR1cm4gZmFsbGJhY2s7XG5cdGNvbnN0IGZvdW5kID0gaG9zdC5xdWVyeVNlbGVjdG9yKHNlbCk7XG5cdHJldHVybiBmb3VuZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZm91bmQgOiBmYWxsYmFjaztcbn07XG52YXIgSnVuY3Rpb25TZWxlY3RNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG92ZXJsYXkuY2xhc3NOYW1lID0gXCJ1aS1qdW5jdGlvbi1zZWxlY3Qtb3ZlcmxheVwiO1xuXHRcdG92ZXJsYXkuc2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1vdmVybGF5XCIsIFwiXCIpO1xuXHRcdG92ZXJsYXkuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OnZhcigtLXotbWF4LCA5OTk5KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNWE3ZmZmKSA3MCUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kOmNvbG9yLW1peChpbiBva2xhYiwgdmFyKC0tY29sb3ItcHJpbWFyeSwgIzVhN2ZmZikgMTQlLCB0cmFuc3BhcmVudCk7ZGlzcGxheTpub25lO2luc2V0OmF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowO1wiO1xuXHRcdGNvbnN0IGVuc3VyZVBvc2l0aW9uZWQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoKGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpKT8ucG9zaXRpb24gPT09IFwic3RhdGljXCIpIGhvc3Quc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fTtcblx0XHRlbnN1cmVQb3NpdGlvbmVkKCk7XG5cdFx0aG9zdC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblx0XHRsZXQgYWN0aXZlID0gZmFsc2U7XG5cdFx0bGV0IGEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0bGV0IGIgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0Y29uc3QgbG9jYWxQb2ludCA9IChldikgPT4ge1xuXHRcdFx0Y29uc3QgciA9IGhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBldi5jbGllbnRYIC0gci5sZWZ0LFxuXHRcdFx0XHR5OiBldi5jbGllbnRZIC0gci50b3Bcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBhcHBseU92ZXJsYXkgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aWYgKGJveC53aWR0aCA8IDEgJiYgYm94LmhlaWdodCA8IDEpIHtcblx0XHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdG92ZXJsYXkuc3R5bGUubGVmdCA9IGAke2JveC5sZWZ0fXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUudG9wID0gYCR7Ym94LnRvcH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLndpZHRoID0gYCR7Ym94LndpZHRofXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7Ym94LmhlaWdodH1weGA7XG5cdFx0fTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLWp1bmN0aW9uLWlnbm9yZS1zZWxlY3RdLCBbZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZV0sIFtkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVdLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKSByZXR1cm47XG5cdFx0XHRpZiAoIShldi50YXJnZXQgPT09IGhvc3QgfHwgaG9zdC5jb250YWlucyhldi50YXJnZXQpKSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdGEgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGIgPSB7IC4uLmEgfTtcblx0XHRcdGhvc3Quc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YiA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3QgZW5kID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGVuZChldik7XG5cdFx0fTtcblx0XHRjb25zdCBvbkNhbmNlbCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmNhbmNlbCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHsgaG9zdCB9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRvdmVybGF5LnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVyY2FuY2VsXCIsIG9uQ2FuY2VsKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvbkRyYWdNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpKTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXlcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpKTtcblx0XHRjb25zdCBwcmV2aW91c1RyYW5zZm9ybSA9IGhvc3Quc3R5bGUudHJhbnNmb3JtO1xuXHRcdGlmICghaG9zdC5zdHlsZS50cmFuc2Zvcm0gfHwgaG9zdC5zdHlsZS50cmFuc2Zvcm0gPT09IFwibm9uZVwiKSBob3N0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoY2FsYyh2YXIoLS1qeC1kcmFnLXgsIDApICogMXB4KSwgY2FsYyh2YXIoLS1qeC1kcmFnLXksIDApICogMXB4KSwgMClcIjtcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IGRyYWdnaW5nID0gZmFsc2U7XG5cdFx0bGV0IHN0YXJ0WCA9IDA7XG5cdFx0bGV0IHN0YXJ0WSA9IDA7XG5cdFx0bGV0IGJhc2VYID0gMDtcblx0XHRsZXQgYmFzZVkgPSAwO1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldCAhPT0gaGFuZGxlICYmICFoYW5kbGUuY29udGFpbnMoZXYudGFyZ2V0KSkgcmV0dXJuO1xuXHRcdFx0ZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0c3RhcnRYID0gZXYuY2xpZW50WDtcblx0XHRcdHN0YXJ0WSA9IGV2LmNsaWVudFk7XG5cdFx0XHRiYXNlWCA9IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKTtcblx0XHRcdGJhc2VZID0gcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpO1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0Y2xpZW50WDogZXYuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiBldi5jbGllbnRZLFxuXHRcdFx0XHRcdGJhc2VYLFxuXHRcdFx0XHRcdGJhc2VZXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFkcmFnZ2luZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgZHggPSBldi5jbGllbnRYIC0gc3RhcnRYO1xuXHRcdFx0Y29uc3QgZHkgPSBldi5jbGllbnRZIC0gc3RhcnRZO1xuXHRcdFx0Y29uc3QgbnggPSBiYXNlWCArIGR4O1xuXHRcdFx0Y29uc3QgbnkgPSBiYXNlWSArIGR5O1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy14XCIsIG54KTtcblx0XHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBueSk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRkeCxcblx0XHRcdFx0XHRkeSxcblx0XHRcdFx0XHR4OiBueCxcblx0XHRcdFx0XHR5OiBueVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR4OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIiksXG5cdFx0XHRcdFx0eTogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCAoKSA9PiB7XG5cdFx0XHRob3N0LnN0eWxlLnRyYW5zZm9ybSA9IHByZXZpb3VzVHJhbnNmb3JtO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvblJlc2l6ZU1peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0bGV0IHN4ID0gMDtcblx0XHRsZXQgc3kgPSAwO1xuXHRcdGxldCBzdyA9IDA7XG5cdFx0bGV0IHNoID0gMDtcblx0XHRjb25zdCBtaW5XID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KGhvc3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKTtcblx0XHRjb25zdCBtaW5IID0gTWF0aC5tYXgoODAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4taFwiKSB8fCBcIlwiKSB8fCA4MCk7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IHRydWU7XG5cdFx0XHRzeCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzeSA9IGV2LmNsaWVudFk7XG5cdFx0XHRzdyA9IGhvc3Qub2Zmc2V0V2lkdGg7XG5cdFx0XHRzaCA9IGhvc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogc3csXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IG53ID0gTWF0aC5tYXgobWluVywgc3cgKyAoZXYuY2xpZW50WCAtIHN4KSk7XG5cdFx0XHRjb25zdCBuaCA9IE1hdGgubWF4KG1pbkgsIHNoICsgKGV2LmNsaWVudFkgLSBzeSkpO1xuXHRcdFx0aG9zdC5zdHlsZS53aWR0aCA9IGAke253fXB4YDtcblx0XHRcdGhvc3Quc3R5bGUuaGVpZ2h0ID0gYCR7bmh9cHhgO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogbncsXG5cdFx0XHRcdFx0aGVpZ2h0OiBuaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIXJlc2l6aW5nKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBob3N0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogaG9zdC5vZmZzZXRIZWlnaHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmNhbmNlbFwiLCBvblVwKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbm5ldyBKdW5jdGlvblNlbGVjdE1peGluKCk7XG5uZXcgSnVuY3Rpb25EcmFnTWl4aW4oKTtcbm5ldyBKdW5jdGlvblJlc2l6ZU1peGluKCk7XG5cbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgRE9NTWl4aW4sIEp1bmN0aW9uRHJhZ01peGluLCBKdW5jdGlvblJlc2l6ZU1peGluLCBKdW5jdGlvblNlbGVjdE1peGluLCBNQVRDSCwgTU9DLCBNT0NFbGVtZW50LCBSQUZCZWhhdmlvciwgUkVHRVgsIFJPT1QsIFdhdnlTaGFwZWRDaXJjbGUsIF9fZXhwb3J0UHJvcGVydGllcywgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcywgYWRkRXZlbnQsIGFkZEV2ZW50cywgYWRkRXZlbnRzTGlzdCwgYWRkUm9vdCwgYW5pbWF0ZUhpZGUsIGFuaW1hdGVTaG93LCBhdmFpbFNpemUsIGJiaCwgYmJ3LCBiaW5kQmVoYXZpb3IsIGJpbmRNaXhpbnMsIGJpbmRTdG9yZSwgYm9yZGVyQm94SGVpZ2h0LCBib3JkZXJCb3hXaWR0aCwgYm91bmRCZWhhdmlvcnMsIGJvdW5kTWl4aW5TZXQsIGNiaCwgY2J3LCBjaGFuZ2Vab29tLCBjbGFzc2VzLCBjb21wdXRlQ2FyZXRQb3NpdGlvbiwgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50LCBjb250YWluc09yU2VsZiwgY29udGVudEJveEhlaWdodCwgY29udGVudEJveFdpZHRoLCBjcmVhdGVFbGVtZW50VmFuaWxsYSwgY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQsIGRlbGV0ZVN0eWxlUHJvcGVydHksIGRldGVjdE1vYmlsZSwgZG9Cb3JkZXJPYnNlcnZlLCBkb0NvbnRlbnRPYnNlcnZlLCBlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5LCBmaXhPcmllbnRUb1NjcmVlbiwgZml4ZWRDbGllbnRab29tLCBnZXRBdmFpbFNpemUsIGdldEJvdW5kaW5nT3JpZW50UmVjdCwgZ2V0Q29ycmVjdE9yaWVudGF0aW9uLCBnZXRFbGVtZW50UmVsYXRlZCwgZ2V0RXZlbnRUYXJnZXQsIGdldE9mZnNldFBhcmVudCwgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4sIGdldFN0b3Jlc09mRWxlbWVudCwgZ2V0Wm9vbSwgaGFuZGxlQXR0cmlidXRlLCBoYW5kbGVEYXRhc2V0LCBoYW5kbGVIaWRkZW4sIGhhbmRsZVByb3BlcnR5LCBoYW5kbGVTdHlsZUNoYW5nZSwgaGFzUGFyZW50LCBodG1sLCBpbmNsdWRlU2VsZiwgaW5kZXhPZiwgaW5pdFRleHRTdHlsZSwgaW5pdFZpc2liaWxpdHksIGlzRWxlbWVudCwgaXNJbkZvY3VzLCBpc01vYmlsZSwgaXNOZWFybHlJZGVudGl0eSwgaXNWYWxpZFBhcmVudCwgbWFrZVJBRkN5Y2xlLCBtZWFzdXJlSW5wdXRJbkZvY3VzLCBtZWFzdXJlVGV4dCwgbWl4aW5EaXNwb3NlcnMsIG1peGluRWxlbWVudHMsIG1peGluTmFtZXNwYWNlLCBtaXhpblJlZ2lzdHJ5LCBuYW1lUmVnaXN0cnlGLCBuYW1lZFN0b3JlTWFwcywgb2JzZXJ2ZUF0dHJpYnV0ZSwgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IsIG9ic2VydmVCb3JkZXJCb3gsIG9ic2VydmVCeVNlbGVjdG9yLCBvYnNlcnZlQ29udGVudEJveCwgb25Cb3JkZXJPYnNlcnZlLCBvbkNvbnRlbnRPYnNlcnZlLCBvcmllbnRPZiwgb3JpZW50YXRpb25OdW1iZXJNYXAsIHBhc3NpdmVPcHRzLCByZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQsIHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50LCByZWZsZWN0QmVoYXZpb3JzLCByZWZsZWN0TWl4aW5zLCByZWZsZWN0U3RvcmVzLCByZWdpc3Rlck1peGluLCByZW1vdmVFdmVudCwgcmVtb3ZlRXZlbnRzLCByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQsIHJvb3RzLCBzZXRBdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzSWZOdWxsLCBzZXRDaGVja2VkLCBzZXRJZGxlSW50ZXJ2YWwsIHRocm90dGxlTWFwLCB1bmZpeGVkQ2xpZW50Wm9vbSwgdXBkYXRlQWxsTWl4aW5zLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCwgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cywgdXBkYXRlVlAsIHVybCwgd2hlbkFueVNjcmVlbkNoYW5nZXMsIHpvb21PZiwgem9vbVZhbHVlcyB9OyJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsaUJBQUFBLEdBQWUsZ0JBQUFDLElBQWMsZ0JBQUFDLElBQWMsWUFBQUMsR0FBVSxxQkFBQUMsSUFBbUIsU0FBQUMsSUFBTyxlQUFBQyxJQUFhLGdCQUFBQyxJQUFjLHVCQUFBQyxJQUFxQixzQkFBQUMsSUFBb0IsK0JBQUFDLFVBQW1DO0FBQy9MLFNBQVMsb0JBQUFDLElBQWtCLG9CQUFBQyxTQUF3QjtBQUVuRCxjQUFjO0FBR2QsSUFBSUMsS0FBa0MsdUJBQU8sSUFBSSxrQ0FBa0MsR0FDL0VDLEtBQTRCLFdBQVdELEVBQStCLE1BQXNCLG9CQUFJLElBQUk7QUFDeEc7QUFBQSxFQUNDO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFB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a0I7QUFDdEIsSUFBSVksR0FBb0I7IiwKICAibmFtZXMiOiBbIiRhdm9pZFRyaWdnZXIiLCAiY2FtZWxUb0tlYmFiIiwgImN2dF9jc190b19vcyIsICJoYXNWYWx1ZSIsICJpc0FycmF5T3JJdGVyYWJsZSIsICJpc1ZhbCIsICJpc1ZhbHVlVW5pdCIsICJrZWJhYlRvQ2FtZWwiLCAibm9ybWFsaXplR3JpZExheW91dCIsICJub3JtYWxpemVQcmltaXRpdmUiLCAicmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsIiwgIm9ic2VydmVTdHlsZVRyZWUiLCAic2V0U3R5bGVQcm9wZXJ0eSIsICJfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sIiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMiLCAib3B0aW9ucyIsICJuYW1lIiwgImUiLCAiX19leHBvcnRQcm9wZXJ0aWVzIiwgImlzTW9iaWxlIiwgImNoZWNrIiwgImEiLCAiZGV0ZWN0TW9iaWxlIiwgImNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrIiwgInJ1bldoZW5JZGxlJDEiLCAiY2IiLCAidGltZW91dCIsICJnZXRPZmZzZXRQYXJlbnQiLCAiZWxlbWVudCIsICJnZXRPZmZzZXRQYXJlbnRDaGFpbiIsICJwYXJlbnRzIiwgImN1cnJlbnQiLCAicGFyZW50IiwgImlzTmVhcmx5SWRlbnRpdHkiLCAibWF0cml4IiwgImVwc2lsb24iLCAibWFrZVJBRkN5Y2xlIiwgImNvbnRyb2wiLCAickFGIiwgInJlcyIsICJSQUZCZWhhdmlvciIsICJzaGVkIiwgIlJPT1QiLCAic2V0QXR0cmlidXRlc0lmTnVsbCIsICJhdHRycyIsICJ2YWx1ZSIsICJvbGQiLCAic2V0QXR0cmlidXRlcyIsICJ0aHJvdHRsZU1hcCIsICJzZXRJZGxlSW50ZXJ2YWwiLCAiYXJncyIsICJzdGF0dXMiLCAiciIsICJib3JkZXJCb3hXaWR0aCIsICJib3JkZXJCb3hIZWlnaHQiLCAiY29udGVudEJveFdpZHRoIiwgImNvbnRlbnRCb3hIZWlnaHQiLCAib25Cb3JkZXJPYnNlcnZlIiwgIm9uQ29udGVudE9ic2VydmUiLCAiZG9Db250ZW50T2JzZXJ2ZSIsICJvYnNlcnZlciIsICJlbnRyaWVzIiwgImVudHJ5IiwgImNvbnRlbnRCb3hTaXplIiwgImRvQm9yZGVyT2JzZXJ2ZSIsICJib3JkZXJCb3hTaXplIiwgInVybCIsICJ0eXBlIiwgInNvdXJjZSIsICJodG1sIiwgInBhcnNlZCIsICJzZXRDaGVja2VkIiwgImlucHV0IiwgImV2IiwgImlzVmFsaWRQYXJlbnQiLCAiaW5kZXhPZiIsICJub2RlIiwgIk1BVENIIiwgIlJFR0VYIiwgImNyZWF0ZUVsZW1lbnRWYW5pbGxhIiwgInNlbGVjdG9yIiwgImNyZWF0ZSIsICJtYXRjaCIsICJjbGFzc05hbWUiLCAiaXNFbGVtZW50IiwgImVsIiwgImluY2x1ZGVTZWxmIiwgInRhcmdldCIsICJzZWwiLCAiaGFzUGFyZW50IiwgInBhc3NpdmVPcHRzIiwgImFkZEV2ZW50IiwgIm9wdHMiLCAid3IiLCAicmVtb3ZlRXZlbnQiLCAiYWRkRXZlbnRzIiwgInJvb3QiLCAiaGFuZGxlcnMiLCAiYWRkRXZlbnRzTGlzdCIsICJldmVudHMiLCAibGlzdCIsICJjYnMiLCAicmVtb3ZlRXZlbnRzIiwgImdldEV2ZW50VGFyZ2V0IiwgInBhdGgiLCAiY29udGFpbnNPclNlbGYiLCAiYiIsICJhRWwiLCAiYkVsIiwgImFJbmRleCIsICJiSW5kZXgiLCAiTU9DRWxlbWVudCIsICJzZWxmIiwgImhvc3RNYXRjaGVkIiwgImNsb3Nlc3QiLCAiaG9zdCIsICJNT0MiLCAiaXNJbkZvY3VzIiwgInNlbGVjdG9yT3JFbGVtZW50IiwgImRpciIsICJhY3RpdmUiLCAiaXNGb2N1c2VkIiwgImlzSG92ZXJlZCIsICJhbHRDbmQiLCAiZ2V0Wm9vbSIsICJ6b29tVmFsdWVzU3ltYm9sIiwgInpvb21WYWx1ZXMiLCAiem9vbU9mIiwgImNvbnRhaW5lciIsICJjaGFuZ2Vab29tIiwgInNjYWxlIiwgImZpeGVkQ2xpZW50Wm9vbSIsICJ1bmZpeGVkQ2xpZW50Wm9vbSIsICJvcmllbnRPZiIsICJyYXciLCAibiIsICJnZXRCb3VuZGluZ09yaWVudFJlY3QiLCAib3JpZW50IiwgInpvb20iLCAiYm94IiwgIm5ieCIsICJvcl9pIiwgInZ2IiwgInNpemUiLCAibGVmdF8iLCAidG9wXyIsICJyaWdodF8iLCAiYm90dG9tXyIsICJsZWZ0IiwgInJpZ2h0IiwgInRvcCIsICJib3R0b20iLCAid2lkdGgiLCAiaGVpZ2h0IiwgImJidyIsICJiYmgiLCAiY2J3IiwgImNiaCIsICJydW5XaGVuSWRsZSIsICJLRVlCT0FSRF9PVkVSTEFZX1BYIiwgInZpcnR1YWxLZXlib2FyZCIsICJlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5IiwgInZrIiwgImlzSW1lVGFyZ2V0IiwgInRhZyIsICJsYXlvdXRMb2NrT3JpZW50IiwgImxheW91dExvY2tXIiwgImxheW91dExvY2tIIiwgImNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInNhZmVXaWR0aCIsICJzYWZlSGVpZ2h0IiwgInNhZmVMZWZ0IiwgInNhZmVUb3AiLCAicmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInJlYWRMYXlvdXRWaWV3cG9ydCIsICJpbm5lclciLCAiaW5uZXJIIiwgInZ2VyIsICJ2dkgiLCAidnZUb3AiLCAidmtIIiwgInZ2T3ZlcmxhcCIsICJrZXlib2FyZCIsICJjYW5kaWRhdGVXIiwgImNhbmRpZGF0ZUgiLCAic3VkZGVuU2hyaW5rIiwgInBpbk92ZXJsYXlTY3JvbGwiLCAiZ2V0QXZhaWxTaXplIiwgImwiLCAibGF5b3V0IiwgInZ2QmxvY2siLCAiYXciLCAiYWgiLCAiYXZhaWxTaXplIiwgImNsYXNzZXMiLCAib3JpZW50YXRpb25OdW1iZXJNYXAiLCAidXBkYXRlVlAiLCAicnVsZSIsICJwcm9wTmFtZSIsICJwcm9wVmFsdWUiLCAiZXhpc3RzIiwgImdldENvcnJlY3RPcmllbnRhdGlvbiIsICJvcmllbnRhdGlvblR5cGUiLCAicGFzc2l2ZU9wdHMkMSIsICJ3aGVuQW55U2NyZWVuQ2hhbmdlcyIsICJ0aWNraW5nIiwgInVwZGF0ZSIsICJ1bnN1YnNjcmliZXJzIiwgInVuc3ViIiwgImZpeE9yaWVudFRvU2NyZWVuIiwgIm5leHQiLCAiY3R4IiwgImluaXRUZXh0U3R5bGUiLCAic3R5bGUiLCAiZm9udFdlaWdodCIsICJmb250U2l6ZSIsICJmb250RmFtaWx5IiwgImZvbnRTdHJldGNoIiwgIm1lYXN1cmVUZXh0IiwgInRleHQiLCAibWVhc3VyZUlucHV0SW5Gb2N1cyIsICJjb21wdXRlQ2FyZXRQb3NpdGlvbiIsICJwb2ludCIsICJjdXJyZW50V2lkdGgiLCAiY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50IiwgImNsaWVudCIsICJyZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCIsICJsYXlvdXRPdmVycmlkZSIsICJjIiwgImJhc2UiLCAicmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50IiwgImdyaWRTeXN0ZW0iLCAiY2xpZW50UG9pbnQiLCAibW9kZSIsICJyZWN0IiwgImNzIiwgInBsIiwgInB0IiwgInByIiwgInBiIiwgImNvbnRlbnRXIiwgImNvbnRlbnRIIiwgImNzQ29vcmQiLCAiYW5pbWF0ZVNob3ciLCAiYW5pbWF0aW9uRG9uZSIsICJhbmltYXRlIiwgImRvbmUiLCAiZW5kQW5pbWF0aW9uIiwgImV2ZW50IiwgInJlc29sdmUiLCAicmVqZWN0IiwgInByb21pc2UiLCAicmVxIiwgImFuaW1hdGVIaWRlIiwgIm9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCIsICJvbkJvcmRlck9ic2VydmUkMSIsICJvbkNvbnRlbnRPYnNlcnZlU3ltYm9sIiwgIm9uQ29udGVudE9ic2VydmUkMSIsICJ1bndyYXBGcm9tUXVlcnkiLCAibm9ybWFsaXplU2VsZWN0b3IiLCAiZmFsbGJhY2siLCAic2FmZVF1ZXJ5U2VsZWN0b3JBbGwiLCAic2FmZU1hdGNoZXMiLCAib2JzZXJ2ZUNvbnRlbnRCb3giLCAiY2FsbGJhY2tzIiwgIm9ic2VydmVCb3JkZXJCb3giLCAib2JzZXJ2ZUF0dHJpYnV0ZSIsICJhdHRyaWJ1dGUiLCAib2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IiLCAiYXR0cmlidXRlTGlzdCIsICJzIiwgIm11dGF0aW9uTGlzdCIsICJtdXRhdGlvbiIsICJhZGRlZE5vZGVzIiwgInJlbW92ZWROb2RlcyIsICJvYnNlcnZlQnlTZWxlY3RvciIsICJtdXQiLCAib2JzIiwgInVud3JhcE5vZGVzQnlTZWxlY3RvciIsICJub2RlcyIsICIkbm9kZXMiLCAib2JSZWYiLCAiaGFuZGxlTXV0YXRpb24iLCAiaGFuZGxlQ29tZSIsICJoYW5kbGVPdXRDb21lIiwgImhhbmRsZUZvY3VzQ2xpY2siLCAiZmFjdG9ycyIsICJzZWxlY3RlZCIsICJpbml0VmlzaWJpbGl0eSIsICJXYXZ5U2hhcGVkQ2lyY2xlIiwgInN0ZXBzIiwgImFtcGxpdHVkZSIsICJmcmVxIiwgInBvaW50cyIsICJpIiwgImFuZ2xlIiwgInN0ZXAiLCAidmFyaWFudCIsICJmdW5jIiwgImJvdW5kQmVoYXZpb3JzIiwgImJpbmRCZWhhdmlvciIsICJiZWhTZXQiLCAiYmVoYXZpb3IiLCAicmVmbGVjdEJlaGF2aW9ycyIsICJiZWhhdmlvcnMiLCAibmFtZWRTdG9yZU1hcHNTeW1ib2wiLCAibmFtZWRTdG9yZU1hcHMiLCAiZ2V0U3RvcmVzT2ZFbGVtZW50IiwgIm1hcCIsICJFIiwgIm0iLCAiaXNXZWFrQ29tcGF0aWJsZSIsICJiaW5kU3RvcmUiLCAib2JqIiwgIndlYWtNYXAiLCAicmVmbGVjdFN0b3JlcyIsICJzdG9yZXMiLCAicmVmbGVjdE1peGlucyIsICJtaXhpbnMiLCAibWl4aW5TZXQiLCAiYm91bmRNaXhpblNldCIsICJiaW5kTWl4aW5zIiwgImdldEVsZW1lbnRSZWxhdGVkIiwgIm1peGluIiwgIm1peFNldCIsICJ3ZWwiLCAibWl4aW5FbGVtZW50cyIsICJib3VuZE1peGluU2V0U3ltYm9sIiwgIm1peGluRWxlbWVudHNTeW1ib2wiLCAibWl4aW5SZWdpc3RyeVN5bWJvbCIsICJtaXhpblJlZ2lzdHJ5IiwgIm1peGluTmFtZXNwYWNlU3ltYm9sIiwgIm1peGluTmFtZXNwYWNlIiwgInVwZGF0ZU1peGluQXR0cmlidXRlcyIsICJuYW1lcyIsICJyb290cyIsICJhZGRSb290IiwgInVwZGF0ZUFsbE1peGlucyIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwiLCAiZWxlbWVudHMiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyIsICJuYW1lUmVnaXN0cnlGIiwgImtleSIsICJyZWdpc3Rlck1peGluIiwgIkRPTU1peGluIiwgIndFbGVtZW50IiwgIndTZWxmIiwgInJlbGF0ZWQiLCAiaGFuZGxlSGlkZGVuIiwgIl8iLCAidmlzaWJsZSIsICIkcmVmIiwgImlzVmlzaWJsZSIsICJoYW5kbGVQcm9wZXJ0eSIsICJwcm9wIiwgInZhbCIsICJoYW5kbGVEYXRhc2V0IiwgImRhdGFzZXRSZWYiLCAiZGVsZXRlU3R5bGVQcm9wZXJ0eSIsICJoYW5kbGVTdHlsZUNoYW5nZSIsICJzdHlsZVJlZiIsICJoYW5kbGVBdHRyaWJ1dGUiLCAianVuY3Rpb25Ub0JveCIsICJKVU5DVElPTl9TRUxFQ1RfRVZFTlRTIiwgIkpVTkNUSU9OX0RSQUdfRVZFTlRTIiwgIkpVTkNUSU9OX1JFU0laRV9FVkVOVFMiLCAibWl4aW5EaXNwb3NlcnNTeW1ib2wiLCAibWl4aW5EaXNwb3NlcnMiLCAicHVzaERpc3Bvc2FibGUiLCAibWl4aW5OYW1lIiwgImZuIiwgInJ1bkRpc3Bvc2VycyIsICJwYXJzZVB4VmFyIiwgInF1ZXJ5SGFuZGxlIiwgImF0dHIiLCAiZm91bmQiLCAiSnVuY3Rpb25TZWxlY3RNaXhpbiIsICJ3RWwiLCAib3ZlcmxheSIsICJsb2NhbFBvaW50IiwgImFwcGx5T3ZlcmxheSIsICJvbkRvd24iLCAib25Nb3ZlIiwgImVuZCIsICJvblVwIiwgIm9uQ2FuY2VsIiwgIkp1bmN0aW9uRHJhZ01peGluIiwgInByZXZpb3VzVHJhbnNmb3JtIiwgImhhbmRsZSIsICJkcmFnZ2luZyIsICJzdGFydFgiLCAic3RhcnRZIiwgImJhc2VYIiwgImJhc2VZIiwgImR4IiwgImR5IiwgIm54IiwgIm55IiwgIkp1bmN0aW9uUmVzaXplTWl4aW4iLCAicmVzaXppbmciLCAic3giLCAic3kiLCAic3ciLCAic2giLCAibWluVyIsICJtaW5IIiwgIm53IiwgIm5oIl0KfQo=

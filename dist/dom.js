var Me = /* @__PURE__ */ new Set();
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
  if (!(!t || Me.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      Me.add(t);
    }
});
var Gt = () => {
}, Je = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, Jt = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, de = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), M = (e) => de(e, "value"), te = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), Fe = (e) => e && e?.replace?.(/-([a-z])/g, (t, n) => n.toUpperCase()), Ke = (e) => typeof CSSStyleValue < "u" && e instanceof CSSStyleValue, Qe = (e) => e != null && (typeof e == "boolean" ? e !== !1 : !0) && typeof e != "object" && typeof e != "function", ge = (e) => typeof e == "boolean" ? e ? "" : null : typeof e == "number" ? String(e) : e, Ee = /* @__PURE__ */ Symbol.for("@trigger-lock"), B = (e, t, n = "value") => {
  de(e, n) && (e[Ee] = !0);
  let r;
  try {
    r = t?.();
  } finally {
    de(e, n) && delete e[Ee];
  }
  return r;
}, Ie = (e) => {
  if (typeof e != "string") return null;
  const t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
  if (t?.length != 1) return null;
  const n = parseFloat(t[0][0]);
  return !Number.isNaN(n) && Number.isFinite(n) ? n : null;
}, et = (e) => Array.isArray(e) || e != null && typeof e == "object" && typeof e[Symbol.iterator] == "function", le = (e, t, n = 0) => {
  const r = [...t], i = [...e];
  return n % 2 && (i.reverse(), r.reverse()), [(n == 0 || n == 3 ? i[0] : r[0] - i[0]) || 0, (n == 0 || n == 1 ? i[1] : r[1] - i[1]) || 0];
}, H = (e, t = [4, 8]) => {
  if (Array.isArray(e) && e.length >= 2) return [Math.max(1, Math.floor(Number(e[0]) || t[0])), Math.max(1, Math.floor(Number(e[1]) || t[1]))];
  if (e && typeof e == "object") {
    const n = e;
    return [Math.max(1, Math.floor(Number(n.columns) || t[0])), Math.max(1, Math.floor(Number(n.rows) || t[1]))];
  }
  return [t[0], t[1]];
}, tt = (e, t) => {
  const [n, r] = H(t);
  return [Math.max(0, Math.min(n - 1, Math.floor(Number(e[0]) || 0))), Math.max(0, Math.min(r - 1, Math.floor(Number(e[1]) || 0)))];
}, nt = (e, t, n, r, i) => {
  const s = H(n), a = Math.max(1, t[0] || 1), o = Math.max(1, t[1] || 1), u = le(e, [a, o], r), p = {
    item: i?.redirect?.item ?? { id: "" },
    list: i?.redirect?.list ?? [],
    items: i?.redirect?.items ?? /* @__PURE__ */ new Map(),
    layout: s,
    size: [a, o]
  }, l = ot(u, p, r), h = (i?.mode ?? "floor") === "round" ? [Math.round(l[0]), Math.round(l[1])] : [Math.floor(l[0]), Math.floor(l[1])], c = it(h, p);
  return tt(c, s);
}, rt = (e) => e == null ? [] : Array.isArray(e) ? e : e instanceof Map ? Array.from(e.values()) : e instanceof Set || typeof e[Symbol.iterator] == "function" ? Array.from(e) : [], it = (e, t) => {
  const n = H(t?.layout ?? [4, 8]), r = {
    ...t,
    layout: n
  }, i = rt(r?.items), s = r?.item || {}, a = (f) => i.filter((m) => !(m == s || m?.id == s?.id)).some((m) => (m?.cell?.[0] || 0) == (f[0] || 0) && (m?.cell?.[1] || 0) == (f[1] || 0)), o = [...e];
  if (!a(o)) return [...o];
  const u = n[0] || 4, p = n[1] || 8, l = ([
    [o[0] + 1, o[1]],
    [o[0] - 1, o[1]],
    [o[0], o[1] + 1],
    [o[0], o[1] - 1]
  ].filter((f) => f[0] >= 0 && f[0] < u && f[1] >= 0 && f[1] < p) || []).find((f) => !a(f));
  if (l) return [...l];
  let h = 0, c = !0, d = [...o];
  for (; c && h++ < u * p; ) {
    if (!(c = a(d))) return [...d];
    d[0]++, d[0] >= u && (d[0] = 0, d[1]++, d[1] >= p && (d[1] = 0));
  }
  return [...o];
}, ot = (e, t, n = 0) => {
  const r = [...t.size], i = [...e], s = H(t.layout ?? [4, 8]);
  n % 2 && r.reverse();
  const a = [s[0] / r[0], s[1] / r[1]];
  return [i[0] * a[0], i[1] * a[1]];
}, at = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), Ae = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(at()), 0), st = (e) => e?.offsetParent ?? e?.host, Kt = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = st(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && t.push(n);
  }
  return t;
}, Qt = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, ut = () => {
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
}, en = (e = ut()) => (t) => e.shedule(t), tn = typeof document < "u" ? document?.documentElement : null, nn = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, r]) => {
      const i = e.getAttribute(n);
      r == null ? e.removeAttribute(n) : r != i && e.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, rn = (e, t = {}) => Array.from(Object.entries(t)).map(([n, r]) => {
  r == null ? e.removeAttribute(n) : e.setAttribute(n, r ?? e.getAttribute(n));
}), ct = /* @__PURE__ */ new Map(), on = (e, t = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return Ae(async () => {
    if (!(!e || typeof e != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((i) => setTimeout(i, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => Ae(i, t)), new Promise((i) => setTimeout(i, t))]);
      r.cancel = () => {
      };
    }
  }, { timeout: t }), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    ct.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var X = /* @__PURE__ */ Symbol("@border-box-width"), Y = /* @__PURE__ */ Symbol("@border-box-height"), G = /* @__PURE__ */ Symbol("@content-box-width"), J = /* @__PURE__ */ Symbol("@content-box-height"), Ce = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), an = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Re.has(e)) {
    e[G] = e.clientWidth, e[J] = e.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const s = i.contentBoxSize[0];
        s && (e[G] = Math.min(s.inlineSize, e.clientWidth), e[J] = Math.min(s.blockSize, e.clientHeight), t?.(e));
      }
    });
    Re.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, sn = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Ce.has(e)) {
    e[X] = e.offsetWidth, e[Y] = e.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const s = i.borderBoxSize[0];
        s && (e[X] = Math.min(s.inlineSize, e.offsetWidth), e[Y] = Math.min(s.blockSize, e.offsetHeight), t?.(e));
      }
    });
    Ce.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, un = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), cn = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, dn = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, ln = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, fn = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, pn = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", hn = `^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, yn = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), r, i = ""; e && (r = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, mn = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, gn = (e, t) => e.querySelector(t) ?? (e.matches(t) ? e : null), re = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, $e = {};
function y(e, t, n, r = $e) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function Pe(e, t, n, r = $e) {
  e?.removeEventListener?.(t, n, r);
}
var K = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? y(e, n, ...r) : y(e, n, r))), vn = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([r, i]) => ((et(i) ? [...i] : i) ?? [])?.map?.((s) => y(e, r, s)));
  }
}, bn = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? Pe(e, n, ...r) : Pe(e, n, r))), wn = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, Sn = (e, t, n) => {
  if (t == null || !(t instanceof Node) && t?.element == null) return !1;
  if (e == t || (e?.element ?? e) == (t?.element ?? t)) return !0;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const r = n.composedPath(), i = e?.element ?? e, s = t?.element ?? t;
    if (r.includes(i) && r.includes(s)) {
      const a = r.indexOf(i), o = r.indexOf(s);
      if (o >= 0 && a >= 0 && o < a) return !0;
    }
  }
  return !!(e?.contains?.(t?.element ?? t) || e?.getRootNode({ composed: !0 })?.host == (t?.element ?? t));
}, fe = (e, t, n) => {
  if (n?.composedPath && typeof n.composedPath == "function") {
    const o = n.composedPath();
    for (const u of o) if ((u instanceof HTMLElement || u instanceof Element) && u.matches?.(t))
      return u;
  }
  const r = e?.matches?.(t) ? e : null, i = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host, s = i?.matches?.(t) ? i : null, a = e?.closest?.(t) ?? r?.closest?.(t) ?? s?.closest?.(t) ?? null;
  return r ?? a ?? s;
}, xn = (e, t) => !!fe(e, t), Mn = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === e || re(r, e), s = e.matches(":hover");
  if (!i && !s && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!fe(e, t);
      {
        const a = i ? r : e.querySelector(":hover") || e, o = !!fe(a, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || o;
      }
    } else if (t instanceof HTMLElement) return n === "parent" ? re(e, t) || !1 : re(t, e) || !1;
  }
  return !0;
}, En = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, dt = /* @__PURE__ */ new WeakMap(), lt = (e = document.documentElement) => dt.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), An = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), Cn = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : lt(e)) || 1, pe = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, z = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, Rn = (e, t = null) => {
  const n = pe(e) || 1, r = e?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, s = t ?? (z(e) || 0), a = typeof window < "u" ? window.visualViewport : null, o = [((a?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((a?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [u, p] = le([i.left, i.top], o, s), [l, h] = le([i.right, i.bottom], o, s), [c, d] = s == 0 || s == 3 ? [u, l] : [l, u], [f, m] = s == 0 || s == 1 ? [p, h] : [h, p], [_, Ge] = s % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: c,
    top: f,
    right: d,
    bottom: m,
    width: _,
    height: Ge
  };
}, Pn = (e, t = null) => (t ?? z(e)) % 2 ? e[Y] ?? e?.clientHeight : e[X] ?? e?.clientWidth, zn = (e, t = null) => (t ?? z(e)) % 2 ? e[X] ?? e?.clientWidth : e[Y] ?? e?.clientHeight, Ln = (e, t = null) => (t ?? z(e)) % 2 ? e[J] ?? e?.clientHeight : e[G] ?? e?.clientWidth, kn = (e, t = null) => (t ?? z(e)) % 2 ? e[G] ?? e?.clientWidth : e[J] ?? e?.clientHeight, ft = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
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
}, he = Be(), Vn = [[":root, :host, :scope", he]], pt = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, ht = (e) => {
  const t = document.documentElement;
  Object.assign(he, Be()), Object.entries(he).forEach(([n, r]) => {
    const i = t?.style?.getPropertyValue(n);
    (!i || i != r) && t?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, yt = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, ie = { passive: !0 }, mt = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      ht(), e(), t = !1;
    }), t = !0);
  }, r = [];
  return r.push(y(navigator?.virtualKeyboard, "geometrychange", n, ie)), r.push(y(window?.visualViewport, "scroll", n, ie)), r.push(y(window?.visualViewport, "resize", n, ie)), r.push(y(screen?.orientation, "change", n)), r.push(y(window, "resize", n)), r.push(y(document?.documentElement, "fullscreenchange", n)), r.push(y(document, "DOMContentLoaded", n)), r.push(y(matchMedia("(orientation: portrait)"), "change", n)), r.push(y(matchMedia("(orientation: landscape)"), "change", n)), n(), ft(() => n(), 100), () => r.forEach((i) => i());
}, jn = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), mt(() => {
      const t = pt?.[yt()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
}, R = new OffscreenCanvas(1, 1).getContext("2d"), He = (e, t) => {
  const n = getComputedStyle(e, "");
  if (t && n) {
    const r = n.getPropertyValue("font-weight") || "normal", i = n.getPropertyValue("font-size") || "16px", s = n.getPropertyValue("font-family") || "Times New Roman", a = n.getPropertyValue("font-stretch") || "normal";
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
      t.font = `${r} ${i} ${s}`;
    } catch {
    }
  }
}, gt = (e, t) => {
  if (R) {
    He(t, R);
    try {
      return R.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, Tn = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return gt(t, e);
}, vt = (e, t) => {
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
}, On = (e, t) => {
  const n = e.getBoundingClientRect(), r = [t[0] - n.left / pe(), t[1] - n.top / pe()];
  return vt(e, r);
}, bt = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = H(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, Wn = (e, t, n, r = "floor") => {
  if (!e) return [0, 0];
  const i = e.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const s = bt(e, n?.layout), a = z(e), o = globalThis.getComputedStyle?.(e), u = parseFloat(o?.paddingLeft) || 0, p = parseFloat(o?.paddingTop) || 0, l = parseFloat(o?.paddingRight) || 0, h = parseFloat(o?.paddingBottom) || 0, c = Math.max(1, (i.width || e.clientWidth || 1) - u - l), d = Math.max(1, (i.height || e.clientHeight || 1) - p - h);
  return nt([(t?.[0] || 0) - i.left - u, (t?.[1] || 0) - i.top - p], [c, d], s, a, {
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
        duration: Je() ? 100 : 80,
        easing: "linear",
        delay: 0
      });
      let r = !1;
      const i = () => {
        r || (r = !0, s?.forEach?.((a) => a?.()), n.currentTime = 1, n.finish(), t?.());
      }, s = K(e, {
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
      let a = !1;
      const o = () => {
        a || (a = !0, u?.forEach?.((p) => p?.()), cancelAnimationFrame(s), n(performance.now()), t?.());
      }, u = K(e, {
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
}, St = async (e) => {
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
        r || (r = !0, s?.forEach?.((a) => a?.()), n.currentTime = 1, n.finish(), t?.());
      }, s = K(e, { "u2-before-show": [i, {
        once: !0,
        passive: !0
      }] });
      await n.finished, i?.();
    } else {
      const { resolve: n, reject: r, promise: i } = Promise.withResolvers(), s = requestAnimationFrame(n);
      let a = !1;
      const o = () => {
        a || (a = !0, u?.forEach?.((p) => p?.()), cancelAnimationFrame(s), n(performance.now()), t?.());
      }, u = K(e, {
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
}, L = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), q = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Nn = (e, t) => {
  if (!k.has(e = q(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const s of i) if (s.contentBoxSize) {
        const a = s.contentBoxSize[0];
        a && n.forEach((o) => o?.(a, r));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, r), k.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "content-box" });
  }
  return k.get(e)?.push?.(t), { disconnect: () => k.get(e)?.splice?.(k.get(e)?.indexOf(t) || -1, 1) };
}, Fn = (e, t) => {
  if (!L.has(e = q(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const s of i) if (s.borderBoxSize) {
        const a = s.borderBoxSize[0];
        a && n.forEach((o) => o?.(a, r));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, r), L.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "border-box" });
  }
  return L.get(e)?.push?.(t), { disconnect: () => L.get(e)?.splice?.(L.get(e)?.indexOf(t) || -1, 1) };
}, In = (e, t, n) => {
  if (typeof e?.selector == "string") return ve(e, e?.selector, t, n);
  const r = new Set((t.split(",") || [t]).map((s) => s.trim())), i = new MutationObserver((s, a) => {
    for (const o of s) o.attributeName && r.has(o.attributeName) && n(o, a);
  });
  return (e?.element ?? e) instanceof Node && i.observe(e = q(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((s) => n({
    target: e,
    type: "attributes",
    attributeName: s,
    oldValue: e?.getAttribute?.(s)
  }, i)), i;
}, ve = (e, t, n, r) => {
  const i = new Set([...n.split(",") || [n]].map((a) => a.trim())), s = new MutationObserver((a, o) => {
    for (const u of a) if (u.type == "childList") {
      const p = Array.from(u.addedNodes) || [], l = Array.from(u.removedNodes) || [];
      p.push(...Array.from(u.addedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), l.push(...Array.from(u.removedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...new Set(p)].filter((h) => h?.matches?.(t))?.map?.((h) => {
        i.forEach((c) => {
          r({
            target: h,
            type: "attributes",
            attributeName: c,
            oldValue: h?.getAttribute?.(c)
          }, o);
        });
      });
    } else u.target?.matches?.(t) && u.attributeName && i.has(u.attributeName) && r(u, o);
  });
  return s.observe(e = q(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...i],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((a) => i.forEach((o) => r({
    target: a,
    type: "attributes",
    attributeName: o,
    oldValue: a?.getAttribute?.(o)
  }, s))), s;
}, xt = (e, t = "*", n = (r, i) => {
}) => {
  const r = (c) => {
    const d = Array.from(c || []) || [];
    return d.push(...Array.from(c || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...Array.from(new Set(d).values())].filter((f) => f?.matches?.(t));
  }, i = (c) => {
    const d = l?.deref?.(), f = r(c.addedNodes), m = r(c.removedNodes);
    (f.length > 0 || m.length > 0) && n?.({
      type: c.type,
      target: c.target,
      attributeName: c.attributeName,
      attributeNamespace: c.attributeNamespace,
      nextSibling: c.nextSibling,
      oldValue: c.oldValue,
      previousSibling: c.previousSibling,
      addedNodes: f,
      removedNodes: m
    }, d);
  }, s = (c) => {
    i({
      addedNodes: [c?.target].filter((d) => !!d),
      removedNodes: [c?.relatedTarget].filter((d) => !!d),
      type: "childList",
      target: c?.currentTarget
    });
  }, a = (c) => {
    i({
      addedNodes: [c?.relatedTarget].filter((d) => !!d),
      removedNodes: [c?.target].filter((d) => !!d),
      type: "childList",
      target: c?.currentTarget
    });
  }, o = (c) => {
    i({
      addedNodes: [c?.target].filter((d) => !!d),
      removedNodes: [c?.relatedTarget || document?.activeElement].filter((d) => !!d),
      type: "childList",
      target: c?.currentTarget
    });
  }, u = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active"))
    return e.addEventListener("pointerover", s, u), e.addEventListener("pointerout", a, u), e.addEventListener("pointerdown", s, u), e.addEventListener("pointerup", a, u), e.addEventListener("pointercancel", a, u), { disconnect: () => {
      e.removeEventListener("pointerover", s, u), e.removeEventListener("pointerout", a, u), e.removeEventListener("pointerdown", s, u), e.removeEventListener("pointerup", a, u), e.removeEventListener("pointercancel", a, u);
    } };
  if (t?.includes?.(":hover"))
    return e.addEventListener("pointerover", s, u), e.addEventListener("pointerout", a, u), { disconnect: () => {
      e.removeEventListener("pointerover", s, u), e.removeEventListener("pointerout", a, u);
    } };
  if (t?.includes?.(":active"))
    return e.addEventListener("pointerdown", s, u), e.addEventListener("pointerup", a, u), e.addEventListener("pointercancel", a, u), { disconnect: () => {
      e.removeEventListener("pointerdown", s, u), e.removeEventListener("pointerup", a, u), e.removeEventListener("pointercancel", a, u);
    } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", s, u), e.addEventListener("focusout", a, u), e.addEventListener("click", o, u), { disconnect: () => {
      e.removeEventListener("focusin", s, u), e.removeEventListener("focusout", a, u), e.removeEventListener("click", o, u);
    } };
  const p = new MutationObserver((c, d) => {
    for (const f of c) f.type == "childList" && i(f);
  }), l = new WeakRef(p);
  (e?.element ?? e) instanceof Node && p.observe(e = q(e), {
    childList: !0,
    subtree: !0
  });
  const h = Array.from(e.querySelectorAll(t));
  return h.length > 0 && n?.({
    addedNodes: h,
    removedNodes: []
  }, p), p;
}, $n = async (e = document.body) => {
  ve(e, "*", "data-hidden", (t, n) => {
    if (t.attributeName == "data-hidden") {
      const r = t.target;
      r.getAttribute("data-hidden") !== t.oldValue && Promise?.try?.(r.getAttribute("data-hidden") != null ? St : wt, r, n)?.catch?.(console.warn.bind(console));
    }
  });
}, Bn = (e = 100, t = 0.05, n = 8) => {
  const r = [];
  for (let o = 0; o < e; o++) r.push(o / e);
  const i = (o) => `calc(${o}rad * pi * 2)`, s = (o) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(o)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, a = (o) => [`calc(calc(0.5 + calc(cos(${i(o)}) * calc(0.5 - ${s(o)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(o)}) * calc(0.5 - ${s(o)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((o) => a(o).join(" ")).join(", ")})`
  };
}, qe = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", ze = (e) => typeof e == "string" && /@import\b/i.test(e), be = "DOM", N = typeof document < "u" ? document.createElement("style") : null;
N && (typeof document < "u" && document.querySelector("head")?.appendChild?.(N), N.dataset.owner = be);
var Le = (e, t, n = "") => {
  e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${n && typeof n == "string" ? `layer(${n})` : ""};` : t;
}, Hn = (e) => e?.map?.((t) => jt(...t)), Mt = (e, t) => {
  t ||= N?.sheet;
  let n = Array.from(t?.cssRules || []).findIndex((i) => i instanceof CSSLayerBlockRule && i?.name === e), r;
  return n === -1 && t ? r = t?.cssRules?.[n = t.insertRule(`@layer ${e} {}`)] : r = t?.cssRules?.[n], r;
}, Et = 0, oe = (e) => typeof ShadowRoot < "u" && e instanceof ShadowRoot, ke = (e) => typeof Document < "u" && e instanceof Document, At = (e) => typeof Element < "u" && e instanceof Element, Ve = (e) => typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : Array.from(e).map((t) => `\\${t.codePointAt(0).toString(16)} `).join(""), Ct = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `ux-${Date.now().toString(36)}-${(++Et).toString(36)}`, Rt = (e, t) => (t = t.trim(), e ? t ? t.startsWith("::") ? `${e}${t}` : `${e} ${t}` : e : t), Pt = (e, t, n, r) => {
  const i = Array.from(e?.cssRules || []), s = t.trim(), a = r.trim();
  return i.findIndex((o) => {
    if (!(o instanceof CSSStyleRule)) return !1;
    const u = o.selectorText?.trim?.() ?? "";
    return u === s ? !0 : a && u.endsWith(a) ? u.slice(0, u.length - a.length).trim() === n : !1;
  });
}, we = (e, t, n = "ux-query", r = null) => {
  const i = oe(r) || ke(r) ? r : r?.getRootNode?.() ?? (typeof document < "u" ? document : null), s = At(r) ? r : null;
  let a = "";
  if (s?.id) a = `#${Ve(s.id)}`;
  else if (s) {
    let l = s.getAttribute("data-style-id");
    l || (l = Ct(), s.setAttribute("data-style-id", l)), a = `[data-style-id="${Ve(l)}"]`;
  } else oe(i) ? a = ":host" : ke(i) && (a = ":root");
  let o = null;
  if (oe(i) ? (o = i.querySelector("style[data-ux-query]"), !o && typeof document < "u" && (o = document.createElement("style"), o.setAttribute("data-ux-query", ""), i.appendChild(o))) : o = zt(), t ||= o?.sheet, !t) return;
  if (n) return we(e, Mt(n, t), null, r);
  const u = Rt(a, e);
  let p = Pt(t, u, a, e);
  return p === -1 && (p = t.insertRule(`${u} {}`)), t.cssRules?.[p];
};
function zt() {
  return N ?? null;
}
var ne = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", P = (e) => ne && e instanceof CSSStyleValue, A = (e) => ne && e instanceof CSSUnitValue, b = (e, t, n, r = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, r);
  }
}, Lt = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = te(t), s = e.style, a = e.attributeStyleMap ?? e.styleMap;
  if (!ne || !a) return _e(e, t, n, r);
  let o = M(n) && !(P(n) || A(n)) ? n?.value : n;
  if (o == null)
    return a.delete?.(i), s && b(s, i, null, r), e;
  if (P(o)) {
    const u = a.get(i);
    if (A(o) && A(u)) {
      if (u.value === o.value && u.unit === o.unit) return e;
    } else if (u === o) return e;
    return a.set(i, o), e;
  }
  if (typeof o == "number") if (CSS?.number && !i.startsWith("--")) {
    const u = CSS.number(o), p = a.get(i);
    return A(p) && p.value === u.value && p.unit === u.unit || a.set(i, u), e;
  } else
    return b(s, i, String(o), r), e;
  if (typeof o == "string" && !P(o)) {
    const u = Ie(o);
    if (typeof u == "number" && CSS?.number && !i.startsWith("--")) {
      const p = CSS.number(u), l = a.get(i);
      return A(l) && l.value === p.value && l.unit === p.unit || a.set(i, p), e;
    } else
      return b(s, i, o, r), e;
  }
  return b(s, i, String(o), r), e;
}, _e = (e, t, n, r = "") => {
  if (!e || !t) return e;
  const i = te(t), s = e.style;
  if (!s) return e;
  let a = M(n) && !(P(n) || A(n)) ? n?.value : n;
  return typeof a == "string" && !P(a) && (a = Ie(a) ?? a), a == null ? (b(s, i, null, r), e) : (P(a) || typeof a == "number", b(s, i, String(a), r), e);
}, Ze = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), V = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new Map(), kt = (e) => {
  if (!e) return null;
  if (x.has(e)) return x.get(e);
  if (e instanceof Blob || e instanceof File) {
    if (V.has(e)) return V.get(e);
    const t = URL.createObjectURL(e);
    return V.set(e, t), x.set(t, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const r = await n.blob(), i = URL.createObjectURL(r);
      return V.set(r, i), x.set(e, i), x.set(i, i), i;
    });
    return x.set(e, t), t;
  }
  if (typeof e == "string") {
    const t = new Blob([e], { type: "text/css" }), n = URL.createObjectURL(t);
    return V.set(t, n), x.set(n, n), n;
  }
  return e;
}, j = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new WeakMap(), Vt = (e) => {
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
}, je = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new WeakMap(), qn = (e, t = "ux-query", n = null) => {
  if (!e || !qe()) return null;
  const r = n instanceof ShadowRoot ? n : n?.getRootNode ? n.getRootNode({ composed: !0 }) : null, i = r instanceof ShadowRoot, s = i ? r.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
  if (!s) return null;
  const a = `${t || ""}:${e}`;
  let o;
  if (i) {
    let l = Te.get(r);
    l || (l = /* @__PURE__ */ new Map(), Te.set(r, l)), o = l.get(a), o || (o = new CSSStyleSheet(), l.set(a, o), s.includes(o) || s.push(o));
  } else
    o = je.get(a), o || (o = new CSSStyleSheet(), je.set(a, o), s.includes(o) || s.push(o));
  if (t) {
    let l;
    if (i) {
      let h = D.get(r);
      h || (h = /* @__PURE__ */ new Map(), D.set(r, h)), l = h.get(t);
    } else l = Oe.get(t);
    if (!l) {
      const h = Array.from(o.cssRules || []), c = h.findIndex((d) => d instanceof CSSLayerBlockRule && d.name === t);
      if (c === -1) try {
        o.insertRule(`@layer ${t} {}`, o.cssRules.length);
        const d = o.cssRules[o.cssRules.length - 1];
        d instanceof CSSLayerBlockRule && (l = d);
      } catch {
        l = void 0;
      }
      else l = h[c];
      if (l) if (i) {
        let d = D.get(r);
        d || (d = /* @__PURE__ */ new Map(), D.set(r, d)), d.set(t, l);
      } else Oe.set(t, l);
    }
    if (l) {
      let h = Array.from(l.cssRules || []).findIndex((c) => c instanceof CSSStyleRule && c.selectorText?.trim?.() === e?.trim?.());
      if (h === -1) try {
        h = l.insertRule(`${e} {}`, l.cssRules.length);
      } catch {
        return null;
      }
      return l.cssRules[h];
    }
  }
  let u = Array.from(o.cssRules || []).findIndex((l) => l instanceof CSSStyleRule && l.selectorText?.trim?.() === e?.trim?.());
  if (u === -1) try {
    u = o.insertRule(`${e} {}`, o.cssRules.length);
  } catch {
    return null;
  }
  const p = o.cssRules[u];
  return p instanceof CSSStyleRule ? p : null;
}, w = (e, t, n, r = "") => ne ? Lt(e, t, n, r) : _e(e, t, n, r), _n = (e, t, n) => w(we(e), t, n), jt = (e, t) => {
  const n = we(e);
  return Object.entries(t).forEach(([r, i]) => w(n, r, i)), n;
}, Zn = async (e) => {
  const t = await crypto?.subtle?.digest("SHA-256", typeof e == "string" ? new TextEncoder().encode(e) : e instanceof ArrayBuffer ? e : await e?.arrayBuffer?.());
  return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
}, De = (e, t, n = "", r) => {
  const i = kt(e), s = typeof e == "string" && URL.canParse(e) ? e : i;
  return t?.[0] && (t[0].fetchPriority = "high"), t && s && typeof s == "string" && Le(t, s, n), t?.[0] && (!URL.canParse(e) || r) && t?.[0] instanceof HTMLLinkElement, Ze(i, (a) => {
    t?.[0] && a && (Le(t, a, n), t?.[0].setAttribute("loaded", ""));
  })?.catch?.((a) => {
    console.warn("Failed to load style sheet:", a);
  });
}, Tt = (e) => {
  const t = typeof document < "u" ? document.createElement("link") : null;
  return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
    rel: "stylesheet",
    type: "text/css",
    crossOrigin: "same-origin"
  }), t.dataset.owner = be, De(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, T = (e, t = typeof document < "u" ? document?.head : null, n = "") => {
  const r = t?.querySelector?.("head") ?? t;
  if (typeof HTMLHeadElement < "u" && r instanceof HTMLHeadElement) return Tt(e);
  const i = typeof document < "u" ? document.createElement("style") : null;
  return i ? (i.dataset.owner = be, De(e, [i, "innerHTML"], n), r?.prepend?.(i), i) : null;
}, Dn = (e, t, n, r = "") => w(e, t, n, r), Un = (e) => Ot(e, ""), v = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new WeakMap(), We = (e, t) => {
  if (!e || !t) return !1;
  try {
    return e.replaceSync(t), !0;
  } catch (n) {
    const r = String(n?.message || "").toLowerCase();
    return r.includes("@import rules are not allowed") || r.includes("@import") && r.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", n), !1;
  }
}, Ot = (e, t = null) => {
  if (!qe())
    return typeof e == "string" && T(e, void 0, t || ""), null;
  if (typeof e == "string" && ze(e))
    return T(e, void 0, t || ""), null;
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
    return v.set(e, n), We(n, r) || (ae(n), v.delete(e), T(e)), n;
  } else Ze(Vt(e), (r) => {
    if (v.set(r, n), r) {
      if (ze(r))
        return ae(n), v.delete(r), O.delete(e), T(r, void 0, t || ""), n;
      const i = t ? `@layer ${t} { ${r} }` : r;
      return We(n, i) || (ae(n), v.delete(r), O.delete(e), T(r, void 0, t || "")), n;
    }
  });
  return n;
}, ae = (e) => {
  if (!e) return !1;
  const t = typeof e == "string" ? v.get(e) : e;
  if (!t || typeof document > "u") return !1;
  const n = document.adoptedStyleSheets, r = n.indexOf(t);
  return r !== -1 ? (n.splice(r, 1), !0) : !1;
}, Wt = (e, t) => {
  const n = e.split(" ");
  return new DOMPoint(Ne(n[0], () => t.clientWidth), Ne(n[1], () => t.clientHeight));
}, Ne = (e, t) => e.endsWith("%") ? parseFloat(e) / 100 * t() : parseFloat(e), Xn = (e) => {
  if (e?.computedStyleMap) {
    const t = e.computedStyleMap().get("transform")?.toMatrix?.();
    if (t) return t;
  } else if (e) {
    const t = getComputedStyle(e);
    return new DOMMatrix(t?.getPropertyValue?.("transform"));
  }
  return new DOMMatrix();
}, Yn = (e) => {
  const t = getComputedStyle(e)?.getPropertyValue?.("transform-origin") || "50% 50%";
  return Wt(t, e);
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
}, Gn = (e) => {
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
}, Jn = (e, t) => W?.(e, t), Kn = (e, t) => t == "inline" ? W(e, "padding-inline-start") + W(e, "padding-inline-end") : W(e, "padding-block-start") + W(e, "padding-block-end"), Ue = /* @__PURE__ */ new WeakMap(), Nt = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), Qn = (e, t) => {
  if (e) {
    if (t) {
      const n = Ue.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((r) => Nt(e, n, r));
    }
    return e;
  }
}, I = /* @__PURE__ */ new Map(), Ft = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, It = (e, t, n) => {
  let r = I.get(t);
  return r || (r = /* @__PURE__ */ new WeakMap(), I.set(t, r)), r.has(e) || r.set(e, n), e;
}, er = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, r] of t.entries()) It(e, n, r);
    return e;
  }
}, tr = (e, t) => {
  if (e) {
    if (t) {
      const n = S?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      S?.has?.(e) || S?.set?.(e, n), [...t?.values?.() || []].map((r) => $t(e, r, n));
    }
    return e;
  }
}, F = (e) => ({
  storeSet: Ft(I, e),
  mixinSet: S?.get?.(e),
  behaviorSet: Ue?.get?.(e)
}), $t = (e, t, n) => {
  const r = new WeakRef(e);
  return n ||= S?.get?.(e), n?.has?.(t) || (n?.add?.(t), C?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((i) => !!i).join(" ")), t?.connect?.(r, t, F(e))), e;
}, S = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new WeakMap(), Xe = (e, t) => {
  typeof t == "string" && (t = $?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((a) => $?.get?.(a)).filter((a) => !!a)), i = S?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  C?.has?.(t) || C?.set?.(t, /* @__PURE__ */ new WeakSet()), S?.has?.(e) || S?.set?.(e, i);
  const s = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(s, t, F(e)), (r.has(t) || !C?.get?.(t)?.has?.(e)) && (t?.connect?.(s, t, F(e)), n.add(Q?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((a) => !!a).join(" "))), C?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(s, t, F(e))));
}, ye = /* @__PURE__ */ new Set(), Bt = (e = typeof document < "u" ? document : null) => {
  if (e)
    return ye?.has?.(e) || (ye?.add?.(e), ve(e, "*", "data-mixin", (t) => me(t.target)), xt(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && me(n);
    })), e;
}, me = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => $?.get?.(n)).filter((n) => !!n))].map?.((n) => Xe(e, n));
}, Ht = (e, t) => {
  e.forEach((n) => t ? Xe(n, t) : me(n));
}, qt = (e) => {
  for (const t of ye) Ht(t?.querySelectorAll?.("[data-mixin]"), e);
}, _t = new FinalizationRegistry((e) => {
  $?.delete?.(e);
}), Zt = (e, t) => {
  if (!Q?.has?.(t)) {
    const n = e?.trim?.();
    n && (Q?.set?.(t, n), $?.set?.(n, t), _t?.register?.(t, n), qt(t));
  }
};
Bt(typeof document < "u" ? document : null);
var Se = class {
  constructor(e = null) {
    e && Zt(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return I.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return F(e);
  }
  get elements() {
    return C?.get?.(this);
  }
  get storage() {
    return I?.get?.(this.name || "");
  }
  get name() {
    return Q?.get?.(this);
  }
}, nr = (e, t, n) => {
  const r = n;
  M(n) && (n = n.value);
  const i = (n = ge(n)) != null && n !== !1;
  return B(r, () => {
    e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, rr = (e, t, n) => {
  if (!(t = typeof t == "string" ? Fe(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const r = n;
  return M(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && B(r, () => {
    n != null ? e[t] = n : delete e[t];
  }), e;
}, ir = (e, t, n) => {
  const r = e?.dataset;
  if (!t || !e || !r) return e;
  const i = n;
  return M(n) && (n = n?.value), t = Fe(t), r?.[t] === (n = ge(n)) || (n == null || n === !1 ? delete r[t] : B(i, () => {
    typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
  })), e;
}, Dt = (e, t) => e.style.removeProperty(te(t)), or = (e, t, n) => {
  const r = e?.style;
  return !t || typeof t != "string" || !e || !r || B(n, () => {
    Qe(n) || M(n) || Ke(n) ? w(e, t, n) : n == null && Dt(e, t);
  }), e;
}, ar = (e, t, n) => {
  if (!t || !e) return e;
  const r = n;
  return M(n) && (n = n.value), t = te(t), e?.getAttribute?.(t) === (n = ge(n)) || B(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
};
function se(e, t) {
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
var U = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, ue = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, ce = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, ee = /* @__PURE__ */ new WeakMap(), g = (e, t, n) => {
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
}, E = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, Ye = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, Ut = class extends Se {
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
    }, a = {
      x: 0,
      y: 0
    };
    const o = (f) => {
      const m = t.getBoundingClientRect();
      return {
        x: f.clientX - m.left,
        y: f.clientY - m.top
      };
    }, u = () => {
      const f = se(s, a);
      if (f.width < 1 && f.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${f.left}px`, n.style.top = `${f.top}px`, n.style.width = `${f.width}px`, n.style.height = `${f.height}px`;
    }, p = (f) => {
      f.button === 0 && (f.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (f.target === t || t.contains(f.target)) && (i = !0, s = o(f), a = { ...s }, t.setPointerCapture(f.pointerId), t.dispatchEvent(new CustomEvent(U.start, {
        bubbles: !0,
        detail: {
          a: { ...s },
          b: { ...a },
          host: t
        }
      })), u()));
    }, l = (f) => {
      if (!i) return;
      a = o(f), u();
      const m = se(s, a);
      t.dispatchEvent(new CustomEvent(U.move, {
        bubbles: !0,
        detail: {
          a: { ...s },
          b: { ...a },
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
      const m = se(s, a);
      t.dispatchEvent(new CustomEvent(U.end, {
        bubbles: !0,
        detail: {
          a: { ...s },
          b: { ...a },
          box: m,
          host: t
        }
      }));
    }, c = (f) => {
      i && h(f);
    }, d = (f) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(f.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(U.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return g(t, "ui-junction-select", () => {
      n.remove();
    }), g(t, "ui-junction-select", y(t, "pointerdown", p)), g(t, "ui-junction-select", y(t, "pointermove", l)), g(t, "ui-junction-select", y(t, "pointerup", c)), g(t, "ui-junction-select", y(t, "pointercancel", d)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && xe(t, "ui-junction-select"), this;
  }
}, Xt = class extends Se {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    w(t, "--jx-drag-x", E(t, "--jx-drag-x")), w(t, "--jx-drag-y", E(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = Ye(t, "data-junction-drag-handle", t);
    let i = !1, s = 0, a = 0, o = 0, u = 0;
    const p = (c) => {
      c.button === 0 && (c.target !== r && !r.contains(c.target) || (i = !0, s = c.clientX, a = c.clientY, o = E(t, "--jx-drag-x"), u = E(t, "--jx-drag-y"), r.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(ue.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: c.clientX,
          clientY: c.clientY,
          baseX: o,
          baseY: u
        }
      }))));
    }, l = (c) => {
      if (!i) return;
      const d = c.clientX - s, f = c.clientY - a, m = o + d, _ = u + f;
      w(t, "--jx-drag-x", m), w(t, "--jx-drag-y", _), t.dispatchEvent(new CustomEvent(ue.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: d,
          dy: f,
          x: m,
          y: _
        }
      }));
    }, h = (c) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(ue.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: E(t, "--jx-drag-x"),
            y: E(t, "--jx-drag-y")
          }
        }));
      }
    };
    return g(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), g(t, "ui-junction-drag", y(r, "pointerdown", p)), g(t, "ui-junction-drag", y(r, "pointermove", l)), g(t, "ui-junction-drag", y(r, "pointerup", h)), g(t, "ui-junction-drag", y(r, "pointercancel", h)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && xe(t, "ui-junction-drag"), this;
  }
}, Yt = class extends Se {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Ye(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, s = 0, a = 0, o = 0;
    const u = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), p = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), l = (d) => {
      d.button === 0 && (d.target !== n && !n.contains(d.target) || (r = !0, i = d.clientX, s = d.clientY, a = t.offsetWidth, o = t.offsetHeight, n.setPointerCapture(d.pointerId), t.dispatchEvent(new CustomEvent(ce.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: a,
          height: o
        }
      }))));
    }, h = (d) => {
      if (!r) return;
      const f = Math.max(u, a + (d.clientX - i)), m = Math.max(p, o + (d.clientY - s));
      t.style.width = `${f}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(ce.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: f,
          height: m
        }
      }));
    }, c = (d) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(d.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(ce.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return g(t, "ui-junction-resize", y(n, "pointerdown", l)), g(t, "ui-junction-resize", y(n, "pointermove", h)), g(t, "ui-junction-resize", y(n, "pointerup", c)), g(t, "ui-junction-resize", y(n, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && xe(t, "ui-junction-resize"), this;
  }
};
new Ut();
new Xt();
new Yt();
export {
  Se as DOMMixin,
  Xt as JunctionDragMixin,
  Yt as JunctionResizeMixin,
  Ut as JunctionSelectMixin,
  pn as MATCH,
  xn as MOC,
  fe as MOCElement,
  en as RAFBehavior,
  hn as REGEX,
  tn as ROOT,
  Bn as WavyShapedCircle,
  Gt as __exportProperties,
  y as addEvent,
  K as addEvents,
  vn as addEventsList,
  Bt as addRoot,
  O as adoptedBlobMap,
  v as adoptedMap,
  St as animateHide,
  wt as animateShow,
  he as availSize,
  zn as bbh,
  Pn as bbw,
  Nt as bindBehavior,
  $t as bindMixins,
  It as bindStore,
  Y as borderBoxHeight,
  X as borderBoxWidth,
  Ue as boundBehaviors,
  S as boundMixinSet,
  kn as cbh,
  Ln as cbw,
  An as changeZoom,
  Vn as classes,
  vt as computeCaretPosition,
  On as computeCaretPositionFromClient,
  Sn as containsOrSelf,
  J as contentBoxHeight,
  G as contentBoxWidth,
  yn as createElementVanilla,
  Dt as deleteStyleProperty,
  Jt as detectMobile,
  sn as doBorderObserve,
  an as doContentObserve,
  kt as fetchAndCache,
  Vt as fetchAsInline,
  jn as fixOrientToScreen,
  Cn as fixedClientZoom,
  qn as getAdoptedStyleRule,
  Be as getAvailSize,
  Rn as getBoundingOrientRect,
  yt as getCorrectOrientation,
  F as getElementRelated,
  Gn as getElementZoom,
  wn as getEventTarget,
  st as getOffsetParent,
  Kt as getOffsetParentChain,
  Kn as getPadding,
  W as getPropertyValue,
  Jn as getPxValue,
  Ft as getStoresOfElement,
  Mt as getStyleLayer,
  we as getStyleRule,
  Xn as getTransform,
  Yn as getTransformOrigin,
  En as getZoom,
  ar as handleAttribute,
  ir as handleDataset,
  nr as handleHidden,
  rr as handleProperty,
  or as handleStyleChange,
  re as hasParent,
  Zn as hash,
  cn as html,
  gn as includeSelf,
  fn as indexOf,
  He as initTextStyle,
  $n as initVisibility,
  mn as isElement,
  Mn as isInFocus,
  Je as isMobile,
  Qt as isNearlyIdentity,
  ln as isValidParent,
  Ot as loadAsAdopted,
  Tt as loadBlobStyle,
  T as loadInlineStyle,
  De as loadStyleSheet,
  ut as makeRAFCycle,
  Tn as measureInputInFocus,
  gt as measureText,
  C as mixinElements,
  Q as mixinNamespace,
  $ as mixinRegistry,
  _t as nameRegistryF,
  I as namedStoreMaps,
  In as observeAttribute,
  ve as observeAttributeBySelector,
  Fn as observeBorderBox,
  xt as observeBySelector,
  Nn as observeContentBox,
  Ce as onBorderObserve,
  Re as onContentObserve,
  z as orientOf,
  pt as orientationNumberMap,
  Ne as parseLength,
  Wt as parseOrigin,
  $e as passiveOpts,
  Un as preloadStyle,
  bt as readLauncherLayoutFromElement,
  Qn as reflectBehaviors,
  tr as reflectMixins,
  er as reflectStores,
  Zt as registerMixin,
  ae as removeAdopted,
  Pe as removeEvent,
  bn as removeEvents,
  Wn as resolveGridCellFromClientPoint,
  ye as roots,
  rn as setAttributes,
  nn as setAttributesIfNull,
  dn as setChecked,
  on as setIdleInterval,
  Dn as setProperty,
  _n as setStyleInRule,
  w as setStyleProperty,
  _e as setStylePropertyFallback,
  Lt as setStylePropertyTyped,
  jt as setStyleRule,
  Hn as setStyleRules,
  Le as setStyleURL,
  ct as throttleMap,
  pe as unfixedClientZoom,
  me as updateAllMixins,
  Xe as updateMixinAttributes,
  Ht as updateMixinAttributesAll,
  qt as updateMixinAttributesAllInRoots,
  ht as updateVP,
  un as url,
  mt as whenAnyScreenChanges,
  lt as zoomOf
};

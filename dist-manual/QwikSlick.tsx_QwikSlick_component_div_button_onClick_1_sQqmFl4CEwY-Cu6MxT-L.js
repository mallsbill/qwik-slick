import { useLexicalScope as v, useSignal as k, useVisibleTaskQrl as x, qrl as c, _jsxQ as m, _fnSignal as b, _hW as f } from "@builder.io/qwik";
import { _hW as G } from "@builder.io/qwik";
const j = () => {
  const [e] = v();
  return e();
}, P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  s_sQqmFl4CEwY: j
}, Symbol.toStringTag, { value: "Module" })), M = () => {
  const [e, t, o] = v(), l = () => {
    if (e.responsive) {
      for (const s of e.responsive) if (window.innerWidth <= s.breakpoint) {
        o.value = s.settings.slidesToShow ?? e.slidesToShow ?? 1, t.value = s.settings.slidesToScroll ?? e.slidesToScroll ?? 1;
        return;
      }
      o.value = e.slidesToShow ?? 1, t.value = e.slidesToScroll ?? 1;
    }
  };
  return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
}, I = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _hW: f,
  s_JH64amJbvlc: M
}, Symbol.toStringTag, { value: "Module" })), p = () => {
  const [e] = v();
  return e();
}, $ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  s_xQ1DsHj0fnc: p
}, Symbol.toStringTag, { value: "Module" })), E = (e) => {
  const [t, o] = v(), l = parseInt(e.target.dataset.startX || "0"), s = e.changedTouches[0].clientX;
  l - s > 50 && t(), s - l > 50 && o();
}, L = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _hW: f,
  s_weD4oBFH7Hs: E
}, Symbol.toStringTag, { value: "Module" })), Y = () => {
  const [e, t, o] = v();
  return e(t * o.value);
}, z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  s_OvVpUeULhoE: Y
}, Symbol.toStringTag, { value: "Module" })), C = () => {
  const [e, t, o, l, s, u, r] = v();
  if (l.autoplay) {
    const S = () => {
      t.value = setInterval(() => {
        const i = e.value + s.value;
        if (o.value) return;
        let _ = i;
        if (l.infinite) {
          const g = l.infinite ? l.items.length : Math.max(0, l.items.length - u.value);
          _ < 0 ? _ = g : _ > g && (_ = 0);
        } else {
          const g = Math.max(0, l.items.length - u.value);
          _ = Math.max(0, Math.min(i, g));
        }
        o.value = !0, e.value = _, setTimeout(() => {
          o.value = !1;
        }, r.value);
      }, l.autoplaySpeed ?? 3e3);
    }, d = () => {
      t.value && (clearInterval(t.value), t.value = null);
    };
    if (S(), l.pauseOnHover) {
      const i = document.querySelector(".qwik-slick-slider");
      i && (i.addEventListener("mouseenter", d), i.addEventListener("mouseleave", S));
    }
    return () => {
      if (d(), l.pauseOnHover) {
        const i = document.querySelector(".qwik-slick-slider");
        i && (i.removeEventListener("mouseenter", d), i.removeEventListener("mouseleave", S));
      }
    };
  }
}, H = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _hW: f,
  s_gjR572C00YQ: C
}, Symbol.toStringTag, { value: "Module" })), V = () => {
  const [e, t, o] = v();
  t(e.value + o.value);
}, q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _hW: f,
  s_AOYrahOKFIg: V
}, Symbol.toStringTag, { value: "Module" })), U = (e) => {
  const [t, o, l, s, u] = v();
  if (l.value) return;
  s.beforeChange?.(t.value, e);
  let r = e;
  s.infinite ? r < 0 ? r = o() : r > o() && (r = 0) : r = Math.max(0, Math.min(e, o())), l.value = !0, t.value = r, setTimeout(() => {
    l.value = !1, s.afterChange?.(r);
  }, u.value);
}, B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _hW: f,
  s_ML0VI7WG0LI: U
}, Symbol.toStringTag, { value: "Module" })), F = (e) => {
  const t = e.touches[0].clientX;
  e.target.dataset.startX = t.toString();
}, J = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _hW: f,
  s_BsPutRKVBdI: F
}, Symbol.toStringTag, { value: "Module" })), R = (e) => {
  const t = k(0), o = k(e.slidesToShow ?? 1), l = k(e.slidesToScroll ?? 1), s = k(e.speed ?? 500), u = k(!1), r = k(null);
  x(/* @__PURE__ */ c(() => Promise.resolve().then(() => I), "s_JH64amJbvlc", [
    e,
    l,
    o
  ])), x(/* @__PURE__ */ c(() => Promise.resolve().then(() => H), "s_gjR572C00YQ", [
    t,
    r,
    u,
    e,
    l,
    o,
    s
  ]));
  const S = () => e.infinite ? e.items.length : Math.max(0, e.items.length - o.value), d = /* @__PURE__ */ c(() => Promise.resolve().then(() => B), "s_ML0VI7WG0LI", [
    t,
    S,
    u,
    e,
    s
  ]), i = /* @__PURE__ */ c(() => Promise.resolve().then(() => q), "s_AOYrahOKFIg", [
    t,
    d,
    l
  ]), _ = /* @__PURE__ */ c(() => Promise.resolve().then(() => X), "s_Ypup8JrgZOU", [
    t,
    d,
    l
  ]), g = /* @__PURE__ */ c(() => Promise.resolve().then(() => J), "s_BsPutRKVBdI"), y = /* @__PURE__ */ c(() => Promise.resolve().then(() => L), "s_weD4oBFH7Hs", [
    i,
    _
  ]), O = () => {
    if (e.infinite) {
      const n = [
        ...e.items
      ], a = n.slice(-o.value), h = n.slice(0, o.value), T = [
        ...a,
        ...n,
        ...h
      ], w = t.value + o.value;
      return T.slice(w, w + o.value);
    }
    return e.items.slice(t.value, t.value + o.value);
  }, Q = () => {
    const n = e.cssEase ?? "ease", a = `${s.value}ms`;
    return e.fade ? {
      transition: `opacity ${a} ${n}`,
      opacity: u.value ? 0.5 : 1
    } : {
      transition: u.value ? `transform ${a} ${n}` : "none",
      transform: e.vertical ? `translateY(-${t.value * (100 / o.value)}%)` : `translateX(-${t.value * (100 / o.value)}%)`
    };
  };
  return /* @__PURE__ */ m("div", null, {
    class: b((n) => `${n.class ?? "qwik-slick-slider"} ${n.vertical ? "vertical" : ""} ${n.fade ? "fade" : ""}`, [
      e
    ]),
    style: b((n) => n.centerMode ? {
      textAlign: "center"
    } : {}, [
      e
    ])
  }, [
    e.arrows !== !1 && /* @__PURE__ */ m("button", null, {
      "aria-label": "Previous",
      disabled: b((n, a) => !a.infinite && n.value === 0, [
        t,
        e
      ]),
      class: "slick-prev",
      onClick$: /* @__PURE__ */ c(() => Promise.resolve().then(() => $), "s_xQ1DsHj0fnc", [
        _
      ])
    }, "<", 3, "ev_0"),
    /* @__PURE__ */ m("div", {
      style: {
        display: "flex",
        flexDirection: e.vertical ? "column" : "row",
        overflow: "hidden",
        ...Q()
      }
    }, {
      class: "qwik-slick-track",
      onTouchStart$: g,
      onTouchEnd$: y
    }, O().map((n, a) => /* @__PURE__ */ m("div", null, {
      class: "qwik-slick-slide",
      style: b((h, T) => ({
        flex: h.variableWidth ? "none" : "0 0 auto",
        width: h.variableWidth ? "auto" : `${100 / T.value}%`,
        height: h.vertical ? `${100 / T.value}%` : "auto"
      }), [
        e,
        o
      ])
    }, n, 1, a)), 1, null),
    e.arrows !== !1 && /* @__PURE__ */ m("button", {
      disabled: !e.infinite && t.value >= S()
    }, {
      "aria-label": "Next",
      class: "slick-next",
      onClick$: /* @__PURE__ */ c(() => Promise.resolve().then(() => P), "s_sQqmFl4CEwY", [
        i
      ])
    }, ">", 3, "ev_1"),
    e.dots && /* @__PURE__ */ m("div", null, {
      class: "qwik-slick-dots"
    }, Array.from({
      length: Math.ceil(e.items.length / l.value)
    }).map((n, a) => /* @__PURE__ */ m("button", {
      "aria-label": `Go to slide ${a + 1}`,
      class: Math.floor(t.value / l.value) === a ? "active" : "",
      onClick$: /* @__PURE__ */ c(() => Promise.resolve().then(() => z), "s_OvVpUeULhoE", [
        d,
        a,
        l
      ])
    }, null, "●", 2, a)), 1, "ev_2")
  ], 1, "ev_3");
}, D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  s_0h21Yne079U: R
}, Symbol.toStringTag, { value: "Module" })), W = () => {
  const [e, t, o] = v();
  t(e.value - o.value);
}, X = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _hW: f,
  s_Ypup8JrgZOU: W
}, Symbol.toStringTag, { value: "Module" }));
export {
  D as Q,
  G as _hW,
  R as s_0h21Yne079U,
  V as s_AOYrahOKFIg,
  F as s_BsPutRKVBdI,
  M as s_JH64amJbvlc,
  U as s_ML0VI7WG0LI,
  Y as s_OvVpUeULhoE,
  W as s_Ypup8JrgZOU,
  C as s_gjR572C00YQ,
  j as s_sQqmFl4CEwY,
  E as s_weD4oBFH7Hs,
  p as s_xQ1DsHj0fnc
};

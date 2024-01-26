"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[593], {
    2898: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var r = n(2265)
          , o = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        /**
 * @license lucide-react v0.306.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let i = e=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
          , l = (e,t)=>{
            let n = (0,
            r.forwardRef)(({color: n="currentColor", size: l=24, strokeWidth: a=2, absoluteStrokeWidth: s, className: c="", children: u, ...d},f)=>(0,
            r.createElement)("svg", {
                ref: f,
                ...o,
                width: l,
                height: l,
                stroke: n,
                strokeWidth: s ? 24 * Number(a) / Number(l) : a,
                className: ["lucide", `lucide-${i(e)}`, c].join(" "),
                ...d
            }, [...t.map(([e,t])=>(0,
            r.createElement)(e, t)), ...Array.isArray(u) ? u : [u]]));
            return n.displayName = `${e}`,
            n
        }
    },
    6224: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.306.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(2898).Z)("Copy", [["rect", {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }], ["path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }]])
    },
    2405: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.306.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(2898).Z)("KeyRound", [["path", {
            d: "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",
            key: "167ctg"
        }], ["circle", {
            cx: "16.5",
            cy: "7.5",
            r: ".5",
            key: "1kog09"
        }]])
    },
    6264: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.306.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(2898).Z)("Loader2", [["path", {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }]])
    },
    5432: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.306.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(2898).Z)("RotateCcw", [["path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }], ["path", {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }]])
    },
    1162: function(e, t, n) {
        Object.defineProperty(t, "$", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = n(5355);
        function o(e) {
            let {createServerReference: t} = n(6671);
            return t(e, r.callServer)
        }
    },
    3428: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
    },
    2210: function(e, t, n) {
        n.d(t, {
            F: function() {
                return o
            },
            e: function() {
                return i
            }
        });
        var r = n(2265);
        function o(...e) {
            return t=>e.forEach(e=>{
                "function" == typeof e ? e(t) : null != e && (e.current = t)
            }
            )
        }
        function i(...e) {
            return (0,
            r.useCallback)(o(...e), e)
        }
    },
    9381: function(e, t, n) {
        n.d(t, {
            WV: function() {
                return a
            },
            jH: function() {
                return s
            }
        });
        var r = n(3428)
          , o = n(2265)
          , i = n(4887)
          , l = n(7256);
        let a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e,t)=>{
            let n = (0,
            o.forwardRef)((e,n)=>{
                let {asChild: i, ...a} = e
                  , s = i ? l.g7 : t;
                return (0,
                o.useEffect)(()=>{
                    window[Symbol.for("radix-ui")] = !0
                }
                , []),
                (0,
                o.createElement)(s, (0,
                r.Z)({}, a, {
                    ref: n
                }))
            }
            );
            return n.displayName = `Primitive.${t}`,
            {
                ...e,
                [t]: n
            }
        }
        , {});
        function s(e, t) {
            e && (0,
            i.flushSync)(()=>e.dispatchEvent(t))
        }
    },
    6823: function(e, t, n) {
        n.d(t, {
            f: function() {
                return u
            }
        });
        var r = n(3428)
          , o = n(2265)
          , i = n(9381);
        let l = "horizontal"
          , a = ["horizontal", "vertical"]
          , s = (0,
        o.forwardRef)((e,t)=>{
            let {decorative: n, orientation: a=l, ...s} = e
              , u = c(a) ? a : l;
            return (0,
            o.createElement)(i.WV.div, (0,
            r.Z)({
                "data-orientation": u
            }, n ? {
                role: "none"
            } : {
                "aria-orientation": "vertical" === u ? u : void 0,
                role: "separator"
            }, s, {
                ref: t
            }))
        }
        );
        function c(e) {
            return a.includes(e)
        }
        s.propTypes = {
            orientation(e, t, n) {
                let r = e[t]
                  , o = String(r);
                return r && !c(r) ? Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${l}\`.`) : null
            }
        };
        let u = s
    },
    7256: function(e, t, n) {
        n.d(t, {
            A4: function() {
                return s
            },
            g7: function() {
                return l
            }
        });
        var r = n(3428)
          , o = n(2265)
          , i = n(2210);
        let l = (0,
        o.forwardRef)((e,t)=>{
            let {children: n, ...i} = e
              , l = o.Children.toArray(n)
              , s = l.find(c);
            if (s) {
                let e = s.props.children
                  , n = l.map(t=>t !== s ? t : o.Children.count(e) > 1 ? o.Children.only(null) : (0,
                o.isValidElement)(e) ? e.props.children : null);
                return (0,
                o.createElement)(a, (0,
                r.Z)({}, i, {
                    ref: t
                }), (0,
                o.isValidElement)(e) ? (0,
                o.cloneElement)(e, void 0, n) : null)
            }
            return (0,
            o.createElement)(a, (0,
            r.Z)({}, i, {
                ref: t
            }), n)
        }
        );
        l.displayName = "Slot";
        let a = (0,
        o.forwardRef)((e,t)=>{
            let {children: n, ...r} = e;
            return (0,
            o.isValidElement)(n) ? (0,
            o.cloneElement)(n, {
                ...function(e, t) {
                    let n = {
                        ...t
                    };
                    for (let r in t) {
                        let o = e[r]
                          , i = t[r];
                        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e)=>{
                            i(...e),
                            o(...e)
                        }
                        : o && (n[r] = o) : "style" === r ? n[r] = {
                            ...o,
                            ...i
                        } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                    }
                    return {
                        ...e,
                        ...n
                    }
                }(r, n.props),
                ref: t ? (0,
                i.F)(t, n.ref) : n.ref
            }) : o.Children.count(n) > 1 ? o.Children.only(null) : null
        }
        );
        a.displayName = "SlotClone";
        let s = ({children: e})=>(0,
        o.createElement)(o.Fragment, null, e);
        function c(e) {
            return (0,
            o.isValidElement)(e) && e.type === s
        }
    },
    6012: function(e, t, n) {
        let r;
        n.d(t, {
            VY: function() {
                return to
            },
            zt: function() {
                return tt
            },
            fC: function() {
                return tn
            },
            xz: function() {
                return tr
            }
        });
        var o = n(3428)
          , i = n(2265)
          , l = n.t(i, 2);
        function a(e, t, {checkForDefaultPrevented: n=!0}={}) {
            return function(r) {
                if (null == e || e(r),
                !1 === n || !r.defaultPrevented)
                    return null == t ? void 0 : t(r)
            }
        }
        var s = n(2210);
        function c(e, t=[]) {
            let n = []
              , r = ()=>{
                let t = n.map(e=>(0,
                i.createContext)(e));
                return function(n) {
                    let r = (null == n ? void 0 : n[e]) || t;
                    return (0,
                    i.useMemo)(()=>({
                        [`__scope${e}`]: {
                            ...n,
                            [e]: r
                        }
                    }), [n, r])
                }
            }
            ;
            return r.scopeName = e,
            [function(t, r) {
                let o = (0,
                i.createContext)(r)
                  , l = n.length;
                function a(t) {
                    let {scope: n, children: r, ...a} = t
                      , s = (null == n ? void 0 : n[e][l]) || o
                      , c = (0,
                    i.useMemo)(()=>a, Object.values(a));
                    return (0,
                    i.createElement)(s.Provider, {
                        value: c
                    }, r)
                }
                return n = [...n, r],
                a.displayName = t + "Provider",
                [a, function(n, a) {
                    let s = (null == a ? void 0 : a[e][l]) || o
                      , c = (0,
                    i.useContext)(s);
                    if (c)
                        return c;
                    if (void 0 !== r)
                        return r;
                    throw Error(`\`${n}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let n = ()=>{
                    let n = e.map(e=>({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let r = n.reduce((t,{useScope: n, scopeName: r})=>{
                            let o = n(e)[`__scope${r}`];
                            return {
                                ...t,
                                ...o
                            }
                        }
                        , {});
                        return (0,
                        i.useMemo)(()=>({
                            [`__scope${t.scopeName}`]: r
                        }), [r])
                    }
                }
                ;
                return n.scopeName = t.scopeName,
                n
            }(r, ...t)]
        }
        var u = n(9381);
        function d(e) {
            let t = (0,
            i.useRef)(e);
            return (0,
            i.useEffect)(()=>{
                t.current = e
            }
            ),
            (0,
            i.useMemo)(()=>(...e)=>{
                var n;
                return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
            }
            , [])
        }
        let f = "dismissableLayer.update"
          , p = (0,
        i.createContext)({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        })
          , m = (0,
        i.forwardRef)((e,t)=>{
            var n;
            let {disableOutsidePointerEvents: l=!1, onEscapeKeyDown: c, onPointerDownOutside: m, onFocusOutside: b, onInteractOutside: v, onDismiss: y, ...w} = e
              , x = (0,
            i.useContext)(p)
              , [E,C] = (0,
            i.useState)(null)
              , k = null !== (n = null == E ? void 0 : E.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document
              , [,T] = (0,
            i.useState)({})
              , P = (0,
            s.e)(t, e=>C(e))
              , R = Array.from(x.layers)
              , [O] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1)
              , L = R.indexOf(O)
              , S = E ? R.indexOf(E) : -1
              , A = x.layersWithOutsidePointerEventsDisabled.size > 0
              , z = S >= L
              , D = function(e, t=null == globalThis ? void 0 : globalThis.document) {
                let n = d(e)
                  , r = (0,
                i.useRef)(!1)
                  , o = (0,
                i.useRef)(()=>{}
                );
                return (0,
                i.useEffect)(()=>{
                    let e = e=>{
                        if (e.target && !r.current) {
                            let r = {
                                originalEvent: e
                            };
                            function i() {
                                g("dismissableLayer.pointerDownOutside", n, r, {
                                    discrete: !0
                                })
                            }
                            "touch" === e.pointerType ? (t.removeEventListener("click", o.current),
                            o.current = i,
                            t.addEventListener("click", o.current, {
                                once: !0
                            })) : i()
                        } else
                            t.removeEventListener("click", o.current);
                        r.current = !1
                    }
                      , i = window.setTimeout(()=>{
                        t.addEventListener("pointerdown", e)
                    }
                    , 0);
                    return ()=>{
                        window.clearTimeout(i),
                        t.removeEventListener("pointerdown", e),
                        t.removeEventListener("click", o.current)
                    }
                }
                , [t, n]),
                {
                    onPointerDownCapture: ()=>r.current = !0
                }
            }(e=>{
                let t = e.target
                  , n = [...x.branches].some(e=>e.contains(t));
                !z || n || (null == m || m(e),
                null == v || v(e),
                e.defaultPrevented || null == y || y())
            }
            , k)
              , N = function(e, t=null == globalThis ? void 0 : globalThis.document) {
                let n = d(e)
                  , r = (0,
                i.useRef)(!1);
                return (0,
                i.useEffect)(()=>{
                    let e = e=>{
                        e.target && !r.current && g("dismissableLayer.focusOutside", n, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return t.addEventListener("focusin", e),
                    ()=>t.removeEventListener("focusin", e)
                }
                , [t, n]),
                {
                    onFocusCapture: ()=>r.current = !0,
                    onBlurCapture: ()=>r.current = !1
                }
            }(e=>{
                let t = e.target;
                [...x.branches].some(e=>e.contains(t)) || (null == b || b(e),
                null == v || v(e),
                e.defaultPrevented || null == y || y())
            }
            , k);
            return !function(e, t=null == globalThis ? void 0 : globalThis.document) {
                let n = d(e);
                (0,
                i.useEffect)(()=>{
                    let e = e=>{
                        "Escape" === e.key && n(e)
                    }
                    ;
                    return t.addEventListener("keydown", e),
                    ()=>t.removeEventListener("keydown", e)
                }
                , [n, t])
            }(e=>{
                S !== x.layers.size - 1 || (null == c || c(e),
                !e.defaultPrevented && y && (e.preventDefault(),
                y()))
            }
            , k),
            (0,
            i.useEffect)(()=>{
                if (E)
                    return l && (0 === x.layersWithOutsidePointerEventsDisabled.size && (r = k.body.style.pointerEvents,
                    k.body.style.pointerEvents = "none"),
                    x.layersWithOutsidePointerEventsDisabled.add(E)),
                    x.layers.add(E),
                    h(),
                    ()=>{
                        l && 1 === x.layersWithOutsidePointerEventsDisabled.size && (k.body.style.pointerEvents = r)
                    }
            }
            , [E, k, l, x]),
            (0,
            i.useEffect)(()=>()=>{
                E && (x.layers.delete(E),
                x.layersWithOutsidePointerEventsDisabled.delete(E),
                h())
            }
            , [E, x]),
            (0,
            i.useEffect)(()=>{
                let e = ()=>T({});
                return document.addEventListener(f, e),
                ()=>document.removeEventListener(f, e)
            }
            , []),
            (0,
            i.createElement)(u.WV.div, (0,
            o.Z)({}, w, {
                ref: P,
                style: {
                    pointerEvents: A ? z ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: a(e.onFocusCapture, N.onFocusCapture),
                onBlurCapture: a(e.onBlurCapture, N.onBlurCapture),
                onPointerDownCapture: a(e.onPointerDownCapture, D.onPointerDownCapture)
            }))
        }
        );
        function h() {
            let e = new CustomEvent(f);
            document.dispatchEvent(e)
        }
        function g(e, t, n, {discrete: r}) {
            let o = n.originalEvent.target
              , i = new CustomEvent(e,{
                bubbles: !1,
                cancelable: !0,
                detail: n
            });
            t && o.addEventListener(e, t, {
                once: !0
            }),
            r ? (0,
            u.jH)(o, i) : o.dispatchEvent(i)
        }
        let b = (null == globalThis ? void 0 : globalThis.document) ? i.useLayoutEffect : ()=>{}
          , v = l["useId".toString()] || (()=>void 0)
          , y = 0
          , w = ["top", "right", "bottom", "left"]
          , x = Math.min
          , E = Math.max
          , C = Math.round
          , k = Math.floor
          , T = e=>({
            x: e,
            y: e
        })
          , P = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        }
          , R = {
            start: "end",
            end: "start"
        };
        function O(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function L(e) {
            return e.split("-")[0]
        }
        function S(e) {
            return e.split("-")[1]
        }
        function A(e) {
            return "x" === e ? "y" : "x"
        }
        function z(e) {
            return "y" === e ? "height" : "width"
        }
        function D(e) {
            return ["top", "bottom"].includes(L(e)) ? "y" : "x"
        }
        function N(e) {
            return e.replace(/start|end/g, e=>R[e])
        }
        function M(e) {
            return e.replace(/left|right|bottom|top/g, e=>P[e])
        }
        function j(e) {
            return "number" != typeof e ? {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...e
            } : {
                top: e,
                right: e,
                bottom: e,
                left: e
            }
        }
        function _(e) {
            return {
                ...e,
                top: e.y,
                left: e.x,
                right: e.x + e.width,
                bottom: e.y + e.height
            }
        }
        function W(e, t, n) {
            let r, {reference: o, floating: i} = e, l = D(t), a = A(D(t)), s = z(a), c = L(t), u = "y" === l, d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, p = o[s] / 2 - i[s] / 2;
            switch (c) {
            case "top":
                r = {
                    x: d,
                    y: o.y - i.height
                };
                break;
            case "bottom":
                r = {
                    x: d,
                    y: o.y + o.height
                };
                break;
            case "right":
                r = {
                    x: o.x + o.width,
                    y: f
                };
                break;
            case "left":
                r = {
                    x: o.x - i.width,
                    y: f
                };
                break;
            default:
                r = {
                    x: o.x,
                    y: o.y
                }
            }
            switch (S(t)) {
            case "start":
                r[a] -= p * (n && u ? -1 : 1);
                break;
            case "end":
                r[a] += p * (n && u ? -1 : 1)
            }
            return r
        }
        let $ = async(e,t,n)=>{
            let {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: l} = n
              , a = i.filter(Boolean)
              , s = await (null == l.isRTL ? void 0 : l.isRTL(t))
              , c = await l.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            })
              , {x: u, y: d} = W(c, r, s)
              , f = r
              , p = {}
              , m = 0;
            for (let n = 0; n < a.length; n++) {
                let {name: i, fn: h} = a[n]
                  , {x: g, y: b, data: v, reset: y} = await h({
                    x: u,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: o,
                    middlewareData: p,
                    rects: c,
                    platform: l,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
                if (u = null != g ? g : u,
                d = null != b ? b : d,
                p = {
                    ...p,
                    [i]: {
                        ...p[i],
                        ...v
                    }
                },
                y && m <= 50) {
                    m++,
                    "object" == typeof y && (y.placement && (f = y.placement),
                    y.rects && (c = !0 === y.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : y.rects),
                    {x: u, y: d} = W(c, f, s)),
                    n = -1;
                    continue
                }
            }
            return {
                x: u,
                y: d,
                placement: f,
                strategy: o,
                middlewareData: p
            }
        }
        ;
        async function I(e, t) {
            var n;
            void 0 === t && (t = {});
            let {x: r, y: o, platform: i, rects: l, elements: a, strategy: s} = e
              , {boundary: c="clippingAncestors", rootBoundary: u="viewport", elementContext: d="floating", altBoundary: f=!1, padding: p=0} = O(t, e)
              , m = j(p)
              , h = a[f ? "floating" === d ? "reference" : "floating" : d]
              , g = _(await i.getClippingRect({
                element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                boundary: c,
                rootBoundary: u,
                strategy: s
            }))
              , b = "floating" === d ? {
                ...l.floating,
                x: r,
                y: o
            } : l.reference
              , v = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating))
              , y = await (null == i.isElement ? void 0 : i.isElement(v)) && await (null == i.getScale ? void 0 : i.getScale(v)) || {
                x: 1,
                y: 1
            }
              , w = _(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                rect: b,
                offsetParent: v,
                strategy: s
            }) : b);
            return {
                top: (g.top - w.top + m.top) / y.y,
                bottom: (w.bottom - g.bottom + m.bottom) / y.y,
                left: (g.left - w.left + m.left) / y.x,
                right: (w.right - g.right + m.right) / y.x
            }
        }
        function H(e, t) {
            return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width
            }
        }
        function Z(e) {
            return w.some(t=>e[t] >= 0)
        }
        async function F(e, t) {
            let {placement: n, platform: r, elements: o} = e
              , i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating))
              , l = L(n)
              , a = S(n)
              , s = "y" === D(n)
              , c = ["left", "top"].includes(l) ? -1 : 1
              , u = i && s ? -1 : 1
              , d = O(t, e)
              , {mainAxis: f, crossAxis: p, alignmentAxis: m} = "number" == typeof d ? {
                mainAxis: d,
                crossAxis: 0,
                alignmentAxis: null
            } : {
                mainAxis: 0,
                crossAxis: 0,
                alignmentAxis: null,
                ...d
            };
            return a && "number" == typeof m && (p = "end" === a ? -1 * m : m),
            s ? {
                x: p * u,
                y: f * c
            } : {
                x: f * c,
                y: p * u
            }
        }
        function V(e) {
            return U(e) ? (e.nodeName || "").toLowerCase() : "#document"
        }
        function B(e) {
            var t;
            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function G(e) {
            var t;
            return null == (t = (U(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
        }
        function U(e) {
            return e instanceof Node || e instanceof B(e).Node
        }
        function q(e) {
            return e instanceof Element || e instanceof B(e).Element
        }
        function Y(e) {
            return e instanceof HTMLElement || e instanceof B(e).HTMLElement
        }
        function K(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof B(e).ShadowRoot)
        }
        function X(e) {
            let {overflow: t, overflowX: n, overflowY: r, display: o} = et(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
        }
        function J(e) {
            let t = Q()
              , n = et(e);
            return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e=>(n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e=>(n.contain || "").includes(e))
        }
        function Q() {
            return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
        }
        function ee(e) {
            return ["html", "body", "#document"].includes(V(e))
        }
        function et(e) {
            return B(e).getComputedStyle(e)
        }
        function en(e) {
            return q(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.pageXOffset,
                scrollTop: e.pageYOffset
            }
        }
        function er(e) {
            if ("html" === V(e))
                return e;
            let t = e.assignedSlot || e.parentNode || K(e) && e.host || G(e);
            return K(t) ? t.host : t
        }
        function eo(e, t, n) {
            var r;
            void 0 === t && (t = []),
            void 0 === n && (n = !0);
            let o = function e(t) {
                let n = er(t);
                return ee(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : Y(n) && X(n) ? n : e(n)
            }(e)
              , i = o === (null == (r = e.ownerDocument) ? void 0 : r.body)
              , l = B(o);
            return i ? t.concat(l, l.visualViewport || [], X(o) ? o : [], l.frameElement && n ? eo(l.frameElement) : []) : t.concat(o, eo(o, [], n))
        }
        function ei(e) {
            let t = et(e)
              , n = parseFloat(t.width) || 0
              , r = parseFloat(t.height) || 0
              , o = Y(e)
              , i = o ? e.offsetWidth : n
              , l = o ? e.offsetHeight : r
              , a = C(n) !== i || C(r) !== l;
            return a && (n = i,
            r = l),
            {
                width: n,
                height: r,
                $: a
            }
        }
        function el(e) {
            return q(e) ? e : e.contextElement
        }
        function ea(e) {
            let t = el(e);
            if (!Y(t))
                return T(1);
            let n = t.getBoundingClientRect()
              , {width: r, height: o, $: i} = ei(t)
              , l = (i ? C(n.width) : n.width) / r
              , a = (i ? C(n.height) : n.height) / o;
            return l && Number.isFinite(l) || (l = 1),
            a && Number.isFinite(a) || (a = 1),
            {
                x: l,
                y: a
            }
        }
        let es = T(0);
        function ec(e) {
            let t = B(e);
            return Q() && t.visualViewport ? {
                x: t.visualViewport.offsetLeft,
                y: t.visualViewport.offsetTop
            } : es
        }
        function eu(e, t, n, r) {
            var o;
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            let i = e.getBoundingClientRect()
              , l = el(e)
              , a = T(1);
            t && (r ? q(r) && (a = ea(r)) : a = ea(e));
            let s = (void 0 === (o = n) && (o = !1),
            r && (!o || r === B(l)) && o) ? ec(l) : T(0)
              , c = (i.left + s.x) / a.x
              , u = (i.top + s.y) / a.y
              , d = i.width / a.x
              , f = i.height / a.y;
            if (l) {
                let e = B(l)
                  , t = r && q(r) ? B(r) : r
                  , n = e.frameElement;
                for (; n && r && t !== e; ) {
                    let e = ea(n)
                      , t = n.getBoundingClientRect()
                      , r = et(n)
                      , o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x
                      , i = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                    c *= e.x,
                    u *= e.y,
                    d *= e.x,
                    f *= e.y,
                    c += o,
                    u += i,
                    n = B(n).frameElement
                }
            }
            return _({
                width: d,
                height: f,
                x: c,
                y: u
            })
        }
        function ed(e) {
            return eu(G(e)).left + en(e).scrollLeft
        }
        function ef(e, t, n) {
            let r;
            if ("viewport" === t)
                r = function(e, t) {
                    let n = B(e)
                      , r = G(e)
                      , o = n.visualViewport
                      , i = r.clientWidth
                      , l = r.clientHeight
                      , a = 0
                      , s = 0;
                    if (o) {
                        i = o.width,
                        l = o.height;
                        let e = Q();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft,
                        s = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: s
                    }
                }(e, n);
            else if ("document" === t)
                r = function(e) {
                    let t = G(e)
                      , n = en(e)
                      , r = e.ownerDocument.body
                      , o = E(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
                      , i = E(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight)
                      , l = -n.scrollLeft + ed(e)
                      , a = -n.scrollTop;
                    return "rtl" === et(r).direction && (l += E(t.clientWidth, r.clientWidth) - o),
                    {
                        width: o,
                        height: i,
                        x: l,
                        y: a
                    }
                }(G(e));
            else if (q(t))
                r = function(e, t) {
                    let n = eu(e, !0, "fixed" === t)
                      , r = n.top + e.clientTop
                      , o = n.left + e.clientLeft
                      , i = Y(e) ? ea(e) : T(1)
                      , l = e.clientWidth * i.x;
                    return {
                        width: l,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
            else {
                let n = ec(e);
                r = {
                    ...t,
                    x: t.x - n.x,
                    y: t.y - n.y
                }
            }
            return _(r)
        }
        function ep(e, t) {
            return Y(e) && "fixed" !== et(e).position ? t ? t(e) : e.offsetParent : null
        }
        function em(e, t) {
            let n = B(e);
            if (!Y(e))
                return n;
            let r = ep(e, t);
            for (; r && ["table", "td", "th"].includes(V(r)) && "static" === et(r).position; )
                r = ep(r, t);
            return r && ("html" === V(r) || "body" === V(r) && "static" === et(r).position && !J(r)) ? n : r || function(e) {
                let t = er(e);
                for (; Y(t) && !ee(t); ) {
                    if (J(t))
                        return t;
                    t = er(t)
                }
                return null
            }(e) || n
        }
        let eh = async function(e) {
            let {reference: t, floating: n, strategy: r} = e
              , o = this.getOffsetParent || em
              , i = this.getDimensions;
            return {
                reference: function(e, t, n) {
                    let r = Y(t)
                      , o = G(t)
                      , i = "fixed" === n
                      , l = eu(e, !0, i, t)
                      , a = {
                        scrollLeft: 0,
                        scrollTop: 0
                    }
                      , s = T(0);
                    if (r || !r && !i) {
                        if (("body" !== V(t) || X(o)) && (a = en(t)),
                        r) {
                            let e = eu(t, !0, i, t);
                            s.x = e.x + t.clientLeft,
                            s.y = e.y + t.clientTop
                        } else
                            o && (s.x = ed(o))
                    }
                    return {
                        x: l.left + a.scrollLeft - s.x,
                        y: l.top + a.scrollTop - s.y,
                        width: l.width,
                        height: l.height
                    }
                }(t, await o(n), r),
                floating: {
                    x: 0,
                    y: 0,
                    ...await i(n)
                }
            }
        }
          , eg = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {rect: t, offsetParent: n, strategy: r} = e
                  , o = Y(n)
                  , i = G(n);
                if (n === i)
                    return t;
                let l = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                  , a = T(1)
                  , s = T(0);
                if ((o || !o && "fixed" !== r) && (("body" !== V(n) || X(i)) && (l = en(n)),
                Y(n))) {
                    let e = eu(n);
                    a = ea(n),
                    s.x = e.x + n.clientLeft,
                    s.y = e.y + n.clientTop
                }
                return {
                    width: t.width * a.x,
                    height: t.height * a.y,
                    x: t.x * a.x - l.scrollLeft * a.x + s.x,
                    y: t.y * a.y - l.scrollTop * a.y + s.y
                }
            },
            getDocumentElement: G,
            getClippingRect: function(e) {
                let {element: t, boundary: n, rootBoundary: r, strategy: o} = e
                  , i = [..."clippingAncestors" === n ? function(e, t) {
                    let n = t.get(e);
                    if (n)
                        return n;
                    let r = eo(e, [], !1).filter(e=>q(e) && "body" !== V(e))
                      , o = null
                      , i = "fixed" === et(e).position
                      , l = i ? er(e) : e;
                    for (; q(l) && !ee(l); ) {
                        let t = et(l)
                          , n = J(l);
                        n || "fixed" !== t.position || (o = null),
                        (i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || X(l) && !n && function e(t, n) {
                            let r = er(t);
                            return !(r === n || !q(r) || ee(r)) && ("fixed" === et(r).position || e(r, n))
                        }(e, l)) ? r = r.filter(e=>e !== l) : o = t,
                        l = er(l)
                    }
                    return t.set(e, r),
                    r
                }(t, this._c) : [].concat(n), r]
                  , l = i[0]
                  , a = i.reduce((e,n)=>{
                    let r = ef(t, n, o);
                    return e.top = E(r.top, e.top),
                    e.right = x(r.right, e.right),
                    e.bottom = x(r.bottom, e.bottom),
                    e.left = E(r.left, e.left),
                    e
                }
                , ef(t, l, o));
                return {
                    width: a.right - a.left,
                    height: a.bottom - a.top,
                    x: a.left,
                    y: a.top
                }
            },
            getOffsetParent: em,
            getElementRects: eh,
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                let {width: t, height: n} = ei(e);
                return {
                    width: t,
                    height: n
                }
            },
            getScale: ea,
            isElement: q,
            isRTL: function(e) {
                return "rtl" === et(e).direction
            }
        }
          , eb = e=>({
            name: "arrow",
            options: e,
            async fn(t) {
                let {x: n, y: r, placement: o, rects: i, platform: l, elements: a, middlewareData: s} = t
                  , {element: c, padding: u=0} = O(e, t) || {};
                if (null == c)
                    return {};
                let d = j(u)
                  , f = {
                    x: n,
                    y: r
                }
                  , p = A(D(o))
                  , m = z(p)
                  , h = await l.getDimensions(c)
                  , g = "y" === p
                  , b = g ? "clientHeight" : "clientWidth"
                  , v = i.reference[m] + i.reference[p] - f[p] - i.floating[m]
                  , y = f[p] - i.reference[p]
                  , w = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(c))
                  , C = w ? w[b] : 0;
                C && await (null == l.isElement ? void 0 : l.isElement(w)) || (C = a.floating[b] || i.floating[m]);
                let k = C / 2 - h[m] / 2 - 1
                  , T = x(d[g ? "top" : "left"], k)
                  , P = x(d[g ? "bottom" : "right"], k)
                  , R = C - h[m] - P
                  , L = C / 2 - h[m] / 2 + (v / 2 - y / 2)
                  , N = E(T, x(L, R))
                  , M = !s.arrow && null != S(o) && L != N && i.reference[m] / 2 - (L < T ? T : P) - h[m] / 2 < 0
                  , _ = M ? L < T ? L - T : L - R : 0;
                return {
                    [p]: f[p] + _,
                    data: {
                        [p]: N,
                        centerOffset: L - N - _,
                        ...M && {
                            alignmentOffset: _
                        }
                    },
                    reset: M
                }
            }
        })
          , ev = (e,t,n)=>{
            let r = new Map
              , o = {
                platform: eg,
                ...n
            }
              , i = {
                ...o.platform,
                _c: r
            };
            return $(e, t, {
                ...o,
                platform: i
            })
        }
        ;
        var ey = n(4887);
        let ew = e=>({
            name: "arrow",
            options: e,
            fn(t) {
                let {element: n, padding: r} = "function" == typeof e ? e(t) : e;
                if (n && ({}).hasOwnProperty.call(n, "current")) {
                    if (null != n.current)
                        return eb({
                            element: n.current,
                            padding: r
                        }).fn(t)
                } else if (n)
                    return eb({
                        element: n,
                        padding: r
                    }).fn(t);
                return {}
            }
        });
        var ex = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
        function eE(e, t) {
            let n, r, o;
            if (e === t)
                return !0;
            if (typeof e != typeof t)
                return !1;
            if ("function" == typeof e && e.toString() === t.toString())
                return !0;
            if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                    if ((n = e.length) != t.length)
                        return !1;
                    for (r = n; 0 != r--; )
                        if (!eE(e[r], t[r]))
                            return !1;
                    return !0
                }
                if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
                    return !1;
                for (r = n; 0 != r--; )
                    if (!({}).hasOwnProperty.call(t, o[r]))
                        return !1;
                for (r = n; 0 != r--; ) {
                    let n = o[r];
                    if (("_owner" !== n || !e.$$typeof) && !eE(e[n], t[n]))
                        return !1
                }
                return !0
            }
            return e != e && t != t
        }
        function eC(e) {
            return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
        }
        function ek(e, t) {
            let n = eC(e);
            return Math.round(t * n) / n
        }
        function eT(e) {
            let t = i.useRef(e);
            return ex(()=>{
                t.current = e
            }
            ),
            t
        }
        let eP = (0,
        i.forwardRef)((e,t)=>{
            let {children: n, width: r=10, height: l=5, ...a} = e;
            return (0,
            i.createElement)(u.WV.svg, (0,
            o.Z)({}, a, {
                ref: t,
                width: r,
                height: l,
                viewBox: "0 0 30 10",
                preserveAspectRatio: "none"
            }), e.asChild ? n : (0,
            i.createElement)("polygon", {
                points: "0,0 30,0 15,10"
            }))
        }
        )
          , eR = "Popper"
          , [eO,eL] = c(eR)
          , [eS,eA] = eO(eR)
          , ez = (0,
        i.forwardRef)((e,t)=>{
            let {__scopePopper: n, virtualRef: r, ...l} = e
              , a = eA("PopperAnchor", n)
              , c = (0,
            i.useRef)(null)
              , d = (0,
            s.e)(t, c);
            return (0,
            i.useEffect)(()=>{
                a.onAnchorChange((null == r ? void 0 : r.current) || c.current)
            }
            ),
            r ? null : (0,
            i.createElement)(u.WV.div, (0,
            o.Z)({}, l, {
                ref: d
            }))
        }
        )
          , eD = "PopperContent"
          , [eN,eM] = eO(eD)
          , ej = (0,
        i.forwardRef)((e,t)=>{
            var n, r, l, a, c, f, p, m, h, g, v, y, w, C;
            let {__scopePopper: T, side: P="bottom", sideOffset: R=0, align: j="center", alignOffset: _=0, arrowPadding: W=0, avoidCollisions: $=!0, collisionBoundary: V=[], collisionPadding: B=0, sticky: U="partial", hideWhenDetached: q=!1, updatePositionStrategy: Y="optimized", onPlaced: K, ...X} = e
              , J = eA(eD, T)
              , [Q,ee] = (0,
            i.useState)(null)
              , et = (0,
            s.e)(t, e=>ee(e))
              , [en,er] = (0,
            i.useState)(null)
              , ei = function(e) {
                let[t,n] = (0,
                i.useState)(void 0);
                return b(()=>{
                    if (e) {
                        n({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t=>{
                            let r, o;
                            if (!Array.isArray(t) || !t.length)
                                return;
                            let i = t[0];
                            if ("borderBoxSize"in i) {
                                let e = i.borderBoxSize
                                  , t = Array.isArray(e) ? e[0] : e;
                                r = t.inlineSize,
                                o = t.blockSize
                            } else
                                r = e.offsetWidth,
                                o = e.offsetHeight;
                            n({
                                width: r,
                                height: o
                            })
                        }
                        );
                        return t.observe(e, {
                            box: "border-box"
                        }),
                        ()=>t.unobserve(e)
                    }
                    n(void 0)
                }
                , [e]),
                t
            }(en)
              , ea = null !== (n = null == ei ? void 0 : ei.width) && void 0 !== n ? n : 0
              , es = null !== (r = null == ei ? void 0 : ei.height) && void 0 !== r ? r : 0
              , ec = "number" == typeof B ? B : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...B
            }
              , ed = Array.isArray(V) ? V : [V]
              , ef = ed.length > 0
              , ep = {
                padding: ec,
                boundary: ed.filter(eW),
                altBoundary: ef
            }
              , {refs: em, floatingStyles: eh, placement: eg, isPositioned: eb, middlewareData: eP} = function(e) {
                void 0 === e && (e = {});
                let {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: l, floating: a}={}, transform: s=!0, whileElementsMounted: c, open: u} = e
                  , [d,f] = i.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                })
                  , [p,m] = i.useState(r);
                eE(p, r) || m(r);
                let[h,g] = i.useState(null)
                  , [b,v] = i.useState(null)
                  , y = i.useCallback(e=>{
                    e != C.current && (C.current = e,
                    g(e))
                }
                , [g])
                  , w = i.useCallback(e=>{
                    e !== k.current && (k.current = e,
                    v(e))
                }
                , [v])
                  , x = l || h
                  , E = a || b
                  , C = i.useRef(null)
                  , k = i.useRef(null)
                  , T = i.useRef(d)
                  , P = eT(c)
                  , R = eT(o)
                  , O = i.useCallback(()=>{
                    if (!C.current || !k.current)
                        return;
                    let e = {
                        placement: t,
                        strategy: n,
                        middleware: p
                    };
                    R.current && (e.platform = R.current),
                    ev(C.current, k.current, e).then(e=>{
                        let t = {
                            ...e,
                            isPositioned: !0
                        };
                        L.current && !eE(T.current, t) && (T.current = t,
                        ey.flushSync(()=>{
                            f(t)
                        }
                        ))
                    }
                    )
                }
                , [p, t, n, R]);
                ex(()=>{
                    !1 === u && T.current.isPositioned && (T.current.isPositioned = !1,
                    f(e=>({
                        ...e,
                        isPositioned: !1
                    })))
                }
                , [u]);
                let L = i.useRef(!1);
                ex(()=>(L.current = !0,
                ()=>{
                    L.current = !1
                }
                ), []),
                ex(()=>{
                    if (x && (C.current = x),
                    E && (k.current = E),
                    x && E) {
                        if (P.current)
                            return P.current(x, E, O);
                        O()
                    }
                }
                , [x, E, O, P]);
                let S = i.useMemo(()=>({
                    reference: C,
                    floating: k,
                    setReference: y,
                    setFloating: w
                }), [y, w])
                  , A = i.useMemo(()=>({
                    reference: x,
                    floating: E
                }), [x, E])
                  , z = i.useMemo(()=>{
                    let e = {
                        position: n,
                        left: 0,
                        top: 0
                    };
                    if (!A.floating)
                        return e;
                    let t = ek(A.floating, d.x)
                      , r = ek(A.floating, d.y);
                    return s ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...eC(A.floating) >= 1.5 && {
                            willChange: "transform"
                        }
                    } : {
                        position: n,
                        left: t,
                        top: r
                    }
                }
                , [n, s, A.floating, d.x, d.y]);
                return i.useMemo(()=>({
                    ...d,
                    update: O,
                    refs: S,
                    elements: A,
                    floatingStyles: z
                }), [d, O, S, A, z])
            }({
                strategy: "fixed",
                placement: P + ("center" !== j ? "-" + j : ""),
                whileElementsMounted: (...e)=>(function(e, t, n, r) {
                    let o;
                    void 0 === r && (r = {});
                    let {ancestorScroll: i=!0, ancestorResize: l=!0, elementResize: a="function" == typeof ResizeObserver, layoutShift: s="function" == typeof IntersectionObserver, animationFrame: c=!1} = r
                      , u = el(e)
                      , d = i || l ? [...u ? eo(u) : [], ...eo(t)] : [];
                    d.forEach(e=>{
                        i && e.addEventListener("scroll", n, {
                            passive: !0
                        }),
                        l && e.addEventListener("resize", n)
                    }
                    );
                    let f = u && s ? function(e, t) {
                        let n, r = null, o = G(e);
                        function i() {
                            clearTimeout(n),
                            r && r.disconnect(),
                            r = null
                        }
                        return !function l(a, s) {
                            void 0 === a && (a = !1),
                            void 0 === s && (s = 1),
                            i();
                            let {left: c, top: u, width: d, height: f} = e.getBoundingClientRect();
                            if (a || t(),
                            !d || !f)
                                return;
                            let p = k(u)
                              , m = k(o.clientWidth - (c + d))
                              , h = {
                                rootMargin: -p + "px " + -m + "px " + -k(o.clientHeight - (u + f)) + "px " + -k(c) + "px",
                                threshold: E(0, x(1, s)) || 1
                            }
                              , g = !0;
                            function b(e) {
                                let t = e[0].intersectionRatio;
                                if (t !== s) {
                                    if (!g)
                                        return l();
                                    t ? l(!1, t) : n = setTimeout(()=>{
                                        l(!1, 1e-7)
                                    }
                                    , 100)
                                }
                                g = !1
                            }
                            try {
                                r = new IntersectionObserver(b,{
                                    ...h,
                                    root: o.ownerDocument
                                })
                            } catch (e) {
                                r = new IntersectionObserver(b,h)
                            }
                            r.observe(e)
                        }(!0),
                        i
                    }(u, n) : null
                      , p = -1
                      , m = null;
                    a && (m = new ResizeObserver(e=>{
                        let[r] = e;
                        r && r.target === u && m && (m.unobserve(t),
                        cancelAnimationFrame(p),
                        p = requestAnimationFrame(()=>{
                            m && m.observe(t)
                        }
                        )),
                        n()
                    }
                    ),
                    u && !c && m.observe(u),
                    m.observe(t));
                    let h = c ? eu(e) : null;
                    return c && function t() {
                        let r = eu(e);
                        h && (r.x !== h.x || r.y !== h.y || r.width !== h.width || r.height !== h.height) && n(),
                        h = r,
                        o = requestAnimationFrame(t)
                    }(),
                    n(),
                    ()=>{
                        d.forEach(e=>{
                            i && e.removeEventListener("scroll", n),
                            l && e.removeEventListener("resize", n)
                        }
                        ),
                        f && f(),
                        m && m.disconnect(),
                        m = null,
                        c && cancelAnimationFrame(o)
                    }
                }
                )(...e, {
                    animationFrame: "always" === Y
                }),
                elements: {
                    reference: J.anchor
                },
                middleware: [{
                    name: "offset",
                    options: h = {
                        mainAxis: R + es,
                        alignmentAxis: _
                    },
                    async fn(e) {
                        var t, n;
                        let {x: r, y: o, placement: i, middlewareData: l} = e
                          , a = await F(e, h);
                        return i === (null == (t = l.offset) ? void 0 : t.placement) && null != (n = l.arrow) && n.alignmentOffset ? {} : {
                            x: r + a.x,
                            y: o + a.y,
                            data: {
                                ...a,
                                placement: i
                            }
                        }
                    }
                }, $ && {
                    name: "shift",
                    options: v = {
                        mainAxis: !0,
                        crossAxis: !1,
                        limiter: "partial" === U ? (void 0 === g && (g = {}),
                        {
                            options: g,
                            fn(e) {
                                let {x: t, y: n, placement: r, rects: o, middlewareData: i} = e
                                  , {offset: l=0, mainAxis: a=!0, crossAxis: s=!0} = O(g, e)
                                  , c = {
                                    x: t,
                                    y: n
                                }
                                  , u = D(r)
                                  , d = A(u)
                                  , f = c[d]
                                  , p = c[u]
                                  , m = O(l, e)
                                  , h = "number" == typeof m ? {
                                    mainAxis: m,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...m
                                };
                                if (a) {
                                    let e = "y" === d ? "height" : "width"
                                      , t = o.reference[d] - o.floating[e] + h.mainAxis
                                      , n = o.reference[d] + o.reference[e] - h.mainAxis;
                                    f < t ? f = t : f > n && (f = n)
                                }
                                if (s) {
                                    var b, v;
                                    let e = "y" === d ? "width" : "height"
                                      , t = ["top", "left"].includes(L(r))
                                      , n = o.reference[u] - o.floating[e] + (t && (null == (b = i.offset) ? void 0 : b[u]) || 0) + (t ? 0 : h.crossAxis)
                                      , l = o.reference[u] + o.reference[e] + (t ? 0 : (null == (v = i.offset) ? void 0 : v[u]) || 0) - (t ? h.crossAxis : 0);
                                    p < n ? p = n : p > l && (p = l)
                                }
                                return {
                                    [d]: f,
                                    [u]: p
                                }
                            }
                        }) : void 0,
                        ...ep
                    },
                    async fn(e) {
                        let {x: t, y: n, placement: r} = e
                          , {mainAxis: o=!0, crossAxis: i=!1, limiter: l={
                            fn: e=>{
                                let {x: t, y: n} = e;
                                return {
                                    x: t,
                                    y: n
                                }
                            }
                        }, ...a} = O(v, e)
                          , s = {
                            x: t,
                            y: n
                        }
                          , c = await I(e, a)
                          , u = D(L(r))
                          , d = A(u)
                          , f = s[d]
                          , p = s[u];
                        if (o) {
                            let e = "y" === d ? "top" : "left"
                              , t = "y" === d ? "bottom" : "right"
                              , n = f + c[e]
                              , r = f - c[t];
                            f = E(n, x(f, r))
                        }
                        if (i) {
                            let e = "y" === u ? "top" : "left"
                              , t = "y" === u ? "bottom" : "right"
                              , n = p + c[e]
                              , r = p - c[t];
                            p = E(n, x(p, r))
                        }
                        let m = l.fn({
                            ...e,
                            [d]: f,
                            [u]: p
                        });
                        return {
                            ...m,
                            data: {
                                x: m.x - t,
                                y: m.y - n
                            }
                        }
                    }
                }, $ && {
                    name: "flip",
                    options: y = {
                        ...ep
                    },
                    async fn(e) {
                        var t, n, r, o, i;
                        let {placement: l, middlewareData: a, rects: s, initialPlacement: c, platform: u, elements: d} = e
                          , {mainAxis: f=!0, crossAxis: p=!0, fallbackPlacements: m, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: g="none", flipAlignment: b=!0, ...v} = O(y, e);
                        if (null != (t = a.arrow) && t.alignmentOffset)
                            return {};
                        let w = L(l)
                          , x = L(c) === c
                          , E = await (null == u.isRTL ? void 0 : u.isRTL(d.floating))
                          , C = m || (x || !b ? [M(c)] : function(e) {
                            let t = M(e);
                            return [N(e), t, N(t)]
                        }(c));
                        m || "none" === g || C.push(...function(e, t, n, r) {
                            let o = S(e)
                              , i = function(e, t, n) {
                                let r = ["left", "right"]
                                  , o = ["right", "left"];
                                switch (e) {
                                case "top":
                                case "bottom":
                                    if (n)
                                        return t ? o : r;
                                    return t ? r : o;
                                case "left":
                                case "right":
                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                default:
                                    return []
                                }
                            }(L(e), "start" === n, r);
                            return o && (i = i.map(e=>e + "-" + o),
                            t && (i = i.concat(i.map(N)))),
                            i
                        }(c, b, g, E));
                        let k = [c, ...C]
                          , T = await I(e, v)
                          , P = []
                          , R = (null == (n = a.flip) ? void 0 : n.overflows) || [];
                        if (f && P.push(T[w]),
                        p) {
                            let e = function(e, t, n) {
                                void 0 === n && (n = !1);
                                let r = S(e)
                                  , o = A(D(e))
                                  , i = z(o)
                                  , l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                return t.reference[i] > t.floating[i] && (l = M(l)),
                                [l, M(l)]
                            }(l, s, E);
                            P.push(T[e[0]], T[e[1]])
                        }
                        if (R = [...R, {
                            placement: l,
                            overflows: P
                        }],
                        !P.every(e=>e <= 0)) {
                            let e = ((null == (r = a.flip) ? void 0 : r.index) || 0) + 1
                              , t = k[e];
                            if (t)
                                return {
                                    data: {
                                        index: e,
                                        overflows: R
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                            let n = null == (o = R.filter(e=>e.overflows[0] <= 0).sort((e,t)=>e.overflows[1] - t.overflows[1])[0]) ? void 0 : o.placement;
                            if (!n)
                                switch (h) {
                                case "bestFit":
                                    {
                                        let e = null == (i = R.map(e=>[e.placement, e.overflows.filter(e=>e > 0).reduce((e,t)=>e + t, 0)]).sort((e,t)=>e[1] - t[1])[0]) ? void 0 : i[0];
                                        e && (n = e);
                                        break
                                    }
                                case "initialPlacement":
                                    n = c
                                }
                            if (l !== n)
                                return {
                                    reset: {
                                        placement: n
                                    }
                                }
                        }
                        return {}
                    }
                }, {
                    name: "size",
                    options: w = {
                        ...ep,
                        apply: ({elements: e, rects: t, availableWidth: n, availableHeight: r})=>{
                            let {width: o, height: i} = t.reference
                              , l = e.floating.style;
                            l.setProperty("--radix-popper-available-width", `${n}px`),
                            l.setProperty("--radix-popper-available-height", `${r}px`),
                            l.setProperty("--radix-popper-anchor-width", `${o}px`),
                            l.setProperty("--radix-popper-anchor-height", `${i}px`)
                        }
                    },
                    async fn(e) {
                        let t, n;
                        let {placement: r, rects: o, platform: i, elements: l} = e
                          , {apply: a=()=>{}
                        , ...s} = O(w, e)
                          , c = await I(e, s)
                          , u = L(r)
                          , d = S(r)
                          , f = "y" === D(r)
                          , {width: p, height: m} = o.floating;
                        "top" === u || "bottom" === u ? (t = u,
                        n = d === (await (null == i.isRTL ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (n = u,
                        t = "end" === d ? "top" : "bottom");
                        let h = m - c[t]
                          , g = p - c[n]
                          , b = !e.middlewareData.shift
                          , v = h
                          , y = g;
                        if (f) {
                            let e = p - c.left - c.right;
                            y = d || b ? x(g, e) : e
                        } else {
                            let e = m - c.top - c.bottom;
                            v = d || b ? x(h, e) : e
                        }
                        if (b && !d) {
                            let e = E(c.left, 0)
                              , t = E(c.right, 0)
                              , n = E(c.top, 0)
                              , r = E(c.bottom, 0);
                            f ? y = p - 2 * (0 !== e || 0 !== t ? e + t : E(c.left, c.right)) : v = m - 2 * (0 !== n || 0 !== r ? n + r : E(c.top, c.bottom))
                        }
                        await a({
                            ...e,
                            availableWidth: y,
                            availableHeight: v
                        });
                        let C = await i.getDimensions(l.floating);
                        return p !== C.width || m !== C.height ? {
                            reset: {
                                rects: !0
                            }
                        } : {}
                    }
                }, en && ew({
                    element: en,
                    padding: W
                }), e$({
                    arrowWidth: ea,
                    arrowHeight: es
                }), q && {
                    name: "hide",
                    options: C = {
                        strategy: "referenceHidden",
                        ...ep
                    },
                    async fn(e) {
                        let {rects: t} = e
                          , {strategy: n="referenceHidden", ...r} = O(C, e);
                        switch (n) {
                        case "referenceHidden":
                            {
                                let n = H(await I(e, {
                                    ...r,
                                    elementContext: "reference"
                                }), t.reference);
                                return {
                                    data: {
                                        referenceHiddenOffsets: n,
                                        referenceHidden: Z(n)
                                    }
                                }
                            }
                        case "escaped":
                            {
                                let n = H(await I(e, {
                                    ...r,
                                    altBoundary: !0
                                }), t.floating);
                                return {
                                    data: {
                                        escapedOffsets: n,
                                        escaped: Z(n)
                                    }
                                }
                            }
                        default:
                            return {}
                        }
                    }
                }]
            })
              , [eR,eO] = eI(eg)
              , eL = d(K);
            b(()=>{
                eb && (null == eL || eL())
            }
            , [eb, eL]);
            let eS = null === (l = eP.arrow) || void 0 === l ? void 0 : l.x
              , ez = null === (a = eP.arrow) || void 0 === a ? void 0 : a.y
              , eM = (null === (c = eP.arrow) || void 0 === c ? void 0 : c.centerOffset) !== 0
              , [ej,e_] = (0,
            i.useState)();
            return b(()=>{
                Q && e_(window.getComputedStyle(Q).zIndex)
            }
            , [Q]),
            (0,
            i.createElement)("div", {
                ref: em.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...eh,
                    transform: eb ? eh.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: ej,
                    "--radix-popper-transform-origin": [null === (f = eP.transformOrigin) || void 0 === f ? void 0 : f.x, null === (p = eP.transformOrigin) || void 0 === p ? void 0 : p.y].join(" ")
                },
                dir: e.dir
            }, (0,
            i.createElement)(eN, {
                scope: T,
                placedSide: eR,
                onArrowChange: er,
                arrowX: eS,
                arrowY: ez,
                shouldHideArrow: eM
            }, (0,
            i.createElement)(u.WV.div, (0,
            o.Z)({
                "data-side": eR,
                "data-align": eO
            }, X, {
                ref: et,
                style: {
                    ...X.style,
                    animation: eb ? void 0 : "none",
                    opacity: null !== (m = eP.hide) && void 0 !== m && m.referenceHidden ? 0 : void 0
                }
            }))))
        }
        )
          , e_ = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        };
        function eW(e) {
            return null !== e
        }
        let e$ = e=>({
            name: "transformOrigin",
            options: e,
            fn(t) {
                var n, r, o, i, l;
                let {placement: a, rects: s, middlewareData: c} = t
                  , u = (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0
                  , d = u ? 0 : e.arrowWidth
                  , f = u ? 0 : e.arrowHeight
                  , [p,m] = eI(a)
                  , h = {
                    start: "0%",
                    center: "50%",
                    end: "100%"
                }[m]
                  , g = (null !== (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + d / 2
                  , b = (null !== (i = null === (l = c.arrow) || void 0 === l ? void 0 : l.y) && void 0 !== i ? i : 0) + f / 2
                  , v = ""
                  , y = "";
                return "bottom" === p ? (v = u ? h : `${g}px`,
                y = `${-f}px`) : "top" === p ? (v = u ? h : `${g}px`,
                y = `${s.floating.height + f}px`) : "right" === p ? (v = `${-f}px`,
                y = u ? h : `${b}px`) : "left" === p && (v = `${s.floating.width + f}px`,
                y = u ? h : `${b}px`),
                {
                    data: {
                        x: v,
                        y: y
                    }
                }
            }
        });
        function eI(e) {
            let[t,n="center"] = e.split("-");
            return [t, n]
        }
        let eH = e=>{
            let {__scopePopper: t, children: n} = e
              , [r,o] = (0,
            i.useState)(null);
            return (0,
            i.createElement)(eS, {
                scope: t,
                anchor: r,
                onAnchorChange: o
            }, n)
        }
          , eZ = ((e,t)=>{
            var n;
            let {container: r=null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body, ...l} = e;
            return r ? ey.createPortal((0,
            i.createElement)(u.WV.div, (0,
            o.Z)({}, l, {
                ref: t
            })), r) : null
        }
        ,
        e=>{
            let {present: t, children: n} = e
              , r = function(e) {
                var t, n;
                let[r,o] = (0,
                i.useState)()
                  , l = (0,
                i.useRef)({})
                  , a = (0,
                i.useRef)(e)
                  , s = (0,
                i.useRef)("none")
                  , [c,u] = (t = e ? "mounted" : "unmounted",
                n = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                },
                (0,
                i.useReducer)((e,t)=>{
                    let r = n[e][t];
                    return null != r ? r : e
                }
                , t));
                return (0,
                i.useEffect)(()=>{
                    let e = eF(l.current);
                    s.current = "mounted" === c ? e : "none"
                }
                , [c]),
                b(()=>{
                    let t = l.current
                      , n = a.current;
                    if (n !== e) {
                        let r = s.current
                          , o = eF(t);
                        e ? u("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? u("UNMOUNT") : n && r !== o ? u("ANIMATION_OUT") : u("UNMOUNT"),
                        a.current = e
                    }
                }
                , [e, u]),
                b(()=>{
                    if (r) {
                        let e = e=>{
                            let t = eF(l.current).includes(e.animationName);
                            e.target === r && t && (0,
                            ey.flushSync)(()=>u("ANIMATION_END"))
                        }
                          , t = e=>{
                            e.target === r && (s.current = eF(l.current))
                        }
                        ;
                        return r.addEventListener("animationstart", t),
                        r.addEventListener("animationcancel", e),
                        r.addEventListener("animationend", e),
                        ()=>{
                            r.removeEventListener("animationstart", t),
                            r.removeEventListener("animationcancel", e),
                            r.removeEventListener("animationend", e)
                        }
                    }
                    u("ANIMATION_END")
                }
                , [r, u]),
                {
                    isPresent: ["mounted", "unmountSuspended"].includes(c),
                    ref: (0,
                    i.useCallback)(e=>{
                        e && (l.current = getComputedStyle(e)),
                        o(e)
                    }
                    , [])
                }
            }(t)
              , o = "function" == typeof n ? n({
                present: r.isPresent
            }) : i.Children.only(n)
              , l = (0,
            s.e)(r.ref, o.ref);
            return "function" == typeof n || r.isPresent ? (0,
            i.cloneElement)(o, {
                ref: l
            }) : null
        }
        );
        function eF(e) {
            return (null == e ? void 0 : e.animationName) || "none"
        }
        eZ.displayName = "Presence";
        var eV = n(7256);
        let eB = (0,
        i.forwardRef)((e,t)=>(0,
        i.createElement)(u.WV.span, (0,
        o.Z)({}, e, {
            ref: t,
            style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style
            }
        })))
          , [eG,eU] = c("Tooltip", [eL])
          , eq = eL()
          , eY = "tooltip.open"
          , [eK,eX] = eG("TooltipProvider")
          , eJ = "Tooltip"
          , [eQ,e0] = eG(eJ)
          , e1 = "TooltipTrigger"
          , e2 = (0,
        i.forwardRef)((e,t)=>{
            let {__scopeTooltip: n, ...r} = e
              , l = e0(e1, n)
              , c = eX(e1, n)
              , d = eq(n)
              , f = (0,
            i.useRef)(null)
              , p = (0,
            s.e)(t, f, l.onTriggerChange)
              , m = (0,
            i.useRef)(!1)
              , h = (0,
            i.useRef)(!1)
              , g = (0,
            i.useCallback)(()=>m.current = !1, []);
            return (0,
            i.useEffect)(()=>()=>document.removeEventListener("pointerup", g), [g]),
            (0,
            i.createElement)(ez, (0,
            o.Z)({
                asChild: !0
            }, d), (0,
            i.createElement)(u.WV.button, (0,
            o.Z)({
                "aria-describedby": l.open ? l.contentId : void 0,
                "data-state": l.stateAttribute
            }, r, {
                ref: p,
                onPointerMove: a(e.onPointerMove, e=>{
                    "touch" === e.pointerType || h.current || c.isPointerInTransitRef.current || (l.onTriggerEnter(),
                    h.current = !0)
                }
                ),
                onPointerLeave: a(e.onPointerLeave, ()=>{
                    l.onTriggerLeave(),
                    h.current = !1
                }
                ),
                onPointerDown: a(e.onPointerDown, ()=>{
                    m.current = !0,
                    document.addEventListener("pointerup", g, {
                        once: !0
                    })
                }
                ),
                onFocus: a(e.onFocus, ()=>{
                    m.current || l.onOpen()
                }
                ),
                onBlur: a(e.onBlur, l.onClose),
                onClick: a(e.onClick, l.onClose)
            })))
        }
        )
          , [e4,e5] = eG("TooltipPortal", {
            forceMount: void 0
        })
          , e3 = "TooltipContent"
          , e8 = (0,
        i.forwardRef)((e,t)=>{
            let n = e5(e3, e.__scopeTooltip)
              , {forceMount: r=n.forceMount, side: l="top", ...a} = e
              , s = e0(e3, e.__scopeTooltip);
            return (0,
            i.createElement)(eZ, {
                present: r || s.open
            }, s.disableHoverableContent ? (0,
            i.createElement)(te, (0,
            o.Z)({
                side: l
            }, a, {
                ref: t
            })) : (0,
            i.createElement)(e6, (0,
            o.Z)({
                side: l
            }, a, {
                ref: t
            })))
        }
        )
          , e6 = (0,
        i.forwardRef)((e,t)=>{
            let n = e0(e3, e.__scopeTooltip)
              , r = eX(e3, e.__scopeTooltip)
              , l = (0,
            i.useRef)(null)
              , a = (0,
            s.e)(t, l)
              , [c,u] = (0,
            i.useState)(null)
              , {trigger: d, onClose: f} = n
              , p = l.current
              , {onPointerInTransitChange: m} = r
              , h = (0,
            i.useCallback)(()=>{
                u(null),
                m(!1)
            }
            , [m])
              , g = (0,
            i.useCallback)((e,t)=>{
                let n = e.currentTarget
                  , r = {
                    x: e.clientX,
                    y: e.clientY
                }
                  , o = function(e, t) {
                    let n = Math.abs(t.top - e.y)
                      , r = Math.abs(t.bottom - e.y)
                      , o = Math.abs(t.right - e.x)
                      , i = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, o, i)) {
                    case i:
                        return "left";
                    case o:
                        return "right";
                    case n:
                        return "top";
                    case r:
                        return "bottom";
                    default:
                        throw Error("unreachable")
                    }
                }(r, n.getBoundingClientRect());
                u(function(e) {
                    let t = e.slice();
                    return t.sort((e,t)=>e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                    function(e) {
                        if (e.length <= 1)
                            return e.slice();
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                            let r = e[n];
                            for (; t.length >= 2; ) {
                                let e = t[t.length - 1]
                                  , n = t[t.length - 2];
                                if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x))
                                    t.pop();
                                else
                                    break
                            }
                            t.push(r)
                        }
                        t.pop();
                        let n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                            let r = e[t];
                            for (; n.length >= 2; ) {
                                let e = n[n.length - 1]
                                  , t = n[n.length - 2];
                                if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x))
                                    n.pop();
                                else
                                    break
                            }
                            n.push(r)
                        }
                        return (n.pop(),
                        1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
                    }(t)
                }([...function(e, t, n=5) {
                    let r = [];
                    switch (t) {
                    case "top":
                        r.push({
                            x: e.x - n,
                            y: e.y + n
                        }, {
                            x: e.x + n,
                            y: e.y + n
                        });
                        break;
                    case "bottom":
                        r.push({
                            x: e.x - n,
                            y: e.y - n
                        }, {
                            x: e.x + n,
                            y: e.y - n
                        });
                        break;
                    case "left":
                        r.push({
                            x: e.x + n,
                            y: e.y - n
                        }, {
                            x: e.x + n,
                            y: e.y + n
                        });
                        break;
                    case "right":
                        r.push({
                            x: e.x - n,
                            y: e.y - n
                        }, {
                            x: e.x - n,
                            y: e.y + n
                        })
                    }
                    return r
                }(r, o), ...function(e) {
                    let {top: t, right: n, bottom: r, left: o} = e;
                    return [{
                        x: o,
                        y: t
                    }, {
                        x: n,
                        y: t
                    }, {
                        x: n,
                        y: r
                    }, {
                        x: o,
                        y: r
                    }]
                }(t.getBoundingClientRect())])),
                m(!0)
            }
            , [m]);
            return (0,
            i.useEffect)(()=>()=>h(), [h]),
            (0,
            i.useEffect)(()=>{
                if (d && p) {
                    let e = e=>g(e, p)
                      , t = e=>g(e, d);
                    return d.addEventListener("pointerleave", e),
                    p.addEventListener("pointerleave", t),
                    ()=>{
                        d.removeEventListener("pointerleave", e),
                        p.removeEventListener("pointerleave", t)
                    }
                }
            }
            , [d, p, g, h]),
            (0,
            i.useEffect)(()=>{
                if (c) {
                    let e = e=>{
                        let t = e.target
                          , n = {
                            x: e.clientX,
                            y: e.clientY
                        }
                          , r = (null == d ? void 0 : d.contains(t)) || (null == p ? void 0 : p.contains(t))
                          , o = !function(e, t) {
                            let {x: n, y: r} = e
                              , o = !1;
                            for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                let l = t[e].x
                                  , a = t[e].y
                                  , s = t[i].x
                                  , c = t[i].y;
                                a > r != c > r && n < (s - l) * (r - a) / (c - a) + l && (o = !o)
                            }
                            return o
                        }(n, c);
                        r ? h() : o && (h(),
                        f())
                    }
                    ;
                    return document.addEventListener("pointermove", e),
                    ()=>document.removeEventListener("pointermove", e)
                }
            }
            , [d, p, c, f, h]),
            (0,
            i.createElement)(te, (0,
            o.Z)({}, e, {
                ref: a
            }))
        }
        )
          , [e9,e7] = eG(eJ, {
            isInside: !1
        })
          , te = (0,
        i.forwardRef)((e,t)=>{
            let {__scopeTooltip: n, children: r, "aria-label": l, onEscapeKeyDown: a, onPointerDownOutside: s, ...c} = e
              , u = e0(e3, n)
              , d = eq(n)
              , {onClose: f} = u;
            return (0,
            i.useEffect)(()=>(document.addEventListener(eY, f),
            ()=>document.removeEventListener(eY, f)), [f]),
            (0,
            i.useEffect)(()=>{
                if (u.trigger) {
                    let e = e=>{
                        let t = e.target;
                        null != t && t.contains(u.trigger) && f()
                    }
                    ;
                    return window.addEventListener("scroll", e, {
                        capture: !0
                    }),
                    ()=>window.removeEventListener("scroll", e, {
                        capture: !0
                    })
                }
            }
            , [u.trigger, f]),
            (0,
            i.createElement)(m, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: e=>e.preventDefault(),
                onDismiss: f
            }, (0,
            i.createElement)(ej, (0,
            o.Z)({
                "data-state": u.stateAttribute
            }, d, c, {
                ref: t,
                style: {
                    ...c.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                }
            }), (0,
            i.createElement)(eV.A4, null, r), (0,
            i.createElement)(e9, {
                scope: n,
                isInside: !0
            }, (0,
            i.createElement)(eB, {
                id: u.contentId,
                role: "tooltip"
            }, l || r))))
        }
        )
          , tt = e=>{
            let {__scopeTooltip: t, delayDuration: n=700, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: l} = e
              , [a,s] = (0,
            i.useState)(!0)
              , c = (0,
            i.useRef)(!1)
              , u = (0,
            i.useRef)(0);
            return (0,
            i.useEffect)(()=>{
                let e = u.current;
                return ()=>window.clearTimeout(e)
            }
            , []),
            (0,
            i.createElement)(eK, {
                scope: t,
                isOpenDelayed: a,
                delayDuration: n,
                onOpen: (0,
                i.useCallback)(()=>{
                    window.clearTimeout(u.current),
                    s(!1)
                }
                , []),
                onClose: (0,
                i.useCallback)(()=>{
                    window.clearTimeout(u.current),
                    u.current = window.setTimeout(()=>s(!0), r)
                }
                , [r]),
                isPointerInTransitRef: c,
                onPointerInTransitChange: (0,
                i.useCallback)(e=>{
                    c.current = e
                }
                , []),
                disableHoverableContent: o
            }, l)
        }
          , tn = e=>{
            let {__scopeTooltip: t, children: n, open: r, defaultOpen: o=!1, onOpenChange: l, disableHoverableContent: a, delayDuration: s} = e
              , c = eX(eJ, e.__scopeTooltip)
              , u = eq(t)
              , [f,p] = (0,
            i.useState)(null)
              , m = function(e) {
                let[t,n] = i.useState(v());
                return b(()=>{
                    e || n(e=>null != e ? e : String(y++))
                }
                , [e]),
                e || (t ? `radix-${t}` : "")
            }()
              , h = (0,
            i.useRef)(0)
              , g = null != a ? a : c.disableHoverableContent
              , w = null != s ? s : c.delayDuration
              , x = (0,
            i.useRef)(!1)
              , [E=!1,C] = function({prop: e, defaultProp: t, onChange: n=()=>{}
            }) {
                let[r,o] = function({defaultProp: e, onChange: t}) {
                    let n = (0,
                    i.useState)(e)
                      , [r] = n
                      , o = (0,
                    i.useRef)(r)
                      , l = d(t);
                    return (0,
                    i.useEffect)(()=>{
                        o.current !== r && (l(r),
                        o.current = r)
                    }
                    , [r, o, l]),
                    n
                }({
                    defaultProp: t,
                    onChange: n
                })
                  , l = void 0 !== e
                  , a = l ? e : r
                  , s = d(n);
                return [a, (0,
                i.useCallback)(t=>{
                    if (l) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && s(n)
                    } else
                        o(t)
                }
                , [l, e, o, s])]
            }({
                prop: r,
                defaultProp: o,
                onChange: e=>{
                    e ? (c.onOpen(),
                    document.dispatchEvent(new CustomEvent(eY))) : c.onClose(),
                    null == l || l(e)
                }
            })
              , k = (0,
            i.useMemo)(()=>E ? x.current ? "delayed-open" : "instant-open" : "closed", [E])
              , T = (0,
            i.useCallback)(()=>{
                window.clearTimeout(h.current),
                x.current = !1,
                C(!0)
            }
            , [C])
              , P = (0,
            i.useCallback)(()=>{
                window.clearTimeout(h.current),
                C(!1)
            }
            , [C])
              , R = (0,
            i.useCallback)(()=>{
                window.clearTimeout(h.current),
                h.current = window.setTimeout(()=>{
                    x.current = !0,
                    C(!0)
                }
                , w)
            }
            , [w, C]);
            return (0,
            i.useEffect)(()=>()=>window.clearTimeout(h.current), []),
            (0,
            i.createElement)(eH, u, (0,
            i.createElement)(eQ, {
                scope: t,
                contentId: m,
                open: E,
                stateAttribute: k,
                trigger: f,
                onTriggerChange: p,
                onTriggerEnter: (0,
                i.useCallback)(()=>{
                    c.isOpenDelayed ? R() : T()
                }
                , [c.isOpenDelayed, R, T]),
                onTriggerLeave: (0,
                i.useCallback)(()=>{
                    g ? P() : window.clearTimeout(h.current)
                }
                , [P, g]),
                onOpen: T,
                onClose: P,
                disableHoverableContent: g
            }, n))
        }
          , tr = e2
          , to = e8
    },
    9213: function(e, t, n) {
        n.d(t, {
            j: function() {
                return i
            }
        });
        let r = e=>"boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e
          , o = function() {
            for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) && (t = function e(t) {
                    var n, r, o = "";
                    if ("string" == typeof t || "number" == typeof t)
                        o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (n = 0; n < t.length; n++)
                                t[n] && (r = e(t[n])) && (o && (o += " "),
                                o += r);
                        else
                            for (n in t)
                                t[n] && (o && (o += " "),
                                o += n)
                    }
                    return o
                }(e)) && (r && (r += " "),
                r += t);
            return r
        }
          , i = (e,t)=>n=>{
            var i;
            if ((null == t ? void 0 : t.variants) == null)
                return o(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            let {variants: l, defaultVariants: a} = t
              , s = Object.keys(l).map(e=>{
                let t = null == n ? void 0 : n[e]
                  , o = null == a ? void 0 : a[e];
                if (null === t)
                    return null;
                let i = r(t) || r(o);
                return l[e][i]
            }
            )
              , c = n && Object.entries(n).reduce((e,t)=>{
                let[n,r] = t;
                return void 0 === r || (e[n] = r),
                e
            }
            , {});
            return o(e, s, null == t ? void 0 : null === (i = t.compoundVariants) || void 0 === i ? void 0 : i.reduce((e,t)=>{
                let {class: n, className: r, ...o} = t;
                return Object.entries(o).every(e=>{
                    let[t,n] = e;
                    return Array.isArray(n) ? n.includes({
                        ...a,
                        ...c
                    }[t]) : ({
                        ...a,
                        ...c
                    })[t] === n
                }
                ) ? [...e, n, r] : e
            }
            , []), null == n ? void 0 : n.class, null == n ? void 0 : n.className)
        }
    },
    7042: function(e, t, n) {
        n.d(t, {
            W: function() {
                return r
            }
        });
        function r() {
            for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
                (e = arguments[n]) && (t = function e(t) {
                    var n, r, o = "";
                    if ("string" == typeof t || "number" == typeof t)
                        o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var i = t.length;
                            for (n = 0; n < i; n++)
                                t[n] && (r = e(t[n])) && (o && (o += " "),
                                o += r)
                        } else
                            for (r in t)
                                t[r] && (o && (o += " "),
                                o += r)
                    }
                    return o
                }(e)) && (r && (r += " "),
                r += t);
            return r
        }
    },
    4769: function(e, t, n) {
        n.d(t, {
            m6: function() {
                return M
            }
        });
        let r = /^\[(.+)\]$/;
        function o(e, t) {
            let n = e;
            return t.split("-").forEach(e=>{
                n.nextPart.has(e) || n.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }),
                n = n.nextPart.get(e)
            }
            ),
            n
        }
        let i = /\s+/;
        function l() {
            let e, t, n = 0, r = "";
            for (; n < arguments.length; )
                (e = arguments[n++]) && (t = function e(t) {
                    let n;
                    if ("string" == typeof t)
                        return t;
                    let r = "";
                    for (let o = 0; o < t.length; o++)
                        t[o] && (n = e(t[o])) && (r && (r += " "),
                        r += n);
                    return r
                }(e)) && (r && (r += " "),
                r += t);
            return r
        }
        function a(e) {
            let t = t=>t[e] || [];
            return t.isThemeGetter = !0,
            t
        }
        let s = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , c = /^\d+\/\d+$/
          , u = new Set(["px", "full", "screen"])
          , d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , f = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , p = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , m = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
        function h(e) {
            return b(e) || u.has(e) || c.test(e)
        }
        function g(e) {
            return S(e, "length", A)
        }
        function b(e) {
            return !!e && !Number.isNaN(Number(e))
        }
        function v(e) {
            return S(e, "number", b)
        }
        function y(e) {
            return !!e && Number.isInteger(Number(e))
        }
        function w(e) {
            return e.endsWith("%") && b(e.slice(0, -1))
        }
        function x(e) {
            return s.test(e)
        }
        function E(e) {
            return d.test(e)
        }
        let C = new Set(["length", "size", "percentage"]);
        function k(e) {
            return S(e, C, z)
        }
        function T(e) {
            return S(e, "position", z)
        }
        let P = new Set(["image", "url"]);
        function R(e) {
            return S(e, P, N)
        }
        function O(e) {
            return S(e, "", D)
        }
        function L() {
            return !0
        }
        function S(e, t, n) {
            let r = s.exec(e);
            return !!r && (r[1] ? "string" == typeof t ? r[1] === t : t.has(r[1]) : n(r[2]))
        }
        function A(e) {
            return f.test(e)
        }
        function z() {
            return !1
        }
        function D(e) {
            return p.test(e)
        }
        function N(e) {
            return m.test(e)
        }
        let M = function(e) {
            let t, n, a;
            let s = function(i) {
                var l;
                return n = (t = {
                    cache: function(e) {
                        if (e < 1)
                            return {
                                get: ()=>void 0,
                                set: ()=>{}
                            };
                        let t = 0
                          , n = new Map
                          , r = new Map;
                        function o(o, i) {
                            n.set(o, i),
                            ++t > e && (t = 0,
                            r = n,
                            n = new Map)
                        }
                        return {
                            get(e) {
                                let t = n.get(e);
                                return void 0 !== t ? t : void 0 !== (t = r.get(e)) ? (o(e, t),
                                t) : void 0
                            },
                            set(e, t) {
                                n.has(e) ? n.set(e, t) : o(e, t)
                            }
                        }
                    }((l = [].reduce((e,t)=>t(e), e())).cacheSize),
                    splitModifiers: function(e) {
                        let t = e.separator
                          , n = 1 === t.length
                          , r = t[0]
                          , o = t.length;
                        return function(e) {
                            let i;
                            let l = []
                              , a = 0
                              , s = 0;
                            for (let c = 0; c < e.length; c++) {
                                let u = e[c];
                                if (0 === a) {
                                    if (u === r && (n || e.slice(c, c + o) === t)) {
                                        l.push(e.slice(s, c)),
                                        s = c + o;
                                        continue
                                    }
                                    if ("/" === u) {
                                        i = c;
                                        continue
                                    }
                                }
                                "[" === u ? a++ : "]" === u && a--
                            }
                            let c = 0 === l.length ? e : e.substring(s)
                              , u = c.startsWith("!")
                              , d = u ? c.substring(1) : c;
                            return {
                                modifiers: l,
                                hasImportantModifier: u,
                                baseClassName: d,
                                maybePostfixModifierPosition: i && i > s ? i - s : void 0
                            }
                        }
                    }(l),
                    ...function(e) {
                        let t = function(e) {
                            var t;
                            let {theme: n, prefix: r} = e
                              , i = {
                                nextPart: new Map,
                                validators: []
                            };
                            return (t = Object.entries(e.classGroups),
                            r ? t.map(([e,t])=>[e, t.map(e=>"string" == typeof e ? r + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e,t])=>[r + e, t])) : e)]) : t).forEach(([e,t])=>{
                                (function e(t, n, r, i) {
                                    t.forEach(t=>{
                                        if ("string" == typeof t) {
                                            ("" === t ? n : o(n, t)).classGroupId = r;
                                            return
                                        }
                                        if ("function" == typeof t) {
                                            if (t.isThemeGetter) {
                                                e(t(i), n, r, i);
                                                return
                                            }
                                            n.validators.push({
                                                validator: t,
                                                classGroupId: r
                                            });
                                            return
                                        }
                                        Object.entries(t).forEach(([t,l])=>{
                                            e(l, o(n, t), r, i)
                                        }
                                        )
                                    }
                                    )
                                }
                                )(t, i, e, n)
                            }
                            ),
                            i
                        }(e)
                          , {conflictingClassGroups: n, conflictingClassGroupModifiers: i} = e;
                        return {
                            getClassGroupId: function(e) {
                                let n = e.split("-");
                                return "" === n[0] && 1 !== n.length && n.shift(),
                                function e(t, n) {
                                    if (0 === t.length)
                                        return n.classGroupId;
                                    let r = t[0]
                                      , o = n.nextPart.get(r)
                                      , i = o ? e(t.slice(1), o) : void 0;
                                    if (i)
                                        return i;
                                    if (0 === n.validators.length)
                                        return;
                                    let l = t.join("-");
                                    return n.validators.find(({validator: e})=>e(l))?.classGroupId
                                }(n, t) || function(e) {
                                    if (r.test(e)) {
                                        let t = r.exec(e)[1]
                                          , n = t?.substring(0, t.indexOf(":"));
                                        if (n)
                                            return "arbitrary.." + n
                                    }
                                }(e)
                            },
                            getConflictingClassGroupIds: function(e, t) {
                                let r = n[e] || [];
                                return t && i[e] ? [...r, ...i[e]] : r
                            }
                        }
                    }(l)
                }).cache.get,
                a = t.cache.set,
                s = c,
                c(i)
            };
            function c(e) {
                let r = n(e);
                if (r)
                    return r;
                let o = function(e, t) {
                    let {splitModifiers: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
                      , l = new Set;
                    return e.trim().split(i).map(e=>{
                        let {modifiers: t, hasImportantModifier: o, baseClassName: i, maybePostfixModifierPosition: l} = n(e)
                          , a = r(l ? i.substring(0, l) : i)
                          , s = !!l;
                        if (!a) {
                            if (!l || !(a = r(i)))
                                return {
                                    isTailwindClass: !1,
                                    originalClassName: e
                                };
                            s = !1
                        }
                        let c = (function(e) {
                            if (e.length <= 1)
                                return e;
                            let t = []
                              , n = [];
                            return e.forEach(e=>{
                                "[" === e[0] ? (t.push(...n.sort(), e),
                                n = []) : n.push(e)
                            }
                            ),
                            t.push(...n.sort()),
                            t
                        }
                        )(t).join(":");
                        return {
                            isTailwindClass: !0,
                            modifierId: o ? c + "!" : c,
                            classGroupId: a,
                            originalClassName: e,
                            hasPostfixModifier: s
                        }
                    }
                    ).reverse().filter(e=>{
                        if (!e.isTailwindClass)
                            return !0;
                        let {modifierId: t, classGroupId: n, hasPostfixModifier: r} = e
                          , i = t + n;
                        return !l.has(i) && (l.add(i),
                        o(n, r).forEach(e=>l.add(t + e)),
                        !0)
                    }
                    ).reverse().map(e=>e.originalClassName).join(" ")
                }(e, t);
                return a(e, o),
                o
            }
            return function() {
                return s(l.apply(null, arguments))
            }
        }(function() {
            let e = a("colors")
              , t = a("spacing")
              , n = a("blur")
              , r = a("brightness")
              , o = a("borderColor")
              , i = a("borderRadius")
              , l = a("borderSpacing")
              , s = a("borderWidth")
              , c = a("contrast")
              , u = a("grayscale")
              , d = a("hueRotate")
              , f = a("invert")
              , p = a("gap")
              , m = a("gradientColorStops")
              , C = a("gradientColorStopPositions")
              , P = a("inset")
              , S = a("margin")
              , A = a("opacity")
              , z = a("padding")
              , D = a("saturate")
              , N = a("scale")
              , M = a("sepia")
              , j = a("skew")
              , _ = a("space")
              , W = a("translate")
              , $ = ()=>["auto", "contain", "none"]
              , I = ()=>["auto", "hidden", "clip", "visible", "scroll"]
              , H = ()=>["auto", x, t]
              , Z = ()=>[x, t]
              , F = ()=>["", h, g]
              , V = ()=>["auto", b, x]
              , B = ()=>["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , G = ()=>["solid", "dashed", "dotted", "double", "none"]
              , U = ()=>["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
              , q = ()=>["start", "end", "center", "between", "around", "evenly", "stretch"]
              , Y = ()=>["", "0", x]
              , K = ()=>["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , X = ()=>[b, v]
              , J = ()=>[b, x];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [L],
                    spacing: [h, g],
                    blur: ["none", "", E, x],
                    brightness: X(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", E, x],
                    borderSpacing: Z(),
                    borderWidth: F(),
                    contrast: X(),
                    grayscale: Y(),
                    hueRotate: J(),
                    invert: Y(),
                    gap: Z(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [w, g],
                    inset: H(),
                    margin: H(),
                    opacity: X(),
                    padding: Z(),
                    saturate: X(),
                    scale: X(),
                    sepia: Y(),
                    skew: J(),
                    space: Z(),
                    translate: Z()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", x]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [E]
                    }],
                    "break-after": [{
                        "break-after": K()
                    }],
                    "break-before": [{
                        "break-before": K()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...B(), x]
                    }],
                    overflow: [{
                        overflow: I()
                    }],
                    "overflow-x": [{
                        "overflow-x": I()
                    }],
                    "overflow-y": [{
                        "overflow-y": I()
                    }],
                    overscroll: [{
                        overscroll: $()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": $()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": $()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [P]
                    }],
                    "inset-x": [{
                        "inset-x": [P]
                    }],
                    "inset-y": [{
                        "inset-y": [P]
                    }],
                    start: [{
                        start: [P]
                    }],
                    end: [{
                        end: [P]
                    }],
                    top: [{
                        top: [P]
                    }],
                    right: [{
                        right: [P]
                    }],
                    bottom: [{
                        bottom: [P]
                    }],
                    left: [{
                        left: [P]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", y, x]
                    }],
                    basis: [{
                        basis: H()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", x]
                    }],
                    grow: [{
                        grow: Y()
                    }],
                    shrink: [{
                        shrink: Y()
                    }],
                    order: [{
                        order: ["first", "last", "none", y, x]
                    }],
                    "grid-cols": [{
                        "grid-cols": [L]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", y, x]
                        }, x]
                    }],
                    "col-start": [{
                        "col-start": V()
                    }],
                    "col-end": [{
                        "col-end": V()
                    }],
                    "grid-rows": [{
                        "grid-rows": [L]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [y, x]
                        }, x]
                    }],
                    "row-start": [{
                        "row-start": V()
                    }],
                    "row-end": [{
                        "row-end": V()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", x]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", x]
                    }],
                    gap: [{
                        gap: [p]
                    }],
                    "gap-x": [{
                        "gap-x": [p]
                    }],
                    "gap-y": [{
                        "gap-y": [p]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...q()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...q(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...q(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [z]
                    }],
                    px: [{
                        px: [z]
                    }],
                    py: [{
                        py: [z]
                    }],
                    ps: [{
                        ps: [z]
                    }],
                    pe: [{
                        pe: [z]
                    }],
                    pt: [{
                        pt: [z]
                    }],
                    pr: [{
                        pr: [z]
                    }],
                    pb: [{
                        pb: [z]
                    }],
                    pl: [{
                        pl: [z]
                    }],
                    m: [{
                        m: [S]
                    }],
                    mx: [{
                        mx: [S]
                    }],
                    my: [{
                        my: [S]
                    }],
                    ms: [{
                        ms: [S]
                    }],
                    me: [{
                        me: [S]
                    }],
                    mt: [{
                        mt: [S]
                    }],
                    mr: [{
                        mr: [S]
                    }],
                    mb: [{
                        mb: [S]
                    }],
                    ml: [{
                        ml: [S]
                    }],
                    "space-x": [{
                        "space-x": [_]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [_]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", x, t]
                    }],
                    "min-w": [{
                        "min-w": [x, t, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [x, t, "none", "full", "min", "max", "fit", "prose", {
                            screen: [E]
                        }, E]
                    }],
                    h: [{
                        h: [x, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [x, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [x, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [x, t, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", E, g]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", v]
                    }],
                    "font-family": [{
                        font: [L]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", x]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", b, v]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", h, x]
                    }],
                    "list-image": [{
                        "list-image": ["none", x]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", x]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [A]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [A]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...G(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", h, g]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", h, x]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: Z()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", x]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", x]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [A]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...B(), T]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", k]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, R]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [C]
                    }],
                    "gradient-via-pos": [{
                        via: [C]
                    }],
                    "gradient-to-pos": [{
                        to: [C]
                    }],
                    "gradient-from": [{
                        from: [m]
                    }],
                    "gradient-via": [{
                        via: [m]
                    }],
                    "gradient-to": [{
                        to: [m]
                    }],
                    rounded: [{
                        rounded: [i]
                    }],
                    "rounded-s": [{
                        "rounded-s": [i]
                    }],
                    "rounded-e": [{
                        "rounded-e": [i]
                    }],
                    "rounded-t": [{
                        "rounded-t": [i]
                    }],
                    "rounded-r": [{
                        "rounded-r": [i]
                    }],
                    "rounded-b": [{
                        "rounded-b": [i]
                    }],
                    "rounded-l": [{
                        "rounded-l": [i]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [i]
                    }],
                    "rounded-se": [{
                        "rounded-se": [i]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [i]
                    }],
                    "rounded-es": [{
                        "rounded-es": [i]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [i]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [i]
                    }],
                    "rounded-br": [{
                        "rounded-br": [i]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [i]
                    }],
                    "border-w": [{
                        border: [s]
                    }],
                    "border-w-x": [{
                        "border-x": [s]
                    }],
                    "border-w-y": [{
                        "border-y": [s]
                    }],
                    "border-w-s": [{
                        "border-s": [s]
                    }],
                    "border-w-e": [{
                        "border-e": [s]
                    }],
                    "border-w-t": [{
                        "border-t": [s]
                    }],
                    "border-w-r": [{
                        "border-r": [s]
                    }],
                    "border-w-b": [{
                        "border-b": [s]
                    }],
                    "border-w-l": [{
                        "border-l": [s]
                    }],
                    "border-opacity": [{
                        "border-opacity": [A]
                    }],
                    "border-style": [{
                        border: [...G(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [s]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [s]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [A]
                    }],
                    "divide-style": [{
                        divide: G()
                    }],
                    "border-color": [{
                        border: [o]
                    }],
                    "border-color-x": [{
                        "border-x": [o]
                    }],
                    "border-color-y": [{
                        "border-y": [o]
                    }],
                    "border-color-t": [{
                        "border-t": [o]
                    }],
                    "border-color-r": [{
                        "border-r": [o]
                    }],
                    "border-color-b": [{
                        "border-b": [o]
                    }],
                    "border-color-l": [{
                        "border-l": [o]
                    }],
                    "divide-color": [{
                        divide: [o]
                    }],
                    "outline-style": [{
                        outline: ["", ...G()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [h, x]
                    }],
                    "outline-w": [{
                        outline: [h, g]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: F()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [A]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [h, g]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", E, O]
                    }],
                    "shadow-color": [{
                        shadow: [L]
                    }],
                    opacity: [{
                        opacity: [A]
                    }],
                    "mix-blend": [{
                        "mix-blend": U()
                    }],
                    "bg-blend": [{
                        "bg-blend": U()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [n]
                    }],
                    brightness: [{
                        brightness: [r]
                    }],
                    contrast: [{
                        contrast: [c]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", E, x]
                    }],
                    grayscale: [{
                        grayscale: [u]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [d]
                    }],
                    invert: [{
                        invert: [f]
                    }],
                    saturate: [{
                        saturate: [D]
                    }],
                    sepia: [{
                        sepia: [M]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [n]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [r]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [c]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [u]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [d]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [f]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [A]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [D]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [M]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [l]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [l]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [l]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", x]
                    }],
                    duration: [{
                        duration: J()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", x]
                    }],
                    delay: [{
                        delay: J()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", x]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [N]
                    }],
                    "scale-x": [{
                        "scale-x": [N]
                    }],
                    "scale-y": [{
                        "scale-y": [N]
                    }],
                    rotate: [{
                        rotate: [y, x]
                    }],
                    "translate-x": [{
                        "translate-x": [W]
                    }],
                    "translate-y": [{
                        "translate-y": [W]
                    }],
                    "skew-x": [{
                        "skew-x": [j]
                    }],
                    "skew-y": [{
                        "skew-y": [j]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", x]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", x]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": Z()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": Z()
                    }],
                    "scroll-my": [{
                        "scroll-my": Z()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": Z()
                    }],
                    "scroll-me": [{
                        "scroll-me": Z()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": Z()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": Z()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": Z()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": Z()
                    }],
                    "scroll-p": [{
                        "scroll-p": Z()
                    }],
                    "scroll-px": [{
                        "scroll-px": Z()
                    }],
                    "scroll-py": [{
                        "scroll-py": Z()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": Z()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": Z()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": Z()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": Z()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": Z()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": Z()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", x]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [h, g, v]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        })
    }
}]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    6075: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 4768))
    },
    4768: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return C
            }
        });
        var a = r(7437)
          , n = r(2265)
          , s = r(6012)
          , l = r(7042)
          , i = r(4769);
        function o() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            i.m6)((0,
            l.W)(t))
        }
        let d = s.zt
          , c = s.fC
          , u = s.xz
          , x = n.forwardRef((e,t)=>{
            let {className: r, sideOffset: n=4, ...l} = e;
            return (0,
            a.jsx)(s.VY, {
                ref: t,
                sideOffset: n,
                className: o("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r),
                ...l
            })
        }
        );
        x.displayName = s.VY.displayName,
        r(5355);
        var f = (0,
        r(1162).$)("c2d6cbd3540609c8d8d071fef9dc4c699e7e74c9")
          , m = r(6264)
          , h = r(2405)
          , p = r(6224)
          , g = r(5432)
          , y = r(1424)
          , b = r(7256);
        let v = (0,
        r(9213).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-9 px-4 py-2",
                    sm: "h-8 rounded-md px-3 text-xs",
                    lg: "h-10 rounded-md px-8",
                    icon: "h-9 w-9"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , j = n.forwardRef((e,t)=>{
            let {className: r, variant: n, size: s, asChild: l=!1, ...i} = e
              , d = l ? b.g7 : "button";
            return (0,
            a.jsx)(d, {
                className: o(v({
                    variant: n,
                    size: s,
                    className: r
                })),
                ref: t,
                ...i
            })
        }
        );
        j.displayName = "Button";
        let w = n.forwardRef((e,t)=>{
            let {className: r, type: n, ...s} = e;
            return (0,
            a.jsx)("input", {
                type: n,
                className: o("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", r),
                ref: t,
                ...s
            })
        }
        );
        w.displayName = "Input";
        var k = r(6823);
        let N = n.forwardRef((e,t)=>{
            let {className: r, orientation: n="horizontal", decorative: s=!0, ...l} = e;
            return (0,
            a.jsx)(k.f, {
                ref: t,
                decorative: s,
                orientation: n,
                className: o("shrink-0 bg-border", "horizontal" === n ? "h-[1px] w-full" : "h-full w-[1px]", r),
                ...l
            })
        }
        );
        N.displayName = k.f.displayName;
        let z = "https://keysystem.fluxteam.net/android/checkpoint/start.php?HWID="
          , F = "https://gateway.platoboost.com/a/8?id=";
        function C() {
            let[e,t] = (0,
            n.useState)("Fluxus")
              , [r,s] = (0,
            n.useState)("")
              , [l,i] = (0,
            n.useState)(!1)
              , [o,b] = (0,
            n.useState)(null)
              , v = async(e,t)=>{
                if (i(!0),
                !t.includes("Fluxus" == e ? z : F)) {
                    y.A.error("Invalid ".concat(e, " link!")),
                    i(!1);
                    return
                }
                if ("Delta X" == e) {
                    if (t.split("?id=")[1].length < 4) {
                        y.A.error("Invalid ".concat(e, " link!")),
                        i(!1);
                        return
                    }
                } else if (0 == t.split("?HWID=")[1].length) {
                    y.A.error("Invalid ".concat(e, " link!")),
                    i(!1);
                    return
                }
                try {
                    let r = await f(e, t);
                    "error" != r ? (y.A.success("".concat(e, " Key Generated!")),
                    b(r)) : y.A.error("Error please try again!")
                } catch (e) {
                    y.A.error("Error please try again!")
                } finally {
                    i(!1)
                }
            }
            ;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("p", {
                    className: "animate-text text-5xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent",
                    children: [e, " Key Generator"]
                }), (0,
                a.jsx)("div", {
                    className: "flex w-full md:max-w-screen-sm max-w-sm gap-2",
                    children: null == o ? (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)(w, {
                            disabled: l || "Delta X" == e,
                            value: r,
                            type: "text",
                            placeholder: "Fluxus" == e ? z : F,
                            onChange: e=>{
                                s(e.target.value)
                            }
                        }), (0,
                        a.jsxs)(j, {
                            className: "flex gap-2",
                            onClick: async()=>{
                                await v(e, r)
                            }
                            ,
                            disabled: l || "Delta X" == e,
                            children: [l ? (0,
                            a.jsx)(m.Z, {
                                className: "animate-spin w-4 h-4"
                            }) : (0,
                            a.jsx)(h.Z, {
                                className: "w-4 h-4"
                            }), l ? "Generating Key" : "Get Key"]
                        })]
                    }) : (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)(w, {
                            value: null != o ? o : "".concat(e, " key ").concat(e, " key ").concat(e, " key"),
                            type: "text",
                            placeholder: "".concat(e, " key ").concat(e, " key ").concat(e, " key")
                        }), (0,
                        a.jsx)(d, {
                            children: (0,
                            a.jsxs)(c, {
                                children: [(0,
                                a.jsx)(u, {
                                    children: (0,
                                    a.jsx)(j, {
                                        variant: "outline",
                                        size: "icon",
                                        onClick: ()=>{
                                            navigator.clipboard.writeText(o) ? y.A.success("Key ".concat(o, " Copied!")) : y.A.error("Fail")
                                        }
                                        ,
                                        children: (0,
                                        a.jsx)(p.Z, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                }), (0,
                                a.jsx)(x, {
                                    children: (0,
                                    a.jsx)("p", {
                                        children: "Copy Key"
                                    })
                                })]
                            })
                        }), (0,
                        a.jsx)(d, {
                            children: (0,
                            a.jsxs)(c, {
                                children: [(0,
                                a.jsx)(u, {
                                    children: (0,
                                    a.jsx)(j, {
                                        variant: "outline",
                                        size: "icon",
                                        onClick: ()=>{
                                            b(null)
                                        }
                                        ,
                                        children: (0,
                                        a.jsx)(g.Z, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                }), (0,
                                a.jsx)(x, {
                                    children: (0,
                                    a.jsx)("p", {
                                        children: "Back"
                                    })
                                })]
                            })
                        })]
                    })
                }), "Delta X" == e ? (0,
                a.jsx)("p", {
                    className: "text-red-500 font-normal text-md",
                    children: "Delta X Key Generator currently down at the moment."
                }) : null, l && "Delta X" == e ? (0,
                a.jsx)("p", {
                    className: "text-gray-400 font-normal text-xs",
                    children: "Delta X Key Generator will take longer than Fluxus."
                }) : null, l || o ? null : (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(N, {
                        className: "md:max-w-screen-sm max-w-sm"
                    }), (0,
                    a.jsx)("div", {
                        className: "flex flex-row gap-2",
                        children: ["Fluxus", "Delta X"].map((r,l)=>(0,
                        a.jsxs)(n.Fragment, {
                            children: [(0,
                            a.jsx)(j, {
                                variant: "link",
                                onClick: ()=>{
                                    e != r && s(""),
                                    t(r)
                                }
                                ,
                                children: r
                            }, l), 1 != l ? (0,
                            a.jsx)(N, {
                                orientation: "vertical"
                            }) : null]
                        }, l))
                    })]
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [409, 593, 971, 938, 744], function() {
        return e(e.s = 6075)
    }),
    _N_E = e.O()
}
]);

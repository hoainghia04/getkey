(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
    6855: function(t, e, o) {
        Promise.resolve().then(o.t.bind(o, 3385, 23)),
        Promise.resolve().then(o.t.bind(o, 8822, 23)),
        Promise.resolve().then(o.bind(o, 3304))
    },
    3304: function(t, e, o) {
        "use strict";
        o.r(e),
        o.d(e, {
            Toaster: function() {
                return l
            }
        });
        var r = o(7437)
          , s = o(2265);
        let n = (0,
        s.createContext)(void 0)
          , a = {
            setTheme: t=>{}
            ,
            themes: []
        }
          , u = ()=>{
            var t;
            return null !== (t = (0,
            s.useContext)(n)) && void 0 !== t ? t : a
        }
        ;
        var i = o(1424);
        let l = t=>{
            let {...e} = t
              , {theme: o="system"} = u();
            return (0,
            r.jsx)(i.x, {
                theme: o,
                className: "toaster group",
                toastOptions: {
                    classNames: {
                        toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                        description: "group-[.toast]:text-muted-foreground",
                        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                    }
                },
                ...e
            })
        }
    },
    3385: function() {},
    8822: function(t) {
        t.exports = {
            style: {
                fontFamily: "'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",
                fontStyle: "normal"
            },
            className: "__className_e66fe9"
        }
    }
}, function(t) {
    t.O(0, [409, 971, 938, 744], function() {
        return t(t.s = 6855)
    }),
    _N_E = t.O()
}
]);

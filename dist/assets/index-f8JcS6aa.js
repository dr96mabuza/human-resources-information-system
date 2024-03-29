function tc(t, n) {
  for (var r = 0; r < n.length; r++) {
    const l = n[r];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const o in l)
        if (o !== "default" && !(o in t)) {
          const i = Object.getOwnPropertyDescriptor(l, o);
          i &&
            Object.defineProperty(
              t,
              o,
              i.get ? i : { enumerable: !0, get: () => l[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) l(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && l(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function l(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
})();
function nc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var rc = { exports: {} },
  So = {},
  lc = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cl = Symbol.for("react.element"),
  Yf = Symbol.for("react.portal"),
  Xf = Symbol.for("react.fragment"),
  Zf = Symbol.for("react.strict_mode"),
  qf = Symbol.for("react.profiler"),
  bf = Symbol.for("react.provider"),
  eh = Symbol.for("react.context"),
  th = Symbol.for("react.forward_ref"),
  nh = Symbol.for("react.suspense"),
  rh = Symbol.for("react.memo"),
  lh = Symbol.for("react.lazy"),
  Ps = Symbol.iterator;
function oh(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Ps && t[Ps]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var oc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ic = Object.assign,
  ac = {};
function cr(t, n, r) {
  (this.props = t),
    (this.context = n),
    (this.refs = ac),
    (this.updater = r || oc);
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function (t, n) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, n, "setState");
};
cr.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function sc() {}
sc.prototype = cr.prototype;
function ga(t, n, r) {
  (this.props = t),
    (this.context = n),
    (this.refs = ac),
    (this.updater = r || oc);
}
var xa = (ga.prototype = new sc());
xa.constructor = ga;
ic(xa, cr.prototype);
xa.isPureReactComponent = !0;
var Ds = Array.isArray,
  uc = Object.prototype.hasOwnProperty,
  wa = { current: null },
  cc = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(t, n, r) {
  var l,
    o = {},
    i = null,
    a = null;
  if (n != null)
    for (l in (n.ref !== void 0 && (a = n.ref),
    n.key !== void 0 && (i = "" + n.key),
    n))
      uc.call(n, l) && !cc.hasOwnProperty(l) && (o[l] = n[l]);
  var u = arguments.length - 2;
  if (u === 1) o.children = r;
  else if (1 < u) {
    for (var c = Array(u), d = 0; d < u; d++) c[d] = arguments[d + 2];
    o.children = c;
  }
  if (t && t.defaultProps)
    for (l in ((u = t.defaultProps), u)) o[l] === void 0 && (o[l] = u[l]);
  return {
    $$typeof: cl,
    type: t,
    key: i,
    ref: a,
    props: o,
    _owner: wa.current,
  };
}
function ih(t, n) {
  return {
    $$typeof: cl,
    type: t.type,
    key: n,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Sa(t) {
  return typeof t == "object" && t !== null && t.$$typeof === cl;
}
function ah(t) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (r) {
      return n[r];
    })
  );
}
var Rs = /\/+/g;
function Jo(t, n) {
  return typeof t == "object" && t !== null && t.key != null
    ? ah("" + t.key)
    : n.toString(36);
}
function Ol(t, n, r, l, o) {
  var i = typeof t;
  (i === "undefined" || i === "boolean") && (t = null);
  var a = !1;
  if (t === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case cl:
          case Yf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = t),
      (o = o(a)),
      (t = l === "" ? "." + Jo(a, 0) : l),
      Ds(o)
        ? ((r = ""),
          t != null && (r = t.replace(Rs, "$&/") + "/"),
          Ol(o, n, r, "", function (d) {
            return d;
          }))
        : o != null &&
          (Sa(o) &&
            (o = ih(
              o,
              r +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Rs, "$&/") + "/") +
                t,
            )),
          n.push(o)),
      1
    );
  if (((a = 0), (l = l === "" ? "." : l + ":"), Ds(t)))
    for (var u = 0; u < t.length; u++) {
      i = t[u];
      var c = l + Jo(i, u);
      a += Ol(i, n, r, c, o);
    }
  else if (((c = oh(t)), typeof c == "function"))
    for (t = c.call(t), u = 0; !(i = t.next()).done; )
      (i = i.value), (c = l + Jo(i, u++)), (a += Ol(i, n, r, c, o));
  else if (i === "object")
    throw (
      ((n = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return a;
}
function wl(t, n, r) {
  if (t == null) return t;
  var l = [],
    o = 0;
  return (
    Ol(t, l, "", "", function (i) {
      return n.call(r, i, o++);
    }),
    l
  );
}
function sh(t) {
  if (t._status === -1) {
    var n = t._result;
    (n = n()),
      n.then(
        function (r) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = r));
        },
        function (r) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = r));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = n));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Ae = { current: null },
  Ul = { transition: null },
  uh = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: Ul,
    ReactCurrentOwner: wa,
  };
J.Children = {
  map: wl,
  forEach: function (t, n, r) {
    wl(
      t,
      function () {
        n.apply(this, arguments);
      },
      r,
    );
  },
  count: function (t) {
    var n = 0;
    return (
      wl(t, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (t) {
    return (
      wl(t, function (n) {
        return n;
      }) || []
    );
  },
  only: function (t) {
    if (!Sa(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
J.Component = cr;
J.Fragment = Xf;
J.Profiler = qf;
J.PureComponent = ga;
J.StrictMode = Zf;
J.Suspense = nh;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uh;
J.cloneElement = function (t, n, r) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var l = ic({}, t.props),
    o = t.key,
    i = t.ref,
    a = t._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (a = wa.current)),
      n.key !== void 0 && (o = "" + n.key),
      t.type && t.type.defaultProps)
    )
      var u = t.type.defaultProps;
    for (c in n)
      uc.call(n, c) &&
        !cc.hasOwnProperty(c) &&
        (l[c] = n[c] === void 0 && u !== void 0 ? u[c] : n[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) l.children = r;
  else if (1 < c) {
    u = Array(c);
    for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
    l.children = u;
  }
  return { $$typeof: cl, type: t.type, key: o, ref: i, props: l, _owner: a };
};
J.createContext = function (t) {
  return (
    (t = {
      $$typeof: eh,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: bf, _context: t }),
    (t.Consumer = t)
  );
};
J.createElement = dc;
J.createFactory = function (t) {
  var n = dc.bind(null, t);
  return (n.type = t), n;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (t) {
  return { $$typeof: th, render: t };
};
J.isValidElement = Sa;
J.lazy = function (t) {
  return { $$typeof: lh, _payload: { _status: -1, _result: t }, _init: sh };
};
J.memo = function (t, n) {
  return { $$typeof: rh, type: t, compare: n === void 0 ? null : n };
};
J.startTransition = function (t) {
  var n = Ul.transition;
  Ul.transition = {};
  try {
    t();
  } finally {
    Ul.transition = n;
  }
};
J.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
J.useCallback = function (t, n) {
  return Ae.current.useCallback(t, n);
};
J.useContext = function (t) {
  return Ae.current.useContext(t);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (t) {
  return Ae.current.useDeferredValue(t);
};
J.useEffect = function (t, n) {
  return Ae.current.useEffect(t, n);
};
J.useId = function () {
  return Ae.current.useId();
};
J.useImperativeHandle = function (t, n, r) {
  return Ae.current.useImperativeHandle(t, n, r);
};
J.useInsertionEffect = function (t, n) {
  return Ae.current.useInsertionEffect(t, n);
};
J.useLayoutEffect = function (t, n) {
  return Ae.current.useLayoutEffect(t, n);
};
J.useMemo = function (t, n) {
  return Ae.current.useMemo(t, n);
};
J.useReducer = function (t, n, r) {
  return Ae.current.useReducer(t, n, r);
};
J.useRef = function (t) {
  return Ae.current.useRef(t);
};
J.useState = function (t) {
  return Ae.current.useState(t);
};
J.useSyncExternalStore = function (t, n, r) {
  return Ae.current.useSyncExternalStore(t, n, r);
};
J.useTransition = function () {
  return Ae.current.useTransition();
};
J.version = "18.2.0";
lc.exports = J;
var S = lc.exports;
const fc = nc(S),
  ch = tc({ __proto__: null, default: fc }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dh = S,
  fh = Symbol.for("react.element"),
  hh = Symbol.for("react.fragment"),
  ph = Object.prototype.hasOwnProperty,
  mh = dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yh = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(t, n, r) {
  var l,
    o = {},
    i = null,
    a = null;
  r !== void 0 && (i = "" + r),
    n.key !== void 0 && (i = "" + n.key),
    n.ref !== void 0 && (a = n.ref);
  for (l in n) ph.call(n, l) && !yh.hasOwnProperty(l) && (o[l] = n[l]);
  if (t && t.defaultProps)
    for (l in ((n = t.defaultProps), n)) o[l] === void 0 && (o[l] = n[l]);
  return {
    $$typeof: fh,
    type: t,
    key: i,
    ref: a,
    props: o,
    _owner: mh.current,
  };
}
So.Fragment = hh;
So.jsx = hc;
So.jsxs = hc;
rc.exports = So;
var s = rc.exports,
  Si = {},
  pc = { exports: {} },
  Ze = {},
  mc = { exports: {} },
  yc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function n(M, $) {
    var H = M.length;
    M.push($);
    e: for (; 0 < H; ) {
      var X = (H - 1) >>> 1,
        ne = M[X];
      if (0 < o(ne, $)) (M[X] = $), (M[H] = ne), (H = X);
      else break e;
    }
  }
  function r(M) {
    return M.length === 0 ? null : M[0];
  }
  function l(M) {
    if (M.length === 0) return null;
    var $ = M[0],
      H = M.pop();
    if (H !== $) {
      M[0] = H;
      e: for (var X = 0, ne = M.length, gt = ne >>> 1; X < gt; ) {
        var Pe = 2 * (X + 1) - 1,
          ut = M[Pe],
          Ie = Pe + 1,
          Ut = M[Ie];
        if (0 > o(ut, H))
          Ie < ne && 0 > o(Ut, ut)
            ? ((M[X] = Ut), (M[Ie] = H), (X = Ie))
            : ((M[X] = ut), (M[Pe] = H), (X = Pe));
        else if (Ie < ne && 0 > o(Ut, H)) (M[X] = Ut), (M[Ie] = H), (X = Ie);
        else break e;
      }
    }
    return $;
  }
  function o(M, $) {
    var H = M.sortIndex - $.sortIndex;
    return H !== 0 ? H : M.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    t.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      u = a.now();
    t.unstable_now = function () {
      return a.now() - u;
    };
  }
  var c = [],
    d = [],
    f = 1,
    m = null,
    v = 3,
    k = !1,
    E = !1,
    j = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(M) {
    for (var $ = r(d); $ !== null; ) {
      if ($.callback === null) l(d);
      else if ($.startTime <= M)
        l(d), ($.sortIndex = $.expirationTime), n(c, $);
      else break;
      $ = r(d);
    }
  }
  function N(M) {
    if (((j = !1), y(M), !E))
      if (r(c) !== null) (E = !0), Ot(_);
      else {
        var $ = r(d);
        $ !== null && oe(N, $.startTime - M);
      }
  }
  function _(M, $) {
    (E = !1), j && ((j = !1), p(T), (T = -1)), (k = !0);
    var H = v;
    try {
      for (
        y($), m = r(c);
        m !== null && (!(m.expirationTime > $) || (M && !Y()));

      ) {
        var X = m.callback;
        if (typeof X == "function") {
          (m.callback = null), (v = m.priorityLevel);
          var ne = X(m.expirationTime <= $);
          ($ = t.unstable_now()),
            typeof ne == "function" ? (m.callback = ne) : m === r(c) && l(c),
            y($);
        } else l(c);
        m = r(c);
      }
      if (m !== null) var gt = !0;
      else {
        var Pe = r(d);
        Pe !== null && oe(N, Pe.startTime - $), (gt = !1);
      }
      return gt;
    } finally {
      (m = null), (v = H), (k = !1);
    }
  }
  var g = !1,
    D = null,
    T = -1,
    I = 5,
    U = -1;
  function Y() {
    return !(t.unstable_now() - U < I);
  }
  function we() {
    if (D !== null) {
      var M = t.unstable_now();
      U = M;
      var $ = !0;
      try {
        $ = D(!0, M);
      } finally {
        $ ? ge() : ((g = !1), (D = null));
      }
    } else g = !1;
  }
  var ge;
  if (typeof h == "function")
    ge = function () {
      h(we);
    };
  else if (typeof MessageChannel < "u") {
    var be = new MessageChannel(),
      Ln = be.port2;
    (be.port1.onmessage = we),
      (ge = function () {
        Ln.postMessage(null);
      });
  } else
    ge = function () {
      P(we, 0);
    };
  function Ot(M) {
    (D = M), g || ((g = !0), ge());
  }
  function oe(M, $) {
    T = P(function () {
      M(t.unstable_now());
    }, $);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      E || k || ((E = !0), Ot(_));
    }),
    (t.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return r(c);
    }),
    (t.unstable_next = function (M) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = v;
      }
      var H = v;
      v = $;
      try {
        return M();
      } finally {
        v = H;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (M, $) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var H = v;
      v = M;
      try {
        return $();
      } finally {
        v = H;
      }
    }),
    (t.unstable_scheduleCallback = function (M, $, H) {
      var X = t.unstable_now();
      switch (
        (typeof H == "object" && H !== null
          ? ((H = H.delay), (H = typeof H == "number" && 0 < H ? X + H : X))
          : (H = X),
        M)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = H + ne),
        (M = {
          id: f++,
          callback: $,
          priorityLevel: M,
          startTime: H,
          expirationTime: ne,
          sortIndex: -1,
        }),
        H > X
          ? ((M.sortIndex = H),
            n(d, M),
            r(c) === null &&
              M === r(d) &&
              (j ? (p(T), (T = -1)) : (j = !0), oe(N, H - X)))
          : ((M.sortIndex = ne), n(c, M), E || k || ((E = !0), Ot(_))),
        M
      );
    }),
    (t.unstable_shouldYield = Y),
    (t.unstable_wrapCallback = function (M) {
      var $ = v;
      return function () {
        var H = v;
        v = $;
        try {
          return M.apply(this, arguments);
        } finally {
          v = H;
        }
      };
    });
})(yc);
mc.exports = yc;
var vh = mc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vc = S,
  Xe = vh;
function R(t) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1;
    r < arguments.length;
    r++
  )
    n += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var gc = new Set(),
  Wr = {};
function Rn(t, n) {
  rr(t, n), rr(t + "Capture", n);
}
function rr(t, n) {
  for (Wr[t] = n, t = 0; t < n.length; t++) gc.add(n[t]);
}
var Tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ji = Object.prototype.hasOwnProperty,
  gh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _s = {},
  Ts = {};
function xh(t) {
  return ji.call(Ts, t)
    ? !0
    : ji.call(_s, t)
      ? !1
      : gh.test(t)
        ? (Ts[t] = !0)
        : ((_s[t] = !0), !1);
}
function wh(t, n, r, l) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return l
        ? !1
        : r !== null
          ? !r.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function Sh(t, n, r, l) {
  if (n === null || typeof n > "u" || wh(t, n, r, l)) return !0;
  if (l) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function $e(t, n, r, l, o, i, a) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = l),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = t),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    Te[t] = new $e(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var n = t[0];
  Te[n] = new $e(n, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  Te[t] = new $e(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  Te[t] = new $e(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    Te[t] = new $e(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  Te[t] = new $e(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  Te[t] = new $e(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  Te[t] = new $e(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  Te[t] = new $e(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var ja = /[\-:]([a-z])/g;
function Ea(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var n = t.replace(ja, Ea);
    Te[n] = new $e(n, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var n = t.replace(ja, Ea);
    Te[n] = new $e(n, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var n = t.replace(ja, Ea);
  Te[n] = new $e(n, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  Te[t] = new $e(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new $e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  Te[t] = new $e(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Ca(t, n, r, l) {
  var o = Te.hasOwnProperty(n) ? Te[n] : null;
  (o !== null
    ? o.type !== 0
    : l ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Sh(n, r, o, l) && (r = null),
    l || o === null
      ? xh(n) && (r === null ? t.removeAttribute(n) : t.setAttribute(n, "" + r))
      : o.mustUseProperty
        ? (t[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
        : ((n = o.attributeName),
          (l = o.attributeNamespace),
          r === null
            ? t.removeAttribute(n)
            : ((o = o.type),
              (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
              l ? t.setAttributeNS(l, n, r) : t.setAttribute(n, r))));
}
var zt = vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sl = Symbol.for("react.element"),
  On = Symbol.for("react.portal"),
  Un = Symbol.for("react.fragment"),
  ka = Symbol.for("react.strict_mode"),
  Ei = Symbol.for("react.profiler"),
  xc = Symbol.for("react.provider"),
  wc = Symbol.for("react.context"),
  Na = Symbol.for("react.forward_ref"),
  Ci = Symbol.for("react.suspense"),
  ki = Symbol.for("react.suspense_list"),
  Pa = Symbol.for("react.memo"),
  Wt = Symbol.for("react.lazy"),
  Sc = Symbol.for("react.offscreen"),
  Ls = Symbol.iterator;
function vr(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Ls && t[Ls]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var ce = Object.assign,
  Ko;
function _r(t) {
  if (Ko === void 0)
    try {
      throw Error();
    } catch (r) {
      var n = r.stack.trim().match(/\n( *(at )?)/);
      Ko = (n && n[1]) || "";
    }
  return (
    `
` +
    Ko +
    t
  );
}
var Go = !1;
function Yo(t, n) {
  if (!t || Go) return "";
  Go = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (d) {
          var l = d;
        }
        Reflect.construct(t, [], n);
      } else {
        try {
          n.call();
        } catch (d) {
          l = d;
        }
        t.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        l = d;
      }
      t();
    }
  } catch (d) {
    if (d && l && typeof d.stack == "string") {
      for (
        var o = d.stack.split(`
`),
          i = l.stack.split(`
`),
          a = o.length - 1,
          u = i.length - 1;
        1 <= a && 0 <= u && o[a] !== i[u];

      )
        u--;
      for (; 1 <= a && 0 <= u; a--, u--)
        if (o[a] !== i[u]) {
          if (a !== 1 || u !== 1)
            do
              if ((a--, u--, 0 > u || o[a] !== i[u])) {
                var c =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", t.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= u);
          break;
        }
    }
  } finally {
    (Go = !1), (Error.prepareStackTrace = r);
  }
  return (t = t ? t.displayName || t.name : "") ? _r(t) : "";
}
function jh(t) {
  switch (t.tag) {
    case 5:
      return _r(t.type);
    case 16:
      return _r("Lazy");
    case 13:
      return _r("Suspense");
    case 19:
      return _r("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = Yo(t.type, !1)), t;
    case 11:
      return (t = Yo(t.type.render, !1)), t;
    case 1:
      return (t = Yo(t.type, !0)), t;
    default:
      return "";
  }
}
function Ni(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Un:
      return "Fragment";
    case On:
      return "Portal";
    case Ei:
      return "Profiler";
    case ka:
      return "StrictMode";
    case Ci:
      return "Suspense";
    case ki:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case wc:
        return (t.displayName || "Context") + ".Consumer";
      case xc:
        return (t._context.displayName || "Context") + ".Provider";
      case Na:
        var n = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = n.displayName || n.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Pa:
        return (
          (n = t.displayName || null), n !== null ? n : Ni(t.type) || "Memo"
        );
      case Wt:
        (n = t._payload), (t = t._init);
        try {
          return Ni(t(n));
        } catch {}
    }
  return null;
}
function Eh(t) {
  var n = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = n.render),
        (t = t.displayName || t.name || ""),
        n.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ni(n);
    case 8:
      return n === ka ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function ln(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function jc(t) {
  var n = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Ch(t) {
  var n = jc(t) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
    l = "" + t[n];
  if (
    !t.hasOwnProperty(n) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(t, n, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (l = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(t, n, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return l;
        },
        setValue: function (a) {
          l = "" + a;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[n];
        },
      }
    );
  }
}
function jl(t) {
  t._valueTracker || (t._valueTracker = Ch(t));
}
function Ec(t) {
  if (!t) return !1;
  var n = t._valueTracker;
  if (!n) return !0;
  var r = n.getValue(),
    l = "";
  return (
    t && (l = jc(t) ? (t.checked ? "true" : "false") : t.value),
    (t = l),
    t !== r ? (n.setValue(t), !0) : !1
  );
}
function Yl(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Pi(t, n) {
  var r = n.checked;
  return ce({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? t._wrapperState.initialChecked,
  });
}
function Ms(t, n) {
  var r = n.defaultValue == null ? "" : n.defaultValue,
    l = n.checked != null ? n.checked : n.defaultChecked;
  (r = ln(n.value != null ? n.value : r)),
    (t._wrapperState = {
      initialChecked: l,
      initialValue: r,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function Cc(t, n) {
  (n = n.checked), n != null && Ca(t, "checked", n, !1);
}
function Di(t, n) {
  Cc(t, n);
  var r = ln(n.value),
    l = n.type;
  if (r != null)
    l === "number"
      ? ((r === 0 && t.value === "") || t.value != r) && (t.value = "" + r)
      : t.value !== "" + r && (t.value = "" + r);
  else if (l === "submit" || l === "reset") {
    t.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? Ri(t, n.type, r)
    : n.hasOwnProperty("defaultValue") && Ri(t, n.type, ln(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (t.defaultChecked = !!n.defaultChecked);
}
function Fs(t, n, r) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var l = n.type;
    if (
      !(
        (l !== "submit" && l !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + t._wrapperState.initialValue),
      r || n === t.value || (t.value = n),
      (t.defaultValue = n);
  }
  (r = t.name),
    r !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    r !== "" && (t.name = r);
}
function Ri(t, n, r) {
  (n !== "number" || Yl(t.ownerDocument) !== t) &&
    (r == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + r && (t.defaultValue = "" + r));
}
var Tr = Array.isArray;
function Zn(t, n, r, l) {
  if (((t = t.options), n)) {
    n = {};
    for (var o = 0; o < r.length; o++) n["$" + r[o]] = !0;
    for (r = 0; r < t.length; r++)
      (o = n.hasOwnProperty("$" + t[r].value)),
        t[r].selected !== o && (t[r].selected = o),
        o && l && (t[r].defaultSelected = !0);
  } else {
    for (r = "" + ln(r), n = null, o = 0; o < t.length; o++) {
      if (t[o].value === r) {
        (t[o].selected = !0), l && (t[o].defaultSelected = !0);
        return;
      }
      n !== null || t[o].disabled || (n = t[o]);
    }
    n !== null && (n.selected = !0);
  }
}
function _i(t, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ce({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function zs(t, n) {
  var r = n.value;
  if (r == null) {
    if (((r = n.children), (n = n.defaultValue), r != null)) {
      if (n != null) throw Error(R(92));
      if (Tr(r)) {
        if (1 < r.length) throw Error(R(93));
        r = r[0];
      }
      n = r;
    }
    n == null && (n = ""), (r = n);
  }
  t._wrapperState = { initialValue: ln(r) };
}
function kc(t, n) {
  var r = ln(n.value),
    l = ln(n.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== t.value && (t.value = r),
    n.defaultValue == null && t.defaultValue !== r && (t.defaultValue = r)),
    l != null && (t.defaultValue = "" + l);
}
function Is(t) {
  var n = t.textContent;
  n === t._wrapperState.initialValue && n !== "" && n !== null && (t.value = n);
}
function Nc(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ti(t, n) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Nc(n)
    : t === "http://www.w3.org/2000/svg" && n === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : t;
}
var El,
  Pc = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, r, l, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(n, r, l, o);
          });
        }
      : t;
  })(function (t, n) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = n;
    else {
      for (
        El = El || document.createElement("div"),
          El.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = El.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; n.firstChild; ) t.appendChild(n.firstChild);
    }
  });
function Qr(t, n) {
  if (n) {
    var r = t.firstChild;
    if (r && r === t.lastChild && r.nodeType === 3) {
      r.nodeValue = n;
      return;
    }
  }
  t.textContent = n;
}
var Fr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  kh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fr).forEach(function (t) {
  kh.forEach(function (n) {
    (n = n + t.charAt(0).toUpperCase() + t.substring(1)), (Fr[n] = Fr[t]);
  });
});
function Dc(t, n, r) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : r || typeof n != "number" || n === 0 || (Fr.hasOwnProperty(t) && Fr[t])
      ? ("" + n).trim()
      : n + "px";
}
function Rc(t, n) {
  t = t.style;
  for (var r in n)
    if (n.hasOwnProperty(r)) {
      var l = r.indexOf("--") === 0,
        o = Dc(r, n[r], l);
      r === "float" && (r = "cssFloat"), l ? t.setProperty(r, o) : (t[r] = o);
    }
}
var Nh = ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Li(t, n) {
  if (n) {
    if (Nh[t] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(R(137, t));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(R(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(R(62));
  }
}
function Mi(t, n) {
  if (t.indexOf("-") === -1) return typeof n.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Fi = null;
function Da(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var zi = null,
  qn = null,
  bn = null;
function Os(t) {
  if ((t = hl(t))) {
    if (typeof zi != "function") throw Error(R(280));
    var n = t.stateNode;
    n && ((n = No(n)), zi(t.stateNode, t.type, n));
  }
}
function _c(t) {
  qn ? (bn ? bn.push(t) : (bn = [t])) : (qn = t);
}
function Tc() {
  if (qn) {
    var t = qn,
      n = bn;
    if (((bn = qn = null), Os(t), n)) for (t = 0; t < n.length; t++) Os(n[t]);
  }
}
function Lc(t, n) {
  return t(n);
}
function Mc() {}
var Xo = !1;
function Fc(t, n, r) {
  if (Xo) return t(n, r);
  Xo = !0;
  try {
    return Lc(t, n, r);
  } finally {
    (Xo = !1), (qn !== null || bn !== null) && (Mc(), Tc());
  }
}
function Jr(t, n) {
  var r = t.stateNode;
  if (r === null) return null;
  var l = No(r);
  if (l === null) return null;
  r = l[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (l = !l.disabled) ||
        ((t = t.type),
        (l = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !l);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (r && typeof r != "function") throw Error(R(231, n, typeof r));
  return r;
}
var Ii = !1;
if (Tt)
  try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
      get: function () {
        Ii = !0;
      },
    }),
      window.addEventListener("test", gr, gr),
      window.removeEventListener("test", gr, gr);
  } catch {
    Ii = !1;
  }
function Ph(t, n, r, l, o, i, a, u, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(r, d);
  } catch (f) {
    this.onError(f);
  }
}
var zr = !1,
  Xl = null,
  Zl = !1,
  Oi = null,
  Dh = {
    onError: function (t) {
      (zr = !0), (Xl = t);
    },
  };
function Rh(t, n, r, l, o, i, a, u, c) {
  (zr = !1), (Xl = null), Ph.apply(Dh, arguments);
}
function _h(t, n, r, l, o, i, a, u, c) {
  if ((Rh.apply(this, arguments), zr)) {
    if (zr) {
      var d = Xl;
      (zr = !1), (Xl = null);
    } else throw Error(R(198));
    Zl || ((Zl = !0), (Oi = d));
  }
}
function _n(t) {
  var n = t,
    r = t;
  if (t.alternate) for (; n.return; ) n = n.return;
  else {
    t = n;
    do (n = t), n.flags & 4098 && (r = n.return), (t = n.return);
    while (t);
  }
  return n.tag === 3 ? r : null;
}
function zc(t) {
  if (t.tag === 13) {
    var n = t.memoizedState;
    if (
      (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Us(t) {
  if (_n(t) !== t) throw Error(R(188));
}
function Th(t) {
  var n = t.alternate;
  if (!n) {
    if (((n = _n(t)), n === null)) throw Error(R(188));
    return n !== t ? null : t;
  }
  for (var r = t, l = n; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((l = o.return), l !== null)) {
        r = l;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return Us(o), t;
        if (i === l) return Us(o), n;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (r.return !== l.return) (r = o), (l = i);
    else {
      for (var a = !1, u = o.child; u; ) {
        if (u === r) {
          (a = !0), (r = o), (l = i);
          break;
        }
        if (u === l) {
          (a = !0), (l = o), (r = i);
          break;
        }
        u = u.sibling;
      }
      if (!a) {
        for (u = i.child; u; ) {
          if (u === r) {
            (a = !0), (r = i), (l = o);
            break;
          }
          if (u === l) {
            (a = !0), (l = i), (r = o);
            break;
          }
          u = u.sibling;
        }
        if (!a) throw Error(R(189));
      }
    }
    if (r.alternate !== l) throw Error(R(190));
  }
  if (r.tag !== 3) throw Error(R(188));
  return r.stateNode.current === r ? t : n;
}
function Ic(t) {
  return (t = Th(t)), t !== null ? Oc(t) : null;
}
function Oc(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var n = Oc(t);
    if (n !== null) return n;
    t = t.sibling;
  }
  return null;
}
var Uc = Xe.unstable_scheduleCallback,
  As = Xe.unstable_cancelCallback,
  Lh = Xe.unstable_shouldYield,
  Mh = Xe.unstable_requestPaint,
  me = Xe.unstable_now,
  Fh = Xe.unstable_getCurrentPriorityLevel,
  Ra = Xe.unstable_ImmediatePriority,
  Ac = Xe.unstable_UserBlockingPriority,
  ql = Xe.unstable_NormalPriority,
  zh = Xe.unstable_LowPriority,
  $c = Xe.unstable_IdlePriority,
  jo = null,
  Et = null;
function Ih(t) {
  if (Et && typeof Et.onCommitFiberRoot == "function")
    try {
      Et.onCommitFiberRoot(jo, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Ah,
  Oh = Math.log,
  Uh = Math.LN2;
function Ah(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Oh(t) / Uh) | 0)) | 0;
}
var Cl = 64,
  kl = 4194304;
function Lr(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function bl(t, n) {
  var r = t.pendingLanes;
  if (r === 0) return 0;
  var l = 0,
    o = t.suspendedLanes,
    i = t.pingedLanes,
    a = r & 268435455;
  if (a !== 0) {
    var u = a & ~o;
    u !== 0 ? (l = Lr(u)) : ((i &= a), i !== 0 && (l = Lr(i)));
  } else (a = r & ~o), a !== 0 ? (l = Lr(a)) : i !== 0 && (l = Lr(i));
  if (l === 0) return 0;
  if (
    n !== 0 &&
    n !== l &&
    !(n & o) &&
    ((o = l & -l), (i = n & -n), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((l & 4 && (l |= r & 16), (n = t.entangledLanes), n !== 0))
    for (t = t.entanglements, n &= l; 0 < n; )
      (r = 31 - mt(n)), (o = 1 << r), (l |= t[r]), (n &= ~o);
  return l;
}
function $h(t, n) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Bh(t, n) {
  for (
    var r = t.suspendedLanes,
      l = t.pingedLanes,
      o = t.expirationTimes,
      i = t.pendingLanes;
    0 < i;

  ) {
    var a = 31 - mt(i),
      u = 1 << a,
      c = o[a];
    c === -1
      ? (!(u & r) || u & l) && (o[a] = $h(u, n))
      : c <= n && (t.expiredLanes |= u),
      (i &= ~u);
  }
}
function Ui(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function Bc() {
  var t = Cl;
  return (Cl <<= 1), !(Cl & 4194240) && (Cl = 64), t;
}
function Zo(t) {
  for (var n = [], r = 0; 31 > r; r++) n.push(t);
  return n;
}
function dl(t, n, r) {
  (t.pendingLanes |= n),
    n !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (n = 31 - mt(n)),
    (t[n] = r);
}
function Hh(t, n) {
  var r = t.pendingLanes & ~n;
  (t.pendingLanes = n),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= n),
    (t.mutableReadLanes &= n),
    (t.entangledLanes &= n),
    (n = t.entanglements);
  var l = t.eventTimes;
  for (t = t.expirationTimes; 0 < r; ) {
    var o = 31 - mt(r),
      i = 1 << o;
    (n[o] = 0), (l[o] = -1), (t[o] = -1), (r &= ~i);
  }
}
function _a(t, n) {
  var r = (t.entangledLanes |= n);
  for (t = t.entanglements; r; ) {
    var l = 31 - mt(r),
      o = 1 << l;
    (o & n) | (t[l] & n) && (t[l] |= n), (r &= ~o);
  }
}
var Z = 0;
function Hc(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vc,
  Ta,
  Wc,
  Qc,
  Jc,
  Ai = !1,
  Nl = [],
  Xt = null,
  Zt = null,
  qt = null,
  Kr = new Map(),
  Gr = new Map(),
  Jt = [],
  Vh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function $s(t, n) {
  switch (t) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Zt = null;
      break;
    case "mouseover":
    case "mouseout":
      qt = null;
      break;
    case "pointerover":
    case "pointerout":
      Kr.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gr.delete(n.pointerId);
  }
}
function xr(t, n, r, l, o, i) {
  return t === null || t.nativeEvent !== i
    ? ((t = {
        blockedOn: n,
        domEventName: r,
        eventSystemFlags: l,
        nativeEvent: i,
        targetContainers: [o],
      }),
      n !== null && ((n = hl(n)), n !== null && Ta(n)),
      t)
    : ((t.eventSystemFlags |= l),
      (n = t.targetContainers),
      o !== null && n.indexOf(o) === -1 && n.push(o),
      t);
}
function Wh(t, n, r, l, o) {
  switch (n) {
    case "focusin":
      return (Xt = xr(Xt, t, n, r, l, o)), !0;
    case "dragenter":
      return (Zt = xr(Zt, t, n, r, l, o)), !0;
    case "mouseover":
      return (qt = xr(qt, t, n, r, l, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Kr.set(i, xr(Kr.get(i) || null, t, n, r, l, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Gr.set(i, xr(Gr.get(i) || null, t, n, r, l, o)), !0
      );
  }
  return !1;
}
function Kc(t) {
  var n = mn(t.target);
  if (n !== null) {
    var r = _n(n);
    if (r !== null) {
      if (((n = r.tag), n === 13)) {
        if (((n = zc(r)), n !== null)) {
          (t.blockedOn = n),
            Jc(t.priority, function () {
              Wc(r);
            });
          return;
        }
      } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Al(t) {
  if (t.blockedOn !== null) return !1;
  for (var n = t.targetContainers; 0 < n.length; ) {
    var r = $i(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
    if (r === null) {
      r = t.nativeEvent;
      var l = new r.constructor(r.type, r);
      (Fi = l), r.target.dispatchEvent(l), (Fi = null);
    } else return (n = hl(r)), n !== null && Ta(n), (t.blockedOn = r), !1;
    n.shift();
  }
  return !0;
}
function Bs(t, n, r) {
  Al(t) && r.delete(n);
}
function Qh() {
  (Ai = !1),
    Xt !== null && Al(Xt) && (Xt = null),
    Zt !== null && Al(Zt) && (Zt = null),
    qt !== null && Al(qt) && (qt = null),
    Kr.forEach(Bs),
    Gr.forEach(Bs);
}
function wr(t, n) {
  t.blockedOn === n &&
    ((t.blockedOn = null),
    Ai ||
      ((Ai = !0),
      Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Qh)));
}
function Yr(t) {
  function n(o) {
    return wr(o, t);
  }
  if (0 < Nl.length) {
    wr(Nl[0], t);
    for (var r = 1; r < Nl.length; r++) {
      var l = Nl[r];
      l.blockedOn === t && (l.blockedOn = null);
    }
  }
  for (
    Xt !== null && wr(Xt, t),
      Zt !== null && wr(Zt, t),
      qt !== null && wr(qt, t),
      Kr.forEach(n),
      Gr.forEach(n),
      r = 0;
    r < Jt.length;
    r++
  )
    (l = Jt[r]), l.blockedOn === t && (l.blockedOn = null);
  for (; 0 < Jt.length && ((r = Jt[0]), r.blockedOn === null); )
    Kc(r), r.blockedOn === null && Jt.shift();
}
var er = zt.ReactCurrentBatchConfig,
  eo = !0;
function Jh(t, n, r, l) {
  var o = Z,
    i = er.transition;
  er.transition = null;
  try {
    (Z = 1), La(t, n, r, l);
  } finally {
    (Z = o), (er.transition = i);
  }
}
function Kh(t, n, r, l) {
  var o = Z,
    i = er.transition;
  er.transition = null;
  try {
    (Z = 4), La(t, n, r, l);
  } finally {
    (Z = o), (er.transition = i);
  }
}
function La(t, n, r, l) {
  if (eo) {
    var o = $i(t, n, r, l);
    if (o === null) ai(t, n, l, to, r), $s(t, l);
    else if (Wh(o, t, n, r, l)) l.stopPropagation();
    else if (($s(t, l), n & 4 && -1 < Vh.indexOf(t))) {
      for (; o !== null; ) {
        var i = hl(o);
        if (
          (i !== null && Vc(i),
          (i = $i(t, n, r, l)),
          i === null && ai(t, n, l, to, r),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && l.stopPropagation();
    } else ai(t, n, l, null, r);
  }
}
var to = null;
function $i(t, n, r, l) {
  if (((to = null), (t = Da(l)), (t = mn(t)), t !== null))
    if (((n = _n(t)), n === null)) t = null;
    else if (((r = n.tag), r === 13)) {
      if (((t = zc(n)), t !== null)) return t;
      t = null;
    } else if (r === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      t = null;
    } else n !== t && (t = null);
  return (to = t), null;
}
function Gc(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Fh()) {
        case Ra:
          return 1;
        case Ac:
          return 4;
        case ql:
        case zh:
          return 16;
        case $c:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gt = null,
  Ma = null,
  $l = null;
function Yc() {
  if ($l) return $l;
  var t,
    n = Ma,
    r = n.length,
    l,
    o = "value" in Gt ? Gt.value : Gt.textContent,
    i = o.length;
  for (t = 0; t < r && n[t] === o[t]; t++);
  var a = r - t;
  for (l = 1; l <= a && n[r - l] === o[i - l]; l++);
  return ($l = o.slice(t, 1 < l ? 1 - l : void 0));
}
function Bl(t) {
  var n = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
      : (t = n),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Pl() {
  return !0;
}
function Hs() {
  return !1;
}
function qe(t) {
  function n(r, l, o, i, a) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = l),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var u in t)
      t.hasOwnProperty(u) && ((r = t[u]), (this[u] = r ? r(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Pl
        : Hs),
      (this.isPropagationStopped = Hs),
      this
    );
  }
  return (
    ce(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Pl));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Pl));
      },
      persist: function () {},
      isPersistent: Pl,
    }),
    n
  );
}
var dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fa = qe(dr),
  fl = ce({}, dr, { view: 0, detail: 0 }),
  Gh = qe(fl),
  qo,
  bo,
  Sr,
  Eo = ce({}, fl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: za,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== Sr &&
            (Sr && t.type === "mousemove"
              ? ((qo = t.screenX - Sr.screenX), (bo = t.screenY - Sr.screenY))
              : (bo = qo = 0),
            (Sr = t)),
          qo);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : bo;
    },
  }),
  Vs = qe(Eo),
  Yh = ce({}, Eo, { dataTransfer: 0 }),
  Xh = qe(Yh),
  Zh = ce({}, fl, { relatedTarget: 0 }),
  ei = qe(Zh),
  qh = ce({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bh = qe(qh),
  ep = ce({}, dr, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  tp = qe(ep),
  np = ce({}, dr, { data: 0 }),
  Ws = qe(np),
  rp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  lp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  op = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ip(t) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(t) : (t = op[t]) ? !!n[t] : !1;
}
function za() {
  return ip;
}
var ap = ce({}, fl, {
    key: function (t) {
      if (t.key) {
        var n = rp[t.key] || t.key;
        if (n !== "Unidentified") return n;
      }
      return t.type === "keypress"
        ? ((t = Bl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
          ? lp[t.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: za,
    charCode: function (t) {
      return t.type === "keypress" ? Bl(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Bl(t)
        : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
    },
  }),
  sp = qe(ap),
  up = ce({}, Eo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Qs = qe(up),
  cp = ce({}, fl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: za,
  }),
  dp = qe(cp),
  fp = ce({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hp = qe(fp),
  pp = ce({}, Eo, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  mp = qe(pp),
  yp = [9, 13, 27, 32],
  Ia = Tt && "CompositionEvent" in window,
  Ir = null;
Tt && "documentMode" in document && (Ir = document.documentMode);
var vp = Tt && "TextEvent" in window && !Ir,
  Xc = Tt && (!Ia || (Ir && 8 < Ir && 11 >= Ir)),
  Js = " ",
  Ks = !1;
function Zc(t, n) {
  switch (t) {
    case "keyup":
      return yp.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qc(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var An = !1;
function gp(t, n) {
  switch (t) {
    case "compositionend":
      return qc(n);
    case "keypress":
      return n.which !== 32 ? null : ((Ks = !0), Js);
    case "textInput":
      return (t = n.data), t === Js && Ks ? null : t;
    default:
      return null;
  }
}
function xp(t, n) {
  if (An)
    return t === "compositionend" || (!Ia && Zc(t, n))
      ? ((t = Yc()), ($l = Ma = Gt = null), (An = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Xc && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var wp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Gs(t) {
  var n = t && t.nodeName && t.nodeName.toLowerCase();
  return n === "input" ? !!wp[t.type] : n === "textarea";
}
function bc(t, n, r, l) {
  _c(l),
    (n = no(n, "onChange")),
    0 < n.length &&
      ((r = new Fa("onChange", "change", null, r, l)),
      t.push({ event: r, listeners: n }));
}
var Or = null,
  Xr = null;
function Sp(t) {
  cd(t, 0);
}
function Co(t) {
  var n = Hn(t);
  if (Ec(n)) return t;
}
function jp(t, n) {
  if (t === "change") return n;
}
var ed = !1;
if (Tt) {
  var ti;
  if (Tt) {
    var ni = "oninput" in document;
    if (!ni) {
      var Ys = document.createElement("div");
      Ys.setAttribute("oninput", "return;"),
        (ni = typeof Ys.oninput == "function");
    }
    ti = ni;
  } else ti = !1;
  ed = ti && (!document.documentMode || 9 < document.documentMode);
}
function Xs() {
  Or && (Or.detachEvent("onpropertychange", td), (Xr = Or = null));
}
function td(t) {
  if (t.propertyName === "value" && Co(Xr)) {
    var n = [];
    bc(n, Xr, t, Da(t)), Fc(Sp, n);
  }
}
function Ep(t, n, r) {
  t === "focusin"
    ? (Xs(), (Or = n), (Xr = r), Or.attachEvent("onpropertychange", td))
    : t === "focusout" && Xs();
}
function Cp(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Co(Xr);
}
function kp(t, n) {
  if (t === "click") return Co(n);
}
function Np(t, n) {
  if (t === "input" || t === "change") return Co(n);
}
function Pp(t, n) {
  return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
}
var vt = typeof Object.is == "function" ? Object.is : Pp;
function Zr(t, n) {
  if (vt(t, n)) return !0;
  if (typeof t != "object" || t === null || typeof n != "object" || n === null)
    return !1;
  var r = Object.keys(t),
    l = Object.keys(n);
  if (r.length !== l.length) return !1;
  for (l = 0; l < r.length; l++) {
    var o = r[l];
    if (!ji.call(n, o) || !vt(t[o], n[o])) return !1;
  }
  return !0;
}
function Zs(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function qs(t, n) {
  var r = Zs(t);
  t = 0;
  for (var l; r; ) {
    if (r.nodeType === 3) {
      if (((l = t + r.textContent.length), t <= n && l >= n))
        return { node: r, offset: n - t };
      t = l;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Zs(r);
  }
}
function nd(t, n) {
  return t && n
    ? t === n
      ? !0
      : t && t.nodeType === 3
        ? !1
        : n && n.nodeType === 3
          ? nd(t, n.parentNode)
          : "contains" in t
            ? t.contains(n)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(n) & 16)
              : !1
    : !1;
}
function rd() {
  for (var t = window, n = Yl(); n instanceof t.HTMLIFrameElement; ) {
    try {
      var r = typeof n.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) t = n.contentWindow;
    else break;
    n = Yl(t.document);
  }
  return n;
}
function Oa(t) {
  var n = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      n === "textarea" ||
      t.contentEditable === "true")
  );
}
function Dp(t) {
  var n = rd(),
    r = t.focusedElem,
    l = t.selectionRange;
  if (
    n !== r &&
    r &&
    r.ownerDocument &&
    nd(r.ownerDocument.documentElement, r)
  ) {
    if (l !== null && Oa(r)) {
      if (
        ((n = l.start),
        (t = l.end),
        t === void 0 && (t = n),
        "selectionStart" in r)
      )
        (r.selectionStart = n), (r.selectionEnd = Math.min(t, r.value.length));
      else if (
        ((t = ((n = r.ownerDocument || document) && n.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var o = r.textContent.length,
          i = Math.min(l.start, o);
        (l = l.end === void 0 ? i : Math.min(l.end, o)),
          !t.extend && i > l && ((o = l), (l = i), (i = o)),
          (o = qs(r, i));
        var a = qs(r, l);
        o &&
          a &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== o.node ||
            t.anchorOffset !== o.offset ||
            t.focusNode !== a.node ||
            t.focusOffset !== a.offset) &&
          ((n = n.createRange()),
          n.setStart(o.node, o.offset),
          t.removeAllRanges(),
          i > l
            ? (t.addRange(n), t.extend(a.node, a.offset))
            : (n.setEnd(a.node, a.offset), t.addRange(n)));
      }
    }
    for (n = [], t = r; (t = t.parentNode); )
      t.nodeType === 1 &&
        n.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < n.length; r++)
      (t = n[r]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var Rp = Tt && "documentMode" in document && 11 >= document.documentMode,
  $n = null,
  Bi = null,
  Ur = null,
  Hi = !1;
function bs(t, n, r) {
  var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Hi ||
    $n == null ||
    $n !== Yl(l) ||
    ((l = $n),
    "selectionStart" in l && Oa(l)
      ? (l = { start: l.selectionStart, end: l.selectionEnd })
      : ((l = (
          (l.ownerDocument && l.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (l = {
          anchorNode: l.anchorNode,
          anchorOffset: l.anchorOffset,
          focusNode: l.focusNode,
          focusOffset: l.focusOffset,
        })),
    (Ur && Zr(Ur, l)) ||
      ((Ur = l),
      (l = no(Bi, "onSelect")),
      0 < l.length &&
        ((n = new Fa("onSelect", "select", null, n, r)),
        t.push({ event: n, listeners: l }),
        (n.target = $n))));
}
function Dl(t, n) {
  var r = {};
  return (
    (r[t.toLowerCase()] = n.toLowerCase()),
    (r["Webkit" + t] = "webkit" + n),
    (r["Moz" + t] = "moz" + n),
    r
  );
}
var Bn = {
    animationend: Dl("Animation", "AnimationEnd"),
    animationiteration: Dl("Animation", "AnimationIteration"),
    animationstart: Dl("Animation", "AnimationStart"),
    transitionend: Dl("Transition", "TransitionEnd"),
  },
  ri = {},
  ld = {};
Tt &&
  ((ld = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bn.animationend.animation,
    delete Bn.animationiteration.animation,
    delete Bn.animationstart.animation),
  "TransitionEvent" in window || delete Bn.transitionend.transition);
function ko(t) {
  if (ri[t]) return ri[t];
  if (!Bn[t]) return t;
  var n = Bn[t],
    r;
  for (r in n) if (n.hasOwnProperty(r) && r in ld) return (ri[t] = n[r]);
  return t;
}
var od = ko("animationend"),
  id = ko("animationiteration"),
  ad = ko("animationstart"),
  sd = ko("transitionend"),
  ud = new Map(),
  eu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function an(t, n) {
  ud.set(t, n), Rn(n, [t]);
}
for (var li = 0; li < eu.length; li++) {
  var oi = eu[li],
    _p = oi.toLowerCase(),
    Tp = oi[0].toUpperCase() + oi.slice(1);
  an(_p, "on" + Tp);
}
an(od, "onAnimationEnd");
an(id, "onAnimationIteration");
an(ad, "onAnimationStart");
an("dblclick", "onDoubleClick");
an("focusin", "onFocus");
an("focusout", "onBlur");
an(sd, "onTransitionEnd");
rr("onMouseEnter", ["mouseout", "mouseover"]);
rr("onMouseLeave", ["mouseout", "mouseover"]);
rr("onPointerEnter", ["pointerout", "pointerover"]);
rr("onPointerLeave", ["pointerout", "pointerover"]);
Rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Mr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Lp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));
function tu(t, n, r) {
  var l = t.type || "unknown-event";
  (t.currentTarget = r), _h(l, n, void 0, t), (t.currentTarget = null);
}
function cd(t, n) {
  n = (n & 4) !== 0;
  for (var r = 0; r < t.length; r++) {
    var l = t[r],
      o = l.event;
    l = l.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var a = l.length - 1; 0 <= a; a--) {
          var u = l[a],
            c = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), c !== i && o.isPropagationStopped())) break e;
          tu(o, u, d), (i = c);
        }
      else
        for (a = 0; a < l.length; a++) {
          if (
            ((u = l[a]),
            (c = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            c !== i && o.isPropagationStopped())
          )
            break e;
          tu(o, u, d), (i = c);
        }
    }
  }
  if (Zl) throw ((t = Oi), (Zl = !1), (Oi = null), t);
}
function re(t, n) {
  var r = n[Ki];
  r === void 0 && (r = n[Ki] = new Set());
  var l = t + "__bubble";
  r.has(l) || (dd(n, t, 2, !1), r.add(l));
}
function ii(t, n, r) {
  var l = 0;
  n && (l |= 4), dd(r, t, l, n);
}
var Rl = "_reactListening" + Math.random().toString(36).slice(2);
function qr(t) {
  if (!t[Rl]) {
    (t[Rl] = !0),
      gc.forEach(function (r) {
        r !== "selectionchange" && (Lp.has(r) || ii(r, !1, t), ii(r, !0, t));
      });
    var n = t.nodeType === 9 ? t : t.ownerDocument;
    n === null || n[Rl] || ((n[Rl] = !0), ii("selectionchange", !1, n));
  }
}
function dd(t, n, r, l) {
  switch (Gc(n)) {
    case 1:
      var o = Jh;
      break;
    case 4:
      o = Kh;
      break;
    default:
      o = La;
  }
  (r = o.bind(null, n, r, t)),
    (o = void 0),
    !Ii ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (o = !0),
    l
      ? o !== void 0
        ? t.addEventListener(n, r, { capture: !0, passive: o })
        : t.addEventListener(n, r, !0)
      : o !== void 0
        ? t.addEventListener(n, r, { passive: o })
        : t.addEventListener(n, r, !1);
}
function ai(t, n, r, l, o) {
  var i = l;
  if (!(n & 1) && !(n & 2) && l !== null)
    e: for (;;) {
      if (l === null) return;
      var a = l.tag;
      if (a === 3 || a === 4) {
        var u = l.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (a === 4)
          for (a = l.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; u !== null; ) {
          if (((a = mn(u)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            l = i = a;
            continue e;
          }
          u = u.parentNode;
        }
      }
      l = l.return;
    }
  Fc(function () {
    var d = i,
      f = Da(r),
      m = [];
    e: {
      var v = ud.get(t);
      if (v !== void 0) {
        var k = Fa,
          E = t;
        switch (t) {
          case "keypress":
            if (Bl(r) === 0) break e;
          case "keydown":
          case "keyup":
            k = sp;
            break;
          case "focusin":
            (E = "focus"), (k = ei);
            break;
          case "focusout":
            (E = "blur"), (k = ei);
            break;
          case "beforeblur":
          case "afterblur":
            k = ei;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Vs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Xh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = dp;
            break;
          case od:
          case id:
          case ad:
            k = bh;
            break;
          case sd:
            k = hp;
            break;
          case "scroll":
            k = Gh;
            break;
          case "wheel":
            k = mp;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = tp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Qs;
        }
        var j = (n & 4) !== 0,
          P = !j && t === "scroll",
          p = j ? (v !== null ? v + "Capture" : null) : v;
        j = [];
        for (var h = d, y; h !== null; ) {
          y = h;
          var N = y.stateNode;
          if (
            (y.tag === 5 &&
              N !== null &&
              ((y = N),
              p !== null && ((N = Jr(h, p)), N != null && j.push(br(h, N, y)))),
            P)
          )
            break;
          h = h.return;
        }
        0 < j.length &&
          ((v = new k(v, E, null, r, f)), m.push({ event: v, listeners: j }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((v = t === "mouseover" || t === "pointerover"),
          (k = t === "mouseout" || t === "pointerout"),
          v &&
            r !== Fi &&
            (E = r.relatedTarget || r.fromElement) &&
            (mn(E) || E[Lt]))
        )
          break e;
        if (
          (k || v) &&
          ((v =
            f.window === f
              ? f
              : (v = f.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
          k
            ? ((E = r.relatedTarget || r.toElement),
              (k = d),
              (E = E ? mn(E) : null),
              E !== null &&
                ((P = _n(E)), E !== P || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((k = null), (E = d)),
          k !== E)
        ) {
          if (
            ((j = Vs),
            (N = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((j = Qs),
              (N = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (P = k == null ? v : Hn(k)),
            (y = E == null ? v : Hn(E)),
            (v = new j(N, h + "leave", k, r, f)),
            (v.target = P),
            (v.relatedTarget = y),
            (N = null),
            mn(f) === d &&
              ((j = new j(p, h + "enter", E, r, f)),
              (j.target = y),
              (j.relatedTarget = P),
              (N = j)),
            (P = N),
            k && E)
          )
            t: {
              for (j = k, p = E, h = 0, y = j; y; y = In(y)) h++;
              for (y = 0, N = p; N; N = In(N)) y++;
              for (; 0 < h - y; ) (j = In(j)), h--;
              for (; 0 < y - h; ) (p = In(p)), y--;
              for (; h--; ) {
                if (j === p || (p !== null && j === p.alternate)) break t;
                (j = In(j)), (p = In(p));
              }
              j = null;
            }
          else j = null;
          k !== null && nu(m, v, k, j, !1),
            E !== null && P !== null && nu(m, P, E, j, !0);
        }
      }
      e: {
        if (
          ((v = d ? Hn(d) : window),
          (k = v.nodeName && v.nodeName.toLowerCase()),
          k === "select" || (k === "input" && v.type === "file"))
        )
          var _ = jp;
        else if (Gs(v))
          if (ed) _ = Np;
          else {
            _ = Cp;
            var g = Ep;
          }
        else
          (k = v.nodeName) &&
            k.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (_ = kp);
        if (_ && (_ = _(t, d))) {
          bc(m, _, r, f);
          break e;
        }
        g && g(t, v, d),
          t === "focusout" &&
            (g = v._wrapperState) &&
            g.controlled &&
            v.type === "number" &&
            Ri(v, "number", v.value);
      }
      switch (((g = d ? Hn(d) : window), t)) {
        case "focusin":
          (Gs(g) || g.contentEditable === "true") &&
            (($n = g), (Bi = d), (Ur = null));
          break;
        case "focusout":
          Ur = Bi = $n = null;
          break;
        case "mousedown":
          Hi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Hi = !1), bs(m, r, f);
          break;
        case "selectionchange":
          if (Rp) break;
        case "keydown":
        case "keyup":
          bs(m, r, f);
      }
      var D;
      if (Ia)
        e: {
          switch (t) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        An
          ? Zc(t, r) && (T = "onCompositionEnd")
          : t === "keydown" && r.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Xc &&
          r.locale !== "ko" &&
          (An || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && An && (D = Yc())
            : ((Gt = f),
              (Ma = "value" in Gt ? Gt.value : Gt.textContent),
              (An = !0))),
        (g = no(d, T)),
        0 < g.length &&
          ((T = new Ws(T, t, null, r, f)),
          m.push({ event: T, listeners: g }),
          D ? (T.data = D) : ((D = qc(r)), D !== null && (T.data = D)))),
        (D = vp ? gp(t, r) : xp(t, r)) &&
          ((d = no(d, "onBeforeInput")),
          0 < d.length &&
            ((f = new Ws("onBeforeInput", "beforeinput", null, r, f)),
            m.push({ event: f, listeners: d }),
            (f.data = D)));
    }
    cd(m, n);
  });
}
function br(t, n, r) {
  return { instance: t, listener: n, currentTarget: r };
}
function no(t, n) {
  for (var r = n + "Capture", l = []; t !== null; ) {
    var o = t,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Jr(t, r)),
      i != null && l.unshift(br(t, i, o)),
      (i = Jr(t, n)),
      i != null && l.push(br(t, i, o))),
      (t = t.return);
  }
  return l;
}
function In(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function nu(t, n, r, l, o) {
  for (var i = n._reactName, a = []; r !== null && r !== l; ) {
    var u = r,
      c = u.alternate,
      d = u.stateNode;
    if (c !== null && c === l) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      o
        ? ((c = Jr(r, i)), c != null && a.unshift(br(r, c, u)))
        : o || ((c = Jr(r, i)), c != null && a.push(br(r, c, u)))),
      (r = r.return);
  }
  a.length !== 0 && t.push({ event: n, listeners: a });
}
var Mp = /\r\n?/g,
  Fp = /\u0000|\uFFFD/g;
function ru(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      Mp,
      `
`,
    )
    .replace(Fp, "");
}
function _l(t, n, r) {
  if (((n = ru(n)), ru(t) !== n && r)) throw Error(R(425));
}
function ro() {}
var Vi = null,
  Wi = null;
function Qi(t, n) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var Ji = typeof setTimeout == "function" ? setTimeout : void 0,
  zp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  lu = typeof Promise == "function" ? Promise : void 0,
  Ip =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof lu < "u"
        ? function (t) {
            return lu.resolve(null).then(t).catch(Op);
          }
        : Ji;
function Op(t) {
  setTimeout(function () {
    throw t;
  });
}
function si(t, n) {
  var r = n,
    l = 0;
  do {
    var o = r.nextSibling;
    if ((t.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (l === 0) {
          t.removeChild(o), Yr(n);
          return;
        }
        l--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || l++;
    r = o;
  } while (r);
  Yr(n);
}
function bt(t) {
  for (; t != null; t = t.nextSibling) {
    var n = t.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = t.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return t;
}
function ou(t) {
  t = t.previousSibling;
  for (var n = 0; t; ) {
    if (t.nodeType === 8) {
      var r = t.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (n === 0) return t;
        n--;
      } else r === "/$" && n++;
    }
    t = t.previousSibling;
  }
  return null;
}
var fr = Math.random().toString(36).slice(2),
  jt = "__reactFiber$" + fr,
  el = "__reactProps$" + fr,
  Lt = "__reactContainer$" + fr,
  Ki = "__reactEvents$" + fr,
  Up = "__reactListeners$" + fr,
  Ap = "__reactHandles$" + fr;
function mn(t) {
  var n = t[jt];
  if (n) return n;
  for (var r = t.parentNode; r; ) {
    if ((n = r[Lt] || r[jt])) {
      if (
        ((r = n.alternate),
        n.child !== null || (r !== null && r.child !== null))
      )
        for (t = ou(t); t !== null; ) {
          if ((r = t[jt])) return r;
          t = ou(t);
        }
      return n;
    }
    (t = r), (r = t.parentNode);
  }
  return null;
}
function hl(t) {
  return (
    (t = t[jt] || t[Lt]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Hn(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(R(33));
}
function No(t) {
  return t[el] || null;
}
var Gi = [],
  Vn = -1;
function sn(t) {
  return { current: t };
}
function le(t) {
  0 > Vn || ((t.current = Gi[Vn]), (Gi[Vn] = null), Vn--);
}
function te(t, n) {
  Vn++, (Gi[Vn] = t.current), (t.current = n);
}
var on = {},
  ze = sn(on),
  Ve = sn(!1),
  jn = on;
function lr(t, n) {
  var r = t.type.contextTypes;
  if (!r) return on;
  var l = t.stateNode;
  if (l && l.__reactInternalMemoizedUnmaskedChildContext === n)
    return l.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = n[i];
  return (
    l &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = n),
      (t.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function We(t) {
  return (t = t.childContextTypes), t != null;
}
function lo() {
  le(Ve), le(ze);
}
function iu(t, n, r) {
  if (ze.current !== on) throw Error(R(168));
  te(ze, n), te(Ve, r);
}
function fd(t, n, r) {
  var l = t.stateNode;
  if (((n = n.childContextTypes), typeof l.getChildContext != "function"))
    return r;
  l = l.getChildContext();
  for (var o in l) if (!(o in n)) throw Error(R(108, Eh(t) || "Unknown", o));
  return ce({}, r, l);
}
function oo(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || on),
    (jn = ze.current),
    te(ze, t),
    te(Ve, Ve.current),
    !0
  );
}
function au(t, n, r) {
  var l = t.stateNode;
  if (!l) throw Error(R(169));
  r
    ? ((t = fd(t, n, jn)),
      (l.__reactInternalMemoizedMergedChildContext = t),
      le(Ve),
      le(ze),
      te(ze, t))
    : le(Ve),
    te(Ve, r);
}
var Nt = null,
  Po = !1,
  ui = !1;
function hd(t) {
  Nt === null ? (Nt = [t]) : Nt.push(t);
}
function $p(t) {
  (Po = !0), hd(t);
}
function un() {
  if (!ui && Nt !== null) {
    ui = !0;
    var t = 0,
      n = Z;
    try {
      var r = Nt;
      for (Z = 1; t < r.length; t++) {
        var l = r[t];
        do l = l(!0);
        while (l !== null);
      }
      (Nt = null), (Po = !1);
    } catch (o) {
      throw (Nt !== null && (Nt = Nt.slice(t + 1)), Uc(Ra, un), o);
    } finally {
      (Z = n), (ui = !1);
    }
  }
  return null;
}
var Wn = [],
  Qn = 0,
  io = null,
  ao = 0,
  nt = [],
  rt = 0,
  En = null,
  Pt = 1,
  Dt = "";
function hn(t, n) {
  (Wn[Qn++] = ao), (Wn[Qn++] = io), (io = t), (ao = n);
}
function pd(t, n, r) {
  (nt[rt++] = Pt), (nt[rt++] = Dt), (nt[rt++] = En), (En = t);
  var l = Pt;
  t = Dt;
  var o = 32 - mt(l) - 1;
  (l &= ~(1 << o)), (r += 1);
  var i = 32 - mt(n) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (l & ((1 << a) - 1)).toString(32)),
      (l >>= a),
      (o -= a),
      (Pt = (1 << (32 - mt(n) + o)) | (r << o) | l),
      (Dt = i + t);
  } else (Pt = (1 << i) | (r << o) | l), (Dt = t);
}
function Ua(t) {
  t.return !== null && (hn(t, 1), pd(t, 1, 0));
}
function Aa(t) {
  for (; t === io; )
    (io = Wn[--Qn]), (Wn[Qn] = null), (ao = Wn[--Qn]), (Wn[Qn] = null);
  for (; t === En; )
    (En = nt[--rt]),
      (nt[rt] = null),
      (Dt = nt[--rt]),
      (nt[rt] = null),
      (Pt = nt[--rt]),
      (nt[rt] = null);
}
var Ye = null,
  Ge = null,
  ae = !1,
  pt = null;
function md(t, n) {
  var r = lt(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = n),
    (r.return = t),
    (n = t.deletions),
    n === null ? ((t.deletions = [r]), (t.flags |= 16)) : n.push(r);
}
function su(t, n) {
  switch (t.tag) {
    case 5:
      var r = t.type;
      return (
        (n =
          n.nodeType !== 1 || r.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((t.stateNode = n), (Ye = t), (Ge = bt(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = t.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((t.stateNode = n), (Ye = t), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((r = En !== null ? { id: Pt, overflow: Dt } : null),
            (t.memoizedState = {
              dehydrated: n,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = lt(18, null, null, 0)),
            (r.stateNode = n),
            (r.return = t),
            (t.child = r),
            (Ye = t),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yi(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Xi(t) {
  if (ae) {
    var n = Ge;
    if (n) {
      var r = n;
      if (!su(t, n)) {
        if (Yi(t)) throw Error(R(418));
        n = bt(r.nextSibling);
        var l = Ye;
        n && su(t, n)
          ? md(l, r)
          : ((t.flags = (t.flags & -4097) | 2), (ae = !1), (Ye = t));
      }
    } else {
      if (Yi(t)) throw Error(R(418));
      (t.flags = (t.flags & -4097) | 2), (ae = !1), (Ye = t);
    }
  }
}
function uu(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Ye = t;
}
function Tl(t) {
  if (t !== Ye) return !1;
  if (!ae) return uu(t), (ae = !0), !1;
  var n;
  if (
    ((n = t.tag !== 3) &&
      !(n = t.tag !== 5) &&
      ((n = t.type),
      (n = n !== "head" && n !== "body" && !Qi(t.type, t.memoizedProps))),
    n && (n = Ge))
  ) {
    if (Yi(t)) throw (yd(), Error(R(418)));
    for (; n; ) md(t, n), (n = bt(n.nextSibling));
  }
  if ((uu(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(R(317));
    e: {
      for (t = t.nextSibling, n = 0; t; ) {
        if (t.nodeType === 8) {
          var r = t.data;
          if (r === "/$") {
            if (n === 0) {
              Ge = bt(t.nextSibling);
              break e;
            }
            n--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || n++;
        }
        t = t.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Ye ? bt(t.stateNode.nextSibling) : null;
  return !0;
}
function yd() {
  for (var t = Ge; t; ) t = bt(t.nextSibling);
}
function or() {
  (Ge = Ye = null), (ae = !1);
}
function $a(t) {
  pt === null ? (pt = [t]) : pt.push(t);
}
var Bp = zt.ReactCurrentBatchConfig;
function dt(t, n) {
  if (t && t.defaultProps) {
    (n = ce({}, n)), (t = t.defaultProps);
    for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    return n;
  }
  return n;
}
var so = sn(null),
  uo = null,
  Jn = null,
  Ba = null;
function Ha() {
  Ba = Jn = uo = null;
}
function Va(t) {
  var n = so.current;
  le(so), (t._currentValue = n);
}
function Zi(t, n, r) {
  for (; t !== null; ) {
    var l = t.alternate;
    if (
      ((t.childLanes & n) !== n
        ? ((t.childLanes |= n), l !== null && (l.childLanes |= n))
        : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
      t === r)
    )
      break;
    t = t.return;
  }
}
function tr(t, n) {
  (uo = t),
    (Ba = Jn = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & n && (He = !0), (t.firstContext = null));
}
function it(t) {
  var n = t._currentValue;
  if (Ba !== t)
    if (((t = { context: t, memoizedValue: n, next: null }), Jn === null)) {
      if (uo === null) throw Error(R(308));
      (Jn = t), (uo.dependencies = { lanes: 0, firstContext: t });
    } else Jn = Jn.next = t;
  return n;
}
var yn = null;
function Wa(t) {
  yn === null ? (yn = [t]) : yn.push(t);
}
function vd(t, n, r, l) {
  var o = n.interleaved;
  return (
    o === null ? ((r.next = r), Wa(n)) : ((r.next = o.next), (o.next = r)),
    (n.interleaved = r),
    Mt(t, l)
  );
}
function Mt(t, n) {
  t.lanes |= n;
  var r = t.alternate;
  for (r !== null && (r.lanes |= n), r = t, t = t.return; t !== null; )
    (t.childLanes |= n),
      (r = t.alternate),
      r !== null && (r.childLanes |= n),
      (r = t),
      (t = t.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Qt = !1;
function Qa(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function gd(t, n) {
  (t = t.updateQueue),
    n.updateQueue === t &&
      (n.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Rt(t, n) {
  return {
    eventTime: t,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function en(t, n, r) {
  var l = t.updateQueue;
  if (l === null) return null;
  if (((l = l.shared), G & 2)) {
    var o = l.pending;
    return (
      o === null ? (n.next = n) : ((n.next = o.next), (o.next = n)),
      (l.pending = n),
      Mt(t, r)
    );
  }
  return (
    (o = l.interleaved),
    o === null ? ((n.next = n), Wa(l)) : ((n.next = o.next), (o.next = n)),
    (l.interleaved = n),
    Mt(t, r)
  );
}
function Hl(t, n, r) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (r & 4194240) !== 0))
  ) {
    var l = n.lanes;
    (l &= t.pendingLanes), (r |= l), (n.lanes = r), _a(t, r);
  }
}
function cu(t, n) {
  var r = t.updateQueue,
    l = t.alternate;
  if (l !== null && ((l = l.updateQueue), r === l)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = n) : (i = i.next = n);
    } else o = i = n;
    (r = {
      baseState: l.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: l.shared,
      effects: l.effects,
    }),
      (t.updateQueue = r);
    return;
  }
  (t = r.lastBaseUpdate),
    t === null ? (r.firstBaseUpdate = n) : (t.next = n),
    (r.lastBaseUpdate = n);
}
function co(t, n, r, l) {
  var o = t.updateQueue;
  Qt = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var c = u,
      d = c.next;
    (c.next = null), a === null ? (i = d) : (a.next = d), (a = c);
    var f = t.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (u = f.lastBaseUpdate),
      u !== a &&
        (u === null ? (f.firstBaseUpdate = d) : (u.next = d),
        (f.lastBaseUpdate = c)));
  }
  if (i !== null) {
    var m = o.baseState;
    (a = 0), (f = d = c = null), (u = i);
    do {
      var v = u.lane,
        k = u.eventTime;
      if ((l & v) === v) {
        f !== null &&
          (f = f.next =
            {
              eventTime: k,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var E = t,
            j = u;
          switch (((v = n), (k = r), j.tag)) {
            case 1:
              if (((E = j.payload), typeof E == "function")) {
                m = E.call(k, m, v);
                break e;
              }
              m = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = j.payload),
                (v = typeof E == "function" ? E.call(k, m, v) : E),
                v == null)
              )
                break e;
              m = ce({}, m, v);
              break e;
            case 2:
              Qt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((t.flags |= 64),
          (v = o.effects),
          v === null ? (o.effects = [u]) : v.push(u));
      } else
        (k = {
          eventTime: k,
          lane: v,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          f === null ? ((d = f = k), (c = m)) : (f = f.next = k),
          (a |= v);
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (v = u),
          (u = v.next),
          (v.next = null),
          (o.lastBaseUpdate = v),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (c = m),
      (o.baseState = c),
      (o.firstBaseUpdate = d),
      (o.lastBaseUpdate = f),
      (n = o.shared.interleaved),
      n !== null)
    ) {
      o = n;
      do (a |= o.lane), (o = o.next);
      while (o !== n);
    } else i === null && (o.shared.lanes = 0);
    (kn |= a), (t.lanes = a), (t.memoizedState = m);
  }
}
function du(t, n, r) {
  if (((t = n.effects), (n.effects = null), t !== null))
    for (n = 0; n < t.length; n++) {
      var l = t[n],
        o = l.callback;
      if (o !== null) {
        if (((l.callback = null), (l = r), typeof o != "function"))
          throw Error(R(191, o));
        o.call(l);
      }
    }
}
var xd = new vc.Component().refs;
function qi(t, n, r, l) {
  (n = t.memoizedState),
    (r = r(l, n)),
    (r = r == null ? n : ce({}, n, r)),
    (t.memoizedState = r),
    t.lanes === 0 && (t.updateQueue.baseState = r);
}
var Do = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? _n(t) === t : !1;
  },
  enqueueSetState: function (t, n, r) {
    t = t._reactInternals;
    var l = Ue(),
      o = nn(t),
      i = Rt(l, o);
    (i.payload = n),
      r != null && (i.callback = r),
      (n = en(t, i, o)),
      n !== null && (yt(n, t, o, l), Hl(n, t, o));
  },
  enqueueReplaceState: function (t, n, r) {
    t = t._reactInternals;
    var l = Ue(),
      o = nn(t),
      i = Rt(l, o);
    (i.tag = 1),
      (i.payload = n),
      r != null && (i.callback = r),
      (n = en(t, i, o)),
      n !== null && (yt(n, t, o, l), Hl(n, t, o));
  },
  enqueueForceUpdate: function (t, n) {
    t = t._reactInternals;
    var r = Ue(),
      l = nn(t),
      o = Rt(r, l);
    (o.tag = 2),
      n != null && (o.callback = n),
      (n = en(t, o, l)),
      n !== null && (yt(n, t, l, r), Hl(n, t, l));
  },
};
function fu(t, n, r, l, o, i, a) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(l, i, a)
      : n.prototype && n.prototype.isPureReactComponent
        ? !Zr(r, l) || !Zr(o, i)
        : !0
  );
}
function wd(t, n, r) {
  var l = !1,
    o = on,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = it(i))
      : ((o = We(n) ? jn : ze.current),
        (l = n.contextTypes),
        (i = (l = l != null) ? lr(t, o) : on)),
    (n = new n(r, i)),
    (t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = Do),
    (t.stateNode = n),
    (n._reactInternals = t),
    l &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = o),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function hu(t, n, r, l) {
  (t = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(r, l),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(r, l),
    n.state !== t && Do.enqueueReplaceState(n, n.state, null);
}
function bi(t, n, r, l) {
  var o = t.stateNode;
  (o.props = r), (o.state = t.memoizedState), (o.refs = xd), Qa(t);
  var i = n.contextType;
  typeof i == "object" && i !== null
    ? (o.context = it(i))
    : ((i = We(n) ? jn : ze.current), (o.context = lr(t, i))),
    (o.state = t.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && (qi(t, n, i, r), (o.state = t.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((n = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      n !== o.state && Do.enqueueReplaceState(o, o.state, null),
      co(t, r, o, l),
      (o.state = t.memoizedState)),
    typeof o.componentDidMount == "function" && (t.flags |= 4194308);
}
function jr(t, n, r) {
  if (
    ((t = r.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(R(309));
        var l = r.stateNode;
      }
      if (!l) throw Error(R(147, t));
      var o = l,
        i = "" + t;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (a) {
            var u = o.refs;
            u === xd && (u = o.refs = {}),
              a === null ? delete u[i] : (u[i] = a);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof t != "string") throw Error(R(284));
    if (!r._owner) throw Error(R(290, t));
  }
  return t;
}
function Ll(t, n) {
  throw (
    ((t = Object.prototype.toString.call(n)),
    Error(
      R(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : t,
      ),
    ))
  );
}
function pu(t) {
  var n = t._init;
  return n(t._payload);
}
function Sd(t) {
  function n(p, h) {
    if (t) {
      var y = p.deletions;
      y === null ? ((p.deletions = [h]), (p.flags |= 16)) : y.push(h);
    }
  }
  function r(p, h) {
    if (!t) return null;
    for (; h !== null; ) n(p, h), (h = h.sibling);
    return null;
  }
  function l(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function o(p, h) {
    return (p = rn(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, h, y) {
    return (
      (p.index = y),
      t
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((p.flags |= 2), h) : y)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function a(p) {
    return t && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, h, y, N) {
    return h === null || h.tag !== 6
      ? ((h = yi(y, p.mode, N)), (h.return = p), h)
      : ((h = o(h, y)), (h.return = p), h);
  }
  function c(p, h, y, N) {
    var _ = y.type;
    return _ === Un
      ? f(p, h, y.props.children, N, y.key)
      : h !== null &&
          (h.elementType === _ ||
            (typeof _ == "object" &&
              _ !== null &&
              _.$$typeof === Wt &&
              pu(_) === h.type))
        ? ((N = o(h, y.props)), (N.ref = jr(p, h, y)), (N.return = p), N)
        : ((N = Gl(y.type, y.key, y.props, null, p.mode, N)),
          (N.ref = jr(p, h, y)),
          (N.return = p),
          N);
  }
  function d(p, h, y, N) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = vi(y, p.mode, N)), (h.return = p), h)
      : ((h = o(h, y.children || [])), (h.return = p), h);
  }
  function f(p, h, y, N, _) {
    return h === null || h.tag !== 7
      ? ((h = Sn(y, p.mode, N, _)), (h.return = p), h)
      : ((h = o(h, y)), (h.return = p), h);
  }
  function m(p, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = yi("" + h, p.mode, y)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Sl:
          return (
            (y = Gl(h.type, h.key, h.props, null, p.mode, y)),
            (y.ref = jr(p, null, h)),
            (y.return = p),
            y
          );
        case On:
          return (h = vi(h, p.mode, y)), (h.return = p), h;
        case Wt:
          var N = h._init;
          return m(p, N(h._payload), y);
      }
      if (Tr(h) || vr(h))
        return (h = Sn(h, p.mode, y, null)), (h.return = p), h;
      Ll(p, h);
    }
    return null;
  }
  function v(p, h, y, N) {
    var _ = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return _ !== null ? null : u(p, h, "" + y, N);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Sl:
          return y.key === _ ? c(p, h, y, N) : null;
        case On:
          return y.key === _ ? d(p, h, y, N) : null;
        case Wt:
          return (_ = y._init), v(p, h, _(y._payload), N);
      }
      if (Tr(y) || vr(y)) return _ !== null ? null : f(p, h, y, N, null);
      Ll(p, y);
    }
    return null;
  }
  function k(p, h, y, N, _) {
    if ((typeof N == "string" && N !== "") || typeof N == "number")
      return (p = p.get(y) || null), u(h, p, "" + N, _);
    if (typeof N == "object" && N !== null) {
      switch (N.$$typeof) {
        case Sl:
          return (p = p.get(N.key === null ? y : N.key) || null), c(h, p, N, _);
        case On:
          return (p = p.get(N.key === null ? y : N.key) || null), d(h, p, N, _);
        case Wt:
          var g = N._init;
          return k(p, h, y, g(N._payload), _);
      }
      if (Tr(N) || vr(N)) return (p = p.get(y) || null), f(h, p, N, _, null);
      Ll(h, N);
    }
    return null;
  }
  function E(p, h, y, N) {
    for (
      var _ = null, g = null, D = h, T = (h = 0), I = null;
      D !== null && T < y.length;
      T++
    ) {
      D.index > T ? ((I = D), (D = null)) : (I = D.sibling);
      var U = v(p, D, y[T], N);
      if (U === null) {
        D === null && (D = I);
        break;
      }
      t && D && U.alternate === null && n(p, D),
        (h = i(U, h, T)),
        g === null ? (_ = U) : (g.sibling = U),
        (g = U),
        (D = I);
    }
    if (T === y.length) return r(p, D), ae && hn(p, T), _;
    if (D === null) {
      for (; T < y.length; T++)
        (D = m(p, y[T], N)),
          D !== null &&
            ((h = i(D, h, T)), g === null ? (_ = D) : (g.sibling = D), (g = D));
      return ae && hn(p, T), _;
    }
    for (D = l(p, D); T < y.length; T++)
      (I = k(D, p, T, y[T], N)),
        I !== null &&
          (t && I.alternate !== null && D.delete(I.key === null ? T : I.key),
          (h = i(I, h, T)),
          g === null ? (_ = I) : (g.sibling = I),
          (g = I));
    return (
      t &&
        D.forEach(function (Y) {
          return n(p, Y);
        }),
      ae && hn(p, T),
      _
    );
  }
  function j(p, h, y, N) {
    var _ = vr(y);
    if (typeof _ != "function") throw Error(R(150));
    if (((y = _.call(y)), y == null)) throw Error(R(151));
    for (
      var g = (_ = null), D = h, T = (h = 0), I = null, U = y.next();
      D !== null && !U.done;
      T++, U = y.next()
    ) {
      D.index > T ? ((I = D), (D = null)) : (I = D.sibling);
      var Y = v(p, D, U.value, N);
      if (Y === null) {
        D === null && (D = I);
        break;
      }
      t && D && Y.alternate === null && n(p, D),
        (h = i(Y, h, T)),
        g === null ? (_ = Y) : (g.sibling = Y),
        (g = Y),
        (D = I);
    }
    if (U.done) return r(p, D), ae && hn(p, T), _;
    if (D === null) {
      for (; !U.done; T++, U = y.next())
        (U = m(p, U.value, N)),
          U !== null &&
            ((h = i(U, h, T)), g === null ? (_ = U) : (g.sibling = U), (g = U));
      return ae && hn(p, T), _;
    }
    for (D = l(p, D); !U.done; T++, U = y.next())
      (U = k(D, p, T, U.value, N)),
        U !== null &&
          (t && U.alternate !== null && D.delete(U.key === null ? T : U.key),
          (h = i(U, h, T)),
          g === null ? (_ = U) : (g.sibling = U),
          (g = U));
    return (
      t &&
        D.forEach(function (we) {
          return n(p, we);
        }),
      ae && hn(p, T),
      _
    );
  }
  function P(p, h, y, N) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Un &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Sl:
          e: {
            for (var _ = y.key, g = h; g !== null; ) {
              if (g.key === _) {
                if (((_ = y.type), _ === Un)) {
                  if (g.tag === 7) {
                    r(p, g.sibling),
                      (h = o(g, y.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  g.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === Wt &&
                    pu(_) === g.type)
                ) {
                  r(p, g.sibling),
                    (h = o(g, y.props)),
                    (h.ref = jr(p, g, y)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                r(p, g);
                break;
              } else n(p, g);
              g = g.sibling;
            }
            y.type === Un
              ? ((h = Sn(y.props.children, p.mode, N, y.key)),
                (h.return = p),
                (p = h))
              : ((N = Gl(y.type, y.key, y.props, null, p.mode, N)),
                (N.ref = jr(p, h, y)),
                (N.return = p),
                (p = N));
          }
          return a(p);
        case On:
          e: {
            for (g = y.key; h !== null; ) {
              if (h.key === g)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  r(p, h.sibling),
                    (h = o(h, y.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  r(p, h);
                  break;
                }
              else n(p, h);
              h = h.sibling;
            }
            (h = vi(y, p.mode, N)), (h.return = p), (p = h);
          }
          return a(p);
        case Wt:
          return (g = y._init), P(p, h, g(y._payload), N);
      }
      if (Tr(y)) return E(p, h, y, N);
      if (vr(y)) return j(p, h, y, N);
      Ll(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (r(p, h.sibling), (h = o(h, y)), (h.return = p), (p = h))
          : (r(p, h), (h = yi(y, p.mode, N)), (h.return = p), (p = h)),
        a(p))
      : r(p, h);
  }
  return P;
}
var ir = Sd(!0),
  jd = Sd(!1),
  pl = {},
  Ct = sn(pl),
  tl = sn(pl),
  nl = sn(pl);
function vn(t) {
  if (t === pl) throw Error(R(174));
  return t;
}
function Ja(t, n) {
  switch ((te(nl, n), te(tl, t), te(Ct, pl), (t = n.nodeType), t)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : Ti(null, "");
      break;
    default:
      (t = t === 8 ? n.parentNode : n),
        (n = t.namespaceURI || null),
        (t = t.tagName),
        (n = Ti(n, t));
  }
  le(Ct), te(Ct, n);
}
function ar() {
  le(Ct), le(tl), le(nl);
}
function Ed(t) {
  vn(nl.current);
  var n = vn(Ct.current),
    r = Ti(n, t.type);
  n !== r && (te(tl, t), te(Ct, r));
}
function Ka(t) {
  tl.current === t && (le(Ct), le(tl));
}
var se = sn(0);
function fo(t) {
  for (var n = t; n !== null; ) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var ci = [];
function Ga() {
  for (var t = 0; t < ci.length; t++)
    ci[t]._workInProgressVersionPrimary = null;
  ci.length = 0;
}
var Vl = zt.ReactCurrentDispatcher,
  di = zt.ReactCurrentBatchConfig,
  Cn = 0,
  ue = null,
  Se = null,
  ke = null,
  ho = !1,
  Ar = !1,
  rl = 0,
  Hp = 0;
function Le() {
  throw Error(R(321));
}
function Ya(t, n) {
  if (n === null) return !1;
  for (var r = 0; r < n.length && r < t.length; r++)
    if (!vt(t[r], n[r])) return !1;
  return !0;
}
function Xa(t, n, r, l, o, i) {
  if (
    ((Cn = i),
    (ue = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Vl.current = t === null || t.memoizedState === null ? Jp : Kp),
    (t = r(l, o)),
    Ar)
  ) {
    i = 0;
    do {
      if (((Ar = !1), (rl = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (ke = Se = null),
        (n.updateQueue = null),
        (Vl.current = Gp),
        (t = r(l, o));
    } while (Ar);
  }
  if (
    ((Vl.current = po),
    (n = Se !== null && Se.next !== null),
    (Cn = 0),
    (ke = Se = ue = null),
    (ho = !1),
    n)
  )
    throw Error(R(300));
  return t;
}
function Za() {
  var t = rl !== 0;
  return (rl = 0), t;
}
function St() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (ue.memoizedState = ke = t) : (ke = ke.next = t), ke;
}
function at() {
  if (Se === null) {
    var t = ue.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Se.next;
  var n = ke === null ? ue.memoizedState : ke.next;
  if (n !== null) (ke = n), (Se = t);
  else {
    if (t === null) throw Error(R(310));
    (Se = t),
      (t = {
        memoizedState: Se.memoizedState,
        baseState: Se.baseState,
        baseQueue: Se.baseQueue,
        queue: Se.queue,
        next: null,
      }),
      ke === null ? (ue.memoizedState = ke = t) : (ke = ke.next = t);
  }
  return ke;
}
function ll(t, n) {
  return typeof n == "function" ? n(t) : n;
}
function fi(t) {
  var n = at(),
    r = n.queue;
  if (r === null) throw Error(R(311));
  r.lastRenderedReducer = t;
  var l = Se,
    o = l.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (l.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (i = o.next), (l = l.baseState);
    var u = (a = null),
      c = null,
      d = i;
    do {
      var f = d.lane;
      if ((Cn & f) === f)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (l = d.hasEagerState ? d.eagerState : t(l, d.action));
      else {
        var m = {
          lane: f,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        c === null ? ((u = c = m), (a = l)) : (c = c.next = m),
          (ue.lanes |= f),
          (kn |= f);
      }
      d = d.next;
    } while (d !== null && d !== i);
    c === null ? (a = l) : (c.next = u),
      vt(l, n.memoizedState) || (He = !0),
      (n.memoizedState = l),
      (n.baseState = a),
      (n.baseQueue = c),
      (r.lastRenderedState = l);
  }
  if (((t = r.interleaved), t !== null)) {
    o = t;
    do (i = o.lane), (ue.lanes |= i), (kn |= i), (o = o.next);
    while (o !== t);
  } else o === null && (r.lanes = 0);
  return [n.memoizedState, r.dispatch];
}
function hi(t) {
  var n = at(),
    r = n.queue;
  if (r === null) throw Error(R(311));
  r.lastRenderedReducer = t;
  var l = r.dispatch,
    o = r.pending,
    i = n.memoizedState;
  if (o !== null) {
    r.pending = null;
    var a = (o = o.next);
    do (i = t(i, a.action)), (a = a.next);
    while (a !== o);
    vt(i, n.memoizedState) || (He = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, l];
}
function Cd() {}
function kd(t, n) {
  var r = ue,
    l = at(),
    o = n(),
    i = !vt(l.memoizedState, o);
  if (
    (i && ((l.memoizedState = o), (He = !0)),
    (l = l.queue),
    qa(Dd.bind(null, r, l, t), [t]),
    l.getSnapshot !== n || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      ol(9, Pd.bind(null, r, l, o, n), void 0, null),
      Ne === null)
    )
      throw Error(R(349));
    Cn & 30 || Nd(r, n, o);
  }
  return o;
}
function Nd(t, n, r) {
  (t.flags |= 16384),
    (t = { getSnapshot: n, value: r }),
    (n = ue.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (ue.updateQueue = n),
        (n.stores = [t]))
      : ((r = n.stores), r === null ? (n.stores = [t]) : r.push(t));
}
function Pd(t, n, r, l) {
  (n.value = r), (n.getSnapshot = l), Rd(n) && _d(t);
}
function Dd(t, n, r) {
  return r(function () {
    Rd(n) && _d(t);
  });
}
function Rd(t) {
  var n = t.getSnapshot;
  t = t.value;
  try {
    var r = n();
    return !vt(t, r);
  } catch {
    return !0;
  }
}
function _d(t) {
  var n = Mt(t, 1);
  n !== null && yt(n, t, 1, -1);
}
function mu(t) {
  var n = St();
  return (
    typeof t == "function" && (t = t()),
    (n.memoizedState = n.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ll,
      lastRenderedState: t,
    }),
    (n.queue = t),
    (t = t.dispatch = Qp.bind(null, ue, t)),
    [n.memoizedState, t]
  );
}
function ol(t, n, r, l) {
  return (
    (t = { tag: t, create: n, destroy: r, deps: l, next: null }),
    (n = ue.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (ue.updateQueue = n),
        (n.lastEffect = t.next = t))
      : ((r = n.lastEffect),
        r === null
          ? (n.lastEffect = t.next = t)
          : ((l = r.next), (r.next = t), (t.next = l), (n.lastEffect = t))),
    t
  );
}
function Td() {
  return at().memoizedState;
}
function Wl(t, n, r, l) {
  var o = St();
  (ue.flags |= t),
    (o.memoizedState = ol(1 | n, r, void 0, l === void 0 ? null : l));
}
function Ro(t, n, r, l) {
  var o = at();
  l = l === void 0 ? null : l;
  var i = void 0;
  if (Se !== null) {
    var a = Se.memoizedState;
    if (((i = a.destroy), l !== null && Ya(l, a.deps))) {
      o.memoizedState = ol(n, r, i, l);
      return;
    }
  }
  (ue.flags |= t), (o.memoizedState = ol(1 | n, r, i, l));
}
function yu(t, n) {
  return Wl(8390656, 8, t, n);
}
function qa(t, n) {
  return Ro(2048, 8, t, n);
}
function Ld(t, n) {
  return Ro(4, 2, t, n);
}
function Md(t, n) {
  return Ro(4, 4, t, n);
}
function Fd(t, n) {
  if (typeof n == "function")
    return (
      (t = t()),
      n(t),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (t = t()),
      (n.current = t),
      function () {
        n.current = null;
      }
    );
}
function zd(t, n, r) {
  return (
    (r = r != null ? r.concat([t]) : null), Ro(4, 4, Fd.bind(null, n, t), r)
  );
}
function ba() {}
function Id(t, n) {
  var r = at();
  n = n === void 0 ? null : n;
  var l = r.memoizedState;
  return l !== null && n !== null && Ya(n, l[1])
    ? l[0]
    : ((r.memoizedState = [t, n]), t);
}
function Od(t, n) {
  var r = at();
  n = n === void 0 ? null : n;
  var l = r.memoizedState;
  return l !== null && n !== null && Ya(n, l[1])
    ? l[0]
    : ((t = t()), (r.memoizedState = [t, n]), t);
}
function Ud(t, n, r) {
  return Cn & 21
    ? (vt(r, n) || ((r = Bc()), (ue.lanes |= r), (kn |= r), (t.baseState = !0)),
      n)
    : (t.baseState && ((t.baseState = !1), (He = !0)), (t.memoizedState = r));
}
function Vp(t, n) {
  var r = Z;
  (Z = r !== 0 && 4 > r ? r : 4), t(!0);
  var l = di.transition;
  di.transition = {};
  try {
    t(!1), n();
  } finally {
    (Z = r), (di.transition = l);
  }
}
function Ad() {
  return at().memoizedState;
}
function Wp(t, n, r) {
  var l = nn(t);
  if (
    ((r = {
      lane: l,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $d(t))
  )
    Bd(n, r);
  else if (((r = vd(t, n, r, l)), r !== null)) {
    var o = Ue();
    yt(r, t, l, o), Hd(r, n, l);
  }
}
function Qp(t, n, r) {
  var l = nn(t),
    o = { lane: l, action: r, hasEagerState: !1, eagerState: null, next: null };
  if ($d(t)) Bd(n, o);
  else {
    var i = t.alternate;
    if (
      t.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var a = n.lastRenderedState,
          u = i(a, r);
        if (((o.hasEagerState = !0), (o.eagerState = u), vt(u, a))) {
          var c = n.interleaved;
          c === null
            ? ((o.next = o), Wa(n))
            : ((o.next = c.next), (c.next = o)),
            (n.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = vd(t, n, o, l)),
      r !== null && ((o = Ue()), yt(r, t, l, o), Hd(r, n, l));
  }
}
function $d(t) {
  var n = t.alternate;
  return t === ue || (n !== null && n === ue);
}
function Bd(t, n) {
  Ar = ho = !0;
  var r = t.pending;
  r === null ? (n.next = n) : ((n.next = r.next), (r.next = n)),
    (t.pending = n);
}
function Hd(t, n, r) {
  if (r & 4194240) {
    var l = n.lanes;
    (l &= t.pendingLanes), (r |= l), (n.lanes = r), _a(t, r);
  }
}
var po = {
    readContext: it,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  Jp = {
    readContext: it,
    useCallback: function (t, n) {
      return (St().memoizedState = [t, n === void 0 ? null : n]), t;
    },
    useContext: it,
    useEffect: yu,
    useImperativeHandle: function (t, n, r) {
      return (
        (r = r != null ? r.concat([t]) : null),
        Wl(4194308, 4, Fd.bind(null, n, t), r)
      );
    },
    useLayoutEffect: function (t, n) {
      return Wl(4194308, 4, t, n);
    },
    useInsertionEffect: function (t, n) {
      return Wl(4, 2, t, n);
    },
    useMemo: function (t, n) {
      var r = St();
      return (
        (n = n === void 0 ? null : n), (t = t()), (r.memoizedState = [t, n]), t
      );
    },
    useReducer: function (t, n, r) {
      var l = St();
      return (
        (n = r !== void 0 ? r(n) : n),
        (l.memoizedState = l.baseState = n),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: n,
        }),
        (l.queue = t),
        (t = t.dispatch = Wp.bind(null, ue, t)),
        [l.memoizedState, t]
      );
    },
    useRef: function (t) {
      var n = St();
      return (t = { current: t }), (n.memoizedState = t);
    },
    useState: mu,
    useDebugValue: ba,
    useDeferredValue: function (t) {
      return (St().memoizedState = t);
    },
    useTransition: function () {
      var t = mu(!1),
        n = t[0];
      return (t = Vp.bind(null, t[1])), (St().memoizedState = t), [n, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, n, r) {
      var l = ue,
        o = St();
      if (ae) {
        if (r === void 0) throw Error(R(407));
        r = r();
      } else {
        if (((r = n()), Ne === null)) throw Error(R(349));
        Cn & 30 || Nd(l, n, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: n };
      return (
        (o.queue = i),
        yu(Dd.bind(null, l, i, t), [t]),
        (l.flags |= 2048),
        ol(9, Pd.bind(null, l, i, r, n), void 0, null),
        r
      );
    },
    useId: function () {
      var t = St(),
        n = Ne.identifierPrefix;
      if (ae) {
        var r = Dt,
          l = Pt;
        (r = (l & ~(1 << (32 - mt(l) - 1))).toString(32) + r),
          (n = ":" + n + "R" + r),
          (r = rl++),
          0 < r && (n += "H" + r.toString(32)),
          (n += ":");
      } else (r = Hp++), (n = ":" + n + "r" + r.toString(32) + ":");
      return (t.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  Kp = {
    readContext: it,
    useCallback: Id,
    useContext: it,
    useEffect: qa,
    useImperativeHandle: zd,
    useInsertionEffect: Ld,
    useLayoutEffect: Md,
    useMemo: Od,
    useReducer: fi,
    useRef: Td,
    useState: function () {
      return fi(ll);
    },
    useDebugValue: ba,
    useDeferredValue: function (t) {
      var n = at();
      return Ud(n, Se.memoizedState, t);
    },
    useTransition: function () {
      var t = fi(ll)[0],
        n = at().memoizedState;
      return [t, n];
    },
    useMutableSource: Cd,
    useSyncExternalStore: kd,
    useId: Ad,
    unstable_isNewReconciler: !1,
  },
  Gp = {
    readContext: it,
    useCallback: Id,
    useContext: it,
    useEffect: qa,
    useImperativeHandle: zd,
    useInsertionEffect: Ld,
    useLayoutEffect: Md,
    useMemo: Od,
    useReducer: hi,
    useRef: Td,
    useState: function () {
      return hi(ll);
    },
    useDebugValue: ba,
    useDeferredValue: function (t) {
      var n = at();
      return Se === null ? (n.memoizedState = t) : Ud(n, Se.memoizedState, t);
    },
    useTransition: function () {
      var t = hi(ll)[0],
        n = at().memoizedState;
      return [t, n];
    },
    useMutableSource: Cd,
    useSyncExternalStore: kd,
    useId: Ad,
    unstable_isNewReconciler: !1,
  };
function sr(t, n) {
  try {
    var r = "",
      l = n;
    do (r += jh(l)), (l = l.return);
    while (l);
    var o = r;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: t, source: n, stack: o, digest: null };
}
function pi(t, n, r) {
  return { value: t, source: null, stack: r ?? null, digest: n ?? null };
}
function ea(t, n) {
  try {
    console.error(n.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Yp = typeof WeakMap == "function" ? WeakMap : Map;
function Vd(t, n, r) {
  (r = Rt(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var l = n.value;
  return (
    (r.callback = function () {
      yo || ((yo = !0), (ca = l)), ea(t, n);
    }),
    r
  );
}
function Wd(t, n, r) {
  (r = Rt(-1, r)), (r.tag = 3);
  var l = t.type.getDerivedStateFromError;
  if (typeof l == "function") {
    var o = n.value;
    (r.payload = function () {
      return l(o);
    }),
      (r.callback = function () {
        ea(t, n);
      });
  }
  var i = t.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        ea(t, n),
          typeof l != "function" &&
            (tn === null ? (tn = new Set([this])) : tn.add(this));
        var a = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    r
  );
}
function vu(t, n, r) {
  var l = t.pingCache;
  if (l === null) {
    l = t.pingCache = new Yp();
    var o = new Set();
    l.set(n, o);
  } else (o = l.get(n)), o === void 0 && ((o = new Set()), l.set(n, o));
  o.has(r) || (o.add(r), (t = um.bind(null, t, n, r)), n.then(t, t));
}
function gu(t) {
  do {
    var n;
    if (
      ((n = t.tag === 13) &&
        ((n = t.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function xu(t, n, r, l, o) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = o), t)
    : (t === n
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((n = Rt(-1, 1)), (n.tag = 2), en(r, n, 1))),
          (r.lanes |= 1)),
      t);
}
var Xp = zt.ReactCurrentOwner,
  He = !1;
function Oe(t, n, r, l) {
  n.child = t === null ? jd(n, null, r, l) : ir(n, t.child, r, l);
}
function wu(t, n, r, l, o) {
  r = r.render;
  var i = n.ref;
  return (
    tr(n, o),
    (l = Xa(t, n, r, l, i, o)),
    (r = Za()),
    t !== null && !He
      ? ((n.updateQueue = t.updateQueue),
        (n.flags &= -2053),
        (t.lanes &= ~o),
        Ft(t, n, o))
      : (ae && r && Ua(n), (n.flags |= 1), Oe(t, n, l, o), n.child)
  );
}
function Su(t, n, r, l, o) {
  if (t === null) {
    var i = r.type;
    return typeof i == "function" &&
      !as(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Qd(t, n, i, l, o))
      : ((t = Gl(r.type, null, l, n, n.mode, o)),
        (t.ref = n.ref),
        (t.return = n),
        (n.child = t));
  }
  if (((i = t.child), !(t.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Zr), r(a, l) && t.ref === n.ref)
    )
      return Ft(t, n, o);
  }
  return (
    (n.flags |= 1),
    (t = rn(i, l)),
    (t.ref = n.ref),
    (t.return = n),
    (n.child = t)
  );
}
function Qd(t, n, r, l, o) {
  if (t !== null) {
    var i = t.memoizedProps;
    if (Zr(i, l) && t.ref === n.ref)
      if (((He = !1), (n.pendingProps = l = i), (t.lanes & o) !== 0))
        t.flags & 131072 && (He = !0);
      else return (n.lanes = t.lanes), Ft(t, n, o);
  }
  return ta(t, n, r, l, o);
}
function Jd(t, n, r) {
  var l = n.pendingProps,
    o = l.children,
    i = t !== null ? t.memoizedState : null;
  if (l.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Gn, Ke),
        (Ke |= r);
    else {
      if (!(r & 1073741824))
        return (
          (t = i !== null ? i.baseLanes | r : r),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          te(Gn, Ke),
          (Ke |= t),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (l = i !== null ? i.baseLanes : r),
        te(Gn, Ke),
        (Ke |= l);
    }
  else
    i !== null ? ((l = i.baseLanes | r), (n.memoizedState = null)) : (l = r),
      te(Gn, Ke),
      (Ke |= l);
  return Oe(t, n, o, r), n.child;
}
function Kd(t, n) {
  var r = n.ref;
  ((t === null && r !== null) || (t !== null && t.ref !== r)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function ta(t, n, r, l, o) {
  var i = We(r) ? jn : ze.current;
  return (
    (i = lr(n, i)),
    tr(n, o),
    (r = Xa(t, n, r, l, i, o)),
    (l = Za()),
    t !== null && !He
      ? ((n.updateQueue = t.updateQueue),
        (n.flags &= -2053),
        (t.lanes &= ~o),
        Ft(t, n, o))
      : (ae && l && Ua(n), (n.flags |= 1), Oe(t, n, r, o), n.child)
  );
}
function ju(t, n, r, l, o) {
  if (We(r)) {
    var i = !0;
    oo(n);
  } else i = !1;
  if ((tr(n, o), n.stateNode === null))
    Ql(t, n), wd(n, r, l), bi(n, r, l, o), (l = !0);
  else if (t === null) {
    var a = n.stateNode,
      u = n.memoizedProps;
    a.props = u;
    var c = a.context,
      d = r.contextType;
    typeof d == "object" && d !== null
      ? (d = it(d))
      : ((d = We(r) ? jn : ze.current), (d = lr(n, d)));
    var f = r.getDerivedStateFromProps,
      m =
        typeof f == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== l || c !== d) && hu(n, a, l, d)),
      (Qt = !1);
    var v = n.memoizedState;
    (a.state = v),
      co(n, l, a, o),
      (c = n.memoizedState),
      u !== l || v !== c || Ve.current || Qt
        ? (typeof f == "function" && (qi(n, r, f, l), (c = n.memoizedState)),
          (u = Qt || fu(n, r, u, l, v, c, d))
            ? (m ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = l),
              (n.memoizedState = c)),
          (a.props = l),
          (a.state = c),
          (a.context = d),
          (l = u))
        : (typeof a.componentDidMount == "function" && (n.flags |= 4194308),
          (l = !1));
  } else {
    (a = n.stateNode),
      gd(t, n),
      (u = n.memoizedProps),
      (d = n.type === n.elementType ? u : dt(n.type, u)),
      (a.props = d),
      (m = n.pendingProps),
      (v = a.context),
      (c = r.contextType),
      typeof c == "object" && c !== null
        ? (c = it(c))
        : ((c = We(r) ? jn : ze.current), (c = lr(n, c)));
    var k = r.getDerivedStateFromProps;
    (f =
      typeof k == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== m || v !== c) && hu(n, a, l, c)),
      (Qt = !1),
      (v = n.memoizedState),
      (a.state = v),
      co(n, l, a, o);
    var E = n.memoizedState;
    u !== m || v !== E || Ve.current || Qt
      ? (typeof k == "function" && (qi(n, r, k, l), (E = n.memoizedState)),
        (d = Qt || fu(n, r, d, l, v, E, c) || !1)
          ? (f ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(l, E, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(l, E, c)),
            typeof a.componentDidUpdate == "function" && (n.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (u === t.memoizedProps && v === t.memoizedState) ||
              (n.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (u === t.memoizedProps && v === t.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = l),
            (n.memoizedState = E)),
        (a.props = l),
        (a.state = E),
        (a.context = c),
        (l = d))
      : (typeof a.componentDidUpdate != "function" ||
          (u === t.memoizedProps && v === t.memoizedState) ||
          (n.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (u === t.memoizedProps && v === t.memoizedState) ||
          (n.flags |= 1024),
        (l = !1));
  }
  return na(t, n, r, l, i, o);
}
function na(t, n, r, l, o, i) {
  Kd(t, n);
  var a = (n.flags & 128) !== 0;
  if (!l && !a) return o && au(n, r, !1), Ft(t, n, i);
  (l = n.stateNode), (Xp.current = n);
  var u =
    a && typeof r.getDerivedStateFromError != "function" ? null : l.render();
  return (
    (n.flags |= 1),
    t !== null && a
      ? ((n.child = ir(n, t.child, null, i)), (n.child = ir(n, null, u, i)))
      : Oe(t, n, u, i),
    (n.memoizedState = l.state),
    o && au(n, r, !0),
    n.child
  );
}
function Gd(t) {
  var n = t.stateNode;
  n.pendingContext
    ? iu(t, n.pendingContext, n.pendingContext !== n.context)
    : n.context && iu(t, n.context, !1),
    Ja(t, n.containerInfo);
}
function Eu(t, n, r, l, o) {
  return or(), $a(o), (n.flags |= 256), Oe(t, n, r, l), n.child;
}
var ra = { dehydrated: null, treeContext: null, retryLane: 0 };
function la(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Yd(t, n, r) {
  var l = n.pendingProps,
    o = se.current,
    i = !1,
    a = (n.flags & 128) !== 0,
    u;
  if (
    ((u = a) ||
      (u = t !== null && t.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((i = !0), (n.flags &= -129))
      : (t === null || t.memoizedState !== null) && (o |= 1),
    te(se, o & 1),
    t === null)
  )
    return (
      Xi(n),
      (t = n.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (n.mode & 1
            ? t.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((a = l.children),
          (t = l.fallback),
          i
            ? ((l = n.mode),
              (i = n.child),
              (a = { mode: "hidden", children: a }),
              !(l & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Lo(a, l, 0, null)),
              (t = Sn(t, l, r, null)),
              (i.return = n),
              (t.return = n),
              (i.sibling = t),
              (n.child = i),
              (n.child.memoizedState = la(r)),
              (n.memoizedState = ra),
              t)
            : es(n, a))
    );
  if (((o = t.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return Zp(t, n, a, l, u, o, r);
  if (i) {
    (i = l.fallback), (a = n.mode), (o = t.child), (u = o.sibling);
    var c = { mode: "hidden", children: l.children };
    return (
      !(a & 1) && n.child !== o
        ? ((l = n.child),
          (l.childLanes = 0),
          (l.pendingProps = c),
          (n.deletions = null))
        : ((l = rn(o, c)), (l.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = rn(u, i)) : ((i = Sn(i, a, r, null)), (i.flags |= 2)),
      (i.return = n),
      (l.return = n),
      (l.sibling = i),
      (n.child = l),
      (l = i),
      (i = n.child),
      (a = t.child.memoizedState),
      (a =
        a === null
          ? la(r)
          : {
              baseLanes: a.baseLanes | r,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = t.childLanes & ~r),
      (n.memoizedState = ra),
      l
    );
  }
  return (
    (i = t.child),
    (t = i.sibling),
    (l = rn(i, { mode: "visible", children: l.children })),
    !(n.mode & 1) && (l.lanes = r),
    (l.return = n),
    (l.sibling = null),
    t !== null &&
      ((r = n.deletions),
      r === null ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t)),
    (n.child = l),
    (n.memoizedState = null),
    l
  );
}
function es(t, n) {
  return (
    (n = Lo({ mode: "visible", children: n }, t.mode, 0, null)),
    (n.return = t),
    (t.child = n)
  );
}
function Ml(t, n, r, l) {
  return (
    l !== null && $a(l),
    ir(n, t.child, null, r),
    (t = es(n, n.pendingProps.children)),
    (t.flags |= 2),
    (n.memoizedState = null),
    t
  );
}
function Zp(t, n, r, l, o, i, a) {
  if (r)
    return n.flags & 256
      ? ((n.flags &= -257), (l = pi(Error(R(422)))), Ml(t, n, a, l))
      : n.memoizedState !== null
        ? ((n.child = t.child), (n.flags |= 128), null)
        : ((i = l.fallback),
          (o = n.mode),
          (l = Lo({ mode: "visible", children: l.children }, o, 0, null)),
          (i = Sn(i, o, a, null)),
          (i.flags |= 2),
          (l.return = n),
          (i.return = n),
          (l.sibling = i),
          (n.child = l),
          n.mode & 1 && ir(n, t.child, null, a),
          (n.child.memoizedState = la(a)),
          (n.memoizedState = ra),
          i);
  if (!(n.mode & 1)) return Ml(t, n, a, null);
  if (o.data === "$!") {
    if (((l = o.nextSibling && o.nextSibling.dataset), l)) var u = l.dgst;
    return (l = u), (i = Error(R(419))), (l = pi(i, l, void 0)), Ml(t, n, a, l);
  }
  if (((u = (a & t.childLanes) !== 0), He || u)) {
    if (((l = Ne), l !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (l.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Mt(t, o), yt(l, t, o, -1));
    }
    return is(), (l = pi(Error(R(421)))), Ml(t, n, a, l);
  }
  return o.data === "$?"
    ? ((n.flags |= 128),
      (n.child = t.child),
      (n = cm.bind(null, t)),
      (o._reactRetry = n),
      null)
    : ((t = i.treeContext),
      (Ge = bt(o.nextSibling)),
      (Ye = n),
      (ae = !0),
      (pt = null),
      t !== null &&
        ((nt[rt++] = Pt),
        (nt[rt++] = Dt),
        (nt[rt++] = En),
        (Pt = t.id),
        (Dt = t.overflow),
        (En = n)),
      (n = es(n, l.children)),
      (n.flags |= 4096),
      n);
}
function Cu(t, n, r) {
  t.lanes |= n;
  var l = t.alternate;
  l !== null && (l.lanes |= n), Zi(t.return, n, r);
}
function mi(t, n, r, l, o) {
  var i = t.memoizedState;
  i === null
    ? (t.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = l),
      (i.tail = r),
      (i.tailMode = o));
}
function Xd(t, n, r) {
  var l = n.pendingProps,
    o = l.revealOrder,
    i = l.tail;
  if ((Oe(t, n, l.children, r), (l = se.current), l & 2))
    (l = (l & 1) | 2), (n.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = n.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Cu(t, r, n);
        else if (t.tag === 19) Cu(t, r, n);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === n) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === n) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    l &= 1;
  }
  if ((te(se, l), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = n.child, o = null; r !== null; )
          (t = r.alternate),
            t !== null && fo(t) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = n.child), (n.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          mi(n, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = n.child, n.child = null; o !== null; ) {
          if (((t = o.alternate), t !== null && fo(t) === null)) {
            n.child = o;
            break;
          }
          (t = o.sibling), (o.sibling = r), (r = o), (o = t);
        }
        mi(n, !0, r, null, i);
        break;
      case "together":
        mi(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Ql(t, n) {
  !(n.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ft(t, n, r) {
  if (
    (t !== null && (n.dependencies = t.dependencies),
    (kn |= n.lanes),
    !(r & n.childLanes))
  )
    return null;
  if (t !== null && n.child !== t.child) throw Error(R(153));
  if (n.child !== null) {
    for (
      t = n.child, r = rn(t, t.pendingProps), n.child = r, r.return = n;
      t.sibling !== null;

    )
      (t = t.sibling), (r = r.sibling = rn(t, t.pendingProps)), (r.return = n);
    r.sibling = null;
  }
  return n.child;
}
function qp(t, n, r) {
  switch (n.tag) {
    case 3:
      Gd(n), or();
      break;
    case 5:
      Ed(n);
      break;
    case 1:
      We(n.type) && oo(n);
      break;
    case 4:
      Ja(n, n.stateNode.containerInfo);
      break;
    case 10:
      var l = n.type._context,
        o = n.memoizedProps.value;
      te(so, l._currentValue), (l._currentValue = o);
      break;
    case 13:
      if (((l = n.memoizedState), l !== null))
        return l.dehydrated !== null
          ? (te(se, se.current & 1), (n.flags |= 128), null)
          : r & n.child.childLanes
            ? Yd(t, n, r)
            : (te(se, se.current & 1),
              (t = Ft(t, n, r)),
              t !== null ? t.sibling : null);
      te(se, se.current & 1);
      break;
    case 19:
      if (((l = (r & n.childLanes) !== 0), t.flags & 128)) {
        if (l) return Xd(t, n, r);
        n.flags |= 128;
      }
      if (
        ((o = n.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        te(se, se.current),
        l)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Jd(t, n, r);
  }
  return Ft(t, n, r);
}
var Zd, oa, qd, bd;
Zd = function (t, n) {
  for (var r = n.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === n) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === n) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
oa = function () {};
qd = function (t, n, r, l) {
  var o = t.memoizedProps;
  if (o !== l) {
    (t = n.stateNode), vn(Ct.current);
    var i = null;
    switch (r) {
      case "input":
        (o = Pi(t, o)), (l = Pi(t, l)), (i = []);
        break;
      case "select":
        (o = ce({}, o, { value: void 0 })),
          (l = ce({}, l, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = _i(t, o)), (l = _i(t, l)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof l.onClick == "function" &&
          (t.onclick = ro);
    }
    Li(r, l);
    var a;
    r = null;
    for (d in o)
      if (!l.hasOwnProperty(d) && o.hasOwnProperty(d) && o[d] != null)
        if (d === "style") {
          var u = o[d];
          for (a in u) u.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Wr.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in l) {
      var c = l[d];
      if (
        ((u = o != null ? o[d] : void 0),
        l.hasOwnProperty(d) && c !== u && (c != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (a in u)
              !u.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                u[a] !== c[a] &&
                (r || (r = {}), (r[a] = c[a]));
          } else r || (i || (i = []), i.push(d, r)), (r = c);
        else
          d === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (u = u ? u.__html : void 0),
              c != null && u !== c && (i = i || []).push(d, c))
            : d === "children"
              ? (typeof c != "string" && typeof c != "number") ||
                (i = i || []).push(d, "" + c)
              : d !== "suppressContentEditableWarning" &&
                d !== "suppressHydrationWarning" &&
                (Wr.hasOwnProperty(d)
                  ? (c != null && d === "onScroll" && re("scroll", t),
                    i || u === c || (i = []))
                  : (i = i || []).push(d, c));
    }
    r && (i = i || []).push("style", r);
    var d = i;
    (n.updateQueue = d) && (n.flags |= 4);
  }
};
bd = function (t, n, r, l) {
  r !== l && (n.flags |= 4);
};
function Er(t, n) {
  if (!ae)
    switch (t.tailMode) {
      case "hidden":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = t.tail;
        for (var l = null; r !== null; )
          r.alternate !== null && (l = r), (r = r.sibling);
        l === null
          ? n || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (l.sibling = null);
    }
}
function Me(t) {
  var n = t.alternate !== null && t.alternate.child === t.child,
    r = 0,
    l = 0;
  if (n)
    for (var o = t.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (l |= o.subtreeFlags & 14680064),
        (l |= o.flags & 14680064),
        (o.return = t),
        (o = o.sibling);
  else
    for (o = t.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (l |= o.subtreeFlags),
        (l |= o.flags),
        (o.return = t),
        (o = o.sibling);
  return (t.subtreeFlags |= l), (t.childLanes = r), n;
}
function bp(t, n, r) {
  var l = n.pendingProps;
  switch ((Aa(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Me(n), null;
    case 1:
      return We(n.type) && lo(), Me(n), null;
    case 3:
      return (
        (l = n.stateNode),
        ar(),
        le(Ve),
        le(ze),
        Ga(),
        l.pendingContext &&
          ((l.context = l.pendingContext), (l.pendingContext = null)),
        (t === null || t.child === null) &&
          (Tl(n)
            ? (n.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), pt !== null && (ha(pt), (pt = null)))),
        oa(t, n),
        Me(n),
        null
      );
    case 5:
      Ka(n);
      var o = vn(nl.current);
      if (((r = n.type), t !== null && n.stateNode != null))
        qd(t, n, r, l, o),
          t.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!l) {
          if (n.stateNode === null) throw Error(R(166));
          return Me(n), null;
        }
        if (((t = vn(Ct.current)), Tl(n))) {
          (l = n.stateNode), (r = n.type);
          var i = n.memoizedProps;
          switch (((l[jt] = n), (l[el] = i), (t = (n.mode & 1) !== 0), r)) {
            case "dialog":
              re("cancel", l), re("close", l);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", l);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Mr.length; o++) re(Mr[o], l);
              break;
            case "source":
              re("error", l);
              break;
            case "img":
            case "image":
            case "link":
              re("error", l), re("load", l);
              break;
            case "details":
              re("toggle", l);
              break;
            case "input":
              Ms(l, i), re("invalid", l);
              break;
            case "select":
              (l._wrapperState = { wasMultiple: !!i.multiple }),
                re("invalid", l);
              break;
            case "textarea":
              zs(l, i), re("invalid", l);
          }
          Li(r, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var u = i[a];
              a === "children"
                ? typeof u == "string"
                  ? l.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      _l(l.textContent, u, t),
                    (o = ["children", u]))
                  : typeof u == "number" &&
                    l.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      _l(l.textContent, u, t),
                    (o = ["children", "" + u]))
                : Wr.hasOwnProperty(a) &&
                  u != null &&
                  a === "onScroll" &&
                  re("scroll", l);
            }
          switch (r) {
            case "input":
              jl(l), Fs(l, i, !0);
              break;
            case "textarea":
              jl(l), Is(l);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (l.onclick = ro);
          }
          (l = o), (n.updateQueue = l), l !== null && (n.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Nc(r)),
            t === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((t = a.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof l.is == "string"
                  ? (t = a.createElement(r, { is: l.is }))
                  : ((t = a.createElement(r)),
                    r === "select" &&
                      ((a = t),
                      l.multiple
                        ? (a.multiple = !0)
                        : l.size && (a.size = l.size)))
              : (t = a.createElementNS(t, r)),
            (t[jt] = n),
            (t[el] = l),
            Zd(t, n, !1, !1),
            (n.stateNode = t);
          e: {
            switch (((a = Mi(r, l)), r)) {
              case "dialog":
                re("cancel", t), re("close", t), (o = l);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", t), (o = l);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Mr.length; o++) re(Mr[o], t);
                o = l;
                break;
              case "source":
                re("error", t), (o = l);
                break;
              case "img":
              case "image":
              case "link":
                re("error", t), re("load", t), (o = l);
                break;
              case "details":
                re("toggle", t), (o = l);
                break;
              case "input":
                Ms(t, l), (o = Pi(t, l)), re("invalid", t);
                break;
              case "option":
                o = l;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!l.multiple }),
                  (o = ce({}, l, { value: void 0 })),
                  re("invalid", t);
                break;
              case "textarea":
                zs(t, l), (o = _i(t, l)), re("invalid", t);
                break;
              default:
                o = l;
            }
            Li(r, o), (u = o);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var c = u[i];
                i === "style"
                  ? Rc(t, c)
                  : i === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && Pc(t, c))
                    : i === "children"
                      ? typeof c == "string"
                        ? (r !== "textarea" || c !== "") && Qr(t, c)
                        : typeof c == "number" && Qr(t, "" + c)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Wr.hasOwnProperty(i)
                          ? c != null && i === "onScroll" && re("scroll", t)
                          : c != null && Ca(t, i, c, a));
              }
            switch (r) {
              case "input":
                jl(t), Fs(t, l, !1);
                break;
              case "textarea":
                jl(t), Is(t);
                break;
              case "option":
                l.value != null && t.setAttribute("value", "" + ln(l.value));
                break;
              case "select":
                (t.multiple = !!l.multiple),
                  (i = l.value),
                  i != null
                    ? Zn(t, !!l.multiple, i, !1)
                    : l.defaultValue != null &&
                      Zn(t, !!l.multiple, l.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (t.onclick = ro);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
          }
          l && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return Me(n), null;
    case 6:
      if (t && n.stateNode != null) bd(t, n, t.memoizedProps, l);
      else {
        if (typeof l != "string" && n.stateNode === null) throw Error(R(166));
        if (((r = vn(nl.current)), vn(Ct.current), Tl(n))) {
          if (
            ((l = n.stateNode),
            (r = n.memoizedProps),
            (l[jt] = n),
            (i = l.nodeValue !== r) && ((t = Ye), t !== null))
          )
            switch (t.tag) {
              case 3:
                _l(l.nodeValue, r, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  _l(l.nodeValue, r, (t.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (l = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(l)),
            (l[jt] = n),
            (n.stateNode = l);
      }
      return Me(n), null;
    case 13:
      if (
        (le(se),
        (l = n.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (ae && Ge !== null && n.mode & 1 && !(n.flags & 128))
          yd(), or(), (n.flags |= 98560), (i = !1);
        else if (((i = Tl(n)), l !== null && l.dehydrated !== null)) {
          if (t === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[jt] = n;
          } else
            or(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          Me(n), (i = !1);
        } else pt !== null && (ha(pt), (pt = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = r), n)
        : ((l = l !== null),
          l !== (t !== null && t.memoizedState !== null) &&
            l &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (t === null || se.current & 1 ? je === 0 && (je = 3) : is())),
          n.updateQueue !== null && (n.flags |= 4),
          Me(n),
          null);
    case 4:
      return (
        ar(), oa(t, n), t === null && qr(n.stateNode.containerInfo), Me(n), null
      );
    case 10:
      return Va(n.type._context), Me(n), null;
    case 17:
      return We(n.type) && lo(), Me(n), null;
    case 19:
      if ((le(se), (i = n.memoizedState), i === null)) return Me(n), null;
      if (((l = (n.flags & 128) !== 0), (a = i.rendering), a === null))
        if (l) Er(i, !1);
        else {
          if (je !== 0 || (t !== null && t.flags & 128))
            for (t = n.child; t !== null; ) {
              if (((a = fo(t)), a !== null)) {
                for (
                  n.flags |= 128,
                    Er(i, !1),
                    l = a.updateQueue,
                    l !== null && ((n.updateQueue = l), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    l = r,
                    r = n.child;
                  r !== null;

                )
                  (i = r),
                    (t = l),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = t),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (t = a.dependencies),
                        (i.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (r = r.sibling);
                return te(se, (se.current & 1) | 2), n.child;
              }
              t = t.sibling;
            }
          i.tail !== null &&
            me() > ur &&
            ((n.flags |= 128), (l = !0), Er(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!l)
          if (((t = fo(a)), t !== null)) {
            if (
              ((n.flags |= 128),
              (l = !0),
              (r = t.updateQueue),
              r !== null && ((n.updateQueue = r), (n.flags |= 4)),
              Er(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !ae)
            )
              return Me(n), null;
          } else
            2 * me() - i.renderingStartTime > ur &&
              r !== 1073741824 &&
              ((n.flags |= 128), (l = !0), Er(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = n.child), (n.child = a))
          : ((r = i.last),
            r !== null ? (r.sibling = a) : (n.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = me()),
          (n.sibling = null),
          (r = se.current),
          te(se, l ? (r & 1) | 2 : r & 1),
          n)
        : (Me(n), null);
    case 22:
    case 23:
      return (
        os(),
        (l = n.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== l && (n.flags |= 8192),
        l && n.mode & 1
          ? Ke & 1073741824 && (Me(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : Me(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, n.tag));
}
function em(t, n) {
  switch ((Aa(n), n.tag)) {
    case 1:
      return (
        We(n.type) && lo(),
        (t = n.flags),
        t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
      );
    case 3:
      return (
        ar(),
        le(Ve),
        le(ze),
        Ga(),
        (t = n.flags),
        t & 65536 && !(t & 128) ? ((n.flags = (t & -65537) | 128), n) : null
      );
    case 5:
      return Ka(n), null;
    case 13:
      if (
        (le(se), (t = n.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (n.alternate === null) throw Error(R(340));
        or();
      }
      return (
        (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
      );
    case 19:
      return le(se), null;
    case 4:
      return ar(), null;
    case 10:
      return Va(n.type._context), null;
    case 22:
    case 23:
      return os(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fl = !1,
  Fe = !1,
  tm = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function Kn(t, n) {
  var r = t.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (l) {
        fe(t, n, l);
      }
    else r.current = null;
}
function ia(t, n, r) {
  try {
    r();
  } catch (l) {
    fe(t, n, l);
  }
}
var ku = !1;
function nm(t, n) {
  if (((Vi = eo), (t = rd()), Oa(t))) {
    if ("selectionStart" in t)
      var r = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        r = ((r = t.ownerDocument) && r.defaultView) || window;
        var l = r.getSelection && r.getSelection();
        if (l && l.rangeCount !== 0) {
          r = l.anchorNode;
          var o = l.anchorOffset,
            i = l.focusNode;
          l = l.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var a = 0,
            u = -1,
            c = -1,
            d = 0,
            f = 0,
            m = t,
            v = null;
          t: for (;;) {
            for (
              var k;
              m !== r || (o !== 0 && m.nodeType !== 3) || (u = a + o),
                m !== i || (l !== 0 && m.nodeType !== 3) || (c = a + l),
                m.nodeType === 3 && (a += m.nodeValue.length),
                (k = m.firstChild) !== null;

            )
              (v = m), (m = k);
            for (;;) {
              if (m === t) break t;
              if (
                (v === r && ++d === o && (u = a),
                v === i && ++f === l && (c = a),
                (k = m.nextSibling) !== null)
              )
                break;
              (m = v), (v = m.parentNode);
            }
            m = k;
          }
          r = u === -1 || c === -1 ? null : { start: u, end: c };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Wi = { focusedElem: t, selectionRange: r }, eo = !1, F = n; F !== null; )
    if (((n = F), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = n), (F = t);
    else
      for (; F !== null; ) {
        n = F;
        try {
          var E = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var j = E.memoizedProps,
                    P = E.memoizedState,
                    p = n.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? j : dt(n.type, j),
                      P,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = n.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (N) {
          fe(n, n.return, N);
        }
        if (((t = n.sibling), t !== null)) {
          (t.return = n.return), (F = t);
          break;
        }
        F = n.return;
      }
  return (E = ku), (ku = !1), E;
}
function $r(t, n, r) {
  var l = n.updateQueue;
  if (((l = l !== null ? l.lastEffect : null), l !== null)) {
    var o = (l = l.next);
    do {
      if ((o.tag & t) === t) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && ia(n, r, i);
      }
      o = o.next;
    } while (o !== l);
  }
}
function _o(t, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var r = (n = n.next);
    do {
      if ((r.tag & t) === t) {
        var l = r.create;
        r.destroy = l();
      }
      r = r.next;
    } while (r !== n);
  }
}
function aa(t) {
  var n = t.ref;
  if (n !== null) {
    var r = t.stateNode;
    switch (t.tag) {
      case 5:
        t = r;
        break;
      default:
        t = r;
    }
    typeof n == "function" ? n(t) : (n.current = t);
  }
}
function ef(t) {
  var n = t.alternate;
  n !== null && ((t.alternate = null), ef(n)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((n = t.stateNode),
      n !== null &&
        (delete n[jt], delete n[el], delete n[Ki], delete n[Up], delete n[Ap])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function tf(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Nu(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || tf(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function sa(t, n, r) {
  var l = t.tag;
  if (l === 5 || l === 6)
    (t = t.stateNode),
      n
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(t, n)
          : r.insertBefore(t, n)
        : (r.nodeType === 8
            ? ((n = r.parentNode), n.insertBefore(t, r))
            : ((n = r), n.appendChild(t)),
          (r = r._reactRootContainer),
          r != null || n.onclick !== null || (n.onclick = ro));
  else if (l !== 4 && ((t = t.child), t !== null))
    for (sa(t, n, r), t = t.sibling; t !== null; ) sa(t, n, r), (t = t.sibling);
}
function ua(t, n, r) {
  var l = t.tag;
  if (l === 5 || l === 6)
    (t = t.stateNode), n ? r.insertBefore(t, n) : r.appendChild(t);
  else if (l !== 4 && ((t = t.child), t !== null))
    for (ua(t, n, r), t = t.sibling; t !== null; ) ua(t, n, r), (t = t.sibling);
}
var Re = null,
  ft = !1;
function Ht(t, n, r) {
  for (r = r.child; r !== null; ) nf(t, n, r), (r = r.sibling);
}
function nf(t, n, r) {
  if (Et && typeof Et.onCommitFiberUnmount == "function")
    try {
      Et.onCommitFiberUnmount(jo, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Fe || Kn(r, n);
    case 6:
      var l = Re,
        o = ft;
      (Re = null),
        Ht(t, n, r),
        (Re = l),
        (ft = o),
        Re !== null &&
          (ft
            ? ((t = Re),
              (r = r.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(r) : t.removeChild(r))
            : Re.removeChild(r.stateNode));
      break;
    case 18:
      Re !== null &&
        (ft
          ? ((t = Re),
            (r = r.stateNode),
            t.nodeType === 8
              ? si(t.parentNode, r)
              : t.nodeType === 1 && si(t, r),
            Yr(t))
          : si(Re, r.stateNode));
      break;
    case 4:
      (l = Re),
        (o = ft),
        (Re = r.stateNode.containerInfo),
        (ft = !0),
        Ht(t, n, r),
        (Re = l),
        (ft = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((l = r.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
      ) {
        o = l = l.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && ia(r, n, a),
            (o = o.next);
        } while (o !== l);
      }
      Ht(t, n, r);
      break;
    case 1:
      if (
        !Fe &&
        (Kn(r, n),
        (l = r.stateNode),
        typeof l.componentWillUnmount == "function")
      )
        try {
          (l.props = r.memoizedProps),
            (l.state = r.memoizedState),
            l.componentWillUnmount();
        } catch (u) {
          fe(r, n, u);
        }
      Ht(t, n, r);
      break;
    case 21:
      Ht(t, n, r);
      break;
    case 22:
      r.mode & 1
        ? ((Fe = (l = Fe) || r.memoizedState !== null), Ht(t, n, r), (Fe = l))
        : Ht(t, n, r);
      break;
    default:
      Ht(t, n, r);
  }
}
function Pu(t) {
  var n = t.updateQueue;
  if (n !== null) {
    t.updateQueue = null;
    var r = t.stateNode;
    r === null && (r = t.stateNode = new tm()),
      n.forEach(function (l) {
        var o = dm.bind(null, t, l);
        r.has(l) || (r.add(l), l.then(o, o));
      });
  }
}
function ct(t, n) {
  var r = n.deletions;
  if (r !== null)
    for (var l = 0; l < r.length; l++) {
      var o = r[l];
      try {
        var i = t,
          a = n,
          u = a;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Re = u.stateNode), (ft = !1);
              break e;
            case 3:
              (Re = u.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (Re = u.stateNode.containerInfo), (ft = !0);
              break e;
          }
          u = u.return;
        }
        if (Re === null) throw Error(R(160));
        nf(i, a, o), (Re = null), (ft = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (d) {
        fe(o, n, d);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) rf(n, t), (n = n.sibling);
}
function rf(t, n) {
  var r = t.alternate,
    l = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(n, t), wt(t), l & 4)) {
        try {
          $r(3, t, t.return), _o(3, t);
        } catch (j) {
          fe(t, t.return, j);
        }
        try {
          $r(5, t, t.return);
        } catch (j) {
          fe(t, t.return, j);
        }
      }
      break;
    case 1:
      ct(n, t), wt(t), l & 512 && r !== null && Kn(r, r.return);
      break;
    case 5:
      if (
        (ct(n, t),
        wt(t),
        l & 512 && r !== null && Kn(r, r.return),
        t.flags & 32)
      ) {
        var o = t.stateNode;
        try {
          Qr(o, "");
        } catch (j) {
          fe(t, t.return, j);
        }
      }
      if (l & 4 && ((o = t.stateNode), o != null)) {
        var i = t.memoizedProps,
          a = r !== null ? r.memoizedProps : i,
          u = t.type,
          c = t.updateQueue;
        if (((t.updateQueue = null), c !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && Cc(o, i),
              Mi(u, a);
            var d = Mi(u, i);
            for (a = 0; a < c.length; a += 2) {
              var f = c[a],
                m = c[a + 1];
              f === "style"
                ? Rc(o, m)
                : f === "dangerouslySetInnerHTML"
                  ? Pc(o, m)
                  : f === "children"
                    ? Qr(o, m)
                    : Ca(o, f, m, d);
            }
            switch (u) {
              case "input":
                Di(o, i);
                break;
              case "textarea":
                kc(o, i);
                break;
              case "select":
                var v = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var k = i.value;
                k != null
                  ? Zn(o, !!i.multiple, k, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Zn(o, !!i.multiple, i.defaultValue, !0)
                      : Zn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[el] = i;
          } catch (j) {
            fe(t, t.return, j);
          }
      }
      break;
    case 6:
      if ((ct(n, t), wt(t), l & 4)) {
        if (t.stateNode === null) throw Error(R(162));
        (o = t.stateNode), (i = t.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (j) {
          fe(t, t.return, j);
        }
      }
      break;
    case 3:
      if (
        (ct(n, t), wt(t), l & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Yr(n.containerInfo);
        } catch (j) {
          fe(t, t.return, j);
        }
      break;
    case 4:
      ct(n, t), wt(t);
      break;
    case 13:
      ct(n, t),
        wt(t),
        (o = t.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (rs = me())),
        l & 4 && Pu(t);
      break;
    case 22:
      if (
        ((f = r !== null && r.memoizedState !== null),
        t.mode & 1 ? ((Fe = (d = Fe) || f), ct(n, t), (Fe = d)) : ct(n, t),
        wt(t),
        l & 8192)
      ) {
        if (
          ((d = t.memoizedState !== null),
          (t.stateNode.isHidden = d) && !f && t.mode & 1)
        )
          for (F = t, f = t.child; f !== null; ) {
            for (m = F = f; F !== null; ) {
              switch (((v = F), (k = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $r(4, v, v.return);
                  break;
                case 1:
                  Kn(v, v.return);
                  var E = v.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    (l = v), (r = v.return);
                    try {
                      (n = l),
                        (E.props = n.memoizedProps),
                        (E.state = n.memoizedState),
                        E.componentWillUnmount();
                    } catch (j) {
                      fe(l, r, j);
                    }
                  }
                  break;
                case 5:
                  Kn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Ru(m);
                    continue;
                  }
              }
              k !== null ? ((k.return = v), (F = k)) : Ru(m);
            }
            f = f.sibling;
          }
        e: for (f = null, m = t; ; ) {
          if (m.tag === 5) {
            if (f === null) {
              f = m;
              try {
                (o = m.stateNode),
                  d
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (c = m.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (u.style.display = Dc("display", a)));
              } catch (j) {
                fe(t, t.return, j);
              }
            }
          } else if (m.tag === 6) {
            if (f === null)
              try {
                m.stateNode.nodeValue = d ? "" : m.memoizedProps;
              } catch (j) {
                fe(t, t.return, j);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === t) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === t) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === t) break e;
            f === m && (f = null), (m = m.return);
          }
          f === m && (f = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ct(n, t), wt(t), l & 4 && Pu(t);
      break;
    case 21:
      break;
    default:
      ct(n, t), wt(t);
  }
}
function wt(t) {
  var n = t.flags;
  if (n & 2) {
    try {
      e: {
        for (var r = t.return; r !== null; ) {
          if (tf(r)) {
            var l = r;
            break e;
          }
          r = r.return;
        }
        throw Error(R(160));
      }
      switch (l.tag) {
        case 5:
          var o = l.stateNode;
          l.flags & 32 && (Qr(o, ""), (l.flags &= -33));
          var i = Nu(t);
          ua(t, i, o);
          break;
        case 3:
        case 4:
          var a = l.stateNode.containerInfo,
            u = Nu(t);
          sa(t, u, a);
          break;
        default:
          throw Error(R(161));
      }
    } catch (c) {
      fe(t, t.return, c);
    }
    t.flags &= -3;
  }
  n & 4096 && (t.flags &= -4097);
}
function rm(t, n, r) {
  (F = t), lf(t);
}
function lf(t, n, r) {
  for (var l = (t.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child;
    if (o.tag === 22 && l) {
      var a = o.memoizedState !== null || Fl;
      if (!a) {
        var u = o.alternate,
          c = (u !== null && u.memoizedState !== null) || Fe;
        u = Fl;
        var d = Fe;
        if (((Fl = a), (Fe = c) && !d))
          for (F = o; F !== null; )
            (a = F),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? _u(o)
                : c !== null
                  ? ((c.return = a), (F = c))
                  : _u(o);
        for (; i !== null; ) (F = i), lf(i), (i = i.sibling);
        (F = o), (Fl = u), (Fe = d);
      }
      Du(t);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : Du(t);
  }
}
function Du(t) {
  for (; F !== null; ) {
    var n = F;
    if (n.flags & 8772) {
      var r = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Fe || _o(5, n);
              break;
            case 1:
              var l = n.stateNode;
              if (n.flags & 4 && !Fe)
                if (r === null) l.componentDidMount();
                else {
                  var o =
                    n.elementType === n.type
                      ? r.memoizedProps
                      : dt(n.type, r.memoizedProps);
                  l.componentDidUpdate(
                    o,
                    r.memoizedState,
                    l.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = n.updateQueue;
              i !== null && du(n, i, l);
              break;
            case 3:
              var a = n.updateQueue;
              if (a !== null) {
                if (((r = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      r = n.child.stateNode;
                      break;
                    case 1:
                      r = n.child.stateNode;
                  }
                du(n, a, r);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (r === null && n.flags & 4) {
                r = u;
                var c = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && r.focus();
                    break;
                  case "img":
                    c.src && (r.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var d = n.alternate;
                if (d !== null) {
                  var f = d.memoizedState;
                  if (f !== null) {
                    var m = f.dehydrated;
                    m !== null && Yr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Fe || (n.flags & 512 && aa(n));
      } catch (v) {
        fe(n, n.return, v);
      }
    }
    if (n === t) {
      F = null;
      break;
    }
    if (((r = n.sibling), r !== null)) {
      (r.return = n.return), (F = r);
      break;
    }
    F = n.return;
  }
}
function Ru(t) {
  for (; F !== null; ) {
    var n = F;
    if (n === t) {
      F = null;
      break;
    }
    var r = n.sibling;
    if (r !== null) {
      (r.return = n.return), (F = r);
      break;
    }
    F = n.return;
  }
}
function _u(t) {
  for (; F !== null; ) {
    var n = F;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var r = n.return;
          try {
            _o(4, n);
          } catch (c) {
            fe(n, r, c);
          }
          break;
        case 1:
          var l = n.stateNode;
          if (typeof l.componentDidMount == "function") {
            var o = n.return;
            try {
              l.componentDidMount();
            } catch (c) {
              fe(n, o, c);
            }
          }
          var i = n.return;
          try {
            aa(n);
          } catch (c) {
            fe(n, i, c);
          }
          break;
        case 5:
          var a = n.return;
          try {
            aa(n);
          } catch (c) {
            fe(n, a, c);
          }
      }
    } catch (c) {
      fe(n, n.return, c);
    }
    if (n === t) {
      F = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (F = u);
      break;
    }
    F = n.return;
  }
}
var lm = Math.ceil,
  mo = zt.ReactCurrentDispatcher,
  ts = zt.ReactCurrentOwner,
  ot = zt.ReactCurrentBatchConfig,
  G = 0,
  Ne = null,
  xe = null,
  _e = 0,
  Ke = 0,
  Gn = sn(0),
  je = 0,
  il = null,
  kn = 0,
  To = 0,
  ns = 0,
  Br = null,
  Be = null,
  rs = 0,
  ur = 1 / 0,
  kt = null,
  yo = !1,
  ca = null,
  tn = null,
  zl = !1,
  Yt = null,
  vo = 0,
  Hr = 0,
  da = null,
  Jl = -1,
  Kl = 0;
function Ue() {
  return G & 6 ? me() : Jl !== -1 ? Jl : (Jl = me());
}
function nn(t) {
  return t.mode & 1
    ? G & 2 && _e !== 0
      ? _e & -_e
      : Bp.transition !== null
        ? (Kl === 0 && (Kl = Bc()), Kl)
        : ((t = Z),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Gc(t.type))),
          t)
    : 1;
}
function yt(t, n, r, l) {
  if (50 < Hr) throw ((Hr = 0), (da = null), Error(R(185)));
  dl(t, r, l),
    (!(G & 2) || t !== Ne) &&
      (t === Ne && (!(G & 2) && (To |= r), je === 4 && Kt(t, _e)),
      Qe(t, l),
      r === 1 && G === 0 && !(n.mode & 1) && ((ur = me() + 500), Po && un()));
}
function Qe(t, n) {
  var r = t.callbackNode;
  Bh(t, n);
  var l = bl(t, t === Ne ? _e : 0);
  if (l === 0)
    r !== null && As(r), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((n = l & -l), t.callbackPriority !== n)) {
    if ((r != null && As(r), n === 1))
      t.tag === 0 ? $p(Tu.bind(null, t)) : hd(Tu.bind(null, t)),
        Ip(function () {
          !(G & 6) && un();
        }),
        (r = null);
    else {
      switch (Hc(l)) {
        case 1:
          r = Ra;
          break;
        case 4:
          r = Ac;
          break;
        case 16:
          r = ql;
          break;
        case 536870912:
          r = $c;
          break;
        default:
          r = ql;
      }
      r = hf(r, of.bind(null, t));
    }
    (t.callbackPriority = n), (t.callbackNode = r);
  }
}
function of(t, n) {
  if (((Jl = -1), (Kl = 0), G & 6)) throw Error(R(327));
  var r = t.callbackNode;
  if (nr() && t.callbackNode !== r) return null;
  var l = bl(t, t === Ne ? _e : 0);
  if (l === 0) return null;
  if (l & 30 || l & t.expiredLanes || n) n = go(t, l);
  else {
    n = l;
    var o = G;
    G |= 2;
    var i = sf();
    (Ne !== t || _e !== n) && ((kt = null), (ur = me() + 500), wn(t, n));
    do
      try {
        am();
        break;
      } catch (u) {
        af(t, u);
      }
    while (!0);
    Ha(),
      (mo.current = i),
      (G = o),
      xe !== null ? (n = 0) : ((Ne = null), (_e = 0), (n = je));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((o = Ui(t)), o !== 0 && ((l = o), (n = fa(t, o)))), n === 1)
    )
      throw ((r = il), wn(t, 0), Kt(t, l), Qe(t, me()), r);
    if (n === 6) Kt(t, l);
    else {
      if (
        ((o = t.current.alternate),
        !(l & 30) &&
          !om(o) &&
          ((n = go(t, l)),
          n === 2 && ((i = Ui(t)), i !== 0 && ((l = i), (n = fa(t, i)))),
          n === 1))
      )
        throw ((r = il), wn(t, 0), Kt(t, l), Qe(t, me()), r);
      switch (((t.finishedWork = o), (t.finishedLanes = l), n)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          pn(t, Be, kt);
          break;
        case 3:
          if (
            (Kt(t, l), (l & 130023424) === l && ((n = rs + 500 - me()), 10 < n))
          ) {
            if (bl(t, 0) !== 0) break;
            if (((o = t.suspendedLanes), (o & l) !== l)) {
              Ue(), (t.pingedLanes |= t.suspendedLanes & o);
              break;
            }
            t.timeoutHandle = Ji(pn.bind(null, t, Be, kt), n);
            break;
          }
          pn(t, Be, kt);
          break;
        case 4:
          if ((Kt(t, l), (l & 4194240) === l)) break;
          for (n = t.eventTimes, o = -1; 0 < l; ) {
            var a = 31 - mt(l);
            (i = 1 << a), (a = n[a]), a > o && (o = a), (l &= ~i);
          }
          if (
            ((l = o),
            (l = me() - l),
            (l =
              (120 > l
                ? 120
                : 480 > l
                  ? 480
                  : 1080 > l
                    ? 1080
                    : 1920 > l
                      ? 1920
                      : 3e3 > l
                        ? 3e3
                        : 4320 > l
                          ? 4320
                          : 1960 * lm(l / 1960)) - l),
            10 < l)
          ) {
            t.timeoutHandle = Ji(pn.bind(null, t, Be, kt), l);
            break;
          }
          pn(t, Be, kt);
          break;
        case 5:
          pn(t, Be, kt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Qe(t, me()), t.callbackNode === r ? of.bind(null, t) : null;
}
function fa(t, n) {
  var r = Br;
  return (
    t.current.memoizedState.isDehydrated && (wn(t, n).flags |= 256),
    (t = go(t, n)),
    t !== 2 && ((n = Be), (Be = r), n !== null && ha(n)),
    t
  );
}
function ha(t) {
  Be === null ? (Be = t) : Be.push.apply(Be, t);
}
function om(t) {
  for (var n = t; ; ) {
    if (n.flags & 16384) {
      var r = n.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var l = 0; l < r.length; l++) {
          var o = r[l],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!vt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = n.child), n.subtreeFlags & 16384 && r !== null))
      (r.return = n), (n = r);
    else {
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function Kt(t, n) {
  for (
    n &= ~ns,
      n &= ~To,
      t.suspendedLanes |= n,
      t.pingedLanes &= ~n,
      t = t.expirationTimes;
    0 < n;

  ) {
    var r = 31 - mt(n),
      l = 1 << r;
    (t[r] = -1), (n &= ~l);
  }
}
function Tu(t) {
  if (G & 6) throw Error(R(327));
  nr();
  var n = bl(t, 0);
  if (!(n & 1)) return Qe(t, me()), null;
  var r = go(t, n);
  if (t.tag !== 0 && r === 2) {
    var l = Ui(t);
    l !== 0 && ((n = l), (r = fa(t, l)));
  }
  if (r === 1) throw ((r = il), wn(t, 0), Kt(t, n), Qe(t, me()), r);
  if (r === 6) throw Error(R(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = n),
    pn(t, Be, kt),
    Qe(t, me()),
    null
  );
}
function ls(t, n) {
  var r = G;
  G |= 1;
  try {
    return t(n);
  } finally {
    (G = r), G === 0 && ((ur = me() + 500), Po && un());
  }
}
function Nn(t) {
  Yt !== null && Yt.tag === 0 && !(G & 6) && nr();
  var n = G;
  G |= 1;
  var r = ot.transition,
    l = Z;
  try {
    if (((ot.transition = null), (Z = 1), t)) return t();
  } finally {
    (Z = l), (ot.transition = r), (G = n), !(G & 6) && un();
  }
}
function os() {
  (Ke = Gn.current), le(Gn);
}
function wn(t, n) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var r = t.timeoutHandle;
  if ((r !== -1 && ((t.timeoutHandle = -1), zp(r)), xe !== null))
    for (r = xe.return; r !== null; ) {
      var l = r;
      switch ((Aa(l), l.tag)) {
        case 1:
          (l = l.type.childContextTypes), l != null && lo();
          break;
        case 3:
          ar(), le(Ve), le(ze), Ga();
          break;
        case 5:
          Ka(l);
          break;
        case 4:
          ar();
          break;
        case 13:
          le(se);
          break;
        case 19:
          le(se);
          break;
        case 10:
          Va(l.type._context);
          break;
        case 22:
        case 23:
          os();
      }
      r = r.return;
    }
  if (
    ((Ne = t),
    (xe = t = rn(t.current, null)),
    (_e = Ke = n),
    (je = 0),
    (il = null),
    (ns = To = kn = 0),
    (Be = Br = null),
    yn !== null)
  ) {
    for (n = 0; n < yn.length; n++)
      if (((r = yn[n]), (l = r.interleaved), l !== null)) {
        r.interleaved = null;
        var o = l.next,
          i = r.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (l.next = a);
        }
        r.pending = l;
      }
    yn = null;
  }
  return t;
}
function af(t, n) {
  do {
    var r = xe;
    try {
      if ((Ha(), (Vl.current = po), ho)) {
        for (var l = ue.memoizedState; l !== null; ) {
          var o = l.queue;
          o !== null && (o.pending = null), (l = l.next);
        }
        ho = !1;
      }
      if (
        ((Cn = 0),
        (ke = Se = ue = null),
        (Ar = !1),
        (rl = 0),
        (ts.current = null),
        r === null || r.return === null)
      ) {
        (je = 1), (il = n), (xe = null);
        break;
      }
      e: {
        var i = t,
          a = r.return,
          u = r,
          c = n;
        if (
          ((n = _e),
          (u.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var d = c,
            f = u,
            m = f.tag;
          if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = f.alternate;
            v
              ? ((f.updateQueue = v.updateQueue),
                (f.memoizedState = v.memoizedState),
                (f.lanes = v.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var k = gu(a);
          if (k !== null) {
            (k.flags &= -257),
              xu(k, a, u, i, n),
              k.mode & 1 && vu(i, d, n),
              (n = k),
              (c = d);
            var E = n.updateQueue;
            if (E === null) {
              var j = new Set();
              j.add(c), (n.updateQueue = j);
            } else E.add(c);
            break e;
          } else {
            if (!(n & 1)) {
              vu(i, d, n), is();
              break e;
            }
            c = Error(R(426));
          }
        } else if (ae && u.mode & 1) {
          var P = gu(a);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              xu(P, a, u, i, n),
              $a(sr(c, u));
            break e;
          }
        }
        (i = c = sr(c, u)),
          je !== 4 && (je = 2),
          Br === null ? (Br = [i]) : Br.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var p = Vd(i, c, n);
              cu(i, p);
              break e;
            case 1:
              u = c;
              var h = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (tn === null || !tn.has(y))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var N = Wd(i, u, n);
                cu(i, N);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      cf(r);
    } catch (_) {
      (n = _), xe === r && r !== null && (xe = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function sf() {
  var t = mo.current;
  return (mo.current = po), t === null ? po : t;
}
function is() {
  (je === 0 || je === 3 || je === 2) && (je = 4),
    Ne === null || (!(kn & 268435455) && !(To & 268435455)) || Kt(Ne, _e);
}
function go(t, n) {
  var r = G;
  G |= 2;
  var l = sf();
  (Ne !== t || _e !== n) && ((kt = null), wn(t, n));
  do
    try {
      im();
      break;
    } catch (o) {
      af(t, o);
    }
  while (!0);
  if ((Ha(), (G = r), (mo.current = l), xe !== null)) throw Error(R(261));
  return (Ne = null), (_e = 0), je;
}
function im() {
  for (; xe !== null; ) uf(xe);
}
function am() {
  for (; xe !== null && !Lh(); ) uf(xe);
}
function uf(t) {
  var n = ff(t.alternate, t, Ke);
  (t.memoizedProps = t.pendingProps),
    n === null ? cf(t) : (xe = n),
    (ts.current = null);
}
function cf(t) {
  var n = t;
  do {
    var r = n.alternate;
    if (((t = n.return), n.flags & 32768)) {
      if (((r = em(r, n)), r !== null)) {
        (r.flags &= 32767), (xe = r);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (je = 6), (xe = null);
        return;
      }
    } else if (((r = bp(r, n, Ke)), r !== null)) {
      xe = r;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      xe = n;
      return;
    }
    xe = n = t;
  } while (n !== null);
  je === 0 && (je = 5);
}
function pn(t, n, r) {
  var l = Z,
    o = ot.transition;
  try {
    (ot.transition = null), (Z = 1), sm(t, n, r, l);
  } finally {
    (ot.transition = o), (Z = l);
  }
  return null;
}
function sm(t, n, r, l) {
  do nr();
  while (Yt !== null);
  if (G & 6) throw Error(R(327));
  r = t.finishedWork;
  var o = t.finishedLanes;
  if (r === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), r === t.current))
    throw Error(R(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (Hh(t, i),
    t === Ne && ((xe = Ne = null), (_e = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      zl ||
      ((zl = !0),
      hf(ql, function () {
        return nr(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = ot.transition), (ot.transition = null);
    var a = Z;
    Z = 1;
    var u = G;
    (G |= 4),
      (ts.current = null),
      nm(t, r),
      rf(r, t),
      Dp(Wi),
      (eo = !!Vi),
      (Wi = Vi = null),
      (t.current = r),
      rm(r),
      Mh(),
      (G = u),
      (Z = a),
      (ot.transition = i);
  } else t.current = r;
  if (
    (zl && ((zl = !1), (Yt = t), (vo = o)),
    (i = t.pendingLanes),
    i === 0 && (tn = null),
    Ih(r.stateNode),
    Qe(t, me()),
    n !== null)
  )
    for (l = t.onRecoverableError, r = 0; r < n.length; r++)
      (o = n[r]), l(o.value, { componentStack: o.stack, digest: o.digest });
  if (yo) throw ((yo = !1), (t = ca), (ca = null), t);
  return (
    vo & 1 && t.tag !== 0 && nr(),
    (i = t.pendingLanes),
    i & 1 ? (t === da ? Hr++ : ((Hr = 0), (da = t))) : (Hr = 0),
    un(),
    null
  );
}
function nr() {
  if (Yt !== null) {
    var t = Hc(vo),
      n = ot.transition,
      r = Z;
    try {
      if (((ot.transition = null), (Z = 16 > t ? 16 : t), Yt === null))
        var l = !1;
      else {
        if (((t = Yt), (Yt = null), (vo = 0), G & 6)) throw Error(R(331));
        var o = G;
        for (G |= 4, F = t.current; F !== null; ) {
          var i = F,
            a = i.child;
          if (F.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var c = 0; c < u.length; c++) {
                var d = u[c];
                for (F = d; F !== null; ) {
                  var f = F;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $r(8, f, i);
                  }
                  var m = f.child;
                  if (m !== null) (m.return = f), (F = m);
                  else
                    for (; F !== null; ) {
                      f = F;
                      var v = f.sibling,
                        k = f.return;
                      if ((ef(f), f === d)) {
                        F = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = k), (F = v);
                        break;
                      }
                      F = k;
                    }
                }
              }
              var E = i.alternate;
              if (E !== null) {
                var j = E.child;
                if (j !== null) {
                  E.child = null;
                  do {
                    var P = j.sibling;
                    (j.sibling = null), (j = P);
                  } while (j !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (F = a);
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $r(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (F = p);
                break e;
              }
              F = i.return;
            }
        }
        var h = t.current;
        for (F = h; F !== null; ) {
          a = F;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (F = y);
          else
            e: for (a = h; F !== null; ) {
              if (((u = F), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(9, u);
                  }
                } catch (_) {
                  fe(u, u.return, _);
                }
              if (u === a) {
                F = null;
                break e;
              }
              var N = u.sibling;
              if (N !== null) {
                (N.return = u.return), (F = N);
                break e;
              }
              F = u.return;
            }
        }
        if (
          ((G = o), un(), Et && typeof Et.onPostCommitFiberRoot == "function")
        )
          try {
            Et.onPostCommitFiberRoot(jo, t);
          } catch {}
        l = !0;
      }
      return l;
    } finally {
      (Z = r), (ot.transition = n);
    }
  }
  return !1;
}
function Lu(t, n, r) {
  (n = sr(r, n)),
    (n = Vd(t, n, 1)),
    (t = en(t, n, 1)),
    (n = Ue()),
    t !== null && (dl(t, 1, n), Qe(t, n));
}
function fe(t, n, r) {
  if (t.tag === 3) Lu(t, t, r);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Lu(n, t, r);
        break;
      } else if (n.tag === 1) {
        var l = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof l.componentDidCatch == "function" &&
            (tn === null || !tn.has(l)))
        ) {
          (t = sr(r, t)),
            (t = Wd(n, t, 1)),
            (n = en(n, t, 1)),
            (t = Ue()),
            n !== null && (dl(n, 1, t), Qe(n, t));
          break;
        }
      }
      n = n.return;
    }
}
function um(t, n, r) {
  var l = t.pingCache;
  l !== null && l.delete(n),
    (n = Ue()),
    (t.pingedLanes |= t.suspendedLanes & r),
    Ne === t &&
      (_e & r) === r &&
      (je === 4 || (je === 3 && (_e & 130023424) === _e && 500 > me() - rs)
        ? wn(t, 0)
        : (ns |= r)),
    Qe(t, n);
}
function df(t, n) {
  n === 0 &&
    (t.mode & 1
      ? ((n = kl), (kl <<= 1), !(kl & 130023424) && (kl = 4194304))
      : (n = 1));
  var r = Ue();
  (t = Mt(t, n)), t !== null && (dl(t, n, r), Qe(t, r));
}
function cm(t) {
  var n = t.memoizedState,
    r = 0;
  n !== null && (r = n.retryLane), df(t, r);
}
function dm(t, n) {
  var r = 0;
  switch (t.tag) {
    case 13:
      var l = t.stateNode,
        o = t.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      l = t.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  l !== null && l.delete(n), df(t, r);
}
var ff;
ff = function (t, n, r) {
  if (t !== null)
    if (t.memoizedProps !== n.pendingProps || Ve.current) He = !0;
    else {
      if (!(t.lanes & r) && !(n.flags & 128)) return (He = !1), qp(t, n, r);
      He = !!(t.flags & 131072);
    }
  else (He = !1), ae && n.flags & 1048576 && pd(n, ao, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var l = n.type;
      Ql(t, n), (t = n.pendingProps);
      var o = lr(n, ze.current);
      tr(n, r), (o = Xa(null, n, l, t, o, r));
      var i = Za();
      return (
        (n.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            We(l) ? ((i = !0), oo(n)) : (i = !1),
            (n.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Qa(n),
            (o.updater = Do),
            (n.stateNode = o),
            (o._reactInternals = n),
            bi(n, l, t, r),
            (n = na(null, n, l, !0, i, r)))
          : ((n.tag = 0), ae && i && Ua(n), Oe(null, n, o, r), (n = n.child)),
        n
      );
    case 16:
      l = n.elementType;
      e: {
        switch (
          (Ql(t, n),
          (t = n.pendingProps),
          (o = l._init),
          (l = o(l._payload)),
          (n.type = l),
          (o = n.tag = hm(l)),
          (t = dt(l, t)),
          o)
        ) {
          case 0:
            n = ta(null, n, l, t, r);
            break e;
          case 1:
            n = ju(null, n, l, t, r);
            break e;
          case 11:
            n = wu(null, n, l, t, r);
            break e;
          case 14:
            n = Su(null, n, l, dt(l.type, t), r);
            break e;
        }
        throw Error(R(306, l, ""));
      }
      return n;
    case 0:
      return (
        (l = n.type),
        (o = n.pendingProps),
        (o = n.elementType === l ? o : dt(l, o)),
        ta(t, n, l, o, r)
      );
    case 1:
      return (
        (l = n.type),
        (o = n.pendingProps),
        (o = n.elementType === l ? o : dt(l, o)),
        ju(t, n, l, o, r)
      );
    case 3:
      e: {
        if ((Gd(n), t === null)) throw Error(R(387));
        (l = n.pendingProps),
          (i = n.memoizedState),
          (o = i.element),
          gd(t, n),
          co(n, l, null, r);
        var a = n.memoizedState;
        if (((l = a.element), i.isDehydrated))
          if (
            ((i = {
              element: l,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (o = sr(Error(R(423)), n)), (n = Eu(t, n, l, r, o));
            break e;
          } else if (l !== o) {
            (o = sr(Error(R(424)), n)), (n = Eu(t, n, l, r, o));
            break e;
          } else
            for (
              Ge = bt(n.stateNode.containerInfo.firstChild),
                Ye = n,
                ae = !0,
                pt = null,
                r = jd(n, null, l, r),
                n.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((or(), l === o)) {
            n = Ft(t, n, r);
            break e;
          }
          Oe(t, n, l, r);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        Ed(n),
        t === null && Xi(n),
        (l = n.type),
        (o = n.pendingProps),
        (i = t !== null ? t.memoizedProps : null),
        (a = o.children),
        Qi(l, o) ? (a = null) : i !== null && Qi(l, i) && (n.flags |= 32),
        Kd(t, n),
        Oe(t, n, a, r),
        n.child
      );
    case 6:
      return t === null && Xi(n), null;
    case 13:
      return Yd(t, n, r);
    case 4:
      return (
        Ja(n, n.stateNode.containerInfo),
        (l = n.pendingProps),
        t === null ? (n.child = ir(n, null, l, r)) : Oe(t, n, l, r),
        n.child
      );
    case 11:
      return (
        (l = n.type),
        (o = n.pendingProps),
        (o = n.elementType === l ? o : dt(l, o)),
        wu(t, n, l, o, r)
      );
    case 7:
      return Oe(t, n, n.pendingProps, r), n.child;
    case 8:
      return Oe(t, n, n.pendingProps.children, r), n.child;
    case 12:
      return Oe(t, n, n.pendingProps.children, r), n.child;
    case 10:
      e: {
        if (
          ((l = n.type._context),
          (o = n.pendingProps),
          (i = n.memoizedProps),
          (a = o.value),
          te(so, l._currentValue),
          (l._currentValue = a),
          i !== null)
        )
          if (vt(i.value, a)) {
            if (i.children === o.children && !Ve.current) {
              n = Ft(t, n, r);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                a = i.child;
                for (var c = u.firstContext; c !== null; ) {
                  if (c.context === l) {
                    if (i.tag === 1) {
                      (c = Rt(-1, r & -r)), (c.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var f = d.pending;
                        f === null
                          ? (c.next = c)
                          : ((c.next = f.next), (f.next = c)),
                          (d.pending = c);
                      }
                    }
                    (i.lanes |= r),
                      (c = i.alternate),
                      c !== null && (c.lanes |= r),
                      Zi(i.return, r, n),
                      (u.lanes |= r);
                    break;
                  }
                  c = c.next;
                }
              } else if (i.tag === 10) a = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(R(341));
                (a.lanes |= r),
                  (u = a.alternate),
                  u !== null && (u.lanes |= r),
                  Zi(a, r, n),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === n) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Oe(t, n, o.children, r), (n = n.child);
      }
      return n;
    case 9:
      return (
        (o = n.type),
        (l = n.pendingProps.children),
        tr(n, r),
        (o = it(o)),
        (l = l(o)),
        (n.flags |= 1),
        Oe(t, n, l, r),
        n.child
      );
    case 14:
      return (
        (l = n.type),
        (o = dt(l, n.pendingProps)),
        (o = dt(l.type, o)),
        Su(t, n, l, o, r)
      );
    case 15:
      return Qd(t, n, n.type, n.pendingProps, r);
    case 17:
      return (
        (l = n.type),
        (o = n.pendingProps),
        (o = n.elementType === l ? o : dt(l, o)),
        Ql(t, n),
        (n.tag = 1),
        We(l) ? ((t = !0), oo(n)) : (t = !1),
        tr(n, r),
        wd(n, l, o),
        bi(n, l, o, r),
        na(null, n, l, !0, t, r)
      );
    case 19:
      return Xd(t, n, r);
    case 22:
      return Jd(t, n, r);
  }
  throw Error(R(156, n.tag));
};
function hf(t, n) {
  return Uc(t, n);
}
function fm(t, n, r, l) {
  (this.tag = t),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = l),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function lt(t, n, r, l) {
  return new fm(t, n, r, l);
}
function as(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function hm(t) {
  if (typeof t == "function") return as(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Na)) return 11;
    if (t === Pa) return 14;
  }
  return 2;
}
function rn(t, n) {
  var r = t.alternate;
  return (
    r === null
      ? ((r = lt(t.tag, n, t.key, t.mode)),
        (r.elementType = t.elementType),
        (r.type = t.type),
        (r.stateNode = t.stateNode),
        (r.alternate = t),
        (t.alternate = r))
      : ((r.pendingProps = n),
        (r.type = t.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = t.flags & 14680064),
    (r.childLanes = t.childLanes),
    (r.lanes = t.lanes),
    (r.child = t.child),
    (r.memoizedProps = t.memoizedProps),
    (r.memoizedState = t.memoizedState),
    (r.updateQueue = t.updateQueue),
    (n = t.dependencies),
    (r.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (r.sibling = t.sibling),
    (r.index = t.index),
    (r.ref = t.ref),
    r
  );
}
function Gl(t, n, r, l, o, i) {
  var a = 2;
  if (((l = t), typeof t == "function")) as(t) && (a = 1);
  else if (typeof t == "string") a = 5;
  else
    e: switch (t) {
      case Un:
        return Sn(r.children, o, i, n);
      case ka:
        (a = 8), (o |= 8);
        break;
      case Ei:
        return (
          (t = lt(12, r, n, o | 2)), (t.elementType = Ei), (t.lanes = i), t
        );
      case Ci:
        return (t = lt(13, r, n, o)), (t.elementType = Ci), (t.lanes = i), t;
      case ki:
        return (t = lt(19, r, n, o)), (t.elementType = ki), (t.lanes = i), t;
      case Sc:
        return Lo(r, o, i, n);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case xc:
              a = 10;
              break e;
            case wc:
              a = 9;
              break e;
            case Na:
              a = 11;
              break e;
            case Pa:
              a = 14;
              break e;
            case Wt:
              (a = 16), (l = null);
              break e;
          }
        throw Error(R(130, t == null ? t : typeof t, ""));
    }
  return (
    (n = lt(a, r, n, o)), (n.elementType = t), (n.type = l), (n.lanes = i), n
  );
}
function Sn(t, n, r, l) {
  return (t = lt(7, t, l, n)), (t.lanes = r), t;
}
function Lo(t, n, r, l) {
  return (
    (t = lt(22, t, l, n)),
    (t.elementType = Sc),
    (t.lanes = r),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function yi(t, n, r) {
  return (t = lt(6, t, null, n)), (t.lanes = r), t;
}
function vi(t, n, r) {
  return (
    (n = lt(4, t.children !== null ? t.children : [], t.key, n)),
    (n.lanes = r),
    (n.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    n
  );
}
function pm(t, n, r, l, o) {
  (this.tag = n),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zo(0)),
    (this.expirationTimes = Zo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zo(0)),
    (this.identifierPrefix = l),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ss(t, n, r, l, o, i, a, u, c) {
  return (
    (t = new pm(t, n, r, u, c)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = lt(3, null, null, n)),
    (t.current = i),
    (i.stateNode = t),
    (i.memoizedState = {
      element: l,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qa(i),
    t
  );
}
function mm(t, n, r) {
  var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: l == null ? null : "" + l,
    children: t,
    containerInfo: n,
    implementation: r,
  };
}
function pf(t) {
  if (!t) return on;
  t = t._reactInternals;
  e: {
    if (_n(t) !== t || t.tag !== 1) throw Error(R(170));
    var n = t;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (We(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(R(171));
  }
  if (t.tag === 1) {
    var r = t.type;
    if (We(r)) return fd(t, r, n);
  }
  return n;
}
function mf(t, n, r, l, o, i, a, u, c) {
  return (
    (t = ss(r, l, !0, t, o, i, a, u, c)),
    (t.context = pf(null)),
    (r = t.current),
    (l = Ue()),
    (o = nn(r)),
    (i = Rt(l, o)),
    (i.callback = n ?? null),
    en(r, i, o),
    (t.current.lanes = o),
    dl(t, o, l),
    Qe(t, l),
    t
  );
}
function Mo(t, n, r, l) {
  var o = n.current,
    i = Ue(),
    a = nn(o);
  return (
    (r = pf(r)),
    n.context === null ? (n.context = r) : (n.pendingContext = r),
    (n = Rt(i, a)),
    (n.payload = { element: t }),
    (l = l === void 0 ? null : l),
    l !== null && (n.callback = l),
    (t = en(o, n, a)),
    t !== null && (yt(t, o, a, i), Hl(t, o, a)),
    a
  );
}
function xo(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Mu(t, n) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var r = t.retryLane;
    t.retryLane = r !== 0 && r < n ? r : n;
  }
}
function us(t, n) {
  Mu(t, n), (t = t.alternate) && Mu(t, n);
}
function ym() {
  return null;
}
var yf =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function cs(t) {
  this._internalRoot = t;
}
Fo.prototype.render = cs.prototype.render = function (t) {
  var n = this._internalRoot;
  if (n === null) throw Error(R(409));
  Mo(t, n, null, null);
};
Fo.prototype.unmount = cs.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var n = t.containerInfo;
    Nn(function () {
      Mo(null, t, null, null);
    }),
      (n[Lt] = null);
  }
};
function Fo(t) {
  this._internalRoot = t;
}
Fo.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var n = Qc();
    t = { blockedOn: null, target: t, priority: n };
    for (var r = 0; r < Jt.length && n !== 0 && n < Jt[r].priority; r++);
    Jt.splice(r, 0, t), r === 0 && Kc(t);
  }
};
function ds(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function zo(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Fu() {}
function vm(t, n, r, l, o) {
  if (o) {
    if (typeof l == "function") {
      var i = l;
      l = function () {
        var d = xo(a);
        i.call(d);
      };
    }
    var a = mf(n, l, t, 0, null, !1, !1, "", Fu);
    return (
      (t._reactRootContainer = a),
      (t[Lt] = a.current),
      qr(t.nodeType === 8 ? t.parentNode : t),
      Nn(),
      a
    );
  }
  for (; (o = t.lastChild); ) t.removeChild(o);
  if (typeof l == "function") {
    var u = l;
    l = function () {
      var d = xo(c);
      u.call(d);
    };
  }
  var c = ss(t, 0, !1, null, null, !1, !1, "", Fu);
  return (
    (t._reactRootContainer = c),
    (t[Lt] = c.current),
    qr(t.nodeType === 8 ? t.parentNode : t),
    Nn(function () {
      Mo(n, c, r, l);
    }),
    c
  );
}
function Io(t, n, r, l, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var u = o;
      o = function () {
        var c = xo(a);
        u.call(c);
      };
    }
    Mo(n, a, t, o);
  } else a = vm(r, n, t, o, l);
  return xo(a);
}
Vc = function (t) {
  switch (t.tag) {
    case 3:
      var n = t.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var r = Lr(n.pendingLanes);
        r !== 0 &&
          (_a(n, r | 1), Qe(n, me()), !(G & 6) && ((ur = me() + 500), un()));
      }
      break;
    case 13:
      Nn(function () {
        var l = Mt(t, 1);
        if (l !== null) {
          var o = Ue();
          yt(l, t, 1, o);
        }
      }),
        us(t, 1);
  }
};
Ta = function (t) {
  if (t.tag === 13) {
    var n = Mt(t, 134217728);
    if (n !== null) {
      var r = Ue();
      yt(n, t, 134217728, r);
    }
    us(t, 134217728);
  }
};
Wc = function (t) {
  if (t.tag === 13) {
    var n = nn(t),
      r = Mt(t, n);
    if (r !== null) {
      var l = Ue();
      yt(r, t, n, l);
    }
    us(t, n);
  }
};
Qc = function () {
  return Z;
};
Jc = function (t, n) {
  var r = Z;
  try {
    return (Z = t), n();
  } finally {
    Z = r;
  }
};
zi = function (t, n, r) {
  switch (n) {
    case "input":
      if ((Di(t, r), (n = r.name), r.type === "radio" && n != null)) {
        for (r = t; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]',
          ),
            n = 0;
          n < r.length;
          n++
        ) {
          var l = r[n];
          if (l !== t && l.form === t.form) {
            var o = No(l);
            if (!o) throw Error(R(90));
            Ec(l), Di(l, o);
          }
        }
      }
      break;
    case "textarea":
      kc(t, r);
      break;
    case "select":
      (n = r.value), n != null && Zn(t, !!r.multiple, n, !1);
  }
};
Lc = ls;
Mc = Nn;
var gm = { usingClientEntryPoint: !1, Events: [hl, Hn, No, _c, Tc, ls] },
  Cr = {
    findFiberByHostInstance: mn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  xm = {
    bundleType: Cr.bundleType,
    version: Cr.version,
    rendererPackageName: Cr.rendererPackageName,
    rendererConfig: Cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Ic(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Cr.findFiberByHostInstance || ym,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Il.isDisabled && Il.supportsFiber)
    try {
      (jo = Il.inject(xm)), (Et = Il);
    } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gm;
Ze.createPortal = function (t, n) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ds(n)) throw Error(R(200));
  return mm(t, n, null, r);
};
Ze.createRoot = function (t, n) {
  if (!ds(t)) throw Error(R(299));
  var r = !1,
    l = "",
    o = yf;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (n = ss(t, 1, !1, null, null, r, !1, l, o)),
    (t[Lt] = n.current),
    qr(t.nodeType === 8 ? t.parentNode : t),
    new cs(n)
  );
};
Ze.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var n = t._reactInternals;
  if (n === void 0)
    throw typeof t.render == "function"
      ? Error(R(188))
      : ((t = Object.keys(t).join(",")), Error(R(268, t)));
  return (t = Ic(n)), (t = t === null ? null : t.stateNode), t;
};
Ze.flushSync = function (t) {
  return Nn(t);
};
Ze.hydrate = function (t, n, r) {
  if (!zo(n)) throw Error(R(200));
  return Io(null, t, n, !0, r);
};
Ze.hydrateRoot = function (t, n, r) {
  if (!ds(t)) throw Error(R(405));
  var l = (r != null && r.hydratedSources) || null,
    o = !1,
    i = "",
    a = yf;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (n = mf(n, null, t, 1, r ?? null, o, !1, i, a)),
    (t[Lt] = n.current),
    qr(t),
    l)
  )
    for (t = 0; t < l.length; t++)
      (r = l[t]),
        (o = r._getVersion),
        (o = o(r._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [r, o])
          : n.mutableSourceEagerHydrationData.push(r, o);
  return new Fo(n);
};
Ze.render = function (t, n, r) {
  if (!zo(n)) throw Error(R(200));
  return Io(null, t, n, !1, r);
};
Ze.unmountComponentAtNode = function (t) {
  if (!zo(t)) throw Error(R(40));
  return t._reactRootContainer
    ? (Nn(function () {
        Io(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Lt] = null);
        });
      }),
      !0)
    : !1;
};
Ze.unstable_batchedUpdates = ls;
Ze.unstable_renderSubtreeIntoContainer = function (t, n, r, l) {
  if (!zo(r)) throw Error(R(200));
  if (t == null || t._reactInternals === void 0) throw Error(R(38));
  return Io(t, n, r, !1, l);
};
Ze.version = "18.2.0-next-9e3b772b8-20220608";
function vf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vf);
    } catch (t) {
      console.error(t);
    }
}
vf(), (pc.exports = Ze);
var fs = pc.exports;
const wm = nc(fs),
  Sm = tc({ __proto__: null, default: wm }, [fs]);
var zu = fs;
(Si.createRoot = zu.createRoot), (Si.hydrateRoot = zu.hydrateRoot);
function ye() {
  return s.jsxs("div", {
    id: "nav",
    children: [
      s.jsxs("nav", {
        children: [
          s.jsx("a", { href: "/addresses", children: "Addresses" }),
          s.jsx("a", { href: "/contacts", children: "Contacts" }),
          s.jsx("a", { href: "/compensations", children: "Compensations" }),
          s.jsx("a", { href: "/documents", children: "Documents" }),
          s.jsx("a", { href: "/employees", children: "Employees" }),
          s.jsx("a", { href: "/employmentdetails", children: "job details" }),
          s.jsx("a", { href: "/leaves", children: "Time off" }),
        ],
      }),
      s.jsx("a", {
        href: "/employee/create",
        children: s.jsx("button", { type: "submit", children: "Add Employee" }),
      }),
    ],
  });
}
function jm() {
  const [t, n] = S.useState({
      addressCount: 0,
      contactCount: 0,
      compensationCount: 0,
      documentCount: 0,
      employeeCount: 0,
      employementDetailCount: 0,
      leaveCount: 0,
    }),
    r = async (i) =>
      await (
        await fetch(`http://localhost:5000/${i}`, {
          method: "GET",
          mode: "cors",
        })
      ).json(),
    l = (i) => i.result.length,
    o = async () => {
      try {
        n({
          addressCount: l(await r("addresses")),
          contactCount: l(await r("contacts")),
          compensationCount: l(await r("compansations")),
          documentCount: l(await r("documents")),
          employeeCount: l(await r("employees")),
          employementDetailCount: l(await r("employmentdetails")),
          leaveCount: l(await r("leaves")),
        });
      } catch (i) {
        console.error("Error getting address count:", i), n({ error: "Error" });
      }
    };
  return (
    S.useEffect(() => {
      o();
    }, []),
    s.jsx("section", {
      id: "main",
      children: t.error
        ? s.jsx("section", {
            children: s.jsx("p", { children: "Error: route to error page!" }),
          })
        : s.jsxs("section", {
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("h3", {
                    children: "Welcome to Our HR Management System!",
                  }),
                  s.jsx("p", { children: "Dear Team," }),
                  s.jsx("p", {
                    children:
                      "Our HR Management System is designed to efficiently track and manage employee details, compensation, time off, and documents. This centralized platform allows us to streamline HR processes, ensuring accuracy and accessibility of crucial information.",
                  }),
                  s.jsx("h3", { children: "Key Features:" }),
                  s.jsxs("p", {
                    children: [
                      "1. ",
                      s.jsx("strong", { children: "Employee Details:" }),
                      " View and update essential employee information.",
                    ],
                  }),
                  s.jsxs("p", {
                    children: [
                      "2. ",
                      s.jsx("strong", { children: "Compensation:" }),
                      " Track details related to employee salaries and benefits.",
                    ],
                  }),
                  s.jsxs("p", {
                    children: [
                      "3. ",
                      s.jsx("strong", { children: "Time Off:" }),
                      " Manage and keep track of employee leave balances.",
                    ],
                  }),
                  s.jsxs("p", {
                    children: [
                      "4. ",
                      s.jsx("strong", { children: "Documents:" }),
                      " Store and access important HR documents.",
                    ],
                  }),
                  s.jsx("p", {
                    children:
                      "This system aims to enhance our HR operations, promoting transparency and accessibility of employee-related information. If you have any questions or require assistance, please feel free to reach out.",
                  }),
                  s.jsx("p", { children: "Best Regards," }),
                  s.jsx("p", { children: "HR Team" }),
                ],
              }),
              s.jsxs("p", {
                children: ["addresses available: ", t.addressCount],
              }),
              s.jsxs("p", { children: ["employee count: ", t.employeeCount] }),
              s.jsxs("p", {
                children: ["compensation count: ", t.compensationCount],
              }),
              s.jsxs("p", { children: ["document Count: ", t.documentCount] }),
              s.jsxs("p", { children: ["employee count: ", t.employeeCount] }),
              s.jsxs("p", { children: ["leave count: ", t.leaveCount] }),
            ],
          }),
    })
  );
}
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function he() {
  return (
    (he = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var l in r)
              Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
          }
          return t;
        }),
    he.apply(this, arguments)
  );
}
var pe;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(pe || (pe = {}));
const Iu = "popstate";
function Em(t) {
  t === void 0 && (t = {});
  function n(l, o) {
    let { pathname: i, search: a, hash: u } = l.location;
    return al(
      "",
      { pathname: i, search: a, hash: u },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function r(l, o) {
    return typeof o == "string" ? o : Dn(o);
  }
  return km(n, r, null, t);
}
function Q(t, n) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(n);
}
function Pn(t, n) {
  if (!t) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function Cm() {
  return Math.random().toString(36).substr(2, 8);
}
function Ou(t, n) {
  return { usr: t.state, key: t.key, idx: n };
}
function al(t, n, r, l) {
  return (
    r === void 0 && (r = null),
    he(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof n == "string" ? It(n) : n,
      { state: r, key: (n && n.key) || l || Cm() },
    )
  );
}
function Dn(t) {
  let { pathname: n = "/", search: r = "", hash: l = "" } = t;
  return (
    r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r),
    l && l !== "#" && (n += l.charAt(0) === "#" ? l : "#" + l),
    n
  );
}
function It(t) {
  let n = {};
  if (t) {
    let r = t.indexOf("#");
    r >= 0 && ((n.hash = t.substr(r)), (t = t.substr(0, r)));
    let l = t.indexOf("?");
    l >= 0 && ((n.search = t.substr(l)), (t = t.substr(0, l))),
      t && (n.pathname = t);
  }
  return n;
}
function km(t, n, r, l) {
  l === void 0 && (l = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = l,
    a = o.history,
    u = pe.Pop,
    c = null,
    d = f();
  d == null && ((d = 0), a.replaceState(he({}, a.state, { idx: d }), ""));
  function f() {
    return (a.state || { idx: null }).idx;
  }
  function m() {
    u = pe.Pop;
    let P = f(),
      p = P == null ? null : P - d;
    (d = P), c && c({ action: u, location: j.location, delta: p });
  }
  function v(P, p) {
    u = pe.Push;
    let h = al(j.location, P, p);
    r && r(h, P), (d = f() + 1);
    let y = Ou(h, d),
      N = j.createHref(h);
    try {
      a.pushState(y, "", N);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
      o.location.assign(N);
    }
    i && c && c({ action: u, location: j.location, delta: 1 });
  }
  function k(P, p) {
    u = pe.Replace;
    let h = al(j.location, P, p);
    r && r(h, P), (d = f());
    let y = Ou(h, d),
      N = j.createHref(h);
    a.replaceState(y, "", N),
      i && c && c({ action: u, location: j.location, delta: 0 });
  }
  function E(P) {
    let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof P == "string" ? P : Dn(P);
    return (
      Q(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          h,
      ),
      new URL(h, p)
    );
  }
  let j = {
    get action() {
      return u;
    },
    get location() {
      return t(o, a);
    },
    listen(P) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Iu, m),
        (c = P),
        () => {
          o.removeEventListener(Iu, m), (c = null);
        }
      );
    },
    createHref(P) {
      return n(o, P);
    },
    createURL: E,
    encodeLocation(P) {
      let p = E(P);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: v,
    replace: k,
    go(P) {
      return a.go(P);
    },
  };
  return j;
}
var de;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(de || (de = {}));
const Nm = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Pm(t) {
  return t.index === !0;
}
function pa(t, n, r, l) {
  return (
    r === void 0 && (r = []),
    l === void 0 && (l = {}),
    t.map((o, i) => {
      let a = [...r, i],
        u = typeof o.id == "string" ? o.id : a.join("-");
      if (
        (Q(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route",
        ),
        Q(
          !l[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Pm(o))
      ) {
        let c = he({}, o, n(o), { id: u });
        return (l[u] = c), c;
      } else {
        let c = he({}, o, n(o), { id: u, children: void 0 });
        return (
          (l[u] = c), o.children && (c.children = pa(o.children, n, a, l)), c
        );
      }
    })
  );
}
function Yn(t, n, r) {
  r === void 0 && (r = "/");
  let l = typeof n == "string" ? It(n) : n,
    o = hr(l.pathname || "/", r);
  if (o == null) return null;
  let i = gf(t);
  Rm(i);
  let a = null;
  for (let u = 0; a == null && u < i.length; ++u) a = Um(i[u], Bm(o));
  return a;
}
function Dm(t, n) {
  let { route: r, pathname: l, params: o } = t;
  return { id: r.id, pathname: l, params: o, data: n[r.id], handle: r.handle };
}
function gf(t, n, r, l) {
  n === void 0 && (n = []), r === void 0 && (r = []), l === void 0 && (l = "");
  let o = (i, a, u) => {
    let c = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    c.relativePath.startsWith("/") &&
      (Q(
        c.relativePath.startsWith(l),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + l + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (c.relativePath = c.relativePath.slice(l.length)));
    let d = _t([l, c.relativePath]),
      f = r.concat(c);
    i.children &&
      i.children.length > 0 &&
      (Q(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + d + '".'),
      ),
      gf(i.children, n, f, d)),
      !(i.path == null && !i.index) &&
        n.push({ path: d, score: Im(d, i.index), routesMeta: f });
  };
  return (
    t.forEach((i, a) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) o(i, a);
      else for (let c of xf(i.path)) o(i, a, c);
    }),
    n
  );
}
function xf(t) {
  let n = t.split("/");
  if (n.length === 0) return [];
  let [r, ...l] = n,
    o = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (l.length === 0) return o ? [i, ""] : [i];
  let a = xf(l.join("/")),
    u = [];
  return (
    u.push(...a.map((c) => (c === "" ? i : [i, c].join("/")))),
    o && u.push(...a),
    u.map((c) => (t.startsWith("/") && c === "" ? "/" : c))
  );
}
function Rm(t) {
  t.sort((n, r) =>
    n.score !== r.score
      ? r.score - n.score
      : Om(
          n.routesMeta.map((l) => l.childrenIndex),
          r.routesMeta.map((l) => l.childrenIndex),
        ),
  );
}
const _m = /^:[\w-]+$/,
  Tm = 3,
  Lm = 2,
  Mm = 1,
  Fm = 10,
  zm = -2,
  Uu = (t) => t === "*";
function Im(t, n) {
  let r = t.split("/"),
    l = r.length;
  return (
    r.some(Uu) && (l += zm),
    n && (l += Lm),
    r
      .filter((o) => !Uu(o))
      .reduce((o, i) => o + (_m.test(i) ? Tm : i === "" ? Mm : Fm), l)
  );
}
function Om(t, n) {
  return t.length === n.length && t.slice(0, -1).every((l, o) => l === n[o])
    ? t[t.length - 1] - n[n.length - 1]
    : 0;
}
function Um(t, n) {
  let { routesMeta: r } = t,
    l = {},
    o = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      c = a === r.length - 1,
      d = o === "/" ? n : n.slice(o.length) || "/",
      f = Am(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        d,
      );
    if (!f) return null;
    Object.assign(l, f.params);
    let m = u.route;
    i.push({
      params: l,
      pathname: _t([o, f.pathname]),
      pathnameBase: Qm(_t([o, f.pathnameBase])),
      route: m,
    }),
      f.pathnameBase !== "/" && (o = _t([o, f.pathnameBase]));
  }
  return i;
}
function Am(t, n) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [r, l] = $m(t.path, t.caseSensitive, t.end),
    o = n.match(r);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    u = o.slice(1);
  return {
    params: l.reduce((d, f, m) => {
      let { paramName: v, isOptional: k } = f;
      if (v === "*") {
        let j = u[m] || "";
        a = i.slice(0, i.length - j.length).replace(/(.)\/+$/, "$1");
      }
      const E = u[m];
      return k && !E ? (d[v] = void 0) : (d[v] = Hm(E || "", v)), d;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: t,
  };
}
function $m(t, n, r) {
  n === void 0 && (n = !1),
    r === void 0 && (r = !0),
    Pn(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'),
    );
  let l = [],
    o =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, u, c) => (
            l.push({ paramName: u, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    t.endsWith("*")
      ? (l.push({ paramName: "*" }),
        (o += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (o += "\\/*$")
        : t !== "" && t !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, n ? void 0 : "i"), l]
  );
}
function Bm(t) {
  try {
    return decodeURI(t);
  } catch (n) {
    return (
      Pn(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + n + ")."),
      ),
      t
    );
  }
}
function Hm(t, n) {
  try {
    return decodeURIComponent(t);
  } catch (r) {
    return (
      Pn(
        !1,
        'The value for the URL param "' +
          n +
          '" will not be decoded because' +
          (' the string "' +
            t +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + r + ")."),
      ),
      t
    );
  }
}
function hr(t, n) {
  if (n === "/") return t;
  if (!t.toLowerCase().startsWith(n.toLowerCase())) return null;
  let r = n.endsWith("/") ? n.length - 1 : n.length,
    l = t.charAt(r);
  return l && l !== "/" ? null : t.slice(r) || "/";
}
function Vm(t, n) {
  n === void 0 && (n = "/");
  let {
    pathname: r,
    search: l = "",
    hash: o = "",
  } = typeof t == "string" ? It(t) : t;
  return {
    pathname: r ? (r.startsWith("/") ? r : Wm(r, n)) : n,
    search: Jm(l),
    hash: Km(o),
  };
}
function Wm(t, n) {
  let r = n.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((o) => {
      o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function gi(t, n, r, l) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      n +
      "` field [" +
      JSON.stringify(l) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function wf(t) {
  return t.filter(
    (n, r) => r === 0 || (n.route.path && n.route.path.length > 0),
  );
}
function hs(t, n) {
  let r = wf(t);
  return n
    ? r.map((l, o) => (o === t.length - 1 ? l.pathname : l.pathnameBase))
    : r.map((l) => l.pathnameBase);
}
function ps(t, n, r, l) {
  l === void 0 && (l = !1);
  let o;
  typeof t == "string"
    ? (o = It(t))
    : ((o = he({}, t)),
      Q(
        !o.pathname || !o.pathname.includes("?"),
        gi("?", "pathname", "search", o),
      ),
      Q(
        !o.pathname || !o.pathname.includes("#"),
        gi("#", "pathname", "hash", o),
      ),
      Q(!o.search || !o.search.includes("#"), gi("#", "search", "hash", o)));
  let i = t === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    u;
  if (a == null) u = r;
  else {
    let m = n.length - 1;
    if (!l && a.startsWith("..")) {
      let v = a.split("/");
      for (; v[0] === ".."; ) v.shift(), (m -= 1);
      o.pathname = v.join("/");
    }
    u = m >= 0 ? n[m] : "/";
  }
  let c = Vm(o, u),
    d = a && a !== "/" && a.endsWith("/"),
    f = (i || a === ".") && r.endsWith("/");
  return !c.pathname.endsWith("/") && (d || f) && (c.pathname += "/"), c;
}
const _t = (t) => t.join("/").replace(/\/\/+/g, "/"),
  Qm = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Jm = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  Km = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
class ms {
  constructor(n, r, l, o) {
    o === void 0 && (o = !1),
      (this.status = n),
      (this.statusText = r || ""),
      (this.internal = o),
      l instanceof Error
        ? ((this.data = l.toString()), (this.error = l))
        : (this.data = l);
  }
}
function Sf(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const jf = ["post", "put", "patch", "delete"],
  Gm = new Set(jf),
  Ym = ["get", ...jf],
  Xm = new Set(Ym),
  Zm = new Set([301, 302, 303, 307, 308]),
  qm = new Set([307, 308]),
  xi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  bm = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  kr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Ef = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ey = (t) => ({ hasErrorBoundary: !!t.hasErrorBoundary }),
  Cf = "remix-router-transitions";
function ty(t) {
  const n = t.window ? t.window : typeof window < "u" ? window : void 0,
    r =
      typeof n < "u" &&
      typeof n.document < "u" &&
      typeof n.document.createElement < "u",
    l = !r;
  Q(
    t.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let o;
  if (t.mapRouteProperties) o = t.mapRouteProperties;
  else if (t.detectErrorBoundary) {
    let x = t.detectErrorBoundary;
    o = (w) => ({ hasErrorBoundary: x(w) });
  } else o = ey;
  let i = {},
    a = pa(t.routes, o, void 0, i),
    u,
    c = t.basename || "/",
    d = he(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      t.future,
    ),
    f = null,
    m = new Set(),
    v = null,
    k = null,
    E = null,
    j = t.hydrationData != null,
    P = Yn(a, t.history.location, c),
    p = null;
  if (P == null) {
    let x = tt(404, { pathname: t.history.location.pathname }),
      { matches: w, route: C } = Ju(a);
    (P = w), (p = { [C.id]: x });
  }
  let h,
    y = P.some((x) => x.route.lazy),
    N = P.some((x) => x.route.loader);
  if (y) h = !1;
  else if (!N) h = !0;
  else if (d.v7_partialHydration) {
    let x = t.hydrationData ? t.hydrationData.loaderData : null,
      w = t.hydrationData ? t.hydrationData.errors : null;
    h = P.every(
      (C) =>
        C.route.loader &&
        C.route.loader.hydrate !== !0 &&
        ((x && x[C.route.id] !== void 0) || (w && w[C.route.id] !== void 0)),
    );
  } else h = t.hydrationData != null;
  let _,
    g = {
      historyAction: t.history.action,
      location: t.history.location,
      matches: P,
      initialized: h,
      navigation: xi,
      restoreScrollPosition: t.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (t.hydrationData && t.hydrationData.loaderData) || {},
      actionData: (t.hydrationData && t.hydrationData.actionData) || null,
      errors: (t.hydrationData && t.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    D = pe.Pop,
    T = !1,
    I,
    U = !1,
    Y = new Map(),
    we = null,
    ge = !1,
    be = !1,
    Ln = [],
    Ot = [],
    oe = new Map(),
    M = 0,
    $ = -1,
    H = new Map(),
    X = new Set(),
    ne = new Map(),
    gt = new Map(),
    Pe = new Set(),
    ut = new Map(),
    Ie = new Map(),
    Ut = !1;
  function Ff() {
    if (
      ((f = t.history.listen((x) => {
        let { action: w, location: C, delta: L } = x;
        if (Ut) {
          Ut = !1;
          return;
        }
        Pn(
          Ie.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let z = Cs({
          currentLocation: g.location,
          nextLocation: C,
          historyAction: w,
        });
        if (z && L != null) {
          (Ut = !0),
            t.history.go(L * -1),
            vl(z, {
              state: "blocked",
              location: C,
              proceed() {
                vl(z, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: C,
                }),
                  t.history.go(L);
              },
              reset() {
                let W = new Map(g.blockers);
                W.set(z, kr), Je({ blockers: W });
              },
            });
          return;
        }
        return dn(w, C);
      })),
      r)
    ) {
      fy(n, Y);
      let x = () => hy(n, Y);
      n.addEventListener("pagehide", x),
        (we = () => n.removeEventListener("pagehide", x));
    }
    return g.initialized || dn(pe.Pop, g.location, { initialHydration: !0 }), _;
  }
  function zf() {
    f && f(),
      we && we(),
      m.clear(),
      I && I.abort(),
      g.fetchers.forEach((x, w) => yl(w)),
      g.blockers.forEach((x, w) => Es(w));
  }
  function If(x) {
    return m.add(x), () => m.delete(x);
  }
  function Je(x, w) {
    w === void 0 && (w = {}), (g = he({}, g, x));
    let C = [],
      L = [];
    d.v7_fetcherPersist &&
      g.fetchers.forEach((z, W) => {
        z.state === "idle" && (Pe.has(W) ? L.push(W) : C.push(W));
      }),
      [...m].forEach((z) =>
        z(g, {
          deletedFetchers: L,
          unstable_viewTransitionOpts: w.viewTransitionOpts,
          unstable_flushSync: w.flushSync === !0,
        }),
      ),
      d.v7_fetcherPersist &&
        (C.forEach((z) => g.fetchers.delete(z)), L.forEach((z) => yl(z)));
  }
  function pr(x, w, C) {
    var L, z;
    let { flushSync: W } = C === void 0 ? {} : C,
      B =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        ht(g.navigation.formMethod) &&
        g.navigation.state === "loading" &&
        ((L = x.state) == null ? void 0 : L._isRedirect) !== !0,
      A;
    w.actionData
      ? Object.keys(w.actionData).length > 0
        ? (A = w.actionData)
        : (A = null)
      : B
        ? (A = g.actionData)
        : (A = null);
    let O = w.loaderData
        ? Qu(g.loaderData, w.loaderData, w.matches || [], w.errors)
        : g.loaderData,
      K = g.blockers;
    K.size > 0 && ((K = new Map(K)), K.forEach((ee, De) => K.set(De, kr)));
    let Ee =
      T === !0 ||
      (g.navigation.formMethod != null &&
        ht(g.navigation.formMethod) &&
        ((z = x.state) == null ? void 0 : z._isRedirect) !== !0);
    u && ((a = u), (u = void 0)),
      ge ||
        D === pe.Pop ||
        (D === pe.Push
          ? t.history.push(x, x.state)
          : D === pe.Replace && t.history.replace(x, x.state));
    let V;
    if (D === pe.Pop) {
      let ee = Y.get(g.location.pathname);
      ee && ee.has(x.pathname)
        ? (V = { currentLocation: g.location, nextLocation: x })
        : Y.has(x.pathname) &&
          (V = { currentLocation: x, nextLocation: g.location });
    } else if (U) {
      let ee = Y.get(g.location.pathname);
      ee
        ? ee.add(x.pathname)
        : ((ee = new Set([x.pathname])), Y.set(g.location.pathname, ee)),
        (V = { currentLocation: g.location, nextLocation: x });
    }
    Je(
      he({}, w, {
        actionData: A,
        loaderData: O,
        historyAction: D,
        location: x,
        initialized: !0,
        navigation: xi,
        revalidation: "idle",
        restoreScrollPosition: Ns(x, w.matches || g.matches),
        preventScrollReset: Ee,
        blockers: K,
      }),
      { viewTransitionOpts: V, flushSync: W === !0 },
    ),
      (D = pe.Pop),
      (T = !1),
      (U = !1),
      (ge = !1),
      (be = !1),
      (Ln = []),
      (Ot = []);
  }
  async function vs(x, w) {
    if (typeof x == "number") {
      t.history.go(x);
      return;
    }
    let C = ma(
        g.location,
        g.matches,
        c,
        d.v7_prependBasename,
        x,
        d.v7_relativeSplatPath,
        w == null ? void 0 : w.fromRouteId,
        w == null ? void 0 : w.relative,
      ),
      {
        path: L,
        submission: z,
        error: W,
      } = Au(d.v7_normalizeFormMethod, !1, C, w),
      B = g.location,
      A = al(g.location, L, w && w.state);
    A = he({}, A, t.history.encodeLocation(A));
    let O = w && w.replace != null ? w.replace : void 0,
      K = pe.Push;
    O === !0
      ? (K = pe.Replace)
      : O === !1 ||
        (z != null &&
          ht(z.formMethod) &&
          z.formAction === g.location.pathname + g.location.search &&
          (K = pe.Replace));
    let Ee =
        w && "preventScrollReset" in w ? w.preventScrollReset === !0 : void 0,
      V = (w && w.unstable_flushSync) === !0,
      ee = Cs({ currentLocation: B, nextLocation: A, historyAction: K });
    if (ee) {
      vl(ee, {
        state: "blocked",
        location: A,
        proceed() {
          vl(ee, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: A,
          }),
            vs(x, w);
        },
        reset() {
          let De = new Map(g.blockers);
          De.set(ee, kr), Je({ blockers: De });
        },
      });
      return;
    }
    return await dn(K, A, {
      submission: z,
      pendingError: W,
      preventScrollReset: Ee,
      replace: w && w.replace,
      enableViewTransition: w && w.unstable_viewTransition,
      flushSync: V,
    });
  }
  function Of() {
    if (
      ($o(),
      Je({ revalidation: "loading" }),
      g.navigation.state !== "submitting")
    ) {
      if (g.navigation.state === "idle") {
        dn(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      dn(D || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
      });
    }
  }
  async function dn(x, w, C) {
    I && I.abort(),
      (I = null),
      (D = x),
      (ge = (C && C.startUninterruptedRevalidation) === !0),
      Jf(g.location, g.matches),
      (T = (C && C.preventScrollReset) === !0),
      (U = (C && C.enableViewTransition) === !0);
    let L = u || a,
      z = C && C.overrideNavigation,
      W = Yn(L, w, c),
      B = (C && C.flushSync) === !0;
    if (!W) {
      let De = tt(404, { pathname: w.pathname }),
        { matches: et, route: Ce } = Ju(L);
      Bo(),
        pr(
          w,
          { matches: et, loaderData: {}, errors: { [Ce.id]: De } },
          { flushSync: B },
        );
      return;
    }
    if (
      g.initialized &&
      !be &&
      iy(g.location, w) &&
      !(C && C.submission && ht(C.submission.formMethod))
    ) {
      pr(w, { matches: W }, { flushSync: B });
      return;
    }
    I = new AbortController();
    let A = Pr(t.history, w, I.signal, C && C.submission),
      O,
      K;
    if (C && C.pendingError) K = { [Vr(W).route.id]: C.pendingError };
    else if (C && C.submission && ht(C.submission.formMethod)) {
      let De = await Uf(A, w, C.submission, W, {
        replace: C.replace,
        flushSync: B,
      });
      if (De.shortCircuited) return;
      (O = De.pendingActionData),
        (K = De.pendingActionError),
        (z = wi(w, C.submission)),
        (B = !1),
        (A = new Request(A.url, { signal: A.signal }));
    }
    let {
      shortCircuited: Ee,
      loaderData: V,
      errors: ee,
    } = await Af(
      A,
      w,
      W,
      z,
      C && C.submission,
      C && C.fetcherSubmission,
      C && C.replace,
      C && C.initialHydration === !0,
      B,
      O,
      K,
    );
    Ee ||
      ((I = null),
      pr(
        w,
        he({ matches: W }, O ? { actionData: O } : {}, {
          loaderData: V,
          errors: ee,
        }),
      ));
  }
  async function Uf(x, w, C, L, z) {
    z === void 0 && (z = {}), $o();
    let W = cy(w, C);
    Je({ navigation: W }, { flushSync: z.flushSync === !0 });
    let B,
      A = va(L, w);
    if (!A.route.action && !A.route.lazy)
      B = {
        type: de.error,
        error: tt(405, {
          method: x.method,
          pathname: w.pathname,
          routeId: A.route.id,
        }),
      };
    else if (
      ((B = await Nr("action", x, A, L, i, o, c, d.v7_relativeSplatPath)),
      x.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (xn(B)) {
      let O;
      return (
        z && z.replace != null
          ? (O = z.replace)
          : (O = B.location === g.location.pathname + g.location.search),
        await mr(g, B, { submission: C, replace: O }),
        { shortCircuited: !0 }
      );
    }
    if (Xn(B)) {
      let O = Vr(L, A.route.id);
      return (
        (z && z.replace) !== !0 && (D = pe.Push),
        { pendingActionData: {}, pendingActionError: { [O.route.id]: B.error } }
      );
    }
    if (gn(B)) throw tt(400, { type: "defer-action" });
    return { pendingActionData: { [A.route.id]: B.data } };
  }
  async function Af(x, w, C, L, z, W, B, A, O, K, Ee) {
    let V = L || wi(w, z),
      ee = z || W || Yu(V),
      De = u || a,
      [et, Ce] = $u(
        t.history,
        g,
        C,
        ee,
        w,
        d.v7_partialHydration && A === !0,
        be,
        Ln,
        Ot,
        Pe,
        ne,
        X,
        De,
        c,
        K,
        Ee,
      );
    if (
      (Bo(
        (q) =>
          !(C && C.some((ie) => ie.route.id === q)) ||
          (et && et.some((ie) => ie.route.id === q)),
      ),
      ($ = ++M),
      et.length === 0 && Ce.length === 0)
    ) {
      let q = Ss();
      return (
        pr(
          w,
          he(
            { matches: C, loaderData: {}, errors: Ee || null },
            K ? { actionData: K } : {},
            q ? { fetchers: new Map(g.fetchers) } : {},
          ),
          { flushSync: O },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!ge && (!d.v7_partialHydration || !A)) {
      Ce.forEach((ie) => {
        let xt = g.fetchers.get(ie.key),
          xl = Dr(void 0, xt ? xt.data : void 0);
        g.fetchers.set(ie.key, xl);
      });
      let q = K || g.actionData;
      Je(
        he(
          { navigation: V },
          q
            ? Object.keys(q).length === 0
              ? { actionData: null }
              : { actionData: q }
            : {},
          Ce.length > 0 ? { fetchers: new Map(g.fetchers) } : {},
        ),
        { flushSync: O },
      );
    }
    Ce.forEach((q) => {
      oe.has(q.key) && $t(q.key), q.controller && oe.set(q.key, q.controller);
    });
    let Mn = () => Ce.forEach((q) => $t(q.key));
    I && I.signal.addEventListener("abort", Mn);
    let {
      results: Ho,
      loaderResults: Fn,
      fetcherResults: Bt,
    } = await gs(g.matches, C, et, Ce, x);
    if (x.signal.aborted) return { shortCircuited: !0 };
    I && I.signal.removeEventListener("abort", Mn),
      Ce.forEach((q) => oe.delete(q.key));
    let fn = Ku(Ho);
    if (fn) {
      if (fn.idx >= et.length) {
        let q = Ce[fn.idx - et.length].key;
        X.add(q);
      }
      return await mr(g, fn.result, { replace: B }), { shortCircuited: !0 };
    }
    let { loaderData: Vo, errors: Wo } = Wu(g, C, et, Fn, Ee, Ce, Bt, ut);
    ut.forEach((q, ie) => {
      q.subscribe((xt) => {
        (xt || q.done) && ut.delete(ie);
      });
    });
    let Qo = Ss(),
      zn = js($),
      gl = Qo || zn || Ce.length > 0;
    return he(
      { loaderData: Vo, errors: Wo },
      gl ? { fetchers: new Map(g.fetchers) } : {},
    );
  }
  function $f(x, w, C, L) {
    if (l)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    oe.has(x) && $t(x);
    let z = (L && L.unstable_flushSync) === !0,
      W = u || a,
      B = ma(
        g.location,
        g.matches,
        c,
        d.v7_prependBasename,
        C,
        d.v7_relativeSplatPath,
        w,
        L == null ? void 0 : L.relative,
      ),
      A = Yn(W, B, c);
    if (!A) {
      yr(x, w, tt(404, { pathname: B }), { flushSync: z });
      return;
    }
    let {
      path: O,
      submission: K,
      error: Ee,
    } = Au(d.v7_normalizeFormMethod, !0, B, L);
    if (Ee) {
      yr(x, w, Ee, { flushSync: z });
      return;
    }
    let V = va(A, O);
    if (((T = (L && L.preventScrollReset) === !0), K && ht(K.formMethod))) {
      Bf(x, w, O, V, A, z, K);
      return;
    }
    ne.set(x, { routeId: w, path: O }), Hf(x, w, O, V, A, z, K);
  }
  async function Bf(x, w, C, L, z, W, B) {
    if (($o(), ne.delete(x), !L.route.action && !L.route.lazy)) {
      let ie = tt(405, { method: B.formMethod, pathname: C, routeId: w });
      yr(x, w, ie, { flushSync: W });
      return;
    }
    let A = g.fetchers.get(x);
    At(x, dy(B, A), { flushSync: W });
    let O = new AbortController(),
      K = Pr(t.history, C, O.signal, B);
    oe.set(x, O);
    let Ee = M,
      V = await Nr("action", K, L, z, i, o, c, d.v7_relativeSplatPath);
    if (K.signal.aborted) {
      oe.get(x) === O && oe.delete(x);
      return;
    }
    if (d.v7_fetcherPersist && Pe.has(x)) {
      if (xn(V) || Xn(V)) {
        At(x, Vt(void 0));
        return;
      }
    } else {
      if (xn(V))
        if ((oe.delete(x), $ > Ee)) {
          At(x, Vt(void 0));
          return;
        } else
          return X.add(x), At(x, Dr(B)), mr(g, V, { fetcherSubmission: B });
      if (Xn(V)) {
        yr(x, w, V.error);
        return;
      }
    }
    if (gn(V)) throw tt(400, { type: "defer-action" });
    let ee = g.navigation.location || g.location,
      De = Pr(t.history, ee, O.signal),
      et = u || a,
      Ce =
        g.navigation.state !== "idle"
          ? Yn(et, g.navigation.location, c)
          : g.matches;
    Q(Ce, "Didn't find any matches after fetcher action");
    let Mn = ++M;
    H.set(x, Mn);
    let Ho = Dr(B, V.data);
    g.fetchers.set(x, Ho);
    let [Fn, Bt] = $u(
      t.history,
      g,
      Ce,
      B,
      ee,
      !1,
      be,
      Ln,
      Ot,
      Pe,
      ne,
      X,
      et,
      c,
      { [L.route.id]: V.data },
      void 0,
    );
    Bt.filter((ie) => ie.key !== x).forEach((ie) => {
      let xt = ie.key,
        xl = g.fetchers.get(xt),
        Gf = Dr(void 0, xl ? xl.data : void 0);
      g.fetchers.set(xt, Gf),
        oe.has(xt) && $t(xt),
        ie.controller && oe.set(xt, ie.controller);
    }),
      Je({ fetchers: new Map(g.fetchers) });
    let fn = () => Bt.forEach((ie) => $t(ie.key));
    O.signal.addEventListener("abort", fn);
    let {
      results: Vo,
      loaderResults: Wo,
      fetcherResults: Qo,
    } = await gs(g.matches, Ce, Fn, Bt, De);
    if (O.signal.aborted) return;
    O.signal.removeEventListener("abort", fn),
      H.delete(x),
      oe.delete(x),
      Bt.forEach((ie) => oe.delete(ie.key));
    let zn = Ku(Vo);
    if (zn) {
      if (zn.idx >= Fn.length) {
        let ie = Bt[zn.idx - Fn.length].key;
        X.add(ie);
      }
      return mr(g, zn.result);
    }
    let { loaderData: gl, errors: q } = Wu(
      g,
      g.matches,
      Fn,
      Wo,
      void 0,
      Bt,
      Qo,
      ut,
    );
    if (g.fetchers.has(x)) {
      let ie = Vt(V.data);
      g.fetchers.set(x, ie);
    }
    js(Mn),
      g.navigation.state === "loading" && Mn > $
        ? (Q(D, "Expected pending action"),
          I && I.abort(),
          pr(g.navigation.location, {
            matches: Ce,
            loaderData: gl,
            errors: q,
            fetchers: new Map(g.fetchers),
          }))
        : (Je({
            errors: q,
            loaderData: Qu(g.loaderData, gl, Ce, q),
            fetchers: new Map(g.fetchers),
          }),
          (be = !1));
  }
  async function Hf(x, w, C, L, z, W, B) {
    let A = g.fetchers.get(x);
    At(x, Dr(B, A ? A.data : void 0), { flushSync: W });
    let O = new AbortController(),
      K = Pr(t.history, C, O.signal);
    oe.set(x, O);
    let Ee = M,
      V = await Nr("loader", K, L, z, i, o, c, d.v7_relativeSplatPath);
    if (
      (gn(V) && (V = (await Pf(V, K.signal, !0)) || V),
      oe.get(x) === O && oe.delete(x),
      !K.signal.aborted)
    ) {
      if (Pe.has(x)) {
        At(x, Vt(void 0));
        return;
      }
      if (xn(V))
        if ($ > Ee) {
          At(x, Vt(void 0));
          return;
        } else {
          X.add(x), await mr(g, V);
          return;
        }
      if (Xn(V)) {
        yr(x, w, V.error);
        return;
      }
      Q(!gn(V), "Unhandled fetcher deferred data"), At(x, Vt(V.data));
    }
  }
  async function mr(x, w, C) {
    let {
      submission: L,
      fetcherSubmission: z,
      replace: W,
    } = C === void 0 ? {} : C;
    w.revalidate && (be = !0);
    let B = al(x.location, w.location, { _isRedirect: !0 });
    if ((Q(B, "Expected a location on the redirect navigation"), r)) {
      let ee = !1;
      if (w.reloadDocument) ee = !0;
      else if (Ef.test(w.location)) {
        const De = t.history.createURL(w.location);
        ee = De.origin !== n.location.origin || hr(De.pathname, c) == null;
      }
      if (ee) {
        W ? n.location.replace(w.location) : n.location.assign(w.location);
        return;
      }
    }
    I = null;
    let A = W === !0 ? pe.Replace : pe.Push,
      { formMethod: O, formAction: K, formEncType: Ee } = x.navigation;
    !L && !z && O && K && Ee && (L = Yu(x.navigation));
    let V = L || z;
    if (qm.has(w.status) && V && ht(V.formMethod))
      await dn(A, B, {
        submission: he({}, V, { formAction: w.location }),
        preventScrollReset: T,
      });
    else {
      let ee = wi(B, L);
      await dn(A, B, {
        overrideNavigation: ee,
        fetcherSubmission: z,
        preventScrollReset: T,
      });
    }
  }
  async function gs(x, w, C, L, z) {
    let W = await Promise.all([
        ...C.map((O) => Nr("loader", z, O, w, i, o, c, d.v7_relativeSplatPath)),
        ...L.map((O) =>
          O.matches && O.match && O.controller
            ? Nr(
                "loader",
                Pr(t.history, O.path, O.controller.signal),
                O.match,
                O.matches,
                i,
                o,
                c,
                d.v7_relativeSplatPath,
              )
            : { type: de.error, error: tt(404, { pathname: O.path }) },
        ),
      ]),
      B = W.slice(0, C.length),
      A = W.slice(C.length);
    return (
      await Promise.all([
        Gu(
          x,
          C,
          B,
          B.map(() => z.signal),
          !1,
          g.loaderData,
        ),
        Gu(
          x,
          L.map((O) => O.match),
          A,
          L.map((O) => (O.controller ? O.controller.signal : null)),
          !0,
        ),
      ]),
      { results: W, loaderResults: B, fetcherResults: A }
    );
  }
  function $o() {
    (be = !0),
      Ln.push(...Bo()),
      ne.forEach((x, w) => {
        oe.has(w) && (Ot.push(w), $t(w));
      });
  }
  function At(x, w, C) {
    C === void 0 && (C = {}),
      g.fetchers.set(x, w),
      Je(
        { fetchers: new Map(g.fetchers) },
        { flushSync: (C && C.flushSync) === !0 },
      );
  }
  function yr(x, w, C, L) {
    L === void 0 && (L = {});
    let z = Vr(g.matches, w);
    yl(x),
      Je(
        { errors: { [z.route.id]: C }, fetchers: new Map(g.fetchers) },
        { flushSync: (L && L.flushSync) === !0 },
      );
  }
  function xs(x) {
    return (
      d.v7_fetcherPersist &&
        (gt.set(x, (gt.get(x) || 0) + 1), Pe.has(x) && Pe.delete(x)),
      g.fetchers.get(x) || bm
    );
  }
  function yl(x) {
    let w = g.fetchers.get(x);
    oe.has(x) && !(w && w.state === "loading" && H.has(x)) && $t(x),
      ne.delete(x),
      H.delete(x),
      X.delete(x),
      Pe.delete(x),
      g.fetchers.delete(x);
  }
  function Vf(x) {
    if (d.v7_fetcherPersist) {
      let w = (gt.get(x) || 0) - 1;
      w <= 0 ? (gt.delete(x), Pe.add(x)) : gt.set(x, w);
    } else yl(x);
    Je({ fetchers: new Map(g.fetchers) });
  }
  function $t(x) {
    let w = oe.get(x);
    Q(w, "Expected fetch controller: " + x), w.abort(), oe.delete(x);
  }
  function ws(x) {
    for (let w of x) {
      let C = xs(w),
        L = Vt(C.data);
      g.fetchers.set(w, L);
    }
  }
  function Ss() {
    let x = [],
      w = !1;
    for (let C of X) {
      let L = g.fetchers.get(C);
      Q(L, "Expected fetcher: " + C),
        L.state === "loading" && (X.delete(C), x.push(C), (w = !0));
    }
    return ws(x), w;
  }
  function js(x) {
    let w = [];
    for (let [C, L] of H)
      if (L < x) {
        let z = g.fetchers.get(C);
        Q(z, "Expected fetcher: " + C),
          z.state === "loading" && ($t(C), H.delete(C), w.push(C));
      }
    return ws(w), w.length > 0;
  }
  function Wf(x, w) {
    let C = g.blockers.get(x) || kr;
    return Ie.get(x) !== w && Ie.set(x, w), C;
  }
  function Es(x) {
    g.blockers.delete(x), Ie.delete(x);
  }
  function vl(x, w) {
    let C = g.blockers.get(x) || kr;
    Q(
      (C.state === "unblocked" && w.state === "blocked") ||
        (C.state === "blocked" && w.state === "blocked") ||
        (C.state === "blocked" && w.state === "proceeding") ||
        (C.state === "blocked" && w.state === "unblocked") ||
        (C.state === "proceeding" && w.state === "unblocked"),
      "Invalid blocker state transition: " + C.state + " -> " + w.state,
    );
    let L = new Map(g.blockers);
    L.set(x, w), Je({ blockers: L });
  }
  function Cs(x) {
    let { currentLocation: w, nextLocation: C, historyAction: L } = x;
    if (Ie.size === 0) return;
    Ie.size > 1 && Pn(!1, "A router only supports one blocker at a time");
    let z = Array.from(Ie.entries()),
      [W, B] = z[z.length - 1],
      A = g.blockers.get(W);
    if (
      !(A && A.state === "proceeding") &&
      B({ currentLocation: w, nextLocation: C, historyAction: L })
    )
      return W;
  }
  function Bo(x) {
    let w = [];
    return (
      ut.forEach((C, L) => {
        (!x || x(L)) && (C.cancel(), w.push(L), ut.delete(L));
      }),
      w
    );
  }
  function Qf(x, w, C) {
    if (((v = x), (E = w), (k = C || null), !j && g.navigation === xi)) {
      j = !0;
      let L = Ns(g.location, g.matches);
      L != null && Je({ restoreScrollPosition: L });
    }
    return () => {
      (v = null), (E = null), (k = null);
    };
  }
  function ks(x, w) {
    return (
      (k &&
        k(
          x,
          w.map((L) => Dm(L, g.loaderData)),
        )) ||
      x.key
    );
  }
  function Jf(x, w) {
    if (v && E) {
      let C = ks(x, w);
      v[C] = E();
    }
  }
  function Ns(x, w) {
    if (v) {
      let C = ks(x, w),
        L = v[C];
      if (typeof L == "number") return L;
    }
    return null;
  }
  function Kf(x) {
    (i = {}), (u = pa(x, o, void 0, i));
  }
  return (
    (_ = {
      get basename() {
        return c;
      },
      get future() {
        return d;
      },
      get state() {
        return g;
      },
      get routes() {
        return a;
      },
      get window() {
        return n;
      },
      initialize: Ff,
      subscribe: If,
      enableScrollRestoration: Qf,
      navigate: vs,
      fetch: $f,
      revalidate: Of,
      createHref: (x) => t.history.createHref(x),
      encodeLocation: (x) => t.history.encodeLocation(x),
      getFetcher: xs,
      deleteFetcher: Vf,
      dispose: zf,
      getBlocker: Wf,
      deleteBlocker: Es,
      _internalFetchControllers: oe,
      _internalActiveDeferreds: ut,
      _internalSetRoutes: Kf,
    }),
    _
  );
}
function ny(t) {
  return (
    t != null &&
    (("formData" in t && t.formData != null) ||
      ("body" in t && t.body !== void 0))
  );
}
function ma(t, n, r, l, o, i, a, u) {
  let c, d;
  if (a) {
    c = [];
    for (let m of n)
      if ((c.push(m), m.route.id === a)) {
        d = m;
        break;
      }
  } else (c = n), (d = n[n.length - 1]);
  let f = ps(o || ".", hs(c, i), hr(t.pathname, r) || t.pathname, u === "path");
  return (
    o == null && ((f.search = t.search), (f.hash = t.hash)),
    (o == null || o === "" || o === ".") &&
      d &&
      d.route.index &&
      !ys(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    l &&
      r !== "/" &&
      (f.pathname = f.pathname === "/" ? r : _t([r, f.pathname])),
    Dn(f)
  );
}
function Au(t, n, r, l) {
  if (!l || !ny(l)) return { path: r };
  if (l.formMethod && !uy(l.formMethod))
    return { path: r, error: tt(405, { method: l.formMethod }) };
  let o = () => ({ path: r, error: tt(400, { type: "invalid-body" }) }),
    i = l.formMethod || "get",
    a = t ? i.toUpperCase() : i.toLowerCase(),
    u = Nf(r);
  if (l.body !== void 0) {
    if (l.formEncType === "text/plain") {
      if (!ht(a)) return o();
      let v =
        typeof l.body == "string"
          ? l.body
          : l.body instanceof FormData || l.body instanceof URLSearchParams
            ? Array.from(l.body.entries()).reduce((k, E) => {
                let [j, P] = E;
                return (
                  "" +
                  k +
                  j +
                  "=" +
                  P +
                  `
`
                );
              }, "")
            : String(l.body);
      return {
        path: r,
        submission: {
          formMethod: a,
          formAction: u,
          formEncType: l.formEncType,
          formData: void 0,
          json: void 0,
          text: v,
        },
      };
    } else if (l.formEncType === "application/json") {
      if (!ht(a)) return o();
      try {
        let v = typeof l.body == "string" ? JSON.parse(l.body) : l.body;
        return {
          path: r,
          submission: {
            formMethod: a,
            formAction: u,
            formEncType: l.formEncType,
            formData: void 0,
            json: v,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  Q(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let c, d;
  if (l.formData) (c = ya(l.formData)), (d = l.formData);
  else if (l.body instanceof FormData) (c = ya(l.body)), (d = l.body);
  else if (l.body instanceof URLSearchParams) (c = l.body), (d = Vu(c));
  else if (l.body == null) (c = new URLSearchParams()), (d = new FormData());
  else
    try {
      (c = new URLSearchParams(l.body)), (d = Vu(c));
    } catch {
      return o();
    }
  let f = {
    formMethod: a,
    formAction: u,
    formEncType: (l && l.formEncType) || "application/x-www-form-urlencoded",
    formData: d,
    json: void 0,
    text: void 0,
  };
  if (ht(f.formMethod)) return { path: r, submission: f };
  let m = It(r);
  return (
    n && m.search && ys(m.search) && c.append("index", ""),
    (m.search = "?" + c),
    { path: Dn(m), submission: f }
  );
}
function ry(t, n) {
  let r = t;
  if (n) {
    let l = t.findIndex((o) => o.route.id === n);
    l >= 0 && (r = t.slice(0, l));
  }
  return r;
}
function $u(t, n, r, l, o, i, a, u, c, d, f, m, v, k, E, j) {
  let P = j ? Object.values(j)[0] : E ? Object.values(E)[0] : void 0,
    p = t.createURL(n.location),
    h = t.createURL(o),
    y = j ? Object.keys(j)[0] : void 0,
    _ = ry(r, y).filter((D, T) => {
      let { route: I } = D;
      if (I.lazy) return !0;
      if (I.loader == null) return !1;
      if (i)
        return I.loader.hydrate
          ? !0
          : n.loaderData[I.id] === void 0 &&
              (!n.errors || n.errors[I.id] === void 0);
      if (
        ly(n.loaderData, n.matches[T], D) ||
        u.some((we) => we === D.route.id)
      )
        return !0;
      let U = n.matches[T],
        Y = D;
      return Bu(
        D,
        he(
          {
            currentUrl: p,
            currentParams: U.params,
            nextUrl: h,
            nextParams: Y.params,
          },
          l,
          {
            actionResult: P,
            defaultShouldRevalidate:
              a ||
              p.pathname + p.search === h.pathname + h.search ||
              p.search !== h.search ||
              kf(U, Y),
          },
        ),
      );
    }),
    g = [];
  return (
    f.forEach((D, T) => {
      if (i || !r.some((ge) => ge.route.id === D.routeId) || d.has(T)) return;
      let I = Yn(v, D.path, k);
      if (!I) {
        g.push({
          key: T,
          routeId: D.routeId,
          path: D.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let U = n.fetchers.get(T),
        Y = va(I, D.path),
        we = !1;
      m.has(T)
        ? (we = !1)
        : c.includes(T)
          ? (we = !0)
          : U && U.state !== "idle" && U.data === void 0
            ? (we = a)
            : (we = Bu(
                Y,
                he(
                  {
                    currentUrl: p,
                    currentParams: n.matches[n.matches.length - 1].params,
                    nextUrl: h,
                    nextParams: r[r.length - 1].params,
                  },
                  l,
                  { actionResult: P, defaultShouldRevalidate: a },
                ),
              )),
        we &&
          g.push({
            key: T,
            routeId: D.routeId,
            path: D.path,
            matches: I,
            match: Y,
            controller: new AbortController(),
          });
    }),
    [_, g]
  );
}
function ly(t, n, r) {
  let l = !n || r.route.id !== n.route.id,
    o = t[r.route.id] === void 0;
  return l || o;
}
function kf(t, n) {
  let r = t.route.path;
  return (
    t.pathname !== n.pathname ||
    (r != null && r.endsWith("*") && t.params["*"] !== n.params["*"])
  );
}
function Bu(t, n) {
  if (t.route.shouldRevalidate) {
    let r = t.route.shouldRevalidate(n);
    if (typeof r == "boolean") return r;
  }
  return n.defaultShouldRevalidate;
}
async function Hu(t, n, r) {
  if (!t.lazy) return;
  let l = await t.lazy();
  if (!t.lazy) return;
  let o = r[t.id];
  Q(o, "No route found in manifest");
  let i = {};
  for (let a in l) {
    let c = o[a] !== void 0 && a !== "hasErrorBoundary";
    Pn(
      !c,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.'),
    ),
      !c && !Nm.has(a) && (i[a] = l[a]);
  }
  Object.assign(o, i), Object.assign(o, he({}, n(o), { lazy: void 0 }));
}
async function Nr(t, n, r, l, o, i, a, u, c) {
  c === void 0 && (c = {});
  let d,
    f,
    m,
    v = (j) => {
      let P,
        p = new Promise((h, y) => (P = y));
      return (
        (m = () => P()),
        n.signal.addEventListener("abort", m),
        Promise.race([
          j({ request: n, params: r.params, context: c.requestContext }),
          p,
        ])
      );
    };
  try {
    let j = r.route[t];
    if (r.route.lazy)
      if (j) {
        let P,
          p = await Promise.all([
            v(j).catch((h) => {
              P = h;
            }),
            Hu(r.route, i, o),
          ]);
        if (P) throw P;
        f = p[0];
      } else if ((await Hu(r.route, i, o), (j = r.route[t]), j)) f = await v(j);
      else if (t === "action") {
        let P = new URL(n.url),
          p = P.pathname + P.search;
        throw tt(405, { method: n.method, pathname: p, routeId: r.route.id });
      } else return { type: de.data, data: void 0 };
    else if (j) f = await v(j);
    else {
      let P = new URL(n.url),
        p = P.pathname + P.search;
      throw tt(404, { pathname: p });
    }
    Q(
      f !== void 0,
      "You defined " +
        (t === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          r.route.id +
          "\" but didn't return anything from your `" +
          t +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (j) {
    (d = de.error), (f = j);
  } finally {
    m && n.signal.removeEventListener("abort", m);
  }
  if (sy(f)) {
    let j = f.status;
    if (Zm.has(j)) {
      let p = f.headers.get("Location");
      if (
        (Q(
          p,
          "Redirects returned/thrown from loaders/actions must have a Location header",
        ),
        !Ef.test(p))
      )
        p = ma(new URL(n.url), l.slice(0, l.indexOf(r) + 1), a, !0, p, u);
      else if (!c.isStaticRequest) {
        let h = new URL(n.url),
          y = p.startsWith("//") ? new URL(h.protocol + p) : new URL(p),
          N = hr(y.pathname, a) != null;
        y.origin === h.origin && N && (p = y.pathname + y.search + y.hash);
      }
      if (c.isStaticRequest) throw (f.headers.set("Location", p), f);
      return {
        type: de.redirect,
        status: j,
        location: p,
        revalidate: f.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: f.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (c.isRouteRequest)
      throw { type: d === de.error ? de.error : de.data, response: f };
    let P;
    try {
      let p = f.headers.get("Content-Type");
      p && /\bapplication\/json\b/.test(p)
        ? f.body == null
          ? (P = null)
          : (P = await f.json())
        : (P = await f.text());
    } catch (p) {
      return { type: de.error, error: p };
    }
    return d === de.error
      ? { type: d, error: new ms(j, f.statusText, P), headers: f.headers }
      : { type: de.data, data: P, statusCode: f.status, headers: f.headers };
  }
  if (d === de.error) return { type: d, error: f };
  if (ay(f)) {
    var k, E;
    return {
      type: de.deferred,
      deferredData: f,
      statusCode: (k = f.init) == null ? void 0 : k.status,
      headers:
        ((E = f.init) == null ? void 0 : E.headers) &&
        new Headers(f.init.headers),
    };
  }
  return { type: de.data, data: f };
}
function Pr(t, n, r, l) {
  let o = t.createURL(Nf(n)).toString(),
    i = { signal: r };
  if (l && ht(l.formMethod)) {
    let { formMethod: a, formEncType: u } = l;
    (i.method = a.toUpperCase()),
      u === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": u })),
          (i.body = JSON.stringify(l.json)))
        : u === "text/plain"
          ? (i.body = l.text)
          : u === "application/x-www-form-urlencoded" && l.formData
            ? (i.body = ya(l.formData))
            : (i.body = l.formData);
  }
  return new Request(o, i);
}
function ya(t) {
  let n = new URLSearchParams();
  for (let [r, l] of t.entries())
    n.append(r, typeof l == "string" ? l : l.name);
  return n;
}
function Vu(t) {
  let n = new FormData();
  for (let [r, l] of t.entries()) n.append(r, l);
  return n;
}
function oy(t, n, r, l, o) {
  let i = {},
    a = null,
    u,
    c = !1,
    d = {};
  return (
    r.forEach((f, m) => {
      let v = n[m].route.id;
      if (
        (Q(!xn(f), "Cannot handle redirect results in processLoaderData"),
        Xn(f))
      ) {
        let k = Vr(t, v),
          E = f.error;
        l && ((E = Object.values(l)[0]), (l = void 0)),
          (a = a || {}),
          a[k.route.id] == null && (a[k.route.id] = E),
          (i[v] = void 0),
          c || ((c = !0), (u = Sf(f.error) ? f.error.status : 500)),
          f.headers && (d[v] = f.headers);
      } else
        gn(f)
          ? (o.set(v, f.deferredData), (i[v] = f.deferredData.data))
          : (i[v] = f.data),
          f.statusCode != null &&
            f.statusCode !== 200 &&
            !c &&
            (u = f.statusCode),
          f.headers && (d[v] = f.headers);
    }),
    l && ((a = l), (i[Object.keys(l)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: u || 200, loaderHeaders: d }
  );
}
function Wu(t, n, r, l, o, i, a, u) {
  let { loaderData: c, errors: d } = oy(n, r, l, o, u);
  for (let f = 0; f < i.length; f++) {
    let { key: m, match: v, controller: k } = i[f];
    Q(
      a !== void 0 && a[f] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let E = a[f];
    if (!(k && k.signal.aborted))
      if (Xn(E)) {
        let j = Vr(t.matches, v == null ? void 0 : v.route.id);
        (d && d[j.route.id]) || (d = he({}, d, { [j.route.id]: E.error })),
          t.fetchers.delete(m);
      } else if (xn(E)) Q(!1, "Unhandled fetcher revalidation redirect");
      else if (gn(E)) Q(!1, "Unhandled fetcher deferred data");
      else {
        let j = Vt(E.data);
        t.fetchers.set(m, j);
      }
  }
  return { loaderData: c, errors: d };
}
function Qu(t, n, r, l) {
  let o = he({}, n);
  for (let i of r) {
    let a = i.route.id;
    if (
      (n.hasOwnProperty(a)
        ? n[a] !== void 0 && (o[a] = n[a])
        : t[a] !== void 0 && i.route.loader && (o[a] = t[a]),
      l && l.hasOwnProperty(a))
    )
      break;
  }
  return o;
}
function Vr(t, n) {
  return (
    (n ? t.slice(0, t.findIndex((l) => l.route.id === n) + 1) : [...t])
      .reverse()
      .find((l) => l.route.hasErrorBoundary === !0) || t[0]
  );
}
function Ju(t) {
  let n =
    t.length === 1
      ? t[0]
      : t.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: n }],
    route: n,
  };
}
function tt(t, n) {
  let { pathname: r, routeId: l, method: o, type: i } = n === void 0 ? {} : n,
    a = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    t === 400
      ? ((a = "Bad Request"),
        o && r && l
          ? (u =
              "You made a " +
              o +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + l + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
            ? (u = "defer() is not supported in actions")
            : i === "invalid-body" && (u = "Unable to encode submission body"))
      : t === 403
        ? ((a = "Forbidden"),
          (u = 'Route "' + l + '" does not match URL "' + r + '"'))
        : t === 404
          ? ((a = "Not Found"), (u = 'No route matches URL "' + r + '"'))
          : t === 405 &&
            ((a = "Method Not Allowed"),
            o && r && l
              ? (u =
                  "You made a " +
                  o.toUpperCase() +
                  ' request to "' +
                  r +
                  '" but ' +
                  ('did not provide an `action` for route "' + l + '", ') +
                  "so there is no way to handle the request.")
              : o && (u = 'Invalid request method "' + o.toUpperCase() + '"')),
    new ms(t || 500, a, new Error(u), !0)
  );
}
function Ku(t) {
  for (let n = t.length - 1; n >= 0; n--) {
    let r = t[n];
    if (xn(r)) return { result: r, idx: n };
  }
}
function Nf(t) {
  let n = typeof t == "string" ? It(t) : t;
  return Dn(he({}, n, { hash: "" }));
}
function iy(t, n) {
  return t.pathname !== n.pathname || t.search !== n.search
    ? !1
    : t.hash === ""
      ? n.hash !== ""
      : t.hash === n.hash
        ? !0
        : n.hash !== "";
}
function gn(t) {
  return t.type === de.deferred;
}
function Xn(t) {
  return t.type === de.error;
}
function xn(t) {
  return (t && t.type) === de.redirect;
}
function ay(t) {
  let n = t;
  return (
    n &&
    typeof n == "object" &&
    typeof n.data == "object" &&
    typeof n.subscribe == "function" &&
    typeof n.cancel == "function" &&
    typeof n.resolveData == "function"
  );
}
function sy(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.headers == "object" &&
    typeof t.body < "u"
  );
}
function uy(t) {
  return Xm.has(t.toLowerCase());
}
function ht(t) {
  return Gm.has(t.toLowerCase());
}
async function Gu(t, n, r, l, o, i) {
  for (let a = 0; a < r.length; a++) {
    let u = r[a],
      c = n[a];
    if (!c) continue;
    let d = t.find((m) => m.route.id === c.route.id),
      f = d != null && !kf(d, c) && (i && i[c.route.id]) !== void 0;
    if (gn(u) && (o || f)) {
      let m = l[a];
      Q(m, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Pf(u, m, o).then((v) => {
          v && (r[a] = v || r[a]);
        });
    }
  }
}
async function Pf(t, n, r) {
  if ((r === void 0 && (r = !1), !(await t.deferredData.resolveData(n)))) {
    if (r)
      try {
        return { type: de.data, data: t.deferredData.unwrappedData };
      } catch (o) {
        return { type: de.error, error: o };
      }
    return { type: de.data, data: t.deferredData.data };
  }
}
function ys(t) {
  return new URLSearchParams(t).getAll("index").some((n) => n === "");
}
function va(t, n) {
  let r = typeof n == "string" ? It(n).search : n.search;
  if (t[t.length - 1].route.index && ys(r || "")) return t[t.length - 1];
  let l = wf(t);
  return l[l.length - 1];
}
function Yu(t) {
  let {
    formMethod: n,
    formAction: r,
    formEncType: l,
    text: o,
    formData: i,
    json: a,
  } = t;
  if (!(!n || !r || !l)) {
    if (o != null)
      return {
        formMethod: n,
        formAction: r,
        formEncType: l,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (i != null)
      return {
        formMethod: n,
        formAction: r,
        formEncType: l,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: n,
        formAction: r,
        formEncType: l,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function wi(t, n) {
  return n
    ? {
        state: "loading",
        location: t,
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
      }
    : {
        state: "loading",
        location: t,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function cy(t, n) {
  return {
    state: "submitting",
    location: t,
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text,
  };
}
function Dr(t, n) {
  return t
    ? {
        state: "loading",
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
        data: n,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: n,
      };
}
function dy(t, n) {
  return {
    state: "submitting",
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
    data: n ? n.data : void 0,
  };
}
function Vt(t) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t,
  };
}
function fy(t, n) {
  try {
    let r = t.sessionStorage.getItem(Cf);
    if (r) {
      let l = JSON.parse(r);
      for (let [o, i] of Object.entries(l || {}))
        i && Array.isArray(i) && n.set(o, new Set(i || []));
    }
  } catch {}
}
function hy(t, n) {
  if (n.size > 0) {
    let r = {};
    for (let [l, o] of n) r[l] = [...o];
    try {
      t.sessionStorage.setItem(Cf, JSON.stringify(r));
    } catch (l) {
      Pn(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          l +
          ").",
      );
    }
  }
}
/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sl() {
  return (
    (sl = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var l in r)
              Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
          }
          return t;
        }),
    sl.apply(this, arguments)
  );
}
const Oo = S.createContext(null),
  Df = S.createContext(null),
  Tn = S.createContext(null),
  Uo = S.createContext(null),
  cn = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Rf = S.createContext(null);
function py(t, n) {
  let { relative: r } = n === void 0 ? {} : n;
  ml() || Q(!1);
  let { basename: l, navigator: o } = S.useContext(Tn),
    { hash: i, pathname: a, search: u } = Tf(t, { relative: r }),
    c = a;
  return (
    l !== "/" && (c = a === "/" ? l : _t([l, a])),
    o.createHref({ pathname: c, search: u, hash: i })
  );
}
function ml() {
  return S.useContext(Uo) != null;
}
function Ao() {
  return ml() || Q(!1), S.useContext(Uo).location;
}
function _f(t) {
  S.useContext(Tn).static || S.useLayoutEffect(t);
}
function my() {
  let { isDataRoute: t } = S.useContext(cn);
  return t ? Py() : yy();
}
function yy() {
  ml() || Q(!1);
  let t = S.useContext(Oo),
    { basename: n, future: r, navigator: l } = S.useContext(Tn),
    { matches: o } = S.useContext(cn),
    { pathname: i } = Ao(),
    a = JSON.stringify(hs(o, r.v7_relativeSplatPath)),
    u = S.useRef(!1);
  return (
    _f(() => {
      u.current = !0;
    }),
    S.useCallback(
      function (d, f) {
        if ((f === void 0 && (f = {}), !u.current)) return;
        if (typeof d == "number") {
          l.go(d);
          return;
        }
        let m = ps(d, JSON.parse(a), i, f.relative === "path");
        t == null &&
          n !== "/" &&
          (m.pathname = m.pathname === "/" ? n : _t([n, m.pathname])),
          (f.replace ? l.replace : l.push)(m, f.state, f);
      },
      [n, l, a, i, t],
    )
  );
}
function st() {
  let { matches: t } = S.useContext(cn),
    n = t[t.length - 1];
  return n ? n.params : {};
}
function Tf(t, n) {
  let { relative: r } = n === void 0 ? {} : n,
    { future: l } = S.useContext(Tn),
    { matches: o } = S.useContext(cn),
    { pathname: i } = Ao(),
    a = JSON.stringify(hs(o, l.v7_relativeSplatPath));
  return S.useMemo(() => ps(t, JSON.parse(a), i, r === "path"), [t, a, i, r]);
}
function vy(t, n, r, l) {
  ml() || Q(!1);
  let { navigator: o } = S.useContext(Tn),
    { matches: i } = S.useContext(cn),
    a = i[i.length - 1],
    u = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : "/";
  a && a.route;
  let d = Ao(),
    f;
  if (n) {
    var m;
    let P = typeof n == "string" ? It(n) : n;
    c === "/" || ((m = P.pathname) != null && m.startsWith(c)) || Q(!1),
      (f = P);
  } else f = d;
  let v = f.pathname || "/",
    k = c === "/" ? v : v.slice(c.length) || "/",
    E = Yn(t, { pathname: k }),
    j = jy(
      E &&
        E.map((P) =>
          Object.assign({}, P, {
            params: Object.assign({}, u, P.params),
            pathname: _t([
              c,
              o.encodeLocation
                ? o.encodeLocation(P.pathname).pathname
                : P.pathname,
            ]),
            pathnameBase:
              P.pathnameBase === "/"
                ? c
                : _t([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(P.pathnameBase).pathname
                      : P.pathnameBase,
                  ]),
          }),
        ),
      i,
      r,
      l,
    );
  return n && j
    ? S.createElement(
        Uo.Provider,
        {
          value: {
            location: sl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f,
            ),
            navigationType: pe.Pop,
          },
        },
        j,
      )
    : j;
}
function gy() {
  let t = Ny(),
    n = Sf(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
        ? t.message
        : JSON.stringify(t),
    r = t instanceof Error ? t.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, n),
    r ? S.createElement("pre", { style: o }, r) : null,
    null,
  );
}
const xy = S.createElement(gy, null);
class wy extends S.Component {
  constructor(n) {
    super(n),
      (this.state = {
        location: n.location,
        revalidation: n.revalidation,
        error: n.error,
      });
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  static getDerivedStateFromProps(n, r) {
    return r.location !== n.location ||
      (r.revalidation !== "idle" && n.revalidation === "idle")
      ? { error: n.error, location: n.location, revalidation: n.revalidation }
      : {
          error: n.error !== void 0 ? n.error : r.error,
          location: r.location,
          revalidation: n.revalidation || r.revalidation,
        };
  }
  componentDidCatch(n, r) {
    console.error(
      "React Router caught the following error during render",
      n,
      r,
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          cn.Provider,
          { value: this.props.routeContext },
          S.createElement(Rf.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Sy(t) {
  let { routeContext: n, match: r, children: l } = t,
    o = S.useContext(Oo);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    S.createElement(cn.Provider, { value: n }, l)
  );
}
function jy(t, n, r, l) {
  var o;
  if (
    (n === void 0 && (n = []),
    r === void 0 && (r = null),
    l === void 0 && (l = null),
    t == null)
  ) {
    var i;
    if ((i = r) != null && i.errors) t = r.matches;
    else return null;
  }
  let a = t,
    u = (o = r) == null ? void 0 : o.errors;
  if (u != null) {
    let f = a.findIndex(
      (m) => m.route.id && (u == null ? void 0 : u[m.route.id]),
    );
    f >= 0 || Q(!1), (a = a.slice(0, Math.min(a.length, f + 1)));
  }
  let c = !1,
    d = -1;
  if (r && l && l.v7_partialHydration)
    for (let f = 0; f < a.length; f++) {
      let m = a[f];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (d = f),
        m.route.id)
      ) {
        let { loaderData: v, errors: k } = r,
          E =
            m.route.loader &&
            v[m.route.id] === void 0 &&
            (!k || k[m.route.id] === void 0);
        if (m.route.lazy || E) {
          (c = !0), d >= 0 ? (a = a.slice(0, d + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((f, m, v) => {
    let k,
      E = !1,
      j = null,
      P = null;
    r &&
      ((k = u && m.route.id ? u[m.route.id] : void 0),
      (j = m.route.errorElement || xy),
      c &&
        (d < 0 && v === 0
          ? (Dy("route-fallback", !1), (E = !0), (P = null))
          : d === v &&
            ((E = !0), (P = m.route.hydrateFallbackElement || null))));
    let p = n.concat(a.slice(0, v + 1)),
      h = () => {
        let y;
        return (
          k
            ? (y = j)
            : E
              ? (y = P)
              : m.route.Component
                ? (y = S.createElement(m.route.Component, null))
                : m.route.element
                  ? (y = m.route.element)
                  : (y = f),
          S.createElement(Sy, {
            match: m,
            routeContext: { outlet: f, matches: p, isDataRoute: r != null },
            children: y,
          })
        );
      };
    return r && (m.route.ErrorBoundary || m.route.errorElement || v === 0)
      ? S.createElement(wy, {
          location: r.location,
          revalidation: r.revalidation,
          component: j,
          error: k,
          children: h(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Lf = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(Lf || {}),
  wo = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(wo || {});
function Ey(t) {
  let n = S.useContext(Oo);
  return n || Q(!1), n;
}
function Cy(t) {
  let n = S.useContext(Df);
  return n || Q(!1), n;
}
function ky(t) {
  let n = S.useContext(cn);
  return n || Q(!1), n;
}
function Mf(t) {
  let n = ky(),
    r = n.matches[n.matches.length - 1];
  return r.route.id || Q(!1), r.route.id;
}
function Ny() {
  var t;
  let n = S.useContext(Rf),
    r = Cy(wo.UseRouteError),
    l = Mf(wo.UseRouteError);
  return n !== void 0 ? n : (t = r.errors) == null ? void 0 : t[l];
}
function Py() {
  let { router: t } = Ey(Lf.UseNavigateStable),
    n = Mf(wo.UseNavigateStable),
    r = S.useRef(!1);
  return (
    _f(() => {
      r.current = !0;
    }),
    S.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          r.current &&
            (typeof o == "number"
              ? t.navigate(o)
              : t.navigate(o, sl({ fromRouteId: n }, i)));
      },
      [t, n],
    )
  );
}
const Xu = {};
function Dy(t, n, r) {
  !n && !Xu[t] && (Xu[t] = !0);
}
function Ry(t) {
  let {
    basename: n = "/",
    children: r = null,
    location: l,
    navigationType: o = pe.Pop,
    navigator: i,
    static: a = !1,
    future: u,
  } = t;
  ml() && Q(!1);
  let c = n.replace(/^\/*/, "/"),
    d = S.useMemo(
      () => ({
        basename: c,
        navigator: i,
        static: a,
        future: sl({ v7_relativeSplatPath: !1 }, u),
      }),
      [c, u, i, a],
    );
  typeof l == "string" && (l = It(l));
  let {
      pathname: f = "/",
      search: m = "",
      hash: v = "",
      state: k = null,
      key: E = "default",
    } = l,
    j = S.useMemo(() => {
      let P = hr(f, c);
      return P == null
        ? null
        : {
            location: { pathname: P, search: m, hash: v, state: k, key: E },
            navigationType: o,
          };
    }, [c, f, m, v, k, E, o]);
  return j == null
    ? null
    : S.createElement(
        Tn.Provider,
        { value: d },
        S.createElement(Uo.Provider, { children: r, value: j }),
      );
}
new Promise(() => {});
function _y(t) {
  let n = {
    hasErrorBoundary: t.ErrorBoundary != null || t.errorElement != null,
  };
  return (
    t.Component &&
      Object.assign(n, {
        element: S.createElement(t.Component),
        Component: void 0,
      }),
    t.HydrateFallback &&
      Object.assign(n, {
        hydrateFallbackElement: S.createElement(t.HydrateFallback),
        HydrateFallback: void 0,
      }),
    t.ErrorBoundary &&
      Object.assign(n, {
        errorElement: S.createElement(t.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    n
  );
}
/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ul() {
  return (
    (ul = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var l in r)
              Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
          }
          return t;
        }),
    ul.apply(this, arguments)
  );
}
function Ty(t, n) {
  if (t == null) return {};
  var r = {},
    l = Object.keys(t),
    o,
    i;
  for (i = 0; i < l.length; i++)
    (o = l[i]), !(n.indexOf(o) >= 0) && (r[o] = t[o]);
  return r;
}
function Ly(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function My(t, n) {
  return t.button === 0 && (!n || n === "_self") && !Ly(t);
}
const Fy = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
  "unstable_viewTransition",
];
function zy(t, n) {
  return ty({
    basename: n == null ? void 0 : n.basename,
    future: ul({}, n == null ? void 0 : n.future, { v7_prependBasename: !0 }),
    history: Em({ window: n == null ? void 0 : n.window }),
    hydrationData: (n == null ? void 0 : n.hydrationData) || Iy(),
    routes: t,
    mapRouteProperties: _y,
    window: n == null ? void 0 : n.window,
  }).initialize();
}
function Iy() {
  var t;
  let n = (t = window) == null ? void 0 : t.__staticRouterHydrationData;
  return n && n.errors && (n = ul({}, n, { errors: Oy(n.errors) })), n;
}
function Oy(t) {
  if (!t) return null;
  let n = Object.entries(t),
    r = {};
  for (let [l, o] of n)
    if (o && o.__type === "RouteErrorResponse")
      r[l] = new ms(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == "function")
          try {
            let a = new i(o.message);
            (a.stack = ""), (r[l] = a);
          } catch {}
      }
      if (r[l] == null) {
        let i = new Error(o.message);
        (i.stack = ""), (r[l] = i);
      }
    } else r[l] = o;
  return r;
}
const Uy = S.createContext({ isTransitioning: !1 }),
  Ay = S.createContext(new Map()),
  $y = "startTransition",
  Zu = ch[$y],
  By = "flushSync",
  qu = Sm[By];
function Hy(t) {
  Zu ? Zu(t) : t();
}
function Rr(t) {
  qu ? qu(t) : t();
}
class Vy {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((n, r) => {
        (this.resolve = (l) => {
          this.status === "pending" && ((this.status = "resolved"), n(l));
        }),
          (this.reject = (l) => {
            this.status === "pending" && ((this.status = "rejected"), r(l));
          });
      }));
  }
}
function Wy(t) {
  let { fallbackElement: n, router: r, future: l } = t,
    [o, i] = S.useState(r.state),
    [a, u] = S.useState(),
    [c, d] = S.useState({ isTransitioning: !1 }),
    [f, m] = S.useState(),
    [v, k] = S.useState(),
    [E, j] = S.useState(),
    P = S.useRef(new Map()),
    { v7_startTransition: p } = l || {},
    h = S.useCallback(
      (D) => {
        p ? Hy(D) : D();
      },
      [p],
    ),
    y = S.useCallback(
      (D, T) => {
        let {
          deletedFetchers: I,
          unstable_flushSync: U,
          unstable_viewTransitionOpts: Y,
        } = T;
        I.forEach((ge) => P.current.delete(ge)),
          D.fetchers.forEach((ge, be) => {
            ge.data !== void 0 && P.current.set(be, ge.data);
          });
        let we =
          r.window == null ||
          typeof r.window.document.startViewTransition != "function";
        if (!Y || we) {
          U ? Rr(() => i(D)) : h(() => i(D));
          return;
        }
        if (U) {
          Rr(() => {
            v && (f && f.resolve(), v.skipTransition()),
              d({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Y.currentLocation,
                nextLocation: Y.nextLocation,
              });
          });
          let ge = r.window.document.startViewTransition(() => {
            Rr(() => i(D));
          });
          ge.finished.finally(() => {
            Rr(() => {
              m(void 0), k(void 0), u(void 0), d({ isTransitioning: !1 });
            });
          }),
            Rr(() => k(ge));
          return;
        }
        v
          ? (f && f.resolve(),
            v.skipTransition(),
            j({
              state: D,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
          : (u(D),
            d({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }));
      },
      [r.window, v, f, P, h],
    );
  S.useLayoutEffect(() => r.subscribe(y), [r, y]),
    S.useEffect(() => {
      c.isTransitioning && !c.flushSync && m(new Vy());
    }, [c]),
    S.useEffect(() => {
      if (f && a && r.window) {
        let D = a,
          T = f.promise,
          I = r.window.document.startViewTransition(async () => {
            h(() => i(D)), await T;
          });
        I.finished.finally(() => {
          m(void 0), k(void 0), u(void 0), d({ isTransitioning: !1 });
        }),
          k(I);
      }
    }, [h, a, f, r.window]),
    S.useEffect(() => {
      f && a && o.location.key === a.location.key && f.resolve();
    }, [f, v, o.location, a]),
    S.useEffect(() => {
      !c.isTransitioning &&
        E &&
        (u(E.state),
        d({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: E.currentLocation,
          nextLocation: E.nextLocation,
        }),
        j(void 0));
    }, [c.isTransitioning, E]),
    S.useEffect(() => {}, []);
  let N = S.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (D) => r.navigate(D),
        push: (D, T, I) =>
          r.navigate(D, {
            state: T,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset,
          }),
        replace: (D, T, I) =>
          r.navigate(D, {
            replace: !0,
            state: T,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset,
          }),
      }),
      [r],
    ),
    _ = r.basename || "/",
    g = S.useMemo(
      () => ({ router: r, navigator: N, static: !1, basename: _ }),
      [r, N, _],
    );
  return S.createElement(
    S.Fragment,
    null,
    S.createElement(
      Oo.Provider,
      { value: g },
      S.createElement(
        Df.Provider,
        { value: o },
        S.createElement(
          Ay.Provider,
          { value: P.current },
          S.createElement(
            Uy.Provider,
            { value: c },
            S.createElement(
              Ry,
              {
                basename: _,
                location: o.location,
                navigationType: o.historyAction,
                navigator: N,
                future: { v7_relativeSplatPath: r.future.v7_relativeSplatPath },
              },
              o.initialized || r.future.v7_partialHydration
                ? S.createElement(Qy, {
                    routes: r.routes,
                    future: r.future,
                    state: o,
                  })
                : n,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function Qy(t) {
  let { routes: n, future: r, state: l } = t;
  return vy(n, void 0, l, r);
}
const Jy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ky = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  b = S.forwardRef(function (n, r) {
    let {
        onClick: l,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: u,
        target: c,
        to: d,
        preventScrollReset: f,
        unstable_viewTransition: m,
      } = n,
      v = Ty(n, Fy),
      { basename: k } = S.useContext(Tn),
      E,
      j = !1;
    if (typeof d == "string" && Ky.test(d) && ((E = d), Jy))
      try {
        let y = new URL(window.location.href),
          N = d.startsWith("//") ? new URL(y.protocol + d) : new URL(d),
          _ = hr(N.pathname, k);
        N.origin === y.origin && _ != null
          ? (d = _ + N.search + N.hash)
          : (j = !0);
      } catch {}
    let P = py(d, { relative: o }),
      p = Gy(d, {
        replace: a,
        state: u,
        target: c,
        preventScrollReset: f,
        relative: o,
        unstable_viewTransition: m,
      });
    function h(y) {
      l && l(y), y.defaultPrevented || p(y);
    }
    return S.createElement(
      "a",
      ul({}, v, { href: E || P, onClick: j || i ? l : h, ref: r, target: c }),
    );
  });
var bu;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(bu || (bu = {}));
var ec;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(ec || (ec = {}));
function Gy(t, n) {
  let {
      target: r,
      replace: l,
      state: o,
      preventScrollReset: i,
      relative: a,
      unstable_viewTransition: u,
    } = n === void 0 ? {} : n,
    c = my(),
    d = Ao(),
    f = Tf(t, { relative: a });
  return S.useCallback(
    (m) => {
      if (My(m, r)) {
        m.preventDefault();
        let v = l !== void 0 ? l : Dn(d) === Dn(f);
        c(t, {
          replace: v,
          state: o,
          preventScrollReset: i,
          relative: a,
          unstable_viewTransition: u,
        });
      }
    },
    [d, c, f, l, o, r, t, i, a, u],
  );
}
function ve() {
  return s.jsxs("section", {
    id: "header",
    children: [
      s.jsx(b, {
        to: "/",
        children: s.jsx("h2", { children: "HR Management" }),
      }),
      s.jsxs("div", {
        id: "searchbar",
        children: [
          s.jsx("input", { type: "text" }),
          s.jsx("button", { type: "submit", children: "search" }),
        ],
      }),
    ],
  });
}
function Yy() {
  return s.jsx("section", { id: "footer", children: "Footer section" });
}
function Xy() {
  return s.jsxs("div", {
    id: "app",
    children: [
      s.jsx(ve, {}),
      s.jsxs("section", { children: [s.jsx(ye, {}), s.jsx(jm, {})] }),
      s.jsx(Yy, {}),
    ],
  });
}
function Zy() {
  const [t, n] = S.useState([]),
    r = async () => {
      const u = await (
        await (
          await fetch("http://localhost:5000/employees", {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      n(u);
    };
  S.useEffect(() => {
    r();
  }, []);
  const l = () => {
      e.preventDefault();
    },
    o = async (i) => {
      (
        await (
          await fetch(`http://localhost:5000/employee/${i}/delete`, {
            method: "post",
            mode: "cors",
          })
        ).json()
      ).status === "ok" && r();
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      s.jsxs("table", {
        children: [
          s.jsx("thead", {
            children: s.jsxs("tr", {
              children: [
                s.jsx("th", { children: "Name" }),
                s.jsx("th", { children: "Surname" }),
                s.jsx("th", { children: "ID Number" }),
                s.jsx("th", { children: "Gender" }),
                s.jsx("th", { children: "Date of birth" }),
              ],
            }),
          }),
          s.jsx("tbody", {
            children: t.map((i) =>
              s.jsxs(
                "tr",
                {
                  children: [
                    s.jsx("td", { children: i.firstName }),
                    s.jsx("td", { children: i.lastName }),
                    s.jsx("td", { children: i.idNumber }),
                    s.jsx("td", { children: i.gender }),
                    s.jsx("td", { children: i.dateOfBirth }),
                    s.jsx("td", {
                      children: s.jsx(b, {
                        to: `/employee/${i.id}/update`,
                        children: s.jsx("button", {
                          type: "submit",
                          children: "EDIT",
                        }),
                      }),
                    }),
                    s.jsx("td", {
                      children: s.jsx("button", {
                        className: "deleteBTN",
                        onClick: () => {
                          o(i.id);
                        },
                        onSubmit: l,
                        type: "submit",
                        children: "DELETE",
                      }),
                    }),
                  ],
                },
                i.id,
              ),
            ),
          }),
          s.jsx("tfoot", {}),
        ],
      }),
    ],
  });
}
function qy() {
  const [t, n] = S.useState([]),
    r = async () => {
      const u = await (
        await (
          await fetch("http://localhost:5000/contacts", {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      n(u);
    };
  S.useEffect(() => {
    r();
  }, []);
  const l = () => {
      e.preventDefault();
    },
    o = async (i) => {
      (
        await (
          await fetch(`http://localhost:5000/contact/${i}/delete`, {
            method: "post",
            mode: "cors",
          })
        ).json()
      ).status === "ok" && r();
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      s.jsxs("table", {
        children: [
          s.jsx("thead", {
            children: s.jsxs("tr", {
              children: [
                s.jsx("th", { children: "Email" }),
                s.jsx("th", { children: "Contact Number" }),
                s.jsx("th", { children: "Work Email" }),
                s.jsx("th", { children: "Alternate Contact Number" }),
                s.jsx("th", { children: "Employee ID" }),
              ],
            }),
          }),
          s.jsx("tbody", {
            children: t.map((i) =>
              s.jsxs(
                "tr",
                {
                  children: [
                    s.jsx("td", { children: i.email }),
                    s.jsx("td", { children: i.cellphoneNumber }),
                    s.jsx("td", { children: i.companyEmail }),
                    s.jsx("td", { children: i.alternateNumber }),
                    s.jsx("td", {
                      children: s.jsx(b, {
                        to: `/employee/${i.employeeId}`,
                        children: i.employeeId,
                      }),
                    }),
                    s.jsx("td", {
                      children: s.jsx(b, {
                        to: `/contact/${i.id}/update`,
                        children: s.jsx("button", {
                          type: "submit",
                          children: "EDIT",
                        }),
                      }),
                    }),
                    s.jsx("td", {
                      children: s.jsx("button", {
                        className: "deleteBTN",
                        onClick: () => {
                          o(i.id);
                        },
                        onSubmit: l,
                        type: "submit",
                        children: "DELETE",
                      }),
                    }),
                  ],
                },
                i.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function by() {
  const [t, n] = S.useState([]),
    r = async () => {
      const u = await (
        await (
          await fetch("http://localhost:5000/documents", {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      n(u);
    };
  S.useEffect(() => {
    r();
  }, []);
  const l = () => {
      e.preventDefault();
    },
    o = async (i) => {
      (
        await (
          await fetch(`http://localhost:5000/document/${i}/delete`, {
            method: "post",
            mode: "cors",
          })
        ).json()
      ).status === "ok" && r();
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      s.jsxs("table", {
        children: [
          s.jsx("thead", {
            children: s.jsxs("tr", {
              children: [
                s.jsx("th", { children: "name" }),
                s.jsx("th", { children: "content" }),
                s.jsx("th", { children: "Employee ID" }),
              ],
            }),
          }),
          s.jsx("tbody", {
            children: t.map((i) =>
              s.jsxs(
                "tr",
                {
                  children: [
                    s.jsx("td", { children: i.documentName }),
                    s.jsx("td", {}),
                    s.jsx("td", {
                      children: s.jsx(b, {
                        to: `/employee/${i.employeeId}`,
                        children: i.employeeId,
                      }),
                    }),
                    s.jsx("td", {
                      children: s.jsx(b, {
                        to: `/document/${i.id}/update`,
                        children: s.jsx("button", {
                          type: "submit",
                          children: "EDIT",
                        }),
                      }),
                    }),
                    s.jsx("td", {
                      children: s.jsx("button", {
                        className: "deleteBTN",
                        onClick: () => {
                          o(i.id);
                        },
                        onSubmit: l,
                        type: "submit",
                        children: "DELETE",
                      }),
                    }),
                  ],
                },
                i.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function ev() {
  const [t, n] = S.useState([]),
    r = async () => {
      const i = await (
        await (
          await fetch("http://localhost:5000/leaves", {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      n(i);
    };
  return (
    S.useEffect(() => {
      r();
    }, []),
    s.jsxs(s.Fragment, {
      children: [
        s.jsx(ve, {}),
        s.jsx(ye, {}),
        s.jsxs("table", {
          children: [
            s.jsx("thead", {
              children: s.jsxs("tr", {
                children: [
                  s.jsx("th", { children: "Days Balance" }),
                  s.jsx("th", { children: "Days Absent" }),
                  s.jsx("th", { children: "Employee ID" }),
                ],
              }),
            }),
            s.jsx("tbody", {
              children: t.map((l) =>
                s.jsxs(
                  "tr",
                  {
                    children: [
                      s.jsx("td", { children: l.leaveBalance }),
                      s.jsx("td", { children: l.daysAbsent }),
                      s.jsx("td", {
                        children: s.jsx(b, {
                          to: `/employee/${l.employeeId}`,
                          children: l.employeeId,
                        }),
                      }),
                    ],
                  },
                  l.id,
                ),
              ),
            }),
          ],
        }),
      ],
    })
  );
}
function tv() {
  const [t, n] = S.useState([]),
    r = async () => {
      const u = await (
        await (
          await fetch("http://localhost:5000/employmentdetails", {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      n(u);
    };
  S.useEffect(() => {
    r();
  }, []);
  const l = () => {
      e.preventDefault();
    },
    o = async (i) => {
      (
        await (
          await fetch(`http://localhost:5000/employmentdetail/${i}/delete`, {
            method: "post",
            mode: "cors",
          })
        ).json()
      ).status === "ok" && r();
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      s.jsxs("table", {
        children: [
          s.jsx("thead", {
            children: s.jsxs("tr", {
              children: [
                s.jsx("th", { children: "Company" }),
                s.jsx("th", { children: "Role" }),
                s.jsx("th", { children: "Senior/Manager" }),
                s.jsx("th", { children: "Status" }),
                s.jsx("th", { children: "Start Date" }),
                s.jsx("th", { children: "Employee ID" }),
              ],
            }),
          }),
          s.jsx("tbody", {
            children: t.map((i) =>
              s.jsxs(
                "tr",
                {
                  children: [
                    s.jsx("td", { children: i.company }),
                    s.jsx("td", { children: i.jobRole }),
                    s.jsx("td", {
                      children: s.jsx(b, {
                        to: `/employee/${i.employeeId}`,
                        children: i.reportsTo,
                      }),
                    }),
                    s.jsx("td", { children: i.employmentStatus }),
                    s.jsx("td", { children: i.startDate }),
                    s.jsx("td", {
                      children: s.jsx(b, {
                        to: `/employee/${i.employeeId}`,
                        children: i.employeeId,
                      }),
                    }),
                    s.jsx("td", {
                      children: s.jsx(b, {
                        to: `/employmentdetail/${i.id}/update`,
                        children: s.jsx("button", {
                          type: "submit",
                          children: "DELETE",
                        }),
                      }),
                    }),
                    s.jsx("td", {
                      children: s.jsx("button", {
                        className: "deleteBTN",
                        onClick: () => {
                          o(i.id);
                        },
                        onSubmit: l,
                        type: "submit",
                        children: "DELETE",
                      }),
                    }),
                  ],
                },
                i.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function nv() {
  const [t, n] = S.useState([]),
    r = async () => {
      const u = await (
        await (
          await fetch("http://localhost:5000/addresses", {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      n(u);
    };
  S.useEffect(() => {
    r();
  }, []);
  const l = () => {
      e.preventDefault();
    },
    o = async (i) => {
      (
        await (
          await fetch(`http://localhost:5000/address/${i}/delete`, {
            method: "post",
            mode: "cors",
          })
        ).json()
      ).status === "ok" && r();
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      s.jsxs("table", {
        children: [
          s.jsx("thead", {
            children: s.jsxs("tr", {
              children: [
                s.jsx("th", { children: "Street" }),
                s.jsx("th", { children: "Suburb" }),
                s.jsx("th", { children: "City" }),
                s.jsx("th", { children: "Province" }),
                s.jsx("th", { children: "Postal Code" }),
                s.jsx("th", { children: "Employee ID" }),
              ],
            }),
          }),
          s.jsx("tbody", {
            children: t.map((i) =>
              s.jsxs(
                "tr",
                {
                  children: [
                    s.jsx("td", { children: i.street }),
                    s.jsx("td", { children: i.suburb }),
                    s.jsx("td", { children: i.city }),
                    s.jsx("td", { children: i.province }),
                    s.jsx("td", { children: i.postalCode }),
                    s.jsx("td", {
                      children: s.jsx(b, {
                        to: `/employee/${i.employeeId}`,
                        children: i.employeeId,
                      }),
                    }),
                    s.jsx("td", {
                      children: s.jsx(b, {
                        to: `/address/${i.id}/update`,
                        children: s.jsx("button", {
                          type: "submit",
                          children: "EDIT",
                        }),
                      }),
                    }),
                    s.jsx("td", {
                      children: s.jsx("button", {
                        className: "deleteBTN",
                        onClick: () => {
                          o(i.id);
                        },
                        onSubmit: l,
                        type: "submit",
                        children: "DELETE",
                      }),
                    }),
                  ],
                },
                i.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function rv() {
  const [t, n] = S.useState([]),
    r = async () => {
      const i = await (
        await (
          await fetch("http://localhost:5000/compansations", {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      n(i);
    };
  return (
    S.useEffect(() => {
      r();
    }, []),
    s.jsxs(s.Fragment, {
      children: [
        s.jsx(ve, {}),
        s.jsx(ye, {}),
        s.jsxs("table", {
          children: [
            s.jsx("thead", {
              children: s.jsxs("tr", {
                children: [
                  s.jsx("th", { children: "Salary" }),
                  s.jsx("th", { children: "Deductions" }),
                  s.jsx("th", { children: "Bonus" }),
                  s.jsx("th", { children: "Employee ID" }),
                ],
              }),
            }),
            s.jsx("tbody", {
              children: t.map((l) =>
                s.jsxs(
                  "tr",
                  {
                    children: [
                      s.jsx("td", { children: l.salary }),
                      s.jsx("td", { children: l.deductions }),
                      s.jsx("td", { children: l.bonus }),
                      s.jsx("td", {
                        children: s.jsx(b, {
                          to: `/employee/${l.employeeId}`,
                          children: l.employeeId,
                        }),
                      }),
                      s.jsx("td", {
                        children: s.jsx(b, {
                          to: `/compensation/${l.id}/update`,
                          children: s.jsx("button", {
                            type: "submit",
                            children: "edit",
                          }),
                        }),
                      }),
                    ],
                  },
                  l.id,
                ),
              ),
            }),
          ],
        }),
      ],
    })
  );
}
function lv() {
  const { id: t } = st(),
    [n, r] = S.useState({ salary: 0, deductions: 0, bonus: 0 }),
    l = async (a) => {
      const d = await (
        await (
          await fetch(`http://localhost:5000/compansation/${a}`, {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      r({
        salary: await d[0].salary,
        deductions: await d[0].deductions,
        bonus: await d[0].bonus,
      });
    };
  S.useEffect(() => {
    l(t);
  }, [t]);
  const o = (a) => {
      const { name: u, value: c } = a.target;
      r((d) => ({ ...d, [u]: parseInt(c, 10) }));
    },
    i = async (a) => {
      a.preventDefault();
      const c = await (
        await fetch(`http://localhost:5000/compansation/${t}/update`, {
          method: "post",
          mode: "cors",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(n),
        })
      ).json();
      console.log(c);
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      s.jsxs("form", {
        children: [
          s.jsx("legend", { children: "Edit Compensation" }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Salary" }),
              s.jsx("input", {
                type: "number",
                value: n.salary,
                name: "salary",
                onChange: o,
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Deductions" }),
              s.jsx("input", {
                type: "number",
                value: n.deductions,
                name: "deductions",
                onChange: o,
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Bonus" }),
              s.jsx("input", {
                type: "number",
                value: n.bonus,
                name: "bonus",
                onChange: o,
              }),
            ],
          }),
          s.jsx("button", { type: "submit", onClick: i, children: "Submit" }),
        ],
      }),
    ],
  });
}
function ov() {
  const [t, n] = S.useState(!1),
    { id: r } = st(),
    [l, o] = S.useState({
      street: "",
      suburb: "",
      city: "",
      province: "",
      postalCode: 0,
    }),
    i = async (c) => {
      const m = await (
        await (
          await fetch(`http://localhost:5000/address/${c}`, {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      o({
        street: m[0].street,
        suburb: m[0].suburb,
        city: m[0].city,
        province: m[0].province,
        postalCode: m[0].postalCode,
      });
    };
  S.useEffect(() => {
    (async () => {
      await i(r);
    })();
  }, [r]);
  const a = (c) => {
      const { name: d, value: f } = c.target;
      o((m) => ({ ...m, [d]: d === "postalCode" ? Number(f) : f }));
    },
    u = async (c) => {
      c.preventDefault();
      const d = await fetch(`http://localhost:5000/address/${r}/update`, {
        method: "post",
        mode: "cors",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(l),
      });
      console.log(l);
      const f = await d.json();
      console.log(f), f.status === "ok" && n(!0);
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      t === !1
        ? s.jsxs("form", {
            children: [
              s.jsx("legend", { children: "Edit address information" }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Street" }),
                  s.jsx("input", {
                    type: "text",
                    value: l.street,
                    name: "street",
                    onChange: a,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Suburb" }),
                  s.jsx("input", {
                    type: "text",
                    value: l.suburb,
                    name: "suburb",
                    onChange: a,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "City" }),
                  s.jsx("input", {
                    type: "text",
                    value: l.city,
                    name: "city",
                    onChange: a,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Province" }),
                  s.jsx("input", {
                    type: "text",
                    value: l.province,
                    name: "province",
                    onChange: a,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Postal code" }),
                  s.jsx("input", {
                    type: "number",
                    value: l.postalCode,
                    name: "postalCode",
                    onChange: a,
                  }),
                ],
              }),
              s.jsx("button", {
                type: "submit",
                onClick: u,
                children: "Submit",
              }),
            ],
          })
        : s.jsxs("div", {
            children: [
              s.jsx("h3", { children: "New Address added!" }),
              s.jsx("p", { children: "go to Addresses." }),
            ],
          }),
    ],
  });
}
function iv() {
  const { id: t } = st(),
    [n, r] = S.useState(!1),
    [l, o] = S.useState({
      company: "",
      jobRole: "",
      reportsTo: 0,
      employmentStatus: "",
    }),
    i = async (c) => {
      const m = await (
        await (
          await fetch(`http://localhost:5000/employmentdetail/${c}`, {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      o({
        company: m[0].company,
        jobRole: m[0].jobRole,
        reportsTo:
          m[0].reportsTo === void 0 || m[0].reportsTo === null
            ? 0
            : m[0].reportsTo,
        employmentStatus: m[0].employmentStatus,
      });
    };
  S.useEffect(() => {
    i(t);
  }, [t]);
  const a = (c) => {
      const { name: d, value: f } = c.target;
      o((m) => ({ ...m, [d]: d === "reportsTo" ? Number(f) : f }));
    },
    u = async (c) => {
      c.preventDefault();
      const d = await fetch(
        `http://localhost:5000/employmentdetail/${t}/update`,
        {
          method: "post",
          mode: "cors",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(l),
        },
      );
      console.log(l), (await d.json()).status === "ok" && r(!0);
    };
  return s.jsxs("div", {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      s.jsxs("form", {
        children: [
          s.jsx("legend", { children: "Edit JobInfo" }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Company" }),
              s.jsx("input", {
                type: "text",
                value: l.company,
                name: "company",
                onChange: a,
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Role" }),
              s.jsx("input", {
                type: "text",
                value: l.jobRole,
                name: "jobRole",
                onChange: a,
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Senior/Manager" }),
              s.jsx("input", {
                type: "number",
                value: l.reportsTo,
                name: "reportTo",
                id: "",
                onChange: a,
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Employment Status" }),
              s.jsx("input", {
                type: "text",
                value: l.employmentStatus,
                name: "employmentStatus",
                onChange: a,
              }),
            ],
          }),
          s.jsx("button", { type: "submit", onClick: u, children: "Submit" }),
        ],
      }),
    ],
  });
}
function av() {
  const { id: t } = st(),
    [n, r] = S.useState({ documentName: "", document: "" }),
    l = async (a) => {
      const d = await (
        await (
          await fetch(`http://localhost:5000/document/${a}`, {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      r({
        documentName: await d[0].documentName,
        document: await d[0].document,
      });
    };
  S.useEffect(() => {
    l(t);
  }, [t]);
  const o = (a) => {
      const { name: u, value: c } = a.target;
      r((d) => ({ ...d, [u]: c }));
    },
    i = async (a) => {
      a.preventDefault();
      const c = await (
        await fetch(`http://localhost:5000/document/${t}/update`, {
          method: "post",
          mode: "cors",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(n),
        })
      ).json();
      console.log(c);
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      s.jsxs("form", {
        children: [
          s.jsx("legend", { children: "Edit Document" }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Name" }),
              s.jsx("input", {
                type: "text",
                value: n.documentName,
                name: "documentName",
                onChange: o,
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Document" }),
              s.jsx("input", { type: "file", name: "document", onChange: o }),
            ],
          }),
          s.jsx("button", { type: "submit", onClick: i, children: "Submit" }),
        ],
      }),
    ],
  });
}
function sv() {
  const { id: t } = st(),
    [n, r] = S.useState({
      email: "",
      cellphoneNumber: "",
      companyEmail: "",
      alternateNumber: "",
    }),
    l = async (a) => {
      const d = await (
        await (
          await fetch(`http://localhost:5000/contact/${a}`, {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      r({
        email: await d[0].email,
        cellphoneNumber: await d[0].cellphoneNumber,
        companyEmail: await d[0].companyEmail,
        alternateNumber: await d[0].alternateNumber,
      });
    };
  S.useEffect(() => {
    l(t);
  }, [t]);
  const o = (a) => {
      const { name: u, value: c } = a.target;
      r((d) => ({ ...d, [u]: c }));
    },
    i = async (a) => {
      a.preventDefault();
      const c = await (
        await fetch(`http://localhost:5000/contact/${t}/update`, {
          method: "post",
          mode: "cors",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(n),
        })
      ).json();
      console.log(c);
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      s.jsxs("form", {
        children: [
          s.jsx("legend", { children: "Edit Contact" }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Email" }),
              s.jsx("input", {
                type: "text",
                value: n.email,
                name: "email",
                onChange: o,
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Contact Number" }),
              s.jsx("input", {
                type: "text",
                value: n.cellphoneNumber,
                name: "cellphoneNumber",
                onChange: o,
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Second Email" }),
              s.jsx("input", {
                type: "text",
                value: n.companyEmail,
                name: "companyEmail",
                onChange: o,
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsx("label", { children: "Second Contact NUmber" }),
              s.jsx("input", {
                type: "text",
                value: n.alternateNumber,
                name: "alternateNumber",
                onChange: o,
              }),
            ],
          }),
          s.jsx("button", { type: "submit", onClick: i, children: "Submit" }),
        ],
      }),
    ],
  });
}
function uv() {
  const { id: t } = st(),
    [n, r] = S.useState({
      firstName: "",
      lastName: "",
      idNumber: "",
      gender: "",
      dateOfBirth: "",
    }),
    l = async (a) => {
      const d = await (
        await (
          await fetch(`http://localhost:5000/employee/${a}`, {
            method: "GET",
            mode: "cors",
          })
        ).json()
      ).result;
      r({
        firstName: await d[0].firstName,
        lastName: await d[0].lastName,
        idNumber: await d[0].idNumber,
        gender: await d[0].gender,
        dateOfBirth: await d[0].dateOfBirth,
      });
    };
  S.useEffect(() => {
    l(t);
  }, [t]);
  const o = (a) => {
      const { name: u, value: c } = a.target;
      r((d) => ({ ...d, [u]: c }));
    },
    i = async (a) => {
      a.preventDefault();
      const c = await (
        await fetch(`http://localhost:5000/employee/${t}/update`, {
          method: "post",
          mode: "cors",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(n),
        })
      ).json();
      console.log(c);
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      s.jsx("div", {
        className: "modal",
        children: s.jsxs("form", {
          children: [
            s.jsx("legend", { children: "Edit Personal Information" }),
            s.jsxs("div", {
              children: [
                s.jsx("label", { children: "Name" }),
                s.jsx("input", {
                  type: "text",
                  value: n.firstName,
                  name: "firstName",
                  onChange: o,
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("label", { children: "Surname" }),
                s.jsx("input", {
                  type: "text",
                  value: n.lastName,
                  name: "lastName",
                  onChange: o,
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("label", { children: "ID Number" }),
                s.jsx("input", {
                  type: "text",
                  value: n.idNumber,
                  name: "idNumber",
                  onChange: o,
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("label", { children: "Gender" }),
                s.jsx("input", {
                  type: "text",
                  value: n.gender,
                  name: "gender",
                  onChange: o,
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("label", { children: "Date of birth" }),
                s.jsx("input", {
                  type: "date",
                  value: n.dateOfBirth,
                  name: "dateOfBirth",
                  onChange: o,
                }),
              ],
            }),
            s.jsx("button", { type: "submit", onClick: i, children: "Submit" }),
          ],
        }),
      }),
    ],
  });
}
function cv() {
  const [t, n] = S.useState(!1),
    [r, l] = S.useState(0),
    [o, i] = S.useState({
      firstName: "",
      lastName: "",
      idNumber: "",
      gender: "",
      dateOfBirth: "",
      passwordSalt: "",
    }),
    a = (d) => {
      const { name: f, value: m } = d.target;
      i((v) => ({ ...v, [f]: m }));
    },
    u = async (d) => {
      d.preventDefault();
      const m = await (
        await fetch("http://localhost:5000/employee/create", {
          method: "post",
          mode: "cors",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(o),
        })
      ).json();
      m.status === "ok" &&
        (n(!0),
        l(m.result.insertId),
        i({
          firstName: "",
          lastName: "",
          idNumber: "",
          gender: "",
          dateOfBirth: "",
          passwordSalt: "",
        }));
    },
    c = () => {
      l(0);
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      t
        ? s.jsxs("div", {
            children: [
              s.jsx("h3", { children: "Employee Successfully added" }),
              s.jsxs("p", {
                onClick: c,
                children: [
                  s.jsx(b, {
                    to: `/address/${r}/create`,
                    children: "Click here",
                  }),
                  " to add address for ",
                  o.firstName,
                  " ",
                  o.lastName,
                ],
              }),
              s.jsxs("p", {
                onClick: c,
                children: [
                  s.jsx(b, { to: "/", children: "Click here" }),
                  " to go home",
                ],
              }),
            ],
          })
        : s.jsxs("form", {
            method: "post",
            children: [
              s.jsx("legend", {
                children: s.jsx("strong", {
                  children: s.jsx("em", { children: "PERSONAL DETAILS" }),
                }),
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Name" }),
                  s.jsx("input", {
                    type: "text",
                    name: "firstName",
                    onChange: a,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Surname" }),
                  s.jsx("input", {
                    type: "text",
                    name: "lastName",
                    onChange: a,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "ID Number" }),
                  s.jsx("input", {
                    type: "text",
                    name: "idNumber",
                    onChange: a,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Gender" }),
                  s.jsxs("select", {
                    name: "gender",
                    onChange: a,
                    children: [
                      s.jsx("option", { value: "Male", children: "Male" }),
                      s.jsx("option", { value: "Female", children: "Female" }),
                      s.jsx("option", {
                        value: "Prefer not to state",
                        children: "Prefer not to state",
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Date of birth" }),
                  s.jsx("input", {
                    type: "date",
                    name: "dateOfBirth",
                    onChange: a,
                  }),
                ],
              }),
              s.jsx("button", { type: "submit", onClick: u, children: "Next" }),
            ],
          }),
    ],
  });
}
function dv() {
  const { employeeId: t } = st(),
    [n, r] = S.useState(!1),
    [l, o] = S.useState({
      street: "",
      suburb: "",
      city: "",
      province: "",
      postalCode: 0,
      employeeId: t ? Number(t) : 0,
    }),
    i = (u) => {
      const { name: c, value: d } = u.target;
      o((f) => ({ ...f, [c]: c === "postalCode" ? Number(d) : d }));
    },
    a = async (u) => {
      u.preventDefault(),
        (
          await (
            await fetch("http://localhost:5000/address/create", {
              method: "post",
              mode: "cors",
              headers: { "content-Type": "application/json" },
              body: JSON.stringify(l),
            })
          ).json()
        ).status === "ok" &&
          (r(!0),
          o({
            street: "",
            suburb: "",
            city: "",
            province: "",
            postalCode: 0,
            employeeId: 0,
          }));
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      n
        ? s.jsxs("div", {
            children: [
              s.jsx("h3", { children: "Address Successfully added" }),
              s.jsxs("p", {
                children: [
                  s.jsx(b, {
                    to: `/contact/${t}/create`,
                    children: "Click here",
                  }),
                  "to add contact for employee: ",
                  t,
                  ".",
                ],
              }),
              s.jsxs("p", {
                children: [
                  s.jsx(b, { to: "/", children: "Click here" }),
                  " to go home",
                ],
              }),
            ],
          })
        : s.jsxs("form", {
            children: [
              s.jsx("legend", {
                children: s.jsx("em", {
                  children: s.jsx("strong", { children: "ADD NEW ADDRESS" }),
                }),
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Street" }),
                  s.jsx("input", { type: "text", name: "street", onChange: i }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Suburb" }),
                  s.jsx("input", { type: "text", name: "suburb", onChange: i }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "City" }),
                  s.jsx("input", { type: "text", name: "city", onChange: i }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Province" }),
                  s.jsx("input", {
                    type: "text",
                    name: "province",
                    onChange: i,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Postal code" }),
                  s.jsx("input", {
                    type: "number",
                    name: "postalCode",
                    onChange: i,
                  }),
                ],
              }),
              s.jsx("button", {
                type: "submit",
                onClick: a,
                children: "Submit",
              }),
            ],
          }),
    ],
  });
}
function fv() {
  const { employeeId: t } = st(),
    [n, r] = S.useState(!1),
    [l, o] = S.useState({
      salary: 0,
      deductions: 0,
      bonus: 0,
      employeeId: t ? Number(t) : 0,
    }),
    i = (u) => {
      const { name: c, value: d } = u.target;
      o((f) => ({ ...f, [c]: Number(d) }));
    },
    a = async (u) => {
      u.preventDefault(),
        (
          await (
            await fetch("http://localhost:5000/compansation/create", {
              method: "post",
              mode: "cors",
              headers: { "content-Type": "application/json" },
              body: JSON.stringify(l),
            })
          ).json()
        ).status === "ok" &&
          (r(!0), o({ salary: 0, deductions: 0, bonus: 0, employeeId: 0 }));
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      n
        ? s.jsxs("div", {
            children: [
              s.jsx("h3", { children: "Compensation Successfully added" }),
              s.jsxs("p", {
                children: [
                  s.jsx(b, {
                    to: `/leave/${t}/create`,
                    children: "Click here",
                  }),
                  " to add leave details for employee: ",
                  t,
                ],
              }),
              s.jsxs("p", {
                children: [
                  s.jsx(b, { to: "/", children: "Click here" }),
                  " to go home",
                ],
              }),
            ],
          })
        : s.jsxs("form", {
            children: [
              s.jsx("legend", {
                children: s.jsx("em", {
                  children: s.jsx("strong", {
                    children: "ADD NEW COMPENSATION DETAILS",
                  }),
                }),
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Salary" }),
                  s.jsx("input", {
                    type: "number",
                    name: "salary",
                    onChange: i,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Deductions" }),
                  s.jsx("input", {
                    type: "number",
                    name: "deductions",
                    onChange: i,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Bonus" }),
                  s.jsx("input", {
                    type: "number",
                    name: "bonus",
                    onChange: i,
                  }),
                ],
              }),
              s.jsx("button", {
                type: "submit",
                onClick: a,
                children: "Submit",
              }),
            ],
          }),
    ],
  });
}
function hv() {
  const { employeeId: t } = st(),
    [n, r] = S.useState(!1),
    [l, o] = S.useState({
      company: "",
      jobRole: "",
      reportsTo: 0,
      employmentStatus: "",
      employeeId: t ? Number(t) : 0,
    }),
    i = (u) => {
      const { name: c, value: d } = u.target;
      o((f) => ({ ...f, [c]: c === "reportsTo" ? Number(d) : d }));
    },
    a = async (u) => {
      u.preventDefault(),
        (
          await (
            await fetch("http://localhost:5000/employmentdetail/create", {
              method: "post",
              mode: "cors",
              headers: { "content-Type": "application/json" },
              body: JSON.stringify(l),
            })
          ).json()
        ).status === "ok" &&
          (r(!0),
          o({
            company: "",
            jobRole: "",
            reportsTo: 0,
            employmentStatus: "",
            employeeId: 0,
          }));
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      n
        ? s.jsxs("div", {
            children: [
              s.jsx("h3", {
                children: "Employment Details Successfully Added",
              }),
              s.jsxs("p", {
                onClick: handleRedirect,
                children: [
                  s.jsx(b, {
                    to: `/document/${t}create/`,
                    children: "Click here",
                  }),
                  " to add document.",
                ],
              }),
              s.jsxs("p", {
                onClick: handleRedirect,
                children: [
                  s.jsx(b, { to: "/", children: "Click here" }),
                  " to go home",
                ],
              }),
            ],
          })
        : s.jsxs("form", {
            children: [
              s.jsx("legend", {
                children: s.jsx("em", {
                  children: s.jsx("strong", {
                    children: "ADD NEW JOB DETAILS",
                  }),
                }),
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Company" }),
                  s.jsx("input", {
                    type: "text",
                    name: "company",
                    onChange: i,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Role" }),
                  s.jsx("input", {
                    type: "text",
                    name: "jobRole",
                    onChange: i,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Senior/Manager" }),
                  s.jsx("input", {
                    type: "number",
                    name: "reportTo",
                    id: "",
                    onChange: i,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Employment Status" }),
                  s.jsx("input", {
                    type: "text",
                    name: "employmentStatus",
                    onChange: i,
                  }),
                ],
              }),
              s.jsx("button", {
                type: "submit",
                onClick: a,
                children: "Submit",
              }),
            ],
          }),
    ],
  });
}
function pv() {
  const { employeeId: t } = st(),
    [n, r] = S.useState(!1),
    [l, o] = S.useState({
      balance: 0,
      daysAbsent: 0,
      reportsTo: 0,
      employeeId: t ? Number(t) : 0,
    }),
    i = (u) => {
      const { name: c, value: d } = u.target;
      o((f) => ({ ...f, [c]: Number(d) }));
    },
    a = async (u) => {
      u.preventDefault(),
        (
          await (
            await fetch("http://localhost:5000/leave/create", {
              method: "post",
              mode: "cors",
              headers: { "content-Type": "application/json" },
              body: JSON.stringify(l),
            })
          ).json()
        ).status === "ok" &&
          (r(!0),
          o({ balance: 0, daysAbsent: 0, reportsTo: 0, employeeId: 0 }));
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      n
        ? s.jsxs("div", {
            children: [
              s.jsx("h3", { children: "Leave Details Successfully Added" }),
              s.jsxs("p", {
                onClick: handleRedirect,
                children: [
                  s.jsx(b, {
                    to: `/employmentdetail/${t}/create`,
                    children: "Click here!",
                  }),
                  " to add a job details.",
                ],
              }),
              s.jsxs("p", {
                onClick: handleRedirect,
                children: [
                  s.jsx(b, { to: "/", children: "Click here" }),
                  " to go home.",
                ],
              }),
            ],
          })
        : s.jsxs("form", {
            children: [
              s.jsx("legend", {
                children: s.jsx("em", {
                  children: s.jsx("strong", {
                    children: "ADD NEW LEAVE DETAILS",
                  }),
                }),
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Available days" }),
                  s.jsx("input", {
                    type: "number",
                    name: "balance",
                    onChange: i,
                  }),
                ],
              }),
              s.jsx("button", {
                type: "submit",
                onClick: a,
                children: "Submit",
              }),
            ],
          }),
    ],
  });
}
function mv() {
  const { employeeId: t } = st(),
    [n, r] = S.useState(!1),
    [l, o] = S.useState({
      documentName: "",
      document: null,
      employeeId: t ? Number(t) : 0,
    }),
    i = (u) => {
      const { name: c, value: d } = u.target;
      o((f) => ({ ...f, [c]: d }));
    },
    a = async (u) => {
      u.preventDefault(),
        (
          await (
            await fetch("http://localhost:5000/document/create", {
              method: "post",
              mode: "cors",
              headers: { "content-Type": "application/json" },
              body: JSON.stringify(l),
            })
          ).json()
        ).status === "ok" &&
          (r(!0), o({ documentName: "", document: [], employeeId: 0 }));
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      n
        ? s.jsxs("div", {
            children: [
              s.jsx("h3", { children: "Document Successfully Added" }),
              s.jsxs("p", {
                children: [
                  s.jsx(b, { to: "/", children: "Click here" }),
                  " to go home.",
                ],
              }),
            ],
          })
        : s.jsxs("form", {
            children: [
              s.jsx("legend", {
                children: s.jsx("em", {
                  children: s.jsx("strong", { children: "ADD NEW DOCUMENT" }),
                }),
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "documentName" }),
                  s.jsx("input", {
                    type: "text",
                    name: "documentName",
                    onChange: i,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "document" }),
                  s.jsx("input", {
                    type: "file",
                    name: "document",
                    onChange: i,
                  }),
                ],
              }),
              s.jsx("button", {
                type: "submit",
                onClick: a,
                children: "Submit",
              }),
            ],
          }),
    ],
  });
}
function yv() {
  const { employeeId: t } = st(),
    [n, r] = S.useState(!1),
    [l, o] = S.useState({
      email: "",
      cellphoneNumber: "",
      companyEmail: "",
      alternateNumber: "",
      employeeId: t ? Number(t) : 0,
    }),
    i = (u) => {
      const { name: c, value: d } = u.target;
      o((f) => ({ ...f, [c]: d }));
    },
    a = async (u) => {
      u.preventDefault(),
        (
          await (
            await fetch("http://localhost:5000/contact/create", {
              method: "post",
              mode: "cors",
              headers: { "content-Type": "application/json" },
              body: JSON.stringify(l),
            })
          ).json()
        ).status === "ok" &&
          (r(!0),
          o({
            email: "",
            cellphoneNumber: "",
            companyEmail: "",
            alternateNumber: "",
            employeeId: 0,
          }));
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(ve, {}),
      s.jsx(ye, {}),
      n
        ? s.jsxs("div", {
            children: [
              s.jsx("h3", { children: "Contact Successfully added" }),
              s.jsxs("p", {
                onClick: handleRedirect,
                children: [
                  s.jsx(b, {
                    to: `/compensation/${t}/create`,
                    children: "Click here",
                  }),
                  " to add compensation details for employee: ",
                  t,
                ],
              }),
              s.jsxs("p", {
                onClick: handleRedirect,
                children: [s.jsx(b, { children: "Click here" }), " to go home"],
              }),
            ],
          })
        : s.jsxs("form", {
            children: [
              s.jsx("legend", {
                children: s.jsx("em", {
                  children: s.jsx("strong", { children: "ADD NEW CONTACT" }),
                }),
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Email" }),
                  s.jsx("input", { type: "text", name: "email", onChange: i }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Contact Number" }),
                  s.jsx("input", {
                    type: "text",
                    name: "cellphoneNumber",
                    onChange: i,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Second Email" }),
                  s.jsx("input", {
                    type: "text",
                    name: "companyEmail",
                    onChange: i,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", { children: "Second Contact Number" }),
                  s.jsx("input", {
                    type: "text",
                    name: "alternateNumber",
                    onChange: i,
                  }),
                ],
              }),
              s.jsx("button", {
                type: "submit",
                onClick: a,
                children: "Submit",
              }),
            ],
          }),
    ],
  });
}
const vv = zy([
  { path: "/", element: s.jsx(Xy, {}) },
  { path: "employees", element: s.jsx(Zy, {}) },
  { path: "employee/:id/update", element: s.jsx(uv, {}) },
  { path: "contacts", element: s.jsx(qy, {}) },
  { path: "contact/:id/update", element: s.jsx(sv, {}) },
  { path: "contact/:employeeId/create", element: s.jsx(yv, {}) },
  { path: "documents", element: s.jsx(by, {}) },
  { path: "document/:id/update", element: s.jsx(av, {}) },
  { path: "document/:employeeId/create", element: s.jsx(mv, {}) },
  { path: "leaves", element: s.jsx(ev, {}) },
  { path: "leave/:employeeId/create", element: s.jsx(pv, {}) },
  { path: "employmentdetails", element: s.jsx(tv, {}) },
  { path: "employmentdetail/:id/update", element: s.jsx(iv, {}) },
  { path: "employmentdetail/:employeeId/create", element: s.jsx(hv, {}) },
  { path: "employee/create", element: s.jsx(cv, {}) },
  { path: "addresses", element: s.jsx(nv, {}) },
  { path: "address/:id/update", element: s.jsx(ov, {}) },
  { path: "address/:employeeId/create", element: s.jsx(dv, {}) },
  { path: "compensations", element: s.jsx(rv, {}) },
  { path: "compensation/:id/update", element: s.jsx(lv, {}) },
  { path: "compensation/:employeeId/create", element: s.jsx(fv, {}) },
]);
Si.createRoot(document.getElementById("root")).render(
  s.jsx(fc.StrictMode, { children: s.jsx(Wy, { router: vv }) }),
);

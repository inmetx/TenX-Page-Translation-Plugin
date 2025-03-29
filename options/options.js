/*! For license information please see options.js.LICENSE.txt */
(() => {
  var e = {
      5443: (e, t) => {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var a = typeof n;
                if ("string" === a || "number" === a) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var i = o.apply(null, n);
                    i && e.push(i);
                  }
                } else if ("object" === a)
                  if (n.toString === Object.prototype.toString)
                    for (var l in n) r.call(n, l) && n[l] && e.push(l);
                  else e.push(n.toString());
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      6095: (e, t, n) => {
        "use strict";
        var r = n(5566),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          i = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function c(e) {
          return r.isMemo(e) ? i : l[e.$$typeof] || o;
        }
        (l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[r.Memo] = i);
        var u = Object.defineProperty,
          s = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          m = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" != typeof n) {
            if (m) {
              var o = p(n);
              o && o !== m && e(t, o, r);
            }
            var i = s(n);
            f && (i = i.concat(f(n)));
            for (var l = c(t), g = c(n), h = 0; h < i.length; ++h) {
              var v = i[h];
              if (!(a[v] || (r && r[v]) || (g && g[v]) || (l && l[v]))) {
                var y = d(n, v);
                try {
                  u(t, v, y);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      1538: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function o(e) {
          if (null == e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined",
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, a) {
              for (var i, l, c = o(e), u = 1; u < arguments.length; u++) {
                for (var s in (i = Object(arguments[u])))
                  n.call(i, s) && (c[s] = i[s]);
                if (t) {
                  l = t(i);
                  for (var f = 0; f < l.length; f++)
                    r.call(i, l[f]) && (c[l[f]] = i[l[f]]);
                }
              }
              return c;
            };
      },
      6282: function (e) {
        (function () {
          var t, n, r, o, a, i;
          "undefined" != typeof performance &&
          null !== performance &&
          performance.now
            ? (e.exports = function () {
                return performance.now();
              })
            : "undefined" != typeof process &&
                null !== process &&
                process.hrtime
              ? ((e.exports = function () {
                  return (t() - a) / 1e6;
                }),
                (n = process.hrtime),
                (o = (t = function () {
                  var e;
                  return 1e9 * (e = n())[0] + e[1];
                })()),
                (i = 1e9 * process.uptime()),
                (a = o - i))
              : Date.now
                ? ((e.exports = function () {
                    return Date.now() - r;
                  }),
                  (r = Date.now()))
                : ((e.exports = function () {
                    return new Date().getTime() - r;
                  }),
                  (r = new Date().getTime()));
        }).call(this);
      },
      6120: (e, t, n) => {
        for (
          var r = n(6282),
            o = "undefined" == typeof window ? n.g : window,
            a = ["moz", "webkit"],
            i = "AnimationFrame",
            l = o["request" + i],
            c = o["cancel" + i] || o["cancelRequest" + i],
            u = 0;
          !l && u < a.length;
          u++
        )
          (l = o[a[u] + "Request" + i]),
            (c = o[a[u] + "Cancel" + i] || o[a[u] + "CancelRequest" + i]);
        if (!l || !c) {
          var s = 0,
            f = 0,
            d = [];
          (l = function (e) {
            if (0 === d.length) {
              var t = r(),
                n = Math.max(0, 16.666666666666668 - (t - s));
              (s = n + t),
                setTimeout(function () {
                  var e = d.slice(0);
                  d.length = 0;
                  for (var t = 0; t < e.length; t++)
                    if (!e[t].cancelled)
                      try {
                        e[t].callback(s);
                      } catch (e) {
                        setTimeout(function () {
                          throw e;
                        }, 0);
                      }
                }, Math.round(n));
            }
            return d.push({ handle: ++f, callback: e, cancelled: !1 }), f;
          }),
            (c = function (e) {
              for (var t = 0; t < d.length; t++)
                d[t].handle === e && (d[t].cancelled = !0);
            });
        }
        (e.exports = function (e) {
          return l.call(o, e);
        }),
          (e.exports.cancel = function () {
            c.apply(o, arguments);
          }),
          (e.exports.polyfill = function (e) {
            e || (e = o),
              (e.requestAnimationFrame = l),
              (e.cancelAnimationFrame = c);
          });
      },
      4005: (e, t, n) => {
        "use strict";
        var r = n(9231),
          o = n(1538),
          a = n(1851);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(i(227));
        var l = new Set(),
          c = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (c[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var f = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d =
            /^[:A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�][:A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�\-.0-9·̀-ͯ‿-⁀]*$/,
          p = Object.prototype.hasOwnProperty,
          m = {},
          g = {};
        function h(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function _(e, t, n, r) {
          var o = v.hasOwnProperty(t) ? v[t] : null;
          (null !== o
            ? 0 === o.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!p.call(g, e) ||
                    (!p.call(m, e) &&
                      (d.test(e) ? (g[e] = !0) : ((m[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
                ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
                : ((t = o.attributeName),
                  (r = o.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (o = o.type) || (4 === o && !0 === n)
                          ? ""
                          : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            v[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, b);
              v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, b);
            v[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          O = 60103,
          E = 60106,
          k = 60107,
          x = 60108,
          S = 60114,
          P = 60109,
          j = 60110,
          C = 60112,
          N = 60113,
          T = 60120,
          D = 60115,
          z = 60116,
          L = 60121,
          I = 60128,
          M = 60129,
          A = 60130,
          R = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var F = Symbol.for;
          (O = F("react.element")),
            (E = F("react.portal")),
            (k = F("react.fragment")),
            (x = F("react.strict_mode")),
            (S = F("react.profiler")),
            (P = F("react.provider")),
            (j = F("react.context")),
            (C = F("react.forward_ref")),
            (N = F("react.suspense")),
            (T = F("react.suspense_list")),
            (D = F("react.memo")),
            (z = F("react.lazy")),
            (L = F("react.block")),
            F("react.scope"),
            (I = F("react.opaque.id")),
            (M = F("react.debug_trace_mode")),
            (A = F("react.offscreen")),
            (R = F("react.legacy_hidden"));
        }
        var B,
          V = "function" == typeof Symbol && Symbol.iterator;
        function U(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (V && e[V]) || e["@@iterator"])
              ? e
              : null;
        }
        function W(e) {
          if (void 0 === B)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              B = (t && t[1]) || "";
            }
          return "\n" + B + e;
        }
        var $ = !1;
        function H(e, t) {
          if (!e || $) return "";
          $ = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (e) {
            if (e && r && "string" == typeof e.stack) {
              for (
                var o = e.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l]))
                        return "\n" + o[i].replace(" at new ", " at ");
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            ($ = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? W(e) : "";
        }
        function q(e) {
          switch (e.tag) {
            case 5:
              return W(e.type);
            case 16:
              return W("Lazy");
            case 13:
              return W("Suspense");
            case 19:
              return W("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = H(e.type, !1));
            case 11:
              return (e = H(e.type.render, !1));
            case 22:
              return (e = H(e.type._render, !1));
            case 1:
              return (e = H(e.type, !0));
            default:
              return "";
          }
        }
        function Q(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case E:
              return "Portal";
            case S:
              return "Profiler";
            case x:
              return "StrictMode";
            case N:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case j:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case C:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case D:
                return Q(e.type);
              case L:
                return Q(e._render);
              case z:
                (t = e._payload), (e = e._init);
                try {
                  return Q(e(t));
                } catch (e) {}
            }
          return null;
        }
        function K(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function X(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Y(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = X(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function G(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = X(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Z(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return o({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = K(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && _(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = K(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? oe(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              oe(e, t.type, K(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function oe(e, t, n) {
          ("number" === t && Z(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ae(e, t) {
          return (
            (e = o({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function ie(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + K(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return o({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ce(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: K(n) };
        }
        function ue(e, t) {
          var n = K(t.value),
            r = K(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function se(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var fe = "http://www.w3.org/1999/xhtml",
          de = "http://www.w3.org/2000/svg";
        function pe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function me(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? pe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
              ? "http://www.w3.org/1999/xhtml"
              : e;
        }
        var ge,
          he,
          ve =
            ((he = function (e, t) {
              if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
              else {
                for (
                  (ge = ge || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ge.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return he(e, t);
                  });
                }
              : he);
        function ye(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var be = {
            animationIterationCount: !0,
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
          _e = ["Webkit", "ms", "Moz", "O"];
        function we(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
                "number" != typeof t ||
                0 === t ||
                (be.hasOwnProperty(e) && be[e])
              ? ("" + t).trim()
              : t + "px";
        }
        function Oe(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = we(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(be).forEach(function (e) {
          _e.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (be[t] = be[e]);
          });
        });
        var Ee = o(
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
        function ke(e, t) {
          if (t) {
            if (
              Ee[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(i(62));
          }
        }
        function xe(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
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
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Pe = null,
          je = null,
          Ce = null;
        function Ne(e) {
          if ((e = ro(e))) {
            if ("function" != typeof Pe) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = ao(t)), Pe(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          je ? (Ce ? Ce.push(e) : (Ce = [e])) : (je = e);
        }
        function De() {
          if (je) {
            var e = je,
              t = Ce;
            if (((Ce = je = null), Ne(e), t))
              for (e = 0; e < t.length; e++) Ne(t[e]);
          }
        }
        function ze(e, t) {
          return e(t);
        }
        function Le(e, t, n, r, o) {
          return e(t, n, r, o);
        }
        function Ie() {}
        var Me = ze,
          Ae = !1,
          Re = !1;
        function Fe() {
          (null === je && null === Ce) || (Ie(), De());
        }
        function Be(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ao(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Ve = !1;
        if (f)
          try {
            var Ue = {};
            Object.defineProperty(Ue, "passive", {
              get: function () {
                Ve = !0;
              },
            }),
              window.addEventListener("test", Ue, Ue),
              window.removeEventListener("test", Ue, Ue);
          } catch (he) {
            Ve = !1;
          }
        function We(e, t, n, r, o, a, i, l, c) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (e) {
            this.onError(e);
          }
        }
        var $e = !1,
          He = null,
          qe = !1,
          Qe = null,
          Ke = {
            onError: function (e) {
              ($e = !0), (He = e);
            },
          };
        function Xe(e, t, n, r, o, a, i, l, c) {
          ($e = !1), (He = null), We.apply(Ke, arguments);
        }
        function Ye(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ge(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ze(e) {
          if (Ye(e) !== e) throw Error(i(188));
        }
        function Je(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ye(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return Ze(o), e;
                    if (a === r) return Ze(o), t;
                    a = a.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = o), (r = a);
                else {
                  for (var l = !1, c = o.child; c; ) {
                    if (c === n) {
                      (l = !0), (n = o), (r = a);
                      break;
                    }
                    if (c === r) {
                      (l = !0), (r = o), (n = a);
                      break;
                    }
                    c = c.sibling;
                  }
                  if (!l) {
                    for (c = a.child; c; ) {
                      if (c === n) {
                        (l = !0), (n = a), (r = o);
                        break;
                      }
                      if (c === r) {
                        (l = !0), (r = a), (n = o);
                        break;
                      }
                      c = c.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function et(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var tt,
          nt,
          rt,
          ot,
          at = !1,
          it = [],
          lt = null,
          ct = null,
          ut = null,
          st = new Map(),
          ft = new Map(),
          dt = [],
          pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function mt(e, t, n, r, o) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: o,
            targetContainers: [r],
          };
        }
        function gt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              lt = null;
              break;
            case "dragenter":
            case "dragleave":
              ct = null;
              break;
            case "mouseover":
            case "mouseout":
              ut = null;
              break;
            case "pointerover":
            case "pointerout":
              st.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ft.delete(t.pointerId);
          }
        }
        function ht(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = mt(t, n, r, o, a)),
              null !== t && null !== (t = ro(t)) && nt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function vt(e) {
          var t = no(e.target);
          if (null !== t) {
            var n = Ye(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ge(n)))
                  return (
                    (e.blockedOn = t),
                    void ot(e.lanePriority, function () {
                      a.unstable_runWithPriority(e.priority, function () {
                        rt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function yt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ro(n)) && nt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function bt(e, t, n) {
          yt(e) && n.delete(t);
        }
        function _t() {
          for (at = !1; 0 < it.length; ) {
            var e = it[0];
            if (null !== e.blockedOn) {
              null !== (e = ro(e.blockedOn)) && tt(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Jt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent,
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && it.shift();
          }
          null !== lt && yt(lt) && (lt = null),
            null !== ct && yt(ct) && (ct = null),
            null !== ut && yt(ut) && (ut = null),
            st.forEach(bt),
            ft.forEach(bt);
        }
        function wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            at ||
              ((at = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, _t)));
        }
        function Ot(e) {
          function t(t) {
            return wt(t, e);
          }
          if (0 < it.length) {
            wt(it[0], e);
            for (var n = 1; n < it.length; n++) {
              var r = it[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== lt && wt(lt, e),
              null !== ct && wt(ct, e),
              null !== ut && wt(ut, e),
              st.forEach(t),
              ft.forEach(t),
              n = 0;
            n < dt.length;
            n++
          )
            (r = dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
            vt(n), null === n.blockedOn && dt.shift();
        }
        function Et(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kt = {
            animationend: Et("Animation", "AnimationEnd"),
            animationiteration: Et("Animation", "AnimationIteration"),
            animationstart: Et("Animation", "AnimationStart"),
            transitionend: Et("Transition", "TransitionEnd"),
          },
          xt = {},
          St = {};
        function Pt(e) {
          if (xt[e]) return xt[e];
          if (!kt[e]) return e;
          var t,
            n = kt[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in St) return (xt[e] = n[t]);
          return e;
        }
        f &&
          ((St = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kt.animationend.animation,
            delete kt.animationiteration.animation,
            delete kt.animationstart.animation),
          "TransitionEvent" in window || delete kt.transitionend.transition);
        var jt = Pt("animationend"),
          Ct = Pt("animationiteration"),
          Nt = Pt("animationstart"),
          Tt = Pt("transitionend"),
          Dt = new Map(),
          zt = new Map(),
          Lt = [
            "abort",
            "abort",
            jt,
            "animationEnd",
            Ct,
            "animationIteration",
            Nt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Tt,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function It(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              o = e[n + 1];
            (o = "on" + (o[0].toUpperCase() + o.slice(1))),
              zt.set(r, t),
              Dt.set(r, o),
              u(o, [r]);
          }
        }
        (0, a.unstable_now)();
        var Mt = 8;
        function At(e) {
          if (0 != (1 & e)) return (Mt = 15), 1;
          if (0 != (2 & e)) return (Mt = 14), 2;
          if (0 != (4 & e)) return (Mt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Mt = 12), t)
            : 0 != (32 & e)
              ? ((Mt = 11), 32)
              : 0 !== (t = 192 & e)
                ? ((Mt = 10), t)
                : 0 != (256 & e)
                  ? ((Mt = 9), 256)
                  : 0 !== (t = 3584 & e)
                    ? ((Mt = 8), t)
                    : 0 != (4096 & e)
                      ? ((Mt = 7), 4096)
                      : 0 !== (t = 4186112 & e)
                        ? ((Mt = 6), t)
                        : 0 !== (t = 62914560 & e)
                          ? ((Mt = 5), t)
                          : 67108864 & e
                            ? ((Mt = 4), 67108864)
                            : 0 != (134217728 & e)
                              ? ((Mt = 3), 134217728)
                              : 0 !== (t = 805306368 & e)
                                ? ((Mt = 2), t)
                                : 0 != (1073741824 & e)
                                  ? ((Mt = 1), 1073741824)
                                  : ((Mt = 8), e);
        }
        function Rt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (Mt = 0);
          var r = 0,
            o = 0,
            a = e.expiredLanes,
            i = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== a) (r = a), (o = Mt = 15);
          else if (0 !== (a = 134217727 & n)) {
            var c = a & ~i;
            0 !== c
              ? ((r = At(c)), (o = Mt))
              : 0 !== (l &= a) && ((r = At(l)), (o = Mt));
          } else
            0 !== (a = n & ~i)
              ? ((r = At(a)), (o = Mt))
              : 0 !== l && ((r = At(l)), (o = Mt));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - $t(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 == (t & i))
          ) {
            if ((At(t), o <= Mt)) return t;
            Mt = o;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - $t(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function Ft(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function Bt(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Vt(24 & ~t)) ? Bt(10, t) : e;
            case 10:
              return 0 === (e = Vt(192 & ~t)) ? Bt(8, t) : e;
            case 8:
              return (
                0 === (e = Vt(3584 & ~t)) &&
                  0 === (e = Vt(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Vt(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(i(358, e));
        }
        function Vt(e) {
          return e & -e;
        }
        function Ut(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Wt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - $t(t))] = n);
        }
        var $t = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Ht(e) / qt) | 0)) | 0;
              },
          Ht = Math.log,
          qt = Math.LN2;
        var Qt = a.unstable_UserBlockingPriority,
          Kt = a.unstable_runWithPriority,
          Xt = !0;
        function Yt(e, t, n, r) {
          Ae || Ie();
          var o = Zt,
            a = Ae;
          Ae = !0;
          try {
            Le(o, e, t, n, r);
          } finally {
            (Ae = a) || Fe();
          }
        }
        function Gt(e, t, n, r) {
          Kt(Qt, Zt.bind(null, e, t, n, r));
        }
        function Zt(e, t, n, r) {
          var o;
          if (Xt)
            if ((o = 0 == (4 & t)) && 0 < it.length && -1 < pt.indexOf(e))
              (e = mt(null, e, t, n, r)), it.push(e);
            else {
              var a = Jt(e, t, n, r);
              if (null === a) o && gt(e, r);
              else {
                if (o) {
                  if (-1 < pt.indexOf(e))
                    return (e = mt(a, e, t, n, r)), void it.push(e);
                  if (
                    (function (e, t, n, r, o) {
                      switch (t) {
                        case "focusin":
                          return (lt = ht(lt, e, t, n, r, o)), !0;
                        case "dragenter":
                          return (ct = ht(ct, e, t, n, r, o)), !0;
                        case "mouseover":
                          return (ut = ht(ut, e, t, n, r, o)), !0;
                        case "pointerover":
                          var a = o.pointerId;
                          return (
                            st.set(a, ht(st.get(a) || null, e, t, n, r, o)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (a = o.pointerId),
                            ft.set(a, ht(ft.get(a) || null, e, t, n, r, o)),
                            !0
                          );
                      }
                      return !1;
                    })(a, e, t, n, r)
                  )
                    return;
                  gt(e, r);
                }
                Ir(e, t, r, null, n);
              }
            }
        }
        function Jt(e, t, n, r) {
          var o = Se(r);
          if (null !== (o = no(o))) {
            var a = Ye(o);
            if (null === a) o = null;
            else {
              var i = a.tag;
              if (13 === i) {
                if (null !== (o = Ge(a))) return o;
                o = null;
              } else if (3 === i) {
                if (a.stateNode.hydrate)
                  return 3 === a.tag ? a.stateNode.containerInfo : null;
                o = null;
              } else a !== o && (o = null);
            }
          }
          return Ir(e, t, r, o, n), null;
        }
        var en = null,
          tn = null,
          nn = null;
        function rn() {
          if (nn) return nn;
          var e,
            t,
            n = tn,
            r = n.length,
            o = "value" in en ? en.value : en.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (nn = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function on(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function an() {
          return !0;
        }
        function ln() {
          return !1;
        }
        function cn(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? an
                : ln),
              (this.isPropagationStopped = ln),
              this
            );
          }
          return (
            o(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = an));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = an));
              },
              persist: function () {},
              isPersistent: an,
            }),
            t
          );
        }
        var un,
          sn,
          fn,
          dn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          pn = cn(dn),
          mn = o({}, dn, { view: 0, detail: 0 }),
          gn = cn(mn),
          hn = o({}, mn, {
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
            getModifierState: jn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== fn &&
                    (fn && "mousemove" === e.type
                      ? ((un = e.screenX - fn.screenX),
                        (sn = e.screenY - fn.screenY))
                      : (sn = un = 0),
                    (fn = e)),
                  un);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          vn = cn(hn),
          yn = cn(o({}, hn, { dataTransfer: 0 })),
          bn = cn(o({}, mn, { relatedTarget: 0 })),
          _n = cn(
            o({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          wn = o({}, dn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          On = cn(wn),
          En = cn(o({}, dn, { data: 0 })),
          kn = {
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
          xn = {
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
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Pn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function jn() {
          return Pn;
        }
        var Cn = o({}, mn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = on(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? xn[e.keyCode] || "Unidentified"
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
            getModifierState: jn,
            charCode: function (e) {
              return "keypress" === e.type ? on(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? on(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          Nn = cn(Cn),
          Tn = cn(
            o({}, hn, {
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
          ),
          Dn = cn(
            o({}, mn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: jn,
            }),
          ),
          zn = cn(
            o({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Ln = o({}, hn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          In = cn(Ln),
          Mn = [9, 13, 27, 32],
          An = f && "CompositionEvent" in window,
          Rn = null;
        f && "documentMode" in document && (Rn = document.documentMode);
        var Fn = f && "TextEvent" in window && !Rn,
          Bn = f && (!An || (Rn && 8 < Rn && 11 >= Rn)),
          Vn = String.fromCharCode(32),
          Un = !1;
        function Wn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Mn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function $n(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var qn = {
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
        function Qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!qn[e.type] : "textarea" === t;
        }
        function Kn(e, t, n, r) {
          Te(r),
            0 < (t = Ar(t, "onChange")).length &&
              ((n = new pn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Xn = null,
          Yn = null;
        function Gn(e) {
          Cr(e, 0);
        }
        function Zn(e) {
          if (G(oo(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var er = !1;
        if (f) {
          var tr;
          if (f) {
            var nr = "oninput" in document;
            if (!nr) {
              var rr = document.createElement("div");
              rr.setAttribute("oninput", "return;"),
                (nr = "function" == typeof rr.oninput);
            }
            tr = nr;
          } else tr = !1;
          er = tr && (!document.documentMode || 9 < document.documentMode);
        }
        function or() {
          Xn && (Xn.detachEvent("onpropertychange", ar), (Yn = Xn = null));
        }
        function ar(e) {
          if ("value" === e.propertyName && Zn(Yn)) {
            var t = [];
            if ((Kn(t, Yn, e, Se(e)), (e = Gn), Ae)) e(t);
            else {
              Ae = !0;
              try {
                ze(e, t);
              } finally {
                (Ae = !1), Fe();
              }
            }
          }
        }
        function ir(e, t, n) {
          "focusin" === e
            ? (or(), (Yn = n), (Xn = t).attachEvent("onpropertychange", ar))
            : "focusout" === e && or();
        }
        function lr(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Zn(Yn);
        }
        function cr(e, t) {
          if ("click" === e) return Zn(t);
        }
        function ur(e, t) {
          if ("input" === e || "change" === e) return Zn(t);
        }
        var sr =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          fr = Object.prototype.hasOwnProperty;
        function dr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!fr.call(t, n[r]) || !sr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function pr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function mr(e, t) {
          var n,
            r = pr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
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
            r = pr(r);
          }
        }
        function gr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? gr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function hr() {
          for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = Z((e = t.contentWindow).document);
          }
          return t;
        }
        function vr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var yr = f && "documentMode" in document && 11 >= document.documentMode,
          br = null,
          _r = null,
          wr = null,
          Or = !1;
        function Er(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          Or ||
            null == br ||
            br !== Z(r) ||
            ("selectionStart" in (r = br) && vr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (wr && dr(wr, r)) ||
              ((wr = r),
              0 < (r = Ar(_r, "onSelect")).length &&
                ((t = new pn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = br))));
        }
        It(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " ",
          ),
          0,
        ),
          It(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " ",
            ),
            1,
          ),
          It(Lt, 2);
        for (
          var kr =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " ",
              ),
            xr = 0;
          xr < kr.length;
          xr++
        )
          zt.set(kr[xr], 0);
        s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var Sr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Pr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Sr),
          );
        function jr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, a, l, c, u) {
              if ((Xe.apply(this, arguments), $e)) {
                if (!$e) throw Error(i(198));
                var s = He;
                ($e = !1), (He = null), qe || ((qe = !0), (Qe = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Cr(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    c = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), c !== a && o.isPropagationStopped()))
                    break e;
                  jr(o, l, u), (a = c);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((c = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    c !== a && o.isPropagationStopped())
                  )
                    break e;
                  jr(o, l, u), (a = c);
                }
            }
          }
          if (qe) throw ((e = Qe), (qe = !1), (Qe = null), e);
        }
        function Nr(e, t) {
          var n = io(t),
            r = e + "__bubble";
          n.has(r) || (Lr(t, e, 2, !1), n.add(r));
        }
        var Tr = "_reactListening" + Math.random().toString(36).slice(2);
        function Dr(e) {
          e[Tr] ||
            ((e[Tr] = !0),
            l.forEach(function (t) {
              Pr.has(t) || zr(t, !1, e, null), zr(t, !0, e, null);
            }));
        }
        function zr(e, t, n, r) {
          var o =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            a = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (a = n.ownerDocument),
            null !== r && !t && Pr.has(e))
          ) {
            if ("scroll" !== e) return;
            (o |= 2), (a = r);
          }
          var i = io(a),
            l = e + "__" + (t ? "capture" : "bubble");
          i.has(l) || (t && (o |= 4), Lr(a, e, o, t), i.add(l));
        }
        function Lr(e, t, n, r) {
          var o = zt.get(t);
          switch (void 0 === o ? 2 : o) {
            case 0:
              o = Yt;
              break;
            case 1:
              o = Gt;
              break;
            default:
              o = Zt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Ve ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
                ? e.addEventListener(t, n, { passive: o })
                : e.addEventListener(t, n, !1);
        }
        function Ir(e, t, n, r, o) {
          var a = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var c = i.tag;
                    if (
                      (3 === c || 4 === c) &&
                      ((c = i.stateNode.containerInfo) === o ||
                        (8 === c.nodeType && c.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = no(l))) return;
                  if (5 === (c = i.tag) || 6 === c) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (Re) return e(t, n);
            Re = !0;
            try {
              Me(e, t, n);
            } finally {
              (Re = !1), Fe();
            }
          })(function () {
            var r = a,
              o = Se(n),
              i = [];
            e: {
              var l = Dt.get(e);
              if (void 0 !== l) {
                var c = pn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === on(n)) break e;
                  case "keydown":
                  case "keyup":
                    c = Nn;
                    break;
                  case "focusin":
                    (u = "focus"), (c = bn);
                    break;
                  case "focusout":
                    (u = "blur"), (c = bn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    c = bn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    c = vn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    c = yn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    c = Dn;
                    break;
                  case jt:
                  case Ct:
                  case Nt:
                    c = _n;
                    break;
                  case Tt:
                    c = zn;
                    break;
                  case "scroll":
                    c = gn;
                    break;
                  case "wheel":
                    c = In;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    c = On;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    c = Tn;
                }
                var s = 0 != (4 & t),
                  f = !s && "scroll" === e,
                  d = s ? (null !== l ? l + "Capture" : null) : l;
                s = [];
                for (var p, m = r; null !== m; ) {
                  var g = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== g &&
                      ((p = g),
                      null !== d &&
                        null != (g = Be(m, d)) &&
                        s.push(Mr(m, g, p))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < s.length &&
                  ((l = new c(l, u, null, n, o)),
                  i.push({ event: l, listeners: s }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((c = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 != (16 & t) ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!no(u) && !u[eo])) &&
                  (c || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  c
                    ? ((c = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? no(u)
                          : null) &&
                        (u !== (f = Ye(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((c = null), (u = r)),
                  c !== u))
              ) {
                if (
                  ((s = vn),
                  (g = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = Tn),
                    (g = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (m = "pointer")),
                  (f = null == c ? l : oo(c)),
                  (p = null == u ? l : oo(u)),
                  ((l = new s(g, m + "leave", c, n, o)).target = f),
                  (l.relatedTarget = p),
                  (g = null),
                  no(o) === r &&
                    (((s = new s(d, m + "enter", u, n, o)).target = p),
                    (s.relatedTarget = f),
                    (g = s)),
                  (f = g),
                  c && u)
                )
                  e: {
                    for (d = u, m = 0, p = s = c; p; p = Rr(p)) m++;
                    for (p = 0, g = d; g; g = Rr(g)) p++;
                    for (; 0 < m - p; ) (s = Rr(s)), m--;
                    for (; 0 < p - m; ) (d = Rr(d)), p--;
                    for (; m--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = Rr(s)), (d = Rr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== c && Fr(i, l, c, s, !1),
                  null !== u && null !== f && Fr(i, f, u, s, !0);
              }
              if (
                "select" ===
                  (c =
                    (l = r ? oo(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === c && "file" === l.type)
              )
                var h = Jn;
              else if (Qn(l))
                if (er) h = ur;
                else {
                  h = lr;
                  var v = ir;
                }
              else
                (c = l.nodeName) &&
                  "input" === c.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (h = cr);
              switch (
                (h && (h = h(e, r))
                  ? Kn(i, h, n, o)
                  : (v && v(e, l, r),
                    "focusout" === e &&
                      (v = l._wrapperState) &&
                      v.controlled &&
                      "number" === l.type &&
                      oe(l, "number", l.value)),
                (v = r ? oo(r) : window),
                e)
              ) {
                case "focusin":
                  (Qn(v) || "true" === v.contentEditable) &&
                    ((br = v), (_r = r), (wr = null));
                  break;
                case "focusout":
                  wr = _r = br = null;
                  break;
                case "mousedown":
                  Or = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (Or = !1), Er(i, n, o);
                  break;
                case "selectionchange":
                  if (yr) break;
                case "keydown":
                case "keyup":
                  Er(i, n, o);
              }
              var y;
              if (An)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? Wn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Bn &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (y = rn())
                    : ((tn = "value" in (en = o) ? en.value : en.textContent),
                      (Hn = !0))),
                0 < (v = Ar(r, b)).length &&
                  ((b = new En(b, e, null, n, o)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = $n(n)) && (b.data = y))),
                (y = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return $n(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), Vn);
                        case "textInput":
                          return (e = t.data) === Vn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!An && Wn(e, t))
                          ? ((e = rn()), (nn = tn = en = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Bn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Ar(r, "onBeforeInput")).length &&
                  ((o = new En("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            Cr(i, t);
          });
        }
        function Mr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Ar(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Be(e, n)) && r.unshift(Mr(e, a, o)),
              null != (a = Be(e, t)) && r.push(Mr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Rr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Fr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              c = l.alternate,
              u = l.stateNode;
            if (null !== c && c === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              o
                ? null != (c = Be(n, a)) && i.unshift(Mr(n, c, l))
                : o || (null != (c = Be(n, a)) && i.push(Mr(n, c, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        function Br() {}
        var Vr = null,
          Ur = null;
        function Wr(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function $r(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Hr = "function" == typeof setTimeout ? setTimeout : void 0,
          qr = "function" == typeof clearTimeout ? clearTimeout : void 0;
        function Qr(e) {
          1 === e.nodeType
            ? (e.textContent = "")
            : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
        }
        function Kr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Xr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Yr = 0;
        var Gr = Math.random().toString(36).slice(2),
          Zr = "__reactFiber$" + Gr,
          Jr = "__reactProps$" + Gr,
          eo = "__reactContainer$" + Gr,
          to = "__reactEvents$" + Gr;
        function no(e) {
          var t = e[Zr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[eo] || n[Zr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Xr(e); null !== e; ) {
                  if ((n = e[Zr])) return n;
                  e = Xr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ro(e) {
          return !(e = e[Zr] || e[eo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function oo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function ao(e) {
          return e[Jr] || null;
        }
        function io(e) {
          var t = e[to];
          return void 0 === t && (t = e[to] = new Set()), t;
        }
        var lo = [],
          co = -1;
        function uo(e) {
          return { current: e };
        }
        function so(e) {
          0 > co || ((e.current = lo[co]), (lo[co] = null), co--);
        }
        function fo(e, t) {
          co++, (lo[co] = e.current), (e.current = t);
        }
        var po = {},
          mo = uo(po),
          go = uo(!1),
          ho = po;
        function vo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return po;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function yo(e) {
          return null != (e = e.childContextTypes);
        }
        function bo() {
          so(go), so(mo);
        }
        function _o(e, t, n) {
          if (mo.current !== po) throw Error(i(168));
          fo(mo, t), fo(go, n);
        }
        function wo(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in e)) throw Error(i(108, Q(t) || "Unknown", a));
          return o({}, n, r);
        }
        function Oo(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              po),
            (ho = mo.current),
            fo(mo, e),
            fo(go, go.current),
            !0
          );
        }
        function Eo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = wo(e, t, ho)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              so(go),
              so(mo),
              fo(mo, e))
            : so(go),
            fo(go, n);
        }
        var ko = null,
          xo = null,
          So = a.unstable_runWithPriority,
          Po = a.unstable_scheduleCallback,
          jo = a.unstable_cancelCallback,
          Co = a.unstable_shouldYield,
          No = a.unstable_requestPaint,
          To = a.unstable_now,
          Do = a.unstable_getCurrentPriorityLevel,
          zo = a.unstable_ImmediatePriority,
          Lo = a.unstable_UserBlockingPriority,
          Io = a.unstable_NormalPriority,
          Mo = a.unstable_LowPriority,
          Ao = a.unstable_IdlePriority,
          Ro = {},
          Fo = void 0 !== No ? No : function () {},
          Bo = null,
          Vo = null,
          Uo = !1,
          Wo = To(),
          $o =
            1e4 > Wo
              ? To
              : function () {
                  return To() - Wo;
                };
        function Ho() {
          switch (Do()) {
            case zo:
              return 99;
            case Lo:
              return 98;
            case Io:
              return 97;
            case Mo:
              return 96;
            case Ao:
              return 95;
            default:
              throw Error(i(332));
          }
        }
        function qo(e) {
          switch (e) {
            case 99:
              return zo;
            case 98:
              return Lo;
            case 97:
              return Io;
            case 96:
              return Mo;
            case 95:
              return Ao;
            default:
              throw Error(i(332));
          }
        }
        function Qo(e, t) {
          return (e = qo(e)), So(e, t);
        }
        function Ko(e, t, n) {
          return (e = qo(e)), Po(e, t, n);
        }
        function Xo() {
          if (null !== Vo) {
            var e = Vo;
            (Vo = null), jo(e);
          }
          Yo();
        }
        function Yo() {
          if (!Uo && null !== Bo) {
            Uo = !0;
            var e = 0;
            try {
              var t = Bo;
              Qo(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Bo = null);
            } catch (t) {
              throw (null !== Bo && (Bo = Bo.slice(e + 1)), Po(zo, Xo), t);
            } finally {
              Uo = !1;
            }
          }
        }
        var Go = w.ReactCurrentBatchConfig;
        function Zo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = o({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Jo = uo(null),
          ea = null,
          ta = null,
          na = null;
        function ra() {
          na = ta = ea = null;
        }
        function oa(e) {
          var t = Jo.current;
          so(Jo), (e.type._context._currentValue = t);
        }
        function aa(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function ia(e, t) {
          (ea = e),
            (na = ta = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (Ai = !0), (e.firstContext = null));
        }
        function la(e, t) {
          if (na !== e && !1 !== t && 0 !== t)
            if (
              (("number" == typeof t && 1073741823 !== t) ||
                ((na = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === ta)
            ) {
              if (null === ea) throw Error(i(308));
              (ta = t),
                (ea.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else ta = ta.next = t;
          return e._currentValue;
        }
        var ca = !1;
        function ua(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function sa(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function fa(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function da(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function pa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function ma(e, t, n, r) {
          var a = e.updateQueue;
          ca = !1;
          var i = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            c = a.shared.pending;
          if (null !== c) {
            a.shared.pending = null;
            var u = c,
              s = u.next;
            (u.next = null), null === l ? (i = s) : (l.next = s), (l = u);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== l &&
                (null === d ? (f.firstBaseUpdate = s) : (d.next = s),
                (f.lastBaseUpdate = u));
            }
          }
          if (null !== i) {
            for (d = a.baseState, l = 0, f = s = u = null; ; ) {
              c = i.lane;
              var p = i.eventTime;
              if ((r & c) === c) {
                null !== f &&
                  (f = f.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    g = i;
                  switch (((c = t), (p = n), g.tag)) {
                    case 1:
                      if ("function" == typeof (m = g.payload)) {
                        d = m.call(p, d, c);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-4097 & m.flags) | 64;
                    case 0:
                      if (
                        null ==
                        (c =
                          "function" == typeof (m = g.payload)
                            ? m.call(p, d, c)
                            : m)
                      )
                        break e;
                      d = o({}, d, c);
                      break e;
                    case 2:
                      ca = !0;
                  }
                }
                null !== i.callback &&
                  ((e.flags |= 32),
                  null === (c = a.effects) ? (a.effects = [i]) : c.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: c,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === f ? ((s = f = p), (u = d)) : (f = f.next = p),
                  (l |= c);
              if (null === (i = i.next)) {
                if (null === (c = a.shared.pending)) break;
                (i = c.next),
                  (c.next = null),
                  (a.lastBaseUpdate = c),
                  (a.shared.pending = null);
              }
            }
            null === f && (u = d),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = f),
              (Bl |= l),
              (e.lanes = l),
              (e.memoizedState = d);
          }
        }
        function ga(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" != typeof o))
                  throw Error(i(191, o));
                o.call(r);
              }
            }
        }
        var ha = new r.Component().refs;
        function va(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : o({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ya = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ye(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = fc(),
              o = dc(e),
              a = fa(r, o);
            (a.payload = t),
              null != n && (a.callback = n),
              da(e, a),
              pc(e, o, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = fc(),
              o = dc(e),
              a = fa(r, o);
            (a.tag = 1),
              (a.payload = t),
              null != n && (a.callback = n),
              da(e, a),
              pc(e, o, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = fc(),
              r = dc(e),
              o = fa(n, r);
            (o.tag = 2), null != t && (o.callback = t), da(e, o), pc(e, r, n);
          },
        };
        function ba(e, t, n, r, o, a, i) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !dr(n, r) ||
                !dr(o, a);
        }
        function _a(e, t, n) {
          var r = !1,
            o = po,
            a = t.contextType;
          return (
            "object" == typeof a && null !== a
              ? (a = la(a))
              : ((o = yo(t) ? ho : mo.current),
                (a = (r = null != (r = t.contextTypes)) ? vo(e, o) : po)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ya),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function wa(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ya.enqueueReplaceState(t, t.state, null);
        }
        function Oa(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = ha), ua(e);
          var a = t.contextType;
          "object" == typeof a && null !== a
            ? (o.context = la(a))
            : ((a = yo(t) ? ho : mo.current), (o.context = vo(e, a))),
            ma(e, n, o, r),
            (o.state = e.memoizedState),
            "function" == typeof (a = t.getDerivedStateFromProps) &&
              (va(e, t, a, n), (o.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof o.getSnapshotBeforeUpdate ||
              ("function" != typeof o.UNSAFE_componentWillMount &&
                "function" != typeof o.componentWillMount) ||
              ((t = o.state),
              "function" == typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" == typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && ya.enqueueReplaceState(o, o.state, null),
              ma(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" == typeof o.componentDidMount && (e.flags |= 4);
        }
        var Ea = Array.isArray;
        function ka(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === ha && (t = r.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" != typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function xa(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              i(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t,
              ),
            );
        }
        function Sa(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Hc(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function c(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Xc(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = o(t, n.props)).ref = ka(e, t, n)), (r.return = e), r)
              : (((r = qc(n.type, n.key, n.props, null, e.mode, r)).ref = ka(
                  e,
                  t,
                  n,
                )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Yc(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Qc(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t)
              return ((t = Xc("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case O:
                  return (
                    ((n = qc(t.type, t.key, t.props, null, e.mode, n)).ref = ka(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case E:
                  return ((t = Yc(t, e.mode, n)).return = e), t;
              }
              if (Ea(t) || U(t))
                return ((t = Qc(t, e.mode, n, null)).return = e), t;
              xa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n)
              return null !== o ? null : c(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case O:
                  return n.key === o
                    ? n.type === k
                      ? f(e, t, n.props.children, r, o)
                      : u(e, t, n, r)
                    : null;
                case E:
                  return n.key === o ? s(e, t, n, r) : null;
              }
              if (Ea(n) || U(n)) return null !== o ? null : f(e, t, n, r, null);
              xa(e, n);
            }
            return null;
          }
          function m(e, t, n, r, o) {
            if ("string" == typeof r || "number" == typeof r)
              return c(t, (e = e.get(n) || null), "" + r, o);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case O:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === k
                      ? f(t, e, r.props.children, o, r.key)
                      : u(t, e, r, o)
                  );
                case E:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o,
                  );
              }
              if (Ea(r) || U(r))
                return f(t, (e = e.get(n) || null), r, o, null);
              xa(t, r);
            }
            return null;
          }
          function g(o, i, l, c) {
            for (
              var u = null, s = null, f = i, g = (i = 0), h = null;
              null !== f && g < l.length;
              g++
            ) {
              f.index > g ? ((h = f), (f = null)) : (h = f.sibling);
              var v = p(o, f, l[g], c);
              if (null === v) {
                null === f && (f = h);
                break;
              }
              e && f && null === v.alternate && t(o, f),
                (i = a(v, i, g)),
                null === s ? (u = v) : (s.sibling = v),
                (s = v),
                (f = h);
            }
            if (g === l.length) return n(o, f), u;
            if (null === f) {
              for (; g < l.length; g++)
                null !== (f = d(o, l[g], c)) &&
                  ((i = a(f, i, g)),
                  null === s ? (u = f) : (s.sibling = f),
                  (s = f));
              return u;
            }
            for (f = r(o, f); g < l.length; g++)
              null !== (h = m(f, o, g, l[g], c)) &&
                (e &&
                  null !== h.alternate &&
                  f.delete(null === h.key ? g : h.key),
                (i = a(h, i, g)),
                null === s ? (u = h) : (s.sibling = h),
                (s = h));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              u
            );
          }
          function h(o, l, c, u) {
            var s = U(c);
            if ("function" != typeof s) throw Error(i(150));
            if (null == (c = s.call(c))) throw Error(i(151));
            for (
              var f = (s = null), g = l, h = (l = 0), v = null, y = c.next();
              null !== g && !y.done;
              h++, y = c.next()
            ) {
              g.index > h ? ((v = g), (g = null)) : (v = g.sibling);
              var b = p(o, g, y.value, u);
              if (null === b) {
                null === g && (g = v);
                break;
              }
              e && g && null === b.alternate && t(o, g),
                (l = a(b, l, h)),
                null === f ? (s = b) : (f.sibling = b),
                (f = b),
                (g = v);
            }
            if (y.done) return n(o, g), s;
            if (null === g) {
              for (; !y.done; h++, y = c.next())
                null !== (y = d(o, y.value, u)) &&
                  ((l = a(y, l, h)),
                  null === f ? (s = y) : (f.sibling = y),
                  (f = y));
              return s;
            }
            for (g = r(o, g); !y.done; h++, y = c.next())
              null !== (y = m(g, o, h, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  g.delete(null === y.key ? h : y.key),
                (l = a(y, l, h)),
                null === f ? (s = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                g.forEach(function (e) {
                  return t(o, e);
                }),
              s
            );
          }
          return function (e, r, a, c) {
            var u =
              "object" == typeof a &&
              null !== a &&
              a.type === k &&
              null === a.key;
            u && (a = a.props.children);
            var s = "object" == typeof a && null !== a;
            if (s)
              switch (a.$$typeof) {
                case O:
                  e: {
                    for (s = a.key, u = r; null !== u; ) {
                      if (u.key === s) {
                        if (7 === u.tag) {
                          if (a.type === k) {
                            n(e, u.sibling),
                              ((r = o(u, a.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (u.elementType === a.type) {
                          n(e, u.sibling),
                            ((r = o(u, a.props)).ref = ka(e, u, a)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, u);
                        break;
                      }
                      t(e, u), (u = u.sibling);
                    }
                    a.type === k
                      ? (((r = Qc(a.props.children, e.mode, c, a.key)).return =
                          e),
                        (e = r))
                      : (((c = qc(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          e.mode,
                          c,
                        )).ref = ka(e, r, a)),
                        (c.return = e),
                        (e = c));
                  }
                  return l(e);
                case E:
                  e: {
                    for (u = a.key; null !== r; ) {
                      if (r.key === u) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === a.containerInfo &&
                          r.stateNode.implementation === a.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = o(r, a.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Yc(a, e.mode, c)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" == typeof a || "number" == typeof a)
              return (
                (a = "" + a),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = o(r, a)).return = e), (e = r))
                  : (n(e, r), ((r = Xc(a, e.mode, c)).return = e), (e = r)),
                l(e)
              );
            if (Ea(a)) return g(e, r, a, c);
            if (U(a)) return h(e, r, a, c);
            if ((s && xa(e, a), void 0 === a && !u))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(i(152, Q(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var Pa = Sa(!0),
          ja = Sa(!1),
          Ca = {},
          Na = uo(Ca),
          Ta = uo(Ca),
          Da = uo(Ca);
        function za(e) {
          if (e === Ca) throw Error(i(174));
          return e;
        }
        function La(e, t) {
          switch ((fo(Da, t), fo(Ta, e), fo(Na, Ca), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : me(null, "");
              break;
            default:
              t = me(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          so(Na), fo(Na, t);
        }
        function Ia() {
          so(Na), so(Ta), so(Da);
        }
        function Ma(e) {
          za(Da.current);
          var t = za(Na.current),
            n = me(t, e.type);
          t !== n && (fo(Ta, e), fo(Na, n));
        }
        function Aa(e) {
          Ta.current === e && (so(Na), so(Ta));
        }
        var Ra = uo(0);
        function Fa(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Ba = null,
          Va = null,
          Ua = !1;
        function Wa(e, t) {
          var n = Wc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function $a(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Ha(e) {
          if (Ua) {
            var t = Va;
            if (t) {
              var n = t;
              if (!$a(e, t)) {
                if (!(t = Kr(n.nextSibling)) || !$a(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Ua = !1), void (Ba = e)
                  );
                Wa(Ba, n);
              }
              (Ba = e), (Va = Kr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Ua = !1), (Ba = e);
          }
        }
        function qa(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Ba = e;
        }
        function Qa(e) {
          if (e !== Ba) return !1;
          if (!Ua) return qa(e), (Ua = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !$r(t, e.memoizedProps))
          )
            for (t = Va; t; ) Wa(e, t), (t = Kr(t.nextSibling));
          if ((qa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Va = Kr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Va = null;
            }
          } else Va = Ba ? Kr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Ka() {
          (Va = Ba = null), (Ua = !1);
        }
        var Xa = [];
        function Ya() {
          for (var e = 0; e < Xa.length; e++)
            Xa[e]._workInProgressVersionPrimary = null;
          Xa.length = 0;
        }
        var Ga = w.ReactCurrentDispatcher,
          Za = w.ReactCurrentBatchConfig,
          Ja = 0,
          ei = null,
          ti = null,
          ni = null,
          ri = !1,
          oi = !1;
        function ai() {
          throw Error(i(321));
        }
        function ii(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function li(e, t, n, r, o, a) {
          if (
            ((Ja = a),
            (ei = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Ga.current = null === e || null === e.memoizedState ? zi : Li),
            (e = n(r, o)),
            oi)
          ) {
            a = 0;
            do {
              if (((oi = !1), !(25 > a))) throw Error(i(301));
              (a += 1),
                (ni = ti = null),
                (t.updateQueue = null),
                (Ga.current = Ii),
                (e = n(r, o));
            } while (oi);
          }
          if (
            ((Ga.current = Di),
            (t = null !== ti && null !== ti.next),
            (Ja = 0),
            (ni = ti = ei = null),
            (ri = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ni ? (ei.memoizedState = ni = e) : (ni = ni.next = e), ni
          );
        }
        function ui() {
          if (null === ti) {
            var e = ei.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ti.next;
          var t = null === ni ? ei.memoizedState : ni.next;
          if (null !== t) (ni = t), (ti = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (ti = e).memoizedState,
              baseState: ti.baseState,
              baseQueue: ti.baseQueue,
              queue: ti.queue,
              next: null,
            }),
              null === ni ? (ei.memoizedState = ni = e) : (ni = ni.next = e);
          }
          return ni;
        }
        function si(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function fi(e) {
          var t = ui(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = ti,
            o = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== o) {
              var l = o.next;
              (o.next = a.next), (a.next = l);
            }
            (r.baseQueue = o = a), (n.pending = null);
          }
          if (null !== o) {
            (o = o.next), (r = r.baseState);
            var c = (l = a = null),
              u = o;
            do {
              var s = u.lane;
              if ((Ja & s) === s)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      eagerReducer: u.eagerReducer,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
              else {
                var f = {
                  lane: s,
                  action: u.action,
                  eagerReducer: u.eagerReducer,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((l = c = f), (a = r)) : (c = c.next = f),
                  (ei.lanes |= s),
                  (Bl |= s);
              }
              u = u.next;
            } while (null !== u && u !== o);
            null === c ? (a = r) : (c.next = l),
              sr(r, t.memoizedState) || (Ai = !0),
              (t.memoizedState = r),
              (t.baseState = a),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function di(e) {
          var t = ui(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (a = e(a, l.action)), (l = l.next);
            } while (l !== o);
            sr(a, t.memoizedState) || (Ai = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function pi(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var o = t._workInProgressVersionPrimary;
          if (
            (null !== o
              ? (e = o === r)
              : ((e = e.mutableReadLanes),
                (e = (Ja & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), Xa.push(t))),
            e)
          )
            return n(t._source);
          throw (Xa.push(t), Error(i(350)));
        }
        function mi(e, t, n, r) {
          var o = Dl;
          if (null === o) throw Error(i(349));
          var a = t._getVersion,
            l = a(t._source),
            c = Ga.current,
            u = c.useState(function () {
              return pi(o, t, n);
            }),
            s = u[1],
            f = u[0];
          u = ni;
          var d = e.memoizedState,
            p = d.refs,
            m = p.getSnapshot,
            g = d.source;
          d = d.subscribe;
          var h = ei;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            c.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = s);
                var e = a(t._source);
                if (!sr(l, e)) {
                  (e = n(t._source)),
                    sr(f, e) ||
                      (s(e),
                      (e = dc(h)),
                      (o.mutableReadLanes |= e & o.pendingLanes)),
                    (e = o.mutableReadLanes),
                    (o.entangledLanes |= e);
                  for (var r = o.entanglements, i = e; 0 < i; ) {
                    var c = 31 - $t(i),
                      u = 1 << c;
                    (r[c] |= e), (i &= ~u);
                  }
                }
              },
              [n, t, r],
            ),
            c.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = dc(h);
                    o.mutableReadLanes |= r & o.pendingLanes;
                  } catch (e) {
                    n(function () {
                      throw e;
                    });
                  }
                });
              },
              [t, r],
            ),
            (sr(m, n) && sr(g, t) && sr(d, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: si,
                lastRenderedState: f,
              }).dispatch = s =
                Ti.bind(null, ei, e)),
              (u.queue = e),
              (u.baseQueue = null),
              (f = pi(o, t, n)),
              (u.memoizedState = u.baseState = f)),
            f
          );
        }
        function gi(e, t, n) {
          return mi(ui(), e, t, n);
        }
        function hi(e) {
          var t = ci();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: si,
                lastRenderedState: e,
              }).dispatch =
              Ti.bind(null, ei, e)),
            [t.memoizedState, e]
          );
        }
        function vi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ei.updateQueue)
              ? ((t = { lastEffect: null }),
                (ei.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function yi(e) {
          return (e = { current: e }), (ci().memoizedState = e);
        }
        function bi() {
          return ui().memoizedState;
        }
        function _i(e, t, n, r) {
          var o = ci();
          (ei.flags |= e),
            (o.memoizedState = vi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function wi(e, t, n, r) {
          var o = ui();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== ti) {
            var i = ti.memoizedState;
            if (((a = i.destroy), null !== r && ii(r, i.deps)))
              return void vi(t, n, a, r);
          }
          (ei.flags |= e), (o.memoizedState = vi(1 | t, n, a, r));
        }
        function Oi(e, t) {
          return _i(516, 4, e, t);
        }
        function Ei(e, t) {
          return wi(516, 4, e, t);
        }
        function ki(e, t) {
          return wi(4, 2, e, t);
        }
        function xi(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Si(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            wi(4, 2, xi.bind(null, t, e), n)
          );
        }
        function Pi() {}
        function ji(e, t) {
          var n = ui();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ii(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ci(e, t) {
          var n = ui();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ii(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ni(e, t) {
          var n = Ho();
          Qo(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Qo(97 < n ? 97 : n, function () {
              var n = Za.transition;
              Za.transition = 1;
              try {
                e(!1), t();
              } finally {
                Za.transition = n;
              }
            });
        }
        function Ti(e, t, n) {
          var r = fc(),
            o = dc(e),
            a = {
              lane: o,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            i = t.pending;
          if (
            (null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)),
            (t.pending = a),
            (i = e.alternate),
            e === ei || (null !== i && i === ei))
          )
            oi = ri = !0;
          else {
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  c = i(l, n);
                if (((a.eagerReducer = i), (a.eagerState = c), sr(c, l)))
                  return;
              } catch (e) {}
            pc(e, o, r);
          }
        }
        var Di = {
            readContext: la,
            useCallback: ai,
            useContext: ai,
            useEffect: ai,
            useImperativeHandle: ai,
            useLayoutEffect: ai,
            useMemo: ai,
            useReducer: ai,
            useRef: ai,
            useState: ai,
            useDebugValue: ai,
            useDeferredValue: ai,
            useTransition: ai,
            useMutableSource: ai,
            useOpaqueIdentifier: ai,
            unstable_isNewReconciler: !1,
          },
          zi = {
            readContext: la,
            useCallback: function (e, t) {
              return (ci().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: la,
            useEffect: Oi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                _i(4, 2, xi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return _i(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = ci();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = ci();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Ti.bind(null, ei, e)),
                [r.memoizedState, e]
              );
            },
            useRef: yi,
            useState: hi,
            useDebugValue: Pi,
            useDeferredValue: function (e) {
              var t = hi(e),
                n = t[0],
                r = t[1];
              return (
                Oi(
                  function () {
                    var t = Za.transition;
                    Za.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Za.transition = t;
                    }
                  },
                  [e],
                ),
                n
              );
            },
            useTransition: function () {
              var e = hi(!1),
                t = e[0];
              return yi((e = Ni.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = ci();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                mi(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Ua) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: I, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + (Yr++).toString(36))),
                      Error(i(355)))
                    );
                  }),
                  n = hi(t)[1];
                return (
                  0 == (2 & ei.mode) &&
                    ((ei.flags |= 516),
                    vi(
                      5,
                      function () {
                        n("r:" + (Yr++).toString(36));
                      },
                      void 0,
                      null,
                    )),
                  t
                );
              }
              return hi((t = "r:" + (Yr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Li = {
            readContext: la,
            useCallback: ji,
            useContext: la,
            useEffect: Ei,
            useImperativeHandle: Si,
            useLayoutEffect: ki,
            useMemo: Ci,
            useReducer: fi,
            useRef: bi,
            useState: function () {
              return fi(si);
            },
            useDebugValue: Pi,
            useDeferredValue: function (e) {
              var t = fi(si),
                n = t[0],
                r = t[1];
              return (
                Ei(
                  function () {
                    var t = Za.transition;
                    Za.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Za.transition = t;
                    }
                  },
                  [e],
                ),
                n
              );
            },
            useTransition: function () {
              var e = fi(si)[0];
              return [bi().current, e];
            },
            useMutableSource: gi,
            useOpaqueIdentifier: function () {
              return fi(si)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ii = {
            readContext: la,
            useCallback: ji,
            useContext: la,
            useEffect: Ei,
            useImperativeHandle: Si,
            useLayoutEffect: ki,
            useMemo: Ci,
            useReducer: di,
            useRef: bi,
            useState: function () {
              return di(si);
            },
            useDebugValue: Pi,
            useDeferredValue: function (e) {
              var t = di(si),
                n = t[0],
                r = t[1];
              return (
                Ei(
                  function () {
                    var t = Za.transition;
                    Za.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Za.transition = t;
                    }
                  },
                  [e],
                ),
                n
              );
            },
            useTransition: function () {
              var e = di(si)[0];
              return [bi().current, e];
            },
            useMutableSource: gi,
            useOpaqueIdentifier: function () {
              return di(si)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Mi = w.ReactCurrentOwner,
          Ai = !1;
        function Ri(e, t, n, r) {
          t.child = null === e ? ja(t, null, n, r) : Pa(t, e.child, n, r);
        }
        function Fi(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            ia(t, o),
            (r = li(e, t, n, r, a, o)),
            null === e || Ai
              ? ((t.flags |= 1), Ri(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                al(e, t, o))
          );
        }
        function Bi(e, t, n, r, o, a) {
          if (null === e) {
            var i = n.type;
            return "function" != typeof i ||
              $c(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = qc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Vi(e, t, i, r, o, a));
          }
          return (
            (i = e.child),
            0 == (o & a) &&
            ((o = i.memoizedProps),
            (n = null !== (n = n.compare) ? n : dr)(o, r) && e.ref === t.ref)
              ? al(e, t, a)
              : ((t.flags |= 1),
                ((e = Hc(i, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Vi(e, t, n, r, o, a) {
          if (null !== e && dr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Ai = !1), 0 == (a & o)))
              return (t.lanes = e.lanes), al(e, t, a);
            0 != (16384 & e.flags) && (Ai = !0);
          }
          return $i(e, t, n, r, a);
        }
        function Ui(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 == (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), wc(t, n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  wc(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                wc(t, null !== a ? a.baseLanes : n);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              wc(t, r);
          return Ri(e, t, o, n), t.child;
        }
        function Wi(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function $i(e, t, n, r, o) {
          var a = yo(n) ? ho : mo.current;
          return (
            (a = vo(t, a)),
            ia(t, o),
            (n = li(e, t, n, r, a, o)),
            null === e || Ai
              ? ((t.flags |= 1), Ri(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                al(e, t, o))
          );
        }
        function Hi(e, t, n, r, o) {
          if (yo(n)) {
            var a = !0;
            Oo(t);
          } else a = !1;
          if ((ia(t, o), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              _a(t, n, r),
              Oa(t, n, r, o),
              (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var c = i.context,
              u = n.contextType;
            "object" == typeof u && null !== u
              ? (u = la(u))
              : (u = vo(t, (u = yo(n) ? ho : mo.current)));
            var s = n.getDerivedStateFromProps,
              f =
                "function" == typeof s ||
                "function" == typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== r || c !== u) && wa(t, i, r, u)),
              (ca = !1);
            var d = t.memoizedState;
            (i.state = d),
              ma(t, r, i, o),
              (c = t.memoizedState),
              l !== r || d !== c || go.current || ca
                ? ("function" == typeof s &&
                    (va(t, n, s, r), (c = t.memoizedState)),
                  (l = ca || ba(t, n, l, r, d, c, u))
                    ? (f ||
                        ("function" != typeof i.UNSAFE_componentWillMount &&
                          "function" != typeof i.componentWillMount) ||
                        ("function" == typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" == typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" == typeof i.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" == typeof i.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = c)),
                  (i.props = r),
                  (i.state = c),
                  (i.context = u),
                  (r = l))
                : ("function" == typeof i.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (i = t.stateNode),
              sa(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : Zo(t.type, l)),
              (i.props = u),
              (f = t.pendingProps),
              (d = i.context),
              "object" == typeof (c = n.contextType) && null !== c
                ? (c = la(c))
                : (c = vo(t, (c = yo(n) ? ho : mo.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" == typeof p ||
              "function" == typeof i.getSnapshotBeforeUpdate) ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== c) && wa(t, i, r, c)),
              (ca = !1),
              (d = t.memoizedState),
              (i.state = d),
              ma(t, r, i, o);
            var m = t.memoizedState;
            l !== f || d !== m || go.current || ca
              ? ("function" == typeof p &&
                  (va(t, n, p, r), (m = t.memoizedState)),
                (u = ca || ba(t, n, u, r, d, m, c))
                  ? (s ||
                      ("function" != typeof i.UNSAFE_componentWillUpdate &&
                        "function" != typeof i.componentWillUpdate) ||
                      ("function" == typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, m, c),
                      "function" == typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, m, c)),
                    "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" != typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (i.props = r),
                (i.state = m),
                (i.context = c),
                (r = u))
              : ("function" != typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return qi(e, t, n, r, a, o);
        }
        function qi(e, t, n, r, o, a) {
          Wi(e, t);
          var i = 0 != (64 & t.flags);
          if (!r && !i) return o && Eo(t, n, !1), al(e, t, a);
          (r = t.stateNode), (Mi.current = t);
          var l =
            i && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Pa(t, e.child, null, a)),
                (t.child = Pa(t, null, l, a)))
              : Ri(e, t, l, a),
            (t.memoizedState = r.state),
            o && Eo(t, n, !0),
            t.child
          );
        }
        function Qi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? _o(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && _o(0, t.context, !1),
            La(e, t.containerInfo);
        }
        var Ki,
          Xi,
          Yi,
          Gi = { dehydrated: null, retryLane: 0 };
        function Zi(e, t, n) {
          var r,
            o = t.pendingProps,
            a = Ra.current,
            i = !1;
          return (
            (r = 0 != (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
            r
              ? ((i = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === o.fallback ||
                !0 === o.unstable_avoidThisFallback ||
                (a |= 1),
            fo(Ra, 1 & a),
            null === e
              ? (void 0 !== o.fallback && Ha(t),
                (e = o.children),
                (a = o.fallback),
                i
                  ? ((e = Ji(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Gi),
                    e)
                  : "number" == typeof o.unstable_expectedLoadTime
                    ? ((e = Ji(t, e, a, n)),
                      (t.child.memoizedState = { baseLanes: n }),
                      (t.memoizedState = Gi),
                      (t.lanes = 33554432),
                      e)
                    : (((n = Kc(
                        { mode: "visible", children: e },
                        t.mode,
                        n,
                        null,
                      )).return = t),
                      (t.child = n)))
              : (e.memoizedState,
                i
                  ? ((o = tl(e, t, o.children, o.fallback, n)),
                    (i = t.child),
                    (a = e.child.memoizedState),
                    (i.memoizedState =
                      null === a
                        ? { baseLanes: n }
                        : { baseLanes: a.baseLanes | n }),
                    (i.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Gi),
                    o)
                  : ((n = el(e, t, o.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Ji(e, t, n, r) {
          var o = e.mode,
            a = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 == (2 & o) && null !== a
              ? ((a.childLanes = 0), (a.pendingProps = t))
              : (a = Kc(t, o, 0, null)),
            (n = Qc(n, o, r, null)),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            n
          );
        }
        function el(e, t, n, r) {
          var o = e.child;
          return (
            (e = o.sibling),
            (n = Hc(o, { mode: "visible", children: n })),
            0 == (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              ((e.nextEffect = null),
              (e.flags = 8),
              (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function tl(e, t, n, r, o) {
          var a = t.mode,
            i = e.child;
          e = i.sibling;
          var l = { mode: "hidden", children: n };
          return (
            0 == (2 & a) && t.child !== i
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = l),
                null !== (i = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect),
                    (t.lastEffect = i),
                    (i.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = Hc(i, l)),
            null !== e ? (r = Hc(e, r)) : ((r = Qc(r, a, o, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function nl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), aa(e.return, t);
        }
        function rl(e, t, n, r, o, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
                lastEffect: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = o),
              (i.lastEffect = a));
        }
        function ol(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((Ri(e, t, r.children, n), 0 != (2 & (r = Ra.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 != (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                else if (19 === e.tag) nl(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((fo(Ra, r), 0 == (2 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === Fa(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  rl(t, !1, o, n, a, t.lastEffect);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === Fa(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                rl(t, !0, n, null, a, t.lastEffect);
                break;
              case "together":
                rl(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function al(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Bl |= t.lanes),
            0 != (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(i(153));
            if (null !== t.child) {
              for (
                n = Hc((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = Hc(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function il(e, t) {
          if (!Ua)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ll(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
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
              return null;
            case 1:
            case 17:
              return yo(t.type) && bo(), null;
            case 3:
              return (
                Ia(),
                so(go),
                so(mo),
                Ya(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Qa(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Aa(t);
              var a = za(Da.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Xi(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return null;
                }
                if (((e = za(Na.current)), Qa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Zr] = t), (r[Jr] = l), n)) {
                    case "dialog":
                      Nr("cancel", r), Nr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Nr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Sr.length; e++) Nr(Sr[e], r);
                      break;
                    case "source":
                      Nr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Nr("error", r), Nr("load", r);
                      break;
                    case "details":
                      Nr("toggle", r);
                      break;
                    case "input":
                      ee(r, l), Nr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Nr("invalid", r);
                      break;
                    case "textarea":
                      ce(r, l), Nr("invalid", r);
                  }
                  for (var u in (ke(n, l), (e = null), l))
                    l.hasOwnProperty(u) &&
                      ((a = l[u]),
                      "children" === u
                        ? "string" == typeof a
                          ? r.textContent !== a && (e = ["children", a])
                          : "number" == typeof a &&
                            r.textContent !== "" + a &&
                            (e = ["children", "" + a])
                        : c.hasOwnProperty(u) &&
                          null != a &&
                          "onScroll" === u &&
                          Nr("scroll", r));
                  switch (n) {
                    case "input":
                      Y(r), re(r, l, !0);
                      break;
                    case "textarea":
                      Y(r), se(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof l.onClick && (r.onclick = Br);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((u = 9 === a.nodeType ? a : a.ownerDocument),
                    e === fe && (e = pe(n)),
                    e === fe
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script><\/script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                          ? (e = u.createElement(n, { is: r.is }))
                          : ((e = u.createElement(n)),
                            "select" === n &&
                              ((u = e),
                              r.multiple
                                ? (u.multiple = !0)
                                : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[Zr] = t),
                    (e[Jr] = r),
                    Ki(e, t),
                    (t.stateNode = e),
                    (u = xe(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Nr("cancel", e), Nr("close", e), (a = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Nr("load", e), (a = r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Sr.length; a++) Nr(Sr[a], e);
                      a = r;
                      break;
                    case "source":
                      Nr("error", e), (a = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Nr("error", e), Nr("load", e), (a = r);
                      break;
                    case "details":
                      Nr("toggle", e), (a = r);
                      break;
                    case "input":
                      ee(e, r), (a = J(e, r)), Nr("invalid", e);
                      break;
                    case "option":
                      a = ae(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = o({}, r, { value: void 0 })),
                        Nr("invalid", e);
                      break;
                    case "textarea":
                      ce(e, r), (a = le(e, r)), Nr("invalid", e);
                      break;
                    default:
                      a = r;
                  }
                  ke(n, a);
                  var s = a;
                  for (l in s)
                    if (s.hasOwnProperty(l)) {
                      var f = s[l];
                      "style" === l
                        ? Oe(e, f)
                        : "dangerouslySetInnerHTML" === l
                          ? null != (f = f ? f.__html : void 0) && ve(e, f)
                          : "children" === l
                            ? "string" == typeof f
                              ? ("textarea" !== n || "" !== f) && ye(e, f)
                              : "number" == typeof f && ye(e, "" + f)
                            : "suppressContentEditableWarning" !== l &&
                              "suppressHydrationWarning" !== l &&
                              "autoFocus" !== l &&
                              (c.hasOwnProperty(l)
                                ? null != f &&
                                  "onScroll" === l &&
                                  Nr("scroll", e)
                                : null != f && _(e, l, f, u));
                    }
                  switch (n) {
                    case "input":
                      Y(e), re(e, r, !1);
                      break;
                    case "textarea":
                      Y(e), se(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + K(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? ie(e, !!r.multiple, l, !1)
                          : null != r.defaultValue &&
                            ie(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof a.onClick && (e.onclick = Br);
                  }
                  Wr(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Yi(0, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(i(166));
                (n = za(Da.current)),
                  za(Na.current),
                  Qa(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Zr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Zr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                so(Ra),
                (r = t.memoizedState),
                0 != (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Qa(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 != (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 != (1 & Ra.current)
                        ? 0 === Al && (Al = 3)
                        : ((0 !== Al && 3 !== Al) || (Al = 4),
                          null === Dl ||
                            (0 == (134217727 & Bl) && 0 == (134217727 & Vl)) ||
                            vc(Dl, Ll))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Ia(), null === e && Dr(t.stateNode.containerInfo), null;
            case 10:
              return oa(t), null;
            case 19:
              if ((so(Ra), null === (r = t.memoizedState))) return null;
              if (((l = 0 != (64 & t.flags)), null === (u = r.rendering)))
                if (l) il(r, !1);
                else {
                  if (0 !== Al || (null !== e && 0 != (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = Fa(e))) {
                        for (
                          t.flags |= 64,
                            il(r, !1),
                            null !== (l = u.updateQueue) &&
                              ((t.updateQueue = l), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return fo(Ra, (1 & Ra.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    $o() > Hl &&
                    ((t.flags |= 64),
                    (l = !0),
                    il(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = Fa(u))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      il(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !u.alternate &&
                        !Ua)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * $o() - r.renderingStartTime > Hl &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (l = !0),
                      il(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = r.last) ? (n.sibling = u) : (t.child = u),
                    (r.last = u));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = $o()),
                  (n.sibling = null),
                  (t = Ra.current),
                  fo(Ra, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                Oc(),
                null !== e &&
                  (null !== e.memoizedState) != (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(i(156, t.tag));
        }
        function cl(e) {
          switch (e.tag) {
            case 1:
              yo(e.type) && bo();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Ia(), so(go), so(mo), Ya(), 0 != (64 & (t = e.flags))))
                throw Error(i(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Aa(e), null;
            case 13:
              return (
                so(Ra),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return so(Ra), null;
            case 4:
              return Ia(), null;
            case 10:
              return oa(e), null;
            case 23:
            case 24:
              return Oc(), null;
            default:
              return null;
          }
        }
        function ul(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += q(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (e) {
            o = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: o };
        }
        (Ki = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Xi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), za(Na.current);
              var i,
                l = null;
              switch (n) {
                case "input":
                  (a = J(e, a)), (r = J(e, r)), (l = []);
                  break;
                case "option":
                  (a = ae(e, a)), (r = ae(e, r)), (l = []);
                  break;
                case "select":
                  (a = o({}, a, { value: void 0 })),
                    (r = o({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = le(e, a)), (r = le(e, r)), (l = []);
                  break;
                default:
                  "function" != typeof a.onClick &&
                    "function" == typeof r.onClick &&
                    (e.onclick = Br);
              }
              for (f in (ke(n, r), (n = null), a))
                if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                  if ("style" === f) {
                    var u = a[f];
                    for (i in u)
                      u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== f &&
                      "children" !== f &&
                      "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      "autoFocus" !== f &&
                      (c.hasOwnProperty(f)
                        ? l || (l = [])
                        : (l = l || []).push(f, null));
              for (f in r) {
                var s = r[f];
                if (
                  ((u = null != a ? a[f] : void 0),
                  r.hasOwnProperty(f) && s !== u && (null != s || null != u))
                )
                  if ("style" === f)
                    if (u) {
                      for (i in u)
                        !u.hasOwnProperty(i) ||
                          (s && s.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in s)
                        s.hasOwnProperty(i) &&
                          u[i] !== s[i] &&
                          (n || (n = {}), (n[i] = s[i]));
                    } else n || (l || (l = []), l.push(f, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === f
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (l = l || []).push(f, s))
                      : "children" === f
                        ? ("string" != typeof s && "number" != typeof s) ||
                          (l = l || []).push(f, "" + s)
                        : "suppressContentEditableWarning" !== f &&
                          "suppressHydrationWarning" !== f &&
                          (c.hasOwnProperty(f)
                            ? (null != s && "onScroll" === f && Nr("scroll", e),
                              l || u === s || (l = []))
                            : "object" == typeof s &&
                                null !== s &&
                                s.$$typeof === I
                              ? s.toString()
                              : (l = l || []).push(f, s));
              }
              n && (l = l || []).push("style", n);
              var f = l;
              (t.updateQueue = f) && (t.flags |= 4);
            }
          }),
          (Yi = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var sl = "function" == typeof WeakMap ? WeakMap : Map;
        function fl(e, t, n) {
          ((n = fa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Xl || ((Xl = !0), (Yl = r));
            }),
            n
          );
        }
        function dl(e, t, n) {
          (n = fa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var o = t.value;
            n.payload = function () {
              return r(o);
            };
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" == typeof a.componentDidCatch &&
              (n.callback = function () {
                "function" != typeof r &&
                  (null === Gl ? (Gl = new Set([this])) : Gl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var pl = "function" == typeof WeakSet ? WeakSet : Set;
        function ml(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                Fc(e, t);
              }
            else t.current = null;
        }
        function gl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Zo(t.type, n),
                  r,
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Qr(t.stateNode.containerInfo));
          }
          throw Error(i(163));
        }
        function hl(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 == (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var o = e;
                  (r = o.next),
                    0 != (4 & (o = o.tag)) &&
                      0 != (1 & o) &&
                      (Mc(n, e), Ic(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Zo(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate,
                      ))),
                void (null !== (t = n.updateQueue) && ga(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                ga(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  Wr(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && Ot(n))))
              );
          }
          throw Error(i(163));
        }
        function vl(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" == typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var o = n.memoizedProps.style;
                (o =
                  null != o && o.hasOwnProperty("display") ? o.display : null),
                  (r.style.display = we("display", o));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function yl(e, t) {
          if (xo && "function" == typeof xo.onCommitFiberUnmount)
            try {
              xo.onCommitFiberUnmount(ko, t);
            } catch (e) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    o = r.destroy;
                  if (((r = r.tag), void 0 !== o))
                    if (0 != (4 & r)) Mc(t, n);
                    else {
                      r = t;
                      try {
                        o();
                      } catch (e) {
                        Fc(r, e);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (ml(t),
                "function" == typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (e) {
                  Fc(t, e);
                }
              break;
            case 5:
              ml(t);
              break;
            case 4:
              kl(e, t);
          }
        }
        function bl(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function _l(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function wl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (_l(t)) break e;
              t = t.return;
            }
            throw Error(i(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(i(161));
          }
          16 & n.flags && (ye(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || _l(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? Ol(e, n, t) : El(e, n, t);
        }
        function Ol(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Br));
          else if (4 !== r && null !== (e = e.child))
            for (Ol(e, t, n), e = e.sibling; null !== e; )
              Ol(e, t, n), (e = e.sibling);
        }
        function El(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (El(e, t, n), e = e.sibling; null !== e; )
              El(e, t, n), (e = e.sibling);
        }
        function kl(e, t) {
          for (var n, r, o = t, a = !1; ; ) {
            if (!a) {
              a = o.return;
              e: for (;;) {
                if (null === a) throw Error(i(160));
                switch (((n = a.stateNode), a.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                a = a.return;
              }
              a = !0;
            }
            if (5 === o.tag || 6 === o.tag) {
              e: for (var l = e, c = o, u = c; ; )
                if ((yl(l, u), null !== u.child && 4 !== u.tag))
                  (u.child.return = u), (u = u.child);
                else {
                  if (u === c) break e;
                  for (; null === u.sibling; ) {
                    if (null === u.return || u.return === c) break e;
                    u = u.return;
                  }
                  (u.sibling.return = u.return), (u = u.sibling);
                }
              r
                ? ((l = n),
                  (c = o.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(c)
                    : l.removeChild(c))
                : n.removeChild(o.stateNode);
            } else if (4 === o.tag) {
              if (null !== o.child) {
                (n = o.stateNode.containerInfo),
                  (r = !0),
                  (o.child.return = o),
                  (o = o.child);
                continue;
              }
            } else if ((yl(e, o), null !== o.child)) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              4 === (o = o.return).tag && (a = !1);
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function xl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 == (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var o = null !== e ? e.memoizedProps : r;
                e = t.type;
                var a = t.updateQueue;
                if (((t.updateQueue = null), null !== a)) {
                  for (
                    n[Jr] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        te(n, r),
                      xe(e, o),
                      t = xe(e, r),
                      o = 0;
                    o < a.length;
                    o += 2
                  ) {
                    var l = a[o],
                      c = a[o + 1];
                    "style" === l
                      ? Oe(n, c)
                      : "dangerouslySetInnerHTML" === l
                        ? ve(n, c)
                        : "children" === l
                          ? ye(n, c)
                          : _(n, l, c, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      ue(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (a = r.value)
                          ? ie(n, !!r.multiple, a, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? ie(n, !!r.multiple, r.defaultValue, !0)
                              : ie(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(i(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), Ot(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && (($l = $o()), vl(t.child, !0)),
                void Sl(t)
              );
            case 19:
              return void Sl(t);
            case 23:
            case 24:
              return void vl(t, null !== t.memoizedState);
          }
          throw Error(i(163));
        }
        function Sl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new pl()),
              t.forEach(function (t) {
                var r = Vc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Pl(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var jl = Math.ceil,
          Cl = w.ReactCurrentDispatcher,
          Nl = w.ReactCurrentOwner,
          Tl = 0,
          Dl = null,
          zl = null,
          Ll = 0,
          Il = 0,
          Ml = uo(0),
          Al = 0,
          Rl = null,
          Fl = 0,
          Bl = 0,
          Vl = 0,
          Ul = 0,
          Wl = null,
          $l = 0,
          Hl = 1 / 0;
        function ql() {
          Hl = $o() + 500;
        }
        var Ql,
          Kl = null,
          Xl = !1,
          Yl = null,
          Gl = null,
          Zl = !1,
          Jl = null,
          ec = 90,
          tc = [],
          nc = [],
          rc = null,
          oc = 0,
          ac = null,
          ic = -1,
          lc = 0,
          cc = 0,
          uc = null,
          sc = !1;
        function fc() {
          return 0 != (48 & Tl) ? $o() : -1 !== ic ? ic : (ic = $o());
        }
        function dc(e) {
          if (0 == (2 & (e = e.mode))) return 1;
          if (0 == (4 & e)) return 99 === Ho() ? 1 : 2;
          if ((0 === lc && (lc = Fl), 0 !== Go.transition)) {
            0 !== cc && (cc = null !== Wl ? Wl.pendingLanes : 0), (e = lc);
            var t = 4186112 & ~cc;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Ho()),
            0 != (4 & Tl) && 98 === e
              ? (e = Bt(12, lc))
              : (e = Bt(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  lc,
                )),
            e
          );
        }
        function pc(e, t, n) {
          if (50 < oc) throw ((oc = 0), (ac = null), Error(i(185)));
          if (null === (e = mc(e, t))) return null;
          Wt(e, t, n), e === Dl && ((Vl |= t), 4 === Al && vc(e, Ll));
          var r = Ho();
          1 === t
            ? 0 != (8 & Tl) && 0 == (48 & Tl)
              ? yc(e)
              : (gc(e, n), 0 === Tl && (ql(), Xo()))
            : (0 == (4 & Tl) ||
                (98 !== r && 99 !== r) ||
                (null === rc ? (rc = new Set([e])) : rc.add(e)),
              gc(e, n)),
            (Wl = e);
        }
        function mc(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function gc(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              o = e.pingedLanes,
              a = e.expirationTimes,
              l = e.pendingLanes;
            0 < l;

          ) {
            var c = 31 - $t(l),
              u = 1 << c,
              s = a[c];
            if (-1 === s) {
              if (0 == (u & r) || 0 != (u & o)) {
                (s = t), At(u);
                var f = Mt;
                a[c] = 10 <= f ? s + 250 : 6 <= f ? s + 5e3 : -1;
              }
            } else s <= t && (e.expiredLanes |= u);
            l &= ~u;
          }
          if (((r = Rt(e, e === Dl ? Ll : 0)), (t = Mt), 0 === r))
            null !== n &&
              (n !== Ro && jo(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== Ro && jo(n);
            }
            15 === t
              ? ((n = yc.bind(null, e)),
                null === Bo ? ((Bo = [n]), (Vo = Po(zo, Yo))) : Bo.push(n),
                (n = Ro))
              : 14 === t
                ? (n = Ko(99, yc.bind(null, e)))
                : ((n = (function (e) {
                    switch (e) {
                      case 15:
                      case 14:
                        return 99;
                      case 13:
                      case 12:
                      case 11:
                      case 10:
                        return 98;
                      case 9:
                      case 8:
                      case 7:
                      case 6:
                      case 4:
                      case 5:
                        return 97;
                      case 3:
                      case 2:
                      case 1:
                        return 95;
                      case 0:
                        return 90;
                      default:
                        throw Error(i(358, e));
                    }
                  })(t)),
                  (n = Ko(n, hc.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function hc(e) {
          if (((ic = -1), (cc = lc = 0), 0 != (48 & Tl))) throw Error(i(327));
          var t = e.callbackNode;
          if (Lc() && e.callbackNode !== t) return null;
          var n = Rt(e, e === Dl ? Ll : 0);
          if (0 === n) return null;
          var r = n,
            o = Tl;
          Tl |= 16;
          var a = xc();
          for ((Dl === e && Ll === r) || (ql(), Ec(e, r)); ; )
            try {
              jc();
              break;
            } catch (t) {
              kc(e, t);
            }
          if (
            (ra(),
            (Cl.current = a),
            (Tl = o),
            null !== zl ? (r = 0) : ((Dl = null), (Ll = 0), (r = Al)),
            0 != (Fl & Vl))
          )
            Ec(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Tl |= 64),
                e.hydrate && ((e.hydrate = !1), Qr(e.containerInfo)),
                0 !== (n = Ft(e)) && (r = Sc(e, n))),
              1 === r)
            )
              throw ((t = Rl), Ec(e, 0), vc(e, n), gc(e, $o()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(i(345));
              case 2:
              case 5:
                Tc(e);
                break;
              case 3:
                if (
                  (vc(e, n), (62914560 & n) === n && 10 < (r = $l + 500 - $o()))
                ) {
                  if (0 !== Rt(e, 0)) break;
                  if (((o = e.suspendedLanes) & n) !== n) {
                    fc(), (e.pingedLanes |= e.suspendedLanes & o);
                    break;
                  }
                  e.timeoutHandle = Hr(Tc.bind(null, e), r);
                  break;
                }
                Tc(e);
                break;
              case 4:
                if ((vc(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, o = -1; 0 < n; ) {
                  var l = 31 - $t(n);
                  (a = 1 << l), (l = r[l]) > o && (o = l), (n &= ~a);
                }
                if (
                  ((n = o),
                  10 <
                    (n =
                      (120 > (n = $o() - n)
                        ? 120
                        : 480 > n
                          ? 480
                          : 1080 > n
                            ? 1080
                            : 1920 > n
                              ? 1920
                              : 3e3 > n
                                ? 3e3
                                : 4320 > n
                                  ? 4320
                                  : 1960 * jl(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Hr(Tc.bind(null, e), n);
                  break;
                }
                Tc(e);
                break;
              default:
                throw Error(i(329));
            }
          }
          return gc(e, $o()), e.callbackNode === t ? hc.bind(null, e) : null;
        }
        function vc(e, t) {
          for (
            t &= ~Ul,
              t &= ~Vl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - $t(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function yc(e) {
          if (0 != (48 & Tl)) throw Error(i(327));
          if ((Lc(), e === Dl && 0 != (e.expiredLanes & Ll))) {
            var t = Ll,
              n = Sc(e, t);
            0 != (Fl & Vl) && (n = Sc(e, (t = Rt(e, t))));
          } else n = Sc(e, (t = Rt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Tl |= 64),
              e.hydrate && ((e.hydrate = !1), Qr(e.containerInfo)),
              0 !== (t = Ft(e)) && (n = Sc(e, t))),
            1 === n)
          )
            throw ((n = Rl), Ec(e, 0), vc(e, t), gc(e, $o()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Tc(e),
            gc(e, $o()),
            null
          );
        }
        function bc(e, t) {
          var n = Tl;
          Tl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Tl = n) && (ql(), Xo());
          }
        }
        function _c(e, t) {
          var n = Tl;
          (Tl &= -2), (Tl |= 8);
          try {
            return e(t);
          } finally {
            0 === (Tl = n) && (ql(), Xo());
          }
        }
        function wc(e, t) {
          fo(Ml, Il), (Il |= t), (Fl |= t);
        }
        function Oc() {
          (Il = Ml.current), so(Ml);
        }
        function Ec(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), qr(n)), null !== zl))
            for (n = zl.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null != (r = r.type.childContextTypes) && bo();
                  break;
                case 3:
                  Ia(), so(go), so(mo), Ya();
                  break;
                case 5:
                  Aa(r);
                  break;
                case 4:
                  Ia();
                  break;
                case 13:
                case 19:
                  so(Ra);
                  break;
                case 10:
                  oa(r);
                  break;
                case 23:
                case 24:
                  Oc();
              }
              n = n.return;
            }
          (Dl = e),
            (zl = Hc(e.current, null)),
            (Ll = Il = Fl = t),
            (Al = 0),
            (Rl = null),
            (Ul = Vl = Bl = 0);
        }
        function kc(e, t) {
          for (;;) {
            var n = zl;
            try {
              if ((ra(), (Ga.current = Di), ri)) {
                for (var r = ei.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ri = !1;
              }
              if (
                ((Ja = 0),
                (ni = ti = ei = null),
                (oi = !1),
                (Nl.current = null),
                null === n || null === n.return)
              ) {
                (Al = 1), (Rl = t), (zl = null);
                break;
              }
              e: {
                var a = e,
                  i = n.return,
                  l = n,
                  c = t;
                if (
                  ((t = Ll),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== c &&
                    "object" == typeof c &&
                    "function" == typeof c.then)
                ) {
                  var u = c;
                  if (0 == (2 & l.mode)) {
                    var s = l.alternate;
                    s
                      ? ((l.updateQueue = s.updateQueue),
                        (l.memoizedState = s.memoizedState),
                        (l.lanes = s.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var f = 0 != (1 & Ra.current),
                    d = i;
                  do {
                    var p;
                    if ((p = 13 === d.tag)) {
                      var m = d.memoizedState;
                      if (null !== m) p = null !== m.dehydrated;
                      else {
                        var g = d.memoizedProps;
                        p =
                          void 0 !== g.fallback &&
                          (!0 !== g.unstable_avoidThisFallback || !f);
                      }
                    }
                    if (p) {
                      var h = d.updateQueue;
                      if (null === h) {
                        var v = new Set();
                        v.add(u), (d.updateQueue = v);
                      } else h.add(u);
                      if (0 == (2 & d.mode)) {
                        if (
                          ((d.flags |= 64),
                          (l.flags |= 16384),
                          (l.flags &= -2981),
                          1 === l.tag)
                        )
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var y = fa(-1, 1);
                            (y.tag = 2), da(l, y);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (c = void 0), (l = t);
                      var b = a.pingCache;
                      if (
                        (null === b
                          ? ((b = a.pingCache = new sl()),
                            (c = new Set()),
                            b.set(u, c))
                          : void 0 === (c = b.get(u)) &&
                            ((c = new Set()), b.set(u, c)),
                        !c.has(l))
                      ) {
                        c.add(l);
                        var _ = Bc.bind(null, a, u, l);
                        u.then(_, _);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  c = Error(
                    (Q(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.",
                  );
                }
                5 !== Al && (Al = 2), (c = ul(c, l)), (d = i);
                do {
                  switch (d.tag) {
                    case 3:
                      (a = c),
                        (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        pa(d, fl(0, a, t));
                      break e;
                    case 1:
                      a = c;
                      var w = d.type,
                        O = d.stateNode;
                      if (
                        0 == (64 & d.flags) &&
                        ("function" == typeof w.getDerivedStateFromError ||
                          (null !== O &&
                            "function" == typeof O.componentDidCatch &&
                            (null === Gl || !Gl.has(O))))
                      ) {
                        (d.flags |= 4096),
                          (t &= -t),
                          (d.lanes |= t),
                          pa(d, dl(d, a, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              Nc(n);
            } catch (e) {
              (t = e), zl === n && null !== n && (zl = n = n.return);
              continue;
            }
            break;
          }
        }
        function xc() {
          var e = Cl.current;
          return (Cl.current = Di), null === e ? Di : e;
        }
        function Sc(e, t) {
          var n = Tl;
          Tl |= 16;
          var r = xc();
          for ((Dl === e && Ll === t) || Ec(e, t); ; )
            try {
              Pc();
              break;
            } catch (t) {
              kc(e, t);
            }
          if ((ra(), (Tl = n), (Cl.current = r), null !== zl))
            throw Error(i(261));
          return (Dl = null), (Ll = 0), Al;
        }
        function Pc() {
          for (; null !== zl; ) Cc(zl);
        }
        function jc() {
          for (; null !== zl && !Co(); ) Cc(zl);
        }
        function Cc(e) {
          var t = Ql(e.alternate, e, Il);
          (e.memoizedProps = e.pendingProps),
            null === t ? Nc(e) : (zl = t),
            (Nl.current = null);
        }
        function Nc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (2048 & t.flags))) {
              if (null !== (n = ll(n, t, Il))) return void (zl = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 != (1073741824 & Il) ||
                0 == (4 & n.mode)
              ) {
                for (var r = 0, o = n.child; null !== o; )
                  (r |= o.lanes | o.childLanes), (o = o.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 == (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = cl(t))) return (n.flags &= 2047), void (zl = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (zl = t);
            zl = t = e;
          } while (null !== t);
          0 === Al && (Al = 5);
        }
        function Tc(e) {
          var t = Ho();
          return Qo(99, Dc.bind(null, e, t)), null;
        }
        function Dc(e, t) {
          do {
            Lc();
          } while (null !== Jl);
          if (0 != (48 & Tl)) throw Error(i(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(i(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            o = r,
            a = e.pendingLanes & ~o;
          (e.pendingLanes = o),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= o),
            (e.mutableReadLanes &= o),
            (e.entangledLanes &= o),
            (o = e.entanglements);
          for (var l = e.eventTimes, c = e.expirationTimes; 0 < a; ) {
            var u = 31 - $t(a),
              s = 1 << u;
            (o[u] = 0), (l[u] = -1), (c[u] = -1), (a &= ~s);
          }
          if (
            (null !== rc && 0 == (24 & r) && rc.has(e) && rc.delete(e),
            e === Dl && ((zl = Dl = null), (Ll = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((o = Tl),
              (Tl |= 32),
              (Nl.current = null),
              (Vr = Xt),
              vr((l = hr())))
            ) {
              if ("selectionStart" in l)
                c = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((c = ((c = l.ownerDocument) && c.defaultView) || window),
                  (s = c.getSelection && c.getSelection()) &&
                    0 !== s.rangeCount)
                ) {
                  (c = s.anchorNode),
                    (a = s.anchorOffset),
                    (u = s.focusNode),
                    (s = s.focusOffset);
                  try {
                    c.nodeType, u.nodeType;
                  } catch (e) {
                    c = null;
                    break e;
                  }
                  var f = 0,
                    d = -1,
                    p = -1,
                    m = 0,
                    g = 0,
                    h = l,
                    v = null;
                  t: for (;;) {
                    for (
                      var y;
                      h !== c || (0 !== a && 3 !== h.nodeType) || (d = f + a),
                        h !== u || (0 !== s && 3 !== h.nodeType) || (p = f + s),
                        3 === h.nodeType && (f += h.nodeValue.length),
                        null !== (y = h.firstChild);

                    )
                      (v = h), (h = y);
                    for (;;) {
                      if (h === l) break t;
                      if (
                        (v === c && ++m === a && (d = f),
                        v === u && ++g === s && (p = f),
                        null !== (y = h.nextSibling))
                      )
                        break;
                      v = (h = v).parentNode;
                    }
                    h = y;
                  }
                  c = -1 === d || -1 === p ? null : { start: d, end: p };
                } else c = null;
              c = c || { start: 0, end: 0 };
            } else c = null;
            (Ur = { focusedElem: l, selectionRange: c }),
              (Xt = !1),
              (uc = null),
              (sc = !1),
              (Kl = r);
            do {
              try {
                zc();
              } catch (e) {
                if (null === Kl) throw Error(i(330));
                Fc(Kl, e), (Kl = Kl.nextEffect);
              }
            } while (null !== Kl);
            (uc = null), (Kl = r);
            do {
              try {
                for (l = e; null !== Kl; ) {
                  var b = Kl.flags;
                  if ((16 & b && ye(Kl.stateNode, ""), 128 & b)) {
                    var _ = Kl.alternate;
                    if (null !== _) {
                      var w = _.ref;
                      null !== w &&
                        ("function" == typeof w ? w(null) : (w.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      wl(Kl), (Kl.flags &= -3);
                      break;
                    case 6:
                      wl(Kl), (Kl.flags &= -3), xl(Kl.alternate, Kl);
                      break;
                    case 1024:
                      Kl.flags &= -1025;
                      break;
                    case 1028:
                      (Kl.flags &= -1025), xl(Kl.alternate, Kl);
                      break;
                    case 4:
                      xl(Kl.alternate, Kl);
                      break;
                    case 8:
                      kl(l, (c = Kl));
                      var O = c.alternate;
                      bl(c), null !== O && bl(O);
                  }
                  Kl = Kl.nextEffect;
                }
              } catch (e) {
                if (null === Kl) throw Error(i(330));
                Fc(Kl, e), (Kl = Kl.nextEffect);
              }
            } while (null !== Kl);
            if (
              ((w = Ur),
              (_ = hr()),
              (b = w.focusedElem),
              (l = w.selectionRange),
              _ !== b &&
                b &&
                b.ownerDocument &&
                gr(b.ownerDocument.documentElement, b))
            ) {
              null !== l &&
                vr(b) &&
                ((_ = l.start),
                void 0 === (w = l.end) && (w = _),
                "selectionStart" in b
                  ? ((b.selectionStart = _),
                    (b.selectionEnd = Math.min(w, b.value.length)))
                  : (w =
                      ((_ = b.ownerDocument || document) && _.defaultView) ||
                      window).getSelection &&
                    ((w = w.getSelection()),
                    (c = b.textContent.length),
                    (O = Math.min(l.start, c)),
                    (l = void 0 === l.end ? O : Math.min(l.end, c)),
                    !w.extend && O > l && ((c = l), (l = O), (O = c)),
                    (c = mr(b, O)),
                    (a = mr(b, l)),
                    c &&
                      a &&
                      (1 !== w.rangeCount ||
                        w.anchorNode !== c.node ||
                        w.anchorOffset !== c.offset ||
                        w.focusNode !== a.node ||
                        w.focusOffset !== a.offset) &&
                      ((_ = _.createRange()).setStart(c.node, c.offset),
                      w.removeAllRanges(),
                      O > l
                        ? (w.addRange(_), w.extend(a.node, a.offset))
                        : (_.setEnd(a.node, a.offset), w.addRange(_))))),
                (_ = []);
              for (w = b; (w = w.parentNode); )
                1 === w.nodeType &&
                  _.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
              for (
                "function" == typeof b.focus && b.focus(), b = 0;
                b < _.length;
                b++
              )
                ((w = _[b]).element.scrollLeft = w.left),
                  (w.element.scrollTop = w.top);
            }
            (Xt = !!Vr), (Ur = Vr = null), (e.current = n), (Kl = r);
            do {
              try {
                for (b = e; null !== Kl; ) {
                  var E = Kl.flags;
                  if ((36 & E && hl(b, Kl.alternate, Kl), 128 & E)) {
                    _ = void 0;
                    var k = Kl.ref;
                    if (null !== k) {
                      var x = Kl.stateNode;
                      Kl.tag,
                        (_ = x),
                        "function" == typeof k ? k(_) : (k.current = _);
                    }
                  }
                  Kl = Kl.nextEffect;
                }
              } catch (e) {
                if (null === Kl) throw Error(i(330));
                Fc(Kl, e), (Kl = Kl.nextEffect);
              }
            } while (null !== Kl);
            (Kl = null), Fo(), (Tl = o);
          } else e.current = n;
          if (Zl) (Zl = !1), (Jl = e), (ec = t);
          else
            for (Kl = r; null !== Kl; )
              (t = Kl.nextEffect),
                (Kl.nextEffect = null),
                8 & Kl.flags &&
                  (((E = Kl).sibling = null), (E.stateNode = null)),
                (Kl = t);
          if (
            (0 === (r = e.pendingLanes) && (Gl = null),
            1 === r ? (e === ac ? oc++ : ((oc = 0), (ac = e))) : (oc = 0),
            (n = n.stateNode),
            xo && "function" == typeof xo.onCommitFiberRoot)
          )
            try {
              xo.onCommitFiberRoot(ko, n, void 0, 64 == (64 & n.current.flags));
            } catch (e) {}
          if ((gc(e, $o()), Xl)) throw ((Xl = !1), (e = Yl), (Yl = null), e);
          return 0 != (8 & Tl) || Xo(), null;
        }
        function zc() {
          for (; null !== Kl; ) {
            var e = Kl.alternate;
            sc ||
              null === uc ||
              (0 != (8 & Kl.flags)
                ? et(Kl, uc) && (sc = !0)
                : 13 === Kl.tag && Pl(e, Kl) && et(Kl, uc) && (sc = !0));
            var t = Kl.flags;
            0 != (256 & t) && gl(e, Kl),
              0 == (512 & t) ||
                Zl ||
                ((Zl = !0),
                Ko(97, function () {
                  return Lc(), null;
                })),
              (Kl = Kl.nextEffect);
          }
        }
        function Lc() {
          if (90 !== ec) {
            var e = 97 < ec ? 97 : ec;
            return (ec = 90), Qo(e, Ac);
          }
          return !1;
        }
        function Ic(e, t) {
          tc.push(t, e),
            Zl ||
              ((Zl = !0),
              Ko(97, function () {
                return Lc(), null;
              }));
        }
        function Mc(e, t) {
          nc.push(t, e),
            Zl ||
              ((Zl = !0),
              Ko(97, function () {
                return Lc(), null;
              }));
        }
        function Ac() {
          if (null === Jl) return !1;
          var e = Jl;
          if (((Jl = null), 0 != (48 & Tl))) throw Error(i(331));
          var t = Tl;
          Tl |= 32;
          var n = nc;
          nc = [];
          for (var r = 0; r < n.length; r += 2) {
            var o = n[r],
              a = n[r + 1],
              l = o.destroy;
            if (((o.destroy = void 0), "function" == typeof l))
              try {
                l();
              } catch (e) {
                if (null === a) throw Error(i(330));
                Fc(a, e);
              }
          }
          for (n = tc, tc = [], r = 0; r < n.length; r += 2) {
            (o = n[r]), (a = n[r + 1]);
            try {
              var c = o.create;
              o.destroy = c();
            } catch (e) {
              if (null === a) throw Error(i(330));
              Fc(a, e);
            }
          }
          for (c = e.current.firstEffect; null !== c; )
            (e = c.nextEffect),
              (c.nextEffect = null),
              8 & c.flags && ((c.sibling = null), (c.stateNode = null)),
              (c = e);
          return (Tl = t), Xo(), !0;
        }
        function Rc(e, t, n) {
          da(e, (t = fl(0, (t = ul(n, t)), 1))),
            (t = fc()),
            null !== (e = mc(e, 1)) && (Wt(e, 1, t), gc(e, t));
        }
        function Fc(e, t) {
          if (3 === e.tag) Rc(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Rc(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" == typeof n.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === Gl || !Gl.has(r)))
                ) {
                  var o = dl(n, (e = ul(t, e)), 1);
                  if ((da(n, o), (o = fc()), null !== (n = mc(n, 1))))
                    Wt(n, 1, o), gc(n, o);
                  else if (
                    "function" == typeof r.componentDidCatch &&
                    (null === Gl || !Gl.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (e) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Bc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = fc()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Dl === e &&
              (Ll & n) === n &&
              (4 === Al ||
              (3 === Al && (62914560 & Ll) === Ll && 500 > $o() - $l)
                ? Ec(e, 0)
                : (Ul |= n)),
            gc(e, t);
        }
        function Vc(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 == (2 & (t = e.mode))
                ? (t = 1)
                : 0 == (4 & t)
                  ? (t = 99 === Ho() ? 1 : 2)
                  : (0 === lc && (lc = Fl),
                    0 === (t = Vt(62914560 & ~lc)) && (t = 4194304))),
            (n = fc()),
            null !== (e = mc(e, t)) && (Wt(e, t, n), gc(e, n));
        }
        function Uc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Wc(e, t, n, r) {
          return new Uc(e, t, n, r);
        }
        function $c(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Hc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Wc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function qc(e, t, n, r, o, a) {
          var l = 2;
          if (((r = e), "function" == typeof e)) $c(e) && (l = 1);
          else if ("string" == typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Qc(n.children, o, a, t);
              case M:
                (l = 8), (o |= 16);
                break;
              case x:
                (l = 8), (o |= 1);
                break;
              case S:
                return (
                  ((e = Wc(12, n, t, 8 | o)).elementType = S),
                  (e.type = S),
                  (e.lanes = a),
                  e
                );
              case N:
                return (
                  ((e = Wc(13, n, t, o)).type = N),
                  (e.elementType = N),
                  (e.lanes = a),
                  e
                );
              case T:
                return (
                  ((e = Wc(19, n, t, o)).elementType = T), (e.lanes = a), e
                );
              case A:
                return Kc(n, o, a, t);
              case R:
                return (
                  ((e = Wc(24, n, t, o)).elementType = R), (e.lanes = a), e
                );
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      l = 10;
                      break e;
                    case j:
                      l = 9;
                      break e;
                    case C:
                      l = 11;
                      break e;
                    case D:
                      l = 14;
                      break e;
                    case z:
                      (l = 16), (r = null);
                      break e;
                    case L:
                      l = 22;
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Wc(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Qc(e, t, n, r) {
          return ((e = Wc(7, e, r, t)).lanes = n), e;
        }
        function Kc(e, t, n, r) {
          return ((e = Wc(23, e, r, t)).elementType = A), (e.lanes = n), e;
        }
        function Xc(e, t, n) {
          return ((e = Wc(6, e, null, t)).lanes = n), e;
        }
        function Yc(e, t, n) {
          return (
            ((t = Wc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Gc(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Ut(0)),
            (this.expirationTimes = Ut(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ut(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Zc(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: E,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Jc(e, t, n, r) {
          var o = t.current,
            a = fc(),
            l = dc(o);
          e: if (n) {
            t: {
              if (Ye((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(i(170));
              var c = n;
              do {
                switch (c.tag) {
                  case 3:
                    c = c.stateNode.context;
                    break t;
                  case 1:
                    if (yo(c.type)) {
                      c = c.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                c = c.return;
              } while (null !== c);
              throw Error(i(171));
            }
            if (1 === n.tag) {
              var u = n.type;
              if (yo(u)) {
                n = wo(n, u, c);
                break e;
              }
            }
            n = c;
          } else n = po;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = fa(a, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            da(o, t),
            pc(o, l, a),
            l
          );
        }
        function eu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function tu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function nu(e, t) {
          tu(e, t), (e = e.alternate) && tu(e, t);
        }
        function ru(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Gc(e, t, null != n && !0 === n.hydrate)),
            (t = Wc(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            ua(t),
            (e[eo] = n.current),
            Dr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var o = (t = r[e])._getVersion;
              (o = o(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, o])
                  : n.mutableSourceEagerHydrationData.push(t, o);
            }
          this._internalRoot = n;
        }
        function ou(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function au(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a._internalRoot;
            if ("function" == typeof o) {
              var l = o;
              o = function () {
                var e = eu(i);
                l.call(e);
              };
            }
            Jc(t, i, e, o);
          } else {
            if (
              ((a = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new ru(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (i = a._internalRoot),
              "function" == typeof o)
            ) {
              var c = o;
              o = function () {
                var e = eu(i);
                c.call(e);
              };
            }
            _c(function () {
              Jc(t, i, e, o);
            });
          }
          return eu(i);
        }
        function iu(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!ou(t)) throw Error(i(200));
          return Zc(e, t, null, n);
        }
        (Ql = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || go.current) Ai = !0;
            else {
              if (0 == (n & r)) {
                switch (((Ai = !1), t.tag)) {
                  case 3:
                    Qi(t), Ka();
                    break;
                  case 5:
                    Ma(t);
                    break;
                  case 1:
                    yo(t.type) && Oo(t);
                    break;
                  case 4:
                    La(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var o = t.type._context;
                    fo(Jo, o._currentValue), (o._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 != (n & t.child.childLanes)
                        ? Zi(e, t, n)
                        : (fo(Ra, 1 & Ra.current),
                          null !== (t = al(e, t, n)) ? t.sibling : null);
                    fo(Ra, 1 & Ra.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                      if (r) return ol(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (o = t.memoizedState) &&
                        ((o.rendering = null),
                        (o.tail = null),
                        (o.lastEffect = null)),
                      fo(Ra, Ra.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Ui(e, t, n);
                }
                return al(e, t, n);
              }
              Ai = 0 != (16384 & e.flags);
            }
          else Ai = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (o = vo(t, mo.current)),
                ia(t, n),
                (o = li(null, t, r, e, o, n)),
                (t.flags |= 1),
                "object" == typeof o &&
                  null !== o &&
                  "function" == typeof o.render &&
                  void 0 === o.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  yo(r))
                ) {
                  var a = !0;
                  Oo(t);
                } else a = !1;
                (t.memoizedState =
                  null !== o.state && void 0 !== o.state ? o.state : null),
                  ua(t);
                var l = r.getDerivedStateFromProps;
                "function" == typeof l && va(t, r, l, e),
                  (o.updater = ya),
                  (t.stateNode = o),
                  (o._reactInternals = t),
                  Oa(t, r, e, n),
                  (t = qi(null, t, r, !0, a, n));
              } else (t.tag = 0), Ri(null, t, o, n), (t = t.child);
              return t;
            case 16:
              o = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (o = (a = o._init)(o._payload)),
                  (t.type = o),
                  (a = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return $c(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === C) return 11;
                        if (e === D) return 14;
                      }
                      return 2;
                    })(o)),
                  (e = Zo(o, e)),
                  a)
                ) {
                  case 0:
                    t = $i(null, t, o, e, n);
                    break e;
                  case 1:
                    t = Hi(null, t, o, e, n);
                    break e;
                  case 11:
                    t = Fi(null, t, o, e, n);
                    break e;
                  case 14:
                    t = Bi(null, t, o, Zo(o.type, e), r, n);
                    break e;
                }
                throw Error(i(306, o, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                $i(e, t, r, (o = t.elementType === r ? o : Zo(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Hi(e, t, r, (o = t.elementType === r ? o : Zo(r, o)), n)
              );
            case 3:
              if ((Qi(t), (r = t.updateQueue), null === e || null === r))
                throw Error(i(282));
              if (
                ((r = t.pendingProps),
                (o = null !== (o = t.memoizedState) ? o.element : null),
                sa(e, t),
                ma(t, r, null, n),
                (r = t.memoizedState.element) === o)
              )
                Ka(), (t = al(e, t, n));
              else {
                if (
                  ((a = (o = t.stateNode).hydrate) &&
                    ((Va = Kr(t.stateNode.containerInfo.firstChild)),
                    (Ba = t),
                    (a = Ua = !0)),
                  a)
                ) {
                  if (null != (e = o.mutableSourceEagerHydrationData))
                    for (o = 0; o < e.length; o += 2)
                      ((a = e[o])._workInProgressVersionPrimary = e[o + 1]),
                        Xa.push(a);
                  for (n = ja(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Ri(e, t, r, n), Ka();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ma(t),
                null === e && Ha(t),
                (r = t.type),
                (o = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (l = o.children),
                $r(r, o)
                  ? (l = null)
                  : null !== a && $r(r, a) && (t.flags |= 16),
                Wi(e, t),
                Ri(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && Ha(t), null;
            case 13:
              return Zi(e, t, n);
            case 4:
              return (
                La(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Pa(t, null, r, n)) : Ri(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Fi(e, t, r, (o = t.elementType === r ? o : Zo(r, o)), n)
              );
            case 7:
              return Ri(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Ri(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (o = t.pendingProps),
                  (l = t.memoizedProps),
                  (a = o.value);
                var c = t.type._context;
                if (
                  (fo(Jo, c._currentValue), (c._currentValue = a), null !== l)
                )
                  if (
                    ((c = l.value),
                    0 ===
                      (a = sr(c, a)
                        ? 0
                        : 0 |
                          ("function" == typeof r._calculateChangedBits
                            ? r._calculateChangedBits(c, a)
                            : 1073741823)))
                  ) {
                    if (l.children === o.children && !go.current) {
                      t = al(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (c = t.child) && (c.return = t);
                      null !== c;

                    ) {
                      var u = c.dependencies;
                      if (null !== u) {
                        l = c.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r && 0 != (s.observedBits & a)) {
                            1 === c.tag &&
                              (((s = fa(-1, n & -n)).tag = 2), da(c, s)),
                              (c.lanes |= n),
                              null !== (s = c.alternate) && (s.lanes |= n),
                              aa(c.return, n),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else
                        l = 10 === c.tag && c.type === t.type ? null : c.child;
                      if (null !== l) l.return = c;
                      else
                        for (l = c; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (c = l.sibling)) {
                            (c.return = l.return), (l = c);
                            break;
                          }
                          l = l.return;
                        }
                      c = l;
                    }
                Ri(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = (a = t.pendingProps).children),
                ia(t, n),
                (r = r((o = la(o, a.unstable_observedBits)))),
                (t.flags |= 1),
                Ri(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Zo((o = t.type), t.pendingProps)),
                Bi(e, t, o, (a = Zo(o.type, a)), r, n)
              );
            case 15:
              return Vi(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Zo(r, o)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                yo(r) ? ((e = !0), Oo(t)) : (e = !1),
                ia(t, n),
                _a(t, r, o),
                Oa(t, r, o, n),
                qi(null, t, r, !0, e, n)
              );
            case 19:
              return ol(e, t, n);
            case 23:
            case 24:
              return Ui(e, t, n);
          }
          throw Error(i(156, t.tag));
        }),
          (ru.prototype.render = function (e) {
            Jc(e, this._internalRoot, null, null);
          }),
          (ru.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            Jc(null, e, null, function () {
              t[eo] = null;
            });
          }),
          (tt = function (e) {
            13 === e.tag && (pc(e, 4, fc()), nu(e, 4));
          }),
          (nt = function (e) {
            13 === e.tag && (pc(e, 67108864, fc()), nu(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = fc(),
                n = dc(e);
              pc(e, n, t), nu(e, n);
            }
          }),
          (ot = function (e, t) {
            return t();
          }),
          (Pe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = ao(r);
                      if (!o) throw Error(i(90));
                      G(r), ne(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ue(e, n);
                break;
              case "select":
                null != (t = n.value) && ie(e, !!n.multiple, t, !1);
            }
          }),
          (ze = bc),
          (Le = function (e, t, n, r, o) {
            var a = Tl;
            Tl |= 4;
            try {
              return Qo(98, e.bind(null, t, n, r, o));
            } finally {
              0 === (Tl = a) && (ql(), Xo());
            }
          }),
          (Ie = function () {
            0 == (49 & Tl) &&
              ((function () {
                if (null !== rc) {
                  var e = rc;
                  (rc = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), gc(e, $o());
                    });
                }
                Xo();
              })(),
              Lc());
          }),
          (Me = function (e, t) {
            var n = Tl;
            Tl |= 2;
            try {
              return e(t);
            } finally {
              0 === (Tl = n) && (ql(), Xo());
            }
          });
        var lu = { Events: [ro, oo, ao, Te, De, Lc, { current: !1 }] },
          cu = {
            findFiberByHostInstance: no,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          uu = {
            bundleType: cu.bundleType,
            version: cu.version,
            rendererPackageName: cu.rendererPackageName,
            rendererConfig: cu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Je(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              cu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!su.isDisabled && su.supportsFiber)
            try {
              (ko = su.inject(uu)), (xo = su);
            } catch (he) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lu),
          (t.createPortal = iu),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(i(188));
              throw Error(i(268, Object.keys(e)));
            }
            return (e = null === (e = Je(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = Tl;
            if (0 != (48 & n)) return e(t);
            Tl |= 1;
            try {
              if (e) return Qo(99, e.bind(null, t));
            } finally {
              (Tl = n), Xo();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!ou(t)) throw Error(i(200));
            return au(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!ou(t)) throw Error(i(200));
            return au(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!ou(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (_c(function () {
                au(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[eo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = bc),
          (t.unstable_createPortal = function (e, t) {
            return iu(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!ou(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return au(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      4151: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {}
        })(),
          (e.exports = n(4005));
      },
      2330: (e) => {
        var t = "undefined" != typeof Element,
          n = "function" == typeof Map,
          r = "function" == typeof Set,
          o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
        function a(e, i) {
          if (e === i) return !0;
          if (e && i && "object" == typeof e && "object" == typeof i) {
            if (e.constructor !== i.constructor) return !1;
            var l, c, u, s;
            if (Array.isArray(e)) {
              if ((l = e.length) != i.length) return !1;
              for (c = l; 0 != c--; ) if (!a(e[c], i[c])) return !1;
              return !0;
            }
            if (n && e instanceof Map && i instanceof Map) {
              if (e.size !== i.size) return !1;
              for (s = e.entries(); !(c = s.next()).done; )
                if (!i.has(c.value[0])) return !1;
              for (s = e.entries(); !(c = s.next()).done; )
                if (!a(c.value[1], i.get(c.value[0]))) return !1;
              return !0;
            }
            if (r && e instanceof Set && i instanceof Set) {
              if (e.size !== i.size) return !1;
              for (s = e.entries(); !(c = s.next()).done; )
                if (!i.has(c.value[0])) return !1;
              return !0;
            }
            if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
              if ((l = e.length) != i.length) return !1;
              for (c = l; 0 != c--; ) if (e[c] !== i[c]) return !1;
              return !0;
            }
            if (e.constructor === RegExp)
              return e.source === i.source && e.flags === i.flags;
            if (e.valueOf !== Object.prototype.valueOf)
              return e.valueOf() === i.valueOf();
            if (e.toString !== Object.prototype.toString)
              return e.toString() === i.toString();
            if ((l = (u = Object.keys(e)).length) !== Object.keys(i).length)
              return !1;
            for (c = l; 0 != c--; )
              if (!Object.prototype.hasOwnProperty.call(i, u[c])) return !1;
            if (t && e instanceof Element) return !1;
            for (c = l; 0 != c--; )
              if (
                (("_owner" !== u[c] && "__v" !== u[c] && "__o" !== u[c]) ||
                  !e.$$typeof) &&
                !a(e[u[c]], i[u[c]])
              )
                return !1;
            return !0;
          }
          return e != e && i != i;
        }
        e.exports = function (e, t) {
          try {
            return a(e, t);
          } catch (e) {
            if ((e.message || "").match(/stack|recursion/i)) return !1;
            throw e;
          }
        };
      },
      3802: (e, t) => {
        "use strict";
        var n = "function" == typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          o = n ? Symbol.for("react.portal") : 60106,
          a = n ? Symbol.for("react.fragment") : 60107,
          i = n ? Symbol.for("react.strict_mode") : 60108,
          l = n ? Symbol.for("react.profiler") : 60114,
          c = n ? Symbol.for("react.provider") : 60109,
          u = n ? Symbol.for("react.context") : 60110,
          s = n ? Symbol.for("react.async_mode") : 60111,
          f = n ? Symbol.for("react.concurrent_mode") : 60111,
          d = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          m = n ? Symbol.for("react.suspense_list") : 60120,
          g = n ? Symbol.for("react.memo") : 60115,
          h = n ? Symbol.for("react.lazy") : 60116,
          v = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          _ = n ? Symbol.for("react.scope") : 60119;
        function w(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case s:
                  case f:
                  case a:
                  case l:
                  case i:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case d:
                      case h:
                      case g:
                      case c:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function O(e) {
          return w(e) === f;
        }
        (t.AsyncMode = s),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = u),
          (t.ContextProvider = c),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = a),
          (t.Lazy = h),
          (t.Memo = g),
          (t.Portal = o),
          (t.Profiler = l),
          (t.StrictMode = i),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return O(e) || w(e) === s;
          }),
          (t.isConcurrentMode = O),
          (t.isContextConsumer = function (e) {
            return w(e) === u;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === c;
          }),
          (t.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return w(e) === d;
          }),
          (t.isFragment = function (e) {
            return w(e) === a;
          }),
          (t.isLazy = function (e) {
            return w(e) === h;
          }),
          (t.isMemo = function (e) {
            return w(e) === g;
          }),
          (t.isPortal = function (e) {
            return w(e) === o;
          }),
          (t.isProfiler = function (e) {
            return w(e) === l;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === i;
          }),
          (t.isSuspense = function (e) {
            return w(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === a ||
              e === f ||
              e === l ||
              e === i ||
              e === p ||
              e === m ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === h ||
                  e.$$typeof === g ||
                  e.$$typeof === c ||
                  e.$$typeof === u ||
                  e.$$typeof === d ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === _ ||
                  e.$$typeof === v))
            );
          }),
          (t.typeOf = w);
      },
      5566: (e, t, n) => {
        "use strict";
        e.exports = n(3802);
      },
      2810: (e, t) => {
        "use strict";
        var n,
          r = Symbol.for("react.element"),
          o = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          c = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.server_context"),
          f = Symbol.for("react.forward_ref"),
          d = Symbol.for("react.suspense"),
          p = Symbol.for("react.suspense_list"),
          m = Symbol.for("react.memo"),
          g = Symbol.for("react.lazy"),
          h = Symbol.for("react.offscreen");
        function v(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case a:
                  case l:
                  case i:
                  case d:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case u:
                      case f:
                      case g:
                      case m:
                      case c:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        (n = Symbol.for("react.module.reference")),
          (t.isFragment = function (e) {
            return v(e) === a;
          }),
          (t.isMemo = function (e) {
            return v(e) === m;
          });
      },
      2037: (e, t, n) => {
        "use strict";
        e.exports = n(2810);
      },
      8618: (e, t, n) => {
        "use strict";
        var r = n(1538),
          o = 60103,
          a = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var i = 60109,
          l = 60110,
          c = 60112;
        t.Suspense = 60113;
        var u = 60115,
          s = 60116;
        if ("function" == typeof Symbol && Symbol.for) {
          var f = Symbol.for;
          (o = f("react.element")),
            (a = f("react.portal")),
            (t.Fragment = f("react.fragment")),
            (t.StrictMode = f("react.strict_mode")),
            (t.Profiler = f("react.profiler")),
            (i = f("react.provider")),
            (l = f("react.context")),
            (c = f("react.forward_ref")),
            (t.Suspense = f("react.suspense")),
            (u = f("react.memo")),
            (s = f("react.lazy"));
        }
        var d = "function" == typeof Symbol && Symbol.iterator;
        function p(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = {};
        function h(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        function v() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        (h.prototype.isReactComponent = {}),
          (h.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (h.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = h.prototype);
        var b = (y.prototype = new v());
        (b.constructor = y), r(b, h.prototype), (b.isPureReactComponent = !0);
        var _ = { current: null },
          w = Object.prototype.hasOwnProperty,
          O = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, n) {
          var r,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              w.call(t, r) && !O.hasOwnProperty(r) && (a[r] = t[r]);
          var c = arguments.length - 2;
          if (1 === c) a.children = n;
          else if (1 < c) {
            for (var u = Array(c), s = 0; s < c; s++) u[s] = arguments[s + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (r in (c = e.defaultProps)) void 0 === a[r] && (a[r] = c[r]);
          return {
            $$typeof: o,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: _.current,
          };
        }
        function k(e) {
          return "object" == typeof e && null !== e && e.$$typeof === o;
        }
        var x = /\/+/g;
        function S(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, n, r, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var c = !1;
          if (null === e) c = !0;
          else
            switch (l) {
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case a:
                    c = !0;
                }
            }
          if (c)
            return (
              (i = i((c = e))),
              (e = "" === r ? "." + S(c, 0) : r),
              Array.isArray(i)
                ? ((n = ""),
                  null != e && (n = e.replace(x, "$&/") + "/"),
                  P(i, t, n, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (k(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: o,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      n +
                        (!i.key || (c && c.key === i.key)
                          ? ""
                          : ("" + i.key).replace(x, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((c = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var u = 0; u < e.length; u++) {
              var s = r + S((l = e[u]), u);
              c += P(l, t, n, s, i);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof s)
          )
            for (e = s.call(e), u = 0; !(l = e.next()).done; )
              c += P((l = l.value), t, n, (s = r + S(l, u++)), i);
          else if ("object" === l)
            throw (
              ((t = "" + e),
              Error(
                p(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t,
                ),
              ))
            );
          return c;
        }
        function j(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function C(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                },
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var N = { current: null };
        function T() {
          var e = N.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var D = {
          ReactCurrentDispatcher: N,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: _,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: j,
          forEach: function (e, t, n) {
            j(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              j(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              j(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!k(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = h),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.cloneElement = function (e, t, n) {
            if (null == e) throw Error(p(267, e));
            var a = r({}, e.props),
              i = e.key,
              l = e.ref,
              c = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (c = _.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                w.call(t, s) &&
                  !O.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = n;
            else if (1 < s) {
              u = Array(s);
              for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
              a.children = u;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: i,
              ref: l,
              props: a,
              _owner: c,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: l,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = k),
          (t.lazy = function (e) {
            return {
              $$typeof: s,
              _payload: { _status: -1, _result: e },
              _init: C,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return T().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return T().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return T().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return T().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return T().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return T().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return T().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return T().useRef(e);
          }),
          (t.useState = function (e) {
            return T().useState(e);
          }),
          (t.version = "17.0.2");
      },
      9231: (e, t, n) => {
        "use strict";
        e.exports = n(8618);
      },
      5726: (e, t) => {
        "use strict";
        var n, r, o, a;
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            c = l.now();
          t.unstable_now = function () {
            return l.now() - c;
          };
        }
        if (
          "undefined" == typeof window ||
          "function" != typeof MessageChannel
        ) {
          var u = null,
            s = null,
            f = function () {
              if (null !== u)
                try {
                  var e = t.unstable_now();
                  u(!0, e), (u = null);
                } catch (e) {
                  throw (setTimeout(f, 0), e);
                }
            };
          (n = function (e) {
            null !== u ? setTimeout(n, 0, e) : ((u = e), setTimeout(f, 0));
          }),
            (r = function (e, t) {
              s = setTimeout(e, t);
            }),
            (o = function () {
              clearTimeout(s);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (a = t.unstable_forceFrameRate = function () {});
        } else {
          var d = window.setTimeout,
            p = window.clearTimeout;
          if ("undefined" != typeof console) {
            window.cancelAnimationFrame;
            window.requestAnimationFrame;
          }
          var m = !1,
            g = null,
            h = -1,
            v = 5,
            y = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= y;
          }),
            (a = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e || (v = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var b = new MessageChannel(),
            _ = b.port2;
          (b.port1.onmessage = function () {
            if (null !== g) {
              var e = t.unstable_now();
              y = e + v;
              try {
                g(!0, e) ? _.postMessage(null) : ((m = !1), (g = null));
              } catch (e) {
                throw (_.postMessage(null), e);
              }
            } else m = !1;
          }),
            (n = function (e) {
              (g = e), m || ((m = !0), _.postMessage(null));
            }),
            (r = function (e, n) {
              h = d(function () {
                e(t.unstable_now());
              }, n);
            }),
            (o = function () {
              p(h), (h = -1);
            });
        }
        function w(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(void 0 !== o && 0 < k(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function O(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function E(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, o = e.length; r < o; ) {
                var a = 2 * (r + 1) - 1,
                  i = e[a],
                  l = a + 1,
                  c = e[l];
                if (void 0 !== i && 0 > k(i, n))
                  void 0 !== c && 0 > k(c, i)
                    ? ((e[r] = c), (e[l] = n), (r = l))
                    : ((e[r] = i), (e[a] = n), (r = a));
                else {
                  if (!(void 0 !== c && 0 > k(c, n))) break e;
                  (e[r] = c), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function k(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var x = [],
          S = [],
          P = 1,
          j = null,
          C = 3,
          N = !1,
          T = !1,
          D = !1;
        function z(e) {
          for (var t = O(S); null !== t; ) {
            if (null === t.callback) E(S);
            else {
              if (!(t.startTime <= e)) break;
              E(S), (t.sortIndex = t.expirationTime), w(x, t);
            }
            t = O(S);
          }
        }
        function L(e) {
          if (((D = !1), z(e), !T))
            if (null !== O(x)) (T = !0), n(I);
            else {
              var t = O(S);
              null !== t && r(L, t.startTime - e);
            }
        }
        function I(e, n) {
          (T = !1), D && ((D = !1), o()), (N = !0);
          var a = C;
          try {
            for (
              z(n), j = O(x);
              null !== j &&
              (!(j.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var i = j.callback;
              if ("function" == typeof i) {
                (j.callback = null), (C = j.priorityLevel);
                var l = i(j.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof l
                    ? (j.callback = l)
                    : j === O(x) && E(x),
                  z(n);
              } else E(x);
              j = O(x);
            }
            if (null !== j) var c = !0;
            else {
              var u = O(S);
              null !== u && r(L, u.startTime - n), (c = !1);
            }
            return c;
          } finally {
            (j = null), (C = a), (N = !1);
          }
        }
        var M = a;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            T || N || ((T = !0), n(I));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return O(x);
          }),
          (t.unstable_next = function (e) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = C;
            }
            var n = C;
            C = t;
            try {
              return e();
            } finally {
              C = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = M),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = C;
            C = e;
            try {
              return t();
            } finally {
              C = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var l = t.unstable_now();
            switch (
              ("object" == typeof i && null !== i
                ? (i = "number" == typeof (i = i.delay) && 0 < i ? l + i : l)
                : (i = l),
              e)
            ) {
              case 1:
                var c = -1;
                break;
              case 2:
                c = 250;
                break;
              case 5:
                c = 1073741823;
                break;
              case 4:
                c = 1e4;
                break;
              default:
                c = 5e3;
            }
            return (
              (e = {
                id: P++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (c = i + c),
                sortIndex: -1,
              }),
              i > l
                ? ((e.sortIndex = i),
                  w(S, e),
                  null === O(x) &&
                    e === O(S) &&
                    (D ? o() : (D = !0), r(L, i - l)))
                : ((e.sortIndex = c), w(x, e), T || N || ((T = !0), n(I))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = C;
            return function () {
              var n = C;
              C = t;
              try {
                return e.apply(this, arguments);
              } finally {
                C = n;
              }
            };
          });
      },
      1851: (e, t, n) => {
        "use strict";
        e.exports = n(5726);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = n(9231),
        t = n(4151);
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t) {
        if (e) {
          if ("string" == typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? r(e, t)
                : void 0
          );
        }
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a = [],
                i = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) &&
                  (a.push(r.value), !t || a.length !== t);
                  i = !0
                );
              } catch (e) {
                (l = !0), (o = e);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (l) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          o(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function l(e) {
        return (
          (l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          l(e)
        );
      }
      function c(e, t, n, r, o, a, i) {
        try {
          var l = e[a](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function u(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(t, n);
            function i(e) {
              c(a, r, o, i, l, "next", e);
            }
            function l(e) {
              c(a, r, o, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      var s = { exports: {} };
      !(function (e) {
        var t = (function (e) {
          var t,
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            a = "function" == typeof Symbol ? Symbol : {},
            i = a.iterator || "@@iterator",
            c = a.asyncIterator || "@@asyncIterator",
            u = a.toStringTag || "@@toStringTag";
          function s(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            s({}, "");
          } catch (e) {
            s = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function f(e, t, n, r) {
            var a = t && t.prototype instanceof v ? t : v,
              i = Object.create(a.prototype),
              l = new N(r || []);
            return o(i, "_invoke", { value: S(e, n, l) }), i;
          }
          function d(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = f;
          var p = "suspendedStart",
            m = "executing",
            g = "completed",
            h = {};
          function v() {}
          function y() {}
          function b() {}
          var _ = {};
          s(_, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            O = w && w(w(T([])));
          O && O !== n && r.call(O, i) && (_ = O);
          var E = (b.prototype = v.prototype = Object.create(_));
          function k(e) {
            ["next", "throw", "return"].forEach(function (t) {
              s(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function x(e, t) {
            function n(o, a, i, c) {
              var u = d(e[o], e, a);
              if ("throw" !== u.type) {
                var s = u.arg,
                  f = s.value;
                return f && "object" === l(f) && r.call(f, "__await")
                  ? t.resolve(f.__await).then(
                      function (e) {
                        n("next", e, i, c);
                      },
                      function (e) {
                        n("throw", e, i, c);
                      },
                    )
                  : t.resolve(f).then(
                      function (e) {
                        (s.value = e), i(s);
                      },
                      function (e) {
                        return n("throw", e, i, c);
                      },
                    );
              }
              c(u.arg);
            }
            var a;
            o(this, "_invoke", {
              value: function (e, r) {
                function o() {
                  return new t(function (t, o) {
                    n(e, r, t, o);
                  });
                }
                return (a = a ? a.then(o, o) : o());
              },
            });
          }
          function S(e, t, n) {
            var r = p;
            return function (o, a) {
              if (r === m) throw new Error("Generator is already running");
              if (r === g) {
                if ("throw" === o) throw a;
                return D();
              }
              for (n.method = o, n.arg = a; ; ) {
                var i = n.delegate;
                if (i) {
                  var l = P(i, n);
                  if (l) {
                    if (l === h) continue;
                    return l;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (r === p) throw ((r = g), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = m;
                var c = d(e, t, n);
                if ("normal" === c.type) {
                  if (((r = n.done ? g : "suspendedYield"), c.arg === h))
                    continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type &&
                  ((r = g), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          }
          function P(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  P(e, n),
                  "throw" === n.method)
                )
                  return h;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method",
                  ));
              }
              return h;
            }
            var o = d(r, e.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), h
              );
            var a = o.arg;
            return a
              ? a.done
                ? ((n[e.resultName] = a.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  h)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                h);
          }
          function j(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function C(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function N(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(j, this),
              this.reset(!0);
          }
          function T(e) {
            if (e) {
              var n = e[i];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  a = function n() {
                    for (; ++o < e.length; )
                      if (r.call(e, o))
                        return (n.value = e[o]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (a.next = a);
              }
            }
            return { next: D };
          }
          function D() {
            return { value: t, done: !0 };
          }
          return (
            (y.prototype = b),
            o(E, "constructor", { value: b, configurable: !0 }),
            o(b, "constructor", { value: y, configurable: !0 }),
            (y.displayName = s(b, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === y || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), s(e, u, "GeneratorFunction")),
                (e.prototype = Object.create(E)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            k(x.prototype),
            s(x.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = x),
            (e.async = function (t, n, r, o, a) {
              void 0 === a && (a = Promise);
              var i = new x(f(t, n, r, o), a);
              return e.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            k(E),
            s(E, u, "Generator"),
            s(E, i, function () {
              return this;
            }),
            s(E, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (e.values = T),
            (N.prototype = {
              constructor: N,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(C),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function o(r, o) {
                  return (
                    (l.type = "throw"),
                    (l.arg = e),
                    (n.next = r),
                    o && ((n.method = "next"), (n.arg = t)),
                    !!o
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var i = this.tryEntries[a],
                    l = i.completion;
                  if ("root" === i.tryLoc) return o("end");
                  if (i.tryLoc <= this.prev) {
                    var c = r.call(i, "catchLoc"),
                      u = r.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally",
                        );
                      if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n];
                  if (
                    o.tryLoc <= this.prev &&
                    r.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var a = o;
                    break;
                  }
                }
                a &&
                  ("break" === e || "continue" === e) &&
                  a.tryLoc <= t &&
                  t <= a.finallyLoc &&
                  (a = null);
                var i = a ? a.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  a
                    ? ((this.method = "next"), (this.next = a.finallyLoc), h)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                  h
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), C(n), h;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      C(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, r) {
                return (
                  (this.delegate = {
                    iterator: T(e),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  h
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (e) {
          "object" ===
          ("undefined" == typeof globalThis ? "undefined" : l(globalThis))
            ? (globalThis.regeneratorRuntime = t)
            : Function("r", "regeneratorRuntime = r")(t);
        }
      })(s);
      var f = s.exports,
        d = n(5443),
        p = n.n(d),
        m = function () {},
        g = "32px",
        h = {
          center: {
            left: "50%",
            top: "50%",
            transform: "translateX(-50%) translateY(-50%)",
          },
          left: { left: g, top: "50%", transform: "translateY(-50%)" },
          bottom: { bottom: g, left: "50%", transform: "translateX(-50%)" },
          right: { right: g, top: "50%", transform: "translateY(-50%)" },
          top: { top: g, left: "50%", transform: "translateX(-50%)" },
          "top-left": { left: g, top: g },
          "top-right": { right: g, top: g },
          "bottom-left": { left: g, bottom: g },
          "bottom-right": { right: g, bottom: g },
        };
      function v(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function y(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
          ? window
          : void 0 !== n.g
            ? n.g
            : "undefined" != typeof self && self;
      var _,
        w = { exports: {} };
      (_ = w),
        (function () {
          var e = {}.hasOwnProperty;
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
              var o = arguments[r];
              if (o) {
                var a = typeof o;
                if ("string" === a || "number" === a) n.push(o);
                else if (Array.isArray(o)) {
                  if (o.length) {
                    var i = t.apply(null, o);
                    i && n.push(i);
                  }
                } else if ("object" === a)
                  if (o.toString === Object.prototype.toString)
                    for (var l in o) e.call(o, l) && o[l] && n.push(l);
                  else n.push(o.toString());
              }
            }
            return n.join(" ");
          }
          _.exports
            ? ((t.default = t), (_.exports = t))
            : (window.classNames = t);
        })();
      var O = w.exports,
        E = (0, e.createContext)({ classPrefix: "t", locale: "zh-CN" });
      function k() {
        var t = (0, e.useContext)(E).classPrefix;
        return (0, e.useMemo)(
          function () {
            return {
              SIZE: {
                default: "",
                xs: "".concat(t, "-size-xs"),
                small: "".concat(t, "-size-s"),
                medium: "".concat(t, "-size-m"),
                large: "".concat(t, "-size-l"),
                xl: "".concat(t, "-size-xl"),
                block: "".concat(t, "-size-full-width"),
              },
              STATUS: {
                loading: "".concat(t, "-is-loading"),
                disabled: "".concat(t, "-is-disabled"),
                focused: "".concat(t, "-is-focused"),
                success: "".concat(t, "-is-success"),
                error: "".concat(t, "-is-error"),
                warning: "".concat(t, "-is-warning"),
                selected: "".concat(t, "-is-selected"),
                active: "".concat(t, "-is-active"),
                checked: "".concat(t, "-is-checked"),
                current: "".concat(t, "-is-current"),
                hidden: "".concat(t, "-is-hidden"),
                visible: "".concat(t, "-is-visible"),
                expanded: "".concat(t, "-is-expanded"),
                indeterminate: "".concat(t, "-is-indeterminate"),
              },
            };
          },
          [t],
        );
      }
      var x = ["icon", "id", "className", "size", "style"];
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : S(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function j(t, n, r) {
        return (0, e.createElement)(
          t.tag,
          P(P({ key: n }, t.attrs), r),
          (t.children || []).map(function (e, r) {
            return j(e, "".concat(n, "-").concat(t.tag, "-").concat(r));
          }),
        );
      }
      var C = (0, e.forwardRef)(function (e, t) {
        var n = e.icon,
          r = e.id,
          o = e.className,
          a = e.size,
          i = e.style,
          l = y(e, x),
          c = (function (e) {
            var t = k().SIZE;
            return void 0 === e
              ? {}
              : e in t
                ? { className: t[e], style: {} }
                : { className: "", style: { fontSize: e } };
          })(a),
          u = c.className,
          s = c.style,
          f = O("t-icon", "t-icon-".concat(r), o, u);
        return j(
          n,
          "".concat(r),
          P({ ref: t, className: f, style: P(P({}, i), s) }, l),
        );
      });
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : N(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var D = {
          tag: "svg",
          attrs: {
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
          },
          children: [
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M8 8.92L11.08 12l.92-.92L8.92 8 12 4.92 11.08 4 8 7.08 4.92 4 4 4.92 7.08 8 4 11.08l.92.92L8 8.92z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        z = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            C,
            T(T({}, t), {}, { id: "close", ref: n, icon: D }),
          );
        });
      z.displayName = "CloseIcon";
      var L =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
            ? window
            : void 0 !== n.g
              ? n.g
              : "undefined" != typeof self
                ? self
                : {};
      var I = "object" == l(L) && L && L.Object === Object && L,
        M = I,
        A =
          "object" == ("undefined" == typeof self ? "undefined" : l(self)) &&
          self &&
          self.Object === Object &&
          self,
        R = M || A || Function("return this")(),
        F = R.Symbol,
        B = F,
        V = Object.prototype,
        U = V.hasOwnProperty,
        W = V.toString,
        $ = B ? B.toStringTag : void 0;
      var H = function (e) {
          var t = U.call(e, $),
            n = e[$];
          try {
            e[$] = void 0;
            var r = !0;
          } catch (e) {}
          var o = W.call(e);
          return r && (t ? (e[$] = n) : delete e[$]), o;
        },
        q = Object.prototype.toString;
      var Q = H,
        K = function (e) {
          return q.call(e);
        },
        X = F ? F.toStringTag : void 0;
      var Y = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : X && X in Object(e)
            ? Q(e)
            : K(e);
      };
      var G = function (e) {
          var t = l(e);
          return null != e && ("object" == t || "function" == t);
        },
        Z = Y,
        J = G;
      var ee,
        te = function (e) {
          if (!J(e)) return !1;
          var t = Z(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        },
        ne = R["__core-js_shared__"],
        re = (ee = /[^.]+$/.exec((ne && ne.keys && ne.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + ee
          : "";
      var oe = function (e) {
          return !!re && re in e;
        },
        ae = Function.prototype.toString;
      var ie = te,
        le = oe,
        ce = G,
        ue = function (e) {
          if (null != e) {
            try {
              return ae.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        },
        se = /^\[object .+?Constructor\]$/,
        fe = Function.prototype,
        de = Object.prototype,
        pe = fe.toString,
        me = de.hasOwnProperty,
        ge = RegExp(
          "^" +
            pe
              .call(me)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      var he = function (e) {
          return !(!ce(e) || le(e)) && (ie(e) ? ge : se).test(ue(e));
        },
        ve = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      var ye = function (e, t) {
          var n = ve(e, t);
          return he(n) ? n : void 0;
        },
        be = ye(R, "Map");
      var _e = function (e, t) {
        return e === t || (e != e && t != t);
      };
      var we = function () {
          (this.__data__ = []), (this.size = 0);
        },
        Oe = _e;
      var Ee = function (e, t) {
          for (var n = e.length; n--; ) if (Oe(e[n][0], t)) return n;
          return -1;
        },
        ke = Ee,
        xe = Array.prototype.splice;
      var Se = Ee;
      var Pe = Ee;
      var je = Ee;
      var Ce = we,
        Ne = function (e) {
          var t = this.__data__,
            n = ke(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : xe.call(t, n, 1), --this.size, !0)
          );
        },
        Te = function (e) {
          var t = this.__data__,
            n = Se(t, e);
          return n < 0 ? void 0 : t[n][1];
        },
        De = function (e) {
          return Pe(this.__data__, e) > -1;
        },
        ze = function (e, t) {
          var n = this.__data__,
            r = je(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
        };
      function Le(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (Le.prototype.clear = Ce),
        (Le.prototype.delete = Ne),
        (Le.prototype.get = Te),
        (Le.prototype.has = De),
        (Le.prototype.set = ze);
      var Ie = Le,
        Me = ye(Object, "create"),
        Ae = Me;
      var Re = function () {
        (this.__data__ = Ae ? Ae(null) : {}), (this.size = 0);
      };
      var Fe = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        },
        Be = Me,
        Ve = Object.prototype.hasOwnProperty;
      var Ue = function (e) {
          var t = this.__data__;
          if (Be) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return Ve.call(t, e) ? t[e] : void 0;
        },
        We = Me,
        $e = Object.prototype.hasOwnProperty;
      var He = Me;
      var qe = Re,
        Qe = Fe,
        Ke = Ue,
        Xe = function (e) {
          var t = this.__data__;
          return We ? void 0 !== t[e] : $e.call(t, e);
        },
        Ye = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = He && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      function Ge(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (Ge.prototype.clear = qe),
        (Ge.prototype.delete = Qe),
        (Ge.prototype.get = Ke),
        (Ge.prototype.has = Xe),
        (Ge.prototype.set = Ye);
      var Ze = Ge,
        Je = Ie,
        et = be;
      var tt = function (e) {
        var t = l(e);
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      var nt = function (e, t) {
          var n = e.__data__;
          return tt(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        },
        rt = nt;
      var ot = nt;
      var at = nt;
      var it = nt;
      var lt = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new Ze(),
              map: new (et || Je)(),
              string: new Ze(),
            });
        },
        ct = function (e) {
          var t = rt(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        },
        ut = function (e) {
          return ot(this, e).get(e);
        },
        st = function (e) {
          return at(this, e).has(e);
        },
        ft = function (e, t) {
          var n = it(this, e),
            r = n.size;
          return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
        };
      function dt(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (dt.prototype.clear = lt),
        (dt.prototype.delete = ct),
        (dt.prototype.get = ut),
        (dt.prototype.has = st),
        (dt.prototype.set = ft);
      var pt = dt;
      var mt = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
      var gt = function (e) {
        return null != e && "object" == l(e);
      };
      var ht = function (e) {
        return function (t) {
          return e(t);
        };
      };
      var vt = function (e, t) {
          return function (n) {
            return e(t(n));
          };
        },
        yt = Object.prototype;
      var bt = function (e) {
          var t = e && e.constructor;
          return e === (("function" == typeof t && t.prototype) || yt);
        },
        _t = { exports: {} };
      var wt = function () {
        return !1;
      };
      !(function (e, t) {
        var n = R,
          r = wt,
          o = t && !t.nodeType && t,
          a = o && e && !e.nodeType && e,
          i = a && a.exports === o ? n.Buffer : void 0,
          l = (i ? i.isBuffer : void 0) || r;
        e.exports = l;
      })(_t, _t.exports);
      var Ot = Y,
        Et = mt,
        kt = gt,
        xt = {};
      (xt["[object Float32Array]"] =
        xt["[object Float64Array]"] =
        xt["[object Int8Array]"] =
        xt["[object Int16Array]"] =
        xt["[object Int32Array]"] =
        xt["[object Uint8Array]"] =
        xt["[object Uint8ClampedArray]"] =
        xt["[object Uint16Array]"] =
        xt["[object Uint32Array]"] =
          !0),
        (xt["[object Arguments]"] =
          xt["[object Array]"] =
          xt["[object ArrayBuffer]"] =
          xt["[object Boolean]"] =
          xt["[object DataView]"] =
          xt["[object Date]"] =
          xt["[object Error]"] =
          xt["[object Function]"] =
          xt["[object Map]"] =
          xt["[object Number]"] =
          xt["[object Object]"] =
          xt["[object RegExp]"] =
          xt["[object Set]"] =
          xt["[object String]"] =
          xt["[object WeakMap]"] =
            !1);
      var St = function (e) {
          return kt(e) && Et(e.length) && !!xt[Ot(e)];
        },
        Pt = { exports: {} };
      !(function (e, t) {
        var n = I,
          r = t && !t.nodeType && t,
          o = r && e && !e.nodeType && e,
          a = o && o.exports === r && n.process,
          i = (function () {
            try {
              var e = o && o.require && o.require("util").types;
              return e || (a && a.binding && a.binding("util"));
            } catch (e) {}
          })();
        e.exports = i;
      })(Pt, Pt.exports);
      var jt = St,
        Ct = ht,
        Nt = Pt.exports,
        Tt = Nt && Nt.isTypedArray,
        Dt = Tt ? Ct(Tt) : jt,
        zt = ye,
        Lt = (function () {
          try {
            var e = zt(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })(),
        It = Lt;
      var Mt = function (e, t, n) {
          "__proto__" == t && It
            ? It(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0,
              })
            : (e[t] = n);
        },
        At = Mt,
        Rt = _e,
        Ft = Object.prototype.hasOwnProperty;
      var Bt = function (e, t, n) {
          var r = e[t];
          (Ft.call(e, t) && Rt(r, n) && (void 0 !== n || t in e)) ||
            At(e, t, n);
        },
        Vt = Y,
        Ut = gt;
      var Wt = function (e) {
          return Ut(e) && "[object Arguments]" == Vt(e);
        },
        $t = gt,
        Ht = Object.prototype,
        qt = Ht.hasOwnProperty,
        Qt = Ht.propertyIsEnumerable,
        Kt = Wt(
          (function () {
            return arguments;
          })(),
        )
          ? Wt
          : function (e) {
              return $t(e) && qt.call(e, "callee") && !Qt.call(e, "callee");
            },
        Xt = Array.isArray,
        Yt = /^(?:0|[1-9]\d*)$/;
      var Gt = function (e, t) {
          var n = l(e);
          return (
            !!(t = null == t ? 9007199254740991 : t) &&
            ("number" == n || ("symbol" != n && Yt.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        },
        Zt = te,
        Jt = mt;
      var en = function (e) {
          return null != e && Jt(e.length) && !Zt(e);
        },
        tn = Ie;
      var nn = Ie,
        rn = be,
        on = pt;
      var an = Ie,
        ln = function () {
          (this.__data__ = new tn()), (this.size = 0);
        },
        cn = function (e) {
          var t = this.__data__,
            n = t.delete(e);
          return (this.size = t.size), n;
        },
        un = function (e) {
          return this.__data__.get(e);
        },
        sn = function (e) {
          return this.__data__.has(e);
        },
        fn = function (e, t) {
          var n = this.__data__;
          if (n instanceof nn) {
            var r = n.__data__;
            if (!rn || r.length < 199)
              return r.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new on(r);
          }
          return n.set(e, t), (this.size = n.size), this;
        };
      function dn(e) {
        var t = (this.__data__ = new an(e));
        this.size = t.size;
      }
      (dn.prototype.clear = ln),
        (dn.prototype.delete = cn),
        (dn.prototype.get = un),
        (dn.prototype.has = sn),
        (dn.prototype.set = fn);
      var pn = dn,
        mn = { exports: {} };
      !(function (e, t) {
        var n = R,
          r = t && !t.nodeType && t,
          o = r && e && !e.nodeType && e,
          a = o && o.exports === r ? n.Buffer : void 0,
          i = a ? a.allocUnsafe : void 0;
        e.exports = function (e, t) {
          if (t) return e.slice();
          var n = e.length,
            r = i ? i(n) : new e.constructor(n);
          return e.copy(r), r;
        };
      })(mn, mn.exports);
      var gn = R.Uint8Array;
      var hn = function (e) {
        var t = new e.constructor(e.byteLength);
        return new gn(t).set(new gn(e)), t;
      };
      var vn = function (e, t) {
        var n = t ? hn(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      };
      var yn = function (e, t) {
          var n = -1,
            r = e.length;
          for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
          return t;
        },
        bn = G,
        _n = Object.create,
        wn = (function () {
          function e() {}
          return function (t) {
            if (!bn(t)) return {};
            if (_n) return _n(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = void 0), n;
          };
        })(),
        On = vt(Object.getPrototypeOf, Object),
        En = wn,
        kn = On,
        xn = bt;
      var Sn = function (e) {
          return "function" != typeof e.constructor || xn(e) ? {} : En(kn(e));
        },
        Pn = Bt,
        jn = Mt;
      var Cn = function (e, t, n, r) {
        var o = !n;
        n || (n = {});
        for (var a = -1, i = t.length; ++a < i; ) {
          var l = t[a],
            c = r ? r(n[l], e[l], l, n, e) : void 0;
          void 0 === c && (c = e[l]), o ? jn(n, l, c) : Pn(n, l, c);
        }
        return n;
      };
      var Nn = function (e, t) {
          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
          return r;
        },
        Tn = Kt,
        Dn = Xt,
        zn = _t.exports,
        Ln = Gt,
        In = Dt,
        Mn = Object.prototype.hasOwnProperty;
      var An = function (e, t) {
        var n = Dn(e),
          r = !n && Tn(e),
          o = !n && !r && zn(e),
          a = !n && !r && !o && In(e),
          i = n || r || o || a,
          l = i ? Nn(e.length, String) : [],
          c = l.length;
        for (var u in e)
          (!t && !Mn.call(e, u)) ||
            (i &&
              ("length" == u ||
                (o && ("offset" == u || "parent" == u)) ||
                (a &&
                  ("buffer" == u || "byteLength" == u || "byteOffset" == u)) ||
                Ln(u, c))) ||
            l.push(u);
        return l;
      };
      var Rn = G,
        Fn = bt,
        Bn = function (e) {
          var t = [];
          if (null != e) for (var n in Object(e)) t.push(n);
          return t;
        },
        Vn = Object.prototype.hasOwnProperty;
      var Un = An,
        Wn = function (e) {
          if (!Rn(e)) return Bn(e);
          var t = Fn(e),
            n = [];
          for (var r in e)
            ("constructor" != r || (!t && Vn.call(e, r))) && n.push(r);
          return n;
        },
        $n = en;
      var Hn = function (e) {
        return $n(e) ? Un(e, !0) : Wn(e);
      };
      var qn = function (e) {
        return e;
      };
      var Qn = function (e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, n[0]);
            case 2:
              return e.call(t, n[0], n[1]);
            case 3:
              return e.call(t, n[0], n[1], n[2]);
          }
          return e.apply(t, n);
        },
        Kn = Math.max;
      var Xn = function (e, t, n) {
        return (
          (t = Kn(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var r = arguments, o = -1, a = Kn(r.length - t, 0), i = Array(a);
              ++o < a;

            )
              i[o] = r[t + o];
            o = -1;
            for (var l = Array(t + 1); ++o < t; ) l[o] = r[o];
            return (l[t] = n(i)), Qn(e, this, l);
          }
        );
      };
      var Yn = function (e) {
          return function () {
            return e;
          };
        },
        Gn = Lt,
        Zn = Gn
          ? function (e, t) {
              return Gn(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Yn(t),
                writable: !0,
              });
            }
          : qn,
        Jn = Date.now;
      var er = (function (e) {
          var t = 0,
            n = 0;
          return function () {
            var r = Jn(),
              o = 16 - (r - n);
            if (((n = r), o > 0)) {
              if (++t >= 800) return arguments[0];
            } else t = 0;
            return e.apply(void 0, arguments);
          };
        })(Zn),
        tr = en,
        nr = gt;
      var rr = function (e) {
          return nr(e) && tr(e);
        },
        or = qn,
        ar = Xn,
        ir = er;
      var lr = function (e, t) {
          return ir(ar(e, t, or), e + "");
        },
        cr = Y,
        ur = On,
        sr = gt,
        fr = Function.prototype,
        dr = Object.prototype,
        pr = fr.toString,
        mr = dr.hasOwnProperty,
        gr = pr.call(Object);
      var hr = function (e) {
          if (!sr(e) || "[object Object]" != cr(e)) return !1;
          var t = ur(e);
          if (null === t) return !0;
          var n = mr.call(t, "constructor") && t.constructor;
          return "function" == typeof n && n instanceof n && pr.call(n) == gr;
        },
        vr = _e,
        yr = en,
        br = Gt,
        _r = G;
      var wr = function (e, t, n) {
          if (!_r(n)) return !1;
          var r = l(t);
          return (
            !!("number" == r
              ? yr(n) && br(t, n.length)
              : "string" == r && t in n) && vr(n[t], e)
          );
        },
        Or = Mt,
        Er = _e;
      var kr = function (e, t, n) {
        ((void 0 !== n && !Er(e[t], n)) || (void 0 === n && !(t in e))) &&
          Or(e, t, n);
      };
      var xr = (function (e) {
        return function (t, n, r) {
          for (var o = -1, a = Object(t), i = r(t), l = i.length; l--; ) {
            var c = i[e ? l : ++o];
            if (!1 === n(a[c], c, a)) break;
          }
          return t;
        };
      })();
      var Sr = function (e, t) {
          if (
            ("constructor" !== t || "function" != typeof e[t]) &&
            "__proto__" != t
          )
            return e[t];
        },
        Pr = Cn,
        jr = Hn;
      var Cr = kr,
        Nr = mn.exports,
        Tr = vn,
        Dr = yn,
        zr = Sn,
        Lr = Kt,
        Ir = Xt,
        Mr = rr,
        Ar = _t.exports,
        Rr = te,
        Fr = G,
        Br = hr,
        Vr = Dt,
        Ur = Sr,
        Wr = function (e) {
          return Pr(e, jr(e));
        };
      var $r = pn,
        Hr = kr,
        qr = xr,
        Qr = function (e, t, n, r, o, a, i) {
          var l = Ur(e, n),
            c = Ur(t, n),
            u = i.get(c);
          if (u) Cr(e, n, u);
          else {
            var s = a ? a(l, c, n + "", e, t, i) : void 0,
              f = void 0 === s;
            if (f) {
              var d = Ir(c),
                p = !d && Ar(c),
                m = !d && !p && Vr(c);
              (s = c),
                d || p || m
                  ? Ir(l)
                    ? (s = l)
                    : Mr(l)
                      ? (s = Dr(l))
                      : p
                        ? ((f = !1), (s = Nr(c, !0)))
                        : m
                          ? ((f = !1), (s = Tr(c, !0)))
                          : (s = [])
                  : Br(c) || Lr(c)
                    ? ((s = l),
                      Lr(l) ? (s = Wr(l)) : (Fr(l) && !Rr(l)) || (s = zr(c)))
                    : (f = !1);
            }
            f && (i.set(c, s), o(s, c, r, a, i), i.delete(c)), Cr(e, n, s);
          }
        },
        Kr = G,
        Xr = Hn,
        Yr = Sr;
      var Gr = function e(t, n, r, o, a) {
          t !== n &&
            qr(
              n,
              function (i, l) {
                if ((a || (a = new $r()), Kr(i))) Qr(t, n, l, r, e, o, a);
                else {
                  var c = o ? o(Yr(t, l), i, l + "", t, n, a) : void 0;
                  void 0 === c && (c = i), Hr(t, l, c);
                }
              },
              Xr,
            );
        },
        Zr = lr,
        Jr = wr;
      var eo = Gr,
        to = (function (e) {
          return Zr(function (t, n) {
            var r = -1,
              o = n.length,
              a = o > 1 ? n[o - 1] : void 0,
              i = o > 2 ? n[2] : void 0;
            for (
              a = e.length > 3 && "function" == typeof a ? (o--, a) : void 0,
                i && Jr(n[0], n[1], i) && ((a = o < 3 ? void 0 : a), (o = 1)),
                t = Object(t);
              ++r < o;

            ) {
              var l = n[r];
              l && e(t, l, r, a);
            }
            return t;
          });
        })(function (e, t, n) {
          eo(e, t, n);
        });
      function no(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var ro = (function (e) {
          return (
            (e.ripple = "ripple"), (e.expand = "expand"), (e.fade = "fade"), e
          );
        })(ro || {}),
        oo = {
          globalConfig: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? no(Object(n), !0).forEach(function (t) {
                    i(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : no(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t),
                      );
                    });
            }
            return e;
          })(
            {
              animation: { include: ["ripple", "expand", "fade"], exclude: [] },
              classPrefix: "t",
            },
            to(
              {
                pagination: {
                  itemsPerPage: "{size} 条/页",
                  jumpTo: "跳至",
                  page: "页",
                  total: "共 {total} 项数据",
                },
                cascader: {
                  empty: "暂无数据",
                  loadingText: "加载中",
                  placeholder: "请选择",
                },
                calendar: {
                  yearSelection: "{year} 年",
                  monthSelection: "{month} 月",
                  yearRadio: "年",
                  monthRadio: "月",
                  hideWeekend: "隐藏周末",
                  showWeekend: "显示周末",
                  today: "今天",
                  thisMonth: "本月",
                  week: "一,二,三,四,五,六,日",
                  cellMonth:
                    "1 月,2 月,3 月,4 月,5 月,6 月,7 月,8 月,9 月,10 月,11 月,12 月",
                },
                transfer: {
                  title: "{checked} / {total} 项",
                  empty: "暂无数据",
                  placeholder: "请输入关键词搜索",
                },
                timePicker: {
                  now: "此刻",
                  confirm: "确定",
                  anteMeridiem: "上午",
                  postMeridiem: "下午",
                  placeholder: "选择时间",
                },
                dialog: { confirm: "确认", cancel: "取消" },
                drawer: { confirm: "确认", cancel: "取消" },
                popconfirm: {
                  confirm: { content: "确定" },
                  cancel: { content: "取消" },
                },
                table: {
                  empty: "暂无数据",
                  loadingText: "正在加载中，请稍后",
                  loadingMoreText: "点击加载更多",
                  filterInputPlaceholder: "请输入内容（无默认值）",
                  sortAscendingOperationText: "点击升序",
                  sortCancelOperationText: "点击取消排序",
                  sortDescendingOperationText: "点击降序",
                  clearFilterResultButtonText: "清空筛选",
                  columnConfigButtonText: "列配置",
                  columnConfigTitleText: "表格列配置",
                  columnConfigDescriptionText: "请选择需要在表格中显示的数据列",
                  confirmText: "确认",
                  cancelText: "取消",
                  resetText: "重置",
                  selectAllText: "全选",
                  searchResultText: "搜索“{result}”，找到 {count} 条结果",
                },
                select: {
                  empty: "暂无数据",
                  loadingText: "加载中",
                  placeholder: "请选择",
                },
                tree: { empty: "暂无数据" },
                treeSelect: {
                  empty: "暂无数据",
                  loadingText: "加载中",
                  placeholder: "请选择",
                },
                datePicker: {
                  placeholder: {
                    date: "请选择日期",
                    month: "请选择月份",
                    year: "请选择年份",
                  },
                  weekdays: ["一", "二", "三", "四", "五", "六", "日"],
                  months: [
                    "1 月",
                    "2 月",
                    "3 月",
                    "4 月",
                    "5 月",
                    "6 月",
                    "7 月",
                    "8 月",
                    "9 月",
                    "10 月",
                    "11 月",
                    "12 月",
                  ],
                  quarters: ["一季度", "二季度", "三季度", "四季度"],
                  rangeSeparator: " - ",
                  direction: "ltr",
                  format: "YYYY-MM-DD",
                  dayAriaLabel: "日",
                  weekAbbreviation: "周",
                  yearAriaLabel: "年",
                  monthAriaLabel: "月",
                  confirm: "确定",
                  selectTime: "选择时间",
                  selectDate: "选择日期",
                  nextYear: "下一年",
                  preYear: "上一年",
                  nextMonth: "下个月",
                  preMonth: "上个月",
                  preDecade: "上个十年",
                  nextDecade: "下个十年",
                  now: "当前",
                },
                upload: {
                  sizeLimitMessage: "文件大小不能超过 {sizeLimit}",
                  cancelUploadText: "取消上传",
                  triggerUploadText: {
                    fileInput: "选择文件",
                    image: "点击上传图片",
                    normal: "点击上传",
                    reupload: "重新选择",
                    continueUpload: "继续选择",
                    delete: "删除",
                    uploading: "上传中",
                  },
                  dragger: {
                    dragDropText: "释放鼠标",
                    draggingText: "拖拽到此区域",
                    clickAndDragText: "点击上方“选择文件”或将文件拖拽到此区域",
                  },
                  file: {
                    fileNameText: "文件名",
                    fileSizeText: "文件大小",
                    fileStatusText: "状态",
                    fileOperationText: "操作",
                    fileOperationDateText: "上传日期",
                  },
                  progress: {
                    uploadingText: "上传中",
                    waitingText: "待上传",
                    failText: "上传失败",
                    successText: "上传成功",
                  },
                },
                form: {
                  errorMessage: {
                    date: "请输入正确的${name}",
                    url: "请输入正确的${name}",
                    required: "${name}必填",
                    max: "${name}字符长度不能超过 ${validate} 个字符，一个中文等于两个字符",
                    min: "${name}字符长度不能少于 ${validate} 个字符，一个中文等于两个字符",
                    len: "${name}字符长度必须是 ${validate}",
                    enum: "${name}只能是${validate}等",
                    idcard: "请输入正确的${name}",
                    telnumber: "请输入正确的${name}",
                    pattern: "请输入正确的${name}",
                    validator: "${name}不符合要求",
                    boolean: "${name}数据类型必须是布尔类型",
                    number: "${name}必须是数字",
                  },
                },
                input: { placeholder: "请输入" },
                list: {
                  loadingText: "正在加载中，请稍等",
                  loadingMoreText: "点击加载更多",
                },
                alert: { expandText: "展开更多", collapseText: "收起" },
                anchor: {
                  copySuccessText: "链接复制成功",
                  copyText: "复制链接",
                },
                colorPicker: {
                  swatchColorTitle: "系统预设颜色",
                  recentColorTitle: "最近使用颜色",
                  clearConfirmText: "确定清空最近使用的颜色吗？",
                },
              },
              {
                classPrefix: "t",
                animation: {
                  include: ["ripple", "expand", "fade"],
                  exclude: [],
                },
                calendar: {
                  firstDayOfWeek: 1,
                  fillWithZero: !0,
                  controllerConfig: void 0,
                },
                icon: {},
                input: { autocomplete: "" },
                dialog: {
                  closeOnEscKeydown: !0,
                  closeOnOverlayClick: !0,
                  confirmBtnTheme: {
                    default: "primary",
                    info: "primary",
                    warning: "primary",
                    danger: "primary",
                    success: "primary",
                  },
                },
                popconfirm: {
                  confirmBtnTheme: {
                    default: "primary",
                    warning: "primary",
                    danger: "primary",
                  },
                },
                table: {
                  expandIcon: void 0,
                  sortIcon: void 0,
                  filterIcon: void 0,
                  treeExpandAndFoldIcon: void 0,
                  hideSortTips: !1,
                },
                select: { clearIcon: void 0, filterable: !1 },
                drawer: {
                  closeOnEscKeydown: !0,
                  closeOnOverlayClick: !0,
                  size: "small",
                },
                tree: { folderIcon: void 0 },
                datePicker: { firstDayOfWeek: 1 },
                steps: { errorIcon: void 0 },
                tag: { closeIcon: void 0 },
                form: { requiredMark: void 0 },
              },
            ),
          ),
        },
        ao = (0, e.createContext)(oo),
        io = function () {
          return (0, e.useContext)(ao).globalConfig;
        };
      function lo(e) {
        var t = io().icon,
          n = {};
        return (
          Object.keys(e).forEach(function (r) {
            n[r] = (null == t ? void 0 : t[r]) || e[r];
          }),
          n
        );
      }
      function co() {
        var e = io().classPrefix,
          t = "".concat(e, "-message"),
          n = "".concat(t, "__list");
        return {
          tdMessagePrefix: t,
          tdMessageListClass: n,
          tdClassIsGenerator: function (t) {
            return "".concat(e, "-is-").concat(t);
          },
          tdMessageClassGenerator: function (e) {
            return "".concat(t, "__").concat(e);
          },
          tdMessagePlacementClassGenerator: function (e) {
            return "".concat(t, "-placement--").concat(e);
          },
        };
      }
      function uo(t) {
        var n = t.closeBtn,
          r = t.onCloseBtnClick,
          o = co().tdMessageClassGenerator,
          a = lo({ CloseIcon: z }).CloseIcon,
          i = n;
        if (("function" == typeof n && (i = n()), !i)) return null;
        if ("string" == typeof i || "number" == typeof i)
          return e.createElement(
            "span",
            {
              className: o("close"),
              onClick: function (e) {
                return null == r ? void 0 : r({ e });
              },
            },
            n,
          );
        if (e.isValidElement(i)) {
          var l = i.props.onClick;
          return e.cloneElement(i, {
            className: p()(i.props.className, o("close")),
            onClick: function (e) {
              null == l || l(e), null == r || r({ e });
            },
          });
        }
        return e.createElement(a, {
          className: o("close"),
          onClick: function (e) {
            return null == r ? void 0 : r({ e });
          },
        });
      }
      function so(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function fo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? so(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : so(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var po = {
          tag: "svg",
          attrs: {
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
          },
          children: [
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M8 15A7 7 0 108 1a7 7 0 000 14zM4.5 8.2l.7-.7L7 9.3l3.8-3.8.7.7L7 10.7 4.5 8.2z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        mo = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            C,
            fo(fo({}, t), {}, { id: "check-circle-filled", ref: n, icon: po }),
          );
        });
      function go(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ho(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? go(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : go(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      mo.displayName = "CheckCircleFilledIcon";
      var vo = {
          tag: "svg",
          attrs: {
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
          },
          children: [
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M15 8A7 7 0 101 8a7 7 0 0014 0zM8.5 4v5.5h-1V4h1zm-1.1 7h1.2v1.2H7.4V11z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        yo = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            C,
            ho(ho({}, t), {}, { id: "error-circle-filled", ref: n, icon: vo }),
          );
        });
      function bo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? bo(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : bo(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      yo.displayName = "ErrorCircleFilledIcon";
      var wo = {
          tag: "svg",
          attrs: {
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
          },
          children: [
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M15 8A7 7 0 101 8a7 7 0 0014 0zM5.8 6.63a2.2 2.2 0 014.39 0c0 .97-.75 1.72-1.49 2.02a.34.34 0 00-.2.32v.8h-1v-.8c0-.56.33-1.04.82-1.24.5-.2.87-.66.87-1.1a1.2 1.2 0 00-2.39 0h-1zm1.67 4.54a.53.53 0 111.05 0 .53.53 0 01-1.05 0z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        Oo = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            C,
            _o(_o({}, t), {}, { id: "help-circle-filled", ref: n, icon: wo }),
          );
        });
      function Eo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ko(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Eo(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Eo(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      Oo.displayName = "HelpCircleFilledIcon";
      var xo = {
          tag: "svg",
          attrs: {
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
          },
          children: [
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        So = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            C,
            ko(ko({}, t), {}, { id: "info-circle-filled", ref: n, icon: xo }),
          );
        });
      So.displayName = "InfoCircleFilledIcon";
      n(6120);
      var Po = Y,
        jo = Xt,
        Co = gt;
      var No = function (e) {
          return (
            "string" == typeof e ||
            (!jo(e) && Co(e) && "[object String]" == Po(e))
          );
        },
        To = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      To && document.addEventListener, To && document.removeEventListener;
      function Do(e, t) {
        if (!e || !t) return !1;
        if (-1 !== t.indexOf(" "))
          throw new Error("className should not contain space.");
        return e.classList
          ? e.classList.contains(t)
          : " ".concat(e.className, " ").indexOf(" ".concat(t, " ")) > -1;
      }
      var zo = (0, e.forwardRef)(function (n, r) {
        var o = n.attach,
          a = n.children,
          i = n.triggerNode,
          c = io().classPrefix,
          u = (0, e.useMemo)(
            function () {
              if (!To) return null;
              var e = document.createElement("div");
              return (e.className = "".concat(c, "-portal-wrapper")), e;
            },
            [c],
          );
        return (
          (0, e.useEffect)(
            function () {
              var e,
                t = (function (e, t) {
                  return To
                    ? ("string" == typeof e && (n = document.querySelector(e)),
                      "function" == typeof e && (n = e(t)),
                      "object" === l(e) &&
                        e instanceof window.HTMLElement &&
                        (n = e),
                      n && 1 === n.nodeType ? n : document.body)
                    : null;
                  var n;
                })(o, i);
              return (
                null == t ||
                  null === (e = t.appendChild) ||
                  void 0 === e ||
                  e.call(t, u),
                function () {
                  var e;
                  null == t ||
                    null === (e = t.removeChild) ||
                    void 0 === e ||
                    e.call(t, u);
                }
              );
            },
            [u, o, i],
          ),
          (0, e.useImperativeHandle)(r, function () {
            return u;
          }),
          To ? (0, t.createPortal)(a, u) : null
        );
      });
      function Lo(e, t) {
        Object.keys(t).forEach(function (n) {
          e.style[n] = t[n];
        });
      }
      function Io(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          o(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      zo.displayName = "Portal";
      function Mo(e, t) {
        var n = "number" == typeof t;
        if (!e || 0 === e.length) return n ? { length: 0, characters: e } : 0;
        for (var r = 0, o = 0; o < e.length; o++) {
          var a = 0;
          if (
            ((a = e.charCodeAt(o) > 127 || 94 === e.charCodeAt(o) ? 2 : 1),
            n && r + a > t)
          )
            return { length: r, characters: e.slice(0, o) };
          r += a;
        }
        return n ? { length: r, characters: e } : r;
      }
      function Ao(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ro(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ao(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ao(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Fo(e) {
        var t,
          n,
          r,
          o,
          a = {};
        if (e) {
          var i =
              null === (t = window) ||
              void 0 === t ||
              null === (n = t.getComputedStyle) ||
              void 0 === n
                ? void 0
                : n.call(t, e),
            l = i.color,
            c = i.fontSize,
            u =
              null === (r = window) ||
              void 0 === r ||
              null === (o = r.navigator) ||
              void 0 === o
                ? void 0
                : o.userAgent,
            s = /Safari/.test(u) && !/Chrome/.test(u),
            f = /(?=.*iPhone)[?=.*MicroMessenger]/.test(u) && !/Chrome/.test(u),
            d = /Mobile/.test(u);
          if (
            ((!s && !f) ||
              d ||
              (a = {
                transformOrigin: "-1px -1px",
                transform: "scale(".concat(parseInt(c, 10) / 14, ")"),
              }),
            l &&
              (function () {
                var e = navigator.userAgent,
                  t = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1,
                  n = e.indexOf("Trident") > -1 && e.indexOf("rv:11.0") > -1;
                if (t) {
                  var r = new RegExp("MSIE (\\d+\\.\\d+);"),
                    o = e.match(r);
                  if (!o) return -1;
                  var a = parseFloat(o[1]);
                  return a < 7 ? 6 : a;
                }
                return n ? 11 : Number.MAX_SAFE_INTEGER;
              })() > 11)
          ) {
            var p = l.match(/[\d.]+/g),
              m = p
                ? "rgba("
                    .concat(p[0], ", ")
                    .concat(p[1], ", ")
                    .concat(p[2], ", 0)")
                : "";
            Lo(
              e,
              Ro(
                Ro({}, a),
                {},
                {
                  background: "conic-gradient(from 90deg at 50% 50%,"
                    .concat(m, " 0deg, ")
                    .concat(l, " 360deg)"),
                },
              ),
            );
          } else Lo(e, Ro(Ro({}, a), {}, { background: "" }));
        }
      }
      var Bo = function () {
        var t = io().classPrefix,
          n = (0, e.useRef)(),
          r = "".concat(t, "-loading__gradient");
        return (
          (0, e.useEffect)(function () {
            Fo(null == n ? void 0 : n.current);
          }, []),
          e.createElement(
            "svg",
            {
              className: p()(r, "".concat(t, "-icon-loading")),
              viewBox: "0 0 14 14",
              version: "1.1",
              width: "1em",
              height: "1em",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e.createElement(
              "foreignObject",
              { x: "1", y: "1", width: "12", height: "12" },
              e.createElement("div", {
                className: "".concat(r, "-conic"),
                ref: n,
              }),
            ),
          )
        );
      };
      function Vo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Uo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Vo(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Vo(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Wo = function (t) {
        var n = t.attach,
          r = t.indicator,
          o = t.text,
          l = t.loading,
          c = t.size,
          u = t.delay,
          s = t.fullscreen,
          f = t.preventScrollThrough,
          d = t.showOverlay,
          m = t.content,
          g = t.children,
          h = t.inheritColor,
          v = t.zIndex,
          y = t.className,
          b = t.style,
          _ = a((0, e.useState)(!u && l), 2),
          w = _[0],
          O = _[1],
          E = io().classPrefix,
          k = "".concat(E, "-loading"),
          x = "".concat(E, "-loading--center"),
          S = "".concat(E, "-loading--inherit-color"),
          P = "".concat(E, "-loading--full"),
          j = "".concat(E, "-loading__fullscreen"),
          C = "".concat(E, "-loading--lock"),
          N = "".concat(E, "-loading__overlay"),
          T = "".concat(E, "-loading__parent"),
          D = "".concat(E, "-loading__text");
        (0, e.useEffect)(
          function () {
            var e;
            return (
              u && l
                ? (e = setTimeout(function () {
                    O(l);
                  }, u))
                : O(l),
              function () {
                clearTimeout(e);
              }
            );
          },
          [u, l],
        );
        var z = (0, e.useMemo)(
            function () {
              var e = {};
              return (
                void 0 !== v && (e.zIndex = v),
                ["small", "medium", "large"].includes(c) || (e.fontSize = c),
                b ? Uo(Uo({}, e), b) : e
              );
            },
            [c, v, b],
          ),
          L = {
            large: "".concat(E, "-size-l"),
            small: "".concat(E, "-size-s"),
            medium: "".concat(E, "-size-m"),
          },
          I = p()(x, L[c], i({}, S, h), y);
        (0, e.useEffect)(
          function () {
            return (
              f &&
                s &&
                To &&
                l &&
                (function (e, t) {
                  if (e) {
                    for (
                      var n = e.className,
                        r = (t || "").split(" "),
                        o = 0,
                        a = r.length;
                      o < a;
                      o++
                    ) {
                      var i = r[o];
                      i &&
                        (e.classList
                          ? e.classList.add(i)
                          : Do(e, i) || (n += " ".concat(i)));
                    }
                    e.classList || (e.className = n);
                  }
                })(document.body, C),
              function () {
                !(function (e, t) {
                  if (e && t) {
                    for (
                      var n = t.split(" "),
                        r = " ".concat(e.className, " "),
                        o = 0,
                        a = n.length;
                      o < a;
                      o++
                    ) {
                      var i = n[o];
                      i &&
                        (e.classList
                          ? e.classList.remove(i)
                          : Do(e, i) &&
                            (r = r.replace(" ".concat(i, " "), " ")));
                    }
                    e.classList ||
                      (e.className = (r || "").replace(
                        /^[\s﻿]+|[\s﻿]+$/g,
                        "",
                      ));
                  }
                })(document.body, C);
              }
            );
          },
          [l, f, s, C],
        );
        var M = function () {
          var t = e.createElement(Bo, null);
          return (
            r && "boolean" != typeof r && (t = r),
            e.createElement(
              e.Fragment,
              null,
              r ? t : null,
              o ? e.createElement("div", { className: D }, o) : null,
            )
          );
        };
        return s
          ? l
            ? e.createElement(
                "div",
                { className: p()(k, j, x, N), style: z },
                e.createElement("div", { className: I }, M()),
              )
            : null
          : m || g
            ? e.createElement(
                "div",
                { className: T },
                m || g,
                w
                  ? e.createElement(
                      "div",
                      { className: p()(k, I, P, i({}, N, d)), style: z },
                      M(),
                    )
                  : null,
              )
            : n
              ? e.createElement(
                  zo,
                  { attach: n },
                  l
                    ? e.createElement(
                        "div",
                        { className: p()(k, I, P, i({}, N, d)), style: z },
                        M(),
                      )
                    : null,
                )
              : l
                ? e.createElement(
                    "div",
                    { className: p()(k, I), style: z },
                    M(),
                  )
                : null;
      };
      (Wo.displayName = "Loading"),
        (Wo.defaultProps = {
          delay: 0,
          fullscreen: !1,
          indicator: !0,
          inheritColor: !1,
          loading: !0,
          preventScrollThrough: !0,
          showOverlay: !0,
          size: "medium",
        });
      var $o = Wo;
      function Ho(t) {
        var n = t.theme,
          r = t.onCloseBtnClick,
          o = lo({
            CheckCircleFilledIcon: mo,
            ErrorCircleFilledIcon: yo,
            HelpCircleFilledIcon: Oo,
            InfoCircleFilledIcon: So,
          }),
          a = o.CheckCircleFilledIcon,
          i = o.ErrorCircleFilledIcon,
          l = o.HelpCircleFilledIcon,
          c = {
            info: o.InfoCircleFilledIcon,
            success: a,
            warning: i,
            error: i,
            question: l,
            loading: $o,
          }[n];
        return "loading" === n
          ? e.createElement(c, { loading: !0 })
          : c
            ? e.createElement(c, {
                onClick: function (e) {
                  return null == r ? void 0 : r({ e });
                },
              })
            : null;
      }
      var qo = ["theme", "className", "children", "style", "icon", "content"];
      function Qo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var Ko = function (t) {
        var n = co(),
          r = n.tdMessagePrefix,
          o = n.tdClassIsGenerator,
          a = t.theme,
          l = void 0 === a ? "info" : a,
          c = t.className,
          u = t.children,
          s = t.style,
          f = t.icon,
          d = void 0 === f || f,
          m = t.content,
          g = v(t, qo),
          h = d;
        return (
          !0 === d && (h = e.createElement(Ho, { theme: l })),
          e.createElement(
            "div",
            {
              key: "message",
              style: s,
              className: p()(
                c,
                "".concat(r),
                o(l),
                g.closeBtn ? o("closable") : "",
              ),
            },
            h,
            m || u,
            e.createElement(
              uo,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? Qo(Object(n), !0).forEach(function (t) {
                        i(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n),
                        )
                      : Qo(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t),
                          );
                        });
                }
                return e;
              })({}, g),
            ),
          )
        );
      };
      function Xo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Yo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Xo(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Xo(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Go = 32,
        Zo = Yo(
          Yo({}, { closeBtn: void 0, duration: 3e3, icon: !0, theme: "info" }),
          {},
          { duration: 3e3, placement: "top", zIndex: 5e3 },
        ),
        Jo = function (e) {
          var t = Yo({}, e);
          for (var n in t) void 0 === t[n] && delete t[n];
          return (
            ("number" != typeof t.duration || t.duration < 0) &&
              delete t.duration,
            Yo(Yo({}, Zo), t)
          );
        };
      function ea(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ta(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ea(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ea(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var na = [],
        ra = 1,
        oa = function (t) {
          var n = t.placement,
            r = t.children,
            o = t.zIndex,
            a = t.id,
            i = { zIndex: o };
          Object.keys(h[n]).forEach(function (e) {
            i[e] = h[n][e];
          }),
            n.includes("top") && (i.top = "".concat(Go, "px"));
          var l = co(),
            c = l.tdMessagePlacementClassGenerator,
            u = l.tdMessageListClass;
          return e.createElement(
            "div",
            { className: p()(u, c(n)), style: i, id: a },
            r,
          );
        };
      function aa(n) {
        var r = n.attach,
          o = n.zIndex,
          a = n.placement,
          i = void 0 === a ? "top" : a;
        return new Promise(function (n) {
          var a = document.body;
          if ("string" == typeof r) {
            var l = document.querySelectorAll(r);
            l.length >= 1 && (a = l[0]);
          } else "function" == typeof r && (a = r());
          var c = "tdesign-message-container--".concat(i),
            u = Array.from(a.querySelectorAll("#".concat(c)));
          if (u.length < 1) {
            var s = document.createElement("div");
            t.render(
              e.createElement(oa, { id: c, placement: i, zIndex: o }),
              s,
              function () {
                a.appendChild(s);
                var e = Array.from(a.querySelectorAll("#".concat(c)));
                n(e[0]);
              },
            );
          } else n(u[0]);
        });
      }
      function ia() {
        return (
          (ia = u(
            f.mark(function n(r, o) {
              var i, l, c, u, s, d, p, g, h, v, y, b, _;
              return f.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), aa(o);
                    case 2:
                      return (
                        (i = n.sent),
                        (l = o.content),
                        (c = o.offset),
                        (u = o.onDurationEnd),
                        (s = void 0 === u ? m : u),
                        (d = o.onCloseBtnClick),
                        (p = void 0 === d ? m : d),
                        (g = document.createElement("div")),
                        (h = {
                          close: function () {
                            t.unmountComponentAtNode(g),
                              g.remove(),
                              (h.closed = !0);
                          },
                          key: (ra += 1),
                          closed: !1,
                        }),
                        0 !== o.duration &&
                          setTimeout(function () {
                            h.closed || (h.close(), s());
                          }, o.duration),
                        (v = {}),
                        Array.isArray(c) &&
                          2 === c.length &&
                          ((y = a(c, 2)),
                          (b = y[0]),
                          (_ = y[1]),
                          (v = ta(
                            ta({}, o.style),
                            {},
                            { left: b, top: _, position: "relative" },
                          ))),
                        n.abrupt(
                          "return",
                          new Promise(function (n) {
                            t.render(
                              e.createElement(
                                Ko,
                                ta(
                                  ta({ key: ra }, o),
                                  {},
                                  {
                                    theme: r,
                                    style: v,
                                    onCloseBtnClick: function (e) {
                                      p(e), h.close();
                                    },
                                  },
                                ),
                                l,
                              ),
                              g,
                            ),
                              i.appendChild(g),
                              na.push(h),
                              n(h);
                          }),
                        )
                      );
                    case 11:
                    case "end":
                      return n.stop();
                  }
              }, n);
            }),
          )),
          ia.apply(this, arguments)
        );
      }
      var la = function (e, t, n) {
          var r = {};
          return (
            (r = (function (e) {
              return (
                "[object Object]" === Object.prototype.toString.call(e) &&
                !!e.content
              );
            })(t)
              ? ta({ duration: n }, t)
              : { content: t, duration: n }),
            (function (e, t) {
              return ia.apply(this, arguments);
            })(e, Jo(r))
          );
        },
        ca = function (e, t, n) {
          return la(e, t, n);
        };
      (ca.info = function (e, t) {
        return la("info", e, t);
      }),
        (ca.error = function (e, t) {
          return la("error", e, t);
        }),
        (ca.warning = function (e, t) {
          return la("warning", e, t);
        }),
        (ca.success = function (e, t) {
          return la("success", e, t);
        }),
        (ca.question = function (e, t) {
          return la("question", e, t);
        }),
        (ca.loading = function (e, t) {
          return la("loading", e, t);
        }),
        (ca.config = function (e) {
          return (function (e) {
            Zo = Yo({}, Jo(e));
          })(e);
        }),
        (ca.close = function (e) {
          e.then(function (e) {
            return e.close();
          });
        }),
        (ca.closeAll = function () {
          na.forEach(function (e) {
            "function" == typeof e.close && e.close();
          }),
            (na = []);
        });
      var ua = ca,
        sa = Y,
        fa = gt;
      var da = function (e) {
        return "symbol" == l(e) || (fa(e) && "[object Symbol]" == sa(e));
      };
      var pa = function (e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length, o = Array(r);
            ++n < r;

          )
            o[n] = t(e[n], n, e);
          return o;
        },
        ma = Xt,
        ga = da,
        ha = F ? F.prototype : void 0,
        va = ha ? ha.toString : void 0;
      var ya = function e(t) {
          if ("string" == typeof t) return t;
          if (ma(t)) return pa(t, e) + "";
          if (ga(t)) return va ? va.call(t) : "";
          var n = t + "";
          return "0" == n && 1 / t == -Infinity ? "-0" : n;
        },
        ba = ya;
      var _a = function (e) {
          return null == e ? "" : ba(e);
        },
        wa = Xt,
        Oa = da,
        Ea = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        ka = /^\w*$/;
      var xa = function (e, t) {
          if (wa(e)) return !1;
          var n = l(e);
          return (
            !(
              "number" != n &&
              "symbol" != n &&
              "boolean" != n &&
              null != e &&
              !Oa(e)
            ) ||
            ka.test(e) ||
            !Ea.test(e) ||
            (null != t && e in Object(t))
          );
        },
        Sa = pt;
      function Pa(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var n = function n() {
          var r = arguments,
            o = t ? t.apply(this, r) : r[0],
            a = n.cache;
          if (a.has(o)) return a.get(o);
          var i = e.apply(this, r);
          return (n.cache = a.set(o, i) || a), i;
        };
        return (n.cache = new (Pa.Cache || Sa)()), n;
      }
      Pa.Cache = Sa;
      var ja = Pa;
      var Ca =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Na = /\\(\\)?/g,
        Ta = (function (e) {
          var t = ja(e, function (e) {
              return 500 === n.size && n.clear(), e;
            }),
            n = t.cache;
          return t;
        })(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(Ca, function (e, n, r, o) {
              t.push(r ? o.replace(Na, "$1") : n || e);
            }),
            t
          );
        }),
        Da = Xt,
        za = xa,
        La = Ta,
        Ia = _a;
      var Ma = function (e, t) {
          return Da(e) ? e : za(e, t) ? [e] : La(Ia(e));
        },
        Aa = da;
      var Ra = function (e) {
          if ("string" == typeof e || Aa(e)) return e;
          var t = e + "";
          return "0" == t && 1 / e == -Infinity ? "-0" : t;
        },
        Fa = Ma,
        Ba = Ra;
      var Va = function (e, t) {
          for (var n = 0, r = (t = Fa(t, e)).length; null != e && n < r; )
            e = e[Ba(t[n++])];
          return n && n == r ? e : void 0;
        },
        Ua = Va;
      var Wa = function (e, t, n) {
        var r = null == e ? void 0 : Ua(e, t);
        return void 0 === r ? n : r;
      };
      var $a = function (e, t, n) {
          var r = -1,
            o = e.length;
          t < 0 && (t = -t > o ? 0 : o + t),
            (n = n > o ? o : n) < 0 && (n += o),
            (o = t > n ? 0 : (n - t) >>> 0),
            (t >>>= 0);
          for (var a = Array(o); ++r < o; ) a[r] = e[r + t];
          return a;
        },
        Ha = $a;
      var qa = function (e, t, n) {
          var r = e.length;
          return (n = void 0 === n ? r : n), !t && n >= r ? e : Ha(e, t, n);
        },
        Qa = RegExp(
          "[\‍\�-\�\̀-\ͯ\︠-\︯\⃐-\⃿\︎\️]",
        );
      var Ka = function (e) {
        return Qa.test(e);
      };
      var Xa = function (e) {
          return e.split("");
        },
        Ya = "[\�-\�]",
        Ga = "[\̀-\ͯ\︠-\︯\⃐-\⃿]",
        Za = "\�[\�-\�]",
        Ja = "[^\�-\�]",
        ei = "(?:\�[\�-\�]){2}",
        ti = "[\�-\�][\�-\�]",
        ni = "(?:" + Ga + "|" + Za + ")" + "?",
        ri = "[\︎\️]?",
        oi =
          ri +
          ni +
          ("(?:\‍(?:" + [Ja, ei, ti].join("|") + ")" + ri + ni + ")*"),
        ai = "(?:" + [Ja + Ga + "?", Ga, ei, ti, Ya].join("|") + ")",
        ii = RegExp(Za + "(?=" + Za + ")|" + ai + oi, "g");
      var li = Xa,
        ci = Ka,
        ui = function (e) {
          return e.match(ii) || [];
        };
      var si = qa,
        fi = Ka,
        di = function (e) {
          return ci(e) ? ui(e) : li(e);
        },
        pi = _a;
      var mi = (function (e) {
          return function (t) {
            t = pi(t);
            var n = fi(t) ? di(t) : void 0,
              r = n ? n[0] : t.charAt(0),
              o = n ? si(n, 1).join("") : t.slice(1);
            return r[e]() + o;
          };
        })("toUpperCase"),
        gi = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = arguments.length > 1 ? arguments[1] : void 0,
            r = arguments.length > 2 ? arguments[2] : void 0,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i = Reflect.has(t, n),
            l = t[n],
            c = o["default".concat(mi(n))] || t["default".concat(mi(n))],
            u = (0, e.useState)(c),
            s = a(u, 2),
            f = s[0],
            d = s[1];
          return i
            ? [l, r || m]
            : [
                f,
                function (e) {
                  d(e);
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      o = 1;
                    o < t;
                    o++
                  )
                    n[o - 1] = arguments[o];
                  null == r || r.apply(void 0, [e].concat(n));
                },
              ];
        };
      function hi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function vi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? hi(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : hi(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function yi(t, n) {
        var r = e.useContext(ao).globalConfig;
        return [
          e.useMemo(
            function () {
              var e = n || {},
                o = r[t],
                a = t && r ? o : {};
              return vi(vi({}, "function" == typeof e ? e() : e), a || {});
            },
            [t, n, r],
          ),
          function (e, t) {
            var n = /\{\s*([\w-]+)\s*\}/g;
            return "string" == typeof e
              ? t && n.test(e)
                ? e.replace(n, function (e, n) {
                    return t ? String(t[n]) : "";
                  })
                : e
              : Array.isArray(e)
                ? e.map(function (e, r) {
                    return e.replace(n, function (e, n) {
                      return t ? String(t[r][n]) : "";
                    });
                  })
                : "function" == typeof e
                  ? e(t)
                  : "";
          },
        ];
      }
      var bi = n(6095),
        _i = n.n(bi);
      function wi(t, n) {
        return _i()((0, e.forwardRef)(t), n);
      }
      function Oi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var Ei = function (t) {
        var n = t.children,
          r = t.label,
          o = t.selectedValue,
          a = t.onSelect,
          l = t.divider,
          c = io().classPrefix,
          u = e.Children.map(n, function (t) {
            if ((0, e.isValidElement)(t)) {
              var n = { selectedValue: o, onSelect: a };
              return (0, e.cloneElement)(
                t,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? Oi(Object(n), !0).forEach(function (t) {
                          i(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : Oi(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t),
                            );
                          });
                  }
                  return e;
                })({}, n),
              );
            }
            return t;
          });
        return e.createElement(
          "li",
          {
            className: p()(
              "".concat(c, "-select-option-group"),
              i({}, "".concat(c, "-select-option-group__divider"), l),
            ),
          },
          e.createElement(
            "ul",
            { className: "".concat(c, "-select-option-group__header") },
            r,
          ),
          e.createElement(
            "ul",
            { className: "".concat(c, "-select__list") },
            u,
          ),
        );
      };
      Ei.defaultProps = { divider: !0 };
      var ki = Y,
        xi = gt;
      var Si = function (e) {
        return "number" == typeof e || (xi(e) && "[object Number]" == ki(e));
      };
      function Pi() {
        var t = a((0, e.useState)(), 2),
          n = t[0],
          r = t[1];
        return (
          (0, e.useCallback)(function (e) {
            e && r(e);
          }, []),
          [n, r]
        );
      }
      function ji() {
        var t = io().animation,
          n = ro.expand,
          r = ro.ripple,
          o = ro.fade,
          a = (0, e.useCallback)(
            function (e) {
              var n, r;
              return (
                t &&
                !(null !== (n = t.exclude) && void 0 !== n && n.includes(e)) &&
                (null === (r = t.include) || void 0 === r
                  ? void 0
                  : r.includes(e))
              );
            },
            [t],
          );
        return { keepExpand: a(n), keepRipple: a(r), keepFade: a(o) };
      }
      function Ci(e, t) {
        Object.keys(t).forEach(function (n) {
          e.style[n] = t[n];
        });
      }
      function Ni(t, n) {
        var r = io().classPrefix,
          o = ji().keepRipple,
          a = (0, e.useMemo)(
            function () {
              if (!To) return null;
              var e = document.createElement("div");
              return (e.className = "".concat(r, "-ripple")), e;
            },
            [r],
          ),
          i = (0, e.useCallback)(
            function (e) {
              var i = (function (e, t) {
                var n;
                return (
                  t ||
                  (null != e &&
                  null !== (n = e.dataset) &&
                  void 0 !== n &&
                  n.ripple
                    ? e.dataset.ripple
                    : getComputedStyle(e).getPropertyValue("--ripple-color") ||
                      "rgba(0, 0, 0, 0.35)")
                );
              })(t, n);
              if (
                0 === e.button &&
                t &&
                o &&
                !(
                  t.classList.contains("".concat(r, "-is-active")) ||
                  t.classList.contains("".concat(r, "-is-disabled")) ||
                  t.classList.contains("".concat(r, "-is-checked")) ||
                  t.classList.contains("".concat(r, "-is-loading"))
                )
              ) {
                var l = getComputedStyle(t),
                  c = parseInt(l.borderWidth, 10),
                  u = c > 0 ? c : 0,
                  s = t.offsetWidth,
                  f = t.offsetHeight;
                null === a.parentNode &&
                  (Ci(a, {
                    position: "absolute",
                    left: "".concat(0 - u, "px"),
                    top: "".concat(0 - u, "px"),
                    width: "".concat(s, "px"),
                    height: "".concat(f, "px"),
                    borderRadius: l.borderRadius,
                    pointerEvents: "none",
                    overflow: "hidden",
                  }),
                  t.appendChild(a));
                var d = document.createElement("div");
                (d.className = "".concat(r, "-ripple__inner")),
                  Ci(d, {
                    marginTop: "0",
                    marginLeft: "0",
                    right: "".concat(s, "px"),
                    width: "".concat(s + 20, "px"),
                    height: "100%",
                    transition: "transform "
                      .concat(
                        200,
                        "ms cubic-bezier(.38, 0, .24, 1), background ",
                      )
                      .concat(400, "ms linear"),
                    transform: "skewX(-8deg)",
                    pointerEvents: "none",
                    position: "absolute",
                    zIndex: 0,
                    backgroundColor: i,
                    opacity: "0.9",
                  });
                for (
                  var p = new WeakMap(), m = t.children.length, g = 0;
                  g < m;
                  ++g
                ) {
                  var h = t.children[g];
                  "" === h.style.zIndex &&
                    h !== a &&
                    ((h.style.zIndex = "1"), p.set(h, !0));
                }
                var v = t.style.position
                  ? t.style.position
                  : getComputedStyle(t).position;
                ("" !== v && "static" !== v) || (t.style.position = "relative"),
                  a.insertBefore(d, a.firstChild),
                  setTimeout(function () {
                    d.style.transform = "translateX(".concat(s, "px)");
                  }, 0);
                var y = function e() {
                  (d.style.backgroundColor = "rgba(0, 0, 0, 0)"),
                    t &&
                      (t.removeEventListener("pointerup", e, !1),
                      t.removeEventListener("pointerleave", e, !1),
                      setTimeout(function () {
                        d.remove(), 0 === a.children.length && a.remove();
                      }, 500));
                };
                t.addEventListener("pointerup", y, !1),
                  t.addEventListener("pointerleave", y, !1);
              }
            },
            [r, t, n, a, o],
          );
        (0, e.useEffect)(
          function () {
            if (t)
              return (
                t.addEventListener("pointerdown", i, !1),
                function () {
                  t.removeEventListener("pointerdown", i, !1);
                }
              );
          },
          [i, n, t],
        );
      }
      var Ti = function (t) {
        var n,
          r,
          o = t.disabled,
          l = t.label,
          c = t.selectedValue,
          u = t.multiple,
          s = t.size,
          f = t.max,
          d = t.keys,
          m = t.value,
          g = t.onSelect,
          h = t.children,
          v = t.content,
          y = t.restData,
          b = t.style,
          _ = t.className,
          w = l || m,
          O = o || (u && Array.isArray(c) && f && c.length >= f),
          E = io().classPrefix,
          k = a(Pi(), 2),
          x = k[0],
          S = k[1];
        Ni(x),
          u ||
            (r =
              Si(c) || No(c)
                ? m === c
                : m === Wa(c, (null == d ? void 0 : d.value) || "value")),
          u &&
            Array.isArray(c) &&
            (r = c.some(function (e) {
              return Si(e) || No(e)
                ? e === m
                : Wa(e, (null == d ? void 0 : d.value) || "value") === m;
            }));
        var P, j;
        return e.createElement(
          "li",
          {
            className: p()(
              _,
              "".concat(E, "-").concat("select", "-option"),
              ((n = {}),
              i(n, "".concat(E, "-is-disabled"), O),
              i(n, "".concat(E, "-is-selected"), r),
              i(n, "".concat(E, "-size-s"), "small" === s),
              i(n, "".concat(E, "-size-l"), "large" === s),
              n),
            ),
            key: m,
            onClick: function (e) {
              O ||
                g(m, { label: String(w), selected: r, event: e, restData: y });
            },
            ref: S,
            style: b,
          },
          ((P = h),
          u
            ? e.createElement(
                "label",
                {
                  className: p()(
                    "".concat(E, "-checkbox"),
                    ((j = {}),
                    i(j, "".concat(E, "-is-disabled"), O),
                    i(j, "".concat(E, "-is-checked"), r),
                    j),
                  ),
                },
                e.createElement("input", {
                  type: "checkbox",
                  className: p()("".concat(E, "-checkbox__former")),
                  value: "",
                  disabled: O && !r,
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                }),
                e.createElement("span", {
                  className: p()("".concat(E, "-checkbox__input")),
                }),
                e.createElement(
                  "span",
                  { className: p()("".concat(E, "-checkbox__label")) },
                  P || v || w,
                ),
              )
            : e.createElement("span", { title: w }, P || v || w)),
        );
      };
      function Di(e, t, n) {
        var r,
          o = e.props,
          a = o.value,
          l = o.label,
          c = o.children;
        t[a] =
          (i((r = {}), (null == n ? void 0 : n.value) || "value", a),
          i(r, (null == n ? void 0 : n.label) || "label", l || c || a),
          r);
      }
      var zi = function (e, t, n, r, o, a) {
          if (((e = Array.isArray(e) ? e : []), Array.isArray(e))) {
            var i = Io(e),
              l = "object" === r;
            if (n)
              i = i.filter(function (e) {
                return l
                  ? hr(t)
                    ? Wa(e, (null == o ? void 0 : o.value) || "value") !==
                      Wa(t, (null == o ? void 0 : o.value) || "value")
                    : Wa(e, (null == o ? void 0 : o.value) || "value") !== t
                  : e !== t;
              });
            else {
              var c = l ? a : t;
              i.push(c);
            }
            return i;
          }
        },
        Li = function (e, t, n, r, o) {
          var a,
            i,
            l = "object" === n,
            c = [];
          t
            ? (c = l
                ? e
                : null == o || null === (a = o.filter) || void 0 === a
                  ? void 0
                  : a.call(o, function (t) {
                      var n;
                      return null === (n = e.includes) || void 0 === n
                        ? void 0
                        : n.call(
                            e,
                            t[(null == r ? void 0 : r.value) || "value"],
                          );
                    }))
            : (c = l
                ? [e]
                : (null == o || null === (i = o.filter) || void 0 === i
                    ? void 0
                    : i.call(o, function (t) {
                        return (
                          e === t[(null == r ? void 0 : r.value) || "value"]
                        );
                      })) || []);
          return c;
        };
      function Ii(t) {
        var n = io().classPrefix;
        return e.createElement(
          "svg",
          {
            style: t.style,
            className: p()(
              "".concat(n, "-fake-arrow"),
              i(
                {},
                "".concat(n, "-fake-arrow--active"),
                (null == t ? void 0 : t.isActive) && !(null != t && t.disabled),
              ),
              null == t ? void 0 : t.overlayClassName,
            ),
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e.createElement("path", {
            d: "M3.75 5.7998L7.99274 10.0425L12.2361 5.79921",
            stroke: "black",
            strokeOpacity: "0.9",
            strokeWidth: "1.3",
          }),
        );
      }
      function Mi() {
        return (
          (Mi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Mi.apply(this, arguments)
        );
      }
      function Ai(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      function Ri(e, t) {
        return (
          (Ri = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Ri(e, t)
        );
      }
      function Fi(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          Ri(e, t);
      }
      function Bi(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      const Vi = !1,
        Ui = e.createContext(null);
      var Wi = function (e) {
          return e.scrollTop;
        },
        $i = "unmounted",
        Hi = "exited",
        qi = "entering",
        Qi = "entered",
        Ki = "exiting",
        Xi = (function (n) {
          function r(e, t) {
            var r;
            r = n.call(this, e, t) || this;
            var o,
              a = t && !t.isMounting ? e.enter : e.appear;
            return (
              (r.appearStatus = null),
              e.in
                ? a
                  ? ((o = Hi), (r.appearStatus = qi))
                  : (o = Qi)
                : (o = e.unmountOnExit || e.mountOnEnter ? $i : Hi),
              (r.state = { status: o }),
              (r.nextCallback = null),
              r
            );
          }
          Fi(r, n),
            (r.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === $i ? { status: Hi } : null;
            });
          var o = r.prototype;
          return (
            (o.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (o.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== qi && n !== Qi && (t = qi)
                  : (n !== qi && n !== Qi) || (t = Ki);
              }
              this.updateStatus(!1, t);
            }),
            (o.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (o.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (o.updateStatus = function (e, n) {
              if ((void 0 === e && (e = !1), null !== n))
                if ((this.cancelNextCallback(), n === qi)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var r = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : t.findDOMNode(this);
                    r && Wi(r);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === Hi &&
                  this.setState({ status: $i });
            }),
            (o.performEnter = function (e) {
              var n = this,
                r = this.props.enter,
                o = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [o] : [t.findDOMNode(this), o],
                i = a[0],
                l = a[1],
                c = this.getTimeouts(),
                u = o ? c.appear : c.enter;
              (!e && !r) || Vi
                ? this.safeSetState({ status: Qi }, function () {
                    n.props.onEntered(i);
                  })
                : (this.props.onEnter(i, l),
                  this.safeSetState({ status: qi }, function () {
                    n.props.onEntering(i, l),
                      n.onTransitionEnd(u, function () {
                        n.safeSetState({ status: Qi }, function () {
                          n.props.onEntered(i, l);
                        });
                      });
                  }));
            }),
            (o.performExit = function () {
              var e = this,
                n = this.props.exit,
                r = this.getTimeouts(),
                o = this.props.nodeRef ? void 0 : t.findDOMNode(this);
              n && !Vi
                ? (this.props.onExit(o),
                  this.safeSetState({ status: Ki }, function () {
                    e.props.onExiting(o),
                      e.onTransitionEnd(r.exit, function () {
                        e.safeSetState({ status: Hi }, function () {
                          e.props.onExited(o);
                        });
                      });
                  }))
                : this.safeSetState({ status: Hi }, function () {
                    e.props.onExited(o);
                  });
            }),
            (o.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (o.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (o.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (o.onTransitionEnd = function (e, n) {
              this.setNextCallback(n);
              var r = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : t.findDOMNode(this),
                o = null == e && !this.props.addEndListener;
              if (r && !o) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef
                      ? [this.nextCallback]
                      : [r, this.nextCallback],
                    i = a[0],
                    l = a[1];
                  this.props.addEndListener(i, l);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (o.render = function () {
              var t = this.state.status;
              if (t === $i) return null;
              var n = this.props,
                r = n.children,
                o =
                  (n.in,
                  n.mountOnEnter,
                  n.unmountOnExit,
                  n.appear,
                  n.enter,
                  n.exit,
                  n.timeout,
                  n.addEndListener,
                  n.onEnter,
                  n.onEntering,
                  n.onEntered,
                  n.onExit,
                  n.onExiting,
                  n.onExited,
                  n.nodeRef,
                  Ai(n, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return e.createElement(
                Ui.Provider,
                { value: null },
                "function" == typeof r
                  ? r(t, o)
                  : e.cloneElement(e.Children.only(r), o),
              );
            }),
            r
          );
        })(e.Component);
      function Yi() {}
      (Xi.contextType = Ui),
        (Xi.propTypes = {}),
        (Xi.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: Yi,
          onEntering: Yi,
          onEntered: Yi,
          onExit: Yi,
          onExiting: Yi,
          onExited: Yi,
        }),
        (Xi.UNMOUNTED = $i),
        (Xi.EXITED = Hi),
        (Xi.ENTERING = qi),
        (Xi.ENTERED = Qi),
        (Xi.EXITING = Ki);
      const Gi = Xi;
      var Zi = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.remove(r)
                  : "string" == typeof n.className
                    ? (n.className = Bi(n.className, r))
                    : n.setAttribute(
                        "class",
                        Bi((n.className && n.className.baseVal) || "", r),
                      ))
              );
              var n, r;
            })
          );
        },
        Ji = (function (t) {
          function n() {
            for (
              var e, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(r)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (e.onEnter = function (t, n) {
                var r = e.resolveArguments(t, n),
                  o = r[0],
                  a = r[1];
                e.removeClasses(o, "exit"),
                  e.addClass(o, a ? "appear" : "enter", "base"),
                  e.props.onEnter && e.props.onEnter(t, n);
              }),
              (e.onEntering = function (t, n) {
                var r = e.resolveArguments(t, n),
                  o = r[0],
                  a = r[1] ? "appear" : "enter";
                e.addClass(o, a, "active"),
                  e.props.onEntering && e.props.onEntering(t, n);
              }),
              (e.onEntered = function (t, n) {
                var r = e.resolveArguments(t, n),
                  o = r[0],
                  a = r[1] ? "appear" : "enter";
                e.removeClasses(o, a),
                  e.addClass(o, a, "done"),
                  e.props.onEntered && e.props.onEntered(t, n);
              }),
              (e.onExit = function (t) {
                var n = e.resolveArguments(t)[0];
                e.removeClasses(n, "appear"),
                  e.removeClasses(n, "enter"),
                  e.addClass(n, "exit", "base"),
                  e.props.onExit && e.props.onExit(t);
              }),
              (e.onExiting = function (t) {
                var n = e.resolveArguments(t)[0];
                e.addClass(n, "exit", "active"),
                  e.props.onExiting && e.props.onExiting(t);
              }),
              (e.onExited = function (t) {
                var n = e.resolveArguments(t)[0];
                e.removeClasses(n, "exit"),
                  e.addClass(n, "exit", "done"),
                  e.props.onExited && e.props.onExited(t);
              }),
              (e.resolveArguments = function (t, n) {
                return e.props.nodeRef ? [e.props.nodeRef.current, t] : [t, n];
              }),
              (e.getClassNames = function (t) {
                var n = e.props.classNames,
                  r = "string" == typeof n,
                  o = r ? "" + (r && n ? n + "-" : "") + t : n[t];
                return {
                  baseClassName: o,
                  activeClassName: r ? o + "-active" : n[t + "Active"],
                  doneClassName: r ? o + "-done" : n[t + "Done"],
                };
              }),
              e
            );
          }
          Fi(n, t);
          var r = n.prototype;
          return (
            (r.addClass = function (e, t, n) {
              var r = this.getClassNames(t)[n + "ClassName"],
                o = this.getClassNames("enter").doneClassName;
              "appear" === t && "done" === n && o && (r += " " + o),
                "active" === n && e && Wi(e),
                r &&
                  ((this.appliedClasses[t][n] = r),
                  (function (e, t) {
                    e &&
                      t &&
                      t.split(" ").forEach(function (t) {
                        return (
                          (r = t),
                          void ((n = e).classList
                            ? n.classList.add(r)
                            : (function (e, t) {
                                return e.classList
                                  ? !!t && e.classList.contains(t)
                                  : -1 !==
                                      (
                                        " " +
                                        (e.className.baseVal || e.className) +
                                        " "
                                      ).indexOf(" " + t + " ");
                              })(n, r) ||
                              ("string" == typeof n.className
                                ? (n.className = n.className + " " + r)
                                : n.setAttribute(
                                    "class",
                                    ((n.className && n.className.baseVal) ||
                                      "") +
                                      " " +
                                      r,
                                  )))
                        );
                        var n, r;
                      });
                  })(e, r));
            }),
            (r.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                r = n.base,
                o = n.active,
                a = n.done;
              (this.appliedClasses[t] = {}),
                r && Zi(e, r),
                o && Zi(e, o),
                a && Zi(e, a);
            }),
            (r.render = function () {
              var t = this.props,
                n = (t.classNames, Ai(t, ["classNames"]));
              return e.createElement(
                Gi,
                Mi({}, n, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                }),
              );
            }),
            n
          );
        })(e.Component);
      (Ji.defaultProps = { classNames: "" }), (Ji.propTypes = {});
      const el = Ji;
      function tl(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function nl(e) {
        return e instanceof tl(e).Element || e instanceof Element;
      }
      function rl(e) {
        return e instanceof tl(e).HTMLElement || e instanceof HTMLElement;
      }
      function ol(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof tl(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var al = Math.max,
        il = Math.min,
        ll = Math.round;
      function cl(e, t) {
        void 0 === t && (t = !1);
        var n = e.getBoundingClientRect(),
          r = 1,
          o = 1;
        if (rl(e) && t) {
          var a = e.offsetHeight,
            i = e.offsetWidth;
          i > 0 && (r = ll(n.width) / i || 1),
            a > 0 && (o = ll(n.height) / a || 1);
        }
        return {
          width: n.width / r,
          height: n.height / o,
          top: n.top / o,
          right: n.right / r,
          bottom: n.bottom / o,
          left: n.left / r,
          x: n.left / r,
          y: n.top / o,
        };
      }
      function ul(e) {
        var t = tl(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function sl(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function fl(e) {
        return ((nl(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function dl(e) {
        return cl(fl(e)).left + ul(e).scrollLeft;
      }
      function pl(e) {
        return tl(e).getComputedStyle(e);
      }
      function ml(e) {
        var t = pl(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function gl(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          o,
          a = rl(t),
          i =
            rl(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = ll(t.width) / e.offsetWidth || 1,
                r = ll(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          l = fl(t),
          c = cl(e, i),
          u = { scrollLeft: 0, scrollTop: 0 },
          s = { x: 0, y: 0 };
        return (
          (a || (!a && !n)) &&
            (("body" !== sl(t) || ml(l)) &&
              (u =
                (r = t) !== tl(r) && rl(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : ul(r)),
            rl(t)
              ? (((s = cl(t, !0)).x += t.clientLeft), (s.y += t.clientTop))
              : l && (s.x = dl(l))),
          {
            x: c.left + u.scrollLeft - s.x,
            y: c.top + u.scrollTop - s.y,
            width: c.width,
            height: c.height,
          }
        );
      }
      function hl(e) {
        var t = cl(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function vl(e) {
        return "html" === sl(e)
          ? e
          : e.assignedSlot || e.parentNode || (ol(e) ? e.host : null) || fl(e);
      }
      function yl(e) {
        return ["html", "body", "#document"].indexOf(sl(e)) >= 0
          ? e.ownerDocument.body
          : rl(e) && ml(e)
            ? e
            : yl(vl(e));
      }
      function bl(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = yl(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          a = tl(r),
          i = o ? [a].concat(a.visualViewport || [], ml(r) ? r : []) : r,
          l = t.concat(i);
        return o ? l : l.concat(bl(vl(i)));
      }
      function _l(e) {
        return ["table", "td", "th"].indexOf(sl(e)) >= 0;
      }
      function wl(e) {
        return rl(e) && "fixed" !== pl(e).position ? e.offsetParent : null;
      }
      function Ol(e) {
        for (
          var t = tl(e), n = wl(e);
          n && _l(n) && "static" === pl(n).position;

        )
          n = wl(n);
        return n &&
          ("html" === sl(n) ||
            ("body" === sl(n) && "static" === pl(n).position))
          ? t
          : n ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  rl(e) &&
                  "fixed" === pl(e).position
                )
                  return null;
                var n = vl(e);
                for (
                  ol(n) && (n = n.host);
                  rl(n) && ["html", "body"].indexOf(sl(n)) < 0;

                ) {
                  var r = pl(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var El = "top",
        kl = "bottom",
        xl = "right",
        Sl = "left",
        Pl = "auto",
        jl = [El, kl, xl, Sl],
        Cl = "start",
        Nl = "end",
        Tl = "viewport",
        Dl = "popper",
        zl = jl.reduce(function (e, t) {
          return e.concat([t + "-" + Cl, t + "-" + Nl]);
        }, []),
        Ll = [].concat(jl, [Pl]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Cl, t + "-" + Nl]);
        }, []),
        Il = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function Ml(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function o(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && o(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || o(e);
          }),
          r
        );
      }
      var Al = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Rl() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function Fl(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          a = void 0 === o ? Al : o;
        return function (e, t, n) {
          void 0 === n && (n = a);
          var o,
            i,
            l = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Al, a),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            c = [],
            u = !1,
            s = {
              state: l,
              setOptions: function (n) {
                var o = "function" == typeof n ? n(l.options) : n;
                f(),
                  (l.options = Object.assign({}, a, l.options, o)),
                  (l.scrollParents = {
                    reference: nl(e)
                      ? bl(e)
                      : e.contextElement
                        ? bl(e.contextElement)
                        : [],
                    popper: bl(t),
                  });
                var i = (function (e) {
                  var t = Ml(e);
                  return Il.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      }),
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(r, l.options.modifiers)),
                );
                return (
                  (l.orderedModifiers = i.filter(function (e) {
                    return e.enabled;
                  })),
                  l.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      o = e.effect;
                    if ("function" == typeof o) {
                      var a = o({ state: l, name: t, instance: s, options: r }),
                        i = function () {};
                      c.push(a || i);
                    }
                  }),
                  s.update()
                );
              },
              forceUpdate: function () {
                if (!u) {
                  var e = l.elements,
                    t = e.reference,
                    n = e.popper;
                  if (Rl(t, n)) {
                    (l.rects = {
                      reference: gl(t, Ol(n), "fixed" === l.options.strategy),
                      popper: hl(n),
                    }),
                      (l.reset = !1),
                      (l.placement = l.options.placement),
                      l.orderedModifiers.forEach(function (e) {
                        return (l.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      });
                    for (var r = 0; r < l.orderedModifiers.length; r++)
                      if (!0 !== l.reset) {
                        var o = l.orderedModifiers[r],
                          a = o.fn,
                          i = o.options,
                          c = void 0 === i ? {} : i,
                          f = o.name;
                        "function" == typeof a &&
                          (l =
                            a({ state: l, options: c, name: f, instance: s }) ||
                            l);
                      } else (l.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    s.forceUpdate(), e(l);
                  });
                }),
                function () {
                  return (
                    i ||
                      (i = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (i = void 0), e(o());
                        });
                      })),
                    i
                  );
                }),
              destroy: function () {
                f(), (u = !0);
              },
            };
          if (!Rl(e, t)) return s;
          function f() {
            c.forEach(function (e) {
              return e();
            }),
              (c = []);
          }
          return (
            s.setOptions(n).then(function (e) {
              !u && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            s
          );
        };
      }
      var Bl = { passive: !0 };
      function Vl(e) {
        return e.split("-")[0];
      }
      function Ul(e) {
        return e.split("-")[1];
      }
      function Wl(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function $l(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          a = o ? Vl(o) : null,
          i = o ? Ul(o) : null,
          l = n.x + n.width / 2 - r.width / 2,
          c = n.y + n.height / 2 - r.height / 2;
        switch (a) {
          case El:
            t = { x: l, y: n.y - r.height };
            break;
          case kl:
            t = { x: l, y: n.y + n.height };
            break;
          case xl:
            t = { x: n.x + n.width, y: c };
            break;
          case Sl:
            t = { x: n.x - r.width, y: c };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var u = a ? Wl(a) : null;
        if (null != u) {
          var s = "y" === u ? "height" : "width";
          switch (i) {
            case Cl:
              t[u] = t[u] - (n[s] / 2 - r[s] / 2);
              break;
            case Nl:
              t[u] = t[u] + (n[s] / 2 - r[s] / 2);
          }
        }
        return t;
      }
      var Hl = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function ql(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          a = e.variation,
          i = e.offsets,
          l = e.position,
          c = e.gpuAcceleration,
          u = e.adaptive,
          s = e.roundOffsets,
          f = e.isFixed,
          d = i.x,
          p = void 0 === d ? 0 : d,
          m = i.y,
          g = void 0 === m ? 0 : m,
          h = "function" == typeof s ? s({ x: p, y: g }) : { x: p, y: g };
        (p = h.x), (g = h.y);
        var v = i.hasOwnProperty("x"),
          y = i.hasOwnProperty("y"),
          b = Sl,
          _ = El,
          w = window;
        if (u) {
          var O = Ol(n),
            E = "clientHeight",
            k = "clientWidth";
          if (
            (O === tl(n) &&
              "static" !== pl((O = fl(n))).position &&
              "absolute" === l &&
              ((E = "scrollHeight"), (k = "scrollWidth")),
            o === El || ((o === Sl || o === xl) && a === Nl))
          )
            (_ = kl),
              (g -=
                (f && O === w && w.visualViewport
                  ? w.visualViewport.height
                  : O[E]) - r.height),
              (g *= c ? 1 : -1);
          if (o === Sl || ((o === El || o === kl) && a === Nl))
            (b = xl),
              (p -=
                (f && O === w && w.visualViewport
                  ? w.visualViewport.width
                  : O[k]) - r.width),
              (p *= c ? 1 : -1);
        }
        var x,
          S = Object.assign({ position: l }, u && Hl),
          P =
            !0 === s
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    r = window.devicePixelRatio || 1;
                  return { x: ll(t * r) / r || 0, y: ll(n * r) / r || 0 };
                })({ x: p, y: g })
              : { x: p, y: g };
        return (
          (p = P.x),
          (g = P.y),
          c
            ? Object.assign(
                {},
                S,
                (((x = {})[_] = y ? "0" : ""),
                (x[b] = v ? "0" : ""),
                (x.transform =
                  (w.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + g + "px)"
                    : "translate3d(" + p + "px, " + g + "px, 0)"),
                x),
              )
            : Object.assign(
                {},
                S,
                (((t = {})[_] = y ? g + "px" : ""),
                (t[b] = v ? p + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const Ql = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            a = void 0 === o ? [0, 0] : o,
            i = Ll.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = Vl(e),
                    o = [Sl, El].indexOf(r) >= 0 ? -1 : 1,
                    a =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    i = a[0],
                    l = a[1];
                  return (
                    (i = i || 0),
                    (l = (l || 0) * o),
                    [Sl, xl].indexOf(r) >= 0 ? { x: l, y: i } : { x: i, y: l }
                  );
                })(n, t.rects, a)),
                e
              );
            }, {}),
            l = i[t.placement],
            c = l.x,
            u = l.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += c),
            (t.modifiersData.popperOffsets.y += u)),
            (t.modifiersData[r] = i);
        },
      };
      var Kl = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Xl(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Kl[e];
        });
      }
      var Yl = { start: "end", end: "start" };
      function Gl(e) {
        return e.replace(/start|end/g, function (e) {
          return Yl[e];
        });
      }
      function Zl(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && ol(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function Jl(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function ec(e, t) {
        return t === Tl
          ? Jl(
              (function (e) {
                var t = tl(e),
                  n = fl(e),
                  r = t.visualViewport,
                  o = n.clientWidth,
                  a = n.clientHeight,
                  i = 0,
                  l = 0;
                return (
                  r &&
                    ((o = r.width),
                    (a = r.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent,
                    ) || ((i = r.offsetLeft), (l = r.offsetTop))),
                  { width: o, height: a, x: i + dl(e), y: l }
                );
              })(e),
            )
          : nl(t)
            ? (function (e) {
                var t = cl(e);
                return (
                  (t.top = t.top + e.clientTop),
                  (t.left = t.left + e.clientLeft),
                  (t.bottom = t.top + e.clientHeight),
                  (t.right = t.left + e.clientWidth),
                  (t.width = e.clientWidth),
                  (t.height = e.clientHeight),
                  (t.x = t.left),
                  (t.y = t.top),
                  t
                );
              })(t)
            : Jl(
                (function (e) {
                  var t,
                    n = fl(e),
                    r = ul(e),
                    o = null == (t = e.ownerDocument) ? void 0 : t.body,
                    a = al(
                      n.scrollWidth,
                      n.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0,
                    ),
                    i = al(
                      n.scrollHeight,
                      n.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0,
                    ),
                    l = -r.scrollLeft + dl(e),
                    c = -r.scrollTop;
                  return (
                    "rtl" === pl(o || n).direction &&
                      (l += al(n.clientWidth, o ? o.clientWidth : 0) - a),
                    { width: a, height: i, x: l, y: c }
                  );
                })(fl(e)),
              );
      }
      function tc(e, t, n) {
        var r =
            "clippingParents" === t
              ? (function (e) {
                  var t = bl(vl(e)),
                    n =
                      ["absolute", "fixed"].indexOf(pl(e).position) >= 0 &&
                      rl(e)
                        ? Ol(e)
                        : e;
                  return nl(n)
                    ? t.filter(function (e) {
                        return nl(e) && Zl(e, n) && "body" !== sl(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          o = [].concat(r, [n]),
          a = o[0],
          i = o.reduce(
            function (t, n) {
              var r = ec(e, n);
              return (
                (t.top = al(r.top, t.top)),
                (t.right = il(r.right, t.right)),
                (t.bottom = il(r.bottom, t.bottom)),
                (t.left = al(r.left, t.left)),
                t
              );
            },
            ec(e, a),
          );
        return (
          (i.width = i.right - i.left),
          (i.height = i.bottom - i.top),
          (i.x = i.left),
          (i.y = i.top),
          i
        );
      }
      function nc(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function rc(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function oc(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          a = n.boundary,
          i = void 0 === a ? "clippingParents" : a,
          l = n.rootBoundary,
          c = void 0 === l ? Tl : l,
          u = n.elementContext,
          s = void 0 === u ? Dl : u,
          f = n.altBoundary,
          d = void 0 !== f && f,
          p = n.padding,
          m = void 0 === p ? 0 : p,
          g = nc("number" != typeof m ? m : rc(m, jl)),
          h = s === Dl ? "reference" : Dl,
          v = e.rects.popper,
          y = e.elements[d ? h : s],
          b = tc(nl(y) ? y : y.contextElement || fl(e.elements.popper), i, c),
          _ = cl(e.elements.reference),
          w = $l({
            reference: _,
            element: v,
            strategy: "absolute",
            placement: o,
          }),
          O = Jl(Object.assign({}, v, w)),
          E = s === Dl ? O : _,
          k = {
            top: b.top - E.top + g.top,
            bottom: E.bottom - b.bottom + g.bottom,
            left: b.left - E.left + g.left,
            right: E.right - b.right + g.right,
          },
          x = e.modifiersData.offset;
        if (s === Dl && x) {
          var S = x[o];
          Object.keys(k).forEach(function (e) {
            var t = [xl, kl].indexOf(e) >= 0 ? 1 : -1,
              n = [El, kl].indexOf(e) >= 0 ? "y" : "x";
            k[e] += S[n] * t;
          });
        }
        return k;
      }
      function ac(e, t, n) {
        return al(e, il(t, n));
      }
      const ic = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            a = void 0 === o || o,
            i = n.altAxis,
            l = void 0 !== i && i,
            c = n.boundary,
            u = n.rootBoundary,
            s = n.altBoundary,
            f = n.padding,
            d = n.tether,
            p = void 0 === d || d,
            m = n.tetherOffset,
            g = void 0 === m ? 0 : m,
            h = oc(t, {
              boundary: c,
              rootBoundary: u,
              padding: f,
              altBoundary: s,
            }),
            v = Vl(t.placement),
            y = Ul(t.placement),
            b = !y,
            _ = Wl(v),
            w = "x" === _ ? "y" : "x",
            O = t.modifiersData.popperOffsets,
            E = t.rects.reference,
            k = t.rects.popper,
            x =
              "function" == typeof g
                ? g(Object.assign({}, t.rects, { placement: t.placement }))
                : g,
            S =
              "number" == typeof x
                ? { mainAxis: x, altAxis: x }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, x),
            P = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            j = { x: 0, y: 0 };
          if (O) {
            if (a) {
              var C,
                N = "y" === _ ? El : Sl,
                T = "y" === _ ? kl : xl,
                D = "y" === _ ? "height" : "width",
                z = O[_],
                L = z + h[N],
                I = z - h[T],
                M = p ? -k[D] / 2 : 0,
                A = y === Cl ? E[D] : k[D],
                R = y === Cl ? -k[D] : -E[D],
                F = t.elements.arrow,
                B = p && F ? hl(F) : { width: 0, height: 0 },
                V = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                U = V[N],
                W = V[T],
                $ = ac(0, E[D], B[D]),
                H = b
                  ? E[D] / 2 - M - $ - U - S.mainAxis
                  : A - $ - U - S.mainAxis,
                q = b
                  ? -E[D] / 2 + M + $ + W + S.mainAxis
                  : R + $ + W + S.mainAxis,
                Q = t.elements.arrow && Ol(t.elements.arrow),
                K = Q ? ("y" === _ ? Q.clientTop || 0 : Q.clientLeft || 0) : 0,
                X = null != (C = null == P ? void 0 : P[_]) ? C : 0,
                Y = z + q - X,
                G = ac(p ? il(L, z + H - X - K) : L, z, p ? al(I, Y) : I);
              (O[_] = G), (j[_] = G - z);
            }
            if (l) {
              var Z,
                J = "x" === _ ? El : Sl,
                ee = "x" === _ ? kl : xl,
                te = O[w],
                ne = "y" === w ? "height" : "width",
                re = te + h[J],
                oe = te - h[ee],
                ae = -1 !== [El, Sl].indexOf(v),
                ie = null != (Z = null == P ? void 0 : P[w]) ? Z : 0,
                le = ae ? re : te - E[ne] - k[ne] - ie + S.altAxis,
                ce = ae ? te + E[ne] + k[ne] - ie - S.altAxis : oe,
                ue =
                  p && ae
                    ? (function (e, t, n) {
                        var r = ac(e, t, n);
                        return r > n ? n : r;
                      })(le, te, ce)
                    : ac(p ? le : re, te, p ? ce : oe);
              (O[w] = ue), (j[w] = ue - te);
            }
            t.modifiersData[r] = j;
          }
        },
        requiresIfExists: ["offset"],
      };
      const lc = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            o = e.options,
            a = n.elements.arrow,
            i = n.modifiersData.popperOffsets,
            l = Vl(n.placement),
            c = Wl(l),
            u = [Sl, xl].indexOf(l) >= 0 ? "height" : "width";
          if (a && i) {
            var s = (function (e, t) {
                return nc(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            }),
                          )
                        : e)
                    ? e
                    : rc(e, jl),
                );
              })(o.padding, n),
              f = hl(a),
              d = "y" === c ? El : Sl,
              p = "y" === c ? kl : xl,
              m =
                n.rects.reference[u] +
                n.rects.reference[c] -
                i[c] -
                n.rects.popper[u],
              g = i[c] - n.rects.reference[c],
              h = Ol(a),
              v = h
                ? "y" === c
                  ? h.clientHeight || 0
                  : h.clientWidth || 0
                : 0,
              y = m / 2 - g / 2,
              b = s[d],
              _ = v - f[u] - s[p],
              w = v / 2 - f[u] / 2 + y,
              O = ac(b, w, _),
              E = c;
            n.modifiersData[r] =
              (((t = {})[E] = O), (t.centerOffset = O - w), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            Zl(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function cc(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function uc(e) {
        return [El, xl, kl, Sl].some(function (t) {
          return e[t] >= 0;
        });
      }
      var sc = Fl({
          defaultModifiers: [
            {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function () {},
              effect: function (e) {
                var t = e.state,
                  n = e.instance,
                  r = e.options,
                  o = r.scroll,
                  a = void 0 === o || o,
                  i = r.resize,
                  l = void 0 === i || i,
                  c = tl(t.elements.popper),
                  u = [].concat(
                    t.scrollParents.reference,
                    t.scrollParents.popper,
                  );
                return (
                  a &&
                    u.forEach(function (e) {
                      e.addEventListener("scroll", n.update, Bl);
                    }),
                  l && c.addEventListener("resize", n.update, Bl),
                  function () {
                    a &&
                      u.forEach(function (e) {
                        e.removeEventListener("scroll", n.update, Bl);
                      }),
                      l && c.removeEventListener("resize", n.update, Bl);
                  }
                );
              },
              data: {},
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = $l({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = n.gpuAcceleration,
                  o = void 0 === r || r,
                  a = n.adaptive,
                  i = void 0 === a || a,
                  l = n.roundOffsets,
                  c = void 0 === l || l,
                  u = {
                    placement: Vl(t.placement),
                    variation: Ul(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    ql(
                      Object.assign({}, u, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: i,
                        roundOffsets: c,
                      }),
                    ),
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      ql(
                        Object.assign({}, u, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: c,
                        }),
                      ),
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement },
                  ));
              },
              data: {},
            },
            {
              name: "applyStyles",
              enabled: !0,
              phase: "write",
              fn: function (e) {
                var t = e.state;
                Object.keys(t.elements).forEach(function (e) {
                  var n = t.styles[e] || {},
                    r = t.attributes[e] || {},
                    o = t.elements[e];
                  rl(o) &&
                    sl(o) &&
                    (Object.assign(o.style, n),
                    Object.keys(r).forEach(function (e) {
                      var t = r[e];
                      !1 === t
                        ? o.removeAttribute(e)
                        : o.setAttribute(e, !0 === t ? "" : t);
                    }));
                });
              },
              effect: function (e) {
                var t = e.state,
                  n = {
                    popper: {
                      position: t.options.strategy,
                      left: "0",
                      top: "0",
                      margin: "0",
                    },
                    arrow: { position: "absolute" },
                    reference: {},
                  };
                return (
                  Object.assign(t.elements.popper.style, n.popper),
                  (t.styles = n),
                  t.elements.arrow &&
                    Object.assign(t.elements.arrow.style, n.arrow),
                  function () {
                    Object.keys(t.elements).forEach(function (e) {
                      var r = t.elements[e],
                        o = t.attributes[e] || {},
                        a = Object.keys(
                          t.styles.hasOwnProperty(e) ? t.styles[e] : n[e],
                        ).reduce(function (e, t) {
                          return (e[t] = ""), e;
                        }, {});
                      rl(r) &&
                        sl(r) &&
                        (Object.assign(r.style, a),
                        Object.keys(o).forEach(function (e) {
                          r.removeAttribute(e);
                        }));
                    });
                  }
                );
              },
              requires: ["computeStyles"],
            },
            Ql,
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name;
                if (!t.modifiersData[r]._skip) {
                  for (
                    var o = n.mainAxis,
                      a = void 0 === o || o,
                      i = n.altAxis,
                      l = void 0 === i || i,
                      c = n.fallbackPlacements,
                      u = n.padding,
                      s = n.boundary,
                      f = n.rootBoundary,
                      d = n.altBoundary,
                      p = n.flipVariations,
                      m = void 0 === p || p,
                      g = n.allowedAutoPlacements,
                      h = t.options.placement,
                      v = Vl(h),
                      y =
                        c ||
                        (v === h || !m
                          ? [Xl(h)]
                          : (function (e) {
                              if (Vl(e) === Pl) return [];
                              var t = Xl(e);
                              return [Gl(e), t, Gl(t)];
                            })(h)),
                      b = [h].concat(y).reduce(function (e, n) {
                        return e.concat(
                          Vl(n) === Pl
                            ? (function (e, t) {
                                void 0 === t && (t = {});
                                var n = t,
                                  r = n.placement,
                                  o = n.boundary,
                                  a = n.rootBoundary,
                                  i = n.padding,
                                  l = n.flipVariations,
                                  c = n.allowedAutoPlacements,
                                  u = void 0 === c ? Ll : c,
                                  s = Ul(r),
                                  f = s
                                    ? l
                                      ? zl
                                      : zl.filter(function (e) {
                                          return Ul(e) === s;
                                        })
                                    : jl,
                                  d = f.filter(function (e) {
                                    return u.indexOf(e) >= 0;
                                  });
                                0 === d.length && (d = f);
                                var p = d.reduce(function (t, n) {
                                  return (
                                    (t[n] = oc(e, {
                                      placement: n,
                                      boundary: o,
                                      rootBoundary: a,
                                      padding: i,
                                    })[Vl(n)]),
                                    t
                                  );
                                }, {});
                                return Object.keys(p).sort(function (e, t) {
                                  return p[e] - p[t];
                                });
                              })(t, {
                                placement: n,
                                boundary: s,
                                rootBoundary: f,
                                padding: u,
                                flipVariations: m,
                                allowedAutoPlacements: g,
                              })
                            : n,
                        );
                      }, []),
                      _ = t.rects.reference,
                      w = t.rects.popper,
                      O = new Map(),
                      E = !0,
                      k = b[0],
                      x = 0;
                    x < b.length;
                    x++
                  ) {
                    var S = b[x],
                      P = Vl(S),
                      j = Ul(S) === Cl,
                      C = [El, kl].indexOf(P) >= 0,
                      N = C ? "width" : "height",
                      T = oc(t, {
                        placement: S,
                        boundary: s,
                        rootBoundary: f,
                        altBoundary: d,
                        padding: u,
                      }),
                      D = C ? (j ? xl : Sl) : j ? kl : El;
                    _[N] > w[N] && (D = Xl(D));
                    var z = Xl(D),
                      L = [];
                    if (
                      (a && L.push(T[P] <= 0),
                      l && L.push(T[D] <= 0, T[z] <= 0),
                      L.every(function (e) {
                        return e;
                      }))
                    ) {
                      (k = S), (E = !1);
                      break;
                    }
                    O.set(S, L);
                  }
                  if (E)
                    for (
                      var I = function (e) {
                          var t = b.find(function (t) {
                            var n = O.get(t);
                            if (n)
                              return n.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (k = t), "break";
                        },
                        M = m ? 3 : 1;
                      M > 0;
                      M--
                    ) {
                      if ("break" === I(M)) break;
                    }
                  t.placement !== k &&
                    ((t.modifiersData[r]._skip = !0),
                    (t.placement = k),
                    (t.reset = !0));
                }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 },
            },
            ic,
            lc,
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  o = t.rects.popper,
                  a = t.modifiersData.preventOverflow,
                  i = oc(t, { elementContext: "reference" }),
                  l = oc(t, { altBoundary: !0 }),
                  c = cc(i, r),
                  u = cc(l, o, a),
                  s = uc(c),
                  f = uc(u);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: c,
                  popperEscapeOffsets: u,
                  isReferenceHidden: s,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": s,
                      "data-popper-escaped": f,
                    },
                  ));
              },
            },
          ],
        }),
        fc = n(2330),
        dc = n.n(fc),
        pc = function (e) {
          return e.reduce(function (e, t) {
            var n = t[0],
              r = t[1];
            return (e[n] = r), e;
          }, {});
        },
        mc =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
            ? e.useLayoutEffect
            : e.useEffect,
        gc = [],
        hc = n(2037);
      function vc(e) {
        return e.current &&
          "object" === l(e.current) &&
          "currentElement" in e.current
          ? e.current.currentElement
          : e.current;
      }
      function yc(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return bc(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return bc(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var a,
          i = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (l = !0), (a = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (l) throw a;
            }
          },
        };
      }
      function bc(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function _c(t) {
        var n = t.content,
          r = t.disabled,
          o = t.trigger,
          a = t.visible,
          i = t.onVisibleChange,
          l = t.triggerRef,
          c = io().classPrefix,
          u = (0, e.useRef)(!1),
          s = (0, e.useRef)(0),
          f = (0, e.useRef)(
            "".concat(c, "-popup--").concat(Math.random().toFixed(10)),
          ),
          d = !r && n;
        function m(e) {
          if (!d) return {};
          var t,
            n,
            r,
            u,
            s = {
              className: a
                ? p()(e.props.className, "".concat(c, "-popup-open"))
                : e.props.className,
              onClick: function (t) {
                var n, r;
                "click" === o &&
                  i(!a, { e: t, trigger: "trigger-element-click" }),
                  null === (n = (r = e.props).onClick) ||
                    void 0 === n ||
                    n.call(r, t);
              },
              onTouchStart: function (t) {
                var n, r;
                "hover" === o &&
                  i(!0, { e: t, trigger: "trigger-element-hover" }),
                  null === (n = (r = e.props).onTouchStart) ||
                    void 0 === n ||
                    n.call(r, t);
              },
              onMouseEnter: function (t) {
                var n, r;
                "hover" === o &&
                  i(!0, { e: t, trigger: "trigger-element-hover" }),
                  null === (n = (r = e.props).onMouseEnter) ||
                    void 0 === n ||
                    n.call(r, t);
              },
              onMouseLeave: function (t) {
                var n, r;
                "hover" === o &&
                  i(!1, { e: t, trigger: "trigger-element-hover" }),
                  null === (n = (r = e.props).onMouseLeave) ||
                    void 0 === n ||
                    n.call(r, t);
              },
              onFocus: function () {
                var t, n;
                "focus" === o && i(!0, { trigger: "trigger-element-focus" });
                for (
                  var r = arguments.length, a = new Array(r), l = 0;
                  l < r;
                  l++
                )
                  a[l] = arguments[l];
                null === (t = (n = e.props).onFocus) ||
                  void 0 === t ||
                  t.call.apply(t, [n].concat(a));
              },
              onBlur: function () {
                var t, n;
                "focus" === o && i(!1, { trigger: "trigger-element-blur" });
                for (
                  var r = arguments.length, a = new Array(r), l = 0;
                  l < r;
                  l++
                )
                  a[l] = arguments[l];
                null === (t = (n = e.props).onBlur) ||
                  void 0 === t ||
                  t.call.apply(t, [n].concat(a));
              },
              onContextMenu: function (t) {
                var n, r;
                "context-menu" === o &&
                  i(!0, { e: t, trigger: "context-menu" }),
                  null === (n = (r = e.props).onContextMenu) ||
                    void 0 === n ||
                    n.call(r, t);
              },
              onKeyDown: function (t) {
                var n, r;
                "Escape" === (null == t ? void 0 : t.key) &&
                  i(!1, { e: t, trigger: "keydown-esc" }),
                  null === (n = (r = e.props).onKeyDown) ||
                    void 0 === n ||
                    n.call(r, t);
              },
            };
          return (
            (t = e),
            ("function" !=
              typeof (u = (0, hc.isMemo)(t) ? t.type.type : t.type) ||
              (null !== (n = u.prototype) && void 0 !== n && n.render)) &&
            ("function" != typeof t ||
              (null !== (r = t.prototype) && void 0 !== r && r.render))
              ? (s.ref = (function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return function (e) {
                    var n,
                      r = yc(t);
                    try {
                      for (r.s(); !(n = r.n()).done; ) {
                        var o = n.value;
                        "function" == typeof o ? o(e) : o && (o.current = e);
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                  };
                })(l, e.ref))
              : (s["data-popup"] = f.current),
            s
          );
        }
        return (
          (0, e.useEffect)(
            function () {
              if (d) {
                var e = function (e) {
                  var t, n;
                  (null !== (t = vc(l)) &&
                    void 0 !== t &&
                    null !== (n = t.contains) &&
                    void 0 !== n &&
                    n.call(t, e.target)) ||
                    u.current ||
                    (a && i(!1, { e, trigger: "document" }));
                };
                return (
                  document.addEventListener("mousedown", e),
                  document.addEventListener("touchend", e),
                  function () {
                    document.removeEventListener("mousedown", e),
                      document.removeEventListener("touchend", e);
                  }
                );
              }
            },
            [d, a, i, l],
          ),
          {
            getTriggerNode: function (t) {
              var n =
                (0, e.isValidElement)(t) && !(0, hc.isFragment)(t)
                  ? t
                  : e.createElement(
                      "span",
                      { className: "".concat(c, "-trigger") },
                      t,
                    );
              return e.cloneElement(n, m(n));
            },
            getPopupProps: function () {
              return d
                ? {
                    onMouseEnter: function (e) {
                      "hover" === o &&
                        i(!0, { e, trigger: "trigger-element-hover" });
                    },
                    onMouseLeave: function (e) {
                      "hover" === o &&
                        i(!1, { e, trigger: "trigger-element-hover" });
                    },
                    onMouseDown: function () {
                      clearTimeout(s.current),
                        (u.current = !0),
                        (s.current = window.setTimeout(function () {
                          u.current = !1;
                        }));
                    },
                    onTouchEnd: function () {
                      clearTimeout(s.current),
                        (u.current = !0),
                        (s.current = window.setTimeout(function () {
                          u.current = !1;
                        }));
                    },
                  }
                : {};
            },
            getTriggerDom: (0, e.useCallback)(function () {
              return document.querySelector(
                '[data-popup="'.concat(f.current, '"]'),
              );
            }, []),
          }
        );
      }
      var wc = /\s/;
      var Oc = function (e) {
          for (var t = e.length; t-- && wc.test(e.charAt(t)); );
          return t;
        },
        Ec = /^\s+/;
      var kc = function (e) {
          return e ? e.slice(0, Oc(e) + 1).replace(Ec, "") : e;
        },
        xc = G,
        Sc = da,
        Pc = /^[-+]0x[0-9a-f]+$/i,
        jc = /^0b[01]+$/i,
        Cc = /^0o[0-7]+$/i,
        Nc = parseInt;
      var Tc = R,
        Dc = G,
        zc = function () {
          return Tc.Date.now();
        },
        Lc = function (e) {
          if ("number" == typeof e) return e;
          if (Sc(e)) return NaN;
          if (xc(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = xc(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = kc(e);
          var n = jc.test(e);
          return n || Cc.test(e)
            ? Nc(e.slice(2), n ? 2 : 8)
            : Pc.test(e)
              ? NaN
              : +e;
        },
        Ic = Math.max,
        Mc = Math.min;
      var Ac = function (e, t, n) {
          var r,
            o,
            a,
            i,
            l,
            c,
            u = 0,
            s = !1,
            f = !1,
            d = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function p(t) {
            var n = r,
              a = o;
            return (r = o = void 0), (u = t), (i = e.apply(a, n));
          }
          function m(e) {
            return (u = e), (l = setTimeout(h, t)), s ? p(e) : i;
          }
          function g(e) {
            var n = e - c;
            return void 0 === c || n >= t || n < 0 || (f && e - u >= a);
          }
          function h() {
            var e = zc();
            if (g(e)) return v(e);
            l = setTimeout(
              h,
              (function (e) {
                var n = t - (e - c);
                return f ? Mc(n, a - (e - u)) : n;
              })(e),
            );
          }
          function v(e) {
            return (l = void 0), d && r ? p(e) : ((r = o = void 0), i);
          }
          function y() {
            var e = zc(),
              n = g(e);
            if (((r = arguments), (o = this), (c = e), n)) {
              if (void 0 === l) return m(c);
              if (f) return clearTimeout(l), (l = setTimeout(h, t)), p(c);
            }
            return void 0 === l && (l = setTimeout(h, t)), i;
          }
          return (
            (t = Lc(t) || 0),
            Dc(n) &&
              ((s = !!n.leading),
              (a = (f = "maxWait" in n) ? Ic(Lc(n.maxWait) || 0, t) : a),
              (d = "trailing" in n ? !!n.trailing : d)),
            (y.cancel = function () {
              void 0 !== l && clearTimeout(l),
                (u = 0),
                (r = c = o = l = void 0);
            }),
            (y.flush = function () {
              return void 0 === l ? i : v(zc());
            }),
            y
          );
        },
        Rc = {
          debounceTime: 0,
          config: {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          },
        };
      function Fc(t, n) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rc,
          o = (0, e.useRef)(null);
        (0, e.useEffect)(
          function () {
            if (n && "function" == typeof n) {
              var e = r.debounceTime;
              o.current = new MutationObserver(e > 0 ? Ac(n, e) : n);
            }
          },
          [n, r],
        ),
          (0, e.useEffect)(
            function () {
              if (t && null != t && t.nodeType) {
                var e = r.config;
                try {
                  o.current.observe(t, e);
                } catch (e) {}
                return function () {
                  o.current.disconnect();
                };
              }
            },
            [t, r],
          );
      }
      function Bc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Vc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Bc(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Bc(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Uc = (0, e.forwardRef)(function (n, r) {
        var o = n.trigger,
          c = n.content,
          u = n.placement,
          s = n.attach,
          f = n.showArrow,
          d = n.destroyOnClose,
          m = n.overlayClassName,
          g = n.overlayInnerClassName,
          h = n.overlayStyle,
          v = n.overlayInnerStyle,
          y = n.triggerElement,
          b = n.children,
          _ = void 0 === b ? y : b,
          w = n.disabled,
          O = n.zIndex,
          E = n.onScroll,
          k = n.expandAnimation,
          x = n.delay,
          S = n.hideEmptyPopup,
          P = n.popperOptions,
          j = n.updateScrollTop,
          C = io().classPrefix,
          N = ji(),
          T = N.keepExpand,
          D = N.keepFade,
          z = (function () {
            var t =
                "object" ===
                ("undefined" == typeof window ? "undefined" : l(window)),
              n = (0, e.useCallback)(
                function () {
                  return {
                    width: t ? window.innerWidth : void 0,
                    height: t ? window.innerHeight : void 0,
                  };
                },
                [t],
              ),
              r = a((0, e.useState)(n()), 2),
              o = r[0],
              i = r[1];
            return (
              (0, e.useEffect)(
                function () {
                  var e = Ac(function () {
                    i(n());
                  }, 400);
                  if (t)
                    return (
                      window.addEventListener("resize", e),
                      function () {
                        window.removeEventListener("resize", e), e.cancel();
                      }
                    );
                },
                [n, t],
              ),
              o
            );
          })(),
          L = z.height,
          I = z.width,
          M = a(gi(n, "visible", n.onVisibleChange), 2),
          A = M[0],
          R = M[1],
          F = a((0, e.useState)(null), 2),
          B = F[0],
          V = F[1],
          U = (0, e.useRef)(null),
          W = (0, e.useRef)(null),
          $ = (0, e.useRef)(null),
          H = (0, e.useRef)(null),
          q = (0, e.useRef)(null),
          Q = a(
            (0, e.useMemo)(
              function () {
                return Array.isArray(x) ? x : [x, x];
              },
              [x],
            ),
            2,
          ),
          K = Q[0],
          X = void 0 === K ? 0 : K,
          Y = Q[1],
          G = void 0 === Y ? 0 : Y,
          Z = (0, e.useMemo)(
            function () {
              return !(S && !c) && (A || B);
            },
            [S, c, A, B],
          ),
          J = (0, e.useMemo)(
            function () {
              return u
                .replace(/-(left|top)$/, "-start")
                .replace(/-(right|bottom)$/, "-end");
            },
            [u],
          ),
          ee = _c({
            triggerRef: U,
            content: c,
            disabled: w,
            trigger: o,
            visible: A,
            onVisibleChange: R,
          }),
          te = ee.getTriggerNode,
          ne = ee.getPopupProps,
          re = ee.getTriggerDom,
          oe = te(_);
        Fc(vc(U), function () {
          var e, t;
          null === (e = q.current) ||
            void 0 === e ||
            null === (t = e.update) ||
            void 0 === t ||
            t.call(e);
        }),
          (0, e.useEffect)(
            function () {
              var e, t;
              null === (e = q.current) ||
                void 0 === e ||
                null === (t = e.update) ||
                void 0 === t ||
                t.call(e);
            },
            [A, c, L, I],
          ),
          (0, e.useEffect)(
            function () {
              U.current || (U.current = re()), A && (null == j || j(H.current));
            },
            [A, j, re],
          ),
          (q.current = (function (n, r, o) {
            void 0 === o && (o = {});
            var a = e.useRef(null),
              i = {
                onFirstUpdate: o.onFirstUpdate,
                placement: o.placement || "bottom",
                strategy: o.strategy || "absolute",
                modifiers: o.modifiers || gc,
              },
              l = e.useState({
                styles: {
                  popper: { position: i.strategy, left: "0", top: "0" },
                  arrow: { position: "absolute" },
                },
                attributes: {},
              }),
              c = l[0],
              u = l[1],
              s = e.useMemo(function () {
                return {
                  name: "updateState",
                  enabled: !0,
                  phase: "write",
                  fn: function (e) {
                    var n = e.state,
                      r = Object.keys(n.elements);
                    t.flushSync(function () {
                      u({
                        styles: pc(
                          r.map(function (e) {
                            return [e, n.styles[e] || {}];
                          }),
                        ),
                        attributes: pc(
                          r.map(function (e) {
                            return [e, n.attributes[e]];
                          }),
                        ),
                      });
                    });
                  },
                  requires: ["computeStyles"],
                };
              }, []),
              f = e.useMemo(
                function () {
                  var e = {
                    onFirstUpdate: i.onFirstUpdate,
                    placement: i.placement,
                    strategy: i.strategy,
                    modifiers: [].concat(i.modifiers, [
                      s,
                      { name: "applyStyles", enabled: !1 },
                    ]),
                  };
                  return dc()(a.current, e)
                    ? a.current || e
                    : ((a.current = e), e);
                },
                [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, s],
              ),
              d = e.useRef();
            return (
              mc(
                function () {
                  d.current && d.current.setOptions(f);
                },
                [f],
              ),
              mc(
                function () {
                  if (null != n && null != r) {
                    var e = (o.createPopper || sc)(n, r, f);
                    return (
                      (d.current = e),
                      function () {
                        e.destroy(), (d.current = null);
                      }
                    );
                  }
                },
                [n, r, o.createPopper],
              ),
              {
                state: d.current ? d.current.state : null,
                styles: c.styles,
                attributes: c.attributes,
                update: d.current ? d.current.update : null,
                forceUpdate: d.current ? d.current.forceUpdate : null,
              }
            );
          })(vc(U), B, Vc({ placement: J }, P)));
        var ae = q.current,
          ie = ae.styles,
          le = ae.attributes;
        function ce(e) {
          return vc(U) && W.current && "function" == typeof e
            ? Vc({}, e(vc(U), W.current))
            : Vc({}, e);
        }
        var ue =
          Z &&
          e.createElement(
            el,
            {
              appear: !0,
              in: A,
              timeout: { appear: 180 + X, enter: 180 + X, exit: 180 + G },
              nodeRef: $,
              unmountOnExit: d,
              onEnter: function () {
                !d && B && (B.style.display = "block");
              },
              onExited: function () {
                !d && B && (B.style.display = "none");
              },
            },
            e.createElement(
              zo,
              { triggerNode: vc(U), attach: s, ref: $ },
              e.createElement(
                el,
                Vc(
                  {
                    appear: !0,
                    timeout: { appear: X, enter: X, exit: G },
                    in: A,
                    nodeRef: W,
                  },
                  (function (e) {
                    var t = e.classPrefix,
                      n = e.expandAnimation;
                    if (!e.fadeAnimation) return {};
                    var r = "".concat(
                      t,
                      n ? "-popup--animation-expand" : "-popup--animation",
                    );
                    return {
                      classNames: {
                        appear: ""
                          .concat(r, "-enter ")
                          .concat(r, "-enter-active"),
                        appearActive: "".concat(r, "-enter-active"),
                        appearDone: ""
                          .concat(r, "-enter-active ")
                          .concat(r, "-enter-to"),
                        enter: ""
                          .concat(r, "-enter ")
                          .concat(r, "-enter-active"),
                        enterActive: "".concat(r, "-enter-active"),
                        enterDone: ""
                          .concat(r, "-enter-active ")
                          .concat(r, "-enter-to"),
                        exit: ""
                          .concat(r, "-leave ")
                          .concat(r, "-leave-active"),
                        exitActive: "".concat(r, "-leave-active"),
                        exitDone: ""
                          .concat(r, "-leave-active ")
                          .concat(r, "-leave-to"),
                      },
                    };
                  })({
                    classPrefix: C,
                    fadeAnimation: D,
                    expandAnimation: k && T,
                  }),
                ),
                e.createElement(
                  "div",
                  Vc(
                    Vc(
                      {
                        ref: function (e) {
                          e && ((W.current = e), V(e));
                        },
                        style: Vc(Vc({}, ie.popper), {}, { zIndex: O }, ce(h)),
                        className: p()("".concat(C, "-popup"), m),
                      },
                      le.popper,
                    ),
                    ne(),
                  ),
                  e.createElement(
                    "div",
                    {
                      ref: H,
                      className: p()(
                        "".concat(C, "-popup__content"),
                        i({}, "".concat(C, "-popup__content--arrow"), f),
                        g,
                      ),
                      style: ce(v),
                      onScroll: function (e) {
                        return null == E ? void 0 : E({ e });
                      },
                    },
                    f
                      ? e.createElement("div", {
                          style: ie.arrow,
                          className: "".concat(C, "-popup__arrow"),
                        })
                      : null,
                    c,
                  ),
                ),
              ),
            ),
          );
        return (
          (0, e.useImperativeHandle)(r, function () {
            return {
              getPopper: function () {
                return q.current;
              },
              getPopupElement: function () {
                return W.current;
              },
              getPortalElement: function () {
                return $.current;
              },
            };
          }),
          e.createElement(e.Fragment, null, oe, ue)
        );
      });
      (Uc.displayName = "Popup"),
        (Uc.defaultProps = {
          attach: "body",
          destroyOnClose: !1,
          hideEmptyPopup: !1,
          placement: "top",
          showArrow: !1,
          trigger: "hover",
        });
      var Wc = Uc,
        $c = Bt,
        Hc = Ma,
        qc = Gt,
        Qc = G,
        Kc = Ra;
      var Xc = function (e, t, n, r) {
        if (!Qc(e)) return e;
        for (
          var o = -1, a = (t = Hc(t, e)).length, i = a - 1, l = e;
          null != l && ++o < a;

        ) {
          var c = Kc(t[o]),
            u = n;
          if ("__proto__" === c || "constructor" === c || "prototype" === c)
            return e;
          if (o != i) {
            var s = l[c];
            void 0 === (u = r ? r(s, c, l) : void 0) &&
              (u = Qc(s) ? s : qc(t[o + 1]) ? [] : {});
          }
          $c(l, c, u), (l = l[c]);
        }
        return e;
      };
      var Yc = function (e, t) {
          for (var n = -1, r = t.length, o = e.length; ++n < r; )
            e[o + n] = t[n];
          return e;
        },
        Gc = Kt,
        Zc = Xt,
        Jc = F ? F.isConcatSpreadable : void 0;
      var eu = Yc,
        tu = function (e) {
          return Zc(e) || Gc(e) || !!(Jc && e && e[Jc]);
        };
      var nu = function e(t, n, r, o, a) {
          var i = -1,
            l = t.length;
          for (r || (r = tu), a || (a = []); ++i < l; ) {
            var c = t[i];
            n > 0 && r(c)
              ? n > 1
                ? e(c, n - 1, r, o, a)
                : eu(a, c)
              : o || (a[a.length] = c);
          }
          return a;
        },
        ru = nu;
      var ou = function (e) {
          return (null == e ? 0 : e.length) ? ru(e, 1) : [];
        },
        au = Xn,
        iu = er;
      var lu = Va,
        cu = Xc,
        uu = Ma;
      var su = Ma,
        fu = Kt,
        du = Xt,
        pu = Gt,
        mu = mt,
        gu = Ra;
      var hu = function (e, t) {
          return null != e && t in Object(e);
        },
        vu = function (e, t, n) {
          for (var r = -1, o = (t = su(t, e)).length, a = !1; ++r < o; ) {
            var i = gu(t[r]);
            if (!(a = null != e && n(e, i))) break;
            e = e[i];
          }
          return a || ++r != o
            ? a
            : !!(o = null == e ? 0 : e.length) &&
                mu(o) &&
                pu(i, o) &&
                (du(e) || fu(e));
        };
      var yu = function (e, t, n) {
          for (var r = -1, o = t.length, a = {}; ++r < o; ) {
            var i = t[r],
              l = lu(e, i);
            n(l, i) && cu(a, uu(i, e), l);
          }
          return a;
        },
        bu = function (e, t) {
          return null != e && vu(e, t, hu);
        };
      var _u = function (e, t) {
          return yu(e, t, function (t, n) {
            return bu(e, n);
          });
        },
        wu = (function (e) {
          return iu(au(e, void 0, ou), e + "");
        })(function (e, t) {
          return null == e ? {} : _u(e, t);
        });
      function Ou(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Eu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ou(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ou(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ku = {
          tag: "svg",
          attrs: {
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
          },
          children: [
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M10.88 8a2.88 2.88 0 11-5.76 0 2.88 2.88 0 015.76 0zm-1 0a1.88 1.88 0 10-3.76 0 1.88 1.88 0 003.76 0z",
                fillOpacity: 0.9,
              },
            },
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M1.12 8.23A7.72 7.72 0 008 12.5c2.9 0 5.54-1.63 6.88-4.27L15 8l-.12-.23A7.73 7.73 0 008 3.5a7.74 7.74 0 00-6.88 4.27L1 8l.12.23zM8 11.5A6.73 6.73 0 012.11 8 6.73 6.73 0 0113.9 8 6.74 6.74 0 018 11.5z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        xu = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            C,
            Eu(Eu({}, t), {}, { id: "browse", ref: n, icon: ku }),
          );
        });
      function Su(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Pu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Su(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Su(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      xu.displayName = "BrowseIcon";
      var ju = {
          tag: "svg",
          attrs: {
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
          },
          children: [
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M10.77 11.98l1.38 1.37.7-.7-9.7-9.7-.7.7 1.2 1.21a7.9 7.9 0 00-2.53 2.91L1 8l.12.23a7.72 7.72 0 009.65 3.75zM10 11.2A6.67 6.67 0 012.11 8c.56-1 1.34-1.83 2.26-2.43l1.08 1.09a2.88 2.88 0 003.9 3.9l.64.64zM6.21 7.42l2.37 2.37a1.88 1.88 0 01-2.37-2.37zM14.88 8.23L15 8l-.12-.23a7.73 7.73 0 00-9.35-3.86l.8.8A6.7 6.7 0 0113.9 8a6.87 6.87 0 01-2.02 2.26l.7.7a7.9 7.9 0 002.3-2.73z",
                fillOpacity: 0.9,
              },
            },
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M10.88 8c0 .37-.07.73-.2 1.06l-.82-.82.02-.24a1.88 1.88 0 00-2.12-1.86l-.82-.82A2.87 2.87 0 0110.88 8z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        Cu = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            C,
            Pu(Pu({}, t), {}, { id: "browse-off", ref: n, icon: ju }),
          );
        });
      function Nu(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Tu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Nu(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Nu(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      Cu.displayName = "BrowseOffIcon";
      var Du = {
          tag: "svg",
          attrs: {
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
          },
          children: [
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M15 8A7 7 0 101 8a7 7 0 0014 0zM5.67 4.95L8 7.29l2.33-2.34.7.7L8.7 8l2.34 2.35-.71.7L8 8.71l-2.33 2.34-.7-.7L7.3 8 4.96 5.65l.71-.7z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        zu = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            C,
            Tu(Tu({}, t), {}, { id: "close-circle-filled", ref: n, icon: Du }),
          );
        });
      zu.displayName = "CloseCircleFilledIcon";
      var Lu = To ? e.useLayoutEffect : e.useEffect,
        Iu = ["separate", "children", "className"];
      function Mu(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var Au = (0, e.forwardRef)(function (t, n) {
        var r = io().classPrefix,
          o = t.separate,
          a = t.children,
          l = t.className,
          c = v(t, Iu);
        return e.createElement(
          "div",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Mu(Object(n), !0).forEach(function (t) {
                    i(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : Mu(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t),
                      );
                    });
            }
            return e;
          })(
            {
              ref: n,
              className: p()(
                "".concat(r, "-input-group"),
                l,
                i({}, "".concat(r, "-input-group--separate"), o),
              ),
            },
            c,
          ),
          a,
        );
      });
      Au.displayName = "InputGroup";
      function Ru(e, t, n) {
        return "function" == typeof e ? e(t) : null != e ? e : n;
      }
      var Fu = function (e, t) {},
        Bu = function (e, t) {};
      function Vu(t) {
        var n = (0, e.useMemo)(
            function () {
              var e,
                n = t.maxlength,
                r = t.maxcharacter,
                o = t.value;
              if ("number" == typeof o) return String(o);
              if (
                (n &&
                  r &&
                  Fu("Input", "Pick one of maxlength and maxcharacter please."),
                n)
              ) {
                var a =
                  null != o && o.length
                    ? Io(null != (e = o) ? e : "").length
                    : 0;
                return "".concat(a, "/").concat(n);
              }
              return r ? "".concat(Mo(o || ""), "/").concat(r) : "";
            },
            [t.maxcharacter, t.maxlength, t.value],
          ),
          r = (0, e.useMemo)(
            function () {
              if (n) {
                var e = a(n.split("/"), 2),
                  t = e[0],
                  r = e[1];
                return Number(t) > Number(r) ? "error" : "";
              }
              return "";
            },
            [n],
          ),
          o = (0, e.useMemo)(
            function () {
              return t.status || r;
            },
            [t.status, r],
          );
        return (
          (0, e.useEffect)(
            function () {
              var e;
              null === (e = t.onValidate) ||
                void 0 === e ||
                e.call(t, { error: r ? "exceed-maximum" : void 0 });
            },
            [r],
          ),
          {
            tStatus: o,
            limitNumber: n,
            getValueByLimitNumber: function (e) {
              var n,
                r,
                o,
                a = t.allowInputOverMax,
                i = t.maxlength,
                c = t.maxcharacter;
              if ((!i && !c) || a || !e) return e;
              if (i)
                return (
                  (n = e),
                  (r = i),
                  Io(null != o ? o : "").slice().length === r
                    ? o || ""
                    : Io(null != n ? n : "")
                        .slice(0, r)
                        .join("")
                );
              if (c) {
                var u = Mo(e, c);
                if ("object" === l(u)) return u.characters;
              }
            },
          }
        );
      }
      var Uu = [
        "type",
        "autoWidth",
        "placeholder",
        "disabled",
        "status",
        "size",
        "className",
        "inputClass",
        "style",
        "prefixIcon",
        "suffixIcon",
        "clearable",
        "tips",
        "align",
        "maxlength",
        "maxcharacter",
        "showClearIconOnEmpty",
        "autofocus",
        "autocomplete",
        "readonly",
        "label",
        "suffix",
        "showInput",
        "keepWrapperWidth",
        "showLimitNumber",
        "allowInputOverMax",
        "format",
        "onClick",
        "onClear",
        "onEnter",
        "onKeydown",
        "onKeyup",
        "onKeypress",
        "onFocus",
        "onBlur",
        "onPaste",
        "onMouseenter",
        "onMouseleave",
        "onWheel",
        "onCompositionstart",
        "onCompositionend",
        "onValidate",
        "onChange",
      ];
      function Wu(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var $u = function (t, n, r) {
          var o = Ru(r),
            a = r ? "".concat(t, "-input__").concat(n, "-icon") : "";
          return o
            ? e.createElement(
                "span",
                {
                  className: "".concat(t, "-input__").concat(n, " ").concat(a),
                },
                o,
              )
            : null;
        },
        Hu = wi(
          function (t, n) {
            var r,
              o = a(yi("input"), 2),
              l = o[0],
              c = o[1],
              u = lo({
                BrowseIcon: xu,
                BrowseOffIcon: Cu,
                CloseCircleFilledIcon: zu,
              }),
              s = u.BrowseIcon,
              f = u.BrowseOffIcon,
              d = u.CloseCircleFilledIcon,
              m = t.type,
              g = t.autoWidth,
              h = t.placeholder,
              y = void 0 === h ? c(l.placeholder) : h,
              b = t.disabled,
              _ = t.status,
              w = t.size,
              O = t.className,
              E = t.inputClass,
              k = t.style,
              x = t.prefixIcon,
              S = t.suffixIcon,
              P = t.clearable,
              j = t.tips,
              C = t.align,
              N = t.maxlength,
              T = t.maxcharacter,
              D = t.showClearIconOnEmpty,
              z = t.autofocus,
              L = t.autocomplete,
              I = t.readonly,
              M = t.label,
              A = t.suffix,
              R = t.showInput,
              F = void 0 === R || R,
              B = t.keepWrapperWidth,
              V = t.showLimitNumber,
              U = t.allowInputOverMax,
              W = t.format,
              $ = t.onClick,
              H = t.onClear,
              q = t.onEnter,
              Q = t.onKeydown,
              K = t.onKeyup,
              X = t.onKeypress,
              Y = t.onFocus,
              G = t.onBlur,
              Z = t.onPaste,
              J = t.onMouseenter,
              ee = t.onMouseleave,
              ne = t.onWheel,
              re = t.onCompositionstart,
              oe = t.onCompositionend,
              ae = t.onValidate,
              ie = t.onChange,
              le = v(t, Uu),
              ce = a(gi(t, "value", ie), 2),
              ue = ce[0],
              se = ce[1],
              fe = Vu({
                value: void 0 === ue ? void 0 : String(ue),
                status: _,
                maxlength: N,
                maxcharacter: T,
                allowInputOverMax: U,
                onValidate: ae,
              }),
              de = fe.limitNumber,
              pe = fe.getValueByLimitNumber,
              me = fe.tStatus,
              ge = io().classPrefix,
              he = (0, e.useRef)(!1),
              ve = (0, e.useRef)(),
              ye = (0, e.useRef)(),
              be = (0, e.useRef)(),
              _e = a((0, e.useState)(!1), 2),
              we = _e[0],
              Oe = _e[1],
              Ee = a((0, e.useState)(!1), 2),
              ke = Ee[0],
              xe = Ee[1],
              Se = a((0, e.useState)(m), 2),
              Pe = Se[0],
              je = Se[1],
              Ce = a((0, e.useState)(""), 2),
              Ne = Ce[0],
              Te = Ce[1],
              De = ((P && ue && !b) || D) && we,
              ze = $u(ge, "prefix", Ru(x)),
              Le = S;
            De &&
              (Le = e.createElement(d, {
                className: "".concat(ge, "-input__suffix-clear"),
                onClick: function (e) {
                  null == se || se("", { e }), null == H || H({ e });
                },
              })),
              "password" === m &&
                void 0 === S &&
                ("password" === Pe
                  ? (Le = e.createElement(f, {
                      className: "".concat(ge, "-input__suffix-clear"),
                      onClick: $e,
                    }))
                  : "text" === Pe &&
                    (Le = e.createElement(s, {
                      className: "".concat(ge, "-input__suffix-clear"),
                      onClick: $e,
                    })));
            var Ie = $u(ge, "suffix", Ru(Le)),
              Me = te(M) ? M() : M,
              Ae = te(A) ? A() : A,
              Re =
                de && V
                  ? e.createElement(
                      "div",
                      { className: "".concat(ge, "-input__limit-number") },
                      de,
                    )
                  : null,
              Fe = function () {
                var e;
                g &&
                  ve.current &&
                  (ve.current.style.width = "".concat(
                    null === (e = ye.current) || void 0 === e
                      ? void 0
                      : e.offsetWidth,
                    "px",
                  ));
              };
            Lu(
              function () {
                requestAnimationFrame(function () {
                  Fe();
                });
              },
              [g, ue, y, ve],
            ),
              (0, e.useEffect)(
                function () {
                  var e = null;
                  if (void 0 !== window.ResizeObserver && ve.current)
                    return (
                      (e = new window.ResizeObserver(function () {
                        Fe();
                      })).observe(ve.current),
                      function () {
                        var t, n;
                        null === (t = (n = e).disconnect) ||
                          void 0 === t ||
                          t.call(n),
                          (e = null);
                      }
                    );
                },
                [ve],
              ),
              (0, e.useEffect)(
                function () {
                  je(m);
                },
                [m],
              );
            var Be = he.current ? Ne : null != ue ? ue : "",
              Ve = W && !ke ? W(Be) : Be,
              Ue = e.createElement("input", {
                ref: ve,
                placeholder: y,
                type: Pe,
                className: "".concat(ge, "-input__inner"),
                value: Ve,
                readOnly: I,
                disabled: b,
                autoComplete: null != L ? L : l.autocomplete || void 0,
                autoFocus: z,
                onChange: He,
                onKeyDown: function (e) {
                  var t = e.key,
                    n = e.currentTarget.value;
                  "Enter" === t && (null == q || q(n, { e })),
                    null == Q || Q(n, { e });
                },
                onKeyUp: function (e) {
                  var t = e.currentTarget.value;
                  null == K || K(t, { e });
                },
                onKeyPress: function (e) {
                  var t = e.currentTarget.value;
                  null == X || X(t, { e });
                },
                onCompositionStart: function (e) {
                  he.current = !0;
                  var t = e.currentTarget.value;
                  null == re || re(t, { e });
                },
                onCompositionEnd: function (e) {
                  var t = e.currentTarget.value;
                  he.current && ((he.current = !1), He(e));
                  null == oe || oe(t, { e });
                },
                onFocus: function (e) {
                  if (I) return;
                  var t = e.currentTarget.value;
                  null == Y || Y(t, { e }), xe(!0);
                },
                onBlur: function (e) {
                  if (I) return;
                  var t = e.currentTarget.value;
                  null == G || G(t, { e }), xe(!1);
                },
                onPaste: function (e) {
                  var t = e.clipboardData,
                    n = null == t ? void 0 : t.getData("text/plain");
                  null == Z || Z({ e, pasteValue: n });
                },
              }),
              We = e.createElement(
                "div",
                {
                  className: p()(
                    E,
                    "".concat(ge, "-input"),
                    ((r = {}),
                    i(r, "".concat(ge, "-is-readonly"), I),
                    i(r, "".concat(ge, "-is-disabled"), b),
                    i(r, "".concat(ge, "-is-focused"), ke),
                    i(r, "".concat(ge, "-size-s"), "small" === w),
                    i(r, "".concat(ge, "-size-l"), "large" === w),
                    i(r, "".concat(ge, "-size-m"), "medium" === w),
                    i(r, "".concat(ge, "-align-").concat(C), C),
                    i(r, "".concat(ge, "-is-").concat(me), me),
                    i(r, "".concat(ge, "-input--prefix"), x || Me),
                    i(r, "".concat(ge, "-input--suffix"), Ie || Ae),
                    i(r, "".concat(ge, "-input--focused"), ke),
                    r),
                  ),
                  onMouseEnter: function (e) {
                    Oe(!0), null == J || J({ e });
                  },
                  onMouseLeave: function (e) {
                    Oe(!1), null == ee || ee({ e });
                  },
                  onWheel: function (e) {
                    return null == ne ? void 0 : ne({ e });
                  },
                  onClick: function (e) {
                    return null == $ ? void 0 : $({ e });
                  },
                },
                ze,
                Me
                  ? e.createElement(
                      "div",
                      { className: "".concat(ge, "-input__prefix") },
                      Me,
                    )
                  : null,
                F && Ue,
                g &&
                  e.createElement(
                    "span",
                    { ref: ye, className: "".concat(ge, "-input__input-pre") },
                    ue || y,
                  ),
                Ae || Re
                  ? e.createElement(
                      "div",
                      { className: "".concat(ge, "-input__suffix") },
                      Ae,
                      Re,
                    )
                  : null,
                Ie,
              );
            function $e() {
              je("password" === Pe ? "text" : "password");
            }
            function He(e) {
              var n = e.currentTarget.value;
              he.current
                ? Te(n)
                : ("number" !== t.type && (n = pe(n)), Te(n), se(n, { e }));
            }
            return (
              (0, e.useImperativeHandle)(n, function () {
                return {
                  currentElement: be.current,
                  inputElement: ve.current,
                  focus: function () {
                    var e;
                    return null === (e = ve.current) || void 0 === e
                      ? void 0
                      : e.focus();
                  },
                  blur: function () {
                    var e;
                    return null === (e = ve.current) || void 0 === e
                      ? void 0
                      : e.blur();
                  },
                  select: function () {
                    var e;
                    return null === (e = ve.current) || void 0 === e
                      ? void 0
                      : e.select();
                  },
                };
              }),
              e.createElement(
                "div",
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? Wu(Object(n), !0).forEach(function (t) {
                          i(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : Wu(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t),
                            );
                          });
                  }
                  return e;
                })(
                  {
                    ref: be,
                    style: k,
                    className: p()(
                      "".concat(ge, "-input__wrap"),
                      O,
                      i({}, "".concat(ge, "-input--auto-width"), g && !B),
                    ),
                  },
                  le,
                ),
                We,
                j &&
                  e.createElement(
                    "div",
                    {
                      className: p()(
                        "".concat(ge, "-input__tips"),
                        "".concat(ge, "-input__tips--").concat(me || "default"),
                      ),
                    },
                    j,
                  ),
              )
            );
          },
          { Group: Au },
        );
      (Hu.displayName = "Input"),
        (Hu.defaultProps = {
          align: "left",
          allowInputOverMax: !1,
          autoWidth: !1,
          autocomplete: void 0,
          autofocus: !1,
          clearable: !1,
          placeholder: void 0,
          readonly: !1,
          showClearIconOnEmpty: !1,
          showLimitNumber: !1,
          size: "medium",
          type: "text",
        });
      var qu = Hu;
      function Qu(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ku(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Qu(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Qu(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Xu = [
          "status",
          "clearable",
          "disabled",
          "label",
          "placeholder",
          "readonly",
          "suffix",
          "suffixIcon",
          "onPaste",
          "onEnter",
          "onMouseenter",
          "onMouseleave",
        ],
        Yu = { label: "label", value: "value" };
      function Gu(e, t) {
        var n = t || Yu;
        return G(e) ? e[n.label] : e;
      }
      var Zu = null;
      var Ju = [
        "content",
        "onClick",
        "disabled",
        "children",
        "className",
        "size",
        "onChange",
      ];
      function es(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ts(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? es(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : es(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ns = (0, e.forwardRef)(function (t, n) {
        var r,
          o = t.content,
          l = t.onClick,
          c = void 0 === l ? m : l,
          u = t.disabled,
          s = t.children,
          f = t.className,
          d = t.size,
          g = t.onChange,
          h = v(t, Ju),
          y = a(gi(t, "checked", g), 2),
          b = y[0],
          _ = y[1],
          w = io().classPrefix,
          O = "".concat(w, "-tag"),
          E = {
            large: "".concat(w, "-size-l"),
            small: "".concat(w, "-size-s"),
          },
          k = p()(
            O,
            E[d],
            f,
            "".concat(O, "--default"),
            "".concat(O, "--check"),
            "".concat(O, "--").concat(d),
            (i((r = {}), "".concat(O, "--disabled"), u),
            i(r, "".concat(O, "--checked"), b),
            r),
          );
        return e.createElement(
          "span",
          ts(
            ts({ ref: n, className: k }, h),
            {},
            {
              onClick: function (e) {
                u || (_(!b), c({ e }));
              },
            },
          ),
          s || o,
        );
      });
      (ns.displayName = "CheckTag"),
        (ns.defaultProps = { defaultChecked: void 0, size: "medium" });
      var rs = [
        "theme",
        "size",
        "shape",
        "variant",
        "closable",
        "maxWidth",
        "icon",
        "content",
        "onClick",
        "onClose",
        "className",
        "style",
        "disabled",
        "children",
      ];
      function os(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function as(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? os(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : os(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var is = wi(
        function (t, n) {
          var r,
            o = t.theme,
            a = t.size,
            l = t.shape,
            c = t.variant,
            u = t.closable,
            s = t.maxWidth,
            f = t.icon,
            d = t.content,
            g = t.onClick,
            h = void 0 === g ? m : g,
            y = t.onClose,
            b = void 0 === y ? m : y,
            _ = t.className,
            w = t.style,
            O = t.disabled,
            E = t.children,
            k = v(t, rs),
            x = io().classPrefix,
            S = lo({ CloseIcon: z }).CloseIcon,
            P = "".concat(x, "-tag"),
            j = {
              large: "".concat(x, "-size-l"),
              small: "".concat(x, "-size-s"),
            },
            C = p()(
              P,
              "".concat(P, "--").concat(o),
              "".concat(P, "--").concat(c),
              "".concat(P, "--").concat(a),
              "".concat(P, "--").concat(l),
              (i((r = {}), "".concat(P, "--ellipsis"), !!s),
              i(r, "".concat(P, "--disabled"), O),
              r),
              j[a],
              _,
            ),
            N = e.createElement(S, {
              onClick: function (e) {
                O || b({ e });
              },
              className: "".concat(P, "__icon-close"),
            });
          return e.createElement(
            "span",
            as(
              {
                ref: n,
                className: C,
                onClick: function (e) {
                  O || h({ e });
                },
                style: s
                  ? as(
                      {
                        maxWidth: "number" == typeof s ? "".concat(s, "px") : s,
                      },
                      w,
                    )
                  : w,
              },
              k,
            ),
            f,
            e.createElement(
              "span",
              { className: s ? "".concat(P, "--text") : void 0 },
              E || d,
            ),
            u && N,
          );
        },
        { CheckTag: ns },
      );
      (is.displayName = "Tag"),
        (is.defaultProps = {
          closable: !1,
          icon: void 0,
          shape: "square",
          size: "medium",
          theme: "default",
          variant: "dark",
        });
      var ls = is;
      function cs(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function us(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? cs(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : cs(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function ss(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function fs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ss(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ss(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ds = (0, e.forwardRef)(function (t, n) {
        var r,
          o = io().classPrefix,
          l = lo({ CloseCircleFilledIcon: zu }).CloseCircleFilledIcon,
          c = t.excessTagsDisplayType,
          u = t.autoWidth,
          s = t.readonly,
          f = t.disabled,
          d = t.clearable,
          m = t.placeholder,
          g = t.valueDisplay,
          h = t.label,
          v = t.inputProps,
          y = t.size,
          b = t.tips,
          _ = t.status,
          w = t.suffixIcon,
          O = t.suffix,
          E = t.onClick,
          k = t.onPaste,
          x = t.onFocus,
          S = t.onBlur,
          P = a(gi(t, "inputValue", t.onInputChange), 2),
          j = P[0],
          C = P[1],
          N = (function (t) {
            var n = t.readonly,
              r = t.disabled,
              o = t.onMouseenter,
              i = t.onMouseleave,
              l = a((0, e.useState)(!1), 2),
              c = l[0],
              u = l[1];
            return {
              isHover: c,
              addHover: function (e) {
                n || r || (u(!0), null == o || o(e));
              },
              cancelHover: function (e) {
                n || r || (u(!1), null == i || i(e));
              },
            };
          })(t),
          T = N.isHover,
          D = N.addHover,
          z = N.cancelHover,
          L = (function (t) {
            var n = t.sortOnDraggable,
              r = t.onDragSort,
              o = t.onDragOverCheck,
              i = a((0, e.useState)(-1), 2),
              l = i[0],
              c = i[1],
              u = a((0, e.useState)(null), 2),
              s = u[0],
              f = u[1],
              d = a((0, e.useState)(null), 2),
              p = (d[0], d[1]),
              m = a((0, e.useState)({ nodeX: 0, nodeWidth: 0, mouseX: 0 }), 2),
              g = m[0],
              h = m[1],
              v = (0, e.useRef)(r),
              y = (0, e.useCallback)(
                function (e, t, n) {
                  var r, a;
                  if (
                    (e.preventDefault(),
                    l !== t &&
                      -1 !== l &&
                      (null == o ||
                        !o.targetClassNameRegExp ||
                        (null != o &&
                          o.targetClassNameRegExp.test(
                            null === (r = e.target) || void 0 === r
                              ? void 0
                              : r.className,
                          ))))
                  ) {
                    if (null != o && o.x) {
                      if (!g.nodeWidth) return;
                      var i = e.target.getBoundingClientRect(),
                        u = i.x,
                        f = i.width,
                        d = u + f / 2,
                        p = e.clientX - (g.mouseX - g.nodeX),
                        m = p + g.nodeWidth;
                      if (!(p > u && p < u + f ? p < d : m > d)) return;
                    }
                    null === (a = v.current) ||
                      void 0 === a ||
                      a.call(v, {
                        currentIndex: l,
                        current: s,
                        target: n,
                        targetIndex: t,
                      }),
                      c(t);
                  }
                },
                [
                  l,
                  null == o ? void 0 : o.targetClassNameRegExp,
                  null == o ? void 0 : o.x,
                  s,
                  g.nodeWidth,
                  g.mouseX,
                  g.nodeX,
                ],
              );
            if (!n) return {};
            function b(e, t, n) {
              if ((c(t), f(n), o)) {
                var r = e.target.getBoundingClientRect(),
                  a = r.x,
                  i = r.width;
                h({ nodeX: a, nodeWidth: i, mouseX: e.clientX });
              }
            }
            function _() {
              p(!0);
            }
            function w() {
              p(!1), c(-1), f(null);
            }
            return {
              onDragStart: b,
              onDragOver: y,
              onDrop: _,
              onDragEnd: w,
              getDragProps: function (e, t) {
                return n
                  ? {
                      draggable: !0,
                      onDragStart: function (n) {
                        b(n, e, t);
                      },
                      onDragOver: function (n) {
                        y(n, e, t);
                      },
                      onDrop: function () {
                        _();
                      },
                      onDragEnd: function () {
                        w();
                      },
                    }
                  : {};
              },
              dragging: -1 !== l,
            };
          })(
            fs(
              fs({}, t),
              {},
              {
                sortOnDraggable: t.dragSort,
                onDragOverCheck: {
                  x: !0,
                  targetClassNameRegExp: new RegExp("^".concat(o, "-tag")),
                },
              },
            ),
          ),
          I = L.getDragProps,
          M = (0, e.useRef)(!1),
          A = (function (t) {
            var n = (0, e.useRef)(),
              r = t.excessTagsDisplayType,
              o = void 0 === r ? "scroll" : r,
              i = t.readonly,
              l = t.disabled,
              c = a((0, e.useState)(0), 2),
              u = c[0],
              s = c[1],
              f = a((0, e.useState)(), 2),
              d = f[0],
              p = f[1],
              m = function (e) {
                var t = e.children[0];
                p(t);
              },
              g = function () {
                s(d.scrollWidth - d.clientWidth);
              },
              h = function (e) {
                null == d || d.scroll({ left: e, behavior: "smooth" });
              },
              v = function () {
                g(), h(u);
              },
              y = function () {
                clearTimeout(Zu);
              },
              b = function (e) {
                e && m(e);
              };
            return (
              (0, e.useEffect)(function () {
                return b(null == n ? void 0 : n.current.currentElement), y;
              }, []),
              {
                initScroll: b,
                clearScroll: y,
                tagInputRef: n,
                scrollElement: d,
                scrollDistance: u,
                scrollTo: h,
                scrollToRight: v,
                scrollToLeft: function () {
                  h(0);
                },
                updateScrollElement: m,
                updateScrollDistance: g,
                onWheel: function (e) {
                  var t = e.e;
                  if (!i && !l && d)
                    if (t.deltaX > 0) {
                      var n = Math.min(d.scrollLeft + 120, u);
                      h(n);
                    } else {
                      var r = Math.max(d.scrollLeft - 120, 0);
                      h(r);
                    }
                },
                scrollToRightOnEnter: function () {
                  "scroll" === o &&
                    (Zu = setTimeout(function () {
                      v(), clearTimeout(Zu);
                    }, 100));
                },
                scrollToLeftOnLeave: function () {
                  "scroll" === o && (h(0), clearTimeout(Zu));
                },
              }
            );
          })(t),
          R = A.scrollToRight,
          F = A.onWheel,
          B = A.scrollToRightOnEnter,
          V = A.scrollToLeftOnLeave,
          U = A.tagInputRef,
          W = (function (t) {
            var n = io().classPrefix,
              r = t.onRemove,
              o = t.max,
              i = t.minCollapsedNum,
              l = t.size,
              c = t.disabled,
              u = t.readonly,
              s = t.tagProps,
              f = t.tag,
              d = t.collapsedItems,
              p = t.getDragProps,
              m = a(gi(t, "value", t.onChange), 2),
              g = m[0],
              h = m[1],
              v = a((0, e.useState)(), 2),
              y = v[0],
              b = v[1],
              _ = function (e) {
                var t = Io(g);
                t.splice(e.index, 1),
                  h(t, us({ trigger: "tag-remove" }, e)),
                  null == r ||
                    r(us(us({}, e), {}, { trigger: "tag-remove", value: t }));
              };
            return {
              tagValue: g,
              clearAll: function (e) {
                h([], { trigger: "clear", e: e.e });
              },
              onClose: _,
              onInnerEnter: function (e, n) {
                var r,
                  a = e ? String(e).trim() : "";
                if (a) {
                  var i = o && (null == g ? void 0 : g.length) >= o,
                    l = g;
                  i ||
                    ((l = g instanceof Array ? g.concat(String(a)) : [a]),
                    h(l, {
                      trigger: "enter",
                      index: l.length - 1,
                      item: a,
                      e: n.e,
                    })),
                    null == t ||
                      null === (r = t.onEnter) ||
                      void 0 === r ||
                      r.call(t, l, us(us({}, n), {}, { inputValue: e }));
                }
              },
              onInputBackspaceKeyUp: function (e, t) {
                var n = t.e;
                if (g && g.length) {
                  if (!y && ["Backspace", "NumpadDelete"].includes(n.key)) {
                    var o = g.length - 1,
                      a = g[o],
                      i = "backspace";
                    h(g.slice(0, -1), { e: n, index: o, item: a, trigger: i }),
                      null == r ||
                        r({ e: n, index: o, item: a, trigger: i, value: g });
                  }
                  b(e);
                }
              },
              renderLabel: function (t) {
                var r = t.displayNode,
                  o = t.label,
                  a = i ? g.slice(0, i) : g,
                  m = r
                    ? [r]
                    : null == a
                      ? void 0
                      : a.map(function (t, n) {
                          var r = te(f) ? f({ value: t }) : f;
                          return e.createElement(
                            ls,
                            us(
                              us(
                                {
                                  key: n,
                                  size: l,
                                  disabled: c,
                                  onClose: function (e) {
                                    return _({ e: e.e, item: t, index: n });
                                  },
                                  closable: !u && !c,
                                },
                                null == p ? void 0 : p(n, t),
                              ),
                              s,
                            ),
                            null != r ? r : t,
                          );
                        });
                if (
                  (o &&
                    (null == m ||
                      m.unshift(
                        e.createElement(
                          "div",
                          {
                            className: "".concat(n, "-tag-input__prefix"),
                            key: "label",
                          },
                          o,
                        ),
                      )),
                  a.length !== g.length)
                ) {
                  var h = g.length - a.length,
                    v = {
                      value: g,
                      count: g.length,
                      collapsedTags: g.slice(i, g.length),
                    },
                    y = te(d) ? d(v) : d;
                  m.push(
                    e.createElement(
                      e.Fragment,
                      { key: "more" },
                      null != y ? y : e.createElement(ls, null, "+", h),
                    ),
                  );
                }
                return m;
              },
            };
          })(fs(fs({}, t), {}, { getDragProps: I })),
          $ = W.tagValue,
          H = W.onClose,
          q = W.onInnerEnter,
          Q = W.onInputBackspaceKeyUp,
          K = W.clearAll,
          X = W.renderLabel,
          Y = "".concat(o, "-tag-input"),
          G = "".concat(o, "-tag-input__with-suffix-icon"),
          Z = "".concat(o, "-tag-input__suffix-clear"),
          J = "".concat(o, "-tag-input--break-line"),
          ee = null != $ && $.length ? "" : m,
          ne = Boolean(!s && !f && d && T && (null == $ ? void 0 : $.length));
        (0, e.useImperativeHandle)(n, function () {
          return fs({}, U.current || {});
        });
        var re = ne
            ? e.createElement(l, {
                className: Z,
                onClick: function (e) {
                  var n;
                  K({ e }),
                    C("", { e, trigger: "clear" }),
                    null === (n = t.onClear) ||
                      void 0 === n ||
                      n.call(t, { e });
                },
              })
            : w,
          oe = te(g)
            ? g({
                value: $,
                onClose: function (e, t) {
                  return H({ index: e, item: t });
                },
              })
            : g,
          ae = [
            Y,
            ((r = {}), i(r, J, "break-line" === c), i(r, G, !!re), r),
            t.className,
          ];
        return e.createElement(
          qu,
          fs(
            {
              ref: U,
              value: j,
              onChange: function (e, t) {
                C(e, fs(fs({}, t), {}, { trigger: "input" }));
              },
              autoWidth: !0,
              onWheel: F,
              size: y,
              readonly: s,
              disabled: f,
              label: X({ displayNode: oe, label: h }),
              className: p()(ae),
              style: t.style,
              tips: b,
              status: _,
              placeholder: ee,
              suffix: O,
              suffixIcon: re,
              showInput: !(
                null != v &&
                v.readonly &&
                $ &&
                null != $ &&
                $.length
              ),
              keepWrapperWidth: !u,
              onPaste: k,
              onClick: function (e) {
                var t, n;
                null === (t = U.current.inputElement) ||
                  void 0 === t ||
                  null === (n = t.focus) ||
                  void 0 === n ||
                  n.call(t),
                  null == E || E(e);
              },
              onEnter: function (e, t) {
                C("", { e: t.e, trigger: "enter" }), !M.current && q(e, t), R();
              },
              onKeyup: Q,
              onMouseenter: function (e) {
                D(e), B();
              },
              onMouseleave: function (e) {
                z(e), V();
              },
              onFocus: function (e, t) {
                null == x || x($, { e: t.e, inputValue: e });
              },
              onBlur: function (e, t) {
                null == S || S($, { e: t.e, inputValue: e });
              },
              onCompositionstart: function (e, t) {
                var n;
                (M.current = !0),
                  null == v ||
                    null === (n = v.onCompositionstart) ||
                    void 0 === n ||
                    n.call(v, e, t);
              },
              onCompositionend: function (e, t) {
                var n;
                (M.current = !1),
                  null == v ||
                    null === (n = v.onCompositionend) ||
                    void 0 === n ||
                    n.call(v, e, t);
              },
            },
            v,
          ),
        );
      });
      (ds.displayName = "TagInput"),
        (ds.defaultProps = {
          autoWidth: !1,
          clearable: !1,
          dragSort: !1,
          excessTagsDisplayType: "break-line",
          defaultInputValue: "",
          minCollapsedNum: 0,
          placeholder: void 0,
          readonly: !1,
          size: "medium",
          defaultValue: [],
        });
      var ps = ds;
      function ms(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function gs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ms(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ms(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var hs = { label: "label", key: "key", children: "children" };
      function vs(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ys(t) {
        var n = t.popupProps,
          r = t.autoWidth,
          o = t.readonly,
          c = t.onPopupVisibleChange,
          u = t.allowInput,
          s = a((0, e.useState)(!1), 2),
          f = s[0],
          d = s[1],
          p = function (e, t) {
            if (e && t) {
              var r = t.scrollHeight > t.offsetHeight ? 8 : 0,
                o =
                  t.offsetWidth + r >= e.offsetWidth
                    ? t.offsetWidth
                    : e.offsetWidth,
                a = {};
              return (
                n &&
                  "object" === l(n.overlayInnerStyle) &&
                  !n.overlayInnerStyle.width &&
                  (a = n.overlayInnerStyle),
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? vs(Object(n), !0).forEach(function (t) {
                          i(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : vs(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t),
                            );
                          });
                  }
                  return e;
                })({ width: "".concat(Math.min(o, 1e3), "px") }, a)
              );
            }
          };
        return {
          tOverlayInnerStyle: (0, e.useMemo)(
            function () {
              var e = {},
                t = (null == n ? void 0 : n.overlayInnerStyle) || {};
              return te(t) || (G(t) && t.width) ? (e = t) : r || (e = p), e;
            },
            [r, null == n ? void 0 : n.overlayInnerStyle],
          ),
          innerPopupVisible: f,
          onInnerPopupVisibleChange: function (e, t) {
            if (!o) {
              var n = !("trigger-element-click" !== t.trigger || !u) || e;
              d(n), null == c || c(n, t);
            }
          },
        };
      }
      function bs(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? bs(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : bs(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ws = (0, e.forwardRef)(function (t, n) {
        var r,
          o = (0, e.useRef)(),
          l = (0, e.useRef)(),
          c = io().classPrefix,
          u = t.multiple,
          s = t.value,
          f = t.popupVisible,
          d = t.popupProps,
          m = t.borderless,
          g = t.disabled,
          h = ys(t),
          v = h.tOverlayInnerStyle,
          y = h.innerPopupVisible,
          b = h.onInnerPopupVisibleChange,
          _ = (function (t) {
            var n = t.value,
              r = t.keys,
              o = t.loading,
              l = t.disabled,
              c = io().classPrefix,
              u = (0, e.useRef)(),
              s = a(gi(t, "inputValue", t.onInputChange), 2),
              f = s[0],
              d = s[1],
              m = (0, e.useMemo)(
                function () {
                  return !l && o;
                },
                [o, l],
              ),
              g = Ku(
                Ku({}, wu(t, Xu)),
                {},
                {
                  suffixIcon: m
                    ? e.createElement($o, { loading: !0, size: "small" })
                    : t.suffixIcon,
                },
              ),
              h = function (e) {
                var n, r;
                null == e ||
                  null === (n = e.e) ||
                  void 0 === n ||
                  n.stopPropagation(),
                  null === (r = t.onClear) || void 0 === r || r.call(t, e),
                  d("", { trigger: "clear" });
              },
              v = function (e, n) {
                t.allowInput && d(e, Ku(Ku({}, n), {}, { trigger: "input" }));
              };
            return {
              inputRef: u,
              commonInputProps: g,
              onInnerClear: h,
              renderSelectSingle: function (o) {
                var a,
                  l = t.multiple ? null : t.valueDisplay,
                  s = o && t.allowInput ? f : Gu(n, r);
                return e.createElement(
                  qu,
                  Ku(
                    Ku(
                      Ku({ ref: u }, g),
                      {},
                      {
                        autoWidth: t.autoWidth,
                        placeholder: l ? "" : t.placeholder,
                        value: l ? void 0 : s,
                        label: e.createElement(e.Fragment, null, t.label, l),
                        onChange: v,
                        readonly: !t.allowInput,
                        onClear: h,
                        onBlur: function (e, r) {
                          var o;
                          null === (o = t.onBlur) ||
                            void 0 === o ||
                            o.call(t, n, Ku(Ku({}, r), {}, { inputValue: e }));
                        },
                        onFocus: function (e, a) {
                          var i;
                          null === (i = t.onFocus) ||
                            void 0 === i ||
                            i.call(t, n, Ku(Ku({}, a), {}, { inputValue: e })),
                            !o &&
                              d(
                                Gu(n, r),
                                Ku(Ku({}, a), {}, { trigger: "input" }),
                              );
                        },
                        onEnter: function (e, r) {
                          var o;
                          null === (o = t.onEnter) ||
                            void 0 === o ||
                            o.call(t, n, Ku(Ku({}, r), {}, { inputValue: e }));
                        },
                      },
                      t.inputProps,
                    ),
                    {},
                    {
                      inputClass: p()(
                        null === (a = t.inputProps) || void 0 === a
                          ? void 0
                          : a.className,
                        i({}, "".concat(c, "-input--focused"), o),
                      ),
                    },
                  ),
                );
              },
            };
          })(t),
          w = _.commonInputProps,
          O = _.inputRef,
          E = _.onInnerClear,
          k = _.renderSelectSingle,
          x = (function (t) {
            var n = t.value,
              r = io().classPrefix,
              o = (0, e.useRef)(),
              l = a(gi(t, "inputValue", t.onInputChange), 2),
              c = l[0],
              u = l[1],
              s = gs(gs({}, hs), t.keys),
              f =
                n instanceof Array
                  ? n.map(function (e) {
                      return G(e) ? e[s.label] : e;
                    })
                  : G(n)
                    ? [n[s.label]]
                    : [n],
              d = f && f.length ? "" : t.placeholder,
              m = function (e, n) {
                var r, o;
                "tag-remove" === n.trigger &&
                  (null === (o = n.e) || void 0 === o || o.stopPropagation()),
                  null === (r = t.onTagChange) ||
                    void 0 === r ||
                    r.call(t, e, n);
              };
            return {
              tags: f,
              tPlaceholder: d,
              tagInputRef: o,
              renderSelectMultiple: function (n) {
                var a;
                return e.createElement(
                  ps,
                  gs(
                    gs(
                      gs({ ref: o }, n.commonInputProps),
                      {},
                      {
                        autoWidth: t.autoWidth,
                        readonly: t.readonly,
                        minCollapsedNum: t.minCollapsedNum,
                        collapsedItems: t.collapsedItems,
                        tag: t.tag,
                        valueDisplay: t.valueDisplay,
                        placeholder: d,
                        value: f,
                        inputValue: c || "",
                        onChange: m,
                        onInputChange: function (e, t) {
                          "enter" !== (null == t ? void 0 : t.trigger) &&
                            u(e, { trigger: t.trigger, e: t.e });
                        },
                        tagProps: t.tagProps,
                        onClear: n.onInnerClear,
                        onBlur: function (e, n) {
                          var r;
                          null === (r = t.onBlur) ||
                            void 0 === r ||
                            r.call(
                              t,
                              t.value,
                              gs(gs({}, n), {}, { tagInputValue: e }),
                            );
                        },
                        onFocus: function (e, n) {
                          var r;
                          null === (r = t.onFocus) ||
                            void 0 === r ||
                            r.call(
                              t,
                              t.value,
                              gs(gs({}, n), {}, { tagInputValue: e }),
                            );
                        },
                      },
                      t.tagInputProps,
                    ),
                    {},
                    {
                      inputProps: {
                        readonly: !t.allowInput || t.readonly,
                        inputClass: p()(
                          null === (a = t.tagInputProps) || void 0 === a
                            ? void 0
                            : a.className,
                          i(
                            {},
                            "".concat(r, "-input--focused"),
                            n.popupVisible,
                          ),
                        ),
                      },
                    },
                  ),
                );
              },
            };
          })(t),
          S = x.tagInputRef,
          P = x.renderSelectMultiple,
          j = p()([
            t.className,
            "".concat(c, "-select-input"),
            ((r = {}),
            i(r, "".concat(c, "-select-input--borderless"), m),
            i(r, "".concat(c, "-select-input--multiple"), u),
            i(
              r,
              "".concat(c, "-select-input--popup-visible"),
              null != f ? f : y,
            ),
            i(
              r,
              "".concat(c, "-select-input--empty"),
              s instanceof Array ? !s.length : !s,
            ),
            r),
          ]);
        (0, e.useImperativeHandle)(n, function () {
          return _s(
            _s(_s({}, o.current || {}), O.current || {}),
            S.current || {},
          );
        });
        var C = { visible: null != f ? f : y },
          N = e.createElement(
            "div",
            { className: j, style: t.style },
            e.createElement(
              Wc,
              _s(
                _s(
                  _s(
                    {
                      ref: o,
                      trigger: (null == d ? void 0 : d.trigger) || "click",
                      placement: "bottom-left",
                      content: t.panel,
                      hideEmptyPopup: !0,
                      onVisibleChange: b,
                      updateScrollTop: t.updateScrollTop,
                    },
                    C,
                  ),
                  d,
                ),
                {},
                { disabled: g, overlayInnerStyle: v },
              ),
              u
                ? P({
                    commonInputProps: w,
                    onInnerClear: E,
                    popupVisible: C.visible,
                  })
                : k(C.visible),
            ),
          );
        return t.tips
          ? e.createElement(
              "div",
              { ref: l, className: "".concat(c, "-select-input__wrap") },
              N,
              e.createElement(
                "div",
                {
                  className: ""
                    .concat(c, "-input__tips ")
                    .concat(c, "-input__tips--")
                    .concat(t.status || "normal"),
                },
                t.tips,
              ),
            )
          : N;
      });
      (ws.displayName = "SelectInput"),
        (ws.defaultProps = {
          allowInput: !1,
          autoWidth: !1,
          borderless: !1,
          clearable: !1,
          loading: !1,
          minCollapsedNum: 0,
          multiple: !1,
          readonly: !1,
          status: "default",
        });
      var Os = ws,
        Es = ["value", "label", "disabled", "content"];
      function ks(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function xs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ks(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ks(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Ss = (0, e.forwardRef)(function (t, n) {
          var r,
            o = t.onChange,
            l = t.value,
            c = t.size,
            u = t.max,
            s = t.multiple,
            f = t.showPopup,
            d = t.setShowPopup,
            m = t.options,
            g = t.empty,
            h = t.loadingText,
            y = t.loading,
            b = t.valueType,
            _ = t.children,
            w = t.keys,
            O = t.panelTopContent,
            E = t.panelBottomContent,
            k = a(yi("select"), 2),
            x = k[0],
            S = (0, k[1])(x.empty),
            P = io().classPrefix;
          if (!_ && !t.options) return null;
          var j = function (e, t) {
              var n,
                r = t.label,
                a = t.selected,
                c = t.event,
                u = t.restData,
                p = {};
              ("object" === b &&
                ((p = xs({}, u)),
                (null != w && w.label) || Object.assign(p, { label: r }),
                (null != w && w.value) || Object.assign(p, { value: e })),
              Object.keys(p).length) ||
                Object.assign(
                  p,
                  (i((n = {}), (null == w ? void 0 : w.label) || "label", r),
                  i(n, (null == w ? void 0 : w.value) || "value", e),
                  n),
                );
              if (s) {
                var m = zi(l, e, a, b, w, p);
                o(m, { label: r, e: c, trigger: "check" });
              } else {
                o("object" === b ? p : e, { label: r, e: c, trigger: "check" }),
                  d(!f);
              }
            },
            C = e.Children.map(_, function (t) {
              if ((0, e.isValidElement)(t)) {
                var n = {
                  size: c,
                  max: u,
                  multiple: s,
                  selectedValue: l,
                  onSelect: j,
                };
                return (0, e.cloneElement)(t, xs({}, n));
              }
              return t;
            }),
            N = (Array.isArray(C) && !C.length) || (m && 0 === m.length);
          return e.createElement(
            "div",
            {
              ref: n,
              className: p()(
                "".concat(P, "-select__dropdown-inner"),
                ((r = {}),
                i(
                  r,
                  "".concat(P, "-select__dropdown-inner--size-s"),
                  "small" === c,
                ),
                i(
                  r,
                  "".concat(P, "-select__dropdown-inner--size-l"),
                  "large" === c,
                ),
                i(
                  r,
                  "".concat(P, "-select__dropdown-inner--size-m"),
                  "medium" === c,
                ),
                r),
              ),
            },
            O,
            y &&
              e.createElement(
                "div",
                { className: "".concat(P, "-select__loading-tips") },
                h,
              ),
            !y &&
              N &&
              e.createElement(
                "div",
                { className: "".concat(P, "-select__empty") },
                g || e.createElement("p", null, S),
              ),
            !y &&
              !N &&
              (function () {
                if (m) {
                  var t = [];
                  return (
                    m.forEach(function (e) {
                      -1 ===
                        t.findIndex(function (t) {
                          return t.label === e.label && t.value === e.value;
                        }) && t.push(e);
                    }),
                    e.createElement(
                      "ul",
                      { className: "".concat(P, "-select__list") },
                      t.map(function (t, n) {
                        var r = t.value,
                          o = t.label,
                          a = t.disabled,
                          i = t.content,
                          f = v(t, Es);
                        return e.createElement(Ti, {
                          key: n,
                          max: u,
                          label: o,
                          value: r,
                          onSelect: j,
                          selectedValue: l,
                          multiple: s,
                          size: c,
                          disabled: a,
                          restData: f,
                          keys: w,
                          content: i,
                        });
                      }),
                    )
                  );
                }
                return e.createElement(
                  "ul",
                  { className: "".concat(P, "-select__list") },
                  C,
                );
              })(),
            E,
          );
        }),
        Ps = ["overlayClassName"];
      function js(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Cs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? js(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : js(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Ns = wi(
        function (t, n) {
          var r = a(yi("select"), 2),
            o = r[0],
            l = r[1],
            c = l(o.loadingText),
            u = t.readonly,
            s = t.borderless,
            f = t.autoWidth,
            d = t.creatable,
            g = t.filter,
            h = t.loadingText,
            y = void 0 === h ? c : h,
            b = t.max,
            _ = t.popupProps,
            w = t.reserveKeyword,
            O = t.className,
            E = t.style,
            k = t.disabled,
            x = t.size,
            S = t.multiple,
            P = t.placeholder,
            j = t.clearable,
            C = t.prefixIcon,
            N = t.options,
            T = t.filterable,
            D = t.loading,
            z = t.onFocus,
            L = t.onBlur,
            I = t.onClear,
            M = void 0 === I ? m : I,
            A = t.onCreate,
            R = t.onRemove,
            F = t.onSearch,
            B = t.empty,
            V = t.valueType,
            U = t.keys,
            W = t.children,
            $ = t.collapsedItems,
            H = t.minCollapsedNum,
            q = t.valueDisplay,
            Q = t.onEnter,
            K = t.showArrow,
            X = t.inputProps,
            Y = t.panelBottomContent,
            G = t.panelTopContent,
            Z = t.selectInputProps,
            J = t.tagInputProps,
            ee = t.tagProps,
            ne = a(gi(t, "value", t.onChange), 2),
            re = ne[0],
            oe = ne[1],
            ae = io().classPrefix,
            ie = _ || {},
            le = ie.overlayClassName,
            ce = v(ie, Ps),
            ue = "".concat(ae, "-select"),
            se = a(gi(t, "popupVisible", t.onPopupVisibleChange), 2),
            fe = se[0],
            de = se[1],
            pe = a(gi(t, "inputValue", t.onInputChange), 2),
            me = pe[0],
            ge = pe[1],
            he = a((0, e.useState)([]), 2),
            ve = he[0],
            ye = he[1],
            be = a((0, e.useState)([]), 2),
            _e = be[0],
            we = be[1],
            Oe = a((0, e.useState)({}), 2),
            Ee = Oe[0],
            ke = Oe[1],
            xe = a((0, e.useState)([]), 2),
            Se = xe[0],
            Pe = xe[1];
          (0, e.useEffect)(
            function () {
              if (U) {
                var e =
                  null == N
                    ? void 0
                    : N.map(function (e) {
                        return Cs(
                          Cs({}, e),
                          {},
                          {
                            value: Wa(
                              e,
                              (null == U ? void 0 : U.value) || "value",
                            ),
                            label: Wa(
                              e,
                              (null == U ? void 0 : U.label) || "label",
                            ),
                          },
                        );
                      });
                ye(e), we(e);
              } else ye(N), we(N);
              ke(
                (function (e, t, n) {
                  var r = {};
                  if (Array.isArray(t))
                    return (
                      t.forEach(function (e) {
                        r[Wa(e, (null == n ? void 0 : n.value) || "value")] = e;
                      }),
                      r
                    );
                  if (hr(e)) {
                    if (e.type === Ti) return Di(e, r, n), r;
                    if (e.type === Ei) {
                      var o = e.props.children;
                      if (Array.isArray(o))
                        return (
                          o.forEach(function (e) {
                            Di(e, r, n);
                          }),
                          r
                        );
                    }
                  }
                  return (
                    Array.isArray(e) &&
                      e.forEach(function (e) {
                        if ((e.type === Ti && Di(e, r, n), e.type === Ei)) {
                          var t = e.props.children;
                          Array.isArray(t) &&
                            t.forEach(function (e) {
                              Di(e, r, n);
                            });
                        }
                      }),
                    r
                  );
                })(W, N, U) || {},
              );
            },
            [N, U, W],
          ),
            (0, e.useEffect)(
              function () {
                Pe(function (e) {
                  var t,
                    n = (null == U ? void 0 : U.value) || "value",
                    r = (null == U ? void 0 : U.label) || "label";
                  return Array.isArray(re)
                    ? re
                        .map(function (t) {
                          var o;
                          return "value" === V
                            ? Ee[t] ||
                                e.find(function (e) {
                                  return Wa(e, n) === t;
                                }) ||
                                (i((o = {}), n, t), i(o, r, t), o)
                            : t;
                        })
                        .filter(Boolean)
                    : null != re
                      ? "value" === V
                        ? [
                            Ee[re] ||
                              e.find(function (e) {
                                return Wa(e, n) === re;
                              }) ||
                              ((t = {}), i(t, n, re), i(t, r, re), t),
                          ].filter(Boolean)
                        : [re]
                      : [];
                });
              },
              [re, U, V, Ee],
            );
          var je = (0, e.useMemo)(
              function () {
                return S
                  ? Se.map(function (e) {
                      return (
                        Wa(
                          e || {},
                          (null == U ? void 0 : U.label) || "label",
                        ) || ""
                      );
                    })
                  : Wa(
                      Se[0] || {},
                      (null == U ? void 0 : U.label) || "label",
                    ) || void 0;
              },
              [Se, U, S],
            ),
            Ce = function (e, t) {
              k || (de(e, t), e && ge(""));
            },
            Ne = function (e, t) {
              S && !w && ge("", { trigger: "clear" }),
                d &&
                  te(A) &&
                  0 ===
                    N.filter(function (t) {
                      return t.value === e;
                    }).length &&
                  A(e);
              var n = Li(e, S, V, U, _e);
              null == oe || oe(e, Cs(Cs({}, t), {}, { selectedOptions: n }));
            },
            Te = function (e) {
              e.e.stopPropagation(),
                Array.isArray(re)
                  ? oe([], Cs(Cs({}, e), {}, { selectedOptions: [] }))
                  : oe(null, Cs(Cs({}, e), {}, { selectedOptions: [] })),
                ge(void 0),
                M(e);
            };
          (0, e.useEffect)(
            function () {
              void 0 !== me &&
                (function (e) {
                  var t = [];
                  if (e) {
                    if (g && te(g))
                      Array.isArray(_e)
                        ? (t = _e.filter(function (t) {
                            return g(e, t);
                          }))
                        : Array.isArray(Object.values(Ee)) &&
                          (t = Object.values(Ee).filter(function (t) {
                            return g(e, t);
                          }));
                    else if (Array.isArray(_e)) {
                      var n = e.toUpperCase();
                      t = _e.filter(function (e) {
                        return ((null == e ? void 0 : e.label) || "")
                          .toUpperCase()
                          .includes(n);
                      });
                    }
                    d && (t = t.concat([{ label: e, value: e }])), ye(t);
                  } else ye(_e);
                })(String(me));
            },
            [me],
          );
          var De,
            ze = (0, e.useMemo)(
              function () {
                return $
                  ? function () {
                      return $({
                        value: je,
                        collapsedSelectedItems: je.slice(H, je.length),
                        count: je.length - H,
                      });
                    }
                  : null;
              },
              [je, $, H],
            ),
            Le = t.onMouseEnter,
            Ie = t.onMouseLeave;
          return e.createElement(
            "div",
            {
              className: p()("".concat(ue, "__wrap"), O),
              style: E,
              onMouseEnter: Le,
              onMouseLeave: Ie,
            },
            e.createElement(
              Os,
              Cs(
                {
                  autoWidth: !(null != E && E.width) && f,
                  ref: n,
                  className: ue,
                  readonly: u,
                  allowInput: (null != T ? T : o.filterable) || te(g),
                  multiple: S,
                  value: je,
                  valueDisplay: q
                    ? "string" == typeof q
                      ? q
                      : S
                        ? function (e) {
                            var t = e.onClose;
                            return q({ value: je, onClose: t });
                          }
                        : je.length
                          ? q({ value: je[0], onClose: m })
                          : ""
                    : S
                      ? function (t) {
                          var n = t.value;
                          return n.slice(0, H || n.length).map(function (t, n) {
                            var r =
                              null == N
                                ? void 0
                                : N.find(function (e) {
                                    return e.label === t;
                                  });
                            return e.createElement(
                              ls,
                              Cs(
                                Cs(
                                  {
                                    key: n,
                                    closable: !((null != r && r.disabled) || k),
                                  },
                                  ee,
                                ),
                                {},
                                {
                                  onClose: function (e) {
                                    var t,
                                      r = e.e;
                                    r.stopPropagation();
                                    var o = zi(re, re[n], !0, V, U),
                                      a = Li(o, S, V, U, _e);
                                    oe(o, {
                                      e: r,
                                      selectedOptions: a,
                                      trigger: "uncheck",
                                    }),
                                      null == ee ||
                                        null === (t = ee.onClose) ||
                                        void 0 === t ||
                                        t.call(ee, { e: r });
                                  },
                                },
                              ),
                              t,
                            );
                          });
                        }
                      : "string" != typeof je
                        ? je
                        : "",
                  clearable: j,
                  disabled: k,
                  status: t.status,
                  tips: t.tips,
                  borderless: s,
                  label: C,
                  suffixIcon: D
                    ? e.createElement($o, {
                        className: p()(
                          "".concat(ue, "__right-icon"),
                          "".concat(ue, "__active-icon"),
                        ),
                        loading: !0,
                        size: "small",
                      })
                    : K &&
                      e.createElement(Ii, {
                        overlayClassName: "".concat(ue, "__right-icon"),
                        isActive: fe,
                        disabled: k,
                      }),
                  panel:
                    ((De = {
                      onChange: Ne,
                      value: re,
                      className: O,
                      size: x,
                      multiple: S,
                      showPopup: fe,
                      setShowPopup: function (e) {
                        return Ce(e, {});
                      },
                      options: ve,
                      empty: B,
                      max: b,
                      loadingText: y,
                      loading: D,
                      valueType: V,
                      keys: U,
                      panelBottomContent: Y,
                      panelTopContent: G,
                    }),
                    e.createElement(Ss, Cs({}, De), W)),
                  placeholder: !S && fe && je ? je : P || l(o.placeholder),
                  inputValue: me,
                  tagInputProps: Cs({}, J),
                  tagProps: ee,
                  inputProps: Cs({ size: x }, X),
                  minCollapsedNum: H,
                  collapsedItems: ze,
                  updateScrollTop: function (e) {
                    if (e) {
                      var t = e.querySelector(".".concat(ae, "-is-selected"));
                      if (t) {
                        var n = getComputedStyle(t).paddingBottom,
                          r = getComputedStyle(e).marginBottom,
                          o = parseInt(n, 10) + parseInt(r, 10),
                          a =
                            t.offsetTop -
                            e.offsetTop -
                            (e.clientHeight - t.clientHeight) +
                            o;
                        e.scrollTop = a;
                      }
                    }
                  },
                  popupProps: Cs(
                    { overlayClassName: ["".concat(ue, "__dropdown"), le] },
                    ce,
                  ),
                  popupVisible: fe,
                  onPopupVisibleChange: Ce,
                  onTagChange: function (e, t) {
                    var n = t.trigger,
                      r = t.index,
                      o = t.item,
                      a = t.e;
                    if ("backspace" !== n) {
                      if ("clear" === n)
                        return (
                          a.stopPropagation(),
                          void oe([], { e: a, trigger: n, selectedOptions: [] })
                        );
                      if ("tag-remove" === n) {
                        a.stopPropagation();
                        var i = zi(re, re[r], !0, V, U),
                          l = Li(i, S, V, U, _e);
                        oe(i, { e: a, trigger: n, selectedOptions: l }),
                          te(R) &&
                            R({
                              value: re[r],
                              data: { label: o, value: re[r] },
                              e: a,
                            });
                      }
                    } else {
                      a.stopPropagation();
                      for (var c = -1, u = r; u >= 0; ) {
                        var s;
                        if (
                          null === (s = Se[u]) ||
                          void 0 === s ||
                          !s.disabled
                        ) {
                          c = u;
                          break;
                        }
                        u -= 1;
                      }
                      if (c < 0) return;
                      var f = zi(re, re[c], !0, V, U),
                        d = Li(f, S, V, U, _e);
                      oe(f, { e: a, trigger: n, selectedOptions: d });
                    }
                  },
                  onInputChange: function (e) {
                    ge(e), void 0 !== e && te(F) && F(e);
                  },
                  onFocus: z,
                  onEnter: Q,
                  onBlur: L,
                  onClear: function (e) {
                    Te(e);
                  },
                },
                Z,
              ),
            ),
          );
        },
        { Option: Ti, OptionGroup: Ei },
      );
      (Ns.displayName = "Select"),
        (Ns.defaultProps = {
          autoWidth: !1,
          borderless: !1,
          clearable: !1,
          creatable: !1,
          loading: !1,
          max: 0,
          minCollapsedNum: 0,
          multiple: !1,
          placeholder: void 0,
          readonly: !1,
          reserveKeyword: !1,
          showArrow: !0,
          size: "medium",
          valueType: "value",
        });
      var Ts = Ns;
      function Ds(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function zs(e, t) {
        for (
          var n = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? Ds(Object(n), !0).forEach(function (t) {
                      i(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : Ds(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
              }
              return e;
            })({}, e),
            r = 0;
          r < t.length;
          r++
        ) {
          delete n[t[r]];
        }
        return n;
      }
      var Ls = Y,
        Is = gt;
      var Ms = function (e) {
          return !0 === e || !1 === e || (Is(e) && "[object Boolean]" == Ls(e));
        },
        As = [
          "allowUncheck",
          "type",
          "disabled",
          "name",
          "value",
          "onChange",
          "indeterminate",
          "children",
          "label",
          "className",
          "style",
          "readonly",
        ];
      function Rs(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var Fs = e.createContext(null),
        Bs = (0, e.forwardRef)(function (t, n) {
          var r,
            o = (0, e.useContext)(Fs),
            l = o ? o.inject(t) : t,
            c = l.allowUncheck,
            u = void 0 !== c && c,
            s = l.type,
            f = l.disabled,
            d = l.name,
            m = l.value,
            g = l.onChange,
            h = l.indeterminate,
            y = l.children,
            b = l.label,
            _ = l.className,
            w = l.style,
            O = l.readonly,
            E = v(l, As),
            k = io().classPrefix,
            x = a(gi(l, "checked", g), 2),
            S = x[0],
            P = x[1],
            j = p()(
              "".concat(k, "-").concat(s),
              _,
              (i((r = {}), "".concat(k, "-is-checked"), S),
              i(r, "".concat(k, "-is-disabled"), f),
              i(r, "".concat(k, "-is-indeterminate"), h),
              r),
            ),
            C = e.createElement("input", {
              readOnly: O,
              type: "radio-button" === s ? "radio" : s,
              className: "".concat(k, "-").concat(s, "__former"),
              checked: S,
              disabled: f,
              name: d,
              value: Ms(m) ? Number(m) : m,
              onClick: function (e) {
                e.stopPropagation(),
                  ("radio-button" === s || "radio" === s) &&
                    u &&
                    S &&
                    P(!e.currentTarget.checked, { e });
              },
              onChange: function (e) {
                return P(e.currentTarget.checked, { e });
              },
            }),
            N = !(!y && !b);
          return e.createElement(
            "label",
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? Rs(Object(n), !0).forEach(function (t) {
                      i(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : Rs(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
              }
              return e;
            })(
              { ref: n, className: j, title: l.title, style: w },
              zs(E, ["checkAll", "stopLabelTrigger"]),
            ),
            C,
            e.createElement("span", {
              className: "".concat(k, "-").concat(s, "__input"),
            }),
            N &&
              e.createElement(
                "span",
                {
                  key: "label",
                  className: "".concat(k, "-").concat(s, "__label"),
                  onClick: function (e) {
                    l.stopLabelTrigger && e.preventDefault();
                  },
                },
                y || b,
              ),
          );
        });
      Bs.displayName = "Check";
      function Vs(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Us(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Vs(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Vs(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Ws = function (t) {
        var n = io().classPrefix,
          r = t.onChange,
          o = t.disabled,
          i = t.className,
          c = t.style,
          u = t.children,
          s = t.max,
          f = t.options,
          d = void 0 === f ? [] : f,
          m = (
            Array.isArray(d) && d.length > 0
              ? d
              : e.Children.map(u, function (e) {
                  return e.props;
                }) || []
          ).filter(function (e) {
            return "object" !== l(e) || !e.checkAll;
          }),
          g = [];
        m.forEach(function (e) {
          var t = (function (e) {
            switch (l(e)) {
              case "number":
              case "string":
                return e;
              case "object":
                return e.value;
              default:
                return;
            }
          })(e);
          g.push(t);
        });
        var h = a(gi(t, "value", r), 2),
          v = h[0],
          y = h[1],
          b = a((0, e.useState)(s), 2),
          _ = b[0],
          w = b[1],
          O = (0, e.useMemo)(
            function () {
              return Array.isArray(v) ? new Set([].concat(v)) : new Set([]);
            },
            [v],
          ),
          E = (0, e.useMemo)(
            function () {
              var e = Array.from(O);
              return 0 !== e.length && e.length !== m.length;
            },
            [O, m],
          ),
          k = (0, e.useMemo)(
            function () {
              return Array.from(O).length === m.length;
            },
            [O, m],
          );
        (0, e.useEffect)(
          function () {
            Si(s) && (s < O.size || w(s));
          },
          [s, O],
        );
        var x = {
            inject: function (e) {
              if (void 0 !== e.checked) return e;
              var t = e.value;
              return Us(
                Us({}, e),
                {},
                {
                  checked: e.checkAll ? k : O.has(t),
                  indeterminate: e.checkAll ? E : e.indeterminate,
                  disabled: e.disabled || o || (O.size >= _ && !O.has(t)),
                  onChange: function (n, r) {
                    var o = r.e;
                    if (
                      ("function" == typeof e.onChange &&
                        e.onChange(n, { e: o }),
                      e.checkAll)
                    )
                      O.clear(),
                        n &&
                          g.forEach(function (e) {
                            O.add(e);
                          });
                    else if (n) {
                      if (O.size >= _ && Si(s)) return;
                      O.add(t);
                    } else O.delete(t);
                    y(Array.from(O), {
                      e: o,
                      current: e.checkAll ? void 0 : t,
                      type: n ? "check" : "uncheck",
                    });
                  },
                },
              );
            },
          },
          S = Array.isArray(d) && 0 !== d.length;
        return e.createElement(
          "div",
          { className: p()("".concat(n, "-checkbox-group"), i), style: c },
          e.createElement(
            Fs.Provider,
            { value: x },
            S
              ? d.map(function (t, n) {
                  switch (l(t)) {
                    case "string":
                      var r = t;
                      return e.createElement(
                        qs,
                        { key: n, label: r, value: r },
                        t,
                      );
                    case "number":
                      var a = t;
                      return e.createElement(
                        qs,
                        { key: n, label: a, value: a },
                        t,
                      );
                    case "object":
                      var i = t;
                      return i.checkAll
                        ? e.createElement(
                            qs,
                            Us(
                              Us({}, i),
                              {},
                              { key: "checkAll_".concat(n), indeterminate: E },
                            ),
                          )
                        : e.createElement(
                            qs,
                            Us(
                              Us({}, i),
                              {},
                              { key: n, disabled: i.disabled || o },
                            ),
                          );
                    default:
                      return null;
                  }
                })
              : u,
          ),
        );
      };
      function $s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      (Ws.displayName = "CheckboxGroup"),
        (Ws.defaultProps = { max: void 0, defaultValue: [] });
      var Hs = wi(
        function (t, n) {
          return e.createElement(
            Bs,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? $s(Object(n), !0).forEach(function (t) {
                      i(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : $s(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
              }
              return e;
            })({ ref: n, type: "checkbox" }, t),
          );
        },
        { Group: Ws },
      );
      (Hs.displayName = "Checkbox"),
        (Hs.defaultProps = {
          checkAll: !1,
          defaultChecked: !1,
          disabled: void 0,
          indeterminate: !1,
          readonly: !1,
        });
      var qs = Hs,
        Qs = qs;
      function Ks(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Xs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ks(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ks(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Ys = function (t) {
        var n,
          r = io().classPrefix,
          o = t.disabled,
          l = t.children,
          c = t.onChange,
          u = t.size,
          s = t.variant,
          f = t.options,
          d = void 0 === f ? [] : f,
          m = t.className,
          g = t.style,
          h = a(gi(t, "value", c), 2),
          v = h[0],
          y = h[1],
          b = a((0, e.useState)({}), 2),
          _ = b[0],
          w = b[1],
          O = (0, e.useRef)(null),
          E = ".".concat(r, "-radio-button.").concat(r, "-is-checked"),
          k = (function () {
            var t = io().classPrefix;
            return (0, e.useMemo)(
              function () {
                return {
                  SIZE: {
                    default: "",
                    xs: "".concat(t, "-size-xs"),
                    small: "".concat(t, "-size-s"),
                    medium: "".concat(t, "-size-m"),
                    large: "".concat(t, "-size-l"),
                    xl: "".concat(t, "-size-xl"),
                    block: "".concat(t, "-size-full-width"),
                  },
                  STATUS: {
                    loading: "".concat(t, "-is-loading"),
                    disabled: "".concat(t, "-is-disabled"),
                    focused: "".concat(t, "-is-focused"),
                    success: "".concat(t, "-is-success"),
                    error: "".concat(t, "-is-error"),
                    warning: "".concat(t, "-is-warning"),
                    selected: "".concat(t, "-is-selected"),
                    active: "".concat(t, "-is-active"),
                    checked: "".concat(t, "-is-checked"),
                    current: "".concat(t, "-is-current"),
                    hidden: "".concat(t, "-is-hidden"),
                    visible: "".concat(t, "-is-visible"),
                    expanded: "".concat(t, "-is-expanded"),
                    indeterminate: "".concat(t, "-is-indeterminate"),
                  },
                };
              },
              [t],
            );
          })(),
          x = k.SIZE,
          S = {
            inject: function (e) {
              if (void 0 !== e.checked) return e;
              var t = e.value;
              return Xs(
                Xs({}, e),
                {},
                {
                  checked: v === e.value,
                  disabled: e.disabled || o,
                  onChange: function (n, r) {
                    var o = r.e;
                    "function" == typeof e.onChange && e.onChange(n, { e: o }),
                      y(n ? t : void 0, { e: o });
                  },
                },
              );
            },
          },
          P = function () {
            var e, t;
            if (s.includes("filled")) {
              var n =
                null === (e = (t = O.current).querySelector) || void 0 === e
                  ? void 0
                  : e.call(t, E);
              if (!n) return w({ width: 0 });
              var r = n.offsetWidth,
                o = n.offsetLeft;
              w({ width: "".concat(r, "px"), left: "".concat(o, "px") });
            }
          };
        (0, e.useEffect)(
          function () {
            P();
          },
          [O.current, v],
        ),
          Fc(O.current, P);
        return e.createElement(
          Fs.Provider,
          { value: S },
          e.createElement(
            "div",
            {
              ref: O,
              style: g,
              className: p()(
                "".concat(r, "-radio-group"),
                x[u],
                m,
                ((n = {}),
                i(n, "".concat(r, "-radio-group__outline"), "outline" === s),
                i(
                  n,
                  "".concat(r, "-radio-group--filled"),
                  s.includes("filled"),
                ),
                i(
                  n,
                  "".concat(r, "-radio-group--primary-filled"),
                  "primary-filled" === s,
                ),
                n),
              ),
            },
            l ||
              d.map(function (t) {
                return "string" == typeof t || "number" == typeof t
                  ? e.createElement(ef, { value: t, key: t }, t)
                  : e.createElement(
                      ef,
                      { value: t.value, key: t.value, disabled: t.disabled },
                      t.label,
                    );
              }),
            s.includes("filled")
              ? e.createElement("div", {
                  style: _,
                  className: "".concat(r, "-radio-group__bg-block"),
                })
              : null,
          ),
        );
      };
      function Gs(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Zs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Gs(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Gs(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      (Ys.displayName = "RadioGroup"),
        (Ys.defaultProps = { size: "medium", variant: "outline" });
      var Js = wi(
        function (t, n) {
          return e.createElement(Bs, Zs({ ref: n, type: "radio" }, t));
        },
        {
          Group: Ys,
          Button: (0, e.forwardRef)(function (t, n) {
            return e.createElement(Bs, Zs({ ref: n, type: "radio-button" }, t));
          }),
        },
      );
      (Js.displayName = "Radio"),
        (Js.defaultProps = { allowUncheck: !1, defaultChecked: !1, value: !1 });
      var ef = Js,
        tf = ef,
        nf = [
          "children",
          "content",
          "className",
          "underline",
          "prefixIcon",
          "suffixIcon",
          "theme",
          "disabled",
          "hover",
          "onClick",
          "href",
          "size",
        ];
      function rf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function of(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? rf(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : rf(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var af = e.forwardRef(function (t, n) {
        var r,
          o = t.children,
          a = t.content,
          l = t.className,
          c = t.underline,
          u = t.prefixIcon,
          s = t.suffixIcon,
          f = t.theme,
          d = void 0 === f ? "default" : f,
          m = t.disabled,
          g = t.hover,
          h = void 0 === g ? "underline" : g,
          y = t.onClick,
          b = t.href,
          _ = t.size,
          w = v(t, nf),
          O = io().classPrefix,
          E = a || o;
        return e.createElement(
          "a",
          of(
            of({}, w),
            {},
            {
              href: m || !b ? void 0 : b,
              ref: n,
              className: p()(
                l,
                [
                  "".concat(O, "-link"),
                  "".concat(O, "-link--theme-").concat(d),
                ],
                ((r = {}),
                i(r, "".concat(O, "-size-s"), "small" === _),
                i(r, "".concat(O, "-size-l"), "large" === _),
                i(r, "".concat(O, "-is-disabled"), !!m),
                i(r, "".concat(O, "-is-underline"), !!c),
                i(r, "".concat(O, "-link--hover-").concat(h), !m),
                r),
              ),
              onClick: function (e) {
                m || null == y || y(e);
              },
            },
          ),
          u &&
            e.createElement(
              "span",
              { className: p()(["".concat(O, "-link__prefix-icon")]) },
              u,
            ),
          E,
          s &&
            e.createElement(
              "span",
              { className: p()(["".concat(O, "-link__suffix-icon")]) },
              s,
            ),
        );
      });
      af.displayName = "Link";
      var lf = af,
        cf = [
          "type",
          "theme",
          "variant",
          "icon",
          "disabled",
          "loading",
          "size",
          "block",
          "ghost",
          "shape",
          "children",
          "content",
          "className",
          "suffix",
          "href",
          "tag",
          "onClick",
        ];
      function uf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function sf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? uf(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : uf(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ff = (0, e.forwardRef)(function (t, n) {
        var r,
          o = t.type,
          l = t.theme,
          c = t.variant,
          u = t.icon,
          s = t.disabled,
          f = t.loading,
          d = t.size,
          m = t.block,
          g = t.ghost,
          h = t.shape,
          y = t.children,
          b = t.content,
          _ = t.className,
          w = t.suffix,
          O = t.href,
          E = t.tag,
          k = t.onClick,
          x = v(t, cf),
          S = io().classPrefix,
          P = a(Pi(), 2),
          j = P[0],
          C = P[1];
        Ni((null == n ? void 0 : n.current) || j);
        var N = null != b ? b : y,
          T = u;
        f && (T = e.createElement($o, { loading: f, inheritColor: !0 }));
        var D = (0, e.useMemo)(
            function () {
              return l || ("base" === c ? "primary" : "default");
            },
            [l, c],
          ),
          z = (0, e.useMemo)(
            function () {
              return !E && O ? "a" : !E && s ? "div" : E || "button";
            },
            [E, O, s],
          );
        return e.createElement(
          z,
          sf(
            sf({}, x),
            {},
            {
              href: O,
              type: o,
              ref: n || C,
              disabled: s || f,
              className: p()(
                _,
                [
                  "".concat(S, "-button"),
                  "".concat(S, "-button--theme-").concat(D),
                  "".concat(S, "-button--variant-").concat(c),
                ],
                ((r = {}),
                i(
                  r,
                  "".concat(S, "-button--shape-").concat(h),
                  "rectangle" !== h,
                ),
                i(r, "".concat(S, "-button--ghost"), g),
                i(r, "".concat(S, "-is-loading"), f),
                i(r, "".concat(S, "-is-disabled"), s),
                i(r, "".concat(S, "-size-s"), "small" === d),
                i(r, "".concat(S, "-size-l"), "large" === d),
                i(r, "".concat(S, "-size-full-width"), m),
                r),
              ),
              onClick: s || f ? void 0 : k,
            },
          ),
          e.createElement(
            e.Fragment,
            null,
            T,
            N &&
              e.createElement(
                "span",
                { className: "".concat(S, "-button__text") },
                N,
              ),
            w &&
              e.createElement(
                "span",
                { className: "".concat(S, "-button__suffix") },
                w,
              ),
          ),
        );
      });
      (ff.displayName = "Button"),
        (ff.defaultProps = {
          block: !1,
          ghost: !1,
          loading: !1,
          shape: "rectangle",
          size: "medium",
          type: "button",
          variant: "base",
        });
      var df = ff;
      const pf = "lang_list",
        mf = [
          {
            source: {
              code: "ar",
              eng_name: "arabic",
              chn_name: "阿拉伯语",
              pinyin: "a'la'bo'yu",
              space: !0,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "de",
              eng_name: "german",
              chn_name: "德语",
              pinyin: "de'yu",
              space: !0,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "ru",
              eng_name: "russian",
              chn_name: "俄语",
              pinyin: "e'yu",
              space: !0,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "fr",
              eng_name: "french",
              chn_name: "法语",
              pinyin: "fa'yu",
              space: !0,
            },
            target_list: [
              {
                code: "es",
                eng_name: "spanish",
                chn_name: "西班牙语",
                pinyin: "xi'ban'ya'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "fil",
              eng_name: "filipino",
              chn_name: "菲律宾语",
              pinyin: "fei'lv'bing'yu",
              space: !0,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "km",
              eng_name: "khmer",
              chn_name: "高棉语",
              pinyin: "gao'mian'yu",
              space: !0,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "ko",
              eng_name: "korean",
              chn_name: "韩语",
              pinyin: "han'yu",
              space: !0,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "lo",
              eng_name: "laos",
              chn_name: "老挝语",
              pinyin: "lao'wo'yu",
              space: !1,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "ms",
              eng_name: "malay",
              chn_name: "马来语",
              pinyin: "ma'lai'yu",
              space: !0,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "pt",
              eng_name: "portuguese",
              chn_name: "葡萄牙语",
              pinyin: "pu'tao'ya'yu",
              space: !0,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !0,
                  selection_suggestion: !1,
                  dynamic_suggestion: !0,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "ja",
              eng_name: "japanese",
              chn_name: "日语",
              pinyin: "ri'yu",
              space: !1,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "th",
              eng_name: "thai",
              chn_name: "泰语",
              pinyin: "tai'yu",
              space: !1,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "tr",
              eng_name: "turkish",
              chn_name: "土耳其语",
              pinyin: "tu'er'qi'yu",
              space: !0,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "es",
              eng_name: "spanish",
              chn_name: "西班牙语",
              pinyin: "xi'ban'ya'yu",
              space: !0,
            },
            target_list: [
              {
                code: "fr",
                eng_name: "french",
                chn_name: "法语",
                pinyin: "fa'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "it",
              eng_name: "italian",
              chn_name: "意大利语",
              pinyin: "yi'da'li'yu",
              space: !0,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "id",
              eng_name: "indonesian",
              chn_name: "印度尼西亚语",
              pinyin: "yin'du'ni'xi'ya'yu",
              space: !0,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "en",
              eng_name: "english",
              chn_name: "英语",
              pinyin: "ying'yu",
              space: !0,
            },
            target_list: [
              {
                code: "ar",
                eng_name: "arabic",
                chn_name: "阿拉伯语",
                pinyin: "a'la'bo'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "de",
                eng_name: "german",
                chn_name: "德语",
                pinyin: "de'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "ru",
                eng_name: "russian",
                chn_name: "俄语",
                pinyin: "e'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "fr",
                eng_name: "french",
                chn_name: "法语",
                pinyin: "fa'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "fil",
                eng_name: "filipino",
                chn_name: "菲律宾语",
                pinyin: "fei'lv'bing'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "km",
                eng_name: "khmer",
                chn_name: "高棉语",
                pinyin: "gao'mian'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "ko",
                eng_name: "korean",
                chn_name: "韩语",
                pinyin: "han'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "lo",
                eng_name: "laos",
                chn_name: "老挝语",
                pinyin: "lao'wo'yu",
                space: !1,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "ms",
                eng_name: "malay",
                chn_name: "马来语",
                pinyin: "ma'lai'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "pt",
                eng_name: "portuguese",
                chn_name: "葡萄牙语",
                pinyin: "pu'tao'ya'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "ja",
                eng_name: "japanese",
                chn_name: "日语",
                pinyin: "ri'yu",
                space: !1,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "th",
                eng_name: "thai",
                chn_name: "泰语",
                pinyin: "tai'yu",
                space: !1,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "tr",
                eng_name: "turkish",
                chn_name: "土耳其语",
                pinyin: "tu'er'qi'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "es",
                eng_name: "spanish",
                chn_name: "西班牙语",
                pinyin: "xi'ban'ya'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "it",
                eng_name: "italian",
                chn_name: "意大利语",
                pinyin: "yi'da'li'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "id",
                eng_name: "indonesian",
                chn_name: "印度尼西亚语",
                pinyin: "yin'du'ni'xi'ya'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "vi",
                eng_name: "vietnamese",
                chn_name: "越南语",
                pinyin: "yue'lan'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !0,
                  selection_suggestion: !0,
                  dynamic_suggestion: !0,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                  {
                    code: "net-literature",
                    eng_name: "literature",
                    chn_name: "文学",
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "vi",
              eng_name: "vietnamese",
              chn_name: "越南语",
              pinyin: "yue'lan'yu",
              space: !0,
            },
            target_list: [
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "ct",
              eng_name: "cantonese",
              chn_name: "粤语",
              pinyin: "yue'yu",
              space: !1,
            },
            target_list: [
              {
                code: "zh",
                eng_name: "chinese",
                chn_name: "中文",
                pinyin: "zhong'wen",
                space: !1,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
          {
            source: {
              code: "zh",
              eng_name: "chinese",
              chn_name: "中文",
              pinyin: "zhong'wen",
              space: !1,
            },
            target_list: [
              {
                code: "ar",
                eng_name: "arabic",
                chn_name: "阿拉伯语",
                pinyin: "a'la'bo'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "de",
                eng_name: "german",
                chn_name: "德语",
                pinyin: "de'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "ru",
                eng_name: "russian",
                chn_name: "俄语",
                pinyin: "e'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "fr",
                eng_name: "french",
                chn_name: "法语",
                pinyin: "fa'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "fil",
                eng_name: "filipino",
                chn_name: "菲律宾语",
                pinyin: "fei'lv'bing'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "km",
                eng_name: "khmer",
                chn_name: "高棉语",
                pinyin: "gao'mian'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "ko",
                eng_name: "korean",
                chn_name: "韩语",
                pinyin: "han'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "lo",
                eng_name: "laos",
                chn_name: "老挝语",
                pinyin: "lao'wo'yu",
                space: !1,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "ms",
                eng_name: "malay",
                chn_name: "马来语",
                pinyin: "ma'lai'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "pt",
                eng_name: "portuguese",
                chn_name: "葡萄牙语",
                pinyin: "pu'tao'ya'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !0,
                  selection_suggestion: !1,
                  dynamic_suggestion: !0,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "ja",
                eng_name: "japanese",
                chn_name: "日语",
                pinyin: "ri'yu",
                space: !1,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "th",
                eng_name: "thai",
                chn_name: "泰语",
                pinyin: "tai'yu",
                space: !1,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "tr",
                eng_name: "turkish",
                chn_name: "土耳其语",
                pinyin: "tu'er'qi'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "es",
                eng_name: "spanish",
                chn_name: "西班牙语",
                pinyin: "xi'ban'ya'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "it",
                eng_name: "italian",
                chn_name: "意大利语",
                pinyin: "yi'da'li'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "id",
                eng_name: "indonesian",
                chn_name: "印度尼西亚语",
                pinyin: "yin'du'ni'xi'ya'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "en",
                eng_name: "english",
                chn_name: "英语",
                pinyin: "ying'yu",
                space: !0,
                preferable: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !0,
                  selection_suggestion: !0,
                  dynamic_suggestion: !0,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                  {
                    code: "net-literature",
                    eng_name: "literature",
                    chn_name: "文学",
                  },
                ],
              },
              {
                code: "vi",
                eng_name: "vietnamese",
                chn_name: "越南语",
                pinyin: "yue'lan'yu",
                space: !0,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
              {
                code: "ct",
                eng_name: "cantonese",
                chn_name: "粤语",
                pinyin: "yue'yu",
                space: !1,
                support: {
                  auto_translation: !0,
                  auto_translation_block: !0,
                  auto_translation_document: !0,
                  auto_translation_file: !0,
                  static_suggestion: !1,
                  selection_suggestion: !1,
                  dynamic_suggestion: !1,
                },
                domain: [
                  {
                    code: "general",
                    eng_name: "general",
                    chn_name: "通用",
                    preferable: !0,
                  },
                ],
              },
            ],
          },
        ],
        gf = (e) => Array.isArray(e) && e.length > 0,
        hf = () => new Date().getTime(),
        vf = () => {
          const [t, n] = (0, e.useState)([]),
            r = (0, e.useCallback)(async () => {
              chrome.storage.local.get(pf, (e) => {
                if (null != e && e.lang_list) {
                  const t = e.lang_list.time,
                    r = e.lang_list.list || [],
                    o = !t || hf() - t > 864e5;
                  gf(r) && n(r), o && a();
                } else a();
              });
            }, []);
          (0, e.useEffect)(() => {
            r();
          }, [r]);
          const o = (e, t = !0) => {
              n(e),
                chrome.storage.local.set({
                  [pf]: { time: t ? hf() : void 0, list: e },
                });
            },
            a = async () => {
              try {
                const t = await ((e = { header: { fn: "support_lang" } }),
                new Promise((t, n) => {
                  try {
                    e &&
                      e.header &&
                      window.TRANSMART_CRX_CLIENT_KEY &&
                      (e.header.client_key = window.TRANSMART_CRX_CLIENT_KEY),
                      chrome.runtime.sendMessage(
                        { message_type: "fetch", ...e },
                        (e) => {
                          chrome.runtime.lastError, t(e);
                        },
                      );
                  } catch (e) {
                    n(e);
                  }
                }));
                gf(t.full_lang_pair) ? o(t.full_lang_pair) : o(mf);
              } catch (e) {
                o(mf);
              }
              var e;
            };
          return { langList: t };
        };
      var yf = new Set(),
        bf = {
          closeBtn: !0,
          destroyOnClose: !1,
          draggable: !1,
          mode: "modal",
          placement: "top",
          preventScrollThrough: !0,
          showInAttachedElement: !1,
          showOverlay: !0,
          theme: "default",
        };
      function _f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function wf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _f(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : _f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Of(e) {
        return Number.isNaN(Number(e)) ? e : "".concat(Number(e), "px");
      }
      var Ef;
      "undefined" != typeof window &&
        window.document &&
        window.document.documentElement &&
        document.documentElement.addEventListener(
          "click",
          function (e) {
            (Ef = { x: e.clientX, y: e.clientY }),
              setTimeout(function () {
                Ef = null;
              }, 100);
          },
          !0,
        );
      var kf = (0, e.forwardRef)(function (t, n) {
        var r = a(yi("dialog"), 1)[0],
          o = t.prefixCls,
          c = t.attach,
          u = t.visible,
          s = t.mode,
          f = t.zIndex,
          d = t.showOverlay,
          g = t.onEscKeydown,
          h = void 0 === g ? m : g,
          v = t.onClosed,
          y = void 0 === v ? m : v,
          b = t.onClose,
          _ = void 0 === b ? m : b,
          w = t.onCloseBtnClick,
          O = void 0 === w ? m : w,
          E = t.onOverlayClick,
          k = void 0 === E ? m : E,
          x = t.onConfirm,
          S = void 0 === x ? m : x,
          P = t.preventScrollThrough,
          j = t.closeBtn,
          C = t.closeOnEscKeydown,
          N = t.confirmOnEnter,
          T = t.closeOnOverlayClick,
          D = t.destroyOnClose,
          z = t.showInAttachedElement,
          L = (0, e.useRef)(),
          I = (0, e.useRef)(),
          M = (0, e.useRef)(),
          A = (0, e.useRef)(),
          R = (0, e.useRef)(),
          F = (0, e.useRef)(),
          B = (0, e.useRef)(),
          V = (0, e.useRef)(!1),
          U = "modal" === s,
          W = "normal" === s,
          $ = t.draggable && "modeless" === s,
          H = "".concat(o, "__").concat(s);
        !(function (t, n) {
          (0, e.useEffect)(
            function () {
              var e;
              if (t)
                null != n &&
                  n.current &&
                  (yf.add(n),
                  null == n ||
                    null === (e = n.current) ||
                    void 0 === e ||
                    e.focus());
              else if (yf.has(n)) {
                var r, o;
                yf.delete(n);
                var a = Io(yf);
                null === (r = a[a.length - 1]) ||
                  void 0 === r ||
                  null === (o = r.current) ||
                  void 0 === o ||
                  o.focus();
              }
              return function () {
                yf.forEach(function (e) {
                  null === e.current && yf.delete(e);
                });
              };
            },
            [t, n],
          );
        })(u, L),
          (0, e.useImperativeHandle)(n, function () {
            return L.current;
          }),
          Lu(function () {
            (F.current = document.body.style.overflow),
              (B.current = document.body.style.cssText);
          }, []),
          Lu(
            function () {
              if (u) {
                if (U && "hidden" !== F.current && P && !z) {
                  var e = window.innerWidth - document.body.offsetWidth;
                  if ("" === B.current) {
                    var t = "overflow: hidden;";
                    e > 0 &&
                      (t += "position: relative;width: calc(100% - ".concat(
                        e,
                        "px);",
                      )),
                      (document.body.style.cssText = t);
                  } else
                    e > 0 &&
                      ((document.body.style.width = "calc(100% - ".concat(
                        e,
                        "px)",
                      )),
                      (document.body.style.position = "relative")),
                      (document.body.style.overflow = "hidden");
                }
                L.current && L.current.focus();
              } else if (U) {
                document.querySelectorAll("".concat(o, "__mode")).length < 1 &&
                  (document.body.style.cssText = B.current);
              }
              return function () {
                U
                  ? document.querySelectorAll("".concat(o, "__mode")).length <
                      1 &&
                    ((document.body.style.cssText = B.current),
                    (document.body.style.overflow = F.current))
                  : ((document.body.style.cssText = B.current),
                    (document.body.style.overflow = F.current));
              };
            },
            [P, c, u, s, U, z, o],
          ),
          (0, e.useEffect)(
            function () {
              u &&
                Ef &&
                I.current &&
                (I.current.style.transformOrigin = ""
                  .concat(Ef.x - I.current.offsetLeft, "px ")
                  .concat(Ef.y - I.current.offsetTop, "px"));
            },
            [u],
          );
        var q = function () {
            if ((L.current && (L.current.style.display = "none"), U && P)) {
              var e = document.querySelectorAll("".concat(o, "__mode"));
              U && e.length < 1 && (document.body.style.overflow = F.current);
            }
            if (!U) {
              var t = I.current.style;
              (t.position = "relative"), (t.left = "unset"), (t.top = "unset");
            }
            y && y();
          },
          Q = function (e) {
            d &&
              (null != T ? T : r.closeOnOverlayClick) &&
              (V.current
                ? (V.current = !1)
                : e.target === M.current &&
                  (k({ e }), _({ e, trigger: "overlay" })));
          },
          K = function (e) {
            O({ e }), _({ e, trigger: "close-btn" });
          },
          X = function (e) {
            "Escape" === e.key
              ? (e.stopPropagation(),
                h({ e }),
                (null != C ? C : r.closeOnEscKeydown) &&
                  _({ e, trigger: "esc" }))
              : ("Enter" !== e.key && "NumpadEnter" !== e.key) ||
                (e.stopPropagation(), N && S({ e }));
          };
        return (function () {
          var n = {};
          u && (n.display = "block");
          var r,
            a = wf(wf({}, n), {}, { zIndex: f }),
            m = (function () {
              var n = {};
              void 0 !== t.width && (n.width = Of(t.width)),
                "normal" === t.mode && (n.zIndex = "auto");
              var r = t.footer
                  ? e.createElement(
                      "div",
                      { className: "".concat(o, "__footer") },
                      t.footer,
                    )
                  : null,
                a = t.header,
                c = e.createElement(
                  "div",
                  { className: "".concat(o, "__body") },
                  t.body || t.children,
                ),
                u =
                  j &&
                  e.createElement(
                    "span",
                    { onClick: K, className: "".concat(o, "__close") },
                    j,
                  ),
                s =
                  "object" ===
                  ("undefined" == typeof window ? "undefined" : l(window)),
                f = s
                  ? window.innerHeight || document.documentElement.clientHeight
                  : void 0,
                d = s
                  ? window.innerWidth || document.documentElement.clientWidth
                  : void 0,
                m = wf(wf({}, n), t.style),
                g = { x: 0, y: 0 },
                h = function (e) {
                  var t = I.current,
                    n = t.style,
                    r = t.offsetWidth,
                    o = t.offsetHeight,
                    a = e.clientX - g.x,
                    i = e.clientY - g.y;
                  a < 0 && (a = 0),
                    i < 0 && (i = 0),
                    d - r - a < 0 && (a = d - r),
                    f - o - i < 0 && (i = f - o),
                    (n.position = "absolute"),
                    (n.left = "".concat(a, "px")),
                    (n.top = "".concat(i, "px"));
                },
                v = function e() {
                  (I.current.style.cursor = "default"),
                    document.removeEventListener("mousemove", h),
                    document.removeEventListener("mouseup", e);
                },
                y = {};
              if (t.top) {
                var b = Of(t.top);
                y.paddingTop = b;
              }
              var _ = p()(
                  "".concat(o, "__position"),
                  i({}, "".concat(o, "--top"), !!t.top),
                  "".concat(
                    t.placement && !t.top
                      ? "".concat(o, "--").concat(t.placement)
                      : "",
                  ),
                ),
                w = e.createElement(
                  "div",
                  { className: W ? "" : "".concat(o, "__wrap") },
                  e.createElement(
                    "div",
                    { className: W ? "" : _, style: y, onClick: Q, ref: M },
                    e.createElement(
                      "div",
                      {
                        ref: I,
                        style: m,
                        className: p()("".concat(o), "".concat(o, "--default")),
                        onMouseDown: function (e) {
                          if (
                            ((V.current = !0),
                            $ && e.currentTarget === e.target)
                          ) {
                            var t = I.current,
                              n = t.offsetLeft,
                              r = t.offsetTop,
                              o = t.offsetHeight;
                            if (t.offsetWidth > d || o > f) return;
                            I.current.style.cursor = "move";
                            var a = e.clientX - n,
                              i = e.clientY - r;
                            (g = { x: a, y: i }),
                              document.addEventListener("mousemove", h),
                              document.addEventListener("mouseup", v);
                          }
                        },
                      },
                      u,
                      a,
                      c,
                      r,
                    ),
                  ),
                );
              return e.createElement(
                el,
                {
                  in: t.visible,
                  appear: !0,
                  mountOnEnter: !0,
                  unmountOnExit: D,
                  timeout: 300,
                  classNames: "".concat(o, "-zoom"),
                  onEntered: t.onOpened,
                  onExited: q,
                  nodeRef: I,
                },
                w,
              );
            })(),
            g = p()(
              t.className,
              "".concat(o, "__ctx"),
              W ? "" : "".concat(o, "__ctx--fixed"),
              u ? H : "",
              U && z ? "".concat(o, "__ctx--absolute") : "",
              "modeless" === t.mode ? "".concat(o, "__ctx--modeless") : "",
            ),
            h = e.createElement(
              "div",
              { ref: L, className: g, style: a, onKeyDown: X, tabIndex: 0 },
              "modal" === s &&
                (d &&
                  (r = e.createElement(
                    el,
                    {
                      in: u,
                      appear: !0,
                      timeout: 300,
                      classNames: "".concat(o, "-fade"),
                      mountOnEnter: !0,
                      unmountOnExit: !0,
                      nodeRef: A,
                    },
                    e.createElement("div", {
                      ref: A,
                      className: "".concat(o, "__mask"),
                    }),
                  )),
                r),
              m,
            ),
            v = null;
          return (
            (u || L.current) &&
              (v =
                "" === c || W
                  ? h
                  : e.createElement(
                      el,
                      {
                        in: u,
                        appear: !0,
                        timeout: 300,
                        mountOnEnter: !0,
                        unmountOnExit: D,
                        nodeRef: R,
                      },
                      e.createElement(zo, { attach: c, ref: R }, h),
                    )),
            v
          );
        })();
      });
      function xf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Sf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? xf(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : xf(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      kf.defaultProps = bf;
      var Pf = function (e) {
          return "function" == typeof e;
        },
        jf = [
          "visible",
          "attach",
          "closeBtn",
          "footer",
          "onCancel",
          "onConfirm",
          "cancelBtn",
          "confirmBtn",
          "onClose",
          "isPlugin",
        ];
      function Cf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Nf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Cf(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Cf(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Tf = function (t, n) {
          var r = null;
          return (
            No(t)
              ? (r = e.createElement(df, Nf({}, n), t))
              : (0, e.isValidElement)(t)
                ? (r = t)
                : G(t)
                  ? (r = e.createElement(df, Nf(Nf({}, n), t)))
                  : te(t) && (r = t()),
            r
          );
        },
        Df = (0, e.forwardRef)(function (t, n) {
          var r = io().classPrefix,
            o = lo({
              CloseIcon: z,
              InfoCircleFilledIcon: So,
              CheckCircleFilledIcon: mo,
            }),
            i = o.CloseIcon,
            l = o.InfoCircleFilledIcon,
            c = o.CheckCircleFilledIcon,
            u = (0, e.useRef)(),
            s = (function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = a((0, e.useState)(t), 2),
                r = n[0],
                o = n[1],
                i = (0, e.useCallback)(function (e) {
                  o(function (t) {
                    return Sf(Sf({}, t), Pf(e) ? e(t) : e);
                  });
                }, []);
              return [r, i];
            })(
              Nf(
                {
                  width: 520,
                  visible: !1,
                  zIndex: 2500,
                  placement: "center",
                  mode: "modal",
                  showOverlay: !0,
                  destroyOnClose: !1,
                  draggable: !1,
                  preventScrollThrough: !0,
                  isPlugin: !1,
                },
                t,
              ),
            ),
            f = a(s, 2),
            d = f[0],
            p = f[1],
            g = a(yi("dialog"), 2),
            h = g[0],
            y = g[1],
            b = y(h.confirm),
            _ = y(h.cancel),
            w = d.visible,
            O = d.attach,
            E = d.closeBtn,
            k = d.footer,
            x = void 0 === k || k,
            S = d.onCancel,
            P = void 0 === S ? m : S,
            j = d.onConfirm,
            C = void 0 === j ? m : j,
            N = d.cancelBtn,
            T = void 0 === N ? _ : N,
            D = d.confirmBtn,
            L = void 0 === D ? b : D,
            I = d.onClose,
            M = void 0 === I ? m : I,
            A = d.isPlugin,
            R = void 0 !== A && A,
            F = v(d, jf);
          (0, e.useEffect)(
            function () {
              R ||
                p(function (e) {
                  return Nf(Nf({}, e), t);
                });
            },
            [t, p, R],
          );
          var B = "".concat(r, "-dialog");
          e.useImperativeHandle(n, function () {
            return {
              show: function () {
                p({ visible: !0 });
              },
              hide: function () {
                p({ visible: !1 });
              },
              destroy: function () {
                p({ visible: !1, destroyOnClose: !0 });
              },
              update: function (e) {
                p(function (t) {
                  return Nf(Nf({}, t), e);
                });
              },
            };
          });
          var V,
            U,
            W = (0, e.useMemo)(
              function () {
                if (!d.header) return null;
                var t = {
                  info: e.createElement(l, {
                    className: "".concat(r, "-is-info"),
                  }),
                  warning: e.createElement(l, {
                    className: "".concat(r, "-is-warning"),
                  }),
                  error: e.createElement(l, {
                    className: "".concat(r, "-is-error"),
                  }),
                  success: e.createElement(c, {
                    className: "".concat(r, "-is-success"),
                  }),
                };
                return e.createElement(
                  "div",
                  { className: "".concat(B, "__header") },
                  t[d.theme],
                  d.header,
                );
              },
              [d.header, d.theme, B, r],
            ),
            $ = function (e) {
              P({ e }), M({ e, trigger: "cancel" });
            },
            H = function (e) {
              C({ e });
            };
          return e.createElement(
            kf,
            Nf(
              Nf({}, F),
              {},
              {
                visible: w,
                prefixCls: B,
                header: W,
                attach: O,
                closeBtn:
                  !1 === E
                    ? null
                    : !0 === E
                      ? e.createElement(i, {
                          style: { verticalAlign: "unset" },
                        })
                      : E ||
                        e.createElement(i, {
                          style: { verticalAlign: "unset" },
                        }),
                classPrefix: r,
                onClose: M,
                onConfirm: C,
                footer:
                  !0 === x
                    ? ((V = Tf(T, { variant: "outline" })),
                      (U = Tf(L, { theme: "primary" })),
                      e.createElement(
                        e.Fragment,
                        null,
                        V && e.cloneElement(V, Nf({ onClick: $ }, V.props)),
                        U && e.cloneElement(U, Nf({ onClick: H }, U.props)),
                      ))
                    : x,
                ref: u,
              },
            ),
          );
        });
      function zf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Lf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? zf(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : zf(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      (Df.displayName = "Dialog"), (Df.defaultProps = bf);
      var If = function (n) {
        var r = e.createRef(),
          o = Lf({}, n),
          a = document.createDocumentFragment();
        t.render(
          e.createElement(
            Df,
            Lf(Lf({}, o), {}, { visible: !0, ref: r, isPlugin: !0 }),
          ),
          a,
          function () {
            document.activeElement.blur();
          },
        );
        var i,
          l,
          c =
            ((i = o.attach),
            (l = "function" == typeof i ? i() : i)
              ? No(l)
                ? document.querySelector(l)
                : l instanceof HTMLElement
                  ? l
                  : document.body
              : document.body);
        return (
          c ? c.appendChild(a) : Bu("Dialog", "attach is not exist"),
          {
            show: function () {
              var e;
              c.appendChild(a),
                null === (e = r.current) || void 0 === e || e.show();
            },
            hide: function () {
              var e;
              null === (e = r.current) || void 0 === e || e.destroy();
            },
            update: function (e) {
              var t;
              null === (t = r.current) || void 0 === t || t.update(e);
            },
            destroy: function () {
              var e;
              null === (e = r.current) || void 0 === e || e.destroy();
            },
          }
        );
      };
      (If.alert = function (e) {
        var t = Lf({}, e);
        return (t.cancelBtn = null), If(t);
      }),
        (If.confirm = function (e) {
          return If(e);
        });
      var Mf = Df;
      function Af() {
        return (
          (Af = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Af.apply(this, arguments)
        );
      }
      const Rf = ({ changeHotkey: t, defaultHotkey: n, ...r }) => {
          const o = (0, e.useRef)(),
            [a, i] = (0, e.useState)(!1),
            [l, c] = (0, e.useState)();
          (0, e.useEffect)(() => {
            c(n);
          }, [n]),
            (0, e.useEffect)(
              () => (
                r.visible && a && window.addEventListener("keydown", u),
                () => window.removeEventListener("keydown", u)
              ),
              [r.visible, a],
            );
          const u = (e) => {
            const { key: t } = e,
              n = [];
            e.metaKey && n.push("Meta"),
              e.shiftKey && n.push("Shift"),
              e.altKey && n.push("Alt"),
              e.ctrlKey && n.push("Ctrl"),
              "Control" === t || n.includes(t) || n.push(t),
              c(n.join(" + ")),
              e.preventDefault(),
              e.stopPropagation();
          };
          return e.createElement(
            Mf,
            Af({ header: "录制快捷键" }, r, {
              onConfirm: (e) => {
                var n;
                t(l), null === (n = r.onClose) || void 0 === n || n.call(r, e);
              },
            }),
            e.createElement(
              "div",
              { className: "trans-ctx--body" },
              e.createElement(qu, {
                ref: o,
                value: l,
                onFocus: () => i(!0),
                onBlur: () => i(!1),
                className: "trans-ctx--input",
                placeholder: "请按下按键或组合键",
              }),
            ),
            e.createElement(
              "div",
              { className: "trans-ctx--tip" },
              "不建议设置与其他应用冲突的快捷键",
            ),
          );
        },
        Ff = (0, e.memo)(Rf),
        Bf = [
          { label: "显示点击即可弹出翻译的图标", value: "popup" },
          { label: "立即弹出翻译", value: "immediately" },
          { label: "按下快捷键弹出翻译", value: "hotkey" },
        ],
        Vf = "auto",
        Uf = "zh",
        Wf = "popup",
        $f = !0,
        Hf = "Ctrl",
        qf = !0,
        Qf = "Ctrl + Shift + L",
        Kf = !0,
        Xf = !0,
        Yf = !1,
        Gf = "solid-line",
        Zf = !1,
        Jf = !1,
        ed = "dash-line",
        td = "#999",
        nd = !1,
        rd = () => {
          const { langList: t } = vf(),
            [n, r] = (0, e.useState)(Vf),
            [o, a] = (0, e.useState)(Uf),
            [i, l] = (0, e.useState)($f),
            [c, u] = (0, e.useState)(Wf),
            [s, f] = (0, e.useState)(Hf),
            [d, p] = (0, e.useState)(!1),
            [m, g] = (0, e.useState)(""),
            [h, v] = (0, e.useState)(Kf),
            [y, b] = (0, e.useState)(""),
            [_, w] = (0, e.useState)(Xf),
            [O, E] = (0, e.useState)(Yf),
            [k, x] = (0, e.useState)(Gf),
            [S, P] = (0, e.useState)(""),
            [j, C] = (0, e.useState)(Zf),
            [N, T] = (0, e.useState)(""),
            [D, z] = (0, e.useState)(Jf),
            [L, I] = (0, e.useState)(ed),
            [M, A] = (0, e.useState)(td),
            [R, F] = (0, e.useState)(nd),
            [B, V] = (0, e.useState)(!1),
            [U, W] = (0, e.useState)(qf),
            [$, H] = (0, e.useState)(Qf),
            [q, Q] = (0, e.useState)([]),
            K = (0, e.useCallback)(async () => {
              chrome.storage.sync.get(null, (e) => {
                !e || (e && !Object.keys(e).length)
                  ? X()
                  : (void 0 !== e.defaultSourceLang && r(e.defaultSourceLang),
                    void 0 !== e.defaultTargetLang && a(e.defaultTargetLang),
                    void 0 !== e.isChooseWordsOpen && l(e.isChooseWordsOpen),
                    void 0 !== e.worksOpenOption && u(e.worksOpenOption),
                    void 0 !== e.hotkey && f(e.hotkey),
                    void 0 !== e.isQuickShowPageTranslate &&
                      W(e.isQuickShowPageTranslate),
                    void 0 !== e.pageTranslateHotkey &&
                      H(e.pageTranslateHotkey),
                    void 0 !== e.validLangList && Q(e.validLangList),
                    void 0 !== e.fontColor && g(e.fontColor),
                    void 0 !== e.notSetFontColor && v(e.notSetFontColor),
                    void 0 !== e.fontBgColor && b(e.fontBgColor),
                    void 0 !== e.notSetFontBgColor && w(e.notSetFontBgColor),
                    void 0 !== e.textUnderline && E(e.textUnderline),
                    void 0 !== e.underlineType && x(e.underlineType),
                    void 0 !== e.underlineColor && P(e.underlineColor),
                    void 0 !== e.linkStyle && C(e.linkStyle),
                    void 0 !== e.linkColor && T(e.linkColor),
                    void 0 !== e.borderStyle && z(e.borderStyle),
                    void 0 !== e.borderColor && A(e.borderColor),
                    void 0 !== e.borderType && I(e.borderType),
                    void 0 !== e.tgtHighlight && F(e.tgtHighlight));
              });
            }, []);
          (0, e.useEffect)(() => {
            K();
          }, [K]);
          const X = async () => {
              r(Vf),
                a(Uf),
                l($f),
                u(Wf),
                f(Hf),
                W(qf),
                H(Qf),
                Q(["en"]),
                g(""),
                v(Kf),
                b(""),
                w(Xf),
                E(Yf),
                P(""),
                x(Gf),
                C(Zf),
                T(""),
                z(Jf),
                A(td),
                I(ed),
                F(nd),
                chrome.storage.sync.set({
                  defaultSourceLang: Vf,
                  defaultTargetLang: Uf,
                  isChooseWordsOpen: $f,
                  worksOpenOption: Wf,
                  hotkey: Hf,
                  isQuickShowPageTranslate: qf,
                  pageTranslateHotkey: Qf,
                  validLangList: ["en"],
                  fontColor: "",
                  notSetFontColor: Kf,
                  fontBgColor: "",
                  notSetFontBgColor: Xf,
                  textUnderline: Yf,
                  underlineColor: "",
                  underlineType: Gf,
                  linkStyle: Zf,
                  linkColor: "",
                  borderStyle: Jf,
                  borderColor: td,
                  borderType: ed,
                  tgtHighlight: nd,
                });
            },
            Y = () => {
              p(!d);
            },
            G = () => {
              V(!B);
            };
          return e.createElement(
            "div",
            { className: "trans-ctx--container-options" },
            e.createElement(
              "div",
              { className: "trans-ctx--container-header" },
              e.createElement(
                "div",
                { className: "trans-ctx--name" },
                "TenX翻译插件",
              ),
            ),
            e.createElement(
              "div",
              { className: "trans-ctx--container-config-panel" },
              e.createElement(
                "div",
                { className: "trans-ctx--wrapper-config-panel" },
                e.createElement(
                  "div",
                  { className: "trans-ctx--title" },
                  "设置选项",
                ),
                e.createElement(
                  "div",
                  { className: "trans-ctx--form-item" },
                  e.createElement(
                    "div",
                    { className: "trans-ctx--form-item-label" },
                    "默认译文语言：",
                  ),
                  e.createElement(
                    Ts,
                    {
                      className: "trans-ctx--selector-language",
                      value: o,
                      onChange: (e) => {
                        a(e);
                      },
                    },
                    t.map(({ source: { chn_name: t, code: n } }) =>
                      e.createElement(Ts.Option, { key: n, value: n }, t),
                    ),
                  ),
                  e.createElement(
                    "div",
                    { className: "trans-ctx--tip" },
                    "修改该选项后需要刷新翻译的页面",
                  ),
                ),
                e.createElement(
                  "div",
                  { className: "trans-ctx--form-item" },
                  e.createElement(
                    "div",
                    { className: "trans-ctx--form-item-label" },
                    "划词翻译选项：",
                  ),
                  e.createElement(
                    "div",
                    null,
                    e.createElement(
                      Qs,
                      {
                        className: "trans-ctx--transmart-crx-checkbox",
                        checked: i,
                        onChange: () => {
                          l(!i);
                        },
                      },
                      "开启划词翻译",
                    ),
                    e.createElement(
                      "div",
                      { className: "trans-ctx--choose-words-options" },
                      !i &&
                        e.createElement("div", {
                          className: "trans-ctx--mask",
                        }),
                      e.createElement(
                        "div",
                        { className: "trans-ctx--transmart-crx-option-title" },
                        "选中网页上的文字或句子时：",
                      ),
                      e.createElement(
                        tf.Group,
                        {
                          value: c,
                          onChange: (e) => {
                            u(e);
                          },
                        },
                        Bf.map(({ label: t, value: n }) =>
                          e.createElement(
                            tf,
                            { key: n, value: n },
                            e.createElement("span", null, t),
                            "hotkey" === n &&
                              e.createElement(
                                "span",
                                {
                                  className:
                                    "trans-ctx--transmart-crx-option-tip",
                                },
                                "快捷键：",
                                s,
                                e.createElement(
                                  lf,
                                  {
                                    underline: !0,
                                    theme: "primary",
                                    className: "trans-ctx--btn-text",
                                    onClick: (e) => {
                                      e.preventDefault(),
                                        e.stopPropagation(),
                                        Y();
                                    },
                                  },
                                  "更改",
                                ),
                              ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                e.createElement(
                  "div",
                  { className: "trans-ctx--form-item" },
                  e.createElement(
                    "div",
                    { className: "trans-ctx--form-item-label" },
                    "整页翻译选项：",
                  ),
                  e.createElement(
                    "div",
                    { className: "trans-ctx--page-translate-options" },
                    e.createElement(
                      "div",
                      { className: "trans-ctx--choose-words-options" },
                      e.createElement(
                        Qs,
                        {
                          className: "trans-ctx--transmart-crx-checkbox",
                          checked: U,
                          onChange: () => {
                            W(!U);
                          },
                        },
                        "整页翻译快捷键开关",
                      ),
                      e.createElement(
                        "span",
                        { className: "trans-ctx--transmart-crx-option-tip" },
                        "快捷键：",
                        $,
                        e.createElement(
                          lf,
                          {
                            underline: !0,
                            theme: "primary",
                            className: "trans-ctx--btn-text",
                            onClick: G,
                          },
                          "更改",
                        ),
                      ),
                    ),
                    e.createElement(
                      "div",
                      { className: "trans-ctx--choose-words-options" },
                      e.createElement(
                        "div",
                        { className: "trans-ctx--transmart-crx-option-title" },
                        "默认翻译的页面源语言列表：",
                      ),
                      e.createElement(
                        Ts,
                        {
                          className: "trans-ctx--lang-list-selector",
                          multiple: !0,
                          value: q,
                          onChange: (e) => {
                            Q(e);
                          },
                        },
                        t.map(({ source: { chn_name: t, code: n } }) =>
                          e.createElement(Ts.Option, { key: n, value: n }, t),
                        ),
                      ),
                    ),
                    e.createElement(
                      "div",
                      { className: "trans-ctx--target-text-style-config" },
                      e.createElement(
                        Qs,
                        {
                          className: "trans-ctx--transmart-crx-checkbox",
                          checked: R,
                          onChange: F,
                        },
                        "双语对照译文下划线",
                      ),
                    ),
                  ),
                ),
                e.createElement(
                  "div",
                  { className: "trans-ctx--btn-group" },
                  e.createElement(
                    df,
                    {
                      onClick: () => {
                        chrome.storage.sync.set({
                          defaultSourceLang: n,
                          defaultTargetLang: o,
                          isChooseWordsOpen: i,
                          worksOpenOption: c,
                          hotkey: s,
                          isQuickShowPageTranslate: U,
                          pageTranslateHotkey: $,
                          validLangList: q,
                          fontColor: m,
                          notSetFontColor: h,
                          fontBgColor: y,
                          notSetFontBgColor: _,
                          textUnderline: O,
                          underlineColor: S,
                          underlineType: k,
                          linkStyle: j,
                          linkColor: N,
                          borderStyle: D,
                          borderColor: M,
                          borderType: L,
                          tgtHighlight: R,
                        }),
                          ua.success("配置已保存");
                      },
                    },
                    "保存",
                  ),
                  e.createElement(
                    df,
                    {
                      theme: "default",
                      onClick: () => {
                        X(), ua.success("配置已重置");
                      },
                    },
                    "重置",
                  ),
                ),
              ),
            ),
            e.createElement(Ff, {
              defaultHotkey: s,
              visible: d,
              changeHotkey: f,
              onClose: Y,
            }),
            e.createElement(Ff, {
              defaultHotkey: $,
              visible: B,
              changeHotkey: H,
              onClose: G,
            }),
          );
        },
        od = document.querySelector("#app");
      t.render(e.createElement(rd, null), od);
    })();
})();
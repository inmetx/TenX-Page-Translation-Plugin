/*! For license information please see content.js.LICENSE.txt */
(() => {
  var e = {
      5331: (e, t, n) => {
        "use strict";
        t.Z = void 0;
        var r,
          o = (r = n(5509)) && r.__esModule ? r : { default: r };
        var a = function (e, t) {
          if ("throw" === t) throw new Error(e);
          return null;
        };
        t.Z = function (e, t, n) {
          var r = Object.keys(t),
            i = n || {},
            l = i.handleMissingStyleName,
            u = void 0 === l ? o.default.handleMissingStyleName : l,
            c = i.autoResolveMultipleImports,
            s = void 0 === c ? o.default.autoResolveMultipleImports : c;
          return e
            ? e
                .split(" ")
                .filter(function (e) {
                  return e;
                })
                .map(function (e) {
                  if (
                    (function (e) {
                      return -1 !== e.indexOf(".");
                    })(e)
                  )
                    return (function (e, t, n) {
                      var r = e.split("."),
                        i = r[0],
                        l = r[1],
                        u = n || o.default.handleMissingStyleName;
                      return l
                        ? t[i]
                          ? t[i][l]
                            ? t[i][l]
                            : a("CSS module does not exist: " + l, u)
                          : a("CSS module import does not exist: " + i, u)
                        : a("Invalid style name: " + e, u);
                    })(e, t, u);
                  if (0 === r.length)
                    throw new Error(
                      "Cannot use styleName attribute for style name '" +
                        e +
                        "' without importing at least one stylesheet.",
                    );
                  if (r.length > 1) {
                    if (!s)
                      throw new Error(
                        "Cannot use anonymous style name '" +
                          e +
                          "' with more than one stylesheet import without setting 'autoResolveMultipleImports' to true.",
                      );
                    return (function (e, t, n) {
                      var r = n || o.default.handleMissingStyleName,
                        i = Object.keys(t)
                          .map(function (n) {
                            return t[n][e] && n;
                          })
                          .filter(function (e) {
                            return e;
                          });
                      if (i.length > 1)
                        throw new Error(
                          'Cannot resolve styleName "' +
                            e +
                            '" because it is present in multiple imports:\n\n\t' +
                            i.join("\n\t") +
                            '\n\nYou can resolve this by using a named import, e.g:\n\n\timport foo from "' +
                            i[0] +
                            '";\n\t<div styleName="foo.' +
                            e +
                            '" />\n\n',
                        );
                      return 0 === i.length
                        ? a("Could not resolve the styleName '" + e + "'.", r)
                        : t[i[0]][e];
                    })(e, t, u);
                  }
                  var n = t[r[0]];
                  return n[e]
                    ? n[e]
                    : a("Could not resolve the styleName '" + e + "'.", u);
                })
                .filter(function (e) {
                  return e;
                })
                .join(" ")
            : "";
        };
      },
      5509: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = {
          attributeNames: { styleName: "className" },
          generateScopedName: "[path]___[name]__[local]___[hash:base64:5]",
          handleMissingStyleName: "throw",
        };
        t.default = n;
      },
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
      9841: (e, t, n) => {
        "use strict";
        function r(e) {
          var t,
            n,
            o = "";
          if ("string" == typeof e || "number" == typeof e) o += e;
          else if ("object" == typeof e)
            if (Array.isArray(e))
              for (t = 0; t < e.length; t++)
                e[t] && (n = r(e[t])) && (o && (o += " "), (o += n));
            else for (t in e) e[t] && (o && (o += " "), (o += t));
          return o;
        }
        function o() {
          for (var e, t, n = 0, o = ""; n < arguments.length; )
            (e = arguments[n++]) && (t = r(e)) && (o && (o += " "), (o += t));
          return o;
        }
        n.r(t), n.d(t, { clsx: () => o, default: () => a });
        const a = o;
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
        function u(e) {
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
        var c = Object.defineProperty,
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
            for (var l = u(t), g = u(n), h = 0; h < i.length; ++h) {
              var v = i[h];
              if (!(a[v] || (r && r[v]) || (g && g[v]) || (l && l[v]))) {
                var y = d(n, v);
                try {
                  c(t, v, y);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      5839: (e, t, n) => {
        var r = n(751)(n(3401), "DataView");
        e.exports = r;
      },
      3783: (e, t, n) => {
        var r = n(9219),
          o = n(5937),
          a = n(4054),
          i = n(9991),
          l = n(2753);
        function u(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = o),
          (u.prototype.get = a),
          (u.prototype.has = i),
          (u.prototype.set = l),
          (e.exports = u);
      },
      624: (e, t, n) => {
        var r = n(3647),
          o = n(73),
          a = n(7903),
          i = n(3832),
          l = n(7074);
        function u(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = o),
          (u.prototype.get = a),
          (u.prototype.has = i),
          (u.prototype.set = l),
          (e.exports = u);
      },
      7973: (e, t, n) => {
        var r = n(751)(n(3401), "Map");
        e.exports = r;
      },
      2767: (e, t, n) => {
        var r = n(3070),
          o = n(3638),
          a = n(8444),
          i = n(5877),
          l = n(8990);
        function u(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = o),
          (u.prototype.get = a),
          (u.prototype.has = i),
          (u.prototype.set = l),
          (e.exports = u);
      },
      712: (e, t, n) => {
        var r = n(751)(n(3401), "Promise");
        e.exports = r;
      },
      353: (e, t, n) => {
        var r = n(751)(n(3401), "Set");
        e.exports = r;
      },
      5561: (e, t, n) => {
        var r = n(2767),
          o = n(16),
          a = n(4832);
        function i(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
        }
        (i.prototype.add = i.prototype.push = o),
          (i.prototype.has = a),
          (e.exports = i);
      },
      14: (e, t, n) => {
        var r = n(624),
          o = n(9882),
          a = n(6639),
          i = n(3887),
          l = n(2603),
          u = n(7853);
        function c(e) {
          var t = (this.__data__ = new r(e));
          this.size = t.size;
        }
        (c.prototype.clear = o),
          (c.prototype.delete = a),
          (c.prototype.get = i),
          (c.prototype.has = l),
          (c.prototype.set = u),
          (e.exports = c);
      },
      6293: (e, t, n) => {
        var r = n(3401).Symbol;
        e.exports = r;
      },
      9069: (e, t, n) => {
        var r = n(3401).Uint8Array;
        e.exports = r;
      },
      3180: (e, t, n) => {
        var r = n(751)(n(3401), "WeakMap");
        e.exports = r;
      },
      1177: (e) => {
        e.exports = function (e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length, o = 0, a = [];
            ++n < r;

          ) {
            var i = e[n];
            t(i, n, e) && (a[o++] = i);
          }
          return a;
        };
      },
      7189: (e, t, n) => {
        var r = n(5606),
          o = n(3735),
          a = n(2428),
          i = n(7757),
          l = n(911),
          u = n(6868),
          c = Object.prototype.hasOwnProperty;
        e.exports = function (e, t) {
          var n = a(e),
            s = !n && o(e),
            f = !n && !s && i(e),
            d = !n && !s && !f && u(e),
            p = n || s || f || d,
            m = p ? r(e.length, String) : [],
            g = m.length;
          for (var h in e)
            (!t && !c.call(e, h)) ||
              (p &&
                ("length" == h ||
                  (f && ("offset" == h || "parent" == h)) ||
                  (d &&
                    ("buffer" == h ||
                      "byteLength" == h ||
                      "byteOffset" == h)) ||
                  l(h, g))) ||
              m.push(h);
          return m;
        };
      },
      6581: (e) => {
        e.exports = function (e, t) {
          for (var n = -1, r = t.length, o = e.length; ++n < r; )
            e[o + n] = t[n];
          return e;
        };
      },
      3531: (e) => {
        e.exports = function (e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (t(e[n], n, e)) return !0;
          return !1;
        };
      },
      5869: (e, t, n) => {
        var r = n(3284);
        e.exports = function (e, t) {
          for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
          return -1;
        };
      },
      4755: (e, t, n) => {
        var r = n(6581),
          o = n(2428);
        e.exports = function (e, t, n) {
          var a = t(e);
          return o(e) ? a : r(a, n(e));
        };
      },
      7398: (e, t, n) => {
        var r = n(6293),
          o = n(6945),
          a = n(1584),
          i = r ? r.toStringTag : void 0;
        e.exports = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : i && i in Object(e)
              ? o(e)
              : a(e);
        };
      },
      5227: (e, t, n) => {
        var r = n(7398),
          o = n(9109);
        e.exports = function (e) {
          return o(e) && "[object Arguments]" == r(e);
        };
      },
      3892: (e, t, n) => {
        var r = n(6502),
          o = n(9109);
        e.exports = function e(t, n, a, i, l) {
          return (
            t === n ||
            (null == t || null == n || (!o(t) && !o(n))
              ? t != t && n != n
              : r(t, n, a, i, e, l))
          );
        };
      },
      6502: (e, t, n) => {
        var r = n(14),
          o = n(1979),
          a = n(5473),
          i = n(7287),
          l = n(5064),
          u = n(2428),
          c = n(7757),
          s = n(6868),
          f = "[object Arguments]",
          d = "[object Array]",
          p = "[object Object]",
          m = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n, g, h, v) {
          var y = u(e),
            b = u(t),
            _ = y ? d : l(e),
            w = b ? d : l(t),
            E = (_ = _ == f ? p : _) == p,
            x = (w = w == f ? p : w) == p,
            O = _ == w;
          if (O && c(e)) {
            if (!c(t)) return !1;
            (y = !0), (E = !1);
          }
          if (O && !E)
            return (
              v || (v = new r()),
              y || s(e) ? o(e, t, n, g, h, v) : a(e, t, _, n, g, h, v)
            );
          if (!(1 & n)) {
            var S = E && m.call(e, "__wrapped__"),
              k = x && m.call(t, "__wrapped__");
            if (S || k) {
              var j = S ? e.value() : e,
                P = k ? t.value() : t;
              return v || (v = new r()), h(j, P, n, g, v);
            }
          }
          return !!O && (v || (v = new r()), i(e, t, n, g, h, v));
        };
      },
      9578: (e, t, n) => {
        var r = n(7419),
          o = n(3283),
          a = n(6627),
          i = n(9235),
          l = /^\[object .+?Constructor\]$/,
          u = Function.prototype,
          c = Object.prototype,
          s = u.toString,
          f = c.hasOwnProperty,
          d = RegExp(
            "^" +
              s
                .call(f)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          );
        e.exports = function (e) {
          return !(!a(e) || o(e)) && (r(e) ? d : l).test(i(e));
        };
      },
      9126: (e, t, n) => {
        var r = n(7398),
          o = n(6705),
          a = n(9109),
          i = {};
        (i["[object Float32Array]"] =
          i["[object Float64Array]"] =
          i["[object Int8Array]"] =
          i["[object Int16Array]"] =
          i["[object Int32Array]"] =
          i["[object Uint8Array]"] =
          i["[object Uint8ClampedArray]"] =
          i["[object Uint16Array]"] =
          i["[object Uint32Array]"] =
            !0),
          (i["[object Arguments]"] =
            i["[object Array]"] =
            i["[object ArrayBuffer]"] =
            i["[object Boolean]"] =
            i["[object DataView]"] =
            i["[object Date]"] =
            i["[object Error]"] =
            i["[object Function]"] =
            i["[object Map]"] =
            i["[object Number]"] =
            i["[object Object]"] =
            i["[object RegExp]"] =
            i["[object Set]"] =
            i["[object String]"] =
            i["[object WeakMap]"] =
              !1),
          (e.exports = function (e) {
            return a(e) && o(e.length) && !!i[r(e)];
          });
      },
      790: (e, t, n) => {
        var r = n(2403),
          o = n(9339),
          a = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          if (!r(e)) return o(e);
          var t = [];
          for (var n in Object(e))
            a.call(e, n) && "constructor" != n && t.push(n);
          return t;
        };
      },
      5606: (e) => {
        e.exports = function (e, t) {
          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
          return r;
        };
      },
      3897: (e, t, n) => {
        var r = n(5012),
          o = /^\s+/;
        e.exports = function (e) {
          return e ? e.slice(0, r(e) + 1).replace(o, "") : e;
        };
      },
      2715: (e) => {
        e.exports = function (e) {
          return function (t) {
            return e(t);
          };
        };
      },
      8529: (e) => {
        e.exports = function (e, t) {
          return e.has(t);
        };
      },
      4640: (e, t, n) => {
        var r = n(3401)["__core-js_shared__"];
        e.exports = r;
      },
      1979: (e, t, n) => {
        var r = n(5561),
          o = n(3531),
          a = n(8529);
        e.exports = function (e, t, n, i, l, u) {
          var c = 1 & n,
            s = e.length,
            f = t.length;
          if (s != f && !(c && f > s)) return !1;
          var d = u.get(e),
            p = u.get(t);
          if (d && p) return d == t && p == e;
          var m = -1,
            g = !0,
            h = 2 & n ? new r() : void 0;
          for (u.set(e, t), u.set(t, e); ++m < s; ) {
            var v = e[m],
              y = t[m];
            if (i) var b = c ? i(y, v, m, t, e, u) : i(v, y, m, e, t, u);
            if (void 0 !== b) {
              if (b) continue;
              g = !1;
              break;
            }
            if (h) {
              if (
                !o(t, function (e, t) {
                  if (!a(h, t) && (v === e || l(v, e, n, i, u)))
                    return h.push(t);
                })
              ) {
                g = !1;
                break;
              }
            } else if (v !== y && !l(v, y, n, i, u)) {
              g = !1;
              break;
            }
          }
          return u.delete(e), u.delete(t), g;
        };
      },
      5473: (e, t, n) => {
        var r = n(6293),
          o = n(9069),
          a = n(3284),
          i = n(1979),
          l = n(8368),
          u = n(3005),
          c = r ? r.prototype : void 0,
          s = c ? c.valueOf : void 0;
        e.exports = function (e, t, n, r, c, f, d) {
          switch (n) {
            case "[object DataView]":
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              (e = e.buffer), (t = t.buffer);
            case "[object ArrayBuffer]":
              return !(e.byteLength != t.byteLength || !f(new o(e), new o(t)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return a(+e, +t);
            case "[object Error]":
              return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
              return e == t + "";
            case "[object Map]":
              var p = l;
            case "[object Set]":
              var m = 1 & r;
              if ((p || (p = u), e.size != t.size && !m)) return !1;
              var g = d.get(e);
              if (g) return g == t;
              (r |= 2), d.set(e, t);
              var h = i(p(e), p(t), r, c, f, d);
              return d.delete(e), h;
            case "[object Symbol]":
              if (s) return s.call(e) == s.call(t);
          }
          return !1;
        };
      },
      7287: (e, t, n) => {
        var r = n(393),
          o = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n, a, i, l) {
          var u = 1 & n,
            c = r(e),
            s = c.length;
          if (s != r(t).length && !u) return !1;
          for (var f = s; f--; ) {
            var d = c[f];
            if (!(u ? d in t : o.call(t, d))) return !1;
          }
          var p = l.get(e),
            m = l.get(t);
          if (p && m) return p == t && m == e;
          var g = !0;
          l.set(e, t), l.set(t, e);
          for (var h = u; ++f < s; ) {
            var v = e[(d = c[f])],
              y = t[d];
            if (a) var b = u ? a(y, v, d, t, e, l) : a(v, y, d, e, t, l);
            if (!(void 0 === b ? v === y || i(v, y, n, a, l) : b)) {
              g = !1;
              break;
            }
            h || (h = "constructor" == d);
          }
          if (g && !h) {
            var _ = e.constructor,
              w = t.constructor;
            _ == w ||
              !("constructor" in e) ||
              !("constructor" in t) ||
              ("function" == typeof _ &&
                _ instanceof _ &&
                "function" == typeof w &&
                w instanceof w) ||
              (g = !1);
          }
          return l.delete(e), l.delete(t), g;
        };
      },
      151: (e, t, n) => {
        var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
        e.exports = r;
      },
      393: (e, t, n) => {
        var r = n(4755),
          o = n(9128),
          a = n(8834);
        e.exports = function (e) {
          return r(e, a, o);
        };
      },
      1499: (e, t, n) => {
        var r = n(1889);
        e.exports = function (e, t) {
          var n = e.__data__;
          return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        };
      },
      751: (e, t, n) => {
        var r = n(9578),
          o = n(8027);
        e.exports = function (e, t) {
          var n = o(e, t);
          return r(n) ? n : void 0;
        };
      },
      6945: (e, t, n) => {
        var r = n(6293),
          o = Object.prototype,
          a = o.hasOwnProperty,
          i = o.toString,
          l = r ? r.toStringTag : void 0;
        e.exports = function (e) {
          var t = a.call(e, l),
            n = e[l];
          try {
            e[l] = void 0;
            var r = !0;
          } catch (e) {}
          var o = i.call(e);
          return r && (t ? (e[l] = n) : delete e[l]), o;
        };
      },
      9128: (e, t, n) => {
        var r = n(1177),
          o = n(5615),
          a = Object.prototype.propertyIsEnumerable,
          i = Object.getOwnPropertySymbols,
          l = i
            ? function (e) {
                return null == e
                  ? []
                  : ((e = Object(e)),
                    r(i(e), function (t) {
                      return a.call(e, t);
                    }));
              }
            : o;
        e.exports = l;
      },
      5064: (e, t, n) => {
        var r = n(5839),
          o = n(7973),
          a = n(712),
          i = n(353),
          l = n(3180),
          u = n(7398),
          c = n(9235),
          s = "[object Map]",
          f = "[object Promise]",
          d = "[object Set]",
          p = "[object WeakMap]",
          m = "[object DataView]",
          g = c(r),
          h = c(o),
          v = c(a),
          y = c(i),
          b = c(l),
          _ = u;
        ((r && _(new r(new ArrayBuffer(1))) != m) ||
          (o && _(new o()) != s) ||
          (a && _(a.resolve()) != f) ||
          (i && _(new i()) != d) ||
          (l && _(new l()) != p)) &&
          (_ = function (e) {
            var t = u(e),
              n = "[object Object]" == t ? e.constructor : void 0,
              r = n ? c(n) : "";
            if (r)
              switch (r) {
                case g:
                  return m;
                case h:
                  return s;
                case v:
                  return f;
                case y:
                  return d;
                case b:
                  return p;
              }
            return t;
          }),
          (e.exports = _);
      },
      8027: (e) => {
        e.exports = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      },
      9219: (e, t, n) => {
        var r = n(4556);
        e.exports = function () {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
      },
      5937: (e) => {
        e.exports = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        };
      },
      4054: (e, t, n) => {
        var r = n(4556),
          o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t = this.__data__;
          if (r) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return o.call(t, e) ? t[e] : void 0;
        };
      },
      9991: (e, t, n) => {
        var r = n(4556),
          o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t = this.__data__;
          return r ? void 0 !== t[e] : o.call(t, e);
        };
      },
      2753: (e, t, n) => {
        var r = n(4556);
        e.exports = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      },
      911: (e) => {
        var t = /^(?:0|[1-9]\d*)$/;
        e.exports = function (e, n) {
          var r = typeof e;
          return (
            !!(n = null == n ? 9007199254740991 : n) &&
            ("number" == r || ("symbol" != r && t.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < n
          );
        };
      },
      1889: (e) => {
        e.exports = function (e) {
          var t = typeof e;
          return "string" == t ||
            "number" == t ||
            "symbol" == t ||
            "boolean" == t
            ? "__proto__" !== e
            : null === e;
        };
      },
      3283: (e, t, n) => {
        var r,
          o = n(4640),
          a = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + r
            : "";
        e.exports = function (e) {
          return !!a && a in e;
        };
      },
      2403: (e) => {
        var t = Object.prototype;
        e.exports = function (e) {
          var n = e && e.constructor;
          return e === (("function" == typeof n && n.prototype) || t);
        };
      },
      3647: (e) => {
        e.exports = function () {
          (this.__data__ = []), (this.size = 0);
        };
      },
      73: (e, t, n) => {
        var r = n(5869),
          o = Array.prototype.splice;
        e.exports = function (e) {
          var t = this.__data__,
            n = r(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
          );
        };
      },
      7903: (e, t, n) => {
        var r = n(5869);
        e.exports = function (e) {
          var t = this.__data__,
            n = r(t, e);
          return n < 0 ? void 0 : t[n][1];
        };
      },
      3832: (e, t, n) => {
        var r = n(5869);
        e.exports = function (e) {
          return r(this.__data__, e) > -1;
        };
      },
      7074: (e, t, n) => {
        var r = n(5869);
        e.exports = function (e, t) {
          var n = this.__data__,
            o = r(n, e);
          return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
        };
      },
      3070: (e, t, n) => {
        var r = n(3783),
          o = n(624),
          a = n(7973);
        e.exports = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (a || o)(),
              string: new r(),
            });
        };
      },
      3638: (e, t, n) => {
        var r = n(1499);
        e.exports = function (e) {
          var t = r(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        };
      },
      8444: (e, t, n) => {
        var r = n(1499);
        e.exports = function (e) {
          return r(this, e).get(e);
        };
      },
      5877: (e, t, n) => {
        var r = n(1499);
        e.exports = function (e) {
          return r(this, e).has(e);
        };
      },
      8990: (e, t, n) => {
        var r = n(1499);
        e.exports = function (e, t) {
          var n = r(this, e),
            o = n.size;
          return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
        };
      },
      8368: (e) => {
        e.exports = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        };
      },
      4556: (e, t, n) => {
        var r = n(751)(Object, "create");
        e.exports = r;
      },
      9339: (e, t, n) => {
        var r = n(3518)(Object.keys, Object);
        e.exports = r;
      },
      126: (e, t, n) => {
        e = n.nmd(e);
        var r = n(151),
          o = t && !t.nodeType && t,
          a = o && e && !e.nodeType && e,
          i = a && a.exports === o && r.process,
          l = (function () {
            try {
              var e = a && a.require && a.require("util").types;
              return e || (i && i.binding && i.binding("util"));
            } catch (e) {}
          })();
        e.exports = l;
      },
      1584: (e) => {
        var t = Object.prototype.toString;
        e.exports = function (e) {
          return t.call(e);
        };
      },
      3518: (e) => {
        e.exports = function (e, t) {
          return function (n) {
            return e(t(n));
          };
        };
      },
      3401: (e, t, n) => {
        var r = n(151),
          o = "object" == typeof self && self && self.Object === Object && self,
          a = r || o || Function("return this")();
        e.exports = a;
      },
      16: (e) => {
        e.exports = function (e) {
          return this.__data__.set(e, "__lodash_hash_undefined__"), this;
        };
      },
      4832: (e) => {
        e.exports = function (e) {
          return this.__data__.has(e);
        };
      },
      3005: (e) => {
        e.exports = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        };
      },
      9882: (e, t, n) => {
        var r = n(624);
        e.exports = function () {
          (this.__data__ = new r()), (this.size = 0);
        };
      },
      6639: (e) => {
        e.exports = function (e) {
          var t = this.__data__,
            n = t.delete(e);
          return (this.size = t.size), n;
        };
      },
      3887: (e) => {
        e.exports = function (e) {
          return this.__data__.get(e);
        };
      },
      2603: (e) => {
        e.exports = function (e) {
          return this.__data__.has(e);
        };
      },
      7853: (e, t, n) => {
        var r = n(624),
          o = n(7973),
          a = n(2767);
        e.exports = function (e, t) {
          var n = this.__data__;
          if (n instanceof r) {
            var i = n.__data__;
            if (!o || i.length < 199)
              return i.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new a(i);
          }
          return n.set(e, t), (this.size = n.size), this;
        };
      },
      9235: (e) => {
        var t = Function.prototype.toString;
        e.exports = function (e) {
          if (null != e) {
            try {
              return t.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        };
      },
      5012: (e) => {
        var t = /\s/;
        e.exports = function (e) {
          for (var n = e.length; n-- && t.test(e.charAt(n)); );
          return n;
        };
      },
      9678: (e, t, n) => {
        var r = n(6627),
          o = n(5365),
          a = n(7948),
          i = Math.max,
          l = Math.min;
        e.exports = function (e, t, n) {
          var u,
            c,
            s,
            f,
            d,
            p,
            m = 0,
            g = !1,
            h = !1,
            v = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function y(t) {
            var n = u,
              r = c;
            return (u = c = void 0), (m = t), (f = e.apply(r, n));
          }
          function b(e) {
            return (m = e), (d = setTimeout(w, t)), g ? y(e) : f;
          }
          function _(e) {
            var n = e - p;
            return void 0 === p || n >= t || n < 0 || (h && e - m >= s);
          }
          function w() {
            var e = o();
            if (_(e)) return E(e);
            d = setTimeout(
              w,
              (function (e) {
                var n = t - (e - p);
                return h ? l(n, s - (e - m)) : n;
              })(e),
            );
          }
          function E(e) {
            return (d = void 0), v && u ? y(e) : ((u = c = void 0), f);
          }
          function x() {
            var e = o(),
              n = _(e);
            if (((u = arguments), (c = this), (p = e), n)) {
              if (void 0 === d) return b(p);
              if (h) return clearTimeout(d), (d = setTimeout(w, t)), y(p);
            }
            return void 0 === d && (d = setTimeout(w, t)), f;
          }
          return (
            (t = a(t) || 0),
            r(n) &&
              ((g = !!n.leading),
              (s = (h = "maxWait" in n) ? i(a(n.maxWait) || 0, t) : s),
              (v = "trailing" in n ? !!n.trailing : v)),
            (x.cancel = function () {
              void 0 !== d && clearTimeout(d),
                (m = 0),
                (u = p = c = d = void 0);
            }),
            (x.flush = function () {
              return void 0 === d ? f : E(o());
            }),
            x
          );
        };
      },
      3284: (e) => {
        e.exports = function (e, t) {
          return e === t || (e != e && t != t);
        };
      },
      3735: (e, t, n) => {
        var r = n(5227),
          o = n(9109),
          a = Object.prototype,
          i = a.hasOwnProperty,
          l = a.propertyIsEnumerable,
          u = r(
            (function () {
              return arguments;
            })(),
          )
            ? r
            : function (e) {
                return o(e) && i.call(e, "callee") && !l.call(e, "callee");
              };
        e.exports = u;
      },
      2428: (e) => {
        var t = Array.isArray;
        e.exports = t;
      },
      1701: (e, t, n) => {
        var r = n(7419),
          o = n(6705);
        e.exports = function (e) {
          return null != e && o(e.length) && !r(e);
        };
      },
      7757: (e, t, n) => {
        e = n.nmd(e);
        var r = n(3401),
          o = n(8553),
          a = t && !t.nodeType && t,
          i = a && e && !e.nodeType && e,
          l = i && i.exports === a ? r.Buffer : void 0,
          u = (l ? l.isBuffer : void 0) || o;
        e.exports = u;
      },
      5925: (e, t, n) => {
        var r = n(3892);
        e.exports = function (e, t) {
          return r(e, t);
        };
      },
      7419: (e, t, n) => {
        var r = n(7398),
          o = n(6627);
        e.exports = function (e) {
          if (!o(e)) return !1;
          var t = r(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        };
      },
      6705: (e) => {
        e.exports = function (e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        };
      },
      6627: (e) => {
        e.exports = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        };
      },
      9109: (e) => {
        e.exports = function (e) {
          return null != e && "object" == typeof e;
        };
      },
      2848: (e, t, n) => {
        var r = n(7398),
          o = n(9109);
        e.exports = function (e) {
          return "symbol" == typeof e || (o(e) && "[object Symbol]" == r(e));
        };
      },
      6868: (e, t, n) => {
        var r = n(9126),
          o = n(2715),
          a = n(126),
          i = a && a.isTypedArray,
          l = i ? o(i) : r;
        e.exports = l;
      },
      8834: (e, t, n) => {
        var r = n(7189),
          o = n(790),
          a = n(1701);
        e.exports = function (e) {
          return a(e) ? r(e) : o(e);
        };
      },
      5365: (e, t, n) => {
        var r = n(3401);
        e.exports = function () {
          return r.Date.now();
        };
      },
      5615: (e) => {
        e.exports = function () {
          return [];
        };
      },
      8553: (e) => {
        e.exports = function () {
          return !1;
        };
      },
      3763: (e, t, n) => {
        var r = n(9678),
          o = n(6627);
        e.exports = function (e, t, n) {
          var a = !0,
            i = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          return (
            o(n) &&
              ((a = "leading" in n ? !!n.leading : a),
              (i = "trailing" in n ? !!n.trailing : i)),
            r(e, t, { leading: a, maxWait: t, trailing: i })
          );
        };
      },
      7948: (e, t, n) => {
        var r = n(3897),
          o = n(6627),
          a = n(2848),
          i = /^[-+]0x[0-9a-f]+$/i,
          l = /^0b[01]+$/i,
          u = /^0o[0-7]+$/i,
          c = parseInt;
        e.exports = function (e) {
          if ("number" == typeof e) return e;
          if (a(e)) return NaN;
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = r(e);
          var n = l.test(e);
          return n || u.test(e)
            ? c(e.slice(2), n ? 2 : 8)
            : i.test(e)
              ? NaN
              : +e;
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
              for (var i, l, u = o(e), c = 1; c < arguments.length; c++) {
                for (var s in (i = Object(arguments[c])))
                  n.call(i, s) && (u[s] = i[s]);
                if (t) {
                  l = t(i);
                  for (var f = 0; f < l.length; f++)
                    r.call(i, l[f]) && (u[l[f]] = i[l[f]]);
                }
              }
              return u;
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
      4835: (e, t, n) => {
        "use strict";
        var r = n(1596);
        function o() {}
        function a() {}
        (a.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, n, o, a, i) {
              if (i !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: a,
              resetWarningCache: o,
            };
            return (n.PropTypes = n), n;
          });
      },
      9519: (e, t, n) => {
        e.exports = n(4835)();
      },
      1596: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      6120: (e, t, n) => {
        for (
          var r = n(6282),
            o = "undefined" == typeof window ? n.g : window,
            a = ["moz", "webkit"],
            i = "AnimationFrame",
            l = o["request" + i],
            u = o["cancel" + i] || o["cancelRequest" + i],
            c = 0;
          !l && c < a.length;
          c++
        )
          (l = o[a[c] + "Request" + i]),
            (u = o[a[c] + "Cancel" + i] || o[a[c] + "CancelRequest" + i]);
        if (!l || !u) {
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
            (u = function (e) {
              for (var t = 0; t < d.length; t++)
                d[t].handle === e && (d[t].cancelled = !0);
            });
        }
        (e.exports = function (e) {
          return l.call(o, e);
        }),
          (e.exports.cancel = function () {
            u.apply(o, arguments);
          }),
          (e.exports.polyfill = function (e) {
            e || (e = o),
              (e.requestAnimationFrame = l),
              (e.cancelAnimationFrame = u);
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
          u = {};
        function c(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
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
          E = 60103,
          x = 60106,
          O = 60107,
          S = 60108,
          k = 60114,
          j = 60109,
          P = 60110,
          C = 60112,
          T = 60113,
          N = 60120,
          L = 60115,
          A = 60116,
          D = 60121,
          M = 60128,
          R = 60129,
          I = 60130,
          z = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var F = Symbol.for;
          (E = F("react.element")),
            (x = F("react.portal")),
            (O = F("react.fragment")),
            (S = F("react.strict_mode")),
            (k = F("react.profiler")),
            (j = F("react.provider")),
            (P = F("react.context")),
            (C = F("react.forward_ref")),
            (T = F("react.suspense")),
            (N = F("react.suspense_list")),
            (L = F("react.memo")),
            (A = F("react.lazy")),
            (D = F("react.block")),
            F("react.scope"),
            (M = F("react.opaque.id")),
            (R = F("react.debug_trace_mode")),
            (I = F("react.offscreen")),
            (z = F("react.legacy_hidden"));
        }
        var U,
          H = "function" == typeof Symbol && Symbol.iterator;
        function W(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (H && e[H]) || e["@@iterator"])
              ? e
              : null;
        }
        function $(e) {
          if (void 0 === U)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              U = (t && t[1]) || "";
            }
          return "\n" + U + e;
        }
        var B = !1;
        function V(e, t) {
          if (!e || B) return "";
          B = !0;
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
            (B = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? $(e) : "";
        }
        function X(e) {
          switch (e.tag) {
            case 5:
              return $(e.type);
            case 16:
              return $("Lazy");
            case 13:
              return $("Suspense");
            case 19:
              return $("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = V(e.type, !1));
            case 11:
              return (e = V(e.type.render, !1));
            case 22:
              return (e = V(e.type._render, !1));
            case 1:
              return (e = V(e.type, !0));
            default:
              return "";
          }
        }
        function q(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case O:
              return "Fragment";
            case x:
              return "Portal";
            case k:
              return "Profiler";
            case S:
              return "StrictMode";
            case T:
              return "Suspense";
            case N:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case j:
                return (e._context.displayName || "Context") + ".Provider";
              case C:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case L:
                return q(e.type);
              case D:
                return q(e._render);
              case A:
                (t = e._payload), (e = e._init);
                try {
                  return q(e(t));
                } catch (e) {}
            }
          return null;
        }
        function Y(e) {
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
        function G(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = G(e) ? "checked" : "value",
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
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = G(e) ? (e.checked ? "true" : "false") : e.value),
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
          (n = Y(null != t.value ? t.value : n)),
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
          var n = Y(t.value),
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
              oe(e, t.type, Y(t.defaultValue)),
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
            for (n = "" + Y(n), t = null, o = 0; o < e.length; o++) {
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
        function ue(e, t) {
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
          e._wrapperState = { initialValue: Y(n) };
        }
        function ce(e, t) {
          var n = Y(t.value),
            r = Y(t.defaultValue);
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
        function Ee(e, t) {
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
        var xe = o(
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
        function Oe(e, t) {
          if (t) {
            if (
              xe[e] &&
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
        function Se(e, t) {
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
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var je = null,
          Pe = null,
          Ce = null;
        function Te(e) {
          if ((e = ro(e))) {
            if ("function" != typeof je) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = ao(t)), je(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          Pe ? (Ce ? Ce.push(e) : (Ce = [e])) : (Pe = e);
        }
        function Le() {
          if (Pe) {
            var e = Pe,
              t = Ce;
            if (((Ce = Pe = null), Te(e), t))
              for (e = 0; e < t.length; e++) Te(t[e]);
          }
        }
        function Ae(e, t) {
          return e(t);
        }
        function De(e, t, n, r, o) {
          return e(t, n, r, o);
        }
        function Me() {}
        var Re = Ae,
          Ie = !1,
          ze = !1;
        function Fe() {
          (null === Pe && null === Ce) || (Me(), Le());
        }
        function Ue(e, t) {
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
        var He = !1;
        if (f)
          try {
            var We = {};
            Object.defineProperty(We, "passive", {
              get: function () {
                He = !0;
              },
            }),
              window.addEventListener("test", We, We),
              window.removeEventListener("test", We, We);
          } catch (he) {
            He = !1;
          }
        function $e(e, t, n, r, o, a, i, l, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (e) {
            this.onError(e);
          }
        }
        var Be = !1,
          Ve = null,
          Xe = !1,
          qe = null,
          Ye = {
            onError: function (e) {
              (Be = !0), (Ve = e);
            },
          };
        function Ge(e, t, n, r, o, a, i, l, u) {
          (Be = !1), (Ve = null), $e.apply(Ye, arguments);
        }
        function Qe(e) {
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
        function Ke(e) {
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
          if (Qe(e) !== e) throw Error(i(188));
        }
        function Je(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Qe(e))) throw Error(i(188));
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
                  for (var l = !1, u = o.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = o), (r = a);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = o), (n = a);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = a.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = a), (r = o);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = a), (n = o);
                        break;
                      }
                      u = u.sibling;
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
          ut = null,
          ct = null,
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
              ut = null;
              break;
            case "mouseover":
            case "mouseout":
              ct = null;
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
            var n = Qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ke(n)))
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
            null !== ut && yt(ut) && (ut = null),
            null !== ct && yt(ct) && (ct = null),
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
        function Et(e) {
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
              null !== ut && wt(ut, e),
              null !== ct && wt(ct, e),
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
        function xt(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Ot = {
            animationend: xt("Animation", "AnimationEnd"),
            animationiteration: xt("Animation", "AnimationIteration"),
            animationstart: xt("Animation", "AnimationStart"),
            transitionend: xt("Transition", "TransitionEnd"),
          },
          St = {},
          kt = {};
        function jt(e) {
          if (St[e]) return St[e];
          if (!Ot[e]) return e;
          var t,
            n = Ot[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in kt) return (St[e] = n[t]);
          return e;
        }
        f &&
          ((kt = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Ot.animationend.animation,
            delete Ot.animationiteration.animation,
            delete Ot.animationstart.animation),
          "TransitionEvent" in window || delete Ot.transitionend.transition);
        var Pt = jt("animationend"),
          Ct = jt("animationiteration"),
          Tt = jt("animationstart"),
          Nt = jt("transitionend"),
          Lt = new Map(),
          At = new Map(),
          Dt = [
            "abort",
            "abort",
            Pt,
            "animationEnd",
            Ct,
            "animationIteration",
            Tt,
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
            Nt,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function Mt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              o = e[n + 1];
            (o = "on" + (o[0].toUpperCase() + o.slice(1))),
              At.set(r, t),
              Lt.set(r, o),
              c(o, [r]);
          }
        }
        (0, a.unstable_now)();
        var Rt = 8;
        function It(e) {
          if (0 != (1 & e)) return (Rt = 15), 1;
          if (0 != (2 & e)) return (Rt = 14), 2;
          if (0 != (4 & e)) return (Rt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Rt = 12), t)
            : 0 != (32 & e)
              ? ((Rt = 11), 32)
              : 0 !== (t = 192 & e)
                ? ((Rt = 10), t)
                : 0 != (256 & e)
                  ? ((Rt = 9), 256)
                  : 0 !== (t = 3584 & e)
                    ? ((Rt = 8), t)
                    : 0 != (4096 & e)
                      ? ((Rt = 7), 4096)
                      : 0 !== (t = 4186112 & e)
                        ? ((Rt = 6), t)
                        : 0 !== (t = 62914560 & e)
                          ? ((Rt = 5), t)
                          : 67108864 & e
                            ? ((Rt = 4), 67108864)
                            : 0 != (134217728 & e)
                              ? ((Rt = 3), 134217728)
                              : 0 !== (t = 805306368 & e)
                                ? ((Rt = 2), t)
                                : 0 != (1073741824 & e)
                                  ? ((Rt = 1), 1073741824)
                                  : ((Rt = 8), e);
        }
        function zt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (Rt = 0);
          var r = 0,
            o = 0,
            a = e.expiredLanes,
            i = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== a) (r = a), (o = Rt = 15);
          else if (0 !== (a = 134217727 & n)) {
            var u = a & ~i;
            0 !== u
              ? ((r = It(u)), (o = Rt))
              : 0 !== (l &= a) && ((r = It(l)), (o = Rt));
          } else
            0 !== (a = n & ~i)
              ? ((r = It(a)), (o = Rt))
              : 0 !== l && ((r = It(l)), (o = Rt));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Bt(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 == (t & i))
          ) {
            if ((It(t), o <= Rt)) return t;
            Rt = o;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - Bt(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function Ft(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function Ut(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Ht(24 & ~t)) ? Ut(10, t) : e;
            case 10:
              return 0 === (e = Ht(192 & ~t)) ? Ut(8, t) : e;
            case 8:
              return (
                0 === (e = Ht(3584 & ~t)) &&
                  0 === (e = Ht(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Ht(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(i(358, e));
        }
        function Ht(e) {
          return e & -e;
        }
        function Wt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function $t(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Bt(t))] = n);
        }
        var Bt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Vt(e) / Xt) | 0)) | 0;
              },
          Vt = Math.log,
          Xt = Math.LN2;
        var qt = a.unstable_UserBlockingPriority,
          Yt = a.unstable_runWithPriority,
          Gt = !0;
        function Qt(e, t, n, r) {
          Ie || Me();
          var o = Zt,
            a = Ie;
          Ie = !0;
          try {
            De(o, e, t, n, r);
          } finally {
            (Ie = a) || Fe();
          }
        }
        function Kt(e, t, n, r) {
          Yt(qt, Zt.bind(null, e, t, n, r));
        }
        function Zt(e, t, n, r) {
          var o;
          if (Gt)
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
                          return (ut = ht(ut, e, t, n, r, o)), !0;
                        case "mouseover":
                          return (ct = ht(ct, e, t, n, r, o)), !0;
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
                Mr(e, t, r, null, n);
              }
            }
        }
        function Jt(e, t, n, r) {
          var o = ke(r);
          if (null !== (o = no(o))) {
            var a = Qe(o);
            if (null === a) o = null;
            else {
              var i = a.tag;
              if (13 === i) {
                if (null !== (o = Ke(a))) return o;
                o = null;
              } else if (3 === i) {
                if (a.stateNode.hydrate)
                  return 3 === a.tag ? a.stateNode.containerInfo : null;
                o = null;
              } else a !== o && (o = null);
            }
          }
          return Mr(e, t, r, o, n), null;
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
        function un(e) {
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
        var cn,
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
          pn = un(dn),
          mn = o({}, dn, { view: 0, detail: 0 }),
          gn = un(mn),
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
            getModifierState: Pn,
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
                      ? ((cn = e.screenX - fn.screenX),
                        (sn = e.screenY - fn.screenY))
                      : (sn = cn = 0),
                    (fn = e)),
                  cn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          vn = un(hn),
          yn = un(o({}, hn, { dataTransfer: 0 })),
          bn = un(o({}, mn, { relatedTarget: 0 })),
          _n = un(
            o({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          wn = o({}, dn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          En = un(wn),
          xn = un(o({}, dn, { data: 0 })),
          On = {
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
          Sn = {
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
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function jn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Pn() {
          return jn;
        }
        var Cn = o({}, mn, {
            key: function (e) {
              if (e.key) {
                var t = On[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = on(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? Sn[e.keyCode] || "Unidentified"
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
            getModifierState: Pn,
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
          Tn = un(Cn),
          Nn = un(
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
          Ln = un(
            o({}, mn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Pn,
            }),
          ),
          An = un(
            o({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Dn = o({}, hn, {
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
          Mn = un(Dn),
          Rn = [9, 13, 27, 32],
          In = f && "CompositionEvent" in window,
          zn = null;
        f && "documentMode" in document && (zn = document.documentMode);
        var Fn = f && "TextEvent" in window && !zn,
          Un = f && (!In || (zn && 8 < zn && 11 >= zn)),
          Hn = String.fromCharCode(32),
          Wn = !1;
        function $n(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Rn.indexOf(t.keyCode);
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
        function Bn(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var Xn = {
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
        function qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Xn[e.type] : "textarea" === t;
        }
        function Yn(e, t, n, r) {
          Ne(r),
            0 < (t = Ir(t, "onChange")).length &&
              ((n = new pn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          Qn = null;
        function Kn(e) {
          Cr(e, 0);
        }
        function Zn(e) {
          if (K(oo(e))) return e;
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
          Gn && (Gn.detachEvent("onpropertychange", ar), (Qn = Gn = null));
        }
        function ar(e) {
          if ("value" === e.propertyName && Zn(Qn)) {
            var t = [];
            if ((Yn(t, Qn, e, ke(e)), (e = Kn), Ie)) e(t);
            else {
              Ie = !0;
              try {
                Ae(e, t);
              } finally {
                (Ie = !1), Fe();
              }
            }
          }
        }
        function ir(e, t, n) {
          "focusin" === e
            ? (or(), (Qn = n), (Gn = t).attachEvent("onpropertychange", ar))
            : "focusout" === e && or();
        }
        function lr(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Zn(Qn);
        }
        function ur(e, t) {
          if ("click" === e) return Zn(t);
        }
        function cr(e, t) {
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
          Er = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          Er ||
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
              0 < (r = Ir(_r, "onSelect")).length &&
                ((t = new pn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = br))));
        }
        Mt(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " ",
          ),
          0,
        ),
          Mt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " ",
            ),
            1,
          ),
          Mt(Dt, 2);
        for (
          var Or =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " ",
              ),
            Sr = 0;
          Sr < Or.length;
          Sr++
        )
          At.set(Or[Sr], 0);
        s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          c(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          c(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          c("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          c(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          c(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          c(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var kr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          jr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(kr),
          );
        function Pr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, a, l, u, c) {
              if ((Ge.apply(this, arguments), Be)) {
                if (!Be) throw Error(i(198));
                var s = Ve;
                (Be = !1), (Ve = null), Xe || ((Xe = !0), (qe = s));
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
                    u = l.instance,
                    c = l.currentTarget;
                  if (((l = l.listener), u !== a && o.isPropagationStopped()))
                    break e;
                  Pr(o, l, c), (a = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (l = r[i]).instance),
                    (c = l.currentTarget),
                    (l = l.listener),
                    u !== a && o.isPropagationStopped())
                  )
                    break e;
                  Pr(o, l, c), (a = u);
                }
            }
          }
          if (Xe) throw ((e = qe), (Xe = !1), (qe = null), e);
        }
        function Tr(e, t) {
          var n = io(t),
            r = e + "__bubble";
          n.has(r) || (Dr(t, e, 2, !1), n.add(r));
        }
        var Nr = "_reactListening" + Math.random().toString(36).slice(2);
        function Lr(e) {
          e[Nr] ||
            ((e[Nr] = !0),
            l.forEach(function (t) {
              jr.has(t) || Ar(t, !1, e, null), Ar(t, !0, e, null);
            }));
        }
        function Ar(e, t, n, r) {
          var o =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            a = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (a = n.ownerDocument),
            null !== r && !t && jr.has(e))
          ) {
            if ("scroll" !== e) return;
            (o |= 2), (a = r);
          }
          var i = io(a),
            l = e + "__" + (t ? "capture" : "bubble");
          i.has(l) || (t && (o |= 4), Dr(a, e, o, t), i.add(l));
        }
        function Dr(e, t, n, r) {
          var o = At.get(t);
          switch (void 0 === o ? 2 : o) {
            case 0:
              o = Qt;
              break;
            case 1:
              o = Kt;
              break;
            default:
              o = Zt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !He ||
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
        function Mr(e, t, n, r, o) {
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
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === o ||
                        (8 === u.nodeType && u.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = no(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (ze) return e(t, n);
            ze = !0;
            try {
              Re(e, t, n);
            } finally {
              (ze = !1), Fe();
            }
          })(function () {
            var r = a,
              o = ke(n),
              i = [];
            e: {
              var l = Lt.get(e);
              if (void 0 !== l) {
                var u = pn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === on(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Tn;
                    break;
                  case "focusin":
                    (c = "focus"), (u = bn);
                    break;
                  case "focusout":
                    (c = "blur"), (u = bn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = bn;
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
                    u = vn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = yn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Ln;
                    break;
                  case Pt:
                  case Ct:
                  case Tt:
                    u = _n;
                    break;
                  case Nt:
                    u = An;
                    break;
                  case "scroll":
                    u = gn;
                    break;
                  case "wheel":
                    u = Mn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = En;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Nn;
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
                        null != (g = Ue(m, d)) &&
                        s.push(Rr(m, g, p))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < s.length &&
                  ((l = new u(l, c, null, n, o)),
                  i.push({ event: l, listeners: s }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 != (16 & t) ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!no(c) && !c[eo])) &&
                  (u || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  u
                    ? ((u = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? no(c)
                          : null) &&
                        (c !== (f = Qe(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((s = vn),
                  (g = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = Nn),
                    (g = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (m = "pointer")),
                  (f = null == u ? l : oo(u)),
                  (p = null == c ? l : oo(c)),
                  ((l = new s(g, m + "leave", u, n, o)).target = f),
                  (l.relatedTarget = p),
                  (g = null),
                  no(o) === r &&
                    (((s = new s(d, m + "enter", c, n, o)).target = p),
                    (s.relatedTarget = f),
                    (g = s)),
                  (f = g),
                  u && c)
                )
                  e: {
                    for (d = c, m = 0, p = s = u; p; p = zr(p)) m++;
                    for (p = 0, g = d; g; g = zr(g)) p++;
                    for (; 0 < m - p; ) (s = zr(s)), m--;
                    for (; 0 < p - m; ) (d = zr(d)), p--;
                    for (; m--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = zr(s)), (d = zr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== u && Fr(i, l, u, s, !1),
                  null !== c && null !== f && Fr(i, f, c, s, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? oo(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var h = Jn;
              else if (qn(l))
                if (er) h = cr;
                else {
                  h = lr;
                  var v = ir;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (h = ur);
              switch (
                (h && (h = h(e, r))
                  ? Yn(i, h, n, o)
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
                  (qn(v) || "true" === v.contentEditable) &&
                    ((br = v), (_r = r), (wr = null));
                  break;
                case "focusout":
                  wr = _r = br = null;
                  break;
                case "mousedown":
                  Er = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (Er = !1), xr(i, n, o);
                  break;
                case "selectionchange":
                  if (yr) break;
                case "keydown":
                case "keyup":
                  xr(i, n, o);
              }
              var y;
              if (In)
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
                Vn
                  ? $n(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Un &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (y = rn())
                    : ((tn = "value" in (en = o) ? en.value : en.textContent),
                      (Vn = !0))),
                0 < (v = Ir(r, b)).length &&
                  ((b = new xn(b, e, null, n, o)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Wn = !0), Hn);
                        case "textInput":
                          return (e = t.data) === Hn && Wn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!In && $n(e, t))
                          ? ((e = rn()), (nn = tn = en = null), (Vn = !1), e)
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
                          return Un && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Ir(r, "onBeforeInput")).length &&
                  ((o = new xn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            Cr(i, t);
          });
        }
        function Rr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Ir(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Ue(e, n)) && r.unshift(Rr(e, a, o)),
              null != (a = Ue(e, t)) && r.push(Rr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function zr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Fr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              c = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== c &&
              ((l = c),
              o
                ? null != (u = Ue(n, a)) && i.unshift(Rr(n, u, l))
                : o || (null != (u = Ue(n, a)) && i.push(Rr(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        function Ur() {}
        var Hr = null,
          Wr = null;
        function $r(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Br(e, t) {
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
        var Vr = "function" == typeof setTimeout ? setTimeout : void 0,
          Xr = "function" == typeof clearTimeout ? clearTimeout : void 0;
        function qr(e) {
          1 === e.nodeType
            ? (e.textContent = "")
            : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
        }
        function Yr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Gr(e) {
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
        var Qr = 0;
        var Kr = Math.random().toString(36).slice(2),
          Zr = "__reactFiber$" + Kr,
          Jr = "__reactProps$" + Kr,
          eo = "__reactContainer$" + Kr,
          to = "__reactEvents$" + Kr;
        function no(e) {
          var t = e[Zr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[eo] || n[Zr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Gr(e); null !== e; ) {
                  if ((n = e[Zr])) return n;
                  e = Gr(e);
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
          uo = -1;
        function co(e) {
          return { current: e };
        }
        function so(e) {
          0 > uo || ((e.current = lo[uo]), (lo[uo] = null), uo--);
        }
        function fo(e, t) {
          uo++, (lo[uo] = e.current), (e.current = t);
        }
        var po = {},
          mo = co(po),
          go = co(!1),
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
            if (!(a in e)) throw Error(i(108, q(t) || "Unknown", a));
          return o({}, n, r);
        }
        function Eo(e) {
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
        function xo(e, t, n) {
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
        var Oo = null,
          So = null,
          ko = a.unstable_runWithPriority,
          jo = a.unstable_scheduleCallback,
          Po = a.unstable_cancelCallback,
          Co = a.unstable_shouldYield,
          To = a.unstable_requestPaint,
          No = a.unstable_now,
          Lo = a.unstable_getCurrentPriorityLevel,
          Ao = a.unstable_ImmediatePriority,
          Do = a.unstable_UserBlockingPriority,
          Mo = a.unstable_NormalPriority,
          Ro = a.unstable_LowPriority,
          Io = a.unstable_IdlePriority,
          zo = {},
          Fo = void 0 !== To ? To : function () {},
          Uo = null,
          Ho = null,
          Wo = !1,
          $o = No(),
          Bo =
            1e4 > $o
              ? No
              : function () {
                  return No() - $o;
                };
        function Vo() {
          switch (Lo()) {
            case Ao:
              return 99;
            case Do:
              return 98;
            case Mo:
              return 97;
            case Ro:
              return 96;
            case Io:
              return 95;
            default:
              throw Error(i(332));
          }
        }
        function Xo(e) {
          switch (e) {
            case 99:
              return Ao;
            case 98:
              return Do;
            case 97:
              return Mo;
            case 96:
              return Ro;
            case 95:
              return Io;
            default:
              throw Error(i(332));
          }
        }
        function qo(e, t) {
          return (e = Xo(e)), ko(e, t);
        }
        function Yo(e, t, n) {
          return (e = Xo(e)), jo(e, t, n);
        }
        function Go() {
          if (null !== Ho) {
            var e = Ho;
            (Ho = null), Po(e);
          }
          Qo();
        }
        function Qo() {
          if (!Wo && null !== Uo) {
            Wo = !0;
            var e = 0;
            try {
              var t = Uo;
              qo(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Uo = null);
            } catch (t) {
              throw (null !== Uo && (Uo = Uo.slice(e + 1)), jo(Ao, Go), t);
            } finally {
              Wo = !1;
            }
          }
        }
        var Ko = w.ReactCurrentBatchConfig;
        function Zo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = o({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Jo = co(null),
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
              (0 != (e.lanes & t) && (Ii = !0), (e.firstContext = null));
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
        var ua = !1;
        function ca(e) {
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
          ua = !1;
          var i = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            u = a.shared.pending;
          if (null !== u) {
            a.shared.pending = null;
            var c = u,
              s = c.next;
            (c.next = null), null === l ? (i = s) : (l.next = s), (l = c);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== l &&
                (null === d ? (f.firstBaseUpdate = s) : (d.next = s),
                (f.lastBaseUpdate = c));
            }
          }
          if (null !== i) {
            for (d = a.baseState, l = 0, f = s = c = null; ; ) {
              u = i.lane;
              var p = i.eventTime;
              if ((r & u) === u) {
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
                  switch (((u = t), (p = n), g.tag)) {
                    case 1:
                      if ("function" == typeof (m = g.payload)) {
                        d = m.call(p, d, u);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-4097 & m.flags) | 64;
                    case 0:
                      if (
                        null ==
                        (u =
                          "function" == typeof (m = g.payload)
                            ? m.call(p, d, u)
                            : m)
                      )
                        break e;
                      d = o({}, d, u);
                      break e;
                    case 2:
                      ua = !0;
                  }
                }
                null !== i.callback &&
                  ((e.flags |= 32),
                  null === (u = a.effects) ? (a.effects = [i]) : u.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: u,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === f ? ((s = f = p), (c = d)) : (f = f.next = p),
                  (l |= u);
              if (null === (i = i.next)) {
                if (null === (u = a.shared.pending)) break;
                (i = u.next),
                  (u.next = null),
                  (a.lastBaseUpdate = u),
                  (a.shared.pending = null);
              }
            }
            null === f && (c = d),
              (a.baseState = c),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = f),
              (Ul |= l),
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
            return !!(e = e._reactInternals) && Qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = fu(),
              o = du(e),
              a = fa(r, o);
            (a.payload = t),
              null != n && (a.callback = n),
              da(e, a),
              pu(e, o, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = fu(),
              o = du(e),
              a = fa(r, o);
            (a.tag = 1),
              (a.payload = t),
              null != n && (a.callback = n),
              da(e, a),
              pu(e, o, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = fu(),
              r = du(e),
              o = fa(n, r);
            (o.tag = 2), null != t && (o.callback = t), da(e, o), pu(e, r, n);
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
        function Ea(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = ha), ca(e);
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
        var xa = Array.isArray;
        function Oa(e, t, n) {
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
        function Sa(e, t) {
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
        function ka(e) {
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
            return ((e = Vu(e, t)).index = 0), (e.sibling = null), e;
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
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Gu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = o(t, n.props)).ref = Oa(e, t, n)), (r.return = e), r)
              : (((r = Xu(n.type, n.key, n.props, null, e.mode, r)).ref = Oa(
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
              ? (((t = Qu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = qu(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t)
              return ((t = Gu("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case E:
                  return (
                    ((n = Xu(t.type, t.key, t.props, null, e.mode, n)).ref = Oa(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Qu(t, e.mode, n)).return = e), t;
              }
              if (xa(t) || W(t))
                return ((t = qu(t, e.mode, n, null)).return = e), t;
              Sa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n)
              return null !== o ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case E:
                  return n.key === o
                    ? n.type === O
                      ? f(e, t, n.props.children, r, o)
                      : c(e, t, n, r)
                    : null;
                case x:
                  return n.key === o ? s(e, t, n, r) : null;
              }
              if (xa(n) || W(n)) return null !== o ? null : f(e, t, n, r, null);
              Sa(e, n);
            }
            return null;
          }
          function m(e, t, n, r, o) {
            if ("string" == typeof r || "number" == typeof r)
              return u(t, (e = e.get(n) || null), "" + r, o);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case E:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === O
                      ? f(t, e, r.props.children, o, r.key)
                      : c(t, e, r, o)
                  );
                case x:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o,
                  );
              }
              if (xa(r) || W(r))
                return f(t, (e = e.get(n) || null), r, o, null);
              Sa(t, r);
            }
            return null;
          }
          function g(o, i, l, u) {
            for (
              var c = null, s = null, f = i, g = (i = 0), h = null;
              null !== f && g < l.length;
              g++
            ) {
              f.index > g ? ((h = f), (f = null)) : (h = f.sibling);
              var v = p(o, f, l[g], u);
              if (null === v) {
                null === f && (f = h);
                break;
              }
              e && f && null === v.alternate && t(o, f),
                (i = a(v, i, g)),
                null === s ? (c = v) : (s.sibling = v),
                (s = v),
                (f = h);
            }
            if (g === l.length) return n(o, f), c;
            if (null === f) {
              for (; g < l.length; g++)
                null !== (f = d(o, l[g], u)) &&
                  ((i = a(f, i, g)),
                  null === s ? (c = f) : (s.sibling = f),
                  (s = f));
              return c;
            }
            for (f = r(o, f); g < l.length; g++)
              null !== (h = m(f, o, g, l[g], u)) &&
                (e &&
                  null !== h.alternate &&
                  f.delete(null === h.key ? g : h.key),
                (i = a(h, i, g)),
                null === s ? (c = h) : (s.sibling = h),
                (s = h));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              c
            );
          }
          function h(o, l, u, c) {
            var s = W(u);
            if ("function" != typeof s) throw Error(i(150));
            if (null == (u = s.call(u))) throw Error(i(151));
            for (
              var f = (s = null), g = l, h = (l = 0), v = null, y = u.next();
              null !== g && !y.done;
              h++, y = u.next()
            ) {
              g.index > h ? ((v = g), (g = null)) : (v = g.sibling);
              var b = p(o, g, y.value, c);
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
              for (; !y.done; h++, y = u.next())
                null !== (y = d(o, y.value, c)) &&
                  ((l = a(y, l, h)),
                  null === f ? (s = y) : (f.sibling = y),
                  (f = y));
              return s;
            }
            for (g = r(o, g); !y.done; h++, y = u.next())
              null !== (y = m(g, o, h, y.value, c)) &&
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
          return function (e, r, a, u) {
            var c =
              "object" == typeof a &&
              null !== a &&
              a.type === O &&
              null === a.key;
            c && (a = a.props.children);
            var s = "object" == typeof a && null !== a;
            if (s)
              switch (a.$$typeof) {
                case E:
                  e: {
                    for (s = a.key, c = r; null !== c; ) {
                      if (c.key === s) {
                        if (7 === c.tag) {
                          if (a.type === O) {
                            n(e, c.sibling),
                              ((r = o(c, a.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (c.elementType === a.type) {
                          n(e, c.sibling),
                            ((r = o(c, a.props)).ref = Oa(e, c, a)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, c);
                        break;
                      }
                      t(e, c), (c = c.sibling);
                    }
                    a.type === O
                      ? (((r = qu(a.props.children, e.mode, u, a.key)).return =
                          e),
                        (e = r))
                      : (((u = Xu(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          e.mode,
                          u,
                        )).ref = Oa(e, r, a)),
                        (u.return = e),
                        (e = u));
                  }
                  return l(e);
                case x:
                  e: {
                    for (c = a.key; null !== r; ) {
                      if (r.key === c) {
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
                    ((r = Qu(a, e.mode, u)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" == typeof a || "number" == typeof a)
              return (
                (a = "" + a),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = o(r, a)).return = e), (e = r))
                  : (n(e, r), ((r = Gu(a, e.mode, u)).return = e), (e = r)),
                l(e)
              );
            if (xa(a)) return g(e, r, a, u);
            if (W(a)) return h(e, r, a, u);
            if ((s && Sa(e, a), void 0 === a && !c))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(i(152, q(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var ja = ka(!0),
          Pa = ka(!1),
          Ca = {},
          Ta = co(Ca),
          Na = co(Ca),
          La = co(Ca);
        function Aa(e) {
          if (e === Ca) throw Error(i(174));
          return e;
        }
        function Da(e, t) {
          switch ((fo(La, t), fo(Na, e), fo(Ta, Ca), (e = t.nodeType))) {
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
          so(Ta), fo(Ta, t);
        }
        function Ma() {
          so(Ta), so(Na), so(La);
        }
        function Ra(e) {
          Aa(La.current);
          var t = Aa(Ta.current),
            n = me(t, e.type);
          t !== n && (fo(Na, e), fo(Ta, n));
        }
        function Ia(e) {
          Na.current === e && (so(Ta), so(Na));
        }
        var za = co(0);
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
        var Ua = null,
          Ha = null,
          Wa = !1;
        function $a(e, t) {
          var n = $u(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Ba(e, t) {
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
        function Va(e) {
          if (Wa) {
            var t = Ha;
            if (t) {
              var n = t;
              if (!Ba(e, t)) {
                if (!(t = Yr(n.nextSibling)) || !Ba(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Wa = !1), void (Ua = e)
                  );
                $a(Ua, n);
              }
              (Ua = e), (Ha = Yr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Wa = !1), (Ua = e);
          }
        }
        function Xa(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Ua = e;
        }
        function qa(e) {
          if (e !== Ua) return !1;
          if (!Wa) return Xa(e), (Wa = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !Br(t, e.memoizedProps))
          )
            for (t = Ha; t; ) $a(e, t), (t = Yr(t.nextSibling));
          if ((Xa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Ha = Yr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Ha = null;
            }
          } else Ha = Ua ? Yr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Ya() {
          (Ha = Ua = null), (Wa = !1);
        }
        var Ga = [];
        function Qa() {
          for (var e = 0; e < Ga.length; e++)
            Ga[e]._workInProgressVersionPrimary = null;
          Ga.length = 0;
        }
        var Ka = w.ReactCurrentDispatcher,
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
            (Ka.current = null === e || null === e.memoizedState ? Ai : Di),
            (e = n(r, o)),
            oi)
          ) {
            a = 0;
            do {
              if (((oi = !1), !(25 > a))) throw Error(i(301));
              (a += 1),
                (ni = ti = null),
                (t.updateQueue = null),
                (Ka.current = Mi),
                (e = n(r, o));
            } while (oi);
          }
          if (
            ((Ka.current = Li),
            (t = null !== ti && null !== ti.next),
            (Ja = 0),
            (ni = ti = ei = null),
            (ri = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function ui() {
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
        function ci() {
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
          var t = ci(),
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
            var u = (l = a = null),
              c = o;
            do {
              var s = c.lane;
              if ((Ja & s) === s)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      eagerReducer: c.eagerReducer,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: s,
                  action: c.action,
                  eagerReducer: c.eagerReducer,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (a = r)) : (u = u.next = f),
                  (ei.lanes |= s),
                  (Ul |= s);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (a = r) : (u.next = l),
              sr(r, t.memoizedState) || (Ii = !0),
              (t.memoizedState = r),
              (t.baseState = a),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function di(e) {
          var t = ci(),
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
            sr(a, t.memoizedState) || (Ii = !0),
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
                  ((t._workInProgressVersionPrimary = r), Ga.push(t))),
            e)
          )
            return n(t._source);
          throw (Ga.push(t), Error(i(350)));
        }
        function mi(e, t, n, r) {
          var o = Ll;
          if (null === o) throw Error(i(349));
          var a = t._getVersion,
            l = a(t._source),
            u = Ka.current,
            c = u.useState(function () {
              return pi(o, t, n);
            }),
            s = c[1],
            f = c[0];
          c = ni;
          var d = e.memoizedState,
            p = d.refs,
            m = p.getSnapshot,
            g = d.source;
          d = d.subscribe;
          var h = ei;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            u.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = s);
                var e = a(t._source);
                if (!sr(l, e)) {
                  (e = n(t._source)),
                    sr(f, e) ||
                      (s(e),
                      (e = du(h)),
                      (o.mutableReadLanes |= e & o.pendingLanes)),
                    (e = o.mutableReadLanes),
                    (o.entangledLanes |= e);
                  for (var r = o.entanglements, i = e; 0 < i; ) {
                    var u = 31 - Bt(i),
                      c = 1 << u;
                    (r[u] |= e), (i &= ~c);
                  }
                }
              },
              [n, t, r],
            ),
            u.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = du(h);
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
                Ni.bind(null, ei, e)),
              (c.queue = e),
              (c.baseQueue = null),
              (f = pi(o, t, n)),
              (c.memoizedState = c.baseState = f)),
            f
          );
        }
        function gi(e, t, n) {
          return mi(ci(), e, t, n);
        }
        function hi(e) {
          var t = ui();
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
              Ni.bind(null, ei, e)),
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
          return (e = { current: e }), (ui().memoizedState = e);
        }
        function bi() {
          return ci().memoizedState;
        }
        function _i(e, t, n, r) {
          var o = ui();
          (ei.flags |= e),
            (o.memoizedState = vi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function wi(e, t, n, r) {
          var o = ci();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== ti) {
            var i = ti.memoizedState;
            if (((a = i.destroy), null !== r && ii(r, i.deps)))
              return void vi(t, n, a, r);
          }
          (ei.flags |= e), (o.memoizedState = vi(1 | t, n, a, r));
        }
        function Ei(e, t) {
          return _i(516, 4, e, t);
        }
        function xi(e, t) {
          return wi(516, 4, e, t);
        }
        function Oi(e, t) {
          return wi(4, 2, e, t);
        }
        function Si(e, t) {
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
        function ki(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            wi(4, 2, Si.bind(null, t, e), n)
          );
        }
        function ji() {}
        function Pi(e, t) {
          var n = ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ii(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ci(e, t) {
          var n = ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ii(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ti(e, t) {
          var n = Vo();
          qo(98 > n ? 98 : n, function () {
            e(!0);
          }),
            qo(97 < n ? 97 : n, function () {
              var n = Za.transition;
              Za.transition = 1;
              try {
                e(!1), t();
              } finally {
                Za.transition = n;
              }
            });
        }
        function Ni(e, t, n) {
          var r = fu(),
            o = du(e),
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
                  u = i(l, n);
                if (((a.eagerReducer = i), (a.eagerState = u), sr(u, l)))
                  return;
              } catch (e) {}
            pu(e, o, r);
          }
        }
        var Li = {
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
          Ai = {
            readContext: la,
            useCallback: function (e, t) {
              return (ui().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: la,
            useEffect: Ei,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                _i(4, 2, Si.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return _i(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = ui();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = ui();
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
                  Ni.bind(null, ei, e)),
                [r.memoizedState, e]
              );
            },
            useRef: yi,
            useState: hi,
            useDebugValue: ji,
            useDeferredValue: function (e) {
              var t = hi(e),
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
              var e = hi(!1),
                t = e[0];
              return yi((e = Ti.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = ui();
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
              if (Wa) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: M, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + (Qr++).toString(36))),
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
                        n("r:" + (Qr++).toString(36));
                      },
                      void 0,
                      null,
                    )),
                  t
                );
              }
              return hi((t = "r:" + (Qr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Di = {
            readContext: la,
            useCallback: Pi,
            useContext: la,
            useEffect: xi,
            useImperativeHandle: ki,
            useLayoutEffect: Oi,
            useMemo: Ci,
            useReducer: fi,
            useRef: bi,
            useState: function () {
              return fi(si);
            },
            useDebugValue: ji,
            useDeferredValue: function (e) {
              var t = fi(si),
                n = t[0],
                r = t[1];
              return (
                xi(
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
          Mi = {
            readContext: la,
            useCallback: Pi,
            useContext: la,
            useEffect: xi,
            useImperativeHandle: ki,
            useLayoutEffect: Oi,
            useMemo: Ci,
            useReducer: di,
            useRef: bi,
            useState: function () {
              return di(si);
            },
            useDebugValue: ji,
            useDeferredValue: function (e) {
              var t = di(si),
                n = t[0],
                r = t[1];
              return (
                xi(
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
          Ri = w.ReactCurrentOwner,
          Ii = !1;
        function zi(e, t, n, r) {
          t.child = null === e ? Pa(t, null, n, r) : ja(t, e.child, n, r);
        }
        function Fi(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            ia(t, o),
            (r = li(e, t, n, r, a, o)),
            null === e || Ii
              ? ((t.flags |= 1), zi(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                al(e, t, o))
          );
        }
        function Ui(e, t, n, r, o, a) {
          if (null === e) {
            var i = n.type;
            return "function" != typeof i ||
              Bu(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Xu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Hi(e, t, i, r, o, a));
          }
          return (
            (i = e.child),
            0 == (o & a) &&
            ((o = i.memoizedProps),
            (n = null !== (n = n.compare) ? n : dr)(o, r) && e.ref === t.ref)
              ? al(e, t, a)
              : ((t.flags |= 1),
                ((e = Vu(i, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Hi(e, t, n, r, o, a) {
          if (null !== e && dr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Ii = !1), 0 == (a & o)))
              return (t.lanes = e.lanes), al(e, t, a);
            0 != (16384 & e.flags) && (Ii = !0);
          }
          return Bi(e, t, n, r, a);
        }
        function Wi(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 == (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), wu(t, n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  wu(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                wu(t, null !== a ? a.baseLanes : n);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              wu(t, r);
          return zi(e, t, o, n), t.child;
        }
        function $i(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Bi(e, t, n, r, o) {
          var a = yo(n) ? ho : mo.current;
          return (
            (a = vo(t, a)),
            ia(t, o),
            (n = li(e, t, n, r, a, o)),
            null === e || Ii
              ? ((t.flags |= 1), zi(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                al(e, t, o))
          );
        }
        function Vi(e, t, n, r, o) {
          if (yo(n)) {
            var a = !0;
            Eo(t);
          } else a = !1;
          if ((ia(t, o), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              _a(t, n, r),
              Ea(t, n, r, o),
              (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              c = n.contextType;
            "object" == typeof c && null !== c
              ? (c = la(c))
              : (c = vo(t, (c = yo(n) ? ho : mo.current)));
            var s = n.getDerivedStateFromProps,
              f =
                "function" == typeof s ||
                "function" == typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== c) && wa(t, i, r, c)),
              (ua = !1);
            var d = t.memoizedState;
            (i.state = d),
              ma(t, r, i, o),
              (u = t.memoizedState),
              l !== r || d !== u || go.current || ua
                ? ("function" == typeof s &&
                    (va(t, n, s, r), (u = t.memoizedState)),
                  (l = ua || ba(t, n, l, r, d, u, c))
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
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = c),
                  (r = l))
                : ("function" == typeof i.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (i = t.stateNode),
              sa(e, t),
              (l = t.memoizedProps),
              (c = t.type === t.elementType ? l : Zo(t.type, l)),
              (i.props = c),
              (f = t.pendingProps),
              (d = i.context),
              "object" == typeof (u = n.contextType) && null !== u
                ? (u = la(u))
                : (u = vo(t, (u = yo(n) ? ho : mo.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" == typeof p ||
              "function" == typeof i.getSnapshotBeforeUpdate) ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== u) && wa(t, i, r, u)),
              (ua = !1),
              (d = t.memoizedState),
              (i.state = d),
              ma(t, r, i, o);
            var m = t.memoizedState;
            l !== f || d !== m || go.current || ua
              ? ("function" == typeof p &&
                  (va(t, n, p, r), (m = t.memoizedState)),
                (c = ua || ba(t, n, c, r, d, m, u))
                  ? (s ||
                      ("function" != typeof i.UNSAFE_componentWillUpdate &&
                        "function" != typeof i.componentWillUpdate) ||
                      ("function" == typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, m, u),
                      "function" == typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, m, u)),
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
                (i.context = u),
                (r = c))
              : ("function" != typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return Xi(e, t, n, r, a, o);
        }
        function Xi(e, t, n, r, o, a) {
          $i(e, t);
          var i = 0 != (64 & t.flags);
          if (!r && !i) return o && xo(t, n, !1), al(e, t, a);
          (r = t.stateNode), (Ri.current = t);
          var l =
            i && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = ja(t, e.child, null, a)),
                (t.child = ja(t, null, l, a)))
              : zi(e, t, l, a),
            (t.memoizedState = r.state),
            o && xo(t, n, !0),
            t.child
          );
        }
        function qi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? _o(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && _o(0, t.context, !1),
            Da(e, t.containerInfo);
        }
        var Yi,
          Gi,
          Qi,
          Ki = { dehydrated: null, retryLane: 0 };
        function Zi(e, t, n) {
          var r,
            o = t.pendingProps,
            a = za.current,
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
            fo(za, 1 & a),
            null === e
              ? (void 0 !== o.fallback && Va(t),
                (e = o.children),
                (a = o.fallback),
                i
                  ? ((e = Ji(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Ki),
                    e)
                  : "number" == typeof o.unstable_expectedLoadTime
                    ? ((e = Ji(t, e, a, n)),
                      (t.child.memoizedState = { baseLanes: n }),
                      (t.memoizedState = Ki),
                      (t.lanes = 33554432),
                      e)
                    : (((n = Yu(
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
                    (t.memoizedState = Ki),
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
              : (a = Yu(t, o, 0, null)),
            (n = qu(n, o, r, null)),
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
            (n = Vu(o, { mode: "visible", children: n })),
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
              : (n = Vu(i, l)),
            null !== e ? (r = Vu(e, r)) : ((r = qu(r, a, o, null)).flags |= 2),
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
          if ((zi(e, t, r.children, n), 0 != (2 & (r = za.current))))
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
          if ((fo(za, r), 0 == (2 & t.mode))) t.memoizedState = null;
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
            (Ul |= t.lanes),
            0 != (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(i(153));
            if (null !== t.child) {
              for (
                n = Vu((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = Vu(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function il(e, t) {
          if (!Wa)
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
                Ma(),
                so(go),
                so(mo),
                Qa(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (qa(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Ia(t);
              var a = Aa(La.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Gi(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return null;
                }
                if (((e = Aa(Ta.current)), qa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Zr] = t), (r[Jr] = l), n)) {
                    case "dialog":
                      Tr("cancel", r), Tr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < kr.length; e++) Tr(kr[e], r);
                      break;
                    case "source":
                      Tr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", r), Tr("load", r);
                      break;
                    case "details":
                      Tr("toggle", r);
                      break;
                    case "input":
                      ee(r, l), Tr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Tr("invalid", r);
                      break;
                    case "textarea":
                      ue(r, l), Tr("invalid", r);
                  }
                  for (var c in (Oe(n, l), (e = null), l))
                    l.hasOwnProperty(c) &&
                      ((a = l[c]),
                      "children" === c
                        ? "string" == typeof a
                          ? r.textContent !== a && (e = ["children", a])
                          : "number" == typeof a &&
                            r.textContent !== "" + a &&
                            (e = ["children", "" + a])
                        : u.hasOwnProperty(c) &&
                          null != a &&
                          "onScroll" === c &&
                          Tr("scroll", r));
                  switch (n) {
                    case "input":
                      Q(r), re(r, l, !0);
                      break;
                    case "textarea":
                      Q(r), se(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof l.onClick && (r.onclick = Ur);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((c = 9 === a.nodeType ? a : a.ownerDocument),
                    e === fe && (e = pe(n)),
                    e === fe
                      ? "script" === n
                        ? (((e = c.createElement("div")).innerHTML =
                            "<script><\/script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                          ? (e = c.createElement(n, { is: r.is }))
                          : ((e = c.createElement(n)),
                            "select" === n &&
                              ((c = e),
                              r.multiple
                                ? (c.multiple = !0)
                                : r.size && (c.size = r.size)))
                      : (e = c.createElementNS(e, n)),
                    (e[Zr] = t),
                    (e[Jr] = r),
                    Yi(e, t),
                    (t.stateNode = e),
                    (c = Se(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Tr("cancel", e), Tr("close", e), (a = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", e), (a = r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < kr.length; a++) Tr(kr[a], e);
                      a = r;
                      break;
                    case "source":
                      Tr("error", e), (a = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", e), Tr("load", e), (a = r);
                      break;
                    case "details":
                      Tr("toggle", e), (a = r);
                      break;
                    case "input":
                      ee(e, r), (a = J(e, r)), Tr("invalid", e);
                      break;
                    case "option":
                      a = ae(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = o({}, r, { value: void 0 })),
                        Tr("invalid", e);
                      break;
                    case "textarea":
                      ue(e, r), (a = le(e, r)), Tr("invalid", e);
                      break;
                    default:
                      a = r;
                  }
                  Oe(n, a);
                  var s = a;
                  for (l in s)
                    if (s.hasOwnProperty(l)) {
                      var f = s[l];
                      "style" === l
                        ? Ee(e, f)
                        : "dangerouslySetInnerHTML" === l
                          ? null != (f = f ? f.__html : void 0) && ve(e, f)
                          : "children" === l
                            ? "string" == typeof f
                              ? ("textarea" !== n || "" !== f) && ye(e, f)
                              : "number" == typeof f && ye(e, "" + f)
                            : "suppressContentEditableWarning" !== l &&
                              "suppressHydrationWarning" !== l &&
                              "autoFocus" !== l &&
                              (u.hasOwnProperty(l)
                                ? null != f &&
                                  "onScroll" === l &&
                                  Tr("scroll", e)
                                : null != f && _(e, l, f, c));
                    }
                  switch (n) {
                    case "input":
                      Q(e), re(e, r, !1);
                      break;
                    case "textarea":
                      Q(e), se(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + Y(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? ie(e, !!r.multiple, l, !1)
                          : null != r.defaultValue &&
                            ie(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof a.onClick && (e.onclick = Ur);
                  }
                  $r(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Qi(0, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(i(166));
                (n = Aa(La.current)),
                  Aa(Ta.current),
                  qa(t)
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
                so(za),
                (r = t.memoizedState),
                0 != (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && qa(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 != (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 != (1 & za.current)
                        ? 0 === Il && (Il = 3)
                        : ((0 !== Il && 3 !== Il) || (Il = 4),
                          null === Ll ||
                            (0 == (134217727 & Ul) && 0 == (134217727 & Hl)) ||
                            vu(Ll, Dl))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Ma(), null === e && Lr(t.stateNode.containerInfo), null;
            case 10:
              return oa(t), null;
            case 19:
              if ((so(za), null === (r = t.memoizedState))) return null;
              if (((l = 0 != (64 & t.flags)), null === (c = r.rendering)))
                if (l) il(r, !1);
                else {
                  if (0 !== Il || (null !== e && 0 != (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (c = Fa(e))) {
                        for (
                          t.flags |= 64,
                            il(r, !1),
                            null !== (l = c.updateQueue) &&
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
                            null === (c = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = c.childLanes),
                                (l.lanes = c.lanes),
                                (l.child = c.child),
                                (l.memoizedProps = c.memoizedProps),
                                (l.memoizedState = c.memoizedState),
                                (l.updateQueue = c.updateQueue),
                                (l.type = c.type),
                                (e = c.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return fo(za, (1 & za.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    Bo() > Vl &&
                    ((t.flags |= 64),
                    (l = !0),
                    il(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = Fa(c))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      il(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !c.alternate &&
                        !Wa)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Bo() - r.renderingStartTime > Vl &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (l = !0),
                      il(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((c.sibling = t.child), (t.child = c))
                  : (null !== (n = r.last) ? (n.sibling = c) : (t.child = c),
                    (r.last = c));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Bo()),
                  (n.sibling = null),
                  (t = za.current),
                  fo(za, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                Eu(),
                null !== e &&
                  (null !== e.memoizedState) != (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(i(156, t.tag));
        }
        function ul(e) {
          switch (e.tag) {
            case 1:
              yo(e.type) && bo();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Ma(), so(go), so(mo), Qa(), 0 != (64 & (t = e.flags))))
                throw Error(i(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Ia(e), null;
            case 13:
              return (
                so(za),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return so(za), null;
            case 4:
              return Ma(), null;
            case 10:
              return oa(e), null;
            case 23:
            case 24:
              return Eu(), null;
            default:
              return null;
          }
        }
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += X(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (e) {
            o = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: o };
        }
        (Yi = function (e, t) {
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
          (Gi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Aa(Ta.current);
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
                    (e.onclick = Ur);
              }
              for (f in (Oe(n, r), (n = null), a))
                if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                  if ("style" === f) {
                    var c = a[f];
                    for (i in c)
                      c.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== f &&
                      "children" !== f &&
                      "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      "autoFocus" !== f &&
                      (u.hasOwnProperty(f)
                        ? l || (l = [])
                        : (l = l || []).push(f, null));
              for (f in r) {
                var s = r[f];
                if (
                  ((c = null != a ? a[f] : void 0),
                  r.hasOwnProperty(f) && s !== c && (null != s || null != c))
                )
                  if ("style" === f)
                    if (c) {
                      for (i in c)
                        !c.hasOwnProperty(i) ||
                          (s && s.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in s)
                        s.hasOwnProperty(i) &&
                          c[i] !== s[i] &&
                          (n || (n = {}), (n[i] = s[i]));
                    } else n || (l || (l = []), l.push(f, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === f
                      ? ((s = s ? s.__html : void 0),
                        (c = c ? c.__html : void 0),
                        null != s && c !== s && (l = l || []).push(f, s))
                      : "children" === f
                        ? ("string" != typeof s && "number" != typeof s) ||
                          (l = l || []).push(f, "" + s)
                        : "suppressContentEditableWarning" !== f &&
                          "suppressHydrationWarning" !== f &&
                          (u.hasOwnProperty(f)
                            ? (null != s && "onScroll" === f && Tr("scroll", e),
                              l || c === s || (l = []))
                            : "object" == typeof s &&
                                null !== s &&
                                s.$$typeof === M
                              ? s.toString()
                              : (l = l || []).push(f, s));
              }
              n && (l = l || []).push("style", n);
              var f = l;
              (t.updateQueue = f) && (t.flags |= 4);
            }
          }),
          (Qi = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var sl = "function" == typeof WeakMap ? WeakMap : Map;
        function fl(e, t, n) {
          ((n = fa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Gl || ((Gl = !0), (Ql = r));
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
                  (null === Kl ? (Kl = new Set([this])) : Kl.add(this));
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
                Fu(e, t);
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
              return void (256 & t.flags && qr(t.stateNode.containerInfo));
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
                      (Ru(n, e), Mu(n, e)),
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
                  $r(n.type, n.memoizedProps) &&
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
                  null !== n && ((n = n.dehydrated), null !== n && Et(n))))
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
          if (So && "function" == typeof So.onCommitFiberUnmount)
            try {
              So.onCommitFiberUnmount(Oo, t);
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
                    if (0 != (4 & r)) Ru(t, n);
                    else {
                      r = t;
                      try {
                        o();
                      } catch (e) {
                        Fu(r, e);
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
                  Fu(t, e);
                }
              break;
            case 5:
              ml(t);
              break;
            case 4:
              Ol(e, t);
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
          r ? El(e, n, t) : xl(e, n, t);
        }
        function El(e, t, n) {
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
                    (t.onclick = Ur));
          else if (4 !== r && null !== (e = e.child))
            for (El(e, t, n), e = e.sibling; null !== e; )
              El(e, t, n), (e = e.sibling);
        }
        function xl(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (xl(e, t, n), e = e.sibling; null !== e; )
              xl(e, t, n), (e = e.sibling);
        }
        function Ol(e, t) {
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
              e: for (var l = e, u = o, c = u; ; )
                if ((yl(l, c), null !== c.child && 4 !== c.tag))
                  (c.child.return = c), (c = c.child);
                else {
                  if (c === u) break e;
                  for (; null === c.sibling; ) {
                    if (null === c.return || c.return === u) break e;
                    c = c.return;
                  }
                  (c.sibling.return = c.return), (c = c.sibling);
                }
              r
                ? ((l = n),
                  (u = o.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(u)
                    : l.removeChild(u))
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
        function Sl(e, t) {
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
                      Se(e, o),
                      t = Se(e, r),
                      o = 0;
                    o < a.length;
                    o += 2
                  ) {
                    var l = a[o],
                      u = a[o + 1];
                    "style" === l
                      ? Ee(n, u)
                      : "dangerouslySetInnerHTML" === l
                        ? ve(n, u)
                        : "children" === l
                          ? ye(n, u)
                          : _(n, l, u, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      ce(n, r);
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
                ((n.hydrate = !1), Et(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && ((Bl = Bo()), vl(t.child, !0)),
                void kl(t)
              );
            case 19:
              return void kl(t);
            case 23:
            case 24:
              return void vl(t, null !== t.memoizedState);
          }
          throw Error(i(163));
        }
        function kl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new pl()),
              t.forEach(function (t) {
                var r = Hu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function jl(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Pl = Math.ceil,
          Cl = w.ReactCurrentDispatcher,
          Tl = w.ReactCurrentOwner,
          Nl = 0,
          Ll = null,
          Al = null,
          Dl = 0,
          Ml = 0,
          Rl = co(0),
          Il = 0,
          zl = null,
          Fl = 0,
          Ul = 0,
          Hl = 0,
          Wl = 0,
          $l = null,
          Bl = 0,
          Vl = 1 / 0;
        function Xl() {
          Vl = Bo() + 500;
        }
        var ql,
          Yl = null,
          Gl = !1,
          Ql = null,
          Kl = null,
          Zl = !1,
          Jl = null,
          eu = 90,
          tu = [],
          nu = [],
          ru = null,
          ou = 0,
          au = null,
          iu = -1,
          lu = 0,
          uu = 0,
          cu = null,
          su = !1;
        function fu() {
          return 0 != (48 & Nl) ? Bo() : -1 !== iu ? iu : (iu = Bo());
        }
        function du(e) {
          if (0 == (2 & (e = e.mode))) return 1;
          if (0 == (4 & e)) return 99 === Vo() ? 1 : 2;
          if ((0 === lu && (lu = Fl), 0 !== Ko.transition)) {
            0 !== uu && (uu = null !== $l ? $l.pendingLanes : 0), (e = lu);
            var t = 4186112 & ~uu;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Vo()),
            0 != (4 & Nl) && 98 === e
              ? (e = Ut(12, lu))
              : (e = Ut(
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
                  lu,
                )),
            e
          );
        }
        function pu(e, t, n) {
          if (50 < ou) throw ((ou = 0), (au = null), Error(i(185)));
          if (null === (e = mu(e, t))) return null;
          $t(e, t, n), e === Ll && ((Hl |= t), 4 === Il && vu(e, Dl));
          var r = Vo();
          1 === t
            ? 0 != (8 & Nl) && 0 == (48 & Nl)
              ? yu(e)
              : (gu(e, n), 0 === Nl && (Xl(), Go()))
            : (0 == (4 & Nl) ||
                (98 !== r && 99 !== r) ||
                (null === ru ? (ru = new Set([e])) : ru.add(e)),
              gu(e, n)),
            ($l = e);
        }
        function mu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function gu(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              o = e.pingedLanes,
              a = e.expirationTimes,
              l = e.pendingLanes;
            0 < l;

          ) {
            var u = 31 - Bt(l),
              c = 1 << u,
              s = a[u];
            if (-1 === s) {
              if (0 == (c & r) || 0 != (c & o)) {
                (s = t), It(c);
                var f = Rt;
                a[u] = 10 <= f ? s + 250 : 6 <= f ? s + 5e3 : -1;
              }
            } else s <= t && (e.expiredLanes |= c);
            l &= ~c;
          }
          if (((r = zt(e, e === Ll ? Dl : 0)), (t = Rt), 0 === r))
            null !== n &&
              (n !== zo && Po(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== zo && Po(n);
            }
            15 === t
              ? ((n = yu.bind(null, e)),
                null === Uo ? ((Uo = [n]), (Ho = jo(Ao, Qo))) : Uo.push(n),
                (n = zo))
              : 14 === t
                ? (n = Yo(99, yu.bind(null, e)))
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
                  (n = Yo(n, hu.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function hu(e) {
          if (((iu = -1), (uu = lu = 0), 0 != (48 & Nl))) throw Error(i(327));
          var t = e.callbackNode;
          if (Du() && e.callbackNode !== t) return null;
          var n = zt(e, e === Ll ? Dl : 0);
          if (0 === n) return null;
          var r = n,
            o = Nl;
          Nl |= 16;
          var a = Su();
          for ((Ll === e && Dl === r) || (Xl(), xu(e, r)); ; )
            try {
              Pu();
              break;
            } catch (t) {
              Ou(e, t);
            }
          if (
            (ra(),
            (Cl.current = a),
            (Nl = o),
            null !== Al ? (r = 0) : ((Ll = null), (Dl = 0), (r = Il)),
            0 != (Fl & Hl))
          )
            xu(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Nl |= 64),
                e.hydrate && ((e.hydrate = !1), qr(e.containerInfo)),
                0 !== (n = Ft(e)) && (r = ku(e, n))),
              1 === r)
            )
              throw ((t = zl), xu(e, 0), vu(e, n), gu(e, Bo()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(i(345));
              case 2:
              case 5:
                Nu(e);
                break;
              case 3:
                if (
                  (vu(e, n), (62914560 & n) === n && 10 < (r = Bl + 500 - Bo()))
                ) {
                  if (0 !== zt(e, 0)) break;
                  if (((o = e.suspendedLanes) & n) !== n) {
                    fu(), (e.pingedLanes |= e.suspendedLanes & o);
                    break;
                  }
                  e.timeoutHandle = Vr(Nu.bind(null, e), r);
                  break;
                }
                Nu(e);
                break;
              case 4:
                if ((vu(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, o = -1; 0 < n; ) {
                  var l = 31 - Bt(n);
                  (a = 1 << l), (l = r[l]) > o && (o = l), (n &= ~a);
                }
                if (
                  ((n = o),
                  10 <
                    (n =
                      (120 > (n = Bo() - n)
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
                                  : 1960 * Pl(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Vr(Nu.bind(null, e), n);
                  break;
                }
                Nu(e);
                break;
              default:
                throw Error(i(329));
            }
          }
          return gu(e, Bo()), e.callbackNode === t ? hu.bind(null, e) : null;
        }
        function vu(e, t) {
          for (
            t &= ~Wl,
              t &= ~Hl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Bt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function yu(e) {
          if (0 != (48 & Nl)) throw Error(i(327));
          if ((Du(), e === Ll && 0 != (e.expiredLanes & Dl))) {
            var t = Dl,
              n = ku(e, t);
            0 != (Fl & Hl) && (n = ku(e, (t = zt(e, t))));
          } else n = ku(e, (t = zt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Nl |= 64),
              e.hydrate && ((e.hydrate = !1), qr(e.containerInfo)),
              0 !== (t = Ft(e)) && (n = ku(e, t))),
            1 === n)
          )
            throw ((n = zl), xu(e, 0), vu(e, t), gu(e, Bo()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Nu(e),
            gu(e, Bo()),
            null
          );
        }
        function bu(e, t) {
          var n = Nl;
          Nl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nl = n) && (Xl(), Go());
          }
        }
        function _u(e, t) {
          var n = Nl;
          (Nl &= -2), (Nl |= 8);
          try {
            return e(t);
          } finally {
            0 === (Nl = n) && (Xl(), Go());
          }
        }
        function wu(e, t) {
          fo(Rl, Ml), (Ml |= t), (Fl |= t);
        }
        function Eu() {
          (Ml = Rl.current), so(Rl);
        }
        function xu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), Xr(n)), null !== Al))
            for (n = Al.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null != (r = r.type.childContextTypes) && bo();
                  break;
                case 3:
                  Ma(), so(go), so(mo), Qa();
                  break;
                case 5:
                  Ia(r);
                  break;
                case 4:
                  Ma();
                  break;
                case 13:
                case 19:
                  so(za);
                  break;
                case 10:
                  oa(r);
                  break;
                case 23:
                case 24:
                  Eu();
              }
              n = n.return;
            }
          (Ll = e),
            (Al = Vu(e.current, null)),
            (Dl = Ml = Fl = t),
            (Il = 0),
            (zl = null),
            (Wl = Hl = Ul = 0);
        }
        function Ou(e, t) {
          for (;;) {
            var n = Al;
            try {
              if ((ra(), (Ka.current = Li), ri)) {
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
                (Tl.current = null),
                null === n || null === n.return)
              ) {
                (Il = 1), (zl = t), (Al = null);
                break;
              }
              e: {
                var a = e,
                  i = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Dl),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== u &&
                    "object" == typeof u &&
                    "function" == typeof u.then)
                ) {
                  var c = u;
                  if (0 == (2 & l.mode)) {
                    var s = l.alternate;
                    s
                      ? ((l.updateQueue = s.updateQueue),
                        (l.memoizedState = s.memoizedState),
                        (l.lanes = s.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var f = 0 != (1 & za.current),
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
                        v.add(c), (d.updateQueue = v);
                      } else h.add(c);
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
                      (u = void 0), (l = t);
                      var b = a.pingCache;
                      if (
                        (null === b
                          ? ((b = a.pingCache = new sl()),
                            (u = new Set()),
                            b.set(c, u))
                          : void 0 === (u = b.get(c)) &&
                            ((u = new Set()), b.set(c, u)),
                        !u.has(l))
                      ) {
                        u.add(l);
                        var _ = Uu.bind(null, a, c, l);
                        c.then(_, _);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  u = Error(
                    (q(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.",
                  );
                }
                5 !== Il && (Il = 2), (u = cl(u, l)), (d = i);
                do {
                  switch (d.tag) {
                    case 3:
                      (a = u),
                        (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        pa(d, fl(0, a, t));
                      break e;
                    case 1:
                      a = u;
                      var w = d.type,
                        E = d.stateNode;
                      if (
                        0 == (64 & d.flags) &&
                        ("function" == typeof w.getDerivedStateFromError ||
                          (null !== E &&
                            "function" == typeof E.componentDidCatch &&
                            (null === Kl || !Kl.has(E))))
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
              Tu(n);
            } catch (e) {
              (t = e), Al === n && null !== n && (Al = n = n.return);
              continue;
            }
            break;
          }
        }
        function Su() {
          var e = Cl.current;
          return (Cl.current = Li), null === e ? Li : e;
        }
        function ku(e, t) {
          var n = Nl;
          Nl |= 16;
          var r = Su();
          for ((Ll === e && Dl === t) || xu(e, t); ; )
            try {
              ju();
              break;
            } catch (t) {
              Ou(e, t);
            }
          if ((ra(), (Nl = n), (Cl.current = r), null !== Al))
            throw Error(i(261));
          return (Ll = null), (Dl = 0), Il;
        }
        function ju() {
          for (; null !== Al; ) Cu(Al);
        }
        function Pu() {
          for (; null !== Al && !Co(); ) Cu(Al);
        }
        function Cu(e) {
          var t = ql(e.alternate, e, Ml);
          (e.memoizedProps = e.pendingProps),
            null === t ? Tu(e) : (Al = t),
            (Tl.current = null);
        }
        function Tu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (2048 & t.flags))) {
              if (null !== (n = ll(n, t, Ml))) return void (Al = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 != (1073741824 & Ml) ||
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
              if (null !== (n = ul(t))) return (n.flags &= 2047), void (Al = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Al = t);
            Al = t = e;
          } while (null !== t);
          0 === Il && (Il = 5);
        }
        function Nu(e) {
          var t = Vo();
          return qo(99, Lu.bind(null, e, t)), null;
        }
        function Lu(e, t) {
          do {
            Du();
          } while (null !== Jl);
          if (0 != (48 & Nl)) throw Error(i(327));
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
          for (var l = e.eventTimes, u = e.expirationTimes; 0 < a; ) {
            var c = 31 - Bt(a),
              s = 1 << c;
            (o[c] = 0), (l[c] = -1), (u[c] = -1), (a &= ~s);
          }
          if (
            (null !== ru && 0 == (24 & r) && ru.has(e) && ru.delete(e),
            e === Ll && ((Al = Ll = null), (Dl = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((o = Nl),
              (Nl |= 32),
              (Tl.current = null),
              (Hr = Gt),
              vr((l = hr())))
            ) {
              if ("selectionStart" in l)
                u = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((u = ((u = l.ownerDocument) && u.defaultView) || window),
                  (s = u.getSelection && u.getSelection()) &&
                    0 !== s.rangeCount)
                ) {
                  (u = s.anchorNode),
                    (a = s.anchorOffset),
                    (c = s.focusNode),
                    (s = s.focusOffset);
                  try {
                    u.nodeType, c.nodeType;
                  } catch (e) {
                    u = null;
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
                      h !== u || (0 !== a && 3 !== h.nodeType) || (d = f + a),
                        h !== c || (0 !== s && 3 !== h.nodeType) || (p = f + s),
                        3 === h.nodeType && (f += h.nodeValue.length),
                        null !== (y = h.firstChild);

                    )
                      (v = h), (h = y);
                    for (;;) {
                      if (h === l) break t;
                      if (
                        (v === u && ++m === a && (d = f),
                        v === c && ++g === s && (p = f),
                        null !== (y = h.nextSibling))
                      )
                        break;
                      v = (h = v).parentNode;
                    }
                    h = y;
                  }
                  u = -1 === d || -1 === p ? null : { start: d, end: p };
                } else u = null;
              u = u || { start: 0, end: 0 };
            } else u = null;
            (Wr = { focusedElem: l, selectionRange: u }),
              (Gt = !1),
              (cu = null),
              (su = !1),
              (Yl = r);
            do {
              try {
                Au();
              } catch (e) {
                if (null === Yl) throw Error(i(330));
                Fu(Yl, e), (Yl = Yl.nextEffect);
              }
            } while (null !== Yl);
            (cu = null), (Yl = r);
            do {
              try {
                for (l = e; null !== Yl; ) {
                  var b = Yl.flags;
                  if ((16 & b && ye(Yl.stateNode, ""), 128 & b)) {
                    var _ = Yl.alternate;
                    if (null !== _) {
                      var w = _.ref;
                      null !== w &&
                        ("function" == typeof w ? w(null) : (w.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      wl(Yl), (Yl.flags &= -3);
                      break;
                    case 6:
                      wl(Yl), (Yl.flags &= -3), Sl(Yl.alternate, Yl);
                      break;
                    case 1024:
                      Yl.flags &= -1025;
                      break;
                    case 1028:
                      (Yl.flags &= -1025), Sl(Yl.alternate, Yl);
                      break;
                    case 4:
                      Sl(Yl.alternate, Yl);
                      break;
                    case 8:
                      Ol(l, (u = Yl));
                      var E = u.alternate;
                      bl(u), null !== E && bl(E);
                  }
                  Yl = Yl.nextEffect;
                }
              } catch (e) {
                if (null === Yl) throw Error(i(330));
                Fu(Yl, e), (Yl = Yl.nextEffect);
              }
            } while (null !== Yl);
            if (
              ((w = Wr),
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
                    (u = b.textContent.length),
                    (E = Math.min(l.start, u)),
                    (l = void 0 === l.end ? E : Math.min(l.end, u)),
                    !w.extend && E > l && ((u = l), (l = E), (E = u)),
                    (u = mr(b, E)),
                    (a = mr(b, l)),
                    u &&
                      a &&
                      (1 !== w.rangeCount ||
                        w.anchorNode !== u.node ||
                        w.anchorOffset !== u.offset ||
                        w.focusNode !== a.node ||
                        w.focusOffset !== a.offset) &&
                      ((_ = _.createRange()).setStart(u.node, u.offset),
                      w.removeAllRanges(),
                      E > l
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
            (Gt = !!Hr), (Wr = Hr = null), (e.current = n), (Yl = r);
            do {
              try {
                for (b = e; null !== Yl; ) {
                  var x = Yl.flags;
                  if ((36 & x && hl(b, Yl.alternate, Yl), 128 & x)) {
                    _ = void 0;
                    var O = Yl.ref;
                    if (null !== O) {
                      var S = Yl.stateNode;
                      Yl.tag,
                        (_ = S),
                        "function" == typeof O ? O(_) : (O.current = _);
                    }
                  }
                  Yl = Yl.nextEffect;
                }
              } catch (e) {
                if (null === Yl) throw Error(i(330));
                Fu(Yl, e), (Yl = Yl.nextEffect);
              }
            } while (null !== Yl);
            (Yl = null), Fo(), (Nl = o);
          } else e.current = n;
          if (Zl) (Zl = !1), (Jl = e), (eu = t);
          else
            for (Yl = r; null !== Yl; )
              (t = Yl.nextEffect),
                (Yl.nextEffect = null),
                8 & Yl.flags &&
                  (((x = Yl).sibling = null), (x.stateNode = null)),
                (Yl = t);
          if (
            (0 === (r = e.pendingLanes) && (Kl = null),
            1 === r ? (e === au ? ou++ : ((ou = 0), (au = e))) : (ou = 0),
            (n = n.stateNode),
            So && "function" == typeof So.onCommitFiberRoot)
          )
            try {
              So.onCommitFiberRoot(Oo, n, void 0, 64 == (64 & n.current.flags));
            } catch (e) {}
          if ((gu(e, Bo()), Gl)) throw ((Gl = !1), (e = Ql), (Ql = null), e);
          return 0 != (8 & Nl) || Go(), null;
        }
        function Au() {
          for (; null !== Yl; ) {
            var e = Yl.alternate;
            su ||
              null === cu ||
              (0 != (8 & Yl.flags)
                ? et(Yl, cu) && (su = !0)
                : 13 === Yl.tag && jl(e, Yl) && et(Yl, cu) && (su = !0));
            var t = Yl.flags;
            0 != (256 & t) && gl(e, Yl),
              0 == (512 & t) ||
                Zl ||
                ((Zl = !0),
                Yo(97, function () {
                  return Du(), null;
                })),
              (Yl = Yl.nextEffect);
          }
        }
        function Du() {
          if (90 !== eu) {
            var e = 97 < eu ? 97 : eu;
            return (eu = 90), qo(e, Iu);
          }
          return !1;
        }
        function Mu(e, t) {
          tu.push(t, e),
            Zl ||
              ((Zl = !0),
              Yo(97, function () {
                return Du(), null;
              }));
        }
        function Ru(e, t) {
          nu.push(t, e),
            Zl ||
              ((Zl = !0),
              Yo(97, function () {
                return Du(), null;
              }));
        }
        function Iu() {
          if (null === Jl) return !1;
          var e = Jl;
          if (((Jl = null), 0 != (48 & Nl))) throw Error(i(331));
          var t = Nl;
          Nl |= 32;
          var n = nu;
          nu = [];
          for (var r = 0; r < n.length; r += 2) {
            var o = n[r],
              a = n[r + 1],
              l = o.destroy;
            if (((o.destroy = void 0), "function" == typeof l))
              try {
                l();
              } catch (e) {
                if (null === a) throw Error(i(330));
                Fu(a, e);
              }
          }
          for (n = tu, tu = [], r = 0; r < n.length; r += 2) {
            (o = n[r]), (a = n[r + 1]);
            try {
              var u = o.create;
              o.destroy = u();
            } catch (e) {
              if (null === a) throw Error(i(330));
              Fu(a, e);
            }
          }
          for (u = e.current.firstEffect; null !== u; )
            (e = u.nextEffect),
              (u.nextEffect = null),
              8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
              (u = e);
          return (Nl = t), Go(), !0;
        }
        function zu(e, t, n) {
          da(e, (t = fl(0, (t = cl(n, t)), 1))),
            (t = fu()),
            null !== (e = mu(e, 1)) && ($t(e, 1, t), gu(e, t));
        }
        function Fu(e, t) {
          if (3 === e.tag) zu(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                zu(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" == typeof n.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === Kl || !Kl.has(r)))
                ) {
                  var o = dl(n, (e = cl(t, e)), 1);
                  if ((da(n, o), (o = fu()), null !== (n = mu(n, 1))))
                    $t(n, 1, o), gu(n, o);
                  else if (
                    "function" == typeof r.componentDidCatch &&
                    (null === Kl || !Kl.has(r))
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
        function Uu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = fu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ll === e &&
              (Dl & n) === n &&
              (4 === Il ||
              (3 === Il && (62914560 & Dl) === Dl && 500 > Bo() - Bl)
                ? xu(e, 0)
                : (Wl |= n)),
            gu(e, t);
        }
        function Hu(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 == (2 & (t = e.mode))
                ? (t = 1)
                : 0 == (4 & t)
                  ? (t = 99 === Vo() ? 1 : 2)
                  : (0 === lu && (lu = Fl),
                    0 === (t = Ht(62914560 & ~lu)) && (t = 4194304))),
            (n = fu()),
            null !== (e = mu(e, t)) && ($t(e, t, n), gu(e, n));
        }
        function Wu(e, t, n, r) {
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
        function $u(e, t, n, r) {
          return new Wu(e, t, n, r);
        }
        function Bu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Vu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = $u(e.tag, t, e.key, e.mode)).elementType =
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
        function Xu(e, t, n, r, o, a) {
          var l = 2;
          if (((r = e), "function" == typeof e)) Bu(e) && (l = 1);
          else if ("string" == typeof e) l = 5;
          else
            e: switch (e) {
              case O:
                return qu(n.children, o, a, t);
              case R:
                (l = 8), (o |= 16);
                break;
              case S:
                (l = 8), (o |= 1);
                break;
              case k:
                return (
                  ((e = $u(12, n, t, 8 | o)).elementType = k),
                  (e.type = k),
                  (e.lanes = a),
                  e
                );
              case T:
                return (
                  ((e = $u(13, n, t, o)).type = T),
                  (e.elementType = T),
                  (e.lanes = a),
                  e
                );
              case N:
                return (
                  ((e = $u(19, n, t, o)).elementType = N), (e.lanes = a), e
                );
              case I:
                return Yu(n, o, a, t);
              case z:
                return (
                  ((e = $u(24, n, t, o)).elementType = z), (e.lanes = a), e
                );
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case j:
                      l = 10;
                      break e;
                    case P:
                      l = 9;
                      break e;
                    case C:
                      l = 11;
                      break e;
                    case L:
                      l = 14;
                      break e;
                    case A:
                      (l = 16), (r = null);
                      break e;
                    case D:
                      l = 22;
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = $u(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function qu(e, t, n, r) {
          return ((e = $u(7, e, r, t)).lanes = n), e;
        }
        function Yu(e, t, n, r) {
          return ((e = $u(23, e, r, t)).elementType = I), (e.lanes = n), e;
        }
        function Gu(e, t, n) {
          return ((e = $u(6, e, null, t)).lanes = n), e;
        }
        function Qu(e, t, n) {
          return (
            ((t = $u(
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
        function Ku(e, t, n) {
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
            (this.eventTimes = Wt(0)),
            (this.expirationTimes = Wt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Wt(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Zu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: x,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Ju(e, t, n, r) {
          var o = t.current,
            a = fu(),
            l = du(o);
          e: if (n) {
            t: {
              if (Qe((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(i(170));
              var u = n;
              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;
                  case 1:
                    if (yo(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                u = u.return;
              } while (null !== u);
              throw Error(i(171));
            }
            if (1 === n.tag) {
              var c = n.type;
              if (yo(c)) {
                n = wo(n, c, u);
                break e;
              }
            }
            n = u;
          } else n = po;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = fa(a, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            da(o, t),
            pu(o, l, a),
            l
          );
        }
        function ec(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function tc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function nc(e, t) {
          tc(e, t), (e = e.alternate) && tc(e, t);
        }
        function rc(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Ku(e, t, null != n && !0 === n.hydrate)),
            (t = $u(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            ca(t),
            (e[eo] = n.current),
            Lr(8 === e.nodeType ? e.parentNode : e),
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
        function oc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function ac(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a._internalRoot;
            if ("function" == typeof o) {
              var l = o;
              o = function () {
                var e = ec(i);
                l.call(e);
              };
            }
            Ju(t, i, e, o);
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
                  return new rc(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (i = a._internalRoot),
              "function" == typeof o)
            ) {
              var u = o;
              o = function () {
                var e = ec(i);
                u.call(e);
              };
            }
            _u(function () {
              Ju(t, i, e, o);
            });
          }
          return ec(i);
        }
        function ic(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!oc(t)) throw Error(i(200));
          return Zu(e, t, null, n);
        }
        (ql = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || go.current) Ii = !0;
            else {
              if (0 == (n & r)) {
                switch (((Ii = !1), t.tag)) {
                  case 3:
                    qi(t), Ya();
                    break;
                  case 5:
                    Ra(t);
                    break;
                  case 1:
                    yo(t.type) && Eo(t);
                    break;
                  case 4:
                    Da(t, t.stateNode.containerInfo);
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
                        : (fo(za, 1 & za.current),
                          null !== (t = al(e, t, n)) ? t.sibling : null);
                    fo(za, 1 & za.current);
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
                      fo(za, za.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Wi(e, t, n);
                }
                return al(e, t, n);
              }
              Ii = 0 != (16384 & e.flags);
            }
          else Ii = !1;
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
                  Eo(t);
                } else a = !1;
                (t.memoizedState =
                  null !== o.state && void 0 !== o.state ? o.state : null),
                  ca(t);
                var l = r.getDerivedStateFromProps;
                "function" == typeof l && va(t, r, l, e),
                  (o.updater = ya),
                  (t.stateNode = o),
                  (o._reactInternals = t),
                  Ea(t, r, e, n),
                  (t = Xi(null, t, r, !0, a, n));
              } else (t.tag = 0), zi(null, t, o, n), (t = t.child);
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
                      if ("function" == typeof e) return Bu(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === C) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(o)),
                  (e = Zo(o, e)),
                  a)
                ) {
                  case 0:
                    t = Bi(null, t, o, e, n);
                    break e;
                  case 1:
                    t = Vi(null, t, o, e, n);
                    break e;
                  case 11:
                    t = Fi(null, t, o, e, n);
                    break e;
                  case 14:
                    t = Ui(null, t, o, Zo(o.type, e), r, n);
                    break e;
                }
                throw Error(i(306, o, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Bi(e, t, r, (o = t.elementType === r ? o : Zo(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Vi(e, t, r, (o = t.elementType === r ? o : Zo(r, o)), n)
              );
            case 3:
              if ((qi(t), (r = t.updateQueue), null === e || null === r))
                throw Error(i(282));
              if (
                ((r = t.pendingProps),
                (o = null !== (o = t.memoizedState) ? o.element : null),
                sa(e, t),
                ma(t, r, null, n),
                (r = t.memoizedState.element) === o)
              )
                Ya(), (t = al(e, t, n));
              else {
                if (
                  ((a = (o = t.stateNode).hydrate) &&
                    ((Ha = Yr(t.stateNode.containerInfo.firstChild)),
                    (Ua = t),
                    (a = Wa = !0)),
                  a)
                ) {
                  if (null != (e = o.mutableSourceEagerHydrationData))
                    for (o = 0; o < e.length; o += 2)
                      ((a = e[o])._workInProgressVersionPrimary = e[o + 1]),
                        Ga.push(a);
                  for (n = Pa(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else zi(e, t, r, n), Ya();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ra(t),
                null === e && Va(t),
                (r = t.type),
                (o = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (l = o.children),
                Br(r, o)
                  ? (l = null)
                  : null !== a && Br(r, a) && (t.flags |= 16),
                $i(e, t),
                zi(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && Va(t), null;
            case 13:
              return Zi(e, t, n);
            case 4:
              return (
                Da(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ja(t, null, r, n)) : zi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Fi(e, t, r, (o = t.elementType === r ? o : Zo(r, o)), n)
              );
            case 7:
              return zi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return zi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (o = t.pendingProps),
                  (l = t.memoizedProps),
                  (a = o.value);
                var u = t.type._context;
                if (
                  (fo(Jo, u._currentValue), (u._currentValue = a), null !== l)
                )
                  if (
                    ((u = l.value),
                    0 ===
                      (a = sr(u, a)
                        ? 0
                        : 0 |
                          ("function" == typeof r._calculateChangedBits
                            ? r._calculateChangedBits(u, a)
                            : 1073741823)))
                  ) {
                    if (l.children === o.children && !go.current) {
                      t = al(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (u = t.child) && (u.return = t);
                      null !== u;

                    ) {
                      var c = u.dependencies;
                      if (null !== c) {
                        l = u.child;
                        for (var s = c.firstContext; null !== s; ) {
                          if (s.context === r && 0 != (s.observedBits & a)) {
                            1 === u.tag &&
                              (((s = fa(-1, n & -n)).tag = 2), da(u, s)),
                              (u.lanes |= n),
                              null !== (s = u.alternate) && (s.lanes |= n),
                              aa(u.return, n),
                              (c.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else
                        l = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== l) l.return = u;
                      else
                        for (l = u; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (u = l.sibling)) {
                            (u.return = l.return), (l = u);
                            break;
                          }
                          l = l.return;
                        }
                      u = l;
                    }
                zi(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = (a = t.pendingProps).children),
                ia(t, n),
                (r = r((o = la(o, a.unstable_observedBits)))),
                (t.flags |= 1),
                zi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Zo((o = t.type), t.pendingProps)),
                Ui(e, t, o, (a = Zo(o.type, a)), r, n)
              );
            case 15:
              return Hi(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Zo(r, o)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                yo(r) ? ((e = !0), Eo(t)) : (e = !1),
                ia(t, n),
                _a(t, r, o),
                Ea(t, r, o, n),
                Xi(null, t, r, !0, e, n)
              );
            case 19:
              return ol(e, t, n);
            case 23:
            case 24:
              return Wi(e, t, n);
          }
          throw Error(i(156, t.tag));
        }),
          (rc.prototype.render = function (e) {
            Ju(e, this._internalRoot, null, null);
          }),
          (rc.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            Ju(null, e, null, function () {
              t[eo] = null;
            });
          }),
          (tt = function (e) {
            13 === e.tag && (pu(e, 4, fu()), nc(e, 4));
          }),
          (nt = function (e) {
            13 === e.tag && (pu(e, 67108864, fu()), nc(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = fu(),
                n = du(e);
              pu(e, n, t), nc(e, n);
            }
          }),
          (ot = function (e, t) {
            return t();
          }),
          (je = function (e, t, n) {
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
                      K(r), ne(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ce(e, n);
                break;
              case "select":
                null != (t = n.value) && ie(e, !!n.multiple, t, !1);
            }
          }),
          (Ae = bu),
          (De = function (e, t, n, r, o) {
            var a = Nl;
            Nl |= 4;
            try {
              return qo(98, e.bind(null, t, n, r, o));
            } finally {
              0 === (Nl = a) && (Xl(), Go());
            }
          }),
          (Me = function () {
            0 == (49 & Nl) &&
              ((function () {
                if (null !== ru) {
                  var e = ru;
                  (ru = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), gu(e, Bo());
                    });
                }
                Go();
              })(),
              Du());
          }),
          (Re = function (e, t) {
            var n = Nl;
            Nl |= 2;
            try {
              return e(t);
            } finally {
              0 === (Nl = n) && (Xl(), Go());
            }
          });
        var lc = { Events: [ro, oo, ao, Ne, Le, Du, { current: !1 }] },
          uc = {
            findFiberByHostInstance: no,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          cc = {
            bundleType: uc.bundleType,
            version: uc.version,
            rendererPackageName: uc.rendererPackageName,
            rendererConfig: uc.rendererConfig,
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
              uc.findFiberByHostInstance ||
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
          var sc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!sc.isDisabled && sc.supportsFiber)
            try {
              (Oo = sc.inject(cc)), (So = sc);
            } catch (he) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lc),
          (t.createPortal = ic),
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
            var n = Nl;
            if (0 != (48 & n)) return e(t);
            Nl |= 1;
            try {
              if (e) return qo(99, e.bind(null, t));
            } finally {
              (Nl = n), Go();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!oc(t)) throw Error(i(200));
            return ac(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!oc(t)) throw Error(i(200));
            return ac(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!oc(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (_u(function () {
                ac(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[eo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = bu),
          (t.unstable_createPortal = function (e, t) {
            return ic(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!oc(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ac(e, t, n, !1, r);
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
      6467: (e, t, n) => {
        "use strict";
        function r(e) {
          return (
            (r =
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
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "DraggableCore", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          (t.default = void 0);
        var o = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" !== r(e) && "function" != typeof e))
              return { default: e };
            var n = g(t);
            if (n && n.has(e)) return n.get(e);
            var o = {},
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
              if (
                "default" !== i &&
                Object.prototype.hasOwnProperty.call(e, i)
              ) {
                var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                l && (l.get || l.set)
                  ? Object.defineProperty(o, i, l)
                  : (o[i] = e[i]);
              }
            (o.default = e), n && n.set(e, o);
            return o;
          })(n(9231)),
          a = m(n(9519)),
          i = m(n(4151)),
          l = m(n(9841)),
          u = n(7393),
          c = n(6571),
          s = n(3175),
          f = m(n(3801)),
          d = m(n(6590)),
          p = [
            "axis",
            "bounds",
            "children",
            "defaultPosition",
            "defaultClassName",
            "defaultClassNameDragging",
            "defaultClassNameDragged",
            "position",
            "positionOffset",
            "scale",
          ];
        function m(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function g(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (g = function (e) {
            return e ? n : t;
          })(e);
        }
        function h() {
          return (
            (h =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            h.apply(this, arguments)
          );
        }
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
        function b(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? y(Object(n), !0).forEach(function (t) {
                  P(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : y(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function _(e, t) {
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
              if (null == n) return;
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
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return w(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return w(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function w(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function E(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function x(e, t) {
          return (
            (x =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            x(e, t)
          );
        }
        function O(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = j(e);
            if (t) {
              var o = j(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return S(this, n);
          };
        }
        function S(e, t) {
          if (t && ("object" === r(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return k(e);
        }
        function k(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return e;
        }
        function j(e) {
          return (
            (j = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            j(e)
          );
        }
        function P(e, t, n) {
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
        var C = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && x(e, t);
          })(s, e);
          var t,
            n,
            r,
            a = O(s);
          function s(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              P(k((t = a.call(this, e))), "onDragStart", function (e, n) {
                if (
                  ((0, d.default)("Draggable: onDragStart: %j", n),
                  !1 ===
                    t.props.onStart(e, (0, c.createDraggableData)(k(t), n)))
                )
                  return !1;
                t.setState({ dragging: !0, dragged: !0 });
              }),
              P(k(t), "onDrag", function (e, n) {
                if (!t.state.dragging) return !1;
                (0, d.default)("Draggable: onDrag: %j", n);
                var r = (0, c.createDraggableData)(k(t), n),
                  o = { x: r.x, y: r.y };
                if (t.props.bounds) {
                  var a = o.x,
                    i = o.y;
                  (o.x += t.state.slackX), (o.y += t.state.slackY);
                  var l = _((0, c.getBoundPosition)(k(t), o.x, o.y), 2),
                    u = l[0],
                    s = l[1];
                  (o.x = u),
                    (o.y = s),
                    (o.slackX = t.state.slackX + (a - o.x)),
                    (o.slackY = t.state.slackY + (i - o.y)),
                    (r.x = o.x),
                    (r.y = o.y),
                    (r.deltaX = o.x - t.state.x),
                    (r.deltaY = o.y - t.state.y);
                }
                if (!1 === t.props.onDrag(e, r)) return !1;
                t.setState(o);
              }),
              P(k(t), "onDragStop", function (e, n) {
                if (!t.state.dragging) return !1;
                if (
                  !1 === t.props.onStop(e, (0, c.createDraggableData)(k(t), n))
                )
                  return !1;
                (0, d.default)("Draggable: onDragStop: %j", n);
                var r = { dragging: !1, slackX: 0, slackY: 0 };
                if (Boolean(t.props.position)) {
                  var o = t.props.position,
                    a = o.x,
                    i = o.y;
                  (r.x = a), (r.y = i);
                }
                t.setState(r);
              }),
              (t.state = {
                dragging: !1,
                dragged: !1,
                x: e.position ? e.position.x : e.defaultPosition.x,
                y: e.position ? e.position.y : e.defaultPosition.y,
                prevPropsPosition: b({}, e.position),
                slackX: 0,
                slackY: 0,
                isElementSVG: !1,
              }),
              e.position && !e.onDrag && e.onStop,
              t
            );
          }
          return (
            (t = s),
            (r = [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  var n = e.position,
                    r = t.prevPropsPosition;
                  return !n || (r && n.x === r.x && n.y === r.y)
                    ? null
                    : ((0, d.default)(
                        "Draggable: getDerivedStateFromProps %j",
                        { position: n, prevPropsPosition: r },
                      ),
                      { x: n.x, y: n.y, prevPropsPosition: b({}, n) });
                },
              },
            ]),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  void 0 !== window.SVGElement &&
                    this.findDOMNode() instanceof window.SVGElement &&
                    this.setState({ isElementSVG: !0 });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.setState({ dragging: !1 });
                },
              },
              {
                key: "findDOMNode",
                value: function () {
                  var e, t, n;
                  return null !==
                    (e =
                      null === (t = this.props) ||
                      void 0 === t ||
                      null === (n = t.nodeRef) ||
                      void 0 === n
                        ? void 0
                        : n.current) && void 0 !== e
                    ? e
                    : i.default.findDOMNode(this);
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props,
                    n = (t.axis, t.bounds, t.children),
                    r = t.defaultPosition,
                    a = t.defaultClassName,
                    i = t.defaultClassNameDragging,
                    s = t.defaultClassNameDragged,
                    d = t.position,
                    m = t.positionOffset,
                    g = (t.scale, v(t, p)),
                    y = {},
                    _ = null,
                    w = !Boolean(d) || this.state.dragging,
                    E = d || r,
                    x = {
                      x: (0, c.canDragX)(this) && w ? this.state.x : E.x,
                      y: (0, c.canDragY)(this) && w ? this.state.y : E.y,
                    };
                  this.state.isElementSVG
                    ? (_ = (0, u.createSVGTransform)(x, m))
                    : (y = (0, u.createCSSTransform)(x, m));
                  var O = (0, l.default)(
                    n.props.className || "",
                    a,
                    (P((e = {}), i, this.state.dragging),
                    P(e, s, this.state.dragged),
                    e),
                  );
                  return o.createElement(
                    f.default,
                    h({}, g, {
                      onStart: this.onDragStart,
                      onDrag: this.onDrag,
                      onStop: this.onDragStop,
                    }),
                    o.cloneElement(o.Children.only(n), {
                      className: O,
                      style: b(b({}, n.props.style), y),
                      transform: _,
                    }),
                  );
                },
              },
            ]) && E(t.prototype, n),
            r && E(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            s
          );
        })(o.Component);
        (t.default = C),
          P(C, "displayName", "Draggable"),
          P(
            C,
            "propTypes",
            b(
              b({}, f.default.propTypes),
              {},
              {
                axis: a.default.oneOf(["both", "x", "y", "none"]),
                bounds: a.default.oneOfType([
                  a.default.shape({
                    left: a.default.number,
                    right: a.default.number,
                    top: a.default.number,
                    bottom: a.default.number,
                  }),
                  a.default.string,
                  a.default.oneOf([!1]),
                ]),
                defaultClassName: a.default.string,
                defaultClassNameDragging: a.default.string,
                defaultClassNameDragged: a.default.string,
                defaultPosition: a.default.shape({
                  x: a.default.number,
                  y: a.default.number,
                }),
                positionOffset: a.default.shape({
                  x: a.default.oneOfType([a.default.number, a.default.string]),
                  y: a.default.oneOfType([a.default.number, a.default.string]),
                }),
                position: a.default.shape({
                  x: a.default.number,
                  y: a.default.number,
                }),
                className: s.dontSetMe,
                style: s.dontSetMe,
                transform: s.dontSetMe,
              },
            ),
          ),
          P(
            C,
            "defaultProps",
            b(
              b({}, f.default.defaultProps),
              {},
              {
                axis: "both",
                bounds: !1,
                defaultClassName: "react-draggable",
                defaultClassNameDragging: "react-draggable-dragging",
                defaultClassNameDragged: "react-draggable-dragged",
                defaultPosition: { x: 0, y: 0 },
                scale: 1,
              },
            ),
          );
      },
      3801: (e, t, n) => {
        "use strict";
        function r(e) {
          return (
            (r =
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
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var o = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" !== r(e) && "function" != typeof e))
              return { default: e };
            var n = d(t);
            if (n && n.has(e)) return n.get(e);
            var o = {},
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
              if (
                "default" !== i &&
                Object.prototype.hasOwnProperty.call(e, i)
              ) {
                var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                l && (l.get || l.set)
                  ? Object.defineProperty(o, i, l)
                  : (o[i] = e[i]);
              }
            (o.default = e), n && n.set(e, o);
            return o;
          })(n(9231)),
          a = f(n(9519)),
          i = f(n(4151)),
          l = n(7393),
          u = n(6571),
          c = n(3175),
          s = f(n(6590));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function d(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (d = function (e) {
            return e ? n : t;
          })(e);
        }
        function p(e, t) {
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
              if (null == n) return;
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
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return m(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return m(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function m(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function g(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function h(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function v(e, t) {
          return (
            (v =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            v(e, t)
          );
        }
        function y(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = w(e);
            if (t) {
              var o = w(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return b(this, n);
          };
        }
        function b(e, t) {
          if (t && ("object" === r(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return _(e);
        }
        function _(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return e;
        }
        function w(e) {
          return (
            (w = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            w(e)
          );
        }
        function E(e, t, n) {
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
        var x = { start: "touchstart", move: "touchmove", stop: "touchend" },
          O = { start: "mousedown", move: "mousemove", stop: "mouseup" },
          S = O,
          k = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && v(e, t);
            })(c, e);
            var t,
              n,
              r,
              a = y(c);
            function c() {
              var e;
              g(this, c);
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return (
                E(_((e = a.call.apply(a, [this].concat(n)))), "state", {
                  dragging: !1,
                  lastX: NaN,
                  lastY: NaN,
                  touchIdentifier: null,
                }),
                E(_(e), "mounted", !1),
                E(_(e), "handleDragStart", function (t) {
                  if (
                    (e.props.onMouseDown(t),
                    !e.props.allowAnyClick &&
                      "number" == typeof t.button &&
                      0 !== t.button)
                  )
                    return !1;
                  var n = e.findDOMNode();
                  if (!n || !n.ownerDocument || !n.ownerDocument.body)
                    throw new Error(
                      "<DraggableCore> not mounted on DragStart!",
                    );
                  var r = n.ownerDocument;
                  if (
                    !(
                      e.props.disabled ||
                      !(t.target instanceof r.defaultView.Node) ||
                      (e.props.handle &&
                        !(0, l.matchesSelectorAndParentsTo)(
                          t.target,
                          e.props.handle,
                          n,
                        )) ||
                      (e.props.cancel &&
                        (0, l.matchesSelectorAndParentsTo)(
                          t.target,
                          e.props.cancel,
                          n,
                        ))
                    )
                  ) {
                    "touchstart" === t.type && t.preventDefault();
                    var o = (0, l.getTouchIdentifier)(t);
                    e.setState({ touchIdentifier: o });
                    var a = (0, u.getControlPosition)(t, o, _(e));
                    if (null != a) {
                      var i = a.x,
                        c = a.y,
                        f = (0, u.createCoreData)(_(e), i, c);
                      (0, s.default)("DraggableCore: handleDragStart: %j", f),
                        (0, s.default)("calling", e.props.onStart),
                        !1 !== e.props.onStart(t, f) &&
                          !1 !== e.mounted &&
                          (e.props.enableUserSelectHack &&
                            (0, l.addUserSelectStyles)(r),
                          e.setState({ dragging: !0, lastX: i, lastY: c }),
                          (0, l.addEvent)(r, S.move, e.handleDrag),
                          (0, l.addEvent)(r, S.stop, e.handleDragStop));
                    }
                  }
                }),
                E(_(e), "handleDrag", function (t) {
                  var n = (0, u.getControlPosition)(
                    t,
                    e.state.touchIdentifier,
                    _(e),
                  );
                  if (null != n) {
                    var r = n.x,
                      o = n.y;
                    if (Array.isArray(e.props.grid)) {
                      var a = r - e.state.lastX,
                        i = o - e.state.lastY,
                        l = p((0, u.snapToGrid)(e.props.grid, a, i), 2);
                      if (((a = l[0]), (i = l[1]), !a && !i)) return;
                      (r = e.state.lastX + a), (o = e.state.lastY + i);
                    }
                    var c = (0, u.createCoreData)(_(e), r, o);
                    if (
                      ((0, s.default)("DraggableCore: handleDrag: %j", c),
                      !1 !== e.props.onDrag(t, c) && !1 !== e.mounted)
                    )
                      e.setState({ lastX: r, lastY: o });
                    else
                      try {
                        e.handleDragStop(new MouseEvent("mouseup"));
                      } catch (t) {
                        var f = document.createEvent("MouseEvents");
                        f.initMouseEvent(
                          "mouseup",
                          !0,
                          !0,
                          window,
                          0,
                          0,
                          0,
                          0,
                          0,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null,
                        ),
                          e.handleDragStop(f);
                      }
                  }
                }),
                E(_(e), "handleDragStop", function (t) {
                  if (e.state.dragging) {
                    var n = (0, u.getControlPosition)(
                      t,
                      e.state.touchIdentifier,
                      _(e),
                    );
                    if (null != n) {
                      var r = n.x,
                        o = n.y;
                      if (Array.isArray(e.props.grid)) {
                        var a = r - e.state.lastX || 0,
                          i = o - e.state.lastY || 0,
                          c = p((0, u.snapToGrid)(e.props.grid, a, i), 2);
                        (a = c[0]),
                          (i = c[1]),
                          (r = e.state.lastX + a),
                          (o = e.state.lastY + i);
                      }
                      var f = (0, u.createCoreData)(_(e), r, o);
                      if (!1 === e.props.onStop(t, f) || !1 === e.mounted)
                        return !1;
                      var d = e.findDOMNode();
                      d &&
                        e.props.enableUserSelectHack &&
                        (0, l.removeUserSelectStyles)(d.ownerDocument),
                        (0, s.default)("DraggableCore: handleDragStop: %j", f),
                        e.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                        d &&
                          ((0, s.default)("DraggableCore: Removing handlers"),
                          (0, l.removeEvent)(
                            d.ownerDocument,
                            S.move,
                            e.handleDrag,
                          ),
                          (0, l.removeEvent)(
                            d.ownerDocument,
                            S.stop,
                            e.handleDragStop,
                          ));
                    }
                  }
                }),
                E(_(e), "onMouseDown", function (t) {
                  return (S = O), e.handleDragStart(t);
                }),
                E(_(e), "onMouseUp", function (t) {
                  return (S = O), e.handleDragStop(t);
                }),
                E(_(e), "onTouchStart", function (t) {
                  return (S = x), e.handleDragStart(t);
                }),
                E(_(e), "onTouchEnd", function (t) {
                  return (S = x), e.handleDragStop(t);
                }),
                e
              );
            }
            return (
              (t = c),
              (n = [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.mounted = !0;
                    var e = this.findDOMNode();
                    e &&
                      (0, l.addEvent)(e, x.start, this.onTouchStart, {
                        passive: !1,
                      });
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.mounted = !1;
                    var e = this.findDOMNode();
                    if (e) {
                      var t = e.ownerDocument;
                      (0, l.removeEvent)(t, O.move, this.handleDrag),
                        (0, l.removeEvent)(t, x.move, this.handleDrag),
                        (0, l.removeEvent)(t, O.stop, this.handleDragStop),
                        (0, l.removeEvent)(t, x.stop, this.handleDragStop),
                        (0, l.removeEvent)(e, x.start, this.onTouchStart, {
                          passive: !1,
                        }),
                        this.props.enableUserSelectHack &&
                          (0, l.removeUserSelectStyles)(t);
                    }
                  },
                },
                {
                  key: "findDOMNode",
                  value: function () {
                    var e, t, n;
                    return null !== (e = this.props) &&
                      void 0 !== e &&
                      e.nodeRef
                      ? null === (t = this.props) ||
                        void 0 === t ||
                        null === (n = t.nodeRef) ||
                        void 0 === n
                        ? void 0
                        : n.current
                      : i.default.findDOMNode(this);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return o.cloneElement(
                      o.Children.only(this.props.children),
                      {
                        onMouseDown: this.onMouseDown,
                        onMouseUp: this.onMouseUp,
                        onTouchEnd: this.onTouchEnd,
                      },
                    );
                  },
                },
              ]) && h(t.prototype, n),
              r && h(t, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              c
            );
          })(o.Component);
        (t.default = k),
          E(k, "displayName", "DraggableCore"),
          E(k, "propTypes", {
            allowAnyClick: a.default.bool,
            disabled: a.default.bool,
            enableUserSelectHack: a.default.bool,
            offsetParent: function (e, t) {
              if (e[t] && 1 !== e[t].nodeType)
                throw new Error("Draggable's offsetParent must be a DOM Node.");
            },
            grid: a.default.arrayOf(a.default.number),
            handle: a.default.string,
            cancel: a.default.string,
            nodeRef: a.default.object,
            onStart: a.default.func,
            onDrag: a.default.func,
            onStop: a.default.func,
            onMouseDown: a.default.func,
            scale: a.default.number,
            className: c.dontSetMe,
            style: c.dontSetMe,
            transform: c.dontSetMe,
          }),
          E(k, "defaultProps", {
            allowAnyClick: !1,
            disabled: !1,
            enableUserSelectHack: !0,
            onStart: function () {},
            onDrag: function () {},
            onStop: function () {},
            onMouseDown: function () {},
            scale: 1,
          });
      },
      3951: (e, t, n) => {
        "use strict";
        var r = n(6467),
          o = r.default,
          a = r.DraggableCore;
        (e.exports = o), (e.exports.default = o), (e.exports.DraggableCore = a);
      },
      7393: (e, t, n) => {
        "use strict";
        function r(e) {
          return (
            (r =
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
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.addClassName = p),
          (t.addEvent = function (e, t, n, r) {
            if (!e) return;
            var o = u({ capture: !0 }, r);
            e.addEventListener
              ? e.addEventListener(t, n, o)
              : e.attachEvent
                ? e.attachEvent("on" + t, n)
                : (e["on" + t] = n);
          }),
          (t.addUserSelectStyles = function (e) {
            if (!e) return;
            var t = e.getElementById("react-draggable-style-el");
            t ||
              (((t = e.createElement("style")).type = "text/css"),
              (t.id = "react-draggable-style-el"),
              (t.innerHTML =
                ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n"),
              (t.innerHTML +=
                ".react-draggable-transparent-selection *::selection {all: inherit;}\n"),
              e.getElementsByTagName("head")[0].appendChild(t));
            e.body && p(e.body, "react-draggable-transparent-selection");
          }),
          (t.createCSSTransform = function (e, t) {
            var n = d(e, t, "px");
            return c({}, (0, a.browserPrefixToKey)("transform", a.default), n);
          }),
          (t.createSVGTransform = function (e, t) {
            return d(e, t, "");
          }),
          (t.getTouch = function (e, t) {
            return (
              (e.targetTouches &&
                (0, o.findInArray)(e.targetTouches, function (e) {
                  return t === e.identifier;
                })) ||
              (e.changedTouches &&
                (0, o.findInArray)(e.changedTouches, function (e) {
                  return t === e.identifier;
                }))
            );
          }),
          (t.getTouchIdentifier = function (e) {
            if (e.targetTouches && e.targetTouches[0])
              return e.targetTouches[0].identifier;
            if (e.changedTouches && e.changedTouches[0])
              return e.changedTouches[0].identifier;
          }),
          (t.getTranslation = d),
          (t.innerHeight = function (e) {
            var t = e.clientHeight,
              n = e.ownerDocument.defaultView.getComputedStyle(e);
            return (
              (t -= (0, o.int)(n.paddingTop)),
              (t -= (0, o.int)(n.paddingBottom))
            );
          }),
          (t.innerWidth = function (e) {
            var t = e.clientWidth,
              n = e.ownerDocument.defaultView.getComputedStyle(e);
            return (
              (t -= (0, o.int)(n.paddingLeft)),
              (t -= (0, o.int)(n.paddingRight))
            );
          }),
          (t.matchesSelector = f),
          (t.matchesSelectorAndParentsTo = function (e, t, n) {
            var r = e;
            do {
              if (f(r, t)) return !0;
              if (r === n) return !1;
              r = r.parentNode;
            } while (r);
            return !1;
          }),
          (t.offsetXYFromParent = function (e, t, n) {
            var r =
                t === t.ownerDocument.body
                  ? { left: 0, top: 0 }
                  : t.getBoundingClientRect(),
              o = (e.clientX + t.scrollLeft - r.left) / n,
              a = (e.clientY + t.scrollTop - r.top) / n;
            return { x: o, y: a };
          }),
          (t.outerHeight = function (e) {
            var t = e.clientHeight,
              n = e.ownerDocument.defaultView.getComputedStyle(e);
            return (
              (t += (0, o.int)(n.borderTopWidth)),
              (t += (0, o.int)(n.borderBottomWidth))
            );
          }),
          (t.outerWidth = function (e) {
            var t = e.clientWidth,
              n = e.ownerDocument.defaultView.getComputedStyle(e);
            return (
              (t += (0, o.int)(n.borderLeftWidth)),
              (t += (0, o.int)(n.borderRightWidth))
            );
          }),
          (t.removeClassName = m),
          (t.removeEvent = function (e, t, n, r) {
            if (!e) return;
            var o = u({ capture: !0 }, r);
            e.removeEventListener
              ? e.removeEventListener(t, n, o)
              : e.detachEvent
                ? e.detachEvent("on" + t, n)
                : (e["on" + t] = null);
          }),
          (t.removeUserSelectStyles = function (e) {
            if (!e) return;
            try {
              if (
                (e.body && m(e.body, "react-draggable-transparent-selection"),
                e.selection)
              )
                e.selection.empty();
              else {
                var t = (e.defaultView || window).getSelection();
                t && "Caret" !== t.type && t.removeAllRanges();
              }
            } catch (e) {}
          });
        var o = n(3175),
          a = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" !== r(e) && "function" != typeof e))
              return { default: e };
            var n = i(t);
            if (n && n.has(e)) return n.get(e);
            var o = {},
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var l in e)
              if (
                "default" !== l &&
                Object.prototype.hasOwnProperty.call(e, l)
              ) {
                var u = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                u && (u.get || u.set)
                  ? Object.defineProperty(o, l, u)
                  : (o[l] = e[l]);
              }
            (o.default = e), n && n.set(e, o);
            return o;
          })(n(1365));
        function i(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (i = function (e) {
            return e ? n : t;
          })(e);
        }
        function l(e, t) {
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
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? l(Object(n), !0).forEach(function (t) {
                  c(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : l(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function c(e, t, n) {
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
        var s = "";
        function f(e, t) {
          return (
            s ||
              (s = (0, o.findInArray)(
                [
                  "matches",
                  "webkitMatchesSelector",
                  "mozMatchesSelector",
                  "msMatchesSelector",
                  "oMatchesSelector",
                ],
                function (t) {
                  return (0, o.isFunction)(e[t]);
                },
              )),
            !!(0, o.isFunction)(e[s]) && e[s](t)
          );
        }
        function d(e, t, n) {
          var r = e.x,
            o = e.y,
            a = "translate(".concat(r).concat(n, ",").concat(o).concat(n, ")");
          if (t) {
            var i = "".concat("string" == typeof t.x ? t.x : t.x + n),
              l = "".concat("string" == typeof t.y ? t.y : t.y + n);
            a = "translate(".concat(i, ", ").concat(l, ")") + a;
          }
          return a;
        }
        function p(e, t) {
          e.classList
            ? e.classList.add(t)
            : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) ||
              (e.className += " ".concat(t));
        }
        function m(e, t) {
          e.classList
            ? e.classList.remove(t)
            : (e.className = e.className.replace(
                new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"),
                "",
              ));
        }
      },
      1365: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.browserPrefixToKey = o),
          (t.browserPrefixToStyle = function (e, t) {
            return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
          }),
          (t.default = void 0),
          (t.getPrefix = r);
        var n = ["Moz", "Webkit", "O", "ms"];
        function r() {
          var e,
            t,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "transform";
          if ("undefined" == typeof window) return "";
          var a =
            null === (e = window.document) ||
            void 0 === e ||
            null === (t = e.documentElement) ||
            void 0 === t
              ? void 0
              : t.style;
          if (!a) return "";
          if (r in a) return "";
          for (var i = 0; i < n.length; i++) if (o(r, n[i]) in a) return n[i];
          return "";
        }
        function o(e, t) {
          return t
            ? "".concat(t).concat(
                (function (e) {
                  for (var t = "", n = !0, r = 0; r < e.length; r++)
                    n
                      ? ((t += e[r].toUpperCase()), (n = !1))
                      : "-" === e[r]
                        ? (n = !0)
                        : (t += e[r]);
                  return t;
                })(e),
              )
            : e;
        }
        var a = r();
        t.default = a;
      },
      6590: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            0;
          });
      },
      6571: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.canDragX = function (e) {
            return "both" === e.props.axis || "x" === e.props.axis;
          }),
          (t.canDragY = function (e) {
            return "both" === e.props.axis || "y" === e.props.axis;
          }),
          (t.createCoreData = function (e, t, n) {
            var o = e.state,
              i = !(0, r.isNum)(o.lastX),
              l = a(e);
            return i
              ? {
                  node: l,
                  deltaX: 0,
                  deltaY: 0,
                  lastX: t,
                  lastY: n,
                  x: t,
                  y: n,
                }
              : {
                  node: l,
                  deltaX: t - o.lastX,
                  deltaY: n - o.lastY,
                  lastX: o.lastX,
                  lastY: o.lastY,
                  x: t,
                  y: n,
                };
          }),
          (t.createDraggableData = function (e, t) {
            var n = e.props.scale;
            return {
              node: t.node,
              x: e.state.x + t.deltaX / n,
              y: e.state.y + t.deltaY / n,
              deltaX: t.deltaX / n,
              deltaY: t.deltaY / n,
              lastX: e.state.x,
              lastY: e.state.y,
            };
          }),
          (t.getBoundPosition = function (e, t, n) {
            if (!e.props.bounds) return [t, n];
            var i = e.props.bounds;
            i =
              "string" == typeof i
                ? i
                : (function (e) {
                    return {
                      left: e.left,
                      top: e.top,
                      right: e.right,
                      bottom: e.bottom,
                    };
                  })(i);
            var l = a(e);
            if ("string" == typeof i) {
              var u,
                c = l.ownerDocument,
                s = c.defaultView;
              if (
                !(
                  (u =
                    "parent" === i
                      ? l.parentNode
                      : c.querySelector(i)) instanceof s.HTMLElement
                )
              )
                throw new Error(
                  'Bounds selector "' + i + '" could not find an element.',
                );
              var f = u,
                d = s.getComputedStyle(l),
                p = s.getComputedStyle(f);
              i = {
                left:
                  -l.offsetLeft +
                  (0, r.int)(p.paddingLeft) +
                  (0, r.int)(d.marginLeft),
                top:
                  -l.offsetTop +
                  (0, r.int)(p.paddingTop) +
                  (0, r.int)(d.marginTop),
                right:
                  (0, o.innerWidth)(f) -
                  (0, o.outerWidth)(l) -
                  l.offsetLeft +
                  (0, r.int)(p.paddingRight) -
                  (0, r.int)(d.marginRight),
                bottom:
                  (0, o.innerHeight)(f) -
                  (0, o.outerHeight)(l) -
                  l.offsetTop +
                  (0, r.int)(p.paddingBottom) -
                  (0, r.int)(d.marginBottom),
              };
            }
            (0, r.isNum)(i.right) && (t = Math.min(t, i.right));
            (0, r.isNum)(i.bottom) && (n = Math.min(n, i.bottom));
            (0, r.isNum)(i.left) && (t = Math.max(t, i.left));
            (0, r.isNum)(i.top) && (n = Math.max(n, i.top));
            return [t, n];
          }),
          (t.getControlPosition = function (e, t, n) {
            var r = "number" == typeof t ? (0, o.getTouch)(e, t) : null;
            if ("number" == typeof t && !r) return null;
            var i = a(n),
              l =
                n.props.offsetParent || i.offsetParent || i.ownerDocument.body;
            return (0, o.offsetXYFromParent)(r || e, l, n.props.scale);
          }),
          (t.snapToGrid = function (e, t, n) {
            var r = Math.round(t / e[0]) * e[0],
              o = Math.round(n / e[1]) * e[1];
            return [r, o];
          });
        var r = n(3175),
          o = n(7393);
        function a(e) {
          var t = e.findDOMNode();
          if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
          return t;
        }
      },
      3175: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.dontSetMe = function (e, t, n) {
            if (e[t])
              return new Error(
                "Invalid prop "
                  .concat(t, " passed to ")
                  .concat(n, " - do not set this, set it on the child."),
              );
          }),
          (t.findInArray = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              if (t.apply(t, [e[n], n, e])) return e[n];
          }),
          (t.int = function (e) {
            return parseInt(e, 10);
          }),
          (t.isFunction = function (e) {
            return (
              "function" == typeof e ||
              "[object Function]" === Object.prototype.toString.call(e)
            );
          }),
          (t.isNum = function (e) {
            return "number" == typeof e && !isNaN(e);
          });
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
            var l, u, c, s;
            if (Array.isArray(e)) {
              if ((l = e.length) != i.length) return !1;
              for (u = l; 0 != u--; ) if (!a(e[u], i[u])) return !1;
              return !0;
            }
            if (n && e instanceof Map && i instanceof Map) {
              if (e.size !== i.size) return !1;
              for (s = e.entries(); !(u = s.next()).done; )
                if (!i.has(u.value[0])) return !1;
              for (s = e.entries(); !(u = s.next()).done; )
                if (!a(u.value[1], i.get(u.value[0]))) return !1;
              return !0;
            }
            if (r && e instanceof Set && i instanceof Set) {
              if (e.size !== i.size) return !1;
              for (s = e.entries(); !(u = s.next()).done; )
                if (!i.has(u.value[0])) return !1;
              return !0;
            }
            if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
              if ((l = e.length) != i.length) return !1;
              for (u = l; 0 != u--; ) if (e[u] !== i[u]) return !1;
              return !0;
            }
            if (e.constructor === RegExp)
              return e.source === i.source && e.flags === i.flags;
            if (e.valueOf !== Object.prototype.valueOf)
              return e.valueOf() === i.valueOf();
            if (e.toString !== Object.prototype.toString)
              return e.toString() === i.toString();
            if ((l = (c = Object.keys(e)).length) !== Object.keys(i).length)
              return !1;
            for (u = l; 0 != u--; )
              if (!Object.prototype.hasOwnProperty.call(i, c[u])) return !1;
            if (t && e instanceof Element) return !1;
            for (u = l; 0 != u--; )
              if (
                (("_owner" !== c[u] && "__v" !== c[u] && "__o" !== c[u]) ||
                  !e.$$typeof) &&
                !a(e[c[u]], i[c[u]])
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
          u = n ? Symbol.for("react.provider") : 60109,
          c = n ? Symbol.for("react.context") : 60110,
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
                      case c:
                      case d:
                      case h:
                      case g:
                      case u:
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
        function E(e) {
          return w(e) === f;
        }
        (t.AsyncMode = s),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = c),
          (t.ContextProvider = u),
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
            return E(e) || w(e) === s;
          }),
          (t.isConcurrentMode = E),
          (t.isContextConsumer = function (e) {
            return w(e) === c;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === u;
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
                  e.$$typeof === u ||
                  e.$$typeof === c ||
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
          u = Symbol.for("react.provider"),
          c = Symbol.for("react.context"),
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
                      case c:
                      case f:
                      case g:
                      case m:
                      case u:
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
          u = 60112;
        t.Suspense = 60113;
        var c = 60115,
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
            (u = f("react.forward_ref")),
            (t.Suspense = f("react.suspense")),
            (c = f("react.memo")),
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
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, n) {
          var r,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              w.call(t, r) && !E.hasOwnProperty(r) && (a[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) a.children = n;
          else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            a.children = c;
          }
          if (e && e.defaultProps)
            for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
          return {
            $$typeof: o,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: _.current,
          };
        }
        function O(e) {
          return "object" == typeof e && null !== e && e.$$typeof === o;
        }
        var S = /\/+/g;
        function k(e, t) {
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
        function j(e, t, n, r, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case a:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === r ? "." + k(u, 0) : r),
              Array.isArray(i)
                ? ((n = ""),
                  null != e && (n = e.replace(S, "$&/") + "/"),
                  j(i, t, n, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (O(i) &&
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
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(S, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var c = 0; c < e.length; c++) {
              var s = r + k((l = e[c]), c);
              u += j(l, t, n, s, i);
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
            for (e = s.call(e), c = 0; !(l = e.next()).done; )
              u += j((l = l.value), t, n, (s = r + k(l, c++)), i);
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
          return u;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            j(e, r, "", "", function (e) {
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
        var T = { current: null };
        function N() {
          var e = T.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var L = {
          ReactCurrentDispatcher: T,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: _,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
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
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!O(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = h),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, n) {
            if (null == e) throw Error(p(267, e));
            var a = r({}, e.props),
              i = e.key,
              l = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (u = _.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (s in t)
                w.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = n;
            else if (1 < s) {
              c = Array(s);
              for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
              a.children = c;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: i,
              ref: l,
              props: a,
              _owner: u,
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
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = O),
          (t.lazy = function (e) {
            return {
              $$typeof: s,
              _payload: { _status: -1, _result: e },
              _init: C,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return N().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return N().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return N().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return N().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return N().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return N().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return N().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return N().useRef(e);
          }),
          (t.useState = function (e) {
            return N().useState(e);
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
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        if (
          "undefined" == typeof window ||
          "function" != typeof MessageChannel
        ) {
          var c = null,
            s = null,
            f = function () {
              if (null !== c)
                try {
                  var e = t.unstable_now();
                  c(!0, e), (c = null);
                } catch (e) {
                  throw (setTimeout(f, 0), e);
                }
            };
          (n = function (e) {
            null !== c ? setTimeout(n, 0, e) : ((c = e), setTimeout(f, 0));
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
            if (!(void 0 !== o && 0 < O(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function E(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function x(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, o = e.length; r < o; ) {
                var a = 2 * (r + 1) - 1,
                  i = e[a],
                  l = a + 1,
                  u = e[l];
                if (void 0 !== i && 0 > O(i, n))
                  void 0 !== u && 0 > O(u, i)
                    ? ((e[r] = u), (e[l] = n), (r = l))
                    : ((e[r] = i), (e[a] = n), (r = a));
                else {
                  if (!(void 0 !== u && 0 > O(u, n))) break e;
                  (e[r] = u), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function O(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var S = [],
          k = [],
          j = 1,
          P = null,
          C = 3,
          T = !1,
          N = !1,
          L = !1;
        function A(e) {
          for (var t = E(k); null !== t; ) {
            if (null === t.callback) x(k);
            else {
              if (!(t.startTime <= e)) break;
              x(k), (t.sortIndex = t.expirationTime), w(S, t);
            }
            t = E(k);
          }
        }
        function D(e) {
          if (((L = !1), A(e), !N))
            if (null !== E(S)) (N = !0), n(M);
            else {
              var t = E(k);
              null !== t && r(D, t.startTime - e);
            }
        }
        function M(e, n) {
          (N = !1), L && ((L = !1), o()), (T = !0);
          var a = C;
          try {
            for (
              A(n), P = E(S);
              null !== P &&
              (!(P.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var i = P.callback;
              if ("function" == typeof i) {
                (P.callback = null), (C = P.priorityLevel);
                var l = i(P.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof l
                    ? (P.callback = l)
                    : P === E(S) && x(S),
                  A(n);
              } else x(S);
              P = E(S);
            }
            if (null !== P) var u = !0;
            else {
              var c = E(k);
              null !== c && r(D, c.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (P = null), (C = a), (T = !1);
          }
        }
        var R = a;
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
            N || T || ((N = !0), n(M));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return E(S);
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
          (t.unstable_requestPaint = R),
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
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: j++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (u = i + u),
                sortIndex: -1,
              }),
              i > l
                ? ((e.sortIndex = i),
                  w(k, e),
                  null === E(S) &&
                    e === E(k) &&
                    (L ? o() : (L = !0), r(D, i - l)))
                : ((e.sortIndex = u), w(S, e), N || T || ((N = !0), n(M))),
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
      3704: (e, t, n) => {
        "use strict";
        var r = n(9231);
        var o =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          a = r.useState,
          i = r.useEffect,
          l = r.useLayoutEffect,
          u = r.useDebugValue;
        function c(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !o(e, n);
          } catch (e) {
            return !0;
          }
        }
        var s =
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
            ? function (e, t) {
                return t();
              }
            : function (e, t) {
                var n = t(),
                  r = a({ inst: { value: n, getSnapshot: t } }),
                  o = r[0].inst,
                  s = r[1];
                return (
                  l(
                    function () {
                      (o.value = n),
                        (o.getSnapshot = t),
                        c(o) && s({ inst: o });
                    },
                    [e, n, t],
                  ),
                  i(
                    function () {
                      return (
                        c(o) && s({ inst: o }),
                        e(function () {
                          c(o) && s({ inst: o });
                        })
                      );
                    },
                    [e],
                  ),
                  u(n),
                  n
                );
              };
        t.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : s;
      },
      3542: (e, t, n) => {
        "use strict";
        var r = n(9231),
          o = n(4001);
        var a =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          i = o.useSyncExternalStore,
          l = r.useRef,
          u = r.useEffect,
          c = r.useMemo,
          s = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
          var f = l(null);
          if (null === f.current) {
            var d = { hasValue: !1, value: null };
            f.current = d;
          } else d = f.current;
          f = c(
            function () {
              function e(e) {
                if (!u) {
                  if (
                    ((u = !0), (i = e), (e = r(e)), void 0 !== o && d.hasValue)
                  ) {
                    var t = d.value;
                    if (o(t, e)) return (l = t);
                  }
                  return (l = e);
                }
                if (((t = l), a(i, e))) return t;
                var n = r(e);
                return void 0 !== o && o(t, n) ? t : ((i = e), (l = n));
              }
              var i,
                l,
                u = !1,
                c = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === c
                  ? void 0
                  : function () {
                      return e(c());
                    },
              ];
            },
            [t, n, r, o],
          );
          var p = i(e, f[0], f[1]);
          return (
            u(
              function () {
                (d.hasValue = !0), (d.value = p);
              },
              [p],
            ),
            s(p),
            p
          );
        };
      },
      4001: (e, t, n) => {
        "use strict";
        e.exports = n(3704);
      },
      9650: (e, t, n) => {
        "use strict";
        e.exports = n(3542);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.loaded = !0), a.exports;
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
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      "use strict";
      var e = n(9231),
        t = n(4151),
        r = n(4001),
        o = n(9650);
      let a = function (e) {
        e();
      };
      const i = () => a,
        l = (0, e.createContext)(null);
      let u = null;
      n(6095);
      var c = n(2037);
      const s = { notify() {}, get: () => [] };
      function f(e, t) {
        let n,
          r = s;
        function o() {
          l.onStateChange && l.onStateChange();
        }
        function a() {
          n ||
            ((n = t ? t.addNestedSub(o) : e.subscribe(o)),
            (r = (function () {
              const e = i();
              let t = null,
                n = null;
              return {
                clear() {
                  (t = null), (n = null);
                },
                notify() {
                  e(() => {
                    let e = t;
                    for (; e; ) e.callback(), (e = e.next);
                  });
                },
                get() {
                  let e = [],
                    n = t;
                  for (; n; ) e.push(n), (n = n.next);
                  return e;
                },
                subscribe(e) {
                  let r = !0,
                    o = (n = { callback: e, next: null, prev: n });
                  return (
                    o.prev ? (o.prev.next = o) : (t = o),
                    function () {
                      r &&
                        null !== t &&
                        ((r = !1),
                        o.next ? (o.next.prev = o.prev) : (n = o.prev),
                        o.prev ? (o.prev.next = o.next) : (t = o.next));
                    }
                  );
                },
              };
            })()));
        }
        const l = {
          addNestedSub: function (e) {
            return a(), r.subscribe(e);
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: o,
          isSubscribed: function () {
            return Boolean(n);
          },
          trySubscribe: a,
          tryUnsubscribe: function () {
            n && (n(), (n = void 0), r.clear(), (r = s));
          },
          getListeners: () => r,
        };
        return l;
      }
      const d = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      )
        ? e.useLayoutEffect
        : e.useEffect;
      let p = null;
      const m = function ({
        store: t,
        context: n,
        children: r,
        serverState: o,
      }) {
        const a = (0, e.useMemo)(() => {
            const e = f(t);
            return {
              store: t,
              subscription: e,
              getServerState: o ? () => o : void 0,
            };
          }, [t, o]),
          i = (0, e.useMemo)(() => t.getState(), [t]);
        d(() => {
          const { subscription: e } = a;
          return (
            (e.onStateChange = e.notifyNestedSubs),
            e.trySubscribe(),
            i !== t.getState() && e.notifyNestedSubs(),
            () => {
              e.tryUnsubscribe(), (e.onStateChange = void 0);
            }
          );
        }, [a, i]);
        const u = n || l;
        return e.createElement(u.Provider, { value: a }, r);
      };
      var g;
      ((e) => {
        u = e;
      })(o.useSyncExternalStoreWithSelector),
        ((e) => {
          p = e;
        })(r.useSyncExternalStore),
        (g = t.unstable_batchedUpdates),
        (a = g);
      const h = "transmart-crx-app-container",
        v = "transmart-crx-shadow-root",
        y = "auto_translation_block",
        b = "text_analysis",
        _ = "翻译失败，请重新尝试",
        w = "draggable-header",
        E = "__transmart",
        x = "transmartTrxPopupContainer",
        O = "SELECTION_TEXT",
        S = "SELECTION_POSITION",
        k = "SELECTION_CLOSE",
        j = (e) =>
          new Promise((t, n) => {
            try {
              e &&
                e.header &&
                window.TRANSMART_CRX_CLIENT_KEY &&
                (e.header.client_key = window.TRANSMART_CRX_CLIENT_KEY),
                chrome.runtime.sendMessage(
                  { message_type: "fetch", ...e },
                  (e) => {
                    if (chrome.runtime.lastError) { n(chrome.runtime.lastError); } else { t(e); }
                  }
                );
            } catch (e) {
              n(e);
            }
          }),
        P = "lang_list",
        C = [
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
        T = (e) => e instanceof HTMLOptionElement && "OPTION" === e.nodeName,
        N = (e) => T(e) && X(e.__TRANSMART_OLD_OPTION_CHILD_LIST),
        L = (e) => {
          const t = ee("option").reduce((e, t) => (N(t) && e.push(t), e), []);
          switch (e) {
            case "source":
              t.forEach((e) =>
                e.replaceChildren(e.__TRANSMART_OLD_OPTION_CHILD_LIST[0]),
              );
              break;
            case "target":
              t.forEach((e) =>
                e.replaceChildren(e.__TRANSMART_OLD_OPTION_CHILD_LIST[1]),
              );
              break;
            case "all":
              t.forEach((e) =>
                e.replaceChildren(...e.__TRANSMART_OLD_OPTION_CHILD_LIST),
              );
          }
        },
        A = (e, t) => {
          if (!(e instanceof HTMLElement)) return !1;
          const n = e.nodeName.toUpperCase(),
            r = [...e.childNodes];
          if (e.innerHTML.includes(E)) return !1;
          const o = ["STRONG", "PRE", "CODE", "A", "B", "EM", "I"];
          if (location.href.includes("pubmed.ncbi.nlm.nih.gov")) {
            const t = [
              "docsum-title",
              "full-view-snippet",
              "docsum-journal-citation",
            ];
            if ([...e.classList].some((e) => t.includes(e)))
              return (e.__ORIGIN_TEXT = e.textContent), !0;
          }
          if (location.href.includes("twitter.com")) {
            const t = ["css-901oao"];
            if ([...e.classList].some((e) => t.includes(e))) return !0;
          }
          if (location.href.includes("instagram.com")) {
            const t = ["x5yr21d"];
            if ([...e.classList].some((e) => t.includes(e))) return !0;
          }
          if (location.href.includes("youtube.com")) {
            if ("H1" === n && "style-scope ytd-watch-metadata" === e.className)
              return !1;
            if (
              "H3" === n &&
              "title-and-badge style-scope ytd-video-renderer" === e.className
            )
              return !1;
          }
          if (location.href.includes("github.com")) {
            var a, i;
            if (
              null !== (a = e.getAttribute("aria-label")) &&
              void 0 !== a &&
              a.includes("Pull requests")
            )
              return (e.__ORIGIN_TEXT = e.textContent), !0;
            if (
              ("H2" === n &&
                e.parentElement.classList.contains("js-repos-container")) ||
              ("LI" === n &&
                null !== (i = e.getAttribute("data-tab-item")) &&
                void 0 !== i &&
                i.includes("org-header-") &&
                e.classList.contains("js-responsive-underlinenav-item")) ||
              ("LI" === n &&
                (e.parentElement.classList.contains(
                  "js-notification-sidebar-filters",
                ) ||
                  e.parentElement.classList.contains(
                    "js-notification-inboxes",
                  ))) ||
              ("H3" === n &&
                e.parentElement.classList.contains("timeline-comment-header"))
            )
              return !1;
            if (
              "P" === n &&
              e.parentNode instanceof HTMLElement &&
              e.parentNode.parentNode instanceof HTMLElement &&
              e.parentNode.parentNode.classList.contains("Box")
            )
              return !1;
          }
          if (location.href.includes("reddit.com")) {
            const t = [
              "_2FCtq-QzlfuN-SwVMUZMM3",
              "_3wiKjmhpIpoTE2r5KCm2o6",
              "t3_11r2tvh",
            ];
            if ([...e.classList].some((e) => t.includes(e))) return !0;
          }
          if (location.href.includes("figma.com")) {
            const t = ["comments--commentMessage--7Fcal"];
            if ("P" === n)
              return (
                (e.__ORIGIN_TEXT = e.textContent.replace(/&nbsp;/g, " ")), !0
              );
            if ([...e.classList].some((e) => t.includes(e))) return !0;
          }
          if (location.href.includes("google.com")) {
            const t = ["fl", "VwiC3b", "AB4Wff"];
            if ([...e.classList].some((e) => t.includes(e)))
              return (e.__ORIGIN_TEXT = e.textContent), !0;
          }
          if (
            location.href.includes("bbcasia.com") &&
            "P" === n &&
            "gel--brevier teaser" === e.className
          )
            return !0;
          if (
            location.href.includes("stackoverflow.com") ||
            location.href.includes("stackexchange.com")
          ) {
            const t = ["comment-copy"];
            if ([...e.classList].some((e) => t.includes(e))) return !0;
          }
          if (location.href.includes("bing.com")) {
            const t = [
              "richrsrailsuggestion_text",
              "b_suggestionText",
              "sa_tm_text",
            ];
            if ([...e.classList].some((e) => t.includes(e)))
              return (e.__ORIGIN_TEXT = e.textContent), !0;
          }
          if (
            location.href.includes("electronforge.io") &&
            e.hasAttribute("data-block-content")
          )
            return !0;
          const l = (e, t = 35) => {
              return (
                e instanceof HTMLElement &&
                (!!e.getAttribute(E) ||
                  ((n = e.textContent),
                  n.replace(/\n/g, "").replace(/ /g, "").replace(/\t/g, ""))
                    .length > t)
              );
              var n;
            },
            u = (e) => {
              if (!(e instanceof HTMLElement)) return !1;
              return !e.innerHTML.match(/<(img|svg)/g);
            },
            c = (e, t = !1) => {
              if (D(e)) return !0;
              if (!(e instanceof HTMLElement)) return !1;
              if (!e.childElementCount) return !0;
              const n = [...e.childNodes],
                r = ["SVG", "#TEXT", "IMG", "PICTURE"],
                o = n.filter((e) => !r.includes(e.nodeName.toUpperCase()));
              let a = o.length <= 1;
              if (t) {
                const e = ["SPAN", "P", "DIV"];
                a =
                  a &&
                  o.every((t) => D(t) || e.includes(t.nodeName.toUpperCase()));
              }
              return a && o.every((e) => c(e, t));
            };
          if ("LI" === n) {
            var s, f;
            if (
              r.some(
                (t) => t instanceof HTMLElement && e.innerText === t.innerText,
              )
            )
              return !1;
            if (
              1 === e.childElementCount &&
              "A" ===
                (null == e ||
                null === (s = e.firstElementChild) ||
                void 0 === s ||
                null === (f = s.nodeName) ||
                void 0 === f
                  ? void 0
                  : f.toUpperCase())
            )
              return e.childNodes.length > 1 || !c(e.firstElementChild, !0);
            if ((null == e || !e.childElementCount) && l(e)) return !0;
            const t = ["UL", "OL"];
            if (r.some((e) => t.includes(e.nodeName.toUpperCase()))) return !1;
            const n = r.some((e) => {
              const t = e.nodeName.toUpperCase();
              return "A" === t && e instanceof HTMLElement
                ? !e.className.includes("btn") && e.className.includes("button")
                : o.includes(t);
            });
            return n && u(e);
          }
          if ("A" === n) {
            const e = ["STRONG", "CODE"],
              t = ["SVG", "H3"];
            if (
              r.some((t) => e.includes(t.nodeName.toUpperCase())) &&
              r.every((e) => !t.includes(e.nodeName.toUpperCase()))
            )
              return !0;
          }
          if ("BUTTON" === n) return !1;
          if (
            "TD" === n &&
            (!location.origin.includes("google.com") ||
              !location.pathname.includes("search")) &&
            r.every((e) => !["DL"].includes(e.nodeName.toUpperCase()))
          )
            return !c(e, !0);
          if ("P" === n) {
            const t = [
              "BUTTON",
              "CODE",
              "PRE",
              "IMG",
              "SVG",
              "A",
              "STRONG",
              "EM",
            ];
            if (1 === e.childNodes.length && e.firstElementChild) {
              const n = e.firstElementChild.nodeName.toUpperCase();
              if (
                "A" === n &&
                (e.className.includes("btn") || e.className.includes("button"))
              )
                return !1;
              if (t.includes(n)) return !1;
            }
            return (
              !!r.some((e) => t.includes(e.nodeName.toUpperCase())) ||
              !c(e) ||
              l(e)
            );
          }
          return (
            !(!["H1", "H2", "H3", "H4"].includes(n) || !c(e, !0)) ||
            (["FIGCAPTION"].includes(n)
              ? u(e)
              : !(e.childElementCount || !l(e)))
          );
        },
        D = (e) =>
          (null == e ? void 0 : e.nodeType) ===
          (null == e ? void 0 : e.TEXT_NODE),
        M = (e) => {
          if (!(e instanceof HTMLElement)) return !1;
          const t =
              window.innerHeight ||
              document.documentElement.clientHeight ||
              document.body.clientHeight,
            n = e.getBoundingClientRect();
          if (n.width <= 0 || n.height <= 0)
            return (
              !!T(e) ||
              (e.childElementCount > 1
                ? [...e.childNodes].some((e) => M(e))
                : M(e.firstElementChild))
            );
          const { top: r } = n;
          return r <= t + 300;
        },
        R = (e) => "none" !== window.getComputedStyle(e).display && M(e),
        I = (e, t) => {
          var n, r;
          null == t ||
            null === (n = t.parentNode) ||
            void 0 === n ||
            null === (r = n.insertBefore) ||
            void 0 === r ||
            r.call(
              n,
              e,
              (null == t ? void 0 : t.nextElementSibling) ||
                (null == t ? void 0 : t.nextSibling),
            );
        },
        z = (e) => !!e.textContent.replace(/\n/, "").trim(),
        F = (e) => {
          if (!(e instanceof HTMLElement)) return !1;
          const { overflow: t, overflowY: n } = window.getComputedStyle(e);
          return ["auto", "scroll"].some((e) => t === e || n === e);
        },
        U = (e) => {
          const t = [];
          let n = 0;
          const r = e.replace(
            /<code[^>]*>(.*?)<\/code>/g,
            (e) => (t.push(e), n++, `#${n}#`),
          );
          return { codes: t, replacedHtml: r };
        },
        H = (e, t) => {
          e.style.setProperty("display", t, "important");
        },
        W = () => {
          const { origin: e, pathname: t } = location;
          return e + t === "https://www.bing.com/";
        },
        $ = [
          "SCRIPT",
          "I",
          "PRE",
          "CODE",
          "STYLE",
          "svg",
          "#comment",
          "IMG",
          "IFRAME",
          "NOSCRIPT",
          "CITE",
          "PICTURE",
        ],
        B = [
          "CodeMirror",
          "js-blob-code-container",
          "monaco-editor",
          "w3-code",
          "no-translate",
          "notranslate",
          "ph-bnr",
          "icon",
          "text-code",
          "api-key-token",
          "diff-table",
        ],
        V = (e) => {
          const t = document.createElement("div");
          return (t.id = e), t;
        },
        X = (e) => Array.isArray(e) && e.length > 0,
        q = () => {
          let e = "";
          if (void 0 !== window.getSelection) {
            const t = window.getSelection();
            if (null != t && t.rangeCount) {
              const n = document.createElement("div");
              for (let e = 0, r = t.rangeCount; e < r; ++e)
                n.appendChild(t.getRangeAt(e).cloneContents());
              e = n.innerHTML;
            }
          }
          return e;
        },
        Y = (e) =>
          e
            ? e
                .replace(/\n\s*/g, " ")
                .replace(/\t\s*/g, "")
                .replace(/&nbsp;/g, " ")
                .trim()
            : "",
        G = (e) => {
          if (N(e.parentNode)) return;
          const t = e.__TRANSMART_PRE_DISPLAY;
          t &&
            "none" === e.style.display &&
            (H(e, t), (e.__TRANSMART_PRE_DISPLAY = null));
        },
        Q = (e) => {
          if (N(e.parentNode)) return;
          const { display: t } = window.getComputedStyle(e);
          e.__TRANSMART_PRE_DISPLAY || (e.__TRANSMART_PRE_DISPLAY = t),
            H(e, "none");
        },
        K = (e) => {
          const t = ee("[__transmart=SOURCE]"),
            n = ee("[__transmart=TARGET]"),
            r = ee("[__transmart=ALL]"),
            o = ee(".transmart-tgt-font"),
            a = () => {
              o.forEach((e) => {
                e.classList.remove("transmart-tgt-font-active");
              });
            };
          switch (e) {
            case "source":
              t.forEach(G), n.forEach(Q), r.forEach(Q), L("source"), a();
              break;
            case "target":
              t.forEach(Q), n.forEach(G), r.forEach(Q), L("target"), a();
              break;
            case "all":
              t.forEach(G),
                n.forEach(G),
                r.forEach(G),
                L("all"),
                o.forEach((e) => {
                  e.classList.add("transmart-tgt-font-active");
                });
          }
        },
        Z = (e, t) => {
          const n = document.createElement("font");
          return (
            (n.textContent = e),
            t &&
              Object.keys(t).forEach((e) => {
                n.setAttribute(e, t[e]);
              }),
            n
          );
        },
        J = (e, t) => {
          const n = [...e.childNodes],
            r = [],
            o = [
              "js-blob-code-container",
              "monaco-editor",
              "w3-code",
              "no-translate",
              "notranslate",
              "ph-bnr",
              "icon",
              "text-code",
              "api-key-token",
              "diff-table",
            ];
          for (; n.length; ) {
            const e = n.shift();
            if (
              !(
                e instanceof HTMLElement &&
                ("no" === e.getAttribute("translate") ||
                  o.some((t) => [...e.classList].includes(t)) ||
                  e.hasAttribute(E))
              )
            ) {
              if (e instanceof HTMLElement) {
                const t = e.nodeName.toUpperCase();
                if ($.includes(t)) continue;
                if (
                  location.href.includes("google.com") &&
                  location.pathname.includes("/search") &&
                  "TEXTAREA" === t
                )
                  continue;
                if (location.href.includes("github.com")) {
                  const n = [
                    "author",
                    "commit-author",
                    "user-mention",
                    "p-nickname",
                    "Truncate-text--expandable",
                    "owner",
                    "repo",
                    "js-diff-table",
                    "vcard-names",
                    "js-notification-sidebar-repositories",
                    "js-calendar-graph-table",
                    "contrib-data",
                    "graphs",
                  ];
                  if (
                    [...e.classList].some((e) => n.includes(e)) ||
                    "name" === e.getAttribute("itemprop") ||
                    "codeRepository" === e.getAttribute("itemprop") ||
                    "name codeRepository" === e.getAttribute("itemprop") ||
                    "programmingLanguage" === e.getAttribute("itemprop") ||
                    "rowheader" === e.getAttribute("role") ||
                    "user" === e.getAttribute("data-hovercard-type") ||
                    "repository" === e.getAttribute("data-hovercard-type") ||
                    "organization" === e.getAttribute("data-hovercard-type") ||
                    "user login and name" === e.getAttribute("aria-label") ||
                    (e.classList.contains("Label--secondary") &&
                      "Public" === e.innerText) ||
                    ("H2" === t &&
                      "true" === e.getAttribute("data-view-component") &&
                      "f4" === e.className) ||
                    ("A" === t &&
                      "menuitemradio" === e.getAttribute("role") &&
                      e.classList.contains("SelectMenu-item") &&
                      "author-filter-field" ===
                        e.parentElement.getAttribute("data-filterable-for")) ||
                    "assigns-filter-field" ===
                      e.parentElement.getAttribute("data-filterable-for") ||
                    ("SPAN" === t &&
                      "flex-auto min-width-0 css-truncate css-truncate-target width-fit" ===
                        e.className) ||
                    ("A" === t &&
                      "Link--primary no-underline flex-self-center" ===
                        e.className)
                  )
                    continue;
                  if (
                    "A" === t &&
                    e.parentNode instanceof HTMLElement &&
                    e.parentNode.classList.contains("Truncate-text")
                  )
                    continue;
                  if (
                    "Link--primary no-underline wb-break-all" === e.className ||
                    "Link--primary text-bold no-underline wb-break-all d-inline-block" ===
                      e.className ||
                    "f4 text-normal no-underline lh-condensed mb-0" ===
                      e.className ||
                    ("H3" === t &&
                      "f3 color-fg-muted text-normal lh-condensed" ===
                        e.className) ||
                    ("SPAN" === t &&
                      "Truncate-text ws-normal" === e.className) ||
                    ("H4" === t &&
                      "f3 color-fg-muted text-normal lh-condensed" ===
                        e.className) ||
                    ("H4" === t &&
                      "f4 text-bold lh-condensed mb-2" === e.className) ||
                    ("H4" === t &&
                      "f4 color-fg-muted text-normal lh-condensed Truncate" ===
                        e.className &&
                      e.hasAttribute("title")) ||
                    ("A" === t && "Truncate-text" === e.className) ||
                    ("SPAN" === t &&
                      "Truncate-text Truncate-text--primary" === e.className) ||
                    ("SPAN" === t &&
                      "text-normal color-fg-muted" === e.className) ||
                    ("H1" === t && "h3 lh-condensed" === e.className) ||
                    ("H1" === t && "h2 lh-condensed" === e.className) ||
                    ("H1" === t &&
                      "h3 lh-condensed mt-3 mb-1" === e.className) ||
                    ("P" === t && "m-0 f6 flex-auto" === e.className)
                  )
                    continue;
                  if (
                    "H3" === t &&
                    e.parentNode instanceof HTMLElement &&
                    e.parentNode.classList.contains("mb-1")
                  )
                    continue;
                }
                if (location.href.includes("pubmed.ncbi.nlm.nih.gov")) {
                  const t = [
                    "docsum-authors",
                    "full-journal-citation",
                    "citation-part",
                    "authors-list-item",
                  ];
                  if ([...e.classList].some((e) => t.includes(e))) continue;
                }
                if (
                  location.href.includes("electronforge.io") &&
                  "codeblock-toolbar" === e.getAttribute("data-rnwi-handle")
                )
                  continue;
                if (
                  location.href.includes("stackoverflow.com") ||
                  location.href.includes("stackexchange.com")
                ) {
                  const t = ["comment-user", "user-details"];
                  if ([...e.classList].some((e) => t.includes(e))) continue;
                }
                if (location.href.includes("facebook.com")) {
                  const t = ["css-901oao"],
                    n = e.nodeName.toUpperCase();
                  if ([...e.classList].some((e) => t.includes(e))) continue;
                  if (
                    "A" === n &&
                    e.className.includes(
                      "x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv xzsf02u x1s688f",
                    )
                  )
                    continue;
                }
                if (location.href.includes("twitter.com")) {
                  const t = [];
                  if ([...e.classList].some((e) => t.includes(e))) continue;
                  if (
                    "css-901oao r-1awozwy r-18jsvk2 r-6koalj r-37j5jr r-a023e6 r-b88u0q r-rjixqe r-bcqeeo r-1udh08x r-3s2u2q r-qvutc0" ===
                    e.className
                  )
                    continue;
                }
                if (location.href.includes("reddit.com")) {
                  const t = [
                    "_3ryJoIoycVkA88fy40qNJc",
                    "oQctV4n0yUb0uiHDdGnmE",
                    "wM6scouPXXsFDSZmZPHRo",
                    "_1AF1qgUDsTX_XHGNtb9eTD",
                    "_19bCWnxeTjqzBElWZfIlJb",
                  ];
                  if ([...e.classList].some((e) => t.includes(e))) continue;
                }
                if (
                  location.href.includes("youtube.com") &&
                  "header-author" === e.id
                )
                  continue;
                if (location.href.includes("figma.com")) {
                  const t = [
                    "comments--authorName--H56TS",
                    "comments--profileHandle--cL2CN",
                    "resource_header_creators--authorLabelContainer--1eVG5",
                    "profile_resources_grid--profileDataName--gywu-",
                    "profile_resources_grid--profileDataHandle--l1LNm",
                  ];
                  if ([...e.classList].some((e) => t.includes(e))) continue;
                }
                if (
                  location.href.includes("openai.com") &&
                  "footerSocialHeading" === e.getAttribute("aria-labelledby")
                )
                  continue;
              }
              if (A(e) && R(e))
                if (e.innerHTML.length > 5e3) n.unshift(...e.childNodes);
                else {
                  var a;
                  const t = document.createElement("font");
                  for (let n = 0; n < e.childNodes.length; n++) {
                    const r = e.childNodes[n];
                    t.appendChild(r.cloneNode(!0)), e.removeChild(r), n--;
                  }
                  e.appendChild(t),
                    null === (a = e.setAttribute) ||
                      void 0 === a ||
                      a.call(e, E, ""),
                    (t.__ORIGIN_TEXT = e.__ORIGIN_TEXT);
                  const { codes: n, replacedHtml: o } = U(
                    Y(t.innerHTML)
                      .replace(
                        /<script\b[^>]*>([\s\S]*?)<\/script>|<style\b[^>]*>([\s\S]*?)<\/style>|<iframe\b[^>]*>([\s\S]*?)<\/iframe>|<!--[\s\S]*?-->/gi,
                        "",
                      )
                      .replace(/<strong\b[^>]*>([\s\S]*?)<\/strong>/g, "$1")
                      .replace(/<em\b[^>]*>([\s\S]*?)<\/em>/g, "$1"),
                  );
                  r.push({
                    node: t,
                    isPara: !0,
                    source: t.__ORIGIN_TEXT ? t.__ORIGIN_TEXT : o,
                    codes: n,
                    textContent: Y(e.textContent),
                  });
                }
              else if (D(e)) {
                if (z(e) && !e.parentElement.hasAttribute(E)) {
                  [...e.parentElement.childNodes].every((e) => !D(e)) &&
                    e.parentElement.setAttribute(E, "");
                  const t = Y(e.textContent);
                  if (W())
                    r.push({ node: e, isText: !0, source: t, textContent: t });
                  else {
                    const n = Z(t, { [E]: "" });
                    e.replaceWith(n),
                      r.push({
                        node: n,
                        isText: !0,
                        source: t,
                        textContent: t,
                      });
                  }
                }
              } else
                !$.includes(e.nodeName) &&
                  (null == e ? void 0 : e.id) !== v &&
                  R(e) &&
                  n.unshift(...e.childNodes);
            }
          }
          return r;
        },
        ee = (e, t = document) => [...t.querySelectorAll(e)],
        te = () =>
          document
            .getElementById(window._TRANSMART_CTX_SHADOW_ROOT)
            .shadowRoot.getElementById(window._TRANSMART_CRX_APP_CONTAINER),
        ne = () => new Date().getTime(),
        re = () => window === window.top,
        oe = (e) => /^-?\d+$/.test(e.trim()),
        ae = (e) => /^(-?[¥$]\d+\.?\d*$)/.test(e.trim()),
        ie = (e) => /^(\d{1,2}:)?\d{1,2}:\d{2}$/.test(e.trim()),
        le = (e) => {
          ["login.dingtalk.com"].every((e) => !window.origin.includes(e)) &&
            window.parent.postMessage(
              { type: "TRANSMART_CRX", payload: e },
              "*",
            );
          [...ee("iframe"), ...ee("frame")].forEach((t) => {
            t.contentWindow.postMessage(
              { type: "TRANSMART_CRX", payload: e },
              "*",
            );
          });
        },
        ue = (e, t) => {
          const n = window.innerWidth,
            r = window.innerHeight;
          let o = e + 10,
            a = t + 15,
            i = e + 30;
          return (
            o + 40 > n && (o = n - 40),
            a + 40 > r && (a = r - 40),
            i + 488 > n && (i = n - 488),
            { iconX: o, iconY: a, panelX: i, panelY: t + 35 }
          );
        },
        ce = (e) => {
          const t = e.trim();
          return (
            !!t &&
            ![
              "-",
              "&",
              "*",
              "!",
              "！",
              ",",
              "，",
              ":",
              "：",
              ",",
              "，",
              "；",
              "；",
              ".",
              "、",
              "@",
              "/",
            ].includes(t) &&
            !!isNaN(Number(t))
          );
        };
      var se = n(3763),
        fe = n.n(se);
      const de = function (t) {
        var n = (0, e.useRef)(t);
        return (n.current = t), n;
      };
      const pe = function (t) {
        var n = de(t);
        (0, e.useEffect)(function () {
          return function () {
            n.current();
          };
        }, []);
      };
      var me = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            a = n.call(e),
            i = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
              i.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = a.return) && n.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        },
        ge = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(me(arguments[t]));
          return e;
        };
      const he = function (t, n) {
        var r,
          o = de(t),
          a =
            null !== (r = null == n ? void 0 : n.wait) && void 0 !== r
              ? r
              : 1e3,
          i = (0, e.useMemo)(function () {
            return fe()(
              function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                return o.current.apply(o, ge(e));
              },
              a,
              n,
            );
          }, []);
        return (
          pe(function () {
            i.cancel();
          }),
          { run: i, cancel: i.cancel, flush: i.flush }
        );
      };
      function ve(e, t) {
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
      function ye(e, t, n) {
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
      var be,
        _e = { exports: {} };
      (be = _e),
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
          be.exports
            ? ((t.default = t), (be.exports = t))
            : (window.classNames = t);
        })();
      var we = _e.exports,
        Ee = (0, e.createContext)({ classPrefix: "t", locale: "zh-CN" });
      function xe() {
        var t = (0, e.useContext)(Ee).classPrefix;
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
      var Oe = ["icon", "id", "className", "size", "style"];
      function Se(e, t) {
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
      function ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Se(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Se(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function je(t, n, r) {
        return (0, e.createElement)(
          t.tag,
          ke(ke({ key: n }, t.attrs), r),
          (t.children || []).map(function (e, r) {
            return je(e, "".concat(n, "-").concat(t.tag, "-").concat(r));
          }),
        );
      }
      var Pe = (0, e.forwardRef)(function (e, t) {
        var n = e.icon,
          r = e.id,
          o = e.className,
          a = e.size,
          i = e.style,
          l = ve(e, Oe),
          u = (function (e) {
            var t = xe().SIZE;
            return void 0 === e
              ? {}
              : e in t
                ? { className: t[e], style: {} }
                : { className: "", style: { fontSize: e } };
          })(a),
          c = u.className,
          s = u.style,
          f = we("t-icon", "t-icon-".concat(r), o, c);
        return je(
          n,
          "".concat(r),
          ke({ ref: t, className: f, style: ke(ke({}, i), s) }, l),
        );
      });
      function Ce(e, t) {
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
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ce(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ce(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Ne = {
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
                d: "M4.98 10.31L7.3 8 5 5.69l.7-.7L8 7.28 10.31 5l.7.7L8.72 8l2.3 2.31-.7.7L8 8.72 5.69 11l-.7-.7z",
                fillOpacity: 0.9,
              },
            },
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M8 1a7 7 0 110 14A7 7 0 018 1zm0 1a6 6 0 100 12A6 6 0 008 2z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        Le = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            Pe,
            Te(Te({}, t), {}, { id: "close-circle", ref: n, icon: Ne }),
          );
        });
      function Ae(e, t) {
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
      function De(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ae(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ae(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      Le.displayName = "CloseCircleIcon";
      var Me = {
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
                d: "M11 8a3 3 0 11-6 0 3 3 0 016 0zm-1 0a2 2 0 10-4 0 2 2 0 004 0z",
                fillOpacity: 0.9,
              },
            },
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M8 1.25l6.06 3.38v6.75L8 14.75l-6.06-3.38V4.63L8 1.25zM2.94 5.21v5.58L8 13.6l5.06-2.82V5.2L8 2.4 2.94 5.21z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        Re = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            Pe,
            De(De({}, t), {}, { id: "setting", ref: n, icon: Me }),
          );
        });
      function Ie(e, t) {
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
      function ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ie(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ie(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      Re.displayName = "SettingIcon";
      var Fe = {
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
                d: "M6.43 9.92l6.23-6.22.92.92-7.15 7.14L1.97 7.3l.92-.92 3.54 3.54z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        Ue = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            Pe,
            ze(ze({}, t), {}, { id: "check", ref: n, icon: Fe }),
          );
        });
      function He(e, t, n) {
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
      function We(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function $e(e, t) {
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
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return We(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? We(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Be(e, t) {
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
      Ue.displayName = "CheckIcon";
      var Ve = n(5443),
        Xe = n.n(Ve);
      function qe() {
        return (
          (qe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          qe.apply(this, arguments)
        );
      }
      function Ye(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      function Ge(e, t) {
        return (
          (Ge = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Ge(e, t)
        );
      }
      function Qe(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          Ge(e, t);
      }
      function Ke(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      const Ze = !1,
        Je = e.createContext(null);
      var et = function (e) {
          return e.scrollTop;
        },
        tt = "unmounted",
        nt = "exited",
        rt = "entering",
        ot = "entered",
        at = "exiting",
        it = (function (n) {
          function r(e, t) {
            var r;
            r = n.call(this, e, t) || this;
            var o,
              a = t && !t.isMounting ? e.enter : e.appear;
            return (
              (r.appearStatus = null),
              e.in
                ? a
                  ? ((o = nt), (r.appearStatus = rt))
                  : (o = ot)
                : (o = e.unmountOnExit || e.mountOnEnter ? tt : nt),
              (r.state = { status: o }),
              (r.nextCallback = null),
              r
            );
          }
          Qe(r, n),
            (r.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === tt ? { status: nt } : null;
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
                  ? n !== rt && n !== ot && (t = rt)
                  : (n !== rt && n !== ot) || (t = at);
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
                if ((this.cancelNextCallback(), n === rt)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var r = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : t.findDOMNode(this);
                    r && et(r);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === nt &&
                  this.setState({ status: tt });
            }),
            (o.performEnter = function (e) {
              var n = this,
                r = this.props.enter,
                o = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [o] : [t.findDOMNode(this), o],
                i = a[0],
                l = a[1],
                u = this.getTimeouts(),
                c = o ? u.appear : u.enter;
              (!e && !r) || Ze
                ? this.safeSetState({ status: ot }, function () {
                    n.props.onEntered(i);
                  })
                : (this.props.onEnter(i, l),
                  this.safeSetState({ status: rt }, function () {
                    n.props.onEntering(i, l),
                      n.onTransitionEnd(c, function () {
                        n.safeSetState({ status: ot }, function () {
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
              n && !Ze
                ? (this.props.onExit(o),
                  this.safeSetState({ status: at }, function () {
                    e.props.onExiting(o),
                      e.onTransitionEnd(r.exit, function () {
                        e.safeSetState({ status: nt }, function () {
                          e.props.onExited(o);
                        });
                      });
                  }))
                : this.safeSetState({ status: nt }, function () {
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
              if (t === tt) return null;
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
                  Ye(n, [
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
                Je.Provider,
                { value: null },
                "function" == typeof r
                  ? r(t, o)
                  : e.cloneElement(e.Children.only(r), o),
              );
            }),
            r
          );
        })(e.Component);
      function lt() {}
      (it.contextType = Je),
        (it.propTypes = {}),
        (it.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: lt,
          onEntering: lt,
          onEntered: lt,
          onExit: lt,
          onExiting: lt,
          onExited: lt,
        }),
        (it.UNMOUNTED = tt),
        (it.EXITED = nt),
        (it.ENTERING = rt),
        (it.ENTERED = ot),
        (it.EXITING = at);
      const ut = it;
      var ct = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.remove(r)
                  : "string" == typeof n.className
                    ? (n.className = Ke(n.className, r))
                    : n.setAttribute(
                        "class",
                        Ke((n.className && n.className.baseVal) || "", r),
                      ))
              );
              var n, r;
            })
          );
        },
        st = (function (t) {
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
          Qe(n, t);
          var r = n.prototype;
          return (
            (r.addClass = function (e, t, n) {
              var r = this.getClassNames(t)[n + "ClassName"],
                o = this.getClassNames("enter").doneClassName;
              "appear" === t && "done" === n && o && (r += " " + o),
                "active" === n && e && et(e),
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
                r && ct(e, r),
                o && ct(e, o),
                a && ct(e, a);
            }),
            (r.render = function () {
              var t = this.props,
                n = (t.classNames, Ye(t, ["classNames"]));
              return e.createElement(
                ut,
                qe({}, n, {
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
      (st.defaultProps = { classNames: "" }), (st.propTypes = {});
      const ft = st;
      function dt(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function pt(e) {
        return e instanceof dt(e).Element || e instanceof Element;
      }
      function mt(e) {
        return e instanceof dt(e).HTMLElement || e instanceof HTMLElement;
      }
      function gt(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof dt(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var ht = Math.max,
        vt = Math.min,
        yt = Math.round;
      function bt(e, t) {
        void 0 === t && (t = !1);
        var n = e.getBoundingClientRect(),
          r = 1,
          o = 1;
        if (mt(e) && t) {
          var a = e.offsetHeight,
            i = e.offsetWidth;
          i > 0 && (r = yt(n.width) / i || 1),
            a > 0 && (o = yt(n.height) / a || 1);
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
      function _t(e) {
        var t = dt(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function wt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function Et(e) {
        return ((pt(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function xt(e) {
        return bt(Et(e)).left + _t(e).scrollLeft;
      }
      function Ot(e) {
        return dt(e).getComputedStyle(e);
      }
      function St(e) {
        var t = Ot(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function kt(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          o,
          a = mt(t),
          i =
            mt(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = yt(t.width) / e.offsetWidth || 1,
                r = yt(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          l = Et(t),
          u = bt(e, i),
          c = { scrollLeft: 0, scrollTop: 0 },
          s = { x: 0, y: 0 };
        return (
          (a || (!a && !n)) &&
            (("body" !== wt(t) || St(l)) &&
              (c =
                (r = t) !== dt(r) && mt(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : _t(r)),
            mt(t)
              ? (((s = bt(t, !0)).x += t.clientLeft), (s.y += t.clientTop))
              : l && (s.x = xt(l))),
          {
            x: u.left + c.scrollLeft - s.x,
            y: u.top + c.scrollTop - s.y,
            width: u.width,
            height: u.height,
          }
        );
      }
      function jt(e) {
        var t = bt(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function Pt(e) {
        return "html" === wt(e)
          ? e
          : e.assignedSlot || e.parentNode || (gt(e) ? e.host : null) || Et(e);
      }
      function Ct(e) {
        return ["html", "body", "#document"].indexOf(wt(e)) >= 0
          ? e.ownerDocument.body
          : mt(e) && St(e)
            ? e
            : Ct(Pt(e));
      }
      function Tt(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = Ct(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          a = dt(r),
          i = o ? [a].concat(a.visualViewport || [], St(r) ? r : []) : r,
          l = t.concat(i);
        return o ? l : l.concat(Tt(Pt(i)));
      }
      function Nt(e) {
        return ["table", "td", "th"].indexOf(wt(e)) >= 0;
      }
      function Lt(e) {
        return mt(e) && "fixed" !== Ot(e).position ? e.offsetParent : null;
      }
      function At(e) {
        for (
          var t = dt(e), n = Lt(e);
          n && Nt(n) && "static" === Ot(n).position;

        )
          n = Lt(n);
        return n &&
          ("html" === wt(n) ||
            ("body" === wt(n) && "static" === Ot(n).position))
          ? t
          : n ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  mt(e) &&
                  "fixed" === Ot(e).position
                )
                  return null;
                var n = Pt(e);
                for (
                  gt(n) && (n = n.host);
                  mt(n) && ["html", "body"].indexOf(wt(n)) < 0;

                ) {
                  var r = Ot(n);
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
      var Dt = "top",
        Mt = "bottom",
        Rt = "right",
        It = "left",
        zt = "auto",
        Ft = [Dt, Mt, Rt, It],
        Ut = "start",
        Ht = "end",
        Wt = "viewport",
        $t = "popper",
        Bt = Ft.reduce(function (e, t) {
          return e.concat([t + "-" + Ut, t + "-" + Ht]);
        }, []),
        Vt = [].concat(Ft, [zt]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Ut, t + "-" + Ht]);
        }, []),
        Xt = [
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
      function qt(e) {
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
      function Yt(e) {
        var t;
        return function () {
          return (
            t ||
              (t = new Promise(function (n) {
                Promise.resolve().then(function () {
                  (t = void 0), n(e());
                });
              })),
            t
          );
        };
      }
      var Gt = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Qt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function Kt(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          a = void 0 === o ? Gt : o;
        return function (e, t, n) {
          void 0 === n && (n = a);
          var o = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Gt, a),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            i = [],
            l = !1,
            u = {
              state: o,
              setOptions: function (n) {
                var l = "function" == typeof n ? n(o.options) : n;
                c(),
                  (o.options = Object.assign({}, a, o.options, l)),
                  (o.scrollParents = {
                    reference: pt(e)
                      ? Tt(e)
                      : e.contextElement
                        ? Tt(e.contextElement)
                        : [],
                    popper: Tt(t),
                  });
                var s = (function (e) {
                  var t = qt(e);
                  return Xt.reduce(function (e, n) {
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
                  })([].concat(r, o.options.modifiers)),
                );
                return (
                  (o.orderedModifiers = s.filter(function (e) {
                    return e.enabled;
                  })),
                  o.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      a = e.effect;
                    if ("function" == typeof a) {
                      var l = a({ state: o, name: t, instance: u, options: r }),
                        c = function () {};
                      i.push(l || c);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!l) {
                  var e = o.elements,
                    t = e.reference,
                    n = e.popper;
                  if (Qt(t, n)) {
                    (o.rects = {
                      reference: kt(t, At(n), "fixed" === o.options.strategy),
                      popper: jt(n),
                    }),
                      (o.reset = !1),
                      (o.placement = o.options.placement),
                      o.orderedModifiers.forEach(function (e) {
                        return (o.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      });
                    for (var r = 0; r < o.orderedModifiers.length; r++)
                      if (!0 !== o.reset) {
                        var a = o.orderedModifiers[r],
                          i = a.fn,
                          c = a.options,
                          s = void 0 === c ? {} : c,
                          f = a.name;
                        "function" == typeof i &&
                          (o =
                            i({ state: o, options: s, name: f, instance: u }) ||
                            o);
                      } else (o.reset = !1), (r = -1);
                  }
                }
              },
              update: Yt(function () {
                return new Promise(function (e) {
                  u.forceUpdate(), e(o);
                });
              }),
              destroy: function () {
                c(), (l = !0);
              },
            };
          if (!Qt(e, t)) return u;
          function c() {
            i.forEach(function (e) {
              return e();
            }),
              (i = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !l && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var Zt = { passive: !0 };
      const Jt = {
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
            u = dt(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            a &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, Zt);
              }),
            l && u.addEventListener("resize", n.update, Zt),
            function () {
              a &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, Zt);
                }),
                l && u.removeEventListener("resize", n.update, Zt);
            }
          );
        },
        data: {},
      };
      function en(e) {
        return e.split("-")[0];
      }
      function tn(e) {
        return e.split("-")[1];
      }
      function nn(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function rn(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          a = o ? en(o) : null,
          i = o ? tn(o) : null,
          l = n.x + n.width / 2 - r.width / 2,
          u = n.y + n.height / 2 - r.height / 2;
        switch (a) {
          case Dt:
            t = { x: l, y: n.y - r.height };
            break;
          case Mt:
            t = { x: l, y: n.y + n.height };
            break;
          case Rt:
            t = { x: n.x + n.width, y: u };
            break;
          case It:
            t = { x: n.x - r.width, y: u };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = a ? nn(a) : null;
        if (null != c) {
          var s = "y" === c ? "height" : "width";
          switch (i) {
            case Ut:
              t[c] = t[c] - (n[s] / 2 - r[s] / 2);
              break;
            case Ht:
              t[c] = t[c] + (n[s] / 2 - r[s] / 2);
          }
        }
        return t;
      }
      var on = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function an(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          a = e.variation,
          i = e.offsets,
          l = e.position,
          u = e.gpuAcceleration,
          c = e.adaptive,
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
          b = It,
          _ = Dt,
          w = window;
        if (c) {
          var E = At(n),
            x = "clientHeight",
            O = "clientWidth";
          if (
            (E === dt(n) &&
              "static" !== Ot((E = Et(n))).position &&
              "absolute" === l &&
              ((x = "scrollHeight"), (O = "scrollWidth")),
            o === Dt || ((o === It || o === Rt) && a === Ht))
          )
            (_ = Mt),
              (g -=
                (f && E === w && w.visualViewport
                  ? w.visualViewport.height
                  : E[x]) - r.height),
              (g *= u ? 1 : -1);
          if (o === It || ((o === Dt || o === Mt) && a === Ht))
            (b = Rt),
              (p -=
                (f && E === w && w.visualViewport
                  ? w.visualViewport.width
                  : E[O]) - r.width),
              (p *= u ? 1 : -1);
        }
        var S,
          k = Object.assign({ position: l }, c && on),
          j =
            !0 === s
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    r = window.devicePixelRatio || 1;
                  return { x: yt(t * r) / r || 0, y: yt(n * r) / r || 0 };
                })({ x: p, y: g })
              : { x: p, y: g };
        return (
          (p = j.x),
          (g = j.y),
          u
            ? Object.assign(
                {},
                k,
                (((S = {})[_] = y ? "0" : ""),
                (S[b] = v ? "0" : ""),
                (S.transform =
                  (w.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + g + "px)"
                    : "translate3d(" + p + "px, " + g + "px, 0)"),
                S),
              )
            : Object.assign(
                {},
                k,
                (((t = {})[_] = y ? g + "px" : ""),
                (t[b] = v ? p + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const ln = {
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
            u = void 0 === l || l,
            c = {
              placement: en(t.placement),
              variation: tn(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              an(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: i,
                  roundOffsets: u,
                }),
              ),
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                an(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: u,
                  }),
                ),
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      };
      const un = {
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
            i = Vt.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = en(e),
                    o = [It, Dt].indexOf(r) >= 0 ? -1 : 1,
                    a =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    i = a[0],
                    l = a[1];
                  return (
                    (i = i || 0),
                    (l = (l || 0) * o),
                    [It, Rt].indexOf(r) >= 0 ? { x: l, y: i } : { x: i, y: l }
                  );
                })(n, t.rects, a)),
                e
              );
            }, {}),
            l = i[t.placement],
            u = l.x,
            c = l.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += u),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[r] = i);
        },
      };
      var cn = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function sn(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return cn[e];
        });
      }
      var fn = { start: "end", end: "start" };
      function dn(e) {
        return e.replace(/start|end/g, function (e) {
          return fn[e];
        });
      }
      function pn(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && gt(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function mn(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function gn(e, t) {
        return t === Wt
          ? mn(
              (function (e) {
                var t = dt(e),
                  n = Et(e),
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
                  { width: o, height: a, x: i + xt(e), y: l }
                );
              })(e),
            )
          : pt(t)
            ? (function (e) {
                var t = bt(e);
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
            : mn(
                (function (e) {
                  var t,
                    n = Et(e),
                    r = _t(e),
                    o = null == (t = e.ownerDocument) ? void 0 : t.body,
                    a = ht(
                      n.scrollWidth,
                      n.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0,
                    ),
                    i = ht(
                      n.scrollHeight,
                      n.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0,
                    ),
                    l = -r.scrollLeft + xt(e),
                    u = -r.scrollTop;
                  return (
                    "rtl" === Ot(o || n).direction &&
                      (l += ht(n.clientWidth, o ? o.clientWidth : 0) - a),
                    { width: a, height: i, x: l, y: u }
                  );
                })(Et(e)),
              );
      }
      function hn(e, t, n) {
        var r =
            "clippingParents" === t
              ? (function (e) {
                  var t = Tt(Pt(e)),
                    n =
                      ["absolute", "fixed"].indexOf(Ot(e).position) >= 0 &&
                      mt(e)
                        ? At(e)
                        : e;
                  return pt(n)
                    ? t.filter(function (e) {
                        return pt(e) && pn(e, n) && "body" !== wt(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          o = [].concat(r, [n]),
          a = o[0],
          i = o.reduce(
            function (t, n) {
              var r = gn(e, n);
              return (
                (t.top = ht(r.top, t.top)),
                (t.right = vt(r.right, t.right)),
                (t.bottom = vt(r.bottom, t.bottom)),
                (t.left = ht(r.left, t.left)),
                t
              );
            },
            gn(e, a),
          );
        return (
          (i.width = i.right - i.left),
          (i.height = i.bottom - i.top),
          (i.x = i.left),
          (i.y = i.top),
          i
        );
      }
      function vn(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function yn(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function bn(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          a = n.boundary,
          i = void 0 === a ? "clippingParents" : a,
          l = n.rootBoundary,
          u = void 0 === l ? Wt : l,
          c = n.elementContext,
          s = void 0 === c ? $t : c,
          f = n.altBoundary,
          d = void 0 !== f && f,
          p = n.padding,
          m = void 0 === p ? 0 : p,
          g = vn("number" != typeof m ? m : yn(m, Ft)),
          h = s === $t ? "reference" : $t,
          v = e.rects.popper,
          y = e.elements[d ? h : s],
          b = hn(pt(y) ? y : y.contextElement || Et(e.elements.popper), i, u),
          _ = bt(e.elements.reference),
          w = rn({
            reference: _,
            element: v,
            strategy: "absolute",
            placement: o,
          }),
          E = mn(Object.assign({}, v, w)),
          x = s === $t ? E : _,
          O = {
            top: b.top - x.top + g.top,
            bottom: x.bottom - b.bottom + g.bottom,
            left: b.left - x.left + g.left,
            right: x.right - b.right + g.right,
          },
          S = e.modifiersData.offset;
        if (s === $t && S) {
          var k = S[o];
          Object.keys(O).forEach(function (e) {
            var t = [Rt, Mt].indexOf(e) >= 0 ? 1 : -1,
              n = [Dt, Mt].indexOf(e) >= 0 ? "y" : "x";
            O[e] += k[n] * t;
          });
        }
        return O;
      }
      const _n = {
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
                u = n.fallbackPlacements,
                c = n.padding,
                s = n.boundary,
                f = n.rootBoundary,
                d = n.altBoundary,
                p = n.flipVariations,
                m = void 0 === p || p,
                g = n.allowedAutoPlacements,
                h = t.options.placement,
                v = en(h),
                y =
                  u ||
                  (v === h || !m
                    ? [sn(h)]
                    : (function (e) {
                        if (en(e) === zt) return [];
                        var t = sn(e);
                        return [dn(e), t, dn(t)];
                      })(h)),
                b = [h].concat(y).reduce(function (e, n) {
                  return e.concat(
                    en(n) === zt
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            o = n.boundary,
                            a = n.rootBoundary,
                            i = n.padding,
                            l = n.flipVariations,
                            u = n.allowedAutoPlacements,
                            c = void 0 === u ? Vt : u,
                            s = tn(r),
                            f = s
                              ? l
                                ? Bt
                                : Bt.filter(function (e) {
                                    return tn(e) === s;
                                  })
                              : Ft,
                            d = f.filter(function (e) {
                              return c.indexOf(e) >= 0;
                            });
                          0 === d.length && (d = f);
                          var p = d.reduce(function (t, n) {
                            return (
                              (t[n] = bn(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: a,
                                padding: i,
                              })[en(n)]),
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
                          padding: c,
                          flipVariations: m,
                          allowedAutoPlacements: g,
                        })
                      : n,
                  );
                }, []),
                _ = t.rects.reference,
                w = t.rects.popper,
                E = new Map(),
                x = !0,
                O = b[0],
                S = 0;
              S < b.length;
              S++
            ) {
              var k = b[S],
                j = en(k),
                P = tn(k) === Ut,
                C = [Dt, Mt].indexOf(j) >= 0,
                T = C ? "width" : "height",
                N = bn(t, {
                  placement: k,
                  boundary: s,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: c,
                }),
                L = C ? (P ? Rt : It) : P ? Mt : Dt;
              _[T] > w[T] && (L = sn(L));
              var A = sn(L),
                D = [];
              if (
                (a && D.push(N[j] <= 0),
                l && D.push(N[L] <= 0, N[A] <= 0),
                D.every(function (e) {
                  return e;
                }))
              ) {
                (O = k), (x = !1);
                break;
              }
              E.set(k, D);
            }
            if (x)
              for (
                var M = function (e) {
                    var t = b.find(function (t) {
                      var n = E.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (O = t), "break";
                  },
                  R = m ? 3 : 1;
                R > 0;
                R--
              ) {
                if ("break" === M(R)) break;
              }
            t.placement !== O &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = O),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function wn(e, t, n) {
        return ht(e, vt(t, n));
      }
      const En = {
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
            u = n.boundary,
            c = n.rootBoundary,
            s = n.altBoundary,
            f = n.padding,
            d = n.tether,
            p = void 0 === d || d,
            m = n.tetherOffset,
            g = void 0 === m ? 0 : m,
            h = bn(t, {
              boundary: u,
              rootBoundary: c,
              padding: f,
              altBoundary: s,
            }),
            v = en(t.placement),
            y = tn(t.placement),
            b = !y,
            _ = nn(v),
            w = "x" === _ ? "y" : "x",
            E = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            O = t.rects.popper,
            S =
              "function" == typeof g
                ? g(Object.assign({}, t.rects, { placement: t.placement }))
                : g,
            k =
              "number" == typeof S
                ? { mainAxis: S, altAxis: S }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
            j = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            P = { x: 0, y: 0 };
          if (E) {
            if (a) {
              var C,
                T = "y" === _ ? Dt : It,
                N = "y" === _ ? Mt : Rt,
                L = "y" === _ ? "height" : "width",
                A = E[_],
                D = A + h[T],
                M = A - h[N],
                R = p ? -O[L] / 2 : 0,
                I = y === Ut ? x[L] : O[L],
                z = y === Ut ? -O[L] : -x[L],
                F = t.elements.arrow,
                U = p && F ? jt(F) : { width: 0, height: 0 },
                H = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                W = H[T],
                $ = H[N],
                B = wn(0, x[L], U[L]),
                V = b
                  ? x[L] / 2 - R - B - W - k.mainAxis
                  : I - B - W - k.mainAxis,
                X = b
                  ? -x[L] / 2 + R + B + $ + k.mainAxis
                  : z + B + $ + k.mainAxis,
                q = t.elements.arrow && At(t.elements.arrow),
                Y = q ? ("y" === _ ? q.clientTop || 0 : q.clientLeft || 0) : 0,
                G = null != (C = null == j ? void 0 : j[_]) ? C : 0,
                Q = A + X - G,
                K = wn(p ? vt(D, A + V - G - Y) : D, A, p ? ht(M, Q) : M);
              (E[_] = K), (P[_] = K - A);
            }
            if (l) {
              var Z,
                J = "x" === _ ? Dt : It,
                ee = "x" === _ ? Mt : Rt,
                te = E[w],
                ne = "y" === w ? "height" : "width",
                re = te + h[J],
                oe = te - h[ee],
                ae = -1 !== [Dt, It].indexOf(v),
                ie = null != (Z = null == j ? void 0 : j[w]) ? Z : 0,
                le = ae ? re : te - x[ne] - O[ne] - ie + k.altAxis,
                ue = ae ? te + x[ne] + O[ne] - ie - k.altAxis : oe,
                ce =
                  p && ae
                    ? (function (e, t, n) {
                        var r = wn(e, t, n);
                        return r > n ? n : r;
                      })(le, te, ue)
                    : wn(p ? le : re, te, p ? ue : oe);
              (E[w] = ce), (P[w] = ce - te);
            }
            t.modifiersData[r] = P;
          }
        },
        requiresIfExists: ["offset"],
      };
      const xn = {
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
            l = en(n.placement),
            u = nn(l),
            c = [It, Rt].indexOf(l) >= 0 ? "height" : "width";
          if (a && i) {
            var s = (function (e, t) {
                return vn(
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
                    : yn(e, Ft),
                );
              })(o.padding, n),
              f = jt(a),
              d = "y" === u ? Dt : It,
              p = "y" === u ? Mt : Rt,
              m =
                n.rects.reference[c] +
                n.rects.reference[u] -
                i[u] -
                n.rects.popper[c],
              g = i[u] - n.rects.reference[u],
              h = At(a),
              v = h
                ? "y" === u
                  ? h.clientHeight || 0
                  : h.clientWidth || 0
                : 0,
              y = m / 2 - g / 2,
              b = s[d],
              _ = v - f[c] - s[p],
              w = v / 2 - f[c] / 2 + y,
              E = wn(b, w, _),
              x = u;
            n.modifiersData[r] =
              (((t = {})[x] = E), (t.centerOffset = E - w), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            pn(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function On(e, t, n) {
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
      function Sn(e) {
        return [Dt, Rt, Mt, It].some(function (t) {
          return e[t] >= 0;
        });
      }
      var kn = Kt({
          defaultModifiers: [
            Jt,
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = rn({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            ln,
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
                  mt(o) &&
                    wt(o) &&
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
                      mt(r) &&
                        wt(r) &&
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
            un,
            _n,
            En,
            xn,
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
                  i = bn(t, { elementContext: "reference" }),
                  l = bn(t, { altBoundary: !0 }),
                  u = On(i, r),
                  c = On(l, o, a),
                  s = Sn(u),
                  f = Sn(c);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: u,
                  popperEscapeOffsets: c,
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
        jn = n(2330),
        Pn = n.n(jn),
        Cn = function (e) {
          return e.reduce(function (e, t) {
            var n = t[0],
              r = t[1];
            return (e[n] = r), e;
          }, {});
        },
        Tn =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
            ? e.useLayoutEffect
            : e.useEffect,
        Nn = [];
      var Ln = function (e, t, n) {
          var r = -1,
            o = e.length;
          t < 0 && (t = -t > o ? 0 : o + t),
            (n = n > o ? o : n) < 0 && (n += o),
            (o = t > n ? 0 : (n - t) >>> 0),
            (t >>>= 0);
          for (var a = Array(o); ++r < o; ) a[r] = e[r + t];
          return a;
        },
        An = Ln;
      var Dn = function (e, t, n) {
          var r = e.length;
          return (n = void 0 === n ? r : n), !t && n >= r ? e : An(e, t, n);
        },
        Mn = RegExp(
          "[\‍\�-\�\̀-\ͯ\︠-\︯\⃐-\⃿\︎\️]",
        );
      var Rn = function (e) {
        return Mn.test(e);
      };
      var In = function (e) {
          return e.split("");
        },
        zn = "[\�-\�]",
        Fn = "[\̀-\ͯ\︠-\︯\⃐-\⃿]",
        Un = "\�[\�-\�]",
        Hn = "[^\�-\�]",
        Wn = "(?:\�[\�-\�]){2}",
        $n = "[\�-\�][\�-\�]",
        Bn = "(?:" + Fn + "|" + Un + ")" + "?",
        Vn = "[\︎\️]?",
        Xn =
          Vn +
          Bn +
          ("(?:\‍(?:" + [Hn, Wn, $n].join("|") + ")" + Vn + Bn + ")*"),
        qn = "(?:" + [Hn + Fn + "?", Fn, Wn, $n, zn].join("|") + ")",
        Yn = RegExp(Un + "(?=" + Un + ")|" + qn + Xn, "g");
      var Gn = In,
        Qn = Rn,
        Kn = function (e) {
          return e.match(Yn) || [];
        };
      var Zn = function (e) {
          return Qn(e) ? Kn(e) : Gn(e);
        },
        Jn =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
              ? window
              : void 0 !== n.g
                ? n.g
                : "undefined" != typeof self
                  ? self
                  : {};
      function er(e) {
        return (
          (er =
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
          er(e)
        );
      }
      var tr = "object" == er(Jn) && Jn && Jn.Object === Object && Jn,
        nr = tr,
        rr =
          "object" == ("undefined" == typeof self ? "undefined" : er(self)) &&
          self &&
          self.Object === Object &&
          self,
        or = nr || rr || Function("return this")(),
        ar = or.Symbol,
        ir = ar,
        lr = Object.prototype,
        ur = lr.hasOwnProperty,
        cr = lr.toString,
        sr = ir ? ir.toStringTag : void 0;
      var fr = function (e) {
          var t = ur.call(e, sr),
            n = e[sr];
          try {
            e[sr] = void 0;
            var r = !0;
          } catch (e) {}
          var o = cr.call(e);
          return r && (t ? (e[sr] = n) : delete e[sr]), o;
        },
        dr = Object.prototype.toString;
      var pr = fr,
        mr = function (e) {
          return dr.call(e);
        },
        gr = ar ? ar.toStringTag : void 0;
      var hr = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : gr && gr in Object(e)
              ? pr(e)
              : mr(e);
        },
        vr = Array.isArray;
      var yr = function (e) {
          return null != e && "object" == er(e);
        },
        br = hr,
        _r = yr;
      var wr = function (e) {
        return "symbol" == er(e) || (_r(e) && "[object Symbol]" == br(e));
      };
      var Er = function (e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length, o = Array(r);
            ++n < r;

          )
            o[n] = t(e[n], n, e);
          return o;
        },
        xr = Er,
        Or = vr,
        Sr = wr,
        kr = ar ? ar.prototype : void 0,
        jr = kr ? kr.toString : void 0;
      var Pr = function e(t) {
          if ("string" == typeof t) return t;
          if (Or(t)) return xr(t, e) + "";
          if (Sr(t)) return jr ? jr.call(t) : "";
          var n = t + "";
          return "0" == n && 1 / t == -Infinity ? "-0" : n;
        },
        Cr = Pr;
      var Tr = function (e) {
          return null == e ? "" : Cr(e);
        },
        Nr = Dn,
        Lr = Rn,
        Ar = Zn,
        Dr = Tr;
      var Mr = (function (e) {
          return function (t) {
            t = Dr(t);
            var n = Lr(t) ? Ar(t) : void 0,
              r = n ? n[0] : t.charAt(0),
              o = n ? Nr(n, 1).join("") : t.slice(1);
            return r[e]() + o;
          };
        })("toUpperCase"),
        Rr = function () {};
      var Ir = function (e) {
          var t = er(e);
          return null != e && ("object" == t || "function" == t);
        },
        zr = hr,
        Fr = Ir;
      var Ur,
        Hr = function (e) {
          if (!Fr(e)) return !1;
          var t = zr(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        },
        Wr = or["__core-js_shared__"],
        $r = (Ur = /[^.]+$/.exec((Wr && Wr.keys && Wr.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + Ur
          : "";
      var Br = function (e) {
          return !!$r && $r in e;
        },
        Vr = Function.prototype.toString;
      var Xr = function (e) {
          if (null != e) {
            try {
              return Vr.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        },
        qr = Hr,
        Yr = Br,
        Gr = Ir,
        Qr = Xr,
        Kr = /^\[object .+?Constructor\]$/,
        Zr = Function.prototype,
        Jr = Object.prototype,
        eo = Zr.toString,
        to = Jr.hasOwnProperty,
        no = RegExp(
          "^" +
            eo
              .call(to)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      var ro = function (e) {
          return !(!Gr(e) || Yr(e)) && (qr(e) ? no : Kr).test(Qr(e));
        },
        oo = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      var ao = function (e, t) {
          var n = oo(e, t);
          return ro(n) ? n : void 0;
        },
        io = ao(or, "Map");
      var lo = function (e, t) {
        return e === t || (e != e && t != t);
      };
      var uo = function () {
          (this.__data__ = []), (this.size = 0);
        },
        co = lo;
      var so = function (e, t) {
          for (var n = e.length; n--; ) if (co(e[n][0], t)) return n;
          return -1;
        },
        fo = so,
        po = Array.prototype.splice;
      var mo = so;
      var go = so;
      var ho = so;
      var vo = uo,
        yo = function (e) {
          var t = this.__data__,
            n = fo(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : po.call(t, n, 1), --this.size, !0)
          );
        },
        bo = function (e) {
          var t = this.__data__,
            n = mo(t, e);
          return n < 0 ? void 0 : t[n][1];
        },
        _o = function (e) {
          return go(this.__data__, e) > -1;
        },
        wo = function (e, t) {
          var n = this.__data__,
            r = ho(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
        };
      function Eo(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (Eo.prototype.clear = vo),
        (Eo.prototype.delete = yo),
        (Eo.prototype.get = bo),
        (Eo.prototype.has = _o),
        (Eo.prototype.set = wo);
      var xo = Eo,
        Oo = ao(Object, "create"),
        So = Oo;
      var ko = function () {
        (this.__data__ = So ? So(null) : {}), (this.size = 0);
      };
      var jo = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        },
        Po = Oo,
        Co = Object.prototype.hasOwnProperty;
      var To = function (e) {
          var t = this.__data__;
          if (Po) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return Co.call(t, e) ? t[e] : void 0;
        },
        No = Oo,
        Lo = Object.prototype.hasOwnProperty;
      var Ao = Oo;
      var Do = ko,
        Mo = jo,
        Ro = To,
        Io = function (e) {
          var t = this.__data__;
          return No ? void 0 !== t[e] : Lo.call(t, e);
        },
        zo = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = Ao && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      function Fo(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (Fo.prototype.clear = Do),
        (Fo.prototype.delete = Mo),
        (Fo.prototype.get = Ro),
        (Fo.prototype.has = Io),
        (Fo.prototype.set = zo);
      var Uo = Fo,
        Ho = xo,
        Wo = io;
      var $o = function (e) {
        var t = er(e);
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      var Bo = function (e, t) {
          var n = e.__data__;
          return $o(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        },
        Vo = Bo;
      var Xo = Bo;
      var qo = Bo;
      var Yo = Bo;
      var Go = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new Uo(),
              map: new (Wo || Ho)(),
              string: new Uo(),
            });
        },
        Qo = function (e) {
          var t = Vo(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        },
        Ko = function (e) {
          return Xo(this, e).get(e);
        },
        Zo = function (e) {
          return qo(this, e).has(e);
        },
        Jo = function (e, t) {
          var n = Yo(this, e),
            r = n.size;
          return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
        };
      function ea(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (ea.prototype.clear = Go),
        (ea.prototype.delete = Qo),
        (ea.prototype.get = Ko),
        (ea.prototype.has = Zo),
        (ea.prototype.set = Jo);
      var ta = ea;
      var na = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
      var ra = function (e) {
        return function (t) {
          return e(t);
        };
      };
      var oa = function (e, t) {
          return function (n) {
            return e(t(n));
          };
        },
        aa = Object.prototype;
      var ia = function (e) {
          var t = e && e.constructor;
          return e === (("function" == typeof t && t.prototype) || aa);
        },
        la = { exports: {} };
      var ua = function () {
        return !1;
      };
      !(function (e, t) {
        var n = or,
          r = ua,
          o = t && !t.nodeType && t,
          a = o && e && !e.nodeType && e,
          i = a && a.exports === o ? n.Buffer : void 0,
          l = (i ? i.isBuffer : void 0) || r;
        e.exports = l;
      })(la, la.exports);
      var ca = hr,
        sa = na,
        fa = yr,
        da = {};
      (da["[object Float32Array]"] =
        da["[object Float64Array]"] =
        da["[object Int8Array]"] =
        da["[object Int16Array]"] =
        da["[object Int32Array]"] =
        da["[object Uint8Array]"] =
        da["[object Uint8ClampedArray]"] =
        da["[object Uint16Array]"] =
        da["[object Uint32Array]"] =
          !0),
        (da["[object Arguments]"] =
          da["[object Array]"] =
          da["[object ArrayBuffer]"] =
          da["[object Boolean]"] =
          da["[object DataView]"] =
          da["[object Date]"] =
          da["[object Error]"] =
          da["[object Function]"] =
          da["[object Map]"] =
          da["[object Number]"] =
          da["[object Object]"] =
          da["[object RegExp]"] =
          da["[object Set]"] =
          da["[object String]"] =
          da["[object WeakMap]"] =
            !1);
      var pa = function (e) {
          return fa(e) && sa(e.length) && !!da[ca(e)];
        },
        ma = { exports: {} };
      !(function (e, t) {
        var n = tr,
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
      })(ma, ma.exports);
      var ga = pa,
        ha = ra,
        va = ma.exports,
        ya = va && va.isTypedArray,
        ba = ya ? ha(ya) : ga,
        _a = ao,
        wa = (function () {
          try {
            var e = _a(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })(),
        Ea = wa;
      var xa = function (e, t, n) {
          "__proto__" == t && Ea
            ? Ea(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0,
              })
            : (e[t] = n);
        },
        Oa = xa,
        Sa = lo,
        ka = Object.prototype.hasOwnProperty;
      var ja = function (e, t, n) {
          var r = e[t];
          (ka.call(e, t) && Sa(r, n) && (void 0 !== n || t in e)) ||
            Oa(e, t, n);
        },
        Pa = hr,
        Ca = yr;
      var Ta = function (e) {
          return Ca(e) && "[object Arguments]" == Pa(e);
        },
        Na = yr,
        La = Object.prototype,
        Aa = La.hasOwnProperty,
        Da = La.propertyIsEnumerable,
        Ma = Ta(
          (function () {
            return arguments;
          })(),
        )
          ? Ta
          : function (e) {
              return Na(e) && Aa.call(e, "callee") && !Da.call(e, "callee");
            },
        Ra = /^(?:0|[1-9]\d*)$/;
      var Ia = function (e, t) {
          var n = er(e);
          return (
            !!(t = null == t ? 9007199254740991 : t) &&
            ("number" == n || ("symbol" != n && Ra.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        },
        za = Hr,
        Fa = na;
      var Ua = function (e) {
          return null != e && Fa(e.length) && !za(e);
        },
        Ha = xo;
      var Wa = xo,
        $a = io,
        Ba = ta;
      var Va = xo,
        Xa = function () {
          (this.__data__ = new Ha()), (this.size = 0);
        },
        qa = function (e) {
          var t = this.__data__,
            n = t.delete(e);
          return (this.size = t.size), n;
        },
        Ya = function (e) {
          return this.__data__.get(e);
        },
        Ga = function (e) {
          return this.__data__.has(e);
        },
        Qa = function (e, t) {
          var n = this.__data__;
          if (n instanceof Wa) {
            var r = n.__data__;
            if (!$a || r.length < 199)
              return r.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new Ba(r);
          }
          return n.set(e, t), (this.size = n.size), this;
        };
      function Ka(e) {
        var t = (this.__data__ = new Va(e));
        this.size = t.size;
      }
      (Ka.prototype.clear = Xa),
        (Ka.prototype.delete = qa),
        (Ka.prototype.get = Ya),
        (Ka.prototype.has = Ga),
        (Ka.prototype.set = Qa);
      var Za = Ka,
        Ja = { exports: {} };
      !(function (e, t) {
        var n = or,
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
      })(Ja, Ja.exports);
      var ei = or.Uint8Array;
      var ti = function (e) {
          var t = new e.constructor(e.byteLength);
          return new ei(t).set(new ei(e)), t;
        },
        ni = ti;
      var ri = function (e, t) {
        var n = t ? ni(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      };
      var oi = function (e, t) {
          var n = -1,
            r = e.length;
          for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
          return t;
        },
        ai = Ir,
        ii = Object.create,
        li = (function () {
          function e() {}
          return function (t) {
            if (!ai(t)) return {};
            if (ii) return ii(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = void 0), n;
          };
        })(),
        ui = oa(Object.getPrototypeOf, Object),
        ci = li,
        si = ui,
        fi = ia;
      var di = function (e) {
          return "function" != typeof e.constructor || fi(e) ? {} : ci(si(e));
        },
        pi = ja,
        mi = xa;
      var gi = function (e, t, n, r) {
        var o = !n;
        n || (n = {});
        for (var a = -1, i = t.length; ++a < i; ) {
          var l = t[a],
            u = r ? r(n[l], e[l], l, n, e) : void 0;
          void 0 === u && (u = e[l]), o ? mi(n, l, u) : pi(n, l, u);
        }
        return n;
      };
      var hi = function (e, t) {
          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
          return r;
        },
        vi = hi,
        yi = Ma,
        bi = vr,
        _i = la.exports,
        wi = Ia,
        Ei = ba,
        xi = Object.prototype.hasOwnProperty;
      var Oi = function (e, t) {
        var n = bi(e),
          r = !n && yi(e),
          o = !n && !r && _i(e),
          a = !n && !r && !o && Ei(e),
          i = n || r || o || a,
          l = i ? vi(e.length, String) : [],
          u = l.length;
        for (var c in e)
          (!t && !xi.call(e, c)) ||
            (i &&
              ("length" == c ||
                (o && ("offset" == c || "parent" == c)) ||
                (a &&
                  ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
                wi(c, u))) ||
            l.push(c);
        return l;
      };
      var Si = Ir,
        ki = ia,
        ji = function (e) {
          var t = [];
          if (null != e) for (var n in Object(e)) t.push(n);
          return t;
        },
        Pi = Object.prototype.hasOwnProperty;
      var Ci = Oi,
        Ti = function (e) {
          if (!Si(e)) return ji(e);
          var t = ki(e),
            n = [];
          for (var r in e)
            ("constructor" != r || (!t && Pi.call(e, r))) && n.push(r);
          return n;
        },
        Ni = Ua;
      var Li = function (e) {
        return Ni(e) ? Ci(e, !0) : Ti(e);
      };
      var Ai = function (e) {
        return e;
      };
      var Di = function (e, t, n) {
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
        Mi = Math.max;
      var Ri = function (e, t, n) {
        return (
          (t = Mi(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var r = arguments, o = -1, a = Mi(r.length - t, 0), i = Array(a);
              ++o < a;

            )
              i[o] = r[t + o];
            o = -1;
            for (var l = Array(t + 1); ++o < t; ) l[o] = r[o];
            return (l[t] = n(i)), Di(e, this, l);
          }
        );
      };
      var Ii = function (e) {
          return function () {
            return e;
          };
        },
        zi = wa,
        Fi = zi
          ? function (e, t) {
              return zi(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Ii(t),
                writable: !0,
              });
            }
          : Ai,
        Ui = Date.now;
      var Hi = (function (e) {
          var t = 0,
            n = 0;
          return function () {
            var r = Ui(),
              o = 16 - (r - n);
            if (((n = r), o > 0)) {
              if (++t >= 800) return arguments[0];
            } else t = 0;
            return e.apply(void 0, arguments);
          };
        })(Fi),
        Wi = Ua,
        $i = yr;
      var Bi = function (e) {
          return $i(e) && Wi(e);
        },
        Vi = Ai,
        Xi = Ri,
        qi = Hi;
      var Yi = function (e, t) {
          return qi(Xi(e, t, Vi), e + "");
        },
        Gi = hr,
        Qi = ui,
        Ki = yr,
        Zi = Function.prototype,
        Ji = Object.prototype,
        el = Zi.toString,
        tl = Ji.hasOwnProperty,
        nl = el.call(Object);
      var rl = function (e) {
          if (!Ki(e) || "[object Object]" != Gi(e)) return !1;
          var t = Qi(e);
          if (null === t) return !0;
          var n = tl.call(t, "constructor") && t.constructor;
          return "function" == typeof n && n instanceof n && el.call(n) == nl;
        },
        ol = lo,
        al = Ua,
        il = Ia,
        ll = Ir;
      var ul = function (e, t, n) {
          if (!ll(n)) return !1;
          var r = er(t);
          return (
            !!("number" == r
              ? al(n) && il(t, n.length)
              : "string" == r && t in n) && ol(n[t], e)
          );
        },
        cl = xa,
        sl = lo;
      var fl = function (e, t, n) {
        ((void 0 !== n && !sl(e[t], n)) || (void 0 === n && !(t in e))) &&
          cl(e, t, n);
      };
      var dl = (function (e) {
        return function (t, n, r) {
          for (var o = -1, a = Object(t), i = r(t), l = i.length; l--; ) {
            var u = i[e ? l : ++o];
            if (!1 === n(a[u], u, a)) break;
          }
          return t;
        };
      })();
      var pl = function (e, t) {
          if (
            ("constructor" !== t || "function" != typeof e[t]) &&
            "__proto__" != t
          )
            return e[t];
        },
        ml = gi,
        gl = Li;
      var hl = fl,
        vl = Ja.exports,
        yl = ri,
        bl = oi,
        _l = di,
        wl = Ma,
        El = vr,
        xl = Bi,
        Ol = la.exports,
        Sl = Hr,
        kl = Ir,
        jl = rl,
        Pl = ba,
        Cl = pl,
        Tl = function (e) {
          return ml(e, gl(e));
        };
      var Nl = Za,
        Ll = fl,
        Al = dl,
        Dl = function (e, t, n, r, o, a, i) {
          var l = Cl(e, n),
            u = Cl(t, n),
            c = i.get(u);
          if (c) hl(e, n, c);
          else {
            var s = a ? a(l, u, n + "", e, t, i) : void 0,
              f = void 0 === s;
            if (f) {
              var d = El(u),
                p = !d && Ol(u),
                m = !d && !p && Pl(u);
              (s = u),
                d || p || m
                  ? El(l)
                    ? (s = l)
                    : xl(l)
                      ? (s = bl(l))
                      : p
                        ? ((f = !1), (s = vl(u, !0)))
                        : m
                          ? ((f = !1), (s = yl(u, !0)))
                          : (s = [])
                  : jl(u) || wl(u)
                    ? ((s = l),
                      wl(l) ? (s = Tl(l)) : (kl(l) && !Sl(l)) || (s = _l(u)))
                    : (f = !1);
            }
            f && (i.set(u, s), o(s, u, r, a, i), i.delete(u)), hl(e, n, s);
          }
        },
        Ml = Ir,
        Rl = Li,
        Il = pl;
      var zl = function e(t, n, r, o, a) {
          t !== n &&
            Al(
              n,
              function (i, l) {
                if ((a || (a = new Nl()), Ml(i))) Dl(t, n, l, r, e, o, a);
                else {
                  var u = o ? o(Il(t, l), i, l + "", t, n, a) : void 0;
                  void 0 === u && (u = i), Ll(t, l, u);
                }
              },
              Rl,
            );
        },
        Fl = Yi,
        Ul = ul;
      var Hl = zl,
        Wl = (function (e) {
          return Fl(function (t, n) {
            var r = -1,
              o = n.length,
              a = o > 1 ? n[o - 1] : void 0,
              i = o > 2 ? n[2] : void 0;
            for (
              a = e.length > 3 && "function" == typeof a ? (o--, a) : void 0,
                i && Ul(n[0], n[1], i) && ((a = o < 3 ? void 0 : a), (o = 1)),
                t = Object(t);
              ++r < o;

            ) {
              var l = n[r];
              l && e(t, l, r, a);
            }
            return t;
          });
        })(function (e, t, n) {
          Hl(e, t, n);
        });
      function $l(e, t) {
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
      var Bl = (function (e) {
          return (
            (e.ripple = "ripple"), (e.expand = "expand"), (e.fade = "fade"), e
          );
        })(Bl || {}),
        Vl = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? $l(Object(n), !0).forEach(function (t) {
                  He(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : $l(Object(n)).forEach(function (t) {
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
          Wl(
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
              anchor: { copySuccessText: "链接复制成功", copyText: "复制链接" },
              colorPicker: {
                swatchColorTitle: "系统预设颜色",
                recentColorTitle: "最近使用颜色",
                clearConfirmText: "确定清空最近使用的颜色吗？",
              },
            },
            {
              classPrefix: "t",
              animation: { include: ["ripple", "expand", "fade"], exclude: [] },
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
        Xl = { globalConfig: Vl },
        ql = (0, e.createContext)(Xl),
        Yl = function () {
          return (0, e.useContext)(ql).globalConfig;
        };
      function Gl() {
        var t = Yl().animation,
          n = Bl.expand,
          r = Bl.ripple,
          o = Bl.fade,
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
      n(6120);
      var Ql = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      Ql && document.addEventListener, Ql && document.removeEventListener;
      function Kl(e, t) {
        if (!e || !t) return !1;
        if (-1 !== t.indexOf(" "))
          throw new Error("className should not contain space.");
        return e.classList
          ? e.classList.contains(t)
          : " ".concat(e.className, " ").indexOf(" ".concat(t, " ")) > -1;
      }
      var Zl = (0, e.forwardRef)(function (n, r) {
        var o = n.attach,
          a = n.children,
          i = n.triggerNode,
          l = Yl().classPrefix,
          u = (0, e.useMemo)(
            function () {
              if (!Ql) return null;
              var e = document.createElement("div");
              return (e.className = "".concat(l, "-portal-wrapper")), e;
            },
            [l],
          );
        return (
          (0, e.useEffect)(
            function () {
              var e,
                t = (function (e, t) {
                  return Ql
                    ? ("string" == typeof e && (n = document.querySelector(e)),
                      "function" == typeof e && (n = e(t)),
                      "object" === er(e) &&
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
          Ql ? (0, t.createPortal)(a, u) : null
        );
      });
      function Jl(e) {
        return e.current &&
          "object" === er(e.current) &&
          "currentElement" in e.current
          ? e.current.currentElement
          : e.current;
      }
      function eu(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return tu(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return tu(e, t);
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
      function tu(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      Zl.displayName = "Portal";
      function nu(t) {
        var n = t.content,
          r = t.disabled,
          o = t.trigger,
          a = t.visible,
          i = t.onVisibleChange,
          l = t.triggerRef,
          u = Yl().classPrefix,
          s = (0, e.useRef)(!1),
          f = (0, e.useRef)(0),
          d = (0, e.useRef)(
            "".concat(u, "-popup--").concat(Math.random().toFixed(10)),
          ),
          p = !r && n;
        function m(e) {
          if (!p) return {};
          var t,
            n,
            r,
            s,
            f = {
              className: a
                ? Xe()(e.props.className, "".concat(u, "-popup-open"))
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
              typeof (s = (0, c.isMemo)(t) ? t.type.type : t.type) ||
              (null !== (n = s.prototype) && void 0 !== n && n.render)) &&
            ("function" != typeof t ||
              (null !== (r = t.prototype) && void 0 !== r && r.render))
              ? (f.ref = (function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return function (e) {
                    var n,
                      r = eu(t);
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
              : (f["data-popup"] = d.current),
            f
          );
        }
        return (
          (0, e.useEffect)(
            function () {
              if (p) {
                var e = function (e) {
                  var t, n;
                  (null !== (t = Jl(l)) &&
                    void 0 !== t &&
                    null !== (n = t.contains) &&
                    void 0 !== n &&
                    n.call(t, e.target)) ||
                    s.current ||
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
            [p, a, i, l],
          ),
          {
            getTriggerNode: function (t) {
              var n =
                (0, e.isValidElement)(t) && !(0, c.isFragment)(t)
                  ? t
                  : e.createElement(
                      "span",
                      { className: "".concat(u, "-trigger") },
                      t,
                    );
              return e.cloneElement(n, m(n));
            },
            getPopupProps: function () {
              return p
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
                      clearTimeout(f.current),
                        (s.current = !0),
                        (f.current = window.setTimeout(function () {
                          s.current = !1;
                        }));
                    },
                    onTouchEnd: function () {
                      clearTimeout(f.current),
                        (s.current = !0),
                        (f.current = window.setTimeout(function () {
                          s.current = !1;
                        }));
                    },
                  }
                : {};
            },
            getTriggerDom: (0, e.useCallback)(function () {
              return document.querySelector(
                '[data-popup="'.concat(d.current, '"]'),
              );
            }, []),
          }
        );
      }
      var ru = function (e) {
          var t = e.classPrefix,
            n = e.expandAnimation;
          if (!e.fadeAnimation) return {};
          var r = "".concat(
            t,
            n ? "-popup--animation-expand" : "-popup--animation",
          );
          return {
            classNames: {
              appear: "".concat(r, "-enter ").concat(r, "-enter-active"),
              appearActive: "".concat(r, "-enter-active"),
              appearDone: "".concat(r, "-enter-active ").concat(r, "-enter-to"),
              enter: "".concat(r, "-enter ").concat(r, "-enter-active"),
              enterActive: "".concat(r, "-enter-active"),
              enterDone: "".concat(r, "-enter-active ").concat(r, "-enter-to"),
              exit: "".concat(r, "-leave ").concat(r, "-leave-active"),
              exitActive: "".concat(r, "-leave-active"),
              exitDone: "".concat(r, "-leave-active ").concat(r, "-leave-to"),
            },
          };
        },
        ou = /\s/;
      var au = function (e) {
          for (var t = e.length; t-- && ou.test(e.charAt(t)); );
          return t;
        },
        iu = /^\s+/;
      var lu = function (e) {
          return e ? e.slice(0, au(e) + 1).replace(iu, "") : e;
        },
        uu = Ir,
        cu = wr,
        su = /^[-+]0x[0-9a-f]+$/i,
        fu = /^0b[01]+$/i,
        du = /^0o[0-7]+$/i,
        pu = parseInt;
      var mu = or,
        gu = Ir,
        hu = function () {
          return mu.Date.now();
        },
        vu = function (e) {
          if ("number" == typeof e) return e;
          if (cu(e)) return NaN;
          if (uu(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = uu(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = lu(e);
          var n = fu.test(e);
          return n || du.test(e)
            ? pu(e.slice(2), n ? 2 : 8)
            : su.test(e)
              ? NaN
              : +e;
        },
        yu = Math.max,
        bu = Math.min;
      var _u = function (e, t, n) {
          var r,
            o,
            a,
            i,
            l,
            u,
            c = 0,
            s = !1,
            f = !1,
            d = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function p(t) {
            var n = r,
              a = o;
            return (r = o = void 0), (c = t), (i = e.apply(a, n));
          }
          function m(e) {
            return (c = e), (l = setTimeout(h, t)), s ? p(e) : i;
          }
          function g(e) {
            var n = e - u;
            return void 0 === u || n >= t || n < 0 || (f && e - c >= a);
          }
          function h() {
            var e = hu();
            if (g(e)) return v(e);
            l = setTimeout(
              h,
              (function (e) {
                var n = t - (e - u);
                return f ? bu(n, a - (e - c)) : n;
              })(e),
            );
          }
          function v(e) {
            return (l = void 0), d && r ? p(e) : ((r = o = void 0), i);
          }
          function y() {
            var e = hu(),
              n = g(e);
            if (((r = arguments), (o = this), (u = e), n)) {
              if (void 0 === l) return m(u);
              if (f) return clearTimeout(l), (l = setTimeout(h, t)), p(u);
            }
            return void 0 === l && (l = setTimeout(h, t)), i;
          }
          return (
            (t = vu(t) || 0),
            gu(n) &&
              ((s = !!n.leading),
              (a = (f = "maxWait" in n) ? yu(vu(n.maxWait) || 0, t) : a),
              (d = "trailing" in n ? !!n.trailing : d)),
            (y.cancel = function () {
              void 0 !== l && clearTimeout(l),
                (c = 0),
                (r = u = o = l = void 0);
            }),
            (y.flush = function () {
              return void 0 === l ? i : v(hu());
            }),
            y
          );
        },
        wu = {
          debounceTime: 0,
          config: {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          },
        };
      function Eu(e, t) {
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
      function xu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Eu(Object(n), !0).forEach(function (t) {
                He(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Eu(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Ou = (0, e.forwardRef)(function (n, r) {
        var o = n.trigger,
          a = n.content,
          i = n.placement,
          l = n.attach,
          u = n.showArrow,
          c = n.destroyOnClose,
          s = n.overlayClassName,
          f = n.overlayInnerClassName,
          d = n.overlayStyle,
          p = n.overlayInnerStyle,
          m = n.triggerElement,
          g = n.children,
          h = void 0 === g ? m : g,
          v = n.disabled,
          y = n.zIndex,
          b = n.onScroll,
          _ = n.expandAnimation,
          w = n.delay,
          E = n.hideEmptyPopup,
          x = n.popperOptions,
          O = n.updateScrollTop,
          S = Yl().classPrefix,
          k = Gl(),
          j = k.keepExpand,
          P = k.keepFade,
          C = (function () {
            var t =
                "object" ===
                ("undefined" == typeof window ? "undefined" : er(window)),
              n = (0, e.useCallback)(
                function () {
                  return {
                    width: t ? window.innerWidth : void 0,
                    height: t ? window.innerHeight : void 0,
                  };
                },
                [t],
              ),
              r = $e((0, e.useState)(n()), 2),
              o = r[0],
              a = r[1];
            return (
              (0, e.useEffect)(
                function () {
                  var e = _u(function () {
                    a(n());
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
          T = C.height,
          N = C.width,
          L = (function () {
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
              a = Reflect.has(t, n),
              i = t[n],
              l = o["default".concat(Mr(n))] || t["default".concat(Mr(n))],
              u = $e((0, e.useState)(l), 2),
              c = u[0],
              s = u[1];
            return a
              ? [i, r || Rr]
              : [
                  c,
                  function (e) {
                    s(e);
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
          })(n, "visible", n.onVisibleChange),
          A = $e(L, 2),
          D = A[0],
          M = A[1],
          R = $e((0, e.useState)(null), 2),
          I = R[0],
          z = R[1],
          F = (0, e.useRef)(null),
          U = (0, e.useRef)(null),
          H = (0, e.useRef)(null),
          W = (0, e.useRef)(null),
          $ = (0, e.useRef)(null),
          B = $e(
            (0, e.useMemo)(
              function () {
                return Array.isArray(w) ? w : [w, w];
              },
              [w],
            ),
            2,
          ),
          V = B[0],
          X = void 0 === V ? 0 : V,
          q = B[1],
          Y = void 0 === q ? 0 : q,
          G = (0, e.useMemo)(
            function () {
              return !(E && !a) && (D || I);
            },
            [E, a, D, I],
          ),
          Q = (0, e.useMemo)(
            function () {
              return i
                .replace(/-(left|top)$/, "-start")
                .replace(/-(right|bottom)$/, "-end");
            },
            [i],
          ),
          K = nu({
            triggerRef: F,
            content: a,
            disabled: v,
            trigger: o,
            visible: D,
            onVisibleChange: M,
          }),
          Z = K.getTriggerNode,
          J = K.getPopupProps,
          ee = K.getTriggerDom,
          te = Z(h);
        !(function (t, n) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : wu,
            o = (0, e.useRef)(null);
          (0, e.useEffect)(
            function () {
              if (n && "function" == typeof n) {
                var e = r.debounceTime;
                o.current = new MutationObserver(e > 0 ? _u(n, e) : n);
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
        })(Jl(F), function () {
          var e, t;
          null === (e = $.current) ||
            void 0 === e ||
            null === (t = e.update) ||
            void 0 === t ||
            t.call(e);
        }),
          (0, e.useEffect)(
            function () {
              var e, t;
              null === (e = $.current) ||
                void 0 === e ||
                null === (t = e.update) ||
                void 0 === t ||
                t.call(e);
            },
            [D, a, T, N],
          ),
          (0, e.useEffect)(
            function () {
              F.current || (F.current = ee()), D && (null == O || O(W.current));
            },
            [D, O, ee],
          ),
          ($.current = (function (n, r, o) {
            void 0 === o && (o = {});
            var a = e.useRef(null),
              i = {
                onFirstUpdate: o.onFirstUpdate,
                placement: o.placement || "bottom",
                strategy: o.strategy || "absolute",
                modifiers: o.modifiers || Nn,
              },
              l = e.useState({
                styles: {
                  popper: { position: i.strategy, left: "0", top: "0" },
                  arrow: { position: "absolute" },
                },
                attributes: {},
              }),
              u = l[0],
              c = l[1],
              s = e.useMemo(function () {
                return {
                  name: "updateState",
                  enabled: !0,
                  phase: "write",
                  fn: function (e) {
                    var n = e.state,
                      r = Object.keys(n.elements);
                    t.flushSync(function () {
                      c({
                        styles: Cn(
                          r.map(function (e) {
                            return [e, n.styles[e] || {}];
                          }),
                        ),
                        attributes: Cn(
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
                  return Pn()(a.current, e)
                    ? a.current || e
                    : ((a.current = e), e);
                },
                [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, s],
              ),
              d = e.useRef();
            return (
              Tn(
                function () {
                  d.current && d.current.setOptions(f);
                },
                [f],
              ),
              Tn(
                function () {
                  if (null != n && null != r) {
                    var e = (o.createPopper || kn)(n, r, f);
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
                styles: u.styles,
                attributes: u.attributes,
                update: d.current ? d.current.update : null,
                forceUpdate: d.current ? d.current.forceUpdate : null,
              }
            );
          })(Jl(F), I, xu({ placement: Q }, x)));
        var ne = $.current,
          re = ne.styles,
          oe = ne.attributes;
        function ae(e) {
          return Jl(F) && U.current && "function" == typeof e
            ? xu({}, e(Jl(F), U.current))
            : xu({}, e);
        }
        var ie =
          G &&
          e.createElement(
            ft,
            {
              appear: !0,
              in: D,
              timeout: { appear: 180 + X, enter: 180 + X, exit: 180 + Y },
              nodeRef: H,
              unmountOnExit: c,
              onEnter: function () {
                !c && I && (I.style.display = "block");
              },
              onExited: function () {
                !c && I && (I.style.display = "none");
              },
            },
            e.createElement(
              Zl,
              { triggerNode: Jl(F), attach: l, ref: H },
              e.createElement(
                ft,
                xu(
                  {
                    appear: !0,
                    timeout: { appear: X, enter: X, exit: Y },
                    in: D,
                    nodeRef: U,
                  },
                  ru({
                    classPrefix: S,
                    fadeAnimation: P,
                    expandAnimation: _ && j,
                  }),
                ),
                e.createElement(
                  "div",
                  xu(
                    xu(
                      {
                        ref: function (e) {
                          e && ((U.current = e), z(e));
                        },
                        style: xu(xu({}, re.popper), {}, { zIndex: y }, ae(d)),
                        className: Xe()("".concat(S, "-popup"), s),
                      },
                      oe.popper,
                    ),
                    J(),
                  ),
                  e.createElement(
                    "div",
                    {
                      ref: W,
                      className: Xe()(
                        "".concat(S, "-popup__content"),
                        He({}, "".concat(S, "-popup__content--arrow"), u),
                        f,
                      ),
                      style: ae(p),
                      onScroll: function (e) {
                        return null == b ? void 0 : b({ e });
                      },
                    },
                    u
                      ? e.createElement("div", {
                          style: re.arrow,
                          className: "".concat(S, "-popup__arrow"),
                        })
                      : null,
                    a,
                  ),
                ),
              ),
            ),
          );
        return (
          (0, e.useImperativeHandle)(r, function () {
            return {
              getPopper: function () {
                return $.current;
              },
              getPopupElement: function () {
                return U.current;
              },
              getPortalElement: function () {
                return H.current;
              },
            };
          }),
          e.createElement(e.Fragment, null, te, ie)
        );
      });
      (Ou.displayName = "Popup"),
        (Ou.defaultProps = {
          attach: "body",
          destroyOnClose: !1,
          hideEmptyPopup: !1,
          placement: "top",
          showArrow: !1,
          trigger: "hover",
        });
      var Su = Ou,
        ku = [
          "theme",
          "showArrow",
          "destroyOnClose",
          "overlayClassName",
          "children",
          "duration",
          "placement",
        ];
      function ju(e, t) {
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
            ? ju(Object(n), !0).forEach(function (t) {
                He(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ju(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Cu = (0, e.forwardRef)(function (t, n) {
        var r = t.theme,
          o = t.showArrow,
          a = void 0 === o || o,
          i = t.destroyOnClose,
          l = void 0 === i || i,
          u = t.overlayClassName,
          c = t.children,
          s = t.duration,
          f = void 0 === s ? 0 : s,
          d = t.placement,
          p = void 0 === d ? "top" : d,
          m = Be(t, ku),
          g = Yl().classPrefix,
          h = $e((0, e.useState)(0 !== f), 2),
          v = h[0],
          y = h[1],
          b = $e((0, e.useState)(!1), 2),
          _ = b[0],
          w = b[1],
          E = (0, e.useRef)(),
          x = (0, e.useRef)(null),
          O = $e((0, e.useState)([0, 0]), 2),
          S = O[0],
          k = O[1],
          j = Xe()(
            "".concat(g, "-tooltip"),
            He({}, "".concat(g, "-tooltip--").concat(r), r),
            u,
          ),
          P = "mouse" === p,
          C = function (e) {
            0 !== f && w(!1), y(e);
          };
        return (
          (0, e.useEffect)(
            function () {
              return (
                0 === f ||
                  _ ||
                  (x.current = window.setTimeout(function () {
                    y(!1), w(!0);
                  }, f)),
                function () {
                  x.current && window.clearTimeout(x.current);
                }
              );
            },
            [f, _],
          ),
          (0, e.useImperativeHandle)(n, function () {
            return Pu({ setVisible: C }, E.current || {});
          }),
          e.createElement(
            Su,
            Pu(
              {
                ref: E,
                destroyOnClose: l,
                showArrow: !P && a,
                overlayClassName: j,
                visible: v,
                onVisibleChange: function (e, t) {
                  var n = t.e,
                    r = t.trigger;
                  if (0 === f || (0 !== f && _)) {
                    if (
                      e &&
                      "mouse" === p &&
                      ("trigger-element-hover" === r ||
                        "trigger-element-click" === r)
                    ) {
                      var o = (function (e) {
                          var t = e.target.getBoundingClientRect();
                          return {
                            x: e.clientX - t.left,
                            y: e.clientY - t.top,
                          };
                        })(n),
                        a = o.x;
                      k([a, 0]);
                    }
                    y(e);
                  }
                },
                popperOptions: {
                  modifiers: P
                    ? [{ name: "offset", options: { offset: S } }]
                    : [],
                },
                placement: P ? "bottom-left" : p,
              },
              m,
            ),
            c,
          )
        );
      });
      function Tu(t) {
        var n = (0, e.useRef)(t);
        n.current = t;
        var r = (0, e.useRef)();
        return (
          r.current ||
            (r.current = function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              return n.current.apply(this, t);
            }),
          r.current
        );
      }
      (Cu.displayName = "Tooltip"),
        (Cu.defaultProps = {
          destroyOnClose: !0,
          placement: "top",
          showArrow: !0,
          theme: "default",
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
      function Lu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Nu(Object(n), !0).forEach(function (t) {
                He(e, t, n[t]);
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
      var Au = function (t) {
        var n,
          r = t.style,
          o = t.className,
          a = t.placement,
          i = t.showArrow,
          l = t.theme,
          u = t.children,
          c = t.triggerElement,
          s = t.content,
          f = t.showShadow,
          d = (0, e.useRef)(null),
          p = (0, e.useRef)(null),
          m = (0, e.useRef)(null),
          g = Yl().classPrefix,
          h = (function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              n = $e((0, e.useState)(t), 2),
              r = n[0],
              o = n[1];
            return [
              r,
              {
                on: Tu(function () {
                  return o(!0);
                }),
                off: Tu(function () {
                  return o(!1);
                }),
                set: o,
              },
            ];
          })(),
          v = $e(h, 2),
          y = v[0],
          b = v[1],
          _ = $e((0, e.useState)(null), 2),
          w = _[0],
          E = _[1],
          x = Gl().keepFade;
        (0, e.useEffect)(
          function () {
            d.current &&
              p.current &&
              E(
                (function (e, t, n) {
                  var r = e.getBoundingClientRect(),
                    o = t.getBoundingClientRect(),
                    a = {
                      top: document.documentElement.scrollTop,
                      left: document.documentElement.scrollLeft,
                    };
                  if (r && o) {
                    var i = r.width - o.width;
                    switch (n) {
                      case "top":
                        (a.left += r.left + i / 2),
                          (a.top += r.top - o.height - 16);
                        break;
                      case "bottom":
                        (a.left += r.left + i / 2), (a.top += r.top + r.height);
                    }
                  }
                  return a;
                })(d.current, p.current, a),
              );
          },
          [d.current, p.current, a, y],
        );
        var O, S;
        return e.createElement(
          "div",
          null,
          ((O = u || c),
          (S = { ref: d, onMouseEnter: b.on, onMouseLeave: b.off }),
          e.isValidElement(O)
            ? e.cloneElement(O, Lu({}, S))
            : e.cloneElement(e.createElement("div", null, O), Lu({}, S))),
          y &&
            e.createElement(
              Zl,
              null,
              e.createElement(
                ft,
                Lu(
                  { appear: !0, timeout: { appear: 180 }, in: y, nodeRef: m },
                  ru({ classPrefix: g, fadeAnimation: x }),
                ),
                e.createElement(
                  "div",
                  {
                    className: Xe()(
                      "".concat(g, "-popup"),
                      "".concat(g, "-tooltip"),
                      ((n = {}),
                      He(n, "".concat(g, "-tooltip--").concat(l), l),
                      He(n, "".concat(g, "-tooltip--noshadow"), !f),
                      n),
                      o,
                    ),
                    "data-popper-placement": a,
                    ref: m,
                  },
                  e.createElement(
                    "div",
                    {
                      className: Xe()(
                        "".concat(g, "-popup__content"),
                        He({}, "".concat(g, "-popup__content--arrow"), i),
                      ),
                      style: Lu(
                        {
                          position: "absolute",
                          left: null == w ? void 0 : w.left,
                          top: null == w ? void 0 : w.top,
                        },
                        r,
                      ),
                      ref: p,
                    },
                    s,
                    i &&
                      e.createElement("div", {
                        className: "".concat(g, "-popup__arrow"),
                      }),
                  ),
                ),
              ),
            ),
        );
      };
      (Au.displayName = "Tooltiplite"),
        (Au.defaultProps = {
          placement: "top",
          showArrow: !0,
          showShadow: !0,
          theme: "default",
        });
      var Du = Cu;
      function Mu() {
        var t = $e((0, e.useState)(), 2),
          n = t[0],
          r = t[1];
        return (
          (0, e.useCallback)(function (e) {
            e && r(e);
          }, []),
          [n, r]
        );
      }
      function Ru(e, t) {
        Object.keys(t).forEach(function (n) {
          e.style[n] = t[n];
        });
      }
      function Iu(t, n) {
        var r = Yl().classPrefix,
          o = Gl().keepRipple,
          a = (0, e.useMemo)(
            function () {
              if (!Ql) return null;
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
                  u = parseInt(l.borderWidth, 10),
                  c = u > 0 ? u : 0,
                  s = t.offsetWidth,
                  f = t.offsetHeight;
                null === a.parentNode &&
                  (Ru(a, {
                    position: "absolute",
                    left: "".concat(0 - c, "px"),
                    top: "".concat(0 - c, "px"),
                    width: "".concat(s, "px"),
                    height: "".concat(f, "px"),
                    borderRadius: l.borderRadius,
                    pointerEvents: "none",
                    overflow: "hidden",
                  }),
                  t.appendChild(a));
                var d = document.createElement("div");
                (d.className = "".concat(r, "-ripple__inner")),
                  Ru(d, {
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
      function zu(e, t) {
        Object.keys(t).forEach(function (n) {
          e.style[n] = t[n];
        });
      }
      function Fu(e, t) {
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
      function Uu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Fu(Object(n), !0).forEach(function (t) {
                He(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Fu(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Hu(e) {
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
            u = i.fontSize,
            c =
              null === (r = window) ||
              void 0 === r ||
              null === (o = r.navigator) ||
              void 0 === o
                ? void 0
                : o.userAgent,
            s = /Safari/.test(c) && !/Chrome/.test(c),
            f = /(?=.*iPhone)[?=.*MicroMessenger]/.test(c) && !/Chrome/.test(c),
            d = /Mobile/.test(c);
          if (
            ((!s && !f) ||
              d ||
              (a = {
                transformOrigin: "-1px -1px",
                transform: "scale(".concat(parseInt(u, 10) / 14, ")"),
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
            zu(
              e,
              Uu(
                Uu({}, a),
                {},
                {
                  background: "conic-gradient(from 90deg at 50% 50%,"
                    .concat(m, " 0deg, ")
                    .concat(l, " 360deg)"),
                },
              ),
            );
          } else zu(e, Uu(Uu({}, a), {}, { background: "" }));
        }
      }
      var Wu = function () {
        var t = Yl().classPrefix,
          n = (0, e.useRef)(),
          r = "".concat(t, "-loading__gradient");
        return (
          (0, e.useEffect)(function () {
            Hu(null == n ? void 0 : n.current);
          }, []),
          e.createElement(
            "svg",
            {
              className: Xe()(r, "".concat(t, "-icon-loading")),
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
      function $u(e, t) {
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
      function Bu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $u(Object(n), !0).forEach(function (t) {
                He(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : $u(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Vu = function (t) {
        var n = t.attach,
          r = t.indicator,
          o = t.text,
          a = t.loading,
          i = t.size,
          l = t.delay,
          u = t.fullscreen,
          c = t.preventScrollThrough,
          s = t.showOverlay,
          f = t.content,
          d = t.children,
          p = t.inheritColor,
          m = t.zIndex,
          g = t.className,
          h = t.style,
          v = $e((0, e.useState)(!l && a), 2),
          y = v[0],
          b = v[1],
          _ = Yl().classPrefix,
          w = "".concat(_, "-loading"),
          E = "".concat(_, "-loading--center"),
          x = "".concat(_, "-loading--inherit-color"),
          O = "".concat(_, "-loading--full"),
          S = "".concat(_, "-loading__fullscreen"),
          k = "".concat(_, "-loading--lock"),
          j = "".concat(_, "-loading__overlay"),
          P = "".concat(_, "-loading__parent"),
          C = "".concat(_, "-loading__text");
        (0, e.useEffect)(
          function () {
            var e;
            return (
              l && a
                ? (e = setTimeout(function () {
                    b(a);
                  }, l))
                : b(a),
              function () {
                clearTimeout(e);
              }
            );
          },
          [l, a],
        );
        var T = (0, e.useMemo)(
            function () {
              var e = {};
              return (
                void 0 !== m && (e.zIndex = m),
                ["small", "medium", "large"].includes(i) || (e.fontSize = i),
                h ? Bu(Bu({}, e), h) : e
              );
            },
            [i, m, h],
          ),
          N = {
            large: "".concat(_, "-size-l"),
            small: "".concat(_, "-size-s"),
            medium: "".concat(_, "-size-m"),
          },
          L = Xe()(E, N[i], He({}, x, p), g);
        (0, e.useEffect)(
          function () {
            return (
              c &&
                u &&
                Ql &&
                a &&
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
                          : Kl(e, i) || (n += " ".concat(i)));
                    }
                    e.classList || (e.className = n);
                  }
                })(document.body, k),
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
                          : Kl(e, i) &&
                            (r = r.replace(" ".concat(i, " "), " ")));
                    }
                    e.classList ||
                      (e.className = (r || "").replace(
                        /^[\s﻿]+|[\s﻿]+$/g,
                        "",
                      ));
                  }
                })(document.body, k);
              }
            );
          },
          [a, c, u, k],
        );
        var A = function () {
          var t = e.createElement(Wu, null);
          return (
            r && "boolean" != typeof r && (t = r),
            e.createElement(
              e.Fragment,
              null,
              r ? t : null,
              o ? e.createElement("div", { className: C }, o) : null,
            )
          );
        };
        return u
          ? a
            ? e.createElement(
                "div",
                { className: Xe()(w, S, E, j), style: T },
                e.createElement("div", { className: L }, A()),
              )
            : null
          : f || d
            ? e.createElement(
                "div",
                { className: P },
                f || d,
                y
                  ? e.createElement(
                      "div",
                      { className: Xe()(w, L, O, He({}, j, s)), style: T },
                      A(),
                    )
                  : null,
              )
            : n
              ? e.createElement(
                  Zl,
                  { attach: n },
                  a
                    ? e.createElement(
                        "div",
                        { className: Xe()(w, L, O, He({}, j, s)), style: T },
                        A(),
                      )
                    : null,
                )
              : a
                ? e.createElement(
                    "div",
                    { className: Xe()(w, L), style: T },
                    A(),
                  )
                : null;
      };
      (Vu.displayName = "Loading"),
        (Vu.defaultProps = {
          delay: 0,
          fullscreen: !1,
          indicator: !0,
          inheritColor: !1,
          loading: !0,
          preventScrollThrough: !0,
          showOverlay: !0,
          size: "medium",
        });
      var Xu = Vu,
        qu = [
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
      function Yu(e, t) {
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
      function Gu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Yu(Object(n), !0).forEach(function (t) {
                He(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Yu(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Qu = (0, e.forwardRef)(function (t, n) {
        var r,
          o = t.type,
          a = t.theme,
          i = t.variant,
          l = t.icon,
          u = t.disabled,
          c = t.loading,
          s = t.size,
          f = t.block,
          d = t.ghost,
          p = t.shape,
          m = t.children,
          g = t.content,
          h = t.className,
          v = t.suffix,
          y = t.href,
          b = t.tag,
          _ = t.onClick,
          w = Be(t, qu),
          E = Yl().classPrefix,
          x = $e(Mu(), 2),
          O = x[0],
          S = x[1];
        Iu((null == n ? void 0 : n.current) || O);
        var k = null != g ? g : m,
          j = l;
        c && (j = e.createElement(Xu, { loading: c, inheritColor: !0 }));
        var P = (0, e.useMemo)(
            function () {
              return a || ("base" === i ? "primary" : "default");
            },
            [a, i],
          ),
          C = (0, e.useMemo)(
            function () {
              return !b && y ? "a" : !b && u ? "div" : b || "button";
            },
            [b, y, u],
          );
        return e.createElement(
          C,
          Gu(
            Gu({}, w),
            {},
            {
              href: y,
              type: o,
              ref: n || S,
              disabled: u || c,
              className: Xe()(
                h,
                [
                  "".concat(E, "-button"),
                  "".concat(E, "-button--theme-").concat(P),
                  "".concat(E, "-button--variant-").concat(i),
                ],
                ((r = {}),
                He(
                  r,
                  "".concat(E, "-button--shape-").concat(p),
                  "rectangle" !== p,
                ),
                He(r, "".concat(E, "-button--ghost"), d),
                He(r, "".concat(E, "-is-loading"), c),
                He(r, "".concat(E, "-is-disabled"), u),
                He(r, "".concat(E, "-size-s"), "small" === s),
                He(r, "".concat(E, "-size-l"), "large" === s),
                He(r, "".concat(E, "-size-full-width"), f),
                r),
              ),
              onClick: u || c ? void 0 : _,
            },
          ),
          e.createElement(
            e.Fragment,
            null,
            j,
            k &&
              e.createElement(
                "span",
                { className: "".concat(E, "-button__text") },
                k,
              ),
            v &&
              e.createElement(
                "span",
                { className: "".concat(E, "-button__suffix") },
                v,
              ),
          ),
        );
      });
      (Qu.displayName = "Button"),
        (Qu.defaultProps = {
          block: !1,
          ghost: !1,
          loading: !1,
          shape: "rectangle",
          size: "medium",
          type: "button",
          variant: "base",
        });
      var Ku = Qu;
      let Zu;
      !(function (e) {
        (e.Succ = "succ"), (e.Busy = "busy"), (e.Error = "error");
      })(Zu || (Zu = {}));
      const Ju = [
          "youtube.com",
          "github.com",
          "pubmed.ncbi.nlm.nih.gov",
          "facebook.com",
          "twitter.com",
          "reddit.com",
          "openai.com",
        ],
        ec = {};
      var tc, nc;
      function rc() {
        return (
          (rc = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          rc.apply(this, arguments)
        );
      }
      const oc = function (t) {
        return e.createElement(
          "svg",
          rc(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            t,
          ),
          tc ||
            (tc = e.createElement("rect", {
              x: 4,
              y: 6,
              width: 40,
              height: 36,
              rx: 3,
              stroke: "#333",
              strokeWidth: 4,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })),
          nc ||
            (nc = e.createElement("path", {
              d: "M4 14h40M20 24h16M20 32h16M12 24h2M12 32h2",
              stroke: "#333",
              strokeWidth: 4,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })),
        );
      };
      var ac, ic;
      function lc() {
        return (
          (lc = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          lc.apply(this, arguments)
        );
      }
      const uc = function (t) {
        return e.createElement(
          "svg",
          lc(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            t,
          ),
          ac ||
            (ac = e.createElement("path", {
              d: "M28.286 37h11.428M42 42l-2.286-5L42 42Zm-16 0 2.286-5L26 42Zm2.286-5L34 24l5.714 13H28.286ZM16 6l1 3M6 11h22M10 16s1.79 6.26 6.263 9.74C20.737 29.216 28 32 28 32",
              stroke: "#333",
              strokeWidth: 4,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })),
          ic ||
            (ic = e.createElement("path", {
              d: "M24 11s-1.79 8.217-6.263 12.783C13.263 28.348 6 32 6 32",
              stroke: "#333",
              strokeWidth: 4,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })),
        );
      };
      var cc;
      function sc() {
        return (
          (sc = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          sc.apply(this, arguments)
        );
      }
      const fc = function (t) {
        return e.createElement(
          "svg",
          sc(
            {
              className: "icon-translate_svg__icon",
              viewBox: "0 0 1024 1024",
              xmlns: "http://www.w3.org/2000/svg",
              width: 200,
              height: 200,
            },
            t,
          ),
          cc ||
            (cc = e.createElement("path", {
              d: "M213.333 640v85.333a85.333 85.333 0 0 0 78.934 85.12l6.4.214h128V896h-128A170.667 170.667 0 0 1 128 725.333V640h85.333zM768 426.667 955.733 896h-91.946l-51.243-128H638.037L586.88 896h-91.904l187.69-469.333H768zM725.333 549.76l-53.205 132.907h106.325l-53.12-132.907zm-384-464.427v85.334H512v298.666H341.333v128H256v-128H85.333V170.667H256V85.333h85.333zm384 42.667A170.667 170.667 0 0 1 896 298.667V384h-85.333v-85.333a85.333 85.333 0 0 0-85.334-85.334h-128V128h128zM256 256h-85.333v128H256V256zm170.667 0h-85.334v128h85.334V256z",
              fill: "#fff",
            })),
        );
      };
      let dc;
      !(function (e) {
        (e.Source = "Source"), (e.Target = "Target"), (e.Together = "Together");
      })(dc || (dc = {}));
      var pc = oa(Object.keys, Object),
        mc = ia,
        gc = pc,
        hc = Object.prototype.hasOwnProperty;
      var vc = function (e) {
          if (!mc(e)) return gc(e);
          var t = [];
          for (var n in Object(e))
            hc.call(e, n) && "constructor" != n && t.push(n);
          return t;
        },
        yc = ao(or, "DataView"),
        bc = io,
        _c = ao(or, "Promise"),
        wc = ao(or, "Set"),
        Ec = ao(or, "WeakMap"),
        xc = hr,
        Oc = Xr,
        Sc = "[object Map]",
        kc = "[object Promise]",
        jc = "[object Set]",
        Pc = "[object WeakMap]",
        Cc = "[object DataView]",
        Tc = Oc(yc),
        Nc = Oc(bc),
        Lc = Oc(_c),
        Ac = Oc(wc),
        Dc = Oc(Ec),
        Mc = xc;
      ((yc && Mc(new yc(new ArrayBuffer(1))) != Cc) ||
        (bc && Mc(new bc()) != Sc) ||
        (_c && Mc(_c.resolve()) != kc) ||
        (wc && Mc(new wc()) != jc) ||
        (Ec && Mc(new Ec()) != Pc)) &&
        (Mc = function (e) {
          var t = xc(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? Oc(n) : "";
          if (r)
            switch (r) {
              case Tc:
                return Cc;
              case Nc:
                return Sc;
              case Lc:
                return kc;
              case Ac:
                return jc;
              case Dc:
                return Pc;
            }
          return t;
        });
      var Rc = Mc;
      var Ic = function (e, t) {
        for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
        return e;
      };
      var zc = function (e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length;
            ++n < r && !1 !== t(e[n], n, e);

          );
          return e;
        },
        Fc = Oi,
        Uc = vc,
        Hc = Ua;
      var Wc = function (e) {
          return Hc(e) ? Fc(e) : Uc(e);
        },
        $c = gi,
        Bc = Wc;
      var Vc = function (e, t) {
          return e && $c(t, Bc(t), e);
        },
        Xc = gi,
        qc = Li;
      var Yc = function (e, t) {
        return e && Xc(t, qc(t), e);
      };
      var Gc = function () {
          return [];
        },
        Qc = function (e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length, o = 0, a = [];
            ++n < r;

          ) {
            var i = e[n];
            t(i, n, e) && (a[o++] = i);
          }
          return a;
        },
        Kc = Gc,
        Zc = Object.prototype.propertyIsEnumerable,
        Jc = Object.getOwnPropertySymbols,
        es = Jc
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  Qc(Jc(e), function (t) {
                    return Zc.call(e, t);
                  }));
            }
          : Kc,
        ts = gi,
        ns = es;
      var rs = function (e, t) {
          return ts(e, ns(e), t);
        },
        os = Ic,
        as = ui,
        is = es,
        ls = Gc,
        us = Object.getOwnPropertySymbols
          ? function (e) {
              for (var t = []; e; ) os(t, is(e)), (e = as(e));
              return t;
            }
          : ls,
        cs = gi,
        ss = us;
      var fs = function (e, t) {
          return cs(e, ss(e), t);
        },
        ds = Ic,
        ps = vr;
      var ms = function (e, t, n) {
          var r = t(e);
          return ps(e) ? r : ds(r, n(e));
        },
        gs = ms,
        hs = es,
        vs = Wc;
      var ys = function (e) {
          return gs(e, vs, hs);
        },
        bs = ms,
        _s = us,
        ws = Li;
      var Es = function (e) {
          return bs(e, ws, _s);
        },
        xs = Object.prototype.hasOwnProperty;
      var Os = function (e) {
          var t = e.length,
            n = new e.constructor(t);
          return (
            t &&
              "string" == typeof e[0] &&
              xs.call(e, "index") &&
              ((n.index = e.index), (n.input = e.input)),
            n
          );
        },
        Ss = ti;
      var ks = function (e, t) {
          var n = t ? Ss(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.byteLength);
        },
        js = /\w*$/;
      var Ps = function (e) {
          var t = new e.constructor(e.source, js.exec(e));
          return (t.lastIndex = e.lastIndex), t;
        },
        Cs = ar ? ar.prototype : void 0,
        Ts = Cs ? Cs.valueOf : void 0;
      var Ns = ti,
        Ls = ks,
        As = Ps,
        Ds = function (e) {
          return Ts ? Object(Ts.call(e)) : {};
        },
        Ms = ri;
      var Rs = function (e, t, n) {
          var r = e.constructor;
          switch (t) {
            case "[object ArrayBuffer]":
              return Ns(e);
            case "[object Boolean]":
            case "[object Date]":
              return new r(+e);
            case "[object DataView]":
              return Ls(e, n);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
              return Ms(e, n);
            case "[object Map]":
            case "[object Set]":
              return new r();
            case "[object Number]":
            case "[object String]":
              return new r(e);
            case "[object RegExp]":
              return As(e);
            case "[object Symbol]":
              return Ds(e);
          }
        },
        Is = Rc,
        zs = yr;
      var Fs = function (e) {
          return zs(e) && "[object Map]" == Is(e);
        },
        Us = ra,
        Hs = ma.exports,
        Ws = Hs && Hs.isMap,
        $s = Ws ? Us(Ws) : Fs,
        Bs = Rc,
        Vs = yr;
      var Xs = function (e) {
          return Vs(e) && "[object Set]" == Bs(e);
        },
        qs = ra,
        Ys = ma.exports,
        Gs = Ys && Ys.isSet,
        Qs = Gs ? qs(Gs) : Xs,
        Ks = Za,
        Zs = zc,
        Js = ja,
        ef = Vc,
        tf = Yc,
        nf = Ja.exports,
        rf = oi,
        of = rs,
        af = fs,
        lf = ys,
        uf = Es,
        cf = Rc,
        sf = Os,
        ff = Rs,
        df = di,
        pf = vr,
        mf = la.exports,
        gf = $s,
        hf = Ir,
        vf = Qs,
        yf = Wc,
        bf = Li,
        _f = "[object Arguments]",
        wf = "[object Function]",
        Ef = "[object Object]",
        xf = {};
      (xf[_f] =
        xf["[object Array]"] =
        xf["[object ArrayBuffer]"] =
        xf["[object DataView]"] =
        xf["[object Boolean]"] =
        xf["[object Date]"] =
        xf["[object Float32Array]"] =
        xf["[object Float64Array]"] =
        xf["[object Int8Array]"] =
        xf["[object Int16Array]"] =
        xf["[object Int32Array]"] =
        xf["[object Map]"] =
        xf["[object Number]"] =
        xf["[object Object]"] =
        xf["[object RegExp]"] =
        xf["[object Set]"] =
        xf["[object String]"] =
        xf["[object Symbol]"] =
        xf["[object Uint8Array]"] =
        xf["[object Uint8ClampedArray]"] =
        xf["[object Uint16Array]"] =
        xf["[object Uint32Array]"] =
          !0),
        (xf["[object Error]"] =
          xf["[object Function]"] =
          xf["[object WeakMap]"] =
            !1);
      var Of = function e(t, n, r, o, a, i) {
          var l,
            u = 1 & n,
            c = 2 & n,
            s = 4 & n;
          if ((r && (l = a ? r(t, o, a, i) : r(t)), void 0 !== l)) return l;
          if (!hf(t)) return t;
          var f = pf(t);
          if (f) {
            if (((l = sf(t)), !u)) return rf(t, l);
          } else {
            var d = cf(t),
              p = d == wf || "[object GeneratorFunction]" == d;
            if (mf(t)) return nf(t, u);
            if (d == Ef || d == _f || (p && !a)) {
              if (((l = c || p ? {} : df(t)), !u))
                return c ? af(t, tf(l, t)) : of(t, ef(l, t));
            } else {
              if (!xf[d]) return a ? t : {};
              l = ff(t, d, u);
            }
          }
          i || (i = new Ks());
          var m = i.get(t);
          if (m) return m;
          i.set(t, l),
            vf(t)
              ? t.forEach(function (o) {
                  l.add(e(o, n, r, o, t, i));
                })
              : gf(t) &&
                t.forEach(function (o, a) {
                  l.set(a, e(o, n, r, a, t, i));
                });
          var g = f ? void 0 : (s ? (c ? uf : lf) : c ? bf : yf)(t);
          return (
            Zs(g || t, function (o, a) {
              g && (o = t[(a = o)]), Js(l, a, e(o, n, r, a, t, i));
            }),
            l
          );
        },
        Sf = vr,
        kf = wr,
        jf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Pf = /^\w*$/;
      var Cf = function (e, t) {
          if (Sf(e)) return !1;
          var n = er(e);
          return (
            !(
              "number" != n &&
              "symbol" != n &&
              "boolean" != n &&
              null != e &&
              !kf(e)
            ) ||
            Pf.test(e) ||
            !jf.test(e) ||
            (null != t && e in Object(t))
          );
        },
        Tf = ta;
      function Nf(e, t) {
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
        return (n.cache = new (Nf.Cache || Tf)()), n;
      }
      Nf.Cache = Tf;
      var Lf = Nf;
      var Af =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Df = /\\(\\)?/g,
        Mf = (function (e) {
          var t = Lf(e, function (e) {
              return 500 === n.size && n.clear(), e;
            }),
            n = t.cache;
          return t;
        })(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(Af, function (e, n, r, o) {
              t.push(r ? o.replace(Df, "$1") : n || e);
            }),
            t
          );
        }),
        Rf = vr,
        If = Cf,
        zf = Mf,
        Ff = Tr;
      var Uf = function (e, t) {
          return Rf(e) ? e : If(e, t) ? [e] : zf(Ff(e));
        },
        Hf = wr;
      var Wf = function (e) {
          if ("string" == typeof e || Hf(e)) return e;
          var t = e + "";
          return "0" == t && 1 / e == -Infinity ? "-0" : t;
        },
        $f = Uf,
        Bf = Wf;
      var Vf = function (e, t) {
          for (var n = 0, r = (t = $f(t, e)).length; null != e && n < r; )
            e = e[Bf(t[n++])];
          return n && n == r ? e : void 0;
        },
        Xf = Ma,
        qf = vr,
        Yf = ar ? ar.isConcatSpreadable : void 0;
      var Gf = Ic,
        Qf = function (e) {
          return qf(e) || Xf(e) || !!(Yf && e && e[Yf]);
        };
      var Kf = function e(t, n, r, o, a) {
          var i = -1,
            l = t.length;
          for (r || (r = Qf), a || (a = []); ++i < l; ) {
            var u = t[i];
            n > 0 && r(u)
              ? n > 1
                ? e(u, n - 1, r, o, a)
                : Gf(a, u)
              : o || (a[a.length] = u);
          }
          return a;
        },
        Zf = Kf;
      var Jf = function (e) {
          return (null == e ? 0 : e.length) ? Zf(e, 1) : [];
        },
        ed = Ri,
        td = Hi;
      var nd = Vf,
        rd = Ln;
      var od = Uf,
        ad = function (e) {
          var t = null == e ? 0 : e.length;
          return t ? e[t - 1] : void 0;
        },
        id = function (e, t) {
          return t.length < 2 ? e : nd(e, rd(t, 0, -1));
        },
        ld = Wf;
      var ud = rl;
      var cd = Er,
        sd = Of,
        fd = function (e, t) {
          return (t = od(t, e)), null == (e = id(e, t)) || delete e[ld(ad(t))];
        },
        dd = Uf,
        pd = gi,
        md = function (e) {
          return ud(e) ? void 0 : e;
        },
        gd = Es,
        hd = (function (e) {
          return td(ed(e, void 0, Jf), e + "");
        })(function (e, t) {
          var n = {};
          if (null == e) return n;
          var r = !1;
          (t = cd(t, function (t) {
            return (t = dd(t, e)), r || (r = t.length > 1), t;
          })),
            pd(e, gd(e), n),
            r && (n = sd(n, 7, md));
          for (var o = t.length; o--; ) fd(n, t[o]);
          return n;
        });
      function vd(e, t) {
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
      function yd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? vd(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : vd(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var bd = {
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
                d: "M6.46 12.46l-.92-.92L9.08 8 5.54 4.46l.92-.92L10.92 8l-4.46 4.46z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        _d = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            Pe,
            yd(yd({}, t), {}, { id: "chevron-right", ref: n, icon: bd }),
          );
        });
      function wd(e, t) {
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
      function Ed(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? wd(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : wd(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      _d.displayName = "ChevronRightIcon";
      var xd = {
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
                d: "M9.54 3.54l.92.92L6.92 8l3.54 3.54-.92.92L5.08 8l4.46-4.46z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        Od = (0, e.forwardRef)(function (t, n) {
          return (0, e.createElement)(
            Pe,
            Ed(Ed({}, t), {}, { id: "chevron-left", ref: n, icon: xd }),
          );
        });
      Od.displayName = "ChevronLeftIcon";
      var Sd = [
        "layout",
        "dashed",
        "align",
        "className",
        "style",
        "children",
        "content",
      ];
      function kd(e, t) {
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
      function jd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? kd(Object(n), !0).forEach(function (t) {
                He(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : kd(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Pd = function (t) {
        var n,
          r = t.layout,
          o = t.dashed,
          a = t.align,
          i = t.className,
          l = t.style,
          u = t.children,
          c = t.content,
          s = Be(t, Sd),
          f = Yl().classPrefix,
          d = c || u,
          p = "vertical" !== r && !!d,
          m = Xe()(
            "".concat(f, "-divider"),
            i,
            (He((n = {}), "".concat(f, "-divider--").concat(r), r),
            He(n, "".concat(f, "-divider--dashed"), !!o),
            He(n, "".concat(f, "-divider--with-text"), p),
            He(n, "".concat(f, "-divider--with-text-").concat(a), p),
            n),
          );
        return e.createElement(
          "div",
          jd(jd({}, s), {}, { className: m, style: l }),
          p
            ? e.createElement(
                "span",
                { className: "".concat(f, "-divider__inner-text") },
                d,
              )
            : null,
        );
      };
      (Pd.displayName = "Divider"),
        (Pd.defaultProps = {
          align: "center",
          dashed: !1,
          layout: "horizontal",
        });
      var Cd = Pd;
      function Td(e) {
        return "number" == typeof e ? "".concat(e, "px") : e;
      }
      function Nd(e, t) {
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
      function Ld(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Nd(Object(n), !0).forEach(function (t) {
                He(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Nd(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Ad = (0, e.forwardRef)(function (t, n) {
        var r,
          o = t.children,
          a = t.className,
          i = t.active,
          l = t.disabled,
          u = t.value,
          c = t.theme,
          s = t.prefixIcon,
          f = t.maxColumnWidth,
          d = t.minColumnWidth,
          p = t.onClick,
          m = t.style,
          g = t.isSubmenu,
          h = Yl().classPrefix,
          v = $e(Mu(), 2),
          y = v[0],
          b = v[1];
        Iu(g ? null : (null == n ? void 0 : n.current) || y);
        return e.createElement(
          e.Fragment,
          null,
          e.createElement(
            "li",
            {
              className: Xe()(
                a,
                "".concat(h, "-dropdown__item--theme-").concat(c),
                ((r = {}),
                He(r, "".concat(h, "-dropdown__item--active"), i),
                He(r, "".concat(h, "-dropdown__item--disabled"), l),
                r),
              ),
              onClick: function (e) {
                null == p || p(u, e);
              },
              style: Ld({ maxWidth: Td(f), minWidth: Td(d) }, m),
              ref: n || b,
            },
            s
              ? e.createElement(
                  "div",
                  { className: "".concat(h, "-dropdown__item-icon") },
                  s,
                )
              : null,
            o,
          ),
        );
      });
      function Dd(e, t) {
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
      (Ad.displayName = "DropdownItem"),
        (Ad.defaultProps = {
          active: !1,
          disabled: !1,
          divider: !1,
          theme: "default",
        });
      var Md = function (t) {
        var n,
          r,
          o,
          a = t.options,
          i = void 0 === a ? [] : a,
          l = t.maxHeight,
          u = void 0 === l ? 300 : l,
          c = t.minColumnWidth,
          s = void 0 === c ? 10 : c,
          f = t.maxColumnWidth,
          d = void 0 === f ? 160 : f,
          p = t.direction,
          m = Yl().classPrefix,
          g = "".concat(m, "-dropdown"),
          h = "".concat(g, "__menu"),
          v =
            ((n = { ChevronRightIcon: _d, ChevronLeftIcon: Od }),
            (r = Yl().icon),
            (o = {}),
            Object.keys(n).forEach(function (e) {
              o[e] = (null == r ? void 0 : r[e]) || n[e];
            }),
            o),
          y = v.ChevronRightIcon,
          b = v.ChevronLeftIcon;
        return e.createElement(
          "div",
          {
            className: Xe()(h, "".concat(h, "--").concat(p)),
            style: { maxHeight: "".concat(u, "px") },
          },
          (function n(r) {
            var o,
              a,
              i = [];
            return (
              null === (o = r.forEach) ||
                void 0 === o ||
                o.call(r, function (r, o) {
                  var l,
                    u = (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? Dd(Object(n), !0).forEach(function (t) {
                              He(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n),
                              )
                            : Dd(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t),
                                );
                              });
                      }
                      return e;
                    })({}, r);
                  u.children
                    ? ((u.children = n(u.children)),
                      (a = e.createElement(
                        "div",
                        { key: o },
                        e.createElement(
                          Ad,
                          {
                            className: Xe()(
                              "".concat(g, "__item"),
                              "".concat(g, "__item--suffix"),
                            ),
                            value: u.value,
                            theme: u.theme,
                            active: u.active,
                            prefixIcon: u.prefixIcon,
                            disabled: u.disabled,
                            minColumnWidth: s,
                            maxColumnWidth: d,
                            isSubmenu: !0,
                          },
                          e.createElement(
                            "div",
                            { className: "".concat(g, "__item-content") },
                            "right" === p
                              ? e.createElement(
                                  e.Fragment,
                                  null,
                                  e.createElement(
                                    "span",
                                    { className: "".concat(g, "__item-text") },
                                    u.content,
                                  ),
                                  e.createElement(y, {
                                    className: "".concat(g, "__item-direction"),
                                    size: "16",
                                  }),
                                )
                              : e.createElement(
                                  e.Fragment,
                                  null,
                                  e.createElement(b, {
                                    className: "".concat(g, "__item-direction"),
                                    size: "16",
                                  }),
                                  e.createElement(
                                    "span",
                                    { className: "".concat(g, "__item-text") },
                                    u.content,
                                  ),
                                ),
                          ),
                          e.createElement(
                            "div",
                            {
                              className: Xe()(
                                "".concat(g, "__submenu"),
                                ((l = {}),
                                He(
                                  l,
                                  "".concat(g, "__submenu--disabled"),
                                  u.disabled,
                                ),
                                He(l, "".concat(g, "__submenu--").concat(p), p),
                                l),
                              ),
                              style: { top: "".concat(30 * o, "px") },
                            },
                            e.createElement("ul", null, u.children),
                          ),
                        ),
                        u.divider ? e.createElement(Cd, null) : null,
                      )))
                    : (a = e.createElement(
                        "div",
                        { key: o },
                        e.createElement(
                          Ad,
                          {
                            className: "".concat(g, "__item"),
                            value: u.value,
                            theme: u.theme,
                            active: u.active,
                            prefixIcon: u.prefixIcon,
                            disabled: u.disabled,
                            minColumnWidth: s,
                            maxColumnWidth: d,
                            onClick:
                              u.disabled || u.children
                                ? function () {
                                    return null;
                                  }
                                : function (e, n) {
                                    return (function (e) {
                                      var n,
                                        r,
                                        o = e.data,
                                        a = e.context;
                                      null == o ||
                                        null === (n = o.onClick) ||
                                        void 0 === n ||
                                        n.call(o, o, a),
                                        null === (r = t.onClick) ||
                                          void 0 === r ||
                                          r.call(t, o, a);
                                    })({ data: u, context: n });
                                  },
                          },
                          e.createElement(
                            "span",
                            { className: "".concat(g, "__item-text") },
                            u.content,
                          ),
                        ),
                        u.divider ? e.createElement(Cd, null) : null,
                      ));
                  i.push(a);
                }),
              i
            );
          })(i),
        );
      };
      function Rd(e, t) {
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
      function Id(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Rd(Object(n), !0).forEach(function (t) {
                He(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Rd(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      Md.displayName = "DropdownMenu";
      var zd = function t(n) {
        if (!n) return [];
        if (n.type === Md) {
          var r = n.props.children;
          if (Array.isArray(r)) return t(r);
        }
        return e.Children.toArray(n)
          .map(function (e) {
            var n,
              r,
              o = null === (n = e.props) || void 0 === n ? void 0 : n.children,
              a = null === (r = e.props) || void 0 === r ? void 0 : r.content;
            if (Array.isArray(o)) {
              var i,
                l,
                u =
                  null == o || null === (i = o.filter) || void 0 === i
                    ? void 0
                    : i.call(o, function (e) {
                        return ![Ad, Md].includes(e.type);
                      }),
                c =
                  null == o || null === (l = o.filter) || void 0 === l
                    ? void 0
                    : l.call(o, function (e) {
                        return [Ad, Md].includes(e.type);
                      });
              return Id(
                Id({}, e.props),
                {},
                { content: u || o, children: c.length > 0 ? t(o[1]) : null },
              );
            }
            return Id(Id({}, e.props), {}, { content: o || a, children: null });
          })
          .filter(function (e) {
            return !!e.content;
          });
      };
      function Fd(t, n) {
        return (0, e.useMemo)(
          function () {
            return n && n.length > 0
              ? n
              : (e.Children.forEach(t, function (t) {
                  e.isValidElement(t) &&
                    t.type === Md &&
                    t.props.children &&
                    (r = t.props.children);
                }),
                zd(r));
            var r;
          },
          [n, t],
        );
      }
      function Ud(e, t) {
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
      function Hd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ud(Object(n), !0).forEach(function (t) {
                He(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ud(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Wd = function (t) {
        var n = t.popupProps,
          r = void 0 === n ? {} : n,
          o = t.disabled,
          a = t.placement,
          i = t.trigger,
          l = t.className,
          u = t.children,
          c = t.hideAfterItemClick,
          s = t.options,
          f = t.style,
          d = e.Children.toArray(u),
          p = Yl().classPrefix,
          m = $e((0, e.useState)(!1), 2),
          g = m[0],
          h = m[1],
          v = "".concat(p, "-dropdown"),
          y = Fd(d, s),
          b = e.createElement(
            Md,
            Hd(
              Hd({}, t),
              {},
              {
                options: y,
                onClick: function (e, n) {
                  var o, a;
                  c &&
                    (h(!1),
                    null == r ||
                      null === (a = r.onVisibleChange) ||
                      void 0 === a ||
                      a.call(r, !1, n));
                  null == t ||
                    null === (o = t.onClick) ||
                    void 0 === o ||
                    o.call(t, e, n);
                },
              },
            ),
          ),
          _ = Hd(
            Hd(
              {
                disabled: o,
                placement: a,
                trigger: i,
                showArrow: !1,
                content: b,
              },
              hd(r, "onVisibleChange"),
            ),
            {},
            {
              overlayInnerClassName: Xe()(
                v,
                l,
                null == r ? void 0 : r.overlayInnerClassName,
              ),
              overlayInnerStyle: f,
            },
          );
        return e.createElement(
          Su,
          Hd(
            {
              expandAnimation: !0,
              destroyOnClose: !0,
              visible: g,
              onVisibleChange: function (e, t) {
                var n;
                h(e),
                  null == r ||
                    null === (n = r.onVisibleChange) ||
                    void 0 === n ||
                    n.call(r, e, t);
              },
            },
            _,
          ),
          null == d ? void 0 : d[0],
        );
      };
      (Wd.DropdownItem = Ad),
        (Wd.DropdownMenu = Md),
        (Wd.displayName = "Dropdown"),
        (Wd.defaultProps = {
          direction: "right",
          hideAfterItemClick: !0,
          maxColumnWidth: 100,
          maxHeight: 300,
          minColumnWidth: 10,
          placement: "bottom-left",
          trigger: "hover",
        });
      var $d = Wd;
      function Bd() {
        return (
          (Bd = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Bd.apply(this, arguments)
        );
      }
      const { DropdownMenu: Vd, DropdownItem: Xd } = $d,
        qd = ({
          children: t,
          placement: n = "left",
          options: r,
          value: o = "",
          title: a = "",
          renderItem: i,
          onChange: l,
          ...u
        }) => {
          const [c, s] = (0, e.useState)(!1);
          return (
            (0, e.useEffect)(() => {
              if (a && c) {
                const e = document
                    .getElementById(window._TRANSMART_CTX_SHADOW_ROOT)
                    .shadowRoot.querySelector(`.${a}`),
                  t = "popup-selector-title";
                if (e && !e.getElementsByClassName(t).length) {
                  const n = document.createElement("div");
                  (n.textContent = a), n.classList.add(t), e.prepend(n);
                }
              }
            }, [a, c]),
            e.createElement(
              $d,
              Bd(
                {
                  className:
                    (a ? a + " " : "") +
                    "trans-ctx--popup-selector " +
                    ((u && u.className) || ""),
                  placement: n,
                  hideAfterItemClick: !1,
                  popupProps: { visible: c, attach: te, onVisibleChange: s },
                  onClick: (e) => (null == l ? void 0 : l(e.value)),
                },
                u,
              ),
              t,
              e.createElement(
                Vd,
                null,
                null == r
                  ? void 0
                  : r.map((t) =>
                      e.createElement(
                        Xd,
                        {
                          key: t.value.toString(),
                          value: t.value,
                          active: t.value === o,
                        },
                        i ? i(t) : t.content,
                      ),
                    ),
              ),
            )
          );
        },
        Yd = (0, e.memo)(qd);
      const Gd = [
          { content: "仅显示译文", value: dc.Target },
          { content: "双语对照", value: dc.Together },
        ],
        Qd = ({ langList: t }) => {
          const [n, r] = (0, e.useState)(!1),
            [o, a] = (0, e.useState)(!1),
            [i, l] = (0, e.useState)(!1),
            [u, c] = (0, e.useState)(!1),
            [s, f] = (0, e.useState)(!1),
            [d, p] = (0, e.useState)(dc.Together),
            [m, g] = (0, e.useState)(),
            [h, v] = (0, e.useState)(),
            [_, w] = (0, e.useState)(),
            [x, O] = (0, e.useState)([]),
            [S, k] = (0, e.useState)([]),
            [P, C] = (0, e.useState)(!1),
            N = (0, e.useMemo)(() => re(), []);
          (0, e.useEffect)(() => {
            try {
              chrome.storage.sync.get(null, ({ tgtHighlight: e }) => {
                C(e);
              });
            } catch (e) {
              C(!1);
            }
          }, []),
            (0, e.useEffect)(() => {
              N &&
                le({
                  type: "CHANGE_SHOW_FUNC",
                  showFunc: d,
                  pageSourceLang: m,
                  pageTargetLang: h,
                  isPageTranslated: n,
                  translateLock: i,
                });
            }, [n, i, N, d, m, h]);
          const L = (0, e.useCallback)(() => {
              c(!1),
                r(!1),
                K("source"),
                S.forEach((e) => {
                  e.element.placeholder = e.source;
                }),
                chrome.storage.sync.set({ PAGE_TRANSLATE_SWITCHER: !1 }),
                N && le({ type: "CLOSE_PAGE_TRANSLATE" });
            }, [S, N]),
            A = (0, e.useCallback)(
              (e) => {
                const t = e.data;
                if ("TRANSMART_CRX" !== t.type) return;
                const {
                  type: n,
                  showFunc: o,
                  pageSourceLang: a,
                  pageTargetLang: i,
                  isPageTranslated: u,
                  translateLock: c,
                } = t.payload;
                switch (n) {
                  case "CLOSE_PAGE_TRANSLATE":
                    L();
                    break;
                  case "CHANGE_SHOW_FUNC":
                    _e(o), fe(a), de(i), r(u), l(c);
                }
              },
              [L],
            );
          (0, e.useEffect)(
            () => (
              N || window.addEventListener("message", A),
              () => {
                window.removeEventListener("message", A);
              }
            ),
            [N, A],
          );
          const D = async (e) => {
              let t = [];
              t =
                e && X(S)
                  ? S.map(
                      (e) => ((e.element.__ORIGIN_TEXT = e.source), e.element),
                    )
                  : (() => {
                      const e = ee("[placeholder]").filter(
                        (e) =>
                          !e.hasAttribute(E) && !(null == e || !e.placeholder),
                      );
                      return (
                        e.forEach((e) => {
                          e.setAttribute(E, "");
                        }),
                        e
                      );
                    })();
              const n = async (e) => {
                const t = await Promise.all(
                    e.map(async (e) => {
                      var t, n;
                      const r = e.__ORIGIN_TEXT || e.placeholder;
                      let o = m;
                      try {
                        var a;
                        const t = await j({ header: { fn: b }, text: r });
                        if (
                          (null == t || null === (a = t.header) || void 0 === a
                            ? void 0
                            : a.ret_code) === Zu.Busy ||
                          !o
                        )
                          return {
                            element: e,
                            succ: !1,
                            source: r,
                            target: void 0,
                            sourceLang: m,
                            targetLang: h,
                          };
                      } catch (e) {}
                      if (o === h)
                        return {
                          element: e,
                          succ: !0,
                          source: r,
                          target: r,
                          sourceLang: o,
                          targetLang: h,
                        };
                      if (oe(r) || ae(r) || ie(r))
                        return {
                          element: e,
                          succ: !0,
                          source: r,
                          target: r,
                          sourceLang: o,
                          targetLang: h,
                        };
                      const i = await j({
                        header: { fn: y },
                        source: { lang: o, text_block: r },
                        target: { lang: h },
                      });
                      return {
                        element: e,
                        succ:
                          (null == i || null === (t = i.header) || void 0 === t
                            ? void 0
                            : t.ret_code) === Zu.Succ ||
                          (null == i || null === (n = i.header) || void 0 === n
                            ? void 0
                            : n.ret_code) !== Zu.Busy,
                        source: r,
                        target: (null == i ? void 0 : i.auto_translation) || r,
                        sourceLang: o,
                        targetLang: h,
                      };
                    }),
                  ),
                  r = t.filter((e) => e.succ);
                if (X(r)) {
                  const e = r.reduce((e, t) => {
                    const n = e.findIndex((e) => e.element === t.element);
                    return n > -1 ? (e[n] = t) : e.push(t), e;
                  }, S);
                  k([...e]);
                }
                const o = t.filter((e) => !e.succ).map((e) => e.element);
                X(o) && (await n(o));
              };
              X(t) && (await n(t));
            },
            M = (e) =>
              new Promise((r) => {
                let o = [];
                var a;
                if (
                  (e && X(x)
                    ? (o = x
                        .filter((e) => !!e && !!e.node)
                        .map((e) => ((e.node.__ORIGIN_TEXT = e.source), e)))
                    : ((a = ((e) => {
                        const t = [...J(document.body, e)];
                        return "en" === e
                          ? t.filter((e) => e.textContent.length > 1)
                          : t;
                      })(m)),
                      (o = a.filter((e) => {
                        const t = [
                          /^[-!;.'’]+$/,
                          /^#1#(:)?$/,
                          /^\$\d+\.?\d*$/,
                          /^\d+:\d+$/,
                          /^\d+K$/,
                          /^\d+(\.\d+)?%$/,
                        ];
                        return (
                          !e.source ||
                          !t.some((t) => new RegExp(t, "g").test(e.source))
                        );
                      }))),
                  !X(o))
                )
                  return void r(!0);
                const i = async (e, o = 1) => {
                  const a = await Promise.all(
                      e.map(async (e) => {
                        var n, r, o, a, i;
                        let {
                          sourcelang: l,
                          source: u,
                          textContent: c,
                          codes: d,
                        } = e;
                        if ((s || f(!0), !c || oe(c) || ae(c) || ie(c)))
                          return {
                            ...e,
                            succ: !0,
                            source: u,
                            target: u,
                            sourcelang: l,
                            targetlang: h,
                          };
                        if (!ce(u))
                          return {
                            ...e,
                            succ: !0,
                            source: u,
                            target: u,
                            sourcelang: m,
                            targetlang: h,
                          };
                        if (!l) {
                          var p;
                          const n = { header: { fn: b }, text: Y(c) },
                            r = await j(n);
                          if (
                            (null == r ||
                            null === (p = r.header) ||
                            void 0 === p
                              ? void 0
                              : p.ret_code) === Zu.Busy ||
                            null == r ||
                            !r.language
                          )
                            return {
                              ...e,
                              succ: !1,
                              source: u,
                              target: void 0,
                              sourcelang: m,
                              targetlang: h,
                            };
                          if ((null == r ? void 0 : r.language) === h)
                            return {
                              ...e,
                              succ: !0,
                              source: u,
                              target: u,
                              sourcelang: r.language,
                              targetlang: h,
                            };
                          l = t.some((e) => e.source.code === r.language)
                            ? r.language
                            : m;
                        }
                        if (
                          !((e, n) => {
                            var r, o, a;
                            return null ===
                              (r = t.find((t) => t.source.code === e)) ||
                              void 0 === r ||
                              null === (o = r.target_list) ||
                              void 0 === o ||
                              null === (a = o.some) ||
                              void 0 === a
                              ? void 0
                              : a.call(o, (e) => e.code === n);
                          })(l, h)
                        )
                          return {
                            ...e,
                            succ: !0,
                            source: u,
                            target: u,
                            sourcelang: l,
                            targetlang: h,
                          };
                        const g = `${l}-${h}-${u}`,
                          v = ec[g];
                        if (v)
                          return {
                            ...e,
                            succ: !0,
                            memo: !0,
                            source: u,
                            target: v,
                            sourcelang: l,
                            targetlang: h,
                          };
                        const _ = {
                            header: { fn: y },
                            source: { lang: l, text_block: u },
                            target: { lang: h },
                          },
                          w = await j(_),
                          E =
                            (null == w ||
                            null === (n = w.header) ||
                            void 0 === n
                              ? void 0
                              : n.ret_code) === Zu.Succ ||
                            !(
                              null != w &&
                              null !== (r = w.message) &&
                              void 0 !== r &&
                              null !== (o = r.toLocaleLowerCase) &&
                              void 0 !== o &&
                              null !== (a = o.call(r)) &&
                              void 0 !== a &&
                              null !== (i = a.includes) &&
                              void 0 !== i &&
                              i.call(a, "busy")
                            );
                        let x = u;
                        var O, S, k, P, C;
                        return (
                          E &&
                            (x = ((e, t) => {
                              if (!t) return e;
                              let n = 0;
                              return e.replace(
                                /#(\d+)#/g,
                                () => (n++, t[n - 1]),
                              );
                            })(
                              ((O =
                                (null == w ? void 0 : w.auto_translation) || "")
                                ? null == O ||
                                  null === (S = O.replace(/〈 ?/g, "<")) ||
                                  void 0 === S ||
                                  null === (k = S.replace(/ ?〉 ?/g, ">")) ||
                                  void 0 === k ||
                                  null ===
                                    (P = k.replace(
                                      /# *(\d+) *#/g,
                                      "#$1#".trim(),
                                    )) ||
                                  void 0 === P ||
                                  null ===
                                    (C = P.replace(
                                      /#( +\S+)#/g,
                                      "#$1#".trim(),
                                    )) ||
                                  void 0 === C
                                  ? void 0
                                  : C.replace(/#( +\S+ +)#/g, "#$1#".trim())
                                : "") || u,
                              d,
                            )),
                          E &&
                            ((e, t) => {
                              ec[e] = t;
                            })(g, x),
                          {
                            ...e,
                            succ: E,
                            source: u,
                            target: x,
                            sourcelang: l,
                            targetlang: h,
                          }
                        );
                      }),
                    ),
                    l = a.filter(
                      ({
                        source: e,
                        sourcelang: t,
                        succ: n,
                        target: r,
                        targetlang: o,
                      }) => n,
                    );
                  if (X(l)) {
                    const e = l.reduce((e, t) => {
                      const n = e.findIndex((e) => e.node === t.node);
                      return n > -1 ? (e[n] = t) : e.push(t), e;
                    }, x);
                    O([...e]);
                  }
                  const u = a.filter((e) => !e.succ);
                  X(u) && n
                    ? setTimeout(() => {
                        i(u, ++o);
                      }, 300)
                    : (r(!0), f(!1));
                };
                X(o) && i(o);
              }),
            R = (0, e.useCallback)(() => {
              switch (!0) {
                case 1 == i:
                  K("source");
                  break;
                case d === dc.Target:
                  K("target");
                  break;
                case d === dc.Together:
                  K("all");
              }
            }, [d, i]);
          (0, e.useEffect)(() => {
            n &&
              (x.forEach((e) => {
                const t = ((e, t) => {
                  var n, r, o, a;
                  const {
                      target: i,
                      node: l,
                      isPara: u,
                      sourcelang: c,
                      targetlang: s,
                    } = e,
                    f = l.nextElementSibling,
                    d =
                      null === (n = l.nextElementSibling) || void 0 === n
                        ? void 0
                        : n.nextElementSibling;
                  if (
                    ("ALL" ===
                      (null == f ||
                      null === (r = f.getAttribute) ||
                      void 0 === r
                        ? void 0
                        : r.call(f, E)) &&
                      "TARGET" ===
                        (null == d ||
                        null === (o = d.getAttribute) ||
                        void 0 === o
                          ? void 0
                          : o.call(d, E))) ||
                    "TARGET" ===
                      (null == f ||
                      null === (a = f.getAttribute) ||
                      void 0 === a
                        ? void 0
                        : a.call(f, E))
                  )
                    return (
                      u
                        ? ((d.firstElementChild.firstElementChild.innerHTML =
                            i),
                          l instanceof HTMLElement &&
                            c &&
                            s &&
                            c === s &&
                            (l.setAttribute(E, ""),
                            l.parentElement.removeChild(f),
                            l.parentElement.removeChild(d),
                            G(l)))
                        : ((f.textContent = i),
                          l instanceof HTMLElement &&
                            c &&
                            s &&
                            c === s &&
                            (l.setAttribute(E, ""),
                            l.parentElement.removeChild(f),
                            G(l))),
                      l
                    );
                  if (
                    null == i ||
                    i === (null == l ? void 0 : l.textContent) ||
                    i === (null == l ? void 0 : l.innerHTML) ||
                    (c && s && c === s)
                  )
                    return l;
                  if (u) {
                    if (l instanceof HTMLElement) {
                      var p, m, g;
                      const e = l.cloneNode(!0);
                      e.innerHTML = i;
                      const n = document.createElement("font"),
                        r = document.createElement("font");
                      n.classList.add("transmart-tgt-container"),
                        null === (p = n.setAttribute) ||
                          void 0 === p ||
                          p.call(n, E, "TARGET"),
                        r.classList.add("transmart-tgt-wrapper"),
                        n.appendChild(r),
                        r.appendChild(e);
                      const o = document.createElement("br");
                      null === (m = o.setAttribute) ||
                        void 0 === m ||
                        m.call(o, E, "ALL"),
                        null === (g = l.setAttribute) ||
                          void 0 === g ||
                          g.call(l, E, "SOURCE"),
                        I(o, l),
                        I(n, o),
                        t && e.classList.add("transmart-tgt-font");
                    }
                    return l;
                  }
                  {
                    const e = Z(i, { [E]: "TARGET" }),
                      n = Z(l.textContent, { [E]: "SOURCE" });
                    return (
                      t && e.classList.add("transmart-tgt-font"),
                      e.classList.add("transmart-tgt-font-container"),
                      T(l.parentNode) &&
                        (l.parentNode.__TRANSMART_OLD_OPTION_CHILD_LIST = [
                          n,
                          e,
                        ]),
                      W() ? (I(e, l), l) : (l.replaceWith(n), I(e, n), n)
                    );
                  }
                })(e, P);
                e.node = t;
              }),
              R());
          }, [n, x, d, R, P]),
            (0, e.useEffect)(() => {
              n && R();
            }, [n, R]),
            (0, e.useEffect)(() => {
              if (n)
                switch (!0) {
                  case d === dc.Together:
                    S.forEach(({ element: e, source: t, target: n }) => {
                      var r;
                      t.trim() !== n.trim() &&
                        (e.__TRANSMART_OLD_NODE ||
                          (e.__TRANSMART_OLD_NODE = { ...e }),
                        (e.placeholder =
                          ((null === (r = e.__TRANSMART_OLD_NODE) ||
                          void 0 === r
                            ? void 0
                            : r.placeholder) || t) +
                          " " +
                          n));
                    });
                    break;
                  case i:
                    S.forEach(({ element: e, source: t }) => {
                      var n;
                      e.placeholder =
                        (null === (n = e.__TRANSMART_OLD_NODE) || void 0 === n
                          ? void 0
                          : n.placeholder) || t;
                    });
                    break;
                  case d === dc.Target:
                    S.forEach(({ element: e, target: t }) => {
                      e.__TRANSMART_OLD_NODE ||
                        (e.__TRANSMART_OLD_NODE = { ...e }),
                        (e.placeholder = t);
                    });
                }
            }, [S, n, d, i]);
          const z = (0, e.useCallback)(
              async (e = !1) => {
                try {
                  if (i) return;
                  if (!n) return;
                  if (!m || !h) return;
                  await M(e), await D(e);
                } catch (e) {}
              },
              [h, n, i],
            ),
            U = (0, e.useCallback)(() => {
              z();
            }, [z]),
            H = he(U, { wait: 200 });
          (0, e.useEffect)(() => {
            const e = [...document.querySelectorAll("*")].filter(F);
            return (
              e.forEach((e) => e.addEventListener("scroll", H.run)),
              window.addEventListener("scroll", H.run),
              () => {
                e.forEach((e) => e.removeEventListener("scroll", H.run)),
                  window.removeEventListener("scroll", H.run);
              }
            );
          }, [N, H.run]);
          const V = (0, e.useCallback)(
              (e) => {
                const t = ((e) =>
                  [...e].every((e) => {
                    switch (e.type) {
                      case "childList":
                        var t, n;
                        return !(
                          !e.target.textContent ||
                          (null !== (t = e.target) &&
                            void 0 !== t &&
                            null !== (n = t.hasAttribute) &&
                            void 0 !== n &&
                            n.call(t, E))
                        );
                      case "attributes":
                        return !["placeholder", E].includes(e.attributeName);
                      default:
                        return !1;
                    }
                  }))(e);
                t && z();
              },
              [z],
            ),
            q = he(V),
            Q = (0, e.useCallback)(async () => {
              if (m) return;
              const e = (() => {
                const e = document.createTreeWalker(
                  document.body || document.documentElement,
                  NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_TEXT,
                  {
                    acceptNode: (e) =>
                      e.nodeType === Node.ELEMENT_NODE &&
                      ($.includes(e.nodeName.toUpperCase()) ||
                        B.some((t) => e.classList.contains(t)))
                        ? NodeFilter.FILTER_REJECT
                        : NodeFilter.FILTER_ACCEPT,
                  },
                );
                let t = [],
                  n = e.currentNode;
                for (; n && t.length < 100; ) {
                  if (n.nodeType === Node.TEXT_NODE) {
                    const e = ((r = Y(n.textContent)),
                    r
                      .replace(/[\r\n]+/g, " ")
                      .replace(/[0-9]/g, "")
                      .replace(/[.,/#!$%^&*;:{}=\-_`~()'"<>?[\]\\|]/g, "")
                      .replace(/\s{2,}/g, " ")).trim();
                    e && t.push(e);
                  }
                  n = e.nextNode();
                }
                var r;
                return ((e) => e.join("|").slice(0, 2e3))(t);
              })();
              if (e && !(e.length < 2))
                try {
                  let n = "";
                  if (Ju.some((e) => window.location.origin.includes(e)))
                    n = "en";
                  else if (
                    (function (e = 0.1, t = "") {
                      const n =
                          t ||
                          document.body.innerText ||
                          document.body.textContent,
                        r = n.match(/[一-龥]/g) || [],
                        o = n.length;
                      if (r.length / o >= e) return !0;
                      const a = document.getElementsByTagName("meta");
                      for (let e = 0; e < a.length; e++)
                        if (
                          "Content-Language" === a[e].getAttribute("http-equiv")
                        ) {
                          const t = a[e].getAttribute("content");
                          if (t && t.toLowerCase().startsWith("zh")) return !0;
                        }
                      return !1;
                    })(0.3, e)
                  )
                    n = "zh";
                  else {
                    var t;
                    const r = await j({ header: { fn: b }, text: e });
                    if (
                      (null == r || null === (t = r.header) || void 0 === t
                        ? void 0
                        : t.ret_code) !== Zu.Succ
                    )
                      return;
                    n = r.language;
                  }
                  if (!n) return;
                  le({ sourceLang: n }),
                    g(n),
                    chrome.storage.sync.get(
                      ["validLangList"],
                      ({ validLangList: e }) => {
                        X(e) && e.includes(n) && (ne(), a(!0));
                      },
                    );
                } catch (e) {}
            }, [m]),
            ne = () => {
              r(!0);
            },
            ue = (0, e.useCallback)(
              (e) => {
                chrome.storage.sync.get(
                  ["validLangList"],
                  ({ validLangList: t }) => {
                    const n = e
                      ? [...new Set([...(t || []), m])]
                      : t.filter((e) => e !== m);
                    chrome.storage.sync.set({ validLangList: n });
                  },
                ),
                  a(e);
              },
              [m],
            ),
            se = (0, e.useCallback)(async () => {
              m &&
                chrome.storage.sync.get(
                  ["defaultTargetLang", "validLangList"],
                  (e) => {
                    const t =
                      (null == e ? void 0 : e.defaultTargetLang) || "zh";
                    v(t),
                      w(t),
                      X(e.validLangList) && ue(e.validLangList.includes(m));
                  },
                );
            }, [m, ue]),
            fe = (e) => {
              g(e);
            },
            de = (e) => {
              v(e);
            },
            pe = (0, e.useCallback)(() => {
              chrome.storage.sync.set({ PAGE_TRANSLATE_SWITCHER: !0 }),
                m && h ? z(!0) : re() && Q();
            }, [Q, z, m, h]);
          (0, e.useEffect)(() => {
            m && h && n && z(!0);
          }, [z, n, m, h]),
            (0, e.useEffect)(() => {
              chrome.storage.sync.get(["PAGE_TRANSLATE_SWITCHER"], (e) => {
                e.PAGE_TRANSLATE_SWITCHER &&
                  setTimeout(() => {
                    pe();
                  }, 500);
              });
            }, [pe]);
          const me = (0, e.useCallback)(
            (e) => {
              "translate-page" === e && (n ? L() : (pe(), ne()));
            },
            [L, pe, n],
          );
          (0, e.useEffect)(() => {
            const e = new MutationObserver(q.run);
            return (
              e.observe(document.body, {
                characterData: !1,
                attributes: !0,
                childList: !0,
                subtree: !0,
              }),
              chrome.runtime.onMessage.addListener(me),
              () => {
                e.disconnect(), chrome.runtime.onMessage.removeListener(me);
              }
            );
          }, [me, q.run]),
            (0, e.useEffect)(() => {
              se();
            }, [se]);
          const ge = (0, e.useCallback)(
              (e) => {
                const { key: t } = e;
                chrome.storage.sync.get(
                  ["pageTranslateHotkey"],
                  ({ pageTranslateHotkey: r }) => {
                    const o = [];
                    e.metaKey && o.push("Meta"),
                      e.shiftKey && o.push("Shift"),
                      e.altKey && o.push("Alt"),
                      e.ctrlKey && o.push("Ctrl"),
                      "Control" === t || o.includes(t) || o.push(t);
                    const a = o.sort().join("").toLocaleLowerCase();
                    r.split(" + ").sort().join("").toLocaleLowerCase() === a &&
                      (n ? L() : (pe(), ne()));
                  },
                );
              },
              [n],
            ),
            ve = (0, e.useCallback)(() => {
              window.removeEventListener("keydown", ge);
            }, [ge]),
            ye = (0, e.useCallback)(() => {
              chrome.storage.sync.get(
                ["isQuickShowPageTranslate"],
                ({ isQuickShowPageTranslate: e }) => {
                  e ? window.addEventListener("keydown", ge) : ve();
                },
              );
            }, [ge, ve]),
            be = (0, e.useCallback)(
              (e) => {
                e.defaultTargetLang && w(e.defaultTargetLang.newValue),
                  e.isQuickShowPageTranslate && ye();
              },
              [ye],
            );
          (0, e.useEffect)(
            () => (
              ye(),
              () => {
                ve();
              }
            ),
            [ye, ve],
          ),
            (0, e.useEffect)(
              () => (
                chrome.storage.onChanged.addListener(be),
                () => {
                  chrome.storage.onChanged.removeListener(be);
                }
              ),
              [be],
            );
          const _e = (e) => {
            p(e), chrome.storage.sync.set({ pageShowFunc: e });
          };
          (0, e.useEffect)(() => {
            chrome.storage.sync.get(["pageShowFunc"], ({ pageShowFunc: e }) => {
              const t = e && e !== dc.Source ? e : dc.Together;
              _e(t);
            });
          }, []);
          const we = (0, e.useMemo)(
            () =>
              (X(t) ? t : [])
                .map((e) => ({
                  content: e.source.chn_name,
                  value: e.source.code,
                }))
                .sort((e) =>
                  e.value.includes("zh") || e.value.includes("en") ? -1 : 1,
                ),
            [t],
          );
          return n && N
            ? e.createElement(
                "div",
                {
                  className: "trans-ctx--container-panel-sidebar",
                  onMouseEnter: () => c(!0),
                  onMouseLeave: () => c(!1),
                },
                e.createElement(
                  "div",
                  { className: "trans-ctx--container-page-translation" },
                  u &&
                    e.createElement(
                      e.Fragment,
                      null,
                      e.createElement(
                        Du,
                        {
                          showArrow: !1,
                          attach: te,
                          placement: "left",
                          content: "关闭整页翻译",
                        },
                        e.createElement(
                          Ku,
                          { shape: "circle", variant: "text", onClick: L },
                          e.createElement(Le, null),
                        ),
                      ),
                      e.createElement(
                        Du,
                        {
                          showArrow: !1,
                          attach: te,
                          placement: "left",
                          content: "进入设置页面",
                        },
                        e.createElement(
                          Ku,
                          {
                            shape: "circle",
                            variant: "text",
                            onClick: () => {
                              chrome.runtime.sendMessage({
                                message_type: "openOptionsPage",
                              });
                            },
                          },
                          e.createElement(Re, null),
                        ),
                      ),
                      e.createElement(
                        Yd,
                        {
                          title: "当前译文语言",
                          value: h,
                          options: we,
                          onChange: de,
                          renderItem: (t) =>
                            e.createElement(
                              "div",
                              { className: "trans-ctx--container-lang-item" },
                              e.createElement(
                                "span",
                                {
                                  className:
                                    "trans-ctx--container-text-content",
                                },
                                e.createElement(
                                  "span",
                                  { className: "trans-ctx--text-content" },
                                  t.content,
                                ),
                                _ === t.value &&
                                  e.createElement(
                                    "span",
                                    { className: "trans-ctx--default-tag" },
                                    "(默认)",
                                  ),
                              ),
                            ),
                        },
                        e.createElement(
                          Ku,
                          { shape: "circle", variant: "text" },
                          e.createElement(uc, { className: "trans-ctx--icon" }),
                        ),
                      ),
                      e.createElement(
                        Yd,
                        {
                          title: "显示方式",
                          value: d,
                          options: Gd,
                          onChange: _e,
                        },
                        e.createElement(
                          Ku,
                          { shape: "circle", variant: "text" },
                          e.createElement(oc, { className: "trans-ctx--icon" }),
                        ),
                      ),
                    ),
                  e.createElement(
                    Du,
                    {
                      showArrow: !1,
                      attach: te,
                      placement: "left",
                      content: i ? "翻译页面" : "显示原文",
                    },
                    e.createElement(
                      Ku,
                      {
                        className: "trans-ctx--btn-translate",
                        shape: "circle",
                        variant: "text",
                        loading: s,
                        onClick: () => l(!i),
                      },
                      !s &&
                        e.createElement(
                          e.Fragment,
                          null,
                          e.createElement(fc, {
                            className: "trans-ctx--icon-translate",
                          }),
                          !i &&
                            e.createElement(
                              "div",
                              { className: "trans-ctx--box-success" },
                              e.createElement(Ue, null),
                            ),
                        ),
                    ),
                  ),
                ),
              )
            : null;
        };
      var Kd = n(5331);
      var Zd = function (e) {
        return "number" == typeof e;
      };
      const Jd = function (t, n, r) {
        var o = null == r ? void 0 : r.immediate,
          a = de(t),
          i = (0, e.useRef)();
        return (
          (0, e.useEffect)(
            function () {
              if (Zd(n) && !(n < 0))
                return (
                  o && a.current(),
                  (i.current = setInterval(function () {
                    a.current();
                  }, n)),
                  function () {
                    i.current && clearInterval(i.current);
                  }
                );
            },
            [n],
          ),
          (0, e.useCallback)(function () {
            i.current && clearInterval(i.current);
          }, [])
        );
      };
      var ep = n(3951),
        tp = n.n(ep);
      const np = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function rp(e, t) {
        if (np)
          return e
            ? "function" == typeof e
              ? e()
              : "current" in e
                ? e.current
                : e
            : t;
      }
      var op = n(5925),
        ap = n.n(op);
      function ip(e, t) {
        if (e === t) return !0;
        for (var n = 0; n < e.length; n++)
          if (!Object.is(e[n], t[n])) return !1;
        return !0;
      }
      const lp = function (t) {
        return function (n, r, o) {
          var a = (0, e.useRef)(!1),
            i = (0, e.useRef)([]),
            l = (0, e.useRef)([]),
            u = (0, e.useRef)();
          t(function () {
            var e,
              t = (Array.isArray(o) ? o : [o]).map(function (e) {
                return rp(e);
              });
            if (!a.current)
              return (
                (a.current = !0),
                (i.current = t),
                (l.current = r),
                void (u.current = n())
              );
            (t.length === i.current.length &&
              ip(t, i.current) &&
              ip(r, l.current)) ||
              (null === (e = u.current) || void 0 === e || e.call(u),
              (i.current = t),
              (l.current = r),
              (u.current = n()));
          }),
            pe(function () {
              var e;
              null === (e = u.current) || void 0 === e || e.call(u),
                (a.current = !1);
            });
        };
      };
      const up = lp(e.useEffect);
      const cp = function (t, n, r) {
        var o,
          a,
          i = (0, e.useRef)(),
          l = (0, e.useRef)(0);
        (o = n),
          void 0 === (a = i.current) && (a = []),
          ap()(o, a) || ((i.current = n), (l.current += 1)),
          up(t, [l.current], r);
      };
      const sp = function (e, t, n) {
        void 0 === n && (n = {});
        var r = de(e);
        cp(
          function () {
            var e = rp(t);
            if (e) {
              var o = new MutationObserver(r.current);
              return (
                o.observe(e, n),
                function () {
                  o && o.disconnect();
                }
              );
            }
          },
          [n],
          t,
        );
      };
      var fp;
      function dp() {
        return (
          (dp = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          dp.apply(this, arguments)
        );
      }
      const pp = function (t) {
        return e.createElement(
          "svg",
          dp(
            {
              className: "icon-close_svg__menuBar-Btn_Icon",
              width: 30,
              height: 30,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 31.112 31.112",
            },
            t,
          ),
          fp ||
            (fp = e.createElement("path", {
              d: "M31.112 1.414 29.698 0 15.556 14.142 1.414 0 0 1.414l14.142 14.142L0 29.698l1.414 1.414L15.556 16.97l14.142 14.142 1.414-1.414L16.97 15.556",
            })),
        );
      };
      var mp, gp;
      function hp() {
        return (
          (hp = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          hp.apply(this, arguments)
        );
      }
      const vp = function (t) {
        return e.createElement(
          "svg",
          hp(
            {
              className: "icon-setting_svg__icon",
              viewBox: "0 0 1024 1024",
              xmlns: "http://www.w3.org/2000/svg",
              width: 200,
              height: 200,
            },
            t,
          ),
          mp ||
            (mp = e.createElement("path", {
              d: "M913.94 431.828c-4.877-25.783-20.692-42.456-40.947-42.456h-3.512c-54.731 0-99.248-44.516-99.248-99.263 0-17.295 8.299-37.015 8.62-37.799 10.097-22.722 2.349-50.567-18.08-64.859l-102.7-57.183-1.51-.739c-20.546-8.91-48.667-3.207-63.987 12.754-11.087 11.434-49.307 44.038-78.472 44.038-29.543 0-67.849-33.258-78.992-44.91-15.293-16.076-43.124-22.112-63.902-13.217l-106.357 58.272-1.597 1.016c-20.43 14.234-28.207 42.078-18.165 64.714.346.828 8.676 20.387 8.676 37.914 0 54.747-44.517 99.263-99.247 99.263h-4.15c-19.618 0-35.434 16.672-40.309 42.456-.363 1.814-8.59 45.446-8.59 80.43 0 34.939 8.227 78.555 8.59 80.355 4.875 25.8 20.691 42.487 40.947 42.487h3.512c54.73 0 99.247 44.517 99.247 99.247 0 17.412-8.329 37.058-8.648 37.812-10.07 22.767-2.35 50.568 18.022 64.788l100.756 56.531 1.538.697c20.837 9.171 49.015 3.192 64.25-13.464 14.074-15.208 52.208-46.783 80.21-46.783 30.355 0 69.446 35.347 80.707 47.767 10.387 11.376 26.349 18.227 42.687 18.227 7.632 0 14.857-1.511 21.474-4.354l104.472-57.574 1.538-.99c20.429-14.276 28.207-42.077 18.139-64.727-.35-.842-8.678-20.403-8.678-37.929 0-54.73 44.517-99.247 99.248-99.247h4.094c19.644 0 35.488-16.687 40.365-42.487.348-1.8 8.588-45.416 8.588-80.355 0-34.986-8.24-78.618-8.588-80.432m-50.959 80.43c0 22.606-4.498 51.655-6.56 63.786-82.097 6.732-145.737 75.335-145.737 158.303 0 23.42 7.43 45.851 11.377 56.17l-89.121 49.216c-4.383-4.584-17.326-17.645-34.94-30.762-30.935-22.926-60.595-34.636-88.106-34.636-27.279 0-56.704 11.42-87.494 34.055-17.528 12.77-30.296 25.48-34.766 30.18l-85.724-47.996c4.179-10.84 11.405-32.983 11.405-56.227 0-82.968-63.64-151.571-145.708-158.303-2.09-12.13-6.588-41.18-6.588-63.786 0-22.651 4.498-51.714 6.588-63.844 82.068-6.718 145.708-75.336 145.708-158.304 0-23.288-7.429-45.793-11.376-56.095l91.326-50.19c3.976 3.976 17.006 16.73 34.823 29.412 30.356 21.663 59.261 32.633 86.016 32.633 26.495 0 55.196-10.766 85.347-32.01 17.963-12.623 30.964-25.202 34.736-28.757l87.901 48.825c-3.975 10.244-11.405 32.676-11.405 56.182 0 82.968 63.64 151.586 145.738 158.304 2.062 12.158 6.56 41.338 6.56 63.844",
            })),
          gp ||
            (gp = e.createElement("path", {
              d: "M510.216 365.633c-80.53 0-146.057 65.528-146.057 146.058 0 80.543 65.528 146.043 146.057 146.043 80.53 0 146.057-65.5 146.057-146.043 0-80.53-65.527-146.058-146.057-146.058m86.51 146.058c0 47.693-38.8 86.492-86.51 86.492-47.709 0-86.48-38.799-86.48-86.492 0-47.666 38.771-86.48 86.48-86.48 47.71.001 86.51 38.814 86.51 86.48",
            })),
        );
      };
      const yp = function (t, n) {
        var r = de(t),
          o = (0, e.useRef)();
        return (
          (0, e.useEffect)(
            function () {
              if (Zd(n) && !(n < 0))
                return (
                  (o.current = setTimeout(function () {
                    r.current();
                  }, n)),
                  function () {
                    o.current && clearTimeout(o.current);
                  }
                );
            },
            [n],
          ),
          (0, e.useCallback)(function () {
            o.current && clearTimeout(o.current);
          }, [])
        );
      };
      var bp, _p;
      function wp() {
        return (
          (wp = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          wp.apply(this, arguments)
        );
      }
      const Ep = function (t) {
          return e.createElement(
            "svg",
            wp(
              {
                width: 16,
                height: 16,
                viewBox: "0 0 16 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              t,
            ),
            bp ||
              (bp = e.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.25.25C3.56.25 3 .81 3 1.5V14c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V5.249c0-.332-.132-.65-.367-.885L11.376.614a1.25 1.25 0 0 0-.883-.365H4.25Zm6.243 1.25H4.25V14h10V6.5h-5v-5h1.243Zm.007 3.75h3.75L10.5 1.506V5.25Z",
              })),
            _p ||
              (_p = e.createElement("path", {
                fill: "currentColor",
                d: "M.5 5.25V16.5c0 .69.56 1.25 1.25 1.25h12.5V16.5H1.889V5.25H.5Z",
              })),
          );
        },
        xp = ({ text: t }) => {
          const [n, r] = (0, e.useState)(),
            [o, a] = (0, e.useState)(!1);
          return (
            (0, e.useEffect)(() => {
              r(o ? 1500 : void 0);
            }, [o]),
            yp(() => {
              a(!1);
            }, n),
            e.createElement(
              Su,
              {
                disabled: !t,
                trigger: "click",
                content: "已复制",
                attach: te,
                visible: o,
                onVisibleChange: a,
              },
              e.createElement(
                "div",
                {
                  onClick: () =>
                    ((e) => {
                      if (navigator.clipboard) navigator.clipboard.writeText(e);
                      else {
                        const t = document.createElement("textarea");
                        document.body.appendChild(t),
                          (t.style.position = "fixed"),
                          (t.style.clip = "rect(0 0 0 0)"),
                          (t.style.top = "10px"),
                          (t.value = e),
                          t.select(),
                          document.execCommand("copy", !0),
                          document.body.removeChild(t);
                      }
                    })(t),
                },
                e.createElement(Ep, { className: "trans-ctx--icon-copy" }),
              ),
            )
          );
        },
        Op = (0, e.memo)(xp),
        Sp = {
          "./index.module.less": {
            "panel-result": "trans-ctx--panel-result",
            visible: "trans-ctx--visible",
            "container-title": "trans-ctx--container-title",
            "title-text": "trans-ctx--title-text",
            "icon-close": "trans-ctx--icon-close",
            "btn-more": "trans-ctx--btn-more",
            "icon-more": "trans-ctx--icon-more",
            "icon-setting": "trans-ctx--icon-setting",
            content: "trans-ctx--content",
            "result-section": "trans-ctx--result-section",
            label: "trans-ctx--label",
            "container-collapsed-text": "trans-ctx--container-collapsed-text",
            "trs-content-collapsed": "trans-ctx--trs-content-collapsed",
            "btn-expand": "trans-ctx--btn-expand",
            "trs-content": "trans-ctx--trs-content",
            source: "trans-ctx--source",
            "collapsed-target": "trans-ctx--collapsed-target",
            "icon-expand": "trans-ctx--icon-expand",
            "error-tip": "trans-ctx--error-tip",
            "btn-retry": "trans-ctx--btn-retry",
            "selector-lang": "trans-ctx--selector-lang",
          },
        },
        kp = ({
          visible: t,
          source: n,
          target: r,
          sourceLang: o,
          targetLang: a,
          translating: i,
          sourceLangList: l,
          targetLangList: u,
          onClose: c,
          setPanelPos: s,
          onTranslate: f,
          setSourceLang: d,
          setTargetLang: p,
        }) => {
          const m = (0, e.useRef)(),
            g = (0, e.useRef)(),
            h = (0, e.useRef)();
          sp(() => y(), m, { childList: !0, subtree: !0 }),
            sp(() => y(), g, { childList: !0, subtree: !0 });
          const y = () => {
            var e;
            const t =
                null === (e = document.getElementById(v)) || void 0 === e
                  ? void 0
                  : e.shadowRoot.getElementById(x),
              n = window.innerHeight,
              r = t.offsetTop,
              o = h.current.clientHeight;
            r + o > n && s(n - o - 40);
          };
          return e.createElement(
            "div",
            {
              ref: h,
              className: (0, Kd.Z)(Xe()("panel-result", [{ visible: t }]), Sp, {
                autoResolveMultipleImports: !0,
                handleMissingStyleName: "warn",
              }),
            },
            e.createElement(
              "div",
              { className: "trans-ctx--container-title" },
              e.createElement(
                "span",
                { className: "trans-ctx--title-text", id: w },
                "翻译结果",
              ),
              e.createElement(
                "span",
                null,
                e.createElement(
                  "select",
                  {
                    className: "trans-ctx--selector-lang",
                    value: o,
                    onChange: (e) => {
                      d(e.target.value);
                    },
                  },
                  l.map((t) =>
                    e.createElement(
                      "option",
                      { key: t.source.code, value: t.source.code },
                      t.source.chn_name,
                    ),
                  ),
                ),
                e.createElement(
                  "select",
                  {
                    className: "trans-ctx--selector-lang",
                    value: a,
                    onChange: (e) => {
                      p(e.target.value);
                    },
                  },
                  u.map((t) =>
                    e.createElement(
                      "option",
                      { key: t.code, value: t.code },
                      t.chn_name,
                    ),
                  ),
                ),
                e.createElement(
                  "span",
                  {
                    className: "trans-ctx--btn-more",
                    onClick: () => {
                      const e = encodeURIComponent(
                        `source=${n}&target=${r}&sourcelang=${o}&targetlang=${a}`,
                      );
                      window.open("https://transmart.qq.com/zh-CN/index?" + e);
                    },
                  },
                  "查看更多结果",
                ),
                e.createElement(
                  "span",
                  {
                    title: "打开设置",
                    onClick: () => {
                      chrome.runtime.sendMessage({
                        message_type: "openOptionsPage",
                      });
                    },
                  },
                  e.createElement(vp, { className: "trans-ctx--icon-setting" }),
                ),
              ),
              e.createElement(
                "span",
                { title: "关闭翻译结果面板", onClick: c },
                e.createElement(pp, { className: "trans-ctx--icon-close" }),
              ),
            ),
            e.createElement(
              "div",
              { className: "trans-ctx--content" },
              e.createElement(
                "div",
                { className: "trans-ctx--result-section", ref: m },
                e.createElement(
                  "div",
                  { className: "trans-ctx--label" },
                  "原文：",
                  n && e.createElement(Op, { text: n }),
                ),
                e.createElement(
                  "div",
                  { className: "trans-ctx--trs-content trans-ctx--source" },
                  n,
                ),
              ),
              e.createElement(
                "div",
                { className: "trans-ctx--result-section", ref: g },
                e.createElement(
                  "div",
                  { className: "trans-ctx--label" },
                  "译文：",
                  r && e.createElement(Op, { text: r }),
                ),
                e.createElement(
                  "div",
                  { className: "trans-ctx--trs-content" },
                  i && "翻译中...",
                  !i &&
                    (r === _
                      ? e.createElement(
                          e.Fragment,
                          null,
                          e.createElement(
                            "span",
                            { className: "trans-ctx--error-tip" },
                            _,
                          ),
                          e.createElement(
                            "span",
                            { className: "trans-ctx--btn-retry", onClick: f },
                            "重新翻译",
                          ),
                        )
                      : r),
                ),
              ),
            ),
          );
        },
        jp = (0, e.memo)(kp),
        Pp = {
          "./style.module.less": {
            "icon-trans": "trans-ctx--icon-trans",
            visible: "trans-ctx--visible",
            "container-popup": "trans-ctx--container-popup",
          },
        },
        Cp = ({
          visible: t,
          left: n,
          top: r,
          source: o,
          sourceHtml: a,
          langList: i,
          panelLeft: l,
          panelTop: u,
          immeShow: c,
          onDestroy: s,
          setPanelPos: f,
        }) => {
          const [d, p] = (0, e.useState)({ x: 0, y: 0 }),
            [m, g] = (0, e.useState)(!1),
            [h, v] = (0, e.useState)("hotkey"),
            [w, E] = (0, e.useState)(""),
            [O, S] = (0, e.useState)(!1),
            [k, P] = (0, e.useState)(""),
            [C, T] = (0, e.useState)(""),
            [N, L] = (0, e.useState)([]),
            [A, D] = (0, e.useState)([]),
            [M, R] = (0, e.useState)(0),
            [I, z] = (0, e.useState)(void 0);
          Jd(() => {
            R(M + 1), t && !m && M >= 4 && (s(), R(0), z(void 0));
          }, I),
            (0, e.useEffect)(() => {
              H();
            }, [t]),
            (0, e.useEffect)(() => {
              t && o && !m ? z(500) : (R(0), z(void 0));
            }, [t, o, m]),
            (0, e.useEffect)(() => {
              R(0);
            }, [o]),
            (0, e.useEffect)(() => {
              t && c && g(!0);
            }, [c, t]);
          const F = (0, e.useCallback)(() => {
              var e;
              if (!k) return;
              const t = (
                (null === (e = i.find((e) => e.source.code === k)) ||
                void 0 === e
                  ? void 0
                  : e.target_list) || []
              )
                .sort((e) => ("zh" === e.code || "en" === e.code ? -1 : 1))
                .filter((e) => e.code !== k);
              D(t),
                chrome.storage.sync.get(["defaultTargetLang"], (e) => {
                  const n = null == e ? void 0 : e.defaultTargetLang;
                  n && n !== k && t.find((e) => e.code === n)
                    ? T(n)
                    : X(t) && T(t[0].code);
                });
            }, [i, k]),
            U = (0, e.useCallback)(
              (e) => {
                e.defaultTargetLang && F();
              },
              [F],
            );
          (0, e.useEffect)(
            () => (
              chrome.storage.onChanged.addListener(U),
              () => {
                chrome.storage.onChanged.removeListener(U);
              }
            ),
            [U],
          ),
            (0, e.useEffect)(() => {
              o && (G(), m && B());
            }, [o, m]),
            (0, e.useEffect)(() => {
              L(i);
            }, [i]),
            (0, e.useEffect)(() => {
              m && q();
            }, [o, m, k, C]),
            (0, e.useEffect)(() => {
              F();
            }, [k]);
          const H = async () => {
              if (t)
                try {
                  chrome.storage.sync.get(
                    ["worksOpenOption", "defaultTargetLang"],
                    (e) => {
                      C || T(e.defaultTargetLang),
                        v(e.worksOpenOption || "popup"),
                        "immediately" === e.worksOpenOption || c
                          ? g(!0)
                          : "hotkey" === e.worksOpenOption &&
                            window.addEventListener("keydown", W);
                    },
                  );
                } catch (e) {
                  v("popup");
                }
              else Y(), window.removeEventListener("keydown", W);
            },
            W = (0, e.useCallback)(async (e) => {
              const { key: t } = e;
              if ("Escape" === t)
                return e.stopPropagation(), e.preventDefault(), void g(!1);
              chrome.storage.sync.get(["hotkey"], (n) => {
                const r = [];
                e.metaKey && r.push("Meta"),
                  e.shiftKey && r.push("Shift"),
                  e.altKey && r.push("Alt"),
                  e.ctrlKey && r.push("Ctrl"),
                  "Control" === t || r.includes(t) || r.push(t);
                r.sort().join("").toLocaleLowerCase() ===
                  n.hotkey.split(" + ").sort().join("").toLocaleLowerCase() &&
                  g(!0);
              });
            }, []),
            $ = { left: m ? l : n, top: m ? u : r },
            B = async () => {
              try {
                S(!0);
                const e = await V();
                P(e);
              } catch (e) {}
            },
            V = async () => {
              try {
                const e = await j({ header: { fn: b }, text: o });
                if (e.header.ret_code === Zu.Succ) return e.language;
              } catch (e) {}
              return "";
            },
            q = async () => {
              if (o && k && C && k !== C) {
                S(!0);
                try {
                  const e = await j({
                    header: { fn: y },
                    source: { lang: k, text_block: o, orig_text_block: a },
                    target: { lang: C },
                  });
                  e.header.ret_code === Zu.Succ ? E(e.auto_translation) : E(_);
                } catch (e) {
                  E(_);
                } finally {
                  S(!1);
                }
              }
            },
            Y = () => {
              g(!1), s(), G();
            },
            G = () => {
              p({ x: 0, y: 0 });
            };
          return e.createElement(
            tp(),
            {
              position: d,
              handle: "#draggable-header",
              onDrag: (e, { x: t, y: n }) => {
                p({ x: t, y: n });
              },
            },
            e.createElement(
              "div",
              {
                id: x,
                style: $,
                className: (0, Kd.Z)(
                  Xe()("container-popup", [{ visible: t }]),
                  Pp,
                  {
                    autoResolveMultipleImports: !0,
                    handleMissingStyleName: "warn",
                  },
                ),
              },
              e.createElement(fc, {
                onMouseUp: (e) => {
                  e.stopPropagation();
                },
                onClick: () => {
                  g(!0);
                },
                className: (0, Kd.Z)(
                  Xe()("icon-trans", [{ visible: !m && "popup" === h }]),
                  Pp,
                  {
                    autoResolveMultipleImports: !0,
                    handleMissingStyleName: "warn",
                  },
                ),
              }),
              e.createElement(jp, {
                visible: m,
                translating: O,
                source: o,
                target: w,
                sourceLang: k,
                targetLang: C,
                sourceLangList: N,
                targetLangList: A,
                onClose: Y,
                setPanelPos: f,
                setSourceLang: P,
                setTargetLang: T,
                onTranslate: q,
              }),
            ),
          );
        },
        Tp = (0, e.memo)(Cp);
      window.TRANSMART_CRX_CLIENT_KEY ||
        (window.TRANSMART_CRX_CLIENT_KEY = (
          "tencent_transmart_crx_" + window.btoa(navigator.userAgent)
        ).slice(0, 100));
      const Np = () => {
          const t = (0, e.useRef)(0),
            n = (0, e.useRef)(0),
            [r, o] = (0, e.useState)(!1),
            { langList: a } = (() => {
              const [t, n] = (0, e.useState)([]),
                r = (0, e.useCallback)(async () => {
                  chrome.storage.local.get(P, (e) => {
                    if (null != e && e.lang_list) {
                      const t = e.lang_list.time,
                        r = e.lang_list.list || [],
                        o = !t || ne() - t > 864e5;
                      X(r) && n(r), o && a();
                    } else a();
                  });
                }, []);
              (0, e.useEffect)(() => {
                r();
              }, [r]);
              const o = (e, t = !0) => {
                  n(e),
                    chrome.storage.local.set({
                      [P]: { time: t ? ne() : void 0, list: e },
                    });
                },
                a = async () => {
                  try {
                    const e = await j({ header: { fn: "support_lang" } });
                    X(e.full_lang_pair) ? o(e.full_lang_pair) : o(C);
                  } catch (e) {
                    o(C);
                  }
                };
              return { langList: t };
            })(),
            [i, l] = (0, e.useState)(""),
            [u, c] = (0, e.useState)(""),
            [s, f] = (0, e.useState)({
              visible: !1,
              iconLeft: 0,
              iconTop: 0,
              panelLeft: 0,
              panelTop: 0,
            }),
            d = (0, e.useMemo)(() => re(), []),
            p = (0, e.useCallback)(
              (e = !1) => {
                try {
                  chrome.storage.sync.get(["isChooseWordsOpen"], (r) => {
                    void 0 === r.isChooseWordsOpen &&
                      (r.isChooseWordsOpen = !0);
                    const o = e ? ce(i) && r.isChooseWordsOpen : ce(i),
                      {
                        iconX: a,
                        iconY: l,
                        panelX: u,
                        panelY: c,
                      } = ue(t.current, n.current);
                    f({
                      visible: o,
                      iconLeft: a,
                      iconTop: l,
                      panelLeft: u,
                      panelTop: c,
                    });
                  });
                } catch (e) {
                  const r = ce(i),
                    {
                      iconX: o,
                      iconY: a,
                      panelX: l,
                      panelY: u,
                    } = ue(t.current, n.current);
                  f({
                    visible: r,
                    iconLeft: o,
                    iconTop: a,
                    panelLeft: l,
                    panelTop: u,
                  });
                }
              },
              [i],
            ),
            m = (0, e.useCallback)(
              (e) => {
                if ("translate-selected" === e) p(), o(!0);
              },
              [p],
            );
          (0, e.useEffect)(() => {
            p(!0);
          }, [p]);
          const g = (0, e.useCallback)(
              function (e) {
                let r = 0,
                  o = 0;
                if (d) (t.current = e.clientX + r), (n.current = e.clientY + o);
                else if (this.frameElement) {
                  const t = this.frameElement.getBoundingClientRect();
                  (r = t.x),
                    (o = t.y),
                    le({ type: S, x: e.clientX + r, y: e.clientY + o });
                }
              },
              [d],
            ),
            v = (0, e.useCallback)(
              async (e) => {
                setTimeout(() => {
                  const t = (() => {
                    var e, t, n, r;
                    const o = window.getSelection(),
                      a =
                        (null == o ||
                        null === (e = o.toString()) ||
                        void 0 === e ||
                        null === (t = e.trim) ||
                        void 0 === t ||
                        null === (n = t.call(e)) ||
                        void 0 === n ||
                        null === (r = n.replace) ||
                        void 0 === r
                          ? void 0
                          : r.call(n, /(\n)+/g, "\n")) || "";
                    if ("Range" === (null == o ? void 0 : o.type) && a)
                      return { text: a, html: q() };
                  })();
                  t &&
                    (d
                      ? b(e) || (l(t.text), c(t.html))
                      : le({ type: O, text: t.text, html: t.html }));
                });
              },
              [d],
            ),
            y = (0, e.useCallback)(
              async (e) => {
                chrome.storage.sync.get("worksOpenOption", (t) => {
                  "hotkey" !== t.worksOpenOption &&
                    "Escape" === e.key &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    d ? T() : le({ type: k }));
                });
              },
              [d],
            ),
            b = (e) => {
              const t = e.composedPath ? e.composedPath() : e.path;
              return null == t ? void 0 : t.some((e) => e.id === h);
            },
            _ = (0, e.useCallback)(() => {
              l(""), c("");
            }, []),
            w = (0, e.useCallback)(() => {
              s.visible && (_(), T());
            }, [_, s.visible]),
            E = (0, e.useCallback)(
              (e) => {
                const r = e.data;
                if ("TRANSMART_CRX" === r.type)
                  switch (r.payload.type) {
                    case S:
                      (t.current = r.payload.x), (n.current = r.payload.y);
                      break;
                    case O:
                      l(r.payload.text), c(r.payload.html);
                      break;
                    case k:
                      w();
                  }
              },
              [w],
            ),
            x = (0, e.useCallback)(
              (e) => {
                b(e) || (d ? w() : le({ type: k }));
              },
              [w, d],
            );
          (0, e.useEffect)(
            () => (
              d && window.addEventListener("message", E),
              () => {
                window.removeEventListener("message", E);
              }
            ),
            [d, E],
          ),
            (0, e.useEffect)(
              () => (
                chrome.runtime.onMessage.addListener(m),
                window.addEventListener("mousemove", g),
                document.body.addEventListener("mouseup", v),
                window.addEventListener("keydown", y),
                document.body.addEventListener("click", x),
                () => {
                  chrome.runtime.onMessage.removeListener(m),
                    window.removeEventListener("mousemove", g),
                    document.body.removeEventListener("mouseup", v),
                    window.removeEventListener("keydown", y),
                    document.body.addEventListener("click", x);
                }
              ),
              [x, y, g, v, m],
            );
          const T = async () => {
            o(!1),
              f(({ iconLeft: e, iconTop: t, panelLeft: n, panelTop: r }) => ({
                visible: !1,
                iconLeft: e,
                iconTop: t,
                panelLeft: n,
                panelTop: r,
              }));
          };
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(Tp, {
              top: s.iconTop,
              left: s.iconLeft,
              panelTop: s.panelTop,
              panelLeft: s.panelLeft,
              visible: s.visible,
              source: i,
              sourceHtml: u,
              langList: a,
              immeShow: r,
              onDestroy: T,
              setPanelPos: (e, t) => {
                f(
                  ({
                    iconLeft: n,
                    iconTop: r,
                    visible: o,
                    panelTop: a,
                    panelLeft: i,
                  }) => ({
                    iconLeft: n,
                    iconTop: r,
                    visible: o,
                    panelTop: e || a,
                    panelLeft: t || i,
                  }),
                );
              },
            }),
            X(a) && e.createElement(Qd, { langList: a }),
          );
        },
        Lp = (0, e.memo)(Np);
      function Ap(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (n.length
              ? " " +
                n
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf",
        );
      }
      function Dp(e) {
        return !!e && !!e[xm];
      }
      function Mp(e) {
        var t;
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n =
              Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return (
              n === Object ||
              ("function" == typeof n && Function.toString.call(n) === Om)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[Em] ||
            !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[Em]) ||
            Wp(e) ||
            $p(e))
        );
      }
      function Rp(e, t, n) {
        void 0 === n && (n = !1),
          0 === Ip(e)
            ? (n ? Object.keys : Sm)(e).forEach(function (r) {
                (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                return t(r, n, e);
              });
      }
      function Ip(e) {
        var t = e[xm];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
            ? 1
            : Wp(e)
              ? 2
              : $p(e)
                ? 3
                : 0;
      }
      function zp(e, t) {
        return 2 === Ip(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function Fp(e, t) {
        return 2 === Ip(e) ? e.get(t) : e[t];
      }
      function Up(e, t, n) {
        var r = Ip(e);
        2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : (e[t] = n);
      }
      function Hp(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function Wp(e) {
        return ym && e instanceof Map;
      }
      function $p(e) {
        return bm && e instanceof Set;
      }
      function Bp(e) {
        return e.o || e.t;
      }
      function Vp(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = km(e);
        delete t[xm];
        for (var n = Sm(t), r = 0; r < n.length; r++) {
          var o = n[r],
            a = t[o];
          !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) &&
              (t[o] = {
                configurable: !0,
                writable: !0,
                enumerable: a.enumerable,
                value: e[o],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function Xp(e, t) {
        return (
          void 0 === t && (t = !1),
          Yp(e) ||
            Dp(e) ||
            !Mp(e) ||
            (Ip(e) > 1 && (e.set = e.add = e.clear = e.delete = qp),
            Object.freeze(e),
            t &&
              Rp(
                e,
                function (e, t) {
                  return Xp(t, !0);
                },
                !0,
              )),
          e
        );
      }
      function qp() {
        Ap(2);
      }
      function Yp(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function Gp(e) {
        var t = jm[e];
        return t || Ap(18, e), t;
      }
      function Qp(e, t) {
        jm[e] || (jm[e] = t);
      }
      function Kp() {
        return hm;
      }
      function Zp(e, t) {
        t && (Gp("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function Jp(e) {
        em(e), e.p.forEach(nm), (e.p = null);
      }
      function em(e) {
        e === hm && (hm = e.l);
      }
      function tm(e) {
        return (hm = { p: [], l: hm, h: e, m: !0, _: 0 });
      }
      function nm(e) {
        var t = e[xm];
        0 === t.i || 1 === t.i ? t.j() : (t.O = !0);
      }
      function rm(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
          r = void 0 !== e && e !== n;
        return (
          t.h.g || Gp("ES5").S(t, e, r),
          r
            ? (n[xm].P && (Jp(t), Ap(4)),
              Mp(e) && ((e = om(t, e)), t.l || im(t, e)),
              t.u && Gp("Patches").M(n[xm].t, e, t.u, t.s))
            : (e = om(t, n, [])),
          Jp(t),
          t.u && t.v(t.u, t.s),
          e !== wm ? e : void 0
        );
      }
      function om(e, t, n) {
        if (Yp(t)) return t;
        var r = t[xm];
        if (!r)
          return (
            Rp(
              t,
              function (o, a) {
                return am(e, r, t, o, a, n);
              },
              !0,
            ),
            t
          );
        if (r.A !== e) return t;
        if (!r.P) return im(e, r.t, !0), r.t;
        if (!r.I) {
          (r.I = !0), r.A._--;
          var o = 4 === r.i || 5 === r.i ? (r.o = Vp(r.k)) : r.o;
          Rp(3 === r.i ? new Set(o) : o, function (t, a) {
            return am(e, r, o, t, a, n);
          }),
            im(e, o, !1),
            n && e.u && Gp("Patches").R(r, n, e.u, e.s);
        }
        return r.o;
      }
      function am(e, t, n, r, o, a) {
        if (Dp(o)) {
          var i = om(
            e,
            o,
            a && t && 3 !== t.i && !zp(t.D, r) ? a.concat(r) : void 0,
          );
          if ((Up(n, r, i), !Dp(i))) return;
          e.m = !1;
        }
        if (Mp(o) && !Yp(o)) {
          if (!e.h.F && e._ < 1) return;
          om(e, o), (t && t.A.l) || im(e, o);
        }
      }
      function im(e, t, n) {
        void 0 === n && (n = !1), e.h.F && e.m && Xp(t, n);
      }
      function lm(e, t) {
        var n = e[xm];
        return (n ? Bp(n) : e)[t];
      }
      function um(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function cm(e) {
        e.P || ((e.P = !0), e.l && cm(e.l));
      }
      function sm(e) {
        e.o || (e.o = Vp(e.t));
      }
      function fm(e, t, n) {
        var r = Wp(t)
          ? Gp("MapSet").N(t, n)
          : $p(t)
            ? Gp("MapSet").T(t, n)
            : e.g
              ? (function (e, t) {
                  var n = Array.isArray(e),
                    r = {
                      i: n ? 1 : 0,
                      A: t ? t.A : Kp(),
                      P: !1,
                      I: !1,
                      D: {},
                      l: t,
                      t: e,
                      k: null,
                      o: null,
                      j: null,
                      C: !1,
                    },
                    o = r,
                    a = Pm;
                  n && ((o = [r]), (a = Cm));
                  var i = Proxy.revocable(o, a),
                    l = i.revoke,
                    u = i.proxy;
                  return (r.k = u), (r.j = l), u;
                })(t, n)
              : Gp("ES5").J(t, n);
        return (n ? n.A : Kp()).p.push(r), r;
      }
      function dm(e) {
        return (
          Dp(e) || Ap(22, e),
          (function e(t) {
            if (!Mp(t)) return t;
            var n,
              r = t[xm],
              o = Ip(t);
            if (r) {
              if (!r.P && (r.i < 4 || !Gp("ES5").K(r))) return r.t;
              (r.I = !0), (n = pm(t, o)), (r.I = !1);
            } else n = pm(t, o);
            return (
              Rp(n, function (t, o) {
                (r && Fp(r.t, t) === o) || Up(n, t, e(o));
              }),
              3 === o ? new Set(n) : n
            );
          })(e)
        );
      }
      function pm(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return Vp(e);
      }
      function mm() {
        function e(e, t) {
          var n = o[e];
          return (
            n
              ? (n.enumerable = t)
              : (o[e] = n =
                  {
                    configurable: !0,
                    enumerable: t,
                    get: function () {
                      var t = this[xm];
                      return Pm.get(t, e);
                    },
                    set: function (t) {
                      var n = this[xm];
                      Pm.set(n, e, t);
                    },
                  }),
            n
          );
        }
        function t(e) {
          for (var t = e.length - 1; t >= 0; t--) {
            var o = e[t][xm];
            if (!o.P)
              switch (o.i) {
                case 5:
                  r(o) && cm(o);
                  break;
                case 4:
                  n(o) && cm(o);
              }
          }
        }
        function n(e) {
          for (var t = e.t, n = e.k, r = Sm(n), o = r.length - 1; o >= 0; o--) {
            var a = r[o];
            if (a !== xm) {
              var i = t[a];
              if (void 0 === i && !zp(t, a)) return !0;
              var l = n[a],
                u = l && l[xm];
              if (u ? u.t !== i : !Hp(l, i)) return !0;
            }
          }
          var c = !!t[xm];
          return r.length !== Sm(t).length + (c ? 0 : 1);
        }
        function r(e) {
          var t = e.k;
          if (t.length !== e.t.length) return !0;
          var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
          if (n && !n.get) return !0;
          for (var r = 0; r < t.length; r++)
            if (!t.hasOwnProperty(r)) return !0;
          return !1;
        }
        var o = {};
        Qp("ES5", {
          J: function (t, n) {
            var r = Array.isArray(t),
              o = (function (t, n) {
                if (t) {
                  for (var r = Array(n.length), o = 0; o < n.length; o++)
                    Object.defineProperty(r, "" + o, e(o, !0));
                  return r;
                }
                var a = km(n);
                delete a[xm];
                for (var i = Sm(a), l = 0; l < i.length; l++) {
                  var u = i[l];
                  a[u] = e(u, t || !!a[u].enumerable);
                }
                return Object.create(Object.getPrototypeOf(n), a);
              })(r, t),
              a = {
                i: r ? 5 : 4,
                A: n ? n.A : Kp(),
                P: !1,
                I: !1,
                D: {},
                l: n,
                t,
                k: o,
                o: null,
                O: !1,
                C: !1,
              };
            return Object.defineProperty(o, xm, { value: a, writable: !0 }), o;
          },
          S: function (e, n, o) {
            o
              ? Dp(n) && n[xm].A === e && t(e.p)
              : (e.u &&
                  (function e(t) {
                    if (t && "object" == typeof t) {
                      var n = t[xm];
                      if (n) {
                        var o = n.t,
                          a = n.k,
                          i = n.D,
                          l = n.i;
                        if (4 === l)
                          Rp(a, function (t) {
                            t !== xm &&
                              (void 0 !== o[t] || zp(o, t)
                                ? i[t] || e(a[t])
                                : ((i[t] = !0), cm(n)));
                          }),
                            Rp(o, function (e) {
                              void 0 !== a[e] ||
                                zp(a, e) ||
                                ((i[e] = !1), cm(n));
                            });
                        else if (5 === l) {
                          if (
                            (r(n) && (cm(n), (i.length = !0)),
                            a.length < o.length)
                          )
                            for (var u = a.length; u < o.length; u++) i[u] = !1;
                          else
                            for (var c = o.length; c < a.length; c++) i[c] = !0;
                          for (
                            var s = Math.min(a.length, o.length), f = 0;
                            f < s;
                            f++
                          )
                            a.hasOwnProperty(f) || (i[f] = !0),
                              void 0 === i[f] && e(a[f]);
                        }
                      }
                    }
                  })(e.p[0]),
                t(e.p));
          },
          K: function (e) {
            return 4 === e.i ? n(e) : r(e);
          },
        });
      }
      var gm,
        hm,
        vm = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        ym = "undefined" != typeof Map,
        bm = "undefined" != typeof Set,
        _m =
          "undefined" != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "undefined" != typeof Reflect,
        wm = vm
          ? Symbol.for("immer-nothing")
          : (((gm = {})["immer-nothing"] = !0), gm),
        Em = vm ? Symbol.for("immer-draftable") : "__$immer_draftable",
        xm = vm ? Symbol.for("immer-state") : "__$immer_state",
        Om =
          ("undefined" != typeof Symbol && Symbol.iterator,
          "" + Object.prototype.constructor),
        Sm =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(
                    Object.getOwnPropertySymbols(e),
                  );
                }
              : Object.getOwnPropertyNames,
        km =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              Sm(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n);
              }),
              t
            );
          },
        jm = {},
        Pm = {
          get: function (e, t) {
            if (t === xm) return e;
            var n = Bp(e);
            if (!zp(n, t))
              return (function (e, t, n) {
                var r,
                  o = um(t, n);
                return o
                  ? "value" in o
                    ? o.value
                    : null === (r = o.get) || void 0 === r
                      ? void 0
                      : r.call(e.k)
                  : void 0;
              })(e, n, t);
            var r = n[t];
            return e.I || !Mp(r)
              ? r
              : r === lm(e.t, t)
                ? (sm(e), (e.o[t] = fm(e.A.h, r, e)))
                : r;
          },
          has: function (e, t) {
            return t in Bp(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(Bp(e));
          },
          set: function (e, t, n) {
            var r = um(Bp(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
              var o = lm(Bp(e), t),
                a = null == o ? void 0 : o[xm];
              if (a && a.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
              if (Hp(n, o) && (void 0 !== n || zp(e.t, t))) return !0;
              sm(e), cm(e);
            }
            return (
              (e.o[t] === n &&
                "number" != typeof n &&
                (void 0 !== n || t in e.o)) ||
              ((e.o[t] = n), (e.D[t] = !0), !0)
            );
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== lm(e.t, t) || t in e.t
                ? ((e.D[t] = !1), sm(e), cm(e))
                : delete e.D[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = Bp(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: r.enumerable,
                  value: n[t],
                }
              : r;
          },
          defineProperty: function () {
            Ap(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            Ap(12);
          },
        },
        Cm = {};
      Rp(Pm, function (e, t) {
        Cm[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (Cm.deleteProperty = function (e, t) {
          return Cm.set.call(this, e, t, void 0);
        }),
        (Cm.set = function (e, t, n) {
          return Pm.set.call(this, e[0], t, n, e[0]);
        });
      var Tm = (function () {
          function e(e) {
            var t = this;
            (this.g = _m),
              (this.F = !0),
              (this.produce = function (e, n, r) {
                if ("function" == typeof e && "function" != typeof n) {
                  var o = n;
                  n = e;
                  var a = t;
                  return function (e) {
                    var t = this;
                    void 0 === e && (e = o);
                    for (
                      var r = arguments.length,
                        i = Array(r > 1 ? r - 1 : 0),
                        l = 1;
                      l < r;
                      l++
                    )
                      i[l - 1] = arguments[l];
                    return a.produce(e, function (e) {
                      var r;
                      return (r = n).call.apply(r, [t, e].concat(i));
                    });
                  };
                }
                var i;
                if (
                  ("function" != typeof n && Ap(6),
                  void 0 !== r && "function" != typeof r && Ap(7),
                  Mp(e))
                ) {
                  var l = tm(t),
                    u = fm(t, e, void 0),
                    c = !0;
                  try {
                    (i = n(u)), (c = !1);
                  } finally {
                    c ? Jp(l) : em(l);
                  }
                  return "undefined" != typeof Promise && i instanceof Promise
                    ? i.then(
                        function (e) {
                          return Zp(l, r), rm(e, l);
                        },
                        function (e) {
                          throw (Jp(l), e);
                        },
                      )
                    : (Zp(l, r), rm(i, l));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (i = n(e)) && (i = e),
                    i === wm && (i = void 0),
                    t.F && Xp(i, !0),
                    r)
                  ) {
                    var s = [],
                      f = [];
                    Gp("Patches").M(e, i, s, f), r(s, f);
                  }
                  return i;
                }
                Ap(21, e);
              }),
              (this.produceWithPatches = function (e, n) {
                if ("function" == typeof e)
                  return function (n) {
                    for (
                      var r = arguments.length,
                        o = Array(r > 1 ? r - 1 : 0),
                        a = 1;
                      a < r;
                      a++
                    )
                      o[a - 1] = arguments[a];
                    return t.produceWithPatches(n, function (t) {
                      return e.apply(void 0, [t].concat(o));
                    });
                  };
                var r,
                  o,
                  a = t.produce(e, n, function (e, t) {
                    (r = e), (o = t);
                  });
                return "undefined" != typeof Promise && a instanceof Promise
                  ? a.then(function (e) {
                      return [e, r, o];
                    })
                  : [a, r, o];
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function (e) {
              Mp(e) || Ap(8), Dp(e) && (e = dm(e));
              var t = tm(this),
                n = fm(this, e, void 0);
              return (n[xm].C = !0), em(t), n;
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[xm]).A;
              return Zp(n, t), rm(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.F = e;
            }),
            (t.setUseProxies = function (e) {
              e && !_m && Ap(20), (this.g = e);
            }),
            (t.applyPatches = function (e, t) {
              var n;
              for (n = t.length - 1; n >= 0; n--) {
                var r = t[n];
                if (0 === r.path.length && "replace" === r.op) {
                  e = r.value;
                  break;
                }
              }
              n > -1 && (t = t.slice(n + 1));
              var o = Gp("Patches").$;
              return Dp(e)
                ? o(e, t)
                : this.produce(e, function (e) {
                    return o(e, t);
                  });
            }),
            e
          );
        })(),
        Nm = new Tm(),
        Lm = Nm.produce;
      Nm.produceWithPatches.bind(Nm),
        Nm.setAutoFreeze.bind(Nm),
        Nm.setUseProxies.bind(Nm),
        Nm.applyPatches.bind(Nm),
        Nm.createDraft.bind(Nm),
        Nm.finishDraft.bind(Nm);
      const Am = Lm;
      function Dm(e, t, n) {
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
      function Mm(e, t) {
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
      function Rm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Mm(Object(n), !0).forEach(function (t) {
                Dm(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Mm(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Im(e) {
        return (
          "Minified Redux error #" +
          e +
          "; visit https://redux.js.org/Errors?code=" +
          e +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var zm =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        Fm = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        Um = {
          INIT: "@@redux/INIT" + Fm(),
          REPLACE: "@@redux/REPLACE" + Fm(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + Fm();
          },
        };
      function Hm(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function Wm(e, t, n) {
        var r;
        if (
          ("function" == typeof t && "function" == typeof n) ||
          ("function" == typeof n && "function" == typeof arguments[3])
        )
          throw new Error(Im(0));
        if (
          ("function" == typeof t && void 0 === n && ((n = t), (t = void 0)),
          void 0 !== n)
        ) {
          if ("function" != typeof n) throw new Error(Im(1));
          return n(Wm)(e, t);
        }
        if ("function" != typeof e) throw new Error(Im(2));
        var o = e,
          a = t,
          i = [],
          l = i,
          u = !1;
        function c() {
          l === i && (l = i.slice());
        }
        function s() {
          if (u) throw new Error(Im(3));
          return a;
        }
        function f(e) {
          if ("function" != typeof e) throw new Error(Im(4));
          if (u) throw new Error(Im(5));
          var t = !0;
          return (
            c(),
            l.push(e),
            function () {
              if (t) {
                if (u) throw new Error(Im(6));
                (t = !1), c();
                var n = l.indexOf(e);
                l.splice(n, 1), (i = null);
              }
            }
          );
        }
        function d(e) {
          if (!Hm(e)) throw new Error(Im(7));
          if (void 0 === e.type) throw new Error(Im(8));
          if (u) throw new Error(Im(9));
          try {
            (u = !0), (a = o(a, e));
          } finally {
            u = !1;
          }
          for (var t = (i = l), n = 0; n < t.length; n++) {
            (0, t[n])();
          }
          return e;
        }
        function p(e) {
          if ("function" != typeof e) throw new Error(Im(10));
          (o = e), d({ type: Um.REPLACE });
        }
        function m() {
          var e,
            t = f;
          return (
            ((e = {
              subscribe: function (e) {
                if ("object" != typeof e || null === e) throw new Error(Im(11));
                function n() {
                  e.next && e.next(s());
                }
                return n(), { unsubscribe: t(n) };
              },
            })[zm] = function () {
              return this;
            }),
            e
          );
        }
        return (
          d({ type: Um.INIT }),
          ((r = { dispatch: d, subscribe: f, getState: s, replaceReducer: p })[
            zm
          ] = m),
          r
        );
      }
      function $m(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
          var o = t[r];
          0, "function" == typeof e[o] && (n[o] = e[o]);
        }
        var a,
          i = Object.keys(n);
        try {
          !(function (e) {
            Object.keys(e).forEach(function (t) {
              var n = e[t];
              if (void 0 === n(void 0, { type: Um.INIT }))
                throw new Error(Im(12));
              if (void 0 === n(void 0, { type: Um.PROBE_UNKNOWN_ACTION() }))
                throw new Error(Im(13));
            });
          })(n);
        } catch (e) {
          a = e;
        }
        return function (e, t) {
          if ((void 0 === e && (e = {}), a)) throw a;
          for (var r = !1, o = {}, l = 0; l < i.length; l++) {
            var u = i[l],
              c = n[u],
              s = e[u],
              f = c(s, t);
            if (void 0 === f) {
              t && t.type;
              throw new Error(Im(14));
            }
            (o[u] = f), (r = r || f !== s);
          }
          return (r = r || i.length !== Object.keys(e).length) ? o : e;
        };
      }
      function Bm() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return 0 === t.length
          ? function (e) {
              return e;
            }
          : 1 === t.length
            ? t[0]
            : t.reduce(function (e, t) {
                return function () {
                  return e(t.apply(void 0, arguments));
                };
              });
      }
      function Vm() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          return function () {
            var n = e.apply(void 0, arguments),
              r = function () {
                throw new Error(Im(15));
              },
              o = {
                getState: n.getState,
                dispatch: function () {
                  return r.apply(void 0, arguments);
                },
              },
              a = t.map(function (e) {
                return e(o);
              });
            return (
              (r = Bm.apply(void 0, a)(n.dispatch)),
              Rm(Rm({}, n), {}, { dispatch: r })
            );
          };
        };
      }
      function Xm(e) {
        return function (t) {
          var n = t.dispatch,
            r = t.getState;
          return function (t) {
            return function (o) {
              return "function" == typeof o ? o(n, r, e) : t(o);
            };
          };
        };
      }
      var qm = Xm();
      qm.withExtraArgument = Xm;
      const Ym = qm;
      var Gm,
        Qm =
          ((Gm = function (e, t) {
            return (
              (Gm =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              Gm(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function n() {
              this.constructor = e;
            }
            Gm(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        Km = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        Zm = function (e, t) {
          for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
            e[o] = t[n];
          return e;
        },
        Jm = Object.defineProperty,
        eg = Object.defineProperties,
        tg = Object.getOwnPropertyDescriptors,
        ng = Object.getOwnPropertySymbols,
        rg = Object.prototype.hasOwnProperty,
        og = Object.prototype.propertyIsEnumerable,
        ag = function (e, t, n) {
          return t in e
            ? Jm(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
        },
        ig = function (e, t) {
          for (var n in t || (t = {})) rg.call(t, n) && ag(e, n, t[n]);
          if (ng)
            for (var r = 0, o = ng(t); r < o.length; r++) {
              n = o[r];
              og.call(t, n) && ag(e, n, t[n]);
            }
          return e;
        },
        lg = function (e, t) {
          return eg(e, tg(t));
        },
        ug = function (e, t, n) {
          return new Promise(function (r, o) {
            var a = function (e) {
                try {
                  l(n.next(e));
                } catch (e) {
                  o(e);
                }
              },
              i = function (e) {
                try {
                  l(n.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              l = function (e) {
                return e.done
                  ? r(e.value)
                  : Promise.resolve(e.value).then(a, i);
              };
            l((n = n.apply(e, t)).next());
          });
        },
        cg =
          "undefined" != typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                if (0 !== arguments.length)
                  return "object" == typeof arguments[0]
                    ? Bm
                    : Bm.apply(null, arguments);
              };
      "undefined" != typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__;
      function sg(e) {
        if ("object" != typeof e || null === e) return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        for (var n = t; null !== Object.getPrototypeOf(n); )
          n = Object.getPrototypeOf(n);
        return t === n;
      }
      var fg = (function (e) {
        function t() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          var o = e.apply(this, n) || this;
          return Object.setPrototypeOf(o, t.prototype), o;
        }
        return (
          Qm(t, e),
          Object.defineProperty(t, Symbol.species, {
            get: function () {
              return t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.concat = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return e.prototype.concat.apply(this, t);
          }),
          (t.prototype.prepend = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return 1 === e.length && Array.isArray(e[0])
              ? new (t.bind.apply(t, Zm([void 0], e[0].concat(this))))()
              : new (t.bind.apply(t, Zm([void 0], e.concat(this))))();
          }),
          t
        );
      })(Array);
      function dg(e) {
        return Mp(e) ? Am(e, function () {}) : e;
      }
      function pg() {
        return function (e) {
          return (function (e) {
            void 0 === e && (e = {});
            var t = e.thunk,
              n = void 0 === t || t,
              r = (e.immutableCheck, e.serializableCheck, new fg());
            n &&
              (!(function (e) {
                return "boolean" == typeof e;
              })(n)
                ? r.push(Ym.withExtraArgument(n.extraArgument))
                : r.push(Ym));
            0;
            return r;
          })(e);
        };
      }
      function mg(e, t) {
        function n() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          if (t) {
            var o = t.apply(void 0, n);
            if (!o) throw new Error("prepareAction did not return an object");
            return ig(
              ig(
                { type: e, payload: o.payload },
                "meta" in o && { meta: o.meta },
              ),
              "error" in o && { error: o.error },
            );
          }
          return { type: e, payload: n[0] };
        }
        return (
          (n.toString = function () {
            return "" + e;
          }),
          (n.type = e),
          (n.match = function (t) {
            return t.type === e;
          }),
          n
        );
      }
      function gg(e) {
        var t,
          n = {},
          r = [],
          o = {
            addCase: function (e, t) {
              var r = "string" == typeof e ? e : e.type;
              if (r in n)
                throw new Error(
                  "addCase cannot be called with two reducers for the same action type",
                );
              return (n[r] = t), o;
            },
            addMatcher: function (e, t) {
              return r.push({ matcher: e, reducer: t }), o;
            },
            addDefaultCase: function (e) {
              return (t = e), o;
            },
          };
        return e(o), [n, r, t];
      }
      var hg = function (e) {
          void 0 === e && (e = 21);
          for (var t = "", n = e; n--; )
            t +=
              "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
                (64 * Math.random()) | 0
              ];
          return t;
        },
        vg = ["name", "message", "stack", "code"],
        yg = function (e, t) {
          (this.payload = e), (this.meta = t);
        },
        bg = function (e, t) {
          (this.payload = e), (this.meta = t);
        },
        _g = function (e) {
          if ("object" == typeof e && null !== e) {
            for (var t = {}, n = 0, r = vg; n < r.length; n++) {
              var o = r[n];
              "string" == typeof e[o] && (t[o] = e[o]);
            }
            return t;
          }
          return { message: String(e) };
        };
      !(function () {
        function e(e, t, n) {
          var r = mg(e + "/fulfilled", function (e, t, n, r) {
              return {
                payload: e,
                meta: lg(ig({}, r || {}), {
                  arg: n,
                  requestId: t,
                  requestStatus: "fulfilled",
                }),
              };
            }),
            o = mg(e + "/pending", function (e, t, n) {
              return {
                payload: void 0,
                meta: lg(ig({}, n || {}), {
                  arg: t,
                  requestId: e,
                  requestStatus: "pending",
                }),
              };
            }),
            a = mg(e + "/rejected", function (e, t, r, o, a) {
              return {
                payload: o,
                error: ((n && n.serializeError) || _g)(e || "Rejected"),
                meta: lg(ig({}, a || {}), {
                  arg: r,
                  requestId: t,
                  rejectedWithValue: !!o,
                  requestStatus: "rejected",
                  aborted: "AbortError" === (null == e ? void 0 : e.name),
                  condition: "ConditionError" === (null == e ? void 0 : e.name),
                }),
              };
            }),
            i =
              "undefined" != typeof AbortController
                ? AbortController
                : (function () {
                    function e() {
                      this.signal = {
                        aborted: !1,
                        addEventListener: function () {},
                        dispatchEvent: function () {
                          return !1;
                        },
                        onabort: function () {},
                        removeEventListener: function () {},
                        reason: void 0,
                        throwIfAborted: function () {},
                      };
                    }
                    return (
                      (e.prototype.abort = function () {
                        0;
                      }),
                      e
                    );
                  })();
          return Object.assign(
            function (e) {
              return function (l, u, c) {
                var s,
                  f = (null == n ? void 0 : n.idGenerator)
                    ? n.idGenerator(e)
                    : hg(),
                  d = new i();
                function p(e) {
                  (s = e), d.abort();
                }
                var m = (function () {
                  return ug(this, null, function () {
                    var i, m, g, h, v, y;
                    return Km(this, function (b) {
                      switch (b.label) {
                        case 0:
                          return (
                            b.trys.push([0, 4, , 5]),
                            (h =
                              null == (i = null == n ? void 0 : n.condition)
                                ? void 0
                                : i.call(n, e, { getState: u, extra: c })),
                            null === (_ = h) ||
                            "object" != typeof _ ||
                            "function" != typeof _.then
                              ? [3, 2]
                              : [4, h]
                          );
                        case 1:
                          (h = b.sent()), (b.label = 2);
                        case 2:
                          if (!1 === h || d.signal.aborted)
                            throw {
                              name: "ConditionError",
                              message:
                                "Aborted due to condition callback returning false.",
                            };
                          return (
                            !0,
                            (v = new Promise(function (e, t) {
                              return d.signal.addEventListener(
                                "abort",
                                function () {
                                  return t({
                                    name: "AbortError",
                                    message: s || "Aborted",
                                  });
                                },
                              );
                            })),
                            l(
                              o(
                                f,
                                e,
                                null ==
                                  (m = null == n ? void 0 : n.getPendingMeta)
                                  ? void 0
                                  : m.call(
                                      n,
                                      { requestId: f, arg: e },
                                      { getState: u, extra: c },
                                    ),
                              ),
                            ),
                            [
                              4,
                              Promise.race([
                                v,
                                Promise.resolve(
                                  t(e, {
                                    dispatch: l,
                                    getState: u,
                                    extra: c,
                                    requestId: f,
                                    signal: d.signal,
                                    abort: p,
                                    rejectWithValue: function (e, t) {
                                      return new yg(e, t);
                                    },
                                    fulfillWithValue: function (e, t) {
                                      return new bg(e, t);
                                    },
                                  }),
                                ).then(function (t) {
                                  if (t instanceof yg) throw t;
                                  return t instanceof bg
                                    ? r(t.payload, f, e, t.meta)
                                    : r(t, f, e);
                                }),
                              ]),
                            ]
                          );
                        case 3:
                          return (g = b.sent()), [3, 5];
                        case 4:
                          return (
                            (y = b.sent()),
                            (g =
                              y instanceof yg
                                ? a(null, f, e, y.payload, y.meta)
                                : a(y, f, e)),
                            [3, 5]
                          );
                        case 5:
                          return (
                            (n &&
                              !n.dispatchConditionRejection &&
                              a.match(g) &&
                              g.meta.condition) ||
                              l(g),
                            [2, g]
                          );
                      }
                      var _;
                    });
                  });
                })();
                return Object.assign(m, {
                  abort: p,
                  requestId: f,
                  arg: e,
                  unwrap: function () {
                    return m.then(wg);
                  },
                });
              };
            },
            { pending: o, rejected: a, fulfilled: r, typePrefix: e },
          );
        }
        e.withTypes = function () {
          return e;
        };
      })();
      function wg(e) {
        if (e.meta && e.meta.rejectedWithValue) throw e.payload;
        if (e.error) throw e.error;
        return e.payload;
      }
      Object.assign;
      var Eg = "listenerMiddleware";
      mg(Eg + "/add"), mg(Eg + "/removeAll"), mg(Eg + "/remove");
      "function" == typeof queueMicrotask &&
        queueMicrotask.bind(
          "undefined" != typeof window
            ? window
            : void 0 !== n.g
              ? n.g
              : globalThis,
        );
      var xg,
        Og = function (e) {
          return function (t) {
            setTimeout(t, e);
          };
        };
      "undefined" != typeof window && window.requestAnimationFrame
        ? window.requestAnimationFrame
        : Og(10);
      mm();
      const Sg = (function (e) {
          var t = e.name;
          if (!t)
            throw new Error("`name` is a required option for createSlice");
          var n,
            r =
              "function" == typeof e.initialState
                ? e.initialState
                : dg(e.initialState),
            o = e.reducers || {},
            a = Object.keys(o),
            i = {},
            l = {},
            u = {};
          function c() {
            var t =
                "function" == typeof e.extraReducers
                  ? gg(e.extraReducers)
                  : [e.extraReducers],
              n = t[0],
              o = void 0 === n ? {} : n,
              a = t[1],
              i = void 0 === a ? [] : a,
              u = t[2],
              c = void 0 === u ? void 0 : u,
              s = ig(ig({}, o), l);
            return (function (e, t, n, r) {
              void 0 === n && (n = []);
              var o,
                a = "function" == typeof t ? gg(t) : [t, n, r],
                i = a[0],
                l = a[1],
                u = a[2];
              if (
                (function (e) {
                  return "function" == typeof e;
                })(e)
              )
                o = function () {
                  return dg(e());
                };
              else {
                var c = dg(e);
                o = function () {
                  return c;
                };
              }
              function s(e, t) {
                void 0 === e && (e = o());
                var n = Zm(
                  [i[t.type]],
                  l
                    .filter(function (e) {
                      return (0, e.matcher)(t);
                    })
                    .map(function (e) {
                      return e.reducer;
                    }),
                );
                return (
                  0 ===
                    n.filter(function (e) {
                      return !!e;
                    }).length && (n = [u]),
                  n.reduce(function (e, n) {
                    if (n) {
                      var r;
                      if (Dp(e)) return void 0 === (r = n(e, t)) ? e : r;
                      if (Mp(e))
                        return Am(e, function (e) {
                          return n(e, t);
                        });
                      if (void 0 === (r = n(e, t))) {
                        if (null === e) return e;
                        throw Error(
                          "A case reducer on a non-draftable value must not return undefined",
                        );
                      }
                      return r;
                    }
                    return e;
                  }, e)
                );
              }
              return (s.getInitialState = o), s;
            })(r, function (e) {
              for (var t in s) e.addCase(t, s[t]);
              for (var n = 0, r = i; n < r.length; n++) {
                var o = r[n];
                e.addMatcher(o.matcher, o.reducer);
              }
              c && e.addDefaultCase(c);
            });
          }
          return (
            a.forEach(function (e) {
              var n,
                r,
                a = o[e],
                c = t + "/" + e;
              "reducer" in a ? ((n = a.reducer), (r = a.prepare)) : (n = a),
                (i[e] = n),
                (l[c] = n),
                (u[e] = r ? mg(c, r) : mg(c));
            }),
            {
              name: t,
              reducer: function (e, t) {
                return n || (n = c()), n(e, t);
              },
              actions: u,
              caseReducers: i,
              getInitialState: function () {
                return n || (n = c()), n.getInitialState();
              },
            }
          );
        })({
          name: "options",
          initialState: {},
          reducers: {
            updateOptions: (e, t) => {
              Object.assign(e, t.payload);
            },
          },
        }),
        { updateOptions: kg } = Sg.actions,
        jg = (function (e) {
          var t,
            n = pg(),
            r = e || {},
            o = r.reducer,
            a = void 0 === o ? void 0 : o,
            i = r.middleware,
            l = void 0 === i ? n() : i,
            u = r.devTools,
            c = void 0 === u || u,
            s = r.preloadedState,
            f = void 0 === s ? void 0 : s,
            d = r.enhancers,
            p = void 0 === d ? void 0 : d;
          if ("function" == typeof a) t = a;
          else {
            if (!sg(a))
              throw new Error(
                '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
              );
            t = $m(a);
          }
          var m = l;
          "function" == typeof m && (m = m(n));
          var g = Vm.apply(void 0, m),
            h = Bm;
          c && (h = cg(ig({ trace: !1 }, "object" == typeof c && c)));
          var v = [g];
          return (
            Array.isArray(p)
              ? (v = Zm([g], p))
              : "function" == typeof p && (v = p(v)),
            Wm(t, f, h.apply(void 0, v))
          );
        })({ reducer: { options: Sg.reducer } }),
        Pg = jg;
      const Cg = (e) => {
        try {
          return chrome.runtime.getURL(e);
        } catch (t) {
          return chrome.extension.getURL(e);
        }
      };
      let Tg;
      const Ng = () => {
        (window._TRANSMART_CTX_SHADOW_ROOT = v),
          (window._TRANSMART_CRX_APP_CONTAINER = h);
      };
      (() => {
        Ng(),
          (() => {
            let e = document.createElement("style");
            (e.type = "text/css"),
              (e.textContent =
                '@font-face { font-family: TencentSans; src: url("' +
                Cg("/static/fonts/TencentSans.woff2") +
                '"); }'),
              document.head.appendChild(e);
          })();
        const n = ((r = V(v)), document.documentElement.appendChild(r), r);
        var r;
        n.setAttribute("style", "all: initial;");
        const o = n.attachShadow({ mode: "open" });
        (Tg = V(h)), o.appendChild(Tg);
        const a = document.createElement("link");
        (a.rel = "stylesheet"),
          (a.href = Cg("/static/css/content.css")),
          o.appendChild(a),
          "undefined" != typeof navigator &&
            /windows|win32/i.test(navigator.userAgent) &&
            (function () {
              var e;
              const t =
                  "\n    ::-webkit-scrollbar-track-piece {\n      position: absolute;\n      background-color: #fff;\n      border-radius: 0;\n    }\n    ::-webkit-scrollbar {\n      width: 10px;\n      height: 10px;\n    }\n    ::-webkit-scrollbar-thumb {\n      height: 50px;\n      background-color: #b8b8b8;\n      border: 2px solid #fff;\n      border-radius: 6px;\n      outline: 2px solid #fff;\n      outline-offset: -2px;\n      -moz-opacity: 0.3;\n      -khtml-opacity: 0.3;\n      opacity: 0.5;\n      filter: alpha(opacity = 30);\n    }\n    ::-webkit-scrollbar-thumb:hover {\n      height: 50px;\n      background-color: #878987;\n    }\n  ",
                n = document.createElement("style");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                n.appendChild(document.createTextNode(t)),
                (null === (e = n.styleSheet) || void 0 === e
                  ? void 0
                  : e.cssText) && (n.styleSheet.cssText = t),
                document
                  .getElementById(window._TRANSMART_CTX_SHADOW_ROOT)
                  .shadowRoot.appendChild(n);
            })(),
          (a.onload = () => {
            t.render(
              e.createElement(m, { store: Pg }, e.createElement(Lp, null)),
              Tg,
            );
          });
      })();
    })();
})();

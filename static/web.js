! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.YveBot = e() }(this, function() { "use strict"; var r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e) };

    function n(t, e) {
        function n() { this.constructor = t }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n) } var p = function() { return (p = Object.assign || function(t) { for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t }).apply(this, arguments) };

    function l(t, e) { var n = {}; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]); if (null != t && "function" == typeof Object.getOwnPropertySymbols) { var i = 0; for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && (n[r[i]] = t[r[i]]) } return n }

    function h(o, s, u, a) { return new(u || (u = Promise))(function(t, e) {
            function n(t) { try { i(a.next(t)) } catch (t) { e(t) } }

            function r(t) { try { i(a.throw(t)) } catch (t) { e(t) } }

            function i(e) { e.done ? t(e.value) : new u(function(t) { t(e.value) }).then(n, r) }
            i((a = a.apply(o, s || [])).next()) }) }

    function d(n, r) { var i, o, s, t, u = { label: 0, sent: function() { if (1 & s[0]) throw s[1]; return s[1] }, trys: [], ops: [] }; return t = { next: e(0), throw: e(1), return: e(2) }, "function" == typeof Symbol && (t[Symbol.iterator] = function() { return this }), t;

        function e(e) { return function(t) { return function(e) { if (i) throw new TypeError("Generator is already executing."); for (; u;) try { if (i = 1, o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, e[1])).done) return s; switch (o = 0, s && (e = [2 & e[0], s.value]), e[0]) {
                            case 0:
                            case 1:
                                s = e; break;
                            case 4:
                                return u.label++, { value: e[1], done: !1 };
                            case 5:
                                u.label++, o = e[1], e = [0]; continue;
                            case 7:
                                e = u.ops.pop(), u.trys.pop(); continue;
                            default:
                                if (!(s = 0 < (s = u.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) { u = 0; continue } if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) { u.label = e[1]; break } if (6 === e[0] && u.label < s[1]) { u.label = s[1], s = e; break } if (s && u.label < s[2]) { u.label = s[2], u.ops.push(e); break }
                                s[2] && u.ops.pop(), u.trys.pop(); continue }
                        e = r.call(n, u) } catch (t) { e = [6, t], o = 0 } finally { i = s = 0 }
                    if (5 & e[0]) throw e[1]; return { value: e[0] ? e[1] : void 0, done: !0 } }([e, t]) } } } var o = t,
        i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;

    function t(t) { t || (t = {}); var e = t.ua; return e || "undefined" == typeof navigator || (e = navigator.userAgent), e && e.headers && "string" == typeof e.headers["user-agent"] && (e = e.headers["user-agent"]), "string" == typeof e && (t.tablet ? s.test(e) : i.test(e)) }
    t.isMobile = o; var u = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}; var e, a = (function(t) { var e, n;
            e = u, n = function() { var o = "undefined" != typeof Promise ? Promise : function() { return { then: function() { throw new Error("Queue.configure() before use Queue") } } },
                    s = function() {};

                function t(t, e, n) { this.options = n = n || {}, this.pendingPromises = 0, this.maxPendingPromises = void 0 !== t ? t : 1 / 0, this.maxQueuedPromises = void 0 !== e ? e : 1 / 0, this.queue = [] } return t.configure = function(t) { o = t }, t.prototype.add = function(r) { var i = this; return new o(function(t, e, n) { i.queue.length >= i.maxQueuedPromises ? e(new Error("Queue limit reached")) : (i.queue.push({ promiseGenerator: r, resolve: t, reject: e, notify: n || s }), i._dequeue()) }) }, t.prototype.getPendingLength = function() { return this.pendingPromises }, t.prototype.getQueueLength = function() { return this.queue.length }, t.prototype._dequeue = function() { var e = this; if (this.pendingPromises >= this.maxPendingPromises) return !1; var n, r = this.queue.shift(); if (!r) return this.options.onEmpty && this.options.onEmpty(), !1; try { this.pendingPromises++, (n = r.promiseGenerator(), n && "function" == typeof n.then ? n : new o(function(t) { t(n) })).then(function(t) { e.pendingPromises--, r.resolve(t), e._dequeue() }, function(t) { e.pendingPromises--, r.reject(t), e._dequeue() }, function(t) { r.notify(t) }) } catch (t) { e.pendingPromises--, r.reject(t), e._dequeue() } return !0 }, t }, t.exports ? t.exports = n() : e.Queue = n() }(e = { exports: {} }, e.exports), e.exports),
        c = function() {
            function t(t) { this._moduleName = t } return t.prototype.define = function(e, n, t) { var r = this,
                    i = !(t && t.override); if ("string" != typeof e) Object.keys(e).forEach(function(t) { r.define(t, e[t], n) });
                else if (i && e in this) { var o = typeof this;
                    console.warn("You can't redefine \"" + e + '" in ' + o + ". Force it using { override: true } in options argument.") } else this.set(e, n); return this }, t.prototype.defineExtension = function() { for (var n = this, r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t]; return this.define.apply(this, r),
                    function(t) { var e; return (e = t[n._moduleName]).define.apply(e, r) } }, t.prototype.set = function(t, e) { this[t] = e }, t }(),
        f = { timeout: function(e) { return new Promise(function(t) { return setTimeout(t, e) }) } },
        v = function(e) {
            function t() { var t = e.call(this, "actions") || this; return t.define(f), t } return n(t, e), t }(c),
        y = Array.isArray,
        m = "object" == typeof global && global && global.Object === Object && global,
        g = "object" == typeof self && self && self.Object === Object && self,
        b = m || g || Function("return this")(),
        x = b.Symbol,
        w = Object.prototype,
        _ = w.hasOwnProperty,
        E = w.toString,
        O = x ? x.toStringTag : void 0; var P = Object.prototype.toString; var I = "[object Null]",
        C = "[object Undefined]",
        j = x ? x.toStringTag : void 0;

    function S(t) { return null == t ? void 0 === t ? C : I : j && j in Object(t) ? function(t) { var e = _.call(t, O),
                n = t[O]; try { t[O] = void 0 } catch (t) {} var r = E.call(t); return e ? t[O] = n : delete t[O], r }(t) : (e = t, P.call(e)); var e } var M = "[object Symbol]";

    function T(t) { return "symbol" == typeof t || null != (e = t) && "object" == typeof e && S(t) == M; var e } var k = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        A = /^\w*$/;

    function F(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) } var R = "[object AsyncFunction]",
        L = "[object Function]",
        N = "[object GeneratorFunction]",
        U = "[object Proxy]"; var B, q = b["__core-js_shared__"],
        z = (B = /[^.]+$/.exec(q && q.keys && q.keys.IE_PROTO || "")) ? "Symbol(src)_1." + B : ""; var D = Function.prototype.toString; var $ = /^\[object .+?Constructor\]$/,
        H = Function.prototype,
        Q = Object.prototype,
        V = H.toString,
        W = Q.hasOwnProperty,
        G = RegExp("^" + V.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function Y(t) { return !(!F(t) || (e = t, z && z in e)) && (function(t) { if (!F(t)) return !1; var e = S(t); return e == L || e == N || e == R || e == U }(t) ? G : $).test(function(t) { if (null != t) { try { return D.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" }(t)); var e }

    function Z(t, e) { var n, r, i = (r = e, null == (n = t) ? void 0 : n[r]); return Y(i) ? i : void 0 } var K = Z(Object, "create"); var J = Object.prototype.hasOwnProperty; var X = Object.prototype.hasOwnProperty;

    function tt(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var r = t[e];
            this.set(r[0], r[1]) } }

    function et(t, e) { return t === e || t != t && e != e }

    function nt(t, e) { for (var n = t.length; n--;)
            if (et(t[n][0], e)) return n;
        return -1 }
    tt.prototype.clear = function() { this.__data__ = K ? K(null) : {}, this.size = 0 }, tt.prototype.delete = function(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e }, tt.prototype.get = function(t) { var e = this.__data__; if (K) { var n = e[t]; return "__lodash_hash_undefined__" === n ? void 0 : n } return J.call(e, t) ? e[t] : void 0 }, tt.prototype.has = function(t) { var e = this.__data__; return K ? void 0 !== e[t] : X.call(e, t) }, tt.prototype.set = function(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = K && void 0 === e ? "__lodash_hash_undefined__" : e, this }; var rt = Array.prototype.splice;

    function it(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var r = t[e];
            this.set(r[0], r[1]) } }
    it.prototype.clear = function() { this.__data__ = [], this.size = 0 }, it.prototype.delete = function(t) { var e = this.__data__,
            n = nt(e, t); return !(n < 0 || (n == e.length - 1 ? e.pop() : rt.call(e, n, 1), --this.size, 0)) }, it.prototype.get = function(t) { var e = this.__data__,
            n = nt(e, t); return n < 0 ? void 0 : e[n][1] }, it.prototype.has = function(t) { return -1 < nt(this.__data__, t) }, it.prototype.set = function(t, e) { var n = this.__data__,
            r = nt(n, t); return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this }; var ot = Z(b, "Map");

    function st(t, e) { var n, r, i = t.__data__; return ("string" == (r = typeof(n = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof e ? "string" : "hash"] : i.map }

    function ut(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var r = t[e];
            this.set(r[0], r[1]) } }
    ut.prototype.clear = function() { this.size = 0, this.__data__ = { hash: new tt, map: new(ot || it), string: new tt } }, ut.prototype.delete = function(t) { var e = st(this, t).delete(t); return this.size -= e ? 1 : 0, e }, ut.prototype.get = function(t) { return st(this, t).get(t) }, ut.prototype.has = function(t) { return st(this, t).has(t) }, ut.prototype.set = function(t, e) { var n = st(this, t),
            r = n.size; return n.set(t, e), this.size += n.size == r ? 0 : 1, this }; var at = "Expected a function";

    function ct(i, o) { if ("function" != typeof i || null != o && "function" != typeof o) throw new TypeError(at); var s = function() { var t = arguments,
                e = o ? o.apply(this, t) : t[0],
                n = s.cache; if (n.has(e)) return n.get(e); var r = i.apply(this, t); return s.cache = n.set(e, r) || n, r }; return s.cache = new(ct.Cache || ut), s }
    ct.Cache = ut; var lt, pt, ft = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        ht = /\\(\\)?/g,
        dt = (pt = (lt = ct(function(t) { var i = []; return 46 === t.charCodeAt(0) && i.push(""), t.replace(ft, function(t, e, n, r) { i.push(n ? r.replace(ht, "$1") : e || t) }), i }, function(t) { return 500 === pt.size && pt.clear(), t })).cache, lt); var vt = 1 / 0,
        yt = x ? x.prototype : void 0,
        mt = yt ? yt.toString : void 0;

    function gt(t) { if ("string" == typeof t) return t; if (y(t)) return function(t, e) { for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t); return i }(t, gt) + ""; if (T(t)) return mt ? mt.call(t) : ""; var e = t + ""; return "0" == e && 1 / t == -vt ? "-0" : e }

    function bt(t, e) { return y(t) ? t : function(t, e) { if (y(t)) return !1; var n = typeof t; return !("number" != n && "symbol" != n && "boolean" != n && null != t && !T(t)) || A.test(t) || !k.test(t) || null != e && t in Object(e) }(t, e) ? [t] : dt(null == (n = t) ? "" : gt(n)); var n } var xt = 1 / 0;

    function wt(t) { if ("string" == typeof t || T(t)) return t; var e = t + ""; return "0" == e && 1 / t == -xt ? "-0" : e }

    function _t(t, e) { for (var n = 0, r = (e = bt(e, t)).length; null != t && n < r;) t = t[wt(e[n++])]; return n && n == r ? t : void 0 }

    function Et(t, e, n) { var r = null == t ? void 0 : _t(t, e); return void 0 === r ? n : r }

    function Ot(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.__data__ = new ut; ++e < n;) this.add(t[e]) }

    function Pt(t) { return t != t }

    function It(t, e) { var n, r, i; return !!(null == t ? 0 : t.length) && (n = t, i = 0, -1 < ((r = e) == r ? function(t, e, n) { for (var r = n - 1, i = t.length; ++r < i;)
                if (t[r] === e) return r;
            return -1 }(n, r, i) : function(t, e, n, r) { for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                if (e(t[o], o, t)) return o;
            return -1 }(n, Pt, i))) }

    function Ct(t, e, n) { for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
            if (n(e, t[r])) return !0;
        return !1 }

    function jt(t, e) { return t.has(e) }
    Ot.prototype.add = Ot.prototype.push = function(t) { return this.__data__.set(t, "__lodash_hash_undefined__"), this }, Ot.prototype.has = function(t) { return this.__data__.has(t) }; var St = Z(b, "Set");

    function Mt(t) { var e = -1,
            n = Array(t.size); return t.forEach(function(t) { n[++e] = t }), n } var Tt = St && 1 / Mt(new St([, -0]))[1] == 1 / 0 ? function(t) { return new St(t) } : function() {},
        kt = 200;

    function At(t) { return t && t.length ? function(t, e, n) { var r = -1,
                i = It,
                o = t.length,
                s = !0,
                u = [],
                a = u; if (n) s = !1, i = Ct;
            else if (kt <= o) { var c = e ? null : Tt(t); if (c) return Mt(c);
                s = !1, i = jt, a = new Ot } else a = e ? [] : u;
            t: for (; ++r < o;) { var l = t[r],
                    p = e ? e(l) : l; if (l = n || 0 !== l ? l : 0, s && p == p) { for (var f = a.length; f--;)
                        if (a[f] === p) continue t;
                    e && a.push(p), u.push(l) } else i(a, p, n) || (a !== u && a.push(p), u.push(l)) }
            return u }(t) : [] }

    function Ft(t) { var r = t; return "string" == typeof r && (r = { message: r }), r.options = (r.options || []).map(function(t) { if ("string" == typeof t) return { value: t }; if ("string" == typeof t.synonyms && t.synonyms) { var e = t.synonyms;
                t.synonyms = e.split(",").map(function(t) { return t.trim() }) } return t }), r.passive = void 0 === r.passive || r.passive, r.multiline = void 0 === r.multiline || r.multiline, void 0 === r.skip ? r.skip = function() { return !1 } : r.skip = "function" == typeof r.skip ? r.skip : function() { return !!r.skip }, ["actions", "preActions", "postActions", "validators"].forEach(function(e) {
            function n(t) { t[e] && t[e].length && (t[e] = t[e].map(function(t) { var e; return "string" == typeof t ? ((e = {})[t] = !0, e) : t })) }
            n(r), r.options && r.options.length && r.options.forEach(function(t) { return n(t) }) }), r }

    function Rt(t) { if (t.executors) return t; var e = t,
            n = e.transform,
            r = e.validators,
            i = void 0 === r ? [] : r,
            o = l(e, ["transform", "validators"]); return p({ executors: [{ transform: n, validators: i }] }, o) }

    function Lt(t, o) { return t.replace(/{(.*?)}/g, function(t, e) { for (var n = o, r = 0, i = e.split("."); r < i.length; r++) { n = n[i[r]] } return n || "" }) }

    function Nt(t, e) { var n = String(e).toLowerCase(); return String(t).toLowerCase() === n }

    function Ut(t, e) { var r = Bt(e); return t.filter(function(n) { return r.some(function(t) { return Nt(t, n.value) }) || r.some(function(t) { return Nt(t, n.label) }) || r.some(function(e) { return (n.synonyms || []).some(function(t) { return Nt(e, t) }) }) })[0] }

    function Bt(t) { return void 0 === t ? [] : t instanceof Array ? t : [t] }

    function qt(e, t) { return t instanceof Array ? t.map(function(t) { return Ut(e.options, t) }) : [Ut(e.options, t)] }

    function zt(i, o, e, t) { var n = this,
            r = o[e] || [],
            s = (void 0 !== t ? qt(o, t) : []).filter(function(t) { return t && t[e] && 0 < t[e].length });
        s.length && (r = [].concat.apply([], s.map(function(t) { return t[e] }))); var u = i.store.output(); return Promise.all(r.map(function(r) { return h(n, void 0, void 0, function() { var e = this; return d(this, function(t) { return [2, Promise.all(Object.keys(r).map(function(n) { return h(e, void 0, void 0, function() { var e; return d(this, function(t) { switch (t.label) {
                                    case 0:
                                        return n in i.actions ? (e = r[n], [4, i.actions[n]("string" == typeof e ? Lt(e, u) : e, o, i)]) : [3, 2];
                                    case 1:
                                        return [2, t.sent()];
                                    case 2:
                                        return [2, null] } }) }) }))] }) }) })) }

    function Dt(t, e) { var n = t.rules[e] ? t.rules[e] : Ft({ exit: !0 }); return p({}, t.options.rule, n) } var $t = function() {
        function t(e) { this.bot = e, this._indexes = {}, this.reindex(),
                function(i, o) { var e = this;
                    ["run", "receiveMessage"].forEach(function(t) { var r = i[t];
                        i[t] = function() { for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t]; return h(e, void 0, void 0, function() { var e; return d(this, function(t) { switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, r.call.apply(r, [i].concat(n))];
                                        case 1:
                                            return [2, t.sent()];
                                        case 2:
                                            return e = t.sent(), o(e), [2, i];
                                        case 3:
                                            return [2] } }) }) } }) }(this, function(t) { return e.dispatch("error", t) }) } return t.prototype.reindex = function() { var o = this;
            this.bot.rules.forEach(function(t, e) { var n = t.name,
                    r = t.flow; if (r && (o._indexes[[r, t.flowIdx].join(".")] = e), n) { var i = r ? [r, n].join(".") : n;
                    o._indexes[i] = e } }) }, Object.defineProperty(t.prototype, "indexes", { get: function() { return this._indexes }, enumerable: !0, configurable: !0 }), t.prototype.run = function(s) { return h(this, void 0, void 0, function() { var r, i, o; return d(this, function(t) { switch (t.label) {
                        case 0:
                            return r = this.bot, i = r.store.output(), o = Dt(r, s), r.store.set("currentIdx", s), o.skip(i, o, r) ? [2, this.nextRule(o)] : r.options.enableWaitForSleep && "sleep" in o ? [4, r.actions.timeout(o.sleep)] : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return [4, zt(r, o, "preActions")];
                        case 3:
                            return t.sent(), e = r, (!(n = o).message && n.type && e.types[n.type] && "function" == typeof e.types[n.type].requiredMessage ? !e.types[n.type].requiredMessage(n) : n.message) ? [4, this.sendMessage(o.message, o)] : [3, 5];
                        case 4:
                            t.sent(), t.label = 5;
                        case 5:
                            return [4, zt(r, o, "actions")];
                        case 6:
                            if (t.sent(), o.exit) return r.end(), [2, this]; if (!o.type) return [2, this.nextRule(o)]; if (!r.types[o.type]) throw new r.exceptions.InvalidAttributeError("type", o); return r.store.set("waitingForAnswer", !0), r.dispatch("hear"), [2, this] } var e, n }) }) }, t.prototype.sendMessage = function(p, f) { return h(this, void 0, void 0, function() { var u, a, c, l; return d(this, function(t) { switch (t.label) {
                        case 0:
                            return u = this.bot, a = p || "", u.dispatch("typing"), !u.options.enableWaitForSleep || f.exit ? [3, 4] : "delay" in f ? [4, u.actions.timeout(f.delay)] : [3, 2];
                        case 1:
                            return t.sent(), [3, 4];
                        case 2:
                            return c = u.options.timePerChar, [4, u.actions.timeout((n = a, s = c, n.length * s))];
                        case 3:
                            t.sent(), t.label = 4;
                        case 4:
                            return e = a, i = (r = u).store.output(), o = r.controller.indexes, At((e.match(/(?!\{)\w+[.]((?:\w+[.])*\w+)(?=\})/g) || []).map(function(t) { return t.split(".")[0] })).map(function(t) { var n = r.rules[o[t]]; if (n && n.options.length) { var e = i[t];
                                    i[t] = function() { if (e instanceof Array) return e.map(function(t) { var e = Ut(n.options, t); return e.toString = function() { return t }, e }); var t = Ut(n.options, e); return t.toString = function() { return e }, t }() } }), l = Lt(e, i).trim(), u.dispatch("talk", l, f), u.dispatch("typed"), [2, this] } var r, e, i, o, n, s }) }) }, t.prototype.receiveMessage = function(l) { return h(this, void 0, void 0, function() { var e, n, r, i, o, s, u, a, c; return d(this, function(t) { switch (t.label) {
                        case 0:
                            if (e = this.bot, n = e.store.get("currentIdx"), r = Dt(e, n), e.dispatch("listen", l, r), !e.store.get("waitingForAnswer")) return [2, this];
                            t.label = 1;
                        case 1:
                            return t.trys.push([1, 3, , 7]), [4, this.executeRuleTypeExecutors(r, l)];
                        case 2:
                            return i = t.sent(), [3, 7];
                        case 3:
                            return o = t.sent(), s = !1, o instanceof e.exceptions.ValidatorError ? (s = !0, [4, this.sendMessage(o.message, r)]) : [3, 5];
                        case 4:
                            return t.sent(), [3, 6];
                        case 5:
                            o instanceof e.exceptions.PauseRuleTypeExecutors && (s = !0, this.incRuleExecutorIndex(r)), t.label = 6;
                        case 6:
                            if (s) return e.dispatch("hear"), [2, this]; throw o;
                        case 7:
                            return e.store.set("waitingForAnswer", !1), (u = r.output || r.name) && e.store.set("output." + u, i), (a = function(t, e) { if (!t.options.length) return t.replyMessage; var n = qt(t, e).filter(function(t) { return t && t.replyMessage })[0],
                                    r = void 0 === n ? null : n; return r && r.replyMessage ? r.replyMessage : t.replyMessage }(r, i)) ? (c = Ft(p({}, e.options.rule)), [4, this.sendMessage(a, c)]) : [3, 9];
                        case 8:
                            t.sent(), t.label = 9;
                        case 9:
                            return [4, zt(e, r, "postActions", i)];
                        case 10:
                            return t.sent(), "PassiveLoop" === r.type ? [2, this] : [2, this.nextRule(r, i)] } }) }) }, t.prototype.jumpByName = function(t) { var e = this._indexes[t]; if ("number" != typeof e) throw new this.bot.exceptions.RuleNotFound(t, this._indexes); return this.run(e) }, t.prototype.nextRule = function(t, e) { var n = this.bot,
                r = function(t, e) { if (t.options.length && void 0 !== e) { var n = Ut(t.options, e); if (n && n.next) return n.next } return t.next ? t.next : null }(t, e); if (r) { var i = void 0;
                i = /flow:/.test(r) ? Object.keys(n.controller.indexes).filter(function(t) { return t.startsWith(r.split("flow:")[1]) })[0] : /\./.test(r) ? r : [t.flow, r].filter(function(t) { return !!t }).join("."), this.jumpByName(i) } else { var o = n.store.get("currentIdx") + 1;
                this.run(o) } return this }, t.prototype.getRuleExecutorIndex = function(t) { return this.bot.store.get("executors." + t.name + ".currentIdx") || 0 }, t.prototype.incRuleExecutorIndex = function(t) { this.bot.store.set("executors." + t.name + ".currentIdx", this.getRuleExecutorIndex(t) + 1) }, t.prototype.resetRuleExecutorIndex = function(t) { this.bot.store.unset("executors." + t.name + ".currentIdx") }, t.prototype.executeRuleTypeExecutors = function(c, l) { return h(this, void 0, void 0, function() { var e, n, r, i, o, s, u, a = this; return d(this, function(t) { switch (t.label) {
                        case 0:
                            return c.type ? (e = this.bot, n = this.getRuleExecutorIndex(c), r = Bt(e.types[c.type].executors), i = Et(r.slice(n), 0, {}), o = i.transform, [4, (void 0 === o ? function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return Promise.resolve(t[0]) } : o)(l, c, e).then(function(t) { return function(o, c, l, s) { return h(this, void 0, void 0, function() { var e, n, r, i, u, a = this; return d(this, function(t) { switch (t.label) {
                                                case 0:
                                                    return e = Bt(c.validators), n = Bt(l.types[c.type].executors), r = Et(n, s, {}), i = [].concat(0 === s ? e : [], r.validators || []), u = Bt(o), [4, Promise.all(i.map(function(s) { return Promise.all(Object.keys(s).map(function(o) { return h(a, void 0, void 0, function() { var e, n, r, i; return d(this, function(t) { switch (t.label) {
                                                                        case 0:
                                                                            return (e = l.validators[o]) && "warning" !== o ? (n = s[o], [4, Promise.all(u.map(function(t) { return e.validate(n, t, c, l) }))]) : [2];
                                                                        case 1:
                                                                            if (!t.sent().every(function(t) { return t })) throw r = s.warning || e.warning, i = "function" == typeof r ? r(n) : r, new l.exceptions.ValidatorError(i, c); return [2] } }) }) })) }))];
                                                case 1:
                                                    return t.sent(), [2, o] } }) }) }(t, c, e, a.getRuleExecutorIndex(c)) })]) : [2, l];
                        case 1:
                            return s = t.sent(), u = this.getRuleExecutorIndex(c) === r.length - 1, !r.length || u ? [3, 3] : (this.incRuleExecutorIndex(c), [4, this.executeRuleTypeExecutors(c, s)]);
                        case 2:
                            return [2, t.sent()];
                        case 3:
                            return this.resetRuleExecutorIndex(c), [2, s] } }) }) }, t }(); var Ht = Object.freeze({ ValidatorError: function(t, e) { this.key = "validator", this.message = t || 'Invalid value for "' + e.type + '" type' }, InvalidAttributeError: function(t, e) { this.key = "invalidAttribute", this.message = "Invalid " + t + ' attribute "' + e.type + '"' }, RuleNotFound: function(t, e) { this.key = "ruleNotFound", this.message = 'Rule "' + t + '" not found in indexes', this.indexes = e }, PauseRuleTypeExecutors: function(t) { this.key = "pauseRuleTypeExecutors", this.message = 'Rule "' + t + '" must pause execution' } }),
        Qt = function(t) { return 0 <= ["string", "number"].indexOf(typeof t) },
        Vt = { includes: function(t, e) { return t instanceof RegExp ? Vt.regex(t, e) : !!Qt(t) && 0 <= e.toLowerCase().indexOf(String(t).toLowerCase()) }, equals: function(t, e) { return !!Qt(t) && e.toLowerCase() === String(t).toLowerCase() }, regex: function(t, e) { return t.test(e) }, function: function(t, e) { return t(e) } },
        Wt = function(e) {
            function t() { var t = e.call(this, "listeners") || this; return t.define(Vt), t } return n(t, e), t }(c),
        Gt = function() { try { var t = Z(Object, "defineProperty"); return t({}, "", {}), t } catch (t) {} }(); var Yt = Object.prototype.hasOwnProperty;

    function Zt(t, e, n) { var r, i, o, s = t[e];
        Yt.call(t, e) && et(s, n) && (void 0 !== n || e in t) || (r = t, o = n, "__proto__" == (i = e) && Gt ? Gt(r, i, { configurable: !0, enumerable: !0, value: o, writable: !0 }) : r[i] = o) } var Kt = 9007199254740991,
        Jt = /^(?:0|[1-9]\d*)$/;

    function Xt(t, e, n) { return null == t ? t : function(t, e, n, r) { if (!F(t)) return t; for (var i, o, s, u = -1, a = (e = bt(e, t)).length, c = a - 1, l = t; null != l && ++u < a;) { var p = wt(e[u]),
                    f = n; if (u != c) { var h = l[p];
                    void 0 === (f = r ? r(h, p, l) : void 0) && (f = F(h) ? h : (i = e[u + 1], s = typeof i, (o = null == (o = void 0) ? Kt : o) && ("number" == s || "symbol" != s && Jt.test(i)) && -1 < i && i % 1 == 0 && i < o ? [] : {})) }
                Zt(l, p, f), l = l[p] } return t }(t, e, n) }

    function te(t, e) { return e.length < 2 ? t : _t(t, function(t, e, n) { var r = -1,
                i = t.length;
            e < 0 && (e = i < -e ? 0 : i + e), (n = i < n ? i : n) < 0 && (n += i), i = n < e ? 0 : n - e >>> 0, e >>>= 0; for (var o = Array(i); ++r < i;) o[r] = t[r + e]; return o }(e, 0, -1)) }

    function ee(t, e) { return null == t || (null == (n = te(n = t, r = bt(r = e, n))) || delete n[wt((i = r, o = null == i ? 0 : i.length, o ? i[o - 1] : void 0))]); var n, r, i, o } var ne = function() {
            function t(t) { this.bot = t, this.reset() } return t.prototype.output = function(t) { if (t) return this.get("output." + t); var e = this.get("output"); return p({}, e) }, t.prototype.set = function(t, e) { this.data = Xt(p({}, this.data), t, e), this.bot.dispatch("storeChanged", this.data) }, t.prototype.get = function(t) { return t ? Et(this.data, t) : this.data }, t.prototype.unset = function(t) { var e = p({}, this.data);
                ee(e, t), this.data = e, this.bot.dispatch("storeChanged", this.data) }, t.prototype.reset = function() { this.data = { currentIdx: 0, output: {}, waitingForAnswer: !1 } }, t.prototype.replace = function(t) { this.reset(), this.data = p({}, this.data, t) }, t }(),
        re = window,
        ie = { Any: {}, Passive: {}, PassiveLoop: {}, String: { transform: function(e) { return h(re, void 0, void 0, function() { return d(this, function(t) { return [2, String(e)] }) }) } }, Number: { transform: function(e) { return h(re, void 0, void 0, function() { return d(this, function(t) { return [2, Number(e)] }) }) }, validators: [{ number: !0, warning: "Invalid number" }] }, SingleChoice: { transform: function(n, r) { return h(re, void 0, void 0, function() { var e; return d(this, function(t) { return (e = Ut(r.options, n)) ? [2, void 0 === e.value ? e.label : e.value] : [2, void 0] }) }) }, validators: [{ function: function(t, e) { return !!Ut(e.options, t) }, warning: "Unknown option" }], requiredMessage: function(t) { return !t.options.length } }, MultipleChoice: { transform: function(r, i) { return h(re, void 0, void 0, function() { var n; return d(this, function(t) { var e; return [2, At((r instanceof Array ? r : (n = [], i.options.forEach(function(t) { n.push(String(t.value || t.label)), t.synonyms && (n = n.concat(t.synonyms)) }), e = String(r), n.filter(function(t) { return 0 <= e.toLowerCase().indexOf(t.toLowerCase()) }))).map(function(t) { var e = Ut(i.options, t); if (e) return void 0 === e.value ? e.label : e.value }).filter(function(t) { return void 0 !== t }))] }) }) }, validators: [{ function: function(t, e) { var n = Bt(t),
                            r = e.options.map(function(t) { return String(t.value || t.label) }); return n.every(function(e) { return r.some(function(t) { return Nt(e, t) }) }) }, warning: "Unknown options" }], requiredMessage: function(t) { return !t.options.length } } },
        oe = function(r) {
            function t() { var t = r.call(this, "types") || this,
                    e = {}; for (var n in ie) ie.hasOwnProperty(n) && (e[n] = Rt(ie[n])); return t.define(e), t } return n(t, r), t.prototype.extend = function(t, e, n, r) { var i = this[e],
                    o = i.executors,
                    s = l(i, ["executors"]),
                    u = Rt(n),
                    a = u.executors,
                    c = l(u, ["executors"]); return this.define(t, p({ executors: o.concat(a) }, s, c), r) }, t.prototype.set = function(t, e) { this[t] = Rt(e) }, t }(c),
        se = function(t) { return /^\d+$/.test(t) },
        ue = function(t) { return se(t) ? Number(t) : t.length },
        ae = { required: { validate: function(t, e) { return Boolean((e || "").trim()) === t }, warning: "This is required" }, email: { validate: function(t, e) { return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) === t }, warning: "Invalid email format" }, regex: { validate: function(t, e) { return new RegExp(t).test(e) }, warning: "Invalid answer format" }, minWords: { validate: function(t, e) { return e.split(" ").length >= t }, warning: function(t) { return "This answer must have at least " + t + " words" } }, maxWords: { validate: function(t, e) { return e.split(" ").length <= t }, warning: function(t) { return "This answer must have a maximum " + t + " words" } }, min: { validate: function(t, e) { return ue(e) >= t }, warning: function(t) { return "This answer length must be min " + t } }, max: { validate: function(t, e) { return ue(e) <= t }, warning: function(t) { return "This answer length must be max " + t } }, lenght: { validate: function(t, e) { return ue(e) === t }, warning: function(t) { return "It must have lenght " + t } }, string: { validate: function(t, e) { return Boolean(!se(e) && "string" == typeof e) === t }, warning: "It must be a string" }, number: { validate: function(t, e) { return se(e) === t }, warning: "It must be a number" }, function: { validate: function(t, e, n, r) { return t(e, n, r) }, warning: "Error on execute a validator function" } },
        ce = function(e) {
            function t() { var t = e.call(this, "validators") || this; return t.define(ae), t } return n(t, e), t }(c),
        le = function() {
            function t(t, e) { var r;
                this.sessionId = "session", this.options = p({}, { enableWaitForSleep: !0, timePerChar: 40 }, e), this.rules = (r = [], t.forEach(function(n) { if ("string" != typeof n && "rules" in n && "flow" in n) { var t = n;
                        r = r.concat(t.rules.map(function(t, e) { return p({}, Ft(t), { flow: n.flow, flowIdx: e }) })) } else r.push(Ft(n)) }), r), this.handlers = {}, this.store = new ne(this), this.controller = new $t(this), this.queue = new a(1), this.options.context && this.store.set("context", this.options.context), this.on("error", function(t) { throw t }) } return Object.defineProperty(t.prototype, "context", { get: function() { return this.store.get("context") }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "types", { get: function() { return t.types }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "actions", { get: function() { return t.actions }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "listeners", { get: function() { return t.listeners }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "validators", { get: function() { return t.validators }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "exceptions", { get: function() { return t.exceptions }, enumerable: !0, configurable: !0 }), t.prototype.on = function(t, e) { return !(0 <= ["error"].indexOf(t)) && t in this.handlers ? this.handlers[t].push(e) : this.handlers[t] = [e], this }, t.prototype.listen = function(t) { var c = this; return this.on("listen", function(u, a) { t.every(function(t) { var e, n, r = (n = (e = t).passive, p({}, e, { passive: n || !1 })),
                            i = !r.passive && ["Passive", "PassiveLoop"].indexOf(a.type) < 0,
                            o = !a.passive; if (!r.next || i || o) return !0; var s = Object.keys(r).filter(function(t) { return "next" !== t && t in c.listeners })[0]; if (s && c.listeners[s](r[s], u)) return c.store.set("waitingForAnswer", !1), c.controller.jumpByName(r.next), !1; return !0 }) }), this }, t.prototype.start = function() { if (this.dispatch("start"), !this.store.get("waitingForAnswer")) { var t = this.store.get("currentIdx") || 0;
                    this.controller.run(t) } return this }, t.prototype.end = function() { return this.dispatch("end", this.store.output()), this }, t.prototype.talk = function(n, r) { return h(this, void 0, void 0, function() { var e; return d(this, function(t) { switch (t.label) {
                            case 0:
                                return e = p({}, this.options.rule, r || {}), [4, this.controller.sendMessage(n, e)];
                            case 1:
                                return t.sent(), [2, this] } }) }) }, t.prototype.hear = function(e) { return h(this, void 0, void 0, function() { return d(this, function(t) { switch (t.label) {
                            case 0:
                                return [4, this.controller.receiveMessage(e)];
                            case 1:
                                return t.sent(), this.dispatch("reply", e), [2, this] } }) }) }, t.prototype.dispatch = function(t) { for (var e = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r]; if (t in this.handlers) { if ("error" === t) return void this.handlers.error.map(function(t) { return t.apply(void 0, n.concat([e.sessionId])) });
                    Promise.all(this.handlers[t].map(function(t) { return e.queue.add(function() { try { return Promise.resolve(t.apply(void 0, n.concat([e.sessionId]))) } catch (t) { return e.dispatch("error", t), Promise.resolve() } }) })) } return this }, t.prototype.session = function(t, e) { return void 0 === e && (e = {}), e.rules && (this.rules = e.rules.map(Ft), this.controller.reindex()), e.store ? this.store.replace(e.store) : this.sessionId !== t && this.store.reset(), e.context && this.store.set("context", e.context), this.sessionId = t, this }, t.prototype.addRules = function(t) { this.rules = this.rules.concat(t.map(Ft)), this.controller.reindex() }, t }();

    function pe(t) { return [].slice.call(t) }
    le.types = new oe, le.actions = new v, le.listeners = new Wt, le.validators = new ce, le.exceptions = Ht; var fe = function() {
        function t(t, e) { this.isMobile = t, this.options = e, this.chat = this.createChat(), this.typing = this.createTyping(), this.conversation = this.createConversation(), this.textArea = this.createTextarea(), this.inputText = this.createInput(), this.input = this.textArea, this.submit = this.createSubmit(), this.form = this.createForm(), this.conversation.appendChild(this.typing), this.chat.appendChild(this.conversation), this.chat.appendChild(this.form), this.inputValue = "" } return t.prototype.createSingleChoiceMessage = function(t, n) { var r = this; return t.options.length ? (this.disableForm(this.options.inputPlaceholderSingleChoice), this.createBubbleMessage(t, function(t, e) { e.remove(), r.enableForm(), n(t.getAttribute("data-label"), t.getAttribute("data-value")) })) : document.createElement("div") }, t.prototype.createBubbleButton = function(t, e, n) { var r = document.createElement("button");
            r.className = "yvebot-message-bubbleBtn", n && n.className && r.classList.add(n.className), r.onclick = function() { return e(r) }; var i = t.value,
                o = t.label; return r.setAttribute("data-value", String((void 0 === i ? o : i) || "")), r.setAttribute("data-label", String((void 0 === o ? i : o) || "")), r.textContent = r.getAttribute("data-label"), r }, t.prototype.disableForm = function(t) { this.submit.disabled = !0, this.input.disabled = !0, this.input.placeholder = t, this.inputValue = this.input.value, this.input.value = "" }, t.prototype.enableForm = function() { var t = this;
            this.submit.disabled = !1, this.input.disabled = !1, this.input.placeholder = this.options.inputPlaceholder, this.input.value = this.inputValue, this.inputValue = "", this.options.autoFocus && (this.input.focus(), this.isMobile && setTimeout(function() { return t.scrollDown(0, null, !0) }, 500)) }, t.prototype.createBubbleMessage = function(s, u) { var a = this,
                t = s.maxOptions,
                c = void 0 === t ? 0 : t,
                l = this.options.moreOptionsLabel,
                p = document.createElement("div");
            p.className = "yvebot-message-bubbles yvebot-ruleType-" + s.type; var f = function(i, t) { void 0 === t && (t = 0); var o = c ? t + c - 1 : i.length;
                i.slice(t, o).forEach(function(t, e) { var n = a.createBubbleButton(t, function(t) { u(t, p), "MultipleChoice" !== s.type && a.scrollDown(0, null, !0) }); if (p.appendChild(n), o < i.length && e === c - 2) { var r = a.createBubbleButton({ label: l }, function() { f(i, o), r.remove() }, { className: "yvebot-message-bubbleMoreOptions" });
                        p.appendChild(r) } }) }; return f(s.options), p }, t.prototype.createMultipleChoiceMessage = function(t, i) { var e = document.createElement("div"); if (t.options.length) { var o = document.createElement("button");
                o.textContent = this.options.doneMultipleChoiceLabel, o.className = "yvebot-message-bubbleDone", o.style.display = "none"; var s = this;
                o.onclick = function() { var t = o.previousElementSibling,
                        e = t.querySelectorAll(".yvebot-message-bubbleBtn.selected"),
                        n = pe(e).map(function(t) { return t.getAttribute("data-label") }),
                        r = pe(e).map(function(t) { return t.getAttribute("data-value") });
                    i(n, r), t.remove(), o.remove(), s.enableForm(), s.scrollDown(0, null, !0) }; var n = this.createBubbleMessage(t, function(t) { t.classList.toggle("selected"), n.querySelectorAll(".yvebot-message-bubbleBtn.selected").length ? o.style.display = "inline-block" : o.style.display = "none" });
                this.disableForm(this.options.inputPlaceholderMultipleChoice), e.appendChild(n), e.appendChild(o) } return e }, t.prototype.createChat = function() { var t = document.createElement("div"); return t.className = "yvebot-chat", t }, t.prototype.createConversation = function() { var t = document.createElement("ul"); return t.className = "yvebot-conversation", t }, t.prototype.createTyping = function() { var e = document.createElement("div"); return e.className = "yvebot-typing", [1, 2, 3].forEach(function() { var t = document.createElement("span");
                t.className = "yvebot-typing-dot", e.appendChild(t) }), this.createThread("BOT", e, "yvebot-thread-typing") }, t.prototype.createForm = function() { var t = document.createElement("form"); return t.className = "yvebot-form", t.appendChild(this.input), t.appendChild(this.submit), t }, t.prototype.createSubmit = function() { var t = document.createElement("button"); return t.className = "yvebot-form-submit", t.type = "submit", t.textContent = this.options.submitLabel, t }, t.prototype.createInput = function() { var t = document.createElement("input"); return t.className = "yvebot-form-input", t.type = "text", t.placeholder = this.options.inputPlaceholder, t.autocomplete = "off", t }, t.prototype.createTextarea = function() { var n = this,
                t = document.createElement("textarea"); return t.className = "yvebot-form-input", t.placeholder = this.options.inputPlaceholder, t.rows = 1, t.addEventListener("keydown", function(t) { var e = t.key || t.keyCode || t.code;
                0 <= ["Enter", 13].indexOf(e) && !t.shiftKey && (t.preventDefault(), n.form.dispatchEvent(new Event("submit"))) }), t.addEventListener("input", function(t) { var e = t.target;
                e.style.height = "auto", e.style.height = e.scrollHeight + "px" }), t }, t.prototype.createThread = function(t, e, n) { var r = document.createElement("li"); return r.className = "yvebot-thread yvebot-thread-" + t.toLowerCase(), n && r.classList.add(n), r.appendChild(e), r }, t.prototype.setInputType = function(t) { var e = { inputText: this.inputText, textarea: this.textArea }[t];
            this.input !== e && (this.form.replaceChild(e, this.input), this.input = e), this.options.autoFocus && this.input.focus() }, t.prototype.appendThread = function(t, e, n) { var r = this;
            this.scrollDown(n.offsetHeight, function() { return e.insertBefore(n, r.typing) }, "USER" === t) }, t.prototype.scrollDown = function(t, e, n) { void 0 === n && (n = !1); var r = this.conversation.scrollHeight - this.conversation.scrollTop - this.conversation.offsetHeight - t <= 0;
            e && e(), (r || n) && (this.conversation.scrollTop = this.conversation.scrollHeight) }, t.prototype.createTextMessage = function(t, e) { var n, r, i, o, s, u = this.options,
                a = u.timestampable,
                c = u.timestampFormatter; if (t instanceof Array) { var l = t.map(String);
                r = l, i = this.options.andSeparatorText, o = r.slice(0, -1).join(", "), s = r.slice(-1), n = 1 === r.length ? r[0] : o + " " + i + " " + s } else n = String(t); var p = document.createElement("div"); if (p.className = "yvebot-bubble", e) { var f = document.createElement("div");
                f.className = "yvebot-sender", f.innerHTML = e, p.appendChild(f) } var h = document.createElement("div"); if (h.className = "yvebot-message", h.innerHTML = n, p.appendChild(h), a) { var d = document.createElement("div");
                d.className = "yvebot-timestamp", d.innerHTML = c(Date.now()), p.appendChild(d) } return p }, t }(); return function(i) {
        function t(t, e) { var n = this,
                r = p({}, { andSeparatorText: "and", autoFocus: !0, doneMultipleChoiceLabel: "Done", inputPlaceholder: "Type your message", inputPlaceholderMultipleChoice: "Choose the options above", inputPlaceholderSingleChoice: "Choose an option above", moreOptionsLabel: "More options", submitLabel: "Send", target: "body", timestampFormatter: function(t) { return new Date(t).toUTCString().slice(-12, -4) }, timestampable: !1 }, e); return (n = i.call(this, t, r.yveBotOptions) || this).isMobile = o(), n.UIOptions = r, n.UI = new fe(n.isMobile, n.UIOptions), n.on("start", function() { document.querySelector(n.UIOptions.target).appendChild(n.UI.chat), n.UIOptions.autoFocus && n.UI.input.focus() }).on("talk", function(t, e) { n.newMessage("BOT", t, e) }).on("typing", function() { return n.typing() }).on("typed", function() { return n.typed() }), n.UI.form.addEventListener("submit", function(t) { t.preventDefault(); var e = n.UI.input.value.trim();
                e && (n.hear(e), n.newMessage("USER", e), n.UI.input.value = "", n.UI.input.dispatchEvent(new Event("input"))), n.UIOptions.autoFocus && n.UI.input.focus() }), n } return n(t, i), t.prototype.typing = function() { var t = this; return this.UI.scrollDown(this.UI.typing.offsetHeight, function() { return t.UI.typing.classList.add("is-typing") }), this }, t.prototype.typed = function() { var t = this; return this.UI.scrollDown(this.UI.typing.offsetHeight, function() { return t.UI.typing.classList.remove("is-typing") }), this }, t.prototype.newMessage = function(t, e, n) { var r = this,
                i = this.UI,
                o = "BOT" === t ? this.UIOptions.name : null,
                s = i.createThread(t, i.createTextMessage(e, o)); if ("BOT" === t) switch (this.UI.setInputType(n.multiline ? "textarea" : "inputText"), n.type) {
                case "SingleChoice":
                    s.appendChild(i.createSingleChoiceMessage(n, function(t, e) { r.hear(e), r.newMessage("USER", t) })); break;
                case "MultipleChoice":
                    s.appendChild(i.createMultipleChoiceMessage(n, function(t, e) { r.hear(e), r.newMessage("USER", t) })) }
            return i.appendThread(t, this.UI.conversation, s), this }, t }(le) });
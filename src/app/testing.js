(function(_) {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var fa, ia, la, ma, na, ta, xa, za, Ca, Ba, Da, Fa, Ga, Ha, Ia, Ka, La, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa, $a, Za, ab, bb, cb, db, ib, jb, lb, nb, pb, rb, xb, zb, Gb, Kb, Nb, Qb, Tb, Vb, Yb, fc, hc, cc, jc, kc, lc, nc, oc, pc, qc, rc, sc, tc, uc, xc, zc, yc, Ac, Cc, Dc, Fc, Gc, Ic, Mc, Lc, Kc, Qc, Sc, Tc, Uc, Vc, Yc, Zc, $c, ad, gd, jd, md, od, sd, ud, td, xd, vd, wd, yd, Cd, zd, Rc, Gd, Hd, Ld, Od, Id, Jd, Td, Ud, Vd, Wd, Qd, Rd, Xd, ae, be, de, ee, fe, ie, je, ke, se, te, ve, we, ye, ze, Ae, De, Fe, He, We, Ne, Ye, af, bf, cf, ef, jf, kf, lf, of, pf, sf, xf, tf, Bf, Kf, Nf, Of, Uf, Sf, Rf, Qf, Wf, fg, gg, hg, ug, zg, xg, yg, Eg, Ig, Jg, Lg, Pg, Ng, $g, eh, fh, hh, ih, mh, nh, oh, kh, lh, ph, qh, wh, uh, zh, Eh, Gh, Hh, Ih, Ph, Th, K, Uh, $h, Yh, ki, oi, qi, ri, ti, ui, wi, yi, Bi, Ei, Gi, cj, aj, dj, kj, lj, mj, nj, ej, oj, fj, qj, sj, tj, vj, uj, Aj, yj, Bj, Kj, Nj, Fj, Gj, Oj, Pj, Rj, Sj, Tj, Uj, Yj, ek, ak, Wj, mk, kk, lk, nk, ok, pk, rk, Dk, Ek, Gk, Jk, Lk, M, Nk, Ok, Pk, Rk, Tk, Uk, Vk, Yk, Xk, Wk, fl, il, ql, rl, tl, ul, yl, Al, El, Kl, Ml, Ol, Pl, Ql, Rl, Ul, Wl, Yl, Zl, am, qm, rm, om, ya, um, vm, xm, zm, Am, Bm, Dm, Im, Mm, Nm, Rm, Sm, Tm, Vm, Wm, Xm, Ym, an, Zm, bn, dn, en, fn, gn, hn, ln, nn, on, pn, vn, wn, yn, Dn, En, Gn, Nn, Qn, On, Pn, ao, eo, bo, co, go, oo, po, so, ho, Bo, Co, Ko, Ro, Uo, Vo, Xo, Yo, Zo, $o, cp, ep, lp, fp, gp, bp, pp, qp, tp, Kp, Rp, Sp, Up, $p, cq, dq, eq, jq, kq, nq, pq, qq, vq, wq, Bq, Cq, Fq, Hq, Iq, Br, Er, Fr, Gr, Or, Qr, Sr, Vr, Wr, Xr, Yr, $r, as, bs, cs, ds, es, fs, ms, ns, os, Bb, Eb, Fb, qs, ts, rs, ss, us, vs, Aa, ra, sa, zs, As, ff;
    fa = function(a) {
      return function() {
        return _.ca[a].apply(this, arguments)
      }
    }
    ;
    ia = function(a) {
      return a ? a.passive && ha() ? a : a.capture || !1 : !1
    }
    ;
    la = function(a, b) {
      b = _.ja(a, b);
      var c;
      (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
      return c
    }
    ;
    ma = function(a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
          c[d] = a[d];
        return c
      }
      return []
    }
    ;
    na = function(a, b, c) {
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    ;
    ta = function(a) {
      for (var b = 0, c = 0, d = {}; c < a.length; ) {
        var e = a[c++]
          , f = _.qa(e) ? "o" + (Object.prototype.hasOwnProperty.call(e, ra) && e[ra] || (e[ra] = ++sa)) : (typeof e).charAt(0) + e;
        Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0,
          a[b++] = e)
      }
      a.length = b
    }
    ;
    xa = function(a, b) {
      a.sort(b || _.wa)
    }
    ;
    za = function(a) {
      for (var b = ya, c = Array(a.length), d = 0; d < a.length; d++)
        c[d] = {
          index: d,
          value: a[d]
        };
      var e = b || _.wa;
      xa(c, function(f, g) {
        return e(f.value, g.value) || f.index - g.index
      });
      for (b = 0; b < a.length; b++)
        a[b] = c[b].value
    }
    ;
    Ca = function(a, b) {
      if (!Aa(a) || !Aa(b) || a.length != b.length)
        return !1;
      for (var c = a.length, d = Ba, e = 0; e < c; e++)
        if (!d(a[e], b[e]))
          return !1;
      return !0
    }
    ;
    _.wa = function(a, b) {
      return a > b ? 1 : a < b ? -1 : 0
    }
    ;
    Ba = function(a, b) {
      return a === b
    }
    ;
    Da = function(a, b) {
      for (var c = {}, d = 0; d < a.length; d++) {
        var e = a[d]
          , f = b.call(void 0, e, d, a);
        void 0 !== f && (c[f] || (c[f] = [])).push(e)
      }
      return c
    }
    ;
    Fa = function(a) {
      for (var b = [], c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        if (Array.isArray(d))
          for (var e = 0; e < d.length; e += 8192)
            for (var f = Fa.apply(null, na(d, e, e + 8192)), g = 0; g < f.length; g++)
              b.push(f[g]);
        else
          b.push(d)
      }
      return b
    }
    ;
    Ga = function(a, b) {
      for (var c in a)
        b.call(void 0, a[c], c, a)
    }
    ;
    Ha = function(a) {
      var b = [], c = 0, d;
      for (d in a)
        b[c++] = a[d];
      return b
    }
    ;
    Ia = function(a, b) {
      for (var c in a)
        if (b.call(void 0, a[c], c, a))
          return c
    }
    ;
    Ka = function(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
          a[c] = d[c];
        for (var f = 0; f < Ja.length; f++)
          c = Ja[f],
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
      }
    }
    ;
    La = function() {
      var a = _.q.navigator;
      return a && (a = a.userAgent) ? a : ""
    }
    ;
    Qa = function(a) {
      return Na ? Oa ? Oa.brands.some(function(b) {
        return (b = b.brand) && Pa(b, a)
      }) : !1 : !1
    }
    ;
    Ra = function(a) {
      return Pa(La(), a)
    }
    ;
    Sa = function(a) {
      for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a); )
        c.push([d[1], d[2], d[3] || void 0]);
      return c
    }
    ;
    Ta = function() {
      return Na ? !!Oa && 0 < Oa.brands.length : !1
    }
    ;
    Ua = function() {
      return Ta() ? !1 : Ra("Opera")
    }
    ;
    Va = function() {
      return Ta() ? !1 : Ra("Trident") || Ra("MSIE")
    }
    ;
    Wa = function() {
      return Ta() ? Qa("Microsoft Edge") : Ra("Edg/")
    }
    ;
    Xa = function() {
      return Ra("Firefox") || Ra("FxiOS")
    }
    ;
    $a = function() {
      return Ra("Safari") && !(Za() || (Ta() ? 0 : Ra("Coast")) || Ua() || (Ta() ? 0 : Ra("Edge")) || Wa() || (Ta() ? Qa("Opera") : Ra("OPR")) || Xa() || Ra("Silk") || Ra("Android"))
    }
    ;
    Za = function() {
      return Ta() ? Qa("Chromium") : (Ra("Chrome") || Ra("CriOS")) && !(Ta() ? 0 : Ra("Edge")) || Ra("Silk")
    }
    ;
    ab = function(a) {
      var b = {};
      a.forEach(function(c) {
        b[c[0]] = c[1]
      });
      return function(c) {
        return b[_.u(c, "find").call(c, function(d) {
          return d in b
        })] || ""
      }
    }
    ;
    bb = function() {
      var a = La();
      if (Va()) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1])
          a = b[1];
        else {
          b = "";
          var c = /MSIE +([\d\.]+)/.exec(a);
          if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a),
            "7.0" == c[1])
              if (a && a[1])
                switch (a[1]) {
                  case "4.0":
                    b = "8.0";
                    break;
                  case "5.0":
                    b = "9.0";
                    break;
                  case "6.0":
                    b = "10.0";
                    break;
                  case "7.0":
                    b = "11.0"
                }
              else
                b = "7.0";
            else
              b = c[1];
          a = b
        }
        return a
      }
      a = Sa(a);
      b = ab(a);
      return Ua() ? b(["Version", "Opera"]) : (Ta() ? 0 : Ra("Edge")) ? b(["Edge"]) : Wa() ? b(["Edg"]) : Ra("Silk") ? b(["Silk"]) : Za() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    }
    ;
    cb = function() {
      var a = Sa(La());
      ab(a);
      return Xa() ? (a = a[2]) && a[1] || "" : ""
    }
    ;
    db = function() {
      if (Ta()) {
        var a = _.u(Oa.brands, "find").call(Oa.brands, function(b) {
          return "Firefox" === b.brand
        });
        if (!a || !a.version)
          return NaN;
        a = a.version.split(".")
      } else {
        a = cb();
        if ("" === a)
          return NaN;
        a = a.split(".")
      }
      return 0 === a.length ? NaN : Number(a[0])
    }
    ;
    _.hb = function(a) {
      if (a instanceof _.eb)
        a = _.fb(a);
      else {
        b: if (gb) {
          try {
            var b = new URL(a)
          } catch (c) {
            b = "https:";
            break b
          }
          b = b.protocol
        } else
          c: {
            b = document.createElement("a");
            try {
              b.href = a
            } catch (c) {
              b = void 0;
              break c
            }
            b = b.protocol;
            b = ":" === b || "" === b ? "https:" : b
          }
        a = "javascript:" !== b ? a : void 0
      }
      return a
    }
    ;
    ib = function(a) {
      throw Error("unexpected value " + a + "!");
    }
    ;
    jb = function(a) {
      var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
      (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }
    ;
    lb = function(a, b) {
      a.textContent = _.kb(b);
      jb(a)
    }
    ;
    nb = function(a, b) {
      a.src = _.mb(b);
      jb(a)
    }
    ;
    pb = function(a, b) {
      a.write(_.ob(b))
    }
    ;
    rb = function(a) {
      return new qb(function(b) {
          return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
      )
    }
    ;
    _.vb = function(a) {
      var b = void 0 === b ? sb : b;
      a: {
        b = void 0 === b ? sb : b;
        for (var c = 0; c < b.length; ++c) {
          var d = b[c];
          if (d instanceof qb && d.Ug(a)) {
            a = tb(a);
            break a
          }
        }
        a = void 0
      }
      return a || _.ub
    }
    ;
    xb = function(a) {
      for (var b = _.wb.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++)
        c.push(String(b[d])),
          c.push(a[d + 1]);
      return tb(c.join(""))
    }
    ;
    zb = function(a) {
      var b = window
        , c = !0;
      c = void 0 === c ? !1 : c;
      new _.v.Promise(function(d, e) {
          function f() {
            g.onload = null;
            g.onerror = null;
            var h;
            null == (h = g.parentElement) || h.removeChild(g)
          }
          var g = b.document.createElement("script");
          g.onload = function() {
            f();
            d()
          }
          ;
          g.onerror = function() {
            f();
            e(void 0)
          }
          ;
          g.type = "text/javascript";
          nb(g, a);
          c && "complete" !== b.document.readyState ? _.yb(b, "load", function() {
            b.document.body.appendChild(g)
          }) : b.document.body.appendChild(g)
        }
      )
    }
    ;
    Gb = function(a) {
      var b, c, d, e, f, g;
      return _.Ab(function(h) {
        switch (h.j) {
          case 1:
            return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.o + "&st=") + a.Sb,
              c = void 0,
              h.m = 2,
              Bb(h, Cb(b), 4);
          case 4:
            c = h.o;
            Eb(h, 3);
            break;
          case 2:
            Fb(h);
          case 3:
            if (!c)
              return h.return(void 0);
            d = a.yc || c.sodar_query_id;
            e = void 0 !== c.rc_enable && a.m ? c.rc_enable : "n";
            f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
            g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            return d && c.bg_hash_basename && c.bg_binary ? h.return({
              context: a.G,
              bg: c.bg_hash_basename,
              Zf: c.bg_binary,
              ah: a.j + "_" + a.o,
              yc: d,
              Sb: a.Sb,
              md: e,
              Dd: f,
              ld: g
            }) : h.return(void 0)
        }
      })
    }
    ;
    Kb = function(a) {
      var b;
      return _.Ab(function(c) {
        if (1 == c.j)
          return Bb(c, Gb(a), 2);
        if (b = c.o) {
          var d = "sodar2";
          d = void 0 === d ? "sodar2" : d;
          var e = window
            , f = e.GoogleGcLKhOms;
          f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
          var g = {};
          f.push((g._ctx_ = b.context,
            g._bgv_ = b.bg,
            g._bgp_ = b.Zf,
            g._li_ = b.ah,
            g._jk_ = b.yc,
            g._st_ = b.Sb,
            g._rc_ = b.md,
            g._dl_ = b.Dd,
            g._g2_ = b.ld,
            g));
          if (f = e.GoogleDX5YKUSk)
            e.GoogleDX5YKUSk = void 0,
              f[1]();
          d = Hb(Jb, {
            basename: d
          });
          zb(d)
        }
        return c.return(b)
      })
    }
    ;
    Nb = function(a) {
      var b = !1;
      b = void 0 === b ? !1 : b;
      if (Lb) {
        if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))
          throw Error("Found an unpaired surrogate");
        a = (Mb || (Mb = new TextEncoder)).encode(a)
      } else {
        for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
          var f = a.charCodeAt(e);
          if (128 > f)
            d[c++] = f;
          else {
            if (2048 > f)
              d[c++] = f >> 6 | 192;
            else {
              if (55296 <= f && 57343 >= f) {
                if (56319 >= f && e < a.length) {
                  var g = a.charCodeAt(++e);
                  if (56320 <= g && 57343 >= g) {
                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                    d[c++] = f >> 18 | 240;
                    d[c++] = f >> 12 & 63 | 128;
                    d[c++] = f >> 6 & 63 | 128;
                    d[c++] = f & 63 | 128;
                    continue
                  } else
                    e--
                }
                if (b)
                  throw Error("Found an unpaired surrogate");
                f = 65533
              }
              d[c++] = f >> 12 | 224;
              d[c++] = f >> 6 & 63 | 128
            }
            d[c++] = f & 63 | 128
          }
        }
        a = c === d.length ? d : d.subarray(0, c)
      }
      return a
    }
    ;
    Qb = function(a) {
      if (!Ob)
        return Pb(a);
      for (var b = ""; 10240 < a.length; )
        b += String.fromCharCode.apply(null, a.subarray(0, 10240)),
          a = a.subarray(10240);
      b += String.fromCharCode.apply(null, a);
      return btoa(b)
    }
    ;
    Tb = function(a) {
      return Sb[a] || ""
    }
    ;
    Vb = function(a) {
      return Ub && null != a && a instanceof Uint8Array
    }
    ;
    Yb = function(a) {
      if (a !== Xb)
        throw Error("illegal external caller");
    }
    ;
    fc = function(a) {
      var b = 0 > a;
      a = Math.abs(a);
      var c = a >>> 0;
      a = Math.floor((a - c) / 4294967296);
      b && (c = _.x(cc(c, a)),
        b = c.next().value,
        a = c.next().value,
        c = b);
      dc = c >>> 0;
      ec = a >>> 0
    }
    ;
    hc = function(a) {
      if (16 > a.length)
        fc(Number(a));
      else if (gc)
        a = BigInt(a),
          dc = Number(a & BigInt(4294967295)) >>> 0,
          ec = Number(a >> BigInt(32) & BigInt(4294967295));
      else {
        var b = +("-" === a[0]);
        ec = dc = 0;
        for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e,
          e += 6)
          d = Number(a.slice(d, e)),
            ec *= 1E6,
            dc = 1E6 * dc + d,
          4294967296 <= dc && (ec += dc / 4294967296 | 0,
            dc %= 4294967296);
        b && (b = _.x(cc(dc, ec)),
          a = b.next().value,
          b = b.next().value,
          dc = a,
          ec = b)
      }
    }
    ;
    cc = function(a, b) {
      b = ~b;
      a ? a = ~a + 1 : b += 1;
      return [a, b]
    }
    ;
    jc = function(a, b) {
      if (ic)
        return a[ic] |= b;
      if (void 0 !== a.Ua)
        return a.Ua |= b;
      Object.defineProperties(a, {
        Ua: {
          value: b,
          configurable: !0,
          writable: !0,
          enumerable: !1
        }
      });
      return b
    }
    ;
    kc = function(a, b) {
      ic ? a[ic] && (a[ic] &= ~b) : void 0 !== a.Ua && (a.Ua &= ~b)
    }
    ;
    lc = function(a) {
      var b;
      ic ? b = a[ic] : b = a.Ua;
      return null == b ? 0 : b
    }
    ;
    nc = function(a, b) {
      ic ? a[ic] = b : void 0 !== a.Ua ? a.Ua = b : Object.defineProperties(a, {
        Ua: {
          value: b,
          configurable: !0,
          writable: !0,
          enumerable: !1
        }
      });
      return a
    }
    ;
    oc = function(a) {
      jc(a, 1);
      return a
    }
    ;
    pc = function(a) {
      return !!(lc(a) & 2)
    }
    ;
    qc = function(a) {
      jc(a, 18);
      return a
    }
    ;
    rc = function(a) {
      jc(a, 16);
      return a
    }
    ;
    sc = function(a, b) {
      nc(b, (a | 0) & -51)
    }
    ;
    tc = function(a, b) {
      nc(b, (a | 18) & -41)
    }
    ;
    uc = function(a) {
      return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    ;
    xc = function(a, b, c) {
      if (null != a)
        if ("string" === typeof a)
          a = a ? new vc(a,Xb) : wc();
        else if (a.constructor !== vc)
          if (Vb(a)) {
            var d;
            c ? d = 0 == a.length ? wc() : new vc(a,Xb) : d = a.length ? new vc(new Uint8Array(a),Xb) : wc();
            a = d
          } else {
            if (!b)
              throw Error();
            a = void 0
          }
      return a
    }
    ;
    zc = function(a) {
      yc(lc(a.da))
    }
    ;
    yc = function(a) {
      if (a & 2)
        throw Error();
    }
    ;
    Ac = function(a) {
      var b = a.length;
      (b = b ? a[b - 1] : void 0) && uc(b) ? b.g = 1 : (b = {},
        a.push((b.g = 1,
          b)))
    }
    ;
    _.Bc = function(a) {
      if (null != a && "number" !== typeof a)
        throw Error("Value of float/double field must be a number|null|undefined, found " + typeof a + ": " + a);
      return a
    }
    ;
    Cc = function(a) {
      if (null == a)
        return a;
      switch (typeof a) {
        case "string":
          return +a;
        case "number":
          return a
      }
    }
    ;
    Dc = function(a) {
      return a
    }
    ;
    Fc = function(a) {
      return a
    }
    ;
    Gc = function(a) {
      return a
    }
    ;
    _.Hc = function(a) {
      return a
    }
    ;
    Ic = function(a) {
      return a
    }
    ;
    Mc = function(a, b, c, d) {
      var e = !1;
      if (null != a && "object" === typeof a && !(e = Array.isArray(a)) && a.ne === Jc)
        return a;
      if (!e)
        return c ? d & 2 ? Kc(b) : new b : void 0;
      Lc(a, d);
      return new b(a)
    }
    ;
    Lc = function(a, b) {
      var c = lc(a)
        , d = c;
      0 === d && (d |= b & 16);
      d |= b & 2;
      d !== c && nc(a, d)
    }
    ;
    Kc = function(a) {
      var b = a[Pc];
      if (b)
        return b;
      b = new a;
      qc(b.da);
      return a[Pc] = b
    }
    ;
    Qc = function(a, b) {
      a = "" + a;
      b = "" + b;
      return a > b ? 1 : a < b ? -1 : 0
    }
    ;
    Sc = function(a, b, c, d) {
      a = Mc(a, b, !0, d);
      c && (a = Rc(a));
      return a
    }
    ;
    Tc = function(a) {
      return a
    }
    ;
    Uc = function(a) {
      return a
    }
    ;
    Vc = function(a) {
      return a
    }
    ;
    Yc = function(a, b, c, d, e) {
      var f = y(a, b, d);
      Array.isArray(f) || (f = Wc);
      var g = lc(f);
      g & 1 || oc(f);
      if (e)
        g & 2 || qc(f),
        c & 1 || Object.freeze(f);
      else {
        e = !(c & 2);
        var h = g & 2;
        c & 1 || !h ? e && g & 16 && !h && kc(f, 16) : (f = oc(Array.prototype.slice.call(f)),
          Xc(a, b, f, d))
      }
      return f
    }
    ;
    Zc = function(a, b, c, d) {
      var e = pc(a.da)
        , f = Yc(a, b, 1, d, e)
        , g = lc(f);
      if (!(g & 4)) {
        Object.isFrozen(f) && (f = oc(f.slice()),
          Xc(a, b, f, d));
        for (var h = 0, k = 0; h < f.length; h++) {
          var l = c(f[h]);
          null != l && (f[k++] = l)
        }
        k < h && (f.length = k);
        g |= 5;
        e && (g |= 18);
        nc(f, g);
        g & 2 && Object.freeze(f)
      }
      !e && (g & 2 || Object.isFrozen(f)) && (f = Array.prototype.slice.call(f),
        jc(f, 5),
        Xc(a, b, f, d));
      return f
    }
    ;
    $c = function(a) {
      return xc(a, !0, !0)
    }
    ;
    ad = function(a) {
      return xc(a, !0, !1)
    }
    ;
    gd = function(a, b, c) {
      var d = !1;
      if (null == b) {
        if (c)
          return dd || (dd = new ed(qc([])));
        b = []
      } else if (b.constructor === ed) {
        if (0 == (b.o & 2) || c)
          return b;
        b = fd(b)
      } else
        Array.isArray(b) ? d = pc(b) : b = [];
      if (c) {
        if (!b.length)
          return dd || (dd = new ed(qc([])));
        d || (d = !0,
          qc(b))
      } else if (d)
        for (d = !1,
               b = Array.prototype.slice.call(b),
               c = 0; c < b.length; c++) {
          var e = b[c] = Array.prototype.slice.call(b[c]);
          Array.isArray(e[1]) && (e[1] = qc(e[1]))
        }
      d || (lc(b) & 32 ? kc(b, 16) : lc(a.da) & 16 && rc(b));
      d = new ed(b,void 0);
      Xc(a, 26, d, !1);
      return d
    }
    ;
    _.hd = function(a, b, c, d) {
      if (null == c)
        return _.z(a, b, Wc);
      var e = lc(c);
      if (!(e & 4)) {
        if (e & 2 || Object.isFrozen(c))
          c = Array.prototype.slice.call(c);
        for (var f = 0; f < c.length; f++)
          c[f] = d(c[f]);
        nc(c, e | 5)
      }
      return _.z(a, b, c)
    }
    ;
    _.id = function(a, b, c, d) {
      zc(a);
      c !== d ? Xc(a, b, c) : Xc(a, b, void 0, !1);
      return a
    }
    ;
    jd = function(a, b, c, d, e) {
      var f = !!(e & 2);
      a.j || (a.j = {});
      var g = a.j[c]
        , h = Yc(a, c, 3, void 0, f);
      if (!g) {
        var k = h;
        g = [];
        f = !!(e & 2);
        h = !!(lc(k) & 2);
        var l = k;
        !f && h && (k = Array.prototype.slice.call(k));
        var m = e | (h ? 2 : 0);
        e = h;
        for (var n = 0; n < k.length; n++) {
          var p = k[n];
          var r = b;
          Array.isArray(p) ? (Lc(p, m),
            p = new r(p)) : p = void 0;
          void 0 !== p && (e = e || !!(2 & lc(p.da)),
            g.push(p))
        }
        a.j[c] = g;
        m = lc(k);
        b = m | 33;
        b = e ? b & -9 : b | 8;
        m != b && (e = k,
        Object.isFrozen(e) && (e = Array.prototype.slice.call(e)),
          nc(e, b),
          k = e);
        l !== k && Xc(a, c, k);
        (f || d && h) && qc(g);
        d && Object.freeze(g);
        return g
      }
      f || (f = Object.isFrozen(g),
        d && !f ? Object.freeze(g) : !d && f && (g = Array.prototype.slice.call(g),
          a.j[c] = g));
      return g
    }
    ;
    _.kd = function(a, b, c) {
      return _.id(a, b, c, 0)
    }
    ;
    _.ld = function(a, b, c) {
      return _.id(a, b, c, "")
    }
    ;
    md = function(a, b) {
      return null == a ? b : a
    }
    ;
    od = function(a, b) {
      nd = b;
      a = new a(b);
      nd = void 0;
      return a
    }
    ;
    sd = function(a) {
      switch (typeof a) {
        case "number":
          return isFinite(a) ? a : String(a);
        case "object":
          if (a)
            if (Array.isArray(a)) {
              if (0 !== (lc(a) & 128))
                return a = Array.prototype.slice.call(a),
                  Ac(a),
                  a
            } else {
              if (Vb(a))
                return Qb(a);
              if (a instanceof vc)
                return pd(a);
              if (a instanceof ed)
                return rd(a)
            }
      }
      return a
    }
    ;
    ud = function(a, b, c, d) {
      if (null != a) {
        if (Array.isArray(a))
          a = td(a, b, c, void 0 !== d);
        else if (uc(a)) {
          var e = {}, f;
          for (f in a)
            Object.prototype.hasOwnProperty.call(a, f) && (e[f] = ud(a[f], b, c, d));
          a = e
        } else
          a = b(a, d);
        return a
      }
    }
    ;
    td = function(a, b, c, d) {
      var e = lc(a);
      d = d ? !!(e & 16) : void 0;
      a = Array.prototype.slice.call(a);
      for (var f = 0; f < a.length; f++)
        a[f] = ud(a[f], b, c, d);
      c(e, a);
      return a
    }
    ;
    xd = function(a) {
      return ud(a, vd, wd)
    }
    ;
    vd = function(a) {
      return a.ne === Jc ? a.toJSON() : a instanceof ed ? rd(a, xd) : sd(a)
    }
    ;
    wd = function(a, b) {
      a & 128 && Ac(b)
    }
    ;
    yd = function(a, b, c) {
      c = void 0 === c ? tc : c;
      if (null != a) {
        if (Ub && a instanceof Uint8Array)
          return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
          var d = lc(a);
          if (d & 2)
            return a;
          if (b && !(d & 32) && (d & 16 || 0 === d))
            return nc(a, d | 18),
              a;
          a = td(a, yd, d & 4 ? tc : c, !0);
          b = lc(a);
          b & 4 && b & 2 && Object.freeze(a);
          return a
        }
        a.ne === Jc ? a = zd(a) : a instanceof ed && (b = qc(fd(a, yd)),
          a = new ed(b,a.G,a.m,a.l));
        return a
      }
    }
    ;
    Cd = function(a, b, c, d, e, f, g) {
      (a = a.j && a.j[c]) ? (d = lc(a),
        d & 2 ? d = a : (f = _.Ad(a, zd),
          tc(d, f),
          Object.freeze(f),
          d = f),
        _.Bd(b, c, d, e)) : _.z(b, c, yd(d, f, g), e)
    }
    ;
    zd = function(a) {
      if (pc(a.da))
        return a;
      a = _.Fd(a, !0);
      qc(a.da);
      return a
    }
    ;
    _.Fd = function(a, b) {
      var c = a.da
        , d = rc([])
        , e = a.constructor.messageId;
      e && d.push(e);
      e = a.Oa;
      if (e) {
        d.length = c.length;
        var f = {};
        d[d.length - 1] = f
      }
      0 !== (lc(c) & 128) && Ac(d);
      b = b || pc(a.da) ? tc : sc;
      d = od(a.constructor, d);
      a.ie && (d.ie = a.ie.slice());
      f = !!(lc(c) & 16);
      for (var g = e ? c.length - 1 : c.length, h = 0; h < g; h++)
        Cd(a, d, h - a.xb, c[h], !1, f, b);
      if (e)
        for (var k in e)
          Cd(a, d, +k, e[k], !0, f, b);
      return d
    }
    ;
    Rc = function(a) {
      if (!pc(a.da))
        return a;
      var b = _.Fd(a, !1);
      b.B = a;
      return b
    }
    ;
    Gd = function(a, b) {
      if (Array.isArray(a)) {
        var c = lc(a)
          , d = 1;
        !b || c & 2 || (d |= 16);
        (c & d) !== d && nc(a, c | d)
      }
    }
    ;
    Hd = function(a, b) {
      return sd(b)
    }
    ;
    Ld = function(a, b, c) {
      if (c) {
        var d = {}, e;
        for (e in c) {
          if (Object.prototype.hasOwnProperty.call(c, e)) {
            var f = c[e]
              , g = f.Yh;
            g || (d.Yb = f.mj || f.uj.Ed,
              f.Xf ? (d.Kd = Id(f.Xf),
                g = function(h) {
                  return function(k, l, m) {
                    return h.Yb(k, l, m, h.Kd)
                  }
                }(d)) : f.bh ? (d.Jd = Jd(f.tg.We, f.bh),
                g = function(h) {
                  return function(k, l, m) {
                    return h.Yb(k, l, m, h.Jd)
                  }
                }(d)) : g = d.Yb,
              f.Yh = g);
            g(b, a, f.tg)
          }
          d = {
            Yb: d.Yb,
            Kd: d.Kd,
            Jd: d.Jd
          }
        }
      }
      Kd(b, a)
    }
    ;
    Od = function(a, b) {
      var c = a[b];
      "function" == typeof c && 0 === c.length && (c = c(),
        a[b] = c);
      return Array.isArray(c) && (Md in c || Nd in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
    }
    ;
    Id = function(a) {
      var b = a[Pd];
      if (!b) {
        var c = Qd(a);
        b = function(d, e) {
          return Rd(d, e, c)
        }
        ;
        a[Pd] = b
      }
      return b
    }
    ;
    Jd = function(a, b) {
      var c = a[Pd];
      c || (c = function(d, e) {
        return Ld(d, e, b)
      }
        ,
        a[Pd] = c);
      return c
    }
    ;
    Td = function(a, b) {
      a.push(b)
    }
    ;
    Ud = function(a, b, c) {
      a.push(b, c.Ed)
    }
    ;
    Vd = function(a, b, c, d) {
      var e = Id(d)
        , f = Qd(d).We
        , g = c.Ed;
      a.push(b, function(h, k, l) {
        return g(h, k, l, f, e)
      })
    }
    ;
    Wd = function(a, b, c, d, e, f) {
      var g = Jd(d, f)
        , h = c.Ed;
      a.push(b, function(k, l, m) {
        return h(k, l, m, d, g)
      })
    }
    ;
    Qd = function(a) {
      var b = a[Nd];
      if (b)
        return b;
      b = a[Nd] = [];
      var c = Td
        , d = Ud
        , e = Vd
        , f = Wd;
      b.We = a[0];
      var g = 1;
      if (a.length > g && "number" !== typeof a[g]) {
        var h = a[g++];
        c(b, h)
      }
      for (; g < a.length; ) {
        c = a[g++];
        for (var k = g + 1; k < a.length && "number" !== typeof a[k]; )
          k++;
        h = a[g++];
        k -= g;
        switch (k) {
          case 0:
            d(b, c, h);
            break;
          case 1:
            (k = Od(a, g)) ? (g++,
              e(b, c, h, k)) : d(b, c, h, a[g++]);
            break;
          case 2:
            k = b;
            var l = g++;
            l = Od(a, l);
            e(k, c, h, l, a[g++]);
            break;
          case 3:
            f(b, c, h, a[g++], a[g++], a[g++]);
            break;
          case 4:
            f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
            break;
          default:
            throw Error("unexpected number of binary field arguments: " + k);
        }
      }
      Md in a && Nd in a && (a.length = 0);
      return b
    }
    ;
    Rd = function(a, b, c) {
      for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)
        (0,
          c[f + 1])(b, a, c[f]);
      Ld(a, b, e ? c[0] : void 0)
    }
    ;
    Xd = function(a, b) {
      return {
        tj: a,
        Ed: b
      }
    }
    ;
    ae = function(a, b, c) {
      b = y(b, c);
      null != b && ("string" === typeof b && Yd(b),
      null != b && (Zd(a.j, 8 * c),
        "number" === typeof b ? (a = a.j,
          fc(b),
          $d(a, dc, ec)) : (c = Yd(b),
          $d(a.j, c.o, c.j))))
    }
    ;
    be = function(a) {
      return a
    }
    ;
    de = function(a, b) {
      var c = ce;
      ce = void 0;
      if (!b(a))
        throw b = c ? c() + "\n" : "",
          Error(b + String(a));
    }
    ;
    ee = function(a, b, c) {
      de(a, b, c);
      return a
    }
    ;
    fe = function(a, b, c) {
      b = ce;
      ce = void 0;
      if (!a) {
        if (b)
          throw Error(b());
        if (c && 0 < c.length)
          throw Error("[" + c.map(String).join(",") + "]");
        throw Error(String(a));
      }
    }
    ;
    ie = function(a) {
      return function() {
        var b = new ge;
        Rd(this, b, Qd(a));
        he(b, b.j.end());
        for (var c = new Uint8Array(b.o), d = b.m, e = d.length, f = 0, g = 0; g < e; g++) {
          var h = d[g];
          c.set(h, f);
          f += h.length
        }
        b.m = [c];
        return c
      }
    }
    ;
    je = function(a) {
      return function(b) {
        if (null == b || "" == b)
          b = new a;
        else {
          b = JSON.parse(b);
          if (!Array.isArray(b))
            throw Error(void 0);
          b = od(a, rc(b))
        }
        return b
      }
    }
    ;
    ke = function(a) {
      switch (a) {
        case 1:
          return "gda";
        case 2:
          return "gpt";
        case 3:
          return "ima";
        case 4:
          return "pal";
        case 5:
          return "xfad";
        case 6:
          return "dv3n";
        case 7:
          return "spa";
        default:
          return "unk"
      }
    }
    ;
    se = function(a, b, c, d) {
      d = void 0 === d ? [] : d;
      var e = new a.MutationObserver(function(f) {
          f = _.x(f);
          for (var g = f.next(); !g.done; g = f.next()) {
            g = _.x(g.value.removedNodes);
            for (var h = g.next(); !h.done; h = g.next())
              if (h = h.value,
              d && (h === b || le(h, b))) {
                f = _.x(d);
                for (g = f.next(); !g.done; g = f.next())
                  g.value.disconnect();
                d.length = 0;
                c();
                return
              }
          }
        }
      );
      d.push(e);
      e.observe(a.document.documentElement, {
        childList: !0,
        subtree: !0
      });
      pe(function(f) {
        if (!f.parent || !_.qe(f.parent))
          return !1;
        for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h < g.length; h++)
          try {
            if (re(g[h]) == f) {
              se(f.parent, g[h], c, d);
              break
            }
          } catch (k) {}
        return !1
      }, !1, !1, a)
    }
    ;
    te = function(a) {
      a = void 0 === a ? _.q : a;
      var b = a.context || a.AMP_CONTEXT_DATA;
      if (!b)
        try {
          b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
      var c, d;
      return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    }
    ;
    _.A = function(a) {
      var b = _.wb.apply(1, arguments);
      if (0 === b.length)
        return ue(a[0]);
      for (var c = [a[0]], d = 0; d < b.length; d++)
        c.push(encodeURIComponent(b[d])),
          c.push(a[d + 1]);
      return ue(c.join(""))
    }
    ;
    ve = function(a, b) {
      var c = _.mb(a).toString();
      if (/#/.test(c))
        throw Error("");
      var d = /\?/.test(c) ? "&" : "?";
      b.forEach(function(e, f) {
        e = e instanceof Array ? e : [e];
        for (var g = 0; g < e.length; g++) {
          var h = e[g];
          null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)),
            d = "&")
        }
      });
      return ue(c)
    }
    ;
    we = function(a) {
      return JSON.stringify([a.map(function(b) {
        var c = {};
        return [(c[b.Ge] = b.message.toJSON(),
          c)]
      })])
    }
    ;
    ye = function(a) {
      a.Ce.apply(a, _.xe(_.wb.apply(1, arguments).map(function(b) {
        return {
          Ge: 2,
          message: b
        }
      })))
    }
    ;
    ze = function(a) {
      a.Ce.apply(a, _.xe(_.wb.apply(1, arguments).map(function(b) {
        return {
          Ge: 5,
          message: b
        }
      })))
    }
    ;
    Ae = function(a) {
      a && "function" == typeof a.Ca && a.Ca()
    }
    ;
    De = function(a, b, c, d, e) {
      e = void 0 === e ? !1 : e;
      a.google_image_requests || (a.google_image_requests = []);
      var f = _.Be("IMG", a.document);
      if (c || d) {
        var g = function(h) {
          c && c(h);
          d && la(a.google_image_requests, f);
          _.Ce(f, "load", g);
          _.Ce(f, "error", g)
        };
        _.yb(f, "load", g);
        _.yb(f, "error", g)
      }
      e && (f.attributionSrc = "");
      f.src = b;
      a.google_image_requests.push(f)
    }
    ;
    Fe = function() {
      var a = Ee;
      return (0,
        C.ge)(function(b) {
        for (var c in a)
          if (b === a[c] && !/^[0-9]+$/.test(c))
            return !0;
        return !1
      }, function() {
        return "unknown enum"
      })
    }
    ;
    He = function() {
      var a = Ge;
      return (0,
        C.ge)(function(b) {
        return b instanceof a
      }, function() {
        var b = a.name;
        b || (b = (b = /function\s+([^\(]+)/m.exec(String(a))) ? b[1] : "(Anonymous)");
        return b
      })
    }
    ;
    We = function(a, b) {
      var c;
      a: {
        try {
          if (a) {
            var d = a.getItem("google_experiment_mod");
            break a
          }
        } catch (g) {}
        d = null
      }
      d = null != (c = d) ? c : "";
      try {
        var e = Ie(d);
        if (d) {
          var f = Ie(d);
          Je(f, Ke(Le(1), -1));
          Me(f)
        }
      } catch (g) {
        Ne(d),
          e = new Oe
      }
      if (c = (_.D = _.Pe(e, Qe, 1),
        _.u(_.D, "find")).call(_.D, function(g) {
        return _.Re(g, 1, 0) === b
      }))
        if (f = Se(c, 2),
        null === f || isNaN(f))
          Ne(d);
        else
          return f;
      d = (0,
        _.Te)() ? null : Math.floor(1E3 * _.Ue());
      if (null === d)
        return null;
      c ? Ke(c, d) : Je(e, Ke(Le(b), d));
      return Ve(a, Me(e)) ? d : null
    }
    ;
    Ne = function(a) {
      .01 > Math.random() && Xe({
        data: a
      }, "ls_tamp")
    }
    ;
    Ye = function(a) {
      var b = {};
      "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
      return {
        payload: b,
        ye: b.__uspapiReturn.callId
      }
    }
    ;
    af = function(a) {
      a = Ze(a.data.__fciReturn);
      return {
        payload: a,
        ye: _.$e(a, 1)
      }
    }
    ;
    bf = function(a, b) {
      b = void 0 === b ? window : b;
      if (E(a, 5))
        try {
          return b.localStorage
        } catch (c) {}
      return null
    }
    ;
    cf = function(a) {
      return "null" !== a.origin
    }
    ;
    ef = function(a, b, c) {
      b = E(b, 5) && cf(c) ? c.document.cookie : null;
      return null === b ? null : (new df({
        cookie: b
      })).get(a) || ""
    }
    ;
    _.gf = function(a) {
      a = void 0 === a ? _.q : a;
      return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : ff()
    }
    ;
    _.hf = function(a) {
      a = void 0 === a ? _.q : a;
      return (a = a.performance) && a.now ? a.now() : null
    }
    ;
    jf = function(a, b) {
      b = void 0 === b ? _.q : b;
      var c, d;
      return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    }
    ;
    kf = function(a) {
      a = void 0 === a ? _.q : a;
      var b = Math.min(jf("domLoading", a) || Infinity, jf("domInteractive", a) || Infinity);
      return Infinity === b ? Math.max(jf("responseEnd", a), jf("navigationStart", a)) : b
    }
    ;
    lf = function(a, b, c) {
      return b[a] || c
    }
    ;
    of = function(a) {
      _.mf(nf).G(a)
    }
    ;
    pf = function(a) {
      return _.mf(nf).m(a)
    }
    ;
    sf = function(a, b, c, d) {
      c = void 0 === c ? null : c;
      d = void 0 === d ? {} : d;
      var e = qf.j();
      0 === e.j && (e.j = .001 > Math.random() ? 2 : 1);
      2 === e.j && (e = {},
        Xe(_.u(Object, "assign").call(Object, {}, (e.c = String(a),
          e.pc = String(rf(window)),
          e.em = c,
          e.lid = b,
          e.eids = _.mf(nf).j().join(),
          e), d), "esp"))
    }
    ;
    xf = function(a, b, c, d) {
      sf(18, a);
      try {
        var e = _.gf();
        return c().then(function(f) {
          sf(29, a, null, {
            delta: String(_.gf() - e)
          });
          if (null == f)
            return sf(41, a),
              tf(b, 111, d),
              b;
          null != f && ("string" !== typeof f ? sf(21, a) : f.length || sf(20, a));
          uf(_.z(b, 2, f), 10);
          vf().set(b, d) && sf(27, a);
          return b
        }).catch(function(f) {
          tf(b, 106, d);
          sf(28, a, wf(f));
          return b
        })
      } catch (f) {
        return tf(b, 107, d),
          sf(1, a, wf(f)),
          _.v.Promise.resolve(b)
      }
    }
    ;
    tf = function(a, b, c) {
      var d;
      a.Ia(yf(null != (d = zf(a, Af, 10)) ? d : new Af, b));
      vf().set(a, c)
    }
    ;
    Bf = function() {
      var a = window;
      var b = void 0 === b ? function() {}
        : b;
      return new _.v.Promise(function(c) {
          var d = function() {
            c(b());
            _.Ce(a, "load", d)
          };
          _.yb(a, "load", d)
        }
      )
    }
    ;
    Kf = function(a) {
      var b = []
        , c = RegExp("^_GESPSK-(.+)$");
      try {
        for (var d = 0; d < a.length; d++) {
          var e = (c.exec(a.key(d)) || [])[1];
          e && b.push(e)
        }
      } catch (f) {}
      return b
    }
    ;
    _.F = function(a) {
      return _.mf(Lf).j(a.j, a.defaultValue)
    }
    ;
    _.Mf = function(a) {
      return _.mf(Lf).o(a.j, a.defaultValue)
    }
    ;
    Nf = function(a) {
      return _.mf(Lf).m(a.j, a.defaultValue)
    }
    ;
    Of = function(a) {
      return _.mf(Lf).G(a.j, a.defaultValue)
    }
    ;
    Uf = function(a, b, c, d, e) {
      var f = new Pf
        , g = Qf(c, b)
        , h = _.u(g, "flatMap").call(g, function(k) {
        return k.m()
      }).map(function(k) {
        return k.m()
      });
      Rf(f, a, b, h, e);
      Sf(f, g.concat(null != d ? d : []), c, b, a);
      if (!_.Pe(f, Tf, 2).length)
        return null;
      sf(50, "");
      return Pb(f.m(), 3)
    }
    ;
    Sf = function(a, b, c, d, e) {
      if (d && c && b && "function" === typeof c.getUserIdsAsEidBySource) {
        if ("function" === typeof c.getUserIdsAsEids)
          try {
            for (var f = _.x(c.getUserIdsAsEids()), g = f.next(); !g.done; g = f.next()) {
              var h = g.value;
              "string" === typeof h.source && sf(52, h.source)
            }
          } catch (n) {
            var k;
            sf(45, "", null == (k = n) ? void 0 : k.message)
          }
        b = _.x(b);
        for (f = b.next(); !f.done; f = b.next())
          if (f = f.value,
          String(_.Vf(f, 1)) === d)
            for (f = _.x(f.m()),
                   g = f.next(); !g.done; g = f.next())
              if (g = g.value.m(),
                !Wf(a, g)) {
                h = null;
                try {
                  var l = k = void 0
                    , m = void 0;
                  h = null == (k = c.getUserIdsAsEidBySource(g)) ? void 0 : null == (l = k.uids) ? void 0 : null == (m = l[0]) ? void 0 : m.id
                } catch (n) {
                  k = void 0,
                    sf(45, g, null == (k = n) ? void 0 : k.message)
                }
                h ? 300 < h.length ? (k = {},
                  sf(12, g, null, (k.sl = String(h.length),
                    k.fp = "1",
                    k))) : (k = Xf(g),
                  k = _.z(k, 2, h),
                  k = _.z(k, 11, !0),
                  _.Yf(a, 2, Tf, k),
                  k = {},
                  sf(19, g, null, (k.fp = "1",
                    k.hs = h ? "1" : "0",
                    k))) : (k = h = void 0,
                e && (null == (h = vf().get(g, e).vb) ? 0 : null == (k = y(h, 2)) ? 0 : k.length) && sf(51, g))
              }
      }
    }
    ;
    Rf = function(a, b, c, d, e) {
      if (b)
        for (var f = _.x(Kf(b)), g = f.next(); !g.done; g = f.next()) {
          g = g.value;
          var h = void 0;
          if (null == (h = d) || !_.u(h, "includes").call(h, g))
            if (h = vf().get(g, b).vb) {
              var k = Zf(h);
              if (2 !== k && 3 !== k) {
                k = !1;
                if (c) {
                  var l = void 0
                    , m = null == (l = e) ? void 0 : l.get(c);
                  if (m && !m.has(g))
                    continue;
                  if ((l = /^(\d+)$/.exec(g)) && !(k = _.u(c.split(","), "includes").call(c.split(","), l[1])))
                    continue
                }
                _.z(h, 9, k);
                l = y(h, 2);
                _.F($f) || (k = k ? 1E3 : 300,
                0 <= k && l && l.length > k && (k = {},
                  sf(12, g, null, (k.sl = String(l.length),
                    k)),
                  tf(h, 108, b),
                  uf(h, 2)));
                _.Yf(a, 2, Tf, h);
                h = {};
                sf(19, g, null, (h.hs = l ? "1" : "0",
                  h))
              }
            }
        }
    }
    ;
    Qf = function(a, b) {
      if (!b || "function" !== typeof (null == a ? void 0 : a.getUserIdsAsEidBySource))
        return [];
      a = [];
      for (var c = _.x(Of(ag)), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        var e = null;
        try {
          e = bg(d)
        } catch (f) {
          d = void 0;
          sf(44, "UNKNOWN_ID", null == (d = f) ? void 0 : d.message);
          continue
        }
        _.Vf(e, 1) === b && a.push(e)
      }
      return a
    }
    ;
    Wf = function(a, b) {
      return _.Pe(a, Tf, 2).some(function(c) {
        return y(c, 1) === b && _.cg(c, 2)
      })
    }
    ;
    fg = function(a, b, c) {
      var d, e, f, g, h, k;
      return _.Ab(function(l) {
        if (1 == l.j)
          return d = c ? a.filter(function(m) {
            return !m.wb
          }) : a,
            Bb(l, _.v.Promise.all(d.map(function(m) {
              return m.ab.promise
            })), 2);
        if (4 != l.j) {
          if (a.length === d.length)
            return l.return(0);
          e = a.filter(function(m) {
            return m.wb
          });
          f = _.gf();
          if (_.F(dg)) {
            g = _.x(b);
            for (h = g.next(); !h.done; h = g.next())
              k = h.value,
                eg(k);
            return Bb(l, _.v.Promise.all(e.map(function(m) {
              return m.ab.promise
            })), 4)
          }
          return Bb(l, _.v.Promise.race([_.v.Promise.all(e.map(function(m) {
            return m.ab.promise
          })), new _.v.Promise(function(m) {
              return void setTimeout(m, c)
            }
          )]), 4)
        }
        return l.return(_.gf() - f)
      })
    }
    ;
    gg = function(a) {
      var b = function(c) {
        var d = {};
        sf(c, (0,
          C.I)(y(a, 1)), null, (d.tic = String(Math.round((Date.now() - (0,
          C.I)(y(a, 3))) / 6E4)),
          d))
      };
      switch (Zf(a)) {
        case 0:
          b(24);
          break;
        case 1:
          b(25);
          break;
        case 2:
          b(26);
          break;
        case 3:
          sf(9, (0,
            C.I)(y(a, 1)));
          break;
        case 4:
          b(23)
      }
    }
    ;
    hg = function(a) {
      return "string" === typeof a ? a : a instanceof Error ? a.message : null
    }
    ;
    ug = function(a, b, c, d, e) {
      var f, g, h, k, l, m, n, p, r, t, w;
      return _.Ab(function(B) {
        f = new ig;
        g = new jg(a,c,d,e);
        h = new kg(g.A,c,d,e);
        k = new lg(g.l,e);
        m = l = null;
        _.F($f) ? (n = new mg(k.l,e),
            G(f, n),
            l = n.A,
            p = new ng(b,n.l,e),
            G(f, p),
            G(f, new kg(p.l,c,d,e)),
            r = new og(p.A,p.F,300,1E3,e),
            G(f, r),
            G(f, new kg(r.l,c,d,e)),
            m = function() {
              var I, H, R;
              return _.Ab(function(U) {
                return 1 == U.j ? (R = a,
                  Bb(U, r.l.promise, 2)) : U.return({
                  id: R,
                  collectorGeneratedData: null != (H = null == (I = U.o) ? void 0 : pg(I, 2)) ? H : null
                })
              })
            }
        ) : (t = new qg(b,k.l,c,d,e),
            G(f, t),
            l = t.F,
            m = function() {
              var I;
              return _.Ab(function(H) {
                return 1 == H.j ? Bb(H, t.l.promise, 2) : H.return(null != (I = H.o) ? I : {
                  id: a,
                  collectorGeneratedData: null
                })
              })
            }
        );
        w = new rg(b,l,c,d,e);
        sg(f, [g, h, k, w]);
        tg(f);
        return B.return(m())
      })
    }
    ;
    zg = function(a, b, c, d) {
      b || c ? vg() !== wg(window) ? sf(16, "") : xg(a, "encryptedSignalProviders", d) && xg(a, "secureSignalProviders", d) || (sf(38, ""),
        yg(a, "encryptedSignalProviders", b, c, d),
        yg(a, "secureSignalProviders", b, c, d)) : sf(15, "")
    }
    ;
    xg = function(a, b, c) {
      if (void 0 === a[b] || a[b]instanceof Array)
        return !1;
      a[b].addErrorHandler(c);
      return !0
    }
    ;
    yg = function(a, b, c, d, e) {
      var f, g = new Ag(null != (f = a[b]) ? f : [],c,d,"secureSignalProviders" === b);
      a[b] = new Bg(g);
      g.addErrorHandler(e)
    }
    ;
    Eg = function(a, b) {
      var c = new ig
        , d = new Cg(b);
      a = new Dg(d.C,a,b);
      sg(c, [d, a]);
      tg(c)
    }
    ;
    Ig = function(a, b, c, d, e) {
      if (!c)
        return null;
      var f = b.toString();
      if (Fg.has(f))
        return null;
      Fg.add(f);
      f = new ig;
      a = new jg(a,c,d,e);
      var g = new kg(a.A,c,d,e)
        , h = new Gg(a.l,e)
        , k = new lg(h.l,e);
      b = new Hg(k.l,b,e);
      c = new kg(b.l,c,d,e);
      sg(f, [a, g, h, k, b, c]);
      tg(f);
      return f
    }
    ;
    Jg = function(a, b) {
      b = void 0 === b ? document : b;
      var c;
      return !(null == (c = b.featurePolicy) || !(_.D = c.allowedFeatures(),
        _.u(_.D, "includes")).call(_.D, a))
    }
    ;
    Lg = function(a) {
      _.mf(Kg).j(a)
    }
    ;
    Pg = function() {
      if (void 0 === b) {
        var a = void 0 === a ? _.q : a;
        var b = a.ggeac || (a.ggeac = {})
      }
      a = b;
      Mg(_.mf(nf), a);
      Ng(b);
      Og(_.mf(Kg), b);
      _.mf(Lf).B()
    }
    ;
    Ng = function(a) {
      var b = _.mf(Lf);
      b.j = function(c, d) {
        return lf(5, a, function() {
          return !1
        })(c, d, 2)
      }
      ;
      b.o = function(c, d) {
        return lf(6, a, function() {
          return 0
        })(c, d, 2)
      }
      ;
      b.m = function(c, d) {
        return lf(7, a, function() {
          return ""
        })(c, d, 2)
      }
      ;
      b.G = function(c, d) {
        return lf(8, a, function() {
          return []
        })(c, d, 2)
      }
      ;
      b.B = function() {
        lf(15, a, function() {})(2)
      }
    }
    ;
    $g = function(a) {
      var b = void 0 === b ? Qg : b;
      var c = _.u(Object, "assign").call(Object, {}, a)
        , d = a.id
        , e = a.style;
      a = a.data;
      c = (delete c.id,
        delete c.style,
        delete c.data,
        c);
      if (_.u(Object, "keys").call(Object, c).length)
        throw Error("Invalid attribute(s): " + _.u(Object, "keys").call(Object, c));
      d = {
        id: d,
        style: e ? e : void 0
      };
      if (a)
        for (e = _.x(_.u(a, "entries").call(a)),
               a = e.next(); !a.done; a = e.next())
          c = _.x(a.value),
            a = c.next().value,
            c = c.next().value,
            (0,
              C.vf)(Rg.test(a)),
            d[a] = c;
      _.Sg("div");
      return _.Zg("div", d, b)
    }
    ;
    eh = function(a) {
      ah();
      var b = bh.googleToken[5] || 0;
      a && (0 != b || ch[3] >= ff() ? dh.Ne(a) : (dh.fd().push(a),
        dh.yf()));
      ch[3] >= ff() && ch[2] >= ff() || dh.yf()
    }
    ;
    fh = function(a) {
      a = _.Ad(a.split(/\s+/), function(b) {
        return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
          value: parseFloat(b[1]),
          type: b[2]
        } : {
          value: 0,
          type: "px"
        }
      });
      a[1] = a[1] || a[0];
      a[2] = a[2] || a[0];
      a[3] = a[3] || a[1];
      return a
    }
    ;
    hh = function(a) {
      if (!a)
        return [0];
      a = "number" === typeof a ? [a] : a;
      a = _.gh(a, function(b) {
        return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
      });
      ta(a);
      xa(a, function(b, c) {
        return b - c
      });
      return a
    }
    ;
    ih = function(a) {
      try {
        var b = a.getBoundingClientRect()
      } catch (c) {}
      return b ? {
        top: b.top,
        right: b.right,
        bottom: b.bottom,
        left: b.left,
        width: b.width || b.right - b.left,
        height: b.height || b.bottom - b.top
      } : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 0,
        height: 0
      }
    }
    ;
    mh = function(a, b, c, d) {
      var e = new _.jh
        , f = ""
        , g = function(k) {
        try {
          var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
          f === l.paw_id && (_.Ce(a, "message", g),
            l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
        } catch (m) {}
      }
        , h = kh(a);
      return h ? (_.yb(a, "message", g),
        f = c(h),
        e.promise) : (c = lh(a)) ? (f = String(Math.floor(2147483647 * _.Ue())),
        _.yb(a, "message", g),
        b(c, f),
        e.promise) : null
    }
    ;
    nh = function(a) {
      return mh(a, function(b, c) {
        var d, e;
        return void (null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
      }, function(b) {
        return b.getQueryInfo()
      }, function(b) {
        return b.signal
      })
    }
    ;
    oh = function(a) {
      return !!kh(a) || !!lh(a)
    }
    ;
    kh = function(a) {
      var b;
      if ("function" === typeof (null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo))
        return a.gmaSdk
    }
    ;
    lh = function(a) {
      var b, c, d, e, f, g;
      if ("function" === typeof (null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof (null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage))
        return a.webkit.messageHandlers
    }
    ;
    ph = function(a) {
      var b, c;
      return null != (c = (_.D = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
        return a[d]
      }),
        _.u(_.D, "find")).call(_.D, function(d) {
        return Array.isArray(null == d ? void 0 : d.que)
      })) ? c : null
    }
    ;
    qh = function(a, b, c, d) {
      try {
        if (a.setAttribute("data-google-query-id", c),
          !d) {
          null != b.googletag || (b.googletag = {
            cmd: []
          });
          var e, f = null != (e = b.googletag.queryIds) ? e : [];
          f.push(c);
          500 < f.length && f.shift();
          b.googletag.queryIds = f
        }
      } catch (g) {}
    }
    ;
    _.yh = function(a) {
      var b = a.ta
        , c = a.oe
        , d = a.rd
        , e = a.Pe
        , f = a.Ea;
      a = a.eg;
      var g = 0;
      try {
        g |= b != b.top ? 512 : 0;
        var h = Math.min(b.screen.width || 0, b.screen.height || 0);
        g |= h ? 320 > h ? 8192 : 0 : 2048;
        var k;
        if (k = b.navigator) {
          var l = b.navigator.userAgent;
          k = /Android 2/.test(l) || /iPhone OS [34]_/.test(l) || /Windows Phone (?:OS )?[67]/.test(l) || /MSIE.*Windows NT/.test(l) || /Windows NT.*Trident/.test(l)
        }
        g |= k ? 1048576 : 0;
        g = c ? g | (b.innerHeight >= c ? 0 : 1024) : g | (_.rh(b) ? 0 : 8);
        g |= sh(b, d);
        g |= th(b)
      } catch (m) {
        g |= 32
      }
      switch (e) {
        case 2:
          c = f;
          c = void 0 === c ? null : c;
          d = uh(b.innerWidth, 3, 0, Math.min(Math.round(b.innerWidth / 320 * 50), vh) + 15, 3);
          null != wh(b, d, void 0 === c ? null : c) && (g |= 16777216);
          break;
        case 1:
          c = f,
            c = void 0 === c ? null : c,
            d = b.innerWidth,
            e = b.innerHeight,
            h = Math.min(Math.round(b.innerWidth / 320 * 50), vh) + 15,
            k = uh(d, 3, e - h, e, 3),
          25 < h && k.push({
            x: d - 25,
            y: e - 25
          }),
          null != wh(b, k, void 0 === c ? null : c) && (g |= 16777216)
      }
      a && null != _.xh(b, void 0 === f ? null : f) && (g |= 16777216);
      return g
    }
    ;
    _.xh = function(a, b) {
      b = void 0 === b ? null : b;
      var c = a.innerHeight;
      c = uh(a.innerWidth, 10, c - 45, c, 10);
      return wh(a, c, b)
    }
    ;
    wh = function(a, b, c) {
      c = void 0 === c ? null : c;
      b = _.x(b);
      for (var d = b.next(); !d.done; d = b.next()) {
        var e = a
          , f = d.value;
        d = c;
        d = void 0 === d ? null : d;
        var g = e.document;
        var h = f.x
          , k = f.y;
        g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, k));
        if (g = g.elementFromPoint(h, k)) {
          if (!(h = zh(g, e, f, d)))
            a: {
              d = void 0 === d ? null : d;
              h = e.document;
              for (g = g.offsetParent; g && g !== h.body; g = g.offsetParent)
                if (k = zh(g, e, f, d)) {
                  h = k;
                  break a
                }
              h = null
            }
          d = h || null
        } else
          d = null;
        if (d)
          return d
      }
      return null
    }
    ;
    uh = function(a, b, c, d, e) {
      for (var f = [], g = 0; g < e; g++)
        for (var h = 0; h < b; h++) {
          var k = f
            , l = b - 1
            , m = e - 1;
          k.push.call(k, {
            x: (0 === l ? 0 : h / l) * a,
            y: c + (0 === m ? 0 : g / m) * (d - c)
          })
        }
      return f
    }
    ;
    zh = function(a, b, c, d) {
      d = void 0 === d ? null : d;
      if ("fixed" !== Ah(a, "position"))
        return null;
      var e = "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= _.Bh(_.Ch, a).width && 1 >= _.Bh(_.Ch, a).height ? !0 : !1;
      if (d) {
        var f, g;
        _.Dh(d, "ach_evt", {
          tn: a.tagName,
          id: null != (f = a.getAttribute("id")) ? f : "",
          cls: null != (g = a.getAttribute("class")) ? g : "",
          ign: String(e),
          pw: b.innerWidth,
          ph: b.innerHeight,
          x: c.x,
          y: c.y
        }, !0, 1)
      }
      return e ? null : a
    }
    ;
    Eh = function(a, b) {
      b = void 0 === b ? [] : b;
      var c = Date.now();
      return _.gh(b, function(d) {
        return c - d < 1E3 * a
      })
    }
    ;
    Gh = function(a, b) {
      try {
        var c = a.getItem("__lsv__");
        if (!c)
          return [];
        try {
          var d = JSON.parse(c)
        } catch (e) {}
        if (!Array.isArray(d) || _.Fh(d, function(e) {
          return !_.u(Number, "isInteger").call(Number, e)
        }))
          return a.removeItem("__lsv__"),
            [];
        d = Eh(b, d);
        d.length || null == a || a.removeItem("__lsv__");
        return d
      } catch (e) {
        return null
      }
    }
    ;
    Hh = function(a, b) {
      .001 > _.Ue() && Xe({
        c: a,
        s: b
      }, "gpt_whirs")
    }
    ;
    Ih = function(a) {
      var b = a.split("/");
      return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    }
    ;
    _.Lh = function(a) {
      _.mf(Jh).j = !0;
      return Kh[a]
    }
    ;
    Ph = function(a) {
      var b = new Mh;
      b = _.kd(b, 1, Date.now());
      b = _.kd(b, 2, a.pvsid);
      b = _.ld(b, 3, a.Ma);
      var c = _.mf(nf).j();
      b = _.hd(b, 4, c, Dc);
      b = _.kd(b, 5, a.Zg);
      a = _.ld(b, 12, a.lg);
      var d;
      if (b = null == (d = _.v.globalThis.performance) ? void 0 : d.memory) {
        d = new Nh;
        try {
          _.kd(d, 1, b.jsHeapSizeLimit)
        } catch (e) {}
        try {
          _.kd(d, 2, b.totalJSHeapSize)
        } catch (e) {}
        try {
          _.kd(d, 3, b.usedJSHeapSize)
        } catch (e) {}
      } else
        d = void 0;
      d && _.Oh(a, 10, d);
      return a
    }
    ;
    Th = function(a) {
      var b = kf();
      if (a.Hc) {
        var c = a.Gb;
        a = Ph(a);
        var d = new Qh;
        b = _.kd(d, 2, b);
        b = _.Rh(a, 6, Sh, b);
        ze(c, b)
      }
    }
    ;
    K = function(a, b, c) {
      var d = void 0 === d ? !1 : d;
      return function() {
        var e = _.wb.apply(0, arguments)
          , f = Uh(a, b, c, d).apply(this, e);
        try {
          var g = e.length;
          if (a.Hc && a.Ch) {
            var h = a.Gb
              , k = Ph(a);
            var l = _.kd(k, 5, a.Yg);
            var m = new Vh;
            var n = _.id(m, 1, b, 0);
            var p = _.id(n, 2, g, 0);
            var r = _.Rh(l, 9, Sh, p);
            ze(h, r)
          }
        } catch (t) {}
        return f
      }
    }
    ;
    Uh = function(a, b, c, d) {
      d = void 0 === d ? !1 : d;
      return function() {
        var e = _.wb.apply(0, arguments)
          , f = void 0
          , g = !1
          , h = null
          , k = _.mf(Wh);
        try {
          var l = _.F(Xh);
          l && k && (h = k.start(b.toString(), 3));
          f = c.apply(this, e);
          g = !0;
          l && k && k.end(h)
        } catch (m) {
          try {
            if (g)
              Yh.call(this, a, 110, m);
            else if (Yh.call(this, a, b, m),
              !d)
              throw m;
          } catch (n) {
            if (_.Zh(h),
            !g && !d)
              throw m;
          }
        }
        return f
      }
    }
    ;
    $h = function(a, b, c, d) {
      return Uh(a, b, c, void 0 === d ? !1 : d)()
    }
    ;
    Yh = function(a, b, c) {
      if (a.Gf) {
        c = c.error && c.meta && c.id ? c.error : c;
        var d = new ai
          , e = new bi;
        try {
          var f = rf(window);
          _.kd(e, 1, f)
        } catch (p) {}
        try {
          var g = _.mf(nf).j();
          _.hd(e, 2, g, Dc)
        } catch (p) {}
        try {
          _.ld(e, 3, window.document.URL)
        } catch (p) {}
        f = _.Oh(d, 2, e);
        g = new ci;
        b = _.id(g, 1, b, 0);
        try {
          var h = di(null == c ? void 0 : c.name) ? c.name : "Unknown error";
          _.ld(b, 2, h)
        } catch (p) {}
        try {
          var k = di(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
          _.ld(b, 3, k)
        } catch (p) {}
        try {
          var l = di(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
          l && _.hd(b, 4, l.split(/\n\s*/), _.Hc)
        } catch (p) {}
        h = _.Oh(f, 1, b);
        k = new ei;
        try {
          _.ld(k, 1, a.qb || a.Ma)
        } catch (p) {}
        try {
          var m = fi();
          _.id(k, 2, m, 0)
        } catch (p) {}
        try {
          var n = [].concat(_.xe(_.u(gi, "keys").call(gi)));
          _.hd(k, 3, n, _.Hc)
        } catch (p) {}
        _.Rh(h, 4, hi, k);
        _.kd(h, 5, a.Ye);
        ye(a.Gb, h)
      }
    }
    ;
    ki = function(a, b) {
      var c, d;
      return null != (d = null == (c = _.u(a, "find").call(a, function(e) {
        e = (0,
          C.I)(zf(e, ii, 1));
        return ji(e, 1) <= ji(b, 1) && ji(e, 2) <= ji(b, 2)
      })) ? void 0 : _.Pe(c, ii, 2)) ? d : null
    }
    ;
    oi = function(a, b, c) {
      return "number" === typeof b && "number" === typeof c && _.Pe(a, li, 6).length ? ki(_.Pe(a, li, 6), mi(ni(new ii, b), c)) : _.Pe(a, ii, 5)
    }
    ;
    qi = function(a) {
      var b = void 0 === b ? window : b;
      var c = null;
      b.top === b && (b = pi(!1, b),
        c = oi(a, b.width, b.height));
      null != c || (c = oi(a));
      return null == c ? [] : c.map(function(d) {
        return E(d, 3) ? "fluid" : [(0,
          C.ua)(ji(d, 1)), (0,
          C.ua)(ji(d, 2))]
      })
    }
    ;
    ri = function(a) {
      var b = []
        , c = !1;
      a = _.x(qi(a));
      for (var d = a.next(); !d.done; d = a.next())
        d = d.value,
          Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
      c && b.unshift("320x50");
      return b.join("|")
    }
    ;
    ti = function(a, b) {
      b = void 0 === b ? null : b;
      var c = [];
      a && (c.push(y(a, 1)),
        c.push(ri(a)),
        c.push(y(a, 2)));
      if (b) {
        a = [];
        for (var d = 0; b && 25 > d; b = b.parentNode,
          ++d)
          9 === b.nodeType ? a.push("") : a.push(b.id);
        (b = a.join()) && c.push(b)
      }
      return c.length ? _.si(c.join(":")).toString() : "0"
    }
    ;
    ui = function(a) {
      return 0 !== a && 1 !== a
    }
    ;
    wi = function(a, b) {
      var c;
      return !(null != (c = vi(b, 22)) ? !c : !E(a, 15))
    }
    ;
    yi = function(a) {
      var b = a.document;
      return xi(a) ? b.URL : b.referrer
    }
    ;
    Bi = function(a) {
      try {
        return zi(a, window.top)
      } catch (b) {
        return new _.Ai(-12245933,-12245933)
      }
    }
    ;
    Ei = function(a) {
      if (!a)
        return null;
      var b, c;
      a.getBoundingClientRect ? (a = _.Bh(Ci, a),
        a = new _.Di(a.right - a.left,a.bottom - a.top)) : a = null;
      return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    }
    ;
    Gi = function(a, b) {
      for (var c = {}, d = _.x(_.u(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        var f = _.Fd(b[e], !1)
          , g = _.mf(Fi)
          , h = g.j.get(e);
        null == h ? h = ++_.mf(Wh).m : g.j.delete(e);
        _.z(f, 20, h);
        c[e] = f
      }
      return {
        T: _.Fd(a, !1),
        R: c
      }
    }
    ;
    cj = function() {
      switch (_.Mf($i)) {
        case 1:
          return aj();
        case 2:
          return "9901b501132b9fabe59d89fcfe6bb421";
        default:
          return bj()
      }
    }
    ;
    aj = function() {
      for (var a = "", b = _.x(dj()), c = b.next(); !c.done; c = b.next())
        c = c.value,
        15 >= c && (a += "0"),
          a += c.toString(16);
      return a
    }
    ;
    dj = function() {
      var a;
      if ("function" === typeof (null == (a = window.crypto) ? void 0 : a.getRandomValues))
        return a = new Uint8Array(16),
          window.crypto.getRandomValues(a),
          a;
      a = window;
      var b;
      if ("function" === typeof (null == (b = a.msCrypto) ? void 0 : b.getRandomValues))
        return b = new Uint8Array(16),
          a.msCrypto.getRandomValues(b),
          b;
      a = Array(16);
      for (b = 0; b < a.length; b++)
        a[b] = Math.floor(255 * Math.random());
      return a
    }
    ;
    kj = function(a, b, c, d) {
      var e = ej(b, a) || fj(b, a);
      if (!e)
        return null;
      var f = Bi(e)
        , g = e === fj(b, a)
        , h = gj(function() {
        var p = g ? fj(b, a) : e;
        return p && hj(p, window)
      })
        , k = function(p) {
        var r;
        return null == (r = h()) ? void 0 : r.getPropertyValue(p)
      };
      c = qi(c)[0];
      var l = !1;
      Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
      l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
      if (g) {
        var m;
        f.y += Math.round(Math.min(null != (m = ij(k("padding-top"))) ? m : 0, e.clientHeight));
        if (!l) {
          d = e.clientWidth;
          var n;
          f.x += Math.round(Math.min(null != (n = ij(k("padding-left"))) ? n : 0, d))
        }
      }
      return f && jj(e) ? f : new _.Ai(-12245933,-12245933)
    }
    ;
    lj = function(a, b, c, d) {
      var e = fj(a, c)
        , f = "none" === (null == e ? void 0 : e.style.display);
      f && (e.style.display = "block");
      a = kj(c, a, b, d);
      f && (e.style.display = "none");
      return a
    }
    ;
    mj = function(a) {
      return "google_ads_iframe_" + a.toString()
    }
    ;
    nj = function(a) {
      return mj(a) + "__container__"
    }
    ;
    ej = function(a, b) {
      var c;
      return (null == (c = fj(a, b)) ? void 0 : c.querySelector('[id="' + nj(a) + '"]')) || null
    }
    ;
    oj = function(a, b) {
      var c, d;
      return null != (d = null == (c = ej(a, b)) ? void 0 : c.querySelector('iframe[id="' + mj(a) + '"]')) ? d : null
    }
    ;
    fj = function(a, b) {
      b = void 0 === b ? document : b;
      return pj().m.get(a) || b.getElementById(a.getDomId())
    }
    ;
    qj = function(a) {
      return Math.round(Number(ij(a)))
    }
    ;
    sj = function(a, b, c) {
      for (var d = 100; a && a !== b && --d; )
        _.rj(a, c),
          a = a.parentElement
    }
    ;
    tj = function(a, b, c, d, e) {
      _.rj(a, {
        "margin-left": "0px",
        "margin-right": "0px"
      });
      var f = {}
        , g = "rtl" === d.direction
        , h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
      d = function() {
        var k = a.getBoundingClientRect().left;
        return g ? h - k : k - h
      }
      ;
      b = d();
      return 0 !== b ? (c = function(k) {
        g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
      }
        ,
        c(-b),
        _.rj(a, f),
        d = d(),
      0 !== d && b !== d && (c(b / (d - b) * b),
        _.rj(a, f)),
        !0) : !1
    }
    ;
    vj = function(a, b, c, d, e, f, g, h, k) {
      var l = ri(d);
      _.q.setTimeout(Uh(a, 459, function() {
        return void uj(a, b, c, e, f, g, l, h, k)
      }), 500)
    }
    ;
    uj = function(a, b, c, d, e, f, g, h, k) {
      if (_.q.IntersectionObserver) {
        var l = null, m, n = null != (m = oj(c, b)) ? m : fj(c, b);
        m = Uh(a, 459, function(p) {
          if (p = p && p[0]) {
            var r = p.boundingClientRect
              , t = window.innerWidth
              , w = Math.round(r.left)
              , B = Math.round(r.right)
              , I = 0 > w + 2
              , H = 0 < B - (t + 2);
            if (p.intersectionRatio >= 1 - ((0 <= Math.round(r.left) ? 0 : 2) + (Math.round(r.right) <= window.innerWidth ? 0 : 2)) / e || I || H)
              wj(h, function(R) {
                if (I || H) {
                  var U = new xj;
                  U.set(8);
                  yj(n) && U.set(10);
                  U = zj(U)
                } else
                  U = Aj(b, c);
                var J = Bj(c, n, f)
                  , T = J.Sg;
                J = J.Tg;
                Cj(R, a);
                L(R, "qid", k);
                L(R, "iu", c.getAdUnitPath());
                L(R, "e", String(U));
                I && L(R, "ofl", String(w));
                H && L(R, "ofr", String(B - t));
                L(R, "ret", e + "x" + f);
                L(R, "req", g);
                L(R, "bm", String(d));
                L(R, "efh", Number(T));
                L(R, "stk", Number(J));
                L(R, "ifi", Dj(window))
              }, _.Mf(Ej)),
              l && l.unobserve((0,
                C.I)(n))
          }
        });
        n && (l = new _.q.IntersectionObserver(m,{
          threshold: [1]
        }),
          (0,
            C.I)(l).observe(n))
      }
    }
    ;
    Aj = function(a, b) {
      var c = oj(b, a) || fj(b, a)
        , d = new xj;
      try {
        var e = c.getBoundingClientRect()
          , f = e.left
          , g = e.top
          , h = e.width
          , k = e.height
          , l = fj(b, a)
          , m = (0,
          C.I)(hj(l, window));
        if ("hidden" === m.visibility || "none" === m.display)
          return zj(d);
        var n = qj(m.getPropertyValue("border-top-width") || 0) + 1;
        b = f + h;
        k = g + k;
        var p = a.elementsFromPoint(f + n + 2, g + n);
        var r = a.elementsFromPoint(b - n - 2, g + n);
        var t = a.elementsFromPoint(b - n - 2, k - n);
        var w = a.elementsFromPoint(f + n + 2, k - n);
        var B = a.elementsFromPoint(b / 2, k - n)
      } catch (H) {
        return d.set(1),
          zj(d)
      }
      if (!(p && p.length && r && r.length && t && t.length && w && w.length && B && B.length))
        return d.set(7),
          zj(d);
      a = function(H, R) {
        for (var U = !1, J = 0; J < H.length; J++) {
          var T = H[J];
          if (U) {
            var ba = hj(T, window);
            if ("hidden" !== ba.visibility && !Fj(T) && !I(c, T)) {
              d.set(R);
              "absolute" === ba.position && d.set(11);
              break
            }
          } else
            c === T && (U = !0)
        }
      }
      ;
      Gj(c) && d.set(9);
      var I = function(H, R) {
        return Hj(H, R) || Hj(R, H)
      };
      f = p[0];
      c === f || I(c, f) || Fj(f) || d.set(2);
      f = r[0];
      c === f || I(c, f) || Fj(f) || d.set(3);
      f = t[0];
      c === f || I(c, f) || Fj(f) || d.set(4);
      f = w[0];
      c === f || I(c, f) || Fj(f) || d.set(5);
      if (Fj(c))
        return zj(d);
      a(p, 12);
      a(r, 13);
      a(t, 14);
      a(w, 15);
      a(B, 6);
      return zj(d)
    }
    ;
    yj = function(a) {
      var b = !1
        , c = !1;
      return Ij(a, function(d) {
        c = c || "scroll" === d.overflowX || "auto" === d.overflowX;
        return (b = b || "flex" === d.display) && c
      })
    }
    ;
    Bj = function(a, b, c) {
      var d = (a = fj(a)) && hj(a, window)
        , e = d ? "absolute" !== d.position : !0
        , f = !1
        , g = a && a.parentElement
        , h = !1;
      Jj(b, function(k) {
        var l = k.style;
        if (e)
          if (h || (h = k === g))
            e = Kj(k, _.q, -1, -1);
          else {
            l = l && l.height;
            var m = (l && _.u(l, "endsWith").call(l, "px") ? qj(l) : 0) >= c;
            !l || m || "string" === typeof l && _.u(Lj, "includes").call(Lj, l) || (e = !1)
          }
        f || (k = hj(k, _.q),
        "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
        return !(f && !e)
      }, 100);
      return {
        Sg: e,
        Tg: f
      }
    }
    ;
    Kj = function(a, b, c, d) {
      var e = a.style;
      return (null == e ? 0 : e.height) && !_.u(Lj, "includes").call(Lj, e.height) || (null == e ? 0 : e.maxHeight) && !_.u(Mj, "includes").call(Mj, e.maxHeight) || Nj(a, b.document, function(f) {
        var g = f.style.height;
        f = f.style.getPropertyValue("max-height");
        return !!g && !_.u(Lj, "includes").call(Lj, g) || !!f && !_.u(Mj, "includes").call(Mj, f)
      }, c, d) ? !1 : !0
    }
    ;
    Nj = function(a, b, c, d, e) {
      b = b.styleSheets;
      if (!b)
        return !1;
      var f = a.matches || a.msMatchesSelector;
      d = -1 === d ? Infinity : d;
      e = -1 === e ? Infinity : e;
      for (var g = 0; g < Math.min(b.length, d); ++g) {
        var h = null;
        try {
          var k = b[g]
            , l = null;
          try {
            l = k.cssRules || k.rules
          } catch (R) {
            if (15 == R.code)
              throw R.styleSheet = k,
                R;
          }
          h = l
        } catch (R) {
          continue
        }
        l = void 0;
        if (null != (l = h) && l.length)
          for (l = 0; l < Math.min(h.length, e); ++l)
            try {
              var m = h[l], n, p = c;
              if (!(n = f.call(a, m.selectorText) && p(m)))
                a: {
                  var r = void 0;
                  p = a;
                  var t = c
                    , w = e
                    , B = null != (r = m.cssRules) ? r : [];
                  for (r = 0; r < Math.min(B.length, w); r++) {
                    var I = B[r]
                      , H = t;
                    if (f.call(p, I.selectorText) && H(I)) {
                      n = !0;
                      break a
                    }
                  }
                  n = !1
                }
              if (n)
                return !0
            } catch (R) {}
      }
      return !1
    }
    ;
    Fj = function(a) {
      return Ij(a, function(b) {
        return "fixed" === b.position || "sticky" === b.position
      })
    }
    ;
    Gj = function(a) {
      return Ij(a, function(b) {
        var c;
        return (_.D = ["left", "right"],
          _.u(_.D, "includes")).call(_.D, null != (c = b["float"]) ? c : b.cssFloat)
      })
    }
    ;
    Oj = function(a) {
      return "number" === typeof a || "string" === typeof a
    }
    ;
    Pj = function(a, b) {
      /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = ue(b),
        a.src = _.mb(b).toString())
    }
    ;
    Rj = function(a, b, c) {
      c = void 0 === c ? Qj : c;
      a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
        value: !0
      }),
        "complete" === a.document.readyState ? c(a, b) : _.yb(a, "load", function() {
          return void c(a, b)
        }))
    }
    ;
    Sj = function(a) {
      try {
        var b, c;
        return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
      } catch (d) {}
      return null
    }
    ;
    Tj = function(a) {
      var b = RegExp("^https?://[^/#?]+/?$");
      return !!a && !b.test(a)
    }
    ;
    Uj = function(a) {
      if (a === a.top || _.qe(a.top))
        return _.v.Promise.resolve({
          status: 4
        });
      var b = Sj(a);
      if (!b)
        return _.v.Promise.resolve({
          status: 2
        });
      if (a.parent === a.top && Tj(a.document.referrer))
        return _.v.Promise.resolve({
          status: 3
        });
      var c = new _.jh;
      a = new MessageChannel;
      a.port1.onmessage = function(d) {
        "__goog_top_url_resp" === d.data.msgType && c.resolve({
          Zc: d.data.topUrl,
          status: d.data.topUrl ? 0 : 1
        })
      }
      ;
      b.postMessage({
        msgType: "__goog_top_url_req"
      }, "*", [a.port2]);
      return c.promise
    }
    ;
    Yj = function(a) {
      var b = void 0 === b ? Vj : b;
      var c = Wj(a);
      return c.messageChannelSendRequestFn ? _.v.Promise.resolve(c.messageChannelSendRequestFn) : new _.v.Promise(function(d) {
          function e(k) {
            return h.j(k).then(function(l) {
              return l.data
            })
          }
          var f = _.Be("IFRAME");
          f.style.display = "none";
          f.name = "goog_topics_frame";
          f.src = _.mb(b).toString();
          var g = (new URL(b.toString())).origin
            , h = Xj({
            destination: a,
            kd: f,
            origin: g,
            Sa: "goog:gRpYw:doubleclick"
          });
          h.j("goog:topics:frame:handshake:ack").then(function(k) {
            "goog:topics:frame:handshake:ack" === k.data && d(e)
          });
          c.messageChannelSendRequestFn = e;
          a.document.documentElement.appendChild(f)
        }
      )
    }
    ;
    ek = function(a, b, c, d) {
      var e = _.F(Zj);
      e = void 0 === e ? !1 : e;
      var f = ak(d)
        , g = f.Uc
        , h = f.Tc;
      b = Wj(b);
      b.getTopicsPromise || (a = a({
        message: "goog:topics:frame:get:topics",
        skipTopicsObservation: e
      }).then(function(k) {
        var l = h;
        if (k instanceof Uint8Array)
          l || (l = !(g instanceof Uint8Array && Ca(k, g)));
        else if (Fe()(k))
          l || (l = k !== g);
        else
          return c.Ob(989, Error(JSON.stringify(k))),
            7;
        if (l && d)
          try {
            var m = new bk;
            var n = _.z(m, 2, _.gf());
            k instanceof Uint8Array ? ck(n, 1, dk, xc(k, !1, !1)) : ck(n, 3, dk, k);
            d.setItem("goog:cached:topics", Me(n))
          } catch (p) {}
        return k
      }),
        b.getTopicsPromise = (0,
          C.ua)(a));
      return g && !h ? _.v.Promise.resolve(g) : b.getTopicsPromise
    }
    ;
    ak = function(a) {
      if (!a)
        return {
          Uc: null,
          Tc: !0
        };
      try {
        var b = a.getItem("goog:cached:topics");
        if (!b)
          return {
            Uc: null,
            Tc: !0
          };
        var c = fk(b)
          , d = gk(c, dk);
        switch (d) {
          case 0:
            var e = null;
            break;
          case 1:
            var f = hk(c, dk, 1)
              , g = y(c, f)
              , h = xc(g, !0, !!(lc(c.da) & 18));
            null != h && h !== g && Xc(c, f, h);
            var k = null == h ? wc() : h;
            var l = ik(k);
            e = l ? new Uint8Array(l) : jk || (jk = new Uint8Array(0));
            break;
          case 3:
            e = _.Re(c, hk(c, dk, 3), 0);
            break;
          default:
            ib(d)
        }
        var m = _.$e(c, 2) + 6048E5 < _.gf();
        return {
          Uc: e,
          Tc: m
        }
      } catch (n) {
        return {
          Uc: null,
          Tc: !0
        }
      }
    }
    ;
    Wj = function(a) {
      var b;
      return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    }
    ;
    mk = function(a) {
      if (Za()) {
        var b = a.document.documentElement.lang;
        kk(a) ? lk(rf(a), !0, "", b) : (new MutationObserver(function(c, d) {
            kk(a) && (lk(rf(a), !1, b, a.document.documentElement.lang),
              d.disconnect())
          }
        )).observe(a.document.documentElement, {
          attributeFilter: ["class"]
        })
      }
    }
    ;
    kk = function(a) {
      var b, c;
      a = null == (b = a.document) ? void 0 : null == (c = b.documentElement) ? void 0 : c.classList;
      return !!((null == a ? 0 : a.contains("translated-rtl")) || (null == a ? 0 : a.contains("translated-ltr")))
    }
    ;
    lk = function(a, b, c, d) {
      Xe({
        ptt: "17",
        pvsid: "" + a,
        ibatl: String(b),
        pl: c,
        nl: d
      }, "translate-event")
    }
    ;
    nk = function(a) {
      var b = "";
      pe(function(c) {
        if (c === c.top)
          return !0;
        var d;
        if (null == (d = c.document) ? 0 : d.referrer)
          b = c.document.referrer;
        return !1
      }, !1, !1, a);
      return b
    }
    ;
    ok = function(a) {
      var b;
      return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    ;
    pk = function(a) {
      var b, c;
      return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }
    ;
    rk = function() {
      var a = window;
      if (!pk(a))
        return null;
      var b = ok(a);
      if (b.uach_promise)
        return b.uach_promise;
      a = a.navigator.userAgentData.getHighEntropyValues(qk).then(function(c) {
        null != b.uach || (b.uach = c);
        return c
      });
      return b.uach_promise = a
    }
    ;
    Dk = function(a) {
      var b;
      return sk(tk(uk(vk(wk(xk(yk(zk(Ak(new Bk, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
        var d = new Ck;
        d = _.z(d, 1, c.brand);
        return _.z(d, 2, c.version)
      })) || []), a.wow64 || !1)
    }
    ;
    Ek = function() {
      var a, b;
      return null != (b = null == (a = rk()) ? void 0 : a.then(function(c) {
        return Dk(c)
      })) ? b : null
    }
    ;
    Gk = function(a) {
      a = (_.qe(a.top) ? a.top : a).AMP;
      return "object" === typeof a && !!Fk(a, function(b, c) {
        return !/^inabox/i.test(c)
      })
    }
    ;
    Jk = function(a, b) {
      var c = Hk.get(a);
      c || (b = c = b(),
        Ik.set(b, a),
        Hk.set(a, b));
      return c
    }
    ;
    Lk = function(a, b) {
      return (0,
        C.ua)(Jk(b, function() {
        return new Kk(a,b)
      }))
    }
    ;
    M = function(a) {
      return function() {
        return new Mk(a,[].concat(_.xe(_.wb.apply(0, arguments))))
      }
    }
    ;
    Nk = function(a) {
      return "[" + a.map(function(b) {
        return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? Nk(b) : String(b)
      }).join(", ") + "]"
    }
    ;
    Ok = function(a, b) {
      b = Nk(b);
      b = b.substring(1, b.length - 1);
      return new Mk(96,[a, b])
    }
    ;
    Pk = function(a) {
      return (_.D = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable".split(" "),
        _.u(_.D, "includes")).call(_.D, a) ? a : null
    }
    ;
    Rk = function(a, b, c) {
      return Jk(c, function() {
        return new Qk(a,b,c)
      })
    }
    ;
    Tk = function(a, b, c) {
      return Jk(c, function() {
        return new Sk(a,b,c)
      })
    }
    ;
    Uk = function() {
      var a;
      return null != (a = _.q.googletag) ? a : _.q.googletag = {
        cmd: []
      }
    }
    ;
    Vk = function() {
      var a = Uk();
      a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    }
    ;
    Yk = function(a) {
      var b = window;
      "complete" === _.q.document.readyState ? $h(a, 94, function() {
        Uk()._pubconsole_disable_ || null !== Wk(b) && Xk(a, b)
      }) : _.yb(_.q, "load", Uh(a, 94, function() {
        Uk()._pubconsole_disable_ || null !== Wk(b) && Xk(a, b)
      }))
    }
    ;
    Xk = function(a, b) {
      b = void 0 === b ? _.q : b;
      if (!Zk) {
        var c = new $k("gpt_pubconsole_loaded");
        Cj(c, a);
        L(c, "param", String(Wk(b)));
        L(c, "api", String(al));
        bl(c);
        cl(b.document, dl);
        Zk = !0
      }
    }
    ;
    Wk = function(a) {
      var b = yi(a), c;
      return null != (c = (_.D = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"],
        _.u(_.D, "find")).call(_.D, function(d) {
        return null !== el(b, d)
      })) ? c : null
    }
    ;
    fl = function() {
      Uk()._pubconsole_disable_ = !0
    }
    ;
    il = function() {
      gl && ((0,
        C.I)(Uk().console).openConsole(hl),
        hl = void 0,
        gl = !1)
    }
    ;
    ql = function(a, b, c, d, e) {
      if ("string" !== typeof c || jl(c))
        kl(e, Ok("Slot.setTargeting", [c, d]), a);
      else {
        var f = [];
        Array.isArray(d) ? f = d : Aa(d) ? f = _.u(Array, "from").call(Array, d) : d && (f = [d]);
        f = f.map(String);
        (d = (_.D = ll(b),
          _.u(_.D, "find")).call(_.D, function(g) {
          return y(g, 1) === c
        })) ? ml(d, f) : (d = ml(nl(new ol, c), f),
          _.Yf(b, 9, ol, d));
        e.info(pl(c, f.join(), (0,
          C.I)(b.getAdUnitPath())), a)
      }
    }
    ;
    rl = function(a, b, c, d) {
      if (null != c && "object" === typeof c)
        for (var e = _.x(_.u(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next())
          f = f.value,
            ql(a, b, f, c[f], d);
      else
        d.error(Ok("Slot.updateTargetingFromMap", [c]), a)
    }
    ;
    tl = function(a, b, c) {
      return Jk(c, function() {
        return new sl(a,b,c,c.j)
      })
    }
    ;
    ul = function(a) {
      return _.u(Object, "assign").call(Object, {}, a, _.u(Object, "fromEntries").call(Object, _.u(Object, "entries").call(Object, a).map(function(b) {
        b = _.x(b);
        var c = b.next().value;
        return [b.next().value, c]
      })))
    }
    ;
    yl = function() {
      var a = {}
        , b = ul(vl);
      a.OutOfPageFormat = b;
      b = ul(wl);
      a.TrafficSource = b;
      b = ul(xl);
      a.Taxonomy = b;
      return a
    }
    ;
    Al = function() {
      for (var a = Nf(zl) || "0-0-0", b = a.split("-").map(function(e) {
        return Number(e)
      }), c = ["1", "0", "40"].map(function(e) {
        return Number(e)
      }), d = 0; d < b.length; d++) {
        if (b[d] > c[d])
          return a;
        if (b[d] < c[d])
          break
      }
      return "1-0-40"
    }
    ;
    El = function() {
      if (Bl)
        return Bl;
      for (var a = Of(Cl), b = [], c = 0; c < a.length; c += 2)
        Dl(a[c], a[c + 1], b);
      return Bl = b.join("&")
    }
    ;
    Kl = function(a, b) {
      if (!b || !_.qa(b))
        return null;
      var c = !1
        , d = new Fl;
      _.Gl(b, function(e, f) {
        var g = !1;
        switch (f) {
          case "allowOverlayExpansion":
            "boolean" === typeof e ? _.z(d, 1, b.allowOverlayExpansion) : c = g = !0;
            break;
          case "allowPushExpansion":
            "boolean" === typeof e ? _.z(d, 2, b.allowPushExpansion) : c = g = !0;
            break;
          case "sandbox":
            !0 === e ? _.z(d, 3, b.sandbox) : c = g = !0;
            break;
          case "useUniqueDomain":
            Hl();
            return;
          default:
            g = !0
        }
        g && a.error(Il("setSafeFrameConfig", Jl(b), f, Jl(e)))
      });
      return c ? null : d
    }
    ;
    Ml = function(a) {
      var b = new Fl;
      a = _.x(a);
      for (var c = a.next(); !c.done; c = a.next())
        if (c = c.value)
          Ll(c, 1) && _.z(b, 1, E(c, 1)),
          Ll(c, 2) && _.z(b, 2, E(c, 2)),
          Ll(c, 3) && _.z(b, 3, E(c, 3)),
          Ll(c, 4) && _.z(b, 4, E(c, 4));
      return b
    }
    ;
    Ol = function() {
      var a, b, c;
      return "pagead2.googlesyndication.com" === (null != (c = Nl.exec(null != (b = null == (a = _.Lh(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    }
    ;
    Pl = function(a) {
      return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    }
    ;
    Ql = function(a, b) {
      var c = b.m;
      return a.map(function(d) {
        return _.u(c, "find").call(c, function(e) {
          return e.j === d
        })
      }).filter(He())
    }
    ;
    Rl = function(a, b) {
      var c = [];
      a = _.x(a);
      for (var d = a.next(); !d.done; d = a.next()) {
        d = d.value;
        b.G = d;
        var e = pf(9);
        1 === e.length && (c.push(d),
          c.push(d + "-" + e[0]))
      }
      return c
    }
    ;
    Ul = function(a, b, c, d, e, f) {
      var g = Sl(f, a, b, d, e, void 0, !0);
      f = g.slotId;
      g = g.hb;
      if (!f || !g)
        return kl(b, Ok("PubAdsService.definePassback", [d, e])),
          null;
      _.z(g, 17, !0);
      c.slotAdded(f, g);
      return {
        uf: tl(a, b, new Tl(a,f,c)),
        hb: g
      }
    }
    ;
    Wl = function(a, b, c, d, e) {
      return Jk(c, function() {
        return new Vl(a,b,c,d,e)
      })
    }
    ;
    Yl = function(a) {
      return Array.isArray(a) && 2 === a.length ? a.every(Xl) : "fluid" === a
    }
    ;
    Zl = function(a) {
      return Array.isArray(a) && 2 === a.length && Xl(a[0]) && Xl(a[1])
    }
    ;
    am = function(a) {
      return Array.isArray(a) ? mi(ni(new ii, (0,
        C.ua)(a[0])), (0,
        C.ua)(a[1])) : $l()
    }
    ;
    qm = function(a) {
      var b = [];
      if (om(a))
        b.push(am((0,
          C.I)(a)));
      else if (Array.isArray(a)) {
        a = _.x(a);
        for (var c = a.next(); !c.done; c = a.next())
          c = c.value,
            om(c) ? b.push(am((0,
              C.I)(c))) : Ca(c, ["fluid"]) && b.push($l())
      }
      return b
    }
    ;
    rm = function(a) {
      var b = void 0 === b ? window : b;
      if (!a)
        return [];
      if (!a.length) {
        var c, d;
        null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
      }
      return qm(a)
    }
    ;
    om = function(a) {
      return _.F(sm) ? Array.isArray(a) && 2 === a.length ? a.every(tm) : "fluid" === a : Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    }
    ;
    ya = function(a, b) {
      a: {
        b = (0,
          C.ua)(b[0]);
        a = (0,
          C.ua)(a[0]);
        for (var c = _.wa, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
          var f = c(b[e], a[e]);
          if (0 != f) {
            b = f;
            break a
          }
        }
        b = _.wa(b.length, a.length)
      }
      return b
    }
    ;
    um = function(a) {
      return Array.isArray(a) && 2 === a.length && "number" === typeof a[0] && _.u(a, "includes").call(a, 0)
    }
    ;
    vm = function(a) {
      return um(a) ? [] : Array.isArray(a) && 0 < a.length && "number" !== typeof a[0] ? a.filter(function(b) {
        return !um(b)
      }) : a
    }
    ;
    xm = function(a) {
      if (!Array.isArray(a) || 2 !== a.length)
        throw new wm("Each mapping entry must be an array of size 2");
      var b = a[0];
      if (!Zl(b))
        throw new wm("Size must be an array of two non-negative integers");
      b = mi(ni(new ii, b[0]), b[1]);
      if (Array.isArray(a[1]) && 0 === a[1].length)
        a = [];
      else if (a = qm(a[1]),
      0 === a.length)
        throw new wm("At least one slot size must be present");
      var c = new li;
      b = _.Oh(c, 1, b);
      return _.Bd(b, 2, a)
    }
    ;
    zm = function(a, b, c) {
      return Jk(c, function() {
        return new ym(a,b,c)
      })
    }
    ;
    Am = function(a, b) {
      for (var c = new xj, d = 0; d < a.length; d++)
        c.set(a.length - d - 1, b(a[d]));
      return zj(c)
    }
    ;
    Bm = function(a, b, c) {
      c = void 0 === c ? {} : c;
      var d = void 0 === c.qc ? "" : c.qc;
      c = void 0 === c.va ? "," : c.va;
      var e = !1;
      a = a.map(function(f) {
        f = b(f);
        e || (e = !!f);
        return String(f || d)
      });
      return e ? a.join(c) : null
    }
    ;
    Dm = function(a, b, c, d) {
      for (var e = _.x(_.u(Object, "entries").call(Object, Cm)), f = e.next(); !f.done; f = e.next()) {
        var g = _.x(f.value);
        f = g.next().value;
        g = g.next().value;
        b & f && kl(a, g(c, d))
      }
    }
    ;
    Im = function(a, b, c) {
      c = void 0 === c ? null : c;
      b = (void 0 === b ? 0 : b) ? 604800 : -1;
      if (!(0 < b) || c && E(c, 5)) {
        var d = 0;
        try {
          d |= a != a.top ? 512 : 0,
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        } catch (g) {
          d |= 32
        }
        c = c ? bf(c) : null;
        var e = 0;
        try {
          e |= sh(a, 2500);
          if (_.F(Em)) {
            var f = _.Fm(a).clientHeight;
            e |= f ? 320 > f ? 2097152 : 0 : 1073741824
          }
          e |= th(a);
          0 < b && !_.Gm(_.Hm(c, b)) && (e |= 134217728)
        } catch (g) {
          e |= 32
        }
        a = d | e
      } else
        a = 4194304;
      return a
    }
    ;
    Mm = function(a, b, c, d, e, f) {
      d = Jm(d);
      if (5 !== d)
        return !1;
      var g = Im(e, !Km(c), f);
      if (g &= -134217729)
        wj("gpt_int_ns", function(h) {
          L(h, "nsr", g);
          Cj(h, a)
        }, _.Mf(Lm)),
          Dm(b, g, d, c.getAdUnitPath());
      return !!g
    }
    ;
    Nm = function(a) {
      switch (a) {
        case 4:
          return 11;
        case 2:
          return 2;
        case 3:
          return 1;
        case 5:
          return 8;
        case 6:
          return 42
      }
    }
    ;
    Rm = function(a, b) {
      a = Nm(a);
      if (!a)
        return null;
      var c = 0;
      if (11 !== a) {
        c |= _.q != _.q.top ? 512 : 0;
        var d = _.Om(_.q);
        d = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && d.adCount ? 1 == a || 2 == a ? !(!d.adCount[1] && !d.adCount[2]) : (d = d.adCount[a]) ? 1 <= d : !1 : !1;
        d && (c |= 64);
        if (c)
          return c
      }
      2 === a || 1 === a ? (b = {
        ta: _.q,
        rd: _.Pm,
        Pe: b ? a : void 0
      },
      0 === (0,
        _.Qm)() && (b.rd = 3E3,
        b.oe = 650),
        c |= _.yh(b)) : 8 === a ? c |= Im(_.q) : 11 !== a && 42 !== a && (c |= 32);
      c || (b = _.Om(_.q),
        b.adCount = b.adCount || {},
        b.adCount[a] = b.adCount[a] + 1 || 1);
      return c
    }
    ;
    Sm = function(a, b, c, d) {
      var e = _.Be("DIV");
      e.id = b;
      e.name = b;
      b = e.style;
      b.border = "0pt none";
      c && (b.margin = "auto",
        b.textAlign = "center");
      d && (c = Array.isArray(d),
        b.width = c ? d[0] + "px" : "100%",
        b.height = c ? d[1] + "px" : "0%");
      a.appendChild(e);
      return e
    }
    ;
    Tm = function(a) {
      return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    }
    ;
    Vm = function(a, b, c, d) {
      try {
        var e;
        if (!(e = !b)) {
          var f;
          if (!(f = !Um(b, c, d))) {
            a: {
              do {
                var g = hj(b, c);
                if (g && "fixed" == g.position) {
                  var h = !1;
                  break a
                }
              } while (b = b.parentElement);
              h = !0
            }
            f = !h
          }
          e = f
        }
        e && (a.height = -1)
      } catch (k) {
        a.width = -1,
          a.height = -1
      }
    }
    ;
    Wm = function(a) {
      if (61440 >= a.length)
        return {
          url: a,
          Oe: 0
        };
      var b = a;
      61440 < b.length && (b = b.substring(0, 61432),
        b = b.replace(/%\w?$/, ""),
        b = b.replace(/&[^=]*=?$/, ""),
        b += "&trunc=1");
      return {
        url: b,
        Oe: a.length - b.length + 8
      }
    }
    ;
    Xm = function(a, b) {
      b = void 0 === b ? window : b;
      return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a),
        (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    }
    ;
    Ym = function(a, b) {
      b = void 0 === b ? window : b;
      return !!Xm(a, b)
    }
    ;
    an = function(a, b) {
      var c = b.R;
      return Bm(a, function(d) {
        return Zm(c[d.getDomId()]).join("&")
      }, $m)
    }
    ;
    Zm = function(a) {
      a = bn(a);
      var b = [];
      _.Gl(a, function(c, d) {
        c.length && (c = c.map(encodeURIComponent),
          d = encodeURIComponent(d),
          b.push(d + "=" + c.join()))
      });
      return b
    }
    ;
    bn = function(a) {
      for (var b = {}, c = _.x(ll(a)), d = c.next(); !d.done; d = c.next())
        d = d.value,
          b[(0,
            C.I)(y(d, 1))] = _.cn(d, 2);
      a = _.cn(a, 8);
      a.length && (null != b.excl_cat || (b.excl_cat = a));
      return b
    }
    ;
    dn = function(a) {
      var b = !1
        , c = _.Pe(a, ol, 2).map(function(d) {
        var e = (0,
          C.I)(y(d, 1));
        b = "excl_cat" === e;
        d = _.cn(d, 2);
        return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
      });
      a = _.cn(a, 3);
      !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
      return c
    }
    ;
    en = function(a) {
      var b, c;
      return null != (c = null == (b = _.u(a, "find").call(a, function(d) {
        return "page_url" === y(d, 1)
      })) ? void 0 : _.cn(b, 2)[0]) ? c : null
    }
    ;
    fn = function(a) {
      var b = a.indexOf("google_preview=", a.lastIndexOf("?"))
        , c = a.indexOf("&", b);
      -1 === c && (c = a.length - 1,
        --b);
      return a.substring(0, b) + a.substring(c + 1, a.length)
    }
    ;
    gn = function(a) {
      var b;
      if (null == (b = a.location) ? 0 : b.ancestorOrigins)
        return a.location.ancestorOrigins.length;
      var c = 0;
      pe(function() {
        c++;
        return !1
      }, !0, !0, a);
      return c
    }
    ;
    hn = function(a, b) {
      var c = b.R;
      return !!en(b.T.wa()) || a.some(function(d) {
        return null !== en(c[d.getDomId()].wa())
      })
    }
    ;
    ln = function(a, b, c) {
      var d = null;
      try {
        var e = jn(b.top.document, b.top).y;
        d = a.map(function(f) {
          var g = c.T, h = c.R[f.getDomId()], k;
          f = null == (k = lj(f, h, b.document, wi(g, h))) ? void 0 : k.y;
          k = pi(!0, b).height;
          return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++kn
        })
      } catch (f) {}
      return d
    }
    ;
    nn = function() {
      var a = void 0 === a ? window : a;
      mn = _.gf(a)
    }
    ;
    on = function(a, b) {
      var c;
      return !(null != (c = vi(a, 11)) ? !c : !E(b, 10))
    }
    ;
    pn = function(a, b, c, d) {
      if (a = fj(a, b)) {
        var e;
        if (c = null != (e = vi(c, 24)) ? e : E(d, 30))
          c = a.getBoundingClientRect(),
            d = c.top,
            e = c.bottom,
            0 === c.height ? c = !1 : (c = _.q.innerHeight,
              c = 0 < e && e < c || 0 < d && d < c);
        c || (a.style.display = "none")
      }
    }
    ;
    vn = function(a, b, c, d, e, f, g) {
      var h = new ig
        , k = new qn(a,d);
      G(h, k);
      f = new rn(a,e,f);
      G(h, f);
      f = new sn(a,b,e,g,k.mb);
      G(h, f);
      b = new tn(a,b,c,e,d,g,k.mb);
      G(h, b);
      a = new un(a,k.mb,b.l,f.l);
      G(h, a);
      tg(h);
      return {
        mb: a.C,
        sa: h
      }
    }
    ;
    wn = function(a) {
      var b = a.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
      return 3 !== (null == b ? void 0 : b.length) ? a : "/" + b[1] + b[2]
    }
    ;
    yn = function(a, b) {
      var c, d;
      return null != (d = null != (c = null == b ? void 0 : b.get(_.F(xn) ? wn(a) : a)) ? c : null == b ? void 0 : b.get(_.si(a))) ? d : 0
    }
    ;
    Dn = function(a, b, c, d, e) {
      if (null != b && b.size) {
        var f, g;
        e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? g : [];
        a = {};
        f = _.x(e);
        for (g = f.next(); !g.done; a = {
          Pc: a.Pc
        },
          g = f.next()) {
          e = g.value;
          g = e.code;
          var h = e.bids;
          e = void 0;
          if (g && null != (e = h) && e.length && (g = yn(g, b),
            a.Pc = g / 1E6,
            !(0 >= g))) {
            var k = void 0;
            e = {};
            h = _.x(null != (k = h) ? k : []);
            for (k = h.next(); !k.done; e = {
              Ya: e.Ya,
              Gd: e.Gd
            },
              k = h.next())
              k = k.value,
                e.Gd = "function" === typeof k.getFloor ? k.getFloor : void 0,
                e.Ya = zn(An(Bn(new Cn, 4), g), c),
                k.getFloor = function(l, m) {
                  return function(n) {
                    4 === _.Re(l.Ya, 1, 0) && Bn(l.Ya, 1);
                    var p, r = null == (p = l.Gd) ? void 0 : p.apply(this, [n]);
                    n = c ? r || {} : {
                      currency: "USD",
                      floor: m.Pc
                    };
                    return null != r && r.floor ? (null == r ? 0 : r.currency) && "USD" !== r.currency ? (1 === _.Re(l.Ya, 1, 0) && (n = An(Bn(l.Ya, 6), 1E6 * r.floor),
                      _.z(n, 3, r.currency)),
                      r) : (r.floor || 0) > m.Pc ? (1 === _.Re(l.Ya, 1, 0) && An(Bn(l.Ya, 5), 1E6 * r.floor),
                      r) : n : n
                  }
                }(e, a),
                d.set(k.getFloor, e.Ya)
          }
        }
      }
    }
    ;
    En = function(a, b) {
      var c = a.que
        , d = function() {
        var e;
        null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
          return Uk().pbjs_hooks.push({
            context: b,
            nextFunction: f,
            requestBidsConfig: g
          })
        }, 0)
      };
      (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d) : null == c || c.unshift(d)
    }
    ;
    Gn = function(a, b) {
      return (0,
        C.ua)(Jk(b, function() {
        return new Fn(a,b)
      }))
    }
    ;
    Nn = function(a, b, c) {
      var d = window
        , e = new ig;
      d = _.F(Hn) ? new In(d) : new Jn(d);
      _.Kn(e, d);
      c = new Ln(a,d,c);
      G(e, c);
      a = new Mn(a,d,b,c.Mb);
      G(e, a);
      tg(e);
      return {
        Mb: c.Mb,
        df: a.l,
        sa: e
      }
    }
    ;
    Qn = function(a) {
      return On(a) && Pn(a)
    }
    ;
    On = function(a) {
      var b, c = null == (b = window.top) ? void 0 : b.location.href;
      if (!c)
        return !1;
      var d = _.si(c), e;
      return null == (e = _.Pe(a, Rn, 1)) ? void 0 : e.some(function(f) {
        switch (gk(f, Sn)) {
          case 1:
            f = (0,
              C.I)(Tn(f, Un, 1, Sn));
            if (null != Vn(f, 1) && null != Vn(f, 2)) {
              var g = (0,
                C.I)(Se(f, 1));
              f = 0 >= g || g > c.length ? !1 : (0,
                C.I)(Se(f, 2)) === _.si(c.substring(0, g))
            } else
              f = !1;
            return f;
          case 2:
            return (0,
              C.I)(Se(f, hk(f, Sn, 2))) === d;
          default:
            return !1
        }
      })
    }
    ;
    Pn = function(a) {
      var b;
      return null == (b = _.Wn(a, 2)) ? void 0 : b.some(function(c) {
        switch (c) {
          case 0:
            return !1;
          case 1:
            return !0;
          case 2:
            return 0 === (0,
              _.Qm)();
          case 4:
            return 2 === (0,
              _.Qm)();
          case 3:
            return 1 === (0,
              _.Qm)();
          default:
            return !1
        }
      })
    }
    ;
    ao = function(a, b, c, d, e) {
      var f = [];
      c = _.x(_.Pe(c, Xn, 3));
      for (var g = c.next(); !g.done; g = c.next())
        if (g = g.value,
        _.cg(g, 1) && _.cg(g, 2) && null != Vn(g, 3) && null != Vn(g, 4)) {
          var h = a.querySelector(_.Vf(g, 1))
            , k = void 0;
          if (null != (k = h) && k.parentElement) {
            k = g.getAdUnitPath();
            var l = "gpt_opp_" + k;
            if (!a.getElementById(l)) {
              var m = a.createElement("div");
              m.id = l;
              h.insertAdjacentElement("beforebegin", m);
              if (g = b.defineSlot(k, [g.getWidth(), g.getHeight()], l))
                g.addService(b.pubads()),
                  h = Yn(pj(), g.getSlotElementId()),
                e && (k = void 0,
                null == (k = h) || Zn(k, e)),
                  f.push(g)
            }
          }
        }
      f.length && $n(a, function() {
        for (var n = _.x(f), p = n.next(); !p.done; p = n.next())
          b.display(p.value);
        E(d, 4) && b.pubads().refresh(f)
      })
    }
    ;
    eo = function(a, b, c, d) {
      var e = d.Wd
        , f = d.adUnitPath;
      d = void 0 === d.pb ? !1 : d.pb;
      return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && bo(e)) ? co(a, b, f, c, {
        nb: "string" === typeof e ? e : void 0,
        format: "number" === typeof e ? e : 1,
        pb: d
      }) : (b.error(Ok("googletag.defineOutOfPageSlot", [f, e])),
        null)
    }
    ;
    bo = function(a) {
      return !!Fk(vl, function(b) {
        return b === a
      }) || 6 === a
    }
    ;
    co = function(a, b, c, d, e) {
      var f = e.format;
      b = d.add(a, b, c, [1, 1], {
        nb: e.nb,
        format: f,
        pb: e.pb
      });
      a = b.slotId;
      b = b.hb;
      a && b && (_.z(b, 15, f),
        _.fo(a, function() {
          var g = window
            , h = Nm((0,
            C.I)(f));
          if (h) {
            g = _.Om(g);
            var k = g.adCount && g.adCount[h];
            k && (g.adCount[h] = k - 1)
          }
        }));
      return null != a ? a : null
    }
    ;
    go = function(a) {
      switch (Number(a)) {
        case 2:
        case 3:
          return "Anchor";
        case 5:
          return "Interstitial";
        case 6:
          return "Shoppit";
        default:
          return "Out-of-page creative"
      }
    }
    ;
    oo = function(a, b, c, d, e) {
      var f = e.getBidResponsesForAdUnitCode;
      if (f) {
        var g, h, k, l = null != (k = null == (g = f(b.getDomId())) ? void 0 : g.bids) ? k : null == (h = f(b.getAdUnitPath())) ? void 0 : h.bids;
        if (null != l && l.length && (f = l.filter(function(p) {
          var r = p.adId;
          return p.auctionId !== c && d.some(function(t) {
            return (_.D = _.cn(t, 2),
              _.u(_.D, "includes")).call(_.D, r)
          })
        }),
          f.length)) {
          var m, n;
          e = null == (m = e.adUnits) ? void 0 : null == (n = _.u(m, "find").call(m, function(p) {
            p = p.code;
            return p === b.getAdUnitPath() || p === b.getDomId()
          })) ? void 0 : n.mediaTypes;
          m = _.x(f);
          for (n = m.next(); !n.done; n = m.next())
            n = n.value,
              f = ho(n, d, e),
              f = io(a, jo(_.z(ko(lo(new mo, n.bidder), 1), 6, !0), f)),
            "number" === typeof n.timeToRespond && no(f, n.timeToRespond)
        }
      }
    }
    ;
    po = function(a, b, c) {
      null != y(a, 3) || (c === b.getAdUnitPath() ? _.z(a, 3, 1) : c === b.getDomId() && _.z(a, 3, 2))
    }
    ;
    so = function(a, b, c, d, e, f, g) {
      f = f.get(null != g ? g : function() {
          return null
        }
      );
      1 !== (null == f ? void 0 : _.Re(f, 1, 0)) && _.Oh(b, 5, f);
      qo(a, Cn, 5) || (f ? 1 === _.Re(f, 1, 0) ? ro(a, f) : ro(a, An(Bn(zn(new Cn, e), 1), yn(c, d))) : ro(a, Bn(zn(new Cn, e), yn(c, d) ? 2 : 3)))
    }
    ;
    ho = function(a, b, c) {
      var d = a.cpm
        , e = a.originalCpm
        , f = a.currency
        , g = a.originalCurrency
        , h = a.dealId
        , k = a.adserverTargeting
        , l = a.bidder
        , m = a.adUnitCode
        , n = a.adId
        , p = a.mediaType
        , r = a.height;
      a = a.width;
      var t = new to;
      "number" === typeof d && (_.z(t, 2, Math.round(1E6 * d)),
      g && g !== f || (d = Math.round(1E6 * Number(e)),
      isNaN(d) || d === _.$e(t, 2) || _.z(t, 8, d)));
      "string" === typeof f && _.z(t, 3, f);
      "string" === typeof h && uo(t, vo(h));
      if ("object" === typeof k)
        for (b = _.u(Object, "fromEntries").call(Object, b.map(function(I) {
          return [y(I, 1), _.cn(I, 2)]
        })),
               f = _.x(["", "_" + l]),
               h = f.next(); !h.done; h = f.next()) {
          h = h.value;
          d = [];
          e = _.x(_.u(Object, "entries").call(Object, k));
          for (g = e.next(); !g.done; g = e.next()) {
            g = _.x(g.value);
            var w = g.next().value;
            g = g.next().value;
            w = (w + h).slice(0, 20);
            var B = void 0;
            if (null != (B = b[w]) && B.length)
              if (b[w][0] === String(g))
                d.push(w);
              else {
                d = [];
                break
              }
          }
          wo(t, _.cn(t, 4).concat(d))
        }
      switch (p || "banner") {
        case "banner":
          _.z(t, 5, 1);
          break;
        case "native":
          _.z(t, 5, 2);
          wj("hbyg_nat", function(I) {
            L(I, "pub_url", document.URL);
            L(I, "b", l);
            L(I, "auc", null != m ? m : "");
            L(I, "hmt", Number(!!c));
            var H;
            L(I, "hat", Number(!!(null == c ? 0 : null == (H = c.native) ? 0 : H.adTemplate)))
          }, _.Mf(xo));
          break;
        case "video":
          _.z(t, 5, 3)
      }
      "number" === typeof r && "number" === typeof a && yo(t, zo(Ao(a), r));
      "string" === typeof n && _.z(t, 1, n);
      return t
    }
    ;
    Bo = function(a, b) {
      var c = new _.v.Map
        , d = function(k) {
        var l = c.get(k);
        l || (l = {},
          c.set(k, l));
        return l
      }
        , e = [];
      a = _.x(a);
      for (var f = a.next(); !f.done; f = a.next()) {
        f = f.value;
        var g = f.args
          , h = f.eventType;
        f = f.elapsedTime;
        "bidTimeout" === h && e.push.apply(e, _.xe(g));
        switch (h) {
          case "bidRequested":
            if (g.auctionId !== b)
              continue;
            if (!Array.isArray(g.bids))
              continue;
            g = _.x(g.bids);
            for (h = g.next(); !h.done; h = g.next())
              if (h = h.value.bidId)
                d(h).requestTime = f;
            break;
          case "noBid":
            g.auctionId === b && g.bidId && (d(g.bidId).xh = f)
        }
      }
      d = new _.v.Map;
      a = _.x(_.u(c, "entries").call(c));
      for (f = a.next(); !f.done; f = a.next())
        g = _.x(f.value),
          f = g.next().value,
          h = g.next().value,
          g = h.requestTime,
          h = h.xh,
        g && h && d.set(f, {
          latency: h - g,
          kf: !1
        });
      e = _.x(e);
      for (a = e.next(); !a.done; a = e.next())
        if (f = a.value,
          a = f.bidId,
          f = f.auctionId,
        a && f === b && (a = d.get(a)))
          a.kf = !0;
      return d
    }
    ;
    Co = function(a, b) {
      b.topLevelSellerSignals.resolve(a.sellerSignals);
      var c;
      if (a = null == (c = a.componentAuctions) ? void 0 : _.u(c, "find").call(c, function(e) {
        return "https://pubads.g.doubleclick.net" === e.seller
      })) {
        b.auctionSignals.resolve(a.auctionSignals);
        b.j.resolve(a.sellerSignals);
        b.perBuyerSignals.resolve(a.perBuyerSignals);
        var d;
        b.perBuyerTimeouts.resolve(null != (d = a.perBuyerTimeouts) ? d : {})
      } else
        b.auctionSignals.resolve(void 0),
          b.j.resolve(void 0),
          b.perBuyerSignals.resolve({}),
          b.perBuyerTimeouts.resolve({})
    }
    ;
    Ko = function(a) {
      var b = a.He;
      a = a.Qe;
      for (var c = {}, d = _.x(_.Pe(b, Do, 7)), e = d.next(); !e.done; e = d.next())
        e = e.value,
          c[_.Vf(e, 1)] = JSON.parse(_.Vf(e, 2));
      if (d = zf(b, Eo, 6))
        c["https://googleads.g.doubleclick.net"] = d.toJSON(),
          c["https://td.doubleclick.net"] = d.toJSON();
      d = {};
      e = _.x(_.Pe(b, Fo, 11));
      for (var f = e.next(); !f.done; f = e.next())
        f = f.value,
          d[_.Vf(f, 1)] = Se(f, 2);
      f = {};
      Go(b, 18) && (f["https://googleads.g.doubleclick.net"] = Go(b, 18),
        f["https://td.doubleclick.net"] = Go(b, 18));
      var g;
      e = {
        seller: _.Vf(b, 1).split("/td/")[0],
        decisionLogicUrl: _.Vf(b, 1),
        trustedScoringSignalsUrl: _.Vf(b, 2),
        interestGroupBuyers: _.cn(b, 3),
        sellerExperimentGroupId: Go(b, 17),
        auctionSignals: JSON.parse(_.Vf(b, 4) || "{}"),
        sellerSignals: (null == (g = zf(b, Ho, 5)) ? void 0 : g.toJSON()) || [],
        sellerTimeout: Se(b, 15) || 50,
        perBuyerExperimentGroupIds: f,
        perBuyerSignals: c,
        perBuyerTimeouts: d
      };
      g = new Ho;
      "0" !== md(y(Io(Io(b, Ho, 5), Jo, 5), 2), "0") && (c = new Jo,
        d = md(y(Io(Io(b, Ho, 5), Jo, 5), 2), "0"),
        zc(c),
        null != d && 0 !== +d ? Xc(c, 2, d) : Xc(c, 2, void 0, !1),
        _.Oh(g, 5, c));
      return {
        seller: _.Vf(b, 1).split("/td/")[0],
        decisionLogicUrl: _.Vf(b, 1),
        sellerExperimentGroupId: Go(b, 17),
        sellerSignals: g.toJSON(),
        sellerTimeout: Se(b, 15) || 50,
        interestGroupBuyers: [],
        auctionSignals: {},
        perBuyerExperimentGroupIds: {},
        perBuyerSignals: {},
        perBuyerTimeouts: {},
        componentAuctions: [e].concat(_.xe(null != a ? a : []))
      }
    }
    ;
    Ro = function(a, b) {
      var c, d, e, f, g, h, k, l, m, n, p, r;
      return _.Ab(function(t) {
        if (1 == t.j)
          return _.u(a, "startsWith").call(a, "urn:") && Lo.deprecatedURNToURL && Lo.deprecatedReplaceInURN ? Bb(t, Lo.deprecatedURNToURL(a), 2) : t.return();
        c = t.o;
        d = {};
        e = b.gdprApplies || "";
        (null != (f = c.match(Mo)) ? f : []).forEach(function(w) {
          d[w] = e
        });
        g = b.ef || "";
        (null != (h = c.match(No)) ? h : []).forEach(function(w) {
          d[w] = g
        });
        k = b.Je || "";
        (null != (l = c.match(Oo)) ? l : []).forEach(function(w) {
          d[w] = k
        });
        m = b.Tf || "";
        (null != (n = c.match(Po)) ? n : []).forEach(function(w) {
          d[w] = m
        });
        p = b.Qf || "";
        (null != (r = c.match(Qo)) ? r : []).forEach(function(w) {
          d[w] = p
        });
        return Bb(t, Lo.deprecatedReplaceInURN(a, d), 0)
      })
    }
    ;
    Uo = function(a, b, c) {
      var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner"
        , e = _.So(c, 18)
        , f = _.So(c, 7);
      if (f || e)
        d += "&isContextualWinner=1";
      f && (d += "&hasXfpAds=1");
      e = c.getEscapedQemQueryId();
      f = _.Vf(c, 6);
      e && (d += "&winner_qid=" + encodeURIComponent(e));
      f && (d += "&xfpQid=" + encodeURIComponent(f));
      _.So(c, 4) && (d += "&is_plog=1");
      (e = _.Vf(c, 11)) && (d += "&ecrs=" + e);
      (null == c ? 0 : _.So(c, 21)) || (d += "&turtlexTest=1");
      d += "&applied_timeout_ms=" + (b + "&duration_ms=" + Math.round(a));
      To(d)
    }
    ;
    Vo = function() {
      return new _.v.Promise(function(a) {
          setTimeout(function() {
            a(null)
          }, 0)
        }
      )
    }
    ;
    Xo = function(a) {
      Wo = a
    }
    ;
    Yo = function(a, b, c, d) {
      kl(a, Il("googletag.setConfig.commerce", Jl(b), c, Jl(d)))
    }
    ;
    Zo = function(a) {
      return "string" === typeof a && 0 < a.length && 5E3 > a.length
    }
    ;
    $o = function(a) {
      if (!Array.isArray(a) || 0 === a.length)
        return !1;
      var b = a.length - 1;
      return a.every(function(c) {
        if ("string" !== typeof c || 0 === c.length)
          return !1;
        b += c.length;
        return 5E3 < b ? !1 : !0
      })
    }
    ;
    cp = function(a, b, c) {
      if ("object" === typeof a && null !== a && _.u(Object, "keys").call(Object, (0,
        C.I)(a)).some(function(d) {
        return (_.D = _.u(Object, "values").call(Object, ap),
          _.u(_.D, "includes")).call(_.D, Number(d))
      }))
        return !0;
      bp("taxonomies", a, b, c);
      return !1
    }
    ;
    ep = function(a, b) {
      var c = _.Pe(b, dp, 1).filter(function(d) {
        return _.Re(d, 1, 0) !== a
      });
      _.Bd(b, 1, c)
    }
    ;
    lp = function(a, b, c, d) {
      if (void 0 !== _.u(b, "values"))
        if (null === _.u(b, "values"))
          ep(a, c);
        else if (fp(_.u(b, "values"), d, b) && (b = gp(a, _.u(b, "values"), d, b),
          b.length)) {
          var e = (_.D = _.Pe(c, dp, 1),
            _.u(_.D, "find")).call(_.D, function(f) {
            return _.Re(f, 1, 0) === a
          });
          e ? hp(e, b) : ip(c, hp(jp(new dp, a), b));
          d.info(kp(Jl(b), Jl(a)))
        }
    }
    ;
    fp = function(a, b, c) {
      if (Array.isArray(a))
        return !0;
      bp("taxonomyData.values", a, b, c);
      return !1
    }
    ;
    gp = function(a, b, c, d) {
      var e = []
        , f = []
        , g = !1;
      b = _.x(b);
      for (var h = b.next(); !h.done; h = b.next())
        h = h.value,
        5 <= e.length && (g = !0),
          "string" !== typeof h ? f.push(h) : g || h in e || e.push(h);
      0 < f.length && bp("taxonomyData.values", f, c, d);
      g && kl(c, mp(Jl(a), Jl(5)));
      return e
    }
    ;
    bp = function(a, b, c, d) {
      kl(c, Il("googletag.setConfig.pps", Jl(d), a, Jl(b)))
    }
    ;
    pp = function() {
      for (var a = _.x(_.u(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
        var c = b = b.value
          , d = b.src;
        d && (Pa(d, "/tag/js/gpt.js") || Pa(d, "/tag/js/gpt_mobile.js")) && !c.googletag_executed && b.textContent && (c.googletag_executed = !0,
          c = document.createElement("script"),
          lb(c, new _.np(b.textContent,op)),
          document.head.appendChild(c),
          document.head.removeChild(c))
      }
    }
    ;
    qp = function(a, b) {
      b = _.x(_.u(Object, "entries").call(Object, b));
      for (var c = b.next(); !c.done; c = b.next()) {
        var d = _.x(c.value);
        c = d.next().value;
        d = d.next().value;
        a.hasOwnProperty(c) || (a[c] = d)
      }
    }
    ;
    tp = function(a, b, c) {
      var d = [];
      c = [].concat(_.xe(c.X)).slice();
      if (b) {
        if (!Array.isArray(b))
          return kl(a, Ok("googletag.destroySlots", [b])),
            !1;
        ta(b);
        d = c.filter(function(e) {
          return _.u(b, "includes").call(b, e.j)
        })
      } else
        d = c;
      if (!d.length)
        return !1;
      rp(d);
      sp(d);
      return !0
    }
    ;
    Kp = function(a, b, c, d, e, f, g, h, k, l) {
      var m = Uk(), n, p, r = K(a, 74, function(w, B, I) {
        return e.defineSlot(a, b, w, B, I)
      }), t = {};
      r = (t._loaded_ = !0,
        t.cmd = [],
        t._vars_ = m._vars_,
        t.evalScripts = function() {
          try {
            pp()
          } catch (I) {
            Yh(a, 297, I);
            var w, B;
            null == (w = window.console) || null == (B = w.error) || B.call(w, I)
          }
        }
        ,
        t.display = K(a, 95, function(w) {
          void up(c, w, e)
        }),
        t.defineOutOfPageSlot = K(a, 73, function(w, B) {
          return (w = eo(a, b, e, {
            Wd: B,
            adUnitPath: w
          })) ? w.j : null
        }),
        t.getVersion = K(a, 946, function() {
          return a.Cb ? String(a.Cb) : a.Ma
        }),
        t.pubads = K(a, 947, function() {
          return Wl(a, b, c, e, h)
        }),
        t.companionAds = K(a, 816, function() {
          null != n || (n = new vp(b,c,f,h));
          return Rk(a, b, n)
        }),
        t.content = K(a, 817, function() {
          null != p || (p = new wp(b,g));
          return Tk(a, b, p)
        }),
        t.setAdIframeTitle = K(a, 729, Xo),
        t.getEventLog = K(a, 945, function() {
          return new xp(a,b)
        }),
        t.sizeMapping = K(a, 90, function() {
          return new yp(a,b)
        }),
        t.enableServices = K(a, 91, function() {
          for (var w = _.x(zp), B = w.next(); !B.done; B = w.next())
            B = B.value,
            B.B && b.info(Ap()),
              Bp(B)
        }),
        t.destroySlots = K(a, 75, function(w) {
          return tp(b, w, e)
        }),
        t.enums = yl(),
        t.defineSlot = r,
        t.defineUnit = r,
        t.getWindowsThatCanCommunicateWithHostpageLibrary = K(a, 955, function(w) {
          return Cp(null != k ? k : _.mf(Dp), w).map(function(B) {
            var I;
            return null == (I = oj(B, document)) ? void 0 : I.contentWindow
          }).filter(function(B) {
            return !!B
          })
        }),
        t.disablePublisherConsole = K(a, 93, fl),
        t.onPubConsoleJsLoad = K(a, 731, il),
        t.openConsole = K(a, 732, function(w) {
          al = !0;
          var B;
          (null == (B = Uk()) ? 0 : B.console) ? (0,
            C.I)(Uk().console).openConsole(w) : (w && (hl = w),
            gl = !0,
            Xk(a))
        }),
        t.setConfig = K(a, 1034, function(w) {
          if (_.qa(w)) {
            var B = w.commerce
              , I = w.pps;
            if (null === B)
              uf(Ep(d, Fp, 33), 1);
            else if (void 0 !== B)
              if (w = Ep(d, Fp, 33),
                _.qa(B)) {
                var H = B.query
                  , R = B.categories
                  , U = B.productIds
                  , J = B.filter
                  , T = _.Fd(Io(w, Gp, 1), !1);
                null === H ? uf(T, 1) : Zo(H) ? _.z(T, 1, H) : void 0 !== H && Yo(b, B, "query", H);
                null === R ? _.z(T, 2, Wc) : $o(R) ? _.hd(T, 2, R, _.Hc) : void 0 !== R && Yo(b, B, "categories", R);
                null === U ? _.z(T, 3, Wc) : $o(U) ? _.hd(T, 3, U, _.Hc) : void 0 !== U && Yo(b, B, "productIds", U);
                null === J ? uf(T, 4) : Zo(J) ? _.z(T, 4, J) : void 0 !== J && Yo(b, B, "filter", J);
                _.cg(T, 1) || _.cn(T, 2).length ? _.Oh(w, 1, T) : kl(b, Hp())
              } else
                kl(b, Ok("googletag.setConfig.commerce", [B]));
            if (null === I)
              uf(Ep(d, Fp, 33), 2);
            else if (void 0 !== I && (B = Ep(Ep(d, Fp, 33), Ip, 2),
              "object" === typeof I && (0,
                C.I)(I).hasOwnProperty("taxonomies") ? w = !0 : (kl(b, Ok("googletag.setConfig.pps", [I])),
                w = !1),
              w))
              if (w = I.taxonomies,
              void 0 === w)
                bp("taxonomies", w, b, I);
              else if (null === w)
                _.Bd(B, 1);
              else if (cp(w, b, I))
                for (I = _.x(_.u(Object, "entries").call(Object, w)),
                       H = I.next(); !H.done; H = I.next()) {
                  H = _.x(H.value);
                  var ba = H.next().value;
                  H = H.next().value;
                  R = B;
                  U = b;
                  T = w;
                  if (void 0 === ba || null === ba)
                    bp("taxonomy", ba, U, T);
                  else {
                    J = Number(ba);
                    var ea = J
                      , da = U
                      , oa = T;
                    (_.D = _.u(Object, "values").call(Object, xl),
                      _.u(_.D, "includes")).call(_.D, Number(ea)) ? ba = !0 : (bp("taxonomy", ba, da, oa),
                      ba = !1);
                    ba && void 0 !== H && (null === H ? ep(J, R) : (ba = U,
                      "object" === typeof H && (0,
                        C.I)(H).hasOwnProperty("values") ? T = !0 : (bp("taxonomyData", H, ba, T),
                        T = !1),
                    T && lp(J, H, R, U)))
                  }
                }
          } else
            kl(b, Ok("googletag.setConfig", [w]))
        }),
        t.apiReady = !0,
        t);
      _.F(Jp) && zg(m, null, l, function(w, B) {
        Yh(a, w, B);
        var I, H;
        null == (H = (I = window.console).error) || H.call(I, B)
      });
      qp(m, r)
    }
    ;
    Rp = function(a) {
      var b = window
        , c = new ig
        , d = new Lp(a,b);
      G(c, d);
      var e = new Mp(a,b);
      G(c, e);
      _.F(Np) && G(c, new Op(a,b));
      if (_.F(Pp)) {
        a = new Qp(a);
        G(c, a);
        var f = a.C
      }
      tg(c);
      return {
        ib: d.C,
        zb: e.l,
        Mc: f
      }
    }
    ;
    Sp = function(a) {
      var b = function() {
        return a.Reflect.construct(a.HTMLElement, [], this.constructor)
      };
      b.prototype = a.HTMLElement.prototype;
      b.prototype.constructor = b;
      _.u(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
      return b
    }
    ;
    Up = function(a, b) {
      var c = _.Mf(Tp);
      Math.random() <= c && Xe(b, a)
    }
    ;
    $p = function(a, b, c) {
      var d = {};
      if (!c)
        return b.error(Vp("missing data-rendering attribute")),
          d;
      try {
        var e = Wp(Xp(c))
      } catch (k) {}
      var f;
      (null == (f = e) ? 0 : qo(f, Yp, 1)) ? (b = new Zp,
        b = _.id(b, 4, 1, 0),
        b = _.id(b, 2, 7, 0),
        a = _.ld(b, 3, a.qb || a.Ma),
        b = zf(e, Yp, 1),
        a = _.Oh(a, 5, b),
        a = _.id(a, 6, !0, !1),
        d.Eh = a) : b.error(Vp("invalid data-rendering attribute"));
      var g;
      d.vh = null == (g = e) ? void 0 : _.Vf(g, 2);
      var h;
      d.Qd = null == (h = e) ? void 0 : _.Vf(h, 3);
      return d
    }
    ;
    cq = function(a, b) {
      var c, d, e, f, g, h, k, l, m, n;
      return _.Ab(function(p) {
        c = el(b, "ai");
        if (!c || 0 === c.length)
          return p.return(_.v.Promise.resolve(b));
        d = aq();
        if (null == (e = d) ? 0 : e.gmaSdk) {
          if (f = d.gmaSdk.getClickSignalsWithTimeout ? d.gmaSdk.getClickSignalsWithTimeout(c, 200) : d.gmaSdk.getClickSignals(c))
            return p.return(_.v.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(f) + "&")))
        } else if (null == (g = d) ? 0 : null == (h = g.webkit) ? 0 : null == (k = h.messageHandlers) ? 0 : k.getGmaClickSignals)
          return l = new _.jh,
            m = l.resolve,
            n = l.promise,
            bq(d.webkit.messageHandlers.getGmaClickSignals, {
              click_string: c
            }, function(r) {
              m(b.replace("?", "?" + r + "&"))
            }, function() {
              m(b)
            }, function(r, t) {
              return Uh(a, r, t)
            }),
            p.return(n);
        return p.return(_.v.Promise.resolve(b))
      })
    }
    ;
    dq = function(a, b, c, d) {
      var e, f, g;
      return _.Ab(function(h) {
        e = b.getBoundingClientRect();
        f = {};
        var k = d.replace;
        var l = (f.nx = Math.floor(c.clientX - e.x),
          f.ny = Math.floor(c.clientY - e.y),
          f.dim = Math.floor(e.width) + "x" + Math.floor(e.height),
          f);
        var m = [];
        for (n in l)
          Dl(n, l[n], m);
        l = m.join("&");
        if (l) {
          m = -1;
          0 > m && (m = 0);
          var n = -1;
          if (0 > n || n > m) {
            n = m;
            var p = ""
          } else
            p = "".substring(n + 1, m);
          m = ["".slice(0, n), p, "".slice(m)];
          n = m[1];
          m[1] = l ? n ? n + "&" + l : l : n;
          l = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
        } else
          l = "";
        g = k.call(d, "?", l + "&");
        return h.return(cq(a, g))
      })
    }
    ;
    eq = function(a, b, c) {
      var d;
      if (null == c ? 0 : null == (d = c.gmaSdk) ? 0 : d.getViewSignals) {
        if (c = c.gmaSdk.getViewSignals())
          return c = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + c + "$2"),
            _.v.Promise.resolve(c)
      } else {
        var e, f;
        if (null == c ? 0 : null == (e = c.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals) {
          d = new _.jh;
          var g = d.resolve;
          d = d.promise;
          bq(c.webkit.messageHandlers.getGmaViewSignals, {}, function(h) {
            g(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + h + "$2"))
          }, function() {
            g(b)
          }, function(h, k) {
            return Uh(a, h, k)
          });
          return d
        }
      }
      return _.v.Promise.resolve(b)
    }
    ;
    jq = function(a, b) {
      var c = window;
      var d = void 0 === d ? Kb : d;
      var e;
      if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
        var f = aq(), g;
        null == (g = f ? new fq(function(k, l) {
            return Uh(a, k, l)
          }
          ,function() {}
        ) : void 0) || gq(g);
        var h = Sp(c);
        e = function() {
          return h.apply(this, arguments) || this
        }
        ;
        _.N(e, h);
        e.prototype.connectedCallback = function() {
          var k = $p(a, b, this.dataset.rendering)
            , l = k.Eh
            , m = k.vh;
          k = k.Qd;
          l && d(hq(window, l));
          m && eq(a, m, f).then(function(n) {
            return void To(n)
          });
          k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.Qd = k,
            this.addEventListener("click", this.j)) : kl(b, iq(k)))
        }
        ;
        e.prototype.j = function(k) {
          var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
          l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && dq(a, this, k, this.Qd).then(function(m) {
            return void To(m)
          })
        }
        ;
        c.customElements.define("google-product-ad", e)
      }
    }
    ;
    kq = function(a) {
      var b = {};
      a = _.x(a);
      for (var c = a.next(); !c.done; c = a.next())
        c = c.value,
          b[y(c, 1)] = y(c, 2);
      return b
    }
    ;
    nq = function(a, b, c) {
      return new lq(c,a,mq,function(d) {
          d = d.detail.data;
          try {
            var e = JSON.parse(d);
            if ("rewarded" === e.type && e.message === b)
              return e
          } catch (f) {}
          return null
        }
      )
    }
    ;
    pq = function(a, b, c, d, e, f, g) {
      var h = document
        , k = c.getAdUnitPath();
      c = oq.get(_.Re(c, 2, 0));
      if (k && c) {
        var l, m = null == (l = eo(a, g, f, {
          Wd: c,
          adUnitPath: k,
          pb: !0
        })) ? void 0 : l.j;
        m && (a = Yn(pj(), m.getSlotElementId()),
        d && (null == a || Zn(a, d)),
          b.cmd.push(function() {
            m.addService(b.pubads())
          }),
          $n(h, function() {
            b.display(m);
            E(e, 4) && b.pubads().refresh([m])
          }))
      }
    }
    ;
    qq = function(a) {
      .001 > _.Ue() && Xe({
        c: "sd",
        s: String(a)
      }, "gpt_whirs")
    }
    ;
    vq = function(a, b, c, d) {
      d = d.Mh;
      var e = b.kind;
      switch (e) {
        case 0:
          return new (d ? rq : sq)(a,b,c);
        case 1:
          return new tq(a,b,c);
        case 2:
          return new uq(a,b,c);
        default:
          ib(e)
      }
    }
    ;
    wq = function(a) {
      if (!_.qe(a))
        return -1;
      a = a.pageYOffset;
      return 0 > a ? -1 : a
    }
    ;
    Bq = function(a, b, c, d) {
      var e = fj(a, document);
      e && qh(e, window, d, !0);
      xq(_.mf(Wh), "5", (0,
        C.I)(ji(c.R[a.getDomId()], 20)));
      a.dispatchEvent(yq, 801, {
        Ue: null,
        isBackfill: !1
      });
      if (_.zq(b, a) && !oj(a, document)) {
        b = c.T;
        c = c.R[a.getDomId()];
        var f;
        (null != (f = vi(c, 10)) ? f : E(b, 11)) && pn(a, document, c, b)
      }
      a.dispatchEvent(Aq, 825, {
        isEmpty: !0
      })
    }
    ;
    Cq = function(a, b) {
      var c = _.Be("DIV");
      c.id = a;
      c.textContent = b;
      _.rj(c, {
        height: "24px",
        "line-height": "24px",
        "text-align": "center",
        "vertical-align": "middle",
        color: "white",
        "background-color": "black",
        margin: "0",
        "font-family": "Roboto",
        "font-style": "normal",
        "font-weight": "500",
        "font-size": "11px",
        "letter-spacing": "0.08em"
      });
      return c
    }
    ;
    Fq = function(a) {
      var b = {
        threshold: [0, .3, .5, .75, 1]
      };
      return _.F(Dq) ? window.IntersectionObserver && new IntersectionObserver(a,b) : window.IntersectionObserver ? new IntersectionObserver(a,b) : new Eq(a,b)
    }
    ;
    Hq = function(a) {
      return null != Vn(a, 1) ? null != Gq(a, 3) && 0 !== (0,
        _.Qm)() ? (0,
        C.ua)(Vn(a, 1)) * (0,
        C.ua)(Gq(a, 3)) : Vn(a, 1) : null
    }
    ;
    Iq = function(a, b) {
      return "undefined" === typeof IntersectionObserver ? _.F(Dq) ? void 0 : new Eq(b,{
        rootMargin: a + "%"
      }) : new IntersectionObserver(b,{
        rootMargin: a + "%"
      })
    }
    ;
    Br = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, t, w, B, I, H, R, U) {
      var J = new ig
        , T = pi(!0, window)
        , ba = k.T
        , ea = k.R[e.getDomId()]
        , da = new Jq(a,window);
      G(J, da);
      var oa = m.Kg
        , ua = m.Vh
        , Ea = m.yg
        , pa = m.af
        , va = m.Wf
        , ka = m.Pg
        , Ma = m.Nh
        , Ib = m.Dg
        , Db = m.vg
        , Wb = m.Sc
        , Ec = m.Oh
        , me = m.Og
        , Zb = m.Xg
        , $b = m.Jh
        , mc = m.Sh
        , ac = m.Th
        , ne = m.Lg
        , Rb = m.pg
        , bd = m.Ja
        , Dd = m.If
        , cd = m.Wh
        , oe = m.Cc;
      m = m.dg;
      if (.01 > Math.random()) {
        var bc;
        cd = new Kq(a,cd,null != (bc = null == R ? void 0 : R.Pa) ? bc : null == I ? void 0 : I.Pa,Ma,pa);
        G(J, cd)
      }
      bc = new Lq;
      O(bc, r);
      I = new Mq(a,window.top,bc);
      G(J, I);
      n = new Nq(a,console,n,I.C);
      G(J, n);
      n = new Oq(a,Jm(ea),T.height,Db,oa);
      G(J, n);
      oa = new Pq(a,e,fj(e, p),e.getDomId(),nj(e),p,Jm(ea),h,f);
      G(J, oa);
      bd = new Qq(a,bd,va,ka,Ma);
      G(J, bd);
      Ma = new Rq(a,ba,ea,va,Ma);
      G(J, Ma);
      mc = new Sq(a,zf(ba, Tq, 5),mc);
      G(J, mc);
      ua = new Uq(a,e.getAdUnitPath(),ea,T.width,f,Wb,ua,n.C,bd.C,oa.C);
      G(J, ua);
      Wb = new Vq(a,ea,Dd);
      G(J, Wb);
      f = new Wq(a,h,r,f,Dd,Wb.C,ua.Ja,ua.J,oa.C,t);
      G(J, f);
      if (g || _.F(Xq)) {
        var Ya = new Yq(a,e,k,h,pa,f.A);
        G(J, Ya);
        H = new Zq(a,H,f.A);
        G(J, H);
        Ya = new $q(a,Ya.l,H.C);
        G(J, Ya);
        Ya = Ya.C
      }
      H = new ar(a,e,ba,ea,Jm(ea),p,h,oa.C,Ma.C,f.l,Ea,Ya);
      G(J, H);
      g = new br(a,H.C);
      G(J, g);
      r = new cr(a,e,T,h,g.C,mc.l,Ya);
      G(J, r);
      g = new dr(a,window,oa.C);
      G(J, g);
      ac = new er(a,r.C,H.C,ac,mc.l,void 0,Ya);
      G(J, ac);
      T = new fr(a,p,e,ea,T,Ea,oa.C,H.C,f.l,ua.Sc,g.C,pa,Ya);
      G(J, T);
      Ec = new gr(a,ba,ea,f.Ja,Ma.C,Ec);
      G(J, Ec);
      Rb = new hr(a,window,Rb,da.C,Ya);
      G(J, Rb);
      g = new ir(a,Jm(ea),p);
      G(J, g);
      r = new jr(a,window);
      G(J, r);
      B = new kr(a,B,Jm(ea),Db,Ib,Ya);
      G(J, B);
      Zb = new lr(a,Zb,Ya);
      G(J, Zb);
      if (_.F(Zj)) {
        if (U)
          var Ed = U.ib;
        else
          R && !_.F(mr) && (Ed = R.ib);
        Ed && (R = new nr(a,window,Ed,m),
          G(J, R))
      }
      l = new or(a,e,h,k,w,l,window,f.Ja,Ma.C,ac.C,oa.C,H.C,f.l,pa,Ea,Ec.C,ka,me,$b,T.C,Rb.C,g.C,B.C,Dd,r.C,Ya);
      G(J, l);
      ka = new pr(a,window,e,l.A,bc);
      G(J, ka);
      Db = new qr(a,h,Jm(ea),e,window,Db,l.l,oa.C,B.C);
      G(J, Db);
      k = new rr(a,e,Jm(ea),(0,
        C.I)(k.Xb),Ib,l.l,oa.C,I.C,B.C,pa);
      G(J, k);
      ea = new sr(a,e,Jm(ea),w,window,l.l,oa.C);
      G(J, ea);
      p = new tr(a,e,l.l,p,w);
      G(J, p);
      h = new ur(a,vr(h, e),window.top,l.l,da.C);
      G(J, h);
      e = new wr(a,e,Ea,va,$b,l.l,H.C,l.D);
      G(J, e);
      ne = new xr(a,window,ne,l.l,H.C,oa.C);
      G(J, ne);
      _.F(yr) ? G(J, new zr(a,Uk(),ba,b,(0,
        C.I)(c),d,[oe])) : G(J, new Ar(a,Uk(),ba,b,d,oe));
      return J
    }
    ;
    Er = function() {
      if ($a()) {
        var a = bb();
        var b = 0;
        a = Cr(String(a)).split(".");
        for (var c = Cr("11").split("."), d = Math.max(a.length, c.length), e = 0; 0 == b && e < d; e++) {
          var f = a[e] || ""
            , g = c[e] || "";
          do {
            f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            if (0 == f[0].length && 0 == g[0].length)
              break;
            b = Dr(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Dr(0 == f[2].length, 0 == g[2].length) || Dr(f[2], g[2]);
            f = f[3];
            g = g[3]
          } while (0 == b)
        }
        b = 0 <= b
      } else
        b = 65 <= db();
      return b
    }
    ;
    Fr = function(a, b) {
      return _.F(Dq) ? window.IntersectionObserver && new IntersectionObserver(a,{
        rootMargin: b
      }) : window.IntersectionObserver ? new IntersectionObserver(a,{
        rootMargin: b
      }) : new Eq(a,{
        rootMargin: b
      })
    }
    ;
    Gr = function(a) {
      function b(f) {
        var g = f;
        return function() {
          var h = _.wb.apply(0, arguments);
          if (g) {
            var k = g;
            g = null;
            k.apply(null, _.xe(h))
          }
        }
      }
      var c = null
        , d = 0
        , e = 0;
      return function() {
        var f, g, h, k;
        return _.Ab(function(l) {
          if (1 == l.j)
            return d && clearTimeout(d),
              d = 0,
              f = new _.jh,
              g = b(f.resolve),
              h = ++e,
              Bb(l, 0, 2);
          if (e !== h)
            return g(!1),
              l.return(f.promise);
          c ? c(!1) : g(!0);
          k = b(function() {
            c = null;
            d = 0;
            g(!0)
          });
          d = setTimeout(k, 1E3);
          _.fo(a, function() {
            return void g(!1)
          });
          c = g;
          return l.return(f.promise)
        })
      }
    }
    ;
    Or = function() {
      var a = new Hr;
      var b = (new Ir).setCorrelator(rf(_.q));
      var c = _.mf(nf).j().join();
      b = _.ld(b, 5, c);
      b = _.id(b, 2, 1, 0);
      a = _.Oh(a, 1, b);
      b = new Jr;
      c = _.F(Kr);
      b = _.id(b, 7, c, !1);
      c = _.F(Lr);
      b = _.id(b, 8, c, !1);
      c = _.F(Mr);
      b = _.id(b, 9, c, !1);
      b = _.id(b, 10, !0, !1);
      c = _.F(Nr);
      b = _.id(b, 13, c, !1);
      b = _.id(b, 16, !0, !1);
      a = _.Oh(a, 2, b);
      window.google_rum_config = a.toJSON()
    }
    ;
    Qr = function() {
      var a = Pr
        , b = Number(a);
      return 1 > b || Math.floor(b) !== b ? (Xe({
        v: a
      }, "gpt_inv_ver"),
        "1") : a
    }
    ;
    Sr = function(a) {
      var b = Rr() || (0,
        _.Te)() ? 1 : _.Ue()
        , c = .001 > b;
      c ? (a.l = !0,
        of(31067358)) : .002 > b && of(31067357);
      pf(23);
      return {
        Hc: c,
        Zg: 1E3,
        Ch: 1E-4 > b,
        Yg: 1E4,
        Gf: c,
        Ye: 1E3
      }
    }
    ;
    Vr = function(a) {
      var b = Qr();
      var c = /m\d+/.test("") ? Number("".substring(1)) : void 0;
      var d = rf(window)
        , e = window.document.URL
        , f = _.Mf(Tr);
      return _.u(Object, "assign").call(Object, {}, a, {
        Ma: b,
        qb: "",
        Cb: c,
        pvsid: d,
        Gb: new _.Ur(f),
        lg: e
      })
    }
    ;
    _.ca = [];
    Wr = function(a) {
      var b = 0;
      return function() {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        }
      }
    }
    ;
    Xr = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
      if (a == Array.prototype || a == Object.prototype)
        return a;
      a[b] = c.value;
      return a
    }
    ;
    Yr = function(a) {
      a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math)
          return c
      }
      throw Error("Cannot find global object");
    }
    ;
    _.Zr = Yr(this);
    $r = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    _.v = {};
    as = {};
    _.u = function(a, b, c) {
      if (!c || null != a) {
        c = as[b];
        if (null == c)
          return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
      }
    }
    ;
    bs = function(a, b, c) {
      if (b)
        a: {
          var d = a.split(".");
          a = 1 === d.length;
          var e = d[0], f;
          !a && e in _.v ? f = _.v : f = _.Zr;
          for (e = 0; e < d.length - 1; e++) {
            var g = d[e];
            if (!(g in f))
              break a;
            f = f[g]
          }
          d = d[d.length - 1];
          c = $r && "es6" === c ? f[d] : null;
          b = b(c);
          null != b && (a ? Xr(_.v, d, {
            configurable: !0,
            writable: !0,
            value: b
          }) : b !== c && (void 0 === as[d] && (a = 1E9 * Math.random() >>> 0,
            as[d] = $r ? _.Zr.Symbol(d) : "$jscp$" + a + "$" + d),
            Xr(f, as[d], {
              configurable: !0,
              writable: !0,
              value: b
            })))
        }
    }
    ;
    bs("Symbol", function(a) {
      if (a)
        return a;
      var b = function(f, g) {
        this.j = f;
        Xr(this, "description", {
          configurable: !0,
          writable: !0,
          value: g
        })
      };
      b.prototype.toString = function() {
        return this.j
      }
      ;
      var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
        , d = 0
        , e = function(f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++,f)
      };
      return e
    }, "es6");
    bs("Symbol.iterator", function(a) {
      if (a)
        return a;
      a = (0,
        _.v.Symbol)("Symbol.iterator");
      for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
        var d = _.Zr[b[c]];
        "function" === typeof d && "function" != typeof d.prototype[a] && Xr(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function() {
            return cs(Wr(this))
          }
        })
      }
      return a
    }, "es6");
    cs = function(a) {
      a = {
        next: a
      };
      a[_.u(_.v.Symbol, "iterator")] = function() {
        return this
      }
      ;
      return a
    }
    ;
    _.P = function(a) {
      return a.raw = a
    }
    ;
    ds = function(a, b) {
      a.raw = b;
      return a
    }
    ;
    _.x = function(a) {
      var b = "undefined" != typeof _.v.Symbol && _.u(_.v.Symbol, "iterator") && a[_.u(_.v.Symbol, "iterator")];
      if (b)
        return b.call(a);
      if ("number" == typeof a.length)
        return {
          next: Wr(a)
        };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    ;
    _.xe = function(a) {
      if (!(a instanceof Array)) {
        a = _.x(a);
        for (var b, c = []; !(b = a.next()).done; )
          c.push(b.value);
        a = c
      }
      return a
    }
    ;
    es = function(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;
    fs = $r && "function" == typeof _.u(Object, "assign") ? _.u(Object, "assign") : function(a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d)
          for (var e in d)
            es(d, e) && (a[e] = d[e])
      }
      return a
    }
    ;
    bs("Object.assign", function(a) {
      return a || fs
    }, "es6");
    var gs = "function" == typeof Object.create ? Object.create : function(a) {
      var b = function() {};
      b.prototype = a;
      return new b
    }
      , hs = function() {
      function a() {
        function c() {}
        new c;
        _.u(_.v.Reflect, "construct").call(_.v.Reflect, c, [], function() {});
        return new c instanceof c
      }
      if ($r && "undefined" != typeof _.v.Reflect && _.u(_.v.Reflect, "construct")) {
        if (a())
          return _.u(_.v.Reflect, "construct");
        var b = _.u(_.v.Reflect, "construct");
        return function(c, d, e) {
          c = b(c, d);
          e && _.u(_.v.Reflect, "setPrototypeOf").call(_.v.Reflect, c, e.prototype);
          return c
        }
      }
      return function(c, d, e) {
        void 0 === e && (e = c);
        e = gs(e.prototype || Object.prototype);
        return Function.prototype.apply.call(c, e, d) || e
      }
    }(), is;
    if ($r && "function" == typeof _.u(Object, "setPrototypeOf"))
      is = _.u(Object, "setPrototypeOf");
    else {
      var js;
      a: {
        var ks = {
          a: !0
        }
          , ls = {};
        try {
          ls.__proto__ = ks;
          js = ls.a;
          break a
        } catch (a) {}
        js = !1
      }
      is = js ? function(a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b)
            throw new TypeError(a + " is not extensible");
          return a
        }
        : null
    }
    ms = is;
    _.N = function(a, b) {
      a.prototype = gs(b.prototype);
      a.prototype.constructor = a;
      if (ms)
        ms(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d)
            } else
              a[c] = b[c];
      a.Fh = b.prototype
    }
    ;
    ns = function() {
      this.l = !1;
      this.G = null;
      this.o = void 0;
      this.j = 1;
      this.A = this.m = 0;
      this.B = null
    }
    ;
    os = function(a) {
      if (a.l)
        throw new TypeError("Generator is already running");
      a.l = !0
    }
    ;
    ns.prototype.H = function(a) {
      this.o = a
    }
    ;
    var ps = function(a, b) {
      a.B = {
        bf: b,
        Rg: !0
      };
      a.j = a.m || a.A
    };
    ns.prototype.return = function(a) {
      this.B = {
        return: a
      };
      this.j = this.A
    }
    ;
    Bb = function(a, b, c) {
      a.j = c;
      return {
        value: b
      }
    }
    ;
    Eb = function(a, b) {
      a.j = b;
      a.m = 0
    }
    ;
    Fb = function(a) {
      a.m = 0;
      var b = a.B.bf;
      a.B = null;
      return b
    }
    ;
    qs = function(a) {
      this.j = new ns;
      this.o = a
    }
    ;
    ts = function(a, b) {
      os(a.j);
      var c = a.j.G;
      if (c)
        return rs(a, "return"in c ? c["return"] : function(d) {
            return {
              value: d,
              done: !0
            }
          }
          , b, a.j.return);
      a.j.return(b);
      return ss(a)
    }
    ;
    rs = function(a, b, c, d) {
      try {
        var e = b.call(a.j.G, c);
        if (!(e instanceof Object))
          throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done)
          return a.j.l = !1,
            e;
        var f = e.value
      } catch (g) {
        return a.j.G = null,
          ps(a.j, g),
          ss(a)
      }
      a.j.G = null;
      d.call(a.j, f);
      return ss(a)
    }
    ;
    ss = function(a) {
      for (; a.j.j; )
        try {
          var b = a.o(a.j);
          if (b)
            return a.j.l = !1,
              {
                value: b.value,
                done: !1
              }
        } catch (c) {
          a.j.o = void 0,
            ps(a.j, c)
        }
      a.j.l = !1;
      if (a.j.B) {
        b = a.j.B;
        a.j.B = null;
        if (b.Rg)
          throw b.bf;
        return {
          value: b.return,
          done: !0
        }
      }
      return {
        value: void 0,
        done: !0
      }
    }
    ;
    us = function(a) {
      this.next = function(b) {
        os(a.j);
        a.j.G ? b = rs(a, a.j.G.next, b, a.j.H) : (a.j.H(b),
          b = ss(a));
        return b
      }
      ;
      this.throw = function(b) {
        os(a.j);
        a.j.G ? b = rs(a, a.j.G["throw"], b, a.j.H) : (ps(a.j, b),
          b = ss(a));
        return b
      }
      ;
      this.return = function(b) {
        return ts(a, b)
      }
      ;
      this[_.u(_.v.Symbol, "iterator")] = function() {
        return this
      }
    }
    ;
    vs = function(a) {
      function b(d) {
        return a.next(d)
      }
      function c(d) {
        return a.throw(d)
      }
      return new _.v.Promise(function(d, e) {
          function f(g) {
            g.done ? d(g.value) : _.v.Promise.resolve(g.value).then(b, c).then(f, e)
          }
          f(a.next())
        }
      )
    }
    ;
    _.Ab = function(a) {
      return vs(new us(new qs(a)))
    }
    ;
    _.wb = function() {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b
    }
    ;
    bs("Reflect", function(a) {
      return a ? a : {}
    }, "es6");
    bs("Reflect.construct", function() {
      return hs
    }, "es6");
    bs("Reflect.setPrototypeOf", function(a) {
      return a ? a : ms ? function(b, c) {
          try {
            return ms(b, c),
              !0
          } catch (d) {
            return !1
          }
        }
        : null
    }, "es6");
    bs("Promise", function(a) {
      function b() {
        this.j = null
      }
      function c(g) {
        return g instanceof e ? g : new e(function(h) {
            h(g)
          }
        )
      }
      if (a)
        return a;
      b.prototype.o = function(g) {
        if (null == this.j) {
          this.j = [];
          var h = this;
          this.m(function() {
            h.B()
          })
        }
        this.j.push(g)
      }
      ;
      var d = _.Zr.setTimeout;
      b.prototype.m = function(g) {
        d(g, 0)
      }
      ;
      b.prototype.B = function() {
        for (; this.j && this.j.length; ) {
          var g = this.j;
          this.j = [];
          for (var h = 0; h < g.length; ++h) {
            var k = g[h];
            g[h] = null;
            try {
              k()
            } catch (l) {
              this.G(l)
            }
          }
        }
        this.j = null
      }
      ;
      b.prototype.G = function(g) {
        this.m(function() {
          throw g;
        })
      }
      ;
      var e = function(g) {
        this.o = 0;
        this.m = void 0;
        this.j = [];
        this.H = !1;
        var h = this.G();
        try {
          g(h.resolve, h.reject)
        } catch (k) {
          h.reject(k)
        }
      };
      e.prototype.G = function() {
        function g(l) {
          return function(m) {
            k || (k = !0,
              l.call(h, m))
          }
        }
        var h = this
          , k = !1;
        return {
          resolve: g(this.F),
          reject: g(this.B)
        }
      }
      ;
      e.prototype.F = function(g) {
        if (g === this)
          this.B(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof e)
          this.P(g);
        else {
          a: switch (typeof g) {
            case "object":
              var h = null != g;
              break a;
            case "function":
              h = !0;
              break a;
            default:
              h = !1
          }
          h ? this.D(g) : this.l(g)
        }
      }
      ;
      e.prototype.D = function(g) {
        var h = void 0;
        try {
          h = g.then
        } catch (k) {
          this.B(k);
          return
        }
        "function" == typeof h ? this.M(h, g) : this.l(g)
      }
      ;
      e.prototype.B = function(g) {
        this.A(2, g)
      }
      ;
      e.prototype.l = function(g) {
        this.A(1, g)
      }
      ;
      e.prototype.A = function(g, h) {
        if (0 != this.o)
          throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.o);
        this.o = g;
        this.m = h;
        2 === this.o && this.J();
        this.L()
      }
      ;
      e.prototype.J = function() {
        var g = this;
        d(function() {
          if (g.ga()) {
            var h = _.Zr.console;
            "undefined" !== typeof h && h.error(g.m)
          }
        }, 1)
      }
      ;
      e.prototype.ga = function() {
        if (this.H)
          return !1;
        var g = _.Zr.CustomEvent
          , h = _.Zr.Event
          , k = _.Zr.dispatchEvent;
        if ("undefined" === typeof k)
          return !0;
        "function" === typeof g ? g = new g("unhandledrejection",{
          cancelable: !0
        }) : "function" === typeof h ? g = new h("unhandledrejection",{
          cancelable: !0
        }) : (g = _.Zr.document.createEvent("CustomEvent"),
          g.initCustomEvent("unhandledrejection", !1, !0, g));
        g.promise = this;
        g.reason = this.m;
        return k(g)
      }
      ;
      e.prototype.L = function() {
        if (null != this.j) {
          for (var g = 0; g < this.j.length; ++g)
            f.o(this.j[g]);
          this.j = null
        }
      }
      ;
      var f = new b;
      e.prototype.P = function(g) {
        var h = this.G();
        g.Vc(h.resolve, h.reject)
      }
      ;
      e.prototype.M = function(g, h) {
        var k = this.G();
        try {
          g.call(h, k.resolve, k.reject)
        } catch (l) {
          k.reject(l)
        }
      }
      ;
      e.prototype.then = function(g, h) {
        function k(p, r) {
          return "function" == typeof p ? function(t) {
              try {
                l(p(t))
              } catch (w) {
                m(w)
              }
            }
            : r
        }
        var l, m, n = new e(function(p, r) {
            l = p;
            m = r
          }
        );
        this.Vc(k(g, l), k(h, m));
        return n
      }
      ;
      e.prototype.catch = function(g) {
        return this.then(void 0, g)
      }
      ;
      e.prototype.Vc = function(g, h) {
        function k() {
          switch (l.o) {
            case 1:
              g(l.m);
              break;
            case 2:
              h(l.m);
              break;
            default:
              throw Error("Unexpected state: " + l.o);
          }
        }
        var l = this;
        null == this.j ? f.o(k) : this.j.push(k);
        this.H = !0
      }
      ;
      e.resolve = c;
      e.reject = function(g) {
        return new e(function(h, k) {
            k(g)
          }
        )
      }
      ;
      e.race = function(g) {
        return new e(function(h, k) {
            for (var l = _.x(g), m = l.next(); !m.done; m = l.next())
              c(m.value).Vc(h, k)
          }
        )
      }
      ;
      e.all = function(g) {
        var h = _.x(g)
          , k = h.next();
        return k.done ? c([]) : new e(function(l, m) {
            function n(t) {
              return function(w) {
                p[t] = w;
                r--;
                0 == r && l(p)
              }
            }
            var p = []
              , r = 0;
            do
              p.push(void 0),
                r++,
                c(k.value).Vc(n(p.length - 1), m),
                k = h.next();
            while (!k.done)
          }
        )
      }
      ;
      return e
    }, "es6");
    bs("Object.setPrototypeOf", function(a) {
      return a || ms
    }, "es6");
    bs("WeakMap", function(a) {
      function b() {}
      function c(g) {
        var h = typeof g;
        return "object" === h && null !== g || "function" === h
      }
      if (function() {
        if (!a || !Object.seal)
          return !1;
        try {
          var g = Object.seal({})
            , h = Object.seal({})
            , k = new a([[g, 2], [h, 3]]);
          if (2 != k.get(g) || 3 != k.get(h))
            return !1;
          k.delete(g);
          k.set(h, 4);
          return !k.has(g) && 4 == k.get(h)
        } catch (l) {
          return !1
        }
      }())
        return a;
      var d = "$jscomp_hidden_" + Math.random()
        , e = 0
        , f = function(g) {
        this.j = (e += Math.random() + 1).toString();
        if (g) {
          g = _.x(g);
          for (var h; !(h = g.next()).done; )
            h = h.value,
              this.set(h[0], h[1])
        }
      };
      f.prototype.set = function(g, h) {
        if (!c(g))
          throw Error("Invalid WeakMap key");
        if (!es(g, d)) {
          var k = new b;
          Xr(g, d, {
            value: k
          })
        }
        if (!es(g, d))
          throw Error("WeakMap key fail: " + g);
        g[d][this.j] = h;
        return this
      }
      ;
      f.prototype.get = function(g) {
        return c(g) && es(g, d) ? g[d][this.j] : void 0
      }
      ;
      f.prototype.has = function(g) {
        return c(g) && es(g, d) && es(g[d], this.j)
      }
      ;
      f.prototype.delete = function(g) {
        return c(g) && es(g, d) && es(g[d], this.j) ? delete g[d][this.j] : !1
      }
      ;
      return f
    }, "es6");
    bs("Map", function(a) {
      if (function() {
        if (!a || "function" != typeof a || !_.u(a.prototype, "entries") || "function" != typeof Object.seal)
          return !1;
        try {
          var h = Object.seal({
            x: 4
          })
            , k = new a(_.x([[h, "s"]]));
          if ("s" != k.get(h) || 1 != k.size || k.get({
            x: 4
          }) || k.set({
            x: 4
          }, "t") != k || 2 != k.size)
            return !1;
          var l = _.u(k, "entries").call(k)
            , m = l.next();
          if (m.done || m.value[0] != h || "s" != m.value[1])
            return !1;
          m = l.next();
          return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
        } catch (n) {
          return !1
        }
      }())
        return a;
      var b = new _.v.WeakMap
        , c = function(h) {
        this.o = {};
        this.j = f();
        this.size = 0;
        if (h) {
          h = _.x(h);
          for (var k; !(k = h.next()).done; )
            k = k.value,
              this.set(k[0], k[1])
        }
      };
      c.prototype.set = function(h, k) {
        h = 0 === h ? 0 : h;
        var l = d(this, h);
        l.list || (l.list = this.o[l.id] = []);
        l.ra ? l.ra.value = k : (l.ra = {
          next: this.j,
          gb: this.j.gb,
          head: this.j,
          key: h,
          value: k
        },
          l.list.push(l.ra),
          this.j.gb.next = l.ra,
          this.j.gb = l.ra,
          this.size++);
        return this
      }
      ;
      c.prototype.delete = function(h) {
        h = d(this, h);
        return h.ra && h.list ? (h.list.splice(h.index, 1),
        h.list.length || delete this.o[h.id],
          h.ra.gb.next = h.ra.next,
          h.ra.next.gb = h.ra.gb,
          h.ra.head = null,
          this.size--,
          !0) : !1
      }
      ;
      c.prototype.clear = function() {
        this.o = {};
        this.j = this.j.gb = f();
        this.size = 0
      }
      ;
      c.prototype.has = function(h) {
        return !!d(this, h).ra
      }
      ;
      c.prototype.get = function(h) {
        return (h = d(this, h).ra) && h.value
      }
      ;
      c.prototype.entries = function() {
        return e(this, function(h) {
          return [h.key, h.value]
        })
      }
      ;
      c.prototype.keys = function() {
        return e(this, function(h) {
          return h.key
        })
      }
      ;
      c.prototype.values = function() {
        return e(this, function(h) {
          return h.value
        })
      }
      ;
      c.prototype.forEach = function(h, k) {
        for (var l = _.u(this, "entries").call(this), m; !(m = l.next()).done; )
          m = m.value,
            h.call(k, m[1], m[0], this)
      }
      ;
      c.prototype[_.u(_.v.Symbol, "iterator")] = _.u(c.prototype, "entries");
      var d = function(h, k) {
        var l = k && typeof k;
        "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g,
          b.set(k, l)) : l = "p_" + k;
        var m = h.o[l];
        if (m && es(h.o, l))
          for (h = 0; h < m.length; h++) {
            var n = m[h];
            if (k !== k && n.key !== n.key || k === n.key)
              return {
                id: l,
                list: m,
                index: h,
                ra: n
              }
          }
        return {
          id: l,
          list: m,
          index: -1,
          ra: void 0
        }
      }
        , e = function(h, k) {
        var l = h.j;
        return cs(function() {
          if (l) {
            for (; l.head != h.j; )
              l = l.gb;
            for (; l.next != l.head; )
              return l = l.next,
                {
                  done: !1,
                  value: k(l)
                };
            l = null
          }
          return {
            done: !0,
            value: void 0
          }
        })
      }
        , f = function() {
        var h = {};
        return h.gb = h.next = h.head = h
      }
        , g = 0;
      return c
    }, "es6");
    var ws = function(a, b) {
      a instanceof String && (a += "");
      var c = 0
        , d = !1
        , e = {
        next: function() {
          if (!d && c < a.length) {
            var f = c++;
            return {
              value: b(f, a[f]),
              done: !1
            }
          }
          d = !0;
          return {
            done: !0,
            value: void 0
          }
        }
      };
      e[_.u(_.v.Symbol, "iterator")] = function() {
        return e
      }
      ;
      return e
    };
    bs("Array.prototype.entries", function(a) {
      return a ? a : function() {
        return ws(this, function(b, c) {
          return [b, c]
        })
      }
    }, "es6");
    bs("Array.prototype.keys", function(a) {
      return a ? a : function() {
        return ws(this, function(b) {
          return b
        })
      }
    }, "es6");
    var xs = function(a, b, c) {
      if (null == a)
        throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
      if (b instanceof RegExp)
        throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
      return a + ""
    };
    bs("String.prototype.endsWith", function(a) {
      return a ? a : function(b, c) {
        var d = xs(this, b, "endsWith");
        void 0 === c && (c = d.length);
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var e = b.length; 0 < e && 0 < c; )
          if (d[--c] != b[--e])
            return !1;
        return 0 >= e
      }
    }, "es6");
    var ys = function(a, b, c) {
      a instanceof String && (a = String(a));
      for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e];
        if (b.call(c, f, e, a))
          return {
            i: e,
            Kf: f
          }
      }
      return {
        i: -1,
        Kf: void 0
      }
    };
    bs("Array.prototype.find", function(a) {
      return a ? a : function(b, c) {
        return ys(this, b, c).Kf
      }
    }, "es6");
    bs("Number.MAX_SAFE_INTEGER", function() {
      return 9007199254740991
    }, "es6");
    bs("Number.isFinite", function(a) {
      return a ? a : function(b) {
        return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
      }
    }, "es6");
    bs("Array.from", function(a) {
      return a ? a : function(b, c, d) {
        c = null != c ? c : function(h) {
          return h
        }
        ;
        var e = []
          , f = "undefined" != typeof _.v.Symbol && _.u(_.v.Symbol, "iterator") && b[_.u(_.v.Symbol, "iterator")];
        if ("function" == typeof f) {
          b = f.call(b);
          for (var g = 0; !(f = b.next()).done; )
            e.push(c.call(d, f.value, g++))
        } else
          for (f = b.length,
                 g = 0; g < f; g++)
            e.push(c.call(d, b[g], g));
        return e
      }
    }, "es6");
    bs("Number.isInteger", function(a) {
      return a ? a : function(b) {
        return _.u(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
      }
    }, "es6");
    bs("Array.prototype.values", function(a) {
      return a ? a : function() {
        return ws(this, function(b, c) {
          return c
        })
      }
    }, "es8");
    bs("Set", function(a) {
      if (function() {
        if (!a || "function" != typeof a || !_.u(a.prototype, "entries") || "function" != typeof Object.seal)
          return !1;
        try {
          var c = Object.seal({
            x: 4
          })
            , d = new a(_.x([c]));
          if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
            x: 4
          }) != d || 2 != d.size)
            return !1;
          var e = _.u(d, "entries").call(d)
            , f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c)
            return !1;
          f = e.next();
          return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
        } catch (g) {
          return !1
        }
      }())
        return a;
      var b = function(c) {
        this.j = new _.v.Map;
        if (c) {
          c = _.x(c);
          for (var d; !(d = c.next()).done; )
            this.add(d.value)
        }
        this.size = this.j.size
      };
      b.prototype.add = function(c) {
        c = 0 === c ? 0 : c;
        this.j.set(c, c);
        this.size = this.j.size;
        return this
      }
      ;
      b.prototype.delete = function(c) {
        c = this.j.delete(c);
        this.size = this.j.size;
        return c
      }
      ;
      b.prototype.clear = function() {
        this.j.clear();
        this.size = 0
      }
      ;
      b.prototype.has = function(c) {
        return this.j.has(c)
      }
      ;
      b.prototype.entries = function() {
        return _.u(this.j, "entries").call(this.j)
      }
      ;
      b.prototype.values = function() {
        return _.u(this.j, "values").call(this.j)
      }
      ;
      b.prototype.keys = _.u(b.prototype, "values");
      b.prototype[_.u(_.v.Symbol, "iterator")] = _.u(b.prototype, "values");
      b.prototype.forEach = function(c, d) {
        var e = this;
        this.j.forEach(function(f) {
          return c.call(d, f, f, e)
        })
      }
      ;
      return b
    }, "es6");
    bs("Object.entries", function(a) {
      return a ? a : function(b) {
        var c = [], d;
        for (d in b)
          es(b, d) && c.push([d, b[d]]);
        return c
      }
    }, "es8");
    bs("String.prototype.startsWith", function(a) {
      return a ? a : function(b, c) {
        var d = xs(this, b, "startsWith")
          , e = d.length
          , f = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var g = 0; g < f && c < e; )
          if (d[c++] != b[g++])
            return !1;
        return g >= f
      }
    }, "es6");
    bs("globalThis", function(a) {
      return a || _.Zr
    }, "es_2020");
    bs("Array.prototype.flatMap", function(a) {
      return a ? a : function(b, c) {
        var d = [];
        Array.prototype.forEach.call(this, function(e, f) {
          e = b.call(c, e, f, this);
          Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
        });
        return d
      }
    }, "es9");
    bs("Object.is", function(a) {
      return a ? a : function(b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
      }
    }, "es6");
    bs("Array.prototype.includes", function(a) {
      return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
          var f = d[c];
          if (f === b || _.u(Object, "is").call(Object, f, b))
            return !0
        }
        return !1
      }
    }, "es7");
    bs("String.prototype.includes", function(a) {
      return a ? a : function(b, c) {
        return -1 !== xs(this, b, "includes").indexOf(b, c || 0)
      }
    }, "es6");
    bs("AggregateError", function(a) {
      if (a)
        return a;
      a = function(b, c) {
        c = Error(c);
        "stack"in c && (this.stack = c.stack);
        this.errors = b;
        this.message = c.message
      }
      ;
      _.N(a, Error);
      a.prototype.name = "AggregateError";
      return a
    }, "es_2021");
    bs("Promise.any", function(a) {
      return a ? a : function(b) {
        b = b instanceof Array ? b : _.u(Array, "from").call(Array, b);
        return _.v.Promise.all(b.map(function(c) {
          return _.v.Promise.resolve(c).then(function(d) {
            throw d;
          }, function(d) {
            return d
          })
        })).then(function(c) {
          throw new _.v.AggregateError(c,"All promises were rejected");
        }, function(c) {
          return c
        })
      }
    }, "es_2021");
    bs("Object.values", function(a) {
      return a ? a : function(b) {
        var c = [], d;
        for (d in b)
          es(b, d) && c.push(b[d]);
        return c
      }
    }, "es8");
    bs("Object.fromEntries", function(a) {
      return a ? a : function(b) {
        var c = {};
        if (!(_.u(_.v.Symbol, "iterator")in b))
          throw new TypeError("" + b + " is not iterable");
        b = b[_.u(_.v.Symbol, "iterator")].call(b);
        for (var d = b.next(); !d.done; d = b.next()) {
          d = d.value;
          if (Object(d) !== d)
            throw new TypeError("iterable for fromEntries should yield objects");
          c[d[0]] = d[1]
        }
        return c
      }
    }, "es_2019");
    bs("Array.prototype.findIndex", function(a) {
      return a ? a : function(b, c) {
        return ys(this, b, c).i
      }
    }, "es6");
    bs("Array.prototype.flat", function(a) {
      return a ? a : function(b) {
        b = void 0 === b ? 1 : b;
        var c = [];
        Array.prototype.forEach.call(this, function(d) {
          Array.isArray(d) && 0 < b ? (d = _.u(Array.prototype, "flat").call(d, b - 1),
            c.push.apply(c, d)) : c.push(d)
        });
        return c
      }
    }, "es9");
    bs("Promise.prototype.finally", function(a) {
      return a ? a : function(b) {
        return this.then(function(c) {
          return _.v.Promise.resolve(b()).then(function() {
            return c
          })
        }, function(c) {
          return _.v.Promise.resolve(b()).then(function() {
            throw c;
          })
        })
      }
    }, "es9");
    bs("String.raw", function(a) {
      return a ? a : function(b, c) {
        if (null == b)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var d = b.raw, e = d.length, f = "", g = 0; g < e; ++g)
          f += d[g],
          g + 1 < e && g + 1 < arguments.length && (f += String(arguments[g + 1]));
        return f
      }
    }, "es6");
    _.q = this || self;
    Aa = function(a) {
      var b = typeof a;
      b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
      return "array" == b || "object" == b && "number" == typeof a.length
    }
    ;
    _.qa = function(a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    }
    ;
    ra = "closure_uid_" + (1E9 * Math.random() >>> 0);
    sa = 0;
    zs = function(a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    ;
    As = function(a, b, c) {
      if (!a)
        throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e)
        }
      }
      return function() {
        return a.apply(b, arguments)
      }
    }
    ;
    _.Bs = function(a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.Bs = zs : _.Bs = As;
      return _.Bs.apply(null, arguments)
    }
    ;
    _.Cs = function(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function() {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
      }
    }
    ;
    ff = function() {
      return Date.now()
    }
    ;
    var Ds;
    var Is, Fs, Es;
    _.Gs = function(a, b) {
      this.j = a === Es && b || "";
      this.o = Fs
    }
    ;
    _.Gs.prototype.Na = !0;
    _.Gs.prototype.Da = function() {
      return this.j
    }
    ;
    _.Hs = function(a) {
      return a instanceof _.Gs && a.constructor === _.Gs && a.o === Fs ? a.j : "type_error:Const"
    }
    ;
    Is = function(a) {
      return new _.Gs(Es,a)
    }
    ;
    Fs = {};
    Es = {};
    var Jb = Is("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var Js, Ks, gj, Ms;
    Js = function() {
      return !0
    }
    ;
    Ks = function(a) {
      return function() {
        return !a.apply(this, arguments)
      }
    }
    ;
    gj = function(a) {
      var b = !1, c;
      return function() {
        b || (c = a(),
          b = !0);
        return c
      }
    }
    ;
    _.Ls = function(a) {
      var b = a;
      return function() {
        if (b) {
          var c = b;
          b = null;
          c()
        }
      }
    }
    ;
    Ms = function(a, b, c) {
      var d = 0
        , e = !1
        , f = []
        , g = function() {
        d = 0;
        e && (e = !1,
          h())
      }
        , h = function() {
        d = _.q.setTimeout(g, b);
        var k = f;
        f = [];
        a.apply(c, k)
      };
      return function(k) {
        f = arguments;
        d ? e = !0 : h()
      }
    }
    ;
    var Os, ha;
    Os = {
      passive: !0
    };
    ha = gj(function() {
      var a = !1;
      try {
        var b = Object.defineProperty({}, "passive", {
          get: function() {
            a = !0
          }
        });
        _.q.addEventListener("test", null, b)
      } catch (c) {}
      return a
    });
    _.yb = function(a, b, c, d) {
      return a.addEventListener ? (a.addEventListener(b, c, ia(d)),
        !0) : !1
    }
    ;
    _.Ce = function(a, b, c, d) {
      return a.removeEventListener ? (a.removeEventListener(b, c, ia(d)),
        !0) : !1
    }
    ;
    var Qs;
    _.ja = function(a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
    }
    ;
    _.Ps = function(a, b) {
      Array.prototype.forEach.call(a, b, void 0)
    }
    ;
    _.gh = function(a, b) {
      return Array.prototype.filter.call(a, b, void 0)
    }
    ;
    _.Ad = function(a, b) {
      return Array.prototype.map.call(a, b, void 0)
    }
    ;
    Qs = function(a, b) {
      return Array.prototype.reduce.call(a, b, 0)
    }
    ;
    _.Fh = function(a, b) {
      return Array.prototype.some.call(a, b, void 0)
    }
    ;
    var Ja = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Rs = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      command: !0,
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
      wbr: !0
    };
    var op;
    op = {};
    _.np = function(a, b) {
      this.j = b === op ? a : "";
      this.Na = !0
    }
    ;
    _.np.prototype.toString = function() {
      return this.j.toString()
    }
    ;
    _.np.prototype.Da = function() {
      return this.j.toString()
    }
    ;
    _.kb = function(a) {
      return a instanceof _.np && a.constructor === _.np ? a.j : "type_error:SafeScript"
    }
    ;
    var Hb, Ys, Xs, Zs, Ts, ue, $s;
    _.Vs = function(a, b) {
      this.j = b === Ts ? a : ""
    }
    ;
    _.Vs.prototype.toString = function() {
      return this.j + ""
    }
    ;
    _.Vs.prototype.Na = !0;
    _.Vs.prototype.Da = function() {
      return this.j.toString()
    }
    ;
    _.mb = function(a) {
      return a instanceof _.Vs && a.constructor === _.Vs ? a.j : "type_error:TrustedResourceUrl"
    }
    ;
    Hb = function(a, b) {
      var c = _.Hs(a);
      if (!Xs.test(c))
        throw Error("Invalid TrustedResourceUrl format: " + c);
      a = c.replace(Ys, function(d, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e))
          throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
        d = b[e];
        return d instanceof _.Gs ? _.Hs(d) : encodeURIComponent(String(d))
      });
      return ue(a)
    }
    ;
    Ys = /%{(\w+)}/g;
    Xs = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    Zs = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    Ts = {};
    ue = function(a) {
      return new _.Vs(a,Ts)
    }
    ;
    $s = function(a, b, c) {
      if (null == c)
        return b;
      if ("string" === typeof c)
        return c ? a + encodeURIComponent(c) : "";
      for (var d in c)
        if (Object.prototype.hasOwnProperty.call(c, d)) {
          var e = c[d];
          e = Array.isArray(e) ? e : [e];
          for (var f = 0; f < e.length; f++) {
            var g = e[f];
            null != g && (b || (b = a),
              b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
          }
        }
      return b
    }
    ;
    var at = function(a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c
    }
      , jl = function(a) {
      return /^[\s\xa0]*$/.test(a)
    }
      , Cr = function(a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , it = function(a) {
      if (!bt.test(a))
        return a;
      -1 != a.indexOf("&") && (a = a.replace(ct, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(dt, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(et, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(ft, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(gt, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(ht, "&#0;"));
      return a
    }
      , ct = /&/g
      , dt = /</g
      , et = />/g
      , ft = /"/g
      , gt = /'/g
      , ht = /\x00/g
      , bt = /[\x00&<>"']/
      , Pa = function(a, b) {
      return -1 != a.indexOf(b)
    }
      , Dr = function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    };
    var kt, lt, nt, ot, jt, tb;
    _.eb = function(a, b) {
      this.j = b === jt ? a : ""
    }
    ;
    _.eb.prototype.toString = function() {
      return this.j.toString()
    }
    ;
    _.eb.prototype.Na = !0;
    _.eb.prototype.Da = function() {
      return this.j.toString()
    }
    ;
    _.fb = function(a) {
      return a instanceof _.eb && a.constructor === _.eb ? a.j : "type_error:SafeUrl"
    }
    ;
    kt = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    lt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.mt = function(a) {
      if (a instanceof _.eb)
        return a;
      a = "object" == typeof a && a.Na ? a.Da() : String(a);
      lt.test(a) ? a = tb(a) : (a = String(a).replace(/(%0A|%0D)/g, ""),
        a = a.match(kt) ? tb(a) : null);
      return a
    }
    ;
    try {
      new URL("s://g"),
        nt = !0
    } catch (a) {
      nt = !1
    }
    ot = nt;
    jt = {};
    tb = function(a) {
      return new _.eb(a,jt)
    }
    ;
    _.ub = tb("about:invalid#zClosurez");
    _.pt = {};
    _.qt = function(a, b) {
      this.j = b === _.pt ? a : "";
      this.Na = !0
    }
    ;
    _.qt.prototype.Da = function() {
      return this.j
    }
    ;
    _.qt.prototype.toString = function() {
      return this.j.toString()
    }
    ;
    _.rt = new _.qt("",_.pt);
    _.st = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");
    _.tt = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g");
    _.ut = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g");
    var Na, vt;
    a: {
      for (var wt = ["CLOSURE_FLAGS"], xt = _.q, yt = 0; yt < wt.length; yt++)
        if (xt = xt[wt[yt]],
        null == xt) {
          vt = null;
          break a
        }
      vt = xt
    }
    var zt = vt && vt[610401301];
    Na = null != zt ? zt : !1;
    var Oa, At = _.q.navigator;
    Oa = At ? At.userAgentData || null : null;
    var Bt, Et, Ht, Ft, Jt, Gt, Qg;
    Bt = {};
    _.Ct = function(a, b) {
      this.j = b === Bt ? a : "";
      this.Na = !0
    }
    ;
    _.Ct.prototype.Da = function() {
      return this.j.toString()
    }
    ;
    _.Ct.prototype.toString = function() {
      return this.j.toString()
    }
    ;
    _.ob = function(a) {
      return a instanceof _.Ct && a.constructor === _.Ct ? a.j : "type_error:SafeHtml"
    }
    ;
    Et = function(a) {
      return a instanceof _.Ct ? a : _.Dt(it("object" == typeof a && a.Na ? a.Da() : String(a)))
    }
    ;
    _.Sg = function(a) {
      if (!Ft.test(a))
        throw Error("");
      if (a.toUpperCase()in Gt)
        throw Error("");
    }
    ;
    Ht = function(a) {
      var b = Et(Qg)
        , c = []
        , d = function(e) {
        Array.isArray(e) ? e.forEach(d) : (e = Et(e),
          c.push(_.ob(e).toString()))
      };
      a.forEach(d);
      return _.Dt(c.join(_.ob(b).toString()))
    }
    ;
    _.It = function(a) {
      return Ht(Array.prototype.slice.call(arguments))
    }
    ;
    _.Dt = function(a) {
      return new _.Ct(a,Bt)
    }
    ;
    _.Zg = function(a, b, c) {
      var d = "";
      if (b)
        for (var e in b)
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            if (!Ft.test(e))
              throw Error("");
            var f = b[e];
            if (null != f) {
              var g = e;
              if (f instanceof _.Gs)
                f = _.Hs(f);
              else {
                if ("style" == g.toLowerCase())
                  throw Error("");
                if (/^on/i.test(g))
                  throw Error("");
                if (g.toLowerCase()in Jt)
                  if (f instanceof _.Vs)
                    f = _.mb(f).toString();
                  else if (f instanceof _.eb)
                    f = _.fb(f);
                  else if ("string" === typeof f)
                    f = (_.mt(f) || _.ub).Da();
                  else
                    throw Error("");
              }
              f.Na && (f = f.Da());
              f = g + '="' + it(String(f)) + '"';
              d += " " + f
            }
          }
      b = "<" + a + d;
      null == c ? c = [] : Array.isArray(c) || (c = [c]);
      !0 === Rs[a.toLowerCase()] ? b += ">" : (c = _.It(c),
        b += ">" + _.ob(c).toString() + "</" + a + ">");
      return _.Dt(b)
    }
    ;
    Ft = /^[a-zA-Z0-9-]+$/;
    Jt = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0
    };
    Gt = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0
    };
    Qg = new _.Ct(_.q.trustedTypes && _.q.trustedTypes.emptyHTML || "",Bt);
    _.Kt = _.Dt("<br>");
    var Lt;
    try {
      new URL("s://g"),
        Lt = !0
    } catch (a) {
      Lt = !1
    }
    var gb = Lt;
    var Mt = {
      zi: 0,
      vi: 1,
      wi: 2,
      0: "HTML_FORMATTED_CONTENT",
      1: "EMBEDDED_INTERNAL_CONTENT",
      2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
    }
      , Nt = function(a, b) {
      b = Error.call(this, a + " cannot be used with intent " + Mt[b]);
      this.message = b.message;
      "stack"in b && (this.stack = b.stack);
      this.type = a;
      this.name = "TypeCannotBeUsedWithIntentError"
    };
    _.N(Nt, Error);
    var qb = function(a) {
      this.Ug = a
    }
      , sb = [rb("data"), rb("http"), rb("https"), rb("mailto"), rb("ftp"), new qb(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
      }
    )];
    var Cb = function(a) {
      return new _.v.Promise(function(b, c) {
          var d = new XMLHttpRequest;
          d.onreadystatechange = function() {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
          }
          ;
          d.open("GET", a, !0);
          d.send()
        }
      )
    };
    var Mb, Lb = "undefined" !== typeof TextEncoder;
    _.Ot = function(a) {
      _.Ot[" "](a);
      return a
    }
    ;
    _.Ot[" "] = function() {}
    ;
    var Pt = function(a, b) {
      try {
        return _.Ot(a[b]),
          !0
      } catch (c) {}
      return !1
    };
    var Qt, St, Tt, Ut, Vt, Wt;
    Qt = Ua();
    _.Rt = Va();
    St = Ra("Edge");
    Tt = Ra("Gecko") && !(Pa(La().toLowerCase(), "webkit") && !Ra("Edge")) && !(Ra("Trident") || Ra("MSIE")) && !Ra("Edge");
    Ut = Pa(La().toLowerCase(), "webkit") && !Ra("Edge");
    Vt = function() {
      var a = _.q.document;
      return a ? a.documentMode : void 0
    }
    ;
    a: {
      var Xt = ""
        , Yt = function() {
        var a = La();
        if (Tt)
          return /rv:([^\);]+)(\)|;)/.exec(a);
        if (St)
          return /Edge\/([\d\.]+)/.exec(a);
        if (_.Rt)
          return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Ut)
          return /WebKit\/(\S+)/.exec(a);
        if (Qt)
          return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();
      Yt && (Xt = Yt ? Yt[1] : "");
      if (_.Rt) {
        var Zt = Vt();
        if (null != Zt && Zt > parseFloat(Xt)) {
          Wt = String(Zt);
          break a
        }
      }
      Wt = Xt
    }
    var $t = Wt, au;
    if (_.q.document && _.Rt) {
      var bu = Vt();
      au = bu ? bu : parseInt($t, 10) || void 0
    } else
      au = void 0;
    var cu = au;
    !Ra("Android") || Za();
    Za();
    $a();
    var du = {}
      , eu = null
      , fu = Tt || Ut || "function" == typeof _.q.btoa
      , Pb = function(a, b) {
      void 0 === b && (b = 0);
      gu();
      b = du[b];
      for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
        var g = a[e]
          , h = a[e + 1]
          , k = a[e + 2]
          , l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = l + g + h + k
      }
      l = 0;
      k = d;
      switch (a.length - e) {
        case 2:
          l = a[e + 1],
            k = b[(l & 15) << 2] || d;
        case 1:
          a = a[e],
            c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
      }
      return c.join("")
    }
      , hu = function(a, b) {
      if (fu && !b)
        a = _.q.btoa(a);
      else {
        for (var c = [], d = 0, e = 0; e < a.length; e++) {
          var f = a.charCodeAt(e);
          255 < f && (c[d++] = f & 255,
            f >>= 8);
          c[d++] = f
        }
        a = Pb(c, b)
      }
      return a
    }
      , Xp = function(a) {
      var b = "";
      iu(a, function(c) {
        b += String.fromCharCode(c)
      });
      return b
    }
      , ju = function(a) {
      var b = a.length
        , c = 3 * b / 4;
      c % 3 ? c = Math.floor(c) : Pa("=.", a[b - 1]) && (c = Pa("=.", a[b - 2]) ? c - 2 : c - 1);
      var d = new Uint8Array(c)
        , e = 0;
      iu(a, function(f) {
        d[e++] = f
      });
      return e !== c ? d.subarray(0, e) : d
    }
      , iu = function(a, b) {
      function c(k) {
        for (; d < a.length; ) {
          var l = a.charAt(d++)
            , m = eu[l];
          if (null != m)
            return m;
          if (!jl(l))
            throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
      }
      gu();
      for (var d = 0; ; ) {
        var e = c(-1)
          , f = c(0)
          , g = c(64)
          , h = c(64);
        if (64 === h && -1 === e)
          break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2),
        64 != h && b(g << 6 & 192 | h))
      }
    }
      , gu = function() {
      if (!eu) {
        eu = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
          var d = a.concat(b[c].split(""));
          du[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            void 0 === eu[f] && (eu[f] = e)
          }
        }
      }
    };
    var Ub = "undefined" !== typeof Uint8Array, Ob = !_.Rt && "function" === typeof _.q.btoa, ku = /[-_.]/g, Sb = {
      "-": "+",
      _: "/",
      ".": "="
    }, jk, Xb = {};
    var lu, vc = function(a, b) {
      Yb(b);
      this.j = a;
      if (null != a && 0 === a.length)
        throw Error("ByteString should be constructed with non-empty values");
    }, wc = function() {
      return lu || (lu = new vc(null,Xb))
    }, pd = function(a) {
      var b = a.j;
      return null == b ? "" : "string" === typeof b ? b : a.j = Qb(b)
    };
    vc.prototype.isEmpty = function() {
      return null == this.j
    }
    ;
    var ik = function(a) {
      Yb(Xb);
      var b = a.j;
      if (null != b && !Vb(b))
        if ("string" === typeof b)
          if (Ob) {
            ku.test(b) && (b = b.replace(ku, Tb));
            b = atob(b);
            for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++)
              c[d] = b.charCodeAt(d);
            b = c
          } else
            b = ju(b);
        else
          b = null;
      return null == b ? b : a.j = b
    };
    var dc = 0
      , ec = 0
      , gc = "function" === typeof BigInt;
    var mu = function(a, b) {
      this.o = a >>> 0;
      this.j = b >>> 0
    }, ou = function(a) {
      if (!a)
        return nu || (nu = new mu(0,0));
      if (!/^\d+$/.test(a))
        return null;
      hc(a);
      return new mu(dc,ec)
    }, nu, pu = function(a, b) {
      this.o = a >>> 0;
      this.j = b >>> 0
    }, Yd = function(a) {
      if (!a)
        return qu || (qu = new pu(0,0));
      if (!/^-?\d+$/.test(a))
        return null;
      hc(a);
      return new pu(dc,ec)
    }, qu;
    var ru = function() {
      this.j = []
    };
    ru.prototype.length = function() {
      return this.j.length
    }
    ;
    ru.prototype.end = function() {
      var a = this.j;
      this.j = [];
      return a
    }
    ;
    var $d = function(a, b, c) {
      for (; 0 < c || 127 < b; )
        a.j.push(b & 127 | 128),
          b = (b >>> 7 | c << 25) >>> 0,
          c >>>= 7;
      a.j.push(b)
    }
      , Zd = function(a, b) {
      for (; 127 < b; )
        a.j.push(b & 127 | 128),
          b >>>= 7;
      a.j.push(b)
    }
      , su = function(a, b) {
      if (0 <= b)
        Zd(a, b);
      else {
        for (var c = 0; 9 > c; c++)
          a.j.push(b & 127 | 128),
            b >>= 7;
        a.j.push(1)
      }
    };
    var ge = function() {
      this.m = [];
      this.o = 0;
      this.j = new ru
    }
      , he = function(a, b) {
      0 !== b.length && (a.m.push(b),
        a.o += b.length)
    }
      , tu = function(a, b) {
      Zd(a.j, 8 * b + 2);
      b = a.j.end();
      he(a, b);
      b.push(a.o);
      return b
    }
      , uu = function(a, b) {
      var c = b.pop();
      for (c = a.o + a.j.length() - c; 127 < c; )
        b.push(c & 127 | 128),
          c >>>= 7,
          a.o++;
      b.push(c);
      a.o++
    }
      , Kd = function(a, b) {
      if (b = b.ie) {
        he(a, a.j.end());
        for (var c = 0; c < b.length; c++)
          he(a, ik(b[c]) || jk || (jk = new Uint8Array(0)))
      }
    }
      , vu = function(a, b, c) {
      Zd(a.j, 8 * b + 2);
      Zd(a.j, c.length);
      he(a, a.j.end());
      he(a, c)
    };
    var ic = "function" === typeof _.v.Symbol && "symbol" === typeof (0,
      _.v.Symbol)() ? (0,
      _.v.Symbol)() : void 0;
    var Jc = {}, wu, Wc = Object.freeze(nc([], 23)), xu = function(a) {
      this.hf = 0;
      this.Le = a
    };
    xu.prototype.next = function() {
      return this.hf < this.Le.length ? {
        done: !1,
        value: this.Le[this.hf++]
      } : {
        done: !0,
        value: void 0
      }
    }
    ;
    xu.prototype[_.u(_.v.Symbol, "iterator")] = function() {
      return this
    }
    ;
    var Pc = "function" === typeof _.v.Symbol && "symbol" === typeof (0,
      _.v.Symbol)() ? (0,
      _.v.Symbol)() : "di";
    var ed = function(a, b, c, d) {
      d = void 0 === d ? Uc : d;
      c = lc(a);
      c |= 32;
      nc(a, c);
      this.o = c;
      this.m = (this.G = b) ? Sc : Tc;
      this.l = d;
      this.j = b = new _.v.Map;
      for (d = 0; d < a.length; d++)
        c = a[d],
          b.set(c[0], c[1]);
      this.size = b.size
    }
      , yu = function(a) {
      if (a.o & 2)
        throw Error("Cannot mutate an immutable Map");
    }
      , rd = function(a, b) {
      b = void 0 === b ? Vc : b;
      for (var c = zu(a), d = 0; d < c.length; d++) {
        var e = c[d]
          , f = a.j.get(c[d]);
        c[d] = [b(e), b(f)]
      }
      return c
    }
      , fd = function(a, b) {
      b = void 0 === b ? Vc : b;
      var c = [];
      a = _.u(a.j, "entries").call(a.j);
      for (var d; !(d = a.next()).done; )
        d = d.value,
          d[0] = b(d[0]),
          d[1] = b(d[1]),
          c.push(d);
      return c
    };
    _.aa = ed.prototype;
    _.aa.clear = function() {
      yu(this);
      this.j.clear();
      this.size = 0
    }
    ;
    _.aa.delete = function(a) {
      yu(this);
      return this.j.delete(a) ? (this.size = this.j.size,
        !0) : !1
    }
    ;
    _.aa.entries = function() {
      for (var a = zu(this), b = 0; b < a.length; b++) {
        var c = a[b];
        a[b] = [c, this.get(c)]
      }
      return new xu(a)
    }
    ;
    _.aa.keys = function() {
      return new xu(zu(this))
    }
    ;
    _.aa.values = function() {
      for (var a = zu(this), b = 0; b < a.length; b++)
        a[b] = this.get(a[b]);
      return new xu(a)
    }
    ;
    _.aa.forEach = function(a, b) {
      for (var c = zu(this), d = 0; d < c.length; d++) {
        var e = c[d];
        a.call(b, this.get(e), e, this)
      }
    }
    ;
    _.aa.set = function(a, b) {
      yu(this);
      var c = this.j;
      if (null == b)
        return c.delete(a),
          this;
      c.set(a, this.m(b, this.G, this.B, this.o));
      this.size = c.size;
      return this
    }
    ;
    _.aa.get = function(a) {
      var b = this.j;
      if (b.has(a)) {
        var c = b.get(a)
          , d = this.o
          , e = this.G;
        e && Array.isArray(c) && d & 16 && rc(c);
        d = this.m(c, e, this.B, d);
        d !== c && b.set(a, d);
        return d
      }
    }
    ;
    _.aa.has = function(a) {
      return this.j.has(a)
    }
    ;
    var zu = function(a) {
      return _.u(Array, "from").call(Array, _.u(a.j, "keys").call(a.j)).sort(Qc)
    };
    ed.prototype[_.u(_.v.Symbol, "iterator")] = function() {
      return _.u(this, "entries").call(this)
    }
    ;
    var Au, y, Xc, Ll, qo, Gq, E, dd, uf, Cu, ck, hk, gk, Ep, Bu, Io, zf, Du, Se, Vn, Go, ji, Eu, Gu, Hu, Tn, vi, pg, Iu;
    Au = function(a) {
      var b = a.o + a.xb;
      return a.Oa || (a.Oa = a.da[b] = {})
    }
    ;
    y = function(a, b, c) {
      return -1 === b ? null : b >= a.o ? a.Oa ? a.Oa[b] : void 0 : c && a.Oa && (c = a.Oa[b],
      null != c) ? c : a.da[b + a.xb]
    }
    ;
    _.z = function(a, b, c, d) {
      zc(a);
      return Xc(a, b, c, d)
    }
    ;
    Xc = function(a, b, c, d) {
      a.B && (a.B = void 0);
      if (b >= a.o || d)
        return Au(a)[b] = c,
          a;
      a.da[b + a.xb] = c;
      (c = a.Oa) && b in c && delete c[b];
      return a
    }
    ;
    Ll = function(a, b) {
      return null != y(a, b, !1)
    }
    ;
    qo = function(a, b, c) {
      return void 0 !== Bu(a, b, c, !1)
    }
    ;
    _.Wn = function(a, b) {
      return Yc(a, b, 0, !1, pc(a.da))
    }
    ;
    Gq = function(a, b) {
      var c = y(a, b);
      var d = null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0;
      null != d && d !== c && Xc(a, b, d);
      return d
    }
    ;
    E = function(a, b) {
      a = y(a, b);
      return null == a ? a : !!a
    }
    ;
    uf = function(a, b) {
      return _.z(a, b, void 0, !1)
    }
    ;
    Cu = function(a, b, c) {
      zc(a);
      Yc(a, b, 2, !1, !1).push(c);
      return a
    }
    ;
    ck = function(a, b, c, d) {
      zc(a);
      (c = gk(a, c)) && c !== b && null != d && Xc(a, c, void 0, !1);
      return Xc(a, b, d)
    }
    ;
    hk = function(a, b, c) {
      return gk(a, b) === c ? c : -1
    }
    ;
    gk = function(a, b) {
      for (var c = 0, d = 0; d < b.length; d++) {
        var e = b[d];
        null != y(a, e) && (0 !== c && Xc(a, c, void 0, !1),
          c = e)
      }
      return c
    }
    ;
    Ep = function(a, b, c) {
      var d = lc(a.da);
      yc(d);
      var e = y(a, c);
      b = Rc(Mc(e, b, !0, d));
      e !== b && Xc(a, c, b);
      return b
    }
    ;
    Bu = function(a, b, c, d) {
      var e = y(a, c, d);
      b = Mc(e, b, !1, lc(a.da));
      b !== e && null != b && Xc(a, c, b, d);
      return b
    }
    ;
    Io = function(a, b, c) {
      return (a = Bu(a, b, c, !1)) ? a : Kc(b)
    }
    ;
    zf = function(a, b, c) {
      var d = void 0 === d ? !1 : d;
      b = Bu(a, b, c, d);
      if (null == b)
        return b;
      if (!pc(a.da)) {
        var e = Rc(b);
        e !== b && (b = e,
          Xc(a, c, b, d))
      }
      return b
    }
    ;
    _.Pe = function(a, b, c) {
      var d = lc(a.da)
        , e = !!(d & 2);
      b = jd(a, b, c, e, d);
      a = Yc(a, c, 3, void 0, e);
      if (!(e || lc(a) & 8)) {
        for (e = 0; e < b.length; e++)
          c = b[e],
            d = Rc(c),
          c !== d && (b[e] = d,
            a[e] = d.da);
        jc(a, 8)
      }
      return b
    }
    ;
    _.Oh = function(a, b, c) {
      zc(a);
      null == c && (c = void 0);
      return Xc(a, b, c)
    }
    ;
    _.Rh = function(a, b, c, d) {
      zc(a);
      null == d && (d = void 0);
      return ck(a, b, c, d)
    }
    ;
    _.Bd = function(a, b, c, d) {
      zc(a);
      var e = null == c ? Wc : oc([]);
      if (null != c) {
        for (var f = !!c.length, g = 0; g < c.length; g++) {
          var h = c[g];
          f = f && !pc(h.da);
          e[g] = h.da
        }
        f = (f ? 8 : 0) | 1;
        g = lc(e);
        (g & f) !== f && (Object.isFrozen(e) && (e = Array.prototype.slice.call(e)),
          nc(e, g | f));
        a.j || (a.j = {});
        a.j[b] = c
      } else
        a.j && (a.j[b] = void 0);
      return Xc(a, b, e, d)
    }
    ;
    Du = function(a, b, c, d) {
      var e = lc(a.da);
      yc(e);
      e = jd(a, c, b, !1, e);
      c = null != d ? d : new c;
      a = Yc(a, b, 2, void 0, !1);
      e.push(c);
      a.push(c.da);
      pc(c.da) && kc(a, 8);
      return c
    }
    ;
    _.Yf = function(a, b, c, d) {
      Du(a, b, c, d);
      return a
    }
    ;
    Se = function(a, b) {
      return md(y(a, b), 0)
    }
    ;
    Vn = function(a, b) {
      return Cc(y(a, b))
    }
    ;
    Go = function(a, b) {
      return md(ji(a, b), 0)
    }
    ;
    ji = function(a, b) {
      a: if (a = y(a, b),
      null != a) {
        switch (typeof a) {
          case "string":
            a = +a;
            break a;
          case "number":
            break a
        }
        a = void 0
      }
      return a
    }
    ;
    _.$e = function(a, b, c) {
      return md(y(a, b), void 0 === c ? 0 : c)
    }
    ;
    Eu = function() {
      var a = pj().j;
      return y(a, 26)
    }
    ;
    Gu = function(a) {
      var b = Fu;
      var c = void 0 === c ? 0 : c;
      return _.$e(a, hk(a, b, 3), c)
    }
    ;
    _.cn = function(a, b) {
      return Zc(a, b, Ic, !1)
    }
    ;
    _.Vf = function(a, b) {
      return md(y(a, b), "")
    }
    ;
    _.So = function(a, b, c) {
      return md(E(a, b), void 0 === c ? !1 : c)
    }
    ;
    _.Re = function(a, b, c) {
      return md(y(a, b), void 0 === c ? 0 : c)
    }
    ;
    Hu = function(a, b) {
      return _.Vf(a, hk(a, b, 2))
    }
    ;
    Tn = function(a, b, c, d) {
      return zf(a, b, hk(a, d, c))
    }
    ;
    vi = function(a, b) {
      a = E(a, b);
      return null == a ? void 0 : a
    }
    ;
    pg = function(a, b) {
      a = y(a, b);
      return null == a ? void 0 : a
    }
    ;
    Iu = function(a, b) {
      a = y(a, b);
      return null == a ? void 0 : a
    }
    ;
    _.cg = function(a, b) {
      return null != y(a, b)
    }
    ;
    var nd;
    _.Q = function(a, b, c, d) {
      null == a && (a = nd);
      nd = void 0;
      var e = this.constructor.messageId;
      if (null == a) {
        a = e ? [e] : [];
        var f = 48;
        var g = !0;
        d && (f |= 128);
        nc(a, f)
      } else {
        if (!Array.isArray(a))
          throw Error();
        if (e && e !== a[0])
          throw Error();
        f = jc(a, 0) | 32;
        g = 0 !== (16 & f);
        if (d) {
          if (!(f & 128) && 0 < a.length) {
            var h = a[a.length - 1];
            if (uc(h) && "g"in h) {
              f |= 128;
              delete h.g;
              var k = !0, l;
              for (l in h) {
                k = !1;
                break
              }
              k && a.pop()
            } else
              throw Error();
          }
        } else if (128 & f)
          throw Error();
        nc(a, f)
      }
      this.xb = e ? 0 : -1;
      this.j = void 0;
      this.da = a;
      a: {
        f = this.da.length;
        e = f - 1;
        if (f && (f = this.da[e],
          uc(f))) {
          this.Oa = f;
          this.o = e - this.xb;
          break a
        }
        void 0 !== b && -1 < b ? (this.o = Math.max(b, e + 1 - this.xb),
          this.Oa = void 0) : this.o = Number.MAX_VALUE
      }
      if (!d && this.Oa && "g"in this.Oa)
        throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
      if (c) {
        b = g && !0;
        d = this.o;
        var m;
        for (g = 0; g < c.length; g++)
          e = c[g],
            e < d ? (e += this.xb,
              (f = a[e]) ? Gd(f, b) : a[e] = Wc) : (m || (m = Au(this)),
              (f = m[e]) ? Gd(f, b) : m[e] = Wc)
      }
    }
    ;
    _.Q.prototype.toJSON = function() {
      var a = this.da;
      return wu ? a : td(a, vd, wd)
    }
    ;
    var Me = function(a) {
      wu = !0;
      try {
        return JSON.stringify(a.toJSON(), Hd)
      } finally {
        wu = !1
      }
    };
    _.Q.prototype.ne = Jc;
    var Pd = (0,
      _.v.Symbol)()
      , Nd = (0,
      _.v.Symbol)()
      , Md = (0,
      _.v.Symbol)()
      , Ju = Xd(function(a, b, c) {
      if (5 !== a.j())
        return !1;
      _.z(b, c, a.l());
      return !0
    }, function(a, b, c) {
      b = Gq(b, c);
      if (null != b) {
        Zd(a.j, 8 * c + 5);
        a = a.j;
        var d = +b;
        0 === d ? 0 < 1 / d ? dc = ec = 0 : (ec = 0,
          dc = 2147483648) : isNaN(d) ? (ec = 0,
          dc = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d,
          3.4028234663852886E38 < d ? (ec = 0,
            dc = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)),
            ec = 0,
            dc = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2),
            d *= Math.pow(2, -b),
            d = Math.round(8388608 * d),
          16777216 <= d && ++b,
            ec = 0,
            dc = (c | b + 127 << 23 | d & 8388607) >>> 0));
        c = dc;
        a.j.push(c >>> 0 & 255);
        a.j.push(c >>> 8 & 255);
        a.j.push(c >>> 16 & 255);
        a.j.push(c >>> 24 & 255)
      }
    })
      , Ku = Xd(function(a, b, c) {
      if (0 !== a.j())
        return !1;
      _.z(b, c, a.L());
      return !0
    }, ae)
      , Lu = Xd(function(a, b, c) {
      if (0 !== a.j())
        return !1;
      _.z(b, c, a.A());
      return !0
    }, ae)
      , Mu = Xd(function(a, b, c) {
      if (0 !== a.j())
        return !1;
      _.z(b, c, a.ga());
      return !0
    }, function(a, b, c) {
      b = y(b, c);
      null != b && ("string" === typeof b && ou(b),
      null != b && (Zd(a.j, 8 * c),
        "number" === typeof b ? (a = a.j,
          fc(b),
          $d(a, dc, ec)) : (c = ou(b),
          $d(a.j, c.o, c.j))))
    })
      , Nu = Xd(function(a, b, c) {
      if (0 !== a.j())
        return !1;
      _.z(b, c, a.H());
      return !0
    }, function(a, b, c) {
      b = Vn(b, c);
      null != b && null != b && (Zd(a.j, 8 * c),
        su(a.j, b))
    })
      , Ou = Xd(function(a, b, c) {
      if (0 !== a.j())
        return !1;
      _.z(b, c, a.G());
      return !0
    }, function(a, b, c) {
      b = E(b, c);
      null != b && (Zd(a.j, 8 * c),
        a.j.j.push(b ? 1 : 0))
    })
      , Pu = Xd(function(a, b, c) {
      if (2 !== a.j())
        return !1;
      _.z(b, c, a.m());
      return !0
    }, function(a, b, c) {
      b = y(b, c);
      null != b && vu(a, c, Nb(b))
    })
      , Qu = Xd(function(a, b, c) {
      if (2 !== a.j())
        return !1;
      Cu(b, c, a.m());
      return !0
    }, function(a, b, c) {
      b = _.cn(b, c);
      if (null != b)
        for (var d = 0; d < b.length; d++) {
          var e = b[d];
          null != e && vu(a, c, Nb(e))
        }
    })
      , Ru = Xd(function(a, b, c, d, e) {
      if (2 !== a.j())
        return !1;
      a.o(Ep(b, d, c), e);
      return !0
    }, function(a, b, c, d, e) {
      b = zf(b, d, c);
      null != b && (c = tu(a, c),
        e(b, a),
        uu(a, c))
    })
      , Su = Xd(function(a, b, c, d, e) {
      if (2 !== a.j())
        return !1;
      a.o(Du(b, c, d), e);
      return !0
    }, function(a, b, c, d, e) {
      b = _.Pe(b, d, c);
      if (null != b)
        for (d = 0; d < b.length; d++) {
          var f = tu(a, c);
          e(b[d], a);
          uu(a, f)
        }
    })
      , Tu = Xd(function(a, b, c) {
      if (0 !== a.j())
        return !1;
      _.z(b, c, a.B());
      return !0
    }, function(a, b, c) {
      b = y(b, c);
      null != b && (b = parseInt(b, 10),
        Zd(a.j, 8 * c),
        su(a.j, b))
    });
    var C = {
      jj: function() {
        return ""
      }
    };
    C.ge = be;
    var Uu = be(function(a) {
      return null !== a && void 0 !== a
    }, "exists");
    C.assert = function() {}
    ;
    C.ua = function(a) {
      return a
    }
    ;
    var ce = void 0;
    C.oj = de;
    C.qj = ee;
    C.ej = function() {}
    ;
    C.hj = function(a) {
      return a
    }
    ;
    C.vf = fe;
    C.sj = function(a, b) {
      fe(a, b);
      return a
    }
    ;
    C.dj = function() {}
    ;
    C.I = function(a) {
      return a
    }
    ;
    C.pj = function(a, b) {
      de(a, Uu, b)
    }
    ;
    C.rj = function(a, b) {
      return ee(a, Uu, b)
    }
    ;
    C.ij = function(a, b) {
      return a(b)
    }
    ;
    C.kj = function(a) {
      fe(!ce);
      ce = function() {
        var b = "function" === typeof a ? a() : a;
        ce = void 0;
        return b
      }
    }
    ;
    var Yp = function(a) {
      _.Q.call(this, a)
    };
    _.N(Yp, _.Q);
    var Zp = function(a) {
      _.Q.call(this, a)
    };
    _.N(Zp, _.Q);
    var Vu = function(a) {
      this.j = a.o;
      this.o = a.m;
      this.G = a.G;
      this.yc = a.yc;
      this.win = a.win;
      this.Sb = a.Sb;
      this.md = a.md;
      this.Dd = a.Dd;
      this.ld = a.ld;
      this.m = a.j
    }
      , Wu = function(a, b, c) {
      this.o = a;
      this.m = b;
      this.G = c;
      this.win = window;
      this.Sb = "env";
      this.md = "n";
      this.Dd = "0";
      this.ld = "1";
      this.j = !0
    };
    Wu.prototype.build = function() {
      return new Vu(this)
    }
    ;
    var hq = function(a, b) {
      var c = void 0 === _.So(b, 6) ? !0 : _.So(b, 6), d, e;
      a: switch (_.Re(b, 4, 0)) {
        case 1:
          var f = "pt";
          break a;
        case 2:
          f = "cr";
          break a;
        default:
          f = ""
      }
      f = new Wu(ke(_.Re(b, 2, 0)),_.Vf(b, 3),f);
      b = null != (e = null == (d = zf(b, Yp, 5)) ? void 0 : _.Vf(d, 1)) ? e : "";
      f.yc = b;
      f.j = c;
      f.win = a;
      return f.build()
    };
    var Xu = function(a) {
      _.Q.call(this, a)
    };
    _.N(Xu, _.Q);
    Xu.prototype.getId = function() {
      return _.Vf(this, 1)
    }
    ;
    var vo = function(a) {
      var b = new Xu;
      return _.z(b, 1, a)
    }
      , Yu = [Xu, 1, Pu];
    var Zu = function(a) {
      _.Q.call(this, a)
    };
    _.N(Zu, _.Q);
    Zu.prototype.getWidth = function() {
      return Se(this, 1)
    }
    ;
    var Ao = function(a) {
      var b = new Zu;
      return _.z(b, 1, a)
    };
    Zu.prototype.getHeight = function() {
      return Se(this, 2)
    }
    ;
    var zo = function(a, b) {
      return _.z(a, 2, b)
    }
      , $u = [Zu, 1, Nu, 2, Nu];
    var av = function(a) {
      _.Q.call(this, a)
    };
    _.N(av, _.Q);
    var bv = [av, 1, Lu, 2, Ou];
    var to = function(a) {
      _.Q.call(this, a, -1, cv)
    };
    _.N(to, _.Q);
    var wo = function(a, b) {
      _.hd(a, 4, b, _.Hc)
    }
      , uo = function(a, b) {
      _.Oh(a, 6, b)
    }
      , yo = function(a, b) {
      _.Oh(a, 7, b)
    }
      , cv = [4]
      , dv = [to, 1, Pu, 2, Lu, 8, Lu, 3, Pu, 4, Qu, 5, Tu, 6, Ru, Yu, 7, Ru, $u, 9, Ru, bv];
    var Cn = function(a) {
      _.Q.call(this, a)
    };
    _.N(Cn, _.Q);
    var Bn = function(a, b) {
      return _.z(a, 1, b)
    }
      , zn = function(a, b) {
      return _.z(a, 4, b)
    }
      , An = function(a, b) {
      return _.z(a, 2, b)
    }
      , ev = [Cn, 1, Tu, 4, Ou, 2, Nu, 3, Pu];
    var mo = function(a) {
      _.Q.call(this, a, -1, fv)
    };
    _.N(mo, _.Q);
    var lo = function(a, b) {
      return _.z(a, 1, b)
    }
      , no = function(a, b) {
      _.z(a, 2, b)
    }
      , jo = function(a, b) {
      return _.Yf(a, 3, to, b)
    }
      , ko = function(a, b) {
      return _.z(a, 4, b)
    };
    mo.prototype.ff = function() {
      return _.Re(this, 7, 0)
    }
    ;
    var fv = [3]
      , gv = [mo, 1, Pu, 2, Lu, 3, Su, dv, 4, Tu, 5, Ru, ev, 6, Ou, 7, Tu];
    var hv = function(a) {
      _.Q.call(this, a)
    };
    _.N(hv, _.Q);
    var iv = [hv, 1, Tu, 2, Ou];
    var kv = function(a) {
      _.Q.call(this, a, -1, jv)
    };
    _.N(kv, _.Q);
    var io = function(a, b) {
      return Du(a, 2, mo, b)
    }
      , ro = function(a, b) {
      _.Oh(a, 5, b)
    }
      , lv = function(a, b) {
      _.Oh(a, 9, b)
    }
      , jv = [2]
      , mv = [kv, 1, Tu, 6, Pu, 2, Su, gv, 3, Tu, 4, Pu, 5, Ru, ev, 9, Ru, iv, 7, Ou, 8, Nu];
    var ov = function(a) {
      _.Q.call(this, a, -1, nv)
    };
    _.N(ov, _.Q);
    var pv = function(a) {
      var b = new kv;
      b = _.z(b, 1, 1);
      return Du(a, 1, kv, b)
    }
      , nv = [1];
    ov.prototype.m = ie([ov, 1, Su, mv]);
    var qv = function(a) {
      _.Q.call(this, a)
    };
    _.N(qv, _.Q);
    var Fu = [2, 3];
    var sv = function(a) {
      _.Q.call(this, a, -1, rv)
    };
    _.N(sv, _.Q);
    var rv = [1];
    var uv = function(a) {
      _.Q.call(this, a, -1, tv)
    };
    _.N(uv, _.Q);
    var tv = [1];
    var vv = function(a) {
      _.Q.call(this, a)
    };
    _.N(vv, _.Q);
    vv.prototype.m = function() {
      return _.Vf(this, 1)
    }
    ;
    vv.prototype.G = function() {
      return Hu(this, wv)
    }
    ;
    var wv = [2, 3];
    var yv = function(a) {
      _.Q.call(this, a, -1, xv)
    };
    _.N(yv, _.Q);
    yv.prototype.m = function() {
      return _.Pe(this, vv, 2)
    }
    ;
    var bg = je(yv)
      , xv = [2];
    var Av = function(a) {
      _.Q.call(this, a, -1, zv)
    };
    _.N(Av, _.Q);
    var zv = [4];
    var Bv = function(a) {
      _.Q.call(this, a)
    };
    _.N(Bv, _.Q);
    var Dv = function(a) {
      _.Q.call(this, a, -1, Cv)
    };
    _.N(Dv, _.Q);
    Dv.prototype.gd = function() {
      return Io(this, Bv, 2)
    }
    ;
    var Cv = [1];
    var Ev = function(a) {
      _.Q.call(this, a)
    };
    _.N(Ev, _.Q);
    var Gv = function(a) {
      _.Q.call(this, a, -1, Fv)
    };
    _.N(Gv, _.Q);
    var Fv = [1];
    var Hv = function(a) {
      _.Q.call(this, a)
    };
    _.N(Hv, _.Q);
    var Iv = [Hv, 1, Tu, 2, Lu];
    var Jv = function(a) {
      _.Q.call(this, a)
    };
    _.N(Jv, _.Q);
    var Kv = [Jv, 1, Ku];
    var Lv = function(a) {
      _.Q.call(this, a)
    };
    _.N(Lv, _.Q);
    Lv.prototype.getEscapedQemQueryId = function() {
      return _.Vf(this, 1)
    }
    ;
    var Mv = [Lv, 1, Pu, 2, Ru, Kv, 3, Ru, Iv];
    var Nv = function(a) {
      _.Q.call(this, a)
    };
    _.N(Nv, _.Q);
    Nv.prototype.getAdUnitPath = function() {
      return _.Vf(this, 1)
    }
    ;
    var Un = function(a) {
      _.Q.call(this, a)
    };
    _.N(Un, _.Q);
    var Rn = function(a) {
      _.Q.call(this, a)
    };
    _.N(Rn, _.Q);
    var Sn = [1, 2];
    var Pv = function(a) {
      _.Q.call(this, a, -1, Ov)
    };
    _.N(Pv, _.Q);
    var Ov = [1, 2];
    var Xn = function(a) {
      _.Q.call(this, a)
    };
    _.N(Xn, _.Q);
    Xn.prototype.getAdUnitPath = function() {
      return _.Vf(this, 2)
    }
    ;
    Xn.prototype.getWidth = function() {
      return Se(this, 3)
    }
    ;
    Xn.prototype.getHeight = function() {
      return Se(this, 4)
    }
    ;
    var Rv = function(a) {
      _.Q.call(this, a, -1, Qv)
    };
    _.N(Rv, _.Q);
    var Qv = [3];
    var Tv = function(a) {
      _.Q.call(this, a, -1, Sv)
    };
    _.N(Tv, _.Q);
    var Sv = [2];
    var Vv = function(a) {
      _.Q.call(this, a, -1, Uv)
    }, Uv;
    _.N(Vv, _.Q);
    _.Wv = function(a) {
      return _.Pe(a, Tv, 2)
    }
    ;
    Uv = [2, 15];
    var Xv = function(a) {
      _.Q.call(this, a)
    };
    _.N(Xv, _.Q);
    Xv.prototype.getAdUnitPath = function() {
      return _.Vf(this, 2)
    }
    ;
    var Yv = function(a) {
      _.Q.call(this, a)
    };
    _.N(Yv, _.Q);
    var Zv = [5, 6, 7, 8, 9];
    var aw = function(a) {
      _.Q.call(this, a, -1, $v)
    };
    _.N(aw, _.Q);
    var $v = [4, 5, 6];
    var bw = function(a) {
      _.Q.call(this, a)
    };
    _.N(bw, _.Q);
    bw.prototype.uc = function() {
      return _.cg(this, 2)
    }
    ;
    var dw = function(a) {
      _.Q.call(this, a, -1, cw)
    };
    _.N(dw, _.Q);
    var cw = [13];
    var fw = function(a) {
      _.Q.call(this, a, -1, ew)
    };
    _.N(fw, _.Q);
    var ew = [13];
    var Af = function(a) {
      _.Q.call(this, a)
    };
    _.N(Af, _.Q);
    var yf = function(a, b) {
      return _.z(a, 1, b)
    }
      , gw = [Af, 1, Tu];
    var Tf = function(a) {
      _.Q.call(this, a)
    };
    _.N(Tf, _.Q);
    var Xf = function(a) {
      var b = new Tf;
      return _.z(b, 1, a)
    };
    Tf.prototype.Ia = function(a) {
      return _.Oh(this, 10, a)
    }
    ;
    var hw = je(Tf)
      , iw = [Tf, 1, Pu, 2, Pu, 3, Lu, 7, Lu, 8, Ju, 4, Nu, 5, Nu, 6, Nu, 9, Ou, 11, Ou, 10, Ru, gw];
    var jw = function(a) {
      _.Q.call(this, a)
    };
    _.N(jw, _.Q);
    var kw = [jw, 4, Tu, 5, Pu];
    var lw = function(a) {
      _.Q.call(this, a)
    };
    _.N(lw, _.Q);
    var mw = [lw, 1, Mu, 2, Mu, 3, Mu];
    var nw = function(a) {
      _.Q.call(this, a)
    };
    _.N(nw, _.Q);
    nw.prototype.Ia = function(a) {
      return _.Oh(this, 7, a)
    }
    ;
    var ow = [nw, 5, Pu, 4, Pu, 2, Ru, mw, 3, Ru, mw, 6, Ou, 7, Ru, kw, 8, Lu];
    var Pf = function(a) {
      _.Q.call(this, a, -1, pw)
    };
    _.N(Pf, _.Q);
    var pw = [1, 2];
    Pf.prototype.m = ie([Pf, 1, Su, ow, 2, Su, iw]);
    var qw = function(a) {
      _.Q.call(this, a)
    };
    _.N(qw, _.Q);
    qw.prototype.m = function() {
      return _.Vf(this, 1)
    }
    ;
    qw.prototype.G = function() {
      return Hu(this, rw)
    }
    ;
    var rw = [2, 3];
    var tw = function(a) {
      _.Q.call(this, a, -1, sw)
    };
    _.N(tw, _.Q);
    tw.prototype.m = function() {
      return _.Pe(this, qw, 1)
    }
    ;
    var sw = [1];
    var uw = function(a) {
      _.Q.call(this, a)
    };
    _.N(uw, _.Q);
    uw.prototype.uc = function() {
      return _.cg(this, 1)
    }
    ;
    uw.prototype.getVersion = function() {
      return y(this, 5)
    }
    ;
    var vw = function(a) {
      _.Q.call(this, a)
    };
    _.N(vw, _.Q);
    var ww = function(a) {
      _.Q.call(this, a)
    };
    _.N(ww, _.Q);
    var xw = function(a) {
      _.Q.call(this, a)
    };
    _.N(xw, _.Q);
    var Eo = function(a) {
      _.Q.call(this, a, -1, yw)
    };
    _.N(Eo, _.Q);
    Eo.prototype.getEscapedQemQueryId = function() {
      return _.Vf(this, 4)
    }
    ;
    var yw = [2];
    var Do = function(a) {
      _.Q.call(this, a)
    };
    _.N(Do, _.Q);
    var Fo = function(a) {
      _.Q.call(this, a)
    };
    _.N(Fo, _.Q);
    var Jo = function(a) {
      _.Q.call(this, a)
    };
    _.N(Jo, _.Q);
    var Ho = function(a) {
      _.Q.call(this, a)
    };
    _.N(Ho, _.Q);
    Ho.prototype.getEscapedQemQueryId = function() {
      return _.Vf(this, 2)
    }
    ;
    var Aw = function(a) {
      _.Q.call(this, a, -1, zw)
    };
    _.N(Aw, _.Q);
    Aw.prototype.getWidth = function() {
      return Se(this, 9)
    }
    ;
    Aw.prototype.getHeight = function() {
      return Se(this, 10)
    }
    ;
    var zw = [3, 7, 11];
    var Cw = function(a) {
      _.Q.call(this, a, -1, Bw)
    };
    _.N(Cw, _.Q);
    Cw.prototype.getHeight = function() {
      return Vn(this, 6)
    }
    ;
    Cw.prototype.getWidth = function() {
      return Vn(this, 7)
    }
    ;
    Cw.prototype.getEscapedQemQueryId = function() {
      return y(this, 34)
    }
    ;
    var Bw = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63]
      , Dw = [39, 48];
    var Ew = function(a) {
      _.Q.call(this, a)
    };
    _.N(Ew, _.Q);
    var Wp = je(Ew);
    var Gw = function(a) {
      _.Q.call(this, a, -1, Fw)
    };
    _.N(Gw, _.Q);
    var Hw = je(Gw)
      , Fw = [1, 2, 3];
    var Iw = window;
    var Jr = function(a) {
      _.Q.call(this, a, -1, Jw)
    };
    _.N(Jr, _.Q);
    var Jw = [15];
    var Ir = function(a) {
      _.Q.call(this, a)
    };
    _.N(Ir, _.Q);
    Ir.prototype.getCorrelator = function() {
      return _.$e(this, 1)
    }
    ;
    Ir.prototype.setCorrelator = function(a) {
      return _.kd(this, 1, a)
    }
    ;
    var Hr = function(a) {
      _.Q.call(this, a)
    };
    _.N(Hr, _.Q);
    var Kw = _.Rt || Ut;
    var Mw, Nw;
    _.Lw = gj(function() {
      var a = document.createElement("div")
        , b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      b = a.firstChild.firstChild;
      a.innerHTML = _.ob(Qg);
      return !b.parentElement
    });
    Mw = /^[\w+/_-]+[=]{0,2}$/;
    Nw = function(a, b) {
      b = (b || _.q).document;
      return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Mw.test(a) ? a : "" : ""
    }
    ;
    _.Ai = function(a, b) {
      this.x = void 0 !== a ? a : 0;
      this.y = void 0 !== b ? b : 0
    }
    ;
    _.Ai.prototype.ceil = function() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this
    }
    ;
    _.Ai.prototype.floor = function() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this
    }
    ;
    _.Ai.prototype.round = function() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this
    }
    ;
    _.Di = function(a, b) {
      this.width = a;
      this.height = b
    }
    ;
    _.aa = _.Di.prototype;
    _.aa.aspectRatio = function() {
      return this.width / this.height
    }
    ;
    _.aa.isEmpty = function() {
      return !(this.width * this.height)
    }
    ;
    _.aa.ceil = function() {
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this
    }
    ;
    _.aa.floor = function() {
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this
    }
    ;
    _.aa.round = function() {
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this
    }
    ;
    var Ow, Pw, Qw, Sw;
    Ow = function(a) {
      return a = it(a)
    }
    ;
    Pw = function() {
      return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ ff()).toString(36)
    }
    ;
    Qw = 2147483648 * Math.random() | 0;
    _.Rw = function(a) {
      return String(a).replace(/\-([a-z])/g, function(b, c) {
        return c.toUpperCase()
      })
    }
    ;
    Sw = function(a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
        return c + d.toUpperCase()
      })
    }
    ;
    var Vw, Xw, Ww, $w, bx, le, re;
    Vw = function(a) {
      return a ? new _.Tw(_.Uw(a)) : Ds || (Ds = new _.Tw)
    }
    ;
    Xw = function(a, b) {
      Ga(b, function(c, d) {
        c && "object" == typeof c && c.Na && (c = c.Da());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Ww.hasOwnProperty(d) ? a.setAttribute(Ww[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
      })
    }
    ;
    Ww = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    };
    _.Zw = function(a) {
      a = a.document;
      a = _.Yw(a) ? a.documentElement : a.body;
      return new _.Di(a.clientWidth,a.clientHeight)
    }
    ;
    $w = function(a) {
      return a.scrollingElement ? a.scrollingElement : !Ut && _.Yw(a) ? a.documentElement : a.body || a.documentElement
    }
    ;
    _.ax = function(a) {
      return a ? a.parentWindow || a.defaultView : window
    }
    ;
    bx = function(a, b, c) {
      function d(h) {
        h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
      }
      for (var e = 1; e < c.length; e++) {
        var f = c[e];
        if (!Aa(f) || _.qa(f) && 0 < f.nodeType)
          d(f);
        else {
          a: {
            if (f && "number" == typeof f.length) {
              if (_.qa(f)) {
                var g = "function" == typeof f.item || "string" == typeof f.item;
                break a
              }
              if ("function" === typeof f) {
                g = "function" == typeof f.item;
                break a
              }
            }
            g = !1
          }
          _.Ps(g ? ma(f) : f, d)
        }
      }
    }
    ;
    _.cx = function(a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b)
    }
    ;
    _.Yw = function(a) {
      return "CSS1Compat" == a.compatMode
    }
    ;
    _.dx = function(a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    ;
    _.ex = function(a) {
      var b;
      if (Kw && (b = a.parentElement))
        return b;
      b = a.parentNode;
      return _.qa(b) && 1 == b.nodeType ? b : null
    }
    ;
    le = function(a) {
      var b, c = arguments.length;
      if (!c)
        return null;
      if (1 == c)
        return arguments[0];
      var d = []
        , e = Infinity;
      for (b = 0; b < c; b++) {
        for (var f = [], g = arguments[b]; g; )
          f.unshift(g),
            g = g.parentNode;
        d.push(f);
        e = Math.min(e, f.length)
      }
      f = null;
      for (b = 0; b < e; b++) {
        g = d[0][b];
        for (var h = 1; h < c; h++)
          if (g != d[h][b])
            return f;
        f = g
      }
      return f
    }
    ;
    _.Uw = function(a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    ;
    re = function(a) {
      try {
        return a.contentWindow || (a.contentDocument ? _.ax(a.contentDocument) : null)
      } catch (b) {}
      return null
    }
    ;
    _.Tw = function(a) {
      this.j = a || _.q.document || document
    }
    ;
    _.aa = _.Tw.prototype;
    _.aa.Eg = function(a) {
      return "string" === typeof a ? this.j.getElementById(a) : a
    }
    ;
    _.aa.ai = _.Tw.prototype.Eg;
    _.aa.getElementsByTagName = function(a, b) {
      return (b || this.j).getElementsByTagName(String(a))
    }
    ;
    _.aa.createElement = function(a) {
      return _.cx(this.j, a)
    }
    ;
    _.aa.createTextNode = function(a) {
      return this.j.createTextNode(String(a))
    }
    ;
    _.aa.append = function(a, b) {
      bx(_.Uw(a), a, arguments)
    }
    ;
    _.aa.Pf = _.dx;
    var fx = function() {
      return Na && Oa ? !Oa.mobile && (Ra("iPad") || Ra("Android") || Ra("Silk")) : Ra("iPad") || Ra("Android") && !Ra("Mobile") || Ra("Silk")
    };
    var hx, Dl, ix, el;
    _.gx = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    hx = function(a) {
      return a ? decodeURI(a) : a
    }
    ;
    Dl = function(a, b, c) {
      if (Array.isArray(b))
        for (var d = 0; d < b.length; d++)
          Dl(a, String(b[d]), c);
      else
        null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }
    ;
    ix = /#|$/;
    el = function(a, b) {
      var c = a.search(ix);
      a: {
        var d = 0;
        for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
          var f = a.charCodeAt(d - 1);
          if (38 == f || 63 == f)
            if (f = a.charCodeAt(d + e),
            !f || 61 == f || 38 == f || 35 == f)
              break a;
          d += e + 1
        }
        d = -1
      }
      if (0 > d)
        return null;
      e = a.indexOf("&", d);
      if (0 > e || e > c)
        e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    ;
    var pe, vg, jx, wg, cl, hj, Fk, Ve, Rr, lx, mx, ij, nx, ox, px, qx, rx, sx, tx, ux, vx, Hj, Jj, Ij, wx, xx, zx, Ax, Bx, Cx, Dx, rf, $n, tm, Xl, Jl, Fx;
    _.qe = function(a) {
      try {
        return !!a && null != a.location.href && Pt(a, "foo")
      } catch (b) {
        return !1
      }
    }
    ;
    pe = function(a, b, c, d) {
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? _.q : d;
      c = (void 0 === c ? 0 : c) ? jx(d) : d;
      for (d = 0; c && 40 > d++ && (!b && !_.qe(c) || !a(c)); )
        c = jx(c)
    }
    ;
    vg = function() {
      var a = window;
      pe(function(b) {
        a = b;
        return !1
      });
      return a
    }
    ;
    jx = function(a) {
      try {
        var b = a.parent;
        if (b && b != a)
          return b
      } catch (c) {}
      return null
    }
    ;
    wg = function(a) {
      return _.qe(a.top) ? a.top : null
    }
    ;
    cl = function(a, b) {
      var c = _.Be("SCRIPT", a);
      nb(c, b);
      return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a),
        c) : null
    }
    ;
    hj = function(a, b) {
      return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    ;
    _.Ue = function() {
      if (!_.v.globalThis.crypto)
        return Math.random();
      try {
        var a = new Uint32Array(1);
        _.v.globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536
      } catch (b) {
        return Math.random()
      }
    }
    ;
    _.Gl = function(a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    ;
    _.kx = function(a) {
      var b = [];
      _.Gl(a, function(c) {
        b.push(c)
      });
      return b
    }
    ;
    Fk = function(a, b) {
      return Ia(a, function(c, d) {
        return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
      })
    }
    ;
    _.si = function(a) {
      var b = a.length;
      if (0 == b)
        return 0;
      for (var c = 305419896, d = 0; d < b; d++)
        c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
      return 0 < c ? c : 4294967296 + c
    }
    ;
    _.Te = gj(function() {
      return _.Fh(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], lx) || 1E-4 > Math.random()
    });
    Ve = function(a, b) {
      try {
        if (a)
          return a.setItem("google_experiment_mod", b),
            b
      } catch (c) {}
      return null
    }
    ;
    Rr = gj(function() {
      return lx("MSIE")
    });
    lx = function(a) {
      return Pa(La(), a)
    }
    ;
    mx = /^([0-9.]+)px$/;
    ij = function(a) {
      return (a = mx.exec(a)) ? +a[1] : null
    }
    ;
    nx = function() {
      var a = window;
      try {
        for (var b = null; b != a; b = a,
          a = a.parent)
          switch (a.location.protocol) {
            case "https:":
              return !0;
            case "file:":
              return !0;
            case "http:":
              return !1
          }
      } catch (c) {}
      return !0
    }
    ;
    ox = function(a) {
      if (!a)
        return "";
      var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
      try {
        var c = b.exec(decodeURIComponent(a));
        if (c)
          return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
      } catch (d) {}
      return ""
    }
    ;
    px = {
      ei: "allow-forms",
      fi: "allow-modals",
      gi: "allow-orientation-lock",
      hi: "allow-pointer-lock",
      ji: "allow-popups",
      ki: "allow-popups-to-escape-sandbox",
      li: "allow-presentation",
      mi: "allow-same-origin",
      ni: "allow-scripts",
      oi: "allow-top-navigation",
      pi: "allow-top-navigation-by-user-activation"
    };
    qx = gj(function() {
      return _.kx(px)
    });
    rx = function(a) {
      var b = qx();
      return a.length ? _.gh(b, function(c) {
        return !(0 <= _.ja(a, c))
      }) : b
    }
    ;
    sx = function() {
      var a = _.Be("IFRAME")
        , b = {};
      _.Ps(qx(), function(c) {
        a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
      });
      return b
    }
    ;
    tx = function(a) {
      a = a && a.toString && a.toString();
      return "string" === typeof a && Pa(a, "[native code]")
    }
    ;
    ux = function(a, b) {
      for (var c = 0; 50 > c; ++c) {
        try {
          var d = !(!a.frames || !a.frames[b])
        } catch (e) {
          d = !1
        }
        if (d)
          return a;
        if (!(a = jx(a)))
          break
      }
      return null
    }
    ;
    vx = function(a) {
      if (!a || !a.frames)
        return null;
      if (a.frames.google_ads_top_frame)
        return a.frames.google_ads_top_frame.frameElement;
      try {
        var b = a.document, c = b.head, d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
        if (e) {
          var f = _.Be("IFRAME");
          f.name = "google_ads_top_frame";
          f.id = "google_ads_top_frame";
          f.style.display = "none";
          f.style.position = "fixed";
          f.style.left = "-999px";
          f.style.top = "-999px";
          f.style.width = "0px";
          f.style.height = "0px";
          e.appendChild(f);
          return f
        }
      } catch (g) {}
      return null
    }
    ;
    _.Qm = gj(function() {
      return (Na && Oa ? Oa.mobile : !fx() && (Ra("iPod") || Ra("iPhone") || Ra("Android") || Ra("IEMobile"))) ? 2 : fx() ? 1 : 0
    });
    Hj = function(a, b) {
      var c;
      for (c = void 0 === c ? 100 : c; a && c--; ) {
        if (a == b)
          return !0;
        a = a.parentElement
      }
      return !1
    }
    ;
    _.rj = function(a, b) {
      _.Gl(b, function(c, d) {
        a.style.setProperty(d, c, "important")
      })
    }
    ;
    Jj = function(a, b, c) {
      for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a); )
        a = a.parentElement
    }
    ;
    Ij = function(a, b) {
      for (var c = 100; a && c--; ) {
        var d = hj(a, window);
        if (d) {
          if (b(d))
            return !0;
          a = a.parentElement
        }
      }
      return !1
    }
    ;
    wx = function(a) {
      if (!a)
        return null;
      a = a.transform;
      if (!a)
        return null;
      a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
      return 6 != a.length ? null : _.Ad(a, parseFloat)
    }
    ;
    xx = {};
    _.yx = (xx["http://googleads.g.doubleclick.net"] = !0,
      xx["http://pagead2.googlesyndication.com"] = !0,
      xx["https://googleads.g.doubleclick.net"] = !0,
      xx["https://pagead2.googlesyndication.com"] = !0,
      xx);
    zx = function(a) {
      _.q.console && _.q.console.warn && _.q.console.warn(a)
    }
    ;
    Ax = [];
    Bx = function() {
      var a = Ax;
      Ax = [];
      a = _.x(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        try {
          b()
        } catch (c) {}
      }
    }
    ;
    Cx = function(a) {
      return a.replace(/\\(n|r|\\)/g, function(b, c) {
        return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
      })
    }
    ;
    Dx = function() {
      return Math.floor(Math.random() * Math.pow(2, 52))
    }
    ;
    rf = function(a) {
      if ("number" !== typeof a.goog_pvsid)
        try {
          Object.defineProperty(a, "goog_pvsid", {
            value: Dx(),
            configurable: !1
          })
        } catch (b) {}
      return Number(a.goog_pvsid) || -1
    }
    ;
    _.Ex = function(a, b) {
      se(_.ax(_.Uw(a)), a, b)
    }
    ;
    $n = function(a, b) {
      "complete" === a.readyState || "interactive" === a.readyState ? (Ax.push(b),
      1 == Ax.length && (_.v.Promise ? _.v.Promise.resolve().then(Bx) : window.setImmediate ? setImmediate(Bx) : setTimeout(Bx, 0))) : a.addEventListener("DOMContentLoaded", b)
    }
    ;
    tm = function(a) {
      return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    }
    ;
    Xl = function(a) {
      return 0 === a || tm(a)
    }
    ;
    Jl = function(a) {
      try {
        var b = JSON.stringify(a)
      } catch (c) {}
      return b || String(a)
    }
    ;
    _.Be = function(a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase())
    }
    ;
    Fx = function(a) {
      for (var b = a; a && a != a.parent; )
        a = a.parent,
        _.qe(a) && (b = a);
      return b
    }
    ;
    _.Gx = function(a, b, c, d) {
      this.top = a;
      this.right = b;
      this.bottom = c;
      this.left = d
    }
    ;
    _.Gx.prototype.getWidth = function() {
      return this.right - this.left
    }
    ;
    _.Gx.prototype.getHeight = function() {
      return this.bottom - this.top
    }
    ;
    _.Hx = function(a) {
      return new _.Gx(a.top,a.right,a.bottom,a.left)
    }
    ;
    _.Gx.prototype.ceil = function() {
      this.top = Math.ceil(this.top);
      this.right = Math.ceil(this.right);
      this.bottom = Math.ceil(this.bottom);
      this.left = Math.ceil(this.left);
      return this
    }
    ;
    _.Gx.prototype.floor = function() {
      this.top = Math.floor(this.top);
      this.right = Math.floor(this.right);
      this.bottom = Math.floor(this.bottom);
      this.left = Math.floor(this.left);
      return this
    }
    ;
    _.Gx.prototype.round = function() {
      this.top = Math.round(this.top);
      this.right = Math.round(this.right);
      this.bottom = Math.round(this.bottom);
      this.left = Math.round(this.left);
      return this
    }
    ;
    var Ix = function(a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d
    }
      , Jx = function(a) {
      return new _.Gx(a.top,a.left + a.width,a.top + a.height,a.left)
    }
      , Kx = function(a, b) {
      var c = Math.max(a.left, b.left)
        , d = Math.min(a.left + a.width, b.left + b.width);
      if (c <= d) {
        var e = Math.max(a.top, b.top);
        a = Math.min(a.top + a.height, b.top + b.height);
        if (e <= a)
          return new Ix(c,e,d - c,a - e)
      }
      return null
    };
    Ix.prototype.ceil = function() {
      this.left = Math.ceil(this.left);
      this.top = Math.ceil(this.top);
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this
    }
    ;
    Ix.prototype.floor = function() {
      this.left = Math.floor(this.left);
      this.top = Math.floor(this.top);
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this
    }
    ;
    Ix.prototype.round = function() {
      this.left = Math.round(this.left);
      this.top = Math.round(this.top);
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this
    }
    ;
    var Lx = function(a) {
      return (a = void 0 === a ? te() : a) ? _.qe(a.master) ? a.master : null : null
    };
    var Ox, Ah, Ci, Qx, Rx, zi;
    _.Nx = function(a, b, c) {
      if ("string" === typeof b)
        (b = _.Mx(a, b)) && (a.style[b] = c);
      else
        for (var d in b) {
          c = a;
          var e = b[d]
            , f = _.Mx(c, d);
          f && (c.style[f] = e)
        }
    }
    ;
    Ox = {};
    _.Mx = function(a, b) {
      var c = Ox[b];
      if (!c) {
        var d = _.Rw(b);
        c = d;
        void 0 === a.style[d] && (d = (Ut ? "Webkit" : Tt ? "Moz" : _.Rt ? "ms" : null) + Sw(d),
        void 0 !== a.style[d] && (c = d));
        Ox[b] = c
      }
      return c
    }
    ;
    _.Px = function(a, b) {
      var c = _.Uw(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    ;
    Ah = function(a, b) {
      return _.Px(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    ;
    Ci = function(a) {
      try {
        return a.getBoundingClientRect()
      } catch (b) {
        return {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      }
    }
    ;
    Qx = function(a) {
      if (_.Rt && !(8 <= Number(cu)))
        return a.offsetParent;
      var b = _.Uw(a)
        , c = Ah(a, "position")
        , d = "fixed" == c || "absolute" == c;
      for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (11 == a.nodeType && a.host && (a = a.host),
          c = Ah(a, "position"),
          d = d && "static" == c && a != b.documentElement && a != b.body,
        !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
          return a;
      return null
    }
    ;
    Rx = function(a) {
      var b = _.Uw(a)
        , c = new _.Ai(0,0);
      var d = b ? _.Uw(b) : document;
      d = !_.Rt || 9 <= Number(cu) || _.Yw(Vw(d).j) ? d.documentElement : d.body;
      if (a == d)
        return c;
      a = Ci(a);
      d = Vw(b).j;
      b = $w(d);
      d = d.parentWindow || d.defaultView;
      b = _.Rt && d.pageYOffset != b.scrollTop ? new _.Ai(b.scrollLeft,b.scrollTop) : new _.Ai(d.pageXOffset || b.scrollLeft,d.pageYOffset || b.scrollTop);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c
    }
    ;
    zi = function(a, b) {
      var c = new _.Ai(0,0)
        , d = _.ax(_.Uw(a));
      if (!Pt(d, "parent"))
        return c;
      do {
        var e = d == b ? Rx(a) : _.Sx(a);
        c.x += e.x;
        c.y += e.y
      } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
      return c
    }
    ;
    _.Sx = function(a) {
      a = Ci(a);
      return new _.Ai(a.left,a.top)
    }
    ;
    _.Tx = function(a, b) {
      "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
      return a
    }
    ;
    _.Bh = function(a, b) {
      if ("none" != Ah(b, "display"))
        return a(b);
      var c = b.style
        , d = c.display
        , e = c.visibility
        , f = c.position;
      c.visibility = "hidden";
      c.position = "absolute";
      c.display = "inline";
      a = a(b);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a
    }
    ;
    _.Ch = function(a) {
      var b = a.offsetWidth
        , c = a.offsetHeight
        , d = Ut && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ci(a),
        new _.Di(a.right - a.left,a.bottom - a.top)) : new _.Di(b,c)
    }
    ;
    var Dj = function(a) {
      a = Lx(te(a)) || a;
      a = a.google_unique_id;
      return "number" === typeof a ? a : 0
    };
    var Ux = function(a, b) {
      if (_.v.globalThis.fetch)
        _.v.globalThis.fetch(a, {
          method: "POST",
          body: b,
          keepalive: 65536 > b.length,
          credentials: "omit",
          mode: "no-cors",
          redirect: "follow"
        }).catch(function() {});
      else {
        var c = new XMLHttpRequest;
        c.open("POST", a, !0);
        c.send(b)
      }
    };
    var Vx = function(a) {
      _.Q.call(this, a)
    };
    _.N(Vx, _.Q);
    var Wx = function(a) {
      _.Q.call(this, a)
    };
    _.N(Wx, _.Q);
    var Vh = function(a) {
      _.Q.call(this, a)
    };
    _.N(Vh, _.Q);
    var Qh = function(a) {
      _.Q.call(this, a)
    };
    _.N(Qh, _.Q);
    var Nh = function(a) {
      _.Q.call(this, a)
    };
    _.N(Nh, _.Q);
    var Xx = function(a) {
      _.Q.call(this, a)
    };
    _.N(Xx, _.Q);
    var Mh = function(a) {
      _.Q.call(this, a, -1, Yx)
    };
    _.N(Mh, _.Q);
    Mh.prototype.getTagSessionCorrelator = function() {
      return _.$e(this, 2)
    }
    ;
    var Yx = [4]
      , Sh = [6, 7, 8, 9, 11];
    var ei = function(a) {
      _.Q.call(this, a, -1, Zx)
    };
    _.N(ei, _.Q);
    var Zx = [3];
    var ci = function(a) {
      _.Q.call(this, a, -1, $x)
    };
    _.N(ci, _.Q);
    var $x = [4, 5];
    var bi = function(a) {
      _.Q.call(this, a, -1, ay)
    };
    _.N(bi, _.Q);
    bi.prototype.getTagSessionCorrelator = function() {
      return _.$e(this, 1)
    }
    ;
    var ay = [2];
    var ai = function(a) {
      _.Q.call(this, a)
    };
    _.N(ai, _.Q);
    var hi = [4];
    _.S = function() {
      this.G = this.G;
      this.ga = this.ga
    }
    ;
    _.S.prototype.G = !1;
    _.S.prototype.Ca = function() {
      this.G || (this.G = !0,
        this.o())
    }
    ;
    _.Kn = function(a, b) {
      _.fo(a, _.Cs(Ae, b))
    }
    ;
    _.fo = function(a, b) {
      a.G ? b() : (a.ga || (a.ga = []),
        a.ga.push(b))
    }
    ;
    _.S.prototype.o = function() {
      if (this.ga)
        for (; this.ga.length; )
          this.ga.shift()()
    }
    ;
    var by = function(a, b, c, d, e) {
      this.l = a;
      this.B = b;
      this.H = c;
      this.m = d;
      this.G = e;
      this.j = [];
      this.o = null
    }
      , cy = function(a) {
      null !== a.o && (clearTimeout(a.o),
        a.o = null);
      if (a.j.length) {
        var b = we(a.j);
        a.B(a.l + "?e=1", b);
        a.j = []
      }
    };
    by.prototype.Ce = function() {
      var a = _.wb.apply(0, arguments)
        , b = this;
      this.G && 65536 <= we(this.j.concat(a)).length && cy(this);
      this.j.push.apply(this.j, _.xe(a));
      this.j.length >= this.m && cy(this);
      this.j.length && null === this.o && (this.o = setTimeout(function() {
        cy(b)
      }, this.H))
    }
    ;
    _.Ur = function(a, b, c) {
      by.call(this, "https://pagead2.googlesyndication.com/pagead/ping", Ux, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!_.v.globalThis.fetch)
    }
    ;
    _.N(_.Ur, by);
    var V = function(a, b) {
      this.j = a;
      this.defaultValue = void 0 === b ? !1 : b
    }
      , dy = function(a, b) {
      this.j = a;
      this.defaultValue = void 0 === b ? 0 : b
    }
      , ey = function(a, b) {
      this.j = a;
      this.defaultValue = void 0 === b ? "" : b
    }
      , fy = function(a) {
      var b = void 0 === b ? [] : b;
      this.j = a;
      this.defaultValue = b
    };
    var gy, hy, iy, jy, Ej, ky, xo, ly, my, ny, xn, oy, py, qy, ry, sy, ty, Dq, uy, vy, mr, wy, xy, yy, zy, Ay, By, Cy, Dy, Ey, Fy, Tp, Gy, Hy, Xq, Iy, Jy, dg, Ky, Ly, Pp, My, Ny, Oy, Lm, Py, Qy, Ry, Xh, Sy, Ty, Uy, Vy, Wy, Xy, Yy, Zy, $y, yr, az, Cl, zl, bz, cz, $i, Jp, fz, gz, hz, iz, jz, sm, kz, lz, Tr, mz, nz, oz, Zj, pz, qz, rz, sz, tz, uz, vz, wz, xz, yz, zz, Az, ag, $f, Bz, Cz, Lr, Mr, Em, Nr, Kr, Dz, Ez, Np, Fz, Hn, Gz, Xz, Yz;
    gy = new V(1122,!0);
    hy = new V(511245204);
    iy = new ey(3);
    jy = new fy(481);
    Ej = new dy(7,.1);
    ky = new V(212);
    xo = new dy(474069761);
    ly = new V(490560535,!0);
    my = new dy(455645877);
    ny = new dy(462420536);
    xn = new V(476475256);
    oy = new dy(448338836,.01);
    py = new dy(427198696);
    qy = new dy(438663674);
    ry = new V(509922597);
    sy = new V(23);
    ty = new V(369430);
    Dq = new V(510178293);
    uy = new V(513037477);
    vy = new V(477812799);
    mr = new V(492519751,!0);
    wy = new V(511381047);
    xy = new dy(408380992,.01);
    yy = new dy(377289019,1E4);
    zy = new dy(488);
    Ay = new dy(529,20);
    By = new ey(10);
    Cy = new V(489217043);
    Dy = new V(495013820);
    Ey = new dy(428094087);
    Fy = new V(492198798,!0);
    Tp = new dy(447000223,.01);
    Gy = new V(360245597,!0);
    Hy = new dy(494,1E4);
    Xq = new V(485209195);
    Iy = new V(499996722);
    Jy = new V(471855283);
    dg = new V(465118388);
    Ky = new V(220);
    Ly = new V(200);
    Pp = new V(494337909);
    My = new V(503331120);
    Ny = new V(512833161);
    Oy = new V(512474096);
    Lm = new dy(492,.01);
    Py = new dy(363650251);
    Qy = new dy(474872234);
    Ry = new V(83);
    Xh = new V(85);
    Sy = new V(437061931);
    Ty = new fy(466086960);
    Uy = new V(45388169);
    Vy = new dy(398776877,6E4);
    Wy = new dy(374201269,6E4);
    Xy = new dy(371364213,6E4);
    Yy = new dy(376149757,.0025);
    Zy = new V(453275889);
    $y = new V(377936516,!0);
    yr = new V(512710196);
    az = new dy(24);
    Cl = new fy(1);
    zl = new ey(2,"1-0-40");
    bz = new V(441529989);
    cz = new V(437308144);
    $i = new dy(504377075);
    Jp = new V(508745064);
    _.dz = new dy(506394061,100);
    _.ez = new dy(506394060);
    fz = new V(510521772);
    gz = new fy(489);
    hz = new V(392065905);
    iz = new dy(360245595,500);
    jz = new V(510486687);
    sm = new V(45397804);
    kz = new V(45398607);
    lz = new V(424117738);
    Tr = new dy(397316938,1E3);
    mz = new V(512195429);
    nz = new V(512150702);
    oz = new V(440148282,!0);
    Zj = new V(507033477);
    pz = new V(399705355);
    qz = new V(512684324);
    rz = new V(491464096);
    sz = new V(502572081);
    tz = new V(501);
    uz = new V(439828594);
    vz = new V(483962503);
    wz = new dy(494575051);
    xz = new fy(489560439);
    yz = new fy(505762507);
    zz = new V(453);
    Az = new V(454);
    ag = new fy(471270390);
    $f = new V(478009624);
    Bz = new V(512522806);
    Cz = new V(506738118);
    Lr = new V(77);
    Mr = new V(78);
    Em = new V(309);
    Nr = new V(80);
    Kr = new V(76);
    Dz = new V(84);
    Ez = new V(1958);
    Np = new V(1973);
    Fz = new V(188);
    Hn = new V(1975);
    Gz = new V(1974);
    _.Hz = new dy(1972);
    _.Iz = new V(504787204);
    _.Jz = new V(1162);
    _.Kz = new dy(1157);
    _.Lz = new V(494741144);
    _.Mz = new dy(1119,300);
    _.Nz = new dy(1103);
    _.Oz = new V(505942137);
    _.Pz = new dy(1116,300);
    _.Qz = new V(1121);
    _.Rz = new V(45388161);
    _.Sz = new dy(469675170,3E4);
    _.Tz = new V(506619840);
    _.Uz = new V(506852289);
    _.Vz = new V(504535903,!0);
    _.Wz = new V(502896280);
    Xz = new V(485990406);
    Yz = new V(501411886,!0);
    var Zz = function(a, b, c, d, e, f) {
      try {
        var g = a.j
          , h = _.Be("SCRIPT", g);
        h.async = !0;
        nb(h, b);
        g.head.appendChild(h);
        h.addEventListener("load", function() {
          e();
          d && g.head.removeChild(h)
        });
        h.addEventListener("error", function() {
          0 < c ? Zz(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h),
            f())
        })
      } catch (k) {
        f()
      }
    }
      , $z = function(a, b, c, d) {
      c = void 0 === c ? function() {}
        : c;
      d = void 0 === d ? function() {}
        : d;
      Zz(Vw(a), b, 0, !1, c, d)
    };
    Ha({
      Ki: 0,
      Ji: 1,
      Gi: 2,
      Bi: 3,
      Hi: 4,
      Ci: 5,
      Ii: 6,
      Ei: 7,
      Fi: 8,
      Ai: 9,
      Di: 10
    }).map(function(a) {
      return Number(a)
    });
    Ha({
      Mi: 0,
      Ni: 1,
      Li: 2
    }).map(function(a) {
      return Number(a)
    });
    var aA = function(a) {
      var b = a.document
        , c = function() {
        if (!a.frames.googlefcPresent)
          if (b.body) {
            var d = _.Be("IFRAME", b);
            d.style.display = "none";
            d.style.width = "0px";
            d.style.height = "0px";
            d.style.border = "none";
            d.style.zIndex = "-1000";
            d.style.left = "-1000px";
            d.style.top = "-1000px";
            d.name = "googlefcPresent";
            b.body.appendChild(d)
          } else
            a.setTimeout(c, 5)
      };
      c()
    };
    var bA = function(a, b, c, d, e) {
      De(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
    }
      , Xe = function(a, b) {
      var c = void 0 === c ? !1 : c;
      var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
      _.Gl(a, function(e, f) {
        e && (d += "&" + f + "=" + encodeURIComponent(e))
      });
      To(d, c)
    }
      , To = function(a, b) {
      var c = window;
      b = void 0 === b ? !1 : b;
      var d = void 0 === d ? !1 : d;
      c.fetch ? (b = {
        keepalive: !0,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors"
      },
      d && (b.mode = "cors",
        b.headers = {
          "Attribution-Reporting-Eligible": "event-source"
        }),
        c.fetch(a, b)) : bA(c, a, void 0, b, d)
    };
    var cA = function(a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , dA = function(a, b) {
      b = void 0 === b ? {} : b;
      _.S.call(this);
      this.m = a;
      this.j = null;
      this.l = {};
      this.L = 0;
      var c;
      this.A = null != (c = b.Qa) ? c : 500;
      var d;
      this.H = null != (d = b.Yf) ? d : !1;
      this.B = null
    };
    _.N(dA, _.S);
    dA.prototype.o = function() {
      this.l = {};
      this.B && (_.Ce(this.m, "message", this.B),
        delete this.B);
      delete this.l;
      delete this.m;
      delete this.j;
      _.S.prototype.o.call(this)
    }
    ;
    var fA = function(a) {
      return "function" === typeof a.m.__tcfapi || null != eA(a)
    };
    dA.prototype.addEventListener = function(a) {
      var b = this
        , c = {
        internalBlockOnErrors: this.H
      }
        , d = _.Ls(function() {
        return a(c)
      })
        , e = 0;
      -1 !== this.A && (e = setTimeout(function() {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d()
      }, this.A));
      var f = function(g, h) {
        clearTimeout(e);
        g ? (c = g,
          c.internalErrorState = cA(c),
          c.internalBlockOnErrors = b.H,
        h && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
        h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
          c.internalErrorState = 3);
        a(c)
      };
      try {
        gA(this, "addEventListener", f)
      } catch (g) {
        c.tcString = "tcunavailable",
          c.internalErrorState = 3,
        e && (clearTimeout(e),
          e = 0),
          d()
      }
    }
    ;
    dA.prototype.removeEventListener = function(a) {
      a && a.listenerId && gA(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var hA = function(a, b) {
      var c = void 0 === c ? "755" : c;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var d = a.publisher.restrictions[b];
          if (void 0 !== d) {
            d = d[void 0 === c ? "755" : c];
            break a
          }
        }
        d = void 0
      }
      if (0 === d)
        return !1;
      a.purpose && a.vendor ? (d = a.vendor.consents,
        (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents,
          c = !(!a || !a[b])),
          b = c)) : b = !0;
      return b
    }
      , gA = function(a, b, c, d) {
      c || (c = function() {}
      );
      if ("function" === typeof a.m.__tcfapi)
        a = a.m.__tcfapi,
          a(b, 2, c, d);
      else if (eA(a)) {
        iA(a);
        var e = ++a.L;
        a.l[e] = c;
        a.j && (c = {},
          a.j.postMessage((c.__tcfapiCall = {
            command: b,
            version: 2,
            callId: e,
            parameter: d
          },
            c), "*"))
      } else
        c({}, !1)
    }
      , eA = function(a) {
      if (a.j)
        return a.j;
      a.j = ux(a.m, "__tcfapiLocator");
      return a.j
    }
      , iA = function(a) {
      a.B || (a.B = function(b) {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.l[c.callId](c.returnValue, c.success)
        } catch (d) {}
      }
        ,
        _.yb(a.m, "message", a.B))
    }
      , jA = function(a) {
      if (!1 === a.gdprApplies)
        return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = cA(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Xe({
        e: String(a.internalErrorState)
      }, "tcfe"),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }
      , kA = function(a, b) {
      return !1 === a.gdprApplies ? !0 : b.every(function(c) {
        return hA(a, c)
      })
    };
    var lA = function(a, b, c) {
      this.j = a;
      this.m = b;
      this.o = void 0 === c ? function() {}
        : c
    }
      , mA = function(a, b, c) {
      return new lA(a,b,c)
    };
    lA.prototype.start = function() {
      if (this.j === this.j.top)
        try {
          aA(this.j),
            nA(this)
        } catch (a) {}
    }
    ;
    var nA = function(a) {
      var b = Hb(Is("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
        id: a.m,
        ers: 3
      });
      $z(a.j, b, function() {
        a.o(!0)
      }, function() {
        a.o(!1)
      })
    };
    var oA = _.v.Promise;
    var pA = function(a) {
      this.m = a
    };
    pA.prototype.o = function(a, b, c) {
      this.m.then(function(d) {
        d.o(a, b, c)
      })
    }
    ;
    pA.prototype.j = function(a, b) {
      return this.m.then(function(c) {
        return c.j(a, b)
      })
    }
    ;
    var qA = function(a) {
      this.data = a
    };
    var rA = function(a) {
      this.m = a
    };
    rA.prototype.o = function(a, b, c) {
      c = void 0 === c ? [] : c;
      var d = new MessageChannel;
      sA(d.port1, b);
      this.m.postMessage(a, [d.port2].concat(c))
    }
    ;
    rA.prototype.j = function(a, b) {
      var c = this;
      return new oA(function(d) {
          c.o(a, d, b)
        }
      )
    }
    ;
    var tA = function(a, b) {
      sA(a, b);
      return new rA(a)
    }
      , sA = function(a, b) {
      b && (a.onmessage = function(c) {
          b(new qA(c.data,tA(c.ports[0])))
        }
      )
    };
    var Xj = function(a) {
      var b = a.kd
        , c = void 0 === a.Sa ? "ZNWN1d" : a.Sa
        , d = void 0 === a.onMessage ? void 0 : a.onMessage
        , e = void 0 === a.zd ? void 0 : a.zd;
      return uA({
        destination: a.destination,
        ff: function() {
          return b.contentWindow
        },
        hh: vA(a.origin),
        Sa: c,
        onMessage: d,
        zd: e
      })
    }
      , uA = function(a) {
      var b = a.destination
        , c = a.ff
        , d = a.hh
        , e = void 0 === a.Fe ? void 0 : a.Fe
        , f = a.Sa
        , g = void 0 === a.onMessage ? void 0 : a.onMessage
        , h = void 0 === a.zd ? void 0 : a.zd
        , k = Object.create(null);
      d.forEach(function(l) {
        k[l] = !0
      });
      return new pA(new oA(function(l, m) {
          var n = function(p) {
            p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1),
              e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(tA(p.ports[0], g)),
              h && h(p)))
          };
          b.addEventListener("message", n, !1)
        }
      ))
    }
      , vA = function(a) {
      a = "string" === typeof a ? [a] : a;
      var b = Object.create(null);
      a.forEach(function(c) {
        if ("null" === c)
          throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
        b[c] = !0
      });
      return a
    };
    var di = (0,
      C.ge)(function(a) {
      return "string" === typeof a
    }, "string");
    var wA = navigator
      , xA = function(a) {
      var b = 1, c;
      if (void 0 != a && "" != a)
        for (b = 0,
               c = a.length - 1; 0 <= c; c--) {
          var d = a.charCodeAt(c);
          b = (b << 6 & 268435455) + d + (d << 14);
          d = b & 266338304;
          b = 0 != d ? b ^ d >> 21 : b
        }
      return b
    }
      , yA = function(a, b) {
      if (!a || "none" == a)
        return 1;
      a = String(a);
      "auto" == a && (a = b,
      "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
      return xA(a.toLowerCase())
    }
      , zA = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$")
      , AA = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$")
      , BA = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var xi = function(a) {
      return !!a && a.top == a
    }
      , CA = function(a, b, c) {
      b = b || a.google_ad_width;
      c = c || a.google_ad_height;
      if (xi(a))
        return !1;
      var d = a.document
        , e = d.documentElement;
      if (b && c) {
        var f = 1
          , g = 1;
        a.innerHeight ? (f = a.innerWidth,
          g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth,
          g = e.clientHeight) : d.body && (f = d.body.clientWidth,
          g = d.body.clientHeight);
        if (g > 2 * c || f > 2 * b)
          return !1
      }
      return !0
    };
    var DA = function(a) {
      a = void 0 === a ? window : a;
      return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
    };
    var xj = function() {
      this.j = [];
      this.o = -1
    };
    xj.prototype.set = function(a, b) {
      b = void 0 === b ? !0 : b;
      0 <= a && 52 > a && _.u(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b,
        this.o = -1)
    }
    ;
    xj.prototype.get = function(a) {
      return !!this.j[a]
    }
    ;
    var zj = function(a) {
      -1 === a.o && (a.o = Qs(a.j, function(b, c, d) {
        return c ? b + Math.pow(2, d) : b
      }));
      return a.o
    };
    var Qe = function(a) {
      _.Q.call(this, a)
    };
    _.N(Qe, _.Q);
    var Le = function(a) {
      var b = new Qe;
      return _.id(b, 1, a, 0)
    }
      , Ke = function(a, b) {
      return _.id(a, 2, b, 0)
    };
    var Oe = function(a) {
      _.Q.call(this, a, -1, EA)
    };
    _.N(Oe, _.Q);
    var Je = function(a, b) {
      _.Yf(a, 1, Qe, b)
    }
      , Ie = je(Oe)
      , EA = [1];
    var FA = function(a, b, c, d) {
      _.S.call(this);
      this.J = b;
      this.F = c;
      this.D = d;
      this.L = new _.v.Map;
      this.P = 0;
      this.l = new _.v.Map;
      this.A = new _.v.Map;
      this.H = new _.v.Map;
      this.B = void 0;
      this.m = a
    };
    _.N(FA, _.S);
    FA.prototype.o = function() {
      delete this.j;
      this.L.clear();
      this.l.clear();
      this.A.clear();
      this.H.clear();
      this.B && (_.Ce((0,
        C.I)(this.m), "message", this.B),
        delete this.B);
      delete this.m;
      delete this.D;
      _.S.prototype.o.call(this)
    }
    ;
    var GA = function(a) {
      if (a.j)
        return a.j;
      a.F && a.F((0,
        C.I)(a.m)) ? a.j = a.m : a.j = ux((0,
        C.I)(a.m), a.J);
      var b;
      return null != (b = a.j) ? b : null
    }
      , IA = function(a, b) {
      if (GA(a))
        if (a.j === a.m) {
          var c = a.L.get("getDataWithCallback");
          c && c((0,
            C.I)(a.j), b)
        } else if ((c = a.l.get("getDataWithCallback")) && c.ke) {
          HA(a);
          var d = ++a.P;
          a.A.set(d, c.qf);
          a.H.set(d, c.mf(b));
          a.j.postMessage(c.ke(b, d), "*")
        }
    }
      , HA = function(a) {
      a.B || (a.B = function(b) {
        try {
          var c = a.D ? a.D(b) : void 0;
          if (c) {
            var d = c.ye
              , e = a.A.get(d);
            if (e) {
              a.A.delete(d);
              var f = a.H.get(c.ye);
              a.H.delete(d);
              e(f, c.payload)
            }
          }
        } catch (g) {}
      }
        ,
        _.yb((0,
          C.I)(a.m), "message", a.B))
    };
    var JA = function(a, b) {
      (0,
        C.I)(a.__uspapi)("getUSPData", 1, function(c, d) {
        b.kc({
          lc: null != c ? c : void 0,
          Ze: d ? void 0 : 2
        })
      })
    }
      , KA = {
      mf: function(a) {
        return a.kc
      },
      ke: function(a, b) {
        a = {};
        return a.__uspapiCall = {
          callId: b,
          command: "getUSPData",
          version: 1
        },
          a
      },
      qf: function(a, b) {
        b = b.__uspapiReturn;
        var c;
        a({
          lc: null != (c = b.returnValue) ? c : void 0,
          Ze: b.success ? void 0 : 2
        })
      }
    }
      , LA = function(a) {
      _.S.call(this);
      this.caller = new FA(a,"__uspapiLocator",function(b) {
          return "function" === typeof b.__uspapi
        }
        ,Ye);
      this.caller.L.set("getDataWithCallback", JA);
      this.caller.l.set("getDataWithCallback", KA)
    };
    _.N(LA, _.S);
    LA.prototype.o = function() {
      this.caller.Ca();
      _.S.prototype.o.call(this)
    }
    ;
    LA.prototype.l = function() {
      return !!GA(this.caller)
    }
    ;
    LA.prototype.A = function(a) {
      var b = {};
      if (this.l()) {
        var c = _.Ls(function() {
          a(b)
        });
        IA(this.caller, {
          kc: function(d) {
            d.Ze || (b = (0,
              C.I)(d.lc));
            c()
          }
        });
        setTimeout(c, 500)
      } else
        a(b)
    }
    ;
    var NA = function(a) {
      _.Q.call(this, a, -1, MA)
    };
    _.N(NA, _.Q);
    var MA = [1, 2];
    var OA = function(a) {
      _.Q.call(this, a)
    };
    _.N(OA, _.Q);
    var Ze = je(OA);
    var PA = function(a, b) {
      a = a.googlefc || (a.googlefc = {});
      a.__fci = a.__fci || [];
      a.__fci.push(b.command, function(c) {
        c = Ze(c);
        b.kc({
          lc: c
        })
      })
    }
      , QA = {
      mf: function(a) {
        return a.kc
      },
      ke: function(a, b) {
        var c = {};
        return c.__fciCall = {
          callId: b,
          command: a.command
        },
          c
      },
      qf: function(a, b) {
        a({
          lc: b
        })
      }
    }
      , In = function(a) {
      _.S.call(this);
      this.j = null;
      this.B = !1;
      this.caller = new FA(a,"googlefcPresent",void 0,af);
      this.caller.L.set("getDataWithCallback", PA);
      this.caller.l.set("getDataWithCallback", QA)
    };
    _.N(In, _.S);
    In.prototype.o = function() {
      this.caller.Ca();
      _.S.prototype.o.call(this)
    }
    ;
    In.prototype.m = function() {
      this.B || (this.j = GA(this.caller),
        this.B = !0);
      return !!this.j
    }
    ;
    In.prototype.L = function() {
      var a = this;
      return new _.v.Promise(function(b) {
          a.m() && IA(a.caller, {
            command: "loaded",
            kc: function(c) {
              b((0,
                C.I)(c.lc))
            }
          })
        }
      )
    }
    ;
    var df = function(a) {
      this.j = a || {
        cookie: ""
      }
    }
      , TA = function() {
      var a = RA;
      if (!_.q.navigator.cookieEnabled)
        return !1;
      if (!a.isEmpty())
        return !0;
      a.set("TESTCOOKIESENABLED", "1", {
        me: 60
      });
      if ("1" !== a.get("TESTCOOKIESENABLED"))
        return !1;
      SA(a, "TESTCOOKIESENABLED");
      return !0
    };
    df.prototype.set = function(a, b, c) {
      var d = !1;
      if ("object" === typeof c) {
        var e = c.vj;
        d = c.Ah || !1;
        var f = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.me
      }
      if (/[;=\s]/.test(a))
        throw Error('Invalid cookie name "' + a + '"');
      if (/[;\r\n]/.test(b))
        throw Error('Invalid cookie value "' + b + '"');
      void 0 === h && (h = -1);
      this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    }
    ;
    df.prototype.get = function(a, b) {
      for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = Cr(d[e]);
        if (0 == f.lastIndexOf(c, 0))
          return f.slice(c.length);
        if (f == a)
          return ""
      }
      return b
    }
    ;
    var SA = function(a, b, c, d) {
      a.get(b);
      a.set(b, "", {
        me: 0,
        path: c,
        domain: d
      })
    };
    df.prototype.isEmpty = function() {
      return !this.j.cookie
    }
    ;
    df.prototype.clear = function() {
      for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++)
        e = Cr(a[f]),
          d = e.indexOf("="),
          -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
      for (a = b.length - 1; 0 <= a; a--)
        SA(this, b[a])
    }
    ;
    var RA = new df("undefined" == typeof document ? null : document);
    _.UA = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var YA, XA, $A, ZA;
    _.VA = function() {
      this.m = "&";
      this.o = {};
      this.G = 0;
      this.j = []
    }
    ;
    _.WA = function(a, b) {
      var c = {};
      c[a] = b;
      return [c]
    }
    ;
    YA = function(a, b, c, d, e) {
      var f = [];
      _.Gl(a, function(g, h) {
        (g = XA(g, b, c, d, e)) && f.push(h + "=" + g)
      });
      return f.join(b)
    }
    ;
    XA = function(a, b, c, d, e) {
      if (null == a)
        return "";
      b = b || "&";
      c = c || ",$";
      "string" == typeof c && (c = c.split(""));
      if (a instanceof Array) {
        if (d = d || 0,
        d < c.length) {
          for (var f = [], g = 0; g < a.length; g++)
            f.push(XA(a[g], b, c, d + 1, e));
          return f.join(c[d])
        }
      } else if ("object" == typeof a)
        return e = e || 0,
          2 > e ? encodeURIComponent(YA(a, b, c, d, e + 1)) : "...";
      return encodeURIComponent(String(a))
    }
    ;
    $A = function(a, b) {
      var c = "https://pagead2.googlesyndication.com" + b
        , d = ZA(a) - b.length;
      if (0 > d)
        return "";
      a.j.sort(function(m, n) {
        return m - n
      });
      b = null;
      for (var e = "", f = 0; f < a.j.length; f++)
        for (var g = a.j[f], h = a.o[g], k = 0; k < h.length; k++) {
          if (!d) {
            b = null == b ? g : b;
            break
          }
          var l = YA(h[k], a.m, ",$");
          if (l) {
            l = e + l;
            if (d >= l.length) {
              d -= l.length;
              c += l;
              e = a.m;
              break
            }
            b = null == b ? g : b
          }
        }
      a = "";
      null != b && (a = e + "trn=" + b);
      return c + a
    }
    ;
    ZA = function(a) {
      var b = 1, c;
      for (c in a.o)
        b = c.length > b ? c.length : b;
      return 3997 - b - a.m.length - 1
    }
    ;
    _.aB = function() {
      this.j = _.F(My) ? .001 : _.Lh(23);
      this.o = Math.random()
    }
    ;
    _.Dh = function(a, b, c, d, e) {
      if (((void 0 === d ? 0 : d) ? a.o : Math.random()) < (e || a.j))
        try {
          if (c instanceof _.VA)
            var f = c;
          else
            f = new _.VA,
              _.Gl(c, function(h, k) {
                var l = f
                  , m = l.G++;
                h = _.WA(k, h);
                l.j.push(m);
                l.o[m] = h
              });
          var g = $A(f, "/pagead/gen_204?id=" + b + "&");
          g && bA(_.q, g)
        } catch (h) {}
    }
    ;
    var bB = null
      , cB = function() {
      if (null === bB) {
        bB = "";
        try {
          var a = "";
          try {
            a = _.q.top.location.hash
          } catch (c) {
            a = _.q.location.hash
          }
          if (a) {
            var b = a.match(/\bdeid=([\d,]+)/);
            bB = b ? b[1] : ""
          }
        } catch (c) {}
      }
      return bB
    };
    var dB = function(a, b, c, d, e) {
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = void 0 === d ? 0 : d;
      this.uniqueId = Math.random();
      this.slotId = e;
      this.taskId = void 0
    };
    var eB, fB, gB, hB, iB;
    eB = _.q.performance;
    fB = !!(eB && eB.mark && eB.measure && eB.clearMarks);
    gB = gj(function() {
      var a;
      if (a = fB)
        a = cB(),
          a = !!a.indexOf && 0 <= a.indexOf("1337");
      return a
    });
    hB = function(a, b) {
      this.o = [];
      var c = null;
      b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
        this.o = b.google_js_reporting_queue,
        c = b.google_measure_js_timing);
      this.j = gB() || (null != c ? c : Math.random() < a)
    }
    ;
    _.Zh = function(a) {
      a && eB && gB() && (eB.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
        eB.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    ;
    iB = function(a, b, c, d, e, f) {
      a.j && (b = new dB(b,c,d,void 0 === e ? 0 : e,f),
      !a.j || 2048 < a.o.length || a.o.push(b))
    }
    ;
    hB.prototype.start = function(a, b) {
      if (!this.j)
        return null;
      a = new dB(a,b,_.hf() || _.gf());
      b = "goog_" + a.label + "_" + a.uniqueId + "_start";
      eB && gB() && eB.mark(b);
      return a
    }
    ;
    hB.prototype.end = function(a) {
      if (this.j && "number" === typeof a.value) {
        a.duration = (_.hf() || _.gf()) - a.value;
        var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
        eB && gB() && eB.mark(b);
        !this.j || 2048 < this.o.length || this.o.push(a)
      }
    }
    ;
    var xq = function(a, b, c) {
      var d = _.hf();
      d && iB(a, b, 9, d, 0, c)
    };
    _.jB = function(a, b) {
      try {
        -1 == a.indexOf(b) && (a = b + "\n" + a);
        for (var c; a != c; )
          c = a,
            a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
        return a.replace(RegExp("\n *", "g"), "\n")
      } catch (d) {
        return b
      }
    }
    ;
    var wm = function(a) {
      a = Error.call(this, a);
      this.message = a.message;
      "stack"in a && (this.stack = a.stack);
      _.u(Object, "setPrototypeOf").call(Object, this, wm.prototype)
    };
    _.N(wm, Error);
    wm.prototype.name = "PublisherInputError";
    var kB = function(a) {
      a = Error.call(this, a);
      this.message = a.message;
      "stack"in a && (this.stack = a.stack);
      _.u(Object, "setPrototypeOf").call(Object, this, kB.prototype)
    };
    _.N(kB, Error);
    kB.prototype.name = "ServerError";
    var lB = function(a) {
      a = Error.call(this, a);
      this.message = a.message;
      "stack"in a && (this.stack = a.stack);
      _.u(Object, "setPrototypeOf").call(Object, this, lB.prototype)
    };
    _.N(lB, Error);
    lB.prototype.name = "NetworkError";
    _.mf = function(a) {
      var b = "Bb";
      if (a.Bb && a.hasOwnProperty(b))
        return a.Bb;
      b = new a;
      return a.Bb = b
    }
    ;
    var nf = function() {};
    nf.prototype.o = function() {}
    ;
    nf.prototype.G = function() {}
    ;
    nf.prototype.m = function() {
      return []
    }
    ;
    nf.prototype.j = function() {
      return []
    }
    ;
    var Mg = function(a, b) {
      a.o = lf(1, b, function() {});
      a.m = function(c) {
        return lf(2, b, function() {
          return []
        })(c, 2)
      }
      ;
      a.j = function() {
        return lf(3, b, function() {
          return []
        })(2)
      }
      ;
      a.G = function(c) {
        lf(16, b, function() {})(c, 2)
      }
    };
    var mB = function() {};
    mB.j = function() {
      throw Error("Must be overridden");
    }
    ;
    var qf = function() {
      this.j = 0
    };
    _.N(qf, mB);
    qf.Bb = void 0;
    qf.j = function() {
      return qf.Bb ? qf.Bb : qf.Bb = new qf
    }
    ;
    var nB = function() {
      this.cache = {}
    }
      , vf = function() {
      oB || (oB = new nB);
      return oB
    }
      , Zf = function(a) {
      var b = y(a, 3);
      if (!b)
        return 3;
      if (void 0 === y(a, 2))
        return 4;
      a = Date.now();
      return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
    };
    nB.prototype.get = function(a, b) {
      if (this.cache[a])
        return {
          vb: this.cache[a],
          success: !0
        };
      var c = "";
      try {
        c = b.getItem("_GESPSK-" + a)
      } catch (g) {
        var d;
        sf(6, a, null == (d = g) ? void 0 : d.message);
        return {
          vb: null,
          success: !1
        }
      }
      if (!c)
        return {
          vb: null,
          success: !0
        };
      try {
        var e = hw(c);
        this.cache[a] = e;
        return {
          vb: e,
          success: !0
        }
      } catch (g) {
        var f;
        sf(5, a, null == (f = g) ? void 0 : f.message);
        return {
          vb: null,
          success: !1
        }
      }
    }
    ;
    nB.prototype.set = function(a, b) {
      var c = (0,
        C.I)(y(a, 1))
        , d = "_GESPSK-" + c;
      _.z(a, 3, Date.now());
      try {
        b.setItem(d, Me(a))
      } catch (f) {
        var e;
        sf(7, c, null == (e = f) ? void 0 : e.message);
        return !1
      }
      this.cache[c] = a;
      return !0
    }
    ;
    var oB = null;
    var wf = function(a) {
      return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    var Lf = function() {
      var a = {};
      this.j = function(b, c) {
        return null != a[b] ? a[b] : c
      }
      ;
      this.o = function(b, c) {
        return null != a[b] ? a[b] : c
      }
      ;
      this.m = function(b, c) {
        return null != a[b] ? a[b] : c
      }
      ;
      this.G = function(b, c) {
        return null != a[b] ? a[b] : c
      }
      ;
      this.B = function() {}
    };
    var pB = function(a) {
      _.S.call(this);
      this.H = a;
      this.m = [];
      this.j = [];
      this.l = [];
      this.B = []
    };
    _.N(pB, _.S);
    var rB = function(a, b, c) {
      a.j.push({
        wb: void 0 === c ? !1 : c,
        ab: b
      });
      _.F(Jy) && qB(b, a.H)
    };
    pB.prototype.o = function() {
      this.m.length = 0;
      this.l.length = 0;
      if (_.F(Jy))
        for (var a = _.x(this.j), b = a.next(); !b.done; b = a.next())
          b.value.ab.Pd();
      this.j.length = 0;
      this.B.length = 0;
      _.S.prototype.o.call(this)
    }
    ;
    _.jh = function() {
      var a = this;
      this.promise = new _.v.Promise(function(b, c) {
          a.resolve = b;
          a.reject = c
        }
      )
    }
    ;
    var sB = function(a) {
      a = Error.call(this, a);
      this.message = a.message;
      "stack"in a && (this.stack = a.stack);
      _.u(Object, "setPrototypeOf").call(Object, this, sB.prototype);
      this.name = "InputError"
    };
    _.N(sB, Error);
    var tB = function() {
      this.Va = !1
    }
      , uB = function() {
      tB.apply(this, arguments);
      this.j = [];
      this.Cd = new _.jh
    };
    _.N(uB, tB);
    var O = function(a, b) {
      a.Va || (a.Va = !0,
        a.Pb = b,
        a.Cd.resolve(b),
      _.F(Jy) && vB(a))
    }
      , wB = function(a, b) {
      a.Va = !0;
      a.ve = b;
      a.Cd.reject(b);
      _.F(Jy) && vB(a)
    }
      , vB = function(a) {
      for (var b = _.x(a.j), c = b.next(); !c.done; c = b.next())
        c = c.value,
          c(a.Pb);
      a.j.length = 0
    };
    uB.prototype.Pd = function() {
      this.j.length = 0
    }
    ;
    var qB = function(a, b) {
      _.F(Jy) && a.j.push(b)
    };
    _.Zr.Object.defineProperties(uB.prototype, {
      promise: {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this.Cd.promise
        }
      },
      Xa: {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this.Va
        }
      },
      error: {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this.ve
        }
      }
    });
    var Lq = function() {
      uB.apply(this, arguments)
    };
    _.N(Lq, uB);
    var xB = function(a, b) {
      O(a, b)
    }
      , yB = function(a, b) {
      O(a, null != b ? b : null)
    }
      , zB = function(a) {
      O(a, null)
    }
      , AB = function(a, b) {
      b.then(function(c) {
        O(a, c)
      })
    };
    Lq.prototype.Ia = function(a) {
      this.Va || (this.Va = !0,
        this.Pb = null,
        this.ve = a,
        this.Cd.reject(a),
      _.F(Jy) && vB(this))
    }
    ;
    var BB = function(a) {
      this.Va = !1;
      this.rb = a
    };
    _.N(BB, tB);
    BB.prototype.Xa = function() {
      return this.rb.Va
    }
    ;
    BB.prototype.uc = function() {
      return null != this.rb.Pb
    }
    ;
    _.Zr.Object.defineProperties(BB.prototype, {
      error: {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this.rb.ve
        }
      }
    });
    var CB = function(a) {
      BB.call(this, a);
      this.rb = a
    };
    _.N(CB, BB);
    _.Zr.Object.defineProperties(CB.prototype, {
      value: {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return (0,
            C.I)(this.rb.Pb)
        }
      }
    });
    var DB = function(a) {
      BB.call(this, a);
      this.rb = a
    };
    _.N(DB, BB);
    _.Zr.Object.defineProperties(DB.prototype, {
      value: {
        configurable: !0,
        enumerable: !0,
        get: function() {
          var a;
          return null != (a = this.rb.Pb) ? a : null
        }
      }
    });
    var EB = function() {
      BB.apply(this, arguments)
    };
    _.N(EB, BB);
    _.Zr.Object.defineProperties(EB.prototype, {
      value: {
        configurable: !0,
        enumerable: !0,
        get: function() {
          var a;
          return null != (a = this.rb.Pb) ? a : null
        }
      }
    });
    var FB = function() {
      uB.apply(this, arguments)
    };
    _.N(FB, uB);
    FB.prototype.notify = function() {
      O(this, null)
    }
    ;
    var GB = function(a, b) {
      b.then(function() {
        a.notify()
      })
    }
      , HB = function(a, b) {
      b = void 0 === b ? !1 : b;
      uB.call(this);
      var c = this;
      this.m = a;
      this.o = 0;
      if (_.F(Jy)) {
        a = {};
        for (var d = _.x(this.m), e = d.next(); !e.done; a = {
          bc: a.bc
        },
          e = d.next())
          a.bc = e.value,
            qB(a.bc, function(f) {
              return function(g) {
                c.o += 1;
                f.bc.error ? wB(c, f.bc.error) : b || null !== g ? O(c, null != g ? g : null) : c.o === c.m.length && O(c, null)
              }
            }(a))
      } else
        a = a.map(function(f) {
          return f.promise.then(function(g) {
            if (b || null != g)
              return g;
            throw g;
          }, function(g) {
            wB(c, g);
            return null
          })
        }),
          _.u(_.v.Promise, "any").call(_.v.Promise, a).then(function(f) {
            c.Va || O(c, f)
          }, function() {
            c.Va || O(c, null)
          })
    };
    _.N(HB, uB);
    var IB = function(a, b) {
      uB.call(this);
      this.Qa = a;
      this.defaultValue = b
    };
    _.N(IB, uB);
    var eg = function(a) {
      setTimeout(function() {
        var b;
        O(a, null != (b = a.defaultValue) ? b : null)
      }, a.Qa)
    };
    var KB = function(a, b) {
      _.S.call(this);
      var c = this;
      this.id = a;
      this.Qa = b;
      this.ma = this.ja = this.ha = this.L = !1;
      this.Fa = -1;
      this.B = new pB(function() {
          JB(c)
        }
      );
      _.Kn(this, this.B)
    };
    _.N(KB, _.S);
    KB.prototype.start = function() {
      var a = this, b, c;
      return _.Ab(function(d) {
        switch (d.j) {
          case 1:
            if (a.L)
              return d.return();
            a.L = !0;
            d.m = 2;
            b = a;
            return Bb(d, fg(a.B.j, a.B.B, a.Qa), 4);
          case 4:
            b.Fa = d.o;
            if (a.G) {
              d.j = 5;
              break
            }
            for (var e = 0, f = _.x(a.B.l), g = f.next(); !g.done; g = f.next()) {
              if (!g.value.uc())
                throw Error("missing input: " + a.id + "/" + e);
              ++e
            }
            return Bb(d, a.j(), 5);
          case 5:
            Eb(d, 0);
            break;
          case 2:
            c = Fb(d);
            if (a.G)
              return d.return();
            c instanceof sB ? a.H(c) : c instanceof Error && (a.P(c),
              a.m(c));
            d.j = 0
        }
      })
    }
    ;
    var JB = function(a) {
      if (!a.L && a.ha)
        try {
          var b = a.B.j, c = a.Qa ? b.filter(function(k) {
            return !k.wb
          }) : b, d = b.filter(function(k) {
            return k.wb
          }), e, f = null == (e = _.u(b, "find").call(b, function(k) {
            return void 0 !== k.ab.error
          })) ? void 0 : e.ab.error;
          if (f)
            throw a.L = !0,
              f;
          if (!c.some(function(k) {
            return !k.ab.Xa
          })) {
            if (d.length)
              if (_.F(dg)) {
                for (var g = _.x(a.B.B), h = g.next(); !h.done; h = g.next())
                  eg(h.value);
                if (d.some(function(k) {
                  return !k.ab.Xa
                }))
                  return
              } else if (a.ja || (a.ja = !0,
                setTimeout(function() {
                  a.ma = !0;
                  JB(a)
                }, a.Qa)),
              d.some(function(k) {
                return !k.ab.Xa
              }) && !a.ma)
                return;
            a.L = !0;
            a.j()
          }
        } catch (k) {
          a.G || (k instanceof sB ? a.H(k) : k instanceof Error && (a.P(k),
            a.m(k)))
        }
    }
      , W = function(a) {
      var b = new Lq;
      a.B.m.push(b);
      return b
    }
      , LB = function(a) {
      var b = new FB;
      a.B.m.push(b);
      return b
    }
      , X = function(a, b) {
      rB(a.B, b);
      b = new CB(b);
      a.B.l.push(b);
      return b
    }
      , Y = function(a, b) {
      rB(a.B, b);
      return new DB(b)
    }
      , MB = function(a, b) {
      if (_.F(dg)) {
        if (a.Qa) {
          var c = new IB(a.Qa,void 0);
          b = new HB([b, c],!0);
          rB(a.B, b, !0);
          a.B.B.push(c);
          return new DB(b)
        }
        rB(a.B, b);
        return new DB(b)
      }
      rB(a.B, b, !0);
      return new DB(b)
    }
      , NB = function(a, b) {
      rB(a.B, b)
    }
      , OB = function(a, b) {
      if (_.F(dg))
        if (a.Qa) {
          var c = new IB(a.Qa);
          b = new HB([b, c],!0);
          rB(a.B, b, !0);
          a.B.B.push(c)
        } else
          NB(a, b);
      else
        rB(a.B, b, !0)
    }
      , PB = function(a, b) {
      b = new HB(b);
      rB(a.B, b);
      b = new CB(b);
      a.B.l.push(b);
      return b
    };
    KB.prototype.H = function() {}
    ;
    KB.prototype.m = function(a) {
      if (this.B.m.length) {
        a = new sB(a.message);
        for (var b = _.x(this.B.m), c = b.next(); !c.done; c = b.next())
          c = c.value,
          c.Xa || wB(c, a)
      }
    }
    ;
    var QB = function(a, b) {
      KB.call(this, a);
      this.id = a;
      this.D = b
    };
    _.N(QB, KB);
    QB.prototype.P = function(a) {
      this.D(this.id, a)
    }
    ;
    var kg = function(a, b, c, d) {
      QB.call(this, 1041, d);
      this.storage = b;
      this.l = c;
      this.F = X(this, a);
      this.l && (this.A = X(this, this.l))
    };
    _.N(kg, QB);
    kg.prototype.j = function() {
      var a = this.F.value, b, c, d = (0,
        C.I)(null != (c = null == (b = this.A) ? void 0 : b.value) ? c : this.storage);
      vf().set(a, d) && _.cg(a, 2) && sf(27, (0,
        C.I)(y(a, 1)))
    }
    ;
    var mg = function(a, b) {
      QB.call(this, 1048, b);
      this.l = W(this);
      this.A = W(this);
      this.F = X(this, a)
    };
    _.N(mg, QB);
    mg.prototype.j = function() {
      var a = this.F.value
        , b = function(c) {
        var d = {};
        sf(c, (0,
          C.I)(y(a, 1)), null, (d.tic = String(Math.round((Date.now() - (0,
          C.I)(y(a, 3))) / 6E4)),
          d))
      };
      switch (Zf(a)) {
        case 0:
          b(24);
          break;
        case 1:
          b(25);
          O(this.A, a);
          break;
        case 2:
          b(26);
          O(this.l, a);
          break;
        case 3:
          sf(9, (0,
            C.I)(y(a, 1)));
          O(this.l, a);
          break;
        case 4:
          b(23),
            O(this.l, a)
      }
    }
    ;
    var RB = function(a, b, c) {
      QB.call(this, 1094, c);
      this.storage = a;
      this.l = LB(this);
      b && (this.A = X(this, b))
    };
    _.N(RB, QB);
    RB.prototype.j = function() {
      var a, b, c = (0,
        C.I)(null != (b = null == (a = this.A) ? void 0 : a.value) ? b : this.storage);
      if (void 0 !== c)
        for (a = _.x(_.u(Object, "keys").call(Object, c)),
               b = a.next(); !b.done; b = a.next())
          if (b = b.value,
            _.u(b, "startsWith").call(b, "_GESPSK"))
            try {
              c.removeItem(b)
            } catch (d) {}
      oB = new nB;
      this.l.notify()
    }
    ;
    var Dg = function(a, b, c) {
      QB.call(this, 1049, c);
      this.storage = b;
      NB(this, a)
    };
    _.N(Dg, QB);
    Dg.prototype.j = function() {
      for (var a = _.x(Kf(this.storage)), b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        var c = vf().get(b, this.storage).vb;
        if (c) {
          var d = Zf(c);
          if (2 === d || 3 === d) {
            d = void 0;
            var e = vf();
            c = (0,
              C.I)(y(c, 1));
            try {
              this.storage.removeItem("_GESPSK-" + c),
                delete e.cache[c]
            } catch (f) {
              sf(8, c, null == (d = f) ? void 0 : d.message)
            }
            sf(40, b)
          }
        }
      }
    }
    ;
    var qg = function(a, b, c, d, e) {
      QB.call(this, 658, e);
      this.collectorFunction = a;
      this.storage = c;
      this.l = W(this);
      this.F = W(this);
      this.A = Y(this, b);
      d && (this.J = X(this, d))
    };
    _.N(qg, QB);
    qg.prototype.j = function() {
      var a = this, b, c, d = (0,
        C.I)(null != (c = null == (b = this.J) ? void 0 : b.value) ? c : this.storage);
      if (this.A.value) {
        b = function(g) {
          O(a.l, {
            id: (0,
              C.I)(y(g, 1)),
            collectorGeneratedData: y(g, 2)
          })
        }
        ;
        c = this.A.value;
        var e = (0,
          C.I)(y(c, 1))
          , f = Zf(c);
        gg(c);
        switch (f) {
          case 0:
            b(c);
            break;
          case 1:
            b(c);
            O(this.F, c);
            break;
          case 3:
          case 2:
          case 4:
            _.z(c, 2, null),
              xf(e, c, this.collectorFunction, d).then(b)
        }
      } else
        zB(this.l)
    }
    ;
    var jg = function(a, b, c, d) {
      QB.call(this, 1027, d);
      this.Xc = a;
      this.storage = b;
      this.l = W(this);
      this.A = W(this);
      c && (this.F = X(this, c))
    };
    _.N(jg, QB);
    jg.prototype.j = function() {
      var a, b, c = (0,
        C.I)(null != (b = null == (a = this.F) ? void 0 : a.value) ? b : this.storage);
      a = vf().get(this.Xc, c).vb;
      a || (a = Xf(this.Xc),
        a = _.z(a, 3, Date.now()),
        b = a.Ia(yf(new Af, 100)),
        O(this.A, b));
      O(this.l, a)
    }
    ;
    var ng = function(a, b, c) {
      QB.call(this, 1047, c);
      this.collectorFunction = a;
      this.A = W(this);
      this.l = W(this);
      this.F = W(this);
      this.J = X(this, b)
    };
    _.N(ng, QB);
    ng.prototype.j = function() {
      var a = this
        , b = this.J.value
        , c = (0,
        C.I)(y(b, 1));
      sf(18, c);
      try {
        var d = _.gf();
        this.collectorFunction().then(function(e) {
          sf(29, c, null, {
            delta: String(_.gf() - d)
          });
          var f = _.z(b, 2, e);
          O(a.A, f);
          yB(a.F, e)
        }).catch(function(e) {
          sf(28, c, hg(e));
          e = b.Ia(yf(new Af, 106));
          O(a.l, e)
        })
      } catch (e) {
        sf(1, c, hg(e)),
          xB(this.l, b.Ia(yf(new Af, 107)))
      }
    }
    ;
    var rg = function(a, b, c, d, e) {
      QB.call(this, 662, e);
      this.A = a;
      this.storage = c;
      this.F = X(this, b);
      d && (this.l = X(this, d))
    };
    _.N(rg, QB);
    rg.prototype.j = function() {
      var a = this, b, c, d = (0,
        C.I)(null != (c = null == (b = this.l) ? void 0 : b.value) ? c : this.storage);
      Bf().then(function() {
        var e = (0,
          C.I)(a.F.value);
        xf((0,
          C.I)(y(e, 1)), e, a.A, d)
      })
    }
    ;
    var lg = function(a, b) {
      QB.call(this, 1028, b);
      this.l = W(this);
      this.A = X(this, a)
    };
    _.N(lg, QB);
    lg.prototype.j = function() {
      var a = this.A.value
        , b = (0,
        C.I)(y(a, 1));
      null != y(a, 3) || sf(35, b);
      O(this.l, a)
    }
    ;
    var og = function(a, b, c, d, e) {
      QB.call(this, 1050, e);
      this.J = c;
      this.F = d;
      this.l = W(this);
      this.A = X(this, a);
      this.M = Y(this, b)
    };
    _.N(og, QB);
    og.prototype.j = function() {
      var a = this.A.value
        , b = (0,
        C.I)(y(a, 1))
        , c = this.M.value;
      if (null == c)
        sf(41, b),
          a.Ia(yf(new Af, 111));
      else if ("string" !== typeof c)
        sf(21, b);
      else if (c.length)
        if (c.length > (/^(\d+)$/.test(b) ? this.F : this.J)) {
          var d = {};
          sf(12, b, null, (d.sl = String(c.length),
            d));
          b = a.Ia(yf(new Af, 108));
          uf(b, 2)
        } else
          uf(a, 10);
      else
        sf(20, b);
      O(this.l, a)
    }
    ;
    var ig = function() {
      _.S.apply(this, arguments);
      this.l = [];
      this.A = [];
      this.H = {};
      this.j = [];
      this.m = new _.jh
    };
    _.N(ig, _.S);
    var G = function(a, b) {
      _.Kn(a, b);
      a.l.push(b)
    }
      , sg = function(a, b) {
      b = _.x(b);
      for (var c = b.next(); !c.done; c = b.next())
        G(a, c.value)
    }
      , tg = function(a) {
      var b, c, d, e, f, g, h, k, l, m, n, p;
      _.Ab(function(r) {
        switch (r.j) {
          case 1:
            if (!a.j.length) {
              r.j = 2;
              break
            }
            return Bb(r, _.v.Promise.all(a.j.map(function(t) {
              return t.m.promise
            })), 2);
          case 2:
            b = _.x(a.l);
            for (c = b.next(); !c.done; c = b.next())
              d = c.value,
                _.F(Jy) ? (d.ha = !0,
                  JB(d)) : d.start();
            e = _.x(a.A);
            for (f = e.next(); !f.done; f = e.next())
              g = f.value,
                tg(g);
            if (!a.B || !_.u(Object, "keys").call(Object, a.B).length) {
              r.j = 4;
              break
            }
            h = _.u(Object, "keys").call(Object, a.B);
            return Bb(r, _.v.Promise.all(_.u(Object, "values").call(Object, a.B).map(function(t) {
              return t.promise
            })), 5);
          case 5:
            for (k = r.o,
                   l = 0,
                   m = _.x(h),
                   n = m.next(); !n.done; n = m.next())
              p = n.value,
                a.H[p] = k[l++];
          case 4:
            return a.m.resolve(a.H),
              r.return(a.m.promise)
        }
      })
    };
    ig.prototype.o = function() {
      _.S.prototype.o.call(this);
      this.l.length = 0;
      this.A.length = 0;
      this.j.length = 0
    }
    ;
    var SB = function(a, b, c, d, e) {
      QB.call(this, 1059, e);
      this.F = b;
      this.storage = c;
      this.A = d;
      this.l = W(this);
      this.J = X(this, a)
    };
    _.N(SB, QB);
    SB.prototype.j = function() {
      var a = this.J.value, b = a.id, c = a.collectorFunction, d;
      a = (0,
        C.I)(null != (d = a.networkCode) ? d : b);
      b = {};
      sf(42, a, null, (b.ea = String(Number(this.F)),
        b));
      AB(this.l, ug(a, c, this.storage, this.A, this.D))
    }
    ;
    var TB = function(a, b) {
      QB.call(this, 1057, b);
      this.l = a;
      this.A = W(this);
      this.F = W(this)
    };
    _.N(TB, QB);
    TB.prototype.j = function() {
      if (this.l)
        if ("object" !== typeof this.l)
          sf(46, "UNKNOWN_COLLECTOR_ID"),
            UB(this, "UNKNOWN_COLLECTOR_ID", 112);
        else {
          var a = this.l.id
            , b = this.l.networkCode;
          a && b && (delete this.l.id,
            sf(47, a + ";" + b));
          a = null != b ? b : a;
          "string" !== typeof a ? (b = {},
            sf(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a),
              b)),
            UB(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.l.collectorFunction ? (sf(14, a),
            UB(this, a, 105)) : (_.D = Of(yz),
            _.u(_.D, "includes")).call(_.D, a) ? (sf(22, a),
            UB(this, a, 104)) : O(this.F, this.l)
        }
      else
        sf(39, "UNKNOWN_COLLECTOR_ID"),
          UB(this, "UNKNOWN_COLLECTOR_ID", 110)
    }
    ;
    var UB = function(a, b, c) {
      b = Xf(b).Ia(yf(new Af, c));
      O(a.A, b)
    };
    var Ag = function(a, b, c, d) {
      var e = void 0 === e ? document : e;
      this.storage = b;
      this.j = c;
      this.l = d;
      this.W = e;
      this.B = [];
      this.G = [];
      this.m = [];
      this.o = 0;
      a = _.x(a);
      for (b = a.next(); !b.done; b = a.next())
        this.push(b.value)
    };
    _.aa = Ag.prototype;
    _.aa.push = function(a) {
      a = new TB(a,this.Qc);
      var b = new kg(a.A,this.storage,this.j,this.Qc)
        , c = new SB(a.F,this.l,this.storage,this.j,this.Qc)
        , d = new ig;
      sg(d, [a, b, c]);
      tg(d);
      a = c.l.promise;
      this.B.push(a);
      b = _.x(this.G);
      for (c = b.next(); !c.done; c = b.next())
        a.then(c.value)
    }
    ;
    _.aa.addOnSignalResolveCallback = function(a) {
      this.G.push(a);
      for (var b = _.x(this.B), c = b.next(); !c.done; c = b.next())
        c.value.then(a)
    }
    ;
    _.aa.addErrorHandler = function(a) {
      this.m.push(a)
    }
    ;
    _.aa.clearAllCache = function() {
      var a = this
        , b = this.W.currentScript instanceof HTMLScriptElement ? this.W.currentScript.src : "";
      if (1 === this.o) {
        var c = {};
        sf(49, "", null, (c.url = b,
          c))
      } else if (c = String(_.si(null != b ? b : "")),
        (_.D = Of(xz),
          _.u(_.D, "includes")).call(_.D, c))
        c = {},
          sf(48, "", null, (c.url = b,
            c));
      else {
        var d = new ig;
        c = new RB(this.storage,this.j,this.Qc);
        G(d, c);
        tg(d);
        this.o = 1;
        setTimeout(function() {
          a.o = 0
        }, 1E3 * _.Mf(wz));
        d = {};
        sf(43, "", null, (d.url = b,
          d));
        return c.l.promise
      }
    }
    ;
    _.aa.Qc = function(a, b) {
      for (var c = _.x(this.m), d = c.next(); !d.done; d = c.next())
        d = d.value,
          d(a, b)
    }
    ;
    var Bg = function(a) {
      this.push = function(b) {
        a.push(b)
      }
      ;
      this.addOnSignalResolveCallback = function(b) {
        a.addOnSignalResolveCallback(b)
      }
      ;
      this.addErrorHandler = function(b) {
        a.addErrorHandler(b)
      }
      ;
      this.clearAllCache = function() {
        a.clearAllCache()
      }
    };
    var Gg = function(a, b) {
      QB.call(this, 1036, b);
      this.l = W(this);
      this.A = X(this, a)
    };
    _.N(Gg, QB);
    Gg.prototype.j = function() {
      var a = this.A.value;
      0 !== Zf(a) && O(this.l, a)
    }
    ;
    var Hg = function(a, b, c) {
      QB.call(this, 1035, c);
      this.A = b;
      this.l = W(this);
      this.F = X(this, a)
    };
    _.N(Hg, QB);
    Hg.prototype.j = function() {
      var a = this
        , b = this.F.value
        , c = (0,
        C.I)(y(b, 1))
        , d = this.A.toString()
        , e = {};
      sf(30, c, null, (e.url = d,
        e));
      var f = document.createElement("script");
      f.setAttribute("esp-signal", "true");
      nb(f, this.A);
      var g = function() {
        var h = {};
        sf(31, (0,
          C.I)(c), null, (h.url = d,
          h));
        h = b.Ia(yf(new Af, 109));
        O(a.l, h);
        _.Ce(f, "error", g)
      };
      document.head.appendChild(f);
      _.yb(f, "error", g)
    }
    ;
    var Cg = function(a) {
      QB.call(this, 1046, a);
      this.C = LB(this)
    };
    _.N(Cg, QB);
    Cg.prototype.j = function() {
      var a = this;
      Bf().then(function() {
        return a.C.notify()
      })
    }
    ;
    var Fg = new _.v.Set;
    var VB = 0
      , WB = ue(_.Hs(Is("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Kg = function() {
      this.j = function() {}
    }
      , Og = function(a, b) {
      a.j = lf(14, b, function() {})
    };
    var pi = function(a, b, c) {
      a && null !== b && b != b.top && (b = b.top);
      try {
        return (void 0 === c ? 0 : c) ? (new _.Di(b.innerWidth,b.innerHeight)).round() : _.Zw(b || window).round()
      } catch (d) {
        return new _.Di(-12245933,-12245933)
      }
    }
      , XB = function(a) {
      return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
    }
      , jn = function(a, b) {
      b = void 0 === b ? _.q : b;
      a = a.scrollingElement || XB(a);
      return new _.Ai(b.pageXOffset || a.scrollLeft,b.pageYOffset || a.scrollTop)
    }
      , jj = function(a) {
      try {
        return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
      } catch (b) {
        return !1
      }
    };
    var YB = function(a) {
      _.Q.call(this, a)
    };
    _.N(YB, _.Q);
    var aC, bC, cC;
    _.ZB = function(a, b) {
      this.j = a;
      this.m = void 0 === b ? !1 : b;
      this.o = 0
    }
    ;
    aC = function(a, b) {
      if (0 === a.o) {
        if (_.$B(a, "__gads", b))
          b = !0;
        else {
          var c = a.j;
          E(b, 5) && cf(c) && (new df(c.document)).set("GoogleAdServingTest", "Good", void 0);
          if (c = "Good" === ef("GoogleAdServingTest", b, a.j)) {
            var d = a.j;
            E(b, 5) && cf(d) && SA(new df(d.document), "GoogleAdServingTest")
          }
          b = c
        }
        a.o = b ? 2 : 1
      }
      return 2 === a.o
    }
    ;
    _.$B = function(a, b, c) {
      return c ? ef(b, c, a.j) : null
    }
    ;
    bC = function(a, b, c, d) {
      if (d) {
        var e = y(c, 2) - Date.now() / 1E3;
        e = {
          me: a.m ? Math.max(e, 0) : e,
          path: y(c, 3),
          domain: y(c, 4),
          Ah: !1
        };
        a = a.j;
        E(d, 5) && cf(a) && (new df(a.document)).set(b, y(c, 1), e)
      }
    }
    ;
    cC = function(a, b, c) {
      if (c && ef(b, c, a.j)) {
        var d = a.j.location.hostname;
        if ("localhost" === d)
          d = ["localhost"];
        else if (d = d.split("."),
        2 > d.length)
          d = [];
        else {
          for (var e = [], f = 0; f < d.length - 1; ++f)
            e.push(d.slice(f).join("."));
          d = e
        }
        d = _.x(d);
        for (e = d.next(); !e.done; e = d.next())
          f = a.j,
          E(c, 5) && cf(f) && SA(new df(f.document), b, "/", e.value)
      }
    }
    ;
    var dC = {}
      , eC = (dC[3] = ue(_.Hs(Is("https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))),
      dC);
    ({})[3] = ue(_.Hs(Is("https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var fC = function(a) {
      this.j = a;
      this.o = Pw()
    }
      , gC = function(a) {
      var b = {};
      _.Ps(a, function(c) {
        b[c.j] = c.o
      });
      return b
    };
    var hC = _.P(["https://adservice.google.com/adsid/integrator.", ""])
      , iC = _.P(["https://adservice.google.ad/adsid/integrator.", ""])
      , jC = _.P(["https://adservice.google.ae/adsid/integrator.", ""])
      , kC = _.P(["https://adservice.google.com.af/adsid/integrator.", ""])
      , lC = _.P(["https://adservice.google.com.ag/adsid/integrator.", ""])
      , mC = _.P(["https://adservice.google.com.ai/adsid/integrator.", ""])
      , nC = _.P(["https://adservice.google.al/adsid/integrator.", ""])
      , oC = _.P(["https://adservice.google.co.ao/adsid/integrator.", ""])
      , pC = _.P(["https://adservice.google.com.ar/adsid/integrator.", ""])
      , qC = _.P(["https://adservice.google.as/adsid/integrator.", ""])
      , rC = _.P(["https://adservice.google.at/adsid/integrator.", ""])
      , sC = _.P(["https://adservice.google.com.au/adsid/integrator.", ""])
      , tC = _.P(["https://adservice.google.az/adsid/integrator.", ""])
      , uC = _.P(["https://adservice.google.com.bd/adsid/integrator.", ""])
      , vC = _.P(["https://adservice.google.be/adsid/integrator.", ""])
      , wC = _.P(["https://adservice.google.bf/adsid/integrator.", ""])
      , xC = _.P(["https://adservice.google.bg/adsid/integrator.", ""])
      , yC = _.P(["https://adservice.google.com.bh/adsid/integrator.", ""])
      , zC = _.P(["https://adservice.google.bi/adsid/integrator.", ""])
      , AC = _.P(["https://adservice.google.bj/adsid/integrator.", ""])
      , BC = _.P(["https://adservice.google.com.bn/adsid/integrator.", ""])
      , RC = _.P(["https://adservice.google.com.bo/adsid/integrator.", ""])
      , TC = _.P(["https://adservice.google.com.br/adsid/integrator.", ""])
      , VC = _.P(["https://adservice.google.bs/adsid/integrator.", ""])
      , WC = _.P(["https://adservice.google.bt/adsid/integrator.", ""])
      , XC = _.P(["https://adservice.google.co.bw/adsid/integrator.", ""])
      , YC = _.P(["https://adservice.google.com.bz/adsid/integrator.", ""])
      , ZC = _.P(["https://adservice.google.ca/adsid/integrator.", ""])
      , $C = _.P(["https://adservice.google.cd/adsid/integrator.", ""])
      , aD = _.P(["https://adservice.google.cf/adsid/integrator.", ""])
      , bD = _.P(["https://adservice.google.cg/adsid/integrator.", ""])
      , cD = _.P(["https://adservice.google.ch/adsid/integrator.", ""])
      , dD = _.P(["https://adservice.google.ci/adsid/integrator.", ""])
      , eD = _.P(["https://adservice.google.co.ck/adsid/integrator.", ""])
      , fD = _.P(["https://adservice.google.cl/adsid/integrator.", ""])
      , gD = _.P(["https://adservice.google.cm/adsid/integrator.", ""])
      , hD = _.P(["https://adservice.google.com.co/adsid/integrator.", ""])
      , iD = _.P(["https://adservice.google.co.cr/adsid/integrator.", ""])
      , jD = _.P(["https://adservice.google.com.cu/adsid/integrator.", ""])
      , kD = _.P(["https://adservice.google.cv/adsid/integrator.", ""])
      , lD = _.P(["https://adservice.google.com.cy/adsid/integrator.", ""])
      , mD = _.P(["https://adservice.google.cz/adsid/integrator.", ""])
      , nD = _.P(["https://adservice.google.de/adsid/integrator.", ""])
      , oD = _.P(["https://adservice.google.dj/adsid/integrator.", ""])
      , pD = _.P(["https://adservice.google.dk/adsid/integrator.", ""])
      , qD = _.P(["https://adservice.google.dm/adsid/integrator.", ""])
      , rD = _.P(["https://adservice.google.dz/adsid/integrator.", ""])
      , sD = _.P(["https://adservice.google.com.ec/adsid/integrator.", ""])
      , tD = _.P(["https://adservice.google.ee/adsid/integrator.", ""])
      , uD = _.P(["https://adservice.google.com.eg/adsid/integrator.", ""])
      , vD = _.P(["https://adservice.google.es/adsid/integrator.", ""])
      , wD = _.P(["https://adservice.google.com.et/adsid/integrator.", ""])
      , xD = _.P(["https://adservice.google.fi/adsid/integrator.", ""])
      , yD = _.P(["https://adservice.google.com.fj/adsid/integrator.", ""])
      , zD = _.P(["https://adservice.google.fm/adsid/integrator.", ""])
      , AD = _.P(["https://adservice.google.fr/adsid/integrator.", ""])
      , BD = _.P(["https://adservice.google.ga/adsid/integrator.", ""])
      , CD = _.P(["https://adservice.google.ge/adsid/integrator.", ""])
      , DD = _.P(["https://adservice.google.gg/adsid/integrator.", ""])
      , ED = _.P(["https://adservice.google.com.gh/adsid/integrator.", ""])
      , FD = _.P(["https://adservice.google.com.gi/adsid/integrator.", ""])
      , GD = _.P(["https://adservice.google.gl/adsid/integrator.", ""])
      , HD = _.P(["https://adservice.google.gm/adsid/integrator.", ""])
      , ID = _.P(["https://adservice.google.gr/adsid/integrator.", ""])
      , JD = _.P(["https://adservice.google.com.gt/adsid/integrator.", ""])
      , KD = _.P(["https://adservice.google.gy/adsid/integrator.", ""])
      , LD = _.P(["https://adservice.google.com.hk/adsid/integrator.", ""])
      , MD = _.P(["https://adservice.google.hn/adsid/integrator.", ""])
      , ND = _.P(["https://adservice.google.hr/adsid/integrator.", ""])
      , OD = _.P(["https://adservice.google.ht/adsid/integrator.", ""])
      , PD = _.P(["https://adservice.google.hu/adsid/integrator.", ""])
      , QD = _.P(["https://adservice.google.co.id/adsid/integrator.", ""])
      , RD = _.P(["https://adservice.google.ie/adsid/integrator.", ""])
      , SD = _.P(["https://adservice.google.co.il/adsid/integrator.", ""])
      , TD = _.P(["https://adservice.google.im/adsid/integrator.", ""])
      , UD = _.P(["https://adservice.google.co.in/adsid/integrator.", ""])
      , VD = _.P(["https://adservice.google.iq/adsid/integrator.", ""])
      , WD = _.P(["https://adservice.google.is/adsid/integrator.", ""])
      , XD = _.P(["https://adservice.google.it/adsid/integrator.", ""])
      , YD = _.P(["https://adservice.google.je/adsid/integrator.", ""])
      , ZD = _.P(["https://adservice.google.com.jm/adsid/integrator.", ""])
      , $D = _.P(["https://adservice.google.jo/adsid/integrator.", ""])
      , aE = _.P(["https://adservice.google.co.jp/adsid/integrator.", ""])
      , bE = _.P(["https://adservice.google.co.ke/adsid/integrator.", ""])
      , cE = _.P(["https://adservice.google.com.kh/adsid/integrator.", ""])
      , dE = _.P(["https://adservice.google.ki/adsid/integrator.", ""])
      , eE = _.P(["https://adservice.google.kg/adsid/integrator.", ""])
      , fE = _.P(["https://adservice.google.co.kr/adsid/integrator.", ""])
      , gE = _.P(["https://adservice.google.com.kw/adsid/integrator.", ""])
      , hE = _.P(["https://adservice.google.kz/adsid/integrator.", ""])
      , iE = _.P(["https://adservice.google.la/adsid/integrator.", ""])
      , jE = _.P(["https://adservice.google.com.lb/adsid/integrator.", ""])
      , kE = _.P(["https://adservice.google.li/adsid/integrator.", ""])
      , lE = _.P(["https://adservice.google.lk/adsid/integrator.", ""])
      , mE = _.P(["https://adservice.google.co.ls/adsid/integrator.", ""])
      , nE = _.P(["https://adservice.google.lt/adsid/integrator.", ""])
      , oE = _.P(["https://adservice.google.lu/adsid/integrator.", ""])
      , pE = _.P(["https://adservice.google.lv/adsid/integrator.", ""])
      , qE = _.P(["https://adservice.google.com.ly/adsid/integrator.", ""])
      , rE = _.P(["https://adservice.google.md/adsid/integrator.", ""])
      , sE = _.P(["https://adservice.google.me/adsid/integrator.", ""])
      , tE = _.P(["https://adservice.google.mg/adsid/integrator.", ""])
      , uE = _.P(["https://adservice.google.mk/adsid/integrator.", ""])
      , vE = _.P(["https://adservice.google.ml/adsid/integrator.", ""])
      , wE = _.P(["https://adservice.google.com.mm/adsid/integrator.", ""])
      , xE = _.P(["https://adservice.google.mn/adsid/integrator.", ""])
      , yE = _.P(["https://adservice.google.ms/adsid/integrator.", ""])
      , zE = _.P(["https://adservice.google.com.mt/adsid/integrator.", ""])
      , AE = _.P(["https://adservice.google.mu/adsid/integrator.", ""])
      , BE = _.P(["https://adservice.google.mv/adsid/integrator.", ""])
      , CE = _.P(["https://adservice.google.mw/adsid/integrator.", ""])
      , DE = _.P(["https://adservice.google.com.mx/adsid/integrator.", ""])
      , EE = _.P(["https://adservice.google.com.my/adsid/integrator.", ""])
      , FE = _.P(["https://adservice.google.co.mz/adsid/integrator.", ""])
      , GE = _.P(["https://adservice.google.com.na/adsid/integrator.", ""])
      , HE = _.P(["https://adservice.google.com.ng/adsid/integrator.", ""])
      , IE = _.P(["https://adservice.google.com.ni/adsid/integrator.", ""])
      , JE = _.P(["https://adservice.google.ne/adsid/integrator.", ""])
      , KE = _.P(["https://adservice.google.nl/adsid/integrator.", ""])
      , LE = _.P(["https://adservice.google.no/adsid/integrator.", ""])
      , ME = _.P(["https://adservice.google.com.np/adsid/integrator.", ""])
      , NE = _.P(["https://adservice.google.nr/adsid/integrator.", ""])
      , OE = _.P(["https://adservice.google.nu/adsid/integrator.", ""])
      , PE = _.P(["https://adservice.google.co.nz/adsid/integrator.", ""])
      , QE = _.P(["https://adservice.google.com.om/adsid/integrator.", ""])
      , RE = _.P(["https://adservice.google.com.pa/adsid/integrator.", ""])
      , SE = _.P(["https://adservice.google.com.pe/adsid/integrator.", ""])
      , TE = _.P(["https://adservice.google.com.pg/adsid/integrator.", ""])
      , UE = _.P(["https://adservice.google.com.ph/adsid/integrator.", ""])
      , VE = _.P(["https://adservice.google.com.pk/adsid/integrator.", ""])
      , WE = _.P(["https://adservice.google.pl/adsid/integrator.", ""])
      , XE = _.P(["https://adservice.google.pn/adsid/integrator.", ""])
      , YE = _.P(["https://adservice.google.com.pr/adsid/integrator.", ""])
      , ZE = _.P(["https://adservice.google.ps/adsid/integrator.", ""])
      , $E = _.P(["https://adservice.google.pt/adsid/integrator.", ""])
      , aF = _.P(["https://adservice.google.com.py/adsid/integrator.", ""])
      , bF = _.P(["https://adservice.google.com.qa/adsid/integrator.", ""])
      , cF = _.P(["https://adservice.google.ro/adsid/integrator.", ""])
      , dF = _.P(["https://adservice.google.rw/adsid/integrator.", ""])
      , eF = _.P(["https://adservice.google.com.sa/adsid/integrator.", ""])
      , fF = _.P(["https://adservice.google.com.sb/adsid/integrator.", ""])
      , gF = _.P(["https://adservice.google.sc/adsid/integrator.", ""])
      , hF = _.P(["https://adservice.google.se/adsid/integrator.", ""])
      , iF = _.P(["https://adservice.google.com.sg/adsid/integrator.", ""])
      , jF = _.P(["https://adservice.google.sh/adsid/integrator.", ""])
      , kF = _.P(["https://adservice.google.si/adsid/integrator.", ""])
      , lF = _.P(["https://adservice.google.sk/adsid/integrator.", ""])
      , mF = _.P(["https://adservice.google.sn/adsid/integrator.", ""])
      , nF = _.P(["https://adservice.google.so/adsid/integrator.", ""])
      , oF = _.P(["https://adservice.google.sm/adsid/integrator.", ""])
      , pF = _.P(["https://adservice.google.sr/adsid/integrator.", ""])
      , qF = _.P(["https://adservice.google.st/adsid/integrator.", ""])
      , rF = _.P(["https://adservice.google.com.sv/adsid/integrator.", ""])
      , sF = _.P(["https://adservice.google.td/adsid/integrator.", ""])
      , tF = _.P(["https://adservice.google.tg/adsid/integrator.", ""])
      , uF = _.P(["https://adservice.google.co.th/adsid/integrator.", ""])
      , vF = _.P(["https://adservice.google.com.tj/adsid/integrator.", ""])
      , wF = _.P(["https://adservice.google.tl/adsid/integrator.", ""])
      , xF = _.P(["https://adservice.google.tm/adsid/integrator.", ""])
      , yF = _.P(["https://adservice.google.tn/adsid/integrator.", ""])
      , zF = _.P(["https://adservice.google.to/adsid/integrator.", ""])
      , AF = _.P(["https://adservice.google.com.tr/adsid/integrator.", ""])
      , BF = _.P(["https://adservice.google.tt/adsid/integrator.", ""])
      , CF = _.P(["https://adservice.google.com.tw/adsid/integrator.", ""])
      , DF = _.P(["https://adservice.google.co.tz/adsid/integrator.", ""])
      , EF = _.P(["https://adservice.google.com.ua/adsid/integrator.", ""])
      , FF = _.P(["https://adservice.google.co.ug/adsid/integrator.", ""])
      , GF = _.P(["https://adservice.google.co.uk/adsid/integrator.", ""])
      , HF = _.P(["https://adservice.google.com.uy/adsid/integrator.", ""])
      , IF = _.P(["https://adservice.google.co.uz/adsid/integrator.", ""])
      , JF = _.P(["https://adservice.google.com.vc/adsid/integrator.", ""])
      , KF = _.P(["https://adservice.google.co.ve/adsid/integrator.", ""])
      , LF = _.P(["https://adservice.google.vg/adsid/integrator.", ""])
      , MF = _.P(["https://adservice.google.co.vi/adsid/integrator.", ""])
      , NF = _.P(["https://adservice.google.com.vn/adsid/integrator.", ""])
      , OF = _.P(["https://adservice.google.vu/adsid/integrator.", ""])
      , PF = _.P(["https://adservice.google.ws/adsid/integrator.", ""])
      , QF = _.P(["https://adservice.google.rs/adsid/integrator.", ""])
      , RF = _.P(["https://adservice.google.co.za/adsid/integrator.", ""])
      , SF = _.P(["https://adservice.google.co.zm/adsid/integrator.", ""])
      , TF = _.P(["https://adservice.google.co.zw/adsid/integrator.", ""])
      , UF = _.P(["https://adservice.google.cat/adsid/integrator.", ""])
      , VF = new _.v.Map([[".google.com", function(a) {
      return _.A(hC, a)
    }
    ], [".google.ad", function(a) {
      return _.A(iC, a)
    }
    ], [".google.ae", function(a) {
      return _.A(jC, a)
    }
    ], [".google.com.af", function(a) {
      return _.A(kC, a)
    }
    ], [".google.com.ag", function(a) {
      return _.A(lC, a)
    }
    ], [".google.com.ai", function(a) {
      return _.A(mC, a)
    }
    ], [".google.al", function(a) {
      return _.A(nC, a)
    }
    ], [".google.co.ao", function(a) {
      return _.A(oC, a)
    }
    ], [".google.com.ar", function(a) {
      return _.A(pC, a)
    }
    ], [".google.as", function(a) {
      return _.A(qC, a)
    }
    ], [".google.at", function(a) {
      return _.A(rC, a)
    }
    ], [".google.com.au", function(a) {
      return _.A(sC, a)
    }
    ], [".google.az", function(a) {
      return _.A(tC, a)
    }
    ], [".google.com.bd", function(a) {
      return _.A(uC, a)
    }
    ], [".google.be", function(a) {
      return _.A(vC, a)
    }
    ], [".google.bf", function(a) {
      return _.A(wC, a)
    }
    ], [".google.bg", function(a) {
      return _.A(xC, a)
    }
    ], [".google.com.bh", function(a) {
      return _.A(yC, a)
    }
    ], [".google.bi", function(a) {
      return _.A(zC, a)
    }
    ], [".google.bj", function(a) {
      return _.A(AC, a)
    }
    ], [".google.com.bn", function(a) {
      return _.A(BC, a)
    }
    ], [".google.com.bo", function(a) {
      return _.A(RC, a)
    }
    ], [".google.com.br", function(a) {
      return _.A(TC, a)
    }
    ], [".google.bs", function(a) {
      return _.A(VC, a)
    }
    ], [".google.bt", function(a) {
      return _.A(WC, a)
    }
    ], [".google.co.bw", function(a) {
      return _.A(XC, a)
    }
    ], [".google.com.bz", function(a) {
      return _.A(YC, a)
    }
    ], [".google.ca", function(a) {
      return _.A(ZC, a)
    }
    ], [".google.cd", function(a) {
      return _.A($C, a)
    }
    ], [".google.cf", function(a) {
      return _.A(aD, a)
    }
    ], [".google.cg", function(a) {
      return _.A(bD, a)
    }
    ], [".google.ch", function(a) {
      return _.A(cD, a)
    }
    ], [".google.ci", function(a) {
      return _.A(dD, a)
    }
    ], [".google.co.ck", function(a) {
      return _.A(eD, a)
    }
    ], [".google.cl", function(a) {
      return _.A(fD, a)
    }
    ], [".google.cm", function(a) {
      return _.A(gD, a)
    }
    ], [".google.com.co", function(a) {
      return _.A(hD, a)
    }
    ], [".google.co.cr", function(a) {
      return _.A(iD, a)
    }
    ], [".google.com.cu", function(a) {
      return _.A(jD, a)
    }
    ], [".google.cv", function(a) {
      return _.A(kD, a)
    }
    ], [".google.com.cy", function(a) {
      return _.A(lD, a)
    }
    ], [".google.cz", function(a) {
      return _.A(mD, a)
    }
    ], [".google.de", function(a) {
      return _.A(nD, a)
    }
    ], [".google.dj", function(a) {
      return _.A(oD, a)
    }
    ], [".google.dk", function(a) {
      return _.A(pD, a)
    }
    ], [".google.dm", function(a) {
      return _.A(qD, a)
    }
    ], [".google.dz", function(a) {
      return _.A(rD, a)
    }
    ], [".google.com.ec", function(a) {
      return _.A(sD, a)
    }
    ], [".google.ee", function(a) {
      return _.A(tD, a)
    }
    ], [".google.com.eg", function(a) {
      return _.A(uD, a)
    }
    ], [".google.es", function(a) {
      return _.A(vD, a)
    }
    ], [".google.com.et", function(a) {
      return _.A(wD, a)
    }
    ], [".google.fi", function(a) {
      return _.A(xD, a)
    }
    ], [".google.com.fj", function(a) {
      return _.A(yD, a)
    }
    ], [".google.fm", function(a) {
      return _.A(zD, a)
    }
    ], [".google.fr", function(a) {
      return _.A(AD, a)
    }
    ], [".google.ga", function(a) {
      return _.A(BD, a)
    }
    ], [".google.ge", function(a) {
      return _.A(CD, a)
    }
    ], [".google.gg", function(a) {
      return _.A(DD, a)
    }
    ], [".google.com.gh", function(a) {
      return _.A(ED, a)
    }
    ], [".google.com.gi", function(a) {
      return _.A(FD, a)
    }
    ], [".google.gl", function(a) {
      return _.A(GD, a)
    }
    ], [".google.gm", function(a) {
      return _.A(HD, a)
    }
    ], [".google.gr", function(a) {
      return _.A(ID, a)
    }
    ], [".google.com.gt", function(a) {
      return _.A(JD, a)
    }
    ], [".google.gy", function(a) {
      return _.A(KD, a)
    }
    ], [".google.com.hk", function(a) {
      return _.A(LD, a)
    }
    ], [".google.hn", function(a) {
      return _.A(MD, a)
    }
    ], [".google.hr", function(a) {
      return _.A(ND, a)
    }
    ], [".google.ht", function(a) {
      return _.A(OD, a)
    }
    ], [".google.hu", function(a) {
      return _.A(PD, a)
    }
    ], [".google.co.id", function(a) {
      return _.A(QD, a)
    }
    ], [".google.ie", function(a) {
      return _.A(RD, a)
    }
    ], [".google.co.il", function(a) {
      return _.A(SD, a)
    }
    ], [".google.im", function(a) {
      return _.A(TD, a)
    }
    ], [".google.co.in", function(a) {
      return _.A(UD, a)
    }
    ], [".google.iq", function(a) {
      return _.A(VD, a)
    }
    ], [".google.is", function(a) {
      return _.A(WD, a)
    }
    ], [".google.it", function(a) {
      return _.A(XD, a)
    }
    ], [".google.je", function(a) {
      return _.A(YD, a)
    }
    ], [".google.com.jm", function(a) {
      return _.A(ZD, a)
    }
    ], [".google.jo", function(a) {
      return _.A($D, a)
    }
    ], [".google.co.jp", function(a) {
      return _.A(aE, a)
    }
    ], [".google.co.ke", function(a) {
      return _.A(bE, a)
    }
    ], [".google.com.kh", function(a) {
      return _.A(cE, a)
    }
    ], [".google.ki", function(a) {
      return _.A(dE, a)
    }
    ], [".google.kg", function(a) {
      return _.A(eE, a)
    }
    ], [".google.co.kr", function(a) {
      return _.A(fE, a)
    }
    ], [".google.com.kw", function(a) {
      return _.A(gE, a)
    }
    ], [".google.kz", function(a) {
      return _.A(hE, a)
    }
    ], [".google.la", function(a) {
      return _.A(iE, a)
    }
    ], [".google.com.lb", function(a) {
      return _.A(jE, a)
    }
    ], [".google.li", function(a) {
      return _.A(kE, a)
    }
    ], [".google.lk", function(a) {
      return _.A(lE, a)
    }
    ], [".google.co.ls", function(a) {
      return _.A(mE, a)
    }
    ], [".google.lt", function(a) {
      return _.A(nE, a)
    }
    ], [".google.lu", function(a) {
      return _.A(oE, a)
    }
    ], [".google.lv", function(a) {
      return _.A(pE, a)
    }
    ], [".google.com.ly", function(a) {
      return _.A(qE, a)
    }
    ], [".google.md", function(a) {
      return _.A(rE, a)
    }
    ], [".google.me", function(a) {
      return _.A(sE, a)
    }
    ], [".google.mg", function(a) {
      return _.A(tE, a)
    }
    ], [".google.mk", function(a) {
      return _.A(uE, a)
    }
    ], [".google.ml", function(a) {
      return _.A(vE, a)
    }
    ], [".google.com.mm", function(a) {
      return _.A(wE, a)
    }
    ], [".google.mn", function(a) {
      return _.A(xE, a)
    }
    ], [".google.ms", function(a) {
      return _.A(yE, a)
    }
    ], [".google.com.mt", function(a) {
      return _.A(zE, a)
    }
    ], [".google.mu", function(a) {
      return _.A(AE, a)
    }
    ], [".google.mv", function(a) {
      return _.A(BE, a)
    }
    ], [".google.mw", function(a) {
      return _.A(CE, a)
    }
    ], [".google.com.mx", function(a) {
      return _.A(DE, a)
    }
    ], [".google.com.my", function(a) {
      return _.A(EE, a)
    }
    ], [".google.co.mz", function(a) {
      return _.A(FE, a)
    }
    ], [".google.com.na", function(a) {
      return _.A(GE, a)
    }
    ], [".google.com.ng", function(a) {
      return _.A(HE, a)
    }
    ], [".google.com.ni", function(a) {
      return _.A(IE, a)
    }
    ], [".google.ne", function(a) {
      return _.A(JE, a)
    }
    ], [".google.nl", function(a) {
      return _.A(KE, a)
    }
    ], [".google.no", function(a) {
      return _.A(LE, a)
    }
    ], [".google.com.np", function(a) {
      return _.A(ME, a)
    }
    ], [".google.nr", function(a) {
      return _.A(NE, a)
    }
    ], [".google.nu", function(a) {
      return _.A(OE, a)
    }
    ], [".google.co.nz", function(a) {
      return _.A(PE, a)
    }
    ], [".google.com.om", function(a) {
      return _.A(QE, a)
    }
    ], [".google.com.pa", function(a) {
      return _.A(RE, a)
    }
    ], [".google.com.pe", function(a) {
      return _.A(SE, a)
    }
    ], [".google.com.pg", function(a) {
      return _.A(TE, a)
    }
    ], [".google.com.ph", function(a) {
      return _.A(UE, a)
    }
    ], [".google.com.pk", function(a) {
      return _.A(VE, a)
    }
    ], [".google.pl", function(a) {
      return _.A(WE, a)
    }
    ], [".google.pn", function(a) {
      return _.A(XE, a)
    }
    ], [".google.com.pr", function(a) {
      return _.A(YE, a)
    }
    ], [".google.ps", function(a) {
      return _.A(ZE, a)
    }
    ], [".google.pt", function(a) {
      return _.A($E, a)
    }
    ], [".google.com.py", function(a) {
      return _.A(aF, a)
    }
    ], [".google.com.qa", function(a) {
      return _.A(bF, a)
    }
    ], [".google.ro", function(a) {
      return _.A(cF, a)
    }
    ], [".google.rw", function(a) {
      return _.A(dF, a)
    }
    ], [".google.com.sa", function(a) {
      return _.A(eF, a)
    }
    ], [".google.com.sb", function(a) {
      return _.A(fF, a)
    }
    ], [".google.sc", function(a) {
      return _.A(gF, a)
    }
    ], [".google.se", function(a) {
      return _.A(hF, a)
    }
    ], [".google.com.sg", function(a) {
      return _.A(iF, a)
    }
    ], [".google.sh", function(a) {
      return _.A(jF, a)
    }
    ], [".google.si", function(a) {
      return _.A(kF, a)
    }
    ], [".google.sk", function(a) {
      return _.A(lF, a)
    }
    ], [".google.sn", function(a) {
      return _.A(mF, a)
    }
    ], [".google.so", function(a) {
      return _.A(nF, a)
    }
    ], [".google.sm", function(a) {
      return _.A(oF, a)
    }
    ], [".google.sr", function(a) {
      return _.A(pF, a)
    }
    ], [".google.st", function(a) {
      return _.A(qF, a)
    }
    ], [".google.com.sv", function(a) {
      return _.A(rF, a)
    }
    ], [".google.td", function(a) {
      return _.A(sF, a)
    }
    ], [".google.tg", function(a) {
      return _.A(tF, a)
    }
    ], [".google.co.th", function(a) {
      return _.A(uF, a)
    }
    ], [".google.com.tj", function(a) {
      return _.A(vF, a)
    }
    ], [".google.tl", function(a) {
      return _.A(wF, a)
    }
    ], [".google.tm", function(a) {
      return _.A(xF, a)
    }
    ], [".google.tn", function(a) {
      return _.A(yF, a)
    }
    ], [".google.to", function(a) {
      return _.A(zF, a)
    }
    ], [".google.com.tr", function(a) {
      return _.A(AF, a)
    }
    ], [".google.tt", function(a) {
      return _.A(BF, a)
    }
    ], [".google.com.tw", function(a) {
      return _.A(CF, a)
    }
    ], [".google.co.tz", function(a) {
      return _.A(DF, a)
    }
    ], [".google.com.ua", function(a) {
      return _.A(EF, a)
    }
    ], [".google.co.ug", function(a) {
      return _.A(FF, a)
    }
    ], [".google.co.uk", function(a) {
      return _.A(GF, a)
    }
    ], [".google.com.uy", function(a) {
      return _.A(HF, a)
    }
    ], [".google.co.uz", function(a) {
      return _.A(IF, a)
    }
    ], [".google.com.vc", function(a) {
      return _.A(JF, a)
    }
    ], [".google.co.ve", function(a) {
      return _.A(KF, a)
    }
    ], [".google.vg", function(a) {
      return _.A(LF, a)
    }
    ], [".google.co.vi", function(a) {
      return _.A(MF, a)
    }
    ], [".google.com.vn", function(a) {
      return _.A(NF, a)
    }
    ], [".google.vu", function(a) {
      return _.A(OF, a)
    }
    ], [".google.ws", function(a) {
      return _.A(PF, a)
    }
    ], [".google.rs", function(a) {
      return _.A(QF, a)
    }
    ], [".google.co.za", function(a) {
      return _.A(RF, a)
    }
    ], [".google.co.zm", function(a) {
      return _.A(SF, a)
    }
    ], [".google.co.zw", function(a) {
      return _.A(TF, a)
    }
    ], [".google.cat", function(a) {
      return _.A(UF, a)
    }
    ]].map(function(a) {
      var b = _.x(a);
      a = b.next().value;
      b = b.next().value;
      var c = {};
      return [a, (c.json = b("json"),
        c.js = b("js"),
        c["sync.js"] = b("sync.js"),
        c)]
    }));
    var WF = function(a, b, c) {
      var d = _.Be("LINK", a);
      try {
        if (d.rel = "preload",
          Pa("preload", "stylesheet")) {
          d.href = _.mb(b).toString();
          var e = Nw('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
          e && d.setAttribute("nonce", e)
        } else {
          if (b instanceof _.Vs)
            var f = _.mb(b).toString();
          else {
            if (b instanceof _.eb)
              var g = _.fb(b);
            else {
              if (b instanceof _.eb)
                var h = b;
              else {
                b = "object" == typeof b && b.Na ? b.Da() : String(b);
                b: if (e = b,
                  ot) {
                  try {
                    var k = new URL(e)
                  } catch (p) {
                    var l = "https:";
                    break b
                  }
                  l = k.protocol
                } else
                  c: {
                    var m = document.createElement("a");
                    try {
                      m.href = e
                    } catch (p) {
                      l = void 0;
                      break c
                    }
                    var n = m.protocol;
                    l = ":" === n || "" === n ? "https:" : n
                  }
                "javascript:" === l && (b = "about:invalid#zClosurez");
                h = tb(b)
              }
              g = _.fb(h)
            }
            f = g
          }
          d.href = f
        }
      } catch (p) {
        return
      }
      d.as = "script";
      c && d.setAttribute("nonce", c);
      if (a = a.getElementsByTagName("head")[0])
        try {
          a.appendChild(d)
        } catch (p) {}
    };
    var Rg = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var bh = _.q, XF = function(a) {
      var b = new _.v.Map([["domain", _.q.location.hostname]]);
      ch[3] >= ff() && b.set("adsid", ch[1]);
      return ve(VF.get(a).js, b)
    }, ch, YF, ah = function() {
      bh = _.q;
      ch = bh.googleToken = bh.googleToken || {};
      var a = ff();
      ch[1] && ch[3] > a && 0 < ch[2] || (ch[1] = "",
        ch[2] = -1,
        ch[3] = -1,
        ch[4] = "",
        ch[6] = "");
      YF = bh.googleIMState = bh.googleIMState || {};
      VF.has(YF[1]) || (YF[1] = ".google.com");
      Array.isArray(YF[5]) || (YF[5] = []);
      "boolean" !== typeof YF[6] && (YF[6] = !1);
      Array.isArray(YF[7]) || (YF[7] = []);
      "number" !== typeof YF[8] && (YF[8] = 0)
    }, ZF = function(a) {
      ah();
      VF.has(a) && (YF[1] = a)
    }, dh = {
      ee: function() {
        return 0 < YF[8]
      },
      sh: function() {
        YF[8]++
      },
      th: function() {
        0 < YF[8] && YF[8]--
      },
      uh: function() {
        YF[8] = 0
      },
      xj: function() {
        return !1
      },
      fd: function() {
        return YF[5]
      },
      Ne: function(a) {
        try {
          a()
        } catch (b) {
          _.q.setTimeout(function() {
            throw b;
          }, 0)
        }
      },
      yf: function() {
        if (!dh.ee()) {
          var a = _.q.document
            , b = function(e) {
            e = XF(e);
            a: {
              try {
                var f = Nw("script[nonce]");
                break a
              } catch (g) {}
              f = void 0
            }
            WF(a, e.toString(), f);
            f = _.Be("SCRIPT", a);
            f.type = "text/javascript";
            f.onerror = function() {
              return _.q.processGoogleToken({}, 2)
            }
            ;
            nb(f, e);
            try {
              (a.head || a.body || a.documentElement).appendChild(f),
                dh.sh()
            } catch (g) {}
          }
            , c = YF[1];
          b(c);
          ".google.com" != c && b(".google.com");
          b = {};
          var d = (b.newToken = "FBT",
            b);
          _.q.setTimeout(function() {
            return _.q.processGoogleToken(d, 1)
          }, 1E3)
        }
      }
    }, $F = function(a) {
      _.q.processGoogleToken = _.q.processGoogleToken || function(b, c) {
        var d = b;
        d = void 0 === d ? {} : d;
        c = void 0 === c ? 0 : c;
        b = d.newToken || "";
        var e = "NT" == b
          , f = parseInt(d.freshLifetimeSecs || "", 10)
          , g = parseInt(d.validLifetimeSecs || "", 10)
          , h = d["1p_jar"] || "";
        d = d.pucrd || "";
        ah();
        1 == c ? dh.uh() : dh.th();
        var k = bh.googleToken = bh.googleToken || {}
          , l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
        e = e && !dh.ee() && (!(ch[3] >= ff()) || "NT" == ch[1]);
        var m = !(ch[3] >= ff()) && 0 != c;
        if (l || e || m)
          e = ff(),
            f = e + 1E3 * f,
            g = e + 1E3 * g,
          1E-5 > Math.random() && bA(_.q, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c),
            k[5] = c,
            k[1] = b,
            k[2] = f,
            k[3] = g,
            k[4] = h,
            k[6] = d,
            ah();
        if (l || !dh.ee()) {
          c = dh.fd();
          for (b = 0; b < c.length; b++)
            dh.Ne(c[b]);
          c.length = 0
        }
      }
      ;
      eh(a)
    };
    var Eq = function(a, b) {
      b = void 0 === b ? {} : b;
      this.root = b.root ? b.root : null;
      this.H = b.rootMargin ? fh(b.rootMargin) : [{
        value: 0,
        type: "px"
      }, {
        value: 0,
        type: "px"
      }, {
        value: 0,
        type: "px"
      }, {
        value: 0,
        type: "px"
      }];
      this.rootMargin = _.Ad(this.H, function(c) {
        return "" + c.value + c.type
      }).join(" ");
      this.L = hh(b.threshold);
      this.A = a;
      this.j = [];
      this.G = [];
      this.B = !1;
      this.o = null;
      this.m = Ms(this.l, 100, this)
    }
      , aG = function(a) {
      if (a.root)
        var b = ih(a.root);
      else {
        var c = _.Zw(window);
        b = {
          top: 0,
          right: c.width,
          bottom: c.height,
          left: 0,
          width: c.width,
          height: c.height
        }
      }
      a = _.Ad(a.H, function(d, e) {
        return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
      });
      return {
        top: b.top - a[0],
        right: b.right + a[1],
        bottom: b.bottom + a[2],
        left: b.left - a[3],
        width: b.width + a[1] + a[3],
        height: b.height + a[0] + a[2]
      }
    }
      , bG = function(a, b, c) {
      if (!b || b.isIntersecting != c.isIntersecting)
        return !0;
      var d = b.intersectionRatio
        , e = c.intersectionRatio;
      return d == e ? !1 : _.Fh(a.L, function(f) {
        return f < d != f < e
      })
    };
    Eq.prototype.l = function() {
      var a = this
        , b = aG(this);
      _.Ps(this.j, function(c) {
        var d = c.target
          , e = ih(d)
          , f = e.width * e.height;
        var g = Math.max(b.top, e.top);
        var h = Math.min(b.right, e.right)
          , k = Math.min(b.bottom, e.bottom)
          , l = Math.max(b.left, e.left)
          , m = h - l
          , n = k - g;
        g = 0 <= m && 0 <= n ? {
          top: g,
          right: h,
          bottom: k,
          left: l,
          width: m,
          height: n
        } : null;
        h = !!g;
        k = g ? g.width * g.height : 0;
        l = window.performance;
        d = {
          boundingClientRect: e,
          intersectionRatio: f ? k / f : h ? 1 : 0,
          intersectionRect: g || {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
          },
          isIntersecting: h,
          rootBounds: b,
          target: d,
          time: l && l.now ? l.now() : 0
        };
        bG(a, c.ra, d) && a.G.push(d);
        c.ra = d
      });
      this.G.length && this.A(cG(this), this)
    }
    ;
    Eq.prototype.observe = function(a) {
      _.Fh(this.j, function(b) {
        return b.target == a
      }) || (this.j.push({
        target: a,
        ra: null
      }),
        this.l(),
      this.B || (this.B = !0,
        _.yb(_.q, "scroll", this.m),
        _.yb(_.q, "resize", this.m),
      _.q.MutationObserver && !this.o && (this.o = new MutationObserver(this.m),
        this.o.observe(_.q.document, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        }))))
    }
    ;
    Eq.prototype.unobserve = function(a) {
      this.j = _.gh(this.j, function(b) {
        return b.target != a
      });
      0 == this.j.length && this.disconnect()
    }
    ;
    Eq.prototype.disconnect = function() {
      this.B = !1;
      this.j.length = 0;
      _.Ce(_.q, "scroll", this.m);
      _.Ce(_.q, "resize", this.m);
      this.o && (this.o.disconnect(),
        this.o = null)
    }
    ;
    var cG = function(a) {
      var b = [].concat(_.xe(a.G));
      a.G.length = 0;
      return b
    };
    var dG = function(a, b, c, d, e, f) {
      _.S.call(this);
      this.Sa = a;
      this.status = 1;
      this.B = b;
      this.m = c;
      this.J = d;
      this.xc = !!e;
      this.l = Math.random();
      this.H = {};
      this.j = null;
      this.L = (0,
        _.Bs)(this.F, this);
      this.A = f
    };
    _.N(dG, _.S);
    dG.prototype.F = function(a) {
      if (!("*" !== this.m && a.origin !== this.m || !this.xc && a.source != this.B)) {
        var b = null;
        try {
          b = JSON.parse(a.data)
        } catch (c) {}
        if (_.qa(b) && (a = b.i,
        b.c === this.Sa && a != this.l)) {
          if (2 !== this.status)
            try {
              this.status = 2,
                eG(this),
              this.j && (this.j(),
                this.j = null)
            } catch (c) {}
          a = b.s;
          b = b.p;
          if ("string" === typeof a && ("string" === typeof b || _.qa(b)) && this.H.hasOwnProperty(a))
            this.H[a](b)
        }
      }
    }
    ;
    var eG = function(a) {
      var b = {};
      b.c = a.Sa;
      b.i = a.l;
      a.A && (b.e = a.A);
      a.B.postMessage(JSON.stringify(b), a.m)
    };
    dG.prototype.D = function() {
      if (1 === this.status) {
        try {
          this.B.postMessage && eG(this)
        } catch (a) {}
        window.setTimeout((0,
          _.Bs)(this.D, this), 50)
      }
    }
    ;
    dG.prototype.connect = function(a) {
      a && (this.j = a);
      _.yb(window, "message", this.L);
      this.J && this.D()
    }
    ;
    var fG = function(a, b, c) {
      a.H[b] = c
    }
      , gG = function(a, b, c) {
      var d = {};
      d.c = a.Sa;
      d.i = a.l;
      d.s = b;
      d.p = c;
      try {
        a.B.postMessage(JSON.stringify(d), a.m)
      } catch (e) {}
    };
    dG.prototype.o = function() {
      this.status = 3;
      _.Ce(window, "message", this.L);
      _.S.prototype.o.call(this)
    }
    ;
    var hG = new _.v.Map([["navigate", 1], ["reload", 2], ["back_forward", 3], ["prerender", 4]])
      , iG = new _.v.Map([[0, 1], [1, 2], [2, 3]]);
    var jG = function(a) {
      _.Q.call(this, a)
    };
    _.N(jG, _.Q);
    var kG = je(jG);
    var lG = function(a) {
      _.Q.call(this, a)
    };
    _.N(lG, _.Q);
    var mG = function(a) {
      _.Q.call(this, a)
    };
    _.N(mG, _.Q);
    var nG = function(a) {
      return a.prerendering ? 3 : {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4,
        unloaded: 5
      }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }
      , oG = function(a) {
      var b;
      a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
      return b
    }
      , pG = function(a) {
      return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    }
      , qG = function(a, b) {
      if (3 == nG(b))
        return !1;
      a();
      return !0
    }
      , rG = function(a, b) {
      if (!qG(a, b)) {
        var c = !1
          , d = oG(b)
          , e = function() {
          !c && qG(a, b) && (c = !0,
            _.Ce(b, d, e))
        };
        d && _.yb(b, d, e)
      }
    };
    var fq = function(a, b) {
      this.j = a;
      this.m = b;
      this.o = {}
    }
      , gq = function(a) {
      aq() && (document.addEventListener("touchstart", function(b) {
        a.j(902, function() {
          a.o[b.touches[0].identifier] = Date.now()
        })()
      }, Os),
        document.addEventListener("touchend", function(b) {
          a.j(902, function() {
            var c = b.changedTouches[0]
              , d = c.clientX
              , e = c.clientY
              , f = c.force;
            c = a.o[c.identifier];
            if (void 0 !== c)
              try {
                var g = aq()
                  , h = {
                  x: d,
                  y: e,
                  duration_ms: Date.now() - c
                };
                if (null == g ? 0 : g.gmaSdk)
                  g.gmaSdk.reportTouchEvent(JSON.stringify(_.u(Object, "assign").call(Object, {}, h, {
                    type: 1,
                    force: f
                  })));
                else {
                  var k, l, m;
                  null == g || null == (k = g.webkit) || null == (l = k.messageHandlers) || null == (m = l.reportGmaTouchEvent) || m.postMessage(h)
                }
              } catch (n) {
                a.m("paw_sigs", {
                  msg: "reportTouchError",
                  err: n instanceof Error ? n.message : "nonError"
                })
              }
          })()
        }, Os))
    }
      , bq = function(a, b, c, d, e) {
      var f = 200
        , g = Up;
      b = void 0 === b ? {} : b;
      c = void 0 === c ? function() {}
        : c;
      d = void 0 === d ? function() {}
        : d;
      f = void 0 === f ? 200 : f;
      var h = String(Math.floor(2147483647 * _.Ue()))
        , k = 0
        , l = function(m) {
        try {
          var n = "object" === typeof m.data ? m.data : JSON.parse(m.data);
          h === n.paw_id && (window.clearTimeout(k),
            window.removeEventListener("message", l),
            n.signal ? c(n.signal) : n.error && d(n.error))
        } catch (p) {
          g("paw_sigs", {
            msg: "postmessageError",
            err: p instanceof Error ? p.message : "nonError",
            data: null == m.data ? "null" : 500 < m.data.length ? m.data.substring(0, 500) : m.data
          })
        }
      };
      window.addEventListener("message", function(m) {
        e(903, function() {
          l(m)
        })()
      });
      a.postMessage(_.u(Object, "assign").call(Object, {}, {
        paw_id: h
      }, b));
      k = window.setTimeout(function() {
        window.removeEventListener("message", l);
        d("PAW GMA postmessage timed out.")
      }, f)
    }
      , aq = function() {
      var a = window, b, c;
      if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals))
        return a;
      try {
        var d = window.parent, e, f;
        if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals))
          return d
      } catch (g) {}
      return null
    };
    var tG = function(a) {
      _.Q.call(this, a, -1, sG)
    };
    _.N(tG, _.Q);
    var sG = [1]
      , uG = [tG, 1, Su, Mv];
    var wG = function(a) {
      _.Q.call(this, a, -1, vG)
    };
    _.N(wG, _.Q);
    var vG = [1, 2];
    wG.prototype.m = ie([wG, 1, Su, Mv, 2, Su, uG]);
    var yG, xG;
    yG = function() {
      this.wasPlaTagProcessed = !1;
      this.wasReactiveAdConfigReceived = {};
      this.adCount = {};
      this.wasReactiveAdVisible = {};
      this.stateForType = {};
      this.reactiveTypeEnabledInAsfe = {};
      this.wasReactiveTagRequestSent = !1;
      this.reactiveTypeDisabledByPublisher = {};
      this.tagSpecificState = {};
      this.messageValidationEnabled = !1;
      this.floatingAdsStacking = new xG;
      this.sideRailProcessedFixedElements = new _.v.Set;
      this.sideRailAvailableSpace = new _.v.Map
    }
    ;
    _.Om = function(a) {
      a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.v.Set),
      null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.v.Map)) : a.google_reactive_ads_global_state = new yG;
      return a.google_reactive_ads_global_state
    }
    ;
    xG = function() {
      this.maxZIndexRestrictions = {};
      this.nextRestrictionId = 0;
      this.maxZIndexListeners = []
    }
    ;
    var DG, AG;
    _.zG = function(a) {
      this.j = _.Om(a).floatingAdsStacking
    }
    ;
    _.BG = function(a, b) {
      return new AG(a,b)
    }
    ;
    _.CG = function(a) {
      a = _.kx(a.j.maxZIndexRestrictions);
      return a.length ? Math.min.apply(null, a) : null
    }
    ;
    DG = function(a) {
      var b = _.CG(a);
      _.Ps(a.j.maxZIndexListeners, function(c) {
        return c(b)
      })
    }
    ;
    AG = function(a, b) {
      this.o = a;
      this.m = b;
      this.j = null
    }
    ;
    _.EG = function(a) {
      if (null == a.j) {
        var b = a.o
          , c = a.m
          , d = b.j.nextRestrictionId++;
        b.j.maxZIndexRestrictions[d] = c;
        DG(b);
        a.j = d
      }
    }
    ;
    _.FG = function(a) {
      if (null != a.j) {
        var b = a.o;
        delete b.j.maxZIndexRestrictions[a.j];
        DG(b);
        a.j = null
      }
    }
    ;
    var sh, th;
    _.Pm = 728 * 1.38;
    _.rh = function(a) {
      return a.innerHeight >= a.innerWidth
    }
    ;
    _.GG = function(a) {
      var b = _.Fm(a).clientWidth;
      a = a.innerWidth;
      return b && a ? b / a : 0
    }
    ;
    sh = function(a, b) {
      return (a = _.Fm(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    }
    ;
    th = function(a) {
      return (a = _.GG(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    }
    ;
    _.Fm = function(a) {
      a = a.document;
      var b = {};
      a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
      return b || {}
    }
    ;
    _.HG = function(a) {
      return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }
    ;
    var vh = 90 * 1.38;
    var IG;
    _.JG = function(a, b) {
      if (!a.body)
        return null;
      var c = new IG;
      c.apply(a, b);
      return function() {
        _.Nx(a.body, {
          filter: c.j,
          webkitFilter: c.j,
          overflow: c.m,
          position: c.G,
          top: c.B
        });
        b.scrollTo(0, c.o)
      }
    }
    ;
    IG = function() {
      this.j = this.B = this.G = this.m = null;
      this.o = 0
    }
    ;
    IG.prototype.apply = function(a, b) {
      this.m = a.body.style.overflow;
      this.G = a.body.style.position;
      this.B = a.body.style.top;
      this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
      this.o = _.HG(b);
      _.Nx(a.body, "top", -this.o + "px")
    }
    ;
    _.Hm = function(a, b) {
      var c;
      if (!(c = 0 >= b) && !(c = null == a)) {
        try {
          a.setItem("__storage_test__", "__storage_test__");
          var d = a.getItem("__storage_test__");
          a.removeItem("__storage_test__");
          var e = "__storage_test__" === d
        } catch (f) {
          e = !1
        }
        c = !e
      }
      return c ? null : Gh(a, b)
    }
    ;
    _.Gm = function(a) {
      return !!a && 1 > a.length
    }
    ;
    var KG = function(a) {
      _.S.call(this);
      this.j = a;
      this.m = null;
      this.H = {};
      this.L = 0;
      this.B = null
    };
    _.N(KG, _.S);
    KG.prototype.o = function() {
      this.B && _.Ce(this.j, "message", this.B);
      _.S.prototype.o.call(this)
    }
    ;
    KG.prototype.l = function() {
      var a;
      return "function" === typeof (null == (a = this.j) ? void 0 : a.__uspapi) || null != LG(this)
    }
    ;
    KG.prototype.A = function(a) {
      var b = {};
      if (this.l()) {
        var c = _.Ls(function() {
          return a(b)
        });
        MG(this, function(d, e) {
          e && (b = d);
          c()
        });
        setTimeout(c, 500)
      } else
        a(b)
    }
    ;
    var MG = function(a, b) {
      var c;
      "function" === typeof (null == (c = a.j) ? void 0 : c.__uspapi) ? (a = a.j.__uspapi,
        a("getUSPData", 1, b)) : LG(a) && (NG(a),
        c = ++a.L,
        a.H[c] = b,
      a.m && (b = {},
        a.m.postMessage((b.__uspapiCall = {
          command: "getUSPData",
          version: 1,
          callId: c
        },
          b), "*")))
    }
      , LG = function(a) {
      if (a.m)
        return a.m;
      a.m = ux(a.j, "__uspapiLocator");
      return a.m
    }
      , NG = function(a) {
      a.B || (a.B = function(b) {
        try {
          var c = {};
          "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
          var d = c.__uspapiReturn;
          var e;
          null == (e = a.H) || e[d.callId](d.returnValue, d.success)
        } catch (f) {}
      }
        ,
        _.yb(a.j, "message", a.B))
    };
    var Jn = function(a) {
      _.S.call(this);
      this.l = a;
      this.B = this.j = null;
      this.A = {};
      this.D = 0;
      this.H = !1
    };
    _.N(Jn, _.S);
    Jn.prototype.m = function() {
      if (!this.H) {
        if (!this.j) {
          var a = ux(this.l, "googlefcPresent");
          this.j = a ? a : null
        }
        this.H = !0
      }
      return !!this.j
    }
    ;
    Jn.prototype.L = function() {
      var a = this;
      return new _.v.Promise(function(b) {
          if (a.m())
            if (a.j === a.l) {
              var c = a.j.googlefc || (a.j.googlefc = {});
              c.__fci = c.__fci || [];
              c.__fci.push("loaded", function(e) {
                b(Ze(e))
              })
            } else {
              OG(a);
              c = a.D++;
              a.A[c] = b;
              var d = {};
              (0,
                C.I)(a.j).postMessage((d.__fciCall = {
                command: "loaded",
                callId: c
              },
                d), "*")
            }
        }
      )
    }
    ;
    var OG = function(a) {
      a.B || (a.B = function(b) {
        try {
          var c = Ze(b.data.__fciReturn);
          (0,
            a.A[_.$e(c, 1)])(c)
        } catch (d) {}
      }
        ,
        _.yb(a.l, "message", a.B))
    };
    var PG = {}
      , Kh = (PG[23] = .001,
      PG[253] = !1,
      PG[246] = [],
      PG[150] = "",
      PG[221] = /^true$/.test("false"),
      PG[36] = /^true$/.test("false"),
      PG[172] = null,
      PG[260] = void 0,
      PG[251] = null,
      PG)
      , Jh = function() {
      this.j = !1
    };
    var $k = function(a) {
      var b = void 0 === b ? rf(_.q) : b;
      this.id = a;
      this.o = Math.random() < (_.F(My) ? .001 : _.Lh(23));
      this.j = {
        pvsid: String(b)
      }
    }
      , QG = function(a) {
      a = Ih(a);
      var b;
      gi.set(a, (null != (b = gi.get(a)) ? b : 0) + 1)
    }
      , fi = function() {
      return [].concat(_.xe(_.u(gi, "values").call(gi))).reduce(function(a, b) {
        return a + b
      }, 0)
    }
      , L = function(a, b, c) {
      "string" !== typeof c && (c = String(c));
      /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
    }
      , bl = function(a) {
      var b = 1;
      b = void 0 === b ? null : b;
      if (RG())
        b = !0;
      else {
        var c = a.o;
        b && 0 <= b && (c = Math.random() < b);
        b = c && !!a.id
      }
      b && bA(window, SG(a) || "", void 0, _.F(Sy))
    }
      , SG = function(a) {
      var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
      _.Gl(a.j, function(c, d) {
        c && (b += "&" + d + "=" + encodeURIComponent(c))
      });
      return b
    }
      , TG = function(a) {
      var b = [].concat(_.xe(_.u(gi, "keys").call(gi)));
      b = b.map(function(c) {
        return c.replace(/,/g, "\\,")
      });
      3 >= b.length ? L(a, "nw_id", b.join()) : (b = b.slice(0, 3),
        b.push("__extra__"),
        L(a, "nw_id", b.join()))
    }
      , Cj = function(a, b) {
      L(a, "vrg", String(b.Cb || b.Ma));
      TG(a);
      L(a, "nslots", fi().toString());
      b = _.mf(nf).j();
      b.length && L(a, "eid", b.join());
      L(a, "pub_url", document.URL)
    }
      , wj = function(a, b, c) {
      c = void 0 === c ? _.F(My) ? .001 : _.Lh(23) : c;
      if (void 0 === c || 0 > c || 1 < c)
        c = _.F(My) ? .001 : _.Lh(23);
      Math.random() < c && (a = new $k(a),
        b(a),
        bl(a))
    }
      , gi = new _.v.Map
      , RG = gj(function() {
      return !!ox(_.q.location.href)
    });
    var Wh = function() {
      hB.call(this, _.F(Xh) || _.F(Dz) ? 1 : 0, _.q);
      this.m = 0;
      var a = _.F(Xh) || _.F(Dz);
      _.q.google_measure_js_timing = a || _.q.google_measure_js_timing
    };
    _.N(Wh, hB);
    _.UG = function(a) {
      this.context = a
    }
    ;
    _.UG.prototype.Eb = function(a, b) {
      return $h(this.context, a, b)
    }
    ;
    _.UG.prototype.pa = function(a, b) {
      return Uh(this.context, a, b)
    }
    ;
    _.UG.prototype.Ob = function(a, b) {
      Yh(this.context, a, b);
      return !1
    }
    ;
    _.UG.prototype.Bc = fa(0);
    var VG = {}
      , WG = (VG.companion_ads = "companionAds",
      VG.content = "content",
      VG.publisher_ads = "pubads",
      VG);
    var ii = function(a) {
      _.Q.call(this, a)
    };
    _.N(ii, _.Q);
    ii.prototype.getWidth = function() {
      return ji(this, 1)
    }
    ;
    var ni = function(a, b) {
      return _.z(a, 1, b)
    };
    ii.prototype.getHeight = function() {
      return ji(this, 2)
    }
    ;
    var mi = function(a, b) {
      return _.z(a, 2, b)
    }
      , $l = function() {
      var a = new ii;
      return _.z(a, 3, !0)
    };
    var ol = function(a) {
      _.Q.call(this, a, -1, XG)
    };
    _.N(ol, _.Q);
    var nl = function(a, b) {
      return _.z(a, 1, b)
    }
      , ml = function(a, b) {
      return _.hd(a, 2, b, _.Hc)
    }
      , YG = function(a, b) {
      return Cu(a, 2, b)
    }
      , XG = [2];
    var Tq = function(a) {
      _.Q.call(this, a)
    };
    _.N(Tq, _.Q);
    var ZG = function(a, b) {
      return _.z(a, 3, _.Bc(b))
    };
    var dp = function(a) {
      _.Q.call(this, a, -1, $G)
    };
    _.N(dp, _.Q);
    var jp = function(a, b) {
      return _.z(a, 1, b)
    }
      , hp = function(a, b) {
      return _.hd(a, 2, b, _.Hc)
    }
      , $G = [2];
    var Ip = function(a) {
      _.Q.call(this, a, -1, aH)
    };
    _.N(Ip, _.Q);
    var ip = function(a, b) {
      _.Yf(a, 1, dp, b)
    }
      , aH = [1];
    var Gp = function(a) {
      _.Q.call(this, a, -1, bH)
    };
    _.N(Gp, _.Q);
    var bH = [2, 3];
    var Fp = function(a) {
      _.Q.call(this, a)
    };
    _.N(Fp, _.Q);
    var cH = function(a) {
      _.Q.call(this, a)
    };
    _.N(cH, _.Q);
    cH.prototype.setTagForChildDirectedTreatment = function(a) {
      return _.z(this, 5, a)
    }
    ;
    cH.prototype.clearTagForChildDirectedTreatment = function() {
      return uf(this, 5)
    }
    ;
    cH.prototype.setTagForUnderAgeOfConsent = function(a) {
      return _.z(this, 6, a)
    }
    ;
    var Fl = function(a) {
      _.Q.call(this, a)
    };
    _.N(Fl, _.Q);
    var eH = function(a) {
      _.Q.call(this, a, -1, dH)
    };
    _.N(eH, _.Q);
    eH.prototype.wa = function() {
      return _.Pe(this, ol, 14)
    }
    ;
    eH.prototype.eb = function() {
      return zf(this, Fl, 18)
    }
    ;
    var fH = function(a) {
      return zf(a, cH, 25)
    };
    eH.prototype.getCorrelator = function() {
      return y(this, 26)
    }
    ;
    eH.prototype.setCorrelator = function(a) {
      return _.z(this, 26, a)
    }
    ;
    eH.prototype.gd = function() {
      return Io(this, Fp, 33)
    }
    ;
    var dH = [2, 3, 14];
    var Fi = function() {
      this.j = new _.v.Map
    };
    var gH = function() {
      this.o = {};
      this.j = new eH;
      this.m = new _.v.Map;
      this.j.setCorrelator(Dx());
      _.Lh(36) && _.z(this.j, 15, !0)
    }
      , hH = function(a) {
      var b = pj()
        , c = a.getDomId();
      if (c && !b.o.hasOwnProperty(c)) {
        var d = _.mf(Fi)
          , e = ++_.mf(Wh).m;
        d.j.set(c, e);
        _.z(a, 20, e);
        b.o[c] = a
      }
    }
      , Yn = function(a, b) {
      return a.o[b]
    }
      , pj = function() {
      return _.mf(gH)
    };
    var bj = gj(aj);
    var Lj = ["auto", "inherit", "100%"]
      , Mj = Lj.concat(["none"]);
    var Um = function(a, b, c) {
      if (!a)
        return !0;
      var d = !0;
      Jj(a, function(e) {
        return d = Kj(e, b, 10, 10)
      }, c);
      return d
    };
    var iH = function(a, b, c, d, e, f) {
      this.m = _.Hx(a);
      this.o = _.Hx(b);
      this.G = c;
      this.j = _.Hx(d);
      this.B = e;
      this.l = f
    }
      , jH = function(a) {
      return JSON.stringify({
        windowCoords_t: a.m.top,
        windowCoords_r: a.m.right,
        windowCoords_b: a.m.bottom,
        windowCoords_l: a.m.left,
        frameCoords_t: a.o.top,
        frameCoords_r: a.o.right,
        frameCoords_b: a.o.bottom,
        frameCoords_l: a.o.left,
        styleZIndex: a.G,
        allowedExpansion_t: a.j.top,
        allowedExpansion_r: a.j.right,
        allowedExpansion_b: a.j.bottom,
        allowedExpansion_l: a.j.left,
        xInView: a.B,
        yInView: a.l
      })
    }
      , kH = function(a) {
      var b = window
        , c = b.screenX || b.screenLeft || 0
        , d = b.screenY || b.screenTop || 0;
      b = new _.Gx(d,c + (b.outerWidth || document.documentElement.clientWidth || 0),d + (b.outerHeight || document.documentElement.clientHeight || 0),c);
      c = Rx(a);
      d = _.Bh(_.Ch, a);
      var e = new Ix(c.x,c.y,d.width,d.height);
      c = Jx(e);
      d = String(Ah(a, "zIndex"));
      var f = new _.Gx(0,Infinity,Infinity,0);
      for (var g = Vw(a), h = g.j.body, k = g.j.documentElement, l = $w(g.j); a = Qx(a); )
        if (!(_.Rt && 0 == a.clientWidth || Ut && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != Ah(a, "overflow")) {
          var m = Rx(a)
            , n = new _.Ai(a.clientLeft,a.clientTop);
          m.x += n.x;
          m.y += n.y;
          f.top = Math.max(f.top, m.y);
          f.right = Math.min(f.right, m.x + a.clientWidth);
          f.bottom = Math.min(f.bottom, m.y + a.clientHeight);
          f.left = Math.max(f.left, m.x)
        }
      a = l.scrollLeft;
      l = l.scrollTop;
      f.left = Math.max(f.left, a);
      f.top = Math.max(f.top, l);
      g = g.j;
      g = _.Zw(g.parentWindow || g.defaultView || window);
      f.right = Math.min(f.right, a + g.width);
      f.bottom = Math.min(f.bottom, l + g.height);
      l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new Ix(f.left,f.top,f.right - f.left,f.bottom - f.top) : null) ? Kx(e, f) : null;
      g = a = 0;
      l && !(new _.Di(l.width,l.height)).isEmpty() && (a = l.width / e.width,
        g = l.height / e.height);
      l = new _.Gx(0,0,0,0);
      if (h = f)
        (e = Kx(e, f)) ? (k = Jx(f),
          m = Jx(e),
          h = m.right != k.left && k.right != m.left,
          k = m.bottom != k.top && k.bottom != m.top,
          h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
      h && (l = new _.Gx(Math.max(c.top - f.top, 0),Math.max(f.left + f.width - c.right, 0),Math.max(f.top + f.height - c.bottom, 0),Math.max(c.left - f.left, 0)));
      return new iH(b,c,d,l,a,g)
    };
    var lH = function(a) {
      this.G = a;
      this.B = null;
      this.ga = this.status = 0;
      this.o = null;
      this.Sa = "sfchannel" + a
    };
    var mH = function(a) {
      this.j = a
    };
    var nH = function(a, b) {
      this.cd = a;
      this.dd = b;
      this.o = this.j = !1
    };
    var oH = function(a, b, c, d, e, f, g, h) {
      h = void 0 === h ? [] : h;
      this.o = a;
      this.m = b;
      this.G = c;
      this.permissions = d;
      this.metadata = e;
      this.B = f;
      this.xc = g;
      this.hostpageLibraryTokens = h;
      this.j = ""
    };
    var pH = function(a, b) {
      this.o = a;
      this.G = b
    };
    pH.prototype.j = function(a) {
      this.G && a && (a.sentinel = this.G);
      return JSON.stringify(a)
    }
    ;
    var qH = function(a, b, c) {
      pH.call(this, a, void 0 === c ? "" : c);
      this.version = b
    };
    _.N(qH, pH);
    qH.prototype.j = function() {
      return pH.prototype.j.call(this, {
        uid: this.o,
        version: this.version
      })
    }
    ;
    var rH = function(a, b, c, d) {
      pH.call(this, a, void 0 === d ? "" : d);
      this.B = b;
      this.m = c
    };
    _.N(rH, pH);
    rH.prototype.j = function() {
      return pH.prototype.j.call(this, {
        uid: this.o,
        initialWidth: this.B,
        initialHeight: this.m
      })
    }
    ;
    var sH = function(a, b, c) {
      pH.call(this, a, void 0 === c ? "" : c);
      this.description = b
    };
    _.N(sH, pH);
    sH.prototype.j = function() {
      return pH.prototype.j.call(this, {
        uid: this.o,
        description: this.description
      })
    }
    ;
    var tH = function(a, b, c, d) {
      pH.call(this, a, void 0 === d ? "" : d);
      this.m = b;
      this.push = c
    };
    _.N(tH, pH);
    tH.prototype.j = function() {
      return pH.prototype.j.call(this, {
        uid: this.o,
        expand_t: this.m.top,
        expand_r: this.m.right,
        expand_b: this.m.bottom,
        expand_l: this.m.left,
        push: this.push
      })
    }
    ;
    var uH = function(a, b) {
      pH.call(this, a, void 0 === b ? "" : b)
    };
    _.N(uH, pH);
    uH.prototype.j = function() {
      return pH.prototype.j.call(this, {
        uid: this.o
      })
    }
    ;
    var vH = function(a, b, c) {
      pH.call(this, a, void 0 === c ? "" : c);
      this.B = b
    };
    _.N(vH, pH);
    vH.prototype.j = function() {
      var a = {
        uid: this.o,
        newGeometry: jH(this.B)
      };
      return pH.prototype.j.call(this, a)
    }
    ;
    var wH = function(a, b, c, d, e, f) {
      vH.call(this, a, c, void 0 === f ? "" : f);
      this.success = b;
      this.m = d;
      this.push = e
    };
    _.N(wH, vH);
    wH.prototype.j = function() {
      var a = {
        uid: this.o,
        success: this.success,
        newGeometry: jH(this.B),
        expand_t: this.m.top,
        expand_r: this.m.right,
        expand_b: this.m.bottom,
        expand_l: this.m.left,
        push: this.push
      };
      this.G && (a.sentinel = this.G);
      return JSON.stringify(a)
    }
    ;
    var xH = function(a, b, c, d) {
      pH.call(this, a, void 0 === d ? "" : d);
      this.width = b;
      this.height = c
    };
    _.N(xH, pH);
    xH.prototype.j = function() {
      return pH.prototype.j.call(this, {
        uid: this.o,
        width: this.width,
        height: this.height
      })
    }
    ;
    var yH = function(a) {
      var b;
      if (null == (b = a.location) ? 0 : b.ancestorOrigins)
        return a.location.ancestorOrigins.length;
      var c = 0;
      pe(function() {
        c++;
        return !1
      }, !0, !0, a);
      return c
    };
    var zH = function() {
      this.j = []
    }
      , BH = function(a, b, c, d, e) {
      a.j.push(new AH(b,c,d,e))
    }
      , CH = function(a) {
      for (var b = a.j.length - 1; 0 <= b; b--) {
        var c = a.j[b];
        c.o ? (c.m.style.removeProperty(c.j),
          c.m.style.setProperty(c.j, String(c.G), c.B)) : c.m.style[c.j] = c.G
      }
      a.j.length = 0
    }
      , AH = function(a, b, c, d) {
      this.m = a;
      this.j = (this.o = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
      this.G = this.o ? a.style.getPropertyValue(this.j) : a.style[this.j];
      this.B = this.o ? a.style.getPropertyPriority(this.j) : void 0;
      this.o ? (a.style.removeProperty(this.j),
        a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
    };
    var DH = function(a, b) {
      b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
      2048 > b.length && b.push(a)
    }
      , EH = function() {
      var a = window
        , b = _.hf(a);
      b && DH({
        label: "2",
        type: 9,
        value: b
      }, a)
    }
      , FH = function(a, b, c) {
      var d = void 0 === d ? !1 : d;
      var e = window
        , f = "undefined" !== typeof queueMicrotask;
      return function() {
        d && f && queueMicrotask(function() {
          e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
          e.google_rum_task_id_counter += 1
        });
        var g = _.hf()
          , h = 3;
        try {
          var k = b.apply(this, arguments)
        } catch (l) {
          h = 13;
          if (!c)
            throw l;
          c(a, l)
        } finally {
          e.google_measure_js_timing && g && DH(_.u(Object, "assign").call(Object, {}, {
            label: a.toString(),
            value: g,
            duration: (_.hf() || 0) - g,
            type: h
          }, d && f && {
            taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
          }), e)
        }
        return k
      }
    };
    var KH = function(a) {
      lH.call(this, a.uniqueId);
      var b = this;
      this.H = a.lj;
      this.L = 1 === a.size;
      this.O = new nH(a.permissions.cd && !this.L,a.permissions.dd && !this.L);
      this.l = a.xe;
      var c;
      this.ia = null != (c = a.hostpageLibraryTokens) ? c : [];
      var d = window.location;
      c = d.protocol;
      d = d.host;
      this.ca = "file:" == c ? "*" : c + "//" + d;
      this.la = !!a.xc;
      c = "//" + a.Df + (_.F(cz) ? ".safeframe.usercontent.goog" : ".safeframe.googlesyndication.com");
      this.P = a.Df ? c : "//tpc.googlesyndication.com";
      this.aa = a.kd ? "*" : "https:" + this.P;
      this.U = !!a.og;
      this.ja = GH(a);
      this.m = new zH;
      HH(this, a.xe, a.size);
      this.B = this.ha = kH(a.xe);
      this.J = a.zh || "1-0-40";
      var e;
      this.ma = null != (e = a.cg) ? e : "";
      IH(this, a);
      this.D = FH(412, function() {
        return JH(b)
      }, a.La);
      this.F = -1;
      this.A = 0;
      var f = FH(415, function() {
        b.j && (b.j.name = "",
        a.rf && a.rf(),
          _.Ce(b.j, "load", f))
      }, a.La);
      _.yb(this.j, "load", f);
      this.he = FH(413, this.he, a.La);
      this.ze = FH(417, this.ze, a.La);
      this.Ae = FH(419, this.Ae, a.La);
      this.ae = FH(411, this.ae, a.La);
      this.Sd = FH(409, this.Sd, a.La);
      this.M = FH(410, this.M, a.La);
      this.se = FH(416, this.se, a.La);
      this.o = new dG(this.Sa,this.j.contentWindow,this.aa,!1);
      fG(this.o, "init_done", (0,
        _.Bs)(this.he, this));
      fG(this.o, "register_done", (0,
        _.Bs)(this.ze, this));
      fG(this.o, "report_error", (0,
        _.Bs)(this.Ae, this));
      fG(this.o, "expand_request", (0,
        _.Bs)(this.ae, this));
      fG(this.o, "collapse_request", (0,
        _.Bs)(this.Sd, this));
      fG(this.o, "creative_geometry_update", (0,
        _.Bs)(this.M, this));
      this.o.connect((0,
        _.Bs)(this.se, this))
    };
    _.N(KH, lH);
    var HH = function(a, b, c) {
      a.L ? (b.style.width = _.Tx("100%", !0),
        b.style.height = _.Tx("auto", !0)) : (b.style.width = _.Tx(c.width, !0),
        b.style.height = _.Tx(c.height, !0))
    }
      , IH = function(a, b) {
      var c = b.kd
        , d = b.content
        , e = b.vc
        , f = b.size
        , g = void 0 === b.wc ? "3rd party ad content" : b.wc
        , h = b.ed;
      b = b.Nd;
      var k = {
        shared: {
          sf_ver: a.J,
          ck_on: TA() ? 1 : 0,
          flash_ver: "0"
        }
      };
      d = c ? "" : null != d ? d : "";
      d = a.J + ";" + d.length + ";" + d;
      k = new oH(a.G,a.ca,a.ha,a.O,new mH(k),a.L,a.la,a.ia);
      var l = {};
      l.uid = k.o;
      l.hostPeerName = k.m;
      l.initialGeometry = jH(k.G);
      var m = k.permissions;
      m = JSON.stringify({
        expandByOverlay: m.cd,
        expandByPush: m.dd,
        readCookie: m.j,
        writeCookie: m.o
      });
      l = (l.permissions = m,
        l.metadata = JSON.stringify(k.metadata.j),
        l.reportCreativeGeometry = k.B,
        l.isDifferentSourceWindow = k.xc,
        l.goog_safeframe_hlt = gC(k.hostpageLibraryTokens),
        l);
      k.j && (l.sentinel = k.j);
      k = JSON.stringify(l);
      d += k;
      a.U && f instanceof _.Di && (k = _.ax(_.Uw(a.l)),
        l = _.ax(_.Uw(a.l)).location.protocol + a.P,
      VB || cl(k.document, WB),
        VB++,
        k.google_eas_queue = k.google_eas_queue || [],
        k.google_eas_queue.push({
          a: e,
          b: l,
          c: f.width,
          d: f.height,
          e: "sf-gdn-exp-" + VB,
          f: void 0,
          g: void 0,
          h: void 0,
          i: void 0
        }));
      k = f.width;
      f = f.height;
      a.L && (f = k = 0);
      l = {};
      e = (l.id = e,
        l.title = g,
        l.name = d,
        l.scrolling = "no",
        l.marginWidth = "0",
        l.marginHeight = "0",
        l.width = String(k),
        l.height = String(f),
        l["data-is-safeframe"] = "true",
        l);
      void 0 === c && (g = _.ax(_.Uw(a.l)),
        f = a.ma,
        d = a.P,
      (k = f) && (k = "?" + k),
        d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.J + "/html/container.html" + k),
      (k = yH(g)) && (d += (f ? "&" : "?") + "n=" + k),
        f = "https:" + d,
        d = [],
      a.U && (k = ox(g.location.href),
        g = d.push,
        k = [0 < k.length ? "google_debug" + (k ? "=" + k : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.G, "&p=", encodeURIComponent(_.q.document.location.protocol), "//", encodeURIComponent(_.q.document.location.host)].join(""),
        g.call(d, k)),
      d.length && (f += "#" + d.join("&")),
        e.src = f);
      null !== a.ja && (e.sandbox = a.ja);
      h && (e.allow = h);
      b && (e.credentialless = "true");
      e.role = "region";
      e["aria-label"] = "Advertisement";
      e.tabIndex = "0";
      c ? (a.j = c,
        Xw(a.j, e)) : (c = {},
        c = (c.frameborder = 0,
          c.allowTransparency = "true",
          c.style = "border:0;vertical-align:bottom;",
          c.src = "about:blank",
          c),
      e && Ka(c, e),
        h = _.Be("IFRAME"),
        Xw(h, c),
        a.j = h);
      a.L && (a.j.style.minWidth = "100%");
      a.l.appendChild(a.j)
    };
    _.aa = KH.prototype;
    _.aa.se = function() {
      _.yb(window, "resize", this.D);
      _.yb(window, "scroll", this.D)
    }
    ;
    _.aa.he = function(a) {
      try {
        if (0 != this.status)
          throw Error("Container already initialized");
        if ("string" !== typeof a)
          throw Error("Could not parse serialized message");
        var b = JSON.parse(a);
        if (!_.qa(b) || !Oj(b.uid) || "string" !== typeof b.version)
          throw Error("Cannot parse JSON message");
        var c = new qH(b.uid,b.version,b.sentinel);
        if (this.G !== c.o || this.J !== c.version)
          throw Error("Wrong source container");
        this.status = 1
      } catch (e) {
        var d;
        null == (d = this.H) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
      }
    }
    ;
    _.aa.ze = function(a) {
      try {
        if (1 != this.status)
          throw Error("Container not initialized");
        if ("string" !== typeof a)
          throw Error("Could not parse serialized message");
        var b = JSON.parse(a);
        if (!_.qa(b) || !Oj(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight)
          throw Error("Cannot parse JSON message");
        if (this.G !== (new rH(b.uid,b.initialWidth,b.initialHeight,b.sentinel)).o)
          throw Error("Wrong source container");
        this.status = 2
      } catch (d) {
        var c;
        null == (c = this.H) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
      }
    }
    ;
    _.aa.Ae = function(a) {
      try {
        if ("string" !== typeof a)
          throw Error("Could not parse serialized message");
        var b = JSON.parse(a);
        if (!_.qa(b) || !Oj(b.uid) || "string" !== typeof b.description)
          throw Error("Cannot parse JSON message");
        var c = new sH(b.uid,b.description,b.sentinel);
        if (this.G !== c.o)
          throw Error("Wrong source container");
        var d;
        null == (d = this.H) || d.info("Ext reported an error. Description: " + c.description)
      } catch (f) {
        var e;
        null == (e = this.H) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
      }
    }
    ;
    _.aa.ae = function(a) {
      try {
        if (2 != this.status)
          throw Error("Container is not registered");
        if (0 != this.ga)
          throw Error("Container is not collapsed");
        if ("string" !== typeof a)
          throw Error("Could not parse serialized message");
        var b = JSON.parse(a);
        if (!_.qa(b) || !Oj(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push)
          throw Error("Cannot parse JSON message");
        var c = new tH(b.uid,new _.Gx(b.expand_t,b.expand_r,b.expand_b,b.expand_l),b.push,b.sentinel);
        if (this.G !== c.o)
          throw Error("Wrong source container");
        if (!(0 <= c.m.top && 0 <= c.m.left && 0 <= c.m.bottom && 0 <= c.m.right))
          throw Error("Invalid expansion amounts");
        var d;
        if (d = c.push && this.O.dd || !c.push && this.O.cd) {
          var e = c.m
            , f = c.push
            , g = this.B = kH(this.j);
          if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
            if (!f)
              for (var h = this.j.parentNode; h && h.style; h = h.parentNode)
                BH(this.m, h, "overflowX", "visible", "important"),
                  BH(this.m, h, "overflowY", "visible", "important");
            var k = Jx(new Ix(0,0,this.B.o.getWidth(),this.B.o.getHeight()));
            _.qa(e) ? (k.top -= e.top,
              k.right += e.right,
              k.bottom += e.bottom,
              k.left -= e.left) : (k.top -= e,
              k.right += Number(void 0),
              k.bottom += Number(void 0),
              k.left -= Number(void 0));
            BH(this.m, this.l, "position", "relative");
            BH(this.m, this.j, "position", "absolute");
            if (f) {
              var l = k.getWidth();
              BH(this.m, this.l, "width", l + "px");
              var m = k.getHeight();
              BH(this.m, this.l, "height", m + "px")
            } else
              BH(this.m, this.j, "zIndex", "10000");
            var n = k.getWidth();
            BH(this.m, this.j, "width", n + "px");
            var p = k.getHeight();
            BH(this.m, this.j, "height", p + "px");
            BH(this.m, this.j, "left", k.left + "px");
            BH(this.m, this.j, "top", k.top + "px");
            this.ga = 2;
            this.B = kH(this.j);
            d = !0
          } else
            d = !1
        }
        a = d;
        gG(this.o, "expand_response", (new wH(this.G,a,this.B,c.m,c.push)).j());
        if (!a)
          throw Error("Viewport or document body not large enough to expand into.");
      } catch (t) {
        var r;
        null == (r = this.H) || r.error("Invalid EXPAND_REQUEST message. Reason: " + t.message)
      }
    }
    ;
    _.aa.Sd = function(a) {
      try {
        if (2 != this.status)
          throw Error("Container is not registered");
        if (2 != this.ga)
          throw Error("Container is not expanded");
        if ("string" !== typeof a)
          throw Error("Could not parse serialized message");
        var b = JSON.parse(a);
        if (!_.qa(b) || !Oj(b.uid))
          throw Error("Cannot parse JSON message");
        if (this.G !== (new uH(b.uid,b.sentinel)).o)
          throw Error("Wrong source container");
        CH(this.m);
        this.ga = 0;
        this.j && (this.B = kH(this.j));
        gG(this.o, "collapse_response", (new vH(this.G,this.B)).j())
      } catch (d) {
        var c;
        null == (c = this.H) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
      }
    }
    ;
    var JH = function(a) {
      if (1 == a.status || 2 == a.status)
        switch (a.A) {
          case 0:
            LH(a);
            a.F = window.setTimeout((0,
              _.Bs)(a.Y, a), 1E3);
            a.A = 1;
            break;
          case 1:
            a.A = 2;
            break;
          case 2:
            a.A = 2
        }
    };
    KH.prototype.M = function(a) {
      try {
        if ("string" !== typeof a)
          throw Error("Could not parse serialized message");
        var b = JSON.parse(a);
        if (!_.qa(b) || !Oj(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel)
          throw Error("Cannot parse JSON message");
        var c = new xH(b.uid,b.width,b.height,b.sentinel);
        if (this.G !== c.o)
          throw Error("Wrong source container");
        var d = String(c.height);
        if (this.L)
          d !== this.j.height && (this.j.height = d,
            JH(this));
        else {
          var e;
          null == (e = this.H) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
        }
      } catch (g) {
        var f;
        null == (f = this.H) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
      }
    }
    ;
    KH.prototype.Y = function() {
      if (1 == this.status || 2 == this.status)
        switch (this.A) {
          case 1:
            this.A = 0;
            break;
          case 2:
            LH(this),
              this.F = window.setTimeout((0,
                _.Bs)(this.Y, this), 1E3),
              this.A = 1
        }
    }
    ;
    var LH = function(a) {
      a.B = kH(a.j);
      gG(a.o, "geometry_update", (new vH(a.G,a.B)).j())
    }
      , GH = function(a) {
      var b = null;
      a.Ff && (b = a.Ff);
      return null == b ? null : b.join(" ")
    }
      , MH = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"]
      , NH = ["allow-top-navigation"]
      , OH = ["allow-same-origin"]
      , PH = rx([].concat(_.xe(MH), _.xe(NH)));
    rx([].concat(_.xe(MH), _.xe(OH)));
    rx([].concat(_.xe(MH), _.xe(NH), _.xe(OH)));
    var QH = _.P(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"])
      , RH = {
      Vg: function(a) {
        if ("string" !== typeof a.version)
          throw new TypeError("version is not a string");
        if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version))
          throw new RangeError("Invalid version: " + a.version);
        if ("string" !== typeof a.Kc)
          throw new TypeError("subdomain is not a string");
        if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Kc))
          throw new RangeError("Invalid subdomain: " + a.Kc);
        return a.Lh ? ue("https://" + a.Kc + ".safeframe.usercontent.goog/safeframe/" + a.version + "/html/container.html") : ue("https://" + a.Kc + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
      },
      wj: function(a) {
        return _.A(QH, a)
      }
    };
    var Qj = function(a, b) {
      try {
        Kb(hq(a, b))
      } catch (c) {}
    };
    var SH = function(a) {
      _.Q.call(this, a)
    };
    _.N(SH, _.Q);
    SH.prototype.m = ie([SH, 4, Lu, 2, Lu, 1, Lu, 3, Lu, 5, Ou]);
    var TH = [.05, .1, .2, .5]
      , UH = [0, .5, 1]
      , VH = function(a) {
      a = wg(a);
      if (!a)
        return -1;
      try {
        var b = XB(a.document);
        var c = new _.Di(b.clientWidth,b.clientHeight)
      } catch (d) {
        c = new _.Di(-12245933,-12245933)
      }
      return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
    }
      , WH = function(a, b) {
      return 0 >= a || 0 >= b ? [] : _.Ad(TH, function(c) {
        return Math.min(a / b * c, 1)
      })
    }
      , YH = function(a) {
      this.B = a.win;
      this.m = a.nb;
      this.l = a.Hb;
      this.o = null;
      this.G = a.La;
      this.j = XH(this, a.ig);
      this.H = a.Dh || !1
    };
    YH.prototype.getSlotId = function() {
      return this.o
    }
    ;
    var $H = function(a, b) {
      if (a.j) {
        if (null != a.o) {
          try {
            ZH(a, Math.round(performance.now()), 0, 0, 0, !1)
          } catch (c) {
            a.G && a.G(c)
          }
          a.j && a.j.unobserve(a.m)
        }
        a.o = b;
        a.j.observe(a.m)
      }
    }
      , XH = function(a, b) {
      var c = a.m.offsetWidth * a.m.offsetHeight
        , d = VH(a.B);
      c = [].concat(_.xe(UH), _.xe(WH(d, c)));
      ta(c);
      return _.q.IntersectionObserver ? new _.q.IntersectionObserver(function(e) {
          return aI(a, e)
        }
        ,{
          threshold: c
        }) : b ? null : new Eq(function(e) {
          return aI(a, e)
        }
        ,{
          threshold: c
        })
    }
      , aI = function(a, b) {
      try {
        var c = VH(a.B);
        _.Ps(b, function(d) {
          a.H && ZH(a, Math.round(d.time), d.boundingClientRect.width * d.boundingClientRect.height, d.intersectionRect.width * d.intersectionRect.height, c, d.isIntersecting)
        })
      } catch (d) {
        a.G && a.G(d)
      }
    }
      , ZH = function(a, b, c, d, e, f) {
      if (null == a.o)
        throw Error("Not Attached.");
      var g = new SH;
      c = _.z(g, 1, c);
      d = _.z(c, 2, d);
      e = _.z(d, 3, e);
      b = _.z(e, 4, b);
      f = _.z(b, 5, f);
      f = Pb(f.m(), 4);
      iB(a.l, "1", 10, f, void 0, a.o)
    };
    var bI = function(a, b) {
      this.j = a;
      this.o = b
    }
      , cI = function(a) {
      if (a.j.frames.google_ads_top_frame)
        return !0;
      var b = vx(a.j);
      b = b && b.contentWindow;
      if (!b)
        return !1;
      b.addEventListener("message", function(c) {
        var d = c.ports;
        "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
          msgType: "__goog_top_url_resp",
          topUrl: a.o
        })
      }, !1);
      return !0
    };
    var bk = function(a) {
      _.Q.call(this, a)
    };
    _.N(bk, _.Q);
    var fk = je(bk)
      , dk = [1, 3];
    var Ee = {
      aj: 0,
      Wi: 1,
      Xi: 9,
      Ui: 2,
      Vi: 3,
      Zi: 5,
      Yi: 7
    };
    var dI = _.P(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"])
      , Vj = _.A(dI);
    var Ck = function(a) {
      _.Q.call(this, a)
    };
    _.N(Ck, _.Q);
    Ck.prototype.getVersion = function() {
      return _.Vf(this, 2)
    }
    ;
    var Bk = function(a) {
      _.Q.call(this, a, -1, eI)
    };
    _.N(Bk, _.Q);
    var vk = function(a, b) {
      return _.z(a, 2, b)
    }
      , Ak = function(a, b) {
      return _.z(a, 3, b)
    }
      , xk = function(a, b) {
      return _.z(a, 4, b)
    }
      , uk = function(a, b) {
      return _.z(a, 5, b)
    }
      , zk = function(a, b) {
      return _.z(a, 9, b)
    }
      , tk = function(a, b) {
      return _.Bd(a, 10, b)
    }
      , sk = function(a, b) {
      return _.z(a, 11, b)
    }
      , wk = function(a, b) {
      return _.z(a, 1, b)
    }
      , yk = function(a, b) {
      return _.z(a, 7, b)
    }
      , eI = [10, 6];
    var qk = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    var fI = function() {
      this.id = "goog_" + Qw++
    }
      , gI = function(a) {
      _.S.call(this);
      this.context = a;
      this.m = new _.v.Map
    };
    _.N(gI, _.S);
    gI.prototype.o = function() {
      _.S.prototype.o.call(this);
      this.m.clear()
    }
    ;
    gI.prototype.Z = function(a, b) {
      var c = this;
      if (this.G)
        return function() {}
          ;
      var d = "string" === typeof a ? a : a.id, e, f, g = null != (f = null == (e = this.m.get(d)) ? void 0 : e.add(b)) ? f : new _.v.Set([b]);
      this.m.set(d, g);
      return function() {
        return void hI(c, a, b)
      }
    }
    ;
    var iI = function(a, b, c) {
      c = void 0 === c ? function() {
          return !0
        }
        : c;
      return new _.v.Promise(function(d) {
          var e = a.Z(b, function(f) {
            c(f) && (e(),
              d(f))
          })
        }
      )
    }
      , hI = function(a, b, c) {
      var d;
      return !(null == (d = a.m.get("string" === typeof b ? b : b.id)) || !d.delete(c))
    };
    gI.prototype.dispatchEvent = function(a, b, c) {
      var d = this, e, f, g, h, k, l, m, n;
      return _.Ab(function(p) {
        e = "string" === typeof a ? a : a.id;
        f = d.m.get(e);
        if (null == (g = f) || !g.size)
          return p.return();
        h = "function" === typeof window.CustomEvent ? new CustomEvent(e,{
          detail: c,
          bubbles: !0,
          cancelable: !0
        }) : function() {
          var r = document.createEvent("CustomEvent");
          r.initCustomEvent(e, !0, !0, c);
          return r
        }();
        k = [];
        l = {};
        m = _.x(f);
        for (n = m.next(); !n.done; l = {
          Nc: l.Nc
        },
          n = m.next())
          l.Nc = n.value,
            k.push(new _.v.Promise(function(r) {
              return function(t) {
                return _.Ab(function(w) {
                  if (1 == w.j)
                    return Bb(w, 0, 2);
                  $h(d.context, b, function() {
                    d.m.has(e) && f.has(r.Nc) && r.Nc(h)
                  }, !0);
                  t();
                  w.j = 0
                })
              }
            }(l)));
        return Bb(p, _.v.Promise.all(k), 0)
      })
    }
    ;
    var jI = new fI
      , kI = new fI
      , yq = new fI
      , lI = new fI
      , Aq = new fI
      , mI = new fI
      , nI = new fI
      , mq = new fI
      , oI = new fI
      , pI = new fI;
    var qI = function() {
      this.data = void 0;
      this.status = 0;
      this.j = []
    };
    qI.prototype.fd = function() {
      return this.j
    }
    ;
    qI.prototype.Pd = function() {
      this.j = []
    }
    ;
    var rI, vI, yI, vr, zI, AI, uI, tI, sI, BI;
    rI = function() {
      this.j = new _.v.Map;
      this.B = 0;
      this.o = new _.v.Map;
      this.Zc = null;
      this.G = this.m = this.A = this.l = 0;
      this.H = new qI
    }
    ;
    vI = function(a, b) {
      a.j.get(b) || (a.j.set(b, {
        Fb: !0,
        we: "",
        Kb: "",
        Af: 0,
        lf: 0,
        te: [],
        ue: [],
        Ab: !1
      }),
        _.fo(b, function() {
          a.j.delete(b);
          sI(a, b)
        }),
        b.Z(kI, function(c) {
          c = c.detail;
          var d = (0,
            C.I)(a.j.get(b));
          d.we = y(c, 33) || "";
          d.Ab = !0;
          tI(a, b, function() {
            return void (d.we = "")
          });
          uI(a, b, function() {
            return void (d.Ab = !1)
          })
        }))
    }
    ;
    _.zq = function(a, b) {
      var c, d;
      return null != (d = null == (c = a.j.get(b)) ? void 0 : c.Fb) ? d : !1
    }
    ;
    _.wI = function(a, b) {
      if (a = a.j.get(b))
        a.Fb = !1
    }
    ;
    _.xI = function(a, b) {
      if (a = a.j.get(b))
        a.Fb = !0
    }
    ;
    yI = function(a, b) {
      if (!b.length)
        return [];
      var c = Ih(b[0].getAdUnitPath());
      b.every(function(g) {
        return Ih(g.getAdUnitPath()) === c
      });
      var d = [];
      a = _.x(a.j);
      for (var e = a.next(); !e.done; e = a.next()) {
        var f = _.x(e.value);
        e = f.next().value;
        (f = f.next().value.we) && Ih(e.getAdUnitPath()) === c && !_.u(b, "includes").call(b, e) && d.push(f)
      }
      return d
    }
    ;
    vr = function(a, b) {
      var c, d;
      return null != (d = null == (c = a.j.get(b)) ? void 0 : c.Kb) ? d : ""
    }
    ;
    zI = function(a, b) {
      return (a = a.j.get(b)) ? a.Af - 1 : 0
    }
    ;
    AI = function(a, b) {
      var c = (0,
        C.I)(a.o.get(b)) - 1;
      0 === c ? a.o.delete(b) : a.o.set(b, c);
      return c
    }
    ;
    uI = function(a, b, c) {
      (a = a.j.get(b)) && a.te.push(c)
    }
    ;
    tI = function(a, b, c) {
      (a = a.j.get(b)) && a.ue.push(c)
    }
    ;
    sI = function(a, b) {
      if (a = a.j.get(b))
        for (b = a.ue.slice(),
               a.ue.length = 0,
               a = _.x(b),
               b = a.next(); !b.done; b = a.next())
          b = b.value,
            b()
    }
    ;
    BI = function(a, b) {
      if (a = a.j.get(b))
        for (b = a.te.slice(),
               a.te.length = 0,
               a = _.x(b),
               b = a.next(); !b.done; b = a.next())
          b = b.value,
            b()
    }
    ;
    rI.prototype.Ab = function(a) {
      var b, c;
      return null != (c = null == (b = this.j.get(a)) ? void 0 : b.Ab) ? c : !1
    }
    ;
    var CI = function(a, b, c) {
      if (a = a.j.get(b))
        a.zf = c
    }
      , DI = function(a, b) {
      if (a = a.j.get(b)) {
        var c;
        null == (c = a.zf) || c.Ca();
        delete a.zf
      }
    };
    var EI = function() {
      var a = {};
      return a.adsense_channel_ids = "channel",
        a.adsense_ad_types = "ad_type",
        a.adsense_ad_format = "format",
        a.adsense_background_color = "color_bg",
        a.adsense_border_color = "color_border",
        a.adsense_link_color = "color_link",
        a.adsense_text_color = "color_text",
        a.adsense_url_color = "color_url",
        a.page_url = "url",
        a.adsense_allow_expandable_ads = "ea",
        a.adsense_encoding = "oe",
        a.adsense_family_safe = "adsafe",
        a.adsense_flash_version = "flash",
        a.adsense_font_face = "f",
        a.adsense_hints = "hints",
        a.adsense_keyword_type = "kw_type",
        a.adsense_keywords = "kw",
        a.adsense_test_mode = "adtest",
        a.alternate_ad_iframe_color = "alt_color",
        a.alternate_ad_url = "alternate_ad_url",
        a.demographic_age = "cust_age",
        a.demographic_gender = "cust_gender",
        a.document_language = "hl",
        a
    };
    var Z = function(a, b, c) {
      KB.call(this, b, c);
      this.context = a
    };
    _.N(Z, KB);
    Z.prototype.P = function(a) {
      Yh(this.context, this.id, a);
      var b, c;
      null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    }
    ;
    var FI = function(a, b, c, d, e) {
      var f = null
        , g = Uh(a.context, b, e);
      _.yb(c, d, g) && (f = function() {
        return _.Ce(c, d, g)
      }
        ,
        _.fo(a, f));
      return f
    };
    var GI = /(<head(\s+[^>]*)?>)/i
      , Qq = function(a, b, c, d, e) {
      Z.call(this, a, 665);
      this.C = W(this);
      this.l = X(this, b);
      this.D = Y(this, c);
      this.F = X(this, d);
      this.A = X(this, e)
    };
    _.N(Qq, Z);
    Qq.prototype.j = function() {
      var a;
      0 === this.l.value.kind && null != (a = this.D.value) && y(a, 1) ? (a = this.l.value.Ta,
      this.A.value || Xa() || (a = a.replace(GI, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")),
      this.F.value && !this.A.value && (a = a.replace(GI, '$1<meta name="referrer" content="origin">')),
        O(this.C, {
          kind: 0,
          Ta: a
        })) : O(this.C, this.l.value)
    }
    ;
    var wr = function(a, b, c, d, e, f, g, h) {
      Z.call(this, a, 718);
      this.D = Y(this, c);
      this.l = Y(this, d);
      NB(this, e);
      this.F = X(this, f);
      this.A = X(this, g);
      this.M = X(this, h);
      this.J = iI(b, oI)
    };
    _.N(wr, Z);
    wr.prototype.j = function() {
      var a = this, b, c, d;
      return _.Ab(function(e) {
        if (1 == e.j) {
          var f = !a.M.value;
          if (null == a.l.value || "height" !== a.D.value || f)
            return e.return();
          b = a.F.value;
          c = a.A.value;
          HI(c, !1);
          _.Nx(c, "min-width", "100%");
          _.Nx(b, "min-width", "100%");
          return Bb(e, a.J, 2)
        }
        if (a.G)
          return e.return();
        d = b.contentDocument;
        if (!d)
          return e.return();
        f = d.body.offsetWidth;
        b.setAttribute("height", String(d.body.offsetHeight));
        b.setAttribute("width", String(f));
        HI(c, !0);
        e.j = 0
      })
    }
    ;
    var HI = function(a, b) {
      _.Nx(a, "visibility", b ? "visible" : "hidden")
    };
    var Ik = new _.v.Map
      , Hk = new _.v.Map;
    var Kk = function(a, b) {
      this.push = K(a, 76, b.push.bind(b))
    };
    var Mk = function(a, b) {
      this.messageId = a;
      this.messageArgs = b
    };
    Mk.prototype.getMessageId = function() {
      return this.messageId
    }
    ;
    Mk.prototype.getMessageArgs = function() {
      return this.messageArgs
    }
    ;
    var II = M(2)
      , JI = M(3)
      , KI = M(4)
      , LI = M(5)
      , MI = M(6)
      , NI = M(12)
      , OI = M(14)
      , PI = M(16)
      , QI = M(19)
      , RI = M(20)
      , SI = M(23)
      , TI = M(26)
      , UI = M(28)
      , VI = M(149)
      , WI = M(30)
      , XI = M(31)
      , YI = M(34)
      , ZI = M(35)
      , $I = M(36)
      , Ap = M(38)
      , aJ = M(40)
      , bJ = M(48)
      , cJ = M(50)
      , dJ = M(60)
      , eJ = M(63)
      , fJ = M(64)
      , gJ = M(66)
      , hJ = M(68)
      , iJ = M(69)
      , jJ = M(70)
      , kJ = M(71)
      , lJ = M(78)
      , mJ = M(80)
      , nJ = M(82)
      , oJ = M(84)
      , pJ = M(85)
      , qJ = M(87)
      , pl = M(88)
      , rJ = M(92)
      , sJ = M(93)
      , tJ = M(99)
      , uJ = M(103)
      , vJ = M(104)
      , wJ = M(105)
      , xJ = M(106)
      , yJ = M(107)
      , zJ = M(108)
      , AJ = M(113)
      , BJ = M(114)
      , CJ = M(115)
      , DJ = M(117)
      , EJ = M(118)
      , FJ = M(119)
      , Il = M(121)
      , GJ = M(122)
      , HJ = M(123)
      , Vp = M(125)
      , IJ = M(126)
      , JJ = M(127)
      , KJ = M(144)
      , kp = M(129)
      , mp = M(132)
      , LJ = M(134)
      , MJ = M(135)
      , NJ = M(136)
      , OJ = M(137)
      , PJ = M(138)
      , QJ = M(139)
      , RJ = M(140)
      , iq = M(142)
      , SJ = M(143)
      , TJ = M(145)
      , UJ = M(147)
      , Hp = M(148)
      , VJ = M(150);
    var WJ = function(a, b, c) {
      var d = this;
      this.addEventListener = K(a, 86, function(e, f) {
        if ("function" !== typeof f)
          return kl(b, Ok("Service.addEventListener", [e, f])),
            d;
        var g = Pk(e);
        if (!g)
          return kl(b, sJ(e)),
            d;
        c.addEventListener(g, f);
        return d
      });
      this.removeEventListener = K(a, 904, function(e, f) {
        var g = Pk(e);
        "function" === typeof f && g ? c.removeEventListener(g, f) : kl(b, Ok("Service.removeEventListener", [e, f]))
      });
      this.getSlots = K(a, 573, function() {
        return c.m.map(function(e) {
          return (0,
            C.I)(e.j)
        })
      });
      this.getSlotIdMap = K(a, 574, function() {
        for (var e = {}, f = _.x(c.m), g = f.next(); !g.done; g = f.next())
          g = g.value,
            e[g.toString()] = g.j;
        return e
      });
      this.getName = K(a, 575, function() {
        return c.getName()
      })
    };
    var Qk = function(a, b, c) {
      WJ.call(this, a, b, c);
      this.notifyUnfilledSlots = K(a, 69, function(d) {
        c.Fb && XJ(c, YJ(c, d))
      });
      this.refreshAllSlots = K(a, 60, function() {
        c.Fb && XJ(c)
      });
      this.setVideoSession = K(a, 61, function(d, e, f) {
        c.J = e;
        c.P = f;
        "number" === typeof d && (e = pj().j,
          _.z(e, 29, d))
      });
      this.getDisplayAdsCorrelator = K(a, 62, function(d) {
        return ZJ(c, d)
      });
      this.getVideoStreamCorrelator = K(a, 63, function() {
        var d = pj().j;
        d = y(d, 29);
        return null != d ? d : 0
      });
      this.isSlotAPersistentRoadblock = K(a, 64, function(d) {
        var e = _.u(c.m, "find").call(c.m, function(f) {
          return f.j === d
        });
        return !!e && $J(c, e)
      });
      this.onImplementationLoaded = K(a, 65, function() {
        c.j.info(bJ("GPT CompanionAds"))
      });
      this.slotRenderEnded = K(a, 67, function(d, e, f) {
        var g = _.u(c.m, "find").call(c.m, function(h) {
          return h.j === d
        });
        return g && aK(c, g, e, f)
      });
      this.setRefreshUnfilledSlots = K(a, 59, function(d) {
        return c.setRefreshUnfilledSlots(d)
      })
    };
    _.N(Qk, WJ);
    var Sk = function(a, b, c) {
      WJ.call(this, a, b, c);
      this.setContent = K(a, 72, function(d) {
        var e = _.u(c.m, "find").call(c.m, function(f) {
          return f.j === d
        });
        kl(b, KJ(), e)
      })
    };
    _.N(Sk, WJ);
    var bK = _.P(["https://console.googletagservices.com/pubconsole/loader.js"]), dl = _.A(bK), hl, gl = !1, Zk = !1, al = !1;
    var xp = function(a, b) {
      this.getAllEvents = K(a, 563, function() {
        return Zk ? cK(b).slice() : []
      });
      this.getEventsBySlot = K(a, 565, function(c) {
        return Zk ? dK(b, c).slice() : []
      });
      this.getEventsByLevel = K(a, 566, function(c) {
        return Zk ? eK(b, c).slice() : []
      })
    };
    var sl = function(a, b, c, d) {
      var e = this
        , f = c.getSlotId()
        , g = pj().j
        , h = (0,
        C.I)(Yn(pj(), f.getDomId()));
      this.set = K(a, 83, function(k, l) {
        "page_url" === k && l && (k = [ml(nl(new ol, k), [String(l)])],
          _.Bd(h, 3, k));
        return e
      });
      this.get = K(a, 84, function(k) {
        if ("page_url" !== k)
          return null;
        var l, m;
        return null != (m = null == (l = (_.D = (0,
          C.I)(h.wa()),
          _.u(_.D, "find")).call(_.D, function(n) {
          return y(n, 1) === k
        })) ? void 0 : _.cn(l, 2)[0]) ? m : null
      });
      this.setClickUrl = K(a, 79, function(k) {
        "string" === typeof k ? h.setClickUrl(k) : kl(b, Ok("Slot.setClickUrl", [k]), f);
        return e
      });
      this.setTargeting = K(a, 81, function(k, l) {
        ql(f, h, k, l, b);
        return e
      });
      this.updateTargetingFromMap = K(a, 85, function(k) {
        rl(f, h, k, b);
        return e
      });
      this.display = K(a, 78, function() {
        fK(d, f, Gi(g, pj().o))
      });
      this.setTagForChildDirectedTreatment = K(a, 80, function(k) {
        if (0 === k || 1 === k) {
          var l = fH(g) || new cH;
          l.setTagForChildDirectedTreatment(k);
          _.Oh(g, 25, l)
        }
        return e
      });
      this.setForceSafeFrame = K(a, 567, function(k) {
        "boolean" === typeof k ? _.z(h, 12, k) : kl(b, Ok("PassbackSlot.setForceSafeFrame", [String(k)]), f);
        return e
      });
      this.setTagForUnderAgeOfConsent = K(a, 448, function(k) {
        if (0 === k || 1 === k) {
          var l = fH(g) || new cH;
          l.setTagForUnderAgeOfConsent(k);
          _.Oh(g, 25, l)
        }
        return e
      })
    };
    var Fn = function(a, b) {
      this.push = K(a, 932, function(c) {
        b.push(c)
      })
    };
    var ap = {
      Ti: 0,
      Qi: 1,
      Ri: 2,
      Si: 3
    };
    var vl = {
      REWARDED: 4,
      TOP_ANCHOR: 2,
      BOTTOM_ANCHOR: 3,
      INTERSTITIAL: 5
    }
      , xl = {
      IAB_AUDIENCE_1_1: 1,
      IAB_CONTENT_2_1: 2,
      IAB_CONTENT_2_2: 3
    }
      , wl = {
      PURCHASED: 1,
      ORGANIC: 2
    };
    var Tl = function(a, b, c) {
      gI.call(this, a);
      this.slotId = b;
      this.j = c
    };
    _.N(Tl, gI);
    Tl.prototype.getSlotId = function() {
      return this.slotId
    }
    ;
    var gK = ""
      , Bl = null
      , Hl = _.Ls(function() {
      var a, b;
      null == (a = window.console) || null == (b = a.warn) || b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.")
    });
    var Ge = function(a, b, c, d) {
      gI.call(this, a);
      this.adUnitPath = b;
      this.nb = d;
      this.j = null;
      this.id = this.adUnitPath + "_" + c
    };
    _.N(Ge, gI);
    _.aa = Ge.prototype;
    _.aa.getId = function() {
      return this.id
    }
    ;
    _.aa.getAdUnitPath = function() {
      return this.adUnitPath
    }
    ;
    _.aa.getName = function() {
      return this.adUnitPath
    }
    ;
    _.aa.toString = function() {
      return this.getId()
    }
    ;
    _.aa.getDomId = function() {
      return this.nb
    }
    ;
    var hK = function(a, b) {
      a.j = b
    };
    var Nl = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
    var iK = _.Ls(function() {
      return void zx("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
    })
      , jK = _.Ls(function() {
      return void zx("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
    })
      , kK = _.Ls(function() {
      return void zx("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
    })
      , lK = function() {
      Object.defineProperty(window, "google_DisableInitialLoad", {
        get: function() {
          iK();
          return !0
        },
        set: function() {
          iK()
        },
        configurable: !0
      })
    }
      , Vl = function(a, b, c, d, e) {
      WJ.call(this, a, b, c);
      var f = this
        , g = pj().j
        , h = pj().o
        , k = !1;
      this.setTargeting = K(a, 1, function(l, m) {
        var n = null;
        "string" === typeof m ? n = [m] : Array.isArray(m) ? n = m : Aa(m) && (n = _.u(Array, "from").call(Array, m));
        var p = "string" === typeof l && !jl(l);
        n = n && Fa(n);
        var r, t = null != (r = null == n ? void 0 : n.every(function(w) {
          return "string" === typeof w
        })) ? r : !1;
        if (!p || !t)
          return kl(b, Ok("PubAdsService.setTargeting", [l, m])),
            f;
        m = n;
        p = (_.D = _.Pe(g, ol, 2),
          _.u(_.D, "find")).call(_.D, function(w) {
          return y(w, 1) === l
        });
        if ("gpt-beta" === l) {
          if (c.B)
            return kl(b, xJ(m.join())),
              f;
          if (p)
            return kl(b, yJ(m.join())),
              f;
          m = Rl(m, e)
        }
        p ? ml(p, m) : (p = ml(nl(new ol, l), m),
          _.Yf(g, 2, ol, p));
        b.info(pl(l, m.join(), c.getName()));
        return f
      });
      this.clearTargeting = K(a, 2, function(l) {
        if (void 0 === l)
          return _.Bd(g, 2),
            b.info(vJ(c.getName())),
            f;
        if ("gpt-beta" === l)
          return kl(b, zJ(l)),
            f;
        var m = _.Pe(g, ol, 2)
          , n = _.u(m, "findIndex").call(m, function(p) {
          return y(p, 1) === l
        });
        if (0 > n)
          return kl(b, oJ(l, c.getName())),
            f;
        m.splice(n, 1);
        _.Bd(g, 2, m);
        b.info(nJ(l, c.getName()));
        return f
      });
      this.getTargeting = K(a, 38, function(l) {
        if ("string" !== typeof l)
          return kl(b, Ok("PubAdsService.getTargeting", [l])),
            [];
        var m = (_.D = _.Pe(g, ol, 2),
          _.u(_.D, "find")).call(_.D, function(n) {
          return y(n, 1) === l
        });
        return m ? _.cn(m, 2).slice() : []
      });
      this.getTargetingKeys = K(a, 39, function() {
        return _.Pe(g, ol, 2).map(function(l) {
          return (0,
            C.I)(y(l, 1))
        })
      });
      this.setCategoryExclusion = K(a, 3, function(l) {
        if ("string" !== typeof l || jl(l))
          return kl(b, Ok("PubAdsService.setCategoryExclusion", [l])),
            f;
        (_.D = _.cn(g, 3),
          _.u(_.D, "includes")).call(_.D, l) || Cu(g, 3, l);
        b.info(pJ(l));
        return f
      });
      this.clearCategoryExclusions = K(a, 4, function() {
        _.z(g, 3, Wc);
        b.info(qJ());
        return f
      });
      this.disableInitialLoad = K(a, 5, function() {
        _.z(g, 4, !0);
        k || (k = !0,
          lK())
      });
      this.enableSingleRequest = K(a, 6, function() {
        if (c.B && !E(g, 6))
          return kl(b, dJ("PubAdsService.enableSingleRequest")),
            !1;
        b.info(eJ("single request"));
        _.z(g, 6, !0);
        return !0
      });
      this.enableAsyncRendering = K(a, 7, function() {
        return !0
      });
      this.enableSyncRendering = K(a, 8, function() {
        zx("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
        return !1
      });
      this.enableLazyLoad = K(a, 485, function(l) {
        var m = new Tq;
        m = _.z(m, 1, 800);
        m = _.z(m, 2, 400);
        m = ZG(m, 3);
        if (_.qa(l)) {
          var n = l.fetchMarginPercent;
          "number" === typeof n && (0 <= n ? _.z(m, 1, n) : -1 === n && uf(m, 1));
          n = l.renderMarginPercent;
          "number" === typeof n && (0 <= n ? _.z(m, 2, n) : -1 === n && uf(m, 2));
          l = l.mobileScaling;
          "number" === typeof l && (0 < l ? _.z(m, 3, _.Bc(l)) : -1 === l && _.z(m, 3, _.Bc(1)))
        }
        _.F(Dq) && !window.IntersectionObserver && (Vn(m, 1) || Vn(m, 2)) ? kl(b, VJ()) : _.Oh(g, 5, m)
      });
      this.setCentering = K(a, 9, function(l) {
        l = !!l;
        b.info(fJ("centering", String(l)));
        _.z(g, 15, l)
      });
      this.definePassback = K(a, 10, function(l, m) {
        return (l = Ul(a, b, c, l, m, d)) && l.uf
      });
      this.refresh = K(a, 11, function() {
        var l = _.wb.apply(0, arguments)
          , m = _.x(l)
          , n = m.next().value;
        m = m.next().value;
        m = void 0 === m ? {} : m;
        n && !Array.isArray(n) || !_.qa(m) || m.changeCorrelator && "boolean" !== typeof m.changeCorrelator ? kl(b, Ok("PubAdsService.refresh", l)) : (m && !1 === m.changeCorrelator || g.setCorrelator(Dx()),
          n = n ? Ql(n, c) : c.m,
        c.refresh(Gi(g, h), n) || kl(b, Ok("PubAdsService.refresh", l)))
      });
      this.enableVideoAds = K(a, 12, function() {
        _.z(g, 21, !0);
        mK(c, g)
      });
      this.setVideoContent = K(a, 13, function(l, m) {
        nK(c, l, m, g)
      });
      this.collapseEmptyDivs = K(a, 14, function(l) {
        l = void 0 === l ? !1 : l;
        _.z(g, 11, !0);
        l = !!l;
        _.z(g, 10, l);
        b.info(lJ(String(l)));
        return !!E(g, 11)
      });
      this.clear = K(a, 15, function(l) {
        if (Array.isArray(l))
          return oK(c, g, h, Ql(l, c));
        if (void 0 === l)
          return oK(c, g, h, c.m);
        kl(b, Ok("PubAdsService.clear", [l]));
        return !1
      });
      this.setLocation = K(a, 16, function(l) {
        if ("string" !== typeof l)
          return kl(b, Ok("PubAdsService.setLocation", [l])),
            f;
        _.z(g, 8, l);
        return f
      });
      this.setCookieOptions = K(a, 17, function() {
        jK();
        return f
      });
      this.setTagForChildDirectedTreatment = K(a, 18, function(l) {
        kK();
        if (1 !== l && 0 !== l)
          return kl(b, GJ("PubadsService.setTagForChildDirectedTreatment", Jl(l), "0,1")),
            f;
        var m = fH(g) || new cH;
        m.setTagForChildDirectedTreatment(l);
        _.Oh(g, 25, m);
        return f
      });
      this.clearTagForChildDirectedTreatment = K(a, 19, function() {
        kK();
        var l = fH(g);
        if (!l)
          return f;
        l.clearTagForChildDirectedTreatment();
        _.Oh(g, 25, l);
        return f
      });
      this.setPublisherProvidedId = K(a, 20, function(l) {
        l = String(l);
        b.info(fJ("PPID", l));
        _.z(g, 16, l);
        return f
      });
      this.set = K(a, 21, function(l, m) {
        if ("string" !== typeof l || !l.length || void 0 === EI()[l] || "string" !== typeof m)
          return kl(b, Ok("PubAdsService.set", [l, m])),
            f;
        var n = (_.D = g.wa(),
          _.u(_.D, "find")).call(_.D, function(p) {
          return y(p, 1) === l
        });
        n ? ml(n, [m]) : (n = YG(nl(new ol, l), m),
          _.Yf(g, 14, ol, n));
        b.info($I(l, String(m), c.getName()));
        return f
      });
      this.get = K(a, 22, function(l) {
        if ("string" !== typeof l)
          return kl(b, Ok("PubAdsService.get", [l])),
            null;
        var m = (_.D = g.wa(),
          _.u(_.D, "find")).call(_.D, function(n) {
          return y(n, 1) === l
        });
        return (m = m && _.cn(m, 2)) ? m[0] : null
      });
      this.getAttributeKeys = K(a, 23, function() {
        return g.wa().map(function(l) {
          return (0,
            C.I)(y(l, 1))
        })
      });
      this.display = K(a, 24, function(l, m, n, p) {
        return void c.display(l, m, d, n, p)
      });
      this.updateCorrelator = K(a, 25, function() {
        zx(Pl("update"));
        kl(b, CJ());
        g.setCorrelator(Dx());
        return f
      });
      this.defineOutOfPagePassback = K(a, 35, function(l) {
        l = Ul(a, b, c, l, [1, 1], d);
        if (!l)
          return null;
        _.z(l.hb, 15, 1);
        return l.uf
      });
      this.setForceSafeFrame = K(a, 36, function(l) {
        if ("boolean" !== typeof l)
          return kl(b, Ok("PubAdsService.setForceSafeFrame", [Jl(l)])),
            f;
        _.z(g, 13, l);
        return f
      });
      this.setSafeFrameConfig = K(a, 37, function(l) {
        var m = Kl(b, l);
        if (!m)
          return kl(b, Ok("PubAdsService.setSafeFrameConfig", [l])),
            f;
        _.Oh(g, 18, m);
        return f
      });
      this.setRequestNonPersonalizedAds = K(a, 445, function(l) {
        kK();
        if (0 !== l && 1 !== l)
          return kl(b, GJ("PubAdsService.setRequestNonPersonalizedAds", Jl(l), "0,1")),
            f;
        var m = fH(g) || new cH;
        _.z(m, 8, !!l);
        _.Oh(g, 25, m);
        return f
      });
      this.setTagForUnderAgeOfConsent = K(a, 447, function(l) {
        l = void 0 === l ? 2 : l;
        kK();
        if (2 !== l && 0 !== l && 1 !== l)
          return kl(b, GJ("PubadsService.setTagForUnderAgeOfConsent", Jl(l), "2,0,1")),
            f;
        var m = fH(g) || new cH;
        m.setTagForUnderAgeOfConsent(l);
        _.Oh(g, 25, m);
        return f
      });
      this.getCorrelator = K(a, 27, function() {
        return String(y(g, 26))
      });
      this.getTagSessionCorrelator = K(a, 631, function() {
        return rf(_.q)
      });
      this.getVideoContent = K(a, 30, function() {
        return pK(c, g)
      });
      this.getVersion = K(a, 568, function() {
        return a.Cb ? String(a.Cb) : a.Ma
      });
      this.forceExperiment = K(a, 569, function(l) {
        return void c.forceExperiment(l)
      });
      this.setCorrelator = K(a, 28, function(l) {
        zx(Pl("set"));
        kl(b, BJ());
        if (xi(window))
          return f;
        if (!tm(l))
          return kl(b, Ok("PubadsService.setCorrelator", [Jl(l)])),
            f;
        l = g.setCorrelator(l);
        _.z(l, 27, !0);
        return f
      });
      this.markAsAmp = K(a, 570, function() {
        window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
      });
      this.isSRA = K(a, 571, function() {
        return !!E(g, 6)
      });
      this.setImaContent = K(a, 328, function(l, m) {
        _.cg(g, 22) ? nK(c, l, m, g) : (_.z(g, 21, !0),
          mK(c, g),
        "string" === typeof l && _.z(g, 19, l),
        "string" === typeof m && _.z(g, 20, m))
      });
      this.getImaContent = K(a, 329, function() {
        return _.cg(g, 22) ? pK(c, g) : c.B ? {
          vid: y(g, 19) || "",
          cmsid: y(g, 20) || ""
        } : null
      });
      this.isInitialLoadDisabled = K(a, 572, function() {
        return !!E(g, 4)
      });
      this.setPrivacySettings = K(a, 648, function(l) {
        if (!_.qa(l))
          return kl(b, Ok("PubAdsService.setPrivacySettings", [l])),
            f;
        var m = l.restrictDataProcessing, n = l.childDirectedTreatment, p = l.underAgeOfConsent, r = l.limitedAds, t = l.nonPersonalizedAds, w = l.userOptedOutOfPersonalization, B = l.trafficSource, I, H = null != (I = fH(g)) ? I : new cH;
        "boolean" === typeof t ? _.z(H, 8, t) : void 0 !== t && kl(b, Il("PubAdsService.setPrivacySettings", Jl(l), "nonPersonalizedAds", Jl(t)));
        "boolean" === typeof w ? _.z(H, 13, w) : void 0 !== w && kl(b, Il("PubAdsService.setPrivacySettings", Jl(l), "userOptedOutOfPersonalization", Jl(w)));
        "boolean" === typeof m ? _.z(H, 1, m) : void 0 !== m && kl(b, Il("PubAdsService.setPrivacySettings", Jl(l), "restrictDataProcessing", Jl(m)));
        "boolean" === typeof r ? (m = Ol(),
        r && !E(H, 9) && a.Hc && (t = a.Gb,
          w = Ph(a),
          I = new Xx,
          I = _.id(I, 1, !0, !1),
          I = _.id(I, 2, m, !1),
          w = _.Rh(w, 11, Sh, I),
          ze(t, w)),
          m ? _.z(H, 9, r) : r && kl(b, UJ())) : void 0 !== r && kl(b, Il("PubAdsService.setPrivacySettings", Jl(l), "limitedAds", Jl(r)));
        void 0 !== p && (null === p ? H.setTagForUnderAgeOfConsent(2) : !1 === p ? H.setTagForUnderAgeOfConsent(0) : !0 === p ? H.setTagForUnderAgeOfConsent(1) : kl(b, Il("PubAdsService.setPrivacySettings", Jl(l), "underAgeOfConsent", Jl(p))));
        void 0 !== n && (null === n ? H.clearTagForChildDirectedTreatment() : !1 === n ? H.setTagForChildDirectedTreatment(0) : !0 === n ? H.setTagForChildDirectedTreatment(1) : kl(b, Il("PubAdsService.setPrivacySettings", Jl(l), "childDirectedTreatment", Jl(n))));
        void 0 !== B && (null === B ? uf(H, 10) : (_.D = _.u(Object, "values").call(Object, wl),
          _.u(_.D, "includes")).call(_.D, B) ? _.z(H, 10, B) : kl(b, Il("PubAdsService.setPrivacySettings", Jl(l), "trafficSource", Jl(B))));
        _.Oh(g, 25, H);
        return f
      })
    };
    _.N(Vl, WJ);
    var yp = function(a, b) {
      var c = this
        , d = []
        , e = [];
      this.addSize = Uh(a, 88, function(f, g) {
        var h;
        if (h = Zl(f))
          h = g,
            h = Yl(h) || Array.isArray(h) && h.every(Yl);
        h ? (_.F(kz) && (h = vm(g),
        h !== g && (g = Nk([f, g]),
          g = g.substring(1, g.length - 1),
          kl(b, new Mk(151,["SizeMappingBuilder.addSize", g])),
          g = h)),
          d.push([f, g])) : (e.push([f, g]),
          kl(b, Ok("SizeMappingBuilder.addSize", [f, g])));
        return c
      });
      this.build = Uh(a, 89, function() {
        if (e.length)
          return kl(b, YI(Jl(e))),
            null;
        za(d);
        return d
      })
    };
    var qK = function(a, b) {
      this.getId = K(a, 593, function() {
        return b.getId()
      });
      this.getAdUnitPath = K(a, 594, function() {
        return b.getAdUnitPath()
      });
      this.getName = K(a, 595, function() {
        return b.getName()
      });
      this.toString = K(a, 596, function() {
        return b.toString()
      });
      this.getDomId = K(a, 597, function() {
        return b.getDomId()
      })
    };
    var li = function(a) {
      _.Q.call(this, a, -1, rK)
    };
    _.N(li, _.Q);
    var rK = [2];
    var tK = function(a) {
      _.Q.call(this, a, -1, sK)
    };
    _.N(tK, _.Q);
    tK.prototype.getAdUnitPath = function() {
      return y(this, 1)
    }
    ;
    tK.prototype.getDomId = function() {
      return y(this, 2)
    }
    ;
    var uK = function(a, b) {
      _.z(a, 2, b)
    };
    tK.prototype.wa = function() {
      return _.Pe(this, ol, 3)
    }
    ;
    var vK = function(a, b) {
      _.Bd(a, 5, b)
    };
    tK.prototype.getClickUrl = function() {
      return y(this, 7)
    }
    ;
    tK.prototype.setClickUrl = function(a) {
      return _.z(this, 7, a)
    }
    ;
    var ll = function(a) {
      return _.Pe(a, ol, 9)
    };
    tK.prototype.eb = function() {
      return zf(this, Fl, 13)
    }
    ;
    var Jm = function(a) {
      return _.Re(a, 15, 0)
    }
      , Zn = function(a, b) {
      _.Yf(a, 27, Lv, b)
    }
      , wK = function(a) {
      a = gd(a, y(a, 26), pc(a.da));
      return null == a ? a : a
    }
      , sK = [3, 4, 5, 6, 8, 9, 27];
    var xK = function() {
      this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
      this.isBackfill = !1;
      this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
    }
      , yK = function(a, b) {
      a.advertiserId = b
    }
      , zK = function(a, b) {
      a.campaignId = b
    }
      , AK = function(a, b) {
      a.yieldGroupIds = b
    }
      , BK = function(a, b) {
      a.companyIds = b
    };
    var CK = function(a, b) {
      this.width = a;
      this.height = b
    };
    CK.prototype.getWidth = function() {
      return this.width
    }
    ;
    CK.prototype.getHeight = function() {
      return this.height
    }
    ;
    var ym = function(a, b, c) {
      var d = this
        , e = (0,
        C.I)(Yn(pj(), c.getDomId()))
        , f = ""
        , g = null
        , h = function() {
        return ""
      }
        , k = ""
        , l = !1;
      _.fo(c, function() {
        e = new tK;
        f = "";
        g = null;
        h = function() {
          return ""
        }
        ;
        k = ""
      });
      c.Z(yq, function(n) {
        var p = n.detail;
        n = p.Ue;
        p = p.isBackfill;
        n && (f = n,
          l = p)
      });
      this.set = K(a, 40, function(n, p) {
        if ("string" !== typeof n || "string" !== typeof p || void 0 === EI()[n])
          return kl(b, Ok("Slot.set", [n, p]), c),
            d;
        var r = (_.D = e.wa(),
          _.u(_.D, "find")).call(_.D, function(t) {
          return y(t, 1) === n
        });
        r ? ml(r, [p]) : (r = nl(new ol, n),
          YG(r, p),
          _.Yf(e, 3, ol, r));
        return d
      });
      this.get = K(a, 41, function(n) {
        if ("string" !== typeof n)
          return kl(b, Ok("Slot.get", [n]), c),
            null;
        var p = (_.D = e.wa(),
          _.u(_.D, "find")).call(_.D, function(r) {
          return y(r, 1) === n
        });
        return (p = p && _.cn(p, 2)) ? p[0] : null
      });
      this.getAttributeKeys = K(a, 42, function() {
        return e.wa().map(function(n) {
          return (0,
            C.I)(y(n, 1))
        })
      });
      this.addService = K(a, 43, function(n) {
        n = Ik.get(n);
        if (!n)
          return kl(b, Ok("Slot.addService", [n]), c),
            d;
        var p = n.getName();
        if ((_.D = _.cn(e, 4),
          _.u(_.D, "includes")).call(_.D, p))
          return b.info(NI(p, c.toString()), c),
            d;
        n.slotAdded(c, e);
        return d
      });
      this.defineSizeMapping = K(a, 44, function(n) {
        try {
          var p = e;
          if (!Array.isArray(n))
            throw new wm("Size mapping must be an array");
          var r = n.map(xm);
          _.Bd(p, 6, r)
        } catch (t) {
          n = t,
            Yh(a, 44, n),
            zx("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
        }
        return d
      });
      this.setClickUrl = K(a, 45, function(n) {
        if ("string" !== typeof n)
          return kl(b, Ok("Slot.setClickUrl", [n]), c),
            d;
        e.setClickUrl(n);
        return d
      });
      this.setCategoryExclusion = K(a, 46, function(n) {
        "string" !== typeof n || jl(n) ? kl(b, Ok("Slot.setCategoryExclusion", [n]), c) : ((_.D = _.cn(e, 8),
          _.u(_.D, "includes")).call(_.D, n) || Cu(e, 8, n),
          b.info(OI(n), c));
        return d
      });
      this.clearCategoryExclusions = K(a, 47, function() {
        _.z(e, 8, Wc);
        b.info(PI(), c);
        return d
      });
      this.getCategoryExclusions = K(a, 48, function() {
        return _.cn(e, 8).slice()
      });
      this.setTargeting = K(a, 49, function(n, p) {
        ql(c, e, n, p, b);
        return d
      });
      this.updateTargetingFromMap = K(a, 649, function(n) {
        rl(c, e, n, b);
        return d
      });
      this.clearTargeting = K(a, 50, function(n) {
        if (void 0 === n)
          return _.Bd(e, 9),
            b.info(QI(c.getAdUnitPath()), c),
            d;
        var p = ll(e)
          , r = _.u(p, "findIndex").call(p, function(t) {
          return y(t, 1) === n
        });
        if (0 > r)
          return kl(b, oJ(n, c.getAdUnitPath()), c),
            d;
        p.splice(r, 1);
        _.Bd(e, 9, p);
        b.info(uJ(n, c.getAdUnitPath()), c);
        return d
      });
      this.getTargeting = K(a, 51, function(n) {
        if ("string" !== typeof n)
          return kl(b, Ok("Slot.getTargeting", [n]), c),
            [];
        var p = (_.D = ll(e),
          _.u(_.D, "find")).call(_.D, function(r) {
          return y(r, 1) === n
        });
        return p ? _.cn(p, 2).slice() : []
      });
      this.getTargetingKeys = K(a, 52, function() {
        return ll(e).map(function(n) {
          return (0,
            C.I)(y(n, 1))
        })
      });
      this.setCollapseEmptyDiv = K(a, 53, function(n, p) {
        p = void 0 === p ? !1 : p;
        if ("boolean" !== typeof n || "boolean" !== typeof p)
          return kl(b, Ok("Slot.setCollapseEmptyDiv", [n, p]), c),
            d;
        _.z(e, 10, n);
        _.z(e, 11, n && p);
        p && !n && kl(b, RI(c.toString()), c);
        return d
      });
      this.getAdUnitPath = K(a, 54, function() {
        return c.getAdUnitPath()
      });
      this.getSlotElementId = K(a, 598, function() {
        return c.getDomId()
      });
      this.setForceSafeFrame = K(a, 55, function(n) {
        if ("boolean" !== typeof n)
          return kl(b, Ok("Slot.setForceSafeFrame", [String(n)]), c),
            d;
        _.z(e, 12, n);
        return d
      });
      this.setSafeFrameConfig = K(a, 56, function(n) {
        var p = Kl(b, n);
        if (!p)
          return b.error(Ok("Slot.setSafeFrameConfig", [n]), c),
            d;
        _.Oh(e, 13, p);
        return d
      });
      c.Z(kI, function(n) {
        n = n.detail;
        if (E(n, 8))
          g = null;
        else {
          g = new xK;
          var p = !!E(n, 9);
          g.isBackfill = p;
          var r = Zc(n, 15, Fc)
            , t = Zc(n, 16, Fc);
          r.length && t.length && (g.sourceAgnosticCreativeId = r[0],
            g.sourceAgnosticLineItemId = t[0],
          p || (g.creativeId = r[0],
            g.lineItemId = t[0],
          (p = Zc(n, 22, Fc)) && p.length && (g.creativeTemplateId = p[0])));
          Zc(n, 17, Fc).length && yK(g, Zc(n, 17, Fc)[0]);
          Zc(n, 18, Fc).length && zK(g, Zc(n, 18, Fc)[0]);
          Zc(n, 19, Fc).length && AK(g, Zc(n, 19, Fc));
          Zc(n, 20, Fc).length && BK(g, Zc(n, 20, Fc));
          n = Zc(n, 45, lc(n.da) & 18 ? $c : ad).map(function(w) {
            return pd(w)
          });
          n.length && (g.encryptedTroubleshootingInfo = n[0])
        }
      });
      this.getResponseInformation = K(a, 355, function() {
        return g
      });
      this.getName = K(a, 170, function() {
        b.error(SJ());
        return c.getAdUnitPath()
      });
      var m = new qK(a,c);
      this.getSlotId = K(a, 579, function() {
        return m
      });
      this.getServices = K(a, 580, function() {
        return _.cn(e, 4).map(function(n) {
          var p = WG[n];
          if (p) {
            var r, t, w;
            n = null != (w = null == (t = (r = Uk())[p]) ? void 0 : t.call(r)) ? w : null
          } else
            n = null;
          return n
        })
      });
      this.getSizes = K(a, 581, function(n, p) {
        var r, t;
        return null != (t = null == (r = oi(e, n, p)) ? void 0 : r.map(function(w) {
          return E(w, 3) ? "fluid" : new CK(w.getWidth(),w.getHeight())
        })) ? t : null
      });
      this.getClickUrl = K(a, 582, function() {
        var n;
        return null != (n = e.getClickUrl()) ? n : ""
      });
      this.getTargetingMap = K(a, 583, function() {
        for (var n = {}, p = _.x(ll(e)), r = p.next(); !r.done; r = p.next())
          r = r.value,
          y(r, 1) && (n[y(r, 1)] = _.cn(r, 2));
        return n
      });
      this.getOutOfPage = K(a, 584, function(n) {
        return "number" === typeof n ? Jm(e) === n : 0 !== Jm(e)
      });
      this.getCollapseEmptyDiv = K(a, 585, function() {
        return Ll(e, 10) ? E(e, 10) : null
      });
      this.getDivStartsCollapsed = K(a, 586, function() {
        return Ll(e, 11) ? E(e, 11) : null
      });
      c.Z(lI, function(n) {
        h = n.detail.gg
      });
      this.getContentUrl = K(a, 587, function() {
        return h()
      });
      this.getFirstLook = K(a, 588, function() {
        zx("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
        return 0
      });
      c.Z(kI, function(n) {
        var p;
        k = null != (p = n.detail.getEscapedQemQueryId()) ? p : ""
      });
      this.getEscapedQemQueryId = K(a, 591, function() {
        return k
      });
      this.getHtml = K(a, 592, function() {
        return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."),
          "") : f
      });
      this.setConfig = K(a, 1022, function(n) {
        var p = n.componentAuction;
        if (void 0 !== p) {
          n = wK(e);
          p = _.x(p);
          for (var r = p.next(); !r.done; r = p.next()) {
            var t = r.value;
            r = t.configKey;
            t = t.auctionConfig;
            "string" !== typeof r || jl(r) || (null === t ? n.delete(r) : t && n.set(r, JSON.stringify(t)))
          }
        }
      })
    };
    var DK = {}
      , Cm = (DK[64] = LJ,
      DK[134217728] = MJ,
      DK[32768] = NJ,
      DK[536870912] = OJ,
      DK[8] = PJ,
      DK[512] = QJ,
      DK[1048576] = RJ,
      DK[4194304] = TJ,
      DK);
    var Km = function(a) {
      return "22639388115" === Ih(a.getAdUnitPath())
    };
    var EK = null;
    var $m = {
      va: "|"
    };
    var kn = 0
      , FK = new _.Ai(-9,-9);
    var mn = 0;
    var GK = new _.v.Set([function(a, b) {
      var c = a.ba.N.T;
      b.set("pvsid", {
        value: a.fa.context.pvsid
      }).set("correlator", {
        value: y(c, 26)
      })
    }
      , function(a, b) {
        a = a.Lf;
        var c = a.jc;
        "wbn" === a.Ac && b.set("wbsu", {
          value: c
        })
      }
      , function(a, b) {
        var c = a.ba.N.T
          , d = a.fh;
        a = d.Vf;
        var e = d.rh;
        d = d.Wg;
        _.F(Ly) || (c = 0 === _.Re(c, 24, 0),
          b.set("adsid", {
            value: c ? a : null
          }).set("pucrd", {
            value: c ? e : null
          }).set("jar", {
            value: d
          }))
      }
      , function(a, b) {
        var c = a.ba.N.T
          , d = a.Rh;
        a = d.Wb;
        d = d.Vb;
        var e = E(c, 21);
        b = b.set("hxva", {
          value: e ? 1 : null
        }).set("cmsid", {
          value: e ? y(c, 23) : null
        }).set("vid", {
          value: e ? y(c, 22) : null
        }).set("pod", {
          value: d
        }).set("ppos", {
          value: a
        });
        c = y(c, 29);
        b.set.call(b, "scor", {
          value: null == c ? void 0 : c
        })
      }
      , function(a, b) {
        var c = a.ba
          , d = c.X
          , e = c.N.R;
        c = a.oh;
        var f = c.Jg
          , g = c.Cg;
        b.set("eid", {
          value: a.fa.ce
        }).set("debug_experiment_id", {
          value: cB().split(",")
        }).set("expflags", {
          value: _.Lh(253) ? Nf(By) || null : null
        }).set("pied", {
          value: function() {
            var h = new wG
              , k = !1
              , l = !1;
            f && (k = !0,
              _.Yf(h, 1, Lv, f));
            var m = d.map(function(p) {
              var r = new tG, t;
              p = null == (t = e[p.getDomId()]) ? void 0 : _.Pe(t, Lv, 27);
              if (null == p || !p.length)
                return r;
              l = k = !0;
              t = _.x(p);
              for (p = t.next(); !p.done; p = t.next())
                _.Yf(r, 1, Lv, p.value);
              return r
            });
            l && _.Bd(h, 2, m);
            m = _.x(null != g ? g : []);
            for (var n = m.next(); !n.done; n = m.next())
              _.Yf(h, 1, Lv, n.value),
                k = !0;
            return k ? Pb(h.m(), 3) : null
          }()
        })
      }
      , function(a, b) {
        var c = a.fa
          , d = c.context;
        c = c.Ha;
        b.set("output", {
          value: a.Lf.Ac
        }).set("gdfp_req", {
          value: 1
        }).set("vrg", {
          value: d.Cb ? String(d.Cb) : d.Ma
        }).set("ptt", {
          value: 17
        }).set("impl", {
          value: c ? "fifs" : "fif"
        })
      }
      , function(a, b) {
        a = a.ba.N.T;
        b.set("co", {
          value: 0 !== _.Re(a, 24, 0) ? _.Re(a, 24, 0) : null,
          options: {
            za: !0
          }
        })
      }
      , function(a, b) {
        var c = a.fa.V;
        a = fH(a.ba.N.T) || new cH;
        var d = _.Re(a, 6, 2);
        b.set("rdp", {
          value: E(a, 1) ? "1" : null
        }).set("ltd", {
          value: E(a, 9) ? "1" : null
        }).set("gdpr_consent", {
          value: pg(c, 2)
        }).set("gdpr", {
          value: Ll(c, 3) ? E(c, 3) ? "1" : "0" : null,
          options: {
            za: !0
          }
        }).set("addtl_consent", {
          value: pg(c, 4)
        }).set("tcfe", {
          value: Iu(c, 7)
        }).set("us_privacy", {
          value: pg(c, 1)
        }).set("npa", {
          value: E(c, 6) || E(a, 8) ? 1 : null
        }).set("puo", {
          value: _.F(Zy) && E(a, 13) ? 1 : null
        }).set("tfua", {
          value: 2 !== d ? d : null,
          options: {
            za: !0
          }
        }).set("tfcd", {
          value: null != y(a, 5) ? y(a, 5) : null,
          options: {
            za: !0
          }
        }).set("trt", {
          value: null != y(a, 10) ? y(a, 10) : null,
          options: {
            za: !0
          }
        }).set("tad", {
          value: Ll(c, 8) ? E(c, 8) ? "1" : "0" : null,
          options: {
            za: !0
          }
        })
      }
      , function(a, b) {
        var c = a.ba
          , d = c.N
          , e = c.X
          , f = c.je;
        a = a.fa;
        var g = a.win
          , h = a.K
          , k = a.Ha;
        a = {
          va: "~"
        };
        var l = e.map(function(n) {
          return d.R[n.getDomId()]
        })
          , m = [];
        c = e.map(function(n) {
          return n.getAdUnitPath().replace(/,/g, ":").split("/").map(function(p) {
            if (!p)
              return "";
            var r = _.u(m, "findIndex").call(m, function(t) {
              return t === p
            });
            return 0 <= r ? r : m.push(p) - 1
          }).join("/")
        });
        b.set("iu_parts", {
          value: m
        }).set("enc_prev_ius", {
          value: c
        }).set("prev_iu_szs", {
          value: l.map(function(n) {
            return ri(n)
          })
        }).set("fluid", {
          value: function() {
            var n = !1
              , p = l.map(function(r) {
              r = (_.D = qi(r),
                _.u(_.D, "includes")).call(_.D, "fluid");
              n || (n = r);
              return r ? "height" : "0"
            });
            return n ? p : null
          }()
        }).set("ifi", {
          value: function() {
            var n = Dj(g);
            if (!f) {
              n += 1;
              var p = g
                , r = e.length;
              r = void 0 === r ? 1 : r;
              p = Lx(te(p)) || p;
              p.google_unique_id = (p.google_unique_id || 0) + r
            }
            return n
          }()
        }).set("adks", {
          value: e.map(function(n) {
            if (k) {
              var p = d.R[n.getDomId()];
              p = ti(p);
              if (n = h.j.get(n))
                n.Kb = p;
              return p
            }
            p = d.T;
            var r = d.R[n.getDomId()], t;
            if (!(t = vr(h, n))) {
              p = ti(r, E(p, 6) || E(r, 17) ? null : fj(n));
              if (n = h.j.get(n))
                n.Kb = p;
              t = p
            }
            return t
          })
        }).set("didk", {
          value: _.F(hz) ? Bm(e, function(n) {
            return _.si(n.getDomId())
          }, a) : null,
          options: a
        }).set("tgts", {
          value: _.F(jz) ? Bm(e, function(n) {
            var p;
            return null == (p = /^div-gpt-ad-([0-9]{12,14})-/.exec(n.getDomId())) ? void 0 : p[1]
          }, a) : null,
          options: a
        })
      }
      , function(a, b) {
        var c = a.ba;
        a = c.X;
        c = c.N;
        var d = c.T
          , e = c.R;
        b.set("sfv", {
          value: gK ? gK : gK = Al()
        }).set("fsfs", {
          value: Bm(a, function(f) {
            f = e[f.getDomId()];
            var g;
            return Number(null != (g = null == f ? void 0 : vi(f, 12)) ? g : E(d, 13))
          }, {
            qc: 0
          }),
          options: {
            va: ","
          }
        }).set("fsbs", {
          value: Bm(a, function(f) {
            f = e[f.getDomId()].eb();
            var g = d.eb(), h;
            return (null != (h = null == f ? void 0 : vi(f, 3)) ? h : null == g ? 0 : E(g, 3)) ? 1 : 0
          }, {
            qc: 0
          })
        })
      }
      , function(a, b) {
        var c = a.fa
          , d = c.K
          , e = c.win;
        c = a.ba;
        a = c.X;
        var f = c.je;
        c = {
          va: "~"
        };
        b.set("ris", {
          value: Bm(a, function(g) {
            var h, k;
            g = null != (k = null == (h = d.j.get(g)) ? void 0 : h.lf) ? k : 0;
            h = _.hf(e);
            return g && h ? Math.round(Math.min((h - g) / 1E3, 1800)) : null
          }, c),
          options: c
        }).set("rcs", {
          value: Bm(a, function(g) {
            if (!f) {
              var h = void 0 === h ? _.q : h;
              var k = d.j.get(g);
              k && (k.lf = _.hf(h) || 0,
                k.Af++)
            }
            return zI(d, g)
          }, {
            qc: 0
          })
        })
      }
      , function(a, b) {
        var c = a.ba;
        a = a.fa.Ha;
        c = c.N.R[c.X[0].getDomId()];
        b.set("click", {
          value: !a && c.getClickUrl() ? y(c, 7) : null
        })
      }
      , function(a, b, c) {
        var d = a.ba
          , e = d.X
          , f = d.N.R;
        a = a.fa;
        var g = a.V
          , h = a.win;
        c = void 0 === c ? function(k, l) {
            return bf(k, l)
          }
          : c;
        a = e.map(function(k) {
          return f[k.getDomId()]
        });
        b.set("ists", {
          value: Am(a, function(k) {
            return 0 !== Jm(k)
          }) || null
        }).set("fas", {
          value: Bm(a, function(k) {
            return Nm(Jm(k))
          }, {
            qc: 0
          })
        }).set("itsi", {
          value: e.some(function(k) {
            var l;
            return !Km(k) && 5 === (null == (l = f[k.getDomId()]) ? void 0 : Jm(l))
          }) ? function() {
            var k = c(g, h);
            if (!k)
              return 1;
            var l;
            k = Math.max.apply(Math, _.xe(null != (l = _.Hm((0,
              C.I)(k), 604800)) ? l : []));
            return isFinite(k) ? Math.floor(Math.max((Date.now() - k) / 6E4, 1)) : null
          }() : null
        })
      }
      , function(a, b) {
        a = a.ba;
        var c = a.N.R;
        a = a.X.map(function(d) {
          return c[d.getDomId()]
        });
        b.set("rbvs", {
          value: Am(a, function(d) {
            return 4 === Jm(d)
          }) || null
        })
      }
      , function(a, b) {
        var c = a.ba
          , d = c.N
          , e = c.N.T
          , f = c.X;
        c = c.ub;
        var g = a.fa;
        a = g.isSecureContext;
        g = g.win;
        b = b.set("prev_scp", {
          value: an(f, d)
        });
        var h = b.set
          , k = d.T
          , l = d.R
          , m = new xj;
        m.set(0, 1 !== c);
        l = l[f[0].getDomId()];
        m.set(1, !!E(l, 17));
        m.set(2, hn(f, d));
        m.set(3, E(k, 27) || !1);
        m.set(4, 3 === c);
        d = zj(m);
        h.call(b, "eri", {
          value: d
        }).set("cust_params", {
          value: dn(e),
          options: {
            va: "&"
          }
        }).set("ppid", {
          value: 1 !== _.Re(e, 24, 0) && _.cg(e, 16) ? y(e, 16) : null,
          options: {
            za: !0
          }
        }).set("gct", {
          value: Xm("google_preview", g)
        }).set("sc", {
          value: a ? 1 : 0,
          options: {
            za: !0
          }
        })
      }
      , function(a, b) {
        var c = a.fa
          , d = c.win
          , e = c.V;
        c = c.ya;
        a = a.ba.N.T;
        var f = en(a.wa());
        if (0 === _.Re(a, 24, 0)) {
          var g = _.$B(c, "__gads", e);
          a = "1" === _.$B(c, "__gpi_opt_out", e) ? "1" : null;
          b = b.set("cookie", {
            value: g,
            options: {
              za: !0
            }
          }).set("cookie_enabled", {
            value: !g && aC(c, e) ? "1" : null
          });
          g = d.document;
          var h = g.domain;
          d = b.set.call(b, "cdm", {
            value: (f || yi(d)) === g.URL ? "" : h
          });
          f = d.set;
          e = (e = _.$B(c, "__gpi", e)) && !_.u(e, "includes").call(e, "&") ? e : null;
          f.call(d, "gpic", {
            value: e
          }).set("gpico", {
            value: a
          }).set("pdopt", {
            value: a
          })
        }
      }
      , function(a, b) {
        a = a.fa.win;
        b.set("arp", {
          value: Gk(a) ? 1 : null
        }).set("abxe", {
          value: _.qe(a.top) || tx(a.IntersectionObserver) ? 1 : null
        })
      }
      , function(a, b) {
        var c = a.fa.win;
        a = en(a.ba.N.T.wa());
        b.set("dt", {
          value: (new Date).getTime()
        });
        if (!a) {
          try {
            var d = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
          } catch (e) {
            d = null
          }
          b.set("lmt", {
            value: d
          })
        }
        d = mn;
        c = kf(c);
        0 < c && d >= c && b.set("dlt", {
          value: c
        }).set("idt", {
          value: d - c
        })
      }
      , function(a, b) {
        var c = a.ba
          , d = c.N
          , e = c.X
          , f = c.N;
        c = f.T;
        f = f.R;
        var g = a.fa;
        a = g.win;
        var h = g.Ha;
        g = pi(!0, a);
        for (var k = a.document, l = [], m = [], n = _.x(e), p = n.next(); !p.done; p = n.next()) {
          p = p.value;
          var r = f[p.getDomId()];
          p = lj(p, r, k, wi(c, r));
          r = void 0;
          var t = h ? null != (r = p) ? r : FK : p;
          t && (l.push(Math.round(t.x)),
            m.push(Math.round(t.y)))
        }
        g && (d.Xb = g);
        c = xi(a) ? null : pi(!1, a);
        try {
          var w = a.top;
          var B = jn(w.document, w)
        } catch (I) {
          B = new _.Ai(-12245933,-12245933)
        }
        b.set("adxs", {
          value: l
        }).set("adys", {
          value: m
        }).set("biw", {
          value: g ? g.width : null
        }).set("bih", {
          value: g ? g.height : null
        }).set("isw", {
          value: g ? null == c ? void 0 : c.width : null
        }).set("ish", {
          value: g ? null == c ? void 0 : c.height : null
        }).set("scr_x", {
          value: Math.round(B.x),
          options: {
            za: !0
          }
        }).set("scr_y", {
          value: Math.round(B.y),
          options: {
            za: !0
          }
        }).set("btvi", {
          value: ln(e, a, d),
          options: {
            za: !0,
            va: "|"
          }
        })
      }
      , function(a, b) {
        var c = a.fa.K;
        b.set("ucis", {
          value: a.ba.X.map(function(d) {
            d = (0,
              C.I)(c.j.get(d));
            null != d.Lc || (d.Lc = window === window.top ? (++c.A).toString(36) : Pw());
            return d.Lc
          }),
          options: {
            va: "|"
          }
        }).set("oid", {
          value: 2
        })
      }
      , function(a, b) {
        a = a.ba;
        var c = a.X
          , d = a.N
          , e = d.R;
        a = new _.v.Map;
        d = _.x(d.T.wa());
        for (var f = d.next(); !f.done; f = d.next()) {
          var g = f.value;
          a.set((0,
            C.I)(y(g, 1)), [_.cn(g, 2)[0]])
        }
        for (d = 0; d < c.length; d++)
          if (g = e[c[d].getDomId()])
            for (g = _.x(g.wa()),
                   f = g.next(); !f.done; f = g.next()) {
              var h = f.value;
              f = (0,
                C.I)(y(h, 1));
              var k = a.get(f) || [];
              h = _.cn(h, 2)[0];
              1 === c.length ? k[0] = h : h !== k[0] && (k[d + 1] = h);
              a.set(f, k)
            }
        c = [];
        e = _.x(_.u(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next())
          g = d.value,
            d = EI()[g],
            g = a.get(g),
          d && g && (1 < g.length ? (g = g.map(function(l) {
            return encodeURIComponent(l || "")
          }).join(),
            c.push(d + "," + g)) : 1 === g.length && "url" !== d && b.set(d, {
            value: g[0]
          }));
        c.length && b.set("sps", {
          value: c,
          options: {
            va: "|"
          }
        })
      }
      , function(a, b) {
        var c = a.ba.N.T
          , d = a.fa;
        a = d.win;
        var e = d.Ph;
        d = d.fb;
        e = e ? Me(e) : _.Lh(251);
        var f, g, h, k, l, m, n;
        var p = a;
        p = void 0 === p ? Iw : p;
        try {
          var r = p.history.length
        } catch (ka) {
          r = 0
        }
        b = b.set("u_his", {
          value: r
        }).set("u_h", {
          value: null == (f = a.screen) ? void 0 : f.height
        }).set("u_w", {
          value: null == (g = a.screen) ? void 0 : g.width
        }).set("u_ah", {
          value: null == (h = a.screen) ? void 0 : h.availHeight
        }).set("u_aw", {
          value: null == (k = a.screen) ? void 0 : k.availWidth
        }).set("u_cd", {
          value: null == (l = a.screen) ? void 0 : l.colorDepth
        });
        f = b.set;
        g = a;
        g = void 0 === g ? _.q : g;
        g = g.devicePixelRatio;
        f = f.call(b, "u_sd", {
          value: "number" === typeof g ? +g.toFixed(3) : null
        }).set("u_tz", {
          value: -(new Date).getTimezoneOffset()
        });
        g = f.set;
        try {
          var t, w, B, I, H = null != (I = null == (t = a.external) ? void 0 : null == (w = t.getHostEnvironmentValue) ? void 0 : null == (B = w.bind(a.external)) ? void 0 : B("os-mode")) ? I : "", R, U = Number(null == (R = JSON.parse(H)) ? void 0 : R["os-mode"]);
          var J = 0 <= U ? U + 1 : null
        } catch (ka) {
          J = null
        }
        J = g.call(f, "wsm", {
          value: J
        }).set("dmc", {
          value: null != (n = null == (m = a.navigator) ? void 0 : m.deviceMemory) ? n : null
        });
        m = J.set;
        (c = y(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)),
          c = "a " + hu('role:1 producer:12 loc:"' + c + '"')) : c = "";
        c = m.call(J, "uule", {
          value: c
        });
        m = c.set;
        n = a;
        n = void 0 === n ? _.q : n;
        J = new xj;
        n.SVGElement && n.document.createElementNS && J.set(0);
        t = sx();
        t["allow-top-navigation-by-user-activation"] && J.set(1);
        t["allow-popups-to-escape-sandbox"] && J.set(2);
        n.crypto && n.crypto.subtle && J.set(3);
        n.TextDecoder && n.TextEncoder && J.set(4);
        n = zj(J);
        e = m.call(c, "bc", {
          value: n
        }).set("uach", {
          value: e ? hu(e, 3) : null
        });
        c = e.set;
        if (d)
          var T = null;
        else if (d = null == (T = a.navigator) ? void 0 : T.userActivation) {
          T = 0;
          if (null == d ? 0 : d.hasBeenActive)
            T |= 1;
          if (null == d ? 0 : d.isActive)
            T |= 2
        } else
          T = void 0;
        T = c.call(e, "uas", {
          value: T
        });
        d = T.set;
        a: {
          try {
            var ba, ea, da = null == (ba = a.performance) ? void 0 : null == (ea = ba.getEntriesByType("navigation")) ? void 0 : ea[0];
            if (null == da ? 0 : da.type) {
              var oa;
              var ua = null != (oa = hG.get(da.type)) ? oa : null;
              break a
            }
          } catch (ka) {}
          var Ea, pa, va;
          ua = null != (va = iG.get(null == (Ea = a.performance) ? void 0 : null == (pa = Ea.navigation) ? void 0 : pa.type)) ? va : null
        }
        d.call(T, "nvt", {
          value: ua
        })
      }
      , function(a, b) {
        var c = a.fa
          , d = c.win
          , e = c.K;
        c = c.Ha;
        a = a.ba;
        var f = a.X;
        a = a.N;
        var g = a.T
          , h = a.R;
        a = Ym("google_preview", d);
        var k = d.document
          , l = a ? fn(k.URL) : k.URL;
        k = a ? fn(k.referrer) : k.referrer;
        a = !1;
        if (c)
          c = en(g.wa());
        else {
          var m;
          c = null != (m = en(h[f[0].getDomId()].wa())) ? m : en(g.wa())
        }
        if (null != c) {
          var n = l;
          xi(d) || (k = "",
            a = !0)
        } else
          c = l;
        m = gn(d);
        b.set("nhd", {
          value: m || null
        }).set("url", {
          value: c
        }).set("loc", {
          value: null !== n && n !== c ? n : null
        }).set("ref", {
          value: k
        });
        if (m) {
          n = b.set;
          var p, r;
          m = _.qe(d.top) && (null == (p = d.top) ? void 0 : null == (r = p.location) ? void 0 : r.href);
          var t;
          p = null == (t = d.location) ? void 0 : t.ancestorOrigins;
          d = nk(d) || "";
          t = (null == p ? void 0 : p[p.length - 1]) || "";
          d = (d = m || d || t) ? a ? hx(d.match(_.gx)[3] || null) : d : null;
          n.call(b, "top", {
            value: d
          }).set("etu", {
            value: e.Zc
          })
        }
      }
      , function(a, b) {
        a = a.fa.context.pvsid;
        b.set("rumc", {
          value: _.F(Dz) || _.mf(Wh).j ? a : null
        }).set("rume", {
          value: _.F(Ry) ? 1 : null
        })
      }
      , function(a, b) {
        a = a.fa.win;
        var c = b.set;
        var d = Fx(a);
        var e = CA(a, a.google_ad_width, a.google_ad_height);
        var f = d.location.href;
        if (d === d.top)
          f = !0;
        else {
          var g = !1
            , h = d.document;
          h && h.referrer && (f = h.referrer,
          d.parent === d.top && (g = !0));
          (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 === f.indexOf(d) && (g = !1,
            f = d);
          f = g
        }
        g = a.top == a ? 0 : _.qe(a.top) ? 1 : 2;
        d = 4;
        e || 1 != g ? e || 2 != g ? e && 1 == g ? d = 7 : e && 2 == g && (d = 8) : d = 6 : d = 5;
        f && (d |= 16);
        e = "" + d;
        if (a != a.top)
          for (f = a; f && f != f.top && _.qe(f) && !f.sf_ && !f.$sf && !f.inGptIF && !f.inDapIF; f = f.parent)
            ;
        c.call(b, "frm", {
          value: e || null
        }).set("vis", {
          value: nG(a.document)
        })
      }
      , function(a, b) {
        var c = a.ba.X;
        a = a.fa.win;
        for (var d = [], e = [], f = _.x(c), g = f.next(); !g.done; g = f.next()) {
          var h = void 0
            , k = void 0
            , l = void 0;
          var m = a;
          g = fj(g.value);
          var n = wx((null == g ? void 0 : g.parentElement) && hj(g.parentElement, m) || null);
          !n || 1 === n[0] && 1 === n[3] ? (n = null != (l = null == g ? void 0 : g.parentElement) ? l : null,
            l = null != (k = Ei(n)) ? k : new _.Di(0,0),
            Vm(l, n, m, 100),
            k = null != (h = Ei(g)) ? h : new _.Di(0,0),
            Vm(k, g, m, 1),
          -1 === l.height && (k.height = -1),
            m = l,
            k = h = k,
            h = m.width + "x" + m.height,
            m = k.width + "x" + k.height) : m = h = "-1x-1";
          d.push(h);
          e.push(m)
        }
        null == EK && (f = CA(a, 500, 300),
          m = a.navigator,
          h = m.userAgent,
          k = m.platform,
          m = m.product,
          !/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && /^Opera/.test(h) ? h = !1 : /Win/.test(k) && /Trident/.test(h) && 11 <= a.document.documentMode ? h = !0 : (k = (/WebKit\/(\d+)/.exec(h) || [0, 0])[1],
            g = (/rv:(\d+\.\d+)/.exec(h) || [0, 0])[1],
            h = !k && "Gecko" === m && 27 <= g && !/ rv: 1\.8([^.] |\.0) /.test(h) || 536 <= k ? !0 : !1),
          EK = h && !f);
        g = 0 !== (0,
          _.Qm)();
        f = pi(!0, a, g).width;
        h = [];
        m = [];
        k = [];
        null !== a && a != a.top && (l = pi(!1, a).width,
        (-12245933 === f || -12245933 === l || l < f) && k.push(8));
        -12245933 !== f && (1.5 * f < a.document.documentElement.scrollWidth ? k.push(10) : g && 1.5 * a.outerWidth < f && k.push(10));
        c = _.x(c);
        for (l = c.next(); !l.done; l = c.next()) {
          g = new xj;
          n = fj(l.value);
          l = 0;
          var p = !1
            , r = !1;
          if (n) {
            for (var t = 0, w = n; w && 100 > t; t++,
              w = w.parentElement) {
              var B = hj(w, a);
              if (B) {
                var I = B
                  , H = I.display
                  , R = I.overflowX;
                if ("visible" !== I.overflowY && (g.set(2),
                (I = Ei(w)) && (l = l ? Math.min(l, I.width) : I.width),
                  g.get(9)))
                  break;
                Tm(B) && g.set(9);
                "none" === H && g.set(7);
                "IFRAME" === w.nodeName && (B = parseInt(B.width, 10),
                B < f && (g.set(8),
                  l = l ? Math.min(B, l) : B));
                r || (r = "scroll" === R || "auto" === R);
                p || (p = "flex" === H)
              } else
                g.set(3)
            }
            r && p && (n = n.getBoundingClientRect().left,
            (n > f || 0 > n) && g.set(11))
          } else
            g.set(1);
          n = _.x(k);
          for (p = n.next(); !p.done; p = n.next())
            g.set(p.value);
          h.push(zj(g));
          m.push(l)
        }
        b.set("psz", {
          value: d,
          options: {
            va: "|"
          }
        }).set("msz", {
          value: e,
          options: {
            va: "|"
          }
        }).set("fws", {
          value: h
        }).set("ohw", {
          value: m
        }).set("ea", {
          value: EK ? null : "0",
          options: {
            za: !0
          }
        })
      }
      , function(a, b) {
        b.set("psts", {
          value: yI(a.fa.K, a.ba.X)
        })
      }
      , function(a, b) {
        var c = a.fa;
        a = c.V;
        c = c.win;
        var d;
        var e = c.document.domain
          , f = null != (d = E(a, 5) && cf(c) ? c.document.cookie : null) ? d : ""
          , g = c.history.length
          , h = c.screen
          , k = c.document.referrer;
        if (te())
          var l = window.gaGlobal || {};
        else {
          var m = Math.round((new Date).getTime() / 1E3)
            , n = c.google_analytics_domain_name;
          e = "undefined" == typeof n ? yA("auto", e) : yA(n, e);
          var p = -1 < f.indexOf("__utma=" + e + ".")
            , r = -1 < f.indexOf("__utmb=" + e);
          (d = (Lx() || window).gaGlobal) || (d = {},
            (Lx() || window).gaGlobal = d);
          var t = !1;
          if (p) {
            var w = f.split("__utma=" + e + ".")[1].split(";")[0].split(".");
            r ? d.sid = w[3] : d.sid || (d.sid = m + "");
            d.vid = w[0] + "." + w[1];
            d.from_cookie = !0
          } else {
            d.sid || (d.sid = m + "");
            if (!d.vid) {
              t = !0;
              r = Math.round(2147483647 * Math.random());
              p = wA.appName;
              var B = wA.version
                , I = wA.language ? wA.language : wA.browserLanguage
                , H = wA.platform
                , R = wA.userAgent;
              try {
                w = wA.javaEnabled()
              } catch (U) {
                w = !1
              }
              w = [p, B, I, H, R, w ? 1 : 0].join("");
              h ? w += h.width + "x" + h.height + h.colorDepth : _.q.java && _.q.java.awt && (h = _.q.java.awt.Toolkit.getDefaultToolkit().getScreenSize(),
                w += h.screen.width + "x" + h.screen.height);
              w = w + f + (k || "");
              for (k = w.length; 0 < g; )
                w += g-- ^ k++;
              d.vid = (r ^ xA(w) & 2147483647) + "." + m
            }
            d.from_cookie || (d.from_cookie = !1)
          }
          if (!d.cid) {
            b: for (m = 999,
                    n && (n = 0 == n.indexOf(".") ? n.substr(1) : n,
                      m = n.split(".").length),
                      n = 999,
                      f = f.split(";"),
                      w = 0; w < f.length; w++)
              if (k = zA.exec(f[w]) || AA.exec(f[w]) || BA.exec(f[w])) {
                h = k[1] || 0;
                if (h == m) {
                  l = k[2];
                  break b
                }
                h < n && (n = h,
                  l = k[2])
              }
            t && l && -1 != l.search(/^\d+\.\d+$/) ? (d.vid = l,
              d.from_cookie = !0) : l != d.vid && (d.cid = l)
          }
          d.dh = e;
          d.hid || (d.hid = Math.round(2147483647 * Math.random()));
          l = d
        }
        e = l.sid;
        d = l.hid;
        t = l.from_cookie;
        f = l.cid;
        t && !E(a, 5) || b.set("ga_vid", {
          value: l.vid
        }).set("ga_sid", {
          value: e
        }).set("ga_hid", {
          value: d
        }).set("ga_fc", {
          value: t
        }).set("ga_cid", {
          value: f
        }).set("ga_wpids", {
          value: c.google_analytics_uacct
        })
      }
      , function(a, b) {
        a = a.fa;
        var c = a.win;
        a = a.context.pvsid;
        b = b.set("js", {
          value: _.F(sy) ? DA(c) : null
        });
        var d = b.set;
        if (_.F(sy))
          a: {
            var e = c;
            e = void 0 === e ? window : e;
            if (c = DA(e)) {
              var f = null;
              try {
                "afma-gpt-sdk-a" == c ? f = e._gmptnl.pm("GAM=", a.toString()) || "5" : (f = e.__gmptnl_n || "5",
                  e.webkit.messageHandlers._gmptnl.postMessage("GAM="))
              } catch (g) {
                a = "3";
                break a
              }
              a = "string" === typeof f ? f : "3"
            } else
              a = null
          }
        else
          a = null;
        d.call(b, "ms", {
          value: a
        })
      }
      , function(a, b) {
        var c = a.fa.win;
        a = c.navigator;
        c = c.document;
        _.F(Xz) || "runAdAuction"in a && "joinAdInterestGroup"in a && Jg("run-ad-auction", c) && b.set("td", {
          value: 1
        })
      }
      , function(a, b) {
        var c = a.Gh.Hh;
        Jg("browsing-topics", a.fa.win.document) && (b.set("topics", {
          value: c instanceof Uint8Array ? Pb(c, 3) : c
        }),
        !c || c instanceof Uint8Array || b.set("tps", {
          value: c
        }))
      }
      , function(a, b) {
        var c = a.fa
          , d = c.win;
        c = c.V;
        var e = a.ba.X
          , f = a.Bh;
        a = f.mh;
        var g = f.rg;
        f = f.gh;
        _.F(Az) || b.set("a3p", {
          value: Uf(bf(c, d), Ih((0,
            C.I)(e[0]).getAdUnitPath()), a, g, f)
        })
      }
      , function(a, b) {
        var c = a.hc
          , d = c.Od
          , e = c.Rc
          , f = a.ba.X;
        a = {
          va: "~"
        };
        c = function() {
          return _.F(ly) ? e ? f.map(function(g) {
            return (0,
              C.I)(e.get(g))
          }) : [] : d
        }();
        b.set("cbidsp", {
          value: Bm(c, function(g) {
            return Pb(g.m(), 3)
          }, a),
          options: a
        })
      }
      , function(a, b) {
        a = a.ba.N.T;
        qo(a.gd(), Gp, 1) && (a = Io(a.gd(), Gp, 1),
          b.set("cmrv", {
            value: 1
          }).set("cmrq", {
            value: y(a, 1)
          }).set("cmrc", {
            value: _.cn(a, 2),
            options: {
              va: ">"
            }
          }).set("cmrids", {
            value: _.cn(a, 3),
            options: {
              va: "!"
            }
          }).set("cmrf", {
            value: y(a, 4)
          }))
      }
      , function(a, b) {
        var c = [];
        a = _.x(_.Pe(Io(a.ba.N.T.gd(), Ip, 2), dp, 1));
        for (var d = a.next(); !d.done; d = a.next())
          d = d.value,
          _.cn(d, 2).length && c.push(_.Re(d, 1, 0) + "=" + _.cn(d, 2).join("|"));
        b.set("pps", {
          value: c,
          options: {
            va: "~"
          }
        })
      }
      , function(a, b) {
        b.set("scar", {
          value: a.kh.Fg
        })
      }
      , function(a, b) {
        a = a.fa.win.document;
        _.F(Cz) || Jg("attribution-reporting", a) && b.set("nt", {
          value: 1
        })
      }
    ])
      , IK = function(a) {
      if (null == a || !a.ba.X.length)
        return "";
      for (var b = new _.v.Set(Of(gz)), c = _.x(E(a.fa.V, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id adsid".split(" ") : []), d = c.next(); !d.done; d = c.next())
        b.add(d.value);
      c = new _.v.Map;
      d = _.x(GK);
      for (var e = d.next(); !e.done; e = d.next())
        e = e.value,
          e(a, c);
      a = "https://" + (HK(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
      c = _.x(c);
      for (d = c.next(); !d.done; d = c.next()) {
        e = _.x(d.value);
        d = e.next().value;
        var f = e.next().value;
        e = f.value;
        f = void 0 === f.options ? {} : f.options;
        (new RegExp("[?&]" + d + "=")).test(a);
        if (!b.has(d) && null != e) {
          var g = f;
          f = void 0 === g.va ? "," : g.va;
          g = void 0 === g.za ? !1 : g.za;
          if (e = "object" !== typeof e ? null == e || !g && 0 === e ? null : encodeURIComponent(e) : Array.isArray(e) && e.length ? encodeURIComponent(e.join(f)) : null)
            "?" !== a[a.length - 1] && (a += "&"),
              a += d + "=" + e
        }
      }
      return a
    }
      , HK = function(a) {
      var b = a.fa.V, c, d;
      a = null != (d = null == (c = fH(a.ba.N.T)) ? void 0 : E(c, 9)) ? d : !1;
      c = E(b, 8);
      return a || c || !E(b, 5)
    };
    var MK = function(a, b, c, d) {
      var e = this;
      this.context = a;
      this.K = c;
      this.j = new _.v.Map;
      this.o = new _.v.Map;
      this.Hb = _.mf(Wh);
      window.performance && tx(window.performance.now) && (_.yb(window, "DOMContentLoaded", Uh(a, 334, function() {
        for (var f = _.x(e.j), g = f.next(); !g.done; g = f.next()) {
          var h = _.x(g.value);
          g = h.next().value;
          h = h.next().value;
          JK(e, g, h) && e.j.delete(g)
        }
      })),
        b.Z(mI, function(f) {
          f = f.detail;
          var g = f.R;
          return void KK(e, (0,
            C.I)(LK(d, f.Ee)), (0,
            C.I)(ji(g, 20)))
        }),
        b.Z(nI, function(f) {
          f = f.detail;
          var g = f.R;
          f = (0,
            C.I)(LK(d, f.Ee));
          g = (0,
            C.I)(ji(g, 20));
          var h = e.o.get(f);
          null != h ? $H(h, g) : KK(e, f, g)
        }))
    }
      , KK = function(a, b, c) {
      JK(a, b, c) ? a.j.delete(b) : (a.j.set(b, c),
        _.fo(b, function() {
          return a.j.delete(b)
        }))
    }
      , JK = function(a, b, c) {
      var d = fj(b);
      if ("DIV" !== (null == d ? void 0 : d.nodeName))
        return !1;
      d = new YH({
        win: window,
        Hb: a.Hb,
        nb: (0,
          C.ua)(d),
        La: function(e) {
          return void Yh(a.context, 336, e)
        },
        Dh: _.F(Dz),
        ig: _.F(Dq)
      });
      if (!d.j)
        return !1;
      $H(d, c);
      a.o.set(b, d);
      uI(a.K, b, function() {
        return void a.o.delete(b)
      });
      return !0
    };
    var NK = function(a) {
      this.o = a;
      this.m = this.j = 0
    };
    NK.prototype.push = function() {
      for (var a = _.x(_.wb.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        try {
          "function" === typeof b && (b.call(_.v.globalThis),
            this.j++)
        } catch (c) {
          this.m++,
            b = void 0,
          null == (b = window.console) || b.error("Exception in queued GPT command", c),
            this.o.error(WI(String(c)))
        }
      }
      this.o.info(XI(String(this.j), String(this.m)));
      return this.j
    }
    ;
    var OK = function(a, b, c) {
      Z.call(this, a, 937, _.Mf(Vy));
      this.window = c;
      this.Ra = W(this);
      this.l = W(this);
      this.D = W(this);
      this.A = W(this);
      this.Za = W(this);
      this.jb = W(this);
      this.F = MB(this, b)
    };
    _.N(OK, Z);
    OK.prototype.j = function() {
      if (this.window.top !== this.window)
        PK(this);
      else {
        var a = this.F.value;
        if (a) {
          var b = {}, c;
          if (null == (c = zf(a, Bv, 2)) ? 0 : _.So(c, 2))
            b["*"] = {
              zc: !0
            };
          c = new _.v.Set;
          for (var d = _.x(_.Pe(a, Av, 1)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            for (var f = _.x([_.Vf(e, 2), _.Vf(e, 1)].filter(function(r) {
              return !!r
            })), g = f.next(); !g.done; g = f.next())
              b[g.value] = {
                zc: _.So(e, 3)
              };
            e = _.x(Zc(e, 4, Cc));
            for (f = e.next(); !f.done; f = e.next())
              c.add(f.value)
          }
          O(this.Ra, b);
          xB(this.l, [].concat(_.xe(c)));
          var h, k;
          b = null == (h = zf(a, Bv, 2)) ? void 0 : null == (k = zf(h, uv, 1)) ? void 0 : _.Pe(k, sv, 1);
          yB(this.D, (null == b ? 0 : b.length) ? b : null);
          var l;
          xB(this.Za, !(null == (l = zf(a, Bv, 2)) || !_.So(l, 4)));
          var m;
          xB(this.jb, !(null == (m = zf(a, Bv, 2)) || !_.So(m, 5)));
          var n, p;
          a = null == (n = zf(a, Bv, 2)) ? void 0 : null == (p = zf(n, uv, 3)) ? void 0 : _.Pe(p, sv, 1);
          yB(this.A, (null == a ? 0 : a.length) ? a : null)
        } else
          PK(this)
      }
    }
    ;
    var PK = function(a) {
      O(a.Ra, {});
      O(a.l, []);
      zB(a.D);
      O(a.Za, !1);
      O(a.jb, !1);
      zB(a.A)
    };
    OK.prototype.H = function(a) {
      this.m(a)
    }
    ;
    OK.prototype.m = function() {
      PK(this)
    }
    ;
    var QK = function(a, b, c, d, e, f) {
      Z.call(this, a, 980);
      this.A = b;
      this.C = new FB;
      this.l = [];
      this.J = X(this, c);
      this.F = X(this, d);
      this.D = X(this, e);
      a = _.x(f);
      for (b = a.next(); !b.done; b = a.next())
        this.l.push(X(this, b.value))
    };
    _.N(QK, Z);
    QK.prototype.j = function() {
      (_.D = _.u(Object, "entries").call(Object, this.J.value),
        _.u(_.D, "find")).call(_.D, function(c) {
        var d = _.x(c);
        c = d.next().value;
        d = d.next().value;
        return "*" !== c && (null == d ? void 0 : d.zc)
      }) && (this.A.B = !0);
      pf(25);
      for (var a = _.x((_.D = [this.F.value, this.D.value, this.l.map(function(c) {
        return c.value
      })],
        _.u(_.D, "flat")).call(_.D)), b = a.next(); !b.done; b = a.next())
        of(b.value);
      this.C.notify()
    }
    ;
    var RK = function(a, b) {
      Z.call(this, a, 892, _.Mf(Xy));
      this.l = W(this);
      this.D = W(this);
      this.A = W(this);
      this.bb = W(this);
      this.Cc = W(this);
      this.F = W(this);
      this.J = MB(this, b)
    };
    _.N(RK, Z);
    RK.prototype.j = function() {
      var a = this.J.value;
      if (!a)
        throw Error("config timeout");
      yB(this.l, zf(a, Dv, 3));
      yB(this.D, zf(a, Gv, 2));
      var b = Zc(a, 4, Cc);
      O(this.A, b);
      yB(this.bb, _.Pe(a, yv, 6));
      yB(this.Cc, _.Pe(a, Yv, 5));
      yB(this.F, zf(a, Xv, 7))
    }
    ;
    RK.prototype.H = function(a) {
      this.m(a)
    }
    ;
    RK.prototype.m = function(a) {
      this.l.Ia(a);
      this.D.Ia(a);
      O(this.A, []);
      O(this.bb, []);
      O(this.Cc, []);
      zB(this.F)
    }
    ;
    var SK = [{
      name: "Interstitial",
      be: 1
    }, {
      name: "TopAnchor",
      be: 2
    }, {
      name: "BottomAnchor",
      be: 3
    }]
      , TK = function(a, b) {
      Z.call(this, a, 789);
      this.l = b;
      this.C = W(this)
    };
    _.N(TK, Z);
    TK.prototype.j = function() {
      var a = this;
      xB(this.C, SK.filter(function(b) {
        return (new RegExp("gam" + b.name + "Demo","i")).test(a.l)
      }).map(function(b) {
        var c = b.name;
        b = b.be;
        var d, e;
        null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
        d = new Yv;
        e = new Nv;
        b = _.z(e, 2, b);
        c = _.z(b, 1, "/22639388115/example/" + c.toLowerCase());
        return _.Rh(d, 5, Zv, c)
      }))
    }
    ;
    var UK = function(a, b) {
      Z.call(this, a, 891);
      var c = this;
      this.l = W(this);
      this.error = void 0;
      var d = W(this);
      this.A = X(this, d);
      b ? b(function(e, f) {
        if (f)
          c.error = f,
            O(d, []);
        else
          try {
            if ("string" === typeof e) {
              var g = JSON.parse(e || "[]");
              Array.isArray(g) && O(d, g)
            }
          } catch (h) {} finally {
            d.Xa || (c.error = Error("malformed response"),
              O(d, []))
          }
      }) : (this.error = Error("missing input"),
        xB(d, []))
    };
    _.N(UK, Z);
    UK.prototype.j = function() {
      if (this.error)
        throw this.error;
      var a = this.l;
      var b = this.A.value;
      if (!Array.isArray(b))
        throw Error("must be an array");
      if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
        throw Error("arrays passed to jspb constructors must be mutable");
      var c = lc(b);
      if (0 !== c)
        throw Error();
      nc(b, c | 64);
      b = od(aw, rc(b));
      O(a, b)
    }
    ;
    var un = function(a, b, c, d) {
      Z.call(this, a, 959);
      this.mb = b;
      this.C = W(this);
      this.l = X(this, b);
      NB(this, c);
      NB(this, d)
    };
    _.N(un, Z);
    un.prototype.j = function() {
      O(this.C, this.l.value)
    }
    ;
    var tn = function(a, b, c, d, e, f, g) {
      Z.call(this, a, 874);
      this.A = b;
      this.K = c;
      this.win = d;
      this.F = e;
      this.l = LB(this);
      NB(this, f);
      this.D = X(this, g)
    };
    _.N(tn, Z);
    tn.prototype.j = function() {
      var a = this
        , b = new dA(this.win,{
        Qa: -1,
        Yf: !0
      });
      _.Kn(this, b);
      if (fA(b)) {
        var c = this.K.H
          , d = c.status
          , e = function(f) {
          var g = a.D.value, h, k, l;
          if (l = !(null == (h = a.F) ? 0 : E(h, 9))) {
            var m = void 0 === m ? !1 : m;
            l = jA(f) ? !1 === f.gdprApplies || "tcunavailable" === f.tcString || void 0 === f.gdprApplies && !m || "string" !== typeof f.tcString || !f.tcString.length ? !0 : hA(f, "1") : !1
          }
          h = _.z(g, 5, l);
          l = !kA(f, ["3", "4"]);
          h = _.z(h, 9, l);
          h = _.z(h, 2, f.tcString);
          l = null != (k = f.addtlConsent) ? k : "";
          k = _.z(h, 4, l);
          _.z(k, 7, f.internalErrorState);
          null != f.gdprApplies && _.z(g, 3, f.gdprApplies);
          _.F(lz) && !kA(f, ["2", "7", "9", "10"]) && _.z(g, 8, !0);
          a.l.notify()
        };
        switch (d) {
          case 2:
            e(c.data);
            break;
          case 1:
            c.j.push(e);
            break;
          case 0:
            c.data = void 0;
            c.status = 1;
            c.j.push(e);
            this.A.info(EJ());
            b.addEventListener(function(f) {
              jA(f) ? ("tcunavailable" === f.tcString ? a.A.info(FJ("failed")) : a.A.info(FJ("succeeded")),
                c.data = f,
                c.status = 2,
                c.fd().forEach(function(g) {
                  g(f)
                }),
                c.Pd()) : (c.data = void 0,
                c.status = 1)
            });
            break;
          default:
            throw Error("Impossible TCDataCacheStatus: " + d);
        }
      } else
        this.l.notify()
    }
    ;
    var sn = function(a, b, c, d, e) {
      Z.call(this, a, 875);
      this.D = b;
      this.win = c;
      this.l = LB(this);
      NB(this, d);
      this.A = X(this, e)
    };
    _.N(sn, Z);
    sn.prototype.j = function() {
      var a = this
        , b = _.F(Gz) ? new LA(this.win) : new KG(this.win);
      _.Kn(this, b);
      if (b.l()) {
        var c = Uh(this.context, 660, function(d) {
          d && "string" === typeof d.uspString && _.z(a.A.value, 1, d.uspString);
          a.l.notify()
        });
        this.D.info(DJ());
        b.A(c)
      } else
        this.l.notify()
    }
    ;
    var qn = function(a, b) {
      Z.call(this, a, 958);
      this.l = b;
      this.mb = W(this)
    };
    _.N(qn, Z);
    qn.prototype.j = function() {
      var a = new YB, b, c = null == (b = this.l) ? void 0 : E(b, 9);
      _.z(a, 5, !c);
      O(this.mb, a)
    }
    ;
    var rn = function(a, b, c, d) {
      d = void 0 === d ? .001 : d;
      Z.call(this, a, 960);
      this.win = b;
      this.A = d;
      this.l = X(this, c)
    };
    _.N(rn, Z);
    rn.prototype.j = function() {
      var a = this;
      $h(this.context, 894, function() {
        return void wj("cmpMet", function(b) {
          Cj(b, a.context);
          var c = new dA(a.win);
          _.Kn(a, c);
          var d = _.F(Gz) ? new LA(a.win) : new KG(a.win);
          _.Kn(a, d);
          L(b, "fc", Number(a.l.value));
          L(b, "tcfv1", Number(!!a.win.cj));
          L(b, "tcfv2", Number(fA(c)));
          L(b, "usp", Number(d.l()));
          L(b, "ptt", 17)
        }, a.A)
      })
    }
    ;
    var VK = function(a, b) {
      Z.call(this, a, 1052);
      this.A = W(this);
      this.l = W(this);
      this.D = Y(this, b)
    };
    _.N(VK, Z);
    VK.prototype.j = function() {
      var a = this.D.value
        , b = new yv
        , c = new _.v.Map;
      if (a) {
        var d = new _.v.Set;
        a = _.x(a);
        for (var e = a.next(); !e.done; e = a.next()) {
          var f = e.value;
          if (_.cg(f, 1)) {
            e = new _.v.Set;
            c.set(_.Vf(f, 1).toString(), e);
            f = _.x(f.m());
            for (var g = f.next(); !g.done; g = f.next()) {
              g = g.value;
              var h = (0,
                C.I)(g.m());
              e.add(h);
              d.has(h) || _.Yf(b, 2, vv, g);
              d.add(h)
            }
          }
        }
      }
      O(this.A, c);
      O(this.l, b)
    }
    ;
    var WK = function(a, b) {
      Z.call(this, a, 1040);
      this.l = W(this);
      this.A = W(this);
      this.D = Y(this, b)
    };
    _.N(WK, Z);
    WK.prototype.j = function() {
      var a = this.D.value;
      a ? (yB(this.A, a instanceof yv ? _.Vf(a, 1) : null),
        a = a.m(),
        xB(this.l, a.map(function(b) {
          var c = b.G();
          b = b.m();
          c = c && (_.u(c, "startsWith").call(c, location.protocol) || _.u(c, "startsWith").call(c, "data:") && 40 >= c.length) ? ue(null === c ? "null" : void 0 === c ? "undefined" : c) : void 0;
          return {
            Xc: b,
            url: c
          }
        }))) : (zB(this.A),
        xB(this.l, []))
    }
    ;
    var Nq = function(a, b, c, d) {
      Z.call(this, a, 813);
      this.D = b;
      this.Wa = d;
      this.A = W(this);
      this.F = Y(this, c);
      this.l = Y(this, d)
    };
    _.N(Nq, Z);
    Nq.prototype.j = function() {
      var a = this
        , b = this.F.value;
      if (b && this.l.value && !_.F(zz)) {
        b = _.x(b);
        for (var c = b.next(); !c.done; c = b.next()) {
          var d = c.value;
          c = d.Xc;
          (d = d.url) && _.Kn(this, Ig(c, d, this.l.value, this.Wa, function(e, f) {
            Yh(a.context, e, f);
            var g, h;
            null == (g = a.D) || null == (h = g.error) || h.call(g, f)
          }))
        }
        O(this.A, !0)
      } else
        O(this.A, !1)
    }
    ;
    var XK = function(a, b, c) {
      Z.call(this, a, 1045);
      this.Wa = c;
      this.l = X(this, b)
    };
    _.N(XK, Z);
    XK.prototype.j = function() {
      var a = this.l.value;
      if (a) {
        var b = this.context
          , c = this.Wa;
        if (_.cg(a, 1)) {
          var d = new ig
            , e = new Lq;
          O(e, a);
          a = new WK(b,e);
          G(d, a);
          b = new Nq(b,console,a.l,c);
          G(d, b);
          tg(d)
        }
      }
    }
    ;
    var YK = function(a, b) {
      Z.call(this, a, 931);
      this.tb = W(this);
      this.kb = W(this);
      this.l = Y(this, b)
    };
    _.N(YK, Z);
    YK.prototype.j = function() {
      var a = this.l.value
        , b = new _.v.Map;
      O(this.tb, new _.v.Map);
      if (a) {
        var c;
        a = _.x(null != (c = this.l.value) ? c : []);
        for (c = a.next(); !c.done; c = a.next()) {
          var d = c.value;
          c = _.Pe(d, qv, 1);
          c = 1 === _.Re(c[0], 1, 0) ? Gu(c[0]) : Hu(c[0], Fu);
          d = _.$e(d, 2);
          var e = void 0;
          b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
        }
      }
      O(this.kb, b)
    }
    ;
    var ZK = function(a, b) {
      Z.call(this, a, 981);
      this.A = W(this);
      this.l = W(this);
      this.D = Y(this, b)
    };
    _.N(ZK, Z);
    ZK.prototype.j = function() {
      var a = new _.v.Map, b, c = _.x(null != (b = this.D.value) ? b : []);
      for (b = c.next(); !b.done; b = c.next()) {
        b = b.value;
        var d = _.Pe(b, qv, 1);
        d = 1 === _.Re(d[0], 1, 0) ? Gu(d[0]) : Hu(d[0], Fu);
        a.set(d, _.$e(b, 2))
      }
      O(this.A, a);
      a = new hv;
      O(this.l, a)
    }
    ;
    var $K = function(a, b, c, d, e, f) {
      Z.call(this, a, 976);
      this.nextFunction = d;
      this.l = e;
      this.requestBidsConfig = f;
      NB(this, b);
      NB(this, c)
    };
    _.N($K, Z);
    $K.prototype.j = function() {
      var a;
      null == (a = this.nextFunction) || a.apply(this.l, [this.requestBidsConfig])
    }
    ;
    var aL = function(a, b, c, d, e, f) {
      Z.call(this, a, 975);
      this.A = b;
      this.l = c;
      this.D = d;
      this.pbjs = e;
      this.requestBidsConfig = f;
      this.C = new FB
    };
    _.N(aL, Z);
    aL.prototype.j = function() {
      Dn(this.pbjs, this.A, this.l, this.D, this.requestBidsConfig);
      this.C.notify()
    }
    ;
    var bL = function(a, b, c, d, e, f) {
      Z.call(this, a, 1100);
      this.pbjs = b;
      this.l = c;
      this.A = d;
      this.D = e;
      this.requestBidsConfig = f;
      this.C = new FB
    };
    _.N(bL, Z);
    bL.prototype.j = function() {
      var a, b, c = null != (b = null == (a = this.l) ? void 0 : a.get("*")) ? b : _.Mf(qy);
      if (c)
        this.wb(c);
      else {
        var d, e, f, g;
        a = null != (g = null != (f = null == (d = this.requestBidsConfig) ? void 0 : d.adUnits) ? f : null == (e = this.pbjs) ? void 0 : e.adUnits) ? g : [];
        d = _.x(a);
        for (e = d.next(); !e.done; e = d.next())
          if (e = e.value.code)
            c = b = a = g = void 0,
              f = null != (g = null != (a = null == (c = this.l) ? void 0 : c.get(_.F(xn) ? wn(e) : e)) ? a : null == (b = this.l) ? void 0 : b.get(_.si(e))) ? g : 0,
              this.wb(f)
      }
      this.C.notify()
    }
    ;
    bL.prototype.wb = function(a) {
      var b;
      null != (b = this.A) && _.z(b, 2, this.D);
      if (a) {
        var c;
        null != (c = this.A) && _.z(c, 1, 1);
        if (!this.D) {
          this.requestBidsConfig.timeout = a;
          var d, e, f;
          b = null != (f = null == (e = (d = this.pbjs).getConfig) ? void 0 : e.call(d).s2sConfig) ? f : [];
          if (Array.isArray(b))
            for (d = _.x(b),
                   e = d.next(); !e.done; e = d.next())
              e.value.timeout = a;
          else
            b.timeout = a;
          var g, h;
          null == (h = (g = this.pbjs).setConfig) || h.call(g, {
            bidderTimeout: a
          })
        }
      }
    }
    ;
    var cL = function(a, b, c, d, e, f, g, h) {
      _.S.call(this);
      this.j = a;
      this.B = b;
      this.m = c;
      this.l = d;
      this.A = e;
      this.H = f;
      this.L = g;
      this.pbjs = h
    };
    _.N(cL, _.S);
    cL.prototype.push = function(a) {
      var b = a.context
        , c = a.nextFunction;
      a = a.requestBidsConfig;
      if (this.pbjs) {
        var d = new ig;
        _.Kn(this, d);
        var e = new bL(this.j,this.pbjs,this.A,this.H,this.L,a)
          , f = new aL(this.j,this.B,this.m,this.l,this.pbjs,a);
        G(d, e);
        G(d, f);
        G(d, new $K(this.j,f.C,e.C,c,b,a));
        tg(d)
      }
    }
    ;
    var dL = function(a, b, c, d, e, f, g, h, k) {
      Z.call(this, a, 951);
      this.win = window;
      this.Qb = W(this);
      this.Rb = W(this);
      this.F = X(this, b);
      this.A = Y(this, d);
      this.D = X(this, e);
      this.M = X(this, f);
      this.l = Y(this, g);
      this.O = Y(this, h);
      this.J = X(this, k);
      NB(this, c)
    };
    _.N(dL, Z);
    dL.prototype.j = function() {
      var a = !!Uk().pbjs_hooks;
      O(this.Rb, a);
      yB(this.Qb, a ? null : _.gf());
      var b, c = null == (b = this.A.value) ? void 0 : b.size, d;
      b = (null == (d = this.l.value) ? void 0 : d.size) || _.Mf(qy);
      d = this.F.value;
      var e, f = null != (e = Uk().pbjs_hooks) ? e : [];
      e = new cL(this.context,this.A.value,this.D.value,this.M.value,this.l.value,this.O.value,this.J.value,d);
      _.Kn(this, e);
      f = _.x(f);
      for (var g = f.next(); !g.done; g = f.next())
        e.push(g.value);
      if (c || b || a)
        Uk().pbjs_hooks = Gn(this.context, e);
      !c && !b || a || En(d, this.win)
    }
    ;
    var eL = function(a, b, c) {
      Z.call(this, a, 1093);
      this.A = new EB(b);
      this.l = X(this, c)
    };
    _.N(eL, Z);
    eL.prototype.j = function() {
      var a = this.A.value;
      if (a) {
        var b;
        (null == (b = this.l.value["*"]) ? 0 : b.zc) && Array.isArray(a.installedModules) && (b = new $k("pbjs_modules"),
          Cj(b, this.context),
          L(b, "pbmods", a.installedModules.join("~")),
          bl(b))
      }
    }
    ;
    var fL = function(a, b) {
      Z.call(this, a, 966);
      this.win = b;
      this.Pa = W(this)
    };
    _.N(fL, Z);
    fL.prototype.j = function() {
      var a = this
        , b = ph(this.win);
      if (b)
        O(this.Pa, b);
      else if ((b = Object.getOwnPropertyDescriptor(this.win, "_pbjsGlobals")) && !b.configurable)
        wj("pdpg_error", function(d) {
          Cj(d, a.context)
        }, _.Mf(oy));
      else {
        var c = null;
        Object.defineProperty(this.win, "_pbjsGlobals", {
          set: function(d) {
            c = d;
            (d = ph(a.win)) && O(a.Pa, d)
          },
          get: function() {
            return c
          }
        })
      }
    }
    ;
    fL.prototype.m = function() {}
    ;
    var Mn = function(a, b, c, d) {
      Z.call(this, a, 879);
      this.A = b;
      this.l = W(this);
      c && (this.D = X(this, d))
    };
    _.N(Mn, Z);
    Mn.prototype.j = function() {
      var a, b;
      (null != (b = null == (a = this.D) ? void 0 : a.value) ? b : this.A.m()) ? (a = this.A.L(),
        AB(this.l, a)) : zB(this.l)
    }
    ;
    var Ln = function(a, b, c) {
      Z.call(this, a, 896);
      this.l = b;
      this.Mb = W(this);
      c && NB(this, c)
    };
    _.N(Ln, Z);
    Ln.prototype.j = function() {
      var a = this.l.m();
      O(this.Mb, a)
    }
    ;
    var gL = function(a, b) {
      Z.call(this, a, 1018);
      this.ob = LB(this);
      this.l = Y(this, b)
    };
    _.N(gL, Z);
    gL.prototype.j = function() {
      var a, b, c, d = _.x(null != (c = null == (a = this.l.value) ? void 0 : null == (b = zf(a, NA, 5)) ? void 0 : Zc(b, 1, Cc)) ? c : []);
      for (a = d.next(); !a.done; a = d.next())
        of(a.value);
      this.ob.notify()
    }
    ;
    var hL = function(a, b) {
      Z.call(this, a, 1070);
      this.l = W(this);
      this.A = Y(this, b)
    };
    _.N(hL, Z);
    hL.prototype.j = function() {
      var a, b = null == (a = this.A.value) ? void 0 : zf(a, NA, 5);
      if (b) {
        a = [];
        for (var c = _.x(Zc(b, 2, Gc)), d = c.next(); !d.done; d = c.next()) {
          var e = d.value;
          d = new Lv;
          var f = new Jv;
          e = _.z(f, 1, e);
          d = _.Oh(d, 2, e);
          null != Vn(b, 3) && (e = new Hv,
            e = _.z(e, 1, 1),
            e = _.z(e, 2, Se(b, 3)),
            _.Oh(d, 3, e));
          a.push(d)
        }
        O(this.l, a)
      } else
        O(this.l, [])
    }
    ;
    var iL = function(a, b, c, d) {
      Z.call(this, a, 1016);
      this.C = W(this);
      this.A = Y(this, b);
      this.l = Y(this, c);
      this.D = PB(this, [b, d])
    };
    _.N(iL, Z);
    iL.prototype.j = function() {
      if (this.l.value) {
        var a = this.A.value || this.D.value;
        a && jL(this, a) ? O(this.C, a) : (zB(this.C),
          kL(this, a))
      } else
        zB(this.C)
    }
    ;
    iL.prototype.H = function(a) {
      this.m(a)
    }
    ;
    iL.prototype.m = function() {
      zB(this.C)
    }
    ;
    var jL = function(a, b) {
      return _.Pe((0,
        C.I)(a.l.value), Ev, 1).some(function(c) {
        return _.Vf(c, 1) === b
      })
    }
      , kL = function(a, b) {
      wj("pp_iris_failure", function(c) {
        L(c, "fnc", b);
        Cj(c, a.context)
      }, _.Mf(Yy))
    };
    var lL = function(a, b) {
      Z.call(this, a, 1015);
      this.l = W(this);
      this.A = Y(this, b)
    };
    _.N(lL, Z);
    lL.prototype.j = function() {
      if (this.A.value) {
        var a = _.Pe(this.A.value, Ev, 1);
        (null == a ? 0 : a.length) ? (a = _.Pe(this.A.value, Ev, 1)[0],
          (_.D = [2, 3],
            _.u(_.D, "includes")).call(_.D, _.Re(a, 3, 0)) ? O(this.l, _.Vf(a, 1)) : zB(this.l)) : zB(this.l)
      } else
        zB(this.l)
    }
    ;
    lL.prototype.H = function(a) {
      this.m(a)
    }
    ;
    lL.prototype.m = function() {
      zB(this.l)
    }
    ;
    var mL = function(a, b, c) {
      Z.call(this, a, 1017);
      this.win = c;
      this.C = LB(this);
      this.l = Y(this, b)
    };
    _.N(mL, Z);
    mL.prototype.j = function() {
      var a = this;
      if (this.l.value) {
        var b = mA(this.win, this.l.value, function(c) {
          if (!c) {
            c = Vw(b.j);
            for (var d = _.x(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next())
              c.Pf(e.value)
          }
          a.C.notify()
        });
        b.start()
      } else
        this.C.notify()
    }
    ;
    mL.prototype.H = function(a) {
      this.m(a)
    }
    ;
    mL.prototype.m = function() {
      this.C.notify()
    }
    ;
    var nL = function(a, b) {
      Z.call(this, a, 1056);
      this.C = W(this);
      this.l = X(this, b)
    };
    _.N(nL, Z);
    nL.prototype.j = function() {
      var a = Ih((0,
        C.I)(this.l.value.getAdUnitPath()));
      O(this.C, a)
    }
    ;
    nL.prototype.H = function(a) {
      this.m(a)
    }
    ;
    nL.prototype.m = function() {
      zB(this.C)
    }
    ;
    var oL = function() {
      Z.apply(this, arguments);
      this.value = this.promise = null;
      this.C = W(this)
    };
    _.N(oL, Z);
    oL.prototype.j = function() {
      var a = this;
      this.promise.then(function() {
        return void yB(a.C, a.value)
      })
    }
    ;
    var lq = function(a, b, c, d) {
      oL.call(this, a, 1061);
      var e = this;
      this.promise = iI(b, c, function(f) {
        return null !== (e.value = d(f))
      })
    };
    _.N(lq, oL);
    var pL = function(a, b, c, d) {
      Z.call(this, a, 906, _.Mf(Wy));
      this.l = LB(this);
      if (b === b.top) {
        var e = new ig;
        _.Kn(this, e);
        var f = new lL(a,c);
        G(e, f);
        d = new lq(a,d,mI,function(g) {
            return g.detail.R
          }
        );
        G(e, d);
        d = new nL(a,d.C);
        G(e, d);
        a = new iL(a,f.l,c,d.C);
        G(e, a);
        b = new mL(this.context,a.C,b);
        G(e, b);
        OB(this, b.C);
        tg(e)
      } else
        this.l.notify()
    };
    _.N(pL, Z);
    pL.prototype.j = function() {
      this.l.notify()
    }
    ;
    pL.prototype.H = function(a) {
      this.m(a)
    }
    ;
    pL.prototype.m = function() {
      this.l.notify()
    }
    ;
    var Op = function(a, b) {
      Z.call(this, a, 1031);
      this.win = b
    };
    _.N(Op, Z);
    Op.prototype.j = function() {
      this.win === this.win.top && mk(this.win)
    }
    ;
    var Mp = function(a, b, c) {
      c = void 0 === c ? nh : c;
      Z.call(this, a, 1063);
      this.win = b;
      this.A = c;
      this.l = W(this)
    };
    _.N(Mp, Z);
    Mp.prototype.j = function() {
      var a = this;
      if (_.F(Gy) && oh(this.win)) {
        var b = null
          , c = 0
          , d = _.Mf(Hy)
          , e = Uh(this.context, this.id, function() {
          var g, h, k, l;
          return _.Ab(function(m) {
            switch (m.j) {
              case 1:
                return g = a.A(a.win),
                  h = "0",
                  m.m = 2,
                  Bb(m, g, 4);
              case 4:
                h = null != (k = m.o) ? k : "0";
                h.length > d && (Yh(a.context, a.id, new wm("ML:" + h.length)),
                  h = "0");
                Eb(m, 3);
                break;
              case 2:
                l = Fb(m),
                  Yh(a.context, a.id, l);
              case 3:
                b = h,
                  c = _.gf(a.win) + 3E5,
                  m.j = 0
            }
          })
        });
        var f = (_.D = e(),
          _.u(_.D, "finally")).call(_.D, function() {
          f = void 0
        });
        xB(this.l, function() {
          var g, h;
          return _.Ab(function(k) {
            if (1 == k.j) {
              g = _.gf(a.win) >= c;
              h = null === b || "0" === b;
              if (!g && !h) {
                k.j = 2;
                return
              }
              f || (f = (_.D = e(),
                _.u(_.D, "finally")).call(_.D, function() {
                f = void 0
              }));
              return Bb(k, f, 2)
            }
            return k.return((0,
              C.I)(b))
          })
        })
      } else
        xB(this.l, function() {
          return _.v.Promise.resolve("")
        })
    }
    ;
    Mp.prototype.m = function() {
      xB(this.l, function() {
        return _.v.Promise.resolve("")
      })
    }
    ;
    var qL = function(a, b, c, d, e, f) {
      Z.call(this, a, 1096);
      this.networkCode = b;
      this.win = c;
      this.V = d;
      this.l = e;
      this.A = Y(this, f)
    };
    _.N(qL, Z);
    qL.prototype.j = function() {
      var a, b = null == (a = this.A.value) ? void 0 : a.Uf;
      b && b(this.l, this.V, this.win, this.networkCode)
    }
    ;
    var rL = function(a) {
      this.module = a
    };
    rL.prototype.toString = function() {
      return String(this.module)
    }
    ;
    _.sL = new rL(2);
    _.tL = new rL(5);
    var uL = function(a, b) {
      Z.call(this, a, 1095);
      this.l = b;
      this.C = W(this)
    };
    _.N(uL, Z);
    uL.prototype.j = function() {
      AB(this.C, this.l.load(_.tL))
    }
    ;
    var vL = function(a, b, c, d) {
      Z.call(this, a, 1090);
      this.l = b;
      this.A = X(this, c);
      this.D = Y(this, d)
    };
    _.N(vL, Z);
    vL.prototype.j = function() {
      var a = this.D.value, b;
      if (a && null != (b = zf(a, Vv, 1)) && _.Wv(b).length) {
        b = new ig;
        _.Kn(this, b);
        var c = new uL(this.context,this.l);
        G(b, c);
        a = new qL(this.context,"",window,this.A.value,(0,
          C.I)(zf(a, Vv, 1)),c.C);
        G(b, a);
        tg(b)
      }
    }
    ;
    var Lp = function(a, b) {
      Z.call(this, a, 979);
      this.win = b;
      this.C = W(this)
    };
    _.N(Lp, Z);
    Lp.prototype.j = function() {
      var a = this
        , b = "function" !== typeof this.win.document.browsingTopics
        , c = !Jg("browsing-topics", this.win.document);
      b = b || c;
      Jg("shared-storage", this.win.document) && _.F(vy) || !b ? Yj(this.win).then(function(d) {
        O(a.C, d)
      }) : zB(this.C)
    }
    ;
    Lp.prototype.m = function() {
      zB(this.C)
    }
    ;
    var Qp = function(a) {
      Z.call(this, a, 1083);
      this.C = W(this)
    };
    _.N(Qp, Z);
    Qp.prototype.j = function() {
      var a = Ek();
      a ? AB(this.C, a) : zB(this.C)
    }
    ;
    var Mq = function(a, b, c) {
      Z.call(this, a, 706);
      this.win = b;
      this.C = W(this);
      this.l = X(this, c)
    };
    _.N(Mq, Z);
    Mq.prototype.j = function() {
      yB(this.C, bf(this.l.value, this.win))
    }
    ;
    var wL = function(a, b) {
      Z.call(this, a, 1081);
      this.Ba = W(this);
      this.l = Y(this, b)
    };
    _.N(wL, Z);
    wL.prototype.j = function() {
      this.l.value ? O(this.Ba, this.l.value) : zB(this.Ba)
    }
    ;
    var xL = function(a, b, c, d, e, f, g) {
      Z.call(this, a, 1080);
      this.W = b;
      this.googletag = c;
      this.T = d;
      this.D = e;
      this.l = f;
      this.F = g;
      this.A = W(this)
    };
    _.N(xL, Z);
    xL.prototype.j = function() {
      if (qo(this.l, Pv, 2) && Qn((0,
        C.I)(zf(this.l, Pv, 2)))) {
        var a;
        ao(this.W, this.googletag, this.l, null != (a = this.T) ? a : this.D.j, this.F);
        null != Vn(this.l, 1) ? O(this.A, Se(this.l, 1)) : zB(this.A)
      } else
        zB(this.A)
    }
    ;
    var yL = new _.v.Map([[1, 5], [2, 2], [3, 3]])
      , zL = function(a, b, c, d, e, f, g, h) {
      Z.call(this, a, 1079);
      this.googletag = b;
      this.T = c;
      this.J = d;
      this.l = e;
      this.F = f;
      this.D = g;
      this.A = h
    };
    _.N(zL, Z);
    zL.prototype.j = function() {
      var a = this
        , b = this.D.getAdUnitPath()
        , c = yL.get(_.Re(this.D, 2, 0));
      if (b && c && (b = eo(this.context, this.F, this.J, {
        Wd: c,
        adUnitPath: b,
        pb: !0
      }))) {
        var d = (0,
          C.I)(b.j);
        this.A && Zn((0,
          C.I)(Yn(this.l, d.getSlotElementId())), this.A);
        this.googletag.cmd.push(function() {
          d.addService(a.googletag.pubads())
        });
        $n(document, function() {
          a.googletag.display(d);
          var e;
          E(null != (e = a.T) ? e : a.l.j, 4) && a.googletag.pubads().refresh([d])
        })
      }
    }
    ;
    var zr = function(a, b, c, d, e, f, g) {
      Z.call(this, a, 1082);
      this.googletag = b;
      this.T = c;
      this.O = d;
      this.A = e;
      this.M = f;
      this.F = [];
      this.J = W(this);
      this.D = new wL(this.context,this.J);
      this.l = [];
      this.Ba = this.D.Ba;
      _.Kn(this, this.D);
      a = _.x(g);
      for (b = a.next(); !b.done; b = a.next())
        this.l.push(X(this, b.value))
    };
    _.N(zr, Z);
    zr.prototype.j = function() {
      if (_.F($y)) {
        var a = AL(this), b = a.Rf, c = a.qh, d;
        yB(this.J, null == (d = a.Ig) ? void 0 : zf(d, Lv, 4));
        a = new ig;
        _.Kn(this, a);
        b = _.x(b);
        for (d = b.next(); !d.done; d = b.next()) {
          d = d.value;
          var e = void 0;
          G(a, new zL(this.context,this.googletag,null != (e = this.T) ? e : this.A.j,this.O,this.A,this.M,(0,
            C.I)(Tn(d, Nv, 5, Zv)),zf(d, Lv, 4)))
        }
        c = _.x(c);
        for (d = c.next(); !d.done; d = c.next())
          b = d.value,
            b = new xL(this.context,document,this.googletag,this.T,this.A,(0,
              C.I)(Tn(b, Rv, 6, Zv)),zf(b, Lv, 4)),
            G(a, b),
            this.F.push(b.A);
        G(a, this.D);
        tg(a)
      } else
        zB(this.Ba)
    }
    ;
    var AL = function(a) {
      var b = []
        , c = [];
      a = _.x(_.u(a.l, "flatMap").call(a.l, function(f) {
        return f.value
      }));
      for (var d = a.next(); !d.done; d = a.next())
        switch (d = d.value,
          gk(d, Zv)) {
          case 5:
            b.push(d);
            break;
          case 6:
            c.push(d);
            break;
          case 8:
            var e = d
        }
      return {
        Rf: b,
        qh: c,
        Ig: e
      }
    };
    var BL = function(a, b, c, d) {
      Z.call(this, a, 890);
      this.D = b;
      this.A = c;
      this.Wa = d;
      this.l = Y(this, d)
    };
    _.N(BL, Z);
    BL.prototype.j = function() {
      var a = this;
      this.l.value && zg(this.D, this.l.value, this.Wa, function(b, c) {
        Yh(a.context, b, c);
        var d, e;
        null == (d = a.A) || null == (e = d.error) || e.call(d, c)
      })
    }
    ;
    var CL = function(a, b, c) {
      Z.call(this, a, 1051);
      this.A = b;
      this.l = Y(this, c)
    };
    _.N(CL, Z);
    CL.prototype.j = function() {
      var a = this;
      this.l.value && Eg(this.l.value, function(b, c) {
        Yh(a.context, b, c);
        var d, e;
        null == (d = a.A) || null == (e = d.error) || e.call(d, c)
      })
    }
    ;
    var DL = function(a, b, c, d, e, f, g, h) {
      _.S.call(this);
      this.context = a;
      this.ia = b;
      this.ca = c;
      this.Y = d;
      this.K = e;
      this.ha = f;
      this.ma = g;
      this.aa = h;
      this.M = new UK(this.context,this.ha);
      this.m = new RK(this.context,this.M.l);
      this.bb = this.m.bb;
      this.j = new OK(this.context,this.m.l,window);
      this.B = new YK(this.context,this.j.D);
      this.l = new ZK(this.context,this.j.A);
      var k;
      this.J = new TK(this.context,null != (k = window.location.hash) ? k : "");
      this.L = new zr(this.context,Uk(),null,this.ia,this.ca,this.Y,[this.J.C, this.m.Cc]);
      this.A = new fL(this.context,window);
      _.F(mr) || (this.P = new Mp(this.context,window),
        this.O = new Lp(this.context,window),
        this.zb = this.P.l,
        this.ib = this.O.C,
        _.Kn(this, this.O),
        _.Kn(this, this.P),
      _.F(Pp) && (this.D = new Qp(this.context),
        _.Kn(this, this.D),
        this.Mc = this.D.C));
      this.F = new QK(this.context,this.ma,this.j.Ra,this.m.A,this.j.l,this.L.F);
      this.kb = this.B.kb;
      this.Za = this.j.Za;
      this.jb = this.j.jb;
      this.Ra = this.j.Ra;
      this.ja = this.j.l;
      this.tb = this.B.tb;
      this.Pa = this.A.Pa;
      this.U = this.l.A;
      this.ic = this.l.l;
      this.Lb = this.F.C;
      this.H = new dL(this.context,this.Pa,this.Lb,this.kb,this.Za,this.tb,this.U,this.ic,this.jb);
      this.Qb = this.H.Qb;
      this.Rb = this.H.Rb;
      this.Ba = this.L.Ba;
      this.ob = new FB;
      this.rc = new Lq;
      _.Kn(this, this.A);
      _.Kn(this, this.M);
      _.Kn(this, this.m);
      _.Kn(this, this.B);
      _.Kn(this, this.l);
      _.Kn(this, this.j);
      _.Kn(this, this.J);
      _.Kn(this, this.L);
      _.Kn(this, this.H);
      _.Kn(this, this.F);
      if (!f) {
        O(this.Ra, {});
        O(this.ja, []);
        zB(this.kb);
        O(this.Za, !1);
        O(this.tb, new _.v.Map);
        zB(this.U);
        this.Lb.notify();
        zB(this.ic);
        O(this.jb, !1);
        var l;
        null == (l = this.Ba) || zB(l);
        O(this.bb, []);
        this.ob.notify();
        O(this.rc, []);
        this.ib && zB(this.ib);
        this.zb && zB(this.zb)
      }
    };
    _.N(DL, _.S);
    var EL = function(a, b) {
      var c = new ig;
      _.Kn(a, c);
      G(c, a.A);
      G(c, a.M);
      G(c, a.m);
      G(c, a.j);
      G(c, a.B);
      G(c, a.F);
      G(c, a.l);
      b = new pL(a.context,window,a.m.D,b);
      a.yd = b.l;
      G(c, b);
      G(c, a.J);
      G(c, a.L);
      _.F(mr) || (G(c, (0,
        C.I)(a.P)),
        G(c, (0,
          C.I)(a.O)),
      _.F(Np) && G(c, new Op(a.context,window)),
      a.D && G(c, a.D));
      _.F(ry) && G(c, new eL(a.context,a.A.Pa,a.j.Ra));
      G(c, a.H);
      var d = Nn(a.context, a.ha, a.yd);
      b = d.Mb;
      var e = d.df;
      _.Kn(c, d.sa);
      d = new gL(a.context,e);
      a.ob = d.ob;
      G(c, d);
      d = new hL(a.context,e);
      G(c, d);
      a.rc = d.l;
      var f = !_.F(zz) && !Ol();
      d = _.F(fz);
      if (f || d) {
        e = vn(a.context, a.Y, a.K, void 0, window, b, e);
        b = e.mb;
        _.Kn(a, e.sa);
        if (f) {
          e = new Mq(a.context,window,b);
          var g = e.C;
          G(c, e);
          _.F(Jp) || (f = new BL(a.context,Uk(),console,g),
            G(c, f));
          f = new VK(a.context,a.bb);
          a.qe = f.A;
          G(c, f);
          f = new XK(a.context,f.l,e.C);
          G(c, f);
          _.F(Bz) && (e = new CL(a.context,console,e.C),
            G(c, e))
        }
        if (d) {
          e = a.context;
          f = a.aa;
          var h = a.m.F;
          d = new ig;
          b = new vL(e,f,b,h);
          G(d, b);
          tg(d)
        }
      }
      tg(c);
      return _.u(Object, "assign").call(Object, {}, {
        yd: a.yd,
        Lb: a.Lb,
        Pa: a.Pa,
        Ra: a.Ra,
        kb: a.kb,
        Za: a.Za,
        jb: a.jb,
        tb: a.tb,
        Qb: a.Qb,
        Rb: a.Rb,
        ic: a.ic,
        qe: a.qe,
        Ba: a.Ba,
        bb: a.bb,
        ob: a.ob,
        rc: a.rc
      }, _.F(mr) ? {} : {
        zb: a.zb,
        ib: a.ib,
        Mc: a.Mc
      }, {
        Wa: g
      })
    };
    new FB;
    new Lq;
    new Lq;
    new Lq;
    new Lq;
    new Lq;
    new Lq;
    new Lq;
    new Lq;
    new Lq;
    new Lq;
    new FB;
    new Lq;
    var FL = ["Debug", "Info", "Warning", "Error", "Fatal"]
      , GL = function(a, b, c) {
      this.level = a;
      this.message = b;
      this.j = c;
      this.timestamp = new Date
    };
    _.aa = GL.prototype;
    _.aa.getSlot = function() {
      return this.j
    }
    ;
    _.aa.getLevel = function() {
      return this.level
    }
    ;
    _.aa.getTimestamp = function() {
      return this.timestamp
    }
    ;
    _.aa.getMessage = function() {
      return this.message
    }
    ;
    _.aa.toString = function() {
      return this.timestamp.toTimeString() + ": " + FL[this.level] + ": " + this.message
    }
    ;
    var HL = {
      20: function(a) {
        return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
      },
      23: function(a) {
        return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
      },
      34: function(a) {
        return "Size mapping is null because invalid mappings were added: " + a[0] + "."
      },
      60: function(a) {
        return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
      },
      66: function(a) {
        return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
      },
      68: function() {
        return "Slots cannot be cleared until service is enabled."
      },
      80: function(a) {
        return "Slot object at position " + a[0] + " is of incorrect type."
      },
      84: function(a) {
        return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
      },
      93: function(a) {
        return "Failed to register listener. Unknown event type: " + a[0] + "."
      },
      96: function(a) {
        return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
      },
      122: function(a) {
        return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
      },
      121: function(a) {
        return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
      },
      151: function(a) {
        return "Invalid arguments: " + a[0] + "(" + a[1] + "). All zero-area slot sizes were removed."
      },
      105: function(a) {
        return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
      },
      106: function(a) {
        return "Publisher betas " + a[0] + " were declared after enableServices() was called."
      },
      107: function(a) {
        return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
      },
      108: function(a) {
        return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
      },
      123: function(a) {
        return "Refresh was throttled for slot: " + a[0] + "."
      },
      113: function(a) {
        return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
      },
      116: function(a) {
        return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
      },
      114: function() {
        return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
      },
      115: function() {
        return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
      },
      132: function(a) {
        return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
      },
      133: function() {
        return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
      },
      134: function(a) {
        return go(a[0]) + " " + a[1] + " not requested: Format already created on the page."
      },
      135: function(a) {
        return go(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
      },
      136: function(a) {
        return go(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
      },
      137: function(a) {
        return go(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
      },
      138: function(a) {
        return go(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
      },
      139: function(a) {
        return go(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
      },
      140: function(a) {
        return go(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
      },
      142: function(a) {
        return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
      },
      145: function(a) {
        return go(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
      },
      143: function() {
        return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
      },
      147: function() {
        return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
      },
      148: function() {
        return "CommerceAdsConfig must contain a valid value for either categories or queries."
      },
      150: function() {
        return "Legacy browser does not support intersection observer causing lazy render/fetch as well as viewability events not to work properly."
      }
    }
      , IL = {
      26: function(a) {
        return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
      },
      28: function(a) {
        return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
      },
      149: function(a) {
        return "Error in googletag.defineSlot: Invalid ad unit path provided " + a[0] + ", see https://support.google.com/admanager/answer/10477476 for more information."
      },
      92: function(a) {
        return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
      },
      30: function(a) {
        return "Exception in googletag.cmd function: " + a[0] + "."
      },
      125: function(a) {
        return "google-product-ad element is invalid: " + a[0] + "."
      },
      126: function() {
        return "Attempted to collect prebid data but window.pbjs is undefined."
      },
      127: function(a) {
        return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
      },
      144: function() {
        return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
      }
    };
    var JL = function(a) {
      this.context = a;
      this.m = this.G = this.j = 0;
      this.B = window;
      this.o = [];
      this.o.length = 1E3
    }
      , cK = function(a) {
      return [].concat(_.xe(a.o.slice(a.j)), _.xe(a.o.slice(0, a.j))).filter(function(b) {
        return !!b
      })
    }
      , dK = function(a, b) {
      return cK(a).filter(function(c) {
        return c.getSlot() === b
      })
    }
      , eK = function(a, b) {
      return cK(a).filter(function(c) {
        return c.getLevel() >= b
      })
    };
    JL.prototype.log = function(a, b, c, d) {
      var e = this;
      d = void 0 === d ? !1 : d;
      var f, g;
      c = new GL(a,b,null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.j) ? g : null);
      this.o[this.j] = c;
      this.j = (this.j + 1) % 1E3;
      g = _.Mf(zy) && 100 > this.G;
      f = 2 === a || 3 === a;
      var h = b.getMessageArgs()
        , k = b.getMessageId()
        , l = HL[k] || IL[k];
      g && f && (b = _.Mf(zy),
        wj("gpt_eventlog_messages", function(m) {
          ++e.G;
          Cj(m, e.context);
          L(m, "level", a);
          L(m, "messageId", k);
          L(m, "args", h.join("|"));
          l || L(m, "noMsg", !0);
          var n = Error(), p;
          L(m, "stack", _.jB(null != (p = n.stack) ? p : "", n.message))
        }, b));
      if (l) {
        b = "[GPT] " + l(h);
        if (d)
          throw new wm(b);
        d = this.m < _.Mf(Ay) && f && _.q.console;
        if (this.B === top && d || _.u(_.q.navigator.userAgent, "includes").call(_.q.navigator.userAgent, "Lighthouse"))
          (function(m) {
              var n, p, r, t;
              return void (2 === a ? null == (p = (n = _.q.console).warn) ? void 0 : p.call(n, m) : null == (t = (r = _.q.console).error) ? void 0 : t.call(r, m))
            }
          )(b),
            this.m++
      }
      return c
    }
    ;
    JL.prototype.info = function(a, b) {
      return this.log(1, a, void 0 === b ? null : b)
    }
    ;
    var kl = function(a, b, c) {
      a.log(2, b, c, !1)
    };
    JL.prototype.error = function(a, b, c) {
      return this.log(3, a, b, void 0 === c ? !1 : c)
    }
    ;
    var KL = function() {
      var a = this;
      var b = void 0 === b ? pj().j : b;
      this.G = "";
      this.j = this.storage = null;
      this.B = this.l = this.m = !1;
      this.o = function() {
        return !1
      }
      ;
      var c = {}
        , d = {}
        , e = {};
      this.H = (e[3] = (c[13] = function() {
        return _.wb.apply(0, arguments).some(function(f) {
          return 0 == a.G.lastIndexOf(f, 0)
        })
      }
        ,
        c[12] = function() {
          return !!E(b, 6)
        }
        ,
        c[15] = function(f) {
          return a.o(f)
        }
        ,
        c[48] = function() {
          return !!a.storage
        }
        ,
        c[51] = function() {
          return a.m
        }
        ,
        c[66] = function() {
          try {
            return !!HTMLScriptElement.supports("webbundle")
          } catch (f) {
            return !1
          }
        }
        ,
        c[67] = function() {
          return a.l
        }
        ,
        c[68] = function() {
          return a.B
        }
        ,
        c),
        e[4] = (d[8] = function(f) {
          var g;
          return null != (g = We(a.storage, Number(f))) ? g : void 0
        }
          ,
          d[10] = function(f) {
            return a.j ? _.si(f + a.j) % 1E3 : void 0
          }
          ,
          d),
        e[5] = {},
        e)
    }
      , LL = function(a, b) {
      b && !a.j && (a.j = _.u(b.split(":"), "find").call(b.split(":"), function(c) {
        return 0 === c.indexOf("ID=")
      }) || null)
    };
    var ML = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/
      , NL = function(a, b, c, d, e, f, g, h, k, l, m, n) {
      Z.call(this, a, 920);
      this.M = b;
      this.R = c;
      this.Db = d;
      this.F = W(this);
      this.J = W(this);
      this.l = W(this);
      this.A = W(this);
      this.O = [];
      this.D = new _.v.Map;
      this.la = X(this, e);
      f && (this.ca = new EB(f));
      g && (this.U = X(this, g));
      h && (this.aa = Y(this, h));
      k && (this.Y = X(this, k));
      l && (this.oa = X(this, l));
      m && (this.na = Y(this, m));
      n && (this.ia = Y(this, n))
    };
    _.N(NL, Z);
    NL.prototype.j = function() {
      if (OL(this)) {
        var a, b = null == (a = this.ca) ? void 0 : a.value;
        b && b.libLoaded ? "function" !== typeof b.getEvents ? (this.M.error(IJ()),
          PL(this)) : (b = QL(this, b),
          a = b.Gg,
          b = b.Hg,
          a ? (O(this.l, a),
            yB(this.A, b),
            O(this.F, this.D),
            O(this.J, this.O)) : PL(this)) : PL(this)
      } else
        PL(this)
    }
    ;
    NL.prototype.H = function(a) {
      this.m(a)
    }
    ;
    NL.prototype.m = function(a) {
      this.M.error(JJ(a.message));
      PL(this)
    }
    ;
    var PL = function(a) {
      O(a.l, []);
      zB(a.A);
      zB(a.F);
      zB(a.J)
    }
      , QL = function(a, b) {
      var c = (0,
        C.I)(b.getEvents)()
        , d = c.filter(function(g) {
        var h = g.args;
        return "auctionEnd" === g.eventType && h.auctionId
      })
        , e = !1
        , f = a.la.value.map(function(g) {
        var h = new ov, k = function(ua) {
          return ua === g.getDomId() || ua === g.getAdUnitPath()
        }, l, m = null != (l = RL.get(g)) ? l : 0, n;
        l = null != (n = d.filter(function(ua) {
          var Ea, pa, va;
          return Number(null == (Ea = ua.args) ? void 0 : Ea.timestamp) > m && (null == (pa = ua.args) ? void 0 : null == (va = pa.adUnitCodes) ? void 0 : _.u(va, "find").call(va, k))
        })) ? n : [];
        if (!l.length)
          return a.O.push(g),
            [g, h];
        var p;
        n = null == (p = l.reduce(function(ua, Ea) {
          return Number(Ea.args.timestamp) > Number(ua.args.timestamp) ? Ea : ua
        })) ? void 0 : p.args;
        if (!n)
          return [g, h];
        var r = void 0 === n.bidderRequests ? [] : n.bidderRequests;
        p = void 0 === n.bidsReceived ? [] : n.bidsReceived;
        var t = n.auctionId;
        n = n.timestamp;
        if (!t || null == n || !r.length)
          return [g, h];
        RL.has(g) || _.fo(g, function() {
          return RL.delete(g)
        });
        RL.set(g, n);
        n = pv(h);
        Math.random() < _.Mf(py) && b.version && ML.test(b.version) && _.z(n, 6, b.version);
        var w;
        lv(n, null == (w = a.na) ? void 0 : w.value);
        w = gj(function() {
          return Bo(c, t)
        });
        l = ll(a.R[g.getDomId()]);
        var B = {};
        r = _.x(r);
        for (var I = r.next(); !I.done; B = {
          Fd: B.Fd,
          Id: B.Id
        },
          I = r.next()) {
          var H = I.value;
          B.Fd = H.bidderCode;
          var R = H.bids;
          I = H.timeout;
          B.Id = H.src;
          H = H.auctionStart;
          var U = {};
          R = _.x(R);
          for (var J = R.next(); !J.done; U = {
            Zb: U.Zb
          },
            J = R.next()) {
            var T = J.value;
            U.Zb = T.bidId;
            var ba = T.transactionId;
            J = T.adUnitCode;
            var ea = T.getFloor;
            T = T.mediaTypes;
            if (U.Zb && k(J)) {
              e = !0;
              po(n, g, J);
              ba && (_.cg(n, 4) || _.z(n, 4, ba),
              a.D.has(ba) || a.D.set(ba, H));
              null != Vn(n, 8) || _.z(n, 8, I);
              var da = _.u(p, "find").call(p, function(ua) {
                return function(Ea) {
                  return Ea.requestId === ua.Zb
                }
              }(U));
              ba = io(n, function(ua) {
                return function() {
                  var Ea = lo(new mo, ua.Fd);
                  switch (ua.Id) {
                    case "client":
                      _.z(Ea, 7, 1);
                      break;
                    case "s2s":
                      _.z(Ea, 7, 2)
                  }
                  return Ea
                }
              }(B)());
              so(n, ba, J, (0,
                C.I)(a.aa).value, (0,
                C.I)(a.Y).value, (0,
                C.I)(a.oa).value, ea);
              da ? (ko(ba, 1),
              "number" === typeof da.timeToRespond && no(ba, da.timeToRespond),
                J = ho(da, l, T),
                jo(ba, J)) : (J = w().get(U.Zb)) && !J.kf ? no(ko(ba, 2), Math.round(J.latency)) : no(ko(ba, 3), I)
            }
          }
        }
        var oa;
        (null == (oa = b.getConfig) ? 0 : oa.call(b).useBidCache) && oo(n, g, t, l, b);
        return [g, h]
      });
      return {
        Gg: e ? f.map(function(g) {
          return g[1]
        }) : [],
        Hg: e ? new _.v.Map(f) : null
      }
    }
      , OL = function(a) {
      var b;
      if (null == (b = a.ia) ? 0 : b.value)
        return !0;
      var c, d = null == (c = a.U) ? void 0 : c.value;
      if (!d)
        return !1;
      var e;
      return (null == (e = d["*"]) ? void 0 : e.zc) || a.Db.split(",").some(function(f) {
        var g;
        return !(null == (g = d[f]) || !g.zc)
      })
    }
      , RL = new _.v.Map;
    var SL, TL = function(a, b, c, d, e, f, g) {
      Z.call(this, a, 1019);
      this.R = g;
      b && (this.l = new EB(b));
      c && (this.D = new EB(c));
      d && (this.F = new EB(d));
      this.A = Y(this, e);
      this.J = Y(this, f)
    };
    _.N(TL, Z);
    TL.prototype.j = function() {
      UL(this);
      VL(this)
    }
    ;
    var VL = function(a) {
      if (!(Math.random() >= _.Mf(ny))) {
        var b = (a.J.value || []).filter(function(n) {
          return ll(a.R[n.getDomId()]).some(function(p) {
            return "hb_pb" === y(p, 1)
          })
        });
        if (b.length) {
          var c, d, e, f, g, h, k, l, m = (null == (c = a.l) ? 0 : null == (d = c.value) ? 0 : null == (e = d.adUnits) ? 0 : e.length) ? [].concat(_.xe(new _.v.Set(null == (f = a.l) ? void 0 : null == (g = f.value) ? void 0 : g.adUnits.map(function(n) {
            return n.code
          })))) : _.u(Object, "keys").call(Object, (null == (h = a.l) ? void 0 : null == (k = h.value) ? void 0 : null == (l = k.getAdserverTargeting) ? void 0 : l.call(k)) || {});
          c = new $k("haux");
          L(c, "ius", b.map(function(n) {
            return n.getAdUnitPath()
          }).join("~"));
          L(c, "dids", b.map(function(n) {
            return n.getDomId()
          }).join("~"));
          L(c, "paucs", m.join("~"));
          Cj(c, a.context);
          bl(c)
        }
      }
    }
      , UL = function(a) {
      wj("ppc_hrc", function(b) {
        var c;
        null != SL || (SL = (0,
          C.ua)(null == (c = (_.D = window.google_js_reporting_queue = window.google_js_reporting_queue || [],
          _.u(_.D, "find")).call(_.D, function(k) {
          return "1" === k.label
        })) ? void 0 : c.value));
        var d = jf("navigationStart", window);
        SL && L(b, "lt", SL);
        var e;
        L(b, "tids", [].concat(_.xe((null == (e = a.A.value) ? void 0 : _.u(e, "keys").call(e)) || [])).join());
        var f;
        L(b, "asts", [].concat(_.xe((null == (f = a.A.value) ? void 0 : _.u(f, "values").call(f)) || [])).map(function(k) {
          return k - d
        }).join());
        var g;
        if (null == (g = a.D) ? 0 : g.value)
          L(b, "ht", a.D.value - d);
        else {
          var h;
          (null == (h = a.F) ? 0 : h.value) && L(b, "ht", 0)
        }
        Cj(b, a.context)
      }, a.A.value ? _.Mf(my) : 0)
    };
    var Kq = function(a, b, c, d, e) {
      Z.call(this, a, 982);
      this.l = Y(this, b);
      c && (this.D = new EB(c));
      this.F = X(this, d);
      this.A = X(this, e)
    };
    _.N(Kq, Z);
    Kq.prototype.j = function() {
      var a = this, b, c = null == (b = this.D) ? void 0 : b.value;
      if (this.l.value && null != c && c.onEvent) {
        b = {};
        for (var d = _.x(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), e = d.next(); !e.done; b = {
          ac: b.ac,
          Oc: b.Oc
        },
          e = d.next())
          b.ac = e.value,
            b.Oc = function(f) {
              return function(g) {
                if (a.l.value === g.adId) {
                  var h = new $k("hbm_brt");
                  Cj(h, a.context);
                  L(h, "et", f.ac);
                  L(h, "sf", a.F.value);
                  L(h, "qqid", a.A.value);
                  var k, l, m;
                  L(h, "bc", String(null != (m = null != (l = g.bidderCode) ? l : null == (k = g.bid) ? void 0 : k.bidder) ? m : ""));
                  bl(h)
                }
              }
            }(b),
            c.onEvent(b.ac, b.Oc),
            _.fo(this, function(f) {
              return function() {
                return void $h(a.context, a.id, function() {
                  var g;
                  return void (null == (g = c.offEvent) ? void 0 : g.call(c, f.ac, f.Oc))
                }, !0)
              }
            }(b))
      }
    }
    ;
    Kq.prototype.m = function() {}
    ;
    var WL = function(a, b) {
      Z.call(this, a, 1091);
      this.C = W(this);
      b && (this.l = Y(this, b))
    };
    _.N(WL, Z);
    WL.prototype.j = function() {
      var a;
      null != (a = this.l) && a.value ? AB(this.C, this.l.value()) : O(this.C, "")
    }
    ;
    WL.prototype.m = function() {
      O(this.C, "")
    }
    ;
    var XL = function(a, b, c, d, e, f) {
      Z.call(this, a, 978);
      this.l = b;
      this.V = c;
      this.win = d;
      this.localStorage = e;
      this.C = W(this);
      f && (this.A = Y(this, f))
    };
    _.N(XL, Z);
    XL.prototype.j = function() {
      var a;
      if (_.F(oz) && null != (a = this.A) && a.value)
        if (_.F(mz) && !Jg("browsing-topics", this.win.document))
          zB(this.C);
        else {
          var b, c, d, e, f, g;
          (null == (b = this.l) ? 0 : E(b, 8)) || _.F(Zy) && (null == (c = this.l) ? 0 : E(c, 13)) || (null == (d = this.l) ? 0 : E(d, 1)) || 1 === (null == (e = this.l) ? void 0 : _.Re(e, 6, 2)) || 1 === (null == (f = this.l) ? void 0 : y(f, 5)) || (null == (g = this.l) ? 0 : E(g, 9)) || !E(this.V, 5) || E(this.V, 9) ? O(this.C, 5) : (a = ek(this.A.value, this.win, new _.UG(this.context), this.localStorage),
            AB(this.C, a))
        }
      else
        zB(this.C)
    }
    ;
    XL.prototype.m = function() {
      zB(this.C)
    }
    ;
    var YL = function() {
      var a = this;
      this.promise = new _.v.Promise(function(b, c) {
          a.reject = c;
          a.resolve = b
        }
      )
    }
      , ZL = function() {
      this.auctionSignals = new YL;
      this.topLevelSellerSignals = new YL;
      this.j = new YL;
      this.perBuyerSignals = new YL;
      this.perBuyerTimeouts = new YL
    }
      , $L = function(a, b, c) {
      this.o = a;
      this.m = b;
      this.j = c
    };
    var aM = navigator
      , bM = function(a, b, c, d) {
      Z.call(this, a, 1089);
      this.l = b;
      this.V = c;
      this.C = W(this);
      this.A = X(this, d)
    };
    _.N(bM, Z);
    bM.prototype.j = function() {
      if (!_.F(pz) && _.F(sz) && "runAdAuction"in navigator && Jg("run-ad-auction", document) && (!E(this.V, 5) || E(this.V, 9) ? 0 : this.l ? !(E(this.l, 8) || _.F(Zy) && E(this.l, 13) || E(this.l, 1) || 1 === _.Re(this.l, 6, 2) || 1 === y(this.l, 5) || E(this.l, 9)) : 1)) {
        for (var a = {}, b = _.x(this.A.value), c = b.next(); !c.done; c = b.next())
          a[c.value.getId()] = cM();
        O(this.C, a)
      } else
        zB(this.C)
    }
    ;
    var cM = function() {
      var a = new ZL
        , b = new AbortController
        , c = aM.runAdAuction({
        seller: "https://pubads.g.doubleclick.net",
        decisionLogicUrl: "https://pubads.g.doubleclick.net/td/sjs",
        interestGroupBuyers: [],
        auctionSignals: {},
        sellerExperimentGroupId: 0,
        sellerSignals: a.topLevelSellerSignals.promise,
        sellerTimeout: 50,
        signal: b.signal,
        perBuyerExperimentGroupIds: {},
        perBuyerSignals: {},
        perBuyerTimeouts: {},
        componentAuctions: [{
          seller: "https://pubads.g.doubleclick.net",
          decisionLogicUrl: "https://pubads.g.doubleclick.net/td/sjs",
          trustedScoringSignalsUrl: "https://pubads.g.doubleclick.net/td/sts",
          interestGroupBuyers: ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"],
          sellerExperimentGroupId: 0,
          auctionSignals: a.auctionSignals.promise,
          sellerSignals: a.j.promise,
          sellerTimeout: 50,
          perBuyerExperimentGroupIds: {},
          perBuyerSignals: a.perBuyerSignals.promise,
          perBuyerTimeouts: a.perBuyerTimeouts.promise
        }]
      }).catch(function(d) {
        return d instanceof DOMException && "TimeoutError" === d.name ? 2 : 3
      });
      return new $L(c,a,b)
    };
    var Vq = function(a, b, c) {
      Z.call(this, a, 881);
      this.hb = b;
      this.C = W(this);
      this.l = Y(this, c)
    };
    _.N(Vq, Z);
    Vq.prototype.j = function() {
      if (_.F(pz) || !this.l.value)
        zB(this.C);
      else {
        for (var a = this.l.value, b = [], c = _.x((_.D = wK(this.hb),
          _.u(_.D, "values")).call(_.D)), d = c.next(); !d.done; d = c.next()) {
          d = d.value;
          try {
            b.push(JSON.parse(d))
          } catch (e) {
            Yh(this.context, 1023, e)
          }
        }
        _.F(qz) ? (a = Ko({
          He: a,
          Qe: b
        }),
          O(this.C, a)) : 0 === b.length ? (a = Ko({
          He: a
        }),
          O(this.C, a)) : (a = Ko({
          He: a,
          Qe: b
        }),
          O(this.C, a))
      }
    }
    ;
    Vq.prototype.m = function() {
      zB(this.C)
    }
    ;
    var Lo = navigator
      , Mo = /(\$\{GDPR})/gi
      , No = /(\$\{GDPR_CONSENT_[0-9]+\})/gi
      , Oo = /(\$\{ADDTL_CONSENT})/gi
      , Po = /(\$\{AD_WIDTH})/gi
      , Qo = /(\$\{AD_HEIGHT})/gi;
    var dM = navigator
      , Wq = function(a, b, c, d, e, f, g, h, k, l) {
      Z.call(this, a, 882);
      this.K = b;
      this.V = c;
      this.ca = d;
      this.O = l;
      this.Ja = W(this);
      this.l = W(this);
      this.A = W(this);
      this.J = Y(this, e);
      this.M = Y(this, f);
      this.U = X(this, g);
      this.aa = X(this, h);
      this.Y = X(this, k)
    };
    _.N(Wq, Z);
    Wq.prototype.j = function() {
      var a = this, b, c, d, e, f, g, h, k, l, m, n, p, r, t;
      return _.Ab(function(w) {
        switch (w.j) {
          case 1:
            if (eM(a))
              return fM(a),
                w.return();
            b = (0,
              C.I)(a.J.value);
            c = b.getWidth();
            d = b.getHeight();
            if (!c || !d)
              return fM(a),
                w.return();
            e = Io(b, Ho, 5);
            a.D = e.getEscapedQemQueryId();
            a.F = _.Vf(e, 6);
            f = _.So(e, 9);
            if (g = _.So(e, 10))
              if (fM(a),
                _.So(e, 17))
                return Uo(0, 0, e),
                  w.return();
            wj("pre_run_ad_auction_ping", function(B) {
              Cj(B, a.context);
              var I;
              L(B, "winner_qid", null != (I = a.D) ? I : "");
              var H;
              L(B, "xfpQid", null != (H = a.F) ? H : "");
              L(B, "publisher_tag", "gpt")
            }, 1);
            h = performance.now();
            k = Se(b, 8) || 1E3;
            return Bb(w, gM(a, (0,
              C.I)(a.M.value), e, k, h), 2);
          case 2:
            l = w.o;
            m = Math.round(performance.now() - h);
            n = 3 === l;
            p = 2 === l;
            r = 1 === l;
            t = "string" === typeof l;
            wj("run_ad_auction_stats", function(B) {
              Cj(B, a.context);
              L(B, "duration_ms", m);
              L(B, "applied_timeout_ms", k);
              L(B, "timed_out", p ? 1 : 0);
              L(B, "error", n ? 1 : 0);
              L(B, "auction_skipped", r ? 1 : 0);
              L(B, "auction_winner", t ? 1 : 0);
              L(B, "thread_release_only", _.So(e, 15) ? 1 : 0);
              var I;
              L(B, "winner_qid", null != (I = a.D) ? I : "");
              var H;
              L(B, "xfpQid", null != (H = a.F) ? H : "");
              L(B, "publisher_tag", "gpt");
              _.F(sz) && L(B, "parallel", "1")
            }, 1);
            if (!t)
              return Uo(m, p ? k : 0, e),
              g || fM(a),
                w.return();
            if (g)
              return Bb(w, dM.deprecatedURNToURL(l, !0), 7);
            if (!f) {
              w.j = 4;
              break
            }
            return Bb(w, dM.deprecatedURNToURL(l, !0), 6);
          case 6:
            return fM(a),
              w.return();
          case 7:
            return w.return();
          case 4:
            return _.F(Yz) ? Bb(w, Ro(l, {
              gdprApplies: Ll(a.V, 3) ? E(a.V, 3) ? "1" : "0" : null,
              ef: y(a.V, 2),
              Je: y(a.V, 4),
              Tf: b.getWidth() ? b.getWidth().toString() : null,
              Qf: b.getHeight() ? b.getHeight().toString() : null
            }), 9) : Bb(w, Ro(l, {
              gdprApplies: Ll(a.V, 3) ? E(a.V, 3) ? "1" : "0" : null,
              ef: y(a.V, 2),
              Je: y(a.V, 4)
            }), 9);
          case 9:
            a.Y.value.style.display = "",
              xB(a.Ja, {
                kind: 2,
                Fe: l
              }),
              xB(a.l, new _.Di(c,d)),
              O(a.A, !1),
              w.j = 0
        }
      })
    }
    ;
    Wq.prototype.m = function() {
      fM(this)
    }
    ;
    var gM = function(a, b, c, d, e) {
      var f = Se(c, 14) || -1;
      if (0 < f && a.K.m >= f)
        return 1;
      f = Se(c, 13) || -1;
      if (0 < f && a.K.G >= f)
        return 1;
      ++a.K.m;
      ++a.K.G;
      b.signal = AbortSignal.timeout(d);
      b = _.F(sz) ? hM(a, b, d, e, (0,
        C.I)(a.O), _.So(c, 15)) : iM(a, b, d, e, _.So(c, 15));
      --a.K.m;
      return b
    }
      , iM = function(a, b, c, d, e) {
      if (e)
        return Vo();
      var f;
      return null == (f = dM.runAdAuction) ? void 0 : f.call(dM, b).then(function(g) {
        jM(a, g, c, d);
        return g
      }).catch(function(g) {
        return g instanceof DOMException && "TimeoutError" === g.name ? 2 : 3
      })
    }
      , hM = function(a, b, c, d, e, f) {
      if (f)
        return Vo();
      Co(b, e.m);
      setTimeout(function() {
        e.j.abort(new DOMException("runAdAuction","TimeoutError"))
      }, c);
      return e.o.then(function(g) {
        null !== g && "string" !== typeof g || jM(a, g, c, d);
        return g
      })
    }
      , jM = function(a, b, c, d) {
      wj("run_ad_auction_complete", function(e) {
        Cj(e, a.context);
        L(e, "duration_ms", Math.round(performance.now() - d));
        L(e, "applied_timeout_ms", c);
        L(e, "auction_has_winner", !!b);
        a.D && L(e, "winner_qid", a.D);
        a.F && L(e, "xfpQid", a.F)
      }, 1)
    }
      , eM = function(a) {
      var b = !!dM.runAdAuction && Jg("run-ad-auction", document);
      return _.F(pz) || !b || !a.J.value || !a.M.value || _.F(sz) && !a.O
    }
      , fM = function(a) {
      O(a.A, a.ca);
      O(a.Ja, a.U.value);
      O(a.l, a.aa.value)
    };
    var Dp = function() {
      this.o = [];
      this.hostpageLibraryTokens = [];
      this.j = {}
    }
      , kM = function(a, b) {
      if (!_.u(a.o, "includes").call(a.o, b) && (_.D = [1, 2, 3],
        _.u(_.D, "includes")).call(_.D, b)) {
        var c = eC[b];
        if (c) {
          var d = b + "_hostpage_library";
          if (c = cl(document, c))
            c.id = d
        }
        a.o.push(b);
        b = new fC(b);
        a.hostpageLibraryTokens.push(b);
        a = Uk();
        a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
        a.hostpageLibraryTokens[b.j] = b.o
      }
    }
      , lM = function(a, b, c) {
      var d;
      a.j[b] = null != (d = a.j[b]) ? d : new _.v.Set;
      a.j[b].add(c)
    }
      , Cp = function(a, b) {
      var c, d;
      a = null != (d = null == (c = a.j[b]) ? void 0 : _.u(c, "values").call(c)) ? d : [];
      return [].concat(_.xe(a))
    };
    var Wo = "3rd party ad content";
    var mM = function(a, b) {
      this.serviceName = b;
      this.slot = (0,
        C.I)(a.j)
    }
      , nM = function(a, b) {
      mM.call(this, a, b);
      this.isEmpty = !1;
      this.slotContentChanged = !0;
      this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
      this.isBackfill = !1;
      this.companyIds = this.yieldGroupIds = null
    };
    _.N(nM, mM);
    var oM = function() {
      mM.apply(this, arguments)
    };
    _.N(oM, mM);
    var pM = function(a, b, c) {
      mM.call(this, a, b);
      this.inViewPercentage = c
    };
    _.N(pM, mM);
    var qM = function() {
      mM.apply(this, arguments)
    };
    _.N(qM, mM);
    var rM = function() {
      mM.apply(this, arguments)
    };
    _.N(rM, mM);
    var sM = function() {
      mM.apply(this, arguments)
    };
    _.N(sM, mM);
    var tM = function() {
      mM.apply(this, arguments)
    };
    _.N(tM, mM);
    var uM = function(a, b, c, d) {
      mM.call(this, a, b);
      this.makeRewardedVisible = c;
      this.payload = d
    };
    _.N(uM, mM);
    var vM = function(a, b, c) {
      mM.call(this, a, b);
      this.payload = c
    };
    _.N(vM, mM);
    var wM = function() {
      mM.apply(this, arguments)
    };
    _.N(wM, mM);
    var xM = function(a, b, c) {
      _.S.call(this);
      this.context = a;
      this.B = b;
      this.m = c;
      a = c.slotId;
      b = c.size;
      this.j = "height" === c.xg ? "fluid" : [b.width, b.height];
      this.vc = mj(a);
      this.wc = Wo
    };
    _.N(xM, _.S);
    xM.prototype.render = function() {
      var a = this.B
        , b = this.m
        , c = b.slotId
        , d = b.N.R
        , e = b.W
        , f = b.size
        , g = b.Tb
        , h = b.qg
        , k = b.isBackfill;
      b = b.Lc;
      g && qh(g, _.ax(e), null != h ? h : "", !1);
      xq(_.mf(Wh), "5", (0,
        C.I)(ji(d[c.getDomId()], 20)));
      c.dispatchEvent(yq, 801, {
        Ue: 0 === a.kind ? a.Ta : "",
        isBackfill: k
      });
      a = this.H();
      b && a && a.setAttribute("data-google-container-id", b);
      c.dispatchEvent(Aq, 825, {
        size: f,
        isEmpty: !1
      });
      return a
    }
    ;
    xM.prototype.loaded = function(a) {
      var b = this.m
        , c = b.slotId
        , d = b.qa;
      b = b.N.R;
      c.dispatchEvent(oI, 844, void 0);
      a && a.setAttribute("data-load-complete", !0);
      d.dispatchEvent("slotOnload", 710, new qM(c,"publisher_ads"));
      xq(_.mf(Wh), "6", (0,
        C.I)(ji(b[c.getDomId()], 20)))
    }
    ;
    var yM = function(a, b) {
      if (b)
        return null;
      a = a.B;
      a = 0 === a.kind ? a.Ta : "";
      b = "";
      var c = !0
        , d = "sf";
      b = void 0 === b ? "" : b;
      c = void 0 === c ? !1 : c;
      d = void 0 === d ? "" : d;
      if (a) {
        var e = a.toLowerCase();
        -1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html") ? c && Hh(d, 2) : (c && Hh(d, 3),
          a = _.F(Ez) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>")
      } else
        c && Hh(d, 1);
      return a
    };
    xM.prototype.o = function() {
      _.S.prototype.o.call(this);
      var a;
      null == (a = this.m.Tb) || a.removeAttribute("data-google-query-id")
    }
    ;
    xM.prototype.A = function(a, b) {
      var c = this
        , d = zM(this, function() {
        return void c.loaded((0,
          C.I)(d.j))
      }, a, b);
      _.fo(this, function() {
        100 != d.status && (2 == d.ga && (CH(d.m),
          d.ga = 0),
          window.clearTimeout(d.F),
          d.F = -1,
          d.A = 3,
        d.o && (d.o.Ca(),
          d.o = null),
          _.Ce(window, "resize", d.D),
          _.Ce(window, "scroll", d.D),
        d.l && d.j && d.l == _.ex(d.j) && d.l.removeChild(d.j),
          d.j = null,
          d.l = null,
          d.status = 100)
      });
      return d
    }
    ;
    var zM = function(a, b, c, d) {
      var e = a.m
        , f = e.Ef
        , g = e.isBackfill
        , h = e.Ng
        , k = e.Lc
        , l = e.ed
        , m = e.Nd
        , n = e.Ga
        , p = Array.isArray(a.j) ? new _.Di(Number(a.j[0]),Number(a.j[1])) : 1;
      return new KH({
        xe: e.Re,
        vc: a.vc,
        wc: a.wc,
        content: yM(a, d),
        size: p,
        og: !!h,
        rf: b,
        Ff: null != f ? f : void 0,
        permissions: {
          cd: Ll(c, 1) ? !!E(c, 1) : !g,
          dd: Ll(c, 2) ? !!E(c, 2) : !1
        },
        xc: !!Uk().fifWin,
        zh: gK ? gK : gK = Al(),
        cg: El(),
        hostpageLibraryTokens: (null != n ? n : _.mf(Dp)).hostpageLibraryTokens,
        La: function(r, t) {
          return void Yh(a.context, r, t)
        },
        uniqueId: (0,
          C.I)(k),
        Df: cj(),
        ed: null != l ? l : void 0,
        kd: null != d ? d : void 0,
        Nd: null != m ? m : void 0
      })
    };
    var AM = function() {
      xM.apply(this, arguments)
    };
    _.N(AM, xM);
    var BM = function(a, b) {
      var c = _.Be(b ? "fencedframe" : "IFRAME");
      b && (c.mode = "opaque-ads");
      c.id = a.vc;
      c.name = a.vc;
      c.title = a.wc;
      Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]),
        c.height = String(a.j[1])) : (c.width = "100%",
        c.height = "0");
      c.allowTransparency = "true";
      c.scrolling = "no";
      c.marginWidth = "0";
      c.marginHeight = "0";
      c.frameBorder = "0";
      c.style.border = "0";
      c.style.verticalAlign = "bottom";
      c.setAttribute("role", "region");
      c.setAttribute("aria-label", "Advertisement");
      c.tabIndex = 0;
      return c
    }
      , CM = function(a, b) {
      "string" !== typeof a.j && (b.width = String(a.j[0]),
        b.height = String(a.j[1]));
      var c = Uh(a.context, 774, function() {
        a.loaded(b);
        _.Ce(b, "load", c)
      });
      _.yb(b, "load", c);
      _.fo(a, function() {
        return _.Ce(b, "load", c)
      });
      a.m.Re.appendChild(b)
    };
    var uq = function() {
      AM.apply(this, arguments)
    };
    _.N(uq, AM);
    uq.prototype.H = function() {
      var a = BM(this, !this.m.Kh);
      Pj(a, this.B.Fe);
      CM(this, a);
      return a
    }
    ;
    uq.prototype.l = function() {
      return !1
    }
    ;
    var zp = new _.v.Set
      , DM = function(a, b, c) {
      var d = 0
        , e = function() {
        d = 0
      };
      return function(f) {
        d || (d = _.q.setTimeout(e, b),
          a.apply(c, arguments))
      }
    }(function() {
      throw new wm("Reached Limit for addEventListener");
    }, 3E5)
      , EM = function(a, b) {
      _.S.call(this);
      this.j = a;
      this.l = b;
      this.m = [];
      this.B = !1;
      this.D = 0;
      this.A = new _.v.Map;
      zp.add(this);
      this.j.info(ZI(this.getName()))
    };
    _.N(EM, _.S);
    var Bp = function(a) {
      a.B || (a.B = !0,
        pf(6),
        a.F())
    };
    EM.prototype.slotAdded = function(a, b) {
      this.m.push(a);
      var c = new rM(a,this.getName());
      this.l.dispatchEvent("slotAdded", 818, c);
      this.j.info(aJ(this.getName(), a.getAdUnitPath()), a);
      a = this.getName();
      Cu(b, 4, a)
    }
    ;
    EM.prototype.destroySlots = function(a) {
      var b = this;
      return a.filter(function(c) {
        return la(b.m, c)
      })
    }
    ;
    EM.prototype.addEventListener = function(a, b, c) {
      var d = this;
      c = void 0 === c ? window : c;
      if (this.D >= _.Mf(yy) && 0 < _.Mf(yy))
        return DM(),
          !1;
      if (_.F(Dq) && !c.IntersectionObserver && (_.D = ["impressionViewable", "slotVisibilityChanged"],
        _.u(_.D, "includes")).call(_.D, a))
        return kl(this.j, VJ()),
          !1;
      var e;
      if (null == (e = this.A.get(a)) ? 0 : e.has(b))
        return !1;
      this.A.has(a) || this.A.set(a, new _.v.Map);
      c = function(f) {
        f = f.detail;
        try {
          b(f)
        } catch (k) {
          d.j.error(rJ(String(k), a));
          var g, h;
          null == (g = window.console) || null == (h = g.error) || h.call(g, k)
        }
      }
      ;
      (0,
        C.I)(this.A.get(a)).set(b, c);
      this.l.Z(a, c);
      this.D++;
      return !0
    }
    ;
    EM.prototype.removeEventListener = function(a, b) {
      var c, d = null == (c = this.A.get(a)) ? void 0 : c.get(b);
      if (!d || !hI(this.l, a, d))
        return !1;
      this.D--;
      return (0,
        C.I)(this.A.get(a)).delete(b)
    }
    ;
    var rp = function(a) {
      for (var b = _.x(zp), c = b.next(); !c.done; c = b.next())
        c.value.destroySlots(a)
    };
    var vp = function(a, b, c, d) {
      EM.call(this, a, c);
      this.H = b;
      this.ads = new _.v.Map;
      this.L = this.Fb = !1;
      d.m = !0
    };
    _.N(vp, EM);
    vp.prototype.slotAdded = function(a, b) {
      var c = this;
      a.Z(kI, function(d) {
        E(d.detail, 11) && (FM(c, a).lh = !0)
      });
      EM.prototype.slotAdded.call(this, a, b)
    }
    ;
    vp.prototype.F = function() {}
    ;
    vp.prototype.setRefreshUnfilledSlots = function(a) {
      "boolean" === typeof a && (this.Fb = a)
    }
    ;
    var ZJ = function(a, b) {
      b && !a.L && wj("ima_sdk_v", function(c) {
        a.L = !0;
        L(c, "v", b)
      });
      return String(Eu())
    }
      , XJ = function(a, b) {
      var c = pj().j
        , d = pj().o;
      if (a.H.B) {
        var e = {
          ub: 3
        };
        a.J && (e.Vb = a.J);
        a.P && (e.Wb = a.P);
        b = null != b ? b : a.m;
        c = Gi(c, d);
        d = e.Vb;
        var f = e.Wb;
        d && "number" !== typeof d || f && "number" !== typeof f || a.H.refresh(c, b, e)
      } else
        (null == b ? 0 : b[0]) && a.j.error(gJ(b[0].getDomId()))
    }
      , $J = function(a, b) {
      var c;
      return a.H.B && !(null == (c = a.ads.get(b)) || !c.lh)
    }
      , YJ = function(a, b) {
      return a.m.filter(function(c) {
        return _.u(b, "includes").call(b, c.toString())
      })
    };
    vp.prototype.getName = function() {
      return "companion_ads"
    }
    ;
    var aK = function(a, b, c, d) {
      b = new nM(b,a.getName());
      null != c && null != d && (b.size = [c, d]);
      a.l.dispatchEvent("slotRenderEnded", 67, b)
    }
      , FM = function(a, b) {
      var c = a.ads.get(b);
      c || (c = {},
        a.ads.set(b, c),
        _.fo(b, function() {
          return a.ads.delete(b)
        }));
      return c
    };
    var wp = function(a, b) {
      EM.call(this, a, b)
    };
    _.N(wp, EM);
    wp.prototype.getName = function() {
      return "content"
    }
    ;
    wp.prototype.F = function() {}
    ;
    var GM = _.P(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]), HM = _.P(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]), IM = _.P(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]), JM = _.P(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]), KM = new _.v.Map([[2, {
      pf: "page_level_ads"
    }], [5, {
      pf: "shoppit"
    }]]), LM = function(a) {
      var b = void 0 === b ? KM : b;
      this.context = a;
      this.j = b;
      this.o = new _.v.Map;
      this.loaded = new _.v.Set
    }, NM;
    LM.prototype.load = function(a) {
      var b = _.MM(this, a), c, d = (null != (c = this.j.get(a.module)) ? c : {}).pf;
      if (!d)
        throw Error("cannot load invalid module: " + d);
      if (!this.loaded.has(a.module)) {
        c = (c = _.Lh(172)) && "pagead2.googlesyndication.com" === hx((c.src || "").match(_.gx)[3] || null) ? this.context.qb ? _.A(IM, this.context.qb, d) : _.A(JM, d, this.context.Ma) : this.context.qb ? _.A(GM, this.context.qb, d) : _.A(HM, d, this.context.Ma);
        d = {};
        var e = _.Mf(az)
          , f = _.Mf(Ey);
        e && (d.cb = e);
        f && (d.mcb = f);
        _.u(Object, "keys").call(Object, d).length ? (c = Zs.exec(_.mb(c).toString()),
          e = c[3] || "",
          d = ue(c[1] + $s("?", c[2] || "", d) + $s("#", e))) : d = c;
        NM(this, a);
        cl(document, d);
        this.loaded.add(a.module)
      }
      return b.promise
    }
    ;
    _.MM = function(a, b) {
      b = b.module;
      a.o.has(b) || a.o.set(b, new _.jh);
      return (0,
        C.I)(a.o.get(b))
    }
    ;
    NM = function(a, b) {
      var c = b.module;
      b = "_gpt_js_load_" + c + "_";
      var d = Uh(a.context, 340, function(e) {
        if (a.j.has(c) && "function" === typeof e) {
          var f = (0,
            C.I)(a.j.get(c));
          f = (void 0 === f.hg ? [] : f.hg).map(function(g) {
            return _.MM(a, g).promise
          });
          _.v.Promise.all(f).then(function() {
            e.call(window, _, a)
          })
        }
      });
      Object.defineProperty(Uk(), b, {
        value: function(e) {
          if (d) {
            var f = d;
            d = null;
            f(e)
          }
        },
        writable: !1,
        enumerable: !1
      })
    }
    ;
    new Lq;
    new Lq;
    new Lq;
    var OM = function() {
      this.resources = {}
    };
    var qr = function(a, b, c, d, e, f, g, h, k) {
      Z.call(this, a, 682);
      this.K = b;
      this.format = c;
      this.slotId = d;
      this.win = e;
      this.C = LB(this);
      this.l = Y(this, f);
      this.A = X(this, g);
      this.F = X(this, h);
      this.D = Y(this, k)
    };
    _.N(qr, Z);
    qr.prototype.j = function() {
      var a = this;
      if ((2 === this.format || 3 === this.format) && this.l.uc() && _.So(this.l.value, 12, !1)) {
        var b = (0,
          C.I)(this.D.value).wg
          , c = _.zq(this.K, this.slotId)
          , d = this.F.value
          , e = this.A.value;
        _.rj(e, {
          "max-height": "30vh",
          overflow: "hidden"
        });
        if (PM)
          PM.Uh(e);
        else {
          PM = new b(this.context,this.format,e,this.win,d,this.K,this.slotId);
          b = {};
          d = _.x(_.Pe(this.l.value, bw, 13));
          for (var f = d.next(); !f.done; f = d.next())
            f = f.value,
              b[y(f, 1)] = y(f, 2);
          PM.Zh(b);
          PM.nc();
          tI(this.K, this.slotId, function() {
            PM && (PM.Ca(),
              PM = null);
            c && _.xI(a.K, a.slotId)
          })
        }
        _.fo(this, function() {
          return _.dx(e)
        })
      }
      this.C.notify()
    }
    ;
    var PM = null;
    var rr = function(a, b, c, d, e, f, g, h, k, l) {
      Z.call(this, a, 683);
      this.slotId = b;
      this.format = c;
      this.U = d;
      this.l = Y(this, e);
      this.F = X(this, f);
      this.O = X(this, g);
      this.J = Y(this, h);
      this.M = Y(this, k);
      this.D = X(this, l);
      this.A = iI(b, mq, function(m) {
        m = m.detail;
        try {
          var n = JSON.parse(m.data);
          return "sth" === n.googMsgType && "i-adframe-load" === n.msg_type
        } catch (p) {
          return !1
        }
      })
    };
    _.N(rr, Z);
    rr.prototype.j = function() {
      var a = this, b, c, d, e, f, g, h, k, l, m, n;
      return _.Ab(function(p) {
        if (1 == p.j) {
          b = _.Mf(Py);
          c = a.l.value;
          if (!c || 5 !== a.format)
            return p.return();
          Math.random() < _.Mf(Qy) && _.v.Promise.race([a.A.then(function() {
            return !1
          }), new _.v.Promise(function(r) {
              FI(a, a.id, window, "pagehide", function(t) {
                t && r(!0)
              })
            }
          )]).then(function(r) {
            var t = new $k("int_pm");
            L(t, "ts", Date.now());
            L(t, "flg", b);
            L(t, "qem", a.D.value);
            L(t, "ph", Number(r));
            bl(t)
          });
          d = a.O.value;
          e = a.F.value;
          f = (0,
            C.I)(a.M.value);
          g = f.Mg;
          h = new _.UG(a.context);
          m = (null == (k = a.l.value) ? 0 : null != ji(k, 14)) ? 60 * (0,
            C.I)(null == (l = a.l.value) ? void 0 : ji(l, 14)) : 604800;
          n = new g(window,e,d,h,a.U,kq(_.Pe(c, bw, 13)),Km(a.slotId),function() {
              return void a.Ca()
            }
            ,m,a.J.value);
          _.Kn(a, n);
          switch (b) {
            case 0:
              n.O();
              break;
            case 1:
              p.j = 2;
              return
          }
        } else {
          if (4 != p.j)
            return Bb(p, a.A, 4);
          if (a.G)
            return p.return();
          n.O(!0)
        }
        p.j = 0
      })
    }
    ;
    var kr = function(a, b, c, d, e, f) {
      Z.call(this, a, 846);
      this.D = b;
      this.format = c;
      this.C = W(this);
      this.l = Y(this, d);
      this.A = Y(this, e);
      f && NB(this, f)
    };
    _.N(kr, Z);
    kr.prototype.j = function() {
      var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.l.value) || !_.So(a, 12, !1));
      a = 5 === this.format && this.A.value;
      b || a ? AB(this.C, this.D.load(_.sL)) : zB(this.C)
    }
    ;
    var QM = function(a, b, c, d, e, f) {
      Z.call(this, a, 696);
      this.slotId = b;
      this.qa = c;
      NB(this, d);
      PB(this, [e, f])
    };
    _.N(QM, Z);
    QM.prototype.j = function() {
      this.qa.dispatchEvent("rewardedSlotClosed", 703, new wM(this.slotId,"publisher_ads"))
    }
    ;
    var RM = function(a, b, c, d, e) {
      Z.call(this, a, 694);
      this.slotId = b;
      this.qa = c;
      NB(this, d);
      this.l = Y(this, e)
    };
    _.N(RM, Z);
    RM.prototype.j = function() {
      var a, b = null == (a = this.l.value) ? void 0 : a.payload;
      this.qa.dispatchEvent("rewardedSlotGranted", 702, new vM(this.slotId,"publisher_ads",null != b ? b : null))
    }
    ;
    var SM = {
      width: "100%",
      height: "100%",
      left: "0",
      top: "0"
    }
      , TM = function(a, b, c, d, e, f) {
      Z.call(this, a, 693);
      this.win = b;
      this.F = f;
      this.C = LB(this);
      this.l = X(this, c);
      this.A = X(this, d);
      NB(this, e);
      this.D = new _.zG(this.win)
    };
    _.N(TM, Z);
    TM.prototype.j = function() {
      var a = this;
      if (!this.F.Xa) {
        var b = 0 === (0,
          _.Qm)() ? "rgba(1,1,1,0.5)" : "white";
        _.rj(this.A.value, _.u(Object, "assign").call(Object, {
          "background-color": b,
          opacity: "1",
          position: "fixed",
          margin: "0",
          padding: "0",
          "z-index": "2147483647",
          display: "block"
        }, SM));
        _.fo(this, _.JG(this.win.document, this.win));
        re(this.l.value).postMessage(JSON.stringify({
          type: "rewarded",
          message: "visible"
        }), "*");
        if (this.win === this.win.top) {
          this.win.location.hash = "goog_rewarded";
          var c = _.BG(this.D, 2147483646);
          _.EG(c);
          _.fo(this, function() {
            _.FG(c);
            "goog_rewarded" === a.win.location.hash && (a.win.location.hash = "")
          })
        }
        this.C.notify()
      }
    }
    ;
    var UM = function(a, b, c, d) {
      Z.call(this, a, 695);
      this.win = b;
      this.l = X(this, c);
      NB(this, d)
    };
    _.N(UM, Z);
    UM.prototype.j = function() {
      if (this.win === this.win.top)
        var a = (0,
          C.I)(re(this.l.value))
          , b = FI(this, 503, this.win, "hashchange", function(c) {
          at(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
            type: "rewarded",
            message: "back_button"
          }), "*"),
            b())
        })
    }
    ;
    var VM = function(a, b, c, d) {
      Z.call(this, a, 692);
      this.slotId = b;
      this.qa = c;
      this.C = LB(this);
      this.l = X(this, d)
    };
    _.N(VM, Z);
    VM.prototype.j = function() {
      var a = this.l.value, b = new _.jh, c = b.promise, d;
      this.qa.dispatchEvent("rewardedSlotReady", 701, new uM(this.slotId,"publisher_ads",b.resolve,null != (d = a.payload) ? d : null));
      GB(this.C, c)
    }
    ;
    var WM = {
      width: "100%",
      height: "100%",
      left: "0",
      top: "0"
    }
      , XM = {
      width: "60%",
      height: "60%",
      transform: "translate(-50%, -50%)",
      left: "50%",
      top: "50%"
    }
      , YM = function(a, b, c, d, e) {
      Z.call(this, a, 691);
      this.D = W(this);
      this.A = LB(this);
      this.F = X(this, c);
      this.l = PB(this, [d, e])
    };
    _.N(YM, Z);
    YM.prototype.j = function() {
      "ha_before_make_visible" === this.l.value.message ? this.A.notify() : (_.rj(this.F.value, _.u(Object, "assign").call(Object, {
        position: "absolute"
      }, 0 === (0,
        _.Qm)() ? XM : WM)),
        O(this.D, this.l.value))
    }
    ;
    var sr = function(a, b, c, d, e, f, g) {
      Z.call(this, a, 688);
      if (4 === c) {
        this.sa = new ig;
        _.Kn(this, this.sa);
        c = nq(b, "granted", a);
        G(this.sa, c);
        var h = nq(b, "prefetched", a);
        G(this.sa, h);
        var k = nq(b, "closed", a);
        G(this.sa, k);
        a = nq(b, "ha_before_make_visible", a);
        G(this.sa, a);
        var l = new YM(this.context,b,f,h.C,a.C);
        G(this.sa, l);
        h = new VM(this.context,b,d,l.D);
        G(this.sa, h);
        g = new TM(this.context,e,f,g,h.C,l.A);
        G(this.sa, g);
        G(this.sa, new UM(this.context,e,f,g.C));
        G(this.sa, new RM(this.context,b,d,h.C,c.C));
        G(this.sa, new QM(this.context,b,d,h.C,k.C,a.C))
      }
    };
    _.N(sr, Z);
    sr.prototype.j = function() {
      var a;
      null != (a = this.sa) && tg(a)
    }
    ;
    var oq = new _.v.Map([[1, 5], [2, 2], [3, 3]]);
    var Ar = function(a, b, c, d, e) {
      var f = _.wb.apply(5, arguments);
      Z.call(this, a, 912);
      this.googletag = b;
      this.T = c;
      this.F = d;
      this.D = e;
      this.l = W(this);
      this.Ba = W(this);
      this.A = [];
      f = _.x(f);
      for (var g = f.next(); !g.done; g = f.next())
        this.A.push(X(this, g.value))
    };
    _.N(Ar, Z);
    Ar.prototype.j = function() {
      if (_.F($y)) {
        for (var a = [], b = _.x(this.A), c = b.next(); !c.done; c = b.next()) {
          c = _.x(c.value.value);
          for (var d = c.next(); !d.done; d = c.next())
            switch (d = d.value,
              gk(d, Zv)) {
              case 5:
                var e = void 0
                  , f = void 0;
                pq(this.context, this.googletag, (0,
                  C.I)(Tn(d, Nv, 5, Zv)), null != (e = zf(d, Lv, 4)) ? e : null, null != (f = this.T) ? f : pj().j, this.F, this.D);
                break;
              case 6:
                e = (0,
                  C.I)(Tn(d, Rv, 6, Zv));
                qo(e, Pv, 2) && Qn((0,
                  C.I)(zf(e, Pv, 2))) && (f = void 0,
                  ao(document, this.googletag, (0,
                    C.I)(Tn(d, Rv, 6, Zv)), null != (f = this.T) ? f : pj().j, zf(d, Lv, 4)),
                (d = Se(e, 1)) && a.push(d));
                break;
              case 8:
                qo(d, Lv, 4) && (d = (0,
                  C.I)(zf(d, Lv, 4)),
                  O(this.Ba, d))
            }
        }
        O(this.l, a)
      } else
        O(this.l, []);
      zB(this.Ba)
    }
    ;
    Ar.prototype.H = function(a) {
      this.m(a)
    }
    ;
    Ar.prototype.m = function() {
      O(this.l, [])
    }
    ;
    var rq = function() {
      xM.apply(this, arguments)
    };
    _.N(rq, xM);
    rq.prototype.H = function() {
      var a = this.m
        , b = a.N
        , c = b.T;
      a = b.R[a.slotId.getDomId()];
      b = new Fl;
      c = Ml([b, c.eb(), null == a ? void 0 : a.eb()]);
      c = xM.prototype.A.call(this, c);
      return (0,
        C.I)(c.j)
    }
    ;
    rq.prototype.l = function() {
      return !1
    }
    ;
    var sq = function() {
      AM.apply(this, arguments)
    };
    _.N(sq, AM);
    sq.prototype.H = function() {
      var a = this
        , b = this.m
        , c = b.Ef;
      b = b.ed;
      var d = BM(this);
      if (null == c ? 0 : c.length)
        if (_.Rt) {
          c = _.x(c);
          for (var e = c.next(); !e.done; e = c.next())
            d.sandbox.add(e.value)
        } else
          d.sandbox.add.apply(d.sandbox, _.xe(c));
      b && (d.allow = b);
      CM(this, d);
      $h(this.context, 653, function() {
        var f;
        if (f = _.Dt(a.B.Ta)) {
          var g = f.toString().toLowerCase();
          -1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") ? qq(2) : (qq(3),
            f = _.F(Ez) ? f : _.Dt("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>"))
        } else
          qq(1);
        var h, k;
        g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
        Xa() && g.open("text/html", "replace");
        pb(g, f);
        var l, m, n;
        if (at(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
          var p, r;
          null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
        }
        g.close()
      }, !0);
      return d
    }
    ;
    sq.prototype.l = function() {
      return !0
    }
    ;
    var tq = function() {
      AM.apply(this, arguments)
    };
    _.N(tq, AM);
    tq.prototype.H = function() {
      var a = this.B.url
        , b = this.m
        , c = b.N
        , d = c.T;
      b = c.R[b.slotId.getDomId()];
      d = Ml([d.eb(), null == b ? void 0 : b.eb()]);
      var e = BM(this);
      Pj(e, a);
      AM.prototype.A.call(this, d, e);
      var f = function() {
        e.removeEventListener("load", f);
        ZM(a)
      };
      e.addEventListener("load", f);
      _.Ex(e, function() {
        return void ZM(a)
      });
      return e
    }
    ;
    var ZM = function(a) {
      var b = document.querySelectorAll("script[type=webbundle]");
      if (b.length) {
        a: {
          for (var c = 0; c < b.length; c++) {
            var d = void 0;
            if (null == (d = b[c].textContent) ? 0 : d.match(a)) {
              b = b[c];
              break a
            }
          }
          b = null
        }
        b && b.textContent && (c = JSON.parse(b.textContent)) && "object" === typeof c && (d = c.resources,
          a = d.indexOf(a, 0),
        -1 < a && d.splice(a, 1),
          0 === d.length ? document.head.removeChild(b) : (a = _.Be("SCRIPT"),
            a.setAttribute("type", "webbundle"),
            a.textContent = JSON.stringify(c),
            document.head.removeChild(b),
            document.head.appendChild(a)))
      }
    };
    tq.prototype.l = function() {
      return !1
    }
    ;
    var or = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, t, w, B, I, H, R, U, J, T, ba, ea, da) {
      Z.call(this, a, 680);
      this.slotId = b;
      this.K = c;
      this.N = d;
      this.qa = e;
      this.Ga = f;
      this.win = g;
      this.l = W(this);
      this.D = W(this);
      this.A = LB(this);
      this.J = X(this, h);
      this.oa = X(this, k);
      NB(this, l);
      this.aa = X(this, m);
      this.F = X(this, n);
      this.Y = X(this, p);
      NB(this, R);
      this.M = X(this, r);
      this.O = Y(this, t);
      this.Aa = Y(this, w);
      this.U = X(this, B);
      this.na = Y(this, I);
      this.lb = Y(this, H);
      NB(this, U);
      this.la = X(this, J);
      NB(this, T);
      da && NB(this, da);
      this.ca = Y(this, ba);
      this.ia = Y(this, ea)
    };
    _.N(or, Z);
    or.prototype.j = function() {
      var a = this
        , b = this.J.value;
      if (0 === b.kind && null == b.Ta)
        throw new kB("invalid html");
      var c;
      b = vq(this.context, b, {
        W: document,
        slotId: this.slotId,
        K: this.K,
        N: this.N,
        qa: this.qa,
        size: this.Y.value,
        Tb: this.aa.value,
        Re: this.F.value,
        qg: this.M.value,
        xg: this.O.value,
        Ef: this.Aa.value,
        isBackfill: this.U.value,
        Ng: this.na.value,
        Lc: this.lb.value,
        ed: this.la.value,
        Kh: null == (c = this.ca.value) ? void 0 : _.So(c, 14),
        Nd: this.ia.value,
        Ga: this.Ga
      }, {
        Mh: this.oa.value
      });
      _.Kn(this, b);
      var d = b.render();
      FI(this, this.id, this.win, "message", function(e) {
        d.contentWindow === e.source && a.slotId.dispatchEvent(mq, 824, e)
      });
      this.A.notify();
      O(this.l, d);
      O(this.D, b.l())
    }
    ;
    var ur = function(a, b, c, d, e) {
      Z.call(this, a, 863);
      this.l = c;
      this.Kb = Number(b);
      this.A = X(this, d);
      this.D = X(this, e);
      this.F = $M(this)
    };
    _.N(ur, Z);
    var $M = function(a) {
      return _.Ab(function(b) {
        return b.return(new _.v.Promise(function(c) {
            try {
              FI(a, a.id, a.l, "message", function(d) {
                var e;
                "asmreq" === (null == (e = d.data) ? void 0 : e.type) && Go(kG(d.data.payload), 1) === a.Kb && c(d)
              })
            } catch (d) {}
          }
        ))
      })
    };
    ur.prototype.j = function() {
      var a = this, b, c, d, e, f, g;
      return _.Ab(function(h) {
        if (1 == h.j)
          return b = wq(a.l),
            c = a.A.value,
            d = a.D.value,
            Bb(h, a.F, 2);
        e = h.o;
        var k = a.l
          , l = wq(k);
        var m = c.getBoundingClientRect();
        var n = _.qe(k) ? zi(c, k) : {
          x: 0,
          y: 0
        };
        k = n.x;
        n = n.y;
        m = new _.Gx(n,k + m.right,n + m.bottom,k);
        k = new lG;
        k = _.z(k, 1, m.top);
        k = _.z(k, 3, m.bottom);
        k = _.z(k, 2, m.left);
        m = _.z(k, 4, m.right);
        k = new mG;
        k = _.z(k, 1, a.Kb);
        k = _.z(k, 2, !d);
        m = _.Oh(k, 3, m);
        m = _.z(m, 4, b);
        f = _.z(m, 5, l);
        g = {
          type: "asmres",
          payload: Me(f)
        };
        e.ports[0].postMessage(g);
        h.j = 0
      })
    }
    ;
    var fr = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
      Z.call(this, a, 699);
      this.W = b;
      this.slotId = c;
      this.l = d;
      this.Xb = e;
      this.C = LB(this);
      this.J = Y(this, f);
      this.O = X(this, g);
      this.D = X(this, h);
      this.M = X(this, k);
      this.A = Y(this, l);
      this.U = X(this, m);
      this.F = X(this, n);
      p && NB(this, p)
    };
    _.N(fr, Z);
    fr.prototype.j = function() {
      var a = this.O.value
        , b = this.D.value;
      b.style.width = "";
      b.style.height = "";
      if ("height" !== this.J.value) {
        var c, d = null != (c = this.A.value) ? c : 0;
        c = this.M.value;
        var e = this.U.value
          , f = this.F.value
          , g = !1;
        switch (d) {
          case 1:
          case 2:
            g = this.context;
            var h = this.W
              , k = this.slotId
              , l = this.l
              , m = this.Xb;
            var n = c.width
              , p = c.height
              , r = 0;
            var t = 0;
            var w = qi(l);
            w = _.x(w);
            for (var B = w.next(); !B.done; B = w.next()) {
              var I = B.value;
              Array.isArray(I) && (B = (0,
                C.ua)(I[0]),
                I = (0,
                  C.ua)(I[1]),
              r < B && (r = B),
              t < I && (t = I))
            }
            t = [r, t];
            r = t[0] < n;
            p = t[1] < p;
            if (r || p) {
              t = n + "px";
              w = {
                "max-height": "none",
                "max-width": t,
                padding: "0px",
                width: t
              };
              p && (w.height = "auto");
              sj(b, a, w);
              b = {};
              r && (r = qj(e.width),
              n > r && (b.width = t,
                b["max-width"] = t));
              p && (b.height = "auto",
                b["max-height"] = "none");
              c: {
                for (H in b)
                  if (Object.prototype.hasOwnProperty.call(b, H)) {
                    var H = !1;
                    break c
                  }
                H = !0
              }
              H ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px",
                _.rj(a, b),
                b = !0)
            } else
              b = !1;
            b: switch (t = c.width,
              H = h.defaultView || h.parentWindow || _.q,
              d) {
              case 2:
                a = tj(a, H, t, e, m);
                break b;
              case 1:
                if (e = a.parentElement)
                  if (m = Ei(e)) {
                    B = m.width;
                    m = fj(k, H.document);
                    n = (0,
                      C.I)(hj(m, H));
                    p = n.position;
                    I = qj(n.width) || 0;
                    r = hj(e, H);
                    w = "rtl" === r.direction ? "Right" : "Left";
                    m = w.toLowerCase();
                    H = "absolute" === p ? 0 : qj(r["padding" + w]);
                    r = qj(r["border" + w + "Width"]);
                    t = Math.max(Math.round((B - Math.max(I, t)) / 2), 0);
                    B = {};
                    I = 0;
                    var R = wx(n);
                    R && (I = R[4] * ("Right" === w ? -1 : 1),
                      w = R[3] || 1,
                    1 !== (R[0] || 1) || 1 !== w) && (R[0] = 1,
                      R[3] = 1,
                      B.transform = "matrix(" + R.join(",") + ")");
                    w = 0;
                    switch (p) {
                      case "fixed":
                        var U, J = null != (U = Number(ij(n.getPropertyValue(m)))) ? U : 0, T;
                        U = null != (T = e.getBoundingClientRect().left) ? T : 0;
                        w = J - U;
                        break;
                      case "relative":
                        w = null != (J = Number(ij(n.getPropertyValue(m)))) ? J : 0;
                        break;
                      case "absolute":
                        B[m] = "0"
                    }
                    B["margin-" + m] = t - H - r - w - I + "px";
                    _.rj(a, B);
                    a = !0
                  } else
                    a = !1;
                else
                  a = !1;
                break b;
              default:
                a = !1
            }
            b || a ? (vj(g, h, k, l, d, c.width, c.height, "gpt_slotexp", f),
              g = !0) : g = !1;
            break;
          case 3:
            d = this.context,
              g = this.W,
              h = this.slotId,
              k = this.l,
              U = this.Xb,
              l = c.width,
              T = c.height,
              J = qj(e.height) || 0,
              T >= J || "none" === e.display || "hidden" === e.visibility || !U || -12245933 === U.width || a.getBoundingClientRect().bottom <= U.height ? g = !1 : (U = {
                height: T + "px"
              },
                sj(b, a, U),
                _.rj(a, U),
                vj(d, g, h, k, 3, l, T, "gpt_slotred", f),
                g = !0)
        }
        !g && _.F(ky) && vj(this.context, this.W, this.slotId, this.l, 0, c.width, c.height, "gpt_pgbrk", f)
      }
      this.C.notify()
    }
    ;
    var jr = function(a, b) {
      Z.call(this, a, 1020);
      this.win = b;
      this.C = W(this)
    };
    _.N(jr, Z);
    jr.prototype.j = function() {
      var a = this.win;
      a = _.F(uz) && void 0 !== a.credentialless && (_.F(vz) || a.crossOriginIsolated);
      O(this.C, a)
    }
    ;
    var Oq = function(a, b, c, d, e) {
      Z.call(this, a, 720);
      this.format = b;
      this.D = c;
      this.C = W(this);
      this.l = Y(this, d);
      this.A = Y(this, e)
    };
    _.N(Oq, Z);
    Oq.prototype.j = function() {
      var a = this.A.value;
      if (null == a)
        zB(this.C);
      else {
        var b = Math.round(.3 * this.D), c;
        2 !== this.format && 3 !== this.format || null == (c = this.l.value) || !_.So(c, 12, !1) || 0 >= b || a <= b ? O(this.C, a) : O(this.C, b)
      }
    }
    ;
    var Zq = function(a, b, c) {
      Z.call(this, a, 1054);
      this.l = b;
      this.C = LB(this);
      this.A = X(this, c)
    };
    _.N(Zq, Z);
    Zq.prototype.j = function() {
      this.A.value || this.l();
      this.C.notify()
    }
    ;
    var ar = function(a, b, c, d, e, f, g, h, k, l, m, n) {
      Z.call(this, a, 674);
      this.slotId = b;
      this.T = c;
      this.A = d;
      this.W = f;
      this.K = g;
      this.C = W(this);
      this.F = 2 === e || 3 === e;
      this.l = X(this, h);
      this.M = X(this, k);
      this.J = Y(this, l);
      this.D = Y(this, m);
      n && NB(this, n)
    };
    _.N(ar, Z);
    ar.prototype.j = function() {
      var a = wi(this.T, this.A)
        , b = ej(this.slotId, this.W) || Sm(this.l.value, nj(this.slotId), a);
      this.M.value && !a && (b.style.display = "inline-block");
      this.F ? tI(this.K, this.slotId, function() {
        return void _.dx(b)
      }) : _.fo(this, function() {
        return void _.dx(b)
      });
      a = aN(this);
      0 < a && (b.style.paddingTop = a + "px");
      O(this.C, b)
    }
    ;
    var aN = function(a) {
      var b = a.l.value, c, d = null == (c = a.J.value) ? void 0 : c.height;
      if (b && !a.D.value && d) {
        var e;
        c = (null != (e = vi(a.A, 23)) ? e : E(a.T, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
      } else
        c = 0;
      return c
    };
    var Jq = function(a, b) {
      Z.call(this, a, 859);
      this.win = b;
      this.C = W(this)
    };
    _.N(Jq, Z);
    Jq.prototype.j = function() {
      var a = !_.qe(this.win.top);
      O(this.C, a)
    }
    ;
    var dr = function(a, b, c) {
      Z.call(this, a, 698);
      this.win = b;
      this.C = W(this);
      this.l = X(this, c)
    };
    _.N(dr, Z);
    dr.prototype.j = function() {
      yB(this.C, hj(this.l.value, this.win))
    }
    ;
    var ir = function(a, b, c) {
      Z.call(this, a, 840);
      this.format = b;
      this.W = c;
      this.C = W(this)
    };
    _.N(ir, Z);
    ir.prototype.j = function() {
      var a = []
        , b = this.W;
      b = void 0 === b ? document : b;
      var c;
      null != (c = b.featurePolicy) && (_.D = c.features(),
        _.u(_.D, "includes")).call(_.D, "attribution-reporting") && a.push("attribution-reporting");
      5 !== this.format && 4 !== this.format || !_.F(gy) || a.push("autoplay");
      a.length ? O(this.C, a.join(";")) : O(this.C, "")
    }
    ;
    var pr = function(a, b, c, d, e) {
      Z.call(this, a, 934);
      this.win = b;
      this.slotId = c;
      NB(this, d);
      this.l = X(this, e)
    };
    _.N(pr, Z);
    pr.prototype.j = function() {
      var a = this;
      this.slotId.Z(mq, function(b) {
        b = b.detail.data;
        try {
          var c = JSON.parse(b);
          if ("gpi-uoo" === c.googMsgType) {
            var d = c.userOptOut
              , e = c.clearAdsData
              , f = a.l.value
              , g = new uw;
            var h = _.z(g, 1, d ? "1" : "0");
            var k = _.z(h, 2, 2147483647);
            var l = _.z(k, 3, "/");
            var m = _.z(l, 4, a.win.location.hostname);
            var n = new _.ZB(a.win);
            bC(n, "__gpi_opt_out", m, f);
            if (d || e)
              cC(n, "__gads", f),
                cC(n, "__gpi", f)
          }
        } catch (p) {}
      })
    }
    ;
    var Yq = function(a, b, c, d, e, f) {
      Z.call(this, a, 1053);
      this.slotId = b;
      this.N = c;
      this.K = d;
      this.l = W(this);
      this.A = X(this, e);
      this.D = X(this, f)
    };
    _.N(Yq, Z);
    Yq.prototype.j = function() {
      this.D.value ? (Bq(this.slotId, this.K, this.N, this.A.value),
        O(this.l, !1)) : O(this.l, !0)
    }
    ;
    var xr = function(a, b, c, d, e, f) {
      Z.call(this, a, 721);
      this.win = b;
      this.F = Y(this, c);
      this.A = X(this, d);
      this.l = X(this, e);
      this.D = X(this, f)
    };
    _.N(xr, Z);
    xr.prototype.j = function() {
      var a = this, b = this.F.value, c, d = null == b ? void 0 : null == (c = y(b, 1)) ? void 0 : c.toUpperCase(), e;
      b = null == b ? void 0 : null == (e = y(b, 2)) ? void 0 : e.toUpperCase();
      if (d && b) {
        e = this.A.value;
        c = this.l.value;
        var f = this.D.value
          , g = f.style.height
          , h = f.style.width
          , k = f.style.display
          , l = f.style.position
          , m = Cq(e.id + "_top", d)
          , n = Cq(e.id + "_bottom", b);
        _.rj(n, {
          position: "relative",
          top: "calc(100vh - 48px)"
        });
        f.appendChild(m);
        f.appendChild(n);
        _.rj(c, {
          position: "absolute",
          top: "24px",
          clip: "rect(0, auto, auto, 0)",
          width: "100vw",
          height: "calc(100vh - 48px)"
        });
        _.rj(e, {
          position: "fixed",
          top: "0",
          height: "100vh"
        });
        var p;
        _.rj(f, {
          position: "relative",
          display: (null == (p = this.win.screen.orientation) ? 0 : p.angle) ? "none" : "block",
          width: "100vw",
          height: "100vh"
        });
        FI(this, 722, this.win, "orientationchange", function() {
          var r;
          (null == (r = a.win.screen.orientation) ? 0 : r.angle) ? _.rj(f, {
            display: "none"
          }) : _.rj(f, {
            display: "block"
          })
        });
        _.fo(this, function() {
          _.dx(m);
          _.dx(n);
          f.style.position = l;
          f.style.height = g;
          f.style.width = h;
          f.style.display = k
        })
      }
    }
    ;
    var tr = function(a, b, c, d, e, f) {
      f = void 0 === f ? Fq : f;
      Z.call(this, a, 783);
      var g = this;
      this.slotId = b;
      this.W = d;
      this.qa = e;
      this.J = f;
      this.F = !1;
      this.l = null;
      this.D = this.A = -1;
      this.O = _.Ls(function() {
        g.qa.dispatchEvent("impressionViewable", 715, new oM(g.slotId,"publisher_ads"))
      });
      this.U = Ms(function() {
        g.qa.dispatchEvent("slotVisibilityChanged", 716, new pM(g.slotId,"publisher_ads",g.D))
      }, 200);
      this.M = X(this, c);
      var h = new FB;
      iI(this.slotId, oI).then(function() {
        return void h.notify()
      });
      NB(this, h)
    };
    _.N(tr, Z);
    tr.prototype.j = function() {
      var a = this
        , b = this.J(Uh(this.context, this.id, function(c) {
        c = _.x(c);
        for (var d = c.next(); !d.done; d = c.next())
          a.A = 100 * d.value.intersectionRatio,
          _.u(Number, "isFinite").call(Number, a.A) && bN(a)
      }));
      b ? (b.observe(this.M.value),
        FI(this, this.id, this.W, "visibilitychange", function() {
          bN(a)
        }),
        _.fo(this, function() {
          b.disconnect()
        })) : _.F(Dq)
    }
    ;
    var bN = function(a) {
      var b = !pG(a.W);
      cN(a, 50 <= a.A && b);
      b = Math.floor(b ? a.A : 0);
      if (0 > b || 100 < b || b === a.D ? 0 : -1 !== a.D || 0 !== b)
        a.D = b,
          a.U()
    }
      , cN = function(a, b) {
      a.F || (b ? null === a.l && (a.l = setTimeout(function() {
        pG(a.W) || (a.O(),
          a.F = !0);
        a.l = null
      }, 1E3)) : null !== a.l && (clearTimeout(a.l),
        a.l = null))
    };
    var dN = _.P(["https://td.doubleclick.net/td/kb?kbli=", ""])
      , eN = _.P(["https://googleads.g.doubleclick.net/td/kb?kbli=", ""])
      , lr = function(a, b, c) {
      Z.call(this, a, 1007);
      this.l = Y(this, b);
      c && NB(this, c)
    };
    _.N(lr, Z);
    lr.prototype.j = function() {
      var a = this.l.value;
      if (null != a && a.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
        var b = document.createElement("iframe");
        a = _.F(rz) ? xb(dN, encodeURIComponent(a.join())) : xb(eN, encodeURIComponent(a.join()));
        b.removeAttribute("srcdoc");
        if (a instanceof _.Vs)
          throw new Nt("TrustedResourceUrl",2);
        a = _.hb(a);
        void 0 !== a && (b.src = a);
        for (a = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "); 0 < b.sandbox.length; )
          b.sandbox.remove(b.sandbox.item(0));
        for (var c = 0; c < a.length; c++)
          b.sandbox.supports && !b.sandbox.supports(a[c]) || b.sandbox.add(a[c]);
        b.id = "koelBirdIGRegisterIframe";
        document.head.appendChild(b)
      }
    }
    ;
    var Sq = function(a, b, c) {
      Z.call(this, a, 666);
      this.A = b;
      this.l = W(this);
      this.D = Y(this, c)
    };
    _.N(Sq, Z);
    Sq.prototype.j = function() {
      var a = new Tq;
      this.D.uc() && ZG(_.z(a, 2, this.D.value), 1);
      if (this.A) {
        a = [this.A, a];
        var b = new Tq;
        a = _.x(a);
        for (var c = a.next(); !c.done; c = a.next())
          c = c.value,
          null != Vn(c, 1) && _.z(b, 1, Vn(c, 1)),
          null != Vn(c, 2) && _.z(b, 2, Vn(c, 2)),
          null != Gq(c, 3) && ZG(b, Gq(c, 3));
        a = b
      }
      b = this.l;
      a = null != Vn(a, 2) ? null != Gq(a, 3) && 0 !== (0,
        _.Qm)() ? (0,
        C.ua)(Vn(a, 2)) * (0,
        C.ua)(Gq(a, 3)) : Vn(a, 2) : null;
      yB(b, a)
    }
    ;
    var er = function(a, b, c, d, e, f, g) {
      f = void 0 === f ? Iq : f;
      Z.call(this, a, 666);
      this.A = f;
      this.C = LB(this);
      NB(this, b);
      g && NB(this, g);
      this.l = X(this, c);
      this.F = Y(this, d);
      this.D = Y(this, e)
    };
    _.N(er, Z);
    er.prototype.j = function() {
      var a = this.D.value
        , b = this.F.value
        , c = this.l.value;
      null == a || 0 > a || 0 === b || !jj(c) ? this.C.notify() : fN(this, a, b, c)
    }
    ;
    var fN = function(a, b, c, d) {
      var e = a.A(b, Uh(a.context, 291, function(f, g) {
        f = _.x(f);
        for (var h = f.next(); !h.done; h = f.next())
          if (h = h.value,
            !(0 >= h.intersectionRatio)) {
            g.unobserve(h.target);
            a.C.notify();
            break
          }
      }));
      e ? (null != c && setTimeout(function() {
        a.C.notify();
        e.disconnect()
      }, c),
        e.observe(d),
        _.fo(a, function() {
          e.disconnect()
        })) : (_.F(Dq),
        a.C.notify())
    };
    var cr = function(a, b, c, d, e, f, g) {
      Z.call(this, a, 664);
      this.slotId = b;
      this.Xb = c;
      this.K = d;
      this.C = LB(this);
      this.A = X(this, e);
      this.l = Y(this, f);
      g && NB(this, g)
    };
    _.N(cr, Z);
    cr.prototype.j = function() {
      var a = this, b, c = null != (b = this.l.value) ? b : 0;
      if (0 !== (0,
        _.Qm)() || 0 < c) {
        var d = document;
        b = oG(d);
        if (pG(d) && b && (0 < zI(this.K, this.slotId) || !gN(this)) && b) {
          var e = FI(this, 324, d, b, function() {
            pG(d) || (e && e(),
              a.C.notify())
          });
          if (e)
            return
        }
      }
      this.C.notify()
    }
    ;
    var gN = function(a) {
      var b = a.A.value;
      try {
        var c, d = null != (c = top) ? c : void 0;
        if (void 0 === d)
          return !0;
        var e = jn(null == d ? void 0 : d.document, d).y
          , f = e + a.Xb.height;
        return b.y >= e && b.y <= f
      } catch (g) {
        return !0
      }
    };
    var $q = function(a, b, c) {
      Z.call(this, a, 1055);
      this.C = LB(this);
      NB(this, c);
      this.l = X(this, b)
    };
    _.N($q, Z);
    $q.prototype.j = function() {
      this.l.value && this.C.notify()
    }
    ;
    var Rq = function(a, b, c, d, e) {
      Z.call(this, a, 669);
      this.T = b;
      this.R = c;
      this.C = W(this);
      this.A = Y(this, d);
      this.l = X(this, e)
    };
    _.N(Rq, Z);
    Rq.prototype.j = function() {
      if (Nf(iy))
        O(this.C, !0);
      else {
        var a, b = !(null == (a = this.A.value) || !y(a, 1)) && (E(this.R, 12) || E(this.T, 13)) || this.l.value;
        O(this.C, !!b)
      }
    }
    ;
    var gr = function(a, b, c, d, e, f) {
      Z.call(this, a, 719);
      this.T = b;
      this.A = c;
      this.C = W(this);
      this.l = X(this, d);
      this.D = X(this, e);
      this.F = Y(this, f)
    };
    _.N(gr, Z);
    gr.prototype.j = function() {
      var a = this.l.value.kind;
      switch (a) {
        case 0:
          this.l.value.Ta ? this.D.value ? hN(this) : zB(this.C) : zB(this.C);
          break;
        case 1:
          hN(this);
          break;
        case 2:
          zB(this.C);
          break;
        default:
          ib(a)
      }
    }
    ;
    var hN = function(a) {
      var b = a.F.value
        , c = new Fl;
      b = _.z(c, 3, b);
      E(Ml([b, a.T.eb(), a.A.eb()]), 3) ? O(a.C, PH) : zB(a.C)
    };
    var nr = function(a, b, c, d) {
      Z.call(this, a, 1101);
      this.win = b;
      this.A = Y(this, d);
      this.l = Y(this, c)
    };
    _.N(nr, Z);
    nr.prototype.j = function() {
      if (Jg("browsing-topics", this.win.document) && _.F(oz) && this.A.value && this.l.value) {
        var a = this.l.value
          , b = Wj(this.win);
        b.setTopicsCalled ? _.v.Promise.resolve() : (b.setTopicsCalled = !0,
          a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: !1
          }))
      }
    }
    ;
    var Uq = function(a, b, c, d, e, f, g, h, k, l) {
      Z.call(this, a, 681);
      this.adUnitPath = b;
      this.aa = c;
      this.M = d;
      this.F = e;
      this.Ja = W(this);
      this.J = W(this);
      this.Sc = W(this);
      this.l = Nf(iy).split(",");
      this.A = Of(jy);
      this.O = Y(this, f);
      this.ca = Y(this, g);
      this.U = Y(this, h);
      this.D = X(this, k);
      this.Y = X(this, l)
    };
    _.N(Uq, Z);
    Uq.prototype.j = function() {
      if (this.F)
        iN(this);
      else {
        var a;
        if (a = this.l.length) {
          b: if (this.l.length) {
            if (this.A.length && (a = this.adUnitPath.split("/"),
              !_.u(this.A, "includes").call(this.A, a[a.length - 1]))) {
              a = !1;
              break b
            }
            a = !0
          } else
            a = !1;
          var b = a;
          a = b ? jN(this) : null;
          if (b && a) {
            b = this.Y.value;
            var c, d, e = null != (d = null == (c = Ei(b.parentElement)) ? void 0 : c.width) ? d : 0;
            c = "p" === this.l[0];
            d = Number(this.l[0]);
            if (c = "f" === this.l[0] ? this.M : d && 0 < d ? d : c ? Math.min(e, this.M) : null) {
              d = a.width;
              var f = a.height
                , g = this.l[1]
                , h = Number(g);
              d = "ratio" === g && d ? Math.floor(f / d * c) : h && 0 < h ? f * h : f;
              kN(this, c, d, {
                kind: 0,
                Ta: '<html><body style="height:' + (d - 2 + "px;width:" + (c - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (c + "x" + d + "</p></body></html>")
              }, c <= e ? 1 : 2, b);
              a = !0
            } else
              a = !1
          } else
            a = !1
        }
        a || iN(this)
      }
    }
    ;
    var jN = function(a) {
      a = qi(a.aa)[0];
      return Array.isArray(a) && a.every(function(b) {
        return "number" === typeof b
      }) ? new _.Di(a[0],a[1]) : null
    }
      , kN = function(a, b, c, d, e, f) {
      e = void 0 === e ? a.O.value : e;
      O(a.J, new _.Di(b,c));
      O(a.Ja, d);
      yB(a.Sc, e);
      f && _.Nx(f, "opacity", .5)
    }
      , iN = function(a) {
      var b = a.ca.value
        , c = a.U.value;
      if (a.F)
        kN(a, null != b ? b : 0, null != c ? c : 0, a.D.value);
      else {
        if (null == b)
          throw new wm("Missing 'width'.");
        if (null == c)
          throw new wm("Missing 'height'.");
        kN(a, b, c, a.D.value)
      }
    };
    var Pq = function(a, b, c, d, e, f, g, h, k) {
      Z.call(this, a, 673);
      this.slotId = b;
      this.Tb = c;
      this.F = d;
      this.D = e;
      this.W = f;
      this.l = g;
      this.K = h;
      this.A = k;
      this.C = W(this)
    };
    _.N(Pq, Z);
    Pq.prototype.j = function() {
      var a = this, b, c;
      return _.Ab(function(d) {
        if (1 == d.j) {
          if (a.Tb) {
            lN(a, a.Tb);
            O(a.C, a.Tb);
            d.j = 0;
            return
          }
          if (ui(a.l)) {
            var e = mN(a);
            O(a.C, e);
            d.j = 0;
            return
          }
          return Bb(d, iI(a.slotId, jI), 4)
        }
        b = d.o;
        c = b.detail;
        if (a.G)
          return d.return();
        lN(a, c);
        O(a.C, c);
        d.j = 0
      })
    }
    ;
    var mN = function(a) {
      var b = _.Be("INS");
      b.id = a.F;
      _.rj(b, {
        display: "none"
      });
      a.W.documentElement.appendChild(b);
      var c = function() {
        return void _.dx(b)
      };
      2 === a.l || 3 === a.l ? tI(a.K, a.slotId, c) : _.fo(a, c);
      return b
    }
      , lN = function(a, b) {
      if (2 !== a.l && 3 !== a.l) {
        for (var c = _.x(_.u(Array, "from").call(Array, b.childNodes)), d = c.next(); !d.done; d = c.next())
          d = d.value,
          1 === d.nodeType && d.id !== a.D && _.dx(d);
        a.A || (b.style.display = "")
      }
    };
    var br = function(a, b) {
      Z.call(this, a, 676);
      this.C = W(this);
      this.l = X(this, b)
    };
    _.N(br, Z);
    br.prototype.j = function() {
      var a = Bi(this.l.value);
      O(this.C, a)
    }
    ;
    var hr = function(a, b, c, d, e) {
      Z.call(this, a, 807);
      this.win = b;
      this.C = LB(this);
      this.l = Y(this, c);
      this.A = X(this, d);
      e && NB(this, e)
    };
    _.N(hr, Z);
    hr.prototype.j = function() {
      var a = this.l.value;
      if (a && !this.A.value) {
        var b = Fx(this.win);
        cI(new bI(b,a)) || this.P(new wm("Cannot create top window frame"))
      }
      this.C.notify()
    }
    ;
    var nN = function(a, b) {
      var c = _.F(yr) ? pj() : void 0;
      this.context = a;
      this.K = b;
      this.j = c
    }
      , oN = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, t, w, B, I) {
      var H = document
        , R = window;
      e || f || _.F(Xq) || DI(a.K, d);
      var U = Br(a.context, b, a.j, c, d, e, f, g, h, k, l, m, H, n, p, r, t, w, function() {
        DI(a.K, d);
        CI(a.K, d, U)
      }, B, I);
      f || _.F(Xq) || CI(a.K, d, U);
      _.fo(d, function() {
        DI(a.K, d)
      });
      R.top !== R && R.addEventListener("pagehide", function(J) {
        J.persisted || DI(a.K, d)
      });
      tg(U)
    };
    var pN = function(a, b, c) {
      Z.call(this, a, 944);
      this.win = b;
      this.l = new _.ZB(this.win);
      this.A = X(this, c)
    };
    _.N(pN, Z);
    pN.prototype.j = function() {
      var a = this.A.value;
      if (aC(this.l, a)) {
        var b = _.$B(this.l, "__gpi_opt_out", a);
        if (b) {
          var c = new uw;
          b = _.z(c, 1, b);
          b = _.z(b, 2, 2147483647);
          b = _.z(b, 3, "/");
          b = _.z(b, 4, this.win.location.hostname);
          bC(this.l, "__gpi_opt_out", b, a)
        }
      }
    }
    ;
    var qN = function(a, b, c, d) {
      d = void 0 === d ? Er : d;
      Z.call(this, a, 883);
      this.D = b;
      this.F = d;
      this.l = LB(this);
      this.A = X(this, c)
    };
    _.N(qN, Z);
    qN.prototype.j = function() {
      !E(this.A.value, 5) || _.F(Ly) ? this.l.notify() : (_.F(Ky) || ZF(this.D),
        this.F() ? GB(this.l, new _.v.Promise(function(a) {
            return void $F(a)
          }
        )) : ($F(null),
          this.l.notify()))
    }
    ;
    var rN = function(a, b, c, d, e) {
      Z.call(this, a, 884);
      this.ya = b;
      this.l = c;
      this.A = W(this);
      this.F = Y(this, d);
      this.D = X(this, e)
    };
    _.N(rN, Z);
    rN.prototype.j = function() {
      this.l.storage = this.F.value;
      LL(this.l, _.$B(this.ya, "__gads", this.D.value));
      pf(20);
      pf(2);
      var a = _.mf(nf).j();
      O(this.A, a)
    }
    ;
    var sN = function(a, b, c) {
      Z.call(this, a, 873);
      this.win = b;
      this.l = X(this, c)
    };
    _.N(sN, Z);
    sN.prototype.j = function() {
      var a = this.context
        , b = this.l.value
        , c = this.win;
      !Uk()._pubconsole_disable_ && (b = ef("google_pubconsole", b, c)) && (b = b.split("|"),
      "1" !== b[0] && "0" !== b[0] || Xk(a, c))
    }
    ;
    var tN = function(a, b, c, d, e) {
      Z.call(this, a, 1058);
      this.win = b;
      this.V = c;
      d && (this.l = Y(this, d));
      NB(this, e)
    };
    _.N(tN, Z);
    tN.prototype.j = function() {
      var a;
      if (Jg("shared-storage", this.win.document) && (null == (a = this.l) ? 0 : a.value) && E(this.V, 5)) {
        a = {
          message: "goog:spam:client_age",
          pvsid: this.context.pvsid,
          clientAgeIframe: _.F(uy)
        };
        var b = this.l.value;
        b(a)
      }
    }
    ;
    var uN = function(a, b, c) {
      Z.call(this, a, 798);
      this.C = W(this);
      this.l = Y(this, b);
      this.A = X(this, c)
    };
    _.N(uN, Z);
    uN.prototype.j = function() {
      var a = this
        , b = new _.v.Map;
      if (this.l.value) {
        var c = this.l.value
          , d = c.fa.Ha
          , e = c.hc
          , f = e.Od;
        e = e.Rc;
        c = _.x(_.u(c.ba.X, "entries").call(c.ba.X));
        for (var g = c.next(); !g.done; g = c.next()) {
          var h = _.x(g.value);
          g = h.next().value;
          h = h.next().value;
          var k = void 0
            , l = _.F(ly) ? null == (k = e) ? void 0 : k.get(h) : f[g];
          b.set(h, d ? vN(this, h, l) : function() {
              return a.A.value
            }
          )
        }
      }
      O(this.C, b)
    }
    ;
    var vN = function(a, b, c) {
      return gj(function() {
        var d = _.u(Object, "assign").call(Object, {}, a.l.value);
        d.ba.je = !0;
        d.ba.X = [b];
        d.hc.Od = c ? [c] : [];
        c && (d.hc.Rc = new _.v.Map,
          d.hc.Rc.set(b, c));
        return Wm(IK(d)).url
      })
    };
    var wN = function(a, b, c, d, e, f) {
      f = void 0 === f ? Fr : f;
      Z.call(this, a, 886);
      this.X = b;
      this.K = c;
      this.l = d;
      this.W = e;
      this.A = f;
      this.C = LB(this)
    };
    _.N(wN, Z);
    wN.prototype.j = function() {
      var a = this, b, c;
      return _.Ab(function(d) {
        if (1 == d.j)
          return 3 !== nG(a.W) ? (d.j = 2,
            d = void 0) : d = Bb(d, new _.v.Promise(function(e) {
              return void rG(e, a.W)
            }
          ), 2),
            d;
        if (4 != d.j)
          return b = a.l ? Hq(a.l) : null,
            null == b || (c = a.X.some(function(e) {
              return !jj(fj(e))
            })) ? (a.C.notify(),
              d.return()) : Bb(d, xN(a, b), 4);
        a.C.notify();
        d.j = 0
      })
    }
    ;
    var xN = function(a, b) {
      return new _.v.Promise(function(c) {
          var d = a.A(function(h, k) {
            h.some(function(l) {
              return 0 < l.intersectionRatio
            }) && (k.disconnect(),
              c())
          }, b + "%");
          if (d) {
            _.fo(a, function() {
              return void d.disconnect()
            });
            for (var e = {}, f = _.x(a.X), g = f.next(); !g.done; e = {
              cc: e.cc
            },
              g = f.next()) {
              g = g.value;
              e.cc = fj(g);
              if (!e.cc)
                break;
              d.observe(e.cc);
              uI(a.K, g, function(h) {
                return function() {
                  return void d.unobserve(h.cc)
                }
              }(e))
            }
          } else
            _.F(Dq),
              c()
        }
      )
    };
    var yN = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
      Z.call(this, a, 866);
      this.F = b;
      this.l = c;
      this.D = d;
      this.Ac = e;
      this.jc = f;
      this.V = g;
      this.W = h;
      this.C = LB(this);
      this.A = X(this, k);
      this.M = Y(this, l);
      this.O = X(this, m);
      this.U = X(this, n);
      NB(this, p);
      this.J = X(this, r)
    };
    _.N(yN, Z);
    yN.prototype.j = function() {
      var a = this, b, c, d, e, f, g, h, k, l, m, n, p, r;
      return _.Ab(function(t) {
        switch (t.j) {
          case 1:
            b = a.O.value;
            if (!b)
              return a.C.notify(),
                t.return();
            c = Hb(a.U.value, {
              uuid: a.jc
            });
            d = document.createElement("script");
            e = {
              source: b,
              credentials: a.J.value ? "include" : "omit",
              resources: [c.toString()]
            };
            d.setAttribute("type", "webbundle");
            lb(d, new _.np(JSON.stringify(e).replace(/</g, "\\u003C"),op));
            a.W.head.appendChild(d);
            a.C.notify();
            t.m = 2;
            return Bb(t, zN(c), 4);
          case 4:
            f = t.o;
            Eb(t, 3);
            break;
          case 2:
            g = Fb(t);
            if (g instanceof lB)
              return a.l(g),
                t.return();
            throw g;
          case 3:
            h = f;
            k = h.Sf;
            l = h.eh;
            if (k.length !== l.length)
              return a.l(new kB("Received " + k.length + " ad URLs but " + l.length + " metadatas")),
                t.return();
            e.resources = k.filter(function(w) {
              return w
            });
            e.resources.length ? (m = _.Be("SCRIPT"),
              m.setAttribute("type", "webbundle"),
              lb(m, new _.np(JSON.stringify(e).replace(/</g, "\\u003C"),op)),
              a.W.head.removeChild(d),
              a.W.head.appendChild(m)) : a.W.head.removeChild(d);
            for (n = 0; n < k.length; n++)
              p = k[n],
                r = l[n],
                a.F(n, r, {
                  kind: 1,
                  url: p
                }, a.A.value, a.V, a.M.value);
            a.D(k.length - 1, a.A.value, a.V);
            t.j = 0
        }
      })
    }
    ;
    var zN = function(a) {
      var b, c, d;
      return _.Ab(function(e) {
        if (1 == e.j)
          return Bb(e, fetch(a.toString()).catch(function() {
            throw new lB("Failed to fetch bundle index.");
          }), 2);
        if (3 != e.j)
          return b = e.o,
            Bb(e, b.text(), 3);
        c = e.o;
        d = Hw(c);
        return e.return({
          Sf: _.cn(d, 1),
          eh: _.cn(d, 2)
        })
      })
    };
    var AN = function(a, b, c, d, e, f, g) {
      Z.call(this, a, 810);
      this.D = b;
      this.Ha = c;
      this.N = d;
      this.A = e;
      this.win = f;
      this.V = g;
      this.l = W(this)
    };
    _.N(AN, Z);
    AN.prototype.j = function() {
      var a = this
        , b = this.D;
      !this.Ha && 1 < this.D.length && (b = [b[0]]);
      b = b.filter(function(c) {
        if (c.G)
          return !1;
        var d = a.N.R[c.getDomId()], e;
        if (e = !(bo(Jm(d)) && (_.D = Of(Ty),
          _.u(_.D, "includes")).call(_.D, String(Jm(d)))))
          th(a.win) && 4 === Jm(d) ? (kl(a.A, AJ("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))),
            e = !0) : e = !1,
            e = !e;
        return e && !Mm(a.context, a.A, c, d, a.win, a.V)
      });
      30 < b.length && (kl(this.A, wJ("30", String(b.length), String(b.length - 30))),
        b = b.slice(0, 30));
      O(this.l, b)
    }
    ;
    var BN = function(a, b, c) {
      Z.call(this, a, 919);
      this.l = b;
      this.V = c;
      this.C = W(this)
    };
    _.N(BN, Z);
    BN.prototype.j = function() {
      var a, b = !(null == (a = this.l) ? 0 : E(a, 9)) && !!E(this.V, 5);
      O(this.C, b)
    }
    ;
    var CN = function(a, b, c, d, e, f) {
      Z.call(this, a, 935);
      this.K = b;
      this.N = c;
      this.W = d;
      this.C = LB(this);
      this.l = X(this, e);
      NB(this, f)
    };
    _.N(CN, Z);
    CN.prototype.j = function() {
      var a = this.N
        , b = a.T;
      a = a.R;
      for (var c = _.x(this.l.value), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        var e = a[d.getDomId()]
          , f = this.W;
        on(e, b) && !this.K.Ab(d) && pn(d, f, e, b)
      }
      this.C.notify()
    }
    ;
    var DN = function(a, b, c, d, e, f) {
      f = void 0 === f ? Rj : f;
      Z.call(this, a, 939);
      this.A = b;
      this.win = c;
      this.V = d;
      this.l = f;
      NB(this, e)
    };
    _.N(DN, Z);
    DN.prototype.j = function() {
      var a = this.l
        , b = this.win
        , c = new Zp;
      var d = new Yp;
      d = _.ld(d, 1, String(this.A));
      c = _.Oh(c, 5, d);
      c = _.id(c, 4, 1, 0);
      c = _.id(c, 2, 2, 0);
      c = _.ld(c, 3, this.context.qb || this.context.Ma);
      c = _.id(c, 6, E(this.V, 5), !1);
      a.call(this, b, c)
    }
    ;
    var EN = function(a, b, c, d, e) {
      Z.call(this, a, 905);
      this.N = b;
      this.l = c;
      this.C = LB(this);
      this.A = X(this, d);
      NB(this, e)
    };
    _.N(EN, Z);
    EN.prototype.j = function() {
      for (var a = _.x(this.A.value), b = a.next(); !b.done; b = a.next()) {
        var c = void 0;
        switch (null == (c = this.N.R[b.value.getDomId()]) ? void 0 : Jm(c)) {
          case 2:
          case 3:
          case 5:
            this.l.load(_.sL);
            return
        }
      }
      this.C.notify()
    }
    ;
    var FN = function(a, b, c, d) {
      Z.call(this, a, 833);
      this.l = b;
      this.win = c;
      this.C = LB(this);
      NB(this, d)
    };
    _.N(FN, Z);
    FN.prototype.j = function() {
      if (!_.F(bz)) {
        var a = this.l
          , b = this.win
          , c = cj();
        c = {
          version: gK ? gK : gK = Al(),
          Kc: c,
          Lh: _.F(cz)
        };
        c = RH.Vg(c);
        var d = yH(b);
        c = d ? ve(c, new _.v.Map([["n", String(d)]])) : c;
        d = Of(Cl);
        for (var e = new _.v.Map, f = 0; f < d.length; f += 2)
          e.set(d[f], d[f + 1]);
        c = ve(c, e);
        var g;
        a.resources[c.toString()] || (null == (g = Uk()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1,
          b = b.document,
          a = _.Be("IFRAME"),
          a.src = _.mb(c).toString(),
          a.style.visibility = "hidden",
          a.style.display = "none",
          b = b.getElementsByTagName("script"),
        b.length && (b = b[b.length - 1],
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
      }
      this.C.notify()
    }
    ;
    var GN = function(a, b, c, d) {
      Z.call(this, a, 928);
      this.requestId = b;
      this.C = LB(this);
      this.l = X(this, c);
      NB(this, d)
    };
    _.N(GN, Z);
    GN.prototype.j = function() {
      var a = this.context
        , b = this.requestId
        , c = this.l.value.length;
      if (a.Hc) {
        var d = a.Gb;
        a = Ph(a);
        var e = new Vx;
        b = _.kd(e, 2, b);
        c = _.id(b, 1, c, 0);
        c = _.Rh(a, 7, Sh, c);
        ze(d, c)
      }
      this.C.notify()
    }
    ;
    var HN = function(a, b, c, d) {
      Z.call(this, a, 867);
      this.qa = b;
      this.N = c;
      this.C = LB(this);
      this.l = X(this, d)
    };
    _.N(HN, Z);
    HN.prototype.j = function() {
      for (var a = _.x(this.l.value), b = a.next(); !b.done; b = a.next()) {
        var c = _.x(b.value);
        b = c.next().value;
        c = c.next().value;
        var d = ji(this.N.R[b.getDomId()], 20);
        b.dispatchEvent(lI, 808, {
          gg: c,
          yh: d
        });
        this.qa.dispatchEvent("slotRequested", 705, new sM(b,"publisher_ads"))
      }
      this.C.notify()
    }
    ;
    var IN = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, t, w, B, I, H, R, U, J, T, ba, ea, da, oa, ua, Ea, pa, va, ka) {
      Z.call(this, a, 785, _.Mf(iz));
      this.Ha = b;
      this.K = c;
      this.ya = d;
      this.N = e;
      this.Ac = f;
      this.ub = g;
      this.Wb = h;
      this.Vb = k;
      this.ce = l;
      this.jc = m;
      this.Hb = n;
      this.V = p;
      this.isSecureContext = r;
      this.fb = t;
      this.win = w;
      this.l = W(this);
      this.D = W(this);
      this.O = W(this);
      NB(this, T);
      this.la = MB(this, B);
      this.F = MB(this, I);
      this.J = X(this, H);
      this.Y = X(this, R);
      this.A = MB(this, U);
      J && (this.M = MB(this, J));
      NB(this, T);
      NB(this, ba);
      ea && (this.oa = X(this, ea));
      da && (this.U = new EB(da));
      oa && (this.na = Y(this, oa));
      ua && (this.ca = X(this, ua));
      Ea && NB(this, Ea);
      pa && (this.ia = X(this, pa));
      va && (this.Aa = MB(this, va));
      this.aa = Y(this, ka)
    };
    _.N(IN, Z);
    IN.prototype.j = function() {
      if (this.J.value.length) {
        var a = !_.F(Ly);
        if (a) {
          ah();
          var b = ch[1]
        } else
          b = "";
        if (a) {
          ah();
          var c = ch[4]
        } else
          c = "";
        a ? (ah(),
          a = ch[6]) : a = "";
        var d;
        var e = _.F(nz) ? (d = this.A.value) ? d : this.M && !this.M.Xa() ? 9 : this.A.Xa() ? null : 1 : null != (d = this.A.value) ? d : this.A.Xa() ? null : 1;
        this.F.value && (this.K.Zc = this.F.value);
        var f, g, h, k, l, m, n, p;
        d = {
          fa: {
            win: this.win,
            context: this.context,
            K: this.K,
            ya: this.ya,
            V: this.V,
            Ha: this.Ha,
            ce: this.ce,
            isSecureContext: this.isSecureContext,
            Ph: null == (f = this.Aa) ? void 0 : f.value,
            fb: this.fb
          },
          ba: {
            X: this.J.value,
            N: this.N,
            ub: this.ub,
            je: !1
          },
          Rh: {
            Wb: this.Wb,
            Vb: this.Vb
          },
          fh: {
            Vf: b,
            Wg: c,
            rh: a
          },
          kh: {
            Fg: null != (n = this.la.value) ? n : "0"
          },
          Lf: {
            Ac: this.Ac,
            jc: this.jc
          },
          hc: {
            Od: this.Y.value,
            Rc: this.aa.value
          },
          Gh: {
            Hh: e
          },
          Bh: {
            gh: null != (p = null == (g = this.oa) ? void 0 : g.value) ? p : void 0,
            mh: null == (h = this.U) ? void 0 : h.value,
            rg: null == (k = this.ca) ? void 0 : k.value
          },
          oh: {
            Jg: null == (l = this.na) ? void 0 : l.value,
            Cg: null == (m = this.ia) ? void 0 : m.value
          }
        };
        O(this.D, d);
        f = Wm(IK(d));
        g = f.url;
        iB(this.Hb, (9).toString(), 9, f.Oe);
        O(this.l, g);
        f = HK(d) ? Is("https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : Is("https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}");
        O(this.O, f)
      } else
        O(this.l, ""),
          zB(this.D)
    }
    ;
    var JN = function(a, b, c, d, e, f) {
      Z.call(this, a, 878);
      this.l = b;
      this.W = c;
      this.N = d;
      this.win = e;
      this.C = LB(this);
      NB(this, f)
    };
    _.N(JN, Z);
    JN.prototype.j = function() {
      for (var a = _.x(this.l), b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        var c = fj(b, this.W);
        if (!ej(b, this.W) && c) {
          a: {
            var d = c;
            var e = this.N.R[b.getDomId()]
              , f = 0
              , g = 0;
            e = _.x(qi(e));
            for (var h = e.next(); !h.done; h = e.next())
              if (h = h.value,
                Array.isArray(h)) {
                var k = _.x(h);
                h = k.next().value;
                k = k.next().value;
                if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h,
                  g = Math.min(g || Infinity, k),
                Tm(hj(d, this.win)) || !d.parentElement || Tm(hj(d.parentElement, this.win))))) {
                  d = [f, 0];
                  break a
                }
              }
            d = f || g ? [f, g] : null
          }
          g = this.N;
          f = g.T;
          g = g.R[b.getDomId()];
          Sm(c, nj(b), wi(f, g), d)
        }
      }
      this.C.notify()
    }
    ;
    var KN = function(a, b, c, d, e, f) {
      this.l = a;
      this.H = b;
      this.B = c;
      this.X = d;
      this.V = e;
      this.A = f;
      this.G = "";
      this.m = -1;
      this.j = 1;
      this.o = ""
    }
      , MN = function(a, b) {
      if (b)
        if (1 !== a.j && 2 !== a.j)
          LN(a, new kB("state err: (" + ([a.j, a.o.length].join() + ")")));
        else {
          a.o && (b = a.o + b);
          var c = 0;
          do {
            var d = b.indexOf("\n", c);
            var e = -1 !== d;
            if (!e)
              break;
            var f = a;
            c = b.substr(c, d - c);
            if (1 === f.j)
              f.G = c,
                ++f.m,
                f.j = 2;
            else {
              try {
                f.l(f.m, f.G, {
                  kind: 0,
                  Ta: Cx(c)
                }, f.X, f.V, f.A),
                  f.G = ""
              } catch (g) {}
              f.j = 1
            }
            c = d + 1
          } while (e && c < b.length);
          a.o = b.substr(c)
        }
    }
      , LN = function(a, b) {
      a.j = 4;
      try {
        a.H(b)
      } catch (c) {}
    }
      , NN = function(a) {
      1 !== a.j || a.o ? LN(a, new kB("state err (" + ([a.j, a.o.length].join() + ")"))) : (a.j = 3,
        a.B(a.m, a.X, a.V))
    };
    var ON = function(a, b, c, d, e, f, g, h, k, l, m) {
      Z.call(this, a, 788);
      this.M = b;
      this.J = c;
      this.F = d;
      this.V = e;
      this.C = LB(this);
      this.D = 0;
      this.A = !1;
      this.l = null != m ? m : new XMLHttpRequest;
      this.U = X(this, f);
      this.Y = Y(this, g);
      this.aa = X(this, h);
      NB(this, k);
      this.O = X(this, l)
    };
    _.N(ON, Z);
    ON.prototype.j = function() {
      var a = this
        , b = this.aa.value;
      if (b) {
        var c = new KN(this.M,this.J,this.F,this.U.value,this.V,this.Y.value);
        this.l.open("GET", b);
        this.l.withCredentials = this.O.value;
        this.l.onreadystatechange = function() {
          PN(a, c, !1)
        }
        ;
        this.l.onload = function() {
          PN(a, c, !0)
        }
        ;
        this.l.onerror = function() {
          LN(c, new lB("XHR error"))
        }
        ;
        this.l.send()
      }
      this.C.notify()
    }
    ;
    var PN = function(a, b, c) {
      try {
        if (3 === a.l.readyState || 4 === a.l.readyState)
          if (300 <= a.l.status)
            a.A || (LN(b, new lB("xhr_err-" + a.l.status)),
              a.A = !0);
          else {
            var d = a.l.responseText.substr(a.D);
            d && MN(b, d);
            a.D = a.l.responseText.length;
            c && 4 === a.l.readyState && NN(b)
          }
      } catch (e) {
        LN(b, e)
      }
    };
    var QN = function(a, b, c, d, e, f, g, h, k, l) {
      Z.call(this, a, 1078);
      this.D = b;
      this.A = c;
      this.l = d;
      this.V = e;
      this.C = LB(this);
      this.J = X(this, f);
      this.M = Y(this, g);
      this.O = X(this, h);
      NB(this, k);
      this.F = X(this, l)
    };
    _.N(QN, Z);
    QN.prototype.j = function() {
      var a = this.O.value;
      a && RN(this, a);
      this.C.notify()
    }
    ;
    var RN = function(a, b) {
      var c, d, e, f, g, h, k, l, m, n, p, r, t, w;
      _.Ab(function(B) {
        switch (B.j) {
          case 1:
            return c = new KN(a.D,a.A,a.l,a.J.value,a.V,a.M.value),
              e = a.F.value ? "include" : "same-origin",
              B.m = 2,
              Bb(B, fetch(b, {
                credentials: e
              }), 4);
          case 4:
            d = B.o;
            Eb(B, 3);
            break;
          case 2:
            f = Fb(B),
              LN(c, new lB("fetch error: " + (f instanceof Error ? f.message : void 0)));
          case 3:
            if (!d)
              return B.return();
            if (300 <= d.status)
              return LN(c, new lB("fetch_status-" + d.status)),
                B.return();
            h = null == (g = d.body) ? void 0 : g.getReader();
            if (!h)
              return B.return();
            k = new TextDecoder;
            l = !1;
          case 5:
            if (l) {
              B.j = 6;
              break
            }
            p = void 0;
            B.m = 7;
            return Bb(B, h.read(), 9);
          case 9:
            r = B.o;
            p = r.value;
            l = r.done;
            Eb(B, 8);
            break;
          case 7:
            n = t = Fb(B),
              l = !0;
          case 8:
            m && (w = k.decode(m, {
              stream: !l
            }),
              MN(c, w));
            m = p;
            B.j = 5;
            break;
          case 6:
            n && LN(c, new lB("fetch read error: " + (n instanceof Error ? n.message : void 0))),
              NN(c),
              B.j = 0
        }
      })
    };
    var SN = function(a, b, c, d, e) {
      Z.call(this, a, 918);
      this.N = b;
      this.Hb = c;
      this.C = LB(this);
      this.l = X(this, e);
      NB(this, d)
    };
    _.N(SN, Z);
    SN.prototype.j = function() {
      var a = this.l.value;
      a.length && xq(this.Hb, "3", (0,
        C.I)(ji(this.N.R[a[0].getDomId()], 20)));
      this.C.notify()
    }
    ;
    var TN = function(a, b) {
      Z.call(this, a, 820);
      this.win = b;
      this.C = W(this)
    };
    _.N(TN, Z);
    TN.prototype.j = function() {
      var a = this, b, c, d, e;
      return _.Ab(function(f) {
        if (1 == f.j)
          return Bb(f, Uj(a.win), 2);
        b = f.o;
        c = b.Zc;
        d = b.status;
        c || wj("gpt_etu", function(g) {
          Cj(g, a.context);
          L(g, "rsn", d)
        });
        xB(a.C, null != (e = c) ? e : "");
        f.j = 0
      })
    }
    ;
    var VN = function(a, b, c) {
      Z.call(this, a, 804);
      this.l = c;
      this.F = [];
      this.A = {
        Kg: UN(this, function(d) {
          return Vn(d, 6)
        }),
        Vh: UN(this, function(d) {
          return Vn(d, 7)
        }),
        Qg: UN(this, function(d) {
          return !!E(d, 8)
        }),
        yg: UN(this, function(d) {
          return y(d, 10)
        }),
        af: UN(this, function(d) {
          var e;
          return null != (e = d.getEscapedQemQueryId()) ? e : ""
        }),
        Wf: UN(this, function(d) {
          return zf(d, vw, 43)
        }),
        Pg: UN(this, function(d) {
          return !!E(d, 9)
        }),
        Nh: UN(this, function(d) {
          return !!E(d, 12)
        }),
        Dg: UN(this, function(d) {
          return Tn(d, fw, 48, Dw)
        }),
        vg: UN(this, function(d) {
          return Tn(d, dw, 39, Dw)
        }),
        Sc: UN(this, function(d) {
          return y(d, 36)
        }),
        Oh: UN(this, function(d) {
          return E(d, 13)
        }),
        Og: UN(this, function(d) {
          return E(d, 3)
        }),
        Jh: UN(this, function(d) {
          return y(d, 49)
        }),
        Sh: UN(this, function(d) {
          return Vn(d, 29)
        }),
        Th: UN(this, function(d) {
          return Vn(d, 30)
        }),
        Lg: UN(this, function(d) {
          return zf(d, xw, 51)
        }),
        pg: UN(this, function(d) {
          return y(d, 61)
        }),
        Ja: W(this),
        If: UN(this, function(d) {
          return zf(d, Aw, 58)
        }),
        Wh: UN(this, function(d) {
          var e, f;
          return null != (f = null == (e = zf(d, ww, 56)) ? void 0 : pg(e, 1)) ? f : null
        }),
        Cc: UN(this, function(d) {
          return _.Pe(d, Yv, 62)
        }),
        Xg: UN(this, function(d) {
          return Zc(d, 63, Gc)
        }),
        dg: UN(this, function(d) {
          return E(d, 64)
        })
      };
      this.D = X(this, b)
    };
    _.N(VN, Z);
    var UN = function(a, b) {
      var c = W(a);
      a.F.push({
        C: c,
        sg: b
      });
      return c
    };
    VN.prototype.j = function() {
      for (var a = _.x(this.F), b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        var c = b.sg;
        yB(b.C, c(this.D.value))
      }
      0 === this.l.kind || 1 === this.l.kind && this.l.url ? O(this.A.Ja, this.l) : O(this.A.Ja, {
        kind: 0,
        Ta: y(this.D.value, 4) || ""
      })
    }
    ;
    var WN = function(a, b, c, d) {
      Z.call(this, a, 822);
      this.slotId = b;
      this.Ga = c;
      this.l = LB(this);
      this.A = X(this, d)
    };
    _.N(WN, Z);
    WN.prototype.j = function() {
      var a = this, b = _.Wn(this.A.value, 23), c, d = null != (c = this.Ga) ? c : _.mf(Dp);
      c = _.x(b);
      for (var e = c.next(); !e.done; e = c.next())
        e = e.value,
          kM(d, e),
          lM(d, e, this.slotId);
      this.l.notify();
      b.length && wj("gpt_hp", function(f) {
        Cj(f, a.context);
        L(f, "ls", b.join())
      }, _.Mf(xy))
    }
    ;
    var XN = function(a, b, c) {
      Z.call(this, a, 803);
      this.l = b;
      this.slotId = c;
      this.C = W(this);
      this.A = W(this)
    };
    _.N(XN, Z);
    XN.prototype.j = function() {
      var a = JSON.parse(this.l)
        , b = Fk(a, Js);
      if (!b)
        throw Error("missing ad unit path");
      if (null == a || !a[b])
        throw Error("invalid ad unit path: " + b);
      a = a[b];
      if (!Array.isArray(a))
        throw Error("dictionary not an array: " + this.l);
      a = new Cw(a.slice());
      var c;
      b = _.x(null != (c = Zc(a, 27, Cc)) ? c : []);
      for (c = b.next(); !c.done; c = b.next())
        c = c.value,
          _.mf(nf).o(c);
      pf(4);
      this.slotId.dispatchEvent(kI, 800, a);
      O(this.C, a);
      var d;
      yB(this.A, null != (d = zf(a, tw, 54)) ? d : null)
    }
    ;
    var YN = function(a, b, c, d) {
      Z.call(this, a, 823);
      this.slotId = b;
      this.K = c;
      this.l = LB(this);
      this.A = X(this, d)
    };
    _.N(YN, Z);
    YN.prototype.j = function() {
      var a = this;
      E(this.A.value, 11) && (_.wI(this.K, this.slotId),
        tI(this.K, this.slotId, function() {
          _.xI(a.K, a.slotId)
        }));
      this.l.notify()
    }
    ;
    var ZN = function(a, b, c, d) {
      Z.call(this, a, 821);
      this.V = b;
      this.ya = c;
      this.l = LB(this);
      this.A = X(this, d)
    };
    _.N(ZN, Z);
    ZN.prototype.j = function() {
      if (E(this.V, 5))
        for (var a = new _.v.Set, b = _.x(_.Pe(this.A.value, uw, 14)), c = b.next(); !c.done; c = b.next()) {
          c = c.value;
          var d = void 0
            , e = null != (d = Iu(c, 5)) ? d : 1;
          a.has(e) || (bC(this.ya, 2 === e ? "__gpi" : "__gads", c, this.V),
            a.add(e))
        }
      this.l.notify()
    }
    ;
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var $N = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
      , aO = function() {
      for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++)
        8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0),
          c = b & 15,
          b >>= 4,
          a[d] = $N[19 == d ? c & 3 | 8 : c]);
      return a.join("")
    };
    var bO = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, t, w, B, I, H, R, U, J, T, ba, ea, da, oa) {
      Z.call(this, a, 973);
      this.la = b;
      this.M = c;
      this.U = d;
      this.J = e;
      this.N = f;
      this.K = g;
      this.ya = h;
      this.ca = k;
      this.Y = l;
      this.F = m;
      this.Dc = n;
      this.D = p;
      this.ia = r;
      this.Db = t;
      this.isSecureContext = w;
      this.fb = B;
      this.Ga = I;
      this.win = H;
      this.W = R;
      this.Wa = U;
      this.oa = ba;
      this.l = ea;
      this.A = da;
      this.na = oa;
      this.O = Y(this, U);
      this.aa = X(this, J);
      this.Aa = X(this, T);
      this.l ? NB(this, this.l.Lb) : this.D && NB(this, this.D.Lb)
    };
    _.N(bO, Z);
    bO.prototype.j = function() {
      var a = this
        , b = new ig;
      _.Kn(this, b);
      var c = this.aa.value
        , d = fH(this.N.T);
      if (_.F(Jp))
        this.O.value && O(this.na, this.O.value);
      else if (!_.F(zz)) {
        var e = new BL(this.context,Uk(),console,this.Wa);
        G(b, e)
      }
      _.F(Bz) || G(b, new CL(this.context,console,this.Wa));
      e = new wN(this.context,this.U,this.K,zf(this.N.T, Tq, 5),this.W);
      G(b, e);
      var f = new JN(this.context,this.U,this.W,this.N,this.win,e.C);
      G(b, f);
      var g = !!E(this.N.T, 6);
      e = new AN(this.context,this.U,g,this.N,this.M,this.win,c);
      G(b, e);
      var h = new bM(this.context,d,c,e.l);
      G(b, h);
      var k = new TN(this.context,this.win);
      G(b, k);
      var l, m = null != (l = this.l) ? l : this.D;
      if (this.A) {
        var n = this.A.zb;
        var p = this.A.ib;
        var r = this.A.Mc
      } else
        this.l && !_.F(mr) && (n = this.l.zb,
          p = this.l.ib,
          r = this.l.Mc);
      var t = null != m ? m : {};
      l = t.Pa;
      var w = t.Ra
        , B = t.kb
        , I = t.Za
        , H = t.tb
        , R = t.Qb
        , U = t.Rb
        , J = t.ic;
      m = t.qe;
      var T = t.Ba
        , ba = t.bb
        , ea = t.ob;
      t = t.rc;
      n = new WL(this.context,n);
      G(b, n);
      w = new NL(this.context,this.M,this.N.R,this.Db,e.l,l,w,B,I,H,J,T);
      G(b, w);
      G(b, new TL(this.context,l,R,U,w.F,w.J,this.N.R));
      _.F(oz) ? (R = new XL(this.context,d,c,this.win,this.O.value,p),
        G(b, R),
        B = R.C) : (B = new Lq,
        zB(B));
      R = window.isSecureContext && _.F(tz) ? "wbn" : "ldjh";
      var da = ++this.K.l;
      U = "wbn" === R ? aO().toLowerCase() : void 0;
      I = this.Dc;
      r = new IN(this.context,g,this.K,this.ya,this.N,R,I.ub,I.Wb,I.Vb,this.Aa.value,U,_.mf(Wh),c,this.isSecureContext,this.fb,this.win,n.C,k.C,e.l,w.l,B,_.F(nz) ? p : void 0,f.C,this.oa,m,l,T,ba,ea,t,r,w.A);
      G(b, r);
      f = new SN(this.context,this.N,_.mf(Wh),r.l,e.l);
      G(b, f);
      d = new BN(this.context,d,c);
      G(b, d);
      g = Uh(this.context, 646, function(ua, Ea, pa, va, ka, Ma) {
        var Ib = function() {
          return void cO(a, ka, ua, Ea, pa, va, Ma)
        };
        ua && _.F(ty) ? setTimeout(Uh(a.context, 646, Ib), 0) : Ib()
      });
      k = Uh(this.context, 647, function(ua, Ea, pa) {
        var va = function() {
          return void dO(a, da, pa, Ea, ua)
        };
        _.F(ty) ? setTimeout(Uh(a.context, 646, va), 0) : va()
      });
      var oa;
      "ldjh" === R ? (l = eO(this, 289, "strm_err"),
        _.F(Cy) && window.fetch || _.F(Dy) && tx(window.fetch) ? oa = new QN(this.context,g,l,k,c,e.l,h.C,r.l,f.C,d.C) : oa = new ON(this.context,g,l,k,c,e.l,h.C,r.l,f.C,d.C)) : oa = new yN(this.context,g,eO(this, 1042, "Unknown web bundle error."),k,R,(0,
        C.I)(U),c,this.W,e.l,h.C,r.l,r.O,f.C,d.C);
      G(b, oa);
      h = new GN(this.context,da,e.l,oa.C);
      G(b, h);
      h = new uN(this.context,r.D,r.l);
      G(b, h);
      h = new HN(this.context,this.F.qa,this.N,h.C);
      G(b, h);
      h = new FN(this.context,this.ca,this.win,h.C);
      G(b, h);
      h = new EN(this.context,this.N,this.Y,e.l,h.C);
      G(b, h);
      e = new CN(this.context,this.K,this.N,this.W,e.l,h.C);
      G(b, e);
      e = new DN(this.context,rf(this.win),this.win,c,oa.C);
      G(b, e);
      _.F(vy) && 1 === da && (c = new tN(this.context,this.win,c,p,oa.C),
        G(b, c));
      tg(b)
    }
    ;
    var cO = function(a, b, c, d, e, f, g) {
      var h, k, l;
      return _.Ab(function(m) {
        h = f[c];
        if (!h)
          return Yh(a.context, 646, Error("missing slot")),
            m.return();
        0 === c && (k = (0,
          C.I)(ji(a.N.R[h.getDomId()], 20)),
          xq(_.mf(Wh), "4", k));
        return Bb(m, fO(a, h, d, e, b, null == (l = g) ? void 0 : l[h.getId()]), 0)
      })
    }
      , dO = function(a, b, c, d, e) {
      var f, g, h;
      return _.Ab(function(k) {
        switch (k.j) {
          case 1:
            var l = a.context
              , m = e + 1
              , n = d.length;
            if (l.Hc) {
              var p = l.Gb;
              l = Ph(l);
              var r = new Wx;
              r = _.kd(r, 3, b);
              m = _.id(r, 1, m, 0);
              n = _.id(m, 2, n, 0);
              n = _.Rh(l, 8, Sh, n);
              ze(p, n)
            }
            f = e + 1;
          case 2:
            if (!(f < d.length)) {
              k.j = 4;
              break
            }
            if (!d[f]) {
              k.j = 3;
              break
            }
            p = new Cw;
            p = _.z(p, 8, !0);
            g = Me(p);
            h = '{"empty":' + g + "}";
            return Bb(k, cO(a, c, f, h, {
              kind: 0,
              Ta: ""
            }, d, null), 3);
          case 3:
            ++f;
            k.j = 2;
            break;
          case 4:
            AI(a.K, a.J) || a.F.fe.dispatchEvent(pI, 965, a.J),
              k.j = 0
        }
      })
    }
      , fO = function(a, b, c, d, e, f) {
      var g, h, k, l, m, n, p, r, t, w, B, I, H, R, U, J, T, ba, ea, da, oa, ua, Ea, pa;
      return _.Ab(function(va) {
        switch (va.j) {
          case 1:
            return g = new ig,
              h = new XN(a.context,c,b),
              G(g, h),
              k = new WK(a.context,h.A),
              G(g, k),
              l = new ZN(a.context,e,a.ya,h.C),
              G(g, l),
              m = new WN(a.context,b,a.Ga,h.C),
              G(g, m),
              n = new YN(a.context,b,a.K,h.C),
              G(g, n),
              p = new VN(a.context,h.C,d),
              G(g, p),
              r = [l.l.promise, m.l.promise, n.l.promise],
              tg(g),
              Bb(va, _.v.Promise.all(r), 2);
          case 2:
            if (b.G)
              return va.return();
            t = p;
            B = w = t.A;
            I = B.If;
            H = B.Qg;
            R = B.af;
            return Bb(va, I.promise, 3);
          case 3:
            return U = va.o,
              J = !!U,
              ba = null == (T = U) ? void 0 : zf(T, Ho, 5),
              Bb(va, H.promise, 4);
          case 4:
            return ea = va.o,
            J && wj("gpt_td_init", function(ka) {
              Cj(ka, a.context);
              var Ma, Ib;
              L(ka, "winner_qid", null != (Ib = null == (Ma = ba) ? void 0 : Ma.getEscapedQemQueryId()) ? Ib : "");
              var Db, Wb;
              L(ka, "xfpQid", null != (Wb = null == (Db = ba) ? void 0 : _.Vf(Db, 6)) ? Wb : "");
              L(ka, "noFill", ea ? "1" : "0");
              L(ka, "publisher_tag", "gpt")
            }, 1),
              da = C,
              oa = da.I,
              Bb(va, R.promise, 5);
          case 5:
            ua = oa.call(da, va.o),
              Ea = Jm(a.N.R[b.getDomId()]),
              ((pa = Ym("google_norender") || 5 === Ea && _.F(Uy)) || ea && !J) && !_.F(Xq) ? Bq(b, a.K, a.N, ua) : oN(a.ia, a.la, a.M, b, ea || pa, J, a.K, a.N, a.Ga, w, k.l, e, f, a.F.qa, a.Y, a.D, a.l, a.A),
              g.Ca(),
              va.j = 0
        }
      })
    }
      , eO = function(a, b, c) {
      return Uh(a.context, b, function(d) {
        d = d instanceof Error ? d : Error();
        d.message = d.message || c;
        Yh(a.context, b, d);
        AI(a.K, a.J) || a.F.fe.dispatchEvent(pI, 965, a.J)
      })
    };
    var gO = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, t, w, B, I, H, R, U, J, T, ba, ea, da) {
      Z.call(this, a, 885);
      this.la = b;
      this.F = c;
      this.N = d;
      this.K = e;
      this.ya = f;
      this.Dc = g;
      this.ca = h;
      this.U = k;
      this.l = l;
      this.J = m;
      this.A = n;
      this.ia = p;
      this.isSecureContext = r;
      this.O = t;
      this.aa = w;
      this.fb = B;
      this.Ga = I;
      this.M = H;
      this.win = R;
      this.W = U;
      this.D = ba;
      this.Y = ea;
      this.na = da;
      this.oa = X(this, J);
      NB(this, T)
    };
    _.N(gO, Z);
    gO.prototype.j = function() {
      var a = this.oa.value;
      if (a.length) {
        var b = this.K
          , c = this.l
          , d = a.length;
        b.o.has(c);
        b.o.set(c, d);
        a = _.x(a);
        for (b = a.next(); !b.done; b = a.next()) {
          c = b.value;
          var e = void 0
            , f = void 0
            , g = void 0;
          b = c.Db;
          d = c.X;
          c = new ig;
          _.Kn(this, c);
          var h = Nn(this.context, this.aa, null == (g = null != (f = this.D) ? f : this.A) ? void 0 : g.yd);
          f = h.Mb;
          g = h.df;
          _.Kn(c, h.sa);
          f = vn(this.context, this.F, this.K, fH(this.N.T), this.win, f, g);
          h = f.mb;
          _.Kn(c, f.sa);
          f = new sN(this.context,this.win,h);
          G(c, f);
          f = new pN(this.context,this.win,h);
          G(c, f);
          f = new qN(this.context,null != (e = this.M) ? e : _.Lh(150),h);
          G(c, f);
          e = new Mq(this.context,this.win,h);
          G(c, e);
          g = new rN(this.context,this.ya,this.O,e.C,h);
          G(c, g);
          b = new bO(this.context,this.la,this.F,d,this.l,this.N,this.K,this.ya,this.ca,this.U,this.J,this.Dc,this.A,this.ia,b,this.isSecureContext,this.fb,this.Ga,this.win,this.W,e.C,h,g.A,f.l,this.D,this.Y,this.na);
          G(c, b);
          tg(c)
        }
      } else
        this.J.fe.dispatchEvent(pI, 965, this.l)
    }
    ;
    var hO = new _.v.Map
      , iO = function(a, b, c, d) {
      d = void 0 === d ? hO : d;
      Z.call(this, a, 834);
      this.D = b;
      this.X = c;
      this.l = d;
      this.A = W(this);
      this.F = _.v.Promise.all(this.X.map(this.J, this))
    };
    _.N(iO, Z);
    iO.prototype.j = function() {
      var a = this, b;
      return _.Ab(function(c) {
        if (1 == c.j)
          return Bb(c, a.F, 2);
        b = c.o;
        xB(a.A, b.filter(function(d) {
          return null != d && !d.G
        }));
        c.j = 0
      })
    }
    ;
    iO.prototype.J = function(a) {
      var b = this, c, d;
      return _.Ab(function(e) {
        if (1 == e.j) {
          if (a.G)
            return e.return();
          b.l.has(a) || (b.l.set(a, Gr(a)),
            _.fo(a, function() {
              return void b.l.delete(a)
            }));
          c = (0,
            C.I)(b.l.get(a));
          return Bb(e, c(), 2)
        }
        d = e.o;
        if (b.G)
          return e.return();
        if (d)
          return e.return(a);
        kl(b.D, HJ(a.getAdUnitPath()));
        return e.return()
      })
    }
    ;
    var jO = function(a, b, c, d, e) {
      Z.call(this, a, 847);
      this.K = b;
      this.Ha = c;
      this.A = d;
      this.l = W(this);
      this.D = X(this, e)
    };
    _.N(jO, Z);
    jO.prototype.j = function() {
      var a = this.D.value;
      if (a.length) {
        for (var b = _.x(a), c = b.next(); !c.done; c = b.next())
          BI(this.K, c.value);
        this.A ? xB(this.l, []) : this.Ha ? (b = Ih(a[0].getAdUnitPath()),
          a = kO(a, b),
          O(this.l, a)) : (a = a.map(function(d) {
          return {
            Db: Ih(d.getAdUnitPath()),
            X: [d]
          }
        }),
          O(this.l, a))
      } else
        xB(this.l, [])
    }
    ;
    var kO = function(a, b) {
      var c = [];
      a = Da(a, function(f) {
        return Ih(f.getAdUnitPath())
      });
      a = _.x(_.u(Object, "entries").call(Object, a));
      for (var d = a.next(); !d.done; d = a.next()) {
        var e = _.x(d.value);
        d = e.next().value;
        e = e.next().value;
        d === b ? c.unshift({
          Db: d,
          X: e
        }) : c.push({
          Db: d,
          X: e
        })
      }
      return c
    };
    var lO = function(a, b, c) {
      Z.call(this, a, 845);
      this.R = b;
      this.l = W(this);
      this.A = W(this);
      this.D = X(this, c)
    };
    _.N(lO, Z);
    lO.prototype.j = function() {
      var a = this
        , b = function(d) {
        return !!qi(a.R[d.getDomId()]).length
      }
        , c = this.D.value;
      xB(this.l, c.filter(b));
      xB(this.A, c.filter(Ks(b)))
    }
    ;
    var mO = function(a, b, c, d, e) {
      Z.call(this, a, 864);
      this.K = b;
      this.N = c;
      this.W = d;
      this.l = LB(this);
      this.A = X(this, e)
    };
    _.N(mO, Z);
    mO.prototype.j = function() {
      for (var a = _.x(this.A.value), b = a.next(); !b.done; b = a.next())
        if (b = b.value,
          _.zq(this.K, b)) {
          var c = this.N
            , d = c.T;
          c = c.R[b.getDomId()];
          on(c, d) && pn(b, this.W, c, d);
          BI(this.K, b);
          var e = void 0
            , f = void 0;
          null != (e = null != (f = vi(c, 10)) ? f : E(d, 11)) && e && pn(b, this.W, c, d)
        }
      this.l.notify()
    }
    ;
    var nO = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, t, w, B, I, H, R, U) {
      _.S.call(this);
      var J = this;
      this.context = a;
      this.O = b;
      this.B = c;
      this.K = d;
      this.ya = e;
      this.qa = f;
      this.P = g;
      this.D = h;
      this.M = k;
      this.l = l;
      this.isSecureContext = m;
      this.L = n;
      this.J = p;
      this.fb = r;
      this.Ga = t;
      this.A = w;
      this.W = B;
      this.win = I;
      this.H = H;
      this.F = R;
      this.U = U;
      this.j = new _.v.Map;
      this.m = new gI(a);
      _.Kn(this, this.m);
      this.m.Z(pI, function(T) {
        T = T.detail;
        var ba = J.j.get(T);
        ba && (J.j.delete(T),
          ba.Ca())
      })
    };
    _.N(nO, _.S);
    var oO = function(a, b, c, d) {
      var e = ++a.K.B;
      a.j.has(e);
      var f = new ig;
      a.j.set(e, f);
      b = new iO(a.context,a.B,b);
      G(f, b);
      var g = new lO(a.context,d.R,b.A);
      G(f, g);
      b = new jO(a.context,a.K,!!E(d.T, 6),Ym("google_nofetch"),g.l);
      G(f, b);
      g = new mO(a.context,a.K,d,document,g.A);
      G(f, g);
      a = new gO(a.context,a.O,a.B,d,a.K,a.ya,c,a.P,a.D,e,{
        fe: a.m,
        qa: a.qa
      },a.l,a.M,a.isSecureContext,a.L,a.J,a.fb,a.Ga,a.A,a.win,a.W,b.l,g.l,a.H,a.F,a.U);
      G(f, a);
      tg(f)
    };
    var pO = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, t, w, B) {
      EM.call(this, c, k);
      this.context = a;
      this.K = d;
      this.H = new _.v.Set;
      this.L = {};
      this.J = new nN(a,d);
      this.P = new nO(a,b,c,d,new _.ZB(window,_.F(Fy)),this.l,n,e,this.J,f,g,h,l,m,p,r,document,window,t,w,B);
      _.Kn(this, this.P)
    };
    _.N(pO, EM);
    pO.prototype.getName = function() {
      return "publisher_ads"
    }
    ;
    pO.prototype.display = function(a, b, c, d, e) {
      d = void 0 === d ? "" : d;
      e = void 0 === e ? "" : e;
      var f = "";
      if (d)
        if (_.qa(d) && 1 == d.nodeType) {
          var g = d;
          f = g.id
        } else
          f = d;
      Bp(this);
      var h = Sl(c, this.context, this.j, a, b, f)
        , k = h.slotId;
      h = h.hb;
      if (k && h) {
        g && !f && (g.id = k.getDomId());
        this.slotAdded(k, h);
        h.setClickUrl(e);
        var l;
        up(this, null != (l = g) ? l : k.getDomId(), c)
      } else
        kl(this.j, Ok("PubAdsService.display", [a, b, d]))
    }
    ;
    var up = function(a, b, c) {
      var d = qO(b, c);
      c = d.slotId;
      var e = d.jg;
      d = d.kg;
      if (c) {
        if (b = pj(),
        (d = Yn(b, c.getDomId())) && !E(d, 19))
          if (e && b.m.set(c, e),
          fj(c) || ui(Jm(d))) {
            if (_.z(d, 19, !0),
              e = Gi(b.j, b.o),
              a.B) {
              Bp(a);
              a.B && vI(a.K, c);
              a.j.info(cJ());
              b = e.T;
              d = e.R;
              var f = E(b, 6);
              if (f || !a.K.Ab(c))
                f && (f = fj(c)) && c.dispatchEvent(jI, 778, f),
                E(b, 4) && (d = d[c.getDomId()],
                on(d, b) && !a.K.Ab(c) && pn(c, document, d, b)),
                  rO(a, e, c)
            }
          } else
            kl(a.j, SI(String(y(d, 1)), String(y(d, 2))), c)
      } else
        d ? a.j.error(TI(d)) : a.j.error(Ok("googletag.display", [String(b)]))
    }
      , fK = function(a, b, c) {
      var d = void 0 === d ? document : d;
      var e;
      null != (e = c.R[b.getDomId()]) && _.z(e, 19, !0);
      e = {
        id: Ow(b.getDomId())
      };
      pb(d, $g(e));
      fj(b, d) ? (Bp(a),
        vI(a.K, b),
        rO(a, c, b)) : wj("gpt_pb_write", function(f) {
        Cj(f, a.context)
      })
    };
    pO.prototype.slotAdded = function(a, b) {
      var c = this;
      E(b, 17) || this.B && vI(this.K, a);
      this.l.dispatchEvent(mI, 724, {
        Ee: a.getDomId(),
        R: b
      });
      var d = 0;
      a.Z(Aq, function(e) {
        var f = e.detail;
        e = f.size;
        f = f.isEmpty;
        var g = new nM(a,"publisher_ads");
        f && (g.isEmpty = !0);
        var h = a.j.getResponseInformation();
        e && h && (g.size = [e.width, e.height],
          g.sourceAgnosticCreativeId = h.sourceAgnosticCreativeId,
          g.sourceAgnosticLineItemId = h.sourceAgnosticLineItemId,
          g.isBackfill = h.isBackfill,
          g.creativeId = h.creativeId,
          g.lineItemId = h.lineItemId,
          g.creativeTemplateId = h.creativeTemplateId,
          g.advertiserId = h.advertiserId,
          g.campaignId = h.campaignId,
          g.yieldGroupIds = h.yieldGroupIds,
          g.companyIds = h.companyIds);
        _.F(Iy) && (e = new $k("gpt_sree"),
          Cj(e, c.context),
          L(e, "sid", c.context.pvsid),
          L(e, "adk", vr(c.K, a)),
          L(e, "nf", f),
          L(e, "rc", zI(c.K, a)),
          L(e, "sret", ((_.hf(_.q) || 0) - d).toFixed(3)),
          bl(e));
        c.l.dispatchEvent("slotRenderEnded", 708, g)
      });
      a.Z(kI, function(e) {
        var f, g;
        d = null != (g = null != (f = e.timeStamp) ? f : _.hf(_.q)) ? g : 0;
        c.l.dispatchEvent("slotResponseReceived", 709, new tM(a,c.getName()))
      });
      EM.prototype.slotAdded.call(this, a, b)
    }
    ;
    var rO = function(a, b, c) {
      var d = sO(a, b, c);
      tO(a, d, b, {
        ub: 1
      });
      b = c.getAdUnitPath();
      if (c = a.L[b]) {
        c = _.x(c);
        for (d = c.next(); !d.done; d = c.next())
          d = d.value,
            tO(a, d.X, d.N, d.Dc);
        delete a.L[b]
      }
    }
      , sO = function(a, b, c) {
      var d = b.T;
      b = b.R;
      if (E(d, 4))
        return [];
      var e;
      return !E(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : E(e, 17)) ? (a.H.add(c),
        _.fo(c, function() {
          return void a.H.delete(c)
        }),
        [c]) : a.m.filter(function(f) {
        if (a.H.has(f))
          return !1;
        a.H.add(f);
        _.fo(f, function() {
          return void a.H.delete(f)
        });
        return !0
      })
    }
      , tO = function(a, b, c, d) {
      a.j.info(jJ());
      if (uO(a, b, d, c) && 1 !== d.ub)
        for (b = _.x(b),
               d = b.next(); !d.done; d = b.next())
          d = d.value.getDomId(),
            a.l.dispatchEvent(nI, 725, {
              Ee: d,
              R: c.R[d]
            })
    }
      , uO = function(a, b, c, d) {
      b = b.filter(function(e) {
        if (!_.zq(a.K, e))
          return !1;
        var f = d.R[e.getDomId()];
        5 !== Jm(f) && 4 !== Jm(f) || _.wI(a.K, e);
        return !0
      });
      if (!b.length)
        return null;
      oO(a.P, b, c, d);
      return b
    };
    pO.prototype.refresh = function(a, b, c) {
      b = vO(this, b);
      if (!b.length)
        return !1;
      wO(this, a, b, null != c ? c : {
        ub: 2
      });
      return !0
    }
    ;
    var vO = function(a, b) {
      return b.filter(function(c, d) {
        if (!c.G)
          return !0;
        kl(a.j, mJ(String(d)));
        return !1
      })
    }
      , wO = function(a, b, c, d) {
      var e = c[0], f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
      if (a.B) {
        var h = {};
        e = _.x(c);
        for (f = e.next(); !f.done; h = {
          ec: h.ec
        },
          f = e.next())
          h.ec = f.value,
            a.H.add(h.ec),
            _.fo(h.ec, function(k) {
              return function() {
                return void a.H.delete(k.ec)
              }
            }(h));
        tO(a, c, b, d)
      } else
        c.length && E(b.T, 6) ? (kl(a.j, iJ(g), e),
          e = e.getAdUnitPath(),
          f = null != (h = a.L[e]) ? h : [],
          f.push({
            X: c,
            N: b,
            Dc: d
          }),
          a.L[e] = f) : kl(a.j, gJ(g), e)
    };
    pO.prototype.F = function() {
      var a = this
        , b = pj().j;
      if (E(b, 6))
        for (var c = _.x(this.m), d = c.next(); !d.done; d = c.next())
          this.B && vI(this.K, d.value);
      mK(this, b);
      this.l.Z("rewardedSlotClosed", function(e) {
        var f = e.detail.slot;
        e = _.u(a.m, "find").call(a.m, function(g) {
          return f === g.j
        });
        xO(a, [e], pj().j, pj().o, a.K)
      });
      Vk()
    }
    ;
    pO.prototype.destroySlots = function(a) {
      a = EM.prototype.destroySlots.call(this, a);
      if (a.length && this.B) {
        var b = pj();
        yO(this, a, b.j, b.o)
      }
      return a
    }
    ;
    var oK = function(a, b, c, d) {
      if (!a.B)
        return kl(a.j, hJ(), d[0]),
          !1;
      var e = vO(a, d);
      if (!e.length)
        return kl(a.j, Ok("PubAdsService.clear", [d].filter(function(f) {
          return void 0 !== f
        }))),
          !1;
      a.j.info(kJ());
      yO(a, e, b, c);
      return !0
    }
      , yO = function(a, b, c, d) {
      for (var e = _.x(b), f = e.next(); !f.done; f = e.next())
        sI(a.K, f.value);
      xO(a, b, c, d, a.K)
    };
    pO.prototype.forceExperiment = function(a) {
      a = Number(a);
      0 < a && _.mf(nf).o(a)
    }
    ;
    var xO = function(a, b, c, d, e) {
      var f = void 0 === f ? window : f;
      b = _.x(b);
      for (var g = b.next(); !g.done; g = b.next()) {
        g = g.value;
        DI(a.J.K, g);
        var h = d[g.getDomId()];
        on(h, c) && pn(g, f.document, h, c);
        BI(e, g)
      }
    }
      , nK = function(a, b, c, d) {
      if (_.F(hy)) {
        if ("string" !== typeof b || "string" !== typeof c) {
          kl(a.j, Ok("PubAdsService.setVideoContent", [b, c]));
          return
        }
        var e = _.z(d, 21, !0);
        b = _.z(e, 22, b);
        _.z(b, 23, c)
      } else
        e = _.z(d, 21, !0),
          b = _.z(e, 22, String(null != b ? b : "")),
          _.z(b, 23, String(null != c ? c : ""));
      mK(a, d)
    }
      , pK = function(a, b) {
      if (!a.B)
        return null;
      var c, d;
      return {
        vid: null != (c = y(b, 22)) ? c : "",
        cmsid: null != (d = y(b, 23)) ? d : ""
      }
    }
      , mK = function(a, b) {
      E(b, 21) && a.B && _.z(b, 29, Dx())
    }
      , qO = function(a, b) {
      var c = "";
      if ("string" === typeof a)
        c = a,
          b = LK(b, c);
      else if (_.qa(a) && 1 == a.nodeType) {
        var d = a;
        c = d.id;
        b = LK(b, c)
      } else
        b = (_.D = [].concat(_.xe(b.X)),
          _.u(_.D, "find")).call(_.D, function(e) {
          return e.j === a
        });
      return {
        slotId: b,
        jg: d,
        kg: c
      }
    };
    var zO = _.P(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"])
      , AO = _.P(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]);
    var BO = ds(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"])
      , CO = _.Ls(function() {
      zx("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
    })
      , EO = function(a, b) {
      var c = this;
      this.K = a;
      this.j = new _.v.Map;
      this.X = new _.v.Set;
      b.o = function(d) {
        return DO(c, d)
      }
    };
    EO.prototype.defineSlot = function(a, b, c, d, e) {
      a = Sl(this, a, b, c, d, e);
      var f = a.slotId;
      if (f)
        return f.j;
      a.bd || b.error(Ok("googletag.defineSlot", [c, d, e]));
      return null
    }
    ;
    var Sl = function(a, b, c, d, e, f, g) {
      return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
        nb: f,
        tf: void 0 === g ? !1 : g
      }) : {}
    };
    EO.prototype.add = function(a, b, c, d, e) {
      var f = this
        , g = void 0 === e ? {} : e;
      e = g.nb;
      var h = void 0 === g.format ? 0 : g.format
        , k = void 0 === g.tf ? !1 : g.tf;
      g = void 0 === g.pb ? !1 : g.pb;
      try {
        if (!(new RegExp(_.u(String, "raw").call(String, BO),"u")).test(c))
          return b.error(VI(c)),
            {
              bd: !0
            }
      } catch (m) {}
      if (g = Rm(h, g))
        return Dm(b, g, h, c),
          {};
      k && CO();
      h = this.j.get(c) || Number(k);
      b = FO(this, a, b, c, h, d, e || "gpt_unit_" + c + "_" + h);
      a = b.hb;
      var l = b.slotId;
      b = b.bd;
      if (!l)
        return {
          bd: b
        };
      this.j.set(c, h + 1);
      this.X.add(l);
      _.fo(l, function() {
        return void f.X.delete(l)
      });
      QG(c);
      return {
        slotId: l,
        hb: a
      }
    }
    ;
    var LK = function(a, b) {
      a = _.x(a.X);
      for (var c = a.next(); !c.done; c = a.next())
        if (c = c.value,
        c.getDomId() === b)
          return c
    }
      , sp = function(a) {
      a = _.x(a);
      for (var b = a.next(); !b.done; b = a.next())
        b.value.Ca()
    }
      , FO = function(a, b, c, d, e, f, g) {
      var h = LK(a, g);
      if (h)
        return c.error(UI(g, d, h.getAdUnitPath())),
          {
            bd: !0
          };
      var k = new tK;
      uK(_.z(k, 1, d), g);
      vK(k, rm(f));
      hH(k);
      var l = new Ge(b,d,e,g);
      hK(l, zm(b, c, l));
      _.fo(l, function() {
        var m = pj()
          , n = l.getDomId();
        delete m.o[n];
        m.m.delete(l);
        m = l.getAdUnitPath();
        m = Ih(m);
        var p;
        n = (null != (p = gi.get(m)) ? p : 0) - 1;
        0 >= n ? gi.delete(m) : gi.set(m, n);
        c.info(tJ(l.toString()), l);
        (p = Hk.get(l)) && Ik.delete(p);
        Hk.delete(l)
      });
      c.info(II(l.toString()), l);
      l.Z(lI, function(m) {
        m = m.detail.yh;
        c.info(JI(l.getAdUnitPath()), l);
        iB(_.mf(Wh), "7", 9, zI(a.K, l), 0, m)
      });
      l.Z(kI, function(m) {
        var n = m.detail;
        c.info(KI(l.getAdUnitPath()), l);
        var p;
        m = _.mf(Wh);
        var r = ji(k, 20);
        n = null != (p = n.getEscapedQemQueryId()) ? p : "";
        m.j && (_.q.google_timing_params = _.q.google_timing_params || {},
          _.q.google_timing_params["qqid." + r] = n)
      });
      l.Z(yq, function() {
        return void c.info(LI(l.getAdUnitPath()), l)
      });
      l.Z(Aq, function() {
        return void c.info(MI(l.getAdUnitPath()), l)
      });
      return {
        hb: k,
        slotId: l
      }
    }
      , DO = function(a, b) {
      var c = new RegExp("(^|,|/)" + b + "($|,|/)");
      return [].concat(_.xe(a.X)).some(function(d) {
        return c.test(Ih(d.getAdUnitPath()))
      })
    };
    var Pr = "2023030701";
    (function(a, b) {
        var c = null != a ? a : {
          Ma: Qr(),
          qb: "",
          Gb: new _.Ur(0),
          Gf: !0,
          Ye: 1
        };
        try {
          var d = Uk();
          (0,
            C.vf)(!_.mf(Jh).j);
          _.u(Object, "assign").call(Object, Kh, d._vars_);
          d._vars_ = Kh;
          if (d.evalScripts)
            d.evalScripts();
          else {
            EH();
            try {
              Pg()
            } catch (pa) {
              Yh(c, 408, pa)
            }
            nn();
            var e = new KL;
            try {
              Lg(e.H),
                pf(13),
                pf(3)
            } catch (pa) {
              Yh(c, 408, pa)
            }
            var f = Sr(e)
              , g = null != a ? a : Vr(f)
              , h = null != b ? b : new JL(g);
            Th(g);
            wj("gpt_fifwin", function(pa) {
              Cj(pa, g)
            }, d.fifWin ? .01 : 0);
            var k = new rI, l = new EO(k,e), m = new LM(g), n = _.Lh(260), p = new DL(g,l,pj(),h,k,n,e,m), r = nx(), t;
            _.F(mr) && (t = Rp(g));
            var w = new gI(g), B = new gI(g), I = new gI(g), H;
            n && (H = EL(p, w));
            var R = _.Lh(221), U = new OM, J;
            _.F(Oy) && (J = new Dp);
            var T, ba, ea = null != (ba = null == (T = H) ? void 0 : T.Wa) ? ba : new Lq, da;
            _.F(Ny) && (da = _.Lh(150));
            var oa = new pO(g,l,h,k,m,_.F(wy) ? void 0 : p,r,e,w,n,R,U,J,da,H,t,ea);
            _.F(Dz) && new MK(g,w,k,l);
            var ua = pj().j;
            Kp(g, h, oa, ua, l, B, I, e, J, ea);
            var Ea = Uh(g, 77, function() {
              var pa = d.cmd;
              if (!pa || Array.isArray(pa)) {
                var va = new NK(h);
                d.cmd = Lk(g, va);
                null != pa && pa.length && va.push.apply(va, pa)
              }
            });
            d.fifWin && "complete" !== document.readyState ? _.yb(window, "load", function() {
              return window.setTimeout(Ea, 0)
            }) : Ea();
            pp();
            if (_.F(Dz) || _.mf(Wh).j)
              Or(),
                cl(document, _.F(Fz) ? _.A(zO) : _.A(AO));
            jq(g, h);
            Yk(g)
          }
        } catch (pa) {
          Yh(c, 106, pa)
        }
      }
    )();
    var IO = function(a, b) {
      var c = this;
      this.m = a;
      this.j = !1;
      this.G = b;
      this.o = this.G.pa(264, function(d) {
        c.j && (GO || (d = Date.now()),
          c.m(d),
          GO ? HO.call(_.q, c.o) : _.q.setTimeout(c.o, 17))
      })
    };
    IO.prototype.start = function() {
      this.j || (this.j = !0,
        GO ? HO.call(_.q, this.o) : this.o(0))
    }
    ;
    IO.prototype.stop = function() {
      this.j = !1
    }
    ;
    var HO = _.q.requestAnimationFrame || _.q.webkitRequestAnimationFrame
      , GO = !!HO && !/'iPhone'/.test(_.q.navigator.userAgent);
    var JO = function(a, b, c, d) {
      this.o = a;
      this.ga = b;
      this.P = c;
      this.progress = 0;
      this.G = null;
      this.B = !1;
      this.j = [];
      this.m = null;
      this.l = new IO((0,
        _.Bs)(this.D, this),d)
    };
    JO.prototype.D = function(a) {
      if (this.B)
        this.l.stop();
      else {
        null === this.G && (this.G = a);
        this.progress = (a - this.G) / this.P;
        1 <= this.progress && (this.progress = 1);
        a = this.m ? this.m(this.progress) : this.progress;
        this.j = [];
        for (var b = 0; b < this.o.length; b++)
          this.j.push((this.ga[b] - this.o[b]) * a + this.o[b]);
        this.L();
        1 == this.progress && (this.l.stop(),
          this.H())
      }
    }
    ;
    JO.prototype.H = function() {}
    ;
    JO.prototype.L = function() {}
    ;
    _.KO = function(a) {
      a.B = !1;
      a.l.start()
    }
    ;
    JO.prototype.stop = function() {
      this.B = !0
    }
    ;
    _.LO = function(a) {
      return a * a * a
    }
    ;
    _.MO = function(a) {
      a = 1 - a;
      return 1 - a * a * a
    }
    ;
    _.NO = function(a, b, c, d, e, f, g, h) {
      JO.call(this, [b], [c], d, f);
      this.F = a;
      this.J = e;
      this.A = g ? g : null;
      this.m = h || null
    }
    ;
    _.N(_.NO, JO);
    _.NO.prototype.L = function() {
      var a = {};
      a[this.J] = this.j[0] + "px";
      _.Nx(this.F, a)
    }
    ;
    _.NO.prototype.H = function() {
      this.A && this.A()
    }
    ;
  }
).call(this, {});

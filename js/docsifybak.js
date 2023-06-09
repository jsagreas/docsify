! function() {
    function e(e) {

        var t = Object.create(null);
        return function(n) {
            var a = i(n) ? n : JSON.stringify(n);
            return t[a] || (t[a] = e(n))
        }
    }
    var t = e(function(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }),
        n = Object.assign || function(e) {
            for (var t = arguments, n = Object.prototype.hasOwnProperty, i = 1; i < arguments.length; i++) {
                var a = Object(t[i]);
                for (var r in a) n.call(a, r) && (e[r] = a[r])
            }
            return e
        };

    function i(e) {
        return "string" == typeof e || "number" == typeof e
    }

    function a() {}

    function r(e) {
        return "function" == typeof e
    }
    var o = n({
            el: "#app",
            repo: "",
            maxLevel: 6,
            subMaxLevel: 0,
            loadSidebar: null,
            loadNavbar: null,
            homepage: "README.md",
            coverpage: "",
            basePath: "",
            auto2top: !1,
            name: "",
            themeColor: "",
            nameLink: window.location.pathname,
            autoHeader: !1,
            executeScript: null,
            noEmoji: !1,
            ga: "",
            ext: ".md",
            mergeNavbar: !1,
            formatUpdated: "",
            externalLinkTarget: "_blank",
            routerMode: "hash",
            noCompileLinks: [],
            showLevel: !0,
            tocLevel: 3
        }, window.$docsify),
        s = document.currentScript || [].slice.call(document.getElementsByTagName("script")).filter(function(e) {
            return /docsify\./.test(e.src)
        })[0];
    if (s) {
        for (var l in o) {
            var c = s.getAttribute("data-" + t(l));
            i(c) && (o[l] = "" === c || c)
        }!0 === o.loadSidebar && (o.loadSidebar = "_sidebar" + o.ext), !0 === o.loadNavbar && (o.loadNavbar = "_navbar" + o.ext), !0 === o.coverpage && (o.coverpage = "_coverpage" + o.ext), !0 === o.repo && (o.repo = ""), !0 === o.name && (o.name = "")
    }
    window.$docsify = o;

    function d(e, t, n, i) {
        void 0 === i && (i = a);
        var r = e._hooks[t],
            o = function(e) {
                var t = r[e];
                if (e >= r.length) i(n);
                else if ("function" == typeof t)
                    if (2 === t.length) t(n, function(t) {
                        n = t, o(e + 1)
                    });
                    else {
                        var a = t(n);
                        n = void 0 !== a ? a : n, o(e + 1)
                    }
                else o(e + 1)
            };
        o(0)
    }
    var u = !0,
        p = u && document.body.clientWidth <= 600,
        g = u && window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/),
        m = {};

    function h(e, t) {
        if (void 0 === t && (t = !1), "string" == typeof e) {
            if (void 0 !== window.Vue) return E(e);
            e = t ? E(e) : m[e] || (m[e] = E(e))
        }
        return e
    }
    var f = u && document,
        b = u && f.body,
        S = u && f.head;

    function E(e, t) {
        return t ? e.querySelector(t) : f.querySelector(e)
    }

    function y(e, t) {
        //导航宽度
        var  width=document.getElementsByTagName('section')[0].offsetWidth;
        document.getElementsByTagName('nav')[0].style.width=width+"px";
    
        return [].slice.call(t ? e.querySelectorAll(t) : f.querySelectorAll(e))
    }

    function v(e, t) {
        return e = f.createElement(e), t && (e.innerHTML = t), e
    }

    function k(e, t) {
        return e.appendChild(t)
    }

    function w(e, t) {
        return e.insertBefore(t, e.children[0])
    }

    function T(e, t, n) {
        r(t) ? window.addEventListener(e, t) : e.addEventListener(t, n)
    }

    function _(e, t, n) {
        r(t) ? window.removeEventListener(e, t) : e.removeEventListener(t, n)
    }

    function A(e, t, n) {
        e && e.classList[n ? t : "toggle"](n || t)
    }
    var C = Object.freeze({
        getNode: h,
        $: f,
        body: b,
        head: S,
        find: E,
        findAll: y,
        create: v,
        appendTo: k,
        before: w,
        on: T,
        off: _,
        toggleClass: A,
        style: function(e) {
            k(S, v("style", e))
        }
    });

    function x(e, t) {
        return void 0 === t && (t = ""), e && e.length ? (e.forEach(function(e) {
            t += '<li><a class="section-link" href="' + e.slug + '">' + e.title + "</a></li>", e.children && (t += '<li><ul class="children">' + x(e.children) + "</li></ul>")
        }), t) : ""
    }

    function I(e, t) {
        return '<p class="' + e + '">' + t.slice(5).trim() + "</p>"
    }
    var N, L;

    function R(e) {
        var t, n = e.loaded,
            i = e.total,
            a = e.step;
        !N && function() {
            var e = v("div");
            e.classList.add("progress"), k(b, e), N = e
        }(), t = a ? (t = parseInt(N.style.width || 0, 10) + a) > 80 ? 80 : t : Math.floor(n / i * 100), N.style.opacity = 1, N.style.width = t >= 95 ? "100%" : t + "%", t >= 95 && (clearTimeout(L), L = setTimeout(function(e) {
            N.style.opacity = 0, N.style.width = "0%"
        }, 200))
    }
    var O = {};

    function P(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = {});
        var i = new XMLHttpRequest,
            r = function() {
                i.addEventListener.apply(i, arguments)
            },
            o = O[e];
        if (o) return {
            then: function(e) {
                return e(o.content, o.opt)
            },
            abort: a
        };
        i.open("GET", e);
        for (var s in n) i.setRequestHeader(s, n[s]);
        return i.send(), {
            then: function(n, o) {
                if (void 0 === o && (o = a), t) {
                    var s = setInterval(function(e) {
                        return R({
                            step: Math.floor(5 * Math.random() + 1)
                        })
                    }, 500);
                    r("progress", R), r("loadend", function(e) {
                        R(e), clearInterval(s)
                    })
                }
                r("error", o), r("load", function(t) {
                    var a = t.target;
                    if (a.status >= 400) o(a);
                    else {
                        var r = O[e] = {
                            content: a.response,
                            opt: {
                                updatedAt: i.getResponseHeader("last-modified")
                            }
                        };
                        n(r.content, r.opt)
                    }
                })
            },
            abort: function(e) {
                return 4 !== i.readyState && i.abort()
            }
        }
    }

    function D(e, t) {
        e.innerHTML = e.innerHTML.replace(/var\(\s*--theme-color.*?\)/g, t)
    }
    var M = /([^{]*?)\w(?=\})/g,
        F = {
            YYYY: "getFullYear",
            YY: "getYear",
            MM: function(e) {
                return e.getMonth() + 1
            },
            DD: "getDate",
            HH: "getHours",
            mm: "getMinutes",
            ss: "getSeconds"
        };
    var B = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function U(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var G = U(function(e, t) {
        (function() {
            var t = {
                newline: /^\n+/,
                code: /^( {4}[^\n]+\n*)+/,
                fences: p,
                hr: /^( *[-*_]){3,} *(?:\n+|$)/,
                heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
                nptable: p,
                lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
                list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
                table: p,
                paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
                text: /^[^\n]+/
            };
            t.bullet = /(?:[*+-]|\d+\.)/, t.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, t.item = l(t.item, "gm")(/bull/g, t.bullet)(), t.list = l(t.list)(/bull/g, t.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + t.def.source + ")")(), t.blockquote = l(t.blockquote)("def", t.def)(), t._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", t.html = l(t.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, t._tag)(), t.paragraph = l(t.paragraph)("hr", t.hr)("heading", t.heading)("lheading", t.lheading)("blockquote", t.blockquote)("tag", "<" + t._tag)("def", t.def)(), t.normal = g({}, t), t.gfm = g({}, t.normal, {
                fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
                paragraph: /^/,
                heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
            }), t.gfm.paragraph = l(t.paragraph)("(?!", "(?!" + t.gfm.fences.source.replace("\\1", "\\2") + "|" + t.list.source.replace("\\1", "\\3") + "|")(), t.tables = g({}, t.gfm, {
                nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
                table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
            });

            function n(e) {
                this.tokens = [], this.tokens.links = {}, this.options = e || m.defaults, this.rules = t.normal, this.options.gfm && (this.options.tables ? this.rules = t.tables : this.rules = t.gfm)
            }
            n.rules = t, n.lex = function(e, t) {
                return new n(t).lex(e)
            }, n.prototype.lex = function(e) {
                return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
            }, n.prototype.token = function(e, n, i) {
                var a, r, o, s, l, c, d, u, p;
                for (e = e.replace(/^ +$/gm, ""); e;)
                    if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({
                            type: "space"
                        })), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({
                        type: "code",
                        text: this.options.pedantic ? o : o.replace(/\n+$/, "")
                    });
                    else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                    type: "code",
                    lang: o[2],
                    text: o[3] || ""
                });
                else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                    type: "heading",
                    depth: o[1].length,
                    text: o[2]
                });
                else if (n && (o = this.rules.nptable.exec(e))) {
                    for (e = e.substring(o[0].length), c = {
                            type: "table",
                            header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                            align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: o[3].replace(/\n$/, "").split("\n")
                        }, u = 0; u < c.align.length; u++) /^ *-+: *$/.test(c.align[u]) ? c.align[u] = "right" : /^ *:-+: *$/.test(c.align[u]) ? c.align[u] = "center" : /^ *:-+ *$/.test(c.align[u]) ? c.align[u] = "left" : c.align[u] = null;
                    for (u = 0; u < c.cells.length; u++) c.cells[u] = c.cells[u].split(/ *\| */);
                    this.tokens.push(c)
                } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                    type: "heading",
                    depth: "=" === o[2] ? 1 : 2,
                    text: o[1]
                });
                else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                    type: "hr"
                });
                else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                    type: "blockquote_start"
                }), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, n, !0), this.tokens.push({
                    type: "blockquote_end"
                });
                else if (o = this.rules.list.exec(e)) {
                    for (e = e.substring(o[0].length), s = o[2], this.tokens.push({
                            type: "list_start",
                            ordered: s.length > 1
                        }), a = !1, p = (o = o[0].match(this.rules.item)).length, u = 0; u < p; u++) d = (c = o[u]).length, ~(c = c.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf("\n ") && (d -= c.length, c = this.options.pedantic ? c.replace(/^ {1,4}/gm, "") : c.replace(new RegExp("^ {1," + d + "}", "gm"), "")), this.options.smartLists && u !== p - 1 && (s === (l = t.bullet.exec(o[u + 1])[0]) || s.length > 1 && l.length > 1 || (e = o.slice(u + 1).join("\n") + e, u = p - 1)), r = a || /\n\n(?!\s*$)/.test(c), u !== p - 1 && (a = "\n" === c.charAt(c.length - 1), r || (r = a)), this.tokens.push({
                        type: r ? "loose_item_start" : "list_item_start"
                    }), this.token(c, !1, i), this.tokens.push({
                        type: "list_item_end"
                    });
                    this.tokens.push({
                        type: "list_end"
                    })
                } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                    type: this.options.sanitize ? "paragraph" : "html",
                    pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]),
                    text: o[0]
                });
                else if (!i && n && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = {
                    href: o[2],
                    title: o[3]
                };
                else if (n && (o = this.rules.table.exec(e))) {
                    for (e = e.substring(o[0].length), c = {
                            type: "table",
                            header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                            align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                        }, u = 0; u < c.align.length; u++) /^ *-+: *$/.test(c.align[u]) ? c.align[u] = "right" : /^ *:-+: *$/.test(c.align[u]) ? c.align[u] = "center" : /^ *:-+ *$/.test(c.align[u]) ? c.align[u] = "left" : c.align[u] = null;
                    for (u = 0; u < c.cells.length; u++) c.cells[u] = c.cells[u].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                    this.tokens.push(c)
                } else if (n && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({
                    type: "paragraph",
                    text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
                });
                else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                    type: "text",
                    text: o[0]
                });
                else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                return this.tokens
            };
            var i = {
                escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
                autolink: /^<([^ <>]+(@|:\/)[^ <>]+)>/,
                url: p,
                tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,
                link: /^!?\[(inside)\]\(href\)/,
                reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
                nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
                strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
                em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
                code: /^(`+)([\s\S]*?[^`])\1(?!`)/,
                br: /^ {2,}\n(?!\s*$)/,
                del: p,
                text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
            };
            i._inside = /(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/, i._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, i.link = l(i.link)("inside", i._inside)("href", i._href)(), i.reflink = l(i.reflink)("inside", i._inside)(), i.normal = g({}, i), i.pedantic = g({}, i.normal, {
                strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
            }), i.gfm = g({}, i.normal, {
                escape: l(i.escape)("])", "~|])")(),
                url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
                del: /^~~(?=\S)([\s\S]*?\S)~~/,
                text: l(i.text)("]|", "~]|")("|", "|https?://|")()
            }), i.breaks = g({}, i.gfm, {
                br: l(i.br)("{2,}", "*")(),
                text: l(i.gfm.text)("{2,}", "*")()
            });

            function a(e, t) {
                if (this.options = t || m.defaults, this.links = e, this.rules = i.normal, this.renderer = this.options.renderer || new r, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                this.options.gfm ? this.options.breaks ? this.rules = i.breaks : this.rules = i.gfm : this.options.pedantic && (this.rules = i.pedantic)
            }
            a.rules = i, a.output = function(e, t, n) {
                return new a(t, n).output(e)
            }, a.prototype.output = function(e) {
                for (var t, n, i, a, r = ""; e;)
                    if (a = this.rules.escape.exec(e)) e = e.substring(a[0].length), r += a[1];
                    else if (a = this.rules.autolink.exec(e)) e = e.substring(a[0].length), "@" === a[2] ? (n = s(":" === a[1].charAt(6) ? this.mangle(a[1].substring(7)) : this.mangle(a[1])), i = this.mangle("mailto:") + n) : i = n = s(a[1]), r += this.renderer.link(i, null, n);
                else if (this.inLink || !(a = this.rules.url.exec(e))) {
                    if (a = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(a[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(a[0]) && (this.inLink = !1), e = e.substring(a[0].length), r += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : s(a[0]) : a[0];
                    else if (a = this.rules.link.exec(e)) e = e.substring(a[0].length), this.inLink = !0, r += this.outputLink(a, {
                        href: a[2],
                        title: a[3]
                    }), this.inLink = !1;
                    else if ((a = this.rules.reflink.exec(e)) || (a = this.rules.nolink.exec(e))) {
                        if (e = e.substring(a[0].length), t = (a[2] || a[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
                            r += a[0].charAt(0), e = a[0].substring(1) + e;
                            continue
                        }
                        this.inLink = !0, r += this.outputLink(a, t), this.inLink = !1
                    } else if (a = this.rules.strong.exec(e)) e = e.substring(a[0].length), r += this.renderer.strong(this.output(a[2] || a[1]));
                    else if (a = this.rules.em.exec(e)) e = e.substring(a[0].length), r += this.renderer.em(this.output(a[2] || a[1]));
                    else if (a = this.rules.code.exec(e)) e = e.substring(a[0].length), r += this.renderer.codespan(s(a[2].trim(), !0));
                    else if (a = this.rules.br.exec(e)) e = e.substring(a[0].length), r += this.renderer.br();
                    else if (a = this.rules.del.exec(e)) e = e.substring(a[0].length), r += this.renderer.del(this.output(a[1]));
                    else if (a = this.rules.text.exec(e)) e = e.substring(a[0].length), r += this.renderer.text(s(this.smartypants(a[0])));
                    else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
                } else e = e.substring(a[0].length), i = n = s(a[1]), r += this.renderer.link(i, null, n);
                return r
            }, a.prototype.outputLink = function(e, t) {
                var n = s(t.href),
                    i = t.title ? s(t.title) : null;
                return "!" !== e[0].charAt(0) ? this.renderer.link(n, i, this.output(e[1])) : this.renderer.image(n, i, s(e[1]))
            }, a.prototype.smartypants = function(e) {
                return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
            }, a.prototype.mangle = function(e) {
                if (!this.options.mangle) return e;
                for (var t, n = "", i = e.length, a = 0; a < i; a++) t = e.charCodeAt(a), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
                return n
            };

            function r(e) {
                this.options = e || {}
            }
            r.prototype.code = function(e, t, n) {
                if (this.options.highlight) {
                    var i = this.options.highlight(e, t);
                    null != i && i !== e && (n = !0, e = i)
                }
                return t ? '<pre><code class="' + this.options.langPrefix + s(t, !0) + '">' + (n ? e : s(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : s(e, !0)) + "\n</code></pre>"
            }, r.prototype.blockquote = function(e) {
                return "<blockquote>\n" + e + "</blockquote>\n"
            }, r.prototype.html = function(e) {
                return e
            }, r.prototype.heading = function(e, t, n) {
                return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
            }, r.prototype.hr = function() {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
            }, r.prototype.list = function(e, t) {
                var n = t ? "ol" : "ul";
                return "<" + n + ">\n" + e + "</" + n + ">\n"
            }, r.prototype.listitem = function(e) {
                return "<li>" + e + "</li>\n"
            }, r.prototype.paragraph = function(e) {
                return "<p>" + e + "</p>\n"
            }, r.prototype.table = function(e, t) {
                return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
            }, r.prototype.tablerow = function(e) {
                return "<tr>\n" + e + "</tr>\n"
            }, r.prototype.tablecell = function(e, t) {
                var n = t.header ? "th" : "td";
                return (t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
            }, r.prototype.strong = function(e) {
                return "<strong>" + e + "</strong>"
            }, r.prototype.em = function(e) {
                return "<em>" + e + "</em>"
            }, r.prototype.codespan = function(e) {
                return "<code>" + e + "</code>"
            }, r.prototype.br = function() {
                return this.options.xhtml ? "<br/>" : "<br>"
            }, r.prototype.del = function(e) {
                return "<del>" + e + "</del>"
            }, r.prototype.link = function(e, t, n) {
                if (this.options.sanitize) {
                    try {
                        var i = decodeURIComponent((a = e, a.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function(e, t) {
                            return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
                        }))).replace(/[^\w:]/g, "").toLowerCase()
                    } catch (e) {
                        return n
                    }
                    if (0 === i.indexOf("javascript:") || 0 === i.indexOf("vbscript:") || 0 === i.indexOf("data:")) return n
                }
                var a;
                this.options.baseUrl && !u.test(e) && (e = c(this.options.baseUrl, e));
                var r = '<a href="' + e + '"';
                return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>"
            }, r.prototype.image = function(e, t, n) {
                this.options.baseUrl && !u.test(e) && (e = c(this.options.baseUrl, e));
                var i = '<img src="' + e + '" alt="' + n + '"';
                return t && (i += ' title="' + t + '"'), i += this.options.xhtml ? "/>" : ">"
            }, r.prototype.text = function(e) {
                return e
            };

            function o(e) {
                this.tokens = [], this.token = null, this.options = e || m.defaults, this.options.renderer = this.options.renderer || new r, this.renderer = this.options.renderer, this.renderer.options = this.options
            }
            o.parse = function(e, t, n) {
                return new o(t, n).parse(e)
            }, o.prototype.parse = function(e) {
                this.inline = new a(e.links, this.options, this.renderer), this.tokens = e.reverse();
                for (var t = ""; this.next();) t += this.tok();
                return t
            }, o.prototype.next = function() {
                return this.token = this.tokens.pop()
            }, o.prototype.peek = function() {
                return this.tokens[this.tokens.length - 1] || 0
            }, o.prototype.parseText = function() {
                for (var e = this.token.text;
                    "text" === this.peek().type;) e += "\n" + this.next().text;
                return this.inline.output(e)
            }, o.prototype.tok = function() {
                switch (this.token.type) {
                    case "space":
                        return "";
                    case "hr":
                        return this.renderer.hr();
                    case "heading":
                        return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                    case "code":
                        return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                    case "table":
                        var e, t, n, i, a = "",
                            r = "";
                        for (n = "", e = 0; e < this.token.header.length; e++)({
                            header: !0,
                            align: this.token.align[e]
                        }), n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                            header: !0,
                            align: this.token.align[e]
                        });
                        for (a += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                            for (t = this.token.cells[e], n = "", i = 0; i < t.length; i++) n += this.renderer.tablecell(this.inline.output(t[i]), {
                                header: !1,
                                align: this.token.align[i]
                            });
                            r += this.renderer.tablerow(n)
                        }
                        return this.renderer.table(a, r);
                    case "blockquote_start":
                        for (r = "";
                            "blockquote_end" !== this.next().type;) r += this.tok();
                        return this.renderer.blockquote(r);
                    case "list_start":
                        r = "";
                        for (var o = this.token.ordered;
                            "list_end" !== this.next().type;) r += this.tok();
                        return this.renderer.list(r, o);
                    case "list_item_start":
                        for (r = "";
                            "list_item_end" !== this.next().type;) r += "text" === this.token.type ? this.parseText() : this.tok();
                        return this.renderer.listitem(r);
                    case "loose_item_start":
                        for (r = "";
                            "list_item_end" !== this.next().type;) r += this.tok();
                        return this.renderer.listitem(r);
                    case "html":
                        var s = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                        return this.renderer.html(s);
                    case "paragraph":
                        return this.renderer.paragraph(this.inline.output(this.token.text));
                    case "text":
                        return this.renderer.paragraph(this.parseText())
                }
            };

            function s(e, t) {
                return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            }

            function l(e, t) {
                return e = e.source, t = t || "",
                    function n(i, a) {
                        return i ? (a = (a = a.source || a).replace(/(^|[^\[])\^/g, "$1"), e = e.replace(i, a), n) : new RegExp(e, t)
                    }
            }

            function c(e, t) {
                return d[" " + e] || (/^[^:]+:\/*[^/]*$/.test(e) ? d[" " + e] = e + "/" : d[" " + e] = e.replace(/[^/]*$/, "")), e = d[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + t : e + t
            }
            var d = {},
                u = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

            function p() {}
            p.exec = p;

            function g(e) {
                for (var t, n, i = arguments, a = 1; a < arguments.length; a++) {
                    t = i[a];
                    for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }

            function m(e, t, i) {
                if (i || "function" == typeof t) {
                    i || (i = t, t = null);
                    var a, r, l = (t = g({}, m.defaults, t || {})).highlight,
                        c = 0;
                    try {
                        a = n.lex(e, t)
                    } catch (e) {
                        return i(e)
                    }
                    r = a.length;
                    var d = function(e) {
                        if (e) return t.highlight = l, i(e);
                        var n;
                        try {
                            n = o.parse(a, t)
                        } catch (t) {
                            e = t
                        }
                        return t.highlight = l, e ? i(e) : i(null, n)
                    };
                    if (!l || l.length < 3) return d();
                    if (delete t.highlight, !r) return d();
                    for (; c < a.length; c++) ! function(e) {
                        "code" !== e.type ? --r || d() : l(e.text, e.lang, function(t, n) {
                            return t ? d(t) : null == n || n === e.text ? --r || d() : (e.text = n, e.escaped = !0, void(--r || d()))
                        })
                    }(a[c])
                } else try {
                    return t && (t = g({}, m.defaults, t)), o.parse(n.lex(e, t), t)
                } catch (e) {
                    if (e.message += "\nPlease report this to https://github.com/chjj/marked.", (t || m.defaults).silent) return "<p>An error occurred:</p><pre>" + s(e.message + "", !0) + "</pre>";
                    throw e
                }
            }
            m.options = m.setOptions = function(e) {
                return g(m.defaults, e), m
            }, m.defaults = {
                gfm: !0,
                tables: !0,
                breaks: !1,
                pedantic: !1,
                sanitize: !1,
                sanitizer: null,
                mangle: !0,
                smartLists: !1,
                silent: !1,
                highlight: null,
                langPrefix: "lang-",
                smartypants: !1,
                headerPrefix: "",
                renderer: new r,
                xhtml: !1,
                baseUrl: null
            }, m.Parser = o, m.parser = o.parse, m.Renderer = r, m.Lexer = n, m.lexer = n.lex, m.InlineLexer = a, m.inlineLexer = a.output, m.parse = m, e.exports = m
        }).call(function() {
            return this || ("undefined" != typeof window ? window : B)
        }())
    });

    function H(e, t) {
        var n = [],
            i = {};
        return e.forEach(function(e) {
            var a = e.level || 1,
                r = a - 1;
            a > t || (i[r] ? i[r].children = (i[r].children || []).concat(e) : n.push(e), i[a] = e)
        }), n
    }
    var $ = {},
        z = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@\[\]^`{|}~]/g;

    function W(e) {
        return e.toLowerCase()
    }

    function q(e) {
        if ("string" != typeof e) return "";
        var t = e.trim().replace(/[A-Z]+/g, W).replace(/<[^>\d]+>/g, "").replace(z, "").replace(/\s/g, "-").replace(/-+/g, "-").replace(/^(\d)/, "_$1"),
            n = $[t];
        return n = $.hasOwnProperty(t) ? n + 1 : 0, $[t] = n, n && (t = t + "-" + n), t
    }
    q.clear = function() {
        $ = {}
    };

    function j(e, t) {
        return '<img class="emoji" src="https://assets-cdn.github.com/images/icons/emoji/' + t + '.png" alt="' + t + '" />'
    }
    var V = decodeURIComponent,
        Y = encodeURIComponent;

    function K(e) {
        var t = {};
        return (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
            var n = e.replace(/\+/g, " ").split("=");
            t[n[0]] = n[1] && V(n[1])
        }), t) : t
    }

    function Z(e, t) {
        void 0 === t && (t = []);
        var n = [];
        for (var i in e) t.indexOf(i) > -1 || n.push(e[i] ? (Y(i) + "=" + Y(e[i])).toLowerCase() : Y(i));
        return n.length ? "?" + n.join("&") : ""
    }

    function X() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return ee(e.join("/"))
    }
    var Q = e(function(e) {
            return /(:|(\/{2}))/g.test(e)
        }),
        J = e(function(e) {
            return /\/$/g.test(e) ? e : (e = e.match(/(\S*\/)[^\/]+$/)) ? e[1] : ""
        }),
        ee = e(function(e) {
            return e.replace(/^\/+/, "/").replace(/([^:])\/{2,}/g, "$1/")
        }),
        te = e(function(e) {
            return e.replace("#", "?id=")
        }),
        ne = {};

    function ie(e) {
        void 0 === e && (e = "");
        var t = {};
        return e && (e = e.replace(/:([\w-]+)=?([\w-]+)?/g, function(e, n, i) {
            return t[n] = i && i.replace(/&quot;/g, "") || !0, ""
        }).trim()), {
            str: e,
            config: t
        }
    }
    var ae = {
            markdown: function(e) {
                return {
                    url: e
                }
            },
            iframe: function(e, t) {
                return {
                    code: '<iframe src="' + e + '" ' + (t || "width=100% height=400") + "></iframe>"
                }
            },
            video: function(e, t) {
                return {
                    code: '<video src="' + e + '" ' + (t || "controls") + ">Not Support</video>"
                }
            },
            audio: function(e, t) {
                return {
                    code: '<audio src="' + e + '" ' + (t || "controls") + ">Not Support</audio>"
                }
            },
            code: function(e, t) {
                var n = e.match(/\.(\w+)$/);
                return "md" === (n = t || n && n[1]) && (n = "markdown"), {
                    url: e,
                    lang: n
                }
            }
        },
        re = function(t, a) {
            var o = this;
            this.config = t, this.router = a, this.cacheTree = {}, this.toc = [], this.linkTarget = t.externalLinkTarget || "_blank", this.contentBase = a.getBasePath(), this.pageToc = {
                tag: "\x3c!-- toc --\x3e",
                hasTag: !1,
                start: 0
            };
            var s, l = this._initRenderer(),
                c = t.markdown || {};
            r(c) ? s = c(G, l) : (G.setOptions(n(c, {
                renderer: n(l, c.renderer)
            })), s = G), this._marked = s, this.compile = e(function(e) {
                var n = "";
                if (!e) return e;
                n = i(e) ? s(e) : s.parser(e), n = o._genToc(n), n = t.noEmoji ? n : (a = n, a.replace(/<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g, function(e) {
                    return e.replace(/:/g, "__colon__")
                }).replace(/:(\w+?):/gi, u && window.emojify || j).replace(/__colon__/g, ":"));
                var a;
                return q.clear(), n
            })
        };
    re.prototype.compileEmbed = function(e, t) {
        var n, i = ie(t),
            a = i.str,
            r = i.config;
        if (t = a, r.include) {
            Q(e) || (e = X(this.contentBase, e));
            var o;
            if (r.type && (o = ae[r.type]))(n = o.call(this, e, t)).type = r.type;
            else {
                var s = "code";
                /\.(md|markdown)/.test(e) ? s = "markdown" : /\.html?/.test(e) ? s = "iframe" : /\.(mp4|ogg)/.test(e) ? s = "video" : /\.mp3/.test(e) && (s = "audio"), (n = ae[s].call(this, e, t)).type = s
            }
            return n
        }
    }, re.prototype._matchNotCompileLink = function(e) {
        for (var t = this.config.noCompileLinks || [], n = 0; n < t.length; n++) {
            var i = t[n];
            if ((ne[i] || (ne[i] = new RegExp("^" + i + "$"))).test(e)) return e
        }
    }, re.prototype._initRenderer = function() {
        var e = new G.Renderer,
            t = this.linkTarget,
            n = this.router,
            i = this.contentBase,
            a = this,
            r = {};
        r.heading = e.heading = function(e, t) {
            var i = {
                level: t,
                title: e
            };
            /{docsify-ignore}/g.test(e) && (e = e.replace("{docsify-ignore}", ""), i.title = e, i.ignoreSubHeading = !0), /{docsify-ignore-all}/g.test(e) && (e = e.replace("{docsify-ignore-all}", ""), i.title = e, i.ignoreAllSubs = !0);
            var r = q(e),
                o = n.toURL(n.getCurrentPath(), {
                    id: r
                });
            return i.slug = o, a.toc.push(i), "<h" + t + ' id="' + r + '"><a href="' + o + '" data-id="' + r + '" class="anchor"><span>' + e + "</span></a></h" + t + ">"
        }, r.code = e.code = function(e, t) {
            return void 0 === t && (t = ""), '<pre v-pre data-lang="' + t + '"><code class="language-' + t + " lang-" + t + '">' + (e = e.replace(/</g, "&lt").replace(/>/g, "&gt")) + "</code></pre>"
        }, r.link = e.link = function(e, i, r) {
            void 0 === i && (i = "");
            var o = "",
                s = ie(i),
                l = s.str,
                c = s.config;
            return i = l, /:|(\/{2})/.test(e) || a._matchNotCompileLink(e) || c.ignore ? o += ' target="' + t + '"' : (e === a.config.homepage && (e = "README"), e = n.toURL(e, null, n.getCurrentPath())), c.target && (o += " target=" + c.target), c.disabled && (o += " disabled", e = "javascript:void(0)"), i && (o += ' title="' + i + '"'), '<a href="' + e + '"' + o + ">" + r + "</a>"
        }, r.paragraph = e.paragraph = function(e) {
            return /^!&gt;/.test(e) ? I("tip", e) : /^\?&gt;/.test(e) ? I("warn", e) : "<p>" + e + "</p>"
        }, r.image = e.image = function(e, t, n) {
            var a = e,
                r = "",
                o = ie(t);
            return t = o.str, o.config["no-zoom"] && (r += " data-no-zoom"), t && (r += ' title="' + t + '"'), Q(e) || (a = X(i, e)), '<img src="' + a + '"data-origin="' + e + '" alt="' + n + '"' + r + ">"
        };
        var o = /^\[([ x])\] +/;
        return r.listitem = e.listitem = function(e) {
            var t = o.exec(e);
            return t && (e = e.replace(o, '<input type="checkbox" ' + ("x" === t[1] ? "checked" : "") + " />")), "<li" + (t ? ' class="task-list-item"' : "") + ">" + e + "</li>\n"
        }, e.origin = r, e
    }, re.prototype.sidebar = function(e, t) {
        var n = this.router.getCurrentPath(),
            i = "";
        if (e) i = (i = this.compile(e)) && i.match(/<ul[^>]*>([\s\S]+)<\/ul>/g)[0];
        else {
            var a = this.cacheTree[n] || H(this.toc, t);
            i = x(a, "<ul>"), this.cacheTree[n] = a
        }
        return i
    }, re.prototype.subSidebar = function(e) {
        if (e) {
            var t = this.router.getCurrentPath(),
                n = this.cacheTree,
                i = this.toc;
            i[0] && i[0].ignoreAllSubs && i.splice(0), i[0] && 1 === i[0].level && i.shift();
            for (var a = 0; a < i.length; a++) i[a].ignoreSubHeading && i.splice(a, 1) && a--;
            var r = n[t] || H(i, e);
            return n[t] = r, this.toc = [], x(r, '<ul class="app-sub-sidebar">')
        }
        this.toc = []
    }, re.prototype.article = function(e) {
        return this.compile(e)
    }, re.prototype.cover = function(e) {
        var t = this.toc.slice(),
            n = this.compile(e);
        return this.toc = t.slice(), n
    }, re.prototype.calTocStart = function(e) {
        var t, n = /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/gim,
            i = e.indexOf(this.pageToc.tag),
            a = 0;
        if (-1 !== i) {
            for (this.pageToc.hasTag = !0; null != (t = n.exec(e)) && !(t.index > i);) a++;
            this.pageToc.start = a
        } else this.pageToc.hasTag = !1
    }, re.prototype._genToc = function(e) {
        if (!this.pageToc.hasTag) return e;
        var t, n, i, a = this.pageToc.tag,
            r = this.config.tocLevel,
            o = "",
            s = 0,
            l = 5,
            c = this.toc,
            d = this.pageToc.start;
        for (t = d; t < c.length; t++)(i = c[t]).level < l && (l = i.level);
        var u = l - 1;
        for (t = d; t < c.length; t++)
            if (!((i = c[t]).level > r)) {
                if (u > i.level) {
                    for (n = u - i.level; n >= 0; n--) o += "</ul>", s--;
                    o += "<ul class='toc'>", s++
                }
                if (u < i.level)
                    for (n = i.level - u; n > 0; n--) o += "<ul class='toc'>", s++;
                o += "<li><a href='" + i.slug + "'>" + i.title + "</a></li>", u = i.level
            } for (t = 0; t < s; t++) o += "</ul>";
        return e = e.replace(a, o), this.pageToc.hasTag = !1, this.pageToc.start = 0, e
    };
    var oe = f.title;

    function se() {
        var e = h("section.cover");
        if (e) {
            var t = e.getBoundingClientRect().height;
            window.pageYOffset >= t || e.classList.contains("hidden") ? A(b, "add", "sticky") : A(b, "remove", "sticky")
        }
    }

    function le(e, t, n, i) {
        var a, r = y(t = h(t), "a"),
            o = decodeURI(e.toURL(e.getCurrentPath()));
        return r.sort(function(e, t) {
            return t.href.length - e.href.length
        }).forEach(function(e) {
            var t = e.getAttribute("href"),
                i = n ? e.parentNode : e;
            0 !== o.indexOf(t) || a ? A(i, "remove", "active") : (a = e, A(i, "add", "active"))
        }), i && (f.title = a ? a.innerText + " - " + oe : oe), a
    }
    var ce = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();
    var de = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.duration = t.duration || 1e3, this.ease = t.easing || this._defaultEase, this.start = t.start, this.end = t.end, this.frame = null, this.next = null, this.isRunning = !1, this.events = {}, this.direction = this.start < this.end ? "up" : "down"
            }
            return ce(e, [{
                key: "begin",
                value: function() {
                    return this.isRunning || this.next === this.end || (this.frame = window.requestAnimationFrame(this._tick.bind(this))), this
                }
            }, {
                key: "stop",
                value: function() {
                    return window.cancelAnimationFrame(this.frame), this.isRunning = !1, this.frame = null, this.timeStart = null, this.next = null, this
                }
            }, {
                key: "on",
                value: function(e, t) {
                    return this.events[e] = this.events[e] || [], this.events[e].push(t), this
                }
            }, {
                key: "emit",
                value: function(e, t) {
                    var n = this,
                        i = this.events[e];
                    i && i.forEach(function(e) {
                        return e.call(n, t)
                    })
                }
            }, {
                key: "_tick",
                value: function(e) {
                    this.isRunning = !0;
                    var t = this.next || this.start;
                    this.timeStart || (this.timeStart = e), this.timeElapsed = e - this.timeStart, this.next = Math.round(this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration)), this._shouldTick(t) ? (this.emit("tick", this.next), this.frame = window.requestAnimationFrame(this._tick.bind(this))) : (this.emit("tick", this.end), this.emit("done", null))
                }
            }, {
                key: "_shouldTick",
                value: function(e) {
                    return {
                        up: this.next < this.end && e <= this.next,
                        down: this.next > this.end && e >= this.next
                    } [this.direction]
                }
            }, {
                key: "_defaultEase",
                value: function(e, t, n, i) {
                    return (e /= i / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                }
            }]), e
        }(),
        ue = {},
        pe = !1,
        ge = null,
        me = !0,
        he = 0;

    function fe(e) {
        if (me) {
            for (var t, n = h(".sidebar"), i = y(".anchor"), a = E(n, ".sidebar-nav"), r = E(n, "li.active"), o = document.documentElement, s = (o && o.scrollTop || document.body.scrollTop) - he, l = 0, c = i.length; l < c; l += 1) {
                var d = i[l];
                if (d.offsetTop > s) {
                    t || (t = d);
                    break
                }
                t = d
            }
            if (t) {
                var u = ue[be(e, t.getAttribute("data-id"))];
                if (u && u !== r && (r && r.classList.remove("active"), u.classList.add("active"), r = u, !pe && b.classList.contains("sticky"))) {
                    var p = n.clientHeight,
                        g = r.offsetTop + r.clientHeight + 40,
                        m = g - 0 < p,
                        f = r.offsetTop >= a.scrollTop && g <= a.scrollTop + p ? a.scrollTop : m ? 0 : g - p;
                    n.scrollTop = f
                }
            }
        }
    }

    function be(e, t) {
        return e + "?id=" + t
    }

    function Se(e, t) {
        if (t) {
            
            var n = E("#" + t);
            n && (i = n, ge && ge.stop(), me = !1, ge = new de({
                start: window.pageYOffset,
                end: i.getBoundingClientRect().top + window.pageYOffset,
                duration: 500
            }).on("tick", function(e) {
                return window.scrollTo(0, e)
            }).on("done", function() {
                me = !0, ge = null
            }).begin());
            var i, a = ue[be(e, t)],
                r = E(h(".sidebar"), "li.active");
            r && r.classList.remove("active"), a && a.classList.add("active")
        }
    }
    var Ee = f.scrollingElement || f.documentElement;
    var ye = {};

    function ve(e, t) {
        var i = e.compiler,
            a = e.raw;
        void 0 === a && (a = "");
        var r, o = e.fetch;
        if (r = ye[a]) return t(r);
        var s = i._marked,
            l = s.lexer(a),
            c = [],
            d = s.InlineLexer.rules.link,
            u = l.links;
        l.forEach(function(e, t) {
            "paragraph" === e.type && (e.text = e.text.replace(new RegExp(d.source, "g"), function(e, n, a, r) {
                var o = i.compileEmbed(a, r);
                return o ? ("markdown" !== o.type && "code" !== o.type || c.push({
                    index: t,
                    embed: o
                }), o.code) : e
            }))
        });
        var p = 0;
        ! function e(t, n) {
            var i = t.step;
            void 0 === i && (i = 0);
            var a = t.embedTokens,
                r = t.compile,
                o = t.fetch,
                s = a[i];
            if (!s) return n({});
            P(s.embed.url).then(function(t) {
                var l;
                t && ("markdown" === s.embed.type ? l = r.lexer(t) : "code" === s.embed.type && (l = r.lexer("```" + s.embed.lang + "\n" + t.replace(/`/g, "@DOCSIFY_QM@") + "\n```\n"))), n({
                    token: s,
                    embedToken: l
                }), e({
                    step: ++i,
                    compile: r,
                    embedTokens: a,
                    fetch: o
                }, n)
            })
        }({
            compile: s,
            embedTokens: c,
            fetch: o
        }, function(e) {
            var i = e.embedToken,
                r = e.token;
            if (r) {
                var o = r.index + p;
                n(u, i.links), l = l.slice(0, o).concat(i, l.slice(o + 1)), p += i.length - 1
            } else ye[a] = l.concat(), l.links = ye[a].links = u, t(l)
        })
    }

    function ke() {
        var e = y(".markdown-section>script").filter(function(e) {
            return !/template/.test(e.type)
        })[0];
        if (!e) return !1;
        var t = e.innerText.trim();
        if (!t) return !1;
        setTimeout(function(e) {
            window.__EXECUTE_RESULT__ = new Function(t)()
        }, 0)
    }

    function we(e, t, n) {
        return t = "function" == typeof n ? n(t) : "string" == typeof n ? function(e) {
            var t = [],
                n = 0;
            return e.replace(M, function(i, a, r) {
                    t.push(e.substring(n, r - 1)), n = r += i.length + 1, t.push(function(e) {
                        return ("00" + ("string" == typeof F[i] ? e[F[i]]() : F[i](e))).slice(-i.length)
                    })
                }), n !== e.length && t.push(e.substring(n)),
                function(e) {
                    for (var n = "", i = 0, a = e || new Date; i < t.length; i++) n += "string" == typeof t[i] ? t[i] : t[i](a);
                    return n
                }
        }(n)(new Date(t)) : t, e.replace(/{docsify-updated}/g, t)
    }

    function Te(e) {
        e || (e = "not found"), this._renderTo(".markdown-section", e), !this.config.loadSidebar && this._renderSidebar(), !1 === this.config.executeScript || void 0 === window.Vue || ke() ? this.config.executeScript && ke() : setTimeout(function(e) {
            var t = window.__EXECUTE_RESULT__;
            t && t.$destroy && t.$destroy(), window.__EXECUTE_RESULT__ = (new window.Vue).$mount("#main")
        }, 0)
    }

    function _e(e) {

        var t = e.config;
        e.compiler = new re(t, e.router), u && (window.__current_docsify_compiler__ = e.compiler);
        var n = t.el || "#app",
            i = E("nav") || v("nav"),
            a = E(n),
            r = "",
            o = b;
        a ? (t.repo && (r += (s = t.repo, s ? (/\/\//.test(s) || (s = "https://github.com/" + s), '<a href="' + (s = s.replace(/^git\+/, "")) + '" class="github-corner" aria-label="View source on Github"><svg viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>') : "")), t.coverpage && (r += '<section class="cover show" style="background: linear-gradient(to left bottom, hsl(' + Math.floor(255 * Math.random()) + ", 100%, 85%) 0%,hsl(" + Math.floor(255 * Math.random()) + ', 100%, 85%) 100%)"><div class="cover-main">\x3c!--cover--\x3e</div><div class="mask"></div></section>'), r += function(e) {
            var t = '<button class="sidebar-toggle"><div class="sidebar-toggle-button"><span></span><span></span><span></span></div></button><aside class="sidebar">' + (e.name ? '<h1><a class="app-name-link" data-nosearch>' + e.name + "</a></h1>" : "") + '<div class="sidebar-nav">\x3c!--sidebar--\x3e</div></aside>';
            return (p ? t + "<main>" : "<main>" + t) + '<section class="content"><article class="markdown-section" id="main">\x3c!--main--\x3e</article><div class="load" id="load">Loading...</div></section></main>'
        }(t), e._renderTo(a, r, !0)) : e.rendered = !0;
        var s;

        t.mergeNavbar && p ? o = E(".sidebar") : (i.classList.add("app-nav"), t.repo || i.classList.add("no-badge")), w(o, i), t.themeColor && (f.head.appendChild(v("div", (l = t.themeColor, "<style>:root{--theme-color: " + l + ";}</style>")).firstElementChild), function(e) {
            if (!(window.CSS && window.CSS.supports && window.CSS.supports("(--v:red)"))) {
                var t = y("style:not(.inserted),link");
                [].forEach.call(t, function(t) {
                    if ("STYLE" === t.nodeName) D(t, e);
                    else if ("LINK" === t.nodeName) {
                        var n = t.getAttribute("href");
                        if (!/\.css$/.test(n)) return;
                        P(n).then(function(t) {
                            var n = v("style", t);
                            S.appendChild(n), D(n, e)
                        })
                    }
                })
            }
        }(t.themeColor));
        var l;
        e._updateRender(), A(b, "ready")
    }
    var Ae = {};
    var Ce = function(e) {
        this.config = e
    };
    Ce.prototype.getBasePath = function() {
        return this.config.basePath
    }, Ce.prototype.getFile = function(e, t) {
        void 0 === e && (e = this.getCurrentPath());
        var n = this.config,
            i = this.getBasePath(),
            a = "string" != typeof n.ext ? ".md" : n.ext;
        e = n.alias ? function e(t, n, i) {
            var a = Object.keys(n).filter(function(e) {
                return (Ae[e] || (Ae[e] = new RegExp("^" + e + "$"))).test(t) && t !== i
            })[0];
            return a ? e(t.replace(Ae[a], n[a]), n, t) : t
        }(e, n.alias) : e, r = e, o = a;
        var r, o;
        return e = (e = new RegExp("\\.(" + o.replace(/^\./, "") + "|html)$", "g").test(r) ? r : /\/$/g.test(r) ? r + "README" + o : "" + r + o) === "/README" + a ? n.homepage || e : e, e = Q(e) ? e : X(i, e), t && (e = e.replace(new RegExp("^" + i), "")), e
    }, Ce.prototype.onchange = function(e) {
        void 0 === e && (e = a), e()
    }, Ce.prototype.getCurrentPath = function() {}, Ce.prototype.normalize = function() {}, Ce.prototype.parse = function() {}, Ce.prototype.toURL = function(e, t, i) {
        var a = i && "#" === e[0],
            r = this.parse(te(e));
        if (r.query = n({}, r.query, t), e = (e = r.path + Z(r.query)).replace(/\.md(\?)|\.md$/, "$1"), a) {
            var o = i.indexOf("?");
            e = (o > 0 ? i.substr(0, o) : i) + e
        }
        return ee("/" + e)
    };
    



    function xe(e) {
        var t = location.href.indexOf("#");
        location.replace(location.href.slice(0, t >= 0 ? t : 0) + "#" + e)
    }
    var Ie = function(e) {
            function t(t) {
                e.call(this, t), this.mode = "hash"
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getBasePath = function() {
                var e = window.location.pathname || "",
                    t = this.config.basePath;
                return /^(\/|https?:)/g.test(t) ? t : ee(e + "/" + t)
            }, t.prototype.getCurrentPath = function() {
                var e = location.href,
                    t = e.indexOf("#");
                return -1 === t ? "" : e.slice(t + 1)
            }, t.prototype.onchange = function(e) {
                void 0 === e && (e = a), T("hashchange", e)
            }, t.prototype.normalize = function() {
                var e = this.getCurrentPath();
                if ("/" === (e = te(e)).charAt(0)) return xe(e);
                xe("/" + e)
            }, t.prototype.parse = function(e) {
                void 0 === e && (e = location.href);
                var t = "",
                    n = e.indexOf("#");
                n >= 0 && (e = e.slice(n + 1));
                var i = e.indexOf("?");
                return i >= 0 && (t = e.slice(i + 1), e = e.slice(0, i)), {
                    path: e,
                    file: this.getFile(e, !0),
                    query: K(t)
                }
            }, t.prototype.toURL = function(t, n, i) {
                return "#" + e.prototype.toURL.call(this, t, n, i)
            }, t
        }(Ce),
        Ne = function(e) {
            function t(t) {
                e.call(this, t), this.mode = "history"
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getCurrentPath = function() {
                var e = this.getBasePath(),
                    t = window.location.pathname;
                return e && 0 === t.indexOf(e) && (t = t.slice(e.length)), (t || "/") + window.location.search + window.location.hash
            }, t.prototype.onchange = function(e) {
                void 0 === e && (e = a), T("click", function(t) {
                    var n = "A" === t.target.tagName ? t.target : t.target.parentNode;
                    if ("A" === n.tagName && !/_blank/.test(n.target)) {
                        t.preventDefault();
                        var i = n.href;
                        window.history.pushState({
                            key: i
                        }, "", i), e()
                    }
                }), T("popstate", e)
            }, t.prototype.parse = function(e) {
                void 0 === e && (e = location.href);
                var t = "",
                    n = e.indexOf("?");
                n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n));
                var i = X(location.origin),
                    a = e.indexOf(i);
                return a > -1 && (e = e.slice(a + i.length)), {
                    path: e,
                    file: this.getFile(e),
                    query: K(t)
                }
            }, t
        }(Ce);
    var Le = {};

    function Re(e) {
        e.router.normalize(), e.route = e.router.parse(), b.setAttribute("data-page", e.route.file)
    }

    function Oe(e) {
        ! function(e, t) {
            var n = function(e) {
                return b.classList.toggle("close")
            };
            T(e = h(e), "click", function(e) {
                e.stopPropagation(), n()
            }), p && T(b, "click", function(e) {
                return b.classList.contains("close") && n()
            })
        }("button.sidebar-toggle", e.router), t = ".sidebar", e.router, T(t = h(t), "click", function(e) {
            var t = e.target;
            "A" === t.nodeName && t.nextSibling && t.nextSibling.classList.contains("app-sub-sidebar") && A(t.parentNode, "collapse")
        });
        var t;
        e.config.coverpage ? !p && T("scroll", se) : b.classList.add("sticky")
    }

    function Pe(e, t, n, i, a, r) {
        e = r ? e : e.replace(/\/$/, ""), (e = J(e)) && P(a.router.getFile(e + n) + t, !1, a.config.requestHeaders).then(i, function(r) {
            return Pe(e, t, n, i, a)
        })
    }
    var De = Object.freeze({
            cached: e,
            hyphenate: t,
            merge: n,
            isPrimitive: i,
            noop: a,
            isFn: r,
            inBrowser: u,
            isMobile: p,
            supportsPushState: g,
            parseQuery: K,
            stringifyQuery: Z,
            getPath: X,
            isAbsolutePath: Q,
            getParentPath: J,
            cleanPath: ee,
            replaceSlug: te
        }),
        Me = U(function(e) {
            
            var t = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
                n = function() {
                    var e = /\blang(?:uage)?-(\w+)\b/i,
                        n = 0,
                        i = t.Prism = {
                            util: {
                                encode: function(e) {
                                    return e instanceof a ? new a(e.type, i.util.encode(e.content), e.alias) : "Array" === i.util.type(e) ? e.map(i.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                                },
                                type: function(e) {
                                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                                },
                                objId: function(e) {
                                    return e.__id || Object.defineProperty(e, "__id", {
                                        value: ++n
                                    }), e.__id
                                },
                                clone: function(e) {
                                    switch (i.util.type(e)) {
                                        case "Object":
                                            var t = {};
                                            for (var n in e) e.hasOwnProperty(n) && (t[n] = i.util.clone(e[n]));
                                            return t;
                                        case "Array":
                                            return e.map && e.map(function(e) {
                                                return i.util.clone(e)
                                            })
                                    }
                                    return e
                                }
                            },
                            languages: {
                                extend: function(e, t) {
                                    var n = i.util.clone(i.languages[e]);
                                    for (var a in t) n[a] = t[a];
                                    return n
                                },
                                insertBefore: function(e, t, n, a) {
                                    var r = (a = a || i.languages)[e];
                                    if (2 == arguments.length) {
                                        n = arguments[1];
                                        for (var o in n) n.hasOwnProperty(o) && (r[o] = n[o]);
                                        return r
                                    }
                                    var s = {};
                                    for (var l in r)
                                        if (r.hasOwnProperty(l)) {
                                            if (l == t)
                                                for (var o in n) n.hasOwnProperty(o) && (s[o] = n[o]);
                                            s[l] = r[l]
                                        } return i.languages.DFS(i.languages, function(t, n) {
                                        n === a[e] && t != e && (this[t] = s)
                                    }), a[e] = s
                                },
                                DFS: function(e, t, n, a) {
                                    a = a || {};
                                    for (var r in e) e.hasOwnProperty(r) && (t.call(e, r, e[r], n || r), "Object" !== i.util.type(e[r]) || a[i.util.objId(e[r])] ? "Array" !== i.util.type(e[r]) || a[i.util.objId(e[r])] || (a[i.util.objId(e[r])] = !0, i.languages.DFS(e[r], t, r, a)) : (a[i.util.objId(e[r])] = !0, i.languages.DFS(e[r], t, null, a)))
                                }
                            },
                            plugins: {},
                            highlightAll: function(e, t) {
                                var n = {
                                    callback: t,
                                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                                };
                                i.hooks.run("before-highlightall", n);
                                for (var a, r = n.elements || document.querySelectorAll(n.selector), o = 0; a = r[o++];) i.highlightElement(a, !0 === e, n.callback)
                            },
                            highlightElement: function(n, a, r) {
                                for (var o, s, l = n; l && !e.test(l.className);) l = l.parentNode;
                                l && (o = (l.className.match(e) || [, ""])[1].toLowerCase(), s = i.languages[o]), n.className = n.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, l = n.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);
                                var c = {
                                    element: n,
                                    language: o,
                                    grammar: s,
                                    code: n.textContent
                                };
                                if (i.hooks.run("before-sanity-check", c), !c.code || !c.grammar) return c.code && (c.element.textContent = c.code), void i.hooks.run("complete", c);
                                if (i.hooks.run("before-highlight", c), a && t.Worker) {
                                    var d = new Worker(i.filename);
                                    d.onmessage = function(e) {
                                        c.highlightedCode = e.data, i.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, r && r.call(c.element), i.hooks.run("after-highlight", c), i.hooks.run("complete", c)
                                    }, d.postMessage(JSON.stringify({
                                        language: c.language,
                                        code: c.code,
                                        immediateClose: !0
                                    }))
                                } else c.highlightedCode = i.highlight(c.code, c.grammar, c.language), i.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, r && r.call(n), i.hooks.run("after-highlight", c), i.hooks.run("complete", c)
                            },
                            highlight: function(e, t, n) {
                                var r = i.tokenize(e, t);
                                return a.stringify(i.util.encode(r), n)
                            },
                            tokenize: function(e, t) {
                                var n = i.Token,
                                    a = [e],
                                    r = t.rest;
                                if (r) {
                                    for (var o in r) t[o] = r[o];
                                    delete t.rest
                                }
                                e: for (var o in t)
                                    if (t.hasOwnProperty(o) && t[o]) {
                                        var s = t[o];
                                        s = "Array" === i.util.type(s) ? s : [s];
                                        for (var l = 0; l < s.length; ++l) {
                                            var c = s[l],
                                                d = c.inside,
                                                u = !!c.lookbehind,
                                                p = !!c.greedy,
                                                g = 0,
                                                m = c.alias;
                                            if (p && !c.pattern.global) {
                                                var h = c.pattern.toString().match(/[imuy]*$/)[0];
                                                c.pattern = RegExp(c.pattern.source, h + "g")
                                            }
                                            c = c.pattern || c;
                                            for (var f = 0, b = 0; f < a.length; b += a[f].length, ++f) {
                                                var S = a[f];
                                                if (a.length > e.length) break e;
                                                if (!(S instanceof n)) {
                                                    c.lastIndex = 0;
                                                    var E = 1;
                                                    if (!(_ = c.exec(S)) && p && f != a.length - 1) {
                                                        if (c.lastIndex = b, !(_ = c.exec(e))) break;
                                                        for (var y = _.index + (u ? _[1].length : 0), v = _.index + _[0].length, k = f, w = b, T = a.length; T > k && v > w; ++k) y >= (w += a[k].length) && (++f, b = w);
                                                        if (a[f] instanceof n || a[k - 1].greedy) continue;
                                                        E = k - f, S = e.slice(b, w), _.index -= b
                                                    }
                                                    if (_) {
                                                        u && (g = _[1].length);
                                                        v = (y = _.index + g) + (_ = _[0].slice(g)).length;
                                                        var _, A = S.slice(0, y),
                                                            C = S.slice(v),
                                                            x = [f, E];
                                                        A && x.push(A);
                                                        var I = new n(o, d ? i.tokenize(_, d) : _, m, _, p);
                                                        x.push(I), C && x.push(C), Array.prototype.splice.apply(a, x)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                return a
                            },
                            hooks: {
                                all: {},
                                add: function(e, t) {
                                    var n = i.hooks.all;
                                    n[e] = n[e] || [], n[e].push(t)
                                },
                                run: function(e, t) {
                                    var n = i.hooks.all[e];
                                    if (n && n.length)
                                        for (var a, r = 0; a = n[r++];) a(t)
                                }
                            }
                        },
                        a = i.Token = function(e, t, n, i, a) {
                            this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length, this.greedy = !!a
                        };
                    if (a.stringify = function(e, t, n) {
                            if ("string" == typeof e) return e;
                            if ("Array" === i.util.type(e)) return e.map(function(n) {
                                return a.stringify(n, t, e)
                            }).join("");
                            var r = {
                                type: e.type,
                                content: a.stringify(e.content, t, n),
                                tag: "span",
                                classes: ["token", e.type],
                                attributes: {},
                                language: t,
                                parent: n
                            };
                            if ("comment" == r.type && (r.attributes.spellcheck = "true"), e.alias) {
                                var o = "Array" === i.util.type(e.alias) ? e.alias : [e.alias];
                                Array.prototype.push.apply(r.classes, o)
                            }
                            i.hooks.run("wrap", r);
                            var s = Object.keys(r.attributes).map(function(e) {
                                return e + '="' + (r.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                            }).join(" ");
                            return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + r.content + "</" + r.tag + ">"
                        }, !t.document) return t.addEventListener ? (t.addEventListener("message", function(e) {
                        var n = JSON.parse(e.data),
                            a = n.language,
                            r = n.code,
                            o = n.immediateClose;
                        t.postMessage(i.highlight(r, i.languages[a], a)), o && t.close()
                    }, !1), t.Prism) : t.Prism;
                    var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
                    return r && (i.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(i.highlightAll) : window.setTimeout(i.highlightAll, 16) : document.addEventListener("DOMContentLoaded", i.highlightAll))), t.Prism
                }();
            e.exports && (e.exports = n), void 0 !== B && (B.Prism = n), n.languages.markup = {
                    comment: /<!--[\w\W]*?-->/,
                    prolog: /<\?[\w\W]+?\?>/,
                    doctype: /<!DOCTYPE[\w\W]+?>/i,
                    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
                    tag: {
                        pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
                        inside: {
                            tag: {
                                pattern: /^<\/?[^\s>\/]+/i,
                                inside: {
                                    punctuation: /^<\/?/,
                                    namespace: /^[^\s>\/:]+:/
                                }
                            },
                            "attr-value": {
                                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                                inside: {
                                    punctuation: /[=>"']/
                                }
                            },
                            punctuation: /\/?>/,
                            "attr-name": {
                                pattern: /[^\s>\/]+/,
                                inside: {
                                    namespace: /^[^\s>\/:]+:/
                                }
                            }
                        }
                    },
                    entity: /&#?[\da-z]{1,8};/i
                }, n.hooks.add("wrap", function(e) {
                    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
                }), n.languages.xml = n.languages.markup, n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.css = {
                    comment: /\/\*[\w\W]*?\*\//,
                    atrule: {
                        pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
                        inside: {
                            rule: /@[\w-]+/
                        }
                    },
                    url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
                    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
                    string: {
                        pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    },
                    property: /(\b|\B)[\w-]+(?=\s*:)/i,
                    important: /\B!important\b/i,
                    function: /[-a-z0-9]+(?=\()/i,
                    punctuation: /[(){};:]/
                }, n.languages.css.atrule.inside.rest = n.util.clone(n.languages.css), n.languages.markup && (n.languages.insertBefore("markup", "tag", {
                    style: {
                        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
                        lookbehind: !0,
                        inside: n.languages.css,
                        alias: "language-css"
                    }
                }), n.languages.insertBefore("inside", "attr-value", {
                    "style-attr": {
                        pattern: /\s*style=("|').*?\1/i,
                        inside: {
                            "attr-name": {
                                pattern: /^\s*style/i,
                                inside: n.languages.markup.tag.inside
                            },
                            punctuation: /^\s*=\s*['"]|['"]\s*$/,
                            "attr-value": {
                                pattern: /.+/i,
                                inside: n.languages.css
                            }
                        },
                        alias: "language-css"
                    }
                }, n.languages.markup.tag)), n.languages.clike = {
                    comment: [{
                        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0
                    }],
                    string: {
                        pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    },
                    "class-name": {
                        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /(\.|\\)/
                        }
                    },
                    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                    boolean: /\b(true|false)\b/,
                    function: /[a-z0-9_]+(?=\()/i,
                    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
                    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
                    punctuation: /[{}[\];(),.:]/
                }, n.languages.javascript = n.languages.extend("clike", {
                    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
                    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
                    function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
                    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
                }), n.languages.insertBefore("javascript", "keyword", {
                    regex: {
                        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
                        lookbehind: !0,
                        greedy: !0
                    }
                }), n.languages.insertBefore("javascript", "string", {
                    "template-string": {
                        pattern: /`(?:\\\\|\\?[^\\])*?`/,
                        greedy: !0,
                        inside: {
                            interpolation: {
                                pattern: /\$\{[^}]+\}/,
                                inside: {
                                    "interpolation-punctuation": {
                                        pattern: /^\$\{|\}$/,
                                        alias: "punctuation"
                                    },
                                    rest: n.languages.javascript
                                }
                            },
                            string: /[\s\S]+/
                        }
                    }
                }), n.languages.markup && n.languages.insertBefore("markup", "tag", {
                    script: {
                        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
                        lookbehind: !0,
                        inside: n.languages.javascript,
                        alias: "language-javascript"
                    }
                }), n.languages.js = n.languages.javascript, n.languages.abap = {
                    comment: /^\*.*/m,
                    string: /(`|')(\\?.)*?\1/m,
                    "string-template": {
                        pattern: /(\||\})(\\?.)*?(?=\||\{)/,
                        lookbehind: !0,
                        alias: "string"
                    },
                    "eol-comment": {
                        pattern: /(^|\s)".*/m,
                        lookbehind: !0,
                        alias: "comment"
                    },
                    keyword: {
                        pattern: /(\s|\.|^)(?:SCIENTIFIC_WITH_LEADING_ZERO|SCALE_PRESERVING_SCIENTIFIC|RMC_COMMUNICATION_FAILURE|END-ENHANCEMENT-SECTION|MULTIPLY-CORRESPONDING|SUBTRACT-CORRESPONDING|VERIFICATION-MESSAGE|DIVIDE-CORRESPONDING|ENHANCEMENT-SECTION|CURRENCY_CONVERSION|RMC_SYSTEM_FAILURE|START-OF-SELECTION|MOVE-CORRESPONDING|RMC_INVALID_STATUS|CUSTOMER-FUNCTION|END-OF-DEFINITION|ENHANCEMENT-POINT|SYSTEM-EXCEPTIONS|ADD-CORRESPONDING|SCALE_PRESERVING|SELECTION-SCREEN|CURSOR-SELECTION|END-OF-SELECTION|LOAD-OF-PROGRAM|SCROLL-BOUNDARY|SELECTION-TABLE|EXCEPTION-TABLE|IMPLEMENTATIONS|PARAMETER-TABLE|RIGHT-JUSTIFIED|UNIT_CONVERSION|AUTHORITY-CHECK|LIST-PROCESSING|SIGN_AS_POSTFIX|COL_BACKGROUND|IMPLEMENTATION|INTERFACE-POOL|TRANSFORMATION|IDENTIFICATION|ENDENHANCEMENT|LINE-SELECTION|INITIALIZATION|LEFT-JUSTIFIED|SELECT-OPTIONS|SELECTION-SETS|COMMUNICATION|CORRESPONDING|DECIMAL_SHIFT|PRINT-CONTROL|VALUE-REQUEST|CHAIN-REQUEST|FUNCTION-POOL|FIELD-SYMBOLS|FUNCTIONALITY|INVERTED-DATE|SELECTION-SET|CLASS-METHODS|OUTPUT-LENGTH|CLASS-CODING|COL_NEGATIVE|ERRORMESSAGE|FIELD-GROUPS|HELP-REQUEST|NO-EXTENSION|NO-TOPOFPAGE|REDEFINITION|DISPLAY-MODE|ENDINTERFACE|EXIT-COMMAND|FIELD-SYMBOL|NO-SCROLLING|SHORTDUMP-ID|ACCESSPOLICY|CLASS-EVENTS|COL_POSITIVE|DECLARATIONS|ENHANCEMENTS|FILTER-TABLE|SWITCHSTATES|SYNTAX-CHECK|TRANSPORTING|ASYNCHRONOUS|SYNTAX-TRACE|TOKENIZATION|USER-COMMAND|WITH-HEADING|ABAP-SOURCE|BREAK-POINT|CHAIN-INPUT|COMPRESSION|FIXED-POINT|NEW-SECTION|NON-UNICODE|OCCURRENCES|RESPONSIBLE|SYSTEM-CALL|TRACE-TABLE|ABBREVIATED|CHAR-TO-HEX|END-OF-FILE|ENDFUNCTION|ENVIRONMENT|ASSOCIATION|COL_HEADING|EDITOR-CALL|END-OF-PAGE|ENGINEERING|IMPLEMENTED|INTENSIFIED|RADIOBUTTON|SYSTEM-EXIT|TOP-OF-PAGE|TRANSACTION|APPLICATION|CONCATENATE|DESTINATION|ENHANCEMENT|IMMEDIATELY|NO-GROUPING|PRECOMPILED|REPLACEMENT|TITLE-LINES|ACTIVATION|BYTE-ORDER|CLASS-POOL|CONNECTION|CONVERSION|DEFINITION|DEPARTMENT|EXPIRATION|INHERITING|MESSAGE-ID|NO-HEADING|PERFORMING|QUEUE-ONLY|RIGHTSPACE|SCIENTIFIC|STATUSINFO|STRUCTURES|SYNCPOINTS|WITH-TITLE|ATTRIBUTES|BOUNDARIES|CLASS-DATA|COL_NORMAL|DD\/MM\/YYYY|DESCENDING|INTERFACES|LINE-COUNT|MM\/DD\/YYYY|NON-UNIQUE|PRESERVING|SELECTIONS|STATEMENTS|SUBROUTINE|TRUNCATION|TYPE-POOLS|ARITHMETIC|BACKGROUND|ENDPROVIDE|EXCEPTIONS|IDENTIFIER|INDEX-LINE|OBLIGATORY|PARAMETERS|PERCENTAGE|PUSHBUTTON|RESOLUTION|COMPONENTS|DEALLOCATE|DISCONNECT|DUPLICATES|FIRST-LINE|HEAD-LINES|NO-DISPLAY|OCCURRENCE|RESPECTING|RETURNCODE|SUBMATCHES|TRACE-FILE|ASCENDING|BYPASSING|ENDMODULE|EXCEPTION|EXCLUDING|EXPORTING|INCREMENT|MATCHCODE|PARAMETER|PARTIALLY|PREFERRED|REFERENCE|REPLACING|RETURNING|SELECTION|SEPARATED|SPECIFIED|STATEMENT|TIMESTAMP|TYPE-POOL|ACCEPTING|APPENDAGE|ASSIGNING|COL_GROUP|COMPARING|CONSTANTS|DANGEROUS|IMPORTING|INSTANCES|LEFTSPACE|LOG-POINT|QUICKINFO|READ-ONLY|SCROLLING|SQLSCRIPT|STEP-LOOP|TOP-LINES|TRANSLATE|APPENDING|AUTHORITY|CHARACTER|COMPONENT|CONDITION|DIRECTORY|DUPLICATE|MESSAGING|RECEIVING|SUBSCREEN|ACCORDING|COL_TOTAL|END-LINES|ENDMETHOD|ENDSELECT|EXPANDING|EXTENSION|INCLUDING|INFOTYPES|INTERFACE|INTERVALS|LINE-SIZE|PF-STATUS|PROCEDURE|PROTECTED|REQUESTED|RESUMABLE|RIGHTPLUS|SAP-SPOOL|SECONDARY|STRUCTURE|SUBSTRING|TABLEVIEW|NUMOFCHAR|ADJACENT|ANALYSIS|ASSIGNED|BACKWARD|CHANNELS|CHECKBOX|CONTINUE|CRITICAL|DATAINFO|DD\/MM\/YY|DURATION|ENCODING|ENDCLASS|FUNCTION|LEFTPLUS|LINEFEED|MM\/DD\/YY|OVERFLOW|RECEIVED|SKIPPING|SORTABLE|STANDARD|SUBTRACT|SUPPRESS|TABSTRIP|TITLEBAR|TRUNCATE|UNASSIGN|WHENEVER|ANALYZER|COALESCE|COMMENTS|CONDENSE|DECIMALS|DEFERRED|ENDWHILE|EXPLICIT|KEYWORDS|MESSAGES|POSITION|PRIORITY|RECEIVER|RENAMING|TIMEZONE|TRAILING|ALLOCATE|CENTERED|CIRCULAR|CONTROLS|CURRENCY|DELETING|DESCRIBE|DISTANCE|ENDCATCH|EXPONENT|EXTENDED|GENERATE|IGNORING|INCLUDES|INTERNAL|MAJOR-ID|MODIFIER|NEW-LINE|OPTIONAL|PROPERTY|ROLLBACK|STARTING|SUPPLIED|ABSTRACT|CHANGING|CONTEXTS|CREATING|CUSTOMER|DATABASE|DAYLIGHT|DEFINING|DISTINCT|DIVISION|ENABLING|ENDCHAIN|ESCAPING|HARMLESS|IMPLICIT|INACTIVE|LANGUAGE|MINOR-ID|MULTIPLY|NEW-PAGE|NO-TITLE|POS_HIGH|SEPARATE|TEXTPOOL|TRANSFER|SELECTOR|DBMAXLEN|ITERATOR|SELECTOR|ARCHIVE|BIT-XOR|BYTE-CO|COLLECT|COMMENT|CURRENT|DEFAULT|DISPLAY|ENDFORM|EXTRACT|LEADING|LISTBOX|LOCATOR|MEMBERS|METHODS|NESTING|POS_LOW|PROCESS|PROVIDE|RAISING|RESERVE|SECONDS|SUMMARY|VISIBLE|BETWEEN|BIT-AND|BYTE-CS|CLEANUP|COMPUTE|CONTROL|CONVERT|DATASET|ENDCASE|FORWARD|HEADERS|HOTSPOT|INCLUDE|INVERSE|KEEPING|NO-ZERO|OBJECTS|OVERLAY|PADDING|PATTERN|PROGRAM|REFRESH|SECTION|SUMMING|TESTING|VERSION|WINDOWS|WITHOUT|BIT-NOT|BYTE-CA|BYTE-NA|CASTING|CONTEXT|COUNTRY|DYNAMIC|ENABLED|ENDLOOP|EXECUTE|FRIENDS|HANDLER|HEADING|INITIAL|\*-INPUT|LOGFILE|MAXIMUM|MINIMUM|NO-GAPS|NO-SIGN|PRAGMAS|PRIMARY|PRIVATE|REDUCED|REPLACE|REQUEST|RESULTS|UNICODE|WARNING|ALIASES|BYTE-CN|BYTE-NS|CALLING|COL_KEY|COLUMNS|CONNECT|ENDEXEC|ENTRIES|EXCLUDE|FILTERS|FURTHER|HELP-ID|LOGICAL|MAPPING|MESSAGE|NAMETAB|OPTIONS|PACKAGE|PERFORM|RECEIVE|STATICS|VARYING|BINDING|CHARLEN|GREATER|XSTRLEN|ACCEPT|APPEND|DETAIL|ELSEIF|ENDING|ENDTRY|FORMAT|FRAMES|GIVING|HASHED|HEADER|IMPORT|INSERT|MARGIN|MODULE|NATIVE|OBJECT|OFFSET|REMOTE|RESUME|SAVING|SIMPLE|SUBMIT|TABBED|TOKENS|UNIQUE|UNPACK|UPDATE|WINDOW|YELLOW|ACTUAL|ASPECT|CENTER|CURSOR|DELETE|DIALOG|DIVIDE|DURING|ERRORS|EVENTS|EXTEND|FILTER|HANDLE|HAVING|IGNORE|LITTLE|MEMORY|NO-GAP|OCCURS|OPTION|PERSON|PLACES|PUBLIC|REDUCE|REPORT|RESULT|SINGLE|SORTED|SWITCH|SYNTAX|TARGET|VALUES|WRITER|ASSERT|BLOCKS|BOUNDS|BUFFER|CHANGE|COLUMN|COMMIT|CONCAT|COPIES|CREATE|DDMMYY|DEFINE|ENDIAN|ESCAPE|EXPAND|KERNEL|LAYOUT|LEGACY|LEVELS|MMDDYY|NUMBER|OUTPUT|RANGES|READER|RETURN|SCREEN|SEARCH|SELECT|SHARED|SOURCE|STABLE|STATIC|SUBKEY|SUFFIX|TABLES|UNWIND|YYMMDD|ASSIGN|BACKUP|BEFORE|BINARY|BIT-OR|BLANKS|CLIENT|CODING|COMMON|DEMAND|DYNPRO|EXCEPT|EXISTS|EXPORT|FIELDS|GLOBAL|GROUPS|LENGTH|LOCALE|MEDIUM|METHOD|MODIFY|NESTED|OTHERS|REJECT|SCROLL|SUPPLY|SYMBOL|ENDFOR|STRLEN|ALIGN|BEGIN|BOUND|ENDAT|ENTRY|EVENT|FINAL|FLUSH|GRANT|INNER|SHORT|USING|WRITE|AFTER|BLACK|BLOCK|CLOCK|COLOR|COUNT|DUMMY|EMPTY|ENDDO|ENDON|GREEN|INDEX|INOUT|LEAVE|LEVEL|LINES|MODIF|ORDER|OUTER|RANGE|RESET|RETRY|RIGHT|SMART|SPLIT|STYLE|TABLE|THROW|UNDER|UNTIL|UPPER|UTF-8|WHERE|ALIAS|BLANK|CLEAR|CLOSE|EXACT|FETCH|FIRST|FOUND|GROUP|LLANG|LOCAL|OTHER|REGEX|SPOOL|TITLE|TYPES|VALID|WHILE|ALPHA|BOXED|CATCH|CHAIN|CHECK|CLASS|COVER|ENDIF|EQUIV|FIELD|FLOOR|FRAME|INPUT|LOWER|MATCH|NODES|PAGES|PRINT|RAISE|ROUND|SHIFT|SPACE|SPOTS|STAMP|STATE|TASKS|TIMES|TRMAC|ULINE|UNION|VALUE|WIDTH|EQUAL|LOG10|TRUNC|BLOB|CASE|CEIL|CLOB|COND|EXIT|FILE|GAPS|HOLD|INCL|INTO|KEEP|KEYS|LAST|LINE|LONG|LPAD|MAIL|MODE|OPEN|PINK|READ|ROWS|TEST|THEN|ZERO|AREA|BACK|BADI|BYTE|CAST|EDIT|EXEC|FAIL|FIND|FKEQ|FONT|FREE|GKEQ|HIDE|INIT|ITNO|LATE|LOOP|MAIN|MARK|MOVE|NEXT|NULL|RISK|ROLE|UNIT|WAIT|ZONE|BASE|CALL|CODE|DATA|DATE|FKGE|GKGE|HIGH|KIND|LEFT|LIST|MASK|MESH|NAME|NODE|PACK|PAGE|POOL|SEND|SIGN|SIZE|SOME|STOP|TASK|TEXT|TIME|USER|VARY|WITH|WORD|BLUE|CONV|COPY|DEEP|ELSE|FORM|FROM|HINT|ICON|JOIN|LIKE|LOAD|ONLY|PART|SCAN|SKIP|SORT|TYPE|UNIX|VIEW|WHEN|WORK|ACOS|ASIN|ATAN|COSH|EACH|FRAC|LESS|RTTI|SINH|SQRT|TANH|AVG|BIT|DIV|ISO|LET|OUT|PAD|SQL|ALL|CI_|CPI|END|LOB|LPI|MAX|MIN|NEW|OLE|RUN|SET|\?TO|YES|ABS|ADD|AND|BIG|FOR|HDB|JOB|LOW|NOT|SAP|TRY|VIA|XML|ANY|GET|IDS|KEY|MOD|OFF|PUT|RAW|RED|REF|SUM|TAB|XSD|CNT|COS|EXP|LOG|SIN|TAN|XOR|AT|CO|CP|DO|GT|ID|IF|NS|OR|BT|CA|CS|GE|NA|NB|EQ|IN|LT|NE|NO|OF|ON|PF|TO|AS|BY|CN|IS|LE|NP|UP|E|I|M|O|Z|C|X)\b/i,
                        lookbehind: !0
                    },
                    number: /\b\d+\b/,
                    operator: {
                        pattern: /(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/,
                        lookbehind: !0
                    },
                    "string-operator": {
                        pattern: /(\s)&&?(?=\s)/,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    "token-operator": [{
                        pattern: /(\w)(?:->?|=>|[~|{}])(?=\w)/,
                        lookbehind: !0,
                        alias: "punctuation"
                    }, {
                        pattern: /[|{}]/,
                        alias: "punctuation"
                    }],
                    punctuation: /[,.:()]/
                }, n.languages.actionscript = n.languages.extend("javascript", {
                    keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
                    operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
                }), n.languages.actionscript["class-name"].alias = "function", n.languages.markup && n.languages.insertBefore("actionscript", "string", {
                    xml: {
                        pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\\1|\\?(?!\1)[\w\W])*\2)*\s*\/?>/,
                        lookbehind: !0,
                        inside: {
                            rest: n.languages.markup
                        }
                    }
                }), n.languages.ada = {
                    comment: /--.*/,
                    string: /"(?:""|[^"\r\f\n])*"/i,
                    number: [{
                        pattern: /\b[0-9](?:_?[0-9])*#[0-9A-F](?:_?[0-9A-F])*(?:\.[0-9A-F](?:_?[0-9A-F])*)?#(?:E[+-]?[0-9](?:_?[0-9])*)?/i
                    }, {
                        pattern: /\b[0-9](?:_?[0-9])*(?:\.[0-9](?:_?[0-9])*)?(?:E[+-]?[0-9](?:_?[0-9])*)?\b/i
                    }],
                    "attr-name": /\b'\w+/i,
                    keyword: /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
                    boolean: /\b(?:true|false)\b/i,
                    operator: /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
                    punctuation: /\.\.?|[,;():]/,
                    char: /'.'/,
                    variable: /\b[a-z](?:[_a-z\d])*\b/i
                }, n.languages.apacheconf = {
                    comment: /#.*/,
                    "directive-inline": {
                        pattern: /^(\s*)\b(AcceptFilter|AcceptPathInfo|AccessFileName|Action|AddAlt|AddAltByEncoding|AddAltByType|AddCharset|AddDefaultCharset|AddDescription|AddEncoding|AddHandler|AddIcon|AddIconByEncoding|AddIconByType|AddInputFilter|AddLanguage|AddModuleInfo|AddOutputFilter|AddOutputFilterByType|AddType|Alias|AliasMatch|Allow|AllowCONNECT|AllowEncodedSlashes|AllowMethods|AllowOverride|AllowOverrideList|Anonymous|Anonymous_LogEmail|Anonymous_MustGiveEmail|Anonymous_NoUserID|Anonymous_VerifyEmail|AsyncRequestWorkerFactor|AuthBasicAuthoritative|AuthBasicFake|AuthBasicProvider|AuthBasicUseDigestAlgorithm|AuthDBDUserPWQuery|AuthDBDUserRealmQuery|AuthDBMGroupFile|AuthDBMType|AuthDBMUserFile|AuthDigestAlgorithm|AuthDigestDomain|AuthDigestNonceLifetime|AuthDigestProvider|AuthDigestQop|AuthDigestShmemSize|AuthFormAuthoritative|AuthFormBody|AuthFormDisableNoStore|AuthFormFakeBasicAuth|AuthFormLocation|AuthFormLoginRequiredLocation|AuthFormLoginSuccessLocation|AuthFormLogoutLocation|AuthFormMethod|AuthFormMimetype|AuthFormPassword|AuthFormProvider|AuthFormSitePassphrase|AuthFormSize|AuthFormUsername|AuthGroupFile|AuthLDAPAuthorizePrefix|AuthLDAPBindAuthoritative|AuthLDAPBindDN|AuthLDAPBindPassword|AuthLDAPCharsetConfig|AuthLDAPCompareAsUser|AuthLDAPCompareDNOnServer|AuthLDAPDereferenceAliases|AuthLDAPGroupAttribute|AuthLDAPGroupAttributeIsDN|AuthLDAPInitialBindAsUser|AuthLDAPInitialBindPattern|AuthLDAPMaxSubGroupDepth|AuthLDAPRemoteUserAttribute|AuthLDAPRemoteUserIsDN|AuthLDAPSearchAsUser|AuthLDAPSubGroupAttribute|AuthLDAPSubGroupClass|AuthLDAPUrl|AuthMerging|AuthName|AuthnCacheContext|AuthnCacheEnable|AuthnCacheProvideFor|AuthnCacheSOCache|AuthnCacheTimeout|AuthnzFcgiCheckAuthnProvider|AuthnzFcgiDefineProvider|AuthType|AuthUserFile|AuthzDBDLoginToReferer|AuthzDBDQuery|AuthzDBDRedirectQuery|AuthzDBMType|AuthzSendForbiddenOnFailure|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|CacheDefaultExpire|CacheDetailHeader|CacheDirLength|CacheDirLevels|CacheDisable|CacheEnable|CacheFile|CacheHeader|CacheIgnoreCacheControl|CacheIgnoreHeaders|CacheIgnoreNoLastMod|CacheIgnoreQueryString|CacheIgnoreURLSessionIdentifiers|CacheKeyBaseURL|CacheLastModifiedFactor|CacheLock|CacheLockMaxAge|CacheLockPath|CacheMaxExpire|CacheMaxFileSize|CacheMinExpire|CacheMinFileSize|CacheNegotiatedDocs|CacheQuickHandler|CacheReadSize|CacheReadTime|CacheRoot|CacheSocache|CacheSocacheMaxSize|CacheSocacheMaxTime|CacheSocacheMinTime|CacheSocacheReadSize|CacheSocacheReadTime|CacheStaleOnError|CacheStoreExpired|CacheStoreNoStore|CacheStorePrivate|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|DeflateBufferSize|DeflateCompressionLevel|DeflateFilterNote|DeflateInflateLimitRequestBody|DeflateInflateRatioBurst|DeflateInflateRatioLimit|DeflateMemLevel|DeflateWindowSize|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|HeartbeatAddress|HeartbeatListen|HeartbeatMaxServers|HeartbeatStorage|HeartbeatStorage|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|IndexHeadInsert|IndexIgnore|IndexIgnoreReset|IndexOptions|IndexOrderDefault|IndexStyleSheet|InputSed|ISAPIAppendLogToErrors|ISAPIAppendLogToQuery|ISAPICacheFile|ISAPIFakeAsync|ISAPILogNotSupported|ISAPIReadAheadBuffer|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAPCacheEntries|LDAPCacheTTL|LDAPConnectionPoolTTL|LDAPConnectionTimeout|LDAPLibraryDebug|LDAPOpCacheEntries|LDAPOpCacheTTL|LDAPReferralHopLimit|LDAPReferrals|LDAPRetries|LDAPRetryDelay|LDAPSharedCacheFile|LDAPSharedCacheSize|LDAPTimeout|LDAPTrustedClientCert|LDAPTrustedGlobalCert|LDAPTrustedMode|LDAPVerifyServerCert|LimitInternalRecursion|LimitRequestBody|LimitRequestFields|LimitRequestFieldSize|LimitRequestLine|LimitXMLRequestBody|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|LuaHookAccessChecker|LuaHookAuthChecker|LuaHookCheckUserID|LuaHookFixups|LuaHookInsertFilter|LuaHookLog|LuaHookMapToStorage|LuaHookTranslateName|LuaHookTypeChecker|LuaInherit|LuaInputFilter|LuaMapHandler|LuaOutputFilter|LuaPackageCPath|LuaPackagePath|LuaQuickHandler|LuaRoot|LuaScope|MaxConnectionsPerChild|MaxKeepAliveRequests|MaxMemFree|MaxRangeOverlaps|MaxRangeReversals|MaxRanges|MaxRequestWorkers|MaxSpareServers|MaxSpareThreads|MaxThreads|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|ProxyAddHeaders|ProxyBadHeader|ProxyBlock|ProxyDomain|ProxyErrorOverride|ProxyExpressDBMFile|ProxyExpressDBMType|ProxyExpressEnable|ProxyFtpDirCharset|ProxyFtpEscapeWildcards|ProxyFtpListOnWildcard|ProxyHTMLBufSize|ProxyHTMLCharsetOut|ProxyHTMLDocType|ProxyHTMLEnable|ProxyHTMLEvents|ProxyHTMLExtended|ProxyHTMLFixups|ProxyHTMLInterp|ProxyHTMLLinks|ProxyHTMLMeta|ProxyHTMLStripComments|ProxyHTMLURLMap|ProxyIOBufferSize|ProxyMaxForwards|ProxyPass|ProxyPassInherit|ProxyPassInterpolateEnv|ProxyPassMatch|ProxyPassReverse|ProxyPassReverseCookieDomain|ProxyPassReverseCookiePath|ProxyPreserveHost|ProxyReceiveBufferSize|ProxyRemote|ProxyRemoteMatch|ProxyRequests|ProxySCGIInternalRedirect|ProxySCGISendfile|ProxySet|ProxySourceAddress|ProxyStatus|ProxyTimeout|ProxyVia|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIPHeader|RemoteIPInternalProxy|RemoteIPInternalProxyList|RemoteIPProxiesHeader|RemoteIPTrustedProxy|RemoteIPTrustedProxyList|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|RewriteBase|RewriteCond|RewriteEngine|RewriteMap|RewriteOptions|RewriteRule|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script|ScriptAlias|ScriptAliasMatch|ScriptInterpreterSource|ScriptLog|ScriptLogBuffer|ScriptLogLength|ScriptSock|SecureListen|SeeRequestTail|SendBufferSize|ServerAdmin|ServerAlias|ServerLimit|ServerName|ServerPath|ServerRoot|ServerSignature|ServerTokens|Session|SessionCookieName|SessionCookieName2|SessionCookieRemove|SessionCryptoCipher|SessionCryptoDriver|SessionCryptoPassphrase|SessionCryptoPassphraseFile|SessionDBDCookieName|SessionDBDCookieName2|SessionDBDCookieRemove|SessionDBDDeleteLabel|SessionDBDInsertLabel|SessionDBDPerUser|SessionDBDSelectLabel|SessionDBDUpdateLabel|SessionEnv|SessionExclude|SessionHeader|SessionInclude|SessionMaxAge|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSLCACertificateFile|SSLCACertificatePath|SSLCADNRequestFile|SSLCADNRequestPath|SSLCARevocationCheck|SSLCARevocationFile|SSLCARevocationPath|SSLCertificateChainFile|SSLCertificateFile|SSLCertificateKeyFile|SSLCipherSuite|SSLCompression|SSLCryptoDevice|SSLEngine|SSLFIPS|SSLHonorCipherOrder|SSLInsecureRenegotiation|SSLOCSPDefaultResponder|SSLOCSPEnable|SSLOCSPOverrideResponder|SSLOCSPResponderTimeout|SSLOCSPResponseMaxAge|SSLOCSPResponseTimeSkew|SSLOCSPUseRequestNonce|SSLOpenSSLConfCmd|SSLOptions|SSLPassPhraseDialog|SSLProtocol|SSLProxyCACertificateFile|SSLProxyCACertificatePath|SSLProxyCARevocationCheck|SSLProxyCARevocationFile|SSLProxyCARevocationPath|SSLProxyCheckPeerCN|SSLProxyCheckPeerExpire|SSLProxyCheckPeerName|SSLProxyCipherSuite|SSLProxyEngine|SSLProxyMachineCertificateChainFile|SSLProxyMachineCertificateFile|SSLProxyMachineCertificatePath|SSLProxyProtocol|SSLProxyVerify|SSLProxyVerifyDepth|SSLRandomSeed|SSLRenegBufferSize|SSLRequire|SSLRequireSSL|SSLSessionCache|SSLSessionCacheTimeout|SSLSessionTicketKeyFile|SSLSRPUnknownUserSeed|SSLSRPVerifierFile|SSLStaplingCache|SSLStaplingErrorCacheTimeout|SSLStaplingFakeTryLater|SSLStaplingForceURL|SSLStaplingResponderTimeout|SSLStaplingResponseMaxAge|SSLStaplingResponseTimeSkew|SSLStaplingReturnResponderErrors|SSLStaplingStandardCacheTimeout|SSLStrictSNIVHostCheck|SSLUserName|SSLUseStapling|SSLVerifyClient|SSLVerifyDepth|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|VirtualDocumentRoot|VirtualDocumentRootIP|VirtualScriptAlias|VirtualScriptAliasIP|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
                        lookbehind: !0,
                        alias: "property"
                    },
                    "directive-block": {
                        pattern: /<\/?\b(AuthnProviderAlias|AuthzProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|RequireAll|RequireAny|RequireNone|VirtualHost)\b *.*>/i,
                        inside: {
                            "directive-block": {
                                pattern: /^<\/?\w+/,
                                inside: {
                                    punctuation: /^<\/?/
                                },
                                alias: "tag"
                            },
                            "directive-block-parameter": {
                                pattern: /.*[^>]/,
                                inside: {
                                    punctuation: /:/,
                                    string: {
                                        pattern: /("|').*\1/,
                                        inside: {
                                            variable: /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/
                                        }
                                    }
                                },
                                alias: "attr-value"
                            },
                            punctuation: />/
                        },
                        alias: "tag"
                    },
                    "directive-flags": {
                        pattern: /\[(\w,?)+\]/,
                        alias: "keyword"
                    },
                    string: {
                        pattern: /("|').*\1/,
                        inside: {
                            variable: /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/
                        }
                    },
                    variable: /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/,
                    regex: /\^?.*\$|\^.*\$?/
                }, n.languages.apl = {
                    comment: /(?:⍝|#[! ]).*$/m,
                    string: /'(?:[^'\r\n]|'')*'/,
                    number: /¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[\+¯]?\d+)?|¯|∞))?/i,
                    statement: /:[A-Z][a-z][A-Za-z]*\b/,
                    "system-function": {
                        pattern: /⎕[A-Z]+/i,
                        alias: "function"
                    },
                    constant: /[⍬⌾#⎕⍞]/,
                    function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
                    "monadic-operator": {
                        pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
                        alias: "operator"
                    },
                    "dyadic-operator": {
                        pattern: /[.⍣⍠⍤∘⌸]/,
                        alias: "operator"
                    },
                    assignment: {
                        pattern: /←/,
                        alias: "keyword"
                    },
                    punctuation: /[\[;\]()◇⋄]/,
                    dfn: {
                        pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
                        alias: "builtin"
                    }
                }, n.languages.applescript = {
                    comment: [/\(\*(?:\(\*[\w\W]*?\*\)|[\w\W])*?\*\)/, /--.+/, /#.+/],
                    string: /"(?:\\?.)*?"/,
                    number: /\b-?\d*\.?\d+([Ee]-?\d+)?\b/,
                    operator: [/[&=≠≤≥*+\-\/÷^]|[<>]=?/, /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/],
                    keyword: /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
                    class: {
                        pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,
                        alias: "builtin"
                    },
                    punctuation: /[{}():,¬«»《》]/
                },
                function(e) {
                    
                    var t = {
                        pattern: /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\]\\]|\\.)*\]|[^\]\\]|\\.)*\]/m,
                        lookbehind: !0,
                        inside: {
                            quoted: {
                                pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/,
                                inside: {
                                    punctuation: /^[$`]|[$`]$/
                                }
                            },
                            interpreted: {
                                pattern: /'(?:[^'\\]|\\.)*'/,
                                inside: {
                                    punctuation: /^'|'$/
                                }
                            },
                            string: /"(?:[^"\\]|\\.)*"/,
                            variable: /\w+(?==)/,
                            punctuation: /^\[|\]$|,/,
                            operator: /=/,
                            "attr-value": /(?!^\s+$).+/
                        }
                    };
                    e.languages.asciidoc = {
                        "comment-block": {
                            pattern: /^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m,
                            alias: "comment"
                        },
                        table: {
                            pattern: /^\|={3,}(?:(?:\r?\n|\r).*)*?(?:\r?\n|\r)\|={3,}$/m,
                            inside: {
                                specifiers: {
                                    pattern: /(?!\|)(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*])?(?:[<^>](?:\.[<^>])?|\.[<^>])?[a-z]*)(?=\|)/,
                                    alias: "attr-value"
                                },
                                punctuation: {
                                    pattern: /(^|[^\\])[|!]=*/,
                                    lookbehind: !0
                                }
                            }
                        },
                        "passthrough-block": {
                            pattern: /^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
                            inside: {
                                punctuation: /^\++|\++$/
                            }
                        },
                        "literal-block": {
                            pattern: /^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
                            inside: {
                                punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/
                            }
                        },
                        "other-block": {
                            pattern: /^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
                            inside: {
                                punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/
                            }
                        },
                        "list-punctuation": {
                            pattern: /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
                            lookbehind: !0,
                            alias: "punctuation"
                        },
                        "list-label": {
                            pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,
                            lookbehind: !0,
                            alias: "symbol"
                        },
                        "indented-block": {
                            pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,
                            lookbehind: !0
                        },
                        comment: /^\/\/.*/m,
                        title: {
                            pattern: /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} +.+|^\.(?![\s.]).*/m,
                            alias: "important",
                            inside: {
                                punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/
                            }
                        },
                        "attribute-entry": {
                            pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,
                            alias: "tag"
                        },
                        attributes: t,
                        hr: {
                            pattern: /^'{3,}$/m,
                            alias: "punctuation"
                        },
                        "page-break": {
                            pattern: /^<{3,}$/m,
                            alias: "punctuation"
                        },
                        admonition: {
                            pattern: /^(?:TIP|NOTE|IMPORTANT|WARNING|CAUTION):/m,
                            alias: "keyword"
                        },
                        callout: [{
                            pattern: /(^[ \t]*)<?\d*>/m,
                            lookbehind: !0,
                            alias: "symbol"
                        }, {
                            pattern: /<\d+>/,
                            alias: "symbol"
                        }],
                        macro: {
                            pattern: /\b[a-z\d][a-z\d-]*::?(?:(?:\S+)??\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
                            inside: {
                                function: /^[a-z\d-]+(?=:)/,
                                punctuation: /^::?/,
                                attributes: {
                                    pattern: /(?:\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
                                    inside: t.inside
                                }
                            }
                        },
                        inline: {
                            pattern: /(^|[^\\])(?:(?:\B\[(?:[^\]\\"]|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?: ['`]|.)+?(?:(?:\r?\n|\r)(?: ['`]|.)+?)*['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"]|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
                            lookbehind: !0,
                            inside: {
                                attributes: t,
                                url: {
                                    pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
                                    inside: {
                                        punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/
                                    }
                                },
                                "attribute-ref": {
                                    pattern: /^\{.+\}$/,
                                    inside: {
                                        variable: {
                                            pattern: /(^\{)[a-z\d,+_-]+/,
                                            lookbehind: !0
                                        },
                                        operator: /^[=?!#%@$]|!(?=[:}])/,
                                        punctuation: /^\{|\}$|::?/
                                    }
                                },
                                italic: {
                                    pattern: /^(['_])[\s\S]+\1$/,
                                    inside: {
                                        punctuation: /^(?:''?|__?)|(?:''?|__?)$/
                                    }
                                },
                                bold: {
                                    pattern: /^\*[\s\S]+\*$/,
                                    inside: {
                                        punctuation: /^\*\*?|\*\*?$/
                                    }
                                },
                                punctuation: /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/
                            }
                        },
                        replacement: {
                            pattern: /\((?:C|TM|R)\)/,
                            alias: "builtin"
                        },
                        entity: /&#?[\da-z]{1,8};/i,
                        "line-continuation": {
                            pattern: /(^| )\+$/m,
                            lookbehind: !0,
                            alias: "punctuation"
                        }
                    }, t.inside.interpreted.inside.rest = {
                        macro: e.languages.asciidoc.macro,
                        inline: e.languages.asciidoc.inline,
                        replacement: e.languages.asciidoc.replacement,
                        entity: e.languages.asciidoc.entity
                    }, e.languages.asciidoc["passthrough-block"].inside.rest = {
                        macro: e.languages.asciidoc.macro
                    }, e.languages.asciidoc["literal-block"].inside.rest = {
                        callout: e.languages.asciidoc.callout
                    }, e.languages.asciidoc.table.inside.rest = {
                        "comment-block": e.languages.asciidoc["comment-block"],
                        "passthrough-block": e.languages.asciidoc["passthrough-block"],
                        "literal-block": e.languages.asciidoc["literal-block"],
                        "other-block": e.languages.asciidoc["other-block"],
                        "list-punctuation": e.languages.asciidoc["list-punctuation"],
                        "indented-block": e.languages.asciidoc["indented-block"],
                        comment: e.languages.asciidoc.comment,
                        title: e.languages.asciidoc.title,
                        "attribute-entry": e.languages.asciidoc["attribute-entry"],
                        attributes: e.languages.asciidoc.attributes,
                        hr: e.languages.asciidoc.hr,
                        "page-break": e.languages.asciidoc["page-break"],
                        admonition: e.languages.asciidoc.admonition,
                        "list-label": e.languages.asciidoc["list-label"],
                        callout: e.languages.asciidoc.callout,
                        macro: e.languages.asciidoc.macro,
                        inline: e.languages.asciidoc.inline,
                        replacement: e.languages.asciidoc.replacement,
                        entity: e.languages.asciidoc.entity,
                        "line-continuation": e.languages.asciidoc["line-continuation"]
                    }, e.languages.asciidoc["other-block"].inside.rest = {
                        table: e.languages.asciidoc.table,
                        "list-punctuation": e.languages.asciidoc["list-punctuation"],
                        "indented-block": e.languages.asciidoc["indented-block"],
                        comment: e.languages.asciidoc.comment,
                        "attribute-entry": e.languages.asciidoc["attribute-entry"],
                        attributes: e.languages.asciidoc.attributes,
                        hr: e.languages.asciidoc.hr,
                        "page-break": e.languages.asciidoc["page-break"],
                        admonition: e.languages.asciidoc.admonition,
                        "list-label": e.languages.asciidoc["list-label"],
                        macro: e.languages.asciidoc.macro,
                        inline: e.languages.asciidoc.inline,
                        replacement: e.languages.asciidoc.replacement,
                        entity: e.languages.asciidoc.entity,
                        "line-continuation": e.languages.asciidoc["line-continuation"]
                    }, e.languages.asciidoc.title.inside.rest = {
                        macro: e.languages.asciidoc.macro,
                        inline: e.languages.asciidoc.inline,
                        replacement: e.languages.asciidoc.replacement,
                        entity: e.languages.asciidoc.entity
                    }, e.hooks.add("wrap", function(e) {
                        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
                    })
                }(n), n.languages.aspnet = n.languages.extend("markup", {
                    "page-directive tag": {
                        pattern: /<%\s*@.*%>/i,
                        inside: {
                            "page-directive tag": /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
                            rest: n.languages.markup.tag.inside
                        }
                    },
                    "directive tag": {
                        pattern: /<%.*%>/i,
                        inside: {
                            "directive tag": /<%\s*?[$=%#:]{0,2}|%>/i,
                            rest: n.languages.csharp
                        }
                    }
                }), n.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i, n.languages.insertBefore("inside", "punctuation", {
                    "directive tag": n.languages.aspnet["directive tag"]
                }, n.languages.aspnet.tag.inside["attr-value"]), n.languages.insertBefore("aspnet", "comment", {
                    "asp comment": /<%--[\w\W]*?--%>/
                }), n.languages.insertBefore("aspnet", n.languages.javascript ? "script" : "tag", {
                    "asp script": {
                        pattern: /(<script(?=.*runat=['"]?server['"]?)[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
                        lookbehind: !0,
                        inside: n.languages.csharp || {}
                    }
                }), n.languages.autoit = {
                    comment: [/;.*/, {
                        pattern: /(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m,
                        lookbehind: !0
                    }],
                    url: {
                        pattern: /(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
                        lookbehind: !0
                    },
                    string: {
                        pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
                        inside: {
                            variable: /([%$@])\w+\1/
                        }
                    },
                    directive: {
                        pattern: /(^\s*)#\w+/m,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    function: /\b\w+(?=\()/,
                    variable: /[$@]\w+/,
                    keyword: /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
                    number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
                    boolean: /\b(?:True|False)\b/i,
                    operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,
                    punctuation: /[\[\]().,:]/
                }, n.languages.autohotkey = {
                    comment: {
                        pattern: /(^[^";\n]*("[^"\n]*?"[^"\n]*?)*)(;.*$|^\s*\/\*[\s\S]*\n\*\/)/m,
                        lookbehind: !0
                    },
                    string: /"(([^"\n\r]|"")*)"/m,
                    function: /[^\(\); \t,\n\+\*\-=\?>:\\\/<&%\[\]]+?(?=\()/m,
                    tag: /^[ \t]*[^\s:]+?(?=:(?:[^:]|$))/m,
                    variable: /%\w+%/,
                    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
                    operator: /\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,
                    punctuation: /[\{}[\]\(\):,]/,
                    boolean: /\b(true|false)\b/,
                    selector: /\b(AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,
                    constant: /\b(a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_formatfloat|a_formatinteger|a_gui|a_guievent|a_guicontrol|a_guicontrolevent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|programfiles|a_programfiles|a_programs|a_programscommon|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel)\b/i,
                    builtin: /\b(abs|acos|asc|asin|atan|ceil|chr|class|cos|dllcall|exp|fileexist|Fileopen|floor|il_add|il_create|il_destroy|instr|substr|isfunc|islabel|IsObject|ln|log|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|onmessage|numget|numput|registercallback|regexmatch|regexreplace|round|sin|tan|sqrt|strlen|sb_seticon|sb_setparts|sb_settext|strsplit|tv_add|tv_delete|tv_getchild|tv_getcount|tv_getnext|tv_get|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__New|__Call|__Get|__Set)\b/i,
                    symbol: /\b(alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,
                    important: /#\b(AllowSameLineComments|ClipboardTimeout|CommentFlag|ErrorStdOut|EscapeChar|HotkeyInterval|HotkeyModifierTimeout|Hotstring|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Include|IncludeAgain|InstallKeybdHook|InstallMouseHook|KeyHistory|LTrim|MaxHotkeysPerInterval|MaxMem|MaxThreads|MaxThreadsBuffer|MaxThreadsPerHotkey|NoEnv|NoTrayIcon|Persistent|SingleInstance|UseHook|WinActivateForce)\b/i,
                    keyword: /\b(Abort|AboveNormal|Add|ahk_class|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Region|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|TryAgain|Type|UnCheck|underline|Unicode|Unlock|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i
                },
                function(e) {
                    var t = {
                        variable: [{
                            pattern: /\$?\(\([\w\W]+?\)\)/,
                            inside: {
                                variable: [{
                                    pattern: /(^\$\(\([\w\W]+)\)\)/,
                                    lookbehind: !0
                                }, /^\$\(\(/],
                                number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
                                operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                                punctuation: /\(\(?|\)\)?|,|;/
                            }
                        }, {
                            pattern: /\$\([^)]+\)|`[^`]+`/,
                            inside: {
                                variable: /^\$\(|^`|\)$|`$/
                            }
                        }, /\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]
                    };
                    e.languages.bash = {
                        shebang: {
                            pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
                            alias: "important"
                        },
                        comment: {
                            pattern: /(^|[^"{\\])#.*/,
                            lookbehind: !0
                        },
                        string: [{
                            pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
                            lookbehind: !0,
                            greedy: !0,
                            inside: t
                        }, {
                            pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g,
                            greedy: !0,
                            inside: t
                        }],
                        variable: t.variable,
                        function: {
                            pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
                            lookbehind: !0
                        },
                        keyword: {
                            pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
                            lookbehind: !0
                        },
                        boolean: {
                            pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,
                            lookbehind: !0
                        },
                        operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
                        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
                    };
                    var n = t.variable[1].inside;
                    n.function = e.languages.bash.function, n.keyword = e.languages.bash.keyword, n.boolean = e.languages.bash.boolean, n.operator = e.languages.bash.operator, n.punctuation = e.languages.bash.punctuation
                }(n), n.languages.basic = {
                    string: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
                    comment: {
                        pattern: /(?:!|REM\b).+/i,
                        inside: {
                            keyword: /^REM/i
                        }
                    },
                    number: /(?:\b|\B[.-])(?:\d+\.?\d*)(?:E[+-]?\d+)?/i,
                    keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
                    function: /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
                    operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
                    punctuation: /[,;:()]/
                },
                function(e) {
                    var t = /%%?[~:\w]+%?|!\S+!/,
                        i = {
                            pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
                            alias: "attr-name",
                            inside: {
                                punctuation: /:/
                            }
                        },
                        a = /"[^"]*"/,
                        r = /(?:\b|-)\d+\b/;
                    n.languages.batch = {
                        comment: [/^::.*/m, {
                            pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                            lookbehind: !0
                        }],
                        label: {
                            pattern: /^:.*/m,
                            alias: "property"
                        },
                        command: [{
                            pattern: /((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,
                            lookbehind: !0,
                            inside: {
                                keyword: /^for\b|\b(?:in|do)\b/i,
                                string: a,
                                parameter: i,
                                variable: t,
                                number: r,
                                punctuation: /[()',]/
                            }
                        }, {
                            pattern: /((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,
                            lookbehind: !0,
                            inside: {
                                keyword: /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
                                string: a,
                                parameter: i,
                                variable: t,
                                number: r,
                                operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i
                            }
                        }, {
                            pattern: /((?:^|[&()])[ \t]*)else\b/im,
                            lookbehind: !0,
                            inside: {
                                keyword: /^else\b/i
                            }
                        }, {
                            pattern: /((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                            lookbehind: !0,
                            inside: {
                                keyword: /^set\b/i,
                                string: a,
                                parameter: i,
                                variable: [t, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
                                number: r,
                                operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
                                punctuation: /[()',]/
                            }
                        }, {
                            pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                            lookbehind: !0,
                            inside: {
                                keyword: /^\w+\b/i,
                                string: a,
                                parameter: i,
                                label: {
                                    pattern: /(^\s*):\S+/m,
                                    lookbehind: !0,
                                    alias: "property"
                                },
                                variable: t,
                                number: r,
                                operator: /\^/
                            }
                        }],
                        operator: /[&@]/,
                        punctuation: /[()']/
                    }
                }(), n.languages.c = n.languages.extend("clike", {
                    keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
                    operator: /\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,
                    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i
                }), n.languages.insertBefore("c", "string", {
                    macro: {
                        pattern: /(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,
                        lookbehind: !0,
                        alias: "property",
                        inside: {
                            string: {
                                pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,
                                lookbehind: !0
                            },
                            directive: {
                                pattern: /(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                                lookbehind: !0,
                                alias: "keyword"
                            }
                        }
                    },
                    constant: /\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/
                }), delete n.languages.c["class-name"], delete n.languages.c.boolean, n.languages.brainfuck = {
                    pointer: {
                        pattern: /<|>/,
                        alias: "keyword"
                    },
                    increment: {
                        pattern: /\+/,
                        alias: "inserted"
                    },
                    decrement: {
                        pattern: /-/,
                        alias: "deleted"
                    },
                    branching: {
                        pattern: /\[|\]/,
                        alias: "important"
                    },
                    operator: /[.,]/,
                    comment: /\S+/
                }, n.languages.bro = {
                    comment: {
                        pattern: /(^|[^\\$])#.*/,
                        lookbehind: !0,
                        inside: {
                            italic: /\b(TODO|FIXME|XXX)\b/
                        }
                    },
                    string: {
                        pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    },
                    boolean: /\b(T|F)\b/,
                    function: {
                        pattern: /(?:function|hook|event) [a-zA-Z0-9_]+(::[a-zA-Z0-9_]+)?/,
                        inside: {
                            keyword: /^(?:function|hook|event)/
                        }
                    },
                    variable: {
                        pattern: /(?:global|local) [a-zA-Z0-9_]+/i,
                        inside: {
                            keyword: /(?:global|local)/
                        }
                    },
                    builtin: /(@(load(-(sigs|plugin))?|unload|prefixes|ifn?def|else|(end)?if|DIR|FILENAME))|(&?(redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,
                    constant: {
                        pattern: /const [a-zA-Z0-9_]+/i,
                        inside: {
                            keyword: /const/
                        }
                    },
                    keyword: /\b(break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\b/,
                    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,
                    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
                    punctuation: /[{}[\];(),.:]/
                }, n.languages.bison = n.languages.extend("c", {}), n.languages.insertBefore("bison", "comment", {
                    bison: {
                        pattern: /^[\s\S]*?%%[\s\S]*?%%/,
                        inside: {
                            c: {
                                pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
                                inside: {
                                    delimiter: {
                                        pattern: /^%?\{|%?\}$/,
                                        alias: "punctuation"
                                    },
                                    "bison-variable": {
                                        pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
                                        alias: "variable",
                                        inside: {
                                            punctuation: /<|>/
                                        }
                                    },
                                    rest: n.languages.c
                                }
                            },
                            comment: n.languages.c.comment,
                            string: n.languages.c.string,
                            property: /\S+(?=:)/,
                            keyword: /%\w+/,
                            number: {
                                pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
                                lookbehind: !0
                            },
                            punctuation: /%[%?]|[|:;\[\]<>]/
                        }
                    }
                }), n.languages.csharp = n.languages.extend("clike", {
                    keyword: /\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,
                    string: [/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/, /("|')(\\?.)*?\1/],
                    number: /\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i
                }), n.languages.insertBefore("csharp", "keyword", {
                    "generic-method": {
                        pattern: /[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,
                        alias: "function",
                        inside: {
                            keyword: n.languages.csharp.keyword,
                            punctuation: /[<>(),.:]/
                        }
                    },
                    preprocessor: {
                        pattern: /(^\s*)#.*/m,
                        lookbehind: !0,
                        alias: "property",
                        inside: {
                            directive: {
                                pattern: /(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
                                lookbehind: !0,
                                alias: "keyword"
                            }
                        }
                    }
                }), n.languages.cpp = n.languages.extend("c", {
                    keyword: /\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
                    boolean: /\b(true|false)\b/,
                    operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
                }), n.languages.insertBefore("cpp", "keyword", {
                    "class-name": {
                        pattern: /(class\s+)[a-z0-9_]+/i,
                        lookbehind: !0
                    }
                }),
                function(e) {
                    var t = /#(?!\{).+/,
                        n = {
                            pattern: /#\{[^}]+\}/,
                            alias: "variable"
                        };
                    e.languages.coffeescript = e.languages.extend("javascript", {
                        comment: t,
                        string: [{
                            pattern: /'(?:\\?[^\\])*?'/,
                            greedy: !0
                        }, {
                            pattern: /"(?:\\?[^\\])*?"/,
                            greedy: !0,
                            inside: {
                                interpolation: n
                            }
                        }],
                        keyword: /\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
                        "class-member": {
                            pattern: /@(?!\d)\w+/,
                            alias: "variable"
                        }
                    }), e.languages.insertBefore("coffeescript", "comment", {
                        "multiline-comment": {
                            pattern: /###[\s\S]+?###/,
                            alias: "comment"
                        },
                        "block-regex": {
                            pattern: /\/{3}[\s\S]*?\/{3}/,
                            alias: "regex",
                            inside: {
                                comment: t,
                                interpolation: n
                            }
                        }
                    }), e.languages.insertBefore("coffeescript", "string", {
                        "inline-javascript": {
                            pattern: /`(?:\\?[\s\S])*?`/,
                            inside: {
                                delimiter: {
                                    pattern: /^`|`$/,
                                    alias: "punctuation"
                                },
                                rest: e.languages.javascript
                            }
                        },
                        "multiline-string": [{
                            pattern: /'''[\s\S]*?'''/,
                            greedy: !0,
                            alias: "string"
                        }, {
                            pattern: /"""[\s\S]*?"""/,
                            greedy: !0,
                            alias: "string",
                            inside: {
                                interpolation: n
                            }
                        }]
                    }), e.languages.insertBefore("coffeescript", "keyword", {
                        property: /(?!\d)\w+(?=\s*:(?!:))/
                    }), delete e.languages.coffeescript["template-string"]
                }(n),
                function(e) {
                    e.languages.ruby = e.languages.extend("clike", {
                        comment: /#(?!\{[^\r\n]*?\}).*/,
                        keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
                    });
                    var t = {
                        pattern: /#\{[^}]+\}/,
                        inside: {
                            delimiter: {
                                pattern: /^#\{|\}$/,
                                alias: "tag"
                            },
                            rest: e.util.clone(e.languages.ruby)
                        }
                    };
                    e.languages.insertBefore("ruby", "keyword", {
                        regex: [{
                            pattern: /%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,
                            inside: {
                                interpolation: t
                            }
                        }, {
                            pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
                            inside: {
                                interpolation: t
                            }
                        }, {
                            pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
                            inside: {
                                interpolation: t
                            }
                        }, {
                            pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
                            inside: {
                                interpolation: t
                            }
                        }, {
                            pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
                            inside: {
                                interpolation: t
                            }
                        }, {
                            pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
                            lookbehind: !0
                        }],
                        variable: /[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,
                        symbol: /:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/
                    }), e.languages.insertBefore("ruby", "number", {
                        builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
                        constant: /\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/
                    }), e.languages.ruby.string = [{
                        pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,
                        greedy: !0,
                        inside: {
                            interpolation: t
                        }
                    }, {
                        pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
                        greedy: !0,
                        inside: {
                            interpolation: t
                        }
                    }, {
                        pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
                        greedy: !0,
                        inside: {
                            interpolation: t
                        }
                    }, {
                        pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
                        greedy: !0,
                        inside: {
                            interpolation: t
                        }
                    }, {
                        pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
                        greedy: !0,
                        inside: {
                            interpolation: t
                        }
                    }, {
                        pattern: /("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,
                        greedy: !0,
                        inside: {
                            interpolation: t
                        }
                    }]
                }(n), n.languages.css.selector = {
                    pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
                    inside: {
                        "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                        "pseudo-class": /:[-\w]+(?:\(.*\))?/,
                        class: /\.[-:\.\w]+/,
                        id: /#[-:\.\w]+/,
                        attribute: /\[[^\]]+\]/
                    }
                }, n.languages.insertBefore("css", "function", {
                    hexcode: /#[\da-f]{3,6}/i,
                    entity: /\\[\da-f]{1,8}/i,
                    number: /[\d%\.]+/
                }), n.languages.d = n.languages.extend("clike", {
                    string: [/\b[rx]"(\\.|[^\\"])*"[cwd]?/, /\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/, /\bq"([_a-zA-Z][_a-zA-Z\d]*)(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\1"/, /\bq"(.)[\s\S]*?\1"/, /'(?:\\'|\\?[^']+)'/, /(["`])(\\.|(?!\1)[^\\])*\1[cwd]?/],
                    number: [/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]*/i, {
                        pattern: /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]*/i,
                        lookbehind: !0
                    }],
                    keyword: /\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,
                    operator: /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/
                }), n.languages.d.comment = [/^\s*#!.+/, {
                    pattern: /(^|[^\\])\/\+(?:\/\+[\w\W]*?\+\/|[\w\W])*?\+\//,
                    lookbehind: !0
                }].concat(n.languages.d.comment), n.languages.insertBefore("d", "comment", {
                    "token-string": {
                        pattern: /\bq\{(?:|\{[^}]*\}|[^}])*\}/,
                        alias: "string"
                    }
                }), n.languages.insertBefore("d", "keyword", {
                    property: /\B@\w*/
                }), n.languages.insertBefore("d", "function", {
                    register: {
                        pattern: /\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
                        alias: "variable"
                    }
                }), n.languages.dart = n.languages.extend("clike", {
                    string: [/r?("""|''')[\s\S]*?\1/, /r?("|')(\\?.)*?\1/],
                    keyword: [/\b(?:async|sync|yield)\*/, /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\b/],
                    operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
                }), n.languages.insertBefore("dart", "function", {
                    metadata: {
                        pattern: /@\w+/,
                        alias: "symbol"
                    }
                }), n.languages.diff = {
                    coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
                    deleted: /^[-<].*$/m,
                    inserted: /^[+>].*$/m,
                    diff: {
                        pattern: /^!(?!!).+$/m,
                        alias: "important"
                    }
                }, n.languages.docker = {
                    keyword: {
                        pattern: /(^\s*)(?:ONBUILD|FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|COPY|VOLUME|USER|WORKDIR|CMD|LABEL|ENTRYPOINT)(?=\s)/im,
                        lookbehind: !0
                    },
                    string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*?\1/,
                    comment: /#.*/,
                    punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/
                }, n.languages.eiffel = {
                    string: [/"([^[]*)\[[\s\S]+?\]\1"/, /"([^{]*)\{[\s\S]+?\}\1"/, /"(?:%\s+%|%"|.)*?"/],
                    comment: /--.*/,
                    char: /'(?:%'|.)+?'/,
                    keyword: /\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
                    boolean: /\b(?:True|False)\b/i,
                    number: [/\b0[xcb][\da-f](?:_*[\da-f])*\b/i, /(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?[eE][+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/],
                    punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
                    operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
                }, n.languages.elixir = {
                    comment: {
                        pattern: /(^|[^#])#(?![{#]).*/m,
                        lookbehind: !0
                    },
                    regex: /~[rR](?:("""|'''|[\/|"'])(?:\\.|(?!\1)[^\\])+\1|\((?:\\\)|[^)])+\)|\[(?:\\\]|[^\]])+\]|\{(?:\\\}|[^}])+\}|<(?:\\>|[^>])+>)[uismxfr]*/,
                    string: [{
                        pattern: /~[cCsSwW](?:("""|'''|[\/|"'])(?:\\.|(?!\1)[^\\])+\1|\((?:\\\)|[^)])+\)|\[(?:\\\]|[^\]])+\]|\{(?:\\\}|#\{[^}]+\}|[^}])+\}|<(?:\\>|[^>])+>)[csa]?/,
                        inside: {}
                    }, {
                        pattern: /("""|''')[\s\S]*?\1/,
                        inside: {}
                    }, {
                        pattern: /("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
                        inside: {}
                    }],
                    atom: {
                        pattern: /(^|[^:]):\w+/,
                        lookbehind: !0,
                        alias: "symbol"
                    },
                    "attr-name": /\w+:(?!:)/,
                    capture: {
                        pattern: /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,
                        lookbehind: !0,
                        alias: "function"
                    },
                    argument: {
                        pattern: /(^|[^&])&\d+/,
                        lookbehind: !0,
                        alias: "variable"
                    },
                    attribute: {
                        pattern: /@[\S]+/,
                        alias: "variable"
                    },
                    number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
                    keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,
                    boolean: /\b(?:true|false|nil)\b/,
                    operator: [/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/, {
                        pattern: /([^<])<(?!<)/,
                        lookbehind: !0
                    }, {
                        pattern: /([^>])>(?!>)/,
                        lookbehind: !0
                    }],
                    punctuation: /<<|>>|[.,%\[\]{}()]/
                }, n.languages.elixir.string.forEach(function(e) {
                    e.inside = {
                        interpolation: {
                            pattern: /#\{[^}]+\}/,
                            inside: {
                                delimiter: {
                                    pattern: /^#\{|\}$/,
                                    alias: "punctuation"
                                },
                                rest: n.util.clone(n.languages.elixir)
                            }
                        }
                    }
                }), n.languages.erlang = {
                    comment: /%.+/,
                    string: /"(?:\\?.)*?"/,
                    "quoted-function": {
                        pattern: /'(?:\\.|[^'\\])+'(?=\()/,
                        alias: "function"
                    },
                    "quoted-atom": {
                        pattern: /'(?:\\.|[^'\\])+'/,
                        alias: "atom"
                    },
                    boolean: /\b(?:true|false)\b/,
                    keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
                    number: [/\$\\?./, /\d+#[a-z0-9]+/i, /(?:\b|-)\d*\.?\d+([Ee][+-]?\d+)?\b/],
                    function: /\b[a-z][\w@]*(?=\()/,
                    variable: {
                        pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
                        lookbehind: !0
                    },
                    operator: [/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/, {
                        pattern: /(^|[^<])<(?!<)/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^>])>(?!>)/,
                        lookbehind: !0
                    }],
                    atom: /\b[a-z][\w@]*/,
                    punctuation: /[()[\]{}:;,.#|]|<<|>>/
                }, n.languages.fsharp = n.languages.extend("clike", {
                    comment: [{
                        pattern: /(^|[^\\])\(\*[\w\W]*?\*\)/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0
                    }],
                    keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
                    string: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|("|')(?:\\\1|\\?(?!\1)[\s\S])*\1)B?/,
                    number: [/\b-?0x[\da-fA-F]+(un|lf|LF)?\b/, /\b-?0b[01]+(y|uy)?\b/, /\b-?(\d*\.?\d+|\d+\.)([fFmM]|[eE][+-]?\d+)?\b/, /\b-?\d+(y|uy|s|us|l|u|ul|L|UL|I)?\b/]
                }), n.languages.insertBefore("fsharp", "keyword", {
                    preprocessor: {
                        pattern: /^[^\r\n\S]*#.*/m,
                        alias: "property",
                        inside: {
                            directive: {
                                pattern: /(\s*#)\b(else|endif|if|light|line|nowarn)\b/,
                                lookbehind: !0,
                                alias: "keyword"
                            }
                        }
                    }
                }), n.languages.fortran = {
                    "quoted-number": {
                        pattern: /[BOZ](['"])[A-F0-9]+\1/i,
                        alias: "number"
                    },
                    string: {
                        pattern: /(?:\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:\s*!.+(?:\r\n?|\n))?|(?!\1).)*(?:\1|&)/,
                        inside: {
                            comment: {
                                pattern: /(&(?:\r\n?|\n)\s*)!.*/,
                                lookbehind: !0
                            }
                        }
                    },
                    comment: /!.*/,
                    boolean: /\.(?:TRUE|FALSE)\.(?:_\w+)?/i,
                    number: /(?:\b|[+-])(?:\d+(?:\.\d*)?|\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,
                    keyword: [/\b(?:INTEGER|REAL|DOUBLE ?PRECISION|COMPLEX|CHARACTER|LOGICAL)\b/i, /\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i, /\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i, /\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEWHERE|ELSEIF|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i],
                    operator: [/\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.(?:EQ|NE|LT|LE|GT|GE|NOT|AND|OR|EQV|NEQV)\.|\.[A-Z]+\./i, {
                        pattern: /(^|(?!\().)\/(?!\))/,
                        lookbehind: !0
                    }],
                    punctuation: /\(\/|\/\)|[(),;:&]/
                }, n.languages.gherkin = {
                    pystring: {
                        pattern: /("""|''')[\s\S]+?\1/,
                        alias: "string"
                    },
                    comment: {
                        pattern: /((^|\r?\n|\r)[ \t]*)#.*/,
                        lookbehind: !0
                    },
                    tag: {
                        pattern: /((^|\r?\n|\r)[ \t]*)@\S*/,
                        lookbehind: !0
                    },
                    feature: {
                        pattern: /((^|\r?\n|\r)[ \t]*)(Ability|Ahoy matey!|Arwedd|Aspekt|Besigheid Behoefte|Business Need|Caracteristica|Característica|Egenskab|Egenskap|Eiginleiki|Feature|Fīča|Fitur|Fonctionnalité|Fonksyonalite|Funcionalidade|Funcionalitat|Functionalitate|Funcţionalitate|Funcționalitate|Functionaliteit|Fungsi|Funkcia|Funkcija|Funkcionalitāte|Funkcionalnost|Funkcja|Funksie|Funktionalität|Funktionalitéit|Funzionalità|Hwaet|Hwæt|Jellemző|Karakteristik|laH|Lastnost|Mak|Mogucnost|Mogućnost|Moznosti|Možnosti|OH HAI|Omadus|Ominaisuus|Osobina|Özellik|perbogh|poQbogh malja'|Potrzeba biznesowa|Požadavek|Požiadavka|Pretty much|Qap|Qu'meH 'ut|Savybė|Tính năng|Trajto|Vermoë|Vlastnosť|Właściwość|Značilnost|Δυνατότητα|Λειτουργία|Могућност|Мөмкинлек|Особина|Свойство|Үзенчәлеклелек|Функционал|Функционалност|Функция|Функціонал|תכונה|خاصية|خصوصیت|صلاحیت|کاروبار کی ضرورت|وِیژگی|रूप लेख|ਖਾਸੀਅਤ|ਨਕਸ਼ ਨੁਹਾਰ|ਮੁਹਾਂਦਰਾ|గుణము|ಹೆಚ್ಚಳ|ความต้องการทางธุรกิจ|ความสามารถ|โครงหลัก|기능|フィーチャ|功能|機能):([^:]+(?:\r?\n|\r|$))*/,
                        lookbehind: !0,
                        inside: {
                            important: {
                                pattern: /(:)[^\r\n]+/,
                                lookbehind: !0
                            },
                            keyword: /[^:\r\n]+:/
                        }
                    },
                    scenario: {
                        pattern: /((^|\r?\n|\r)[ \t]*)(Abstract Scenario|Abstrakt Scenario|Achtergrond|Aer|Ær|Agtergrond|All y'all|Antecedentes|Antecedents|Atburðarás|Atburðarásir|Awww, look mate|B4|Background|Baggrund|Bakgrund|Bakgrunn|Bakgrunnur|Beispiele|Beispiller|Bối cảnh|Cefndir|Cenario|Cenário|Cenario de Fundo|Cenário de Fundo|Cenarios|Cenários|Contesto|Context|Contexte|Contexto|Conto|Contoh|Contone|Dæmi|Dasar|Dead men tell no tales|Delineacao do Cenario|Delineação do Cenário|Dis is what went down|Dữ liệu|Dyagram senaryo|Dyagram Senaryo|Egzanp|Ejemplos|Eksempler|Ekzemploj|Enghreifftiau|Esbozo do escenario|Escenari|Escenario|Esempi|Esquema de l'escenari|Esquema del escenario|Esquema do Cenario|Esquema do Cenário|Examples|EXAMPLZ|Exempel|Exemple|Exemples|Exemplos|First off|Fono|Forgatókönyv|Forgatókönyv vázlat|Fundo|Geçmiş|ghantoH|Grundlage|Hannergrond|Háttér|Heave to|Istorik|Juhtumid|Keadaan|Khung kịch bản|Khung tình huống|Kịch bản|Koncept|Konsep skenario|Kontèks|Kontekst|Kontekstas|Konteksts|Kontext|Konturo de la scenaro|Latar Belakang|lut|lut chovnatlh|lutmey|Lýsing Atburðarásar|Lýsing Dæma|Menggariskan Senario|MISHUN|MISHUN SRSLY|mo'|Náčrt Scenára|Náčrt Scénáře|Náčrt Scenáru|Oris scenarija|Örnekler|Osnova|Osnova Scenára|Osnova scénáře|Osnutek|Ozadje|Paraugs|Pavyzdžiai|Példák|Piemēri|Plan du scénario|Plan du Scénario|Plan senaryo|Plan Senaryo|Plang vum Szenario|Pozadí|Pozadie|Pozadina|Príklady|Příklady|Primer|Primeri|Primjeri|Przykłady|Raamstsenaarium|Reckon it's like|Rerefons|Scenár|Scénář|Scenarie|Scenarij|Scenarijai|Scenarijaus šablonas|Scenariji|Scenārijs|Scenārijs pēc parauga|Scenarijus|Scenario|Scénario|Scenario Amlinellol|Scenario Outline|Scenario Template|Scenariomal|Scenariomall|Scenarios|Scenariu|Scenariusz|Scenaro|Schema dello scenario|Se ðe|Se the|Se þe|Senario|Senaryo|Senaryo deskripsyon|Senaryo Deskripsyon|Senaryo taslağı|Shiver me timbers|Situācija|Situai|Situasie|Situasie Uiteensetting|Skenario|Skenario konsep|Skica|Structura scenariu|Structură scenariu|Struktura scenarija|Stsenaarium|Swa|Swa hwaer swa|Swa hwær swa|Szablon scenariusza|Szenario|Szenariogrundriss|Tapaukset|Tapaus|Tapausaihio|Taust|Tausta|Template Keadaan|Template Senario|Template Situai|The thing of it is|Tình huống|Variantai|Voorbeelde|Voorbeelden|Wharrimean is|Yo\-ho\-ho|You'll wanna|Założenia|Παραδείγματα|Περιγραφή Σεναρίου|Σενάρια|Σενάριο|Υπόβαθρο|Кереш|Контекст|Концепт|Мисаллар|Мисоллар|Основа|Передумова|Позадина|Предистория|Предыстория|Приклади|Пример|Примери|Примеры|Рамка на сценарий|Скица|Структура сценарија|Структура сценария|Структура сценарію|Сценарий|Сценарий структураси|Сценарийның төзелеше|Сценарији|Сценарио|Сценарій|Тарих|Үрнәкләр|דוגמאות|רקע|תבנית תרחיש|תרחיש|الخلفية|الگوی سناریو|امثلة|پس منظر|زمینه|سناریو|سيناريو|سيناريو مخطط|مثالیں|منظر نامے کا خاکہ|منظرنامہ|نمونه ها|उदाहरण|परिदृश्य|परिदृश्य रूपरेखा|पृष्ठभूमि|ਉਦਾਹਰਨਾਂ|ਪਟਕਥਾ|ਪਟਕਥਾ ਢਾਂਚਾ|ਪਟਕਥਾ ਰੂਪ ਰੇਖਾ|ਪਿਛੋਕੜ|ఉదాహరణలు|కథనం|నేపథ్యం|సన్నివేశం|ಉದಾಹರಣೆಗಳು|ಕಥಾಸಾರಾಂಶ|ವಿವರಣೆ|ಹಿನ್ನೆಲೆ|โครงสร้างของเหตุการณ์|ชุดของตัวอย่าง|ชุดของเหตุการณ์|แนวคิด|สรุปเหตุการณ์|เหตุการณ์|배경|시나리오|시나리오 개요|예|サンプル|シナリオ|シナリオアウトライン|シナリオテンプレ|シナリオテンプレート|テンプレ|例|例子|剧本|剧本大纲|劇本|劇本大綱|场景|场景大纲|場景|場景大綱|背景):[^:\r\n]*/,
                        lookbehind: !0,
                        inside: {
                            important: {
                                pattern: /(:)[^\r\n]*/,
                                lookbehind: !0
                            },
                            keyword: /[^:\r\n]+:/
                        }
                    },
                    "table-body": {
                        pattern: /((?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*)+/,
                        lookbehind: !0,
                        inside: {
                            outline: {
                                pattern: /<[^>]+?>/,
                                alias: "variable"
                            },
                            td: {
                                pattern: /\s*[^\s|][^|]*/,
                                alias: "string"
                            },
                            punctuation: /\|/
                        }
                    },
                    "table-head": {
                        pattern: /((?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*)/,
                        inside: {
                            th: {
                                pattern: /\s*[^\s|][^|]*/,
                                alias: "variable"
                            },
                            punctuation: /\|/
                        }
                    },
                    atrule: {
                        pattern: /((?:\r?\n|\r)[ \t]+)('ach|'a|'ej|7|a|A také|A taktiež|A tiež|A zároveň|Aber|Ac|Adott|Akkor|Ak|Aleshores|Ale|Ali|Allora|Alors|Als|Ama|Amennyiben|Amikor|Ampak|an|AN|Ananging|And y'all|And|Angenommen|Anrhegedig a|An|Apabila|Atès|Atesa|Atunci|Avast!|Aye|A|awer|Bagi|Banjur|Bet|Biết|Blimey!|Buh|But at the end of the day I reckon|But y'all|But|BUT|Cal|Când|Cando|Cand|Ce|Cuando|Če|Ða ðe|Ða|Dadas|Dada|Dados|Dado|DaH ghu' bejlu'|dann|Dann|Dano|Dan|Dar|Dat fiind|Data|Date fiind|Date|Dati fiind|Dati|Daţi fiind|Dați fiind|Dato|DEN|Den youse gotta|Dengan|De|Diberi|Diyelim ki|Donada|Donat|Donitaĵo|Do|Dun|Duota|Ðurh|Eeldades|Ef|Eğer ki|Entao|Então|Entón|Entonces|En|Epi|E|És|Etant donnée|Etant donné|Et|Étant données|Étant donnée|Étant donné|Etant données|Etant donnés|Étant donnés|Fakat|Gangway!|Gdy|Gegeben seien|Gegeben sei|Gegeven|Gegewe|ghu' noblu'|Gitt|Given y'all|Given|Givet|Givun|Ha|Cho|I CAN HAZ|In|Ir|It's just unbelievable|I|Ja|Jeśli|Jeżeli|Kadar|Kada|Kad|Kai|Kaj|Když|Keď|Kemudian|Ketika|Khi|Kiedy|Ko|Kuid|Kui|Kun|Lan|latlh|Le sa a|Let go and haul|Le|Lè sa a|Lè|Logo|Lorsqu'<|Lorsque|mä|Maar|Mais|Mając|Majd|Maka|Manawa|Mas|Ma|Menawa|Men|Mutta|Nalikaning|Nalika|Nanging|Når|När|Nato|Nhưng|Niin|Njuk|O zaman|Og|Och|Oletetaan|Onda|Ond|Oraz|Pak|Pero|Però|Podano|Pokiaľ|Pokud|Potem|Potom|Privzeto|Pryd|qaSDI'|Quando|Quand|Quan|Så|Sed|Se|Siis|Sipoze ke|Sipoze Ke|Sipoze|Si|Şi|Și|Soit|Stel|Tada|Tad|Takrat|Tak|Tapi|Ter|Tetapi|Tha the|Tha|Then y'all|Then|Thì|Thurh|Toda|Too right|ugeholl|Und|Un|Và|vaj|Vendar|Ve|wann|Wanneer|WEN|Wenn|When y'all|When|Wtedy|Wun|Y'know|Yeah nah|Yna|Youse know like when|Youse know when youse got|Y|Za predpokladu|Za předpokladu|Zadani|Zadano|Zadan|Zadate|Zadato|Zakładając|Zaradi|Zatati|Þa þe|Þa|Þá|Þegar|Þurh|Αλλά|Δεδομένου|Και|Όταν|Τότε|А також|Агар|Але|Али|Аммо|А|Әгәр|Әйтик|Әмма|Бирок|Ва|Вә|Дадено|Дано|Допустим|Если|Задате|Задати|Задато|И|І|К тому же|Када|Кад|Когато|Когда|Коли|Ләкин|Лекин|Нәтиҗәдә|Нехай|Но|Онда|Припустимо, що|Припустимо|Пусть|Также|Та|Тогда|Тоді|То|Унда|Һәм|Якщо|אבל|אזי|אז|בהינתן|וגם|כאשר|آنگاه|اذاً|اگر|اما|اور|با فرض|بالفرض|بفرض|پھر|تب|ثم|جب|عندما|فرض کیا|لكن|لیکن|متى|هنگامی|و|अगर|और|कदा|किन्तु|चूंकि|जब|तथा|तदा|तब|परन्तु|पर|यदि|ਅਤੇ|ਜਦੋਂ|ਜਿਵੇਂ ਕਿ|ਜੇਕਰ|ਤਦ|ਪਰ|అప్పుడు|ఈ పరిస్థితిలో|కాని|చెప్పబడినది|మరియు|ಆದರೆ|ನಂತರ|ನೀಡಿದ|ಮತ್ತು|ಸ್ಥಿತಿಯನ್ನು|กำหนดให้|ดังนั้น|แต่|เมื่อ|และ|그러면<|그리고<|단<|만약<|만일<|먼저<|조건<|하지만<|かつ<|しかし<|ただし<|ならば<|もし<|並且<|但し<|但是<|假如<|假定<|假設<|假设<|前提<|同时<|同時<|并且<|当<|當<|而且<|那么<|那麼<)(?=[ \t]+)/,
                        lookbehind: !0
                    },
                    string: {
                        pattern: /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/,
                        inside: {
                            outline: {
                                pattern: /<[^>]+?>/,
                                alias: "variable"
                            }
                        }
                    },
                    outline: {
                        pattern: /<[^>]+?>/,
                        alias: "variable"
                    }
                }, n.languages.git = {
                    comment: /^#.*/m,
                    deleted: /^[-–].*/m,
                    inserted: /^\+.*/m,
                    string: /("|')(\\?.)*?\1/m,
                    command: {
                        pattern: /^.*\$ git .*$/m,
                        inside: {
                            parameter: /\s(--|-)\w+/m
                        }
                    },
                    coord: /^@@.*@@$/m,
                    commit_sha1: /^commit \w{40}$/m
                }, n.languages.glsl = n.languages.extend("clike", {
                    comment: [/\/\*[\w\W]*?\*\//, /\/\/(?:\\(?:\r\n|[\s\S])|.)*/],
                    number: /\b(?:0x[\da-f]+|(?:\.\d+|\d+\.?\d*)(?:e[+-]?\d+)?)[ulf]*\b/i,
                    keyword: /\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/
                }), n.languages.insertBefore("glsl", "comment", {
                    preprocessor: {
                        pattern: /(^[ \t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\b)?/m,
                        lookbehind: !0,
                        alias: "builtin"
                    }
                }), n.languages.go = n.languages.extend("clike", {
                    keyword: /\b(break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
                    builtin: /\b(bool|byte|complex(64|128)|error|float(32|64)|rune|string|u?int(8|16|32|64|)|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(ln)?|real|recover)\b/,
                    boolean: /\b(_|iota|nil|true|false)\b/,
                    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
                    number: /\b(-?(0x[a-f\d]+|(\d+\.?\d*|\.\d+)(e[-+]?\d+)?)i?)\b/i,
                    string: /("|'|`)(\\?.|\r|\n)*?\1/
                }), delete n.languages.go["class-name"], n.languages.graphql = {
                    comment: /#.*/,
                    string: {
                        pattern: /"(?:\\.|[^\\"])*"/,
                        greedy: !0
                    },
                    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/,
                    boolean: /\b(?:true|false)\b/,
                    variable: /\$[a-z_]\w*/i,
                    directive: {
                        pattern: /@[a-z_]\w*/i,
                        alias: "function"
                    },
                    "attr-name": /[a-z_]\w*(?=\s*:)/i,
                    keyword: [{
                        pattern: /(fragment\s+(?!on)[a-z_]\w*\s+|\.\.\.\s*)on\b/,
                        lookbehind: !0
                    }, /\b(?:query|fragment|mutation)\b/],
                    operator: /!|=|\.{3}/,
                    punctuation: /[!(){}\[\]:=,]/
                }, n.languages.groovy = n.languages.extend("clike", {
                    keyword: /\b(as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
                    string: [{
                        pattern: /("""|''')[\W\w]*?\1|(\$\/)(\$\/\$|[\W\w])*?\/\$/,
                        greedy: !0
                    }, {
                        pattern: /("|'|\/)(?:\\?.)*?\1/,
                        greedy: !0
                    }],
                    number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,
                    operator: {
                        pattern: /(^|[^.])(~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
                        lookbehind: !0
                    },
                    punctuation: /\.+|[{}[\];(),:$]/
                }), n.languages.insertBefore("groovy", "string", {
                    shebang: {
                        pattern: /#!.+/,
                        alias: "comment"
                    }
                }), n.languages.insertBefore("groovy", "punctuation", {
                    "spock-block": /\b(setup|given|when|then|and|cleanup|expect|where):/
                }), n.languages.insertBefore("groovy", "function", {
                    annotation: {
                        alias: "punctuation",
                        pattern: /(^|[^.])@\w+/,
                        lookbehind: !0
                    }
                }), n.hooks.add("wrap", function(e) {
                    if ("groovy" === e.language && "string" === e.type) {
                        var t = e.content[0];
                        if ("'" != t) {
                            var i = /([^\\])(\$(\{.*?\}|[\w\.]+))/;
                            "$" === t && (i = /([^\$])(\$(\{.*?\}|[\w\.]+))/), e.content = e.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&"), e.content = n.highlight(e.content, {
                                expression: {
                                    pattern: i,
                                    lookbehind: !0,
                                    inside: n.languages.groovy
                                }
                            }), e.classes.push("/" === t ? "regex" : "gstring")
                        }
                    }
                }),
                function(e) {
                    e.languages.haml = {
                        "multiline-comment": {
                            pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*((?:\r?\n|\r)\2[\t ]+.+)*/,
                            lookbehind: !0,
                            alias: "comment"
                        },
                        "multiline-code": [{
                            pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*((?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*((?:\r?\n|\r)\2[\t ]+.+)/,
                            lookbehind: !0,
                            inside: {
                                rest: e.languages.ruby
                            }
                        }, {
                            pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*((?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,
                            lookbehind: !0,
                            inside: {
                                rest: e.languages.ruby
                            }
                        }],
                        filter: {
                            pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+((?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,
                            lookbehind: !0,
                            inside: {
                                "filter-name": {
                                    pattern: /^:[\w-]+/,
                                    alias: "variable"
                                }
                            }
                        },
                        markup: {
                            pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
                            lookbehind: !0,
                            inside: {
                                rest: e.languages.markup
                            }
                        },
                        doctype: {
                            pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
                            lookbehind: !0
                        },
                        tag: {
                            pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
                            lookbehind: !0,
                            inside: {
                                attributes: [{
                                    pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,
                                    lookbehind: !0,
                                    inside: {
                                        rest: e.languages.ruby
                                    }
                                }, {
                                    pattern: /\([^)]+\)/,
                                    inside: {
                                        "attr-value": {
                                            pattern: /(=\s*)(?:"(?:\\?.)*?"|[^)\s]+)/,
                                            lookbehind: !0
                                        },
                                        "attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/,
                                        punctuation: /[=(),]/
                                    }
                                }, {
                                    pattern: /\[[^\]]+\]/,
                                    inside: {
                                        rest: e.languages.ruby
                                    }
                                }],
                                punctuation: /[<>]/
                            }
                        },
                        code: {
                            pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
                            lookbehind: !0,
                            inside: {
                                rest: e.languages.ruby
                            }
                        },
                        interpolation: {
                            pattern: /#\{[^}]+\}/,
                            inside: {
                                delimiter: {
                                    pattern: /^#\{|\}$/,
                                    alias: "punctuation"
                                },
                                rest: e.languages.ruby
                            }
                        },
                        punctuation: {
                            pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
                            lookbehind: !0
                        }
                    };
                    for (var t = ["css", {
                            filter: "coffee",
                            language: "coffeescript"
                        }, "erb", "javascript", "less", "markdown", "ruby", "scss", "textile"], n = {}, i = 0, a = t.length; a > i; i++) {
                        var r = t[i];
                        r = "string" == typeof r ? {
                            filter: r,
                            language: r
                        } : r, e.languages[r.language] && (n["filter-" + r.filter] = {
                            pattern: RegExp("((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+".replace("{{filter_name}}", r.filter)),
                            lookbehind: !0,
                            inside: {
                                "filter-name": {
                                    pattern: /^:[\w-]+/,
                                    alias: "variable"
                                },
                                rest: e.languages[r.language]
                            }
                        })
                    }
                    e.languages.insertBefore("haml", "filter", n)
                }(n),
                function(e) {
                    var t = /\{\{\{[\w\W]+?\}\}\}|\{\{[\w\W]+?\}\}/g;
                    e.languages.handlebars = e.languages.extend("markup", {
                        handlebars: {
                            pattern: t,
                            inside: {
                                delimiter: {
                                    pattern: /^\{\{\{?|\}\}\}?$/i,
                                    alias: "punctuation"
                                },
                                string: /(["'])(\\?.)*?\1/,
                                number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/,
                                boolean: /\b(true|false)\b/,
                                block: {
                                    pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
                                    lookbehind: !0,
                                    alias: "keyword"
                                },
                                brackets: {
                                    pattern: /\[[^\]]+\]/,
                                    inside: {
                                        punctuation: /\[|\]/,
                                        variable: /[\w\W]+/
                                    }
                                },
                                punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
                                variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
                            }
                        }
                    }), e.languages.insertBefore("handlebars", "tag", {
                        "handlebars-comment": {
                            pattern: /\{\{![\w\W]*?\}\}/,
                            alias: ["handlebars", "comment"]
                        }
                    }), e.hooks.add("before-highlight", function(e) {
                        "handlebars" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(t, function(t) {
                            return e.tokenStack.push(t), "___HANDLEBARS" + e.tokenStack.length + "___"
                        }))
                    }), e.hooks.add("before-insert", function(e) {
                        "handlebars" === e.language && (e.code = e.backupCode, delete e.backupCode)
                    }), e.hooks.add("after-highlight", function(t) {
                        if ("handlebars" === t.language) {
                            for (var n, i = 0; n = t.tokenStack[i]; i++) t.highlightedCode = t.highlightedCode.replace("___HANDLEBARS" + (i + 1) + "___", e.highlight(n, t.grammar, "handlebars").replace(/\$/g, "$$$$"));
                            t.element.innerHTML = t.highlightedCode
                        }
                    })
                }(n), n.languages.haskell = {
                    comment: {
                        pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\w\W]*?-})/m,
                        lookbehind: !0
                    },
                    char: /'([^\\']|\\([abfnrtv\\"'&]|\^[A-Z@[\]\^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
                    string: {
                        pattern: /"([^\\"]|\\([abfnrtv\\"'&]|\^[A-Z@[\]\^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,
                        greedy: !0
                    },
                    keyword: /\b(case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
                    import_statement: {
                        pattern: /(\r?\n|\r|^)\s*import\s+(qualified\s+)?([A-Z][_a-zA-Z0-9']*)(\.[A-Z][_a-zA-Z0-9']*)*(\s+as\s+([A-Z][_a-zA-Z0-9']*)(\.[A-Z][_a-zA-Z0-9']*)*)?(\s+hiding\b)?/m,
                        inside: {
                            keyword: /\b(import|qualified|as|hiding)\b/
                        }
                    },
                    builtin: /\b(abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
                    number: /\b(\d+(\.\d+)?(e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
                    operator: /\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`([A-Z][_a-zA-Z0-9']*\.)*[_a-z][_a-zA-Z0-9']*`/,
                    hvariable: /\b([A-Z][_a-zA-Z0-9']*\.)*[_a-z][_a-zA-Z0-9']*\b/,
                    constant: /\b([A-Z][_a-zA-Z0-9']*\.)*[A-Z][_a-zA-Z0-9']*\b/,
                    punctuation: /[{}[\];(),.:]/
                }, n.languages.haxe = n.languages.extend("clike", {
                    string: {
                        pattern: /(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
                        inside: {
                            interpolation: {
                                pattern: /(^|[^\\])\$(?:\w+|\{[^}]+\})/,
                                lookbehind: !0,
                                inside: {
                                    interpolation: {
                                        pattern: /^\$\w*/,
                                        alias: "variable"
                                    }
                                }
                            }
                        }
                    },
                    keyword: /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,
                    operator: /\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/
                }), n.languages.insertBefore("haxe", "class-name", {
                    regex: {
                        pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/
                    }
                }), n.languages.insertBefore("haxe", "keyword", {
                    preprocessor: {
                        pattern: /#\w+/,
                        alias: "builtin"
                    },
                    metadata: {
                        pattern: /@:?\w+/,
                        alias: "symbol"
                    },
                    reification: {
                        pattern: /\$(?:\w+|(?=\{))/,
                        alias: "variable"
                    }
                }), n.languages.haxe.string.inside.interpolation.inside.rest = n.util.clone(n.languages.haxe), delete n.languages.haxe["class-name"], n.languages.http = {
                    "request-line": {
                        pattern: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,
                        inside: {
                            property: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
                            "attr-name": /:\w+/
                        }
                    },
                    "response-status": {
                        pattern: /^HTTP\/1.[01] [0-9]+.*/m,
                        inside: {
                            property: {
                                pattern: /(^HTTP\/1.[01] )[0-9]+.*/i,
                                lookbehind: !0
                            }
                        }
                    },
                    "header-name": {
                        pattern: /^[\w-]+:(?=.)/m,
                        alias: "keyword"
                    }
                };
            var i = {
                "application/json": n.languages.javascript,
                "application/xml": n.languages.markup,
                "text/xml": n.languages.markup,
                "text/html": n.languages.markup
            };
            for (var a in i)
                if (i[a]) {
                    var r = {};
                    r[a] = {
                        pattern: new RegExp("(content-type:\\s*" + a + "[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*", "i"),
                        lookbehind: !0,
                        inside: {
                            rest: i[a]
                        }
                    }, n.languages.insertBefore("http", "header-name", r)
                } n.languages.icon = {
                    comment: /#.*/,
                    string: /(["'])(?:(?!\1)[^\\\r\n]|\\.|_(?:\r?\n|\r))*\1/,
                    number: /\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,
                    "builtin-keyword": {
                        pattern: /&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,
                        alias: "variable"
                    },
                    directive: {
                        pattern: /\$\w+/,
                        alias: "builtin"
                    },
                    keyword: /\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,
                    function: /(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,
                    operator: /[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,
                    punctuation: /[\[\](){},;]/
                }, n.languages.inform7 = {
                    string: {
                        pattern: /"[^"]*"/,
                        inside: {
                            substitution: {
                                pattern: /\[[^\]]+\]/,
                                inside: {
                                    delimiter: {
                                        pattern: /\[|\]/,
                                        alias: "punctuation"
                                    }
                                }
                            }
                        }
                    },
                    comment: /\[[^\]]+\]/,
                    title: {
                        pattern: /^[ \t]*(?:volume|book|part(?! of)|chapter|section|table)\b.+/im,
                        alias: "important"
                    },
                    number: {
                        pattern: /(^|[^-])(?:(?:\b|-)\d+(?:\.\d+)?(?:\^\d+)?\w*|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))\b(?!-)/i,
                        lookbehind: !0
                    },
                    verb: {
                        pattern: /(^|[^-])\b(?:applying to|are|attacking|answering|asking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:s|ing)?|consulting|contain(?:s|ing)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:ve|s|ving)|hold(?:s|ing)?|impl(?:y|ies)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:s|ing)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:s|ing)?|setting|showing|singing|sleeping|smelling|squeezing|switching|support(?:s|ing)?|swearing|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:s|ing)?|var(?:y|ies|ying)|waiting|waking|waving|wear(?:s|ing)?)\b(?!-)/i,
                        lookbehind: !0,
                        alias: "operator"
                    },
                    keyword: {
                        pattern: /(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|unless|the story)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,
                        lookbehind: !0
                    },
                    property: {
                        pattern: /(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: on| off)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,
                        lookbehind: !0,
                        alias: "symbol"
                    },
                    position: {
                        pattern: /(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    type: {
                        pattern: /(^|[^-])\b(?:actions?|activit(?:y|ies)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,
                        lookbehind: !0,
                        alias: "variable"
                    },
                    punctuation: /[.,:;(){}]/
                }, n.languages.inform7.string.inside.substitution.inside.rest = n.util.clone(n.languages.inform7), n.languages.inform7.string.inside.substitution.inside.rest.text = {
                    pattern: /\S(?:\s*\S)*/,
                    alias: "comment"
                }, n.languages.ini = {
                    comment: /^[ \t]*;.*$/m,
                    selector: /^[ \t]*\[.*?\]/m,
                    constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
                    "attr-value": {
                        pattern: /=.*/,
                        inside: {
                            punctuation: /^[=]/
                        }
                    }
                }, n.languages.j = {
                    comment: /\bNB\..*/,
                    string: /'(?:''|[^'\r\n])*'/,
                    keyword: /\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
                    verb: {
                        pattern: /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[\^?]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
                        alias: "keyword"
                    },
                    number: /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_(?!\.))/,
                    adverb: {
                        pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,
                        alias: "builtin"
                    },
                    operator: /[=a][.:]|_\./,
                    conjunction: {
                        pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,
                        alias: "variable"
                    },
                    punctuation: /[()]/
                },
                function(e) {
                    e.languages.jade = {
                        comment: {
                            pattern: /(^([\t ]*))\/\/.*((?:\r?\n|\r)\2[\t ]+.+)*/m,
                            lookbehind: !0
                        },
                        "multiline-script": {
                            pattern: /(^([\t ]*)script\b.*\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
                            lookbehind: !0,
                            inside: {
                                rest: e.languages.javascript
                            }
                        },
                        filter: {
                            pattern: /(^([\t ]*)):.+((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
                            lookbehind: !0,
                            inside: {
                                "filter-name": {
                                    pattern: /^:[\w-]+/,
                                    alias: "variable"
                                }
                            }
                        },
                        "multiline-plain-text": {
                            pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
                            lookbehind: !0
                        },
                        markup: {
                            pattern: /(^[\t ]*)<.+/m,
                            lookbehind: !0,
                            inside: {
                                rest: e.languages.markup
                            }
                        },
                        doctype: {
                            pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
                            lookbehind: !0
                        },
                        "flow-control": {
                            pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
                            lookbehind: !0,
                            inside: {
                                each: {
                                    pattern: /^each .+? in\b/,
                                    inside: {
                                        keyword: /\b(?:each|in)\b/,
                                        punctuation: /,/
                                    }
                                },
                                branch: {
                                    pattern: /^(?:if|unless|else|case|when|default|while)\b/,
                                    alias: "keyword"
                                },
                                rest: e.languages.javascript
                            }
                        },
                        keyword: {
                            pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
                            lookbehind: !0
                        },
                        mixin: [{
                            pattern: /(^[\t ]*)mixin .+/m,
                            lookbehind: !0,
                            inside: {
                                keyword: /^mixin/,
                                function: /\w+(?=\s*\(|\s*$)/,
                                punctuation: /[(),.]/
                            }
                        }, {
                            pattern: /(^[\t ]*)\+.+/m,
                            lookbehind: !0,
                            inside: {
                                name: {
                                    pattern: /^\+\w+/,
                                    alias: "function"
                                },
                                rest: e.languages.javascript
                            }
                        }],
                        script: {
                            pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
                            lookbehind: !0,
                            inside: {
                                rest: e.languages.javascript
                            }
                        },
                        "plain-text": {
                            pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
                            lookbehind: !0
                        },
                        tag: {
                            pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
                            lookbehind: !0,
                            inside: {
                                attributes: [{
                                    pattern: /&[^(]+\([^)]+\)/,
                                    inside: {
                                        rest: e.languages.javascript
                                    }
                                }, {
                                    pattern: /\([^)]+\)/,
                                    inside: {
                                        "attr-value": {
                                            pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                                            lookbehind: !0,
                                            inside: {
                                                rest: e.languages.javascript
                                            }
                                        },
                                        "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
                                        punctuation: /[!=(),]+/
                                    }
                                }],
                                punctuation: /:/
                            }
                        },
                        code: [{
                            pattern: /(^[\t ]*(?:-|!?=)).+/m,
                            lookbehind: !0,
                            inside: {
                                rest: e.languages.javascript
                            }
                        }],
                        punctuation: /[.\-!=|]+/
                    };
                    for (var t = [{
                            filter: "atpl",
                            language: "twig"
                        }, {
                            filter: "coffee",
                            language: "coffeescript"
                        }, "ejs", "handlebars", "hogan", "less", "livescript", "markdown", "mustache", "plates", {
                            filter: "sass",
                            language: "scss"
                        }, "stylus", "swig"], n = {}, i = 0, a = t.length; a > i; i++) {
                        var r = t[i];
                        r = "string" == typeof r ? {
                            filter: r,
                            language: r
                        } : r, e.languages[r.language] && (n["filter-" + r.filter] = {
                            pattern: RegExp("(^([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+".replace("{{filter_name}}", r.filter), "m"),
                            lookbehind: !0,
                            inside: {
                                "filter-name": {
                                    pattern: /^:[\w-]+/,
                                    alias: "variable"
                                },
                                rest: e.languages[r.language]
                            }
                        })
                    }
                    e.languages.insertBefore("jade", "filter", n)
                }(n), n.languages.java = n.languages.extend("clike", {
                    keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
                    number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,
                    operator: {
                        pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
                        lookbehind: !0
                    }
                }), n.languages.insertBefore("java", "function", {
                    annotation: {
                        alias: "punctuation",
                        pattern: /(^|[^.])@\w+/,
                        lookbehind: !0
                    }
                }), n.languages.jolie = n.languages.extend("clike", {
                    keyword: /\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|extender|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\b/g,
                    builtin: /\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\b/,
                    number: /\b\d*\.?\d+(?:e[+-]?\d+)?l?\b/i,
                    operator: /->|<<|[!+-<>=*]?=|[:<>!?*\/%^]|&&|\|\||--?|\+\+?/g,
                    symbol: /[|;@]/,
                    punctuation: /[,.]/,
                    string: {
                        pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    }
                }), delete n.languages.jolie["class-name"], delete n.languages.jolie.function, n.languages.insertBefore("jolie", "keyword", {
                    function: {
                        pattern: /((?:\b(?:outputPort|inputPort|in|service|courier)\b|@)\s*)\w+/,
                        lookbehind: !0
                    },
                    aggregates: {
                        pattern: /(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,
                        lookbehind: !0,
                        inside: {
                            withExtension: {
                                pattern: /\bwith\s+\w+/,
                                inside: {
                                    keyword: /\bwith\b/
                                }
                            },
                            function: {
                                pattern: /\w+/
                            },
                            punctuation: {
                                pattern: /,/
                            }
                        }
                    },
                    redirects: {
                        pattern: /(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,
                        lookbehind: !0,
                        inside: {
                            punctuation: {
                                pattern: /,/
                            },
                            function: {
                                pattern: /\w+/g
                            },
                            symbol: {
                                pattern: /=>/g
                            }
                        }
                    }
                }), n.languages.json = {
                    property: /"(?:\\.|[^|"])*"(?=\s*:)/gi,
                    string: /"(?!:)(?:\\.|[^|"])*"(?!:)/g,
                    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
                    punctuation: /[{}[\]);,]/g,
                    operator: /:/g,
                    boolean: /\b(true|false)\b/gi,
                    null: /\bnull\b/gi
                }, n.languages.jsonp = n.languages.json, n.languages.julia = {
                    comment: {
                        pattern: /(^|[^\\])#.*/,
                        lookbehind: !0
                    },
                    string: /"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(\\?.)*?\1/,
                    keyword: /\b(abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|let|local|macro|module|print|println|quote|return|try|type|typealias|using|while)\b/,
                    boolean: /\b(true|false)\b/,
                    number: /\b-?(0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:[efp][+-]?\d+)?j?\b/i,
                    operator: /\+=?|-=?|\*=?|\/[\/=]?|\\=?|\^=?|%=?|÷=?|!=?=?|&=?|\|[=>]?|\$=?|<(?:<=?|[=:])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥]/,
                    punctuation: /[{}[\];(),.:]/
                }, n.languages.keyman = {
                    comment: /\bc\s.*/i,
                    function: /\[\s*((CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*([TKU]_[a-z0-9_?]+|".+?"|'.+?')\s*\]/i,
                    string: /("|')((?!\1).)*\1/,
                    bold: [/&(baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i, /\b(bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i],
                    keyword: /\b(any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,
                    atrule: /\b(ansi|begin|unicode|group|using keys|match|nomatch)\b/i,
                    number: /\b(U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,
                    operator: /[+>\\,()]/,
                    tag: /\$(keyman|kmfl|weaver|keymanweb|keymanonly):/i
                },
                function(e) {
                    e.languages.kotlin = e.languages.extend("clike", {
                        keyword: {
                            pattern: /(^|[^.])\b(?:abstract|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|else|enum|final|finally|for|fun|get|if|import|in|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|out|override|package|private|protected|public|reified|return|sealed|set|super|tailrec|this|throw|to|try|val|var|when|where|while)\b/,
                            lookbehind: !0
                        },
                        function: [/\w+(?=\s*\()/, {
                            pattern: /(\.)\w+(?=\s*\{)/,
                            lookbehind: !0
                        }],
                        number: /\b(?:0[bx][\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?[fFL]?)\b/,
                        operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
                    }), delete e.languages.kotlin["class-name"], e.languages.insertBefore("kotlin", "string", {
                        "raw-string": {
                            pattern: /(["'])\1\1[\s\S]*?\1{3}/,
                            alias: "string"
                        }
                    }), e.languages.insertBefore("kotlin", "keyword", {
                        annotation: {
                            pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                            alias: "builtin"
                        }
                    }), e.languages.insertBefore("kotlin", "function", {
                        label: {
                            pattern: /\w+@|@\w+/,
                            alias: "symbol"
                        }
                    });
                    var t = [{
                        pattern: /\$\{[^}]+\}/,
                        inside: {
                            delimiter: {
                                pattern: /^\$\{|\}$/,
                                alias: "variable"
                            },
                            rest: e.util.clone(e.languages.kotlin)
                        }
                    }, {
                        pattern: /\$\w+/,
                        alias: "variable"
                    }];
                    e.languages.kotlin.string.inside = e.languages.kotlin["raw-string"].inside = {
                        interpolation: t
                    }
                }(n),
                function(e) {
                    var t = /\\([^a-z()[\]]|[a-z\*]+)/i,
                        i = {
                            "equation-command": {
                                pattern: t,
                                alias: "regex"
                            }
                        };
                    n.languages.latex = {
                        comment: /%.*/m,
                        cdata: {
                            pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})([\w\W]*?)(?=\\end\{\2\})/,
                            lookbehind: !0
                        },
                        equation: [{
                            pattern: /\$(?:\\?[\w\W])*?\$|\\\((?:\\?[\w\W])*?\\\)|\\\[(?:\\?[\w\W])*?\\\]/,
                            inside: i,
                            alias: "string"
                        }, {
                            pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})([\w\W]*?)(?=\\end\{\2\})/,
                            lookbehind: !0,
                            inside: i,
                            alias: "string"
                        }],
                        keyword: {
                            pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
                            lookbehind: !0
                        },
                        url: {
                            pattern: /(\\url\{)[^}]+(?=\})/,
                            lookbehind: !0
                        },
                        headline: {
                            pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
                            lookbehind: !0,
                            alias: "class-name"
                        },
                        function: {
                            pattern: t,
                            alias: "selector"
                        },
                        punctuation: /[[\]{}&]/
                    }
                }(), n.languages.less = n.languages.extend("css", {
                    comment: [/\/\*[\w\W]*?\*\//, {
                        pattern: /(^|[^\\])\/\/.*/,
                        lookbehind: !0
                    }],
                    atrule: {
                        pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
                        inside: {
                            punctuation: /[:()]/
                        }
                    },
                    selector: {
                        pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
                        inside: {
                            variable: /@+[\w-]+/
                        }
                    },
                    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
                    punctuation: /[{}();:,]/,
                    operator: /[+\-*\/]/
                }), n.languages.insertBefore("less", "punctuation", {
                    function: n.languages.less.function
                }), n.languages.insertBefore("less", "property", {
                    variable: [{
                        pattern: /@[\w-]+\s*:/,
                        inside: {
                            punctuation: /:/
                        }
                    }, /@@?[\w-]+/],
                    "mixin-usage": {
                        pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
                        lookbehind: !0,
                        alias: "function"
                    }
                }), n.languages.livescript = {
                    "interpolated-string": {
                        pattern: /("""|")(?:\\[\s\S]|(?!\1)[^\\])*\1/,
                        greedy: !0,
                        inside: {
                            variable: {
                                pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|\d)*/m,
                                lookbehind: !0
                            },
                            interpolation: {
                                pattern: /(^|[^\\])#\{[^}]+\}/m,
                                lookbehind: !0,
                                inside: {
                                    "interpolation-punctuation": {
                                        pattern: /^#\{|\}$/,
                                        alias: "variable"
                                    }
                                }
                            },
                            string: /[\s\S]+/
                        }
                    },
                    comment: [{
                        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /(^|[^\\])#.*/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    string: [{
                        pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
                        greedy: !0
                    }, {
                        pattern: /<\[[\s\S]*?\]>/,
                        greedy: !0
                    }, /\\[^\s,;\])}]+/],
                    regex: [{
                        pattern: /\/\/(\[.+?]|\\.|(?!\/\/)[^\\])+\/\/[gimyu]{0,5}/,
                        greedy: !0,
                        inside: {
                            comment: {
                                pattern: /(^|[^\\])#.*/,
                                lookbehind: !0
                            }
                        }
                    }, {
                        pattern: /\/(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}/,
                        greedy: !0
                    }],
                    keyword: {
                        pattern: /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
                        lookbehind: !0
                    },
                    "keyword-operator": {
                        pattern: /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?:nt| not)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
                        lookbehind: !0,
                        alias: "operator"
                    },
                    boolean: {
                        pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,
                        lookbehind: !0
                    },
                    argument: {
                        pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m,
                        lookbehind: !0,
                        alias: "variable"
                    },
                    number: /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
                    identifier: /[a-z_](?:-?[a-z]|\d)*/i,
                    operator: [{
                        pattern: /( )\.(?= )/,
                        lookbehind: !0
                    }, /\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/],
                    punctuation: /[(){}\[\]|.,:;`]/
                }, n.languages.livescript["interpolated-string"].inside.interpolation.inside.rest = n.languages.livescript, n.languages.lolcode = {
                    comment: [/\bOBTW\s+[\s\S]*?\s+TLDR\b/, /\bBTW.+/],
                    string: {
                        pattern: /"(?::.|[^"])*"/,
                        inside: {
                            variable: /:\{[^}]+\}/,
                            symbol: [/:\([a-f\d]+\)/i, /:\[[^\]]+\]/, /:[)>o":]/]
                        }
                    },
                    number: /(-|\b)\d*\.?\d+/,
                    symbol: {
                        pattern: /(^|\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\s|,|$)/,
                        lookbehind: !0,
                        inside: {
                            keyword: /A(?=\s)/
                        }
                    },
                    label: {
                        pattern: /((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,
                        lookbehind: !0,
                        alias: "string"
                    },
                    function: {
                        pattern: /((?:^|\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\w*/,
                        lookbehind: !0
                    },
                    keyword: [{
                        pattern: /(^|\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\?|YA RLY|NO WAI|OIC|MEBBE|WTF\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\s|,|$)/,
                        lookbehind: !0
                    }, /'Z(?=\s|,|$)/],
                    boolean: {
                        pattern: /(^|\s)(?:WIN|FAIL)(?=\s|,|$)/,
                        lookbehind: !0
                    },
                    variable: {
                        pattern: /(^|\s)IT(?=\s|,|$)/,
                        lookbehind: !0
                    },
                    operator: {
                        pattern: /(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\s|,|$)/,
                        lookbehind: !0
                    },
                    punctuation: /\.{3}|…|,|!/
                }, n.languages.lua = {
                    comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
                    string: {
                        pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
                        greedy: !0
                    },
                    number: /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
                    keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
                    function: /(?!\d)\w+(?=\s*(?:[({]))/,
                    operator: [/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, {
                        pattern: /(^|[^.])\.\.(?!\.)/,
                        lookbehind: !0
                    }],
                    punctuation: /[\[\](){},;]|\.+|:+/
                }, n.languages.makefile = {
                    comment: {
                        pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|.)*/,
                        lookbehind: !0
                    },
                    string: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
                    symbol: {
                        pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
                        inside: {
                            variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/
                        }
                    },
                    variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
                    keyword: [/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, {
                        pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
                        lookbehind: !0
                    }],
                    operator: /(?:::|[?:+!])?=|[|@]/,
                    punctuation: /[:;(){}]/
                }, n.languages.markdown = n.languages.extend("markup", {}), n.languages.insertBefore("markdown", "prolog", {
                    blockquote: {
                        pattern: /^>(?:[\t ]*>)*/m,
                        alias: "punctuation"
                    },
                    code: [{
                        pattern: /^(?: {4}|\t).+/m,
                        alias: "keyword"
                    }, {
                        pattern: /``.+?``|`[^`\n]+`/,
                        alias: "keyword"
                    }],
                    title: [{
                        pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
                        alias: "important",
                        inside: {
                            punctuation: /==+$|--+$/
                        }
                    }, {
                        pattern: /(^\s*)#+.+/m,
                        lookbehind: !0,
                        alias: "important",
                        inside: {
                            punctuation: /^#+|#+$/
                        }
                    }],
                    hr: {
                        pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    list: {
                        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    "url-reference": {
                        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                        inside: {
                            variable: {
                                pattern: /^(!?\[)[^\]]+/,
                                lookbehind: !0
                            },
                            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                            punctuation: /^[\[\]!:]|[<>]/
                        },
                        alias: "url"
                    },
                    bold: {
                        pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /^\*\*|^__|\*\*$|__$/
                        }
                    },
                    italic: {
                        pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /^[*_]|[*_]$/
                        }
                    },
                    url: {
                        pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
                        inside: {
                            variable: {
                                pattern: /(!?\[)[^\]]+(?=\]$)/,
                                lookbehind: !0
                            },
                            string: {
                                pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
                            }
                        }
                    }
                }), n.languages.markdown.bold.inside.url = n.util.clone(n.languages.markdown.url), n.languages.markdown.italic.inside.url = n.util.clone(n.languages.markdown.url), n.languages.markdown.bold.inside.italic = n.util.clone(n.languages.markdown.italic), n.languages.markdown.italic.inside.bold = n.util.clone(n.languages.markdown.bold), n.languages.matlab = {
                    string: /\B'(?:''|[^'\n])*'/,
                    comment: [/%\{[\s\S]*?\}%/, /%.+/],
                    number: /\b-?(?:\d*\.?\d+(?:[eE][+-]?\d+)?(?:[ij])?|[ij])\b/,
                    keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
                    function: /(?!\d)\w+(?=\s*\()/,
                    operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
                    punctuation: /\.{3}|[.,;\[\](){}!]/
                }, n.languages.mel = {
                    comment: /\/\/.*/,
                    code: {
                        pattern: /`(?:\\.|[^\\`\r\n])*`/,
                        alias: "italic",
                        inside: {
                            delimiter: {
                                pattern: /^`|`$/,
                                alias: "punctuation"
                            }
                        }
                    },
                    string: /"(?:\\.|[^\\"\r\n])*"/,
                    variable: /\$\w+/,
                    number: /(?:\b|-)(?:0x[\da-fA-F]+|\d+\.?\d*)/,
                    flag: {
                        pattern: /-[^\d\W]\w*/,
                        alias: "operator"
                    },
                    keyword: /\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,
                    function: /\w+(?=\()|\b(?:about|abs|addAttr|addAttributeEditorNodeHelp|addDynamic|addNewShelfTab|addPP|addPanelCategory|addPrefixToName|advanceToNextDrivenKey|affectedNet|affects|aimConstraint|air|alias|aliasAttr|align|alignCtx|alignCurve|alignSurface|allViewFit|ambientLight|angle|angleBetween|animCone|animCurveEditor|animDisplay|animView|annotate|appendStringArray|applicationName|applyAttrPreset|applyTake|arcLenDimContext|arcLengthDimension|arclen|arrayMapper|art3dPaintCtx|artAttrCtx|artAttrPaintVertexCtx|artAttrSkinPaintCtx|artAttrTool|artBuildPaintMenu|artFluidAttrCtx|artPuttyCtx|artSelectCtx|artSetPaintCtx|artUserPaintCtx|assignCommand|assignInputDevice|assignViewportFactories|attachCurve|attachDeviceAttr|attachSurface|attrColorSliderGrp|attrCompatibility|attrControlGrp|attrEnumOptionMenu|attrEnumOptionMenuGrp|attrFieldGrp|attrFieldSliderGrp|attrNavigationControlGrp|attrPresetEditWin|attributeExists|attributeInfo|attributeMenu|attributeQuery|autoKeyframe|autoPlace|bakeClip|bakeFluidShading|bakePartialHistory|bakeResults|bakeSimulation|basename|basenameEx|batchRender|bessel|bevel|bevelPlus|binMembership|bindSkin|blend2|blendShape|blendShapeEditor|blendShapePanel|blendTwoAttr|blindDataType|boneLattice|boundary|boxDollyCtx|boxZoomCtx|bufferCurve|buildBookmarkMenu|buildKeyframeMenu|button|buttonManip|CBG|cacheFile|cacheFileCombine|cacheFileMerge|cacheFileTrack|camera|cameraView|canCreateManip|canvas|capitalizeString|catch|catchQuiet|ceil|changeSubdivComponentDisplayLevel|changeSubdivRegion|channelBox|character|characterMap|characterOutlineEditor|characterize|chdir|checkBox|checkBoxGrp|checkDefaultRenderGlobals|choice|circle|circularFillet|clamp|clear|clearCache|clip|clipEditor|clipEditorCurrentTimeCtx|clipSchedule|clipSchedulerOutliner|clipTrimBefore|closeCurve|closeSurface|cluster|cmdFileOutput|cmdScrollFieldExecuter|cmdScrollFieldReporter|cmdShell|coarsenSubdivSelectionList|collision|color|colorAtPoint|colorEditor|colorIndex|colorIndexSliderGrp|colorSliderButtonGrp|colorSliderGrp|columnLayout|commandEcho|commandLine|commandPort|compactHairSystem|componentEditor|compositingInterop|computePolysetVolume|condition|cone|confirmDialog|connectAttr|connectControl|connectDynamic|connectJoint|connectionInfo|constrain|constrainValue|constructionHistory|container|containsMultibyte|contextInfo|control|convertFromOldLayers|convertIffToPsd|convertLightmap|convertSolidTx|convertTessellation|convertUnit|copyArray|copyFlexor|copyKey|copySkinWeights|cos|cpButton|cpCache|cpClothSet|cpCollision|cpConstraint|cpConvClothToMesh|cpForces|cpGetSolverAttr|cpPanel|cpProperty|cpRigidCollisionFilter|cpSeam|cpSetEdit|cpSetSolverAttr|cpSolver|cpSolverTypes|cpTool|cpUpdateClothUVs|createDisplayLayer|createDrawCtx|createEditor|createLayeredPsdFile|createMotionField|createNewShelf|createNode|createRenderLayer|createSubdivRegion|cross|crossProduct|ctxAbort|ctxCompletion|ctxEditMode|ctxTraverse|currentCtx|currentTime|currentTimeCtx|currentUnit|curve|curveAddPtCtx|curveCVCtx|curveEPCtx|curveEditorCtx|curveIntersect|curveMoveEPCtx|curveOnSurface|curveSketchCtx|cutKey|cycleCheck|cylinder|dagPose|date|defaultLightListCheckBox|defaultNavigation|defineDataServer|defineVirtualDevice|deformer|deg_to_rad|delete|deleteAttr|deleteShadingGroupsAndMaterials|deleteShelfTab|deleteUI|deleteUnusedBrushes|delrandstr|detachCurve|detachDeviceAttr|detachSurface|deviceEditor|devicePanel|dgInfo|dgdirty|dgeval|dgtimer|dimWhen|directKeyCtx|directionalLight|dirmap|dirname|disable|disconnectAttr|disconnectJoint|diskCache|displacementToPoly|displayAffected|displayColor|displayCull|displayLevelOfDetail|displayPref|displayRGBColor|displaySmoothness|displayStats|displayString|displaySurface|distanceDimContext|distanceDimension|doBlur|dolly|dollyCtx|dopeSheetEditor|dot|dotProduct|doubleProfileBirailSurface|drag|dragAttrContext|draggerContext|dropoffLocator|duplicate|duplicateCurve|duplicateSurface|dynCache|dynControl|dynExport|dynExpression|dynGlobals|dynPaintEditor|dynParticleCtx|dynPref|dynRelEdPanel|dynRelEditor|dynamicLoad|editAttrLimits|editDisplayLayerGlobals|editDisplayLayerMembers|editRenderLayerAdjustment|editRenderLayerGlobals|editRenderLayerMembers|editor|editorTemplate|effector|emit|emitter|enableDevice|encodeString|endString|endsWith|env|equivalent|equivalentTol|erf|error|eval|evalDeferred|evalEcho|event|exactWorldBoundingBox|exclusiveLightCheckBox|exec|executeForEachObject|exists|exp|expression|expressionEditorListen|extendCurve|extendSurface|extrude|fcheck|fclose|feof|fflush|fgetline|fgetword|file|fileBrowserDialog|fileDialog|fileExtension|fileInfo|filetest|filletCurve|filter|filterCurve|filterExpand|filterStudioImport|findAllIntersections|findAnimCurves|findKeyframe|findMenuItem|findRelatedSkinCluster|finder|firstParentOf|fitBspline|flexor|floatEq|floatField|floatFieldGrp|floatScrollBar|floatSlider|floatSlider2|floatSliderButtonGrp|floatSliderGrp|floor|flow|fluidCacheInfo|fluidEmitter|fluidVoxelInfo|flushUndo|fmod|fontDialog|fopen|formLayout|format|fprint|frameLayout|fread|freeFormFillet|frewind|fromNativePath|fwrite|gamma|gauss|geometryConstraint|getApplicationVersionAsFloat|getAttr|getClassification|getDefaultBrush|getFileList|getFluidAttr|getInputDeviceRange|getMayaPanelTypes|getModifiers|getPanel|getParticleAttr|getPluginResource|getenv|getpid|glRender|glRenderEditor|globalStitch|gmatch|goal|gotoBindPose|grabColor|gradientControl|gradientControlNoAttr|graphDollyCtx|graphSelectContext|graphTrackCtx|gravity|grid|gridLayout|group|groupObjectsByName|HfAddAttractorToAS|HfAssignAS|HfBuildEqualMap|HfBuildFurFiles|HfBuildFurImages|HfCancelAFR|HfConnectASToHF|HfCreateAttractor|HfDeleteAS|HfEditAS|HfPerformCreateAS|HfRemoveAttractorFromAS|HfSelectAttached|HfSelectAttractors|HfUnAssignAS|hardenPointCurve|hardware|hardwareRenderPanel|headsUpDisplay|headsUpMessage|help|helpLine|hermite|hide|hilite|hitTest|hotBox|hotkey|hotkeyCheck|hsv_to_rgb|hudButton|hudSlider|hudSliderButton|hwReflectionMap|hwRender|hwRenderLoad|hyperGraph|hyperPanel|hyperShade|hypot|iconTextButton|iconTextCheckBox|iconTextRadioButton|iconTextRadioCollection|iconTextScrollList|iconTextStaticLabel|ikHandle|ikHandleCtx|ikHandleDisplayScale|ikSolver|ikSplineHandleCtx|ikSystem|ikSystemInfo|ikfkDisplayMethod|illustratorCurves|image|imfPlugins|inheritTransform|insertJoint|insertJointCtx|insertKeyCtx|insertKnotCurve|insertKnotSurface|instance|instanceable|instancer|intField|intFieldGrp|intScrollBar|intSlider|intSliderGrp|interToUI|internalVar|intersect|iprEngine|isAnimCurve|isConnected|isDirty|isParentOf|isSameObject|isTrue|isValidObjectName|isValidString|isValidUiName|isolateSelect|itemFilter|itemFilterAttr|itemFilterRender|itemFilterType|joint|jointCluster|jointCtx|jointDisplayScale|jointLattice|keyTangent|keyframe|keyframeOutliner|keyframeRegionCurrentTimeCtx|keyframeRegionDirectKeyCtx|keyframeRegionDollyCtx|keyframeRegionInsertKeyCtx|keyframeRegionMoveKeyCtx|keyframeRegionScaleKeyCtx|keyframeRegionSelectKeyCtx|keyframeRegionSetKeyCtx|keyframeRegionTrackCtx|keyframeStats|lassoContext|lattice|latticeDeformKeyCtx|launch|launchImageEditor|layerButton|layeredShaderPort|layeredTexturePort|layout|layoutDialog|lightList|lightListEditor|lightListPanel|lightlink|lineIntersection|linearPrecision|linstep|listAnimatable|listAttr|listCameras|listConnections|listDeviceAttachments|listHistory|listInputDeviceAxes|listInputDeviceButtons|listInputDevices|listMenuAnnotation|listNodeTypes|listPanelCategories|listRelatives|listSets|listTransforms|listUnselected|listerEditor|loadFluid|loadNewShelf|loadPlugin|loadPluginLanguageResources|loadPrefObjects|localizedPanelLabel|lockNode|loft|log|longNameOf|lookThru|ls|lsThroughFilter|lsType|lsUI|Mayatomr|mag|makeIdentity|makeLive|makePaintable|makeRoll|makeSingleSurface|makeTubeOn|makebot|manipMoveContext|manipMoveLimitsCtx|manipOptions|manipRotateContext|manipRotateLimitsCtx|manipScaleContext|manipScaleLimitsCtx|marker|match|max|memory|menu|menuBarLayout|menuEditor|menuItem|menuItemToShelf|menuSet|menuSetPref|messageLine|min|minimizeApp|mirrorJoint|modelCurrentTimeCtx|modelEditor|modelPanel|mouse|movIn|movOut|move|moveIKtoFK|moveKeyCtx|moveVertexAlongDirection|multiProfileBirailSurface|mute|nParticle|nameCommand|nameField|namespace|namespaceInfo|newPanelItems|newton|nodeCast|nodeIconButton|nodeOutliner|nodePreset|nodeType|noise|nonLinear|normalConstraint|normalize|nurbsBoolean|nurbsCopyUVSet|nurbsCube|nurbsEditUV|nurbsPlane|nurbsSelect|nurbsSquare|nurbsToPoly|nurbsToPolygonsPref|nurbsToSubdiv|nurbsToSubdivPref|nurbsUVSet|nurbsViewDirectionVector|objExists|objectCenter|objectLayer|objectType|objectTypeUI|obsoleteProc|oceanNurbsPreviewPlane|offsetCurve|offsetCurveOnSurface|offsetSurface|openGLExtension|openMayaPref|optionMenu|optionMenuGrp|optionVar|orbit|orbitCtx|orientConstraint|outlinerEditor|outlinerPanel|overrideModifier|paintEffectsDisplay|pairBlend|palettePort|paneLayout|panel|panelConfiguration|panelHistory|paramDimContext|paramDimension|paramLocator|parent|parentConstraint|particle|particleExists|particleInstancer|particleRenderInfo|partition|pasteKey|pathAnimation|pause|pclose|percent|performanceOptions|pfxstrokes|pickWalk|picture|pixelMove|planarSrf|plane|play|playbackOptions|playblast|plugAttr|plugNode|pluginInfo|pluginResourceUtil|pointConstraint|pointCurveConstraint|pointLight|pointMatrixMult|pointOnCurve|pointOnSurface|pointPosition|poleVectorConstraint|polyAppend|polyAppendFacetCtx|polyAppendVertex|polyAutoProjection|polyAverageNormal|polyAverageVertex|polyBevel|polyBlendColor|polyBlindData|polyBoolOp|polyBridgeEdge|polyCacheMonitor|polyCheck|polyChipOff|polyClipboard|polyCloseBorder|polyCollapseEdge|polyCollapseFacet|polyColorBlindData|polyColorDel|polyColorPerVertex|polyColorSet|polyCompare|polyCone|polyCopyUV|polyCrease|polyCreaseCtx|polyCreateFacet|polyCreateFacetCtx|polyCube|polyCut|polyCutCtx|polyCylinder|polyCylindricalProjection|polyDelEdge|polyDelFacet|polyDelVertex|polyDuplicateAndConnect|polyDuplicateEdge|polyEditUV|polyEditUVShell|polyEvaluate|polyExtrudeEdge|polyExtrudeFacet|polyExtrudeVertex|polyFlipEdge|polyFlipUV|polyForceUV|polyGeoSampler|polyHelix|polyInfo|polyInstallAction|polyLayoutUV|polyListComponentConversion|polyMapCut|polyMapDel|polyMapSew|polyMapSewMove|polyMergeEdge|polyMergeEdgeCtx|polyMergeFacet|polyMergeFacetCtx|polyMergeUV|polyMergeVertex|polyMirrorFace|polyMoveEdge|polyMoveFacet|polyMoveFacetUV|polyMoveUV|polyMoveVertex|polyNormal|polyNormalPerVertex|polyNormalizeUV|polyOptUvs|polyOptions|polyOutput|polyPipe|polyPlanarProjection|polyPlane|polyPlatonicSolid|polyPoke|polyPrimitive|polyPrism|polyProjection|polyPyramid|polyQuad|polyQueryBlindData|polyReduce|polySelect|polySelectConstraint|polySelectConstraintMonitor|polySelectCtx|polySelectEditCtx|polySeparate|polySetToFaceNormal|polySewEdge|polyShortestPathCtx|polySmooth|polySoftEdge|polySphere|polySphericalProjection|polySplit|polySplitCtx|polySplitEdge|polySplitRing|polySplitVertex|polyStraightenUVBorder|polySubdivideEdge|polySubdivideFacet|polyToSubdiv|polyTorus|polyTransfer|polyTriangulate|polyUVSet|polyUnite|polyWedgeFace|popen|popupMenu|pose|pow|preloadRefEd|print|progressBar|progressWindow|projFileViewer|projectCurve|projectTangent|projectionContext|projectionManip|promptDialog|propModCtx|propMove|psdChannelOutliner|psdEditTextureFile|psdExport|psdTextureFile|putenv|pwd|python|querySubdiv|quit|rad_to_deg|radial|radioButton|radioButtonGrp|radioCollection|radioMenuItemCollection|rampColorPort|rand|randomizeFollicles|randstate|rangeControl|readTake|rebuildCurve|rebuildSurface|recordAttr|recordDevice|redo|reference|referenceEdit|referenceQuery|refineSubdivSelectionList|refresh|refreshAE|registerPluginResource|rehash|reloadImage|removeJoint|removeMultiInstance|removePanelCategory|rename|renameAttr|renameSelectionList|renameUI|render|renderGlobalsNode|renderInfo|renderLayerButton|renderLayerParent|renderLayerPostProcess|renderLayerUnparent|renderManip|renderPartition|renderQualityNode|renderSettings|renderThumbnailUpdate|renderWindowEditor|renderWindowSelectContext|renderer|reorder|reorderDeformers|requires|reroot|resampleFluid|resetAE|resetPfxToPolyCamera|resetTool|resolutionNode|retarget|reverseCurve|reverseSurface|revolve|rgb_to_hsv|rigidBody|rigidSolver|roll|rollCtx|rootOf|rot|rotate|rotationInterpolation|roundConstantRadius|rowColumnLayout|rowLayout|runTimeCommand|runup|sampleImage|saveAllShelves|saveAttrPreset|saveFluid|saveImage|saveInitialState|saveMenu|savePrefObjects|savePrefs|saveShelf|saveToolSettings|scale|scaleBrushBrightness|scaleComponents|scaleConstraint|scaleKey|scaleKeyCtx|sceneEditor|sceneUIReplacement|scmh|scriptCtx|scriptEditorInfo|scriptJob|scriptNode|scriptTable|scriptToShelf|scriptedPanel|scriptedPanelType|scrollField|scrollLayout|sculpt|searchPathArray|seed|selLoadSettings|select|selectContext|selectCurveCV|selectKey|selectKeyCtx|selectKeyframeRegionCtx|selectMode|selectPref|selectPriority|selectType|selectedNodes|selectionConnection|separator|setAttr|setAttrEnumResource|setAttrMapping|setAttrNiceNameResource|setConstraintRestPosition|setDefaultShadingGroup|setDrivenKeyframe|setDynamic|setEditCtx|setEditor|setFluidAttr|setFocus|setInfinity|setInputDeviceMapping|setKeyCtx|setKeyPath|setKeyframe|setKeyframeBlendshapeTargetWts|setMenuMode|setNodeNiceNameResource|setNodeTypeFlag|setParent|setParticleAttr|setPfxToPolyCamera|setPluginResource|setProject|setStampDensity|setStartupMessage|setState|setToolTo|setUITemplate|setXformManip|sets|shadingConnection|shadingGeometryRelCtx|shadingLightRelCtx|shadingNetworkCompare|shadingNode|shapeCompare|shelfButton|shelfLayout|shelfTabLayout|shellField|shortNameOf|showHelp|showHidden|showManipCtx|showSelectionInTitle|showShadingGroupAttrEditor|showWindow|sign|simplify|sin|singleProfileBirailSurface|size|sizeBytes|skinCluster|skinPercent|smoothCurve|smoothTangentSurface|smoothstep|snap2to2|snapKey|snapMode|snapTogetherCtx|snapshot|soft|softMod|softModCtx|sort|sound|soundControl|source|spaceLocator|sphere|sphrand|spotLight|spotLightPreviewPort|spreadSheetEditor|spring|sqrt|squareSurface|srtContext|stackTrace|startString|startsWith|stitchAndExplodeShell|stitchSurface|stitchSurfacePoints|strcmp|stringArrayCatenate|stringArrayContains|stringArrayCount|stringArrayInsertAtIndex|stringArrayIntersector|stringArrayRemove|stringArrayRemoveAtIndex|stringArrayRemoveDuplicates|stringArrayRemoveExact|stringArrayToString|stringToStringArray|strip|stripPrefixFromName|stroke|subdAutoProjection|subdCleanTopology|subdCollapse|subdDuplicateAndConnect|subdEditUV|subdListComponentConversion|subdMapCut|subdMapSewMove|subdMatchTopology|subdMirror|subdToBlind|subdToPoly|subdTransferUVsToCache|subdiv|subdivCrease|subdivDisplaySmoothness|substitute|substituteAllString|substituteGeometry|substring|surface|surfaceSampler|surfaceShaderList|swatchDisplayPort|switchTable|symbolButton|symbolCheckBox|sysFile|system|tabLayout|tan|tangentConstraint|texLatticeDeformContext|texManipContext|texMoveContext|texMoveUVShellContext|texRotateContext|texScaleContext|texSelectContext|texSelectShortestPathCtx|texSmudgeUVContext|texWinToolCtx|text|textCurves|textField|textFieldButtonGrp|textFieldGrp|textManip|textScrollList|textToShelf|textureDisplacePlane|textureHairColor|texturePlacementContext|textureWindow|threadCount|threePointArcCtx|timeControl|timePort|timerX|toNativePath|toggle|toggleAxis|toggleWindowVisibility|tokenize|tokenizeList|tolerance|tolower|toolButton|toolCollection|toolDropped|toolHasOptions|toolPropertyWindow|torus|toupper|trace|track|trackCtx|transferAttributes|transformCompare|transformLimits|translator|trim|trunc|truncateFluidCache|truncateHairCache|tumble|tumbleCtx|turbulence|twoPointArcCtx|uiRes|uiTemplate|unassignInputDevice|undo|undoInfo|ungroup|uniform|unit|unloadPlugin|untangleUV|untitledFileName|untrim|upAxis|updateAE|userCtx|uvLink|uvSnapshot|validateShelfName|vectorize|view2dToolCtx|viewCamera|viewClipPlane|viewFit|viewHeadOn|viewLookAt|viewManip|viewPlace|viewSet|visor|volumeAxis|vortex|waitCursor|warning|webBrowser|webBrowserPrefs|whatIs|window|windowPref|wire|wireContext|workspace|wrinkle|wrinkleContext|writeTake|xbmLangPathList|xform)\b/,
                    operator: [/\+[+=]?|-[-=]?|&&|\|\||[<>]=|[*\/!=]=?|[%^]/, {
                        pattern: /(^|[^<])<(?!<)/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^>])>(?!>)/,
                        lookbehind: !0
                    }],
                    punctuation: /<<|>>|[.,:;?\[\](){}]/
                }, n.languages.mel.code.inside.rest = n.util.clone(n.languages.mel), n.languages.mizar = {
                    comment: /::.+/,
                    keyword: /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,
                    parameter: {
                        pattern: /\$(?:10|\d)/,
                        alias: "variable"
                    },
                    variable: /\w+(?=:)/,
                    number: /(?:\b|-)\d+\b/,
                    operator: /\.\.\.|->|&|\.?=/,
                    punctuation: /\(#|#\)|[,:;\[\](){}]/
                }, n.languages.monkey = {
                    string: /"[^"\r\n]*"/,
                    comment: [/^#Rem\s+[\s\S]*?^#End/im, /'.+/],
                    preprocessor: {
                        pattern: /(^[ \t]*)#.+/m,
                        lookbehind: !0,
                        alias: "comment"
                    },
                    function: /\w+(?=\()/,
                    "type-char": {
                        pattern: /(\w)[?%#$]/,
                        lookbehind: !0,
                        alias: "variable"
                    },
                    number: {
                        pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+((?!\.\.)\.\d*)?|\$[\da-f]+)/i,
                        lookbehind: !0
                    },
                    keyword: /\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,
                    operator: /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
                    punctuation: /[.,:;()\[\]]/
                }, n.languages.nasm = {
                    comment: /;.*$/m,
                    string: /("|'|`)(\\?.)*?\1/m,
                    label: {
                        pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
                        lookbehind: !0,
                        alias: "function"
                    },
                    keyword: [/\[?BITS (16|32|64)\]?/m, {
                        pattern: /(^\s*)section\s*[a-zA-Z\.]+:?/im,
                        lookbehind: !0
                    }, /(?:extern|global)[^;\r\n]*/im, /(?:CPU|FLOAT|DEFAULT).*$/m],
                    register: {
                        pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(bp|sp|si|di)|[cdefgs]s)\b/i,
                        alias: "variable"
                    },
                    number: /(\b|-|(?=\$))(0[hx][\da-f]*\.?[\da-f]+(p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(\.?e[+-]?\d+)?[dt]?)\b/i,
                    operator: /[\[\]*+\-\/%<>=&|$!]/
                }, n.languages.nginx = n.languages.extend("clike", {
                    comment: {
                        pattern: /(^|[^"{\\])#.*/,
                        lookbehind: !0
                    },
                    keyword: /\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|server|events|location|include|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types)\b/i
                }), n.languages.insertBefore("nginx", "keyword", {
                    variable: /\$[a-z_]+/i
                }), n.languages.nim = {
                    comment: /#.*/,
                    string: /(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,
                    number: /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
                    keyword: /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
                    function: {
                        pattern: /(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
                        inside: {
                            operator: /\*$/
                        }
                    },
                    ignore: {
                        pattern: /`[^`\r\n]+`/,
                        inside: {
                            punctuation: /`/
                        }
                    },
                    operator: {
                        pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,
                        lookbehind: !0
                    },
                    punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
                }, n.languages.nix = {
                    comment: /\/\*[\s\S]*?\*\/|#.*/,
                    string: {
                        pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
                        inside: {
                            interpolation: {
                                pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^}]|\{[^}]*\})*}/,
                                lookbehind: !0,
                                inside: {
                                    antiquotation: {
                                        pattern: /^\$(?=\{)/,
                                        alias: "variable"
                                    }
                                }
                            }
                        }
                    },
                    url: [/\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/, {
                        pattern: /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
                        lookbehind: !0
                    }],
                    antiquotation: {
                        pattern: /\$(?=\{)/,
                        alias: "variable"
                    },
                    number: /\b\d+\b/,
                    keyword: /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
                    function: /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
                    boolean: /\b(?:true|false)\b/,
                    operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
                    punctuation: /[{}()[\].,:;]/
                }, n.languages.nix.string.inside.interpolation.inside.rest = n.util.clone(n.languages.nix), n.languages.nsis = {
                    comment: {
                        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|[#;].*)/,
                        lookbehind: !0
                    },
                    string: /("|')(\\?.)*?\1/,
                    keyword: {
                        pattern: /(^\s*)(Abort|Add(BrandingImage|Size)|AdvSplash|Allow(RootDirInstall|SkipFiles)|AutoCloseWindow|Banner|BG(Font|Gradient|Image)|BrandingText|BringToFront|Call(InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|Create(Directory|Font|ShortCut)|Delete(INISec|INIStr|RegKey|RegValue)?|Detail(Print|sButtonText)|Dialer|Dir(Text|Var|Verify)|EnableWindow|Enum(RegKey|RegValue)|Exch|Exec(Shell|Wait)?|ExpandEnvStrings|File(BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|WriteUTF16LE|Seek|Write|WriteByte|WriteWord)?|Find(Close|First|Next|Window)|FlushINI|Get(CurInstType|CurrentAddress|DlgItem|DLLVersion(Local)?|ErrorLevel|FileTime(Local)?|FullPathName|Function(Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|Install(ButtonText|Colors|Dir(RegKey)?)|InstProgressFlags|Inst(Type(GetText|SetText)?)|Int(CmpU?|Fmt|Op)|IsWindow|Lang(DLL|String)|License(BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(Set|Text)|Manifest(DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|Name|Nop|ns(Dialogs|Exec)|NSISdl|OutFile|Page(Callbacks)?|Pop|Push|Quit|Read(EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|Section(End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(AutoClose|BrandingImage|Compress|Compressor(DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(InstDetails|UninstDetails|Window)|Silent(Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(CmpS?|Cpy|Len)|SubCaption|System|Unicode|Uninstall(ButtonText|Caption|Icon|SubCaption|Text)|UninstPage|UnRegDLL|UserInfo|Var|VI(AddVersionKey|FileVersion|ProductVersion)|VPatch|WindowIcon|Write(INIStr|RegBin|RegDWORD|RegExpandStr|RegStr|Uninstaller)|XPStyle)\b/m,
                        lookbehind: !0
                    },
                    property: /\b(admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user|ARCHIVE|FILE_(ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK(CR|CU|DD|LM|PD|U)|HKEY_(CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)\b/,
                    constant: /\${[\w\.:-]+}|\$\([\w\.:-]+\)/i,
                    variable: /\$\w+/i,
                    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
                    operator: /--?|\+\+?|<=?|>=?|==?=?|&&?|\|?\||[?*\/~^%]/,
                    punctuation: /[{}[\];(),.:]/,
                    important: {
                        pattern: /(^\s*)!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)\b/im,
                        lookbehind: !0
                    }
                }, n.languages.objectivec = n.languages.extend("c", {
                    keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
                    string: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
                }), n.languages.ocaml = {
                    comment: /\(\*[\s\S]*?\*\)/,
                    string: [/"(?:\\.|[^\\\r\n"])*"/, /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i],
                    number: /\b-?(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
                    type: {
                        pattern: /\B['`][a-z\d_]*/i,
                        alias: "variable"
                    },
                    directive: {
                        pattern: /\B#[a-z\d_]+/i,
                        alias: "function"
                    },
                    keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
                    boolean: /\b(?:false|true)\b/,
                    operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&\*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
                    punctuation: /[(){}\[\]|_.,:;]/
                }, n.languages.oz = {
                    comment: /\/\*[\s\S]*?\*\/|%.*/,
                    string: /"(?:[^"\\]|\\[\s\S])*"/,
                    atom: {
                        pattern: /'(?:[^'\\]|\\.)*'/,
                        alias: "builtin"
                    },
                    keyword: /[$_]|\[\]|\b(?:at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,
                    function: [/[a-z][A-Za-z\d]*(?=\()/, {
                        pattern: /(\{)[A-Z][A-Za-z\d]*/,
                        lookbehind: !0
                    }],
                    number: /\b(?:0[bx][\da-f]+|\d+\.?\d*(?:e~?\d+)?\b)|&(?:[^\\]|\\(?:\d{3}|.))/i,
                    variable: /\b[A-Z][A-Za-z\d]*|`(?:[^`\\]|\\.)+`/,
                    "attr-name": /\w+(?=:)/,
                    operator: /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,
                    punctuation: /[\[\](){}.:;?]/
                }, n.languages.parigp = {
                    comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
                    string: /"(?:[^"\\]|\\.)*"/,
                    keyword: function() {
                        var e = ["breakpoint", "break", "dbg_down", "dbg_err", "dbg_up", "dbg_x", "forcomposite", "fordiv", "forell", "forpart", "forprime", "forstep", "forsubgroup", "forvec", "for", "iferr", "if", "local", "my", "next", "return", "until", "while"];
                        return e = e.map(function(e) {
                            return e.split("").join(" *")
                        }).join("|"), RegExp("\\b(?:" + e + ")\\b")
                    }(),
                    function: /\w[\w ]*?(?= *\()/,
                    number: {
                        pattern: /((?:\. *\. *)?)(?:\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *[+-]? *\d(?: *\d)*)?/i,
                        lookbehind: !0
                    },
                    operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
                    punctuation: /[\[\]{}().,:;|]/
                }, n.languages.parser = n.languages.extend("markup", {
                    keyword: {
                        pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
                        lookbehind: !0
                    },
                    variable: {
                        pattern: /(^|[^^])\B\$(?:\w+|(?=[.\{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\.|:+/
                        }
                    },
                    function: {
                        pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
                        lookbehind: !0,
                        inside: {
                            keyword: {
                                pattern: /(^@)(?:GET_|SET_)/,
                                lookbehind: !0
                            },
                            punctuation: /\.|:+/
                        }
                    },
                    escape: {
                        pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
                        alias: "builtin"
                    },
                    punctuation: /[\[\](){};]/
                }), n.languages.insertBefore("parser", "keyword", {
                    "parser-comment": {
                        pattern: /(\s)#.*/,
                        lookbehind: !0,
                        alias: "comment"
                    },
                    expression: {
                        pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
                        lookbehind: !0,
                        inside: {
                            string: {
                                pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
                                lookbehind: !0
                            },
                            keyword: n.languages.parser.keyword,
                            variable: n.languages.parser.variable,
                            function: n.languages.parser.function,
                            boolean: /\b(?:true|false)\b/,
                            number: /\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,
                            escape: n.languages.parser.escape,
                            operator: /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
                            punctuation: n.languages.parser.punctuation
                        }
                    }
                }), n.languages.insertBefore("inside", "punctuation", {
                    expression: n.languages.parser.expression,
                    keyword: n.languages.parser.keyword,
                    variable: n.languages.parser.variable,
                    function: n.languages.parser.function,
                    escape: n.languages.parser.escape,
                    "parser-punctuation": {
                        pattern: n.languages.parser.punctuation,
                        alias: "punctuation"
                    }
                }, n.languages.parser.tag.inside["attr-value"]), n.languages.pascal = {
                    comment: [/\(\*[\s\S]+?\*\)/, /\{[\s\S]+?\}/, /\/\/.*/],
                    string: /(?:'(?:''|[^'\r\n])*'|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
                    keyword: [{
                        pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
                        lookbehind: !0
                    }],
                    number: [/[+-]?(?:[&%]\d+|\$[a-f\d]+)/i, /([+-]|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],
                    operator: [/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i, {
                        pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
                        lookbehind: !0
                    }],
                    punctuation: /\(\.|\.\)|[()\[\]:;,.]/
                }, n.languages.perl = {
                    comment: [{
                        pattern: /(^\s*)=\w+[\s\S]*?=cut.*/m,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^\\$])#.*/,
                        lookbehind: !0
                    }],
                    string: [/\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/, /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\1/, /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/, /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/, /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/, /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/, /("|`)(?:[^\\]|\\[\s\S])*?\1/, /'(?:[^'\\\r\n]|\\.)*'/],
                    regex: [/\b(?:m|qr)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[msixpodualngc]*/, /\b(?:m|qr)\s+([a-zA-Z0-9])(?:[^\\]|\\.)*?\1[msixpodualngc]*/, /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/, /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/, /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/, /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/, {
                        pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
                        lookbehind: !0
                    }, /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/],
                    variable: [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?((::)*'?(?!\d)[\w$]+)+(::)*/i, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
                    filehandle: {
                        pattern: /<(?![<=])\S*>|\b_\b/,
                        alias: "symbol"
                    },
                    vstring: {
                        pattern: /v\d+(\.\d+)*|\d+(\.\d+){2,}/,
                        alias: "string"
                    },
                    function: {
                        pattern: /sub [a-z0-9_]+/i,
                        inside: {
                            keyword: /sub/
                        }
                    },
                    keyword: /\b(any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
                    number: /\b-?(0x[\dA-Fa-f](_?[\dA-Fa-f])*|0b[01](_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee][+-]?\d+)?)\b/,
                    operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
                    punctuation: /[{}[\];(),:]/
                }, n.languages.php = n.languages.extend("clike", {
                    keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
                    constant: /\b[A-Z0-9_]{2,}\b/,
                    comment: {
                        pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
                        lookbehind: !0,
                        greedy: !0
                    }
                }), n.languages.insertBefore("php", "class-name", {
                    "shell-comment": {
                        pattern: /(^|[^\\])#.*/,
                        lookbehind: !0,
                        alias: "comment"
                    }
                }), n.languages.insertBefore("php", "keyword", {
                    delimiter: /\?>|<\?(?:php)?/i,
                    variable: /\$\w+\b/i,
                    package: {
                        pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }
                }), n.languages.insertBefore("php", "operator", {
                    property: {
                        pattern: /(->)[\w]+/,
                        lookbehind: !0
                    }
                }), n.languages.markup && (n.hooks.add("before-highlight", function(e) {
                    "php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function(t) {
                        return e.tokenStack.push(t), "{{{PHP" + e.tokenStack.length + "}}}"
                    }))
                }), n.hooks.add("before-insert", function(e) {
                    "php" === e.language && (e.code = e.backupCode, delete e.backupCode)
                }), n.hooks.add("after-highlight", function(e) {
                    if ("php" === e.language) {
                        for (var t, i = 0; t = e.tokenStack[i]; i++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (i + 1) + "}}}", n.highlight(t, e.grammar, "php").replace(/\$/g, "$$$$"));
                        e.element.innerHTML = e.highlightedCode
                    }
                }), n.hooks.add("wrap", function(e) {
                    "php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
                }), n.languages.insertBefore("php", "comment", {
                    markup: {
                        pattern: /<[^?]\/?(.*?)>/,
                        inside: n.languages.markup
                    },
                    php: /\{\{\{PHP[0-9]+\}\}\}/
                })), n.languages.insertBefore("php", "variable", {
                    this: /\$this\b/,
                    global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,
                    scope: {
                        pattern: /\b[\w\\]+::/,
                        inside: {
                            keyword: /(static|self|parent)/,
                            punctuation: /(::|\\)/
                        }
                    }
                }), n.languages.powershell = {
                    comment: [{
                        pattern: /(^|[^`])<#[\w\W]*?#>/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^`])#.*/,
                        lookbehind: !0
                    }],
                    string: [{
                        pattern: /"(`?[\w\W])*?"/,
                        greedy: !0,
                        inside: {
                            function: {
                                pattern: /[^`]\$\(.*?\)/,
                                inside: {}
                            }
                        }
                    }, {
                        pattern: /'([^']|'')*'/,
                        greedy: !0
                    }],
                    namespace: /\[[a-z][\w\W]*?\]/i,
                    boolean: /\$(true|false)\b/i,
                    variable: /\$\w+\b/i,
                    function: [/\b(Add-(Computer|Content|History|Member|PSSnapin|Type)|Checkpoint-Computer|Clear-(Content|EventLog|History|Item|ItemProperty|Variable)|Compare-Object|Complete-Transaction|Connect-PSSession|ConvertFrom-(Csv|Json|StringData)|Convert-Path|ConvertTo-(Csv|Html|Json|Xml)|Copy-(Item|ItemProperty)|Debug-Process|Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Disconnect-PSSession|Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Enter-PSSession|Exit-PSSession|Export-(Alias|Clixml|Console|Csv|FormatData|ModuleMember|PSSession)|ForEach-Object|Format-(Custom|List|Table|Wide)|Get-(Alias|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Culture|Date|Event|EventLog|EventSubscriber|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|WmiObject)|Group-Object|Import-(Alias|Clixml|Csv|LocalizedData|Module|PSSession)|Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)|Join-Path|Limit-EventLog|Measure-(Command|Object)|Move-(Item|ItemProperty)|New-(Alias|Event|EventLog|Item|ItemProperty|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy)|Out-(Default|File|GridView|Host|Null|Printer|String)|Pop-Location|Push-Location|Read-Host|Receive-(Job|PSSession)|Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)|Remove-(Computer|Event|EventLog|Item|ItemProperty|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)|Rename-(Computer|Item|ItemProperty)|Reset-ComputerMachinePassword|Resolve-Path|Restart-(Computer|Service)|Restore-Computer|Resume-(Job|Service)|Save-Help|Select-(Object|String|Xml)|Send-MailMessage|Set-(Alias|Content|Date|Item|ItemProperty|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)|Show-(Command|ControlPanelItem|EventLog)|Sort-Object|Split-Path|Start-(Job|Process|Service|Sleep|Transaction)|Stop-(Computer|Job|Process|Service)|Suspend-(Job|Service)|Tee-Object|Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)|Trace-Command|Unblock-File|Undo-Transaction|Unregister-(Event|PSSessionConfiguration)|Update-(FormatData|Help|List|TypeData)|Use-Transaction|Wait-(Event|Job|Process)|Where-Object|Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning))\b/i, /\b(ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],
                    keyword: /\b(Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
                    operator: {
                        pattern: /(\W?)(!|-(eq|ne|gt|ge|lt|le|sh[lr]|not|b?(and|x?or)|(Not)?(Like|Match|Contains|In)|Replace|Join|is(Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
                        lookbehind: !0
                    },
                    punctuation: /[|{}[\];(),.]/
                }, n.languages.powershell.string[0].inside.boolean = n.languages.powershell.boolean, n.languages.powershell.string[0].inside.variable = n.languages.powershell.variable, n.languages.powershell.string[0].inside.function.inside = n.util.clone(n.languages.powershell), n.languages.processing = n.languages.extend("clike", {
                    keyword: /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
                    operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
                }), n.languages.insertBefore("processing", "number", {
                    constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
                    type: {
                        pattern: /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z][A-Za-z\d_]*)\b/,
                        alias: "variable"
                    }
                }), n.languages.processing.function.pattern = /[a-z0-9_]+(?=\s*\()/i, n.languages.processing["class-name"].alias = "variable", n.languages.prolog = {
                    comment: [/%.+/, /\/\*[\s\S]*?\*\//],
                    string: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
                    variable: /\b[A-Z_]\w*/,
                    function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
                    number: /\b\d+\.?\d*/,
                    operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
                    punctuation: /[(){}\[\],]/
                }, n.languages.properties = {
                    comment: /^[ \t]*[#!].*$/m,
                    "attr-value": {
                        pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|.)+/m,
                        lookbehind: !0
                    },
                    "attr-name": /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[ =:]| )/m,
                    punctuation: /[=:]/
                }, n.languages.protobuf = n.languages.extend("clike", {
                    keyword: /\b(package|import|message|enum)\b/,
                    builtin: /\b(required|repeated|optional|reserved)\b/,
                    primitive: {
                        pattern: /\b(double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes)\b/,
                        alias: "symbol"
                    }
                }),
                function(e) {
                    e.languages.puppet = {
                        heredoc: [{
                            pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
                            lookbehind: !0,
                            alias: "string",
                            inside: {
                                punctuation: /(?=\S).*\S(?= *$)/
                            }
                        }, {
                            pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
                            lookbehind: !0,
                            alias: "string",
                            inside: {
                                punctuation: /(?=\S).*\S(?= *$)/
                            }
                        }, {
                            pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
                            alias: "string",
                            inside: {
                                punctuation: {
                                    pattern: /(\().+?(?=\))/,
                                    lookbehind: !0
                                }
                            }
                        }],
                        "multiline-comment": {
                            pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
                            lookbehind: !0,
                            alias: "comment"
                        },
                        regex: {
                            pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
                            lookbehind: !0,
                            inside: {
                                "extended-regex": {
                                    pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
                                    inside: {
                                        comment: /#.*/
                                    }
                                }
                            }
                        },
                        comment: {
                            pattern: /(^|[^\\])#.*/,
                            lookbehind: !0
                        },
                        string: {
                            pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|(?!\1)[^\\]|\\[\s\S])*\1/,
                            inside: {
                                "double-quoted": {
                                    pattern: /^"[\s\S]*"$/,
                                    inside: {}
                                }
                            }
                        },
                        variable: {
                            pattern: /\$(?:::)?\w+(?:::\w+)*/,
                            inside: {
                                punctuation: /::/
                            }
                        },
                        "attr-name": /(?:\w+|\*)(?=\s*=>)/,
                        function: [{
                            pattern: /(\.)(?!\d)\w+/,
                            lookbehind: !0
                        }, /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/],
                        number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
                        boolean: /\b(?:true|false)\b/,
                        keyword: /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
                        datatype: {
                            pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
                            alias: "symbol"
                        },
                        operator: /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
                        punctuation: /[\[\]{}().,;]|:+/
                    };
                    var t = [{
                        pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
                        lookbehind: !0,
                        inside: {
                            "short-variable": {
                                pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
                                lookbehind: !0,
                                alias: "variable",
                                inside: {
                                    punctuation: /::/
                                }
                            },
                            delimiter: {
                                pattern: /^\$/,
                                alias: "variable"
                            },
                            rest: e.util.clone(e.languages.puppet)
                        }
                    }, {
                        pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
                        lookbehind: !0,
                        alias: "variable",
                        inside: {
                            punctuation: /::/
                        }
                    }];
                    e.languages.puppet.heredoc[0].inside.interpolation = t, e.languages.puppet.string.inside["double-quoted"].inside.interpolation = t
                }(n),
                function(e) {
                    e.languages.pure = {
                        "inline-lang": {
                            pattern: /%<[\s\S]+?%>/,
                            inside: {
                                lang: {
                                    pattern: /(^%< *)-\*-.+?-\*-/,
                                    lookbehind: !0,
                                    alias: "comment"
                                },
                                delimiter: {
                                    pattern: /^%<.*|%>$/,
                                    alias: "punctuation"
                                }
                            }
                        },
                        comment: [{
                            pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
                            lookbehind: !0
                        }, {
                            pattern: /(^|[^\\:])\/\/.*/,
                            lookbehind: !0
                        }, /#!.+/],
                        string: /"(?:\\.|[^"\\\r\n])*"/,
                        number: {
                            pattern: /((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d)?|\B\.\d)\d*(?:e[+-]?\d+)?L?)/i,
                            lookbehind: !0
                        },
                        keyword: /\b(?:ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|NULL|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,
                        function: /\b(?:abs|add_(?:(?:fundef|interface|macdef|typedef)(?:_at)?|addr|constdef|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_(?:matrix|pointer)|byte_c?string(?:_pointer)?|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|short|sentry|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,
                        special: {
                            pattern: /\b__[a-z]+__\b/i,
                            alias: "builtin"
                        },
                        operator: /(?=\b_|[^_])[!"#$%&'*+,\-.\/:<=>?@\\^_`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]+|\b(?:and|div|mod|not|or)\b/,
                        punctuation: /[(){}\[\];,|]/
                    };
                    ["c", {
                        lang: "c++",
                        alias: "cpp"
                    }, "fortran", "ats", "dsp"].forEach(function(t) {
                        var n = t;
                        if ("string" != typeof t && (n = t.alias, t = t.lang), e.languages[n]) {
                            var i = {};
                            i["inline-lang-" + n] = {
                                pattern: RegExp("%< *-\\*- *{lang}\\d* *-\\*-[\\s\\S]+?%>".replace("{lang}", t.replace(/([.+*?\/\\(){}\[\]])/g, "\\$1")), "i"),
                                inside: e.util.clone(e.languages.pure["inline-lang"].inside)
                            }, i["inline-lang-" + n].inside.rest = e.util.clone(e.languages[n]), e.languages.insertBefore("pure", "inline-lang", i)
                        }
                    }), e.languages.c && (e.languages.pure["inline-lang"].inside.rest = e.util.clone(e.languages.c))
                }(n), n.languages.python = {
                    "triple-quoted-string": {
                        pattern: /"""[\s\S]+?"""|'''[\s\S]+?'''/,
                        alias: "string"
                    },
                    comment: {
                        pattern: /(^|[^\\])#.*/,
                        lookbehind: !0
                    },
                    string: {
                        pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
                        greedy: !0
                    },
                    function: {
                        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,
                        lookbehind: !0
                    },
                    "class-name": {
                        pattern: /(\bclass\s+)[a-z0-9_]+/i,
                        lookbehind: !0
                    },
                    keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
                    boolean: /\b(?:True|False)\b/,
                    number: /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
                    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
                    punctuation: /[{}[\];(),.:]/
                }, n.languages.q = {
                    string: /"(?:\\.|[^"\\\r\n])*"/,
                    comment: [{
                        pattern: /([\t )\]}])\/.*/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,
                        lookbehind: !0
                    }, /^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m, /^#!.+/m],
                    symbol: /`(?::\S+|[\w.]*)/,
                    datetime: {
                        pattern: /0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,
                        alias: "number"
                    },
                    number: /\b-?(?![01]:)(?:0[wn]|0W[hj]?|0N[hje]?|0x[\da-fA-F]+|\d+\.?\d*(?:e[+-]?\d+)?[hjfeb]?)/,
                    keyword: /\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,
                    adverb: {
                        pattern: /['\/\\]:?|\beach\b/,
                        alias: "function"
                    },
                    verb: {
                        pattern: /(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?_~=|$&#@^]):?/,
                        alias: "operator"
                    },
                    punctuation: /[(){}\[\];.]/
                }, n.languages.qore = n.languages.extend("clike", {
                    comment: {
                        pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:\/\/|#).*)/,
                        lookbehind: !0
                    },
                    string: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\])*\1/,
                    variable: /\$(?!\d)\w+\b/,
                    keyword: /\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,
                    number: /\b(?:0b[01]+|0x[\da-f]*\.?[\da-fp\-]+|\d*\.?\d+e?\d*[df]|\d*\.?\d+)\b/i,
                    boolean: /\b(?:true|false)\b/i,
                    operator: {
                        pattern: /(^|[^\.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,
                        lookbehind: !0
                    },
                    function: /\$?\b(?!\d)\w+(?=\()/
                }), n.languages.r = {
                    comment: /#.*/,
                    string: /(['"])(?:\\?.)*?\1/,
                    "percent-operator": {
                        pattern: /%[^%\s]*%/,
                        alias: "operator"
                    },
                    boolean: /\b(?:TRUE|FALSE)\b/,
                    ellipsis: /\.\.(?:\.|\d+)/,
                    number: [/\b(?:NaN|Inf)\b/, /\b(?:0x[\dA-Fa-f]+(?:\.\d*)?|\d*\.?\d+)(?:[EePp][+-]?\d+)?[iL]?\b/],
                    keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
                    operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
                    punctuation: /[(){}\[\],;]/
                },
                function(e) {
                    var t = e.util.clone(e.languages.javascript);
                    e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = /<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i, e.languages.jsx.tag.inside["attr-value"].pattern = /=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;
                    var n = e.util.clone(e.languages.jsx);
                    delete n.punctuation, n = e.languages.insertBefore("jsx", "operator", {
                        punctuation: /=(?={)|[{}[\];(),.:]/
                    }, {
                        jsx: n
                    }), e.languages.insertBefore("inside", "attr-value", {
                        script: {
                            pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
                            inside: n,
                            alias: "language-javascript"
                        }
                    }, e.languages.jsx.tag)
                }(n), n.languages.reason = n.languages.extend("clike", {
                    comment: {
                        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
                        lookbehind: !0
                    },
                    string: {
                        pattern: /"(\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
                        greedy: !0
                    },
                    "class-name": /\b[A-Z]\w*/,
                    keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
                    operator: /\.{3}|:[:=]|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
                }), n.languages.insertBefore("reason", "class-name", {
                    character: {
                        pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'])'/,
                        alias: "string"
                    },
                    constructor: {
                        pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
                        alias: "variable"
                    },
                    label: {
                        pattern: /\b[a-z]\w*(?=::)/,
                        alias: "symbol"
                    }
                }), delete n.languages.reason.function, n.languages.rest = {
                    table: [{
                        pattern: /(\s*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1(?:[+|].+)+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\||(?:\+[=-]+)+\+/
                        }
                    }, {
                        pattern: /(\s*)(?:=+ +)+=+((?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1(?:=+ +)+=+(?=(?:\r?\n|\r){2}|\s*$)/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /[=-]+/
                        }
                    }],
                    "substitution-def": {
                        pattern: /(^\s*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,
                        lookbehind: !0,
                        inside: {
                            substitution: {
                                pattern: /^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,
                                alias: "attr-value",
                                inside: {
                                    punctuation: /^\||\|$/
                                }
                            },
                            directive: {
                                pattern: /( +)[^:]+::/,
                                lookbehind: !0,
                                alias: "function",
                                inside: {
                                    punctuation: /::$/
                                }
                            }
                        }
                    },
                    "link-target": [{
                        pattern: /(^\s*\.\. )\[[^\]]+\]/m,
                        lookbehind: !0,
                        alias: "string",
                        inside: {
                            punctuation: /^\[|\]$/
                        }
                    }, {
                        pattern: /(^\s*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,
                        lookbehind: !0,
                        alias: "string",
                        inside: {
                            punctuation: /^_|:$/
                        }
                    }],
                    directive: {
                        pattern: /(^\s*\.\. )[^:]+::/m,
                        lookbehind: !0,
                        alias: "function",
                        inside: {
                            punctuation: /::$/
                        }
                    },
                    comment: {
                        pattern: /(^\s*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,
                        lookbehind: !0
                    },
                    title: [{
                        pattern: /^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,
                        inside: {
                            punctuation: /^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
                            important: /.+/
                        }
                    }, {
                        pattern: /(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
                            important: /.+/
                        }
                    }],
                    hr: {
                        pattern: /((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    field: {
                        pattern: /(^\s*):[^:\r\n]+:(?= )/m,
                        lookbehind: !0,
                        alias: "attr-name"
                    },
                    "command-line-option": {
                        pattern: /(^\s*)(?:[+-][a-z\d]|(?:\-\-|\/)[a-z\d-]+)(?:[ =](?:[a-z][a-z\d_-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:\-\-|\/)[a-z\d-]+)(?:[ =](?:[a-z][a-z\d_-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,
                        lookbehind: !0,
                        alias: "symbol"
                    },
                    "literal-block": {
                        pattern: /::(?:\r?\n|\r){2}([ \t]+).+(?:(?:\r?\n|\r)\1.+)*/,
                        inside: {
                            "literal-block-punctuation": {
                                pattern: /^::/,
                                alias: "punctuation"
                            }
                        }
                    },
                    "quoted-literal-block": {
                        pattern: /::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,
                        inside: {
                            "literal-block-punctuation": {
                                pattern: /^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,
                                alias: "punctuation"
                            }
                        }
                    },
                    "list-bullet": {
                        pattern: /(^\s*)(?:[*+\-•‣⁃]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    "doctest-block": {
                        pattern: /(^\s*)>>> .+(?:(?:\r?\n|\r).+)*/m,
                        lookbehind: !0,
                        inside: {
                            punctuation: /^>>>/
                        }
                    },
                    inline: [{
                        pattern: /(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s).*?[^\s]\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,
                        lookbehind: !0,
                        inside: {
                            bold: {
                                pattern: /(^\*\*).+(?=\*\*$)/,
                                lookbehind: !0
                            },
                            italic: {
                                pattern: /(^\*).+(?=\*$)/,
                                lookbehind: !0
                            },
                            "inline-literal": {
                                pattern: /(^``).+(?=``$)/,
                                lookbehind: !0,
                                alias: "symbol"
                            },
                            role: {
                                pattern: /^:[^:]+:|:[^:]+:$/,
                                alias: "function",
                                inside: {
                                    punctuation: /^:|:$/
                                }
                            },
                            "interpreted-text": {
                                pattern: /(^`).+(?=`$)/,
                                lookbehind: !0,
                                alias: "attr-value"
                            },
                            substitution: {
                                pattern: /(^\|).+(?=\|$)/,
                                lookbehind: !0,
                                alias: "attr-value"
                            },
                            punctuation: /\*\*?|``?|\|/
                        }
                    }],
                    link: [{
                        pattern: /\[[^\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,
                        alias: "string",
                        inside: {
                            punctuation: /^\[|\]_$/
                        }
                    }, {
                        pattern: /(?:\b[a-z\d](?:[_.:+]?[a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,
                        alias: "string",
                        inside: {
                            punctuation: /^_?`|`$|`?_?_$/
                        }
                    }],
                    punctuation: {
                        pattern: /(^\s*)(?:\|(?= |$)|(?:---?|—|\.\.|__)(?= )|\.\.$)/m,
                        lookbehind: !0
                    }
                }, n.languages.rip = {
                    comment: /#.*/,
                    keyword: /(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,
                    builtin: /@|\bSystem\b/,
                    boolean: /\b(?:true|false)\b/,
                    date: /\b\d{4}-\d{2}-\d{2}\b/,
                    time: /\b\d{2}:\d{2}:\d{2}\b/,
                    datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
                    character: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,
                    regex: {
                        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/(?=\s*($|[\r\n,.;})]))/,
                        lookbehind: !0
                    },
                    symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
                    string: /("|')(\\?.)*?\1/,
                    number: /[+-]?(?:(?:\d+\.\d+)|(?:\d+))/,
                    punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
                    reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/
                }, n.languages.roboconf = {
                    comment: /#.*/,
                    keyword: {
                        pattern: /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
                        lookbehind: !0
                    },
                    component: {
                        pattern: /[\w-]+(?=[ \t]*\{)/,
                        alias: "variable"
                    },
                    property: /[\w.-]+(?=[ \t]*:)/,
                    value: {
                        pattern: /(=[ \t]*)[^,;]+/,
                        lookbehind: !0,
                        alias: "attr-value"
                    },
                    optional: {
                        pattern: /\(optional\)/,
                        alias: "builtin"
                    },
                    wildcard: {
                        pattern: /(\.)\*/,
                        lookbehind: !0,
                        alias: "operator"
                    },
                    punctuation: /[{},.;:=]/
                },
                function(e) {
                    e.languages.crystal = e.languages.extend("ruby", {
                        keyword: [/\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|self|sizeof|struct|super|then|type|typeof|union|unless|until|when|while|with|yield|__DIR__|__FILE__|__LINE__)\b/, {
                            pattern: /(\.\s*)(?:is_a|responds_to)\?/,
                            lookbehind: !0
                        }],
                        number: /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[0-9a-fA-F_]*[0-9a-fA-F]|(?:[0-9](?:[0-9_]*[0-9])?)(?:\.[0-9_]*[0-9])?(?:[eE][+-]?[0-9_]*[0-9])?)(?:_(?:[uif](?:8|16|32|64))?)?\b/
                    });
                    var t = e.util.clone(e.languages.crystal);
                    e.languages.insertBefore("crystal", "string", {
                        attribute: {
                            pattern: /@\[.+?\]/,
                            alias: "attr-name",
                            inside: {
                                delimiter: {
                                    pattern: /^@\[|\]$/,
                                    alias: "tag"
                                },
                                rest: t
                            }
                        },
                        expansion: [{
                            pattern: /\{\{.+?\}\}/,
                            inside: {
                                delimiter: {
                                    pattern: /^\{\{|\}\}$/,
                                    alias: "tag"
                                },
                                rest: t
                            }
                        }, {
                            pattern: /\{%.+?%\}/,
                            inside: {
                                delimiter: {
                                    pattern: /^\{%|%\}$/,
                                    alias: "tag"
                                },
                                rest: t
                            }
                        }]
                    })
                }(n), n.languages.rust = {
                    comment: [{
                        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0
                    }],
                    string: [/b?r(#*)"(?:\\?.)*?"\1/, /b?("|')(?:\\?.)*?\1/],
                    keyword: /\b(?:abstract|alignof|as|be|box|break|const|continue|crate|do|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|struct|super|true|trait|type|typeof|unsafe|unsized|use|virtual|where|while|yield)\b/,
                    attribute: {
                        pattern: /#!?\[.+?\]/,
                        alias: "attr-name"
                    },
                    function: [/[a-z0-9_]+(?=\s*\()/i, /[a-z0-9_]+!(?=\s*\(|\[)/i],
                    "macro-rules": {
                        pattern: /[a-z0-9_]+!/i,
                        alias: "function"
                    },
                    number: /\b-?(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,
                    "closure-params": {
                        pattern: /\|[^|]*\|(?=\s*[{-])/,
                        inside: {
                            punctuation: /[\|:,]/,
                            operator: /[&*]/
                        }
                    },
                    punctuation: /[{}[\];(),:]|\.+|->/,
                    operator: /[-+*\/%!^=]=?|@|&[&=]?|\|[|=]?|<<?=?|>>?=?/
                }, n.languages.sas = {
                    datalines: {
                        pattern: /^\s*(?:(?:data)?lines|cards);[\s\S]+?(?:\r?\n|\r);/im,
                        alias: "string",
                        inside: {
                            keyword: {
                                pattern: /^(\s*)(?:(?:data)?lines|cards)/i,
                                lookbehind: !0
                            },
                            punctuation: /;/
                        }
                    },
                    comment: [{
                        pattern: /(^\s*|;\s*)\*.*;/m,
                        lookbehind: !0
                    }, /\/\*[\s\S]+?\*\//],
                    datetime: {
                        pattern: /'[^']+'(?:dt?|t)\b/i,
                        alias: "number"
                    },
                    string: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
                    keyword: /\b(?:data|else|format|if|input|proc\s\w+|quit|run|then)\b/i,
                    number: /(?:\B-|\b)(?:[\da-f]+x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i,
                    operator: /\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?|\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,
                    punctuation: /[$%@.(){}\[\];,\\]/
                },
                function(e) {
                    e.languages.sass = e.languages.extend("css", {
                        comment: {
                            pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
                            lookbehind: !0
                        }
                    }), e.languages.insertBefore("sass", "atrule", {
                        "atrule-line": {
                            pattern: /^(?:[ \t]*)[@+=].+/m,
                            inside: {
                                atrule: /(?:@[\w-]+|[+=])/m
                            }
                        }
                    }), delete e.languages.sass.atrule;
                    var t = /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,
                        n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
                            pattern: /(\s+)-(?=\s)/,
                            lookbehind: !0
                        }];
                    e.languages.insertBefore("sass", "property", {
                        "variable-line": {
                            pattern: /^[ \t]*\$.+/m,
                            inside: {
                                punctuation: /:/,
                                variable: t,
                                operator: n
                            }
                        },
                        "property-line": {
                            pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
                            inside: {
                                property: [/[^:\s]+(?=\s*:)/, {
                                    pattern: /(:)[^:\s]+/,
                                    lookbehind: !0
                                }],
                                punctuation: /:/,
                                variable: t,
                                operator: n,
                                important: e.languages.sass.important
                            }
                        }
                    }), delete e.languages.sass.property, delete e.languages.sass.important, delete e.languages.sass.selector, e.languages.insertBefore("sass", "punctuation", {
                        selector: {
                            pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                            lookbehind: !0
                        }
                    })
                }(n), n.languages.scss = n.languages.extend("css", {
                    comment: {
                        pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
                        lookbehind: !0
                    },
                    atrule: {
                        pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
                        inside: {
                            rule: /@[\w-]+/
                        }
                    },
                    url: /(?:[-a-z]+-)*url(?=\()/i,
                    selector: {
                        pattern: /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,
                        inside: {
                            parent: {
                                pattern: /&/,
                                alias: "important"
                            },
                            placeholder: /%[-_\w]+/,
                            variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
                        }
                    }
                }), n.languages.insertBefore("scss", "atrule", {
                    keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
                        pattern: /( +)(?:from|through)(?= )/,
                        lookbehind: !0
                    }]
                }), n.languages.scss.property = {
                    pattern: /(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,
                    inside: {
                        variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
                    }
                }, n.languages.insertBefore("scss", "important", {
                    variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
                }), n.languages.insertBefore("scss", "function", {
                    placeholder: {
                        pattern: /%[-_\w]+/,
                        alias: "selector"
                    },
                    statement: {
                        pattern: /\B!(?:default|optional)\b/i,
                        alias: "keyword"
                    },
                    boolean: /\b(?:true|false)\b/,
                    null: /\bnull\b/,
                    operator: {
                        pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
                        lookbehind: !0
                    }
                }), n.languages.scss.atrule.inside.rest = n.util.clone(n.languages.scss), n.languages.scala = n.languages.extend("java", {
                    keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
                    string: [{
                        pattern: /"""[\W\w]*?"""/,
                        greedy: !0
                    }, {
                        pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
                        greedy: !0
                    }],
                    builtin: /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
                    number: /\b(?:0x[\da-f]*\.?[\da-f]+|\d*\.?\d+e?\d*[dfl]?)\b/i,
                    symbol: /'[^\d\s\\]\w*/
                }), delete n.languages.scala["class-name"], delete n.languages.scala.function, n.languages.scheme = {
                    comment: /;.*/,
                    string: /"(?:[^"\\\r\n]|\\.)*?"|'[^('\s]*/,
                    keyword: {
                        pattern: /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)/,
                        lookbehind: !0
                    },
                    builtin: {
                        pattern: /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)/,
                        lookbehind: !0
                    },
                    number: {
                        pattern: /(\s|\))[-+]?[0-9]*\.?[0-9]+(?:\s*[-+]\s*[0-9]*\.?[0-9]+i)?\b/,
                        lookbehind: !0
                    },
                    boolean: /#[tf]/,
                    operator: {
                        pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)/,
                        lookbehind: !0
                    },
                    function: {
                        pattern: /(\()[^\s()]*(?=\s)/,
                        lookbehind: !0
                    },
                    punctuation: /[()]/
                }, n.languages.smalltalk = {
                    comment: /"(?:""|[^"])+"/,
                    string: /'(?:''|[^'])+'/,
                    symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
                    "block-arguments": {
                        pattern: /(\[\s*):[^\[|]*?\|/,
                        lookbehind: !0,
                        inside: {
                            variable: /:[\da-z]+/i,
                            punctuation: /\|/
                        }
                    },
                    "temporary-variables": {
                        pattern: /\|[^|]+\|/,
                        inside: {
                            variable: /[\da-z]+/i,
                            punctuation: /\|/
                        }
                    },
                    keyword: /\b(?:nil|true|false|self|super|new)\b/,
                    character: {
                        pattern: /\$./,
                        alias: "string"
                    },
                    number: [/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/, /(?:\B-|\b)\d+(?:\.\d+)?(?:e-?\d+)?/],
                    operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
                    punctuation: /[.;:?\[\](){}]/
                },
                function(e) {
                    var t = /\{\*[\w\W]+?\*\}|\{[\w\W]+?\}/g,
                        n = !1;
                    e.languages.smarty = e.languages.extend("markup", {
                        smarty: {
                            pattern: t,
                            inside: {
                                delimiter: {
                                    pattern: /^\{|\}$/i,
                                    alias: "punctuation"
                                },
                                string: /(["'])(?:\\?.)*?\1/,
                                number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee][-+]?\d+)?)\b/,
                                variable: [/\$(?!\d)\w+/, /#(?!\d)\w+#/, {
                                    pattern: /(\.|->)(?!\d)\w+/,
                                    lookbehind: !0
                                }, {
                                    pattern: /(\[)(?!\d)\w+(?=\])/,
                                    lookbehind: !0
                                }],
                                function: [{
                                    pattern: /(\|\s*)@?(?!\d)\w+/,
                                    lookbehind: !0
                                }, /^\/?(?!\d)\w+/, /(?!\d)\w+(?=\()/],
                                "attr-name": {
                                    pattern: /\w+\s*=\s*(?:(?!\d)\w+)?/,
                                    inside: {
                                        variable: {
                                            pattern: /(=\s*)(?!\d)\w+/,
                                            lookbehind: !0
                                        },
                                        operator: /=/
                                    }
                                },
                                punctuation: [/[\[\]().,:`]|\->/],
                                operator: [/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/, /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/, /\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],
                                keyword: /\b(?:false|off|on|no|true|yes)\b/
                            }
                        }
                    }), e.languages.insertBefore("smarty", "tag", {
                        "smarty-comment": {
                            pattern: /\{\*[\w\W]*?\*\}/,
                            alias: ["smarty", "comment"]
                        }
                    }), e.hooks.add("before-highlight", function(e) {
                        "smarty" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(t, function(t) {
                            return "{/literal}" === t && (n = !1), n ? t : ("{literal}" === t && (n = !0), e.tokenStack.push(t), "___SMARTY" + e.tokenStack.length + "___")
                        }))
                    }), e.hooks.add("before-insert", function(e) {
                        "smarty" === e.language && (e.code = e.backupCode, delete e.backupCode)
                    }), e.hooks.add("after-highlight", function(t) {
                        if ("smarty" === t.language) {
                            for (var n, i = 0; n = t.tokenStack[i]; i++) t.highlightedCode = t.highlightedCode.replace("___SMARTY" + (i + 1) + "___", e.highlight(n, t.grammar, "smarty").replace(/\$/g, "$$$$"));
                            t.element.innerHTML = t.highlightedCode
                        }
                    })
                }(n), n.languages.sql = {
                    comment: {
                        pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/,
                        lookbehind: !0
                    },
                    string: {
                        pattern: /(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,
                        lookbehind: !0
                    },
                    variable: /@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,
                    function: /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,
                    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,
                    boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
                    number: /\b-?(?:0x)?\d*\.?[\da-f]+\b/,
                    operator: /[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
                    punctuation: /[;[\]()`,.]/
                },
                function(e) {
                    var t = {
                        url: /url\((["']?).*?\1\)/i,
                        string: /("|')(?:[^\\\r\n]|\\(?:\r\n|[\s\S]))*?\1/,
                        interpolation: null,
                        func: null,
                        important: /\B!(?:important|optional)\b/i,
                        keyword: {
                            pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
                            lookbehind: !0
                        },
                        hexcode: /#[\da-f]{3,6}/i,
                        number: /\b\d+(?:\.\d+)?%?/,
                        boolean: /\b(?:true|false)\b/,
                        operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
                        punctuation: /[{}()\[\];:,]/
                    };
                    t.interpolation = {
                        pattern: /\{[^\r\n}:]+\}/,
                        alias: "variable",
                        inside: e.util.clone(t)
                    }, t.func = {
                        pattern: /[\w-]+\([^)]*\).*/,
                        inside: {
                            function: /^[^(]+/,
                            rest: e.util.clone(t)
                        }
                    }, e.languages.stylus = {
                        comment: {
                            pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*)/,
                            lookbehind: !0
                        },
                        "atrule-declaration": {
                            pattern: /(^\s*)@.+/m,
                            lookbehind: !0,
                            inside: {
                                atrule: /^@[\w-]+/,
                                rest: t
                            }
                        },
                        "variable-declaration": {
                            pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
                            lookbehind: !0,
                            inside: {
                                variable: /^\S+/,
                                rest: t
                            }
                        },
                        statement: {
                            pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
                            lookbehind: !0,
                            inside: {
                                keyword: /^\S+/,
                                rest: t
                            }
                        },
                        "property-declaration": {
                            pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                            lookbehind: !0,
                            inside: {
                                property: {
                                    pattern: /^[^\s:]+/,
                                    inside: {
                                        interpolation: t.interpolation
                                    }
                                },
                                rest: t
                            }
                        },
                        selector: {
                            pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                            lookbehind: !0,
                            inside: {
                                interpolation: t.interpolation,
                                punctuation: /[{},]/
                            }
                        },
                        func: t.func,
                        string: t.string,
                        interpolation: t.interpolation,
                        punctuation: /[{}()\[\];:.]/
                    }
                }(n), n.languages.swift = n.languages.extend("clike", {
                    string: {
                        pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0,
                        inside: {
                            interpolation: {
                                pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
                                inside: {
                                    delimiter: {
                                        pattern: /^\\\(|\)$/,
                                        alias: "variable"
                                    }
                                }
                            }
                        }
                    },
                    keyword: /\b(as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|Protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
                    number: /\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
                    constant: /\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
                    atrule: /@\b(IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
                    builtin: /\b([A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
                }), n.languages.swift.string.inside.interpolation.inside.rest = n.util.clone(n.languages.swift), n.languages.tcl = {
                    comment: {
                        pattern: /(^|[^\\])#.*/,
                        lookbehind: !0
                    },
                    string: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,
                    variable: [{
                        pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*[a-zA-Z0-9_]+/,
                        lookbehind: !0
                    }, {
                        pattern: /(\$){[^}]+}/,
                        lookbehind: !0
                    }, {
                        pattern: /(^\s*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*[a-zA-Z0-9_]+/m,
                        lookbehind: !0
                    }],
                    function: {
                        pattern: /(^\s*proc[ \t]+)[^\s]+/m,
                        lookbehind: !0
                    },
                    builtin: [{
                        pattern: /(^\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,
                        lookbehind: !0
                    }, /\b(elseif|else)\b/],
                    scope: {
                        pattern: /(^\s*)(global|upvar|variable)\b/m,
                        lookbehind: !0,
                        alias: "constant"
                    },
                    keyword: {
                        pattern: /(^\s*|\[)(after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
                        lookbehind: !0
                    },
                    operator: /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,
                    punctuation: /[{}()\[\]]/
                },
                function(e) {
                    var t = "(?:\\([^|)]+\\)|\\[[^\\]]+\\]|\\{[^}]+\\})+",
                        n = {
                            css: {
                                pattern: /\{[^}]+\}/,
                                inside: {
                                    rest: e.languages.css
                                }
                            },
                            "class-id": {
                                pattern: /(\()[^)]+(?=\))/,
                                lookbehind: !0,
                                alias: "attr-value"
                            },
                            lang: {
                                pattern: /(\[)[^\]]+(?=\])/,
                                lookbehind: !0,
                                alias: "attr-value"
                            },
                            punctuation: /[\\\/]\d+|\S/
                        };
                    e.languages.textile = e.languages.extend("markup", {
                        phrase: {
                            pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
                            lookbehind: !0,
                            inside: {
                                "block-tag": {
                                    pattern: RegExp("^[a-z]\\w*(?:" + t + "|[<>=()])*\\."),
                                    inside: {
                                        modifier: {
                                            pattern: RegExp("(^[a-z]\\w*)(?:" + t + "|[<>=()])+(?=\\.)"),
                                            lookbehind: !0,
                                            inside: e.util.clone(n)
                                        },
                                        tag: /^[a-z]\w*/,
                                        punctuation: /\.$/
                                    }
                                },
                                list: {
                                    pattern: RegExp("^[*#]+(?:" + t + ")?\\s+.+", "m"),
                                    inside: {
                                        modifier: {
                                            pattern: RegExp("(^[*#]+)" + t),
                                            lookbehind: !0,
                                            inside: e.util.clone(n)
                                        },
                                        punctuation: /^[*#]+/
                                    }
                                },
                                table: {
                                    pattern: RegExp("^(?:(?:" + t + "|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:" + t + "|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|", "m"),
                                    inside: {
                                        modifier: {
                                            pattern: RegExp("(^|\\|(?:\\r?\\n|\\r)?)(?:" + t + "|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)"),
                                            lookbehind: !0,
                                            inside: e.util.clone(n)
                                        },
                                        punctuation: /\||^\./
                                    }
                                },
                                inline: {
                                    pattern: RegExp("(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:" + t + ")?.+?\\1"),
                                    inside: {
                                        bold: {
                                            pattern: RegExp("((^\\*\\*?)(?:" + t + ")?).+?(?=\\2)"),
                                            lookbehind: !0
                                        },
                                        italic: {
                                            pattern: RegExp("((^__?)(?:" + t + ")?).+?(?=\\2)"),
                                            lookbehind: !0
                                        },
                                        cite: {
                                            pattern: RegExp("(^\\?\\?(?:" + t + ")?).+?(?=\\?\\?)"),
                                            lookbehind: !0,
                                            alias: "string"
                                        },
                                        code: {
                                            pattern: RegExp("(^@(?:" + t + ")?).+?(?=@)"),
                                            lookbehind: !0,
                                            alias: "keyword"
                                        },
                                        inserted: {
                                            pattern: RegExp("(^\\+(?:" + t + ")?).+?(?=\\+)"),
                                            lookbehind: !0
                                        },
                                        deleted: {
                                            pattern: RegExp("(^-(?:" + t + ")?).+?(?=-)"),
                                            lookbehind: !0
                                        },
                                        span: {
                                            pattern: RegExp("(^%(?:" + t + ")?).+?(?=%)"),
                                            lookbehind: !0
                                        },
                                        modifier: {
                                            pattern: RegExp("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])" + t),
                                            lookbehind: !0,
                                            inside: e.util.clone(n)
                                        },
                                        punctuation: /[*_%?@+\-^~]+/
                                    }
                                },
                                "link-ref": {
                                    pattern: /^\[[^\]]+\]\S+$/m,
                                    inside: {
                                        string: {
                                            pattern: /(\[)[^\]]+(?=\])/,
                                            lookbehind: !0
                                        },
                                        url: {
                                            pattern: /(\])\S+$/,
                                            lookbehind: !0
                                        },
                                        punctuation: /[\[\]]/
                                    }
                                },
                                link: {
                                    pattern: RegExp('"(?:' + t + ')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),
                                    inside: {
                                        text: {
                                            pattern: RegExp('(^"(?:' + t + ')?)[^"]+(?=")'),
                                            lookbehind: !0
                                        },
                                        modifier: {
                                            pattern: RegExp('(^")' + t),
                                            lookbehind: !0,
                                            inside: e.util.clone(n)
                                        },
                                        url: {
                                            pattern: /(:).+/,
                                            lookbehind: !0
                                        },
                                        punctuation: /[":]/
                                    }
                                },
                                image: {
                                    pattern: RegExp("!(?:" + t + "|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),
                                    inside: {
                                        source: {
                                            pattern: RegExp("(^!(?:" + t + "|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),
                                            lookbehind: !0,
                                            alias: "url"
                                        },
                                        modifier: {
                                            pattern: RegExp("(^!)(?:" + t + "|[<>=()])+"),
                                            lookbehind: !0,
                                            inside: e.util.clone(n)
                                        },
                                        url: {
                                            pattern: /(:).+/,
                                            lookbehind: !0
                                        },
                                        punctuation: /[!:]/
                                    }
                                },
                                footnote: {
                                    pattern: /\b\[\d+\]/,
                                    alias: "comment",
                                    inside: {
                                        punctuation: /\[|\]/
                                    }
                                },
                                acronym: {
                                    pattern: /\b[A-Z\d]+\([^)]+\)/,
                                    inside: {
                                        comment: {
                                            pattern: /(\()[^)]+(?=\))/,
                                            lookbehind: !0
                                        },
                                        punctuation: /[()]/
                                    }
                                },
                                mark: {
                                    pattern: /\b\((TM|R|C)\)/,
                                    alias: "comment",
                                    inside: {
                                        punctuation: /[()]/
                                    }
                                }
                            }
                        }
                    });
                    var i = {
                        inline: e.util.clone(e.languages.textile.phrase.inside.inline),
                        link: e.util.clone(e.languages.textile.phrase.inside.link),
                        image: e.util.clone(e.languages.textile.phrase.inside.image),
                        footnote: e.util.clone(e.languages.textile.phrase.inside.footnote),
                        acronym: e.util.clone(e.languages.textile.phrase.inside.acronym),
                        mark: e.util.clone(e.languages.textile.phrase.inside.mark)
                    };
                    e.languages.textile.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i, e.languages.textile.phrase.inside.inline.inside.bold.inside = i, e.languages.textile.phrase.inside.inline.inside.italic.inside = i, e.languages.textile.phrase.inside.inline.inside.inserted.inside = i, e.languages.textile.phrase.inside.inline.inside.deleted.inside = i, e.languages.textile.phrase.inside.inline.inside.span.inside = i, e.languages.textile.phrase.inside.table.inside.inline = i.inline, e.languages.textile.phrase.inside.table.inside.link = i.link, e.languages.textile.phrase.inside.table.inside.image = i.image, e.languages.textile.phrase.inside.table.inside.footnote = i.footnote, e.languages.textile.phrase.inside.table.inside.acronym = i.acronym, e.languages.textile.phrase.inside.table.inside.mark = i.mark
                }(n), n.languages.twig = {
                    comment: /\{#[\s\S]*?#\}/,
                    tag: {
                        pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
                        inside: {
                            ld: {
                                pattern: /^(?:\{\{\-?|\{%\-?\s*\w+)/,
                                inside: {
                                    punctuation: /^(?:\{\{|\{%)\-?/,
                                    keyword: /\w+/
                                }
                            },
                            rd: {
                                pattern: /\-?(?:%\}|\}\})$/,
                                inside: {
                                    punctuation: /.*/
                                }
                            },
                            string: {
                                pattern: /("|')(?:\\?.)*?\1/,
                                inside: {
                                    punctuation: /^['"]|['"]$/
                                }
                            },
                            keyword: /\b(?:even|if|odd)\b/,
                            boolean: /\b(?:true|false|null)\b/,
                            number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+([Ee][-+]?\d+)?)\b/,
                            operator: [{
                                pattern: /(\s)(?:and|b\-and|b\-xor|b\-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
                                lookbehind: !0
                            }, /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],
                            property: /\b[a-zA-Z_][a-zA-Z0-9_]*\b/,
                            punctuation: /[()\[\]{}:.,]/
                        }
                    },
                    other: {
                        pattern: /\S(?:[\s\S]*\S)?/,
                        inside: n.languages.markup
                    }
                }, n.languages.typescript = n.languages.extend("javascript", {
                    keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/
                }), n.languages.ts = n.languages.typescript, n.languages.verilog = {
                    comment: /\/\/.*|\/\*[\w\W]*?\*\//,
                    string: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                    property: /\B\$\w+\b/,
                    constant: /\B`\w+\b/,
                    function: /[a-z\d_]+(?=\()/i,
                    keyword: /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
                    important: /\b(?:always_latch|always_comb|always_ff|always)\b ?@?/,
                    number: /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b\d*[._]?\d+(?:e[-+]?\d+)?/i,
                    operator: /[-+{}^~%*\/?=!<>&|]+/,
                    punctuation: /[[\];(),.:]/
                }, n.languages.vhdl = {
                    comment: /--.+/,
                    "vhdl-vectors": {
                        pattern: /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,
                        alias: "number"
                    },
                    "quoted-function": {
                        pattern: /"\S+?"(?=\()/,
                        alias: "function"
                    },
                    string: /"(?:[^\\\r\n]|\\?(?:\r\n|[\s\S]))*?"/,
                    constant: /\b(?:use|library)\b/i,
                    keyword: /\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,
                    boolean: /\b(?:true|false)\b/i,
                    function: /[a-z0-9_]+(?=\()/i,
                    number: /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
                    operator: /[<>]=?|:=|[-+*\/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,
                    punctuation: /[{}[\];(),.:]/
                }, n.languages.vim = {
                    string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
                    comment: /".*/,
                    function: /\w+(?=\()/,
                    keyword: /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
                    builtin: /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,
                    number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
                    operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
                    punctuation: /[{}[\](),;:]/
                }, n.languages.wiki = n.languages.extend("markup", {
                    "block-comment": {
                        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
                        lookbehind: !0,
                        alias: "comment"
                    },
                    heading: {
                        pattern: /^(=+).+?\1/m,
                        inside: {
                            punctuation: /^=+|=+$/,
                            important: /.+/
                        }
                    },
                    emphasis: {
                        pattern: /('{2,5}).+?\1/,
                        inside: {
                            "bold italic": {
                                pattern: /(''''').+?(?=\1)/,
                                lookbehind: !0
                            },
                            bold: {
                                pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
                                lookbehind: !0
                            },
                            italic: {
                                pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
                                lookbehind: !0
                            },
                            punctuation: /^''+|''+$/
                        }
                    },
                    hr: {
                        pattern: /^-{4,}/m,
                        alias: "punctuation"
                    },
                    url: [/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i, /\[\[.+?\]\]|\[.+?\]/],
                    variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?}}/],
                    symbol: [/^#redirect/im, /~{3,5}/],
                    "table-tag": {
                        pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
                        lookbehind: !0,
                        inside: {
                            "table-bar": {
                                pattern: /\|$/,
                                alias: "punctuation"
                            },
                            rest: n.languages.markup.tag.inside
                        }
                    },
                    punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
                }), n.languages.insertBefore("wiki", "tag", {
                    nowiki: {
                        pattern: /<(nowiki|pre|source)\b[\w\W]*?>[\w\W]*?<\/\1>/i,
                        inside: {
                            tag: {
                                pattern: /<(?:nowiki|pre|source)\b[\w\W]*?>|<\/(?:nowiki|pre|source)>/i,
                                inside: n.languages.markup.tag.inside
                            }
                        }
                    }
                }), n.languages.xojo = {
                    comment: {
                        pattern: /(?:'|\/\/|Rem\b).+/i,
                        inside: {
                            keyword: /^Rem/i
                        }
                    },
                    string: {
                        pattern: /"(?:""|[^"])*"/,
                        greedy: !0
                    },
                    number: [/(?:\b|\B[.-])(?:\d+\.?\d*)(?:E[+-]?\d+)?/i, /&[bchou][a-z\d]+/i],
                    symbol: /#(?:If|Else|ElseIf|Endif|Pragma)\b/i,
                    keyword: /\b(?:AddHandler|App|Array|As(?:signs)?|By(?:Ref|Val)|Break|Call|Case|Catch|Const|Continue|CurrentMethodName|Declare|Dim|Do(?:wnTo)?|Each|Else(?:If)?|End|Exit|Extends|False|Finally|For|Global|If|In|Lib|Loop|Me|Next|Nil|Optional|ParamArray|Raise(?:Event)?|ReDim|Rem|RemoveHandler|Return|Select|Self|Soft|Static|Step|Super|Then|To|True|Try|Ubound|Until|Using|Wend|While)\b/i,
                    operator: /<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|Xor|WeakAddressOf)\b/i,
                    punctuation: /[.,;:()]/
                }, n.languages.yaml = {
                    scalar: {
                        pattern: /([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,
                        lookbehind: !0,
                        alias: "string"
                    },
                    comment: /#.*/,
                    key: {
                        pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
                        lookbehind: !0,
                        alias: "atrule"
                    },
                    directive: {
                        pattern: /(^[ \t]*)%.+/m,
                        lookbehind: !0,
                        alias: "important"
                    },
                    datetime: {
                        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,
                        lookbehind: !0,
                        alias: "number"
                    },
                    boolean: {
                        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,
                        lookbehind: !0,
                        alias: "important"
                    },
                    null: {
                        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,
                        lookbehind: !0,
                        alias: "important"
                    },
                    string: {
                        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,
                        lookbehind: !0
                    },
                    number: {
                        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
                        lookbehind: !0
                    },
                    tag: /![^\s]+/,
                    important: /[&*][\w]+/,
                    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
                }, "undefined" != typeof self && self.Prism && self.document && n.hooks.add("complete", function(e) {
                    if (e.code) {
                        var t = e.element.parentNode,
                            n = /\s*\bline-numbers\b\s*/;
                        if (t && /pre/i.test(t.nodeName) && (n.test(t.className) || n.test(e.element.className)) && !e.element.querySelector(".line-numbers-rows")) {
                            n.test(e.element.className) && (e.element.className = e.element.className.replace(n, "")), n.test(t.className) || (t.className += " line-numbers");
                            var i, a = e.code.match(/\n(?!$)/g),
                                r = a ? a.length + 1 : 1,
                                o = new Array(r + 1);
                            o = o.join("<span></span>"), (i = document.createElement("span")).setAttribute("aria-hidden", "true"), i.className = "line-numbers-rows", i.innerHTML = o, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(i)
                        }
                    }
                })
        });

    function Fe() {
        
        this._init()
    }
    var Be = Fe.prototype;
    Be._init = function() {
        this.config = o || {}, (e = this)._hooks = {}, e._lifecycle = {}, ["init", "mounted", "beforeEach", "afterEach", "doneEach", "ready"].forEach(function(t) {
            var n = e._hooks[t] = [];
            e._lifecycle[t] = function(e) {
                return n.push(e)
            }
        });
        var e;
        [].concat((t = this).config.plugins).forEach(function(e) {
            return r(e) && e(t._lifecycle, t)
        });
        var t;
        d(this, "init"),
            function(e) {
                var t, n = e.config;
                t = "history" === (n.routerMode || "hash") && g ? new Ne(n) : new Ie(n), e.router = t, Re(e), Le = e.route, t.onchange(function(t) {
                    Re(e), e._updateRender(), Le.path !== e.route.path ? (e.$fetch(), Le = e.route) : e.$resetEvents()
                })
            }(this), _e(this), Oe(this),
            function(e) {
                var t = e.config.loadSidebar;
                if (e.rendered) {
                    var n = le(e.router, ".sidebar-nav", !0, !0);
                    t && n && (n.parentNode.innerHTML += window.__SUB_SIDEBAR__), e._bindEventOnRendered(n), e.$resetEvents(), d(e, "doneEach"), d(e, "ready")
                } else e.$fetch(function(t) {
                    return d(e, "ready")
                })
            }(this), d(this, "mounted")
    };
    Be.route = {};
    (Ue = Be)._renderTo = function(e, t, n) {
        var i = h(e);
        i && (i[n ? "outerHTML" : "innerHTML"] = t)
    }, Ue._renderSidebar = function(e) {
        var t = this.config,
            n = t.maxLevel,
            i = t.subMaxLevel,
            a = t.loadSidebar,
            r = t.showLevel,
            o = this.compiler.sidebar(e, n);
        if (r) {
            var s = (new DOMParser).parseFromString(o, "text/xml");
            s.children.length > 0 && (function e(t, n, i) {
                for (var a = 0; a < t.children.length; a++) {
                    var r = t.children[a];
                    "ul" !== r.nodeName ? void 0 !== r.children && 0 !== r.children.length ? (e(r, n, i), i++) : r.innerHTML = "<b>" + n + i + ".</b> " + r.innerHTML : (e(r, n + i + ".", 1), i++)
                }
            }(s.children[0], "", 1), o = (new XMLSerializer).serializeToString(s))
        }
        this._renderTo(".sidebar-nav", o);
        var l = le(this.router, ".sidebar-nav", !0, !0);
        a && l ? l.parentNode.innerHTML += this.compiler.subSidebar(i) || "" : this.compiler.subSidebar(), this._bindEventOnRendered(l)
    }, Ue._bindEventOnRendered = function(e) {
        var t = this.config,
            n = t.autoHeader,
            i = t.auto2top;
        if (function(e) {
                var t = E(".cover.show");
                he = t ? t.offsetHeight : 0;
                for (var n = h(".sidebar"), i = y(n, "li"), a = 0, r = i.length; a < r; a += 1) {
                    var o = i[a],
                        s = o.querySelector("a");
                    if (s) {
                        var l = s.getAttribute("href");
                        if ("/" !== l) {
                            var c = e.parse(l),
                                d = c.query.id,
                                u = c.path;
                            d && (l = be(u, d))
                        }
                        l && (ue[decodeURIComponent(l)] = o)
                    }
                }
                if (!p) {
                    var g = e.getCurrentPath();
                    _("scroll", function() {
                        return fe(g)
                    }), T("scroll", function() {
                        return fe(g)
                    }), T(n, "mouseover", function() {
                        pe = !0
                    }), T(n, "mouseleave", function() {
                        pe = !1
                    })
                }
            }(this.router), n && e) {
            var a = h("#main"),
                r = a.children[0];
            if (r && "H1" !== r.tagName) {
                var o = v("h1");
                o.innerText = e.innerText, w(a, o)
            }
        }
        i && (s = i, void 0 === s && (s = 0), Ee.scrollTop = !0 === s ? 0 : Number(s));
        var s
    }, Ue._renderNav = function(e) {
        e && this._renderTo("nav", this.compiler.compile(e)), le(this.router, "nav")
    }, Ue._renderMain = function(e, t, n) {
        var i = this;
        if (void 0 === t && (t = {}), !e) return Te.call(this, e);
        this.compiler.calTocStart(e), d(this, "beforeEach", e, function(e) {
            var a, r = function() {
                t.updatedAt && (a = we(a, t.updatedAt, i.config.formatUpdated)), d(i, "afterEach", a, function(e) {
                    return Te.call(i, e)
                })
            };
            i.isHTML ? (a = i.result, r(), n()) : ve({
                compiler: i.compiler,
                raw: e
            }, function(e) {
                a = i.compiler.compile(e), r(), n()
            })
        })
    }, Ue._renderCover = function(e, t) {
        var n = h(".cover");
        if (A(h("main"), t ? "add" : "remove", "hidden"), e) {
            A(n, "add", "show");
            var i = this.coverIsHTML ? e : this.compiler.cover(e),
                a = i.trim().match('<p><img.*?data-origin="(.*?)"[^a]+alt="(.*?)">([^<]*?)</p>$');
            if (a) {
                if ("color" === a[2]) n.style.background = a[1] + (a[3] || "");
                else {
                    var r = a[1];
                    A(n, "add", "has-mask"), Q(a[1]) || (r = X(this.router.getBasePath(), a[1])), n.style.backgroundImage = "url(" + r + ")", n.style.backgroundSize = "cover", n.style.backgroundPosition = "center center"
                }
                i = i.replace(a[0], "")
            }
            this._renderTo(".cover-main", i), se()
        } else A(n, "remove", "show")
    }, Ue._updateRender = function() {
        ! function(e) {
            var t = h(".app-name-link"),
                n = e.config.nameLink,
                a = e.route.path;
            if (t)
                if (i(e.config.nameLink)) t.setAttribute("href", n);
                else if ("object" == typeof n) {
                var r = Object.keys(n).filter(function(e) {
                    return a.indexOf(e) > -1
                })[0];
                t.setAttribute("href", n[r])
            }
        }(this)
    };
    var Ue;
    ! function(e) {
        var t;
        e._fetch = function(e) {
            var n = this;
            void 0 === e && (e = a);
            var i = this.route,
                r = i.path,
                o = Z(i.query, ["id"]),
                s = this.config,
                l = s.loadNavbar,
                c = s.loadSidebar,
                d = s.requestHeaders;
            t && t.abort && t.abort(), t = P(this.router.getFile(r) + o, !0, d), this.isHTML = /\.html$/g.test(r);
            var u = function() {
                if (!c) return e();
                Pe(r, o, c, function(t) {
                    n._renderSidebar(t), e()
                }, n, !0)
            };
            t.then(function(e, t) {
                n._renderMain(e, t, u)
            }, function(e) {
                n._renderMain(null, {}, u)
            }), l && Pe(r, o, l, function(e) {
                return n._renderNav(e)
            }, this, !0)
        }, e._fetchCover = function() {
            var e = this,
                t = this.config,
                n = t.coverpage,
                i = t.requestHeaders,
                a = this.route.query,
                r = J(this.route.path);
            if (n) {
                var o = null,
                    s = this.route.path;
                if ("string" == typeof n) "/" === s && (o = n);
                else if (Array.isArray(n)) o = n.indexOf(s) > -1 && "_coverpage";
                else {
                    var l = n[s];
                    o = !0 === l ? "_coverpage" : l
                }
                var c = !!o && this.config.onlyCover;
                return o ? (o = this.router.getFile(r + o), this.coverIsHTML = /\.html$/g.test(o), P(o + Z(a, ["id"]), !1, i).then(function(t) {
                    return e._renderCover(t, c)
                })) : this._renderCover(null, c), c
            }
        }, e.$fetch = function(e) {
            var t = this;
            void 0 === e && (e = a);
            var n = function() {
                d(t, "doneEach"), e()
            };
            this._fetchCover() ? n() : this._fetch(function(e) {
                t.$resetEvents(), n()
            })
        }
    }(Be), Be.$resetEvents = function() {
        Se(this.route.path, this.route.query.id), le(this.router, "nav")
    };
    window.Docsify = {
            util: De,
            dom: C,
            get: P,
            slugify: q
        }, window.DocsifyCompiler = re, window.marked = G, window.Prism = Me, Fe.version = "4.6.3",
        function(e) {

            var t = document.readyState;
            if ("complete" === t || "interactive" === t) return setTimeout(e, 0);
            document.addEventListener("DOMContentLoaded", e);

        }(function(e) {

            return new Fe
        })
}();
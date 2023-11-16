/*! Summernote v0.8.20 | (c) 2013- Alan Hong and contributors | MIT license */
!function(t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e(require("jQuery"));
  else if ("function" == typeof define && define.amd)
    define(["jQuery"], e);
  else {
    var n = "object" == typeof exports ? e(require("jQuery")) : e(t.jQuery);
    for (var o in n)
      ("object" == typeof exports ? exports : t)[o] = n[o]
  }
}(self, (function(t) {
    return (()=>{
        "use strict";
        var e = {
          9770: (t,e,n)=>{
            var o = n(1145)
              , i = n.n(o);
            i().summernote = i().summernote || {
              lang: {}
            },
              i().extend(i().summernote.lang, {
                "en-US": {
                  font: {
                    bold: "Bold",
                    italic: "Italic",
                    underline: "Underline",
                    clear: "Remove Font Style",
                    height: "Line Height",
                    name: "Font Family",
                    strikethrough: "Strikethrough",
                    subscript: "Subscript",
                    superscript: "Superscript",
                    size: "Font Size",
                    sizeunit: "Font Size Unit"
                  },
                  image: {
                    image: "Picture",
                    insert: "Insert Image",
                    resizeFull: "Resize full",
                    resizeHalf: "Resize half",
                    resizeQuarter: "Resize quarter",
                    resizeNone: "Original size",
                    floatLeft: "Float Left",
                    floatRight: "Float Right",
                    floatNone: "Remove float",
                    shapeRounded: "Shape: Rounded",
                    shapeCircle: "Shape: Circle",
                    shapeThumbnail: "Shape: Thumbnail",
                    shapeNone: "Shape: None",
                    dragImageHere: "Drag image or text here",
                    dropImage: "Drop image or Text",
                    selectFromFiles: "Select from files",
                    maximumFileSize: "Maximum file size",
                    maximumFileSizeError: "Maximum file size exceeded.",
                    url: "Image URL",
                    remove: "Remove Image",
                    original: "Original"
                  },
                  video: {
                    video: "Video",
                    videoLink: "Video Link",
                    insert: "Insert Video",
                    url: "Video URL",
                    providers: "(YouTube, Google Drive, Vimeo, Vine, Instagram, DailyMotion, Youku, Peertube)"
                  },
                  link: {
                    link: "Link",
                    insert: "Insert Link",
                    unlink: "Unlink",
                    edit: "Edit",
                    textToDisplay: "Text to display",
                    url: "To what URL should this link go?",
                    openInNewWindow: "Open in new window",
                    useProtocol: "Use default protocol"
                  },
                  table: {
                    table: "Table",
                    addRowAbove: "Add row above",
                    addRowBelow: "Add row below",
                    addColLeft: "Add column left",
                    addColRight: "Add column right",
                    delRow: "Delete row",
                    delCol: "Delete column",
                    delTable: "Delete table"
                  },
                  hr: {
                    insert: "Insert Horizontal Rule"
                  },
                  style: {
                    style: "Style",
                    p: "Normal",
                    blockquote: "Quote",
                    h1: "Header 1",
                    h2: "Header 2",
                    h3: "Header 3",
                    h4: "Header 4",
                    h5: "Header 5",
                    h6: "Header 6"
                  },
                  lists: {
                    unordered: "Unordered list",
                    ordered: "Ordered list"
                  },
                  options: {
                    help: "Help",
                    fullscreen: "Full Screen",
                    codeview: "Code View"
                  },
                  paragraph: {
                    paragraph: "Paragraph",
                    outdent: "Outdent",
                    indent: "Indent",
                    left: "Align left",
                    center: "Align center",
                    right: "Align right",
                    justify: "Justify full"
                  },
                  color: {
                    recent: "Recent Color",
                    more: "More Color",
                    background: "Background Color",
                    foreground: "Text Color",
                    transparent: "Transparent",
                    setTransparent: "Set transparent",
                    reset: "Reset",
                    resetToDefault: "Reset to default",
                    cpSelect: "Select"
                  },
                  shortcut: {
                    shortcuts: "Keyboard shortcuts",
                    close: "Close",
                    textFormatting: "Text formatting",
                    action: "Action",
                    paragraphFormatting: "Paragraph formatting",
                    documentStyle: "Document Style",
                    extraKeys: "Extra keys"
                  },
                  help: {
                    escape: "Escape",
                    insertParagraph: "Insert Paragraph",
                    undo: "Undo the last command",
                    redo: "Redo the last command",
                    tab: "Tab",
                    untab: "Untab",
                    bold: "Set a bold style",
                    italic: "Set a italic style",
                    underline: "Set a underline style",
                    strikethrough: "Set a strikethrough style",
                    removeFormat: "Clean a style",
                    justifyLeft: "Set left align",
                    justifyCenter: "Set center align",
                    justifyRight: "Set right align",
                    justifyFull: "Set full align",
                    insertUnorderedList: "Toggle unordered list",
                    insertOrderedList: "Toggle ordered list",
                    outdent: "Outdent on current paragraph",
                    indent: "Indent on current paragraph",
                    formatPara: "Change current block's format as a paragraph(P tag)",
                    formatH1: "Change current block's format as H1",
                    formatH2: "Change current block's format as H2",
                    formatH3: "Change current block's format as H3",
                    formatH4: "Change current block's format as H4",
                    formatH5: "Change current block's format as H5",
                    formatH6: "Change current block's format as H6",
                    insertHorizontalRule: "Insert horizontal rule",
                    "linkDialog.show": "Show Link Dialog"
                  },
                  history: {
                    undo: "Undo",
                    redo: "Redo"
                  },
                  specialChar: {
                    specialChar: "SPECIAL CHARACTERS",
                    select: "Select Special characters"
                  },
                  output: {
                    noSelection: "No Selection Made!"
                  }
                }
              })
          }
          ,
          1145: e=>{
            e.exports = t
          }
        }
          , n = {};
        function o(t) {
          var i = n[t];
          if (void 0 !== i)
            return i.exports;
          var r = n[t] = {
            exports: {}
          };
          return e[t](r, r.exports, o),
            r.exports
        }
        o.n = t=>{
          var e = t && t.__esModule ? ()=>t.default : ()=>t;
          return o.d(e, {
            a: e
          }),
            e
        }
          ,
          o.d = (t,e)=>{
            for (var n in e)
              o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
              })
          }
          ,
          o.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
          o.r = t=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
              value: "Module"
            }),
              Object.defineProperty(t, "__esModule", {
                value: !0
              })
          }
        ;
        var i = {};
        return (()=>{
            o.r(i);
            var t = o(1145)
              , e = o.n(t)
              , n = (o(9770),
              ["sans-serif", "serif", "monospace", "cursive", "fantasy"]);
            function r(t) {
              return -1 === e().inArray(t.toLowerCase(), n) ? "'".concat(t, "'") : t
            }
            var a, s = navigator.userAgent, l = /MSIE|Trident/i.test(s);
            if (l) {
              var c = /MSIE (\d+[.]\d+)/.exec(s);
              c && (a = parseFloat(c[1])),
              (c = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(s)) && (a = parseFloat(c[1]))
            }
            var u = /Edge\/\d+/.test(s)
              , d = "ontouchstart"in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
              , h = l ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input";
            const f = {
              isMac: navigator.appVersion.indexOf("Mac") > -1,
              isMSIE: l,
              isEdge: u,
              isFF: !u && /firefox/i.test(s),
              isPhantom: /PhantomJS/i.test(s),
              isWebkit: !u && /webkit/i.test(s),
              isChrome: !u && /chrome/i.test(s),
              isSafari: !u && /safari/i.test(s) && !/chrome/i.test(s),
              browserVersion: a,
              isSupportTouch: d,
              isFontInstalled: function(t) {
                var e = "Comic Sans MS" === t ? "Courier New" : "Comic Sans MS"
                  , n = "mmmmmmmmmmwwwww"
                  , o = document.createElement("canvas").getContext("2d");
                o.font = "200px '" + e + "'";
                var i = o.measureText(n).width;
                return o.font = "200px " + r(t) + ', "' + e + '"',
                i !== o.measureText(n).width
              },
              isW3CRangeSupport: !!document.createRange,
              inputEventName: h,
              genericFontFamilies: n,
              validFontName: r
            };
            var p = 0;
            const m = {
              eq: function(t) {
                return function(e) {
                  return t === e
                }
              },
              eq2: function(t, e) {
                return t === e
              },
              peq2: function(t) {
                return function(e, n) {
                  return e[t] === n[t]
                }
              },
              ok: function() {
                return !0
              },
              fail: function() {
                return !1
              },
              self: function(t) {
                return t
              },
              not: function(t) {
                return function() {
                  return !t.apply(t, arguments)
                }
              },
              and: function(t, e) {
                return function(n) {
                  return t(n) && e(n)
                }
              },
              invoke: function(t, e) {
                return function() {
                  return t[e].apply(t, arguments)
                }
              },
              resetUniqueId: function() {
                p = 0
              },
              uniqueId: function(t) {
                var e = ++p + "";
                return t ? t + e : e
              },
              rect2bnd: function(t) {
                var n = e()(document);
                return {
                  top: t.top + n.scrollTop(),
                  left: t.left + n.scrollLeft(),
                  width: t.right - t.left,
                  height: t.bottom - t.top
                }
              },
              invertObject: function(t) {
                var e = {};
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[t[n]] = n);
                return e
              },
              namespaceToCamel: function(t, e) {
                return (e = e || "") + t.split(".").map((function(t) {
                    return t.substring(0, 1).toUpperCase() + t.substring(1)
                  }
                )).join("")
              },
              debounce: function(t, e, n) {
                var o;
                return function() {
                  var i = this
                    , r = arguments
                    , a = function() {
                    o = null,
                    n || t.apply(i, r)
                  }
                    , s = n && !o;
                  clearTimeout(o),
                    o = setTimeout(a, e),
                  s && t.apply(i, r)
                }
              },
              isValidUrl: function(t) {
                return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(t)
              }
            };
            function v(t) {
              return t[0]
            }
            function g(t) {
              return t[t.length - 1]
            }
            function b(t) {
              return t.slice(1)
            }
            function y(t, e) {
              if (t && t.length && e) {
                if (t.indexOf)
                  return -1 !== t.indexOf(e);
                if (t.contains)
                  return t.contains(e)
              }
              return !1
            }
            const k = {
              head: v,
              last: g,
              initial: function(t) {
                return t.slice(0, t.length - 1)
              },
              tail: b,
              prev: function(t, e) {
                if (t && t.length && e) {
                  var n = t.indexOf(e);
                  return -1 === n ? null : t[n - 1]
                }
                return null
              },
              next: function(t, e) {
                if (t && t.length && e) {
                  var n = t.indexOf(e);
                  return -1 === n ? null : t[n + 1]
                }
                return null
              },
              find: function(t, e) {
                for (var n = 0, o = t.length; n < o; n++) {
                  var i = t[n];
                  if (e(i))
                    return i
                }
              },
              contains: y,
              all: function(t, e) {
                for (var n = 0, o = t.length; n < o; n++)
                  if (!e(t[n]))
                    return !1;
                return !0
              },
              sum: function(t, e) {
                return e = e || m.self,
                  t.reduce((function(t, n) {
                      return t + e(n)
                    }
                  ), 0)
              },
              from: function(t) {
                for (var e = [], n = t.length, o = -1; ++o < n; )
                  e[o] = t[o];
                return e
              },
              isEmpty: function(t) {
                return !t || !t.length
              },
              clusterBy: function(t, e) {
                return t.length ? b(t).reduce((function(t, n) {
                    var o = g(t);
                    return e(g(o), n) ? o[o.length] = n : t[t.length] = [n],
                      t
                  }
                ), [[v(t)]]) : []
              },
              compact: function(t) {
                for (var e = [], n = 0, o = t.length; n < o; n++)
                  t[n] && e.push(t[n]);
                return e
              },
              unique: function(t) {
                for (var e = [], n = 0, o = t.length; n < o; n++)
                  y(e, t[n]) || e.push(t[n]);
                return e
              }
            };
            var w = String.fromCharCode(160);
            function C(t) {
              return t && e()(t).hasClass("note-editable")
            }
            function x(t) {
              return t = t.toUpperCase(),
                function(e) {
                  return e && e.nodeName.toUpperCase() === t
                }
            }
            function S(t) {
              return t && 3 === t.nodeType
            }
            function T(t) {
              return t && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(t.nodeName.toUpperCase())
            }
            function E(t) {
              return !C(t) && (t && /^DIV|^P|^LI|^H[1-7]/.test(t.nodeName.toUpperCase()))
            }
            var I = x("PRE")
              , $ = x("LI");
            var N = x("TABLE")
              , P = x("DATA");
            function R(t) {
              return !(H(t) || L(t) || A(t) || E(t) || N(t) || D(t) || P(t))
            }
            function L(t) {
              return t && /^UL|^OL/.test(t.nodeName.toUpperCase())
            }
            var A = x("HR");
            function F(t) {
              return t && /^TD|^TH/.test(t.nodeName.toUpperCase())
            }
            var D = x("BLOCKQUOTE");
            function H(t) {
              return F(t) || D(t) || C(t)
            }
            var z = x("A");
            var B = x("BODY");
            var M = f.isMSIE && f.browserVersion < 11 ? "&nbsp;" : "<br>";
            function O(t) {
              return S(t) ? t.nodeValue.length : t ? t.childNodes.length : 0
            }
            function U(t) {
              var e = O(t);
              return 0 === e || (!S(t) && 1 === e && t.innerHTML === M || !(!k.all(t.childNodes, S) || "" !== t.innerHTML))
            }
            function j(t) {
              T(t) || O(t) || (t.innerHTML = M)
            }
            function W(t, e) {
              for (; t; ) {
                if (e(t))
                  return t;
                if (C(t))
                  break;
                t = t.parentNode
              }
              return null
            }
            function K(t, e) {
              e = e || m.fail;
              var n = [];
              return W(t, (function(t) {
                  return C(t) || n.push(t),
                    e(t)
                }
              )),
                n
            }
            function V(t, e) {
              e = e || m.fail;
              for (var n = []; t && !e(t); )
                n.push(t),
                  t = t.nextSibling;
              return n
            }
            function q(t, e) {
              var n = e.nextSibling
                , o = e.parentNode;
              return n ? o.insertBefore(t, n) : o.appendChild(t),
                t
            }
            function _(t, n) {
              return e().each(n, (function(e, n) {
                  t.appendChild(n)
                }
              )),
                t
            }
            function G(t) {
              return 0 === t.offset
            }
            function Y(t) {
              return t.offset === O(t.node)
            }
            function Z(t) {
              return G(t) || Y(t)
            }
            function Q(t, e) {
              for (; t && t !== e; ) {
                if (0 !== J(t))
                  return !1;
                t = t.parentNode
              }
              return !0
            }
            function X(t, e) {
              if (!e)
                return !1;
              for (; t && t !== e; ) {
                if (J(t) !== O(t.parentNode) - 1)
                  return !1;
                t = t.parentNode
              }
              return !0
            }
            function J(t) {
              for (var e = 0; t = t.previousSibling; )
                e += 1;
              return e
            }
            function tt(t) {
              return !!(t && t.childNodes && t.childNodes.length)
            }
            function et(t, e) {
              var n, o;
              if (0 === t.offset) {
                if (C(t.node))
                  return null;
                n = t.node.parentNode,
                  o = J(t.node)
              } else
                tt(t.node) ? o = O(n = t.node.childNodes[t.offset - 1]) : (n = t.node,
                  o = e ? 0 : t.offset - 1);
              return {
                node: n,
                offset: o
              }
            }
            function nt(t, e) {
              var n, o;
              if (O(t.node) === t.offset) {
                if (C(t.node))
                  return null;
                var i = it(t.node);
                i ? (n = i,
                  o = 0) : (n = t.node.parentNode,
                  o = J(t.node) + 1)
              } else
                tt(t.node) ? (n = t.node.childNodes[t.offset],
                  o = 0) : (n = t.node,
                  o = e ? O(t.node) : t.offset + 1);
              return {
                node: n,
                offset: o
              }
            }
            function ot(t, e) {
              var n, o = 0;
              if (U(t.node))
                return null === t.node ? null : {
                  node: n = t.node.nextSibling,
                  offset: o = 0
                };
              if (O(t.node) === t.offset) {
                if (C(t.node))
                  return null;
                n = t.node.parentNode,
                  o = J(t.node) + 1,
                C(n) && (n = t.node.nextSibling,
                  o = 0)
              } else if (tt(t.node)) {
                if (o = 0,
                  U(n = t.node.childNodes[t.offset]))
                  return U(t.node.nextSibling) ? null : {
                    node: t.node.nextSibling,
                    offset: o
                  }
              } else if (n = t.node,
                o = e ? O(t.node) : t.offset + 1,
                U(n))
                return null;
              return {
                node: n,
                offset: o
              }
            }
            function it(t) {
              if (t.nextSibling && t.parent === t.nextSibling.parent)
                return S(t.nextSibling) ? t.nextSibling : it(t.nextSibling)
            }
            function rt(t, e) {
              return t.node === e.node && t.offset === e.offset
            }
            function at(t, e) {
              var n = e && e.isSkipPaddingBlankHTML
                , o = e && e.isNotSplitEdgePoint
                , i = e && e.isDiscardEmptySplits;
              if (i && (n = !0),
              Z(t) && (S(t.node) || o)) {
                if (G(t))
                  return t.node;
                if (Y(t))
                  return t.node.nextSibling
              }
              if (S(t.node))
                return t.node.splitText(t.offset);
              var r = t.node.childNodes[t.offset]
                , a = q(t.node.cloneNode(!1), t.node);
              return _(a, V(r)),
              n || (j(t.node),
                j(a)),
                i && (U(t.node) && ct(t.node),
                  U(a)) ? (ct(a),
                  t.node.nextSibling) : a
            }
            function st(t, e, n) {
              var o = K(e.node, m.eq(t));
              return o.length ? 1 === o.length ? at(e, n) : o.reduce((function(t, o) {
                  return t === e.node && (t = at(e, n)),
                    at({
                      node: o,
                      offset: t ? J(t) : O(o)
                    }, n)
                }
              )) : null
            }
            function lt(t) {
              return document.createElement(t)
            }
            function ct(t, e) {
              if (t && t.parentNode) {
                if (t.removeNode)
                  return t.removeNode(e);
                var n = t.parentNode;
                if (!e) {
                  for (var o = [], i = 0, r = t.childNodes.length; i < r; i++)
                    o.push(t.childNodes[i]);
                  for (var a = 0, s = o.length; a < s; a++)
                    n.insertBefore(o[a], t)
                }
                n.removeChild(t)
              }
            }
            var ut = x("TEXTAREA");
            function dt(t, e) {
              var n = ut(t[0]) ? t.val() : t.html();
              return e ? n.replace(/[\n\r]/g, "") : n
            }
            const ht = {
              NBSP_CHAR: w,
              ZERO_WIDTH_NBSP_CHAR: "\ufeff",
              blank: M,
              emptyPara: "<p>".concat(M, "</p>"),
              makePredByNodeName: x,
              isEditable: C,
              isControlSizing: function(t) {
                return t && e()(t).hasClass("note-control-sizing")
              },
              isText: S,
              isElement: function(t) {
                return t && 1 === t.nodeType
              },
              isVoid: T,
              isPara: E,
              isPurePara: function(t) {
                return E(t) && !$(t)
              },
              isHeading: function(t) {
                return t && /^H[1-7]/.test(t.nodeName.toUpperCase())
              },
              isInline: R,
              isBlock: m.not(R),
              isBodyInline: function(t) {
                return R(t) && !W(t, E)
              },
              isBody: B,
              isParaInline: function(t) {
                return R(t) && !!W(t, E)
              },
              isPre: I,
              isList: L,
              isTable: N,
              isData: P,
              isCell: F,
              isBlockquote: D,
              isBodyContainer: H,
              isAnchor: z,
              isDiv: x("DIV"),
              isLi: $,
              isBR: x("BR"),
              isSpan: x("SPAN"),
              isB: x("B"),
              isU: x("U"),
              isS: x("S"),
              isI: x("I"),
              isImg: x("IMG"),
              isTextarea: ut,
              deepestChildIsEmpty: function(t) {
                do {
                  if (null === t.firstElementChild || "" === t.firstElementChild.innerHTML)
                    break
                } while (t = t.firstElementChild);
                return U(t)
              },
              isEmpty: U,
              isEmptyAnchor: m.and(z, U),
              isClosestSibling: function(t, e) {
                return t.nextSibling === e || t.previousSibling === e
              },
              withClosestSiblings: function(t, e) {
                e = e || m.ok;
                var n = [];
                return t.previousSibling && e(t.previousSibling) && n.push(t.previousSibling),
                  n.push(t),
                t.nextSibling && e(t.nextSibling) && n.push(t.nextSibling),
                  n
              },
              nodeLength: O,
              isLeftEdgePoint: G,
              isRightEdgePoint: Y,
              isEdgePoint: Z,
              isLeftEdgeOf: Q,
              isRightEdgeOf: X,
              isLeftEdgePointOf: function(t, e) {
                return G(t) && Q(t.node, e)
              },
              isRightEdgePointOf: function(t, e) {
                return Y(t) && X(t.node, e)
              },
              prevPoint: et,
              nextPoint: nt,
              nextPointWithEmptyNode: ot,
              isSamePoint: rt,
              isVisiblePoint: function(t) {
                if (S(t.node) || !tt(t.node) || U(t.node))
                  return !0;
                var e = t.node.childNodes[t.offset - 1]
                  , n = t.node.childNodes[t.offset];
                return !((e && !T(e) || n && !T(n)) && !N(n))
              },
              prevPointUntil: function(t, e) {
                for (; t; ) {
                  if (e(t))
                    return t;
                  t = et(t)
                }
                return null
              },
              nextPointUntil: function(t, e) {
                for (; t; ) {
                  if (e(t))
                    return t;
                  t = nt(t)
                }
                return null
              },
              isCharPoint: function(t) {
                if (!S(t.node))
                  return !1;
                var e = t.node.nodeValue.charAt(t.offset - 1);
                return e && " " !== e && e !== w
              },
              isSpacePoint: function(t) {
                if (!S(t.node))
                  return !1;
                var e = t.node.nodeValue.charAt(t.offset - 1);
                return " " === e || e === w
              },
              walkPoint: function(t, e, n, o) {
                for (var i = t; i && (n(i),
                  !rt(i, e)); ) {
                  i = ot(i, o && t.node !== i.node && e.node !== i.node)
                }
              },
              ancestor: W,
              singleChildAncestor: function(t, e) {
                for (t = t.parentNode; t && 1 === O(t); ) {
                  if (e(t))
                    return t;
                  if (C(t))
                    break;
                  t = t.parentNode
                }
                return null
              },
              listAncestor: K,
              lastAncestor: function(t, e) {
                var n = K(t);
                return k.last(n.filter(e))
              },
              listNext: V,
              listPrev: function(t, e) {
                e = e || m.fail;
                for (var n = []; t && !e(t); )
                  n.push(t),
                    t = t.previousSibling;
                return n
              },
              listDescendant: function(t, e) {
                var n = [];
                return e = e || m.ok,
                  function o(i) {
                    t !== i && e(i) && n.push(i);
                    for (var r = 0, a = i.childNodes.length; r < a; r++)
                      o(i.childNodes[r])
                  }(t),
                  n
              },
              commonAncestor: function(t, e) {
                for (var n = K(t), o = e; o; o = o.parentNode)
                  if (n.indexOf(o) > -1)
                    return o;
                return null
              },
              wrap: function(t, n) {
                var o = t.parentNode
                  , i = e()("<" + n + ">")[0];
                return o.insertBefore(i, t),
                  i.appendChild(t),
                  i
              },
              insertAfter: q,
              appendChildNodes: _,
              position: J,
              hasChildren: tt,
              makeOffsetPath: function(t, e) {
                return K(e, m.eq(t)).map(J).reverse()
              },
              fromOffsetPath: function(t, e) {
                for (var n = t, o = 0, i = e.length; o < i; o++)
                  n = n.childNodes.length <= e[o] ? n.childNodes[n.childNodes.length - 1] : n.childNodes[e[o]];
                return n
              },
              splitTree: st,
              splitPoint: function(t, e) {
                var n, o, i = e ? E : H, r = K(t.node, i), a = k.last(r) || t.node;
                i(a) ? (n = r[r.length - 2],
                  o = a) : o = (n = a).parentNode;
                var s = n && st(n, t, {
                  isSkipPaddingBlankHTML: e,
                  isNotSplitEdgePoint: e
                });
                return s || o !== t.node || (s = t.node.childNodes[t.offset]),
                  {
                    rightNode: s,
                    container: o
                  }
              },
              create: lt,
              createText: function(t) {
                return document.createTextNode(t)
              },
              remove: ct,
              removeWhile: function(t, e) {
                for (; t && !C(t) && e(t); ) {
                  var n = t.parentNode;
                  ct(t),
                    t = n
                }
              },
              replace: function(t, e) {
                if (t.nodeName.toUpperCase() === e.toUpperCase())
                  return t;
                var n = lt(e);
                return t.style.cssText && (n.style.cssText = t.style.cssText),
                  _(n, k.from(t.childNodes)),
                  q(n, t),
                  ct(t),
                  n
              },
              html: function(t, e) {
                var n = dt(t);
                if (e) {
                  n = (n = n.replace(/<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g, (function(t, e, n) {
                      n = n.toUpperCase();
                      var o = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(n) && !!e
                        , i = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(n);
                      return t + (o || i ? "\n" : "")
                    }
                  ))).trim()
                }
                return n
              },
              value: dt,
              posFromPlaceholder: function(t) {
                var n = e()(t)
                  , o = n.offset()
                  , i = n.outerHeight(!0);
                return {
                  left: o.left,
                  top: o.top + i
                }
              },
              attachEvents: function(t, e) {
                Object.keys(e).forEach((function(n) {
                    t.on(n, e[n])
                  }
                ))
              },
              detachEvents: function(t, e) {
                Object.keys(e).forEach((function(n) {
                    t.off(n, e[n])
                  }
                ))
              },
              isCustomStyleTag: function(t) {
                return t && !S(t) && k.contains(t.classList, "note-styletag")
              }
            };
            function ft(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var pt = function() {
              function t(n, o) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.$note = n,
                  this.memos = {},
                  this.modules = {},
                  this.layoutInfo = {},
                  this.options = e().extend(!0, {}, o),
                  e().summernote.ui = e().summernote.ui_template(this.options),
                  this.ui = e().summernote.ui,
                  this.initialize()
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "initialize",
                  value: function() {
                    return this.layoutInfo = this.ui.createLayout(this.$note),
                      this._initialize(),
                      this.$note.hide(),
                      this
                  }
                }, {
                  key: "destroy",
                  value: function() {
                    this._destroy(),
                      this.$note.removeData("summernote"),
                      this.ui.removeLayout(this.$note, this.layoutInfo)
                  }
                }, {
                  key: "reset",
                  value: function() {
                    var t = this.isDisabled();
                    this.code(ht.emptyPara),
                      this._destroy(),
                      this._initialize(),
                    t && this.disable()
                  }
                }, {
                  key: "_initialize",
                  value: function() {
                    var t = this;
                    this.options.id = m.uniqueId(e().now()),
                      this.options.container = this.options.container || this.layoutInfo.editor;
                    var n = e().extend({}, this.options.buttons);
                    Object.keys(n).forEach((function(e) {
                        t.memo("button." + e, n[e])
                      }
                    ));
                    var o = e().extend({}, this.options.modules, e().summernote.plugins || {});
                    Object.keys(o).forEach((function(e) {
                        t.module(e, o[e], !0)
                      }
                    )),
                      Object.keys(this.modules).forEach((function(e) {
                          t.initializeModule(e)
                        }
                      ))
                  }
                }, {
                  key: "_destroy",
                  value: function() {
                    var t = this;
                    Object.keys(this.modules).reverse().forEach((function(e) {
                        t.removeModule(e)
                      }
                    )),
                      Object.keys(this.memos).forEach((function(e) {
                          t.removeMemo(e)
                        }
                      )),
                      this.triggerEvent("destroy", this)
                  }
                }, {
                  key: "code",
                  value: function(t) {
                    var e = this.invoke("codeview.isActivated");
                    if (void 0 === t)
                      return this.invoke("codeview.sync"),
                        e ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
                    e ? this.invoke("codeview.sync", t) : this.layoutInfo.editable.html(t),
                      this.$note.val(t),
                      this.triggerEvent("change", t, this.layoutInfo.editable)
                  }
                }, {
                  key: "isDisabled",
                  value: function() {
                    return "false" === this.layoutInfo.editable.attr("contenteditable")
                  }
                }, {
                  key: "enable",
                  value: function() {
                    this.layoutInfo.editable.attr("contenteditable", !0),
                      this.invoke("toolbar.activate", !0),
                      this.triggerEvent("disable", !1),
                      this.options.editing = !0
                  }
                }, {
                  key: "disable",
                  value: function() {
                    this.invoke("codeview.isActivated") && this.invoke("codeview.deactivate"),
                      this.layoutInfo.editable.attr("contenteditable", !1),
                      this.options.editing = !1,
                      this.invoke("toolbar.deactivate", !0),
                      this.triggerEvent("disable", !0)
                  }
                }, {
                  key: "triggerEvent",
                  value: function() {
                    var t = k.head(arguments)
                      , e = k.tail(k.from(arguments))
                      , n = this.options.callbacks[m.namespaceToCamel(t, "on")];
                    n && n.apply(this.$note[0], e),
                      this.$note.trigger("summernote." + t, e)
                  }
                }, {
                  key: "initializeModule",
                  value: function(t) {
                    var e = this.modules[t];
                    e.shouldInitialize = e.shouldInitialize || m.ok,
                    e.shouldInitialize() && (e.initialize && e.initialize(),
                    e.events && ht.attachEvents(this.$note, e.events))
                  }
                }, {
                  key: "module",
                  value: function(t, e, n) {
                    if (1 === arguments.length)
                      return this.modules[t];
                    this.modules[t] = new e(this),
                    n || this.initializeModule(t)
                  }
                }, {
                  key: "removeModule",
                  value: function(t) {
                    var e = this.modules[t];
                    e.shouldInitialize() && (e.events && ht.detachEvents(this.$note, e.events),
                    e.destroy && e.destroy()),
                      delete this.modules[t]
                  }
                }, {
                  key: "memo",
                  value: function(t, e) {
                    if (1 === arguments.length)
                      return this.memos[t];
                    this.memos[t] = e
                  }
                }, {
                  key: "removeMemo",
                  value: function(t) {
                    this.memos[t] && this.memos[t].destroy && this.memos[t].destroy(),
                      delete this.memos[t]
                  }
                }, {
                  key: "createInvokeHandlerAndUpdateState",
                  value: function(t, e) {
                    var n = this;
                    return function(o) {
                      n.createInvokeHandler(t, e)(o),
                        n.invoke("buttons.updateCurrentStyle")
                    }
                  }
                }, {
                  key: "createInvokeHandler",
                  value: function(t, n) {
                    var o = this;
                    return function(i) {
                      i.preventDefault();
                      var r = e()(i.target);
                      o.invoke(t, n || r.closest("[data-value]").data("value"), r)
                    }
                  }
                }, {
                  key: "invoke",
                  value: function() {
                    var t = k.head(arguments)
                      , e = k.tail(k.from(arguments))
                      , n = t.split(".")
                      , o = n.length > 1
                      , i = o && k.head(n)
                      , r = o ? k.last(n) : k.head(n)
                      , a = this.modules[i || "editor"];
                    return !i && this[r] ? this[r].apply(this, e) : a && a[r] && a.shouldInitialize() ? a[r].apply(a, e) : void 0
                  }
                }],
              o && ft(n.prototype, o),
              i && ft(n, i),
                t
            }();
            function mt(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            function vt(t, e) {
              var n, o, i = t.parentElement(), r = document.body.createTextRange(), a = k.from(i.childNodes);
              for (n = 0; n < a.length; n++)
                if (!ht.isText(a[n])) {
                  if (r.moveToElementText(a[n]),
                  r.compareEndPoints("StartToStart", t) >= 0)
                    break;
                  o = a[n]
                }
              if (0 !== n && ht.isText(a[n - 1])) {
                var s = document.body.createTextRange()
                  , l = null;
                s.moveToElementText(o || i),
                  s.collapse(!o),
                  l = o ? o.nextSibling : i.firstChild;
                var c = t.duplicate();
                c.setEndPoint("StartToStart", s);
                for (var u = c.text.replace(/[\r\n]/g, "").length; u > l.nodeValue.length && l.nextSibling; )
                  u -= l.nodeValue.length,
                    l = l.nextSibling;
                l.nodeValue;
                e && l.nextSibling && ht.isText(l.nextSibling) && u === l.nodeValue.length && (u -= l.nodeValue.length,
                  l = l.nextSibling),
                  i = l,
                  n = u
              }
              return {
                cont: i,
                offset: n
              }
            }
            function gt(t) {
              var e = document.body.createTextRange()
                , n = function t(e, n) {
                var o, i;
                if (ht.isText(e)) {
                  var r = ht.listPrev(e, m.not(ht.isText))
                    , a = k.last(r).previousSibling;
                  o = a || e.parentNode,
                    n += k.sum(k.tail(r), ht.nodeLength),
                    i = !a
                } else {
                  if (o = e.childNodes[n] || e,
                    ht.isText(o))
                    return t(o, 0);
                  n = 0,
                    i = !1
                }
                return {
                  node: o,
                  collapseToStart: i,
                  offset: n
                }
              }(t.node, t.offset);
              return e.moveToElementText(n.node),
                e.collapse(n.collapseToStart),
                e.moveStart("character", n.offset),
                e
            }
            e().fn.extend({
              summernote: function() {
                var t = e().type(k.head(arguments))
                  , n = "string" === t
                  , o = "object" === t
                  , i = e().extend({}, e().summernote.options, o ? k.head(arguments) : {});
                i.langInfo = e().extend(!0, {}, e().summernote.lang["en-US"], e().summernote.lang[i.lang]),
                  i.icons = e().extend(!0, {}, e().summernote.options.icons, i.icons),
                  i.tooltip = "auto" === i.tooltip ? !f.isSupportTouch : i.tooltip,
                  this.each((function(t, n) {
                      var o = e()(n);
                      if (!o.data("summernote")) {
                        var r = new pt(o,i);
                        o.data("summernote", r),
                          o.data("summernote").triggerEvent("init", r.layoutInfo)
                      }
                    }
                  ));
                var r = this.first();
                if (r.length) {
                  var a = r.data("summernote");
                  if (n)
                    return a.invoke.apply(a, k.from(arguments));
                  i.focus && a.invoke("editor.focus")
                }
                return this
              }
            });
            var bt = function() {
              function t(e, n, o, i) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.sc = e,
                  this.so = n,
                  this.ec = o,
                  this.eo = i,
                  this.isOnEditable = this.makeIsOn(ht.isEditable),
                  this.isOnList = this.makeIsOn(ht.isList),
                  this.isOnAnchor = this.makeIsOn(ht.isAnchor),
                  this.isOnCell = this.makeIsOn(ht.isCell),
                  this.isOnData = this.makeIsOn(ht.isData)
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "nativeRange",
                  value: function() {
                    if (f.isW3CRangeSupport) {
                      var t = document.createRange();
                      return t.setStart(this.sc, this.so),
                        t.setEnd(this.ec, this.eo),
                        t
                    }
                    var e = gt({
                      node: this.sc,
                      offset: this.so
                    });
                    return e.setEndPoint("EndToEnd", gt({
                      node: this.ec,
                      offset: this.eo
                    })),
                      e
                  }
                }, {
                  key: "getPoints",
                  value: function() {
                    return {
                      sc: this.sc,
                      so: this.so,
                      ec: this.ec,
                      eo: this.eo
                    }
                  }
                }, {
                  key: "getStartPoint",
                  value: function() {
                    return {
                      node: this.sc,
                      offset: this.so
                    }
                  }
                }, {
                  key: "getEndPoint",
                  value: function() {
                    return {
                      node: this.ec,
                      offset: this.eo
                    }
                  }
                }, {
                  key: "select",
                  value: function() {
                    var t = this.nativeRange();
                    if (f.isW3CRangeSupport) {
                      var e = document.getSelection();
                      e.rangeCount > 0 && e.removeAllRanges(),
                        e.addRange(t)
                    } else
                      t.select();
                    return this
                  }
                }, {
                  key: "scrollIntoView",
                  value: function(t) {
                    var n = e()(t).height();
                    return t.scrollTop + n < this.sc.offsetTop && (t.scrollTop += Math.abs(t.scrollTop + n - this.sc.offsetTop)),
                      this
                  }
                }, {
                  key: "normalize",
                  value: function() {
                    var e = function(t, e) {
                      if (!t)
                        return t;
                      if (ht.isVisiblePoint(t) && (!ht.isEdgePoint(t) || ht.isRightEdgePoint(t) && !e || ht.isLeftEdgePoint(t) && e || ht.isRightEdgePoint(t) && e && ht.isVoid(t.node.nextSibling) || ht.isLeftEdgePoint(t) && !e && ht.isVoid(t.node.previousSibling) || ht.isBlock(t.node) && ht.isEmpty(t.node)))
                        return t;
                      var n = ht.ancestor(t.node, ht.isBlock)
                        , o = !1;
                      if (!o) {
                        var i = ht.prevPoint(t) || {
                          node: null
                        };
                        o = (ht.isLeftEdgePointOf(t, n) || ht.isVoid(i.node)) && !e
                      }
                      var r = !1;
                      if (!r) {
                        var a = ht.nextPoint(t) || {
                          node: null
                        };
                        r = (ht.isRightEdgePointOf(t, n) || ht.isVoid(a.node)) && e
                      }
                      if (o || r) {
                        if (ht.isVisiblePoint(t))
                          return t;
                        e = !e
                      }
                      return (e ? ht.nextPointUntil(ht.nextPoint(t), ht.isVisiblePoint) : ht.prevPointUntil(ht.prevPoint(t), ht.isVisiblePoint)) || t
                    }
                      , n = e(this.getEndPoint(), !1)
                      , o = this.isCollapsed() ? n : e(this.getStartPoint(), !0);
                    return new t(o.node,o.offset,n.node,n.offset)
                  }
                }, {
                  key: "nodes",
                  value: function(t, e) {
                    t = t || m.ok;
                    var n = e && e.includeAncestor
                      , o = e && e.fullyContains
                      , i = this.getStartPoint()
                      , r = this.getEndPoint()
                      , a = []
                      , s = [];
                    return ht.walkPoint(i, r, (function(e) {
                        var i;
                        ht.isEditable(e.node) || (o ? (ht.isLeftEdgePoint(e) && s.push(e.node),
                        ht.isRightEdgePoint(e) && k.contains(s, e.node) && (i = e.node)) : i = n ? ht.ancestor(e.node, t) : e.node,
                        i && t(i) && a.push(i))
                      }
                    ), !0),
                      k.unique(a)
                  }
                }, {
                  key: "commonAncestor",
                  value: function() {
                    return ht.commonAncestor(this.sc, this.ec)
                  }
                }, {
                  key: "expand",
                  value: function(e) {
                    var n = ht.ancestor(this.sc, e)
                      , o = ht.ancestor(this.ec, e);
                    if (!n && !o)
                      return new t(this.sc,this.so,this.ec,this.eo);
                    var i = this.getPoints();
                    return n && (i.sc = n,
                      i.so = 0),
                    o && (i.ec = o,
                      i.eo = ht.nodeLength(o)),
                      new t(i.sc,i.so,i.ec,i.eo)
                  }
                }, {
                  key: "collapse",
                  value: function(e) {
                    return e ? new t(this.sc,this.so,this.sc,this.so) : new t(this.ec,this.eo,this.ec,this.eo)
                  }
                }, {
                  key: "splitText",
                  value: function() {
                    var e = this.sc === this.ec
                      , n = this.getPoints();
                    return ht.isText(this.ec) && !ht.isEdgePoint(this.getEndPoint()) && this.ec.splitText(this.eo),
                    ht.isText(this.sc) && !ht.isEdgePoint(this.getStartPoint()) && (n.sc = this.sc.splitText(this.so),
                      n.so = 0,
                    e && (n.ec = n.sc,
                      n.eo = this.eo - this.so)),
                      new t(n.sc,n.so,n.ec,n.eo)
                  }
                }, {
                  key: "deleteContents",
                  value: function() {
                    if (this.isCollapsed())
                      return this;
                    var n = this.splitText()
                      , o = n.nodes(null, {
                      fullyContains: !0
                    })
                      , i = ht.prevPointUntil(n.getStartPoint(), (function(t) {
                        return !k.contains(o, t.node)
                      }
                    ))
                      , r = [];
                    return e().each(o, (function(t, e) {
                        var n = e.parentNode;
                        i.node !== n && 1 === ht.nodeLength(n) && r.push(n),
                          ht.remove(e, !1)
                      }
                    )),
                      e().each(r, (function(t, e) {
                          ht.remove(e, !1)
                        }
                      )),
                      new t(i.node,i.offset,i.node,i.offset).normalize()
                  }
                }, {
                  key: "makeIsOn",
                  value: function(t) {
                    return function() {
                      var e = ht.ancestor(this.sc, t);
                      return !!e && e === ht.ancestor(this.ec, t)
                    }
                  }
                }, {
                  key: "isLeftEdgeOf",
                  value: function(t) {
                    if (!ht.isLeftEdgePoint(this.getStartPoint()))
                      return !1;
                    var e = ht.ancestor(this.sc, t);
                    return e && ht.isLeftEdgeOf(this.sc, e)
                  }
                }, {
                  key: "isCollapsed",
                  value: function() {
                    return this.sc === this.ec && this.so === this.eo
                  }
                }, {
                  key: "wrapBodyInlineWithPara",
                  value: function() {
                    if (ht.isBodyContainer(this.sc) && ht.isEmpty(this.sc))
                      return this.sc.innerHTML = ht.emptyPara,
                        new t(this.sc.firstChild,0,this.sc.firstChild,0);
                    var e, n = this.normalize();
                    if (ht.isParaInline(this.sc) || ht.isPara(this.sc))
                      return n;
                    if (ht.isInline(n.sc)) {
                      var o = ht.listAncestor(n.sc, m.not(ht.isInline));
                      e = k.last(o),
                      ht.isInline(e) || (e = o[o.length - 2] || n.sc.childNodes[n.so])
                    } else
                      e = n.sc.childNodes[n.so > 0 ? n.so - 1 : 0];
                    if (e) {
                      var i = ht.listPrev(e, ht.isParaInline).reverse();
                      if ((i = i.concat(ht.listNext(e.nextSibling, ht.isParaInline))).length) {
                        var r = ht.wrap(k.head(i), "p");
                        ht.appendChildNodes(r, k.tail(i))
                      }
                    }
                    return this.normalize()
                  }
                }, {
                  key: "insertNode",
                  value: function(t) {
                    var e = this;
                    (ht.isText(t) || ht.isInline(t)) && (e = this.wrapBodyInlineWithPara().deleteContents());
                    var n = ht.splitPoint(e.getStartPoint(), ht.isInline(t));
                    return n.rightNode ? (n.rightNode.parentNode.insertBefore(t, n.rightNode),
                    ht.isEmpty(n.rightNode) && ht.isPara(t) && n.rightNode.parentNode.removeChild(n.rightNode)) : n.container.appendChild(t),
                      t
                  }
                }, {
                  key: "pasteHTML",
                  value: function(t) {
                    t = e().trim(t);
                    var n = e()("<div></div>").html(t)[0]
                      , o = k.from(n.childNodes)
                      , i = this
                      , r = !1;
                    return i.so >= 0 && (o = o.reverse(),
                      r = !0),
                      o = o.map((function(t) {
                          return i.insertNode(t)
                        }
                      )),
                    r && (o = o.reverse()),
                      o
                  }
                }, {
                  key: "toString",
                  value: function() {
                    var t = this.nativeRange();
                    return f.isW3CRangeSupport ? t.toString() : t.text
                  }
                }, {
                  key: "getWordRange",
                  value: function(e) {
                    var n = this.getEndPoint();
                    if (!ht.isCharPoint(n))
                      return this;
                    var o = ht.prevPointUntil(n, (function(t) {
                        return !ht.isCharPoint(t)
                      }
                    ));
                    return e && (n = ht.nextPointUntil(n, (function(t) {
                        return !ht.isCharPoint(t)
                      }
                    ))),
                      new t(o.node,o.offset,n.node,n.offset)
                  }
                }, {
                  key: "getWordsRange",
                  value: function(e) {
                    var n = this.getEndPoint()
                      , o = function(t) {
                      return !ht.isCharPoint(t) && !ht.isSpacePoint(t)
                    };
                    if (o(n))
                      return this;
                    var i = ht.prevPointUntil(n, o);
                    return e && (n = ht.nextPointUntil(n, o)),
                      new t(i.node,i.offset,n.node,n.offset)
                  }
                }, {
                  key: "getWordsMatchRange",
                  value: function(e) {
                    var n = this.getEndPoint()
                      , o = ht.prevPointUntil(n, (function(o) {
                        if (!ht.isCharPoint(o) && !ht.isSpacePoint(o))
                          return !0;
                        var i = new t(o.node,o.offset,n.node,n.offset)
                          , r = e.exec(i.toString());
                        return r && 0 === r.index
                      }
                    ))
                      , i = new t(o.node,o.offset,n.node,n.offset)
                      , r = i.toString()
                      , a = e.exec(r);
                    return a && a[0].length === r.length ? i : null
                  }
                }, {
                  key: "bookmark",
                  value: function(t) {
                    return {
                      s: {
                        path: ht.makeOffsetPath(t, this.sc),
                        offset: this.so
                      },
                      e: {
                        path: ht.makeOffsetPath(t, this.ec),
                        offset: this.eo
                      }
                    }
                  }
                }, {
                  key: "paraBookmark",
                  value: function(t) {
                    return {
                      s: {
                        path: k.tail(ht.makeOffsetPath(k.head(t), this.sc)),
                        offset: this.so
                      },
                      e: {
                        path: k.tail(ht.makeOffsetPath(k.last(t), this.ec)),
                        offset: this.eo
                      }
                    }
                  }
                }, {
                  key: "getClientRects",
                  value: function() {
                    return this.nativeRange().getClientRects()
                  }
                }],
              o && mt(n.prototype, o),
              i && mt(n, i),
                t
            }();
            const yt = {
              create: function(t, e, n, o) {
                if (4 === arguments.length)
                  return new bt(t,e,n,o);
                if (2 === arguments.length)
                  return new bt(t,e,n = t,o = e);
                var i = this.createFromSelection();
                if (!i && 1 === arguments.length) {
                  var r = arguments[0];
                  return ht.isEditable(r) && (r = r.lastChild),
                    this.createFromBodyElement(r, ht.emptyPara === arguments[0].innerHTML)
                }
                return i
              },
              createFromBodyElement: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = this.createFromNode(t);
                return n.collapse(e)
              },
              createFromSelection: function() {
                var t, e, n, o;
                if (f.isW3CRangeSupport) {
                  var i = document.getSelection();
                  if (!i || 0 === i.rangeCount)
                    return null;
                  if (ht.isBody(i.anchorNode))
                    return null;
                  var r = i.getRangeAt(0);
                  t = r.startContainer,
                    e = r.startOffset,
                    n = r.endContainer,
                    o = r.endOffset
                } else {
                  var a = document.selection.createRange()
                    , s = a.duplicate();
                  s.collapse(!1);
                  var l = a;
                  l.collapse(!0);
                  var c = vt(l, !0)
                    , u = vt(s, !1);
                  ht.isText(c.node) && ht.isLeftEdgePoint(c) && ht.isTextNode(u.node) && ht.isRightEdgePoint(u) && u.node.nextSibling === c.node && (c = u),
                    t = c.cont,
                    e = c.offset,
                    n = u.cont,
                    o = u.offset
                }
                return new bt(t,e,n,o)
              },
              createFromNode: function(t) {
                var e = t
                  , n = 0
                  , o = t
                  , i = ht.nodeLength(o);
                return ht.isVoid(e) && (n = ht.listPrev(e).length - 1,
                  e = e.parentNode),
                  ht.isBR(o) ? (i = ht.listPrev(o).length - 1,
                    o = o.parentNode) : ht.isVoid(o) && (i = ht.listPrev(o).length,
                    o = o.parentNode),
                  this.create(e, n, o, i)
              },
              createFromNodeBefore: function(t) {
                return this.createFromNode(t).collapse(!0)
              },
              createFromNodeAfter: function(t) {
                return this.createFromNode(t).collapse()
              },
              createFromBookmark: function(t, e) {
                var n = ht.fromOffsetPath(t, e.s.path)
                  , o = e.s.offset
                  , i = ht.fromOffsetPath(t, e.e.path)
                  , r = e.e.offset;
                return new bt(n,o,i,r)
              },
              createFromParaBookmark: function(t, e) {
                var n = t.s.offset
                  , o = t.e.offset
                  , i = ht.fromOffsetPath(k.head(e), t.s.path)
                  , r = ht.fromOffsetPath(k.last(e), t.e.path);
                return new bt(i,n,r,o)
              }
            };
            var kt = {
              BACKSPACE: 8,
              TAB: 9,
              ENTER: 13,
              ESCAPE: 27,
              SPACE: 32,
              DELETE: 46,
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              DOWN: 40,
              NUM0: 48,
              NUM1: 49,
              NUM2: 50,
              NUM3: 51,
              NUM4: 52,
              NUM5: 53,
              NUM6: 54,
              NUM7: 55,
              NUM8: 56,
              B: 66,
              E: 69,
              I: 73,
              J: 74,
              K: 75,
              L: 76,
              R: 82,
              S: 83,
              U: 85,
              V: 86,
              Y: 89,
              Z: 90,
              SLASH: 191,
              LEFTBRACKET: 219,
              BACKSLASH: 220,
              RIGHTBRACKET: 221,
              HOME: 36,
              END: 35,
              PAGEUP: 33,
              PAGEDOWN: 34
            };
            const wt = {
              isEdit: function(t) {
                return k.contains([kt.BACKSPACE, kt.TAB, kt.ENTER, kt.SPACE, kt.DELETE], t)
              },
              isMove: function(t) {
                return k.contains([kt.LEFT, kt.UP, kt.RIGHT, kt.DOWN], t)
              },
              isNavigation: function(t) {
                return k.contains([kt.HOME, kt.END, kt.PAGEUP, kt.PAGEDOWN], t)
              },
              nameFromCode: m.invertObject(kt),
              code: kt
            };
            function Ct(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var xt = function() {
              function t(e) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.stack = [],
                  this.stackOffset = -1,
                  this.context = e,
                  this.$editable = e.layoutInfo.editable,
                  this.editable = this.$editable[0]
              }
              var e, n, o;
              return e = t,
              (n = [{
                key: "makeSnapshot",
                value: function() {
                  var t = yt.create(this.editable);
                  return {
                    contents: this.$editable.html(),
                    bookmark: t && t.isOnEditable() ? t.bookmark(this.editable) : {
                      s: {
                        path: [],
                        offset: 0
                      },
                      e: {
                        path: [],
                        offset: 0
                      }
                    }
                  }
                }
              }, {
                key: "applySnapshot",
                value: function(t) {
                  null !== t.contents && this.$editable.html(t.contents),
                  null !== t.bookmark && yt.createFromBookmark(this.editable, t.bookmark).select()
                }
              }, {
                key: "rewind",
                value: function() {
                  this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(),
                    this.stackOffset = 0,
                    this.applySnapshot(this.stack[this.stackOffset])
                }
              }, {
                key: "commit",
                value: function() {
                  this.stack = [],
                    this.stackOffset = -1,
                    this.recordUndo()
                }
              }, {
                key: "reset",
                value: function() {
                  this.stack = [],
                    this.stackOffset = -1,
                    this.$editable.html(""),
                    this.recordUndo()
                }
              }, {
                key: "undo",
                value: function() {
                  this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(),
                  this.stackOffset > 0 && (this.stackOffset--,
                    this.applySnapshot(this.stack[this.stackOffset]))
                }
              }, {
                key: "redo",
                value: function() {
                  this.stack.length - 1 > this.stackOffset && (this.stackOffset++,
                    this.applySnapshot(this.stack[this.stackOffset]))
                }
              }, {
                key: "recordUndo",
                value: function() {
                  this.stackOffset++,
                  this.stack.length > this.stackOffset && (this.stack = this.stack.slice(0, this.stackOffset)),
                    this.stack.push(this.makeSnapshot()),
                  this.stack.length > this.context.options.historyLimit && (this.stack.shift(),
                    this.stackOffset -= 1)
                }
              }]) && Ct(e.prototype, n),
              o && Ct(e, o),
                t
            }();
            function St(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var Tt = function() {
              function t() {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t)
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "jQueryCSS",
                  value: function(t, n) {
                    var o = {};
                    return e().each(n, (function(e, n) {
                        o[n] = t.css(n)
                      }
                    )),
                      o
                  }
                }, {
                  key: "fromNode",
                  value: function(t) {
                    var e = this.jQueryCSS(t, ["font-family", "font-size", "text-align", "list-style-type", "line-height"]) || {}
                      , n = t[0].style.fontSize || e["font-size"];
                    return e["font-size"] = parseInt(n, 10),
                      e["font-size-unit"] = n.match(/[a-z%]+$/),
                      e
                  }
                }, {
                  key: "stylePara",
                  value: function(t, n) {
                    e().each(t.nodes(ht.isPara, {
                      includeAncestor: !0
                    }), (function(t, o) {
                        e()(o).css(n)
                      }
                    ))
                  }
                }, {
                  key: "styleNodes",
                  value: function(t, n) {
                    t = t.splitText();
                    var o = n && n.nodeName || "SPAN"
                      , i = !(!n || !n.expandClosestSibling)
                      , r = !(!n || !n.onlyPartialContains);
                    if (t.isCollapsed())
                      return [t.insertNode(ht.create(o))];
                    var a = ht.makePredByNodeName(o)
                      , s = t.nodes(ht.isText, {
                      fullyContains: !0
                    }).map((function(t) {
                        return ht.singleChildAncestor(t, a) || ht.wrap(t, o)
                      }
                    ));
                    if (i) {
                      if (r) {
                        var l = t.nodes();
                        a = m.and(a, (function(t) {
                            return k.contains(l, t)
                          }
                        ))
                      }
                      return s.map((function(t) {
                          var n = ht.withClosestSiblings(t, a)
                            , o = k.head(n)
                            , i = k.tail(n);
                          return e().each(i, (function(t, e) {
                              ht.appendChildNodes(o, e.childNodes),
                                ht.remove(e)
                            }
                          )),
                            k.head(n)
                        }
                      ))
                    }
                    return s
                  }
                }, {
                  key: "current",
                  value: function(t) {
                    var n = e()(ht.isElement(t.sc) ? t.sc : t.sc.parentNode)
                      , o = this.fromNode(n);
                    try {
                      o = e().extend(o, {
                        "font-bold": document.queryCommandState("bold") ? "bold" : "normal",
                        "font-italic": document.queryCommandState("italic") ? "italic" : "normal",
                        "font-underline": document.queryCommandState("underline") ? "underline" : "normal",
                        "font-subscript": document.queryCommandState("subscript") ? "subscript" : "normal",
                        "font-superscript": document.queryCommandState("superscript") ? "superscript" : "normal",
                        "font-strikethrough": document.queryCommandState("strikethrough") ? "strikethrough" : "normal",
                        "font-family": document.queryCommandValue("fontname") || o["font-family"]
                      })
                    } catch (t) {}
                    if (t.isOnList()) {
                      var i = ["circle", "disc", "disc-leading-zero", "square"].indexOf(o["list-style-type"]) > -1;
                      o["list-style"] = i ? "unordered" : "ordered"
                    } else
                      o["list-style"] = "none";
                    var r = ht.ancestor(t.sc, ht.isPara);
                    if (r && r.style["line-height"])
                      o["line-height"] = r.style.lineHeight;
                    else {
                      var a = parseInt(o["line-height"], 10) / parseInt(o["font-size"], 10);
                      o["line-height"] = a.toFixed(1)
                    }
                    return o.anchor = t.isOnAnchor() && ht.ancestor(t.sc, ht.isAnchor),
                      o.ancestors = ht.listAncestor(t.sc, ht.isEditable),
                      o.range = t,
                      o
                  }
                }],
              o && St(n.prototype, o),
              i && St(n, i),
                t
            }();
            function Et(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var It = function() {
              function t() {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t)
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "insertOrderedList",
                  value: function(t) {
                    this.toggleList("OL", t)
                  }
                }, {
                  key: "insertUnorderedList",
                  value: function(t) {
                    this.toggleList("UL", t)
                  }
                }, {
                  key: "indent",
                  value: function(t) {
                    var n = this
                      , o = yt.create(t).wrapBodyInlineWithPara()
                      , i = o.nodes(ht.isPara, {
                      includeAncestor: !0
                    })
                      , r = k.clusterBy(i, m.peq2("parentNode"));
                    e().each(r, (function(t, o) {
                        var i = k.head(o);
                        if (ht.isLi(i)) {
                          var r = n.findList(i.previousSibling);
                          r ? o.map((function(t) {
                              return r.appendChild(t)
                            }
                          )) : (n.wrapList(o, i.parentNode.nodeName),
                            o.map((function(t) {
                                return t.parentNode
                              }
                            )).map((function(t) {
                                return n.appendToPrevious(t)
                              }
                            )))
                        } else
                          e().each(o, (function(t, n) {
                              e()(n).css("marginLeft", (function(t, e) {
                                  return (parseInt(e, 10) || 0) + 25
                                }
                              ))
                            }
                          ))
                      }
                    )),
                      o.select()
                  }
                }, {
                  key: "outdent",
                  value: function(t) {
                    var n = this
                      , o = yt.create(t).wrapBodyInlineWithPara()
                      , i = o.nodes(ht.isPara, {
                      includeAncestor: !0
                    })
                      , r = k.clusterBy(i, m.peq2("parentNode"));
                    e().each(r, (function(t, o) {
                        var i = k.head(o);
                        ht.isLi(i) ? n.releaseList([o]) : e().each(o, (function(t, n) {
                            e()(n).css("marginLeft", (function(t, e) {
                                return (e = parseInt(e, 10) || 0) > 25 ? e - 25 : ""
                              }
                            ))
                          }
                        ))
                      }
                    )),
                      o.select()
                  }
                }, {
                  key: "toggleList",
                  value: function(t, n) {
                    var o = this
                      , i = yt.create(n).wrapBodyInlineWithPara()
                      , r = i.nodes(ht.isPara, {
                      includeAncestor: !0
                    })
                      , a = i.paraBookmark(r)
                      , s = k.clusterBy(r, m.peq2("parentNode"));
                    if (k.find(r, ht.isPurePara)) {
                      var l = [];
                      e().each(s, (function(e, n) {
                          l = l.concat(o.wrapList(n, t))
                        }
                      )),
                        r = l
                    } else {
                      var c = i.nodes(ht.isList, {
                        includeAncestor: !0
                      }).filter((function(n) {
                          return !e().nodeName(n, t)
                        }
                      ));
                      c.length ? e().each(c, (function(e, n) {
                          ht.replace(n, t)
                        }
                      )) : r = this.releaseList(s, !0)
                    }
                    yt.createFromParaBookmark(a, r).select()
                  }
                }, {
                  key: "wrapList",
                  value: function(t, e) {
                    var n = k.head(t)
                      , o = k.last(t)
                      , i = ht.isList(n.previousSibling) && n.previousSibling
                      , r = ht.isList(o.nextSibling) && o.nextSibling
                      , a = i || ht.insertAfter(ht.create(e || "UL"), o);
                    return t = t.map((function(t) {
                        return ht.isPurePara(t) ? ht.replace(t, "LI") : t
                      }
                    )),
                      ht.appendChildNodes(a, t),
                    r && (ht.appendChildNodes(a, k.from(r.childNodes)),
                      ht.remove(r)),
                      t
                  }
                }, {
                  key: "releaseList",
                  value: function(t, n) {
                    var o = this
                      , i = [];
                    return e().each(t, (function(t, r) {
                        var a = k.head(r)
                          , s = k.last(r)
                          , l = n ? ht.lastAncestor(a, ht.isList) : a.parentNode
                          , c = l.parentNode;
                        if ("LI" === l.parentNode.nodeName)
                          r.map((function(t) {
                              var e = o.findNextSiblings(t);
                              c.nextSibling ? c.parentNode.insertBefore(t, c.nextSibling) : c.parentNode.appendChild(t),
                              e.length && (o.wrapList(e, l.nodeName),
                                t.appendChild(e[0].parentNode))
                            }
                          )),
                          0 === l.children.length && c.removeChild(l),
                          0 === c.childNodes.length && c.parentNode.removeChild(c);
                        else {
                          var u = l.childNodes.length > 1 ? ht.splitTree(l, {
                            node: s.parentNode,
                            offset: ht.position(s) + 1
                          }, {
                            isSkipPaddingBlankHTML: !0
                          }) : null
                            , d = ht.splitTree(l, {
                            node: a.parentNode,
                            offset: ht.position(a)
                          }, {
                            isSkipPaddingBlankHTML: !0
                          });
                          r = n ? ht.listDescendant(d, ht.isLi) : k.from(d.childNodes).filter(ht.isLi),
                          !n && ht.isList(l.parentNode) || (r = r.map((function(t) {
                              return ht.replace(t, "P")
                            }
                          ))),
                            e().each(k.from(r).reverse(), (function(t, e) {
                                ht.insertAfter(e, l)
                              }
                            ));
                          var h = k.compact([l, d, u]);
                          e().each(h, (function(t, n) {
                              var o = [n].concat(ht.listDescendant(n, ht.isList));
                              e().each(o.reverse(), (function(t, e) {
                                  ht.nodeLength(e) || ht.remove(e, !0)
                                }
                              ))
                            }
                          ))
                        }
                        i = i.concat(r)
                      }
                    )),
                      i
                  }
                }, {
                  key: "appendToPrevious",
                  value: function(t) {
                    return t.previousSibling ? ht.appendChildNodes(t.previousSibling, [t]) : this.wrapList([t], "LI")
                  }
                }, {
                  key: "findList",
                  value: function(t) {
                    return t ? k.find(t.children, (function(t) {
                        return ["OL", "UL"].indexOf(t.nodeName) > -1
                      }
                    )) : null
                  }
                }, {
                  key: "findNextSiblings",
                  value: function(t) {
                    for (var e = []; t.nextSibling; )
                      e.push(t.nextSibling),
                        t = t.nextSibling;
                    return e
                  }
                }],
              o && Et(n.prototype, o),
              i && Et(n, i),
                t
            }();
            function $t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var Nt = function() {
              function t(e) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.bullet = new It,
                  this.options = e.options
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "insertTab",
                  value: function(t, e) {
                    var n = ht.createText(new Array(e + 1).join(ht.NBSP_CHAR));
                    (t = t.deleteContents()).insertNode(n, !0),
                      (t = yt.create(n, e)).select()
                  }
                }, {
                  key: "insertParagraph",
                  value: function(t, n) {
                    n = (n = (n = n || yt.create(t)).deleteContents()).wrapBodyInlineWithPara();
                    var o, i = ht.ancestor(n.sc, ht.isPara);
                    if (i) {
                      if (ht.isLi(i) && (ht.isEmpty(i) || ht.deepestChildIsEmpty(i)))
                        return void this.bullet.toggleList(i.parentNode.nodeName);
                      var r = null;
                      if (1 === this.options.blockquoteBreakingLevel ? r = ht.ancestor(i, ht.isBlockquote) : 2 === this.options.blockquoteBreakingLevel && (r = ht.lastAncestor(i, ht.isBlockquote)),
                        r) {
                        o = e()(ht.emptyPara)[0],
                        ht.isRightEdgePoint(n.getStartPoint()) && ht.isBR(n.sc.nextSibling) && e()(n.sc.nextSibling).remove();
                        var a = ht.splitTree(r, n.getStartPoint(), {
                          isDiscardEmptySplits: !0
                        });
                        a ? a.parentNode.insertBefore(o, a) : ht.insertAfter(o, r)
                      } else {
                        o = ht.splitTree(i, n.getStartPoint());
                        var s = ht.listDescendant(i, ht.isEmptyAnchor);
                        s = s.concat(ht.listDescendant(o, ht.isEmptyAnchor)),
                          e().each(s, (function(t, e) {
                              ht.remove(e)
                            }
                          )),
                        (ht.isHeading(o) || ht.isPre(o) || ht.isCustomStyleTag(o)) && ht.isEmpty(o) && (o = ht.replace(o, "p"))
                      }
                    } else {
                      var l = n.sc.childNodes[n.so];
                      o = e()(ht.emptyPara)[0],
                        l ? n.sc.insertBefore(o, l) : n.sc.appendChild(o)
                    }
                    yt.create(o, 0).normalize().select().scrollIntoView(t)
                  }
                }],
              o && $t(n.prototype, o),
              i && $t(n, i),
                t
            }();
            function Pt(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var Rt = function t(e, n, o, i) {
              var r = {
                colPos: 0,
                rowPos: 0
              }
                , a = []
                , s = [];
              function l(t, e, n, o, i, r, s) {
                var l = {
                  baseRow: n,
                  baseCell: o,
                  isRowSpan: i,
                  isColSpan: r,
                  isVirtual: s
                };
                a[t] || (a[t] = []),
                  a[t][e] = l
              }
              function c(t, e, n, o) {
                return {
                  baseCell: t.baseCell,
                  action: e,
                  virtualTable: {
                    rowIndex: n,
                    cellIndex: o
                  }
                }
              }
              function u(t, e) {
                if (!a[t])
                  return e;
                if (!a[t][e])
                  return e;
                for (var n = e; a[t][n]; )
                  if (n++,
                    !a[t][n])
                    return n
              }
              function d(t, e) {
                var n = u(t.rowIndex, e.cellIndex)
                  , o = e.colSpan > 1
                  , i = e.rowSpan > 1
                  , a = t.rowIndex === r.rowPos && e.cellIndex === r.colPos;
                l(t.rowIndex, n, t, e, i, o, !1);
                var s = e.attributes.rowSpan ? parseInt(e.attributes.rowSpan.value, 10) : 0;
                if (s > 1)
                  for (var c = 1; c < s; c++) {
                    var d = t.rowIndex + c;
                    h(d, n, e, a),
                      l(d, n, t, e, !0, o, !0)
                  }
                var f = e.attributes.colSpan ? parseInt(e.attributes.colSpan.value, 10) : 0;
                if (f > 1)
                  for (var p = 1; p < f; p++) {
                    var m = u(t.rowIndex, n + p);
                    h(t.rowIndex, m, e, a),
                      l(t.rowIndex, m, t, e, i, !0, !0)
                  }
              }
              function h(t, e, n, o) {
                t === r.rowPos && r.colPos >= n.cellIndex && n.cellIndex <= e && !o && r.colPos++
              }
              function f(e) {
                switch (n) {
                  case t.where.Column:
                    if (e.isColSpan)
                      return t.resultAction.SubtractSpanCount;
                    break;
                  case t.where.Row:
                    if (!e.isVirtual && e.isRowSpan)
                      return t.resultAction.AddCell;
                    if (e.isRowSpan)
                      return t.resultAction.SubtractSpanCount
                }
                return t.resultAction.RemoveCell
              }
              function p(e) {
                switch (n) {
                  case t.where.Column:
                    if (e.isColSpan)
                      return t.resultAction.SumSpanCount;
                    if (e.isRowSpan && e.isVirtual)
                      return t.resultAction.Ignore;
                    break;
                  case t.where.Row:
                    if (e.isRowSpan)
                      return t.resultAction.SumSpanCount;
                    if (e.isColSpan && e.isVirtual)
                      return t.resultAction.Ignore
                }
                return t.resultAction.AddCell
              }
              this.getActionList = function() {
                for (var e = n === t.where.Row ? r.rowPos : -1, i = n === t.where.Column ? r.colPos : -1, l = 0, u = !0; u; ) {
                  var d = e >= 0 ? e : l
                    , h = i >= 0 ? i : l
                    , m = a[d];
                  if (!m)
                    return u = !1,
                      s;
                  var v = m[h];
                  if (!v)
                    return u = !1,
                      s;
                  var g = t.resultAction.Ignore;
                  switch (o) {
                    case t.requestAction.Add:
                      g = p(v);
                      break;
                    case t.requestAction.Delete:
                      g = f(v)
                  }
                  s.push(c(v, g, d, h)),
                    l++
                }
                return s
              }
                ,
              e && e.tagName && ("td" === e.tagName.toLowerCase() || "th" === e.tagName.toLowerCase()) && (r.colPos = e.cellIndex,
              e.parentElement && e.parentElement.tagName && "tr" === e.parentElement.tagName.toLowerCase() && (r.rowPos = e.parentElement.rowIndex)),
                function() {
                  for (var t = i.rows, e = 0; e < t.length; e++)
                    for (var n = t[e].cells, o = 0; o < n.length; o++)
                      d(t[e], n[o])
                }()
            };
            Rt.where = {
              Row: 0,
              Column: 1
            },
              Rt.requestAction = {
                Add: 0,
                Delete: 1
              },
              Rt.resultAction = {
                Ignore: 0,
                SubtractSpanCount: 1,
                RemoveCell: 2,
                AddCell: 3,
                SumSpanCount: 4
              };
            var Lt = function() {
              function t() {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t)
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "tab",
                  value: function(t, e) {
                    var n = ht.ancestor(t.commonAncestor(), ht.isCell)
                      , o = ht.ancestor(n, ht.isTable)
                      , i = ht.listDescendant(o, ht.isCell)
                      , r = k[e ? "prev" : "next"](i, n);
                    r && yt.create(r, 0).select()
                  }
                }, {
                  key: "addRow",
                  value: function(t, n) {
                    for (var o = ht.ancestor(t.commonAncestor(), ht.isCell), i = e()(o).closest("tr"), r = this.recoverAttributes(i), a = e()("<tr" + r + "></tr>"), s = new Rt(o,Rt.where.Row,Rt.requestAction.Add,e()(i).closest("table")[0]).getActionList(), l = 0; l < s.length; l++) {
                      var c = s[l]
                        , u = this.recoverAttributes(c.baseCell);
                      switch (c.action) {
                        case Rt.resultAction.AddCell:
                          a.append("<td" + u + ">" + ht.blank + "</td>");
                          break;
                        case Rt.resultAction.SumSpanCount:
                          if ("top" === n && (c.baseCell.parent ? c.baseCell.closest("tr").rowIndex : 0) <= i[0].rowIndex) {
                            var d = e()("<div></div>").append(e()("<td" + u + ">" + ht.blank + "</td>").removeAttr("rowspan")).html();
                            a.append(d);
                            break
                          }
                          var h = parseInt(c.baseCell.rowSpan, 10);
                          h++,
                            c.baseCell.setAttribute("rowSpan", h)
                      }
                    }
                    if ("top" === n)
                      i.before(a);
                    else {
                      if (o.rowSpan > 1) {
                        var f = i[0].rowIndex + (o.rowSpan - 2);
                        return void e()(e()(i).parent().find("tr")[f]).after(e()(a))
                      }
                      i.after(a)
                    }
                  }
                }, {
                  key: "addCol",
                  value: function(t, n) {
                    var o = ht.ancestor(t.commonAncestor(), ht.isCell)
                      , i = e()(o).closest("tr");
                    e()(i).siblings().push(i);
                    for (var r = new Rt(o,Rt.where.Column,Rt.requestAction.Add,e()(i).closest("table")[0]).getActionList(), a = 0; a < r.length; a++) {
                      var s = r[a]
                        , l = this.recoverAttributes(s.baseCell);
                      switch (s.action) {
                        case Rt.resultAction.AddCell:
                          "right" === n ? e()(s.baseCell).after("<td" + l + ">" + ht.blank + "</td>") : e()(s.baseCell).before("<td" + l + ">" + ht.blank + "</td>");
                          break;
                        case Rt.resultAction.SumSpanCount:
                          if ("right" === n) {
                            var c = parseInt(s.baseCell.colSpan, 10);
                            c++,
                              s.baseCell.setAttribute("colSpan", c)
                          } else
                            e()(s.baseCell).before("<td" + l + ">" + ht.blank + "</td>")
                      }
                    }
                  }
                }, {
                  key: "recoverAttributes",
                  value: function(t) {
                    var e = "";
                    if (!t)
                      return e;
                    for (var n = t.attributes || [], o = 0; o < n.length; o++)
                      "id" !== n[o].name.toLowerCase() && n[o].specified && (e += " " + n[o].name + "='" + n[o].value + "'");
                    return e
                  }
                }, {
                  key: "deleteRow",
                  value: function(t) {
                    for (var n = ht.ancestor(t.commonAncestor(), ht.isCell), o = e()(n).closest("tr"), i = o.children("td, th").index(e()(n)), r = o[0].rowIndex, a = new Rt(n,Rt.where.Row,Rt.requestAction.Delete,e()(o).closest("table")[0]).getActionList(), s = 0; s < a.length; s++)
                      if (a[s]) {
                        var l = a[s].baseCell
                          , c = a[s].virtualTable
                          , u = l.rowSpan && l.rowSpan > 1
                          , d = u ? parseInt(l.rowSpan, 10) : 0;
                        switch (a[s].action) {
                          case Rt.resultAction.Ignore:
                            continue;
                          case Rt.resultAction.AddCell:
                            var h = o.next("tr")[0];
                            if (!h)
                              continue;
                            var f = o[0].cells[i];
                            u && (d > 2 ? (d--,
                              h.insertBefore(f, h.cells[i]),
                              h.cells[i].setAttribute("rowSpan", d),
                              h.cells[i].innerHTML = "") : 2 === d && (h.insertBefore(f, h.cells[i]),
                              h.cells[i].removeAttribute("rowSpan"),
                              h.cells[i].innerHTML = ""));
                            continue;
                          case Rt.resultAction.SubtractSpanCount:
                            u && (d > 2 ? (d--,
                              l.setAttribute("rowSpan", d),
                            c.rowIndex !== r && l.cellIndex === i && (l.innerHTML = "")) : 2 === d && (l.removeAttribute("rowSpan"),
                            c.rowIndex !== r && l.cellIndex === i && (l.innerHTML = "")));
                            continue;
                          case Rt.resultAction.RemoveCell:
                            continue
                        }
                      }
                    o.remove()
                  }
                }, {
                  key: "deleteCol",
                  value: function(t) {
                    for (var n = ht.ancestor(t.commonAncestor(), ht.isCell), o = e()(n).closest("tr"), i = o.children("td, th").index(e()(n)), r = new Rt(n,Rt.where.Column,Rt.requestAction.Delete,e()(o).closest("table")[0]).getActionList(), a = 0; a < r.length; a++)
                      if (r[a])
                        switch (r[a].action) {
                          case Rt.resultAction.Ignore:
                            continue;
                          case Rt.resultAction.SubtractSpanCount:
                            var s = r[a].baseCell;
                            if (s.colSpan && s.colSpan > 1) {
                              var l = s.colSpan ? parseInt(s.colSpan, 10) : 0;
                              l > 2 ? (l--,
                                s.setAttribute("colSpan", l),
                              s.cellIndex === i && (s.innerHTML = "")) : 2 === l && (s.removeAttribute("colSpan"),
                              s.cellIndex === i && (s.innerHTML = ""))
                            }
                            continue;
                          case Rt.resultAction.RemoveCell:
                            ht.remove(r[a].baseCell, !0);
                            continue
                        }
                  }
                }, {
                  key: "createTable",
                  value: function(t, n, o) {
                    for (var i, r = [], a = 0; a < t; a++)
                      r.push("<td>" + ht.blank + "</td>");
                    i = r.join("");
                    for (var s, l = [], c = 0; c < n; c++)
                      l.push("<tr>" + i + "</tr>");
                    s = l.join("");
                    var u = e()("<table>" + s + "</table>");
                    return o && o.tableClassName && u.addClass(o.tableClassName),
                      u[0]
                  }
                }, {
                  key: "deleteTable",
                  value: function(t) {
                    var n = ht.ancestor(t.commonAncestor(), ht.isCell);
                    e()(n).closest("table").remove()
                  }
                }],
              o && Pt(n.prototype, o),
              i && Pt(n, i),
                t
            }();
            function At(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var Ft = function() {
              function t(n) {
                var o = this;
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.$note = n.layoutInfo.note,
                  this.$editor = n.layoutInfo.editor,
                  this.$editable = n.layoutInfo.editable,
                  this.options = n.options,
                  this.lang = this.options.langInfo,
                  this.editable = this.$editable[0],
                  this.lastRange = null,
                  this.snapshot = null,
                  this.style = new Tt,
                  this.table = new Lt,
                  this.typing = new Nt(n),
                  this.bullet = new It,
                  this.history = new xt(n),
                  this.context.memo("help.escape", this.lang.help.escape),
                  this.context.memo("help.undo", this.lang.help.undo),
                  this.context.memo("help.redo", this.lang.help.redo),
                  this.context.memo("help.tab", this.lang.help.tab),
                  this.context.memo("help.untab", this.lang.help.untab),
                  this.context.memo("help.insertParagraph", this.lang.help.insertParagraph),
                  this.context.memo("help.insertOrderedList", this.lang.help.insertOrderedList),
                  this.context.memo("help.insertUnorderedList", this.lang.help.insertUnorderedList),
                  this.context.memo("help.indent", this.lang.help.indent),
                  this.context.memo("help.outdent", this.lang.help.outdent),
                  this.context.memo("help.formatPara", this.lang.help.formatPara),
                  this.context.memo("help.insertHorizontalRule", this.lang.help.insertHorizontalRule),
                  this.context.memo("help.fontName", this.lang.help.fontName);
                for (var i = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor"], r = 0, a = i.length; r < a; r++)
                  this[i[r]] = function(t) {
                    return function(e) {
                      o.beforeCommand(),
                        document.execCommand(t, !1, e),
                        o.afterCommand(!0)
                    }
                  }(i[r]),
                    this.context.memo("help." + i[r], this.lang.help[i[r]]);
                this.fontName = this.wrapCommand((function(t) {
                    return o.fontStyling("font-family", f.validFontName(t))
                  }
                )),
                  this.fontSize = this.wrapCommand((function(t) {
                      var e = o.currentStyle()["font-size-unit"];
                      return o.fontStyling("font-size", t + e)
                    }
                  )),
                  this.fontSizeUnit = this.wrapCommand((function(t) {
                      var e = o.currentStyle()["font-size"];
                      return o.fontStyling("font-size", e + t)
                    }
                  ));
                for (var s = 1; s <= 6; s++)
                  this["formatH" + s] = function(t) {
                    return function() {
                      o.formatBlock("H" + t)
                    }
                  }(s),
                    this.context.memo("help.formatH" + s, this.lang.help["formatH" + s]);
                this.insertParagraph = this.wrapCommand((function() {
                    o.typing.insertParagraph(o.editable)
                  }
                )),
                  this.insertOrderedList = this.wrapCommand((function() {
                      o.bullet.insertOrderedList(o.editable)
                    }
                  )),
                  this.insertUnorderedList = this.wrapCommand((function() {
                      o.bullet.insertUnorderedList(o.editable)
                    }
                  )),
                  this.indent = this.wrapCommand((function() {
                      o.bullet.indent(o.editable)
                    }
                  )),
                  this.outdent = this.wrapCommand((function() {
                      o.bullet.outdent(o.editable)
                    }
                  )),
                  this.insertNode = this.wrapCommand((function(t) {
                      o.isLimited(e()(t).text().length) || (o.getLastRange().insertNode(t),
                        o.setLastRange(yt.createFromNodeAfter(t).select()))
                    }
                  )),
                  this.insertText = this.wrapCommand((function(t) {
                      if (!o.isLimited(t.length)) {
                        var e = o.getLastRange().insertNode(ht.createText(t));
                        o.setLastRange(yt.create(e, ht.nodeLength(e)).select())
                      }
                    }
                  )),
                  this.pasteHTML = this.wrapCommand((function(t) {
                      if (!o.isLimited(t.length)) {
                        t = o.context.invoke("codeview.purify", t);
                        var e = o.getLastRange().pasteHTML(t);
                        o.setLastRange(yt.createFromNodeAfter(k.last(e)).select())
                      }
                    }
                  )),
                  this.formatBlock = this.wrapCommand((function(t, e) {
                      var n = o.options.callbacks.onApplyCustomStyle;
                      n ? n.call(o, e, o.context, o.onFormatBlock) : o.onFormatBlock(t, e)
                    }
                  )),
                  this.insertHorizontalRule = this.wrapCommand((function() {
                      var t = o.getLastRange().insertNode(ht.create("HR"));
                      t.nextSibling && o.setLastRange(yt.create(t.nextSibling, 0).normalize().select())
                    }
                  )),
                  this.lineHeight = this.wrapCommand((function(t) {
                      o.style.stylePara(o.getLastRange(), {
                        lineHeight: t
                      })
                    }
                  )),
                  this.createLink = this.wrapCommand((function(t) {
                      var n = t.url
                        , i = t.text
                        , r = t.isNewWindow
                        , a = t.checkProtocol
                        , s = t.range || o.getLastRange()
                        , l = i.length - s.toString().length;
                      if (!(l > 0 && o.isLimited(l))) {
                        var c = s.toString() !== i;
                        "string" == typeof n && (n = n.trim()),
                          o.options.onCreateLink ? n = o.options.onCreateLink(n) : a && (n = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(n) ? n : o.options.defaultProtocol + n);
                        var u = [];
                        if (c) {
                          var d = (s = s.deleteContents()).insertNode(e()("<A>" + i + "</A>")[0]);
                          u.push(d)
                        } else
                          u = o.style.styleNodes(s, {
                            nodeName: "A",
                            expandClosestSibling: !0,
                            onlyPartialContains: !0
                          });
                        e().each(u, (function(t, o) {
                            e()(o).attr("href", n),
                              r ? e()(o).attr("target", "_blank") : e()(o).removeAttr("target")
                          }
                        )),
                          o.setLastRange(o.createRangeFromList(u).select())
                      }
                    }
                  )),
                  this.color = this.wrapCommand((function(t) {
                      var e = t.foreColor
                        , n = t.backColor;
                      e && document.execCommand("foreColor", !1, e),
                      n && document.execCommand("backColor", !1, n)
                    }
                  )),
                  this.foreColor = this.wrapCommand((function(t) {
                      document.execCommand("foreColor", !1, t)
                    }
                  )),
                  this.insertTable = this.wrapCommand((function(t) {
                      var e = t.split("x");
                      o.getLastRange().deleteContents().insertNode(o.table.createTable(e[0], e[1], o.options))
                    }
                  )),
                  this.removeMedia = this.wrapCommand((function() {
                      var t = e()(o.restoreTarget()).parent();
                      t.closest("figure").length ? t.closest("figure").remove() : t = e()(o.restoreTarget()).detach(),
                        o.context.triggerEvent("media.delete", t, o.$editable)
                    }
                  )),
                  this.floatMe = this.wrapCommand((function(t) {
                      var n = e()(o.restoreTarget());
                      n.toggleClass("note-float-left", "left" === t),
                        n.toggleClass("note-float-right", "right" === t),
                        n.css("float", "none" === t ? "" : t)
                    }
                  )),
                  this.resize = this.wrapCommand((function(t) {
                      var n = e()(o.restoreTarget());
                      0 === (t = parseFloat(t)) ? n.css("width", "") : n.css({
                        width: 100 * t + "%",
                        height: ""
                      })
                    }
                  ))
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "initialize",
                  value: function() {
                    var t = this;
                    this.$editable.on("keydown", (function(e) {
                        if (e.keyCode === wt.code.ENTER && t.context.triggerEvent("enter", e),
                          t.context.triggerEvent("keydown", e),
                          t.snapshot = t.history.makeSnapshot(),
                          t.hasKeyShortCut = !1,
                        e.isDefaultPrevented() || (t.options.shortcuts ? t.hasKeyShortCut = t.handleKeyMap(e) : t.preventDefaultEditableShortCuts(e)),
                          t.isLimited(1, e)) {
                          var n = t.getLastRange();
                          if (n.eo - n.so == 0)
                            return !1
                        }
                        t.setLastRange(),
                        t.options.recordEveryKeystroke && !1 === t.hasKeyShortCut && t.history.recordUndo()
                      }
                    )).on("keyup", (function(e) {
                        t.setLastRange(),
                          t.context.triggerEvent("keyup", e)
                      }
                    )).on("focus", (function(e) {
                        t.setLastRange(),
                          t.context.triggerEvent("focus", e)
                      }
                    )).on("blur", (function(e) {
                        t.context.triggerEvent("blur", e)
                      }
                    )).on("mousedown", (function(e) {
                        t.context.triggerEvent("mousedown", e)
                      }
                    )).on("mouseup", (function(e) {
                        t.setLastRange(),
                          t.history.recordUndo(),
                          t.context.triggerEvent("mouseup", e)
                      }
                    )).on("scroll", (function(e) {
                        t.context.triggerEvent("scroll", e)
                      }
                    )).on("paste", (function(e) {
                        t.setLastRange(),
                          t.context.triggerEvent("paste", e)
                      }
                    )).on("input", (function() {
                        t.isLimited(0) && t.snapshot && t.history.applySnapshot(t.snapshot)
                      }
                    )),
                      this.$editable.attr("spellcheck", this.options.spellCheck),
                      this.$editable.attr("autocorrect", this.options.spellCheck),
                    this.options.disableGrammar && this.$editable.attr("data-gramm", !1),
                      this.$editable.html(ht.html(this.$note) || ht.emptyPara),
                      this.$editable.on(f.inputEventName, m.debounce((function() {
                          t.context.triggerEvent("change", t.$editable.html(), t.$editable)
                        }
                      ), 10)),
                      this.$editable.on("focusin", (function(e) {
                          t.context.triggerEvent("focusin", e)
                        }
                      )).on("focusout", (function(e) {
                          t.context.triggerEvent("focusout", e)
                        }
                      )),
                      this.options.airMode ? this.options.overrideContextMenu && this.$editor.on("contextmenu", (function(e) {
                          return t.context.triggerEvent("contextmenu", e),
                            !1
                        }
                      )) : (this.options.width && this.$editor.outerWidth(this.options.width),
                      this.options.height && this.$editable.outerHeight(this.options.height),
                      this.options.maxHeight && this.$editable.css("max-height", this.options.maxHeight),
                      this.options.minHeight && this.$editable.css("min-height", this.options.minHeight)),
                      this.history.recordUndo(),
                      this.setLastRange()
                  }
                }, {
                  key: "destroy",
                  value: function() {
                    this.$editable.off()
                  }
                }, {
                  key: "handleKeyMap",
                  value: function(t) {
                    var e = this.options.keyMap[f.isMac ? "mac" : "pc"]
                      , n = [];
                    t.metaKey && n.push("CMD"),
                    t.ctrlKey && !t.altKey && n.push("CTRL"),
                    t.shiftKey && n.push("SHIFT");
                    var o = wt.nameFromCode[t.keyCode];
                    o && n.push(o);
                    var i = e[n.join("+")];
                    if ("TAB" !== o || this.options.tabDisable)
                      if (i) {
                        if (!1 !== this.context.invoke(i))
                          return t.preventDefault(),
                            !0
                      } else
                        wt.isEdit(t.keyCode) && this.afterCommand();
                    else
                      this.afterCommand();
                    return !1
                  }
                }, {
                  key: "preventDefaultEditableShortCuts",
                  value: function(t) {
                    (t.ctrlKey || t.metaKey) && k.contains([66, 73, 85], t.keyCode) && t.preventDefault()
                  }
                }, {
                  key: "isLimited",
                  value: function(t, e) {
                    return t = t || 0,
                    (void 0 === e || !(wt.isMove(e.keyCode) || wt.isNavigation(e.keyCode) || e.ctrlKey || e.metaKey || k.contains([wt.code.BACKSPACE, wt.code.DELETE], e.keyCode))) && this.options.maxTextLength > 0 && this.$editable.text().length + t > this.options.maxTextLength
                  }
                }, {
                  key: "createRange",
                  value: function() {
                    return this.focus(),
                      this.setLastRange(),
                      this.getLastRange()
                  }
                }, {
                  key: "createRangeFromList",
                  value: function(t) {
                    var e = yt.createFromNodeBefore(k.head(t)).getStartPoint()
                      , n = yt.createFromNodeAfter(k.last(t)).getEndPoint();
                    return yt.create(e.node, e.offset, n.node, n.offset)
                  }
                }, {
                  key: "setLastRange",
                  value: function(t) {
                    t ? this.lastRange = t : (this.lastRange = yt.create(this.editable),
                    0 === e()(this.lastRange.sc).closest(".note-editable").length && (this.lastRange = yt.createFromBodyElement(this.editable)))
                  }
                }, {
                  key: "getLastRange",
                  value: function() {
                    return this.lastRange || this.setLastRange(),
                      this.lastRange
                  }
                }, {
                  key: "saveRange",
                  value: function(t) {
                    t && this.getLastRange().collapse().select()
                  }
                }, {
                  key: "restoreRange",
                  value: function() {
                    this.lastRange && (this.lastRange.select(),
                      this.focus())
                  }
                }, {
                  key: "saveTarget",
                  value: function(t) {
                    this.$editable.data("target", t)
                  }
                }, {
                  key: "clearTarget",
                  value: function() {
                    this.$editable.removeData("target")
                  }
                }, {
                  key: "restoreTarget",
                  value: function() {
                    return this.$editable.data("target")
                  }
                }, {
                  key: "currentStyle",
                  value: function() {
                    var t = yt.create();
                    return t && (t = t.normalize()),
                      t ? this.style.current(t) : this.style.fromNode(this.$editable)
                  }
                }, {
                  key: "styleFromNode",
                  value: function(t) {
                    return this.style.fromNode(t)
                  }
                }, {
                  key: "undo",
                  value: function() {
                    this.context.triggerEvent("before.command", this.$editable.html()),
                      this.history.undo(),
                      this.context.triggerEvent("change", this.$editable.html(), this.$editable)
                  }
                }, {
                  key: "commit",
                  value: function() {
                    this.context.triggerEvent("before.command", this.$editable.html()),
                      this.history.commit(),
                      this.context.triggerEvent("change", this.$editable.html(), this.$editable)
                  }
                }, {
                  key: "redo",
                  value: function() {
                    this.context.triggerEvent("before.command", this.$editable.html()),
                      this.history.redo(),
                      this.context.triggerEvent("change", this.$editable.html(), this.$editable)
                  }
                }, {
                  key: "beforeCommand",
                  value: function() {
                    this.context.triggerEvent("before.command", this.$editable.html()),
                      document.execCommand("styleWithCSS", !1, this.options.styleWithCSS),
                      this.focus()
                  }
                }, {
                  key: "afterCommand",
                  value: function(t) {
                    this.normalizeContent(),
                      this.history.recordUndo(),
                    t || this.context.triggerEvent("change", this.$editable.html(), this.$editable)
                  }
                }, {
                  key: "tab",
                  value: function() {
                    var t = this.getLastRange();
                    if (t.isCollapsed() && t.isOnCell())
                      this.table.tab(t);
                    else {
                      if (0 === this.options.tabSize)
                        return !1;
                      this.isLimited(this.options.tabSize) || (this.beforeCommand(),
                        this.typing.insertTab(t, this.options.tabSize),
                        this.afterCommand())
                    }
                  }
                }, {
                  key: "untab",
                  value: function() {
                    var t = this.getLastRange();
                    if (t.isCollapsed() && t.isOnCell())
                      this.table.tab(t, !0);
                    else if (0 === this.options.tabSize)
                      return !1
                  }
                }, {
                  key: "wrapCommand",
                  value: function(t) {
                    return function() {
                      this.beforeCommand(),
                        t.apply(this, arguments),
                        this.afterCommand()
                    }
                  }
                }, {
                  key: "insertImage",
                  value: function(t, n) {
                    var o, i = this;
                    return (o = t,
                      e().Deferred((function(t) {
                          var n = e()("<img>");
                          n.one("load", (function() {
                              n.off("error abort"),
                                t.resolve(n)
                            }
                          )).one("error abort", (function() {
                              n.off("load").detach(),
                                t.reject(n)
                            }
                          )).css({
                            display: "none"
                          }).appendTo(document.body).attr("src", o)
                        }
                      )).promise()).then((function(t) {
                        i.beforeCommand(),
                          "function" == typeof n ? n(t) : ("string" == typeof n && t.attr("data-filename", n),
                            t.css("width", Math.min(i.$editable.width(), t.width()))),
                          t.show(),
                          i.getLastRange().insertNode(t[0]),
                          i.setLastRange(yt.createFromNodeAfter(t[0]).select()),
                          i.afterCommand()
                      }
                    )).fail((function(t) {
                        i.context.triggerEvent("image.upload.error", t)
                      }
                    ))
                  }
                }, {
                  key: "insertImagesAsDataURL",
                  value: function(t) {
                    var n = this;
                    e().each(t, (function(t, o) {
                        var i = o.name;
                        n.options.maximumImageFileSize && n.options.maximumImageFileSize < o.size ? n.context.triggerEvent("image.upload.error", n.lang.image.maximumFileSizeError) : function(t) {
                          return e().Deferred((function(n) {
                              e().extend(new FileReader, {
                                onload: function(t) {
                                  var e = t.target.result;
                                  n.resolve(e)
                                },
                                onerror: function(t) {
                                  n.reject(t)
                                }
                              }).readAsDataURL(t)
                            }
                          )).promise()
                        }(o).then((function(t) {
                            return n.insertImage(t, i)
                          }
                        )).fail((function() {
                            n.context.triggerEvent("image.upload.error")
                          }
                        ))
                      }
                    ))
                  }
                }, {
                  key: "insertImagesOrCallback",
                  value: function(t) {
                    this.options.callbacks.onImageUpload ? this.context.triggerEvent("image.upload", t) : this.insertImagesAsDataURL(t)
                  }
                }, {
                  key: "getSelectedText",
                  value: function() {
                    var t = this.getLastRange();
                    return t.isOnAnchor() && (t = yt.createFromNode(ht.ancestor(t.sc, ht.isAnchor))),
                      t.toString()
                  }
                }, {
                  key: "onFormatBlock",
                  value: function(t, n) {
                    if (document.execCommand("FormatBlock", !1, f.isMSIE ? "<" + t + ">" : t),
                    n && n.length && (n[0].tagName.toUpperCase() !== t.toUpperCase() && (n = n.find(t)),
                    n && n.length)) {
                      var o = this.createRange()
                        , i = e()([o.sc, o.ec]).closest(t);
                      i.removeClass();
                      var r = n[0].className || "";
                      r && i.addClass(r)
                    }
                  }
                }, {
                  key: "formatPara",
                  value: function() {
                    this.formatBlock("P")
                  }
                }, {
                  key: "fontStyling",
                  value: function(t, n) {
                    var o = this.getLastRange();
                    if ("" !== o) {
                      var i = this.style.styleNodes(o);
                      if (this.$editor.find(".note-status-output").html(""),
                        e()(i).css(t, n),
                        o.isCollapsed()) {
                        var r = k.head(i);
                        r && !ht.nodeLength(r) && (r.innerHTML = ht.ZERO_WIDTH_NBSP_CHAR,
                          yt.createFromNode(r.firstChild).select(),
                          this.setLastRange(),
                          this.$editable.data("bogus", r))
                      } else
                        this.setLastRange(this.createRangeFromList(i).select())
                    } else {
                      var a = e().now();
                      this.$editor.find(".note-status-output").html('<div id="note-status-output-' + a + '" class="alert alert-info">' + this.lang.output.noSelection + "</div>"),
                        setTimeout((function() {
                            e()("#note-status-output-" + a).remove()
                          }
                        ), 5e3)
                    }
                  }
                }, {
                  key: "unlink",
                  value: function() {
                    var t = this.getLastRange();
                    if (t.isOnAnchor()) {
                      var e = ht.ancestor(t.sc, ht.isAnchor);
                      (t = yt.createFromNode(e)).select(),
                        this.setLastRange(),
                        this.beforeCommand(),
                        document.execCommand("unlink"),
                        this.afterCommand()
                    }
                  }
                }, {
                  key: "getLinkInfo",
                  value: function() {
                    var t = this.getLastRange().expand(ht.isAnchor)
                      , n = e()(k.head(t.nodes(ht.isAnchor)))
                      , o = {
                      range: t,
                      text: t.toString(),
                      url: n.length ? n.attr("href") : ""
                    };
                    return n.length && (o.isNewWindow = "_blank" === n.attr("target")),
                      o
                  }
                }, {
                  key: "addRow",
                  value: function(t) {
                    var e = this.getLastRange(this.$editable);
                    e.isCollapsed() && e.isOnCell() && (this.beforeCommand(),
                      this.table.addRow(e, t),
                      this.afterCommand())
                  }
                }, {
                  key: "addCol",
                  value: function(t) {
                    var e = this.getLastRange(this.$editable);
                    e.isCollapsed() && e.isOnCell() && (this.beforeCommand(),
                      this.table.addCol(e, t),
                      this.afterCommand())
                  }
                }, {
                  key: "deleteRow",
                  value: function() {
                    var t = this.getLastRange(this.$editable);
                    t.isCollapsed() && t.isOnCell() && (this.beforeCommand(),
                      this.table.deleteRow(t),
                      this.afterCommand())
                  }
                }, {
                  key: "deleteCol",
                  value: function() {
                    var t = this.getLastRange(this.$editable);
                    t.isCollapsed() && t.isOnCell() && (this.beforeCommand(),
                      this.table.deleteCol(t),
                      this.afterCommand())
                  }
                }, {
                  key: "deleteTable",
                  value: function() {
                    var t = this.getLastRange(this.$editable);
                    t.isCollapsed() && t.isOnCell() && (this.beforeCommand(),
                      this.table.deleteTable(t),
                      this.afterCommand())
                  }
                }, {
                  key: "resizeTo",
                  value: function(t, e, n) {
                    var o;
                    if (n) {
                      var i = t.y / t.x
                        , r = e.data("ratio");
                      o = {
                        width: r > i ? t.x : t.y / r,
                        height: r > i ? t.x * r : t.y
                      }
                    } else
                      o = {
                        width: t.x,
                        height: t.y
                      };
                    e.css(o)
                  }
                }, {
                  key: "hasFocus",
                  value: function() {
                    return this.$editable.is(":focus")
                  }
                }, {
                  key: "focus",
                  value: function() {
                    this.hasFocus() || this.$editable.focus()
                  }
                }, {
                  key: "isEmpty",
                  value: function() {
                    return ht.isEmpty(this.$editable[0]) || ht.emptyPara === this.$editable.html()
                  }
                }, {
                  key: "empty",
                  value: function() {
                    this.context.invoke("code", ht.emptyPara)
                  }
                }, {
                  key: "normalizeContent",
                  value: function() {
                    this.$editable[0].normalize()
                  }
                }],
              o && At(n.prototype, o),
              i && At(n, i),
                t
            }();
            function Dt(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var Ht = function() {
              function t(e) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = e,
                  this.$editable = e.layoutInfo.editable
              }
              var e, n, o;
              return e = t,
              (n = [{
                key: "initialize",
                value: function() {
                  this.$editable.on("paste", this.pasteByEvent.bind(this))
                }
              }, {
                key: "pasteByEvent",
                value: function(t) {
                  var e = this
                    , n = t.originalEvent.clipboardData;
                  if (n && n.items && n.items.length) {
                    var o = n.items.length > 1 ? n.items[1] : k.head(n.items);
                    "file" === o.kind && -1 !== o.type.indexOf("image/") ? (this.context.invoke("editor.insertImagesOrCallback", [o.getAsFile()]),
                      t.preventDefault()) : "string" === o.kind && this.context.invoke("editor.isLimited", n.getData("Text").length) && t.preventDefault()
                  } else if (window.clipboardData) {
                    var i = window.clipboardData.getData("text");
                    this.context.invoke("editor.isLimited", i.length) && t.preventDefault()
                  }
                  setTimeout((function() {
                      e.context.invoke("editor.afterCommand")
                    }
                  ), 10)
                }
              }]) && Dt(e.prototype, n),
              o && Dt(e, o),
                t
            }();
            function zt(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var Bt = function() {
              function t(n) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.$eventListener = e()(document),
                  this.$editor = n.layoutInfo.editor,
                  this.$editable = n.layoutInfo.editable,
                  this.options = n.options,
                  this.lang = this.options.langInfo,
                  this.documentEventHandlers = {},
                  this.$dropzone = e()(['<div class="note-dropzone">', '<div class="note-dropzone-message"></div>', "</div>"].join("")).prependTo(this.$editor)
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "initialize",
                  value: function() {
                    this.options.disableDragAndDrop ? (this.documentEventHandlers.onDrop = function(t) {
                      t.preventDefault()
                    }
                      ,
                      this.$eventListener = this.$dropzone,
                      this.$eventListener.on("drop", this.documentEventHandlers.onDrop)) : this.attachDragAndDropEvent()
                  }
                }, {
                  key: "attachDragAndDropEvent",
                  value: function() {
                    var t = this
                      , n = e()()
                      , o = this.$dropzone.find(".note-dropzone-message");
                    this.documentEventHandlers.onDragenter = function(e) {
                      var i = t.context.invoke("codeview.isActivated")
                        , r = t.$editor.width() > 0 && t.$editor.height() > 0;
                      i || n.length || !r || (t.$editor.addClass("dragover"),
                        t.$dropzone.width(t.$editor.width()),
                        t.$dropzone.height(t.$editor.height()),
                        o.text(t.lang.image.dragImageHere)),
                        n = n.add(e.target)
                    }
                      ,
                      this.documentEventHandlers.onDragleave = function(o) {
                        (n = n.not(o.target)).length && "BODY" !== o.target.nodeName || (n = e()(),
                          t.$editor.removeClass("dragover"))
                      }
                      ,
                      this.documentEventHandlers.onDrop = function() {
                        n = e()(),
                          t.$editor.removeClass("dragover")
                      }
                      ,
                      this.$eventListener.on("dragenter", this.documentEventHandlers.onDragenter).on("dragleave", this.documentEventHandlers.onDragleave).on("drop", this.documentEventHandlers.onDrop),
                      this.$dropzone.on("dragenter", (function() {
                          t.$dropzone.addClass("hover"),
                            o.text(t.lang.image.dropImage)
                        }
                      )).on("dragleave", (function() {
                          t.$dropzone.removeClass("hover"),
                            o.text(t.lang.image.dragImageHere)
                        }
                      )),
                      this.$dropzone.on("drop", (function(n) {
                          var o = n.originalEvent.dataTransfer;
                          n.preventDefault(),
                            o && o.files && o.files.length ? (t.$editable.focus(),
                              t.context.invoke("editor.insertImagesOrCallback", o.files)) : e().each(o.types, (function(n, i) {
                                if (!(i.toLowerCase().indexOf("_moz_") > -1)) {
                                  var r = o.getData(i);
                                  i.toLowerCase().indexOf("text") > -1 ? t.context.invoke("editor.pasteHTML", r) : e()(r).each((function(e, n) {
                                      t.context.invoke("editor.insertNode", n)
                                    }
                                  ))
                                }
                              }
                            ))
                        }
                      )).on("dragover", !1)
                  }
                }, {
                  key: "destroy",
                  value: function() {
                    var t = this;
                    Object.keys(this.documentEventHandlers).forEach((function(e) {
                        t.$eventListener.off(e.substr(2).toLowerCase(), t.documentEventHandlers[e])
                      }
                    )),
                      this.documentEventHandlers = {}
                  }
                }],
              o && zt(n.prototype, o),
              i && zt(n, i),
                t
            }();
            function Mt(t, e) {
              var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
              if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                  if (!t)
                    return;
                  if ("string" == typeof t)
                    return Ot(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  "Object" === n && t.constructor && (n = t.constructor.name);
                  if ("Map" === n || "Set" === n)
                    return Array.from(t);
                  if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Ot(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                  n && (t = n);
                  var o = 0
                    , i = function() {};
                  return {
                    s: i,
                    n: function() {
                      return o >= t.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: t[o++]
                      }
                    },
                    e: function(t) {
                      throw t
                    },
                    f: i
                  }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }
              var r, a = !0, s = !1;
              return {
                s: function() {
                  n = n.call(t)
                },
                n: function() {
                  var t = n.next();
                  return a = t.done,
                    t
                },
                e: function(t) {
                  s = !0,
                    r = t
                },
                f: function() {
                  try {
                    a || null == n.return || n.return()
                  } finally {
                    if (s)
                      throw r
                  }
                }
              }
            }
            function Ot(t, e) {
              (null == e || e > t.length) && (e = t.length);
              for (var n = 0, o = new Array(e); n < e; n++)
                o[n] = t[n];
              return o
            }
            function Ut(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var jt = function() {
              function t(e) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = e,
                  this.$editor = e.layoutInfo.editor,
                  this.$editable = e.layoutInfo.editable,
                  this.$codable = e.layoutInfo.codable,
                  this.options = e.options,
                  this.CodeMirrorConstructor = window.CodeMirror,
                this.options.codemirror.CodeMirrorConstructor && (this.CodeMirrorConstructor = this.options.codemirror.CodeMirrorConstructor)
              }
              var e, n, o;
              return e = t,
                n = [{
                  key: "sync",
                  value: function(t) {
                    var e = this.isActivated()
                      , n = this.CodeMirrorConstructor;
                    e && (t ? n ? this.$codable.data("cmEditor").getDoc().setValue(t) : this.$codable.val(t) : n && this.$codable.data("cmEditor").save())
                  }
                }, {
                  key: "initialize",
                  value: function() {
                    var t = this;
                    this.$codable.on("keyup", (function(e) {
                        e.keyCode === wt.code.ESCAPE && t.deactivate()
                      }
                    ))
                  }
                }, {
                  key: "isActivated",
                  value: function() {
                    return this.$editor.hasClass("codeview")
                  }
                }, {
                  key: "toggle",
                  value: function() {
                    this.isActivated() ? this.deactivate() : this.activate(),
                      this.context.triggerEvent("codeview.toggled")
                  }
                }, {
                  key: "purify",
                  value: function(t) {
                    if (this.options.codeviewFilter && (t = t.replace(this.options.codeviewFilterRegex, ""),
                      this.options.codeviewIframeFilter)) {
                      var e = this.options.codeviewIframeWhitelistSrc.concat(this.options.codeviewIframeWhitelistSrcBase);
                      t = t.replace(/(<iframe.*?>.*?(?:<\/iframe>)?)/gi, (function(t) {
                          if (/<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(t))
                            return "";
                          var n, o = Mt(e);
                          try {
                            for (o.s(); !(n = o.n()).done; ) {
                              var i = n.value;
                              if (new RegExp('src="(https?:)?//' + i.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + '/(.+)"').test(t))
                                return t
                            }
                          } catch (t) {
                            o.e(t)
                          } finally {
                            o.f()
                          }
                          return ""
                        }
                      ))
                    }
                    return t
                  }
                }, {
                  key: "activate",
                  value: function() {
                    var t = this
                      , e = this.CodeMirrorConstructor;
                    if (this.$codable.val(ht.html(this.$editable, this.options.prettifyHtml)),
                      this.$codable.height(this.$editable.height()),
                      this.context.invoke("toolbar.updateCodeview", !0),
                      this.context.invoke("airPopover.updateCodeview", !0),
                      this.$editor.addClass("codeview"),
                      this.$codable.focus(),
                      e) {
                      var n = e.fromTextArea(this.$codable[0], this.options.codemirror);
                      if (this.options.codemirror.tern) {
                        var o = new e.TernServer(this.options.codemirror.tern);
                        n.ternServer = o,
                          n.on("cursorActivity", (function(t) {
                              o.updateArgHints(t)
                            }
                          ))
                      }
                      n.on("blur", (function(e) {
                          t.context.triggerEvent("blur.codeview", n.getValue(), e)
                        }
                      )),
                        n.on("change", (function() {
                            t.context.triggerEvent("change.codeview", n.getValue(), n)
                          }
                        )),
                        n.setSize(null, this.$editable.outerHeight()),
                        this.$codable.data("cmEditor", n)
                    } else
                      this.$codable.on("blur", (function(e) {
                          t.context.triggerEvent("blur.codeview", t.$codable.val(), e)
                        }
                      )),
                        this.$codable.on("input", (function() {
                            t.context.triggerEvent("change.codeview", t.$codable.val(), t.$codable)
                          }
                        ))
                  }
                }, {
                  key: "deactivate",
                  value: function() {
                    if (this.CodeMirrorConstructor) {
                      var t = this.$codable.data("cmEditor");
                      this.$codable.val(t.getValue()),
                        t.toTextArea()
                    }
                    var e = this.purify(ht.value(this.$codable, this.options.prettifyHtml) || ht.emptyPara)
                      , n = this.$editable.html() !== e;
                    this.$editable.html(e),
                      this.$editable.height(this.options.height ? this.$codable.height() : "auto"),
                      this.$editor.removeClass("codeview"),
                    n && this.context.triggerEvent("change", this.$editable.html(), this.$editable),
                      this.$editable.focus(),
                      this.context.invoke("toolbar.updateCodeview", !1),
                      this.context.invoke("airPopover.updateCodeview", !1)
                  }
                }, {
                  key: "destroy",
                  value: function() {
                    this.isActivated() && this.deactivate()
                  }
                }],
              n && Ut(e.prototype, n),
              o && Ut(e, o),
                t
            }();
            function Wt(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var Kt = function() {
              function t(n) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.$document = e()(document),
                  this.$statusbar = n.layoutInfo.statusbar,
                  this.$editable = n.layoutInfo.editable,
                  this.$codable = n.layoutInfo.codable,
                  this.options = n.options
              }
              var n, o, i;
              return n = t,
              (o = [{
                key: "initialize",
                value: function() {
                  var t = this;
                  this.options.airMode || this.options.disableResizeEditor ? this.destroy() : this.$statusbar.on("mousedown", (function(e) {
                      e.preventDefault(),
                        e.stopPropagation();
                      var n = t.$editable.offset().top - t.$document.scrollTop()
                        , o = t.$codable.offset().top - t.$document.scrollTop()
                        , i = function(e) {
                        var i = e.clientY - (n + 24)
                          , r = e.clientY - (o + 24);
                        i = t.options.minheight > 0 ? Math.max(i, t.options.minheight) : i,
                          i = t.options.maxHeight > 0 ? Math.min(i, t.options.maxHeight) : i,
                          r = t.options.minheight > 0 ? Math.max(r, t.options.minheight) : r,
                          r = t.options.maxHeight > 0 ? Math.min(r, t.options.maxHeight) : r,
                          t.$editable.height(i),
                          t.$codable.height(r)
                      };
                      t.$document.on("mousemove", i).one("mouseup", (function() {
                          t.$document.off("mousemove", i)
                        }
                      ))
                    }
                  ))
                }
              }, {
                key: "destroy",
                value: function() {
                  this.$statusbar.off(),
                    this.$statusbar.addClass("locked")
                }
              }]) && Wt(n.prototype, o),
              i && Wt(n, i),
                t
            }();
            function Vt(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var qt = function() {
              function t(n) {
                var o = this;
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.$editor = n.layoutInfo.editor,
                  this.$toolbar = n.layoutInfo.toolbar,
                  this.$editable = n.layoutInfo.editable,
                  this.$codable = n.layoutInfo.codable,
                  this.$window = e()(window),
                  this.$scrollbar = e()("html, body"),
                  this.scrollbarClassName = "note-fullscreen-body",
                  this.onResize = function() {
                    o.resizeTo({
                      h: o.$window.height() - o.$toolbar.outerHeight()
                    })
                  }
              }
              var n, o, i;
              return n = t,
              (o = [{
                key: "resizeTo",
                value: function(t) {
                  this.$editable.css("height", t.h),
                    this.$codable.css("height", t.h),
                  this.$codable.data("cmeditor") && this.$codable.data("cmeditor").setsize(null, t.h)
                }
              }, {
                key: "toggle",
                value: function() {
                  this.$editor.toggleClass("fullscreen");
                  var t = this.isFullscreen();
                  this.$scrollbar.toggleClass(this.scrollbarClassName, t),
                    t ? (this.$editable.data("orgHeight", this.$editable.css("height")),
                      this.$editable.data("orgMaxHeight", this.$editable.css("maxHeight")),
                      this.$editable.css("maxHeight", ""),
                      this.$window.on("resize", this.onResize).trigger("resize")) : (this.$window.off("resize", this.onResize),
                      this.resizeTo({
                        h: this.$editable.data("orgHeight")
                      }),
                      this.$editable.css("maxHeight", this.$editable.css("orgMaxHeight"))),
                    this.context.invoke("toolbar.updateFullscreen", t)
                }
              }, {
                key: "isFullscreen",
                value: function() {
                  return this.$editor.hasClass("fullscreen")
                }
              }, {
                key: "destroy",
                value: function() {
                  this.$scrollbar.removeClass(this.scrollbarClassName)
                }
              }]) && Vt(n.prototype, o),
              i && Vt(n, i),
                t
            }();
            function _t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var Gt = function() {
              function t(n) {
                var o = this;
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.$document = e()(document),
                  this.$editingArea = n.layoutInfo.editingArea,
                  this.options = n.options,
                  this.lang = this.options.langInfo,
                  this.events = {
                    "summernote.mousedown": function(t, e) {
                      o.update(e.target, e) && e.preventDefault()
                    },
                    "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown": function() {
                      o.update()
                    },
                    "summernote.disable summernote.blur": function() {
                      o.hide()
                    },
                    "summernote.codeview.toggled": function() {
                      o.update()
                    }
                  }
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "initialize",
                  value: function() {
                    var t = this;
                    this.$handle = e()(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', this.options.disableResizeImage ? "note-control-holder" : "note-control-sizing", ' note-control-se"></div>', this.options.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>', "</div>", "</div>"].join("")).prependTo(this.$editingArea),
                      this.$handle.on("mousedown", (function(e) {
                          if (ht.isControlSizing(e.target)) {
                            e.preventDefault(),
                              e.stopPropagation();
                            var n = t.$handle.find(".note-control-selection").data("target")
                              , o = n.offset()
                              , i = t.$document.scrollTop()
                              , r = function(e) {
                              t.context.invoke("editor.resizeTo", {
                                x: e.clientX - o.left,
                                y: e.clientY - (o.top - i)
                              }, n, !e.shiftKey),
                                t.update(n[0], e)
                            };
                            t.$document.on("mousemove", r).one("mouseup", (function(e) {
                                e.preventDefault(),
                                  t.$document.off("mousemove", r),
                                  t.context.invoke("editor.afterCommand")
                              }
                            )),
                            n.data("ratio") || n.data("ratio", n.height() / n.width())
                          }
                        }
                      )),
                      this.$handle.on("wheel", (function(e) {
                          e.preventDefault(),
                            t.update()
                        }
                      ))
                  }
                }, {
                  key: "destroy",
                  value: function() {
                    this.$handle.remove()
                  }
                }, {
                  key: "update",
                  value: function(t, n) {
                    if (this.context.isDisabled())
                      return !1;
                    var o = ht.isImg(t)
                      , i = this.$handle.find(".note-control-selection");
                    if (this.context.invoke("imagePopover.update", t, n),
                      o) {
                      var r = e()(t)
                        , a = r.position()
                        , s = {
                        left: a.left + parseInt(r.css("marginLeft"), 10),
                        top: a.top + parseInt(r.css("marginTop"), 10)
                      }
                        , l = {
                        w: r.outerWidth(!1),
                        h: r.outerHeight(!1)
                      };
                      i.css({
                        display: "block",
                        left: s.left,
                        top: s.top,
                        width: l.w,
                        height: l.h
                      }).data("target", r);
                      var c = new Image;
                      c.src = r.attr("src");
                      var u = l.w + "x" + l.h + " (" + this.lang.image.original + ": " + c.width + "x" + c.height + ")";
                      i.find(".note-control-selection-info").text(u),
                        this.context.invoke("editor.saveTarget", t)
                    } else
                      this.hide();
                    return o
                  }
                }, {
                  key: "hide",
                  value: function() {
                    this.context.invoke("editor.clearTarget"),
                      this.$handle.children().hide()
                  }
                }],
              o && _t(n.prototype, o),
              i && _t(n, i),
                t
            }();
            function Yt(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var Zt = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@|xmpp:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i
              , Qt = function() {
              function t(e) {
                var n = this;
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = e,
                  this.options = e.options,
                  this.events = {
                    "summernote.keyup": function(t, e) {
                      e.isDefaultPrevented() || n.handleKeyup(e)
                    },
                    "summernote.keydown": function(t, e) {
                      n.handleKeydown(e)
                    }
                  }
              }
              var n, o, i;
              return n = t,
              (o = [{
                key: "initialize",
                value: function() {
                  this.lastWordRange = null
                }
              }, {
                key: "destroy",
                value: function() {
                  this.lastWordRange = null
                }
              }, {
                key: "replace",
                value: function() {
                  if (this.lastWordRange) {
                    var t = this.lastWordRange.toString()
                      , n = t.match(Zt);
                    if (n && (n[1] || n[2])) {
                      var o = n[1] ? t : "http://" + t
                        , i = this.options.showDomainOnlyForAutolink ? t.replace(/^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:xmpp?:?)?(?:www\.)?/i, "").split("/")[0] : t
                        , r = e()("<a></a>").html(i).attr("href", o)[0];
                      this.context.options.linkTargetBlank && e()(r).attr("target", "_blank"),
                        this.lastWordRange.insertNode(r),
                        this.lastWordRange = null,
                        this.context.invoke("editor.focus")
                    }
                  }
                }
              }, {
                key: "handleKeydown",
                value: function(t) {
                  if (k.contains([wt.code.ENTER, wt.code.SPACE], t.keyCode)) {
                    var e = this.context.invoke("editor.createRange").getWordRange();
                    this.lastWordRange = e
                  }
                }
              }, {
                key: "handleKeyup",
                value: function(t) {
                  k.contains([wt.code.ENTER, wt.code.SPACE], t.keyCode) && this.replace()
                }
              }]) && Yt(n.prototype, o),
              i && Yt(n, i),
                t
            }();
            function Xt(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var Jt = function() {
              function t(e) {
                var n = this;
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.$note = e.layoutInfo.note,
                  this.events = {
                    "summernote.change": function() {
                      n.$note.val(e.invoke("code"))
                    }
                  }
              }
              var e, n, o;
              return e = t,
              (n = [{
                key: "shouldInitialize",
                value: function() {
                  return ht.isTextarea(this.$note[0])
                }
              }]) && Xt(e.prototype, n),
              o && Xt(e, o),
                t
            }();
            function te(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var ee = function() {
              function t(e) {
                var n = this;
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = e,
                  this.options = e.options.replace || {},
                  this.keys = [wt.code.ENTER, wt.code.SPACE, wt.code.PERIOD, wt.code.COMMA, wt.code.SEMICOLON, wt.code.SLASH],
                  this.previousKeydownCode = null,
                  this.events = {
                    "summernote.keyup": function(t, e) {
                      e.isDefaultPrevented() || n.handleKeyup(e)
                    },
                    "summernote.keydown": function(t, e) {
                      n.handleKeydown(e)
                    }
                  }
              }
              var e, n, o;
              return e = t,
              (n = [{
                key: "shouldInitialize",
                value: function() {
                  return !!this.options.match
                }
              }, {
                key: "initialize",
                value: function() {
                  this.lastWord = null
                }
              }, {
                key: "destroy",
                value: function() {
                  this.lastWord = null
                }
              }, {
                key: "replace",
                value: function() {
                  if (this.lastWord) {
                    var t = this
                      , e = this.lastWord.toString();
                    this.options.match(e, (function(e) {
                        if (e) {
                          var n = "";
                          if ("string" == typeof e ? n = ht.createText(e) : e instanceof jQuery ? n = e[0] : e instanceof Node && (n = e),
                            !n)
                            return;
                          t.lastWord.insertNode(n),
                            t.lastWord = null,
                            t.context.invoke("editor.focus")
                        }
                      }
                    ))
                  }
                }
              }, {
                key: "handleKeydown",
                value: function(t) {
                  if (this.previousKeydownCode && k.contains(this.keys, this.previousKeydownCode))
                    this.previousKeydownCode = t.keyCode;
                  else {
                    if (k.contains(this.keys, t.keyCode)) {
                      var e = this.context.invoke("editor.createRange").getWordRange();
                      this.lastWord = e
                    }
                    this.previousKeydownCode = t.keyCode
                  }
                }
              }, {
                key: "handleKeyup",
                value: function(t) {
                  k.contains(this.keys, t.keyCode) && this.replace()
                }
              }]) && te(e.prototype, n),
              o && te(e, o),
                t
            }();
            function ne(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var oe = function() {
              function t(e) {
                var n = this;
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = e,
                  this.$editingArea = e.layoutInfo.editingArea,
                  this.options = e.options,
                !0 === this.options.inheritPlaceholder && (this.options.placeholder = this.context.$note.attr("placeholder") || this.options.placeholder),
                  this.events = {
                    "summernote.init summernote.change": function() {
                      n.update()
                    },
                    "summernote.codeview.toggled": function() {
                      n.update()
                    }
                  }
              }
              var n, o, i;
              return n = t,
              (o = [{
                key: "shouldInitialize",
                value: function() {
                  return !!this.options.placeholder
                }
              }, {
                key: "initialize",
                value: function() {
                  var t = this;
                  this.$placeholder = e()('<div class="note-placeholder"></div>'),
                    this.$placeholder.on("click", (function() {
                        t.context.invoke("focus")
                      }
                    )).html(this.options.placeholder).prependTo(this.$editingArea),
                    this.update()
                }
              }, {
                key: "destroy",
                value: function() {
                  this.$placeholder.remove()
                }
              }, {
                key: "update",
                value: function() {
                  var t = !this.context.invoke("codeview.isActivated") && this.context.invoke("editor.isEmpty");
                  this.$placeholder.toggle(t)
                }
              }]) && ne(n.prototype, o),
              i && ne(n, i),
                t
            }();
            function ie(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var re = function() {
              function t(n) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.ui = e().summernote.ui,
                  this.context = n,
                  this.$toolbar = n.layoutInfo.toolbar,
                  this.options = n.options,
                  this.lang = this.options.langInfo,
                  this.invertedKeyMap = m.invertObject(this.options.keyMap[f.isMac ? "mac" : "pc"])
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "representShortcut",
                  value: function(t) {
                    var e = this.invertedKeyMap[t];
                    return this.options.shortcuts && e ? (f.isMac && (e = e.replace("CMD", "⌘").replace("SHIFT", "⇧")),
                    " (" + (e = e.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")) + ")") : ""
                  }
                }, {
                  key: "button",
                  value: function(t) {
                    return !this.options.tooltip && t.tooltip && delete t.tooltip,
                      t.container = this.options.container,
                      this.ui.button(t)
                  }
                }, {
                  key: "initialize",
                  value: function() {
                    this.addToolbarButtons(),
                      this.addImagePopoverButtons(),
                      this.addLinkPopoverButtons(),
                      this.addTablePopoverButtons(),
                      this.fontInstalledMap = {}
                  }
                }, {
                  key: "destroy",
                  value: function() {
                    delete this.fontInstalledMap
                  }
                }, {
                  key: "isFontInstalled",
                  value: function(t) {
                    return Object.prototype.hasOwnProperty.call(this.fontInstalledMap, t) || (this.fontInstalledMap[t] = f.isFontInstalled(t) || k.contains(this.options.fontNamesIgnoreCheck, t)),
                      this.fontInstalledMap[t]
                  }
                }, {
                  key: "isFontDeservedToAdd",
                  value: function(t) {
                    return "" !== (t = t.toLowerCase()) && this.isFontInstalled(t) && -1 === f.genericFontFamilies.indexOf(t)
                  }
                }, {
                  key: "colorPalette",
                  value: function(t, n, o, i) {
                    var r = this;
                    return this.ui.buttonGroup({
                      className: "note-color " + t,
                      children: [this.button({
                        className: "note-current-color-button",
                        contents: this.ui.icon(this.options.icons.font + " note-recent-color"),
                        tooltip: n,
                        click: function(t) {
                          var n = e()(t.currentTarget);
                          o && i ? r.context.invoke("editor.color", {
                            backColor: n.attr("data-backColor"),
                            foreColor: n.attr("data-foreColor")
                          }) : o ? r.context.invoke("editor.color", {
                            backColor: n.attr("data-backColor")
                          }) : i && r.context.invoke("editor.color", {
                            foreColor: n.attr("data-foreColor")
                          })
                        },
                        callback: function(t) {
                          var e = t.find(".note-recent-color");
                          o && (e.css("background-color", r.options.colorButton.backColor),
                            t.attr("data-backColor", r.options.colorButton.backColor)),
                            i ? (e.css("color", r.options.colorButton.foreColor),
                              t.attr("data-foreColor", r.options.colorButton.foreColor)) : e.css("color", "transparent")
                        }
                      }), this.button({
                        className: "dropdown-toggle",
                        contents: this.ui.dropdownButtonContents("", this.options),
                        tooltip: this.lang.color.more,
                        data: {
                          toggle: "dropdown"
                        }
                      }), this.ui.dropdown({
                        items: (o ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.background + "</div>", "<div>", '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="backColor" data-value="transparent">', this.lang.color.transparent, "</button>", "</div>", '<div class="note-holder" data-event="backColor">\x3c!-- back colors --\x3e</div>', "<div>", '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="backColorPicker-' + this.options.id + '">', this.lang.color.cpSelect, "</button>", '<input type="color" id="backColorPicker-' + this.options.id + '" class="note-btn note-color-select-btn" value="' + this.options.colorButton.backColor + '" data-event="backColorPalette-' + this.options.id + '">', "</div>", '<div class="note-holder-custom" id="backColorPalette-' + this.options.id + '" data-event="backColor"></div>', "</div>"].join("") : "") + (i ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.foreground + "</div>", "<div>", '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="removeFormat" data-value="foreColor">', this.lang.color.resetToDefault, "</button>", "</div>", '<div class="note-holder" data-event="foreColor">\x3c!-- fore colors --\x3e</div>', "<div>", '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="foreColorPicker-' + this.options.id + '">', this.lang.color.cpSelect, "</button>", '<input type="color" id="foreColorPicker-' + this.options.id + '" class="note-btn note-color-select-btn" value="' + this.options.colorButton.foreColor + '" data-event="foreColorPalette-' + this.options.id + '">', "</div>", '<div class="note-holder-custom" id="foreColorPalette-' + this.options.id + '" data-event="foreColor"></div>', "</div>"].join("") : ""),
                        callback: function(t) {
                          t.find(".note-holder").each((function(t, n) {
                              var o = e()(n);
                              o.append(r.ui.palette({
                                colors: r.options.colors,
                                colorsName: r.options.colorsName,
                                eventName: o.data("event"),
                                container: r.options.container,
                                tooltip: r.options.tooltip
                              }).render())
                            }
                          ));
                          var n = [["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]];
                          t.find(".note-holder-custom").each((function(t, o) {
                              var i = e()(o);
                              i.append(r.ui.palette({
                                colors: n,
                                colorsName: n,
                                eventName: i.data("event"),
                                container: r.options.container,
                                tooltip: r.options.tooltip
                              }).render())
                            }
                          )),
                            t.find("input[type=color]").each((function(n, o) {
                                e()(o).change((function() {
                                    var n = t.find("#" + e()(this).data("event")).find(".note-color-btn").first()
                                      , o = this.value.toUpperCase();
                                    n.css("background-color", o).attr("aria-label", o).attr("data-value", o).attr("data-original-title", o),
                                      n.click()
                                  }
                                ))
                              }
                            ))
                        },
                        click: function(n) {
                          n.stopPropagation();
                          var o = e()("." + t).find(".note-dropdown-menu")
                            , i = e()(n.target)
                            , a = i.data("event")
                            , s = i.attr("data-value");
                          if ("openPalette" === a) {
                            var l = o.find("#" + s)
                              , c = e()(o.find("#" + l.data("event")).find(".note-color-row")[0])
                              , u = c.find(".note-color-btn").last().detach()
                              , d = l.val();
                            u.css("background-color", d).attr("aria-label", d).attr("data-value", d).attr("data-original-title", d),
                              c.prepend(u),
                              l.click()
                          } else {
                            if (k.contains(["backColor", "foreColor"], a)) {
                              var h = "backColor" === a ? "background-color" : "color"
                                , f = i.closest(".note-color").find(".note-recent-color")
                                , p = i.closest(".note-color").find(".note-current-color-button");
                              f.css(h, s),
                                p.attr("data-" + a, s)
                            }
                            r.context.invoke("editor." + a, s)
                          }
                        }
                      })]
                    }).render()
                  }
                }, {
                  key: "addToolbarButtons",
                  value: function() {
                    var t = this;
                    this.context.memo("button.style", (function() {
                        return t.ui.buttonGroup([t.button({
                          className: "dropdown-toggle",
                          contents: t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.magic), t.options),
                          tooltip: t.lang.style.style,
                          data: {
                            toggle: "dropdown"
                          }
                        }), t.ui.dropdown({
                          className: "dropdown-style",
                          items: t.options.styleTags,
                          title: t.lang.style.style,
                          template: function(e) {
                            "string" == typeof e && (e = {
                              tag: e,
                              title: Object.prototype.hasOwnProperty.call(t.lang.style, e) ? t.lang.style[e] : e
                            });
                            var n = e.tag
                              , o = e.title;
                            return "<" + n + (e.style ? ' style="' + e.style + '" ' : "") + (e.className ? ' class="' + e.className + '"' : "") + ">" + o + "</" + n + ">"
                          },
                          click: t.context.createInvokeHandler("editor.formatBlock")
                        })]).render()
                      }
                    ));
                    for (var n = function(e, n) {
                      var o = t.options.styleTags[e];
                      t.context.memo("button.style." + o, (function() {
                          return t.button({
                            className: "note-btn-style-" + o,
                            contents: '<div data-value="' + o + '">' + o.toUpperCase() + "</div>",
                            tooltip: t.lang.style[o],
                            click: t.context.createInvokeHandler("editor.formatBlock")
                          }).render()
                        }
                      ))
                    }, o = 0, i = this.options.styleTags.length; o < i; o++)
                      n(o);
                    this.context.memo("button.bold", (function() {
                        return t.button({
                          className: "note-btn-bold",
                          contents: t.ui.icon(t.options.icons.bold),
                          tooltip: t.lang.font.bold + t.representShortcut("bold"),
                          click: t.context.createInvokeHandlerAndUpdateState("editor.bold")
                        }).render()
                      }
                    )),
                      this.context.memo("button.italic", (function() {
                          return t.button({
                            className: "note-btn-italic",
                            contents: t.ui.icon(t.options.icons.italic),
                            tooltip: t.lang.font.italic + t.representShortcut("italic"),
                            click: t.context.createInvokeHandlerAndUpdateState("editor.italic")
                          }).render()
                        }
                      )),
                      this.context.memo("button.underline", (function() {
                          return t.button({
                            className: "note-btn-underline",
                            contents: t.ui.icon(t.options.icons.underline),
                            tooltip: t.lang.font.underline + t.representShortcut("underline"),
                            click: t.context.createInvokeHandlerAndUpdateState("editor.underline")
                          }).render()
                        }
                      )),
                      this.context.memo("button.clear", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.eraser),
                            tooltip: t.lang.font.clear + t.representShortcut("removeFormat"),
                            click: t.context.createInvokeHandler("editor.removeFormat")
                          }).render()
                        }
                      )),
                      this.context.memo("button.strikethrough", (function() {
                          return t.button({
                            className: "note-btn-strikethrough",
                            contents: t.ui.icon(t.options.icons.strikethrough),
                            tooltip: t.lang.font.strikethrough + t.representShortcut("strikethrough"),
                            click: t.context.createInvokeHandlerAndUpdateState("editor.strikethrough")
                          }).render()
                        }
                      )),
                      this.context.memo("button.superscript", (function() {
                          return t.button({
                            className: "note-btn-superscript",
                            contents: t.ui.icon(t.options.icons.superscript),
                            tooltip: t.lang.font.superscript,
                            click: t.context.createInvokeHandlerAndUpdateState("editor.superscript")
                          }).render()
                        }
                      )),
                      this.context.memo("button.subscript", (function() {
                          return t.button({
                            className: "note-btn-subscript",
                            contents: t.ui.icon(t.options.icons.subscript),
                            tooltip: t.lang.font.subscript,
                            click: t.context.createInvokeHandlerAndUpdateState("editor.subscript")
                          }).render()
                        }
                      )),
                      this.context.memo("button.fontname", (function() {
                          var n = t.context.invoke("editor.currentStyle");
                          return t.options.addDefaultFonts && e().each(n["font-family"].split(","), (function(e, n) {
                              n = n.trim().replace(/['"]+/g, ""),
                              t.isFontDeservedToAdd(n) && -1 === t.options.fontNames.indexOf(n) && t.options.fontNames.push(n)
                            }
                          )),
                            t.ui.buttonGroup([t.button({
                              className: "dropdown-toggle",
                              contents: t.ui.dropdownButtonContents('<span class="note-current-fontname"></span>', t.options),
                              tooltip: t.lang.font.name,
                              data: {
                                toggle: "dropdown"
                              }
                            }), t.ui.dropdownCheck({
                              className: "dropdown-fontname",
                              checkClassName: t.options.icons.menuCheck,
                              items: t.options.fontNames.filter(t.isFontInstalled.bind(t)),
                              title: t.lang.font.name,
                              template: function(t) {
                                return '<span style="font-family: ' + f.validFontName(t) + '">' + t + "</span>"
                              },
                              click: t.context.createInvokeHandlerAndUpdateState("editor.fontName")
                            })]).render()
                        }
                      )),
                      this.context.memo("button.fontsize", (function() {
                          return t.ui.buttonGroup([t.button({
                            className: "dropdown-toggle",
                            contents: t.ui.dropdownButtonContents('<span class="note-current-fontsize"></span>', t.options),
                            tooltip: t.lang.font.size,
                            data: {
                              toggle: "dropdown"
                            }
                          }), t.ui.dropdownCheck({
                            className: "dropdown-fontsize",
                            checkClassName: t.options.icons.menuCheck,
                            items: t.options.fontSizes,
                            title: t.lang.font.size,
                            click: t.context.createInvokeHandlerAndUpdateState("editor.fontSize")
                          })]).render()
                        }
                      )),
                      this.context.memo("button.fontsizeunit", (function() {
                          return t.ui.buttonGroup([t.button({
                            className: "dropdown-toggle",
                            contents: t.ui.dropdownButtonContents('<span class="note-current-fontsizeunit"></span>', t.options),
                            tooltip: t.lang.font.sizeunit,
                            data: {
                              toggle: "dropdown"
                            }
                          }), t.ui.dropdownCheck({
                            className: "dropdown-fontsizeunit",
                            checkClassName: t.options.icons.menuCheck,
                            items: t.options.fontSizeUnits,
                            title: t.lang.font.sizeunit,
                            click: t.context.createInvokeHandlerAndUpdateState("editor.fontSizeUnit")
                          })]).render()
                        }
                      )),
                      this.context.memo("button.color", (function() {
                          return t.colorPalette("note-color-all", t.lang.color.recent, !0, !0)
                        }
                      )),
                      this.context.memo("button.forecolor", (function() {
                          return t.colorPalette("note-color-fore", t.lang.color.foreground, !1, !0)
                        }
                      )),
                      this.context.memo("button.backcolor", (function() {
                          return t.colorPalette("note-color-back", t.lang.color.background, !0, !1)
                        }
                      )),
                      this.context.memo("button.ul", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.unorderedlist),
                            tooltip: t.lang.lists.unordered + t.representShortcut("insertUnorderedList"),
                            click: t.context.createInvokeHandler("editor.insertUnorderedList")
                          }).render()
                        }
                      )),
                      this.context.memo("button.ol", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.orderedlist),
                            tooltip: t.lang.lists.ordered + t.representShortcut("insertOrderedList"),
                            click: t.context.createInvokeHandler("editor.insertOrderedList")
                          }).render()
                        }
                      ));
                    var r = this.button({
                      contents: this.ui.icon(this.options.icons.alignLeft),
                      tooltip: this.lang.paragraph.left + this.representShortcut("justifyLeft"),
                      click: this.context.createInvokeHandler("editor.justifyLeft")
                    })
                      , a = this.button({
                      contents: this.ui.icon(this.options.icons.alignCenter),
                      tooltip: this.lang.paragraph.center + this.representShortcut("justifyCenter"),
                      click: this.context.createInvokeHandler("editor.justifyCenter")
                    })
                      , s = this.button({
                      contents: this.ui.icon(this.options.icons.alignRight),
                      tooltip: this.lang.paragraph.right + this.representShortcut("justifyRight"),
                      click: this.context.createInvokeHandler("editor.justifyRight")
                    })
                      , l = this.button({
                      contents: this.ui.icon(this.options.icons.alignJustify),
                      tooltip: this.lang.paragraph.justify + this.representShortcut("justifyFull"),
                      click: this.context.createInvokeHandler("editor.justifyFull")
                    })
                      , c = this.button({
                      contents: this.ui.icon(this.options.icons.outdent),
                      tooltip: this.lang.paragraph.outdent + this.representShortcut("outdent"),
                      click: this.context.createInvokeHandler("editor.outdent")
                    })
                      , u = this.button({
                      contents: this.ui.icon(this.options.icons.indent),
                      tooltip: this.lang.paragraph.indent + this.representShortcut("indent"),
                      click: this.context.createInvokeHandler("editor.indent")
                    });
                    this.context.memo("button.justifyLeft", m.invoke(r, "render")),
                      this.context.memo("button.justifyCenter", m.invoke(a, "render")),
                      this.context.memo("button.justifyRight", m.invoke(s, "render")),
                      this.context.memo("button.justifyFull", m.invoke(l, "render")),
                      this.context.memo("button.outdent", m.invoke(c, "render")),
                      this.context.memo("button.indent", m.invoke(u, "render")),
                      this.context.memo("button.paragraph", (function() {
                          return t.ui.buttonGroup([t.button({
                            className: "dropdown-toggle",
                            contents: t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.alignLeft), t.options),
                            tooltip: t.lang.paragraph.paragraph,
                            data: {
                              toggle: "dropdown"
                            }
                          }), t.ui.dropdown([t.ui.buttonGroup({
                            className: "note-align",
                            children: [r, a, s, l]
                          }), t.ui.buttonGroup({
                            className: "note-list",
                            children: [c, u]
                          })])]).render()
                        }
                      )),
                      this.context.memo("button.height", (function() {
                          return t.ui.buttonGroup([t.button({
                            className: "dropdown-toggle",
                            contents: t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.textHeight), t.options),
                            tooltip: t.lang.font.height,
                            data: {
                              toggle: "dropdown"
                            }
                          }), t.ui.dropdownCheck({
                            items: t.options.lineHeights,
                            checkClassName: t.options.icons.menuCheck,
                            className: "dropdown-line-height",
                            title: t.lang.font.height,
                            click: t.context.createInvokeHandler("editor.lineHeight")
                          })]).render()
                        }
                      )),
                      this.context.memo("button.table", (function() {
                          return t.ui.buttonGroup([t.button({
                            className: "dropdown-toggle",
                            contents: t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.table), t.options),
                            tooltip: t.lang.table.table,
                            data: {
                              toggle: "dropdown"
                            }
                          }), t.ui.dropdown({
                            title: t.lang.table.table,
                            className: "note-table",
                            items: ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>', '<div class="note-dimension-picker-highlighted"></div>', '<div class="note-dimension-picker-unhighlighted"></div>', "</div>", '<div class="note-dimension-display">1 x 1</div>'].join("")
                          })], {
                            callback: function(e) {
                              e.find(".note-dimension-picker-mousecatcher").css({
                                width: t.options.insertTableMaxSize.col + "em",
                                height: t.options.insertTableMaxSize.row + "em"
                              }).mouseup(t.context.createInvokeHandler("editor.insertTable")).on("mousemove", t.tableMoveHandler.bind(t))
                            }
                          }).render()
                        }
                      )),
                      this.context.memo("button.link", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.link),
                            tooltip: t.lang.link.link + t.representShortcut("linkDialog.show"),
                            click: t.context.createInvokeHandler("linkDialog.show")
                          }).render()
                        }
                      )),
                      this.context.memo("button.picture", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.picture),
                            tooltip: t.lang.image.image,
                            click: t.context.createInvokeHandler("imageDialog.show")
                          }).render()
                        }
                      )),
                      this.context.memo("button.video", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.video),
                            tooltip: t.lang.video.video,
                            click: t.context.createInvokeHandler("videoDialog.show")
                          }).render()
                        }
                      )),
                      this.context.memo("button.hr", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.minus),
                            tooltip: t.lang.hr.insert + t.representShortcut("insertHorizontalRule"),
                            click: t.context.createInvokeHandler("editor.insertHorizontalRule")
                          }).render()
                        }
                      )),
                      this.context.memo("button.fullscreen", (function() {
                          return t.button({
                            className: "btn-fullscreen note-codeview-keep",
                            contents: t.ui.icon(t.options.icons.arrowsAlt),
                            tooltip: t.lang.options.fullscreen,
                            click: t.context.createInvokeHandler("fullscreen.toggle")
                          }).render()
                        }
                      )),
                      this.context.memo("button.codeview", (function() {
                          return t.button({
                            className: "btn-codeview note-codeview-keep",
                            contents: t.ui.icon(t.options.icons.code),
                            tooltip: t.lang.options.codeview,
                            click: t.context.createInvokeHandler("codeview.toggle")
                          }).render()
                        }
                      )),
                      this.context.memo("button.redo", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.redo),
                            tooltip: t.lang.history.redo + t.representShortcut("redo"),
                            click: t.context.createInvokeHandler("editor.redo")
                          }).render()
                        }
                      )),
                      this.context.memo("button.undo", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.undo),
                            tooltip: t.lang.history.undo + t.representShortcut("undo"),
                            click: t.context.createInvokeHandler("editor.undo")
                          }).render()
                        }
                      )),
                      this.context.memo("button.help", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.question),
                            tooltip: t.lang.options.help,
                            click: t.context.createInvokeHandler("helpDialog.show")
                          }).render()
                        }
                      ))
                  }
                }, {
                  key: "addImagePopoverButtons",
                  value: function() {
                    var t = this;
                    this.context.memo("button.resizeFull", (function() {
                        return t.button({
                          contents: '<span class="note-fontsize-10">100%</span>',
                          tooltip: t.lang.image.resizeFull,
                          click: t.context.createInvokeHandler("editor.resize", "1")
                        }).render()
                      }
                    )),
                      this.context.memo("button.resizeHalf", (function() {
                          return t.button({
                            contents: '<span class="note-fontsize-10">50%</span>',
                            tooltip: t.lang.image.resizeHalf,
                            click: t.context.createInvokeHandler("editor.resize", "0.5")
                          }).render()
                        }
                      )),
                      this.context.memo("button.resizeQuarter", (function() {
                          return t.button({
                            contents: '<span class="note-fontsize-10">25%</span>',
                            tooltip: t.lang.image.resizeQuarter,
                            click: t.context.createInvokeHandler("editor.resize", "0.25")
                          }).render()
                        }
                      )),
                      this.context.memo("button.resizeNone", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.rollback),
                            tooltip: t.lang.image.resizeNone,
                            click: t.context.createInvokeHandler("editor.resize", "0")
                          }).render()
                        }
                      )),
                      this.context.memo("button.floatLeft", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.floatLeft),
                            tooltip: t.lang.image.floatLeft,
                            click: t.context.createInvokeHandler("editor.floatMe", "left")
                          }).render()
                        }
                      )),
                      this.context.memo("button.floatRight", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.floatRight),
                            tooltip: t.lang.image.floatRight,
                            click: t.context.createInvokeHandler("editor.floatMe", "right")
                          }).render()
                        }
                      )),
                      this.context.memo("button.floatNone", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.rollback),
                            tooltip: t.lang.image.floatNone,
                            click: t.context.createInvokeHandler("editor.floatMe", "none")
                          }).render()
                        }
                      )),
                      this.context.memo("button.removeMedia", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.trash),
                            tooltip: t.lang.image.remove,
                            click: t.context.createInvokeHandler("editor.removeMedia")
                          }).render()
                        }
                      ))
                  }
                }, {
                  key: "addLinkPopoverButtons",
                  value: function() {
                    var t = this;
                    this.context.memo("button.linkDialogShow", (function() {
                        return t.button({
                          contents: t.ui.icon(t.options.icons.link),
                          tooltip: t.lang.link.edit,
                          click: t.context.createInvokeHandler("linkDialog.show")
                        }).render()
                      }
                    )),
                      this.context.memo("button.unlink", (function() {
                          return t.button({
                            contents: t.ui.icon(t.options.icons.unlink),
                            tooltip: t.lang.link.unlink,
                            click: t.context.createInvokeHandler("editor.unlink")
                          }).render()
                        }
                      ))
                  }
                }, {
                  key: "addTablePopoverButtons",
                  value: function() {
                    var t = this;
                    this.context.memo("button.addRowUp", (function() {
                        return t.button({
                          className: "btn-md",
                          contents: t.ui.icon(t.options.icons.rowAbove),
                          tooltip: t.lang.table.addRowAbove,
                          click: t.context.createInvokeHandler("editor.addRow", "top")
                        }).render()
                      }
                    )),
                      this.context.memo("button.addRowDown", (function() {
                          return t.button({
                            className: "btn-md",
                            contents: t.ui.icon(t.options.icons.rowBelow),
                            tooltip: t.lang.table.addRowBelow,
                            click: t.context.createInvokeHandler("editor.addRow", "bottom")
                          }).render()
                        }
                      )),
                      this.context.memo("button.addColLeft", (function() {
                          return t.button({
                            className: "btn-md",
                            contents: t.ui.icon(t.options.icons.colBefore),
                            tooltip: t.lang.table.addColLeft,
                            click: t.context.createInvokeHandler("editor.addCol", "left")
                          }).render()
                        }
                      )),
                      this.context.memo("button.addColRight", (function() {
                          return t.button({
                            className: "btn-md",
                            contents: t.ui.icon(t.options.icons.colAfter),
                            tooltip: t.lang.table.addColRight,
                            click: t.context.createInvokeHandler("editor.addCol", "right")
                          }).render()
                        }
                      )),
                      this.context.memo("button.deleteRow", (function() {
                          return t.button({
                            className: "btn-md",
                            contents: t.ui.icon(t.options.icons.rowRemove),
                            tooltip: t.lang.table.delRow,
                            click: t.context.createInvokeHandler("editor.deleteRow")
                          }).render()
                        }
                      )),
                      this.context.memo("button.deleteCol", (function() {
                          return t.button({
                            className: "btn-md",
                            contents: t.ui.icon(t.options.icons.colRemove),
                            tooltip: t.lang.table.delCol,
                            click: t.context.createInvokeHandler("editor.deleteCol")
                          }).render()
                        }
                      )),
                      this.context.memo("button.deleteTable", (function() {
                          return t.button({
                            className: "btn-md",
                            contents: t.ui.icon(t.options.icons.trash),
                            tooltip: t.lang.table.delTable,
                            click: t.context.createInvokeHandler("editor.deleteTable")
                          }).render()
                        }
                      ))
                  }
                }, {
                  key: "build",
                  value: function(t, e) {
                    for (var n = 0, o = e.length; n < o; n++) {
                      for (var i = e[n], r = Array.isArray(i) ? i[0] : i, a = Array.isArray(i) ? 1 === i.length ? [i[0]] : i[1] : [i], s = this.ui.buttonGroup({
                        className: "note-" + r
                      }).render(), l = 0, c = a.length; l < c; l++) {
                        var u = this.context.memo("button." + a[l]);
                        u && s.append("function" == typeof u ? u(this.context) : u)
                      }
                      s.appendTo(t)
                    }
                  }
                }, {
                  key: "updateCurrentStyle",
                  value: function(t) {
                    var n = t || this.$toolbar
                      , o = this.context.invoke("editor.currentStyle");
                    if (this.updateBtnStates(n, {
                      ".note-btn-bold": function() {
                        return "bold" === o["font-bold"]
                      },
                      ".note-btn-italic": function() {
                        return "italic" === o["font-italic"]
                      },
                      ".note-btn-underline": function() {
                        return "underline" === o["font-underline"]
                      },
                      ".note-btn-subscript": function() {
                        return "subscript" === o["font-subscript"]
                      },
                      ".note-btn-superscript": function() {
                        return "superscript" === o["font-superscript"]
                      },
                      ".note-btn-strikethrough": function() {
                        return "strikethrough" === o["font-strikethrough"]
                      }
                    }),
                      o["font-family"]) {
                      var i = o["font-family"].split(",").map((function(t) {
                          return t.replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, "")
                        }
                      ))
                        , r = k.find(i, this.isFontInstalled.bind(this));
                      n.find(".dropdown-fontname a").each((function(t, n) {
                          var o = e()(n)
                            , i = o.data("value") + "" == r + "";
                          o.toggleClass("checked", i)
                        }
                      )),
                        n.find(".note-current-fontname").text(r).css("font-family", r)
                    }
                    if (o["font-size"]) {
                      var a = o["font-size"];
                      n.find(".dropdown-fontsize a").each((function(t, n) {
                          var o = e()(n)
                            , i = o.data("value") + "" == a + "";
                          o.toggleClass("checked", i)
                        }
                      )),
                        n.find(".note-current-fontsize").text(a);
                      var s = o["font-size-unit"];
                      n.find(".dropdown-fontsizeunit a").each((function(t, n) {
                          var o = e()(n)
                            , i = o.data("value") + "" == s + "";
                          o.toggleClass("checked", i)
                        }
                      )),
                        n.find(".note-current-fontsizeunit").text(s)
                    }
                    if (o["line-height"]) {
                      var l = o["line-height"];
                      n.find(".dropdown-line-height a").each((function(t, n) {
                          var o = e()(n)
                            , i = e()(n).data("value") + "" == l + "";
                          o.toggleClass("checked", i)
                        }
                      )),
                        n.find(".note-current-line-height").text(l)
                    }
                  }
                }, {
                  key: "updateBtnStates",
                  value: function(t, n) {
                    var o = this;
                    e().each(n, (function(e, n) {
                        o.ui.toggleBtnActive(t.find(e), n())
                      }
                    ))
                  }
                }, {
                  key: "tableMoveHandler",
                  value: function(t) {
                    var n, o = e()(t.target.parentNode), i = o.next(), r = o.find(".note-dimension-picker-mousecatcher"), a = o.find(".note-dimension-picker-highlighted"), s = o.find(".note-dimension-picker-unhighlighted");
                    if (void 0 === t.offsetX) {
                      var l = e()(t.target).offset();
                      n = {
                        x: t.pageX - l.left,
                        y: t.pageY - l.top
                      }
                    } else
                      n = {
                        x: t.offsetX,
                        y: t.offsetY
                      };
                    var c = Math.ceil(n.x / 18) || 1
                      , u = Math.ceil(n.y / 18) || 1;
                    a.css({
                      width: c + "em",
                      height: u + "em"
                    }),
                      r.data("value", c + "x" + u),
                    c > 3 && c < this.options.insertTableMaxSize.col && s.css({
                      width: c + 1 + "em"
                    }),
                    u > 3 && u < this.options.insertTableMaxSize.row && s.css({
                      height: u + 1 + "em"
                    }),
                      i.html(c + " x " + u)
                  }
                }],
              o && ie(n.prototype, o),
              i && ie(n, i),
                t
            }();
            function ae(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var se = function() {
              function t(n) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.$window = e()(window),
                  this.$document = e()(document),
                  this.ui = e().summernote.ui,
                  this.$note = n.layoutInfo.note,
                  this.$editor = n.layoutInfo.editor,
                  this.$toolbar = n.layoutInfo.toolbar,
                  this.$editable = n.layoutInfo.editable,
                  this.$statusbar = n.layoutInfo.statusbar,
                  this.options = n.options,
                  this.isFollowing = !1,
                  this.followScroll = this.followScroll.bind(this)
              }
              var n, o, i;
              return n = t,
              (o = [{
                key: "shouldInitialize",
                value: function() {
                  return !this.options.airMode
                }
              }, {
                key: "initialize",
                value: function() {
                  var t = this;
                  this.options.toolbar = this.options.toolbar || [],
                    this.options.toolbar.length ? this.context.invoke("buttons.build", this.$toolbar, this.options.toolbar) : this.$toolbar.hide(),
                  this.options.toolbarContainer && this.$toolbar.appendTo(this.options.toolbarContainer),
                    this.changeContainer(!1),
                    this.$note.on("summernote.keyup summernote.mouseup summernote.change", (function() {
                        t.context.invoke("buttons.updateCurrentStyle")
                      }
                    )),
                    this.context.invoke("buttons.updateCurrentStyle"),
                  this.options.followingToolbar && this.$window.on("scroll resize", this.followScroll)
                }
              }, {
                key: "destroy",
                value: function() {
                  this.$toolbar.children().remove(),
                  this.options.followingToolbar && this.$window.off("scroll resize", this.followScroll)
                }
              }, {
                key: "followScroll",
                value: function() {
                  if (this.$editor.hasClass("fullscreen"))
                    return !1;
                  var t = this.$editor.outerHeight()
                    , n = this.$editor.width()
                    , o = this.$toolbar.height()
                    , i = this.$statusbar.height()
                    , r = 0;
                  this.options.otherStaticBar && (r = e()(this.options.otherStaticBar).outerHeight());
                  var a = this.$document.scrollTop()
                    , s = this.$editor.offset().top
                    , l = s - r
                    , c = s + t - r - o - i;
                  !this.isFollowing && a > l && a < c - o ? (this.isFollowing = !0,
                    this.$editable.css({
                      marginTop: this.$toolbar.outerHeight()
                    }),
                    this.$toolbar.css({
                      position: "fixed",
                      top: r,
                      width: n,
                      zIndex: 1e3
                    })) : this.isFollowing && (a < l || a > c) && (this.isFollowing = !1,
                    this.$toolbar.css({
                      position: "relative",
                      top: 0,
                      width: "100%",
                      zIndex: "auto"
                    }),
                    this.$editable.css({
                      marginTop: ""
                    }))
                }
              }, {
                key: "changeContainer",
                value: function(t) {
                  t ? this.$toolbar.prependTo(this.$editor) : this.options.toolbarContainer && this.$toolbar.appendTo(this.options.toolbarContainer),
                  this.options.followingToolbar && this.followScroll()
                }
              }, {
                key: "updateFullscreen",
                value: function(t) {
                  this.ui.toggleBtnActive(this.$toolbar.find(".btn-fullscreen"), t),
                    this.changeContainer(t)
                }
              }, {
                key: "updateCodeview",
                value: function(t) {
                  this.ui.toggleBtnActive(this.$toolbar.find(".btn-codeview"), t),
                    t ? this.deactivate() : this.activate()
                }
              }, {
                key: "activate",
                value: function(t) {
                  var e = this.$toolbar.find("button");
                  t || (e = e.not(".note-codeview-keep")),
                    this.ui.toggleBtn(e, !0)
                }
              }, {
                key: "deactivate",
                value: function(t) {
                  var e = this.$toolbar.find("button");
                  t || (e = e.not(".note-codeview-keep")),
                    this.ui.toggleBtn(e, !1)
                }
              }]) && ae(n.prototype, o),
              i && ae(n, i),
                t
            }();
            function le(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var ce = function() {
              function t(n) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.ui = e().summernote.ui,
                  this.$body = e()(document.body),
                  this.$editor = n.layoutInfo.editor,
                  this.options = n.options,
                  this.lang = this.options.langInfo,
                  n.memo("help.linkDialog.show", this.options.langInfo.help["linkDialog.show"])
              }
              var n, o, i;
              return n = t,
              (o = [{
                key: "initialize",
                value: function() {
                  var t = this.options.dialogsInBody ? this.$body : this.options.container
                    , n = ['<div class="form-group note-form-group">', '<label for="note-dialog-link-txt-'.concat(this.options.id, '" class="note-form-label">').concat(this.lang.link.textToDisplay, "</label>"), '<input id="note-dialog-link-txt-'.concat(this.options.id, '" class="note-link-text form-control note-form-control note-input" type="text"/>'), "</div>", '<div class="form-group note-form-group">', '<label for="note-dialog-link-url-'.concat(this.options.id, '" class="note-form-label">').concat(this.lang.link.url, "</label>"), '<input id="note-dialog-link-url-'.concat(this.options.id, '" class="note-link-url form-control note-form-control note-input" type="text" value="http://"/>'), "</div>", this.options.disableLinkTarget ? "" : e()("<div></div>").append(this.ui.checkbox({
                    className: "sn-checkbox-open-in-new-window",
                    text: this.lang.link.openInNewWindow,
                    checked: !0
                  }).render()).html(), e()("<div></div>").append(this.ui.checkbox({
                    className: "sn-checkbox-use-protocol",
                    text: this.lang.link.useProtocol,
                    checked: !0
                  }).render()).html()].join("")
                    , o = '<input type="button" href="#" class="'.concat("btn btn-primary note-btn note-btn-primary note-link-btn", '" value="').concat(this.lang.link.insert, '" disabled>');
                  this.$dialog = this.ui.dialog({
                    className: "link-dialog",
                    title: this.lang.link.insert,
                    fade: this.options.dialogsFade,
                    body: n,
                    footer: o
                  }).render().appendTo(t)
                }
              }, {
                key: "destroy",
                value: function() {
                  this.ui.hideDialog(this.$dialog),
                    this.$dialog.remove()
                }
              }, {
                key: "bindEnterKey",
                value: function(t, e) {
                  t.on("keypress", (function(t) {
                      t.keyCode === wt.code.ENTER && (t.preventDefault(),
                        e.trigger("click"))
                    }
                  ))
                }
              }, {
                key: "toggleLinkBtn",
                value: function(t, e, n) {
                  this.ui.toggleBtn(t, e.val() && n.val())
                }
              }, {
                key: "showLinkDialog",
                value: function(t) {
                  var n = this;
                  return e().Deferred((function(e) {
                      var o = n.$dialog.find(".note-link-text")
                        , i = n.$dialog.find(".note-link-url")
                        , r = n.$dialog.find(".note-link-btn")
                        , a = n.$dialog.find(".sn-checkbox-open-in-new-window input[type=checkbox]")
                        , s = n.$dialog.find(".sn-checkbox-use-protocol input[type=checkbox]");
                      n.ui.onDialogShown(n.$dialog, (function() {
                          n.context.triggerEvent("dialog.shown"),
                          !t.url && m.isValidUrl(t.text) && (t.url = t.text),
                            o.on("input paste propertychange", (function() {
                                t.text = o.val(),
                                  n.toggleLinkBtn(r, o, i)
                              }
                            )).val(t.text),
                            i.on("input paste propertychange", (function() {
                                t.text || o.val(i.val()),
                                  n.toggleLinkBtn(r, o, i)
                              }
                            )).val(t.url),
                          f.isSupportTouch || i.trigger("focus"),
                            n.toggleLinkBtn(r, o, i),
                            n.bindEnterKey(i, r),
                            n.bindEnterKey(o, r);
                          var l = void 0 !== t.isNewWindow ? t.isNewWindow : n.context.options.linkTargetBlank;
                          a.prop("checked", l);
                          var c = !t.url && n.context.options.useProtocol;
                          s.prop("checked", c),
                            r.one("click", (function(r) {
                                r.preventDefault(),
                                  e.resolve({
                                    range: t.range,
                                    url: i.val(),
                                    text: o.val(),
                                    isNewWindow: a.is(":checked"),
                                    checkProtocol: s.is(":checked")
                                  }),
                                  n.ui.hideDialog(n.$dialog)
                              }
                            ))
                        }
                      )),
                        n.ui.onDialogHidden(n.$dialog, (function() {
                            o.off(),
                              i.off(),
                              r.off(),
                            "pending" === e.state() && e.reject()
                          }
                        )),
                        n.ui.showDialog(n.$dialog)
                    }
                  )).promise()
                }
              }, {
                key: "show",
                value: function() {
                  var t = this
                    , e = this.context.invoke("editor.getLinkInfo");
                  this.context.invoke("editor.saveRange"),
                    this.showLinkDialog(e).then((function(e) {
                        t.context.invoke("editor.restoreRange"),
                          t.context.invoke("editor.createLink", e)
                      }
                    )).fail((function() {
                        t.context.invoke("editor.restoreRange")
                      }
                    ))
                }
              }]) && le(n.prototype, o),
              i && le(n, i),
                t
            }();
            function ue(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var de = function() {
              function t(n) {
                var o = this;
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.ui = e().summernote.ui,
                  this.options = n.options,
                  this.events = {
                    "summernote.keyup summernote.mouseup summernote.change summernote.scroll": function() {
                      o.update()
                    },
                    "summernote.disable summernote.dialog.shown": function() {
                      o.hide()
                    },
                    "summernote.blur": function(t, e) {
                      e.originalEvent && e.originalEvent.relatedTarget && o.$popover[0].contains(e.originalEvent.relatedTarget) || o.hide()
                    }
                  }
              }
              var n, o, i;
              return n = t,
              (o = [{
                key: "shouldInitialize",
                value: function() {
                  return !k.isEmpty(this.options.popover.link)
                }
              }, {
                key: "initialize",
                value: function() {
                  this.$popover = this.ui.popover({
                    className: "note-link-popover",
                    callback: function(t) {
                      t.find(".popover-content,.note-popover-content").prepend('<span><a target="_blank"></a>&nbsp;</span>')
                    }
                  }).render().appendTo(this.options.container);
                  var t = this.$popover.find(".popover-content,.note-popover-content");
                  this.context.invoke("buttons.build", t, this.options.popover.link),
                    this.$popover.on("mousedown", (function(t) {
                        t.preventDefault()
                      }
                    ))
                }
              }, {
                key: "destroy",
                value: function() {
                  this.$popover.remove()
                }
              }, {
                key: "update",
                value: function() {
                  if (this.context.invoke("editor.hasFocus")) {
                    var t = this.context.invoke("editor.getLastRange");
                    if (t.isCollapsed() && t.isOnAnchor()) {
                      var n = ht.ancestor(t.sc, ht.isAnchor)
                        , o = e()(n).attr("href");
                      this.$popover.find("a").attr("href", o).text(o);
                      var i = ht.posFromPlaceholder(n)
                        , r = e()(this.options.container).offset();
                      i.top -= r.top,
                        i.left -= r.left,
                        this.$popover.css({
                          display: "block",
                          left: i.left,
                          top: i.top
                        })
                    } else
                      this.hide()
                  } else
                    this.hide()
                }
              }, {
                key: "hide",
                value: function() {
                  this.$popover.hide()
                }
              }]) && ue(n.prototype, o),
              i && ue(n, i),
                t
            }();
            function he(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var fe = function() {
              function t(n) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.ui = e().summernote.ui,
                  this.$body = e()(document.body),
                  this.$editor = n.layoutInfo.editor,
                  this.options = n.options,
                  this.lang = this.options.langInfo
              }
              var n, o, i;
              return n = t,
              (o = [{
                key: "initialize",
                value: function() {
                  var t = "";
                  if (this.options.maximumImageFileSize) {
                    var e = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024))
                      , n = 1 * (this.options.maximumImageFileSize / Math.pow(1024, e)).toFixed(2) + " " + " KMGTP"[e] + "B";
                    t = "<small>".concat(this.lang.image.maximumFileSize + " : " + n, "</small>")
                  }
                  var o = this.options.dialogsInBody ? this.$body : this.options.container
                    , i = ['<div class="form-group note-form-group note-group-select-from-files">', '<label for="note-dialog-image-file-' + this.options.id + '" class="note-form-label">' + this.lang.image.selectFromFiles + "</label>", '<input id="note-dialog-image-file-' + this.options.id + '" class="note-image-input form-control-file note-form-control note-input" ', ' type="file" name="files" accept="' + this.options.acceptImageFileTypes + '" multiple="multiple"/>', t, "</div>", '<div class="form-group note-group-image-url">', '<label for="note-dialog-image-url-' + this.options.id + '" class="note-form-label">' + this.lang.image.url + "</label>", '<input id="note-dialog-image-url-' + this.options.id + '" class="note-image-url form-control note-form-control note-input" type="text"/>', "</div>"].join("")
                    , r = '<input type="button" href="#" class="'.concat("btn btn-primary note-btn note-btn-primary note-image-btn", '" value="').concat(this.lang.image.insert, '" disabled>');
                  this.$dialog = this.ui.dialog({
                    title: this.lang.image.insert,
                    fade: this.options.dialogsFade,
                    body: i,
                    footer: r
                  }).render().appendTo(o)
                }
              }, {
                key: "destroy",
                value: function() {
                  this.ui.hideDialog(this.$dialog),
                    this.$dialog.remove()
                }
              }, {
                key: "bindEnterKey",
                value: function(t, e) {
                  t.on("keypress", (function(t) {
                      t.keyCode === wt.code.ENTER && (t.preventDefault(),
                        e.trigger("click"))
                    }
                  ))
                }
              }, {
                key: "show",
                value: function() {
                  var t = this;
                  this.context.invoke("editor.saveRange"),
                    this.showImageDialog().then((function(e) {
                        t.ui.hideDialog(t.$dialog),
                          t.context.invoke("editor.restoreRange"),
                          "string" == typeof e ? t.options.callbacks.onImageLinkInsert ? t.context.triggerEvent("image.link.insert", e) : t.context.invoke("editor.insertImage", e) : t.context.invoke("editor.insertImagesOrCallback", e)
                      }
                    )).fail((function() {
                        t.context.invoke("editor.restoreRange")
                      }
                    ))
                }
              }, {
                key: "showImageDialog",
                value: function() {
                  var t = this;
                  return e().Deferred((function(e) {
                      var n = t.$dialog.find(".note-image-input")
                        , o = t.$dialog.find(".note-image-url")
                        , i = t.$dialog.find(".note-image-btn");
                      t.ui.onDialogShown(t.$dialog, (function() {
                          t.context.triggerEvent("dialog.shown"),
                            n.replaceWith(n.clone().on("change", (function(t) {
                                e.resolve(t.target.files || t.target.value)
                              }
                            )).val("")),
                            o.on("input paste propertychange", (function() {
                                t.ui.toggleBtn(i, o.val())
                              }
                            )).val(""),
                          f.isSupportTouch || o.trigger("focus"),
                            i.click((function(t) {
                                t.preventDefault(),
                                  e.resolve(o.val())
                              }
                            )),
                            t.bindEnterKey(o, i)
                        }
                      )),
                        t.ui.onDialogHidden(t.$dialog, (function() {
                            n.off(),
                              o.off(),
                              i.off(),
                            "pending" === e.state() && e.reject()
                          }
                        )),
                        t.ui.showDialog(t.$dialog)
                    }
                  ))
                }
              }]) && he(n.prototype, o),
              i && he(n, i),
                t
            }();
            function pe(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var me = function() {
              function t(n) {
                var o = this;
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.ui = e().summernote.ui,
                  this.editable = n.layoutInfo.editable[0],
                  this.options = n.options,
                  this.events = {
                    "summernote.disable summernote.dialog.shown": function() {
                      o.hide()
                    },
                    "summernote.blur": function(t, e) {
                      e.originalEvent && e.originalEvent.relatedTarget && o.$popover[0].contains(e.originalEvent.relatedTarget) || o.hide()
                    }
                  }
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "shouldInitialize",
                  value: function() {
                    return !k.isEmpty(this.options.popover.image)
                  }
                }, {
                  key: "initialize",
                  value: function() {
                    this.$popover = this.ui.popover({
                      className: "note-image-popover"
                    }).render().appendTo(this.options.container);
                    var t = this.$popover.find(".popover-content,.note-popover-content");
                    this.context.invoke("buttons.build", t, this.options.popover.image),
                      this.$popover.on("mousedown", (function(t) {
                          t.preventDefault()
                        }
                      ))
                  }
                }, {
                  key: "destroy",
                  value: function() {
                    this.$popover.remove()
                  }
                }, {
                  key: "update",
                  value: function(t, n) {
                    if (ht.isImg(t)) {
                      var o = e()(t).offset()
                        , i = e()(this.options.container).offset()
                        , r = {};
                      this.options.popatmouse ? (r.left = n.pageX - 20,
                        r.top = n.pageY) : r = o,
                        r.top -= i.top,
                        r.left -= i.left,
                        this.$popover.css({
                          display: "block",
                          left: r.left,
                          top: r.top
                        })
                    } else
                      this.hide()
                  }
                }, {
                  key: "hide",
                  value: function() {
                    this.$popover.hide()
                  }
                }],
              o && pe(n.prototype, o),
              i && pe(n, i),
                t
            }();
            function ve(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var ge = function() {
              function t(n) {
                var o = this;
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.ui = e().summernote.ui,
                  this.options = n.options,
                  this.events = {
                    "summernote.mousedown": function(t, e) {
                      o.update(e.target)
                    },
                    "summernote.keyup summernote.scroll summernote.change": function() {
                      o.update()
                    },
                    "summernote.disable summernote.dialog.shown": function() {
                      o.hide()
                    },
                    "summernote.blur": function(t, e) {
                      e.originalEvent && e.originalEvent.relatedTarget && o.$popover[0].contains(e.originalEvent.relatedTarget) || o.hide()
                    }
                  }
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "shouldInitialize",
                  value: function() {
                    return !k.isEmpty(this.options.popover.table)
                  }
                }, {
                  key: "initialize",
                  value: function() {
                    this.$popover = this.ui.popover({
                      className: "note-table-popover"
                    }).render().appendTo(this.options.container);
                    var t = this.$popover.find(".popover-content,.note-popover-content");
                    this.context.invoke("buttons.build", t, this.options.popover.table),
                    f.isFF && document.execCommand("enableInlineTableEditing", !1, !1),
                      this.$popover.on("mousedown", (function(t) {
                          t.preventDefault()
                        }
                      ))
                  }
                }, {
                  key: "destroy",
                  value: function() {
                    this.$popover.remove()
                  }
                }, {
                  key: "update",
                  value: function(t) {
                    if (this.context.isDisabled())
                      return !1;
                    var n = ht.isCell(t) || ht.isCell(null == t ? void 0 : t.parentElement);
                    if (n) {
                      var o = ht.posFromPlaceholder(t)
                        , i = e()(this.options.container).offset();
                      o.top -= i.top,
                        o.left -= i.left,
                        this.$popover.css({
                          display: "block",
                          left: o.left,
                          top: o.top
                        })
                    } else
                      this.hide();
                    return n
                  }
                }, {
                  key: "hide",
                  value: function() {
                    this.$popover.hide()
                  }
                }],
              o && ve(n.prototype, o),
              i && ve(n, i),
                t
            }();
            function be(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var ye = function() {
              function t(n) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.ui = e().summernote.ui,
                  this.$body = e()(document.body),
                  this.$editor = n.layoutInfo.editor,
                  this.options = n.options,
                  this.lang = this.options.langInfo
              }
              var n, o, i;
              return n = t,
              (o = [{
                key: "initialize",
                value: function() {
                  var t = this.options.dialogsInBody ? this.$body : this.options.container
                    , e = ['<div class="form-group note-form-group row-fluid">', '<label for="note-dialog-video-url-'.concat(this.options.id, '" class="note-form-label">').concat(this.lang.video.url, ' <small class="text-muted">').concat(this.lang.video.providers, "</small></label>"), '<input id="note-dialog-video-url-'.concat(this.options.id, '" class="note-video-url form-control note-form-control note-input" type="text"/>'), "</div>"].join("")
                    , n = '<input type="button" href="#" class="'.concat("btn btn-primary note-btn note-btn-primary note-video-btn", '" value="').concat(this.lang.video.insert, '" disabled>');
                  this.$dialog = this.ui.dialog({
                    title: this.lang.video.insert,
                    fade: this.options.dialogsFade,
                    body: e,
                    footer: n
                  }).render().appendTo(t)
                }
              }, {
                key: "destroy",
                value: function() {
                  this.ui.hideDialog(this.$dialog),
                    this.$dialog.remove()
                }
              }, {
                key: "bindEnterKey",
                value: function(t, e) {
                  t.on("keypress", (function(t) {
                      t.keyCode === wt.code.ENTER && (t.preventDefault(),
                        e.trigger("click"))
                    }
                  ))
                }
              }, {
                key: "createVideoNode",
                value: function(t) {
                  var n, o = t.match(/\/\/(?:(?:www|m)\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/), i = t.match(/(?:\.|\/\/)drive\.google\.com\/file\/d\/(.[a-zA-Z0-9_-]*)\/view/), r = t.match(/(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/), a = t.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/), s = t.match(/\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/), l = t.match(/.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/), c = t.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/), u = t.match(/\/\/(.*)\/videos\/watch\/([^?]*)(?:\?(?:start=(\w*))?(?:&stop=(\w*))?(?:&loop=([10]))?(?:&autoplay=([10]))?(?:&muted=([10]))?)?/), d = t.match(/\/\/v\.qq\.com.*?vid=(.+)/), h = t.match(/\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/), f = t.match(/^.+.(mp4|m4v)$/), p = t.match(/^.+.(ogg|ogv)$/), m = t.match(/^.+.(webm)$/), v = t.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/);
                  if (o && 11 === o[1].length) {
                    var g = o[1]
                      , b = 0;
                    if (void 0 !== o[2]) {
                      var y = o[2].match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
                      if (y)
                        for (var k = [3600, 60, 1], w = 0, C = k.length; w < C; w++)
                          b += void 0 !== y[w + 1] ? k[w] * parseInt(y[w + 1], 10) : 0
                    }
                    n = e()("<iframe>").attr("frameborder", 0).attr("src", "//www.youtube.com/embed/" + g + (b > 0 ? "?start=" + b : "")).attr("width", "640").attr("height", "360")
                  } else if (i && i[0].length)
                    n = e()("<iframe>").attr("frameborder", 0).attr("src", "https://drive.google.com/file/d/" + i[1] + "/preview").attr("width", "640").attr("height", "480");
                  else if (r && r[0].length)
                    n = e()("<iframe>").attr("frameborder", 0).attr("src", "https://instagram.com/p/" + r[1] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true");
                  else if (a && a[0].length)
                    n = e()("<iframe>").attr("frameborder", 0).attr("src", a[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed");
                  else if (s && s[3].length)
                    n = e()("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("src", "//player.vimeo.com/video/" + s[3]).attr("width", "640").attr("height", "360");
                  else if (l && l[2].length)
                    n = e()("<iframe>").attr("frameborder", 0).attr("src", "//www.dailymotion.com/embed/video/" + l[2]).attr("width", "640").attr("height", "360");
                  else if (c && c[1].length)
                    n = e()("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + c[1]);
                  else if (u && u[0].length) {
                    var x = 0;
                    "undefined" !== u[2] && (x = u[2]);
                    var S = 0;
                    "undefined" !== u[3] && (S = u[3]);
                    var T = 0;
                    "undefined" !== u[4] && (T = u[4]);
                    var E = 0;
                    "undefined" !== u[5] && (E = u[5]);
                    var I = 0;
                    "undefined" !== u[6] && (I = u[6]),
                      n = e()('<iframe allowfullscreen sandbox="allow-same-origin allow-scripts allow-popups">').attr("frameborder", 0).attr("src", "//" + u[1] + "/videos/embed/" + u[2] + "?loop=" + T + "&autoplay=" + E + "&muted=" + I + (x > 0 ? "&start=" + x : "") + (S > 0 ? "&end=" + b : "")).attr("width", "560").attr("height", "315")
                  } else if (d && d[1].length || h && h[2].length) {
                    var $ = d && d[1].length ? d[1] : h[2];
                    n = e()("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "310").attr("width", "500").attr("src", "https://v.qq.com/txp/iframe/player.html?vid=" + $ + "&amp;auto=0")
                  } else if (f || p || m)
                    n = e()("<video controls>").attr("src", t).attr("width", "640").attr("height", "360");
                  else {
                    if (!v || !v[0].length)
                      return !1;
                    n = e()("<iframe>").attr("frameborder", 0).attr("src", "https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(v[0]) + "&show_text=0&width=560").attr("width", "560").attr("height", "301").attr("scrolling", "no").attr("allowtransparency", "true")
                  }
                  return n.addClass("note-video-clip"),
                    n[0]
                }
              }, {
                key: "show",
                value: function() {
                  var t = this
                    , e = this.context.invoke("editor.getSelectedText");
                  this.context.invoke("editor.saveRange"),
                    this.showVideoDialog(e).then((function(e) {
                        t.ui.hideDialog(t.$dialog),
                          t.context.invoke("editor.restoreRange");
                        var n = t.createVideoNode(e);
                        n && t.context.invoke("editor.insertNode", n)
                      }
                    )).fail((function() {
                        t.context.invoke("editor.restoreRange")
                      }
                    ))
                }
              }, {
                key: "showVideoDialog",
                value: function() {
                  var t = this;
                  return e().Deferred((function(e) {
                      var n = t.$dialog.find(".note-video-url")
                        , o = t.$dialog.find(".note-video-btn");
                      t.ui.onDialogShown(t.$dialog, (function() {
                          t.context.triggerEvent("dialog.shown"),
                            n.on("input paste propertychange", (function() {
                                t.ui.toggleBtn(o, n.val())
                              }
                            )),
                          f.isSupportTouch || n.trigger("focus"),
                            o.click((function(t) {
                                t.preventDefault(),
                                  e.resolve(n.val())
                              }
                            )),
                            t.bindEnterKey(n, o)
                        }
                      )),
                        t.ui.onDialogHidden(t.$dialog, (function() {
                            n.off(),
                              o.off(),
                            "pending" === e.state() && e.reject()
                          }
                        )),
                        t.ui.showDialog(t.$dialog)
                    }
                  ))
                }
              }]) && be(n.prototype, o),
              i && be(n, i),
                t
            }();
            function ke(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var we = function() {
              function t(n) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.ui = e().summernote.ui,
                  this.$body = e()(document.body),
                  this.$editor = n.layoutInfo.editor,
                  this.options = n.options,
                  this.lang = this.options.langInfo
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "initialize",
                  value: function() {
                    var t = this.options.dialogsInBody ? this.$body : this.options.container
                      , e = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank" rel="noopener noreferrer">Summernote 0.8.20</a> · ', '<a href="https://github.com/summernote/summernote" target="_blank" rel="noopener noreferrer">Project</a> · ', '<a href="https://github.com/summernote/summernote/issues" target="_blank" rel="noopener noreferrer">Issues</a>', "</p>"].join("");
                    this.$dialog = this.ui.dialog({
                      title: this.lang.options.help,
                      fade: this.options.dialogsFade,
                      body: this.createShortcutList(),
                      footer: e,
                      callback: function(t) {
                        t.find(".modal-body,.note-modal-body").css({
                          "max-height": 300,
                          overflow: "scroll"
                        })
                      }
                    }).render().appendTo(t)
                  }
                }, {
                  key: "destroy",
                  value: function() {
                    this.ui.hideDialog(this.$dialog),
                      this.$dialog.remove()
                  }
                }, {
                  key: "createShortcutList",
                  value: function() {
                    var t = this
                      , n = this.options.keyMap[f.isMac ? "mac" : "pc"];
                    return Object.keys(n).map((function(o) {
                        var i = n[o]
                          , r = e()('<div><div class="help-list-item"></div></div>');
                        return r.append(e()("<label><kbd>" + o + "</kdb></label>").css({
                          width: 180,
                          "margin-right": 10
                        })).append(e()("<span></span>").html(t.context.memo("help." + i) || i)),
                          r.html()
                      }
                    )).join("")
                  }
                }, {
                  key: "showHelpDialog",
                  value: function() {
                    var t = this;
                    return e().Deferred((function(e) {
                        t.ui.onDialogShown(t.$dialog, (function() {
                            t.context.triggerEvent("dialog.shown"),
                              e.resolve()
                          }
                        )),
                          t.ui.showDialog(t.$dialog)
                      }
                    )).promise()
                  }
                }, {
                  key: "show",
                  value: function() {
                    var t = this;
                    this.context.invoke("editor.saveRange"),
                      this.showHelpDialog().then((function() {
                          t.context.invoke("editor.restoreRange")
                        }
                      ))
                  }
                }],
              o && ke(n.prototype, o),
              i && ke(n, i),
                t
            }();
            function Ce(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var xe = function() {
              function t(n) {
                var o = this;
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.ui = e().summernote.ui,
                  this.options = n.options,
                  this.hidable = !0,
                  this.onContextmenu = !1,
                  this.pageX = null,
                  this.pageY = null,
                  this.events = {
                    "summernote.contextmenu": function(t) {
                      o.options.editing && (t.preventDefault(),
                        t.stopPropagation(),
                        o.onContextmenu = !0,
                        o.update(!0))
                    },
                    "summernote.mousedown": function(t, e) {
                      o.pageX = e.pageX,
                        o.pageY = e.pageY
                    },
                    "summernote.keyup summernote.mouseup summernote.scroll": function(t, e) {
                      o.options.editing && !o.onContextmenu && (o.pageX = e.pageX,
                        o.pageY = e.pageY,
                        o.update()),
                        o.onContextmenu = !1
                    },
                    "summernote.disable summernote.change summernote.dialog.shown summernote.blur": function() {
                      o.hide()
                    },
                    "summernote.focusout": function() {
                      o.$popover.is(":active,:focus") || o.hide()
                    }
                  }
              }
              var n, o, i;
              return n = t,
              (o = [{
                key: "shouldInitialize",
                value: function() {
                  return this.options.airMode && !k.isEmpty(this.options.popover.air)
                }
              }, {
                key: "initialize",
                value: function() {
                  var t = this;
                  this.$popover = this.ui.popover({
                    className: "note-air-popover"
                  }).render().appendTo(this.options.container);
                  var e = this.$popover.find(".popover-content");
                  this.context.invoke("buttons.build", e, this.options.popover.air),
                    this.$popover.on("mousedown", (function() {
                        t.hidable = !1
                      }
                    )),
                    this.$popover.on("mouseup", (function() {
                        t.hidable = !0
                      }
                    ))
                }
              }, {
                key: "destroy",
                value: function() {
                  this.$popover.remove()
                }
              }, {
                key: "update",
                value: function(t) {
                  var n = this.context.invoke("editor.currentStyle");
                  if (!n.range || n.range.isCollapsed() && !t)
                    this.hide();
                  else {
                    var o = {
                      left: this.pageX,
                      top: this.pageY
                    }
                      , i = e()(this.options.container).offset();
                    o.top -= i.top,
                      o.left -= i.left,
                      this.$popover.css({
                        display: "block",
                        left: Math.max(o.left, 0) + -5,
                        top: o.top + 5
                      }),
                      this.context.invoke("buttons.updateCurrentStyle", this.$popover)
                  }
                }
              }, {
                key: "updateCodeview",
                value: function(t) {
                  this.ui.toggleBtnActive(this.$popover.find(".btn-codeview"), t),
                  t && this.hide()
                }
              }, {
                key: "hide",
                value: function() {
                  this.hidable && this.$popover.hide()
                }
              }]) && Ce(n.prototype, o),
              i && Ce(n, i),
                t
            }();
            function Se(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            var Te = function() {
              function t(n) {
                var o = this;
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.context = n,
                  this.ui = e().summernote.ui,
                  this.$editable = n.layoutInfo.editable,
                  this.options = n.options,
                  this.hint = this.options.hint || [],
                  this.direction = this.options.hintDirection || "bottom",
                  this.hints = Array.isArray(this.hint) ? this.hint : [this.hint],
                  this.events = {
                    "summernote.keyup": function(t, e) {
                      e.isDefaultPrevented() || o.handleKeyup(e)
                    },
                    "summernote.keydown": function(t, e) {
                      o.handleKeydown(e)
                    },
                    "summernote.disable summernote.dialog.shown summernote.blur": function() {
                      o.hide()
                    }
                  }
              }
              var n, o, i;
              return n = t,
                o = [{
                  key: "shouldInitialize",
                  value: function() {
                    return this.hints.length > 0
                  }
                }, {
                  key: "initialize",
                  value: function() {
                    var t = this;
                    this.lastWordRange = null,
                      this.matchingWord = null,
                      this.$popover = this.ui.popover({
                        className: "note-hint-popover",
                        hideArrow: !0,
                        direction: ""
                      }).render().appendTo(this.options.container),
                      this.$popover.hide(),
                      this.$content = this.$popover.find(".popover-content,.note-popover-content"),
                      this.$content.on("click", ".note-hint-item", (function(n) {
                          t.$content.find(".active").removeClass("active"),
                            e()(n.currentTarget).addClass("active"),
                            t.replace()
                        }
                      )),
                      this.$popover.on("mousedown", (function(t) {
                          t.preventDefault()
                        }
                      ))
                  }
                }, {
                  key: "destroy",
                  value: function() {
                    this.$popover.remove()
                  }
                }, {
                  key: "selectItem",
                  value: function(t) {
                    this.$content.find(".active").removeClass("active"),
                      t.addClass("active"),
                      this.$content[0].scrollTop = t[0].offsetTop - this.$content.innerHeight() / 2
                  }
                }, {
                  key: "moveDown",
                  value: function() {
                    var t = this.$content.find(".note-hint-item.active")
                      , e = t.next();
                    if (e.length)
                      this.selectItem(e);
                    else {
                      var n = t.parent().next();
                      n.length || (n = this.$content.find(".note-hint-group").first()),
                        this.selectItem(n.find(".note-hint-item").first())
                    }
                  }
                }, {
                  key: "moveUp",
                  value: function() {
                    var t = this.$content.find(".note-hint-item.active")
                      , e = t.prev();
                    if (e.length)
                      this.selectItem(e);
                    else {
                      var n = t.parent().prev();
                      n.length || (n = this.$content.find(".note-hint-group").last()),
                        this.selectItem(n.find(".note-hint-item").last())
                    }
                  }
                }, {
                  key: "replace",
                  value: function() {
                    var t = this.$content.find(".note-hint-item.active");
                    if (t.length) {
                      var n = this.nodeFromItem(t);
                      if (null !== this.matchingWord && 0 === this.matchingWord.length)
                        this.lastWordRange.so = this.lastWordRange.eo;
                      else if (null !== this.matchingWord && this.matchingWord.length > 0 && !this.lastWordRange.isCollapsed()) {
                        var o = this.lastWordRange.eo - this.lastWordRange.so - this.matchingWord.length;
                        o > 0 && (this.lastWordRange.so += o)
                      }
                      if (this.lastWordRange.insertNode(n),
                      "next" === this.options.hintSelect) {
                        var i = document.createTextNode("");
                        e()(n).after(i),
                          yt.createFromNodeBefore(i).select()
                      } else
                        yt.createFromNodeAfter(n).select();
                      this.lastWordRange = null,
                        this.hide(),
                        this.context.invoke("editor.focus"),
                        this.context.triggerEvent("change", this.$editable.html(), this.$editable)
                    }
                  }
                }, {
                  key: "nodeFromItem",
                  value: function(t) {
                    var e = this.hints[t.data("index")]
                      , n = t.data("item")
                      , o = e.content ? e.content(n) : n;
                    return "string" == typeof o && (o = ht.createText(o)),
                      o
                  }
                }, {
                  key: "createItemTemplates",
                  value: function(t, n) {
                    var o = this.hints[t];
                    return n.map((function(n) {
                        var i = e()('<div class="note-hint-item"></div>');
                        return i.append(o.template ? o.template(n) : n + ""),
                          i.data({
                            index: t,
                            item: n
                          }),
                          i
                      }
                    ))
                  }
                }, {
                  key: "handleKeydown",
                  value: function(t) {
                    this.$popover.is(":visible") && (t.keyCode === wt.code.ENTER ? (t.preventDefault(),
                      this.replace()) : t.keyCode === wt.code.UP ? (t.preventDefault(),
                      this.moveUp()) : t.keyCode === wt.code.DOWN && (t.preventDefault(),
                      this.moveDown()))
                  }
                }, {
                  key: "searchKeyword",
                  value: function(t, e, n) {
                    var o = this.hints[t];
                    if (o && o.match.test(e) && o.search) {
                      var i = o.match.exec(e);
                      this.matchingWord = i[0],
                        o.search(i[1], n)
                    } else
                      n()
                  }
                }, {
                  key: "createGroup",
                  value: function(t, n) {
                    var o = this
                      , i = e()('<div class="note-hint-group note-hint-group-' + t + '"></div>');
                    return this.searchKeyword(t, n, (function(e) {
                        (e = e || []).length && (i.html(o.createItemTemplates(t, e)),
                          o.show())
                      }
                    )),
                      i
                  }
                }, {
                  key: "handleKeyup",
                  value: function(t) {
                    var n = this;
                    if (!k.contains([wt.code.ENTER, wt.code.UP, wt.code.DOWN], t.keyCode)) {
                      var o, i, r = this.context.invoke("editor.getLastRange");
                      if ("words" === this.options.hintMode) {
                        if (o = r.getWordsRange(r),
                          i = o.toString(),
                          this.hints.forEach((function(t) {
                              if (t.match.test(i))
                                return o = r.getWordsMatchRange(t.match),
                                  !1
                            }
                          )),
                          !o)
                          return void this.hide();
                        i = o.toString()
                      } else
                        o = r.getWordRange(),
                          i = o.toString();
                      if (this.hints.length && i) {
                        this.$content.empty();
                        var a = m.rect2bnd(k.last(o.getClientRects()))
                          , s = e()(this.options.container).offset();
                        a && (a.top -= s.top,
                          a.left -= s.left,
                          this.$popover.hide(),
                          this.lastWordRange = o,
                          this.hints.forEach((function(t, e) {
                              t.match.test(i) && n.createGroup(e, i).appendTo(n.$content)
                            }
                          )),
                          this.$content.find(".note-hint-item:first").addClass("active"),
                          "top" === this.direction ? this.$popover.css({
                            left: a.left,
                            top: a.top - this.$popover.outerHeight() - 5
                          }) : this.$popover.css({
                            left: a.left,
                            top: a.top + a.height + 5
                          }))
                      } else
                        this.hide()
                    }
                  }
                }, {
                  key: "show",
                  value: function() {
                    this.$popover.show()
                  }
                }, {
                  key: "hide",
                  value: function() {
                    this.$popover.hide()
                  }
                }],
              o && Se(n.prototype, o),
              i && Se(n, i),
                t
            }();
            function Ee(t) {
              return Ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
                }
                : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                Ee(t)
            }
            function Ie(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                "value"in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            e().summernote = e().extend(e().summernote, {
              version: "0.8.20",
              plugins: {},
              dom: ht,
              range: yt,
              lists: k,
              options: {
                langInfo: e().summernote.lang["en-US"],
                editing: !0,
                modules: {
                  editor: Ft,
                  clipboard: Ht,
                  dropzone: Bt,
                  codeview: jt,
                  statusbar: Kt,
                  fullscreen: qt,
                  handle: Gt,
                  hintPopover: Te,
                  autoLink: Qt,
                  autoSync: Jt,
                  autoReplace: ee,
                  placeholder: oe,
                  buttons: re,
                  toolbar: se,
                  linkDialog: ce,
                  linkPopover: de,
                  imageDialog: fe,
                  imagePopover: me,
                  tablePopover: ge,
                  videoDialog: ye,
                  helpDialog: we,
                  airPopover: xe
                },
                buttons: {},
                lang: "en-US",
                followingToolbar: !1,
                toolbarPosition: "top",
                otherStaticBar: "",
                codeviewKeepButton: !1,
                toolbar: [["style", ["style"]], ["font", ["bold", "underline", "clear"]], ["fontname", ["fontname"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture", "video"]], ["view", ["fullscreen", "codeview", "help"]]],
                popatmouse: !0,
                popover: {
                  image: [["resize", ["resizeFull", "resizeHalf", "resizeQuarter", "resizeNone"]], ["float", ["floatLeft", "floatRight", "floatNone"]], ["remove", ["removeMedia"]]],
                  link: [["link", ["linkDialogShow", "unlink"]]],
                  table: [["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]], ["delete", ["deleteRow", "deleteCol", "deleteTable"]]],
                  air: [["color", ["color"]], ["font", ["bold", "underline", "clear"]], ["para", ["ul", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture"]], ["view", ["fullscreen", "codeview"]]]
                },
                airMode: !1,
                overrideContextMenu: !1,
                width: null,
                height: null,
                linkTargetBlank: !0,
                useProtocol: !0,
                defaultProtocol: "http://",
                focus: !1,
                tabDisabled: !1,
                tabSize: 4,
                styleWithCSS: !1,
                shortcuts: !0,
                textareaAutoSync: !0,
                tooltip: "auto",
                container: null,
                maxTextLength: 0,
                blockquoteBreakingLevel: 2,
                spellCheck: !0,
                disableGrammar: !1,
                placeholder: null,
                inheritPlaceholder: !1,
                recordEveryKeystroke: !1,
                historyLimit: 200,
                showDomainOnlyForAutolink: !1,
                hintMode: "word",
                hintSelect: "after",
                hintDirection: "bottom",
                styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
                fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
                fontNamesIgnoreCheck: [],
                addDefaultFonts: !0,
                fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
                fontSizeUnits: ["px", "pt"],
                colors: [["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"], ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"], ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"], ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"], ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"], ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"], ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"], ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]],
                colorsName: [["Black", "Tundora", "Dove Gray", "Star Dust", "Pale Slate", "Gallery", "Alabaster", "White"], ["Red", "Orange Peel", "Yellow", "Green", "Cyan", "Blue", "Electric Violet", "Magenta"], ["Azalea", "Karry", "Egg White", "Zanah", "Botticelli", "Tropical Blue", "Mischka", "Twilight"], ["Tonys Pink", "Peach Orange", "Cream Brulee", "Sprout", "Casper", "Perano", "Cold Purple", "Careys Pink"], ["Mandy", "Rajah", "Dandelion", "Olivine", "Gulf Stream", "Viking", "Blue Marguerite", "Puce"], ["Guardsman Red", "Fire Bush", "Golden Dream", "Chelsea Cucumber", "Smalt Blue", "Boston Blue", "Butterfly Bush", "Cadillac"], ["Sangria", "Mai Tai", "Buddha Gold", "Forest Green", "Eden", "Venice Blue", "Meteorite", "Claret"], ["Rosewood", "Cinnamon", "Olive", "Parsley", "Tiber", "Midnight Blue", "Valentino", "Loulou"]],
                colorButton: {
                  foreColor: "#000000",
                  backColor: "#FFFF00"
                },
                lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
                tableClassName: "table table-bordered",
                insertTableMaxSize: {
                  col: 10,
                  row: 10
                },
                dialogsInBody: !1,
                dialogsFade: !1,
                maximumImageFileSize: null,
                acceptImageFileTypes: "image/*",
                callbacks: {
                  onBeforeCommand: null,
                  onBlur: null,
                  onBlurCodeview: null,
                  onChange: null,
                  onChangeCodeview: null,
                  onDialogShown: null,
                  onEnter: null,
                  onFocus: null,
                  onImageLinkInsert: null,
                  onImageUpload: null,
                  onImageUploadError: null,
                  onInit: null,
                  onKeydown: null,
                  onKeyup: null,
                  onMousedown: null,
                  onMouseup: null,
                  onPaste: null,
                  onScroll: null
                },
                codemirror: {
                  mode: "text/html",
                  htmlMode: !0,
                  lineNumbers: !0
                },
                codeviewFilter: !0,
                codeviewFilterRegex: /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
                codeviewIframeFilter: !0,
                codeviewIframeWhitelistSrc: [],
                codeviewIframeWhitelistSrcBase: ["www.youtube.com", "www.youtube-nocookie.com", "www.facebook.com", "vine.co", "instagram.com", "player.vimeo.com", "www.dailymotion.com", "player.youku.com", "jumpingbean.tv", "v.qq.com"],
                keyMap: {
                  pc: {
                    ESC: "escape",
                    ENTER: "insertParagraph",
                    "CTRL+Z": "undo",
                    "CTRL+Y": "redo",
                    TAB: "tab",
                    "SHIFT+TAB": "untab",
                    "CTRL+B": "bold",
                    "CTRL+I": "italic",
                    "CTRL+U": "underline",
                    "CTRL+SHIFT+S": "strikethrough",
                    "CTRL+BACKSLASH": "removeFormat",
                    "CTRL+SHIFT+L": "justifyLeft",
                    "CTRL+SHIFT+E": "justifyCenter",
                    "CTRL+SHIFT+R": "justifyRight",
                    "CTRL+SHIFT+J": "justifyFull",
                    "CTRL+SHIFT+NUM7": "insertUnorderedList",
                    "CTRL+SHIFT+NUM8": "insertOrderedList",
                    "CTRL+LEFTBRACKET": "outdent",
                    "CTRL+RIGHTBRACKET": "indent",
                    "CTRL+NUM0": "formatPara",
                    "CTRL+NUM1": "formatH1",
                    "CTRL+NUM2": "formatH2",
                    "CTRL+NUM3": "formatH3",
                    "CTRL+NUM4": "formatH4",
                    "CTRL+NUM5": "formatH5",
                    "CTRL+NUM6": "formatH6",
                    "CTRL+ENTER": "insertHorizontalRule",
                    "CTRL+K": "linkDialog.show"
                  },
                  mac: {
                    ESC: "escape",
                    ENTER: "insertParagraph",
                    "CMD+Z": "undo",
                    "CMD+SHIFT+Z": "redo",
                    TAB: "tab",
                    "SHIFT+TAB": "untab",
                    "CMD+B": "bold",
                    "CMD+I": "italic",
                    "CMD+U": "underline",
                    "CMD+SHIFT+S": "strikethrough",
                    "CMD+BACKSLASH": "removeFormat",
                    "CMD+SHIFT+L": "justifyLeft",
                    "CMD+SHIFT+E": "justifyCenter",
                    "CMD+SHIFT+R": "justifyRight",
                    "CMD+SHIFT+J": "justifyFull",
                    "CMD+SHIFT+NUM7": "insertUnorderedList",
                    "CMD+SHIFT+NUM8": "insertOrderedList",
                    "CMD+LEFTBRACKET": "outdent",
                    "CMD+RIGHTBRACKET": "indent",
                    "CMD+NUM0": "formatPara",
                    "CMD+NUM1": "formatH1",
                    "CMD+NUM2": "formatH2",
                    "CMD+NUM3": "formatH3",
                    "CMD+NUM4": "formatH4",
                    "CMD+NUM5": "formatH5",
                    "CMD+NUM6": "formatH6",
                    "CMD+ENTER": "insertHorizontalRule",
                    "CMD+K": "linkDialog.show"
                  }
                },
                icons: {
                  align: "note-icon-align",
                  alignCenter: "note-icon-align-center",
                  alignJustify: "note-icon-align-justify",
                  alignLeft: "note-icon-align-left",
                  alignRight: "note-icon-align-right",
                  rowBelow: "note-icon-row-below",
                  colBefore: "note-icon-col-before",
                  colAfter: "note-icon-col-after",
                  rowAbove: "note-icon-row-above",
                  rowRemove: "note-icon-row-remove",
                  colRemove: "note-icon-col-remove",
                  indent: "note-icon-align-indent",
                  outdent: "note-icon-align-outdent",
                  arrowsAlt: "note-icon-arrows-alt",
                  bold: "note-icon-bold",
                  caret: "note-icon-caret",
                  circle: "note-icon-circle",
                  close: "note-icon-close",
                  code: "note-icon-code",
                  eraser: "note-icon-eraser",
                  floatLeft: "note-icon-float-left",
                  floatRight: "note-icon-float-right",
                  font: "note-icon-font",
                  frame: "note-icon-frame",
                  italic: "note-icon-italic",
                  link: "note-icon-link",
                  unlink: "note-icon-chain-broken",
                  magic: "note-icon-magic",
                  menuCheck: "note-icon-menu-check",
                  minus: "note-icon-minus",
                  orderedlist: "note-icon-orderedlist",
                  pencil: "note-icon-pencil",
                  picture: "note-icon-picture",
                  question: "note-icon-question",
                  redo: "note-icon-redo",
                  rollback: "note-icon-rollback",
                  square: "note-icon-square",
                  strikethrough: "note-icon-strikethrough",
                  subscript: "note-icon-subscript",
                  superscript: "note-icon-superscript",
                  table: "note-icon-table",
                  textHeight: "note-icon-text-height",
                  trash: "note-icon-trash",
                  underline: "note-icon-underline",
                  undo: "note-icon-undo",
                  unorderedlist: "note-icon-unorderedlist",
                  video: "note-icon-video"
                }
              }
            });
            var $e = function() {
              function t(e, n, o, i) {
                !function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
                }(this, t),
                  this.markup = e,
                  this.children = n,
                  this.options = o,
                  this.callback = i
              }
              var n, o, i;
              return n = t,
              (o = [{
                key: "render",
                value: function(t) {
                  var n = e()(this.markup);
                  if (this.options && this.options.contents && n.html(this.options.contents),
                  this.options && this.options.className && n.addClass(this.options.className),
                  this.options && this.options.data && e().each(this.options.data, (function(t, e) {
                      n.attr("data-" + t, e)
                    }
                  )),
                  this.options && this.options.click && n.on("click", this.options.click),
                    this.children) {
                    var o = n.find(".note-children-container");
                    this.children.forEach((function(t) {
                        t.render(o.length ? o : n)
                      }
                    ))
                  }
                  return this.callback && this.callback(n, this.options),
                  this.options && this.options.callback && this.options.callback(n),
                  t && t.append(n),
                    n
                }
              }]) && Ie(n.prototype, o),
              i && Ie(n, i),
                t
            }();
            const Ne = function(t, e) {
              return function() {
                var n = "object" === Ee(arguments[1]) ? arguments[1] : arguments[0]
                  , o = Array.isArray(arguments[0]) ? arguments[0] : [];
                return n && n.children && (o = n.children),
                  new $e(t,o,n,e)
              }
            };
            function Pe(t) {
              return Pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
                }
                : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                Pe(t)
            }
            var Re = Ne('<div class="note-editor note-frame card"></div>')
              , Le = Ne('<div class="note-toolbar card-header" role="toolbar"></div>')
              , Ae = Ne('<div class="note-editing-area"></div>')
              , Fe = Ne('<textarea class="note-codable" aria-multiline="true"></textarea>')
              , De = Ne('<div class="note-editable card-block" contentEditable="true" role="textbox" aria-multiline="true"></div>')
              , He = Ne(['<output class="note-status-output" role="status" aria-live="polite"></output>', '<div class="note-statusbar" role="status">', '<div class="note-resizebar" aria-label="Resize">', '<div class="note-icon-bar"></div>', '<div class="note-icon-bar"></div>', '<div class="note-icon-bar"></div>', "</div>", "</div>"].join(""))
              , ze = Ne('<div class="note-editor note-airframe"></div>')
              , Be = Ne(['<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>', '<output class="note-status-output" role="status" aria-live="polite"></output>'].join(""))
              , Me = Ne('<div class="note-btn-group btn-group"></div>')
              , Oe = Ne('<div class="note-dropdown-menu dropdown-menu" role="list"></div>', (function(t, e) {
                var n = Array.isArray(e.items) ? e.items.map((function(t) {
                    var n = "string" == typeof t ? t : t.value || ""
                      , o = e.template ? e.template(t) : t
                      , i = "object" === Pe(t) ? t.option : void 0;
                    return '<a class="dropdown-item" href="#" ' + ('data-value="' + n + '"' + (void 0 !== i ? ' data-option="' + i + '"' : "")) + ' role="listitem" aria-label="' + n + '">' + o + "</a>"
                  }
                )).join("") : e.items;
                t.html(n).attr({
                  "aria-label": e.title
                }),
                e && e.codeviewKeepButton && t.addClass("note-codeview-keep")
              }
            ))
              , Ue = function(t) {
              return t
            }
              , je = Ne('<div class="note-dropdown-menu dropdown-menu note-check" role="list"></div>', (function(t, e) {
                var n = Array.isArray(e.items) ? e.items.map((function(t) {
                    var n = "string" == typeof t ? t : t.value || ""
                      , o = e.template ? e.template(t) : t;
                    return '<a class="dropdown-item" href="#" data-value="' + n + '" role="listitem" aria-label="' + t + '">' + qe(e.checkClassName) + " " + o + "</a>"
                  }
                )).join("") : e.items;
                t.html(n).attr({
                  "aria-label": e.title
                }),
                e && e.codeviewKeepButton && t.addClass("note-codeview-keep")
              }
            ))
              , We = Ne('<div class="modal note-modal" aria-hidden="false" tabindex="-1" role="dialog"></div>', (function(t, e) {
                e.fade && t.addClass("fade"),
                  t.attr({
                    "aria-label": e.title
                  }),
                  t.html(['<div class="modal-dialog">', '<div class="modal-content">', e.title ? '<div class="modal-header"><h4 class="modal-title">' + e.title + '</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button></div>' : "", '<div class="modal-body">' + e.body + "</div>", e.footer ? '<div class="modal-footer">' + e.footer + "</div>" : "", "</div>", "</div>"].join(""))
              }
            ))
              , Ke = Ne(['<div class="note-popover popover in">', '<div class="arrow"></div>', '<div class="popover-content note-children-container"></div>', "</div>"].join(""), (function(t, e) {
                var n = void 0 !== e.direction ? e.direction : "bottom";
                t.addClass(n),
                e.hideArrow && t.find(".arrow").hide()
              }
            ))
              , Ve = Ne('<div class="form-check"></div>', (function(t, e) {
                t.html(['<label class="form-check-label"' + (e.id ? ' for="note-' + e.id + '"' : "") + ">", '<input type="checkbox" class="form-check-input"' + (e.id ? ' id="note-' + e.id + '"' : ""), e.checked ? " checked" : "", ' aria-label="' + (e.text ? e.text : "") + '"', ' aria-checked="' + (e.checked ? "true" : "false") + '"/>', " " + (e.text ? e.text : "") + "</label>"].join(""))
              }
            ))
              , qe = function(t, e) {
              return t.match(/^</) ? t : "<" + (e = e || "i") + ' class="' + t + '"></' + e + ">"
            };
            e().summernote = e().extend(e().summernote, {
              ui_template: function(t) {
                return {
                  editor: Re,
                  toolbar: Le,
                  editingArea: Ae,
                  codable: Fe,
                  editable: De,
                  statusbar: He,
                  airEditor: ze,
                  airEditable: Be,
                  buttonGroup: Me,
                  dropdown: Oe,
                  dropdownButtonContents: Ue,
                  dropdownCheck: je,
                  dialog: We,
                  popover: Ke,
                  icon: qe,
                  checkbox: Ve,
                  options: t,
                  palette: function(e, n) {
                    return Ne('<div class="note-color-palette"></div>', (function(e, n) {
                        for (var o = [], i = 0, r = n.colors.length; i < r; i++) {
                          for (var a = n.eventName, s = n.colors[i], l = n.colorsName[i], c = [], u = 0, d = s.length; u < d; u++) {
                            var h = s[u]
                              , f = l[u];
                            c.push(['<button type="button" class="note-color-btn"', 'style="background-color:', h, '" ', 'data-event="', a, '" ', 'data-value="', h, '" ', 'title="', f, '" ', 'aria-label="', f, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(""))
                          }
                          o.push('<div class="note-color-row">' + c.join("") + "</div>")
                        }
                        e.html(o.join("")),
                        n.tooltip && e.find(".note-color-btn").tooltip({
                          container: n.container || t.container,
                          trigger: "hover",
                          placement: "bottom"
                        })
                      }
                    ))(e, n)
                  },
                  button: function(n, o) {
                    return Ne('<button type="button" class="note-btn btn btn-light btn-sm" tabindex="-1"></button>', (function(n, o) {
                        o && o.tooltip && n.attr({
                          title: o.tooltip,
                          "aria-label": o.tooltip
                        }).tooltip({
                          container: o.container || t.container,
                          trigger: "hover",
                          placement: "bottom"
                        }).on("click", (function(t) {
                            e()(t.currentTarget).tooltip("hide")
                          }
                        )),
                        o && o.codeviewButton && n.addClass("note-codeview-keep")
                      }
                    ))(n, o)
                  },
                  toggleBtn: function(t, e) {
                    t.toggleClass("disabled", !e),
                      t.attr("disabled", !e)
                  },
                  toggleBtnActive: function(t, e) {
                    t.toggleClass("active", e)
                  },
                  onDialogShown: function(t, e) {
                    t.one("shown.bs.modal", e)
                  },
                  onDialogHidden: function(t, e) {
                    t.one("hidden.bs.modal", e)
                  },
                  showDialog: function(t) {
                    t.modal("show")
                  },
                  hideDialog: function(t) {
                    t.modal("hide")
                  },
                  createLayout: function(e) {
                    var n = (t.airMode ? ze([Ae([Fe(), Be()])]) : "bottom" === t.toolbarPosition ? Re([Ae([Fe(), De()]), Le(), He()]) : Re([Le(), Ae([Fe(), De()]), He()])).render();
                    return n.insertAfter(e),
                      {
                        note: e,
                        editor: n,
                        toolbar: n.find(".note-toolbar"),
                        editingArea: n.find(".note-editing-area"),
                        editable: n.find(".note-editable"),
                        codable: n.find(".note-codable"),
                        statusbar: n.find(".note-statusbar")
                      }
                  },
                  removeLayout: function(t, e) {
                    t.html(e.editable.html()),
                      e.editor.remove(),
                      t.show()
                  }
                }
              },
              interface: "bs4"
            }),
              e().summernote.options.styleTags = ["p", {
                title: "Blockquote",
                tag: "blockquote",
                className: "blockquote",
                value: "blockquote"
              }, "pre", "h1", "h2", "h3", "h4", "h5", "h6"]
          }
        )(),
          i
      }
    )()
  }
));
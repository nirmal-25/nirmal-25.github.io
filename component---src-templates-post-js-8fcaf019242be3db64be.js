(self.webpackChunkv1=self.webpackChunkv1||[]).push([[851],{2396:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(1082),u=n(5414),a=n(1804),i=n.n(a),f=n(1034),c=n(3494),l=n(1428),s=l.rS.colors,d=(0,c.default)(l.or).withConfig({displayName:"post__StyledPostContainer",componentId:"sc-5e6lut-0"})(["max-width:1000px;"]),p=c.default.header.withConfig({displayName:"post__StyledPostHeader",componentId:"sc-5e6lut-1"})(["margin-bottom:50px;.tag{margin-right:10px;}"]),x=c.default.div.withConfig({displayName:"post__StyledPostContent",componentId:"sc-5e6lut-2"})(["margin-bottom:100px;h1,h2,h3,h4,h5,h6{margin:2em 0 1em;}p{margin:1em 0;line-height:1.5;color:",";}"],s.lightSlate);t.default=function(e){var t=e.data,n=e.location,a=t.markdownRemark,c=a.frontmatter,l=a.html,s=c.title,m=c.date,g=c.tags;return r.createElement(f.Ar,{location:n},r.createElement(u.Z,null,r.createElement("title",null,s," | Nirmal Amirthalingam"),r.createElement("link",{rel:"canonical",href:"https://nirmal-25.github.io/pensieve"})),r.createElement(d,null,r.createElement("span",{className:"breadcrumb"},r.createElement("span",{className:"arrow"},"←"),r.createElement(o.Link,{to:"/pensieve"},"All memories")),r.createElement(p,null,r.createElement("h1",{className:"medium-title"},s),r.createElement("p",{className:"subtitle"},r.createElement("time",null,new Date(m).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})),r.createElement("span",null," — "),g&&g.length>0&&g.map((function(e,t){return r.createElement(o.Link,{key:t,to:"/pensieve/tags/"+i()(e)+"/",className:"tag"},"#",e)})))),r.createElement(x,{dangerouslySetInnerHTML:{__html:l}})))}},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},2663:function(e){e.exports=function(e,t,n,r){var o=-1,u=null==e?0:e.length;for(r&&u&&(n=e[++o]);++o<u;)n=t(n,e[o],o,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),o=n(9607),u=n(2333),a="[object Null]",i="[object Undefined]",f=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?i:a:f&&f in Object(e)?o(e):u(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),o=n(9932),u=n(1469),a=n(3448),i=1/0,f=r?r.prototype:void 0,c=f?f.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(u(t))return o(t,e)+"";if(a(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-i?"-0":n}},5393:function(e,t,n){var r=n(2663),o=n(3816),u=n(8748),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(u(o(t).replace(a,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,u=o.hasOwnProperty,a=o.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=u.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(f){}var o=a.call(e);return r&&(t?e[i]=n:delete e[i]),o}},7215:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();e.exports=u},2757:function(e){var t="\\ud800-\\udfff",n="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",o="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+u+"]",i="\\d+",f="["+n+"]",c="["+r+"]",l="[^"+t+u+i+n+r+o+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+o+"]",x="(?:"+c+"|"+l+")",m="(?:"+p+"|"+l+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",v="(?:['’](?:D|LL|M|RE|S|T|VE))?",h="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?",y=b+h+("(?:\\u200d(?:"+["[^"+t+"]",s,d].join("|")+")"+b+h+")*"),E="(?:"+[f,s,d].join("|")+")"+y,A=RegExp([p+"?"+c+"+"+g+"(?="+[a,p,"$"].join("|")+")",m+"+"+v+"(?="+[a,p+x,"$"].join("|")+")",p+"?"+x+"+"+g,p+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,E].join("|"),"g");e.exports=function(e){return e.match(A)||[]}},3816:function(e,t,n){var r=n(9389),o=n(9833),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(u,r).replace(a,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005),u="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||o(e)&&r(e)==u}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),o=n(7215),u=n(9833),a=n(2757);e.exports=function(e,t,n){return e=u(e),void 0===(t=n?void 0:t)?o(e)?a(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=component---src-templates-post-js-8fcaf019242be3db64be.js.map
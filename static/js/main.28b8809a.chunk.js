(this["webpackJsonpreact-lights-out-v2"]=this["webpackJsonpreact-lights-out-v2"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(6),c=t.n(o),i=(t(12),t(3)),u=t(4);t(13);var l=function(e){var n=e.flipCellsAroundMe,t=e.isLit,r="Cell ".concat(t?"Cell-lit":"");return a.a.createElement("td",{className:r,onClick:n})};t(14);var s=function(e){var n=e.nrows,t=e.ncols,o=e.chanceLightStartsOn,c=Object(r.useState)(function(){for(var e=[],r=0;r<n;r++)e.push(Object(i.a)(Array(t)).map((function(e){return!(Math.random()>o)})));return e}()),s=Object(u.a)(c,2),f=s[0],m=s[1];function v(e){m((function(r){var a=e.split("-").map(Number),o=Object(u.a)(a,2),c=o[0],l=o[1],s=function(e,r,a){r>=0&&r<t&&e>=0&&e<n&&(a[e][r]=!a[e][r])},f=r.map((function(e){return Object(i.a)(e)}));return s(c,l,f),s(c-1,l,f),s(c,l-1,f),s(c,l+1,f),s(c+1,l,f),f}))}if(f.every((function(e){return e.every((function(e){return!e}))})))return a.a.createElement("div",{className:"Board-win"},"You Win!");for(var h=[],p=0;p<t;p++){for(var d=[],w=function(e){var n="".concat(p,"-").concat(e);d.push(a.a.createElement(l,{key:n,flipCellsAroundMe:function(){return v(n)},isLit:f[p][e]}))},b=0;b<n;b++)w(b);h.push(a.a.createElement("tr",{key:p},d))}return a.a.createElement("table",{className:"Board"},a.a.createElement("tbody",null,h))};t(15);var f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(s,{nrows:3,ncols:3,chanceLightStartsOn:.5}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.28b8809a.chunk.js.map
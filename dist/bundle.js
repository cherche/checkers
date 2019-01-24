"use strict";function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"===_typeof(Symbol.iterator)?function(a){function b(){return a.apply(this,arguments)}return b.toString=function(){return a.toString()},b}(function(a){return"undefined"==typeof a?"undefined":_typeof(a)}):function(a){function b(){return a.apply(this,arguments)}return b.toString=function(){return a.toString()},b}(function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":"undefined"==typeof a?"undefined":_typeof(a)}),_typeof(a)}!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&"object"==("undefined"==typeof a?"undefined":_typeof(a))&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&c&&"string"!=typeof a)for(var f in a)b.d(d,f,function(b){return a[b]}.bind(null,f));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=0)}([function(b,d,e){"use strict";function f(a){for(var b=a.fill,c=_slicedToArray(a.size,2),d=c[0],g=c[1],h=[],e=0;e<d;e++)h.push(Array(g).fill(b));return h.get=function(a){var b=_slicedToArray(a,2),c=b[0],d=b[1];return h[c][d]},h.set=function(a,b){var c=_slicedToArray(a,2),d=c[0],e=c[1];h[d][e]=b},h.forEach2=function(a){return h.forEach(function(b,c){return b.forEach(function(b,d){return a(b,[c,d])})})},h.map2=function(c){var i=f({fill:b,size:[d,g]});return h.forEach2(function(a,b){var d=_slicedToArray(b,2),e=d[0],f=d[1];i[e][f]=c(a,[e,f])}),i},h.getIndices=function(a){for(var b=0;b<d;b++)for(var c=0;c<g;c++)if(h[b][c]===a)return[b,c];return-1},h.every2=function(a){return h.every(function(b){return b.every(a)})},h}function g(a,b){if(a===b)return!0;if(null==a||null==b)return!1;if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}e.r(d);var h=function(b,c){var d=Math.abs,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:3,h=3<arguments.length&&void 0!==arguments[3]?arguments[3]:3,j={width:b,height:c,whiteRows:e,blackRows:h,turn:0,reset:function(){for(var a=f({fill:0,size:[j.width,j.height]}),b=0;b<j.whiteRows;b++)for(var c=b%2;c<j.width;c+=2)a[c][b]=1;for(var d=j.height-h;d<j.height;d++)for(var e=d%2;e<j.width;e+=2)a[e][d]=2;j.board=a,j.turn=0},isInBoard:function(a){var d=_slicedToArray(a,2),e=d[0],f=d[1];return 0<=e&&e<b&&0<=f&&f<c},makeMove:function(a){var b=a.start,c=a.end,e=a.capture;j.turn=(j.turn+1)%2,e&&j.board.set(e,0);var f=j.board.get(b);j.board.set(b,0);var g=1===d(f)?j.height-1:0;0<f&&c[1]===g?j.board.set(c,-f):j.board.set(c,f)},getLegalMoves:function(a){var b=_slicedToArray(a,2),e=b[0],f=b[1],g=0>j.board[e][f],h=d(j.board[e][f]),k=1===h?1:-1,m=-k,c=[[1,k],[-1,k]];g&&c.push([1,m],[-1,m]);for(var i=[],l=0;l<c.length;l++){var n=_slicedToArray(c[l],2),o=n[0],p=n[1],q=[e+o,f+p];if(j.isInBoard(q)){var r=j.board.get(q);if(0===r)i.push({start:a,end:q});else if(r!==h){var s=q.slice();q[0]+=o,q[1]+=p,j.isInBoard(q)&&0===j.board.get(q)&&i.push({start:a,end:q,capture:s})}}}return i},isLegalMove:function(a){for(var b,c=a.start,d=a.end,e=j.getLegalMoves(c),f=0;f<e.length;f++)if(b=e[f],g(b.start,c)&&g(b.end,d))return!0;return!1}};return j.reset(),j}(8,8),j=f({size:[8,8]}),a=document.createElement("div");a.className="game-container";var c=document.createElement("table");c.className="board";for(var i,k=0;8>k;k++){i=document.createElement("tr");for(var m,n=0;8>n;n++){m=document.createElement("td"),m.className=0==(n+k)%2?"even":"odd";var o=document.createElement("div");o.className="highlight",j[n][k]=o;var p=document.createElement("div");o.appendChild(p),m.appendChild(o),i.appendChild(m)}c.appendChild(i)}a.appendChild(c),document.body.appendChild(a);var q=function(a,b){var c=_slicedToArray(a,2),d=c[0],e=c[1],f=j[d][e];b?f.classList.add("active"):f.classList.remove("active")};h.board.forEach2(function(a,b){!function(a,b){var c=_slicedToArray(a,2),d=c[0],e=c[1],f=j[d][e];f.classList.remove("s0"),f.classList.remove("s1"),f.classList.remove("s2"),f.classList.add("s"+b)}(b,a)}),q([2,4],!0),q([3,5],!0),q([4,4],!0)}]);
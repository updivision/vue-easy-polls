window.Vue2Poll=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),u=r(o),s=n(5),a=r(s);e.exports={install:function(e,t){e.component("poll-view",u["default"]),e.component("poll-creator",a["default"])}}},function(e,t,n){var r=n(2)(n(3),n(4),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var o,u=e=e||{},s=typeof e["default"];"object"!==s&&"function"!==s||(o=e,u=e["default"]);var a="function"==typeof u?u.options:u;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=Object.create(a.computed||null);Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}}),a.computed=c}return{esModule:o,exports:u,options:a}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"poll-view",data:function(){return{message:"Poll made by Gabi Stanciu"}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("strong",[e._v(" "+e._s(e.message))])])},staticRenderFns:[]}},function(e,t,n){var r=n(2)(n(6),n(7),null,null);e.exports=r.exports},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"poll-creator",data:function(){return{message:"PollCreator.vue made by Gabi Stanciu"}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("strong",[e._v(" "+e._s(e.message))])])},staticRenderFns:[]}}]);
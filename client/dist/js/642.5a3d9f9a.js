(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[642],{3186:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-badge",{attrs:{bordered:"",bottom:"",color:"deep-purple accent-4",dot:"","offset-x":"10","offset-y":"10"}},[n("v-avatar",{attrs:{color:t.username.color,size:"40"}},[n("span",{staticClass:"white--text"},[t._v(t._s(t.username.email[0]))])])],1)},i=[],o={props:["username"],data:()=>({hover:!1})},s=o,a=n(1001),u=n(3453),c=n.n(u),l=n(3811),f=n(2151),p=(0,a.Z)(s,r,i,!1,null,null,null),d=p.exports;c()(p,{VAvatar:l.Z,VBadge:f.Z});var h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[t.item.username===t.$store.state.user?n("v-container",{staticStyle:{"text-align":"right"},attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col"),n("v-col",[n("span",{staticClass:"blue--text"},[t._v(" "+t._s(t.item.username.name)+" "+t._s(t.item.username.lastName)+" ")]),n(d,{attrs:{username:t.item.username,sender:!0,color:t.item.username.color}}),n("v-spacer"),t._v(" "+t._s(t.item.message)+" ")],1)],1)],1):t._e(),"You"!==t.item.username?n("v-container",{attrs:{fluid:""}},[n("v-col",[n(d,{attrs:{sender:!1,username:t.item.username,color:t.item.username.color}}),t._v(" "+t._s(t.item.username.name)+" "+t._s(t.item.username.lastName)+" "),n("v-spacer"),n("span",{staticClass:"red--text"},[t._v(" "+t._s(t.item.message)+" ")])],1)],1):t._e()],1)},v=[],m={components:{ProfileIcon:d},props:["item","color"]},y=m,g=n(2026),x=n(7024),b=n(1819),T=n(7894),_=n(2515),S=(0,a.Z)(y,h,v,!1,null,null,null),C=S.exports;c()(S,{VCard:g.Z,VCol:x.Z,VContainer:b.Z,VRow:T.Z,VSpacer:_.Z});var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{ref:"container",staticStyle:{height:"500px",overflow:"auto"},attrs:{fluid:""}},t._l(t.chat,(function(e,r){return n("div",{key:r,class:["flex-row align-right","You"==e.username?"justify-end":null]},["system"===e.username?n("a",[n("div",{class:e.color+"--text text-center"},[n("h1",[t._v(t._s(e.message))])])]):t._e(),"system"!==e.username?n("a",[n(C,{attrs:{item:e,color:"purple lighten-4"}})],1):t._e()])})),0)},I=[],j={props:["chat"],components:{MessageChat:C},updated(){this.scrollToBottom()},methods:{scrollToBottom(){const t=this.$refs.container;t.scrollTop=t.scrollHeight}}},O=j,A=(0,a.Z)(O,E,I,!1,null,null,null),w=A.exports;c()(A,{VContainer:b.Z})},4577:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",[t.users.length>3?n("a",[n("v-avatar",{attrs:{color:"warning lighten-2",size:"67"}})],1):n("a",t._l(t.users,(function(e,r){return n("v-avatar",{key:r,attrs:{color:"#"+e.color,size:"67"}},[n("span",{staticClass:"white--text"},[t._v(t._s(e.username))])])})),1)])},i=[],o={props:["users"]},s=o,a=n(1001),u=n(3453),c=n.n(u),l=n(3811),f=(0,a.Z)(s,r,i,!1,null,null,null),p=f.exports;c()(f,{VAvatar:l.Z})},3354:function(t){
/*!
 * vue-typer v1.2.0
 * Copyright 2016-2017 Chris Nguyen
 * Released under the MIT license.
 */
!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)}([function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(4)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(1),i=n(0),o=n(30),s=n(34),a=function(t,e,n){var u,c,l,f=t&a.F,p=t&a.G,d=t&a.S,h=t&a.P,v=t&a.B,m=t&a.W,y=p?i:i[e]||(i[e]={}),g=y.prototype,x=p?r:d?r[e]:(r[e]||{}).prototype;for(u in p&&(n=e),n)(c=!f&&x&&void 0!==x[u])&&u in y||(l=c?x[u]:n[u],y[u]=p&&"function"!=typeof x[u]?n[u]:v&&c?o(l,r):m&&x[u]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?o(Function.call,l):l,h&&((y.virtual||(y.virtual={}))[u]=l,t&a.R&&g&&!g[u]&&s(g,u,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var u=a.computed||(a.computed={});Object.keys(r).forEach((function(t){var e=r[t];u[t]=function(){return e}}))}return{esModule:i,exports:o,options:a}}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var o=d++;r=p||(p=i()),e=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function a(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(64),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=l[s.id];a.refs--,n.push(a)}e?(i=c(t,e),r(i)):i=[];for(o=0;o<n.length;o++){a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete l[a.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(36),i=n(9);t.exports=function(t){return r(i(t))}},function(t,e,n){n(63);var r=n(7)(n(19),n(60),"data-v-c41bac74",null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VueTyper=void 0;var r=n(12),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.VueTyper=i.default,e.default={install:function(t){t.component("vue-typer",i.default)}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return"number"==typeof t&&!(0,c.default)(t)&&(0,a.default)(t)}function o(t,e){return i(t)&&i(e)&&t<=e}Object.defineProperty(e,"__esModule",{value:!0});var s=n(20),a=r(s),u=n(21),c=r(u);e.default=function(t,e){return o(t,e)?(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t):-1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!Array.isArray(t)||!Array.isArray(e))return!1;if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}},function(t,e,n){"use strict";function r(t,e,n){if(e!==n){var r=t[e];t[e]=t[n],t[n]=r}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t){if(t instanceof Array)for(var e=t.length-1;e>0;e--){var n=(0,o.default)(0,e);r(t,e,n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{animation:{type:String,default:"blink",validator:function(t){return/^solid$|^blink$|^smooth$|^phase$|^expand$/.test(t)}}},computed:{animationClass:function(){return"vue-typer-caret-"+this.animation}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{val:{type:String,default:""}},computed:{classes:function(){return{newline:0===this.val.indexOf("\n")}}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(22),o=r(i),s=n(56),a=r(s),u=n(57),c=r(u),l=n(15),f=r(l),p=n(16),d=r(p),h=n(55),v=r(h),m={IDLE:"idle",TYPING:"typing",ERASING:"erasing",COMPLETE:"complete"},y={BACKSPACE:"backspace",SELECT_BACK:"select-back",SELECT_ALL:"select-all",CLEAR:"clear"};e.default={name:"VueTyper",components:{Caret:a.default,Char:c.default},props:{text:{type:[String,Array],required:!0,validator:function(t){return"string"==typeof t?t.length>0:t.every((function(t){return"string"==typeof t&&t.length>0}))}},repeat:{type:Number,default:1/0,validator:function(t){return t>=0}},shuffle:{type:Boolean,default:!1},initialAction:{type:String,default:m.TYPING,validator:function(t){return!!t.match("^"+m.TYPING+"|"+m.ERASING+"$")}},preTypeDelay:{type:Number,default:70,validator:function(t){return t>=0}},typeDelay:{type:Number,default:70,validator:function(t){return t>=0}},preEraseDelay:{type:Number,default:2e3,validator:function(t){return t>=0}},eraseDelay:{type:Number,default:250,validator:function(t){return t>=0}},eraseStyle:{type:String,default:y.SELECT_ALL,validator:function(t){return(0,o.default)(y).some((function(e){return y[e]===t}))}},eraseOnComplete:{type:Boolean,default:!1},caretAnimation:String},data:function(){return{state:m.IDLE,nextState:null,spool:[],spoolIndex:-1,previousTextIndex:-1,currentTextIndex:-1,repeatCounter:0,actionTimeout:0,actionInterval:0}},computed:{caretClasses:function(){var t=this.state===m.IDLE;return{idle:t,"pre-type":t&&this.nextState===m.TYPING,"pre-erase":t&&this.nextState===m.ERASING,typing:this.state===m.TYPING,selecting:this.state===m.ERASING&&this.isSelectionBasedEraseStyle,erasing:this.state===m.ERASING&&!this.isSelectionBasedEraseStyle,complete:this.state===m.COMPLETE}},rightCharClasses:function(){return{selected:this.state===m.ERASING&&this.isSelectionBasedEraseStyle,erased:this.state!==m.ERASING||this.state===m.ERASING&&!this.isSelectionBasedEraseStyle}},isSelectionBasedEraseStyle:function(){return!!this.eraseStyle.match("^"+y.SELECT_BACK+"|"+y.SELECT_ALL+"$")},isEraseAllStyle:function(){return!!this.eraseStyle.match("^"+y.CLEAR+"|"+y.SELECT_ALL+"$")},isDoneTyping:function(){return this.currentTextIndex>=this.currentTextLength},isDoneErasing:function(){return this.isSelectionBasedEraseStyle?this.currentTextIndex<=0&&this.previousTextIndex<=0:this.currentTextIndex<=0},onLastWord:function(){return this.spoolIndex===this.spool.length-1},shouldRepeat:function(){return this.repeatCounter<this.repeat},currentText:function(){return this.spoolIndex>=0&&this.spoolIndex<this.spool.length?this.spool[this.spoolIndex]:""},currentTextArray:function(){return(0,v.default)(this.currentText,"")},currentTextLength:function(){return this.currentTextArray.length},numLeftChars:function(){return this.currentTextIndex<0?0:this.currentTextIndex},numRightChars:function(){return this.currentTextLength-this.numLeftChars}},mounted:function(){this.init()},beforeDestroy:function(){this.cancelCurrentAction()},methods:{init:function(){if("string"==typeof this.text)this.spool=[this.text];else{var t=this.text.slice();t=t.filter((function(t){return t.length>0})),this.spool=t}this.repeatCounter=0,this.resetSpool(),this.initialAction===m.TYPING?this.startTyping():this.initialAction===m.ERASING&&(this.moveCaretToEnd(),this.onTyped())},reset:function(){this.cancelCurrentAction(),this.init()},resetSpool:function(){this.spoolIndex=0,this.shuffle&&this.spool.length>1&&(0,d.default)(this.spool)},cancelCurrentAction:function(){this.actionInterval&&(clearInterval(this.actionInterval),this.actionInterval=0),this.actionTimeout&&(clearTimeout(this.actionTimeout),this.actionTimeout=0)},shiftCaret:function(t){this.previousTextIndex=this.currentTextIndex;var e=this.currentTextIndex+t;this.currentTextIndex=Math.min(Math.max(e,0),this.currentTextLength)},moveCaretToStart:function(){this.previousTextIndex=this.currentTextIndex,this.currentTextIndex=0},moveCaretToEnd:function(){this.previousTextIndex=this.currentTextIndex,this.currentTextIndex=this.currentTextLength},typeStep:function(){if(!this.isDoneTyping){this.shiftCaret(1);var t=this.previousTextIndex,e=this.currentTextArray[t];this.$emit("typed-char",e,t)}this.isDoneTyping&&(this.cancelCurrentAction(),this.$nextTick(this.onTyped))},eraseStep:function(){this.isDoneErasing||(this.isEraseAllStyle?this.moveCaretToStart():this.shiftCaret(-1)),this.isDoneErasing&&(this.cancelCurrentAction(),this.$nextTick(this.onErased))},startTyping:function(){var t=this;this.actionTimeout||this.actionInterval||(this.moveCaretToStart(),this.state=m.IDLE,this.nextState=m.TYPING,this.actionTimeout=setTimeout((function(){t.state=m.TYPING,t.typeStep(),t.isDoneTyping||(t.actionInterval=setInterval(t.typeStep,t.typeDelay))}),this.preTypeDelay))},startErasing:function(){var t=this;this.actionTimeout||this.actionInterval||(this.moveCaretToEnd(),this.state=m.IDLE,this.nextState=m.ERASING,this.actionTimeout=setTimeout((function(){t.state=m.ERASING,t.eraseStep(),t.isDoneErasing||(t.actionInterval=setInterval(t.eraseStep,t.eraseDelay))}),this.preEraseDelay))},onTyped:function(){this.$emit("typed",this.currentText),this.onLastWord?this.eraseOnComplete||this.shouldRepeat?this.startErasing():this.onComplete():this.startErasing()},onErased:function(){this.$emit("erased",this.currentText),this.onLastWord?this.shouldRepeat?(this.repeatCounter++,this.resetSpool(),this.startTyping()):this.onComplete():(this.spoolIndex++,this.startTyping())},onComplete:function(){this.state=m.COMPLETE,this.nextState=null,this.$emit("completed")}},watch:{text:function(t,e){t===e||(0,f.default)(t,e)||this.reset()},repeat:function(){this.reset()},shuffle:function(){this.reset()}}}},function(t,e,n){t.exports={default:n(23),__esModule:!0}},function(t,e,n){t.exports={default:n(24),__esModule:!0}},function(t,e,n){t.exports={default:n(25),__esModule:!0}},function(t,e,n){n(49),t.exports=n(0).Number.isFinite},function(t,e,n){n(50),t.exports=n(0).Number.isNaN},function(t,e,n){n(51),t.exports=n(0).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(11),i=n(45),o=n(44);t.exports=function(t){return function(e,n,s){var a,u=r(e),c=i(u.length),l=o(s,c);if(t&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(26);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(5),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(37),i=n(41);t.exports=n(2)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(2)&&!n(4)((function(){return 7!=Object.defineProperty(n(31)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(27),i=n(35),o=n(47),s=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(33),i=n(11),o=n(28)(!1),s=n(42)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),u=0,c=[];for(n in a)n!=s&&r(a,n)&&c.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(38),i=n(32);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(3),i=n(0),o=n(4);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",s)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(43)("keys"),i=n(48);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(1),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(10),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(10),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(3),i=n(1).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,e,n){var r=n(3);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var r=n(46),i=n(39);n(40)("keys",(function(){return function(t){return i(r(t))}}))},function(t,e,n){e=t.exports=n(6)(),e.push([t.i,".char[data-v-302772ec]{display:inline-block;white-space:pre-wrap}.newline[data-v-302772ec]{display:inline}.typed[data-v-302772ec]{color:#000;background-color:transparent}.selected[data-v-302772ec]{color:#000;background-color:#accef7}.erased[data-v-302772ec]{display:none}",""])},function(t,e,n){e=t.exports=n(6)(),e.push([t.i,'@keyframes vue-typer-caret-blink{50%{opacity:0}to{opacity:1}}@keyframes vue-typer-caret-smooth{0%,20%{opacity:1}60%,to{opacity:0}}@keyframes vue-typer-caret-phase{0%,20%{opacity:1}90%,to{opacity:0}}@keyframes vue-typer-caret-expand{0%,20%{transform:scaleY(1)}80%,to{transform:scaleY(0)}}.vue-typer-caret-blink[data-v-a16e0f02]{animation:vue-typer-caret-blink 1s step-start 0s infinite}.vue-typer-caret-smooth[data-v-a16e0f02]{animation:vue-typer-caret-smooth .5s ease-in-out 0s infinite alternate}.vue-typer-caret-phase[data-v-a16e0f02]{animation:vue-typer-caret-phase .5s ease-in-out 0s infinite alternate}.vue-typer-caret-expand[data-v-a16e0f02]{animation:vue-typer-caret-expand .5s ease-in-out 0s infinite alternate}span.caret[data-v-a16e0f02]:empty:before{content:"\\200B"}span[data-v-a16e0f02]{display:inline-block;width:1px}.idle[data-v-a16e0f02],.typing[data-v-a16e0f02]{background-color:#000}.selecting[data-v-a16e0f02]{display:none;background-color:#000}.erasing[data-v-a16e0f02]{background-color:#000}.complete[data-v-a16e0f02]{display:none;background-color:#000}',""])},function(t,e,n){e=t.exports=n(6)(),e.push([t.i,"span.vue-typer[data-v-c41bac74]{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}span.vue-typer span.left[data-v-c41bac74],span.vue-typer span.right[data-v-c41bac74]{display:inline}",""])},function(t,e,n){(function(t,n){function r(t){return t.split("")}function i(t){return D.test(t)}function o(t){return i(t)?s(t):r(t)}function s(t){return t.match(B)||[]}function a(t){return y(t)&&K.call(t)==j}function u(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=Array(i);++r<i;)o[r]=t[r+e];return o}function c(t){if("string"==typeof t)return t;if(x(t))return Q?Q.call(t):"";var e=t+"";return"0"==e&&1/t==-_?"-0":e}function l(t,e,n){var r=t.length;return n=void 0===n?r:n,!e&&n>=r?t:u(t,e,n)}function f(t,e){return!!(e=null==e?S:e)&&("number"==typeof t||A.test(t))&&t>-1&&t%1==0&&t<e}function p(t,e,n){if(!y(n))return!1;var r=typeof e;return!!("number"==r?h(n)&&f(e,n.length):"string"==r&&e in n)&&d(n[e],t)}function d(t,e){return t===e||t!==t&&e!==e}function h(t){return null!=t&&m(t.length)&&!v(t)}function v(t){var e=y(t)?K.call(t):"";return e==E||e==I}function m(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=S}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){return!!t&&"object"==typeof t}function x(t){return"symbol"==typeof t||g(t)&&K.call(t)==O}function b(t){return null==t?"":c(t)}function T(t,e,n){return n&&"number"!=typeof n&&p(t,e,n)&&(e=n=void 0),(n=void 0===n?C:n>>>0)?(t=b(t),t&&("string"==typeof e||null!=e&&!tt(e))&&!(e=c(e))&&i(t)?l(o(t),0,n):t.split(e,n)):[]}var _=1/0,S=9007199254740991,C=4294967295,E="[object Function]",I="[object GeneratorFunction]",j="[object RegExp]",O="[object Symbol]",A=/^(?:0|[1-9]\d*)$/,w="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",N="\\ud83c[\\udffb-\\udfff]",L="(?:\\ud83c[\\udde6-\\uddff]){2}",M="[\\ud800-\\udbff][\\udc00-\\udfff]",P="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",R="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",L,M].join("|")+")[\\ufe0e\\ufe0f]?"+P+")*",k="[\\ufe0e\\ufe0f]?"+P+R,$="(?:"+["[^\\ud800-\\udfff]"+w+"?",w,L,M,"[\\ud800-\\udfff]"].join("|")+")",B=RegExp(N+"(?="+N+")|"+$+k,"g"),D=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),G="object"==typeof t&&t&&t.Object===Object&&t,Z="object"==typeof self&&self&&self.Object===Object&&self,F=G||Z||Function("return this")(),Y="object"==typeof e&&e&&!e.nodeType&&e,V=Y&&"object"==typeof n&&n&&!n.nodeType&&n,W=V&&V.exports===Y,z=W&&G.process,U=function(){try{return z&&z.binding("util")}catch(t){}}(),X=U&&U.isRegExp,q=Object.prototype,K=q.toString,H=F.Symbol,J=H?H.prototype:void 0,Q=J?J.toString:void 0,tt=X?function(t){return function(e){return t(e)}}(X):a;n.exports=T}).call(e,n(65),n(66)(t))},function(t,e,n){n(62);var r=n(7)(n(17),n(59),"data-v-a16e0f02",null);t.exports=r.exports},function(t,e,n){n(61);var r=n(7)(n(18),n(58),"data-v-302772ec",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"char",class:t.classes},[t._v(t._s(t.val))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"caret custom",class:t.animationClass})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"vue-typer"},[n("span",{staticClass:"left"},t._l(t.numLeftChars,(function(e){return n("char",{staticClass:"custom typed",attrs:{val:t.currentTextArray[e-1]}})}))),n("caret",{class:t.caretClasses,attrs:{animation:t.caretAnimation}}),n("span",{staticClass:"right"},t._l(t.numRightChars,(function(e){return n("char",{staticClass:"custom",class:t.rightCharClasses,attrs:{val:t.currentTextArray[t.numLeftChars+e-1]}})})))],1)},staticRenderFns:[]}},function(t,e,n){var r=n(52);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(8)("3bfdc45b",r,!0)},function(t,e,n){var r=n(53);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(8)("0dba035c",r,!0)},function(t,e,n){var r=n(54);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(8)("0f4cea8e",r,!0)},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=o[0],a=o[1],u=o[2],c=o[3],l={id:t+":"+i,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}])}))},2151:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=n(4456),i=n(5836),o=n(2066),s=n(4552),a=n(144),u=a.Z.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),c=n(8747),l=n(5530),f=n(8131),p=(0,l.Z)(i.Z,(0,c.d)(["left","bottom"]),o.Z,s.Z,u).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(t){return`calc(100% - ${(0,f.kb)(t||this.offset)})`},genBadge(){const t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),n=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),r=this.$createElement("span",n,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[r]):r},genBadgeContent(){if(this.dot)return;const t=(0,f.z9)(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(r.Z,this.icon):void 0)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(t){const e=[this.genBadgeWrapper()],n=[(0,f.z9)(this)],{"aria-atomic":r,"aria-label":i,"aria-live":o,role:s,title:a,...u}=this.$attrs;return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:u,class:this.classes},n)}})}}]);
//# sourceMappingURL=642.5a3d9f9a.js.map
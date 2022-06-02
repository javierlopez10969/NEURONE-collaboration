(function(){"use strict";var t={4144:function(t,e,n){var o=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[!0===t.widgetMode?n("div"):n("div",[n("NavBar",{attrs:{show:t.show,user:t.user}}),t._v(" "+t._s(t.currentRouteName)+" "+t._s(t.widgetMode)+" "),n("v-checkbox",{attrs:{label:"Checkbox 1: "+t.checkbox.toString()},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1),n("v-snackbar",{attrs:{timeout:3e3,color:t.snackColor,bottom:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}]),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v(" "+t._s(t.snackText)+" ")]),n("router-view",{attrs:{user:t.user}})],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",[t.show?n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("h1",[t._v("Collaboration for NEURONE")]),n("v-spacer"),n("v-btn",{attrs:{href:"/register"}},[n("v-span",[t._v("Register ")])],1),n("v-btn",{attrs:{href:"/login"}},[n("v-span",[t._v("Login ")])],1),n("v-btn",{attrs:{href:"/chat"}},[n("v-span",[t._v("Chat room ")])],1)],1):t._e(),t.show?t._e():n("a",[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:"",color:"primary"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("SideBar")],1),n("v-app-bar",{attrs:{color:"primary","clipped-left":t.clipped,fixed:"",dark:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("mdi-application")])],1),n("v-btn",{attrs:{icon:"",href:"/home"}},[n("v-icon",[t._v("mdi-home")])],1),n("h1",[t._v("Collaboration for NEURONE")]),n("v-spacer")],1),n("v-footer",{attrs:{absolute:!1,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{nav:"",dense:""}},[n("IconProfile",{attrs:{user:t.user}}),n("v-list",t._l(t.items,(function(e,o){return n("v-list-item",{key:o,staticClass:"white--text",attrs:{to:e.to,router:"",exact:"",dark:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1),n("v-list-item",{attrs:{bottom:""}},[n("v-btn",{on:{click:t.logout}},[n("span",[t._v("Logout ")])])],1)],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-list",[n("v-list-item",{staticClass:"px-2"},[n("v-avatar",{attrs:{color:t.user.color}},[n("span",{staticClass:"white--text text-h5"},[t._v(t._s(t.letter))])])],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[t._v(" "+t._s(t.user.name)+" "+t._s(t.user.lastName)+" ")])],1)],1)],1),n("h4",[t._v(t._s(t.user.email))])],1)},p=[],d={data:()=>({hover:!1}),props:["user"],computed:{letter(){return"You"}}},m=d,f=n(1001),v=n(3453),h=n.n(v),g=n(3811),b=n(1819),k=n(893),_=n(907),w=n(6761),y=(0,f.Z)(m,l,p,!1,null,null,null),x=y.exports;h()(y,{VAvatar:g.Z,VContainer:b.Z,VList:k.Z,VListItem:_.Z,VListItemContent:w.km,VListItemTitle:w.V9});var Z={components:{IconProfile:x},methods:{logout(){localStorage.clear(),this.$store.commit("updateUser",{}),this.$router.go("/login")}},computed:{user(){return this.$store.state.user}},data:()=>({items:[{icon:"mdi-account-group",title:"My groups",to:"/home"},{icon:"mdi-account-group-outline",title:"Administer your Groups",to:"/my-groups"},{icon:"mdi-account",title:"Edit Profile",to:"/editprofile"}]})},C=Z,V=n(6847),P=n(4456),S=n(3444),E=(0,f.Z)(C,c,u,!1,null,null,null),$=E.exports;h()(E,{VBtn:V.Z,VIcon:P.Z,VList:k.Z,VListItem:_.Z,VListItemAction:S.Z,VListItemContent:w.km,VListItemTitle:w.V9});var L={props:["show","user"],name:"NavBar",data:()=>({clipped:!1,drawer:!0,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1}),components:{SideBar:$}},N=L,I=n(7666),T=n(5078),O=n(7718),A=n(1373),B=n(2515),j=(0,f.Z)(N,i,s,!1,null,null,null),M=j.exports;h()(j,{VAppBar:I.Z,VAppBarNavIcon:T.Z,VBtn:V.Z,VFooter:O.Z,VIcon:P.Z,VNavigationDrawer:A.Z,VSpacer:B.Z});var R=n(9669),U=n.n(R),F=n(629),D=n(1157);o.Z.use(F.ZP);var G=new F.ZP.Store({state:{user:{},token:"",socket:{},groups:[],group:{},snack:!1,snackText:"",snackColor:"",apiURL:"http://localhost:3000/api"},mutations:{setToken(t,e){t.token=e},updateUser(t,e){t.user=e},updateGroups(t,e){t.groups=e},updateGroup(t,e){t.group=t.groups[e]},socketConnection(t){t.socket=D.io.connect("http://localhost:3000"),t.socket.on("connect",(()=>{console.log(`You connected with id : ${t.socket.id}`)})),t.socket.emit("login",t.user,t.groups)},logout(t){t.user={},t.token=""},setSnack(t,e){t.snack=!0,t.snackColor=e.color,console.log(e.color),t.snackText=e.text}}}),Y={store:G,name:"App",data(){return{show:!0,checkbox:!0,tamanoRoute:0,user:{},token:""}},components:{NavBar:M},methods:{hideMethod(){return null===localStorage.getItem("token")}},created(){this.show=this.hideMethod(),this.token=localStorage.getItem("token"),console.log(localStorage.getItem("token"))},computed:{currentRouteName(){return this.$route.name},widgetMode(){return"widget"==this.$route.name},snack:{get:function(){return this.$store.state.snack},set:function(t){return t}},snackText(){return this.$store.state.snackText},snackColor(){return this.$store.state.snackColor}},mounted(){localStorage.getItem("token")&&U().get(this.$store.state.apiURL+"/user",{headers:{token:localStorage.getItem("token")}}).then((t=>{this.user=t.data.user,this.$store.commit("updateUser",t.data.user),U().get(this.$store.state.apiURL+"/group/user/"+this.$store.state.user._id).then((t=>{this.$store.commit("updateGroups",t.data),this.$store.commit("socketConnection")}))}))}},q=Y,H=n(303),K=n(7906),z=n(4021),J=n(4654),Q=(0,f.Z)(q,r,a,!1,null,null,null),W=Q.exports;h()(Q,{VApp:H.Z,VBtn:V.Z,VCheckbox:K.Z,VMain:z.Z,VSnackbar:J.Z});var X=n(8345),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"text-center"},[n("h1",[t._v("Collaboration")]),n("v-spacer"),n("v-btn",{attrs:{href:"/login"}},[n("span",[t._v(" Login")])]),n("v-btn")],1)},et=[],nt={name:"HomePage"},ot=nt,rt=(0,f.Z)(ot,tt,et,!1,null,null,null),at=rt.exports;h()(rt,{VBtn:V.Z,VContainer:b.Z,VSpacer:B.Z}),o.Z.use(X.Z);const it=[{path:"/",name:"home",component:at},{path:"/register",name:"register",component:()=>Promise.all([n.e(387),n.e(84)]).then(n.bind(n,4084))},{path:"/login",name:"login",component:()=>Promise.all([n.e(387),n.e(89)]).then(n.bind(n,89))},{path:"/home",name:"landing",component:()=>Promise.all([n.e(387),n.e(218),n.e(404),n.e(124),n.e(500)]).then(n.bind(n,3500))},{path:"/editprofile",name:"Edit Profile",component:()=>Promise.all([n.e(387),n.e(218),n.e(952)]).then(n.bind(n,5998))},{path:"/my-group/:id",name:"group",component:()=>Promise.all([n.e(387),n.e(218),n.e(404),n.e(124),n.e(856),n.e(919)]).then(n.bind(n,6099))},{path:"/chat",name:"chat",component:()=>Promise.all([n.e(387),n.e(856),n.e(306)]).then(n.bind(n,1054))},{path:"/test",name:"test",component:()=>n.e(519).then(n.bind(n,6519))},{path:"/widget",name:"widget",component:()=>Promise.all([n.e(404),n.e(467)]).then(n.bind(n,1251))}],st=new X.Z({mode:"history",routes:it});var ct=st,ut=n(7583);o.Z.use(ut.Z);var lt=new ut.Z({});o.Z.config.productionTip=!1,new o.Z({router:ct,store:G,vuetify:lt,render:t=>t(W)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{84:"4b19e974",89:"029ad89d",124:"71cf9174",218:"fdbb8692",306:"7b999b5c",387:"0c5b0716",404:"8a964f4f",467:"2c855695",500:"c9ffb4ff",519:"d9fc9b93",856:"b789e1e3",919:"8743c9d9",952:"14556c51"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{124:"9f10e692",306:"3bc502de",387:"34583996",467:"305e9a03",500:"8f916c08",519:"185690fa",919:"2b948c6d",952:"933efdb4"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";n.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==e+a){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=o),t[o]=[r];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(m);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===t||a===e)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(e(i,s))return r();t(o,s,r,a)}))},r={143:0};n.f.miniCss=function(t,e){var n={124:1,306:1,387:1,467:1,500:1,519:1,919:1,952:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(e),s=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(e&&e(o);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4144)}));o=n.O(o)})();
//# sourceMappingURL=app.a35b71d7.js.map
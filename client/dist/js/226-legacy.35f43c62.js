(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[226],{2261:function(t,e,s){"use strict";var n=s(6916),r=s(1702),i=s(1340),a=s(7066),o=s(2999),l=s(2309),c=s(30),u=s(9909).get,d=s(9441),p=s(7168),h=l("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,m=v,g=r("".charAt),f=r("".indexOf),x=r("".replace),k=r("".slice),b=function(){var t=/a/,e=/b*/g;return n(v,t,"a"),n(v,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),w=o.BROKEN_CARET,y=void 0!==/()??/.exec("")[1],C=b||y||w||d||p;C&&(m=function(t){var e,s,r,o,l,d,p,C=this,T=u(C),R=i(t),_=T.raw;if(_)return _.lastIndex=C.lastIndex,e=n(m,_,R),C.lastIndex=_.lastIndex,e;var E=T.groups,I=w&&C.sticky,Z=n(a,C),B=C.source,$=0,A=R;if(I&&(Z=x(Z,"y",""),-1===f(Z,"g")&&(Z+="g"),A=k(R,C.lastIndex),C.lastIndex>0&&(!C.multiline||C.multiline&&"\n"!==g(R,C.lastIndex-1))&&(B="(?: "+B+")",A=" "+A,$++),s=new RegExp("^(?:"+B+")",Z)),y&&(s=new RegExp("^"+B+"$(?!\\s)",Z)),b&&(r=C.lastIndex),o=n(v,I?s:C,A),I?o?(o.input=k(o.input,$),o[0]=k(o[0],$),o.index=C.lastIndex,C.lastIndex+=o[0].length):C.lastIndex=0:b&&o&&(C.lastIndex=C.global?o.index+o[0].length:r),y&&o&&o.length>1&&n(h,o[0],s,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o&&E)for(o.groups=d=c(null),l=0;l<E.length;l++)p=E[l],d[p[0]]=o[p[1]];return o}),t.exports=m},7066:function(t,e,s){"use strict";var n=s(9670);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:function(t,e,s){var n=s(7293),r=s(7854),i=r.RegExp,a=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),o=a||n((function(){return!i("a","y").sticky})),l=a||n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:l,MISSED_STICKY:o,UNSUPPORTED_Y:a}},9441:function(t,e,s){var n=s(7293),r=s(7854),i=r.RegExp;t.exports=n((function(){var t=i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:function(t,e,s){var n=s(7293),r=s(7854),i=r.RegExp;t.exports=n((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},4916:function(t,e,s){"use strict";var n=s(2109),r=s(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},7601:function(t,e,s){"use strict";s(4916);var n=s(2109),r=s(7854),i=s(6916),a=s(1702),o=s(614),l=s(111),c=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),u=r.Error,d=a(/./.test);n({target:"RegExp",proto:!0,forced:!c},{test:function(t){var e=this.exec;if(!o(e))return d(this,t);var s=i(e,this,t);if(null!==s&&!l(s))throw new u("RegExp exec method returned something other than an Object or null");return!!s}})},2226:function(t,e,s){"use strict";s.d(e,{Z:function(){return w}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"mx-auto mt-5 rounded-lg",attrs:{width:"500px",elevation:"12"}},[s("v-container",{staticClass:"pa-7"},[s("v-card-title",{staticClass:"justify-center"},[s("p",{staticClass:"text-h4 text--primary"},[t._v(t._s(t.title))])]),"Register"==t.title?s("v-form",{ref:"form",staticClass:"form-signin",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.userLogin.apply(null,arguments)}}},[s("v-text-field",{attrs:{rules:t.emailRules,type:"email","prepend-icon":"mdi-email",label:"Email",required:"",placeholder:"name.lastname@email.web"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),s("v-text-field",{attrs:{type:"password",label:"Password",required:"","prepend-icon":"mdi-key",rules:t.passwordRules},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),s("v-btn",{staticClass:"mb-10 mt-3 text-center",attrs:{type:"submit",rounded:"",color:"secondary",light:"",block:""}},[t._v(" Login ")])],1):t._e(),"Login"==t.title?s("v-form",{ref:"form",staticClass:"form-signin",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.userLogin.apply(null,arguments)}}},[s("v-text-field",{attrs:{label:"Email*",rules:t.emailRules,"prepend-icon":"mdi-email",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),s("v-text-field",{attrs:{type:"password",label:"Password",required:"","prepend-icon":"mdi-key",rules:t.passwordRules},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),s("v-btn",{staticClass:"mb-10 mt-3 text-center",attrs:{type:"submit",rounded:"",color:"secondary",light:"",block:""}},[t._v(" Login ")])],1):t._e()],1),s("v-snackbar",{attrs:{top:"",right:"",timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[s("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v(" "+t._s(t.snackText)+" ")])],1)},r=[],i=s(6198),a=(s(5666),s(4916),s(7601),s(9669)),o=s.n(a),l={props:["title"],data:function(){return{snack:!1,snackColor:"",snackText:"",valid:!1,user:{email:"",password:""},passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=8||"Password is required"}],emailRules:[function(t){return!!t||"The email is required"},function(t){return/.+@.+\..+/.test(t)||"Invalid email"}]}},methods:{userLogin:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=22;break}return e.prev=1,e.next=4,o().post("http://localhost:3000/api/user/login",t.user);case 4:s=e.sent,localStorage.setItem("token",s.data.token),t.$store.commit("updateUser",s.data.user),t.snack=!0,t.snackColor="succes",t.snackText="Succesfully Login",t.$router.go("/home"),e.next=20;break;case 13:e.prev=13,e.t0=e["catch"](1),console.log(e.t0),console.log(e.t0.response),t.snack=!0,t.snackColor="error",t.snackText="User or password wrong";case 20:e.next=25;break;case 22:t.snack=!0,t.snackColor="error",t.snackText="Put the required data";case 25:case"end":return e.stop()}}),e,null,[[1,13]])})))()}}},c=l,u=s(1001),d=s(3453),p=s.n(d),h=s(6847),v=s(2026),m=s(5255),g=s(1819),f=s(3240),x=s(4654),k=s(2660),b=(0,u.Z)(c,n,r,!1,null,null,null),w=b.exports;p()(b,{VBtn:h.Z,VCard:v.Z,VCardTitle:m.EB,VContainer:g.Z,VForm:f.Z,VSnackbar:x.Z,VTextField:k.Z})},4654:function(t,e,s){"use strict";s.d(e,{Z:function(){return d}});var n=s(801),r=s(5836),i=s(2066),a=s(4552),o=s(8747),l=s(5530),c=s(8131),u=s(8219),d=(0,l.Z)(n.Z,r.Z,a.Z,(0,o.d)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:t=>"string"===typeof t||!1===t},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:i.Z.options.computed.isDark.call(this)},styles(){if(this.absolute||!this.app)return{};const{bar:t,bottom:e,footer:s,insetFooter:n,left:r,right:i,top:a}=this.$vuetify.application;return{paddingBottom:(0,c.kb)(e+s+n),paddingLeft:(0,c.kb)(r),paddingRight:(0,c.kb)(i),paddingTop:(0,c.kb)(t+a)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&(0,u.Jk)("auto-height",this),0==this.timeout&&(0,u.Rn)('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[(0,c.z9)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[(0,c.z9)(this)])},genWrapper(){const t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:n.Z.options.computed.classes.call(this),style:n.Z.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:()=>window.clearTimeout(this.activeTimeout),pointerleave:this.setTimeout}});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout((()=>{this.isActive=!1}),t))}},render(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})}}]);
//# sourceMappingURL=226-legacy.35f43c62.js.map
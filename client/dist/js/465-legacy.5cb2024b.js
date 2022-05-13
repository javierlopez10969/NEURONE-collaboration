"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[465],{6893:function(t,e,s){s.r(e),s.d(e,{default:function(){return Lt}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-card",{attrs:{color:t.group.color,dark:"",loading:t.isUpdating},scopedSlots:t._u([{key:"progress",fn:function(){return[s("v-progress-linear",{attrs:{color:"green lighten-3",height:"4",indeterminate:""}})]},proxy:!0}])},[s("v-row",[s("v-row",{staticClass:"pa-4",attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center"},[s("h1",{staticClass:"text-h5"},[t._v(" "+t._s(t.group.name)+" ")]),s("h3",{staticClass:"text-h5"},[t._v(" "+t._s(t.name)+" ")]),s("span",{staticClass:"grey--text text--lighten-1"},[t._v(t._s(t.title))])])],1)],1),s("v-form",{ref:"form",staticClass:"form-signin",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.createGroup.apply(null,arguments)}}},[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{disabled:t.isUpdating,rules:t.nameRules,filled:"",required:"",color:"blue-grey lighten-2",label:"Name of the group"},model:{value:t.group.name,callback:function(e){t.$set(t.group,"name",e)},expression:"group.name"}}),s("v-text-field",{attrs:{disabled:t.isUpdating,rules:t.nameRules,filled:"",required:"",color:"blue-grey lighten-2",label:"Description"},model:{value:t.group.description,callback:function(e){t.$set(t.group,"description",e)},expression:"group.description"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("h1",[t._v("Choose a Color "+t._s(t.group.color))]),s("v-color-picker",{attrs:{"dot-size":"25","hide-inputs":"","hide-mode-switch":"",disabled:t.isUpdating,mode:"hexa","swatches-max-height":"200"},model:{value:t.group.color,callback:function(e){t.$set(t.group,"color",e)},expression:"group.color"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-autocomplete",{attrs:{disabled:t.isUpdating,items:t.users,filled:"",chips:"",color:"blue-grey lighten-2",label:"Select users to add to the group",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[s("v-chip",t._b({attrs:{"input-value":e.selected,close:""},on:{click:e.select,"click:close":function(s){return t.remove(e.item)}}},"v-chip",e.attrs,!1),[s("v-avatar",{attrs:{left:"",color:e.item.color}},[s("span",{staticClass:"white--text text-h5"},[t._v(t._s(e.item.name[0]))])]),t._v(" "+t._s(e.item.email)+" ")],1)]}},{key:"item",fn:function(e){return["object"!==typeof e.item?[s("v-list-item-content",{domProps:{textContent:t._s(e.item)}})]:[s("v-avatar",{attrs:{left:"",color:e.item.color}},[s("span",{staticClass:"white--text text-h5"},[t._v(t._s(e.item.name[0]))])]),s("v-list-item-content",[s("v-list-item-title",{domProps:{innerHTML:t._s(e.item.email)}}),s("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.item.name+" "+e.item.lastName)}})],1)]]}}]),model:{value:t.group.users,callback:function(e){t.$set(t.group,"users",e)},expression:"group.users"}})],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),s("v-btn",{attrs:{loading:t.isUpdating,color:"blue-grey darken-3",depressed:"",type:"submit"},on:{click:function(e){t.isUpdating=!0}}},[s("v-icon",{attrs:{left:""}},[t._v(" mdi-update ")]),t._v(" Save ")],1)],1)],1)],1),s("v-snackbar",{attrs:{timeout:3e3,color:t.snackColor,right:"",top:""},scopedSlots:t._u([{key:"action",fn:function(e){var i=e.attrs;return[s("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",i,!1),[t._v(" Close ")])]}}]),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v(" "+t._s(t.snackText)+" ")])],1)},n=[],r=s(9669),o=s.n(r),a={methods:{saveChanges:function(){}},data:function(){return{dialog:!1,autoUpdate:!0,isUpdating:!1,snack:!1,snackColor:"",snackText:"",valid:!1,name:"",users:[],title:"",group:{name:"",description:"",users:[],usersAdmin:[],color:"#448AD1",textColor:"",created_by:""},nameRules:[function(t){return!!t||"This field is required"},function(t){return t.length>=8||"This field is required"}]}},created:function(){var t=this,e="http://localhost:3000/api/group/".concat(this.$route.params.id);o().get(e,{headers:{token:localStorage.getItem("token")}}).then((function(e){t.group=e.data.group}))}},l=a,c=s(1001),h=s(3453),u=s.n(h),d=s(3489),p=s(3811),v=s(6847),f=s(2026),m=s(5255),g=s(5126),w=s(7024),b=s(214),x=s(1819),y=s(3240),k=s(4456),$=s(6761),C=s(510),T=s(7894),_=s(4654),S=s(2515),I=s(2660),Z=(0,c.Z)(l,i,n,!1,null,null,null),V=Z.exports;u()(Z,{VAutocomplete:d.Z,VAvatar:p.Z,VBtn:v.Z,VCard:f.Z,VCardActions:m.h7,VChip:g.Z,VCol:w.Z,VColorPicker:b.Z,VContainer:x.Z,VForm:y.Z,VIcon:k.Z,VListItemContent:$.km,VListItemSubtitle:$.oZ,VListItemTitle:$.V9,VProgressLinear:C.Z,VRow:T.Z,VSnackbar:_.Z,VSpacer:S.Z,VTextField:I.Z});var B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300",tile:""}},[s("v-list",{attrs:{flat:""}},[s("v-subheader",[t._v("REPORTS")]),s("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.group.users,(function(e,i){return s("v-list-item",{key:i},[s("v-list-item-content",[t._v(" "+t._s(e.name)+t._s(e.lastName)+" "+t._s(e._id)+" "+t._s(e.email)+" ")])],1)})),1)],1)],1)},A=[],O={props:["group"],created:function(){},data:function(){return{selectedItem:1}}},R=O,E=s(893),P=s(907),M=s(3080),N=s(6975),D=(0,c.Z)(R,B,A,!1,null,null,null),G=D.exports;u()(D,{VCard:f.Z,VList:E.Z,VListItem:P.Z,VListItemContent:$.km,VListItemGroup:M.Z,VSubheader:N.Z});var L=s(4577),z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{attrs:{cols:"4"}},[s(L.Z,{attrs:{users:t.onlineUsers},on:{"update:users":function(e){t.onlineUsers=e}}})],1)],1),s("v-col",[s("v-form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage.apply(null,arguments)}}},[s("v-text-field",{attrs:{outlined:"",filled:"","auto-grow":"",label:"Send a Message",placeholder:"Aa"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),s("v-btn",{attrs:{depressed:"",color:"primary",type:"submit"}},[t._v(" Send ")]),t.someoneTyping?s("vue-typer",{attrs:{text:"Someone is writting..."}}):t._e()],1)],1),s("Container",{attrs:{chat:t.chat},on:{"update:chat":function(e){t.chat=e}}}),s("v-snackbar",{attrs:{top:"",right:"",timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(e){var i=e.attrs;return[s("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",i,!1),[t._v(" Close ")])]}}]),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v(" "+t._s(t.snackText)+" ")])],1)},W=[],H=s(3186),U=s(3354),q={name:"ChatPage",components:{Container:H.Z,VueTyper:U.VueTyper,ConnectedUsers:L.Z},computed:{user:function(){return this.$store.state.user}},data:function(){return{snack:!1,snackColor:"",snackText:"",username:"You",usernameSocket:"",userProfile:{},socket:{},chat:[],message:"",onlineUsers:[],isTyping:!1,someoneTyping:!1,lastTypingTime:new Date,TYPING_TIMER_LENGTH:400,messageRules:[function(t){return!!t||"Message can't be empty"}]}},created:function(){this.socket=this.$store.state.socket},mounted:function(){var t=this;this.socket.on("message",(function(e){t.chat.push(e)})),this.socket.on("typing",(function(e){console.log(e),t.someoneTyping=!0})),this.socket.on("login",(function(e){t.usernameSocket=e.username})),this.socket.on("stop typing",(function(e){console.log(e),t.someoneTyping=!1})),this.socket.on("online users",(function(e){t.onlineUsers=e}))},watch:{message:function(){this.updateTyping()}},methods:{sendMessage:function(){var t=this;if(""!=this.message){var e={message:this.message,username:this.$store.state.user};o().post(this.$store.state.apiURL+"/message/send-message",{message:e,group:this.$route.params.id}).then((function(e){console.log(e.data),t.message=""}))}else this.snack=!0,this.snackText="Put some text pls",this.snackColor="red"},updateTyping:function(){var t=this;!1===this.isTyping&&(this.isTyping=!0,this.socket.emit("typing"),console.log("typing")),this.lastTypingTime=(new Date).getTime(),setTimeout((function(){var e=(new Date).getTime(),s=e-t.lastTypingTime;s>=t.TYPING_TIMER_LENGTH&&t.isTyping&&(t.socket.emit("stop typing"),t.isTyping=!1)}),this.TYPING_TIMER_LENGTH)}}},F=q,X=(0,c.Z)(F,z,W,!1,null,null,null),Y=X.exports;u()(X,{VBtn:v.Z,VCol:w.Z,VContainer:x.Z,VForm:y.Z,VRow:T.Z,VSnackbar:_.Z,VTextField:I.Z});var j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",[s("v-tab-item",[s("v-card",[s(Y)],1)],1),s("v-tab-item",[s("v-card",[s(Y)],1)],1),s("v-tab-item",[s("v-card",[s(Y)],1)],1),s("v-tab-item",[s("v-card",[s(Y)],1)],1),s("v-tab-item",[s("v-card",[s(Y)],1)],1),s("v-tab-item",[s("v-card",[s(G,{attrs:{group:t.group}})],1)],1),s("v-tab-item",[s("v-card",[s(V)],1)],1)],1)},J=[],K={props:["group"],components:{ChatView:Y,GroupSettings:V,GroupPeople:G},data:function(){return{}}},Q=K,tt=s(9536),et=tt.Z.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=tt.Z.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),st=(0,c.Z)(Q,j,J,!1,null,null,null),it=st.exports;u()(st,{VCard:f.Z,VTabItem:et});var nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{color:"basil",fluid:""}},[s("v-row",[s("v-col"),s("v-col",[s("v-card-title",{staticClass:"text-center justify-center"},[s("h1",{staticClass:"font-weight-bold text-h2 basil--text"},[t._v(t._s(t.group.name))])])],1),s("v-col",[s("v-btn",{attrs:{icon:""}},[s("v-icon",[t._v("mdi-account-multiple-plus")])],1)],1)],1),s("v-tabs",{attrs:{"background-color":"transparent",color:"basil",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e,i){return s("v-tab",{key:i},[s("v-icon",[t._v(" "+t._s(e.icon)+" ")]),t._v(" "+t._s(e.title)+" ")],1)})),1),s("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s(it,{attrs:{group:t.group}})],1)],1)},rt=[],ot={components:{GroupDetailContent:it},props:["group"],data:function(){return{tab:null,text:"hola",items:[{icon:"mdi-chat",title:"Group Chat"},{icon:"mdi-chart-box",title:"Activity"},{icon:"mdi-star-outline",title:"Bookmarks"},{icon:"mdi-file",title:"snippets"},{icon:"mdi-file-document",title:"Documents"},{icon:"mdi-account-group-outline",title:"People"},{icon:"mdi-cog",title:"Settings"}]}}},at=ot,lt=s(1302),ct=s(9367),ht=s(2066),ut=s(8131),dt=s(5530);const pt=(0,dt.Z)(ct.Z,(0,lt.d)("tabsBar"),ht.Z);var vt=pt.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...ct.Z.options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href;if(null==t)return t;if(this.$router&&this.to===Object(this.to)){const e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},methods:{click(t){this.disabled?t.preventDefault():(this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle())},toggle(){this.isActive&&(this.tabsBar.mandatory||this.to)||this.$emit("change")}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.attrs={...s.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:this.disabled?-1:0},s.on={...s.on,keydown:t=>{t.keyCode===ut.Do.enter&&this.click(t),this.$emit("keydown",t)}},t(e,s,this.$slots.default)}}),ft=s(9524),mt=s(6930),gt=s(7228),wt=s(9989),bt=s(161),xt=s(2706);function yt(t){const e=.501,s=Math.abs(t);return Math.sign(t)*(s/((1/e-2)*(1-s)+1))}function kt(t,e,s,i){const n=t.clientWidth,r=s?e.content-t.offsetLeft-n:t.offsetLeft;s&&(i=-i);const o=e.wrapper+i,a=n+r,l=.4*n;return r<=i?i=Math.max(r-l,0):o<=a&&(i=Math.min(i-(o-a-l),e.content-e.wrapper)),s?-i:i}function $t(t,e,s){const{offsetLeft:i,clientWidth:n}=t;if(s){const t=e.content-i-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=i+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}}const Ct=(0,dt.Z)(gt.y,wt.Z).extend({name:"base-slide-group",directives:{Resize:bt.Z,Touch:xt.Z},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>"boolean"===typeof t||["always","desktop","mobile"].includes(t)}},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{canTouch(){return"undefined"!==typeof window},__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...gt.y.options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$vuetify.rtl&&(t=-t);let e=t<=0?yt(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+yt(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform=`translateX(${e}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{onScroll(){this.$refs.wrapper.scrollLeft=0},onFocusin(t){if(this.isOverflowing)for(const e of(0,ut.iZ)(t))for(const t of this.items)if(t.$el===e)return void(this.scrollOffset=kt(t.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))},genNext(){const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const s=`${t[0].toUpperCase()}${t.slice(1)}`,i=this[`has${s}`];return this.showArrows||i?this.$createElement(ft.Z,{props:{disabled:!i}},this[`${e}Icon`]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(mt.Z5,[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset(t,e,s,i){const n=s?-1:1,r=n*i+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick(t){this.$emit(`click:${t}`),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){if(this.canTouch){if(!this.isSwiping){const e=t.touchmoveX-t.touchstartX,s=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(s),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd(){if(!this.canTouch)return;const{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){if(!this.selectedItem&&this.items.length){const t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=$t(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=kt(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame((()=>{if(this._isDestroyed)return;const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper+1<this.widths.content,this.scrollIntoView()}))}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});Ct.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var Tt=s(8191),_t=(0,dt.Z)(Ct,Tt.Z,ht.Z).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...Ct.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=Ct.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const s=this.items,i=t.path,n=e.path;let r=!1,o=!1;for(const a of s)if(a.to===n?o=!0:a.to===i&&(r=!0),r&&o)break;!r&&o&&(this.internalValue=void 0)}},render(t){const e=Ct.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),St=s(3269),It=St.Z.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...St.Z.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,e){return t.id||gt.y.options.methods.getValue.call(this,t,e)}}}),Zt=s(5836),Vt=(0,dt.Z)(Zt.Z).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),Bt=s(7779);const At=(0,dt.Z)(Zt.Z,Bt.Z,ht.Z);var Ot=At.extend().extend({name:"v-tabs",directives:{Resize:bt.Z},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:(0,ut.kb)(this.slider.height),left:this.isReversed?void 0:(0,ut.kb)(this.slider.left),right:this.isReversed?(0,ut.kb)(this.slider.right):void 0,top:this.vertical?(0,ut.kb)(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:(0,ut.kb)(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){this.$nextTick((()=>{window.setTimeout(this.callSlider,30)}))},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar(t,e){const s={style:{height:(0,ut.kb)(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(_t,s,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(It,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(Vt,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const s=[],i=[],n=this.$slots.default||[],r=n.length;for(let o=0;o<r;o++){const r=n[o];if(r.componentOptions)switch(r.componentOptions.Ctor.options.name){case"v-tabs-slider":e=r;break;case"v-tabs-items":t=r;break;case"v-tab-item":s.push(r);break;default:i.push(r)}else i.push(r)}return{tab:i,slider:e,items:t,item:s}}},render(t){const{tab:e,slider:s,items:i,item:n}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,s),this.genItems(i,n)])}}),Rt=(0,c.Z)(at,nt,rt,!1,null,null,null),Et=Rt.exports;u()(Rt,{VBtn:v.Z,VCard:f.Z,VCardTitle:m.EB,VCol:w.Z,VIcon:k.Z,VRow:T.Z,VTab:vt,VTabs:Ot,VTabsItems:It});var Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s(Et,{attrs:{group:t.group}})],1)},Mt=[],Nt={components:{GroupDetail:Et},data:function(){return{group:{}}},created:function(){var t=this,e="http://localhost:3000/api/group/".concat(this.$route.params.id);o().get(e,{headers:{token:localStorage.getItem("token")}}).then((function(e){t.group=e.data.group}))}},Dt=Nt,Gt=(0,c.Z)(Dt,Pt,Mt,!1,null,null,null),Lt=Gt.exports;u()(Gt,{VContainer:x.Z})},5255:function(t,e,s){s.d(e,{EB:function(){return l},ZB:function(){return a},h7:function(){return r}});var i=s(2026),n=s(8131);const r=(0,n.Ji)("v-card__actions"),o=(0,n.Ji)("v-card__subtitle"),a=(0,n.Ji)("v-card__text"),l=(0,n.Ji)("v-card__title");i.Z},3269:function(t,e,s){s.d(e,{Z:function(){return a}});var i=s(2706),n=s(8205),r=s(9524),o=s(7228),a=o.y.extend({name:"v-window",directives:{Touch:i.Z},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...o.y.options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,s=e?"-reverse":"";return`v-window-${t}${s}-transition`},hasActiveItems(){return Boolean(this.items.find((t=>!t.disabled)))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex(((t,e)=>this.internalValue===this.getValue(t,e)))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame((()=>this.isBooted=!0))},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){const t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,s){var i,o,a;const l={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,s()}},c={"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},h=null!=(i=null==(o=(a=this.$scopedSlots)[t])?void 0:o.call(a,{on:l,attrs:c}))?i:[this.$createElement(n.Z,{props:{icon:!0},attrs:c,on:l},[this.$createElement(r.Z,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:`v-window__${t}`},h)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const s=this.genIcon("prev",e,this.prev);s&&t.push(s)}const s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){const e=this.genIcon("next",s,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,s=this.items[e];return s.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,s=this.items[e];return s.disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const s=this.items.length,i=s-1;return s<=2?t<e:t===i&&0===e||(0!==t||e!==i)&&t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}})},9536:function(t,e,s){var i=s(6986),n=s(1302),r=s(2706),o=s(8131),a=s(5530);const l=(0,a.Z)(i.Z,(0,n.d)("windowGroup","v-window-item","v-window"));e["Z"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:r.Z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=(0,o.kb)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick((()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=(0,o.kb)(t.clientHeight))}))}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((()=>[this.genWindowItem()])))}})}}]);
//# sourceMappingURL=465-legacy.5cb2024b.js.map
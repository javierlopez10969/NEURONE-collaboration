"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[306],{1054:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("h1",[e._v("Register as "+e._s(e.userProfile.username))]),n("v-col",[n("ConnectedUsers",{attrs:{users:e.onlineUsers},on:{"update:users":function(t){e.onlineUsers=t}}})],1)],1),n("MessagesChat",{attrs:{chat:e.chat},on:{"update:chat":function(t){e.chat=t}}}),e.someoneTyping?n("vue-typer",{attrs:{text:"Someone is writting..."}}):e._e(),n("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.sendMessage.apply(null,arguments)}}},[n("v-footer",{attrs:{padless:"",absolute:""}},[n("v-container",[n("v-row",[n("v-text-field",{attrs:{outlined:"",filled:"","auto-grow":"",label:"Send a Message",placeholder:"Aa"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("v-btn",{attrs:{depressed:"",color:"primary",type:"submit"}},[e._v(" Send ")])],1)],1),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}})],1)],1)],1)},o=[],i=n(2029),a=n(1289),l=n(3354),r={name:"ChatPage",components:{MessagesChat:i.Z,VueTyper:l.VueTyper,ConnectedUsers:a.Z},data:function(){return{username:"You",userProfile:{},socket:{},chat:[],message:"",onlineUsers:[],isTyping:!1,someoneTyping:!1,lastTypingTime:new Date,TYPING_TIMER_LENGTH:400,messageRules:[function(e){return!!e||"Message can't be empty"}]}},created:function(){this.socket=this.$store.state.socket},mounted:function(){var e=this;this.socket.on("message",(function(t){e.chat.push(t)})),this.socket.on("typing",(function(t){console.log(t),e.someoneTyping=!0})),this.socket.on("stop typing",(function(t){console.log(t),e.someoneTyping=!1})),this.socket.on("online users",(function(t){e.onlineUsers=t}))},watch:{message:function(){this.updateTyping()}},methods:{sendMessage:function(){""!=this.message&&(this.socket.emit("message",this.message),this.chat.push({username:this.username,message:this.message}),this.message="")},updateTyping:function(){var e=this;!1===this.isTyping&&(this.isTyping=!0,this.socket.emit("typing"),console.log("typing")),this.lastTypingTime=(new Date).getTime(),setTimeout((function(){var t=(new Date).getTime(),n=t-e.lastTypingTime;n>=e.TYPING_TIMER_LENGTH&&e.isTyping&&(e.socket.emit("stop typing"),e.isTyping=!1)}),this.TYPING_TIMER_LENGTH)}}},u=r,c=n(1001),g=n(3453),f=n.n(g),d=n(6847),p=n(7024),m=n(1819),y=n(7718),h=n(3240),v=n(7894),T=n(2660),b=(0,c.Z)(u,s,o,!1,null,null,null),C=b.exports;f()(b,{VBtn:d.Z,VCol:p.Z,VContainer:m.Z,VFooter:y.Z,VForm:h.Z,VRow:v.Z,VTextField:T.Z})},7024:function(e,t,n){n(7273);var s=n(144),o=n(7559),i=n(8131);const a=["sm","md","lg","xl"],l=(()=>a.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),r=(()=>a.reduce(((e,t)=>(e["offset"+(0,i.jC)(t)]={type:[String,Number],default:null},e)),{}))(),u=(()=>a.reduce(((e,t)=>(e["order"+(0,i.jC)(t)]={type:[String,Number],default:null},e)),{}))(),c={col:Object.keys(l),offset:Object.keys(r),order:Object.keys(u)};function g(e,t,n){let s=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");s+=`-${n}`}return"col"!==e||""!==n&&!0!==n?(s+=`-${n}`,s.toLowerCase()):s.toLowerCase()}}const f=new Map;t["Z"]=s.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...r,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:s,parent:i}){let a="";for(const o in t)a+=String(t[o]);let l=f.get(a);if(!l){let e;for(e in l=[],c)c[e].forEach((n=>{const s=t[n],o=g(e,n,s);o&&l.push(o)}));const n=l.some((e=>e.startsWith("col-")));l.push({col:!n||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),f.set(a,l)}return e(t.tag,(0,o.ZP)(n,{class:l}),s)}})},7894:function(e,t,n){n(7273);var s=n(144),o=n(7559),i=n(8131);const a=["sm","md","lg","xl"],l=["start","end","center"];function r(e,t){return a.reduce(((n,s)=>(n[e+(0,i.jC)(s)]=t(),n)),{})}const u=e=>[...l,"baseline","stretch"].includes(e),c=r("align",(()=>({type:String,default:null,validator:u}))),g=e=>[...l,"space-between","space-around"].includes(e),f=r("justify",(()=>({type:String,default:null,validator:g}))),d=e=>[...l,"space-between","space-around","stretch"].includes(e),p=r("alignContent",(()=>({type:String,default:null,validator:d}))),m={align:Object.keys(c),justify:Object.keys(f),alignContent:Object.keys(p)},y={align:"align",justify:"justify",alignContent:"align-content"};function h(e,t,n){let s=y[e];if(null!=n){if(t){const n=t.replace(e,"");s+=`-${n}`}return s+=`-${n}`,s.toLowerCase()}}const v=new Map;t["Z"]=s.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...c,justify:{type:String,default:null,validator:g},...f,alignContent:{type:String,default:null,validator:d},...p},render(e,{props:t,data:n,children:s}){let i="";for(const o in t)i+=String(t[o]);let a=v.get(i);if(!a){let e;for(e in a=[],m)m[e].forEach((n=>{const s=t[n],o=h(e,n,s);o&&a.push(o)}));a.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),v.set(i,a)}return e(t.tag,(0,o.ZP)(n,{staticClass:"row",class:a}),s)}})}}]);
//# sourceMappingURL=306-legacy.e68421de.js.map
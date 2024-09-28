(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t),e.d(t,{extend:()=>h});const r=flarum.reg.get("core","admin/app");var a=e.n(r);const s=flarum.reg.get("core","common/extenders");var n=e.n(s);const l=flarum.reg.get("core","common/Model");var o=e.n(l);const i=flarum.reg.get("core","common/utils/computed");var u=e.n(i);const d=flarum.reg.get("core","common/utils/string");class c extends(o()){content(){return o().attribute("content").call(this)}contentHtml(){return o().attribute("contentHtml").call(this)}renderFailed(){return o().attribute("renderFailed").call(this)}contentPlain(){return u()("contentHtml",(e=>"string"==typeof e?(0,d.getPlainContent)(e):e)).call(this)}createdAt(){return o().attribute("createdAt",o().transformDate).call(this)}dialog(){return o().hasOne("dialog").call(this)}user(){return o().hasOne("user").call(this)}}flarum.reg.add("flarum-messages","common/models/DialogMessage",c);const m=flarum.reg.get("core","common/app");var g=e.n(m);class f extends(o()){title(){return o().attribute("title").call(this)}type(){return o().attribute("type").call(this)}lastMessageAt(){return o().attribute("lastMessageAt",o().transformDate).call(this)}createdAt(){return o().attribute("createdAt",o().transformDate).call(this)}users(){return o().hasMany("users").call(this)}firstMessage(){return o().hasOne("firstMessage").call(this)}lastMessage(){return o().hasOne("lastMessage").call(this)}unreadCount(){return o().attribute("unreadCount").call(this)}lastReadMessageId(){return o().attribute("lastReadMessageId").call(this)}lastReadAt(){return o().attribute("lastReadAt",o().transformDate).call(this)}recipient(){let e=this.users();return e?e.find((e=>e&&e.id()!==g().session.user.id())):null}}flarum.reg.add("flarum-messages","common/models/Dialog",f);const h=[(new(n().Store)).add("dialogs",f).add("dialog-messages",c),(new(n().Admin)).permission((()=>({icon:"fas fa-envelope-open-text",label:a().translator.trans("flarum-messages.admin.permissions.send_messages"),permission:"dialog.sendMessage",allowGuest:!1})),"start",98)];a().initializers.add("flarum-messages",(()=>{}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map
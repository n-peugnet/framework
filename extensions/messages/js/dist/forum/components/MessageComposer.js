"use strict";(self.webpackChunkmodule_exports=self.webpackChunkmodule_exports||[]).push([[451],{761:(s,e,t)=>{t.r(e),t.d(e,{default:()=>_});var i=t(805),r=t(488),o=t.n(r),a=t(592),n=t.n(a),l=t(233),c=t.n(l),d=t(821),p=t.n(d),u=t(336),h=t.n(u),f=t(732),g=t.n(f),b=t(917),x=t.n(b),y=t(547),C=t.n(y);class _ extends(n()){constructor(){super(...arguments),(0,i.A)(this,"recipients",void 0)}static initAttrs(s){super.initAttrs(s),s.placeholder=s.placeholder||c()(o().translator.trans("flarum-messages.forum.composer.placeholder",{},!0)),s.submitLabel=s.submitLabel||o().translator.trans("flarum-messages.forum.composer.submit_button",{},!0),s.confirmExit=s.confirmExit||c()(o().translator.trans("flarum-messages.forum.composer.discard_confirmation",{},!0)),s.className="ComposerBody--message"}oninit(s){super.oninit(s);let e=this.attrs.replyingTo?.users()||this.attrs.recipients||[];e&&(e=e.filter((s=>s&&s.id()!==o().session.user.id()))),this.composer.fields.recipients=this.composer.fields.recipients||p()(e),this.recipients=this.composer.fields.recipients}headerItems(){const s=super.headerItems();return s.add("recipients",m("div",{className:"MessageComposer-recipients"},!this.attrs.replyingTo&&m(h(),{type:"button",className:"Button Button--outline Button--compact",onclick:()=>o().modal.show(g(),{title:o().translator.trans("flarum-messages.forum.recipient_selection_modal.title",{},!0),selected:this.recipients(),maxItems:1,excluded:[o().session.user.id()],onsubmit:s=>{this.recipients(s)}})},o().translator.trans("flarum-messages.forum.composer.recipients")),!!this.recipients().length&&m("div",{className:"MessageComposer-recipients-label"},o().translator.trans("flarum-messages.forum.composer.to")),m("ul",{className:"MessageComposer-recipients-list"},this.recipients().map((s=>m("li",null,m(C(),{text:s.username()},m(x(),{user:s}))))))),100),s}data(){const s={content:this.composer.fields.content()};return this.attrs.replyingTo?s.relationships={dialog:{data:{id:this.attrs.replyingTo.id(),type:"dialogs"}}}:s.users=this.recipients().map((s=>({id:s.id()}))),s}onsubmit(){this.loading=!0;const s=this.data();o().store.createRecord("dialog-messages").save(s,{params:{include:["dialog"]}}).then((s=>{this.composer.hide(),m.route.set(o().route("dialog",{id:s.data.relationships.dialog.data.id})),this.attrs.onsubmit?.(s)}),this.loaded.bind(this))}}(0,i.A)(_,"focusOnSelector",(()=>".TextEditor-editor")),flarum.reg.add("flarum-messages","forum/components/MessageComposer",_)}}]);
//# sourceMappingURL=MessageComposer.js.map
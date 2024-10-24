"use strict";(self.webpackChunkflarum_core=self.webpackChunkflarum_core||[]).push([[378],{6296:(s,e,t)=>{t.d(e,{A:()=>h});var o=t(8805),r=t(5710),i=t(43);class n extends r.A{handler(){return this.attrs.when()||void 0}oncreate(s){super.oncreate(s),this.boundHandler=this.handler.bind(this),$(window).on("beforeunload",this.boundHandler)}onremove(s){super.onremove(s),$(window).off("beforeunload",this.boundHandler)}view(s){return m("[",null,s.children)}}flarum.reg.add("core","common/components/ConfirmDocumentUnload",n);var a=t(1611),c=t(5673),l=t(6064),d=t(4268),u=t(7891);class h extends r.A{constructor(){super(...arguments),(0,o.A)(this,"loading",!1),(0,o.A)(this,"composer",void 0),(0,o.A)(this,"jumpToPreview",void 0)}oninit(s){super.oninit(s),this.composer=this.attrs.composer,this.attrs.confirmExit&&this.composer.preventClosingWhen((()=>this.hasChanges()),this.attrs.confirmExit),this.composer.fields.content(this.attrs.originalContent||"")}view(){return m(n,{when:this.hasChanges.bind(this)},m("div",{className:(0,d.A)("ComposerBody",this.attrs.className)},m(u.A,{user:this.attrs.user,className:"ComposerBody-avatar"}),m("div",{className:"ComposerBody-content"},m("ul",{className:"ComposerBody-header"},(0,c.A)(this.headerItems().toArray())),m("div",{className:"ComposerBody-editor"},m(a.A,{submitLabel:this.attrs.submitLabel,placeholder:this.attrs.placeholder,disabled:this.loading||this.attrs.disabled,composer:this.composer,preview:this.jumpToPreview?.bind(this),onchange:this.composer.fields.content,onsubmit:this.onsubmit.bind(this),value:this.composer.fields.content()}))),m(i.A,{display:"unset",containerClassName:(0,d.A)("ComposerBody-loading",this.loading&&"active"),size:"large"})))}hasChanges(){const s=this.composer.fields.content();return Boolean(s)&&s!==this.attrs.originalContent}headerItems(){return new l.A}loaded(){this.loading=!1,m.redraw()}}(0,o.A)(h,"focusOnSelector",null),flarum.reg.add("core","forum/components/ComposerBody",h)},6349:(s,e,t)=>{t.r(e),t.d(e,{default:()=>d});var o=t(3554),r=t(6296),i=t(3092),n=t(7709),a=t(117),c=t(7479);function l(s){o.A.composer.isFullScreen()&&(o.A.composer.minimize(),s.stopPropagation())}class d extends r.A{static initAttrs(s){super.initAttrs(s),s.placeholder=s.placeholder||(0,a.A)(o.A.translator.trans("core.forum.composer_reply.body_placeholder")),s.submitLabel=s.submitLabel||o.A.translator.trans("core.forum.composer_reply.submit_button"),s.confirmExit=s.confirmExit||(0,a.A)(o.A.translator.trans("core.forum.composer_reply.discard_confirmation"))}headerItems(){const s=super.headerItems(),e=this.attrs.discussion;return s.add("title",m("h3",null,m(c.A,{name:"fas fa-reply"})," ",m(n.A,{href:o.A.route.discussion(e),onclick:l},e.title()))),s}jumpToPreview(s){l(s),m.route.set(o.A.route.discussion(this.attrs.discussion,"reply"))}data(){return{content:this.composer.fields.content(),relationships:{discussion:this.attrs.discussion}}}onsubmit(){const s=this.attrs.discussion;this.loading=!0,m.redraw();const e=this.data();o.A.store.createRecord("posts").save(e).then((e=>{if(o.A.viewingDiscussion(s)){const s=o.A.current.get("stream");s.update().then((()=>s.goToNumber(e.number())))}else{let s;const t=m(i.A,{className:"Button Button--link",onclick:()=>{m.route.set(o.A.route.post(e)),o.A.alerts.dismiss(s)}},o.A.translator.trans("core.forum.composer_reply.view_button"));s=o.A.alerts.show({type:"success",controls:[t]},o.A.translator.trans("core.forum.composer_reply.posted_message"))}this.composer.hide()}),this.loaded.bind(this))}}flarum.reg.add("core","forum/components/ReplyComposer",d)}}]);
//# sourceMappingURL=ReplyComposer.js.map
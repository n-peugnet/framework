(()=>{var t={757:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",s="second",r="minute",i="hour",a="day",o="week",u="month",c="quarter",l="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},$={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+v(s,2,"0")+":"+v(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(s,u),i=n-r<0,a=e.clone().add(s+(i?-1:1),u);return+(-(s+(n-r)/(i?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:o,d:a,D:d,h:i,m:r,s,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",y={};y[g]=p;var M=function(t){return t instanceof D},_=function t(e,n,s){var r;if(!e)return g;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(r=i),n&&(y[i]=n,r=i);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,r=o}return!s&&r&&(g=r),r||!s&&g},b=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},S=$;S.l=_,S.i=M,S.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function p(t){this.$L=_(t.locale,null,!0),this.parse(t)}var v=p.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(m);if(s){var r=s[2]-1||0,i=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return b(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<b(t)},v.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!S.u(e)||e,f=S.p(t),m=function(t,e){var s=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?s:s.endOf(a)},h=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,v=this.$M,$=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case l:return c?m(1,0):m(31,11);case u:return c?m(1,v):m(0,v+1);case o:var y=this.$locale().weekStart||0,M=(p<y?p+7:p)-y;return m(c?$-M:$+(6-M),v);case a:case d:return h(g+"Hours",0);case i:return h(g+"Minutes",1);case r:return h(g+"Seconds",2);case s:return h(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var o,c=S.p(t),f="set"+(this.$u?"UTC":""),m=(o={},o[a]=f+"Date",o[d]=f+"Date",o[u]=f+"Month",o[l]=f+"FullYear",o[i]=f+"Hours",o[r]=f+"Minutes",o[s]=f+"Seconds",o[n]=f+"Milliseconds",o)[c],h=c===a?this.$D+(e-this.$W):e;if(c===u||c===l){var p=this.clone().set(d,1);p.$d[m](h),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[S.p(t)]()},v.add=function(n,c){var d,f=this;n=Number(n);var m=S.p(c),h=function(t){var e=b(f);return S.w(e.date(e.date()+Math.round(t*n)),f)};if(m===u)return this.set(u,this.$M+n);if(m===l)return this.set(l,this.$y+n);if(m===a)return h(1);if(m===o)return h(7);var p=(d={},d[r]=t,d[i]=e,d[s]=1e3,d)[m]||1,v=this.$d.getTime()+n*p;return S.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",r=S.z(this),i=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=function(t,n,r,i){return t&&(t[n]||t(e,s))||r[n].slice(0,i)},d=function(t){return S.s(i%12||12,t,"0")},m=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:l(n.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:S.s(i,2,"0"),h:d(1),hh:d(2),a:m(i,a,!0),A:m(i,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:r};return s.replace(h,(function(t,e){return e||p[t]||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var m,h=S.p(d),p=b(n),v=(p.utcOffset()-this.utcOffset())*t,$=this-p,g=S.m(this,p);return g=(m={},m[l]=g/12,m[u]=g,m[c]=g/3,m[o]=($-v)/6048e5,m[a]=($-v)/864e5,m[i]=$/e,m[r]=$/t,m[s]=$/1e3,m)[h]||$,f?g:S.a(g)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=_(t,e,!0);return s&&(n.$L=s),n},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),w=D.prototype;return b.prototype=w,[["$ms",n],["$s",s],["$m",r],["$H",i],["$W",a],["$M",u],["$y",l],["$D",d]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,D,b),t.$i=!0),b},b.locale=_,b.isDayjs=M,b.unix=function(t){return b(1e3*t)},b.en=y[g],b.Ls=y,b.p={},b}()},221:function(t){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(s,r,i){var a=r.prototype;i.utc=function(t){return new r({date:t,utc:!0,args:arguments})},a.utc=function(e){var n=i(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},a.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var o=a.parse;a.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var u=a.init;a.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var c=a.utcOffset;a.utcOffset=function(s,r){var i=this.$utils().u;if(i(s))return this.$u?0:i(this.$offset)?c.call(this):this.$offset;if("string"==typeof s&&(s=function(t){void 0===t&&(t="");var s=t.match(e);if(!s)return null;var r=(""+s[0]).match(n)||["-",0,0],i=r[0],a=60*+r[1]+ +r[2];return 0===a?0:"+"===i?a:-a}(s),null===s))return this;var a=Math.abs(s)<=16?60*s:s,o=this;if(r)return o.$offset=a,o.$u=0===s,o;if(0!==s){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(a+u,t)).$offset=a,o.$x.$localOffset=u}else o=this.utc();return o};var l=a.format;a.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,e)},a.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var d=a.toDate;a.toDate=function(t){return"s"===t&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var f=a.diff;a.diff=function(t,e,n){if(t&&this.$u===t.$u)return f.call(this,t,e,n);var s=this.local(),r=i(t).local();return f.call(s,r,e,n)}}}()}},e={};function n(s){var r=e[s];if(void 0!==r)return r.exports;var i=e[s]={exports:{}};return t[s].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};(()=>{"use strict";n.r(s),n.d(s,{extend:()=>Q});const t=flarum.core.compat.extend,e=flarum.core.compat.app;var r=n.n(e);const i=flarum.core.compat["utils/UserControls"];var a=n.n(i);const o=flarum.core.compat["components/Button"];var u=n.n(o);const c=flarum.core.compat["components/Badge"];var l=n.n(c);const d=flarum.core.compat["models/User"];var f=n.n(d);function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function p(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,h(t,e)}const v=flarum.core.compat["forum/app"];var $=n.n(v);const g=flarum.core.compat["components/Modal"];var y=n.n(g);const M=flarum.core.compat["utils/Stream"];var _=n.n(M);const b=flarum.core.compat["utils/withAttr"];var S=n.n(b);const D=flarum.core.compat["common/utils/ItemList"];var w=n.n(D),O=n(757),x=n.n(O),T=n(221),U=n.n(T);function N(t){return x().utc(t).isSame(x().utc("2038-01-01"))}x().extend(U());var C=function(t){function e(){return t.apply(this,arguments)||this}p(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e);var n=this.attrs.user.suspendedUntil(),s=this.attrs.user.suspendReason(),r=this.attrs.user.suspendMessage(),i=null;new Date>n&&(n=null),n&&(i=9999===n.getFullYear()?"indefinitely":"limited"),this.status=_()(i),this.reason=_()(s),this.message=_()(r),this.daysRemaining=_()("limited"===i&&1-dayjs().diff(n,"days"))},n.className=function(){return"SuspendUserModal Modal--medium"},n.title=function(){return $().translator.trans("flarum-suspend.forum.suspend_user.title",{user:this.attrs.user})},n.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m("label",null,$().translator.trans("flarum-suspend.forum.suspend_user.status_heading")),m("div",null,this.formItems().toArray())),m("div",{className:"Form-group"},m(u(),{className:"Button Button--primary",loading:this.loading,type:"submit"},$().translator.trans("flarum-suspend.forum.suspend_user.submit_button")))))},n.radioItems=function(){var t=this,e=new(w());return e.add("not-suspended",m("label",{className:"checkbox"},m("input",{type:"radio",name:"status",checked:!this.status(),value:"",onclick:S()("value",this.status)}),$().translator.trans("flarum-suspend.forum.suspend_user.not_suspended_label")),100),e.add("indefinitely",m("label",{className:"checkbox"},m("input",{type:"radio",name:"status",checked:"indefinitely"===this.status(),value:"indefinitely",onclick:S()("value",this.status)}),$().translator.trans("flarum-suspend.forum.suspend_user.indefinitely_label")),90),e.add("time-suspension",m("label",{className:"checkbox SuspendUserModal-days"},m("input",{type:"radio",name:"status",checked:"limited"===this.status(),value:"limited",onclick:function(e){t.status(e.target.value),m.redraw.sync(),t.$(".SuspendUserModal-days-input input").select(),e.redraw=!1}}),$().translator.trans("flarum-suspend.forum.suspend_user.limited_time_label"),"limited"===this.status()&&m("div",{className:"SuspendUserModal-days-input"},m("input",{type:"number",min:"0",value:this.daysRemaining(),oninput:S()("value",this.daysRemaining),className:"FormControl"}),$().translator.trans("flarum-suspend.forum.suspend_user.limited_time_days_text"))),80),e},n.formItems=function(){var t=new(w());return t.add("radioItems",m("div",{className:"Form-group"},this.radioItems().toArray()),100),t.add("reason",m("div",{className:"Form-group"},m("label",null,$().translator.trans("flarum-suspend.forum.suspend_user.reason"),m("textarea",{className:"FormControl",bidi:this.reason,placeholder:$().translator.trans("flarum-suspend.forum.suspend_user.placeholder_optional"),rows:"2"}))),90),t.add("message",m("div",{className:"Form-group"},m("label",null,$().translator.trans("flarum-suspend.forum.suspend_user.display_message"),m("textarea",{className:"FormControl",bidi:this.message,placeholder:$().translator.trans("flarum-suspend.forum.suspend_user.placeholder_optional"),rows:"2"}))),80),t},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0;var n=null;switch(this.status()){case"indefinitely":n=new Date("2038-01-01");break;case"limited":n=dayjs().add(this.daysRemaining(),"days").toDate()}this.attrs.user.save({suspendedUntil:n,suspendReason:this.reason(),suspendMessage:this.message()}).then((function(){return e.hide()}),this.loaded.bind(this))},e}(y());const k=flarum.core.compat["components/Notification"];var Y=n.n(k),I=function(t){function e(){return t.apply(this,arguments)||this}p(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-ban"},n.href=function(){return $().route.user(this.attrs.notification.subject())},n.content=function(){var t=this.attrs.notification,e=t.content(),n=dayjs(e).from(t.createdAt(),!0);return N(e)?$().translator.trans("flarum-suspend.forum.notifications.user_suspended_indefinite_text"):$().translator.trans("flarum-suspend.forum.notifications.user_suspended_text",{timeReadable:n})},e}(Y()),F=function(t){function e(){return t.apply(this,arguments)||this}p(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-ban"},n.href=function(){return $().route.user(this.attrs.notification.subject())},n.content=function(){return this.attrs.notification,$().translator.trans("flarum-suspend.forum.notifications.user_unsuspended_text")},e}(Y());const H=flarum.core.compat["common/components/Modal"];var j=n.n(H);const L=flarum.core.compat["common/components/Button"];var A=n.n(L);const W=flarum.core.compat["common/helpers/fullTime"];var B=n.n(W),R=function(t){function e(){return t.apply(this,arguments)||this}p(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.message=this.attrs.message,this.until=this.attrs.until},n.className=function(){return"SuspensionInfoModal Modal"},n.title=function(){return $().translator.trans("flarum-suspend.forum.suspension_info.title")},n.content=function(){var t=N(new Date(this.until))?$().translator.trans("flarum-suspend.forum.suspension_info.indefinite"):$().translator.trans("flarum-suspend.forum.suspension_info.limited",{date:B()(this.until)});return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},this.message),m("p",{className:"helpText"},t),m("div",{className:"Form-group"},m(A(),{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},$().translator.trans("flarum-suspend.forum.suspension_info.dismiss_button")))))},n.hide=function(){localStorage.setItem("flarum-suspend.acknowledge-suspension",this.attrs.until.getTime()),this.attrs.state.close()},e}(j());function P(){return setTimeout((function(){if($().session.user){var t=$().session.user.suspendMessage(),e=$().session.user.suspendedUntil(),n=t&&e&&new Date<e,s=localStorage.getItem("flarum-suspend.acknowledge-suspension")===(null==e?void 0:e.getTime().toString());n&&!s?$().modal.show(R,{message:t,until:e}):localStorage.getItem("flarum-suspend.acknowledge-suspension")&&localStorage.removeItem("flarum-suspend.acknowledge-suspension")}}),0)}const z=flarum.core.compat["common/extenders"];var Z=n.n(z);const J=flarum.core.compat["common/models/User"];var V=n.n(J);const q=flarum.core.compat["common/Model"];var E=n.n(q);const Q=[new(Z().Model)(V()).attribute("canSuspend").attribute("suspendedUntil",E().transformDate).attribute("suspendReason").attribute("suspendMessage")],G={"suspend/components/suspendUserModal":C,"suspend/components/suspensionInfoModal":R,"suspend/components/UserSuspendedNotification":I,"suspend/components/UserUnsuspendedNotification":F,"suspend/checkForSuspension":P},K=flarum.core;r().initializers.add("flarum-suspend",(function(){r().notificationComponents.userSuspended=I,r().notificationComponents.userUnsuspended=F,(0,t.extend)(a(),"moderationControls",(function(t,e){e.canSuspend()&&t.add("suspend",u().component({icon:"fas fa-ban",onclick:function(){return r().modal.show(C,{user:e})}},r().translator.trans("flarum-suspend.forum.user_controls.suspend_button")))})),(0,t.extend)(f().prototype,"badges",(function(t){var e=this.suspendedUntil();new Date<e&&t.add("suspended",l().component({icon:"fas fa-ban",type:"suspended",label:r().translator.trans("flarum-suspend.forum.user_badge.suspended_tooltip")}))})),P()})),Object.assign(K.compat,G)})(),module.exports=s})();
//# sourceMappingURL=forum.js.map
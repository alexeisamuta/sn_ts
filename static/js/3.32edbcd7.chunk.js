(this["webpackJsonpsn-ts-proj"]=this["webpackJsonpsn-ts-proj"]||[]).push([[3],{290:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1WkOB",dialogsItems:"Dialogs_dialogsItems__2Oi3U",active:"Dialogs_active__aVtC0",dialog:"Dialogs_dialog__3KjrB",messages:"Dialogs_messages__237Ed",message:"Dialogs_message__hARlM"}},291:function(e,a,t){"use strict";t.r(a);var s=t(100),n=t(0),l=t.n(n),i=t(290),o=t.n(i),r=t(11);var c=function(e){return l.a.createElement("div",{className:o.a.dialog+" "+o.a.active},l.a.createElement(r.b,{to:"/dialogs/"+e.id},e.name))};var m=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:o.a.message},e.message))},g=t(123),d=t(124),u=t(37),v=t(36);var E=function(e){var a=e.dialogsPage.dialogs.map((function(e){return l.a.createElement(c,{name:e.name,id:e.id})})),t=e.dialogsPage.messages.map((function(e){return l.a.createElement(m,{message:e.message})}));return l.a.createElement("div",{className:o.a.dialogs},l.a.createElement("div",{className:o.a.dialogsItems},a),l.a.createElement("div",{className:o.a.messages},l.a.createElement("div",null,t)),l.a.createElement(b,{onSubmit:function(a){e.onSendMessageClick(a.newMessageBody)}}))},_=Object(v.a)(50),b=Object(d.a)({form:"dialogAddMessageForm"})((function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",null,l.a.createElement(g.a,{component:u.b,validate:[v.b,_],name:"newMessageBody",placeholder:"Enter your message"})),l.a.createElement("div",null,l.a.createElement("button",null,"Send")))})),f=t(10),p=t(122),j=t(8);a.default=Object(j.d)(p.a,Object(f.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onSendMessageClick:function(a){e(Object(s.b)(a))}}})))(E)}}]);
//# sourceMappingURL=3.32edbcd7.chunk.js.map
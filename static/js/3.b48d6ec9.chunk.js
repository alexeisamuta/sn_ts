(this["webpackJsonpsn-ts-proj"]=this["webpackJsonpsn-ts-proj"]||[]).push([[3],{303:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__eCg5P",mainPhoto:"ProfileInfo_mainPhoto__1yuFN",contact:"ProfileInfo_contact__25hqg"}},304:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__30Whg",posts:"MyPosts_posts__ar64o"}},305:function(e,t,a){e.exports={item:"Post_item__2xPso"}},306:function(e,t,a){"use strict";a.r(t);var n=a(66),o=a(67),l=a(72),r=a(71),s=a(0),c=a.n(s),i=a(104),u=a(303),m=a.n(u),p=a(70),f=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],l=Object(s.useState)(e.status),r=Object(i.a)(l,2),u=r[0],m=r[1];Object(s.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("b",null,"Status: ")," ",c.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"-------")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(u)},value:u})))},d=a(136),b=a.n(d),E=a(29),h=a(137),v=a(48),g=a.n(v),k=Object(h.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("button",null,"save")),n&&c.a.createElement("div",{className:g.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",Object(E.c)("Full name","fullName",[],E.a)),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",Object(E.c)("","lookingForAJob",[],E.a,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),":",Object(E.c)("My professional skills","lookingForAJobDescription",[],E.b)),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),":",Object(E.c)("About me","aboutMe",[],E.b)),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{key:e,className:m.a.contact},c.a.createElement("b",null,e,": ",Object(E.c)(e,"contacts."+e,[],E.a)))}))))})),P=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return c.a.createElement("div",null,a&&c.a.createElement("div",null,c.a.createElement("button",{onClick:n},"edit")),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",t.fullName),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",t.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return c.a.createElement(O,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},O=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:m.a.contact},c.a.createElement("b",null,t),": ",a)},j=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,l=e.savePhoto,r=e.saveProfile,u=Object(s.useState)(!1),d=Object(i.a)(u,2),E=d[0],h=d[1];if(!t)return c.a.createElement(p.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:m.a.descriptionBlock},c.a.createElement("img",{src:t.photos.large||b.a,className:m.a.mainPhoto}),o&&c.a.createElement("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&l(e.target.files[0])}}),E?c.a.createElement(k,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){h(!1)}))}}):c.a.createElement(P,{goToEditMode:function(){h(!0)},profile:t,isOwner:o}),c.a.createElement(f,{status:a,updateStatus:n})))},y=a(105),S=a(40),_=a(304),I=a.n(_),A=a(305),C=a.n(A),w=function(e){return c.a.createElement("div",{className:C.a.item},c.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like")," ",e.likesCount))},M=a(68),N=Object(h.a)({form:"profile-add-post"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,Object(E.c)("Your post","newPostText",[M.b],E.a)),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),F=c.a.memo((function(e){var t=Object(S.a)(e.posts).reverse().map((function(e){return c.a.createElement(w,{key:e.id,message:e.message,likesCount:e.likesCount})}));return c.a.createElement("div",{className:I.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(N,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:I.a.posts},t))})),x=a(9),U=Object(x.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:y.a.addPostActionCreator})(F),B=function(e){return c.a.createElement("div",null,c.a.createElement(j,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),c.a.createElement(U,null))},J=a(11),T=a(10),D=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return c.a.createElement(B,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(c.a.Component);t.default=Object(T.d)(Object(x.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:y.d,getStatus:y.c,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),J.h)(D)}}]);
//# sourceMappingURL=3.b48d6ec9.chunk.js.map
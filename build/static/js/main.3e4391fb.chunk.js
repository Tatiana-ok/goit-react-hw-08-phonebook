(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={link:"Navigation_link__1UOgi"}},24:function(t,e,n){t.exports={listOfContact:"ContactList_listOfContact__1lVwF",itemOfListContact:"ContactList_itemOfListContact__LasZ9",itemNameContact:"ContactList_itemNameContact__Xr_08",itemNumberContact:"ContactList_itemNumberContact__38Fpg",btnOfListContact:"ContactList_btnOfListContact__3ZMZS"}},27:function(t,e,n){t.exports={logo:"RegistrationView_logo__1x3hi",form:"RegistrationView_form__Mzsxe",input:"RegistrationView_input__Ql9rD",button:"RegistrationView_button__RKUXx"}},29:function(t,e,n){t.exports={containerForm:"ContactForm_containerForm__31RSz",formInput:"ContactForm_formInput__3Y37D",btnForm:"ContactForm_btnForm___xBWw"}},35:function(t,e,n){t.exports={container:"App_container__20xxZ"}},40:function(t,e,n){t.exports={filterInput:"Filter_filterInput__2SQCq",filterLabel:"Filter_filterLabel__1aWHD"}},53:function(t,e,n){},54:function(t,e,n){t.exports={img:"HomeView_img__3F7Wm"}},61:function(t,e,n){},62:function(t,e,n){},69:function(t,e,n){},96:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(25),o=n.n(a),s=(n(61),n(16)),u=n(17),i=n(19),l=n(18),b=(n(62),n(35)),j=n.n(b),d=n(5),h=n(6),f=(n(69),{getIsAuthenticated:function(t){return t.auth.IsAuthenticated},getUserName:function(t){return t.auth.user.name},getAuthError:function(t){return t.auth.error},getAuthLoading:function(t){return t.auth.loading}}),O=n(13),p=n.n(O),m=n(23),g=n(12),C=n.n(g),x=n(2),v={registerRequest:Object(x.b)("auth/registerRequest"),registerSuccess:Object(x.b)("auth/registerSuccess"),registerError:Object(x.b)("auth/registerError"),loginRequest:Object(x.b)("auth/loginRequest"),loginSuccess:Object(x.b)("auth/loginSuccess"),loginError:Object(x.b)("auth/loginError"),logoutRequest:Object(x.b)("auth/logoutRequest"),logoutSuccess:Object(x.b)("auth/logoutSuccess"),logoutError:Object(x.b)("auth/logoutError"),getUserRequest:Object(x.b)("auth/getUserRequest"),getUserSuccess:Object(x.b)("auth/getUserSuccess"),getUserError:Object(x.b)("auth/getUserError")};C.a.defaults.baseURL="https://connections-api.herokuapp.com/";var S=function(t){C.a.defaults.headers.common.Authorization="Bearer ".concat(t)},y=function(){C.a.defaults.headers.common.Authorization=""},_={register:function(t){return function(){var e=Object(m.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(v.registerRequest()),e.prev=1,e.next=4,C.a.post("/users/signup",t);case 4:r=e.sent,S(r.data.token),n(v.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(v.registerError(e.t0.massage));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},login:function(t){return function(){var e=Object(m.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(v.loginRequest()),e.prev=1,e.next=4,C.a.post("/users/login",t);case 4:r=e.sent,S(r.data.token),n(v.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(v.loginError(e.t0.massage));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logout:function(){return function(){var t=Object(m.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(v.logoutRequest()),t.prev=1,t.next=4,C.a.post("/users/logout");case 4:y(),e(v.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(v.logoutError(t.t0.massage));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(m.a)(p.a.mark((function t(e,n){var r,c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return S(c),e(v.getUserRequest()),t.prev=5,t.next=8,C.a.get("/users/current");case 8:a=t.sent,e(v.getUserSuccess(a.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(v.getUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},k=n(1),w=Object(d.b)((function(t){return{userName:f.getUserName(t)}}),(function(t){return{onLogOut:function(){return t(_.logout())}}}))((function(t){var e=t.userName,n=t.onLogOut;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("p",{children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",e]}),Object(k.jsx)("button",{type:"button",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})})),N=n(15),E=n(20),R=n.n(E),L=Object(d.b)((function(t){return{isAuthenticated:f.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(k.jsx)("div",{children:Object(k.jsxs)("nav",{children:[Object(k.jsx)(N.b,{exact:!0,to:"/",className:R.a.link,activeClassName:R.a.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(k.jsx)(N.b,{to:"/contacts",className:R.a.link,activeClassName:R.a.activeLink,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"})]})})})),F=function(){return Object(k.jsx)("div",{children:Object(k.jsxs)("nav",{children:[Object(k.jsx)(N.b,{to:"/register",className:R.a.link,activeClassName:R.a.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(k.jsx)(N.b,{to:"/login",className:R.a.link,activeClassName:R.a.activeLink,children:"\u0412\u0445\u043e\u0434"})]})})},A=n(53),U=n.n(A),q=Object(d.b)((function(t){return{isAuthenticated:f.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(k.jsxs)("header",{children:[Object(k.jsx)("span",{className:U.a.logo,role:"icon","aria-label":"logo"}),Object(k.jsx)(L,{}),e?Object(k.jsx)(w,{}):Object(k.jsx)(F,{}),Object(k.jsx)("hr",{})]})})),I=n(54),T=n.n(I),D=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:T.a.img})})},V=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={email:"",password:""},t.onEmailChange=function(e){t.setState({email:e.currentTarget.value})},t.onPasswordChange=function(e){t.setState({password:e.currentTarget.value})},t.handleSubmit=function(e){if(e.preventDefault(),t.state.email&&""!==t.state.password)return t.props.onLogin(t.state),void t.setState({email:"",password:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(k.jsx)("h2",{children:"\u0412\u0445\u043e\u0434"}),Object(k.jsx)("label",{children:"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u0447\u0442\u044b"}),Object(k.jsx)("input",{type:"text",onChange:this.onEmailChange,value:this.state.email}),Object(k.jsx)("label",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(k.jsx)("input",{type:"text",onChange:this.onPasswordChange,value:this.state.password}),Object(k.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})}}]),n}(r.Component),P=Object(d.b)(null,(function(t){return{onLogin:function(e){return t(_.login(e))}}}))(V),z=n(98),B=n(41),M=n(27),H=n.n(M),W=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={name:"",email:"",password:""},t.onNameChange=function(e){t.setState({name:e.currentTarget.value})},t.onEmailChange=function(e){t.setState({email:e.currentTarget.value})},t.onPasswordChange=function(e){t.setState({password:e.currentTarget.value})},t.handleSubmit=function(e){if(e.preventDefault(),t.state.email&&""!==t.state.password)return t.props.onRegister(t.state),void t.setState({name:"",email:"",password:""});t.setState({alert:!0})},t.notify=function(){return B.b.error("\ud83e\udd84 Wow so easy!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("form",{className:H.a.form,onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(k.jsx)("h2",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(k.jsx)("label",{htmlFor:this.nameInputId,children:"\u0418\u043c\u044f"}),Object(k.jsx)("input",{name:"name",id:this.nameInputId,className:H.a.input,type:"text",onChange:this.onNameChange,value:this.state.name}),Object(k.jsx)("label",{children:"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u0447\u0442\u044b"}),Object(k.jsx)("input",{name:"email",className:H.a.input,type:"text",onChange:this.onEmailChange,value:this.state.email}),Object(k.jsx)("label",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(k.jsx)("input",{name:"password",className:H.a.input,type:"text",onChange:this.onPasswordChange,value:this.state.password}),Object(k.jsx)(z.a,{className:H.a.button,variant:"primary",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),this.state.alert&&Object(k.jsx)(B.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})}}]),n}(r.Component),Z=Object(d.b)((function(t){return{errorReg:f.getAuthError(t)}}),(function(t){return{onRegister:function(e){return t(_.register(e))}}}))(W),G=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("h1",{children:"404 - \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})})},J={fetchContactsRequest:Object(x.b)("contacts/fetchContactsRequest"),fetchContactsSuccess:Object(x.b)("contacts/fetchContactsSuccess"),fetchContactsError:Object(x.b)("contacts/fetchContactsError"),addContactRequest:Object(x.b)("contacts/addContactRequest"),addContactSuccess:Object(x.b)("contacts/addContactSuccess"),addContactError:Object(x.b)("contacts/addContactError"),updateContactRequest:Object(x.b)("contacts/updateContactRequest"),updateContactSuccess:Object(x.b)("contacts/updateContactSuccess"),updateContactError:Object(x.b)("contacts/updateContactError"),deleteContactRequest:Object(x.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(x.b)("contacts/deleteContactSuccess"),deleteContactError:Object(x.b)("contacts/deleteContactError"),changeFilter:Object(x.b)("contacts/changeFilter")};C.a.defaults.baseURL="https://connections-api.herokuapp.com/";var Q={fetchContacts:function(){return function(){var t=Object(m.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(J.fetchContactsRequest()),t.prev=1,t.next=4,C.a.get("/contacts");case 4:n=t.sent,r=n.data,e(J.fetchContactsSuccess(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(J.fetchContactsError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){return function(e){e(J.addContactRequest());var n={name:t.name,number:t.number};C.a.post("/contacts",n).then((function(t){var n=t.data;return e(J.addContactSuccess(n))})).catch((function(t){var n=t.error;return e(J.addContactError(n.message))}))}},deleteContact:function(t){return function(e){e(J.deleteContactRequest()),C.a.delete("/contacts/".concat(t)).then((function(){return e(J.deleteContactSuccess(t))})).catch((function(t){var n=t.error;return e(J.deleteContactError(n.message))}))}}},X=n(29),K=n.n(X),Y=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={id:"",name:"",number:""},t.onNameChange=function(e){t.setState({name:e.currentTarget.value})},t.onNumberChange=function(e){t.setState({number:e.currentTarget.value})},t.handleSubmit=function(e){if(e.preventDefault(),""!==t.state.number)return t.props.onSubmit(t.state),void t.setState({name:"",number:""});alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430!")},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("form",{className:K.a.containerForm,onSubmit:this.handleSubmit,children:[Object(k.jsxs)("label",{children:[Object(k.jsx)("p",{children:"\u0418\u043c\u044f"}),Object(k.jsx)("input",{className:K.a.formInput,type:"text",onChange:this.onNameChange,value:this.state.name})]}),Object(k.jsxs)("label",{children:[Object(k.jsx)("p",{children:"\u041d\u043e\u043c\u0435\u0440"}),Object(k.jsx)("input",{className:K.a.formInput,type:"text",onChange:this.onNumberChange,value:this.state.number})]}),Object(k.jsx)("button",{className:K.a.btnForm,type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}}]),n}(r.Component),$=Object(d.b)(null,(function(t){return{onSubmit:function(e){var n=e.id,r=e.name,c=e.number;return t(Q.addContact({id:n,name:r,number:c}))}}}))(Y),tt=n(40),et=n.n(tt),nt=n(30),rt=function(t){return t.contacts.items},ct=function(t){return t.contacts.filter},at={getAllContacts:rt,getFilter:ct,getVisibleContacts:Object(nt.a)([rt,ct],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},ot=Object(d.b)((function(t){return{value:at.getFilter(t)}}),(function(t){return{onChangeFilter:function(e){return t(J.changeFilter(e.currentTarget.value))}}}))((function(t){var e=t.value,n=void 0===e?"":e,r=t.onChangeFilter;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("label",{className:et.a.filterLabel,children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(k.jsx)("input",{className:et.a.filterInput,type:"text",value:n,onChange:r})]})})})),st=n(24),ut=n.n(st);var it,lt,bt,jt,dt,ht,ft,Ot=Object(d.b)((function(t){return{contacts:at.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(Q.deleteContact(e))},onUpdateContact:function(e){return t(Q.deleteContact(e))}}}))((function(t){var e=t.contacts,n=void 0===e?[]:e,r=t.onUpdateContact,c=t.onDeleteContact;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("ul",{className:ut.a.listOfContact,children:n.map((function(t){return Object(k.jsxs)("li",{className:ut.a.itemOfListContact,children:[Object(k.jsxs)("p",{className:ut.a.itemNameContact,children:[t.name," "]}),Object(k.jsx)("p",{className:ut.a.itemNumberContact,children:t.number}),Object(k.jsx)("button",{className:ut.a.btnOfListContact,type:"button",onClick:function(){return r(t.id)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(k.jsx)("button",{className:ut.a.btnOfListContact,type:"button",onClick:function(){return c(t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.id)}))})})})),pt={marginLeft:"10px"},mt=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).componentDidMount=function(){t.props.fetchContacts()},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{style:pt,children:[Object(k.jsx)("h1",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"}),Object(k.jsx)($,{}),Object(k.jsx)("h2",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(k.jsx)(ot,{}),Object(k.jsx)(Ot,{})]})}}]),n}(r.Component),gt=Object(d.b)(null,(function(t){return{fetchContacts:function(){return t(Q.fetchContacts())}}}))(mt),Ct=n(22),xt=n(32),vt=Object(d.b)((function(t){return{isAuthenticated:f.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(xt.a)(t,["component","isAuthenticated","redirectTo"]);return Object(k.jsx)(h.b,Object(Ct.a)(Object(Ct.a)({},c),{},{render:function(t){return n?Object(k.jsx)(e,Object(Ct.a)({},t)):Object(k.jsx)(h.a,{to:r})}}))})),St=Object(d.b)((function(t){return{isAuthenticated:f.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(xt.a)(t,["component","isAuthenticated","redirectTo"]);return Object(k.jsx)(h.b,Object(Ct.a)(Object(Ct.a)({},c),{},{render:function(t){return n&&c.restricted?Object(k.jsx)(h.a,{to:r}):Object(k.jsx)(e,Object(Ct.a)({},t))}}))})),yt=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:j.a.container,children:[Object(k.jsx)(q,{}),Object(k.jsxs)(h.d,{children:[Object(k.jsx)(St,{exact:!0,path:"/",component:D}),Object(k.jsx)(St,{path:"/register",restricted:!0,redirectTo:"/",component:Z}),Object(k.jsx)(St,{path:"/login",restricted:!0,redirectTo:"/contacts",component:P}),Object(k.jsx)(vt,{path:"/contacts",redirectTo:"/login",component:gt}),Object(k.jsx)(St,{component:G})]})]})}}]),n}(r.Component),_t=Object(d.b)(null,(function(t){return{onGetCurrentUser:function(){return t(_.getCurrentUser())}}}))(yt),kt=n(55),wt=n(31),Nt=n(21),Et=n(56),Rt=n.n(Et),Lt=n(4),Ft=n(7),At=Object(x.c)([],(it={},Object(Lt.a)(it,J.fetchContactsSuccess,(function(t,e){return e.payload})),Object(Lt.a)(it,J.addContactSuccess,(function(t,e){var n=e.payload;if(!t.find((function(t){return t.name.toLowerCase().includes(n.name.toLowerCase())})))return[n].concat(Object(wt.a)(t));alert("".concat(n.name," is already in contacts"))})),Object(Lt.a)(it,J.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return n!==t.id}))})),it)),Ut=Object(x.c)("",(lt={},Object(Lt.a)(lt,J.changeFilter,(function(t,e){return e.payload})),Object(Lt.a)(lt,J.deleteContactSuccess,(function(t,e){e.payload;return""})),lt)),qt=Object(x.c)("",(bt={},Object(Lt.a)(bt,J.fetchContactsError,(function(t,e){return e.payload})),Object(Lt.a)(bt,J.addContactError,(function(t,e){return e.payload})),Object(Lt.a)(bt,J.deleteContactError,(function(t,e){return e.payload})),bt)),It=Object(Ft.c)({items:At,filter:Ut,error:qt}),Tt={name:"",email:""},Dt=Object(x.c)(Tt,(jt={},Object(Lt.a)(jt,v.registerSuccess,(function(t,e){return e.payload.user})),Object(Lt.a)(jt,v.loginSuccess,(function(t,e){return e.payload.user})),Object(Lt.a)(jt,v.logoutSuccess,(function(){return Tt})),Object(Lt.a)(jt,v.getUserSuccess,(function(t,e){return e.payload})),jt)),Vt=Object(x.c)(null,(dt={},Object(Lt.a)(dt,v.registerSuccess,(function(t,e){return e.payload.token})),Object(Lt.a)(dt,v.loginSuccess,(function(t,e){return e.payload.token})),Object(Lt.a)(dt,v.logoutSuccess,(function(){return null})),dt)),Pt=Object(x.c)(null,(ht={},Object(Lt.a)(ht,v.registerError,(function(t,e){return e.payload})),Object(Lt.a)(ht,v.loginError,(function(t,e){return e.payload})),Object(Lt.a)(ht,v.logoutError,(function(t,e){return e.payload})),Object(Lt.a)(ht,v.getUserError,(function(t,e){return e.payload})),ht)),zt=Object(x.c)(!1,(ft={},Object(Lt.a)(ft,v.registerSuccess,(function(){return!0})),Object(Lt.a)(ft,v.loginSuccess,(function(){return!0})),Object(Lt.a)(ft,v.getUserSuccess,(function(){return!0})),Object(Lt.a)(ft,v.registerError,(function(){return!1})),Object(Lt.a)(ft,v.loginError,(function(){return!1})),Object(Lt.a)(ft,v.getUserError,(function(){return!1})),Object(Lt.a)(ft,v.logoutSuccess,(function(){return!1})),ft)),Bt=Object(Ft.c)({user:Dt,isAuthenticated:zt,token:Vt,error:Pt}),Mt=Object(wt.a)(Object(x.d)({serializableCheck:{ignoredActions:[Nt.a,Nt.f,Nt.b,Nt.c,Nt.d,Nt.e]}})),Ht={key:"token",storage:Rt.a,whitelist:["token"]},Wt=Object(x.a)({reducer:{auth:Object(Nt.g)(Ht,Bt),contacts:It},middleware:Mt}),Zt={store:Wt,persistor:Object(Nt.h)(Wt)};n(95);o.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(d.a,{store:Zt.store,children:Object(k.jsx)(kt.a,{persistor:Zt.persistor,children:Object(k.jsx)(N.a,{children:Object(k.jsx)(_t,{})})})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.3e4391fb.chunk.js.map
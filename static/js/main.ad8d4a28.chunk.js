(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(94),a(30)),i=a(10),s=a(24),u=a.n(s),m=a(33),p=a(14),h=a(81),f=a.n(h),b=a(34),d=a.n(b),v=a(168),E=a(55),g=a(161),N=a(152),y=Object(N.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"50vw"}},contained:{width:"25ch"},h4:{marginTop:e.spacing(5)}}})),j=a(22),O=a(15),w=Object(N.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(j.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(O.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),k=a(120),C=a(156),x=a(157),S=a(158),L=a(78),q=a.n(L);var B=function(e){return e.map((function(e){return r.a.createElement(k.a,{divider:!0,key:e._id},r.a.createElement(C.a,{primary:"".concat(e.lastName," ").concat(e.firstName),secondary:e.phoneNumber}),r.a.createElement(x.a,null,r.a.createElement(S.a,{edge:"end","aria-label":"edit",component:l.b,to:{pathname:"/edit",state:{value:e}}},r.a.createElement(q.a,null))))}))},I=a(165);var P=function(e){return r.a.createElement(I.a,Object.assign({elevation:6,variant:"filled"},e))},D=a(167);function R(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1];function o(){c(!1)}return[c,function(e){return r.a.createElement(D.a,{open:a,autoHideDuration:6e3,onClose:o},r.a.createElement(P,{onClose:o,severity:e.message.severity},e.message.message))}]}var H=a(159),T=a(160),W=a(82),F=a(162),G=a(80),J=a.n(G);function M(e){var t=w(),a=Object(n.useState)(null),c=Object(p.a)(a,2),o=c[0],i=c[1];return r.a.createElement("div",null,r.a.createElement("div",{className:t.root},r.a.createElement(H.a,{position:"static"},r.a.createElement(T.a,null,r.a.createElement(S.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},r.a.createElement(J.a,null)),r.a.createElement(E.a,{className:t.title,variant:"h6",noWrap:!0},e.title),e.child))),r.a.createElement(W.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){i(null)}},r.a.createElement(F.a,{component:l.b,to:{pathname:e.link.url}}," ",e.link.linkName)))}function _(){var e=R(),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({message:"",severity:"error"}),l=Object(p.a)(o,2),i=l[0],s=l[1],h=y(),b=w(),N=Object(n.useState)(),j=Object(p.a)(N,2),O=j[0],k=j[1],C=Object(n.useState)(!1),x=Object(p.a)(C,2),S=x[0],L=x[1],q=Object(n.useState)([]),I=Object(p.a)(q,2),P=I[0],D=I[1];function H(){return(H=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),S||!O){e.next=14;break}return e.prev=2,e.next=5,d.a.get("".concat("https://fathomless-badlands-77681.herokuapp.com/","list/?search=").concat(O));case 5:n=e.sent,D(n.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:e.next=15;break;case 14:O||s({message:"Enter a first name, last name or phone number",severity:"info"}),a(!0);case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement(M,{title:"phoneBook",link:{url:"/create",linkName:"New entries"},child:r.a.createElement("form",{className:h.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){return function(e){return H.apply(this,arguments)}(e)}},r.a.createElement("div",{className:b.search},r.a.createElement("div",{className:b.searchIcon},r.a.createElement(f.a,null)),r.a.createElement(v.a,{onChange:function(e){return function(e){var t=e.target.value.trimLeft();switch(k(t),t[0]){case"+":t.match(/\+[0-9]{2}\s[0-9]{2,}\s[0-9]{6,}/)?L(!1):(L(!0),s({message:"Enter a number with this format : +39 02 1234567",severity:"info"}));break;default:""===t?(L(!0),s({message:"Enter a first name, last name or phone number",severity:"info"})):L(!1)}}(e)},placeholder:"Search\u2026",classes:{root:b.inputRoot,input:b.inputInput},inputProps:{"aria-label":"search"}})))}),0===P.length?r.a.createElement(E.a,{variant:"h4",align:"center",className:h.h4},"Search for a person by first name, last name or phone number"):r.a.createElement(g.a,null,B(P)),r.a.createElement(c,{message:i}))}var V=a(41),$=a(164),z=a(163);var A=function(){var e=y(),t=Object(i.f)(),a=Object(n.useState)({firstName:t.state.value.firstName,lastName:t.state.value.lastName,phoneNumber:t.state.value.phoneNumber}),c=Object(p.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)(!1),h=Object(p.a)(s,2),f=h[0],b=h[1],v=Object(n.useState)({message:"",severity:"error"}),E=Object(p.a)(v,2),g=E[0],N=E[1];function O(){b(!1)}function w(){return(w=Object(m.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,d.a.patch("".concat("https://fathomless-badlands-77681.herokuapp.com/","update/").concat(t.state.value._id),o);case 4:N({message:"Entry succesfully modified",severity:"success"}),b(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),N({message:"Entry modification failed",severity:"error"}),b(!0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function k(e){var t=e.target,a=t.name,n=t.value.trimLeft();l(Object(V.a)(Object(V.a)({},o),{},Object(j.a)({},a,n)))}return r.a.createElement("div",null,r.a.createElement(M,{title:"Edit an entry",link:{url:"/",linkName:"Home"}}),r.a.createElement("form",{className:e.root,autoComplete:"off",onSubmit:function(e){return function(e){return w.apply(this,arguments)}(e)}},r.a.createElement($.a,{required:!0,label:"First Name",name:"firstName",value:o.firstName,onChange:function(e){return k(e)}}),r.a.createElement("br",null),r.a.createElement($.a,{required:!0,label:"Last Name",name:"lastName",value:o.lastName,onChange:function(e){return k(e)}}),r.a.createElement("br",null),r.a.createElement($.a,{required:!0,label:"Phone Number",name:"phoneNumber",helperText:"Enter a number with this format : +39 02 1234567",value:o.phoneNumber,onChange:function(e){return k(e)},inputProps:{pattern:"\\+[0-9]{2}\\s[0-9]{2,}\\s[0-9]{6,}"}}),r.a.createElement("br",null),r.a.createElement(z.a,{className:e.contained,type:"submit",variant:"contained",color:"primary"},"Save modification")),r.a.createElement(D.a,{open:f,autoHideDuration:6e3,onClose:O},r.a.createElement(P,{onClose:O,severity:g.severity},g.message)))};var K=function(){var e=y(),t=R(),a=Object(p.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)({firstName:"",lastName:"",phoneNumber:""}),i=Object(p.a)(l,2),s=i[0],h=i[1],f=Object(n.useState)({message:"",severity:"error"}),b=Object(p.a)(f,2),v=b[0],E=b[1];function g(){return(g=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.a.post("".concat("https://fathomless-badlands-77681.herokuapp.com/","newPhone"),s);case 4:E({message:"Entry succesfully created",severity:"success"}),c(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),E({message:"Entry creation failed",severity:"error"}),c(!0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function N(e){var t=e.target,a=t.name,n=t.value.trimLeft();h(Object(V.a)(Object(V.a)({},s),{},Object(j.a)({},a,n)))}return r.a.createElement("div",null,r.a.createElement(M,{title:"Create a new entry",link:{url:"/",linkName:"Home"}}),r.a.createElement("form",{className:e.root,autoComplete:"off",onSubmit:function(e){return function(e){return g.apply(this,arguments)}(e)}},r.a.createElement($.a,{required:!0,label:"First Name",name:"firstName",value:s.firstName,onChange:function(e){return N(e)}}),r.a.createElement("br",null),r.a.createElement($.a,{required:!0,label:"Last Name",name:"lastName",value:s.lastName,onChange:function(e){return N(e)}}),r.a.createElement("br",null),r.a.createElement($.a,{required:!0,label:"Phone Number",name:"phoneNumber",helperText:"Enter a number with this format : +39 02 1234567",value:s.phoneNumber,onChange:function(e){return N(e)},inputProps:{pattern:"\\+[0-9]{2}\\s[0-9]{2,}\\s[0-9]{6,}"}}),r.a.createElement("br",null),r.a.createElement(z.a,{className:e.contained,type:"submit",variant:"contained",color:"primary"},"Create new entry")),r.a.createElement(o,{message:v}))};var Q=function(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/edit"},r.a.createElement(A,null)),r.a.createElement(i.a,{path:"/create"},r.a.createElement(K,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(_,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){e.exports=a(119)},94:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.ad8d4a28.chunk.js.map
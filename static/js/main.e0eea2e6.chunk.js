(this.webpackJsonpbudget=this.webpackJsonpbudget||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(45),l=n.n(i),a=(n(131),n(50)),s=(n.p,n(132),n(153)),j=n(158),d=n(5),u=function(e){return Object(d.jsxs)(j.a,{as:e.type,children:[" ",e.title," "]})},o=n(155),b=function(e){return Object(d.jsxs)(o.a.Group,{style:{marginTop:20},children:[Object(d.jsx)(o.a,{primary:!0,onClick:function(){return e.addEntryHandler(e.desc,e.value)},children:"Ok"}),Object(d.jsx)(o.a.Content,{}),Object(d.jsx)(o.a,{secondary:!0,onClick:e.resetEntryHandler,children:"Cancel"})]})},x=n(154),O=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),r=n[0],i=n[1],l=Object(c.useState)(""),s=Object(a.a)(l,2),j=s[0],u=s[1];return Object(d.jsxs)(x.a,{unstackable:!0,children:[Object(d.jsxs)(x.a.Group,{children:[Object(d.jsx)(x.a.Input,{placeholder:"Enter",label:"Description",width:12,icon:"",onChange:function(e){return u(e.target.value)},value:j}),Object(d.jsx)(x.a.Input,{placeholder:"value",label:"Value",width:4,icon:"rupee",iconPosition:"left",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(d.jsx)(b,{addEntryHandler:e.addEntryHandler,desc:j,value:r})]})},h=n(157),p=function(e){return Object(d.jsxs)(h.a,{size:e.size,color:e.color,children:[Object(d.jsx)(h.a.Label,{textAlign:e.textAlign,children:e.expenses}),Object(d.jsx)(h.a.Value,{children:e.value})]})},g=n(159),f=n(160),v=n(70),y=function(e){return Object(d.jsx)(g.a,{color:"".concat(e.isExpense?"red":"green"),children:Object(d.jsx)(f.a,{colums:3,textAlign:"right",children:Object(d.jsxs)(f.a.Row,{children:[Object(d.jsx)(f.a.Column,{textAlign:"left",width:10,children:e.desc}),Object(d.jsx)(f.a.Column,{textAlign:"right",width:3,children:e.value}),Object(d.jsxs)(f.a.Column,{width:3,children:[Object(d.jsx)(v.a,{name:"edit"}),Object(d.jsx)(v.a,{name:"trash",onClick:function(){return e.deleteEntryHandler(e.id)}})]})]})})})},C=function(e){return Object(d.jsx)(d.Fragment,{children:e.entries.map((function(t){return Object(d.jsx)(y,{deleteEntryHandler:e.deleteEntryHandler,isExpense:t.isExpense,desc:t.desc,value:t.value,id:t.id},t.id)}))})},E=function(e){return Object(d.jsx)(g.a,{textAlign:"center",children:Object(d.jsx)(f.a,{columns:2,divided:!0,children:Object(d.jsxs)(f.a.Row,{children:[Object(d.jsx)(f.a.Column,{children:Object(d.jsx)(p,{size:"tiny",color:"green",expenses:"Credit",value:"1000.00"})}),Object(d.jsx)(f.a.Column,{children:Object(d.jsx)(p,{size:"tiny",color:"red",expenses:"Debit",value:"500.00"})})]})})})};var m=function(){var e=Object(c.useState)(w),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),l=Object(a.a)(i,2),j=(l[0],l[1],Object(c.useState)("")),o=Object(a.a)(j,2);return o[0],o[1],Object(d.jsxs)(s.a,{children:[Object(d.jsx)(u,{title:"Budget",type:"h1"}),Object(d.jsx)(p,{size:"small",expenses:"Balance :",value:"2,500.00",textAlign:"left"}),Object(d.jsx)(E,{}),Object(d.jsx)(u,{title:"History",type:"h3",textAlign:"left"}),Object(d.jsx)(C,{deleteEntryHandler:function(e){var t=n.filter((function(t){return t.id!==e}));r(t)},entries:n}),Object(d.jsx)(u,{title:"Add New Transaction",type:"h3",textAlign:"left"}),Object(d.jsx)(O,{addEntryHandler:function(e,t){var c=n.concat({id:n.length+1,desc:e,value:t});r(c)}})]})},w=[{id:1,desc:"Salary",isExpense:!1,value:"$1000.00"},{id:2,desc:"Current Bill",isExpense:!0,value:"$200.00"},{id:3,desc:"Water Bill",isExpense:!0,value:"$50.00"}],A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),r(e),i(e),l(e)}))};n(140);l.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),A()}},[[141,1,2]]]);
//# sourceMappingURL=main.e0eea2e6.chunk.js.map
(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(29),i=c.n(n),l=(c(35),c(13)),o=c(2),r=c(0);var d=function(e){var t=e.title,c=e.cls;return Object(r.jsx)("h5",{className:c,children:t})};var j=function(e){var t=e.link,c=e.cls,s=e.text;return Object(r.jsx)("a",{className:c,href:t,children:s})};c(37);var b=function(){return Object(r.jsx)("div",{className:"modal fade",id:"exampleModalCenter",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsx)("div",{className:"modal-header",children:Object(r.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})}),Object(r.jsxs)("div",{className:"modal-body",children:[Object(r.jsx)("h5",{className:"modal-body__title",children:"Have Question in mind?"}),Object(r.jsx)("span",{className:"modal-body__subtitle",children:"Let us help you"}),Object(r.jsxs)("div",{className:"modal-body__mail-block row",children:[Object(r.jsx)("input",{className:"modal-body__mail-block__input",type:"email",placeholder:"snmonydemo@gmail.com"}),Object(r.jsx)(j,{link:"#",cls:"common-button common-button--dayBackGround modal-body__mail-block__common-button",text:"Send"})]})]})]})})})};var m=function(){return Object(r.jsxs)("div",{className:"contact",children:[Object(r.jsx)("button",{type:"button",className:"contact__btn","data-toggle":"modal","data-target":"#exampleModalCenter",children:"Contact"}),Object(r.jsx)(b,{})]})};var u=function(e){var t=e.title,c=e.cls;return Object(r.jsx)("p",{className:c,children:t})},f=c(4),h=c(5),O=c.n(h),x="https://api.npoint.io/c21a9f4ed8af214a328d";var v=function(){var e=Object(s.useState)([]),t=Object(f.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){O.a.get("".concat(x,"/footerLinks")).then((function(e){var t=e.data,c=[];t.forEach((function(e){var t=e.id,s=e.imagesrc,a=e.link,n=Object(r.jsx)("a",{className:"socialmedia__link",href:a,target:"_blank",children:Object(r.jsx)(N,{cls:"",src:s})},t);c.push(n)})),a(c)})).catch((function(e){console.log("Hata"),console.log(e)}))}),[]),Object(r.jsx)(r.Fragment,{children:c})};var g=function(e){var t=e.title,c=e.cls;return Object(r.jsx)("h1",{className:c,children:t})};var p=function(){var e=Object(s.useState)([]),t=Object(f.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){O.a.get("".concat(x,"/headerLinks")).then((function(e){var t=e.data,c=[];t.forEach((function(e){var t=e.id,s=e.title,a=e.link;c.push(Object(r.jsx)(l.b,{className:"navlink__link",exact:!0,to:a,children:s},t))})),a(c)})).catch((function(e){console.log("Hata"),console.log(e)}))}),[]),Object(r.jsx)("nav",{className:"navlink",children:c})};var _=function(e){var t=e.title,c=e.cls;return Object(r.jsx)("span",{className:c,children:t})};var N=function(e){var t=e.src,c=e.cls;return Object(r.jsx)("img",{className:"img-fluid ".concat(c),src:t,alt:"Image"})},k=c.p+"static/media/logo.ad3c68e5.svg";var y=function(){return Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("figure",{style:{margin:"0"},children:Object(r.jsx)("a",{href:"/overview",children:Object(r.jsx)("img",{src:k,className:"logo__img img-fluid",alt:"logo.svg"})})})})},L=(c(61),c(11)),E=function(){var e=document.getElementById("s3"),t=document.getElementById("root"),c=document.getElementById("ustdiv"),s=document.getElementsByTagName("p");if(e.checked){t.classList.add("dark-body"),c.classList.remove("renklidiv--renkli"),c.classList.add("dark-div");var a,n=Object(L.a)(s);try{for(n.s();!(a=n.n()).done;){a.value.classList.add("dark-paragraph")}}catch(o){n.e(o)}finally{n.f()}S(1),w(1),B(1)}else{t.classList.remove("dark-body"),c.classList.remove("dark-div"),c.classList.add("renklidiv--renkli");var i,l=Object(L.a)(s);try{for(l.s();!(i=l.n()).done;){i.value.classList.remove("dark-paragraph")}}catch(o){l.e(o)}finally{l.f()}S(0),w(0),B(0)}};function w(e){var t=document.getElementById("stats-table");null!=t&&(1==e?(t.classList.remove("stats-table--background"),t.classList.add("dark-stats-table")):(t.classList.remove("dark-stats-table"),t.classList.add("stats-table--background")))}function S(e){var t=document.getElementsByClassName("common-button");if(null!=t)if(1==e){var c,s=Object(L.a)(t);try{for(s.s();!(c=s.n()).done;){var a=c.value;a.classList.remove("common-button--dayBackGround"),a.classList.add("dark-common-button")}}catch(o){s.e(o)}finally{s.f()}}else{var n,i=Object(L.a)(t);try{for(i.s();!(n=i.n()).done;){var l=n.value;l.classList.remove("dark-common-button"),l.classList.add("common-button--dayBackGround")}}catch(o){i.e(o)}finally{i.f()}}}function B(e){var t=document.getElementsByClassName("card");if(null!=t)if(1==e){var c,s=Object(L.a)(t);try{for(s.s();!(c=s.n()).done;){c.value.classList.add("dark-stats-table")}}catch(i){s.e(i)}finally{s.f()}}else{var a,n=Object(L.a)(t);try{for(n.s();!(a=n.n()).done;){a.value.classList.remove("dark-stats-table")}}catch(i){n.e(i)}finally{n.f()}}}var C=function(){return Object(r.jsxs)("div",{className:"darkmode col-12",children:[Object(r.jsx)("input",{onClick:E,className:"darkmode__checkbox",type:"checkbox",id:"s3"}),Object(r.jsx)("label",{className:"slider-v2",htmlFor:"s3"})]})};c(62);var I=function(){return Object(r.jsxs)("header",{children:[Object(r.jsx)("div",{id:"ustdiv",className:"renklidiv renklidiv--renkli"}),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"header row col-12 align-items-center",children:[Object(r.jsx)("div",{className:"col-12 col-sm-12 col-lg-3",children:Object(r.jsx)(y,{})}),Object(r.jsx)("div",{className:"col-12 col-sm-12 col-lg-7",children:Object(r.jsx)(p,{})}),Object(r.jsx)("div",{className:"col-12 col-sm-12 col-lg-2",children:Object(r.jsx)(m,{})}),Object(r.jsx)(C,{})]})})]})};c(63);c(64);var F=function(){var e=Object(s.useState)([]),t=Object(f.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(f.a)(n,2),l=i[0],o=i[1];return Object(s.useEffect)((function(){O.a.get("".concat(x,"/contagionPage")).then((function(e){var t=e.data,c=[];a(t),t.cards.forEach((function(e,t){var s=e.title,a=e.description,n=e.imagesrc;c.push(function(e,t,c,s){return Object(r.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(r.jsx)("figure",{children:Object(r.jsx)(N,{src:s,cls:"card-img-top"})}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)(d,{cls:"card-body__title",title:t}),Object(r.jsx)(u,{cls:"card-body__desc",title:c})]})]},e)}(t,s,a,n))})),o(c)})).catch((function(e){console.log("Hata"),console.log(e)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("section",{children:Object(r.jsx)("div",{className:"page-header",children:Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)(g,{cls:"info__title",title:c.title}),Object(r.jsx)(_,{cls:"info__subtitle",title:c.subtitle}),Object(r.jsx)(u,{cls:"info__description",title:c.description})]})})}),Object(r.jsx)("section",{children:Object(r.jsx)("div",{className:"row col-12 d-flex justify-content-center",children:l})})]})};var H=function(){var e=Object(s.useState)([]),t=Object(f.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){O.a.get("".concat(x,"/symptompsPage")).then((function(e){var t=e.data;a(t)})).catch((function(e){console.log("Hata"),console.log(e)}))}),[]),Object(r.jsxs)("section",{children:[Object(r.jsx)("div",{className:"page-header",children:Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)(g,{cls:"info__title",title:c.title}),Object(r.jsx)(_,{cls:"info__subtitle",title:c.subtitle}),Object(r.jsx)(u,{cls:"info__description",title:c.description})]})}),Object(r.jsx)("figure",{children:Object(r.jsx)(N,{src:c.imagesrc,cls:"card-img-top"})})]})};c(65);var A=function(){var e=Object(s.useState)([]),t=Object(f.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(f.a)(n,2),l=i[0],o=i[1];return Object(s.useEffect)((function(){O.a.get("".concat(x,"/preventionPage")).then((function(e){var t=e.data,c=[];a(t),t.information.forEach((function(e){var t=e.id,s=e.title,a=e.description,n=e.imagesrc;c.push(function(e,t,c,s){return Object(r.jsx)("section",{children:Object(r.jsxs)("div",{className:"information row",children:[Object(r.jsxs)("div",{className:"info col-12 col-md-6 align-self-center",children:[Object(r.jsx)(_,{cls:"info__subtitle",title:e}),Object(r.jsx)(d,{cls:"info__title info__title--display",title:t}),Object(r.jsx)(u,{cls:"info__desc",title:c})]}),Object(r.jsx)("div",{className:"infomation__img col-12 col-md-6",children:Object(r.jsx)("figure",{children:Object(r.jsx)(N,{cls:"",src:s})})})]})},e)}(t,s,a,n))})),o(c)})).catch((function(e){console.log("Hata"),console.log(e)}))}),[]),Object(r.jsxs)("section",{children:[Object(r.jsx)("div",{className:"page-header",children:Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)(g,{cls:"info__title",title:c.title}),Object(r.jsx)(_,{cls:"info__subtitle",title:c.subtitle}),Object(r.jsx)(u,{cls:"info__description",title:c.description})]})}),Object(r.jsx)("div",{className:"reverse-info",children:l})]})};c(66);var P=function(){var e=Object(s.useState)(),t=Object(f.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(f.a)(n,2),l=i[0],o=i[1],j=Object(s.useState)([]),b=Object(f.a)(j,2),m=b[0],h=b[1];return Object(s.useEffect)((function(){O.a.get("".concat(x,"/istatistic")).then((function(e){var t=e.data,c=[];o(t.arrows),a(t.map),t.flag.forEach((function(e){var s=e.id,a=e.name,n=e.imagesrc;c.push(function(e,t,c,s){return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-2",children:Object(r.jsx)("figure",{children:Object(r.jsx)(N,{cls:"stats__flag",src:c})})}),Object(r.jsx)("div",{className:"col-4",children:Object(r.jsx)(d,{cls:"stats__country",title:t})}),Object(r.jsx)("div",{className:"col-4",children:Object(r.jsx)(u,{cls:"stats__rate",title:"Loading..."})}),Object(r.jsx)("div",{className:"col-2",children:Object(r.jsx)("figure",{children:Object(r.jsx)(N,{cls:"stats__arrow",src:s})})})]},e)}(s,a,n,t.arrows.upArrow))})),h(c)})).catch((function(e){console.log("Hata"),console.log(e)})),O.a.get("".concat(x,"/countries")).then((function(e){e.data.forEach((function(e,t){setTimeout((function(){O.a.request(e).then((function(e){document.getElementById("stats").children[t].children[2].children[0].textContent=e.data[0].confirmed})).catch((function(e){console.error(e)}))}),2e3*t)}))})).catch((function(e){console.log(e)}))}),[]),Object(r.jsx)("section",{children:Object(r.jsxs)("div",{className:"statistics row",children:[Object(r.jsx)("div",{className:"col-12 col-xl-8",children:Object(r.jsx)("figure",{children:Object(r.jsx)(N,{src:c})})}),Object(r.jsx)("div",{id:"stats-table",className:"stats-table stats-table--background col-12 col-md-6 col-xl-4",children:Object(r.jsxs)("section",{children:[Object(r.jsxs)("div",{className:"information row",children:[Object(r.jsx)("div",{className:"align-self-center col-8",children:Object(r.jsx)(d,{cls:"information__title",title:"Live Reports"})}),Object(r.jsx)("div",{className:"col-4",children:Object(r.jsx)("figure",{children:Object(r.jsx)(N,{cls:"information__img",src:l.mapStatArrow})})})]}),Object(r.jsx)("section",{children:Object(r.jsx)("div",{id:"stats",className:"stats col-12",children:m})})]})})]})})};c(67);var T=function(){return Object(r.jsx)("footer",{children:Object(r.jsxs)("div",{className:"footer container",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-12 col-sm-3 align-self-center",children:Object(r.jsx)(y,{})}),Object(r.jsx)("div",{className:"col-12 col-sm-6 align-self-center",children:Object(r.jsx)(p,{})}),Object(r.jsx)("div",{className:"socialmedia col-12 col-sm-3 align-self-center",children:Object(r.jsx)(v,{})})]}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(r.jsxs)("small",{children:["Bu web sitesinin ",Object(r.jsx)("a",{href:"https://github.com/KlcAhmet",target:"_blank",children:"github.com/KlcAhmet----"})," ",Object(r.jsx)("a",{href:"https://github.com/KlcAhmet/kodluyoruz-final-proje",target:"_blank",rel:"noopener noreferrer",children:"kaynak kodlar\u0131na"})," Github \xfczerinden ula\u015fabilirsiniz \u2764\ufe0f"]})})})]})})};c(68),c(69),c(71);var G=function(){return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(I,{}),Object(r.jsx)("main",{children:Object(r.jsx)("div",{className:"container wrapper",onLoad:E,children:Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{path:"/contagion",component:F}),Object(r.jsx)(o.a,{path:"/Symptoms",component:H}),Object(r.jsx)(o.a,{path:"/prevention",component:A}),Object(r.jsx)(o.a,{path:"/statistics",component:P})]})})}),Object(r.jsx)(T,{})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root")),M()}},[[72,1,2]]]);
//# sourceMappingURL=main.014a0d8c.chunk.js.map
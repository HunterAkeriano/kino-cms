import{_ as y,S as w,V as M,C as I,r as h,o,d as n,u as p,j as S,n as m,e,F as i,i as f,g as $,h as x,t as B,x as L,p as V,q as F}from"./index-e41afcbb.js";const d=r=>(V("data-v-aecc7c7f"),r=r(),F(),r),N=d(()=>e("h3",null,"Кинотеатры",-1)),R={class:"films mt-5"},j={class:"card"},q=["onClick"],z=d(()=>e("span",null,"X",-1)),D=[z],E={class:"logo"},O=["src"],T={class:"title"},X={class:"modal-dialog",role:"document"},Z={class:"modal-content"},A={class:"modal-header"},G=d(()=>e("h5",{class:"modal-title"},"Удалить кинотеатр?? ",-1)),H=d(()=>e("span",{"aria-hidden":"true"},"×",-1)),J=[H],K=d(()=>e("div",{class:"modal-body"}," Вы действительно хотите удалить этот кинотеатр?? ",-1)),P={class:"modal-footer"},Q={key:0,class:"error-message"},U={data(){return{showModal:!1,currentIndex:0}}},W=Object.assign(U,{__name:"Cinoteater",setup(r){const v=w(),s=M();function b(){v.push("cinoteaters-cards")}const c=I(!1);function C(t){if(s.teaters.length===1)return c.value=!0,setTimeout(()=>{c.value=!1},2e3),!1;s.idRouter=t,s.deleteZal(),console.log(s.idRouter)}return(t,a)=>{const g=h("Loader"),k=h("router-link");return o(),n(i,null,[p(s).loading?(o(),S(g,{key:0})):m("",!0),N,e("button",{onClick:b},"Создать кинотеатр"),e("div",R,[(o(!0),n(i,null,f(p(s).teaters,(u,_)=>(o(),n("div",j,[e("div",{onClick:l=>{t.showModal=!0,t.currentIndex=_},class:"close","data-bs-target":"#exampleModal"},D,8,q),$(k,{to:{path:`/admin/cinoteaters/${_}`}},{default:x(()=>[(o(!0),n(i,null,f(u.logo,l=>(o(),n("div",E,[e("img",{src:l.url,alt:""},null,8,O)]))),256)),e("div",T,[e("h2",null,B(u.title),1)])]),_:2},1032,["to"]),e("div",{class:L(["modal fade show",{"d-block":t.showModal}]),tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",X,[e("div",Z,[e("div",A,[G,e("button",{type:"button",class:"close",onClick:a[0]||(a[0]=l=>t.showModal=!1)},J)]),K,e("div",P,[e("button",{type:"button",class:"btn btn-secondary",onClick:a[1]||(a[1]=l=>t.showModal=!1)},"Отмена"),e("button",{type:"button",class:"btn btn-danger",onClick:a[2]||(a[2]=l=>{C(t.currentIndex),t.showModal=!1})},"Да")])])])],2)]))),256)),c.value?(o(),n("div",Q," Вы не можете удалить последний кинотеатр ")):m("",!0)])],64)}}}),ee=y(W,[["__scopeId","data-v-aecc7c7f"]]);export{ee as default};

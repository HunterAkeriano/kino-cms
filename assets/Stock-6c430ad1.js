import{_ as B,C as g,S as F,D as y,w as N,r as M,o as i,d as u,u as c,j as V,n as S,e as t,F as w,i as $,x as r,t as b,g as j,h as T,y as z,p as P,q}from"./index-c21b36d8.js";const a=p=>(P("data-v-5a2b469d"),p=p(),q(),p),E=a(()=>t("h2",null,"Акции",-1)),O={class:"table-responsive"},Y={class:"table table-striped table-bordered table-hover"},A=a(()=>t("tr",null,[t("td",null,"Номер"),t("td",null,"Имя Акции"),t("td",null,"Дата Акции"),t("td",null,"Состояние")],-1)),G=["onClick"],H=["onClick"],J={class:"modal-dialog",role:"document"},K={class:"modal-content"},Q={class:"modal-header"},R=a(()=>t("h5",{class:"modal-title"},"Изменение состояние акции ",-1)),U=a(()=>t("span",{"aria-hidden":"true"},"×",-1)),W=[U],X=a(()=>t("div",{class:"modal-body"}," Изменить состояние данной акции? ",-1)),Z={class:"modal-footer"},tt={class:"modal-dialog",role:"document"},et={class:"modal-content"},st={class:"modal-header"},ot=a(()=>t("h5",{class:"modal-title"},"Вы уверенны что хотите удалить акцию?",-1)),lt=a(()=>t("span",{"aria-hidden":"true"},"×",-1)),nt=[lt],at=a(()=>t("div",{class:"modal-body"}," Вы уверенны что хотите удалить эту акцию? ",-1)),dt={class:"modal-footer"},it={class:"pagination mt-5",style:{display:"flex","justify-content":"center"}},ct=["onClick"],rt={key:0,class:"error-message"},ut={data(){return{showModal:!1,currentIndex:0,stockIndex:0,deleteModal:!1}}},bt=Object.assign(ut,{__name:"Stock",setup(p){const k=g(!1),l=F();function I(s){l.statusIndex=s,l.newStatus()}function x(s){if(l.deleteIndex=s,l.stock.length===1)return k.value=!0,setTimeout(()=>{k.value=!1},2e3),!1;for(let e=0;e<l.stock.length;e++)l.stock[e].id=e;l.deleteStock()}function D(s){const e=new Date(s),_=e.getDate(),v=e.getMonth()+1,o=e.getFullYear();return`${_<10?"0"+_:_}-${v<10?"0"+v:v}-${o}`}const h=g(6),n=g(1),L=y(()=>{const s=(n.value-1)*h.value,e=s+h.value;return l.stock.slice(s,e)}),f=y(()=>(n.value-1)*h.value),C=y(()=>Math.ceil(l.stock.length/h.value));return N(n,s=>{window.scrollTo(0,0)}),(s,e)=>{const _=M("Loader"),v=M("router-link");return i(),u(w,null,[c(l).loading?(i(),V(_,{key:0})):S("",!0),E,t("div",O,[t("table",Y,[t("tbody",null,[A,(i(!0),u(w,null,$(c(L),(o,m)=>(i(),u("tr",null,[t("td",null,b(c(f)+m+1),1),t("td",null,[j(v,{to:{path:`/admin/stock-str/${o.nameStock}`}},{default:T(()=>[z(b(o.title),1)]),_:2},1032,["to"])]),t("td",null,b(D(o.date)),1),t("td",{class:r(["font-weight-bold",{"text-success":o.status,"text-danger":!o.status}])},b(o.status?"В проекте":"Остановлена"),3),t("td",null,[t("button",{class:r(["btn btn-block",{"btn-success":!o.status,"btn-danger":o.status}]),onClick:d=>{s.showModal=!0,s.currentIndex=c(f)+m}},b(o.status?"Выключить":"Включить"),11,G)]),t("td",null,[t("button",{class:"btn btn-block btn-danger",onClick:d=>{s.stockIndex=c(f)+m,s.deleteModal=!0}},"Удалить акцию",8,H)]),t("div",{class:r(["modal fade show",{"d-block":s.showModal}]),tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[t("div",J,[t("div",K,[t("div",Q,[R,t("button",{type:"button",class:"close",onClick:e[0]||(e[0]=d=>s.showModal=!1)},W)]),X,t("div",Z,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[1]||(e[1]=d=>s.showModal=!1)},"Отмена"),t("button",{type:"button",class:"btn btn-danger",onClick:e[2]||(e[2]=d=>{I(s.currentIndex),s.showModal=!1})},"Да")])])])],2),t("div",{class:r(["modal fade show",{"d-block":s.deleteModal}]),tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[t("div",tt,[t("div",et,[t("div",st,[ot,t("button",{type:"button",class:"close",onClick:e[3]||(e[3]=d=>s.deleteModal=!1)},nt)]),at,t("div",dt,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[4]||(e[4]=d=>s.deleteModal=!1)},"Отмена"),t("button",{type:"button",class:"btn btn-danger",onClick:e[5]||(e[5]=d=>{x(s.stockIndex),s.deleteModal=!1})},"Да")])])])],2)]))),256))])]),t("ul",it,[t("li",{class:r(["page-item",{disabled:n.value===1}])},[t("a",{style:{cursor:"pointer"},class:"page-link",onClick:e[6]||(e[6]=o=>n.value--)},"Предыдущая")],2),(i(!0),u(w,null,$(c(C),o=>(i(),u("li",{key:o,class:r(["page-item",{active:n.value===o}])},[t("a",{style:{cursor:"pointer"},class:"page-link",onClick:m=>n.value=o},b(o),9,ct)],2))),128)),t("li",{class:r(["page-item",{disabled:n.value===c(C)}])},[t("a",{style:{cursor:"pointer"},class:"page-link",onClick:e[7]||(e[7]=o=>n.value++)},"Следующая")],2)]),k.value?(i(),u("div",rt," Вы не можете удалить последнюю акцию ")):S("",!0)])],64)}}}),vt=B(bt,[["__scopeId","data-v-5a2b469d"]]);export{vt as default};

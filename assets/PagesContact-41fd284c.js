import{_ as v,K as x,r as g,o as l,g as n,u as p,n as b,m as f,h as t,F as _,k as h,z as a,A as i,x as V,y as w}from"./index-9c2c99fe.js";const o=c=>(V("data-v-ec81ba4c"),c=c(),w(),c),U=o(()=>t("h2",null,"Контакты",-1)),k={class:"contacts"},C={style:{padding:"20px"},class:"card"},I={class:"title flex"},B=o(()=>t("label",{style:{margin:"0"}},"Название кинотеатра",-1)),S=["onUpdate:modelValue"],L={class:"tel flex mt-3"},P=o(()=>t("label",{style:{margin:"0"}},"Телефон",-1)),E=["onUpdate:modelValue"],F={class:"vul flex mt-3"},N=o(()=>t("label",{style:{margin:"0"}},"Улица",-1)),z=["onUpdate:modelValue"],A={class:"email flex mt-3"},D=o(()=>t("label",{style:{margin:"0"}},"Email",-1)),K=["onUpdate:modelValue"],M={class:"email flex mt-3"},R=o(()=>t("label",{style:{margin:"0"}},"Кординаты для гугл-мапс",-1)),T=["onUpdate:modelValue"],Z={class:"logo flex mt-3"},$=o(()=>t("p",null,"Логотип",-1)),j={style:{height:"100px",width:"150px"},class:"img"},q=["src"],G=["onClick"],H={__name:"PagesContact",setup(c){const d=x();function m(u){d.idRouter=u,d.saveZal()}return(u,J)=>{const r=g("Loader");return l(),n(_,null,[p(d).loading?(l(),b(r,{key:0})):f("",!0),U,t("div",k,[(l(!0),n(_,null,h(p(d).contact,(s,y)=>(l(),n("div",C,[t("div",I,[B,a(t("input",{style:{width:"50%"},type:"text","onUpdate:modelValue":e=>s.title=e,disabled:""},null,8,S),[[i,s.title]])]),t("div",L,[P,a(t("input",{style:{width:"40%"},type:"text","onUpdate:modelValue":e=>s.tel=e},null,8,E),[[i,s.tel]])]),t("div",F,[N,a(t("input",{style:{width:"40%"},type:"text","onUpdate:modelValue":e=>s.vul=e},null,8,z),[[i,s.vul]])]),t("div",A,[D,a(t("input",{style:{width:"40%"},type:"text","onUpdate:modelValue":e=>s.email=e},null,8,K),[[i,s.email]])]),t("div",M,[R,a(t("input",{style:{width:"40%"},type:"text","onUpdate:modelValue":e=>s.carts=e},null,8,T),[[i,s.carts]])]),t("div",Z,[$,(l(!0),n(_,null,h(s.logo,e=>(l(),n("div",j,[t("img",{style:{width:"100%",height:"100%"},src:e.url,alt:""},null,8,q)]))),256))]),t("button",{class:"btn btn-block btn-success mt-3",onClick:e=>m(y)},"Сохранить",8,G)]))),256))])],64)}}},Q=v(H,[["__scopeId","data-v-ec81ba4c"]]);export{Q as default};

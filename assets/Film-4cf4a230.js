import{_ as k,f as y,x as C,r as m,o as l,g as n,h as e,u,n as w,m as f,F as h,k as p,i as M,j as F,t as I,D as B,A as S,B as $}from"./index-80d2e8a2.js";const c=i=>(S("data-v-e46eb004"),i=i(),$(),i),L={class:"film-info"},x={class:"films"},N=["onClick"],V=c(()=>e("span",null,"X",-1)),j=[V],A={class:"img"},D=["src"],z={class:"title"},E={class:"modal-dialog",role:"document"},O={class:"modal-content"},T={class:"modal-header"},U=c(()=>e("h5",{class:"modal-title"},"Удалить фильм? ",-1)),X=c(()=>e("span",{"aria-hidden":"true"},"×",-1)),q=[X],G=c(()=>e("div",{class:"modal-body"}," Вы действительно хотите удалить этот фильм?? ",-1)),H={class:"modal-footer"},J={key:1,class:"error-message"},K={data(){return{showModal:!1,currentIndex:0}}},P=Object.assign(K,{__name:"Film",setup(i){const t=y(),_=C(!1);function v(s){if(t.film.length===1)return console.log("Cannot delete last item from array"),_.value=!0,setTimeout(()=>{_.value=!1},2e3),!1;const o=t.film.splice(s,1)[0];t.filmUA.splice(s,1)[0],t.deleteFilms.push(o.name);for(let a=0;a<t.film.length;a++)t.film[a].id=a;t.deleteFilm(),console.log(s)}return(s,o)=>{const a=m("Loader"),b=m("router-link");return l(),n("div",L,[e("div",x,[u(t).loading?(l(),w(a,{key:0})):f("",!0),(l(!0),n(h,null,p(u(t).film,(r,g)=>(l(),n("div",{class:"cards",key:r.id},[e("div",{onClick:d=>{s.showModal=!0,s.currentIndex=g},class:"close","data-bs-target":"#exampleModal"},j,8,N),M(b,{to:{path:`/admin/film-str/${r.name}`}},{default:F(()=>[(l(!0),n(h,null,p(r.ava,d=>(l(),n("div",A,[e("img",{src:d.url,alt:""},null,8,D)]))),256)),e("div",z,[e("h4",null,I(r.title),1)])]),_:2},1032,["to"]),e("div",{class:B(["modal fade show",{"d-block":s.showModal}]),tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",E,[e("div",O,[e("div",T,[U,e("button",{type:"button",class:"close",onClick:o[0]||(o[0]=d=>s.showModal=!1)},q)]),G,e("div",H,[e("button",{type:"button",class:"btn btn-secondary",onClick:o[1]||(o[1]=d=>s.showModal=!1)},"Отмена"),e("button",{type:"button",class:"btn btn-danger",onClick:o[2]||(o[2]=d=>{v(s.currentIndex),s.showModal=!1})},"Да")])])])],2)]))),128)),_.value?(l(),n("div",J," Вы не можете удалить последний фильм ")):f("",!0)])])}}}),R=k(P,[["__scopeId","data-v-e46eb004"]]);export{R as default};

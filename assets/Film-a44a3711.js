import{_ as k,f as y,q as w,r as m,o as l,d as n,e,u,i as C,l as f,F as h,h as p,g as F,w as M,t as I,H as S,p as $,m as B}from"./index-cdf02b7c.js";const c=i=>($("data-v-35b6b6c9"),i=i(),B(),i),L={class:"film-info"},x={class:"films"},N=["onClick"],V=c(()=>e("span",null,"X",-1)),j=[V],q={class:"img"},z=["src"],D={class:"title"},E={class:"modal-dialog",role:"document"},H={class:"modal-content"},O={class:"modal-header"},T=c(()=>e("h5",{class:"modal-title"},"Удалить фильм? ",-1)),X=c(()=>e("span",{"aria-hidden":"true"},"×",-1)),A=[X],G=c(()=>e("div",{class:"modal-body"}," Вы действительно хотите удалить этот фильм?? ",-1)),J={class:"modal-footer"},K={key:1,class:"error-message"},P={data(){return{showModal:!1,currentIndex:0}}},Q=Object.assign(P,{__name:"Film",setup(i){const t=y(),_=w(!1);function v(s){if(t.film.length===1)return console.log("Cannot delete last item from array"),_.value=!0,setTimeout(()=>{_.value=!1},2e3),!1;const o=t.film.splice(s,1)[0];t.deleteFilms.push(o.nameFilms);for(let a=0;a<t.film.length;a++)t.film[a].id=a;t.deleteFilm(),console.log(s)}return(s,o)=>{const a=m("Loader"),b=m("router-link");return l(),n("div",L,[e("div",x,[u(t).loading?(l(),C(a,{key:0})):f("",!0),(l(!0),n(h,null,p(u(t).film,(r,g)=>(l(),n("div",{class:"cards",key:r.id},[e("div",{onClick:d=>{s.showModal=!0,s.currentIndex=g},class:"close","data-bs-target":"#exampleModal"},j,8,N),F(b,{to:{path:`/admin/film-str/${r.nameFilms}`}},{default:M(()=>[(l(!0),n(h,null,p(r.ava,d=>(l(),n("div",q,[e("img",{src:d.url,alt:""},null,8,z)]))),256)),e("div",D,[e("h4",null,I(r.title),1)])]),_:2},1032,["to"]),e("div",{class:S(["modal fade show",{"d-block":s.showModal}]),tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",E,[e("div",H,[e("div",O,[T,e("button",{type:"button",class:"close",onClick:o[0]||(o[0]=d=>s.showModal=!1)},A)]),G,e("div",J,[e("button",{type:"button",class:"btn btn-secondary",onClick:o[1]||(o[1]=d=>s.showModal=!1)},"Отмена"),e("button",{type:"button",class:"btn btn-danger",onClick:o[2]||(o[2]=d=>{v(s.currentIndex),s.showModal=!1})},"Да")])])])],2)]))),128)),_.value?(l(),n("div",K," Вы не можете удалить последний фильм ")):f("",!0)])])}}}),U=k(Q,[["__scopeId","data-v-35b6b6c9"]]);export{U as default};

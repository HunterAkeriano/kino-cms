import{_ as I,b as x,a as H,c as O,f as K,l as T,w as F,r as v,o as a,d as n,e as s,g as r,h as l,u as t,F as o,i,j as p,t as g}from"./index-c1fca2e6.js";import{S as P,N as b,P as y,a as u,b as d}from"./swiper-slide-23af55b1.js";import{S,A as k}from"./swiper-bundle.min-c5f93f64.js";const U={class:"home"},V={class:"banner"},j=["href"],A=["src"],$={class:"container"},D={class:"home__content"},E={class:"afsh-bans"},J=["src"],L=["href"],q={class:"swiper-title"},z={class:"films mt-5 ml-5"},G={class:"img"},Q=["src"],R={class:"title"},W={class:"banner mt-5"},X=["href"],Y=["src"];P.use([b,y,S,k]);const Z={components:{Swiper:u,SwiperSlide:d},data(){return{modules:[b,y,S,k]}},methods:{isImage(c){return/^https?:\/\//i.test(c)},isColor(c){return!/^https?:\/\//i.test(c)}}},ee=Object.assign(Z,{__name:"HimeUser",setup(c){x();const f=H(),_=O(),w=K(),h=T();function N(){h.lang=="0"?document.title="KINO-CMS | Главная":document.title="KINO-CMS | Головна"}return N(),F(()=>h.lang,m=>{m=="0"&&(document.title="KINO-CMS | Главная"),m=="1"&&(document.title="KINO-CMS | Головна")}),(m,se)=>{const B=v("HeaderClientVue"),C=v("router-link");return a(),n("div",U,[s("div",V,[r(t(u),{"slides-per-view":1,allowTouchMove:!1,loop:!0,autoplay:{delay:Number(t(_).rotationSpeed)*1e3}},{default:l(()=>[(a(!0),n(o,null,i(t(_).movieBanners.banners,e=>(a(),p(t(d),{key:e.name},{default:l(()=>[s("a",{class:"link-swiper",target:"_blank",href:e.urls},[s("img",{src:e.url,alt:""},null,8,A)],8,j)]),_:2},1024))),128))]),_:1},8,["autoplay"])]),r(B,{class:"header-user"}),s("div",$,[s("div",D,[s("div",E,[r(t(u),{"slides-per-view":1,allowTouchMove:!1,loop:!0,pagination:{clickable:!1},autoplay:{delay:Number(t(f).rotationSpeed)*1e3}},{default:l(()=>[(a(!0),n(o,null,i(t(f).movieBanners.banners,e=>(a(),p(t(d),{key:e.name},{default:l(()=>[s("img",{src:e.url,alt:""},null,8,J),s("a",{target:"_blank",href:e.urls},[s("h5",q,g(e.title),1)],8,L)]),_:2},1024))),128))]),_:1},8,["autoplay"])]),s("div",z,[(a(!0),n(o,null,i(t(w).film,e=>(a(),n("div",{class:"card-film",key:e.id},[r(C,{to:{path:`/user-film/${e.nameFilms}`}},{default:l(()=>[(a(!0),n(o,null,i(e.ava,M=>(a(),n("div",G,[s("img",{src:M.url,alt:""},null,8,Q)]))),256)),s("div",R,[s("h4",null,g(e.title),1)])]),_:2},1032,["to"])]))),128))]),s("div",W,[r(t(u),{"slides-per-view":1,allowTouchMove:!1,loop:!0,autoplay:{delay:Number(t(_).rotationSpeed)*1e3}},{default:l(()=>[(a(!0),n(o,null,i(t(_).movieBanners.banners,e=>(a(),p(t(d),{key:e.name},{default:l(()=>[s("a",{class:"link-swiper",target:"_blank",href:e.urls},[s("img",{src:e.url,alt:""},null,8,Y)],8,X)]),_:2},1024))),128))]),_:1},8,["autoplay"])])])])])}}}),le=I(ee,[["__scopeId","data-v-13c2ef75"]]);export{le as default};

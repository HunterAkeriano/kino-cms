import{_ as N,b as x,a as C,c as H,f as M,r as f,o as a,d as r,e as s,g as l,w as n,u as t,F as o,h as i,i as m,t as h}from"./index-c1996a1c.js";import{S as V,N as v,P as b,a as u,b as d}from"./swiper-slide-f034d3ff.js";import{S as g,A as y}from"./swiper-bundle.min-c32985be.js";const F={class:"home"},T={class:"banner"},U=["href"],A=["src"],I={class:"container"},P={class:"home__content"},$={class:"afsh-bans"},j=["src"],D=["href"],E={class:"swiper-title"},J={class:"films mt-5 ml-5"},L={class:"img"},O=["src"],q={class:"title"},z={class:"banner mt-5"},G=["href"],K=["src"];V.use([v,b,g,y]);const Q={components:{Swiper:u,SwiperSlide:d},data(){return{modules:[v,b,g,y]}},methods:{isImage(c){return/^https?:\/\//i.test(c)},isColor(c){return!/^https?:\/\//i.test(c)}}},R=Object.assign(Q,{__name:"HimeUser",setup(c){x();const p=C(),_=H(),k=M();return(W,X)=>{const w=f("HeaderClientVue"),S=f("router-link");return a(),r("div",F,[s("div",T,[l(t(u),{"slides-per-view":1,allowTouchMove:!1,loop:!0,autoplay:{delay:Number(t(_).rotationSpeed)*1e3}},{default:n(()=>[(a(!0),r(o,null,i(t(_).movieBanners.banners,e=>(a(),m(t(d),{key:e.name},{default:n(()=>[s("a",{class:"link-swiper",target:"_blank",href:e.urls},[s("img",{src:e.url,alt:""},null,8,A)],8,U)]),_:2},1024))),128))]),_:1},8,["autoplay"])]),l(w,{class:"header-user"}),s("div",I,[s("div",P,[s("div",$,[l(t(u),{"slides-per-view":1,allowTouchMove:!1,loop:!0,pagination:{clickable:!1},autoplay:{delay:Number(t(p).rotationSpeed)*1e3}},{default:n(()=>[(a(!0),r(o,null,i(t(p).movieBanners.banners,e=>(a(),m(t(d),{key:e.name},{default:n(()=>[s("img",{src:e.url,alt:""},null,8,j),s("a",{target:"_blank",href:e.urls},[s("h5",E,h(e.title),1)],8,D)]),_:2},1024))),128))]),_:1},8,["autoplay"])]),s("div",J,[(a(!0),r(o,null,i(t(k).film,e=>(a(),r("div",{class:"card-film",key:e.id},[l(S,{to:{path:`/user-film/${e.nameFilms}`}},{default:n(()=>[(a(!0),r(o,null,i(e.ava,B=>(a(),r("div",L,[s("img",{src:B.url,alt:""},null,8,O)]))),256)),s("div",q,[s("h4",null,h(e.title),1)])]),_:2},1032,["to"])]))),128))]),s("div",z,[l(t(u),{"slides-per-view":1,allowTouchMove:!1,loop:!0,autoplay:{delay:Number(t(_).rotationSpeed)*1e3}},{default:n(()=>[(a(!0),r(o,null,i(t(_).movieBanners.banners,e=>(a(),m(t(d),{key:e.name},{default:n(()=>[s("a",{class:"link-swiper",target:"_blank",href:e.urls},[s("img",{src:e.url,alt:""},null,8,K)],8,G)]),_:2},1024))),128))]),_:1},8,["autoplay"])])])])])}}}),se=N(R,[["__scopeId","data-v-c883f1f4"]]);export{se as default};

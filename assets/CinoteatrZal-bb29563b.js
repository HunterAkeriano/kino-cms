import{_ as w,l as k,I as $,k as b,J as S,m as A,o,d as i,u as e,e as t,t as n,g,h as c,n as u,F as m,i as z,j as y,p as I,q as U}from"./index-ef99c11b.js";import{S as x,N as C,P as N,a as p,b as v}from"./swiper-slide-0b9822e4.js";/* empty css                      */const _=r=>(I("data-v-d7942d9f"),r=r(),U(),r),B={class:"content"},V={key:0,class:"container"},Z={key:0,class:"zal p-5",style:{"background-color":"white"}},j={class:"ava",style:{height:"300px"}},E=["src"],F={class:"title"},P={class:"info"},q=_(()=>t("p",null,"Информация про зал:",-1)),D={class:"zal mt-4"},J=_(()=>t("h2",null,"Схема зала",-1)),L={class:"img",style:{width:"500px",height:"300px"}},O=["src"],R={class:"photo-content pt-5 pb-5",style:{background:"white"}},T={style:{"text-align":"center"}},G=["src"],H={key:1,class:"container"},K={key:0,class:"zal p-5",style:{"background-color":"white"}},M={class:"ava",style:{height:"300px"}},Q=["src"],W={class:"title"},X={class:"info"},Y=_(()=>t("p",null,"Інформація про зал:",-1)),tt={class:"zal mt-4"},et=_(()=>t("h2",null,"Схема залу",-1)),st={class:"img",style:{width:"500px",height:"300px"}},at=["src"],lt={class:"photo-content pt-5 pb-5",style:{background:"white"}},ot={style:{"text-align":"center"}},it=["src"];x.use([C,N]);const nt={components:{Swiper:p,SwiperSlide:v}},rt=Object.assign(nt,{__name:"CinoteatrZal",setup(r){const d=k(),s=$(),f=b(),a=S({value:null});return A(()=>{a.value=s.teaters.findIndex(l=>l.name===f.params.id)}),(l,dt)=>(o(),i("div",B,[e(d).lang=="0"?(o(),i("div",V,[e(s).teaters[a.value]?(o(),i("div",Z,[t("div",j,[t("img",{style:{width:"100%",height:"100%"},src:e(s).teaters[a.value].zal[l.$route.params.zalid].ava[0].url,alt:""},null,8,E)]),t("div",F,[t("h2",null,"Имя зала: "+n(e(s).teaters[a.value].zal[l.$route.params.zalid].title),1)]),t("div",P,[q,t("p",null,n(e(s).teaters[a.value].zal[l.$route.params.zalid].description),1)]),t("div",D,[J,t("div",L,[t("img",{style:{width:"100%",height:"100%"},src:e(s).teaters[a.value].zal[l.$route.params.zalid].logo[0].url,alt:""},null,8,O)])]),t("div",R,[t("h5",T,n(e(d).lang=="0"?"Интерессные фото":"Цікаві фото"),1),g(e(p),{"slides-per-view":1,loop:!0,pagination:{clickable:!0},navigation:!0},{default:c(()=>[(o(!0),i(m,null,z(e(s).teaters[a.value].zal[l.$route.params.zalid].gallery,h=>(o(),y(e(v),null,{default:c(()=>[t("img",{src:h.url,alt:""},null,8,G)]),_:2},1024))),256))]),_:1})])])):u("",!0)])):u("",!0),e(d).lang=="1"?(o(),i("div",H,[e(s).teatersUA[a.value]?(o(),i("div",K,[t("div",M,[t("img",{style:{width:"100%",height:"100%"},src:e(s).teatersUA[a.value].zal[l.$route.params.zalid].ava[0].url,alt:""},null,8,Q)]),t("div",W,[t("h2",null,"Ім'я залу: "+n(e(s).teatersUA[a.value].zal[l.$route.params.zalid].title),1)]),t("div",X,[Y,t("p",null,n(e(s).teatersUA[a.value].zal[l.$route.params.zalid].description),1)]),t("div",tt,[et,t("div",st,[t("img",{style:{width:"100%",height:"100%"},src:e(s).teatersUA[a.value].zal[l.$route.params.zalid].logo[0].url,alt:""},null,8,at)])]),t("div",lt,[t("h5",ot,n(e(d).lang=="0"?"Интерессные фото":"Цікаві фото"),1),g(e(p),{"slides-per-view":1,loop:!0,pagination:{clickable:!0},navigation:!0},{default:c(()=>[(o(!0),i(m,null,z(e(s).teatersUA[a.value].zal[l.$route.params.zalid].gallery,h=>(o(),y(e(v),null,{default:c(()=>[t("img",{src:h.url,alt:""},null,8,it)]),_:2},1024))),256))]),_:1})])])):u("",!0)])):u("",!0)]))}}),ht=w(rt,[["__scopeId","data-v-d7942d9f"]]);export{ht as default};

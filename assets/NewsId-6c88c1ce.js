import{_ as v,l as x,B as k,k as b,m as N,w as S,u as e,o as l,d as i,e as n,n as c,t as r,g as A,h,F as U,i as I,j as $}from"./index-c1fca2e6.js";import{S as C,N as B,P as M,a as g,b as p}from"./swiper-slide-23af55b1.js";/* empty css                      */const O={key:0,class:"news"},D={class:"container"},K={class:"content pt-5",style:{display:"flex","justify-content":"space-between","background-color":"white"}},j={key:0,class:"ava",style:{width:"500px",height:"300px"}},F=["src"],P={key:1,class:"ava",style:{width:"500px",height:"300px"}},E=["src"],V={key:2,class:"info mr-5 ml-5"},L={style:{"text-align":"center"}},R={class:"mt-5",style:{"text-align":"center"}},T={key:3,class:"info mr-5 ml-5"},Y={style:{"text-align":"center"}},q={style:{"text-align":"center"}},z={class:"mt-5",style:{"text-align":"center"}},G={class:"photo-content pt-5 pb-5",style:{background:"white"}},H={style:{"text-align":"center"}},J=["src"],Q={key:0,class:"youtube-video mt-2"},W=["src"],X={key:1,class:"youtube-video mt-2"},Z=["src"];C.use([B,M]);const ee={components:{Swiper:g,SwiperSlide:p}},te=Object.assign(ee,{__name:"NewsId",setup(se){const a=x(),t=k(),m=b();let s=null;N(()=>{s=t.news.findIndex(o=>o.nameNews===m.params.id)});function w(o){const _=new Date(o),d=_.getDate(),u=_.getMonth()+1,y=_.getFullYear();return`${d<10?"0"+d:d}-${u<10?"0"+u:u}-${y}`}function f(){a.lang=="0"?t.news[s]&&(document.title=`KINO-CMS | ${t.news[s].title}`):t.newsUA[s]&&(document.title=`KINO-CMS | ${t.newsUA[s].title}`)}return f(),S(()=>a.lang,o=>{o=="0"&&t.news[s]&&(document.title=`KINO-CMS | ${t.news[s].title}`),o=="1"&&t.newsUA[s]&&(document.title=`KINO-CMS | ${t.newsUA[s].title}`)}),(o,_)=>e(t).news[e(s)]&&e(t).newsUA[e(s)]?(l(),i("div",O,[n("div",D,[n("div",K,[e(a).lang=="0"?(l(),i("div",j,[n("img",{style:{display:"block",width:"100%",height:"100%"},class:"ml-4",src:e(t).news[e(s)].ava[0].url,alt:""},null,8,F)])):c("",!0),e(a).lang=="1"?(l(),i("div",P,[n("img",{style:{display:"block",width:"100%",height:"100%"},class:"ml-4",src:e(t).newsUA[e(s)].ava[0].url,alt:""},null,8,E)])):c("",!0),e(a).lang=="0"?(l(),i("div",V,[n("p",L,r(w(e(t).news[e(s)].date)),1),n("h2",null,r(e(t).news[e(s)].title),1),n("p",R,r(e(t).news[e(s)].description),1)])):c("",!0),e(a).lang=="1"?(l(),i("div",T,[n("p",Y,r(w(e(t).newsUA[e(s)].date)),1),n("h2",q,r(e(t).newsUA[e(s)].title),1),n("p",z,r(e(t).newsUA[e(s)].description),1)])):c("",!0)]),n("div",G,[n("h5",H,r(e(a).lang=="0"?"Интерессные фото новостей":"Цікаві фото новин"),1),A(e(g),{"slides-per-view":1,loop:!0,pagination:{clickable:!0},navigation:!0},{default:h(()=>[(l(!0),i(U,null,I(e(t).news[e(s)].gallery,d=>(l(),$(e(p),null,{default:h(()=>[n("img",{src:d.url,alt:""},null,8,J)]),_:2},1024))),256))]),_:1})]),e(a).lang=="0"?(l(),i("div",Q,[n("iframe",{src:e(t).news[e(s)].trailer,frameborder:"0",allowfullscreen:""},null,8,W)])):c("",!0),e(a).lang=="1"?(l(),i("div",X,[n("iframe",{src:e(t).newsUA[e(s)].trailer,frameborder:"0",allowfullscreen:""},null,8,Z)])):c("",!0)])])):c("",!0)}}),ie=v(te,[["__scopeId","data-v-903c9abf"]]);export{ie as default};

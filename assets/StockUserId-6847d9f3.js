import{_ as v,l as w,E as x,k as S,m as b,w as U,u as t,o as a,d as n,e as o,n as i,t as r,g as A,h as k,F as I,i as N,j as $}from"./index-95b77ea2.js";import{S as C,N as M,P as O,a as g,b as p}from"./swiper-slide-5da561c5.js";/* empty css                      */const B={key:0,class:"news"},D={class:"container"},K={key:0,class:"youtube-video mt-2"},j=["src"],E={key:1,class:"youtube-video mt-2"},F=["src"],P={class:"content pt-5",style:{display:"flex","justify-content":"space-between","background-color":"white"}},V={key:0,class:"ava",style:{width:"500px",height:"300px"}},L=["src"],R={key:1,class:"ava",style:{width:"500px",height:"300px"}},T=["src"],Y={key:2,class:"info mr-5 ml-5"},q={style:{"text-align":"center"}},z={class:"mt-5",style:{"text-align":"center"}},G={key:3,class:"info mr-5 ml-5"},H={style:{"text-align":"center"}},J={style:{"text-align":"center"}},Q={class:"mt-5",style:{"text-align":"center"}},W={class:"photo-content pt-5 pb-5",style:{background:"white"}},X={style:{"text-align":"center"}},Z=["src"];C.use([M,O]);const tt={components:{Swiper:g,SwiperSlide:p}},et=Object.assign(tt,{__name:"StockUserId",setup(st){const c=w(),e=x(),m=S();let s=null;b(()=>{s=e.stock.findIndex(l=>l.nameStock===m.params.id)});function h(l){const _=new Date(l),d=_.getDate(),u=_.getMonth()+1,y=_.getFullYear();return`${d<10?"0"+d:d}-${u<10?"0"+u:u}-${y}`}function f(){c.lang=="0"?e.stock[s]&&(document.title=`KINO-CMS | ${e.stock[s].title}`):e.stockUA[s]&&(document.title=`KINO-CMS | ${e.stockUA[s].title}`)}return f(),U(()=>c.lang,l=>{l=="0"&&e.stock[s]&&(document.title=`KINO-CMS | ${e.stock[s].title}`),l=="1"&&e.stockUA[s]&&(document.title=`KINO-CMS | ${e.stockUA[s].title}`)}),(l,_)=>t(e).stock[t(s)]&&t(e).stockUA[t(s)]?(a(),n("div",B,[o("div",D,[t(c).lang=="0"?(a(),n("div",K,[o("iframe",{src:t(e).stock[t(s)].trailer,frameborder:"0",allowfullscreen:""},null,8,j)])):i("",!0),t(c).lang=="1"?(a(),n("div",E,[o("iframe",{src:t(e).stockUA[t(s)].trailer,frameborder:"0",allowfullscreen:""},null,8,F)])):i("",!0),o("div",P,[t(c).lang=="0"?(a(),n("div",V,[o("img",{style:{display:"block",width:"100%",height:"100%"},class:"ml-4",src:t(e).stock[t(s)].ava[0].url,alt:""},null,8,L)])):i("",!0),t(c).lang=="1"?(a(),n("div",R,[o("img",{style:{display:"block",width:"100%",height:"100%"},class:"ml-4",src:t(e).stockUA[t(s)].ava[0].url,alt:""},null,8,T)])):i("",!0),t(c).lang=="0"?(a(),n("div",Y,[o("p",q,r(h(t(e).stock[t(s)].date)),1),o("h2",null,r(t(e).stock[t(s)].title),1),o("p",z,r(t(e).stock[t(s)].description),1)])):i("",!0),t(c).lang=="1"?(a(),n("div",G,[o("p",H,r(h(t(e).stock[t(s)].date)),1),o("h2",J,r(t(e).stockUA[t(s)].title),1),o("p",Q,r(t(e).stockUA[t(s)].description),1)])):i("",!0)]),o("div",W,[o("h5",X,r(t(c).lang=="0"?"Интерессные фото":"Цікаві фото"),1),A(t(g),{"slides-per-view":1,loop:!0,pagination:{clickable:!0},navigation:!0},{default:k(()=>[(a(!0),n(I,null,N(t(e).stock[t(s)].gallery,d=>(a(),$(t(p),null,{default:k(()=>[o("img",{src:d.url,alt:""},null,8,Z)]),_:2},1024))),256))]),_:1})])])])):i("",!0)}}),nt=v(et,[["__scopeId","data-v-02385d03"]]);export{nt as default};

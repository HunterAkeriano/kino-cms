import{_ as V,S as L,E as R,G as S,w as C,r as F,o as a,g as c,u as l,n as I,m as _,h as t,t as D,z as n,T as N,X as x,A as d,F as m,k as f,x as j,y as O}from"./index-9c2c99fe.js";const i=h=>(j("data-v-5174c1b3"),h=h(),O(),h),B={class:"flex"},T={style:{margin:"0"}},z=i(()=>t("option",{value:"0"},"RUS",-1)),M=i(()=>t("option",{value:"1"},"UA",-1)),P=[z,M],X={key:1,class:"rus mt-3"},E=i(()=>t("h2",null,"Создать новость",-1)),G={class:"news"},$={class:"status flex mt-3"},q=i(()=>t("label",{for:"status"},"Включить ли новость?",-1)),H={class:"date flex mt-3"},J=i(()=>t("label",{for:"data"},"Дата публикации",-1)),K={class:"name flex mt-3"},Q=i(()=>t("label",{for:"name"},"Название новости",-1)),W={class:"text flex mt-3"},Y=i(()=>t("label",{for:"text"},"Описание новости",-1)),Z={class:"ava flex mt-3"},tt=i(()=>t("p",null,"Главная картинка",-1)),et={class:"img"},st=["src"],ot={class:"add"},lt=i(()=>t("label",{for:"img-top-ua"},"Загрузити фото",-1)),it={class:"photo flex mt-3"},nt=i(()=>t("p",null,"Галерея",-1)),dt={class:"gallery"},at=["onClick"],rt=i(()=>t("span",null,"X",-1)),ct=[rt],ut=["src"],pt={class:"add"},_t=i(()=>t("label",{for:"img-bottom"},"Загрузити фото",-1)),mt={class:"trailer flex mt-3"},ht=i(()=>t("label",{for:"trailer"},"Ссылка на видео",-1)),gt={class:"seo mt-5"},ft=i(()=>t("h3",null,"СЕО блок",-1)),yt={class:"block flex mt-3"},wt=i(()=>t("label",{for:"url-seo"},"URL",-1)),vt={class:"block flex mt-3"},bt=i(()=>t("label",{for:"title-seo"},"title",-1)),xt={class:"block flex mt-3"},Ut=i(()=>t("label",{for:"keyword-seo"},"keyword",-1)),kt={class:"block flex mt-3"},At=i(()=>t("label",{for:"description-seo"},"description",-1)),Vt={key:0,style:{color:"red"}},Lt={key:2,class:"ua mt-3"},Rt=i(()=>t("h2",null,"Створити новину",-1)),St={class:"news"},Ct={class:"status flex mt-3"},Ft=i(()=>t("label",{for:"status"},"Увімкнена новина?",-1)),It={class:"date flex mt-3"},Dt=i(()=>t("label",{for:"data"},"Дата стоврення",-1)),Nt={class:"name flex mt-3"},jt=i(()=>t("label",{for:"name"},"Назва новини",-1)),Ot={class:"text flex mt-3"},Bt=i(()=>t("label",{for:"text"},"Опис новини",-1)),Tt={class:"ava flex mt-3"},zt=i(()=>t("p",null,"Головна картинка",-1)),Mt={class:"img"},Pt=["src"],Xt={class:"add"},Et=i(()=>t("label",{for:"img-top-ua"},"Загрузити фото",-1)),Gt={class:"photo flex mt-3"},$t=i(()=>t("p",null,"Галерея",-1)),qt={class:"gallery"},Ht=["onClick"],Jt=i(()=>t("span",null,"X",-1)),Kt=[Jt],Qt=["src"],Wt={class:"add"},Yt=i(()=>t("label",{for:"img-bottom"},"Загрузити фото",-1)),Zt={class:"trailer flex mt-3"},te=i(()=>t("label",{for:"trailer"},"Посилання на відео",-1)),ee={class:"seo mt-5"},se=i(()=>t("h3",null,"СЕО блок",-1)),oe={class:"block flex mt-3"},le=i(()=>t("label",{for:"url-seo"},"URL",-1)),ie={class:"block flex mt-3"},ne=i(()=>t("label",{for:"title-seo"},"title",-1)),de={class:"block flex mt-3"},ae=i(()=>t("label",{for:"keyword-seo"},"keyword",-1)),re={class:"block flex mt-3"},ce=i(()=>t("label",{for:"description-seo"},"description",-1)),ue={key:0,style:{color:"red"}},pe={__name:"NewsStr",setup(h){const U=L(),e=R(),y=S(new Date);y.value.setDate(y.value.getDate());function w(p){e.gallery.splice(p,1)}async function k(p){const o=p.target.files[0],r=new Image;await new Promise(s=>{r.onload=s,r.onerror=s,r.src=URL.createObjectURL(o)}),e.ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:o,url:URL.createObjectURL(o)})}async function v(p){const o=p.target.files;for(let r=0;r<o.length;r++){const s=o[r],u=new Image;await new Promise(g=>{u.onload=g,u.onerror=g,u.src=URL.createObjectURL(s)}),u.width>=1e3&&u.height>=190?e.gallery.push({id:e.gallery.length,image:s,name:"gallery-"+Date.now(),url:URL.createObjectURL(s)}):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}function b(){if(e.date.length<1||e.title.length<1||e.titleUA.length<1||e.description.length<1||e.descriptionUA.length<1||e.ava.length<1||e.avaUA.length<1||e.gallery.length<1||e.trailer.length<1){console.log("Не заполнил данные"),e.newsFalse=!0,console.log(e.newsFalse);return}else e.createNews(),e.newsFalse=!1}C(()=>e.newsAdd,p=>{p&&(U.push("/admin/news"),e.newsAdd=!1)});async function A(p){const o=p.target.files[0],r=new Image;await new Promise(s=>{r.onload=s,r.onerror=s,r.src=URL.createObjectURL(o)}),e.avaUA.splice(0,1,{id:0,name:"a-"+Date.now(),image:o,url:URL.createObjectURL(o)})}return(p,o)=>{const r=F("Loader");return a(),c(m,null,[l(e).loading?(a(),I(r,{key:0})):_("",!0),t("div",B,[t("p",T,D(l(e).language=="0"?"Язык":"Мова"),1),n(t("select",{"onUpdate:modelValue":o[0]||(o[0]=s=>l(e).language=s),name:"lang",id:""},P,512),[[N,l(e).language]])]),l(e).language=="0"?(a(),c("div",X,[E,t("div",G,[t("div",$,[q,n(t("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>l(e).status=s),type:"checkbox",id:"status"},null,512),[[x,l(e).status]])]),t("div",H,[J,n(t("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>l(e).date=s),type:"date",id:"data"},null,512),[[d,l(e).date]])]),t("div",K,[Q,n(t("input",{"onUpdate:modelValue":o[3]||(o[3]=s=>l(e).title=s),style:{width:"50%"},type:"text",id:"name",placeholder:"Название новости"},null,512),[[d,l(e).title]])]),t("div",W,[Y,n(t("textarea",{"onUpdate:modelValue":o[4]||(o[4]=s=>l(e).description=s),placeholder:"Описание новости",style:{width:"100%",height:"100px",resize:"none"},id:"text",cols:"30",rows:"10"},null,512),[[d,l(e).description]])]),t("div",Z,[tt,(a(!0),c(m,null,f(l(e).ava,(s,u)=>(a(),c("div",et,[t("img",{src:s.url,alt:""},null,8,st)]))),256)),t("div",ot,[t("input",{onChange:o[5]||(o[5]=s=>k(s)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),lt])]),t("div",it,[nt,(a(!0),c(m,null,f(l(e).gallery,(s,u)=>(a(),c("div",dt,[t("div",{class:"close",onClick:g=>w(u)},ct,8,at),t("img",{src:s.url,alt:""},null,8,ut)]))),256)),t("div",pt,[t("input",{onChange:o[6]||(o[6]=s=>v(s)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),_t])]),t("div",mt,[ht,n(t("input",{"onUpdate:modelValue":o[7]||(o[7]=s=>l(e).trailer=s),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на видео"},null,512),[[d,l(e).trailer]])]),t("div",gt,[ft,t("div",yt,[wt,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":o[8]||(o[8]=s=>l(e).seo.url=s),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[d,l(e).seo.url]])]),t("div",vt,[bt,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":o[9]||(o[9]=s=>l(e).seo.title=s),id:"title-seo",type:"text",placeholder:"title"},null,512),[[d,l(e).seo.title]])]),t("div",xt,[Ut,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":o[10]||(o[10]=s=>l(e).seo.keyword=s),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[d,l(e).seo.keyword]])]),t("div",kt,[At,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":o[11]||(o[11]=s=>l(e).seo.description=s),id:"description-seo",type:"text",placeholder:"description"},null,512),[[d,l(e).seo.description]])])]),t("div",{class:"block-btn mt-5"},[t("button",{onClick:b,class:"btn btn-block btn-success"},"Создать новость")])]),l(e).newsFalse?(a(),c("p",Vt,"Вы не ввели информацию или не загрузили фото")):_("",!0)])):_("",!0),l(e).language=="1"?(a(),c("div",Lt,[Rt,t("div",St,[t("div",Ct,[Ft,n(t("input",{"onUpdate:modelValue":o[12]||(o[12]=s=>l(e).status=s),type:"checkbox",id:"status"},null,512),[[x,l(e).status]])]),t("div",It,[Dt,n(t("input",{"onUpdate:modelValue":o[13]||(o[13]=s=>l(e).date=s),type:"date",id:"data"},null,512),[[d,l(e).date]])]),t("div",Nt,[jt,n(t("input",{"onUpdate:modelValue":o[14]||(o[14]=s=>l(e).titleUA=s),style:{width:"50%"},type:"text",id:"name",placeholder:"Назва новини"},null,512),[[d,l(e).titleUA]])]),t("div",Ot,[Bt,n(t("textarea",{"onUpdate:modelValue":o[15]||(o[15]=s=>l(e).descriptionUA=s),placeholder:"Опис новини",style:{width:"100%",height:"100px",resize:"none"},id:"text",cols:"30",rows:"10"},null,512),[[d,l(e).descriptionUA]])]),t("div",Tt,[zt,(a(!0),c(m,null,f(l(e).avaUA,(s,u)=>(a(),c("div",Mt,[t("img",{src:s.url,alt:""},null,8,Pt)]))),256)),t("div",Xt,[t("input",{onChange:o[16]||(o[16]=s=>A(s)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),Et])]),t("div",Gt,[$t,(a(!0),c(m,null,f(l(e).gallery,(s,u)=>(a(),c("div",qt,[t("div",{class:"close",onClick:g=>w(u)},Kt,8,Ht),t("img",{src:s.url,alt:""},null,8,Qt)]))),256)),t("div",Wt,[t("input",{onChange:o[17]||(o[17]=s=>v(s)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),Yt])]),t("div",Zt,[te,n(t("input",{"onUpdate:modelValue":o[18]||(o[18]=s=>l(e).trailerUA=s),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Посилання на відео"},null,512),[[d,l(e).trailerUA]])]),t("div",ee,[se,t("div",oe,[le,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":o[19]||(o[19]=s=>l(e).seoUA.url=s),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[d,l(e).seoUA.url]])]),t("div",ie,[ne,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":o[20]||(o[20]=s=>l(e).seoUA.title=s),id:"title-seo",type:"text",placeholder:"title"},null,512),[[d,l(e).seoUA.title]])]),t("div",de,[ae,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":o[21]||(o[21]=s=>l(e).seoUA.keyword=s),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[d,l(e).seoUA.keyword]])]),t("div",re,[ce,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":o[22]||(o[22]=s=>l(e).seoUA.description=s),id:"description-seo",type:"text",placeholder:"description"},null,512),[[d,l(e).seoUA.description]])])]),t("div",{class:"block-btn mt-5"},[t("button",{onClick:b,class:"btn btn-block btn-success"},"Создать новость")])]),l(e).newsFalse?(a(),c("p",ue,"Вы не ввели информацию или не загрузили фото")):_("",!0)])):_("",!0)],64)}}},me=V(pe,[["__scopeId","data-v-5174c1b3"]]);export{me as default};

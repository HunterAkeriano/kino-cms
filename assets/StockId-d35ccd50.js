import{_ as V,E as A,k as R,m as I,r as S,o as r,d as u,u as e,j as C,n as f,e as t,t as j,s as d,P as O,v as a,F as m,i as b,p as D,q as F}from"./index-6602851c.js";const n=k=>(D("data-v-cb156e0b"),k=k(),F(),k),N={class:"flex"},B={style:{margin:"0"}},P=n(()=>t("option",{value:"0"},"RUS",-1)),T=n(()=>t("option",{value:"1"},"UA",-1)),E=[P,T],G={key:1,class:"block-one"},z={key:0,class:"rus"},M=n(()=>t("h2",null,"Редактировать акции",-1)),X={class:"news"},$={class:"date flex mt-3"},q=n(()=>t("label",{for:"data"},"Дата публикации",-1)),H={class:"name flex mt-3"},J=n(()=>t("label",{for:"name"},"Название акции",-1)),K={class:"text flex mt-3"},Q=n(()=>t("label",{for:"text"},"Описание акции",-1)),W={class:"ava flex mt-3"},Y=n(()=>t("p",null,"Главная картинка",-1)),Z={class:"img"},tt=["src"],et={class:"add"},ot=n(()=>t("label",{for:"img-top-ua"},"Загрузить фото",-1)),st={class:"photo flex mt-3"},lt=n(()=>t("p",null,"Галерея",-1)),it={class:"gallery"},nt=["onClick"],dt=n(()=>t("span",null,"X",-1)),at=[dt],ct=["src"],rt={class:"add"},ut=n(()=>t("label",{for:"img-bottom"},"Загрузить фото",-1)),pt={class:"trailer flex mt-3"},_t=n(()=>t("label",{for:"trailer"},"Ссылка на видео",-1)),mt={class:"seo mt-5"},kt=n(()=>t("h3",null,"СЕО блок",-1)),ht={class:"block flex mt-3"},ft=n(()=>t("label",{for:"url-seo"},"URL",-1)),bt={class:"block flex mt-3"},gt=n(()=>t("label",{for:"title-seo"},"title",-1)),yt={class:"block flex mt-3"},vt=n(()=>t("label",{for:"keyword-seo"},"keyword",-1)),wt={class:"block flex mt-3"},xt=n(()=>t("label",{for:"description-seo"},"description",-1)),Ut={key:1,class:"rus"},Lt=n(()=>t("h2",null,"Редагувати акцію",-1)),Vt={class:"news"},At={class:"date flex mt-3"},Rt=n(()=>t("label",{for:"data"},"Дата стоврення",-1)),It={class:"name flex mt-3"},St=n(()=>t("label",{for:"name"},"Назва акції",-1)),Ct={class:"text flex mt-3"},jt=n(()=>t("label",{for:"text"},"Опис акції",-1)),Ot={class:"ava flex mt-3"},Dt=n(()=>t("p",null,"Головна картинка",-1)),Ft={class:"img"},Nt=["src"],Bt={class:"add"},Pt=n(()=>t("label",{for:"img-top-ua"},"Загрузити фото",-1)),Tt={class:"photo flex mt-3"},Et=n(()=>t("p",null,"Галерея",-1)),Gt={class:"gallery"},zt=["onClick"],Mt=n(()=>t("span",null,"X",-1)),Xt=[Mt],$t=["src"],qt={class:"add"},Ht=n(()=>t("label",{for:"img-bottom"},"Загрузити фото",-1)),Jt={class:"trailer flex mt-3"},Kt=n(()=>t("label",{for:"trailer"},"Посилання на відео",-1)),Qt={class:"seo mt-5"},Wt=n(()=>t("h3",null,"СЕО блок",-1)),Yt={class:"block flex mt-3"},Zt=n(()=>t("label",{for:"url-seo"},"URL",-1)),te={class:"block flex mt-3"},ee=n(()=>t("label",{for:"title-seo"},"title",-1)),oe={class:"block flex mt-3"},se=n(()=>t("label",{for:"keyword-seo"},"keyword",-1)),le={class:"block flex mt-3"},ie=n(()=>t("label",{for:"description-seo"},"description",-1)),ne={__name:"StockId",setup(k){const s=A(),x=R();let i=null;I(()=>{i=s.stock.findIndex(p=>p.nameStock===x.params.id)});function g(){s.deleteGallery=[],s.getStock()}function y(){s.removeNews=i,s.newNews(),window.scrollTo({top:0,behavior:"smooth"})}function v(p){s.deleteGallery.push(s.stock[i].gallery[p].name),s.stock[i].gallery.splice(p,1)}async function U(p){const l=p.target.files[0],c=new Image;await new Promise(o=>{c.onload=o,c.onerror=o,c.src=URL.createObjectURL(l)}),s.stock[i].ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:l,url:URL.createObjectURL(l)})}async function w(p){const l=p.target.files;for(let c=0;c<l.length;c++){const o=l[c],_=new Image;await new Promise(h=>{_.onload=h,_.onerror=h,_.src=URL.createObjectURL(o)}),_.width>=1e3&&_.height>=190?s.stock[i].gallery.push({id:s.stock[i].gallery.length,image:o,name:"gallery-"+Date.now(),url:URL.createObjectURL(o)}):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}async function L(p){const l=p.target.files[0],c=new Image;await new Promise(o=>{c.onload=o,c.onerror=o,c.src=URL.createObjectURL(l)}),s.stockUA[i].ava.splice(0,1,{id:0,name:"a-"+Date.now(),image:l,url:URL.createObjectURL(l)})}return(p,l)=>{const c=S("Loader");return r(),u(m,null,[e(s).loading?(r(),C(c,{key:0})):f("",!0),t("div",N,[t("p",B,j(e(s).language=="0"?"Язык":"Мова"),1),d(t("select",{"onUpdate:modelValue":l[0]||(l[0]=o=>e(s).language=o),name:"lang",id:""},E,512),[[O,e(s).language]])]),e(s).stock[e(i)]?(r(),u("div",G,[e(s).language=="0"?(r(),u("div",z,[M,t("div",X,[t("div",$,[q,d(t("input",{"onUpdate:modelValue":l[1]||(l[1]=o=>e(s).stock[e(i)].date=o),type:"date",id:"data"},null,512),[[a,e(s).stock[e(i)].date]])]),t("div",H,[J,d(t("input",{"onUpdate:modelValue":l[2]||(l[2]=o=>e(s).stock[e(i)].title=o),style:{width:"50%"},type:"text",id:"name",placeholder:"Название акции"},null,512),[[a,e(s).stock[e(i)].title]])]),t("div",K,[Q,d(t("textarea",{"onUpdate:modelValue":l[3]||(l[3]=o=>e(s).stock[e(i)].description=o),placeholder:"Описание акции",style:{width:"100%",height:"100px",resize:"none"},id:"text",cols:"30",rows:"10"},null,512),[[a,e(s).stock[e(i)].description]])]),t("div",W,[Y,(r(!0),u(m,null,b(e(s).stock[e(i)].ava,(o,_)=>(r(),u("div",Z,[t("img",{src:o.url,alt:""},null,8,tt)]))),256)),t("div",et,[t("input",{onChange:l[4]||(l[4]=o=>U(o)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),ot])]),t("div",st,[lt,(r(!0),u(m,null,b(e(s).stock[e(i)].gallery,(o,_)=>(r(),u("div",it,[t("div",{class:"close",onClick:h=>v(_)},at,8,nt),t("img",{src:o.url,alt:""},null,8,ct)]))),256)),t("div",rt,[t("input",{onChange:l[5]||(l[5]=o=>w(o)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),ut])]),t("div",pt,[_t,d(t("input",{"onUpdate:modelValue":l[6]||(l[6]=o=>e(s).stock[e(i)].trailer=o),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на видео"},null,512),[[a,e(s).stock[e(i)].trailer]])]),t("div",mt,[kt,t("div",ht,[ft,d(t("input",{style:{width:"50%"},"onUpdate:modelValue":l[7]||(l[7]=o=>e(s).stock[e(i)].seo.url=o),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[a,e(s).stock[e(i)].seo.url]])]),t("div",bt,[gt,d(t("input",{style:{width:"50%"},"onUpdate:modelValue":l[8]||(l[8]=o=>e(s).stock[e(i)].seo.title=o),id:"title-seo",type:"text",placeholder:"title"},null,512),[[a,e(s).stock[e(i)].seo.title]])]),t("div",yt,[vt,d(t("input",{style:{width:"50%"},"onUpdate:modelValue":l[9]||(l[9]=o=>e(s).stock[e(i)].seo.keyword=o),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[a,e(s).stock[e(i)].seo.keyword]])]),t("div",wt,[xt,d(t("input",{style:{width:"50%"},"onUpdate:modelValue":l[10]||(l[10]=o=>e(s).stock[e(i)].seo.description=o),id:"description-seo",type:"text",placeholder:"description"},null,512),[[a,e(s).stock[e(i)].seo.description]])])]),t("div",{class:"block-btn mt-5"},[t("button",{onClick:y,class:"btn btn-block btn-success"},"Редактировать акции"),t("button",{onClick:g,class:"btn btn-block btn-success"},"Вернуть назад")])])])):f("",!0),e(s).language=="1"?(r(),u("div",Ut,[Lt,t("div",Vt,[t("div",At,[Rt,d(t("input",{"onUpdate:modelValue":l[11]||(l[11]=o=>e(s).stock[e(i)].date=o),type:"date",id:"data"},null,512),[[a,e(s).stock[e(i)].date]])]),t("div",It,[St,d(t("input",{"onUpdate:modelValue":l[12]||(l[12]=o=>e(s).stockUA[e(i)].title=o),style:{width:"50%"},type:"text",id:"name",placeholder:"Назва акції"},null,512),[[a,e(s).stockUA[e(i)].title]])]),t("div",Ct,[jt,d(t("textarea",{"onUpdate:modelValue":l[13]||(l[13]=o=>e(s).stockUA[e(i)].description=o),placeholder:"Опис акції",style:{width:"100%",height:"100px",resize:"none"},id:"text",cols:"30",rows:"10"},null,512),[[a,e(s).stockUA[e(i)].description]])]),t("div",Ot,[Dt,(r(!0),u(m,null,b(e(s).stockUA[e(i)].ava,(o,_)=>(r(),u("div",Ft,[t("img",{src:o.url,alt:""},null,8,Nt)]))),256)),t("div",Bt,[t("input",{onChange:l[14]||(l[14]=o=>L(o)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),Pt])]),t("div",Tt,[Et,(r(!0),u(m,null,b(e(s).stock[e(i)].gallery,(o,_)=>(r(),u("div",Gt,[t("div",{class:"close",onClick:h=>v(_)},Xt,8,zt),t("img",{src:o.url,alt:""},null,8,$t)]))),256)),t("div",qt,[t("input",{onChange:l[15]||(l[15]=o=>w(o)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),Ht])]),t("div",Jt,[Kt,d(t("input",{"onUpdate:modelValue":l[16]||(l[16]=o=>e(s).stockUA[e(i)].trailer=o),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на видео"},null,512),[[a,e(s).stockUA[e(i)].trailer]])]),t("div",Qt,[Wt,t("div",Yt,[Zt,d(t("input",{style:{width:"50%"},"onUpdate:modelValue":l[17]||(l[17]=o=>e(s).stockUA[e(i)].seo.url=o),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[a,e(s).stockUA[e(i)].seo.url]])]),t("div",te,[ee,d(t("input",{style:{width:"50%"},"onUpdate:modelValue":l[18]||(l[18]=o=>e(s).stockUA[e(i)].seo.title=o),id:"title-seo",type:"text",placeholder:"title"},null,512),[[a,e(s).stockUA[e(i)].seo.title]])]),t("div",oe,[se,d(t("input",{style:{width:"50%"},"onUpdate:modelValue":l[19]||(l[19]=o=>e(s).stockUA[e(i)].seo.keyword=o),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[a,e(s).stockUA[e(i)].seo.keyword]])]),t("div",le,[ie,d(t("input",{style:{width:"50%"},"onUpdate:modelValue":l[20]||(l[20]=o=>e(s).stockUA[e(i)].seo.description=o),id:"description-seo",type:"text",placeholder:"description"},null,512),[[a,e(s).stockUA[e(i)].seo.description]])])]),t("div",{class:"block-btn mt-5"},[t("button",{onClick:y,class:"btn btn-block btn-success"},"Редагувати акцію"),t("button",{onClick:g,class:"btn btn-block btn-success"},"Вернуть назад")])])])):f("",!0)])):f("",!0)],64)}}},ae=V(ne,[["__scopeId","data-v-cb156e0b"]]);export{ae as default};

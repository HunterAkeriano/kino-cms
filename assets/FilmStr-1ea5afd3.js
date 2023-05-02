import{_ as V,N as A,f as L,v as R,r as D,o as c,d as p,u as s,i as F,l as y,e,E as n,K as C,O as U,G as d,F as f,h as g,P as u,t as S,p as M,m as O}from"./index-cdf02b7c.js";const i=m=>(M("data-v-b1317417"),m=m(),O(),m),j={class:"content"},B={class:"language",style:{display:"flex","align-items":"center",gap:"20px"}},P=i(()=>e("p",{style:{margin:"0"}},"Язык",-1)),N=i(()=>e("option",{value:"0"},"Ru",-1)),T=i(()=>e("option",{value:"1"},"UA",-1)),z=[N,T],E={class:"rus"},G=i(()=>e("h2",null,"Создание фильма",-1)),X={class:"block-info mt-5"},$={class:"title flex mt-3"},K=i(()=>e("label",{for:"title"},"Название фильма",-1)),q={class:"desctiption flex mt-3"},H=i(()=>e("label",{for:"desctiption"},"Описание",-1)),J={class:"ava flex mt-3"},Q=i(()=>e("p",null,"Главная картинка",-1)),W={class:"img"},Y=["src"],Z={class:"add"},ee=i(()=>e("label",{for:"img-top"},"Загрузить фото",-1)),te={class:"photo flex mt-3"},le=i(()=>e("p",null,"Галерея",-1)),oe={class:"gallery"},se=["onClick"],ie=i(()=>e("span",null,"X",-1)),ne=[ie],de=["src"],ae={class:"add"},ce=i(()=>e("label",{for:"img-bottom"},"Загрузить фото",-1)),re={class:"trailer flex mt-3"},pe=i(()=>e("label",{for:"trailer"},"Ссылка на трейлер",-1)),_e={class:"type flex mt-3"},ue=i(()=>e("p",null,"Тип фильма",-1)),me={class:"one"},he=i(()=>e("label",{for:"2D"},"2D",-1)),fe={class:"one"},ge=i(()=>e("label",{for:"3D"},"3D",-1)),ye={class:"one"},be=i(()=>e("label",{for:"IMax"},"IMax",-1)),ve={class:"seo mt-5"},xe=i(()=>e("h3",null,"СЕО блок",-1)),Ue={class:"block flex mt-3"},we=i(()=>e("label",{for:"url-seo"},"URL",-1)),ke={class:"block flex mt-3"},Ie=i(()=>e("label",{for:"title-seo"},"title",-1)),Ve={class:"block flex mt-3"},Ae=i(()=>e("label",{for:"keyword-seo"},"keyword",-1)),Le={class:"block flex mt-3"},Re=i(()=>e("label",{for:"description-seo"},"description",-1)),De={class:"block-btn mt-5"},Fe={key:0,style:{color:"red"}},Ce={class:"rus"},Se=i(()=>e("h2",null,"Створення фільму",-1)),Me={class:"block-info mt-5"},Oe={class:"title flex mt-3"},je=i(()=>e("label",{for:"title"},"Назва фільму",-1)),Be={class:"desctiption flex mt-3"},Pe=i(()=>e("label",{for:"desctiption"},"Опис фільму",-1)),Ne={class:"ava flex mt-3"},Te=i(()=>e("p",null,"Головна картинка",-1)),ze={class:"img"},Ee=["src"],Ge={class:"add"},Xe=i(()=>e("label",{for:"img-top-ua"},"Загрузити фото",-1)),$e={class:"photo flex mt-3"},Ke=i(()=>e("p",null,"Галерея",-1)),qe={class:"gallery"},He=["onClick"],Je=i(()=>e("span",null,"X",-1)),Qe=[Je],We=["src"],Ye={class:"add"},Ze=i(()=>e("label",{for:"img-bottom"},"Загрузити фото",-1)),et={class:"trailer flex mt-3"},tt=i(()=>e("label",{for:"trailer"},"Посилання на трейлер",-1)),lt={class:"type flex mt-3"},ot=i(()=>e("p",null,"Тип фільму",-1)),st={class:"one"},it=i(()=>e("label",{for:"2D"},"2D",-1)),nt={class:"one"},dt=i(()=>e("label",{for:"3D"},"3D",-1)),at={class:"one"},ct=i(()=>e("label",{for:"IMax"},"IMax",-1)),rt={class:"seo mt-5"},pt=i(()=>e("h3",null,"СЕО блок",-1)),_t={class:"block flex mt-3"},ut=i(()=>e("label",{for:"url-seo"},"URL",-1)),mt={class:"block flex mt-3"},ht=i(()=>e("label",{for:"title-seo"},"title",-1)),ft={class:"block flex mt-3"},gt=i(()=>e("label",{for:"keyword-seo"},"keyword",-1)),yt={class:"block flex mt-3"},bt=i(()=>e("label",{for:"description-seo"},"description",-1)),vt={class:"block-btn mt-5"},xt={key:0,style:{color:"red"}},Ut={__name:"FilmStr",setup(m){const w=A(),t=L();function b(_){t.gallery.splice(_,1)}function v(){t.title.length<1||t.description.length<1||t.ava.length<1||t.gallery.length<1||t.titleUA.length<1||t.descriptionUA.length<1||t.avaUA.length<1?t.loaderFilms=!0:(t.createFilm(),t.loaderFilms=!1)}R(()=>t.createFilms,_=>{_&&(w.push("/admin/films"),t.createFilms=!1)});async function k(_){const o=_.target.files[0],a=new Image;await new Promise(l=>{a.onload=l,a.onerror=l,a.src=URL.createObjectURL(o)}),t.ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:o,url:URL.createObjectURL(o)})}async function I(_){const o=_.target.files[0],a=new Image;await new Promise(l=>{a.onload=l,a.onerror=l,a.src=URL.createObjectURL(o)}),t.avaUA.splice(0,1,{id:0,name:"a-"+Date.now(),image:o,url:URL.createObjectURL(o)})}async function x(_){const o=_.target.files;for(let a=0;a<o.length;a++){const l=o[a],r=new Image;await new Promise(h=>{r.onload=h,r.onerror=h,r.src=URL.createObjectURL(l)}),r.width>=1e3&&r.height>=190?t.gallery.push({id:t.gallery.length,image:l,name:"gallery-"+Date.now(),url:URL.createObjectURL(l)}):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}return(_,o)=>{const a=D("Loader");return c(),p("div",j,[s(t).loading?(c(),F(a,{key:0})):y("",!0),e("div",B,[P,n(e("select",{"onUpdate:modelValue":o[0]||(o[0]=l=>s(t).language=l),name:"laguage",id:""},z,512),[[C,s(t).language]])]),n(e("div",E,[G,e("div",X,[e("div",$,[K,n(e("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>s(t).title=l),style:{width:"50%"},id:"title",type:"text",placeholder:"Название фильма"},null,512),[[d,s(t).title]])]),e("div",q,[H,n(e("textarea",{"onUpdate:modelValue":o[2]||(o[2]=l=>s(t).description=l),placeholder:"Описание фильма",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[d,s(t).description]])]),e("div",J,[Q,(c(!0),p(f,null,g(s(t).ava,(l,r)=>(c(),p("div",W,[e("img",{src:l.url,alt:""},null,8,Y)]))),256)),e("div",Z,[e("input",{onChange:o[3]||(o[3]=l=>k(l)),class:"img-top-input",id:"img-top",ref:"fileInput",type:"file",accept:"image/* "},null,544),ee])]),e("div",te,[le,(c(!0),p(f,null,g(s(t).gallery,(l,r)=>(c(),p("div",oe,[e("div",{class:"close",onClick:h=>b(r)},ne,8,se),e("img",{src:l.url,alt:""},null,8,de)]))),256)),e("div",ae,[e("input",{onChange:o[4]||(o[4]=l=>x(l)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),ce])]),e("div",re,[pe,n(e("input",{"onUpdate:modelValue":o[5]||(o[5]=l=>s(t).trailer=l),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на трейлер"},null,512),[[d,s(t).trailer]])]),e("div",_e,[ue,e("div",me,[he,n(e("input",{"onUpdate:modelValue":o[6]||(o[6]=l=>s(t).selectedItems.filmtwo=l),id:"2D",type:"checkbox"},null,512),[[u,s(t).selectedItems.filmtwo]])]),e("div",fe,[ge,n(e("input",{"onUpdate:modelValue":o[7]||(o[7]=l=>s(t).selectedItems.filmthre=l),id:"3D",type:"checkbox"},null,512),[[u,s(t).selectedItems.filmthre]])]),e("div",ye,[be,n(e("input",{"onUpdate:modelValue":o[8]||(o[8]=l=>s(t).selectedItems.imax=l),id:"IMax",type:"checkbox"},null,512),[[u,s(t).selectedItems.imax]])])])]),e("div",ve,[xe,e("div",Ue,[we,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[9]||(o[9]=l=>s(t).seo.url=l),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[d,s(t).seo.url]])]),e("div",ke,[Ie,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[10]||(o[10]=l=>s(t).seo.title=l),id:"title-seo",type:"text",placeholder:"title"},null,512),[[d,s(t).seo.title]])]),e("div",Ve,[Ae,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[11]||(o[11]=l=>s(t).seo.keyword=l),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[d,s(t).seo.keyword]])]),e("div",Le,[Re,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[12]||(o[12]=l=>s(t).seo.description=l),id:"description-seo",type:"text",placeholder:"description"},null,512),[[d,s(t).seo.description]])])]),e("div",De,[e("button",{onClick:v,class:"btn btn-block btn-success"},"Создать фильм"),s(t).loaderFilms?(c(),p("p",Fe,"Вы не ввели информацию или не загрузили фото")):y("",!0)])],512),[[U,s(t).language=="0"]]),n(e("div",Ce,[Se,e("div",Me,[e("div",Oe,[je,n(e("input",{"onUpdate:modelValue":o[13]||(o[13]=l=>s(t).titleUA=l),style:{width:"50%"},id:"title",type:"text",placeholder:"Назва фільму"},null,512),[[d,s(t).titleUA]])]),e("div",Be,[Pe,n(e("textarea",{"onUpdate:modelValue":o[14]||(o[14]=l=>s(t).descriptionUA=l),placeholder:"Опис фільму",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[d,s(t).descriptionUA]])]),e("div",Ne,[Te,(c(!0),p(f,null,g(s(t).avaUA,(l,r)=>(c(),p("div",ze,[e("img",{src:l.url,alt:""},null,8,Ee)]))),256)),e("div",Ge,[e("input",{onChange:o[15]||(o[15]=l=>I(l)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),Xe])]),e("div",$e,[Ke,(c(!0),p(f,null,g(s(t).gallery,(l,r)=>(c(),p("div",qe,[e("div",{class:"close",onClick:h=>b(r)},Qe,8,He),e("img",{src:l.url,alt:""},null,8,We)]))),256)),e("div",Ye,[e("input",{onChange:o[16]||(o[16]=l=>x(l)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),Ze])]),e("div",et,[tt,n(e("input",{"onUpdate:modelValue":o[17]||(o[17]=l=>s(t).trailerUA=l),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на трейлер"},null,512),[[d,s(t).trailerUA]])]),e("div",lt,[ot,e("div",st,[it,n(e("input",{"onUpdate:modelValue":o[18]||(o[18]=l=>s(t).selectedItems.filmtwo=l),id:"2D",type:"checkbox"},null,512),[[u,s(t).selectedItems.filmtwo]])]),e("div",nt,[dt,n(e("input",{"onUpdate:modelValue":o[19]||(o[19]=l=>s(t).selectedItems.filmthre=l),id:"3D",type:"checkbox"},null,512),[[u,s(t).selectedItems.filmthre]])]),e("div",at,[ct,n(e("input",{"onUpdate:modelValue":o[20]||(o[20]=l=>s(t).selectedItems.imax=l),id:"IMax",type:"checkbox"},null,512),[[u,s(t).selectedItems.imax]])])])]),e("div",rt,[pt,e("div",_t,[ut,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[21]||(o[21]=l=>s(t).seoUA.url=l),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[d,s(t).seoUA.url]])]),e("div",mt,[ht,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[22]||(o[22]=l=>s(t).seoUA.title=l),id:"title-seo",type:"text",placeholder:"title"},null,512),[[d,s(t).seoUA.title]])]),e("div",ft,[gt,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[23]||(o[23]=l=>s(t).seoUA.keyword=l),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[d,s(t).seoUA.keyword]])]),e("div",yt,[bt,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[24]||(o[24]=l=>s(t).seoUA.description=l),id:"description-seo",type:"text",placeholder:"description"},null,512),[[d,s(t).seoUA.description]])])]),e("div",vt,[e("button",{onClick:v,class:"btn btn-block btn-success"},"Создать фильм"),s(t).loaderFilms?(c(),p("p",xt,"Вы не ввели информацию или не загрузили фото")):y("",!0)])],512),[[U,s(t).language=="1"]]),e("p",null,S(),1)])}}},kt=V(Ut,[["__scopeId","data-v-b1317417"]]);export{kt as default};

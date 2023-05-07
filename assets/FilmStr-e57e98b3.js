import{_ as L,S as D,f as R,D as F,w as S,r as C,o as c,d as p,u as s,j as M,n as y,e,t as U,s as n,P as j,T as w,v as d,F as f,i as g,U as _,p as O,q as B}from"./index-550377fa.js";const i=m=>(O("data-v-7e4cae06"),m=m(),B(),m),P={class:"content"},T={class:"language",style:{display:"flex","align-items":"center",gap:"20px"}},z={style:{margin:"0"}},N=i(()=>e("option",{value:"0"},"Ru",-1)),X=i(()=>e("option",{value:"1"},"UA",-1)),$=[N,X],q={class:"rus"},E=i(()=>e("h2",null,"Создание фильма",-1)),G={class:"block-info mt-5"},H={class:"title flex mt-3"},J=i(()=>e("label",{for:"title"},"Название фильма",-1)),K={class:"desctiption flex mt-3"},Q=i(()=>e("label",{for:"desctiption"},"Описание",-1)),W={class:"ava flex mt-3"},Y=i(()=>e("p",null,"Главная картинка",-1)),Z={class:"img"},ee=["src"],te={class:"add"},le=i(()=>e("label",{for:"img-top"},"Загрузить фото",-1)),oe={class:"photo flex mt-3"},se=i(()=>e("p",null,"Галерея",-1)),ie={class:"gallery"},ne=["onClick"],de=i(()=>e("span",null,"X",-1)),ae=[de],ce=["src"],re={class:"add"},pe=i(()=>e("label",{for:"img-bottom"},"Загрузить фото",-1)),ue={class:"trailer flex mt-3"},_e=i(()=>e("label",{for:"trailer"},"Ссылка на трейлер",-1)),me={class:"type flex mt-3"},he=i(()=>e("p",null,"Тип фильма",-1)),fe={class:"one"},ge=i(()=>e("label",{for:"2D"},"2D",-1)),ye={class:"one"},ve=i(()=>e("label",{for:"3D"},"3D",-1)),be={class:"one"},xe=i(()=>e("label",{for:"IMax"},"IMax",-1)),Ue={class:"seo mt-5"},we=i(()=>e("h3",null,"СЕО блок",-1)),ke={class:"block flex mt-3"},Ie=i(()=>e("label",{for:"url-seo"},"URL",-1)),Ve={class:"block flex mt-3"},Ae=i(()=>e("label",{for:"title-seo"},"title",-1)),Le={class:"block flex mt-3"},De=i(()=>e("label",{for:"keyword-seo"},"keyword",-1)),Re={class:"block flex mt-3"},Fe=i(()=>e("label",{for:"description-seo"},"description",-1)),Se={class:"block-btn mt-5"},Ce={key:0,style:{color:"red"}},Me={class:"rus"},je=i(()=>e("h2",null,"Створення фільму",-1)),Oe={class:"block-info mt-5"},Be={class:"title flex mt-3"},Pe=i(()=>e("label",{for:"title"},"Назва фільму",-1)),Te={class:"desctiption flex mt-3"},ze=i(()=>e("label",{for:"desctiption"},"Опис фільму",-1)),Ne={class:"ava flex mt-3"},Xe=i(()=>e("p",null,"Головна картинка",-1)),$e={class:"img"},qe=["src"],Ee={class:"add"},Ge=i(()=>e("label",{for:"img-top-ua"},"Загрузити фото",-1)),He={class:"photo flex mt-3"},Je=i(()=>e("p",null,"Галерея",-1)),Ke={class:"gallery"},Qe=["onClick"],We=i(()=>e("span",null,"X",-1)),Ye=[We],Ze=["src"],et={class:"add"},tt=i(()=>e("label",{for:"img-bottom"},"Загрузити фото",-1)),lt={class:"trailer flex mt-3"},ot=i(()=>e("label",{for:"trailer"},"Посилання на трейлер",-1)),st={class:"type flex mt-3"},it=i(()=>e("p",null,"Тип фільму",-1)),nt={class:"one"},dt=i(()=>e("label",{for:"2D"},"2D",-1)),at={class:"one"},ct=i(()=>e("label",{for:"3D"},"3D",-1)),rt={class:"one"},pt=i(()=>e("label",{for:"IMax"},"IMax",-1)),ut={class:"seo mt-5"},_t=i(()=>e("h3",null,"СЕО блок",-1)),mt={class:"block flex mt-3"},ht=i(()=>e("label",{for:"url-seo"},"URL",-1)),ft={class:"block flex mt-3"},gt=i(()=>e("label",{for:"title-seo"},"title",-1)),yt={class:"block flex mt-3"},vt=i(()=>e("label",{for:"keyword-seo"},"keyword",-1)),bt={class:"block flex mt-3"},xt=i(()=>e("label",{for:"description-seo"},"description",-1)),Ut={class:"block-btn mt-5"},wt={key:0,style:{color:"red"}},kt={__name:"FilmStr",setup(m){const k=D(),t=R();function v(u){t.gallery.splice(u,1)}function b(){t.title.length<1||t.description.length<1||t.ava.length<1||t.gallery.length<1||t.titleUA.length<1||t.descriptionUA.length<1||t.avaUA.length<1?t.loaderFilms=!0:(t.createFilm(),t.loaderFilms=!1)}const I=F(()=>t.language=="0"?"Язык":"Мова");S(()=>t.createFilms,u=>{u&&(k.push("/admin/films"),t.createFilms=!1)});async function V(u){const o=u.target.files[0],a=new Image;await new Promise(l=>{a.onload=l,a.onerror=l,a.src=URL.createObjectURL(o)}),t.ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:o,url:URL.createObjectURL(o)})}async function A(u){const o=u.target.files[0],a=new Image;await new Promise(l=>{a.onload=l,a.onerror=l,a.src=URL.createObjectURL(o)}),t.avaUA.splice(0,1,{id:0,name:"a-"+Date.now(),image:o,url:URL.createObjectURL(o)})}async function x(u){const o=u.target.files;for(let a=0;a<o.length;a++){const l=o[a],r=new Image;await new Promise(h=>{r.onload=h,r.onerror=h,r.src=URL.createObjectURL(l)}),r.width>=1e3&&r.height>=190?t.gallery.push({id:t.gallery.length,image:l,name:"gallery-"+Date.now(),url:URL.createObjectURL(l)}):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}return(u,o)=>{const a=C("Loader");return c(),p("div",P,[s(t).loading?(c(),M(a,{key:0})):y("",!0),e("div",T,[e("p",z,U(s(I)),1),n(e("select",{"onUpdate:modelValue":o[0]||(o[0]=l=>s(t).language=l),name:"laguage",id:""},$,512),[[j,s(t).language]])]),n(e("div",q,[E,e("div",G,[e("div",H,[J,n(e("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>s(t).title=l),style:{width:"50%"},id:"title",type:"text",placeholder:"Название фильма"},null,512),[[d,s(t).title]])]),e("div",K,[Q,n(e("textarea",{"onUpdate:modelValue":o[2]||(o[2]=l=>s(t).description=l),placeholder:"Описание фильма",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[d,s(t).description]])]),e("div",W,[Y,(c(!0),p(f,null,g(s(t).ava,(l,r)=>(c(),p("div",Z,[e("img",{src:l.url,alt:""},null,8,ee)]))),256)),e("div",te,[e("input",{onChange:o[3]||(o[3]=l=>V(l)),class:"img-top-input",id:"img-top",ref:"fileInput",type:"file",accept:"image/* "},null,544),le])]),e("div",oe,[se,(c(!0),p(f,null,g(s(t).gallery,(l,r)=>(c(),p("div",ie,[e("div",{class:"close",onClick:h=>v(r)},ae,8,ne),e("img",{src:l.url,alt:""},null,8,ce)]))),256)),e("div",re,[e("input",{onChange:o[4]||(o[4]=l=>x(l)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),pe])]),e("div",ue,[_e,n(e("input",{"onUpdate:modelValue":o[5]||(o[5]=l=>s(t).trailer=l),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на трейлер"},null,512),[[d,s(t).trailer]])]),e("div",me,[he,e("div",fe,[ge,n(e("input",{"onUpdate:modelValue":o[6]||(o[6]=l=>s(t).selectedItems.filmtwo=l),id:"2D",type:"checkbox"},null,512),[[_,s(t).selectedItems.filmtwo]])]),e("div",ye,[ve,n(e("input",{"onUpdate:modelValue":o[7]||(o[7]=l=>s(t).selectedItems.filmthre=l),id:"3D",type:"checkbox"},null,512),[[_,s(t).selectedItems.filmthre]])]),e("div",be,[xe,n(e("input",{"onUpdate:modelValue":o[8]||(o[8]=l=>s(t).selectedItems.imax=l),id:"IMax",type:"checkbox"},null,512),[[_,s(t).selectedItems.imax]])])])]),e("div",Ue,[we,e("div",ke,[Ie,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[9]||(o[9]=l=>s(t).seo.url=l),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[d,s(t).seo.url]])]),e("div",Ve,[Ae,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[10]||(o[10]=l=>s(t).seo.title=l),id:"title-seo",type:"text",placeholder:"title"},null,512),[[d,s(t).seo.title]])]),e("div",Le,[De,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[11]||(o[11]=l=>s(t).seo.keyword=l),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[d,s(t).seo.keyword]])]),e("div",Re,[Fe,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[12]||(o[12]=l=>s(t).seo.description=l),id:"description-seo",type:"text",placeholder:"description"},null,512),[[d,s(t).seo.description]])])]),e("div",Se,[e("button",{onClick:b,class:"btn btn-block btn-success"},"Создать фильм"),s(t).loaderFilms?(c(),p("p",Ce,"Вы не ввели информацию или не загрузили фото")):y("",!0)])],512),[[w,s(t).language=="0"]]),n(e("div",Me,[je,e("div",Oe,[e("div",Be,[Pe,n(e("input",{"onUpdate:modelValue":o[13]||(o[13]=l=>s(t).titleUA=l),style:{width:"50%"},id:"title",type:"text",placeholder:"Назва фільму"},null,512),[[d,s(t).titleUA]])]),e("div",Te,[ze,n(e("textarea",{"onUpdate:modelValue":o[14]||(o[14]=l=>s(t).descriptionUA=l),placeholder:"Опис фільму",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[d,s(t).descriptionUA]])]),e("div",Ne,[Xe,(c(!0),p(f,null,g(s(t).avaUA,(l,r)=>(c(),p("div",$e,[e("img",{src:l.url,alt:""},null,8,qe)]))),256)),e("div",Ee,[e("input",{onChange:o[15]||(o[15]=l=>A(l)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),Ge])]),e("div",He,[Je,(c(!0),p(f,null,g(s(t).gallery,(l,r)=>(c(),p("div",Ke,[e("div",{class:"close",onClick:h=>v(r)},Ye,8,Qe),e("img",{src:l.url,alt:""},null,8,Ze)]))),256)),e("div",et,[e("input",{onChange:o[16]||(o[16]=l=>x(l)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),tt])]),e("div",lt,[ot,n(e("input",{"onUpdate:modelValue":o[17]||(o[17]=l=>s(t).trailerUA=l),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на трейлер"},null,512),[[d,s(t).trailerUA]])]),e("div",st,[it,e("div",nt,[dt,n(e("input",{"onUpdate:modelValue":o[18]||(o[18]=l=>s(t).selectedItems.filmtwo=l),id:"2D",type:"checkbox"},null,512),[[_,s(t).selectedItems.filmtwo]])]),e("div",at,[ct,n(e("input",{"onUpdate:modelValue":o[19]||(o[19]=l=>s(t).selectedItems.filmthre=l),id:"3D",type:"checkbox"},null,512),[[_,s(t).selectedItems.filmthre]])]),e("div",rt,[pt,n(e("input",{"onUpdate:modelValue":o[20]||(o[20]=l=>s(t).selectedItems.imax=l),id:"IMax",type:"checkbox"},null,512),[[_,s(t).selectedItems.imax]])])])]),e("div",ut,[_t,e("div",mt,[ht,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[21]||(o[21]=l=>s(t).seoUA.url=l),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[d,s(t).seoUA.url]])]),e("div",ft,[gt,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[22]||(o[22]=l=>s(t).seoUA.title=l),id:"title-seo",type:"text",placeholder:"title"},null,512),[[d,s(t).seoUA.title]])]),e("div",yt,[vt,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[23]||(o[23]=l=>s(t).seoUA.keyword=l),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[d,s(t).seoUA.keyword]])]),e("div",bt,[xt,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":o[24]||(o[24]=l=>s(t).seoUA.description=l),id:"description-seo",type:"text",placeholder:"description"},null,512),[[d,s(t).seoUA.description]])])]),e("div",Ut,[e("button",{onClick:b,class:"btn btn-block btn-success"},"Создать фильм"),s(t).loaderFilms?(c(),p("p",wt,"Вы не ввели информацию или не загрузили фото")):y("",!0)])],512),[[w,s(t).language=="1"]]),e("p",null,U(),1)])}}},Vt=L(kt,[["__scopeId","data-v-7e4cae06"]]);export{Vt as default};

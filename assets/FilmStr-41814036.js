import{_ as L,S as R,f as D,e as F,w as S,r as C,o as c,g as p,u as o,n as M,m as y,h as e,t as w,z as n,T as j,W as k,A as d,F as f,k as g,X as _,x as O,y as B}from"./index-9c2c99fe.js";const i=m=>(O("data-v-6f369248"),m=m(),B(),m),T={class:"content"},z={class:"language",style:{display:"flex","align-items":"center",gap:"20px"}},P={style:{margin:"0"}},X=i(()=>e("option",{value:"0"},"Ru",-1)),N=i(()=>e("option",{value:"1"},"UA",-1)),$=[X,N],E={class:"rus"},G=i(()=>e("h2",null,"Создание фильма",-1)),W={class:"block-info mt-5"},q={class:"title flex mt-3"},H=i(()=>e("label",{for:"title"},"Название фильма",-1)),J={class:"desctiption flex mt-3"},K=i(()=>e("label",{for:"desctiption"},"Описание",-1)),Q={class:"ava flex mt-3"},Y=i(()=>e("p",null,"Главная картинка",-1)),Z={class:"img"},ee=["src"],te={class:"add"},le=i(()=>e("label",{for:"img-top"},"Загрузить фото",-1)),se={class:"photo flex mt-3"},oe=i(()=>e("p",null,"Галерея",-1)),ie={class:"gallery"},ne=["onClick"],de=i(()=>e("span",null,"X",-1)),ae=[de],ce=["src"],re={class:"add"},pe=i(()=>e("label",{for:"img-bottom"},"Загрузить фото",-1)),ue={class:"trailer flex mt-3"},_e=i(()=>e("label",{for:"trailer"},"Ссылка на трейлер",-1)),me={class:"type flex mt-3"},he=i(()=>e("p",null,"Тип фильма",-1)),fe={class:"one"},ge=i(()=>e("label",{for:"2D"},"2D",-1)),ye={class:"one"},ve=i(()=>e("label",{for:"3D"},"3D",-1)),be={class:"one"},xe=i(()=>e("label",{for:"IMax"},"IMax",-1)),Ue={class:"seo mt-5"},we=i(()=>e("h3",null,"СЕО блок",-1)),ke={class:"block flex mt-3"},Ie=i(()=>e("label",{for:"url-seo"},"URL",-1)),Ve={class:"block flex mt-3"},Ae=i(()=>e("label",{for:"title-seo"},"title",-1)),Le={class:"block flex mt-3"},Re=i(()=>e("label",{for:"keyword-seo"},"keyword",-1)),De={class:"block flex mt-3"},Fe=i(()=>e("label",{for:"description-seo"},"description",-1)),Se={class:"block-btn mt-5"},Ce={key:0,style:{color:"red"}},Me={class:"rus"},je=i(()=>e("h2",null,"Створення фільму",-1)),Oe={class:"block-info mt-5"},Be={class:"title flex mt-3"},Te=i(()=>e("label",{for:"title"},"Назва фільму",-1)),ze={class:"desctiption flex mt-3"},Pe=i(()=>e("label",{for:"desctiption"},"Опис фільму",-1)),Xe={class:"ava flex mt-3"},Ne=i(()=>e("p",null,"Головна картинка",-1)),$e={class:"img"},Ee=["src"],Ge={class:"add"},We=i(()=>e("label",{for:"img-top-ua"},"Загрузити фото",-1)),qe={class:"photo flex mt-3"},He=i(()=>e("p",null,"Галерея",-1)),Je={class:"gallery"},Ke=["onClick"],Qe=i(()=>e("span",null,"X",-1)),Ye=[Qe],Ze=["src"],et={class:"add"},tt=i(()=>e("label",{for:"img-bottom"},"Загрузити фото",-1)),lt={class:"trailer flex mt-3"},st=i(()=>e("label",{for:"trailer"},"Посилання на трейлер",-1)),ot={class:"type flex mt-3"},it=i(()=>e("p",null,"Тип фільму",-1)),nt={class:"one"},dt=i(()=>e("label",{for:"2D"},"2D",-1)),at={class:"one"},ct=i(()=>e("label",{for:"3D"},"3D",-1)),rt={class:"one"},pt=i(()=>e("label",{for:"IMax"},"IMax",-1)),ut={class:"seo mt-5"},_t=i(()=>e("h3",null,"СЕО блок",-1)),mt={class:"block flex mt-3"},ht=i(()=>e("label",{for:"url-seo"},"URL",-1)),ft={class:"block flex mt-3"},gt=i(()=>e("label",{for:"title-seo"},"title",-1)),yt={class:"block flex mt-3"},vt=i(()=>e("label",{for:"keyword-seo"},"keyword",-1)),bt={class:"block flex mt-3"},xt=i(()=>e("label",{for:"description-seo"},"description",-1)),Ut={class:"block-btn mt-5"},wt={key:0,style:{color:"red"}},kt={__name:"FilmStr",setup(m){const v=R(),t=D();function b(u){t.gallery.splice(u,1)}async function x(){t.title.length<1||t.description.length<1||t.ava.length<1||t.gallery.length<1||t.titleUA.length<1||t.descriptionUA.length<1||t.avaUA.length<1?t.loaderFilms=!0:(await t.createFilm(),v.push("/admin/films"),t.loaderFilms=!1)}const I=F(()=>t.language=="0"?"Язык":"Мова");S(()=>t.createFilms,u=>{u&&(v.push("/admin/films"),t.createFilms=!1)});async function V(u){const s=u.target.files[0],a=new Image;await new Promise(l=>{a.onload=l,a.onerror=l,a.src=URL.createObjectURL(s)}),t.ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:s,url:URL.createObjectURL(s)})}async function A(u){const s=u.target.files[0],a=new Image;await new Promise(l=>{a.onload=l,a.onerror=l,a.src=URL.createObjectURL(s)}),t.avaUA.splice(0,1,{id:0,name:"a-"+Date.now(),image:s,url:URL.createObjectURL(s)})}async function U(u){const s=u.target.files;for(let a=0;a<s.length;a++){const l=s[a],r=new Image;await new Promise(h=>{r.onload=h,r.onerror=h,r.src=URL.createObjectURL(l)}),r.width>=1e3&&r.height>=190?t.gallery.push({id:t.gallery.length,image:l,name:"gallery-"+Date.now(),url:URL.createObjectURL(l)}):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}return(u,s)=>{const a=C("Loader");return c(),p("div",T,[o(t).loading?(c(),M(a,{key:0})):y("",!0),e("div",z,[e("p",P,w(o(I)),1),n(e("select",{"onUpdate:modelValue":s[0]||(s[0]=l=>o(t).language=l),name:"laguage",id:""},$,512),[[j,o(t).language]])]),n(e("div",E,[G,e("div",W,[e("div",q,[H,n(e("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>o(t).title=l),style:{width:"50%"},id:"title",type:"text",placeholder:"Название фильма"},null,512),[[d,o(t).title]])]),e("div",J,[K,n(e("textarea",{"onUpdate:modelValue":s[2]||(s[2]=l=>o(t).description=l),placeholder:"Описание фильма",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[d,o(t).description]])]),e("div",Q,[Y,(c(!0),p(f,null,g(o(t).ava,(l,r)=>(c(),p("div",Z,[e("img",{src:l.url,alt:""},null,8,ee)]))),256)),e("div",te,[e("input",{onChange:s[3]||(s[3]=l=>V(l)),class:"img-top-input",id:"img-top",ref:"fileInput",type:"file",accept:"image/* "},null,544),le])]),e("div",se,[oe,(c(!0),p(f,null,g(o(t).gallery,(l,r)=>(c(),p("div",ie,[e("div",{class:"close",onClick:h=>b(r)},ae,8,ne),e("img",{src:l.url,alt:""},null,8,ce)]))),256)),e("div",re,[e("input",{onChange:s[4]||(s[4]=l=>U(l)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),pe])]),e("div",ue,[_e,n(e("input",{"onUpdate:modelValue":s[5]||(s[5]=l=>o(t).trailer=l),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на трейлер"},null,512),[[d,o(t).trailer]])]),e("div",me,[he,e("div",fe,[ge,n(e("input",{"onUpdate:modelValue":s[6]||(s[6]=l=>o(t).selectedItems.filmtwo=l),id:"2D",type:"checkbox"},null,512),[[_,o(t).selectedItems.filmtwo]])]),e("div",ye,[ve,n(e("input",{"onUpdate:modelValue":s[7]||(s[7]=l=>o(t).selectedItems.filmthre=l),id:"3D",type:"checkbox"},null,512),[[_,o(t).selectedItems.filmthre]])]),e("div",be,[xe,n(e("input",{"onUpdate:modelValue":s[8]||(s[8]=l=>o(t).selectedItems.imax=l),id:"IMax",type:"checkbox"},null,512),[[_,o(t).selectedItems.imax]])])])]),e("div",Ue,[we,e("div",ke,[Ie,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[9]||(s[9]=l=>o(t).seo.url=l),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[d,o(t).seo.url]])]),e("div",Ve,[Ae,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[10]||(s[10]=l=>o(t).seo.title=l),id:"title-seo",type:"text",placeholder:"title"},null,512),[[d,o(t).seo.title]])]),e("div",Le,[Re,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[11]||(s[11]=l=>o(t).seo.keyword=l),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[d,o(t).seo.keyword]])]),e("div",De,[Fe,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[12]||(s[12]=l=>o(t).seo.description=l),id:"description-seo",type:"text",placeholder:"description"},null,512),[[d,o(t).seo.description]])])]),e("div",Se,[e("button",{onClick:x,class:"btn btn-block btn-success"},"Создать фильм"),o(t).loaderFilms?(c(),p("p",Ce,"Вы не ввели информацию или не загрузили фото")):y("",!0)])],512),[[k,o(t).language=="0"]]),n(e("div",Me,[je,e("div",Oe,[e("div",Be,[Te,n(e("input",{"onUpdate:modelValue":s[13]||(s[13]=l=>o(t).titleUA=l),style:{width:"50%"},id:"title",type:"text",placeholder:"Назва фільму"},null,512),[[d,o(t).titleUA]])]),e("div",ze,[Pe,n(e("textarea",{"onUpdate:modelValue":s[14]||(s[14]=l=>o(t).descriptionUA=l),placeholder:"Опис фільму",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[d,o(t).descriptionUA]])]),e("div",Xe,[Ne,(c(!0),p(f,null,g(o(t).avaUA,(l,r)=>(c(),p("div",$e,[e("img",{src:l.url,alt:""},null,8,Ee)]))),256)),e("div",Ge,[e("input",{onChange:s[15]||(s[15]=l=>A(l)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),We])]),e("div",qe,[He,(c(!0),p(f,null,g(o(t).gallery,(l,r)=>(c(),p("div",Je,[e("div",{class:"close",onClick:h=>b(r)},Ye,8,Ke),e("img",{src:l.url,alt:""},null,8,Ze)]))),256)),e("div",et,[e("input",{onChange:s[16]||(s[16]=l=>U(l)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),tt])]),e("div",lt,[st,n(e("input",{"onUpdate:modelValue":s[17]||(s[17]=l=>o(t).trailerUA=l),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на трейлер"},null,512),[[d,o(t).trailerUA]])]),e("div",ot,[it,e("div",nt,[dt,n(e("input",{"onUpdate:modelValue":s[18]||(s[18]=l=>o(t).selectedItems.filmtwo=l),id:"2D",type:"checkbox"},null,512),[[_,o(t).selectedItems.filmtwo]])]),e("div",at,[ct,n(e("input",{"onUpdate:modelValue":s[19]||(s[19]=l=>o(t).selectedItems.filmthre=l),id:"3D",type:"checkbox"},null,512),[[_,o(t).selectedItems.filmthre]])]),e("div",rt,[pt,n(e("input",{"onUpdate:modelValue":s[20]||(s[20]=l=>o(t).selectedItems.imax=l),id:"IMax",type:"checkbox"},null,512),[[_,o(t).selectedItems.imax]])])])]),e("div",ut,[_t,e("div",mt,[ht,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[21]||(s[21]=l=>o(t).seoUA.url=l),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[d,o(t).seoUA.url]])]),e("div",ft,[gt,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[22]||(s[22]=l=>o(t).seoUA.title=l),id:"title-seo",type:"text",placeholder:"title"},null,512),[[d,o(t).seoUA.title]])]),e("div",yt,[vt,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[23]||(s[23]=l=>o(t).seoUA.keyword=l),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[d,o(t).seoUA.keyword]])]),e("div",bt,[xt,n(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[24]||(s[24]=l=>o(t).seoUA.description=l),id:"description-seo",type:"text",placeholder:"description"},null,512),[[d,o(t).seoUA.description]])])]),e("div",Ut,[e("button",{onClick:x,class:"btn btn-block btn-success"},"Создать фильм"),o(t).loaderFilms?(c(),p("p",wt,"Вы не ввели информацию или не загрузили фото")):y("",!0)])],512),[[k,o(t).language=="1"]]),e("p",null,w(),1)])}}},Vt=L(kt,[["__scopeId","data-v-6f369248"]]);export{Vt as default};

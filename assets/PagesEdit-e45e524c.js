import{_ as V,T as A,k as R,m as C,r as I,o as p,d as c,u as t,j as S,n as f,e,t as P,s as a,N as j,v as d,F as g,i as y,p as N,q as O}from"./index-52f8486c.js";const n=m=>(N("data-v-6ca822d3"),m=m(),O(),m),D={class:"flex"},E={style:{margin:"0"}},F=n(()=>e("option",{value:"0"},"RUS",-1)),T=n(()=>e("option",{value:"1"},"UA",-1)),B=[F,T],G={key:1,class:"block-one"},z={key:0,class:"rus"},M=n(()=>e("h2",null,"Редактировать страницу",-1)),X={class:"news"},$={class:"date flex mt-3"},q=n(()=>e("label",{for:"data"},"Дата публикации",-1)),H={class:"name flex mt-3"},J=n(()=>e("label",{for:"name"},"Название страницы",-1)),K={class:"text flex mt-3"},Q=n(()=>e("label",{for:"text"},"Описание страницы",-1)),W={class:"ava flex mt-3"},Y=n(()=>e("p",null,"Главная картинка",-1)),Z={style:{width:"500px",height:"300px"},class:"img"},ee=["src"],te={class:"add"},se=n(()=>e("label",{for:"img-top-ua"},"Загрузить фото",-1)),oe={class:"photo flex mt-3"},le=n(()=>e("p",null,"Галерея",-1)),ie={class:"gallery"},ne=["onClick"],ae=n(()=>e("span",null,"X",-1)),de=[ae],re=["src"],pe={class:"add"},ce=n(()=>e("label",{for:"img-bottom"},"Загрузить фото",-1)),ue={class:"trailer flex mt-3"},_e=n(()=>e("label",{for:"trailer"},"Ссылка на видео",-1)),ge={class:"seo mt-5"},me=n(()=>e("h3",null,"СЕО блок",-1)),he={class:"block flex mt-3"},fe=n(()=>e("label",{for:"url-seo"},"URL",-1)),ye={class:"block flex mt-3"},be=n(()=>e("label",{for:"title-seo"},"title",-1)),ve={class:"block flex mt-3"},xe=n(()=>e("label",{for:"keyword-seo"},"keyword",-1)),we={class:"block flex mt-3"},Ue=n(()=>e("label",{for:"description-seo"},"description",-1)),ke={key:1,class:"rus"},Le=n(()=>e("h2",null,"Редагувати сторінку",-1)),Ve={class:"news"},Ae={class:"date flex mt-3"},Re=n(()=>e("label",{for:"data"},"Дата стоврення",-1)),Ce={class:"name flex mt-3"},Ie=n(()=>e("label",{for:"name"},"Назва сторінки",-1)),Se={class:"text flex mt-3"},Pe=n(()=>e("label",{for:"text"},"Опис сторінки",-1)),je={class:"ava flex mt-3"},Ne=n(()=>e("p",null,"Головна картинка",-1)),Oe={style:{width:"500px",height:"300px"},class:"img"},De=["src"],Ee={class:"add"},Fe=n(()=>e("label",{for:"img-top-ua"},"Загрузити фото",-1)),Te={class:"photo flex mt-3"},Be=n(()=>e("p",null,"Галерея",-1)),Ge={class:"gallery"},ze=["onClick"],Me=n(()=>e("span",null,"X",-1)),Xe=[Me],$e=["src"],qe={class:"add"},He=n(()=>e("label",{for:"img-bottom"},"Загрузити фото",-1)),Je={class:"trailer flex mt-3"},Ke=n(()=>e("label",{for:"trailer"},"Посилання на відео",-1)),Qe={class:"seo mt-5"},We=n(()=>e("h3",null,"СЕО блок",-1)),Ye={class:"block flex mt-3"},Ze=n(()=>e("label",{for:"url-seo"},"URL",-1)),et={class:"block flex mt-3"},tt=n(()=>e("label",{for:"title-seo"},"title",-1)),st={class:"block flex mt-3"},ot=n(()=>e("label",{for:"keyword-seo"},"keyword",-1)),lt={class:"block flex mt-3"},it=n(()=>e("label",{for:"description-seo"},"description",-1)),nt={__name:"PagesEdit",setup(m){const o=A(),U=R();let i=null;C(()=>{i=o.pages.findIndex(u=>u.namePages===U.params.id)});function b(){o.deleteGallery=[],o.getPages()}function v(){o.removeNews=i,o.newNews(),window.scrollTo({top:0,behavior:"smooth"})}function x(u){o.deleteGallery.push(o.pages[i].gallery[u].name),o.pages[i].gallery.splice(u,1)}async function k(u){const l=u.target.files[0],r=new Image;await new Promise(s=>{r.onload=s,r.onerror=s,r.src=URL.createObjectURL(l)}),o.pages[i].ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:l,url:URL.createObjectURL(l)})}async function w(u){const l=u.target.files;for(let r=0;r<l.length;r++){const s=l[r],_=new Image;await new Promise(h=>{_.onload=h,_.onerror=h,_.src=URL.createObjectURL(s)}),_.width>=1e3&&_.height>=190?o.pages[i].gallery.push({id:o.pages[i].gallery.length,image:s,name:"gallery-"+Date.now(),url:URL.createObjectURL(s)}):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}async function L(u){const l=u.target.files[0],r=new Image;await new Promise(s=>{r.onload=s,r.onerror=s,r.src=URL.createObjectURL(l)}),o.pagesUA[i].ava.splice(0,1,{id:0,name:"a-"+Date.now(),image:l,url:URL.createObjectURL(l)})}return(u,l)=>{const r=I("Loader");return p(),c(g,null,[t(o).loading?(p(),S(r,{key:0})):f("",!0),e("div",D,[e("p",E,P(t(o).language=="0"?"Язык":"Мова"),1),a(e("select",{"onUpdate:modelValue":l[0]||(l[0]=s=>t(o).language=s),name:"lang",id:""},B,512),[[j,t(o).language]])]),t(o).pages[t(i)]?(p(),c("div",G,[t(o).language=="0"?(p(),c("div",z,[M,e("div",X,[e("div",$,[q,a(e("input",{"onUpdate:modelValue":l[1]||(l[1]=s=>t(o).pages[t(i)].date=s),type:"date",id:"data"},null,512),[[d,t(o).pages[t(i)].date]])]),e("div",H,[J,a(e("input",{"onUpdate:modelValue":l[2]||(l[2]=s=>t(o).pages[t(i)].title=s),style:{width:"50%"},type:"text",id:"name",placeholder:"Название страницы"},null,512),[[d,t(o).pages[t(i)].title]])]),e("div",K,[Q,a(e("textarea",{"onUpdate:modelValue":l[3]||(l[3]=s=>t(o).pages[t(i)].description=s),placeholder:"Описание страницы",style:{width:"100%",height:"100px",resize:"none"},id:"text",cols:"30",rows:"10"},null,512),[[d,t(o).pages[t(i)].description]])]),e("div",W,[Y,(p(!0),c(g,null,y(t(o).pages[t(i)].ava,(s,_)=>(p(),c("div",Z,[e("img",{src:s.url,alt:""},null,8,ee)]))),256)),e("div",te,[e("input",{onChange:l[4]||(l[4]=s=>k(s)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),se])]),e("div",oe,[le,(p(!0),c(g,null,y(t(o).pages[t(i)].gallery,(s,_)=>(p(),c("div",ie,[e("div",{class:"close",onClick:h=>x(_)},de,8,ne),e("img",{src:s.url,alt:""},null,8,re)]))),256)),e("div",pe,[e("input",{onChange:l[5]||(l[5]=s=>w(s)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),ce])]),e("div",ue,[_e,a(e("input",{"onUpdate:modelValue":l[6]||(l[6]=s=>t(o).pages[t(i)].trailer=s),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на видео"},null,512),[[d,t(o).pages[t(i)].trailer]])]),e("div",ge,[me,e("div",he,[fe,a(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[7]||(l[7]=s=>t(o).pages[t(i)].seo.url=s),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[d,t(o).pages[t(i)].seo.url]])]),e("div",ye,[be,a(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[8]||(l[8]=s=>t(o).pages[t(i)].seo.title=s),id:"title-seo",type:"text",placeholder:"title"},null,512),[[d,t(o).pages[t(i)].seo.title]])]),e("div",ve,[xe,a(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[9]||(l[9]=s=>t(o).pages[t(i)].seo.keyword=s),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[d,t(o).pages[t(i)].seo.keyword]])]),e("div",we,[Ue,a(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[10]||(l[10]=s=>t(o).pages[t(i)].seo.description=s),id:"description-seo",type:"text",placeholder:"description"},null,512),[[d,t(o).pages[t(i)].seo.description]])])]),e("div",{class:"block-btn mt-5"},[e("button",{onClick:v,class:"btn btn-block btn-success"},"Редактировать страницу"),e("button",{onClick:b,class:"btn btn-block btn-success"},"Вернуть назад")])])])):f("",!0),t(o).language=="1"?(p(),c("div",ke,[Le,e("div",Ve,[e("div",Ae,[Re,a(e("input",{"onUpdate:modelValue":l[11]||(l[11]=s=>t(o).pages[t(i)].date=s),type:"date",id:"data"},null,512),[[d,t(o).pages[t(i)].date]])]),e("div",Ce,[Ie,a(e("input",{"onUpdate:modelValue":l[12]||(l[12]=s=>t(o).pagesUA[t(i)].title=s),style:{width:"50%"},type:"text",id:"name",placeholder:"Название сторінки"},null,512),[[d,t(o).pagesUA[t(i)].title]])]),e("div",Se,[Pe,a(e("textarea",{"onUpdate:modelValue":l[13]||(l[13]=s=>t(o).pagesUA[t(i)].description=s),placeholder:"Описание сторінки",style:{width:"100%",height:"100px",resize:"none"},id:"text",cols:"30",rows:"10"},null,512),[[d,t(o).pagesUA[t(i)].description]])]),e("div",je,[Ne,(p(!0),c(g,null,y(t(o).pagesUA[t(i)].ava,(s,_)=>(p(),c("div",Oe,[e("img",{src:s.url,alt:""},null,8,De)]))),256)),e("div",Ee,[e("input",{onChange:l[14]||(l[14]=s=>L(s)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),Fe])]),e("div",Te,[Be,(p(!0),c(g,null,y(t(o).pages[t(i)].gallery,(s,_)=>(p(),c("div",Ge,[e("div",{class:"close",onClick:h=>x(_)},Xe,8,ze),e("img",{src:s.url,alt:""},null,8,$e)]))),256)),e("div",qe,[e("input",{onChange:l[15]||(l[15]=s=>w(s)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),He])]),e("div",Je,[Ke,a(e("input",{"onUpdate:modelValue":l[16]||(l[16]=s=>t(o).pagesUA[t(i)].trailer=s),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на видео"},null,512),[[d,t(o).pagesUA[t(i)].trailer]])]),e("div",Qe,[We,e("div",Ye,[Ze,a(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[17]||(l[17]=s=>t(o).pagesUA[t(i)].seo.url=s),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[d,t(o).pagesUA[t(i)].seo.url]])]),e("div",et,[tt,a(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[18]||(l[18]=s=>t(o).pagesUA[t(i)].seo.title=s),id:"title-seo",type:"text",placeholder:"title"},null,512),[[d,t(o).pagesUA[t(i)].seo.title]])]),e("div",st,[ot,a(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[19]||(l[19]=s=>t(o).pagesUA[t(i)].seo.keyword=s),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[d,t(o).pagesUA[t(i)].seo.keyword]])]),e("div",lt,[it,a(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[20]||(l[20]=s=>t(o).pagesUA[t(i)].seo.description=s),id:"description-seo",type:"text",placeholder:"description"},null,512),[[d,t(o).pagesUA[t(i)].seo.description]])])]),e("div",{class:"block-btn mt-5"},[e("button",{onClick:v,class:"btn btn-block btn-success"},"Редактировать сторінку"),e("button",{onClick:b,class:"btn btn-block btn-success"},"Вернуть назад")])])])):f("",!0)])):f("",!0)],64)}}},dt=V(nt,[["__scopeId","data-v-6ca822d3"]]);export{dt as default};

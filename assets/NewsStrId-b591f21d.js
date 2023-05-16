import{_ as L,E as V,q as R,v as I,r as C,o as c,g as u,u as t,n as S,m as f,h as e,t as N,z as d,T as j,A as a,F as m,k as g,x as O,y as D}from"./index-9c2c99fe.js";const i=w=>(O("data-v-23a87dca"),w=w(),D(),w),F={class:"flex"},T={style:{margin:"0"}},B=i(()=>e("option",{value:"0"},"RUS",-1)),z=i(()=>e("option",{value:"1"},"UA",-1)),E=[B,z],G={key:1,class:"block-one"},P={key:0,class:"rus"},M=i(()=>e("h2",null,"Редактировать новость",-1)),X={class:"news"},$={class:"date flex mt-3"},q=i(()=>e("label",{for:"data"},"Дата публикации",-1)),H={class:"name flex mt-3"},J=i(()=>e("label",{for:"name"},"Название новости",-1)),K={class:"text flex mt-3"},Q=i(()=>e("label",{for:"text"},"Описание новости",-1)),W={class:"ava flex mt-3"},Y=i(()=>e("p",null,"Главная картинка",-1)),Z={class:"img"},ee=["src"],te={class:"add"},se=i(()=>e("label",{for:"img-top-ua"},"Загрузить фото",-1)),oe={class:"photo flex mt-3"},le=i(()=>e("p",null,"Галерея",-1)),ne={class:"gallery"},ie=["onClick"],de=i(()=>e("span",null,"X",-1)),ae=[de],re=["src"],ce={class:"add"},ue=i(()=>e("label",{for:"img-bottom"},"Загрузить фото",-1)),pe={class:"trailer flex mt-3"},_e=i(()=>e("label",{for:"trailer"},"Ссылка на видео",-1)),me={class:"seo mt-5"},we=i(()=>e("h3",null,"СЕО блок",-1)),he={class:"block flex mt-3"},fe=i(()=>e("label",{for:"url-seo"},"URL",-1)),ge={class:"block flex mt-3"},ye=i(()=>e("label",{for:"title-seo"},"title",-1)),be={class:"block flex mt-3"},ve=i(()=>e("label",{for:"keyword-seo"},"keyword",-1)),xe={class:"block flex mt-3"},Ue=i(()=>e("label",{for:"description-seo"},"description",-1)),ke={key:1,class:"rus"},Ae=i(()=>e("h2",null,"Редагувати новину",-1)),Le={class:"news"},Ve={class:"date flex mt-3"},Re=i(()=>e("label",{for:"data"},"Дата стоврення",-1)),Ie={class:"name flex mt-3"},Ce=i(()=>e("label",{for:"name"},"Назва новини",-1)),Se={class:"text flex mt-3"},Ne=i(()=>e("label",{for:"text"},"Опис новини",-1)),je={class:"ava flex mt-3"},Oe=i(()=>e("p",null,"Головна картинка",-1)),De={class:"img"},Fe=["src"],Te={class:"add"},Be=i(()=>e("label",{for:"img-top-ua"},"Загрузити фото",-1)),ze={class:"photo flex mt-3"},Ee=i(()=>e("p",null,"Галерея",-1)),Ge={class:"gallery"},Pe=["onClick"],Me=i(()=>e("span",null,"X",-1)),Xe=[Me],$e=["src"],qe={class:"add"},He=i(()=>e("label",{for:"img-bottom"},"Загрузити фото",-1)),Je={class:"trailer flex mt-3"},Ke=i(()=>e("label",{for:"trailer"},"Посилання на відео",-1)),Qe={class:"seo mt-5"},We=i(()=>e("h3",null,"СЕО блок",-1)),Ye={class:"block flex mt-3"},Ze=i(()=>e("label",{for:"url-seo"},"URL",-1)),et={class:"block flex mt-3"},tt=i(()=>e("label",{for:"title-seo"},"title",-1)),st={class:"block flex mt-3"},ot=i(()=>e("label",{for:"keyword-seo"},"keyword",-1)),lt={class:"block flex mt-3"},nt=i(()=>e("label",{for:"description-seo"},"description",-1)),it={__name:"NewsStrId",setup(w){const o=V(),U=R();let n=null;I(()=>{n=o.news.findIndex(p=>p.nameNews===U.params.id)});function y(){o.deleteGallery=[],o.getNews()}function b(){o.removeNews=n,o.newNews(),window.scrollTo({top:0,behavior:"smooth"})}function v(p){o.deleteGallery.push(o.news[n].gallery[p].name),o.news[n].gallery.splice(p,1)}async function k(p){const l=p.target.files[0],r=new Image;await new Promise(s=>{r.onload=s,r.onerror=s,r.src=URL.createObjectURL(l)}),o.news[n].ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:l,url:URL.createObjectURL(l)})}async function x(p){const l=p.target.files;for(let r=0;r<l.length;r++){const s=l[r],_=new Image;await new Promise(h=>{_.onload=h,_.onerror=h,_.src=URL.createObjectURL(s)}),_.width>=1e3&&_.height>=190?o.news[n].gallery.push({id:o.news[n].gallery.length,image:s,name:"gallery-"+Date.now(),url:URL.createObjectURL(s)}):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}async function A(p){const l=p.target.files[0],r=new Image;await new Promise(s=>{r.onload=s,r.onerror=s,r.src=URL.createObjectURL(l)}),o.newsUA[n].ava.splice(0,1,{id:0,name:"a-"+Date.now(),image:l,url:URL.createObjectURL(l)})}return(p,l)=>{const r=C("Loader");return c(),u(m,null,[t(o).loading?(c(),S(r,{key:0})):f("",!0),e("div",F,[e("p",T,N(t(o).language=="0"?"Язык":"Мова"),1),d(e("select",{"onUpdate:modelValue":l[0]||(l[0]=s=>t(o).language=s),name:"lang",id:""},E,512),[[j,t(o).language]])]),t(o).news[t(n)]?(c(),u("div",G,[t(o).language=="0"?(c(),u("div",P,[M,e("div",X,[e("div",$,[q,d(e("input",{"onUpdate:modelValue":l[1]||(l[1]=s=>t(o).news[t(n)].date=s),type:"date",id:"data"},null,512),[[a,t(o).news[t(n)].date]])]),e("div",H,[J,d(e("input",{"onUpdate:modelValue":l[2]||(l[2]=s=>t(o).news[t(n)].title=s),style:{width:"50%"},type:"text",id:"name",placeholder:"Название новости"},null,512),[[a,t(o).news[t(n)].title]])]),e("div",K,[Q,d(e("textarea",{"onUpdate:modelValue":l[3]||(l[3]=s=>t(o).news[t(n)].description=s),placeholder:"Описание новости",style:{width:"100%",height:"100px",resize:"none"},id:"text",cols:"30",rows:"10"},null,512),[[a,t(o).news[t(n)].description]])]),e("div",W,[Y,(c(!0),u(m,null,g(t(o).news[t(n)].ava,(s,_)=>(c(),u("div",Z,[e("img",{src:s.url,alt:""},null,8,ee)]))),256)),e("div",te,[e("input",{onChange:l[4]||(l[4]=s=>k(s)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),se])]),e("div",oe,[le,(c(!0),u(m,null,g(t(o).news[t(n)].gallery,(s,_)=>(c(),u("div",ne,[e("div",{class:"close",onClick:h=>v(_)},ae,8,ie),e("img",{src:s.url,alt:""},null,8,re)]))),256)),e("div",ce,[e("input",{onChange:l[5]||(l[5]=s=>x(s)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),ue])]),e("div",pe,[_e,d(e("input",{"onUpdate:modelValue":l[6]||(l[6]=s=>t(o).news[t(n)].trailer=s),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на видео"},null,512),[[a,t(o).news[t(n)].trailer]])]),e("div",me,[we,e("div",he,[fe,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[7]||(l[7]=s=>t(o).news[t(n)].seo.url=s),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[a,t(o).news[t(n)].seo.url]])]),e("div",ge,[ye,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[8]||(l[8]=s=>t(o).news[t(n)].seo.title=s),id:"title-seo",type:"text",placeholder:"title"},null,512),[[a,t(o).news[t(n)].seo.title]])]),e("div",be,[ve,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[9]||(l[9]=s=>t(o).news[t(n)].seo.keyword=s),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[a,t(o).news[t(n)].seo.keyword]])]),e("div",xe,[Ue,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[10]||(l[10]=s=>t(o).news[t(n)].seo.description=s),id:"description-seo",type:"text",placeholder:"description"},null,512),[[a,t(o).news[t(n)].seo.description]])])]),e("div",{class:"block-btn mt-5"},[e("button",{onClick:b,class:"btn btn-block btn-success"},"Редактировать новость"),e("button",{onClick:y,class:"btn btn-block btn-success"},"Вернуть назад")])])])):f("",!0),t(o).language=="1"?(c(),u("div",ke,[Ae,e("div",Le,[e("div",Ve,[Re,d(e("input",{"onUpdate:modelValue":l[11]||(l[11]=s=>t(o).news[t(n)].date=s),type:"date",id:"data"},null,512),[[a,t(o).news[t(n)].date]])]),e("div",Ie,[Ce,d(e("input",{"onUpdate:modelValue":l[12]||(l[12]=s=>t(o).newsUA[t(n)].title=s),style:{width:"50%"},type:"text",id:"name",placeholder:"Название новости"},null,512),[[a,t(o).newsUA[t(n)].title]])]),e("div",Se,[Ne,d(e("textarea",{"onUpdate:modelValue":l[13]||(l[13]=s=>t(o).newsUA[t(n)].description=s),placeholder:"Описание новости",style:{width:"100%",height:"100px",resize:"none"},id:"text",cols:"30",rows:"10"},null,512),[[a,t(o).newsUA[t(n)].description]])]),e("div",je,[Oe,(c(!0),u(m,null,g(t(o).newsUA[t(n)].ava,(s,_)=>(c(),u("div",De,[e("img",{src:s.url,alt:""},null,8,Fe)]))),256)),e("div",Te,[e("input",{onChange:l[14]||(l[14]=s=>A(s)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),Be])]),e("div",ze,[Ee,(c(!0),u(m,null,g(t(o).news[t(n)].gallery,(s,_)=>(c(),u("div",Ge,[e("div",{class:"close",onClick:h=>v(_)},Xe,8,Pe),e("img",{src:s.url,alt:""},null,8,$e)]))),256)),e("div",qe,[e("input",{onChange:l[15]||(l[15]=s=>x(s)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),He])]),e("div",Je,[Ke,d(e("input",{"onUpdate:modelValue":l[16]||(l[16]=s=>t(o).newsUA[t(n)].trailer=s),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на видео"},null,512),[[a,t(o).newsUA[t(n)].trailer]])]),e("div",Qe,[We,e("div",Ye,[Ze,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[17]||(l[17]=s=>t(o).newsUA[t(n)].seo.url=s),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[a,t(o).newsUA[t(n)].seo.url]])]),e("div",et,[tt,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[18]||(l[18]=s=>t(o).newsUA[t(n)].seo.title=s),id:"title-seo",type:"text",placeholder:"title"},null,512),[[a,t(o).newsUA[t(n)].seo.title]])]),e("div",st,[ot,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[19]||(l[19]=s=>t(o).newsUA[t(n)].seo.keyword=s),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[a,t(o).newsUA[t(n)].seo.keyword]])]),e("div",lt,[nt,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[20]||(l[20]=s=>t(o).newsUA[t(n)].seo.description=s),id:"description-seo",type:"text",placeholder:"description"},null,512),[[a,t(o).newsUA[t(n)].seo.description]])])]),e("div",{class:"block-btn mt-5"},[e("button",{onClick:b,class:"btn btn-block btn-success"},"Редактировать новость"),e("button",{onClick:y,class:"btn btn-block btn-success"},"Вернуть назад")])])])):f("",!0)])):f("",!0)],64)}}},at=L(it,[["__scopeId","data-v-23a87dca"]]);export{at as default};

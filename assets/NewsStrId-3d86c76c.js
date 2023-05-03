import{_ as L,z as R,j as I,k as C,r as S,o as c,d as u,u as t,i as A,l as f,e,t as N,q as d,M as j,R as x,v as a,F as m,h as g,p as O,m as D}from"./index-c1996a1c.js";const i=w=>(O("data-v-a105de82"),w=w(),D(),w),F={class:"flex"},B={style:{margin:"0"}},M=i(()=>e("option",{value:"0"},"RUS",-1)),T=i(()=>e("option",{value:"1"},"UA",-1)),z=[M,T],P={key:1,class:"block-one"},E={key:0,class:"rus"},G=i(()=>e("h2",null,"Редактировать новость",-1)),X={class:"news"},$={class:"status flex mt-3"},q=i(()=>e("label",{for:"status"},"Включить ли новость?",-1)),H={class:"date flex mt-3"},J=i(()=>e("label",{for:"data"},"Дата публикации",-1)),K={class:"name flex mt-3"},Q=i(()=>e("label",{for:"name"},"Название новости",-1)),W={class:"text flex mt-3"},Y=i(()=>e("label",{for:"text"},"Описание новости",-1)),Z={class:"ava flex mt-3"},ee=i(()=>e("p",null,"Главная картинка",-1)),te={class:"img"},se=["src"],oe={class:"add"},le=i(()=>e("label",{for:"img-top-ua"},"Загрузить фото",-1)),ne={class:"photo flex mt-3"},ie=i(()=>e("p",null,"Галерея",-1)),de={class:"gallery"},ae=["onClick"],re=i(()=>e("span",null,"X",-1)),ce=[re],ue=["src"],pe={class:"add"},_e=i(()=>e("label",{for:"img-bottom"},"Загрузить фото",-1)),me={class:"trailer flex mt-3"},we=i(()=>e("label",{for:"trailer"},"Ссылка на видео",-1)),he={class:"seo mt-5"},fe=i(()=>e("h3",null,"СЕО блок",-1)),ge={class:"block flex mt-3"},ye=i(()=>e("label",{for:"url-seo"},"URL",-1)),ve={class:"block flex mt-3"},be=i(()=>e("label",{for:"title-seo"},"title",-1)),xe={class:"block flex mt-3"},Ue=i(()=>e("label",{for:"keyword-seo"},"keyword",-1)),ke={class:"block flex mt-3"},Ve=i(()=>e("label",{for:"description-seo"},"description",-1)),Le={key:1,class:"rus"},Re=i(()=>e("h2",null,"Редагувати новину",-1)),Ie={class:"news"},Ce={class:"status flex mt-3"},Se=i(()=>e("label",{for:"status"},"Включить ли новость?",-1)),Ae={class:"date flex mt-3"},Ne=i(()=>e("label",{for:"data"},"Дата стоврення",-1)),je={class:"name flex mt-3"},Oe=i(()=>e("label",{for:"name"},"Назва новини",-1)),De={class:"text flex mt-3"},Fe=i(()=>e("label",{for:"text"},"Опис новини",-1)),Be={class:"ava flex mt-3"},Me=i(()=>e("p",null,"Головна картинка",-1)),Te={class:"img"},ze=["src"],Pe={class:"add"},Ee=i(()=>e("label",{for:"img-top-ua"},"Загрузити фото",-1)),Ge={class:"photo flex mt-3"},Xe=i(()=>e("p",null,"Галерея",-1)),$e={class:"gallery"},qe=["onClick"],He=i(()=>e("span",null,"X",-1)),Je=[He],Ke=["src"],Qe={class:"add"},We=i(()=>e("label",{for:"img-bottom"},"Загрузити фото",-1)),Ye={class:"trailer flex mt-3"},Ze=i(()=>e("label",{for:"trailer"},"Посилання на відео",-1)),et={class:"seo mt-5"},tt=i(()=>e("h3",null,"СЕО блок",-1)),st={class:"block flex mt-3"},ot=i(()=>e("label",{for:"url-seo"},"URL",-1)),lt={class:"block flex mt-3"},nt=i(()=>e("label",{for:"title-seo"},"title",-1)),it={class:"block flex mt-3"},dt=i(()=>e("label",{for:"keyword-seo"},"keyword",-1)),at={class:"block flex mt-3"},rt=i(()=>e("label",{for:"description-seo"},"description",-1)),ct={__name:"NewsStrId",setup(w){const o=R(),U=I();let n=null;C(()=>{n=o.news.findIndex(p=>p.nameNews===U.params.id)});function y(){o.removeNews=n,o.newNews(),window.scrollTo({top:0,behavior:"smooth"})}function v(p){o.deleteGallery.push(o.news[n].gallery[p].name),o.news[n].gallery.splice(p,1)}async function k(p){const l=p.target.files[0],r=new Image;await new Promise(s=>{r.onload=s,r.onerror=s,r.src=URL.createObjectURL(l)}),o.news[n].ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:l,url:URL.createObjectURL(l)})}async function b(p){const l=p.target.files;for(let r=0;r<l.length;r++){const s=l[r],_=new Image;await new Promise(h=>{_.onload=h,_.onerror=h,_.src=URL.createObjectURL(s)}),_.width>=1e3&&_.height>=190?o.news[n].gallery.push({id:o.news[n].gallery.length,image:s,name:"gallery-"+Date.now(),url:URL.createObjectURL(s)}):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}async function V(p){const l=p.target.files[0],r=new Image;await new Promise(s=>{r.onload=s,r.onerror=s,r.src=URL.createObjectURL(l)}),o.newsUA[n].ava.splice(0,1,{id:0,name:"a-"+Date.now(),image:l,url:URL.createObjectURL(l)})}return(p,l)=>{const r=S("Loader");return c(),u(m,null,[t(o).loading?(c(),A(r,{key:0})):f("",!0),e("div",F,[e("p",B,N(t(o).language=="0"?"Язык":"Мова"),1),d(e("select",{"onUpdate:modelValue":l[0]||(l[0]=s=>t(o).language=s),name:"lang",id:""},z,512),[[j,t(o).language]])]),t(o).news[t(n)]?(c(),u("div",P,[t(o).language=="0"?(c(),u("div",E,[G,e("div",X,[e("div",$,[q,d(e("input",{disabled:"","onUpdate:modelValue":l[1]||(l[1]=s=>t(o).news[t(n)].status=s),type:"checkbox",id:"status"},null,512),[[x,t(o).news[t(n)].status]])]),e("div",H,[J,d(e("input",{"onUpdate:modelValue":l[2]||(l[2]=s=>t(o).news[t(n)].date=s),type:"date",id:"data"},null,512),[[a,t(o).news[t(n)].date]])]),e("div",K,[Q,d(e("input",{"onUpdate:modelValue":l[3]||(l[3]=s=>t(o).news[t(n)].title=s),style:{width:"50%"},type:"text",id:"name",placeholder:"Название новости"},null,512),[[a,t(o).news[t(n)].title]])]),e("div",W,[Y,d(e("textarea",{"onUpdate:modelValue":l[4]||(l[4]=s=>t(o).news[t(n)].description=s),placeholder:"Описание новости",style:{width:"100%",height:"100px",resize:"none"},id:"text",cols:"30",rows:"10"},null,512),[[a,t(o).news[t(n)].description]])]),e("div",Z,[ee,(c(!0),u(m,null,g(t(o).news[t(n)].ava,(s,_)=>(c(),u("div",te,[e("img",{src:s.url,alt:""},null,8,se)]))),256)),e("div",oe,[e("input",{onChange:l[5]||(l[5]=s=>k(s)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),le])]),e("div",ne,[ie,(c(!0),u(m,null,g(t(o).news[t(n)].gallery,(s,_)=>(c(),u("div",de,[e("div",{class:"close",onClick:h=>v(_)},ce,8,ae),e("img",{src:s.url,alt:""},null,8,ue)]))),256)),e("div",pe,[e("input",{onChange:l[6]||(l[6]=s=>b(s)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),_e])]),e("div",me,[we,d(e("input",{"onUpdate:modelValue":l[7]||(l[7]=s=>t(o).news[t(n)].trailer=s),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на видео"},null,512),[[a,t(o).news[t(n)].trailer]])]),e("div",he,[fe,e("div",ge,[ye,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[8]||(l[8]=s=>t(o).news[t(n)].seo.url=s),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[a,t(o).news[t(n)].seo.url]])]),e("div",ve,[be,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[9]||(l[9]=s=>t(o).news[t(n)].seo.title=s),id:"title-seo",type:"text",placeholder:"title"},null,512),[[a,t(o).news[t(n)].seo.title]])]),e("div",xe,[Ue,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[10]||(l[10]=s=>t(o).news[t(n)].seo.keyword=s),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[a,t(o).news[t(n)].seo.keyword]])]),e("div",ke,[Ve,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[11]||(l[11]=s=>t(o).news[t(n)].seo.description=s),id:"description-seo",type:"text",placeholder:"description"},null,512),[[a,t(o).news[t(n)].seo.description]])])]),e("div",{class:"block-btn mt-5"},[e("button",{onClick:y,class:"btn btn-block btn-success"},"Редактировать новость")])])])):f("",!0),t(o).language=="1"?(c(),u("div",Le,[Re,e("div",Ie,[e("div",Ce,[Se,d(e("input",{disabled:"","onUpdate:modelValue":l[12]||(l[12]=s=>t(o).news[t(n)].status=s),type:"checkbox",id:"status"},null,512),[[x,t(o).news[t(n)].status]])]),e("div",Ae,[Ne,d(e("input",{"onUpdate:modelValue":l[13]||(l[13]=s=>t(o).news[t(n)].date=s),type:"date",id:"data"},null,512),[[a,t(o).news[t(n)].date]])]),e("div",je,[Oe,d(e("input",{"onUpdate:modelValue":l[14]||(l[14]=s=>t(o).newsUA[t(n)].title=s),style:{width:"50%"},type:"text",id:"name",placeholder:"Название новости"},null,512),[[a,t(o).newsUA[t(n)].title]])]),e("div",De,[Fe,d(e("textarea",{"onUpdate:modelValue":l[15]||(l[15]=s=>t(o).newsUA[t(n)].description=s),placeholder:"Описание новости",style:{width:"100%",height:"100px",resize:"none"},id:"text",cols:"30",rows:"10"},null,512),[[a,t(o).newsUA[t(n)].description]])]),e("div",Be,[Me,(c(!0),u(m,null,g(t(o).newsUA[t(n)].ava,(s,_)=>(c(),u("div",Te,[e("img",{src:s.url,alt:""},null,8,ze)]))),256)),e("div",Pe,[e("input",{onChange:l[16]||(l[16]=s=>V(s)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),Ee])]),e("div",Ge,[Xe,(c(!0),u(m,null,g(t(o).news[t(n)].gallery,(s,_)=>(c(),u("div",$e,[e("div",{class:"close",onClick:h=>v(_)},Je,8,qe),e("img",{src:s.url,alt:""},null,8,Ke)]))),256)),e("div",Qe,[e("input",{onChange:l[17]||(l[17]=s=>b(s)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),We])]),e("div",Ye,[Ze,d(e("input",{"onUpdate:modelValue":l[18]||(l[18]=s=>t(o).newsUA[t(n)].trailer=s),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на видео"},null,512),[[a,t(o).newsUA[t(n)].trailer]])]),e("div",et,[tt,e("div",st,[ot,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[19]||(l[19]=s=>t(o).news[t(n)].seo.url=s),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[a,t(o).news[t(n)].seo.url]])]),e("div",lt,[nt,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[20]||(l[20]=s=>t(o).news[t(n)].seo.title=s),id:"title-seo",type:"text",placeholder:"title"},null,512),[[a,t(o).news[t(n)].seo.title]])]),e("div",it,[dt,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[21]||(l[21]=s=>t(o).news[t(n)].seo.keyword=s),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[a,t(o).news[t(n)].seo.keyword]])]),e("div",at,[rt,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":l[22]||(l[22]=s=>t(o).news[t(n)].seo.description=s),id:"description-seo",type:"text",placeholder:"description"},null,512),[[a,t(o).news[t(n)].seo.description]])])]),e("div",{class:"block-btn mt-5"},[e("button",{onClick:y,class:"btn btn-block btn-success"},"Редактировать новость")])])])):f("",!0)])):f("",!0)],64)}}},pt=L(ct,[["__scopeId","data-v-a105de82"]]);export{pt as default};

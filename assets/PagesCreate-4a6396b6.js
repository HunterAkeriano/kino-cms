import{_ as O,M as B,a0 as M,x as h,w as z,r as T,o as a,g as n,u as o,n as N,m as u,h as e,t as X,y as d,z as $,D,H as r,F as m,k as g,A as E,B as G}from"./index-d1ea4e37.js";const i=f=>(E("data-v-5a262830"),f=f(),G(),f),H={class:"flex"},q={style:{margin:"0"}},J=i(()=>e("option",{value:"0"},"RUS",-1)),K=i(()=>e("option",{value:"1"},"UA",-1)),Q=[J,K],W={key:1,class:"rus mt-3"},Y=i(()=>e("h2",null,"Создать страницу",-1)),Z={class:"news"},ee={class:"status flex mt-3"},te=i(()=>e("label",{for:"status"},"Включить ли страницу?",-1)),le={class:"date flex mt-3"},se=i(()=>e("label",{for:"data"},"Дата создания",-1)),oe={class:"name flex mt-3"},ie=i(()=>e("label",{for:"name"},"Название страницы",-1)),ae={key:0,style:{color:"red"}},ne={class:"text flex mt-3"},de=i(()=>e("label",{for:"text"},"Описание страницы",-1)),re={key:1,style:{color:"red"}},ce={class:"ava flex mt-3"},ue=i(()=>e("p",null,"Главная картинка",-1)),pe={style:{width:"500px",height:"300px"},class:"img"},_e=["src"],he={class:"add"},me=i(()=>e("label",{for:"img-top-ua"},"Загрузити фото",-1)),fe={key:2,style:{color:"red"}},ve={class:"photo flex mt-3"},ye=i(()=>e("p",null,"Галерея",-1)),ge={class:"gallery"},Ue=["onClick"],xe=i(()=>e("span",null,"X",-1)),be=[xe],we=["src"],ke={class:"add"},Ae=i(()=>e("label",{for:"img-bottom"},"Загрузити фото",-1)),Ve={key:3,style:{color:"red"}},Le={class:"trailer flex mt-3"},Re=i(()=>e("label",{for:"trailer"},"Ссылка на видео",-1)),Ce={key:4,style:{color:"red"}},Ie={class:"seo mt-5"},Se=i(()=>e("h3",null,"СЕО блок",-1)),De={class:"block flex mt-3"},Pe=i(()=>e("label",{for:"url-seo"},"URL",-1)),je={class:"block flex mt-3"},Fe=i(()=>e("label",{for:"title-seo"},"title",-1)),Oe={class:"block flex mt-3"},Be=i(()=>e("label",{for:"keyword-seo"},"keyword",-1)),Me={class:"block flex mt-3"},ze=i(()=>e("label",{for:"description-seo"},"description",-1)),Te={key:2,class:"ua mt-3"},Ne=i(()=>e("h2",null,"Створити сторінку",-1)),Xe={class:"news"},$e={class:"status flex mt-3"},Ee=i(()=>e("label",{for:"status"},"Увімкнена сторінка?",-1)),Ge={class:"date flex mt-3"},He=i(()=>e("label",{for:"data"},"Дата стоврення",-1)),qe={class:"name flex mt-3"},Je=i(()=>e("label",{for:"name"},"Назва сторінки",-1)),Ke={key:0,style:{color:"red"}},Qe={class:"text flex mt-3"},We=i(()=>e("label",{for:"text"},"Опис сторінки",-1)),Ye={key:1,style:{color:"red"}},Ze={class:"ava flex mt-3"},et=i(()=>e("p",null,"Головна картинка",-1)),tt={style:{width:"500px",height:"300px"},class:"img"},lt=["src"],st={class:"add"},ot=i(()=>e("label",{for:"img-top-ua"},"Загрузити фото",-1)),it={key:2,style:{color:"red"}},at={class:"photo flex mt-3"},nt=i(()=>e("p",null,"Галерея",-1)),dt={class:"gallery"},rt=["onClick"],ct=i(()=>e("span",null,"X",-1)),ut=[ct],pt=["src"],_t={class:"add"},ht=i(()=>e("label",{for:"img-bottom"},"Загрузити фото",-1)),mt={key:3,style:{color:"red"}},ft={class:"trailer flex mt-3"},vt=i(()=>e("label",{for:"trailer"},"Посилання на відео",-1)),yt={key:4,style:{color:"red"}},gt={class:"seo mt-5"},Ut=i(()=>e("h3",null,"СЕО блок",-1)),xt={class:"block flex mt-3"},bt=i(()=>e("label",{for:"url-seo"},"URL",-1)),wt={class:"block flex mt-3"},kt=i(()=>e("label",{for:"title-seo"},"title",-1)),At={class:"block flex mt-3"},Vt=i(()=>e("label",{for:"keyword-seo"},"keyword",-1)),Lt={class:"block flex mt-3"},Rt=i(()=>e("label",{for:"description-seo"},"description",-1)),Ct={__name:"PagesCreate",setup(f){const t=B(),P=M(),U=h(!1),x=h(!1),b=h(!1),w=h(!1),k=h(!1),A=h(!1),v=h(!1),V=h(!1),L=h(!1);function R(){if(t.title.length<1?U.value=!0:U.value=!1,t.titleUA.length<1?x.value=!0:x.value=!1,t.description.length<1?b.value=!0:b.value=!1,t.descriptionUA.length<1?w.value=!0:w.value=!1,t.ava.length<1?k.value=!0:k.value=!1,t.avaUA.length<1?A.value=!0:A.value=!1,t.gallery.length<1?v.value=!0:v.value=!1,t.trailer.length<1?V.value=!0:V.value=!1,t.trailerUA.length<1){L.value=!0;return}else L.value=!1;t.createPages()}const C=h(new Date);C.value.setDate(C.value.getDate());function I(_){t.gallery.splice(_,1)}async function j(_){const s=_.target.files[0],c=new Image;await new Promise(l=>{c.onload=l,c.onerror=l,c.src=URL.createObjectURL(s)}),t.ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:s,url:URL.createObjectURL(s)})}async function S(_){const s=_.target.files;for(let c=0;c<s.length;c++){const l=s[c],p=new Image;await new Promise(y=>{p.onload=y,p.onerror=y,p.src=URL.createObjectURL(l)}),p.width>=1e3&&p.height>=190?t.gallery.push({id:t.gallery.length,image:l,name:"gallery-"+Date.now(),url:URL.createObjectURL(l)}):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}z(()=>t.newsAdd,_=>{_&&(P.push("/admin/pages"),t.newsAdd=!1)});async function F(_){const s=_.target.files[0],c=new Image;await new Promise(l=>{c.onload=l,c.onerror=l,c.src=URL.createObjectURL(s)}),t.avaUA.splice(0,1,{id:0,name:"a-"+Date.now(),image:s,url:URL.createObjectURL(s)})}return(_,s)=>{const c=T("Loader");return a(),n(m,null,[o(t).loading?(a(),N(c,{key:0})):u("",!0),e("div",H,[e("p",q,X(o(t).language=="0"?"Язык":"Мова"),1),d(e("select",{"onUpdate:modelValue":s[0]||(s[0]=l=>o(t).language=l),name:"lang",id:""},Q,512),[[$,o(t).language]])]),o(t).language=="0"?(a(),n("div",W,[Y,e("div",Z,[e("div",ee,[te,d(e("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>o(t).status=l),type:"checkbox",id:"status"},null,512),[[D,o(t).status]])]),e("div",le,[se,d(e("input",{"onUpdate:modelValue":s[2]||(s[2]=l=>o(t).date=l),type:"date",id:"data"},null,512),[[r,o(t).date]])]),e("div",oe,[ie,d(e("input",{"onUpdate:modelValue":s[3]||(s[3]=l=>o(t).title=l),style:{width:"50%"},type:"text",id:"name",placeholder:"Название страницы"},null,512),[[r,o(t).title]])]),U.value?(a(),n("p",ae,"Введите название страницы")):u("",!0),e("div",ne,[de,d(e("textarea",{"onUpdate:modelValue":s[4]||(s[4]=l=>o(t).description=l),placeholder:"Описание страницы",style:{width:"100%",height:"100px",resize:"none"},id:"text",cols:"30",rows:"10"},null,512),[[r,o(t).description]])]),b.value?(a(),n("p",re,"Введите описание страницы")):u("",!0),e("div",ce,[ue,(a(!0),n(m,null,g(o(t).ava,(l,p)=>(a(),n("div",pe,[e("img",{src:l.url,alt:""},null,8,_e)]))),256)),e("div",he,[e("input",{onChange:s[5]||(s[5]=l=>j(l)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),me])]),k.value?(a(),n("p",fe,"Добавьте картинку")):u("",!0),e("div",ve,[ye,(a(!0),n(m,null,g(o(t).gallery,(l,p)=>(a(),n("div",ge,[e("div",{class:"close",onClick:y=>I(p)},be,8,Ue),e("img",{src:l.url,alt:""},null,8,we)]))),256)),e("div",ke,[e("input",{onChange:s[6]||(s[6]=l=>S(l)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),Ae])]),v.value?(a(),n("p",Ve,"Добавьте фото")):u("",!0),e("div",Le,[Re,d(e("input",{"onUpdate:modelValue":s[7]||(s[7]=l=>o(t).trailer=l),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на видео"},null,512),[[r,o(t).trailer]])]),V.value?(a(),n("p",Ce,"Добавьте трейлер")):u("",!0),e("div",Ie,[Se,e("div",De,[Pe,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[8]||(s[8]=l=>o(t).seo.url=l),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[r,o(t).seo.url]])]),e("div",je,[Fe,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[9]||(s[9]=l=>o(t).seo.title=l),id:"title-seo",type:"text",placeholder:"title"},null,512),[[r,o(t).seo.title]])]),e("div",Oe,[Be,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[10]||(s[10]=l=>o(t).seo.keyword=l),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[r,o(t).seo.keyword]])]),e("div",Me,[ze,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[11]||(s[11]=l=>o(t).seo.description=l),id:"description-seo",type:"text",placeholder:"description"},null,512),[[r,o(t).seo.description]])])]),e("div",{class:"block-btn mt-5"},[e("button",{onClick:R,class:"btn btn-block btn-success"},"Создать страницу")])])])):u("",!0),o(t).language=="1"?(a(),n("div",Te,[Ne,e("div",Xe,[e("div",$e,[Ee,d(e("input",{"onUpdate:modelValue":s[12]||(s[12]=l=>o(t).status=l),type:"checkbox",id:"status"},null,512),[[D,o(t).status]])]),e("div",Ge,[He,d(e("input",{"onUpdate:modelValue":s[13]||(s[13]=l=>o(t).date=l),type:"date",id:"data"},null,512),[[r,o(t).date]])]),e("div",qe,[Je,d(e("input",{"onUpdate:modelValue":s[14]||(s[14]=l=>o(t).titleUA=l),style:{width:"50%"},type:"text",id:"name",placeholder:"Назва сторінки"},null,512),[[r,o(t).titleUA]])]),x.value?(a(),n("p",Ke,"Введіть назву сторінки")):u("",!0),e("div",Qe,[We,d(e("textarea",{"onUpdate:modelValue":s[15]||(s[15]=l=>o(t).descriptionUA=l),placeholder:"Опис сторінки",style:{width:"100%",height:"100px",resize:"none"},id:"text",cols:"30",rows:"10"},null,512),[[r,o(t).descriptionUA]])]),w.value?(a(),n("p",Ye,"Введіть опис сторінки")):u("",!0),e("div",Ze,[et,(a(!0),n(m,null,g(o(t).avaUA,(l,p)=>(a(),n("div",tt,[e("img",{src:l.url,alt:""},null,8,lt)]))),256)),e("div",st,[e("input",{onChange:s[16]||(s[16]=l=>F(l)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),ot])]),A.value?(a(),n("p",it,"Додайте картинку")):u("",!0),e("div",at,[nt,(a(!0),n(m,null,g(o(t).gallery,(l,p)=>(a(),n("div",dt,[e("div",{class:"close",onClick:y=>I(p)},ut,8,rt),e("img",{src:l.url,alt:""},null,8,pt)]))),256)),e("div",_t,[e("input",{onChange:s[17]||(s[17]=l=>S(l)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),ht])]),v.value?(a(),n("p",mt,"Добавьте фото")):u("",!0),e("div",ft,[vt,d(e("input",{"onUpdate:modelValue":s[18]||(s[18]=l=>o(t).trailerUA=l),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Посилання на відео"},null,512),[[r,o(t).trailerUA]])]),L.value?(a(),n("p",yt,"Додайте трейлер")):u("",!0),e("div",gt,[Ut,e("div",xt,[bt,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[19]||(s[19]=l=>o(t).seoUA.url=l),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[r,o(t).seoUA.url]])]),e("div",wt,[kt,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[20]||(s[20]=l=>o(t).seoUA.title=l),id:"title-seo",type:"text",placeholder:"title"},null,512),[[r,o(t).seoUA.title]])]),e("div",At,[Vt,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[21]||(s[21]=l=>o(t).seoUA.keyword=l),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[r,o(t).seoUA.keyword]])]),e("div",Lt,[Rt,d(e("input",{style:{width:"50%"},"onUpdate:modelValue":s[22]||(s[22]=l=>o(t).seoUA.description=l),id:"description-seo",type:"text",placeholder:"description"},null,512),[[r,o(t).seoUA.description]])])]),e("div",{class:"block-btn mt-5"},[e("button",{onClick:R,class:"btn btn-block btn-success"},"Создать сторінку")])])])):u("",!0)],64)}}},St=O(Ct,[["__scopeId","data-v-5a262830"]]);export{St as default};

import{f as A,k as L,m as R,D,r as I,o as d,d as m,u as e,j as C,n as _,e as t,t as M,s as n,M as S,Q as U,v as a,F as h,i as y,R as u}from"./index-c1fca2e6.js";const j={class:"content"},O={class:"language",style:{display:"flex","align-items":"center",gap:"20px"}},T={style:{margin:"0"}},B=t("option",{value:"0"},"Ru",-1),$=t("option",{value:"1"},"UA",-1),G=[B,$],P={class:"rus"},z=t("h2",null,"Редактирования фильма",-1),E={key:0,class:"block-info mt-5"},N={class:"title flex mt-3"},X=t("label",{for:"title"},"Название фильма",-1),Q={class:"desctiption flex mt-3"},q=t("label",{for:"desctiption"},"Описание",-1),H={class:"ava flex mt-3"},J=t("p",null,"Главная картинка",-1),K={class:"img"},W=["src"],Y={class:"add"},Z=t("label",{for:"img-top"},"Загрузить фото",-1),tt={class:"photo flex mt-3"},et=t("p",null,"Галерея",-1),lt={class:"gallery"},ot=["onClick"],st=t("span",null,"X",-1),it=[st],nt=["src"],dt=t("div",{class:"info-delete"},null,-1),at={class:"add"},rt=t("label",{for:"img-bottom"},"Загрузить фото",-1),ct={class:"trailer flex mt-3"},mt=t("label",{for:"trailer"},"Ссылка на трейлер",-1),pt={class:"type flex mt-3"},ut=t("p",null,"Тип фильма",-1),_t={class:"one"},ft=t("label",{for:"2D"},"2D",-1),ht={class:"one"},yt=t("label",{for:"3D"},"3D",-1),gt={class:"one"},bt=t("label",{for:"IMax"},"IMax",-1),vt={key:1,class:"seo mt-5"},xt=t("h3",null,"СЕО блок",-1),Ut={class:"block flex mt-3"},wt=t("label",{for:"url-seo"},"URL",-1),kt={class:"block flex mt-3"},Ft=t("label",{for:"title-seo"},"title",-1),Vt={class:"block flex mt-3"},At=t("label",{for:"keyword-seo"},"keyword",-1),Lt={class:"block flex mt-3"},Rt=t("label",{for:"description-seo"},"description",-1),Dt={class:"block-btn mt-5"},It={class:"ukr"},Ct=t("h2",null,"Редагування фільму",-1),Mt={key:0,class:"block-info mt-5"},St={class:"title flex mt-3"},jt=t("label",{for:"title"},"Назва фільму",-1),Ot={class:"desctiption flex mt-3"},Tt=t("label",{for:"desctiption"},"Опис",-1),Bt={class:"ava flex mt-3"},$t=t("p",null,"Головна картинка",-1),Gt={class:"img"},Pt=["src"],zt={class:"add"},Et=t("label",{for:"img-top-ua"},"Загрузити фото",-1),Nt={class:"photo flex mt-3"},Xt=t("p",null,"Галерея",-1),Qt={class:"gallery"},qt=["onClick"],Ht=t("span",null,"X",-1),Jt=[Ht],Kt=["src"],Wt=t("div",{class:"info-delete"},null,-1),Yt={class:"add"},Zt=t("label",{for:"img-bottom"},"Загрузити фото",-1),te={class:"trailer flex mt-3"},ee=t("label",{for:"trailer"},"Посилання на трейлер",-1),le={class:"type flex mt-3"},oe=t("p",null,"Тип фільма",-1),se={class:"one"},ie=t("label",{for:"2D"},"2D",-1),ne={class:"one"},de=t("label",{for:"3D"},"3D",-1),ae={class:"one"},re=t("label",{for:"IMax"},"IMax",-1),ce={key:1,class:"seo mt-5"},me=t("h3",null,"СЕО блок",-1),pe={class:"block flex mt-3"},ue=t("label",{for:"url-seo"},"URL",-1),_e={class:"block flex mt-3"},fe=t("label",{for:"title-seo"},"title",-1),he={class:"block flex mt-3"},ye=t("label",{for:"keyword-seo"},"keyword",-1),ge={class:"block flex mt-3"},be=t("label",{for:"description-seo"},"description",-1),ve={class:"block-btn mt-5"},we={__name:"FilmStrId",setup(xe){const o=A(),w=L();let i=null;R(()=>{i=o.film.findIndex(r=>r.nameFilms===w.params.id)});const k=D(()=>o.language=="0"?"Язык":"Мова");function g(){o.film=[],o.UAFilm=[],o.deleteGallery=[],o.getFilms(),window.scrollTo({top:0,behavior:"smooth"})}function b(r){o.reversed=r,o.newFilms(),window.scrollTo({top:0,behavior:"smooth"})}function v(r){o.deleteGallery.push(o.film[i].gallery[r].name),o.film[i].gallery.splice(r,1)}async function F(r){const s=r.target.files[0],c=new Image;await new Promise(l=>{c.onload=l,c.onerror=l,c.src=URL.createObjectURL(s)}),o.film[i].ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:s,url:URL.createObjectURL(s)})}async function V(r){const s=r.target.files[0],c=new Image;await new Promise(l=>{c.onload=l,c.onerror=l,c.src=URL.createObjectURL(s)}),o.UAFilm[i].ava.splice(0,1,{id:0,name:"a-"+Date.now(),image:s,url:URL.createObjectURL(s)})}async function x(r){const s=r.target.files;for(let c=0;c<s.length;c++){const l=s[c],p=new Image;await new Promise(f=>{p.onload=f,p.onerror=f,p.src=URL.createObjectURL(l)}),p.width>=1e3&&p.height>=190?o.film[i].gallery.push({id:o.film[i].gallery.length,name:"gallery-"+Date.now(),url:"",image:l,url:URL.createObjectURL(l)}):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}return(r,s)=>{const c=I("Loader");return d(),m("div",j,[e(o).loading?(d(),C(c,{key:0})):_("",!0),t("div",O,[t("p",T,M(e(k)),1),n(t("select",{"onUpdate:modelValue":s[0]||(s[0]=l=>e(o).language=l),name:"laguage",id:""},G,512),[[S,e(o).language]])]),n(t("div",P,[z,e(o).film[e(i)]?(d(),m("div",E,[t("div",N,[X,n(t("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>e(o).film[e(i)].title=l),style:{width:"50%"},id:"title",type:"text",placeholder:"Название фильма"},null,512),[[a,e(o).film[e(i)].title]])]),t("div",Q,[q,n(t("textarea",{"onUpdate:modelValue":s[2]||(s[2]=l=>e(o).film[e(i)].description=l),placeholder:"Описание фильма",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[a,e(o).film[e(i)].description]])]),t("div",H,[J,(d(!0),m(h,null,y(e(o).film[e(i)].ava,(l,p)=>(d(),m("div",K,[t("img",{src:l.url,alt:""},null,8,W)]))),256)),t("div",Y,[t("input",{onChange:s[3]||(s[3]=l=>F(l)),class:"img-top-input",id:"img-top",ref:"fileInput",type:"file",accept:"image/* "},null,544),Z])]),t("div",tt,[et,(d(!0),m(h,null,y(e(o).film[e(i)].gallery,(l,p)=>(d(),m("div",lt,[t("div",{class:"close",onClick:f=>v(p)},it,8,ot),t("img",{src:l.url,alt:""},null,8,nt)]))),256)),dt,t("div",at,[t("input",{onChange:s[4]||(s[4]=l=>x(l)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),rt])]),t("div",ct,[mt,n(t("input",{"onUpdate:modelValue":s[5]||(s[5]=l=>e(o).film[e(i)].trailer=l),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на трейлер"},null,512),[[a,e(o).film[e(i)].trailer]])]),t("div",pt,[ut,t("div",_t,[ft,n(t("input",{"onUpdate:modelValue":s[6]||(s[6]=l=>e(o).film[e(i)].type.filmtwo=l),id:"2D",type:"checkbox"},null,512),[[u,e(o).film[e(i)].type.filmtwo]])]),t("div",ht,[yt,n(t("input",{"onUpdate:modelValue":s[7]||(s[7]=l=>e(o).film[e(i)].type.filmthre=l),id:"3D",type:"checkbox"},null,512),[[u,e(o).film[e(i)].type.filmthre]])]),t("div",gt,[bt,n(t("input",{"onUpdate:modelValue":s[8]||(s[8]=l=>e(o).film[e(i)].type.imax=l),id:"IMax",type:"checkbox"},null,512),[[u,e(o).film[e(i)].type.imax]])])])])):_("",!0),e(o).film[e(i)]?(d(),m("div",vt,[xt,t("div",Ut,[wt,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":s[9]||(s[9]=l=>e(o).film[e(i)].seo.url=l),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[a,e(o).film[e(i)].seo.url]])]),t("div",kt,[Ft,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":s[10]||(s[10]=l=>e(o).film[e(i)].seo.title=l),id:"title-seo",type:"text",placeholder:"title"},null,512),[[a,e(o).film[e(i)].seo.title]])]),t("div",Vt,[At,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":s[11]||(s[11]=l=>e(o).film[e(i)].seo.keyword=l),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[a,e(o).film[e(i)].seo.keyword]])]),t("div",Lt,[Rt,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":s[12]||(s[12]=l=>e(o).film[e(i)].seo.description=l),id:"description-seo",type:"text",placeholder:"description"},null,512),[[a,e(o).film[e(i)].seo.description]])])])):_("",!0),t("div",Dt,[t("button",{class:"btn btn-success",onClick:s[13]||(s[13]=l=>b(e(i)))},"Редактировать фильм"),t("button",{type:"button",class:"btn ml-5 btn-secondary",onClick:g},"Откат")])],512),[[U,e(o).language=="0"]]),n(t("div",It,[Ct,e(o).UAFilm[e(i)]?(d(),m("div",Mt,[t("div",St,[jt,n(t("input",{"onUpdate:modelValue":s[14]||(s[14]=l=>e(o).UAFilm[e(i)].title=l),style:{width:"50%"},id:"title",type:"text",placeholder:"Название фильма"},null,512),[[a,e(o).UAFilm[e(i)].title]])]),t("div",Ot,[Tt,n(t("textarea",{"onUpdate:modelValue":s[15]||(s[15]=l=>e(o).UAFilm[e(i)].description=l),placeholder:"Опис",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[a,e(o).UAFilm[e(i)].description]])]),t("div",Bt,[$t,(d(!0),m(h,null,y(e(o).UAFilm[e(i)].ava,(l,p)=>(d(),m("div",Gt,[t("img",{src:l.url,alt:""},null,8,Pt)]))),256)),t("div",zt,[t("input",{onChange:s[16]||(s[16]=l=>V(l)),class:"img-top-input",id:"img-top-ua",ref:"fileInput",type:"file",accept:"image/* "},null,544),Et])]),t("div",Nt,[Xt,(d(!0),m(h,null,y(e(o).film[e(i)].gallery,(l,p)=>(d(),m("div",Qt,[t("div",{class:"close",onClick:f=>v(p)},Jt,8,qt),t("img",{src:l.url,alt:""},null,8,Kt)]))),256)),Wt,t("div",Yt,[t("input",{onChange:s[17]||(s[17]=l=>x(l)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),Zt])]),t("div",te,[ee,n(t("input",{"onUpdate:modelValue":s[18]||(s[18]=l=>e(o).UAFilm[e(i)].trailer=l),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Посилання на трейлер"},null,512),[[a,e(o).UAFilm[e(i)].trailer]])]),t("div",le,[oe,t("div",se,[ie,n(t("input",{"onUpdate:modelValue":s[19]||(s[19]=l=>e(o).film[e(i)].type.filmtwo=l),id:"2D",type:"checkbox"},null,512),[[u,e(o).film[e(i)].type.filmtwo]])]),t("div",ne,[de,n(t("input",{"onUpdate:modelValue":s[20]||(s[20]=l=>e(o).film[e(i)].type.filmthre=l),id:"3D",type:"checkbox"},null,512),[[u,e(o).film[e(i)].type.filmthre]])]),t("div",ae,[re,n(t("input",{"onUpdate:modelValue":s[21]||(s[21]=l=>e(o).film[e(i)].type.imax=l),id:"IMax",type:"checkbox"},null,512),[[u,e(o).film[e(i)].type.imax]])])])])):_("",!0),e(o).UAFilm[e(i)]?(d(),m("div",ce,[me,t("div",pe,[ue,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":s[22]||(s[22]=l=>e(o).UAFilm[e(i)].seo.url=l),id:"url-seo",type:"text",placeholder:"URL"},null,512),[[a,e(o).UAFilm[e(i)].seo.url]])]),t("div",_e,[fe,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":s[23]||(s[23]=l=>e(o).UAFilm[e(i)].seo.title=l),id:"title-seo",type:"text",placeholder:"title"},null,512),[[a,e(o).UAFilm[e(i)].seo.title]])]),t("div",he,[ye,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":s[24]||(s[24]=l=>e(o).UAFilm[e(i)].seo.keyword=l),id:"keyword-seo",type:"text",placeholder:"keyword"},null,512),[[a,e(o).UAFilm[e(i)].seo.keyword]])]),t("div",ge,[be,n(t("input",{style:{width:"50%"},"onUpdate:modelValue":s[25]||(s[25]=l=>e(o).UAFilm[e(i)].seo.description=l),id:"description-seo",type:"text",placeholder:"description"},null,512),[[a,e(o).UAFilm[e(i)].seo.description]])])])):_("",!0),t("div",ve,[t("button",{class:"btn btn-success",onClick:s[26]||(s[26]=l=>b(e(i)))},"Редагувати фільм"),t("button",{type:"button",class:"btn ml-5 btn-secondary",onClick:g},"Повернути все")])],512),[[U,e(o).language=="1"]])])}}};export{we as default};

import{f as k,j as w,k as U,r as C,o as d,d as a,u as t,i as F,l as _,e,E as r,G as p,F as f,h,N as m,O as I}from"./index-8f49e414.js";const L={class:"content"},V=e("h2",null,"Редактирования фильма",-1),D={key:1,class:"block-info mt-5"},R={class:"title flex mt-3"},S=e("label",{for:"title"},"Название фильма",-1),M={class:"desctiption flex mt-3"},B=e("label",{for:"desctiption"},"Описание",-1),N={class:"ava flex mt-3"},T=e("p",null,"Главная картинка",-1),j={class:"img"},E=["src"],G={class:"add"},O=e("label",{for:"img-top"},"Загрузить фото",-1),$={class:"photo flex mt-3"},z=e("p",null,"Галерея",-1),P={class:"gallery"},X=["onClick"],q=e("span",null,"X",-1),A=[q],H=["src"],J={class:"add"},K=e("label",{for:"img-bottom"},"Загрузить фото",-1),Q={class:"trailer flex mt-3"},W=e("label",{for:"trailer"},"Ссылка на трейлер",-1),Y={class:"type flex mt-3"},Z=e("p",null,"Тип фильма",-1),ee={class:"one"},te=e("label",{for:"2D"},"2D",-1),le={class:"one"},oe=e("label",{for:"3D"},"3D",-1),ie={class:"one"},se=e("label",{for:"IMax"},"IMax",-1),ne=I('<div class="seo mt-5"><h3>СЕО блок</h3><div class="block"><label for="url-seo">URL</label><input id="url-seo" type="text" placeholder="URL"></div><div class="block"><label for="title-seo">title</label><input id="title-seo" type="text" placeholder="title"></div><div class="block"><label for="keyword-seo">keyword</label><input id="keyword-seo" type="text" placeholder="keyword"></div><div class="block"><label for="description-seo">description</label><input id="description-seo" type="text" placeholder="description"></div></div>',1),de={class:"block-btn mt-5"},pe={__name:"FilmStrId",setup(ae){const l=k(),v=w();let s=null;U(()=>{s=l.film.findIndex(n=>n.nameFilms===v.params.id)});function b(){l.film=[],l.getFilms(),window.scrollTo({top:0,behavior:"smooth"})}function y(n){l.reversed=n,l.newFilms(),window.scrollTo({top:0,behavior:"smooth"})}function x(n){l.deleteGallery.push(l.film[s].gallery[n].name),l.film[s].gallery.splice(n,1)}async function g(n){const i=n.target.files[0],c=new Image;await new Promise(o=>{c.onload=o,c.onerror=o,c.src=URL.createObjectURL(i)}),l.film[s].ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:i,url:URL.createObjectURL(i)})}return(n,i)=>{const c=C("Loader");return d(),a("div",L,[t(l).loading?(d(),F(c,{key:0})):_("",!0),V,t(l).film[t(s)]?(d(),a("div",D,[e("div",R,[S,r(e("input",{"onUpdate:modelValue":i[0]||(i[0]=o=>t(l).film[t(s)].title=o),style:{width:"50%"},id:"title",type:"text",placeholder:"Название фильма"},null,512),[[p,t(l).film[t(s)].title]])]),e("div",M,[B,r(e("textarea",{"onUpdate:modelValue":i[1]||(i[1]=o=>t(l).film[t(s)].description=o),placeholder:"Описание фильма",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[p,t(l).film[t(s)].description]])]),e("div",N,[T,(d(!0),a(f,null,h(t(l).film[t(s)].ava,(o,u)=>(d(),a("div",j,[e("img",{src:o.url,alt:""},null,8,E)]))),256)),e("div",G,[e("input",{onChange:i[2]||(i[2]=o=>g(o)),class:"img-top-input",id:"img-top",ref:"fileInput",type:"file",accept:"image/* "},null,544),O])]),e("div",$,[z,(d(!0),a(f,null,h(t(l).film[t(s)].gallery,(o,u)=>(d(),a("div",P,[e("div",{class:"close",onClick:re=>x(u)},A,8,X),e("img",{src:o.url,alt:""},null,8,H)]))),256)),e("div",J,[e("input",{onChange:i[3]||(i[3]=o=>n.onFileSelected(o)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),K])]),e("div",Q,[W,r(e("input",{"onUpdate:modelValue":i[4]||(i[4]=o=>t(l).film[t(s)].trailer=o),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на трейлер"},null,512),[[p,t(l).film[t(s)].trailer]])]),e("div",Y,[Z,e("div",ee,[te,r(e("input",{"onUpdate:modelValue":i[5]||(i[5]=o=>t(l).film[t(s)].type.filmtwo=o),id:"2D",type:"checkbox"},null,512),[[m,t(l).film[t(s)].type.filmtwo]])]),e("div",le,[oe,r(e("input",{"onUpdate:modelValue":i[6]||(i[6]=o=>t(l).film[t(s)].type.filmthre=o),id:"3D",type:"checkbox"},null,512),[[m,t(l).film[t(s)].type.filmthre]])]),e("div",ie,[se,r(e("input",{"onUpdate:modelValue":i[7]||(i[7]=o=>t(l).film[t(s)].type.imax=o),id:"IMax",type:"checkbox"},null,512),[[m,t(l).film[t(s)].type.imax]])])])])):_("",!0),ne,e("div",de,[e("button",{class:"btn btn-success",onClick:i[8]||(i[8]=o=>y(t(s)))},"Редактировать фильм"),e("button",{type:"button",class:"btn ml-5 btn-secondary",onClick:b},"Откат")])])}}};export{pe as default};

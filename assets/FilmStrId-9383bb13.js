import{f as x,j as y,o as a,d as r,e as t,C as n,D as m,u as e,F as h,h as b,M as u,N as g}from"./index-6729bfec.js";const k={class:"content"},w=t("h2",null,"Создание фильма",-1),U={class:"block-info mt-5"},I={class:"title flex mt-3"},D=t("label",{for:"title"},"Название фильма",-1),F={class:"desctiption flex mt-3"},V=t("label",{for:"desctiption"},"Описание",-1),L={class:"ava flex mt-3"},R=t("p",null,"Главная картинка",-1),M={class:"img"},S=["src"],C={class:"add"},N=t("label",{for:"img-top"},"Загрузить фото",-1),j={class:"photo flex mt-3"},B=t("p",null,"Галерея",-1),O={class:"gallery"},T=["src"],z={class:"add"},E=t("label",{for:"img-bottom"},"Загрузить фото",-1),P={class:"trailer flex mt-3"},q=t("label",{for:"trailer"},"Ссылка на трейлер",-1),A={class:"type flex mt-3"},G=t("p",null,"Тип фильма",-1),H={class:"one"},J=t("label",{for:"2D"},"2D",-1),K={class:"one"},Q=t("label",{for:"3D"},"3D",-1),W={class:"one"},X=t("label",{for:"IMax"},"IMax",-1),Y=g('<div class="seo mt-5"><h3>СЕО блок</h3><div class="block"><label for="url-seo">URL</label><input id="url-seo" type="text" placeholder="URL"></div><div class="block"><label for="title-seo">title</label><input id="title-seo" type="text" placeholder="title"></div><div class="block"><label for="keyword-seo">keyword</label><input id="keyword-seo" type="text" placeholder="keyword"></div><div class="block"><label for="description-seo">description</label><input id="description-seo" type="text" placeholder="description"></div></div><div class="block-btn mt-5"><button class="btn btn-block btn-success">Редактировать фильм</button></div>',2),tt={__name:"FilmStrId",setup(Z){const o=x(),f=y(),s=o.film.findIndex(d=>d.nameFilms===f.params.id);async function v(d){const i=d.target.files[0],l=new Image;await new Promise(c=>{l.onload=c,l.onerror=c,l.src=URL.createObjectURL(i)});const p=Number(f.params.id),_=o.film.find(c=>c.id===parseInt(p));_&&_.ava.splice(0,1,{id:0,name:"ava-"+Date.now(),url:URL.createObjectURL(i)})}return(d,i)=>(a(),r("div",k,[w,t("div",U,[t("div",I,[D,n(t("input",{"onUpdate:modelValue":i[0]||(i[0]=l=>e(o).film[e(s)].title=l),style:{width:"50%"},id:"title",type:"text",placeholder:"Название фильма"},null,512),[[m,e(o).film[e(s)].title]])]),t("div",F,[V,n(t("textarea",{"onUpdate:modelValue":i[1]||(i[1]=l=>e(o).film[e(s)].description=l),placeholder:"Описание фильма",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[m,e(o).film[e(s)].description]])]),t("div",L,[R,(a(!0),r(h,null,b(e(o).film[e(s)].ava,(l,p)=>(a(),r("div",M,[t("img",{src:l.url,alt:""},null,8,S)]))),256)),t("div",C,[t("input",{onChange:i[2]||(i[2]=l=>v(l)),class:"img-top-input",id:"img-top",ref:"fileInput",type:"file",accept:"image/* "},null,544),N])]),t("div",j,[B,(a(!0),r(h,null,b(e(o).film[e(s)].gallery,(l,p)=>(a(),r("div",O,[t("img",{src:l.url,alt:""},null,8,T)]))),256)),t("div",z,[t("input",{onChange:i[3]||(i[3]=l=>d.onFileSelected(l)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),E])]),t("div",P,[q,n(t("input",{"onUpdate:modelValue":i[4]||(i[4]=l=>e(o).film[e(s)].trailer=l),style:{width:"50%"},id:"trailer",type:"text",placeholder:"Ссылка на трейлер"},null,512),[[m,e(o).film[e(s)].trailer]])]),t("div",A,[G,t("div",H,[J,n(t("input",{"onUpdate:modelValue":i[5]||(i[5]=l=>e(o).film[e(s)].type.filmtwo=l),id:"2D",type:"checkbox"},null,512),[[u,e(o).film[e(s)].type.filmtwo]])]),t("div",K,[Q,n(t("input",{"onUpdate:modelValue":i[6]||(i[6]=l=>e(o).film[e(s)].type.filmthre=l),id:"3D",type:"checkbox"},null,512),[[u,e(o).film[e(s)].type.filmthre]])]),t("div",W,[X,n(t("input",{"onUpdate:modelValue":i[7]||(i[7]=l=>e(o).film[e(s)].type.imax=l),id:"IMax",type:"checkbox"},null,512),[[u,e(o).film[e(s)].type.imax]])])])]),Y]))}};export{tt as default};

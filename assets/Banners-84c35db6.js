import{_ as C,a as I,b as x,c as M,r as P,o as _,d as u,u as n,j,n as b,e,F as g,i as f,s as p,T as B,U,v,V as O,p as T,q as D}from"./index-3d0847ba.js";const s=h=>(T("data-v-3b3cd62b"),h=h(),D(),h),F={class:"banners"},N={class:"banners__top"},X=s(()=>e("h2",{class:"banners__top-title"},"На главной верх",-1)),$={class:"block"},q=s(()=>e("h5",null,"Размер 1000 х 190",-1)),z={class:"content"},E={class:"images"},J=["onClick"],A=s(()=>e("span",null,"X",-1)),G=[A],H=["src"],K={class:"url"},Q=s(()=>e("span",null,"URL:",-1)),W=["onUpdate:modelValue"],Y={class:"text"},Z=s(()=>e("span",null,"Text:",-1)),ee=["onUpdate:modelValue"],te={class:"add"},oe=s(()=>e("label",{for:"img-top"},"Загрузить фото",-1)),se={class:"button-norm"},ne=s(()=>e("span",null,"Скорость вращения",-1)),le=s(()=>e("option",{value:"2"},"2",-1)),ie=s(()=>e("option",{value:"4"},"4",-1)),ae=s(()=>e("option",{value:"6"},"6",-1)),de=s(()=>e("option",{value:"10"},"10",-1)),ce=[le,ie,ae,de],re={class:"banners__middle mt-5"},_e=s(()=>e("h2",{class:"banners__top-title"},"Сквозной баннер на фоне",-1)),ue={class:"block"},pe=s(()=>e("h5",null,"Размер 2000 х 3000",-1)),me={class:"content"},he={class:"inputs-user"},ve={class:"one"},be=s(()=>e("label",{for:"input-one"},"Фотография",-1)),ge={class:"one"},fe=s(()=>e("label",{for:"input-two"},"Без фото(цветной фон)",-1)),Be={class:"info-user"},Ue={key:0,class:"photo"},we=["src"],ke={class:"add"},ye=s(()=>e("label",{for:"img-middle"},"Загрузить фото",-1)),Le={key:1,class:"color"},Re={class:"block"},Se=s(()=>e("label",{for:"color"},"Выбрать цвет фона",-1)),Ve={class:"result-color"},Ce=s(()=>e("p",null,"Фон будет такой",-1)),Ie={class:"banners__top mt-5"},xe=s(()=>e("h2",{class:"banners__top-title"},"Новости и Акции",-1)),Me={class:"block"},Pe=s(()=>e("h5",null,"Размер 1000 х 190",-1)),je={class:"content"},Oe={class:"images"},Te=["onClick"],De=s(()=>e("span",null,"X",-1)),Fe=[De],Ne=["src"],Xe={class:"url"},$e=s(()=>e("span",null,"URL:",-1)),qe=["onUpdate:modelValue"],ze={class:"add"},Ee=s(()=>e("label",{for:"img-bottom"},"Загрузить фото",-1)),Je={class:"button-norm"},Ae=s(()=>e("span",null,"Скорость вращения",-1)),Ge=s(()=>e("option",{value:"2"},"2",-1)),He=s(()=>e("option",{value:"4"},"4",-1)),Ke=s(()=>e("option",{value:"6"},"6",-1)),Qe=s(()=>e("option",{value:"10"},"10",-1)),We=[Ge,He,Ke,Qe],Ye={__name:"Banners",setup(h){const c=I(),a=x(),r=M();async function w(m){const l=m.target.files;for(let d=0;d<l.length;d++){const t=l[d],o=new Image;await new Promise(i=>{o.onload=i,o.onerror=i,o.src=URL.createObjectURL(t)}),o.width>=1e3&&o.height>=190?(c.movieBanners.data.push({id:c.movieBanners.data.length,name:"top-"+Date.now(),url:"",urls:"",title:"",image:null}),c.movieBanners.banners.push({id:c.movieBanners.banners.length,image:t,urls:"",title:"",url:URL.createObjectURL(t)})):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}function k(){c.uploadMovieBanners()}async function y(m){const l=m.target.files;for(let d=0;d<l.length;d++){const t=l[d],o=new Image;if(await new Promise(i=>{o.onload=i,o.onerror=i,o.src=URL.createObjectURL(t)}),o.width>=1e3&&o.height>=190){const i=a.middleBanner.banners.findIndex(V=>V.id===d);i>=0?(a.middleBanner.data.splice(i,1,{id:i,name:"middle-"+Date.now(),image:null}),a.middleBanner.banners.splice(i,1,{id:i,image:t,url:URL.createObjectURL(t)})):(a.middleBanner.data.push({id:a.middleBanner.data.length,name:"middle-"+Date.now(),image:null}),a.middleBanner.banners.push({id:d,image:t,url:URL.createObjectURL(t)}))}else alert("Фото должно быть не меньше 1000 x 190 пикселей")}}function L(){a.addMiddleBanners()}async function R(m){const l=m.target.files;for(let d=0;d<l.length;d++){const t=l[d],o=new Image;await new Promise(i=>{o.onload=i,o.onerror=i,o.src=URL.createObjectURL(t)}),o.width>=1e3&&o.height>=190?(r.movieBanners.data.push({id:r.movieBanners.data.length,name:"middle-"+Date.now(),url:"",urls:"",image:null}),r.movieBanners.banners.push({id:r.movieBanners.banners.length,image:t,urls:"",url:URL.createObjectURL(t)})):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}function S(){r.uploadMovieBanners()}return(m,l)=>{const d=P("Loader");return _(),u("div",F,[n(c).loading||n(a).loading||n(r).loading?(_(),j(d,{key:0})):b("",!0),e("div",N,[X,e("div",$,[q,e("div",z,[e("div",E,[(_(!0),u(g,null,f(n(c).movieBanners.banners,(t,o)=>(_(),u("div",{class:"result",key:o},[e("div",{onClick:i=>n(c).deleteMovieBanner(o),class:"close"},G,8,J),e("img",{src:t.url},null,8,H),e("div",K,[Q,p(e("input",{"onUpdate:modelValue":i=>n(c).movieBanners.data[o].urls=i,placeholder:"url",type:"text"},null,8,W),[[v,n(c).movieBanners.data[o].urls]])]),e("div",Y,[Z,p(e("input",{"onUpdate:modelValue":i=>n(c).movieBanners.data[o].title=i,placeholder:"text",type:"text"},null,8,ee),[[v,n(c).movieBanners.data[o].title]])])]))),128))]),e("div",te,[e("input",{class:"img-top-input",id:"img-top",onChange:l[0]||(l[0]=t=>w(t)),ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),oe])]),e("div",se,[ne,p(e("select",{name:"rotation","onUpdate:modelValue":l[1]||(l[1]=t=>n(c).rotationSpeed=t)},ce,512),[[B,n(c).rotationSpeed]]),e("button",{class:"btn btn-success",onClick:k},"Редактировать")])])]),e("div",re,[_e,e("div",ue,[pe,e("div",me,[e("div",he,[e("div",ve,[p(e("input",{value:"1","onUpdate:modelValue":l[2]||(l[2]=t=>n(a).photoPage=t),type:"radio",name:"user",id:"input-one"},null,512),[[U,n(a).photoPage]]),be]),e("div",ge,[p(e("input",{value:"2","onUpdate:modelValue":l[3]||(l[3]=t=>n(a).photoPage=t),type:"radio",name:"user",id:"input-two"},null,512),[[U,n(a).photoPage]]),fe])]),e("div",Be,[n(a).photoPage=="1"?(_(),u("div",Ue,[(_(!0),u(g,null,f(n(a).middleBanner.banners,(t,o)=>(_(),u("div",{class:"result",key:o},[e("img",{src:t.url,alt:""},null,8,we)]))),128)),e("div",ke,[e("input",{class:"img-top-input",id:"img-middle",onChange:l[4]||(l[4]=t=>y(t)),ref:"fileInput",type:"file",accept:"image/* "},null,544),ye])])):b("",!0),n(a).photoPage=="2"?(_(),u("div",Le,[e("div",Re,[p(e("input",{type:"color",id:"color","onUpdate:modelValue":l[5]||(l[5]=t=>n(a).color=t)},null,512),[[v,n(a).color]]),Se]),e("div",Ve,[Ce,e("div",{class:"result-color",style:O([{width:"100px",height:"100px",border:"1px solid black"},{background:n(a).color}])},null,4)])])):b("",!0)])]),e("div",{class:"button-norm"},[e("button",{class:"btn btn-success",onClick:L},"Редактировать")])])]),e("div",Ie,[xe,e("div",Me,[Pe,e("div",je,[e("div",Oe,[(_(!0),u(g,null,f(n(r).movieBanners.banners,(t,o)=>(_(),u("div",{class:"result",key:o},[e("div",{onClick:i=>n(r).deleteMovieBanner(o),class:"close"},Fe,8,Te),e("img",{src:t.url},null,8,Ne),e("div",Xe,[$e,p(e("input",{"onUpdate:modelValue":i=>n(r).movieBanners.data[o].urls=i,placeholder:"url",type:"text"},null,8,qe),[[v,n(r).movieBanners.data[o].urls]])])]))),128))]),e("div",ze,[e("input",{class:"img-top-input",id:"img-bottom",onChange:l[6]||(l[6]=t=>R(t)),ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),Ee])]),e("div",Je,[Ae,p(e("select",{name:"rotation","onUpdate:modelValue":l[7]||(l[7]=t=>n(r).rotationSpeed=t)},We,512),[[B,n(r).rotationSpeed]]),e("button",{class:"btn btn-success",onClick:S},"Редактировать")])])])])}}},et=C(Ye,[["__scopeId","data-v-3b3cd62b"]]);export{et as default};

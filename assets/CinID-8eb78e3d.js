import{_ as z,k as F,S as P,V as T,r as $,o as c,d as u,u as i,j as B,n as y,e as t,t as _,s as f,P as N,v as b,F as h,i as g,g as L,h as C,y as R,x as I,p as Z,q as X}from"./index-4699bc59.js";const a=v=>(Z("data-v-4bd655f6"),v=v(),X(),v),q={class:"content"},E={class:"language",style:{display:"flex","align-items":"center",gap:"20px"}},G={style:{margin:"0"}},H=a(()=>t("option",{value:"0"},"Ru",-1)),J=a(()=>t("option",{value:"1"},"UA",-1)),K=[H,J],Q={key:0,class:"rus"},W={class:"title flex mt-3"},Y=a(()=>t("label",{style:{margin:"0"},for:"title"},"Название кинотеатра",-1)),tt={class:"desctiption flex mt-3"},et=a(()=>t("label",{for:"desctiption"},"Описание",-1)),st={class:"desctiption flex mt-3"},ot=a(()=>t("label",{for:"desctiption"},"Условие",-1)),lt={class:"ava flex mt-3"},at=a(()=>t("p",null,"Логотип",-1)),it={style:{width:"200px",height:"200px"},class:"img"},nt=["src"],dt={class:"add"},rt=a(()=>t("label",{for:"img-top"},"Загрузить фото",-1)),ct={class:"ava flex mt-3"},ut=a(()=>t("p",null,"Главная картинка",-1)),pt={style:{width:"500px",height:"300px"},class:"img"},mt=["src"],_t={class:"add"},ht=a(()=>t("label",{for:"img-ava"},"Загрузить фото",-1)),gt={class:"photo flex mt-3"},ft=a(()=>t("p",null,"Галерея",-1)),bt={class:"gallery"},vt=["onClick"],yt=a(()=>t("span",null,"X",-1)),wt=[yt],Ut=["src"],kt={class:"add"},$t=a(()=>t("label",{for:"img-bottom"},"Загрузить фото",-1)),Lt={class:"zal mt-3"},Ct={class:"table-responsive mt-3"},Rt={class:"table table-striped table-bordered table-hover"},It=a(()=>t("tr",null,[t("td",null,"Номер"),t("td",null,"Имя Зала"),t("td",null,"Дата создания ")],-1)),At=["onClick"],xt={class:"modal-dialog",role:"document"},Mt={class:"modal-content"},jt={class:"modal-header"},St=a(()=>t("h5",{class:"modal-title"},"Вы уверенны что хотите удалить этот зал?",-1)),Ot=a(()=>t("span",{"aria-hidden":"true"},"×",-1)),Vt=[Ot],Dt=a(()=>t("div",{class:"modal-body"}," Вы уверенны что хотите удалить этот зал? ",-1)),zt={class:"modal-footer"},Ft={key:1,class:"ua"},Pt={class:"title flex mt-3"},Tt=a(()=>t("label",{style:{margin:"0"},for:"title"},"Назва кінотеатру",-1)),Bt={class:"desctiption flex mt-3"},Nt=a(()=>t("label",{for:"desctiption"},"Опис",-1)),Zt={class:"desctiption flex mt-3"},Xt=a(()=>t("label",{for:"desctiption"},"Умови",-1)),qt={class:"ava flex mt-3"},Et=a(()=>t("p",null,"Логотип",-1)),Gt={style:{width:"200px",height:"200px"},class:"img"},Ht=["src"],Jt={class:"add"},Kt=a(()=>t("label",{for:"img-top"},"Загрузить фото",-1)),Qt={class:"ava flex mt-3"},Wt=a(()=>t("p",null,"Головна картинка",-1)),Yt={style:{width:"500px",height:"300px"},class:"img"},te=["src"],ee={class:"add"},se=a(()=>t("label",{for:"img-ava"},"Загрузить фото",-1)),oe={class:"photo flex mt-3"},le=a(()=>t("p",null,"Галерея",-1)),ae={class:"gallery"},ie=["onClick"],ne=a(()=>t("span",null,"X",-1)),de=[ne],re=["src"],ce={class:"add"},ue=a(()=>t("label",{for:"img-bottom"},"Загрузить фото",-1)),pe={class:"zal mt-3"},me={class:"table-responsive mt-3"},_e={class:"table table-striped table-bordered table-hover"},he=a(()=>t("tr",null,[t("td",null,"Номер"),t("td",null,"Ім'я Залу"),t("td",null,"Дата створення ")],-1)),ge=["onClick"],fe={class:"modal-dialog",role:"document"},be={class:"modal-content"},ve={class:"modal-header"},ye=a(()=>t("h5",{class:"modal-title"},"Вы уверенны что хотите удалить этот зал?",-1)),we=a(()=>t("span",{"aria-hidden":"true"},"×",-1)),Ue=[we],ke=a(()=>t("div",{class:"modal-body"}," Вы уверенны что хотите удалить этот зал? ",-1)),$e={class:"modal-footer"},Le={data(){return{showModal:!1,currentIndex:0,stockIndex:0,deleteModal:!1}}},Ce=Object.assign(Le,{__name:"CinID",setup(v){const p=F(),A=P(),l=T();function w(){A.push("/admin/cinoteaters-zal")}function x(){l.idRouter=p.params.id,l.recZal()}async function M(o){const e=o.target.files[0],n=new Image;await new Promise(r=>{n.onload=r,n.onerror=r,n.src=URL.createObjectURL(e)}),l.teaters[p.params.id].logo.splice(0,1,{id:0,name:"a-"+Date.now(),image:e,url:URL.createObjectURL(e)})}async function j(o){const e=o.target.files[0],n=new Image;await new Promise(r=>{n.onload=r,n.onerror=r,n.src=URL.createObjectURL(e)}),l.teatersUA[p.params.id].logo.splice(0,1,{id:0,name:"a-"+Date.now(),image:e,url:URL.createObjectURL(e)})}async function S(o){const e=o.target.files[0],n=new Image;await new Promise(r=>{n.onload=r,n.onerror=r,n.src=URL.createObjectURL(e)}),l.teaters[p.params.id].ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:e,url:URL.createObjectURL(e)})}async function O(o){const e=o.target.files[0],n=new Image;await new Promise(r=>{n.onload=r,n.onerror=r,n.src=URL.createObjectURL(e)}),l.teatersUA[p.params.id].ava.splice(0,1,{id:0,name:"ava-"+Date.now(),image:e,url:URL.createObjectURL(e)})}function U(o){l.gallery.splice(o,1)}async function V(o){const e=o.target.files;for(let n=0;n<e.length;n++){const r=e[n],s=new Image;await new Promise(d=>{s.onload=d,s.onerror=d,s.src=URL.createObjectURL(r)}),s.width>=1e3&&s.height>=190?l.teaters[p.params.id].gallery.push({id:l.teaters[p.params.id].gallery.length,image:r,name:"gallery-"+Date.now(),url:URL.createObjectURL(r)}):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}async function D(o){const e=o.target.files;for(let n=0;n<e.length;n++){const r=e[n],s=new Image;await new Promise(d=>{s.onload=d,s.onerror=d,s.src=URL.createObjectURL(r)}),s.width>=1e3&&s.height>=190?l.teatersUA[p.params.id].gallery.push({id:l.teatersUA[p.params.id].gallery.length,image:r,name:"gallery-"+Date.now(),url:URL.createObjectURL(r)}):alert("Фото должно быть не меньше 1000 x 190 пикселей")}}function k(o){l.createZal.splice(o,1)}return(o,e)=>{const n=$("Loader"),r=$("router-link");return c(),u(h,null,[i(l).loading?(c(),B(n,{key:0})):y("",!0),t("h2",null,_(i(l).language=="0"?"Редактирование Кинотеатра":"Редагування Кінотеатру"),1),t("div",q,[t("div",E,[t("p",G,_(i(l).language=="0"?"RUS":"UA"),1),f(t("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>i(l).language=s),name:"laguage",id:""},K,512),[[N,i(l).language]])]),i(l).language=="0"?(c(),u("div",Q,[t("div",W,[Y,f(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>i(l).teaters[o.$route.params.id].title=s),style:{width:"50%"},id:"title",type:"text",placeholder:"Название кинотеатра"},null,512),[[b,i(l).teaters[o.$route.params.id].title]])]),t("div",tt,[et,f(t("textarea",{"onUpdate:modelValue":e[2]||(e[2]=s=>i(l).teaters[o.$route.params.id].description=s),placeholder:"Описание",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[b,i(l).teaters[o.$route.params.id].description]])]),t("div",st,[ot,f(t("textarea",{"onUpdate:modelValue":e[3]||(e[3]=s=>i(l).teaters[o.$route.params.id].info=s),placeholder:"Условие",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[b,i(l).teaters[o.$route.params.id].info]])]),t("div",lt,[at,(c(!0),u(h,null,g(i(l).teaters[o.$route.params.id].logo,(s,d)=>(c(),u("div",it,[t("img",{style:{width:"100%",height:"100%"},src:s.url,alt:""},null,8,nt)]))),256)),t("div",dt,[t("input",{onChange:e[4]||(e[4]=s=>M(s)),class:"img-top-input",id:"img-top",ref:"fileInput",type:"file",accept:"image/* "},null,544),rt])]),t("div",ct,[ut,(c(!0),u(h,null,g(i(l).teaters[o.$route.params.id].ava,(s,d)=>(c(),u("div",pt,[t("img",{style:{width:"100%",height:"100%"},src:s.url,alt:""},null,8,mt)]))),256)),t("div",_t,[t("input",{onChange:e[5]||(e[5]=s=>S(s)),class:"img-top-input",id:"img-ava",ref:"fileInput",type:"file",accept:"image/* "},null,544),ht])]),t("div",gt,[ft,(c(!0),u(h,null,g(i(l).teaters[o.$route.params.id].gallery,(s,d)=>(c(),u("div",bt,[t("div",{class:"close",onClick:m=>U(d)},wt,8,vt),t("img",{src:s.url,alt:""},null,8,Ut)]))),256)),t("div",kt,[t("input",{onChange:e[6]||(e[6]=s=>V(s)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),$t])]),t("div",Lt,[t("div",Ct,[t("table",Rt,[It,(c(!0),u(h,null,g(i(l).teaters[o.$route.params.id].zal,(s,d)=>(c(),u("tr",{key:d},[t("td",null,_(d+1),1),t("td",null,[L(r,{to:{path:`/admin/cinoteaters-cards/${d}`}},{default:C(()=>[R(_(s.title),1)]),_:2},1032,["to"])]),t("td",null,_(s.date),1),t("td",null,[t("button",{class:"btn btn-block btn-danger",onClick:m=>{o.stockIndex=d,o.deleteModal=!0}},"Удалить",8,At)]),t("div",{class:I(["modal fade show",{"d-block":o.deleteModal}]),tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[t("div",xt,[t("div",Mt,[t("div",jt,[St,t("button",{type:"button",class:"close",onClick:e[7]||(e[7]=m=>o.deleteModal=!1)},Vt)]),Dt,t("div",zt,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[8]||(e[8]=m=>o.deleteModal=!1)},"Отмена"),t("button",{type:"button",class:"btn btn-danger",onClick:e[9]||(e[9]=m=>{k(o.stockIndex),o.deleteModal=!1})},"Да")])])])],2)]))),128))])])]),t("button",{onClick:w},"Создать Зал")])):y("",!0),i(l).language=="1"?(c(),u("div",Ft,[t("div",Pt,[Tt,f(t("input",{"onUpdate:modelValue":e[10]||(e[10]=s=>i(l).teatersUA[o.$route.params.id].title=s),style:{width:"50%"},id:"title",type:"text",placeholder:"Название кинотеатра"},null,512),[[b,i(l).teatersUA[o.$route.params.id].title]])]),t("div",Bt,[Nt,f(t("textarea",{"onUpdate:modelValue":e[11]||(e[11]=s=>i(l).teatersUA[o.$route.params.id].description=s),placeholder:"Опис",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[b,i(l).teatersUA[o.$route.params.id].description]])]),t("div",Zt,[Xt,f(t("textarea",{"onUpdate:modelValue":e[12]||(e[12]=s=>i(l).teatersUA[o.$route.params.id].info=s),placeholder:"Умови",style:{width:"100%",height:"100px",resize:"none"},id:"desctiption",cols:"30",rows:"10"},null,512),[[b,i(l).teatersUA[o.$route.params.id].info]])]),t("div",qt,[Et,(c(!0),u(h,null,g(i(l).teatersUA[o.$route.params.id].logo,(s,d)=>(c(),u("div",Gt,[t("img",{style:{width:"100%",height:"100%"},src:s.url,alt:""},null,8,Ht)]))),256)),t("div",Jt,[t("input",{onChange:e[13]||(e[13]=s=>j(s)),class:"img-top-input",id:"img-top",ref:"fileInput",type:"file",accept:"image/* "},null,544),Kt])]),t("div",Qt,[Wt,(c(!0),u(h,null,g(i(l).teatersUA[o.$route.params.id].ava,(s,d)=>(c(),u("div",Yt,[t("img",{style:{width:"100%",height:"100%"},src:s.url,alt:""},null,8,te)]))),256)),t("div",ee,[t("input",{onChange:e[14]||(e[14]=s=>O(s)),class:"img-top-input",id:"img-ava",ref:"fileInput",type:"file",accept:"image/* "},null,544),se])]),t("div",oe,[le,(c(!0),u(h,null,g(i(l).teatersUA[o.$route.params.id].gallery,(s,d)=>(c(),u("div",ae,[t("div",{class:"close",onClick:m=>U(d)},de,8,ie),t("img",{src:s.url,alt:""},null,8,re)]))),256)),t("div",ce,[t("input",{onChange:e[15]||(e[15]=s=>D(s)),class:"img-top-input",id:"img-bottom",ref:"fileInput",type:"file",accept:"image/* ",multiple:""},null,544),ue])]),t("div",pe,[t("div",me,[t("table",_e,[he,(c(!0),u(h,null,g(i(l).teaters[o.$route.params.id].zal,(s,d)=>(c(),u("tr",{key:d},[t("td",null,_(d+1),1),t("td",null,[L(r,{to:{path:`/admin/cinoteaters-cards/${d}`}},{default:C(()=>[R(_(s.title),1)]),_:2},1032,["to"])]),t("td",null,_(s.date),1),t("td",null,[t("button",{class:"btn btn-block btn-danger",onClick:m=>{o.stockIndex=d,o.deleteModal=!0}},"Удалить",8,ge)]),t("div",{class:I(["modal fade show",{"d-block":o.deleteModal}]),tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[t("div",fe,[t("div",be,[t("div",ve,[ye,t("button",{type:"button",class:"close",onClick:e[16]||(e[16]=m=>o.deleteModal=!1)},Ue)]),ke,t("div",$e,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[17]||(e[17]=m=>o.deleteModal=!1)},"Отмена"),t("button",{type:"button",class:"btn btn-danger",onClick:e[18]||(e[18]=m=>{k(o.stockIndex),o.deleteModal=!1})},"Да")])])])],2)]))),128))])])]),t("button",{onClick:w},"Создать Зал")])):y("",!0),t("p",null,_(i(l).teaters[0].title),1),t("button",{class:"btn btn-block btn-success mt-3",onClick:x},"Редактировать кинотеатр")])],64)}}}),Ie=z(Ce,[["__scopeId","data-v-4bd655f6"]]);export{Ie as default};

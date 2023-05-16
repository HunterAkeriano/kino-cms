import{_ as K,T as P,L as Q,f as X,d as tt,x as p,e as et,o as n,g as a,h as t,F as b,k as h,u as o,y as C,C as A,m as r,z as O,t as _,D as k,A as lt,B as st}from"./index-80d2e8a2.js";const d=I=>(lt("data-v-6a778df7"),I=I(),st(),I),nt=d(()=>t("h2",null,"Афиша",-1)),at={class:"table table-striped table-bordered table-hover"},ot=d(()=>t("tr",null,[t("td",null,"Дата"),t("td",null,"Информация"),t("td")],-1)),it={style:{display:"flex","flex-direction":"column"}},dt={style:{width:"100%"}},ut=d(()=>t("tr",null,[t("td",null," Время"),t("td",null," Кинотеатр"),t("td",null," Зал"),t("td",null,"Фильм"),t("td",null,"Цена"),t("td",null,"Тип")],-1)),ct=["onClick"],rt={class:"modal-dialog",role:"document"},vt={class:"modal-content"},pt={class:"modal-header"},_t=d(()=>t("h5",{class:"modal-title"},"Удалить этот сеанс?? ",-1)),mt=d(()=>t("span",{"aria-hidden":"true"},"×",-1)),ft=[mt],yt=d(()=>t("div",{class:"modal-body"}," Вы действительно хотите удалить этот сеанс?? ",-1)),bt={class:"modal-footer"},ht=["onClick"],kt=["onClick"],xt={class:"modal-dialog",role:"document"},Ct={class:"modal-content"},gt={class:"modal-header"},$t=d(()=>t("h5",{class:"modal-title"},"Удалить это расписание?? ",-1)),Dt=d(()=>t("span",{"aria-hidden":"true"},"×",-1)),wt=[Dt],At=d(()=>t("div",{class:"modal-body"}," Вы действительно хотите удалить это расписание?? ",-1)),It={class:"modal-footer"},St={key:0,class:"date mt-5"},Ft=d(()=>t("h4",null,"Выберите дату",-1)),zt=["min"],Tt={key:1,class:"date mt-5"},Vt=d(()=>t("h4",null,"Выберите кинотеатр и зал",-1)),Ut={style:{display:"flex",gap:"40px"},class:"cinoteatr"},Mt=["onClick"],Bt={key:0,class:"zal"},Zt={class:"flex",style:{display:"flex",gap:"20px"}},Lt=["onClick"],Nt={key:2,class:"date mt-5"},Et=d(()=>t("h4",null,"Выберите фильм",-1)),Ot={class:"films"},Rt=["onClick"],Wt={key:3,class:"date mt-5"},Yt=d(()=>t("h4",null,"Установите время, цену и тип фильма",-1)),jt={class:"time",style:{display:"flex",gap:"20px"}},qt=d(()=>t("label",{for:"time"},"Время",-1)),Gt={class:"pay mt-3",style:{display:"flex",gap:"20px"}},Ht=d(()=>t("label",{for:"pay"},"Цена",-1)),Jt={class:"type mt-3",style:{display:"flex",gap:"20px"}},Kt=d(()=>t("label",{for:"type"},"Тип показа",-1)),Pt={key:0,value:"2D"},Qt={key:1,value:"3D"},Xt={key:2,value:"Imax"},te={key:4,class:"date mt-5"},ee=d(()=>t("h4",null,"Выберите кинотеатр и зал",-1)),le={style:{display:"flex",gap:"40px"},class:"cinoteatr"},se=["onClick"],ne={key:0,class:"zal"},ae={class:"flex",style:{display:"flex",gap:"20px"}},oe=["onClick"],ie={key:5,class:"date mt-5"},de=d(()=>t("h4",null,"Выберите фильм",-1)),ue={class:"films"},ce=["onClick"],re={key:6,class:"date mt-5"},ve=d(()=>t("h4",null,"Установите время, цену и тип фильма",-1)),pe={class:"time",style:{display:"flex",gap:"20px"}},_e=d(()=>t("label",{for:"time"},"Время",-1)),me={class:"pay mt-3",style:{display:"flex",gap:"20px"}},fe=d(()=>t("label",{for:"pay"},"Цена",-1)),ye={class:"type mt-3",style:{display:"flex",gap:"20px"}},be=d(()=>t("label",{for:"type"},"Тип показа",-1)),he={key:0,value:"2D"},ke={key:1,value:"3D"},xe={key:2,value:"Imax"},Ce={__name:"AdminAfisha",setup(I){P();const g=Q(),m=X(),e=tt(),x=p(null),f=p(null),v=p(null),$=p(!1),S=p(null);function R(i){e.deleteIndex=i,e.deleteAfisha(),console.log(e.deleteIndex)}const W=et(()=>{const i=new Date;return i.setDate(i.getDate()),i.toISOString().split("T")[0]}),F=p(!1),z=p(!1),T=p(!1);function Y(i){e.pushIndex=i,F.value=!0,console.log(e.pushIndex)}const D=p(!1),Z=p(!1);function j(i,l){const s=e.afisha[l].afisha;s.length>1?(s.splice(i,1),e.pushIndex=l,e.deleteSeans()):console.log("Нельзя удалить последний элемент")}const V=p(!1),U=p(!1),M=p(!1),B=p(!1);function q(i){if(i){const l=new Date(i),s=l.getDate(),u=l.getMonth()+1,c=l.getFullYear();return`${s<10?"0"+s:s}.${u<10?"0"+u:u}.${c}`}return""}function G(i){return m.film.find(l=>l.name===i)}function L(i){x.value=i,f.value=null,e.selectTeatr=i,e.selectZal=null}function N(i){f.value=i,e.selectZal=i}function E(i){v.value=i,e.selectFilm=i}async function H(){e.teatr=g.teaters[e.selectTeatr].title,e.zal=g.teaters[e.selectTeatr].zal[e.selectZal].title,e.film=m.film[e.selectFilm].name,e.time=e.time,e.price=e.price,await e.createAfisha(),B.value=!1,v.value=null,f.value=null,x.value=null}async function J(){e.teatr=g.teaters[e.selectTeatr].title,e.zal=g.teaters[e.selectTeatr].zal[e.selectZal].title,e.film=m.film[e.selectFilm].name,e.time=e.time,e.price=e.price,await e.addAfisha(),v.value=null,f.value=null,x.value=null,F.value=!1,z.value=!1,T.value=!1}return(i,l)=>(n(),a(b,null,[nt,t("table",at,[t("tbody",null,[ot,(n(!0),a(b,null,h(o(e).afisha,(s,u)=>(n(),a("tr",null,[t("td",null,_(q(s.date)),1),(n(!0),a(b,null,h(s.afisha,(c,y)=>(n(),a("td",it,[t("table",dt,[ut,t("tr",null,[t("td",null,_(c.time),1),t("td",null,_(c.teatr),1),t("td",null,_(c.zal),1),t("td",null,_(G(c.film).title),1),t("td",null,_(c.price),1),t("td",null,_(c.type),1),t("td",null,[t("button",{class:"btn btn-block btn-danger",onClick:w=>{D.value=!0,Z.value=y,S.value=u}},"Удалить",8,ct)]),t("div",{class:k(["modal fade show",{"d-block":D.value}]),tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[t("div",rt,[t("div",vt,[t("div",pt,[_t,t("button",{type:"button",class:"close",onClick:l[0]||(l[0]=w=>D.value=!1)},ft)]),yt,t("div",bt,[t("button",{type:"button",class:"btn btn-secondary",onClick:l[1]||(l[1]=w=>D.value=!1)},"Отмена"),t("button",{type:"button",class:"btn btn-danger",onClick:l[2]||(l[2]=w=>{j(Z.value,S.value),D.value=!1})},"Да")])])])],2)])])]))),256)),t("td",null,[t("button",{class:"btn btn-block btn-success",onClick:c=>Y(u)},"Добавить",8,ht)]),t("td",null,[t("button",{class:"btn btn-block btn-danger",onClick:c=>{$.value=!0,S.value=u}},"Удалить",8,kt)]),t("div",{class:k(["modal fade show",{"d-block":$.value}]),tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[t("div",xt,[t("div",Ct,[t("div",gt,[$t,t("button",{type:"button",class:"close",onClick:l[3]||(l[3]=c=>$.value=!1)},wt)]),At,t("div",It,[t("button",{type:"button",class:"btn btn-secondary",onClick:l[4]||(l[4]=c=>$.value=!1)},"Отмена"),t("button",{type:"button",class:"btn btn-danger",onClick:l[5]||(l[5]=c=>{R(S.value),$.value=!1})},"Да")])])])],2)]))),256))])]),t("button",{class:"btn btn-block btn-success",onClick:l[6]||(l[6]=s=>V.value=!0)},"Добавить Афишу"),V.value?(n(),a("div",St,[Ft,C(t("input",{type:"date","onUpdate:modelValue":l[7]||(l[7]=s=>o(e).date=s),min:o(W)},null,8,zt),[[A,o(e).date]]),o(e).date?(n(),a("button",{key:0,onClick:l[8]||(l[8]=s=>{V.value=!1,U.value=!0}),class:"mt-3 btn btn-block btn-success"},"Далее")):r("",!0)])):r("",!0),U.value?(n(),a("div",Tt,[Vt,(n(!0),a(b,null,h(o(g).teaters,(s,u)=>(n(),a("div",Ut,[t("p",{style:{width:"300px"},class:k(["p-style",{selected:x.value===u}]),onClick:c=>L(u)},_(s.title),11,Mt),x.value==u?(n(),a("div",Bt,[t("div",Zt,[(n(!0),a(b,null,h(s.zal,(c,y)=>(n(),a("p",{class:k(["p-style",{selected:f.value===y}]),onClick:w=>N(y),key:y},_(c.title),11,Lt))),128))])])):r("",!0)]))),256)),f.value==0||f.value?(n(),a("button",{key:0,onClick:l[9]||(l[9]=s=>{U.value=!1,M.value=!0}),class:"mt-3 btn btn-block btn-success"},"Далее")):r("",!0)])):r("",!0),M.value?(n(),a("div",Nt,[Et,(n(!0),a(b,null,h(o(m).film,(s,u)=>(n(),a("div",Ot,[t("p",{class:k(["p-style",{selected:v.value===u}]),onClick:c=>E(u)},_(s.title),11,Rt)]))),256)),v.value==0||v.value?(n(),a("button",{key:0,onClick:l[10]||(l[10]=s=>{M.value=!1,B.value=!0}),class:"mt-3 btn btn-block btn-success"},"Создать ")):r("",!0)])):r("",!0),B.value?(n(),a("div",Wt,[Yt,t("div",jt,[qt,C(t("input",{"onUpdate:modelValue":l[11]||(l[11]=s=>o(e).time=s),type:"time",id:"time"},null,512),[[A,o(e).time]])]),t("div",Gt,[Ht,C(t("input",{"onUpdate:modelValue":l[12]||(l[12]=s=>o(e).price=s),type:"text",id:"pay"},null,512),[[A,o(e).price]])]),t("div",Jt,[Kt,C(t("select",{name:"",id:"type","onUpdate:modelValue":l[13]||(l[13]=s=>o(e).typeFilms=s)},[o(m).film[v.value].type.filmtwo?(n(),a("option",Pt,"2D")):r("",!0),o(m).film[v.value].type.filmthre?(n(),a("option",Qt,"3D")):r("",!0),o(m).film[v.value].type.imax?(n(),a("option",Xt,"Imax")):r("",!0)],512),[[O,o(e).typeFilms]])]),t("button",{onClick:H,class:"mt-3 btn btn-block btn-success"},"Создать запись")])):r("",!0),F.value?(n(),a("div",te,[ee,(n(!0),a(b,null,h(o(g).teaters,(s,u)=>(n(),a("div",le,[t("p",{style:{width:"300px"},class:k(["p-style",{selected:x.value===u}]),onClick:c=>L(u)},_(s.title),11,se),x.value==u?(n(),a("div",ne,[t("div",ae,[(n(!0),a(b,null,h(s.zal,(c,y)=>(n(),a("p",{class:k(["p-style",{selected:f.value===y}]),onClick:w=>N(y),key:y},_(c.title),11,oe))),128))])])):r("",!0)]))),256)),f.value==0||f.value?(n(),a("button",{key:0,onClick:l[14]||(l[14]=s=>{F.value=!1,z.value=!0}),class:"mt-3 btn btn-block btn-success"},"Далее")):r("",!0)])):r("",!0),z.value?(n(),a("div",ie,[de,(n(!0),a(b,null,h(o(m).film,(s,u)=>(n(),a("div",ue,[t("p",{class:k(["p-style",{selected:v.value===u}]),onClick:c=>E(u)},_(s.title),11,ce)]))),256)),v.value==0||v.value?(n(),a("button",{key:0,onClick:l[15]||(l[15]=s=>{z.value=!1,T.value=!0}),class:"mt-3 btn btn-block btn-success"},"Создать ")):r("",!0)])):r("",!0),T.value?(n(),a("div",re,[ve,t("div",pe,[_e,C(t("input",{"onUpdate:modelValue":l[16]||(l[16]=s=>o(e).time=s),type:"time",id:"time"},null,512),[[A,o(e).time]])]),t("div",me,[fe,C(t("input",{"onUpdate:modelValue":l[17]||(l[17]=s=>o(e).price=s),type:"text",id:"pay"},null,512),[[A,o(e).price]])]),t("div",ye,[be,C(t("select",{name:"",id:"type","onUpdate:modelValue":l[18]||(l[18]=s=>o(e).typeFilms=s)},[o(m).film[v.value].type.filmtwo?(n(),a("option",he,"2D")):r("",!0),o(m).film[v.value].type.filmthre?(n(),a("option",ke,"3D")):r("",!0),o(m).film[v.value].type.imax?(n(),a("option",xe,"Imax")):r("",!0)],512),[[O,o(e).typeFilms]])]),t("button",{onClick:J,class:"mt-3 btn btn-block btn-success"},"Создать запись")])):r("",!0)],64))}},$e=K(Ce,[["__scopeId","data-v-6a778df7"]]);export{$e as default};

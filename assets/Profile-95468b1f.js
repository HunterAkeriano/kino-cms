import{C as r,l as m,w as p,r as u,o as a,g as s,h as e,u as n,i as v,j as f,m as o,t as b,D as h}from"./index-9c2c99fe.js";const _={class:"block"},x={class:"container"},g={key:0,class:"info pt-5 pl-5",style:{background:"white",padding:"10px 0px"}},y=e("h2",null,"Вы администратор, ваш доступ к админ панели:",-1),k=e("button",{class:"btn mt-3 btn-success"},"Перейти в админ панель",-1),w={key:1,class:"info",style:{background:"white",padding:"10px 0px"}},C=h('<div class="title mt-3"><h2 style="text-align:center;">Информация о пользователе</h2></div><div class="block-user flex-onde mt-5"><div class="left"><div class="name flex"><label for="name">Имя</label><input id="name" type="text" placeholder="Ваше имя"></div><div class="name flex mt-3"><label for="surname">Фамилия</label><input id="surname" type="text" placeholder="Ваша Фамилия"></div><div class="name flex mt-3"><label for="face">Псведоним</label><input id="face" type="text" placeholder="Ваш Псведоним"></div><div class="name flex mt-3"><label for="Email">Email</label><input id="Email" type="text" placeholder="Ваш Email"></div><div class="name flex mt-3"><label for="adress">Адресс</label><input id="adress" type="text" placeholder="Ваш Адресс"></div></div><div class="right"><div class="name flex"><label for="phone">Телефон</label><input id="phone" type="text" placeholder="Ваше Телефон"></div><div class="name mt-5"><h5 style="text-align:center;">Пол</h5><div class="flex"><div class="one flex"><label for="man" name="mans">Мужской</label><input id="man" type="radio" name="mans" placeholder="Ваше Телефон"></div><div class="one flex"><label for="woman" name="mans">Женский</label><input id="woman" type="radio" name="mans" placeholder="Ваше Телефон"></div></div></div><div class="name mt-5"><h5 style="text-align:center;">Сменить пароль</h5><div class="one flex"><label for="pass">Введите новый пароль</label><input id="pass" type="password" placeholder="Новый пароль"></div><div class="one flex mt-3"><label for="pass-2">Повторите новый пароль</label><input id="pass-2" type="password" placeholder="Повторите пароль"></div><button class="btn btn-block btn-danger mt-3">Сменить пароль</button></div></div></div><button class="btn btn-block btn-success mt-5">Обновить данные</button>',3),N=[C],K={__name:"Profile",setup(S){r();const t=localStorage.getItem("admin"),i=m();function d(){i.lang=="0"?document.title="KINO-CMS | Профиль":document.title="KINO-CMS | Профіль"}return d(),p(()=>i.lang,l=>{l=="0"&&(document.title="KINO-CMS | Профиль"),l=="1"&&(document.title="KINO-CMS | Профіль")}),(l,E)=>{const c=u("router-link");return a(),s("div",_,[e("div",x,[n(t)=="true"?(a(),s("div",g,[y,v(c,{to:"/admin/"},{default:f(()=>[k]),_:1})])):o("",!0),n(t)=="false"?(a(),s("div",w,N)):o("",!0)]),e("p",null,b(n(t)==!1),1)])}}};export{K as default};

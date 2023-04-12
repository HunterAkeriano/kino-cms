import{A as u}from"./auth-b91fb5b3.js";import{_ as p,r as g,o,c as a,e as i,a as s,f as d,v as c,n as h,t as m,d as b,w as f,b as v}from"./index-6a08da23.js";const E={data(){return{errorEmail:!0,trueEmail:!1,passValid:!1,passwordError:"",passResult:!1}},methods:{validPass(){if(/[а-яА-ЯЁё]/.test(this.globalStore.authPass)){this.passwordError="Пароль не должен содержать русские буквы",this.passValid=!0;return}if(this.globalStore.authPass.length<6){this.passwordError="Пароль должен содержать не менее 6 символов",this.passValid=!0;return}this.passValid=!1,this.passResult=!0,this.passwordError=""},validateEmail(){/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.globalStore.authEmail)?(this.errorEmail=!0,this.trueEmail=!0):this.errorEmail=!1},login(){this.validateEmail(),this.validPass(),this.trueEmail&&this.passResult&&(this.globalStore.notLogin=!1,this.globalStore.errorPass=!1,this.passResult=!1,this.trueEmail=!1,this.globalStore.defaultError=!1,this.globalStore.login())}},mounted(){this.globalStore=u()},computed:{globalStore(){return u()},userAuth(){return this.globalStore.userAuth}},watch:{userAuth(n){n!==null&&this.$router.push("/")}}},S={class:"block"},k={key:0,class:"eror"},w=s("h2",null,"Не известная ошибка, попробуйте позже",-1),x=[w],y={class:"login-box mt-5"},V=s("div",{class:"login-logo"},[s("a",null,[s("b",null,"Kino"),v("CMS")])],-1),P={class:"card"},A={class:"card-body login-card-body"},C=s("p",{class:"login-box-msg"},"Авторизация",-1),L={class:"input-group mb-3"},R=s("div",{class:"input-group-append"},[s("div",{class:"input-group-text"},[s("span",{class:"fas fa-envelope"})])],-1),z={key:0,class:"emailWrong"},N={key:1,class:"emailWrong"},W={class:"input-group mb-3"},B=s("div",{class:"input-group-append"},[s("div",{class:"input-group-text"},[s("span",{class:"fas fa-lock"})])],-1),Z={key:2,class:"passWrong"},D={key:3,class:"passWrong"},M={class:"row"},T={class:"col-6"},U={class:"col-6"},K=s("button",{class:"btn btn-block btn-success"},"Регистрация",-1);function j(n,e,q,F,l,t){const _=g("router-link");return o(),a("div",S,[t.globalStore.defaultError?(o(),a("div",k,x)):i("",!0),s("div",y,[V,s("div",P,[s("div",A,[C,s("div",null,[s("div",L,[d(s("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>t.globalStore.authEmail=r),class:h([{error:!l.errorEmail},"form-control email"]),type:"email",placeholder:"Email"},null,2),[[c,t.globalStore.authEmail]]),R]),l.errorEmail?i("",!0):(o(),a("h3",z,"Недопустимый email")),t.globalStore.notLogin?(o(),a("h3",N,"Данного аккаунта нет")):i("",!0),s("div",W,[d(s("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>t.globalStore.authPass=r),class:h([{eror:l.passValid},"form-control pass"]),type:"password",placeholder:"Password"},null,2),[[c,t.globalStore.authPass]]),B]),l.passwordError?(o(),a("h3",Z,m(l.passwordError),1)):i("",!0),t.globalStore.errorPass?(o(),a("h3",D,"Пароль не верный")):i("",!0),s("div",M,[s("div",T,[s("button",{onClick:e[2]||(e[2]=(...r)=>t.login&&t.login(...r)),class:"btn btn-primary btn-block"},"Логин")]),s("div",U,[b(_,{to:"/register"},{default:f(()=>[K]),_:1})])])])])])])])}const I=p(E,[["render",j]]);export{I as default};

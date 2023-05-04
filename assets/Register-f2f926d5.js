import{l as f,w as b,o,d as i,e as s,t as l,u as n,s as p,v as h,x as g,n as d,y as _,A as m}from"./index-c1fca2e6.js";const E={class:"block"},v={class:"register-box mt-5"},S=s("div",{class:"register-logo"},[s("a",{href:"../../index2.html"},[s("b",null,"Kino"),_("CMS")])],-1),w={class:"card"},R={class:"card-body register-card-body"},P={class:"login-box-msg"},y={class:"input-group mb-3"},k=s("div",{class:"input-group-append"},[s("div",{class:"input-group-text"},[s("span",{class:"fas fa-envelope"})])],-1),V={key:0,class:"erorrEmail"},A={key:1,class:"erorrEmail"},C={class:"input-group mb-3"},N=s("div",{class:"input-group-append"},[s("div",{class:"input-group-text"},[s("span",{class:"fas fa-lock"})])],-1),M={key:2,class:"erorrPass"},K={class:"input-group mb-3"},O=s("div",{class:"input-group-append"},[s("div",{class:"input-group-text"},[s("span",{class:"fas fa-lock"})])],-1),z={key:3,class:"erorrPass"},I={class:"row"},T={class:"col-12"},B={data(){return{errorEmail:!0,emailResult:!1,passResult:!1,passwordError:"",passValid:!1,rePass:"",rePassErorr:!1,trueReg:!1}},mounted(){this.globalStore=m()},computed:{globalStore(){return m()},userAuth(){return this.globalStore.userAuth}},watch:{userAuth(u){u!==null&&!this.globalStore.admin&&this.$router.push("/profile")}},methods:{validPass(){if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.globalStore.email)?(this.errorEmail=!0,this.emailResult=!0):this.errorEmail=!1,/[а-яА-ЯЁё]/.test(this.globalStore.password)){this.passwordError="Пароль не должен содержать русские буквы",this.passValid=!0,this.passResult=!1;return}if(this.globalStore.password.length<6){this.passwordError="Пароль должен содержать не менее 6 символов",this.passValid=!0,this.passResult=!1;return}this.passResult=!0,this.passValid=!1,this.passwordError=""},register(){this.validPass(),this.globalStore.password!==this.rePass?(this.rePassErorr=!0,this.passResult=!1):this.rePassErorr=!1,this.emailResult&&this.passResult&&(this.globalStore.register(),this.globalStore.usedEmail=!1,setTimeout(this.sent,1e3))},sent(){this.globalStore.usedEmail?this.trueReg=!1:(this.trueReg=!0,this.globalStore.usedEmail=!1,this.rePass="",this.emailResult=!1,this.passResult=!1)}}},Z=Object.assign(B,{__name:"Register",setup(u){const t=f();function c(){t.lang=="0"?document.title="KINO-CMS | Регистрация":document.title="KINO-CMS | Регістрація"}return c(),b(()=>t.lang,e=>{e=="0"&&(document.title="KINO-CMS | Регистрация"),e=="1"&&(document.title="KINO-CMS | Регістрація")}),(e,a)=>(o(),i("div",E,[s("div",v,[S,s("div",w,[s("div",R,[s("p",P,l(n(t).lang=="0"?"Регистрация нового пользователя":"Реєстрація нового користувача"),1),s("div",null,[s("div",y,[p(s("input",{"onUpdate:modelValue":a[0]||(a[0]=r=>e.globalStore.email=r),class:g([{error:!e.errorEmail},"form-control email"]),type:"email",placeholder:"Email"},null,2),[[h,e.globalStore.email]]),k]),e.errorEmail?d("",!0):(o(),i("h3",V,l(n(t).lang=="0"?"Не допустимый email":"Не припустимий email"),1)),e.globalStore.usedEmail?(o(),i("h3",A,l(n(t).lang=="0"?"Email уже используется":"Email вже використовується"),1)):d("",!0),s("div",C,[p(s("input",{"onUpdate:modelValue":a[1]||(a[1]=r=>e.globalStore.password=r),class:g([{error:e.passValid},"form-control pass"]),type:"password",placeholder:"Password"},null,2),[[h,e.globalStore.password]]),N]),e.passwordError?(o(),i("h3",M,l(e.passwordError),1)):d("",!0),s("div",K,[p(s("input",{"onUpdate:modelValue":a[2]||(a[2]=r=>e.rePass=r),class:g([{error:e.rePassErorr},"form-control rePass"]),type:"password",placeholder:"Retype password"},null,2),[[h,e.rePass]]),O]),e.rePassErorr?(o(),i("h3",z,l(n(t).lang=="0"?"Пароли не сходяться":"Паролі не співпадають"),1)):d("",!0),s("div",I,[s("div",T,[s("button",{onClick:a[3]||(a[3]=(...r)=>e.register&&e.register(...r)),type:"submit",class:"btn btn-primary btn-block"},l(n(t).lang=="0"?"Регистрация":"Реєстрація"),1)])])])])])])]))}});export{Z as default};

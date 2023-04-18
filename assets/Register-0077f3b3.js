import{_ as h,A as c,g as a,i as o,j as s,s as d,v as n,x as p,y as i,t as m,z as g}from"./index-86f8b5da.js";const _={data(){return{errorEmail:!0,emailResult:!1,passResult:!1,passwordError:"",passValid:!1,rePass:"",rePassErorr:!1,trueReg:!1}},mounted(){this.globalStore=c()},computed:{globalStore(){return c()},userAuth(){return this.globalStore.userAuth}},watch:{userAuth(u){u!==null&&!this.globalStore.admin&&this.$router.push("/profile")}},methods:{validPass(){if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.globalStore.email)?(this.errorEmail=!0,this.emailResult=!0):this.errorEmail=!1,/[а-яА-ЯЁё]/.test(this.globalStore.password)){this.passwordError="Пароль не должен содержать русские буквы",this.passValid=!0,this.passResult=!1;return}if(this.globalStore.password.length<6){this.passwordError="Пароль должен содержать не менее 6 символов",this.passValid=!0,this.passResult=!1;return}this.passResult=!0,this.passValid=!1,this.passwordError=""},register(){this.validPass(),this.globalStore.password!==this.rePass?(this.rePassErorr=!0,this.passResult=!1):this.rePassErorr=!1,this.emailResult&&this.passResult&&(this.globalStore.register(),this.globalStore.usedEmail=!1,setTimeout(this.sent,1e3))},sent(){this.globalStore.usedEmail?this.trueReg=!1:(this.trueReg=!0,this.globalStore.usedEmail=!1,this.rePass="",this.emailResult=!1,this.passResult=!1)}}},f={class:"block"},b={class:"register-box mt-5"},v=s("div",{class:"register-logo"},[s("a",{href:"../../index2.html"},[s("b",null,"Kino"),g("CMS")])],-1),E={class:"card"},S={class:"card-body register-card-body"},R=s("p",{class:"login-box-msg"},"Регистрация нового пользователя",-1),w={class:"input-group mb-3"},y=s("div",{class:"input-group-append"},[s("div",{class:"input-group-text"},[s("span",{class:"fas fa-envelope"})])],-1),P={key:0,class:"erorrEmail"},x={key:1,class:"erorrEmail"},k={class:"input-group mb-3"},V=s("div",{class:"input-group-append"},[s("div",{class:"input-group-text"},[s("span",{class:"fas fa-lock"})])],-1),A={key:2,class:"erorrPass"},z={class:"input-group mb-3"},C=s("div",{class:"input-group-append"},[s("div",{class:"input-group-text"},[s("span",{class:"fas fa-lock"})])],-1),B={key:3,class:"erorrPass"},N={class:"row"},T={class:"col-12"};function U(u,e,Z,D,r,t){return a(),o("div",f,[s("div",b,[v,s("div",E,[s("div",S,[R,s("div",null,[s("div",w,[d(s("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.globalStore.email=l),class:p([{error:!r.errorEmail},"form-control email"]),type:"email",placeholder:"Email"},null,2),[[n,t.globalStore.email]]),y]),r.errorEmail?i("",!0):(a(),o("h3",P,"Вы ввели неккоретный email")),t.globalStore.usedEmail?(a(),o("h3",x,"Email уже используется")):i("",!0),s("div",k,[d(s("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.globalStore.password=l),class:p([{error:r.passValid},"form-control pass"]),type:"password",placeholder:"Password"},null,2),[[n,t.globalStore.password]]),V]),r.passwordError?(a(),o("h3",A,m(r.passwordError),1)):i("",!0),s("div",z,[d(s("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>r.rePass=l),class:p([{error:r.rePassErorr},"form-control rePass"]),type:"password",placeholder:"Retype password"},null,2),[[n,r.rePass]]),C]),r.rePassErorr?(a(),o("h3",B,"Пароли не сходяться")):i("",!0),s("div",N,[s("div",T,[s("button",{onClick:e[3]||(e[3]=(...l)=>t.register&&t.register(...l)),type:"submit",class:"btn btn-primary btn-block"},"Регистрация")])])])])])])])}const M=h(_,[["render",U]]);export{M as default};

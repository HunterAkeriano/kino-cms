import{d as h,c as m,a as _,_ as g,o as l,b as i,e as s,w as n,v as c,n as u,f as d,t as b,g as f}from"./index-35d84254.js";const p=h({id:"AuthStore",state:()=>({user:null,email:"",password:"",usedEmail:!1}),actions:{async register(){m(_,this.email,this.password).then(async o=>{this.user=o.user,this.user.email,this.password}).catch(o=>{switch(o.code){case"auth/invalid-email":this.error="errors.invalidEmail";break;case"auth/email-already-in-use":this.usedEmail=!0;break;case"auth/weak-password":this.error="errors.weakPassword";break;default:this.error="errors.signupDefault";break}})}}});const E={data(){return{errorEmail:!0,passwordError:"",passValid:!1,rePass:"",rePassErorr:!1}},mounted(){this.globalStore=p()},computed:{globalStore(){return p()}},methods:{register(){if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.globalStore.email)?this.errorEmail=!0:this.errorEmail=!1,this.globalStore.password!==this.rePass?this.rePassErorr=!0:this.rePassErorr=!1,!this.rePassErorr&&this.errorEmail&&!this.passValid&&(this.globalStore.usedEmail=!1,this.globalStore.register()),/[а-яА-ЯЁё]/.test(this.globalStore.password)){this.passwordError="Пароль не должен содержать русские буквы",this.passValid=!0;return}if(this.globalStore.password.length<6){this.passwordError="Пароль должен содержать не менее 6 символов",this.passValid=!0;return}this.passValid=!1,this.passwordError=""}}},w={class:"block"},v={class:"register-box mt-5"},S=s("div",{class:"register-logo"},[s("a",{href:"../../index2.html"},[s("b",null,"Kino"),f("CMS")])],-1),y={class:"card"},k={class:"card-body register-card-body"},P=s("p",{class:"login-box-msg"},"Регистрация нового пользователя",-1),x={class:"input-group mb-3"},V=s("div",{class:"input-group-append"},[s("div",{class:"input-group-text"},[s("span",{class:"fas fa-envelope"})])],-1),A={key:0,class:"erorrEmail"},R={key:1,class:"erorrEmail"},z={class:"input-group mb-3"},C=s("div",{class:"input-group-append"},[s("div",{class:"input-group-text"},[s("span",{class:"fas fa-lock"})])],-1),U={key:2,class:"erorrPass"},B={class:"input-group mb-3"},D=s("div",{class:"input-group-append"},[s("div",{class:"input-group-text"},[s("span",{class:"fas fa-lock"})])],-1),N={key:3,class:"erorrPass"},Z={class:"row"},L={class:"col-12"};function M(o,r,T,K,e,a){return l(),i("div",w,[s("div",v,[S,s("div",y,[s("div",k,[P,s("div",null,[s("div",x,[n(s("input",{"onUpdate:modelValue":r[0]||(r[0]=t=>a.globalStore.email=t),class:u([{error:!e.errorEmail,error:a.globalStore.usedEmail},"form-control email"]),type:"email",placeholder:"Email"},null,2),[[c,a.globalStore.email]]),V]),e.errorEmail?d("",!0):(l(),i("h3",A,"Вы ввели неккоретный email")),a.globalStore.usedEmail?(l(),i("h3",R,"Email уже используется")):d("",!0),s("div",z,[n(s("input",{"onUpdate:modelValue":r[1]||(r[1]=t=>a.globalStore.password=t),class:u([{error:e.passValid},"form-control pass"]),type:"password",placeholder:"Password"},null,2),[[c,a.globalStore.password]]),C]),e.passwordError?(l(),i("h3",U,b(e.passwordError),1)):d("",!0),s("div",B,[n(s("input",{"onUpdate:modelValue":r[2]||(r[2]=t=>e.rePass=t),class:u([{error:e.rePassErorr},"form-control rePass"]),type:"password",placeholder:"Retype password"},null,2),[[c,e.rePass]]),D]),e.rePassErorr?(l(),i("h3",N,"Пароли не сходяться")):d("",!0),s("div",Z,[s("div",L,[s("button",{onClick:r[3]||(r[3]=(...t)=>a.register&&a.register(...t)),type:"submit",class:"btn btn-primary btn-block"},"Register")])])])])])])])}const j=g(E,[["render",M]]);export{j as default};

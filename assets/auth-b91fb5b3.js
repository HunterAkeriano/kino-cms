import{g as t,h as r,i as a,s as i,j as u,k as h,l as o}from"./index-6a08da23.js";const n=t({id:"AuthStore",state:()=>({user:null,userAuth:null,email:"",password:"",authEmail:"",authPass:"",usedEmail:!1,trueReg:!1,notLogin:!1,errorPass:!1,defaultError:!1}),actions:{async register(){r(a,this.email,this.password).then(async s=>{this.user=s.user;const e={email:this.user.email,password:this.password,name:"",surname:""};await i(u(o,"users","base-"+Date.now()),e)}).catch(s=>{switch(s.code){case"auth/email-already-in-use":this.usedEmail=!0;break;default:this.usedEmail=!1;break}})},async login(){this.errorMessage="",h(a,this.authEmail,this.authPass).then(s=>{this.userAuth=s.user}).catch(s=>{switch(s.code){case"auth/user-not-found":this.notLogin=!0;break;case"auth/wrong-password":this.errorPass=!0;break;default:this.defaultError=!0;break}})}}});export{n as A};

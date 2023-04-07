import{h as t,T as P,p as v}from"./hooks.module.da6d90ff.js";import{a as u}from"./js.cookie.cf83ad76.js";import{T as n}from"./constants.007bcfeb.js";import{S as C}from"./Spinner.a1a765f7.js";import{o as e}from"./jsxRuntime.module.760e3403.js";import"./preact.module.e54f245b.js";function I(){const[p,y]=t(null),[m,f]=t(""),[d,w]=t(""),[c,g]=t(""),[l,i]=t(),[h,a]=t(!1),N=s=>{if(s.preventDefault(),a(!0),d!==c){i({type:"error",message:"Passwords do not match"}),a(!1);return}const o=new Headers;o.append("Content-Type","application/json"),o.append("Cookie",`${n}=${u.get(n)}`),fetch("http://localhost:8080/v1-update-password",{method:"POST",credentials:"include",headers:o,body:JSON.stringify({oldPassword:p==="email"?m:"social-auth",password:d,confirmPassword:c})}).then(async r=>{const x=await r.json();if(r.ok)return x;throw new Error(x.message)}).then(r=>{a(!1),f(""),w(""),g(""),b(),i({type:"success",message:"Password updated successfully"})}).catch(r=>{a(!1),i({type:"error",message:r.message})})},b=P(async()=>{a(!0);const s=new Headers;s.append("Content-Type","application/json"),s.append("Cookie",`${n}=${u.get(n)}`);try{const o=await fetch("http://localhost:8080/v1-me",{method:"POST",credentials:"include",headers:s}),r=await o.json();if(r.status===401&&(u.remove(n),window.location.href="/login"),o.ok)y(r.authProvider);else throw new Error(r.message)}catch(o){i({type:"error",message:o?.message||"Something went wrong"})}a(!1)},[]);return v(()=>{b()},[]),e("form",{onSubmit:N,children:[e("h2",{className:"text-3xl font-bold sm:text-4xl",children:"Password"}),e("p",{className:"mt-2",children:"Manage settings for your account passwords"}),e("div",{className:"mt-8 space-y-4",children:[p==="email"&&e("div",{className:"flex w-full flex-col",children:[e("label",{for:"current-password",className:"text-sm leading-none text-slate-500",children:"Current Password"}),e("input",{type:"password",name:"current-password",id:"current-password",className:"mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none transition duration-150 ease-in-out placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,minLength:6,placeholder:"Current password",value:m,onInput:s=>f(s.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"new-password",className:"text-sm leading-none text-slate-500",children:"New Password"}),e("input",{type:"password",name:"new-password",id:"new-password",className:"mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none transition duration-150 ease-in-out placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,minLength:6,placeholder:"New password",value:d,onInput:s=>w(s.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"new-password-confirmation",className:"text-sm leading-none text-slate-500",children:"New Password Confirm"}),e("input",{type:"password",name:"new-password-confirmation",id:"new-password-confirmation",className:"mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none transition duration-150 ease-in-out placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,minLength:6,placeholder:"New password confirm",value:c,onInput:s=>g(s.target.value)})]}),l&&e("div",{className:`mt-2 rounded-lg p-2 ${l.type==="error"?"bg-red-100 text-red-700":l.type==="success"?"bg-green-100 text-green-700":"bg-blue-100 text-blue-700"}`,children:l.message}),e("button",{className:"!mt-5 inline-flex h-10 min-w-[120px] items-center justify-center rounded-lg border border-slate-300 bg-black p-2 px-4 text-sm font-medium text-white outline-none transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",type:"submit",disabled:h,children:h?e(C,{className:"text-white"}):"Change"})]})]})}export{I as default};

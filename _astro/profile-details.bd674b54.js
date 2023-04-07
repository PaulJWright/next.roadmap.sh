import{h as l,p as u}from"./hooks.module.da6d90ff.js";import{a as m}from"./js.cookie.cf83ad76.js";import{T as h}from"./constants.007bcfeb.js";import{o as r}from"./jsxRuntime.module.760e3403.js";import"./preact.module.e54f245b.js";new TextEncoder;const d=new TextDecoder,p=e=>{const t=atob(e),o=new Uint8Array(t.length);for(let a=0;a<t.length;a++)o[a]=t.charCodeAt(a);return o},f=e=>{let t=e;t instanceof Uint8Array&&(t=d.decode(t)),t=t.replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,"");try{return p(t)}catch{throw new TypeError("The input to be decoded is not correctly encoded.")}};class y extends Error{static get code(){return"ERR_JOSE_GENERIC"}constructor(t){var o;super(t),this.code="ERR_JOSE_GENERIC",this.name=this.constructor.name,(o=Error.captureStackTrace)===null||o===void 0||o.call(Error,this,this.constructor)}}class c extends y{constructor(){super(...arguments),this.code="ERR_JWT_INVALID"}static get code(){return"ERR_JWT_INVALID"}}function b(e){return typeof e=="object"&&e!==null}function w(e){if(!b(e)||Object.prototype.toString.call(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}const g=f;function E(e){if(typeof e!="string")throw new c("JWTs must use Compact JWS serialization, JWT must be a string");const{1:t,length:o}=e.split(".");if(o===5)throw new c("Only JWTs using Compact JWS serialization can be decoded");if(o!==3)throw new c("Invalid JWT");if(!t)throw new c("JWTs must contain a payload");let a;try{a=g(t)}catch{throw new c("Failed to parse the base64url encoded payload")}let n;try{n=JSON.parse(d.decode(a))}catch{throw new c("Failed to parse the decoded payload as JSON")}if(!w(n))throw new c("Invalid JWT Claims Set");return n}function N(e){return E(e)}const O=()=>{const[e,t]=l(null),[o,a]=l(!0);return u(()=>{const n=m.get(h),s=n?N(n):null;t(s),a(!1)},[]),{user:e,isLoading:o}};function I(){const{user:e,isLoading:t}=O();return r("div",{className:"py-10 pb-20",children:[r("h1",{className:"text-3xl font-bold sm:text-4xl",children:"Profile"}),r("p",{className:"mt-2",children:"Here you can view your profile details."}),r("div",{className:"mt-5 space-y-4",children:[r("div",{children:[r("label",{className:"text-slate-500",children:"Name"}),r("div",{className:"mt-1",children:t||!e?r(i,{}):r("h2",{className:"text-xl font-medium text-slate-800",children:e?.name})})]}),r("div",{children:[r("label",{className:"text-slate-500",children:"Email"}),r("div",{className:"mt-1",children:t||!e?r(i,{className:"w-64"}):r("h2",{className:"text-xl font-medium text-slate-800",children:e?.email})})]})]})]})}function i({className:e}){return r("div",{className:`h-7 w-36 animate-pulse rounded-md bg-slate-100 ${e}`})}export{I as default};

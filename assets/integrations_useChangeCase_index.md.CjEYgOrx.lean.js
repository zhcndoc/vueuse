import{_ as O,a as j}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as U}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as $}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{A as f,a3 as o,r as V,d as W,z as v,i as A,o as C,F as E,j as k,a2 as x,O as M,al as N,t as F,H as B,a5 as K,Z as G,g as d,Y as w,y as T,w as z}from"./chunks/vue.DQfvmmyQ.js";import{_ as X}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";const H=new RegExp("([\\p{Ll}\\d])(\\p{Lu})","gu"),J=new RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])","gu"),Y=new RegExp("(\\d)\\p{Ll}|(\\p{L})\\d","u"),Z=/[^\p{L}\d]+/giu,R="$1\0$2",P="";function b(i){let s=i.trim();s=s.replace(H,R).replace(J,R),s=s.replace(Z,"\0");let a=0,t=s.length;for(;s.charAt(a)==="\0";)a++;if(a===t)return[];for(;s.charAt(t-1)==="\0";)t--;return s.slice(a,t).split(/\0/g)}function S(i){const s=b(i);for(let a=0;a<s.length;a++){const t=s[a],e=Y.exec(t);if(e){const n=e.index+(e[1]??e[2]).length;s.splice(a,1,t.slice(0,n),t.slice(n))}}return s}function g(i,s){const[a,t,e]=r(i,s);return a+t.map(c(s==null?void 0:s.locale)).join((s==null?void 0:s.delimiter)??" ")+e}function q(i,s){const[a,t,e]=r(i,s),n=c(s==null?void 0:s.locale),l=y(s==null?void 0:s.locale),h=s!=null&&s.mergeAmbiguousCharacters?D(n,l):L(n,l);return a+t.map((p,u)=>u===0?n(p):h(p,u)).join((s==null?void 0:s.delimiter)??"")+e}function Q(i,s){const[a,t,e]=r(i,s),n=c(s==null?void 0:s.locale),l=y(s==null?void 0:s.locale),h=s!=null&&s.mergeAmbiguousCharacters?D(n,l):L(n,l);return a+t.map(h).join((s==null?void 0:s.delimiter)??"")+e}function ss(i,s){return _(i,{delimiter:"_",...s})}function _(i,s){const[a,t,e]=r(i,s),n=c(s==null?void 0:s.locale),l=y(s==null?void 0:s.locale);return a+t.map(D(n,l)).join((s==null?void 0:s.delimiter)??" ")+e}function is(i,s){const[a,t,e]=r(i,s);return a+t.map(y(s==null?void 0:s.locale)).join((s==null?void 0:s.delimiter)??"_")+e}function as(i,s){return g(i,{delimiter:".",...s})}function es(i,s){return g(i,{delimiter:"-",...s})}function ns(i,s){return g(i,{delimiter:"/",...s})}function ts(i,s){const[a,t,e]=r(i,s),n=c(s==null?void 0:s.locale),l=y(s==null?void 0:s.locale),h=D(n,l);return a+t.map((p,u)=>u===0?h(p):n(p)).join((s==null?void 0:s.delimiter)??" ")+e}function ls(i,s){return g(i,{delimiter:"_",...s})}function hs(i,s){return _(i,{delimiter:"-",...s})}function c(i){return i===!1?s=>s.toLowerCase():s=>s.toLocaleLowerCase(i)}function y(i){return i===!1?s=>s.toUpperCase():s=>s.toLocaleUpperCase(i)}function D(i,s){return a=>`${s(a[0])}${i(a.slice(1))}`}function L(i,s){return(a,t)=>{const e=a[0];return(t>0&&e>="0"&&e<="9"?"_"+e:s(e))+i(a.slice(1))}}function r(i,s={}){const a=s.split??(s.separateNumbers?S:b),t=s.prefixCharacters??P,e=s.suffixCharacters??P;let n=0,l=i.length;for(;n<i.length;){const h=i.charAt(n);if(!t.includes(h))break;n++}for(;l>n;){const h=l-1,p=i.charAt(h);if(!e.includes(p))break;l=h}return[i.slice(0,n),a(i.slice(n,l)),i.slice(l)]}const I=Object.freeze(Object.defineProperty({__proto__:null,camelCase:q,capitalCase:_,constantCase:is,dotCase:as,kebabCase:es,noCase:g,pascalCase:Q,pascalSnakeCase:ss,pathCase:ns,sentenceCase:ts,snakeCase:ls,split:b,splitSeparateNumbers:S,trainCase:hs},Symbol.toStringTag,{value:"Module"})),m=Object.entries(I).filter(([i,s])=>typeof s=="function"&&i.endsWith("Case")).reduce((i,[s,a])=>(i[s]=a,i),{});function ks(i,s,a){const t=f(()=>{const n=o(s);if(!m[n])throw new Error(`Invalid change case type "${n}"`);return n});if(typeof i=="function")return f(()=>m[t.value](o(i),o(a)));const e=V(i);return f({get(){return m[t.value](e.value,o(a))},set(n){e.value=n}})}const ps=["value"],rs={lang:"yaml"},ds=W({__name:"demo",setup(i){const s=Object.keys(I).filter(n=>n.endsWith("Case")),a=v("helloWorld"),t=v(s[0]),e=ks(a,t);return(n,l)=>(C(),A(E,null,[k("div",null,[(C(!0),A(E,null,M(B(s),h=>(C(),A("label",{key:h,class:"radio"},[x(k("input",{"onUpdate:modelValue":l[0]||(l[0]=p=>t.value=p),value:h,type:"radio"},null,8,ps),[[N,t.value]]),k("span",null,F(h),1)]))),128))]),x(k("input",{"onUpdate:modelValue":l[1]||(l[1]=h=>a.value=h),type:"text"},null,512),[[K,a.value]]),k("pre",rs,F(B(e)),1)],64))}}),gs=X(ds,[["__scopeId","data-v-f6a31fcc"]]),cs=`<script setup lang="ts">
import type { ChangeCaseType } from '@vueuse/integrations'
import { useChangeCase } from '@vueuse/integrations'
import * as ChangeCase from 'change-case'
import { shallowRef } from 'vue'

const transforms: any = Object.keys(ChangeCase).filter(v => v.endsWith('Case'))
const input = shallowRef('helloWorld')
const type = shallowRef<ChangeCaseType>(transforms[0])
const changeCase = useChangeCase(input, type)
<\/script>

<template>
  <div>
    <label v-for="item in transforms" :key="item" class="radio">
      <input v-model="type" :value="item" type="radio">
      <span>{{ item }}</span>
    </label>
  </div>
  <input v-model="input" type="text">
  <pre lang="yaml">{{ changeCase }}</pre>
</template>

<style scoped lang="postcss">
input {
  --tw-ring-offset-width: 1px !important;
  --tw-ring-color: #8885 !important;
  --tw-ring-offset-color: transparent !important;
}

.radio {
  width: 9rem;
  @apply ml-2;
  @apply inline-flex items-center my-auto cursor-pointer select-none;
}

.radio input {
  appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  @apply bg-gray-400/30;
  @apply rounded-full h-4 w-4 select-none relative;
  @apply mr-1;
}

.radio input:checked::after {
  content: '';
  @apply absolute inset-[3px] rounded-full bg-primary;
}

.checkbox span {
  @apply ml-1.5 text-13px opacity-70;
}
</style>
`,ys={class:"demo-source-link"},us=["href"],_s=JSON.parse('{"title":"useChangeCase","description":"","frontmatter":{"category":"@Integrations"},"headers":[],"relativePath":"integrations/useChangeCase/index.md","filePath":"integrations/useChangeCase/index.md","lastUpdated":1739784586000}'),os={name:"integrations/useChangeCase/index.md"},vs=Object.assign(os,{setup(i){const a=G({template:{value:{welcomeSFC:cs}}}).serialize();return(t,e)=>{const n=$,l=U,h=O,p=j;return C(),A("div",null,[e[1]||(e[1]=k("h1",{id:"usechangecase",tabindex:"-1"},[T("useChangeCase "),k("a",{class:"header-anchor",href:"#usechangecase","aria-label":"Permalink to “useChangeCase”"},"​")],-1)),d(n,{fn:"useChangeCase"}),e[2]||(e[2]=w("",3)),d(l,null,{default:z(()=>[k("p",ys,[e[0]||(e[0]=k("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/integrations/useChangeCase/demo.vue",target:"_blank"},"源码",-1)),k("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${B(a)}`,target:"_blank"},"playground (beta)",8,us)]),d(gs)]),_:1}),e[3]||(e[3]=w("",15)),d(h,{fn:"useChangeCase"}),e[4]||(e[4]=k("h2",{id:"更新日志",tabindex:"-1"},[T("更新日志 "),k("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),d(p,{fn:"useChangeCase"})])}}});export{_s as __pageData,vs as default};

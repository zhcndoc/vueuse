import{_,a as b}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as B}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as E}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{_ as D}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.y710iK4K.js";import{z as r,L as C,G as x,d as u,J as A,i as o,o as g,y as d,g as t,H as y,A as F,F as T,j as i,t as c,Z as R,Y as m,w}from"./chunks/vue.DDc96eEg.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";function $(l,e){const a=r();return C(()=>{a.value=l()},{...e,flush:"sync"}),x(a)}const k=r(0),P=u({__name:"EagerDemo",emits:["update"],setup(l,{emit:e}){const a=e;A(()=>a("update"));const h=$(()=>k.value>5);return(s,n)=>{const p=D;return g(),o("div",null,[n[0]||(n[0]=d(" 已超过5: ")),t(p,{value:y(h)},null,8,["value"])])}}}),V=u({__name:"LazyDemo",emits:["update"],setup(l,{emit:e}){const a=e;A(()=>a("update"));const h=F(()=>k.value>5);return(s,n)=>{const p=D;return g(),o("div",null,[n[0]||(n[0]=d(" 已超过5: ")),t(p,{value:h.value},null,8,["value"])])}}}),S={grid:"","grid-cols-2":""},z={"font-mono":""},O={"font-mono":""},j={"mt-4":"","font-mono":""},N=u({__name:"demo",setup(l){const e=r(0),a=r(0);return(h,s)=>(g(),o(T,null,[i("div",S,[i("div",null,[s[4]||(s[4]=i("span",{"text-primary":"","font-bold":""},"惰性计算",-1)),i("div",z,[t(V,{onUpdate:s[0]||(s[0]=n=>e.value++)}),i("div",null," 渲染次数: "+c(e.value),1)])]),i("div",null,[s[5]||(s[5]=i("span",{"text-primary":"","font-bold":""},"急性计算",-1)),i("div",O,[t(P,{onUpdate:s[1]||(s[1]=n=>a.value++)}),i("div",null,"渲染次数: "+c(a.value),1)])])]),i("div",j," 计数: "+c(y(k)),1),i("button",{secondary:"",onClick:s[2]||(s[2]=n=>k.value--)}," 减少 "),i("button",{onClick:s[3]||(s[3]=n=>k.value++)}," 增加 ")],64))}}),I=`<script setup lang="ts">
import { shallowRef } from 'vue'
import EagerDemo from './demo/EagerDemo.vue'
import LazyDemo from './demo/LazyDemo.vue'
import { count } from './demo/state'

const lazyRenders = shallowRef(0)
const eagerRenders = shallowRef(0)
<\/script>

<template>
  <div grid grid-cols-2>
    <div>
      <span text-primary font-bold>惰性计算</span>
      <div font-mono>
        <LazyDemo @update="lazyRenders++" />
        <div>
          渲染次数: {{ lazyRenders }}
        </div>
      </div>
    </div>
    <div>
      <span text-primary font-bold>急性计算</span>
      <div font-mono>
        <EagerDemo @update="eagerRenders++" />
        <div>渲染次数: {{ eagerRenders }}</div>
      </div>
    </div>
  </div>

  <div mt-4 font-mono>
    计数: {{ count }}
  </div>
  <button secondary @click="count--">
    减少
  </button>
  <button @click="count++">
    增加
  </button>
</template>
`,L={class:"demo-source-link"},U=["href"],M=JSON.parse('{"title":"computedEager","description":"","frontmatter":{"category":"Reactivity","alias":"eagerComputed"},"headers":[],"relativePath":"shared/computedEager/index.md","filePath":"shared/computedEager/index.md","lastUpdated":1729860293000}'),W={name:"shared/computedEager/index.md"},Q=Object.assign(W,{setup(l){const a=R({template:{value:{welcomeSFC:I}}}).serialize();return(h,s)=>{const n=E,p=B,f=_,v=b;return g(),o("div",null,[s[1]||(s[1]=i("h1",{id:"computedeager",tabindex:"-1"},[d("computedEager "),i("a",{class:"header-anchor",href:"#computedeager","aria-label":"Permalink to “computedEager”"},"​")],-1)),t(n,{fn:"computedEager"}),s[2]||(s[2]=m("",5)),t(p,null,{default:w(()=>[i("p",L,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/computedEager/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${y(a)}`,target:"_blank"},"playground (beta)",8,U)]),t(N)]),_:1}),s[3]||(s[3]=m("",7)),t(f,{fn:"computedEager"}),s[4]||(s[4]=i("h2",{id:"更新日志",tabindex:"-1"},[d("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),t(v,{fn:"computedEager"})])}}});export{M as __pageData,Q as default};

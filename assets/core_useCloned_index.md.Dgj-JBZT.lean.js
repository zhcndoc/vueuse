import{_ as c,a as B}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as u}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as f}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{d as C,i as g,o as y,F as m,a2 as r,j as s,a5 as d,H as l,Z as b,g as k,Y as v,y as t,w as F}from"./chunks/vue.BjJVtbJX.js";import{u as E}from"./chunks/index.C1_pRWtq.js";import"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";const _=C({__name:"demo",setup(o){const p={fruit:"banana",drink:"water"},{cloned:n,sync:e}=E(p);return(i,a)=>(y(),g(m,null,[r(s("input",{"onUpdate:modelValue":a[0]||(a[0]=h=>l(n).fruit=h),type:"text"},null,512),[[d,l(n).fruit]]),r(s("input",{"onUpdate:modelValue":a[1]||(a[1]=h=>l(n).drink=h),type:"text"},null,512),[[d,l(n).drink]]),s("button",{onClick:a[2]||(a[2]=h=>l(e)())}," 重置 ")],64))}}),x=`<script setup lang="ts">
import { useCloned } from '@vueuse/core'

const template = { fruit: 'banana', drink: 'water' }

const { cloned, sync } = useCloned(template)
<\/script>

<template>
  <input v-model="cloned.fruit" type="text">
  <input v-model="cloned.drink" type="text">

  <button @click="sync()">
    重置
  </button>
</template>
`,T={class:"demo-source-link"},P=["href"],J=JSON.parse('{"title":"useCloned","description":"","frontmatter":{"category":"Utilities"},"headers":[],"relativePath":"core/useCloned/index.md","filePath":"core/useCloned/index.md","lastUpdated":1736688467000}'),S={name:"core/useCloned/index.md"},M=Object.assign(S,{setup(o){const n=b({template:{value:{welcomeSFC:x}}}).serialize();return(e,i)=>{const a=f,h=u,D=c,A=B;return y(),g("div",null,[i[1]||(i[1]=s("h1",{id:"usecloned",tabindex:"-1"},[t("useCloned "),s("a",{class:"header-anchor",href:"#usecloned","aria-label":"Permalink to “useCloned”"},"​")],-1)),k(a,{fn:"useCloned"}),i[2]||(i[2]=s("p",null,[t("对 ref 进行响应式克隆。默认情况下，它使用 "),s("code",null,"JSON.parse(JSON.stringify())"),t(" 进行克隆。")],-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[t("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),k(h,null,{default:F(()=>[s("p",T,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useCloned/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${l(n)}`,target:"_blank"},"playground (beta)",8,P)]),k(_)]),_:1}),i[4]||(i[4]=v("",12)),k(D,{fn:"useCloned"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[t("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),k(A,{fn:"useCloned"})])}}});export{J as __pageData,M as default};

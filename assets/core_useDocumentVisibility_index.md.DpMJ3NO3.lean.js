import{_ as g,a as y}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{u as D}from"./chunks/index.CWcGpniC.js";import{u as f}from"./chunks/index.BsvAlvDo.js";import{d as v,z as _,B as A,i as r,o as k,t as B,Z as C,j as i,g as a,Y as V,y as n,w as x,H as E}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.qy4VQT1o.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/general.tY1gtZD0.js";const p="💡 Minimize the page or switch tab then return",F=v({__name:"demo",setup(o){const e=_(p),l=D(),h=f(()=>{e.value=p},3e3);return A(l,(s,t)=>{s==="visible"&&t==="hidden"&&(e.value="🎉 Welcome back!",h.start())}),(s,t)=>(k(),r("div",null,B(e.value),1))}}),S=`<script setup lang="ts">
import { useDocumentVisibility, useTimeoutFn } from '@vueuse/core'
import { shallowRef, watch } from 'vue'

const startMessage = '💡 Minimize the page or switch tab then return'
const message = shallowRef(startMessage)
const visibility = useDocumentVisibility()

const timeout = useTimeoutFn(() => {
  message.value = startMessage
}, 3000)

watch(visibility, (current, previous) => {
  if (current === 'visible' && previous === 'hidden') {
    message.value = '🎉 Welcome back!'
    timeout.start()
  }
})
<\/script>

<template>
  <div>{{ message }}</div>
</template>
`,w={class:"demo-source-link"},P=["href"],H=JSON.parse('{"title":"useDocumentVisibility","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useDocumentVisibility/index.md","filePath":"core/useDocumentVisibility/index.md","lastUpdated":1753423581000}'),T={name:"core/useDocumentVisibility/index.md"},J=Object.assign(T,{setup(o){const l=C({template:{value:{welcomeSFC:S}}}).serialize();return(h,s)=>{const t=b,d=m,c=g,u=y;return k(),r("div",null,[s[1]||(s[1]=i("h1",{id:"usedocumentvisibility",tabindex:"-1"},[n("useDocumentVisibility "),i("a",{class:"header-anchor",href:"#usedocumentvisibility","aria-label":"Permalink to “useDocumentVisibility”"},"​")],-1)),a(t,{fn:"useDocumentVisibility"}),s[2]||(s[2]=i("p",null,[n("响应式跟踪 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState",target:"_blank",rel:"noreferrer"},[i("code",null,"document.visibilityState")])],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[n("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(d,null,{default:x(()=>[i("p",w,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useDocumentVisibility/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${E(l)}`,target:"_blank"},"playground (beta)",8,P)]),a(F)]),_:1}),s[4]||(s[4]=V("",9)),a(c,{fn:"useDocumentVisibility"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[n("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(u,{fn:"useDocumentVisibility"})])}}});export{H as __pageData,J as default};

import{_ as S,a as B}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as C}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{u as x}from"./chunks/index.DV1Rw-t_.js";import{u as k}from"./chunks/index.Dn9jmOT9.js";import{u as E}from"./chunks/index.DK97_WvT.js";import{z as o,d as F,i as D,o as b,j as s,t as d,H as r,Z as w,g as h,Y as V,y as g,w as P}from"./chunks/vue.DQfvmmyQ.js";import{a as N}from"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/filters.DSKJ-Ken.js";import"./chunks/index.CyaQpZZu.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/index.BcBRhzZe.js";import"./chunks/index.BXXSfDxN.js";import"./chunks/index.B5l6yAbo.js";import"./chunks/general.CGRH32nb.js";const y="--vueuse-safe-area-top",m="--vueuse-safe-area-right",v="--vueuse-safe-area-bottom",A="--vueuse-safe-area-left";function R(){const e=o(""),n=o(""),t=o(""),l=o("");if(N){const p=k(y),a=k(m),u=k(v),f=k(A);p.value="env(safe-area-inset-top, 0px)",a.value="env(safe-area-inset-right, 0px)",u.value="env(safe-area-inset-bottom, 0px)",f.value="env(safe-area-inset-left, 0px)",i(),E("resize",x(i),{passive:!0})}function i(){e.value=c(y),n.value=c(m),t.value=c(v),l.value=c(A)}return{top:e,right:n,bottom:t,left:l,update:i}}function c(e){return getComputedStyle(document.documentElement).getPropertyValue(e)}const T={class:"inline-grid grid-cols-2 gap-x-4 gap-y-2"},$=F({__name:"demo",setup(e){const{top:n,right:t,bottom:l,left:i}=R();return(p,a)=>(b(),D("div",T,[a[0]||(a[0]=s("div",{opacity:"50"}," top: ",-1)),s("div",null,d(r(n)),1),a[1]||(a[1]=s("div",{opacity:"50"}," right: ",-1)),s("div",null,d(r(t)),1),a[2]||(a[2]=s("div",{opacity:"50"}," bottom: ",-1)),s("div",null,d(r(l)),1),a[3]||(a[3]=s("div",{opacity:"50"}," left: ",-1)),s("div",null,d(r(i)),1)]))}}),q=`<script setup lang="ts">
import { useScreenSafeArea } from '@vueuse/core'

const {
  top,
  right,
  bottom,
  left,
} = useScreenSafeArea()
<\/script>

<template>
  <div class="inline-grid grid-cols-2 gap-x-4 gap-y-2">
    <div opacity="50">
      top:
    </div>
    <div>{{ top }}</div>
    <div opacity="50">
      right:
    </div>
    <div>{{ right }}</div>
    <div opacity="50">
      bottom:
    </div>
    <div>{{ bottom }}</div>
    <div opacity="50">
      left:
    </div>
    <div>{{ left }}</div>
  </div>
</template>
`,z={class:"demo-source-link"},I=["href"],es=JSON.parse('{"title":"useScreenSafeArea","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useScreenSafeArea/index.md","filePath":"core/useScreenSafeArea/index.md","lastUpdated":1715934697000}'),U={name:"core/useScreenSafeArea/index.md"},ts=Object.assign(U,{setup(e){const t=w({template:{value:{welcomeSFC:q}}}).serialize();return(l,i)=>{const p=C,a=_,u=S,f=B;return b(),D("div",null,[i[1]||(i[1]=s("h1",{id:"usescreensafearea",tabindex:"-1"},[g("useScreenSafeArea "),s("a",{class:"header-anchor",href:"#usescreensafearea","aria-label":"Permalink to “useScreenSafeArea”"},"​")],-1)),h(p,{fn:"useScreenSafeArea"}),i[2]||(i[2]=s("p",null,[g("响应式 "),s("code",null,"env(safe-area-inset-*)")],-1)),i[3]||(i[3]=s("p",null,[s("img",{src:"https://webkit.org/wp-content/uploads/safe-areas-1.png",alt:"image"})],-1)),i[4]||(i[4]=s("h2",{id:"示例",tabindex:"-1"},[g("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),h(a,null,{default:P(()=>[s("p",z,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useScreenSafeArea/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${r(t)}`,target:"_blank"},"playground (beta)",8,I)]),h($)]),_:1}),i[5]||(i[5]=V("",13)),h(u,{fn:"useScreenSafeArea"}),i[6]||(i[6]=s("h2",{id:"更新日志",tabindex:"-1"},[g("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),h(f,{fn:"useScreenSafeArea"})])}}});export{es as __pageData,ts as default};

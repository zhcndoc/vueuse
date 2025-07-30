import{_ as y,a as c}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as u}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{u as D}from"./chunks/index.C6vnENxY.js";import{d as A,L as f,i as l,o as h,Z as B,j as i,g as a,Y as C,y as n,w as E,H as b}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";const _=A({__name:"demo",setup(k){const e=D();return f(()=>{console.log("Current element:",e.value)}),(t,p)=>(h(),l("div",null,"打开console.log查看元素"))}}),v=`<script setup lang="ts">
import { useCurrentElement } from '@vueuse/core'
import { watchEffect } from 'vue'

const el = useCurrentElement()

watchEffect(() => {
  console.log('Current element:', el.value)
})
<\/script>

<template>
  <div>打开console.log查看元素</div>
</template>
`,F={class:"demo-source-link"},x=["href"],M=JSON.parse('{"title":"useCurrentElement","description":"","frontmatter":{"category":"Component"},"headers":[],"relativePath":"core/useCurrentElement/index.md","filePath":"core/useCurrentElement/index.md","lastUpdated":1746667860000}'),R={name:"core/useCurrentElement/index.md"},S=Object.assign(R,{setup(k){const t=B({template:{value:{welcomeSFC:v}}}).serialize();return(p,s)=>{const r=m,d=u,g=y,o=c;return h(),l("div",null,[s[1]||(s[1]=i("h1",{id:"usecurrentelement",tabindex:"-1"},[n("useCurrentElement "),i("a",{class:"header-anchor",href:"#usecurrentelement","aria-label":"Permalink to “useCurrentElement”"},"​")],-1)),a(r,{fn:"useCurrentElement"}),s[2]||(s[2]=i("p",null,"将当前组件的 DOM 元素作为 ref 返回。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[n("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(d,null,{default:E(()=>[i("p",F,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useCurrentElement/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${b(t)}`,target:"_blank"},"playground (beta)",8,x)]),a(_)]),_:1}),s[4]||(s[4]=C("",14)),a(g,{fn:"useCurrentElement"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[n("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(o,{fn:"useCurrentElement"})])}}});export{M as __pageData,S as default};

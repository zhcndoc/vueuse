import{_ as D,a as A}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as f}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{_ as B}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.BUf_gkVe.js";import{d as C}from"./chunks/metadata.ByJC-ruD.js";import{u as _}from"./chunks/index.B4vKqgz9.js";import{u as F}from"./chunks/index.C0ylHG__.js";import{u as d}from"./chunks/index.qy4VQT1o.js";import{A as o,z as b,d as v,a1 as E,i as g,o as y,j as i,y as t,g as h,H as c,Z as x,Y as W,w}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.CPudsCac.js";import"./chunks/index.CLp6I5-5.js";import"./chunks/index.BImTs33O.js";import"./chunks/index.B2rzktNR.js";import"./chunks/general.tY1gtZD0.js";const q="focusin",S="focusout",T=":focus-within";function N(p,a={}){const{window:e=C}=a,l=o(()=>_(p)),s=b(!1),n=o(()=>s.value),r=F(a);if(!e||!r.value)return{focused:n};const k={passive:!0};return d(l,q,()=>s.value=!0,k),d(l,S,()=>s.value=l.value?.matches?.(T)??!1,k),{focused:n}}const P={class:"flex flex-col items-center"},R={mt2:""},$=v({__name:"demo",setup(p){const a=E("target"),{focused:e}=N(a);return(l,s)=>{const n=B;return y(),g("div",P,[i("form",{ref_key:"target",ref:a,class:"shadow bg-base border-main rounded max-w-96 mx-auto p-8"},s[0]||(s[0]=[i("input",{type:"text",placeholder:"First Name"},null,-1),i("input",{type:"text",placeholder:"Last Name"},null,-1),i("input",{type:"text",placeholder:"Email"},null,-1),i("input",{type:"text",placeholder:"Password"},null,-1)]),512),i("div",R,[s[1]||(s[1]=t(" Focus in form: ",-1)),h(n,{value:c(e)},null,8,["value"])])])}}}),O=`<script setup lang="ts">
import { useFocusWithin } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const target = useTemplateRef<HTMLFormElement>('target')

const { focused } = useFocusWithin(target)
<\/script>

<template>
  <div class="flex flex-col items-center">
    <form
      ref="target"
      class="shadow bg-base border-main rounded max-w-96 mx-auto p-8"
    >
      <input type="text" placeholder="First Name">
      <input type="text" placeholder="Last Name">
      <input type="text" placeholder="Email">
      <input type="text" placeholder="Password">
    </form>
    <div mt2>
      Focus in form: <BooleanDisplay :value="focused" />
    </div>
  </div>
</template>
`,U={class:"demo-source-link"},V=["href"],ns=JSON.parse('{"title":"useFocusWithin","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useFocusWithin/index.md","filePath":"core/useFocusWithin/index.md","lastUpdated":1715934697000}'),I={name:"core/useFocusWithin/index.md"},ts=Object.assign(I,{setup(p){const e=x({template:{value:{welcomeSFC:O}}}).serialize();return(l,s)=>{const n=f,r=m,k=D,u=A;return y(),g("div",null,[s[1]||(s[1]=i("h1",{id:"usefocuswithin",tabindex:"-1"},[t("useFocusWithin "),i("a",{class:"header-anchor",href:"#usefocuswithin","aria-label":"Permalink to “useFocusWithin”"},"​")],-1)),h(n,{fn:"useFocusWithin"}),s[2]||(s[2]=i("p",null,[t("用于跟踪一个元素或其子元素是否具有焦点的响应式工具。它的行为类似于 "),i("code",null,":focus-within"),t(" CSS 伪类。一个常见的用例是在表单元素上，以查看其任何输入框当前是否具有焦点。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[t("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),h(r,null,{default:w(()=>[i("p",U,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useFocusWithin/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${c(e)}`,target:"_blank"},"playground (beta)",8,V)]),h($)]),_:1}),s[4]||(s[4]=W("",7)),h(k,{fn:"useFocusWithin"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[t("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),h(u,{fn:"useFocusWithin"})])}}});export{ns as __pageData,ts as default};

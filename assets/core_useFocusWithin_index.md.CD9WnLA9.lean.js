import{_ as A,a as m}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as f}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as B}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{_ as C}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.DvmxuIkN.js";import{d as _}from"./chunks/metadata.HXIr2NKd.js";import{u as F}from"./chunks/index.DXXiP3sM.js";import{u as b}from"./chunks/index.CBLDMrL2.js";import{u as g}from"./chunks/index.DK97_WvT.js";import{A as y,z as v,d as E,a1 as x,i as c,o as u,j as i,y as h,g as e,H as D,Z as W,Y as w,w as q}from"./chunks/vue.DQfvmmyQ.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.C1N7ztJU.js";import"./chunks/index.BcBRhzZe.js";import"./chunks/index.BXXSfDxN.js";import"./chunks/index.B5l6yAbo.js";import"./chunks/general.CGRH32nb.js";const S="focusin",T="focusout",N=":focus-within";function P(r,a={}){const{window:l=_}=a,k=y(()=>F(r)),s=v(!1),n=y(()=>s.value),d=b(a);if(!l||!d.value)return{focused:n};const p={passive:!0};return g(k,S,()=>s.value=!0,p),g(k,T,()=>{var t,o;return s.value=((o=(t=k.value)==null?void 0:t.matches)==null?void 0:o.call(t,N))??!1},p),{focused:n}}const R={class:"flex flex-col items-center"},$={mt2:""},O=E({__name:"demo",setup(r){const a=x("target"),{focused:l}=P(a);return(k,s)=>{const n=C;return u(),c("div",R,[i("form",{ref_key:"target",ref:a,class:"shadow bg-base border-main rounded max-w-96 mx-auto p-8"},s[0]||(s[0]=[i("input",{type:"text",placeholder:"First Name"},null,-1),i("input",{type:"text",placeholder:"Last Name"},null,-1),i("input",{type:"text",placeholder:"Email"},null,-1),i("input",{type:"text",placeholder:"Password"},null,-1)]),512),i("div",$,[s[1]||(s[1]=h(" Focus in form: ")),e(n,{value:D(l)},null,8,["value"])])])}}}),U=`<script setup lang="ts">
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
`,V={class:"demo-source-link"},I=["href"],ts=JSON.parse('{"title":"useFocusWithin","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useFocusWithin/index.md","filePath":"core/useFocusWithin/index.md","lastUpdated":1715934697000}'),L={name:"core/useFocusWithin/index.md"},hs=Object.assign(L,{setup(r){const l=W({template:{value:{welcomeSFC:U}}}).serialize();return(k,s)=>{const n=B,d=f,p=A,t=m;return u(),c("div",null,[s[1]||(s[1]=i("h1",{id:"usefocuswithin",tabindex:"-1"},[h("useFocusWithin "),i("a",{class:"header-anchor",href:"#usefocuswithin","aria-label":"Permalink to “useFocusWithin”"},"​")],-1)),e(n,{fn:"useFocusWithin"}),s[2]||(s[2]=i("p",null,[h("用于跟踪一个元素或其子元素是否具有焦点的响应式工具。它的行为类似于 "),i("code",null,":focus-within"),h(" CSS 伪类。一个常见的用例是在表单元素上，以查看其任何输入框当前是否具有焦点。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[h("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),e(d,null,{default:q(()=>[i("p",V,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useFocusWithin/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${D(l)}`,target:"_blank"},"playground (beta)",8,I)]),e(O)]),_:1}),s[4]||(s[4]=w("",7)),e(p,{fn:"useFocusWithin"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[h("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),e(t,{fn:"useFocusWithin"})])}}});export{ts as __pageData,hs as default};

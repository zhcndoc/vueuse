import{_ as m,a as y}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as b}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as D}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{d as w}from"./chunks/metadata.HXIr2NKd.js";import{u as r}from"./chunks/index.DK97_WvT.js";import{z as o,d as _,B as v,i as k,o as d,t as A,Z as F,j as i,g as l,Y as B,y as t,w as C,H as W}from"./chunks/vue.DQfvmmyQ.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/general.CGRH32nb.js";function x(h={}){const{window:a=w}=h;if(!a)return o(!1);const e=o(a.document.hasFocus()),n={passive:!0};return r(a,"blur",()=>{e.value=!1},n),r(a,"focus",()=>{e.value=!0},n),e}const p="💡 单击文档外的任何地方取消焦点。",E=_({__name:"demo",setup(h){const a=o(p),e=x();return v(e,n=>{n?a.value=p:a.value="标签页未聚焦"}),(n,s)=>(d(),k("div",null,A(a.value),1))}}),P=`<script setup lang="ts">
import { useWindowFocus } from '@vueuse/core'
import { shallowRef, watch } from 'vue'

const startMessage = '💡 单击文档外的任何地方取消焦点。'
const message = shallowRef(startMessage)
const focused = useWindowFocus()

watch(focused, (isFocused) => {
  if (isFocused)
    message.value = startMessage
  else
    message.value = '标签页未聚焦'
})
<\/script>

<template>
  <div>{{ message }}</div>
</template>
`,S={class:"demo-source-link"},T=["href"],q=JSON.parse('{"title":"useWindowFocus","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useWindowFocus/index.md","filePath":"core/useWindowFocus/index.md","lastUpdated":1715934697000}'),N={name:"core/useWindowFocus/index.md"},H=Object.assign(N,{setup(h){const e=F({template:{value:{welcomeSFC:P}}}).serialize();return(n,s)=>{const c=D,u=b,g=m,f=y;return d(),k("div",null,[s[1]||(s[1]=i("h1",{id:"usewindowfocus",tabindex:"-1"},[t("useWindowFocus "),i("a",{class:"header-anchor",href:"#usewindowfocus","aria-label":"Permalink to “useWindowFocus”"},"​")],-1)),l(c,{fn:"useWindowFocus"}),s[2]||(s[2]=i("p",null,[t("使用 "),i("code",null,"window.onfocus"),t(" 和 "),i("code",null,"window.onblur"),t(" 事件来动态地跟踪窗口焦点状态。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[t("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),l(u,null,{default:C(()=>[i("p",S,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useWindowFocus/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${W(e)}`,target:"_blank"},"playground (beta)",8,T)]),l(E)]),_:1}),s[4]||(s[4]=B("",9)),l(g,{fn:"useWindowFocus"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[t("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(f,{fn:"useWindowFocus"})])}}});export{q as __pageData,H as default};

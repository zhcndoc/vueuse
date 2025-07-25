import{_ as f,a as m}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as D}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{d as v}from"./chunks/metadata.BfYDMb5p.js";import{u as k}from"./chunks/index.Biv1Ajcl.js";import{z as p,d as w,B as A,i as o,o as d,t as _,Z as F,j as i,g as l,Y as B,y as t,w as C,H as E}from"./chunks/vue.DDc96eEg.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/general.tY1gtZD0.js";function W(h={}){const{window:a=v}=h;if(!a)return p(!1);const e=p(a.document.hasFocus()),n={passive:!0};return k(a,"blur",()=>{e.value=!1},n),k(a,"focus",()=>{e.value=!0},n),e}const r="💡 单击文档外的任何地方取消焦点。",x=w({__name:"demo",setup(h){const a=p(r),e=W();return A(e,n=>{n?a.value=r:a.value="标签页未聚焦"}),(n,s)=>(d(),o("div",null,_(a.value),1))}}),P=`<script setup lang="ts">
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
`,S={class:"demo-source-link"},T=["href"],j=JSON.parse('{"title":"useWindowFocus","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useWindowFocus/index.md","filePath":"core/useWindowFocus/index.md","lastUpdated":1753423581000}'),N={name:"core/useWindowFocus/index.md"},H=Object.assign(N,{setup(h){const e=F({template:{value:{welcomeSFC:P}}}).serialize();return(n,s)=>{const c=b,u=D,g=f,y=m;return d(),o("div",null,[s[1]||(s[1]=i("h1",{id:"usewindowfocus",tabindex:"-1"},[t("useWindowFocus "),i("a",{class:"header-anchor",href:"#usewindowfocus","aria-label":"Permalink to “useWindowFocus”"},"​")],-1)),l(c,{fn:"useWindowFocus"}),s[2]||(s[2]=i("p",null,[t("使用 "),i("code",null,"window.onfocus"),t(" 和 "),i("code",null,"window.onblur"),t(" 事件来动态地跟踪窗口焦点状态。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[t("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),l(u,null,{default:C(()=>[i("p",S,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useWindowFocus/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${E(e)}`,target:"_blank"},"playground (beta)",8,T)]),l(x)]),_:1}),s[4]||(s[4]=B("",9)),l(g,{fn:"useWindowFocus"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[t("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(y,{fn:"useWindowFocus"})])}}});export{j as __pageData,H as default};

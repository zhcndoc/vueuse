import{_ as f,a as m}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as D}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{d as A}from"./chunks/metadata.ByJC-ruD.js";import{u as k}from"./chunks/index.qy4VQT1o.js";import{z as p,d as _,B as v,i as o,o as d,t as w,Z as F,j as i,g as l,Y as B,y as t,w as C,H as E}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/general.tY1gtZD0.js";function W(h={}){const{window:a=A}=h;if(!a)return p(!1);const n=p(a.document.hasFocus()),e={passive:!0};return k(a,"blur",()=>{n.value=!1},e),k(a,"focus",()=>{n.value=!0},e),n}const r="💡 单击文档外的任何地方取消焦点。",x=_({__name:"demo",setup(h){const a=p(r);return v(W(),e=>{e?a.value=r:a.value="标签页未聚焦"}),(e,s)=>(d(),o("div",null,w(a.value),1))}}),P=`<script setup lang="ts">
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
`,S={class:"demo-source-link"},T=["href"],j=JSON.parse('{"title":"useWindowFocus","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useWindowFocus/index.md","filePath":"core/useWindowFocus/index.md","lastUpdated":1753423581000}'),N={name:"core/useWindowFocus/index.md"},H=Object.assign(N,{setup(h){const n=F({template:{value:{welcomeSFC:P}}}).serialize();return(e,s)=>{const c=b,u=D,g=f,y=m;return d(),o("div",null,[s[1]||(s[1]=i("h1",{id:"usewindowfocus",tabindex:"-1"},[t("useWindowFocus "),i("a",{class:"header-anchor",href:"#usewindowfocus","aria-label":"Permalink to “useWindowFocus”"},"​")],-1)),l(c,{fn:"useWindowFocus"}),s[2]||(s[2]=i("p",null,[t("使用 "),i("code",null,"window.onfocus"),t(" 和 "),i("code",null,"window.onblur"),t(" 事件来动态地跟踪窗口焦点状态。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[t("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),l(u,null,{default:C(()=>[i("p",S,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useWindowFocus/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${E(n)}`,target:"_blank"},"playground (beta)",8,T)]),l(x)]),_:1}),s[4]||(s[4]=B("",9)),l(g,{fn:"useWindowFocus"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[t("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(y,{fn:"useWindowFocus"})])}}});export{j as __pageData,H as default};

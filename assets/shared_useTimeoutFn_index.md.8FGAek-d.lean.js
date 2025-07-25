import{_ as D,a as c}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as A}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{u as f}from"./chunks/index.CrnT5J8I.js";import{d as b,z as F,i as d,o,F as B,j as i,t as _,q as T,H as g,Z as v,g as a,Y as x,y as l,w as C}from"./chunks/vue.DDc96eEg.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";const r="Please wait for 3 seconds",E=b({__name:"demo",setup(y){const n=F(r),{start:e,isPending:h}=f(()=>{n.value="Fired!"},3e3);function s(){n.value=r,e()}return(k,t)=>(o(),d(B,null,[i("p",null,_(n.value),1),i("button",{class:T({disabled:g(h)}),onClick:t[0]||(t[0]=p=>s())}," Restart ",2)],64))}}),P=`<script setup lang="ts">
import { useTimeoutFn } from '@vueuse/core'
import { shallowRef } from 'vue'

const defaultText = 'Please wait for 3 seconds'
const text = shallowRef(defaultText)
const { start, isPending } = useTimeoutFn(() => {
  text.value = 'Fired!'
}, 3000)

function restart() {
  text.value = defaultText
  start()
}
<\/script>

<template>
  <p>{{ text }}</p>
  <button :class="{ disabled: isPending }" @click="restart()">
    Restart
  </button>
</template>
`,R={class:"demo-source-link"},S=["href"],I=JSON.parse('{"title":"useTimeoutFn","description":"","frontmatter":{"category":"Animation"},"headers":[],"relativePath":"shared/useTimeoutFn/index.md","filePath":"shared/useTimeoutFn/index.md","lastUpdated":1716184754000}'),w={name:"shared/useTimeoutFn/index.md"},q=Object.assign(w,{setup(y){const e=v({template:{value:{welcomeSFC:P}}}).serialize();return(h,s)=>{const k=m,t=A,p=D,u=c;return o(),d("div",null,[s[1]||(s[1]=i("h1",{id:"usetimeoutfn",tabindex:"-1"},[l("useTimeoutFn "),i("a",{class:"header-anchor",href:"#usetimeoutfn","aria-label":"Permalink to “useTimeoutFn”"},"​")],-1)),a(k,{fn:"useTimeoutFn"}),s[2]||(s[2]=i("p",null,"带有控制选项的 setTimeout 函数的封装",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[l("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(t,null,{default:C(()=>[i("p",R,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useTimeoutFn/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${g(e)}`,target:"_blank"},"playground (beta)",8,S)]),a(E)]),_:1}),s[4]||(s[4]=x("",7)),a(p,{fn:"useTimeoutFn"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[l("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(u,{fn:"useTimeoutFn"})])}}});export{I as __pageData,q as default};

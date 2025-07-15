import{_ as c,a as u}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_ as A}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as D}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{u as m}from"./chunks/index.DIaNeo4z.js";import{n as B}from"./chunks/metadata.DSy5Z-Tw.js";import{A as f,d as b,i as r,o as d,j as i,t as _,H as e,Z as C,g as h,Y as v,y as p,w as F}from"./chunks/vue.DDc96eEg.js";import"./chunks/utils.B5e_uQLX.js";function E(l=1e3,a={}){const{controls:n=!1,callback:k}=a,s=m(k??B,l,a),t=f(()=>!s.isPending.value);return n?{ready:t,...s}:t}const T=["disabled"],x=b({__name:"demo",setup(l){const{ready:a,start:n}=E(1e3,{controls:!0});return(k,s)=>(d(),r("div",null,[i("p",null,"准备就绪："+_(e(a).toString()),1),i("button",{disabled:!e(a),onClick:s[0]||(s[0]=t=>e(n)())}," 重新开始 ",8,T)]))}}),P=`<script setup lang="ts">
import { useTimeout } from '@vueuse/core'

const { ready, start } = useTimeout(1000, { controls: true })
<\/script>

<template>
  <div>
    <p>准备就绪：{{ ready.toString() }}</p>
    <button :disabled="!ready" @click="start()">
      重新开始
    </button>
  </div>
</template>
`,S={class:"demo-source-link"},R=["href"],z=JSON.parse('{"title":"useTimeout","description":"","frontmatter":{"category":"Animation"},"headers":[],"relativePath":"shared/useTimeout/index.md","filePath":"shared/useTimeout/index.md","lastUpdated":1716184754000}'),j={name:"shared/useTimeout/index.md"},G=Object.assign(j,{setup(l){const n=C({template:{value:{welcomeSFC:P}}}).serialize();return(k,s)=>{const t=D,g=A,o=c,y=u;return d(),r("div",null,[s[1]||(s[1]=i("h1",{id:"usetimeout",tabindex:"-1"},[p("useTimeout "),i("a",{class:"header-anchor",href:"#usetimeout","aria-label":"Permalink to “useTimeout”"},"​")],-1)),h(t,{fn:"useTimeout"}),s[2]||(s[2]=i("p",null,"在一定时间后更新值，并带有控制功能。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[p("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),h(g,null,{default:F(()=>[i("p",S,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useTimeout/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${e(n)}`,target:"_blank"},"playground (beta)",8,R)]),h(x)]),_:1}),s[4]||(s[4]=v("",9)),h(o,{fn:"useTimeout"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[p("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),h(y,{fn:"useTimeout"})])}}});export{z as __pageData,G as default};

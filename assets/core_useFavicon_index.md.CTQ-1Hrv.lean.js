import{_ as c,a as u}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as A}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as D}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{t as B}from"./chunks/index.CyaQpZZu.js";import{g as f}from"./chunks/metadata.HXIr2NKd.js";import{B as v,d as m,z as b,A as C,i as o,o as y,F,j as i,Z as _,g as l,Y as E,y as g,w as x,H as P}from"./chunks/vue.DQfvmmyQ.js";import"./chunks/utils.B5e_uQLX.js";function R(r=null,t={}){const{baseUrl:e="",rel:p="icon",document:s=f}=t,k=B(r),d=a=>{const n=s==null?void 0:s.head.querySelectorAll(`link[rel*="${p}"]`);if(!n||n.length===0){const h=s==null?void 0:s.createElement("link");h&&(h.rel=p,h.href=`${e}${a}`,h.type=`image/${a.split(".").pop()}`,s==null||s.head.append(h));return}n==null||n.forEach(h=>h.href=`${e}${a}`)};return v(k,(a,n)=>{typeof a=="string"&&a!==n&&d(a)},{immediate:!0}),k}const $=m({__name:"demo",setup(r){const t=b("vueuse"),e=C(()=>t.value==="vue"?"vue.png":"favicon-32x32.png");return R(e,{baseUrl:"/",rel:"icon"}),(p,s)=>(y(),o(F,null,[s[2]||(s[2]=i("div",null," 更改 favicon ",-1)),i("button",{onClick:s[0]||(s[0]=k=>t.value="vue")}," Vue "),i("button",{onClick:s[1]||(s[1]=k=>t.value="vueuse")}," VueUse ")],64))}}),w=`<script setup lang="ts">
import { useFavicon } from '@vueuse/core'
import { computed, shallowRef } from 'vue'

const type = shallowRef('vueuse')

const favicon = computed(() =>
  type.value === 'vue' ? 'vue.png' : 'favicon-32x32.png')

useFavicon(favicon, {
  baseUrl: '/',
  rel: 'icon',
})
<\/script>

<template>
  <div>
    更改 favicon
  </div>
  <button @click="type = 'vue'">
    Vue
  </button>
  <button @click="type = 'vueuse'">
    VueUse
  </button>
</template>
`,U={class:"demo-source-link"},V=["href"],G=JSON.parse('{"title":"useFavicon","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useFavicon/index.md","filePath":"core/useFavicon/index.md","lastUpdated":1739784586000}'),S={name:"core/useFavicon/index.md"},H=Object.assign(S,{setup(r){const e=_({template:{value:{welcomeSFC:w}}}).serialize();return(p,s)=>{const k=D,d=A,a=c,n=u;return y(),o("div",null,[s[1]||(s[1]=i("h1",{id:"usefavicon",tabindex:"-1"},[g("useFavicon "),i("a",{class:"header-anchor",href:"#usefavicon","aria-label":"Permalink to “useFavicon”"},"​")],-1)),l(k,{fn:"useFavicon"}),s[2]||(s[2]=i("p",null,"响应式的网站图标",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[g("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),l(d,null,{default:x(()=>[i("p",U,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useFavicon/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${P(e)}`,target:"_blank"},"playground (beta)",8,V)]),l($)]),_:1}),s[4]||(s[4]=E("",12)),l(a,{fn:"useFavicon"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[g("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(n,{fn:"useFavicon"})])}}});export{G as __pageData,H as default};

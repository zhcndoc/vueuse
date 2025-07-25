import{_ as c,a as u}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as A}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as D}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{t as B}from"./chunks/index.BtqfaRQ7.js";import{g as f}from"./chunks/metadata.BfYDMb5p.js";import{B as v,d as m,z as b,A as C,i as o,o as y,F,j as i,Z as _,g as k,Y as E,y as g,w as x,H as P}from"./chunks/vue.DDc96eEg.js";import"./chunks/utils.B5e_uQLX.js";function R(r=null,h={}){const{baseUrl:e="",rel:p="icon",document:s=f}=h,l=B(r),d=a=>{const n=s?.head.querySelectorAll(`link[rel*="${p}"]`);if(!n||n.length===0){const t=s?.createElement("link");t&&(t.rel=p,t.href=`${e}${a}`,t.type=`image/${a.split(".").pop()}`,s?.head.append(t));return}n?.forEach(t=>t.href=`${e}${a}`)};return v(l,(a,n)=>{typeof a=="string"&&a!==n&&d(a)},{immediate:!0}),l}const $=m({__name:"demo",setup(r){const h=b("vueuse"),e=C(()=>h.value==="vue"?"vue.png":"favicon-32x32.png");return R(e,{baseUrl:"/",rel:"icon"}),(p,s)=>(y(),o(F,null,[s[2]||(s[2]=i("div",null," 更改 favicon ",-1)),i("button",{onClick:s[0]||(s[0]=l=>h.value="vue")}," Vue "),i("button",{onClick:s[1]||(s[1]=l=>h.value="vueuse")}," VueUse ")],64))}}),w=`<script setup lang="ts">
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
`,U={class:"demo-source-link"},V=["href"],G=JSON.parse('{"title":"useFavicon","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useFavicon/index.md","filePath":"core/useFavicon/index.md","lastUpdated":1739784586000}'),S={name:"core/useFavicon/index.md"},H=Object.assign(S,{setup(r){const e=_({template:{value:{welcomeSFC:w}}}).serialize();return(p,s)=>{const l=D,d=A,a=c,n=u;return y(),o("div",null,[s[1]||(s[1]=i("h1",{id:"usefavicon",tabindex:"-1"},[g("useFavicon "),i("a",{class:"header-anchor",href:"#usefavicon","aria-label":"Permalink to “useFavicon”"},"​")],-1)),k(l,{fn:"useFavicon"}),s[2]||(s[2]=i("p",null,"响应式的网站图标",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[g("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),k(d,null,{default:x(()=>[i("p",U,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useFavicon/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${P(e)}`,target:"_blank"},"playground (beta)",8,V)]),k($)]),_:1}),s[4]||(s[4]=E("",12)),k(a,{fn:"useFavicon"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[g("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),k(n,{fn:"useFavicon"})])}}});export{G as __pageData,H as default};

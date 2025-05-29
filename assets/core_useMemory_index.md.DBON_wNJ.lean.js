import{_ as c,a as D}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as A}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{a as u,_ as f}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{u as B}from"./chunks/index.D6Ixh6S-.js";import{r as v,d as b,i as k,H as t,o as r,k as _,F as C,j as s,t as d,Z as S,g as h,Y as F,y as o,w as M}from"./chunks/vue.BjJVtbJX.js";import"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.CBIpye6U.js";function x(p={}){const e=v(),l=B(()=>typeof performance<"u"&&"memory"in performance);if(l.value){const{interval:n=1e3}=p;u(()=>{e.value=performance.memory},n,{immediate:p.immediate,immediateCallback:p.immediateCallback})}return{isSupported:l,memory:e}}const E={key:0,class:"inline-grid grid-cols-2 gap-x-4 gap-y-2"},z={key:1},P=b({__name:"demo",setup(p){function e(i){return`${(i/1024/1024).toFixed(2)} MB`}const{isSupported:l,memory:n}=x();return(i,a)=>t(l)&&t(n)?(r(),k("div",E,[t(n)?(r(),k(C,{key:0},[a[0]||(a[0]=s("div",{opacity:"50"}," 已使用 ",-1)),s("div",null,d(e(t(n).usedJSHeapSize)),1),a[1]||(a[1]=s("div",{opacity:"50"}," 已分配 ",-1)),s("div",null,d(e(t(n).totalJSHeapSize)),1),a[2]||(a[2]=s("div",{opacity:"50"}," 限制 ",-1)),s("div",null,d(e(t(n).jsHeapSizeLimit)),1)],64)):_("",!0)])):(r(),k("div",z," 你的浏览器不支持性能内存 API "))}}),I=`<script lang="ts" setup>
import { useMemory } from '@vueuse/core'

function size(v: number) {
  const kb = v / 1024 / 1024
  return \`\${kb.toFixed(2)} MB\`
}
const { isSupported, memory } = useMemory()
<\/script>

<template>
  <div v-if="isSupported && memory" class="inline-grid grid-cols-2 gap-x-4 gap-y-2">
    <template v-if="memory">
      <div opacity="50">
        已使用
      </div><div>{{ size(memory.usedJSHeapSize) }}</div>
      <div opacity="50">
        已分配
      </div><div>{{ size(memory.totalJSHeapSize) }}</div>
      <div opacity="50">
        限制
      </div><div>{{ size(memory.jsHeapSizeLimit) }}</div>
    </template>
  </div>
  <div v-else>
    你的浏览器不支持性能内存 API
  </div>
</template>
`,H={class:"demo-source-link"},$=["href"],L=JSON.parse('{"title":"useMemory","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useMemory/index.md","filePath":"core/useMemory/index.md","lastUpdated":1715934697000}'),T={name:"core/useMemory/index.md"},q=Object.assign(T,{setup(p){const l=S({template:{value:{welcomeSFC:I}}}).serialize();return(n,i)=>{const a=f,y=A,g=c,m=D;return r(),k("div",null,[i[1]||(i[1]=s("h1",{id:"usememory",tabindex:"-1"},[o("useMemory "),s("a",{class:"header-anchor",href:"#usememory","aria-label":"Permalink to “useMemory”"},"​")],-1)),h(a,{fn:"useMemory"}),i[2]||(i[2]=s("p",null,"响应式内存信息。",-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[o("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),h(y,null,{default:M(()=>[s("p",H,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useMemory/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${t(l)}`,target:"_blank"},"playground (beta)",8,$)]),h(P)]),_:1}),i[4]||(i[4]=F("",7)),h(g,{fn:"useMemory"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[o("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),h(m,{fn:"useMemory"})])}}});export{L as __pageData,q as default};

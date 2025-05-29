import{_ as u,a as c}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as D}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{u as A}from"./chunks/index.PYylaYON.js";import{d as b,a1 as f,r as v,z as g,i as h,o as k,j as i,F as B,O as _,t as M,n as C,q as E,Z as O,g as n,Y as F,y as l,w as x,H as R}from"./chunks/vue.BjJVtbJX.js";import"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.BsCVlyoA.js";import"./chunks/index.D6Ixh6S-.js";import"./chunks/index.CBIpye6U.js";import"./chunks/general.CGRH32nb.js";const T=b({__name:"demo",setup(y){const p=f("el"),e=v([]),r=g({}),s=g({});return A(p,t=>{const a=t[0];a&&e.value.push(a.attributeName)},{attributes:!0}),setTimeout(()=>{r.value={test:!0,test2:!0}},1e3),setTimeout(()=>{s.value={color:"red"}},1550),(t,a)=>(k(),h("div",null,[i("div",{ref_key:"el",ref:p,class:E(r.value),style:C(s.value)},[(k(!0),h(B,null,_(e.value,(d,o)=>(k(),h("div",{key:o}," Mutation Attribute: "+M(d),1))),128))],6)]))}}),N=`<script setup lang="ts">
import { useMutationObserver } from '@vueuse/core'
import { ref as deepRef, shallowRef, useTemplateRef } from 'vue'

const el = useTemplateRef<HTMLElement>('el')
const messages = deepRef<string[]>([])
const className = shallowRef({})
const style = shallowRef({})

useMutationObserver(
  el,
  (mutations) => {
    const mutation = mutations[0]

    if (!mutation)
      return

    messages.value.push(mutation.attributeName!)
  },
  { attributes: true },
)

setTimeout(() => {
  className.value = {
    test: true,
    test2: true,
  }
}, 1000)

setTimeout(() => {
  style.value = {
    color: 'red',
  }
}, 1550)
<\/script>

<template>
  <div>
    <div ref="el" :class="className" :style="style">
      <div v-for="(text, index) of messages" :key="index">
        Mutation Attribute: {{ text }}
      </div>
    </div>
  </div>
</template>
`,P={class:"demo-source-link"},S=["href"],J=JSON.parse('{"title":"useMutationObserver","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useMutationObserver/index.md","filePath":"core/useMutationObserver/index.md","lastUpdated":1737604618000}'),w={name:"core/useMutationObserver/index.md"},Y=Object.assign(w,{setup(y){const e=O({template:{value:{welcomeSFC:N}}}).serialize();return(r,s)=>{const t=m,a=D,d=u,o=c;return k(),h("div",null,[s[1]||(s[1]=i("h1",{id:"usemutationobserver",tabindex:"-1"},[l("useMutationObserver "),i("a",{class:"header-anchor",href:"#usemutationobserver","aria-label":"Permalink to “useMutationObserver”"},"​")],-1)),n(t,{fn:"useMutationObserver"}),s[2]||(s[2]=i("p",null,[l("监视对 DOM 树的变更。"),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",target:"_blank",rel:"noreferrer"},"MutationObserver MDN")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[l("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),n(a,null,{default:x(()=>[i("p",P,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useMutationObserver/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${R(e)}`,target:"_blank"},"playground (beta)",8,S)]),n(T)]),_:1}),s[4]||(s[4]=F("",7)),n(d,{fn:"useMutationObserver"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[l("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),n(o,{fn:"useMutationObserver"})])}}});export{J as __pageData,Y as default};

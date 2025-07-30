import{_ as u,a as c}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as D}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as A}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{u as m}from"./chunks/index.CLp6I5-5.js";import{d as b,a1 as B,r as f,z as o,i as h,o as k,j as i,F as v,O as _,t as C,n as E,q as M,Z as F,g as n,Y as O,y as l,w as x,H as R}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/index.BImTs33O.js";import"./chunks/index.B2rzktNR.js";import"./chunks/general.tY1gtZD0.js";const T=b({__name:"demo",setup(y){const p=B("el"),t=f([]),r=o({}),s=o({});return m(p,e=>{const a=e[0];a&&t.value.push(a.attributeName)},{attributes:!0}),setTimeout(()=>{r.value={test:!0,test2:!0}},1e3),setTimeout(()=>{s.value={color:"red"}},1550),(e,a)=>(k(),h("div",null,[i("div",{ref_key:"el",ref:p,class:M(r.value),style:E(s.value)},[(k(!0),h(v,null,_(t.value,(d,g)=>(k(),h("div",{key:g}," Mutation Attribute: "+C(d),1))),128))],6)]))}}),N=`<script setup lang="ts">
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
`,P={class:"demo-source-link"},S=["href"],J=JSON.parse('{"title":"useMutationObserver","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useMutationObserver/index.md","filePath":"core/useMutationObserver/index.md","lastUpdated":1753423581000}'),w={name:"core/useMutationObserver/index.md"},Y=Object.assign(w,{setup(y){const t=F({template:{value:{welcomeSFC:N}}}).serialize();return(r,s)=>{const e=A,a=D,d=u,g=c;return k(),h("div",null,[s[1]||(s[1]=i("h1",{id:"usemutationobserver",tabindex:"-1"},[l("useMutationObserver "),i("a",{class:"header-anchor",href:"#usemutationobserver","aria-label":"Permalink to “useMutationObserver”"},"​")],-1)),n(e,{fn:"useMutationObserver"}),s[2]||(s[2]=i("p",null,[l("监视对 DOM 树的变更。"),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",target:"_blank",rel:"noreferrer"},"MutationObserver MDN")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[l("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),n(a,null,{default:x(()=>[i("p",P,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useMutationObserver/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${R(t)}`,target:"_blank"},"playground (beta)",8,S)]),n(T)]),_:1}),s[4]||(s[4]=O("",7)),n(d,{fn:"useMutationObserver"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[l("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),n(g,{fn:"useMutationObserver"})])}}});export{J as __pageData,Y as default};

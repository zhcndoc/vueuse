import{_ as u,a as A}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as b}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as B}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{_ as m}from"./chunks/Note.B_ue-6bE.js";import{u as f}from"./chunks/index.DV1Rw-t_.js";import{d as F,z as r,i as g,o,F as C,j as i,g as a,w as y,y as e,t as d,Z as v,Y as _,H as E}from"./chunks/vue.DQfvmmyQ.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/filters.DSKJ-Ken.js";import"./chunks/index.CyaQpZZu.js";const x=F({__name:"demo",setup(c){const t=r(0),n=r(0),l=f(()=>{t.value+=1},1e3,{maxWait:5e3});function s(){n.value+=1,l()}return(p,h)=>{const k=m;return o(),g(C,null,[i("button",{onClick:s}," 点我！ "),a(k,null,{default:y(()=>h[0]||(h[0]=[e("此演示中延迟设置为 1000ms，最大等待时间设置为 5000ms。")])),_:1}),i("p",null,"按钮点击次数："+d(n.value),1),i("p",null,"事件处理程序调用次数："+d(t.value),1)],64)}}}),R=`<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import { shallowRef } from 'vue'

const updated = shallowRef(0)
const clicked = shallowRef(0)
const debouncedFn = useDebounceFn(() => {
  updated.value += 1
}, 1000, { maxWait: 5000 })

function clickedFn() {
  clicked.value += 1
  debouncedFn()
}
<\/script>

<template>
  <button @click="clickedFn">
    点我！
  </button>
  <note>此演示中延迟设置为 1000ms，最大等待时间设置为 5000ms。</note>

  <p>按钮点击次数：{{ clicked }}</p>
  <p>事件处理程序调用次数：{{ updated }}</p>
</template>
`,T={class:"demo-source-link"},w=["href"],W=JSON.parse('{"title":"useDebounceFn","description":"","frontmatter":{"category":"Utilities","related":"useThrottleFn"},"headers":[],"relativePath":"shared/useDebounceFn/index.md","filePath":"shared/useDebounceFn/index.md","lastUpdated":1742698055000}'),P={name:"shared/useDebounceFn/index.md"},G=Object.assign(P,{setup(c){const n=v({template:{value:{welcomeSFC:R}}}).serialize();return(l,s)=>{const p=B,h=b,k=u,D=A;return o(),g("div",null,[s[1]||(s[1]=i("h1",{id:"usedebouncefn",tabindex:"-1"},[e("useDebounceFn "),i("a",{class:"header-anchor",href:"#usedebouncefn","aria-label":"Permalink to “useDebounceFn”"},"​")],-1)),a(p,{fn:"useDebounceFn"}),s[2]||(s[2]=i("p",null,"延迟执行函数。",-1)),s[3]||(s[3]=i("blockquote",null,[i("p",null,"延迟是一个被过载的服务员：如果你不停地问他问题，直到你停下来并给他一些时间来考虑你最新的问题，他将会忽略你的请求。")],-1)),s[4]||(s[4]=i("h2",{id:"示例",tabindex:"-1"},[e("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(h,null,{default:y(()=>[i("p",T,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useDebounceFn/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${E(n)}`,target:"_blank"},"playground (beta)",8,w)]),a(x)]),_:1}),s[5]||(s[5]=_("",15)),a(k,{fn:"useDebounceFn"}),s[6]||(s[6]=i("h2",{id:"更新日志",tabindex:"-1"},[e("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(D,{fn:"useDebounceFn"})])}}});export{W as __pageData,G as default};

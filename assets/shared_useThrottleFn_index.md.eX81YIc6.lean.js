import{_ as u,a as A}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as f}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{_ as b}from"./chunks/Note.DW__0Z7J.js";import{u as _}from"./chunks/index.BTw337D0.js";import{d as F,z as r,i as o,o as g,j as i,g as a,w as c,y as e,t as d,Z as B,Y as v,H as T}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/filters.Dfclkjvt.js";import"./chunks/index.84cWVi_S.js";const C=F({__name:"demo",setup(D){const l=r(0),n=r(0),k=_(()=>{l.value+=1},1e3);function s(){n.value+=1,k()}return(p,t)=>{const h=b;return g(),o("div",null,[i("button",{onClick:s}," 点我！ "),a(h,null,{default:c(()=>t[0]||(t[0]=[e("此演示中延迟设置为 1000ms。",-1)])),_:1,__:[0]}),i("p",null,"按钮点击次数："+d(n.value),1),i("p",null,"事件处理程序调用次数："+d(l.value),1)])}}}),E=`<script setup lang="ts">
import { useThrottleFn } from '@vueuse/core'
import { shallowRef } from 'vue'

const updated = shallowRef(0)
const clicked = shallowRef(0)
const throttledFn = useThrottleFn(() => {
  updated.value += 1
}, 1000)

function clickedFn() {
  clicked.value += 1
  throttledFn()
}
<\/script>

<template>
  <div>
    <button @click="clickedFn">
      点我！
    </button>
    <note>此演示中延迟设置为 1000ms。</note>

    <p>按钮点击次数：{{ clicked }}</p>
    <p>事件处理程序调用次数：{{ updated }}</p>
  </div>
</template>
`,x={class:"demo-source-link"},P=["href"],G=JSON.parse('{"title":"useThrottleFn","description":"","frontmatter":{"category":"Utilities","related":"refThrottled, refDebounced, useDebounceFn"},"headers":[],"relativePath":"shared/useThrottleFn/index.md","filePath":"shared/useThrottleFn/index.md","lastUpdated":1742698055000}'),w={name:"shared/useThrottleFn/index.md"},H=Object.assign(w,{setup(D){const n=B({template:{value:{welcomeSFC:E}}}).serialize();return(k,s)=>{const p=f,t=m,h=u,y=A;return g(),o("div",null,[s[1]||(s[1]=i("h1",{id:"usethrottlefn",tabindex:"-1"},[e("useThrottleFn "),i("a",{class:"header-anchor",href:"#usethrottlefn","aria-label":"Permalink to “useThrottleFn”"},"​")],-1)),a(p,{fn:"useThrottleFn"}),s[2]||(s[2]=i("p",null,"节流执行函数。特别适用于限制事件处理程序在调整大小和滚动等事件上的执行频率。",-1)),s[3]||(s[3]=i("blockquote",null,[i("p",null,"节流就像一个弹簧，弹出一个小球后，它需要一些时间来收缩回去，所以除非准备好，否则不能再扔出更多的小球。")],-1)),s[4]||(s[4]=i("h2",{id:"示例",tabindex:"-1"},[e("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(t,null,{default:c(()=>[i("p",x,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useThrottleFn/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${T(n)}`,target:"_blank"},"playground (beta)",8,P)]),a(C)]),_:1}),s[5]||(s[5]=v("",9)),a(h,{fn:"useThrottleFn"}),s[6]||(s[6]=i("h2",{id:"更新日志",tabindex:"-1"},[e("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(y,{fn:"useThrottleFn"})])}}});export{G as __pageData,H as default};

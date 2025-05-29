import{_ as v,a as F}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as E}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{_ as C}from"./chunks/Note.jk4vUmz6.js";import{d as H,z as T,i as o,o as d,F as D,j as s,a2 as w,g as l,t as m,H as n,a5 as x,w as A,y as h,O as S,Z as $,Y as P}from"./chunks/vue.BjJVtbJX.js";import{u as U}from"./chunks/index.BZzDJXgF.js";import{t as z}from"./chunks/filters.qsUK02Mp.js";import{u as Y}from"./chunks/index.BbxnQnaR.js";import{f as O}from"./chunks/index.C6XTD2pi.js";import"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.qhPlAUjb.js";import"./chunks/index.BfsQhuKK.js";import"./chunks/index.C1_pRWtq.js";import"./chunks/index.CFuYet67.js";function V(y,k={}){const{throttle:e=200,trailing:p=!0}=k,a=z(e,p);return{...U(y,{...k,eventFilter:a})}}const M=["disabled"],N=["disabled"],I={class:"code-block mt-4"},j={class:"opacity-50 mr-2 font-mono"},q={class:"font-mono"},J=H({__name:"demo",setup(y){function k(f){return O(new Date(f),"YYYY-MM-DD HH:mm:ss")}const e=T(1e3),{count:p,inc:a,dec:r}=Y(),{history:g,undo:u,redo:c,canUndo:b,canRedo:B}=V(p,{deep:!0,throttle:e,capacity:10,trailing:!0});return(f,i)=>{const R=C;return d(),o(D,null,[s("div",null,"计数："+m(n(p)),1),s("button",{onClick:i[0]||(i[0]=t=>n(a)())}," 增加 "),s("button",{onClick:i[1]||(i[1]=t=>n(r)())}," 减少 "),i[6]||(i[6]=s("span",{class:"ml-2"},"/",-1)),s("button",{disabled:!n(b),onClick:i[2]||(i[2]=t=>n(u)())}," 撤销 ",8,M),s("button",{disabled:!n(B),onClick:i[3]||(i[3]=t=>n(c)())}," 重做 ",8,N),i[7]||(i[7]=s("br",null,null,-1)),i[8]||(i[8]=s("span",null,"延迟时间（毫秒）：",-1)),w(s("input",{"onUpdate:modelValue":i[4]||(i[4]=t=>e.value=t),type:"number"},null,512),[[x,e.value]]),i[9]||(i[9]=s("br",null,null,-1)),i[10]||(i[10]=s("br",null,null,-1)),l(R,null,{default:A(()=>i[5]||(i[5]=[h("历史记录（为演示目的限制为10条记录）")])),_:1,__:[5]}),s("div",I,[(d(!0),o(D,null,S(n(g),t=>(d(),o("div",{key:t.timestamp},[s("span",j,m(k(t.timestamp)),1),s("span",q,"{ value: "+m(t.snapshot)+" }",1)]))),128))])],64)}}}),L=`<script setup lang="ts">
import { formatDate, useCounter, useThrottledRefHistory } from '@vueuse/core'
import { shallowRef } from 'vue'

function format(ts: number) {
  return formatDate(new Date(ts), 'YYYY-MM-DD HH:mm:ss')
}
const delay = shallowRef(1000)

const { count, inc, dec } = useCounter()
const { history, undo, redo, canUndo, canRedo } = useThrottledRefHistory(
  count,
  {
    deep: true,
    throttle: delay,
    capacity: 10,
    trailing: true,
  },
)
<\/script>

<template>
  <div>计数：{{ count }}</div>
  <button @click="inc()">
    增加
  </button>
  <button @click="dec()">
    减少
  </button>
  <span class="ml-2">/</span>
  <button :disabled="!canUndo" @click="undo()">
    撤销
  </button>
  <button :disabled="!canRedo" @click="redo()">
    重做
  </button>
  <br>
  <span>延迟时间（毫秒）：</span>
  <input v-model="delay" type="number">
  <br>
  <br>
  <note>历史记录（为演示目的限制为10条记录）</note>
  <div class="code-block mt-4">
    <div v-for="i in history" :key="i.timestamp">
      <span class="opacity-50 mr-2 font-mono">{{ format(i.timestamp) }}</span>
      <span class="font-mono">{ value: {{ i.snapshot }} }</span>
    </div>
  </div>
</template>
`,Z={class:"demo-source-link"},G=["href"],ys=JSON.parse('{"title":"useThrottledRefHistory","description":"","frontmatter":{"category":"State","related":"useDebouncedRefHistory, useRefHistory"},"headers":[],"relativePath":"core/useThrottledRefHistory/index.md","filePath":"core/useThrottledRefHistory/index.md","lastUpdated":1739784586000}'),K={name:"core/useThrottledRefHistory/index.md"},gs=Object.assign(K,{setup(y){const e=$({template:{value:{welcomeSFC:L}}}).serialize();return(p,a)=>{const r=E,g=_,u=v,c=F;return d(),o("div",null,[a[1]||(a[1]=s("h1",{id:"usethrottledrefhistory",tabindex:"-1"},[h("useThrottledRefHistory "),s("a",{class:"header-anchor",href:"#usethrottledrefhistory","aria-label":"Permalink to “useThrottledRefHistory”"},"​")],-1)),l(r,{fn:"useThrottledRefHistory"}),a[2]||(a[2]=s("p",null,[h("带有节流过滤器的 "),s("a",{href:"/core/useRefHistory/"},[s("code",null,"useRefHistory")]),h(" 的简写。")],-1)),a[3]||(a[3]=s("h2",{id:"示例",tabindex:"-1"},[h("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),l(g,null,{default:A(()=>[s("p",Z,[a[0]||(a[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useThrottledRefHistory/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${n(e)}`,target:"_blank"},"playground (beta)",8,G)]),l(J)]),_:1}),a[4]||(a[4]=P("",8)),l(u,{fn:"useThrottledRefHistory"}),a[5]||(a[5]=s("h2",{id:"更新日志",tabindex:"-1"},[h("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(c,{fn:"useThrottledRefHistory"})])}}});export{ys as __pageData,gs as default};

import{_ as f,a as v}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as B}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{_}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.DvmxuIkN.js";import{B as F,z as g,A as u,d as L,D as E,i as y,o as A,F as C,j as i,y as h,g as p,t as W,Z as x,Y as w,w as S,H as P}from"./chunks/vue.DQfvmmyQ.js";import{g as q,b as T}from"./chunks/metadata.HXIr2NKd.js";import{u as R}from"./chunks/index.CUTfUKb-.js";import{u as N}from"./chunks/index.DK97_WvT.js";import{u as O}from"./chunks/index.BXXSfDxN.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/general.CGRH32nb.js";import"./chunks/index.B5l6yAbo.js";function V(r,a,t){return F(r,(s,n,k)=>{s&&a(s,n,k)},{...t,once:!1})}function I(r={}){const{navigator:a=T,document:t=q}=r,l=g(!1),s=g(null),n=R({document:t}),k=O(()=>a&&"wakeLock"in a),d=u(()=>!!s.value&&n.value==="visible");k.value&&(N(s,"release",()=>{var e;l.value=((e=s.value)==null?void 0:e.type)??!1},{passive:!0}),V(()=>n.value==="visible"&&(t==null?void 0:t.visibilityState)==="visible"&&l.value,e=>{l.value=!1,o(e)}));async function o(e){var c;await((c=s.value)==null?void 0:c.release()),s.value=k.value?await a.wakeLock.request(e):null}async function D(e){n.value==="visible"?await o(e):l.value=e}async function m(){l.value=!1;const e=s.value;s.value=null,await(e==null?void 0:e.release())}return{sentinel:s,isSupported:k,isActive:d,request:D,forceRequest:o,release:m}}const $=L({__name:"demo",setup(r){const a=E(I()),t=u(()=>a.isActive?"OFF":"ON");function l(){return a.isActive?a.release():a.request("screen")}return(s,n)=>{const k=_;return A(),y(C,null,[i("div",null,[n[0]||(n[0]=h(" 是否支持: ")),p(k,{value:a.isSupported},null,8,["value"])]),i("div",null,[n[1]||(n[1]=h(" 激活状态: ")),p(k,{value:a.isActive},null,8,["value"])]),i("button",{onClick:l},W(t.value),1)],64)}}}),U=`<script setup lang="ts">
import { useWakeLock } from '@vueuse/core'
import { computed, reactive } from 'vue'

const wakeLock = reactive(useWakeLock())
const text = computed(() => wakeLock.isActive ? 'OFF' : 'ON')
function onClick() {
  return wakeLock.isActive ? wakeLock.release() : wakeLock.request('screen')
}
<\/script>

<template>
  <div>
    是否支持: <BooleanDisplay :value="wakeLock.isSupported" />
  </div>
  <div>
    激活状态: <BooleanDisplay :value="wakeLock.isActive" />
  </div>
  <button @click="onClick">
    {{ text }}
  </button>
</template>
`,j={class:"demo-source-link"},z=["href"],ts=JSON.parse('{"title":"useWakeLock","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useWakeLock/index.md","filePath":"core/useWakeLock/index.md","lastUpdated":1721483906000}'),H={name:"core/useWakeLock/index.md"},ks=Object.assign(H,{setup(r){const t=x({template:{value:{welcomeSFC:U}}}).serialize();return(l,s)=>{const n=b,k=B,d=f,o=v;return A(),y("div",null,[s[1]||(s[1]=i("h1",{id:"usewakelock",tabindex:"-1"},[h("useWakeLock "),i("a",{class:"header-anchor",href:"#usewakelock","aria-label":"Permalink to “useWakeLock”"},"​")],-1)),p(n,{fn:"useWakeLock"}),s[2]||(s[2]=i("p",null,[h("响应式"),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API",target:"_blank",rel:"noreferrer"},"屏幕唤醒锁定 API"),h("。提供了一种防止设备在应用程序需要持续运行时变暗或锁定屏幕的方法。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[h("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),p(k,null,{default:S(()=>[i("p",j,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useWakeLock/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${P(t)}`,target:"_blank"},"playground (beta)",8,z)]),p($)]),_:1}),s[4]||(s[4]=w("",10)),p(d,{fn:"useWakeLock"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[h("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),p(o,{fn:"useWakeLock"})])}}});export{ts as __pageData,ks as default};

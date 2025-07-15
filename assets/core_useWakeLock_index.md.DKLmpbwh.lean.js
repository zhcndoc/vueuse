import{_ as m,a as f}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_ as v}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as B}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{_ as b}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.y710iK4K.js";import{B as _,z as c,A as g,d as F,D as L,i as u,o as y,F as E,j as i,y as h,g as p,t as C,Z as W,Y as x,w,H as S}from"./chunks/vue.DDc96eEg.js";import{g as P,b as q}from"./chunks/metadata.DSy5Z-Tw.js";import{u as T}from"./chunks/index.Bt3LaTdc.js";import{u as R}from"./chunks/index.CHzdlLbS.js";import{u as N}from"./chunks/index.rocSL1WN.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.BrP_zX4n.js";function O(r,a,k){return _(r,(s,e,n)=>{s&&a(s,e,n)},{...k,once:!1})}function V(r={}){const{navigator:a=q,document:k=P}=r,t=c(!1),s=c(null),e=T({document:k}),n=N(()=>a&&"wakeLock"in a),d=g(()=>!!s.value&&e.value==="visible");n.value&&(R(s,"release",()=>{t.value=s.value?.type??!1},{passive:!0}),O(()=>e.value==="visible"&&k?.visibilityState==="visible"&&t.value,l=>{t.value=!1,o(l)}));async function o(l){await s.value?.release(),s.value=n.value?await a.wakeLock.request(l):null}async function A(l){e.value==="visible"?await o(l):t.value=l}async function D(){t.value=!1;const l=s.value;s.value=null,await l?.release()}return{sentinel:s,isSupported:n,isActive:d,request:A,forceRequest:o,release:D}}const I=F({__name:"demo",setup(r){const a=L(V()),k=g(()=>a.isActive?"OFF":"ON");function t(){return a.isActive?a.release():a.request("screen")}return(s,e)=>{const n=b;return y(),u(E,null,[i("div",null,[e[0]||(e[0]=h(" 是否支持: ")),p(n,{value:a.isSupported},null,8,["value"])]),i("div",null,[e[1]||(e[1]=h(" 激活状态: ")),p(n,{value:a.isActive},null,8,["value"])]),i("button",{onClick:t},C(k.value),1)],64)}}}),$=`<script setup lang="ts">
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
`,U={class:"demo-source-link"},j=["href"],ns=JSON.parse('{"title":"useWakeLock","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useWakeLock/index.md","filePath":"core/useWakeLock/index.md","lastUpdated":1721483906000}'),z={name:"core/useWakeLock/index.md"},ts=Object.assign(z,{setup(r){const k=W({template:{value:{welcomeSFC:$}}}).serialize();return(t,s)=>{const e=B,n=v,d=m,o=f;return y(),u("div",null,[s[1]||(s[1]=i("h1",{id:"usewakelock",tabindex:"-1"},[h("useWakeLock "),i("a",{class:"header-anchor",href:"#usewakelock","aria-label":"Permalink to “useWakeLock”"},"​")],-1)),p(e,{fn:"useWakeLock"}),s[2]||(s[2]=i("p",null,[h("响应式"),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API",target:"_blank",rel:"noreferrer"},"屏幕唤醒锁定 API"),h("。提供了一种防止设备在应用程序需要持续运行时变暗或锁定屏幕的方法。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[h("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),p(n,null,{default:w(()=>[i("p",U,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useWakeLock/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${S(k)}`,target:"_blank"},"playground (beta)",8,j)]),p(I)]),_:1}),s[4]||(s[4]=x("",10)),p(d,{fn:"useWakeLock"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[h("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),p(o,{fn:"useWakeLock"})])}}});export{ns as __pageData,ts as default};

import{_ as A,a as D}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as f}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as B}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{a as b,t as v}from"./chunks/metadata.HXIr2NKd.js";import{u as _}from"./chunks/index.AoACseWR.js";import{z as c,d as C,i as y,o as m,j as i,t as g,H as l,Z as P,g as r,Y as T,y as d,w as F}from"./chunks/vue.DQfvmmyQ.js";import{b as x}from"./chunks/general.CGRH32nb.js";import"./chunks/utils.B5e_uQLX.js";function E(o,h,k={}){const{immediate:p=!0,immediateCallback:s=!1}=k,{start:e}=_(n,h,{immediate:p}),a=c(!1);async function n(){a.value&&(await o(),e())}function t(){a.value||(a.value=!0,s&&o(),e())}function u(){a.value=!1}return p&&b&&t(),v(u),{isActive:a,pause:u,resume:t}}const w=C({__name:"demo",setup(o){const h=c(0);async function k(){await x(1e3),h.value++}const{isActive:p,pause:s,resume:e}=E(k,1e3);return(a,n)=>(m(),y("div",null,[i("div",null,"Count: "+g(h.value),1),i("div",null,"isActive: "+g(l(p)),1),i("div",null,[i("button",{onClick:n[0]||(n[0]=(...t)=>l(s)&&l(s)(...t))}," 暂停 "),i("button",{onClick:n[1]||(n[1]=(...t)=>l(e)&&l(e)(...t))}," 恢复 ")])]))}}),S=`<script setup lang="ts">
import { promiseTimeout, useTimeoutPoll } from '@vueuse/core'
import { shallowRef } from 'vue'

const count = shallowRef(0)

async function fetchData() {
  await promiseTimeout(1000)
  count.value++
}

const { isActive, pause, resume } = useTimeoutPoll(fetchData, 1000)
<\/script>

<template>
  <div>
    <div>Count: {{ count }}</div>
    <div>isActive: {{ isActive }}</div>
    <div>
      <button @click="pause">
        暂停
      </button>
      <button @click="resume">
        恢复
      </button>
    </div>
  </div>
</template>
`,N={class:"demo-source-link"},O=["href"],J=JSON.parse('{"title":"useTimeoutPoll","description":"","frontmatter":{"category":"Utilities"},"headers":[],"relativePath":"core/useTimeoutPoll/index.md","filePath":"core/useTimeoutPoll/index.md","lastUpdated":1715934697000}'),R={name:"core/useTimeoutPoll/index.md"},M=Object.assign(R,{setup(o){const k=P({template:{value:{welcomeSFC:S}}}).serialize();return(p,s)=>{const e=B,a=f,n=A,t=D;return m(),y("div",null,[s[1]||(s[1]=i("h1",{id:"usetimeoutpoll",tabindex:"-1"},[d("useTimeoutPoll "),i("a",{class:"header-anchor",href:"#usetimeoutpoll","aria-label":"Permalink to “useTimeoutPoll”"},"​")],-1)),r(e,{fn:"useTimeoutPoll"}),s[2]||(s[2]=i("p",null,"使用超时来轮询某些内容。在最后一个任务完成后触发回调。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[d("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),r(a,null,{default:F(()=>[i("p",N,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useTimeoutPoll/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${l(k)}`,target:"_blank"},"playground (beta)",8,O)]),r(w)]),_:1}),s[4]||(s[4]=T("",7)),r(n,{fn:"useTimeoutPoll"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[d("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),r(t,{fn:"useTimeoutPoll"})])}}});export{J as __pageData,M as default};

import{_ as D,a as u}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as c}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{a as b,_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{t as f}from"./chunks/index.84cWVi_S.js";import{b as B}from"./chunks/metadata.ByJC-ruD.js";import{u as v}from"./chunks/index.BImTs33O.js";import{d as _,i as o,o as g,j as i,k as C,t as V,H as h,Z as F,g as p,Y as E,y as r,w as x}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B2rzktNR.js";function S(y){const{pattern:e=[],interval:l=0,navigator:n=B}={},s=v(()=>typeof n<"u"&&"vibrate"in n),a=f(e);let t;const k=(A=a.value)=>{s.value&&n.vibrate(A)},d=()=>{s.value&&n.vibrate(0),t?.pause()};return l>0&&(t=b(k,l,{immediate:!1,immediateCallback:!1})),{isSupported:s,pattern:e,intervalControls:t,vibrate:k,stop:d}}const P={class:"grid grid-cols-1 gap-x-4 gap-y-4"},I={key:0},N=_({__name:"demo",setup(y){const{isSupported:e,vibrate:l,stop:n}=S();return(s,a)=>(g(),o("div",P,[i("div",null,V(h(e)?"Vibration API Supported":"Your browser does not support the Vibration API"),1),h(e)?(g(),o("div",I,[i("button",{onClick:a[0]||(a[0]=t=>h(l)())}," Vibrate "),i("button",{onClick:a[1]||(a[1]=t=>h(n)())}," Stop ")])):C("",!0)]))}}),$=`<script setup lang="ts">
import { useVibrate } from './index'

const {
  isSupported,
  vibrate,
  stop,
} = useVibrate()
<\/script>

<template>
  <div class="grid grid-cols-1 gap-x-4 gap-y-4">
    <div>{{ isSupported ? 'Vibration API Supported' : 'Your browser does not support the Vibration API' }}</div>

    <div v-if="isSupported">
      <button @click="vibrate()">
        Vibrate
      </button>

      <button @click="stop()">
        Stop
      </button>
    </div>
  </div>
</template>
`,R={class:"demo-source-link"},T=["href"],J=JSON.parse('{"title":"useVibrate","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useVibrate/index.md","filePath":"core/useVibrate/index.md","lastUpdated":1715934697000}'),w={name:"core/useVibrate/index.md"},Z=Object.assign(w,{setup(y){const l=F({template:{value:{welcomeSFC:$}}}).serialize();return(n,s)=>{const a=m,t=c,k=D,d=u;return g(),o("div",null,[s[1]||(s[1]=i("h1",{id:"usevibrate",tabindex:"-1"},[r("useVibrate "),i("a",{class:"header-anchor",href:"#usevibrate","aria-label":"Permalink to “useVibrate”"},"​")],-1)),p(a,{fn:"useVibrate"}),s[2]||(s[2]=i("p",null,[r("响应式"),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API",target:"_blank",rel:"noreferrer"},"振动 API")],-1)),s[3]||(s[3]=i("p",null,"大多数现代移动设备都包含振动硬件，使软件能够通过使设备震动来向用户提供物理反馈。",-1)),s[4]||(s[4]=i("p",null,"振动 API 为 Web 应用程序提供了访问此硬件的能力，如果设备支持该功能，则允许使用它，如果设备不支持，则不执行任何操作。",-1)),s[5]||(s[5]=i("h2",{id:"示例",tabindex:"-1"},[r("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),p(t,null,{default:x(()=>[i("p",R,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useVibrate/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${h(l)}`,target:"_blank"},"playground (beta)",8,T)]),p(N)]),_:1}),s[6]||(s[6]=E("",9)),p(k,{fn:"useVibrate"}),s[7]||(s[7]=i("h2",{id:"更新日志",tabindex:"-1"},[r("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),p(d,{fn:"useVibrate"})])}}});export{J as __pageData,Z as default};

import{_ as D,a as c}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as u}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{a as B,_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{z as f,N as g,d as v,i as y,o,j as i,t as b,H as A,Z as _,g as n,Y as F,y as d,w as E}from"./chunks/vue.DQfvmmyQ.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";function C(e=1e3,t={}){const{controls:l=!1,immediate:k=!0,callback:s}=t,a=f(0),h=()=>a.value+=1,p=()=>{a.value=0},r=B(s?()=>{h(),s(a.value)}:h,e,{immediate:k});return l?{counter:g(a),reset:p,...r}:g(a)}const I=v({__name:"demo",setup(e){const t=C(200);return(l,k)=>(o(),y("div",null,[i("p",null,"间隔: "+b(A(t)),1)]))}}),x=`<script setup lang="ts">
import { useInterval } from '@vueuse/core'

const counter = useInterval(200)
<\/script>

<template>
  <div>
    <p>间隔: {{ counter }}</p>
  </div>
</template>
`,R={class:"demo-source-link"},P=["href"],$=JSON.parse('{"title":"useInterval","description":"","frontmatter":{"category":"Animation"},"headers":[],"relativePath":"shared/useInterval/index.md","filePath":"shared/useInterval/index.md","lastUpdated":1716184754000}'),S={name:"shared/useInterval/index.md"},j=Object.assign(S,{setup(e){const l=_({template:{value:{welcomeSFC:x}}}).serialize();return(k,s)=>{const a=m,h=u,p=D,r=c;return o(),y("div",null,[s[1]||(s[1]=i("h1",{id:"useinterval",tabindex:"-1"},[d("useInterval "),i("a",{class:"header-anchor",href:"#useinterval","aria-label":"Permalink to “useInterval”"},"​")],-1)),n(a,{fn:"useInterval"}),s[2]||(s[2]=i("p",null,"在每个间隔上增加的响应式计数器",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[d("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),n(h,null,{default:E(()=>[i("p",R,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useInterval/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${A(l)}`,target:"_blank"},"playground (beta)",8,P)]),n(I)]),_:1}),s[4]||(s[4]=F("",8)),n(p,{fn:"useInterval"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[d("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),n(r,{fn:"useInterval"})])}}});export{$ as __pageData,j as default};

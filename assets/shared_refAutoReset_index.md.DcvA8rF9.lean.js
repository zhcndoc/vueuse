import{_ as c,a as f}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_ as A}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as D}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{t as m}from"./chunks/metadata.DSy5Z-Tw.js";import{ac as b,a3 as r,d as _,i as o,o as g,j as i,t as B,H as u,Z as R,g as n,Y as v,y as d,w as C}from"./chunks/vue.DDc96eEg.js";import"./chunks/utils.B5e_uQLX.js";function F(l,e=1e4){return b((t,h)=>{let s=r(l),a;const k=()=>setTimeout(()=>{s=r(l),h()},r(e));return m(()=>{clearTimeout(a)}),{get(){return t(),s},set(p){s=p,h(),clearTimeout(a),a=k()}}})}const E=_({__name:"demo",setup(l){const e=F("Default message",1e3);function t(){e.value="Changed"}return(h,s)=>(g(),o("div",null,[i("button",{onClick:s[0]||(s[0]=a=>t())}," 更改 message "),i("p",null,B(u(e)),1)]))}}),x=`<script setup lang="ts">
import { refAutoReset } from '@vueuse/core'

const message = refAutoReset('Default message', 1000)

function setMessage() {
  message.value = 'Changed'
}
<\/script>

<template>
  <div>
    <button @click="setMessage()">
      更改 message
    </button>
    <p>
      {{ message }}
    </p>
  </div>
</template>
`,T={class:"demo-source-link"},P=["href"],I=JSON.parse('{"title":"refAutoReset","description":"","frontmatter":{"category":"Reactivity","alias":"autoResetRef"},"headers":[],"relativePath":"shared/refAutoReset/index.md","filePath":"shared/refAutoReset/index.md","lastUpdated":1742698055000}'),S={name:"shared/refAutoReset/index.md"},j=Object.assign(S,{setup(l){const t=R({template:{value:{welcomeSFC:x}}}).serialize();return(h,s)=>{const a=D,k=A,p=c,y=f;return g(),o("div",null,[s[1]||(s[1]=i("h1",{id:"refautoreset",tabindex:"-1"},[d("refAutoReset "),i("a",{class:"header-anchor",href:"#refautoreset","aria-label":"Permalink to “refAutoReset”"},"​")],-1)),n(a,{fn:"refAutoReset"}),s[2]||(s[2]=i("p",null,"一个在一段时间后将重置为默认值的 ref。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[d("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),n(k,null,{default:C(()=>[i("p",T,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/refAutoReset/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${u(t)}`,target:"_blank"},"playground (beta)",8,P)]),n(E)]),_:1}),s[4]||(s[4]=v("",8)),n(p,{fn:"refAutoReset"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[d("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),n(y,{fn:"refAutoReset"})])}}});export{I as __pageData,j as default};

import{_ as c,a as A}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as u}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as B}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{u as E}from"./chunks/index.BImTs33O.js";import{z as f,d as m,i as d,H as n,o,j as s,t as y,y as h,n as b,Z as _,g as l,Y as v,w as C}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B2rzktNR.js";function F(r={}){const{initialValue:e=""}=r,p=E(()=>typeof window<"u"&&"EyeDropper"in window),t=f(e);async function i(a){if(!p.value)return;const k=await new window.EyeDropper().open(a);return t.value=k.sRGBHex,k}return{isSupported:p,sRGBHex:t,open:i}}const x={key:0},S=["disabled"],R={key:1},P=m({__name:"demo",setup(r){const{isSupported:e,open:p,sRGBHex:t}=F();return(i,a)=>n(e)?(o(),d("div",x,[s("div",null,"是否支持: "+y(n(e)),1),s("div",null,[a[1]||(a[1]=h("sRGB十六进制: ",-1)),s("span",{style:b({color:n(t)})},y(n(t)),5)]),s("button",{disabled:!n(e),onClick:a[0]||(a[0]=()=>n(p)())}," 打开取色器 ",8,S)])):(o(),d("div",R,a[2]||(a[2]=[s("span",null,"你的浏览器不支持此功能",-1)])))}}),w=`<script lang="ts" setup>
import { useEyeDropper } from '@vueuse/core'

const { isSupported, open, sRGBHex } = useEyeDropper()
<\/script>

<template>
  <div v-if="isSupported">
    <div>是否支持: {{ isSupported }}</div>
    <div>sRGB十六进制: <span :style="{ color: sRGBHex }">{{ sRGBHex }}</span></div>
    <button
      :disabled="!isSupported"
      @click="() => open()"
    >
      打开取色器
    </button>
  </div>
  <div v-else>
    <span>你的浏览器不支持此功能</span>
  </div>
</template>
`,G={class:"demo-source-link"},H=["href"],W=JSON.parse('{"title":"useEyeDropper","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useEyeDropper/index.md","filePath":"core/useEyeDropper/index.md","lastUpdated":1715934697000}'),O={name:"core/useEyeDropper/index.md"},j=Object.assign(O,{setup(r){const p=_({template:{value:{welcomeSFC:w}}}).serialize();return(t,i)=>{const a=B,g=u,k=c,D=A;return o(),d("div",null,[i[1]||(i[1]=s("h1",{id:"useeyedropper",tabindex:"-1"},[h("useEyeDropper "),s("a",{class:"header-anchor",href:"#useeyedropper","aria-label":"Permalink to “useEyeDropper”"},"​")],-1)),l(a,{fn:"useEyeDropper"}),i[2]||(i[2]=s("p",null,[h("响应式的 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",target:"_blank",rel:"noreferrer"},"EyeDropper API")],-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[h("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),l(g,null,{default:C(()=>[s("p",G,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useEyeDropper/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${n(p)}`,target:"_blank"},"playground (beta)",8,H)]),l(P)]),_:1}),i[4]||(i[4]=v("",9)),l(k,{fn:"useEyeDropper"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[h("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(D,{fn:"useEyeDropper"})])}}});export{W as __pageData,j as default};

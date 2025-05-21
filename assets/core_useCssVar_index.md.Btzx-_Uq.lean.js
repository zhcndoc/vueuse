import{_ as u,a as B}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as f}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as C}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{u as g}from"./chunks/index.Dn9jmOT9.js";import{d as m,a1 as y,z as v,i as c,o as A,F as b,j as i,t as p,H as t,n as _,Z as V,g as l,Y as E,y as r,w as F}from"./chunks/vue.DQfvmmyQ.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/index.BcBRhzZe.js";import"./chunks/index.BXXSfDxN.js";import"./chunks/index.B5l6yAbo.js";import"./chunks/general.CGRH32nb.js";const x=m({__name:"demo",setup(D){const h=y("el"),n=g("--color",h);function o(){n.value==="#df8543"?n.value="#7fa998":n.value="#df8543"}const s=y("elv"),a=v("--color"),e=g(a,s);function k(){a.value==="--color"?a.value="--color-one":a.value="--color"}return(d,P)=>(A(),c(b,null,[i("div",{ref_key:"el",ref:h,style:{"--color":"#7fa998",color:"var(--color)"}}," 示例文字，"+p(t(n)),513),i("button",{onClick:o}," 更改颜色 "),i("div",{ref_key:"elv",ref:s,style:_([{"--color":"#7fa998","--color-one":"#df8543"},{color:t(e)}])}," 示例文字，"+p(a.value)+"："+p(t(e)),5),i("button",{style:{"margin-left":"0"},onClick:k}," 更改颜色变量 ")],64))}}),R=`<script setup lang="ts">
import { useCssVar } from '@vueuse/core'
import { shallowRef, useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const color = useCssVar('--color', el)

function switchColor() {
  if (color.value === '#df8543')
    color.value = '#7fa998'
  else
    color.value = '#df8543'
}

const elv = useTemplateRef('elv')
const key = shallowRef('--color')
const colorVal = useCssVar(key, elv)
function changeVar() {
  if (key.value === '--color')
    key.value = '--color-one'
  else
    key.value = '--color'
}
<\/script>

<template>
  <div ref="el" style="--color: #7fa998; color: var(--color)">
    示例文字，{{ color }}
  </div>
  <button @click="switchColor">
    更改颜色
  </button>
  <div ref="elv" style="--color: #7fa998; --color-one: #df8543;" :style="{ color: colorVal }">
    示例文字，{{ key }}：{{ colorVal }}
  </div>
  <button style="margin-left: 0;" @click="changeVar">
    更改颜色变量
  </button>
</template>
`,T={class:"demo-source-link"},S=["href"],Y=JSON.parse('{"title":"useCssVar","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useCssVar/index.md","filePath":"core/useCssVar/index.md","lastUpdated":1737604618000}'),w={name:"core/useCssVar/index.md"},Z=Object.assign(w,{setup(D){const n=V({template:{value:{welcomeSFC:R}}}).serialize();return(o,s)=>{const a=C,e=f,k=u,d=B;return A(),c("div",null,[s[1]||(s[1]=i("h1",{id:"usecssvar",tabindex:"-1"},[r("useCssVar "),i("a",{class:"header-anchor",href:"#usecssvar","aria-label":"Permalink to “useCssVar”"},"​")],-1)),l(a,{fn:"useCssVar"}),s[2]||(s[2]=i("p",null,"操作 CSS 变量",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[r("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),l(e,null,{default:F(()=>[i("p",T,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useCssVar/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${t(n)}`,target:"_blank"},"playground (beta)",8,S)]),l(x)]),_:1}),s[4]||(s[4]=E("",7)),l(k,{fn:"useCssVar"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[r("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(d,{fn:"useCssVar"})])}}});export{Y as __pageData,Z as default};

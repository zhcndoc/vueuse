import{_ as y,a as D}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as u}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{u as A}from"./chunks/index.CA15bYam.js";import{r as f,Y as b}from"./chunks/index.DTDykmio.js";import{d as v,D as B,i as p,o as r,t as _,H as d,Z as E,j as i,g as a,Y as C,y as n,w as F}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.qy4VQT1o.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.BImTs33O.js";import"./chunks/index.B2rzktNR.js";const O={lang:"yaml"},x=v({__name:"demo",setup(o){const h=f(s=>b.stringify(s,(l,t)=>{if(typeof t!="function")return t},{singleQuote:!0,flowCollectionPadding:!1})),e=B(A()),k=h(e);return(s,l)=>(r(),p("pre",O,_(d(k)),1))}}),P=`<script setup lang="ts">
import { reactify, useDeviceOrientation } from '@vueuse/core'
import { reactive } from 'vue'
import YAML from 'yaml'

const stringify = reactify(
  (input: any) => YAML.stringify(input, (k, v) => {
    if (typeof v === 'function') {
      return undefined
    }
    return v
  }, {
    singleQuote: true,
    flowCollectionPadding: false,
  }),
)

const orientation = reactive(useDeviceOrientation())
const text = stringify(orientation)
<\/script>

<template>
  <pre lang="yaml">{{ text }}</pre>
</template>
`,S={class:"demo-source-link"},R=["href"],Q=JSON.parse('{"title":"useDeviceOrientation","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useDeviceOrientation/index.md","filePath":"core/useDeviceOrientation/index.md","lastUpdated":1741244545000}'),T={name:"core/useDeviceOrientation/index.md"},G=Object.assign(T,{setup(o){const e=E({template:{value:{welcomeSFC:P}}}).serialize();return(k,s)=>{const l=m,t=u,g=y,c=D;return r(),p("div",null,[s[1]||(s[1]=i("h1",{id:"usedeviceorientation",tabindex:"-1"},[n("useDeviceOrientation "),i("a",{class:"header-anchor",href:"#usedeviceorientation","aria-label":"Permalink to “useDeviceOrientation”"},"​")],-1)),a(l,{fn:"useDeviceOrientation"}),s[2]||(s[2]=i("p",null,[n("响应式 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent",target:"_blank",rel:"noreferrer"},"DeviceOrientationEvent"),n("。为 Web 开发者提供来自运行网页的设备的物理方向信息。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[n("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(t,null,{default:F(()=>[i("p",S,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useDeviceOrientation/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${d(e)}`,target:"_blank"},"playground (beta)",8,R)]),a(x)]),_:1}),s[4]||(s[4]=C("",11)),a(g,{fn:"useDeviceOrientation"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[n("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(c,{fn:"useDeviceOrientation"})])}}});export{Q as __pageData,G as default};

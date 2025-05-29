import{_ as y,a as u}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as D}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{u as f}from"./chunks/index.BOLEnv1d.js";import{r as A,Y as b}from"./chunks/index.m5AtOY8x.js";import{d as v,D as B,i as p,o as r,t as _,H as d,Z as C,j as i,g as a,Y as E,y as t,w as O}from"./chunks/vue.BjJVtbJX.js";import"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.DEO4egZK.js";import"./chunks/index.BsCVlyoA.js";import"./chunks/general.CGRH32nb.js";import"./chunks/index.D6Ixh6S-.js";import"./chunks/index.CBIpye6U.js";const F={lang:"yaml"},x=v({__name:"demo",setup(o){const h=A(s=>b.stringify(s,(l,n)=>{if(typeof n!="function")return n},{singleQuote:!0,flowCollectionPadding:!1})),e=B(f()),k=h(e);return(s,l)=>(r(),p("pre",F,_(d(k)),1))}}),P=`<script setup lang="ts">
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
`,S={class:"demo-source-link"},R=["href"],Q=JSON.parse('{"title":"useDeviceOrientation","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useDeviceOrientation/index.md","filePath":"core/useDeviceOrientation/index.md","lastUpdated":1741244545000}'),w={name:"core/useDeviceOrientation/index.md"},G=Object.assign(w,{setup(o){const e=C({template:{value:{welcomeSFC:P}}}).serialize();return(k,s)=>{const l=m,n=D,g=y,c=u;return r(),p("div",null,[s[1]||(s[1]=i("h1",{id:"usedeviceorientation",tabindex:"-1"},[t("useDeviceOrientation "),i("a",{class:"header-anchor",href:"#usedeviceorientation","aria-label":"Permalink to “useDeviceOrientation”"},"​")],-1)),a(l,{fn:"useDeviceOrientation"}),s[2]||(s[2]=i("p",null,[t("响应式 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent",target:"_blank",rel:"noreferrer"},"DeviceOrientationEvent"),t("。为 Web 开发者提供来自运行网页的设备的物理方向信息。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[t("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(n,null,{default:O(()=>[i("p",S,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useDeviceOrientation/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${d(e)}`,target:"_blank"},"playground (beta)",8,R)]),a(x)]),_:1}),s[4]||(s[4]=E("",11)),a(g,{fn:"useDeviceOrientation"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[t("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(c,{fn:"useDeviceOrientation"})])}}});export{Q as __pageData,G as default};

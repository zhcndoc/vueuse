import{_ as y,a as f}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as D}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{w as v}from"./chunks/index.qy4VQT1o.js";import{d as _,n as A}from"./chunks/metadata.ByJC-ruD.js";import{u as x}from"./chunks/index.DSKoMuYC.js";import{z as b,G as P,d as R,D as B,i as o,o as d,F as C,j as s,t as E,H as c,Z as F,g as n,Y as r,y as k,w}from"./chunks/vue.K-Nh9t7y.js";import{r as S,Y as T}from"./chunks/index.DTDykmio.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.3sd3E7J2.js";import"./chunks/index.BImTs33O.js";import"./chunks/index.B2rzktNR.js";function I(l={}){const{window:t=_}=l,a=b(1),h=x(()=>`(resolution: ${a.value}dppx)`,l);let i=A;return t&&(i=v(h,()=>a.value=t.devicePixelRatio)),{pixelRatio:P(a),stop:i}}const N=R({__name:"demo",setup(l){const t=S(i=>T.stringify(i,(e,p)=>{if(typeof p!="function")return p},{singleQuote:!0,flowCollectionPadding:!1})),a=B(I()),h=t(a);return(i,e)=>(d(),o(C,null,[e[0]||(e[0]=s("div",null,"设备像素比：",-1)),s("pre",null,E(c(h)),1),e[1]||(e[1]=s("span",{class:"opacity-50"},"放大和缩小（或将窗口移动到具有不同缩放因子的屏幕）以查看值的变化",-1))],64))}}),V=`<script setup lang="ts">
import { reactify, useDevicePixelRatio } from '@vueuse/core'
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

const pixelRatio = reactive(useDevicePixelRatio())
const code = stringify(pixelRatio)
<\/script>

<template>
  <div>设备像素比：</div>
  <pre>{{ code }}</pre>
  <span class="opacity-50">放大和缩小（或将窗口移动到具有不同缩放因子的屏幕）以查看值的变化</span>
</template>
`,z={class:"demo-source-link"},W=["href"],ii=JSON.parse('{"title":"useDevicePixelRatio","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useDevicePixelRatio/index.md","filePath":"core/useDevicePixelRatio/index.md","lastUpdated":1745718409000}'),$={name:"core/useDevicePixelRatio/index.md"},si=Object.assign($,{setup(l){const a=F({template:{value:{welcomeSFC:V}}}).serialize();return(h,i)=>{const e=m,p=D,g=y,u=f;return d(),o("div",null,[i[1]||(i[1]=s("h1",{id:"usedevicepixelratio",tabindex:"-1"},[k("useDevicePixelRatio "),s("a",{class:"header-anchor",href:"#usedevicepixelratio","aria-label":"Permalink to “useDevicePixelRatio”"},"​")],-1)),n(e,{fn:"useDevicePixelRatio"}),i[2]||(i[2]=r("",3)),n(p,null,{default:w(()=>[s("p",z,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useDevicePixelRatio/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${c(a)}`,target:"_blank"},"playground (beta)",8,W)]),n(N)]),_:1}),i[3]||(i[3]=r("",9)),n(g,{fn:"useDevicePixelRatio"}),i[4]||(i[4]=s("h2",{id:"更新日志",tabindex:"-1"},[k("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),n(u,{fn:"useDevicePixelRatio"})])}}});export{ii as __pageData,si as default};

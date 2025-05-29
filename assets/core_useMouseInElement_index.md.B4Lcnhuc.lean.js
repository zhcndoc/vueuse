import{_ as D,a as u}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as c}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as A}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{u as m}from"./chunks/index.so6Yk62d.js";import{r as B,Y as f}from"./chunks/index.m5AtOY8x.js";import{_ as E}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import{i as p,o as r,j as i,d as b,a1 as F,D as C,g as a,t as v,H as y,Z as _,Y as x,y as e,w as M}from"./chunks/vue.BjJVtbJX.js";import"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.BsCVlyoA.js";import"./chunks/index.DEO4egZK.js";import"./chunks/general.CGRH32nb.js";import"./chunks/index.JFNXCUfp.js";const I={},T={class:"el",w:"40",h:"40",bg:"gray-400/20",border:"rounded",flex:"~",place:"content-center",select:"none"};function P(d,n){return r(),p("div",T,n[0]||(n[0]=[i("div",{m:"auto"}," Hover me ",-1)]))}const S=E(I,[["render",P]]),R={flex:"~",gap:"4"},w={lang:"yaml"},Y=b({__name:"demo",setup(d){const n=B(h=>f.stringify(h,(k,l)=>{if(typeof l!="function")return l},{singleQuote:!0,flowCollectionPadding:!1})),t=F("target"),g=C(m(t)),s=n(g);return(h,k)=>(r(),p("div",R,[a(S,{ref_key:"target",ref:t},null,512),i("pre",w,v(y(s)),1)]))}}),O=`<script setup lang="ts">
import { reactify, useMouseInElement } from '@vueuse/core'
import { reactive, useTemplateRef } from 'vue'
import YAML from 'yaml'
import Area from './Area.vue'

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

const target = useTemplateRef<HTMLElement>('target')
const mouse = reactive(useMouseInElement(target))
const text = stringify(mouse)
<\/script>

<template>
  <div flex="~" gap="4">
    <Area ref="target" />
    <pre lang="yaml">{{ text }}</pre>
  </div>
</template>
`,q={class:"demo-source-link"},X=["href"],ss=JSON.parse('{"title":"useMouseInElement","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useMouseInElement/index.md","filePath":"core/useMouseInElement/index.md","lastUpdated":1739784586000}'),$={name:"core/useMouseInElement/index.md"},is=Object.assign($,{setup(d){const t=_({template:{value:{welcomeSFC:O}}}).serialize();return(g,s)=>{const h=A,k=c,l=D,o=u;return r(),p("div",null,[s[1]||(s[1]=i("h1",{id:"usemouseinelement",tabindex:"-1"},[e("useMouseInElement "),i("a",{class:"header-anchor",href:"#usemouseinelement","aria-label":"Permalink to “useMouseInElement”"},"​")],-1)),a(h,{fn:"useMouseInElement"}),s[2]||(s[2]=i("p",null,"与元素相关的鼠标位置的响应式状态",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[e("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(k,null,{default:M(()=>[i("p",q,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useMouseInElement/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${y(t)}`,target:"_blank"},"playground (beta)",8,X)]),a(Y)]),_:1}),s[4]||(s[4]=x("",11)),a(l,{fn:"useMouseInElement"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[e("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(o,{fn:"useMouseInElement"})])}}});export{ss as __pageData,is as default};

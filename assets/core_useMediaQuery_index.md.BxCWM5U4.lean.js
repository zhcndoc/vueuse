import{_ as u,a as c}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as f}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as D}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{u as k}from"./chunks/index.BaY-rsMm.js";import{r as m,Y as A}from"./chunks/index.m5AtOY8x.js";import{d as B,A as b,D as _,i as d,o,t as v,Z as C,j as i,g as a,Y as x,y as e,w as M,H as Q}from"./chunks/vue.BjJVtbJX.js";import"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.DEO4egZK.js";import"./chunks/index.BsCVlyoA.js";import"./chunks/general.CGRH32nb.js";import"./chunks/index.CW7z_3ew.js";import"./chunks/index.D6Ixh6S-.js";import"./chunks/index.CBIpye6U.js";const S={lang:"json"},w=B({__name:"demo",setup(g){const r=m(n=>A.stringify(n,(l,t)=>{if(typeof t!="function")return t},{singleQuote:!0,flowCollectionPadding:!1})),h=k("(min-width: 1024px)"),p=k("(prefers-color-scheme: dark)"),s=b(()=>r(_({isLargeScreen:h,prefersDark:p})));return(n,l)=>(o(),d("pre",S,v(s.value),1))}}),F=`<script setup lang="ts">
import { reactify, useMediaQuery } from '@vueuse/core'
import { computed, reactive } from 'vue'
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

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

const code = computed(() => stringify(reactive({
  isLargeScreen,
  prefersDark,
})))
<\/script>

<template>
  <pre lang="json">{{ code }}</pre>
</template>
`,E={class:"demo-source-link"},P=["href"],H=JSON.parse('{"title":"useMediaQuery","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useMediaQuery/index.md","filePath":"core/useMediaQuery/index.md","lastUpdated":1734876694000}'),L={name:"core/useMediaQuery/index.md"},J=Object.assign(L,{setup(g){const h=C({template:{value:{welcomeSFC:F}}}).serialize();return(p,s)=>{const n=D,l=f,t=u,y=c;return o(),d("div",null,[s[1]||(s[1]=i("h1",{id:"usemediaquery",tabindex:"-1"},[e("useMediaQuery "),i("a",{class:"header-anchor",href:"#usemediaquery","aria-label":"Permalink to “useMediaQuery”"},"​")],-1)),a(n,{fn:"useMediaQuery"}),s[2]||(s[2]=i("p",null,[e("响应式的"),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries",target:"_blank",rel:"noreferrer"},"媒体查询"),e("。一旦你创建了一个 MediaQueryList 对象，你可以检查查询结果或在结果变化时接收通知。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[e("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(l,null,{default:M(()=>[i("p",E,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useMediaQuery/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${Q(h)}`,target:"_blank"},"playground (beta)",8,P)]),a(w)]),_:1}),s[4]||(s[4]=x("",11)),a(t,{fn:"useMediaQuery"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[e("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(y,{fn:"useMediaQuery"})])}}});export{H as __pageData,J as default};

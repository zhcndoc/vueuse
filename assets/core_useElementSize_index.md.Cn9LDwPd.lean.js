import{_ as D,a as u}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as A}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{_ as B}from"./chunks/Note.B_ue-6bE.js";import{u as f}from"./chunks/index.u2qoWwGK.js";import{r as b,Y as E}from"./chunks/index.CbsoJ8xH.js";import{d as v,a1 as C,D as _,i as r,o as d,F,g as n,j as i,w as g,y as e,t as z,H as y,Z as x,Y as S}from"./chunks/vue.DQfvmmyQ.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.DG0WMUxM.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/index.C1bUUpH2.js";import"./chunks/index.BXXSfDxN.js";import"./chunks/index.B5l6yAbo.js";import"./chunks/general.CGRH32nb.js";const w=["textContent"],R=v({__name:"demo",setup(o){const k=b(l=>E.stringify(l,(t,a)=>{if(typeof a!="function")return a},{singleQuote:!0,flowCollectionPadding:!1})),h=C("el"),p=_(f(h,{width:0,height:0},{box:"border-box"})),s=k(p);return(l,t)=>{const a=B;return d(),r(F,null,[n(a,{class:"mb-2"},{default:g(()=>t[0]||(t[0]=[e(" 调整框大小以查看更改 ")])),_:1}),i("textarea",{ref_key:"el",ref:h,class:"resizer",textContent:z(y(s))},null,8,w)],64)}}}),P=`<script setup lang="ts">
import { reactify, useElementSize } from '@vueuse/core'
import { reactive, useTemplateRef } from 'vue'
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

const el = useTemplateRef('el')
const size = reactive(
  useElementSize(
    el,
    { width: 0, height: 0 },
    { box: 'border-box' },
  ),
)
const text = stringify(size)
<\/script>

<template>
  <note class="mb-2">
    调整框大小以查看更改
  </note>
  <textarea ref="el" class="resizer" v-text="text" />
</template>
`,T={class:"demo-source-link"},q=["href"],X=JSON.parse('{"title":"useElementSize","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useElementSize/index.md","filePath":"core/useElementSize/index.md","lastUpdated":1737604618000}'),M={name:"core/useElementSize/index.md"},ss=Object.assign(M,{setup(o){const h=x({template:{value:{welcomeSFC:P}}}).serialize();return(p,s)=>{const l=A,t=m,a=D,c=u;return d(),r("div",null,[s[1]||(s[1]=i("h1",{id:"useelementsize",tabindex:"-1"},[e("useElementSize "),i("a",{class:"header-anchor",href:"#useelementsize","aria-label":"Permalink to “useElementSize”"},"​")],-1)),n(l,{fn:"useElementSize"}),s[2]||(s[2]=i("p",null,[e("获取 HTML 元素的响应式大小。"),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",target:"_blank",rel:"noreferrer"},"ResizeObserver MDN")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[e("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),n(t,null,{default:g(()=>[i("p",T,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useElementSize/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${y(h)}`,target:"_blank"},"playground (beta)",8,q)]),n(R)]),_:1}),s[4]||(s[4]=S("",11)),n(a,{fn:"useElementSize"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[e("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),n(c,{fn:"useElementSize"})])}}});export{X as __pageData,ss as default};

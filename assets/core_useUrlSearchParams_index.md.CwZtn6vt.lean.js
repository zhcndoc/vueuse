import{_ as A,a as c}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as B}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{u}from"./chunks/index.BTrDBEOF.js";import{d as f,i as l,o as k,j as i,F as C,O as b,t as p,H as t,Z as _,g as n,Y as v,y as h,w as P}from"./chunks/vue.DQfvmmyQ.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B1GOtqK5.js";import"./chunks/index.BrEgUpwD.js";import"./chunks/filters.DSKJ-Ken.js";import"./chunks/index.CyaQpZZu.js";import"./chunks/index.DK97_WvT.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/general.CGRH32nb.js";const F={class:"!m-0"},E=f({__name:"demo",setup(r){const a=u("history");return a.foo="bar",a.vueuse="awesome",(e,d)=>(k(),l("div",null,[i("ul",F,[(k(!0),l(C,null,b(Object.keys(t(a)),s=>(k(),l("li",{key:s},p(s)+"="+p(t(a)[s]),1))),128))])]))}}),S=`<script setup lang="ts">
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('history')
params.foo = 'bar'
params.vueuse = 'awesome'
<\/script>

<template>
  <div>
    <ul class="!m-0">
      <li v-for="key in Object.keys(params)" :key="key">
        {{ key }}={{ params[key] }}
      </li>
    </ul>
  </div>
</template>
`,U={class:"demo-source-link"},x=["href"],M=JSON.parse('{"title":"useUrlSearchParams","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useUrlSearchParams/index.md","filePath":"core/useUrlSearchParams/index.md","lastUpdated":1715934697000}'),w={name:"core/useUrlSearchParams/index.md"},Y=Object.assign(w,{setup(r){const e=_({template:{value:{welcomeSFC:S}}}).serialize();return(d,s)=>{const g=m,y=B,o=A,D=c;return k(),l("div",null,[s[1]||(s[1]=i("h1",{id:"useurlsearchparams",tabindex:"-1"},[h("useUrlSearchParams "),i("a",{class:"header-anchor",href:"#useurlsearchparams","aria-label":"Permalink to “useUrlSearchParams”"},"​")],-1)),n(g,{fn:"useUrlSearchParams"}),s[2]||(s[2]=i("p",null,[h("响应式 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams",target:"_blank",rel:"noreferrer"},"URLSearchParams")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[h("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),n(y,null,{default:P(()=>[i("p",U,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useUrlSearchParams/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${t(e)}`,target:"_blank"},"playground (beta)",8,x)]),n(E)]),_:1}),s[4]||(s[4]=v("",13)),n(o,{fn:"useUrlSearchParams"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[h("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),n(D,{fn:"useUrlSearchParams"})])}}});export{M as __pageData,Y as default};

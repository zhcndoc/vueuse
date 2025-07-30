import{_ as m,a as y}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as f}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as D}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{_ as b}from"./chunks/Note.DW__0Z7J.js";import{u as _}from"./chunks/index.DiACNWiq.js";import{d as A,A as k,i as o,o as d,F as v,g as e,j as s,w as g,y as a,q as O,t as B,Z as x,Y as C,H as E}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.qy4VQT1o.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.BImTs33O.js";import"./chunks/index.B2rzktNR.js";function F(l={}){const{isOnline:t}=_(l);return t}const P=A({__name:"demo",setup(l){const t=F(),h=k(()=>t.value?"text-primary":"text-gray"),r=k(()=>t.value?"Online":"Offline");return(i,n)=>{const p=b;return d(),o(v,null,[e(p,{class:"mb-2"},{default:g(()=>n[0]||(n[0]=[a(" 请断开网络查看更改 ",-1)])),_:1,__:[0]}),s("div",null,[n[1]||(n[1]=a("状态：",-1)),s("b",{class:O(h.value)},B(r.value),3)])],64)}}}),S=`<script setup lang="ts">
import { useOnline } from '@vueuse/core'
import { computed } from 'vue'

const online = useOnline()

const clazz = computed(() => online.value ? 'text-primary' : 'text-gray')
const text = computed(() => online.value ? 'Online' : 'Offline')
<\/script>

<template>
  <note class="mb-2">
    请断开网络查看更改
  </note>
  <div>状态：<b :class="clazz">{{ text }}</b></div>
</template>
`,N={class:"demo-source-link"},w=["href"],K=JSON.parse('{"title":"useOnline","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useOnline/index.md","filePath":"core/useOnline/index.md","lastUpdated":1715934697000}'),z={name:"core/useOnline/index.md"},L=Object.assign(z,{setup(l){const h=x({template:{value:{welcomeSFC:S}}}).serialize();return(r,i)=>{const n=D,p=f,c=m,u=y;return d(),o("div",null,[i[1]||(i[1]=s("h1",{id:"useonline",tabindex:"-1"},[a("useOnline "),s("a",{class:"header-anchor",href:"#useonline","aria-label":"Permalink to “useOnline”"},"​")],-1)),e(n,{fn:"useOnline"}),i[2]||(i[2]=s("p",null,[a("响应式的在线状态。是 "),s("a",{href:"/core/useNetwork/"},[s("code",null,"useNetwork")]),a(" 的封装。")],-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[a("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),e(p,null,{default:g(()=>[s("p",N,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useOnline/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${E(h)}`,target:"_blank"},"playground (beta)",8,w)]),e(P)]),_:1}),i[4]||(i[4]=C("",9)),e(c,{fn:"useOnline"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[a("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),e(u,{fn:"useOnline"})])}}});export{K as __pageData,L as default};

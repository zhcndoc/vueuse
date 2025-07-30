import{_ as D,a as B}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{c as C,_ as f}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{z as g,B as b,N as v,d as _,i as y,o,a2 as F,j as s,a5 as E,y as l,t as d,H as p,Z as x,g as t,Y as L,w}from"./chunks/vue.K-Nh9t7y.js";import{h as c}from"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";function R(e,n={}){const h=g(n.initialValue??null);return b(e,()=>h.value=c(),n),v(h)}const S={class:"text-primary"},T={class:"opacity-50 font-mono"},V=_({__name:"demo",setup(e){const n=g(""),h=R(n,{initialValue:c()-1e3*60*5}),r=C(h);return(i,a)=>(o(),y("div",null,[F(s("input",{"onUpdate:modelValue":a[0]||(a[0]=k=>n.value=k),type:"text",placeholder:"Type anything..."},null,512),[[E,n.value]]),s("div",null,[a[1]||(a[1]=l("最后更改: ",-1)),s("span",S,d(p(r)),1),a[2]||(a[2]=l()),s("span",T,"("+d(p(h))+")",1)])]))}}),P=`<script setup lang="ts">
import { timestamp, useLastChanged, useTimeAgo } from '@vueuse/core'
import { shallowRef } from 'vue'

const input = shallowRef('')
const ms = useLastChanged(input, { initialValue: timestamp() - 1000 * 60 * 5 })
const timeago = useTimeAgo(ms)
<\/script>

<template>
  <div>
    <input v-model="input" type="text" placeholder="Type anything...">
    <div>最后更改: <span class="text-primary">{{ timeago }}</span> <span class="opacity-50 font-mono">({{ ms }})</span></div>
  </div>
</template>
`,$={class:"demo-source-link"},I=["href"],J=JSON.parse('{"title":"useLastChanged","description":"","frontmatter":{"category":"State"},"headers":[],"relativePath":"shared/useLastChanged/index.md","filePath":"shared/useLastChanged/index.md","lastUpdated":1732365828000}'),N={name:"shared/useLastChanged/index.md"},M=Object.assign(N,{setup(e){const h=x({template:{value:{welcomeSFC:P}}}).serialize();return(r,i)=>{const a=f,k=m,u=D,A=B;return o(),y("div",null,[i[1]||(i[1]=s("h1",{id:"uselastchanged",tabindex:"-1"},[l("useLastChanged "),s("a",{class:"header-anchor",href:"#uselastchanged","aria-label":"Permalink to “useLastChanged”"},"​")],-1)),t(a,{fn:"useLastChanged"}),i[2]||(i[2]=s("p",null,"记录最后更改的时间戳",-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[l("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),t(k,null,{default:w(()=>[s("p",$,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useLastChanged/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${p(h)}`,target:"_blank"},"playground (beta)",8,I)]),t(V)]),_:1}),i[4]||(i[4]=L("",9)),t(u,{fn:"useLastChanged"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[l("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),t(A,{fn:"useLastChanged"})])}}});export{J as __pageData,M as default};

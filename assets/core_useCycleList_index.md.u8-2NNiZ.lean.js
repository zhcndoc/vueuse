import{_ as c,a as u}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as B}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as C}from"./chunks/CourseLink.vue_vue_type_script_setup_true_lang.C6fezzip.js";import{_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{u as f}from"./chunks/index.pQjNoXQ1.js";import{d as b,z as _,i as g,o as y,j as i,t as v,H as l,Z as x,g as n,Y as F,y as t,w as d}from"./chunks/vue.DQfvmmyQ.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.CyaQpZZu.js";const E={class:"text-primary text-lg font-bold"},L=b({__name:"demo",setup(o){const e=_(["Dog","Cat","Lizard","Shark","Whale","Dolphin","Octopus","Seal"]),{state:h,next:p,prev:s}=f(e);return(r,a)=>(y(),g("div",null,[i("div",E,v(l(h)),1),i("button",{onClick:a[0]||(a[0]=k=>l(s)())}," Prev "),i("button",{onClick:a[1]||(a[1]=k=>l(p)())}," Next ")]))}}),T=`<script setup lang="ts">
import { useCycleList } from '@vueuse/core'
import { shallowRef } from 'vue'

const list = shallowRef([
  'Dog',
  'Cat',
  'Lizard',
  'Shark',
  'Whale',
  'Dolphin',
  'Octopus',
  'Seal',
])

const { state, next, prev } = useCycleList(list)
<\/script>

<template>
  <div>
    <div class="text-primary text-lg font-bold">
      {{ state }}
    </div>
    <button @click="prev()">
      Prev
    </button>
    <button @click="next()">
      Next
    </button>
  </div>
</template>
`,S={class:"demo-source-link"},P=["href"],j=JSON.parse('{"title":"useCycleList","description":"","frontmatter":{"category":"Utilities"},"headers":[],"relativePath":"core/useCycleList/index.md","filePath":"core/useCycleList/index.md","lastUpdated":1715934697000}'),R={name:"core/useCycleList/index.md"},G=Object.assign(R,{setup(o){const h=x({template:{value:{welcomeSFC:T}}}).serialize();return(p,s)=>{const r=m,a=C,k=B,D=c,A=u;return y(),g("div",null,[s[2]||(s[2]=i("h1",{id:"usecyclelist",tabindex:"-1"},[t("useCycleList "),i("a",{class:"header-anchor",href:"#usecyclelist","aria-label":"Permalink to “useCycleList”"},"​")],-1)),n(r,{fn:"useCycleList"}),s[3]||(s[3]=i("p",null,"循环遍历一个项目列表。",-1)),n(a,{href:"https://vueschool.io/lessons/create-an-image-carousel-with-vueuse?friend=vueuse"},{default:d(()=>s[0]||(s[0]=[t("通过 Vue School 的这个免费视频课程学习如何使用 useCycleList 创建图片轮播！")])),_:1}),s[4]||(s[4]=i("h2",{id:"示例",tabindex:"-1"},[t("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),n(k,null,{default:d(()=>[i("p",S,[s[1]||(s[1]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useCycleList/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${l(h)}`,target:"_blank"},"playground (beta)",8,P)]),n(L)]),_:1}),s[5]||(s[5]=F("",7)),n(D,{fn:"useCycleList"}),s[6]||(s[6]=i("h2",{id:"更新日志",tabindex:"-1"},[t("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),n(A,{fn:"useCycleList"})])}}});export{j as __pageData,G as default};

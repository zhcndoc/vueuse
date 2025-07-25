import{_ as c,a as D}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as u}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as A}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{_ as m}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.y710iK4K.js";import{u as B}from"./chunks/index.jKJ-Jj3a.js";import{u as f}from"./chunks/index.D_CJT4ZM.js";import{u as b}from"./chunks/index.DHkSFma_.js";import{d as v,a1 as C,i as d,o,j as s,g as n,H as k,t as _,Z as x,Y as E,y as e,w as F}from"./chunks/vue.DDc96eEg.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.BstIlBID.js";import"./chunks/index.CDv_Se1V.js";import"./chunks/filters.C8rvCcdO.js";import"./chunks/index.BtqfaRQ7.js";import"./chunks/index.Bv2YCc3B.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/index.Biv1Ajcl.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.CP1ndpU1.js";import"./chunks/index.rocSL1WN.js";import"./chunks/index.BrP_zX4n.js";import"./chunks/resolve-element.CjOR-mWi.js";const L={class:"flex flex-wrap gap-4"},S={class:"m-auto px-6 py-4 rounded flex flex-col w-60 gap-2 bg-gray-500/5"},T=v({__name:"demo",setup(g){const l=C("el");B(l);const t=f(l),p=b(t);return(i,a)=>{const h=m;return o(),d("div",L,[s("div",{ref_key:"el",ref:l,class:"w-300px h-300px m-auto overflow-scroll bg-gray-500/5 rounded"},a[1]||(a[1]=[s("div",{class:"w-500px h-400px relative"},[s("div",{position:"absolute left-0 top-0",bg:"gray-500/5",p:"x-2 y-1"}," 左上角 "),s("div",{position:"absolute left-0 bottom-0",bg:"gray-500/5",p:"x-2 y-1"}," 左下角 "),s("div",{position:"absolute right-0 top-0",bg:"gray-500/5",p:"x-2 y-1"}," 右上角 "),s("div",{position:"absolute right-0 bottom-0",bg:"gray-500/5",p:"x-2 y-1"}," 右下角 "),s("div",{position:"absolute left-1/3 top-1/3",bg:"gray-500/5",p:"x-2 y-1"}," 滚动 ")],-1)]),512),s("div",S,[s("div",null,[a[2]||(a[2]=s("span",{opacity:"75"}," 是否锁定 ",-1)),n(h,{value:k(t)},null,8,["value"])]),s("button",{opacity:"75",onClick:a[0]||(a[0]=r=>k(p)())},_(k(t)?"解锁":"锁定"),1)])])}}}),w=`<script setup lang="ts">
import { useScroll, useScrollLock, useToggle } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef<HTMLElement>('el')
useScroll(el)
const isLocked = useScrollLock(el)
const toggleLock = useToggle(isLocked)
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <div ref="el" class="w-300px h-300px m-auto overflow-scroll bg-gray-500/5 rounded">
      <div class="w-500px h-400px relative">
        <div position="absolute left-0 top-0" bg="gray-500/5" p="x-2 y-1">
          左上角
        </div>
        <div position="absolute left-0 bottom-0" bg="gray-500/5" p="x-2 y-1">
          左下角
        </div>
        <div position="absolute right-0 top-0" bg="gray-500/5" p="x-2 y-1">
          右上角
        </div>
        <div position="absolute right-0 bottom-0" bg="gray-500/5" p="x-2 y-1">
          右下角
        </div>
        <div position="absolute left-1/3 top-1/3" bg="gray-500/5" p="x-2 y-1">
          滚动
        </div>
      </div>
    </div>
    <div class="m-auto px-6 py-4 rounded flex flex-col w-60 gap-2 bg-gray-500/5">
      <div>
        <span opacity="75">
          是否锁定
        </span>
        <BooleanDisplay :value="isLocked" />
      </div>
      <button opacity="75" @click="toggleLock()">
        {{ isLocked ? '解锁' : '锁定' }}
      </button>
    </div>
  </div>
</template>
`,q={class:"demo-source-link"},P=["href"],ts=JSON.parse('{"title":"useScrollLock","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useScrollLock/index.md","filePath":"core/useScrollLock/index.md","lastUpdated":1750687039000}'),$={name:"core/useScrollLock/index.md"},ls=Object.assign($,{setup(g){const t=x({template:{value:{welcomeSFC:w}}}).serialize();return(p,i)=>{const a=A,h=u,r=c,y=D;return o(),d("div",null,[i[1]||(i[1]=s("h1",{id:"usescrolllock",tabindex:"-1"},[e("useScrollLock "),s("a",{class:"header-anchor",href:"#usescrolllock","aria-label":"Permalink to “useScrollLock”"},"​")],-1)),n(a,{fn:"useScrollLock"}),i[2]||(i[2]=s("p",null,"锁定元素的滚动。",-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[e("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),n(h,null,{default:F(()=>[s("p",q,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useScrollLock/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${k(t)}`,target:"_blank"},"playground (beta)",8,P)]),n(T)]),_:1}),i[4]||(i[4]=E("",9)),n(r,{fn:"useScrollLock"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[e("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),n(y,{fn:"useScrollLock"})])}}});export{ts as __pageData,ls as default};

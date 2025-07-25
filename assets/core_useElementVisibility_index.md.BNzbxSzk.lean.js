import{_ as c,a as A}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as B}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{_ as b}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.y710iK4K.js";import{_ as u}from"./chunks/Note.BA4Afsl9.js";import{u as f}from"./chunks/index.CrO9kxR_.js";import{d as v,a1 as E,i as k,o as p,F as C,j as i,g as a,w as r,y as n,H as d,Z as _,Y as F}from"./chunks/vue.DDc96eEg.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.CzZNpedS.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/index.rocSL1WN.js";import"./chunks/index.BrP_zX4n.js";import"./chunks/general.tY1gtZD0.js";const V={class:"float m-3 area shadow-lg"},x=v({__name:"demo",setup(g){const t=E("el"),l=f(t);return(y,s)=>{const h=u,e=b;return p(),k(C,null,[i("div",null,[a(h,{class:"mb-2"},{default:r(()=>s[0]||(s[0]=[n(" 右下角的信息 ")])),_:1,__:[0]}),i("div",{ref_key:"el",ref:t,class:"max-w-100 relative area bg-white dark:bg-gray-800 shadow-lg z-60"}," 目标元素（向下滚动） ",512)]),i("div",V,[s[1]||(s[1]=n(" 元素 ")),a(e,{value:d(l),true:"内部",false:"外部",class:"font-bold"},null,8,["value"]),s[2]||(s[2]=n(" 视口 "))])],64)}}}),T=`<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const isVisible = useElementVisibility(el)
<\/script>

<template>
  <div>
    <note class="mb-2">
      右下角的信息
    </note>
    <div ref="el" class="max-w-100 relative area bg-white dark:bg-gray-800 shadow-lg z-60">
      目标元素（向下滚动）
    </div>
  </div>
  <div class="float m-3 area shadow-lg">
    元素
    <BooleanDisplay
      :value="isVisible"
      true="内部"
      false="外部"
      class="font-bold"
    />
    视口
  </div>
</template>
`,w={class:"demo-source-link"},P=["href"],Y=JSON.parse('{"title":"useElementVisibility","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useElementVisibility/index.md","filePath":"core/useElementVisibility/index.md","lastUpdated":1750687039000}'),q={name:"core/useElementVisibility/index.md"},Z=Object.assign(q,{setup(g){const l=_({template:{value:{welcomeSFC:T}}}).serialize();return(y,s)=>{const h=B,e=m,o=c,D=A;return p(),k("div",null,[s[1]||(s[1]=i("h1",{id:"useelementvisibility",tabindex:"-1"},[n("useElementVisibility "),i("a",{class:"header-anchor",href:"#useelementvisibility","aria-label":"Permalink to “useElementVisibility”"},"​")],-1)),a(h,{fn:"useElementVisibility"}),s[2]||(s[2]=i("p",null,"跟踪元素在视口内的可见性。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[n("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(e,null,{default:r(()=>[i("p",w,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useElementVisibility/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${d(l)}`,target:"_blank"},"playground (beta)",8,P)]),a(x)]),_:1}),s[4]||(s[4]=F("",17)),a(o,{fn:"useElementVisibility"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[n("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(D,{fn:"useElementVisibility"})])}}});export{Y as __pageData,Z as default};

import{_ as c,a as u}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as f}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as D}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{_ as m}from"./chunks/Note.DW__0Z7J.js";import{o as A}from"./chunks/index.BtveNjvS.js";import{d as B,z as b,i as p,o as h,F as _,g as a,j as i,w as k,y as e,Z as v,Y as C,H as S}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.qy4VQT1o.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/general.tY1gtZD0.js";const T=B({__name:"demo",setup(r){const t=b(null);return A(()=>{t.value!==document.activeElement&&t.value.focus()}),(l,n)=>{const s=m;return h(),p(_,null,[a(s,null,{default:k(()=>n[0]||(n[0]=[e("输入任何内容",-1)])),_:1,__:[0]}),i("input",{ref_key:"input",ref:t,type:"text",placeholder:"Start typing to focus"},null,512),n[1]||(n[1]=i("input",{type:"text",placeholder:"Start typing has no effect here"},null,-1))],64)}}}),x=`<script setup lang="ts">
import { onStartTyping } from '@vueuse/core'
import { shallowRef } from 'vue'

const input = shallowRef<HTMLInputElement | null>(null)

onStartTyping(() => {
  if (input.value !== document.activeElement)
    input.value!.focus()
})
<\/script>

<template>
  <note>输入任何内容</note>
  <input ref="input" type="text" placeholder="Start typing to focus">
  <input type="text" placeholder="Start typing has no effect here">
</template>
`,E={class:"demo-source-link"},F=["href"],K=JSON.parse('{"title":"onStartTyping","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/onStartTyping/index.md","filePath":"core/onStartTyping/index.md","lastUpdated":1715934697000}'),P={name:"core/onStartTyping/index.md"},L=Object.assign(P,{setup(r){const l=v({template:{value:{welcomeSFC:x}}}).serialize();return(n,s)=>{const o=D,d=f,g=c,y=u;return h(),p("div",null,[s[1]||(s[1]=i("h1",{id:"onstarttyping",tabindex:"-1"},[e("onStartTyping "),i("a",{class:"header-anchor",href:"#onstarttyping","aria-label":"Permalink to “onStartTyping”"},"​")],-1)),a(o,{fn:"onStartTyping"}),s[2]||(s[2]=i("p",null,"用户在不可编辑的元素上开始输入时触发。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[e("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(d,null,{default:k(()=>[i("p",E,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/onStartTyping/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${S(l)}`,target:"_blank"},"playground (beta)",8,F)]),a(T)]),_:1}),s[4]||(s[4]=C("",8)),a(g,{fn:"onStartTyping"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[e("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(y,{fn:"onStartTyping"})])}}});export{K as __pageData,L as default};

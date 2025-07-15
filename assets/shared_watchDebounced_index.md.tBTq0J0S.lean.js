import{_ as u,a as D}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_ as B}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{_ as b}from"./chunks/Note.BA4Afsl9.js";import{d as f,z as e,i as d,o as r,a2 as F,g as a,j as i,a5 as C,w as g,y as t,t as p,Z as E,Y as _,H as v}from"./chunks/vue.DDc96eEg.js";import{w as x}from"./chunks/index.CNA1T2FG.js";import"./chunks/metadata.DSy5Z-Tw.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.B9cmA_N2.js";import"./chunks/filters.CNOy65Bq.js";import"./chunks/index.Cic7SbUz.js";const w=f({__name:"demo",setup(y){const n=e(""),h=e(0);return x(n,()=>{h.value+=1},{debounce:1e3,maxWait:5e3}),(o,s)=>{const k=b;return r(),d("div",null,[F(i("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>n.value=l),placeholder:"尝试输入任何内容...",type:"text"},null,512),[[C,n.value]]),a(k,null,{default:g(()=>s[1]||(s[1]=[t("此演示中延迟设置为 1000ms，最大等待时间设置为 5000ms。")])),_:1,__:[1]}),i("p",null,"输入内容："+p(n.value),1),i("p",null,"更新次数："+p(h.value),1)])}}}),W=`<script setup lang="ts">
import { watchDebounced } from '@vueuse/core'
import { shallowRef } from 'vue'

const input = shallowRef('')
const updated = shallowRef(0)

watchDebounced(input, () => {
  updated.value += 1
}, { debounce: 1000, maxWait: 5000 })
<\/script>

<template>
  <div>
    <input v-model="input" placeholder="尝试输入任何内容..." type="text">
    <note>此演示中延迟设置为 1000ms，最大等待时间设置为 5000ms。</note>

    <p>输入内容：{{ input }}</p>
    <p>更新次数：{{ updated }}</p>
  </div>
</template>
`,T={class:"demo-source-link"},S=["href"],J=JSON.parse('{"title":"watchDebounced","description":"","frontmatter":{"category":"Watch","alias":"debouncedWatch"},"headers":[],"relativePath":"shared/watchDebounced/index.md","filePath":"shared/watchDebounced/index.md","lastUpdated":1716184754000}'),I={name:"shared/watchDebounced/index.md"},Y=Object.assign(I,{setup(y){const h=E({template:{value:{welcomeSFC:W}}}).serialize();return(o,s)=>{const k=m,l=B,c=u,A=D;return r(),d("div",null,[s[1]||(s[1]=i("h1",{id:"watchdebounced",tabindex:"-1"},[t("watchDebounced "),i("a",{class:"header-anchor",href:"#watchdebounced","aria-label":"Permalink to “watchDebounced”"},"​")],-1)),a(k,{fn:"watchDebounced"}),s[2]||(s[2]=i("p",null,"延迟触发的监听器",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[t("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(l,null,{default:g(()=>[i("p",T,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/watchDebounced/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${v(h)}`,target:"_blank"},"playground (beta)",8,S)]),a(w)]),_:1}),s[4]||(s[4]=_("",10)),a(c,{fn:"watchDebounced"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[t("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(A,{fn:"watchDebounced"})])}}});export{J as __pageData,Y as default};

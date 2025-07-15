import{_ as b,a as A}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as B}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{_}from"./chunks/Note.BA4Afsl9.js";import{r as v,a3 as C,B as g,N as F,d as x,z as d,i as c,o as u,a2 as E,g as h,j as i,a5 as R,w as y,y as k,t as o,H as D,Z as w,Y as T}from"./chunks/vue.DDc96eEg.js";import{u as P}from"./chunks/index.CgL4CVyA.js";import"./chunks/metadata.DSy5Z-Tw.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/filters.CNOy65Bq.js";import"./chunks/index.Cic7SbUz.js";function S(l,a=200,n={}){const e=v(C(l)),s=P(()=>{e.value=l.value},a,n);return g(l,()=>s()),F(e)}const V=x({__name:"demo",setup(l){const a=d(""),n=S(a,1e3),e=d(0);return g(n,()=>e.value+=1),(s,t)=>{const p=_;return u(),c("div",null,[E(i("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>a.value=r),placeholder:"尝试输入任何内容...",type:"text"},null,512),[[R,a.value]]),h(p,null,{default:y(()=>t[1]||(t[1]=[k("此演示设置了 1000ms 的延迟。")])),_:1,__:[1]}),i("p",null,"Debounced: "+o(D(n)),1),i("p",null,"更新次数: "+o(e.value),1)])}}}),N=`<script setup lang="ts">
import { refDebounced } from '@vueuse/core'
import { shallowRef, watch } from 'vue'

const input = shallowRef('')
const debounced = refDebounced(input, 1000)
const updated = shallowRef(0)

watch(debounced, () => (updated.value += 1))
<\/script>

<template>
  <div>
    <input v-model="input" placeholder="尝试输入任何内容..." type="text">
    <note>此演示设置了 1000ms 的延迟。</note>

    <p>Debounced: {{ debounced }}</p>
    <p>更新次数: {{ updated }}</p>
  </div>
</template>
`,$={class:"demo-source-link"},j=["href"],K=JSON.parse('{"title":"refDebounced","description":"","frontmatter":{"category":"Reactivity","alias":"useDebounce, debouncedRef"},"headers":[],"relativePath":"shared/refDebounced/index.md","filePath":"shared/refDebounced/index.md","lastUpdated":1742698055000}'),O={name:"shared/refDebounced/index.md"},L=Object.assign(O,{setup(l){const n=w({template:{value:{welcomeSFC:N}}}).serialize();return(e,s)=>{const t=B,p=m,r=b,f=A;return u(),c("div",null,[s[1]||(s[1]=i("h1",{id:"refdebounced",tabindex:"-1"},[k("refDebounced "),i("a",{class:"header-anchor",href:"#refdebounced","aria-label":"Permalink to “refDebounced”"},"​")],-1)),h(t,{fn:"refDebounced"}),s[2]||(s[2]=i("p",null,"对 ref 的更新进行防抖。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[k("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),h(p,null,{default:y(()=>[i("p",$,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/refDebounced/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${D(n)}`,target:"_blank"},"playground (beta)",8,j)]),h(V)]),_:1}),s[4]||(s[4]=T("",10)),h(r,{fn:"refDebounced"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[k("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),h(f,{fn:"refDebounced"})])}}});export{K as __pageData,L as default};

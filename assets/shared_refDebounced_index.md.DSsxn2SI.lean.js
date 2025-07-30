import{_ as B,a as f}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as b}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{_}from"./chunks/Note.DW__0Z7J.js";import{r as v,a3 as C,B as o,N as F,d as E,z as d,i as y,o as c,a2 as x,g as t,j as i,a5 as R,w as D,y as k,t as g,H as u,Z as w,Y as T}from"./chunks/vue.K-Nh9t7y.js";import{u as P}from"./chunks/index.DCrUl27g.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/filters.Dfclkjvt.js";import"./chunks/index.84cWVi_S.js";function S(l,a=200,n={}){const h=v(C(l)),s=P(()=>{h.value=l.value},a,n);return o(l,()=>s()),F(h)}const V=E({__name:"demo",setup(l){const a=d(""),n=S(a,1e3),h=d(0);return o(n,()=>h.value+=1),(s,e)=>{const p=_;return c(),y("div",null,[x(i("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>a.value=r),placeholder:"尝试输入任何内容...",type:"text"},null,512),[[R,a.value]]),t(p,null,{default:D(()=>e[1]||(e[1]=[k("此演示设置了 1000ms 的延迟。",-1)])),_:1,__:[1]}),i("p",null,"Debounced: "+g(u(n)),1),i("p",null,"更新次数: "+g(h.value),1)])}}}),N=`<script setup lang="ts">
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
`,j={class:"demo-source-link"},$=["href"],K=JSON.parse('{"title":"refDebounced","description":"","frontmatter":{"category":"Reactivity","alias":"useDebounce, debouncedRef"},"headers":[],"relativePath":"shared/refDebounced/index.md","filePath":"shared/refDebounced/index.md","lastUpdated":1753423581000}'),O={name:"shared/refDebounced/index.md"},L=Object.assign(O,{setup(l){const n=w({template:{value:{welcomeSFC:N}}}).serialize();return(h,s)=>{const e=m,p=b,r=B,A=f;return c(),y("div",null,[s[1]||(s[1]=i("h1",{id:"refdebounced",tabindex:"-1"},[k("refDebounced "),i("a",{class:"header-anchor",href:"#refdebounced","aria-label":"Permalink to “refDebounced”"},"​")],-1)),t(e,{fn:"refDebounced"}),s[2]||(s[2]=i("p",null,"对 ref 的更新进行防抖。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[k("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),t(p,null,{default:D(()=>[i("p",j,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/refDebounced/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${u(n)}`,target:"_blank"},"playground (beta)",8,$)]),t(V)]),_:1}),s[4]||(s[4]=T("",12)),t(r,{fn:"refDebounced"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[k("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),t(A,{fn:"refDebounced"})])}}});export{K as __pageData,L as default};

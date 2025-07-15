import{_ as f,a as m}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_ as C}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as x}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{z as o,B as d,a3 as b,v,d as _,i as u,o as A,j as t,a2 as E,a5 as T,H as D,a4 as F,Z as z,g as k,Y as q,y as g,w}from"./chunks/vue.DDc96eEg.js";import{t as c}from"./chunks/index.Cic7SbUz.js";import{d as B}from"./chunks/metadata.DSy5Z-Tw.js";import{u as P}from"./chunks/index.DWfc958q.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/index.rocSL1WN.js";import"./chunks/index.BrP_zX4n.js";function R(i=B,e){i&&typeof i.requestAnimationFrame=="function"?i.requestAnimationFrame(e):e()}function H(i={}){const{window:e=B}=i,a=c(i?.element),p=c(i?.input??""),s=i?.styleProp??"height",n=o(1),r=o(0);function l(){if(!a.value)return;let h="";a.value.style[s]="1px",n.value=a.value?.scrollHeight;const y=b(i?.styleTarget);y?y.style[s]=`${n.value}px`:h=`${n.value}px`,a.value.style[s]=h}return d([p,a],()=>v(l),{immediate:!0}),d(n,()=>i?.onResize?.()),P(a,([{contentRect:h}])=>{r.value!==h.width&&R(e,()=>{r.value=h.width,l()})}),i?.watch&&d(i.watch,l,{immediate:!0,deep:!0}),{textarea:a,input:p,triggerResize:l}}const S=_({__name:"demo",setup(i){const{textarea:e,input:a}=H();return(p,s)=>(A(),u("div",null,[s[1]||(s[1]=t("span",null,"输入内容，文本框会自动增长：",-1)),E(t("textarea",{ref_key:"textarea",ref:e,"onUpdate:modelValue":s[0]||(s[0]=n=>F(a)?a.value=n:null),class:"resize-none",placeholder:"你在想什么？"},null,512),[[T,D(a)]])]))}}),M=`<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'

const { textarea, input } = useTextareaAutosize()
<\/script>

<template>
  <div>
    <span>输入内容，文本框会自动增长：</span>
    <textarea
      ref="textarea"
      v-model="input"
      class="resize-none"
      placeholder="你在想什么？"
    />
  </div>
</template>
`,V={class:"demo-source-link"},$=["href"],Q=JSON.parse('{"title":"useTextareaAutosize","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useTextareaAutosize/index.md","filePath":"core/useTextareaAutosize/index.md","lastUpdated":1715934697000}'),N={name:"core/useTextareaAutosize/index.md"},X=Object.assign(N,{setup(i){const a=z({template:{value:{welcomeSFC:M}}}).serialize();return(p,s)=>{const n=x,r=C,l=f,h=m;return A(),u("div",null,[s[1]||(s[1]=t("h1",{id:"usetextareaautosize",tabindex:"-1"},[g("useTextareaAutosize "),t("a",{class:"header-anchor",href:"#usetextareaautosize","aria-label":"Permalink to “useTextareaAutosize”"},"​")],-1)),k(n,{fn:"useTextareaAutosize"}),s[2]||(s[2]=t("p",null,"根据内容自动更新 textarea 的高度。",-1)),s[3]||(s[3]=t("h2",{id:"示例",tabindex:"-1"},[g("示例 "),t("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),k(r,null,{default:w(()=>[t("p",V,[s[0]||(s[0]=t("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useTextareaAutosize/demo.vue",target:"_blank"},"源码",-1)),t("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${D(a)}`,target:"_blank"},"playground (beta)",8,$)]),k(S)]),_:1}),s[4]||(s[4]=q("",12)),k(l,{fn:"useTextareaAutosize"}),s[5]||(s[5]=t("h2",{id:"更新日志",tabindex:"-1"},[g("更新日志 "),t("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),k(h,{fn:"useTextareaAutosize"})])}}});export{Q as __pageData,X as default};

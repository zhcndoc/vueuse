import{_ as S,a as w}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as I}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as R}from"./chunks/CourseLink.vue_vue_type_script_setup_true_lang.BL5mcAh3.js";import{_ as U}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{_ as q}from"./chunks/Note.BA4Afsl9.js";import{A as T,z as b,a3 as $,d as V,i as m,H as d,o as f,g as r,j as i,a2 as N,w as C,y as l,t as B,a5 as O,Z as W,Y as z}from"./chunks/vue.DDc96eEg.js";import{u as L}from"./chunks/index.CrnT5J8I.js";import{b as j}from"./chunks/metadata.BfYDMb5p.js";import{u as H}from"./chunks/index.Biv1Ajcl.js";import{u as D}from"./chunks/index.DyN9pN8p.js";import{u as M}from"./chunks/index.rocSL1WN.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.BrP_zX4n.js";function G(u={}){const{navigator:p=j,read:o=!1,source:y,copiedDuring:s=1500,legacy:g=!1}=u,h=M(()=>p&&"clipboard"in p),c=D("clipboard-read"),a=D("clipboard-write"),e=T(()=>h.value||g),k=b(""),A=b(!1),E=L(()=>A.value=!1,s,{immediate:!1});async function _(){let n=!(h.value&&v(c.value));if(!n)try{k.value=await p.clipboard.readText()}catch{n=!0}n&&(k.value=P())}e.value&&o&&H(["copy","cut"],_,{passive:!0});async function F(n=$(y)){if(e.value&&n!=null){let t=!(h.value&&v(a.value));if(!t)try{await p.clipboard.writeText(n)}catch{t=!0}t&&x(n),k.value=n,A.value=!0,E.start()}}function x(n){const t=document.createElement("textarea");t.value=n??"",t.style.position="absolute",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}function P(){return document?.getSelection?.()?.toString()??""}function v(n){return n==="granted"||n==="prompt"}return{isSupported:e,text:k,copied:A,copy:F}}const J={key:0},Y={key:1},Z=V({__name:"demo",setup(u){const p=b(""),{text:o,isSupported:y,copy:s}=G(),g=D("clipboard-read"),h=D("clipboard-write");return(c,a)=>{const e=q;return d(y)?(f(),m("div",J,[r(e,null,{default:C(()=>[a[2]||(a[2]=l(" 剪贴板权限：读取 ")),i("b",null,B(d(g)),1),a[3]||(a[3]=l(" | 写入 ")),i("b",null,B(d(h)),1)]),_:1,__:[2,3]}),i("p",null,[a[4]||(a[4]=l(" 当前复制的内容：")),i("code",null,B(d(o)||"无"),1)]),N(i("input",{"onUpdate:modelValue":a[0]||(a[0]=k=>p.value=k),type:"text"},null,512),[[O,p.value]]),i("button",{onClick:a[1]||(a[1]=k=>d(s)(p.value))}," 复制 ")])):(f(),m("p",Y," 你的浏览器不支持剪贴板 API "))}}}),K=`<script setup lang="ts">
import { useClipboard, usePermission } from '@vueuse/core'
import { shallowRef } from 'vue'

const input = shallowRef('')

const { text, isSupported, copy } = useClipboard()
const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')
<\/script>

<template>
  <div v-if="isSupported">
    <note>
      剪贴板权限：读取 <b>{{ permissionRead }}</b> | 写入 <b>{{ permissionWrite }}</b>
    </note>
    <p>
      当前复制的内容：<code>{{ text || '无' }}</code>
    </p>
    <input v-model="input" type="text">
    <button @click="copy(input)">
      复制
    </button>
  </div>
  <p v-else>
    你的浏览器不支持剪贴板 API
  </p>
</template>
`,Q={class:"demo-source-link"},X=["href"],us=JSON.parse('{"title":"useClipboard","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useClipboard/index.md","filePath":"core/useClipboard/index.md","lastUpdated":1715934697000}'),ss={name:"core/useClipboard/index.md"},As=Object.assign(ss,{setup(u){const o=W({template:{value:{welcomeSFC:K}}}).serialize();return(y,s)=>{const g=U,h=R,c=I,a=S,e=w;return f(),m("div",null,[s[2]||(s[2]=i("h1",{id:"useclipboard",tabindex:"-1"},[l("useClipboard "),i("a",{class:"header-anchor",href:"#useclipboard","aria-label":"Permalink to “useClipboard”"},"​")],-1)),r(g,{fn:"useClipboard"}),s[3]||(s[3]=i("p",null,[l("响应式的 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API",target:"_blank",rel:"noreferrer"},"Clipboard API"),l("。提供对剪贴板命令 (剪切、复制和粘贴) 的响应能力，以及异步读取和写入系统剪贴板的能力。访问剪贴板内容的权限受到 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API",target:"_blank",rel:"noreferrer"},"Permissions API"),l(" 的限制。未经用户许可，不允许读取或更改剪贴板内容。")],-1)),r(h,{href:"https://vueschool.io/lessons/reactive-browser-wrappers-in-vueuse-useclipboard?friend=vueuse"},{default:C(()=>s[0]||(s[0]=[l("通过 Vue School 的这个免费视频课程学习如何使用 useClipboard 将文本响应式保存到剪贴板！")])),_:1,__:[0]}),s[4]||(s[4]=i("h2",{id:"示例",tabindex:"-1"},[l("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),r(c,null,{default:C(()=>[i("p",Q,[s[1]||(s[1]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useClipboard/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${d(o)}`,target:"_blank"},"playground (beta)",8,X)]),r(Z)]),_:1}),s[5]||(s[5]=z("",11)),r(a,{fn:"useClipboard"}),s[6]||(s[6]=i("h2",{id:"更新日志",tabindex:"-1"},[l("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),r(e,{fn:"useClipboard"})])}}});export{us as __pageData,As as default};

import{_ as u,a as c}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as D}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as A}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{u as B}from"./chunks/index.DHkSFma_.js";import{d as f,i as e,o as p,j as i,t as b,H as k,Z as m,g as a,Y as F,y as l,w as T}from"./chunks/vue.DDc96eEg.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";const v=f({__name:"demo",setup(r){const[t,h]=B();return(g,s)=>(p(),e("div",null,[i("p",null,"值："+b(k(t)?"开":"关"),1),i("button",{onClick:s[0]||(s[0]=n=>k(h)())}," 切换 "),i("button",{onClick:s[1]||(s[1]=n=>t.value=!0)}," 设为开 "),i("button",{onClick:s[2]||(s[2]=n=>t.value=!1)}," 设为关 ")]))}}),E=`<script setup lang="ts">
import { useToggle } from '@vueuse/core'

const [value, toggle] = useToggle()
<\/script>

<template>
  <div>
    <p>值：{{ value ? '开' : '关' }}</p>  <!-- 根据 value 的值显示“开”或“关” -->
    <button @click="toggle()">
      切换
    </button>
    <button @click="value = true">
      设为开
    </button>
    <button @click="value = false">
      设为关
    </button>
  </div>
</template>
`,C={class:"demo-source-link"},_=["href"],w=JSON.parse('{"title":"useToggle","description":"","frontmatter":{"category":"Utilities"},"headers":[],"relativePath":"shared/useToggle/index.md","filePath":"shared/useToggle/index.md","lastUpdated":1716184754000}'),x={name:"shared/useToggle/index.md"},N=Object.assign(x,{setup(r){const h=m({template:{value:{welcomeSFC:E}}}).serialize();return(g,s)=>{const n=A,d=D,y=u,o=c;return p(),e("div",null,[s[1]||(s[1]=i("h1",{id:"usetoggle",tabindex:"-1"},[l("useToggle "),i("a",{class:"header-anchor",href:"#usetoggle","aria-label":"Permalink to “useToggle”"},"​")],-1)),a(n,{fn:"useToggle"}),s[2]||(s[2]=i("p",null,"一个带有实用功能的布尔切换器。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[l("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(d,null,{default:T(()=>[i("p",C,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useToggle/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${k(h)}`,target:"_blank"},"playground (beta)",8,_)]),a(v)]),_:1}),s[4]||(s[4]=F("",11)),a(y,{fn:"useToggle"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[l("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(o,{fn:"useToggle"})])}}});export{w as __pageData,N as default};

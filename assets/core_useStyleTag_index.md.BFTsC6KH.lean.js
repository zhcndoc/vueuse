import{_ as m,a as b}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as C}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as v}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{z as D,G as S,B as _,d as x,i as u,o as B,F,j as s,y as e,a2 as E,a5 as T,H as t,a4 as w,t as A,Z as P,g as y,Y as R,w as I}from"./chunks/vue.K-Nh9t7y.js";import{t as L}from"./chunks/index.BGs_z4hs.js";import{g as $,t as j}from"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";let q=0;function N(o,k={}){const h=D(!1),{document:n=$,immediate:i=!0,manual:d=!1,id:l=`vueuse_styletag_${++q}`}=k,g=D(o);let a=()=>{};const p=()=>{if(!n)return;const r=n.getElementById(l)||n.createElement("style");r.isConnected||(r.id=l,k.nonce&&(r.nonce=k.nonce),k.media&&(r.media=k.media),n.head.appendChild(r)),!h.value&&(a=_(g,f=>{r.textContent=f},{immediate:!0}),h.value=!0)},c=()=>{!n||!h.value||(a(),n.head.removeChild(n.getElementById(l)),h.value=!1)};return i&&!d&&L(p),d||j(c),{id:l,css:g,unload:c,load:p,isLoaded:S(h)}}const O=["disabled"],V=["disabled"],U={class:"usestyle-demo"},M=x({__name:"demo",setup(o){const k=`
.demo { background: #ad4c2e50; }
.demo textarea { background: lightyellow; }
`.trim(),{id:h,css:n,load:i,unload:d,isLoaded:l}=N(k);return(g,a)=>(B(),u(F,null,[s("div",null,[a[3]||(a[3]=e(" 编辑 CSS： ",-1)),E(s("textarea",{"onUpdate:modelValue":a[0]||(a[0]=p=>w(n)?n.value=p:null),type:"text",rows:"2",class:"w-full"},null,512),[[T,t(n)]])]),s("button",{disabled:t(l),onClick:a[1]||(a[1]=(...p)=>t(i)&&t(i)(...p))}," 加载 ",8,O),s("button",{class:"orange",disabled:!t(l),onClick:a[2]||(a[2]=(...p)=>t(d)&&t(d)(...p))}," 卸载 ",8,V),s("div",U,[s("p",null,[a[4]||(a[4]=e("ID：",-1)),s("code",null,A(t(h)),1)]),s("p",null,[a[5]||(a[5]=e("已加载：",-1)),s("code",null,A(t(l)),1)])])],64))}}),z=`<script setup lang="ts">
import { useStyleTag } from '@vueuse/core'

const customCSS = \`
.demo { background: #ad4c2e50; }
.demo textarea { background: lightyellow; }
\`.trim()

const { id, css, load, unload, isLoaded } = useStyleTag(customCSS)
<\/script>

<template>
  <div>
    编辑 CSS：
    <textarea v-model="css" type="text" rows="2" class="w-full" />
  </div>
  <button :disabled="isLoaded" @click="load">
    加载
  </button>
  <button class="orange" :disabled="!isLoaded" @click="unload">
    卸载
  </button>
  <div class="usestyle-demo">
    <p>ID：<code>{{ id }}</code></p>
    <p>已加载：<code>{{ isLoaded }}</code></p>
  </div>
</template>
`,G={class:"demo-source-link"},H=["href"],is=JSON.parse('{"title":"useStyleTag","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useStyleTag/index.md","filePath":"core/useStyleTag/index.md","lastUpdated":1715934697000}'),J={name:"core/useStyleTag/index.md"},as=Object.assign(J,{setup(o){const h=P({template:{value:{welcomeSFC:z}}}).serialize();return(n,i)=>{const d=v,l=C,g=m,a=b;return B(),u("div",null,[i[1]||(i[1]=s("h1",{id:"usestyletag",tabindex:"-1"},[e("useStyleTag "),s("a",{class:"header-anchor",href:"#usestyletag","aria-label":"Permalink to “useStyleTag”"},"​")],-1)),y(d,{fn:"useStyleTag"}),i[2]||(i[2]=s("p",null,[e("在 "),s("code",null,"<head>"),e(" 中注入响应式的 "),s("code",null,"style"),e(" 元素。")],-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[e("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),y(l,null,{default:I(()=>[s("p",G,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useStyleTag/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${t(h)}`,target:"_blank"},"playground (beta)",8,H)]),y(M)]),_:1}),i[4]||(i[4]=R("",19)),y(g,{fn:"useStyleTag"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[e("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),y(a,{fn:"useStyleTag"})])}}});export{is as __pageData,as as default};

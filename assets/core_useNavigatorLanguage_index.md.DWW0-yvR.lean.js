import{_ as y,a as D}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as A}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{_ as v}from"./chunks/Note.DW__0Z7J.js";import{_ as f}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.BUf_gkVe.js";import{d as _}from"./chunks/metadata.ByJC-ruD.js";import{u as b}from"./chunks/index.qy4VQT1o.js";import{u as B}from"./chunks/index.BImTs33O.js";import{z as N,d as C,i as l,o as p,F as E,j as a,g as n,y as e,H as h,w as d,t as F,Z as L,Y as S}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.B2rzktNR.js";function x(k={}){const{window:t=_}=k,i=t?.navigator,r=B(()=>i&&"language"in i),s=N(i?.language);return b(t,"languagechange",()=>{i&&(s.value=i.language)},{passive:!0}),{isSupported:r,language:s}}const w={key:0},P={class:"mr-2"},R={key:1},T=C({__name:"demo",setup(k){const{isSupported:t,language:i}=x();return(r,s)=>{const g=f,o=v;return p(),l(E,null,[a("p",null,[s[0]||(s[0]=e(" Supported: ",-1)),n(g,{value:h(t)},null,8,["value"])]),n(o,{class:"mb-2"},{default:d(()=>s[1]||(s[1]=[e(" Navigator Language: ",-1)])),_:1,__:[1]}),h(t)?(p(),l("div",w,[a("code",P,F(h(i)),1)])):(p(),l("div",R," 你的浏览器不支持 Navigator.language API。 "))],64)}}}),$=`<script setup lang="ts">
import { useNavigatorLanguage } from '@vueuse/core'

const { isSupported, language } = useNavigatorLanguage()
<\/script>

<template>
  <p>
    Supported: <BooleanDisplay :value="isSupported" />
  </p>
  <note class="mb-2">
    Navigator Language:
  </note>
  <div v-if="isSupported">
    <code class="mr-2">{{ language }}</code>
  </div>
  <div v-else>
    你的浏览器不支持 Navigator.language API。
  </div>
</template>
`,I={class:"demo-source-link"},V=["href"],ss=JSON.parse('{"title":"useNavigatorLanguage","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useNavigatorLanguage/index.md","filePath":"core/useNavigatorLanguage/index.md","lastUpdated":1739784586000}'),z={name:"core/useNavigatorLanguage/index.md"},as=Object.assign(z,{setup(k){const i=L({template:{value:{welcomeSFC:$}}}).serialize();return(r,s)=>{const g=m,o=A,u=y,c=D;return p(),l("div",null,[s[1]||(s[1]=a("h1",{id:"usenavigatorlanguage",tabindex:"-1"},[e("useNavigatorLanguage "),a("a",{class:"header-anchor",href:"#usenavigatorlanguage","aria-label":"Permalink to “useNavigatorLanguage”"},"​")],-1)),n(g,{fn:"useNavigatorLanguage"}),s[2]||(s[2]=a("p",null,[e("响应式地获取 "),a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language",target:"_blank",rel:"noreferrer"},"navigator.language"),e("。")],-1)),s[3]||(s[3]=a("h2",{id:"示例",tabindex:"-1"},[e("示例 "),a("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),n(o,null,{default:d(()=>[a("p",I,[s[0]||(s[0]=a("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useNavigatorLanguage/demo.vue",target:"_blank"},"源码",-1)),a("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${h(i)}`,target:"_blank"},"playground (beta)",8,V)]),n(T)]),_:1}),s[4]||(s[4]=S("",7)),n(u,{fn:"useNavigatorLanguage"}),s[5]||(s[5]=a("h2",{id:"更新日志",tabindex:"-1"},[e("更新日志 "),a("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),n(c,{fn:"useNavigatorLanguage"})])}}});export{ss as __pageData,as as default};

import{_ as y,a as D}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as A}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{_ as f}from"./chunks/Note.B_ue-6bE.js";import{_ as v}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.DvmxuIkN.js";import{d as _}from"./chunks/metadata.HXIr2NKd.js";import{u as b}from"./chunks/index.DK97_WvT.js";import{u as B}from"./chunks/index.BXXSfDxN.js";import{z as N,d as C,i as l,o as p,F,j as a,g as e,y as t,H as h,w as d,t as L,Z as E,Y as S}from"./chunks/vue.DQfvmmyQ.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/general.CGRH32nb.js";import"./chunks/index.B5l6yAbo.js";function x(k={}){const{window:n=_}=k,i=n==null?void 0:n.navigator,r=B(()=>i&&"language"in i),s=N(i==null?void 0:i.language);return b(n,"languagechange",()=>{i&&(s.value=i.language)},{passive:!0}),{isSupported:r,language:s}}const P={key:0},w={class:"mr-2"},R={key:1},$=C({__name:"demo",setup(k){const{isSupported:n,language:i}=x();return(r,s)=>{const g=v,o=f;return p(),l(F,null,[a("p",null,[s[0]||(s[0]=t(" Supported: ")),e(g,{value:h(n)},null,8,["value"])]),e(o,{class:"mb-2"},{default:d(()=>s[1]||(s[1]=[t(" Navigator Language: ")])),_:1}),h(n)?(p(),l("div",P,[a("code",w,L(h(i)),1)])):(p(),l("div",R," 你的浏览器不支持 Navigator.language API。 "))],64)}}}),T=`<script setup lang="ts">
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
`,I={class:"demo-source-link"},V=["href"],ss=JSON.parse('{"title":"useNavigatorLanguage","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useNavigatorLanguage/index.md","filePath":"core/useNavigatorLanguage/index.md","lastUpdated":1739784586000}'),z={name:"core/useNavigatorLanguage/index.md"},as=Object.assign(z,{setup(k){const i=E({template:{value:{welcomeSFC:T}}}).serialize();return(r,s)=>{const g=m,o=A,u=y,c=D;return p(),l("div",null,[s[1]||(s[1]=a("h1",{id:"usenavigatorlanguage",tabindex:"-1"},[t("useNavigatorLanguage "),a("a",{class:"header-anchor",href:"#usenavigatorlanguage","aria-label":"Permalink to “useNavigatorLanguage”"},"​")],-1)),e(g,{fn:"useNavigatorLanguage"}),s[2]||(s[2]=a("p",null,[t("响应式地获取 "),a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language",target:"_blank",rel:"noreferrer"},"navigator.language"),t("。")],-1)),s[3]||(s[3]=a("h2",{id:"示例",tabindex:"-1"},[t("示例 "),a("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),e(o,null,{default:d(()=>[a("p",I,[s[0]||(s[0]=a("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useNavigatorLanguage/demo.vue",target:"_blank"},"源码",-1)),a("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${h(i)}`,target:"_blank"},"playground (beta)",8,V)]),e($)]),_:1}),s[4]||(s[4]=S("",7)),e(u,{fn:"useNavigatorLanguage"}),s[5]||(s[5]=a("h2",{id:"更新日志",tabindex:"-1"},[t("更新日志 "),a("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),e(c,{fn:"useNavigatorLanguage"})])}}});export{ss as __pageData,as as default};

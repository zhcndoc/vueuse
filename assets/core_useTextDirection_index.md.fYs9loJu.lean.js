import{_ as u,a as A}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as f}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{t as b}from"./chunks/index.BGs_z4hs.js";import{g as B}from"./chunks/metadata.ByJC-ruD.js";import{u as _}from"./chunks/index.CLp6I5-5.js";import{r as x,A as o,d as C,i as g,o as c,j as s,t as d,H as D,Z as v,g as l,Y as T,y as h,w as E}from"./chunks/vue.K-Nh9t7y.js";import{_ as F}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/index.BImTs33O.js";import"./chunks/index.B2rzktNR.js";import"./chunks/general.tY1gtZD0.js";function S(k={}){const{document:a=B,selector:t="html",observe:p=!1,initialValue:i="ltr"}=k;function n(){return a?.querySelector(t)?.getAttribute("dir")??i}const e=x(n());return b(()=>e.value=n()),p&&a&&_(a.querySelector(t),()=>e.value=n(),{attributes:!0}),o({get(){return e.value},set(r){e.value=r,a&&(e.value?a.querySelector(t)?.setAttribute("dir",e.value):a.querySelector(t)?.removeAttribute("dir"))}})}const q={id:"_useTextDirectionDemo"},V={class:"ml-2"},P=C({__name:"demo",setup(k){const a=S({selector:"#_useTextDirectionDemo"}),t=o(()=>a.value==="ltr"?"This paragraph is in English and correctly goes left to right.":"This paragraph is in English but incorrectly goes right to left.");function p(){a.value=a.value==="rtl"?"ltr":"rtl"}return(i,n)=>(c(),g("div",q,[s("p",null,d(t.value),1),n[0]||(n[0]=s("hr",null,null,-1)),s("button",{onClick:p},[s("span",V,d(D(a).toUpperCase()),1)]),n[1]||(n[1]=s("span",{class:"p-4 opacity-50"},"单击以更改方向",-1))]))}}),O=F(P,[["__scopeId","data-v-369a7a67"]]),U=`<script setup lang="ts">
import { useTextDirection } from '@vueuse/core'

import { computed } from 'vue'

const dir = useTextDirection({
  selector: '#_useTextDirectionDemo',
})
const text = computed(() =>
  dir.value === 'ltr'
    ? 'This paragraph is in English and correctly goes left to right.'
    : 'This paragraph is in English but incorrectly goes right to left.')

function handleOnClick() {
  dir.value = dir.value === 'rtl' ? 'ltr' : 'rtl'
}
<\/script>

<template>
  <div id="_useTextDirectionDemo">
    <p>
      {{ text }}
    </p>
    <hr>
    <button @click="handleOnClick">
      <span class="ml-2">{{ dir.toUpperCase() }}</span>
    </button>
    <span class="p-4 opacity-50">单击以更改方向</span>
  </div>
</template>

<style scoped>
#_useTextDirectionDemo[dir='rtl'] p {
  color: red;
}
button {
  margin-right: 0.5em;
}
</style>
`,$={class:"demo-source-link"},N=["href"],Q=JSON.parse('{"title":"useTextDirection","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useTextDirection/index.md","filePath":"core/useTextDirection/index.md","lastUpdated":1715934697000}'),w={name:"core/useTextDirection/index.md"},X=Object.assign(w,{setup(k){const t=v({template:{value:{welcomeSFC:U}}}).serialize();return(p,i)=>{const n=f,e=m,r=u,y=A;return c(),g("div",null,[i[1]||(i[1]=s("h1",{id:"usetextdirection",tabindex:"-1"},[h("useTextDirection "),s("a",{class:"header-anchor",href:"#usetextdirection","aria-label":"Permalink to “useTextDirection”"},"​")],-1)),l(n,{fn:"useTextDirection"}),i[2]||(i[2]=s("p",null,[h("元素文本的响应式 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir",target:"_blank",rel:"noreferrer"},"dir"),h("。")],-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[h("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),l(e,null,{default:E(()=>[s("p",$,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useTextDirection/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${D(t)}`,target:"_blank"},"playground (beta)",8,N)]),l(O)]),_:1}),i[4]||(i[4]=T("",11)),l(r,{fn:"useTextDirection"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[h("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(y,{fn:"useTextDirection"})])}}});export{Q as __pageData,X as default};

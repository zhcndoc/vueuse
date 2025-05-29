import{_ as A,a as m}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as f}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{t as B}from"./chunks/index.C5yl_2qJ.js";import{g as x}from"./chunks/metadata.CHQ7S0zC.js";import{u as C}from"./chunks/index.PYylaYON.js";import{r as _,A as c,d as v,i as D,o as y,j as s,t as g,H as u,Z as T,g as h,Y as E,y as p,w as F}from"./chunks/vue.BjJVtbJX.js";import{_ as S}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.BsCVlyoA.js";import"./chunks/index.D6Ixh6S-.js";import"./chunks/index.CBIpye6U.js";import"./chunks/general.CGRH32nb.js";function q(d={}){const{document:a=x,selector:n="html",observe:k=!1,initialValue:i="ltr"}=d;function t(){var l;return((l=a==null?void 0:a.querySelector(n))==null?void 0:l.getAttribute("dir"))??i}const e=_(t());return B(()=>e.value=t()),k&&a&&C(a.querySelector(n),()=>e.value=t(),{attributes:!0}),c({get(){return e.value},set(l){var r,o;e.value=l,a&&(e.value?(r=a.querySelector(n))==null||r.setAttribute("dir",e.value):(o=a.querySelector(n))==null||o.removeAttribute("dir"))}})}const V={id:"_useTextDirectionDemo"},P={class:"ml-2"},O=v({__name:"demo",setup(d){const a=q({selector:"#_useTextDirectionDemo"}),n=c(()=>a.value==="ltr"?"This paragraph is in English and correctly goes left to right.":"This paragraph is in English but incorrectly goes right to left.");function k(){a.value=a.value==="rtl"?"ltr":"rtl"}return(i,t)=>(y(),D("div",V,[s("p",null,g(n.value),1),t[0]||(t[0]=s("hr",null,null,-1)),s("button",{onClick:k},[s("span",P,g(u(a).toUpperCase()),1)]),t[1]||(t[1]=s("span",{class:"p-4 opacity-50"},"单击以更改方向",-1))]))}}),U=S(O,[["__scopeId","data-v-369a7a67"]]),$=`<script setup lang="ts">
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
`,N={class:"demo-source-link"},w=["href"],X=JSON.parse('{"title":"useTextDirection","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useTextDirection/index.md","filePath":"core/useTextDirection/index.md","lastUpdated":1715934697000}'),R={name:"core/useTextDirection/index.md"},ss=Object.assign(R,{setup(d){const n=T({template:{value:{welcomeSFC:$}}}).serialize();return(k,i)=>{const t=b,e=f,l=A,r=m;return y(),D("div",null,[i[1]||(i[1]=s("h1",{id:"usetextdirection",tabindex:"-1"},[p("useTextDirection "),s("a",{class:"header-anchor",href:"#usetextdirection","aria-label":"Permalink to “useTextDirection”"},"​")],-1)),h(t,{fn:"useTextDirection"}),i[2]||(i[2]=s("p",null,[p("元素文本的响应式 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir",target:"_blank",rel:"noreferrer"},"dir"),p("。")],-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[p("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),h(e,null,{default:F(()=>[s("p",N,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useTextDirection/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${u(n)}`,target:"_blank"},"playground (beta)",8,w)]),h(U)]),_:1}),i[4]||(i[4]=E("",11)),h(l,{fn:"useTextDirection"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[p("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),h(r,{fn:"useTextDirection"})])}}});export{X as __pageData,ss as default};

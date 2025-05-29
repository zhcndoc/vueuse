import{_ as m,a as A}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as u}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as D}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{_ as v}from"./chunks/Note.jk4vUmz6.js";import{u as f}from"./chunks/index.BQyBXmO3.js";import{d as B,A as _,i as p,o as k,F as d,g as a,j as i,w as o,y as n,O as b,t as E,Z as C,Y as x,H as F}from"./chunks/vue.BjJVtbJX.js";import"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.BbmjpWMg.js";import"./chunks/index.BsCVlyoA.js";import"./chunks/index.PYylaYON.js";import"./chunks/index.D6Ixh6S-.js";import"./chunks/index.CBIpye6U.js";import"./chunks/general.CGRH32nb.js";import"./chunks/index.DEO4egZK.js";const w={class:"grid grid-cols-1 md:grid-cols-3 gap-2"},P=["data-id","placeholder"],T={class:"mt-2"},S={class:"text-primary"},$=B({__name:"demo",setup(g){const r=f(),l=_(()=>{var t,s;return((s=(t=r.value)==null?void 0:t.dataset)==null?void 0:s.id)||"null"});return(t,s)=>{const h=v;return k(),p(d,null,[a(h,{class:"mb-3"},{default:o(()=>s[0]||(s[0]=[n(" 选择下面的 input 查看当前激活的元素 ")])),_:1,__:[0]}),i("div",w,[(k(),p(d,null,b(6,e=>i("input",{key:e,type:"text","data-id":e,class:"!my-0 !min-w-0",placeholder:`${e}`},null,8,P)),64))]),i("div",T,[s[1]||(s[1]=n(" 当前激活的元素: ")),i("span",S,E(l.value),1)])],64)}}}),O=`<script setup lang="ts">
import { useActiveElement } from '@vueuse/core'
import { computed } from 'vue'

const activeElement = useActiveElement()
const key = computed(() => activeElement.value?.dataset?.id || 'null')
<\/script>

<template>
  <note
    class="mb-3"
  >
    选择下面的 input 查看当前激活的元素
  </note>
  <div
    class="
    grid
    grid-cols-1
    md:grid-cols-3
    gap-2"
  >
    <input
      v-for="i in 6"
      :key="i"
      type="text"
      :data-id="i"
      class="!my-0 !min-w-0"
      :placeholder="\`\${i}\`"
    >
  </div>
  <div class="mt-2">
    当前激活的元素:
    <span class="text-primary">{{ key }}</span>
  </div>
</template>
`,N={class:"demo-source-link"},R=["href"],ss=JSON.parse('{"title":"useActiveElement","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useActiveElement/index.md","filePath":"core/useActiveElement/index.md","lastUpdated":1715934697000}'),U={name:"core/useActiveElement/index.md"},is=Object.assign(U,{setup(g){const l=C({template:{value:{welcomeSFC:O}}}).serialize();return(t,s)=>{const h=D,e=u,c=m,y=A;return k(),p("div",null,[s[1]||(s[1]=i("h1",{id:"useactiveelement",tabindex:"-1"},[n("useActiveElement "),i("a",{class:"header-anchor",href:"#useactiveelement","aria-label":"Permalink to “useActiveElement”"},"​")],-1)),a(h,{fn:"useActiveElement"}),s[2]||(s[2]=i("p",null,[n("响应式地获取 "),i("code",null,"document.activeElement")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[n("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(e,null,{default:o(()=>[i("p",N,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useActiveElement/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${F(l)}`,target:"_blank"},"playground (beta)",8,R)]),a($)]),_:1}),s[4]||(s[4]=x("",9)),a(c,{fn:"useActiveElement"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[n("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(y,{fn:"useActiveElement"})])}}});export{ss as __pageData,is as default};

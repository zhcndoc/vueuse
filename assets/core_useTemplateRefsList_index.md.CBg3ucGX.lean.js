import{_ as f,a as m}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as D}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as A}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{_ as b}from"./chunks/Note.B_ue-6bE.js";import{r as B,am as _,d as v,z as C,B as T,i as k,o as p,F as d,j as i,g as n,O as R,H as o,t as E,w as g,y as l,v as F,Z as x,Y as L}from"./chunks/vue.DQfvmmyQ.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";function w(){const t=B([]);return t.value.set=a=>{a&&t.value.push(a)},_(()=>{t.value.length=0}),t}const P=["disabled"],$=v({__name:"demo",setup(t){const a=C(5),h=w();return T(h,async()=>{await F(),console.log([...h.value])},{deep:!0,flush:"post"}),(y,s)=>{const r=b;return p(),k(d,null,[(p(!0),k(d,null,R(a.value,e=>(p(),k("span",{key:e,ref_for:!0,ref:o(h).set,class:"mr-2"},E(e),1))),128)),s[3]||(s[3]=i("br",null,null,-1)),i("button",{onClick:s[0]||(s[0]=e=>a.value+=1)}," 增加 "),i("button",{disabled:a.value<=0,onClick:s[1]||(s[1]=e=>a.value-=1)}," 减少 ",8,P),n(r,null,{default:g(()=>s[2]||(s[2]=[l("打开控制台查看输出")])),_:1})],64)}}}),q=`<script setup lang="ts">
import { useTemplateRefsList } from '@vueuse/core'
import { nextTick, shallowRef, watch } from 'vue'

const count = shallowRef(5)
const refs = useTemplateRefsList<HTMLDivElement>()

watch(refs, async () => {
  await nextTick()
  console.log([...refs.value])
}, {
  deep: true,
  flush: 'post',
})
<\/script>

<template>
  <span v-for="i of count" :key="i" :ref="refs.set" class="mr-2">
    {{ i }}
  </span>
  <br>
  <button @click="count += 1">
    增加
  </button>
  <button :disabled="count <= 0" @click="count -= 1">
    减少
  </button>
  <note>打开控制台查看输出</note>
</template>
`,S={class:"demo-source-link"},N=["href"],Y=JSON.parse('{"title":"useTemplateRefsList","description":"","frontmatter":{"category":"Component"},"headers":[],"relativePath":"core/useTemplateRefsList/index.md","filePath":"core/useTemplateRefsList/index.md","lastUpdated":1746667860000}'),V={name:"core/useTemplateRefsList/index.md"},Z=Object.assign(V,{setup(t){const h=x({template:{value:{welcomeSFC:q}}}).serialize();return(y,s)=>{const r=A,e=D,u=f,c=m;return p(),k("div",null,[s[1]||(s[1]=i("h1",{id:"usetemplaterefslist",tabindex:"-1"},[l("useTemplateRefsList "),i("a",{class:"header-anchor",href:"#usetemplaterefslist","aria-label":"Permalink to “useTemplateRefsList”"},"​")],-1)),n(r,{fn:"useTemplateRefsList"}),s[2]||(s[2]=i("p",null,[l("用于将 refs 绑定到 "),i("code",null,"v-for"),l(" 内的模板元素和组件的快捷方式。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[l("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),n(e,null,{default:g(()=>[i("p",S,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useTemplateRefsList/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${o(h)}`,target:"_blank"},"playground (beta)",8,N)]),n($)]),_:1}),s[4]||(s[4]=L("",7)),n(u,{fn:"useTemplateRefsList"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[l("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),n(c,{fn:"useTemplateRefsList"})])}}});export{Y as __pageData,Z as default};

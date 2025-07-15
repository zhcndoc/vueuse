import{_ as f,a as b}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_ as A}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as B}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{_ as m}from"./chunks/Note.BA4Afsl9.js";import{t as _}from"./chunks/metadata.DSy5Z-Tw.js";import{z as y,B as v,G as C,a3 as U,d as j,i as k,o as p,g as l,j as a,w as o,y as d,H as r,t as E,Z as F,Y as c}from"./chunks/vue.DDc96eEg.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";function O(g){const i=y(),n=()=>{i.value&&URL.revokeObjectURL(i.value),i.value=void 0};return v(()=>U(g),h=>{n(),h&&(i.value=URL.createObjectURL(h))},{immediate:!0}),_(n),C(i)}const R=["href"],x={key:1},L=j({__name:"demo",setup(g){const i=y(),n=O(i);function h(s){const t=s.target.files;i.value=t&&t.length>0?t[0]:void 0}return(s,e)=>{const t=m;return p(),k("div",null,[l(t,{class:"mb-1"},{default:o(()=>e[0]||(e[0]=[d(" 选择文件: ")])),_:1,__:[0]}),a("input",{type:"file",onChange:h},null,32),l(t,{class:"mt-4 mb-1"},{default:o(()=>e[1]||(e[1]=[d(" Object URL: ")])),_:1,__:[1]}),a("code",null,[r(n)?(p(),k("a",{key:0,href:r(n),target:"_blank"},E(r(n)),9,R)):(p(),k("span",x,"none"))])])}}}),P=`<script setup lang="ts">
import { useObjectUrl } from '@vueuse/core'
import { shallowRef } from 'vue'

const file = shallowRef()
const url = useObjectUrl(file)

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  const files = target.files
  file.value = (files && files.length > 0) ? files[0] : undefined
}
<\/script>

<template>
  <div>
    <note class="mb-1">
      选择文件:
    </note>
    <input type="file" @change="onFileChange">

    <note class="mt-4 mb-1">
      Object URL:
    </note>
    <code>
      <a v-if="url" :href="url" target="_blank">{{ url }}</a>
      <span v-else>none</span>
    </code>
  </div>
</template>
`,S={class:"demo-source-link"},T=["href"],H=JSON.parse('{"title":"useObjectUrl","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useObjectUrl/index.md","filePath":"core/useObjectUrl/index.md","lastUpdated":1715934697000}'),q={name:"core/useObjectUrl/index.md"},W=Object.assign(q,{setup(g){const n=F({template:{value:{welcomeSFC:P}}}).serialize();return(h,s)=>{const e=B,t=A,u=f,D=b;return p(),k("div",null,[s[1]||(s[1]=a("h1",{id:"useobjecturl",tabindex:"-1"},[d("useObjectUrl "),a("a",{class:"header-anchor",href:"#useobjecturl","aria-label":"Permalink to “useObjectUrl”"},"​")],-1)),l(e,{fn:"useObjectUrl"}),s[2]||(s[2]=c("",3)),l(t,null,{default:o(()=>[a("p",S,[s[0]||(s[0]=a("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useObjectUrl/demo.vue",target:"_blank"},"源码",-1)),a("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${r(n)}`,target:"_blank"},"playground (beta)",8,T)]),l(L)]),_:1}),s[3]||(s[3]=c("",9)),l(u,{fn:"useObjectUrl"}),s[4]||(s[4]=a("h2",{id:"更新日志",tabindex:"-1"},[d("更新日志 "),a("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(D,{fn:"useObjectUrl"})])}}});export{H as __pageData,W as default};

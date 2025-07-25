import{_ as A,a as f}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as D}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{A as v,a3 as r,d as _,z as o,i as g,o as c,j as a,t as l,a2 as B,a5 as P,H as y,Z as j,g as h,Y as C,y as d,w as F}from"./chunks/vue.DDc96eEg.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";function x(t,s,i){return e=>v(()=>i(r(e),r(t),r(s)))}function E(t,s,i){return(t-s[0])/(s[1]-s[0])*(i[1]-i[0])+i[0]}function R(t,s,i=E){return x(t,s,i)}function w(t,s,i,e){return R(s,i,e)(t)}const S=["min","max"],T=_({__name:"demo",setup(t){const s=o([0,10]),i=o([10,100]),e=o(0),n=w(e,s,i);return(u,k)=>(c(),g("div",null,[a("div",null," Projection from ["+l(s.value[0])+", "+l(s.value[1])+"] to ["+l(i.value[0])+", "+l(i.value[1])+"] ",1),a("div",null,[B(a("input",{id:"input","onUpdate:modelValue":k[0]||(k[0]=p=>e.value=p),type:"range",min:s.value[0],max:s.value[1]},null,8,S),[[P,e.value,void 0,{number:!0}]])]),a("div",null," Input: "+l(e.value),1),a("div",null," Output: "+l(y(n)),1)]))}}),V=`<script setup lang="ts">
import { useProjection } from '@vueuse/math'
import { shallowRef } from 'vue'

const from = shallowRef<[number, number]>([0, 10])
const to = shallowRef<[number, number]>([10, 100])
const input = shallowRef(0)

const output = useProjection(input, from, to)
<\/script>

<template>
  <div>
    <div>
      Projection from [{{ from[0] }}, {{ from[1] }}] to [{{ to[0] }}, {{ to[1] }}]
    </div>
    <div>
      <input id="input" v-model.number="input" type="range" :min="from[0]" :max="from[1]">
    </div>
    <div>
      Input: {{ input }}
    </div>
    <div>
      Output: {{ output }}
    </div>
  </div>
</template>
`,N={class:"demo-source-link"},O=["href"],J=JSON.parse('{"title":"useProjection","description":"","frontmatter":{"category":"@Math","related":"createGenericProjection"},"headers":[],"relativePath":"math/useProjection/index.md","filePath":"math/useProjection/index.md","lastUpdated":1716184754000}'),$={name:"math/useProjection/index.md"},Y=Object.assign($,{setup(t){const i=j({template:{value:{welcomeSFC:V}}}).serialize();return(e,n)=>{const u=b,k=D,p=A,m=f;return c(),g("div",null,[n[1]||(n[1]=a("h1",{id:"useprojection",tabindex:"-1"},[d("useProjection "),a("a",{class:"header-anchor",href:"#useprojection","aria-label":"Permalink to “useProjection”"},"​")],-1)),h(u,{fn:"useProjection"}),n[2]||(n[2]=a("p",null,"从一个域映射到另一个域的响应式数值投影。",-1)),n[3]||(n[3]=a("h2",{id:"示例",tabindex:"-1"},[d("示例 "),a("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),h(k,null,{default:F(()=>[a("p",N,[n[0]||(n[0]=a("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/math/useProjection/demo.vue",target:"_blank"},"源码",-1)),a("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${y(i)}`,target:"_blank"},"playground (beta)",8,O)]),h(T)]),_:1}),n[4]||(n[4]=C("",7)),h(p,{fn:"useProjection"}),n[5]||(n[5]=a("h2",{id:"更新日志",tabindex:"-1"},[d("更新日志 "),a("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),h(m,{fn:"useProjection"})])}}});export{J as __pageData,Y as default};

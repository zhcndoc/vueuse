import{_ as c,a as A}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as b}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as f}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{d as B,z as p,i as g,o,y as t,a2 as r,j as s,a5 as d,t as v,H as y,Z as C,g as e,Y as _,w as F}from"./chunks/vue.K-Nh9t7y.js";import{u as x}from"./chunks/index.BAZPY4o3.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";const E=B({__name:"demo",setup(m){const h=p(0),l=p(10),k=x(0,h,l);return(a,i)=>(o(),g("div",null,[i[4]||(i[4]=t(" min: ",-1)),r(s("input",{"onUpdate:modelValue":i[0]||(i[0]=n=>h.value=n),type:"number"},null,512),[[d,h.value]]),i[5]||(i[5]=t(" max: ",-1)),r(s("input",{"onUpdate:modelValue":i[1]||(i[1]=n=>l.value=n),type:"number"},null,512),[[d,l.value]]),t(" value:"+v(y(k))+" ",1),s("div",null,[s("button",{onClick:i[2]||(i[2]=n=>k.value--)}," Decrement "),s("button",{onClick:i[3]||(i[3]=n=>k.value++)}," Increment ")])]))}}),R=`<script setup lang="ts">
import { useClamp } from '@vueuse/math'
import { shallowRef } from 'vue'

const min = shallowRef(0)
const max = shallowRef(10)

const value = useClamp(0, min, max)
<\/script>

<template>
  <div>
    min:
    <input v-model="min" type="number">
    max:
    <input v-model="max" type="number">
    value:{{ value }}
    <div>
      <button @click="value--">
        Decrement
      </button>
      <button @click="value++">
        Increment
      </button>
    </div>
  </div>
</template>
`,w={class:"demo-source-link"},P=["href"],I=JSON.parse('{"title":"useClamp","description":"","frontmatter":{"category":"@Math"},"headers":[],"relativePath":"math/useClamp/index.md","filePath":"math/useClamp/index.md","lastUpdated":1739784586000}'),S={name:"math/useClamp/index.md"},z=Object.assign(S,{setup(m){const l=C({template:{value:{welcomeSFC:R}}}).serialize();return(k,a)=>{const i=f,n=b,u=c,D=A;return o(),g("div",null,[a[1]||(a[1]=s("h1",{id:"useclamp",tabindex:"-1"},[t("useClamp "),s("a",{class:"header-anchor",href:"#useclamp","aria-label":"Permalink to “useClamp”"},"​")],-1)),e(i,{fn:"useClamp"}),a[2]||(a[2]=s("p",null,"在两个其他值之间响应式地夹取一个值。",-1)),a[3]||(a[3]=s("h2",{id:"示例",tabindex:"-1"},[t("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),e(n,null,{default:F(()=>[s("p",w,[a[0]||(a[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/math/useClamp/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${y(l)}`,target:"_blank"},"playground (beta)",8,P)]),e(E)]),_:1}),a[4]||(a[4]=_("",9)),e(u,{fn:"useClamp"}),a[5]||(a[5]=s("h2",{id:"更新日志",tabindex:"-1"},[t("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),e(D,{fn:"useClamp"})])}}});export{I as __pageData,z as default};

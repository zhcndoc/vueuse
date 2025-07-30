import{_ as A,a as v}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as f}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as B}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{o as c}from"./chunks/index.CPudsCac.js";import{d as b,z as n,i as r,o,j as s,t as m,q as C,Z as E,g as h,Y as R,y,w as _,H as F}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/index.CLp6I5-5.js";import"./chunks/index.BImTs33O.js";import"./chunks/index.B2rzktNR.js";import"./chunks/general.tY1gtZD0.js";const S={class:"on-element-removal__demo"},w=b({__name:"demo",setup(u){const d=n(null),l=n(!0),g=n(0);function i(){l.value=!l.value}c(d,()=>g.value++);const k=n(null),e=n(null),a=n(!0),p=n(0);function D(){a.value=!a.value,a.value?k.value?.appendChild(e.value):e.value?.remove()}return c(e,()=>p.value++),(q,t)=>(o(),r("div",S,[t[0]||(t[0]=s("h3",null,"demo1: recreate new element",-1)),s("div",null,[l.value?(o(),r("button",{key:1,ref_key:"demo1Ref",ref:d,class:"btn",onClick:i}," remove me ",512)):(o(),r("button",{key:0,onClick:i}," recreate me ")),s("div",null,[s("b",null,"removed times: "+m(g.value),1)])]),t[1]||(t[1]=s("hr",null,null,-1)),t[2]||(t[2]=s("h3",null,"demo2: reuse same element",-1)),s("button",{class:C({btn:a.value}),onClick:D},m(a.value?"remove":"append")+" me ",3),s("span",{ref_key:"demo2ParentRef",ref:k},[s("span",{ref_key:"demo2Ref",ref:e}," target element ",512)],512),s("div",null,[s("b",null,"removed times: "+m(p.value),1)])]))}}),x=`<script setup lang="ts">
import { onElementRemoval } from '@vueuse/core'
import { shallowRef } from 'vue'

// demo1: recreate new element
const demo1Ref = shallowRef<HTMLElement | null>(null)
const demo1State = shallowRef(true)
const demo1Count = shallowRef(0)

function demo1BtnOnClick() {
  demo1State.value = !demo1State.value
}

onElementRemoval(demo1Ref, () => demo1Count.value++)

// demo2: reuse same element
const demo2ParentRef = shallowRef<HTMLElement | null>(null)
const demo2Ref = shallowRef<HTMLElement | null>(null)
const demo2State = shallowRef(true)
const demo2Count = shallowRef(0)

function demo2BtnOnClick() {
  demo2State.value = !demo2State.value
  if (demo2State.value) {
    demo2ParentRef.value?.appendChild(demo2Ref.value!)
  }
  else {
    demo2Ref.value?.remove()
  }
}

onElementRemoval(demo2Ref, () => demo2Count.value++)
<\/script>

<template>
  <div class="on-element-removal__demo">
    <h3>demo1: recreate new element</h3>
    <div>
      <button
        v-if="!demo1State"
        @click="demo1BtnOnClick"
      >
        recreate me
      </button>
      <button
        v-else
        ref="demo1Ref"
        class="btn"
        @click="demo1BtnOnClick"
      >
        remove me
      </button>
      <div>
        <b>removed times: {{ demo1Count }}</b>
      </div>
    </div>

    <hr>

    <h3>demo2: reuse same element</h3>
    <button
      :class="{ btn: demo2State }"
      @click="demo2BtnOnClick"
    >
      {{ demo2State ? 'remove' : 'append' }} me
    </button>
    <span ref="demo2ParentRef">
      <span ref="demo2Ref">
        target element
      </span>
    </span>
    <div>
      <b>removed times: {{ demo2Count }}</b>
    </div>
  </div>
</template>

<style lang="postcss">
.on-element-removal__demo .btn {
  @apply bg-red-400;
}

.on-element-removal__demo .btn:hover {
  @apply bg-red-500;
}
</style>
`,O={class:"demo-source-link"},P=["href"],Y=JSON.parse('{"title":"onElementRemoval","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/onElementRemoval/index.md","filePath":"core/onElementRemoval/index.md","lastUpdated":1739784586000}'),T={name:"core/onElementRemoval/index.md"},Z=Object.assign(T,{setup(u){const l=E({template:{value:{welcomeSFC:x}}}).serialize();return(g,i)=>{const k=B,e=f,a=A,p=v;return o(),r("div",null,[i[1]||(i[1]=s("h1",{id:"onelementremoval",tabindex:"-1"},[y("onElementRemoval "),s("a",{class:"header-anchor",href:"#onelementremoval","aria-label":"Permalink to “onElementRemoval”"},"​")],-1)),h(k,{fn:"onElementRemoval"}),i[2]||(i[2]=s("p",null,"当该元素或包含该元素的任何元素被移除时触发。",-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[y("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),h(e,null,{default:_(()=>[s("p",O,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/onElementRemoval/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${F(l)}`,target:"_blank"},"playground (beta)",8,P)]),h(w)]),_:1}),i[4]||(i[4]=R("",7)),h(a,{fn:"onElementRemoval"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[y("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),h(p,{fn:"onElementRemoval"})])}}});export{Y as __pageData,Z as default};

import{_ as v,a as f}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as B}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{o as u}from"./chunks/index.C1N7ztJU.js";import{d as C,z as e,i as r,o,j as s,t as y,q as E,Z as R,g as h,Y as _,y as c,w as F,H as S}from"./chunks/vue.DQfvmmyQ.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/index.BcBRhzZe.js";import"./chunks/index.BXXSfDxN.js";import"./chunks/index.B5l6yAbo.js";import"./chunks/general.CGRH32nb.js";const w={class:"on-element-removal__demo"},x=C({__name:"demo",setup(D){const d=e(null),l=e(!0),g=e(0);function i(){l.value=!l.value}u(d,()=>g.value++);const k=e(null),t=e(null),n=e(!0),p=e(0);function A(){var m,a;n.value=!n.value,n.value?(m=k.value)==null||m.appendChild(t.value):(a=t.value)==null||a.remove()}return u(t,()=>p.value++),(m,a)=>(o(),r("div",w,[a[0]||(a[0]=s("h3",null,"demo1: recreate new element",-1)),s("div",null,[l.value?(o(),r("button",{key:1,ref_key:"demo1Ref",ref:d,class:"btn",onClick:i}," remove me ",512)):(o(),r("button",{key:0,onClick:i}," recreate me ")),s("div",null,[s("b",null,"removed times: "+y(g.value),1)])]),a[1]||(a[1]=s("hr",null,null,-1)),a[2]||(a[2]=s("h3",null,"demo2: reuse same element",-1)),s("button",{class:E({btn:n.value}),onClick:A},y(n.value?"remove":"append")+" me ",3),s("span",{ref_key:"demo2ParentRef",ref:k},[s("span",{ref_key:"demo2Ref",ref:t}," target element ",512)],512),s("div",null,[s("b",null,"removed times: "+y(p.value),1)])]))}}),O=`<script setup lang="ts">
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
`,P={class:"demo-source-link"},T=["href"],Y=JSON.parse('{"title":"onElementRemoval","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/onElementRemoval/index.md","filePath":"core/onElementRemoval/index.md","lastUpdated":1739784586000}'),q={name:"core/onElementRemoval/index.md"},Z=Object.assign(q,{setup(D){const l=R({template:{value:{welcomeSFC:O}}}).serialize();return(g,i)=>{const k=b,t=B,n=v,p=f;return o(),r("div",null,[i[1]||(i[1]=s("h1",{id:"onelementremoval",tabindex:"-1"},[c("onElementRemoval "),s("a",{class:"header-anchor",href:"#onelementremoval","aria-label":"Permalink to “onElementRemoval”"},"​")],-1)),h(k,{fn:"onElementRemoval"}),i[2]||(i[2]=s("p",null,"当该元素或包含该元素的任何元素被移除时触发。",-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[c("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),h(t,null,{default:F(()=>[s("p",P,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/onElementRemoval/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${S(l)}`,target:"_blank"},"playground (beta)",8,T)]),h(x)]),_:1}),i[4]||(i[4]=_("",7)),h(n,{fn:"onElementRemoval"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[c("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),h(p,{fn:"onElementRemoval"})])}}});export{Y as __pageData,Z as default};

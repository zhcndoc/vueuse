import{_ as B,a as u}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{_ as v}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.y710iK4K.js";import{u as f}from"./chunks/index.CzZNpedS.js";import{d as E,a1 as g,z as C,i as y,o,F,j as s,H as h,y as t,g as n,Z as _,Y as I,w as x}from"./chunks/vue.DDc96eEg.js";import{_ as O}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/index.rocSL1WN.js";import"./chunks/index.BrP_zX4n.js";import"./chunks/general.tY1gtZD0.js";const R={class:"text-center"},T={class:"checkbox"},w=["checked"],P={class:"text-center"},V=E({__name:"demo",setup(D){const k=g("root"),l=g("target"),p=C(!1),{isActive:i,pause:r,resume:d}=f(l,([e])=>{p.value=e?.isIntersecting||!1},{root:k});return(e,a)=>{const c=v;return o(),y(F,null,[s("div",R,[s("label",T,[s("input",{checked:h(i),type:"checkbox",name:"enabled",onInput:a[0]||(a[0]=A=>A.target.checked?h(d)():h(r)())},null,40,w),a[1]||(a[1]=s("span",null,"启用",-1))])]),s("div",{ref_key:"root",ref:k,class:"root"},[a[3]||(a[3]=s("p",{class:"notice"}," 向下滚动我！ ",-1)),s("div",{ref_key:"target",ref:l,class:"target"},a[2]||(a[2]=[s("p",null,"Hello world!",-1)]),512)],512),s("div",P,[a[4]||(a[4]=t(" 元素 ")),n(c,{value:p.value,true:"内部",false:"外部",class:"font-bold"},null,8,["value"]),a[5]||(a[5]=t(" 视口 "))])],64)}}}),q=O(V,[["__scopeId","data-v-1d912dd8"]]),M=`<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { shallowRef, useTemplateRef } from 'vue'

const root = useTemplateRef<HTMLElement>('root')
const target = useTemplateRef<HTMLElement>('target')
const isVisible = shallowRef(false)

const { isActive, pause, resume } = useIntersectionObserver(
  target,
  ([entry]) => {
    isVisible.value = entry?.isIntersecting || false
  },
  { root },
)
<\/script>

<template>
  <div class="text-center">
    <label class="checkbox">
      <input
        :checked="isActive" type="checkbox" name="enabled"
        @input="($event.target as HTMLInputElement)!.checked ? resume() : pause() "
      >
      <span>启用</span>
    </label>
  </div>
  <div ref="root" class="root">
    <p class="notice">
      向下滚动我！
    </p>
    <div ref="target" class="target">
      <p>Hello world!</p>
    </div>
  </div>
  <div class="text-center">
    元素
    <BooleanDisplay
      :value="isVisible"
      true="内部"
      false="外部"
      class="font-bold"
    />
    视口
  </div>
</template>

<style scoped>
.root {
  border: 2px dashed #ccc;
  height: 200px;
  margin: 2rem 1rem;
  overflow-y: scroll;
}
.notice {
  text-align: center;
  padding: 2em 0;
  margin-bottom: 300px;
  font-style: italic;
  font-size: 1.2rem;
  opacity: 0.8;
}
.target {
  border: 2px dashed var(--vp-c-brand);
  padding: 10px;
  max-height: 150px;
  margin: 0 2rem 400px;
}
</style>
`,H={class:"demo-source-link"},$=["href"],ss=JSON.parse('{"title":"useIntersectionObserver","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useIntersectionObserver/index.md","filePath":"core/useIntersectionObserver/index.md","lastUpdated":1739784586000}'),S={name:"core/useIntersectionObserver/index.md"},is=Object.assign(S,{setup(D){const l=_({template:{value:{welcomeSFC:M}}}).serialize();return(p,i)=>{const r=b,d=m,e=B,a=u;return o(),y("div",null,[i[1]||(i[1]=s("h1",{id:"useintersectionobserver",tabindex:"-1"},[t("useIntersectionObserver "),s("a",{class:"header-anchor",href:"#useintersectionobserver","aria-label":"Permalink to “useIntersectionObserver”"},"​")],-1)),n(r,{fn:"useIntersectionObserver"}),i[2]||(i[2]=s("p",null,"检测目标元素的可见性。",-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[t("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),n(d,null,{default:x(()=>[s("p",H,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useIntersectionObserver/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${h(l)}`,target:"_blank"},"playground (beta)",8,$)]),n(q)]),_:1}),i[4]||(i[4]=I("",10)),n(e,{fn:"useIntersectionObserver"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[t("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),n(a,{fn:"useIntersectionObserver"})])}}});export{ss as __pageData,is as default};

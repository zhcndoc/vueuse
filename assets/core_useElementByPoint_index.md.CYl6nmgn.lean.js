import{_ as f,a as b}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_ as E}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as v}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{d as x,D as C,A as g,i as B,o as A,F as _,j as i,n as y,a2 as u,a5 as m,H as d,a4 as c,Z as F,g as t,Y as P,y as r,w as $}from"./chunks/vue.DDc96eEg.js";import{u as M}from"./chunks/index.PaiApKaI.js";import{u as S}from"./chunks/index.Cp8rXP6P.js";import{u as w}from"./chunks/index.CHzdlLbS.js";import{u as R}from"./chunks/index.iWeaSMnW.js";import"./chunks/metadata.DSy5Z-Tw.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.BstIlBID.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/index.acMvEksu.js";import"./chunks/index.rocSL1WN.js";import"./chunks/index.BrP_zX4n.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.DWfc958q.js";const T={class:"flex items-center"},O={class:"flex items-center"},U=x({__name:"demo",setup(D){const{x:e,y:n}=R({type:"client"}),{element:l}=S({x:e,y:n}),s=C(M(l));w("scroll",s.update,{passive:!0,capture:!0});const h=g(()=>l.value?{display:"block",width:`${s.width}px`,height:`${s.height}px`,left:`${s.left}px`,top:`${s.top}px`,backgroundColor:"#3eaf7c44",transition:"all 0.05s linear"}:{display:"none"}),p=g(()=>({transform:`translate(calc(${e.value}px - 50%), calc(${n.value}px - 50%))`}));return(o,a)=>(A(),B(_,null,[i("div",{style:y(h.value),fixed:"","pointer-events-none":"","z-9999":"",border:"1 $vp-c-brand"},null,4),i("div",{style:y(p.value),fixed:"","top-0":"","left-0":"","pointer-events-none":"","w-2":"","h-2":"","rounded-full":"","bg-green-400":"",shadow:"","z-999":""},null,4),i("div",T,[a[2]||(a[2]=i("span",{class:"mr-4"},"X",-1)),u(i("input",{"onUpdate:modelValue":a[0]||(a[0]=k=>c(e)?e.value=k:null),type:"number"},null,512),[[m,d(e)]])]),i("div",O,[a[3]||(a[3]=i("span",{class:"mr-4"},"Y",-1)),u(i("input",{"onUpdate:modelValue":a[1]||(a[1]=k=>c(n)?n.value=k:null),type:"number"},null,512),[[m,d(n)]])])],64))}}),V=`<script lang="ts" setup>
import { useElementBounding, useElementByPoint, useEventListener, useMouse } from '@vueuse/core'
import { computed, reactive } from 'vue'

const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
const bounding = reactive(useElementBounding(element))

useEventListener('scroll', bounding.update, { passive: true, capture: true })

const boxStyles = computed(() => {
  if (element.value) {
    return {
      display: 'block',
      width: \`\${bounding.width}px\`,
      height: \`\${bounding.height}px\`,
      left: \`\${bounding.left}px\`,
      top: \`\${bounding.top}px\`,
      backgroundColor: '#3eaf7c44',
      transition: 'all 0.05s linear',
    } as Record<string, string | number>
  }
  return {
    display: 'none',
  }
})

const pointStyles = computed<Record<string, string | number>>(() => ({
  transform: \`translate(calc(\${x.value}px - 50%), calc(\${y.value}px - 50%))\`,
}))
<\/script>

<template>
  <div
    :style="boxStyles"
    fixed
    pointer-events-none
    z-9999
    border="1 $vp-c-brand"
  />
  <div
    :style="pointStyles"
    fixed
    top-0
    left-0
    pointer-events-none
    w-2
    h-2
    rounded-full
    bg-green-400
    shadow
    z-999
  />
  <div class="flex items-center">
    <span class="mr-4">X</span>
    <input v-model="x" type="number">
  </div>
  <div class="flex items-center">
    <span class="mr-4">Y</span>
    <input v-model="y" type="number">
  </div>
</template>
`,z={class:"demo-source-link"},N=["href"],ts=JSON.parse('{"title":"useElementByPoint","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useElementByPoint/index.md","filePath":"core/useElementByPoint/index.md","lastUpdated":1715934697000}'),L={name:"core/useElementByPoint/index.md"},ls=Object.assign(L,{setup(D){const n=F({template:{value:{welcomeSFC:V}}}).serialize();return(l,s)=>{const h=v,p=E,o=f,a=b;return A(),B("div",null,[s[1]||(s[1]=i("h1",{id:"useelementbypoint",tabindex:"-1"},[r("useElementByPoint "),i("a",{class:"header-anchor",href:"#useelementbypoint","aria-label":"Permalink to “useElementByPoint”"},"​")],-1)),t(h,{fn:"useElementByPoint"}),s[2]||(s[2]=i("p",null,"根据点获取响应式元素。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[r("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),t(p,null,{default:$(()=>[i("p",z,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useElementByPoint/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${d(n)}`,target:"_blank"},"playground (beta)",8,N)]),t(U)]),_:1}),s[4]||(s[4]=P("",7)),t(o,{fn:"useElementByPoint"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[r("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),t(a,{fn:"useElementByPoint"})])}}});export{ts as __pageData,ls as default};

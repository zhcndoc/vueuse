import{_ as D,a as E}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as A}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{u as o}from"./chunks/index.CFV6vRXP.js";import{u as v}from"./chunks/index.CoBYp8oz.js";import{u as x}from"./chunks/index.Biv1Ajcl.js";import{u as C}from"./chunks/index.hx6XwRSh.js";import{u as _}from"./chunks/index.B2pozead.js";import{d as P,D as g,A as u,i as m,o as B,F,j as i,t as y,H as l,n as c,Z as $,g as t,Y as S,y as r,w}from"./chunks/vue.DDc96eEg.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.BstIlBID.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/index.CP1ndpU1.js";import"./chunks/index.rocSL1WN.js";import"./chunks/index.BrP_zX4n.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.Cz9jLH-Y.js";import"./chunks/index.BR2cGsUJ.js";const N=P({__name:"demo",setup(f){const{x:d,y:h}=C({type:"client"}),{element:e}=v({x:d,y:h}),s=_(e),n=g(o(s)),a=g(o(e));x("scroll",[n.update,a.update],{passive:!0,capture:!0});const p=u(()=>e.value?{display:"block",width:`${a.width}px`,height:`${a.height}px`,left:`${a.left}px`,top:`${a.top}px`,backgroundColor:"#a5a5a544",transition:"all 0.05s linear"}:{display:"none"}),k=u(()=>s.value?{display:"block",width:`${n.width}px`,height:`${n.height}px`,left:`${n.left}px`,top:`${n.top}px`,backgroundColor:"#3eaf7c44",transition:"all 0.05s linear"}:{display:"none"});return(z,q)=>(B(),m(F,null,[i("p",null,"Current element tag: "+y(l(e)?l(e).tagName:"Finding..."),1),i("p",null,"Parent element tag: "+y(l(s)?l(s).tagName:"Finding..."),1),i("div",{style:c(k.value),fixed:"","pointer-events-none":"","z-9999":"",border:"1 $vp-c-brand"},null,4),i("div",{style:c(p.value),fixed:"","pointer-events-none":"","z-9999":"",border:"1 $vp-c-brand"},null,4)],64))}}),T=`<script lang="ts" setup>
import { useElementBounding, useElementByPoint, useEventListener, useMouse, useParentElement } from '@vueuse/core'
import { computed, reactive } from 'vue'

const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })

const parentElement = useParentElement(element)

const parentBounding = reactive(useElementBounding(parentElement))

const currentElementBounding = reactive(useElementBounding(element))

useEventListener('scroll', [parentBounding.update, currentElementBounding.update], { passive: true, capture: true })

const currentElementBoxStyles = computed(() => {
  if (element.value) {
    return {
      display: 'block',
      width: \`\${currentElementBounding.width}px\`,
      height: \`\${currentElementBounding.height}px\`,
      left: \`\${currentElementBounding.left}px\`,
      top: \`\${currentElementBounding.top}px\`,
      backgroundColor: '#a5a5a544',
      transition: 'all 0.05s linear',
    } as Record<string, string | number>
  }
  return {
    display: 'none',
  }
})

const parentElementBoxStyles = computed(() => {
  if (parentElement.value) {
    return {
      display: 'block',
      width: \`\${parentBounding.width}px\`,
      height: \`\${parentBounding.height}px\`,
      left: \`\${parentBounding.left}px\`,
      top: \`\${parentBounding.top}px\`,
      backgroundColor: '#3eaf7c44',
      transition: 'all 0.05s linear',
    } as Record<string, string | number>
  }
  return {
    display: 'none',
  }
})
<\/script>

<template>
  <p>Current element tag: {{ element ? element.tagName : 'Finding...' }}</p>
  <p>Parent element tag: {{ parentElement ? parentElement.tagName : 'Finding...' }}</p>

  <div
    :style="parentElementBoxStyles"
    fixed
    pointer-events-none
    z-9999
    border="1 $vp-c-brand"
  />

  <div
    :style="currentElementBoxStyles"
    fixed
    pointer-events-none
    z-9999
    border="1 $vp-c-brand"
  />
</template>
`,M={class:"demo-source-link"},R=["href"],ts=JSON.parse('{"title":"useParentElement","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useParentElement/index.md","filePath":"core/useParentElement/index.md","lastUpdated":1753423581000}'),V={name:"core/useParentElement/index.md"},ls=Object.assign(V,{setup(f){const h=$({template:{value:{welcomeSFC:T}}}).serialize();return(e,s)=>{const n=b,a=A,p=D,k=E;return B(),m("div",null,[s[1]||(s[1]=i("h1",{id:"useparentelement",tabindex:"-1"},[r("useParentElement "),i("a",{class:"header-anchor",href:"#useparentelement","aria-label":"Permalink to “useParentElement”"},"​")],-1)),t(n,{fn:"useParentElement"}),s[2]||(s[2]=i("p",null,"获取给定元素的父元素",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[r("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),t(a,null,{default:w(()=>[i("p",M,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useParentElement/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${l(h)}`,target:"_blank"},"playground (beta)",8,R)]),t(N)]),_:1}),s[4]||(s[4]=S("",10)),t(p,{fn:"useParentElement"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[r("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),t(k,{fn:"useParentElement"})])}}});export{ts as __pageData,ls as default};

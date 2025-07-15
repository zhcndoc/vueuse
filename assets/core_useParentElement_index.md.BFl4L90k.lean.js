import{_ as b,a as v}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_}from"./chunks/CodeToggle.vue_vue_type_style_index_0_lang.GVa_gSP1.js";import{_ as C}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as x}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{u as g}from"./chunks/index.PaiApKaI.js";import{u as P}from"./chunks/index.Cp8rXP6P.js";import{u as F}from"./chunks/index.CHzdlLbS.js";import{u as $}from"./chunks/index.iWeaSMnW.js";import{u as S}from"./chunks/index.B2pozead.js";import{d as w,D as u,A as y,i as A,o as D,F as T,j as s,t as c,H as h,n as m,Z as R,g as l,Y as B,y as e,w as f}from"./chunks/vue.DDc96eEg.js";import"./chunks/metadata.DSy5Z-Tw.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.Bxzihqt9.js";import"./chunks/index.BstIlBID.js";import"./chunks/index.vhWiqlWa.js";import"./chunks/index.B9cmA_N2.js";import"./chunks/filters.CNOy65Bq.js";import"./chunks/index.Cic7SbUz.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/index.acMvEksu.js";import"./chunks/index.rocSL1WN.js";import"./chunks/index.BrP_zX4n.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.DWfc958q.js";import"./chunks/index.BR2cGsUJ.js";const N=w({__name:"demo",setup(E){const{x:d,y:k}=$({type:"client"}),{element:a}=P({x:d,y:k}),i=S(a),t=u(g(i)),n=u(g(a));F("scroll",[t.update,n.update],{passive:!0,capture:!0});const r=y(()=>a.value?{display:"block",width:`${n.width}px`,height:`${n.height}px`,left:`${n.left}px`,top:`${n.top}px`,backgroundColor:"#a5a5a544",transition:"all 0.05s linear"}:{display:"none"}),p=y(()=>i.value?{display:"block",width:`${t.width}px`,height:`${t.height}px`,left:`${t.left}px`,top:`${t.top}px`,backgroundColor:"#3eaf7c44",transition:"all 0.05s linear"}:{display:"none"});return(o,L)=>(D(),A(T,null,[s("p",null,"Current element tag: "+c(h(a)?h(a).tagName:"Finding..."),1),s("p",null,"Parent element tag: "+c(h(i)?h(i).tagName:"Finding..."),1),s("div",{style:m(p.value),fixed:"","pointer-events-none":"","z-9999":"",border:"1 $vp-c-brand"},null,4),s("div",{style:m(r.value),fixed:"","pointer-events-none":"","z-9999":"",border:"1 $vp-c-brand"},null,4)],64))}}),M=`<script lang="ts" setup>
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
`,V={class:"demo-source-link"},j=["href"],os=JSON.parse('{"title":"useParentElement","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useParentElement/index.md","filePath":"core/useParentElement/index.md","lastUpdated":1739784586000}'),z={name:"core/useParentElement/index.md"},gs=Object.assign(z,{setup(E){const k=R({template:{value:{welcomeSFC:M}}}).serialize();return(a,i)=>{const t=x,n=C,r=_,p=b,o=v;return D(),A("div",null,[i[2]||(i[2]=s("h1",{id:"useparentelement",tabindex:"-1"},[e("useParentElement "),s("a",{class:"header-anchor",href:"#useparentelement","aria-label":"Permalink to “useParentElement”"},"​")],-1)),l(t,{fn:"useParentElement"}),i[3]||(i[3]=s("p",null,"获取给定元素的父元素",-1)),i[4]||(i[4]=s("h2",{id:"示例",tabindex:"-1"},[e("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),l(n,null,{default:f(()=>[s("p",V,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useParentElement/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${h(k)}`,target:"_blank"},"playground (beta)",8,j)]),l(N)]),_:1}),i[5]||(i[5]=B("",4)),l(r,null,{default:f(()=>i[1]||(i[1]=[s("div",{class:"code-block-ts"},[s("div",{class:"language-ts"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," useParentElement"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"@vueuse/core"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," shallowRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vue"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"// 别忘了将 ref 绑定到元素上")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tooltip"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," shallowRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"HTMLElement"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," undefined"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">()")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tooltipWrapper"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useParentElement"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tooltip"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"onMounted"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(()"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  console"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"log"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tooltipWrapper"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"value"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")])])])])],-1),s("div",{class:"code-block-js"},[s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," useParentElement"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"@vueuse/core"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," shallowRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vue"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"// 别忘了将 ref 绑定到元素上")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," tooltip"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," shallowRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," tooltipWrapper"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useParentElement"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tooltip"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"onMounted"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(()"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  console"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"log"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tooltipWrapper"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"value"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")])])])])],-1)])),_:1,__:[1]}),i[6]||(i[6]=B("",5)),l(p,{fn:"useParentElement"}),i[7]||(i[7]=s("h2",{id:"更新日志",tabindex:"-1"},[e("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(o,{fn:"useParentElement"})])}}});export{os as __pageData,gs as default};

import{_ as f,a as E}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as b}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as C}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{d as H}from"./chunks/metadata.CHQ7S0zC.js";import{o as F}from"./chunks/index.BbmjpWMg.js";import{u as _}from"./chunks/index.BsCVlyoA.js";import{u as m}from"./chunks/index.DEO4egZK.js";import{z as A,A as x,B as v,d as T,a1 as R,i as g,o as y,F as w,j as i,a2 as q,t as B,H as c,Z as P,g as r,Y as S,y as o,w as L}from"./chunks/vue.BjJVtbJX.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.PYylaYON.js";import"./chunks/index.D6Ixh6S-.js";import"./chunks/index.CBIpye6U.js";import"./chunks/general.CGRH32nb.js";function u(e,h={}){const{delayEnter:a=0,delayLeave:t=0,triggerOnRemoval:s=!1,window:l=H}=h,n=A(!1);let k;const p=d=>{const D=d?a:t;k&&(clearTimeout(k),k=void 0),D?k=setTimeout(()=>n.value=d,D):n.value=d};return l&&(m(e,"mouseenter",()=>p(!0),{passive:!0}),m(e,"mouseleave",()=>p(!1),{passive:!0}),s&&F(x(()=>_(e)),()=>p(!1))),n}const O={mounted(e,h){const a=h.value;if(typeof a=="function"){const t=u(e);v(t,s=>a(s))}else{const[t,s]=a,l=u(e,s);v(l,n=>t(n))}}},N=T({__name:"demo",setup(e){const h=R("el"),a=A(!1),t=u(h,{delayEnter:200,delayLeave:600});function s(l){a.value=l}return(l,n)=>(y(),g(w,null,[i("button",{ref_key:"el",ref:h},[i("span",null,B(c(t)?"Thank you!":"Hover me"),1)],512),q((y(),g("button",null,[i("span",null,B(a.value?"Thank you!":"Hover me"),1)])),[[c(O),[s,{delayEnter:200,delayLeave:600}]]])],64))}}),V=`<script setup lang="ts">
import { vElementHover } from '@vueuse/components'
import { useElementHover } from '@vueuse/core'
import { shallowRef, useTemplateRef } from 'vue'

const el = useTemplateRef<HTMLButtonElement>('el')
const isDirectiveHovered = shallowRef(false)
const isHovered = useElementHover(el, { delayEnter: 200, delayLeave: 600 })
function onHover(hovered: boolean) {
  isDirectiveHovered.value = hovered
}
<\/script>

<template>
  <button ref="el">
    <span>{{ isHovered ? 'Thank you!' : 'Hover me' }}</span>
  </button>
  <button v-element-hover="[onHover, { delayEnter: 200, delayLeave: 600 }]">
    <span>{{ isDirectiveHovered ? 'Thank you!' : 'Hover me' }}</span>
  </button>
</template>
`,$={class:"demo-source-link"},z=["href"],as=JSON.parse('{"title":"useElementHover","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useElementHover/index.md","filePath":"core/useElementHover/index.md","lastUpdated":1739784586000}'),I={name:"core/useElementHover/index.md"},ns=Object.assign(I,{setup(e){const a=P({template:{value:{welcomeSFC:V}}}).serialize();return(t,s)=>{const l=C,n=b,k=f,p=E;return y(),g("div",null,[s[1]||(s[1]=i("h1",{id:"useelementhover",tabindex:"-1"},[o("useElementHover "),i("a",{class:"header-anchor",href:"#useelementhover","aria-label":"Permalink to “useElementHover”"},"​")],-1)),r(l,{fn:"useElementHover"}),s[2]||(s[2]=i("p",null,"获取元素的响应式悬停状态。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[o("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),r(n,null,{default:L(()=>[i("p",$,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useElementHover/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${c(a)}`,target:"_blank"},"playground (beta)",8,z)]),r(N)]),_:1}),s[4]||(s[4]=S("",11)),r(k,{fn:"useElementHover"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[o("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),r(p,{fn:"useElementHover"})])}}});export{as as __pageData,ns as default};

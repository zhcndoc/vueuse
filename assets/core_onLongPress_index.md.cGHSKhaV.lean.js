import{_,a as R}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as q}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as x}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{_ as w}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.BUf_gkVe.js";import{u as T}from"./chunks/index.B4vKqgz9.js";import{u as f}from"./chunks/index.qy4VQT1o.js";import{A as O,d as M,z as c,i as v,o as F,F as H,j as i,y as A,g as d,Z as U,Y as S,w as $,H as N}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/general.tY1gtZD0.js";const V=500,z=10;function m(u,o,n){const t=O(()=>T(u));let s,l,h,p=!1;function e(){s&&(clearTimeout(s),s=void 0),l=void 0,h=void 0,p=!1}function y(a){const[D,g,C]=[h,l,p];if(e(),!n?.onMouseUp||!g||!D||n?.modifiers?.self&&a.target!==t.value)return;n?.modifiers?.prevent&&a.preventDefault(),n?.modifiers?.stop&&a.stopPropagation();const b=a.x-g.x,E=a.y-g.y,L=Math.sqrt(b*b+E*E);n.onMouseUp(a.timeStamp-D,L,C)}function k(a){n?.modifiers?.self&&a.target!==t.value||(e(),n?.modifiers?.prevent&&a.preventDefault(),n?.modifiers?.stop&&a.stopPropagation(),l={x:a.x,y:a.y},h=a.timeStamp,s=setTimeout(()=>{p=!0,o(a)},n?.delay??V))}function r(a){if(n?.modifiers?.self&&a.target!==t.value||!l||n?.distanceThreshold===!1)return;n?.modifiers?.prevent&&a.preventDefault(),n?.modifiers?.stop&&a.stopPropagation();const D=a.x-l.x,g=a.y-l.y;Math.sqrt(D*D+g*g)>=(n?.distanceThreshold??z)&&e()}const B={capture:n?.modifiers?.capture,once:n?.modifiers?.once},P=[f(t,"pointerdown",k,B),f(t,"pointermove",r,B),f(t,["pointerup","pointerleave"],y,B)];return()=>P.forEach(a=>a())}const I=M({__name:"demo",setup(u){const o=c(null),n=c(null),t=c(null),s=c(!1),l=c(!1);function h(y){s.value=!0}function p(y,k,r){r||(l.value=!0),console.log({distance:k,duration:y,isLongPress:r})}function e(){s.value=!1,l.value=!1}return m(o,h),m(n,h,{delay:1e3}),m(t,h,{distanceThreshold:24,delay:1e3,onMouseUp:p}),(y,k)=>{const r=w;return F(),v(H,null,[i("p",null,[k[0]||(k[0]=A("长按: ",-1)),d(r,{value:s.value},null,8,["value"])]),i("p",null,[k[1]||(k[1]=A("点击: ",-1)),d(r,{value:l.value},null,8,["value"])]),i("button",{ref_key:"htmlRef",ref:o,class:"ml-2 button small"}," 长按（500毫秒） ",512),i("button",{ref_key:"htmlRefOptions",ref:n,class:"ml-2 button small"}," 长按（1000毫秒） ",512),i("button",{ref_key:"htmlRefOnMouseUp",ref:t,class:"ml-2 button small"}," 长按（1000毫秒）或点击 ",512),i("button",{class:"ml-2 button small",onClick:e}," 重置 ")],64)}}}),j=`<script setup lang="ts">
import { onLongPress } from '@vueuse/core'
import { shallowRef } from 'vue'

const htmlRef = shallowRef<HTMLElement | null>(null)
const htmlRefOptions = shallowRef<HTMLElement | null>(null)
const htmlRefOnMouseUp = shallowRef<HTMLElement | null>(null)

const longPressed = shallowRef(false)
const clicked = shallowRef(false)

function onLongPressCallback(e: PointerEvent) {
  longPressed.value = true
}

function onMouseUpCallback(duration: number, distance: number, isLongPress: boolean) {
  if (!isLongPress)
    clicked.value = true

  console.log({ distance, duration, isLongPress })
}

function reset() {
  longPressed.value = false
  clicked.value = false
}

onLongPress(htmlRef, onLongPressCallback)
onLongPress(htmlRefOptions, onLongPressCallback, { delay: 1000 })
onLongPress(
  htmlRefOnMouseUp,
  onLongPressCallback,
  {
    distanceThreshold: 24,
    delay: 1000,
    onMouseUp: onMouseUpCallback,
  },
)
<\/script>

<template>
  <p>长按: <BooleanDisplay :value="longPressed" /></p>
  <p>点击: <BooleanDisplay :value="clicked" /></p>
  <button ref="htmlRef" class="ml-2 button small">
    长按（500毫秒）
  </button>
  <button ref="htmlRefOptions" class="ml-2 button small">
    长按（1000毫秒）
  </button>
  <button ref="htmlRefOnMouseUp" class="ml-2 button small">
    长按（1000毫秒）或点击
  </button>
  <button class="ml-2 button small" @click="reset">
    重置
  </button>
</template>
`,Y={class:"demo-source-link"},J=["href"],hs=JSON.parse('{"title":"onLongPress","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/onLongPress/index.md","filePath":"core/onLongPress/index.md","lastUpdated":1739784586000}'),Z={name:"core/onLongPress/index.md"},ks=Object.assign(Z,{setup(u){const n=U({template:{value:{welcomeSFC:j}}}).serialize();return(t,s)=>{const l=x,h=q,p=_,e=R;return F(),v("div",null,[s[1]||(s[1]=i("h1",{id:"onlongpress",tabindex:"-1"},[A("onLongPress "),i("a",{class:"header-anchor",href:"#onlongpress","aria-label":"Permalink to “onLongPress”"},"​")],-1)),d(l,{fn:"onLongPress"}),s[2]||(s[2]=i("p",null,"监听元素上的长按事件。",-1)),s[3]||(s[3]=i("p",null,"函数在选项中提供了修饰符",-1)),s[4]||(s[4]=i("ul",null,[i("li",null,"stop"),i("li",null,"once"),i("li",null,"prevent"),i("li",null,"capture"),i("li",null,"self")],-1)),s[5]||(s[5]=i("h2",{id:"示例",tabindex:"-1"},[A("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),d(h,null,{default:$(()=>[i("p",Y,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/onLongPress/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${N(n)}`,target:"_blank"},"playground (beta)",8,J)]),d(I)]),_:1}),s[6]||(s[6]=S("",11)),d(p,{fn:"onLongPress"}),s[7]||(s[7]=i("h2",{id:"更新日志",tabindex:"-1"},[A("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),d(e,{fn:"onLongPress"})])}}});export{hs as __pageData,ks as default};

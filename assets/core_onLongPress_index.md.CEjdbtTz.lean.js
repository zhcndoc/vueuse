import{_ as T,a as O}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as M}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as H}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{_ as U}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.Bbqezcoi.js";import{u as S}from"./chunks/index.BsCVlyoA.js";import{u as E}from"./chunks/index.DEO4egZK.js";import{A as $,d as N,z as B,i as q,o as x,F as V,j as a,y as f,g as y,Z as z,Y as I,w as j,H as Y}from"./chunks/vue.BjJVtbJX.js";import"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/general.CGRH32nb.js";const J=500,Z=10;function v(C,o,s){var F,P;const h=$(()=>S(C));let i,l,k,r=!1;function d(){i&&(clearTimeout(i),i=void 0),l=void 0,k=void 0,r=!1}function D(n){var L,_,R;const[e,t,c]=[k,l,r];if(d(),!(s!=null&&s.onMouseUp)||!t||!e||(L=s==null?void 0:s.modifiers)!=null&&L.self&&n.target!==h.value)return;(_=s==null?void 0:s.modifiers)!=null&&_.prevent&&n.preventDefault(),(R=s==null?void 0:s.modifiers)!=null&&R.stop&&n.stopPropagation();const A=n.x-t.x,u=n.y-t.y,m=Math.sqrt(A*A+u*u);s.onMouseUp(n.timeStamp-e,m,c)}function p(n){var e,t,c;(e=s==null?void 0:s.modifiers)!=null&&e.self&&n.target!==h.value||(d(),(t=s==null?void 0:s.modifiers)!=null&&t.prevent&&n.preventDefault(),(c=s==null?void 0:s.modifiers)!=null&&c.stop&&n.stopPropagation(),l={x:n.x,y:n.y},k=n.timeStamp,i=setTimeout(()=>{r=!0,o(n)},(s==null?void 0:s.delay)??J))}function g(n){var A,u,m;if((A=s==null?void 0:s.modifiers)!=null&&A.self&&n.target!==h.value||!l||(s==null?void 0:s.distanceThreshold)===!1)return;(u=s==null?void 0:s.modifiers)!=null&&u.prevent&&n.preventDefault(),(m=s==null?void 0:s.modifiers)!=null&&m.stop&&n.stopPropagation();const e=n.x-l.x,t=n.y-l.y;Math.sqrt(e*e+t*t)>=((s==null?void 0:s.distanceThreshold)??Z)&&d()}const b={capture:(F=s==null?void 0:s.modifiers)==null?void 0:F.capture,once:(P=s==null?void 0:s.modifiers)==null?void 0:P.once},w=[E(h,"pointerdown",p,b),E(h,"pointermove",g,b),E(h,["pointerup","pointerleave"],D,b)];return()=>w.forEach(n=>n())}const G=N({__name:"demo",setup(C){const o=B(null),s=B(null),h=B(null),i=B(!1),l=B(!1);function k(D){i.value=!0}function r(D,p,g){g||(l.value=!0),console.log({distance:p,duration:D,isLongPress:g})}function d(){i.value=!1,l.value=!1}return v(o,k),v(s,k,{delay:1e3}),v(h,k,{distanceThreshold:24,delay:1e3,onMouseUp:r}),(D,p)=>{const g=U;return x(),q(V,null,[a("p",null,[p[0]||(p[0]=f("长按: ")),y(g,{value:i.value},null,8,["value"])]),a("p",null,[p[1]||(p[1]=f("点击: ")),y(g,{value:l.value},null,8,["value"])]),a("button",{ref_key:"htmlRef",ref:o,class:"ml-2 button small"}," 长按（500毫秒） ",512),a("button",{ref_key:"htmlRefOptions",ref:s,class:"ml-2 button small"}," 长按（1000毫秒） ",512),a("button",{ref_key:"htmlRefOnMouseUp",ref:h,class:"ml-2 button small"}," 长按（1000毫秒）或点击 ",512),a("button",{class:"ml-2 button small",onClick:d}," 重置 ")],64)}}}),K=`<script setup lang="ts">
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
`,Q={class:"demo-source-link"},W=["href"],ds=JSON.parse('{"title":"onLongPress","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/onLongPress/index.md","filePath":"core/onLongPress/index.md","lastUpdated":1739784586000}'),X={name:"core/onLongPress/index.md"},gs=Object.assign(X,{setup(C){const s=z({template:{value:{welcomeSFC:K}}}).serialize();return(h,i)=>{const l=H,k=M,r=T,d=O;return x(),q("div",null,[i[1]||(i[1]=a("h1",{id:"onlongpress",tabindex:"-1"},[f("onLongPress "),a("a",{class:"header-anchor",href:"#onlongpress","aria-label":"Permalink to “onLongPress”"},"​")],-1)),y(l,{fn:"onLongPress"}),i[2]||(i[2]=a("p",null,"监听元素上的长按事件。",-1)),i[3]||(i[3]=a("p",null,"函数在选项中提供了修饰符",-1)),i[4]||(i[4]=a("ul",null,[a("li",null,"stop"),a("li",null,"once"),a("li",null,"prevent"),a("li",null,"capture"),a("li",null,"self")],-1)),i[5]||(i[5]=a("h2",{id:"示例",tabindex:"-1"},[f("示例 "),a("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),y(k,null,{default:j(()=>[a("p",Q,[i[0]||(i[0]=a("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/onLongPress/demo.vue",target:"_blank"},"源码",-1)),a("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${Y(s)}`,target:"_blank"},"playground (beta)",8,W)]),y(G)]),_:1}),i[6]||(i[6]=I("",11)),y(r,{fn:"onLongPress"}),i[7]||(i[7]=a("h2",{id:"更新日志",tabindex:"-1"},[f("更新日志 "),a("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),y(d,{fn:"onLongPress"})])}}});export{ds as __pageData,gs as default};

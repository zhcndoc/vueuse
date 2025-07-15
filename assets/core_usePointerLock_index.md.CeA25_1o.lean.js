import{_ as b,a as B}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_ as E}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{z as c,d as P,ak as x,B as F,i as D,o as v,j as i,H as g,Z as C,g as o,Y as L,y as d,w}from"./chunks/vue.DDc96eEg.js";import{u as S}from"./chunks/index.iWeaSMnW.js";import{u as y}from"./chunks/index.C360dvpU.js";import{g as R}from"./chunks/metadata.DSy5Z-Tw.js";import{u as m}from"./chunks/index.C8PB9l6c.js";import{u as f}from"./chunks/index.CHzdlLbS.js";import{u as M}from"./chunks/index.rocSL1WN.js";import{_ as T}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.BrP_zX4n.js";function Y(u,r={}){const{document:e=R}=r,h=M(()=>e&&"pointerLockElement"in e),s=c(),t=c();let n;if(h.value){const a={passive:!0};f(e,"pointerlockchange",()=>{const k=e.pointerLockElement??s.value;n&&k===n&&(s.value=e.pointerLockElement,s.value||(n=t.value=null))},a),f(e,"pointerlockerror",()=>{const k=e.pointerLockElement??s.value;if(n&&k===n){const A=e.pointerLockElement?"release":"acquire";throw new Error(`Failed to ${A} pointer lock.`)}},a)}async function p(a){if(!h.value)throw new Error("Pointer Lock API is not supported by your browser.");if(t.value=a instanceof Event?a.currentTarget:null,n=a instanceof Event?m(u)??t.value:m(a),!n)throw new Error("Target element undefined.");return n.requestPointerLock(),await y(s).toBe(n)}async function l(){return s.value?(e.exitPointerLock(),await y(s).toBeNull(),!0):!1}return{isSupported:h,element:s,triggerElement:t,lock:p,unlock:l}}const V={scene:""},X=P({__name:"demo",setup(u){x(l=>({"7c10802a":n.value,"7c108029":p.value}));const{lock:r,unlock:e,element:h}=Y(),{x:s,y:t}=S({type:"movement"}),n=c(-45),p=c(0);return F([s,t],([l,a])=>{h.value&&(n.value+=l/2,p.value-=a/2)}),(l,a)=>(v(),D("div",V,[i("div",{cube:"",onMousedownCapture:a[0]||(a[0]=(...k)=>g(r)&&g(r)(...k)),onMouseup:a[1]||(a[1]=(...k)=>g(e)&&g(e)(...k))},a[2]||(a[2]=[i("span",{face:"",base:"",style:{"--i":"1"},"logo-vue":""},null,-1),i("span",{face:"",base:"",style:{"--i":"-1"},"logo-vueuse":""},null,-1),i("span",{face:"",side:"",style:{"--i":"0"},"logo-vue":""},null,-1),i("span",{face:"",side:"",style:{"--i":"1"},"logo-vueuse":""},null,-1),i("span",{face:"",side:"",style:{"--i":"2"},"logo-vue":""},null,-1),i("span",{face:"",side:"",style:{"--i":"3"},"logo-vueuse":""},null,-1)]),32)]))}}),$=T(X,[["__scopeId","data-v-7fd4c2bf"]]),I=`<script setup lang="ts">
import { useMouse, usePointerLock } from '@vueuse/core'
import { shallowRef, watch } from 'vue'

const { lock, unlock, element } = usePointerLock()
const { x, y } = useMouse({ type: 'movement' })
const rotY = shallowRef(-45)
const rotX = shallowRef(0)

watch([x, y], ([x, y]) => {
  if (!element.value)
    return
  rotY.value += x / 2
  rotX.value -= y / 2
})
<\/script>

<template>
  <div scene>
    <div cube @mousedown.capture="lock" @mouseup="unlock">
      <span face base style="--i: 1" logo-vue />
      <span face base style="--i: -1" logo-vueuse />
      <span face side style="--i: 0" logo-vue />
      <span face side style="--i: 1" logo-vueuse />
      <span face side style="--i: 2" logo-vue />
      <span face side style="--i: 3" logo-vueuse />
    </div>
  </div>
</template>

<style scoped lang="postcss">
[scene] {
  @apply flex justify-center items-center box-border perspective-300;
}

[cube] {
  @apply cursor-all-scroll relative w-100px h-100px preserve-3d;
  --rotY: v-bind(rotY);
  --rotX: v-bind(rotX);
  transform: rotateY(calc(var(--rotY) * 1deg)) rotateX(calc(var(--rotX) * 1deg));
}

[face] {
  @apply absolute top-0 left-0 w-full h-full b-1 b-solid backface-hidden
    bg-emerald-4 bg-opacity-20 bg-center bg-[length:75%] bg-no-repeat;
}

[base] {
  transform: rotateX(calc(90deg * var(--i))) translateZ(50px);
}

[side] {
  transform: rotateY(calc(90deg * var(--i))) translateZ(50px);
}

[logo-vue] {
  @apply bg-[url(/vue.svg)];
}

[logo-vueuse] {
  @apply bg-[url(/favicon.svg)];
}
</style>
`,N={class:"demo-source-link"},U=["href"],ns=JSON.parse('{"title":"usePointerLock","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/usePointerLock/index.md","filePath":"core/usePointerLock/index.md","lastUpdated":1715934697000}'),q={name:"core/usePointerLock/index.md"},ts=Object.assign(q,{setup(u){const e=C({template:{value:{welcomeSFC:I}}}).serialize();return(h,s)=>{const t=_,n=E,p=b,l=B;return v(),D("div",null,[s[1]||(s[1]=i("h1",{id:"usepointerlock",tabindex:"-1"},[d("usePointerLock "),i("a",{class:"header-anchor",href:"#usepointerlock","aria-label":"Permalink to “usePointerLock”"},"​")],-1)),o(t,{fn:"usePointerLock"}),s[2]||(s[2]=i("p",null,[d("响应式的"),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API",target:"_blank",rel:"noreferrer"},"指针锁定"),d("。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[d("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),o(n,null,{default:w(()=>[i("p",N,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/usePointerLock/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${g(e)}`,target:"_blank"},"playground (beta)",8,U)]),o($)]),_:1}),s[4]||(s[4]=L("",9)),o(p,{fn:"usePointerLock"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[d("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),o(l,{fn:"usePointerLock"})])}}});export{ns as __pageData,ts as default};

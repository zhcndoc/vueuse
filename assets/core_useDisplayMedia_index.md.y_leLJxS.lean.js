import{_ as m,a as B}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as v}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{b as _}from"./chunks/metadata.BfYDMb5p.js";import{u as E}from"./chunks/index.Biv1Ajcl.js";import{u as C}from"./chunks/index.rocSL1WN.js";import{z as D,B as F,d as M,a1 as x,L as S,i as u,o as A,j as i,H as o,t as w,Z as R,g as p,Y as T,y as r,w as P}from"./chunks/vue.DDc96eEg.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.BrP_zX4n.js";function N(t={}){const n=D(t.enabled??!1),h=t.video,l=t.audio,{navigator:s=_}=t,e=C(()=>s?.mediaDevices?.getDisplayMedia),d={audio:l,video:h},a=D();async function g(){if(!(!e.value||a.value))return a.value=await s.mediaDevices.getDisplayMedia(d),a.value?.getTracks().forEach(k=>E(k,"ended",c,{passive:!0})),a.value}async function y(){a.value?.getTracks().forEach(k=>k.stop()),a.value=void 0}function c(){y(),n.value=!1}async function f(){return await g(),a.value&&(n.value=!0),a.value}return F(n,k=>{k?g():y()},{immediate:!0}),{isSupported:e,stream:a,start:f,stop:c,enabled:n}}const $={class:"flex flex-col gap-4 text-center"},O=M({__name:"demo",setup(t){const n=x("video"),{stream:h,enabled:l}=N();return S(()=>{n.value&&(n.value.srcObject=h.value)}),(s,e)=>(A(),u("div",$,[i("div",null,[i("button",{onClick:e[0]||(e[0]=d=>l.value=!o(l))},w(o(l)?"Stop":"Start")+" 共享我的屏幕 ",1)]),i("div",null,[i("video",{ref_key:"video",ref:n,muted:"",autoplay:"",controls:"",class:"h-100 w-auto"},null,512)])]))}}),V=`<script setup lang="ts">
import { useDisplayMedia } from '@vueuse/core'
import { useTemplateRef, watchEffect } from 'vue'

const video = useTemplateRef<HTMLVideoElement>('video')
const { stream, enabled } = useDisplayMedia()

watchEffect(() => {
  if (video.value)
    video.value.srcObject = stream.value!
})
<\/script>

<template>
  <div class="flex flex-col gap-4 text-center">
    <div>
      <button @click="enabled = !enabled">
        {{ enabled ? 'Stop' : 'Start' }} 共享我的屏幕
      </button>
    </div>

    <div>
      <video
        ref="video"
        muted
        autoplay
        controls
        class="h-100 w-auto"
      />
    </div>
  </div>
</template>
`,U={class:"demo-source-link"},j=["href"],X=JSON.parse('{"title":"useDisplayMedia","description":"","frontmatter":{"category":"Sensors","related":"useUserMedia"},"headers":[],"relativePath":"core/useDisplayMedia/index.md","filePath":"core/useDisplayMedia/index.md","lastUpdated":1715934697000}'),I={name:"core/useDisplayMedia/index.md"},ss=Object.assign(I,{setup(t){const h=R({template:{value:{welcomeSFC:V}}}).serialize();return(l,s)=>{const e=b,d=v,a=m,g=B;return A(),u("div",null,[s[1]||(s[1]=i("h1",{id:"usedisplaymedia",tabindex:"-1"},[r("useDisplayMedia "),i("a",{class:"header-anchor",href:"#usedisplaymedia","aria-label":"Permalink to “useDisplayMedia”"},"​")],-1)),p(e,{fn:"useDisplayMedia"}),s[2]||(s[2]=i("p",null,[r("响应式 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia",target:"_blank",rel:"noreferrer"},[i("code",null,"mediaDevices.getDisplayMedia")]),r(" 流。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[r("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),p(d,null,{default:P(()=>[i("p",U,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useDisplayMedia/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${o(h)}`,target:"_blank"},"playground (beta)",8,j)]),p(O)]),_:1}),s[4]||(s[4]=T("",8)),p(a,{fn:"useDisplayMedia"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[r("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),p(g,{fn:"useDisplayMedia"})])}}});export{X as __pageData,ss as default};

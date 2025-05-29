import{_ as B,a as v}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as b}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{b as E}from"./chunks/metadata.CHQ7S0zC.js";import{u as C}from"./chunks/index.DEO4egZK.js";import{u as F}from"./chunks/index.D6Ixh6S-.js";import{z as u,B as M,d as x,a1 as S,L as w,i as A,o as f,j as i,H as y,t as R,Z as T,g as p,Y as P,y as r,w as N}from"./chunks/vue.BjJVtbJX.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.BsCVlyoA.js";import"./chunks/general.CGRH32nb.js";import"./chunks/index.CBIpye6U.js";function $(l={}){const e=u(l.enabled??!1),k=l.video,h=l.audio,{navigator:s=E}=l,t=F(()=>{var n;return(n=s==null?void 0:s.mediaDevices)==null?void 0:n.getDisplayMedia}),d={audio:h,video:k},a=u();async function g(){var n;if(!(!t.value||a.value))return a.value=await s.mediaDevices.getDisplayMedia(d),(n=a.value)==null||n.getTracks().forEach(o=>C(o,"ended",D,{passive:!0})),a.value}async function c(){var n;(n=a.value)==null||n.getTracks().forEach(o=>o.stop()),a.value=void 0}function D(){c(),e.value=!1}async function m(){return await g(),a.value&&(e.value=!0),a.value}return M(e,n=>{n?g():c()},{immediate:!0}),{isSupported:t,stream:a,start:m,stop:D,enabled:e}}const O={class:"flex flex-col gap-4 text-center"},V=x({__name:"demo",setup(l){const e=S("video"),{stream:k,enabled:h}=$();return w(()=>{e.value&&(e.value.srcObject=k.value)}),(s,t)=>(f(),A("div",O,[i("div",null,[i("button",{onClick:t[0]||(t[0]=d=>h.value=!y(h))},R(y(h)?"Stop":"Start")+" 共享我的屏幕 ",1)]),i("div",null,[i("video",{ref_key:"video",ref:e,muted:"",autoplay:"",controls:"",class:"h-100 w-auto"},null,512)])]))}}),U=`<script setup lang="ts">
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
`,j={class:"demo-source-link"},I=["href"],ss=JSON.parse('{"title":"useDisplayMedia","description":"","frontmatter":{"category":"Sensors","related":"useUserMedia"},"headers":[],"relativePath":"core/useDisplayMedia/index.md","filePath":"core/useDisplayMedia/index.md","lastUpdated":1715934697000}'),z={name:"core/useDisplayMedia/index.md"},is=Object.assign(z,{setup(l){const k=T({template:{value:{welcomeSFC:U}}}).serialize();return(h,s)=>{const t=_,d=b,a=B,g=v;return f(),A("div",null,[s[1]||(s[1]=i("h1",{id:"usedisplaymedia",tabindex:"-1"},[r("useDisplayMedia "),i("a",{class:"header-anchor",href:"#usedisplaymedia","aria-label":"Permalink to “useDisplayMedia”"},"​")],-1)),p(t,{fn:"useDisplayMedia"}),s[2]||(s[2]=i("p",null,[r("响应式 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia",target:"_blank",rel:"noreferrer"},[i("code",null,"mediaDevices.getDisplayMedia")]),r(" 流。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[r("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),p(d,null,{default:N(()=>[i("p",j,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useDisplayMedia/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${y(k)}`,target:"_blank"},"playground (beta)",8,I)]),p(V)]),_:1}),s[4]||(s[4]=P("",8)),p(a,{fn:"useDisplayMedia"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[r("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),p(g,{fn:"useDisplayMedia"})])}}});export{ss as __pageData,is as default};

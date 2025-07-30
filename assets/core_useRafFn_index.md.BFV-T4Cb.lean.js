import{_ as u,a as f}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{u as B,_ as F}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{d as b,z as o,i as D,o as A,F as _,j as s,t as d,H as e,Z as v,g as t,Y as C,y as l,w as R}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";const E={"font-mono":""},x={"font-mono":""},g=60,P=b({__name:"demo",setup(y){const p=o(0),h=o(0),{pause:r,resume:i}=B(({delta:k})=>{h.value=k,p.value+=1},{fpsLimit:g});return(k,a)=>(A(),D(_,null,[s("div",E," 帧数："+d(p.value),1),s("div",x," 间隔时间："+d(h.value.toFixed(0))+"毫秒 ",1),s("div",{"font-mono":""}," FPS 限制："+d(g)),s("button",{onClick:a[0]||(a[0]=(...n)=>e(r)&&e(r)(...n))}," 暂停 "),s("button",{onClick:a[1]||(a[1]=(...n)=>e(i)&&e(i)(...n))}," 恢复 ")],64))}}),S=`<script setup lang="ts">
import { useRafFn } from '@vueuse/core'
import { shallowRef } from 'vue'

const fpsLimit = 60
const count = shallowRef(0)
const deltaMs = shallowRef(0)
const { pause, resume } = useRafFn(({ delta }) => {
  deltaMs.value = delta
  count.value += 1
}, { fpsLimit })
<\/script>

<template>
  <div font-mono>
    帧数：{{ count }}
  </div>
  <div font-mono>
    间隔时间：{{ deltaMs.toFixed(0) }}毫秒
  </div>
  <div font-mono>
    FPS 限制：{{ fpsLimit }}
  </div>
  <button @click="pause">
    暂停
  </button>
  <button @click="resume">
    恢复
  </button>
</template>
`,w={class:"demo-source-link"},T=["href"],j=JSON.parse('{"title":"useRafFn","description":"","frontmatter":{"category":"Animation"},"headers":[],"relativePath":"core/useRafFn/index.md","filePath":"core/useRafFn/index.md","lastUpdated":1739784586000}'),$={name:"core/useRafFn/index.md"},q=Object.assign($,{setup(y){const h=v({template:{value:{welcomeSFC:S}}}).serialize();return(r,i)=>{const k=F,a=m,n=u,c=f;return A(),D("div",null,[i[1]||(i[1]=s("h1",{id:"useraffn",tabindex:"-1"},[l("useRafFn "),s("a",{class:"header-anchor",href:"#useraffn","aria-label":"Permalink to “useRafFn”"},"​")],-1)),t(k,{fn:"useRafFn"}),i[2]||(i[2]=s("p",null,[l("在每次 "),s("code",null,"requestAnimationFrame"),l(" 上调用函数。具有暂停和恢复控制。")],-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[l("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),t(a,null,{default:R(()=>[s("p",w,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useRafFn/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${e(h)}`,target:"_blank"},"playground (beta)",8,T)]),t(P)]),_:1}),i[4]||(i[4]=C("",7)),t(n,{fn:"useRafFn"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[l("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),t(c,{fn:"useRafFn"})])}}});export{j as __pageData,q as default};

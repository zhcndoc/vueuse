import{_ as C,a as b}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as E}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{z as B,r as f,d as F,B as x,i as h,o as p,F as w,j as i,y as k,t as D,H as t,k as v,a2 as S,a5 as P,V as R,Z as T,g as y,Y as V,w as U}from"./chunks/vue.K-Nh9t7y.js";import{t as $}from"./chunks/index.BGs_z4hs.js";import{t as I,d as N}from"./chunks/metadata.ByJC-ruD.js";import{u as A}from"./chunks/index.qy4VQT1o.js";import{u as O}from"./chunks/index.BImTs33O.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.B2rzktNR.js";function W(c){const{name:r,window:e=N}=c,d=O(()=>e&&"BroadcastChannel"in e),s=B(!1),n=f(),o=f(),a=B(null),l=g=>{n.value&&n.value.postMessage(g)},m=()=>{n.value&&n.value.close(),s.value=!0};return d.value&&$(()=>{a.value=null,n.value=new BroadcastChannel(r);const g={passive:!0};A(n,"message",u=>{o.value=u.data},g),A(n,"messageerror",u=>{a.value=u},g),A(n,"close",()=>{s.value=!0},g)}),I(()=>{m()}),{isSupported:d,channel:n,data:o,post:l,close:m,error:a,isClosed:s}}const z={key:0},j={key:0},M={key:1},H={key:1},J=F({__name:"demo",setup(c){const{isSupported:r,data:e,post:d,error:s}=W({name:"vueuse-demo-channel"}),n=B("");return x(e,()=>{e.value&&alert(e.value)}),(o,a)=>(p(),h(w,null,[i("div",null,[i("p",null,[a[2]||(a[2]=k(" 支持: ",-1)),i("b",null,D(t(r)),1)]),a[3]||(a[3]=i("p",null,"请在至少两个Tab中打开此页面",-1))]),t(r)?(p(),h("div",z,[i("form",{onSubmit:a[1]||(a[1]=R(l=>t(d)(n.value),["prevent"]))},[S(i("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l),type:"text"},null,512),[[P,n.value]]),a[4]||(a[4]=i("button",{type:"submit"}," 发送消息 ",-1))],32),t(e)?(p(),h("p",j," 收到: "+D(t(e)),1)):v("",!0),t(s)?(p(),h("p",M," 错误: "+D(t(s)),1)):v("",!0)])):(p(),h("div",H," 你的浏览器不支持广播频道 Web API。 "))],64))}}),L=`<script setup lang="ts">
import { useBroadcastChannel } from '@vueuse/core'
import { shallowRef, watch } from 'vue'

const {
  isSupported,
  data,
  post,
  error,
} = useBroadcastChannel({ name: 'vueuse-demo-channel' })

const message = shallowRef('')

watch(data, () => {
  if (data.value)
    alert(data.value)
})
<\/script>

<template>
  <div>
    <p>
      支持:
      <b>{{ isSupported }}</b>
    </p>

    <p>请在至少两个Tab中打开此页面</p>
  </div>

  <div v-if="isSupported">
    <form @submit.prevent="post(message)">
      <input v-model="message" type="text">
      <button type="submit">
        发送消息
      </button>
    </form>

    <p v-if="data">
      收到: {{ data }}
    </p>

    <p v-if="error">
      错误: {{ error }}
    </p>
  </div>
  <div v-else>
    你的浏览器不支持广播频道 Web API。
  </div>
</template>
`,Y={class:"demo-source-link"},Z=["href"],ps=JSON.parse('{"title":"useBroadcastChannel","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useBroadcastChannel/index.md","filePath":"core/useBroadcastChannel/index.md","lastUpdated":1739784586000}'),q={name:"core/useBroadcastChannel/index.md"},ks=Object.assign(q,{setup(c){const e=T({template:{value:{welcomeSFC:L}}}).serialize();return(d,s)=>{const n=E,o=_,a=C,l=b;return p(),h("div",null,[s[1]||(s[1]=i("h1",{id:"usebroadcastchannel",tabindex:"-1"},[k("useBroadcastChannel "),i("a",{class:"header-anchor",href:"#usebroadcastchannel","aria-label":"Permalink to “useBroadcastChannel”"},"​")],-1)),y(n,{fn:"useBroadcastChannel"}),s[2]||(s[2]=i("p",null,[k("响应式 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel",target:"_blank",rel:"noreferrer"},"BroadcastChannel API"),k("。")],-1)),s[3]||(s[3]=i("p",null,"在组件卸载时自动关闭广播频道。",-1)),s[4]||(s[4]=i("h2",{id:"示例",tabindex:"-1"},[k("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),y(o,null,{default:U(()=>[i("p",Y,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useBroadcastChannel/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${t(e)}`,target:"_blank"},"playground (beta)",8,Z)]),y(J)]),_:1}),s[5]||(s[5]=V("",9)),y(a,{fn:"useBroadcastChannel"}),s[6]||(s[6]=i("h2",{id:"更新日志",tabindex:"-1"},[k("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),y(l,{fn:"useBroadcastChannel"})])}}});export{ps as __pageData,ks as default};

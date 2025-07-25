import{_,a as F}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as E}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as I}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{_ as x}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.y710iK4K.js";import{_ as w}from"./chunks/Note.BA4Afsl9.js";import{d as S,h as c}from"./chunks/metadata.BfYDMb5p.js";import{u}from"./chunks/index.Biv1Ajcl.js";import{t as P,c as T}from"./chunks/filters.C8rvCcdO.js";import{z as m,d as V,A as $,i as B,o as f,F as N,g as t,j as i,w as v,y as e,H as b,t as R,Z as U,Y as j}from"./chunks/vue.DDc96eEg.js";import{u as O}from"./chunks/index.C1q-EENw.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.BtqfaRQ7.js";const z=["mousemove","mousedown","resize","keydown","touchstart","wheel"],q=6e4;function W(d=q,p={}){const{initialState:h=!1,listenForVisibilityChange:r=!0,events:s=z,window:n=S,eventFilter:a=P(50)}=p,l=m(h),k=m(c());let o;const g=()=>{l.value=!1,clearTimeout(o),o=setTimeout(()=>l.value=!0,d)},y=T(a,()=>{k.value=c(),g()});if(n){const A=n.document,D={passive:!0};for(const C of s)u(n,C,y,D);r&&u(A,"visibilitychange",()=>{A.hidden||y()},D),h||g()}return{idle:l,lastActive:k,reset:g}}const M={class:"mb-2"},H={class:"text-primary"},J=V({__name:"demo",setup(d){const{idle:p,lastActive:h}=W(5e3),r=O({interval:1e3}),s=$(()=>{const n=Math.floor((r.value-h.value)/1e3);return n>0?n:0});return(n,a)=>{const l=w,k=x;return f(),B(N,null,[t(l,{class:"mb-2"},{default:v(()=>a[0]||(a[0]=[e(" 为了演示目的，在此演示中将空闲超时设置为 "),i("b",null,"5秒",-1),e("（默认为1分钟）。 ")])),_:1,__:[0]}),i("div",M,[a[1]||(a[1]=e(" 空闲状态: ")),t(k,{value:b(p)},null,8,["value"])]),i("div",null,[a[2]||(a[2]=e("非活动时间: ")),i("b",H,R(s.value)+"秒",1)])],64)}}}),L=`<script setup lang="ts">
import { useIdle, useTimestamp } from '@vueuse/core'
import { computed } from 'vue'

const { idle, lastActive } = useIdle(5000)

const now = useTimestamp({ interval: 1000 })

const idledFor = computed(() => {
  const active = Math.floor((now.value - lastActive.value) / 1000)

  return active > 0 ? active : 0
})
<\/script>

<template>
  <note class="mb-2">
    为了演示目的，在此演示中将空闲超时设置为 <b>5秒</b>（默认为1分钟）。
  </note>
  <div class="mb-2">
    空闲状态: <BooleanDisplay :value="idle" />
  </div>
  <div>非活动时间: <b class="text-primary">{{ idledFor }}秒</b></div>
</template>
`,Y={class:"demo-source-link"},Z=["href"],gs=JSON.parse('{"title":"useIdle","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useIdle/index.md","filePath":"core/useIdle/index.md","lastUpdated":1727403458000}'),G={name:"core/useIdle/index.md"},os=Object.assign(G,{setup(d){const h=U({template:{value:{welcomeSFC:L}}}).serialize();return(r,s)=>{const n=I,a=E,l=_,k=F;return f(),B("div",null,[s[1]||(s[1]=i("h1",{id:"useidle",tabindex:"-1"},[e("useIdle "),i("a",{class:"header-anchor",href:"#useidle","aria-label":"Permalink to “useIdle”"},"​")],-1)),t(n,{fn:"useIdle"}),s[2]||(s[2]=i("p",null,"跟踪用户是否处于不活动状态。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[e("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),t(a,null,{default:v(()=>[i("p",Y,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useIdle/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${b(h)}`,target:"_blank"},"playground (beta)",8,Z)]),t(J)]),_:1}),s[4]||(s[4]=j("",11)),t(l,{fn:"useIdle"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[e("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),t(k,{fn:"useIdle"})])}}});export{gs as __pageData,os as default};

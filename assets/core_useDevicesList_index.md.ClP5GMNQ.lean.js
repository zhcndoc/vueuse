import{_ as A,a as v}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as f}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{u as B}from"./chunks/index.BKPmB3I6.js";import{d as b,i as e,o as t,j as s,t as h,H as l,F as g,O as c,Z as _,g as p,Y as E,y as k,w as C}from"./chunks/vue.DDc96eEg.js";import{_ as F}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/metadata.DSy5Z-Tw.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.CHzdlLbS.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.BWZOW1el.js";import"./chunks/index.rocSL1WN.js";import"./chunks/index.BrP_zX4n.js";const x={class:"grid grid-cols-3 text-center",gap:"2",p:"y-4"},I={class:"title"},L={class:"title"},P={class:"title"},S=b({__name:"demo",setup(y){const{videoInputs:d,audioInputs:r,audioOutputs:o}=B({requestPermissions:!0});return(i,n)=>(t(),e("div",x,[n[0]||(n[0]=s("i",{"i-carbon-camera":""},null,-1)),n[1]||(n[1]=s("i",{"i-carbon-microphone":""},null,-1)),n[2]||(n[2]=s("i",{"i-carbon-headphones":""},null,-1)),s("div",I," 相机 ("+h(l(d).length)+") ",1),s("div",L," 麦克风 ("+h(l(r).length)+") ",1),s("div",P," 扬声器 ("+h(l(o).length)+") ",1),s("div",null,[(t(!0),e(g,null,c(l(d),a=>(t(),e("div",{key:a.deviceId,text:"sm"},h(a.label),1))),128))]),s("div",null,[(t(!0),e(g,null,c(l(r),a=>(t(),e("div",{key:a.deviceId,text:"sm"},h(a.label),1))),128))]),s("div",null,[(t(!0),e(g,null,c(l(o),a=>(t(),e("div",{key:a.deviceId,text:"sm"},h(a.label),1))),128))])]))}}),O=F(S,[["__scopeId","data-v-8a4d4f21"]]),R=`<script setup lang="ts">
import { useDevicesList } from '@vueuse/core'

const {
  videoInputs: cameras,
  audioInputs: microphones,
  audioOutputs: speakers,
} = useDevicesList({
  requestPermissions: true,
})
<\/script>

<template>
  <div class="grid grid-cols-3 text-center" gap="2" p="y-4">
    <i i-carbon-camera />
    <i i-carbon-microphone />
    <i i-carbon-headphones />

    <div class="title">
      相机 ({{ cameras.length }})
    </div>
    <div class="title">
      麦克风 ({{ microphones.length }})
    </div>
    <div class="title">
      扬声器 ({{ speakers.length }})
    </div>

    <div>
      <div v-for="i of cameras" :key="i.deviceId" text="sm">
        {{ i.label }}
      </div>
    </div>

    <div>
      <div v-for="i of microphones" :key="i.deviceId" text="sm">
        {{ i.label }}
      </div>
    </div>

    <div>
      <div v-for="i of speakers" :key="i.deviceId" text="sm">
        {{ i.label }}
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
i {
  @apply text-2xl opacity-50 m-auto;
}

.title {
  @apply opacity-50 uppercase tracking-wide text-sm;
}
</style>
`,U={class:"demo-source-link"},$=["href"],Q=JSON.parse('{"title":"useDevicesList","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useDevicesList/index.md","filePath":"core/useDevicesList/index.md","lastUpdated":1734876694000}'),w={name:"core/useDevicesList/index.md"},X=Object.assign(w,{setup(y){const r=_({template:{value:{welcomeSFC:R}}}).serialize();return(o,i)=>{const n=f,a=m,D=A,u=v;return t(),e("div",null,[i[1]||(i[1]=s("h1",{id:"usedeviceslist",tabindex:"-1"},[k("useDevicesList "),s("a",{class:"header-anchor",href:"#usedeviceslist","aria-label":"Permalink to “useDevicesList”"},"​")],-1)),p(n,{fn:"useDevicesList"}),i[2]||(i[2]=s("p",null,[k("响应式 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices",target:"_blank",rel:"noreferrer"},"enumerateDevices"),k(" 列出可用的输入/输出设备。")],-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[k("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),p(a,null,{default:C(()=>[s("p",U,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useDevicesList/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${l(r)}`,target:"_blank"},"playground (beta)",8,$)]),p(O)]),_:1}),i[4]||(i[4]=E("",12)),p(D,{fn:"useDevicesList"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[k("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),p(u,{fn:"useDevicesList"})])}}});export{Q as __pageData,X as default};

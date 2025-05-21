import{_ as f,a as B}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as C}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as m}from"./chunks/CourseLink.vue_vue_type_script_setup_true_lang.C6fezzip.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{g as v}from"./chunks/metadata.HXIr2NKd.js";import{u as _}from"./chunks/index.DK97_WvT.js";import{z as K,d as M,i as A,o as u,g as t,H as e,w as l,y as a,Z as E,j as n,Y as F}from"./chunks/vue.DQfvmmyQ.js";import{_ as k}from"./chunks/Key.vue_vue_type_script_setup_true_lang.CFHGzSwU.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/general.CGRH32nb.js";const L=["mousedown","mouseup","keydown","keyup"];function p(c,y={}){const{events:r=L,document:d=v,initial:s=null}=y,h=K(s);return d&&r.forEach(o=>{_(d,o,g=>{typeof g.getModifierState=="function"&&(h.value=g.getModifierState(c))},{passive:!0})}),h}const S={class:"grid grid-cols-1 md:grid-cols-3 gap-2"},x=M({__name:"demo",setup(c){const y=p("CapsLock"),r=p("NumLock"),d=p("ScrollLock"),s=p("Shift"),h=p("Control"),o=p("Alt");return(g,i)=>(u(),A("div",S,[t(k,{value:e(y)||!1},{default:l(()=>i[0]||(i[0]=[a(" 大写锁定 ")])),_:1},8,["value"]),t(k,{value:e(r)||!1},{default:l(()=>i[1]||(i[1]=[a(" 数字锁定 ")])),_:1},8,["value"]),t(k,{value:e(d)||!1},{default:l(()=>i[2]||(i[2]=[a(" 滚动锁定 ")])),_:1},8,["value"]),t(k,{value:e(s)||!1},{default:l(()=>i[3]||(i[3]=[a(" Shift ")])),_:1},8,["value"]),t(k,{value:e(h)||!1},{default:l(()=>i[4]||(i[4]=[a(" Ctrl ")])),_:1},8,["value"]),t(k,{value:e(o)||!1},{default:l(()=>i[5]||(i[5]=[a(" Alt ")])),_:1},8,["value"])]))}}),q=`<script setup lang="ts">
import { useKeyModifier } from '@vueuse/core'
import Key from '../useMagicKeys/Key.vue'

const capsLock = useKeyModifier('CapsLock')
const numLock = useKeyModifier('NumLock')
const scrollLock = useKeyModifier('ScrollLock')
const shift = useKeyModifier('Shift')
const control = useKeyModifier('Control')
const alt = useKeyModifier('Alt')
<\/script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
    <Key :value="capsLock || false">
      大写锁定
    </Key>
    <Key :value="numLock || false">
      数字锁定
    </Key>
    <Key :value="scrollLock || false">
      滚动锁定
    </Key>
    <Key :value="shift || false">
      Shift
    </Key>
    <Key :value="control || false">
      Ctrl
    </Key>
    <Key :value="alt || false">
      Alt
    </Key>
  </div>
</template>
`,w={class:"demo-source-link"},P=["href"],H=JSON.parse('{"title":"useKeyModifier","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useKeyModifier/index.md","filePath":"core/useKeyModifier/index.md","lastUpdated":1715934697000}'),I={name:"core/useKeyModifier/index.md"},J=Object.assign(I,{setup(c){const r=E({template:{value:{welcomeSFC:q}}}).serialize();return(d,s)=>{const h=b,o=m,g=C,i=f,D=B;return u(),A("div",null,[s[2]||(s[2]=n("h1",{id:"usekeymodifier",tabindex:"-1"},[a("useKeyModifier "),n("a",{class:"header-anchor",href:"#usekeymodifier","aria-label":"Permalink to “useKeyModifier”"},"​")],-1)),t(h,{fn:"useKeyModifier"}),s[3]||(s[3]=n("p",null,[a("响应式地跟踪"),n("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState",target:"_blank",rel:"noreferrer"},"修饰键状态"),a("。跟踪任何"),n("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState#browser_compatibility",target:"_blank",rel:"noreferrer"},"支持的修饰键"),a("的状态 - 请参阅浏览器兼容性说明。")],-1)),t(o,{href:"https://vueschool.io/lessons/alt-drag-to-clone-tasks?friend=vueuse"},{default:l(()=>s[0]||(s[0]=[a("通过 Vue School 的这个免费视频课程来学习 useKeyModifier！")])),_:1}),s[4]||(s[4]=n("h2",{id:"示例",tabindex:"-1"},[a("示例 "),n("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),t(g,null,{default:l(()=>[n("p",w,[s[1]||(s[1]=n("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useKeyModifier/demo.vue",target:"_blank"},"源码",-1)),n("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${e(r)}`,target:"_blank"},"playground (beta)",8,P)]),t(x)]),_:1}),s[5]||(s[5]=F("",13)),t(i,{fn:"useKeyModifier"}),s[6]||(s[6]=n("h2",{id:"更新日志",tabindex:"-1"},[a("更新日志 "),n("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),t(D,{fn:"useKeyModifier"})])}}});export{H as __pageData,J as default};

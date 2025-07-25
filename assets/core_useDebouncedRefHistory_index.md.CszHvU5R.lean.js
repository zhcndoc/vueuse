import{_ as R,a as _}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as C}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as H}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{_ as F}from"./chunks/Note.BA4Afsl9.js";import{d as E,z as x,i as p,o,F as D,j as s,a2 as w,g as h,t as m,H as t,a5 as S,w as b,y as k,O as $,Z as P,Y as T}from"./chunks/vue.DDc96eEg.js";import{u as Y}from"./chunks/index.CYQMKvdA.js";import{d as U}from"./chunks/filters.C8rvCcdO.js";import{u as V}from"./chunks/index.DUCiHM5u.js";import{f as z}from"./chunks/index.DxEqsuNn.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.DFuYxhMM.js";import"./chunks/index.P3l9c_X8.js";import"./chunks/index.YwqJXHuf.js";import"./chunks/index.BtqfaRQ7.js";function M(d,l={}){const e=l.debounce?U(l.debounce):void 0;return{...Y(d,{...l,eventFilter:e})}}const N=["disabled"],O=["disabled"],I={class:"code-block mt-4"},j={class:"opacity-50 mr-2 font-mono"},q={class:"font-mono"},G=E({__name:"demo",setup(d){function l(f){return z(new Date(f),"YYYY-MM-DD HH:mm:ss")}const e=x(1e3),{count:r,inc:a,dec:u}=V(),{history:y,undo:g,redo:c,canUndo:A,canRedo:v}=M(r,{capacity:10,debounce:e});return(f,i)=>{const B=F;return o(),p(D,null,[s("div",null,"Count: "+m(t(r)),1),s("button",{onClick:i[0]||(i[0]=n=>t(a)())}," 增加 "),s("button",{onClick:i[1]||(i[1]=n=>t(u)())}," 减少 "),i[6]||(i[6]=s("span",{class:"ml-2"},"/",-1)),s("button",{disabled:!t(A),onClick:i[2]||(i[2]=n=>t(g)())}," 撤消 ",8,N),s("button",{disabled:!t(v),onClick:i[3]||(i[3]=n=>t(c)())}," 重做 ",8,O),i[7]||(i[7]=s("br",null,null,-1)),i[8]||(i[8]=s("span",null,"延迟（毫秒）:",-1)),w(s("input",{"onUpdate:modelValue":i[4]||(i[4]=n=>e.value=n),type:"number"},null,512),[[S,e.value]]),i[9]||(i[9]=s("br",null,null,-1)),i[10]||(i[10]=s("br",null,null,-1)),h(B,null,{default:b(()=>i[5]||(i[5]=[k("历史记录（仅限演示，最多保存10条记录）")])),_:1,__:[5]}),s("div",I,[(o(!0),p(D,null,$(t(y),n=>(o(),p("div",{key:n.timestamp},[s("span",j,m(l(n.timestamp)),1),s("span",q,"{ value: "+m(n.snapshot)+" }",1)]))),128))])],64)}}}),J=`<script setup lang="ts">
import { formatDate, useCounter, useDebouncedRefHistory } from '@vueuse/core'
import { shallowRef } from 'vue'

function format(ts: number) {
  return formatDate(new Date(ts), 'YYYY-MM-DD HH:mm:ss')
}
const delay = shallowRef(1000)

const { count, inc, dec } = useCounter()
const { history, undo, redo, canUndo, canRedo } = useDebouncedRefHistory(
  count,
  { capacity: 10, debounce: delay },
)
<\/script>

<template>
  <div>Count: {{ count }}</div>
  <button @click="inc()">
    增加
  </button>
  <button @click="dec()">
    减少
  </button>
  <span class="ml-2">/</span>
  <button :disabled="!canUndo" @click="undo()">
    撤消
  </button>
  <button :disabled="!canRedo" @click="redo()">
    重做
  </button>
  <br>
  <span>延迟（毫秒）:</span>
  <input v-model="delay" type="number">
  <br>
  <br>
  <note>历史记录（仅限演示，最多保存10条记录）</note>
  <div class="code-block mt-4">
    <div v-for="i in history" :key="i.timestamp">
      <span class="opacity-50 mr-2 font-mono">{{ format(i.timestamp) }}</span>
      <span class="font-mono">{ value: {{ i.snapshot }} }</span>
    </div>
  </div>
</template>
`,L={class:"demo-source-link"},Z=["href"],us=JSON.parse('{"title":"useDebouncedRefHistory","description":"","frontmatter":{"category":"State","related":["useRefHistory","useThrottledRefHistory"]},"headers":[],"relativePath":"core/useDebouncedRefHistory/index.md","filePath":"core/useDebouncedRefHistory/index.md","lastUpdated":1739784586000}'),K={name:"core/useDebouncedRefHistory/index.md"},ys=Object.assign(K,{setup(d){const e=P({template:{value:{welcomeSFC:J}}}).serialize();return(r,a)=>{const u=H,y=C,g=R,c=_;return o(),p("div",null,[a[1]||(a[1]=s("h1",{id:"usedebouncedrefhistory",tabindex:"-1"},[k("useDebouncedRefHistory "),s("a",{class:"header-anchor",href:"#usedebouncedrefhistory","aria-label":"Permalink to “useDebouncedRefHistory”"},"​")],-1)),h(u,{fn:"useDebouncedRefHistory"}),a[2]||(a[2]=s("p",null,[k("具有防抖过滤器的 "),s("a",{href:"/core/useRefHistory/"},[s("code",null,"useRefHistory")]),k(" 的简写。")],-1)),a[3]||(a[3]=s("h2",{id:"示例",tabindex:"-1"},[k("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),h(y,null,{default:b(()=>[s("p",L,[a[0]||(a[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useDebouncedRefHistory/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${t(e)}`,target:"_blank"},"playground (beta)",8,Z)]),h(G)]),_:1}),a[4]||(a[4]=T("",8)),h(g,{fn:"useDebouncedRefHistory"}),a[5]||(a[5]=s("h2",{id:"更新日志",tabindex:"-1"},[k("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),h(c,{fn:"useDebouncedRefHistory"})])}}});export{us as __pageData,ys as default};

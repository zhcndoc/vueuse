import{_ as v,a as C}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as E}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{_ as x}from"./chunks/Note.BA4Afsl9.js";import{u as R}from"./chunks/index.C8PB9l6c.js";import{u as m}from"./chunks/index.Biv1Ajcl.js";import{z as T,A as b,B as w,d as P,a1 as D,i as p,o as r,j as s,g as d,w as F,H as e,F as u,y as l,q as A,Z as V,Y as S}from"./chunks/vue.DDc96eEg.js";import{_ as q}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/general.tY1gtZD0.js";function f(y,o={}){const{initialValue:h=!1,focusVisible:g=!1,preventScroll:i=!1}=o,n=T(!1),t=b(()=>R(y)),c={passive:!0};m(t,"focus",k=>{(!g||k.target.matches?.(":focus-visible"))&&(n.value=!0)},c),m(t,"blur",()=>n.value=!1,c);const a=b({get:()=>n.value,set(k){!k&&n.value?t.value?.blur():k&&!n.value&&t.value?.focus({preventScroll:i})}});return w(t,()=>{a.value=h},{immediate:!0,flush:"post"}),{focused:a}}const $=P({__name:"demo",setup(y){const o=D("text"),h=D("input"),g=D("button"),{focused:i}=f(o),{focused:n}=f(h,{initialValue:!0}),{focused:t}=f(g);return(c,a)=>{const k=x;return r(),p("div",null,[s("p",{ref_key:"text",ref:o,class:"demo-el px-2 rounded",tabindex:"0"}," 可获得焦点的段落 ",512),s("input",{ref_key:"input",ref:h,class:"demo-el",type:"text",placeholder:"可获得焦点的输入框"},null,512),s("button",{ref_key:"button",ref:g,class:"demo-el button"}," 可获得焦点的按钮 ",512),a[3]||(a[3]=s("hr",null,null,-1)),d(k,{class:"mb-2"},{default:F(()=>[e(i)?(r(),p(u,{key:0},[l(" 段落获得焦点 ")],64)):e(n)?(r(),p(u,{key:1},[l(" 输入框获得焦点 ")],64)):e(t)?(r(),p(u,{key:2},[l(" 按钮获得焦点 ")],64)):(r(),p(u,{key:3},[l("   ")],64))]),_:1}),s("button",{class:A(["button small !ml-0",{orange:e(i)}]),onClick:a[0]||(a[0]=B=>i.value=!e(i))}," 聚焦文本 ",2),s("button",{class:A(["button small",{orange:e(n)}]),onClick:a[1]||(a[1]=B=>n.value=!e(n))}," 聚焦输入框 ",2),s("button",{class:A(["button small",{orange:e(t)}]),onClick:a[2]||(a[2]=B=>t.value=!e(t))}," 聚焦按钮 ",2)])}}}),O=q($,[["__scopeId","data-v-37c9ce85"]]),M=`<script setup lang="ts">
import { useFocus } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const text = useTemplateRef<HTMLElement>('text')
const input = useTemplateRef<HTMLInputElement>('input')
const button = useTemplateRef<HTMLButtonElement>('button')

const { focused: paragraphFocus } = useFocus(text)
const { focused: inputFocus } = useFocus(input, { initialValue: true })
const { focused: buttonFocus } = useFocus(button)
<\/script>

<template>
  <div>
    <p ref="text" class="demo-el px-2 rounded" tabindex="0">
      可获得焦点的段落
    </p>
    <input ref="input" class="demo-el" type="text" placeholder="可获得焦点的输入框">
    <button ref="button" class="demo-el button">
      可获得焦点的按钮
    </button>
    <hr>
    <note class="mb-2">
      <template v-if="paragraphFocus">
        段落获得焦点
      </template>
      <template v-else-if="inputFocus">
        输入框获得焦点
      </template>
      <template v-else-if="buttonFocus">
        按钮获得焦点
      </template>
      <template v-else>
        &nbsp;<!-- 避免段落在空时折叠 -->
      </template>
    </note>
    <button class="button small !ml-0" :class="{ orange: paragraphFocus }" @click="paragraphFocus = !paragraphFocus">
      聚焦文本
    </button>
    <button class="button small" :class="{ orange: inputFocus }" @click="inputFocus = !inputFocus">
      聚焦输入框
    </button>
    <button class="button small" :class="{ orange: buttonFocus }" @click="buttonFocus = !buttonFocus">
      聚焦按钮
    </button>
  </div>
</template>

<style scoped>
.demo-el:focus {
  opacity: 0.7;
  box-shadow: 0 0 2px 1px var(--vp-c-brand);
}
</style>
`,N={class:"demo-source-link"},I=["href"],X=JSON.parse('{"title":"useFocus","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useFocus/index.md","filePath":"core/useFocus/index.md","lastUpdated":1739784586000}'),U={name:"core/useFocus/index.md"},ss=Object.assign(U,{setup(y){const h=V({template:{value:{welcomeSFC:M}}}).serialize();return(g,i)=>{const n=E,t=_,c=v,a=C;return r(),p("div",null,[i[1]||(i[1]=s("h1",{id:"usefocus",tabindex:"-1"},[l("useFocus "),s("a",{class:"header-anchor",href:"#usefocus","aria-label":"Permalink to “useFocus”"},"​")],-1)),d(n,{fn:"useFocus"}),i[2]||(i[2]=s("p",null,[l("用于跟踪或设置 DOM 元素的焦点状态的响应式工具。状态变化反映了目标元素是否为焦点元素。从外部设置响应式值将触发对应于 "),s("code",null,"true"),l(" 和 "),s("code",null,"false"),l(" 值的 "),s("code",null,"focus"),l(" 和 "),s("code",null,"blur"),l(" 事件。")],-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[l("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),d(t,null,{default:F(()=>[s("p",N,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useFocus/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${e(h)}`,target:"_blank"},"playground (beta)",8,I)]),d(O)]),_:1}),i[4]||(i[4]=S("",13)),d(c,{fn:"useFocus"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[l("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),d(a,{fn:"useFocus"})])}}});export{X as __pageData,ss as default};

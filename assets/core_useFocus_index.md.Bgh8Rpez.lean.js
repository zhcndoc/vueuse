import{_ as C,a as _}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as E}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as x}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{_ as R}from"./chunks/Note.B_ue-6bE.js";import{u as T}from"./chunks/index.DXXiP3sM.js";import{u as b}from"./chunks/index.DK97_WvT.js";import{z as w,A as F,B as P,d as V,a1 as f,i as r,o as d,j as s,g as o,w as v,H as e,F as D,y as l,q as B,Z as S,Y as q}from"./chunks/vue.DQfvmmyQ.js";import{_ as $}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/general.CGRH32nb.js";function m(A,g={}){const{initialValue:k=!1,focusVisible:c=!1,preventScroll:i=!1}=g,n=w(!1),t=F(()=>T(A)),u={passive:!0};b(t,"focus",p=>{var h,y;(!c||(y=(h=p.target).matches)!=null&&y.call(h,":focus-visible"))&&(n.value=!0)},u),b(t,"blur",()=>n.value=!1,u);const a=F({get:()=>n.value,set(p){var h,y;!p&&n.value?(h=t.value)==null||h.blur():p&&!n.value&&((y=t.value)==null||y.focus({preventScroll:i}))}});return P(t,()=>{a.value=k},{immediate:!0,flush:"post"}),{focused:a}}const O=V({__name:"demo",setup(A){const g=f("text"),k=f("input"),c=f("button"),{focused:i}=m(g),{focused:n}=m(k,{initialValue:!0}),{focused:t}=m(c);return(u,a)=>{const p=R;return d(),r("div",null,[s("p",{ref_key:"text",ref:g,class:"demo-el px-2 rounded",tabindex:"0"}," 可获得焦点的段落 ",512),s("input",{ref_key:"input",ref:k,class:"demo-el",type:"text",placeholder:"可获得焦点的输入框"},null,512),s("button",{ref_key:"button",ref:c,class:"demo-el button"}," 可获得焦点的按钮 ",512),a[3]||(a[3]=s("hr",null,null,-1)),o(p,{class:"mb-2"},{default:v(()=>[e(i)?(d(),r(D,{key:0},[l(" 段落获得焦点 ")],64)):e(n)?(d(),r(D,{key:1},[l(" 输入框获得焦点 ")],64)):e(t)?(d(),r(D,{key:2},[l(" 按钮获得焦点 ")],64)):(d(),r(D,{key:3},[l("   ")],64))]),_:1}),s("button",{class:B(["button small !ml-0",{orange:e(i)}]),onClick:a[0]||(a[0]=h=>i.value=!e(i))}," 聚焦文本 ",2),s("button",{class:B(["button small",{orange:e(n)}]),onClick:a[1]||(a[1]=h=>n.value=!e(n))}," 聚焦输入框 ",2),s("button",{class:B(["button small",{orange:e(t)}]),onClick:a[2]||(a[2]=h=>t.value=!e(t))}," 聚焦按钮 ",2)])}}}),M=$(O,[["__scopeId","data-v-37c9ce85"]]),N=`<script setup lang="ts">
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
`,I={class:"demo-source-link"},U=["href"],ss=JSON.parse('{"title":"useFocus","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useFocus/index.md","filePath":"core/useFocus/index.md","lastUpdated":1739784586000}'),z={name:"core/useFocus/index.md"},is=Object.assign(z,{setup(A){const k=S({template:{value:{welcomeSFC:N}}}).serialize();return(c,i)=>{const n=x,t=E,u=C,a=_;return d(),r("div",null,[i[1]||(i[1]=s("h1",{id:"usefocus",tabindex:"-1"},[l("useFocus "),s("a",{class:"header-anchor",href:"#usefocus","aria-label":"Permalink to “useFocus”"},"​")],-1)),o(n,{fn:"useFocus"}),i[2]||(i[2]=s("p",null,[l("用于跟踪或设置 DOM 元素的焦点状态的响应式工具。状态变化反映了目标元素是否为焦点元素。从外部设置响应式值将触发对应于 "),s("code",null,"true"),l(" 和 "),s("code",null,"false"),l(" 值的 "),s("code",null,"focus"),l(" 和 "),s("code",null,"blur"),l(" 事件。")],-1)),i[3]||(i[3]=s("h2",{id:"示例",tabindex:"-1"},[l("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),o(t,null,{default:v(()=>[s("p",I,[i[0]||(i[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useFocus/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${e(k)}`,target:"_blank"},"playground (beta)",8,U)]),o(M)]),_:1}),i[4]||(i[4]=q("",13)),o(u,{fn:"useFocus"}),i[5]||(i[5]=s("h2",{id:"更新日志",tabindex:"-1"},[l("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),o(a,{fn:"useFocus"})])}}});export{ss as __pageData,is as default};

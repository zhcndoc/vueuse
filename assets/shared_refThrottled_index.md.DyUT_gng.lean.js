import{_ as B,a as m}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as b}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as v}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{_}from"./chunks/Note.B_ue-6bE.js";import{r as C,a3 as F,B as y,d as T,z as p,i as c,o as D,a2 as E,g as k,j as i,a5 as x,w as f,y as d,t as r,H as u,Z as R,Y as w}from"./chunks/vue.DQfvmmyQ.js";import{u as P}from"./chunks/index.BdITrxyF.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/filters.DSKJ-Ken.js";import"./chunks/index.CyaQpZZu.js";function j(a,t=200,n=!0,h=!0){if(t<=0)return a;const s=C(F(a)),l=P(()=>{s.value=a.value},t,n,h);return y(a,()=>l()),s}const S=T({__name:"demo",setup(a){const t=p(!0),n=p(!1),h=p(""),s=j(h,1e3,t.value,n.value),l=p(0);return y(s,()=>{l.value+=1}),(g,e)=>{const o=_;return D(),c("div",null,[E(i("input",{"onUpdate:modelValue":e[0]||(e[0]=A=>h.value=A),placeholder:"尝试输入任何内容...",type:"text"},null,512),[[x,h.value]]),k(o,null,{default:f(()=>e[1]||(e[1]=[d("此演示设置了 1000 毫秒的延迟。")])),_:1}),i("p",null,"节流后的值: "+r(u(s)),1),i("p",null,"更新次数: "+r(l.value),1),i("p",null,"尾部触发: "+r(t.value),1),i("p",null,"头部触发: "+r(n.value),1)])}}}),V=`<script setup lang="ts">
import { refThrottled } from '@vueuse/core'
import { shallowRef, watch } from 'vue'

const trailing = shallowRef(true)
const leading = shallowRef(false)
const input = shallowRef('')
const throttled = refThrottled(input, 1000, trailing.value, leading.value)
const updated = shallowRef(0)

watch(throttled, () => {
  updated.value += 1
})
<\/script>

<template>
  <div>
    <input v-model="input" placeholder="尝试输入任何内容..." type="text">
    <note>此演示设置了 1000 毫秒的延迟。</note>

    <p>节流后的值: {{ throttled }}</p>
    <p>更新次数: {{ updated }}</p>
    <p>尾部触发: {{ trailing }}</p>
    <p>头部触发: {{ leading }}</p>
  </div>
</template>
`,N={class:"demo-source-link"},$=["href"],L=JSON.parse('{"title":"refThrottled","description":"","frontmatter":{"category":"Reactivity","alias":"useThrottle, throttledRef"},"headers":[],"relativePath":"shared/refThrottled/index.md","filePath":"shared/refThrottled/index.md","lastUpdated":1742698055000}'),z={name:"shared/refThrottled/index.md"},Q=Object.assign(z,{setup(a){const n=R({template:{value:{welcomeSFC:V}}}).serialize();return(h,s)=>{const l=v,g=b,e=B,o=m;return D(),c("div",null,[s[1]||(s[1]=i("h1",{id:"refthrottled",tabindex:"-1"},[d("refThrottled "),i("a",{class:"header-anchor",href:"#refthrottled","aria-label":"Permalink to “refThrottled”"},"​")],-1)),k(l,{fn:"refThrottled"}),s[2]||(s[2]=i("p",null,"限制 ref 值的变化频率。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[d("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),k(g,null,{default:f(()=>[i("p",N,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/refThrottled/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${u(n)}`,target:"_blank"},"playground (beta)",8,$)]),k(S)]),_:1}),s[4]||(s[4]=w("",15)),k(e,{fn:"refThrottled"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[d("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),k(o,{fn:"refThrottled"})])}}});export{L as __pageData,Q as default};

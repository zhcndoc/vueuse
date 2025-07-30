import{_ as f,a as m}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as C}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{_ as v}from"./chunks/Note.DW__0Z7J.js";import{r as F,a3 as _,B as o,d as T,z as p,i as D,o as A,a2 as E,g as e,j as i,a5 as x,w as c,y as d,t as r,H as B,Z as R,Y as w}from"./chunks/vue.K-Nh9t7y.js";import{u as P}from"./chunks/index.BTw337D0.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/filters.Dfclkjvt.js";import"./chunks/index.84cWVi_S.js";function j(a,h=200,n=!0,t=!0){if(h<=0)return a;const s=F(_(a)),l=P(()=>{s.value=a.value},h,n,t);return o(a,()=>l()),s}const S=T({__name:"demo",setup(a){const h=p(!0),n=p(!1),t=p(""),s=j(t,1e3,h.value,n.value),l=p(0);return o(s,()=>{l.value+=1}),(y,k)=>{const g=v;return A(),D("div",null,[E(i("input",{"onUpdate:modelValue":k[0]||(k[0]=u=>t.value=u),placeholder:"尝试输入任何内容...",type:"text"},null,512),[[x,t.value]]),e(g,null,{default:c(()=>k[1]||(k[1]=[d("此演示设置了 1000 毫秒的延迟。",-1)])),_:1,__:[1]}),i("p",null,"节流后的值: "+r(B(s)),1),i("p",null,"更新次数: "+r(l.value),1),i("p",null,"尾部触发: "+r(h.value),1),i("p",null,"头部触发: "+r(n.value),1)])}}}),V=`<script setup lang="ts">
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
`,N={class:"demo-source-link"},$=["href"],L=JSON.parse('{"title":"refThrottled","description":"","frontmatter":{"category":"Reactivity","alias":"useThrottle, throttledRef"},"headers":[],"relativePath":"shared/refThrottled/index.md","filePath":"shared/refThrottled/index.md","lastUpdated":1753423581000}'),z={name:"shared/refThrottled/index.md"},Q=Object.assign(z,{setup(a){const n=R({template:{value:{welcomeSFC:V}}}).serialize();return(t,s)=>{const l=b,y=C,k=f,g=m;return A(),D("div",null,[s[1]||(s[1]=i("h1",{id:"refthrottled",tabindex:"-1"},[d("refThrottled "),i("a",{class:"header-anchor",href:"#refthrottled","aria-label":"Permalink to “refThrottled”"},"​")],-1)),e(l,{fn:"refThrottled"}),s[2]||(s[2]=i("p",null,"限制 ref 值的变化频率。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[d("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),e(y,null,{default:c(()=>[i("p",N,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/refThrottled/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${B(n)}`,target:"_blank"},"playground (beta)",8,$)]),e(S)]),_:1}),s[4]||(s[4]=w("",17)),e(k,{fn:"refThrottled"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[d("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),e(g,{fn:"refThrottled"})])}}});export{L as __pageData,Q as default};

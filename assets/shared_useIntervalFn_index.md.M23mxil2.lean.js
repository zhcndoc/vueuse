import{_ as A,a as m}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as v}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{a as f,_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{d as B,z as y,i as d,o,F,j as i,k as D,t as _,y as e,a2 as C,a5 as I,H as n,Z as x,g as l,Y as E,w}from"./chunks/vue.BjJVtbJX.js";import{r as H}from"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";const P=B({__name:"demo",setup(c){const g=["Hello","Hi","Yo!","Hey","Hola","こんにちは","Bonjour","Salut!","Hello","Привет"],h=y("Hello"),p=y(500),{pause:s,resume:k,isActive:r}=f(()=>{h.value=g[H(0,g.length-1)]},p);return(u,a)=>(o(),d(F,null,[i("p",null,_(h.value),1),i("p",null,[a[3]||(a[3]=e(" 间隔： ")),C(i("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>p.value=t),type:"number",placeholder:"间隔"},null,512),[[I,p.value]])]),n(r)?(o(),d("button",{key:0,class:"orange",onClick:a[1]||(a[1]=(...t)=>n(s)&&n(s)(...t))}," 暂停 ")):D("",!0),n(r)?D("",!0):(o(),d("button",{key:1,onClick:a[2]||(a[2]=(...t)=>n(k)&&n(k)(...t))}," 恢复 "))],64))}}),S=`<script setup lang="ts">
import { rand, useIntervalFn } from '@vueuse/core'
import { shallowRef } from 'vue'

const greetings = ['Hello', 'Hi', 'Yo!', 'Hey', 'Hola', 'こんにちは', 'Bonjour', 'Salut!', 'Hello', 'Привет']
const word = shallowRef('Hello')
const interval = shallowRef(500)

const { pause, resume, isActive } = useIntervalFn(() => {
  word.value = greetings[rand(0, greetings.length - 1)]
}, interval)
<\/script>

<template>
  <p>{{ word }}</p>
  <p>
    间隔：
    <input v-model="interval" type="number" placeholder="间隔">
  </p>
  <button v-if="isActive" class="orange" @click="pause">
    暂停
  </button>
  <button v-if="!isActive" @click="resume">
    恢复
  </button>
</template>
`,R={class:"demo-source-link"},T=["href"],Y=JSON.parse('{"title":"useIntervalFn","description":"","frontmatter":{"category":"Animation"},"headers":[],"relativePath":"shared/useIntervalFn/index.md","filePath":"shared/useIntervalFn/index.md","lastUpdated":1716184754000}'),V={name:"shared/useIntervalFn/index.md"},M=Object.assign(V,{setup(c){const h=x({template:{value:{welcomeSFC:S}}}).serialize();return(p,s)=>{const k=b,r=v,u=A,a=m;return o(),d("div",null,[s[1]||(s[1]=i("h1",{id:"useintervalfn",tabindex:"-1"},[e("useIntervalFn "),i("a",{class:"header-anchor",href:"#useintervalfn","aria-label":"Permalink to “useIntervalFn”"},"​")],-1)),l(k,{fn:"useIntervalFn"}),s[2]||(s[2]=i("p",null,[e("带有控制功能的 "),i("code",null,"setInterval"),e(" 包装器")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[e("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),l(r,null,{default:w(()=>[i("p",R,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useIntervalFn/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${n(h)}`,target:"_blank"},"playground (beta)",8,T)]),l(P)]),_:1}),s[4]||(s[4]=E("",7)),l(u,{fn:"useIntervalFn"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[e("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(a,{fn:"useIntervalFn"})])}}});export{Y as __pageData,M as default};

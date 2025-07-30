import{_ as f,a as C}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as b}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as v}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{A as B,a3 as A,L as E,a4 as S,d as _,z as x,i as u,o as m,F as T,j as s,y as d,a2 as J,a5 as j,t as y,H as o,Z as O,g as r,Y as P,w as R}from"./chunks/vue.K-Nh9t7y.js";import{r as D}from"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";const U=(h,n)=>h.sort(n),g=(h,n)=>h-n;function c(...h){const[n]=h;let t=g,k={};h.length===2?typeof h[1]=="object"?(k=h[1],t=k.compareFn??g):t=h[1]??g:h.length>2&&(t=h[1]??g,k=h[2]??{});const{dirty:a=!1,sortFn:e=U}=k;return a?(E(()=>{const l=e(A(n),t);S(n)?n.value=l:n.splice(0,n.length,...l)}),n):B(()=>e([...A(n)],t))}const w={class:"flex items-center"},V={class:"mt-10"},$=_({__name:"demo",setup(h){const n=[{name:"John",age:40},{name:"Jane",age:20},{name:"Joe",age:30},{name:"Jenny",age:22}],t=c(n,(p,i)=>p.age-i.age),k=x(""),a=B(()=>k.value.split(",")),e=c(a);function l(){const p=[];for(let i=0;i<D(10,20);i++)p.push(D(0,100));k.value=p.join(",")}return l(),(p,i)=>(m(),u(T,null,[s("div",null,[s("div",w,[i[1]||(i[1]=d(" 输入： ",-1)),J(s("input",{"onUpdate:modelValue":i[0]||(i[0]=F=>k.value=F),type:"text"},null,512),[[j,k.value]])]),s("div",null,[s("button",{onClick:l}," 随机 ")]),d(" 输出："+y(o(e)),1)]),s("div",V,[i[2]||(i[2]=s("div",null,"对象属性排序：",-1)),i[3]||(i[3]=s("div",null,"输入：",-1)),s("div",null,y(n)),i[4]||(i[4]=s("div",{class:"mt-5"}," 输出： ",-1)),s("div",null,y(o(t)),1)])],64))}}),N=`<script setup lang="ts">
import { rand, useSorted } from '@vueuse/core'
import { computed, shallowRef } from 'vue'

const objArr = [{
  name: 'John',
  age: 40,
}, {
  name: 'Jane',
  age: 20,
}, {
  name: 'Joe',
  age: 30,
}, {
  name: 'Jenny',
  age: 22,
}]
const result2 = useSorted(objArr, (a, b) => a.age - b.age)

const arrText = shallowRef('')
const inputArr = computed(() => arrText.value.split(','))
const inputOut = useSorted(inputArr)

function randomArr() {
  const arr = []
  for (let i = 0; i < rand(10, 20); i++)
    arr.push(rand(0, 100))
  arrText.value = arr.join(',')
}

randomArr()
<\/script>

<template>
  <div>
    <div class="flex items-center">
      输入：
      <input v-model="arrText" type="text">
    </div>
    <div>
      <button @click="randomArr">
        随机
      </button>
    </div>
    输出：{{ inputOut }}
  </div>

  <div class="mt-10">
    <div>对象属性排序：</div>
    <div>输入：</div>
    <div>{{ objArr }}</div>
    <div class="mt-5">
      输出：
    </div>
    <div>{{ result2 }}</div>
  </div>
</template>
`,M={class:"demo-source-link"},z=["href"],K=JSON.parse('{"title":"useSorted","description":"","frontmatter":{"category":"Array"},"headers":[],"relativePath":"core/useSorted/index.md","filePath":"core/useSorted/index.md","lastUpdated":1715934697000}'),G={name:"core/useSorted/index.md"},Q=Object.assign(G,{setup(h){const t=O({template:{value:{welcomeSFC:N}}}).serialize();return(k,a)=>{const e=v,l=b,p=f,i=C;return m(),u("div",null,[a[1]||(a[1]=s("h1",{id:"usesorted",tabindex:"-1"},[d("useSorted "),s("a",{class:"header-anchor",href:"#usesorted","aria-label":"Permalink to “useSorted”"},"​")],-1)),r(e,{fn:"useSorted"}),a[2]||(a[2]=s("p",null,"响应式排序数组",-1)),a[3]||(a[3]=s("h2",{id:"示例",tabindex:"-1"},[d("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),r(l,null,{default:R(()=>[s("p",M,[a[0]||(a[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useSorted/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${o(t)}`,target:"_blank"},"playground (beta)",8,z)]),r($)]),_:1}),a[4]||(a[4]=P("",10)),r(p,{fn:"useSorted"}),a[5]||(a[5]=s("h2",{id:"更新日志",tabindex:"-1"},[d("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),r(i,{fn:"useSorted"})])}}});export{K as __pageData,Q as default};

import{_ as D,a as B}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as A}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import{z as g,i as y,o as c,j as i,y as t,d as b,D as _,t as v,H as m,Z as C,g as l,Y as u,w as E}from"./chunks/vue.BjJVtbJX.js";import{_ as F}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as x}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{b as T}from"./chunks/metadata.CHQ7S0zC.js";import{u as P}from"./chunks/index.DEO4egZK.js";import{u as S}from"./chunks/index.D6Ixh6S-.js";import{r as N,Y as w}from"./chunks/index.m5AtOY8x.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.BsCVlyoA.js";import"./chunks/general.CGRH32nb.js";import"./chunks/index.CBIpye6U.js";function R(p={}){const{navigator:a=T}=p,h=["chargingchange","chargingtimechange","dischargingtimechange","levelchange"],r=S(()=>a&&"getBattery"in a&&typeof a.getBattery=="function"),s=g(!1),n=g(0),e=g(0),d=g(1);let k;function o(){s.value=this.charging,n.value=this.chargingTime||0,e.value=this.dischargingTime||0,d.value=this.level}return r.value&&a.getBattery().then(f=>{k=f,o.call(k),P(k,h,o,{passive:!0})}),{isSupported:r,charging:s,chargingTime:n,dischargingTime:e,level:d}}const I={};function U(p,a){return c(),y("blockquote",null,a[0]||(a[0]=[i("p",null,[t(" This function also provides a renderless component version via the "),i("code",null,"@vueuse/components"),t(" package. "),i("a",{href:"/guide/components"},"Learn more about the usage"),t(". ")],-1)]))}const V=A(I,[["render",U]]),$={lang:"yaml"},L=b({__name:"demo",setup(p){const a=N(s=>w.stringify(s,(n,e)=>{if(typeof e!="function")return e},{singleQuote:!0,flowCollectionPadding:!1})),h=_(R()),r=a(h);return(s,n)=>(c(),y("pre",$,v(m(r)),1))}}),M=`<script setup lang="ts">
import { reactify, useBattery } from '@vueuse/core'
import { reactive } from 'vue'
import YAML from 'yaml'

const stringify = reactify(
  (input: any) => YAML.stringify(input, (k, v) => {
    if (typeof v === 'function') {
      return undefined
    }
    return v
  }, {
    singleQuote: true,
    flowCollectionPadding: false,
  }),
)

const battery = reactive(useBattery())
const text = stringify(battery)
<\/script>

<template>
  <pre lang="yaml">{{ text }}</pre>
</template>
`,Y={class:"demo-source-link"},j=["href"],ts=JSON.parse('{"title":"useBattery","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useBattery/index.md","filePath":"core/useBattery/index.md","lastUpdated":1715934697000}'),z={name:"core/useBattery/index.md"},es=Object.assign(z,{setup(p){const h=C({template:{value:{welcomeSFC:M}}}).serialize();return(r,s)=>{const n=x,e=F,d=V,k=D,o=B;return c(),y("div",null,[s[1]||(s[1]=i("h1",{id:"usebattery",tabindex:"-1"},[t("useBattery "),i("a",{class:"header-anchor",href:"#usebattery","aria-label":"Permalink to “useBattery”"},"​")],-1)),l(n,{fn:"useBattery"}),s[2]||(s[2]=i("p",null,[t("响应式的 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API",target:"_blank",rel:"noreferrer"},"Battery Status API"),t("，更常被称为电池 API，提供有关系统电池充电级别的信息，并允许在电池级别或充电状态发生变化时发送事件通知。这可以用来调整你的应用程序的资源使用，以减少电池耗尽时的电池消耗，或在电池耗尽之前保存更改，以防止数据丢失。")],-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[t("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),l(e,null,{default:E(()=>[i("p",Y,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useBattery/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${m(h)}`,target:"_blank"},"playground (beta)",8,j)]),l(L)]),_:1}),s[4]||(s[4]=u("",7)),l(d),s[5]||(s[5]=u("",6)),l(k,{fn:"useBattery"}),s[6]||(s[6]=i("h2",{id:"更新日志",tabindex:"-1"},[t("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(o,{fn:"useBattery"})])}}});export{ts as __pageData,es as default};

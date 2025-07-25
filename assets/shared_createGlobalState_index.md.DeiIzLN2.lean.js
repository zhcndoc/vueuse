import{_ as u,a as A}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as B}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{an as f,d as b,i as y,o as c,a2 as d,j as i,a5 as o,H as e,t as C,Z as v,g as k,Y as S,y as g,w as F}from"./chunks/vue.DDc96eEg.js";import{u as _}from"./chunks/index.C46AwCHO.js";import{r as x,Y as E}from"./chunks/index.D2bl6FNE.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.BstIlBID.js";import"./chunks/index.Bh1Ln9ge.js";import"./chunks/index.DnNruQcN.js";import"./chunks/filters.C8rvCcdO.js";import"./chunks/index.BtqfaRQ7.js";import"./chunks/index.Biv1Ajcl.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/general.tY1gtZD0.js";function G(r){let l=!1,h;const a=f(!0);return(...s)=>(l||(h=a.run(()=>r(...s)),l=!0),h)}const P={lang:"yaml"},j=b({__name:"demo",setup(r){const l=x(p=>E.stringify(p,(t,n)=>{if(typeof n!="function")return n},{singleQuote:!0,flowCollectionPadding:!1})),a=G(()=>_("vue-use-locale-storage",{name:"Banana",color:"Yellow",size:"Medium"}))(),s=l(a);return(p,t)=>(c(),y("div",null,[d(i("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>e(a).name=n),type:"text"},null,512),[[o,e(a).name]]),d(i("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>e(a).color=n),type:"text"},null,512),[[o,e(a).color]]),d(i("input",{"onUpdate:modelValue":t[2]||(t[2]=n=>e(a).size=n),type:"text"},null,512),[[o,e(a).size]]),i("pre",P,C(e(s)),1)]))}}),w=`<script setup lang="ts">
import { createGlobalState, reactify, useStorage } from '@vueuse/core'
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

const useState = createGlobalState(() =>
  useStorage('vue-use-locale-storage', {
    name: 'Banana',
    color: 'Yellow',
    size: 'Medium',
  }))

const state = useState()
const text = stringify(state)
<\/script>

<template>
  <div>
    <input v-model="state.name" type="text">
    <input v-model="state.color" type="text">
    <input v-model="state.size" type="text">

    <pre lang="yaml">{{ text }}</pre>
  </div>
</template>
`,V={class:"demo-source-link"},z=["href"],X=JSON.parse('{"title":"createGlobalState","description":"","frontmatter":{"category":"State","related":"createSharedComposable"},"headers":[],"relativePath":"shared/createGlobalState/index.md","filePath":"shared/createGlobalState/index.md","lastUpdated":1739784586000}'),R={name:"shared/createGlobalState/index.md"},ss=Object.assign(R,{setup(r){const h=v({template:{value:{welcomeSFC:w}}}).serialize();return(a,s)=>{const p=B,t=m,n=u,D=A;return c(),y("div",null,[s[1]||(s[1]=i("h1",{id:"createglobalstate",tabindex:"-1"},[g("createGlobalState "),i("a",{class:"header-anchor",href:"#createglobalstate","aria-label":"Permalink to “createGlobalState”"},"​")],-1)),k(p,{fn:"createGlobalState"}),s[2]||(s[2]=i("p",null,"将状态保留在全局范围内，以便在 Vue 实例之间重复使用。",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[g("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),k(t,null,{default:F(()=>[i("p",V,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/createGlobalState/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${e(h)}`,target:"_blank"},"playground (beta)",8,z)]),k(j)]),_:1}),s[4]||(s[4]=S("",14)),k(n,{fn:"createGlobalState"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[g("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),k(D,{fn:"createGlobalState"})])}}});export{X as __pageData,ss as default};

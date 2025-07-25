const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/demo.client.DXV70LQX.js","assets/chunks/vue.DDc96eEg.js","assets/chunks/index.Bh1Ln9ge.js","assets/chunks/index.DnNruQcN.js","assets/chunks/filters.C8rvCcdO.js","assets/chunks/index.BtqfaRQ7.js","assets/chunks/metadata.BfYDMb5p.js","assets/chunks/index.D2bl6FNE.js"])))=>i.map(i=>d[i]);
import{Z as D,b as A,i as o,o as l,j as i,g as a,Y as c,y as n,w as t,H as h,e as B,ai as u,Q as m,_ as b}from"./chunks/vue.DDc96eEg.js";import{_ as v,a as f}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as C}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as E}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";const F=`<script setup lang="ts">
import { useIDBKeyval } from '@vueuse/integrations'
import { reactify } from '@vueuse/shared'
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

const KEY = 'vue-use-idb-keyval'

const stateObject = useIDBKeyval(\`\${KEY}-object\`, {
  name: 'Banana',
  color: 'Yellow',
  size: 'Medium',
  count: 0,
})
const textObject = stringify(stateObject.data)

const stateString = useIDBKeyval(\`\${KEY}-string\`, 'foobar')
const textString = stateString

const stateArray = useIDBKeyval(\`\${KEY}-array\`, ['foo', 'bar', 'baz'])
const textArray = stringify(stateArray.data)
<\/script>

<template>
  <h5>Object</h5>
  <input v-model="stateObject.data.value.name" type="text">
  <input v-model="stateObject.data.value.color" type="text">
  <input v-model="stateObject.data.value.size" type="text">
  <input v-model.number="stateObject.data.value.count" type="range" min="0" step="0.01" max="1000">

  <pre lang="json">{{ textObject }}</pre>
  <br>

  <h5>String</h5>
  <input v-model="stateString.data.value" type="text">
  <pre>{{ textString }}</pre>
  <br>

  <h5>Array</h5>
  <input v-model="stateArray.data.value[0]" type="text">
  <input v-model="stateArray.data.value[1]" type="text">
  <input v-model="stateArray.data.value[2]" type="text">
  <pre lang="json">{{ textArray }}</pre>
</template>
`,_={class:"demo-source-link"},x=["href"],z=JSON.parse('{"title":"useIDBKeyval","description":"","frontmatter":{"category":"@Integrations"},"headers":[],"relativePath":"integrations/useIDBKeyval/index.md","filePath":"integrations/useIDBKeyval/index.md","lastUpdated":1716184754000}'),I={name:"integrations/useIDBKeyval/index.md"},Y=Object.assign(I,{setup(K){const k=m(()=>b(()=>import("./chunks/demo.client.DXV70LQX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),e=D({template:{value:{welcomeSFC:F}}}).serialize();return(T,s)=>{const p=E,r=A("ClientOnly"),d=C,g=v,y=f;return l(),o("div",null,[s[2]||(s[2]=i("h1",{id:"useidbkeyval",tabindex:"-1"},[n("useIDBKeyval "),i("a",{class:"header-anchor",href:"#useidbkeyval","aria-label":"Permalink to “useIDBKeyval”"},"​")],-1)),a(p,{fn:"useIDBKeyval"}),s[3]||(s[3]=i("p",null,[i("a",{href:"https://www.npmjs.com/package/idb-keyval",target:"_blank",rel:"noreferrer"},[i("code",null,"idb-keyval")]),n(" 的封装。")],-1)),s[4]||(s[4]=i("h2",{id:"demo",tabindex:"-1"},[n("Demo "),i("a",{class:"header-anchor",href:"#demo","aria-label":"Permalink to “Demo”"},"​")],-1)),a(d,null,{default:t(()=>[i("p",_,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/integrations/useIDBKeyval/demo.client.vue",target:"_blank"},"source",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${h(e)}`,target:"_blank"},"playground (beta)",8,x)]),a(r,null,{default:t(()=>[(l(),B(u,null,{fallback:t(()=>s[1]||(s[1]=[n(" Loading demo... ")])),default:t(()=>[a(h(k))]),_:1}))]),_:1})]),_:1}),s[5]||(s[5]=c("",12)),a(g,{fn:"useIDBKeyval"}),s[6]||(s[6]=i("h2",{id:"更新日志",tabindex:"-1"},[n("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(y,{fn:"useIDBKeyval"})])}}});export{z as __pageData,Y as default};

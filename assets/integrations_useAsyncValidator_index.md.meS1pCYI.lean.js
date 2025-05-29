import{Z as c,b as D,i as u,o as t,j as i,g as l,Y as n,y as s,w as e,H as h,e as m,ai as f,Q as B,_ as b}from"./chunks/vue.BjJVtbJX.js";import{_ as v,a as E}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as F}from"./chunks/CodeToggle.vue_vue_type_style_index_0_lang.D7Fdh-7R.js";import{_}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as C}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.CyV1ZbRb.js";import"./chunks/index.C5yl_2qJ.js";import"./chunks/index.Bs_VRwwR.js";import"./chunks/index.BfRJYHj0.js";import"./chunks/filters.qsUK02Mp.js";import"./chunks/index.CFuYet67.js";import"./chunks/index.DEO4egZK.js";import"./chunks/index.BsCVlyoA.js";import"./chunks/general.CGRH32nb.js";const V=`<script setup lang="ts">
import type { Rules } from 'async-validator'
import { useAsyncValidator } from '@vueuse/integrations'
import { reactive } from 'vue'

const form = reactive({ email: '', name: '', age: '' })
const rules: Rules = {
  name: {
    type: 'string',
    min: 5,
    max: 20,
    required: true,
  },
  age: {
    type: 'number',
    required: true,
  },
  email: [
    {
      type: 'email',
      required: true,
    },
  ],
}

const { pass, isFinished, errorFields } = useAsyncValidator(form, rules)
<\/script>

<template>
  <div>
    <code>pass:</code>
    <BooleanDisplay :value="pass" />
  </div>
  <div>
    <code>isFinished:</code>
    <BooleanDisplay :value="isFinished" />
  </div>

  <hr>

  <div flex="~ col gap-2">
    <div>
      Email
      <input
        v-model="form.email"
        :class="{ '!border-red': errorFields?.email?.length }"
        type="text"
        placeholder="Email"
      >
      <div v-if="errorFields?.email?.length" text-red>
        {{ errorFields.email[0].message }}
      </div>
    </div>
    <div>
      Name
      <input
        v-model="form.name"
        :class="{ '!border-red': errorFields?.name?.length }"
        type="text"
        placeholder="Name"
      >
      <div v-if="errorFields?.name?.length" text-red>
        {{ errorFields.name[0].message }}
      </div>
    </div>
    <div>
      Age
      <input
        v-model.number="form.age"
        :class="{ '!border-red': errorFields?.age?.length }"
        type="number"
        placeholder="Age"
      >
      <div v-if="errorFields?.age?.length" text-red>
        {{ errorFields.age[0].message }}
      </div>
    </div>
    <div>
      <button :disabled="!pass">
        Submit
      </button>
    </div>
  </div>
</template>
`,x={class:"demo-source-link"},R=["href"],K=JSON.parse('{"title":"useAsyncValidator","description":"","frontmatter":{"category":"@Integrations"},"headers":[],"relativePath":"integrations/useAsyncValidator/index.md","filePath":"integrations/useAsyncValidator/index.md","lastUpdated":1716184754000}'),P={name:"integrations/useAsyncValidator/index.md"},W=Object.assign(P,{setup(S){const k=B(()=>b(()=>import("./chunks/demo.client.HPOCeaax.js"),__VITE_PRELOAD__)),r=c({template:{value:{welcomeSFC:V}}}).serialize();return(O,a)=>{const d=C,p=D("ClientOnly"),o=_,g=F,y=v,A=E;return t(),u("div",null,[a[3]||(a[3]=i("h1",{id:"useasyncvalidator",tabindex:"-1"},[s("useAsyncValidator "),i("a",{class:"header-anchor",href:"#useasyncvalidator","aria-label":"Permalink to “useAsyncValidator”"},"​")],-1)),l(d,{fn:"useAsyncValidator"}),a[4]||(a[4]=i("p",null,[s("对 "),i("a",{href:"https://github.com/yiminghe/async-validator",target:"_blank",rel:"noreferrer"},[i("code",null,"async-validator")]),s(" 的封装。")],-1)),a[5]||(a[5]=i("h2",{id:"demo",tabindex:"-1"},[s("Demo "),i("a",{class:"header-anchor",href:"#demo","aria-label":"Permalink to “Demo”"},"​")],-1)),l(o,null,{default:e(()=>[i("p",x,[a[0]||(a[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/integrations/useAsyncValidator/demo.client.vue",target:"_blank"},"source",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${h(r)}`,target:"_blank"},"playground (beta)",8,R)]),l(p,null,{default:e(()=>[(t(),m(f,null,{fallback:e(()=>a[1]||(a[1]=[s(" Loading demo... ")])),default:e(()=>[l(h(k))]),_:1}))]),_:1})]),_:1}),a[6]||(a[6]=n("",6)),l(g,null,{default:e(()=>a[2]||(a[2]=[i("div",{class:"code-block-ts"},[i("div",{class:"language-ts"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," useAsyncValidator"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"@vueuse/integrations/useAsyncValidator"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")])])])])],-1),i("div",{class:"code-block-js"},[i("div",{class:"language-js"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {}")])])])])],-1)])),_:1,__:[2]}),a[7]||(a[7]=i("h2",{id:"类型声明",tabindex:"-1"},[s("类型声明 "),i("a",{class:"header-anchor",href:"#类型声明","aria-label":"Permalink to “类型声明”"},"​")],-1)),a[8]||(a[8]=i("details",null,[i("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),i("div",{class:"language-typescript"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"typescript"),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," AsyncValidatorError"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Error"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," &"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  errors"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ValidateError"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  fields"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Record"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ValidateError"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseAsyncValidatorExecuteReturn"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  pass"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  errors"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"AsyncValidatorError"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"errors"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"] | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  errorInfo"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"AsyncValidatorError"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"null")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  errorFields"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"AsyncValidatorError"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"fields"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"] | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseAsyncValidatorReturn"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  pass"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  isFinished"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  errors"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"AsyncValidatorError"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"errors"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"] | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  errorInfo"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"AsyncValidatorError"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"null"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  errorFields"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"AsyncValidatorError"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"fields"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"] | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  execute"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Promise"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseAsyncValidatorExecuteReturn"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseAsyncValidatorOptions"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://github.com/yiminghe/async-validator#options")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  validateOption"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ValidateOption")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 第一次将会立即触发验证。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 当 `manual` 设置为 true 时才有效。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," true")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  immediate"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 如果设置为 true，验证将不会自动触发。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  manual"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"/**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * async-validator 的包装器。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://vueuse.org/useAsyncValidator")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://github.com/yiminghe/async-validator")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useAsyncValidator"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  value"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Record"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"any"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">>,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  rules"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Rules"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseAsyncValidatorOptions"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseAsyncValidatorReturn"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," &"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," PromiseLike"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseAsyncValidatorReturn"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])])])],-1)),a[9]||(a[9]=n("",3)),l(y,{fn:"useAsyncValidator"}),a[10]||(a[10]=i("h2",{id:"更新日志",tabindex:"-1"},[s("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(A,{fn:"useAsyncValidator"})])}}});export{K as __pageData,W as default};

import{_ as w,a as S}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as I}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as R}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{r as M,B,A as F,a3 as p,d as L,z as d,i as c,o as A,F as E,j as s,a2 as u,a5 as O,ah as P,ad as v,H as N,O as T,t as b,Z as q,g as m,Y as C,y as i,w as J}from"./chunks/vue.K-Nh9t7y.js";import{F as V}from"./chunks/fuse.Ch1WBRTM.js";import{_ as j}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";function W(f,g,h){const k=()=>{var e,l;return new V((e=p(g))!=null?e:[],(l=p(h))==null?void 0:l.fuseOptions)},a=M(k());B(()=>{var e;return(e=p(h))==null?void 0:e.fuseOptions},()=>{a.value=k()},{deep:!0}),B(()=>p(g),e=>{a.value.setCollection(e)},{deep:!0});const r=F(()=>{const e=p(h);if(e?.matchAllWhenSearchEmpty&&!p(f))return p(g).map((o,y)=>({item:o,refIndex:y}));const l=e?.resultLimit;return a.value.search(p(f),l?{limit:l}:void 0)});return{fuse:a,results:r}}const U={flex:"","flex-wrap":""},H={bg:"dark:dark-300 light-700","mr-2":"",border:"1 light-900 dark:dark-700",rounded:"",relative:"",flex:"","items-center":""},$={flex:"","flex-row":"","flex-wrap":"","gap-x-4":""},G={class:"checkbox"},z={class:"checkbox"},Y={class:"checkbox"},K={"mt-4":""},Z={flex:"","flex-col":""},Q={"text-sm":"","opacity-50":""},X={key:1,"text-center":"","pt-8":"","pb-4":"","opacity-80":""},ss=L({__name:"demo",setup(f){const g=d([{firstName:"Roslyn",lastName:"Mitchell"},{firstName:"Cathleen",lastName:"Matthews"},{firstName:"Carleton",lastName:"Harrelson"},{firstName:"Allen",lastName:"Moores"},{firstName:"John",lastName:"Washington"},{firstName:"Brooke",lastName:"Colton"},{firstName:"Mary",lastName:"Rennold"},{firstName:"Nanny",lastName:"Field"},{firstName:"Chasity",lastName:"Michael"},{firstName:"Oakley",lastName:"Giles"},{firstName:"Johanna",lastName:"Shepherd"},{firstName:"Maybelle",lastName:"Wilkie"},{firstName:"Dawson",lastName:"Rowntree"},{firstName:"Manley",lastName:"Pond"},{firstName:"Lula",lastName:"Sawyer"},{firstName:"Hudson",lastName:"Hext"},{firstName:"Alden",lastName:"Senior"},{firstName:"Tory",lastName:"Hyland"},{firstName:"Constance",lastName:"Josephs"},{firstName:"Larry",lastName:"Kinsley"}]),h=d(""),k=d("both"),a=F(()=>k.value==="first"?["firstName"]:k.value==="last"?["lastName"]:["firstName","lastName"]),r=d(void 0),e=d("");B(e,()=>{if(e.value==="")r.value=void 0;else{const D=Number.parseFloat(e.value);Number.isNaN(D)||(r.value=Math.round(D),e.value=r.value.toString())}});const l=d(!1),o=d(!1),y=d(!0),_=F(()=>({fuseOptions:{keys:a.value,isCaseSensitive:o.value,threshold:l.value?0:void 0},resultLimit:r.value,matchAllWhenSearchEmpty:y.value})),{results:x}=W(h,g,_);return(D,t)=>(A(),c(E,null,[s("div",null,[u(s("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>h.value=n),placeholder:"Search for someone...",type:"text","w-full":""},null,512),[[O,h.value]]),s("div",U,[s("div",H,[t[6]||(t[6]=s("i",{"i-carbon-filter":"",absolute:"","left-2":"","opacity-70":""},null,-1)),u(s("select",{"onUpdate:modelValue":t[1]||(t[1]=n=>k.value=n),"px-8":"","bg-transparent":""},t[5]||(t[5]=[s("option",{bg:"dark:dark-300 light-700",value:"both"}," Full Name ",-1),s("option",{bg:"dark:dark-300 light-700",value:"first"}," First Name ",-1),s("option",{bg:"dark:dark-300 light-700",value:"last"}," Last Name ",-1)]),512),[[P,k.value]]),t[7]||(t[7]=s("i",{"i-carbon-chevron-down":"",absolute:"","right-2":"","pointer-events-none":"","opacity-70":""},null,-1))]),t[11]||(t[11]=s("span",{"flex-1":""},null,-1)),s("div",$,[s("label",G,[u(s("input",{"onUpdate:modelValue":t[2]||(t[2]=n=>l.value=n),type:"checkbox"},null,512),[[v,l.value]]),t[8]||(t[8]=s("span",null,"Exact Match",-1))]),s("label",z,[u(s("input",{"onUpdate:modelValue":t[3]||(t[3]=n=>o.value=n),type:"checkbox"},null,512),[[v,o.value]]),t[9]||(t[9]=s("span",null,"Case Sensitive",-1))]),s("label",Y,[u(s("input",{"onUpdate:modelValue":t[4]||(t[4]=n=>y.value=n),type:"checkbox"},null,512),[[v,y.value]]),t[10]||(t[10]=s("span",null,"Match all when empty",-1))])])])]),s("div",K,[N(x).length>0?(A(!0),c(E,{key:0},T(N(x),n=>(A(),c("div",{key:n.item.firstName+n.item.lastName,"py-2":""},[s("div",Z,[s("span",null,b(n.item.firstName)+" "+b(n.item.lastName),1),s("span",Q," Score Index: "+b(n.refIndex),1)])]))),128)):(A(),c("div",X," No Results Found "))])],64))}}),is=j(ss,[["__scopeId","data-v-910f5d97"]]),as=`<script setup lang='ts'>
import type { UseFuseOptions } from '@vueuse/integrations/useFuse'
import { useFuse } from '@vueuse/integrations/useFuse'
import { computed, shallowRef, watch } from 'vue'

interface DataItem {
  firstName: string
  lastName: string
}

const data = shallowRef<DataItem[]>([
  {
    firstName: 'Roslyn',
    lastName: 'Mitchell',
  },
  {
    firstName: 'Cathleen',
    lastName: 'Matthews',
  },
  {
    firstName: 'Carleton',
    lastName: 'Harrelson',
  },
  {
    firstName: 'Allen',
    lastName: 'Moores',
  },
  {
    firstName: 'John',
    lastName: 'Washington',
  },
  {
    firstName: 'Brooke',
    lastName: 'Colton',
  },
  {
    firstName: 'Mary',
    lastName: 'Rennold',
  },
  {
    firstName: 'Nanny',
    lastName: 'Field',
  },
  {
    firstName: 'Chasity',
    lastName: 'Michael',
  },
  {
    firstName: 'Oakley',
    lastName: 'Giles',
  },
  {
    firstName: 'Johanna',
    lastName: 'Shepherd',
  },
  {
    firstName: 'Maybelle',
    lastName: 'Wilkie',
  },
  {
    firstName: 'Dawson',
    lastName: 'Rowntree',
  },
  {
    firstName: 'Manley',
    lastName: 'Pond',
  },
  {
    firstName: 'Lula',
    lastName: 'Sawyer',
  },
  {
    firstName: 'Hudson',
    lastName: 'Hext',
  },
  {
    firstName: 'Alden',
    lastName: 'Senior',
  },
  {
    firstName: 'Tory',
    lastName: 'Hyland',
  },
  {
    firstName: 'Constance',
    lastName: 'Josephs',
  },
  {
    firstName: 'Larry',
    lastName: 'Kinsley',
  },
])

const search = shallowRef('')
const filterBy = shallowRef('both')
const keys = computed(() => {
  if (filterBy.value === 'first')
    return ['firstName']
  else if (filterBy.value === 'last')
    return ['lastName']
  else return ['firstName', 'lastName']
})

const resultLimit = shallowRef<number | undefined>(undefined)
const resultLimitString = shallowRef<string>('')
watch(resultLimitString, () => {
  if (resultLimitString.value === '') {
    resultLimit.value = undefined
  }
  else {
    const float = Number.parseFloat(resultLimitString.value)
    if (!Number.isNaN(float)) {
      resultLimit.value = Math.round(float)
      resultLimitString.value = resultLimit.value.toString()
    }
  }
})

const exactMatch = shallowRef(false)
const isCaseSensitive = shallowRef(false)
const matchAllWhenSearchEmpty = shallowRef(true)

const options = computed<UseFuseOptions<DataItem>>(() => ({
  fuseOptions: {
    keys: keys.value,
    isCaseSensitive: isCaseSensitive.value,
    threshold: exactMatch.value ? 0 : undefined,
  },
  resultLimit: resultLimit.value,
  matchAllWhenSearchEmpty: matchAllWhenSearchEmpty.value,
}))

const { results } = useFuse(search, data, options)
<\/script>

<template>
  <div>
    <input v-model="search" placeholder="Search for someone..." type="text" w-full>
    <div flex flex-wrap>
      <div bg="dark:dark-300 light-700" mr-2 border="1 light-900 dark:dark-700" rounded relative flex items-center>
        <i i-carbon-filter absolute left-2 opacity-70 />
        <select v-model="filterBy" px-8 bg-transparent>
          <option bg="dark:dark-300 light-700" value="both">
            Full Name
          </option>
          <option bg="dark:dark-300 light-700" value="first">
            First Name
          </option>
          <option bg="dark:dark-300 light-700" value="last">
            Last Name
          </option>
        </select>
        <i i-carbon-chevron-down absolute right-2 pointer-events-none opacity-70 />
      </div>
      <span flex-1 />
      <div flex flex-row flex-wrap gap-x-4>
        <label class="checkbox">
          <input v-model="exactMatch" type="checkbox">
          <span>Exact Match</span>
        </label>
        <label class="checkbox">
          <input v-model="isCaseSensitive" type="checkbox">
          <span>Case Sensitive</span>
        </label>
        <label class="checkbox">
          <input v-model="matchAllWhenSearchEmpty" type="checkbox">
          <span>Match all when empty</span>
        </label>
      </div>
    </div>
  </div>
  <div mt-4>
    <template v-if="results.length > 0">
      <div v-for="result in results" :key="result.item.firstName + result.item.lastName" py-2>
        <div flex flex-col>
          <span>
            {{ result.item.firstName }} {{ result.item.lastName }}
          </span>
          <span text-sm opacity-50>
            Score Index: {{ result.refIndex }}
          </span>
        </div>
      </div>
    </template>
    <template v-else>
      <div text-center pt-8 pb-4 opacity-80>
        No Results Found
      </div>
    </template>
  </div>
</template>

<style scoped lang="postcss">
input {
  --tw-ring-offset-width: 1px !important;
  --tw-ring-color: #8885 !important;
  --tw-ring-offset-color: transparent !important;
}

.checkbox {
  @apply inline-flex items-center my-auto cursor-pointer select-none;
}

.checkbox input {
  appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  @apply bg-gray-400/30;
  @apply rounded-md h-4 w-4 select-none;
}

.checkbox input:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

.checkbox span {
  @apply ml-1.5 text-13px opacity-70;
}
</style>
`,ts={class:"demo-source-link"},es=["href"],ys=JSON.parse('{"title":"useFuse","description":"","frontmatter":{"category":"@Integrations"},"headers":[],"relativePath":"integrations/useFuse/index.md","filePath":"integrations/useFuse/index.md","lastUpdated":1739784586000}'),ns={name:"integrations/useFuse/index.md"},us=Object.assign(ns,{setup(f){const h=q({template:{value:{welcomeSFC:as}}}).serialize();return(k,a)=>{const r=R,e=I,l=w,o=S;return A(),c("div",null,[a[1]||(a[1]=s("h1",{id:"usefuse",tabindex:"-1"},[i("useFuse "),s("a",{class:"header-anchor",href:"#usefuse","aria-label":"Permalink to “useFuse”"},"​")],-1)),m(r,{fn:"useFuse"}),a[2]||(a[2]=s("p",null,[i("使用 "),s("a",{href:"https://github.com/krisk/fuse",target:"_blank",rel:"noreferrer"},"Fuse.js"),i(" 组合式轻松实现模糊搜索。")],-1)),a[3]||(a[3]=s("p",null,"来自 Fuse.js 网站的介绍：",-1)),a[4]||(a[4]=s("blockquote",null,[s("p",null,"什么是模糊搜索？"),s("p",null,"通常情况下，模糊搜索 (更正式地称为近似字符串匹配) 是一种找到与给定模式大致相等的字符串的技术 (而不是完全相等)。")],-1)),a[5]||(a[5]=s("h2",{id:"示例",tabindex:"-1"},[i("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),m(e,null,{default:J(()=>[s("p",ts,[a[0]||(a[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/integrations/useFuse/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${N(h)}`,target:"_blank"},"playground (beta)",8,es)]),m(is)]),_:1}),a[6]||(a[6]=C("",11)),a[7]||(a[7]=s("details",null,[s("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),s("div",{class:"language-typescript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," FuseOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," IFuseOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseFuseOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  fuseOptions"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"FuseOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  resultLimit"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  matchAllWhenSearchEmpty"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useFuse"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  search"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  data"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]>,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseFuseOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">>,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  fuse"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Ref"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      search"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": <"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"R"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," = "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"        pattern"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Expression"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"        options"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"FuseSearchOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      ) => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"FuseResult"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"R"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">[]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      setCollection"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": (")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"        docs"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"readonly"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"        index"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"FuseIndex"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"> | "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      ) => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      add"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"doc"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      remove"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"predicate"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"doc"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"idx"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      removeAt"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"idx"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      getIndex"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"FuseIndex"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    | "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Fuse"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    | {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"        search"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": <"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"R"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," = "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          pattern"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Expression"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          options"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"FuseSearchOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        ) => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"FuseResult"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"R"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">[]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"        setCollection"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": (")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          docs"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"readonly"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          index"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"FuseIndex"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"> | "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        ) => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"        add"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"doc"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"        remove"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": (")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"          predicate"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"doc"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"idx"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        ) => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"        removeAt"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"idx"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"        getIndex"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"FuseIndex"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  >")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  results"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"FuseResult"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"DataItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">[]>")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseFuseReturn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ReturnType"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"typeof"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," useFuse"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])])])],-1)),a[8]||(a[8]=C("",3)),m(l,{fn:"useFuse"}),a[9]||(a[9]=s("h2",{id:"更新日志",tabindex:"-1"},[i("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),m(o,{fn:"useFuse"})])}}});export{ys as __pageData,us as default};

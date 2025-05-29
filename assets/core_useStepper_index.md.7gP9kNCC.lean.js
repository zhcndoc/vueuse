import{_ as U,a as j}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as L}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as $}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{r as x,A as c,d as M,D as I,i as d,o as g,j as s,F as J,O as z,t as f,H as p,k as u,a2 as o,a5 as v,ad as F,al as E,V as H,Z as Y,g as A,Y as S,y as i,w as Z}from"./chunks/vue.BjJVtbJX.js";import"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";function q(B,l){const t=x(B),k=c(()=>Array.isArray(t.value)?t.value:Object.keys(t.value)),n=x(k.value.indexOf(k.value[0])),y=c(()=>D(n.value)),a=c(()=>n.value===0),e=c(()=>n.value===k.value.length-1),r=c(()=>k.value[n.value+1]),m=c(()=>k.value[n.value-1]);function D(h){return Array.isArray(t.value)?t.value[h]:t.value[k.value[h]]}function _(h){if(k.value.includes(h))return D(k.value.indexOf(h))}function b(h){k.value.includes(h)&&(n.value=k.value.indexOf(h))}function T(){e.value||n.value++}function N(){a.value||n.value--}function V(h){C(h)&&b(h)}function P(h){return k.value.indexOf(h)===n.value+1}function R(h){return k.value.indexOf(h)===n.value-1}function O(h){return k.value.indexOf(h)===n.value}function w(h){return n.value<k.value.indexOf(h)}function C(h){return n.value>k.value.indexOf(h)}return{steps:t,stepNames:k,index:n,current:y,next:r,previous:m,isFirst:a,isLast:e,at:D,get:_,goTo:b,goToNext:T,goToPrevious:N,goBackTo:V,isNext:P,isPrevious:R,isCurrent:O,isBefore:w,isAfter:C}}const G={class:"flex gap-2 justify-center"},K=["disabled","onClick","textContent"],Q=["textContent"],W={class:"flex flex-col justify-center gap-2 mt-2"},X={key:0},ss={key:1},is={key:2},as={key:3},ns=["disabled"],ts=["disabled"],ls={class:"flex flex-col gap-4 mt-12"},es={class:"w-full px-4 py-2 rounded border border-main space-y-2 overflow-auto h-full"},hs=["textContent"],ks={class:"w-full px-4 py-2 rounded border border-main space-y-2 overflow-auto h-full"},ps=["textContent"],rs=M({__name:"demo",setup(B){const l=I({firstName:"Jon",lastName:"",billingAddress:"",contractAccepted:!1,carbonOffsetting:!1,payment:"credit-card"}),t=q({"user-information":{title:"User information",isValid:()=>l.firstName&&l.lastName},"billing-address":{title:"Billing address",isValid:()=>{var y;return((y=l.billingAddress)==null?void 0:y.trim())!==""}},terms:{title:"Terms",isValid:()=>l.contractAccepted===!0},payment:{title:"Payment",isValid:()=>["credit-card","paypal"].includes(l.payment)}});function k(){t.current.value.isValid()&&t.goToNext()}function n(y){return!Array.from({length:y},()=>null).some((a,e)=>{var r;return!((r=t.at(e))!=null&&r.isValid())})}return(y,a)=>(g(),d("div",null,[s("div",G,[(g(!0),d(J,null,z(p(t).steps.value,(e,r,m)=>(g(),d("div",{key:r,class:""},[s("button",{disabled:!n(m)&&p(t).isBefore(r),onClick:D=>p(t).goTo(r),textContent:f(e.title)},null,8,K)]))),128))]),s("form",{class:"mt-10",onSubmit:H(k,["prevent"])},[s("span",{class:"text-lg font-bold",textContent:f(p(t).current.value.title)},null,8,Q),s("div",W,[s("div",null,[p(t).isCurrent("user-information")?(g(),d("div",X,[a[7]||(a[7]=s("span",null,"姓氏：",-1)),o(s("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>l.lastName=e),class:"!mt-0.5",type:"text"},null,512),[[v,l.lastName]]),a[8]||(a[8]=s("span",null,"名字：",-1)),o(s("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>l.firstName=e),class:"!mt-0.5",type:"text"},null,512),[[v,l.firstName]])])):u("",!0),p(t).isCurrent("billing-address")?(g(),d("div",ss,[o(s("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>l.billingAddress=e),type:"text"},null,512),[[v,l.billingAddress]])])):u("",!0),p(t).isCurrent("terms")?(g(),d("div",is,[s("div",null,[o(s("input",{id:"carbon-offsetting","onUpdate:modelValue":a[3]||(a[3]=e=>l.carbonOffsetting=e),type:"checkbox",class:"mr-2"},null,512),[[F,l.carbonOffsetting]]),a[9]||(a[9]=s("label",{for:"carbon-offsetting"},"我同意支付碳抵消费用",-1))]),s("div",null,[o(s("input",{id:"contract","onUpdate:modelValue":a[4]||(a[4]=e=>l.contractAccepted=e),type:"checkbox",class:"mr-2"},null,512),[[F,l.contractAccepted]]),a[10]||(a[10]=s("label",{for:"contract"},"我接受合同条款",-1))])])):u("",!0),p(t).isCurrent("payment")?(g(),d("div",as,[s("div",null,[o(s("input",{id:"credit-card","onUpdate:modelValue":a[5]||(a[5]=e=>l.payment=e),type:"radio",class:"mr-2",value:"credit-card"},null,512),[[E,l.payment]]),a[11]||(a[11]=s("label",{for:"credit-card"},"信用卡",-1))]),s("div",null,[o(s("input",{id:"paypal","onUpdate:modelValue":a[6]||(a[6]=e=>l.payment=e),type:"radio",class:"mr-2",value:"paypal"},null,512),[[E,l.payment]]),a[12]||(a[12]=s("label",{for:"paypal"},"PayPal",-1))])])):u("",!0)]),s("div",null,[p(t).isLast.value?u("",!0):(g(),d("button",{key:0,disabled:!p(t).current.value.isValid()}," 下一步 ",8,ns)),p(t).isLast.value?(g(),d("button",{key:1,disabled:!p(t).current.value.isValid()}," 提交 ",8,ts)):u("",!0)])])],32),s("div",ls,[s("div",es,[a[13]||(a[13]=s("span",{class:"font-bold"},"表单",-1)),s("pre",{textContent:f(l)},null,8,hs)]),s("div",ks,[a[14]||(a[14]=s("span",{class:"font-bold"},"向导",-1)),s("pre",{textContent:f(p(t))},null,8,ps)])])]))}}),ds=`<script setup lang="ts">
import { useStepper } from '@vueuse/core'
import { reactive } from 'vue'

const form = reactive({
  firstName: 'Jon',
  lastName: '',
  billingAddress: '',
  contractAccepted: false,
  carbonOffsetting: false,
  payment: 'credit-card' as 'paypal' | 'credit-card',
})

const stepper = useStepper({
  'user-information': {
    title: 'User information',
    isValid: () => form.firstName && form.lastName,
  },
  'billing-address': {
    title: 'Billing address',
    isValid: () => form.billingAddress?.trim() !== '',
  },
  'terms': {
    title: 'Terms',
    isValid: () => form.contractAccepted === true,
  },
  'payment': {
    title: 'Payment',
    isValid: () => ['credit-card', 'paypal'].includes(form.payment),
  },
})

function submit() {
  if (stepper.current.value.isValid())
    stepper.goToNext()
}

function allStepsBeforeAreValid(index: number): boolean {
  return !Array.from({ length: index }, () => null)
    .some((_, i) => !stepper.at(i)?.isValid())
}
<\/script>

<template>
  <div>
    <div class="flex gap-2 justify-center">
      <div v-for="(step, id, i) in stepper.steps.value" :key="id" class="">
        <button
          :disabled="!allStepsBeforeAreValid(i) && stepper.isBefore(id)"
          @click="stepper.goTo(id)"
          v-text="step.title"
        />
      </div>
    </div>

    <form class="mt-10" @submit.prevent="submit">
      <span class="text-lg font-bold" v-text="stepper.current.value.title" />
      <div class="flex flex-col justify-center gap-2 mt-2">
        <div>
          <div v-if="stepper.isCurrent('user-information')">
            <span>姓氏：</span>
            <input v-model="form.lastName" class="!mt-0.5" type="text">
            <span>名字：</span>
            <input v-model="form.firstName" class="!mt-0.5" type="text">
          </div>

          <div v-if="stepper.isCurrent('billing-address')">
            <input v-model="form.billingAddress" type="text">
          </div>

          <div v-if="stepper.isCurrent('terms')">
            <div>
              <input id="carbon-offsetting" v-model="form.carbonOffsetting" type="checkbox" class="mr-2">
              <label for="carbon-offsetting">我同意支付碳抵消费用</label>
            </div>
            <div>
              <input id="contract" v-model="form.contractAccepted" type="checkbox" class="mr-2">
              <label for="contract">我接受合同条款</label>
            </div>
          </div>

          <div v-if="stepper.isCurrent('payment')">
            <div>
              <input id="credit-card" v-model="form.payment" type="radio" class="mr-2" value="credit-card">
              <label for="credit-card">信用卡</label>
            </div>
            <div>
              <input id="paypal" v-model="form.payment" type="radio" class="mr-2" value="paypal">
              <label for="paypal">PayPal</label>
            </div>
          </div>
        </div>

        <div>
          <button v-if="!stepper.isLast.value" :disabled="!stepper.current.value.isValid()">
            下一步
          </button>
          <button v-if="stepper.isLast.value" :disabled="!stepper.current.value.isValid()">
            提交
          </button>
        </div>
      </div>
    </form>

    <div class="flex flex-col gap-4 mt-12">
      <div class="w-full px-4 py-2 rounded border border-main space-y-2 overflow-auto h-full">
        <span class="font-bold">表单</span>
        <pre v-text="form" />
      </div>

      <div class="w-full px-4 py-2 rounded border border-main space-y-2 overflow-auto h-full">
        <span class="font-bold">向导</span>
        <pre v-text="stepper" />
      </div>
    </div>
  </div>
</template>
`,gs={class:"demo-source-link"},ys=["href"],ms=JSON.parse('{"title":"useStepper","description":"","frontmatter":{"category":"Utilities"},"headers":[],"relativePath":"core/useStepper/index.md","filePath":"core/useStepper/index.md","lastUpdated":1715934697000}'),os={name:"core/useStepper/index.md"},vs=Object.assign(os,{setup(B){const t=Y({template:{value:{welcomeSFC:ds}}}).serialize();return(k,n)=>{const y=$,a=L,e=U,r=j;return g(),d("div",null,[n[1]||(n[1]=s("h1",{id:"usestepper",tabindex:"-1"},[i("useStepper "),s("a",{class:"header-anchor",href:"#usestepper","aria-label":"Permalink to “useStepper”"},"​")],-1)),A(y,{fn:"useStepper"}),n[2]||(n[2]=s("p",null,"提供构建多步骤向导界面的辅助工具。",-1)),n[3]||(n[3]=s("h2",{id:"示例",tabindex:"-1"},[i("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),A(a,null,{default:Z(()=>[s("p",gs,[n[0]||(n[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useStepper/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${p(t)}`,target:"_blank"},"playground (beta)",8,ys)]),A(rs)]),_:1}),n[4]||(n[4]=S("",6)),n[5]||(n[5]=s("details",null,[s("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),s("div",{class:"language-typescript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseStepperReturn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StepName"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Steps"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Step"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 步骤列表。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  steps"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Readonly"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Ref"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Steps"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">>")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 步骤名称列表。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  stepNames"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Readonly"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Ref"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StepName"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]>>")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 当前步骤的索引。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  index"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Ref"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 当前步骤。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  current"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Step"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 下一个步骤，如果当前步骤是最后一个则为 undefined。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  next"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StepName"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 上一个步骤，如果当前步骤是第一个则为 undefined。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  previous"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StepName"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 当前步骤是否为第一个。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  isFirst"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 当前步骤是否为最后一个。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  isLast"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 获取指定索引处的步骤。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  at"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"index"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Step"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 根据指定名称获取步骤。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  get"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"step"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StepName"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Step"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 跳转至指定步骤。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  goTo"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"step"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StepName"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 跳转至下一个步骤。如果当前步骤是最后一个，则不执行任何操作。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  goToNext"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 跳转至上一个步骤。如果当前步骤是第一个，则不执行任何操作。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  goToPrevious"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 回到给定步骤，仅当当前步骤在之后时执行。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  goBackTo"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"step"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StepName"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 检查给定步骤是否为下一个步骤。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  isNext"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"step"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StepName"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 检查给定步骤是否为上一个步骤。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  isPrevious"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"step"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StepName"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 检查给定步骤是否为当前步骤。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  isCurrent"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"step"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StepName"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 检查当前步骤是否在给定步骤之前。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  isBefore"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"step"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StepName"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /** 检查当前步骤是否在给定步骤之后。 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  isAfter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"step"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StepName"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useStepper"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  steps"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]>,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  initialStep"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseStepperReturn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[],"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useStepper"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Record"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," any"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">>(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  steps"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  initialStep"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"keyof"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseStepperReturn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Exclude"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"keyof"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," symbol"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"keyof"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]>")])])])])],-1)),n[6]||(n[6]=S("",3)),A(e,{fn:"useStepper"}),n[7]||(n[7]=s("h2",{id:"更新日志",tabindex:"-1"},[i("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),A(r,{fn:"useStepper"})])}}});export{ms as __pageData,vs as default};

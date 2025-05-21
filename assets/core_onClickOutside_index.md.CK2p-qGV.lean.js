import{_ as C,a as f}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as v}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{d as E,z as D,a1 as b,i as d,o as g,F,j as s,k as c,a2 as O,V as _,H as B,y as i,Z as x,g as p,Y as A,w}from"./chunks/vue.DQfvmmyQ.js";import{o}from"./chunks/index.D_D4rQ2Q.js";import{_ as R}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/index.DK97_WvT.js";import"./chunks/general.CGRH32nb.js";const y=new WeakMap,T={mounted(h,n){const e=!n.modifiers.bubble;let k;if(typeof n.value=="function")k=o(h,n.value,{capture:e});else{const[a,t]=n.value;k=o(h,a,Object.assign({capture:e},t))}y.set(h,k)},unmounted(h){const n=y.get(h);n&&typeof n=="function"?n():n==null||n.stop(),y.delete(h)}},q={class:"ml-2 relative inline-block"},P={key:0,class:"dropdown-inner"},H={class:"inner"},I=E({__name:"demo",setup(h){const n=D(!1),e=b("modalRef");o(e,t=>{console.log(t),n.value=!1});const k=D(!1),a=t=>{console.log(t),k.value=!1};return(t,l)=>(g(),d(F,null,[s("button",{onClick:l[0]||(l[0]=r=>n.value=!0)}," 打开模态框 "),s("div",q,[s("button",{onClick:l[1]||(l[1]=_(r=>k.value=!k.value,["stop"]))}," 切换下拉列表 "),k.value?O((g(),d("div",P,l[3]||(l[3]=[i(" 单击下拉列表外部将其关闭 ")]))),[[B(T),a,void 0,{bubble:!0}]]):c("",!0)]),n.value?(g(),d("div",{key:0,ref_key:"modalRef",ref:e,class:"modal"},[s("div",H,[s("button",{class:"button small",title:"Close",onClick:l[2]||(l[2]=r=>n.value=!1)}," 𝖷 "),l[4]||(l[4]=s("p",{class:"heading"}," Demo Modal ",-1)),l[5]||(l[5]=s("p",null,"单击模态框外部将其关闭",-1))])],512)):c("",!0)],64))}}),M=R(I,[["__scopeId","data-v-aac1f4b1"]]),S=`<script setup lang="ts">
import type { OnClickOutsideHandler } from '@vueuse/core'
import { vOnClickOutside } from '@vueuse/components'
import { onClickOutside } from '@vueuse/core'
import { shallowRef, useTemplateRef } from 'vue'

const modal = shallowRef(false)
const modalRef = useTemplateRef('modalRef')

onClickOutside(
  modalRef,
  (event) => {
    console.log(event)
    modal.value = false
  },
)

const dropdown = shallowRef(false)
const dropdownHandler: OnClickOutsideHandler = (event) => {
  console.log(event)
  dropdown.value = false
}
<\/script>

<template>
  <button @click="modal = true">
    打开模态框
  </button>
  <div class="ml-2 relative inline-block">
    <button @click.stop="dropdown = !dropdown">
      切换下拉列表
    </button>
    <div
      v-if="dropdown"
      v-on-click-outside.bubble="dropdownHandler"
      class="dropdown-inner"
    >
      单击下拉列表外部将其关闭
    </div>
  </div>
  <div v-if="modal" ref="modalRef" class="modal">
    <div class="inner">
      <button class="button small" title="Close" @click="modal = false">
        𝖷
      </button>
      <p class="heading">
        Demo Modal
      </p>
      <p>单击模态框外部将其关闭</p>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  max-width: 100%;
  z-index: 10;
}
.inner {
  background-color: var(--vp-c-bg);
  padding: 0.4em 2em;
  border-radius: 5px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 2px 2px 10px rgba(10, 10, 10, 0.1);
}
.dropdown-inner {
  background-color: var(--vp-c-bg);
  padding: 0.5em;
  position: absolute;
  left: 0;
  z-index: 10;
  border-radius: 5px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 2px 2px 5px rgba(10, 10, 10, 0.1);
}
.heading {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 2rem;
}
.button {
  position: absolute;
  top: -0.9rem;
  right: -0.5rem;
  font-weight: bold;
}
</style>
`,$={class:"demo-source-link"},V=["href"],X=JSON.parse('{"title":"onClickOutside","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/onClickOutside/index.md","filePath":"core/onClickOutside/index.md","lastUpdated":1739784586000}'),N={name:"core/onClickOutside/index.md"},ss=Object.assign(N,{setup(h){const e=x({template:{value:{welcomeSFC:S}}}).serialize();return(k,a)=>{const t=v,l=m,r=C,u=f;return g(),d("div",null,[a[1]||(a[1]=s("h1",{id:"onclickoutside",tabindex:"-1"},[i("onClickOutside "),s("a",{class:"header-anchor",href:"#onclickoutside","aria-label":"Permalink to “onClickOutside”"},"​")],-1)),p(t,{fn:"onClickOutside"}),a[2]||(a[2]=s("p",null,"监听元素外的点击事件。适用于模态框或下拉菜单等场景。",-1)),a[3]||(a[3]=s("h2",{id:"示例",tabindex:"-1"},[i("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),p(l,null,{default:w(()=>[s("p",$,[a[0]||(a[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/onClickOutside/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${B(e)}`,target:"_blank"},"playground (beta)",8,V)]),p(M)]),_:1}),a[4]||(a[4]=A("",11)),a[5]||(a[5]=s("details",null,[s("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),s("div",{class:"language-typescript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," OnClickOutsideOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Controls"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," false"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"  extends"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," ConfigurableWindow"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 不应触发事件的元素列表。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  ignore"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<("),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeElementRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")[]>")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 对内部事件侦听器使用捕获阶段。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  capture"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 如果焦点移动到iframe，运行处理函数。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," false")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  detectIframe"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * Use controls to cancel/trigger listener.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," false")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  controls"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Controls")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," OnClickOutsideHandler"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"  T"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    detectIframe"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"OnClickOutsideOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"detectIframe"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    controls"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    detectIframe"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"false")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    controls"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"false")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," (")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  event"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"controls"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"] "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"extends"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    ?")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        | "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Event")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        | ("),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"detectIframe"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"] "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"extends"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"            ?"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," PointerEvent"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"FocusEvent")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"            :"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," PointerEvent"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    :"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"detectIframe"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"] "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"extends"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"      ?"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," PointerEvent"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"FocusEvent")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"      :"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," PointerEvent"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"/**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * 监听元素外部的点击事件。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://vueuse.org/onClickOutside")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," target"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," 目标元素")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," handler"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," 事件处理器")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," options"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," 配置选项")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," onClickOutside"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  target"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeElementRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  handler"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"OnClickOutsideHandler"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    detectIframe"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"OnClickOutsideOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"detectIframe"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    controls"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }>,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"OnClickOutsideOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"true"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  stop"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Fn")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  cancel"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Fn")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  trigger"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"event"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Event"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," onClickOutside"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  target"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeElementRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  handler"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"OnClickOutsideHandler"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    detectIframe"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"OnClickOutsideOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"detectIframe"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    controls"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"false")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }>,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"OnClickOutsideOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"false"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Fn")])])])])],-1)),a[6]||(a[6]=A("",3)),p(r,{fn:"onClickOutside"}),a[7]||(a[7]=s("h2",{id:"更新日志",tabindex:"-1"},[i("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),p(u,{fn:"onClickOutside"})])}}});export{X as __pageData,ss as default};

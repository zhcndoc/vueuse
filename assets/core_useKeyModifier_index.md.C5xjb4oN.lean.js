import{_ as f,a as B}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as C}from"./chunks/CourseLink.vue_vue_type_script_setup_true_lang.H_m2NBz-.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{g as v}from"./chunks/metadata.ByJC-ruD.js";import{u as _}from"./chunks/index.qy4VQT1o.js";import{z as K,d as u,i as A,o as D,g as e,H as a,w as h,y as n,h as M,Z as E,j as t,Y as x}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/general.tY1gtZD0.js";const F=["mousedown","mouseup","keydown","keyup"];function p(y,g={}){const{events:r=F,document:d=v,initial:s=null}=g,k=K(s);return d&&r.forEach(o=>{_(d,o,l=>{typeof l.getModifierState=="function"&&(k.value=l.getModifierState(y))},{passive:!0})}),k}const L={class:"grid grid-cols-1 md:grid-cols-3 gap-2"},S=u({__name:"demo",setup(y){const g=p("CapsLock"),r=p("NumLock"),d=p("ScrollLock"),s=p("Shift"),k=p("Control"),o=p("Alt"),l=u({props:{value:{type:Boolean,required:!0}},render(){return M("div",{class:["font-mono px-4 py-2 rounded",this.value?"opacity-100 text-primary bg-primary bg-opacity-15":"opacity-50 bg-gray-600 bg-opacity-10 dark:bg-gray-400 dark:bg-opacity-10"]},this.$slots.default?.())}});return(c,i)=>(D(),A("div",L,[e(a(l),{value:a(g)||!1},{default:h(()=>i[0]||(i[0]=[n(" 大写锁定 ",-1)])),_:1,__:[0]},8,["value"]),e(a(l),{value:a(r)||!1},{default:h(()=>i[1]||(i[1]=[n(" 数字锁定 ",-1)])),_:1,__:[1]},8,["value"]),e(a(l),{value:a(d)||!1},{default:h(()=>i[2]||(i[2]=[n(" 滚动锁定 ",-1)])),_:1,__:[2]},8,["value"]),e(a(l),{value:a(s)||!1},{default:h(()=>i[3]||(i[3]=[n(" Shift ",-1)])),_:1,__:[3]},8,["value"]),e(a(l),{value:a(k)||!1},{default:h(()=>i[4]||(i[4]=[n(" Ctrl ",-1)])),_:1,__:[4]},8,["value"]),e(a(l),{value:a(o)||!1},{default:h(()=>i[5]||(i[5]=[n(" Alt ",-1)])),_:1,__:[5]},8,["value"])]))}}),q=`<script setup lang="ts">
import { useKeyModifier } from '@vueuse/core'
import { defineComponent, h } from 'vue'

const capsLock = useKeyModifier('CapsLock')
const numLock = useKeyModifier('NumLock')
const scrollLock = useKeyModifier('ScrollLock')
const shift = useKeyModifier('Shift')
const control = useKeyModifier('Control')
const alt = useKeyModifier('Alt')

const Key = defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  render() {
    return h('div', {
      class: [
        'font-mono px-4 py-2 rounded',
        this.value
          ? 'opacity-100 text-primary bg-primary bg-opacity-15'
          : 'opacity-50 bg-gray-600 bg-opacity-10 dark:bg-gray-400 dark:bg-opacity-10',
      ],
    }, this.$slots.default?.())
  },
})
<\/script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
    <Key :value="capsLock || false">
      大写锁定
    </Key>
    <Key :value="numLock || false">
      数字锁定
    </Key>
    <Key :value="scrollLock || false">
      滚动锁定
    </Key>
    <Key :value="shift || false">
      Shift
    </Key>
    <Key :value="control || false">
      Ctrl
    </Key>
    <Key :value="alt || false">
      Alt
    </Key>
  </div>
</template>
`,w={class:"demo-source-link"},P=["href"],G=JSON.parse('{"title":"useKeyModifier","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useKeyModifier/index.md","filePath":"core/useKeyModifier/index.md","lastUpdated":1715934697000}'),I={name:"core/useKeyModifier/index.md"},H=Object.assign(I,{setup(y){const r=E({template:{value:{welcomeSFC:q}}}).serialize();return(d,s)=>{const k=b,o=C,l=m,c=f,i=B;return D(),A("div",null,[s[2]||(s[2]=t("h1",{id:"usekeymodifier",tabindex:"-1"},[n("useKeyModifier "),t("a",{class:"header-anchor",href:"#usekeymodifier","aria-label":"Permalink to “useKeyModifier”"},"​")],-1)),e(k,{fn:"useKeyModifier"}),s[3]||(s[3]=t("p",null,[n("响应式地跟踪"),t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState",target:"_blank",rel:"noreferrer"},"修饰键状态"),n("。跟踪任何"),t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState#browser_compatibility",target:"_blank",rel:"noreferrer"},"支持的修饰键"),n("的状态 - 请参阅浏览器兼容性说明。")],-1)),e(o,{href:"https://vueschool.io/lessons/alt-drag-to-clone-tasks?friend=vueuse"},{default:h(()=>s[0]||(s[0]=[n("通过 Vue School 的这个免费视频课程来学习 useKeyModifier！",-1)])),_:1,__:[0]}),s[4]||(s[4]=t("h2",{id:"示例",tabindex:"-1"},[n("示例 "),t("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),e(l,null,{default:h(()=>[t("p",w,[s[1]||(s[1]=t("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useKeyModifier/demo.vue",target:"_blank"},"源码",-1)),t("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${a(r)}`,target:"_blank"},"playground (beta)",8,P)]),e(S)]),_:1}),s[5]||(s[5]=x("",13)),e(c,{fn:"useKeyModifier"}),s[6]||(s[6]=t("h2",{id:"更新日志",tabindex:"-1"},[n("更新日志 "),t("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),e(i,{fn:"useKeyModifier"})])}}});export{G as __pageData,H as default};

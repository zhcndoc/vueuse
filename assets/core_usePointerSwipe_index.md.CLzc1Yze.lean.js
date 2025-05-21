import{_ as O,a as j}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as Y}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as H}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{D as W,A as v,z as f,G as w,E as q,i as F,o as x,j as i,d as G,y as s,g as A,n as J,q as Z,H as V,Z as K,Y as I,w as Q}from"./chunks/vue.DQfvmmyQ.js";import{t as ii}from"./chunks/index.CyaQpZZu.js";import{t as si}from"./chunks/index.DG0WMUxM.js";import{u as C}from"./chunks/index.DK97_WvT.js";import"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/general.CGRH32nb.js";function ai(g,h={}){const k=ii(g),{threshold:y=50,onSwipe:a,onSwipeEnd:n,onSwipeStart:c,disableTextSelect:d=!1}=h,r=W({x:0,y:0}),u=(e,t)=>{r.x=e,r.y=t},l=W({x:0,y:0}),m=(e,t)=>{l.x=e,l.y=t},B=v(()=>r.x-l.x),b=v(()=>r.y-l.y),{max:z,abs:E}=Math,T=v(()=>z(E(B.value),E(b.value))>=y),D=f(!1),_=f(!1),R=v(()=>T.value?E(B.value)>E(b.value)?B.value>0?"left":"right":b.value>0?"up":"down":"none"),S=e=>{var o;const t=e.buttons===0,p=e.buttons===1;return((o=h.pointerTypes)==null?void 0:o.includes(e.pointerType))??(t||p)??!0},P={passive:!0},L=[C(g,"pointerdown",e=>{if(!S(e))return;_.value=!0;const t=e.target;t==null||t.setPointerCapture(e.pointerId);const{clientX:p,clientY:o}=e;u(p,o),m(p,o),c==null||c(e)},P),C(g,"pointermove",e=>{if(!S(e)||!_.value)return;const{clientX:t,clientY:p}=e;m(t,p),!D.value&&T.value&&(D.value=!0),D.value&&(a==null||a(e))},P),C(g,"pointerup",e=>{S(e)&&(D.value&&(n==null||n(e,R.value)),_.value=!1,D.value=!1)},P)];si(()=>{var e,t,p,o,M,U,X,$;(t=(e=k.value)==null?void 0:e.style)==null||t.setProperty("touch-action","pan-y"),d&&((o=(p=k.value)==null?void 0:p.style)==null||o.setProperty("-webkit-user-select","none"),(U=(M=k.value)==null?void 0:M.style)==null||U.setProperty("-ms-user-select","none"),($=(X=k.value)==null?void 0:X.style)==null||$.setProperty("user-select","none"))});const N=()=>L.forEach(e=>e());return{isSwiping:w(D),direction:w(R),posStart:w(r),posEnd:w(l),distanceX:B,distanceY:b,stop:N}}const ei={style:{display:"inline-block"},viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function ti(g,h){return x(),F("svg",ei,h[0]||(h[0]=[i("path",{fill:"currentColor",d:"M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"},null,-1)]))}const ni=q({name:"mdi-arrow-right",render:ti}),li={class:"flex text-white items-center"},hi=G({__name:"demo",setup(g){const h=f(null),k=f(null),y=v(()=>{var u;return(u=k.value)==null?void 0:u.offsetWidth}),a=f("0"),n=f(1);function c(){a.value="0",n.value=1}const{distanceX:d,isSwiping:r}=ai(h,{disableTextSelect:!0,onSwipe(u){if(y.value)if(d.value<0){const l=Math.abs(d.value);a.value=`${l}px`,n.value=1.25-l/y.value}else a.value="0",n.value=1},onSwipeEnd(u,l){d.value<0&&y.value&&Math.abs(d.value)/y.value>=.5?(a.value="100%",n.value=0):(a.value="0",n.value=1)}});return(u,l)=>{const m=ni;return x(),F("div",{ref_key:"container",ref:k,class:"bg-gray-200 rounded relative w-full h-[80px] m-auto flex items-center justify-center overflow-hidden"},[i("button",{onClick:c}," 重置 "),i("div",{ref_key:"target",ref:h,class:Z(["absolute w-full h-full top-0 left-0 bg-[#3eaf7c] flex items-center justify-center",{"transition-all duration-200 ease-linear":!V(r)}]),style:J({left:a.value,opacity:n.value})},[i("p",li,[l[0]||(l[0]=s(" 滑动 ")),A(m)])],6)],512)}}}),ki=`<script setup lang="ts">
import type { UseSwipeDirection } from '@vueuse/core'
import { usePointerSwipe } from '@vueuse/core'
import { computed, shallowRef } from 'vue'

const target = shallowRef<HTMLElement | null>(null)
const container = shallowRef<HTMLElement | null>(null)

const containerWidth = computed(() => container.value?.offsetWidth)

const left = shallowRef('0')
const opacity = shallowRef(1)

function reset() {
  left.value = '0'
  opacity.value = 1
}

const { distanceX, isSwiping } = usePointerSwipe(target, {
  disableTextSelect: true,
  onSwipe(e: PointerEvent) {
    if (containerWidth.value) {
      if (distanceX.value < 0) {
        const distance = Math.abs(distanceX.value)
        left.value = \`\${distance}px\`
        opacity.value = 1.25 - distance / containerWidth.value
      }
      else {
        left.value = '0'
        opacity.value = 1
      }
    }
  },
  onSwipeEnd(e: PointerEvent, direction: UseSwipeDirection) {
    if (distanceX.value < 0 && containerWidth.value && (Math.abs(distanceX.value) / containerWidth.value) >= 0.5) {
      left.value = '100%'
      opacity.value = 0
    }
    else {
      left.value = '0'
      opacity.value = 1
    }
  },
})
<\/script>

<template>
  <div ref="container" class="bg-gray-200 rounded relative w-full h-[80px] m-auto flex items-center justify-center overflow-hidden">
    <button @click="reset">
      重置
    </button>
    <div
      ref="target"
      class="absolute w-full h-full top-0 left-0 bg-[#3eaf7c] flex items-center justify-center"
      :class="{ 'transition-all duration-200 ease-linear': !isSwiping }"
      :style="{ left, opacity }"
    >
      <p class="flex text-white items-center">
        滑动 <mdi-arrow-right />
      </p>
    </div>
  </div>
</template>
`,ri={class:"demo-source-link"},pi=["href"],bi=JSON.parse('{"title":"usePointerSwipe","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/usePointerSwipe/index.md","filePath":"core/usePointerSwipe/index.md","lastUpdated":1737604618000}'),di={name:"core/usePointerSwipe/index.md"},Ei=Object.assign(di,{setup(g){const k=K({template:{value:{welcomeSFC:ki}}}).serialize();return(y,a)=>{const n=H,c=Y,d=O,r=j;return x(),F("div",null,[a[1]||(a[1]=i("h1",{id:"usepointerswipe",tabindex:"-1"},[s("usePointerSwipe "),i("a",{class:"header-anchor",href:"#usepointerswipe","aria-label":"Permalink to “usePointerSwipe”"},"​")],-1)),A(n,{fn:"usePointerSwipe"}),a[2]||(a[2]=i("p",null,[s("基于 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent",target:"_blank",rel:"noreferrer"},"PointerEvents"),s(" 的响应式滑动检测。")],-1)),a[3]||(a[3]=i("h2",{id:"示例",tabindex:"-1"},[s("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),A(c,null,{default:Q(()=>[i("p",ri,[a[0]||(a[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/usePointerSwipe/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${V(k)}`,target:"_blank"},"playground (beta)",8,pi)]),A(hi)]),_:1}),a[4]||(a[4]=I("",3)),a[5]||(a[5]=i("details",null,[i("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),i("div",{class:"language-typescript"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"typescript"),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UsePointerSwipeOptions"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," 50")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 阈值")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  threshold"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 滑动开始时的回调。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  onSwipeStart"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"e"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"PointerEvent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 滑动移动时的回调。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  onSwipe"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"e"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"PointerEvent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 滑动结束时的回调。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  onSwipeEnd"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"e"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"PointerEvent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"direction"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseSwipeDirection"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 要监听的指针类型。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," ['mouse',"),i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," 'touch', 'pen']")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  pointerTypes"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"PointerType"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 在滑动时禁用文本选择。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," false")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  disableTextSelect"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UsePointerSwipeReturn"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"  readonly"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," isSwiping"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  direction"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Readonly"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseSwipeDirection"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"  readonly"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," posStart"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Position")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"  readonly"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," posEnd"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Position")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  distanceX"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Readonly"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  distanceY"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Readonly"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  stop"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"/**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * 基于 PointerEvents 的响应式滑动检测。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://vueuse.org/usePointerSwipe")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," target")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," options")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," usePointerSwipe"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  target"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"HTMLElement"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"null"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UsePointerSwipeOptions"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UsePointerSwipeReturn")])])])])],-1)),a[6]||(a[6]=I("",3)),A(d,{fn:"usePointerSwipe"}),a[7]||(a[7]=i("h2",{id:"更新日志",tabindex:"-1"},[s("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),A(r,{fn:"usePointerSwipe"})])}}});export{bi as __pageData,Ei as default};

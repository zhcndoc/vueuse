import{_ as W,a as V}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as $}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_ as N}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{u as b}from"./chunks/index.DEO4egZK.js";import{D as x,A as B,z as m,d as Y,i as R,o as P,j as i,n as I,q as z,H as D,y as s,t as C,Z as O,g as v,Y as T,w as j}from"./chunks/vue.BjJVtbJX.js";import{_ as q}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/metadata.CHQ7S0zC.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.BsCVlyoA.js";import"./chunks/general.CGRH32nb.js";function H(u,A={}){const{threshold:g=50,onSwipe:k,onSwipeEnd:a,onSwipeStart:n,passive:y=!0}=A,h=x({x:0,y:0}),p=x({x:0,y:0}),l=B(()=>h.x-p.x),d=B(()=>h.y-p.y),{max:o,abs:t}=Math,w=B(()=>o(t(l.value),t(d.value))>=g),c=m(!1),_=B(()=>w.value?t(l.value)>t(d.value)?l.value>0?"left":"right":d.value>0?"up":"down":"none"),S=e=>[e.touches[0].clientX,e.touches[0].clientY],U=(e,r)=>{h.x=e,h.y=r},F=(e,r)=>{p.x=e,p.y=r},f={passive:y,capture:!y},X=e=>{c.value&&(a==null||a(e,_.value)),c.value=!1},M=[b(u,"touchstart",e=>{if(e.touches.length!==1)return;const[r,E]=S(e);U(r,E),F(r,E),n==null||n(e)},f),b(u,"touchmove",e=>{if(e.touches.length!==1)return;const[r,E]=S(e);F(r,E),f.capture&&!f.passive&&Math.abs(l.value)>Math.abs(d.value)&&e.preventDefault(),!c.value&&w.value&&(c.value=!0),c.value&&(k==null||k(e))},f),b(u,["touchend","touchcancel"],X,f)];return{isSwiping:c,direction:_,coordsStart:h,coordsEnd:p,lengthX:l,lengthY:d,stop:()=>M.forEach(e=>e()),isPassiveEventSupported:!0}}const L={class:"status"},G=Y({__name:"demo",setup(u){const A=m(null),g=m(null),k=B(()=>{var o;return(o=g.value)==null?void 0:o.offsetWidth}),a=m("0"),n=m(1);function y(){a.value="0",n.value=1}const{direction:h,isSwiping:p,lengthX:l,lengthY:d}=H(A,{passive:!1,onSwipe(o){if(k.value)if(l.value<0){const t=Math.abs(l.value);a.value=`${t}px`,n.value=1.1-t/k.value}else a.value="0",n.value=1},onSwipeEnd(o,t){l.value<0&&k.value&&Math.abs(l.value)/k.value>=.5?(a.value="100%",n.value=0):(a.value="0",n.value=1)}});return(o,t)=>(P(),R("div",null,[i("div",{ref_key:"container",ref:g,class:"container select-none"},[i("button",{onClick:y}," 重置 "),i("div",{ref_key:"target",ref:A,class:z(["overlay",{animated:!D(p)}]),style:I({left:a.value,opacity:n.value})},t[0]||(t[0]=[i("p",null,"向右滑动",-1)]),6)],512),i("p",L,[s(" 方向："+C(D(h)?D(h):"-")+" ",1),t[1]||(t[1]=i("br",null,null,-1)),s(" 水平长度："+C(D(l))+" | 垂直长度："+C(D(d)),1)])]))}}),J=q(G,[["__scopeId","data-v-a3890d38"]]),Z=`<script setup lang="ts">
import type { UseSwipeDirection } from '@vueuse/core'
import { useSwipe } from '@vueuse/core'
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

const { direction, isSwiping, lengthX, lengthY } = useSwipe(
  target,
  {
    passive: false,
    onSwipe(e: TouchEvent) {
      if (containerWidth.value) {
        if (lengthX.value < 0) {
          const length = Math.abs(lengthX.value)
          left.value = \`\${length}px\`
          opacity.value = 1.1 - length / containerWidth.value
        }
        else {
          left.value = '0'
          opacity.value = 1
        }
      }
    },
    onSwipeEnd(e: TouchEvent, direction: UseSwipeDirection) {
      if (lengthX.value < 0 && containerWidth.value && (Math.abs(lengthX.value) / containerWidth.value) >= 0.5) {
        left.value = '100%'
        opacity.value = 0
      }
      else {
        left.value = '0'
        opacity.value = 1
      }
    },
  },
)
<\/script>

<template>
  <div>
    <div ref="container" class="container select-none">
      <button @click="reset">
        重置
      </button>
      <div ref="target" class="overlay" :class="{ animated: !isSwiping }" :style="{ left, opacity }">
        <p>向右滑动</p>
      </div>
    </div>
    <p class="status">
      方向：{{ direction ? direction : '-' }} <br>
      水平长度：{{ lengthX }} | 垂直长度：{{ lengthY }}
    </p>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  overflow: hidden;
}

.overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #3fb983;
}

.overlay.animated {
  transition: all 0.2s ease-in-out;
}

.overlay > p {
  color: #fff;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
}

.status {
  text-align: center;
}
</style>
`,K={class:"demo-source-link"},Q=["href"],oi=JSON.parse('{"title":"useSwipe","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useSwipe/index.md","filePath":"core/useSwipe/index.md","lastUpdated":1737604618000}'),ii={name:"core/useSwipe/index.md"},gi=Object.assign(ii,{setup(u){const g=O({template:{value:{welcomeSFC:Z}}}).serialize();return(k,a)=>{const n=N,y=$,h=W,p=V;return P(),R("div",null,[a[1]||(a[1]=i("h1",{id:"useswipe",tabindex:"-1"},[s("useSwipe "),i("a",{class:"header-anchor",href:"#useswipe","aria-label":"Permalink to “useSwipe”"},"​")],-1)),v(n,{fn:"useSwipe"}),a[2]||(a[2]=i("p",null,[s("基于 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent",target:"_blank",rel:"noreferrer"},[i("code",null,"TouchEvents")]),s(" 的响应式滑动检测。")],-1)),a[3]||(a[3]=i("h2",{id:"示例",tabindex:"-1"},[s("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),v(y,null,{default:j(()=>[i("p",K,[a[0]||(a[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useSwipe/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${D(g)}`,target:"_blank"},"playground (beta)",8,Q)]),v(J)]),_:1}),a[4]||(a[4]=T("",3)),a[5]||(a[5]=i("details",null,[i("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),i("div",{class:"language-typescript"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"typescript"),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseSwipeDirection"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"up"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"down"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"left"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"right"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"none"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseSwipeOptions"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," ConfigurableWindow"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 将事件注册为被动事件")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," true")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  passive"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," 50")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  threshold"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 滑动开始时的回调函数")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  onSwipeStart"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"e"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"TouchEvent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 滑动过程中的回调函数")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  onSwipe"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"e"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"TouchEvent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 滑动结束时的回调函数")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  onSwipeEnd"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"e"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"TouchEvent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"direction"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseSwipeDirection"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseSwipeReturn"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"deprecated"),i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," No longer need this Vue 3's browser targets all supporting passive event listeners.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * This flag will always return `true` and be removed in the next major version.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  isPassiveEventSupported"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  isSwiping"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  direction"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseSwipeDirection"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  coordsStart"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Readonly"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Position"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  coordsEnd"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Readonly"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Position"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  lengthX"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  lengthY"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  stop"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"/**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * 响应式滑动检测。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://vueuse.org/useSwipe")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," target")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," options")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useSwipe"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  target"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"EventTarget"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"null"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseSwipeOptions"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseSwipeReturn")])])])])],-1)),a[6]||(a[6]=T("",3)),v(h,{fn:"useSwipe"}),a[7]||(a[7]=i("h2",{id:"更新日志",tabindex:"-1"},[s("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),v(p,{fn:"useSwipe"})])}}});export{oi as __pageData,gi as default};

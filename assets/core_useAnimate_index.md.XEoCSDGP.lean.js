import{_ as Y,a as H}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as Q}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{u as J,_ as Z}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{t as G}from"./chunks/index.BstIlBID.js";import{i as X,d as ii,t as si}from"./chunks/metadata.BfYDMb5p.js";import{u as T}from"./chunks/index.C8PB9l6c.js";import{u as w}from"./chunks/index.Biv1Ajcl.js";import{u as ai}from"./chunks/index.rocSL1WN.js";import{o as ni}from"./chunks/general.tY1gtZD0.js";import{z as ti,a0 as ei,A as c,B as I,a3 as W,d as li,a1 as hi,D as ki,i as _,o as S,j as i,H as k,t as pi,Z as ri,g as C,Y as O,y as s,w as di}from"./chunks/vue.DDc96eEg.js";import{r as yi,Y as gi}from"./chunks/index.D2bl6FNE.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.BrP_zX4n.js";function ci(u,m,p){let y,t;X(p)?(y=p,t=ni(p,["window","immediate","commitStyles","persist","onReady","onError"])):(y={duration:p},t=p);const{window:r=ii,immediate:g=!0,commitStyles:o,persist:f,playbackRate:B=1,onReady:R,onError:d=n=>{console.error(n)}}=y,A=ai(()=>r&&HTMLElement&&"animate"in HTMLElement.prototype),a=ti(void 0),e=ei({startTime:null,currentTime:null,timeline:null,playbackRate:B,pending:!1,playState:g?"idle":"paused",replaceState:"active"}),E=c(()=>e.pending),h=c(()=>e.playState),l=c(()=>e.replaceState),U=c({get(){return e.startTime},set(n){e.startTime=n,a.value&&(a.value.startTime=n)}}),V=c({get(){return e.currentTime},set(n){e.currentTime=n,a.value&&(a.value.currentTime=n,F())}}),M=c({get(){return e.timeline},set(n){e.timeline=n,a.value&&(a.value.timeline=n)}}),$=c({get(){return e.playbackRate},set(n){e.playbackRate=n,a.value&&(a.value.playbackRate=n)}}),N=()=>{if(a.value)try{a.value.play(),F()}catch(n){D(),d(n)}else b()},z=()=>{try{a.value?.pause(),D()}catch(n){d(n)}},K=()=>{a.value||b();try{a.value?.reverse(),F()}catch(n){D(),d(n)}},j=()=>{try{a.value?.finish(),D()}catch(n){d(n)}},x=()=>{try{a.value?.cancel(),D()}catch(n){d(n)}};I(()=>T(u),n=>{n?b():a.value=void 0}),I(()=>m,n=>{if(a.value){b();const v=T(u);v&&(a.value.effect=new KeyframeEffect(v,W(n),t))}},{deep:!0}),G(()=>b(!0),!1),si(x);function b(n){const v=T(u);!A.value||!v||(a.value||(a.value=v.animate(W(m),t)),f&&a.value.persist(),B!==1&&(a.value.playbackRate=B),n&&!g?a.value.pause():F(),R?.(a.value))}const P={passive:!0};w(a,["cancel","finish","remove"],D,P),w(a,"finish",()=>{o&&a.value?.commitStyles()},P);const{resume:L,pause:q}=J(()=>{a.value&&(e.pending=a.value.pending,e.playState=a.value.playState,e.replaceState=a.value.replaceState,e.startTime=a.value.startTime,e.currentTime=a.value.currentTime,e.timeline=a.value.timeline,e.playbackRate=a.value.playbackRate)},{immediate:!1});function F(){A.value&&L()}function D(){A.value&&r&&r.requestAnimationFrame(q)}return{isSupported:A,animate:a,play:N,pause:z,reverse:K,finish:j,cancel:x,pending:E,playState:h,replaceState:l,startTime:U,currentTime:V,timeline:M,playbackRate:$}}const oi={class:"flex items-center justify-center w-full h-60"},Ai={class:"code-block"},Di=li({__name:"demo",setup(u){const m=yi(E=>gi.stringify(E,(h,l)=>{if(typeof l!="function")return l},{singleQuote:!0,flowCollectionPadding:!1})),p=hi("el"),{play:y,pause:t,reverse:r,finish:g,cancel:o,startTime:f,currentTime:B,playbackRate:R,playState:d,replaceState:A,pending:a}=ci(p,[{clipPath:"circle(20% at 0% 30%)"},{clipPath:"circle(20% at 50% 80%)"},{clipPath:"circle(20% at 100% 30%)"}],{duration:3e3,iterations:5,direction:"alternate",easing:"cubic-bezier(0.46, 0.03, 0.52, 0.96)"}),e=m(ki({startTime:f,currentTime:B,playbackRate:R,playState:d,replaceState:A,pending:a}));return(E,h)=>(S(),_("div",null,[i("div",oi,[i("p",{ref_key:"el",ref:p,class:"text-5xl! text-$vp-c-brand font-800"}," VueUse useAnimate ",512)]),i("div",null,[k(d)==="running"?(S(),_("button",{key:0,onClick:h[0]||(h[0]=(...l)=>k(t)&&k(t)(...l))}," 暂停 ")):(S(),_("button",{key:1,onClick:h[1]||(h[1]=(...l)=>k(y)&&k(y)(...l))}," 播放 ")),i("button",{onClick:h[2]||(h[2]=(...l)=>k(r)&&k(r)(...l))}," 反向 "),i("button",{onClick:h[3]||(h[3]=(...l)=>k(g)&&k(g)(...l))}," 完成 "),i("button",{onClick:h[4]||(h[4]=(...l)=>k(o)&&k(o)(...l))}," 取消 ")]),i("pre",Ai,pi(k(e)),1)]))}}),ui=`<script setup lang="ts">
import type { MaybeElement } from '@vueuse/core'
import { reactify, useAnimate } from '@vueuse/core'
import { reactive, useTemplateRef } from 'vue'
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

const el = useTemplateRef<MaybeElement>('el')

const {
  play,
  pause,
  reverse,
  finish,
  cancel,
  startTime,
  currentTime,
  playbackRate,
  playState,
  replaceState,
  pending,
} = useAnimate(
  el,
  [
    { clipPath: 'circle(20% at 0% 30%)' },
    { clipPath: 'circle(20% at 50% 80%)' },
    { clipPath: 'circle(20% at 100% 30%)' },
  ],
  {
    duration: 3000,
    iterations: 5,
    direction: 'alternate',
    easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
  },
)

const text = stringify(reactive({
  startTime,
  currentTime,
  playbackRate,
  playState,
  replaceState,
  pending,
}))
<\/script>

<template>
  <div>
    <div class="flex items-center justify-center w-full h-60">
      <p ref="el" class="text-5xl! text-$vp-c-brand font-800">
        VueUse useAnimate
      </p>
    </div>
    <div>
      <button v-if="playState === 'running'" @click="pause">
        暂停
      </button>
      <button v-else @click="play">
        播放
      </button>
      <button @click="reverse">
        反向
      </button>
      <button @click="finish">
        完成
      </button>
      <button @click="cancel">
        取消
      </button>
    </div>
    <pre class="code-block">{{ text }}</pre>
  </div>
</template>
`,mi={class:"demo-source-link"},fi=["href"],Wi=JSON.parse('{"title":"useAnimate","description":"","frontmatter":{"category":"Animation"},"headers":[],"relativePath":"core/useAnimate/index.md","filePath":"core/useAnimate/index.md","lastUpdated":1737604618000}'),Bi={name:"core/useAnimate/index.md"},Oi=Object.assign(Bi,{setup(u){const p=ri({template:{value:{welcomeSFC:ui}}}).serialize();return(y,t)=>{const r=Z,g=Q,o=Y,f=H;return S(),_("div",null,[t[1]||(t[1]=i("h1",{id:"useanimate",tabindex:"-1"},[s("useAnimate "),i("a",{class:"header-anchor",href:"#useanimate","aria-label":"Permalink to “useAnimate”"},"​")],-1)),C(r,{fn:"useAnimate"}),t[2]||(t[2]=i("p",null,[s("响应式的 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API",target:"_blank",rel:"noreferrer"},"Web Animations API"),s("。")],-1)),t[3]||(t[3]=i("h2",{id:"示例",tabindex:"-1"},[s("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),C(g,null,{default:di(()=>[i("p",mi,[t[0]||(t[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useAnimate/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${k(p)}`,target:"_blank"},"playground (beta)",8,fi)]),C(Di)]),_:1}),t[4]||(t[4]=O("",8)),t[5]||(t[5]=i("details",null,[i("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),i("div",{class:"language-typescript"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"typescript"),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseAnimateOptions")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"  extends"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," KeyframeAnimationOptions"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"    ConfigurableWindow"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 当使用 `useAnimate` 时，是否自动运行播放")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," true")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  immediate"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 是否将动画的结束样式状态提交给被动画的元素")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 通常情况下，你应该使用 `fill` 选项")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," false")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  commitStyles"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 是否持续动画")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," false")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  persist"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 在动画初始化后执行")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  onReady"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"animate"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Animation"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 捕获到错误时的回调")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  onError"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"e"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"unknown"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseAnimateKeyframes"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," MaybeRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"  Keyframe"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," PropertyIndexedKeyframes"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," null")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseAnimateReturn"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  isSupported"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  animate"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Animation"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  play"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  pause"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  reverse"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  finish"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  cancel"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  pending"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  playState"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"AnimationPlayState"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  replaceState"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"AnimationReplaceState"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  startTime"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"WritableComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"CSSNumberish"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"null"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  currentTime"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"WritableComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"CSSNumberish"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"null"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  timeline"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"WritableComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"AnimationTimeline"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"null"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  playbackRate"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"WritableComputedRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"/**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * 响应式 Web Animations API")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://vueuse.org/useAnimate")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," target")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," keyframes")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," options")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useAnimate"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  target"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeComputedElementRef"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  keyframes"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseAnimateKeyframes"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseAnimateOptions"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseAnimateReturn")])])])])],-1)),t[6]||(t[6]=O("",3)),C(o,{fn:"useAnimate"}),t[7]||(t[7]=i("h2",{id:"更新日志",tabindex:"-1"},[s("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),C(f,{fn:"useAnimate"})])}}});export{Wi as __pageData,Oi as default};

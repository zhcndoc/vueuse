import{_ as Y,a as H}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as Q}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{u as J,_ as Z}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{t as G}from"./chunks/index.DG0WMUxM.js";import{i as X,d as ii,t as si}from"./chunks/metadata.HXIr2NKd.js";import{u as R}from"./chunks/index.DXXiP3sM.js";import{u as w}from"./chunks/index.DK97_WvT.js";import{u as ai}from"./chunks/index.BXXSfDxN.js";import{o as ni}from"./chunks/general.CGRH32nb.js";import{z as ti,a0 as ei,A as o,B as I,a3 as W,d as li,a1 as hi,D as ki,i as S,o as T,j as i,H as p,t as pi,Z as ri,g as E,Y as O,y as s,w as di}from"./chunks/vue.DQfvmmyQ.js";import{r as yi,Y as gi}from"./chunks/index.CbsoJ8xH.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B5l6yAbo.js";function ci(m,f,r){let g,t;X(r)?(g=r,t=ni(r,["window","immediate","commitStyles","persist","onReady","onError"])):(g={duration:r},t=r);const{window:d=ii,immediate:c=!0,commitStyles:A,persist:B,playbackRate:b=1,onReady:v,onError:y=n=>{console.error(n)}}=g,D=ai(()=>d&&HTMLElement&&"animate"in HTMLElement.prototype),a=ti(void 0),e=ei({startTime:null,currentTime:null,timeline:null,playbackRate:b,pending:!1,playState:c?"idle":"paused",replaceState:"active"}),F=o(()=>e.pending),h=o(()=>e.playState),l=o(()=>e.replaceState),U=o({get(){return e.startTime},set(n){e.startTime=n,a.value&&(a.value.startTime=n)}}),V=o({get(){return e.currentTime},set(n){e.currentTime=n,a.value&&(a.value.currentTime=n,_())}}),M=o({get(){return e.timeline},set(n){e.timeline=n,a.value&&(a.value.timeline=n)}}),$=o({get(){return e.playbackRate},set(n){e.playbackRate=n,a.value&&(a.value.playbackRate=n)}}),N=()=>{if(a.value)try{a.value.play(),_()}catch(n){u(),y(n)}else C()},z=()=>{var n;try{(n=a.value)==null||n.pause(),u()}catch(k){y(k)}},K=()=>{var n;a.value||C();try{(n=a.value)==null||n.reverse(),_()}catch(k){u(),y(k)}},j=()=>{var n;try{(n=a.value)==null||n.finish(),u()}catch(k){y(k)}},x=()=>{var n;try{(n=a.value)==null||n.cancel(),u()}catch(k){y(k)}};I(()=>R(m),n=>{n?C():a.value=void 0}),I(()=>f,n=>{if(a.value){C();const k=R(m);k&&(a.value.effect=new KeyframeEffect(k,W(n),t))}},{deep:!0}),G(()=>C(!0),!1),si(x);function C(n){const k=R(m);!D.value||!k||(a.value||(a.value=k.animate(W(f),t)),B&&a.value.persist(),b!==1&&(a.value.playbackRate=b),n&&!c?a.value.pause():_(),v==null||v(a.value))}const P={passive:!0};w(a,["cancel","finish","remove"],u,P),w(a,"finish",()=>{var n;A&&((n=a.value)==null||n.commitStyles())},P);const{resume:L,pause:q}=J(()=>{a.value&&(e.pending=a.value.pending,e.playState=a.value.playState,e.replaceState=a.value.replaceState,e.startTime=a.value.startTime,e.currentTime=a.value.currentTime,e.timeline=a.value.timeline,e.playbackRate=a.value.playbackRate)},{immediate:!1});function _(){D.value&&L()}function u(){D.value&&d&&d.requestAnimationFrame(q)}return{isSupported:D,animate:a,play:N,pause:z,reverse:K,finish:j,cancel:x,pending:F,playState:h,replaceState:l,startTime:U,currentTime:V,timeline:M,playbackRate:$}}const oi={class:"flex items-center justify-center w-full h-60"},Ai={class:"code-block"},Di=li({__name:"demo",setup(m){const f=yi(F=>gi.stringify(F,(h,l)=>{if(typeof l!="function")return l},{singleQuote:!0,flowCollectionPadding:!1})),r=hi("el"),{play:g,pause:t,reverse:d,finish:c,cancel:A,startTime:B,currentTime:b,playbackRate:v,playState:y,replaceState:D,pending:a}=ci(r,[{clipPath:"circle(20% at 0% 30%)"},{clipPath:"circle(20% at 50% 80%)"},{clipPath:"circle(20% at 100% 30%)"}],{duration:3e3,iterations:5,direction:"alternate",easing:"cubic-bezier(0.46, 0.03, 0.52, 0.96)"}),e=f(ki({startTime:B,currentTime:b,playbackRate:v,playState:y,replaceState:D,pending:a}));return(F,h)=>(T(),S("div",null,[i("div",oi,[i("p",{ref_key:"el",ref:r,class:"text-5xl! text-$vp-c-brand font-800"}," VueUse useAnimate ",512)]),i("div",null,[p(y)==="running"?(T(),S("button",{key:0,onClick:h[0]||(h[0]=(...l)=>p(t)&&p(t)(...l))}," 暂停 ")):(T(),S("button",{key:1,onClick:h[1]||(h[1]=(...l)=>p(g)&&p(g)(...l))}," 播放 ")),i("button",{onClick:h[2]||(h[2]=(...l)=>p(d)&&p(d)(...l))}," 反向 "),i("button",{onClick:h[3]||(h[3]=(...l)=>p(c)&&p(c)(...l))}," 完成 "),i("button",{onClick:h[4]||(h[4]=(...l)=>p(A)&&p(A)(...l))}," 取消 ")]),i("pre",Ai,pi(p(e)),1)]))}}),ui=`<script setup lang="ts">
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
`,mi={class:"demo-source-link"},fi=["href"],Wi=JSON.parse('{"title":"useAnimate","description":"","frontmatter":{"category":"Animation"},"headers":[],"relativePath":"core/useAnimate/index.md","filePath":"core/useAnimate/index.md","lastUpdated":1737604618000}'),Bi={name:"core/useAnimate/index.md"},Oi=Object.assign(Bi,{setup(m){const r=ri({template:{value:{welcomeSFC:ui}}}).serialize();return(g,t)=>{const d=Z,c=Q,A=Y,B=H;return T(),S("div",null,[t[1]||(t[1]=i("h1",{id:"useanimate",tabindex:"-1"},[s("useAnimate "),i("a",{class:"header-anchor",href:"#useanimate","aria-label":"Permalink to “useAnimate”"},"​")],-1)),E(d,{fn:"useAnimate"}),t[2]||(t[2]=i("p",null,[s("响应式的 "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API",target:"_blank",rel:"noreferrer"},"Web Animations API"),s("。")],-1)),t[3]||(t[3]=i("h2",{id:"示例",tabindex:"-1"},[s("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),E(c,null,{default:di(()=>[i("p",mi,[t[0]||(t[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useAnimate/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${p(r)}`,target:"_blank"},"playground (beta)",8,fi)]),E(Di)]),_:1}),t[4]||(t[4]=O("",8)),t[5]||(t[5]=i("details",null,[i("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),i("div",{class:"language-typescript"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"typescript"),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseAnimateOptions")]),s(`
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
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseAnimateReturn")])])])])],-1)),t[6]||(t[6]=O("",3)),E(A,{fn:"useAnimate"}),t[7]||(t[7]=i("h2",{id:"更新日志",tabindex:"-1"},[s("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),E(B,{fn:"useAnimate"})])}}});export{Wi as __pageData,Oi as default};

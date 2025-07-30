import{_ as f,a as B}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as v}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{a as C,_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{z as A,a3 as u,d as w,a1 as _,i as D,o as m,j as s,y as i,t as F,H as k,a2 as E,a5 as x,Z as R,g as c,Y as y,w as S}from"./chunks/vue.K-Nh9t7y.js";import{u as T}from"./chunks/index.qy4VQT1o.js";import{_ as P}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/general.tY1gtZD0.js";function I(g,h){const n=A(u(g)),t=C(()=>{const e=n.value-1;n.value=e<0?0:e,n.value<=0&&(t.pause(),h?.onComplete?.())},h?.interval??1e3,{immediate:h?.immediate??!1}),a=e=>{n.value=u(e)??u(g)},r=()=>{t.pause(),a()},o=()=>{t.isActive.value||n.value>0&&t.resume()};return{remaining:n,reset:a,stop:r,start:e=>{a(e),t.resume()},pause:t.pause,resume:o,isActive:t.isActive}}const L={class:"flex flex-col items-center"},V={class:"flex items-center gap-2 mt-4"},j={class:"flex items-center gap-2 justify-center"},O=w({__name:"demo",setup(g){const h=A(5),n=_("rocketRef"),{remaining:t,start:a,stop:r,pause:o,resume:d}=I(h,{onComplete(){n.value.classList.add("launching")},onTick(){}});function e(){n.value.classList.remove("launching"),a(h)}return T(n,"animationend",()=>{n.value.classList.remove("launching")}),(Y,l)=>(m(),D("div",L,[s("div",{ref_key:"rocketRef",ref:n,class:"rocket"}," 🚀 ",512),i(" Rocket launch in "+F(k(t))+" seconds ",1),s("div",V,[l[4]||(l[4]=i(" Countdown: ",-1)),E(s("input",{"onUpdate:modelValue":l[0]||(l[0]=p=>h.value=p),type:"number"},null,512),[[x,h.value]])]),s("div",j,[s("button",{onClick:e}," Start "),s("button",{onClick:l[1]||(l[1]=(...p)=>k(r)&&k(r)(...p))}," Stop "),s("button",{onClick:l[2]||(l[2]=(...p)=>k(o)&&k(o)(...p))}," Pause "),s("button",{onClick:l[3]||(l[3]=(...p)=>k(d)&&k(d)(...p))}," Resume ")])]))}}),$=P(O,[["__scopeId","data-v-40a7003c"]]),N=`<script setup lang="ts">
import { useCountdown, useEventListener } from '@vueuse/core'
import { shallowRef, useTemplateRef } from 'vue'

const countdownSeconds = shallowRef(5)
const rocketRef = useTemplateRef<HTMLDivElement>('rocketRef')
const { remaining, start, stop, pause, resume } = useCountdown(countdownSeconds, {
  onComplete() {
    rocketRef.value!.classList.add('launching')
  },
  onTick() {

  },
})

function startCountdown() {
  rocketRef.value!.classList.remove('launching')
  start(countdownSeconds)
}

useEventListener(rocketRef, 'animationend', () => {
  rocketRef.value!.classList.remove('launching')
})
<\/script>

<template>
  <div class="flex flex-col items-center">
    <div ref="rocketRef" class="rocket">
      🚀
    </div>
    Rocket launch in {{ remaining }} seconds

    <div class="flex items-center gap-2 mt-4">
      Countdown: <input v-model="countdownSeconds" type="number">
    </div>
    <div class="flex items-center gap-2 justify-center">
      <button @click="startCountdown">
        Start
      </button>
      <button @click="stop">
        Stop
      </button>
      <button @click="pause">
        Pause
      </button>
      <button @click="resume">
        Resume
      </button>
    </div>
  </div>
</template>

<style scoped>
input {
  width: 40px;
}

:root {
  --rocket-rotate: rotate(-45deg);
}
@keyframes rocket {
  0% {
    transform: translateY(0) var(--rocket-rotate);
  }
  50% {
    transform: translateY(-200px) var(--rocket-rotate);
  }
  100% {
    transform: translateY(0) var(--rocket-rotate);
  }
}

.rocket {
  transform: var(--rocket-rotate);
}

.rocket.launching {
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-name: rocket;
}
</style>
`,M={class:"demo-source-link"},U=["href"],is=JSON.parse('{"title":"useCountdown","description":"","frontmatter":{"category":"Time"},"headers":[],"relativePath":"core/useCountdown/index.md","filePath":"core/useCountdown/index.md","lastUpdated":1745718409000}'),G={name:"core/useCountdown/index.md"},as=Object.assign(G,{setup(g){const n=R({template:{value:{welcomeSFC:N}}}).serialize();return(t,a)=>{const r=b,o=v,d=f,e=B;return m(),D("div",null,[a[1]||(a[1]=s("h1",{id:"usecountdown",tabindex:"-1"},[i("useCountdown "),s("a",{class:"header-anchor",href:"#usecountdown","aria-label":"Permalink to “useCountdown”"},"​")],-1)),c(r,{fn:"useCountdown"}),a[2]||(a[2]=s("p",null,[s("a",{href:"/shared/useIntervalFn/"},[s("code",null,"useIntervalFn")]),i(" 的包装器，提供倒计时器。")],-1)),a[3]||(a[3]=s("h2",{id:"示例",tabindex:"-1"},[i("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),c(o,null,{default:S(()=>[s("p",M,[a[0]||(a[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useCountdown/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${k(n)}`,target:"_blank"},"playground (beta)",8,U)]),c($)]),_:1}),a[4]||(a[4]=y("",5)),a[5]||(a[5]=s("details",null,[s("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),s("div",{class:"language-typescript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseCountdownOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *  Interval for the countdown in milliseconds. Default is 1000ms.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  interval"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * Callback function called when the countdown reaches 0.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  onComplete"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * Callback function called on each tick of the countdown.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  onTick"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * Start the countdown immediately")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," false")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  immediate"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseCountdownReturn"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," Pausable"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * Current countdown value.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  remaining"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * Resets the countdown and repeatsLeft to their initial values.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  reset"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"countdown"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">) => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * Stops the countdown and resets its state.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  stop"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * Reset the countdown and start it again.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  start"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"countdown"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">) => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"/**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * Wrapper for `useIntervalFn` that provides a countdown timer in seconds.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," initialCountdown")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," options")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://vueuse.org/useCountdown")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useCountdown"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  initialCountdown"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseCountdownOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseCountdownReturn")])])])])],-1)),a[6]||(a[6]=y("",3)),c(d,{fn:"useCountdown"}),a[7]||(a[7]=s("h2",{id:"更新日志",tabindex:"-1"},[i("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),c(e,{fn:"useCountdown"})])}}});export{is as __pageData,as as default};

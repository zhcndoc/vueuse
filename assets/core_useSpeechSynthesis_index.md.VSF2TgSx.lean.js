import{_ as V,a as $}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as T}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as I}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{z as y,A as M,B as _,a3 as b,d as O,r as N,I as z,i as u,o as A,H as D,y as i,j as s,a2 as m,a5 as E,ah as W,F as G,O as j,t as F,Z as q,g as v,Y as x,w as H}from"./chunks/vue.DQfvmmyQ.js";import{t as w}from"./chunks/index.CyaQpZZu.js";import{d as J,t as L}from"./chunks/metadata.HXIr2NKd.js";import{u as Y}from"./chunks/index.BXXSfDxN.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B5l6yAbo.js";function Z(S,p={}){const{pitch:o=1,rate:g=1,volume:a=1,window:t=J}=p,k=t&&t.speechSynthesis,r=Y(()=>k),n=y(!1),d=y("init"),B=w(S||""),C=w(p.lang||"en-US"),e=y(void 0),h=(l=!n.value)=>{n.value=l},f=l=>{l.lang=b(C),l.voice=b(p.voice)||null,l.pitch=b(o),l.rate=b(g),l.volume=a,l.onstart=()=>{n.value=!0,d.value="play"},l.onpause=()=>{n.value=!1,d.value="pause"},l.onresume=()=>{n.value=!0,d.value="play"},l.onend=()=>{n.value=!1,d.value="end"},l.onerror=R=>{e.value=R}},c=M(()=>{n.value=!1,d.value="init";const l=new SpeechSynthesisUtterance(B.value);return f(l),l}),P=()=>{k.cancel(),c&&k.speak(c.value)},U=()=>{k.cancel(),n.value=!1};return r.value&&(f(c.value),_(C,l=>{c.value&&!n.value&&(c.value.lang=l)}),p.voice&&_(p.voice,()=>{k.cancel()}),_(n,()=>{n.value?k.resume():k.pause()})),L(()=>{n.value=!1}),{isSupported:r,isPlaying:n,status:d,utterance:c,error:e,stop:U,toggle:h,speak:P}}const K={key:0},Q={key:1},X={bg:"$vp-c-bg",border:"$vp-c-divider 1","inline-flex":"","items-center":"",relative:"",rounded:""},ss=["value"],is={"inline-flex":"","items-center":""},es={class:"mt-1","inline-flex":""},as={"inline-flex":"","items-center":""},ns={class:"mt-1","inline-flex":""},ls={class:"mt-2"},ts=["disabled"],hs=["disabled"],ks=["disabled"],ps=O({__name:"demo",setup(S){const p=N(void 0),o=y("你好，欢迎使用 VueUse！"),g=y(1),a=y(1),t=Z(o,{voice:p,pitch:g,rate:a,lang:"zh-CN"});let k;const r=y([]);z(()=>{t.isSupported.value&&setTimeout(()=>{k=window.speechSynthesis,r.value=k.getVoices(),p.value=r.value[0]})});function n(){t.status.value==="pause"?(console.log("resume"),window.speechSynthesis.resume()):t.speak()}function d(){window.speechSynthesis.pause()}function B(){t.stop()}return(C,e)=>(A(),u("div",null,[D(t).isSupported?(A(),u("div",Q,[e[10]||(e[10]=s("label",{class:"font-bold mr-2"},"朗读文本",-1)),m(s("input",{"onUpdate:modelValue":e[0]||(e[0]=h=>o.value=h),class:"!inline-block",type:"text"},null,512),[[E,o.value]]),e[11]||(e[11]=s("br",null,null,-1)),e[12]||(e[12]=s("label",{class:"font-bold mr-2"},"语言",-1)),s("div",X,[e[6]||(e[6]=s("i",{"i-carbon-language":"",absolute:"","left-2":"","opacity-80":"","pointer-events-none":""},null,-1)),m(s("select",{"onUpdate:modelValue":e[1]||(e[1]=h=>p.value=h),"px-8":"","border-0":"","bg-transparent":"","h-9":"",rounded:"","appearance-none":""},[e[5]||(e[5]=s("option",{bg:"$vp-c-bg",disabled:""}," 选择语言 ",-1)),(A(!0),u(G,null,j(r.value,(h,f)=>(A(),u("option",{key:f,bg:"$vp-c-bg",value:h},F(`${h.name} (${h.lang})`),9,ss))),128))],512),[[W,p.value]]),e[7]||(e[7]=s("i",{"i-carbon-chevron-down":"",absolute:"","right-2":"","opacity-80":"","pointer-events-none":""},null,-1))]),e[13]||(e[13]=s("br",null,null,-1)),s("div",is,[e[8]||(e[8]=s("label",{class:"font-bold mr-2"},"音调",-1)),s("div",es,[m(s("input",{"onUpdate:modelValue":e[2]||(e[2]=h=>g.value=h),type:"range",min:"0.5",max:"2",step:"0.1"},null,512),[[E,g.value]])])]),e[14]||(e[14]=s("br",null,null,-1)),s("div",as,[e[9]||(e[9]=s("label",{class:"font-bold mr-3"},"语速",-1)),s("div",ns,[m(s("input",{"onUpdate:modelValue":e[3]||(e[3]=h=>a.value=h),type:"range",min:"0.5",max:"2",step:"0.1"},null,512),[[E,a.value]])])]),s("div",ls,[s("button",{disabled:D(t).isPlaying.value,onClick:n},F(D(t).status.value==="pause"?"恢复":"朗读"),9,ts),s("button",{disabled:!D(t).isPlaying.value,class:"orange",onClick:d}," 暂停 ",8,hs),s("button",{disabled:!D(t).isPlaying.value,class:"red",onClick:B}," 停止 ",8,ks)])])):(A(),u("div",K,e[4]||(e[4]=[i(" 你的浏览器不支持语音合成 API， "),s("a",{href:"https://caniuse.com/mdn-api_speechsynthesis",target:"_blank"},"查看更多详情",-1)])))]))}}),rs=`<script setup lang="ts">
import { useSpeechSynthesis } from '@vueuse/core'
import { ref as deepRef, onMounted, shallowRef } from 'vue'

const voice = deepRef<SpeechSynthesisVoice>(undefined as unknown as SpeechSynthesisVoice)
const text = shallowRef('你好，欢迎使用 VueUse！')
const pitch = shallowRef(1)
const rate = shallowRef(1)

const speech = useSpeechSynthesis(text, {
  voice,
  pitch,
  rate,
  lang: 'zh-CN',
})

let synth: SpeechSynthesis

const voices = shallowRef<SpeechSynthesisVoice[]>([])

onMounted(() => {
  if (speech.isSupported.value) {
  // load at last
    setTimeout(() => {
      synth = window.speechSynthesis
      voices.value = synth.getVoices()
      voice.value = voices.value[0]
    })
  }
})

function play() {
  if (speech.status.value === 'pause') {
    console.log('resume')
    window.speechSynthesis.resume()
  }
  else {
    speech.speak()
  }
}

function pause() {
  window.speechSynthesis.pause()
}

function stop() {
  speech.stop()
}
<\/script>

<template>
  <div>
    <div v-if="!speech.isSupported">
      你的浏览器不支持语音合成 API，
      <a
        href="https://caniuse.com/mdn-api_speechsynthesis"
        target="_blank"
      >查看更多详情</a>
    </div>
    <div v-else>
      <label class="font-bold mr-2">朗读文本</label>
      <input v-model="text" class="!inline-block" type="text">

      <br>
      <label class="font-bold mr-2">语言</label>
      <div bg="$vp-c-bg" border="$vp-c-divider 1" inline-flex items-center relative rounded>
        <i i-carbon-language absolute left-2 opacity-80 pointer-events-none />
        <select v-model="voice" px-8 border-0 bg-transparent h-9 rounded appearance-none>
          <option bg="$vp-c-bg" disabled>
            选择语言
          </option>
          <option
            v-for="(voice, i) in voices"
            :key="i"
            bg="$vp-c-bg"
            :value="voice"
          >
            {{ \`\${voice.name} (\${voice.lang})\` }}
          </option>
        </select>
        <i i-carbon-chevron-down absolute right-2 opacity-80 pointer-events-none />
      </div>

      <br>
      <div inline-flex items-center>
        <label class="font-bold mr-2">音调</label>
        <div class="mt-1" inline-flex>
          <input v-model="pitch" type="range" min="0.5" max="2" step="0.1">
        </div>
      </div>

      <br>
      <div inline-flex items-center>
        <label class="font-bold mr-3">语速</label>
        <div class="mt-1" inline-flex>
          <input v-model="rate" type="range" min="0.5" max="2" step="0.1">
        </div>
      </div>

      <div class="mt-2">
        <button
          :disabled="speech.isPlaying.value"
          @click="play"
        >
          {{ speech.status.value === 'pause' ? '恢复' : '朗读' }}
        </button>
        <button :disabled="!speech.isPlaying.value" class="orange" @click="pause">
          暂停
        </button>
        <button :disabled="!speech.isPlaying.value" class="red" @click="stop">
          停止
        </button>
      </div>
    </div>
  </div>
</template>
`,ds={class:"demo-source-link"},os=["href"],Ss=JSON.parse('{"title":"useSpeechSynthesis","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useSpeechSynthesis/index.md","filePath":"core/useSpeechSynthesis/index.md","lastUpdated":1715934697000}'),ys={name:"core/useSpeechSynthesis/index.md"},Bs=Object.assign(ys,{setup(S){const o=q({template:{value:{welcomeSFC:rs}}}).serialize();return(g,a)=>{const t=I,k=T,r=V,n=$;return A(),u("div",null,[a[1]||(a[1]=s("h1",{id:"usespeechsynthesis",tabindex:"-1"},[i("useSpeechSynthesis "),s("a",{class:"header-anchor",href:"#usespeechsynthesis","aria-label":"Permalink to “useSpeechSynthesis”"},"​")],-1)),v(t,{fn:"useSpeechSynthesis"}),a[2]||(a[2]=s("p",null,[i("响应式 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis",target:"_blank",rel:"noreferrer"},"SpeechSynthesis"),i("。")],-1)),a[3]||(a[3]=s("blockquote",null,[s("p",null,[s("a",{href:"https://caniuse.com/mdn-api_speechsynthesis",target:"_blank",rel:"noreferrer"},"Can I use?")])],-1)),a[4]||(a[4]=s("h2",{id:"示例",tabindex:"-1"},[i("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),v(k,null,{default:H(()=>[s("p",ds,[a[0]||(a[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useSpeechSynthesis/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${D(o)}`,target:"_blank"},"playground (beta)",8,os)]),v(ps)]),_:1}),a[5]||(a[5]=x("",6)),a[6]||(a[6]=s("details",null,[s("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),s("div",{class:"language-typescript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseSpeechSynthesisStatus"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"init"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"play"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"pause"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"end"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseSpeechSynthesisOptions"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," ConfigurableWindow"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 语音合成的语言")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"en-US"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  lang"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 获取和设置朗读时的音调。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  pitch"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"SpeechSynthesisUtterance"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"pitch"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]>")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 获取和设置朗读时的速度。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  rate"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"SpeechSynthesisUtterance"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"rate"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]>")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 获取和设置用于朗读的声音。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  voice"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"SpeechSynthesisVoice"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 获取和设置朗读的音量。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  volume"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"SpeechSynthesisUtterance"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"volume"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"/**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * 响应式语音合成。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://vueuse.org/useSpeechSynthesis")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," SpeechSynthesis")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useSpeechSynthesis"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  text"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseSpeechSynthesisOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  isSupported"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  isPlaying"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  status"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseSpeechSynthesisStatus"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseSpeechSynthesisStatus"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  utterance"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"SpeechSynthesisUtterance"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  error"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"    SpeechSynthesisErrorEvent"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"    SpeechSynthesisErrorEvent"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  >")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  stop"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  toggle"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"value"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  speak"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseSpeechSynthesisReturn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ReturnType"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"typeof"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," useSpeechSynthesis"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])])])],-1)),a[7]||(a[7]=x("",3)),v(r,{fn:"useSpeechSynthesis"}),a[8]||(a[8]=s("h2",{id:"更新日志",tabindex:"-1"},[i("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),v(n,{fn:"useSpeechSynthesis"})])}}});export{Ss as __pageData,Bs as default};

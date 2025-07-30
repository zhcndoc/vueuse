import{_ as V,a as $}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as T}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as I}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{z as o,A as M,B as _,a3 as v,d as O,r as N,I as z,i as u,o as A,H as D,y as i,j as s,a2 as f,a5 as S,ah as G,F as W,O as j,t as E,Z as q,g as b,Y as F,w as H}from"./chunks/vue.K-Nh9t7y.js";import{t as w}from"./chunks/index.84cWVi_S.js";import{d as J,t as L}from"./chunks/metadata.ByJC-ruD.js";import{u as Y}from"./chunks/index.BImTs33O.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.B2rzktNR.js";function Z(B,k={}){const{pitch:y=1,rate:c=1,volume:a=1,window:p=J}=k,n=p&&p.speechSynthesis,g=Y(()=>n),l=o(!1),r=o("init"),C=w(B||""),m=w(k.lang||"en-US"),x=o(void 0),e=(t=!l.value)=>{l.value=t},h=t=>{t.lang=v(m),t.voice=v(k.voice)||null,t.pitch=v(y),t.rate=v(c),t.volume=v(a),t.onstart=()=>{l.value=!0,r.value="play"},t.onpause=()=>{l.value=!1,r.value="pause"},t.onresume=()=>{l.value=!0,r.value="play"},t.onend=()=>{l.value=!1,r.value="end"},t.onerror=R=>{x.value=R}},d=M(()=>{l.value=!1,r.value="init";const t=new SpeechSynthesisUtterance(C.value);return h(t),t}),P=()=>{n.cancel(),d&&n.speak(d.value)},U=()=>{n.cancel(),l.value=!1};return g.value&&(h(d.value),_(m,t=>{d.value&&!l.value&&(d.value.lang=t)}),k.voice&&_(k.voice,()=>{n.cancel()}),_(l,()=>{l.value?n.resume():n.pause()})),L(()=>{l.value=!1}),{isSupported:g,isPlaying:l,status:r,utterance:d,error:x,stop:U,toggle:e,speak:P}}const K={key:0},Q={key:1},X={bg:"$vp-c-bg",border:"$vp-c-divider 1","inline-flex":"","items-center":"",relative:"",rounded:""},ss=["value"],is={"inline-flex":"","items-center":""},es={class:"mt-1","inline-flex":""},as={"inline-flex":"","items-center":""},ns={class:"mt-1","inline-flex":""},ls={"inline-flex":"","items-center":""},ts={class:"mt-1","inline-flex":""},hs={class:"mt-2"},ks=["disabled"],ps=["disabled"],rs=["disabled"],ds=O({__name:"demo",setup(B){const k=N(void 0),y=o("你好，欢迎使用 VueUse！"),c=o(1),a=o(1),p=o(1),n=Z(y,{voice:k,pitch:c,rate:a,volume:p});let g;const l=o([]);z(()=>{n.isSupported.value&&setTimeout(()=>{g=window.speechSynthesis,l.value=g.getVoices(),k.value=l.value[0]})});function r(){n.status.value==="pause"?(console.log("resume"),window.speechSynthesis.resume()):n.speak()}function C(){window.speechSynthesis.pause()}function m(){n.stop()}return(x,e)=>(A(),u("div",null,[D(n).isSupported?(A(),u("div",Q,[e[12]||(e[12]=s("label",{class:"font-bold mr-2"},"朗读文本",-1)),f(s("input",{"onUpdate:modelValue":e[0]||(e[0]=h=>y.value=h),class:"!inline-block",type:"text"},null,512),[[S,y.value]]),e[13]||(e[13]=s("br",null,null,-1)),e[14]||(e[14]=s("label",{class:"font-bold mr-2"},"语言",-1)),s("div",X,[e[7]||(e[7]=s("i",{"i-carbon-language":"",absolute:"","left-2":"","opacity-80":"","pointer-events-none":""},null,-1)),f(s("select",{"onUpdate:modelValue":e[1]||(e[1]=h=>k.value=h),"px-8":"","border-0":"","bg-transparent":"","h-9":"",rounded:"","appearance-none":""},[e[6]||(e[6]=s("option",{bg:"$vp-c-bg",disabled:""}," 选择语言 ",-1)),(A(!0),u(W,null,j(l.value,(h,d)=>(A(),u("option",{key:d,bg:"$vp-c-bg",value:h},E(`${h.name} (${h.lang})`),9,ss))),128))],512),[[G,k.value]]),e[8]||(e[8]=s("i",{"i-carbon-chevron-down":"",absolute:"","right-2":"","opacity-80":"","pointer-events-none":""},null,-1))]),e[15]||(e[15]=s("br",null,null,-1)),s("div",is,[e[9]||(e[9]=s("label",{class:"font-bold mr-2"},"音调",-1)),s("div",es,[f(s("input",{"onUpdate:modelValue":e[2]||(e[2]=h=>c.value=h),type:"range",min:"0.5",max:"2",step:"0.1"},null,512),[[S,c.value]])])]),e[16]||(e[16]=s("br",null,null,-1)),s("div",as,[e[10]||(e[10]=s("label",{class:"font-bold mr-3"},"语速",-1)),s("div",ns,[f(s("input",{"onUpdate:modelValue":e[3]||(e[3]=h=>a.value=h),type:"range",min:"0.5",max:"2",step:"0.1"},null,512),[[S,a.value]])])]),e[17]||(e[17]=s("br",null,null,-1)),s("div",ls,[e[11]||(e[11]=s("label",{class:"font-bold mr-3"},"Volume",-1)),s("div",ts,[f(s("input",{"onUpdate:modelValue":e[4]||(e[4]=h=>p.value=h),type:"range",min:"0.5",max:"2",step:"0.1"},null,512),[[S,p.value]])])]),s("div",hs,[s("button",{disabled:D(n).isPlaying.value,onClick:r},E(D(n).status.value==="pause"?"恢复":"朗读"),9,ks),s("button",{disabled:!D(n).isPlaying.value,class:"orange",onClick:C}," 暂停 ",8,ps),s("button",{disabled:!D(n).isPlaying.value,class:"red",onClick:m}," 停止 ",8,rs)])])):(A(),u("div",K,e[5]||(e[5]=[i(" 你的浏览器不支持语音合成 API， ",-1),s("a",{href:"https://caniuse.com/mdn-api_speechsynthesis",target:"_blank"},"查看更多详情",-1)])))]))}}),os=`<script setup lang="ts">
import { useSpeechSynthesis } from '@vueuse/core'
import { ref as deepRef, onMounted, shallowRef } from 'vue'

const voice = deepRef<SpeechSynthesisVoice>(undefined as unknown as SpeechSynthesisVoice)
const text = shallowRef('你好，欢迎使用 VueUse！')
const pitch = shallowRef(1)
const rate = shallowRef(1)
const volume = shallowRef(1)

const speech = useSpeechSynthesis(text, {
  voice,
  pitch,
  rate,
  volume,
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

      <br>
      <div inline-flex items-center>
        <label class="font-bold mr-3">Volume</label>
        <div class="mt-1" inline-flex>
          <input v-model="volume" type="range" min="0.5" max="2" step="0.1">
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
`,ys={class:"demo-source-link"},gs=["href"],Cs=JSON.parse('{"title":"useSpeechSynthesis","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useSpeechSynthesis/index.md","filePath":"core/useSpeechSynthesis/index.md","lastUpdated":1715934697000}'),cs={name:"core/useSpeechSynthesis/index.md"},xs=Object.assign(cs,{setup(B){const y=q({template:{value:{welcomeSFC:os}}}).serialize();return(c,a)=>{const p=I,n=T,g=V,l=$;return A(),u("div",null,[a[1]||(a[1]=s("h1",{id:"usespeechsynthesis",tabindex:"-1"},[i("useSpeechSynthesis "),s("a",{class:"header-anchor",href:"#usespeechsynthesis","aria-label":"Permalink to “useSpeechSynthesis”"},"​")],-1)),b(p,{fn:"useSpeechSynthesis"}),a[2]||(a[2]=s("p",null,[i("响应式 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis",target:"_blank",rel:"noreferrer"},"SpeechSynthesis"),i("。")],-1)),a[3]||(a[3]=s("blockquote",null,[s("p",null,[s("a",{href:"https://caniuse.com/mdn-api_speechsynthesis",target:"_blank",rel:"noreferrer"},"Can I use?")])],-1)),a[4]||(a[4]=s("h2",{id:"示例",tabindex:"-1"},[i("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),b(n,null,{default:H(()=>[s("p",ys,[a[0]||(a[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useSpeechSynthesis/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${D(y)}`,target:"_blank"},"playground (beta)",8,gs)]),b(ds)]),_:1}),a[5]||(a[5]=F("",6)),a[6]||(a[6]=s("details",null,[s("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),s("div",{class:"language-typescript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseSpeechSynthesisStatus"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"init"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"play"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"pause"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"end"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')]),i(`
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
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  volume"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"SpeechSynthesisUtterance"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"volume"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]>")]),i(`
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
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseSpeechSynthesisReturn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ReturnType"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"typeof"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," useSpeechSynthesis"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])])])],-1)),a[7]||(a[7]=F("",3)),b(g,{fn:"useSpeechSynthesis"}),a[8]||(a[8]=s("h2",{id:"更新日志",tabindex:"-1"},[i("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),b(l,{fn:"useSpeechSynthesis"})])}}});export{Cs as __pageData,xs as default};

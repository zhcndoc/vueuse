import{_ as U,a as T}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_ as N}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as I}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{_ as V}from"./chunks/Note.BA4Afsl9.js";import{z as A,a3 as L,B as S,d as G,i as o,o as d,H as y,y as i,j as s,k as C,a2 as w,al as E,F as $,g as D,w as x,t as P,n as q,Z as j,Y as z}from"./chunks/vue.DDc96eEg.js";import{t as M}from"./chunks/index.Cic7SbUz.js";import{d as O,t as W}from"./chunks/metadata.DSy5Z-Tw.js";import{u as J}from"./chunks/index.rocSL1WN.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.BrP_zX4n.js";function H(_={}){const{interimResults:k=!0,continuous:v=!0,maxAlternatives:m=1,window:n=O}=_,r=M(_.lang||"en-US"),h=A(!1),c=A(!1),f=A(""),g=A(void 0);let t;const b=()=>{h.value=!0},B=()=>{h.value=!1},u=(a=!h.value)=>{a?b():B()},p=n&&(n.SpeechRecognition||n.webkitSpeechRecognition),e=J(()=>p);return e.value&&(t=new p,t.continuous=v,t.interimResults=k,t.lang=L(r),t.maxAlternatives=m,t.onstart=()=>{h.value=!0,c.value=!1},S(r,a=>{t&&!h.value&&(t.lang=a)}),t.onresult=a=>{const l=a.results[a.resultIndex],{transcript:R}=l[0];c.value=l.isFinal,f.value=R,g.value=void 0},t.onerror=a=>{g.value=a},t.onend=()=>{h.value=!1,t.lang=L(r)},S(h,(a,l)=>{a!==l&&(a?t.start():t.stop())})),W(()=>{B()}),{isSupported:e,isListening:h,isFinal:c,recognition:t,result:f,error:g,toggle:u,start:b,stop:B}}const Y={key:0},Z={key:1},K={flex:"~ items-center gap-x-4 wrap"},Q={class:"radio"},X={class:"radio"},ss={class:"radio"},is={key:2,class:"mt-4"},es={key:1},ns={key:2},as=G({__name:"demo",setup(_){const k=A("zh-CN");function v(p,e){const a=p.slice(0);let l=p.length,R,F;for(;l--;)F=Math.floor((l+1)*Math.random()),R=a[F],a[F]=a[l],a[l]=R;return a.slice(0,e)}const m=["aqua","azure","beige","bisque","black","blue","brown","chocolate","coral","crimson","cyan","fuchsia","ghostwhite","gold","goldenrod","gray","green","indigo","ivory","khaki","lavender","lime","linen","magenta","maroon","moccasin","navy","olive","orange","orchid","peru","pink","plum","purple","red","salmon","sienna","silver","snow","tan","teal","thistle","tomato","turquoise","violet","white","yellow","transparent"],n=`#JSGF V1.0; grammar colors; public <color> = ${m.join(" | ")} ;`,r=H({lang:k,continuous:!0}),h=A("transparent");if(r.isSupported.value){const p=window.SpeechGrammarList||window.webkitSpeechGrammarList,e=new p;e.addFromString(n,1),r.recognition.grammars=e,S(r.result,()=>{for(const a of r.result.value.toLowerCase().split(" ").reverse())if(m.includes(a)){h.value=a;break}})}const c=A([]);function f(){h.value="transparent",r.result.value="",c.value=v(m,5),r.start()}const{isListening:g,isSupported:t,stop:b,result:B}=r,u=A(k.value);return S(k,p=>g.value?null:u.value=p),S(g,p=>p?null:u.value=k.value),(p,e)=>{const a=V;return d(),o("div",null,[y(t)?(d(),o("div",Z,[s("div",K,[s("label",Q,[w(s("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>k.value=l),type:"radio",value:"zh-CN"},null,512),[[E,k.value]]),e[5]||(e[5]=s("span",null,"普通话",-1))]),s("label",X,[w(s("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>k.value=l),value:"en-US",type:"radio"},null,512),[[E,k.value]]),e[6]||(e[6]=s("span",null,"英语（美国）",-1))]),s("label",ss,[w(s("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>k.value=l),value:"fr",type:"radio"},null,512),[[E,k.value]]),e[7]||(e[7]=s("span",null,"法语",-1))])]),y(g)?C("",!0):(d(),o("button",{key:0,onClick:f}," 按住并讲话 ")),y(g)?(d(),o("button",{key:1,class:"orange",onClick:e[3]||(e[3]=(...l)=>y(b)&&y(b)(...l))}," 停止 ")):C("",!0),y(g)?(d(),o("div",is,[u.value==="zh-CN"?(d(),o($,{key:0},[D(a,{class:"mb-2"},{default:x(()=>e[8]||(e[8]=[s("b",null,"请说一个颜色",-1)])),_:1,__:[8]}),D(a,{class:"mb-2"},{default:x(()=>[i(" 尝试："+P(c.value.join(", ")),1)]),_:1})],64)):u.value==="en-US"?(d(),o("p",es," 说一些英语！ ")):u.value==="fr"?(d(),o("p",ns," 说一些法语！ ")):C("",!0),s("p",{class:"tag",style:q(u.value==="en-US"?{background:h.value}:{})},P(y(B)),5)])):C("",!0)])):(d(),o("div",Y,e[4]||(e[4]=[i(" 你的浏览器不支持语音识别 API， "),s("a",{href:"https://caniuse.com/mdn-api_speechrecognition",target:"_blank"},"查看更多详情",-1)])))])}}}),ts=`<script setup lang="ts">
import { useSpeechRecognition } from '@vueuse/core'
import { shallowRef, watch } from 'vue'

const lang = shallowRef('zh-CN')

// 随机从数组中选取指定数量的元素
function sample<T>(arr: T[], size: number) {
  const shuffled = arr.slice(0)
  let i = arr.length
  let temp: T
  let index: number
  while (i--) {
    index = Math.floor((i + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = temp
  }
  return shuffled.slice(0, size)
}

// 颜色数组
const colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow', 'transparent']

// 颜色语法
const grammar = \`#JSGF V1.0; grammar colors; public <color> = \${colors.join(' | ')} ;\`

// 使用语音识别
const speech = useSpeechRecognition({
  lang,
  continuous: true,
})

const color = shallowRef('transparent')

if (speech.isSupported.value) {
  // @ts-expect-error 缺少类型
  const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
  const speechRecognitionList = new SpeechGrammarList()
  speechRecognitionList.addFromString(grammar, 1)
  speech.recognition!.grammars = speechRecognitionList

  // 监听语音识别结果
  watch(speech.result, () => {
    for (const i of speech.result.value.toLowerCase().split(' ').reverse()) {
      if (colors.includes(i)) {
        color.value = i
        break
      }
    }
  })
}

// 随机选取的颜色数组
const sampled = shallowRef<string[]>([])

// 开始语音识别
function start() {
  color.value = 'transparent'
  speech.result.value = ''
  sampled.value = sample(colors, 5)
  speech.start()
}

const { isListening, isSupported, stop, result } = speech

const selectedLanguage = shallowRef(lang.value)
watch(lang, lang => isListening.value ? null : selectedLanguage.value = lang)
watch(isListening, isListening => isListening ? null : selectedLanguage.value = lang.value)
<\/script>

<template>
  <div>
    <div v-if="!isSupported">
      你的浏览器不支持语音识别 API，
      <a
        href="https://caniuse.com/mdn-api_speechrecognition"
        target="_blank"
      >查看更多详情</a>
    </div>
    <div v-else>
      <div flex="~ items-center gap-x-4 wrap">
        <label class="radio">
          <input v-model="lang" type="radio" value="zh-CN">
          <span>普通话</span>
        </label>
        <label class="radio">
          <input v-model="lang" value="en-US" type="radio">
          <span>英语（美国）</span>
        </label>
        <label class="radio">
          <input v-model="lang" value="fr" type="radio">
          <span>法语</span>
        </label>
      </div>
      <button v-if="!isListening" @click="start">
        按住并讲话
      </button>
      <button v-if="isListening" class="orange" @click="stop">
        停止
      </button>
      <div v-if="isListening" class="mt-4">
        <template v-if="selectedLanguage === 'zh-CN'">
          <note class="mb-2">
            <b>请说一个颜色</b>
          </note>
          <note class="mb-2">
            尝试：{{ sampled.join(', ') }}
          </note>
        </template>

        <p v-else-if="selectedLanguage === 'en-US'">
          说一些英语！
        </p>

        <p v-else-if="selectedLanguage === 'fr'">
          说一些法语！
        </p>

        <p
          class="tag"
          :style="selectedLanguage === 'en-US' ? { background: color } : {}"
        >
          {{ result }}
        </p>
      </div>
    </div>
  </div>
</template>
`,ls={class:"demo-source-link"},hs=["href"],fs=JSON.parse('{"title":"useSpeechRecognition","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useSpeechRecognition/index.md","filePath":"core/useSpeechRecognition/index.md","lastUpdated":1715934697000}'),ks={name:"core/useSpeechRecognition/index.md"},vs=Object.assign(ks,{setup(_){const v=j({template:{value:{welcomeSFC:ts}}}).serialize();return(m,n)=>{const r=I,h=N,c=U,f=T;return d(),o("div",null,[n[1]||(n[1]=s("h1",{id:"usespeechrecognition",tabindex:"-1"},[i("useSpeechRecognition "),s("a",{class:"header-anchor",href:"#usespeechrecognition","aria-label":"Permalink to “useSpeechRecognition”"},"​")],-1)),D(r,{fn:"useSpeechRecognition"}),n[2]||(n[2]=s("p",null,[i("响应式 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition",target:"_blank",rel:"noreferrer"},"SpeechRecognition"),i("。")],-1)),n[3]||(n[3]=s("blockquote",null,[s("p",null,[s("a",{href:"https://caniuse.com/mdn-api_speechrecognitionevent",target:"_blank",rel:"noreferrer"},"Can I use?")])],-1)),n[4]||(n[4]=s("h2",{id:"示例",tabindex:"-1"},[i("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),D(h,null,{default:x(()=>[s("p",ls,[n[0]||(n[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useSpeechRecognition/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${y(v)}`,target:"_blank"},"playground (beta)",8,hs)]),D(as)]),_:1}),n[5]||(n[5]=z("",6)),n[6]||(n[6]=s("details",null,[s("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),s("div",{class:"language-typescript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseSpeechRecognitionOptions"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," ConfigurableWindow"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 控制是否对每次识别返回连续的结果，还是仅返回单个结果。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  continuous"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 控制是否返回临时结果（true）或不返回临时结果（false）。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 临时结果是尚未最终确定的结果。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  interimResults"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 语音识别的语言")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"en-US"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  lang"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * A number representing the maximum returned alternatives for each result.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/maxAlternatives")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  maxAlternatives"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"/**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * 响应式语音识别。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://vueuse.org/useSpeechRecognition")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," SpeechRecognition")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," options")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useSpeechRecognition"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseSpeechRecognitionOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  isSupported"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  isListening"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  isFinal"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  recognition"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"SpeechRecognition"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  result"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  error"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ShallowRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"    SpeechRecognitionErrorEvent"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"    SpeechRecognitionErrorEvent"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"undefined")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  >")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  toggle"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"value"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  start"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  stop"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseSpeechRecognitionReturn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ReturnType"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"typeof"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," useSpeechRecognition"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])])])],-1)),n[7]||(n[7]=z("",3)),D(c,{fn:"useSpeechRecognition"}),n[8]||(n[8]=s("h2",{id:"更新日志",tabindex:"-1"},[i("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),D(f,{fn:"useSpeechRecognition"})])}}});export{fs as __pageData,vs as default};

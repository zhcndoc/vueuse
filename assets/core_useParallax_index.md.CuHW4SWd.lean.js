import{_ as P,a as E}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as j}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as F}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{u as w}from"./chunks/index.Be5YHGp1.js";import{d as $}from"./chunks/metadata.HXIr2NKd.js";import{u as O}from"./chunks/index.DVkydqYa.js";import{u as R}from"./chunks/index.CjqLcEg_.js";import{u as Y}from"./chunks/index.bHUclc0j.js";import{D as x,A as e,d as M,a1 as T,i as C,o as S,j as a,n as l,t as X,H as B,y as r,Z as V,g as d,Y as q,w as N}from"./chunks/vue.DQfvmmyQ.js";import{r as W,Y as z}from"./chunks/index.CbsoJ8xH.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.DK97_WvT.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/general.CGRH32nb.js";import"./chunks/index.MqNm2vRe.js";import"./chunks/index.BXXSfDxN.js";import"./chunks/index.B5l6yAbo.js";import"./chunks/index.BU82Ue8Z.js";function H(m,g={}){const{deviceOrientationTiltAdjust:p=s=>s,deviceOrientationRollAdjust:c=s=>s,mouseTiltAdjust:i=s=>s,mouseRollAdjust:k=s=>s,window:t=$}=g,n=x(O({window:t})),h=x(Y({window:t})),{elementX:f,elementY:A,elementWidth:y,elementHeight:u}=R(m,{handleOutside:!1,window:t}),o=e(()=>n.isSupported&&(n.alpha!=null&&n.alpha!==0||n.gamma!=null&&n.gamma!==0)?"deviceOrientation":"mouse"),D=e(()=>{if(o.value==="deviceOrientation"){let s;switch(h.orientation){case"landscape-primary":s=n.gamma/90;break;case"landscape-secondary":s=-n.gamma/90;break;case"portrait-primary":s=-n.beta/90;break;case"portrait-secondary":s=n.beta/90;break;default:s=-n.beta/90}return c(s)}else{const s=-(A.value-u.value/2)/u.value;return k(s)}}),b=e(()=>{if(o.value==="deviceOrientation"){let s;switch(h.orientation){case"landscape-primary":s=n.beta/90;break;case"landscape-secondary":s=-n.beta/90;break;case"portrait-primary":s=n.gamma/90;break;case"portrait-secondary":s=-n.gamma/90;break;default:s=n.gamma/90}return p(s)}else{const s=(f.value-y.value/2)/y.value;return i(s)}});return{roll:D,tilt:b,source:o}}const I=M({__name:"demo",setup(m){const g=W(s=>z.stringify(s,(v,_)=>{if(typeof _!="function")return _},{singleQuote:!0,flowCollectionPadding:!1})),p=T("target"),c=w("(max-width: 700px)"),i=x(H(p)),k={display:"flex",flexDirection:"column",justifyContent:"center",minHeight:"500px",transition:".3s ease-out all"},t={overflow:"hidden",fontSize:"6rem",position:"absolute",top:"calc(50% - 1em)",left:"calc(50% - 1em)",height:"2em",width:"2em",margin:"auto"},n={position:"absolute",height:"100%",width:"100%",transition:".3s ease-out all"},h={margin:"3em auto",perspective:"300px"},f=e(()=>({opacity:.4,top:"20px",left:"40px",position:c.value?"inherit":"absolute"})),A=e(()=>({...n,transform:`translateX(${i.tilt*10}px) translateY(${i.roll*10}px) scale(1.33)`})),y=e(()=>({...n,transform:`translateX(${i.tilt*20}px) translateY(${i.roll*20}px) scale(1.33)`})),u=e(()=>({...n,transform:`translateX(${i.tilt*30}px) translateY(${i.roll*30}px) scale(1.33)`})),o=e(()=>({...n,transform:`translateX(${i.tilt*40}px) translateY(${i.roll*40}px) scale(1.33)`})),D=n,b=e(()=>({background:"#fff",height:"20rem",width:"15rem",borderRadius:"5px",border:"1px solid #cdcdcd",overflow:"hidden",transition:".3s ease-out all",boxShadow:"0 0 20px 0 rgba(255, 255, 255, 0.25)",transform:`rotateX(${i.roll*20}deg) rotateY(${i.tilt*20}deg)`}));return(s,v)=>(S(),C("div",null,[a("div",{ref_key:"target",ref:p,style:k},[a("pre",{style:l(f.value)},X(B(g)(i)),5),a("div",{style:h},[a("div",{style:l(b.value)},[a("div",{style:t},[a("img",{style:l(A.value),src:"https://jaromvogel.com/images/design/jumping_rabbit/page2layer0.png",alt:""},null,4),a("img",{style:l(y.value),src:"https://jaromvogel.com/images/design/jumping_rabbit/page2layer1.png",alt:""},null,4),a("img",{style:l(u.value),src:"https://jaromvogel.com/images/design/jumping_rabbit/page2layer2.png",alt:""},null,4),a("img",{style:l(o.value),src:"https://jaromvogel.com/images/design/jumping_rabbit/page2layer3.png",alt:""},null,4),a("img",{style:l(B(D)),src:"https://jaromvogel.com/images/design/jumping_rabbit/page2layer4.png",alt:""},null,4)])],4)]),v[0]||(v[0]=a("div",{class:"note opacity-1"},[r(" 图片来源： "),a("a",{href:"https://codepen.io/jaromvogel",target:"__blank"},"Jarom Vogel")],-1))],512)]))}}),Q=`<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { reactify, useMediaQuery, useParallax } from '@vueuse/core'
import { computed, reactive, useTemplateRef } from 'vue'
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

const target = useTemplateRef<HTMLElement>('target')
const isMobile = useMediaQuery('(max-width: 700px)')

const parallax = reactive(useParallax(target))

const targetStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '500px',
  transition: '.3s ease-out all',
}
const cardWindowStyle: CSSProperties = {
  overflow: 'hidden',
  fontSize: '6rem',
  position: 'absolute',
  top: 'calc(50% - 1em)',
  left: 'calc(50% - 1em)',
  height: '2em',
  width: '2em',
  margin: 'auto',
}
const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',
}
const containerStyle: CSSProperties = {
  margin: '3em auto',
  perspective: '300px',
}

const infoStyle = computed(() => ({
  opacity: 0.4,
  top: '20px',
  left: '40px',
  position: isMobile.value ? 'inherit' : 'absolute',
} satisfies CSSProperties))

const layer0 = computed(() => ({
  ...layerBase,
  transform: \`translateX(\${parallax.tilt * 10}px) translateY(\${
    parallax.roll * 10
  }px) scale(1.33)\`,
}))

const layer1 = computed(() => ({
  ...layerBase,
  transform: \`translateX(\${parallax.tilt * 20}px) translateY(\${
    parallax.roll * 20
  }px) scale(1.33)\`,
}))

const layer2 = computed(() => ({
  ...layerBase,
  transform: \`translateX(\${parallax.tilt * 30}px) translateY(\${
    parallax.roll * 30
  }px) scale(1.33)\`,
}))

const layer3 = computed(() => ({
  ...layerBase,
  transform: \`translateX(\${parallax.tilt * 40}px) translateY(\${
    parallax.roll * 40
  }px) scale(1.33)\`,
}))

const layer4 = layerBase

const cardStyle = computed(() => ({
  background: '#fff',
  height: '20rem',
  width: '15rem',
  borderRadius: '5px',
  border: '1px solid #cdcdcd',
  overflow: 'hidden',
  transition: '.3s ease-out all',
  boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.25)',
  transform: \`rotateX(\${parallax.roll * 20}deg) rotateY(\${
    parallax.tilt * 20
  }deg)\`,
}))
<\/script>

<template>
  <div>
    <div ref="target" :style="targetStyle">
      <pre :style="infoStyle">{{ stringify(parallax) }}</pre>
      <div :style="containerStyle">
        <div :style="cardStyle">
          <div :style="cardWindowStyle">
            <img
              :style="layer0"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer0.png"
              alt=""
            >
            <img
              :style="layer1"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer1.png"
              alt=""
            >
            <img
              :style="layer2"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer2.png"
              alt=""
            >
            <img
              :style="layer3"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer3.png"
              alt=""
            >
            <img
              :style="layer4"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer4.png"
              alt=""
            >
          </div>
        </div>
      </div>
      <div class="note opacity-1">
        图片来源：
        <a
          href="https://codepen.io/jaromvogel"
          target="__blank"
        >Jarom Vogel</a>
      </div>
    </div>
  </div>
</template>
`,U={class:"demo-source-link"},L=["href"],ys=JSON.parse('{"title":"useParallax","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useParallax/index.md","filePath":"core/useParallax/index.md","lastUpdated":1715934697000}'),J={name:"core/useParallax/index.md"},us=Object.assign(J,{setup(m){const p=V({template:{value:{welcomeSFC:Q}}}).serialize();return(c,i)=>{const k=F,t=j,n=P,h=E;return S(),C("div",null,[i[1]||(i[1]=a("h1",{id:"useparallax",tabindex:"-1"},[r("useParallax "),a("a",{class:"header-anchor",href:"#useparallax","aria-label":"Permalink to “useParallax”"},"​")],-1)),d(k,{fn:"useParallax"}),i[2]||(i[2]=a("p",null,[r("轻松创建视差效果。它使用 "),a("a",{href:"/core/useDeviceOrientation/"},[a("code",null,"useDeviceOrientation")]),r("，如果不支持方向，则回退到 "),a("a",{href:"/core/useMouse/"},[a("code",null,"useMouse")]),r("。")],-1)),i[3]||(i[3]=a("h2",{id:"示例",tabindex:"-1"},[r("示例 "),a("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),d(t,null,{default:N(()=>[a("p",U,[i[0]||(i[0]=a("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useParallax/demo.vue",target:"_blank"},"源码",-1)),a("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${B(p)}`,target:"_blank"},"playground (beta)",8,L)]),d(I)]),_:1}),i[4]||(i[4]=q("",7)),d(n,{fn:"useParallax"}),i[5]||(i[5]=a("h2",{id:"更新日志",tabindex:"-1"},[r("更新日志 "),a("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),d(h,{fn:"useParallax"})])}}});export{ys as __pageData,us as default};

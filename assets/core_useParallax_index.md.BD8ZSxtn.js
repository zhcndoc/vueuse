import{_ as P,a as E}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as j}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as F}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{u as w}from"./chunks/index.DSKoMuYC.js";import{d as $}from"./chunks/metadata.ByJC-ruD.js";import{u as O}from"./chunks/index.CA15bYam.js";import{u as R}from"./chunks/index.pAamNEw_.js";import{u as Y}from"./chunks/index.DIv9WUwI.js";import{D as x,A as t,d as M,a1 as T,i as C,o as S,j as a,n as l,t as X,H as B,y as r,Z as V,g as d,Y as q,w as N}from"./chunks/vue.K-Nh9t7y.js";import{r as W,Y as z}from"./chunks/index.DTDykmio.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.qy4VQT1o.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.3sd3E7J2.js";import"./chunks/index.BImTs33O.js";import"./chunks/index.B2rzktNR.js";import"./chunks/index.BGs_z4hs.js";import"./chunks/index.BNnEPRNw.js";import"./chunks/index.CLp6I5-5.js";import"./chunks/index.DtiJt5gQ.js";function H(m,g={}){const{deviceOrientationTiltAdjust:p=s=>s,deviceOrientationRollAdjust:c=s=>s,mouseTiltAdjust:i=s=>s,mouseRollAdjust:k=s=>s,window:e=$}=g,n=x(O({window:e})),h=x(Y({window:e})),{elementX:f,elementY:A,elementWidth:y,elementHeight:u}=R(m,{handleOutside:!1,window:e}),o=t(()=>n.isSupported&&(n.alpha!=null&&n.alpha!==0||n.gamma!=null&&n.gamma!==0)?"deviceOrientation":"mouse"),D=t(()=>{if(o.value==="deviceOrientation"){let s;switch(h.orientation){case"landscape-primary":s=n.gamma/90;break;case"landscape-secondary":s=-n.gamma/90;break;case"portrait-primary":s=-n.beta/90;break;case"portrait-secondary":s=n.beta/90;break;default:s=-n.beta/90}return c(s)}else{const s=-(A.value-u.value/2)/u.value;return k(s)}}),b=t(()=>{if(o.value==="deviceOrientation"){let s;switch(h.orientation){case"landscape-primary":s=n.beta/90;break;case"landscape-secondary":s=-n.beta/90;break;case"portrait-primary":s=n.gamma/90;break;case"portrait-secondary":s=-n.gamma/90;break;default:s=n.gamma/90}return p(s)}else{const s=(f.value-y.value/2)/y.value;return i(s)}});return{roll:D,tilt:b,source:o}}const I=M({__name:"demo",setup(m){const g=W(s=>z.stringify(s,(v,_)=>{if(typeof _!="function")return _},{singleQuote:!0,flowCollectionPadding:!1})),p=T("target"),c=w("(max-width: 700px)"),i=x(H(p)),k={display:"flex",flexDirection:"column",justifyContent:"center",minHeight:"500px",transition:".3s ease-out all"},e={overflow:"hidden",fontSize:"6rem",position:"absolute",top:"calc(50% - 1em)",left:"calc(50% - 1em)",height:"2em",width:"2em",margin:"auto"},n={position:"absolute",height:"100%",width:"100%",transition:".3s ease-out all"},h={margin:"3em auto",perspective:"300px"},f=t(()=>({opacity:.4,top:"20px",left:"40px",position:c.value?"inherit":"absolute"})),A=t(()=>({...n,transform:`translateX(${i.tilt*10}px) translateY(${i.roll*10}px) scale(1.33)`})),y=t(()=>({...n,transform:`translateX(${i.tilt*20}px) translateY(${i.roll*20}px) scale(1.33)`})),u=t(()=>({...n,transform:`translateX(${i.tilt*30}px) translateY(${i.roll*30}px) scale(1.33)`})),o=t(()=>({...n,transform:`translateX(${i.tilt*40}px) translateY(${i.roll*40}px) scale(1.33)`})),D=n,b=t(()=>({background:"#fff",height:"20rem",width:"15rem",borderRadius:"5px",border:"1px solid #cdcdcd",overflow:"hidden",transition:".3s ease-out all",boxShadow:"0 0 20px 0 rgba(255, 255, 255, 0.25)",transform:`rotateX(${i.roll*20}deg) rotateY(${i.tilt*20}deg)`}));return(s,v)=>(S(),C("div",null,[a("div",{ref_key:"target",ref:p,style:k},[a("pre",{style:l(f.value)},X(B(g)(i)),5),a("div",{style:h},[a("div",{style:l(b.value)},[a("div",{style:e},[a("img",{style:l(A.value),src:"https://jaromvogel.com/images/design/jumping_rabbit/page2layer0.png",alt:""},null,4),a("img",{style:l(y.value),src:"https://jaromvogel.com/images/design/jumping_rabbit/page2layer1.png",alt:""},null,4),a("img",{style:l(u.value),src:"https://jaromvogel.com/images/design/jumping_rabbit/page2layer2.png",alt:""},null,4),a("img",{style:l(o.value),src:"https://jaromvogel.com/images/design/jumping_rabbit/page2layer3.png",alt:""},null,4),a("img",{style:l(B(D)),src:"https://jaromvogel.com/images/design/jumping_rabbit/page2layer4.png",alt:""},null,4)])],4)]),v[0]||(v[0]=a("div",{class:"note opacity-1"},[r(" 图片来源： "),a("a",{href:"https://codepen.io/jaromvogel",target:"__blank"},"Jarom Vogel")],-1))],512)]))}}),Q=`<script setup lang="ts">
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
`,U={class:"demo-source-link"},L=["href"],fs=JSON.parse('{"title":"useParallax","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useParallax/index.md","filePath":"core/useParallax/index.md","lastUpdated":1715934697000}'),J={name:"core/useParallax/index.md"},As=Object.assign(J,{setup(m){const p=V({template:{value:{welcomeSFC:Q}}}).serialize();return(c,i)=>{const k=F,e=j,n=P,h=E;return S(),C("div",null,[i[1]||(i[1]=a("h1",{id:"useparallax",tabindex:"-1"},[r("useParallax "),a("a",{class:"header-anchor",href:"#useparallax","aria-label":"Permalink to “useParallax”"},"​")],-1)),d(k,{fn:"useParallax"}),i[2]||(i[2]=a("p",null,[r("轻松创建视差效果。它使用 "),a("a",{href:"/core/useDeviceOrientation/"},[a("code",null,"useDeviceOrientation")]),r("，如果不支持方向，则回退到 "),a("a",{href:"/core/useMouse/"},[a("code",null,"useMouse")]),r("。")],-1)),i[3]||(i[3]=a("h2",{id:"示例",tabindex:"-1"},[r("示例 "),a("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),d(e,null,{default:N(()=>[a("p",U,[i[0]||(i[0]=a("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useParallax/demo.vue",target:"_blank"},"源码",-1)),a("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${B(p)}`,target:"_blank"},"playground (beta)",8,L)]),d(I)]),_:1}),i[4]||(i[4]=q(`<h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to “使用方法”">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> useParallax</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@vueuse/core</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> container</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> tilt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> roll</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> source</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useParallax</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">container</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">container</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-light-font-style:italic;--shiki-dark:#666666;--shiki-dark-font-style:italic;"> /</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h2 id="类型声明" tabindex="-1">类型声明 <a class="header-anchor" href="#类型声明" aria-label="Permalink to “类型声明”">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> UseParallaxOptions</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ConfigurableWindow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  deviceOrientationTiltAdjust</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  deviceOrientationRollAdjust</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  mouseTiltAdjust</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  mouseRollAdjust</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> UseParallaxReturn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 滚动值。缩放至 \`-0.5 ~ 0.5\`</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  roll</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ComputedRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 倾斜值。缩放至 \`-0.5 ~ 0.5\`</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  tilt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ComputedRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 传感器来源，可以是 \`mouse\` 或 \`deviceOrientation\`</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  source</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ComputedRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">deviceOrientation</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mouse</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * Create parallax effect easily. It uses \`useDeviceOrientation\` and fallback to \`useMouse\`</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * if orientation is not supported.</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> target</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> options</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> declare</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useParallax</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  target</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">MaybeElementRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">UseParallaxOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> UseParallaxReturn</span></span></code></pre></div><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to “源码”">​</a></h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useParallax/index.ts" target="_blank" rel="noreferrer">源码</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useParallax/demo.vue" target="_blank" rel="noreferrer">演示</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useParallax/index.md" target="_blank" rel="noreferrer">文档</a></p><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to “贡献者”">​</a></h2>`,7)),d(n,{fn:"useParallax"}),i[5]||(i[5]=a("h2",{id:"更新日志",tabindex:"-1"},[r("更新日志 "),a("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),d(h,{fn:"useParallax"})])}}});export{fs as __pageData,As as default};

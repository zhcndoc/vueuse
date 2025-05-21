import{_ as V,a as j}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as O}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as $}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{_ as R}from"./chunks/Note.B_ue-6bE.js";import{n as z,d as q}from"./chunks/metadata.HXIr2NKd.js";import{u as _}from"./chunks/index.DK97_WvT.js";import{D as P,A as I,a3 as T,z as L,d as W,i as F,o as K,j as s,q as U,H as t,g as l,w as r,y as i,F as J,O as G,t as H,Z as X,Y as N}from"./chunks/vue.DQfvmmyQ.js";import{_ as y}from"./chunks/Key.vue_vue_type_script_setup_true_lang.CFHGzSwU.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/general.CGRH32nb.js";const Y={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Z(x={}){const{reactive:c=!1,target:A=q,aliasMap:D=Y,passive:h=!0,onEventFired:B=z}=x,e=P(new Set),o={toJSON(){return{}},current:e},d=c?P(o):o,m=new Set,b=new Set,a=new Set;function u(k,n){k in d&&(c?d[k]=n:d[k].value=n)}function E(){e.clear();for(const k of a)u(k,!1)}function v(k,n){var f,S;const g=(f=k.key)==null?void 0:f.toLowerCase(),C=[(S=k.code)==null?void 0:S.toLowerCase(),g].filter(Boolean);g&&(n?e.add(g):e.delete(g));for(const p of C)a.add(p),u(p,n);g==="shift"&&!n?(b.forEach(p=>{e.delete(p),u(p,!1)}),b.clear()):typeof k.getModifierState=="function"&&k.getModifierState("Shift")&&n&&[...e,...C].forEach(p=>b.add(p)),g==="meta"&&!n?(m.forEach(p=>{e.delete(p),u(p,!1)}),m.clear()):typeof k.getModifierState=="function"&&k.getModifierState("Meta")&&n&&[...e,...C].forEach(p=>m.add(p))}_(A,"keydown",k=>(v(k,!0),B(k)),{passive:h}),_(A,"keyup",k=>(v(k,!1),B(k)),{passive:h}),_("blur",E,{passive:h}),_("focus",E,{passive:h});const w=new Proxy(d,{get(k,n,g){if(typeof n!="string")return Reflect.get(k,n,g);if(n=n.toLowerCase(),n in D&&(n=D[n]),!(n in d))if(/[+_-]/.test(n)){const C=n.split(/[+_-]/g).map(f=>f.trim());d[n]=I(()=>C.map(f=>T(w[f])).every(Boolean))}else d[n]=L(!1);const M=Reflect.get(k,n,g);return c?T(M):M}});return w}const Q="/vue.svg",ss="/favicon.svg",is={class:"flex flex-col md:flex-row"},as={class:"flex gap-3 justify-center"},hs={class:"flex gap-3 justify-center mt-3"},ns={class:"text-center mt-4"},ks={class:"flex mt-2 justify-center space-x-1 min-h-1.5em"},ls=W({__name:"demo",setup(x){const{shift:c,v:A,u:D,e:h,s:B,v_u_e:e,u_s_e:o,current:d}=Z(),m=I(()=>Array.from(d));return(b,a)=>{const u=R,E=R;return K(),F("div",is,[s("img",{src:Q,class:U(["h-38 py-8 m-auto transform transition duration-500",{"opacity-0":!t(e),"rotate-180":t(c)}])},null,2),s("div",null,[l(u,{class:"text-center mt-0 mb-5"},{default:r(()=>a[0]||(a[0]=[i(" 按以下键测试 ")])),_:1}),s("div",as,[l(y,{value:t(A)},{default:r(()=>a[1]||(a[1]=[i(" V ")])),_:1},8,["value"]),l(y,{value:t(D)},{default:r(()=>a[2]||(a[2]=[i(" u ")])),_:1},8,["value"]),l(y,{value:t(h)},{default:r(()=>a[3]||(a[3]=[i(" e ")])),_:1},8,["value"]),a[7]||(a[7]=s("div",{class:"mx-1"},null,-1)),l(y,{value:t(D)},{default:r(()=>a[4]||(a[4]=[i(" U ")])),_:1},8,["value"]),l(y,{value:t(B)},{default:r(()=>a[5]||(a[5]=[i(" s ")])),_:1},8,["value"]),l(y,{value:t(h)},{default:r(()=>a[6]||(a[6]=[i(" e ")])),_:1},8,["value"])]),s("div",hs,[l(y,{value:t(c)},{default:r(()=>a[8]||(a[8]=[i(" Shift ")])),_:1},8,["value"]),l(y,{value:t(e)},{default:r(()=>a[9]||(a[9]=[i(" Vue ")])),_:1},8,["value"]),l(y,{value:t(o)},{default:r(()=>a[10]||(a[10]=[i(" Use ")])),_:1},8,["value"])]),s("div",ns,[l(E,null,{default:r(()=>a[11]||(a[11]=[i("已按下的键")])),_:1}),s("div",ks,[(K(!0),F(J,null,G(m.value,v=>(K(),F("code",{key:v,class:"font-mono"},H(v),1))),128))])])]),s("img",{src:ss,class:U(["h-38 py-8 m-auto transform transition duration-500",{"opacity-0":!t(o),"rotate-180":t(c)}])},null,2)])}}}),ts=`<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'
import { computed } from 'vue'
import Key from './Key.vue'

const { shift, v, u, e, s, v_u_e, u_s_e, current } = useMagicKeys()
const keys = computed(() => Array.from(current))
<\/script>

<template>
  <div class="flex flex-col md:flex-row">
    <img
      src="/vue.svg"
      class="h-38 py-8 m-auto transform transition duration-500"
      :class="{ 'opacity-0': !v_u_e, 'rotate-180': shift }"
    >

    <div>
      <note class="text-center mt-0 mb-5">
        按以下键测试
      </note>
      <div class="flex gap-3 justify-center">
        <Key :value="v">
          V
        </Key>
        <Key :value="u">
          u
        </Key>
        <Key :value="e">
          e
        </Key>
        <div class="mx-1" />
        <Key :value="u">
          U
        </Key>
        <Key :value="s">
          s
        </Key>
        <Key :value="e">
          e
        </Key>
      </div>

      <div class="flex gap-3 justify-center mt-3">
        <Key :value="shift">
          Shift
        </Key>
        <Key :value="v_u_e">
          Vue
        </Key>
        <Key :value="u_s_e">
          Use
        </Key>
      </div>

      <div class="text-center mt-4">
        <Note>已按下的键</Note>
        <div class="flex mt-2 justify-center space-x-1 min-h-1.5em">
          <code
            v-for="key in keys"
            :key="key"
            class="font-mono"
          >
            {{ key }}
          </code>
        </div>
      </div>
    </div>

    <img
      src="/favicon.svg"
      class="h-38 py-8 m-auto transform transition duration-500"
      :class="{ 'opacity-0': !u_s_e, 'rotate-180': shift }"
    >
  </div>
</template>
`,es={class:"demo-source-link"},ps=["href"],Cs=JSON.parse('{"title":"useMagicKeys","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useMagicKeys/index.md","filePath":"core/useMagicKeys/index.md","lastUpdated":1735397867000}'),rs={name:"core/useMagicKeys/index.md"},bs=Object.assign(rs,{setup(x){const A=X({template:{value:{welcomeSFC:ts}}}).serialize();return(D,h)=>{const B=$,e=O,o=V,d=j;return K(),F("div",null,[h[1]||(h[1]=s("h1",{id:"usemagickeys",tabindex:"-1"},[i("useMagicKeys "),s("a",{class:"header-anchor",href:"#usemagickeys","aria-label":"Permalink to “useMagicKeys”"},"​")],-1)),l(B,{fn:"useMagicKeys"}),h[2]||(h[2]=s("p",null,"响应式按键按下状态，支持神奇按键组合。",-1)),h[3]||(h[3]=s("h2",{id:"示例",tabindex:"-1"},[i("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),l(e,null,{default:r(()=>[s("p",es,[h[0]||(h[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useMagicKeys/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${t(A)}`,target:"_blank"},"playground (beta)",8,ps)]),l(ls)]),_:1}),h[4]||(h[4]=N("",26)),h[5]||(h[5]=s("details",null,[s("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),s("div",{class:"language-typescript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseMagicKeysOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Reactive"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 返回一个响应式对象而不是 ref 对象")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," false")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  reactive"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Reactive")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 监听事件的目标")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," window")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  target"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"EventTarget"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 键的别名映射，所有键都应为小写")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * { target: keycode }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"example"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},' { ctrl: "control" }')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," <预定义映射>")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  aliasMap"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Record"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 注册被动监听器")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  passive"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 自定义键盘按下/释放事件的处理程序。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 当你想应用自定义逻辑时很有用。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 当使用 `e.preventDefault()` 时，你需要传递 `passive: false` 给 `useMagicKeys()`。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  onEventFired"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"e"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"KeyboardEvent"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," MagicKeysInternal"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 当前按下的键的集合，")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 存储原始的键码。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  current"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Set"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseMagicKeysReturn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Reactive"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Readonly"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"  Omit"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"    Reactive"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"      ?"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Record"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"      :"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Record"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ComputedRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">>,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    keyof"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," MagicKeysInternal")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  >"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," &")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"    MagicKeysInternal")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"/**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * 响应式按键按下状态，具有神奇按键组合支持。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"see"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," https://vueuse.org/useMagicKeys")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useMagicKeys"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseMagicKeysOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"false"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseMagicKeysReturn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"false"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useMagicKeys"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseMagicKeysOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"true"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseMagicKeysReturn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"true"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," DefaultMagicKeysAliasMap"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./aliasMap"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')])])])])],-1)),h[6]||(h[6]=N("",3)),l(o,{fn:"useMagicKeys"}),h[7]||(h[7]=s("h2",{id:"更新日志",tabindex:"-1"},[i("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),l(d,{fn:"useMagicKeys"})])}}});export{Cs as __pageData,bs as default};

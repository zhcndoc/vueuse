import{_ as j,a as O}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as $}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as q}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{_ as w}from"./chunks/Note.DW__0Z7J.js";import{n as z,d as L}from"./chunks/metadata.ByJC-ruD.js";import{u as b}from"./chunks/index.qy4VQT1o.js";import{D as S,A as I,a3 as R,z as W,d as P,i as _,o as E,j as s,q as T,H as k,g as e,w as d,y as i,F as J,O as G,t as H,h as X,Z as Y,Y as U}from"./chunks/vue.K-Nh9t7y.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/general.tY1gtZD0.js";const Z={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Q(F={}){const{reactive:o=!1,target:A=L,aliasMap:D=Z,passive:n=!0,onEventFired:B=z}=F,p=S(new Set),c={toJSON(){return{}},current:p},g=o?S(c):c,u=new Set,r=new Set,K=new Set;function a(t,h){t in g&&(o?g[t]=h:g[t].value=h)}function v(){p.clear();for(const t of K)a(t,!1)}function C(t,h){const y=t.key?.toLowerCase(),m=[t.code?.toLowerCase(),y].filter(Boolean);y&&(h?p.add(y):p.delete(y));for(const l of m)K.add(l),a(l,h);if(y==="shift"&&!h){const l=Array.from(r),N=l.indexOf("shift");l.forEach((M,V)=>{V>=N&&(p.delete(M),a(M,!1))}),r.clear()}else typeof t.getModifierState=="function"&&t.getModifierState("Shift")&&h&&[...p,...m].forEach(l=>r.add(l));y==="meta"&&!h?(u.forEach(l=>{p.delete(l),a(l,!1)}),u.clear()):typeof t.getModifierState=="function"&&t.getModifierState("Meta")&&h&&[...p,...m].forEach(l=>u.add(l))}b(A,"keydown",t=>(C(t,!0),B(t)),{passive:n}),b(A,"keyup",t=>(C(t,!1),B(t)),{passive:n}),b("blur",v,{passive:n}),b("focus",v,{passive:n});const f=new Proxy(g,{get(t,h,y){if(typeof h!="string")return Reflect.get(t,h,y);if(h=h.toLowerCase(),h in D&&(h=D[h]),!(h in g))if(/[+_-]/.test(h)){const m=h.split(/[+_-]/g).map(l=>l.trim());g[h]=I(()=>m.map(l=>R(f[l])).every(Boolean))}else g[h]=W(!1);const x=Reflect.get(t,h,y);return o?R(x):x}});return f}const ss="/vue.svg",is="/favicon.svg",as={class:"flex flex-col md:flex-row"},ns={class:"flex gap-3 justify-center"},hs={class:"flex gap-3 justify-center mt-3"},ks={class:"text-center mt-4"},ts={class:"flex mt-2 justify-center space-x-1 min-h-1.5em"},ls=P({__name:"demo",setup(F){const{shift:o,v:A,u:D,e:n,s:B,v_u_e:p,u_s_e:c,current:g}=Q(),u=I(()=>Array.from(g)),r=P({props:{value:{type:Boolean,required:!0}},render(){return X("div",{class:["font-mono px-4 py-2 rounded",this.value?"opacity-100 text-primary bg-primary bg-opacity-15":"opacity-50 bg-gray-600 bg-opacity-10 dark:bg-gray-400 dark:bg-opacity-10"]},this.$slots.default?.())}});return(K,a)=>{const v=w,C=w;return E(),_("div",as,[s("img",{src:ss,class:T(["h-38 py-8 m-auto transform transition duration-500",{"opacity-0":!k(p),"rotate-180":k(o)}])},null,2),s("div",null,[e(v,{class:"text-center mt-0 mb-5"},{default:d(()=>a[0]||(a[0]=[i(" 按以下键测试 ",-1)])),_:1,__:[0]}),s("div",ns,[e(k(r),{value:k(A)},{default:d(()=>a[1]||(a[1]=[i(" V ",-1)])),_:1,__:[1]},8,["value"]),e(k(r),{value:k(D)},{default:d(()=>a[2]||(a[2]=[i(" u ",-1)])),_:1,__:[2]},8,["value"]),e(k(r),{value:k(n)},{default:d(()=>a[3]||(a[3]=[i(" e ",-1)])),_:1,__:[3]},8,["value"]),a[7]||(a[7]=s("div",{class:"mx-1"},null,-1)),e(k(r),{value:k(D)},{default:d(()=>a[4]||(a[4]=[i(" U ",-1)])),_:1,__:[4]},8,["value"]),e(k(r),{value:k(B)},{default:d(()=>a[5]||(a[5]=[i(" s ",-1)])),_:1,__:[5]},8,["value"]),e(k(r),{value:k(n)},{default:d(()=>a[6]||(a[6]=[i(" e ",-1)])),_:1,__:[6]},8,["value"])]),s("div",hs,[e(k(r),{value:k(o)},{default:d(()=>a[8]||(a[8]=[i(" Shift ",-1)])),_:1,__:[8]},8,["value"]),e(k(r),{value:k(p)},{default:d(()=>a[9]||(a[9]=[i(" Vue ",-1)])),_:1,__:[9]},8,["value"]),e(k(r),{value:k(c)},{default:d(()=>a[10]||(a[10]=[i(" Use ",-1)])),_:1,__:[10]},8,["value"])]),s("div",ks,[e(C,null,{default:d(()=>a[11]||(a[11]=[i("已按下的键",-1)])),_:1,__:[11]}),s("div",ts,[(E(!0),_(J,null,G(u.value,f=>(E(),_("code",{key:f,class:"font-mono"},H(f),1))),128))])])]),s("img",{src:is,class:T(["h-38 py-8 m-auto transform transition duration-500",{"opacity-0":!k(c),"rotate-180":k(o)}])},null,2)])}}}),es=`<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'
import { computed, defineComponent, h } from 'vue'

const { shift, v, u, e, s, v_u_e, u_s_e, current } = useMagicKeys()
const keys = computed(() => Array.from(current))

const Key = defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  render() {
    return h('div', {
      class: [
        'font-mono px-4 py-2 rounded',
        this.value
          ? 'opacity-100 text-primary bg-primary bg-opacity-15'
          : 'opacity-50 bg-gray-600 bg-opacity-10 dark:bg-gray-400 dark:bg-opacity-10',
      ],
    }, this.$slots.default?.())
  },
})
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
`,ps={class:"demo-source-link"},rs=["href"],Cs=JSON.parse('{"title":"useMagicKeys","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"core/useMagicKeys/index.md","filePath":"core/useMagicKeys/index.md","lastUpdated":1735397867000}'),ds={name:"core/useMagicKeys/index.md"},bs=Object.assign(ds,{setup(F){const A=Y({template:{value:{welcomeSFC:es}}}).serialize();return(D,n)=>{const B=q,p=$,c=j,g=O;return E(),_("div",null,[n[1]||(n[1]=s("h1",{id:"usemagickeys",tabindex:"-1"},[i("useMagicKeys "),s("a",{class:"header-anchor",href:"#usemagickeys","aria-label":"Permalink to “useMagicKeys”"},"​")],-1)),e(B,{fn:"useMagicKeys"}),n[2]||(n[2]=s("p",null,"响应式按键按下状态，支持神奇按键组合。",-1)),n[3]||(n[3]=s("h2",{id:"示例",tabindex:"-1"},[i("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),e(p,null,{default:d(()=>[s("p",ps,[n[0]||(n[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useMagicKeys/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${k(A)}`,target:"_blank"},"playground (beta)",8,rs)]),e(ls)]),_:1}),n[4]||(n[4]=U("",26)),n[5]||(n[5]=s("details",null,[s("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),s("div",{class:"language-typescript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseMagicKeysOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Reactive"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
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
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," DefaultMagicKeysAliasMap"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./aliasMap"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')])])])])],-1)),n[6]||(n[6]=U("",3)),e(c,{fn:"useMagicKeys"}),n[7]||(n[7]=s("h2",{id:"更新日志",tabindex:"-1"},[i("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),e(g,{fn:"useMagicKeys"})])}}});export{Cs as __pageData,bs as default};

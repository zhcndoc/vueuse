import{_ as u,a as A}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{_ as B}from"./chunks/Note.DW__0Z7J.js";import{u as f}from"./chunks/index.CwkQoaN-.js";import{d as _,i as r,o as d,F as v,j as i,g as a,y as n,w as o,t as e,H as p,Z as E,Y as F}from"./chunks/vue.K-Nh9t7y.js";import{_ as C}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.CV2k26sR.js";import"./chunks/index.BGs_z4hs.js";import"./chunks/index.DCrUl27g.js";import"./chunks/filters.Dfclkjvt.js";import"./chunks/index.84cWVi_S.js";import"./chunks/index.BTw337D0.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/index.qy4VQT1o.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.CLp6I5-5.js";import"./chunks/index.BImTs33O.js";import"./chunks/index.B2rzktNR.js";const x={class:"float"},S=_({__name:"demo",setup(g){const{x:t,y:l}=f({behavior:"smooth"});return(y,s)=>{const h=B;return d(),r(v,null,[i("div",null,[s[4]||(s[4]=i("div",null," 查看屏幕右下角的滚动值。 ",-1)),s[5]||(s[5]=i("div",{class:"scroller"},null,-1)),i("div",x,[a(h,{class:"mb-2"},{default:o(()=>s[2]||(s[2]=[n(" 滚动值 ",-1)])),_:1,__:[2]}),n(" x: "+e(p(t)),1),s[3]||(s[3]=i("br",null,null,-1)),n(" y: "+e(p(l)),1)])]),i("button",{onClick:s[0]||(s[0]=k=>t.value+=200)}," 滚动 X "),i("button",{onClick:s[1]||(s[1]=k=>l.value+=200)}," 滚动 Y ")],64)}}}),w=C(S,[["__scopeId","data-v-a2fd0b86"]]),W=`<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { x, y } = useWindowScroll({ behavior: 'smooth' })
<\/script>

<template>
  <div>
    <div>
      查看屏幕右下角的滚动值。
    </div>
    <div class="scroller" />
    <div class="float">
      <note class="mb-2">
        滚动值
      </note>
      x: {{ x }}<br>
      y: {{ y }}
    </div>
  </div>
  <button @click="x += 200">
    滚动 X
  </button>
  <button @click="y += 200">
    滚动 Y
  </button>
</template>

<style scoped>
.scroller {
  position: absolute;
  top: 100%;
  left: 100%;
  width: 10000px;
  height: 10000px;
}
</style>
`,P={class:"demo-source-link"},$=["href"],as=JSON.parse('{"title":"useWindowScroll","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useWindowScroll/index.md","filePath":"core/useWindowScroll/index.md","lastUpdated":1753423581000}'),T={name:"core/useWindowScroll/index.md"},ns=Object.assign(T,{setup(g){const l=E({template:{value:{welcomeSFC:W}}}).serialize();return(y,s)=>{const h=b,k=m,c=u,D=A;return d(),r("div",null,[s[1]||(s[1]=i("h1",{id:"usewindowscroll",tabindex:"-1"},[n("useWindowScroll "),i("a",{class:"header-anchor",href:"#usewindowscroll","aria-label":"Permalink to “useWindowScroll”"},"​")],-1)),a(h,{fn:"useWindowScroll"}),s[2]||(s[2]=i("p",null,"响应式窗口滚动",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[n("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(k,null,{default:o(()=>[i("p",P,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useWindowScroll/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${p(l)}`,target:"_blank"},"playground (beta)",8,$)]),a(w)]),_:1}),s[4]||(s[4]=F("",7)),a(c,{fn:"useWindowScroll"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[n("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(D,{fn:"useWindowScroll"})])}}});export{as as __pageData,ns as default};

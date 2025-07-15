import{_ as D,a as A}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.CIm_UbOG.js";import{_ as m}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as b}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DMwR8dBP.js";import{_ as B}from"./chunks/Note.BA4Afsl9.js";import{u as f}from"./chunks/index.CCkM28m5.js";import{d as _,i as r,o,F as v,j as i,g as a,y as n,w as d,t as p,H as k,Z as x,Y as S}from"./chunks/vue.DDc96eEg.js";import{_ as w}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/metadata.DSy5Z-Tw.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.DPSadlbP.js";import"./chunks/index.BstIlBID.js";import"./chunks/index.CgL4CVyA.js";import"./chunks/filters.CNOy65Bq.js";import"./chunks/index.Cic7SbUz.js";import"./chunks/index.BwrtMoPo.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/index.CHzdlLbS.js";import"./chunks/general.tY1gtZD0.js";import"./chunks/index.acMvEksu.js";import"./chunks/index.rocSL1WN.js";import"./chunks/index.BrP_zX4n.js";const F={class:"float"},E=_({__name:"demo",setup(g){const{x:t,y:l}=f({behavior:"smooth"});return(y,s)=>{const e=B;return o(),r(v,null,[i("div",null,[s[4]||(s[4]=i("div",null," 查看屏幕右下角的滚动值。 ",-1)),s[5]||(s[5]=i("div",{class:"scroller"},null,-1)),i("div",F,[a(e,{class:"mb-2"},{default:d(()=>s[2]||(s[2]=[n(" 滚动值 ")])),_:1,__:[2]}),n(" x: "+p(k(t)),1),s[3]||(s[3]=i("br",null,null,-1)),n(" y: "+p(k(l)),1)])]),i("button",{onClick:s[0]||(s[0]=h=>t.value+=200)}," 滚动 X "),i("button",{onClick:s[1]||(s[1]=h=>l.value+=200)}," 滚动 Y ")],64)}}}),C=w(E,[["__scopeId","data-v-a2fd0b86"]]),W=`<script setup lang="ts">
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
`,P={class:"demo-source-link"},$=["href"],as=JSON.parse('{"title":"useWindowScroll","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useWindowScroll/index.md","filePath":"core/useWindowScroll/index.md","lastUpdated":1715934697000}'),T={name:"core/useWindowScroll/index.md"},ns=Object.assign(T,{setup(g){const l=x({template:{value:{welcomeSFC:W}}}).serialize();return(y,s)=>{const e=b,h=m,c=D,u=A;return o(),r("div",null,[s[1]||(s[1]=i("h1",{id:"usewindowscroll",tabindex:"-1"},[n("useWindowScroll "),i("a",{class:"header-anchor",href:"#usewindowscroll","aria-label":"Permalink to “useWindowScroll”"},"​")],-1)),a(e,{fn:"useWindowScroll"}),s[2]||(s[2]=i("p",null,"响应式窗口滚动",-1)),s[3]||(s[3]=i("h2",{id:"示例",tabindex:"-1"},[n("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),a(h,null,{default:d(()=>[i("p",P,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useWindowScroll/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${k(l)}`,target:"_blank"},"playground (beta)",8,$)]),a(C)]),_:1}),s[4]||(s[4]=S("",7)),a(c,{fn:"useWindowScroll"}),s[5]||(s[5]=i("h2",{id:"更新日志",tabindex:"-1"},[n("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(u,{fn:"useWindowScroll"})])}}});export{as as __pageData,ns as default};

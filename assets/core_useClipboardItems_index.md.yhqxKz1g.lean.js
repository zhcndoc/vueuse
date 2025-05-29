import{_ as v,a as E}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.B34KrB-E.js";import{_ as I}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.D4TFK0oQ.js";import{_}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.Dvv1reKl.js";import{_ as F}from"./chunks/Note.jk4vUmz6.js";import{r as x,z as y,a3 as P,d as w,a6 as S,i as A,H as o,o as b,g as k,j as i,a2 as T,w as C,y as l,t as m,a5 as R,Z as $,Y as U}from"./chunks/vue.BjJVtbJX.js";import{u as j}from"./chunks/index.D1BqHB-T.js";import{b as N}from"./chunks/metadata.CHQ7S0zC.js";import{u as O}from"./chunks/index.DEO4egZK.js";import{u as V}from"./chunks/index.D6Ixh6S-.js";import{u as f}from"./chunks/index.Bf2cf73k.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.BsCVlyoA.js";import"./chunks/general.CGRH32nb.js";import"./chunks/index.CBIpye6U.js";function z(c={}){const{navigator:t=N,read:r=!1,source:g,copiedDuring:a=1500}=c,n=V(()=>t&&"clipboard"in t),p=x([]),h=y(!1),d=j(()=>h.value=!1,a,{immediate:!1});function u(){n.value&&t.clipboard.read().then(s=>{p.value=s})}n.value&&r&&O(["copy","cut"],u,{passive:!0});async function e(s=P(g)){n.value&&s!=null&&(await t.clipboard.write(s),p.value=s,h.value=!0,d.start())}return{isSupported:n,content:p,copied:h,copy:e}}const W={key:0},q={key:1},M=w({__name:"demo",setup(c){const t=y(""),{content:r,isSupported:g,copy:a}=z(),n=y(""),p=y("");S(()=>{Promise.all(r.value.map(e=>e.getType("text/plain"))).then(async e=>{p.value=e.map(s=>s.type).join(", "),n.value=(await Promise.all(e.map(s=>s.text()))).join(", ")})});const h=f("clipboard-read"),d=f("clipboard-write");function u(e){const s="text/plain",D=new Blob([e],{type:s});return new ClipboardItem({[s]:D})}return(e,s)=>{const D=F;return o(g)?(b(),A("div",W,[k(D,null,{default:C(()=>[s[2]||(s[2]=l(" 剪贴板权限：读取 ")),i("b",null,m(o(h)),1),s[3]||(s[3]=l(" | 写入 ")),i("b",null,m(o(d)),1)]),_:1,__:[2,3]}),i("p",null,[s[4]||(s[4]=l(" 当前已复制的内容：")),i("code",null,m(n.value&&`${n.value}（mime: ${p.value}）`||"无"),1)]),T(i("input",{"onUpdate:modelValue":s[0]||(s[0]=B=>t.value=B),type:"text"},null,512),[[R,t.value]]),i("button",{onClick:s[1]||(s[1]=B=>o(a)([u(t.value)]))}," 复制 ")])):(b(),A("p",q," 你的浏览器不支持剪贴板 API "))}}}),G=`<script setup lang="ts">
import { useClipboardItems, usePermission } from '@vueuse/core'
import { effect, shallowRef } from 'vue'

const input = shallowRef('')

const { content, isSupported, copy } = useClipboardItems()
const computedText = shallowRef('')
const computedMimeType = shallowRef('')
effect(() => {
  Promise.all(content.value.map(item => item.getType('text/plain')))
    .then(async (blobs) => {
      computedMimeType.value = blobs.map(blob => blob.type).join(', ')
      computedText.value = (await Promise.all(blobs.map(blob => blob.text()))).join(', ')
    })
})
const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')

function createClipboardItems(text: string) {
  const mime = 'text/plain'
  const blob = new Blob([text], { type: mime })
  return new ClipboardItem({
    [mime]: blob,
  })
}
<\/script>

<template>
  <div v-if="isSupported">
    <note>
      剪贴板权限：读取 <b>{{ permissionRead }}</b> | 写入
      <b>{{ permissionWrite }}</b>
    </note>
    <p>
      当前已复制的内容：<code>{{ (computedText && \`\${computedText}（mime: \${computedMimeType}）\`) || "无" }}</code>
    </p>
    <input v-model="input" type="text">
    <button
      @click="
        copy([createClipboardItems(input)])
      "
    >
      复制
    </button>
  </div>
  <p v-else>
    你的浏览器不支持剪贴板 API
  </p>
</template>
`,H={class:"demo-source-link"},J=["href"],rs=JSON.parse('{"title":"useClipboardItems","description":"","frontmatter":{"category":"Browser","related":["useClipboard"]},"headers":[],"relativePath":"core/useClipboardItems/index.md","filePath":"core/useClipboardItems/index.md","lastUpdated":1737604618000}'),L={name:"core/useClipboardItems/index.md"},ds=Object.assign(L,{setup(c){const r=$({template:{value:{welcomeSFC:G}}}).serialize();return(g,a)=>{const n=_,p=I,h=v,d=E;return b(),A("div",null,[a[1]||(a[1]=i("h1",{id:"useclipboarditems",tabindex:"-1"},[l("useClipboardItems "),i("a",{class:"header-anchor",href:"#useclipboarditems","aria-label":"Permalink to “useClipboardItems”"},"​")],-1)),k(n,{fn:"useClipboardItems"}),a[2]||(a[2]=i("p",null,[l("使用"),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API",target:"_blank",rel:"noreferrer"},"剪贴板 API"),l("。提供对剪切、复制和粘贴命令的响应能力，以及异步从系统剪贴板读取和写入的功能。通过"),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API",target:"_blank",rel:"noreferrer"},"权限 API"),l(" 进行访问控制，未经用户许可，不允许读取或更改剪贴板内容。")],-1)),a[3]||(a[3]=i("h2",{id:"示例",tabindex:"-1"},[l("示例 "),i("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),k(p,null,{default:C(()=>[i("p",H,[a[0]||(a[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useClipboardItems/demo.vue",target:"_blank"},"源码",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.3.0${o(r)}`,target:"_blank"},"playground (beta)",8,J)]),k(M)]),_:1}),a[4]||(a[4]=U("",10)),k(h,{fn:"useClipboardItems"}),a[5]||(a[5]=i("h2",{id:"更新日志",tabindex:"-1"},[l("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),k(d,{fn:"useClipboardItems"})])}}});export{rs as __pageData,ds as default};

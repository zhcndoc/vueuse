import{_ as w,a as O}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as M}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as z}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import{_ as S}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.y710iK4K.js";import{u as F}from"./chunks/index.Biv1Ajcl.js";import{z as E,H as C,d as P,a1 as Z,i as m,o as A,j as s,y as g,g as y,F as _,O as x,t as o,Z as j,Y as I,w as U}from"./chunks/vue.DDc96eEg.js";import{a as V}from"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.C8PB9l6c.js";import"./chunks/general.tY1gtZD0.js";function R(D,h={}){const p=E(!1),v=E(null);let n=0,k=!0;if(V){const e=typeof h=="function"?{onDrop:h}:h,f=e.multiple??!0,B=e.preventDefaultForUnhandled??!1,r=i=>{const l=Array.from(i.dataTransfer?.files??[]);return l.length===0?null:f?l:[l[0]]},a=i=>{const l=C(e.dataTypes);return typeof l=="function"?l(i):l?.length?i.length===0?!1:i.every(u=>l.some(c=>u.includes(c))):!0},b=i=>{const l=Array.from(i??[]).map(T=>T.type),u=a(l),c=f||i.length<=1;return u&&c},t=()=>/^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent)&&!("chrome"in window),d=(i,l)=>{const u=i.dataTransfer?.items;if(k=(u&&b(u))??!1,B&&i.preventDefault(),!t()&&!k){i.dataTransfer&&(i.dataTransfer.dropEffect="none");return}i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="copy");const c=r(i);switch(l){case"enter":n+=1,p.value=!0,e.onEnter?.(null,i);break;case"over":e.onOver?.(null,i);break;case"leave":n-=1,n===0&&(p.value=!1),e.onLeave?.(null,i);break;case"drop":n=0,p.value=!1,k&&(v.value=c,e.onDrop?.(c,i));break}};F(D,"dragenter",i=>d(i,"enter")),F(D,"dragover",i=>d(i,"over")),F(D,"dragleave",i=>d(i,"leave")),F(D,"drop",i=>d(i,"drop"))}return{files:v,isOverDropZone:p}}const L={class:"flex flex-col gap-2"},$={class:"w-full h-auto relative"},N={grid:"~ cols-2 gap-2"},q={class:"flex flex-wrap justify-center items-center"},H={class:"flex flex-wrap justify-center items-center"},G=P({__name:"demo",setup(D){const h=E([]),p=E([]);function v(r){h.value=[],r&&(h.value=r.map(a=>({name:a.name,size:a.size,type:a.type,lastModified:a.lastModified})))}function n(r){p.value=[],r&&(p.value=r.map(a=>({name:a.name,size:a.size,type:a.type,lastModified:a.lastModified})))}const k=Z("dropZoneRef"),e=Z("imageDropZoneRef"),{isOverDropZone:f}=R(k,v),{isOverDropZone:B}=R(e,{dataTypes:["image/png"],onDrop:n});return(r,a)=>{const b=S;return A(),m("div",L,[s("div",$,[a[4]||(a[4]=s("p",null,"将文件从您的计算机拖放到放置区",-1)),s("div",N,[s("div",{ref_key:"dropZoneRef",ref:k,class:"flex flex-col w-full min-h-200px h-auto bg-gray-400/10 justify-center items-center mt-6 rounded"},[a[1]||(a[1]=s("div",{"font-bold":"",mb2:""}," 通用拖放区域 ",-1)),s("div",null,[a[0]||(a[0]=g(" 是否在拖放区域内： ")),y(b,{value:C(f)},null,8,["value"])]),s("div",q,[(A(!0),m(_,null,x(h.value,(t,d)=>(A(),m("div",{key:d,class:"w-200px bg-black-200/10 ma-2 pa-6"},[s("p",null,"名称："+o(t.name),1),s("p",null,"大小："+o(t.size),1),s("p",null,"类型："+o(t.type),1),s("p",null,"上次修改时间："+o(t.lastModified),1)]))),128))])],512),s("div",{ref_key:"imageDropZoneRef",ref:e,class:"flex flex-col w-full min-h-200px h-auto bg-gray-400/10 justify-center items-center mt-6 rounded"},[a[3]||(a[3]=s("div",{"font-bold":"",mb2:""}," 图片拖放区域 ",-1)),s("div",null,[a[2]||(a[2]=g(" 是否在图片拖放区域内： ")),y(b,{value:C(B)},null,8,["value"])]),s("div",H,[(A(!0),m(_,null,x(p.value,(t,d)=>(A(),m("div",{key:d,class:"w-200px bg-black-200/10 ma-2 pa-6"},[s("p",null,"名称："+o(t.name),1),s("p",null,"大小："+o(t.size),1),s("p",null,"类型："+o(t.type),1),s("p",null,"上次修改时间："+o(t.lastModified),1)]))),128))])],512)])])])}}}),J=`<script setup lang="ts">
import { useDropZone } from '@vueuse/core'
import { shallowRef, useTemplateRef } from 'vue'

const filesData = shallowRef<{ name: string, size: number, type: string, lastModified: number }[]>([])
const imageFilesData = shallowRef<{ name: string, size: number, type: string, lastModified: number }[]>([])

function onDrop(files: File[] | null) {
  filesData.value = []
  if (files) {
    filesData.value = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }))
  }
}

function onImageDrop(files: File[] | null) {
  imageFilesData.value = []
  if (files) {
    imageFilesData.value = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }))
  }
}

const dropZoneRef = useTemplateRef<HTMLElement>('dropZoneRef')
const imageDropZoneRef = useTemplateRef<HTMLElement>('imageDropZoneRef')

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

const { isOverDropZone: isOverImageDropZone } = useDropZone(imageDropZoneRef, { dataTypes: ['image/png'], onDrop: onImageDrop })
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <div class="w-full h-auto relative">
      <p>将文件从您的计算机拖放到放置区</p>

      <div grid="~ cols-2 gap-2">
        <div
          ref="dropZoneRef"
          class="flex flex-col w-full min-h-200px h-auto bg-gray-400/10 justify-center items-center mt-6 rounded"
        >
          <div font-bold mb2>
            通用拖放区域
          </div>
          <div>
            是否在拖放区域内：
            <BooleanDisplay :value="isOverDropZone" />
          </div>
          <div class="flex flex-wrap justify-center items-center">
            <div v-for="(file, index) in filesData" :key="index" class="w-200px bg-black-200/10 ma-2 pa-6">
              <p>名称：{{ file.name }}</p>
              <p>大小：{{ file.size }}</p>
              <p>类型：{{ file.type }}</p>
              <p>上次修改时间：{{ file.lastModified }}</p>
            </div>
          </div>
        </div>
        <div
          ref="imageDropZoneRef"
          class="flex flex-col w-full min-h-200px h-auto bg-gray-400/10 justify-center items-center mt-6 rounded"
        >
          <div font-bold mb2>
            图片拖放区域
          </div>
          <div>
            是否在图片拖放区域内：
            <BooleanDisplay :value="isOverImageDropZone" />
          </div>
          <div class="flex flex-wrap justify-center items-center">
            <div v-for="(file, index) in imageFilesData" :key="index" class="w-200px bg-black-200/10 ma-2 pa-6">
              <p>名称：{{ file.name }}</p>
              <p>大小：{{ file.size }}</p>
              <p>类型：{{ file.type }}</p>
              <p>上次修改时间：{{ file.lastModified }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`,W={class:"demo-source-link"},Y=["href"],hs=JSON.parse('{"title":"useDropZone","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useDropZone/index.md","filePath":"core/useDropZone/index.md","lastUpdated":1753423581000}'),K={name:"core/useDropZone/index.md"},ks=Object.assign(K,{setup(D){const p=j({template:{value:{welcomeSFC:J}}}).serialize();return(v,n)=>{const k=z,e=M,f=w,B=O;return A(),m("div",null,[n[1]||(n[1]=s("h1",{id:"usedropzone",tabindex:"-1"},[g("useDropZone "),s("a",{class:"header-anchor",href:"#usedropzone","aria-label":"Permalink to “useDropZone”"},"​")],-1)),y(k,{fn:"useDropZone"}),n[2]||(n[2]=s("p",null,"创建一个可接收文件拖放的区域。",-1)),n[3]||(n[3]=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title custom-block-title-default"},"WARNING"),s("p",null,[g("由于 Safari 浏览器的限制，文件类型验证仅在放置事件期间可能，而不是在拖动事件中。因此，在 Safari 的拖动操作期间，"),s("code",null,"isOverDropZone"),g(" 值将始终为 "),s("code",null,"true"),g("，无论文件类型如何。")])],-1)),n[4]||(n[4]=s("h2",{id:"示例",tabindex:"-1"},[g("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),y(e,null,{default:U(()=>[s("p",W,[n[0]||(n[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useDropZone/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${C(p)}`,target:"_blank"},"playground (beta)",8,Y)]),y(G)]),_:1}),n[5]||(n[5]=I("",7)),y(f,{fn:"useDropZone"}),n[6]||(n[6]=s("h2",{id:"更新日志",tabindex:"-1"},[g("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),y(B,{fn:"useDropZone"})])}}});export{hs as __pageData,ks as default};

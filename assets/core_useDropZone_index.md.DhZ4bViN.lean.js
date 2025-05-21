import{_ as S,a as P}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.DXhCB5gE.js";import{_ as j}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.BXCM0wL2.js";import{_ as I}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DvcLzfzF.js";import{_ as U}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.DvmxuIkN.js";import{u as E}from"./chunks/index.DK97_WvT.js";import{z as Z,H as x,d as V,a1 as T,i as m,o as A,j as s,y,g as D,F as O,O as M,t as g,Z as L,Y as $,w as N}from"./chunks/vue.DQfvmmyQ.js";import{a as q}from"./chunks/metadata.HXIr2NKd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.DXXiP3sM.js";import"./chunks/general.CGRH32nb.js";function z(f,k={}){const p=Z(!1),v=Z(null);let n=0,r=!0;if(q){const e=typeof k=="function"?{onDrop:k}:k,u=e.multiple??!0,B=e.preventDefaultForUnhandled??!1,d=i=>{var h;const l=Array.from(((h=i.dataTransfer)==null?void 0:h.files)??[]);return l.length===0?null:u?l:[l[0]]},a=i=>{const l=x(e.dataTypes);return typeof l=="function"?l(i):l!=null&&l.length?i.length===0?!1:i.every(h=>l.some(c=>h.includes(c))):!0},b=i=>{const l=Array.from(i??[]).map(F=>F.type),h=a(l),c=u||i.length<=1;return h&&c},t=()=>/^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent)&&!("chrome"in window),o=(i,l)=>{var F,C,_,R,w;const h=(F=i.dataTransfer)==null?void 0:F.items;if(r=(h&&b(h))??!1,B&&i.preventDefault(),!t()&&!r){i.dataTransfer&&(i.dataTransfer.dropEffect="none");return}i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="copy");const c=d(i);switch(l){case"enter":n+=1,p.value=!0,(C=e.onEnter)==null||C.call(e,null,i);break;case"over":(_=e.onOver)==null||_.call(e,null,i);break;case"leave":n-=1,n===0&&(p.value=!1),(R=e.onLeave)==null||R.call(e,null,i);break;case"drop":n=0,p.value=!1,r&&(v.value=c,(w=e.onDrop)==null||w.call(e,c,i));break}};E(f,"dragenter",i=>o(i,"enter")),E(f,"dragover",i=>o(i,"over")),E(f,"dragleave",i=>o(i,"leave")),E(f,"drop",i=>o(i,"drop"))}return{files:v,isOverDropZone:p}}const H={class:"flex flex-col gap-2"},G={class:"w-full h-auto relative"},J={grid:"~ cols-2 gap-2"},W={class:"flex flex-wrap justify-center items-center"},Y={class:"flex flex-wrap justify-center items-center"},K=V({__name:"demo",setup(f){const k=Z([]),p=Z([]);function v(d){k.value=[],d&&(k.value=d.map(a=>({name:a.name,size:a.size,type:a.type,lastModified:a.lastModified})))}function n(d){p.value=[],d&&(p.value=d.map(a=>({name:a.name,size:a.size,type:a.type,lastModified:a.lastModified})))}const r=T("dropZoneRef"),e=T("imageDropZoneRef"),{isOverDropZone:u}=z(r,v),{isOverDropZone:B}=z(e,{dataTypes:["image/png"],onDrop:n});return(d,a)=>{const b=U;return A(),m("div",H,[s("div",G,[a[4]||(a[4]=s("p",null,"将文件从您的计算机拖放到放置区",-1)),s("div",J,[s("div",{ref_key:"dropZoneRef",ref:r,class:"flex flex-col w-full min-h-200px h-auto bg-gray-400/10 justify-center items-center mt-6 rounded"},[a[1]||(a[1]=s("div",{"font-bold":"",mb2:""}," 通用拖放区域 ",-1)),s("div",null,[a[0]||(a[0]=y(" 是否在拖放区域内： ")),D(b,{value:x(u)},null,8,["value"])]),s("div",W,[(A(!0),m(O,null,M(k.value,(t,o)=>(A(),m("div",{key:o,class:"w-200px bg-black-200/10 ma-2 pa-6"},[s("p",null,"名称："+g(t.name),1),s("p",null,"大小："+g(t.size),1),s("p",null,"类型："+g(t.type),1),s("p",null,"上次修改时间："+g(t.lastModified),1)]))),128))])],512),s("div",{ref_key:"imageDropZoneRef",ref:e,class:"flex flex-col w-full min-h-200px h-auto bg-gray-400/10 justify-center items-center mt-6 rounded"},[a[3]||(a[3]=s("div",{"font-bold":"",mb2:""}," 图片拖放区域 ",-1)),s("div",null,[a[2]||(a[2]=y(" 是否在图片拖放区域内： ")),D(b,{value:x(B)},null,8,["value"])]),s("div",Y,[(A(!0),m(O,null,M(p.value,(t,o)=>(A(),m("div",{key:o,class:"w-200px bg-black-200/10 ma-2 pa-6"},[s("p",null,"名称："+g(t.name),1),s("p",null,"大小："+g(t.size),1),s("p",null,"类型："+g(t.type),1),s("p",null,"上次修改时间："+g(t.lastModified),1)]))),128))])],512)])])])}}}),Q=`<script setup lang="ts">
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
`,X={class:"demo-source-link"},ss=["href"],os=JSON.parse('{"title":"useDropZone","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useDropZone/index.md","filePath":"core/useDropZone/index.md","lastUpdated":1735044269000}'),is={name:"core/useDropZone/index.md"},gs=Object.assign(is,{setup(f){const p=L({template:{value:{welcomeSFC:Q}}}).serialize();return(v,n)=>{const r=I,e=j,u=S,B=P;return A(),m("div",null,[n[1]||(n[1]=s("h1",{id:"usedropzone",tabindex:"-1"},[y("useDropZone "),s("a",{class:"header-anchor",href:"#usedropzone","aria-label":"Permalink to “useDropZone”"},"​")],-1)),D(r,{fn:"useDropZone"}),n[2]||(n[2]=s("p",null,"创建一个可接收文件拖放的区域。",-1)),n[3]||(n[3]=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title custom-block-title-default"},"WARNING"),s("p",null,[y("由于 Safari 浏览器的限制，文件类型验证仅在放置事件期间可能，而不是在拖动事件中。因此，在 Safari 的拖动操作期间，"),s("code",null,"isOverDropZone"),y(" 值将始终为 "),s("code",null,"true"),y("，无论文件类型如何。")])],-1)),n[4]||(n[4]=s("h2",{id:"示例",tabindex:"-1"},[y("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),D(e,null,{default:N(()=>[s("p",X,[n[0]||(n[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useDropZone/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.2.0${x(p)}`,target:"_blank"},"playground (beta)",8,ss)]),D(K)]),_:1}),n[5]||(n[5]=$("",7)),D(u,{fn:"useDropZone"}),n[6]||(n[6]=s("h2",{id:"更新日志",tabindex:"-1"},[y("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),D(B,{fn:"useDropZone"})])}}});export{os as __pageData,gs as default};

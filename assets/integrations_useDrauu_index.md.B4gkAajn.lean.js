const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/demo.client.S5MpFS7k.js","assets/chunks/index.CcrqOZa1.js","assets/chunks/vue.K-Nh9t7y.js","assets/chunks/index.B4vKqgz9.js","assets/chunks/index.BrZ6VO76.js","assets/chunks/metadata.ByJC-ruD.js","assets/chunks/Scrubber.vue_vue_type_script_setup_true_lang.BnVbXRVq.js","assets/chunks/index.qy4VQT1o.js","assets/chunks/general.tY1gtZD0.js","assets/chunks/index.pAamNEw_.js","assets/chunks/index.BGs_z4hs.js","assets/chunks/index.BNnEPRNw.js","assets/chunks/index.CLp6I5-5.js","assets/chunks/index.BImTs33O.js","assets/chunks/index.B2rzktNR.js","assets/chunks/index.DtiJt5gQ.js","assets/chunks/index.CMNWZfmo.js"])))=>i.map(i=>d[i]);
import{Z as u,b as c,i as y,o as e,j as i,g as a,Y as D,y as n,w as t,H as l,e as b,ai as A,Q as m,_ as f}from"./chunks/vue.K-Nh9t7y.js";import{_ as B,a as v}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as E}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as C}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";const _=`<script setup lang="ts">
import { toRefs } from '@vueuse/core'
import { useDrauu } from '@vueuse/integrations/useDrauu'
import { ref as deepRef } from 'vue'
import Scrubber from '../../core/useMediaControls/components/Scrubber.vue'

const colors = deepRef(['black', '#ef4444', '#22c55e', '#3b82f6'])
const target = deepRef()
const { undo, redo, canUndo, canRedo, clear, brush } = useDrauu(target, {
  brush: {
    color: 'black',
    size: 3,
  },
})

const { mode, color, size } = toRefs(brush)
<\/script>

<template>
  <div flex="~ col" place="items-center">
    <div
      shadow="~ lg"
      class="drauu-demo"
      border="rounded"
      overflow="hidden"
      max-w="screen-lg"
      h="[60vh]"
      w="full"
      flex="~ col"
    >
      <div
        bg="$vp-c-bg"
        border="1 $vp-c-divider"
        rounded-t
        flex="~ row"
        items="center"
        p="2"
        space="x-4"
      >
        <div flex="~ row 1">
          <button
            v-for="_color in colors"
            :key="_color"
            :class="{ active: _color === color }"
            class="color-button"
            m="r-1"
            @click="() => color = _color"
          >
            <div :style="{ background: _color }" w="6" h="6" border="2 dark:light-900 dark:opacity-50 rounded-full" />
          </button>
        </div>
        <div flex="~ row 1 shrink-1" items="center" w="full" max-w="64">
          <i i-carbon-paint-brush m="r-2" />
          <Scrubber v-model="size" w="full" :min="1" :max="10" />
        </div>
        <div flex="~ row 1" justify="end">
          <button class="tool-button" :disabled="!canUndo" @click="undo()">
            <i i-carbon-undo />
          </button>
          <button class="tool-button" :disabled="!canRedo" @click="redo()">
            <i i-carbon-redo />
          </button>
          <button class="tool-button" @click="clear()">
            <i i-carbon-clean />
          </button>
        </div>
      </div>
      <div flex="~ row 1" h="72">
        <div
          bg="$vp-c-bg"
          border="t-0 1 $vp-c-divider"
          rounded-b
          flex="~ col"
          space="y-2"
          place="items-center"
          p="2"
        >
          <button :class="{ active: brush.mode === 'draw' }" class="tool-button" @click="mode = 'draw'">
            <i i-carbon-pen />
          </button>
          <button :class="{ active: brush.mode === 'line' && !brush.arrowEnd }" class="tool-button" @click="mode = 'line'">
            <i i-mdi-slash-forward />
          </button>
          <button :class="{ active: brush.mode === 'rectangle' }" class="tool-button" @click="mode = 'rectangle'">
            <i i-carbon-checkbox />
          </button>
          <button :class="{ active: brush.mode === 'ellipse' }" class="tool-button" @click="mode = 'ellipse'">
            <i i-mdi-light-shape-circle />
          </button>
        </div>
        <svg
          ref="target"
          w="full"
          h="full"
          bg="white"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.drauu-demo .tool-button {
  @apply rounded-full m-0 bg-transparent text-dark-50 border-none h-8 w-8 p-0 flex place-items-center place-content-center;
}

.dark .drauu-demo .tool-button {
  @apply text-light-900;
}

.drauu-demo .tool-button:disabled {
  @apply text-light-900 bg-transparent border-none;
}

.dark .drauu-demo .tool-button:disabled {
  @apply text-dark-50;
}

.drauu-demo .tool-button:hover {
  @apply text-green-900;
}

.drauu-demo .tool-button.active {
  @apply bg-green-500 text-green-900;
}

.drauu-demo .color-button {
  @apply m-0 bg-transparent text-dark-50 rounded-full border-none h-8 w-8 p-0 flex place-items-center place-content-center;
}

.drauu-demo .color-button:hover,
.drauu-demo .color-button.active {
  @apply bg-light-900;
}

.dark .drauu-demo .color-button:hover,
.dark .drauu-demo .color-button.active {
  @apply bg-dark-300;
}
</style>
`,F={class:"demo-source-link"},x=["href"],z=JSON.parse('{"title":"useDrauu","description":"","frontmatter":{"category":"@Integrations"},"headers":[],"relativePath":"integrations/useDrauu/index.md","filePath":"integrations/useDrauu/index.md","lastUpdated":1739784586000}'),w={name:"integrations/useDrauu/index.md"},H=Object.assign(w,{setup(R){const h=m(()=>f(()=>import("./chunks/demo.client.S5MpFS7k.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))),k=u({template:{value:{welcomeSFC:_}}}).serialize();return(O,s)=>{const p=C,r=c("ClientOnly"),d=E,o=B,g=v;return e(),y("div",null,[s[2]||(s[2]=i("h1",{id:"usedrauu",tabindex:"-1"},[n("useDrauu "),i("a",{class:"header-anchor",href:"#usedrauu","aria-label":"Permalink to “useDrauu”"},"​")],-1)),a(p,{fn:"useDrauu"}),s[3]||(s[3]=i("p",null,[n("这是 "),i("a",{href:"https://github.com/antfu/drauu",target:"_blank",rel:"noreferrer"},"drauu"),n(" 的响应式实例。")],-1)),s[4]||(s[4]=i("h2",{id:"demo",tabindex:"-1"},[n("Demo "),i("a",{class:"header-anchor",href:"#demo","aria-label":"Permalink to “Demo”"},"​")],-1)),a(d,null,{default:t(()=>[i("p",F,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/integrations/useDrauu/demo.client.vue",target:"_blank"},"source",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${l(k)}`,target:"_blank"},"playground (beta)",8,x)]),a(r,null,{default:t(()=>[(e(),b(A,null,{fallback:t(()=>s[1]||(s[1]=[n(" Loading demo... ",-1)])),default:t(()=>[a(l(h))]),_:1}))]),_:1})]),_:1}),s[5]||(s[5]=D("",12)),a(o,{fn:"useDrauu"}),s[6]||(s[6]=i("h2",{id:"更新日志",tabindex:"-1"},[n("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(g,{fn:"useDrauu"})])}}});export{z as __pageData,H as default};

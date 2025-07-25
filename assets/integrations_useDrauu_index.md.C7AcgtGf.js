const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/demo.client.DwIw8Inw.js","assets/chunks/index.BGRFZ62T.js","assets/chunks/vue.DDc96eEg.js","assets/chunks/index.C8PB9l6c.js","assets/chunks/index.BFPHeYQp.js","assets/chunks/metadata.BfYDMb5p.js","assets/chunks/Scrubber.vue_vue_type_script_setup_true_lang.BdIHy-gS.js","assets/chunks/index.Biv1Ajcl.js","assets/chunks/general.tY1gtZD0.js","assets/chunks/index.B3X2KSah.js","assets/chunks/index.BstIlBID.js","assets/chunks/index.hx6XwRSh.js","assets/chunks/index.CP1ndpU1.js","assets/chunks/index.rocSL1WN.js","assets/chunks/index.BrP_zX4n.js","assets/chunks/index.Cz9jLH-Y.js","assets/chunks/index.YwqJXHuf.js"])))=>i.map(i=>d[i]);
import{Z as u,b as c,i as y,o as e,j as i,g as a,Y as D,y as n,w as t,H as l,e as b,ai as A,Q as m,_ as f}from"./chunks/vue.DDc96eEg.js";import{_ as B,a as v}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.aYHrlqwd.js";import{_ as E}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.CTa0lAlj.js";import{_ as C}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.BPSCnKkW.js";import"./chunks/metadata.BfYDMb5p.js";import"./chunks/utils.B5e_uQLX.js";const _=`<script setup lang="ts">
import { toRefs } from '@vueuse/core'
import { useDrauu } from '@vueuse/integrations'
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
`,F={class:"demo-source-link"},x=["href"],z=JSON.parse('{"title":"useDrauu","description":"","frontmatter":{"category":"@Integrations"},"headers":[],"relativePath":"integrations/useDrauu/index.md","filePath":"integrations/useDrauu/index.md","lastUpdated":1739784586000}'),w={name:"integrations/useDrauu/index.md"},H=Object.assign(w,{setup(R){const h=m(()=>f(()=>import("./chunks/demo.client.DwIw8Inw.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))),k=u({template:{value:{welcomeSFC:_}}}).serialize();return(O,s)=>{const p=C,r=c("ClientOnly"),d=E,o=B,g=v;return e(),y("div",null,[s[2]||(s[2]=i("h1",{id:"usedrauu",tabindex:"-1"},[n("useDrauu "),i("a",{class:"header-anchor",href:"#usedrauu","aria-label":"Permalink to “useDrauu”"},"​")],-1)),a(p,{fn:"useDrauu"}),s[3]||(s[3]=i("p",null,[n("这是 "),i("a",{href:"https://github.com/antfu/drauu",target:"_blank",rel:"noreferrer"},"drauu"),n(" 的响应式实例。")],-1)),s[4]||(s[4]=i("h2",{id:"demo",tabindex:"-1"},[n("Demo "),i("a",{class:"header-anchor",href:"#demo","aria-label":"Permalink to “Demo”"},"​")],-1)),a(d,null,{default:t(()=>[i("p",F,[s[0]||(s[0]=i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/integrations/useDrauu/demo.client.vue",target:"_blank"},"source",-1)),i("a",{href:`https://playground.vueuse.org/?vueuse=13.5.0${l(k)}`,target:"_blank"},"playground (beta)",8,x)]),a(r,null,{default:t(()=>[(e(),b(A,null,{fallback:t(()=>s[1]||(s[1]=[n(" Loading demo... ")])),default:t(()=>[a(l(h))]),_:1}))]),_:1})]),_:1}),s[5]||(s[5]=D(` Available in the <a href="/integrations/README">@vueuse/integrations</a> add-on. <h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> drauu@^0</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to “使用”">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> setup</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ts</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> toRefs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@vueuse/core</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> useDrauu</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@vueuse/integrations/useDrauu</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> useTemplateRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">target</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useTemplateRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">SVGSVGElement</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">target</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> undo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> redo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> canUndo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> canRedo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> brush</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useDrauu</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">target</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> toRefs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">brush</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">svg</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">target</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-light-font-style:italic;--shiki-dark:#666666;--shiki-dark-font-style:italic;"> /</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h2 id="类型声明" tabindex="-1">类型声明 <a class="header-anchor" href="#类型声明" aria-label="Permalink to “类型声明”">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> UseDrauuOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Omit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Options</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">el</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> UseDrauuReturn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  drauuInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Drauu</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">undefined</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  load</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">svg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">void</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  dump</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">undefined</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  clear</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">void</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  cancel</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">void</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  undo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">undefined</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  redo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">undefined</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  canUndo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ShallowRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  canRedo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ShallowRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  brush</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Brush</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  onChanged</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">EventHookOn</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  onCommitted</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">EventHookOn</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  onStart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">EventHookOn</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  onEnd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">EventHookOn</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  onCanceled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">EventHookOn</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * 响应式 drauu</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">see</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> https://vueuse.org/useDrauu</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> target</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> The target svg element</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> options</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> Drauu Options</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> declare</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useDrauu</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  target</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">MaybeComputedElementRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">UseDrauuOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> UseDrauuReturn</span></span></code></pre></div><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to “源码”">​</a></h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/integrations/useDrauu/index.ts" target="_blank" rel="noreferrer">源码</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/integrations/useDrauu/demo.client.vue" target="_blank" rel="noreferrer">演示</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/integrations/useDrauu/index.md" target="_blank" rel="noreferrer">文档</a></p><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to “贡献者”">​</a></h2>`,12)),a(o,{fn:"useDrauu"}),s[6]||(s[6]=i("h2",{id:"更新日志",tabindex:"-1"},[n("更新日志 "),i("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),a(g,{fn:"useDrauu"})])}}});export{z as __pageData,H as default};

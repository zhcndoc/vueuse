import{_ as H,a as O}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.AiBx4Pr3.js";import{_ as $}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.Cn6cz7M5.js";import{_ as W}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DUJiisVJ.js";import{A as u,z as C,r as x,B as N,a3 as M,d as j,i as m,o as f,j as s,y as i,a2 as V,a5 as L,s as G,u as Y,H as v,F as J,O as K,n as X,t as T,m as Z,Z as Q,g as B,Y as _,w as ss}from"./chunks/vue.K-Nh9t7y.js";import{u as is}from"./chunks/index.DN7MNMqm.js";import"./chunks/metadata.ByJC-ruD.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.BGs_z4hs.js";import"./chunks/index.B4vKqgz9.js";import"./chunks/index.DtiJt5gQ.js";import"./chunks/index.BImTs33O.js";import"./chunks/index.B2rzktNR.js";import"./chunks/general.tY1gtZD0.js";function as(n,t){const{containerStyle:l,wrapperProps:h,scrollTo:a,calculateRange:k,currentList:p,containerRef:e}="itemHeight"in t?ns(t,n):ls(t,n);return{list:p,scrollTo:a,containerProps:{ref:e,onScroll:()=>{k()},style:l},wrapperProps:h}}function w(n){const t=C(null),l=is(t),h=x([]),a=C(n);return{state:x({start:0,end:10}),source:a,currentList:h,size:l,containerRef:t}}function P(n,t,l){return h=>{if(typeof l=="number")return Math.ceil(h/l);const{start:a=0}=n.value;let k=0,p=0;for(let e=a;e<t.value.length;e++){const r=l(e);if(k+=r,p=e,k>h)break}return p-a}}function q(n,t){return l=>{if(typeof t=="number")return Math.floor(l/t)+1;let h=0,a=0;for(let k=0;k<n.value.length;k++){const p=t(k);if(h+=p,h>=l){a=k;break}}return a+1}}function R(n,t,l,h,{containerRef:a,state:k,currentList:p,source:e}){return()=>{const r=a.value;if(r){const g=l(n==="vertical"?r.scrollTop:r.scrollLeft),y=h(n==="vertical"?r.clientHeight:r.clientWidth),d=g-t,o=g+y+t;k.value={start:d<0?0:d,end:o>e.value.length?e.value.length:o},p.value=e.value.slice(k.value.start,k.value.end).map((c,D)=>({data:c,index:D+k.value.start}))}}}function I(n,t){return l=>typeof n=="number"?l*n:t.value.slice(0,l).reduce((a,k,p)=>a+n(p),0)}function S(n,t,l,h){N([n.width,n.height,()=>M(t),l],()=>{h()})}function z(n,t){return u(()=>typeof n=="number"?t.value.length*n:t.value.reduce((l,h,a)=>l+n(a),0))}const ts={horizontal:"scrollLeft",vertical:"scrollTop"};function U(n,t,l,h){return a=>{h.value&&(h.value[ts[n]]=l(a),t())}}function ls(n,t){const l=w(t),{state:h,source:a,currentList:k,size:p,containerRef:e}=l,r={overflowX:"auto"},{itemWidth:g,overscan:y=5}=n,d=P(h,a,g),o=q(a,g),c=R("horizontal",y,o,d,l),D=I(g,a),A=u(()=>D(h.value.start)),b=z(g,a);S(p,t,e,c);const E=U("horizontal",c,D,e),F=u(()=>({style:{height:"100%",width:`${b.value-A.value}px`,marginLeft:`${A.value}px`,display:"flex"}}));return{scrollTo:E,calculateRange:c,wrapperProps:F,containerStyle:r,currentList:k,containerRef:e}}function ns(n,t){const l=w(t),{state:h,source:a,currentList:k,size:p,containerRef:e}=l,r={overflowY:"auto"},{itemHeight:g,overscan:y=5}=n,d=P(h,a,g),o=q(a,g),c=R("vertical",y,o,d,l),D=I(g,a),A=u(()=>D(h.value.start)),b=z(g,a);S(p,t,e,c);const E=U("vertical",c,D,e),F=u(()=>({style:{width:"100%",height:`${b.value-A.value}px`,marginTop:`${A.value}px`}}));return{calculateRange:c,scrollTo:E,containerStyle:r,wrapperProps:F,currentList:k,containerRef:e}}const hs={class:"inline-block mr-4"},ks={class:"inline-block mr-4"},es={opacity:"70",m:"l-1"},ps=j({__name:"demo",setup(n){const t=C(),l=C(""),h=Array.from(Array.from({length:99999}).keys()).map(y=>({height:y%2===0?42:84,size:y%2===0?"small":"large"})),a=u(()=>h.filter(y=>y.size.startsWith(l.value.toLowerCase()))),{list:k,containerProps:p,wrapperProps:e,scrollTo:r}=as(a,{itemHeight:y=>a.value[y].height+8,overscan:10});function g(){t.value&&r(t.value)}return(y,d)=>(f(),m("div",null,[s("div",null,[s("div",hs,[d[2]||(d[2]=i(" 跳转到索引 ",-1)),V(s("input",{"onUpdate:modelValue":d[0]||(d[0]=o=>t.value=o),placeholder:"索引",type:"number"},null,512),[[L,t.value]])]),s("button",{type:"button",onClick:g}," 前往 ")]),s("div",null,[s("div",ks,[d[3]||(d[3]=i(" 按尺寸筛选列表 ",-1)),V(s("input",{"onUpdate:modelValue":d[1]||(d[1]=o=>l.value=o),placeholder:"例如小号，中号，大号",type:"search"},null,512),[[L,l.value]])])]),s("div",Z(v(p),{class:"h-300px overflow-auto p-2 bg-gray-500/5 rounded"}),[s("div",G(Y(v(e))),[(f(!0),m(J,null,K(v(k),({index:o,data:c})=>(f(),m("div",{key:o,class:"border border-$c-divider mb-2",style:X({height:`${c.height}px`,display:"flex",justifyContent:"center",alignItems:"center"})},[i(" 第 "+T(o)+" 行 ",1),s("span",es,"（"+T(c.size)+"）",1)],4))),128))],16)],16)]))}}),rs=`<script setup lang="ts">
import { useVirtualList } from '@vueuse/core'
import { computed, shallowRef } from 'vue'

const index = shallowRef<number>()
const search = shallowRef('')

const allItems = Array.from(Array.from({ length: 99999 }).keys())
  .map(i => ({
    height: i % 2 === 0 ? 42 : 84,
    size: i % 2 === 0 ? 'small' : 'large',
  }))

const filteredItems = computed(() => {
  return allItems.filter(i => i.size.startsWith(search.value.toLowerCase()))
})

const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
  filteredItems,
  {
    itemHeight: i => (filteredItems.value[i].height + 8),
    overscan: 10,
  },
)
function handleScrollTo() {
  if (index.value)
    scrollTo(index.value)
}
<\/script>

<template>
  <div>
    <div>
      <div class="inline-block mr-4">
        跳转到索引
        <input v-model="index" placeholder="索引" type="number">
      </div>
      <button type="button" @click="handleScrollTo">
        前往
      </button>
    </div>
    <div>
      <div class="inline-block mr-4">
        按尺寸筛选列表
        <input v-model="search" placeholder="例如小号，中号，大号" type="search">
      </div>
    </div>
    <div v-bind="containerProps" class="h-300px overflow-auto p-2 bg-gray-500/5 rounded">
      <div v-bind="wrapperProps">
        <div
          v-for="{ index, data } in list"
          :key="index"
          class="border border-$c-divider mb-2"
          :style="{
            height: \`\${data.height}px\`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }"
        >
          第 {{ index }} 行 <span opacity="70" m="l-1">（{{ data.size }}）</span>
        </div>
      </div>
    </div>
  </div>
</template>
`,ds={class:"demo-source-link"},gs=["href"],_s=JSON.parse('{"title":"useVirtualList","description":"","frontmatter":{"category":"Component"},"headers":[],"relativePath":"core/useVirtualList/index.md","filePath":"core/useVirtualList/index.md","lastUpdated":1730429352000}'),ys={name:"core/useVirtualList/index.md"},xs=Object.assign(ys,{setup(n){const l=Q({template:{value:{welcomeSFC:rs}}}).serialize();return(h,a)=>{const k=W,p=$,e=H,r=O;return f(),m("div",null,[a[1]||(a[1]=s("h1",{id:"usevirtuallist",tabindex:"-1"},[i("useVirtualList "),s("a",{class:"header-anchor",href:"#usevirtuallist","aria-label":"Permalink to “useVirtualList”"},"​")],-1)),B(k,{fn:"useVirtualList"}),a[2]||(a[2]=_("",3)),B(p,null,{default:ss(()=>[s("p",ds,[a[0]||(a[0]=s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useVirtualList/demo.vue",target:"_blank"},"源码",-1)),s("a",{href:`https://playground.vueuse.org/?vueuse=13.6.0${v(l)}`,target:"_blank"},"playground (beta)",8,gs)]),B(ps)]),_:1}),a[3]||(a[3]=_("",16)),a[4]||(a[4]=s("details",null,[s("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"显示类型声明"),s("div",{class:"language-typescript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0",dir:"ltr"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseVirtualListItemSize"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," |"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," (("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"index"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseHorizontalVirtualListOptions")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"  extends"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," UseVirtualListOptionsBase"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 每个项目的宽度，可以是像素值，也可以是返回宽度的函数")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  itemWidth"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseVirtualListItemSize")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseVerticalVirtualListOptions")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"  extends"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," UseVirtualListOptionsBase"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 每个项目的高度，可以是像素值，也可以是返回高度的函数")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  itemHeight"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseVirtualListItemSize")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseVirtualListOptionsBase"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * 视图区域外的额外缓冲项目数量")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"default"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," 5")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"   */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  overscan"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseVirtualListOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  |"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseHorizontalVirtualListOptions")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  |"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseVerticalVirtualListOptions")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseVirtualListItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  data"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  index"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," interface"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseVirtualListReturn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  list"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Ref"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseVirtualListItem"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">[]>")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  scrollTo"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"index"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},") => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  containerProps"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    ref"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"Ref"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"HTMLElement"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," | "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"null"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"    onScroll"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"void")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    style"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"StyleValue")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  wrapperProps"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"ComputedRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    style"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      | {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          width"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          height"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          marginTop"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      | {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          width"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          height"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          marginLeft"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          display"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }>")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"/**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * 如果你需要更多功能，请考虑使用 [`vue-virtual-scroller`](https://github.com/Akryum/vue-virtual-scroller)。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useVirtualList"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," any"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  list"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRef"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"readonly"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]>,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  options"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"UseVirtualListOptions"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," UseVirtualListReturn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])])])],-1)),a[5]||(a[5]=_("",3)),B(e,{fn:"useVirtualList"}),a[6]||(a[6]=s("h2",{id:"更新日志",tabindex:"-1"},[i("更新日志 "),s("a",{class:"header-anchor",href:"#更新日志","aria-label":"Permalink to “更新日志”"},"​")],-1)),B(r,{fn:"useVirtualList"})])}}});export{_s as __pageData,xs as default};

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { shallowRef } from 'vue'

const breakpoints = useBreakpoints(breakpointsTailwind)

const smWidth = breakpointsTailwind.sm

const reactiveStuff = shallowRef<keyof typeof breakpointsTailwind>('sm')
const isGreaterThanBreakpoint = breakpoints.greaterOrEqual(() => reactiveStuff.value)

const current = breakpoints.current()
const active = breakpoints.active()
const xs = breakpoints.smaller('sm')
const xse = breakpoints.smallerOrEqual('sm')
const sm = breakpoints.between('sm', 'md')
const md = breakpoints.between('md', 'lg')
const lg = breakpoints.between('lg', 'xl')
const xl = breakpoints.between('xl', '2xl')
const xxl = breakpoints['2xl']
</script>

<template>
  <div class="font-mono">
    <div> 当前断点: {{ current }} </div>
    <div> 活动断点: {{ active }} </div>
    <div> xs(&lt;{{ smWidth }}px): <BooleanDisplay :value="xs" /></div>
    <div> xs(&lt;={{ smWidth }}px): <BooleanDisplay :value="xse" /></div>
    <div> sm: <BooleanDisplay :value="sm" /></div>
    <div> md: <BooleanDisplay :value="md" /></div>
    <div> lg: <BooleanDisplay :value="lg" /></div>
    <div> xl: <BooleanDisplay :value="xl" /></div>
    <div>2xl: <BooleanDisplay :value="xxl" /></div>
    <div>大于断点: <BooleanDisplay :value="isGreaterThanBreakpoint" /></div>
  </div>
</template>

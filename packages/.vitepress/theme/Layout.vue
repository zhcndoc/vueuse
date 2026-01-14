<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
</script>

<template>
  <DefaultTheme.Layout>
    <template #aside-outline-before>
      <div
        onclick="window.open(atob('aHR0cHM6Ly93d3cucmFpbnl1bi5jb20vbW1fP3M9emhjbmRvYw'))"
        data-umami-event="ads-rainyun"
        class="flex w-full justify-center rounded-2 border border-solid border-gray-950/5 p-2 dark:border-white/10 cursor-pointer mb-4"
      >
        <img src="/ads/rainyun_1.png" class="w-full rounded-1">
      </div>
    </template>

    <template #doc-after>
      <div
        onclick="window.open(atob('aHR0cHM6Ly93d3cucmFpbnl1bi5jb20vbW1fP3M9emhjbmRvYw'))"
        data-umami-event="ads-rainyun"
        class="flex w-full justify-center rounded-2 border border-solid border-gray-950/5 p-2 dark:border-white/10 cursor-pointer mt-4"
      >
        <img src="/ads/rainyun_2.png" class="w-full rounded-1">
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

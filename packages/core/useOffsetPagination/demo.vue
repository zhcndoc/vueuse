<script setup lang="ts">
import { useOffsetPagination } from '@vueuse/core'
import { ref as deepRef, shallowRef } from 'vue'

interface User {
  id: number
  name: string
}
const database = deepRef<User[]>([])

for (let i = 0; i < 80; i++)
  database.value.push({ id: i, name: `user ${i}` })

function fetch(page: number, pageSize: number) {
  return new Promise<User[]>((resolve, reject) => {
    const start = (page - 1) * pageSize
    const end = start + pageSize
    setTimeout(() => {
      resolve(database.value.slice(start, end))
    }, 100)
  })
}

const data = deepRef<User[]>([])

const page = shallowRef(1)
const pageSize = shallowRef(10)

fetchData({
  currentPage: page.value,
  currentPageSize: pageSize.value,
})

function fetchData({ currentPage, currentPageSize }: { currentPage: number, currentPageSize: number }) {
  fetch(currentPage, currentPageSize).then((responseData) => {
    data.value = responseData
  })
}

const {
  currentPage,
  currentPageSize,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total: database.value.length,
  page: 1,
  pageSize,
  onPageChange: fetchData,
  onPageSizeChange: fetchData,
})
</script>

<template>
  <div class="gap-x-4 gap-y-2 grid-cols-2 inline-grid items-center">
    <div opacity="50">
      总数：
    </div>
    <div>{{ database.length }}</div>
    <div opacity="50">
      页数：
    </div>
    <div>{{ pageCount }}</div>
    <div opacity="50">
      当前页大小：
    </div>
    <div>{{ currentPageSize }}</div>
    <div opacity="50">
      当前页码：
    </div>
    <div>{{ currentPage }}</div>
    <div opacity="50">
      是否第一页：
    </div>
    <div>{{ isFirstPage }}</div>
    <div opacity="50">
      是否最后一页：
    </div>
    <div>{{ isLastPage }}</div>
  </div>
  <div class="my-4">
    <button :disabled="isFirstPage" @click="prev">
      上一页
    </button>
    <button
      v-for="item in pageCount"
      :key="item"
      :disabled="currentPage === item"
      @click="currentPage = item"
    >
      {{ item }}
    </button>
    <button :disabled="isLastPage" @click="next">
      下一页
    </button>
  </div>

  <table>
    <thead>
      <tr>
        <td>编号</td>
        <td>姓名</td>
      </tr>
    </thead>
    <tr v-for="d in data" :key="d.id">
      <td>{{ d.id }}</td>
      <td>{{ d.name }}</td>
    </tr>
  </table>
</template>

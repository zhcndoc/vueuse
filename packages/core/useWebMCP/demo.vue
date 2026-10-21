<script setup lang="ts">
import { useWebMCP } from '@vueuse/core'
import { shallowRef } from 'vue'

const todos = shallowRef<string[]>([])
const draft = shallowRef('')

const { isSupported, isRegistered, error } = useWebMCP({
  name: 'add-todo',
  description: 'Add a new item to the user\'s active todo list',
  inputSchema: {
    type: 'object',
    properties: {
      text: { type: 'string', description: 'The text content of the todo item' },
    },
    required: ['text'],
  },
  async execute({ text }: { text: string }) {
    todos.value = [...todos.value, text]
    return `Added todo item: "${text}" successfully.`
  },
})

function add() {
  if (!draft.value.trim())
    return
  todos.value = [...todos.value, draft.value.trim()]
  draft.value = ''
}
</script>

<template>
  <div>
    <p>
      浏览器支持：<b>{{ isSupported }}</b>
    </p>
    <p>
      工具已注册：<b>{{ isRegistered }}</b>
    </p>
    <p v-if="error">
      错误：<b>{{ error.message }}</b>
    </p>

    <note>
      WebMCP 兼容代理可以调用 <code>add-todo</code> 工具向下方列表添加项目；你也可以手动编辑同一列表。此演示卸载时会自动注销该工具。
    </note>

    <form @submit.prevent="add">
      <input v-model="draft" type="text" placeholder="添加待办事项…">
      <button type="submit">
        添加
      </button>
    </form>

    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

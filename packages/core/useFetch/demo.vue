<script setup lang="ts">
import { reactify, useFetch, useToggle } from '@vueuse/core'
import { computed, reactive, shallowRef } from 'vue'
import YAML from 'yaml'

const stringify = reactify(
  (input: any) => YAML.stringify(input, (k, v) => {
    if (typeof v === 'function') {
      return undefined
    }
    return v
  }, {
    singleQuote: true,
    flowCollectionPadding: false,
  }),
)

const url = shallowRef('https://httpbin.org/get')
const refetch = shallowRef(false)

const toggleRefetch = useToggle(refetch)

const {
  data,
  error,
  abort,
  statusCode,
  isFetching,
  isFinished,
  canAbort,
  execute,
} = useFetch(url, { refetch }).get()

const text = stringify(reactive({
  isFinished,
  isFetching,
  canAbort,
  statusCode,
  error,
  data: computed(() => {
    try {
      return JSON.parse(data.value as string)
    }
    catch (e) {
      return null
    }
  }),
}))
</script>

<template>
  <div>
    <div>
      <note>以下URL可用于测试useFetch的不同功能</note>
      <div class="mt-2">
        普通请求：
        <code>
          https://httpbin.org/get
        </code>
      </div>
      <div>
        中止请求：
        <code>
          https://httpbin.org/delay/10
        </code>
      </div>
      <div>
        响应错误：
        <code>
          http://httpbin.org/status/500
        </code>
      </div>
    </div>

    <input v-model="url" type="text">
    <button @click="() => execute()">
      执行
    </button>
    <button @click="() => toggleRefetch()">
      <i v-if="refetch" inline-block align-middle i-carbon-checkmark />
      <i v-else inline-block align-middle i-carbon-error />

      <span class="ml-2">{{ refetch ? '重新获取已开启' : '重新获取已关闭' }}</span>
    </button>
    <button v-if="canAbort" class="orange" @click="abort">
      中止
    </button>
    <pre class="code-block">{{ text }}</pre>
  </div>
</template>

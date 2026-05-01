---
category: Reactivity
---

# toRefs

扩展版 [`toRefs`](https://vuejs.org/api/reactivity-utilities.html#torefs)，也接受对象的 ref。

## 用法

```ts
import { toRefs } from '@vueuse/core'
import { reactive, ref } from 'vue'

const objRef = ref({ a: 'a', b: 0 })
const arrRef = ref(['a', 0])

const { a, b } = toRefs(objRef)
const [a, b] = toRefs(arrRef)

const obj = reactive({ a: 'a', b: 0 })
const arr = reactive(['a', 0])

const { a, b } = toRefs(obj)
const [a, b] = toRefs(arr)
```

## 使用场景

### 解构 props 对象

```vue
<script lang="ts">
import { toRefs, useVModel } from '@vueuse/core'

export default {
  setup(props) {
    const refs = toRefs(useVModel(props, 'data'))

    console.log(refs.a.value) // props.data.a
    refs.a.value = 'a' // emit('update:data', { ...props.data, a: 'a' })

    return { ...refs }
  }
}
</script>

<template>
  <div>
    <input v-model="a" type="text">
    <input v-model="b" type="text">
  </div>
</template>
```

## 类型声明

```ts
export interface ToRefsOptions {
  /**
   * 在属性更新时，用副本替换原始 ref。
   *
   * @default true
   */
  replaceRef?: MaybeRefOrGetter<boolean>
}
/**
 * 扩展版 `toRefs`，也接受对象的 ref。
 *
 * @see https://vueuse.org/toRefs
 * @param objectRef 一个 ref、普通对象或数组。
 * @param options 选项
 */
export declare function toRefs<T extends object>(
  objectRef: MaybeRef<T>,
  options?: ToRefsOptions,
): ToRefs<T>
```

---
category: Sensors
---

# useFocusWithin

用于跟踪某个元素或其任一后代是否获得焦点的响应式工具。其目的是匹配 `:focus-within` CSS 伪类的行为。一个常见的使用场景是在表单元素上查看其任意输入框当前是否获得焦点。

## 基础用法

```vue
<script setup lang="ts">
import { useFocusWithin } from '@vueuse/core'
import { ref, watch } from 'vue'

const target = ref()
const { focused } = useFocusWithin(target)

watch(focused, (focused) => {
  if (focused)
    console.log('Target contains the focused element')
  else
    console.log('Target does NOT contain the focused element')
})
</script>

<template>
  <form ref="target">
    <input type="text" placeholder="名字">
    <input type="text" placeholder="姓氏">
    <input type="text" placeholder="邮箱">
    <input type="text" placeholder="密码">
  </form>
</template>
```

## 类型声明

```ts
export interface UseFocusWithinReturn {
  /**
   * 如果元素或其任一后代获得焦点，则为 true
   */
  focused: ComputedRef<boolean>
}
/**
 * 跟踪焦点是否包含在目标元素内
 *
 * @see https://vueuse.org/useFocusWithin
 * @param target 要跟踪的目标元素
 * @param options focus within 选项
 */
export declare function useFocusWithin(
  target: MaybeElementRef,
  options?: ConfigurableWindow,
): UseFocusWithinReturn
```

---
category: Component
---

# useVModel

简化 `v-model` 绑定的简写方式，将 `props` + `emit` 转换为 `ref`

> 我们鼓励你使用 Vue 的 [`defineModel`](https://vue.zhcndoc.com/api/sfc-script-setup.html#definemodel) 而不是这个组合式，然而有一些边缘情况，比如使用 `TSX` 或 `deep: true` 选项，`defineModel` 不支持。

## 用法

```ts
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])

const data = useVModel(props, 'modelValue', emit)
```

### Options API

```ts
import { useVModel } from '@vueuse/core'

export default {
  setup(props, { emit }) {
    const data = useVModel(props, 'data', emit)

    console.log(data.value) // props.data
    data.value = 'foo' // emit('update:data', 'foo')
  },
}
```

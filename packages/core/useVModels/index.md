---
category: Component
related: useVModel
---

# useVModels

`props` 的 `v-model` 绑定的简写方式。可以将其视为 `toRefs(props)`，但是对属性的更改也会触发 `emit`。

## 用法

```ts
import { useVModels } from '@vueuse/core'

const props = defineProps({
  foo: string,
  bar: number,
})

const emit = defineEmits(['update:foo', 'update:bar'])

const { foo, bar } = useVModels(props, emit)
```

### Options API

```ts
import { useVModels } from '@vueuse/core'

export default {
  props: {
    foo: String,
    bar: Number,
  },
  setup(props, { emit }) {
    const { foo, bar } = useVModels(props, emit)

    console.log(foo.value) // props.foo
    foo.value = 'foo' // emit('update:foo', 'foo')
  },
}
```

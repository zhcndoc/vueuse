---
category: Component
outline: deep
---

# createReusableTemplate

在组件作用域内定义并复用模板。

## 动机

很多时候，我们都会需要复用模板中的某一部分。例如：

```vue
<template>
  <dialog v-if="showInDialog">
    <!-- 一些复杂内容 -->
  </dialog>
  <div v-else>
    <!-- 一些复杂内容 -->
  </div>
</template>
```

我们希望尽可能复用代码。因此通常我们可能需要把这些重复部分提取到一个组件中。然而，在独立组件中，你会失去访问本地绑定的能力。为它们定义 props 和 emits 有时也会很麻烦。

因此，这个函数就是为了提供一种在组件作用域内定义并复用模板的方式。

## 用法

在前面的例子中，我们可以将其重构为：

```vue
<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate>
    <!-- 一些复杂内容 -->
  </DefineTemplate>

  <dialog v-if="showInDialog">
    <ReuseTemplate />
  </dialog>
  <div v-else>
    <ReuseTemplate />
  </div>
</template>
```

- `<DefineTemplate>` 会注册模板并且不渲染任何内容。
- `<ReuseTemplate>` 会渲染由 `<DefineTemplate>` 提供的模板。
- `<DefineTemplate>` 必须先于 `<ReuseTemplate>` 使用。

> **注意**：建议尽可能将其提取为独立组件。滥用这个函数可能会导致你的代码库形成不良实践。

### Options API

当与 [Options API](https://vuejs.org/guide/introduction.html#api-styles) 一起使用时，你需要在组件 setup 外部定义 `createReusableTemplate`，并将其传递给 `components` 选项，才能在模板中使用它们。

```vue
<script>
import { createReusableTemplate } from '@vueuse/core'
import { defineComponent } from 'vue'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

export default defineComponent({
  components: {
    DefineTemplate,
    ReuseTemplate,
  },
  setup() {
    // ...
  },
})
</script>

<template>
  <DefineTemplate v-slot="{ data, msg, anything }">
    <div>{{ data }} 来自使用处</div>
  </DefineTemplate>

  <ReuseTemplate :data="data" msg="第一次使用" />
</template>
```

### 传递数据

你也可以通过插槽向模板传递数据：

- 使用 `v-slot="..."` 在 `<DefineTemplate>` 上访问数据
- 直接在 `<ReuseTemplate>` 上绑定数据，将其传递给模板

```vue
<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ data, msg, anything }">
    <div>{{ data }} 来自使用处</div>
  </DefineTemplate>

  <ReuseTemplate :data="data" msg="第一次使用" />
  <ReuseTemplate :data="anotherData" msg="第二次使用" />
  <ReuseTemplate v-bind="{ data: something, msg: '第三次' }" />
</template>
```

### TypeScript 支持

`createReusableTemplate` 接受一个泛型类型，以为传递给模板的数据提供类型支持：

```vue
<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

// 返回一对 `DefineTemplate` 和 `ReuseTemplate`
const [DefineFoo, ReuseFoo] = createReusableTemplate<{ msg: string }>()

// 你可以创建多个可复用模板
const [DefineBar, ReuseBar] = createReusableTemplate<{ items: string[] }>()
</script>

<template>
  <DefineFoo v-slot="{ msg }">
    <!-- `msg` 的类型为 `string` -->
    <div>Hello {{ msg.toUpperCase() }}</div>
  </DefineFoo>

  <ReuseFoo msg="World" />

  <!-- @ts-expect-error 类型错误！ -->
  <ReuseFoo :msg="1" />
</template>
```

另外，如果你不喜欢数组解构，下面这些用法也是合法的：

```vue
<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const { define: DefineFoo, reuse: ReuseFoo } = createReusableTemplate<{
  msg: string
}>()
</script>

<template>
  <DefineFoo v-slot="{ msg }">
    <div>Hello {{ msg.toUpperCase() }}</div>
  </DefineFoo>

  <ReuseFoo msg="World" />
</template>
```

```vue
<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const TemplateFoo = createReusableTemplate<{ msg: string }>()
</script>

<template>
  <TemplateFoo.define v-slot="{ msg }">
    <div>Hello {{ msg.toUpperCase() }}</div>
  </TemplateFoo.define>

  <TemplateFoo.reuse msg="World" />
</template>
```

::: warning
不支持在不使用 `v-bind` 的情况下传递布尔属性。更多细节请参见 [注意事项](#boolean-props) 部分。
:::

### Props 和 Attributes

默认情况下，传递给 `<ReuseTemplate>` 的所有 props 和 attributes 都会传递给模板。如果你不希望某些 props 传递到 DOM 中，你需要定义运行时 props：

```ts
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate({
  props: {
    msg: String,
    enable: Boolean,
  }
})
```

如果你不想向模板传递任何 props，可以传入 `inheritAttrs` 选项：

```ts
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate({
  inheritAttrs: false,
})
```

### 传递插槽

也可以将插槽从 `<ReuseTemplate>` 传回。你可以通过 `$slots` 在 `<DefineTemplate>` 上访问这些插槽：

```vue
<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ $slots, otherProp }">
    <div some-layout>
      <!-- 渲染该插槽 -->
      <component :is="$slots.default" />
    </div>
  </DefineTemplate>

  <ReuseTemplate>
    <div>一些内容</div>
  </ReuseTemplate>
  <ReuseTemplate>
    <div>另一些内容</div>
  </ReuseTemplate>
</template>
```

## 注意事项

### 布尔属性

与 Vue 的行为不同，定义为 `boolean` 的 props，如果在传递时没有使用 `v-bind` 或者未提供，则会分别解析为空字符串或 `undefined`：

```vue
<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate<{
  value?: boolean
}>()
</script>

<template>
  <DefineTemplate v-slot="{ value }">
    {{ typeof value }}: {{ value }}
  </DefineTemplate>

  <ReuseTemplate :value="true" />
  <!-- boolean: true -->

  <ReuseTemplate :value="false" />
  <!-- boolean: false -->

  <ReuseTemplate value />
  <!-- string: -->

  <ReuseTemplate />
  <!-- undefined: -->
</template>
```

## 参考

此函数迁移自 [vue-reuse-template](https://github.com/antfu/vue-reuse-template)。

关于复用模板的现有 Vue 讨论/问题：

- [关于复用模板的讨论](https://github.com/vuejs/core/discussions/6898)

替代方案：

- [Vue Macros - `namedTemplate`](https://vue-macros.sxzz.moe/features/named-template.html)
- [`unplugin-vue-reuse-template`](https://github.com/liulinboyi/unplugin-vue-reuse-template)

## 类型声明

```ts
type ObjectLiteralWithPotentialObjectLiterals = Record<
  string,
  Record<string, any> | undefined
>
type GenerateSlotsFromSlotMap<
  T extends ObjectLiteralWithPotentialObjectLiterals,
> = {
  [K in keyof T]: Slot<T[K]>
}
export type DefineTemplateComponent<
  Bindings extends Record<string, any>,
  MapSlotNameToSlotProps extends ObjectLiteralWithPotentialObjectLiterals,
> = DefineComponent & {
  new (): {
    $slots: {
      default: (
        _: Bindings & {
          $slots: GenerateSlotsFromSlotMap<MapSlotNameToSlotProps>
        },
      ) => any
    }
  }
}
export type ReuseTemplateComponent<
  Bindings extends Record<string, any>,
  MapSlotNameToSlotProps extends ObjectLiteralWithPotentialObjectLiterals,
> = DefineComponent<Bindings> & {
  new (): {
    $slots: GenerateSlotsFromSlotMap<MapSlotNameToSlotProps>
  }
}
export type ReusableTemplatePair<
  Bindings extends Record<string, any>,
  MapSlotNameToSlotProps extends ObjectLiteralWithPotentialObjectLiterals,
> = [
  DefineTemplateComponent<Bindings, MapSlotNameToSlotProps>,
  ReuseTemplateComponent<Bindings, MapSlotNameToSlotProps>,
] & {
  define: DefineTemplateComponent<Bindings, MapSlotNameToSlotProps>
  reuse: ReuseTemplateComponent<Bindings, MapSlotNameToSlotProps>
}
export interface CreateReusableTemplateOptions<
  Props extends Record<string, any>,
> {
  /**
   * 从 reuse 组件继承 attrs。
   *
   * @default true
   */
  inheritAttrs?: boolean
  /**
   * reuse 组件的名称（对 devtools 很有用）。
   */
  name?: string
  /**
   * reuse 组件的 props 定义。
   */
  props?: ComponentObjectPropsOptions<Props>
}
/**
 * 该函数成对创建 `define` 和 `reuse` 组件，
 * 也允许传入泛型以进行类型绑定。
 *
 * @see https://vueuse.org/createReusableTemplate
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function createReusableTemplate<
  Bindings extends Record<string, any>,
  MapSlotNameToSlotProps extends ObjectLiteralWithPotentialObjectLiterals =
    Record<"default", undefined>,
>(
  options?: CreateReusableTemplateOptions<Bindings>,
): ReusableTemplatePair<Bindings, MapSlotNameToSlotProps>
```

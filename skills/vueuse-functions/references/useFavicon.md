---
category: Browser
---

# useFavicon

响应式 favicon

## 用法

```ts {3}
import { useFavicon } from '@vueuse/core'

const icon = useFavicon()

icon.value = 'dark.png' // 更改当前图标
```

### 传入一个 source ref

你可以向它传入一个 `ref`，源 `ref` 的变化会自动反映到你的 favicon 上。

```ts {7}
import { useFavicon, usePreferredDark } from '@vueuse/core'
import { computed } from 'vue'

const isDark = usePreferredDark()
const favicon = computed(() => isDark.value ? 'dark.png' : 'light.png')

useFavicon(favicon)
```

当传入一个 source ref 时，返回的 ref 将与 source ref 完全相同

```ts
import { useFavicon } from '@vueuse/core'
// ---cut---
const source = shallowRef('icon.png')
const icon = useFavicon(source)

console.log(icon === source) // true
```

## 类型声明

```ts
export interface UseFaviconOptions extends ConfigurableDocument {
  baseUrl?: string
  rel?: string
}
export type UseFaviconReturn =
  | ComputedRef<string | null | undefined>
  | Ref<string | null | undefined>
/**
 * 响应式 favicon。
 *
 * @see https://vueuse.org/useFavicon
 * @param newIcon
 * @param options
 */
export declare function useFavicon(
  newIcon: ReadonlyRefOrGetter<string | null | undefined>,
  options?: UseFaviconOptions,
): ComputedRef<string | null | undefined>
export declare function useFavicon(
  newIcon?: MaybeRef<string | null | undefined>,
  options?: UseFaviconOptions,
): Ref<string | null | undefined>
```

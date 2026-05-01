---
category: Browser
---

# useShare

响应式 [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)。浏览器提供了可共享文本或文件内容的功能。

> `share` 方法必须在用户手势之后调用，例如按钮点击。不能像在页面加载时那样直接调用。这样做是为了帮助防止滥用。

## 用法

```ts
import { useShare } from '@vueuse/core'

const { share, isSupported } = useShare()

function startShare() {
  share({
    title: '你好',
    text: '你好，我的朋友！',
    url: location.href,
  })
}
```

### 传入源 ref

你可以向其中传入一个 `ref`，源 ref 的变化会反映到你的共享选项中。

```ts {6}
import { ref } from 'vue'

const shareOptions = ref<ShareOptions>({ text: 'foo' })
const { share, isSupported } = useShare(shareOptions)

shareOptions.value.text = 'bar'

share()
```

## 类型声明

```ts
export interface UseShareOptions {
  title?: string
  files?: File[]
  text?: string
  url?: string
}
export interface UseShareReturn extends Supportable {
  share: (overrideOptions?: MaybeRefOrGetter<UseShareOptions>) => Promise<void>
}
/**
 * 响应式 Web Share API。
 *
 * @see https://vueuse.org/useShare
 * @param shareOptions
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useShare(
  shareOptions?: MaybeRefOrGetter<UseShareOptions>,
  options?: ConfigurableNavigator,
): UseShareReturn
```

---
category: 浏览器
---

# useScriptTag

创建一个 script 标签，并支持在卸载时自动卸载（删除）该 script 标签。

如果给定的 URL 已经存在一个 script 标签，`useScriptTag()` 不会再创建另一个 script 标签，但请注意，根据你的使用方式，`useScriptTag()` 可能已经在之前某次调用中加载过，然后又卸载了那个特定的 JS 文件。

## 用法

```ts
import { useScriptTag } from '@vueuse/core'

useScriptTag(
  'https://player.twitch.tv/js/embed/v1.js',
  // 当 script 标签加载完成时。
  (el: HTMLScriptElement) => {
    // 执行一些操作
  },
)
```

组件挂载时脚本会自动加载，组件卸载时会自动移除。

## 配置

设置 `manual: true` 以手动控制脚本加载的时机。

```ts
import { useScriptTag } from '@vueuse/core'

const { scriptTag, load, unload } = useScriptTag(
  'https://player.twitch.tv/js/embed/v1.js',
  () => {
    // 执行一些操作
  },
  { manual: true },
)

// 手动控制
await load()
await unload()
```

## 类型声明

```ts
export interface UseScriptTagOptions extends ConfigurableDocument {
  /**
   * 立即加载脚本
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 为 script 标签添加 `async` 属性
   *
   * @default true
   */
  async?: boolean
  /**
   * 脚本类型
   *
   * @default 'text/javascript'
   */
  type?: string
  /**
   * 手动控制加载和卸载的时机
   *
   * @default false
   */
  manual?: boolean
  crossOrigin?: "anonymous" | "use-credentials"
  referrerPolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url"
  noModule?: boolean
  defer?: boolean
  /**
   * 为 script 标签添加自定义属性
   *
   */
  attrs?: Record<string, string>
  /**
   * CSP（内容安全策略）的 nonce 值
   * @default undefined
   */
  nonce?: string
}
export interface UseScriptTagReturn {
  scriptTag: ShallowRef<HTMLScriptElement | null>
  load: (waitForScriptLoad?: boolean) => Promise<HTMLScriptElement | boolean>
  unload: () => void
}
/**
 * 异步加载 script 标签。
 *
 * @see https://vueuse.org/useScriptTag
 * @param src
 * @param onLoaded
 * @param options
 */
export declare function useScriptTag(
  src: MaybeRefOrGetter<string>,
  onLoaded?: (el: HTMLScriptElement) => void,
  options?: UseScriptTagOptions,
): UseScriptTagReturn
```

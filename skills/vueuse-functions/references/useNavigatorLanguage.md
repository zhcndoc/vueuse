---
category: Sensors
---

# useNavigatorLanguage

响应式的 [navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)。

## 用法

```ts
import { useNavigatorLanguage } from '@vueuse/core'

const { language } = useNavigatorLanguage()

watch(language, () => {
  // 监听值的变化
})
```

## 类型声明

```ts
export interface NavigatorLanguageState extends Supportable {
  /**
   *
   * ISO 639-1 标准语言代码
   *
   * @info 检测到的用户代理语言偏好，作为语言标签
   * （有时也称为“区域设置标识符”）。
   * 这由一个 2-3 个字母的基础语言标签组成，用于表示一种
   * 语言，后面可选地跟随由
   * '-' 分隔的附加子标签。最常见的额外信息是国家或地区
   * 变体（如 'en-US' 或 'fr-CA'）。
   *
   *
   * @see https://www.iso.org/iso-639-language-codes.html
   * @see https://www.loc.gov/standards/iso639-2/php/code_list.php
   *
   */
  language: ShallowRef<string | undefined>
}
export interface UseNavigatorLanguageOptions extends ConfigurableWindow {}
export type UseNavigatorLanguageReturn = Readonly<NavigatorLanguageState>
/**
 *
 * 响应式的 useNavigatorLanguage
 *
 * 检测当前选中的用户语言并返回一个响应式语言
 * @see https://vueuse.org/useNavigatorLanguage
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useNavigatorLanguage(
  options?: UseNavigatorLanguageOptions,
): UseNavigatorLanguageReturn
```

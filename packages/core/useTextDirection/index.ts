import type { ConfigurableDocument } from '../_configurable'
import type { MaybeElement } from '../unrefElement'
import { tryOnMounted } from '@vueuse/shared'

import { computed, ref as deepRef } from 'vue'
import { defaultDocument } from '../_configurable'
import { useMutationObserver } from '../useMutationObserver'

export type UseTextDirectionValue = 'ltr' | 'rtl' | 'auto'

export interface UseTextDirectionOptions extends ConfigurableDocument {
  /**
   * 适用于的目标元素的 CSS 选择器
   *
   * @default 'html'
   */
  selector?: string
  /**
   * 使用 MutationObserver 观察 `document.querySelector(selector)` 的变化
   *
   * @default false
   */
  observe?: boolean
  /**
   * 初始值
   *
   * @default 'ltr'
   */
  initialValue?: UseTextDirectionValue
}

/**
 * 元素文本的响应式方向。
 *
 * @see https://vueuse.org/useTextDirection
 */
export function useTextDirection(options: UseTextDirectionOptions = {}) {
  const {
    document = defaultDocument,
    selector = 'html',
    observe = false,
    initialValue = 'ltr',
  } = options

  function getValue() {
    return document?.querySelector(selector)?.getAttribute('dir') as UseTextDirectionValue ?? initialValue
  }

  const dir = deepRef<UseTextDirectionValue>(getValue())

  tryOnMounted(() => dir.value = getValue())

  if (observe && document) {
    useMutationObserver(
      document.querySelector(selector) as MaybeElement,
      () => dir.value = getValue(),
      { attributes: true },
    )
  }

  return computed<UseTextDirectionValue>({
    get() {
      return dir.value
    },
    set(v) {
      dir.value = v
      if (!document)
        return
      if (dir.value)
        document.querySelector(selector)?.setAttribute('dir', dir.value)
      else
        document.querySelector(selector)?.removeAttribute('dir')
    },
  })
}

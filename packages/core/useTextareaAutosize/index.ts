import type { Fn } from '@vueuse/shared'
import type { MaybeRef, WatchSource } from 'vue'
import type { ConfigurableWindow } from '../_configurable'
import { toRef } from '@vueuse/shared'
import { nextTick, shallowRef, toValue, watch } from 'vue'
import { defaultWindow } from '../_configurable'
import { useResizeObserver } from '../useResizeObserver'

export interface UseTextareaAutosizeOptions extends ConfigurableWindow {
  /** 自动调整大小的文本区域元素。 */
  element?: MaybeRef<HTMLTextAreaElement | undefined | null>
  /** 文本区域的内容。 */
  input?: MaybeRef<string>
  /** 监听应触发文本区域大小调整的源。 */
  watch?: WatchSource | Array<WatchSource>
  /** 当文本区域大小发生变化时调用的函数。 */
  onResize?: () => void
  /** 指定样式目标以根据文本区域内容应用高度。如果未提供，将使用文本区域本身。 */
  styleTarget?: MaybeRef<HTMLElement | undefined>
  /** 指定用于调整高度的样式属性。可以是 `height | minHeight`。默认值为 `height`。 */
  styleProp?: 'height' | 'minHeight'
}

/**
 * Call window.requestAnimationFrame(), if not available, just call the function
 *
 * @param window
 * @param fn
 */
function tryRequestAnimationFrame(
  window: Window | undefined = defaultWindow,
  fn: Fn,
) {
  if (window && typeof window.requestAnimationFrame === 'function') {
    window.requestAnimationFrame(fn)
  }
  else {
    fn()
  }
}

export function useTextareaAutosize(options: UseTextareaAutosizeOptions = {}) {
  const { window = defaultWindow } = options
  const textarea = toRef(options?.element)
  const input = toRef(options?.input ?? '')
  const styleProp = options?.styleProp ?? 'height'
  const textareaScrollHeight = shallowRef(1)
  const textareaOldWidth = shallowRef(0)

  function triggerResize() {
    if (!textarea.value)
      return

    let height = ''

    textarea.value.style[styleProp] = '1px'
    textareaScrollHeight.value = textarea.value?.scrollHeight
    const _styleTarget = toValue(options?.styleTarget)
    // If style target is provided update its height
    if (_styleTarget)
      _styleTarget.style[styleProp] = `${textareaScrollHeight.value}px`
    // else update textarea's height by updating height variable
    else
      height = `${textareaScrollHeight.value}px`

    textarea.value.style[styleProp] = height
  }

  watch([input, textarea], () => nextTick(triggerResize), { immediate: true })

  watch(textareaScrollHeight, () => options?.onResize?.())

  useResizeObserver(textarea, ([{ contentRect }]) => {
    if (textareaOldWidth.value === contentRect.width)
      return

    tryRequestAnimationFrame(window, () => {
      textareaOldWidth.value = contentRect.width
      triggerResize()
    })
  })

  if (options?.watch)
    watch(options.watch, triggerResize, { immediate: true, deep: true })

  return {
    textarea,
    input,
    triggerResize,
  }
}

export type UseTextareaAutosizeReturn = ReturnType<typeof useTextareaAutosize>

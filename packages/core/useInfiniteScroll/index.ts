import type { Awaitable } from '@vueuse/shared'
import type { MaybeRefOrGetter, UnwrapNestedRefs } from 'vue'
import type { UseScrollOptions } from '../useScroll'
import { tryOnUnmounted } from '@vueuse/shared'
import { computed, ref as deepRef, nextTick, reactive, toValue, watch } from 'vue'
import { resolveElement } from '../_resolve-element'
import { useElementVisibility } from '../useElementVisibility'
import { useScroll } from '../useScroll'

type InfiniteScrollElement = HTMLElement | SVGElement | Window | Document | null | undefined

export interface UseInfiniteScrollOptions<T extends InfiniteScrollElement = InfiniteScrollElement> extends UseScrollOptions {
  /**
   * 元素底部与视口底部的最小距离
   *
   * @default 0
   */
  distance?: number

  /**
   * 监听滚动的方向。
   *
   * @default 'bottom'
   */
  direction?: 'top' | 'bottom' | 'left' | 'right'

  /**
   * 两次加载更多之间的时间间隔（用于避免过多的调用）。
   *
   * @default 100
   */
  interval?: number

  /**
   * 用于确定特定元素是否可以加载更多内容的函数。
   * 如果对于给定的元素允许加载更多内容，则应返回 `true`，否则返回 `false`。
   */
  canLoadMore?: (el: T) => boolean
}

/**
 * Reactive infinite scroll.
 *
 * @see https://vueuse.org/useInfiniteScroll
 */
export function useInfiniteScroll<T extends InfiniteScrollElement>(
  element: MaybeRefOrGetter<T>,
  onLoadMore: (state: UnwrapNestedRefs<ReturnType<typeof useScroll>>) => Awaitable<void>,
  options: UseInfiniteScrollOptions<T> = {},
) {
  const {
    direction = 'bottom',
    interval = 100,
    canLoadMore = () => true,
  } = options

  const state = reactive(useScroll(
    element,
    {
      ...options,
      offset: {
        [direction]: options.distance ?? 0,
        ...options.offset,
      },
    },
  ))

  const promise = deepRef<any>()
  const isLoading = computed(() => !!promise.value)

  // Document and Window cannot be observed by IntersectionObserver
  const observedElement = computed<HTMLElement | SVGElement | null | undefined>(() => {
    return resolveElement(toValue(element))
  })

  const isElementVisible = useElementVisibility(observedElement)

  function checkAndLoad() {
    state.measure()

    if (!observedElement.value || !isElementVisible.value || !canLoadMore(observedElement.value as T))
      return

    const { scrollHeight, clientHeight, scrollWidth, clientWidth } = observedElement.value as HTMLElement
    const isNarrower = (direction === 'bottom' || direction === 'top')
      ? scrollHeight <= clientHeight
      : scrollWidth <= clientWidth

    if (state.arrivedState[direction] || isNarrower) {
      if (!promise.value) {
        promise.value = Promise.all([
          onLoadMore(state),
          new Promise(resolve => setTimeout(resolve, interval)),
        ])
          .finally(() => {
            promise.value = null
            nextTick(() => checkAndLoad())
          })
      }
    }
  }

  const stop = watch(
    () => [state.arrivedState[direction], isElementVisible.value],
    checkAndLoad,
    { immediate: true },
  )

  tryOnUnmounted(stop)

  return {
    isLoading,
    reset() {
      nextTick(() => checkAndLoad())
    },
  }
}

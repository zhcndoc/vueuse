import type { ComputedRef, MaybeRefOrGetter, ShallowRef } from 'vue'
import type { PointerType, Position } from '../types'
import type { UseSwipeDirection } from '../useSwipe'
import { toRef, tryOnMounted } from '@vueuse/shared'
import { computed, reactive, readonly, shallowRef } from 'vue'
import { useEventListener } from '../useEventListener'

export interface UsePointerSwipeOptions {
  /**
   * @default 50
   * 阈值
   */
  threshold?: number

  /**
   * 滑动开始时的回调。
   */
  onSwipeStart?: (e: PointerEvent) => void

  /**
   * 滑动移动时的回调。
   */
  onSwipe?: (e: PointerEvent) => void

  /**
   * 滑动结束时的回调。
   */
  onSwipeEnd?: (e: PointerEvent, direction: UseSwipeDirection) => void

  /**
   * 要监听的指针类型。
   *
   * @default ['mouse', 'touch', 'pen']
   */
  pointerTypes?: PointerType[]

  /**
   * 在滑动时禁用文本选择。
   *
   * @default false
   */
  disableTextSelect?: boolean
}

export interface UsePointerSwipeReturn {
  readonly isSwiping: ShallowRef<boolean>
  direction: Readonly<ShallowRef<UseSwipeDirection>>
  readonly posStart: Position
  readonly posEnd: Position
  distanceX: Readonly<ComputedRef<number>>
  distanceY: Readonly<ComputedRef<number>>
  stop: () => void
}

/**
 * 基于 PointerEvents 的响应式滑动检测。
 *
 * @see https://vueuse.org/usePointerSwipe
 * @param target
 * @param options
 */
export function usePointerSwipe(
  target: MaybeRefOrGetter<HTMLElement | null | undefined>,
  options: UsePointerSwipeOptions = {},
): UsePointerSwipeReturn {
  const targetRef = toRef(target)

  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    disableTextSelect = false,
  } = options

  const posStart = reactive<Position>({ x: 0, y: 0 })
  const updatePosStart = (x: number, y: number) => {
    posStart.x = x
    posStart.y = y
  }

  const posEnd = reactive<Position>({ x: 0, y: 0 })
  const updatePosEnd = (x: number, y: number) => {
    posEnd.x = x
    posEnd.y = y
  }

  const distanceX = computed(() => posStart.x - posEnd.x)
  const distanceY = computed(() => posStart.y - posEnd.y)

  const { max, abs } = Math
  const isThresholdExceeded = computed(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold)
  const isSwiping = shallowRef(false)
  const isPointerDown = shallowRef(false)

  const direction = computed(() => {
    if (!isThresholdExceeded.value)
      return 'none'

    if (abs(distanceX.value) > abs(distanceY.value)) {
      return distanceX.value > 0
        ? 'left'
        : 'right'
    }
    else {
      return distanceY.value > 0
        ? 'up'
        : 'down'
    }
  })

  const eventIsAllowed = (e: PointerEvent): boolean => {
    const isReleasingButton = e.buttons === 0
    const isPrimaryButton = e.buttons === 1
    return options.pointerTypes?.includes(e.pointerType as PointerType) ?? (isReleasingButton || isPrimaryButton) ?? true
  }

  const listenerOptions = { passive: true }

  const stops = [
    useEventListener(target, 'pointerdown', (e: PointerEvent) => {
      if (!eventIsAllowed(e))
        return
      isPointerDown.value = true
      // Future pointer events will be retargeted to target until pointerup/cancel
      const eventTarget = e.target as HTMLElement | undefined
      eventTarget?.setPointerCapture(e.pointerId)
      const { clientX: x, clientY: y } = e
      updatePosStart(x, y)
      updatePosEnd(x, y)
      onSwipeStart?.(e)
    }, listenerOptions),

    useEventListener(target, 'pointermove', (e: PointerEvent) => {
      if (!eventIsAllowed(e))
        return
      if (!isPointerDown.value)
        return

      const { clientX: x, clientY: y } = e
      updatePosEnd(x, y)
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true
      if (isSwiping.value)
        onSwipe?.(e)
    }, listenerOptions),

    useEventListener(target, 'pointerup', (e: PointerEvent) => {
      if (!eventIsAllowed(e))
        return
      if (isSwiping.value)
        onSwipeEnd?.(e, direction.value)

      isPointerDown.value = false
      isSwiping.value = false
    }, listenerOptions),
  ]

  tryOnMounted(() => {
    // Allow vertical scrolling, disable horizontal scrolling by touch
    targetRef.value?.style?.setProperty('touch-action', 'pan-y')

    if (disableTextSelect) {
    // Disable text selection on swipe
      targetRef.value?.style?.setProperty('-webkit-user-select', 'none')
      targetRef.value?.style?.setProperty('-ms-user-select', 'none')
      targetRef.value?.style?.setProperty('user-select', 'none')
    }
  })

  const stop = () => stops.forEach(s => s())

  return {
    isSwiping: readonly(isSwiping),
    direction: readonly(direction),
    posStart: readonly(posStart),
    posEnd: readonly(posEnd),
    distanceX,
    distanceY,
    stop,
  }
}

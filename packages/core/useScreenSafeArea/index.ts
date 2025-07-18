import { isClient, tryOnMounted, useDebounceFn } from '@vueuse/shared'
import { shallowRef } from 'vue'
import { useCssVar } from '../useCssVar'
import { useEventListener } from '../useEventListener'

const topVarName = '--vueuse-safe-area-top'
const rightVarName = '--vueuse-safe-area-right'
const bottomVarName = '--vueuse-safe-area-bottom'
const leftVarName = '--vueuse-safe-area-left'

/**
 * 响应式 `env(safe-area-inset-*)`
 *
 * @see https://vueuse.org/useScreenSafeArea
 */
export function useScreenSafeArea() {
  const top = shallowRef('')
  const right = shallowRef('')
  const bottom = shallowRef('')
  const left = shallowRef('')

  if (isClient) {
    const topCssVar = useCssVar(topVarName)
    const rightCssVar = useCssVar(rightVarName)
    const bottomCssVar = useCssVar(bottomVarName)
    const leftCssVar = useCssVar(leftVarName)

    topCssVar.value = 'env(safe-area-inset-top, 0px)'
    rightCssVar.value = 'env(safe-area-inset-right, 0px)'
    bottomCssVar.value = 'env(safe-area-inset-bottom, 0px)'
    leftCssVar.value = 'env(safe-area-inset-left, 0px)'

    tryOnMounted(update)

    useEventListener('resize', useDebounceFn(update), { passive: true })
  }

  function update() {
    top.value = getValue(topVarName)
    right.value = getValue(rightVarName)
    bottom.value = getValue(bottomVarName)
    left.value = getValue(leftVarName)
  }

  return {
    top,
    right,
    bottom,
    left,
    update,
  }
}

type VarName = '--vueuse-safe-area-top' | '--vueuse-safe-area-right' | '--vueuse-safe-area-bottom' | '--vueuse-safe-area-left'

function getValue(position: VarName) {
  return getComputedStyle(document.documentElement).getPropertyValue(position)
}

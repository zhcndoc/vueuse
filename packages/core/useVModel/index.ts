import type { Ref, UnwrapRef, WritableComputedRef } from 'vue'
import type { CloneFn } from '../useCloned'
import { isDef } from '@vueuse/shared'
import { computed, ref as deepRef, getCurrentInstance, nextTick, watch } from 'vue'
import { cloneFnJSON } from '../useCloned'

export interface UseVModelOptions<T, Passive extends boolean = false> {
  /**
   * 当 passive 设置为 `true` 时，它将使用 `watch` 来与 props 和 ref 同步。
   * 而不是依赖于 `v-model` 或 `.sync`。
   *
   * @default false
   */
  passive?: Passive
  /**
   * 当设置了 eventName 时，它的值将用于覆盖 emit 事件的名称。
   *
   * @default undefined
   */
  eventName?: string
  /**
   * 尝试检查嵌套对象或数组中属性的更改。
   * 仅在将 `passive` 选项设置为 `true` 时应用
   *
   * @default false
   */
  deep?: boolean
  /**
   * 在未传递值时定义返回 ref 的默认值。
   *
   * @default undefined
   */
  defaultValue?: T
  /**
   * 克隆 props。
   * 接受一个自定义克隆函数。
   * 当设置为 `true` 时，它将使用 `JSON.parse(JSON.stringify(value))` 进行克隆。
   *
   * @default false
   */
  clone?: boolean | CloneFn<T>
  /**
   * 在触发 emit 事件之前的钩子，可用于表单验证。
   * 如果返回 false，则不会触发 emit 事件。
   *
   * @default undefined
   */
  shouldEmit?: (v: T) => boolean
}

export function useVModel<P extends object, K extends keyof P, Name extends string>(
  props: P,
  key?: K,
  emit?: (name: Name, ...args: any[]) => void,
  options?: UseVModelOptions<P[K], false>,
): WritableComputedRef<P[K]>

export function useVModel<P extends object, K extends keyof P, Name extends string>(
  props: P,
  key?: K,
  emit?: (name: Name, ...args: any[]) => void,
  options?: UseVModelOptions<P[K], true>,
): Ref<UnwrapRef<P[K]>>

/**
 * v-model 绑定的简写，props + emit -> ref
 *
 * @see https://vueuse.org/useVModel
 * @param props
 * @param key （默认 'modelValue'）
 * @param emit
 */
export function useVModel<P extends object, K extends keyof P, Name extends string, Passive extends boolean>(
  props: P,
  key?: K,
  emit?: (name: Name, ...args: any[]) => void,
  options: UseVModelOptions<P[K], Passive> = {},
) {
  const {
    clone = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue,
    shouldEmit,
  } = options

  const vm = getCurrentInstance()
  // @ts-expect-error mis-alignment with @vue/composition-api
  const _emit = emit || vm?.emit || vm?.$emit?.bind(vm) || vm?.proxy?.$emit?.bind(vm?.proxy)
  let event: string | undefined = eventName

  if (!key) {
    key = 'modelValue' as K
  }

  event = event || `update:${key!.toString()}`

  const cloneFn = (val: P[K]) => !clone
    ? val
    : typeof clone === 'function'
      ? clone(val)
      : cloneFnJSON(val)

  const getValue = () => isDef(props[key!])
    ? cloneFn(props[key!])
    : defaultValue

  const triggerEmit = (value: P[K]) => {
    if (shouldEmit) {
      if (shouldEmit(value))
        _emit(event, value)
    }
    else {
      _emit(event, value)
    }
  }

  if (passive) {
    const initialValue = getValue()
    const proxy = deepRef<P[K]>(initialValue!)
    let isUpdating = false

    watch(
      () => props[key!],
      (v) => {
        if (!isUpdating) {
          isUpdating = true
          ;(proxy as any).value = cloneFn(v) as UnwrapRef<P[K]>
          nextTick(() => isUpdating = false)
        }
      },
    )

    watch(
      proxy,
      (v) => {
        if (!isUpdating && (v !== props[key!] || deep))
          triggerEmit(v as P[K])
      },
      { deep },
    )

    return proxy
  }
  else {
    return computed<P[K]>({
      get() {
        return getValue()!
      },
      set(value) {
        triggerEmit(value)
      },
    })
  }
}

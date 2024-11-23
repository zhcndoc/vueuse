import type { Ref, ShallowUnwrapRef } from 'vue'
import { isRef } from 'vue'

export interface ExtendRefOptions<Unwrap extends boolean = boolean> {
  /**
   * 是否将扩展属性设置为可枚举
   *
   * @default false
   */
  enumerable?: boolean

  /**
   * 是否对 Ref 属性进行解封装
   *
   * @default true
   */
  unwrap?: Unwrap
}

/**
 * 重载 1：unwrap 设置为 false
 */
export function extendRef<R extends Ref<any>, Extend extends object, Options extends ExtendRefOptions<false>>(ref: R, extend: Extend, options?: Options): ShallowUnwrapRef<Extend> & R
/**
 * 重载 2：unwrap 未设置或设置为 true
 */
export function extendRef<R extends Ref<any>, Extend extends object, Options extends ExtendRefOptions>(ref: R, extend: Extend, options?: Options): Extend & R

// 实现
export function extendRef<R extends Ref<any>, Extend extends object>(ref: R, extend: Extend, { enumerable = false, unwrap = true }: ExtendRefOptions = {}) {
  for (const [key, value] of Object.entries(extend)) {
    if (key === 'value')
      continue

    if (isRef(value) && unwrap) {
      Object.defineProperty(ref, key, {
        get() {
          return value.value
        },
        set(v) {
          value.value = v
        },
        enumerable,
      })
    }
    else {
      Object.defineProperty(ref, key, { value, enumerable })
    }
  }
  return ref
}

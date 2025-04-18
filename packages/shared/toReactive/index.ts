import type { MaybeRef, UnwrapNestedRefs } from 'vue'
// eslint-disable-next-line no-restricted-imports
import { isRef, reactive, unref } from 'vue'

/**
 * 将 ref 转换为 reactive。
 *
 * @see https://vueuse.org/toReactive
 * @param objectRef A ref of object
 */
export function toReactive<T extends object>(
  objectRef: MaybeRef<T>,
): UnwrapNestedRefs<T> {
  if (!isRef(objectRef))
    return reactive(objectRef)

  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return unref(Reflect.get(objectRef.value, p, receiver))
    },
    set(_, p, value) {
      if (isRef((objectRef.value as any)[p]) && !isRef(value))
        (objectRef.value as any)[p].value = value
      else
        (objectRef.value as any)[p] = value
      return true
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p)
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p)
    },
    ownKeys() {
      return Object.keys(objectRef.value)
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true,
      }
    },
  })

  return reactive(proxy) as UnwrapNestedRefs<T>
}

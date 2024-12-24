import type { MaybeRefOrGetter } from '@vueuse/shared'
import type { UseAsyncStateOptions } from '../useAsyncState'
import { toValue, watch } from 'vue'
import { useAsyncState } from '../useAsyncState'

export interface UseImageOptions {
  /** 资源的地址 */
  src: string
  /** 不同情况下使用的图片，例如高分辨率显示器、小型监视器等 */
  srcset?: string
  /** 不同页面布局的图片尺寸 */
  sizes?: string
  /** 图片的替代信息 */
  alt?: string
  /** 图片的类名 */
  class?: string
  /** 图片的加载方式 */
  loading?: HTMLImageElement['loading']
  /** 图片的跨域设置 */
  crossorigin?: string
  /** 获取者策略用于获取资源 */
  referrerPolicy?: HTMLImageElement['referrerPolicy']
  /** Image width */
  width?: HTMLImageElement['width']
  /** Image height */
  height?: HTMLImageElement['height']
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#decoding */
  decoding?: HTMLImageElement['decoding']
  /** Provides a hint of the relative priority to use when fetching the image */
  fetchPriority?: HTMLImageElement['fetchPriority']
  /** Provides a hint of the importance of the image */
  ismap?: HTMLImageElement['isMap']
  /** The partial URL (starting with #) of an image map associated with the element */
  usemap?: HTMLImageElement['useMap']
}

async function loadImage(options: UseImageOptions): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const { src, srcset, sizes, class: clazz, loading, crossorigin, referrerPolicy, width, height, decoding, fetchPriority, ismap, usemap } = options

    img.src = src

    if (srcset != null)
      img.srcset = srcset
    if (sizes != null)
      img.sizes = sizes
    if (clazz != null)
      img.className = clazz
    if (loading != null)
      img.loading = loading
    if (crossorigin != null)
      img.crossOrigin = crossorigin
    if (referrerPolicy != null)
      img.referrerPolicy = referrerPolicy
    if (width != null)
      img.width = width
    if (height != null)
      img.height = height
    if (decoding != null)
      img.decoding = decoding
    if (fetchPriority != null)
      img.fetchPriority = fetchPriority
    if (ismap != null)
      img.isMap = ismap
    if (usemap != null)
      img.useMap = usemap

    img.onload = () => resolve(img)
    img.onerror = reject
  })
}

/**
 * Reactive load an image in the browser, you can wait the result to display it or show a fallback.
 *
 * @see https://vueuse.org/useImage
 * @param options Image attributes, as used in the <img> tag
 * @param asyncStateOptions
 */
export function useImage<Shallow extends true>(options: MaybeRefOrGetter<UseImageOptions>, asyncStateOptions: UseAsyncStateOptions<Shallow> = {}) {
  const state = useAsyncState<HTMLImageElement | undefined>(
    () => loadImage(toValue(options)),
    undefined,
    {
      resetOnExecute: true,
      ...asyncStateOptions,
    },
  )

  watch(
    () => toValue(options),
    () => state.execute(asyncStateOptions.delay),
    { deep: true },
  )

  return state
}

export type UseImageReturn = ReturnType<typeof useImage>

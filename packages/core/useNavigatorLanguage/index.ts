import type { ShallowRef } from 'vue'
import type { ConfigurableWindow } from '../_configurable'
import type { Supportable } from '../types'
import { shallowRef } from 'vue'
import { defaultWindow } from '../_configurable'
import { useEventListener } from '../useEventListener'
import { useSupported } from '../useSupported'

export interface NavigatorLanguageState extends Supportable {
  /**
   * ISO 639-1 标准语言代码
   *
   * @info 检测到的用户代理语言偏好作为语言标签
   * （有时称为“区域设置标识符”）。
   * 这由一个表示语言的2-3个字母的基本语言标签组成，
   * 可选地后跟由“-”分隔的其他子标签。
   * 最常见的额外信息是国家或地区变体（如 'en-US' 或 'fr-CA'）。
   *
   * @see https://www.iso.org/iso-639-language-codes.html
   * @see https://www.loc.gov/standards/iso639-2/php/code_list.php
   *
   */
  language: ShallowRef<string | undefined>
}

export interface UseNavigatorLanguageOptions extends ConfigurableWindow {
}

export type UseNavigatorLanguageReturn = Readonly<NavigatorLanguageState>

/**
 *
 * Reactive useNavigatorLanguage
 *
 * Detects the currently selected user language and returns a reactive language
 * @see https://vueuse.org/useNavigatorLanguage
 *
 * @__NO_SIDE_EFFECTS__
 */
export function useNavigatorLanguage(options: UseNavigatorLanguageOptions = {}): UseNavigatorLanguageReturn {
  const { window = defaultWindow } = options

  const navigator = window?.navigator

  const isSupported = useSupported(() => navigator && 'language' in navigator)

  const language = shallowRef<string | undefined>(navigator?.language)

  // Listen to when to user changes language:
  useEventListener(window, 'languagechange', () => {
    if (navigator)
      language.value = navigator.language
  }, { passive: true })

  return {
    isSupported,
    language,
  }
}

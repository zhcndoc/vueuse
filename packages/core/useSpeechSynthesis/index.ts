import type { MaybeRef, MaybeRefOrGetter } from 'vue'
import type { ConfigurableWindow } from '../_configurable'
import { toRef, tryOnScopeDispose } from '@vueuse/shared'
import { computed, shallowRef, toValue, watch } from 'vue'
import { defaultWindow } from '../_configurable'
import { useSupported } from '../useSupported'

export type UseSpeechSynthesisStatus = 'init' | 'play' | 'pause' | 'end'

export interface UseSpeechSynthesisOptions extends ConfigurableWindow {
  /**
   * 语音合成的语言
   *
   * @default 'en-US'
   */
  lang?: MaybeRefOrGetter<string>
  /**
   * 获取和设置朗读时的音调。
   *
   * @default 1
   */
  pitch?: MaybeRefOrGetter<SpeechSynthesisUtterance['pitch']>
  /**
   * 获取和设置朗读时的速度。
   *
   * @default 1
   */
  rate?: MaybeRefOrGetter<SpeechSynthesisUtterance['rate']>
  /**
   * 获取和设置用于朗读的声音。
   */
  voice?: MaybeRef<SpeechSynthesisVoice>
  /**
   * 获取和设置朗读的音量。
   *
   * @default 1
   */
  volume?: MaybeRefOrGetter<SpeechSynthesisUtterance['volume']>
}

/**
 * 响应式语音合成。
 *
 * @see https://vueuse.org/useSpeechSynthesis
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis SpeechSynthesis
 */
export function useSpeechSynthesis(
  text: MaybeRefOrGetter<string>,
  options: UseSpeechSynthesisOptions = {},
) {
  const {
    pitch = 1,
    rate = 1,
    volume = 1,
    window = defaultWindow,
  } = options

  const synth = window && (window as any).speechSynthesis as SpeechSynthesis
  const isSupported = useSupported(() => synth)

  const isPlaying = shallowRef(false)
  const status = shallowRef<UseSpeechSynthesisStatus>('init')

  const spokenText = toRef(text || '')
  const lang = toRef(options.lang || 'en-US')
  const error = shallowRef<SpeechSynthesisErrorEvent | undefined>(undefined)

  const toggle = (value = !isPlaying.value) => {
    isPlaying.value = value
  }

  const bindEventsForUtterance = (utterance: SpeechSynthesisUtterance) => {
    utterance.lang = toValue(lang)
    utterance.voice = toValue(options.voice) || null
    utterance.pitch = toValue(pitch)
    utterance.rate = toValue(rate)
    utterance.volume = toValue(volume)

    utterance.onstart = () => {
      isPlaying.value = true
      status.value = 'play'
    }

    utterance.onpause = () => {
      isPlaying.value = false
      status.value = 'pause'
    }

    utterance.onresume = () => {
      isPlaying.value = true
      status.value = 'play'
    }

    utterance.onend = () => {
      isPlaying.value = false
      status.value = 'end'
    }

    utterance.onerror = (event) => {
      error.value = event
    }
  }

  const utterance = computed(() => {
    isPlaying.value = false
    status.value = 'init'
    const newUtterance = new SpeechSynthesisUtterance(spokenText.value)
    bindEventsForUtterance(newUtterance)
    return newUtterance
  })

  const speak = () => {
    synth!.cancel()
    if (utterance)
      synth!.speak(utterance.value)
  }

  const stop = () => {
    synth!.cancel()
    isPlaying.value = false
  }

  if (isSupported.value) {
    bindEventsForUtterance(utterance.value)

    watch(lang, (lang) => {
      if (utterance.value && !isPlaying.value)
        utterance.value.lang = lang
    })

    if (options.voice) {
      watch(options.voice, () => {
        synth!.cancel()
      })
    }

    watch(isPlaying, () => {
      if (isPlaying.value)
        synth!.resume()
      else
        synth!.pause()
    })
  }

  tryOnScopeDispose(() => {
    isPlaying.value = false
  })

  return {
    isSupported,
    isPlaying,
    status,
    utterance,
    error,

    stop,
    toggle,
    speak,
  }
}

export type UseSpeechSynthesisReturn = ReturnType<typeof useSpeechSynthesis>

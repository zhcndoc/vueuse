import type { Theme } from 'vitepress'
import TwoSlashFloatingVue from '@shikijs/vitepress-twoslash/client'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { functions } from '../../../packages/metadata/metadata'
import { handleRedirects } from './redirects'
import '@shikijs/vitepress-twoslash/style.css'

import './styles/main.css'
import './styles/demo.css'
import './styles/utils.css'
import './styles/vars.css'
import './styles/overrides.css'
import 'uno.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h((DefaultTheme as any).Layout, null, {
      'aside-outline-before': () => h('div', {
        'class': 'wwads-cn wwads-vertical w-full mt-0! mb-4',
        'data-id': '354',
      }),
      'doc-after': () => h('div', {
        'class': 'wwads-cn wwads-horizontal w-full mt-4',
        'data-id': '354',
      }),
    })
  },
  enhanceApp(ctx) {
    if (typeof window !== 'undefined')
      handleRedirects(ctx.router)
    ctx.app.use(TwoSlashFloatingVue)

    // Redirect function shorthands
    // For example `/useDark` to `/core/useDark`
    ctx.router.onBeforeRouteChange = (to: string) => {
      const name = to.replace(/\.html$/i, '').replace(/^\//, '')
      if (name.includes('/'))
        return
      const fn = functions.find(f => f.name === name)
      if (!fn)
        return

      setTimeout(() => ctx.router.go(`/${fn.package}/${fn.name}/`), 0)
      // Abort the navigation
      return false
    }
  },
} satisfies Theme

// Vue School banner, skip on SSG or in an iframe
// if (typeof window !== 'undefined' && window.self === window.top) {
//   const script = document.createElement('script')
//   script.async = true
//   script.src = 'https://media.bitterbrains.com/main.js?from=vueuse&type=bottom'
//   document.head.appendChild(script)
// }

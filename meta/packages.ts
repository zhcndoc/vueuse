import type { PackageManifest } from '@vueuse/metadata'

export const packages: PackageManifest[] = [
  {
    name: 'metadata',
    display: 'Metadata for VueUse functions',
    manualImport: true,
    iife: false,
    utils: true,
    target: 'node14',
  },
  {
    name: 'shared',
    display: 'Shared utilities',
  },
  {
    name: 'core',
    display: 'VueUse',
    description: 'Collection of essential Vue Composition Utilities',
  },
  {
    name: 'components',
    display: 'Components',
    description: 'Renderless components for VueUse',
    author: 'Jacob Clevenger<https://github.com/wheatjs>',
  },
  {
    name: 'math',
    display: 'Math',
    description: 'Math functions for VueUse',
  },
  {
    name: 'nuxt',
    display: 'Nuxt',
    description: 'VueUse Nuxt Module',
    manualImport: true,
    addon: true,
    iife: false,
    utils: true,
    target: 'node14',
    external: [
      '@nuxt/kit',
      'local-pkg',
      'fs',
      'path',
      'url',
      'node:fs',
      'node:path',
      'node:url',
    ],
  },
  {
    name: 'router',
    display: 'Router',
    description: 'vue-router 的实用工具',
    addon: true,
    external: [
      'vue-router',
    ],
    globals: {
      'vue-router': 'VueRouter',
    },
  },
  {
    name: 'integrations',
    display: 'Integrations',
    description: '实用程序库的集成包装器',
    addon: true,
    submodules: true,
    external: [
      'axios',
      'universal-cookie',
      'qrcode',
      'http',
      'nprogress',
      'jwt-decode',
      'focus-trap',
      'change-case',
      'drauu',
      'fuse.js',
      'async-validator',
      'idb-keyval',
      'sortablejs',
      'node:http',
    ],
    globals: {
      'axios': 'axios',
      'universal-cookie': 'UniversalCookie',
      'qrcode': 'QRCode',
      'nprogress': 'nprogress',
      'jwt-decode': 'jwt_decode',
      'focus-trap': 'focusTrap',
      'drauu': 'Drauu',
      'fuse.js': 'Fuse',
      'change-case': 'changeCase',
      'async-validator': 'AsyncValidator',
      'idb-keyval': 'idbKeyval',
      'sortablejs': 'Sortable',
    },
  },
  {
    name: 'rxjs',
    display: 'RxJS',
    description: '在 Vue 中启用 RxJS 反应函数',
    addon: true,
    external: [
      'rxjs',
      'rxjs/operators',
    ],
    globals: {
      'rxjs': 'rxjs',
      'rxjs/operators': 'rxjs.operator',
    },
  },
  {
    name: 'firebase',
    display: 'Firebase',
    description: '启用 Firebase 的实时绑定功能',
    addon: true,
    submodules: true,
    external: [
      'firebase',
      'firebase/app',
      'firebase/database',
      'firebase/firestore',
    ],
    globals: {
      'firebase': 'firebase',
      'firebase/app': 'firebase',
      'firebase/database': 'firebase',
      'firebase/firestore': 'firebase',
    },
  },
  {
    name: 'electron',
    display: 'Electron',
    description: 'VueUse 的 Electron 渲染器进程模块',
    author: 'Archer Gu<https://github.com/ArcherGu>',
    addon: true,
    external: [
      'electron',
    ],
    iife: false,
  },
]

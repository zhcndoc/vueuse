---
category: Utilities
---

# useBase64

响应式的 Base64 转换。支持 plain text，buffer，files，canvas，objects，maps，sets 和 images。

## 用法

```ts
import { useBase64 } from '@vueuse/core'
import { shallowRef } from 'vue'

const text = shallowRef('')

const { base64, promise, execute } = useBase64(text)
```

### 支持的输入类型

- `string` - 纯文本
- `Blob` - 文件或二进制大对象
- `ArrayBuffer` - 二进制数据
- `HTMLCanvasElement` - 画布元素
- `HTMLImageElement` - 图片元素
- `Object` / `Array` / `Map` / `Set` - 序列化为 JSON

### 返回值

| 属性      | 描述                   |
| --------- | ---------------------- |
| `base64`  | 转换后的 Base64 字符串 |
| `promise` | 当前转换的 Promise     |
| `execute` | 手动触发转换           |

### 数据 URL 格式

默认输出为数据 URL 格式（例如：`data:text/plain;base64,...`）。设置 `dataUrl: false` 可获得纯 Base64 字符串。

```ts
const { base64 } = useBase64(text, { dataUrl: false })
// 返回不带数据 URL 前缀的原始 Base64
```

### 画布和图片选项

转换画布或图片元素时，可以指定 MIME 类型和质量参数。

```ts
const canvas = document.querySelector('canvas')

const { base64 } = useBase64(canvas, {
  type: 'image/jpeg', // MIME 类型
  quality: 0.8, // 图片质量（0-1，适用于 jpeg/webp）
})
```

### 自定义序列化器

对于对象、数组、Map 和 Set，可以提供自定义序列化器。否则，数据将使用 `JSON.stringify` 进行序列化（Map 会转换为对象，Set 会转换为数组）。

```ts
const data = shallowRef({ foo: 'bar' })

const { base64 } = useBase64(data, {
  serializer: v => JSON.stringify(v, null, 2),
})
```

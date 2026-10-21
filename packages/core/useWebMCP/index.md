---
category: Browser
---

# useWebMCP

注册一个 [WebMCP](https://github.com/webmachinelearning/webmcp) 工具，并将其生命周期绑定到当前 Vue 作用域。

WebMCP 允许页面将 JavaScript 函数公开为“工具”，供 AI 代理（浏览器内置代理、iframe 承载的代理或扩展）发现并调用，而无需抓取 DOM、无障碍树或屏幕截图。`useWebMCP` 将基于 `AbortSignal` 的命令式注册 API 封装为声明式组合式函数：调用时注册工具，作用域销毁时**自动注销**，让代理可见的工具始终与屏幕上实际显示的内容保持同步。

::: warning 实验性
WebMCP 规范仍处于 `🧪` 实验阶段，并在 `document.modelContext` 上提供命令式 API（使用 `registerTool` 注册，并通过 `AbortSignal` 注销）。此组合式函数会检测 API 是否可用；若 API 不存在则不执行操作。使用前请检查 `isSupported`。
:::

## 用法

```ts
import { useWebMCP } from '@vueuse/core'
import { shallowRef } from 'vue'

const todos = shallowRef<string[]>([])

const { isSupported, isRegistered, error } = useWebMCP({
  name: 'add-todo',
  description: 'Add a new item to the user\'s active todo list',
  inputSchema: {
    type: 'object',
    properties: {
      text: { type: 'string', description: 'The text content of the todo item' },
    },
    required: ['text'],
  },
  async execute({ text }) {
    todos.value = [...todos.value, text]
    return `Added todo item: "${text}" successfully.`
  },
})
```

它封装的原始命令式 API 如下：

```ts
const controller = new AbortController()

document.modelContext.registerTool({
  name: 'add-todo',
  description: 'Add a new item to the user\'s active todo list',
  inputSchema: { /* … */ },
  async execute({ text }) {
    return { content: [{ type: 'text', text: `Added todo item: "${text}".` }] }
  },
}, { signal: controller.signal })

// Unregister later:
controller.abort()
```

## 结果规范化

`execute` 返回的值会被规范化为有效的 MCP 工具结果：

- **字符串** → `{ content: [{ type: 'text', text }] }`
- **`undefined`/`null`**（无返回值）→ `{ content: [] }`（成功，无负载）
- **已经是** `{ content: [...] }` 的值 → 原样传递
- **抛出的值**（无论是否为 `Error`，例如 `throw 'not signed in'`、`throw { code: 403 }`）→ 触发 `onError` 后返回 `{ content: [{ type: 'text', text }], isError: true }`。失败不能被代理误认为成功。
- **返回的 `Error`** → 与抛出错误的处理方式相同：触发 `onError`，然后返回带有 `isError` 的结果
- 其他值（对象、数组、数字）→ 序列化为 JSON 文本块

## 响应式与条件注册

`name`、`description`、`inputSchema`、`annotations` 和 `enabled` 都接受 ref 或 getter。更改可发现字段时会重新注册工具；切换 `enabled` 时会注销或重新注册工具。`execute`、`formatOutput` 和 `onError` 会在调用时读取最新值，因此闭包变化不会导致注册反复更新。

```ts
import { useWebMCP } from '@vueuse/core'
import { shallowRef } from 'vue'

const signedIn = shallowRef(false)

useWebMCP({
  name: 'checkout',
  description: 'Complete the checkout for the current cart',
  enabled: signedIn, // only exposed to agents while signed in
  annotations: { readOnlyHint: false },
  execute() {
    // …
  },
  onError(err) {
    console.error('checkout tool failed', err)
  },
})
```

## 注册多个工具

每个工具调用一次 `useWebMCP` 即可注册多个工具；每次调用都会独立管理自身的注册生命周期。

```ts
import { useWebMCP } from '@vueuse/core'

useWebMCP({
  name: 'add-todo',
  description: 'Add a new item to the todo list',
  execute({ text }) {
    // …
  },
})

useWebMCP({
  name: 'clear-todos',
  description: 'Remove every item from the todo list',
  annotations: { readOnlyHint: false },
  execute() {
    // …
  },
})
```

## 参考资料

- [WebMCP explainer & spec (webmachinelearning/webmcp)](https://github.com/webmachinelearning/webmcp)
- [GoogleChromeLabs/use-webmcp-tool](https://github.com/GoogleChromeLabs/use-webmcp-tool) — 此组合式函数参考的 React hook

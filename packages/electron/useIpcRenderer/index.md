---
category: '@Electron'
---

# useIpcRenderer

提供带有 Vue 响应式的 [ipcRenderer](https://www.electronjs.org/docs/api/ipc-renderer) 及其所有 API。

## 使用方法

```ts
import { useIpcRenderer } from '@vueuse/electron'
import { computed } from 'vue'

// 如果你不显式提供 ipcRenderer，需要启用 nodeIntegration
// 参见：https://www.electronjs.org/docs/api/webview-tag#nodeintegration
const ipcRenderer = useIpcRenderer()

// 返回的是 Ref 结果
const result = ipcRenderer.invoke<string>('custom-channel', '一些数据')
const msg = computed(() => result.value?.msg)

// 组件卸载时自动移除监听器
ipcRenderer.on('custom-event', (event, ...args) => {
  console.log(args)
})
```

### 可用方法

| 方法                                       | 描述                                     |
| ------------------------------------------ | ---------------------------------------- |
| `on(channel, listener)`                    | 监听 channel。组件卸载时自动移除监听器。 |
| `once(channel, listener)`                  | 监听 channel 一次                        |
| `removeListener(channel, listener)`        | 移除特定监听器                           |
| `removeAllListeners(channel)`              | 移除 channel 的所有监听器                |
| `send(channel, ...args)`                   | 向主进程发送异步消息                     |
| `invoke(channel, ...args)`                 | 发送消息并以 `ShallowRef` 获取响应       |
| `sendSync(channel, ...args)`               | 发送同步消息并以 `ShallowRef` 获取响应   |
| `postMessage(channel, message, transfer?)` | 发送带可转移对象的消息                   |
| `sendTo(webContentsId, channel, ...args)`  | 发送到指定 webContents                   |
| `sendToHost(channel, ...args)`             | 发送到 webview 主机                      |

### 使用自定义 IpcRenderer

如果禁用 `nodeIntegration`，你可以显式传入 `ipcRenderer` 实例：

```ts
import { useIpcRenderer } from '@vueuse/electron'
import { ipcRenderer } from 'electron'

const ipc = useIpcRenderer(ipcRenderer)
```

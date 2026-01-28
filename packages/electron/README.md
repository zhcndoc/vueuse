# @vueuse/electron

[![NPM version](https://img.shields.io/npm/v/@vueuse/electron?color=a1b858)](https://www.npmjs.com/package/@vueuse/electron)

> 这是 [VueUse](https://github.com/vueuse/vueuse) 的一个插件，支持将 Electron 渲染进程的 API 以组合式 API 形式使用。

## 安装

```bash
npm i @vueuse/electron electron
```

## 函数

`@vueuse/electron` 提供以下函数

<!--GENERATED LIST, DO NOT MODIFY MANUALLY-->
<!--FUNCTIONS_LIST_STARTS-->

- [`useIpcRenderer`](https://vueuse.org/electron/useIpcRenderer/) — 提供 [ipcRenderer](https://www.electronjs.org/docs/api/ipc-renderer) 及其所有 API 的响应式支持。
- [`useIpcRendererInvoke`](https://vueuse.org/electron/useIpcRendererInvoke/) — 响应式的 [ipcRenderer.invoke API](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererinvokechannel-args) 结果。
- [`useIpcRendererOn`](https://vueuse.org/electron/useIpcRendererOn/) — 方便使用 [ipcRenderer.on](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener)，并在组件卸载时自动移除监听器 [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener)。
- [`useZoomFactor`](https://vueuse.org/electron/useZoomFactor/) — 响应式的 [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe) 缩放因子。
- [`useZoomLevel`](https://vueuse.org/electron/useZoomLevel/) — 响应式的 [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe) 缩放级别。

<!--FUNCTIONS_LIST_ENDS-->

## 许可证

[MIT 许可证](https://github.com/vueuse/vueuse/blob/master/LICENSE) © 2021-PRESENT [Archer Gu](https://github.com/ArcherGu)

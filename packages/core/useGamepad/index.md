---
category: Browser
---

# useGamepad

提供了 [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) 的响应式绑定。

## 使用方法

> 由于 Gamepad API 的工作方式，你必须使用游戏手柄与页面进行交互，然后才能检测到它。

```vue
<script setup>
import { useGamepad } from '@vueuse/core'
import { computed } from 'vue'

const { isSupported, gamepads } = useGamepad()
const gamepad = computed(() => gamepads.value.find(g => g.mapping === 'standard'))
</script>

<template>
  <span>
    {{ gamepad.id }}
  </span>
</template>
```

### 游戏手柄更新

目前，Gamepad API 没有事件支持来更新游戏手柄的状态。为了更新游戏手柄的状态，使用 `requestAnimationFrame` 来轮询游戏手柄的变化。你可以通过使用 `useGamepad` 提供的 `pause` 和 `resume` 函数来控制此轮询。

```ts
import { useGamepad } from '@vueuse/core'

const { pause, resume, gamepads } = useGamepad()

pause()

// 游戏手柄对象不会更新

resume()

// 游戏手柄对象将在用户输入时更新
```

### 游戏手柄连接和断开事件

当游戏手柄连接或断开连接时，`onConnected` 和 `onDisconnected` 事件将触发。

```ts
const { gamepads, onConnected, onDisconnected } = useGamepad()

onConnected((index) => {
  console.log(`${gamepads.value[index].id} connected`)
})

onDisconnected((index) => {
  console.log(`${index} disconnected`)
})
```

### 振动

> 游戏手柄触觉 API 的支持不完整，请在使用之前检查[兼容性表](https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator#browser_compatibility)。

```ts
import { computed } from 'vue'

const supportsVibration = computed(() => gamepad.hapticActuators.length > 0)
function vibrate() {
  if (supportsVibration.value) {
    const actuator = gamepad.hapticActuators[0]
    actuator.playEffect('dual-rumble', {
      startDelay: 0,
      duration: 1000,
      weakMagnitude: 1,
      strongMagnitude: 1,
    })
  }
}
```

### 映射

为了使 Gamepad API 更易于使用，我们提供了映射来将控制器映射到控制器的按钮布局。

#### Xbox360 控制器

```vue
<script setup>
import { mapGamepadToXbox360Controller } from '@vueuse/core'

const controller = mapGamepadToXbox360Controller(gamepad)
</script>

<template>
  <span>{{ controller.buttons.a.pressed }}</span>
  <span>{{ controller.buttons.b.pressed }}</span>
  <span>{{ controller.buttons.x.pressed }}</span>
  <span>{{ controller.buttons.y.pressed }}</span>
</template>
```

目前只有 Xbox 360 控制器的映射。如果你有要添加映射的控制器，请随时为更多控制器映射打开 PR！

### SSR 兼容性

该组件设计用于客户端。在某些情况下，SSR 可能会导致一些水合不匹配。

如果您使用的是 Nuxt，您可以简单地将组件文件重命名为 `.client.vue` 后缀（例如，`GamepadComponent.client.vue`），这将自动使其仅在客户端渲染，从而避免水合不匹配。

在其他框架或普通 Vue 中，您可以用 `<ClientOnly>` 组件包裹您的使用组件，以确保它仅在客户端渲染。

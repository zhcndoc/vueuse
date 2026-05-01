---
category: Browser
---

# useGamepad

提供 [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) 的响应式绑定。

## 用法

> 由于 Gamepad API 的工作方式，在手柄被检测到之前，你必须先使用手柄与页面进行交互。

```vue
<script setup lang="ts">
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

### 手柄更新

目前 Gamepad API 不支持用于更新手柄状态的事件。为了更新手柄状态，使用 `requestAnimationFrame` 轮询手柄变化。你可以使用 `useGamepad` 提供的 `pause` 和 `resume` 函数来控制这种轮询。

```ts
import { useGamepad } from '@vueuse/core'

const { pause, resume, gamepads } = useGamepad()

pause()

// gamepads 对象不会更新

resume()

// gamepads 对象会在用户输入时更新
```

### 手柄连接与断开事件

当手柄连接或断开时，`onConnected` 和 `onDisconnected` 事件会触发。

```ts
import { useGamepad } from '@vueuse/core'
// ---cut---
const { gamepads, onConnected, onDisconnected } = useGamepad()

onConnected((index) => {
  console.log(`${gamepads.value[index].id} 已连接`)
})

onDisconnected((index) => {
  console.log(`${index} 已断开连接`)
})
```

### 震动

> Gamepad Haptics API 的支持较少，因此在使用前请先查看[兼容性表](https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator#browser_compatibility)。

```ts
import { useGamepad } from '@vueuse/core'
// ---cut---
import { computed } from 'vue'

const { gamepads, onConnected, onDisconnected } = useGamepad()
const gamepad = gamepads.value[0]!

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

为了让 Gamepad API 更易使用，我们提供了映射，用于将控制器映射为某种手柄按键布局。

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

目前只有 Xbox 360 控制器的映射。如果你有想要添加映射的控制器，欢迎发起 PR 来添加更多控制器映射！

### SSR 兼容性

此组件设计为在客户端使用。在某些情况下，SSR 可能会导致一些 hydration 不匹配。

如果你使用的是 Nuxt，你可以直接将组件文件重命名为 `.client.vue` 后缀（例如，`GamepadComponent.client.vue`），这样它就只会在客户端渲染，从而避免 hydration 不匹配。

在其他框架或普通 Vue 中，你可以使用 `<ClientOnly>` 组件包裹你的使用组件，以确保它只在客户端渲染。

## 类型声明

```ts
export interface UseGamepadOptions
  extends ConfigurableWindow, ConfigurableNavigator {}
export interface UseGamepadReturn extends Supportable, Pausable {
  onConnected: EventHookOn<number>
  onDisconnected: EventHookOn<number>
  gamepads: Ref<Gamepad[]>
}
/**
 * 将标准的标准手柄映射到 Xbox 360 控制器。
 */
export declare function mapGamepadToXbox360Controller(
  gamepad: Ref<Gamepad | undefined>,
): ComputedRef<{
  buttons: {
    a: GamepadButton
    b: GamepadButton
    x: GamepadButton
    y: GamepadButton
  }
  bumper: {
    left: GamepadButton
    right: GamepadButton
  }
  triggers: {
    left: GamepadButton
    right: GamepadButton
  }
  stick: {
    left: {
      horizontal: number
      vertical: number
      button: GamepadButton
    }
    right: {
      horizontal: number
      vertical: number
      button: GamepadButton
    }
  }
  dpad: {
    up: GamepadButton
    down: GamepadButton
    left: GamepadButton
    right: GamepadButton
  }
  back: GamepadButton
  start: GamepadButton
} | null>
export declare function useGamepad(
  options?: UseGamepadOptions,
): UseGamepadReturn
```

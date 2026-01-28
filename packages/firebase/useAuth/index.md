---
category: '@Firebase'
---

# useAuth

响应式的 [Firebase Auth](https://firebase.google.com/docs/auth) 绑定。它提供了一个响应式的 `user` 和 `isAuthenticated`，因此你可以轻松地对用户的身份验证状态变化做出反应。

## 用法

```vue
<script setup lang="ts">
import { useAuth } from '@vueuse/firebase/useAuth'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const app = initializeApp({ /* 配置 */ })
const auth = getAuth(app)
const { isAuthenticated, user } = useAuth(auth)

const signIn = () => signInWithPopup(auth, new GoogleAuthProvider())
</script>

<template>
  <pre v-if="isAuthenticated">{{ user }}</pre>
  <div v-else>
    <button @click="signIn">
      使用 Google 登录
    </button>
  </div>
</template>
```

## Return Values

| Name              | Type                   | Description                                               |
| ----------------- | ---------------------- | --------------------------------------------------------- |
| `user`            | `Ref<User \| null>`    | The current Firebase user, or `null` if not authenticated |
| `isAuthenticated` | `ComputedRef<boolean>` | Whether a user is currently authenticated                 |

The composable automatically updates when the user's ID token changes (including sign-in, sign-out, and token refresh events) using Firebase's `onIdTokenChanged` listener.

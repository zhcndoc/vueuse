---
category: '@RxJS'
---

# useSubject

将 RxJS [`Subject`](https://rxjs.dev/guide/subject) 绑定到一个 `ref` 上，并在两者之间传播值变化。

## 用法

<!-- TODO: import rxjs error if enable twoslash -->

```ts no-twoslash
import { useSubject } from '@vueuse/rxjs'
import { Subject } from 'rxjs'

const subject = new Subject()

// setup()
const subjectRef = useSubject(subject)

// Changes to subjectRef.value will be pushed to the subject
subjectRef.value = 'new value'

// Values emitted by the subject will update subjectRef
subject.next('from subject')
```

### 使用 BehaviorSubject

当使用 `BehaviorSubject` 时，返回的 ref 会用 subject 当前的值进行初始化，且类型不会包含 `undefined`：

```ts no-twoslash
import { useSubject } from '@vueuse/rxjs'
import { BehaviorSubject } from 'rxjs'

const subject = new BehaviorSubject('initial')

// setup()
const subjectRef = useSubject(subject) // Ref<string>，而不是 Ref<string | undefined>
console.log(subjectRef.value) // 'initial'
```

### 错误处理

如果你想要为可能出错的 Subject 添加自定义错误处理，你可以提供一个可选的 `onError` 配置。如果没有提供，RxJS 将把提供的 observable 中的任何错误视为“未处理的错误”，并且它将在新的调用栈中抛出，并报告给 `window.onerror`（如果你在 Node 环境中则报告给 `process.on('error')`）。

```ts no-twoslash
import { useSubject } from '@vueuse/rxjs'
import { Subject } from 'rxjs'

const subject = new Subject()

// setup()
const subjectRef = useSubject(subject, {
  onError: (err) => {
    console.log(err.message) // "oops"
  },
})
```

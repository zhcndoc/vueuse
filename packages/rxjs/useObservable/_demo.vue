<script setup lang="ts">
import { interval } from 'rxjs'
import { mapTo, scan, startWith } from 'rxjs/operators'
import { useObservable } from './index'

const count = useObservable(
  interval(1000).pipe(
    mapTo(1),
    startWith(0),
    scan((total, next) => next + total),
  ),
)
</script>

<template>
  <note>每1s更新一次</note>
  <p>Counter: {{ count }}</p>
</template>

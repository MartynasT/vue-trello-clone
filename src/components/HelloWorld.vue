<script setup>
import { ref } from 'vue'

import {useDefaultStore} from './../stores/default';
import {storeToRefs} from 'pinia'

const store = useDefaultStore();

const {message, count} = storeToRefs(store);
const {increment} = store

defineProps({
  msg: String,
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <h1 class="text-3xl font-bold">
  {{message}}
  </h1>

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
  </div>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

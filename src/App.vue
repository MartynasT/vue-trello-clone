<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Board from './components/Board.vue'

import {useTasksStore} from './stores/tasks';
import {storeToRefs} from 'pinia';
import {ref} from 'vue'

const taskStore = useTasksStore();


const {allTasks} = storeToRefs(taskStore)


const newBoardStatus = ref(false)
let boardTitle = ref('')
const {createBoard} = taskStore;

function handleNewBoard(){
  let id = Date.now().toString(36) + Math.random().toString(36).substr(2);
  createBoard(boardTitle.value, id)
  boardTitle.value = '';
}
//reiks setteriu ir getteriu
</script>

<template>
<!--  <div>-->
<!--    <a href="https://vitejs.dev" target="_blank">-->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
<!--    </a>-->
<!--    <a href="https://vuejs.org/" target="_blank">-->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
<!--    </a>-->
<!--  </div>-->
<!--  <HelloWorld msg="Vite + Vue + Tailwindcss" />-->
  <div class="boards">
    <Board v-for='board in allTasks' :key='allTasks.boardTitle' :boardData='board' />

    <div class="inline-block m-2">
      <input class="border border-black" type="text" v-model="boardTitle">
      <button @click="handleNewBoard">Add board</button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

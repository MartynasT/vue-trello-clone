<script setup>
import {ref} from 'vue';
import Card from './Card.vue'

import {useTasksStore} from '../stores/tasks.js'
import {storeToRefs} from 'pinia'

const tasksStore = useTasksStore()
const {createTask} = tasksStore;

const props = defineProps({
    boardData: Object
})

let creatingTask = ref(false)
const boardId = props.boardData.boardId;

let taskTitle = ref('')

function handleNewTask(){
  creatingTask.value = false
  let taskId = Date.now().toString(36) + Math.random().toString(36).substr(2);
  createTask(boardId, taskTitle.value, taskId)
  taskTitle.value = '';
}

</script>

<template>
    <div class="w-72 h-full p-2 bg-slate-100 inline-block m-2 align-top">
        <div class="flex justify-between items-center">
          <h2 class='p-2 text-lg font-medium'>{{boardData.boardTitle}}</h2>

          <button class="w-6 h-6 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  stroke-width="1.5" class="w-4 h-4 fill-rose-600">
              <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
            </svg>
          </button>

        </div>
        <div class='cards'>
          <Card v-for='card in boardData.cards' :key=card.title  :cardData="card" />
        </div>
        <div>
          <div v-if="creatingTask">
            <input
                class="w-full p-2 border border-black mb-4"
                placeholder="Card title"
                v-model="taskTitle"
                type="text">
            <div>
              <button @click="handleNewTask" class="bg-gray-900 py-2 px-4 text-white mb-2">Add</button>
              <button @click="creatingTask = false" class="ml-4 py-2 px-4 text-rose-600">Cancel</button>
            </div>
          </div>

          <button
              v-if="!creatingTask"
              class="w-full text-white bg-gray-900 p-2"
              @click="creatingTask = true">Create new task</button>
        </div>
    </div>
</template>

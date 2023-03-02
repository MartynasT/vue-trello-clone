<script setup>

defineProps({
  cardData: Object
})
</script>

<template>
    <div class='card bg-white p-2 mb-2'>
        <h3>{{cardData.title}}</h3>
    </div>
</template>

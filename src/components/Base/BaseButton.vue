<script setup>
const props = defineProps({
    action: {
        type: Function,
    },
    styles: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
})

console.log(props)
</script>

<template>
    <button @click="action" :class="`btn  btn-secondary  d-block w-100 ${styles}`">
        {{ title }}
    </button>
</template>

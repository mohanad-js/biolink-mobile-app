<script setup>
const props = defineProps({
    action: {
        type: Function,
        default: () => console.log('hello world')
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
    <button @click="action" :class="`appointment-link  d-block w-100 logoutModalButton ${styles}`">
        {{ title }}
    </button>
</template>

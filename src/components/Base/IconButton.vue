<script setup>
const icon = ''
const styles = ''
const action = () => { }
</script>

<template>
    <button @click="action" :class="styles">
        <i :class="`ph ${icon}`"></i>
    </button>
</template>

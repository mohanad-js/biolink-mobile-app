<script setup>
const props = defineProps(["title"])
</script>

<template>
    <section class="d-flex flex-column justify-content-start gap-2">
        <p class="fw-bold align-self-start">{{ title }}</p>
        <div class="base-panel">
            <slot></slot>
        </div>
    </section>
</template>

<style scoped>
.base-panel {
    border-radius: 20px;
    border: 1px solid var(--borderColor);
}
</style>

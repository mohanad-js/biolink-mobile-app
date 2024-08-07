<script setup>
const props = defineProps({
    title: {
        type: String,
    },
    link: {
        type: String,
    },
})

console.log(props.link)
</script>

<template>
    <section class="px-6 pt-8 notification-top-area">
        <div class="d-flex justify-content-start align-items-center gap-4 py-3">
            <router-link :to="link" class="back-button flex-center">
                <i class="ph ph-caret-left"></i>
            </router-link>
            <h2>{{ title }}</h2>
        </div>
    </section>
</template>

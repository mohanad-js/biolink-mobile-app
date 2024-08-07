<script setup>
const props = defineProps({
    to: { type: String, },
    text: { type: String, },
    icon: { type: String, },
})
</script>

<template>
    <RouterLink :to="to" class="d-flex justify-content-between align-items-center setting-item text-dark">
        <div class="d-flex justify-content-start align-items-center gap-4">
            <div class="flex-center">
                <i v-if="icon" :class="`ph ${icon} setting-icon`"></i>
            </div>
            <p class="fs-5 fw-semibold">{{ text }}</p>
        </div>
        <div class="chevron_icon">
            <i :class="`ph ph-caret-right`"></i>
        </div>
    </RouterLink>
</template>

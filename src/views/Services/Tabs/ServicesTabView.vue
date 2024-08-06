<script setup>
import BaseCard from '@/components/Base/BaseCard.vue';
import { ref } from 'vue';
const services = ref([
    { header: 'service one', text: "text" },
    { header: 'service one', text: "text" },
    { header: 'service one', text: "text" }
])
</script>

<template>
    <main>
        <div class="tab-content activeTab" id="upcoming_data">
            <BaseCard v-for="service in services" :card="service" :key="service" />
        </div>
    </main>
</template>

<style>
.router-link-active.activeTab {
    animation: fadeDown 0.5s linear;

}
</style>

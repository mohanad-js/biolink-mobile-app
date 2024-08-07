<script setup>
import BaseCard from '@/components/Base/BaseCard.vue';
import { ref } from 'vue';
const services = ref([
    { name: 'X-ray', center: "Kassala", price:"100", duration:'60 Min'},
    { name: 'Sound waves', center: "Portsudan", price:"200", duration:'20 Min'},
    { name: 'X-ray', center: "Qadarif", price:"100", duration:'50 Min' }
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

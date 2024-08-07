<script setup>
import { useMaintenanceStore } from '@/stores/maintenance';
import { storeToRefs } from 'pinia';
import MaintenanceOrderCard from '@/components/MaintenanceOrderCard.vue';

const store = useMaintenanceStore()
const {completedMaintenanceOrders} = storeToRefs(store)


</script>

<template>
    <main class="h-100 px-5 pb-200">


        <MaintenanceOrderCard v-for="order in completedMaintenanceOrders" :key="order.id" :order="order" />
        
    </main>
</template>
<script setup>
import router from '@/router';
import { useMaintenanceStore } from '@/stores/maintenance';
import {storeToRefs} from 'pinia'
import MaintenanceOrderCard from '@/components/MaintenanceOrderCard.vue';

const store = useMaintenanceStore()
const {activeMaintenanceOrders} = storeToRefs(store)

console.log(activeMaintenanceOrders.value)
</script>

<template>

    <main class="h-100 px-5 pb-200">
        <button @click="()=> {router.push({name:'new maintenance order'})}" class="appointment-link fill d-block w-100 logoutModalButton">
            New Maintenance Order
        </button>


        <MaintenanceOrderCard v-for="order in activeMaintenanceOrders" :key="order.id" :order="order" />
        
    </main>
</template>
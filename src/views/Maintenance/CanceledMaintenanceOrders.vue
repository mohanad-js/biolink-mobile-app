<script setup >
import { useMaintenanceStore } from '@/stores/maintenance';
import { storeToRefs } from 'pinia';
import MaintenanceOrderCard from '@/components/MaintenanceOrderCard.vue';
import router from '@/router';
import NoMaintenanceOrders from '@/components/NoMaintenanceOrders.vue';
const store = useMaintenanceStore()


const {getCanceledMaintenanceOrders} = storeToRefs(store)

console.log(getCanceledMaintenanceOrders.value)
</script>

<template>
    <main class="h-100 px-5 pb-200">
        <div class="gender-button">

            <button @click="()=> {router.push({name:'new maintenance order'})}" class="appointment-link fill d-block w-100 logoutModalButton">
                New Maintenance Order
            </button>
        </div>


        <MaintenanceOrderCard v-for="order in getCanceledMaintenanceOrders" :key="order.id" :order="order" />
        <NoMaintenanceOrders :orders="getCanceledMaintenanceOrders" />

        
    </main>
</template>
<script setup >
defineProps(['orders'])
</script>
<template>
    <div v-if="orders.length == 0"  class="d-flex justify-content-center align-items-center text-center mt-20">
        <h2>No Maintenance Orders</h2>
        <h2 class="ms-3">
            <i class="ph-bold ph-shopping-cart"></i>
        </h2>
    </div>
</template>
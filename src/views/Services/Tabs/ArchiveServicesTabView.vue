<script setup>
import { ref } from 'vue';
const services = ref([
    { name: 'X-ray', center: "Kassala", price:"100", duration:'60 Min', state:'' },
    { name: 'Sound waves', center: "Portsudan", price:"200", duration:'20 Min'},
    { name: 'X-ray', center: "Qadarif", price:"100", duration:'50 Min' }
])
</script>

<template>
    <div class="top-doctor-area" v-for="service in services" :key="service">
        <div class="w-100 base-card p-4 mb-4">
            <div class="d-flex justify-content-between align-items-start gap-4">
                <div class="d-flex justify-content-start align-items-start gap-4">
                    <div class="base-card-img flex-center">
                        <img src="@/assets/img/top-doctor-4.png" class="h-100" alt="" />
                    </div>
                    <div class="">
                        <p class="fw-bold name">{{service.name}}</p>
                        <p class="name"><small>{{service.center+" center"}}</small></p>
                        <p class="name"><i class="ph ph-money"></i><small>{{service.price}}k SDG</small></p>
                        <p class="name"><i class="ph-fill ph-clock"></i><small> 06 Aug 10:00</small></p>

                        
                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                            <!-- <div class="rating">
                                <i class="ph-fill ph-star"></i>
                                4.7
                            </div> -->
                            <!-- <i class="ph ph-dot fs-2"></i> -->
                            <!-- <div class="time">
                                <i class="ph-fill ph-clock"></i><small>{{service.duration}}</small>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                <a href="/services/services-profile" class="appointment-link d-block w-100">More Details</a>
                <button v-if="cancelButton" class="appointment-link fill d-block w-100 logoutModalButton">
                    Cancel
                </button>
            </div>
        </div>
    </div>

</template>


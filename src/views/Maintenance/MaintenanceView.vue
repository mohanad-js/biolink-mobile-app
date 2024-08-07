<script setup>
import BottomNavigationButtons from '@/components/BottomNavigationButtons.vue'
import SubHeader from '@/components/SubHeader.vue';
import TabTitle from '@/components/Base/TabTitle.vue';
import { RouterView, useRoute } from 'vue-router';
import router from '@/router';
import { useMaintenanceStore } from '@/stores/maintenance';
import { fetchMaintenanceOrders } from '../../api/maintenanceApiCalls'
import { useLoading } from 'vue-loading-overlay';


const loader = useLoading({
    opacity: 0.5,
    color: "#198754",
})

const { setMaintenanceOrders } = useMaintenanceStore()
const _loader = loader.show()
fetchMaintenanceOrders().then(orders => {
    setMaintenanceOrders(orders)
}).finally(() => {
    _loader.hide()
})


router.push({ name: 'active orders' })

</script>

<template>
    <main class="h-100">

        <SubHeader title="Maintenance Orders" link="/" />
        <!-- Search Section Start -->


        <section class="search-section w-100 px-6 pt-8">
            <div class="">
                <div class="search-area d-flex justify-content-between align-items-center gap-2 w-100">
                    <div class="search-box d-flex justify-content-start align-items-center gap-2 p-3 w-100">
                        <div class="flex-center">
                            <i class="ph ph-magnifying-glass"></i>
                        </div>
                        <input type="text" placeholder="Find here..." value="Dr. Diane" />
                    </div>

                    <div class="search-button">
                        <button class="flex-center">
                            <i class="ph ph-sliders-horizontal"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- Search Section End -->
        <TabTitle
            :tabs="[{ title: 'Active Orders', link: '/maintenances/active' }, { title: 'Completed', link: '/maintenances/completed' }]" />
        <div class="tab-content activeTab" id="upcoming_data">

            <RouterView />
        </div>
    </main>
    <!-- Logout Modal Start -->
    <div class="">
        <div class="logout-modal-bg" id="logoutModalBg"></div>
        <div class="px-6 pt-17 logout-modal-area pb-8 logoutModalClose" id="logoutModal">
            <div
                class="sort-options w-100 text-center px-10 d-flex flex-column justify-content-center align-items-center">
                <h2 class="heading-2 y300-color">Cancel Appointment</h2>
                <div class="custom-border-area position-relative my-5 w-100">
                    <div class="line-horizontal"></div>
                </div>
                <p>Are you sure you want to cancel?</p>
                <div class="w-100 pt-8 d-flex justify-content-between align-items-center gap-4">
                    <div class="gender-button" id="cancelButton">
                        <button>No</button>
                    </div>
                    <a href="./cancel-appoinment.html" class="gender-button active" id="logoutButton">
                        <span class="d-block">Yes</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Logout Modal End -->

</template>

<style scoped></style>

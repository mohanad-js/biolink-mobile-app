<script setup>
import SubHeader from '@/components/SubHeader.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getMaintenanceOrderDetails } from '@/api/maintenanceApiCalls';
import { useLoading } from 'vue-loading-overlay';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const route = useRoute()
const order = ref({})

const loader = useLoading({
    opacity: 0.5,
    color: "#198754",
})

const fetchOrder = () => {
    let _loader = loader.show()
    getMaintenanceOrderDetails(route.params.id).then((res) => {
        order.value = res
    }).finally(() => {
        _loader.hide()
    })

}

watch(() => route.params.id, () => { fetchOrder() }, { immediate: true })


const baseUrl = 'http://192.168.1.80:5008'
</script>


<template>
    <main class="h-100 pb-200 mx-3">
        <SubHeader title="Order Details" link="/maintenances" />

        <!-- basic details -->

        <div class="top-doctor-area mt-5">
            <div class="w-100 base-card p-4 mb-4">
                <h5 class="card-header">Basic Details</h5>
                <hr />
                <div class="d-flex justify-content-between align-items-start gap-4 flex-column">

                    <div class="d-flex align-items-end">
                        <div class="me-3">
                            <i class="ph-bold ph-gear"></i>
                        </div>

                        <div class="d-flex">
                            <span class="ml-3 category fw-bold name">{{ order.device }} </span>
                            <div>
                                <i class="ph-bold ph-dot-outline ph-bold fs-4 mb-n1"></i>
                            </div>
                            <span class="work-place fw-bold name">{{ order.model }}</span>
                        </div>
                    </div>

                    <div class="d-flex align-items-end">
                        <div class="me-3">
                            <i class="ph-bold ph-clipboard"></i>
                        </div>

                        <div class="d-flex mb-1">
                            <span class="badge text-bg-primary">{{ order.status }}</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-end">
                        <div class="me-3">
                            <i class="ph-bold ph-gps"></i>
                        </div>
                        <div>
                            <span>{{ order.location }}</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-end">
                        <div class="me-3">
                            <i class="ph-bold ph-file-plus"></i>
                        </div>

                        <div>
                            created at <strong>{{ order.created }}</strong>
                        </div>
                    </div>

                    <div class="d-flex align-items-end" v-if="order.maintenance_order_details?.accepted_time">
                        <div class="me-3">
                            <i class="ph-bold ph-check"></i>
                        </div>

                        <div>
                            Accepted at <strong>{{ order.maintenance_order_details?.accepted_time }}</strong>
                        </div>
                    </div>

                    <div class="d-flex align-items-end" v-if="order.maintenance_order_details?.examin_time">
                        <div class="me-3">
                            <i class="ph-bold ph-checks"></i>
                        </div>

                        <div>
                            Examined at <strong>{{ order.maintenance_order_details?.examin_time }}</strong>
                        </div>
                    </div>

                    <div class="d-flex align-items-end" v-if="order.maintenance_order_details?.maintenance_time">
                        <div class="me-3">
                            <i class="ph-bold ph-toolbox"></i>
                        </div>

                        <div>
                            Maintained at <strong>{{ order.maintenance_order_details?.maintenance_time }}</strong>
                        </div>
                    </div>

                    <div class="d-flex align-items-end" v-if="order.maintenance_order_details?.complete_time" >
                        <div class="me-3">
                            <i class="ph-bold ph-check-circle"></i>
                        </div>

                        <div>
                            Completed at <strong>{{ order.maintenance_order_details?.complete_time }}</strong>
                        </div>
                    </div>
                    <div class="d-flex align-items-end" v-if="order.maintenance_price || order.scan_fees">
                        <div class="me-3">
                            <i class="ph-bold ph-money"></i>
                        </div>
                        <div>
                            <span>Maintenance Cost <strong>{{ order.maintenance_price }}</strong>  </span>
                            <i class="ph-bold ph-dot-outline ph-bold fs-4"></i>
                            <span>Scan Fees <strong>{{ order.scan_fees }}</strong></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-100 base-card p-4 mb-4"  v-if="order.maintenance_order_details">
                <h5 class="card-header">Technical Details</h5>
                <hr />
                <div v-if="order?.maintenance_order_spare_parts?.length > 0"  class="d-flex justify-content-between align-items-start gap-4 flex-column mt-3">
                    <p class="fs-5">Spare Parts</p>

                    <div class="d-flex align-items-end" v-for="spare_part in order.maintenance_order_spare_parts">

                        <div class="me-3">
                            <i class="ph-bold ph-wrench"></i>

                        </div>
                        <div>
                            <span>{{ spare_part.spare_part.name }}</span>
                        </div>
                        <i class="ph-bold ph-dot-outline ph-bold fs-4 mb-n1"></i>
                        <div>
                            <strong>{{ spare_part.qty }} pice(s) </strong>
                        </div>
                    </div>


                </div>
                <hr>
                <div class="d-flex justify-content-between align-items-start gap-4 flex-column mt-3">

                    <div class="d-flex align-items-end"
                    v-if="order.maintenance_order_details?.estimated_maintenance_time">
                    <div class="me-3">
                        <i class="ph-bold ph-clock-countdown"></i>
                    </div>
                    
                    <div>
                        <span>Estimated time <strong>{{ order.maintenance_order_details.estimated_maintenance_time
                                    }} </strong></span>
                        </div>
                        
                    </div>

                    <div class="d-flex align-items-end" v-if="order.maintenance_order_details?.engineer">
                        <div class="me-3">
                            <i class="ph-bold ph-user-gear"></i>
                        </div>

                        <div>
                           Engineer <strong>{{ order.maintenance_order_details?.engineer?.name }}</strong>
                        </div>


                    </div>

                    </div>
            </div>



            <!-- images -->
            <div class="w-100 p-4 mb-4" v-if="order.maintenance_order_images">
                <Swiper :modules="[Navigation]" navigation>

                    <SwiperSlide v-if="order.maintenance_order_images && order.maintenance_order_images[`image1`]">
                        <img v-if="order.maintenance_order_images && order.maintenance_order_images[`image1`]"
                            :src="baseUrl + order.maintenance_order_images[`image1`].replace('./public', '')" />
                    </SwiperSlide>

                    <SwiperSlide v-if="order.maintenance_order_images && order.maintenance_order_images[`image2`]">
                        <img v-if="order.maintenance_order_images && order.maintenance_order_images[`image2`]"
                            :src="baseUrl + order.maintenance_order_images[`image2`].replace('./public', '')" />
                    </SwiperSlide>

                    <SwiperSlide v-if="order.maintenance_order_images && order.maintenance_order_images[`image3`]">
                        <img v-if="order.maintenance_order_images && order.maintenance_order_images[`image3`]"
                            :src="baseUrl + order.maintenance_order_images[`image3`].replace('./public', '')" />
                    </SwiperSlide>

                    <SwiperSlide v-if="order.maintenance_order_images && order.maintenance_order_images[`image4`]">
                        <img v-if="order.maintenance_order_images && order.maintenance_order_images[`image4`]"
                            :src="baseUrl + order.maintenance_order_images[`image4`].replace('./public', '')" />
                    </SwiperSlide>
                </Swiper>
            </div>


            <div v-if="order.status !== 'completed'" class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                <button  :disabled="order.status !== 'new' && order.status !== 'examined'" class=" btn btn-danger fill d-block w-100 ">
                    Cancel Order
                </button>
            </div>

            <div  v-if="order.status === 'examined'" class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                <button  class=" btn btn-success fill d-block w-100 ">
                    Approve Maintenance
                </button>
            </div>

            <div  v-if="order.status === 'new'" class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                <button class=" btn btn-primary fill d-block w-100 ">
                    Update Order
                </button>
            </div>

        </div>

    </main>
</template>

<style>
.top-doctor-area .base-card {
    border-radius: 20px;
    border: 1px solid var(--borderColor);
}

.top-doctor-area .base-card.base-card-img {
    border-radius: 8px;
    position: relative;
    background-color: var(--g50);
    width: 70px;
    height: 72px;
}

.top-doctor-area .base-card.base-card-img .active {
    position: absolute;
    top: 8px;
    right: -8px;
}

@media screen and (max-width: 360px) {
    .top-doctor-area .base-card.base-card-img {
        height: 60px;
    }
}

.top-doctor-area .base-card.favourite-button {
    border-radius: 8px;
    border: 1px solid var(--secodayBg2);
}

.top-doctor-area .base-card.session-button {
    border-radius: 8px;
    background-color: var(--p1);
    color: var(--white);
}



.top-doctor-area .base-card.category {
    font-size: 14px;
}

.top-doctor-area .base-card.work-place {
    font-size: 12px;
}

.top-doctor-area .base-card.rating {
    color: var(--n2);
    font-size: 12px;
}

.top-doctor-area .base-card.rating i {
    color: var(--yellow);
}

.top-doctor-area .base-card.time {
    font-size: 12px;
    color: var(--p1);
}

@media screen and (max-width: 410px) {
    .top-doctor-area .base-card.appointment-link-buttons {
        flex-wrap: wrap;
    }
}

.top-doctor-area .base-card.appointment-link-buttons .appointment-link {
    padding: 8px 16px;
    color: var(--p1);
    border-radius: 8px;
    border-top: 1px solid var(--p1);
    border-right: 1px solid var(--p1);
    border-bottom: 2px solid var(--p1);
    border-left: 1px solid var(--p1);
    text-align: center;
}

.top-doctor-area .base-card.appointment-link-buttons .appointment-link.fill {
    background-color: var(--p1);
    color: var(--white);
}
</style>
<script setup>
import router from '@/router';

defineProps(['order'])

</script>

<template>
    <div class="top-doctor-area mt-5">
        <div class="w-100 base-card p-4 mb-4">
            <div class="d-flex justify-content-between align-items-start gap-4 flex-column">



                <div class="d-flex align-items-end">
                    <div class="me-3" >
                        <i class="ph-fill ph-gear"></i>
                    </div>

                    <div class="d-flex">
                        <span class="ml-3 category fw-bold name">{{ order.device }} </span>
                        <div class="mb-n1">
                            <i class="ph-fill ph-dot-outline ph-bold fs-4 mb-n1"></i>
                        </div>
                        <span class="work-place fw-bold name">{{ order.model }}</span>
                    </div>
                </div>

                <div class="d-flex align-items-end">
                    <div class="me-3">
                        <i class="ph-fill ph-clipboard"></i>
                    </div>

                    <div class="d-flex mb-1">
                        <span class="badge text-bg-primary">{{ order.status }}</span>
                    </div>
                </div>
                <div class="d-flex align-items-end">
                    <div class="me-3">
                        <i class="ph-fill ph-gps"></i>
                        </div>
                        <div class=" mb-1">
                            <span>{{ order.location }}</span>
                        </div>
                </div>
                <div class="d-flex align-items-end">
                    <div class="me-3">
                        <i class="ph-fill ph-clock"></i> 
                    </div>

                    <div class=" mb-1">
                        <span>{{ order.created }}</span>
                    </div>


                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                <button @click="()=> router.push({name:'order details', params:{id:order.id}})" class="appointment-link fill d-block w-100 logoutModalButton">
                    Details
                </button>
            </div>
        </div>
    </div>
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
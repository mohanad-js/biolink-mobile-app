<script setup>
const props = defineProps({
    card: {
        type: Object,
        required: true
    },
    cancelButton: {
        type: Boolean ,
        required: false,
        default: false
    },
    styles: {
        type: String,
    },
})
console.log('test',props)
</script>

<template>
    <div class="top-doctor-area ">
        <div class="w-100 base-card p-4 mb-4">
            <div class="d-flex justify-content-between align-items-start gap-4">
                <div class="d-flex justify-content-start align-items-start gap-4">
                    <div class="base-card-img flex-center">
                        <img src="@/assets/img/top-doctor-4.png" class="h-100" alt="" />
                    </div>
                    <div class="">
                        <p class="fw-bold name">{{ card.name }}</p>
                        <p class="name">state: Not approve</p>
                        <p class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                            <span class="category">{{card.center}} </span>
                            <i class="ph ph-dot fs-4"></i>
                            <span class="work-place">{{card.price}}K SDG</span>
                        </p>
                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                            <!-- <div class="rating">
                                <i class="ph-fill ph-star"></i>
                                4.7
                            </div> -->
                            <!-- <i class="ph ph-dot fs-2"></i> -->
                            <div class="time">
                                <i class="ph-fill ph-clock"></i>{{card.duration}}
                            </div>
                        </div>
                    </div>
                </div>
                <button class="p-2 flex-center session-button">
                    <i class="ph ph-video-camera fs-5"></i>
                </button>
            </div>
            <div class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                <a v-if="cancelButton" href="/services/services-profile" class="appointment-link d-block w-100">{{!cancelButton?'Appointment':'Details'}}</a>
                <a v-if="!cancelButton" href="" class="appointment-link d-block w-100">{{!cancelButton?'Appointment':'Details'}}</a>
                <button v-if="cancelButton" class="appointment-link fill d-block w-100 logoutModalButton">
                    Cancel
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
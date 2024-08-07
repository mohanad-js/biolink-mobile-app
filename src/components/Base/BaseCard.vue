<script setup>
const props = defineProps({
    card: {
        type: Object,
        required: {
            header: 'defualt',
            image: 'https://placehold.co/600x400',
            description: 'default',
            icon: 'ph-fill ph-check-circle '
        }
    },
    styles: {
        type: String,
    },
})
console.log(props.card)
</script>

<template>
    <div class="top-doctor-area">
        <div class="w-100 base-card p-4 mb-4">
            <div class="d-flex justify-content-between align-items-start gap-2">
                <div class="d-flex justify-content-start align-items-center gap-4">
                    <div v-if="card.image" class="base-card-img flex-center">
                        <img src="@/assets/img/top-doctor-4.png" class="h-100" alt="" />
                    </div>
                    <div v-if="card.icon" class="base-card-img flex-center ">
                        <i :class="`${card.icon} fs-1`"></i>
                    </div>

                    <div class="">
                        <p class="fw-bold name">{{ card.header }}</p>
                        <p class="d-inline-flex justify-content-start align-items-center pt-2 flex-wrap">
                            <span class="category">
                                {{ card.description }}
                            </span>
                        </p>
                    </div>
                </div>

                <div class=" flex-center align-self-start ">
                    <slot name="corner-badge">

                    </slot>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                <slot name="actions">

                </slot>

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
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
    }
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
<style scoped>
.base-card {
    border-radius: 20px;
    border: 1px solid var(--borderColor);
}
</style>
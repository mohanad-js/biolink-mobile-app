<script setup>
const props = defineProps([
    "price", "currency"
])
</script>

<template>
    <div class="d-flex justify-content-between align-items-center  w-100">
        <slot name="actions">

        </slot>
        <div class="custom-border-area position-relative mx-3">
            <div class="line-horizontal"></div>
        </div>
        <p class="fs-5 fw-bold d-flex justify-content-center align-content-center ">
            <i :class="`ph ph-currency-${currency} fs-5 fw-bold align-self-center`"></i>
            {{ props.price}}
        </p>
    </div>
</template>

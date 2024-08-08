<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';


</script>

<template>
    <swiper :slides-per-view="3" :space-between="50">
        <swiper-slide v-for="(_, slot) of $slots" v-slot:[slot]="scope" >
            <slot :name="slot" v-bind="scope"/>

        </swiper-slide>
    </swiper>
</template>
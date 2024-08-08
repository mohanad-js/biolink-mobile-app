<script setup>
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps([
    'title', 'link'
])

const router = useRouter();

const goBack = () => {

    if (props.link) { router.push(props.link) }
    else {
        router.back();
    }
};

</script>

<template>
    <section class="px-6 pt-8 notification-top-area">
        <div class="d-flex justify-content-between align-items-center ">
            <div class="d-flex justify-content-start align-items-center gap-4 py-3">
                <button @click="goBack" class="back-button flex-center">
                    <i class="ph ph-caret-left"></i>
                </button>
                <h2 v-if="title">{{ title }}</h2>
                <h2 v-else>{{ route.name }}</h2>
            </div>
            <slot name="action-button">

            </slot>
        </div>
    </section>
</template>

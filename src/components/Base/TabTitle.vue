<script setup>

const props = defineProps(["message", "tabs"])

console.log(props.message);
</script>

<template>
    <div class="px-6 w-100 appoinment-tab-area">
        <div class="py-6 w-100">
            <ul class="tab-button d-flex justify-content-around align-items-center w-100">
                <router-link v-for="tab in tabs" :key="tab" :to="tab.link" id="upcoming" class="tabButton">{{
                    tab.title }}</router-link>

            </ul>
        </div>
        <slot>

        </slot>
    </div>
</template>

<style scoped>
.appoinment-tab-area .tab-button a {
    color: var(--p1);
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--borderColor);
    width: 100%;
    text-align: center;
}

.appoinment-tab-area .tab-button a.router-link-active {
    border-bottom: 2px solid var(--p1);
}
</style>

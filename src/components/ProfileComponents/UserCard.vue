<script setup>
const props = defineProps({
    user: {
        type: Object,
    }
})

console.log(props.user)
</script>

<template>
    <div class="profile-info d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-start align-items-center gap-4">
            <div class="" style="height: 72px !important; width: 72px;">
                <img src="https://avatar.iran.liara.run/public/48" loading="lazy" alt="">
            </div>
            <div class="w-auto">
                <h3 class="heading-3 text-white">{{ user.name }}</h3>
                <p class="text-white pt-2 fw-light">+{{ user.email }}</p>
            </div>
        </div>
        <RouterLink :to="`/profile/edit-profile/${user.id}`" class="edit-icon flex-center">
            <i class="ph ph-pencil-simple-line"></i>
        </RouterLink>
    </div>
</template>

<style scoped>
.settings-area .profile-info {
    background-color: var(--p1);
    padding: 24px;
    border-radius: 20px;
}
</style>

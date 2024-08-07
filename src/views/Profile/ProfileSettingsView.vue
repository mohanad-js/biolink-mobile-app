<script setup>
import SubHeader from '@/components/SubHeader.vue';
import UserCard from '@/components/ProfileComponents/UserCard.vue';
import NavigationButton from '@/components/Base/NavigationButton.vue';
import BaseAlertModal from '@/components/Base/BaseAlertModal.vue';
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import BaseButton from '@/components/Base/BaseButton.vue';

const authStore = useAuthStore();
const { currentUser } = storeToRefs(authStore)

const showLogoutModal = ref(false);
</script>

<template>
    <section class="settings-area px-6 pt-6 overflow-auto pb-20">
        <SubHeader title="Profile Settings" link="/home" />

        <UserCard :user="currentUser" />
        <div class="settings-area pt-8 d-flex flex-column gap-6 ">
            <NavigationButton :to="'/profile/transactions-history'" text="Transactions History" icon="ph-cardholder" />
            <NavigationButton :to="'/profile/order-history'" text="Products Order History" icon="ph-shopping-cart" />
            <NavigationButton :to="'/profile/service-history'" text="Service Order History" icon="ph-stethoscope" />
            <NavigationButton :to="'/profile/profile/security'" text="Security" icon="ph-shield-check" />
            <div @click="showLogoutModal = true"
                class="logoutModalButton d-flex justify-content-between align-items-center setting-item">
                <div class="d-flex justify-content-start align-items-center gap-4">
                    <div class="flex-center">
                        <i class="ph ph-users-three setting-icon logout"></i>
                    </div>
                    <p class="fs-5 fw-semibold logout-text">Logout</p>
                </div>
                <div class="chevron_icon">
                    <i class="ph ph-caret-right"></i>
                </div>
            </div>
        </div>
    </section>
    <BaseAlertModal title="Logout" message="Are you sure you want to log out" v-model:visible="showLogoutModal">
        <template #actions>
            <button @click="authStore.logout(); showLogoutModal = false">Logout</button>
        </template>
    </BaseAlertModal>
</template>

<style scoped>
.settings-area {
    padding-bottom: 10px !important;
}
</style>

<script setup>
import SubHeader from '@/components/SubHeader.vue';
import BaseCard from '@/components/Base/BaseCard.vue';
import PaymentPriceAction from '@/components/PaymentPriceAction.vue';
const recentTransactions = [
    {
        amount: 11.000,
        date: '2022-01-01',
        type: 'Purchase',
        status: 'Completed',
        icon: 'ph-fill ph-check-circle primary-text-color '
    },
    {
        amount: 11.000,
        date: '2022-01-01',
        type: 'Purchase',
        status: 'Completed',
        icon: 'ph-fill ph-check-circle primary-text-color '
    },
    {
        amount: 11.000,
        date: '2022-01-01',
        type: 'Purchase',
        status: 'Completed',
        icon: 'ph-fill ph-check-circle primary-text-color '
    },
    {
        amount: 11.000,
        date: '2022-01-01',
        type: 'Purchase',
        status: 'Completed',
        icon: 'ph-fill ph-check-circle primary-text-color '
    },
    {
        amount: 11.000,
        date: '2022-01-01',
        type: 'Purchase',
        status: 'Completed',
        icon: 'ph-fill ph-check-circle primary-text-color '
    },
    {
        amount: 11.000,
        date: '2022-01-01',
        type: 'Purchase',
        status: 'Completed',
        icon: 'ph-fill ph-check-circle primary-text-color '
    },

]
</script>

<template>
    <SubHeader title="Transaction History" link="/profile-settings" />

    <main class="w-100 " style="padding-bottom: 126px !important;">
        <section class="px-6 pt-8 w-100">
            <!-- filter buttons -->
            <div class="d-flex  gap-3 pt-4">
                <button class="appointment-link fill   logoutModalButton">
                    All
                </button>
                <button class="appointment-link    logoutModalButton">
                    Purchases
                </button>
                <button class="appointment-link    logoutModalButton">
                    Services
                </button>
                <button class="appointment-link    logoutModalButton">
                    Maintenances
                </button>
            </div>
            <!-- end filter buttons -->
        </section>

        <section class="px-6 py-8 w-100">
            <BaseCard v-for="(item, index) in recentTransactions" :key="index"
                :card="{ header: item.date, description: item.type, icon: item.icon }">
                <template #actions>
                    <PaymentPriceAction :price="123454" currency="krw">
                    </PaymentPriceAction>
                </template>
                <template #corner-badge>
                    <span class=" p-2 badge bg-secondary">{{ item.type }}</span>
                </template>
            </BaseCard>


        </section>
    </main>
</template>

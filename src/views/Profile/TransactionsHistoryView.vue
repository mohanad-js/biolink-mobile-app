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

function toggleTransaction(event, transaction = '') {
    console.log(event.target, transaction)
}
</script>

<template>
    <SubHeader title="Transaction History" link="/profile-settings" />

    <main class="w-100 " style="padding-bottom: 126px !important;">

        <div class="btn-toolbar px-6 pt-8" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group me-2" role="group" aria-label="First group">
                <button @click="toggleTransaction($event)" type="button"
                    class="btn btn-base-outline btn-active">All</button>

            </div>
            <div class="btn-group me-2" role="group" aria-label="Second group">
                <button @click="toggleTransaction($event, 'purchases')" type="button"
                    class="btn btn-base-outline">Purchases</button>

            </div>
            <div class="btn-group me-2" role="group" aria-label="Third group">
                <button type="button" class="btn btn-base-outline">Services</button>
            </div>
            <div class="btn-group" role="group" aria-label="fourth group">
                <button type="button" class="btn btn-base-outline">Maintenance</button>
            </div>
        </div>

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

<style>
.btn-base-outline {
    margin-bottom: 2px;
    color: var(--p1);
    border-radius: 8px;
    border-top: 1px solid var(--p1);
    border-right: 1px solid var(--p1);
    border-bottom: 2px solid var(--p1);
    border-left: 1px solid var(--p1);
    text-align: center;
}

.btn-active {
    background-color: var(--p1);
    color: var(--white);

}
</style>

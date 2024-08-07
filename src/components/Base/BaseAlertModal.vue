<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: 'Alert!',
        },
        message: {
            type: String,
            default: 'Are you sure you want to Confirm?',
        },

    },
    methods: {
        closeModal() {
            this.$emit('update:visible', false);
        },
    },
};
</script>

<template>
    <div class="">
        <div :class="`logout-modal-bg ${visible ? 'active' : ''}`" id="logoutModalBg" @click.self="closeModal"></div>
        <div :class="`px-6 pt-17 logout-modal-area pb-8 ${visible ? 'logoutModalOpen' : 'logoutModalClose'}`"
            id="logoutModal">
            <div
                class="sort-options w-100 text-center px-10 d-flex flex-column justify-content-center align-items-center">
                <h2 class="heading-2 y300-color">{{ title }}</h2>
                <div class="custom-border-area position-relative my-5 w-100">
                    <div class="line-horizontal"></div>
                </div>
                <p>{{ message }}</p>
                <div class="w-100 pt-8 d-flex justify-content-between align-items-center gap-4">
                    <div class="gender-button" @click="closeModal">
                        <button>Cancel</button>
                    </div>
                    <slot name="actions">

                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>


<!-- <style scoped>
.logout-modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: rgba(30, 32, 34, 0.6);
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    animation: height 700ms;
}

.logoutModalClose {
    visibility: hidden;
    transform: translatey(100%);
    opacity: 0;
    transition-duration: 700ms;
}

.logoutModalOpen {
    visibility: visible;
    transform: translatey(0);
    opacity: 1;
    transition-duration: 700ms;
}
</style> -->

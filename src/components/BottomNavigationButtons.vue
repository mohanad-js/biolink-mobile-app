<script setup>

</script>

<template>
    <!-- Footer Menu Start -->
    <div class="footer-menu-area">
        <div class="footer-menu flex justify-content-center align-items-center">
            <div class="d-flex justify-content-between align-items-center px-6 h-100">
                <router-link to="/store" class="flex-center navigation-button">
                    <i class="ph-fill ph ph-shopping-bag link-item "></i>
                </router-link>
                <router-link to="/services" class="flex-center navigation-button">
                    <i class="ph ph-stethoscope link-item"></i>
                </router-link>
                <router-link to="/maintenances" class="flex-center navigation-button"><i
                        class="ph ph-screwdriver link-item"></i></router-link>
                <router-link to="/profile" class="flex-center navigation-button"><i
                        class="ph ph-user link-item"></i></router-link>
            </div>

            <div class="plus-icon position-absolute">
                <div class="position-relative">
                    <img src="@/assets/img/plus-icon-bg.png" class="" alt="" />
                    <i class="ph ph-house"></i>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer Menu End -->
</template>

<style scoped>
.router-link-active i {
    background-color: var(--n1) !important;
    color: var(--white) !important;
    position: relative;
}

.router-link-active i::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 24px;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: var(--white);
}
</style>

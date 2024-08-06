<template>
    <main class="onboarding-screen">
        <section class="bg-slider-area1">
            <div class="swiper slider-height onbording-carousel-slider1 smooth">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="@/assets/img/onbording-screen-slider-img4.png" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="@/assets/img/onbording-screen-slider-img2.png" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="@/assets/img/onbording-screen-slider-img3.png" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="@/assets/img/onbording-screen-slider-img3.png" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="@/assets/img/onbording-screen-slider-img5.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-slider-area2">
            <div class="swiper slider-height onbording-carousel-slider2 smooth">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="@/assets/img/onbording-screen-slider-img4.png" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="@/assets/img/onbording-screen-slider-img2.png" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="@/assets/img/onbording-screen-slider-img3.png" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="@/assets/img/onbording-screen-slider-img3.png" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="@/assets/img/onbording-screen-slider-img5.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <!-- bottom steps slider -->
        <section class="bottom-steps-slider-area">
            <div class="bottom-steps">
                <div class="top-absolute-item"></div>
                <div class="swiper bottom-steps-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <h1>Expert Doctor <span>Advice Online</span></h1>
                            <p class="m-body">
                                Access professional medical guidance conveniently from the
                                comfort of your home.
                            </p>
                        </div>
                        <div class="swiper-slide">
                            <h1>Doctor Support, Always <span>Ready</span></h1>
                            <p class="m-body">
                                Access professional medical guidance conveniently from the
                                comfort of your home.
                            </p>
                        </div>
                        <div class="swiper-slide">
                            <h1 class="">Stay Healthy <span>Stay Connected</span></h1>
                            <p class="m-body">
                                Stay connected to health resources for a healthier, more
                                informed lifestyle.
                            </p>
                        </div>
                    </div>

                    <div class="swiper-pagination"></div>

                    <div class="swiper-nav-button">
                        <router-link to="/sign-in" class="skip-button">Skip</router-link>

                        <a class="ara-next" id="goToHomePage">
                            <i class="ph ph-caret-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

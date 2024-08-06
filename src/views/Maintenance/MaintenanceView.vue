<script setup>
import BottomNavigationButtons from '@/components/BottomNavigationButtons.vue'
import SubHeader from '@/components/SubHeader.vue';
</script>

<template>
    <main class="h-100">

        <SubHeader />
        <!-- Search Section Start -->
        <section class="search-section w-100 px-6 pt-8">
            <div class="">
                <div class="search-area d-flex justify-content-between align-items-center gap-2 w-100">
                    <div class="search-box d-flex justify-content-start align-items-center gap-2 p-3 w-100">
                        <div class="flex-center">
                            <i class="ph ph-magnifying-glass"></i>
                        </div>
                        <input type="text" placeholder="Find here..." value="Dr. Diane" />
                    </div>

                    <div class="search-button">
                        <button class="flex-center">
                            <i class="ph ph-sliders-horizontal"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- Search Section End -->

        <div class="px-6 pb-45 w-100 appoinment-tab-area">
            <div class="py-6 w-100">
                <ul class="tab-button d-flex justify-content-around align-items-center w-100">
                    <li id="upcoming" class="active tabButton">Upcoming</li>
                    <li id="completed" class="tabButton">Completed</li>
                    <li id="cancelled" class="tabButton">Cancelled</li>
                </ul>
            </div>

            <div class="tab-content activeTab" id="upcoming_data">
                <div class="top-doctor-area">
                    <div class="d-flex flex-column gap-4">
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-1.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Marvin McKinney</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Video Call</span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Upcoming</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.9
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <button class="appointment-link fill d-block w-100 logoutModalButton">
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-2.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Dianne Russell</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Urology</span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Christ Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.8
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <button class="appointment-link fill d-block w-100 logoutModalButton">
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-2">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-3.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Savannah Nguyen</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Psychiatrist</span>
                                            <i class="ph ph-dot"></i>
                                            <span class="work-place">Cefixime Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.2
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <button class="appointment-link fill d-block w-100 logoutModalButton">
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-4.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Marvin McKinney</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Cardiologist </span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Franklin Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.7
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <button class="appointment-link fill d-block w-100 logoutModalButton">
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-1.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Marvin McKinney</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Cardiologist</span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">JFK Medical</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.9
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <button class="appointment-link fill d-block w-100 logoutModalButton">
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-2.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Dianne Russell</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Urology</span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Christ Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.8
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <button class="appointment-link fill d-block w-100 logoutModalButton">
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-2">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-3.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Savannah Nguyen</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Psychiatrist</span>
                                            <i class="ph ph-dot"></i>
                                            <span class="work-place">Cefixime Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.2
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <button class="appointment-link fill d-block w-100 logoutModalButton">
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-4.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Marvin McKinney</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Cardiologist </span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Franklin Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.7
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <button class="appointment-link fill d-block w-100 logoutModalButton">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-content hiddenTab" id="completed_data">
                <div class="top-doctor-area">
                    <div class="d-flex flex-column gap-4">
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-1.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Marvin McKinney</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Video Call</span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Upcoming</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.9
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./appoinment-schedule.html"
                                    class="appointment-link d-block w-100">Reschedule</a>
                                <a href="#" class="appointment-link fill d-block w-100">Review</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-2.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Dianne Russell</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Urology</span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Christ Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.8
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./appoinment-schedule.html"
                                    class="appointment-link d-block w-100">Reschedule</a>
                                <a href="#" class="appointment-link fill d-block w-100">Review</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-2">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-3.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Savannah Nguyen</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Psychiatrist</span>
                                            <i class="ph ph-dot"></i>
                                            <span class="work-place">Cefixime Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.2
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./appoinment-schedule.html"
                                    class="appointment-link d-block w-100">Reschedule</a>
                                <a href="#" class="appointment-link fill d-block w-100">Review</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-4.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Marvin McKinney</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Cardiologist </span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Franklin Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.7
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./appoinment-schedule.html"
                                    class="appointment-link d-block w-100">Reschedule</a>
                                <a href="#" class="appointment-link fill d-block w-100">Review</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-1.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Marvin McKinney</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Cardiologist</span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">JFK Medical</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.9
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./appoinment-schedule.html"
                                    class="appointment-link d-block w-100">Reschedule</a>
                                <a href="#" class="appointment-link fill d-block w-100">Review</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-2.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Dianne Russell</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Urology</span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Christ Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.8
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./appoinment-schedule.html"
                                    class="appointment-link d-block w-100">Reschedule</a>
                                <a href="#" class="appointment-link fill d-block w-100">Review</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-2">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-3.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Savannah Nguyen</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Psychiatrist</span>
                                            <i class="ph ph-dot"></i>
                                            <span class="work-place">Cefixime Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.2
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./appoinment-schedule.html"
                                    class="appointment-link d-block w-100">Reschedule</a>
                                <a href="#" class="appointment-link fill d-block w-100">Review</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-4.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Marvin McKinney</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Cardiologist </span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Franklin Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.7
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./appoinment-schedule.html"
                                    class="appointment-link d-block w-100">Reschedule</a>
                                <a href="#" class="appointment-link fill d-block w-100">Review</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-content hiddenTab" id="cancelled_data">
                <div class="top-doctor-area">
                    <div class="d-flex flex-column gap-4">
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-1.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Marvin McKinney</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Video Call</span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Upcoming</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.9
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <a href="#" class="appointment-link fill d-block w-100">Cancel</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-2.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Dianne Russell</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Urology</span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Christ Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.8
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <a href="#" class="appointment-link fill d-block w-100">Cancel</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-2">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-3.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Savannah Nguyen</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Psychiatrist</span>
                                            <i class="ph ph-dot"></i>
                                            <span class="work-place">Cefixime Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.2
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <a href="#" class="appointment-link fill d-block w-100">Cancel</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-4.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Marvin McKinney</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Cardiologist </span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Franklin Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.7
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <a href="#" class="appointment-link fill d-block w-100">Cancel</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-1.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Marvin McKinney</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Cardiologist</span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">JFK Medical</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.9
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <a href="#" class="appointment-link fill d-block w-100">Cancel</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-2.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Dianne Russell</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Urology</span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Christ Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.8
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <a href="#" class="appointment-link fill d-block w-100">Cancel</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-2">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-3.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Savannah Nguyen</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Psychiatrist</span>
                                            <i class="ph ph-dot"></i>
                                            <span class="work-place">Cefixime Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.2
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <a href="#" class="appointment-link fill d-block w-100">Cancel</a>
                            </div>
                        </div>
                        <div class="w-100 top-doctor-item p-4">
                            <div class="d-flex justify-content-between align-items-start gap-4">
                                <div class="d-flex justify-content-start align-items-start gap-4">
                                    <div class="doctor-img flex-center">
                                        <img src="@/assets/img/top-doctor-4.png" class="h-100" alt="" />
                                    </div>
                                    <div class="">
                                        <p class="fw-bold name">Dr. Marvin McKinney</p>
                                        <p
                                            class="d-inline-flex justify-content-start align-items-center py-2 flex-wrap">
                                            <span class="category">Cardiologist </span>
                                            <i class="ph ph-dot fs-4"></i>
                                            <span class="work-place">Franklin Hospital</span>
                                        </p>
                                        <div class="d-flex justify-content-start align-items-center flex-wrap">
                                            <div class="rating">
                                                <i class="ph-fill ph-star"></i>
                                                4.7
                                            </div>
                                            <i class="ph ph-dot fs-2"></i>
                                            <div class="time">
                                                <i class="ph-fill ph-clock"></i>12pm-5pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="p-2 flex-center session-button">
                                    <i class="ph ph-video-camera fs-5"></i>
                                </button>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center pt-4 gap-3 appointment-link-buttons">
                                <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                                <a href="#" class="appointment-link fill d-block w-100">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <BottomNavigationButtons />
    <!-- Logout Modal Start -->
    <div class="">
        <div class="logout-modal-bg" id="logoutModalBg"></div>
        <div class="px-6 pt-17 logout-modal-area pb-8 logoutModalClose" id="logoutModal">
            <div
                class="sort-options w-100 text-center px-10 d-flex flex-column justify-content-center align-items-center">
                <h2 class="heading-2 y300-color">Cancel Appointment</h2>
                <div class="custom-border-area position-relative my-5 w-100">
                    <div class="line-horizontal"></div>
                </div>
                <p>Are you sure you want to cancel?</p>
                <div class="w-100 pt-8 d-flex justify-content-between align-items-center gap-4">
                    <div class="gender-button" id="cancelButton">
                        <button>No</button>
                    </div>
                    <a href="./cancel-appoinment.html" class="gender-button active" id="logoutButton">
                        <span class="d-block">Yes</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Logout Modal End -->

</template>

<style scoped></style>

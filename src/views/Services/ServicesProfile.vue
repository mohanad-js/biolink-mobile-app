<script setup>
</script>

<template>
       
      <!-- Droctor Profile Section Start -->
      <section class="py-8 doctor-profle-img">
        <div class="position-relative flex-center w-100">
          <img src="@/assets/img/doctor-profile-img.png" alt="" />

          <div class="position-absolute top-icon w-100">
            <div
              class="d-flex justify-content-between align-items-center w-100"
            >
              <a href="./home.html" class="back-button flex-center">
                <i class="ph ph-caret-left"></i>
              </a>
              <button class="share-button flex-center">
                <i class="ph ph-share-network"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- Droctor Profile Section End -->

      <div class="doctor-profile-bottom">
        <div class="bottom-top">
          <div class="d-flex justify-content-between align-items-center">
            <h2>X-Ray</h2>
            
          </div>
          <p class="pt-1">Kassala Center</p>
          <div
            class="doctor-info d-flex justify-content-between align-items-center pt-6 flex-wrap gap-2"
          >
            <div
              class="item d-flex justify-content-start align-items-center gap-2"
            >
              <i class="ph ph-users-three d-block"></i>
              <div class="">
                <p>Price</p>
                <p class="fw-bold">500 SDG</p>
              </div>
            </div>
            <div
              class="item d-flex justify-content-start align-items-center gap-2"
            >
              <i class="ph ph-user d-block"></i>
              <div class="">
                <p>Duration</p>
                <p class="fw-bold">50 Min</p>
              </div>
            </div>
            <!-- <div
              class="item d-flex justify-content-start align-items-center gap-2"
            >
              <i class="ph ph-chat-text d-block"></i>
              <div class="">
                <p>Reviews</p>
                <p class="fw-bold">520</p>
              </div>
            </div> -->
          </div>
        </div>

        <div class="doctor-about">
          <h3>About Service</h3>
          <p class="pt-5">
            X-Ray is a dedicated gynecologist committed to women's
            health and well-being. With expertise in obstetrics and gynecology,
            she provides compassionate care, emphasizing preventive measures and
            personalized treatment. Dr. Johnson's approach focuses on empowering
            her patients through education and comprehensive medical guidance,
            ensuring their comfort and confidence throughout their healthcare
            journey.
          </p>

          <div class="d-flex flex-column gap-8 mt-8">
            <a
              href="./appoinment-schedule.html"
              class="link-button d-block text-center"
              >Book Service</a
            >
          </div>
        </div>
      </div>
    
</template>
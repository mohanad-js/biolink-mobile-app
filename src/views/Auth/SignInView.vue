<script setup>

import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()



</script>

<template>
  <main> class="flex-center h-100">
    <section class="sign-in-area">
      <h2 class="heading-2">Sign In</h2>
      <p class="paragraph-small pt-3">
        Access your account securely. Sign in to manage your personalized
        experience.
      </p>

      <form class="input-field-area d-flex flex-column gap-4">
        <div class="input-field-item">
          <p>Email</p>
          <div class="input-field">
            <input type="text" class="" placeholder="Email" />
          </div>
        </div>
        <div class="input-field-item">
          <p>Password</p>
          <div class="d-flex justify-content-between align-items-center input-field">
            <input type="password" class="" placeholder="******" />
            <i class="ph ph-eye-closed"></i>
          </div>
        </div>
        <div class="d-flex flex-column gap-8">
          <router-link to="/forget-password" class="d-block text-end fw-semibold">Forgot Password?</router-link>

          <button @click="authStore.login('email', 'password')" class="link-button d-block">Sign In</button>
        </div>

        <div class="position-relative continue-with">
          <img src="@/assets/img/line.png" class="line-left position-absolute" alt="" />
          <img src="@/assets/img/line.png" class="line-right position-absolute" alt="" />
          <span class="text-center continue-with">Or Continue With</span>
        </div>

        <div class="pt-3 flex-center gap-4 third-party-authentication">
          <button class="item">
            <img src="@/assets/img/google.svg" alt="" />
          </button>
          <button class="item">
            <img src="@/assets/img/apple.svg" alt="" />
          </button>
          <button class="item">
            <img src="@/assets/img/facebook.svg" alt="" />
          </button>
        </div>

        <div class="sign-in-up m-body">
          Don't have an account? <RouterLink to="/sign-up">Sign Up</RouterLink> here
        </div>
      </form>
    </section>
  </main>

</template>

<style lang="postcss" scoped></style>



<!-- Js Dependencies -->
<!-- <script src="@/assets/js/plugins/bootstrap.js"></script>
    <script src="@/assets/js/main.js"></script>
    <script src="@/assets/js/service-worker-settings.js"></script>
 -->

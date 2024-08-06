<script setup>

</script>

<template>
  <main class="flex-center h-100">
    <section class="sign-in-area">
      <h2 class="heading-2">Create an Account</h2>
      <p class="paragraph-small pt-3">
        Sign up today for personalized health insights and exclusive member
        perks!
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
        <div class="input-field-item">
          <p>Confirm Password</p>
          <div class="d-flex justify-content-between align-items-center input-field">
            <input type="password" class="" placeholder="******" />
            <i class="ph ph-eye-closed"></i>
          </div>
        </div>
        <div class="d-flex flex-column gap-8 align-items-start">
          <label class="checkbox style-c">
            <input type="checkbox" />
            <span class="checkbox__checkmark"></span>
            <span class="checkbox__body">Remember Password</span>
          </label>

          <router-link to="/sign-in" class="link-button d-block w-100">Sign Up</router-link>
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
          Already have an account? <router-link to="/sign-in">Sign In</router-link> here
        </div>
      </form>
    </section>
  </main>

</template>

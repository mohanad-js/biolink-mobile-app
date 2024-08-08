<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate';
import { email, required } from '@vee-validate/rules';
import { useAuthStore } from '@/stores/auth';
import { userLogin } from '@/api/authApiCalls';
import { useRouter } from 'vue-router';

const router = useRouter();
defineRule('required', required)

const authStore = useAuthStore();
const passwordVisable = ref(false);

const signIn = (values) => {
  userLogin({ name: values.email, pass: values.password }).then((data) => {
    authStore.setCurrentUser(data.data);
    // Redirect to dashboard or home page
    router.push('/home');
  })
}

function togglePasswordVisability() {
  passwordVisable.value = !passwordVisable.value;
}


onMounted(() => {
  if (authStore.isLoggedIn()) {
    router.push('/home');
  }
})



</script>

<template>
  <main class="flex-center h-100">
    <section class="sign-in-area">
      <h2 class="heading-2">Sign In</h2>
      <p class="paragraph-small pt-3">
        Access your account securely. Sign in to manage your personalized
        experience.
      </p>

      <Form class="input-field-area d-flex flex-column gap-4" @submit="signIn" novalidate>
        <div class="input-field-item">
          <p>Email</p>
          <div class="input-field">
            <Field type="text" placeholder="Email" name="email" rules="required" />
          </div>
          <ErrorMessage name="email" class=" text-danger" />

        </div>
        <div class="input-field-item">
          <p>Password</p>
          <div class="d-flex justify-content-between align-items-center input-field">
            <Field :type="passwordVisable ? 'text' : 'password'" name="password" placeholder="******"
              rules="required" />
            <i v-if="!passwordVisable" @click="togglePasswordVisability" class="ph ph-eye-closed"></i>
            <i v-if="passwordVisable" @click="togglePasswordVisability" class="ph ph-eye"></i>
          </div>
          <ErrorMessage name="password" class=" text-danger" />

        </div>
        <div class="d-flex flex-column gap-8">
          <RouterLink to="/forget-password  " class="d-block text-end fw-semibold">Forgot Password?</RouterLink>

          <button class="link-button d-block">Sign In</button>
        </div>

        <div class="position-relative continue-with">
          <img src="@/assets/img/line.png" class="line-left position-absolute" alt="">
          <img src="@/assets/img/line.png" class="line-right position-absolute" alt="">
          <span class="text-center continue-with">Or</span>
        </div>



        <div class="sign-in-up m-body">
          Don't have an account? <router-link to="/sign-up.html">Sign Up</router-link> here
        </div>
      </form>
    </section>
  </main>

</template>

<style scoped></style>

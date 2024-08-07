<script>
 export default {
  methods: {
    data() {
      return {
        user:'moaid',
        pass:'1234'
      }
    },
    signIn(user,pass){
      if(this.user=='moaid' && pass=='1234'){
        this.$router.push('/home')
      }else{
        console.warn("Rong pass");
      }
      // app.name=user
      // app.pass=pass
      // this.http.post("/login", app).then((res) => {  
      //   console.log(res)   
      //   if(res)
      //   this.$router.push('/home')    
      //   this.get(this.page);
      // });
      //console.log('test',user,pass); 
      
      //this.$router.push('/home')
      

    }
  },
 }
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
            <input type="text" class="" v-model="user" placeholder="Email" />
          </div>
        </div>
        <div class="input-field-item">
          <p>Password</p>
          <div class="d-flex justify-content-between align-items-center input-field">
            <input type="password" class="" v-model="pass" placeholder="******" />
            <i class="ph ph-eye-closed"></i>
          </div>
        </div>
        <div class="d-flex flex-column gap-8">
          <router-link to="/forget-password" class="d-block text-end fw-semibold">Forgot Password?</router-link>

          <router-link to="" class="link-button d-block" @click="signIn(user,pass)">Sign In</router-link>
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

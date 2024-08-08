<script setup>
import SubHeader from '@/components/SubHeader.vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import BasePanel from '@/components/Base/BasePanel.vue';
import { ref } from 'vue';
const name = ref('mohanad ');
</script>

<template>
    <main class="pb-200">
        <SubHeader />
        <section class="sign-in-area">
            <form class="input-field-area d-flex flex-column gap-4">
                <div class="w-100 d-flex justify-content-center ">
                    <div class="position-relative border border-2 rounded-circle shadow"
                        style="height: 180px !important; width: 180px;">
                        <img src="https://avatar.iran.liara.run/public/50" loading="lazy" alt="">
                        <label class="custom-file-input position-absolute ">
                            <div class="file-icon">
                                <i class="ph ph-paperclip"></i>


                            </div>
                            <input type="file">
                        </label>
                    </div>
                </div>
                <div class="input-field-item">
                    <div class="input-field">
                        <input type="text" value="Mohanad Saeed" class="" placeholder="Full Name">
                    </div>
                </div>
                <div class="input-field-item">
                    <div class="input-field">
                        <input disabled type="text" class="" placeholder="mohanad@gmail.com">
                    </div>
                </div>
                <button type="submit" class="link-button d-block w-100">Save</button>
            </form>
        </section>
    </main>
</template>
<style>
.custom-file-input {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0;
    padding: 0;
    background-color: var(--p1);
    /* Background color */
    border: 2px solid var(--white);
    /* Border color */
}

.custom-file-input input[type="file"] {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}

.custom-file-input .file-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 32px;
    font-weight: bold;
    color: var(--white)
        /* Icon color */
}
</style>
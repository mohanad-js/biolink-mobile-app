<script setup>
import SubHeader from '@/components/SubHeader.vue';
import { Field, Form, ErrorMessage, defineRule } from 'vee-validate';
import { ref } from 'vue';
import { required } from '@vee-validate/rules'
import { useMaintenanceStore } from '@/stores/maintenance';
import { createMaintenanceOrder } from '@/api/maintenanceApiCalls'
import { useLoading } from 'vue-loading-overlay';


const imagesPreview = ref([])

const { addMaintenanceOrder } = useMaintenanceStore()

defineRule('required', required)
defineRule('filesLimit', (value) => {
    if (value?.length <= 4) {
        return true
    }

    return "You can't upload more than 4 files"
})

let loader = useLoading({
    opacity: 0.5,
    color: "#198754",
});



const submitOrder = (values) => {

    const formData = new FormData()
    formData.append('device', values.device)
    formData.append('model', values.model)
    formData.append('location', values.location)
    formData.append('description', values.description)
    //TODO set those dynamically
    formData.append('user_id', 7)
    formData.append('center_id', 1)
    for (let image of values.images) {
        formData.append('images[]', image)
    }

    let _loader = loader.show()

    createMaintenanceOrder(formData).then((data) => {
        addMaintenanceOrder(data)
    }).finally(() => {
        _loader.hide()

    })
}

const onFileChange = (e) => {
    imagesPreview.value = []
    const files = e.target.files
    for (let i = 0; i < files.length; i++) {
        imagesPreview.value.push({id:i,src:URL.createObjectURL(files[i])})
    }
}



</script>


<template>
    <main class="h-100 pb-200">

        <SubHeader title="New Maintenance Order" link="/maintenances" />



        <Form @submit="submitOrder" novalidate>
            <section class="search-section w-100 px-6 pt-5">

                <div class="">
                    <div class="search-area d-flex justify-content-between align-items-center gap-2 w-100 mb-1">
                        <div class="search-box d-flex justify-content-start align-items-center gap-2 p-3 w-100">

                            <Field type="text" placeholder="Device Name" name="device" rules="required" />

                        </div>
                    </div>
                    <ErrorMessage name="device" class=" text-danger" />
                </div>
            </section>

            <section class="search-section w-100 px-6 pt-5">
                <div class="">
                    <div class="search-area d-flex justify-content-between align-items-center gap-2 w-100 mb-1">
                        <div class="search-box d-flex justify-content-start align-items-center gap-2 p-3 w-100">
                            <Field type="text" placeholder="Device Model" name="model" rules="required" />
                        </div>
                    </div>
                    <ErrorMessage name="model" class=" text-danger" />

                </div>
            </section>

            <section class="search-section w-100 px-6 pt-5">
                <div class="">
                    <div class="search-area d-flex justify-content-between align-items-center gap-2 w-100 mb-1">
                        <!-- <div class="search-box d-flex justify-content-start align-items-center gap-2 p-3 w-100"> -->
                        <Field as="select" name="location" class="form-select gap-2 p-3" rules="required">
                            <option selected>Location</option>
                            <option value="external">External</option>
                            <option value="internal">Internal</option>
                        </Field>
                        <!-- </div> -->
                    </div>
                    <ErrorMessage name="location" class=" text-danger" />

                </div>
            </section>

            <section class="search-section w-100 px-6 pt-5">
                <div class="">
                    <div class="search-area d-flex justify-content-between align-items-center gap-2 w-100 mb-1">
                        <div class="search-box d-flex justify-content-start align-items-center gap-2 p-3 w-100">
                            <Field as="textarea" type="text" placeholder="Description" name="description"
                                rules="required" />
                        </div>
                    </div>
                    <ErrorMessage name="device" class=" text-danger" />

                </div>
            </section>

            <section class="search-section w-100 px-6 pt-5">
                <div class="">
                    <div class="search-area d-flex justify-content-between align-items-center gap-2 w-100 mb-1">
                        <div class="search-box d-flex justify-content-start align-items-center gap-2 p-3 w-100">
                            <Field placeholder="Device Model" name="images" rules="filesLimit|required" v-slot="{handleChange}">
                                    <input accept="image/*" type="file" multiple  @change="(e)=>{handleChange(e); onFileChange(e)}"/>
                                </Field>
                        </div>
                    </div>
                    <ErrorMessage name="images" class=" text-danger" />

                </div>

                    <img v-for="image in imagesPreview" :key="image.id" :src="image.src" width="100" height="auto" />
            </section>

            <section class="search-section w-100 px-6 pt-5">
                <button class="appointment-link fill d-block w-100 logoutModalButton">
                    Submit Order
                </button>
            </section>
        </Form>
    </main>

</template>
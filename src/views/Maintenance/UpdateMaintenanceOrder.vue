<script setup>
import SubHeader from '@/components/SubHeader.vue';
import { useLoading } from 'vue-loading-overlay';
import { ref,watch } from 'vue';
import { getMaintenanceOrderDetails } from '@/api/maintenanceApiCalls';
import { useRoute } from 'vue-router';
import { Form, Field, ErrorMessage , defineRule} from 'vee-validate';
import { required } from '@vee-validate/rules';
import { updateMaintenanceOrder } from '@/api/maintenanceApiCalls';
import { useRouter } from 'vue-router';
import { baseURL } from '@/api';


const router = useRouter()
const route = useRoute()
const order = ref({})

const loader = useLoading({
    opacity: 0.5,
    color: "#198754",
})

const imagesPreview = ref([])



defineRule('required', required)

defineRule('filesLimit', (value) => {
    if (!value || value?.length <= 4) {
        return true
    }

    return "You can't upload more than 4 files"
})

const fetchOrder = () => {
    let _loader = loader.show()
    getMaintenanceOrderDetails(route.params.id).then((res) => {
        order.value = res
        if(order.value.maintenance_order_images){
            for (let i = 1; i < 5; i++) {
                if(order.value.maintenance_order_images[`image${i}`]){
                    imagesPreview.value.push({id:i,src:baseURL + order.value.maintenance_order_images[`image${i}`].replace('./public', '')})
                }
                
            }
        }
        console.log(imagesPreview.value)
    }).finally(() => {
        _loader.hide()
    })

}

watch(() => route.params.id, () => { fetchOrder() }, { immediate: true })



const updateOrder = (values) => {
    const formData = new FormData()
    formData.append('device', values.device)
    formData.append('model', values.model)
    formData.append('location', values.location)
    formData.append('description', values.description)
    //TODO set those dynamically
    formData.append('user_id', 7)
    formData.append('center_id', 1)

    console.log(values.images)
    if(values.images){
        for (let image of values.images) {
            formData.append('images', image)
        }
    }

    let _loader = loader.show()

    updateMaintenanceOrder(route.params.id, formData).then().finally(() => {
        _loader.hide()

        router.push({name:'order details',params:{id:route.params.id}})
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
    <main class="pb-200">
        <SubHeader link="/maintenances" />
        <Form @submit="updateOrder" novalidate>
            <section class="search-section w-100 px-6 pt-5">

                <div class="">
                    <div class="search-area d-flex justify-content-between align-items-center gap-2 w-100 mb-1">
                        <div class="search-box d-flex justify-content-start align-items-center gap-2 p-3 w-100">

                            <Field v-model="order.device" type="text" placeholder="Device Name" name="device" rules="required" />

                        </div>
                    </div>
                    <ErrorMessage name="device" class=" text-danger" />
                </div>
            </section>

            <section class="search-section w-100 px-6 pt-5">
                <div class="">
                    <div class="search-area d-flex justify-content-between align-items-center gap-2 w-100 mb-1">
                        <div class="search-box d-flex justify-content-start align-items-center gap-2 p-3 w-100">
                            <Field v-model="order.model" type="text" placeholder="Device Model" name="model" rules="required" />
                        </div>
                    </div>
                    <ErrorMessage name="model" class=" text-danger" />

                </div>
            </section>

            <section class="search-section w-100 px-6 pt-5">
                <div class="">
                    <div class="search-area d-flex justify-content-between align-items-center gap-2 w-100 mb-1">
                        <!-- <div class="search-box d-flex justify-content-start align-items-center gap-2 p-3 w-100"> -->
                        <Field v-model="order.location" as="select" name="location" class="form-select gap-2 p-3" rules="required">
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
                            <Field v-model="order.description" as="textarea" type="text" placeholder="Description" name="description"
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
                            <Field placeholder="Device Model" name="images" rules="filesLimit" v-slot="{handleChange}">
                                    <input accept="image/*" type="file" multiple  @change="(e)=>{handleChange(e); onFileChange(e)}"/>
                                </Field>
                        </div>
                    </div>
                    <ErrorMessage name="images" class=" text-danger" />

                </div>
                    <img class="me-2" v-for="image in imagesPreview" :key="image.id" :src="image.src" width="100" height="auto" />
            </section>

            <section class="search-section w-100 px-6 pt-5">
                <button class="appointment-link fill d-block w-100 logoutModalButton">
                    Submit Order
                </button>
            </section>
        </Form>
    </main>
    
</template>
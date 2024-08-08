<script>
import SCard from '@/components/ServiceComponents/ServiceCard.vue';
import PaymentPriceAction from '@/components/PaymentPriceAction.vue';
import { getServicesApi } from '../../../api/serviceApiCalls'
export default{
    components:{
        SCard,
        PaymentPriceAction
    },
    data(){
      return{
        services:[]
      }
    },
    methods:{
        getServices() {
            getServicesApi().then(res=>{
                this.services = res
                console.log("test: ",this.services)
            })
            
        }
  },
  mounted(){
    this.getServices()
  }
}
</script>

<template>
    <main>
        <div class="tab-content activeTab" id="upcoming_data">
                <SCard v-for="(service, index) in services" :key="index"
                :card="{name:service.service_name,
                    center:service.center_name}">
                  <template #actions>
                    <PaymentPriceAction :price="service.service_price" currency="dollar">
                        <template #actions>
                            <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                        </template>
                    </PaymentPriceAction>
                  </template>
                  <template #corner-badge>
                    <span class=" p-2 badge bg-secondary">{{ service.duration }}</span>
                  </template>
                </SCard>
        </div>
    </main>
</template>

<style>
.router-link-active.activeTab {
    animation: fadeDown 0.5s linear;

}
.appointment-link {
    padding: 5px 0px !important;
}
</style>

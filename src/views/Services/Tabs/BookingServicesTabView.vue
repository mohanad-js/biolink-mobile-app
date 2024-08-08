<script>
import SCard from '@/components/ServiceComponents/ServiceCard.vue';
import PaymentPriceAction from '@/components/PaymentPriceAction.vue';
import { getBookedServiceApi } from '../../../api/serviceApiCalls'
export default{
    components:{
        SCard,
        PaymentPriceAction
    },
    data(){
        return{
        orders:[]
      }
    },
    methods:{
        getBookedService(){
            
            getBookedServiceApi({state: 0}).then(res=>{
                console.log("test33",res)
                this.orders=res
                console.log("test: orde",this.orders)
            })
            
        }
      },
    mounted(){
        this.getBookedService()
    }
  }
</script>

<template>
    <main>
        <div class="tab-content activeTab" id="upcoming_data">
                <SCard v-for="(order, index) in orders" :key="index"
                :card="{
                    name:order.service_name,
                    center:order.center_name,
                    }">
                  <template #actions>
                    <PaymentPriceAction :price="order.order_price" currency="dollar">
                        <template #actions>
                            <a href="./chat-box.html" class="appointment-link d-block w-100">Appointment</a>
                        </template>
                    </PaymentPriceAction>
                  </template>
                  <template #corner-badge>
                    <span class=" p-2 badge bg-secondary">{{ order.order_time }}</span>
                  </template>
                </SCard>
        </div>
    </main>
</template>
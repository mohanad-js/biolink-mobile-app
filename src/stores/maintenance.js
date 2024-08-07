import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMaintenanceStore = defineStore('maintenance', () => {
  const maintenanceOrders = ref([
    {
      id: 1,
      status: 'active'
    },
    {
      id: 2,
      status: 'completed'
    }
  ])

  const getMaintenanceOrders = computed(() => maintenanceOrders.value)
  const completedMaintenanceOrders = computed(() =>
    maintenanceOrders.value.filter((order) => order.status === 'completed')
  )
  const activeMaintenanceOrders = computed(() =>
    maintenanceOrders.value.filter((order) => order.status !== 'completed')
  )

  const setMaintenanceOrders = (orders) => {
    maintenanceOrders.value = orders
  }

  const addMaintenanceOrder = (order) => {
    maintenanceOrders.value.unshift(order)
  }

  const deleteMaintenanceOrder = (id) => {
    maintenanceOrders.value = maintenanceOrders.value.filter(
      (order) => order.id !== id
    )
  }

  return {
    maintenanceOrders,
    getMaintenanceOrders,
    completedMaintenanceOrders,
    activeMaintenanceOrders,
    setMaintenanceOrders,
    addMaintenanceOrder,
    deleteMaintenanceOrder
  }
})

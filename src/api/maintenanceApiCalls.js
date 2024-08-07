import api from './index'

export const fetchMaintenanceOrders = async () => {
  //TODO get user id from local storage
  const res = await api.get('/maintenance/orders/7')
  return res.data.data
}

export const createMaintenanceOrder = async (data) => {
  const res = await api.post('/maintenance', data)
  return res.data.data
}

export const getMaintenanceOrderDetails = async (id) => {
  const res = await api.get(`/maintenance/${id}`)
  return res.data.data
}


export const updateMaintenanceOrder = async (id, data) => {
  const res = await api.put(`/maintenance/${id}`, data)
  return res.data.data
}

export const cancelMaintenanceOrder = async (id,data) => {
    const res = await api.put(`/maintenance/update-status/${id}`,data)
    return res.data.data
}

export const searchMaintenanceOrders = async (data) => {
    const res = await api.post('/maintenance/search',data)
    return res.data.data
}
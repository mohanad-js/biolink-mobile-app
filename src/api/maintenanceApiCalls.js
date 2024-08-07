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
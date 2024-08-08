import api from './index'


export const getServicesApi = async () => {
    //TODO get user id from local storage
    const res = await api.get('/services/mobile/getservices')
    return res.data.data
}
export const getBookedServiceApi = async (req) => {
    //TODO get user id from local storage
    const res = await api.post('/services/mobile/booked',req)
    return res.data.data
}



import api from './index'




  export const userLogin = async (data) => {
    const res = await api.post('/users/login', data)
    console.log("fitch fired user login--------------------")
    return res.data
  }
  
  
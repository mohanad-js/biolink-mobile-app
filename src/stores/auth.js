import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import httpService from '@/services/http'


export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref({
    id:1,
    center_id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    isAuthenticated: true,
    mobile:'5463 516 513 51',
    img: 'https://avatar.iran.liara.run/public/50'
  })

  function login(email, password) {
    console.log('login', email, password)
    localStorage.setItem('token',token)
    // localStorage.setItem('currentUser', JSON.stringify(req.user))
    // currentUser.value = res.user
  }
    // 
  

  function logout(){
    console.log('logout')
    // localStorage.removeItem('currentUser')
    
  }


  return { currentUser, logout,login }
})

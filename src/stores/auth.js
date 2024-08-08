import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import httpService from '@/services/http'


export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref({
    
  })
  const auth = ref(false)
  function setCurrentUser(user) {
    currentUser.value = user
    auth.value = true
    localStorage.setItem('currentUser', JSON.stringify(user))
    localStorage.setItem('isLoggedIn', JSON.stringify(true))
  }

  function isLoggedIn(){
    
    if (auth.value) {
      return true
    }
    else if ( JSON.parse( localStorage.getItem('isLoggedIn')))  {
      return true
    }
    return false
  }
  function getCurrentUser(){
    currentUser.value = JSON.parse(localStorage.getItem('currentUser'))
    return currentUser.value
  }

  function logout() {
    auth.value = false
    localStorage.removeItem('currentUser')
    localStorage.removeItem('isLoggedIn')
  }

  return { currentUser, logout,setCurrentUser,isLoggedIn,getCurrentUser }
})

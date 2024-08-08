import axios from "axios";
import Toast from "@/services/toast";

export const baseURL = "http://192.168.1.80:5008"

const api = axios.create({
    baseURL: `${baseURL}/api`,
    headers: {
        
    }
});

api.interceptors.response.use(
    function (response) {
      if (response.data.msg) {
        Toast.fire({icon: "success", title: response.data.msg}).then();
      }
      return response;
    },
    function (error) {
      let data;
      if (error.response) {
        if (error.response.data.msg) {
          data = error.response.data.msg;
        } else {
          data = 'Server Error';
        }
  
        Toast.fire({icon: "success", title: data}).then();
      }
      return Promise.reject(error);
    }
  );

export default api;
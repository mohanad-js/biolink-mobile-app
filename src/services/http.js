import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://192.168.1.80', 
});

const httpService = {
  // GET request
  get(url, params = {}) {
    return apiClient.get(url, { params })
      .then(response => console.log(response.data))
      .catch(error => {
        console.error('Error in GET request:', error);
        throw error;
      });
  },

  // POST request
  post(url, data) {
    return apiClient.post(url, data)
      .then(response => response.data)
      .catch(error => {
        console.error('Error in POST request:', error);
        throw error;
      });
  },

  // PUT request
  put(url, data) {
    return apiClient.put(url, data)
      .then(response => response.data)
      .catch(error => {
        console.error('Error in PUT request:', error);
        throw error;
      });
  },

  // DELETE request
  delete(url, params = {}) {
    return apiClient.delete(url, { params })
      .then(response => response.data)
      .catch(error => {
        console.error('Error in DELETE request:', error);
        throw error;
      });
  },
};

export default httpService;

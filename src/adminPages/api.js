// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blog-backendnew-1.onrender.com',
});

// Set token once at startup or when user logs in
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['x-token'] = token;
  } else {
    delete api.defaults.headers.common['x-token'];
  }
};

export default api;

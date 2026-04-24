import axios from "axios";

const userApi = axios.create({
    baseURL: 'http://localhost:8080/api/users/',
    headers: { 
        'Content-Type': 'application/json',
        'X-USER-EMAIL': localStorage.getItem('email')
     },
     withCredentials: true
  });

export default userApi;
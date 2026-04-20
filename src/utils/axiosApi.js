import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", 
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (userData) => {
  try {
    const response = await api.post("/auth/login", userData);
    return response;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

export const signup = async (userData) => {
  try {
    const response = await api.post("/auth/signup/user", userData);
    return response;
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    throw error;
  }
};

export const checkAuth = async () => {
  try {
    await api.get("/auth/me");
    console.log("sending me")
    return true;
  } catch (error) {
    console.log(error)
    return false;
  } finally {
    console.log('finished me')
  }
};

export const logout = async () => {
  try {
    await api.get("/auth/logout");
    return false;
  } catch (error) {
    console.error("Logout error:", error.response?.data || error.message);
    throw error;
  }
};

export const get = async (url) => {
  const response = await api.get(url);
  return response.data;
};

export const post = async (url, data) => {
  const response = await api.post(url, data);
  return response.data;
};

export const put = async (url, data) => {
  const response = await api.put(url, data);
  return response.data;
};

export const del = async (url) => {
  const response = await api.delete(url);
  return response.data;
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized - user not logged in or session expired");
    }
    return Promise.reject(error);
  }
);

export default api;
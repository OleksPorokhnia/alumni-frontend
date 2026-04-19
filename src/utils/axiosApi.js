import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // TODO: change
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});


/**
 * Login user
 * @param {string} email
 * @param {string} password
 */
export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login/", {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Register user
 * @param {object} userData
 */
export const signup = async (userData) => {
  try {
    const response = await api.post("/auth/signup/", userData);
    return response;
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    throw error;
  }
};


export const checkAuth = async () => {
  try {
    await api.get("/auth/me");
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Logout user
 */
export const logout = async () => {
  try {
    await api.post("/auth/logout");
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
      // optional: redirect to login here
    }
    return Promise.reject(error);
  }
);

export default api;
import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:8085/images", 
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchPresignedUrl(key) {
  try {
    const response = await api.get(`/getPresigned/${encodeURIComponent(key)}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении presigned URL', error);
    throw new Error('Ошибка при получении presigned URL');
  }
}

export async function fetchPresignedUrls(keys) {
  try {
    const response = await api.post('/getPresigned/batch', keys, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Ошибка при получении списка presigned URL', error);
    throw new Error('Ошибка при получении списка presigned URL');
  }
}
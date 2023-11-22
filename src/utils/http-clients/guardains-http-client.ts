import axios from 'axios';

export const guardianHttpClient = axios.create({
  baseURL: import.meta.env.VITE_GUARDIAN_API_BASE_URL,
  params: {
    'api-key': import.meta.env.VITE_GUARDIAN_API_KEY,
  },
});

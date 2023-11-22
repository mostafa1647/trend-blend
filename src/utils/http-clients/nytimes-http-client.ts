import axios from 'axios';

export const nytimesHttpClient = axios.create({
  baseURL: import.meta.env.VITE_NYTIMES_API_BASE_URL,
  params: {
    'api-key': import.meta.env.VITE_NYTIMES_API_KEY,
  },
});

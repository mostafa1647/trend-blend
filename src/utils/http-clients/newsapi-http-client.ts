import axios from 'axios';

export const newsapiHttpClient = axios.create({
  baseURL: import.meta.env.VITE_NEWSAPI_BASE_URL,
  params: {
    apiKey: import.meta.env.VITE_NEWSAPI_KEY,
    pageSize: import.meta.env.VITE_API_PAGE_SIZE,
  },
});

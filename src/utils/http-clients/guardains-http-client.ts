import axios from 'axios';

/**
 * @Documentation https://open-platform.theguardian.com/documentation/
 */
export const guardianHttpClient = axios.create({
  baseURL: import.meta.env.VITE_GUARDIAN_API_BASE_URL,
  params: {
    'api-key': import.meta.env.VITE_GUARDIAN_API_KEY,
    pageSize: import.meta.env.VITE_API_PAGE_SIZE,
  },
});

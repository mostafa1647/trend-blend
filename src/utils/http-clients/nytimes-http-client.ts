import axios from 'axios';

/**
 * @Documentation: https://developer.nytimes.com/docs/articlesearch-product/1/overview
 */
export const nytimesHttpClient = axios.create({
  baseURL: import.meta.env.VITE_NYTIMES_API_BASE_URL,
  params: {
    'api-key': import.meta.env.VITE_NYTIMES_API_KEY,
  },
});

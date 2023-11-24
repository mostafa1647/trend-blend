/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_NEWSAPI_BASE_URL: string;
  readonly VITE_NEWSAPI_KEY: string;
  readonly VITE_NEWSAPI_COUNTRY: string;
  readonly VITE_NYTIMES_API_BASE_URL: string;
  readonly VITE_NYTIMES_API_KEY: string;
  readonly VITE_GUARDIAN_API_BASE_URL: string;
  readonly VITE_GUARDIAN_API_KEY: string;
  readonly VITE_API_PAGE_SIZE: string;
  readonly VITE_REACT_QUERY_STALE_TIME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

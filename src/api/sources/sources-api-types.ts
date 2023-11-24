export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface GetSourcesSuccessResponse {
  status: string;
  sources: Source[];
}

export type GetSourcesResponse = GetSourcesSuccessResponse | Error;

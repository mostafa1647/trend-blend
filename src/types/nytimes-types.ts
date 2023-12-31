export interface NytimesDocument {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: NytimesMultimedia[];
  headline: NytimesHeadline;
  keywords: NytimesKeyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name?: string;
  byline: NytimesByline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
  print_section?: string;
  print_page?: string;
}

export interface NytimesMultimedia {
  rank: number;
  subtype: string;
  caption?: string | null;
  credit?: string | null;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: NytimesLegacy;
  subType: string;
  crop_name: string;
}

export interface NytimesLegacy {
  xlarge?: string;
  xlargewidth?: number;
  xlargeheight?: number;
  thumbnail?: string;
  thumbnailwidth?: number;
  thumbnailheight?: number;
  widewidth?: number;
  wideheight?: number;
  wide?: string;
}

export interface NytimesHeadline {
  main: string;
  kicker?: string;
  content_kicker?: string | null;
  print_headline?: string | null;
  name?: string | null;
  seo?: string | null;
  sub?: string | null;
}

export interface NytimesKeyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface NytimesByline {
  original?: string;
  person: NytimesPerson[];
  organization?: string | null;
}

export interface NytimesPerson {
  firstname?: string;
  middlename?: string | null;
  lastname?: string;
  qualifier?: string | null;
  title?: string | null;
  role: string;
  organization: string;
  rank: number;
}

export interface NytimesMeta {
  hits: number;
  offset: number;
  time: number;
}

export interface NytimesResponse {
  status: string;
  copyright: string;
  response: {
    docs: NytimesDocument[];
    meta: NytimesMeta;
  };
}

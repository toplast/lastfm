export interface ITagGetInfoParams {
  /** The language to return the wiki in, expressed as an ISO 639 alpha-2 code. */
  lang?: string;
  /** The tag name */
  tag: string;
}

export interface ITagGetSimilarParams {
  /** The tag name */
  tag: string;
}

export interface ITagGetTopAlbumsParams {
  /** The tag name */
  tag: string;
  /** The number of results to fetch per page. Defaults to 50. */
  limit?: number | string;
  /** The page number to fetch. Defaults to first page. */
  page?: number | string;
}

export interface ITagGetTopArtistsParams {
  /** The tag name */
  tag: string;
  /** The number of results to fetch per page. Defaults to 50. */
  limit?: number | string;
  /** The page number to fetch. Defaults to first page. */
  page?: number | string;
}

export interface ITagGetTopTracksParams {
  /** The tag name */
  tag: string;
  /** The number of results to fetch per page. Defaults to 50. */
  limit?: number | string;
  /** The page number to fetch. Defaults to first page. */
  page?: number | string;
}

export interface ITagGetWeeklyChartListParams {
  /** The tag name */
  tag: string;
}

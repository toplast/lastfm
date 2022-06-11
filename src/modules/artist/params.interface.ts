import { XOR } from "../../utils/types";

interface IArtistGetInfoBaseParams {
  /** Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response. */
  autocorrect?: 0 | 1;
  /**  The language to return the biography in, expressed as an ISO 639 alpha-2 code. */
  lang?: string;
  /** The username for the context of the request. If supplied, the user's playcount for this album is included in the response. */
  username?: string;
}

interface IArtistGetInfoByNameParams extends IArtistGetInfoBaseParams {
  /** The artist name. */
  artist: string;
}

interface IArtistGetInfoByMBIDParams extends IArtistGetInfoBaseParams {
  /** The musicbrainz id for the artist. */
  mbid: string;
}

export type TArtistGetInfoParams = XOR<
  IArtistGetInfoByNameParams,
  IArtistGetInfoByMBIDParams
>;

interface IArtistGetTopAlbumsBaseParams {
  /** Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response. */
  autocorrect?: 0 | 1;
  /** The number of results to fetch per page. Defaults to 50. */
  limit?: number | string;
  /** The page number to fetch. Defaults to first page. */
  page?: number | string;
}

interface IArtistGetTopAlbumsByNameParams
  extends IArtistGetTopAlbumsBaseParams {
  /** The artist name. */
  artist: string;
}

interface IArtistGetTopAlbumsByMBIDParams
  extends IArtistGetTopAlbumsBaseParams {
  /** The musicbrainz id for the artist. */
  mbid: string;
}

export type TArtistGetTopAlbumsParams = XOR<
  IArtistGetTopAlbumsByNameParams,
  IArtistGetTopAlbumsByMBIDParams
>;

interface IArtistGetTopTagsBaseParams {
  /** Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response. */
  autocorrect?: 0 | 1;
}

interface IArtistGetTopTagsByNameParams extends IArtistGetTopTagsBaseParams {
  /** The artist name. */
  artist: string;
}

interface IArtistGetTopTagsByMBIDParams extends IArtistGetTopTagsBaseParams {
  /** The musicbrainz id for the artist. */
  mbid: string;
}

export type TArtistGetTopTagsParams = XOR<
  IArtistGetTopTagsByNameParams,
  IArtistGetTopTagsByMBIDParams
>;

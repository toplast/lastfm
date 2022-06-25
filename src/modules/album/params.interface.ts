import { XOR } from "../../utils/types";

interface IAlbumGetInfoBaseParams {
  /** Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response. */
  autocorrect?: 0 | 1;
  /**  The language to return the biography in, expressed as an ISO 639 alpha-2 code. */
  lang?: string;
  /** The username for the context of the request. If supplied, the user's playcount for this album is included in the response. */
  username?: string;
}
interface IAlbumGetInfoByNameParams extends IAlbumGetInfoBaseParams {
  /** The album name. */
  album: string;
  /** The artist name. */
  artist: string;
}

interface IAlbumGetInfoByMBIDParams extends IAlbumGetInfoBaseParams {
  /** The musicbrainz id for the album. */
  mbid: string;
}

export type TAlbumGetInfoParams = XOR<
  IAlbumGetInfoByNameParams,
  IAlbumGetInfoByMBIDParams
>;

interface IAlbumGetTopTagsBaseParams {
  /** Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response. */
  autocorrect?: 0 | 1;
  /**  The language to return the biography in, expressed as an ISO 639 alpha-2 code. */
}

interface IAlbumGetTopTagsByNameParams extends IAlbumGetTopTagsBaseParams {
  /** The album name. */
  album: string;
  /** The artist name. */
  artist: string;
}

interface IAlbumGetTopTagsByMBIDParams extends IAlbumGetTopTagsBaseParams {
  /** The musicbrainz id for the album. */
  mbid: string;
}

export type TAlbumGetTopTagsParams = XOR<
  IAlbumGetTopTagsByNameParams,
  IAlbumGetTopTagsByMBIDParams
>;

import { XOR } from "../../utils/types";

interface ITrackGetInfoBaseParams {
  /** Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response. */
  autocorrect?: 0 | 1;
  /** The username for the context of the request. If supplied, the user's playcount for this album is included in the response. */
  username?: string;
}

interface ITrackGetInfoByNameParams extends ITrackGetInfoBaseParams {
  /** The artist name. */
  artist: string;
  /*  The track name */
  track: string;
}

interface ITrackGetInfoByMBIDParams extends ITrackGetInfoBaseParams {
  /** The musicbrainz id for the track. */
  mbid: string;
}

export type TTrackGetInfoParams = XOR<
  ITrackGetInfoByNameParams,
  ITrackGetInfoByMBIDParams
>;

interface ITrackGetTopTagsBaseParams {
  /** Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response. */
  autocorrect?: 0 | 1;
}

interface ITrackGetTopTagsByNameParams extends ITrackGetTopTagsBaseParams {
  /** The artist name. */
  artist: string;
  /*  The track name */
  track: string;
}

interface ITrackGetTopTagsByMBIDParams extends ITrackGetTopTagsBaseParams {
  /** The musicbrainz id for the track. */
  mbid: string;
}

export type TTrackGetTopTagsParams = XOR<
  ITrackGetTopTagsByNameParams,
  ITrackGetTopTagsByMBIDParams
>;

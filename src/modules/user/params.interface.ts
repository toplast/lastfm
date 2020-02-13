export interface IUserGetFriendsParams {
  /** The last.fm username to fetch the friends of. */
  user: string;
  /** Whether or not to include information about friends' recent listening in the response. */
  recenttracks?: boolean | string;
  /** The number of results to fetch per page. Defaults to 50. */
  limit?: number | string;
  /** The page number to fetch. Defaults to first page. */
  page?: number | string;
}

export interface IUserGetInfoParams {
  /** The user to fetch info for. Defaults to the authenticated user. */
  user: string;
}

export interface IUserGetLovedTracksParams {
  /** The user name to fetch the loved tracks for. */
  user: string;
  /** The number of results to fetch per page. Defaults to 50. */
  limit?: number | string;
  /** The page number to fetch. Defaults to first page. */
  page?: number | string;
}

export interface IUserGetPersonalTagsParams {
  /** The user who performed the taggings. */
  user: string;
  /**  The tag you're interested in. */
  tag: string;
  /** The type of items which have been tagged */
  taggingtype: "artist" | "album" | "track";
  /** The number of results to fetch per page. Defaults to 50. */
  limit?: number | string;
  /** The page number to fetch. Defaults to first page. */
  page?: number | string;
}

export interface IUserGetRecentTracksParams {
  /** The number of results to fetch per page. Defaults to 50. Maximum is 200. */
  limit?: number | string;
  /** The last.fm username to fetch the recent tracks of. */
  user: string;
  /** The page number to fetch. Defaults to first page. */
  page?: number | string;
  /**
   * Beginning timestamp of a range - only display scrobbles after this time, in UNIX timestamp format
   * (integer number of seconds since 00:00:00, January 1st 1970 UTC).
   * This must be in the UTC time zone. */
  from?: Date | string;
  /** Includes extended data in each artist, and whether or not the user has loved each track */
  extended?: 0 | 1;
  /**
   * End timestamp of a range - only display scrobbles before this time, in UNIX timestamp format
   * (integer number of seconds since 00:00:00, January 1st 1970 UTC).
   * This must be in the UTC time zone. */
  to?: Date | string;
}

export interface IUserGetTopAlbumsParams {
  /** The user name to fetch top albums for. */
  user: string;
  /** The time period over which to retrieve top albums for. */
  period?: "overall" | "7day" | "1month" | "3month" | "6month" | "12month";
  /** The number of results to fetch per page. Defaults to 50. */
  limit?: number | string;
  /** The page number to fetch. Defaults to first page. */
  page?: number | string;
}

export interface IUserGetTopArtistsParams {
  /** The user name to fetch top artists for. */
  user: string;
  /** The time period over which to retrieve top artists for. */
  period?: "overall" | "7day" | "1month" | "3month" | "6month" | "12month";
  /** The number of results to fetch per page. Defaults to 50. */
  limit?: number | string;
  /** The page number to fetch. Defaults to first page. */
  page?: number | string;
}

export interface IUserGetTopTagsParams {
  /** The user name */
  user: string;
  /** Limit the number of tags returned */
  limit?: number | string;
}

export interface IUserGetTopTracksParams {
  /** The user name to fetch top tracks for. */
  user: string;
  /** The time period over which to retrieve top tracks for. */
  period?: "overall" | "7day" | "1month" | "3month" | "6month" | "12month";
  /** The number of results to fetch per page. Defaults to 50. */
  limit?: number | string;
  /** The page number to fetch. Defaults to first page. */
  page?: number | string;
}

export interface IUserGetWeeklyAlbumChartParams {
  /** The last.fm username to fetch the charts of. */
  user: string;
  /** The date at which the chart should start from. See User.getChartsList for more. */
  from?: string;
  /** The date at which the chart should end on. See User.getChartsList for more. */
  to?: string;
}

export interface IUserGetWeeklyArtistChartParams {
  /** The last.fm username to fetch the charts of. */
  user: string;
  /** The date at which the chart should start from. See User.getWeeklyChartList for more. */
  from?: string;
  /** The date at which the chart should end on. See User.getWeeklyChartList for more. */
  to?: string;
}

export interface IUserGetWeeklyChartListParams {
  /** The last.fm username to fetch the charts list for. */
  user: string;
}

export interface IUserGetWeeklyTrackChartParams {
  /** The last.fm username to fetch the charts of. */
  user: string;
  /** The date at which the chart should start from. See User.getWeeklyChartList for more. */
  from?: string;
  /** The date at which the chart should end on. See User.getWeeklyChartList for more. */
  to?: string;
}

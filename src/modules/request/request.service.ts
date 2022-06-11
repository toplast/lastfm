/* eslint-disable @typescript-eslint/camelcase */
import { IAlbumGetInfo, IAlbumGetTopTags } from "../album/album.interface";
import {
  IArtistGetInfo,
  IArtistGetTopAlbums,
  IArtistGetTopTags,
} from "../artist/artist.interface";
import {
  ITagGetInfo,
  ITagGetSimilar,
  ITagGetTopAlbums,
  ITagGetTopArtists,
  ITagGetTopTags,
  ITagGetTopTracks,
  ITagGetWeeklyChartList,
} from "../tag/tag.interface";
import {
  ITagGetInfoParams,
  ITagGetSimilarParams,
  ITagGetTopAlbumsParams,
  ITagGetTopArtistsParams,
  ITagGetTopTracksParams,
  ITagGetWeeklyChartListParams,
} from "../tag/params.interface";
import {
  IUserGetFriends,
  IUserGetInfo,
  IUserGetLovedTracks,
  IUserGetPersonalTags,
  IUserGetRecentTracks,
  IUserGetTopAlbums,
  IUserGetTopArtists,
  IUserGetTopTags,
  IUserGetTopTracks,
  IUserGetWeeklyAlbumChart,
  IUserGetWeeklyArtistChart,
  IUserGetWeeklyChartList,
  IUserGetWeeklyTrackChart,
} from "../user/user.interface";
import {
  IUserGetFriendsParams,
  IUserGetInfoParams,
  IUserGetLovedTracksParams,
  IUserGetPersonalTagsParams,
  IUserGetRecentTracksParams,
  IUserGetTopAlbumsParams,
  IUserGetTopArtistsParams,
  IUserGetTopTagsParams,
  IUserGetTopTracksParams,
  IUserGetWeeklyAlbumChartParams,
  IUserGetWeeklyArtistChartParams,
  IUserGetWeeklyChartListParams,
  IUserGetWeeklyTrackChartParams,
} from "../user/params.interface";
import {
  TAlbumGetInfoParams,
  TAlbumGetTopTagsParams,
} from "../album/params.interface";
import {
  TArtistGetInfoParams,
  TArtistGetTopAlbumsParams,
  TArtistGetTopTagsParams,
} from "../artist/params.interface";
import RequestError from "../error/error.request";
import axios from "axios";

axios.defaults.baseURL = "https://ws.audioscrobbler.com";

type Params =
  | TAlbumGetInfoParams
  | TAlbumGetTopTagsParams
  | TArtistGetInfoParams
  | TArtistGetTopAlbumsParams
  | TArtistGetTopTagsParams
  | ITagGetInfoParams
  | ITagGetSimilarParams
  | ITagGetTopAlbumsParams
  | ITagGetTopArtistsParams
  | ITagGetTopTracksParams
  | ITagGetWeeklyChartListParams
  | IUserGetFriendsParams
  | IUserGetInfoParams
  | IUserGetLovedTracksParams
  | IUserGetPersonalTagsParams
  | IUserGetRecentTracksParams
  | IUserGetTopAlbumsParams
  | IUserGetTopArtistsParams
  | IUserGetTopTagsParams
  | IUserGetTopTracksParams
  | IUserGetWeeklyAlbumChartParams
  | IUserGetWeeklyArtistChartParams
  | IUserGetWeeklyChartListParams
  | IUserGetWeeklyTrackChartParams;
type Response =
  | IAlbumGetInfo
  | IAlbumGetTopTags
  | IArtistGetInfo
  | IArtistGetTopAlbums
  | IArtistGetTopTags
  | ITagGetInfo
  | ITagGetSimilar
  | ITagGetTopAlbums
  | ITagGetTopArtists
  | ITagGetTopTags
  | ITagGetTopTracks
  | ITagGetWeeklyChartList
  | IUserGetFriends
  | IUserGetInfo
  | IUserGetLovedTracks
  | IUserGetPersonalTags
  | IUserGetRecentTracks
  | IUserGetTopAlbums
  | IUserGetTopArtists
  | IUserGetTopTags
  | IUserGetTopTracks
  | IUserGetWeeklyAlbumChart
  | IUserGetWeeklyArtistChart
  | IUserGetWeeklyChartList
  | IUserGetWeeklyTrackChart;

export class ApiRequest {
  public async lastFm(
    method: string,
    apiKey: string,
    params?: Params,
  ): Promise<Response> {
    try {
      const { data } = await axios.get("/2.0", {
        params: {
          ...params,
          method,
          format: "json",
          api_key: apiKey,
        },
      });

      return data;
    } catch (err) {
      throw new RequestError(err);
    }
  }
}

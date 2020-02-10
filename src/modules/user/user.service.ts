/* eslint-disable @typescript-eslint/camelcase */
import {
  IGetFriends,
  IGetInfo,
  IGetLovedTracks,
  IGetPersonalTags,
  IGetRecentTracks,
  IGetTopAlbums,
  IGetTopArtists,
  IGetTopTags,
  IGetTopTracks,
  IGetWeeklyAlbumChart,
  IGetWeeklyArtistChart,
  IGetWeeklyChartList,
  IGetWeeklyTrackChart,
  IUserMethod
} from "./user.interface";
import {
  IGetFriendsParams,
  IGetInfoParams,
  IGetLovedTracksParams,
  IGetPersonalTagsParams,
  IGetRecentTracksParams,
  IGetTopAlbumsParams,
  IGetTopArtistsParams,
  IGetTopTagsParams,
  IGetTopTracksParams,
  IGetWeeklyAlbumChartParams,
  IGetWeeklyArtistChartParams,
  IGetWeeklyChartListParams,
  IGetWeeklyTrackChartParams
} from "./params.interface";
import axios from "axios";

type Params = IGetFriendsParams | IGetInfoParams | IGetLovedTracksParams | IGetPersonalTagsParams |
IGetRecentTracksParams | IGetTopAlbumsParams | IGetTopArtistsParams | IGetTopTagsParams |
IGetTopTracksParams | IGetWeeklyAlbumChartParams | IGetWeeklyArtistChartParams | IGetWeeklyChartListParams |
IGetWeeklyTrackChartParams
type Response = IGetFriends | IGetInfo | IGetLovedTracks | IGetPersonalTags | IGetRecentTracks |
  IGetTopAlbums | IGetTopArtists | IGetTopTags | IGetTopTracks | IGetWeeklyAlbumChart |
  IGetWeeklyArtistChart | IGetWeeklyChartList | IGetWeeklyTrackChart

export class User implements IUserMethod {
  private readonly BASE_URL: string
  private readonly DEFAULT_PARAMS: { format: string; api_key: string }

  constructor(BASE_URL: string, API_KEY: string) {
    this.BASE_URL = BASE_URL;
    this.DEFAULT_PARAMS = {
      api_key: API_KEY,
      format: "json"
    };
  }

  public async getFriends(params: IGetFriendsParams): Promise<IGetFriends> {
    const data = await this.lastFmRequest(params, "getFriends");

    return data as IGetFriends;
  }

  public async getInfo(params: IGetInfoParams): Promise<IGetInfo> {
    const data = await this.lastFmRequest(params, "getInfo");

    return data as IGetInfo;
  }

  public async getLovedTracks(params: IGetLovedTracksParams): Promise<IGetLovedTracks> {
    const data = await this.lastFmRequest(params, "getLovedTracks");

    return data as IGetLovedTracks;
  }

  public async getPersonalTags(params: IGetPersonalTagsParams): Promise<IGetPersonalTags> {
    const data = await this.lastFmRequest(params, "getPersonalTags");

    return data as IGetPersonalTags;
  }

  public async getRecentTracks(params: IGetRecentTracksParams): Promise<IGetRecentTracks> {
    const data = await this.lastFmRequest(params, "getRecentTracks");

    return data as IGetRecentTracks;
  }

  public async getTopAlbums(params: IGetTopAlbumsParams): Promise<IGetTopAlbums> {
    const data = await this.lastFmRequest(params, "getTopAlbums");

    return data as IGetTopAlbums;
  }

  public async getTopArtists(params: IGetTopArtistsParams): Promise<IGetTopArtists> {
    const data = await this.lastFmRequest(params, "getTopArtists");

    return data as IGetTopArtists;
  }

  public async getTopTags(params: IGetTopTagsParams): Promise<IGetTopTags> {
    const data = await this.lastFmRequest(params, "getTopTags");

    return data as IGetTopTags;
  }

  public async getTopTracks(params: IGetTopTracksParams): Promise<IGetTopTracks> {
    const data = await this.lastFmRequest(params, "getTopTracks");

    return data as IGetTopTracks;
  }

  public async getWeeklyAlbumChart(params: IGetWeeklyAlbumChartParams): Promise<IGetWeeklyAlbumChart> {
    const data = await this.lastFmRequest(params, "getWeeklyAlbumChart");

    return data as IGetWeeklyAlbumChart;
  }

  public async getWeeklyArtistChart(params: IGetWeeklyArtistChartParams): Promise<IGetWeeklyArtistChart> {
    const data = await this.lastFmRequest(params, "getWeeklyArtistChart");

    return data as IGetWeeklyArtistChart;
  }

  public async getWeeklyChartList(params: IGetWeeklyChartListParams): Promise<IGetWeeklyChartList> {
    const data = await this.lastFmRequest(params, "getWeeklyChartList");

    return data as IGetWeeklyChartList;
  }

  public async getWeeklyTrackChart(params: IGetWeeklyTrackChartParams): Promise<IGetWeeklyTrackChart> {
    const data = await this.lastFmRequest(params, "getWeeklyTrackChart");

    return data as IGetWeeklyTrackChart;
  }

  private async lastFmRequest(params: Params, method: string): Promise<Response> {
    const { data } = await axios.get(`${this.BASE_URL}/?method=user.${method}`, {
      params: { ...params, ...this.DEFAULT_PARAMS }
    });

    return data;
  }
}

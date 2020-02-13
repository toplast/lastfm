/* eslint-disable @typescript-eslint/camelcase */
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
  IUserMethod
} from "./user.interface";
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
  IUserGetWeeklyTrackChartParams
} from "./params.interface";
import axios from "axios";

type Params = IUserGetFriendsParams | IUserGetInfoParams | IUserGetLovedTracksParams | IUserGetPersonalTagsParams |
IUserGetRecentTracksParams | IUserGetTopAlbumsParams | IUserGetTopArtistsParams | IUserGetTopTagsParams |
IUserGetTopTracksParams | IUserGetWeeklyAlbumChartParams | IUserGetWeeklyArtistChartParams |
IUserGetWeeklyChartListParams | IUserGetWeeklyTrackChartParams
type Response = IUserGetFriends | IUserGetInfo | IUserGetLovedTracks | IUserGetPersonalTags | IUserGetRecentTracks |
  IUserGetTopAlbums | IUserGetTopArtists | IUserGetTopTags | IUserGetTopTracks | IUserGetWeeklyAlbumChart |
  IUserGetWeeklyArtistChart | IUserGetWeeklyChartList | IUserGetWeeklyTrackChart

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

  public async getFriends(params: IUserGetFriendsParams): Promise<IUserGetFriends> {
    const data = await this.lastFmRequest(params, "getFriends");

    return data as IUserGetFriends;
  }

  public async getInfo(params: IUserGetInfoParams): Promise<IUserGetInfo> {
    const data = await this.lastFmRequest(params, "getInfo");

    return data as IUserGetInfo;
  }

  public async getLovedTracks(params: IUserGetLovedTracksParams): Promise<IUserGetLovedTracks> {
    const data = await this.lastFmRequest(params, "getLovedTracks");

    return data as IUserGetLovedTracks;
  }

  public async getPersonalTags(params: IUserGetPersonalTagsParams): Promise<IUserGetPersonalTags> {
    const data = await this.lastFmRequest(params, "getPersonalTags");

    return data as IUserGetPersonalTags;
  }

  public async getRecentTracks(params: IUserGetRecentTracksParams): Promise<IUserGetRecentTracks> {
    const data = await this.lastFmRequest(params, "getRecentTracks");

    return data as IUserGetRecentTracks;
  }

  public async getTopAlbums(params: IUserGetTopAlbumsParams): Promise<IUserGetTopAlbums> {
    const data = await this.lastFmRequest(params, "getTopAlbums");

    return data as IUserGetTopAlbums;
  }

  public async getTopArtists(params: IUserGetTopArtistsParams): Promise<IUserGetTopArtists> {
    const data = await this.lastFmRequest(params, "getTopArtists");

    return data as IUserGetTopArtists;
  }

  public async getTopTags(params: IUserGetTopTagsParams): Promise<IUserGetTopTags> {
    const data = await this.lastFmRequest(params, "getTopTags");

    return data as IUserGetTopTags;
  }

  public async getTopTracks(params: IUserGetTopTracksParams): Promise<IUserGetTopTracks> {
    const data = await this.lastFmRequest(params, "getTopTracks");

    return data as IUserGetTopTracks;
  }

  public async getWeeklyAlbumChart(params: IUserGetWeeklyAlbumChartParams): Promise<IUserGetWeeklyAlbumChart> {
    const data = await this.lastFmRequest(params, "getWeeklyAlbumChart");

    return data as IUserGetWeeklyAlbumChart;
  }

  public async getWeeklyArtistChart(params: IUserGetWeeklyArtistChartParams): Promise<IUserGetWeeklyArtistChart> {
    const data = await this.lastFmRequest(params, "getWeeklyArtistChart");

    return data as IUserGetWeeklyArtistChart;
  }

  public async getWeeklyChartList(params: IUserGetWeeklyChartListParams): Promise<IUserGetWeeklyChartList> {
    const data = await this.lastFmRequest(params, "getWeeklyChartList");

    return data as IUserGetWeeklyChartList;
  }

  public async getWeeklyTrackChart(params: IUserGetWeeklyTrackChartParams): Promise<IUserGetWeeklyTrackChart> {
    const data = await this.lastFmRequest(params, "getWeeklyTrackChart");

    return data as IUserGetWeeklyTrackChart;
  }

  private async lastFmRequest(params: Params, method: string): Promise<Response> {
    const { data } = await axios.get(`${this.BASE_URL}/?method=user.${method}`, {
      params: { ...params, ...this.DEFAULT_PARAMS }
    });

    return data;
  }
}

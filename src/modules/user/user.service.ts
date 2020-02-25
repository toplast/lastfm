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
  IUserMethod,
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
  IUserGetWeeklyTrackChartParams,
} from "./params.interface";
import { ApiRequest } from "../request/request.service";

export class User implements IUserMethod {
  private readonly API_KEY: string;
  private readonly REQUEST: ApiRequest;

  constructor(API_KEY: string) {
    if (!API_KEY) {
      throw new Error("API key has not set");
    }

    this.REQUEST = new ApiRequest();
    this.API_KEY = API_KEY;
  }

  public async getFriends(
    params: IUserGetFriendsParams,
  ): Promise<IUserGetFriends> {
    const data = await this.REQUEST.lastFm(
      "user.getFriends",
      this.API_KEY,
      params,
    );

    return data as IUserGetFriends;
  }

  public async getInfo(params: IUserGetInfoParams): Promise<IUserGetInfo> {
    const data = await this.REQUEST.lastFm(
      "user.getInfo",
      this.API_KEY,
      params,
    );

    return data as IUserGetInfo;
  }

  public async getLovedTracks(
    params: IUserGetLovedTracksParams,
  ): Promise<IUserGetLovedTracks> {
    const data = await this.REQUEST.lastFm(
      "user.getLovedTracks",
      this.API_KEY,
      params,
    );

    return data as IUserGetLovedTracks;
  }

  public async getPersonalTags(
    params: IUserGetPersonalTagsParams,
  ): Promise<IUserGetPersonalTags> {
    const data = await this.REQUEST.lastFm(
      "user.getPersonalTags",
      this.API_KEY,
      params,
    );

    return data as IUserGetPersonalTags;
  }

  public async getRecentTracks(
    params: IUserGetRecentTracksParams,
  ): Promise<IUserGetRecentTracks> {
    const data = await this.REQUEST.lastFm(
      "user.getRecentTracks",
      this.API_KEY,
      params,
    );

    return data as IUserGetRecentTracks;
  }

  public async getTopAlbums(
    params: IUserGetTopAlbumsParams,
  ): Promise<IUserGetTopAlbums> {
    const data = await this.REQUEST.lastFm(
      "user.getTopAlbums",
      this.API_KEY,
      params,
    );

    return data as IUserGetTopAlbums;
  }

  public async getTopArtists(
    params: IUserGetTopArtistsParams,
  ): Promise<IUserGetTopArtists> {
    const data = await this.REQUEST.lastFm(
      "user.getTopArtists",
      this.API_KEY,
      params,
    );

    return data as IUserGetTopArtists;
  }

  public async getTopTags(
    params: IUserGetTopTagsParams,
  ): Promise<IUserGetTopTags> {
    const data = await this.REQUEST.lastFm(
      "user.getTopTags",
      this.API_KEY,
      params,
    );

    return data as IUserGetTopTags;
  }

  public async getTopTracks(
    params: IUserGetTopTracksParams,
  ): Promise<IUserGetTopTracks> {
    const data = await this.REQUEST.lastFm(
      "user.getTopTracks",
      this.API_KEY,
      params,
    );

    return data as IUserGetTopTracks;
  }

  public async getWeeklyAlbumChart(
    params: IUserGetWeeklyAlbumChartParams,
  ): Promise<IUserGetWeeklyAlbumChart> {
    const data = await this.REQUEST.lastFm(
      "user.getWeeklyAlbumChart",
      this.API_KEY,
      params,
    );

    return data as IUserGetWeeklyAlbumChart;
  }

  public async getWeeklyArtistChart(
    params: IUserGetWeeklyArtistChartParams,
  ): Promise<IUserGetWeeklyArtistChart> {
    const data = await this.REQUEST.lastFm(
      "user.getWeeklyArtistChart",
      this.API_KEY,
      params,
    );

    return data as IUserGetWeeklyArtistChart;
  }

  public async getWeeklyChartList(
    params: IUserGetWeeklyChartListParams,
  ): Promise<IUserGetWeeklyChartList> {
    const data = await this.REQUEST.lastFm(
      "user.getWeeklyChartList",
      this.API_KEY,
      params,
    );

    return data as IUserGetWeeklyChartList;
  }

  public async getWeeklyTrackChart(
    params: IUserGetWeeklyTrackChartParams,
  ): Promise<IUserGetWeeklyTrackChart> {
    const data = await this.REQUEST.lastFm(
      "user.getWeeklyTrackChart",
      this.API_KEY,
      params,
    );

    return data as IUserGetWeeklyTrackChart;
  }
}

/* eslint-disable @typescript-eslint/camelcase */
import {
  ITagGetInfo,
  ITagGetSimilar,
  ITagGetTopAlbums,
  ITagGetTopArtists,
  ITagGetTopTags,
  ITagGetTopTracks,
  ITagGetWeeklyChartList,
  ITagMethod
} from "./tag.interface";
import {
  ITagGetInfoParams,
  ITagGetSimilarParams,
  ITagGetTopAlbumsParams,
  ITagGetTopArtistsParams,
  ITagGetTopTracksParams,
  ITagGetWeeklyChartListParams
} from "./params.interface";
import { ApiRequest } from "../request/request.service";

export class Tag implements ITagMethod {
  private readonly API_KEY: string
  private readonly REQUEST: ApiRequest

  constructor(API_KEY: string) {
    if (!API_KEY) {
      throw new Error("API key has not set");
    }

    this.REQUEST = new ApiRequest();
    this.API_KEY = API_KEY;
  }

  public async getInfo(params: ITagGetInfoParams): Promise<ITagGetInfo> {
    const data = await this.REQUEST.lastFm("tag.getInfo", this.API_KEY, params);

    return data as ITagGetInfo;
  }

  public async getSimilar(params: ITagGetSimilarParams): Promise<ITagGetSimilar> {
    const data = await this.REQUEST.lastFm("tag.getSimilar", this.API_KEY, params);

    return data as ITagGetSimilar;
  }

  public async getTopAlbums(params: ITagGetTopAlbumsParams): Promise<ITagGetTopAlbums> {
    const data = await this.REQUEST.lastFm("tag.getTopAlbums", this.API_KEY, params);

    return data as ITagGetTopAlbums;
  }

  public async getTopArtists(params: ITagGetTopArtistsParams): Promise<ITagGetTopArtists> {
    const data = await this.REQUEST.lastFm("tag.getTopArtists", this.API_KEY, params);

    return data as ITagGetTopArtists;
  }

  public async getTopTags(): Promise<ITagGetTopTags> {
    const data = await this.REQUEST.lastFm("tag.getTopTags", this.API_KEY);

    return data as ITagGetTopTags;
  }

  public async getTopTracks(params: ITagGetTopTracksParams): Promise<ITagGetTopTracks> {
    const data = await this.REQUEST.lastFm("tag.getTopTracks", this.API_KEY, params);

    return data as ITagGetTopTracks;
  }

  public async getWeeklyChartList(params: ITagGetWeeklyChartListParams): Promise<ITagGetWeeklyChartList> {
    const data = await this.REQUEST.lastFm("tag.getWeeklyChartList", this.API_KEY, params);

    return data as ITagGetWeeklyChartList;
  }
}

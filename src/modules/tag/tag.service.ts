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
import axios from "axios";

type Params = ITagGetInfoParams | ITagGetSimilarParams | ITagGetTopAlbumsParams |
  ITagGetTopArtistsParams | ITagGetTopTracksParams | ITagGetWeeklyChartListParams
type Response = ITagGetInfo | ITagGetSimilar | ITagGetTopAlbums | ITagGetTopArtists |
  ITagGetTopTags | ITagGetTopTracks | ITagGetWeeklyChartList

export class Tag implements ITagMethod {
  private readonly BASE_URL: string
  private readonly DEFAULT_PARAMS: { format: string; api_key: string }

  constructor(BASE_URL: string, API_KEY: string) {
    this.BASE_URL = BASE_URL;
    this.DEFAULT_PARAMS = {
      api_key: API_KEY,
      format: "json"
    };
  }

  public async getInfo(params: ITagGetInfoParams): Promise<ITagGetInfo> {
    const data = await this.lastFmRequest(params, "getInfo");

    return data as ITagGetInfo;
  }

  public async getSimilar(params: ITagGetSimilarParams): Promise<ITagGetSimilar> {
    const data = await this.lastFmRequest(params, "getSimilar");

    return data as ITagGetSimilar;
  }

  public async getTopAlbums(params: ITagGetTopAlbumsParams): Promise<ITagGetTopAlbums> {
    const data = await this.lastFmRequest(params, "getTopAlbums");

    return data as ITagGetTopAlbums;
  }

  public async getTopArtists(params: ITagGetTopArtistsParams): Promise<ITagGetTopArtists> {
    const data = await this.lastFmRequest(params, "getTopArtists");

    return data as ITagGetTopArtists;
  }

  public async getTopTags(): Promise<ITagGetTopTags> {
    const data = await this.lastFmRequest(undefined, "getTopTags");

    return data as ITagGetTopTags;
  }

  public async getTopTracks(params: ITagGetTopTracksParams): Promise<ITagGetTopTracks> {
    const data = await this.lastFmRequest(params, "getTopTracks");

    return data as ITagGetTopTracks;
  }

  public async getWeeklyChartList(params: ITagGetWeeklyChartListParams): Promise<ITagGetWeeklyChartList> {
    const data = await this.lastFmRequest(params, "getWeeklyChartList");

    return data as ITagGetWeeklyChartList;
  }

  private async lastFmRequest(params: Params, method: string): Promise<Response> {
    const { data } = await axios.get(`${this.BASE_URL}/?method=tag.${method}`, {
      params: { ...params, ...this.DEFAULT_PARAMS }
    });

    return data;
  }
}

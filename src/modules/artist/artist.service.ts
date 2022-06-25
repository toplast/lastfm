/* eslint-disable @typescript-eslint/camelcase */
import {
  IArtistGetInfo,
  IArtistGetTopAlbums,
  IArtistGetTopTags,
  IArtistMethod,
} from "./artist.interface";
import {
  TArtistGetInfoParams,
  TArtistGetTopAlbumsParams,
  TArtistGetTopTagsParams,
} from "./params.interface";
import { ApiRequest } from "../request/request.service";

export class Artist implements IArtistMethod {
  private readonly API_KEY: string;
  private readonly REQUEST: ApiRequest;

  constructor(API_KEY: string) {
    if (!API_KEY) {
      throw new Error("API key has not set");
    }

    this.REQUEST = new ApiRequest();
    this.API_KEY = API_KEY;
  }
  public async getInfo(params: TArtistGetInfoParams): Promise<IArtistGetInfo> {
    const data = await this.REQUEST.lastFm(
      "artist.getInfo",
      this.API_KEY,
      params,
    );

    return data as IArtistGetInfo;
  }

  public async getTopAlbums(
    params: TArtistGetTopAlbumsParams,
  ): Promise<IArtistGetTopAlbums> {
    const data = await this.REQUEST.lastFm(
      "artist.getTopAlbums",
      this.API_KEY,
      params,
    );

    return data as IArtistGetTopAlbums;
  }

  public async getTopTags(
    params: TArtistGetTopTagsParams,
  ): Promise<IArtistGetTopTags> {
    const data = await this.REQUEST.lastFm(
      "artist.getTopTags",
      this.API_KEY,
      params,
    );

    return data as IArtistGetTopTags;
  }
}

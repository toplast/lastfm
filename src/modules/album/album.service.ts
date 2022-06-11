/* eslint-disable @typescript-eslint/camelcase */
import {
  IAlbumGetInfo,
  IAlbumGetTopTags,
  IAlbumMethod,
} from "./album.interface";
import {
  TAlbumGetInfoParams,
  TAlbumGetTopTagsParams,
} from "./params.interface";
import { ApiRequest } from "../request/request.service";
import NotSupported from "../error/error.notsupported";

export class Album implements IAlbumMethod {
  private readonly API_KEY: string;
  private readonly REQUEST: ApiRequest;

  constructor(API_KEY: string) {
    if (!API_KEY) {
      throw new Error("API key has not set");
    }

    this.REQUEST = new ApiRequest();
    this.API_KEY = API_KEY;
  }
  public async getInfo(params: TAlbumGetInfoParams): Promise<IAlbumGetInfo> {
    const data = await this.REQUEST.lastFm(
      "album.getInfo",
      this.API_KEY,
      params,
    );

    return data as IAlbumGetInfo;
  }

  public async getTopTags(
    params: TAlbumGetTopTagsParams,
  ): Promise<IAlbumGetTopTags> {
    if (params.mbid) {
      throw new NotSupported();
    }

    const data = await this.REQUEST.lastFm(
      "album.getTopTags",
      this.API_KEY,
      params,
    );

    return data as IAlbumGetTopTags;
  }
}

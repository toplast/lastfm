/* eslint-disable @typescript-eslint/camelcase */
import {
  ITrackGetInfo,
  ITrackGetTopTags,
  ITrackMethod,
} from "./track.interface";
import {
  TTrackGetInfoParams,
  TTrackGetTopTagsParams,
} from "./params.interface";
import { ApiRequest } from "../request/request.service";
import NotSupported from "../error/error.notsupported";

export class Track implements ITrackMethod {
  private readonly API_KEY: string;
  private readonly REQUEST: ApiRequest;

  constructor(API_KEY: string) {
    if (!API_KEY) {
      throw new Error("API key has not set");
    }

    this.REQUEST = new ApiRequest();
    this.API_KEY = API_KEY;
  }
  public async getInfo(params: TTrackGetInfoParams): Promise<ITrackGetInfo> {
    const data = await this.REQUEST.lastFm(
      "track.getInfo",
      this.API_KEY,
      params,
    );

    return data as ITrackGetInfo;
  }

  public async getTopTags(
    params: TTrackGetTopTagsParams,
  ): Promise<ITrackGetTopTags> {
    if (params.mbid) {
      throw new NotSupported();
    }

    const data = await this.REQUEST.lastFm(
      "track.getTopTags",
      this.API_KEY,
      params,
    );

    return data as ITrackGetTopTags;
  }
}

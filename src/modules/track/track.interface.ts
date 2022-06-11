import {
  IGetInfoCore,
  IGetInfoTags,
} from "../../common/common.getinfo.interface";
import { IImage, IStreamable } from "../../common/common.interface";
import {
  TTrackGetInfoParams,
  TTrackGetTopTagsParams,
} from "./params.interface";
import { ITopTagsTag } from "../../common/common.toptags.interface";

export interface ITrackMethod {
  getInfo(params: TTrackGetInfoParams): Promise<ITrackGetInfo>;
  getTopTags(params: TTrackGetTopTagsParams): Promise<ITrackGetTopTags>;
}

export interface ITrackGetInfo {
  track: IGetInfoCore & {
    album: ITrackGetInfoAlbum;
    artist: IGetInfoCore;
    duration?: string;
    listeners?: string;
    playcount?: string;
    streamable: IStreamable | string;
    toptags: IGetInfoTags;
    userplaycount?: string;
    userloved?: string;
    wiki?: {
      published?: string;
      summary?: string;
      content?: string;
    };
  };
}

interface ITrackGetInfoAlbum {
  title: string;
  mbid?: string;
  url: string;
  artist?: string;
  image: IImage[];
  "@attr"?: {
    position: string;
  };
}

export interface ITrackGetTopTags {
  toptags: {
    tag: ITopTagsTag[];
    "@attr": {
      artist: string;
      track: string;
    };
  };
}

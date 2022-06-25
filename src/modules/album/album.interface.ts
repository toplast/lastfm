import {
  IGetInfoCore,
  IGetInfoTags,
} from "../../common/common.getinfo.interface";
import { IImage, IStreamable } from "../../common/common.interface";
import {
  TAlbumGetInfoParams,
  TAlbumGetTopTagsParams,
} from "./params.interface";
import { ITopTagsTag } from "../../common/common.toptags.interface";

export interface IAlbumMethod {
  getInfo(params: TAlbumGetInfoParams): Promise<IAlbumGetInfo>;
  getTopTags(params: TAlbumGetTopTagsParams): Promise<IAlbumGetTopTags>;
}

export interface IAlbumGetInfo {
  album: IGetInfoCore & {
    image: IImage[];
    artist: string;
    listeners?: string;
    playcount?: string;
    tags: IGetInfoTags;
    tracks: {
      track: IAlbumGetInfoTrack[] | IAlbumGetInfoTrack;
    };
    userplaycount?: number;
    wiki?: {
      published?: string;
      summary?: string;
      content?: string;
    };
  };
}

interface IAlbumGetInfoTrack {
  name: string;
  url?: string;

  artist: IGetInfoCore;
  "@attr": { rank: number };
  duration: number | null;
  streamable: IStreamable | string;
}

export interface IAlbumGetTopTags {
  toptags: {
    tag: ITopTagsTag[];
    "@attr": {
      artist: string;
      album: string;
    };
  };
}

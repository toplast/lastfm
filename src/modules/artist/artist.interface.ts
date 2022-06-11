import { IAttr, IImage, ILink } from "../../common/common.interface";
import {
  IGetInfoCore,
  IGetInfoTags,
} from "../../common/common.getinfo.interface";
import {
  TArtistGetInfoParams,
  TArtistGetTopAlbumsParams,
  TArtistGetTopTagsParams,
} from "./params.interface";
import { ITopTagsTag } from "../../common/common.toptags.interface";

export interface IArtistMethod {
  getInfo(params: TArtistGetInfoParams): Promise<IArtistGetInfo>;
  getTopTags(params: TArtistGetTopTagsParams): Promise<IArtistGetTopTags>;
  getTopAlbums(params: TArtistGetTopAlbumsParams): Promise<IArtistGetTopAlbums>;
}

export interface IArtistGetInfo {
  artist: IGetInfoCore & {
    bio?: {
      links?: {
        link?: ILink;
      };
      published?: string;
      summary?: string;
      content?: string;
    };
    ontour?: string;
    similar: {
      artist: IArtistGetInfoSimilarArtist[];
    };
    stats?: {
      listeners?: string;
      playcount?: string;
      userplaycount?: string;
    };
    streamable?: string;
    tags: IGetInfoTags;
  };
}

interface IArtistGetInfoSimilarArtist {
  name: string;
  url?: string;
  image?: IImage[];
}

export interface IArtistGetTopAlbums {
  topalbums: {
    album: IArtistGetTopAlbumsAlbum[];
    "@attr": IAttr;
  };
}

interface IArtistGetTopAlbumsAlbum {
  name: string;
  mbid?: string;
  url?: string;
  image?: IImage[];

  artist: {
    name: string;
    mbid?: string;
    url?: string;
  };
  playcount?: number;
}

export interface IArtistGetTopTags {
  toptags: {
    tag: ITopTagsTag[];
    "@attr": {
      artist: string;
    };
  };
}

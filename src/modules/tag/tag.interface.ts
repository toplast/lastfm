import {
  ITagGetInfoParams,
  ITagGetSimilarParams,
  ITagGetTopAlbumsParams,
  ITagGetTopArtistsParams,
  ITagGetTopTracksParams,
  ITagGetWeeklyChartListParams
} from "./params.interface";
import { IImage } from "../common/common.interface";

export interface ITagMethod {
  getInfo(params: ITagGetInfoParams): Promise<ITagGetInfo>;
  getSimilar(params: ITagGetSimilarParams): Promise<ITagGetSimilar>;
  getTopAlbums(params: ITagGetTopAlbumsParams): Promise<ITagGetTopAlbums>;
  getTopArtists(params: ITagGetTopArtistsParams): Promise<ITagGetTopArtists>;
  getTopTags(): Promise<ITagGetTopTags>;
  getTopTracks(params: ITagGetTopTracksParams): Promise<ITagGetTopTracks>;
  getWeeklyChartList(params: ITagGetWeeklyChartListParams): Promise<ITagGetWeeklyChartList>;
}

export interface ITagGetInfo {
  tag: {
    name: string;
    total: number;
    reach: number;
    wiki: {
      summary: string;
      content: string;
    };
  };
}

export interface ITagGetSimilar {
  similartags: {
    tag: {
      name: string;
      url: string;
      streamble: string;
    }[];
    "@attr": {
      tag: string;
    };
  };
}

export interface ITagGetTopAlbums {
  albums: {
    album: {
      name: string;
      mbid: string;
      url: string;
      artist: {
        name: string;
        mbid: string;
        url: string;
      };
      image: IImage[];
      "@attr": { rank: string };
    }[];
    "@attr": {
      tag: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export interface ITagGetTopArtists {
  topartists: {
    artist: {
      name: string;
      mbid: string;
      url: string;
      streamable: string;
      image: IImage[];
      "@attr": {
        rank: string;
      };
    }[];
    "@attr": {
      tag: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export interface ITagGetTopTags {
  toptags: {
    "@attr": {
      offset: number;
      num_res: number;
      total: number;
    };
    tag: {
      name: string;
      count: number;
      reach: number;
    }[];
  };
}

export interface ITagGetTopTracks {
  tracks: {
    track: {
      name: string;
      duration: string;
      mbid: string;
      url: string;
      streamable: {
        "#text": string;
        fulltrack: string;
      };
      artist: {
        name: string;
        mbid: string;
        url: string;
      };
      image: IImage[];
      "@attr": {
        rank: string;
      };
    }[];
    "@attr": {
      tag: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export interface ITagGetWeeklyChartList {
  weeklychartlist: {
    chart: {
      "#text": string;
      from: string;
      to: string;
    }[];
    "@attr": {
      tag: string;
    };
  };
}

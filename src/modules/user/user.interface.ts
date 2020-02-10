import { IAlbum, IArtist, IAttr, IChart, ITag, ITrack, IUser } from "../common/common.interface";
import {
  IGetFriendsParams,
  IGetInfoParams,
  IGetLovedTracksParams,
  IGetPersonalTagsParams,
  IGetRecentTracksParams,
  IGetTopAlbumsParams,
  IGetTopArtistsParams,
  IGetTopTagsParams,
  IGetTopTracksParams,
  IGetWeeklyAlbumChartParams,
  IGetWeeklyArtistChartParams,
  IGetWeeklyChartListParams,
  IGetWeeklyTrackChartParams
} from "./params.interface";

export interface IUserMethod {
  getFriends(params: IGetFriendsParams): Promise<IGetFriends>;
  getInfo(params: IGetInfoParams): Promise<IGetInfo>;
  getLovedTracks(params: IGetLovedTracksParams): Promise<IGetLovedTracks>;
  getPersonalTags(params: IGetPersonalTagsParams): Promise<IGetPersonalTags>;
  getRecentTracks(params: IGetRecentTracksParams): Promise<IGetRecentTracks>;
  getTopAlbums(params: IGetTopAlbumsParams): Promise<IGetTopAlbums>;
  getTopArtists(params: IGetTopArtistsParams): Promise<IGetTopArtists>;
  getTopTags(params: IGetTopTagsParams): Promise<IGetTopTags>;
  getTopTracks(params: IGetTopTracksParams): Promise<IGetTopTracks>;
  getWeeklyAlbumChart(params: IGetWeeklyAlbumChartParams): Promise<IGetWeeklyAlbumChart>;
  getWeeklyArtistChart(params: IGetWeeklyArtistChartParams): Promise<IGetWeeklyArtistChart>;
  getWeeklyChartList(params: IGetWeeklyChartListParams): Promise<IGetWeeklyChartList>;
  getWeeklyTrackChart(params: IGetWeeklyTrackChartParams): Promise<IGetWeeklyTrackChart>;
}

export interface IGetFriends {
  friends: {
    user: IUser[];
    "@attr": IAttr;
  };
}

export interface IGetInfo {
  user: IUser;
}

export interface IGetLovedTracks {
  lovedtracks: {
    track: ITrack[];
    "@attr": IAttr;
  };
}

export interface IGetPersonalTags {
  taggings: {
    albums?: {
      album: IAlbum[];
    };
    artists?: {
      artist: IArtist[];
    };
    tracks?: {
      track: ITrack[];
    };
    "@attr": IAttr;
  };
}

export interface IGetRecentTracks {
  recenttracks: {
    track: ITrack[];
    "@attr": IAttr;
  };
}

export interface IGetTopAlbums {
  topalbums: {
    album: IAlbum[];
    "@attr": IAttr;
  };
}

export interface IGetTopArtists {
  topartists: {
    artist: IArtist[];
    "@attr": IAttr;
  };
}

export interface IGetTopTags {
  toptags: {
    tag: ITag[];
    "@attr": IAttr;
  };
}

export interface IGetTopTracks {
  toptracks: {
    track: ITrack[];
    "@attr": IAttr;
  };
}

export interface IGetWeeklyAlbumChart {
  weeklyalbumchart: {
    album: IAlbum[];
    "@attr": IAttr;
  };
}

export interface IGetWeeklyArtistChart {
  weeklyartistchart: {
    artist: IArtist[];
    "@attr": IAttr;
  };
}

export interface IGetWeeklyChartList {
  weeklychartlist: {
    chart: IChart[];
    "@attr": IAttr;
  };
}

export interface IGetWeeklyTrackChart {
  weeklytrackchart: {
    track: ITrack[];
    "@attr": IAttr;
  };
}

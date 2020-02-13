import { IAlbum, IArtist, IAttr, IChart, ITag, ITrack, IUser } from "../common/common.interface";
import {
  IUserGetFriendsParams,
  IUserGetInfoParams,
  IUserGetLovedTracksParams,
  IUserGetPersonalTagsParams,
  IUserGetRecentTracksParams,
  IUserGetTopAlbumsParams,
  IUserGetTopArtistsParams,
  IUserGetTopTagsParams,
  IUserGetTopTracksParams,
  IUserGetWeeklyAlbumChartParams,
  IUserGetWeeklyArtistChartParams,
  IUserGetWeeklyChartListParams,
  IUserGetWeeklyTrackChartParams
} from "./params.interface";

export interface IUserMethod {
  getFriends(params: IUserGetFriendsParams): Promise<IUserGetFriends>;
  getInfo(params: IUserGetInfoParams): Promise<IUserGetInfo>;
  getLovedTracks(params: IUserGetLovedTracksParams): Promise<IUserGetLovedTracks>;
  getPersonalTags(params: IUserGetPersonalTagsParams): Promise<IUserGetPersonalTags>;
  getRecentTracks(params: IUserGetRecentTracksParams): Promise<IUserGetRecentTracks>;
  getTopAlbums(params: IUserGetTopAlbumsParams): Promise<IUserGetTopAlbums>;
  getTopArtists(params: IUserGetTopArtistsParams): Promise<IUserGetTopArtists>;
  getTopTags(params: IUserGetTopTagsParams): Promise<IUserGetTopTags>;
  getTopTracks(params: IUserGetTopTracksParams): Promise<IUserGetTopTracks>;
  getWeeklyAlbumChart(params: IUserGetWeeklyAlbumChartParams): Promise<IUserGetWeeklyAlbumChart>;
  getWeeklyArtistChart(params: IUserGetWeeklyArtistChartParams): Promise<IUserGetWeeklyArtistChart>;
  getWeeklyChartList(params: IUserGetWeeklyChartListParams): Promise<IUserGetWeeklyChartList>;
  getWeeklyTrackChart(params: IUserGetWeeklyTrackChartParams): Promise<IUserGetWeeklyTrackChart>;
}

export interface IUserGetFriends {
  friends: {
    user: IUser[];
    "@attr": IAttr;
  };
}

export interface IUserGetInfo {
  user: IUser;
}

export interface IUserGetLovedTracks {
  lovedtracks: {
    track: ITrack[];
    "@attr": IAttr;
  };
}

export interface IUserGetPersonalTags {
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

export interface IUserGetRecentTracks {
  recenttracks: {
    track: ITrack[];
    "@attr": IAttr;
  };
}

export interface IUserGetTopAlbums {
  topalbums: {
    album: IAlbum[];
    "@attr": IAttr;
  };
}

export interface IUserGetTopArtists {
  topartists: {
    artist: IArtist[];
    "@attr": IAttr;
  };
}

export interface IUserGetTopTags {
  toptags: {
    tag: ITag[];
    "@attr": IAttr;
  };
}

export interface IUserGetTopTracks {
  toptracks: {
    track: ITrack[];
    "@attr": IAttr;
  };
}

export interface IUserGetWeeklyAlbumChart {
  weeklyalbumchart: {
    album: IAlbum[];
    "@attr": IAttr;
  };
}

export interface IUserGetWeeklyArtistChart {
  weeklyartistchart: {
    artist: IArtist[];
    "@attr": IAttr;
  };
}

export interface IUserGetWeeklyChartList {
  weeklychartlist: {
    chart: IChart[];
    "@attr": IAttr;
  };
}

export interface IUserGetWeeklyTrackChart {
  weeklytrackchart: {
    track: ITrack[];
    "@attr": IAttr;
  };
}

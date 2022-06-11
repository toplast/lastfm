export interface IAttr {
  from?: string;
  page?: string;
  perPage?: string;
  rank?: string;
  tag?: string;
  to?: string;
  total?: string;
  totalPages?: string;
  user?: string;
}

export interface IUser {
  age?: string;
  bootstrap: string;
  country: string;
  gender?: string;
  image: IImage[];
  name: string;
  playcount: string;
  playlists: string;
  realname: string;
  registered: IRegistered;
  subscriber: string;
  type: string;
  url: string;
}

export interface ITrack {
  artist: IArtist;
  date?: IDate;
  duration?: string;
  image: IImage[];
  mbid: string;
  name: string;
  playcount?: string;
  streamable: IStreamable | string;
  url: string;
}

export interface IArtist {
  image?: IImage[];
  mbid: string;
  name?: string;
  playcount?: string;
  streamable?: string;
  url?: string;
  "@attr"?: string;
  "#text"?: string;
}

export interface IAlbum {
  artist?: IArtist;
  image?: IImage[];
  mbid: string;
  name?: string;
  playcount?: string;
  url?: string;
  "@attr"?: IAttr;
  "#text"?: string;
}

export interface ITag {
  name: string;
  count: string;
  url: string;
}

export interface IChart {
  from: string;
  to: string;
  "#text": string;
}

export interface IStreamable {
  fulltrack: string;
  "#text": string;
}

interface IDate {
  uts: string;
  "#text": string;
}

export interface IImage {
  size: "small" | "medium" | "large" | "extralarge" | "mega" | "";
  "#text": string;
}

export interface ILink {
  rel: string;
  href: string;
  "#text": string;
}

interface IRegistered {
  unixtime: string;
  "#text": string;
}

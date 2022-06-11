export interface IGetInfoTags {
  tag:
    | {
        name: string;
        url: string;
      }[]
    | "";
}

export interface IGetInfoCore {
  name: string;
  mbid?: string;
  url: string;
}

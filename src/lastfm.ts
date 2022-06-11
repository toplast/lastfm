import { Album } from "./modules/album/album.service";
import { Tag } from "./modules/tag/tag.service";
import { User } from "./modules/user/user.service";

export default class LastFm {
  private readonly API_KEY: string;
  public readonly album: Album;
  public readonly tag: Tag;
  public readonly user: User;

  constructor(API_KEY: string) {
    if (!API_KEY) {
      throw new Error("API key has not set");
    }

    this.API_KEY = API_KEY;
    this.album = new Album(this.API_KEY);
    this.tag = new Tag(this.API_KEY);
    this.user = new User(this.API_KEY);
  }
}

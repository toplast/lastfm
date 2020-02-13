import { Tag } from "./modules/tag/tag.service";
import { User } from "./modules/user/user.service";

export class LastFm {
  public readonly user: User
  public readonly tag: Tag
  private readonly BASE_URL = "http://ws.audioscrobbler.com/2.0";

  constructor(API_KEY: string) {

    this.user = new User(this.BASE_URL, API_KEY);
    this.tag = new Tag(this.BASE_URL, API_KEY);
  }
}

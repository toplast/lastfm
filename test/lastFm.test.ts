/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LastFm } from "../src/lastfm";

describe("Last.fm tests", () => {
  describe("Constructor tests", () => {
    it("Should set API_KEY", () => {
      const lastFm = new LastFm("SOME_NICE_API_KEY");

      expect((lastFm as any).API_KEY).toEqual("SOME_NICE_API_KEY");
    });

    it("Should throws error if API_KEY is not set", () => {
      // @ts-ignore
      expect(() => new LastFm()).toThrowError(new Error("API key has not set"));
    });
  });
});

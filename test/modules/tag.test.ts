/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import { Tag } from "../../src/modules/tag/tag.service";

describe("Tag tests", () => {
  describe("Constructor tests", () => {
    it("Should set API_KEY", () => {
      const tagService = new Tag("SOME_NICE_API_KEY");

      expect((tagService as any).API_KEY).toEqual("SOME_NICE_API_KEY");
    });

    it("Should throws error if API_KEY is not set", () => {
      // @ts-ignore
      expect(() => new Tag()).toThrowError(new Error("API key has not set"));
    });
  });
});

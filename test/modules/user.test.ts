/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import { User } from "../../src/modules/user/user.service";

describe("User tests", () => {
  describe("Constructor tests", () => {
    it("Should set API_KEY", () => {
      const userService = new User("SOME_NICE_API_KEY");

      expect((userService as any).API_KEY).toEqual("SOME_NICE_API_KEY");
    });

    it("Should throws error if API_KEY is not set", () => {
      // @ts-ignore
      expect(() => new User()).toThrowError(new Error("API key has not set"));
    });
  });
});

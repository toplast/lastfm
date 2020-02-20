/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */

import { Tag } from "../../src/modules/tag/tag.service";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

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

  describe("Methods tests", () => {
    let tagService: Tag;

    beforeAll(() => {
      tagService = new Tag("SOME_NICE_API_KEY");
    });

    describe("Params tests", () => {
      const defaultParams = { api_key: "SOME_NICE_API_KEY", format: "json" };

      beforeEach(() => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: {} }));
      });

      it("Should call getInformation with the right params", async () => {
        await tagService.getInfo({ tag: "disco", lang: "pt" });

        expect(mockedAxios.get).toHaveBeenCalledWith("/2.0", {
          params: {
            method: "tag.getInfo",
            tag: "disco",
            lang: "pt",
            ...defaultParams
          }
        });
      });

      it("Should call getSimilar with the right params", async () => {
        await tagService.getSimilar({ tag: "disco" });

        expect(mockedAxios.get).toHaveBeenCalledWith("/2.0", {
          params: {
            method: "tag.getSimilar",
            tag: "disco",
            ...defaultParams
          }
        });
      });

      it("Should call getTopAlbums with the right params", async () => {
        await tagService.getTopAlbums({ tag: "disco", limit: "5", page: 1 });

        expect(mockedAxios.get).toHaveBeenCalledWith("/2.0", {
          params: {
            method: "tag.getTopAlbums",
            tag: "disco",
            limit: "5",
            page: 1,
            ...defaultParams
          }
        });
      });

      it("Should call getTopArtists with the right params", async () => {
        await tagService.getTopArtists({ tag: "disco", limit: "5", page: 1 });

        expect(mockedAxios.get).toHaveBeenCalledWith("/2.0", {
          params: {
            method: "tag.getTopArtists",
            tag: "disco",
            limit: "5",
            page: 1,
            ...defaultParams
          }
        });
      });

      it("Should call getTopTags with the right params", async () => {
        await tagService.getTopTags();

        expect(mockedAxios.get).toHaveBeenCalledWith("/2.0", {
          params: {
            method: "tag.getTopTags",
            ...defaultParams
          }
        });
      });

      it("Should call getTopTracks with the right params", async () => {
        await tagService.getTopTracks({ tag: "disco", limit: "5", page: 1 });

        expect(mockedAxios.get).toHaveBeenCalledWith("/2.0", {
          params: {
            method: "tag.getTopTracks",
            tag: "disco",
            limit: "5",
            page: 1,
            ...defaultParams
          }
        });
      });

      it("Should call getWeeklyChartList with the right params", async () => {
        await tagService.getWeeklyChartList({ tag: "disco" });

        expect(mockedAxios.get).toHaveBeenCalledWith("/2.0", {
          params: {
            method: "tag.getWeeklyChartList",
            tag: "disco",
            ...defaultParams
          }
        });
      });
    });
  });
});

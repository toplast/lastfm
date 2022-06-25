/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import { Artist } from "../../src/modules/artist/artist.service";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Artist tests", () => {
  const mockApiKey = "SOME_NICE_API_KEY";
  let artistService: Artist;

  describe("With an API key", () => {
    beforeEach(() => (artistService = new Artist(mockApiKey)));

    describe("Constructor tests", () => {
      it("Should set API_KEY", () => {
        expect((artistService as any).API_KEY).toEqual(mockApiKey);
      });
    });

    describe("Methods tests", () => {
      describe("Params tests", () => {
        const defaultParams = { api_key: mockApiKey, format: "json" };

        beforeEach(() => {
          mockedAxios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: {} }),
          );
        });

        describe("getInfo", () => {
          it("Should call artist.getInfo with the right named based params", async () => {
            await artistService.getInfo({
              artist: "God Is An Astronaut",
            });

            expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
              params: {
                method: "artist.getInfo",
                artist: "God Is An Astronaut",
                ...defaultParams,
              },
            });
          });

          it("Should call artist.getInfo with the right mbid based params", async () => {
            await artistService.getInfo({
              mbid: "e9dfc148-d5f6-425e-b80b-f99ed2bd7c09",
            });

            expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
              params: {
                method: "artist.getInfo",
                mbid: "e9dfc148-d5f6-425e-b80b-f99ed2bd7c09",
                ...defaultParams,
              },
            });
          });
        });

        describe("getTopAlbums", () => {
          it("Should call artist.getTopAlbums with the right named based params", async () => {
            await artistService.getTopAlbums({
              artist: "God Is An Astronaut",
            });

            expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
              params: {
                method: "artist.getTopAlbums",
                artist: "God Is An Astronaut",
                ...defaultParams,
              },
            });
          });

          it("Should call artist.getTopAlbums with the right mbid based params", async () => {
            await artistService.getTopAlbums({
              mbid: "e9dfc148-d5f6-425e-b80b-f99ed2bd7c09",
            });

            expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
              params: {
                method: "artist.getTopAlbums",
                mbid: "e9dfc148-d5f6-425e-b80b-f99ed2bd7c09",
                ...defaultParams,
              },
            });
          });
        });

        describe("getTopTags", () => {
          it("Should call artist.getTopTags with the right named based params", async () => {
            await artistService.getTopTags({
              artist: "God Is An Astronaut",
            });

            expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
              params: {
                method: "artist.getTopTags",
                artist: "God Is An Astronaut",
                ...defaultParams,
              },
            });
          });

          it("Should call artist.getTopTags with the right mbid based params", async () => {
            await artistService.getTopTags({
              mbid: "e9dfc148-d5f6-425e-b80b-f99ed2bd7c09",
            });

            expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
              params: {
                method: "artist.getTopTags",
                mbid: "e9dfc148-d5f6-425e-b80b-f99ed2bd7c09",
                ...defaultParams,
              },
            });
          });
        });
      });
    });
  });

  describe("Without an API key", () => {
    describe("Constructor tests", () => {
      it("Should throw an error", () => {
        // @ts-ignore
        expect(() => new Artist()).toThrowError(
          new Error("API key has not set"),
        );
      });
    });
  });
});

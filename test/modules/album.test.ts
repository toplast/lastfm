/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import { Album } from "../../src/modules/album/album.service";
import NotSupported from "../../src/modules/error/error.notsupported";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Album tests", () => {
  const mockApiKey = "SOME_NICE_API_KEY";
  let albumService: Album;

  describe("With an API key", () => {
    beforeEach(() => (albumService = new Album(mockApiKey)));

    describe("Constructor tests", () => {
      it("Should set API_KEY", () => {
        expect((albumService as any).API_KEY).toEqual(mockApiKey);
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
          it("Should call album.getInfo with the right name based params", async () => {
            await albumService.getInfo({
              artist: "God Is An Astronaut",
              album: "Age of the Fifth Sun",
            });

            expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
              params: {
                method: "album.getInfo",
                artist: "God Is An Astronaut",
                album: "Age of the Fifth Sun",
                ...defaultParams,
              },
            });
          });

          it("Should call album.getInfo with the right mbid based params", async () => {
            await albumService.getInfo({
              mbid: "a36ab113-612d-4e2d-92f0-47ffda893f6a",
            });

            expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
              params: {
                method: "album.getInfo",
                mbid: "a36ab113-612d-4e2d-92f0-47ffda893f6a",
                ...defaultParams,
              },
            });
          });
        });

        describe("getTopTags", () => {
          it("Should call album.getTopTags with the right name based params", async () => {
            await albumService.getTopTags({
              artist: "God Is An Astronaut",
              album: "Age of the Fifth Sun",
            });

            expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
              params: {
                method: "album.getTopTags",
                artist: "God Is An Astronaut",
                album: "Age of the Fifth Sun",
                ...defaultParams,
              },
            });
          });

          it("Should throw a not supported error for mbid requests to album.getTopTags (although the LastFM docs claim to support it, this does not work.)", async () => {
            await expect(
              albumService.getTopTags({
                mbid: "a36ab113-612d-4e2d-92f0-47ffda893f6a",
              }),
            ).rejects.toThrowError(new NotSupported());
          });
        });
      });
    });
  });

  describe("Without an API key", () => {
    describe("Constructor tests", () => {
      it("Should throw an error", () => {
        // @ts-ignore
        expect(() => new Album()).toThrowError(
          new Error("API key has not set"),
        );
      });
    });
  });
});

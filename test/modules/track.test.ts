/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import NotSupported from "../../src/modules/error/error.notsupported";
import { Track } from "../../src/modules/track/track.service";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Track tests", () => {
  const mockApiKey = "SOME_NICE_API_KEY";
  let trackService: Track;

  describe("With an API key", () => {
    beforeEach(() => (trackService = new Track(mockApiKey)));

    describe("Constructor tests", () => {
      it("Should set API_KEY", () => {
        expect((trackService as any).API_KEY).toEqual(mockApiKey);
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
          it("Should call track.getInfo with the right name based params", async () => {
            await trackService.getInfo({
              artist: "God Is An Astronaut",
              track: "Sunrise in Aries",
            });

            expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
              params: {
                method: "track.getInfo",
                artist: "God Is An Astronaut",
                track: "Sunrise in Aries",
                ...defaultParams,
              },
            });
          });

          it("Should call track.getInfo with the right mbid based params", async () => {
            await trackService.getInfo({
              mbid: "134010da-9200-4c25-84c3-578626feb2e9",
            });

            expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
              params: {
                method: "track.getInfo",
                mbid: "134010da-9200-4c25-84c3-578626feb2e9",
                ...defaultParams,
              },
            });
          });
        });

        describe("getTopTags", () => {
          it("Should call track.getTopTags with the right params", async () => {
            await trackService.getTopTags({
              artist: "God Is An Astronaut",
              track: "Sunrise in Aries",
            });

            expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
              params: {
                method: "track.getTopTags",
                artist: "God Is An Astronaut",
                track: "Sunrise in Aries",
                ...defaultParams,
              },
            });
          });

          it("Should throw a not supported error for mbid requests to track.getTopTags (although the LastFM docs claim to support it, this does not work.)", async () => {
            await expect(
              trackService.getTopTags({
                mbid: "134010da-9200-4c25-84c3-578626feb2e9",
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
        expect(() => new Track()).toThrowError(
          new Error("API key has not set"),
        );
      });
    });
  });
});

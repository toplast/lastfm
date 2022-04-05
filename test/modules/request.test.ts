/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import axios, { AxiosError } from "axios";
import { ApiRequest } from "../../src/modules/request/request.service";
import RequestError from "../../src/modules/error/error.request";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockAxiosError: AxiosError = {
  isAxiosError: true,
  toJSON: jest.fn(),
  config: null,
  name: null,
  message: "Test Error Message",
};

describe("Request test", () => {
  const mockApiKey = "SOME_NICE_API_KEY";
  const mockApiResponse = { mock: "api response" };
  const mockMethod = "user.getInfo";
  const mockParams = { user: "castilh0s" };
  let requestService: ApiRequest;

  beforeEach(() => jest.resetAllMocks());

  describe("Constructor test", () => {
    it("should take no parameters", () => {
      requestService = new ApiRequest();
    });
  });

  describe("Method tests", () => {
    beforeEach(() => (requestService = new ApiRequest()));

    describe("lastFm", () => {
      describe("When a request is successful", () => {
        let response: { mock: string };

        beforeEach(() =>
          mockedAxios.get.mockImplementationOnce(async () => ({
            data: mockApiResponse,
          })),
        );

        const arrange = async (): Promise<void> => {
          response = ((await requestService.lastFm(
            mockMethod,
            mockApiKey,
            mockParams,
          )) as unknown) as typeof mockApiResponse;
        };

        it("should return the API response ", async () => {
          await arrange();
          expect(response).toBe(mockApiResponse);
        });

        it("should call axios with the correct params", async () => {
          await arrange();
          expect(mockedAxios.get).toBeCalledTimes(1);
          expect(mockedAxios.get).toBeCalledWith("/2.0", {
            params: {
              ...mockParams,
              method: mockMethod,
              format: "json",
              api_key: mockApiKey,
            },
          });
        });
      });

      describe("When a request is NOT successful", () => {
        beforeEach(() =>
          mockedAxios.get.mockImplementationOnce(() => {
            throw mockAxiosError;
          }),
        );

        it("Should raise a request error when the status fails", async () => {
          const expectedError = new RequestError(mockAxiosError);

          expect(
            requestService.lastFm(mockMethod, mockApiKey, mockParams),
          ).rejects.toMatchObject(expectedError);
        });
      });
    });
  });
});

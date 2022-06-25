/* eslint-disable max-lines-per-function */
import type { AxiosError } from "axios";
import RequestError from "../../../src/modules/error/error.request";

const mockAxiosError: AxiosError = {
  isAxiosError: true,
  toJSON: jest.fn(),
  config: null,
  name: null,
  message: "Test Error Message",
};

const mockAxiosResponse = {
  data: null,
  status: 404,
  statusText: null,
  headers: {},
  config: null,
};

describe("RequestError tests", () => {
  let error: RequestError;
  let mockError: AxiosError;

  beforeEach(() => {
    mockError = { ...mockAxiosError };
  });
  describe("when there is a status code", () => {
    beforeEach(() => {
      mockError.response = mockAxiosResponse;
      error = new RequestError(mockError);
    });

    it("should report the correct status code", () => {
      expect(error.statusCode).toBe(mockError.response.status);
      expect(error.message).toBe(mockError.message);
    });

    it("should have the correct name", () => {
      expect(error.name).toBe("RequestError");
    });
  });
  describe("when there is NOT a status code", () => {
    beforeEach(() => {
      error = new RequestError(mockError);
    });

    it("should report the correct status code", () => {
      expect(error.statusCode).toBeUndefined();
      expect(error.message).toBe(mockError.message);
    });

    it("should have the correct name", () => {
      expect(error.name).toBe("RequestError");
    });
  });
});

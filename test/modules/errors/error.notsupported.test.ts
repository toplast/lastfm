import NotSupported from "../../../src/modules/error/error.notsupported";

describe("NotSupported tests", () => {
  let mockError: NotSupported;

  beforeEach(() => {
    mockError = new NotSupported();
  });

  describe("Constructor tests", () => {
    it("Should contain the correct message", () => {
      expect(mockError.message).toBe(
        "The Last FM API does not appear to support lookups by mbid for this method.",
      );
    });

    it("Should contain the correct error name", () => {
      expect(mockError.name).toBe("NotSupportedError");
    });
  });
});

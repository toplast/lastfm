class NotSupported extends Error {
  constructor() {
    const message =
      "The Last FM API does not appear to support lookups by mbid for this method.";

    super(message);
    this.name = "NotSupportedError";
  }
}

export default NotSupported;

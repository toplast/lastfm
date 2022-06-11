import type { AxiosError } from "axios";

class RequestError extends Error {
  statusCode: number | undefined;

  constructor(err: AxiosError) {
    super(err.message);
    if (err.response) this.statusCode = err.response.status;

    this.name = "RequestError";
  }
}

export default RequestError;

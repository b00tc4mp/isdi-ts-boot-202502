import { connect, disconnect } from "mongoose";

import errors from "../errors/index.js";
const { SystemError } = errors;

const data = {
  connect(uri: string, dbName: string) {
    return connect(`${uri}/${dbName}`).catch((error: Error) => {
      throw new SystemError(error.message);
    });
  },
  disconnect(): Promise<void> {
    return disconnect();
  },
};

export { data };

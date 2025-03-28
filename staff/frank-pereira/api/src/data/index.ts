import path from "path";
import { readFile, writeFile } from "fs/promises";

const getCollectionPath = (name: string) =>
  path.join(process.cwd(), "src", "data", `${name}.json`);

export const data = {
  loadCollection<T>(name: string): Promise<T[]> {
    const file = getCollectionPath(name);

    return readFile(file, "utf8")
      .then((json) => JSON.parse(json))
      .catch((error) => {
        throw new Error(error.message);
      });
  },

  saveCollection<T>(name: string, data: T[]): Promise<void> {
    const file = getCollectionPath(name);

    const json = JSON.stringify(data);

    return writeFile(file, json).catch((error) => {
      throw new Error(error.message);
    });
  },
};

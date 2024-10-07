import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import crypto from "node:crypto";

const calculateHash = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fileToRead = path.join(
    __dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );

  try {
    const data = await fs.promises.readFile(fileToRead);
    const hash = crypto.createHash("sha256");
    hash.update(data);

    const hexHash = hash.digest("hex");
    console.log(hexHash);
  } catch (error) {
    throw new Error(err);
  }
};

await calculateHash();

import path from "node:path";
import url from "node:url";
import { release, version } from "node:os";
import { createRequire } from "node:module";
import http from "node:http";
import "./files/c.js";

const random = Math.random();
const require = createRequire(import.meta.url);

let unknownObject;
if (random > 0.5) {
  unknownObject = require("./files/a.json");
} else {
  unknownObject = require("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const filePath = url.fileURLToPath(import.meta.url);
console.log(`Path to current file is ${filePath}`);

const dirPath = path.dirname(filePath);
console.log(`Path to current directory is ${dirPath}`);

const myServer = http.createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
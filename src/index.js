import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// get the current directoryof the current script without the file name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = __dirname.replace("src", "");
const publicPath = path.join(root, "public");

app.use(express.static(publicPath));

app.get("/", (_, res) => res.sendFile(path.join(publicPath, "index.html")));
console.log(publicPath);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

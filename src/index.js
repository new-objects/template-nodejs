import express from "express";

const app = express();
const port = 3000;

// get the current directoryof the current script without the file name
const __dirname = new URL(".", import.meta.url).pathname;
const root = __dirname.replace("src", "");

app.use(express.static(root + "/public"));
app.get("/", (req, res) => res.sendFile("index.html"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

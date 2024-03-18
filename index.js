import express from "express";
import fs from "fs";
import { createFile, getFiles } from "./filesystem.js";

const app = express();

const port = 5000;

app.use(express.json());
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/createFiles", async (req, res) => {
  const newFile = req.body;
  createFile(newFile);

  res.send({ message: "file created successfully" });
});

app.listen(port, () => {
  console.log("App listening to PORT 5000");
});

app.get("/files", async (req, res) => {
  await getFiles();
  res.send({ message: "operation successful" });
});

import fs from "fs";

function createFile(newFile) {
  fs.writeFile(
    `./repository/${new Date().getTime()}.txt`,
    newFile.time,
    (err) => {
      console.log(err);
    }
  );
}

async function getFiles() {
  fs.readdir("./repository", (err, files) => {
    console.log(files);
  });
}

export { createFile, getFiles };

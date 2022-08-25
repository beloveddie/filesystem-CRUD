const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "files");

const fileOps = async () => {
  try {
    // create directory
    if (!fs.existsSync(FILE_PATH)) {
      await fsPromises.mkdir(FILE_PATH);
      console.log("Directory created!");
    }

    // write
    await fsPromises.writeFile(
      path.join(__dirname, "files", "hello.txt"),
      "Hello world"
    );
    console.log("File written!");

    // update
  } catch (error) {
    console.error(error);
  }
};

// call fileOps
fileOps();

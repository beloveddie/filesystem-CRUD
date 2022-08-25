const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "files");
let writtenFilepath = "";

const fileOps = async () => {
  try {
    // create directory
    if (!fs.existsSync(FILE_PATH)) {
      await fsPromises.mkdir(FILE_PATH);
      console.log("Directory created!");
    }

    // write
    {
      await fsPromises.writeFile(
        path.join(__dirname, "files", "hello.txt"),
        "Hello world"
      );
      writtenFilepath = path.join(__dirname, "files", "hello.txt");
      console.log("File written!");
    }

    // update
    {
      await fsPromises.appendFile(
        writtenFilepath,
        "Hello, world \n\nGod is good!"
      );
      console.log("File updated");
    }

    // delete
    {
      await fsPromises.unlink(writtenFilepath);
      //   console.log(`There's an end to everything but ${}`)
    }
  } catch (error) {
    console.error(error);
  }
};

// call fileOps
fileOps();

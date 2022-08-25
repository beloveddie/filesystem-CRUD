const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "files");
let writtenFilepath = "",
  content = "";

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

    // read
    {
      content = await fsPromises.readFile(writtenFilepath, "utf8");
      console.log("Content well read!");
    }

    // update
    {
      await fsPromises.appendFile(
        writtenFilepath,
        "\nHello, world \n\nGod is good!"
      );
      console.log("File updated");
    }

    // delete
    {
      console.log(
        `There's an end to everything but "${content}" was in me! 🙂`
      );
      // get updated content
      let updatedContent = await fsPromises.readFile(writtenFilepath, "utf-8");
      updatedContent &&
        console.log(
          `Hey friend, please hold on 😬, I got an update to "${updatedContent}" 😉😇`
        );
      await fsPromises.unlink(writtenFilepath);
    }
  } catch (error) {
    console.error(error);
  }
};

// call fileOps
fileOps();

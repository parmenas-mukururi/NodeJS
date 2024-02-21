const uuid = require("uuid");
const date = require("date-fns");
const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");
const { format } = require("date-fns");

const folderPath = path.join(__dirname, "Logs");

const id = uuid.v4();
const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;

const logEvents = async (message) => {
  try {
    //creating a new folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
      await fsPromise.mkdir(folderPath);
      console.log(`folder created successfully`);
    } else {
      console.log(`folder already exists`);
    }

    const logItem = `${id} \t ${dateTime} \t ${message} \n`;
    const data = await fsPromise.appendFile(
      path.join(__dirname, "Logs", "file.txt"),
      logItem
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvents;

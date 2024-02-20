
const fs = require("fs");
const path = require("path");
const stream = require("stream");

const readStream = fs.createReadStream(
  path.join(__dirname, "files", "./myName.txt"),
  {
    encoding: "utf8",
  }
);

const writeStream = fs.createWriteStream(
  path.join(__dirname, "files", ".updated.txt")
);

readStream.pipe(writeStream);

//creating a file using promises
const fsPromise = require('fs').promises

const fileActions = async () => {
try {
    //reading the file
    const data = await fsPromise.readFile(path.join(__dirname, 'files', 'promises.txt'), {encoding: 'utf8'})
    console.log(data)

    //editing the file
    await fsPromise.appendFile(path.join(__dirname, 'files', 'promises.txt'), '\n This is an interesting concept')

    //renaming the file
    await fsPromise.rename(path.join(__dirname, 'files', 'promises.txt'), path.join(__dirname, 'files', 'renamed.txt'))
}
catch (err){
    console.error(err)
}
}
fileActions()
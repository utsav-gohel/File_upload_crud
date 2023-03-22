const fs = require("fs");

//Read file using async version
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data, "::File Reading Complete");
});

//Write file using async version
fs.writeFile("newFile.txt", "How are you? Doing good?", (err, data) => {
  if (err) throw err;
  console.log(":: File Creation Completed");
});

//Append to file using async version
fs.appendFile("newFile.txt", " New Quote Appended", (err, data) => {
  if (err) throw err;
  console.log(":: File Append Completed");
});

////Delete file using async version
// fs.unlink("FileRm.txt", (err, data) => {
//   if (err) throw err;
//   console.log(":: File Delete Completed");
// });

//Reading data from file using stream
const read = fs.ReadStream("file.txt", "utf-8");
read.on("data", (chunk) => {
  console.log(chunk);
});

//Writing data to file using stream
const data = "Be brave and conquer the peak";

const write = fs.createWriteStream("writeStream.txt", "utf-8");
write.write(data);
write.end();

write.on("finish", () => {
  console.log("write complete");
});

//piping the streams
const readStream = fs.createReadStream("file.txt", "utf-8");
const writeStream = fs.createWriteStream("newWrite.txt");
readStream.pipe(writeStream);

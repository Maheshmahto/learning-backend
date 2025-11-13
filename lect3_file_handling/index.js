import { readFile, writeFile, appendFile, mkdir } from "fs/promises";

// read file content
const read_file = async (fileName) => {
  const data = await readFile(fileName, "utf-8");
  console.log(data);
};

const create_file = async (fileName, content) => {
  await writeFile(fileName, content);
  console.log("file created successfully");
};

const append_file = async (fileName, content) => {
  await appendFile(fileName, content);
  console.log("content appended successfully");
};
const create_dir = async (dir) => {
//   await mkdir(dir);
  await mkdir(dir,{recursive:true});
};

create_file("my.py", "hello there");

read_file("sample.txt");

append_file("my.py", " this extra content");

create_dir("src/components");

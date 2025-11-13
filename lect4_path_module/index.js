import path from 'path'
// join two or more file
const fullpath =path.join("/path","index.py",'file.java')

console.log("files join",fullpath)

const absolutepath=path.resolve();
console.log("we are currentyl working on ",absolutepath)

const extname=path.extname('resume.pdf')

console.log(extname)
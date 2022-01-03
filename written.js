//require()
var fs = require('fs');
var textIN = fs.readFileSync('folder.txt','utf-8');
console.log(textIN);
var textOut = `list of students : ${textIN}`;
fs.writeFileSync('./output/output.txt',textOut);
console.log(textOut);
console.log('the file has been written successfully..');
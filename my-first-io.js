var fs = require('fs');

var file = fs.readFileSync(process.argv[2],'utf-8');



var lines = file.toString().split('\n').length -1;

console.log(lines)
var fs = require('fs');

var readFileContent = fs.readFileSync('readMe.txt','utf8'); // synchronously reading file

// console.log(readFileContent)

fs.writeFileSync('writeMe.txt', readFileContent);

// async version of reading file.
fs.readFile('readMe.txt', 'utf8', function(err, data) {
  console.log('data retrived -', data);
  console.log('err retrived -', err);
});


// create directory
fs.mkdir('nodeStuff', function() {
  console.log('directory has been created');
});


// to delete file use fs.unlink(filename)
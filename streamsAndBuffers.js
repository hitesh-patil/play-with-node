var fs = require('fs');
var http = require('http');

// var readStream = fs.createReadStream(__dirname + '/stremFile.txt', 'utf8');
// var writeStream = fs.createWriteStream('writeStream.txt');


// readStream.pipe(writeStream);

var server = http.createServer(function(req, res) {
  var readStream = fs.createReadStream(__dirname + '/stream.html', 'utf8');
  readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
// readStream.on('data', function(chunk) {
//   writeStream.write(chunk);
// });
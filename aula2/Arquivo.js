var fs = require('fs');
var archiver = require('archiver');

var output = fs.createWriteStream('C:\temp' + '/example.zip');
var archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});
output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});
output.on('end', function() {
  console.log('Data has been drained');
});

archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
  } else {
    throw err;
  }
});
archive.on('error', function(err) {
  throw err;
});
archive.pipe(output);

var file1 = __dirname + '/file1.txt';
archive.append(fs.createReadStream(file1), { name: 'file1.txt' });
archive.append('string cheese!', { name: 'file2.txt' });

var buffer3 = Buffer.from('buff it!');
archive.append(buffer3, { name: 'file3.txt' });

archive.file('file1.txt', { name: 'file4.txt' });

archive.directory('subdir/', 'new-subdir');

archive.directory('subdir/', false);

archive.glob('subdir/*.txt');

archive.finalize();
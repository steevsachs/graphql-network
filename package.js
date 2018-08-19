var file_system = require('fs');
var archiver = require('archiver');

var fileName = './package/graphql-network.zip'

var output = file_system.createWriteStream(fileName);
var archive = archiver('zip');

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log(`${fileName} was created successfully`);
});

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);

archive.file('manifest.json');
archive.file('devtools.html');
archive.file('panel.html');
archive.directory('build');
archive.directory('icons');

// archive.bulk([
//     { expand: true, cwd: 'source', src: ['**'], dest: 'source'}
// ]);
archive.finalize();
const filesToConvert = require('./filesToConvertModule');
const decompress = require('decompress');
const decompressUnzip = require('decompress-unzip');

const path = process.cwd();
let inputDataPath = '';

module.exports.unzipData = function(inputZip, outputZipFolder, resultFileName){
    decompress(inputZip, outputZipFolder, {
        plugins: [
            decompressUnzip()
        ]
    }).then(() => {
        console.log(`${inputZip} decompressed.`);
        inputDataPath = `${path}/${outputZipFolder}`;
    }).then(() => 
        filesToConvert.getFilesFromDir(inputDataPath, resultFileName)
    );
};
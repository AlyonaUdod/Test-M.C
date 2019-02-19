const filesToConvert = require('./filesToConvertModule');
const decompress = require('decompress');
const decompressUnzip = require('decompress-unzip');

module.exports.unzipData = function(inputZip, outputZipFolder, resultFileName){
    const path = process.cwd();
    let inputDataPath = '';
    
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
const unzip = require('./Modules/unzipDataModule');
const filesToConvert = require('./Modules/filesToConvertModule');

const inputZip = 'Carrier_Integration_-_Data.zip';
const inputFolderWithCSV = null;
const outputZipFolder = 'original_data';
const resultFileName = 'result';

if(inputZip){
    unzip.unzipData(inputZip, outputZipFolder, resultFileName);
} else if (inputFolderWithCSV) {
    const path = process.cwd();
    let inputDataPath = `${path}/${inputFolderWithCSV}`;
    filesToConvert.getFilesFromDir(inputDataPath, resultFileName);
};  
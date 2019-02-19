const unzip = require('./Modules/unzipDataModule');

const inputZip = 'Carrier_Integration_-_Data.zip';
const outputZipFolder = 'original_data';
const resultFileName = 'result';

unzip.unzipData(inputZip, outputZipFolder, resultFileName)
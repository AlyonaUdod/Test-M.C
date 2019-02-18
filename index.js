const filesToConvert = require('./filesToConvert')

const dataPath = './Carrier_Integration_-_Data'
const resultFileName = 'result'

filesToConvert.getFilesFromDir(dataPath, resultFileName)
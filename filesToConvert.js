const fs = require('fs')
const Converter = require('./CSVtoJSONConverter')
const FileCreate = require('./writeResultFile')

module.exports.getFilesFromDir = function(path, fileName){
    let pathArr = []
    let regExp = /(.csv)$/
    fs.readdirSync(path).map(el => regExp.test(el) ? pathArr.push({name: el, path: `${path}/${el}`}) : null);
    if(pathArr.length > 0){
        pathArr.map(el => Converter.convertCSVtoJSON(el.path)
        .then(data => FileCreate.writeDataToFile(data, fileName))
        .then(() => isDone(el))
        .catch(err => console.log(err)))
    } else {
        console.log('No CSV file into selected folder.')
    }
   

    function isDone(el){
        if (pathArr.length-1 === pathArr.indexOf(el)){
            console.log(`File ${el.name} converted and writed succsessfully!`)
            console.log(`Conversion successfully completed. Check your file \'${fileName}.json\'.`)
        } else {
            console.log(`File ${el.name} convert and write succsessfully!`)
        }
    }
}


const fs = require('fs');
const Converter = require('./CSVtoJSONConverterModule');
const FileCreate = require('./createResultFileModule');

module.exports.getFilesFromDir = function(inputDataPath, fileName){
    let pathArr = [];
    let regExp = /(.csv)$/;
    let counter = 0;
    fs.readdirSync(inputDataPath).map(el => regExp.test(el) ? pathArr.push({name: el, path: `${inputDataPath}/${el}`}) : null);

    if(pathArr.length > 0){
        pathArr.map(el => Converter.convertCSVtoJSON(el.path)
            .then(data => FileCreate.writeDataToFile(data, fileName, counter))
            .then(() => isDone(el))
            .catch(err => console.log(err))
        );
    } else {
        console.log('No CSV file into selected folder.');
    };
   

    function isDone(el){
        counter++;
        console.log(`File ${el.name} was converted and writed.`);
        if (pathArr.length === counter){
            console.log(`Conversion successfully completed. Check your file \'${fileName}.json\'.`);
        };
    };
};


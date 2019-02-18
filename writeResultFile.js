const fs = require('fs')

module.exports.writeDataToFile = function(data, fileName){
    const resultFile = `${fileName}.json`
        if (!fs.existsSync(resultFile)){
            fs.writeFileSync(resultFile, JSON.stringify(data), {encoding: 'utf8'})
        } else {
            let oldFile = JSON.parse(fs.readFileSync(resultFile, {encoding: 'utf8'}))
            let newFile= [...oldFile, ...data]
            fs.writeFileSync(resultFile, JSON.stringify(newFile), {encoding: 'utf8'})
        } 
}
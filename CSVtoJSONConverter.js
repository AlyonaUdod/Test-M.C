const csv = require('csvtojson')
const Ajv = require('ajv');
const ajv = new Ajv();
const JSONSchema = require('./JSONSchema')

module.exports.convertCSVtoJSON = async function(path){
    let resultArray = []
        
    Array.prototype.toObj = function(values){
            values = values || this.map(function(v){return true;}); 
            var some;
            this .map(function(v){return [v,this.shift()]},values)
                .map(function(v){this[v[0]]=v[1];},some = {});
            return some; 
    };


    function getDate(date){
        return date.split('/')
                .map(el => el.length > 1 ? el : `0${el}`)
                .reverse()
                .join('-')
    }

    const regExp = /\W{3,4}/;

    await csv()
    .fromFile(path)
    .then((jsonObj)=>{
        jsonObj.map(el => {
            let keys = Object.keys(el)[0].split(regExp)
            let values = Object.values(el)[0].split(regExp) 
            let user = keys.toObj(values);

            let obj = {
                name: user.last_name+' '+user.first_name,
                phone: +user.phone.split(/\W/).join(''),
                person: {
                    firstName: user.first_name,
                    lastName: user.last_name
                },
                amount: +user.amount,
                date: getDate(user.date),
                costCenterNum: user.cc.slice(3)
            }
            
            let valid = ajv.validate(JSONSchema, obj);
            if (valid) {
                resultArray.push(obj)  
            } else {
                console.log(ajv.errors) 
            }
        })
    })
    .catch(err => console.log(err))
    return resultArray
}
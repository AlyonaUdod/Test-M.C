
This test application will help you to convert .csv files to one json file.

For starting:

1. Make git clone this repository: 

      git clone https://github.com/AlyonaUdod/Test-M.C.git

2. Inside repository folder install node_modules 

      npm i


3. Open index.js file. 

   You can see 4 default constants for work: 
   
   3.1. inputZip - default 'Carrier_Integration_-_Data.zip' with .csv files inside into repository folder.
   
   3.2. inputFolderWithCSV - default null. If you don't want to use .zip archive and want to use folder with .csv you can put this folder near index.js. After that change inputFolderWithCSV to folder name and inputZip to null.
   
   3.3. outputZipFolder - default 'original_data'. After unzip process this folder will be created near index.js. 
   
   3.4. resultFileName - defaul 'result'. It's name of result .json file. If you want to make different files from one archive/folder with .csv you have to change resultFileName every times. By default, every time result file has overwrited. 

4. You ready to conver csv to json.

      npm start.
  
  Working status you can see in console.
  
5. If everything is ok - you will get 'original_data' folder and 'result.json' near index.js. 
  Result JSON Object structure:
 
 
   
       {
       "name": "string", 
       "phone": "string", 
       "person": {  
        "firstName": {   
          "type": "string"  
          },  
          "lastName": {   
          "type": "string" 
          }, 
         }, 
        "amount": "number", 
        "date": "date", 
        "costCenterNum": "string"
       }
   



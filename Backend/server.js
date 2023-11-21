/***
 * Author: Randy Franzmeier
 * Date: 11-13-2023
 * This file serves as a backend to process requests
 * from the client. If data needs to be recieved or 
 * saved, the way to get/add data is through the 
 * two endpoints @function app.get() or
 * @function app.post()
 * the @function app.listen() starts the server.
 */
const path = require('path');
const express = require('express');//importing express framework for smoothe api creation
const app = express(); //express object
app.use(express.static('./src'));
app.use(express.json());
const cors = require('cors'); //cross origin resource sharing (cors) so my frontent is compatible with my backend
const port = process.env.PORT || 3001;//port
app.use(cors()); //using cors module
const fs = require('fs'); //file system object for read and write operations
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); //neatly parses the body of my requests to prevent errors

const jsonPath = path.join(__dirname, 'playerData.json'); //path to the json file

/**this api endpoint takes 
 * two parameters @param req (data from the client) and
 *  @param res (data to the client).
 * I use the @function fs.readFile() to read the contents
 * of the JSON file. If everything is successful, I send 
 * a response to the client in the form of a JSON array.
 * The first string in the parameters is the route to 
 * access this api.
 */
app.get('/api/v1/getPlayerScore', (req, res) =>{
    let playerData = ""; //string to store player data in
    //get the data from the file.
    fs.readFile(jsonPath, "utf-8", (error, jString) =>{
        if(error) {
            res.status(500).send("error reading file"); //handle error
        }
        else{
            try{
                 playerData = JSON.stringify(jString);
            }
            catch(err) { //if contents are empty/non-stringifyable
                res.status(500).send(err);
            }
            finally {
                if(playerData.trim() != "") { //if the file's contents are not empty
                    res.send(JSON.parse(playerData));
                }
                res.end(); //end response
            }   
        }
    });
});

/**this api endpoint takes 
 * two parameters @param req (data from the client) and
 *  @param res (data to the client).
 * I use the @function fs.readFile() to read the contents
 * of the JSON file. I then use the @function fs.writeFile to
 * update the JSON file to include the newly added item (assuming
 * everything is successful). If everything goes as planned, I send a 
 * successful response code. Otherwise, I send an error response code.
 * The first string in the parameters is the route to 
 * access this api.
 */

app.post('/api/v1/addPlayerScore', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
     fs.readFile(jsonPath, "utf-8", (error, fileContent) => {
        if(error) {
           res.status(500).send("Error reading file") //can't read file content
        } 

        else { 
            //Here I am parsing the file content so I can 
            //add the new request body to the file
            fileContent = JSON.parse(fileContent);
            fileContent.push(req.body);

            fs.writeFile(jsonPath, JSON.stringify(fileContent, null, 2), "utf-8", (err) =>{
               if(err) {
                   res.status(500).send(err); //handle error
               }
               else {
                   res.status(200).send("Tasks saved successfully"); //task is implemented successfully
               }
            })
            res.end();//end response
        }});
});

/**
 * this @function app.listen() takes one parameter: the port
 * to listen on. It is generally good practice to log if the server
 * is running and on which port it is running on
 */
app.listen(port, ()=>{console.log(`server listening on port ${port}`)});
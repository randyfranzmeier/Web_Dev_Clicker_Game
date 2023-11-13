const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('./src'))
app.use(express.json())
const cors = require('cors')
const port = process.env.PORT || 3001
app.use(cors())
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/api/v1/getPlayerScore', (req, res) =>{
    let playerObj = "";
    //get the data from the file.
    fs.readFile("playerData.json", "utf-8", (error, jString) =>{
        if(error) {
            throw error;
        }
        else{
            try{
                 playerObj = JSON.stringify(jString);
            }
            catch(err) {
                console.error("error dude: " + err);
            }
            finally {
                if(playerObj.trim() != "") {
                    res.send(JSON.parse(playerObj));
                }
                res.end();
            }   
        }
    });
});

app.post('/api/v1/addPlayerScore', (req, res) =>{
     fs.readFile("playerData.json", "utf-8", (error, fileContent) => {
        if(error) {
            console.log("An error occured: " + error);
        } 
        else { 
            //console.log("File content before parse: " + fileContent.length());
            fileContent = JSON.parse(fileContent);
            fileContent.push(req.body);

            fs.writeFile("playerData.json", JSON.stringify(fileContent, null, 2), "utf-8", (err) =>{
               if(err) {
                   res.status(500).send("Error saving data");
               }
               else {
                   res.status(200).send("Tasks saved successfully");
               }
               res.end();
           })
        }});
});


//start server
app.listen(port, () => console.log(`Server listening on port ${port}`));
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

app.get('/api/v1/getPlayerScore', (req, res) =>{
    let playerObj = "";
    //get the data from the file. maybe filter to only show top 5.
    fs.readFile("playerData.json", "utf-8", (error, jString) =>{
        if(error) {
            throw error;
        }
        else{
            try{
                 playerObj = JSON.stringify(jString);
               // console.log("Value of playerObj: " + playerObj);
            }
            catch(err) {
                console.error("error dude: " + err);
            }
            finally {
                if(playerObj.trim() != "") {
                    res.json(JSON.parse(playerObj));
                }
                res.end();
            }   
        }
    });
});

app.post('/api/v1/addPlayerScore',  async (req, res) =>{
     fs.readFile("playerData.json", { encoding:'utf-8'}, (error, fileContent) => {
        if(error) throw error;
        else { async() =>{
            console.log("File content before parse: " + fileContent);
            fileContent = await JSON.parse(fileContent);
            fileContent.push(JSON.stringify(req.body, null, 2));

            fs.writeFile("playerData.json", JSON.stringify(fileContent, null, 2), {encoding: 'utf-8'}, (err) =>{
               if(err) {
                   res.status(500).send("Error saving data");
               }
               else {
                   res.status(200).send("Tasks saved successfully");
               }
               res.end();
           })}
        }});
// validate, then send req.body to appropriate file
});

//start server
app.listen(port, () => console.log(`Server listening on port ${port}`));
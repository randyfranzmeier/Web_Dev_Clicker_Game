const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('./src'))
app.use(express.json())
const cors = require('cors')
const port = process.env.PORT || 3001
app.use(cors())

app.get('/api/v1/getPlayerScore', (req, res) =>{
    //get the data from the file. maybe filter to only show top 5.
    res.json({test: "Hello from the backend"})
});

app.post('/api/v1/addPlayerScore', (req, res) =>{
// validate, then send req.body to appropriate file
});

//start server
app.listen(port, () => console.log(`Server listening on port ${port}`));
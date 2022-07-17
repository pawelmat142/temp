const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, '/public')))
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8003
app.listen(port, () => console.log('to-do list app listening on port: ' + port))
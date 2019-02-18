const express = require('express')
const path = require('path')

const app = express();

app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(8000, () => console.log('Server started at http://localhost:8000'))

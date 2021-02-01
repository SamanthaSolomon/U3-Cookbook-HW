const express = require('express')
const app = express()
const parser = require("body-parser");
const cors = require("cors");

// Add the middleware code needed to accept incoming data and add it to req.body
app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());


const cookbookRouter = require('./controllers/cookbookRoutes')
app.use('/api/cookbooks/', cookbookRouter)

const authorRouter = require('./controllers/authorRoutes')
app.use('/api/authors/', authorRouter)

app.listen(4000, () => console.log('Server running on port 4000!'))

//import connection
const mongoose = require('../db/connection')


/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/
const cookbookSchema = new mongoose.Schema({
    title: String,
    yearPublished: Number
})

const Cookbook = mongoose.model('Cookbook', cookbookSchema)

//export model
module.exports = Coo
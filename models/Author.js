//Import connection
const mongoose = require('../db/connection')
const mongooaw = require('../db/connection')


/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/

const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    cookbooks: [{
        id: String,
        title: String,
        yearPublished: Number
        }]
})

const Author = mongoose.model('Author', authorSchema)

//export model named "Author"
module.exports = Author





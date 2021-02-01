const express = require('express')
const router = express.Router()

const Author = require("../models/Author")

// Write the route to list all authors

const getAllAuthors = (req, res) => {
    Author.find({}).then((authors) => {
        res.json({
            status: 200,
            authors: authors})
    })
}
router.get('/', getAllAuthors)

// Write the route to get authors by firstname

const getAuthorFirst = (req, res) => {
    Author.findOne({firstName: req.params.firstName}).then((authors) => {
        res.json({
            status: 200,
            authors: authors})
    })
}
router.get('/firstName/:firstName', getAuthorFirst)

// Write the route to create an author:

const createAuthor = (req,res) => {
    Author.create(req.body).then((author) => {
        Author.find({}).then((authors) => {
            res.json({
                status: 200,
                msg: 'Added author',
                authors: authors
            })
        })
    })
}
router.post('/', createAuthor)

// Write the route to update an author
const updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body).then((author) => {
        Author.find({}).then((authors) => {
            res.json({
                status: 200,
                msg: 'Updated author',
                authors: authors
            })
        })
    })
}
router.put("/:id", updateAuthor)

// Update the cookbook using Postman.
const updateAuthorCookbook = (req, res) => {
    Author.findOneAndUpdate({
            cookbooks: [{
            title: req.params.title, 
            yearPublished: req.params.yearPublished
        }]}, 
        req.body).then((author) => {
        Author.find({}).then((authors) => {
            res.json({
                status: 200,
                msg: 'Updated cookbook',
                authors: authors
            })
        })
    })
}
router.put("/:id", updateAuthorCookbook)

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)


module.exports = router
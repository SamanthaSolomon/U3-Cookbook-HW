const express = require('express')
const router = express.Router()

// Require the Cookbook controller.
const Cookbook = require("../models/Cookbook")

// Write the route to list all cookbooks

const getAllCookbooks = (req, res) => {
    Cookbook.find({}).then((cookbooks) => {
        res.json({
            status: 200,
            cookbooks: cookbooks})
    })
}
router.get('/', getAllCookbooks)

// Write the route to get cookbook by title

const getCookbookTitle = (req, res) => {
    Cookbook.findOne({title: req.params.title}).then((cookbooks) => {
        res.json({
            status: 200,
            cookbooks: cookbooks})
    })
}
router.get('/:title', getCookbookTitle)

// Write the route to get cookbook by year published

const getCookbookYear = (req, res) => {
    Cookbook.find({yearPublished: req.params.year}).then((cookbooks) => {
        res.json({
            status: 200,
            cookbooks: cookbooks})
    })
}
router.get('/:year', getCookbookYear)
// Write the route to create a cookbook

const createCookbook = (req,res) => {
    Cookbook.create(req.body).then((cookbook) => {
        Cookbook.find({}).then((cookbooks) => {
            res.json({
                status: 200,
                msg: 'Added cookbook',
                cookbooks: cookbooks
            })
        })
    })
}
router.post('/', createCookbook)

// Write the route to update a cookbook
const updateCookbook = (req, res) => {
    Cookbook.findOneAndUpdate({_id: req.params.id}, req.body).then((cookbook) => {
        Cookbook.find({}).then((cookbooks) => {
            res.json({
                status: 200,
                msg: 'Updated cookbook',
                cookbooks: cookbooks
            })
        })
    })
}
router.put("/:id", updateCookbook)
// Write the route to delete the cookbook by title
const deleteCookbook = (req, res) => {
    Cookbook.findOneAndDelete({title: req.params.title}).then((cookbook) => {
        Cookbook.find({}).then((cookbooks) => {
            res.json({
                status: 200,
                msg: "Deleted cookbook",
                cookbooks: cookbooks
            })
        })
    })
}
router.delete("/:title", deleteCookbook)

module.exports = router;
const express = require("express")
const router = express.Router()
const Category = require('../Categories/Category')


router.get('/articles', (req, res)=>{
    res.send('artigos')
})

router.get('/admin/articles/new', (req, res)=>{
    res.render('admin/articles/new')
})


module.exports = router
const express = require('express')
const breads = express.Router()

const Bread = require('../models/bread')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
    {
        breads: Bread,
        title: 'Index Page'
    }
  )
  // res.send(Bread)
})


// SHOW
breads.get('/:arrayIndex', function(req, res) {
    const index = req.params.arrayIndex
    res.send(Bread[index])
})

module.exports = breads
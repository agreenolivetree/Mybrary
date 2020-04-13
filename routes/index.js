const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index') // render out views which is in index.ejs
})

module.exports = router
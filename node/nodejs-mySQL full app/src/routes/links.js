const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add',(req, res)=>{
    res.render('../views/links/add.hbs');
})

router.post('/add',(req, res)=>{
    res.send('recibido');
})

module.exports = router;
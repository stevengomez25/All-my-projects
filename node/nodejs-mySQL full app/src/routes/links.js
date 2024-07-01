const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add',(req, res)=>{
    res.render('../views/links/add.hbs');
})

router.post('/add', async(req, res)=>{
    const {title,url,description} = req.body;
    const NewLink = {
        title,
        url,
        description
    };
    await pool.query('INSERT INTO link set ?', [NewLink]);
    res.send('received');
})

module.exports = router;
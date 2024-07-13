const express = require('express');
const router = express.Router();

const pool = require('../database');

const { isLoggedIn } = require('../lib/auth');

router.get('/add', isLoggedIn, (req, res)=>{
    res.render('../views/links/add.hbs');
})

router.post('/add',isLoggedIn, async(req, res)=>{
    const {title,url,description} = req.body;
    const NewLink = {
        title,
        url,
        description,
        user_id : req.user.id
    };
    await pool.query('INSERT INTO link set ?', [NewLink]);
    req.flash('success','Successfully saved');
    res.redirect('/links');
})

router.get('/', isLoggedIn, async(req, res)=>{
    const links = await pool.query('SELECT * from link WHERE user_id = ?', [req.user.id]);
    console.log(links);
    res.render('links/list',{links});
});

router.get('/delete/:id',isLoggedIn, async(req, res)=>{
    const { id } = req.params;
    await pool.query('DELETE FROM link WHERE id = ?', [id]);
    req.flash('success','Link successfully removed');
    res.redirect('/links');
})

router.get('/edit/:id',isLoggedIn, async(req, res)=>{
    const {id} = req.params;
    const links = await pool.query('SELECT * from link WHERE id = ?', [id]);
    res.render('links/edit',{links: links[0]});
})

router.post('/edit/:id',isLoggedIn, async(req, res)=>{
    const {id} = req.params;
    const {title, description, url} = req.body;
    const newLink = {
        title,
        description,
        url
    }
    await pool.query('UPDATE link set ? WHERE id = ?',[newLink,id]);
    req.flash('success','Link updated successfully');
    res.redirect('/links');
})


router.get('/chat/:id',isLoggedIn, async(req,res)=>{
    const {id} = req.params;
    const links = await pool.query('SELECT * from users WHERE id = ?', [id]);
    console.log(links);
    const name = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    res.render('links/chat', {links: links[0]});
    console.log(name)
})

module.exports = router;
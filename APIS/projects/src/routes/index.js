const {Router} = require('express');
const router = Router();


router.get('/test/',(req, res) => {
    const data = {
        "name" : "Steven",
        "website" : "stevengdev.netlify.com"
    };
    res.json(data);
});

module.exports = router;
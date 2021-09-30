const router = require('express').Router();
const shortid = require('shortid');
const rateLimit = require("express-rate-limit")
const ShortUrl = require('../datas/shortUrl')
var Filter = require('bad-words'),
    filter = new Filter();
const createAccountLimiter = rateLimit({
  windowMs: 10000,
  max: 2, 
  message:
    "You can only create 2 urls in 10 seconds!"
});

router.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
    //res.render('index', { pageTitle: 'Dashboard', user: req.session.user || null });
});

router.get("/arc-sw.js", (req, res) => {
    res.sendFile(__dirname + "/arc-sw.js")
});

router.get("/test.html", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

router.get('/discord', (req, res) => {
    res.redirect('https://discord.gg/tJNyH6AKc6')
});



module.exports = router;
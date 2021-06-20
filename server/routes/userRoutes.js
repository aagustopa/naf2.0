const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.send('registrando usuario');
});

router.get('/login', (req, res) => {
    res.send('logeando usuario');
});

module.exports = router;
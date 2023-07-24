var express = require('express');
var router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const localStrgCtrl = require('../../controllers/auth').strategies.local;

router.get('/', (req, res) => {

    res.render('register')
})

router.post('/userData', (req, res, next) => {
    const { nickname, login, password } = req.body;
    localStrgCtrl.registration(nickname, login, password)

})

module.exports = router
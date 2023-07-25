var express = require('express');
var router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const localStrgCtrl = require('../../controllers/auth').strategies.local;
const onlyAuthMw = require('./mw/onlyAuth')

router.get('/registration', upload.none(), (req, res) => {
    res.render('register')
})

router.post('/registration', upload.none(), async (req, res) => {
    const { nickname, login, password } = req.body;
    const authData = {login, password}
    const result = await localStrgCtrl.registration(nickname, authData )
    res.json(result)
})

router.get('/login', (req, res) => {
    res.render('auth')
})

router.post('/login', upload.none(), async (req, res) => {
    const {login, password} = req.body
    
    const uId = await localStrgCtrl.login(login, password);
    if(uId.status === 'fail'){
        res.json('Щось пішло не так')
    }
    else if(uId.status === 'ok'){
        console.log(uId.payload.UserId);
        req.session.userId = uId.payload.UserId;
        res.redirect('/auth/local/profile')    
    }

})

router.get('/profile', onlyAuthMw, (req, res ,next)=>{
    res.render('profile')
})

router.get('/logout', (req, res) => {
    req.session.userId = null;
    res.render('auth')
})

router.post('/resetpwd', (req, res) => {

})
module.exports = router
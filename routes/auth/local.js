var express = require('express');
var router = express.Router();
const multer  = require ('multer') 
const upload  =  multer ( {  dest : 'uploads/'  } )
const localStrgCtrl = require('../../controllers/auth').strategies.local;

router.get('/login',(req,res)=> {
    localStrgCtrl.registration()
    res.render('auth')
})

router.post('/login',upload.none(), (req,res)=> {
    console.log('login',req.body)
    res.json({payload:'status ok'});
})

router.post('/registration', upload.none(), (req,res) => {

})

router.post('/logout',(req,res) => {

})

router.post('/resetpwd',(req,res) => {
    
})
module.exports = router
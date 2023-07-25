const createError = require('http-errors')
const authMw = (req,res,next)=>{
    if(req.session.userId){
        next()
        return
    }
    next(createError(401))
}

module.exports = authMw
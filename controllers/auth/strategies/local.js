const userModel = require('../../../models/user')
const login = async (login, pwd) => {
    console.log('ok');
}

const logout = async (login, pwd) => {
    console.log('ok');
}

const resetPwd = async (login, pwd) => {
    console.log('ok');
}

const registration = async (nickname,login, pwd) => {
    const res = await userModel.findOne(nickname)
    
}

module.exports = {
    registration
}
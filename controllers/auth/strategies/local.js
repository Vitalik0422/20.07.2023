const userModel = require('../../../models/user')
const authModel = require('../../../models/auth')
const login = async (login, pwd) => {
    console.log(login, pwd);
    const user = await authModel.findUser({provider: 'local', 'authData.login': login})
    if(!user){
        console.log('логіна нема');
        return{ status: 'fail', payload: {message: 'Такого користувача не існує'}}
    }else if(user.authData.password !== pwd){
        console.log('пароля нема');
        return{ status: 'fail', payload: {message: 'Пароль не вірний'}}
    }

    const {id} = user;
    return { status: 'ok', payload:{message:'Ви авторизовані', UserId: id}}
}

const logout = async (login, pwd) => {
    console.log('ok');
}

const resetPwd = async (login, pwd) => {
    console.log('ok');
}

const registration = async (nickname, authData) => {
    const user = await authModel.findUser({provider: 'local', 'authData.login': authData.login})
    if(user){
        console.log('work');
        return {status:'fail', payload: {message:'Такий користувач існує'}};
    }
    //const userId = await userModel.addUser(nickname)
    const authId = await authModel.regUser(authData,'local')
    return {status:'ok', payload: {message:'Зареєстровано', uId: authId}};
}

module.exports = {
    registration,
    login
}
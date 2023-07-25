const moongose = require('mongoose')
const path = require('path')

require('./user')
const { Schema } = moongose;
const generalSchema = new Schema ({
        provider:{
            type: Schema.Types.String},
        user:{
            type: Schema.Types.String},
        authData: {
             type: Schema.Types.Mixed }
})

const modelName = path.basename(__filename, '.js')
const model = moongose.model(modelName, generalSchema);

const regUser = async (password,sub) => {
    const res = await model.create({'provider': sub,'user': 'Anonim', 'authData': password})
    return res
}

const findUser = async (user) => {
    const res = await model.findOne(user)
    return res;
}

module.exports = {
    regUser,
    findUser
}
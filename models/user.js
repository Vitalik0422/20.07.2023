const moongose = require('mongoose')
const path = require('path')

const { Schema } = moongose;
const generalSchema = new Schema ({
    profile: {
        nickname: { type: String},
        login:{type: String},
        birthday: { type: String }
    }
})

const modelName = path.basename(__filename, '.js')
const model = moongose.model(modelName, generalSchema);

const addUser = async(nickname,login) => {
    const {id} = await model.create({'profile.nickname': nickname, 'profile.login': login})
    return id;
}

const findOne = async ( content ) => {
    const res = await model.findOne(content)
    return res;
}

module.exports = {
    addUser,
    findOne
}
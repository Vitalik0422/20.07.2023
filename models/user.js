const moongose = require('mongoose')

const { Schema } = moongose;
const generalSchema = new Schema ({
    profile: {
        nickname: { type: String},
        birthday: { type: string }
    }
})

const modelName = path.basename(__filename, '.js')
const model = mongoose.model(modelName, generalSchema);

const findOne = async ( content ) => {
    const res = await model.findOne(content)
    return res;
}

module.exports = {
    findOne
}
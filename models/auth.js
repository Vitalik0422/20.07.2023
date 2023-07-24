
const moongose = require('mongoose')

const { Schema } = moongose;
const generalSchema = new Schema ({
    profile: {
        login: { type: String},
        password: { type: String }
    }
})
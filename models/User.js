const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1 //겹치지 않게
    },
    password: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, //0,1로 사용자 구분
        default: 0
    },
    image: String,
    token: {
        type: String //유효성
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema) // schema를 모델로 묶어주어야하므로

module.exports = { User } //다른 곳에서 쓸 수 있도록 export
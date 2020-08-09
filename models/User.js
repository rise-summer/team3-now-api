const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        default: false
    },
    username: String,
    email: String,
    password: String,
    articles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Article"
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);
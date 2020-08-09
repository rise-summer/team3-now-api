const mongoose = require('mongoose');

const ThreadSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    description: String,
    articles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Article"
        }
    ],
    help: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Help"
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);
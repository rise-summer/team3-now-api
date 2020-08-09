const mongoose = require('mongoose');

const ThreadSchema = new mongoose.Schema({
    ID: Number,
    name: String,
    description: String,
    articles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Article"
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);
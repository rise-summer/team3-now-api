import mongoose from 'mongoose';

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
    resources: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Resource"
        }
    ]
});

module.exports = mongoose.model('Thread', ThreadSchema);

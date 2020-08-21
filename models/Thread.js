import mongoose from 'mongoose';

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

const model = mongoose.model('Thread', ThreadSchema);
export default model;
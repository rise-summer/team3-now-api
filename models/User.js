import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        default: false
    },
    username: {
        type:String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
    articles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Article"
        }
    ],
    savedArticles: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Article"
        }
    ],
    savedResources: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Article"
        }
    ]
});

const model = mongoose.model('User', UserSchema);
export default model;
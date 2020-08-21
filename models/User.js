import mongoose from 'mongoose';

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

const userModel = mongoose.model('User', UserSchema);
export default userModel;
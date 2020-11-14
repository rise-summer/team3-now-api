import mongoose from "mongoose";

//type, title, link, description, upvotes, downvotes
const ResourceSchema = new mongoose.Schema({
    type: {
        type: String,
        required: "Type is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    link: {
        type: String,
        required: "Link is required"
    },
    description:{
        type: String,
        required: "Description is required"
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Resource", ResourceSchema);

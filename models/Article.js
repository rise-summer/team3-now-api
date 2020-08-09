import mongoose from "mongoose";

//Comment schema
const Article = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required"
  },
  content: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
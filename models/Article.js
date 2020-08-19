import mongoose from "mongoose";

//Article schema
const ArticleSchema = new mongoose.Schema({
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

const model = mongoose.model("Article", ArticleSchema);
export default model;
const mongoose = require("mongoose")
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

const BlogModel = mongoose.model("Blog", blogSchema);

module.exports = BlogModel;
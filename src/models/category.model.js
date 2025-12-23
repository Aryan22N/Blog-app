import mongoose from "mongoose";
 
const CategorySchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  img: String,
});

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);

import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    img: String,
    description: String,
    level: String,
    price: Number,
    "discount_price": Number,
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);

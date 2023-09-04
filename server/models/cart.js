import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    // user_id: String,
    course_id: String,
    course_title: String,
    course_description: String,
    course_image: String,
    course_price: Number,
    course_discountPrice: Number,
  }, 
{ timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
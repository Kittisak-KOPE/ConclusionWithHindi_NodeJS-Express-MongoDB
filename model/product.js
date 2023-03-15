const mongoose = require("mongoose");
const { Schema } = mongoose; // Notice

const productSchema = new Schema({
  title: { type: String, require: true, unique: true },
  description: String,
  price: { type: Number, min: [0, "wrong min price"] },
  discountPercentage: {
    type: Number,
    min: [0, "wrong min discount"],
    max: [50, "wrong max discount"],
  },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max rating"],
  },
  brand: { type: String, require: true },
  category: { type: String, require: true },
  thumbnail: { type: String, require: true },
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);

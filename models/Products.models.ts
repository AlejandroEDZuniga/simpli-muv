import { Products } from "@/interfaces";
import mongoose, { Model, Schema } from "mongoose";

export interface IProduct extends Products {}

const productSchema = new Schema({
  description: { type: String, required: true },
  img: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
});

const ProductModel: Model<IProduct> =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default ProductModel;

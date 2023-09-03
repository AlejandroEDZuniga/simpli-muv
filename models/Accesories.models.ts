import { Products } from "@/interfaces";
import mongoose, { Model, Schema } from "mongoose";

export interface IAccessories extends Products {}

const accessoriesSchema = new Schema({
  description: { type: String, required: true },
  img: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
});

const AccessoryModel: Model<IAccessories> =
  mongoose.models.Accessories || mongoose.model("Accessories", accessoriesSchema);

export default AccessoryModel;

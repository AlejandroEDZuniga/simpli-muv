import { LeadRequest } from "@/interfaces";
import mongoose, { Model, Schema } from "mongoose";


export interface ILeadRequest extends LeadRequest {
  }
  
const leadSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  interestedProduct: { type: Object, required: true },

});

const LeadModel: Model<ILeadRequest> =
  mongoose.models.Lead || mongoose.model("Lead", leadSchema);

export default LeadModel;



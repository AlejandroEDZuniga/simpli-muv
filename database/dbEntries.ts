import { IProduct } from "@/models/Products.models";
import { IAccessories } from "@/models/Accesories.models";
import { Accesories, Products } from "@/models";
import { db } from ".";
import { isValidObjectId } from "mongoose";


export const getProducts = async (page: number): Promise<IProduct | IAccessories | null> => {
  const limit = 12; 
  const skip = (page - 1) * limit;
  await db.connect();
  const entry = await Products.find().skip(skip).limit(limit).lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(entry));
};


export const getAccesories = async (page :number): Promise<IProduct | IAccessories | null> => {
  const limit =12
  const skip = (page - 1) * limit;
  await db.connect();
  const entry = await Accesories.find().skip(skip).limit(limit).lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(entry));
};



export const getAccessoryById = async (
  id: string
): Promise<IProduct | null> => {
  if (!isValidObjectId(id)) return null;

  await db.connect();
  const entry = await Accesories.findById(id).lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(entry));
};

export const getMotorcicleById = async (
  id: string
): Promise<IProduct | null> => {
  if (!isValidObjectId(id)) return null;

  await db.connect();
  const entry = await Products.findById(id).lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(entry));
};

import type { NextApiRequest, NextApiResponse } from "next";
import { Accesories, Lead, Products } from "@/models";
import { db, seedData } from "@/database";
import ProductModel from "@/models/Products.models";
import AccessoryModel from "@/models/Accesories.models";

type Data = {
  message: string;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "No tiene acceso a este servicio" });
  }

  await db.connect();

  await Lead.deleteMany();
  
  await Products.deleteMany();
  await ProductModel.insertMany(seedData.motorcycles);

  await Accesories.deleteMany();

  await AccessoryModel.insertMany(seedData.accessories);

  await db.disconnect();
  res.status(200).json({ message: "Proceso realizado correctamente" });
}

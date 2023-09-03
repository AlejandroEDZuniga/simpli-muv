
import { db } from "@/database";
import { Accesories } from "@/models";
import { IAccessories } from "@/models/Accesories.models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | IAccessories[] | IAccessories;

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {
  await db.connect();

  switch (req.method) {
    case "GET":
      const { order } = req.query;
      const page = parseInt(req.query.page as string, 10) || 1;
      const limit = 12;
      const skip = (page - 1) * limit;

      let accessories = [];
      

      if (order === 'asc') {
        accessories = await Accesories.find()
        .sort({ price: 1 })
        .skip(skip)
        .limit(limit);
      } else if (order === 'desc') {
        accessories = await Accesories.find()
        .sort({ price: -1 })
        .skip(skip)
        .limit(limit);
      } else {
        accessories = await Accesories.find().skip(skip).limit(limit);
      }

      await db.disconnect();

      return res.status(200).json([...accessories]);

    default:
      await db.disconnect();
      return res.status(404).json({ message: "El Endpoint no existe" });
  }
}

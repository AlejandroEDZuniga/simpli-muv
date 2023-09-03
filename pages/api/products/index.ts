import { db } from "@/database";
import { Products } from "@/models";
import { IProduct } from "@/models/Products.models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | IProduct[] | IProduct;

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await db.connect();

  switch (req.method) {
    case "GET":
      const { order } = req.query;
      const page = parseInt(req.query.page as string, 10) || 1;
      const limit = 12;
      const skip = (page - 1) * limit;

      let products = [];

      if (order === "asc") {
        products = await Products.find()
          .sort({ price: 1 })
          .skip(skip)
          .limit(limit);
      } else if (order === "desc") {
        products = await Products.find()
          .sort({ price: -1 })
          .skip(skip)
          .limit(limit);
      } else {
        products = await Products.find().skip(skip).limit(limit);
      }

      await db.disconnect();

      return res.status(200).json([...products]);

    default:
      await db.disconnect();
      return res.status(404).json({ message: "El Endpoint no existe" });
  }
}

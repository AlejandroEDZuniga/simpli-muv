import { Lead } from "@/models";
import { db } from "../../../database";
import type { NextApiRequest, NextApiResponse } from "next";
import { ILeadRequest } from "@/models/Lead.models";

type Data = { message: string } | ILeadRequest | ILeadRequest[];

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getEntries(res);

    case "POST":
      return postLeadRequest(req, res);

    default:
      return res.status(404).json({ message: "El Endpoint no existe" });
  }
}

const postLeadRequest = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { name, lastName, email, phone, interestedProduct } = req.body;

  const newLeadRequest = new Lead({
    name,
    lastName,
    email,
    phone,
    interestedProduct,
  });
  try {
    await db.connect();

    await newLeadRequest.save();

    await db.disconnect();
    console.log("datos", newLeadRequest)

    return res.status(201).json(newLeadRequest);
  } catch (error) {
    await db.disconnect();
    console.log(error);

    return res
      .status(500)
      .json({ message: "Algo salio mal, revisar consola del servidor" });
  }
};

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();

  const lead = await Lead.find().sort({ createdAt: "ascending" });

  await db.disconnect();

  res.status(200).json(lead);
};

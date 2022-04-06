// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "database/connect";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectDB();
  res.status(200).json({ name: "John Doe" });
}

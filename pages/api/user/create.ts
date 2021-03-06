import { User } from "database/models";
import type { NextApiHandler } from "next";
import validateCredentials from "validators/user/create";
import connectDB from "database/connect";
import { modifyError } from "api_utils";

const handler: NextApiHandler = async (req, res) => {
  await connectDB();
  if (req.method === "POST") {
    try {
      const userCredentials = await validateCredentials(req.body);
      await User.create(userCredentials);
      return res.status(201).json({ success: true });
    } catch (error: any) {
      console.log(error);
      const { name, message, status } = modifyError(error);
      return res
        .status(status)
        .json({ success: false, error: { name, message } });
    }
  }
  return res.status(405).json({
    success: false,
    error: {
      name: "method",
      message: "Only a post request is accepted in this route",
    },
  });
};

export default handler;

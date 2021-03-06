import ApiError from "errors/api";
import Session from "database/models/Session";
import User from "database/models/User";
import type { NextApiRequestX } from "types/next";

export async function attachUser(req: NextApiRequestX) {
  const { ssId } = req.cookies;
  if (!ssId) return (req.user = null);

  const _user = await Session.findById(ssId)
    .populate("uId", "-createdAt -password")
    .select("uId -_id")
    .lean();
  if (!_user || !_user.uId) return (req.user = null);

  const user = _user.uId;
  req.user = user;
}

export async function restrictToLogin(req: NextApiRequestX, errorMsg?: string) {
  await attachUser(req);
  if (!req.user)
    throw new ApiError(
      "login",
      errorMsg || "No user is logged-in currently",
      401
    );
}

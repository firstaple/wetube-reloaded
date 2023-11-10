import express from "express";
import {
  finishGithubLogin,
  getEdit,
  logout,
  postEdit,
  remove,
  see,
  startGithubLogin,
} from "../controllers/userController";
import { protectorMiddlewware, publicOnlyMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddlewware, logout);
userRouter.route("/edit").all(protectorMiddlewware).get(getEdit).post(postEdit);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get(":id", see);

export default userRouter;

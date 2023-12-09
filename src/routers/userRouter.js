import express from "express";
import {
  finishGithubLogin,
  getChangePassword,
  getEdit,
  logout,
  postChangepassword,
  postEdit,
  remove,
  see,
  startGithubLogin,
} from "../controllers/userController";
import {
  avatarUpload,
  protectorMiddleware,
  publicOnlyMiddleware,
} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);

userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit);

userRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangepassword);

userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);

userRouter.get("/:id", see);

export default userRouter;

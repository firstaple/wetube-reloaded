import express from "express";
import {
  deletVideo,
  edit,
  see,
  upload,
  watch,
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deletVideo);

export default videoRouter;

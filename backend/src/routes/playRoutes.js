import * as playController from '../controllers/playController.js'
import express from "express";

const playRouter = express.Router();

playRouter.post("/", playController.writePlayData)
playRouter.post("/user", playController.writeUserData)
playRouter.get("/list", playController.list)

export default playRouter;

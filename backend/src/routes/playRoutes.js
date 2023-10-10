import * as playController from '../controllers/playController.js'
import express from "express";

const playRouter = express.Router();

playRouter.post("/", playController.writePlayData)

export default playRouter;

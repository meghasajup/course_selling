import express from "express";
import userRouter from "./userRouter.js";
import courseRouter from "./courseRouter.js";

const v1Router = express.Router();

v1Router.use("/user", userRouter);
v1Router.use("/course", courseRouter);


export default v1Router;

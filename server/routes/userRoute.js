import express from "express"
import { create, getQuesByQuesNo } from "../controller/userController.js"

const route = express.Router();

route.post("/question",create);
route.get("/question/:qno",getQuesByQuesNo);

export default route;

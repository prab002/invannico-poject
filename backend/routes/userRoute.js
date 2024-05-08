import express from "express";
import {
  Create,
  deletUser,
  getAll,
  getOne,
  update,
} from "../controller/userController.js";

const route = express.Router();

route.post("/create", Create);
route.get("/getall", getAll);
route.get("/getOne/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deletUser);

export default route;

import express from "express";
import restauranController from "./controllers/restauranController";
const routerAdmin = express.Router();

// Oshxona
routerAdmin.get("/", restauranController.goHome);

//Signup
routerAdmin
.get("/signup", restauranController.getSignup)
.post("/signup",restauranController.processSignup)



//Login
 routerAdmin
 .get("/login",restauranController.getLogin)
 .post("/login",restauranController.processLogin)


export default routerAdmin;
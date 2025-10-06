import express from "express";

import makeUploader from "./libs/utils/uploader";
import { ProductCollection } from "./libs/enums/product.enum";

import restauranController from "./controllers/restauran.controller";
import productController from "./controllers/product.controller";
const routerAdmin = express.Router();

// Oshxona
routerAdmin.get("/", restauranController.goHome);

//Signup
routerAdmin
.get("/signup", restauranController.getSignup)
.post("/signup",makeUploader("members").single("memberImage"),
restauranController.processSignup)



// Login
 routerAdmin
 .get("/login",restauranController.getLogin)
 .post("/login",restauranController.processLogin)

 // CheckSession 
 routerAdmin.get("/check-me",
  restauranController.checkAuthSession)

 //Logaut 
 routerAdmin.get("/logout", 
 restauranController.logout)


 // >>>>>>>>>>>>>>>> PRODUCTS  <<<<<<<<<<<<<<<<<<<<<<<//
routerAdmin.get("/product/all",
restauranController.verifyRestaurant,
productController.getAllProducts
)

// Cerate Product //

routerAdmin.post("/product/create",
  restauranController.verifyRestaurant, 
  makeUploader("products").array("productImages",5),
  productController.createNewProduct);

  // Update Chosen Product //

routerAdmin.post("/product/:id", 
restauranController.verifyRestaurant,
productController.updateChosenProduct)

// >>>>>>>>>>>>>>>>> USERS <<<<<<<<<<<<<<<<<<< //

routerAdmin.get("/user/all",
// restauranController.verifyRestaurant,
restauranController.getUsers)


routerAdmin.post("user/edit",
 restauranController.verifyRestaurant,
restauranController.updateChosenUser)





export default routerAdmin;
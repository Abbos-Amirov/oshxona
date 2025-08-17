import express from "express";
import restauranController from "./controllers/restauranController";
import makeUploader from "./libs/utils/uploader";
import { ProductCollection } from "./libs/enums/product.enum";
import productController from "./controllers/ productController";
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
 routerAdmin.get("/check-me", restauranController.checkAuthSession)

 //Logaut 
 routerAdmin.get("/logout", restauranController.logout)


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
  




export default routerAdmin;
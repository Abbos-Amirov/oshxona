import {  Request, Response } from "express";
import { T } from "../libs/types/common";

const restauranController:T = {}




// BSSR 
restauranController.goHome = ( req: Request, res: Response) => {
    try{

        console.log("Yetib keldi");
        res.send(" COME HOME")
        

    } catch(err) {
        console.log("ERROR,goHome", err);
        

    }
}

// >>>>>> Signup  <<<<<<<<<//

restauranController.getSignup = (req: Request, res: Response) => {
    try {

        console.log("GetSignup");
        
      res.send("come - Signup");
    } catch (err) {
      console.log("Error, getSignup:", err);
  
    }
  };

  restauranController.processSignup = (req: Request, res: Response) => {
    try {

        console.log("processSignup");
        
      res.send("processSignup");
    } catch (err) {
      console.log("Error, processSignup:", err);
  
    }
  };

  // >>>>>> Login  <<<<<<<<<//

  restauranController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
       res.send("Login");
    } catch (err) {
      console.log("Error, getLogin:", err);
     
  
    }
  };
  

  restauranController.processLogin = (req: Request, res: Response) => {
    try {
        console.log("processLogin");
       res.send("Login");
    } catch (err) {
      console.log("Error, getLogin:", err);
     
  
    }
  };



export default restauranController;

import dotenv from 'dotenv';
dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"
});
import mongoose from 'mongoose';

import server from './app'

mongoose.connect(process.env.MONGO_URL as string,{})
.then((data)=> {
    console.log("Mongodb muoffaqiyatli uladi")
    const PORT = process.env.PORT ?? 3008;
    console.log("Hammsi joida")
    server.listen(PORT, function() {
        console.info( `The server is rumnning successfully on port ${PORT}`)
        console.info( `Admin project on http://localhost:${PORT}/admin \n`)
        
    })
})
.catch((xato) => console.log("Error on connection Mongsodb"));





// CLUSTER => DATABASE => COLLECTION => DOCUMENT



// console.log("PORT:",process.env.PORT )
// console.log("MONGO_URL:",process.env.MONGO_URL )














// import moment from "moment";

// const hozirgiVaqt = moment().format("YYYY MM DD");
// console.log(hozirgiVaqt);

// const person:string ="Oscar";
// const count:number =77;

// // Architectural pattern: MVS, Dependency Injection, MVP  => Architectural patter nima bu backendning malumiotalr oqimini tartibga soldigan vosita yoki qovurgasi


// // Desin patter: Midelleware,Decotar => Desin patten nima =>malumotlar oqimini malom bir qismini tartibga solishda qo'llaniladign pattern hisoblanadi
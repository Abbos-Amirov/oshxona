import express from 'express';
import path from 'path';
import routerAdmin from './router-admin';


// 1- ENTEANCE

const app = express();
app.use(express.static(path.join (__dirname,"public")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 2 - SESSIONS 



// 3 -- VIEWS

app.set("views",path.join(__dirname, "views"));///Users/amirovabbos2022/Desktop/Screenshot 2025-07-15 at 21.58.25.png
app.set("view engine", "ejs");


// 4 -- ROUTERS

 app.use("/admin",routerAdmin)
// app.use("/",router);// midddelware disain pattern

export default app;
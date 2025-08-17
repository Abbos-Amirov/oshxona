import express from 'express';
import path from 'path';
import routerAdmin from './router-admin';
import { T } from './libs/types/common';
import session from 'express-session';
import connectMongoDBSession from 'connect-mongodb-session';


const MongodbStore = connectMongoDBSession(session);
const store = new MongodbStore({
    uri: String(process.env.MONGO_URL),
    collection: 'sessions'
});




// 1- ENTEANCE

const app = express();
app.use(express.static(path.join (__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 2 - SESSIONS 

app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie:{
            maxAge: 1000 * 3600 * 3, //3h
        },
        store: store,
        resave: true,
        saveUninitialized: true,
    })
);


app.use(function (req,res,next){
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next();
})



// 3 -- VIEWS

app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");


// 4 -- ROUTERS

 app.use("/admin",routerAdmin)
// app.use("/",router);// midddelware disain pattern

export default app;


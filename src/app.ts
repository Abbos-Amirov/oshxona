import cors from "cors"
import express from 'express';
import path from 'path';
import router from './ronter';
import routerAdmin from './router-admin';
import morgan from 'morgan';
import { MORGAN_FORMMAT } from './libs/types/config';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import ConnectMongoDB from 'connect-mongodb-session';
import { T } from './libs/types/common';
import {Server as SocketIOServer} from "socket.io";
import http from "http"


const MongodbStore = ConnectMongoDB(session);
const store = new MongodbStore({
    uri: String(process.env.MONGO_URL),
    collection: 'sessions'
});



// 1- ENTEANCE

const app = express();
app.use(express.static(path.join (__dirname,"public")));
app.use("/uploads",express.static("./uploads"))
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials:true, origin:true}))
app.use(express.json());
app.use(cookieParser())
app.use(morgan( MORGAN_FORMMAT ));


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
app.use("/",router);// midddelware disain pattern

const server = http.createServer(app);
const io = new SocketIOServer(server,{ 
    cors:{
        origin: true,
        credentials: true

    }
})

let summaryClient = 0;
io.on("connection", (socket) => {
    summaryClient++;
    console.log( `Connetion & total  [${summaryClient}]`);

    socket.on("disconnect" ,() => {
        summaryClient--;

        console.log( `Disconnetion & total  [${summaryClient}]`)
    })
    
})


export default server;
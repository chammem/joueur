const express =require('express');
const http =require('http');
const mongo = require ('mongoose');
const userRouter = require ('./routes/users');
const residanceRouter = require ('./routes/residences');
const joueurRouter = require ('./routes/joueur.js');
const partieRouter = require ('./routes/partie.js');

const path=require('path');
const {addchat}=require("./controller/userController.js")
const {newpartiesocket}=require("./controller/partieController.js")
const {affichersocket}=require("./controller/partieController.js")


const db = require('./config/db.json');
const { Socket } = require('socket.io');
mongo
     .connect(db.url)
     .then(console.log("database connected"))
     .catch((err)=> {
       console.log(err);});
var app = express();
app.use(express.json());
app.set("views",path.join(__dirname,"views"));
app.set("view engine","twig")
app.use('/users',userRouter);
app.use('/residences',residanceRouter);
app.use('/user',joueurRouter);
app.use('/user',partieRouter);

const server = http.createServer(
    app,console.log("server is run")
)
const io = require('socket.io')(server);
io.on("connection",(socket)=>{
    console.log("user is connected");
    socket.emit("msg","user is connected");

    

    socket.on("partie",(data)=>{
        console.log(JSON.stringify(data))
        newpartiesocket(data);
    io.emit("partie",data);
    })

    socket.on("aff",async (data)=>{
      const datanew = await  affichersocket(data);
    io.emit("aff",datanew);
    })

    socket.on("msgname",(data)=>{
        addchat(data);
    io.emit("msgname",data);
    })

    socket.on("typing",(data)=>{
    socket.broadcast.emit("typing",data);
        })


    socket.on("disconnect", ()=> {
    console.log("user is disconnect")
    io.emit("msg","user is disconnected");

    });
});
server.listen(3000);
module.exports =app;


const express = require("express");
const app = express();
const router=require("./router/auth-router");

app.use("/api/auth",router);

app.get("/",(req,res)=>{
  res.status(200).send("welcome in express js (default file)");
}) 
app.get("/home",(req,res)=>{
    res.status(200).send("welcome in express js(home)");
  })



const PORT=1000;
app.listen(PORT,()=>{
    console.log(`the server is starting form port number ${PORT} this`);
})

const express= require('express');
const app=express();
//importing our midleware 
const Timing= require("./Timing")
app.use(Timing)

//console.log("Hello world and express to Ahmed")
//app.get("/", (req,res)=>{
 //   res.send("Welcome to our Express Checkpoint")
//})
app.get("/style.css", (req,res)=>{
    res.sendFile(__dirname+"/public/style.css")
})

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/public/Home.html")
    
})

app.get("/Services", (req,res)=>{
    res.sendFile(__dirname+"/public/Services.html")
    
})

app.get("/Contact", (req,res)=>{
    res.sendFile(__dirname+"/public/Contact.html")
})
//We can use the following method ; app.use (express.static ('public'))

const PORT=5000;
app.listen(PORT, (err)=> err? console.error(err) : console.log(`Server is runing on ${PORT}`));


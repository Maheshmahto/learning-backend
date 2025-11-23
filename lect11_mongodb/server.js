import express from 'express'
import mongoose from 'mongoose';
import { userRegister } from './controllers/user.js';
// import { User } from './Models/User.js';
userRegister
const app=express();
app.use(express.urlencoded({extended:true}))
// app.get('/',(req,res)=>{
//    res.send(`<h1>hellow world</h1>`)
// })
mongoose.connect('mongodb+srv://Mahesh:Mahesh@cluster0.ocqacnc.mongodb.net/',{
    dbName:'helow'
}).then(()=>console.log("mongodb is connected"))
 .catch((e)=>console.log(e)) 

 app.get('/',(req,res)=>{
    res.render('index.ejs')
 })
 app.post('/form-submit',userRegister)
const port=3000;

app.listen(port,()=>console.log(`server is running on ${port}`));
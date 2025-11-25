import express from 'express';
import mongoose from 'mongoose';
import { shortUrl } from './Controllers/url.js';
// shortUrl
const app=express();
app.use(express.urlencoded({extends:true}))
// mongoose.connect('mongodb+srv://Mahesh:..@cluster0.ocqacnc.mongodb.net/',{
//     dbName:'helow'
// }).then(()=>console.log("mongodb is connected"))
//  .catch((e)=>console.log(e))
 
 
app.get('/',(req,res)=>{
    // res.send('<h1>hellow</h1>')
    res.render('index.ejs',{shortUrl:null})
})
const port=3000;

app.post('/short',shortUrl  )

app.listen(port,()=>{console.log('hi')})
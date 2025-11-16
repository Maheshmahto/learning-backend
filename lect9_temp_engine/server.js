import express from "express";
 import path from 'path'
const app=express();

const port=3000;
app.use(express.static(path.join(path.resolve(),'public')))
app.get('/',(req,res)=>{
  let name='back'
  res.render('index.ejs',{name})
})

app.listen(port,()=>console.log(`port is running on ${port}`));

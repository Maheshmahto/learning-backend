import express from "express";
 import path from 'path'
const app=express();

const port=3000;
app.use(express.static(path.join(path.resolve(),'public')))
console.log(app.use(express.static(path.join(path.resolve(),'public')))
)
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
  res.render('index.ejs')
})
app.post('/form-sub',(req,res)=>{
  console.log(req.body)
  res.json({
    messsage:'your form is submitted',
    success:true
  })
})

app.listen(port,()=>console.log(`port is running on ${port}`));

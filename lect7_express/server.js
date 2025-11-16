import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.send("you are requested for home route")
})
app.get('/home',(req,res)=>{
    res.send("heolw")
})


const port=1000;

app.listen(port,()=>console.log(`server is running on port ${port}`))
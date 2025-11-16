import express from 'express'
import path from 'path'
const app=express();
const data = [
  {
    id: 101,
    name: "Wireless Mouse",
    price: 499,
    category: "Electronics",
    stock: 12
  },
  {
    id: 102,
    name: "Running Shoes",
    price: 1299,
    category: "Footwear",
    stock: 5
  }
];

app.get('/',(req,res)=>{
    // res.json({
    //     message:'fetch all data',
    //     products:data
    // })
   
  // const dir=path.resolve()
  // console.log(dir)
  // const url =path.join(dir,'./index.html')
  // console.log(url)
  // res.sendFile(url)
  const dir=path.resolve()
  console.log(dir)
  const url=path.join(dir,'./index.html')
  console.log(url)
  res.sendFile(url)

})



const port=3000; 

app.listen(port,()=>console.log('hi'))


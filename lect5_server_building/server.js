import http from 'http'

const server=http.createServer((req,res)=>{
    console.log(req)
    res.end("you requested for something")
} );

const port=3000;

server.listen(port,()=>{
    console.log(`port is running on ${port}`)
})
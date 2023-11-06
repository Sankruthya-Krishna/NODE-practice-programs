
// const http=require('http')
// require('dotenv').config()
// const link=require('./link')
// // status codes
// //200->success
// //300->redirect
// //400->page not found
// //500->internal server error
// // client opens the website through web browser then the browser will request the server to connect with the web browser if the server gives response then that response will be given to web browser 
// const server=http.createServer((req,res)=>{
// res.statusCode=200;
// res.setHeader('Content-Type','json')
//  //res.end("yes u r connection established properly");
// if(req.url==='/'){
//     res.end("inside /")
// }
// else if(req.url==='/home'){
//     res.end("inside home")
// }
// })
// //const port=4000

// server.listen(process.env.PORT,()=>{
//     console.log("server is running")
    
// })
const http=require('http')
require('dotenv').config()
const link=require('./link')
const server=http.createServer((req,res)=>{
res.statusCode=200;
res.setHeader=('content-type','json')
if(req.url=='/'){
    res.end("inside /");
}
else if(req.url=='/home'){
    res.end("inside home");
}})
const a=link.add(3,5);
server.listen(process.env.PORT,()=>
{
    console.log("your server is running")
    console.log(a)
})
const fs =require('fs')
const fp='index.txt'
fs.readFile(fp,'utf8',(err,data)=>{
    if(err){
        console.log("redaing errpr file");
    }
    else{
        console.log('file content');
        console.log(data);
    }
}

)

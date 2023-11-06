// let arr=new Array();
// let arr1=[];

const fruits=["pine","apple","banana"];
for( let i=0;i<fruits.length;i++)
// console.log("before replace "+fruits[2]);
//  fruits[2]='orange';
//  console.log("after replace "+fruits[2]);
//  fruits[3]='lemon';
//  console.log(fruits[3]);
console.log(fruits[i]);
for(let fruit of fruits){
    console.log(fruit);
    
}
 fruits.push("pear");
     console.log(fruits);
     fruits.pop();
     console.log(fruits)
 fruits.shift();
 console.log(fruits)
 fruits.unshift('pine');
 console.log(fruits)
 let mi=Math.floor(fruits.length/2);
 fruits.splice( mi,1);
 console.log(fruits)


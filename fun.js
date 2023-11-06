// const add= (a,b)=>{
//     return a+b;
// }
// // function add(a,b){

// // }
// // const add=function (a,b){
// //     return a+b;
// // }
// console.log(add(4,3))
// const hai ={
//     name:'honey',
    
//     // regfun:function(){
//     //     console.log(this.name);
//     // },
//     arrfun:()=>{
//         rollno=571,
//         console.log(rollno);
//     },
// }
// //hai.regfun()
// hai.arrfun()
const abc=[
    {name:'alice',age:30},
    {name:'honey',age:25},
    {name:'fruity',age:31},
    {name:'mintu',age:33},
];
const old=abc.filter(person=>person.age>30);
// const old=abc.map(person=>person.name.toUpperCase());
const ld=abc.map(person=>person.age>30);
console.log('peoples are',old,ld);
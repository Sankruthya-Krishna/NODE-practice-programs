// 'use strict'
// function Print(){
//     console.log(this);
// }
// Print();
function country(name,independence) {
    this.name = name
    this.independence= independence,
     details= {
         flag:'tricoloured',
        currency:'INR',
     }
    
   this.des = function() {
    console.log(` The flag is ${details.flag} and currency is ${details.currency}.`)
    //console.log("the country", + name);
    }

 //},
}
const ind=new country('the country india',1947)
ind.des();
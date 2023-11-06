class car{
    constructor(brand,model,year){
        this.brand=brand
        this.model=model
        this.year=year

    }
    des=()=>{
        console.log(`${this.brand} ${this.model} ${this.year}`)
        console.log("the age of car is: ",2023-this.year)
    }
}
const obj=new car('bmw','hf6',2020)
obj.des();
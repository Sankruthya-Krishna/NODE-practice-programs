class country{
    constructor(name,independence){
        this.name=name
        this.independence=independence
    }
    des=()=> {
        console.log(`${this.name} got independence on ${this.independence}.`);
    }
}
    const ind=new country('india',1947)

    ind.des();


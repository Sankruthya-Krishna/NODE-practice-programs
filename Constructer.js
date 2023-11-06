class Animal {
   
    constructor(name)
    {
        this.name= name;
    }
    sayHi()
    {
        console.log(`${this.name } is dog is an animal..?`);
    }
}
class Dog extends Animal {
constructor(nam) {
    super(nam);
    this.nam=nam;
}
barks()
{
    console.log(`yes ${this.nam} ,dog is an animal`);
}
}

var tree=new Animal("mintu");
var user=new Dog("honey");
tree.sayHi();
user.barks();

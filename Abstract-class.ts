abstract class Human{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    abstract greet():void;
}

class Person extends Human{
    constructor(name:string,age:number){
        super(name,age);
    }

    greet(): void {
        console.log("hello there")
    }
}

let person = new Person("Hemachandiran",23);
person.greet();
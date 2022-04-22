class Person{
    name:string
    constructor(name:string){
        this.name = name;
    }

    getName():string{
        return this.name;

    }


}

class Person2 extends Person{
    constructor(public id:number,name:string){
        super(name);
        this.id = id;
    }

    getDetails(){
        console.log(`Name : ${this.name} and ID: ${this.id}`);
        
    }
}

let person2 = new Person2(12,"John");
person2.getDetails();
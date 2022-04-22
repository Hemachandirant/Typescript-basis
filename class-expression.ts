let Employees =class {
    id:number;
    Name:string;
    Email:string;
    salary:number;

    constructor(id:number,Name:string,Email:string,salary:number){
        this.id = id;
        this.Name = Name;
        this.Email = Email;
        this.salary = salary;
    }

    showInfo(){
        console.log(`Employee ID : ${this.id}`);
        console.log(`Name : ${this.Name}`);
        console.log(`Email : ${this.Email}`);
        console.log(`Salary : ${this.salary}`);
        
        
    }
}

let employee1 = new Employees(12,"John","john@gmail.com",230232);
console.log(employee1);
employee1.showInfo();
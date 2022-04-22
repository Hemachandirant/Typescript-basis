class Student{
    private name:string;
    public age:number;
    protected dept:string;

    constructor(name:string,age:number,dept:string){
        this.name = name;
        this.age = age;
        this.dept = dept;
    }

    showInfo(){
        console.log(`name : ${this.name}`);
        console.log(`age : ${this.age}`);
        console.log(`dept : ${this.dept}`);
    }
}

let student = new Student("Krish",12,"CS");
student.showInfo();
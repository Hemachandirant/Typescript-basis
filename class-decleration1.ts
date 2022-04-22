class User{

    constructor(private id:number,public name:string,protected status:boolean){
        this.id = id;
        this.name = name;
        this.status = status;
    }

    getInfo(){
        console.log(`id : ${this.id}`);
        console.log(`name : ${this.name}`);
        console.log(`status : ${this.status}`);
    }
}

let user = new User(12,"john",true);
user.getInfo();
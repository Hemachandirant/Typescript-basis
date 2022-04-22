class user3{

    constructor(private id:number,public name:string,protected status:boolean){
        this.id = id;
        this.name = name;
        this.status = status;
    }

    getId(){
        return this.id;
    }

    setId(id:number){
        return this.id = id;
    }
}

let user1 = new user3(12,"as",true);


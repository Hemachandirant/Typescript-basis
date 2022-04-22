interface user {
    name:string;
    email:string;
    address?:string;

}

let IUser:user={
    name:"john",
    email:"john@gmail.com"

}

interface details{
    name:string;
    dept:string;
    empId:number;
}
interface details{
    email:string;
    salary:number;
}

let Details:details = {
    name:"David",
    dept:"engineering",
    empId:12,
    email:"david@gmail.com",
    salary:120000
}
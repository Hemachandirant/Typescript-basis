var Employees = /** @class */ (function () {
    function class_1(id, Name, Email, salary) {
        this.id = id;
        this.Name = Name;
        this.Email = Email;
        this.salary = salary;
    }
    class_1.prototype.showInfo = function () {
        console.log("Employee ID : ".concat(this.id));
        console.log("Name : ".concat(this.Name));
        console.log("Email : ".concat(this.Email));
        console.log("Salary : ".concat(this.salary));
    };
    return class_1;
}());
var employee1 = new Employees(12, "John", "john@gmail.com", 230232);
console.log(employee1);
employee1.showInfo();

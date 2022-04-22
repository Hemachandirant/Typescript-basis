var Employee = /** @class */ (function () {
    function Employee(id, Name, Email, salary) {
        this.id = id;
        this.Name = Name;
        this.Email = Email;
        this.salary = salary;
    }
    Employee.prototype.showInfo = function () {
        console.log("Employee ID : ".concat(this.id));
        console.log("Name : ".concat(this.Name));
        console.log("Email : ".concat(this.Email));
        console.log("Salary : ".concat(this.salary));
    };
    return Employee;
}());
var employee = new Employee(12, "John", "john@gmail.com", 230232);
console.log(employee);
employee.showInfo();

var Student = /** @class */ (function () {
    function Student(name, age, dept) {
        this.name = name;
        this.age = age;
        this.dept = dept;
    }
    Student.prototype.showInfo = function () {
        console.log("name : ".concat(this.name));
        console.log("age : ".concat(this.age));
        console.log("dept : ".concat(this.dept));
    };
    return Student;
}());
var student = new Student("Krish", 12, "CS");
student.showInfo();

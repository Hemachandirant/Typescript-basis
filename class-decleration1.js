var User = /** @class */ (function () {
    function User(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.id = id;
        this.name = name;
        this.status = status;
    }
    User.prototype.getInfo = function () {
        console.log("id : ".concat(this.id));
        console.log("name : ".concat(this.name));
        console.log("status : ".concat(this.status));
    };
    return User;
}());
var user = new User(12, "john", true);
user.getInfo();

class User {
    constructor(obj) {
        this.userId = obj.userId;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.phone = obj.phone;
        this.email = obj.email;
        this.password = obj.password;
        this.UserType = obj.UserType;
    }
}

module.exports = User;
const connection = require("../utilities/connections")

let userData = [
    {
        userId: "U1001",
        firstname: "Reshab",
        lastname: "Naskar",
        phone: "0000000000",
        email: "Reshab@gmail.com",
        password: "Reshab123",
        UserType: "T",
    }
]


exports.userSetup = () => {
    return connection.getUserCollection().then((myCollection) => {
        return myCollection.deleteMany().then(() => {
            return myCollection.insertMany(userData).then((data) => {
                if (data) {
                    return "Insertion Successfull"
                } else {
                    throw new Error("Insertion failed")
                }
            })
        })

    })
}
const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
// const url = "mongodb+srv://Reshab1:123rez321@cluster0.gia0faa.mongodb.net/?retryWrites=true&w=majority";
const url = "mongodb://127.0.0.1:27017/CSI";



const userSchema = Schema({
    userId: String,
    firstname: String,
    lastname: String,
    phone: Number,
    email: String,
    password: String,
    UserType: String,
}, { collection: "Udata" })


let collection = {};

collection.getUserCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((database) => {
        return database.model('Udata', userSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}




module.exports = collection;

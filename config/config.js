const mongoose = require('mongoose');

const configdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://person:person@cluster0.g3c7lr1.mongodb.net/mydatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("You are connected to the MongoDB database");
    } catch (err) {
        console.error(err);
    }
}

module.exports = configdb;

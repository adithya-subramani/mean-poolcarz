const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/poolcarz").then(() => {
  console.log("db connection established...");
});

const rideSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "Required Field"],
    },
    name: {
        type: String,
        required: [true, "Required Field"],
    },
    //   offerId: {
    //     type: String,
    //     required: [true, "Required Field"],
    //   },
    //   car: {
    //     type: String,
    //     required: [true, "Required Field"],
    //   },
    strt: {
        type: String,
        required: [true, "Required Field"],
    },
    stop: {
    type: String,
    required: [true, "Required Field"],
    },
    seats: {
        type: Number,
        required: [true, "Required Field"],
    }
});

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true, "Required Field"],
    },
    password : {
        type: String,
        required: [true, "Required Field"],
    }
});

module.exports = [rideSchema,userSchema];

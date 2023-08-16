const mongoose = require('mongoose');


//creating a schema for data to be saved in database using mongoose.
const bookMovieSchema = new mongoose.Schema({
    movie:{
        type:String,
        required:[true,"movie required"],
        trim:true
    },
    slot:{
        type:String,
        required:[true,"Slot required"]
    },
    seats:{
        A1:{
            type:Number
        },
        A2:{
            type:Number
        },
        A3:{
            type:Number
        },
        A4:{
            type:Number
        },
        D1:{
            type:Number
        },
        D2:{
            type:Number
        }
    },
    bookingTimestamp:{
        type:Date,
        default:Date.now
    }
});

//creating a Model based on bookMovieSchema.

const Movie = mongoose.model("Movie",bookMovieSchema)

module.exports = Movie;



const mongoose = require('mongoose');


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
            type:Number,
            default:0
        },
        A2:{
            type:Number,
            default:0
        },
        A3:{
            type:Number,
            default:0
        },
        A4:{
            type:Number,
            default:0
        },
        D1:{
            type:Number,
            default:0
        },
        D2:{
            type:Number,
            default:0
        }
    },
    bookingTimestamp:{
        type:Date,
        default:Date.now
    }
});


const Movie = mongoose.model("Movie",bookMovieSchema)

module.exports = Movie;


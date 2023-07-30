const Movie = require('../Model/bookingSchema');


const BookedMovie = async(req,res)=>{

try{
    const movie = await Movie.create(req.body);
        res.status(200).json({
            status:"Success",
            length:Movie.length,
            data:{
                movie
            }
        })
    }catch(err){
        res.status(400).json({
            status:"Failed",
            error:err.message
        })
    }
}

const getLastBooking = async(req,res)=>{
   try {
        const sortQuery = { timestampField: -1 };
        const lastBookedmovie = await Movie.find().sort({ bookingTimestamp: -1 }).limit(1);
                if(!lastBookedmovie){
                    res.status(404).json({
                        status:"failed",
                        message:"No movie found in database"
                    })
                }else{
                    res.status(200).json({
                        status:"Success",
                        data:{
                            lastBookedmovie
                        }
                    })
                }
   }catch(err){
        res.status(500).json({
            status:"failed",
            error:err.message
        })
   }
}


module.exports = {
    BookedMovie,
    getLastBooking
}
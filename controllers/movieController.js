const Movie = require('../Model/bookingSchema');

// controllers

//for creating a new document inside movies collection. 

const BookedMovie = async(req,res)=>{

try{
    const movie = await Movie.create(req.body);
        res.status(200).
        //rest API structure has been used here 
        json({
            status:"Success",
            data:{
                movie
            }
        })
    }catch(err){
        res.status(400).
        json({          //rest API structure has been used here 
            status:"Failed",
            error:err.message
        })
    }
}


//for getting the last document inside movies collection or fetching the last movie booke by user.
const getLastBooking = async(req,res)=>{
   try {
        const sortQuery = { timestampField: -1 };
        // sorting the movies by their timestapm and setting limit of 1 only to get the last or most recent booked movie.
        const lastBookedmovie = await Movie.find().sort({ bookingTimestamp: -1 }).limit(1);
                if(lastBookedmovie.length === 0){
                    res.status(404).json({
                        //rest API structure
                        status:"failed",
                        message:"No movie found in database"
                    })
                }else{
                    res.status(200).json({
                        //rest api structure
                        status:"Success",
                        data:{
                            lastBookedmovie   
                        }
                    })
                }
   }catch(err){
        res.status(500).json({
            //rest api structure
            status:"failed",
            error:err.message
        })
   }
}
//exporting both controllers
module.exports = {
    BookedMovie,
    getLastBooking
}


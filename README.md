### Project Title

bookmyshow (backend)

### project features

This meticulously crafted backend project streamlines movie bookings by enabling users to effortlessly select movie slots and seats. It employs an Express server for smooth local and remote connectivity. A structured Mongoose schema efficiently organizes and stores data in a MongoDB Atlas Database, including vital movie details. Controllers manage data persistence and retrieval, enhancing user experience. In sum, this project showcases an intelligently designed backend, ensuring seamless movie booking functionalities with a robust Express server, a well-structured schema, and effective controllers.

## Technologies Used:-

- Node.js: Server-side JS runtime for scalable applications.
- Express.js: Web framework for building APIs and apps.
- MongoDB: Flexible NoSQL database for dynamic data.
- MongoDB Atlas: Cloud-based managed MongoDB hosting.
- Mongoose: ODM for MongoDB, schema and validation.
- CORS: Security for cross-origin resource sharing.
- Dotenv: Load environment variables from .env.

## dependencies:-

- cors (^2.8.5)
  - Cross-Origin Resource Sharing middleware to enable secure cross-domain requests.

- dotenv (^16.3.1)
 - Loads environment variables from a .env file into your application's runtime.

- express (^4.18.2)
 - A fast, unopinionated, minimalist web framework for Node.js to build APIs and apps.

- mongoose (^7.4.1)
 - Elegant MongoDB object modeling for Node.js, providing a schema-based solution to interact with MongoDB.

- nodemon (^3.0.1)
 - Utility that monitors for changes and automatically restarts the server during development.


### Database 

 - MongoDB 
 - MongoDB Atlas

### Database connectivity 

- remote 
- local 

## API 

/api/booking

## request method used

- GET - for getting the last or most recent booked movies 
- POST - for creating a new document in movies collection.

## Controllers 

- getLastBooking
- BookedMovie

## deployed on  

- render.com

## deployed link 

- https://bookmyshowbackend-9p5q.onrender.com/
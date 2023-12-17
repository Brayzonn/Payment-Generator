import mongoose from 'mongoose';
require('dotenv').config();




//connect to Mongo
export default async function connectToDatabase() {

    const mongoURI = `mongodb+srv://${process.env.MongoName}:${process.env.MongoPass}@zoneyprojects.sjbew2h.mongodb.net/minilink?retryWrites=true&w=majority`
    
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as mongoose.ConnectOptions);
      console.log('MongoDB connected.....');
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  }



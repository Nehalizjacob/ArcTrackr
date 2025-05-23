import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export async function connectDB(){
    try{
        const dbURI=process.env.MONGO_URI;
        if(!dbURI){
            throw new Error('MONGO_URI is not defined in the environment variables');
        }
        await mongoose.connect(dbURI);
        console.log('MONgoDB connected')
        } catch(error){
            console.error('Error connecting to MOngoDB:',error);
        }
        }
    


import mongoose from "mongoose";
export const dbconnect = (url) =>{
    return mongoose.connect(url);
};
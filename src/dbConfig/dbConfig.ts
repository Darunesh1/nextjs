import mongoose from "mongoose";


export async function connect() {
    try{
        mongoose.connect(process.env.MONGODB_URI!)
        const connecton = mongoose.connection;
        connecton.on("connected",()=>{
            console.log("Connected to database");
        })
        connecton.on("error", (error)=>{
            console.log("Error connecting to database"+error);
            process.exit(1);
        })

    }catch(err){
        console.log("Something is completely wrong:");
        console.log(err);
    }
}

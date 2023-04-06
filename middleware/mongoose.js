import mongoose from "mongoose";

const connection={};

    async function connectDb(){
        if(connection.isConnection){
            return;
        }
        const db=await mongoose.connect(process.env.MONGO_URI)
        
        connection.isConnected=db.connections[0].readyState;
    }

    export default connectDb;
import mongoose from "mongoose";

export async function MongoDBConnect() {
    if (mongoose.connections[0].readyState) {
        return true
    }
    try {
        await mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MongoDb Connected Succesfullly')
        })
        connection.on('error', (err) => {
            console.log('MongoDb Connection Error, please make sure MongoDb is running' + err)
            process.exit();
        })
    } catch (error) {
        console.log("something went wrong with MongoDb connection");
        console.log(error);
    }
}
import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`conectado a la base de datos mongodb ${conn.connection.host}`.bgMagenta.white);
    } catch(error ){
        console.log(`Error en comgo db ${error}`.bgRed.white);
    }
};

export default connectDB;
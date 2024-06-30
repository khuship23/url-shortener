import mongoose from "mongoose";

const connectDb = async () =>{

    try {
        const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`);
        console.log(" MongoDB connected: ",
            connect.connection.host , 
            connect.connection.name);

}catch (eror){
console.log(eror);
process.exit(1);

}}

export default connectDb;

import mongoose from "mongoose";

const Connection = async (URL) => {
    try {
        //awit used for assynchronous Funcion
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error ehile connecting with the database', error);
    }
}
export default Connection;
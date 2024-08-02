import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb+srv://ayushranjanthakur:ayushranjan2024@google-docs-clone.xsjvslv.mongodb.net/Google-Docs-Clone';

    try {
        //await used for assynchronous Funcion
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error ehile connecting with the database', error);
    }
}
export default Connection;
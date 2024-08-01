//file for database schema to validate our data stored in databasr
import mongoose from "mongoose";

const documentSchema = mongoose.Schema({
    _id:{
        type: String,
        reuuired: true
    }, 
    data: {
        type: Object,
        required: true
    }
})
const document =  mongoose.model('document', documentSchema);

export default document;
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const phoneEntry = new Schema({
    firstName: String,
    lastName : String,
    phoneNumber : String
});

export default phoneEntry;
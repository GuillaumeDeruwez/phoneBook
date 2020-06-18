import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const phoneEntry = new Schema({
    firstName: {
        type: String,
        minlength: 1
    },
    lastName : {
        type: String,
        minlength: 1
    },
    phoneNumber : {
        type: String,
        match: /\+[0-9]{2}\s[0-9]{2,}\s[0-9]{6,}/
    }
});

const phoneEntryModel = mongoose.model("phoneEntry", phoneEntry);

export default phoneEntryModel;
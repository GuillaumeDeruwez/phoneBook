import express from 'express'
import mongoose from 'mongoose';
import config from './config.js';
import phoneEntry from './schemas/phoneEntry.js';
import validator from 'express-validator';
const { check } = validator;

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).end());

app.post('/newPhone', [
  check('firstName').not().isEmpty().trim().escape(), 
  check('lastName').not().isEmpty().trim().escape(), 
  check('phoneNumber').not().isEmpty().trim().escape()
], async (req, res) => {
  const {firstName, lastName, phoneNumber} = req.body;
  const phoneEntryModel = mongoose.model("phoneEntry", phoneEntry);
  const newEntry = new phoneEntryModel({
    firstName : firstName,
    lastName : lastName,
    phoneNumber : phoneNumber
  });

  try {
    const conn = await mongoose.connect(config.dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const newDocument = await newEntry.save();
    mongoose.connection.close();
    res.send(newDocument);
  } catch (error) {
    res.sendStatus(500);
  }
});

//do an app put to update existing document, use find one by id to choose which to update

// do an app get to find document and return them.

app.get('/testConnection', async (req, res) => {
  try {
    const conn = await mongoose.connect(config.dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    res.send("connection succesful");
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

app.listen(3000, () => console.log("server starting on port 3000!"));

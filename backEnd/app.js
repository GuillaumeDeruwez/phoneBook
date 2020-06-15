import express from 'express'
import mongoose from 'mongoose';
import config from './config.js';
import phoneEntryModel from './schemas/phoneEntry.js';
import validator from 'express-validator';
import cors from 'cors';

const { check } = validator;

const app = express();

app.use(express.json());

app.options('*', cors())

app.get('/', (req, res) => res.status(200).end());

app.post('/newPhone', [
  check('firstName').not().isEmpty().trim().escape(), 
  check('lastName').not().isEmpty().trim().escape(), 
  check('phoneNumber').not().isEmpty().trim().escape()
], async (req, res) => {
  const {firstName, lastName, phoneNumber} = req.body;
  
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
    res.status(201).send(newDocument);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.patch('/update/:id', [
  check('firstName').optional({nullable : true, checkFalsy : true}).trim().escape(), 
  check('lastName').optional({nullable : true, checkFalsy : true}).trim().escape(), 
  check('phoneNumber').optional({nullable : true, checkFalsy : true}).trim().escape()
], async (req, res) => {
  const id = req.params.id;
  const {firstName, lastName, phoneNumber} = req.body;
  var updateData = {};

  if(firstName) {
    Object.assign(updateData, {firstName : firstName})
  }
  if (lastName) {
    Object.assign(updateData, {lastName : lastName})
  }
  if (phoneNumber) {
    Object.assign(updateData, {phoneNumber : phoneNumber})
  }

  try {
    const conn = await mongoose.connect(config.dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify : false
    });
   
    const updatedEntry = await phoneEntryModel.findByIdAndUpdate(id, updateData, {new : true, runValidators : true})

    mongoose.connection.close();
    res.send(updatedEntry);
  } catch (error) {
    res.sendStatus(500);
  }
})

app.get('/list/', [check('search').not().isEmpty().trim().escape()], async (req, res) => {
  const search = req.query.search;
  try {
    const conn = await mongoose.connect(config.dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
   
    const searchResults = await phoneEntryModel.find({$or : [{ firstName : search }, {lastName: search }, {phoneNumber : search}]});

    mongoose.connection.close();
    if (searchResults.length === 0) {
      res.sendStatus(204);
    } else {
      res.send(JSON.stringify(searchResults));
    }
  } catch (error) {
    res.sendStatus(500);
  }
})

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

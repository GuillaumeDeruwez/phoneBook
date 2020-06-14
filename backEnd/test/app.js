import chai from "chai";
const { expect } = chai;
import request from "request";
import mongoose from 'mongoose';
import phoneEntry from '../schemas/phoneEntry.js';
import config from '../config.js';

const url = "http://localhost:3000/";

describe("Testing the phonebook api", () => {

    describe("Test the entry point", () => {
        it("Returns a status 200", function (done) {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            })
        });
    });

    describe("Test the post route", () => {
        var options = {
            uri: `${url}newPhone`,
            method: 'POST',
            json: {
                "firstName": "Guillaume",
                "lastName": "Deruwez",
                "phoneNumber": "+32 47 4034497"
            }
        };
        var id;

        after(async () => {
            const phoneEntryModel = mongoose.model("phoneEntry", phoneEntry);
            try {
                const conn = await mongoose.connect(config.dbUri, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                });
                const deleted = await phoneEntryModel.findByIdAndDelete(id);
                console.log("document cleaned up from database");
                mongoose.connection.close(); 
            } catch (error) {
                console.log(error);
            }
        });

        it("Returns a status 200 and the same json", function (done) {
            request(options, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(response.body).to.include({
                    "firstName": "Guillaume",
                    "lastName": "Deruwez",
                    "phoneNumber": "+32 47 4034497"
                });
                id = response.body._id;
                done();
            });
        });
    });

    describe("Test the test connection to mongo", () => {
        it("Returns a status 200", function (done) {
            request(`${url}testConnection`, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    });

})
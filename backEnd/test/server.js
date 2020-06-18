import chai from "chai";
const { expect } = chai;
import request from "request";
import mongoose from 'mongoose';
import phoneEntryModel from '../schemas/phoneEntry.js';
import dotenv from "dotenv";

dotenv.config()

const url = "http://localhost:3000/";
const dbURL = process.env.DATABASE_URL;

describe("Testing the phonebook api", () => {

    describe("Test server is alive", () => {
        it("Returns a status 200", function (done) {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            })
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

    describe("Test various routes", () => {
        
        var id;

        // delete created and update document once test are done running to avoid polluting database
        after(async () => {
            try {
                const conn = await mongoose.connect(dbURL, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                });
                const deleted = await phoneEntryModel.findByIdAndDelete(id);
                mongoose.connection.close(); 
            } catch (error) {
                console.log(`this is the error : ${error}`)
            }
        });

        it("Returns a status 201 and the new document from db on post", function (done) {
            const optionsPost = {
                uri: `${url}newPhone`,
                method: 'POST',
                json: {
                    "firstName": "Guillaume",
                    "lastName": "Deruwez",
                    "phoneNumber": "+32 47 4034497"
                }
            };
            request(optionsPost, (error, response, body) => {
                expect(response.statusCode).to.equal(201);
                expect(response.body).to.include({
                    "firstName": "Guillaume",
                    "lastName": "Deruwez",
                    "phoneNumber": "+32 47 4034497"
                });
                id = response.body._id;
                done();
            });
        });

        it("Returns a status 200 and an array containing at least one document", function(done) {
            request(`${url}list/?search=Deruwez`, (error, response, body) => {
                const parsed = JSON.parse(response.body);
                expect(response.statusCode).to.equal(200);
                expect(parsed[0]).to.include({
                    "firstName": "Guillaume",
                    "lastName": "Deruwez",
                    "phoneNumber": "+32 47 4034497"
                });
                done();
            });
        });

        it("Returns a status 204 when no document is found", function(done) {
            request(`${url}list/?search=Frank`, (error, response, body) => {
                expect(response.statusCode).to.equal(204);
                done();
            });
        });

        it("test empty query list to send status 500", function(done) {
            request(`${url}list/`, (error, response, body) => {
                expect(response.statusCode).to.equal(500);
                done();
            });
        });


        it("Retuns a status 200 and the modified document on patch", function(done) {
            const optionsUpdate = {
                uri: `${url}update/${id}`,
                method: 'PATCH',
                json: {
                    "firstName": "William",
                    "lastName": "Melville",
                    "phoneNumber": "+32 47 4034498"
                }
            };
            request(optionsUpdate, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(response.body).to.include({
                    "firstName": "William",
                    "lastName": "Melville",
                    "phoneNumber": "+32 47 4034498"
                });
                done();
            });
        });

        it("Returns a status 200 and the modified document on partial patch", function(done) {
            const optionsUpdatePartial = {
                uri: `${url}update/${id}`,
                method: 'PATCH',
                json: {
                    "lastName": "partial",
                }
            };
            request(optionsUpdatePartial, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(response.body).to.include({
                    "firstName": "William",
                    "lastName": "partial",
                    "phoneNumber": "+32 47 4034498"
                });
                done();
            })
        });
    });
})
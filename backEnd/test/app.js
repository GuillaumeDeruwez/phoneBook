import chai from "chai";
const { expect } = chai;
import request from "request";
import mongoose from 'mongoose';
import phoneEntryModel from '../schemas/phoneEntry.js';
import config from '../config.js';

const url = "http://localhost:3000/";

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

    describe("Test the post route and the update route", () => {
        const optionsPost = {
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

        it("Returns a status 200 and the new document from db on post", function (done) {
            request(optionsPost, (error, response, body) => {
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
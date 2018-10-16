let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let logSchema = new Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    date: {type: Date, default: Date.now()}
});

module.exports = logSchema;

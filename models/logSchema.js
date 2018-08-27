let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let logSchema = new Schema({
    ua: String,
    ip: String,
    date: {type: Date, default: Date.now()}
});

module.exports = logSchema;
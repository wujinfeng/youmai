let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let logSchema = new Schema({
    ip: String,
    channelid: String,
    headlineId: String,
    ua: String,
    date: {type: Date, default: Date.now()}
});

module.exports = logSchema;

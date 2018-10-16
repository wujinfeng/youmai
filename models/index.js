const config = require('../config');
let mongoose = require('mongoose');
let logSchema = require('./logSchema');
let messageSchema = require('./messageSchema');

mongoose.connect(config.mongodb, {useNewUrlParser: true});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log('connection open ok!');
});

let logModel = mongoose.model('Log', logSchema);
let MessageModel = mongoose.model('Message', messageSchema);

module.exports = {
    logModel,
    MessageModel
};

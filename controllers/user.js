const mongo = require('../models');

class User {
    constructor(ctx) {
        this._ctx = ctx;
    }

    download() {
        let ua = this._ctx.header['user-agent'];
        let ip = this._ctx.ip;
        const log = new mongo.logModel({ip: ip, ua: ua});
        log.save().then(() => {
            this._ctx.myLog.info('save to mongodb ok');
        }).catch((err) => {
            this._ctx.myLog.info('save to mongodb err');
            this._ctx.myLog.error(JSON.stringify(err));
        });
        this._ctx.redirect('http://th2w.com/ymapp.apk')
    }
}

module.exports = User;
const fs = require('fs');
const path = require('path');
const mongo = require('../models');

class User {
    constructor(ctx) {
        this._ctx = ctx;
    }

    async download() {
        let ua = this._ctx.header['user-agent'];
        let ip = this._ctx.ip;
        console.log(ua)
        console.log(ip)
        const log = new mongo.logModel({ip: ip, ua: ua});
        log.save().then(() => {
            this._ctx.myLog.info('save to mongodb ok');
        }).catch((err) => {
            this._ctx.myLog.info('save to mongodb err');
            this._ctx.myLog.error(JSON.stringify(err));
        });
        this._ctx.myLog.info('下载app');
        this._ctx.response.attachment('ymapp.apk'); // 提示下载的文件名
        this._ctx.body = fs.createReadStream(path.join(__dirname, '../public/ymapp.apk'));
    }
}

module.exports = User;
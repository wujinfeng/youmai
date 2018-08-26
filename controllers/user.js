const fs = require('fs');
const path = require('path');

class User {
    constructor(ctx) {
        this._ctx = ctx;
    }

    async download() {
	this._ctx.myLog.info('下载文件')
	this._ctx.response.attachment('ymapp.apk')
	this._ctx.body = fs.createReadStream(path.join(__dirname,'../public/ymapp.apk'))
    }
}

module.exports = User;
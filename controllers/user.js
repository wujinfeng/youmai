const mongo = require('../models');

class User {
    constructor(ctx) {
        this._ctx = ctx;
    }

    download() {
        let ua = this._ctx.header['user-agent'];
        let ip = this._ctx.ip;
        let channelid = this._ctx.query.channelid || '';
        let headlineId = this._ctx.query.headlineId || '';
        const log = new mongo.logModel({ip, channelid, headlineId, ua});
        log.save().then(() => {
            this._ctx.myLog.info('ip save to mongodb ok');
        }).catch((err) => {
            this._ctx.myLog.info('ip save to mongodb err');
            this._ctx.myLog.error(JSON.stringify(err));
        });
        this._ctx.redirect('http://th2w.com/ymapp.apk')
    }

    async message() {
        let that = this;
        console.log(this._ctx.request.body)
        console.log(typeof  this._ctx.request.body)
        let name = this._ctx.request.body.name || '';
        let email = this._ctx.request.body.email || '';
        let subject = this._ctx.request.body.subject || '';
        let message = this._ctx.request.body.message || '';
        let m = new mongo.MessageModel({name, email, subject, message});
        try {
            await m.save();
            that._ctx.body = {code: 200, msg: '恭喜提交成功！'};
            that._ctx.myLog.info('message save to mongodb ok');
        } catch (e) {
            that._ctx.body = {code: 500, msg: 'sorry, 提交失败！'};
            that._ctx.myLog.info('message save to mongodb err');
        }
    }

    async getMessage() {
        let that = this;
        try {
            let r = await mongo.MessageModel.find().sort({date: -1});
            await this._ctx.render('message', {
                result: r
            })
        } catch (e) {
            that._ctx.body ='失败！';
        }
    }


}

module.exports = User;

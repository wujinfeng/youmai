const router = require('koa-router')();
const user = require('../controllers/user');

router.get('/user/down', (ctx)=>{
    new user(ctx).download();
});

module.exports = router;
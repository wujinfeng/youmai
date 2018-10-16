const router = require('koa-router')();
const user = require('../controllers/user');

router.get('/user/down', (ctx)=>{
    new user(ctx).download();
});

router.post('/user/message', async (ctx)=>{
   await new user(ctx).message();
});

module.exports = router;

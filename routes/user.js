const router = require('koa-router')();
const user = require('../controllers/user');

router.get('/user/down', (ctx)=>{
    new user(ctx).download();
});

router.post('/user/message', async (ctx)=>{
   await new user(ctx).message();
});

router.get('/user/getMessage', async (ctx)=>{
    await new user(ctx).getMessage();
});

module.exports = router;

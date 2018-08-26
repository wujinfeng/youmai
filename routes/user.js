const router = require('koa-router')();
const user = require('../controllers/user');

router.get('/user/down', async (ctx)=>{
    await new user(ctx).download();
});

module.exports = router;
const Koa = require('koa');
const Router = require('@koa/router');
const Cheerio = require('cheerio');
const Superagent = require('superagent');
const Charset = require('superagent-charset');

const superagent = Charset(Superagent);
const app = new Koa();
const router = new Router();

router.get('/', function(ctx, next) {
  ctx.body = "搭建好了";
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3010, () => {
  console.log('[服务已开启,访问地址为：] http://localhost:3010/');
});


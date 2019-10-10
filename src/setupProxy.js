const proxy = require('http-proxy-middleware');

/* 
将以 api 开头，action 结尾的请求，都代理到了本地的 4000 端口，
修改了请求的 path，去掉了 api，并替换了 action

这样，在开发环境中，访问后端的接口，就会代理到本地的 json，
在生产环境中，代码也不必修改（因为请求api不一样）。
*/
module.exports = function(app) {
    app.use(proxy('/api/**/*.action', {
        target: 'http://localhost:4000',
        pathRewrite(path) {
            return path.replace('/api', '/').replace('.action', '.json');
        }
    }));
};

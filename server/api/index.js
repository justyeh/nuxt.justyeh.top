const needAuth = require('../../util/api.config').needAuth

module.exports = app => {

    //实现登陆拦截
    app.use('/api', function (req, res, next) {
        let path = req.originalUrl;
        if (needAuth.indexOf(path) > 0) {
            var token = req.headers['authorization'];
            console.log(token)
        }/* else {
            next();
        }*/
        next();
    })


    app.get('/api', (req, res) => {
        res.json({ message: '欢迎使用justyeh的API服务！' });
    })

    app.use('/api/user', require('./user'))

    app.use('/api/post', require('./post'))

    app.use('/api/tag', require('./tag'))

    app.use('/api/post/tag', require('./postTag'))

}
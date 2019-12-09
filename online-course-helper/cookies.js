var fs = require('fs');

var init = function (app) {
    console.log('init cookies service.')

    app.post('/online-course-helper/putCookie', function (req, res) {
        console.log('/putCookie:')
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        fs.writeFileSync(`online-course-helper/cookies/${req.body.name}.cookie`,req.body.value)
        res.send({ ret: true, err: null })
    })

    app.get('/online-course-helper/getCookie', function (req, res) {
        console.log('/getCookie:')
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        var value = fs.readFileSync(`online-course-helper/cookies/${req.query.name}.cookie`)
        res.send({ ret: value, err: null })
    })

    
}

module.exports.init = init
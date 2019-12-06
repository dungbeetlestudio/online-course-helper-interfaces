var fs = require('fs');

var db = {
}

var init = function (app) {
    console.log('init three-widget service.')

    app.get('/three-widget/heart', function (req, res) {
        console.log('/three-widget/heart:')
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        db[req.query.id] = { flag:req.query.flag, deadline:req.query.deadline }
        console.log(req.query)
        res.send({ ret: true, err: null })
    })

    app.get('/three-widget/list', function (req, res) {
        console.log('/three-widget/list')
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        console.log(db)
        res.send({ ret: db, err: null })
    })
}

module.exports.init = init
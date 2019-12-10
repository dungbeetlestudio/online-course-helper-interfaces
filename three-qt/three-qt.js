var fs = require('fs');
var cmd = require('child_process').exec

var db = JSON.parse(fs.readFileSync('three-qt/db.json'))

var init = function (app) {
    console.log('init three-widget service.')

    app.get('/three-qt/heart', function (req, res) {
        console.log('/three-qt/heart:')
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        db[req.query.id].flag = req.query.flag
        db[req.query.id].deadline = parseInt(req.query.deadline)
        console.log(req.query)
        res.send({ ret: true, err: null })
    })

    app.get('/three-qt/list', function (req, res) {
        console.log('/three-qt/list')
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        console.log(db)
        res.send({ ret: db, err: null })
    })

    app.get('/three-qt/authorization',function (req,res) {
        var currentTime = new Date()
        var deadline = currentTime.setMonth(currentTime.getMonth() + 3);
        console.log(deadline.valueOf() / 1000)
        
        if(db[req.query.id] != null && db[req.query.id].tried) {
            res.send({ ret: `http://${req.headers.host}/keys/${req.query.id}.key`, err: "重复申请！" }) 
            return
        }

        console.log('/three-qt/authorization')
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        
        cmd(`./authorization ${req.query.id} ${req.query.flag} ${deadline.valueOf() / 1000}`,{cwd:'three-qt/'},function(error, stdout, stderr) {
           if(error) {
                res.send({ ret: null, err: "参数不对！" })
                return
           }
           
           db[req.query.id] = { flag:req.query.flag, deadline:deadline.valueOf() / 1000, tried:true }
           fs.renameSync(`three-qt/${stdout}`,`three-qt/keys/${stdout}`)
           res.send({ ret: `http://${req.headers.host}/keys/${stdout}`, err: null })
           fs.writeFileSync('three-qt/db.json',JSON.stringify(db,null," "))
        })
    })
}

module.exports.init = init

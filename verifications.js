var multer = require('multer')
var upload = multer({ dest: 'online-course-helper/verifications' });
var fs = require('fs');

var db = new Set(['614332022-xfskyl6422.png'])

var init = function (app) {
    console.log('init verifications service.')

    app.post('/online-course-helper/putVerification', upload.single("image"), function (req, res) {
        console.log('/putVerification:')
        fs.renameSync(req.file.path, req.file.destination + '/' + req.file.originalname);
        db.add(req.file.originalname)
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: true, err: null })
    })

    app.get('/online-course-helper/getVerification', function (req, res) {
        console.log('/getVerification:')
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        for (name of db) break
        if (db.size) res.send({ ret: `http://${req.headers.host}/verification/${name}`, err: null })
        else res.send({ ret: null, err: null })
        db.delete(name)
    })

    app.get('/online-course-helper/putVerificationStatus', function (req, res) {
        console.log('/putVerificationState:')
        fs.unlinkSync(`online-course-helper/verifications/${req.query.name}`)
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: true, err: null })
    })
}

module.exports.init = init
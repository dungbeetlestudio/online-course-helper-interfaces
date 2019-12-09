var express = require('express')
var bodyParser = require('body-parser')
var bodyCookie = require('cookie-parser')
var session = require('express-session')

var app = express()

app.use(express.static('www'))
app.use(express.static('test'))
app.use(express.static('three-qt'))
app.use(express.static('online-course-helper'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: 'online-course-helper',
    key: 'online-course-helper',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
    resave: false,
    saveUninitialized: true,
}));

var main = async () => {
    require('./online-course-helper/robots').init(app)
    require('./online-course-helper/verifications').init(app)
    require('./online-course-helper/cookies').init(app)
    require('./three-qt/three-qt').init(app)
    
    app.listen(8000, function () {
        console.log('HTTP Server is running on: http://www.dungbeetles.xyz:8000/online-course-helper')
    })
}

main()
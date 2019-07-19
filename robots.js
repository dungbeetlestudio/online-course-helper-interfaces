var db = [
    {
        course: 'Ionic 4的学习与使用',            //直播间名，或者课程名
        accounts: [                              //用户提供的额外学生
            ['517013400', 'xfskyl'],             //需要执行任务的学生账号1
            ['614332022', 'xfskyl'],             //需要执行任务的学生账号2
            ['xfskyl@sina.com', 'xfskyl'],       //需要执行任务的学生账号3
            ['784593893', 'xfskyl'],             //需要执行任务的学生账号4
            ['sl.truman', 'xfskyl'],             //需要执行任务的学生账号5
            ['abceafiiw', 'xfskyl'],             //需要执行任务的学生账号6
        ],
        interactions: [                          //互动语言列表
            '老师666666！！',
            '老师牛逼！！',
            '吊吊吊！！',
            '赞一个！！',
            '长得帅啊！',
            '买买买！'
        ],
        questions: [                             //提出问题列表
            '那么学费是多少呢？',
            '这个课程要学多久呢？',
        ]
    }
]

var studentStatus = { '517013400': '上课中' }

var init = function (app) {
    console.log('init peoples service.')

    app.post('/online-course-helper/putCourseTask', function (req, res) {
        console.log('/putCourseTask:')
        db.push(req.body)
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: true, err: null })
    })

    app.get('/online-course-helper/getCourseTask', function (req, res) {
        console.log('/getCourseTask:')
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')      
        if (db.size) res.send({ ret: db.splice(0,1), err: null })
        else res.send({ ret: null, err: null })
    })

    app.get('/online-course-helper/setStudentStatus', function (req, res) {
        console.log('/tellStatus:')
        studentStatus[req.query.account] = req.query.status
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: true, err: null })
    })

    app.get('/online-course-helper/getStudentsStatus', function (req, res) {
        console.log('/numberOfRobotsOfStatus:')
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*')
        res.send({ ret: studentStatus[req.query.account], err: true })
    })
}

module.exports.init = init